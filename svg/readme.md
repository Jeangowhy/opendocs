
/SVG Informal Talk
==================
-   Scalable Vector Graphics (SVG) 2 - W3C Editor’s Draft 08 March 2023 
    https://svgwg.org/svg2-draft/single-page.html
-   Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification
    https://www.w3.org/TR/2011/REC-CSS2-20110607/
    https://www.w3.org/TR/CSS22/
-   SVG Tutorial by Jakob Jenkov    
    https://jenkov.com/tutorials/svg/index.html

SVG 全称 Scalable Vector Graphics，可伸缩式向量图形，俗称矢量图。它与位图（bitmap）即以
比特数据定义像素的图形有着完全不同的绘画逻辑：SVG 基于几何逻辑行为进行构图。这种绘图方式的一特点
就是图形尺寸非固定，可自由伸缩。这是一种程序化的绘图方法，与分形一样是计算机图形学上的一个重要分支。
以下是几种常见的绘图逻辑形式：

位图：使用比特（bit）数据定义像素点，图像由任意的像素集合构成；修改图形就是修改比特数据中记录的色值。

SVG：使用几何逻辑绘图，比如使用 `<line>` 标签绘制直线， `<rect>` 绘制一个方块等等。

以上是两种最常见的图形分类，在计算机图形学上，有两个最基础的曲面和形状表示形式： 

1. Explicit geometry 显式几何，直观的几何图形，比如一个球体、一个盒子，或者点云，等等。
2. Implicit Geometry 隐式几何，比如几何方程，fractal（分形）和建设立体几何（Constructive Solid Geometry）；

计算机图形学是建立在 GPU 硬件绘画基础上的图形技术，图形通过 GPU 程序（着色器）进行流水线化的渲染。
图形由程序化生成，效果绚烂多彩，丰富多变，想象空间巨大。

CSG - Constructive Solid Geometry 是指通过一系列基本几何的基本运算来定义新的几何。

Fractals（分形）是一个自相似的程序，通过重复自己的一个部分并不断递归、丰富细节，局部一点就像整体。
分形（Fractal）一词，是 芒德勃罗 创造出来的，其原意具有不规则、支离破碎等意义。

SVG 绘画形式中，定义了一个用于呈现图像的画布对象（Canvas），SVG 绘图指令就在画布上绘制图形元素。
其内部使用 ViewPort 和 ViewBox 两个概念完成绘画空间与屏幕图像空间的映射。因为 SVG 画布是一个
抽象的绘画空间，拥有无限的边界，最大可绘制的图形只取决于计算机的运算能力，以级 ViewBox 的映射。

SVG 图形基本的着色属性有两个：`fill` 和 `stroke`，对应笔触、绘画区内部的填充色和外围轮廓线。
语法和在 HTML 里使用 CSS 相似，就是 background、border 对应为 fill 和 stroke。
此外，还有线条连接点（顶点）的样式处理，盖帽样式，比如尖角、圆角、夹角。简单颜色表达有多种形式：

    fill="rgb(100, 149, 237)"   by rgb
    fill="#6495ED"              by hex value
    fill="aliceblue"            by color name

XML 格式文档是 SVG 图形的标准载体，但是 SVG 除了使用规范的 XML 文档保存，还可以作为片段的形式
用于 Web 程序中，或者其它场合。前者称为合规的 SVG 独立文档，Conforming SVG Stand-Alone Documents，
后者则是合规的内嵌 SVG 片段，Conforming SVG Included Document Fragments。两种形式都
可以在 Web 页面中使用 SVG 图形，Web 环境下，SVG 可以使用 CSS2 样式表和 JavaScript 编程模型。

```svg
<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
  <circle id="circle2" cx="50" cy="50" r="25" style="fill:red;" onclick="toggle(evt)">
  Sorry, your browser does not support inline SVG.
  </circle>
  <style>
    circle { cursor: pointer; }
  </style>
  <script type="text/javascript">
    // <![CDATA[
    function toggle(evt) {
      var target = evt.target;
      var radius = target.getAttribute("r");
      circle = document.getElementById("circle2")
      circle == target || alert("circle and target should be equal")

      if (radius == 15) {
        radius = 45;
        circle.style.fill="red";
      } else {
        circle.style.fill="green";
        radius = 15;
      }

      target.setAttribute("r", radius);
   }
   function setClipboard(text) {
      var type = "text/plain";
      var blob = new Blob([text], { type });
      var data = [new ClipboardItem({ [type]: blob })];

      navigator.clipboard.write(data).then(
        function () {
            console.log("/* copy successful */")
        },
        function (evt) {
            console.log("/* copy failure */", evt)
        }
      );
    }
   // ]]>
  </script>
</svg>
```

以上 SVG 片段可以直接嵌入到 Web 页面上使用，此外，有多种方法在 Web 页面中引入 SVG 图形：

- Inline 方式，即以上这种直接在页面编写的 SVG 片段，可以直接与 JavaScript 交互；
- External 方式，使用 `<embed>` `<object>` `<iframe>`  `<img>` 标签或者 background-image 样式属性。

    `<object id="svg-object" data="path/to/external.svg" type="image/svg+xml"></object>`

和光栅图形一样，SVG 图形可以使用 URL 连接到文件，也可以使用 base64 编码嵌入 HTML 页面：

      background: url(./pictures/haskell-warning.svg) no-repeat 16px 16px;
      background: url(data:image/svg+xml;base64,...) no-repeat 16px 16px;
      
      <img src="data:image/svg+xml;base64,..."

Linux 提供了 base64 命令，可以直接用于编码 SVG 图形，Windows 系统上可以通过 MSYS64 移植平台
使用 GNU coreutils 工具套件，以下命令直接将编译进行 base64 编码并复制到剪贴板中备用。编码工具
默认按 76 个字符换行显示，通过 -w 0 禁止换行，因为 CSS 不支持换行。另外，图形的 MIME 格式信息
也要对应 SVG 文件（image/svg+xml）：

```sh
img=/od/pictures/haskell-warning.svg
img=/od/pictures/css-148-named-colors.svg
echo "url(data:image/svg+xml;base64,$(base64 -w 0 "$img"))" | clip
```

因为浏览器安全问题，除非是 HTML 内嵌的 SVG 才可以执行脚本交互功能，图片嵌入等方式不可以。
为了执行 SVG 脚本交互，可以单独打开 SVG 图形文档，这样它就是单独在沙箱中执行。

Github 中托管的 Markdown 或者 reStructuredText 文档格式可以显示 SVG 图像，但可能对
XML 文档格式要求更严格，并且国内基本上无法通过 raw.githubusercontent.com 访问图像资源。
反而是 github.dev 可以使用 vscode-cdn.net 一个子域名服务提供图像资源服务，并且也支持
通过 base64 编码嵌入图像。反而 github 官方网站的文档文件中不支持。


- https://github.com/Jeangowhy/opendocs/tree/main/svg
- https://github.dev/Jeangowhy/opendocs/tree/main/svg

- https://github.com/github/dev
- https://docs.github.com/en/codespaces/the-githubdev-web-based-editor

Github dev 切换快捷键是句点（.）。

```sh
# cat | base64 -w 0 | clip <<EOF  # This line dones't work
svg=$(cat <<<'
<?xml version="1.0"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="480" height="180">
    <circle fill="red" cx="240" cy="90" r="80" />
</svg>
')

svg=$(cat <<<'
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="480" height="180">
    <circle fill="red" cx="240" cy="90" r="80" />
</svg>
')
echo -n "url(data:image/svg+xml;base64,$(echo $svg | base64 -w 0))" | clip
```

出于安全性考虑，引用外部资源的方式，SVG 不能执行脚本交互。

CSS 规范为 Web 视觉设计制定了一套标准色彩模型，其中包含了 148 个命名色彩，现制作成
SVG 参考图供参考：

[![148 named colors of CSS Color Module Level 4](../pictures/css-148-named-colors.svg)](../pictures/css-148-named-colors.svg)

以上 SVG 已经添加脚本功能，可以点击色块复制其色值。
因为浏览器安全问题，除非是 HTML 内嵌的 SVG 才可以执行脚本交互功能，图片嵌入等方式不可以。
为了执行 SVG 脚本交互，可以单独打开 SVG 图形文档，这样它就是单独在沙箱中执行。

作为一个好色之徒，区区 148 个 CSS 标准色是远远不能满足的，还差一个绝美的中国传统色：

![中国红 测试](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+IDwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0ODAiIGhlaWdodD0iMTgwIj4gPGNpcmNsZSBmaWxsPSJyZWQiIGN4PSIyNDAiIGN5PSI5MCIgcj0iODAiIC8+IDwvc3ZnPgo=)

参考资源：

-  国立国会図書館 彩雅 影印版 https://dl.ndl.go.jp/pid/2607750
-  色谱 中科院科技情报编委会名词室.科学出版社 https://www.zhongguose.com/colors.json

SVG Shapes
---------------

SVG 标签分为可显示的 UI 标签和不显示的功能性标签（例如 `<svg>` 和分组标签 `<g>`）。
两大类标签具体用法参考规范文档：Basic Shapes 和 Document Structure 部分。

SVG 规范文档 3.4 Types of graphics elements 则作以下分类：

*   [Shapes]，6 种基本形状，直线与曲线几何图形，以及路径绘图：
    1. line 给定起止坐标（x1, y1, x2, y2）画直线；
    2. rect 给定起点坐标和宽高（x, y, width, height）画矩形，(rx, ry) 设置圆角；
    3. circle 给定圆心坐标（cx, cy, r）和半径画圆；
    4. ellipse 给定圆心坐标（cx, cy, rx, ry）和两半径画椭圆；
    5. polyline 按给定坐标（points）连线，坐标之间使用逗号分隔，每个坐标两个值空格分隔；
    6. polygon 给多个坐标给多边形，坐标形式同上。多边形的 fill 填充的是坐标点连线围起的区域；
    6. path 使用路径指令进行绘图，属性 `d` 中填写绘图指令：

        01. M = moveto (move from one point to another point)
        02. L = lineto (create a line)
        03. H = horizontal lineto (create a horizontal line)
        04. V = vertical lineto (create a vertical line)
        05. C = curveto (Cubic Bézier curve)
        06. S = smooth curveto (shorthand/smooth curveto)
        07. Q = quadratic Bézier curve (create a quadratic Bézier curve)
        08. T = smooth quadratic Bézier curveto (Shorthand/smooth quadratic Bézier curve)
        09. A = elliptical Arc (create a elliptical arc)
        10. Z = closepath (close the path)
    
*   [Text] 文本内容，用于呈现表达文字符号，使用 `<text>` 标签。
    可以设置字体、字号（font-family，font-size, font-weight）。
    可以设置位置坐标和偏移值（x y dx dy），以及字符单独的旋转（rotate），区别于几何旋转变换。
    如果，部分文本需要做特别处理，还可用 `<tspan>` 标签进行文字修整，包括手动将长文本换行。
    因为 SVG 对文本排版支持较弱，文本不能自动分行，新规范的 inline-size 属性亦未得到有效实现。
    暂行办法除了手动 `<tspan>` 分行，还有就是使用 `<foreignObject>` 包括 HTML 标签来做排版。
    配合 `<textPath>` 标签和路径，还可以将文字沿着曲线分布排列，使用 path 属性指定曲线。
    
*   可替代内容，主要是各种多媒体数据：

    *   Raster images，光栅图像，也就是位图一类的图形，使用一个数组包含图形的色值与透明度信息。
    *   Video，视频，即由一系列光栅图像构成的动态影像。
    *   Animation，运动图形（动画），也即是 Motion Graph，基于时间变化的矢量图形动画。
    *   Foreign objects，外部对象，用于呈现非 SVG 内容。

绘制多边形时，因为线条有可能交叉，这涉及到如何填充图形的问题，对于一个凸壳（Convex hull）形状，
自然就是填充边线围起来的中心区域，因为过凸壳两条边的直线只能与图形本身形成两个交点，不存在线条分割
中心区的问题。相反，当线条交叉形成重叠区，比如用多边形工具画五角星，中心区就是一个复杂的位置。
使用 `fill-rule` 属性可以指定填充算法，nonzero | evenodd。

