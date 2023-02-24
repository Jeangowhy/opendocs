
# SVG 矢量图形
- https://developer.mozilla.org/zh-CN/docs/Web/SVG
- https://validator.w3.org/#validate_by_input
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Tools_for_SVG
- SVG Art Gallery by Brian Lukis http://www1.plurib.us/svg_gallery/
- https://xmlgraphics.apache.org/batik/download.html
- Google Autodraw 智能绘画工具 https://www.autodraw.com/

SVG - Scalable Vector Graphics 可伸缩矢量图形是一门用于描述 2D 图形的语言，图形应用使用 XML 编写，然后 XML 由 SVG 阅读器程序呈现。

SVG 在 2003 年成为 W3C 推荐标准，是一个成熟的标准，用来设计在 Web 应用和移动平台 上展示可交互的图形。和 HTML 类似，SVG 也支持 CSS 和 JavaScript。尽管可以使用 HTML 展示数据，SVG 才是数据可视化领域的事实标准。

所谓矢量图形，和位图一样，都是图形的一种，但是它们有着巨大的差别。矢量是以数学的概念，用图形元素指示图形的呈现，可以将矢量图看作是数学表达式。而位图，则是点阵的形式保存图形每个点位的像素值。

推荐使用 Adobe XD 这款轻量免费的矢量设计工具，可以很好地处理 SVG 图形。

SVG 的常用元素：

- 基本形状
    - 矩形 **rect**
    - 圆形 **circle**
    - 椭圆 **ellipse**
    - 折线 **polyline**
    - 多边形 **polygon**
    - 文字 **text**
    - 路径 **path**
    - 字形 **glyph** 元素定义了 SVG 字体中的一个独立的字形。
- 功能元素
    - **g** 分组元素，是用来组合其它对象的容器，可以将其它形状进行分组，还可以通过 use 来引用
    - **symbol** 符号定义，将图形定义为一个符号，以待使用
    - **use** 引用指定 id 的元素
    - **defs**    被引用元素的容器
    - **desc**    对 SVG 中的元素的纯文本描述 - 并不作为图形的一部分来显示。用户代理会将其显示为工具提示。
    - **image** 加载图像文件
    - **a**   定义超链接
    - **animate** 随时间动态改变属性

Web 浏览器基本都支持 SVG，就像它们可以显示 PNG，GIF 以及 JPG 图形。IE 用户可能需要安装 Adobe SVG 阅读器 以便能够在浏览器中查看 SVG。

可以直接在 HTML5 中嵌入 SVG，以下示范用 circle 标签绘制一个圆：

    <!DOCTYPE html>
    <head>
        <title>SVG</title>
        <meta charset="utf-8" />
    </head>
    <body>
        <h2>HTML5 SVG Circle</h2>
        <svg id="svgelem" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle id="redcircle" cx="50" cy="50" r="50" fill="red" />
        </svg>
    </body>
    </html>

或者单独的 SVG 文件保存：

    <?xml version="1.0" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
    "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

    <svg width="100%" height="100%" version="1.1"
    xmlns="http://www.w3.org/2000/svg">

    <path d="M250 150 L150 350 L350 350 Z" />

    </svg>


# Adobe XD 快捷键参考卡
- https://www.wenjiangs.com/doc/xd-help-keyboard-shortcuts

Adobe XD 快捷键参考卡

    Layout                                  Toolbar
                                            
    ☛ Ctrl+Shift+↑  垂直顶端对齐           👉 V     Move 移动
    ☛ Ctrl+Shift+↓  垂直底端对齐           👉 R     Retangle 矩形
    ☛ Ctrl+Shift+←  水平右则对齐           👉 E     Eclipse 椭圆
    ☛ Ctrl+Shift+→  水平左侧对齐           👉 Y     Polygon 多边形
    ☛ Shift+M       垂直居中               👉 L     Line 线条
    ☛ Shift+C       水平居中               👉 P     Ink-Pan 钢笔
    ☛ Ctrl+Shift+H  水平平均分布           👉 T     Text 文本
    ☛ Ctrl+Shift+V  垂直平均分布           👉 A     Panel 画板
                                            👉 Z     Zoom 缩放
    对象操作                                 
                                            View
    ☛ Ctrl+[        图层上移               
    ☛ Ctrl+]        图层下移               ☛ Ctrl+0            工作区全显示
    ☛ Ctrl+Shift+[  置顶图层               ☛ Ctrl+1            100%缩放
    ☛ Ctrl+Shift+]  置底图层               ☛ Ctrl+2            200%缩放
    ☛ Ctrl+Shift+T  添加字符样式           ☛ Ctrl+3            选中目标聚焦
    ☛ Ctrl+Shift+C  添加颜色定义           ☛ Ctrl+Y            图层树面板
    ☛ Ctrl+G        群组打包               ☛ Ctrl+Shift+P      插件列表面板
    ☛ Ctrl+Shift+G  解散群组               ☛ Ctrl+Shift+Y      符号列表面板
    ☛ Ctrl+K        定义组件               
    ☛ Ctrl+L        对象锁定               ☛ Ctrl+Shift+I      导入
    ☛ Shift+E       标记导出/取消          ☛ Ctrl+Shift+E      批量导出
    ☛ Ctrl+,        对象隐藏               ☛ Ctrl+E            选中导出
    ☛ Ctrl+Alt+U    图形并集               ☛ Ctrl+‘            方形网格
    ☛ Ctrl+Alt+S    图形重叠相减           ☛ Ctrl+Shift+’      参考布局
    ☛ Ctrl+Alt+I    图形交集               ☛ Ctrl+;            参考线参
    ☛ Ctrl+Alt+X    图形重叠排除            ☛ Ctrl+Shift+;      考线锁定
    ☛ Ctrl+8        字符转路径
    ☛ Ctrl+R        重复网格
    ☛ Ctrl+Shift+M  剪切蒙版