nonzero 通过描述从某点向任意方向绘制射线，并统计路径上每一条线段与射线相交的情况来确定该点是否属于形状的内部或外部。如果统计结果为0，则表示该点在形状的外部；如果结果不为0，则表示该点在形状的内部。
evenodd 从该点向任意方向无限远处绘制射线，并统计这个形状所有的路径段中，与射线相交的路径段的数量。如果有奇数个路径段与射线相交，则点在内部；如果有偶数个，则点在外部。

使用路径绘画时注意：

01. 重复执行同一命令，则可以省略后续的命令，只需提供坐标数据。
02. 命令大写表示使用绝对坐标值，小写表示相对坐标值。
03. 两个坐标值使用空格隔开，与命令可以不分隔，多个空格当作一个空格看待。
04. 如果只能绘画不相连的线条，那么 fill 属性就无效，没有形成可以填充的区域。
05. H、V 表示从当前位置画水平线、竖直线，每组坐标接收一个值，(x)+ 或者 (y)+；
06. M、L 都接收每组两个值的坐标，(x y)+；
07. T 简化版二次贝塞尔曲线（Shorthand/smooth quadratic Bézier) 接收每组一对坐标 (x y)+；
08. S 简化版本平滑曲线（）接收每组两对坐标，(x2 y2 x y)+；
09. Q 二次贝塞尔曲线（Quadratic Bézier）接收每组两对坐标，(x1 y1 x y)+；
10. C 三次贝塞尔曲线 **Cubic Bézier** 接收每组三对坐标值，(x1 y1 x2 y2 x y)+；
11. A 椭圆弧线（elliptical arc）参数最复杂，(rx ry x-axis-rotation large-arc-flag sweep-flag x y)+
12. Z 封闭路径，没有参数。

二次贝塞尔曲线只有一个控制点，因为起点是当前位置，所以只需要给出控制点 (x1 y1) 和目标点 (x y)。
三次迪塞尔曲线则控制更细化，设置了两个控制点，分别控制曲线的前半段和后半段，所以参数是三个坐标
为一组，(x1 y1 x2 y2 x y)+ ，每组最后一个坐标是目标点，也就是下次绘制曲线的起点。

二次贝塞尔曲线（Quadratic Bézier Curves）特点是两坐标间绘制的曲线，与两点到控制点连线的
两中点的连线相切。曲线差不多会与控制点到两顶点的连线的垂直线的一半位置相切。

虽然贝塞尔曲线的阶数可以很高，但是如果曲线的阶数过高，调整控制点对曲线的影响
就比较小，调整起来相当麻烦。于是，通常用分段的贝塞尔曲线，保证每一小段不会太复杂。这样每次只用调小段，
还可以做到只调局部不影响大局，那就相当舒服了。

分段带来的唯一问题是，曲线在段与段的交界处，如何保证平滑？所谓平滑，其实就是一阶导数连续，也就是
左右导数的极限相同。曲线需要插值反走样（Anti-Aliasing），离曲部越近的像素的像素值越高即可。

从实际应用中，曲线几乎就是 SVG 的根本，所有复杂的 SVG 绘图必然会使用曲线。路径指令（path）
是绘制曲线的重要方式，曲线的使用除了直接作为图形，也可以用作控制线，由一些标签的 path 属性
来指定要引用的曲线，比如设置文字沿曲线分布的标签： `<textPath>`。

除了 fill 和 stroke 两个主要着色属性，SVG 另外提供了一些修饰性的图形功能：

stroke-opacity：指定描边的透明度，值范围在 0~1 之间，对应 0% ~ 100% 的不透明度。
stroke-linecap：线段盖帽，用于指定路径的端点样式，butt 平头，round 圆头，square 方块。
stroke-miterlimit：限制 miter/miter-clip 连接方式的两条线段交角的尖长，超长时就截断到限值范围。
stroke-linejoin：路径线段连接方式，miter miter-clip。
stroke-dasharray：虚线描边控制数组，指定“折线”与其间隔的长度。数组每两值一对，对应“破折号”与间隔长度。
的数字列表（以逗号分隔），如5,3表示“破折号”的长度为5，间隔长度的长度为3。
注意：如果提供了奇数个值，则重复值列表以生成偶数个值。如5，3，2相当于5,3,2,5,3,2。
stroke-dashoffset：虚线的偏移量，一个百分比或数字长度，正值向起点偏移，负值向末点偏移。

更复杂的效果需要引入图形混合以及滤镜特效来实现，SVG 矢量图形主要构成就是以下几个层面：

1. Basic shapes 基本的几何图形：线条、矩形、圆形、弧线、连线、多边形；
2. Complex shape 复杂身体图形：路径绘画命令（path）；
3. Join decoration 线条连接位的修饰；
4. 色彩填充（fill）与笔触轮廓（stroke）;
5. 透明度混合（Alpha Compositing and Blending）；
6. 滤镜特效（Effect Filters）


SVG Containers
---------------

SVG 重要的功能标签包括：

1. 图形引用 `<use>`：引用 SVG 文档中现有的标签，duplication 用途。
2. 容器 `<svg>` `<a>` `<defs>` `<g>` `<marker>` `<mask>` `<pattern>` `<symbol>`
3. 特殊容器（条件处理）`<switch>` `<optional>`
4. 描述性元素 `<title>` `<desc>` `<metadata>`

引用标签 `<use>` 通常和符号定义标签 `<defs>` 配合使用，后者定义图形符号，但不直接被渲染，
后者通过引用机制让定义好的图形符号得以渲染输出。但是 `<use>` 也可以引用 SVG 内的其它元素，
通过 ID 指定要引用的对象。defs 即 Definitions，use 侧是 Use definition (Reference)。

由于 SVG 可复用对象，这也增加了 SVG 服务程序（Generator）、客户程序（Viewer）实现上的麻烦，
同时规范文档中也定义 **shadow tree** 这个术语来表达复用情况下的标签层次结构。正常情况下，
SVG DOM (Document Object Model) 模型中只包含 `<use>` 节点本身和它的属性值，而它所引用
的对象则用影子树（shadow tree）组织、表达。增加影子树也增加了 SVG DOM 处理的算法上的复杂度，
这不得不考虑影子树中的被引用过来的对象，它们的事件、样式、尺寸、布局问题。在影子树中，`<use>` 标签
就当作它引用过来的标签的顶层元素，被引用的元素就是 `<use>` 标签的子元素。不能出现循环引用，
SVG 实现方（SVG Agent）将视为无效引用。

SVG 引用对象的形式是属性关联对象的 ID 值，注意在 href 属性或者 url 方法中的 # 号后的是 ID：

    <use xlink:href='#shape'/>

    <rect x="0" y="0" width="100" height="100" fill="red" mask="url(#mask1)" />

Inkscape 在图层面板上会将 `<use>` 标签显示为一个双层方框并有一个锁头的图标，对象属性面板
（Object Attributes）就只显示“Clone”字样，没有其它属性内容，也没有 `<use>` 标签的属性。
Inkscape 用两个属性面板，另一个更常用到的是 Object Properties，从词汇上讲，property
更偏向资产、性质的含义，它用于显示 SVG 标签中通用的一些属性字段，比如 ID、label 和各种
事件属性。Object Attributes 显示对象特有属性，比如基本形状对象的尺寸数据，或者链接标签
的各种数据。官方将两个面板对应翻译为“对象特性”和“对象属性”。


另外，`<image>`，`<video>` 标签用于引用外部光栅图像、视频文件，可以看作是引用标签的一种特殊情况。

锚点标签 `<a>` 其功能和 HTML 同名标签类似，用于在 SVG 内部跳转链接，如果 SVG 作为代码片段
出现在 Web 页面中的 HTML 标签内，则链接会等同于 HTML 的连接标签。注意：链接标签不能自身嵌套。
参考 SVG 2.0 规范文档中的一致性测试 2.5.5. Conforming SVG Viewers。

标题标签 `<title>` 应该作为容器标签的首个子节点，并且为了兼容 SVG 1.1 规范，只能有一个。
它指定的内容和 HTML 标签中的 title 属性一样，用于在用户光标悬停在 SVG 容器时显示提示文字信息。

> [!NOTE]
> 注意： ['title'] 标签与 ['a'] 锚点标签的 ['xlink:title'] 属性不要搞混，后者用于链接本身。

描述性标签 `<desc>` 与标题标签不同点在于，它的内容只在 SVG 代码中存在，而不会在渲染到输出图形。
通常用它来包括较长的描述性文字。

通常，描述性标签的使用目的是描述容器元素（container element）或图形元素（graphics element），
应该作为待描述元素的直接子元素。然而，SVG 文档可以具有丰富的结构，每个嵌套标签下都可能包含['title']
或 ['desc'] 标签，以及 ['use'] 标签。特别是 ['use'] 本身和其引用内容都有 ['title'] 或 ['desc']。
由于这种复杂的结构，以及[描述性元素]可能出现在任何给定的级别，因此适用于任何给定内容的[描述性元素]是由结构决定的。

分组容器 `<g>`（Grouping）是 SVG 中最通用也最常用使用一个标签，其功能地位等于 DIV 之于 HTML。
分组容器可以任意嵌套，主要功能是用于管理图形对象。Inkscape 等 SVG 绘图软件还用它来实现图形分层。
任何没有被分组容器包括的对象，都将看作是独立的一个分组。

SVG 提供条件处理容器，`<switch>` 标签根据一些客户端环境条件属性，['requiredExtensions'], 
['requiredFeatures'], ['requiredFonts'], ['requiredFormats'] 还有 ['systemLanguage']
等等属性来做条件判断，当满足条件时才渲染子节点（直接子节点）。以下用 systemLanguage 作为检测条件，
系统支持某种语言时，`<switch>` 才显示相应的子节点，如果多种语言都支持，则显示首个符合条件的子节点：

```xml
<?xml version="1.0"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
  <switch >
    <g systemLanguage="es">
        <text x="10" y="20">Spanish</text>
    </g>
    <g systemLanguage="zh">
        <text x="10" y="20">中文</text>
    </g>
    <g systemLanguage="en-UK">
        <text x="10" y="20">UK English</text>
    </g>
    <g systemLanguage="en">
        <text x="10" y="20">English</text>
    </g>
  </switch>
</svg>
```

> [!NOTE]
> 注意：CSS 样式表属性 display 和 visibility 等属性对 `<switch>` 元素没有影响，也不能设置坐标。
> 但是可以使用通用的 transform 进行几何变换。

容器一般不提供定位坐标或大小尺寸设置，分组容器 `<g>`也因为没坐标、尺寸属性。当然，移动（变换）它
也可以 transform 进行几何变换，这是通用的图形变换方法，比如按偏移量移动 "translate(-100 50)"。
几何变换涉及到坐标系统，可以参考规范文档：Coordinate Systems, Transformations and Units。

但是 `<svg>` 这个布局标签除外，它应该作为 SVG 图形文件顶级标签，但同时又可以像分组标签一样
进行嵌套，它的主要功能是布局用途，它可以设置 ViewBox 属性实现图形与画布 ViewPort 的影射变换。

其它的一些容器标签：

1.  剪切蒙版 `<mask>`，使用 mask 样式属性进行 Alpha 混合，将零值（黑色）遮住的区域透明化。
    剪切则是使用 clip-path 属性指定一个 `<clipPath>` 对象，这个对象图形所能覆盖的区域才渲染。
    比如，`style="clip-path: url(#clipPath);"` 引用了 ID 为 clipPath 的剪切对象。
    剪切蒙版，Clipping and masking，是 SVG 图形引擎的基本图形处理流程，参考 Rendering Model。

2.  标记标签 `<marker>` 是一个用图形标记其它直线、线段、多边形等起始、中段、结束位置的标签。
    通过 marker-start marker-mid marker-end 等属性引用一个 marker 对象定义的图形。

3.  图形模板标签 `<pattern>` 用于定义图案，这些图案可作为其它图形的填充色、或笔触绘制出来，
    一般在 `<defs>` 标签内定义图形模板图案，然后通过其它元素的 fill 或者 stroke 属性
    调用图案，比如 **fill="url(#pattern_id)"**。为了控制模板图案，此标签和 `<svg>`
    标签一样可以使用 viewBox 属性。

4.  符号标签 `symbol>` 用于定义图形符号，这些符号可以由 `<use>` 引用后才进行渲染输出；
    Inkscape 等软件通常用它来做了图形库，使用 SVG 进行创作不可能总是从基本的线条开始，
    有些图形是成形固定的，或者有些值得重复使用的符号，就可以定义为图案符号，方便重用。

SVG 标签的设计上，`<defs>` 提供一个符号定义专用场所，`<symbol>` 提供图形符号化的组织，
`<use>` 则提供引用图形复现图形符号的能力。当然，`<defs>` 内也可以直接使用图形标签或容器
标签定义图形，`<symbol>` 也可以直接在其它容器中使用，但从标签设计的语义上说，这些形式
都不是最合适的使用方式。‘[marker]’ 和 ‘[pattern]’ 标签也具有相似用途。

正确的操作是将 `<symbol>` 当作图形符号化工具使用，并且，符号化的图形会限制在其 viewBox 区域内，
超出边界的内容将会被剪裁（clipped），以下例子中的第一个圆（red）就会被剪裁变成 1/4 扇形：

```xml
<svg width="600" height="300" viewBox="-300 -150 600 300" 
    fill="blue" stroke="black" stroke-width="5">
    <symbol id="graph-symbol">
        <circle cx="0" cy="0" r="50" fill="red" onclick="alert('&lt;symbol&gt; handler')" />
    </symbol>
    <use xlink:href="#graph-symbol" x="50" y="25" onclick="alert('&lt;use&gt; handler')" />
    <circle cx="0" cy="0" r="50" />
</svg>
```

另外，`<use>` 标签不能实例化 `<symbol>` 内部引用的其它符号，符号标签还涉及 viewport 问题。


描述性标签 `<metadata>` 是一个信息媒体元数据。

FOAF，即Friend-of-a-Friend，简称FOAF。FOAF 是一种 XML/RDF 词汇表，它以计算机可读的形式描述您通常可能放在主 Web 页面上的个人信息之类的信息。
FOAF 词汇表提供了一种管理社区内信息的有用方法。关于其他人的信息常常是最令人感兴趣的一类数据，而且 FOAF 实现了分散、机器可读和个人描述等需求。但在其自己的应用领域之外，FOAF 提供了用于研究有关构建语义 Web 的概念（链接、信任和起源的概念）的有用试验台。

RDF 是一个框架，用来描述网络资源，诸如网页的标题、作者、修改日期、内容以及版权信息等。

万维网是一个描述资源和资源之间关系的网络。RDF（Resource Description Framework）从名字就可以看出来，是一种描述资源的方式。简单来说每一条描述都是一个主谓宾三元组构成的短句，比如：{ 苹果, 是, 公司 }, { 库克, 是, 人 }, { 苹果, CEO 是, 库克 }


这里还有一个要处理的是三元组本身的歧义：哪天又输入了一条 { 苹果, 是, 水果 }，那怎么办？这和我们之前的苹果不是一个货啊。我们描述的用词本身不能有歧义，有什么唯一表示的方法么？答案就是用 URI（Universal Resource Identifier）。一旦确定每个东西都有唯一表述方式，那么 RDF 三元组的形式就是 { URI, URI, URI } 了。

RDF描述资源的格式由三部分构成：一个RDF图，有两个节点（主体和客体）和一个连接它们的谓词RDF 语句表示两个资源之间的关系。主语和宾语表示两种资源相关，谓词表示其性质关系。关系以方向性的方式表达（从主语到宾语），并在RDF中称为属性。因为 RDF 语句由三元素构成，所以也被称为三元组。每个三元组是一个语句，每个语句断言一个关于资源的事实。


SVG Animation
---------------

首先，介绍高质量视频教学博主 3Blue1Brown（本名 Grant Sanderson）自研的动画引擎 𝕄anim，
此动画引擎因教学演示用途而创建，基于 Python 脚本编程和 FFMPEG 音视频处理框架工具包：

> [!TIP]
> 3Blue1Brown https://www.3blue1brown.com/
> GITHUB: https://github.com/3b1b/manim
> Manim Community: https://www.manim.community/
> 
> Free and Open Source
> Manim is a free and open-source project originally written by Grant Sanderson. 
> It is now maintained by the Manim Community and permissively released under 
> the MIT license.
> 
> Manim is an engine for precise programmatic animations, designed for creating 
> explanatory math videos.
> 
> Note, there are two versions of manim. This repository began as a personal 
> project by the author of 3Blue1Brown for the purpose of animating those videos, 
> with video-specific code available here. In 2020 a group of developers 
> forked it into what is now the community edition, with a goal of being more 
> stable, better tested, quicker to respond to community contributions, and all 
> around friendlier to get started with. See this page for more details.
> 
> Manim runs on Python 3.7 or higher.
> 
> System requirements are FFmpeg, OpenGL and LaTeX (optional, if you want to use 
> LaTeX). For Linux, Pango along with its development headers are required. 
> See instruction here.

```sh
git clone --depth=1 git@github.com:3b1b/manim /pl/manim
git clone --depth=1 git@github.com:ManimCommunity/manim /pl/manim-community
```


SVG 动画是典型的 Motion Graph，相比传统的逐帧绘制的动画，SVG 动画通过控制图形的各种属性来
实现图形动画。这种思维与 3D 动画系统中基于骨骼的动画制作具有同样的模型概念：属性数据驱动动画。
动画领域的前沿，还有基于动作捕捉的动画，Motion Matching 基于输入影像动作模式匹配生成动画。

由于 SVG 动画是基于数据驱动的，与早期 Flash 技术一样，动画设置通常是指定，起点、终止的状态，
中间状态由插值算法生成。因此，SVG 动画标签设计 **calcMode*** 属性用于控制插值算法。由算法
插值产生的中间状态就称为**插值帧**，Interpolation frame，或者称为**补间**动画，In-Betweens。
SVG 有四种插值控制方式：

 discrete 离散方式，不对图形运动使用插值，动画只按照起点状态、终止状态两者进行切换；
 linear 线性插值，`<animate>` 的默认插值模式，按起止状态的数据差值平均分配到每一插值帧；
 paced 步调调整插值，`<animateMotion>` 的默认动画模式，主要是让动画步调一致（even pace）。
 spline 。

步调动画（Paced animations）假设动画起止状态值由 ‘to’, ‘from’, ‘by’ and ‘values’ 属性设置，
并用数值差距（Distance）使用标量定义，比如长度（length），色值（colors）和其经过几何变换后的值。

 assume a notion of distance between the various animation values defined by the ‘to’, ‘from’, ‘by’ and ‘values’ attributes. Distance is defined only for scalar types (such as <length>), colors and the subset of transformation types that are supported by ‘animateTransform’. In the list of distance functions below, Va and Vb represent the two values the distance between which is being calculated.

如果使用 'paced' 插值模式，那么动画标签的 ‘keyTimes’ 和 ‘keySplines’ 属性失效。
参考规范文档 SVG Animation Level 2 - 2.8 Paced animation and complex types。