◉ 鼠标移动到画板左侧、顶端可以拖出参考线；
◉ 背景模糊类似毛玻璃效果是将对象背后的色彩作为模糊色；
◉ 单击画板标题可以选择并进行设置，如画板边距，也可以导出整个画板，画板标题即文件名；
◉ Alt+拖动可以复制对象，Shift 可以约束拖动方向；
◉ 箭头可以轻移选中对象，Shift + 箭头键以 10 像素为增量移动选区；
◉ Shift、Alt 在缩放操作中可以约束参考点、比列参考；
◉ 选中目标时按数字键设置透明度；矢量路径可以作剪切蒙版，选择另外任意对象即会出现上下文菜单；
◉ 重复网格解锁姿势：将文本文件、图片文件拖动到文字框、图形上，网格会自动填充文本行或图片；

https://designmodo.com/repeat-grid-adobe-xd/ By Caleb Kingston


# style & attributes 基本图形样式属性
- https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute#GraphicalEvent
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Fills_and_Strokes
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Texts

SVG有六种基本形状：矩形（包括圆角矩形）、圆形、椭圆、线段、折线、多边形。

|  形状  |   元素   |          常用属性          |                   说明                  |
|--------|----------|----------------------------|-----------------------------------------|
| 矩形   | rect     | width、height、x、y、style | x、y为矩阵左上角的坐标                  |
| 直线   | line     | x1、y1、x2、y2、style      | (x1,y1)起点 (x2,y2)终点                 |
| 圆形   | circle   | cx、cy、r、style           | (cx,cy)圆心 r为圆半径                   |
| 椭圆   | ellipse  | cx、cy、rx、ry、style      | (cx,cy)中心，(rx,ry)两轴半径            |
| 折线   | polyline | points、style              | points 各顶点坐标，要填充时折线必须闭合 |
| 多边形 | polygon  | points、style              | points 依次各顶点坐标                   |

属性中，尺度单位涵盖常见 CSS 单位：

- **em** = 相对于父元素的字体大小
- **ex** = 相对于小写字母"x"的高度
- **px** = 相对于屏幕分辨率而不是视窗大小：通常为1个点或1/72英寸
- **in** = inch, 表英寸
- **cm** = centimeter, 表厘米
- **mm** = millimeter, 表毫米
- **pt** = 1/72英寸
- **pc** = 12点活字，或1/12点
- **%** =  相对于父元素。正常情况下是通过属性定义自身或其他元素

除了 svg 元素本身，其他一些元素，例如 rect 的 width/height 属性也可以使用上面的这些单位，也是默认单位是像素。

用矩形图案示范：

    <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="100" 
            style="fill:rgb(0,0,255); stroke-width:1; stroke:rgb(0,0,0)"/>
        <rect x="20" y="20" width="250" height="250" 
            style="fill:blue; stroke:pink; stroke-width:5; fill-opacity:0.1; stroke-opacity:0.9"/>
    </svg>

属性：

- width 和 height 属性可定义矩形的高度和宽度
- style 属性用来定义 CSS 属性
- x 和 y 属性定义矩形的左侧位置、顶端位置（例如，y="0" 定义矩形到浏览器窗口顶端的距离是 0px）
- rx 和 ry 属性可使矩形产生圆角。

样式和 HTML 的是同概念的，用来修改图形的呈现：

- **fill** 属性定义矩形的填充颜色，RGB、十六进制值、颜色名；
- **stroke-width** 属性定义矩形边框的宽度
- **stroke** 属性定义矩形边框的颜色
- **fill-opacity** 属性定义填充颜色透明度（合法的范围是：0 - 1）
- **stroke-opacity** 属性定义笔触颜色的透明度（合法的范围是：0 - 1）
- **stroke-linecap** 属性决定线段两端的开关，三种可能值：
    - butt 用直边结束线段，它是常规做法，线段边界90度垂直于描边的方向、贯穿它的终点。
    - square 的效果差不多，但是会稍微超出实际路径的范围，超出的大小由stroke-width控制。
    - round 表示边框的终点是圆角，圆角的半径也是由stroke-width控制的。


直线：

    <line x1="0" y1="0" x2="300" y2="300" style="stroke:rgb(99,99,99);stroke-width:2"/>

- x1 属性在 x 轴定义线条的开始
- y1 属性在 y 轴定义线条的开始
- x2 属性在 x 轴定义线条的结束
- y2 属性在 y 轴定义线条的结束

圆形：

    <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red"/>

- cx 和 cy 属性定义中心坐标。如果省略 cx 和 cy，圆的中心会被设置为 (0, 0)
- r 属性定义圆的半径。

椭圆：

    <ellipse cx="300" cy="150" rx="200" ry="80" style="fill:rgb(200,100,50); stroke:rgb(0,0,100); stroke-width:2"/>

- cx 属性定义圆点的 x 坐标
- cy 属性定义圆点的 y 坐标
- rx 属性定义水平半径
- ry 属性定义垂直半径

多边形和折线：

    <polygon points="220,100 300,210 170,250" style="fill:#cccccc; stroke:#000000; stroke-width:1"/>
    <polyline points="0,0 0,20 20,20 20,40 40,40 40,60" style="fill:white;stroke:red;stroke-width:2"/>

- points 属性定义多边形每个点的 xy 坐标