W3C 专用为平面动画编写的规范文档：
-  [SVG Animation Level 2](https://svgwg.org/specs/animations)
- Synchronized Multimedia Integration Language (SMIL 3.0) https://www.w3.org/TR/REC-smil/

SVG 动画控制标签：

1. `<set>` 设置父层属性。
    例：`<set attributeName="r" to="50" begin="3s" />`
2. `<animate>` 动态地设置父层属性。
    例：`<animate attributeName="cx" begin="0s" dur="8s" from="50" to="90%" repeatCount="indefinite" />`
3. `<animateTransform>` 动态地设置父层几何变换。
    例：`<animateTransform attributeName="transform" begin="0s" dur="1s" type="rotate" from="0 85 85" to="360 85 85" repeatCount="freeze" />`
4. `<animateMotion>` 使用曲线驱动目标对象的运动。
    通过自身的 path 属性填写的路径绘制命令产生曲线，也可以使用 `<mpath>` 子节点引用曲线。

SVG 支持以下动画标签或属性， SMIL 2.1 Animation 规范功能以及对其实现的扩展：

|       Animations      |    Type   |             Specified             |
|-----------------------|-----------|-----------------------------------|
| ⚙['animate']          | element   | SMIL 2.1 Animation                |
| ⚙['set']              | element   | SMIL 2.1 Animation                |
| ⚙['animateMotion']    | element   | SMIL 2.1 Animation                |
| ⚙['animateColor']     | element   | SMIL 2.1 Animation                |
| ⚙['animateTransform'] | element   | compatible extensions to SMIL 2.1 |
| ⚙['path']             | attribute | compatible extensions to SMIL 2.1 |
| ⚙['mpath']            | element   | compatible extensions to SMIL 2.1 |
| ⚙['keyPoints']        | attribute | compatible extensions to SMIL 2.1 |
| ⚙['rotate']           | attribute | compatible extensions to SMIL 2.1 |

动画标签默认以父节点为动画目标对象，为了可以指定动画目标，SVG 在 href 属性值上做了逻辑设计。
以下红色块被 `<animate>` 指定为动画目标对象，其 y 属性将按动画节点设置，在 2s 时间内匀速
移动到 y = 150 的位置。如果动画标签在方块节点内，则不需要显式通过 href 属性指定动画对象。
动画的触发时机是鼠标点击动画目标，即点击色块并延时 100ms 就开始播放动画：

```xml
<svg width="600" height="200">
  <rect id="cool_shape" x="150" width="300" height="50" fill="red" />
  <animate xlink:href="#cool_shape" attributeName="y" begin="click + 100ms"
    dur="2s" to="150" repeatCount="1" fill="freeze"></animate>
</svg>
```

<svg width="600" height="200">
  <rect id="cool_shape" x="150" width="300" height="50" fill="red" />
  <animate xlink:href="#cool_shape" attributeName="y" begin="click + 100ms"
    dur="2s" to="150" repeatCount="1" fill="freeze"></animate>
</svg>


为了增加 SVG 动画触发的信号，SMIL 3.0 规范中，定义了一系列的触发事件符号，它们可以用在 begin
属性中触发动画的启动。参考 17.4 Normative Definition of the SMIL 3.0 Language Profile -
Supported Event Symbols。注意动画触发事件（_event-value_）中引用的是其它动画标签的 ID：

    begin="click"
    begin="foo.click"

    end="foo.focusInEvent + 3s"
    begin="foo.focusOutEvent"
    begin="foo.activateEvent"
    begin="foo.beginEvent + 2s"
    end="foo.endEvent + 2s"
    end="foo.repeatEvent"
    end="foo.inBoundsEvent"
    begin="foo.outOfBoundsEvent + 5s"
    end="toplayout1.topLayoutCloseEvent"
    end="toplayout2.topLayoutOpenEvent+5s"
    end="foo.stateChange(//*)"
    end="root.contentControlChange(systemBitrate)"
    end="root.contentControlChange"

以上功能不一定得到实现，有些功能可能仅限于规范文档的定义之中。

动画中使用的时间单位如下，可用 hh:mm:ss 格式指定时间，适用于 dur, end (规范未完善的属性) 等属性。

|  Time Unit   |    Description
|--------------|------------------------
|  h           | Hours
|  min         | Minutes
|  s           | Seconds
|  ms          | Milliseconds

有效的时间值设置参考：
    `30s`     = 30 seconds  
    `5ms`     = 5 milliseconds  
    `12.467`  = 12 seconds and 467 milliseconds
    `0.1min`  = 6 seconds  


SVG 动画专有属性详情参考 SVG 1.2 Tiny - Attributes to control the timing of the animation。
各属性功能简要说明如下:

-   **xlink:href** 使用 Internationalized Resource Identifiers (IRIs) 引用动画目标对象。
-   **attributeName** 指定一个需要进行动画效果处理的属性，比如 x 或 y 坐标；
-   **attributeType** 目标属性类型，CSS、XML、auto 等；
-   **from** 开始值（起始状态）；
-   **to** 结束值（终止状态）；
-   **by** 增量值（每一帧的变化量）；
-   **dur** 持续时间（Clock values），比如 3s 表示动画用 3 秒种播完；
-   **repeatCount** 指定动画重复播放次数，默认为 1 次，或者指定 indefinite 表示无限循环。
-   **repeatDur** 限制动画重复播时长，达到这个时间长度就不能再重播，默认值 "indefinite"，不限制时长。

-   **begin** 设置播放动画的开始条件，默认值是 0 时间延时。有多种值，并且可以是它些值的列表（分号分隔）：
    *   _offset-value_，典型的时间值（Clock-value），指定延时的时间，比如 3s 延时 3 秒开始播放动画。
    *   _syncbase-value_ 基本同步事件，Id-value "." ( "begin" | "end")，ID 引用其它动画标签。
    *   _event-value_ 通过其它动画标签的事件间接触发，( Id-value "." )? ( event-ref )，参考上面的列表。
    *   _repeat-value_ 通过其它动画重复次数触发，( Id-value "." )? "repeat(" [<integer>] ")"。
    *   _accessKey-value_ 通过访问键触发，比如 `accessKey(s)` 表示按下 s 键播放，浏览器不一定支持。
    *   "indefinite" 通过 `ElementTimeControl` 接口提供的方法启动，或者 Hyperlink-based timing。
        参考 SMIL 2.1 Timing and Synchronization: Hyperlinks and timing。
-   **restart** 指示是否可以重播动画。
    *   默认总是可以生播（"always"），
    *   设置为 "whenNotActive" 可以避免打断正在播放动画过程，等动手播完后才能触发再次播放，
    *   设置为 "never"，则动画播完后就无法再次重播。
-   **fill** 动画时间结束时如何处理动画产生效果（不是指图形的填充色）：
    *   "freeze" 保持动画产生的运动状态。
    *   "remove" 复原图形到动画开始前的状态。

-   **accumulate** (none | sum) 控制动画的数据是否可以进行累积。
-   **additive** (replace | sum) 控制动画的数据以何种方式进行累加：
    *   "repalce" 逐轮播放动画完成后按 to 属性指定的值，并且增加 from 指定的偏移量。
    *   "sum" 逐轮播放动画完成就累加 to 属性指定的值。

部分属性，begin end keyTimes 等等，接收一个参数列表，使用分号分隔。比如 begin="0s;3s;6s;9s"
表示在 SVG 图形加载后的四个时间点播放动画，这种情况下，repeatCount 循环次数无效，除非 indefinite。

以下使用三个色块测试控制动画重启的属性（restart），注意属性值的大小写:

```xml
<svg width="600" height="200">
  <rect id="shape_r1" x="50" width="100" height="50" fill="red" />
  <rect id="shape_r2" x="250" width="100" height="50" fill="green" />
  <rect id="shape_r3" x="450" width="100" height="50" fill="lightblue" />
  <animate xlink:href="#shape_r1" attributeName="y" dur="3s" to="150"
    begin="click" restart="always"></animate>
  <animate xlink:href="#shape_r2" attributeName="y" dur="3s" to="150"
    begin="click" restart="whenNotActive"></animate>
  <animate xlink:href="#shape_r3" attributeName="y" dur="3s" to="150"
    begin="click" restart="never"></animate>
</svg>
```

<svg width="600" height="200">
  <text x="100" y="130" fill="magenta" font-size="22">Click color box to test reastart animation</text>
  <text x="30"  y="180" fill="lightgray">"always" [default]</text>
  <text x="230" y="180" fill="lightgray">"whenNotActive"</text>
  <text x="470" y="180" fill="lightgray">"never"</text>
  <rect id="shape_r1" x="50" width="100" height="50" fill="red" />
  <rect id="shape_r2" x="250" width="100" height="50" fill="green" />
  <rect id="shape_r3" x="450" width="100" height="50" fill="lightblue" />
  <animate xlink:href="#shape_r1" attributeName="y" dur="3s" to="150"
    begin="click" restart="always"></animate>
  <animate xlink:href="#shape_r2" attributeName="y" dur="3s" to="150"
    begin="click" restart="whenNotActive"></animate>
  <animate xlink:href="#shape_r3" attributeName="y" dur="3s" to="150"
    begin="click" restart="never"></animate>
</svg>

当动画需要按“偏移量”进行处理，这就需要累加（additive）和累积（accumulate）动画属性。以下使用
两个矩形来说明这两个属性的使用：需要和 from to 属性搭配使用，from 指定动画启动的初始值，to 
指定的是可以在动画逐次播放过程中被累计的值。右侧淡黄矩形会在动画逐轮播放的过程中累加 y 轴的移动量：

```xml
<svg width="600" height="200">
  <rect id="shape1" x="50" width="200" height="50" fill="lightgray" />
  <rect id="shape2" x="300" width="200" height="50" fill="lightyellow" />
  <animate xlink:href="#shape1" attributeName="y" dur="3s" from="10" to="50" 
    begin="click" repeatCount="5" />
  <animate xlink:href="#shape2" attributeName="y" dur="3s" from="10" to="50"
    begin="click" repeatCount="5" accumulate="sum" additive="sum" />
</svg>
```

<svg width="600" height="200">
  <rect id="shape1" x="50" width="200" height="50" fill="lightgray" />
  <rect id="shape2" x="300" width="200" height="50" fill="lightyellow" />
  <animate xlink:href="#shape1" attributeName="y" dur="3s" from="10" to="50" 
    begin="click" repeatCount="5" />
  <animate xlink:href="#shape2" attributeName="y" dur="3s" from="10" to="50"
    begin="click" repeatCount="5" accumulate="sum" additive="sum" />
</svg>

The ‘[values]’ attribute specifies a sequence of values to use over the course of the animation.

Name : keyTimes

A semicolon-separated list of time values used to control the pacing of the animation. Each time in the list corresponds to a value in the ‘[values]’ attribute list, and defines when the value is used in the animation function.


* ⚙keySplines = "[<list>]"

    A set of Bézier control points associated with the ['keyTimes'] list, defining a cubic Bézier function that controls interval pacing. The attribute value is a semicolon separated list of control point descriptions. Each control point description is a set of four values: `x1 y1 x2 y2`, describing the Bézier control points for one time segment. Note SMIL 2.1 allows these values to be separated either by commas with optional white space, or by white space alone. The ['keyTimes'] values that define the associated segment are the Bézier "anchor points", and the ['keySplines'] values are the control points. Thus, there must be one fewer set of control points than there are ['keyTimes'].

    The values must all be in the range 0 to 1.

    This attribute is ignored unless the ['calcMode'] is set to 'spline'.

    If the ['keySplines'] attribute has a value that doesn't conform to the above requirements the ['keySplines'] attribute has an [unsupported value] and is processed as if the attribute had not been specified.

    Except for any SVG-specific rules explicitly mentioned in this specification, the normative definition for this attribute is found in the [Calculation mode attributes](http://www.w3.org/TR/2005/REC-SMIL2-20051213/animation.html#adef-keySplines) section of the SMIL 2.1 Animation Modules (\[[SMIL21]\], section 3.8.1).



SVG Layouts
---------------

Web 页面内容排版中，常见的元素布局模型有以下几种：

1.  流动布局（Flow Layout） ：流动布局是默认的布局模式，也称为文档流。
    元素按照出现顺序从上到下、从左到右进行排列，出现区块内容则换行。

2.  浮动布局（Float Layout） ：元素从正常的文档流中脱离，并向左或向右浮动，相邻的元素环绕在其周围。

3.  弹性布局（Flexbox Layout） ：一种强大且灵活的布局模式，此模型包含容器和内容物两种对象。
    通过使用 display: flex; 样式属性激活弹性布局容器功能，容器内的子元素可以通过设置灵活的尺寸、
    对齐方式和顺序来自动调整其位置和大小。弹性布局适用于创建水平或垂直居中、等高列布局等。

4.  栅格布局（Grid Layout） ：一种二维布局模式，通过将容器划分为网格（行和列）来控制元素的位置和大小。
    通过使用 display: grid; 样式属性激活容器的网格结构，并指定元素在网格中的位置、间距和尺寸。

5.  定位布局（Positioning Layout）：通过使用 position 样式属性和相关的属性值来精确地定位元素。
    常见的定位值包括相对定位（position: relative;）、绝对定位（position: absolute;）和固定定位
    （position: fixed;）。定位布局适用于创建重叠元素、悬浮效果和精确的布局需求。

CSS 样式表中使用盒模型来修饰 HMTL 标签的渲染，此模型由以下几个部分组成：

1.  内容区域（Content）： width 和 height 属性定义的元素内部实际显示内容的区域。
2.  内边距（Padding）：padding 属性定义的边框到内容物之间的空白区域。
3.  边界（Border）：边界是元素区域与外围元素区域的分界，可以通过设置 border 属性定义边框。
4.  外边距（Margin）：外边距是元素与相邻元素之间的空白区域。通过 margin 属性控制外边距的大小。

CSS 盒模型的算法设计有两种标准：标准盒模型（content-box）和过时的 IE 盒模型（border-box）。
标准盒模型（content-box）中元素的尺寸仅指内容区域的大小。内边距、边框和外边距都会增加元素的总尺寸。
IE 盒模型（border-box）模型中元素的尺寸包括内容区域、内边距和边框的大小，因此增加边距会缩小内容区。

SVG 文档的默认布局模式为绝对定位模式，所有元素“后来居上”，按照出现顺序渲染，因此后出现的图形将
覆盖前面的图形。按照渲染模型（Rendering Model），图形之间的层叠需要进行一个透明度混合
（alpha compositing），也就是 blending 的过程，这是图形处理的基本操作。

SVG 元素不像 HTML 那样设计了 Z-index 深度属性来改变层次的叠加关系，要改变 SVG 元素的叠加关系，
就需要通过调整标签在容器中出现的先后顺序。


viewport and Viewport
---------------------

Inkscape 文档属性设置界面中，Document Properties，包含以下尺寸信息：

1. Width   要显示 SVG 图形的宽度；
2. Height  要显示 SVG 图形的高度；
3. Scale   图形缩放比例；

用户可以设置这些值去影响 SVG 渲染出来的尺寸，但是它们最终会作为 ViewBox 属性值。默认单位是像素，
当修改文档宽高值，包括单位，就会写入 SVG 文档顶级 `<svg>` 标签的 width 和 height 属性。
如果使用默认的 px 单位，则可以省略表达。

Inkscape 设置文档缩放比例（Scale）的逻辑是设置 `<svg>` 标签的 viewbox 属性，通过改变映射
关系来实现文档的缩放。Scale 本身不是 `<svg>` 标签的属性，尽管，几何变换中有 scale 方法。
文档属性中的 Scale 比例值是根据 width/height 和 viewbox 属性之间的映射关系计算得到的。

对于一个指定尺寸的文档，假定为 800 x 400 的宽高，那么，当 viewBox 设置宽高为 800 x 400，
就表示单倍缩放（同等大小），如果将 viewBox 区域缩小一半，那么同样的 Viewport 容纳 SVG 画布
中的图形的范围在缩小，但是 Viewport 本身大小没改变，也就是将画布的图形放大了一倍显示。也就是说，
Inkscape 计算文档的 Scale 值就是 Width / viewBox Width，当两者比例不一致时，就会显示
“Non-uniform scale!” 提示用户，文档顶级 `<svg>` 设置的 viewport 与 viewBox 比例不统一。

视盒 viewBox 属性数据是 [min-x, min-y, width, height]，注意前两个值是 min-x 和 min-y，
不是常用的 x y 坐标。因为视视盒这个抽象概念存在的目的是摄取 SVG 画布中的某一个区域，以渲染显示。
其属性值命名的语义是明显的，即是从 SVG 画布坐标系统中从 [min-x, min-y] 位置截取指定宽高的区域。
截取后的图形映射到 viewport 进行显示，所以 viewBox 只是映射关系的中介者。

使用计算机图形学入门课的插图会更清晰，这是一张透视投影示意图：

![View & Projection Transformation](../pictures/From_perspective_picture_to_orthographic_picture.jpg)

SVG 中情况比 3D 环境的简单，只是二维的投影，和其中的正交投影（orthographic projection）更接近。
在这个示意图中，viewBox 框定的区域就相当于 Near clip plane，更远处的场景对应的是 SVG 画布。

Viewport 与 viewBox 对应的图形宽高比例不一定会一致，那么就需要使用一些限制条件来约束映射关系。
对于那些会建立新的 SVG viewport 的标签，包括 ‘[marker]’, ‘[pattern]’ and ‘[view]’ 等等，
设置 viewBox 属性后，就可以使用 ‘[preserveAspectRatio]’ 属性来约束缩放、级比例关系，后续细说。

其中 `<view>` 是一个专用于视口设置的标签，通过它可以对当前 `<svg>` 等拥有 viewport 的对象
进行视图设置，跟在 `<view>` 标签后的图形就会以它设置坐标作为新的参考位置，并以参考进行绘图。
以下的例子使用 `<view>` 来指定三个圆的：

```xml
<svg viewBox="0 0 300 100" width="300" height="100"
      xmlns="http://www.w3.org/2000/svg">
  <view id="one" viewBox="0 0 100 100" />
  <circle cx="50" cy="50" r="40" fill="red" />

  <view id="two" viewBox="100 0 100 100" />
  <circle cx="150" cy="50" r="40" fill="green" />

  <view id="three" viewBox="200 0 100 100" />
  <circle cx="250" cy="50" r="40" fill="blue" />
</svg>
```

<svg viewBox="0 0 300 100" width="300" height="100"
      xmlns="http://www.w3.org/2000/svg">
  <view id="one" viewBox="0 0 100 100" />
  <circle cx="50" cy="50" r="40" fill="red" />
  <view id="two" viewBox="100 0 100 100" />
  <circle cx="150" cy="50" r="40" fill="green" />
  <view id="three" viewBox="200 0 100 100" />
  <circle cx="250" cy="50" r="40" fill="blue" />
</svg>

SVG 中使用的计量单位如下，默认使用像素（px）作为单位，此外，还有一个 % 百分比计量：

|  Unit  | Description |
|--------|-------------|
|  em    | The default font size - usually the height of a character.
|  ex    | The height of the character x
|  px    | Pixels
|  pt    | Points (1 / 72 of an inch)
|  pc    | Picas (1 / 6 of an inch)
|  cm    | Centimeters
|  mm    | Millimeters
|  in    | Inches

通过设置坐标系统单位（Coordinate System Units）才能赋予数值具体的含义，单位 1 表示的是什么量。
CSS 规范定义 "in" (inch) 单位对应 96 pixels。但是，在高分屏幕上物理单位和像素关系并不是这样。
这些单位的具有不同的约束维度，有物理约束（in，mm，cm，pc，pt）、有相对值约束（%，em，ex），
还有 px 这样的设备无关的单位。显示设备在单位面积上集成的像素点越多，那么每 in 单位所对应的像素越多。
通常使用 DPI（Dot per inch）或者 PPI（pixel per inch）这样的术语来描述设备的精细度。
打印图片一般 300dpi 左右。在传统的显示器上，每英寸对应 96 像素，高分屏幕上的像素密度要加倍。

SVG 顶级标签 `<svg>` 是一个特别的元素，在一个 SVG 图形中意味着定义一个 viewport。其中设置 
width 和 height 属性只影响其本身，即 viewport 尺寸。子元素有自己的尺寸属性单位，默认就是像素。
所谓"顶级"，即每一个 `<svg>` 标签都对应一个画布，无论这个 `<svg>` 标签是否是嵌套的子级。
对其设置的几何变换，只作为于其本身的 viewport。不像分组容器 `<g>`，其几何变换继承并作用于子级。

- **Canvas** 画布，SVG 绘画空间；
- **Viewport** 译作视觉上的窗口，简称视口，也就是在渲染结果中可以看到的图形尺寸；
- **viewBox** 译作视觉盒子，简称视盒，是一个几何空间中抽象的成像设备；

它们的关系就像相机拍摄到的照片（底片），经过洗片显影得到一张张的照片。这个世界看作是一个 canvas，
底片的大小看作是 viewbox，洗出来的照片看作是 viewport。因此，渲染的 SVG 图像要显示画布中哪
一部分，改变 viewbox 的起点和宽高值实现。渲染的 SVG 图像要显示多大多小，改变 viewport 宽高实现。
这中间涉及的映射关系就是在”洗照片“。

任何几何学，都需要建立于坐标系统之上（Coordinate system）。数学中常用的笛卡尔坐标系统，是以
水平向右为 x 轴正向，竖直向上为 y 轴正方向。SVG 在使用的是基于显示器的特殊坐标系统，水平向右
同样是 x 轴正向，但是 y 轴正方向竖直向下。

图形渲染过程在以上这三层关系中，就涉及不同的坐标系统的变换：

1. Viewport coordinate system
2. User coordinate system
3. Geographic coordinate systems

地理坐标系统针对地图信息系统而言，这里主要是视口坐标系统与用户坐标系统。所谓“用户”，并不是指使用
SVG 图形的人，而是对 SVG 标签中那些使用当前坐标系统的情况而言的，比如 viewBox 就是使用用户
坐标系统的属性。简单而言，用户坐标系统就是没有指定单位的坐标，它的单位 1 对应的是当前活动坐标系统
的一个单位的长度。这也就是用户单位 (**user units**) 或用户坐标系统的含义。

参考规范文档：

1. SVG 1.2 Tiny - 7.7.2 ViewBox to viewport transformation
2. SVG 2.0 草案 - Chapter 8: Coordinate Systems, Transformations and Units

整个图形渲染流程中，涉及以下计量和变换：

1. viewBox 的初始值 [min-x, min-y, width, height]
2. 标签元素的初始值 [x, y, width, height]
3. 顶级标签 `<svg>` 的比例约束属性值 [preserveAspectRatio]
4. viewBox 的平移、伸缩变换 [translate, scale]
5. 容器的平移、伸缩变换 [translate, scale]

以下标签都会建立新的 SVG 视口：

*   The ‘[svg]’ element
*   A ‘[symbol]’ element that is instanced by a ‘[use]’ element.

也就是说，Viewport 是图形渲染的出口，它对应的是 viewport coordinate system。
视口坐标系统对应的空间称为 _viewport space_，用户坐标系统的空间称为 _user space_。

SVG 文档中最外层的 `<svg>` 标签所对应的 viewport 就是初始视口，对应的就是初始坐标系统，
包括初始 viewport 坐标系统和初始用户坐标系统，它们都定义在 SVG 文档中，并且是等价的。
即以左上角为坐标原点，右向、下方分别为 x y 轴的正方向。

拥有独立 viewport 的标签，父层级的 viewBox 设置（比如 `<svg>`）与它本身的 viewBox 设置
决定如何影响它的缩放。

保留默认值，会跟随父级 viewport 等比例缩放。但是一但用户设置了 viewBox 它的缩放比例就由自己
决定。而父级 viewBox 的变动因为会影响其它图形的缩放与位置的相对变化，另外还会影响 `<use>` 标签
的相对位置，导致符号图形也像是有相对移动。这些行为是所有拥有独立 viewport 的标签的通性。这些创建
新视口的标签的坐标，就是其 viewport 的原点。这个原点坐标非常重要，因为子层图形的绘画坐标都是以此
作为参考点设置的。如果没显式设置标签的 x y 坐标值，那默认的值就是当前坐标的原点。


```xml
<svg width="600" height="300" viewBox="-300 -150 600 300" 
    fill="blue" stroke="black" stroke-width="5">
    <symbol id="graph-symbol">
        <circle cx="0" cy="0" r="50" fill="red" onclick="alert('&lt;symbol&gt; handler')" />
    </symbol>
    <use xlink:href="#graph-symbol" x="50" y="25" onclick="alert('&lt;use&gt; handler')" />
    <circle cx="0" cy="0" r="50" />
</svg>
```

特别地，transform 作为通用几何变换，它会从父层 viewport 传递到子层，这与 viewBox 机制不同。
因此，SVG 上的图形有两套基本的几何变换：viewport <==> viewBox 之间的影射变换和通用的几何变换。

几何体的变换（transform）通用的方法是使用 4x4 的矩阵来计算，SVG 中常用的是各种平面变换，
包括位移 translate，旋转 rotate，缩放 scale，斜切 skew，或者直接使用 maxtrix 设置变换矩阵。

简单来说，就是仿射变换（Affine Transformation），“仿射变换”就是：“线性变换”+“平移”。
平移本身没有对图形进行变换，只是换了个位置显示，所以它本身不属于“变换”，只是习惯统一概括它。
从几何角度来看(爱尔朗根纲领意义下), 仿射变换不保持度量性质(正交关系和长度、角度、面积等), 
只保持平行和相交关系,

1872 年德国数学家克莱因在埃尔朗根大学的教授就职演讲，《关于近代几何研究的比较考察》论文演讲，
论述了变换群在几何中的主导作用，把到当时为止已发现的所有几何统一在变换群论观点之下，明确地给出
几何的一种新定义，把几何定义为一个变换群之下的不变性质。这种观点突出了变换群在研讨几何中的地位，
后来简称为《埃尔朗根纲领》。

SVG 中的标签层次结构和 HTML 相似，几何变换也会按层级关系继承下去。

由于几何变换在图形学上的通用性，W3C 专门为其设立一个规范 CSS Transforms Module Level 1
https://www.w3.org/TR/css-transforms-1/

SVG 规范中，A.8.10 SVGMatrix 描述了几何变换的一般实现要求，能通过 ['transform'] 属性读写
变换矩阵的数据，包括各个分量。[SVGMatrix] 对象接口实现要求有 [`mTranslate`], [`inverse`], 
[`mMultiply`], [`mScale`] and [`mRotate`] 等方法来处理图形的几何变换，这些图形变换方法
应该计算原矩阵数值后（变换叠加）再返回一个 [SVGMatrix] 实例用于叠加后续潜在的变换。

以下矩阵运算中， (x, y) 原坐标（看作向量）与变换矩阵的每一行相乘，得到变换后的新坐标 (x', y')。

    [ x' ]    [  a  c  e  ]   [ x ]    [ a.x + c.y + e ]
    [ y' ] =  [  b  d  f  ]   [ y ] =  [ b.x + d.y + f ]
    [ 1  ]    [  0  0  1  ]   [ 1 ]    [        1      ]
 
SVG transform 属性设置 skew 变换可能无效，可以直接使用样式属性进行变换：

    <text transform="skew(90deg, 90deg)" 
        style="transform: skew(35deg);">transform test</text>


边界框（bounding box）是图形学上一个常用概念，表示一个物体的矩形边界，即一个最贴紧物体的矩形。
边界框用来约束图形渲染，保证不会在超出边界外做错误的图形渲染工作。
![8.10. Bounding boxes](https://svgwg.org/svg2-draft/images/coords/bbox01.svg)


8.7. The ‘preserveAspectRatio’ attribute

    _Attribute definition:_

    preserveAspectRatio = ["defer"] <align> [<meet>]
    Name               preserveAspectRatio
    Value              <align> <meetOrSlice>?
    Initial value      xMidYMid meet
    Animatable         yes

    <align> =
        none
        | xMinYMin | xMidYMin | xMaxYMin
        | xMinYMid | xMidYMid | xMaxYMid
        | xMinYMax | xMidYMax | xMaxYMax

    <meetOrSlice> = meet | slice

此属性是针对 viewBox 摄取的图形到 viewport 之间的映射关系的约束而设置的 SVG 标签属性。此属性
主要有两个部分，一是对齐方式，另一部分是裁剪方式。对齐方式包含两个坐标轴（x y）三种值（Min Mid Max）
的组合，总共 9 种对齐情形。而裁剪方法有两种：

*   **meet** - 碰触方式，不裁剪，viewBox 图形限在视口内，图形等比放大到任何一边触碰到 Viewport 边缘就按此尺寸渲染；
*   **slice** - 切片方式，viewBox 图形等比放大到充满 viewport，直到最后的边缘触碰到 Viewport 边缘就按此尺寸渲染；
*   对齐方式有九种组合，但是在理解裁剪的基础上，按各轴的对齐处理更容易理解：
    - **Min** 表示靠最小边对齐，即 x 轴的最左边，y 轴的最上边；
    - **Mid** 表示剧中对齐，即 x 轴和 y 轴的中间；
    - **Max** 表示靠最大边对齐，即 x 轴的最右边，y 轴的最下边；

对齐属性与 CSS 样式表的对照关系如下，只不过 SVG 将两轴对齐合并写在一起：

    SVG Align      CSS vertical-align
    =============  ====================
    yMin           Top 
    yMid           Middle 
    yMax           Bottom

    SVG Align      CSS text-align
    =============  ====================
    xMin           Left or start
    xMid           Center
    xMax           Right or end

还有一个可选值，defer 表示在那些引用数据的标签中，从被引用的对象中的 ['preserveAspectRatio'] 
属性获取其值，如果被引用的对象没有设置此属性值，那么 defer 这个值没有作用。

此属性只有在 viewport 与 viewBox 图形比例不一致时才有作用，比例一致，就刚好可以重叠、铺满视口。

[Noël's Blog][Noël's Blog] 提供了一个交互式的工具用于演示此属性的作用。
[Noël's Blog]: https://blog.noelcserepy.com/the-interactive-guide-to-svgs-viewport-viewbox-and-preserveaspectratio


SVG Conversion
----------------

以下涉及到的工具包括：

1. ImageMagic - 一个开源图形处理工具，可以绘制 SVG 格式图像；
2. MathJax - 基于 JavaScript 实现的 AsciiMath/MathML/TeX 公式转换工具；
3. Inkscape - 专业 SVG 矢量图形制作工具；
4. MikTeX - 一套 LaTeX 排版语言工具集；
5. Graphviz - 图形可视化工具；，
6. PlantUML - UML 图形制作工具；
7. [GeoGebra](https://www.geogebra.org/) 一个在线免费的数学应用程序包；
8. [Latex/MathML editor][https://math-editor.online]

ImageMagick 进行 SVG 转图片时，如果字体不对则可能导致出图错乱，除非回退后备的字体可以显示：

```sh
#!/usr/bin/env bash
pushd /od/pictures
svg=jupyter_zmq_websocket.svg
if ! [[ -f "$svg" ]]; then
    curl -o "$svg" -s -L https://ipywidgets.readthedocs.io/en/latest/_images/transport.svg
fi
convert -debug annotate $svg some.png

    # WARNING **: 10:50:48.160: couldn't load font "Helvetica Neue, Helvetica, Arial Light Not-Rotated 17.25", falling back to "Sans Light Not-Rotated 17.25", expect ugly output.

magick identify -list format 
magick -list font #| grep "\(Helvetica\|Arial\|微软雅黑\|Fira Code\)"

magick identify -list format | grep SVG

    # MSVG* SVG       rw+   ImageMagick's own SVG internal renderer
    # RSVG* SVG       rw+   Librsvg SVG renderer (RSVG 2.40.20)
    #  SVG* SVG       rw+   Scalable Vector Graphics (RSVG 2.40.20)
    # SVGZ* SVG       rw+   Compressed Scalable Vector Graphics (RSVG 2.40.20)
```

ImageMagick 转换 SVG 需要一个 SVG renderer，官方文档所述，优先寻找环境中安装的 inkscape，
或者 RSVG 作为 SVG 渲染程序，如果没有就使用内部的 Imagemagick MSVG。应该使用 -list format
检查当前系统支持的文件格式。使用 `whereis inkscape` 命令查询是否有安装，inkscape 或 rsvg。 
ImageMagick 可能不认识 Windows 系统上的字体中文名称，可以使用 Inkscape 读取到的字体名称：

    style="font-family:'Fira Code'"
    style="font-family:'Microsoft YaHei'"

MathJax 是开放源代码的 JavaScript 排版引擎，适于现代浏览器中呈现 LaTeX、MathML、AsciMath，
同时支持转换 SVG 图形。[MathJax](https://www.mathjax.org) 基于矢量字体实现高质量的排版，
这种排版方式下，数学符号是可搜索的文本。

Mathjax 3.0 版本对 2.0 版本进行了重构，采用模块化开发，3.0 版本开始可以按需加载模块（components）。
一些核心模块是 Mathjax 运行所必须的，除此以外，可以按需加载所需要的功能模块。以下格式转换模块，
左侧表示输入内容形式，右侧表示输出内容形式：

1. tex-chtml 
2. tex-chtml-full 
3. tex-svg 
4. tex-svg-full 
5. tex-mml-chtml 
6. tex-mml-svg 
7. mml-chtml 
8. mml-svg 

通过脚本调用 MathJax 转换公式为 SVG，脚本基于 Node 平台编写，配合 runsnippet 插件更方便：

```sh
#!/usr/bin/env bash
/od/mathjax.js
echo '`E = mc^2`' | /od/mathjax.js pipe svg > emc2.svg
echo 'sum_(i=1)^n i^3=((n(n+1))/2)^2' | /od/mathjax.js pipe svg > AsciiMath.svg
echo '\[x = {-b \pm \sqrt{b^2-4ac} \over {2a}}\]' | /od/mathjax.js pipe svg
# inkscape --export-filename=emc2.png emc2.svg
# magick emc2.svg emc2.png
```

![E = mc^2](../svg/emc2.svg)
![sum_(i=1)^n i^3=((n(n+1))/2)^2](../svg/AsciiMath.svg)

参考 [mathjax.ts](../mathjax.js) 或者 [MathJax_docs](../svg/MathJax_docs.rst)。


Windows 平台上，执行 inkscape 命令无回显，不不显示错误信息，这涉及可执行程序的类型问题。
Windows 平台下 Inkscape 可以执行程序有两个，inkscape.com 和 inkscape.exe，命令行默认
执行 com 程序，这是带控制台消息输出的版本。Msys 环境 inkscape --shell 不能正常进入交互模式，
因为默认执行的是 inkscape.exe，这个版本是 GUI 版本，不含有控制台消息输出。所以这种情况就像
MySQL 初始化时不显示初始密码一样，mysqld --initialize --console，初始密码直接直接数据库
目录下的日志文件，默认日志文件名称为用户主机名加 .err 后缀。

两个版本的程序对应 MSVC 编译器使用的 /SUBSYSTEM:CONSOLE 和 WINDOWS 链接参数。
程序参数使用也有区别，参考 --help 命令帮助信息。

此问题的解决方法是创建一个 bash 脚本作为 Msys 环境下默认执行 inkscape.com 程序的入口：

```sh
cat > /c/vcpkg/inkscape <<EOF
#!/usr/bin/env bash
'C:\Program Files\Inkscape\bin\inkscape.com' \$@
EOF
cat > /c/vcpkg/inkscapew <<EOF
#!/usr/bin/env bash
'C:\Program Files\Inkscape\bin\inkscape.exe' \$@
EOF
cat > /c/vcpkg/inkview <<EOF
#!/usr/bin/env bash
'C:\Program Files\Inkscape\bin\inkview.exe' \$@
EOF
cat /c/vcpkg/inkscape; sleep 3;
```

Inkscape shell 交互模式中，直接输入支持的命令，比如 verb-list 打印所有 action 列表。

Inkscape 命令行中可以传入多个 svg 文件进行批量处理，但是文件名不能有空格，会当成成多个文件对待。
以下是 Inkscape 安装目录下自带的 svg 图像，分别以矩阵展示了 PDF 特性以及 Inkscape 架构：

![](../svg/PDF-Feature-Matrix.svg)
![Inkscape architecture.svg](../svg/architecture.svg)

Inkscape 转换 SVG 文件时会给出较详细的报告信息，相比较 ImageMagick 就隐晦多了。
比如，Jupyter 官方文档中一个介绍其底层功能框架的 SVG 中使用了 SVG 2.0 规范的标签，
Inkscape (Pango version: 1.48.2) 就不支持：

```sh
$inkscape --version
# Inkscape 1.0.2-2 (e86c870879, 2021-01-15)
#     Pango version: 1.48.2

inkscape --export-type=png ../pictures/jupyter_zmq_websocket.svg
#   Unimplemented style property 110
#   WARNING: unknown type: svg:foreignObject
```

![](https://ipywidgets.readthedocs.io/en/latest/_images/transport.svg)

The `<foreignObject>` SVG element includes elements from a different XML namespace. 
In the context of a browser, it is most likely (X)HTML.

此标签用于包含来自不同的 XML 命名空间的元素，主要是在浏览器的上下文中包含 XHTML / HTML 标签。
对于 Inkscape 这种非 Web 应用来说，不支持它似乎说得过去，但是用它来为 Web 设计 SVG 就麻烦了。
上图中由于设置了 foreignObject 下的 div 标签来样式化框架图中的字体，同时又设置了 text 标签，
这是 SVG 通用的文本标签，当渲染器不支持 foreignObject 内嵌的外部命名空间的节点时，就会回退
使用默认的 text 标签显示文本。这段文字内容是：[Not supported by viewer]，提示用户渲染不支持此标签。

Inkscape 软件于 2003 年首次发布以来，由于人员不足问题，导致优化工作一直不到位。
直到但近年来其开发速度不断加快，专业艺术家对其的接受程度也在不断提高，终于 2020 年发布了
程碑版本 Inkscape 1.0。Inkscape 20 周年：1.3.1 版发布，修复 70 多个错误并新增两项功能。

01. 全新的用户界面（User Interface），使用 GTK+ (GTK+ 3) 图形框架，这是 Linux 系统使用的图形框架；
02. 运行速度优化，可以开启 OpenGL 加速渲染，以及设置渲染线程：Edit ➞ Preferences ➞ Rendering。
03. 新增形状构建器”（Shape Builder）工具，只需点击和拖动，就可以基于现有图形快速地组合和分割路径。
04. 路径特效，Path → Path Effect...
05. 增强的实时路径特效 PowerStroke Live Path Effect (LPE)，可以伸缩已画笔触的宽度，并更好地处理闭合路径。
06. 支持压感的 Pencil Tool，勾选工具选项 Use pressure input 使用压感，Edit ➞ Input Devices 进行压感硬件设置。
07. 增强的 Live Path Effect (LPE)，路径可以进行各种逻辑运算，交集、差集、并集...
08. 分屏和线稿模式（X-Ray），View → Split View Mode 和 X-Ray Mode
09. 增加了高清屏支持，High Resolution Screens (HiDPI)；
10. 画笔工具（Bézier Tool）操作优化，增加控制键的组合约束操作。
11. 触屏双指绽放操作 Pinch-to-zoom
12. 上下文菜单优化，增加对象显、隐和锁定操作。
13. 发线细节显示模式 Visible Hairlines Display Mode，View → Display Mode
14. 增加分层导出，Extensions → Export → Export Layer Slices
    此扩展会导出指定名称（Layer with Slices）图层下的 rect 矩形区，支持图标模式（多尺寸）。
    标记用的矩形可以设置为透明状态，因为它也会被渲染到图像文件中。多个同名（label）图层只处理顶层。
15. 增加页面工具，Page tool，SVG 文档内可创建多个页面，但页面只是视觉组织，不对应 SVG 标签。
    分页功能提供元素在视觉上的组织管理外，还可以与导入、导出 PDF 的页面对应。页面还方便内容定位，
    状态栏中可以点击页面的跳转。可以使用页面工具对新创建的页面进行命名，方便使用。
16. 增加 Web UI/UX 开发者辅助工具，内嵌脚本 InkWeb 响应 Web 事件并设置图形对象属性：
17. 交互模拟，通过 SVG 嵌入的 JavaScript 控制 ViewBox 来切换显示的区域，Extensions → Web → Interactive Mockup
    * 设置属性，Extensions → Web → JavaScript → Set Attributes...
    * 传输属性，Extensions → Web → JavaScript → Transmit Attributes...

说明：选择 2 个以上的图形对象，最后一个将作为要交互时显示。设置属性或传输属性，可以选择
被修改属性的对象。消除设置需要手动清除对象属性中的交互事件属性（Interactivity）。

*  将属性传输最后选择的对象：all selected transmit to the last one
*  将属性传输给第一个对象：the first selected transmits to all others

使用中 Pencil 工具并没有压感，就是美术笔，Calligraphy Pen，其压感也不流畅。官方书法笔教程提到，
绘板要先连接电脑，再开启 Inkscape，然后进入 Input Devices... 设置，选择要使用的绘板。

新版本在全屏状态下还有问题，UI 元素不能正确处理鼠标点击位置，并且可能出现 UI 停滞现象。

- https://wiki.inkscape.org/wiki/index.php/Release_notes/1.0
- https://wiki.inkscape.org/wiki/Release_notes/1.1
- https://wiki.inkscape.org/wiki/Release_notes/1.2
- https://wiki.inkscape.org/wiki/index.php/Release_notes/1.3
- https://inkscape.org/doc/tutorials/calligraphy/tutorial-calligraphy.html
- Getting Started with Inkscape Development https://inkscape.org/develop/getting-started/
- Inkscape. Draw Freely. https://gitlab.com/inkscape/inkscape
- https://media.inkscape.org/dl/resources/file/inkscape-1.3.2_2023-11-25_091e20e-x64.msi
- https://inkscape.org/gallery/item/42333/inkscape-1.3_2023-07-21_0e150ed6c4-x64_31XBEKV.msi

Inkscape 作为一个开源免费的 SVG 绘画工具，实属是专业的，而且受到大批论文写作者的喜欢。同时，
Web 应用开发上也可以使用，比如绘画对象中设置事件属性：打开对象菜单中的对象属性面板（Ctrl+Shift+O），
在属性分组 Interactivity (交互属性)中的 onclick 事件（鼠标单击时触发）中填入 JavaScript
脚本，比如 `alert("hello world")` 用于弹出一个消息框。当用户点击图形时触发此代码，但是只有
在鼠标点击到图形对应的的色块像素时才触发，透明区不触发：

```xml
    <g
       inkscape:label=""
       transform="translate(-56.696763,-10.583)"
       id="g916"
       onclick="alert(&quot;hello world&quot;)">
       ...
   </g>
```

[MikTeX](https://miktex.org/download)  可以为 Inkscape 提供 Latex 渲染扩展，
安装好 MikTeX 并将 pdflatex.exe (MiKTeX-pdfTeX) 所在目录添加到环境变量中即可。
Inkscape 会检测到，并作为数学公式编辑器扩展使用，然后就需要在对话框输入 LaTeX 代码： 
Extensions ==> Render ==> Mathematics ==> LaTeX(pdflatex)

Inkscape 并不能直接处理 MathML 或者 LaTeX 数学公式，MikTeX 是一种选择，还可以安装
TexText 扩展，同样使得 Inkscape 可以插入 LaTeX 公式，并且 TexText extension
的界面比 MikTeX extension 功能更丰富。但量同样需要熟悉 LaTeX 公式的语法，毕竟不像 MathType。
TexText Extension https://textext.github.io/textext/usage/gui.html

下载 TexText 扩展包，它本身是一个 Python 模块，但是没有托管到 pip 服务器，需要手动执行它的
安装脚本 setup.py 来安装，并且需要通过 Inkscape 本身集成的 Python 可执行程序来安装，这样
才会将扩展模块写入 %AppData%\inkscape\extensions 目录下。重新启动 Inkscape 就可以找到
Extensions ==> Text ==> LexText 并用于输入 LaTeX 公式。以下脚本供参考，可能需要管理员权限。

```sh
pushd 'C:\Program Files\Inkscape\bin\' 
python.exe ../textext-1.10.2/setup.py

luatex --version
pdflatex --version
xelatex --version
```

TexText 扩展会在调用 LaTeX 解释器时捕捉其错误信息，尽管如此，还是会遇到程序运行时错误：

    FATAL pdflatex - GUI framework cannot be initialized.

    pdflatex: security risk: running with elevated privileges

    ! LaTeX Error: Can be used only in preamble.

如果你在正文中引入了某个包或者类，\begin{document} 之后，而不是在序言（preamble），
那么就会发生这个错误。在命令 \begin{document} 之前的内容，都被称为序言。
在序言中，可以定义文档的类型、语言，以及很多基础的设定。


最后方案，使用脚本调用 pdflatex 命令（[miktex-pdftex]）生成 PDF 文件，并嵌入 LaTeX 数学公式。
生成 pdf 文档后，为了方便在 Web 页面上展示，可以使用 Inkscape 将其转换为 SVG 格式。使用
miktex-texworks 工作台也是不错的选择，它方便编译 LaTeX 生成 PDF 并且可以在线编辑。
配合自家开发的 Sublime Text 插件（run-snippet）就可以直接在 MD 文档中运行脚本，方便。

```sh
#!/usr/bin/env bash
cat | pdflatex <<EOF
    \documentclass{scrartcl}
    \begin{document}

    \(\displaystyle\frac{\pi^2}{6}=\lim_{n \to \infty}\sum_{k=1}^n \frac{1}{k^2}\)

    Hello, world!
    \end{document}
EOF
inkscape --export-type=svg  texput.pdf 
# ** (org.inkscape.Inkscape:17600): 
# WARNING **: 23:00:07.354: No pages selected, getting first page only. 
# sleep 12
```

[GeoGebra](https://www.geogebra.org/) 是一个在线免费的数学应用程序包: 
将绘图、几何、代数、3D、统计、概率等集成在一起!可以用它的 Graphing Calculator 来绘制 SVG 图形。
更进一步，专业的 3D 行业软件 Blender 其线稿工具 Freestyle SVG Exporter 就可以导出 SVG， 导出器支持创建 SVG 动画，插件作者 Julien Deswaef。
https://github.com/xuv/freestyle-svg-exporter

LaTeX 中包含插图、外部图形文件的方法，引用 graphicx 和 svg 包，前者支持 png, eps, pdf 等格式，
但不支持 svg 格式：

```sh
\usepackage{graphicx}

\begin{figure}[h]
\includegraphics{filename}
\end{figure}

\usepackage{svg}

\begin{figure}[h]
\includesvg{filename}
\end{figure}
```

应该使用 miktex-console 先安装好 plantuml 宏包才能使用它，缺失其请根据错误信息猜测包名。
还需要设置环境变量 PLANTUML_JAR 指向 PlantUML 程序包。但是，使用起来真的是麻烦不断。

    ! LaTeX Error: File `currfile.sty' not found.

    pdflatex ! LaTeX Error: Environment plantuml undefined.

    Restricted shell escape. PlantUML cannot be called. Start pdflatex/lualatex with -shell-escape.

    No file pythontex-files-LaTeX-PlantUML/LaTeX-PlantUML.pytxmcr.No file pythontex-files-LaTeX-PlantUML/LaTeX-PlantUML.pytxmcr.


```sh
#!/usr/bin/env bash
cat > LaTeX-PlantUML.tex <<EOF
\documentclass{scrartcl}

\usepackage{plantuml}

\begin{document}
\begin{plantuml}
  @startuml
  Alice -> Bob: Hello
  Alice <- Bob: Hi!
  @enduml
\end{plantuml}
\end{document}
EOF
export PLANTUML_JAR='C:/jdk-14.0.2/jars/plantuml.1.2018.1.jar'
lualatex --shell-escape LaTeX-PlantUML.tex #--job-name='LaTeX-PlantUML'
inkscape --export-type=svg  LaTex-PlantUML.pdf 
```


PlantUML 本身就支持多种矢量格式的生成，但是需要借助 Graphviz 开源工具，否则只能生成 sequence diagrams：

```sh
cat > /c/vcpkg/dot <<EOF
'C:\Graphviz-10.0.1-win64\bin\dot.exe' \$@
EOF
export GRAPHVIZ_DOT='C:/Graphviz-10.0.1-win64/bin/dot.exe'
export PLANTUML_JAR='C:/jdk-14.0.2/jars/plantuml.1.2018.1.jar'
java -Djava.awt.headless=true -jar "$PLANTUML_JAR" -testdot
java -Djava.awt.headless=true -jar "$PLANTUML_JAR" -help | grep '\-t' #| clip
sleep 9
    # -tpng       To generate images using PNG format (default)
    # -tsvg       To generate images using SVG format
    # -teps       To generate images using EPS format
    # -tpdf       To generate images using PDF format
    # -tvdx       To generate images using VDX format
    # -txmi       To generate XMI file for class diagram
    # -tscxml     To generate SCXML file for state diagram
    # -thtml      To generate HTML file for class diagram
    # -ttxt       To generate images with ASCII art
    # -tutxt      To generate images with ASCII art using Unicode characters
    # -tlatex     To generate images using LaTeX/Tikz format
    # -tlatex:nopreamble  To generate images using LaTeX/Tikz format without preamble
    # -testdot        To test the installation of graphviz
    # -timeout N      Processing timeout in (N) seconds. Defaults to 15 minutes (900 seconds).
```

所以，自己动手丰衣足食，使用 bash 脚本调用基本的工具完成 SVG 的生成，并调用 inkview 查看图形输出：

```sh
#!/usr/bin/env bash
cat > plantuml.txt <<EOF
@startuml
    Alice -> Bob: Hello
    Alice <- Bob: Hi!
    interface ICheckUserAccount{
        boolean check_account(String user_accpout)
        String md5_password(String user_password, String solt)
    }
            
    class CheckUserAccount implements ICheckUserAccount{
        + String user_account
        - String solt
        - Int pass_type
        
        + void Check_result()
    }
@enduml
EOF
export PLANTUML_JAR='C:/jdk-14.0.2/jars/plantuml.1.2018.1.jar'
export GRAPHVIZ_DOT='C:/Graphviz-10.0.1-win64/bin/dot.exe'
cat plantuml.txt | java -Djava.awt.headless=true -jar "$PLANTUML_JAR" -charset UTF-8 -tsvg -pipe > plantuml.svg
inkview plantuml.svg
```

通过 Graphviz 配合，PlantUML 最终将 UML 定义转换成 SVG 文件：

![PlantUML Class Diagram](../svg/plantuml.svg)

[Graphviz](https://graphviz.org/) is open source graph visualization software. 
Graph visualization is a way of representing structural information as diagrams 
of abstract graphs and networks. It has important applications in networking, 
bioinformatics, software engineering, database and web design, machine learning, 
and in visual interfaces for other technical domains.

这是 Graphviz 用户制作的 Linux 内核构架图：

https://graphviz.org/Gallery/directed/Linux_kernel_diagram.html
![Linux kernel diagram](https://graphviz.org/Gallery/directed/Linux_kernel_diagram.svg)


LaTeX 页面布局与页眉、页脚、页码设置：

LaTeX2e: An unofficial reference manual https://latexref.xyz/Layout.html
https://www.overleaf.com/learn/latex/Page_numbering
https://www.overleaf.com/learn/latex/Headers_and_footers
https://www.overleaf.com/learn/latex/Articles/A_visual_guide_to_LaTeX’s_page_layout_parameters

```sh
#!/usr/bin/env bash
cat | pdflatex --job-name='SVG-viewer-CTM' <<EOF
    \documentclass{scrartcl}
    \usepackage[a6paper,landscape]{geometry}
    \usepackage{fancyhdr}

    \pagestyle{fancy}
    \renewcommand\headrulewidth{0pt} 
    \renewcommand\footrulewidth{0pt} 
    % \usepackage[legalpaper, landscape, margin=2in]{geometry}
    % \geometry{legalpaper, landscape, margin=2in}
    \geometry{paperheight=10cm, paperwidth=2cm}
    \begin{document}
    \fancyfoot{} % clear all footer fields

    \(\displaystyle\frac{\pi^2}{6}=\lim_{n \to \infty}\sum_{k=1}^n \frac{1}{k^2}\)


    \end{document}
EOF
inkscape --export-type=svg  SVG-viewer-CTM.pdf 
inkview SVG-viewer-CTM.svg
```
![](../svg/SVG-viewer-CTM.svg)



软件编辑 SVG 会产生非常多的数据，特别是数值的表达上，因为精度可以表示小数点后面的 6 位小数以上，
使用字符串表示数值占用空间较多。另外，Inkscape 保存文件时会附带一些 XML 信息标记，包含这种数据
的格式称为 "Inkscape SVG"，其它软件不能利用这些标记信息，可以在保存文件时，选择纯净格式
 "Plain SVG"，这样就不会保存 Inkscape 自用的 XML 命名空间相关代码。

例如，以上公式图像产生的 SVG 就有 40KB，单是将数值精减到小数点后两位，文件尺寸就可以优化到 30KB，
单这一项优化就缩小的 1/4 的数据量，而且从外观上并无差别。

| ![MikTeX as Inkscape Extension](../svg/miktex_as_inkscape_extensions.svg) | ![MikTeX as Inkscape Extension](../svg/miktex_as_inkscape_extensions-truncated.svg) | ![MikTeX as Inkscape Extension](../svg/miktex_as_inkscape_extensions-svgo.svg)


```sh
# https://github.com/svg/svgo
# Node.js tool for optimizing SVG files
# npm install -g svgo
name=miktex_as_inkscape_extensions
svgo --pretty $name.svg -o $name-svgo.svg
```

SVGO 是专门用于 SVG 图形文件优化的工具，经过压缩后的图像兼容性会下降，ImageMagick 可能无法准确重绘。
它还可能会删除包含 XML 版本信息的标记头。

Inkscape SVG 会引入两个自用的命名空间，它们专用于设置 Inkscape 专属的标记集：

    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg"

Sodipodi means "mish mash" or "hodgepodge" in Estonian child-speak.
Inkscape 是早在 2003 年，SodiPodi 软件开发组内部的 4 位成员从其派生出的一个分支。
Bryce Harrington, MenTaLguY, Nathan Hurst, Ted Gould 四人希望 Inkscape 遵循
SVG 规范、更美的观感，并将其开源共建。

Inkscape Tutorial - Chapter 6.  SVG File Format
https://inkscapetutorial.org/svg-file-format.html


用户扩展保存目录位于 %AppData%\inkscape，扩展开发参考：
Writing Extensions (Text Guide) https://inkscape.org/develop/extensions/
[MiKTeX Manual Revision 4.6 Christian Schenk](https://docs.miktex.org/manual/)

[Pango](https://wiki.inkscape.org/wiki/index.php/Pangoification) is a library 
that provides layout and rendering of internationalized text, 
that uses Unicode for its encoding and aims for supporting output in all 
the world's major languages.

Pango's principle use has been for internationalizing the text in Gnome GUI's.

Pango 也在数学符号标记语言中用于排版，[Draft of MathML 4](https://www.w3.org/Math/)。
[The Math WG published the first Working Draft of MathML 4](https://www.w3.org/TR/2022/WD-mathml4-20220908/)
[Mathematical Markup Language (MathML) Version 3.0 2nd Edition](https://www.w3.org/TR/MathML3/mathml.html)

Inkscape 中使用 Pango 提供的以下功能，主要是它的国际化文字排版功能：

1. Internationalization support
2. An actively maintained library (last release 16 Mar 2004)
3. Documentation ([Man](http://developer.gnome.org/doc/API/2.0/pango/))
4. Modular system for renderers gives us a clean interface for hooking Inkscape's renderer to.
5. A text layout system (left/right align, tab stops, etc.) - may not be powerful enough to meet our needs, though.
6. Already exists as a dependency for Inkscape due to Gtk, so adds no additional dependencies for our users.

Inkscape 作者 Tavmjong Bah 主页上有丰富的 SVG 和 Inkscape 资讯：
[SVG AND THE WEB - Tav's Blog](http://tavmjong.free.fr/SVG/)

> 
> Resources for using SVG in HTML
> ===============================
> 
> HTML5 is changing the playing field. Good, practical resources are hard to find, though. Many SVG examples date from SVG's early years when Adobe's no-longer supported plug-in was the primary way to view SVGs on the web. Many recent examples are too complicated relying, on JavaScript libraries or features that are not present in all the major browsers. Here is a collection of resources I've created or found on the web.
> 
> Simple Tests and Examples
> -------------------------
> 
> *   [SVG in HTML.](http://tavmjong.free.fr/SVG/SVG_IN_HTML/svg_in_html.html) Discusion with tests of various ways of including SVG in HTML.
> *   Button Test:[HTML](http://tavmjong.free.fr/SVG/BUTTON_TEST/button_test.html), [XHTML](http://tavmjong.free.fr/SVG/BUTTON_TEST/button_test.xhtml), Experiments in using SVG buttons in HTML.
> *   Viewport: [HTML](http://tavmjong.free.fr/SVG/VIEWPORT/viewport.html), [XHTML](http://tavmjong.free.fr/SVG/VIEWPORT/viewport.xhtml), Tests embeding using <object> tag with various combinations of "viewPort", "width", and "height" defined.
> *   Viewport 2: [HTML](http://tavmjong.free.fr/SVG/SCHILLER/html.html), [XHTML.](http://tavmjong.free.fr/SVG/SCHILLER/html.xhtml) A modified version of [Jeff Schiller's test page](http://codedread.com/browser-tests/svg-image/html.html) that includes inlined SVG.
> *   [Tests from my Inkscape book](http://tavmjong.free.fr/INKSCAPE/MANUAL/web/svg_tests.xml).
> *   [My Ligature Test](http://dev.w3.org/SVG/profiles/1.1F2/ua-tests/ligature-breaking.svg).
> *   [SVG1.1 Second Edition Tests, Inkscape](http://tavmjong.free.fr/SVG/../INKSCAPE/W3C_SVG_1.1F2/harness/htmlInkscapeApproved/).
> *   [CSS in SVG tests.](http://tavmjong.free.fr/SVG/SVG_CSS_TESTS/2.1/HTML/index.html)
> *   [CSS and SVG together.](http://tavmjong.free.fr/SVG/CSS/index.html)
> *   [Distorting Text with Inkscape.](http://tavmjong.free.fr/SVG/TEXT_PATH/TextPath.html)
> 
> SVG 2
> -----
> 
> Some of my work for SVG2.
> 
> *   Already in SVG 2 Specification:
> 
> *   [Mesh gradients](http://tavmjong.free.fr/SVG/MESH/Mesh.html), [SVG2 Spec](https://svgwg.org/svg2-draft/pservers.html#MeshGradients)
> *   [Radial gradients (improvements)](http://tavmjong.free.fr/SVG/RADIALGRAD/index.html), [SVG2 Spec](https://svgwg.org/svg2-draft/pservers.html#RadialGradients)
> *   [Extrapolated line join](http://tavmjong.free.fr/SVG/LINEJOIN/index.html), [SVG2 Spec](https://svgwg.org/svg2-draft/painting.html#LineJoin)
> *   Hash shading: [SVG2 Spec](https://svgwg.org/svg2-draft/pservers.html#Hatches)
> 
> *   Future work:
> 
> *   [Color Interpolation](http://tavmjong.free.fr/SVG/COLOR_INTERPOLATION/index.html)
> *   [Connectors](http://tavmjong.free.fr/SVG/CONNECTORS/index.xhtml)
> *   [Screening filter primitive](http://tavmjong.free.fr/SVG/SCREENING/index.html)
> *   [Flowed text](http://tavmjong.free.fr/SVG/TEXT_FLOW/index.html)
> *   [Variable width strokes](http://tavmjong.free.fr/SVG/VARIABLE_WIDTHS/index.html)
> 
> WhatWG and W3C Documentation, etc.
> ----------------------------------
> 
> *   [SVG 1.1 (Second Edition)](http://dev.w3.org/SVG/profiles/1.1F2/publish/) (Recommendation).
> *   [SVG 2](https://svgwg.org/svg2-draft/) (Editor's Draft).
> *   [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/) (Draft Standard, WhatWG).
> *   [HTML5](http://dev.w3.org/html5/spec/spec.html) (Editor's Draft, W3C).
> *   [HTML 5 Reference](http://dev.w3.org/html5/html-author/) (Editor's Draft).
> *   [HTML: The Markup Language Reference](http://dev.w3.org/html5/markup/Overview.html) (Editor's Draft).
> *   [HTML5 differences from HTML4](http://dev.w3.org/html5/html4-differences/) (Editor's Draft).
> *   [Polyglot Markup: HTML-Compatable XHTML Documents](http://dev.w3.org/html5/html-xhtml-author-guide/html-xhtml-authoring-guide.html).
> *   [Markup Validation Service](http://validator.w3.org/).
> *   [When can I use...](http://caniuse.com/), HTML5, CSS3, SVG compatability tables.
> 
> My SVG Examples
> ---------------
> 
> *   [ARIA Button](http://tavmjong.free.fr/SVG/ARIA_BUTTON/svg_button_aria.svg). An example [ARIA](http://www.w3.org/WAI/intro/aria) (Accessible Rich Internet Application) button derived from an example by [Doug Schepers](http://schepers.cc/). There are very few good examples on the Web. This may or may not be a valid example.
> *   SVG Steam Engine Progress Bar: [Embedded in HTML](http://tavmjong.free.fr/SVG/PROGRESSBAR/SteamEngineProgressBar.html), [Pure SVG Version](http://tavmjong.free.fr/SVG/PROGRESSBAR/SteamEngineProgressBar_StandAlone.svg). My entry in the fradulent [Progress Bar competition](http://westciv.com/nobit/). Winners have never been announced.
> *   SVG Gear Clocks: [Simple](http://tavmjong.free.fr/SVG/../INKSCAPE/DRAWINGS/clock.svg), [Complex](http://tavmjong.free.fr/INKSCAPE/DRAWINGS/clock2.svg).
> 
> SVG Examples From Other Sites
> -----------------------------
> 
> *   [IEBlog](http://blogs.msdn.com/b/ie/archive/2010/08/27/more-on-svg.aspx)
> *   [svgwow](http://svg-wow.org/). Sophisticated demos.
> *   [SVG Backgrounds](http://www.alistapart.com/articles/using-svg-for-flexible-scalable-and-fun-backgrounds-part-i) from "A LIST apart".
> 
> My Talks
> --------
> 
> Use _Page Down_ and _Page Up_ to navigate. (SVG files using JessyInk.)
> 
> *   [Inkscape](http://tavmjong.free.fr/SVG/SVGOpen2010/svg_2010_tavmjong_bah.svg), SVG Open 2010.
> *   [JessyInk demonstration](http://tavmjong.free.fr/SVG/SVGOpen2010/Effects_JessyInk.svg).
> *   [Inkscape](http://tavmjong.free.fr/SVG/SVGOpen2011/INKSCAPE/svg_2011_inkscape.svg), SVG Open 2011.
> *   [Coons-Patch Mesh Gradients](http://tavmjong.free.fr/SVG/SVGOpen2011/MESH/svg_2011_mesh.svg), SVG Open 2011.
> *   [Inkscape](http://tavmjong.free.fr/SVG/SVGOpen2012/INKSCAPE/svg_2012_inkscape.svg), SVG Open 2012.
> *   [SVG 2 for Artists](http://tavmjong.free.fr/SVG/SVGOpen2012/ARTISTS/svg_2012_artists.svg), SVG Open 2012.
> *   [The Future of SVG and Web Standards](http://tavmjong.free.fr/SVG/LG_SVG_2013/lg_2013_svgwg.svg), Libre Graphics 2013.
> *   [Inkscape Update](http://tavmjong.free.fr/SVG/LG_INK_2013/lg_2013_inkscape.svg), Libre Graphics 2013.
> *   [SVG 2 for Artists](http://tavmjong.free.fr/SVG/SVGOpen2013/ARTISTS_2013/svg_2013_artists_images.svg), SVG Open 2013.
> *   [SVG 2 for Artists](http://tavmjong.free.fr/SVG/LG_SVG_2014/lg_svg_2014.svg), Libre Graphics 2014.
> *   [SVG 2 for Artists and Developers](http://tavmjong.free.fr/SVG/SVGOpen2014/svg_2014.svg), SVG Open 2014.
> 