字符元素

    <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="50px">
      <text x="10"  y="20"
            style="font-family: simsun;
                   font-size  : 24;
                   stroke     : url(#Gradient01);
                   fill       : #0000ff;">
        SVG text styling
      </text>
    </svg>

SVG 有一个 image 元素，用于嵌入任意光栅（以及矢量）图像。规范要求应用至少支持 PNG、JPG 和 SVG 格式文件。

    <svg version="1.1"
         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         width="200" height="200">
      <image x="90" y="-65" width="128" height="146" transform="rotate(45)"
         xlink:href="https://developer.mozilla.org/static/img/favicon144.png"/>
    </svg>



# Group & Symbol 分组符号与引用
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/use
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/defs
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/g
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/symbol
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Patterns

在 SVG 元素复用中涉及了 g、symbol、defs 和 use 等元素。

添加到 g 元素上的变换和其它属性会应用到其所有的子元素上，会被其所有的子元素继承，但样式不会被继承也无效果，因为本身不可见。此外，g 元素也可以用来定义复杂的对象，之后可以通过 use 元素来引用它们。和 symbol 或 defs 元素不一样，g 分组内的元素是会呈现出来的。

    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240">
      <g id="line" stroke="rgb(0,127,127)" stroke-width="6" style="border-top-left-radius:20px; border:1px solid red;">
        <line x1="10" y1="10" x2="86" y2="86"/>
        <line x1="10" y1="86" x2="86" y2="10"/>
        <rect x="5" y="5" width="90" height="60" />
      </g>
    </svg>

建议把所有需要再次使用的引用元素定义在 defs 元素里面，这样做可以增加 SVG 内容的易读性和可访问性。 在 defs 元素中定义的图形元素不会直接呈现。 你可以在你的视口的任意地方利用 use 元素呈现这些元素。

symbol 元素用来定义一个图形模板对象，它可以用一个 use 元素实例化。symbol 元素对图形的作用是在同一文档中多次使用，添加结构和语义。结构丰富的文档可以更生动地呈现出来，类似讲演稿或盲文，从而提升了可访问性。注意，一个 symbol 元素本身是不呈现的，只有 symbol 元素的实例，即 use 元素引用时才能呈现。

use 元素在 SVG 文档内取得目标节点，并在别的地方复制它们。它的效果等同于这些节点被深克隆到一个不可见的 DOM 中，然后将其粘贴到 use 元素的位置，很像 HTML5 中的克隆模板元素。因为克隆的节点是不可见的，所以当使用 CSS 样式化一个 use 元素以及它的隐藏的后代元素的时候，必须小心注意。隐藏的、克隆的 DOM 不能保证继承 CSS 属性，除非你明文设置使用 CSS 继承。

出于安全原因，一些浏览器可能在 use 元素上应用同源策略，还有可能拒绝载入 xlink:href 属性内的跨源 URI。

    <?xml version="1.0"?>
    <svg width="240" height="240" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <style>
        .classA { fill:red }
      </style>
      <defs>
        <g id="Port">
          <circle style="fill:inherit" r="10"/>
        </g>
      </defs>

 
      <text y="15">black</text>
      <use x="50" y="10" xlink:href="#Port" />
      <text y="35">red</text>
      <use x="50" y="30" xlink:href="#Port" class="classA"/>
      <text y="55">blue</text>
      <use x="50" y="50" xlink:href="#Port" style="fill:blue"/>
    </svg>

除了一般 xy 坐标和宽高属性，use 元素专有属性 xlink:href 指定引用元素的 ID。

除了图像的引用外，还有绘图属性配置的引用。使用预定义的图形对一个对象进行填充或描边，就要用到 `pattern` 元素，让预定义图形能够以固定间隔在 x 轴和 y轴 上重复（或平铺）从而覆盖要涂色的区域。只需要在给定的图形元素 fill 属性或 stroke 引用填充或描边的图案。

如下引用渐变填充、图案填充：

    <?xml version="1.0"?>
    <svg width="120" height="120" viewBox="0 0 120 120"
         xmlns="http://www.w3.org/2000/svg" version="1.1"
         xmlns:xlink="http://www.w3.org/1999/xlink">

        <defs>
            <linearGradient id="Gradient01">
              <stop offset="20%" stop-color="#39F" />
              <stop offset="90%" stop-color="#F3F" />
            </linearGradient>
            <pattern id="Triangle" 
                     width="10" height="10"
                     patternUnits="userSpaceOnUse">
                <polygon points="5,0 10,10 0,10"/>
            </pattern>
        </defs>

        <rect x="10" y="10" width="60" height="10" fill="url(#Gradient01)"  />
        <circle cx="60" cy="60" r="50" fill="url(#Triangle)"/>
    </svg>


# ViewPort & ViewBox 视口控制
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/viewBox
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/preserveAspectRatio
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/transform
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Basic_Transformations

定义路径作为示范：

    <?xml version="1.0"?>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="480" height="480" viewBox="0 0 280 280">
      <g id="line" stroke="rgb(0,127,127)" stroke-width="12">
        <line x1="10" y1="10" x2="86" y2="86"/>
        <line x1="10" y1="86" x2="86" y2="10"/>
      </g>
      <g id="path" transform="translate(-100,-250)" stroke="black" stroke-width="3" fill="none">
        <path d="M250 250 C50 300, 450 400, 250 450 Z" />
      </g>
    </svg>

从 SVG2 开始，变换属性 transform 是一种图像属性，这意味着它可以用作 CSS 属性，但是在语法上存在一些差异。

    <svg viewBox="-40 0 150 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g fill="grey"
         transform="rotate(-10 50 100)
                    translate(-36 45.5)
                    skewX(40)
                    scale(1 0.5)">
        <path id="heart" d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z" />
      </g>

      <use xlink:href="#heart" fill="none" stroke="red"/>
    </svg>

可以指定一个变换矩阵函数，以六个值的变换矩阵形式指定一个 transform。

    matrix(<a> <b> <c> <d> <e> <f>) 

视图控制属性 `viewBox` 四个参数控制视口映射盒子，min-x, min-y, width and height，以空格或者逗号分隔开。这四个值指定一个矩形映射区作为显示区域，通过这个映射关系可以实现图形的绽放。例子的 SVG 显示区域 `ViewPort` 为 480 方形，而视口映射盒子 `viewBox` 为 280 矩形，最终显示效果就是放大了一倍。

有时使用 viewBox 属性时，希望图形拉伸占据整个视口。在其他情况下，为了保持图形的长宽比，必须使用统一的缩放比例，就需要 `preserveAspectRatio` 属性表示是否强制进行统一缩放。除了 image 元素之外，preserveAspectRatio 只适用于在同一元素上为 viewBox 提供的值。对于这些元素，如果没有提供属性 viewBox ，则忽略。

preserveAspectRatio 设置值包含 xy 轴对齐和裁切两部分，`<align> [<meetOrSlice>]`，比如：`preserveAspectRatio="xMinYMin slice"`。

取值含义如下：

- **xMin** viewport 和 viewBox 左边对齐
- **xMid** viewport 和 viewBox x 轴中心对齐
- **xMax** viewport 和 viewBox 右边对齐

- **YMin** viewport 和 viewBox 上边缘对齐。
- **YMid** viewport 和 viewBox y 轴中心点对齐。
- **YMax** viewport 和 viewBox 下边缘对齐。

- **meet** 默认值，保持纵横比缩放，整个 viewBox 可见并尽可能充满视口。
- **slice** 保持纵横比同时比例小的方向放大填满 viewport
- **none** 扭曲纵横比以充分适应 viewport


# Path 路径图形
- https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/d
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/glyph
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/pathLength
- https://www.w3.org/TR/SVG/paths.html#PathData

除了六个普通图形之外，SVG 还支持复杂的路径图形 path，它就像用指令的方式来控制一只画笔。

比如：移动画笔到某一坐标位置，画一条线，画一条曲线，完事了抬起画笔，收笔结束！

定义路径：

    <?xml version="1.0"?>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="480" height="480" viewBox="0 0 280 280">
      <g id="path" transform="translate(-100,-250)" stroke="black" stroke-width="3" fill="none">
        <path d="M250 250 C50 300, 450 400, 250 450 Z" />
      </g>
    </svg>

属性 d 指定命令列表，用于路径的命令可以分成直线和曲线两类：

- **M** = moveto(M X,Y) ：将画笔移动到指定的坐标位置
- **L** = lineto(L X,Y) ：画直线到指定的坐标位置
- **H** = horizontal lineto(H X)：画水平线到指定的X坐标位置
- **V** = vertical lineto(V Y)：画垂直线到指定的Y坐标位置
- **C** = curveto(C X1,Y1,X2,Y2,ENDX,ENDY)：三次贝赛曲线，前两个是控制点坐标
- **S** = smooth curveto(S X2,Y2,ENDX,ENDY)
- **Q** = quadratic Belzier curve(Q X,Y,ENDX,ENDY)：二次贝赛曲线
- **T** = smooth quadratic Belzier curveto(T ENDX,ENDY)：映射
- **A** = elliptical Arc(A RX,RY,XROTATION,FLAG1,FLAG2,X,Y)：弧线
- **Z** = closepath()：关闭路径

弧线命令参数：

    A rx ry x-axis-rotation large-arc-flag sweep-flag x y
    a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy

前面两个值指定两轴向的半径，后面两个值指定终点坐标，这四个值决定了弧线基本走向。中间三个值，其中一个指定基础图形旋转度数，然后 large-arc-flag 是大小标志位，1 表示取大弧线。最后 sweep-flag 表示弧线是以正角度还是以负角度开始移动，1 为顺时针方向走。

    <svg width="320" height="320" xmlns="http://www.w3.org/2000/svg">
      <path id="mont" d="M 10 315
               L 110 215
               A 30 50 0 0 1 162.55 162.45
               L 172.55 152.45
               A 30 50 -90 0 1 215.1 109.9
               L 315 10" stroke="black" fill="green" stroke-width="1" fill-opacity="0.5"/>
    </svg>

    <svg width="325" height="325" xmlns="http://www.w3.org/2000/svg">
      <path d="M 80 80
               A 45 45, 0, 0, 0, 125 125
               L 125 80 Z" fill="green"/>
      <path d="M 230 80
               A 45 45, 0, 1, 0, 275 125
               L 275 80 Z" fill="red"/>
      <path d="M 80 230
               A 45 45, 0, 0, 1, 125 275
               L 125 230 Z" fill="purple"/>
      <path d="M 230 230
               A 45 45, 0, 1, 1, 275 275
               L 275 230 Z" fill="blue"/>
    </svg>

在线运行 https://codepen.io/lingtalfi/pen/yaLWJG

注释：

- 坐标轴为以(0,0)为中心，X 轴水平向右，Y 轴水平向下。
- 指令大写绝对定位，参照全局坐标系；小写相对定位，参照父容器坐标系。
- 指令和数据间的空格可以省略，负号前的空格可以省略。
- 同一指令执行多次可以只写一个。

参考以下图案，坐标用逗号分隔，还有使用 l 小写时看起来和数字 1 差不多：

    <svg width="325" height="325" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <path d="M50,350 l 50,-25
               a25,25 -30 0,1 50,-25 l 50,-25
               a25,50 -30 0,1 50,-25 l 50,-25
               a25,75 -30 0,1 50,-25 l 50,-25
               a25,100 -30 0,1 50,-25 l 50,-25"
            fill="none" stroke="red" stroke-width="5"  />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="124.357" height="123.357" viewBox="0 0 124.357 123.357">
      <g id="union" transform="translate(0.007 0.007)">
        <path d="M123,122h-99V59l-.15-.15-24-24L35.35.7l23,23,.15.15h65.35Z" fill="#722c2c" stroke="#707070" stroke-width="1"/>
      </g>
    </svg>


属性 pathLength 指定路径总长度，用于较准浏览器的距离计算，用校准值除以这个值，默认是 100 用户单位，如果设置 50 就表示长一倍。这会影响路径的实际渲染长度，包括文本路径、动画路径和各种笔划操作。基本上，所有需要路径长度的计算。

# Bézier Curve 贝塞尔曲线与抽象思维
- 从零开始学图形学 - 贝塞尔曲线 https://zhuanlan.zhihu.com/p/344934774
- 曲线篇: 贝塞尔曲线 https://zhuanlan.zhihu.com/p/136647181
- Bezier Curve Demos http://math.hws.edu/eck/cs424/notes2013/canvas/bezier.html
- https://www.jasondavies.com/animated-bezier/
- 【华中科技大学】计算机图形学 #万琳教授 https://www.bilibili.com/video/BV1V7411k74z?p=32

Bézier Curve 贝塞尔曲线是计算机图形学应用于二维图形应用程序的数学曲线。 曲线定义有起始点、终止点、控制点。通过调整控制点，贝塞尔曲线的形状会发生变化。

1962 年，法国数学家 Pierre Bézier 第一个研究了这种矢量绘制曲线的方法，并给出了详细的计算公式，因此按照这样的公式绘制出来的曲线就用他的姓氏来命名，称为贝塞尔曲线。

二次 Bézier 曲线只需要一个控制点，可以画一条 1/4 圆弧。三次贝赛曲线，前两个是控制点坐标，可以画 1/2 圆。我们可以通过调节控制点的位置，进而调整整个曲线。


以二次 Bézier 曲线的实现过程解析，有起点、控制点和终点 P0、P1、P2，贝塞尔曲线的产生完全与这三个点位置相关。为了确定画线，需要两个运动的参考点：

- R1 从 P0 到 P1 匀速移动；
- R2 从 P1 到 P2 匀速移动；

在期间 R1 R2 连线，其线段可能会长短变化，但只需按比例取 R1-R2 线上的点进行绘制即可得到平滑的曲线。对于三次或多次的 Bézier 曲线，需要在参考点连线上再连参考线，依照处理，同样得到平滑曲线。

虽然贝塞尔曲线的阶数可以很高，但是如果曲线的阶数过高，调整控制点对曲线的影响就比较小，调整起来相当麻烦。于是，通常用分段的贝塞尔曲线，保证每一小段不会太复杂。这样每次只用调小段，还可以做到只调局部不影响大局，那就相当舒服了。

分段带来的唯一问题是，曲线在段与段的交界处，如何保证平滑？所谓平滑，其实就是一阶导数连续，也就是左右导数的极限相同。

对曲线进行反走样 Anti-Aliasing，只需要在曲线附近做点插值就行，满足离曲线越近的像素的像素值越高，越远的越低，即可。

我算是数学抽象思维能力差的，需要通过上面的语言来组织思考，但逻辑思维还可以。抽象思维不是想象力，而是一种从无到有的而又有很准确的概括性的思维能力。

人类文明大概分成了四块，即科学、神学、艺术和哲学。普遍认为核心的知识有三块，数学、逻辑和哲学。数学是准确的知识，1+1=2，数学最有价值也最有难度。逻辑非常抽象，但也是准确的，依靠逻辑推理形成整个知识体系。哲学是人类观世界的方法，或者是人类完善世界观的方法。哲学思维指导方法有七个完整步骤：观察、分析、预判、行动、矫正、结果与反馈。

抽象是一个孤立的过程，是思考着逐渐将信息降维，以保留最普遍信息的一个过程。而逻辑则是不同事物之间建立关系的过程，但并不涉及到信息的减少。一个是简化信息，一个建立信息之间的联系。所以，不要将两者孤立开来，它们同等重要。缺乏抽象思维，则面临信息过多而被淹没，缺乏逻辑，则难以建立问题与求解的关系。一边简化信息，一边建立问题与解的关系，才是最根本也是最重要的做法。

按以下将 6 项思维能力归类：

- 改变世界 <-- 创新思维
- 理解世界 <-- 整体思维、辩证思维、逻辑思维
- 感受世界 <-- 形象思维

可以把理解世界的 3 个基本的思维作为一个整体的抽象思维：

- 逻辑思维（一元思维、线形、明确的因果关系）
- 辩证思维（二元思维，对立统一的两个要素）
- 整体思维（多元思维，认为事物是相互联系的整体，既见树木又见森林）

思维是人脑借助于语言对事物的概括和间接的反应过程，看苹果是苹果，这就是`形象思维`。从一个苹果一根黄瓜抽象出数字 1 的概念，进一步抽象出加减乘除四则运算的概念，这应该是大部分智力正常的人都能达到的；然后从具体的数字运算抽象出用字母代替数字，出来方程、代数概念，这一步已经能淘汰一些人了。然后从数抽象到函数，抽象到集合，这一步能淘汰掉大半人以上。也就是说如果高考总人数是 1000 万，其中可能有 8、9 百万人没有完全理解函数/映射是什么东西。这些考生涉及函数的题就纯粹看成公式运算，对于定义域值域对应法则这些东西始终弄不清楚，因为搞不清楚映射这种基本的数学概念。`函数`、`集合论`的抽象这一步过不去，高考数学及格就难了。对于少部分高中数学概念理解得还不错，同时计算技巧也掌握得不错的同学，然后他们发现考入数学专业后，居然还有进一步的抽象。函数之上还有 epsilon-delta 语言，这是很多人第一次接触真正意义上的现代数理逻辑。是的，很多人的抽象思维能力还根本没达到能读懂形式逻辑的地步，还有抽象代数，还有拓扑。

高中以前学的是具体函数，不管是三角函数，还是二次函数，学了之后脑子里大概都有一种解析几何一般的图景，把函数解析式和图像对应起来。高中之后，抽象程度上升了一层，要学习抽象函数，符号也换成了f(x)，要求在不知道具体解析式的情况下，直接研究这个函数的性质。

很多高中数学还不错的人，本科学数学学得死去活来，基本都是卡在实变、抽代、拓扑这些大二大三课上面。他们根本没有接触过`数学结构`，完全没想到现代数学是这个样子的，并不是配配方凑凑不等式这种技巧就能打天下。能过这一关的人，基本就被认为有做数学研究的潜力了。虽然后面还有进一步的抽象，比如代数几何中的概形语言。但是经历了结构化的数学语言这一关，很多人还是具备了基本的数学素养，能够凭借自己的刻苦努力克服学习过程中的困难。但是在研究阶段，无人区，怎么创造出属于自己的数学，那又是新的挑战了。

罗素说过，数学是符号加逻辑。

大卫·希尔伯特 David Hilbert 说过，听别人讲解某些数学问题时，常觉得很难理解，甚至不可能理解。这时便想，是否可以将问题化简些呢﹖往往，在终于弄清楚之后，实际上，它只是一个更简单的问题。



# 二维图形布尔运算

Path 元素可能是所有 SVG 元素中最通用的形状，可能也是最难掌握的元素。计算机图形学软件实现图形逻辑运算，SVG 矢量图形对象布尔运算是常规需求，这是很有趣的问题，在一维的数学中 1+1=2，到了二维就是一个和另一图的运算。

布尔是英国的数学家，在1847年发明了处理二值之间关系的逻辑数学计算法，包括：

- 联合 union
- 相交 intersection
- 相减 subtraction

在图形处理操作中引用了这种逻辑运算方法以使简单的基本图形组合产生新的形体，还可以进行图形打散，并由二维布尔运算发展到三维图形的布尔运算。

考虑图形关系的几种情况：

- 两图形没有相交部分，做布尔运算都简单。
- 其中一个图形包含另一个图形，这也是容易的情形，将其中一个图形反转方向绘制，这样得到的 Loop 就是镂空的。
- 当两个图形相交时，情况就复杂了。可能是点线相交，也可以是部分相交，根据不同的运算需求不一样。


# Gradient 渐变色
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/linearGradient
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/radialGradient
- https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/gradientUnits
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Gradients
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Clipping_and_masking

有两种基本渐变色：

- linearGradient 元素用来定义线性渐变，用于图形元素的填充或描边。
- radialGradient 用来定义径向渐变，以对图形元素进行填充或描边。

通用属性：

- gradientUnits 设置坐标系统单位。
- gradientTransform 设置渐变变形，如 gradientTransform="skewX(20) translate(-35, 0)"
- spreadMethod 设置边界的拼接方式 pad reflect repeat
- xlink:href 在 SVG 2 移除此属性，直接使用 href

线性渐变专用属性有 x1 y1 渐变色起点坐标和 x2 y2 结束点坐标。坐标值大小反转，表示色彩出来顺序反转，渐变区为两值之间区域，区域外用两端色值填充。内部的 stop 色彩用于指定渐变使用色站，每个色站指定颜色和相对位置。

径向渐变专用属性有 cx cy 中心坐标各 fx fy 焦点坐标。还有 r 半径和 fr 焦点半径 focal point。如果打个比方的话，可以理解为灯光，有灯罩的那种电灯泡，通过摇摆灯，可以是灯光的照射范围改变。焦点在中心点半径内使用居多，即当焦点作用范围超出中心点半径范围时，就像在灯罩外看灯光。

    <svg width="120" height="120" viewBox="0 0 240 120"
       xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="exampleGradient" x1="20%" x2="100%" id="g1">
          <stop offset="40%"  stop-color="#222"  />
          <stop offset="70%" stop-color="#880000" />
          <stop offset="95%" stop-color="#ee3" />
          <stop offset="99%" stop-color="#fff" />
        </linearGradient>
        <radialGradient spreadMethod="pad"
                        cx="23%"
                        cy="50%"
                        r="60%"
                        fx="30%"
                        fy="70%"
                        fr="10%"
                       id="flameGradient">
          <stop offset="0%" stop-color="white"/>
          <stop offset="10%" stop-color="yellow"/>
          <stop offset="95%" stop-color="red"/>
        </radialGradient>
      </defs>
      <circle fill="url(#exampleGradient)" cx="60" cy="60" r="50"/>
      <circle fill="url(#flameGradient)" cx="180" cy="60" r="50" />
    </svg>

在线运行 https://next-js-tutorials.vercel.app/zh-CN/posts/svg-radialGradient

遮罩的效果最令人印象深刻的是表现为一个渐变。如果你想要让一个元素淡出，你可以利用遮罩效果实现这一点。

    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="Gradient">
          <stop offset="0" stop-color="white" stop-opacity="0" />
          <stop offset="1" stop-color="white" stop-opacity="1" />
        </linearGradient>
        <mask id="Mask">
          <rect x="0" y="0" width="200" height="200" fill="url(#Gradient)"  />
        </mask>
      </defs>

      <rect x="0" y="0" width="200" height="200" fill="green" />
      <rect x="0" y="0" width="200" height="200" fill="red" mask="url(#Mask)" />
    </svg>

你看到有一个绿色填充的矩形在底层，一个红色填充的矩形在上层。后者有一个mask属性指向一个mask元素。mask元素的内容是一个单一的rect元素，它填充了一个透明到白色的渐变。作为红色矩形继承mark内容的alpha值（透明度）的结果，我们看到一个从绿色到红色渐变的输出。

Clipping 用来移除在别处定义的元素的部分内容。在这里，任何半透明效果都是不行的。它只能要么显示要么不显示。Masking 允许使用透明度和灰度值遮罩计算得的软边缘。

我们在一个圆形的基础上创建上面提到的半圆形：

    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="cut-off-bottom">
          <rect x="0" y="0" width="200" height="100" />
        </clipPath>
      </defs>

      <circle cx="100" cy="100" r="100" clip-path="url(#cut-off-bottom)" />
    </svg>

在(100,100)创建一个圆形，半径是100。属性clip-path引用了一个带单个rect元素的 clipPath 元素。它内部的这个矩形将把画布的上半部分涂黑。注意，clipPath元素经常放在一个defs元素内。


# Filter 滤镜
- https://drafts.fxtf.org/filter-effects/#FilterElement
- https://developer.mozilla.org/en-US/docs/Web/CSS/blend-mode
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Filter_effects

滤镜容器 filter 元素作用是作为原子滤镜操作的容器，它不能直接呈现，利用目标 SVG 元素上的 filter 属性引用一个滤镜。

filter 容器元素属性：

- x,y,width,height 这些属性定义了滤镜起作用的矩形区域。x y 默认值是-10%，width height 的默认值是 120%。
- filterUnits 定义 x y width height 等属性使用的单位。`userSpaceOnUse` 表示引用该滤镜的元素的坐标系统。`objectBoundingBox` 默认值，使用引用该滤镜的元素外围盒的百分比做取值范围。
- primitiveUnits 属性定义每个原子操作中，坐标和长度使用的单位，取值 userSpaceOnUse 和 objectBoundingBox，默认值是 userSpaceOnUse。
- filterRes 属性定义了中间缓存区域的大小，所以也定义了缓存图片的质量。通常，滤镜效果区域应该和背景正好能点点对应，这样会带来一定的效率优势。
- xlink:href 属性引用其他 filter 元素，注意 filter 元素只会继承自身父节点的属性。
- enable-background 为了支持背景作为输入这种使用方式，可以开启这个特性：

        enable-background = "accumulate | new [ <x> <y> <width> <height> ] | inherit"

    new 值代表：允许该容器的子元素访问容器的背景截图，并且该容器的子元素会渲染到背景中和设备上。
    accumulate 默认值，它的效果取决于上下文：如果父辈容器元素使用了 enable-background：new 的话，那么该容器的所有图形元素都会参与背景的渲染。否则，说明父辈容器没有准备截取背景截图，该元素的图形元素显示只显示在设备上。


滤镜元素如下，一般输入有 in 和 in2 两个属性：

- `<feBlend>` 设置两组件元素进行混合的模式
- `<feColorMatrix>` 基于转换矩阵对颜色进行变换，每一像素的颜色值都经过矩阵乘法计算出的新颜色。
- `<feComponentTransfer>`
- `<feComposite>` 该滤镜执行两个输入图像的智能像素组合，在图像空间中使用 Porter-Duff 合成操作：over、in、atop、xor。另外，还可以应用一个智能组件 arithmetic 操作（结果被压到[0,1]范围内）。
- `<feConvolveMatrix>`
- `<feDiffuseLighting>` 滤镜光照一个图像，使用alpha通道作为隆起映射。
- `<feDisplacementMap>`
- `<feFlood>` 用元素定义的 flood-color 颜色和 flood-opacity 不透明度填充滤镜子区域。
- `<feGaussianBlur>` 对输入 in 图像进行高斯模糊，stdDeviation 属性指定的数量定义了钟形。
- `<feImage>`
- `<feMerge>` 允许同时应用滤镜效果而不是按顺序应用滤镜效果。利用 result 存储别的滤镜的输出可以实现这一点，然后在一个 feMergeNode 子元素中访问它。
- `<feMergeNode>` 元素拿另一个滤镜的结果，让它的 feMerge 父元素处理。
- `<feMorphology>`
- `<feOffset>` 输入 in 图像作为一个整体，在属性 dx 和属性 dy 的值指定了它的偏移量。
- `<feSpecularLighting>`
- `<feTile>` 将属性 in 输入图像平铺填充目标，效果近似于一个 pattern 图案对象。
- `<feTurbulence>`

滤镜属性总览：

- x,y,width,height 基本属性，定义了滤镜原子起作用的区域。默认取值分别是 0,0,100%,100%。
- result 结果临时存放属性，存放该步操作的结果。同容器下的后续操作都可以在 in 属性指定其作为输入。省略了这个值，依次输入到下一步操作，除非下一步操作已经指定 in 输入。
- in 该步操作的输入，省略 in 属性将会使用用前一步的结果。对于第一步操作，则会使用 SourceGraphic。

输入属性可以引用 result 存放的值，也可以指定下面 6 个特殊的值：

- **SourceGraphic** 这个值代表使用当前的图形元素作为操作的输入。
- **SourceAlpha** 这个值代表使用当前图形元素的 Alpha 值作为操作的输入。
- **BackgroundImage** 这个值代表使用当前的背景作为操作的输入。
- **BackgroundAlpha** 这个值代表使用当前的背景的 Alpha 值作为操作的输入。
- **FillPaint** 这个值使用当前图形元素的 fill 属性的值作为操作的输入。
- **StrokePaint** 这个值使用当前图形元素的 stroke 属性的值作为操作的输入。


混合模式 Blending Mode 即是两种色彩混合时的计算方式：

- **normal** 结果是顶层的颜色覆盖下层。
- **multiply** 结果是两组颜色相乘，有黑色结果就是黑色，因为色值为 0，白色为 1 不会改变。
- **screen** 结果是反转色 Inverting colors，相乘再反转，黑色不产生改变，白色结果变白色。
- **overlay** 底色暗则相乘，底色浅则 screen 模式。等效 hard-light 模式加图层交换。
- **darken** 取暗色叠加。
- **lighten** 取浅色叠加。
- **color-dodge** invert(top)/bottom，类似 screen 但前景色只需一个背景反转色就可以产生明亮色。
- **color-burn** invert(invert(bottom)/top)，白色不产生改变，类似 multiply 但前景只需要和背景反转色一样黑，结果就是黑色。
- **hard-light** 顶层深色即 multiply，否则 screen，效果类似于将刺眼的聚光灯照射在背景上。
- **soft-light** 类似 hard-light 但更柔和，相当漫射光 diffused spotlight。
- **difference** 由浅色方减去深色。
- **exclusion** 类似差值模式 difference 但对比度更低。
- **hue** 模式是取顶层的色调，取底层的饱和度和亮度，顶层图形看起来有些轮廓与底混合。
- **saturation** 模式取顶层的饱和度，取底层的色调和亮度，顶层图形看起来与底层混合。
- **luminosity** 模式取顶层的亮度，取底层的色调和饱和度，顶层图形看起来更显眼。
- **color** 取顶层色调和饱和度，取底层的亮度，此模式保留了底层的灰度值，改变了顶层的着色。


示范：

    <svg width="250" viewBox="0 0 200 85"
         xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <!-- Filter declaration -->
        <filter id="MyFilter" filterUnits="userSpaceOnUse"
                x="0" y="0"
                width="200" height="120">

          <!-- offsetBlur -->
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur"/>
          <feOffset in="blur" dx="4" dy="4" result="offsetBlur"/>

          <!-- litPaint -->
          <feSpecularLighting in="blur" surfaceScale="5" specularConstant=".75"
                              specularExponent="20" lighting-color="#bbbbbb"
                              result="specOut">
            <fePointLight x="-5000" y="-10000" z="20000"/>
          </feSpecularLighting>
          <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut"/>
          <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic"
                       k1="0" k2="1" k3="1" k4="0" result="litPaint"/>

          <!-- merge offsetBlur + litPaint -->
          <feMerge>
            <feMergeNode in="offsetBlur"/>
            <feMergeNode in="litPaint"/>
          </feMerge>
        </filter>
      </defs>

      <!-- Graphic elements -->
      <g filter="url(#MyFilter)">
          <path fill="none" stroke="#D90000" stroke-width="10"
                d="M50,66 c-50,0 -50,-60 0,-60 h100 c50,0 50,60 0,60z" />
          <path fill="#D90000"
                d="M60,56 c-30,0 -30,-40 0,-40 h80 c30,0 30,40 0,40z" />
          <g fill="#FFFFFF" stroke="black" font-size="45" font-family="Verdana" >
            <text x="52" y="52">SVG</text>
          </g>
      </g>
    </svg>


# Animate 动画
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/animate
- https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute#animation_attributes
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/animateMotion

主要的动画元素：

- `set` 指定时直接设置一个属性值；
- `animate` 动画地改变对象的属性值；
- `animateMotion` 使对象沿着运动路径进行移动；
- `animateTransform` 动画地变换对象；

动画元素放在形状元素的内部，用来定义一个元素的某个属性如何踩着时点改变。在指定持续时间里，属性从开始值变成结束值。

    <svg viewBox="0 0 10 10" width="200" height="200"  xmlns="http://www.w3.org/2000/svg">
      <rect width="10" height="10">
        <animate attributeName="rx" values="0;5;0" dur="10s" repeatCount="indefinite" />
      </rect>
    </svg>

动画专有属性:

- **attributeName** 需要动画效果的属性
- **attributeType** 目标属性类型，CSS、XML、auto
- **from** 开始值
- **to** 结束值
- **dur** 时间长度
- **repeatCount** 重复次数 

SVG animation 中的时间表示单位有 h min s ms，适用于 dur, end 属性。

AnimateColor 特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它。

set 元素可以用来在某个时间设定一个属性值，它支持所有的属性类型，包括那些原理上不能插值的，例如值为字符串和布尔类型的属性。 set 元素是非叠加的，无法使用 additive 或 accumulate 属性，即使声明了这些属性也会自动被忽略。

注意：为了复用一个已经定义的路径，就有必要使用一个 mpath 元素嵌入到 animateMotion 中，而不是使用 path。

    <svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <path id="road" fill="none" stroke="lightgrey"
      d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />

    <rect y="0" x="0" width="10" height="10" fill="black">
      <animate attributeName="x" values="0;190;50" dur="3s" repeatCount="indefinite" />
      <animate attributeName="y" values="0;190;0" dur="5s" repeatCount="indefinite">
      </animate>
      <set attributeName="y" to="100" begin="4s" />
      <set attributeName="fill" attributeType="XML" to="yellow" begin="1s"/>
    </rect>
    <circle r="5" fill="red">
      <animateMotion dur="10s" repeatCount="indefinite"
        path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />
    </circle>
    <rect y="-5" width="10" height="10" fill="darkblue">
      <animateMotion dur="3s" repeatCount="indefinite" rotate="auto" >
        <mpath xlink:href="#road"/>
      </animateMotion>
    </rect>
    </svg>

`animateTransform` 元素变动了目标元素上的一个变形属性，从而允许动画控制转换、缩放、旋转或斜切。

    <?xml version="1.0"?>
    <svg width="120" height="120"  viewBox="0 0 120 120"
         xmlns="http://www.w3.org/2000/svg" version="1.1"
         xmlns:xlink="http://www.w3.org/1999/xlink" >

        <polygon points="60,30 90,90 30,90">
            <animateTransform attributeName="transform"
                              attributeType="XML"
                              type="rotate"
                              from="0 60 70"
                              to="360 60 70"
                              dur="10s"
                              repeatCount="indefinite"/>
        </polygon>
    </svg>


# Style & Scrirpt
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/style
- https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/script

在 SVG 内容中间嵌入 Style & Scrirpt 元素的属性与 HTML 中的相应的元素并无二致。一个 SVG 脚本元素等同于 HTML 中的 script 元素，例如，ECMAScript。

任何定义在 script 元素中的函数拥有一个跨当前文档的全局范围。

    <svg width="100%" height="100%" viewBox="0 0 100 100"
         xmlns="http://www.w3.org/2000/svg">
      <style>
        /* <![CDATA[ */
        circle {
          fill: orange;
          stroke: black;
          stroke-width: 10px; // Note that the value of a pixel depend on the viewBox
        }
        /* ]]> */
      </style>
      <script type="text/javascript">
        // <![CDATA[
        function change(evt) {
          var target = evt.target;
          var radius = target.getAttribute("r");

          if (radius == 15) {
            radius = 45;
          } else {
            radius = 15;
          }

          target.setAttribute("r",radius);
       }
       // ]]>
      </script>

      <circle cx="50" cy="50" r="45" fill="green" onclick="change(evt)" />
    </svg>


