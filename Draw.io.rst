

/🟡Draw.io and SVG
==================

   Draw.io 是基于开源交互式绘图框架 mxGraph 开发的图表设计软件，它本身也是开源软件，基于浏览器运行，
   桌面版本基于 Electron 技术开发。mxGraph 交互式绘图库有多种语言实现，包括 JavaScript 和 Java。
   早在 2002 年发布了基于 Java 实现的 JGraph，2005 年升级到 JGraph 5.x 后开始使用 JavaScript
   实现，并且将项目命名名为 mxGraph，原版本更名为 JGraphX，并且版本与 mxGraph 保持一致。mxGraph
   源代码中包含了大量示范案例供学习 mxGraph 框架之用。

   *  `drawio <https://github.com/jgraph/drawio>`__
   *  `draw.io Documentation <https://www.drawio.com/doc/>`__
   *  `mxGraph <https://github.com/jgraph/mxgraph>`__
   *  `mxGraph Tutorial [JavaScript] <https://jgraph.github.io/mxgraph/docs/tutorial.html>`__
   *  `mxGraph User Manual – JavaScript Client <https://jgraph.github.io/mxgraph/docs/manual.html>`__
   *  `JGraphX (JGraph 6) User Manual <https://jgraph.github.io/mxgraph/docs/manual_javavis.html>`__

   .. code:: bash

      git clone -b v24.7.5 git@github.com:jgraph/drawio

   Draw.io 有多个版本，包括各种插件版本：

   *  `GraphEditor - mxGraph 源代码自带的早期版本 <https://jgraph.github.io/mxgraph/>`__
   *  `draw.io Integration - VS Code 插件版 <https://github.com/hediet/vscode-drawio>`__
   *  `draw.io 桌面版 <https://github.com/jgraph/drawio-desktop/releases>`__
   *  `draw.io editor 在线版 <https://app.diagrams.net/>`__

   VS Code 插件版 UI 更接近 mxGraph 源代码中自带的 GraphEditor，但是功能和正式版本更接近。
   但是由于插件长时间未曾更新版本，所以并不是最新的 Draw.io 版本。插件版有个问题，它在保存文档时
   总会嵌入一个 Architect's Daughter 手写字体，额外占用 40kb。如果有大量的小尺寸图片，可以使用
   Draw.io: Convert To... 命令将文档保存为 PNG 格式，这种格式可以避免额外嵌入字体数据，同时
   还可以将 Draw.io 源文档嵌入到 PNG 文件内以方便再次编辑。或者使用 Draw.io 桌面版本，来避免
   嵌入字体。

   增补：VS Code 插件版在 2024 年 5 月更新了一版本，所以功能已经是最新状态。并且可以通过命令面板
   切换布局方案。另外，插件作者还尝试添加了一些功能以方便与 VS Code 编辑中的工程、文件进行联动，但
   是并不实用、也不够好用。例如，将编辑中的文件路径、光标位置嵌入图表的属性中。可以在图表的 `label`
   属性也就是图表的文本内容中使用 # 号来和 VS Code 中的打开的代码文件进行联动，状态栏左侧 Code Link
   为黑色圆心状态表示此时激活了 Code Link 功能，可以通过双击图表来定位到打开代码文件中的类型定义位置。
   比如，某个矩形内容为 #Foo，那么双击它，光标就会跳转到打开的代码文件中的相应位置。我想如果实现一个数学
   公式自动展示的功能还不错，或者通过图表来实现代码生成也是个不错的想法：

   —  Draw.io: Change Theme
   —  Draw.io: Link Code with Selected Node 
   —  Draw.io: Link File With Selected Node 
   —  Draw.io: Link Symbol With Selected Node
   —  Draw.io: Link Workspace Symbol With Selected Node

   Draw.io 官方为了用户便于使用一些“复杂功能”，提供了一些易用 Web 小工具：

   -  `Draw.io Tools - Viewer <http://jgraph.github.io/drawio-tools/tools/viewer.html>`__
   -  `Online Diagram Viewer <https://www.drawio.com/blog/online-diagram-viewer>`__

   Diagram Viewer 是阅读模式，启用了 lightbox 模式。阅读模式下没有编辑器的各种面板，它通常
   用于向用户分享、展示 draw.io 绘制的交互式图表。官方提供的 Draw.io Tools - Viewer 工具可以
   为多种图表格式（.drawio, .vsdx, .vdx, .gliffy or .lucid）提供阅读模式的 URL 地址生成。
   比如，以下提供的教程页面中有一个 draw.io-Beginners-Guide-english.xml 图表文件，通过工具
   就可以生成合并阅读模式、Editor 模式或者使用 IFrame 嵌入页面等形式的 URL 生成，当然 draw.io
   在线版也提供了 File -> Open From -> URL... 功能来打开 URL 指定的图表文档：

   *  https://www.draw.io/?lightbox=1&edit=_blank#Uhttps%3A%2F%2Fdrawio-app.com%2Fwp-content%2Fthemes%2Fdraw.io-avada%2Fdownloads%2Fdraw.io-Beginners-Guide-english.xml

   如果你对 draw.io 图表工具中涉及的各个名称有疑问，那么可以阅读这篇术语解惑。当然，最好的方法是
   将编辑器中的各种功能与 mxGraph 文档对象关联起来，这样才不至于“盲人摸象——不得真像”：

   *  `The draw.io Glossary <https://drawio-app.com/blog/the-draw-io-glossary/>`__

   顺带提一嘴，研究 draw.io 或者 mxGraph 图表绘制工具，是因为目前需要使用它来为我研究《缺氧》
   Oxygen Not Included 这款游戏的资源循环逻辑关系制作一张信息图表，这张图将包含游戏 Wiki 页面
   的引用，以各种建筑与元素、植物、小动物，以及其它各种游戏物体之间的循环关系。并且会使用 SVG 格式，
   这些工作本可以使用老牌的 Inkscape 来制作，但是 Inkscape 工具虽然功能丰富，但是在 Windows
   系统上有一个致命问题：卡顿！所以，更轻量的且功能又易用且足够用的 draw.io 倒是最佳选择。

   为了快速了解 draw.io 功能，这里有一套交互式教程，可以直接下载 XML 文档并使用 draw.io 编辑器
   打开，然后跟教程一步步执行操作。需要注意的是，教程使用的 darw.io 版本是将所有页面显示在底部的，
   如果使用最新的 draw.io v24.7.5 桌面版本打开，页面会显示在右下角的页面列表中，因为新版本的界面
   重新做了优化，视图更合理，画面面积更宽阔。所以，当教程指示点击某某按钮继续，比如说让点击 “Zoom” tab，
   意思是切换到相应的 Zoom 页面标签，也可以使用快捷键切换页面（Ctrl+Left or Right）：

   *  `Interactive Tutorials <https://drawio-app.com/tutorials/interactive-tutorials/>`__
   *  `Rookie - Beginners Guide (V 2.1) <https://app.diagrams.net/#Uhttps%3A%2F%2Fdrawio-app.com%2Fwp-content%2Fthemes%2Fdraw.io-avada%2Fdownloads%2Fdraw.io-Beginners-Guide-english.xml>`__
      Nine steps to get started quickly with draw.io:

      *  `download xml [2.0M] <https://drawio-app.com/wp-content/themes/draw.io-avada/downloads/draw.io-Beginners-Guide-english.xml>`__
      *  Learn how to navigate through the canvas
      *  Find the right tools and panels on the draw.io interface
      *  Work with shapes, text, colors, links and images

   *  `Rookie - Whiteboard Guide (V 1.1) <https://app.diagrams.net/#Uhttps%3A%2F%2Fdrawio-app.com%2Fwp-content%2Fthemes%2Fdraw.io-avada%2Fdownloads%2FInteractiveTutorialWhiteboard.xml>`__
      Nine steps to kick-start your whiteboard experience:

      *  `download xml [4.6M] <https://drawio-app.com/wp-content/themes/draw.io-avada/downloads/InteractiveTutorialWhiteboard.xml>`__
      *  Find the right tools and panels on the whiteboard interface
      *  Work with shapes, text, colors, links and images
      *  Learn how to navigate through the canvas

   *  `Rookie - Layers Guide (V 1.3) <https://app.diagrams.net/#Uhttps%3A%2F%2Fdrawio-app.com%2Fwp-content%2Fthemes%2Fdraw.io-avada%2Fdownloads%2Fdraw.io-tutorial-layers.xml>`__
      Think and work in layers to structure complex diagrams:

      *  `download xml [4.3M] <https://drawio-app.com/wp-content/themes/draw.io-avada/downloads/draw.io-tutorial-layers.xml>`__
      *  Work with the layer panel
      *  Add, lock, order and duplicate layers
      *  Add and move shapes to and between layers

   *  `Advanced - Connectors Guide (V 1.5) <https://app.diagrams.net/#Uhttps%3A%2F%2Fdrawio-app.com%2Fwp-content%2Fthemes%2Fdraw.io-avada%2Fdownloads%2Fdraw.io-tutorial-connectors.xml>`__
      Learn how to connect shapes like a pro:

      *  `download xml [7.6M] <https://drawio-app.com/wp-content/themes/draw.io-avada/downloads/draw.io-tutorial-connectors.xml>`__
      *  Differentiate between fixed and floating connectors
      *  Adjust connectors and work with waypoints
      *  Get to know different styling options
      *  Learn shortcuts and advanced tips

   *  `Master - Interactive Shapes Guide (V 1.7) <https://app.diagrams.net/#Uhttps%3A%2F%2Fdrawio-app.com%2Fwp-content%2Fthemes%2Fdraw.io-avada%2Fdownloads%2Fdraw.io-tutorial-interactive-shapes.xml>`__
      Toggle parts of your diagram on and off after creating an interactive diagram 
      with custom links and actions:

      *  `download xml [1.3M] <https://drawio-app.com/wp-content/themes/draw.io-avada/downloads/draw.io-tutorial-interactive-shapes.xml>`__
      *  Work with layers and layer IDs
      *  Add custom links and create toggle buttons
      *  Create an interactive floor plan
      *  Lock all interactive diagrams layers

   Darw.io 绘图工具使用 SVG 兼容格式，它本身使用 drawio 作为文件扩展名的 XML 格式保存 mxGraph。
   导出的 SVG 格式称为可编辑 SVG 格式，因为在其内部嵌入了元数据（Embed Metadata），在保存文件时将
   元数据导出为 SVG 兼容的 xml 文件数据，并且在 SVG 文件内的 svg 节点的 content 属性中保存压缩过
   的元数据。因此，Draw.io 在编辑 SVG 文档时其实还是在编辑 drawio 格式同样的内容，只不过在保存时
   被重新编码后作为 ``<svg>`` 节点的属性值保存起来，下次打开再编辑器就重新读取出来。可以在 Draw.io
   编辑器中直接修改元数据来编辑图形。元数据使用 XML 节点来保存 mxGraph 节点数据，顶层为 mxGraphModel。
   元数据内使用 mxCell 定义图形，内嵌的 HTML 图形内容保存在 value 属性中，当保存 SVG 文档时就会将
   mxGraph 绘制的图形转换为相应的 SVG 标签。如果需要将导出的 SVG 嵌入到其它文档，比如将 SVG 嵌入
   HTML 页面，这样就需要执行 Export As -> Embed -> SVG。使用 SVG 文档作为 draw.io 图表格式
   的一大好处是，它既兼容了 SVG 图形的通用性，又可以通过内嵌元数据保留、实现 draw.io 专用的功能。

   Draw.io 利用 mxGraph 绘图能力和基于 XML 数据编码，可以将图形数据嵌入到 HTML、SVG、PNG 以及
   PDF 等开源的文件格式中，也就是可以再次打开这些嵌入了 Diagram 数据的文件时，依然可以编辑其内容。
   当然，也可以继续使用 Inkscape 来加工 SVG 图形，但是这种修改是不会反映到 mxGraph 图形数据中，
   所以也不被 Draw.io 识别。

   WebP (Web Picture) 是 Google 发布的扩展名为 .webp 的网页使用的位图图像文件格式。这种格式
   的压缩图像比通常格式多 50-70％，并且图形质量不会受到影响。与以前的图形格式相比，WebP 可以存储
   质量更高的图像。该格式使用开放的编解码器 VR8 和 RIFF 容器，这为进一步改进创造了良好的潜力。这种
   格式为网站开发人员提供了一种现代化的解决方案，因为页面加载速度更快而又不牺牲图形质量。现代浏览器
   基本都支持该格式。有损 WebP 使用预测编码来估计相邻像素的标准颜色值。一些用户称之为 Weppy 文件。

   如果从嵌入图片的角度出发，SVG 使用的是 Base64 编码，PDF 格式使用的是二进制对象，因此至少节省
   1/3 的空间，还不包含数据压缩。因此，需要嵌入图片时，导出 PDF 可能是个好选择。默认使用 Page View
   方式，导出，如果 Draw.io 图形并不是按常规的页码设计的图形，那么就可以选择 Crop 导出方式，防止
   内容因为分页而打散。无论是 SVG 或者 PDF 格式，嵌入的图像数据并不是 mxGraph 的原始 XML 数据，
   在网络离线的状态下使用 Draw.io 重新打开文档时，并不会读取嵌入的图像数据，因此不会显示这些图像。

   注：导出 PDF 时，有三种页面适配方式：

   *  `Page View` 模式下，会按 draw.io 中的图形内容所占用的 Page 区域从上到下、从左到右
      切割为相应的 PDF 页面内容。只要图形在选中时显示的边框线出来在相应的区域，就当作占用区。
   *  `Crop` 模式则是将整个 draw.io 页面内容转换为一个 PDF 页面。 
   *  `Fit to` 方式则会按图表内容调整 PDF 页面（sheet）的大小，以适应横向和/纵向的 sheet 数量，保持比例。

   `Export a diagram to a PDF file <https://www.drawio.com/doc/faq/export-to-pdf>`__

   另外，还可以将 XML 数据编码为 URL 地址形式，这样就可以直接利用 Draw.io 在线版本来浏览、编辑。
   HTML 文件格式内容如下，多个 Page 分页会使用 Lightbox 工具视图来浏览。页面中引用的 Viewer
   脚本包含了 Lightbox 也包含了 mxGraph 绘图框架，所以它有点大 3.42MB：

   .. code::

      <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=5,IE=9" ><![endif]-->
      <!DOCTYPE html>
      <html>
      <head>
      <title>Wolfs_Comming</title>
      <meta charset="utf-8"/>
      </head>
      <body><div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="..."></div>
      <script type="text/javascript" src="https://viewer.diagrams.net/js/viewer-static.min.js"></script>
      </body>
      </html>

   Draw.io 会大量使用 SVG 规范新引入的 `<foreignObject>` 节点，它可以支持 SVG 图像中内嵌 HTML
   内容，对文字排版用途比较有帮助。Draw.io 会在 `<foreignObject>` 节点内设置三个 div 节点用于定义
   图形的基本属性，尺寸、背景、边框、字体等等，然后再在子层包含用户图案。所以，如果希望嵌入的 HTML
   可以灵活地改变这些属性，就不应该内嵌样式属性。使用 HTML 的自动排版功能有个缺点：元素绝对位置
   根据不同浏览器默认样式、字体设置有关，难以精确地使用元素的坐标来绘制关联的图形，图形可能会走样。

   Draw.io 支持 HTML 页面内容的复制粘贴，只是处理图片时有些问题，在编辑器中可以显示图片，但是导出
   SVG 文件时就不会加载 URL 指定的外部图片文件。这个问题可以通过将图片 base64 编码后内嵌到文档内。
   桌面版 Drwa.io 似乎没有这样的问题，它不会像插件版给图像标签使用占位矢量图，而是直接使用图像地址。
   可以手动使用 SVG 导出功能并且勾选 Embed Images 就可以将图片编码并内嵌到 SVG 文档中。单个图像
   拖放到 draw.io 编辑器时，可以自动完成 base64 编码并内嵌，不需要额外的操作。

   注意：如果使用了中文字体，在导出 SVG 时如果勾选了 Embed Fonts 选项，那么会导出的 SVG 文档
   会非常大，因为中文字体的字符集比较大，一般都是几个 MB 的级别。

   如果使用 Linux 或者 MSYS2 环境，可以直拼命用 curl 和 base64 命令完成图像的下载、编码工作。
   参考以下 bash 脚本，是否需要使用 base64 标记取决于图像数据的使用场合，draw.io 中不使用：

   .. code:: bash

      function base64image(){
         while read -r url
         do
            #echo "data:image/webp;base64,`curl "$url" | base64 -w 0`">>$0;
            echo "data:image/webp,`curl "$url" | base64 -w 0`">>$0;
         done <<EOF
      https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/6f/Duplicant.png
      https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/08/Codex_Duplicants.png
      EOF
      }
      base64image; exit

   .. Note::

      `The "data" URL scheme <https://www.rfc-editor.org/rfc/rfc2397>`__

      3. Syntax

      .. code:: javascript

         dataurl    := "data:" [ mediatype ] [ ";base64" ] "," data
         mediatype  := [ type "/" subtype ] *( ";" parameter )
         data       := *urlchar
         parameter  := attribute "=" value

      where "urlchar" is imported from [RFC2396], and "type", "subtype",
      "attribute" and "value" are the corresponding tokens from [RFC2045],
      represented using URL escaped encoding of [RFC2396] as necessary.

      Attribute values in [RFC2045] are allowed to be either represented as
      tokens or as quoted strings. However, within a "data" URL, the
      "quoted-string" representation would be awkward, since the quote mark
      is itself not a valid urlchar. For this reason, parameter values
      should use the URL Escaped encoding instead of quoted string if the
      parameter values contain any "tspecial".

      The ";base64" extension is distinguishable from a content-type
      parameter by the fact that it doesn't have a following "=" sign.

   Draw.io 画布是自动扩展了，新创建图表文件后，左上角的位置就是原点（0，0）。用户在画布上绘制图形后，
   程序会自动计算这些图形占用的空间，导出 SVG 文件时会自动设置 ViewBox 等属性框定所有图形。如果
   需要明确的图形边界，可以在四角打上十字星这样的图标标记文档的作画空间。也可以通过菜单设置页面边界
   距离：File -> Properities -> Border With。

   Draw.io 提供了一些比如好用的组图功能，比如图形模板中提供了列表模板，将它拖到画布上，就可以添加
   列表项，其它图形也可以作为列表项添加进来，并且随时可以移走，Draw.io 会自动修正列表元素的对齐。
   不同图形可以组合（group）在一起，将它拖放到列表的标题上就是添加到列表中。将列表元素拖出列表图形
   所在区域，就会从列表中移除元素。当鼠标悬停在列表的边界元素时，会出现提示箭头，点击箭头弹出选项列表，
   可以从其中选择要复制的图形，包括鼠标下方的图形。Draw.io 会自动创建一个箭头指向它，并且移动子项目
   会动态更新箭头及指示线。

   列表元素可以设置超级链接用于打开网页，但是注意，导出 SVG 文档后，由于 SVG 中链接表现与 HTML
   中的链接不太一样，当月对象被其它对象遮挡时链接就会失效，即使得链接是父级节点。因此，给一个包含有
   多个图形构成的对象设置超链接时，就需要考虑让链接如何在这些子级图形上或者可见图形上生效。通过列表
   图形对象右键菜单 Edit Link 设置的链接与使用 Edit Data 面板中编辑 link 属性具有等价效果。

   Draw.io 的标签提供了多语言支持功能，通过激活菜单中的语言功能：Setting -> Diagram Language，
   绘图时就会按指定的语言后缀呈现具有相应后缀的标签内容，图表标签默认显示的是 label 属性的内容，
   激活多图表语言功能后，就可以使用带有语言简称后缀的标签属性，比如 label_de 表示 German，label_es
   表示 Spanish，等等。Web 版本可以直接在地址栏中使用参数激活：&translate-diagram=1&diagram-language=XY。

   *  Translate diagrams in the draw.io editor https://www.drawio.com/blog/translate-diagrams


   Draw.io Draw.io 作为一个擅长图表绘制的工具，擅长流程形式的表达，目前还存在一些问题或不足：

   *  所有图形都是固定的或者是组合图形，可定制程度较弱，缺少用户绘图创作工具。甚至不允许用户修改
      图形的顶点数据，这是修改图形的基本能力，也是自由绘制矢量图形的基本要求。因此 Draw.io 目前
      只能算是纯粹的流程图绘制工具，并不算矢量绘图工具。Draw.io 还没有最大化挖掘出浏览器平台上
      基于 SVG 或者 XML 画布的最大绘画表现能力。或者也可以作为简笔画工具。

   *  只提供了一个铅笔（Freehand）工具给用户进行“自由”的使用线条作画，Web 平台还不支持压感设备，
      只能通过光标移动速度来模拟不同的压力。因此，Draw.io 可以用来画简笔画，但太不擅长一般意义上
      的数字绘画。自由线条虽然是由多个采样点组成，但是并没有向用户提供更多修改线条的功能。每条线都
      是模板图形（stencil），编码后保存到类似 `<mxCell style="shape=stencil(...);">` 的节点 。

      - `Draw freehand infographics in draw.io <https://www.drawio.com/blog/draw-infographics>`__
      - `Perfect freehand <https://www.npmjs.com/package/perfect-freehand>`__

   *  不支持图形的布尔运算，因此作图能力远远比不上 Inkscape，更不用说 AI/CD 等商业软件。虽然，
      可以借用联接线（connector）绘制任意的图形的轮廓，但作为图论中的 Edge 概念实现的联接顶点的
      线条，其目的并不是用于绘画图形使用的，也没有曲线闭合、填充色彩等功能，虽然可以使用 FreeHand 
      来模拟填充效果。

   作为一个备用方案，Draw.io 提供了一个基于 XML 数据实现的自定义图形绘制（Advanced -> Shape），
   尽管有点复杂、鸡肋，但是只要了解 XML 中可以使用的节点或者属性，就可以通过编写规则数据来实现绘图。
   这种方式只适用用创建图形库，不太适用经常变化的绘图：

   *  https://jgraph.github.io/mxgraph/docs/stencils.xsd
   *  https://www.drawio.com/doc/faq/shape-complex-create-edit

   从开发者的角度来看，可以通过创建插件来实现更灵活的图形绘制，或者结合 FreeHand 工具来创建图形。

   Draw.io 使用协议：Creative Commons Attribution 4.0 International license。
   CC BY 4.0 即署名 4.0 协议国际版，只要你遵守许可协议条款，许可人就无法收回你的这些权利。
   权利与义务各二条：

   *  共享 — 在任何媒介以任何形式复制、发行本作品 在任何用途下，甚至商业目的。
   *  演绎 — 修改、转换或以本作品为基础进行创作 在任何用途下，甚至商业目的。
   *  署名 — 您必须给出 适当的署名，提供指向本许可协议的链接，同时 标明是否（对原始作品）作了修改 。
      您可以用任何合理的方式来署名，但是不得以任何方式暗示许可人为您或您的使用背书。
   *  没有附加限制 — 您不得适用法律术语或者 技术措施 从而限制其他人做许可协议允许的事情。

   其它 CC 协议版权规定组合：
   ::

      CC BY：       署名标示（BY）
      CC BY-SA：    署名标示（BY）- 相同方式共享（SA）
      CC BY-NC：    署名标示（BY）- 非商业性使用（NC）
      CC BY-NC-SA： 署名标示（BY）- 非商业性使用（NC）- 相同方式共享（SA） 
      CC BY-ND：    署名标示（BY）- 禁止演绎（ND） 
      CC BY-NC-ND： 署名标示（BY）- 非商业性使用（NC）- 禁止演绎（ND）

   相似开源数字白板产品（whiteboard）：

   *  https://github.com/tldraw/tldraw
   *  https://github.com/excalidraw/excalidraw


Draw.io How to Embed HTML
=========================

   Draw.io 支持直接粘贴 HTML 页面的内容，但通常会包含大量无效的 style 样式。直接复制粘贴 Web
   页面的内容会形成大量样式数据，主要是冗余的默认 CSS 样式配置，其中又以 box-sizing 盒式样式为
   最常见。还有大量属性使用继承值、初始值（inherit，initial）的标签样式。并且 draw.io 编辑器
   并没提供很好方法处理这些额外的冗余数据，使用样式属性面板的 Text -> Formatted Text 功能只能
   将 HTML 过滤留下纯文本，要保留部分 HTML 标记只能手动调整 HTML 代码，并且需要理解 Drwa.io 
   如何处理 HTML 代码。

   HTML 代码内不支持内嵌 `<style>` 样式，只能使用 HTML 标签 style 属性内联的样式属性。
   Draw.io XML 文档数据在嵌入的 HTML 内容时，需要替换一些特殊符号（Special characters）：
   *  📒 `mxEditor <https://jgraph.github.io/mxgraph/docs/js-api/files/editor/mxEditor-js.html>`__

   .. code::

      &  =>  &amp;
      "  =>  &quot;
      ‘  =>  &apos;
      <  =>  &lt;
      >  =>  &gt; 

   除了以上符号，其它内容原样保存在 mxGraph Diagram 原始数据中。例如空格，HTML 中空格有两种
   基本形式，“ ” 和 “&nbsp”，前面这种空白符号原样保存，而后一种就会将 & 符号编码成 “&amp;”。
   例如以下 XML 文档默认页面中包含的一个 Text 文本块的两种存储形式：

   .. code:: cpp

      <mxGraphModel dx="1000" dy="811" grid="1" gridSize="10" guides="1" 
         tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" 
         pageWidth="827" pageHeight="1169" math="0" shadow="0">
      <root>
         <mxCell id="0" />
         <mxCell id="1" parent="0" />
         <mxCell id="dtT5CdGlbciNR5yMh8mE-1" value="The Dream of Red Mansions" 
            style="text;whiteSpace=wrap;html=1;" vertex="1" parent="1">
            <mxGeometry x="320" y="330" width="190" height="40" as="geometry" />
         </mxCell>
      </root>
      </mxGraphModel>


      <mxGraphModel dx="1000" dy="811" grid="1" gridSize="10" guides="1" 
         tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" 
         pageWidth="827" pageHeight="1169" math="1" shadow="0">
      <root>
         <mxCell id="0" />
         <mxCell id="1" parent="0" />
         <UserObject label="OpenGL Shading Language Third Edition" id="CwpEoAA9cVNClRNhcN29-5">
            <mxCell style="text;whiteSpace=wrap;" vertex="1" parent="1">
            <mxGeometry x="10" y="10" width="240" height="30" as="geometry" />
            </mxCell>
         </UserObject>
      </root>
      </mxGraphModel>

   注意，其中的 `<mxCell id="1" parent="0" />` 就是默认的背景图层（Background），添加其它
   其它图层也类似创建相应的 `<mxCell>` 标签，它是 mxGraph 框架中功能是最多的对象。图层中的其它
   图形也使用 `<mxCell>` 来保存对应的绘图数据。

   文本块可以直接通过粘贴文本生成。文本可以处理切换为嵌入的 HTML 代码，勾选 Formatted Text 样式
   属性或者直接修改图形样式（Ctrl+E）设置 html=1 相同功能。即使没有启用此功能，在导出 SVG 文档
   时，文本内容依然会当作 HTML 内容处理，只是纯文本而已。唯一不同的是：HTML 标签会编码后再存放
   到 `<mxCell>` 节点的 value 属性中（默认情况），或者 `<UserObject>` 对象的 label 属性。

   导出 SVG 格式时，可以选择保存原始 XML Diagram 数据，同时原始数据会转换为相应的 SVG 标签节点，
   例如以下 SVG 代码片段展示了 Draw.io 是如何利用 `<foreignObject>` 来显示文本：

   .. code:: cpp

      <g data-cell-id="dtT5CdGlbciNR5yMh8mE-1">
         <g>
            <rect x="0" y="0" width="190" height="40" fill="none" stroke="none" pointer-events="all" />
         </g>
         <g style="filter: drop-shadow(rgba(0, 0, 0, 0.25) 2px 3px 2px);">
         <g transform="translate(-0.5 -0.5)">
            <switch>
               <foreignObject pointer-events="none" width="100%" height="100%"
               requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
               style="overflow: visible; text-align: left;">
               <div xmlns="http://www.w3.org/1999/xhtml"
                  style="display: flex; align-items: unsafe flex-start; 
                     justify-content: unsafe flex-start; width: 188px; 
                     height: 1px; padding-top: 7px; margin-left: 2px;">
                  <div data-drawio-colors="color: rgb(0, 0, 0); "
                     style="box-sizing: border-box; font-size: 0px; text-align: left;">
                     <div style="display: inline-block; font-size: 12px; font-family: Helvetica; 
                           color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; 
                           white-space: normal; overflow-wrap: normal;">
                        The Dream of Red Mansions</div>
                  </div>
               </div>
               </foreignObject>
               <text x="2" y="19" fill="rgb(0, 0, 0)" font-family="&quot;Helvetica&quot;"
                  font-size="12px">The Dream of Red Mansions</text>
            </switch>
         </g>
         </g>
      </g>

   可以看到，导出的 SVG 标签结构中，有三层 `<div>` 作为文本内容的容器。整个文本显示流程涉及 
   `<switch>` 还有 `<text>` 节点。SVG 的文本节点 `<text>` 虽然可以显示文本，但是它属于 
   SVG 1.0 版本的节点，并没有文字的换行等排版功能，超出其范围的字会被裁剪掉，并且不支持 HTML
   文字样式。容器 `<div>` 有各自负责的功能：

   * 顶层 `<div>`：通过 `display: flex;` 布局控制文本的竖直对齐（Top、Middle、Bottom）；
   * 二层 `<div>`：背景色设置（Backgroun Color）、文本对齐（Text Align）；
   * 三层 `<div>`：在未激活 Formatted Text 选项的情形下设置字体样式；

   因为这些容器的存在，Draw.io 就有两套和文本排版相关的属性：点击文本块时的文本属性面板，和双击
   文本时显示的文本属性面板（此时在面板中单独显示 Text 面板）。

   两套文本样式是导致新手用户在文字排版上产生困惑的主要原因。本质上，它们都是通过 HTML 样式属性
   实现的文本排版。只不过，双击打开 HTML 文本属性面板时设置的样式是 `<foreignObject>` 节点
   内容物中的 HTML 标签的样式属性。此外包裹内容物的还有外层的 `<div>` 标签，这层标签是内容物
   的容器，它们就是 Draw.io 文本块的样式面板显示的属性。只有勾选 Formatted Text 选项之后，
   表示激活 HTML 代码嵌入（html=1;），此时双击文本块时，才能设置 HTML 内容物的样式属性。否则
   只能设置 `<div>` 容器的样式属性。

   注意，Draw.io 中文本位置（Position）设置会通过计算得到的坐标来导出 SVG 中嵌入的 HTML 标签。
   阴影设置：页面阴影设置在顶层分组 `<g filter="url(#dropShadow)">`，如果是各个图形的阴影，
   就会将阴影滤镜添加到二级父层分组，一级父层用于设置几何变换（transform）。
   
   通过切换开关 `<switch>` 可以在 SVG 渲染程序支持的情况下优先使用 `<foreignObject>` 扩展
   标签来显示文本，它通过引用 HTML 对象的文字排版功能，这可以解决 SVG 本身的文字排版缺陷。当给
   文本设置格式后，比如给“The Dream of Red Mansions”中的文本设置字体颜色，就会生成相应的 HTML
   标签，并且会通过  `<foreignObject>` 扩展标签来显示这些带有样式的文本。但是 SVG `<text>`
   标签只支持单行的纯文本，所以它不会包含样式属性，仅仅是作为一个后备选择使用。

   在导出的 SVG 文档中还可以看到，文本区对应有一个 `<rect>` 矩形，它仅仅是一个用于接收事件的底图。

   HTML 代码支持可以在样式面板中切换，双击 HTML 对象/文本，Text 面板显示将从 `mxGraph`
   对象的属性变更为 HTML 文本内容的属性，可以设置文本的字体、对齐、上标、下标，列表以及缩进。
   选择文本内容后，还可以点击 Clear Formatting 按钮清除 CSS 样式。还可以点击 `</>` 按钮
   切换显示 HTML 代码，以便编辑。清除格式并不会清除 LaTeX 等数学公式代码，它们不属于样式属性。
   文本块支持自动换行，通过拖动边框就可以实现文本块的宽度，但如果 HTML 内容包含不能换行的内容，
   比如 `<pre>` 或者超长的数学公式，则可能导致自动换行失效。

   被编辑的图表对象对应的是 `<mxCell>`，嵌入的 HTML 代码可能是保存在 value 或者 label 属性，
   但更常用的方法是将这类附加数据保存在 `<UserObject>` 节点对象中，这是 mxGraph 架构中专门
   设计用来保存用户数据的对象。

   `mxGraph` 图形对象可以在 Style 面板中设置一个属性 `html=1;` 以及启用 HTML 代码嵌入，
   如果设置样式属性为 html=0 表示禁用 HTML 代码渲染支持，直接作为文本显式。HTML 代码最终
   会作为 SVG 图像规范中的 `<foreignObject>` 节点内容物显示出来。

   Draw.io 文本排版依赖 HTML 样式布局，在对同一文本设置字体样式、背景色时，如果有不同的配置，
   则会为所有 HTML 标签添加 `<font>` 节点，这会大量增加额外的标签数据。尽量将统一的字体和背
   景色样式的文本放在同一个 `<font>` 节点内。或者将具有相同样式设置的内容放在同一节点下，这样
   可以避免产生大量重复 HTML 标签。在处理包含大量文本内容的图像时，混乱的样式设置是导致文档尺寸
   快速增长的主要因素。为了避免这种问题，只可以手动进入 HTML 代码编辑模式 (`</>`) 进行调整。
   设置了 HTML 文本颜色后，就会将颜色值写入 `style` 属性中，但是属性面板中没提供用于删除颜色
   设置的按钮，如果需要移除设置，只能手动编辑 HTML 代码来清除。

   在设置字体样式时，对选中多选内容或者单行内容设置时的行为还不一样，选中多行内容时设置字体样式
   会导致：其它内容也会添加 `<font` 标签。如果对 `<div>` 标签下的内容设置字体属性，还有可能
   使用 `<br>` `<span>` 等标签来设置字体样式。如果，内容物中包含有顶层 `<div>` 标签，并且
   字体属性已设置，那么修改字体样式属性就会基于现有的样式属性上修改。总之，嵌入的 HTML 标签层
   次结构差异，对样式属性的调整、相应标签的生成影响较大。如果希望手动处理更简洁的标签，可以在设
   置好特殊内容的字体后，再手动添加顶层 `<div>` 以设置其它通用的样式属性。

   因为设置斜体、粗体、下划线、穿透线会使用专用的 `<i>` `<b>` `<u>` `<strike>` 等等标签，
   所以不太会引起代码混乱。另外，列表也类似，有序列表或无序列表，对应 `<ol>` `<ul>` 标签。

   编辑 HTML 文本时，文本样式属性面板中还会提供补白、边距（Padding, Margin）属性设置，这两
   者可以为当前的文本块设置周边的留白空间，样式属性会通过 `<p>` 标签来设置，包括文本对齐属性
   以及行距（line-height）。但是段落缩进的处理特殊点，将 `<blockquote>` 标签作为缩进用途。

   Draw.io 中输入文本时会创建一个 `<p>` 标签对应一个文本块（段落），通过回车键、手动 HTML
   代码编辑，或者粘贴来自 Web 页面的内容都可以创建新的段落。如果不希望出现新段落，可以使用 
   Shift+Enter 强制换行，即对应一个 `<br>` 换行标签。如果当前位置不属于 `<p>` 段落文本，
   则样式面板中也不会出现补白、边距的属性设置。这种情况下按回车会创建类似 `<div><font/></div>`
   这样的标签结构。这是因为新增的 HTML 标签会继承上一个标签的基本属性，包含标签类型和默认样式。
   HTML 代码中的连续的空格（空白字符）会默认被处理成一个空格，要保持多个连续空格，就需要将空格
   转换为 &nbsp; 实体，这部分工作会在编辑器中自动处理。换行符会被转换成 `<br>` 标签。另外，
   像 `<p>` `<div>` 这些 block 类型的标签，其内部至少占据一行，即使没有字符。在手动编辑
   HTML 代码时，如果是在 VS Code 编辑器中处理，最好使用两个换行替换空白行，因为它包含的格式
   符号会影响 Draw.io 的处理。而使用 Sublime Text 或者 Notepad 等工具则是纯本文，不需要
   这样的处理。


Graph from Import Data
======================

   除了基本模板创建图表，draw.io 还通过菜单 Arrange -> Insert -> Advanced 提供了多种脚本
   创建图表的方式，包括：

   *  `来自文本的数据 <https://www.drawio.com/blog/insert-from-text.html>`__
   *  `CSV 逗号分隔符定义的数据表 <https://www.drawio.com/blog/insert-from-csv.html>`__
   *  `SQL 数据查询脚本定义的数据表 <https://www.drawio.com/blog/insert-sql.html>`__
   *  `PlantUML 图表脚本 <https://www.drawio.com/blog/plantuml.html>`__
   *  `Mermaid 流程图脚本 <https://www.drawio.com/blog/mermaid-elk-layout>`__

   CSV (omma separated value) 就是使用逗号作为分隔符号的数据表，每一个代表一个完整的数据记录，
   数据有多少字段就使用多少逗号将它们分隔开。Draw.io 使用的 CSV 数据格式还有特别的格式要求。例如，
   不能使用 id、tooltip、placeholder(s)、link、label 这些保留的属性名。简要的使用说明如下：

   *  行首使用 ## 开头表示这是一行注解内容，内容本身可以留空。
   *  使用 # 符号开头表示这是一行配置内容，可以配置图表样式、图表的连接关系，以及如何绘制图表。
   *  每行数据代表对应绘制一个图表（mxCell），因为数据格式统一，所以绘制的图表基本是统一的。
   *  可以使用占位符功能，使用 % 符号包括表头字段名来引用字段数据。
   *  数据字段中可以使用 labe text, metadata 以及样式属性。
   *  为了提高数据可读性，可以在行尾使用 `\\` 转义符号，然后将超长的内容拆分为多行。

   基本配置简要说明：

   =================================== ============================================
   ## Comments                         - Lines that start with two hash characters are ignored.

   # label: %column1% - %column2%      - Use data from one or more columns as labels. 

   # label: <b>%column1%</b>              - Format label with HTML

   # connect: {"from": "column3",  \\  - Define which columns contain the target and source data 
   #             "to": "column1",  \\    for connectors and their style.
   #              "invert": true,  \\    Multiple connector styles need multiple connect statements.
   # "style": "curved=1; endFill=1;"}   

   # ignore: column1,column2           - Any columns that you don’t ignore here, are added to the shape as metadata.

   # layout: auto                      - Select one of the options available via Arrange > Layout.

   # style: whiteSpace=wrap;html=1;\\  - Define the shape style. Use a fixed hex colour code, 
   #             fillColor=#aa8899;\\    or a hex value from in a column in the CSV data.
   #          strokeColor=%stroke%;     

   # style: label;image=%imageurl%;    - 
   =================================== ============================================

   导入数据中的 `style` 是一个非常重要的属性，它可以设置所有可以通过 Draw.io 编辑器设置的图表
   样式，包含使用什么图形，以及设置是否支持 HTML 代码。具体设置通过 `mxCell` 样式属性设置。
   另外，layout 用于设置图表的布局，可选项为： auto, none, verticaltree, horizontaltree,
   verticalflow, horizontalflow, organic, circle, orgchart，或者是 JSON 配置数据，
   这些配置数据等同于 Drawio -> Insert -> Layout -> Custom 面板中可导入的布局配置。

   导入数据中可以通过 connect 配置来创建图表的联接，基本设置是从 "from"（source colum）指定的字段
   联接到 "to"（target column）指定的字段。即当前数据中 "from" 对应的字段与其它数据的 "to" 对应的
   字段具有相同值时，就创建联接。target column 可以是逗号分隔的多个字段名称，这样可以增加联接条件。

      connect: {"from": "source colum", "to": "target column"}

   布局一般需要配合图表的层级使用，层级配置需要通过 parent 和 identity 两个属性指定，前者指定
   用于识别父组的字段，后者指定标识字段，标识字段用于确认父级。需要注意的是，一些布局，比如环形布局
   circle 就无法应用于建立层级关系的图表。类似地，还有 verticaltree 或者 horizontaltree。
   如果建立了层级关系，也就是说设置好的 identity 标志，那么重复导入相同数据时，会自动按标识替换
   旧图表，而不是创建新的图表。

   从当前数据对应的图表联接到其它数据对应的图表上。可以配置多条联接规则。除了可以设置 invert 反转箭头，
   还可以设置 style 样式属性,以及 label 标签内容。可以额外设置 `fromlabel` 和 `tolabel` 属性
   指定数据的字段，将数据对应的字段内容插入生成的 label。

   另外还可以设置 `sourcelabel` 和 `targetlabel` 属性，对应源数据（联接起点对应的数据）与目标
   数据中的字段。最终标签内容按以下格式生成（不含 + 号和）：

      fromlabel+sourcelabel+label+tolabel+targetlabel

   还可以在联接线上分布多个标签（additional label），只需要按以下格式设置 labels 数组。标签的
   x 坐标使用相对于联接线偏移百分比，-1 表示起始位置，1 表示联接线的结束位置，y 坐标（正交）和偏移
   量 dx 或 dy 则使用像素值。此数组中的标签内容只能使用字符串，除非设置 placeholders 属性：

      "labels": [{"label": string, "x": number, "y": number, "dx": number, "dy": number},...]

      "labels": [{"label": "%name%", "placeholders": "target", "x": 0.5, "y": 0, "dx": 0, "dy": 0}]

   如果需要在联接线上携带 metadata 数据，则可以使用 data 属性指定数据对象，比如：

      "data": {"key": "stub", "value":"girth"}

   样式中可以启用 placeholders 功能，那么占位符就会替换。其它和占位符号处理相关的功能说明如下：

   *  If placeholders are used in the style, they are replaced with data from the source.
   *  An optional placeholders can be set to "target" to use data from the target instead.
   *  An optional placeholders with the string value "source" or "target" can be specified
      to replace placeholders in the additional label with data from the source or target.
 
   导入功能的缺点是不能全面支持各种功能，比如，链接打开方式需要通过 linkTarget 属性来定义，CSV
   导入插件就没有提供相应的支持，如果需要设置链接在新页面打开，就需要手动设置链接，或者手动添加图表
   属性 "linkTarget: _blank"。也不能构造出组合图形，比如数据中有两个链接地址，但是导入时不能构造
   两个出两个标签，并给它们各自分配一个链接地址。如果需要批量修改，则可以将文档保存为 XML 源文件，
   再使用 VS Code 这类文本编辑器进行处理。VS Code 中的插件版本 Draw.io 属于旧版，默认提供了
   Extras > Edit Diagram 菜单直接查看代码的功能。新版本的 Draw.io 已经默认的 UI 布局移除了
   此功能，可以通过主题布局设置找回此功能。Settings -> Theme -> Sketch 和 Minimal 两种布局
   是精简设计，不能使用 Edit Diagram 功能。另外，Classic 和 Simple 两种方式可以通过右上角
   的太阳图标进行切换，而不用重新启动 Draw.io，如果需要经常修改 XML 内容，可以考虑使用这两种模式。
   Simple 模式下，通过 Insert -> Advanced -> Edit Diagram 访问 XML 代码。

   注意：Draw.io 在导出 SVG 界面中提供了链接功能设置，只设置设置 Links: Open in New Window
   就可以将链接的默认动作设置为新窗口打开。

   虽然，导入数据不能为同一行数据构建多个图形对象，但是可以对于有层级关系的数据表，可以采用样式表
   影射的手段来创建不同的图形类型及外观。只需要在 `styles` 属性中按 JSON 数据格式定义多个命名
   样式，然后在 `stylename` 属性中指定数据表中用于引用命名样式的字段：

   ::

      # styles: {"group": "label;html=1;align=right;fontColor=#F7F7F7;fontSize=8;strokeColor=#2D7600;fillColor=#994C00;spacing=4;", \
      #           "item": "label;html=1;image=%image%;fontSize=8;strokeColor=#d6b656;fillColor=#fff2cc;"}
      # stylename: css
      # label: %labelText%
      # height: 48
      # width: 720
      css,labelText
      group,Some Text Groups
      item,Some Text Items

   *  `Manually edit the XML source of your draw.io diagram <https://www.drawio.com/doc/faq/diagram-source-edit>`__
   *  `Thanks for supporting draw.io in 2022 <https://www.drawio.com/blog/end-of-year-2022>`__
   *  `Change the diagram editor theme <https://www.drawio.com/doc/faq/editor-theme-change>`__

   CSV 数据导入示范：后面有一组缺氧（Oxygen Not Included）游戏中的建筑分类，数据只用分类名称、
   链接地址、和缩略图片地址。现在只将这些数据导入并且生成相应的图表，每个建筑分类对应一个图表，并且
   给图表设置了超链接属性（link）为 CSV 中的 url 段，通过图表样式属性（style）设置了一个标签，
   标签本身包含一张缩略图。标签（label）文字默认值使用 CSV 数据的首个字段的内容。为了使标签中的
   文字支持 HTML 标签，需要在样式属性（style）中设置 html=1 表示启用 HTML 标签。注意，导入数据
   的图像路径只能使用 URL 地址，或者是 Base64 编码的图像，不能直接使用 file:// 协议导入本地图像。

   如果服务器禁止图像供外部引用，这就会导致 Draw.io 读取不到图像数据：

      Failed to load resource: net::ERR_BLOCKED_BY_RESPONSE.NotSameOrigin

   一个解决方法是使用菜单逐个导入本地图像 Insert -> Image，拖动本地图像文件到对话框即会将
   读取到的图像数据进行 Base64 编码。如果导入的是 URL 地址，那么就可以选择进行编码（Embed）
   或者 Apply 直接使用 URL 地址。导入的图像样式属性中包含 base64 编码数据，参考如下：

      shape=image;verticalLabelPosition=bottom;labelBackgroundColor=default;
      verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/webp,...;

      shape=image;imageAspect=0;aspect=fixed;verticalLabelPosition=bottom;
      verticalAlign=top;image=data:image/svg+xml,...;

   批量导入本地图像，可以直接将图像拖入 Draw.io 画板中，这种方式会自动进行 Base64 编码处理。
   然后可以配合 Arrange 面板对图像进行对齐。另外，可以借助一些现成的 Web 服务将本地文件做成
   Web 图像服务，这样就可以使用在 CSV 数据表中以 URL 方式来导入图像。这种方式的缺点是要用户
   有一点 Web 技术基础。如果已经通过 Export 功能将图像嵌入了 SVG 文档，则可以继续使用嵌入
   的图像数据，直到下次非 Embeded 方式的导出时清除掉 Base64 编码的数据，或者 Draw.io 缓存
   的图像数据失效。测试中发现在标签（label）中使用的 SVG 图像，会因为 Embeded 方式导出失去
   源图像尺寸信息而产生外观变化。

   现成的 Web 服务器可以使用 Nginx 等专用服务器程序，也可以使用 Node、Deno、Python 或者
   PHP 等脚本编程工具提供的开发者 Web 服务器。比如，Python HTTP 模块提供的 Web 服务器：

   .. code:: bash

      $ python -m http.server --help
      usage: server.py [-h] [--cgi] [--bind ADDRESS] [--directory DIRECTORY] [port]

      positional arguments:
      port                    Specify alternate port [default: 8000]

      options:
      -h, --help              show this help message and exit
      --cgi                   Run as CGI Server
      --bind ADDRESS, 
      -b ADDRESS
                              Specify alternate bind address [default: all interfaces]
      --directory DIRECTORY,
      -d DIRECTORY
                              Specify alternative directory [default:current directory]

   以下是伊索寓言收录的 Wolfs Comming 故事连环画的图像导入 CSV 数据表参考，由于图画之间没有层级关系，
   所以结构相对简单，只需要根据数据来设置 mxGraph 图形对象的样式发展。这是使用 image 图表来展示图像，
   此外设置了图像的宽高和 orgchart（organizational chart）布局，这是一种组织架构图布局，默认可以
   将图像显示为 4 列。利用 Draw.io 这种批量图像导入功能以及图像导出还可以拼接散列图像。为了给图像添加
   简短的中英文对照内容，设置了较大的 nodespacing 间距。另外，因为英文内存包含了逗号，为了避免与 CSV
   文件本身使用的逗号分隔符冲突，就需要使用双引号将内容包括。如果这些内容本身又包含双引号，那么就需要使用
   两个双引号来转义表示。并且，逗号分隔符两侧的不能有空格。

   注：orgchart 布局处理同级节点时，其排序可能会按 label 内容的字典序处理，比如 1-10-2-20 这样。
   另外，图像资源的加载也会影响节点排序，因为 Web 是单线程异步 I/O 处理机制，后完成加载的图像会排序
   在后面，因此可以待资源完成。使用 Layout -> Org Chart 布局时选择 Org Chart Type -> Smart
   方式会按竖直方向排版。

   .. code::

      # label: Page %no%/34<br>%en%<br>%cn%
      # style: image;image=%image%;html=1;fontSize=10;fillColor=#FFCE9F;strokeColor=gray;whiteSpace=wrap;
      # width: 365
      # height: 449
      # nodespacing: 64
      # layout: orgchart
      ## http://data2.xmst.org:8081/pc/booksinglereader/772?#book7/page1
      ## https://www.joekulka.com/pages/Joe_who.html
      no,image,en,cn
      1,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0001,Wolf's Comming! - Joe Kulka,狼来了 - 乔伊·库卡（插画）
      2,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0002,inside front cover (blank page),封二（无内容）
      3,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0003,Wolf's Comming!,狼来了！
      4,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0004,For Michael and James,献给迈克尔和詹姆斯
      5,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0005,Wolf's Comming! - Joe Kulka,狼来了 - 乔伊·库卡（插画）
      6,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0006,,
      7,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0007,"A distant howl rides breeze, echoing through all the trees.",远处的狼吼回荡在丛林之间。
      8,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0008,,
      9,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0009,"Hurry, Hurry! Don't be slow! C'mon, let's go!",快点！快点！太慢了！快跟上我。来吧，我们快走。
      10,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0010,,
      11,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0011,"A shoadow figure climbs the the hill, getting close and closer still.",一个黑影爬上了山坡，慢慢跟了上来。
      12,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0012,,
      13,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0013,"Faster, Faster! Take my hand! Run back home like we planned.",再快点，再快点！抓紧我的手！往家的方向跑，就像刚才想的那样。
      14,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0014,,
      15,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0015,Wolf's Comming!,狼来了！
      16,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0016,,
      17,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0017,"Shadow lengthen. It's getting late. The wolf is now outsidee the gate.",夕阳下的影子变长了。现在太迟了。狼已经守在大门外。
      18,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0018,,
      19,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0019,"Quickly! Quickly! Get inside! Shut the door, better hide.",点！快！快进屋里来！关上门，最好躲起来。
      20,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0020,,
      21,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0021,"The moonlight shines on his fangs. His belly growls with hunger pangs.",月光照耀着它的獠牙。那头饿狼咕咕叫的肚子。
      22,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0022,,
      23,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0023,"Closer, closer. Next to me. Pull the shade so he can't see.",它越来越近，就在我身边。拉上了窗帘，免得被看见。
      24,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0024,,
      25,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0025,"Glowing ember eyes appear. Pointed ears strain to hear.",眼睛闪耀着余烬的光。探出耳朵细细听着。
      26,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0026,,
      27,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0027,"Hush now, hush now. Not a peep. You must be still, like you're asleep.",捂住嘴吧，捂住嘴吧。不要偷看。保持安静，就像睡着一样不要喘气。
      28,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0028,,
      29,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0029,"The front door opens with a creak. The big wolf leans in for a peek. Tightly, tightly, shut your eyes. With all your might yell...",前门吱吱地开了。大狼探着身子偷瞄。紧紧地，紧紧地，闭上眼睛。你用尽全力大喊……
      30,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0030,Sur...,惊……
      31,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0031,prise!!!,喜！！！
      32,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0032,,
      33,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0033,"Laughing, laughing! So much fun! Cake and pizza for everyone!",开心，真开心！真有趣！人人都有蛋糕披萨吃！
      34,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0034,back cover,封底
      35,https://www.gutenberg.org/cache/epub/11339/pg11339.cover.medium.jpg,Aesop's Fables,伊索寓言
      36,https://i.ebayimg.com/images/g/MmgAAOSwFWxnCa2U/s-l400.jpg,Grimm's Fairy Tales,格林童话
      37,,Book review,读后感

   其它连环画的目录可以查询此文档： `聊斋志异 <novels/LiaoZhaiZhiYi.md>`__。

      此绘本是经 Joe Kulka 改编的《狼来了》，本着送给他两个儿子的考虑，故事中
      制造了一个紧张的悬念， 直到 27 页反转，出现一个大欢喜的场面。但是真实的
      世界上， 狼来了只有两个结果，要不是狼要命， 就是要狼命。除非人类与自然
      和谐共存，避免让狼来了的故事发生。

   中西方都出现过通过收集民间故事汇编而成的著作，中国有《聊斋志异》，古希腊有《伊索寓言》Aesop's Fables。
   德国有《格林童话》，它由语言学家雅各布·格林和威廉·格林兄弟收集、整理、加工完成的德国民间文学，
   约有 200 多个故事，大部分源自民间的口头传说，其中的《灰姑娘》《白雪公主》《小红帽》等童话故事
   较为闻名。当中的一些经典故事经过迪士尼公司的同人二创，用于转变是一门生意。

   .. Note::

      *  `Grimms' Fairy Tales <https://www.gutenberg.org/ebooks/2591>`__
      *  `Aesop's Fables: a new translation <https://www.gutenberg.org/ebooks/11339>`__
      *  `The Aesop for Children <https://www.gutenberg.org/ebooks/19994>`__
      *  https://www.britannica.com/biography/Aesop
      *  https://www.britannica.com/topic/Grimms-Fairy-Tales

      Grimm’s Fairy Tales, classic and influential collection of folklore 
      by Jacob and Wilhelm Grimm, first published in two volumes as 
      Kinderund Hausmärchen (1812–15; “Children’s and Household Tales”) 
      and later revised and enlarged seven times between 1819 and 1857. 
      The work was first translated into English as German Popular Tales, 
      2 vol. (1823–26), and has since been translated under numerous titles.

      Grimm’s Fairy Tales comprises some 200 stories, most of which were 
      adopted from oral sources. The best-known tales include “Hansel and 
      Gretel,” “Snow White,” “Little Red Riding Hood,” “Sleeping Beauty,” 
      “Tom Thumb,” “Rapunzel,” “The Golden Goose,” and “Rumpelstiltskin.” 
      The universal appeal of these stories—whether they are considered as 
      psychological archetypes or as fantasy narratives—inspired a myriad 
      of print, theatrical, operatic, balletic, and cinematic adaptations.

   生成的 mxGraph XML 文档节点类似以下结构，生成关系更复杂的图表，就需要配置更多节点各属性：

   .. code::

        <UserObject label="%name%" name="基地" placeholders="1" id="DppR7ymJaIfxvRbqNmvn-56"
         image="https://static.wikia.nocookie.net/oxygennotincluded/images/..." 
         link="https://oxygennotincluded.fandom.com/zh/wiki/建筑#基地">
          <mxCell style="label;image=https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/6c/Base_Menu.png;" vertex="1" parent="1">
            <mxGeometry x="-147" y="386" width="134" height="68" as="geometry" />
          </mxCell>
        </UserObject>

   另外，注意 Draw.io 中内嵌 base64 编码的图像数据中省略了分号和 base64 标记，因为分号会被用作
   属性分隔符号，只有在导出的 SVG 节点内的图像上才使用：

   .. code:: javascript

      // HTML/SVG base 64 encoded image
      data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAgCAYAAA...

      // Draw.io base 64 encoded image
      data:image/webp,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAgCAYAAA...

   导入数据中可以直接使用图像文件的 URL 地址，这样源文件更小，并且还可以导出 SVG 时选择嵌入图像
   Embeded，这样就将图像数据编码为 Base64 字符串保存到导出的 SVG 图像文件中，使用浏览器查看时
   就可以直接加载图像数据，避免重新花时间下载图像。另外，导出 SVG 图像文件时可以选择保留原始的
   mxGraph 节点数据，只需要勾选 Include a copy of my diagram，并选择要保存的页面。这样就会
   在 SVG 文档中保存两份数据，一份是 mxGraph 节点文档，另一份是 SVG 节点文档。注意，选择嵌入
   图像的导出时，内嵌的 mxGraph 节点中的图像数据不会使用 Base64 编码。但是，使用 UserObject
   内嵌的 HTML 代码中的图像会使用 Base64 编码，这些内容会在 SVG 节点中使用 `foreignObject`
   展示出来。

   如果数据文件导入生成图表的方式都不能满足需求，那么可以使用外部编辑器修改代码。为了批量地修改
   Draw.io 格式的 SVG 文件，可以使用 Sublime Text 或者 VS Code 这样的支持多点编辑的工具。
   比如，批量修改 SVG 中内嵌的图像，特别是使用 base64 编码内嵌的大量图标图像，就可以使用多点
   编辑来实现批量修改。通过菜单获取元数据，编辑好再更新图形：

   *  Draw.io Integration 插件版： Extras -> Edit Diagram... 
   *  参考 https://www.drawio.com/doc/faq/diagram-source-edit

   最新的桌面版 Draw.io v24.7.5 默认的精简布局不提供 Edit Diagram 菜单，可以设置主题布局：
   Settings -> Theme -> Sketch 或者 Minimal 两种布局是精简设计，其它布局都有 Edit Diagram。

   Sublime Text 有一个非常实用的命令，Split selection into lines 可以将选区拆分成行选区。
   VS Code 也有类似功能，命令名称叫 Add Cursors to Line Ends。这两个支持多选区的工具都有
   正则选区功能（``Alt+Enter``），使用正则表达式就可以选中匹配的目标字符串，然后进行批量处理。

   导入工具不支持多 Page 导入，因此修改 XML 是一个可行方法。以下是一个包含两个 Page 的文档，
   每个 Page 对应一个 `<diagram>` 节点，每个 Page 内部用一套独立 ID。并且只包含一个矩形，
   通过 `<mxCell>` 节点的 style 样式属性定义，这里省略了 `type=retangle;` 表示一个默认
   的矩形，其中 `rounded=0;` 表示圆角半径为 0 也就是直角矩形。矩形几何尺寸在 `<mxGeometry>`
   专用节点中定义，包含矩形的坐标。坐标系统以左上角为原点，向右下角方向为正。Draw.io 提供的页面
   视图（Page View）会自动将画布按用户设定的纸张类型（Paper Size）划分和纸张相同大小的区域。
   图形出现在哪些区域，如果激活了 Page View 选项，就会显示相应页面区域的背景色。多页文档通常会
   将图形显示在页面的固定位置，因此可以在导入数据表中包含坐标数据列，使用 left 和 top 属性引用。
   如果设置为固定值，那么这个两个值就是单次导入数据所对应的所有图形作为一个整体的坐标。从多页处理
   这点来看，draw.io 还有机会成为书籍装帧设计软件。

   并且，layout 属性只能设置为 none 或者 auto，其它布局则会对生成图形进行移位操作。配置参考如下：

   ::

      # label: Page %no%/34<br>%en%<br>%cn%
      # style: image;image=%image%;html=1;fontSize=10;fillColor=#FFCE9F;strokeColor=gray;whiteSpace=wrap;
      # width: 365
      # height: 449
      # left: x
      # top: y
      # nodespacing: 64
      # layout: none
      ## http://data2.xmst.org:8081/pc/booksinglereader/772?#book7/page1
      ## https://www.joekulka.com/pages/Joe_who.html
      no,x,y,image,en,cn
      01,0,0,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0001,Wolf's Comming! - Joe Kulka,狼来了 - 乔伊·库卡（插画）
      02,0,0,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0002,inside front cover (blank page),封二（无内容）
      03,0,0,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0003,Wolf's Comming!,狼来了！
      04,0,0,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0004,For Michael and James,献给迈克尔和詹姆斯
      05,0,0,http://data2.xmst.org:8081/UploadImg/bookpage/big/772/0005,Wolf's Comming! - Joe Kulka,狼来了 - 乔伊·库卡（插画）

   .. code:: xml

      <mxfile host="Electron" agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) draw.io/24.7.8 Chrome/128.0.6613.36 Electron/32.0.1 Safari/537.36" version="24.7.8" pages="2">
      <diagram name="Page-2" id="cQF9lp4uPD5DWoyr3YiA">
         <mxGraphModel dx="2500" dy="3772" grid="0" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1169" pageHeight="1654" math="0" shadow="0">
            <root>
            <mxCell id="0" />
            <mxCell id="1" parent="0" />
            <mxCell id="gcFuT-LJlo4OED6B5wg_-1" value="Page 2 Content" style="rounded=0;whiteSpace=wrap;html=1;sketch=1;hachureGap=4;jiggle=2;curveFitting=1;" vertex="1" parent="1">
               <mxGeometry x="120" y="-451" width="160" height="80" as="geometry" />
            </mxCell>
            </root>
         </mxGraphModel>
      </diagram>
      <diagram name="Page-1" id="89QSEErdvgz_bgpws3xE">
         <mxGraphModel dx="2000" dy="3348" grid="0" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1169" pageHeight="1654" math="0" shadow="0">
            <root>
            <mxCell id="0" />
            <mxCell id="1" parent="0" />
            <mxCell id="lKyCVZDjJEY-Ron3WWIU-1" value="Page 1 Content" style="rounded=0;whiteSpace=wrap;html=1;sketch=1;hachureGap=4;jiggle=2;curveFitting=1;" vertex="1" parent="1">
               <mxGeometry x="120" y="-451" width="160" height="80" as="geometry" />
            </mxCell>
            </root>
         </mxGraphModel>
      </diagram>
      </mxfile>


Draw.io CSV Template
====================

   CSV 数据表属性配置说明，内容整理自 draw.io 编辑器自带的 CSV 导入功能中的模板数据：

   ============== ===================================================================
                  | ##
                  | ## Example CSV import. Use ## for comments and # for configuration. Paste CSV below.
                  | ## The following names are reserved and should not be used (or ignored):
                  | ## id, tooltip, placeholder(s), link and label (see below)
                  | ##

   label          | ## Node label with placeholders and HTML.
                  | ## Default is '%name_of_first_column%'.
                  | #
                  | # label: %name%<br><i style="color:gray;">%position%</i><br>\
                  | # <a href="mailto:%email%">Email</a>
                  | #

   style          | ## Node style (placeholders are replaced once).
                  | ## Default is the current style for nodes.
                  | #
                  | # style: label;image=%image%;whiteSpace=wrap;html=1;rounded=1;\
                  | # fillColor=%fill%;strokeColor=%stroke%;
                  | #

   parentstyle    | ## Parent style for nodes with child nodes (placeholders are replaced once).
                  | #
                  | # parentstyle: swimlane;whiteSpace=wrap;html=1;childLayout=stackLayout;\
                  | # horizontal=1;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;
                  | #

   unknownStyle   | ## Style to be used for objects not in the CSV. If this is - then such objects are ignored,
                  | ## else they are created using this as their style, eg. whiteSpace=wrap;html=1;
                  | #
                  | # unknownStyle: -
                  | #

   stylename      | ## Optional column name that contains a reference to a named style in styles.
                  | ## Default is the current style for nodes.
                  | #
                  | # stylename: -
                  | #

   styles         | ## JSON for named styles of the form {"name": "style", "name": "style"}\
                  | ## where style is a cell style with placeholders that are replaced once.
                  | #
                  | # styles: -
                  | #

   vars           | ## JSON for variables in styles of the form {"name": "value", "name": "value"}
                  | ## where name is a string that will replace a placeholder in a style.
                  | #
                  | # vars: -
                  | #

   labelname      | ## Optional column name that contains a reference to a named label in labels.
                  | ## Default is the current label.
                  | #
                  | # labelname: -
                  | #

   labels         | ## JSON for named labels of the form {"name": "label", "name": "label"} where
                  | ## label is a cell label with placeholders.
                  | #
                  | # labels: -
                  | #

   identity       | ## Uses the given column name as the identity for cells (updates existing cells).
                  | ## Default is no identity (empty value or -).
                  | #
                  | # identity: -
                  | #

   parent         | ## Uses the given column name as the parent reference for cells. 
                  | ## Default is no parent (empty or -).
                  | ## The `identity` above is used for resolving the reference so it must be specified.
                  | #
                  | # parent: -
                  | #

   namespace      | ## Adds a prefix to the `identity` of cells to make sure they do not collide 
                  | ## with existing cells (whose IDs are numbers from 0..n, sometimes with a GUID 
                  | ## prefix in the context of realtime collaboration). Default is csvimport-.
                  | #
                  | # namespace: csvimport-
                  | #

   connect        | ## Connections between rows ("from": source colum, "to": target column).
                  | ## Label, style and invert are optional. Defaults are '', current style and false.
                  | ##
                  | ## If placeholders are used in the style, they are replaced with data from the source.
                  | ## An optional placeholders can be set to target to use data from the target instead.
                  | ## In addition to label, an optional fromlabel and tolabel can be used to name the column
                  | ## that contains the text for the label in the edges source or target (invert ignored).
                  | ##
                  | ## In addition to those, an optional source and targetlabel can be used to specify a label
                  | ## that contains placeholders referencing the respective columns in the source or target row.
                  | ## The label is created in the form fromlabel + sourcelabel + label + tolabel + targetlabel.
                  | ## Additional labels can be added by using an optional labels array with entries of the
                  | ## form {"label": string, "x": number, "y": number, "dx": number, "dy": number} where
                  | ## x is from -1 to 1 along the edge, y is orthogonal, and dx/dy are offsets in pixels.
                  | ## An optional placeholders with the string value "source" or "target" can be specified
                  | ## to replace placeholders in the additional label with data from the source or target.
                  | ## An optional data object can be specified to define the metadata for the connector.
                  | ## The target column may contain a comma-separated list of values.
                  | ## Multiple connect entries are allowed.
                  | #
                  | # connect: {"from": "manager", "to": "name", "invert": true, "label": "manages", \
                  | #          "style": "curved=1;endArrow=blockThin;endFill=1;fontSize=11;"}
                  | # connect: {"from": "refs", "to": "id", "style": "curved=1;fontSize=11;"}
                  | #

   left           | ## Node x-coordinate. Possible value is a column name. Default is empty. Layouts will
                  | ## override this value.
                  | #
                  | # left: 
                  | #

   top            | ## Node y-coordinate. Possible value is a column name. Default is empty. Layouts will
                  | ## override this value.
                  | #
                  | # top: 
                  | #

   width          | ## Node width. Possible value is a number (in px), auto or an @ sign followed by a column
                  | ## name that contains the value for the width. Default is auto.
                  | #
                  | # width: auto
                  | #

   height         | ## Node height. Possible value is a number (in px), auto, width or an @ sign followed by a column
                  | ## name that contains the value for the height. Default is auto.
                  | #
                  | # height: auto
                  | #

   collapsed      | ## Collapsed state for vertices. Possible values are true or false. Default is false.
                  | #
                  | # collapsed: false
                  | #

   padding        | ## Padding for autosize. Default is 0.
                  | #
                  | # padding: -12
                  | #

   ignore         | ## Comma-separated list of ignored columns for metadata. (These can be
                  | ## used for connections and styles but will not be added as metadata.)
                  | #
                  | # ignore: id,image,fill,stroke,refs,manager
                  | #

   link           | ## Column to be renamed to link attribute (used as link).
                  | #
                  | # link: url
                  | #

   nodespacing    | ## Spacing between nodes. Default is 40.
                  | #
                  | # nodespacing: 40
                  | #

   levelspacing   | ## Spacing between levels of hierarchical layouts. Default is 100.
                  | #
                  | # levelspacing: 100
                  | #

   edgespacing    | ## Spacing between parallel edges. Default is 40. Use 0 to disable.
                  | #
                  | # edgespacing: 40
                  | #

   layout         | ## Name or JSON of layout. Possible values are auto, none, verticaltree, horizontaltree,
                  | ## verticalflow, horizontalflow, organic, circle, orgchart or a JSON string as used in
                  | ## Layout, Apply. Default is auto.
                  | #
                  | # layout: auto
                  | #

                  | ## ---- CSV below this line. First line are column names. ----
                  | name,position,id,location,manager,email,fill,stroke,refs,url,image
                  | Tessa Miller,CFO,emi,Office 1,,me@example.com,default,#6c8ebf,,https://www.draw.io,https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-3-128.png
                  | Edward Morrison,Brand Manager,emo,Office 2,Tessa Miller,me@example.com,default,#82b366,,https://www.draw.io,https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-10-3-128.png
                  | Alison Donovan,System Admin,rdo,Office 3,Tessa Miller,me@example.com,default,#82b366,"emo,tva",https://www.draw.io,https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-2-128.png
                  | Evan Valet,HR Director,tva,Office 4,Tessa Miller,me@example.com,default,#82b366,,https://www.draw.io,https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-9-2-128.png
   ============== ===================================================================


Factoscope Series Picture Books
===============================

   *  https://epdf.tips/plants-factoscope.html
   *  https://epdf.tips/earth-factoscope.html
   *  https://epdf.tips/animal-world-factoscope.html

   厦门市少年儿童图书馆资源——Factoscope 系列科普图书。
   
   ::

      size: 1235 × 1740 { id: 481, page: 66, title: "Animal+Facto" },         
      size: 1228 × 1733 { id: 483, page: 66, title: "Human_Body_(facto)" },   
      size: 1231 × 1740 { id: 484, page: 66, title: "EarthFacto" },
      size: 1228 × 1733 { id: 485, page: 66, title: "Machines+and+Inventions+-+Factoscope" }, 
      size: 1229 × 1740 { id: 486, page: 66, title: "Plants,+Factoscope" },
      { id: 27847, page: 66, title: "Plants,+Factoscope" },
      { id: 27851, page: 66, title: "Animal+Facto" },
      { id: 27848, page: 66, title: "Machines+and+Inventions+-+Factoscope" },
      { id: 27849, page: 66, title: "EarthFacto" },

::

   # label: Page %no%/66<br>%en%<br>%cn%
   # style: image;image=%image%;html=1;fontSize=18;fillColor=#FFCE9F;strokeColor=gray;whiteSpace=wrap;
   # width: 1235
   # height: 1740
   # nodespacing: 64
   # layout: orgchart
   ## http://data2.xmst.org:8081/pc/booksinglereader/481
   no,image,en,cn
   01,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0001,,
   02,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0002,,
   03,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0003,,
   04,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0004,,
   05,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0005,,
   06,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0006,,
   07,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0007,,
   08,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0008,,
   09,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0009,,
   10,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0010,,
   11,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0011,,
   12,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0012,,
   13,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0013,,
   14,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0014,,
   15,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0015,,
   16,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0016,,
   17,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0017,,
   18,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0018,,
   19,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0019,,
   20,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0020,,
   21,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0021,,
   22,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0022,,
   23,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0023,,
   24,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0024,,
   25,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0025,,
   26,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0026,,
   27,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0027,,
   28,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0028,,
   29,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0029,,
   30,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0030,,
   31,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0031,,
   32,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0032,,
   33,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0033,,
   34,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0034,,
   35,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0035,,
   36,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0036,,
   37,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0037,,
   38,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0038,,
   39,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0039,,
   40,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0040,,
   41,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0041,,
   42,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0042,,
   43,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0043,,
   44,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0044,,
   45,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0045,,
   46,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0046,,
   47,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0047,,
   48,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0048,,
   49,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0049,,
   50,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0050,,
   51,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0051,,
   52,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0052,,
   53,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0053,,
   54,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0054,,
   55,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0055,,
   56,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0056,,
   57,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0057,,
   58,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0058,,
   59,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0059,,
   60,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0060,,
   61,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0061,,
   62,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0062,,
   63,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0063,,
   64,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0064,,
   65,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0065,,
   66,http://data2.xmst.org:8081/UploadImg/bookpage/big/481/0066,,


Oxygen Not Included 游戏生物、元素 CSV 数据表
======================================================
::

   # 缺氧游戏性手册,NOI Gameplay
   # label: %name%<br>%english%
   # link: url
   # style: label;image=%image%;html=1;fontSize=8;fillColor=#FFCE9F;strokeColor=gray
   # height: 25
   # width: 145
   # levelspacing: 32
   # nodespacing: 32
   # layout: orgchart
   name,english,url,image
   ONI 游戏运行环境要求,Oxygen Not Included,https://oxygennotincluded.fandom.com/wiki/Oxygen_Not_Included,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c9/Logo.png/revision/latest/scale-to-width-down/64
   入门教程,Guides,https://oxygennotincluded.fandom.com/zh/wiki/教程,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/6f/Duplicant.png/revision/latest/scale-to-width-down/64
   游戏机制,Game Mechanics,https://oxygennotincluded.fandom.com/wiki/Game_Mechanics,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/e4/Codex_Game_Mechanics.png/revision/latest/scale-to-width-down/64
   复制人,Duplicants,https://oxygennotincluded.fandom.com/wiki/Duplicants,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/08/Codex_Duplicants.png/revision/latest/scale-to-width-down/64
   建筑,Buildings,https://oxygennotincluded.fandom.com/wiki/Buildings,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/1a/Codex_Buildings.png/revision/latest/scale-to-width-down/64
   小生物,Critters,https://oxygennotincluded.fandom.com/wiki/Critters,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/07/Codex_Critters.png/revision/latest/scale-to-width-down/64
   疾病,Disease,https://oxygennotincluded.fandom.com/wiki/Disease,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/1d/Codex_Disease.png/revision/latest/scale-to-width-down/64
   技能,Skills,https://oxygennotincluded.fandom.com/wiki/Skills,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/96/Codex_Skills.png/revision/latest/scale-to-width-down/64
   元素,Elements,https://oxygennotincluded.fandom.com/wiki/Elements,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b5/Codex_Elements.png/revision/latest/scale-to-width-down/64
   装备,Equipment,https://oxygennotincluded.fandom.com/wiki/Equipment,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/cb/Codex_Equipment.png/revision/latest/scale-to-width-down/64
   食物,Food,https://oxygennotincluded.fandom.com/wiki/Food_(Resource),https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/10/Codex_Food.png/revision/latest/scale-to-width-down/64
   资源间歇泉,Geysers,https://oxygennotincluded.fandom.com/wiki/Geysers,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c3/Codex_Geysers.png/revision/latest/scale-to-width-down/64
   植物,Plants,https://oxygennotincluded.fandom.com/wiki/Plants,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b4/Codex_Plants.png/revision/latest/scale-to-width-down/64
   科研,Research,https://oxygennotincluded.fandom.com/wiki/Category:Research,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/05/Codex_Research.png/revision/latest/scale-to-width-down/64
   小行星生态,Biomes,https://oxygennotincluded.fandom.com/wiki/Biomes,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/10/Codex_Biomes.png/revision/latest/scale-to-width-down/64
   小行星类型,Asteroid Types,https://oxygennotincluded.fandom.com/wiki/Asteroid_Types,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/80/Asteroid_Types.png/revision/latest/scale-to-width-down/64
   眼冒金星 DLC,Spaced Out!,https://oxygennotincluded.fandom.com/wiki/Spaced_Out!,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/ab/Spaced_Out_Logo.png/revision/latest/scale-to-width-down/64
   火箭（💥）,Rocketry Spaced Out!,https://oxygennotincluded.fandom.com/wiki/Rocketry_(Spaced_Out),https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/cc/Rocket_%28Spaced_Out%29.png/revision/latest/scale-to-width-down/64
   辐射（💥）,Radiation,https://oxygennotincluded.fandom.com/wiki/Radiation,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/d7/Radiation_Menu.png/revision/latest/scale-to-width-down/64
   植物变异（💥）,Plant Mutations,https://oxygennotincluded.fandom.com/wiki/Plant#Plant_Mutation,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/27/Plants_%28Spaced_Out%29.png/revision/latest/scale-to-width-down/64
   建筑（💥）,Buildings (Spaced_Out),https://oxygennotincluded.fandom.com/wiki/Building#Spaced_Out_Exclusive_Buildings,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/62/Buildings_%28Spaced_Out%29.png/revision/latest/scale-to-width-down/64
   小生物（💥）,Critters (Spaced_Out),https://oxygennotincluded.fandom.com/wiki/Critters_(Spaced_Out),https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/76/Critters_%28Spaced_Out%29.png/revision/latest/scale-to-width-down/64
   资源间歇泉（💥）,Geysers (Spaced_Out),https://oxygennotincluded.fandom.com/wiki/Geyser#Spaced_Out_DLC_Geyser_Variants,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/54/Geysers_%28Spaced_Out%29.png/revision/latest/scale-to-width-down/64
   科研（💥）,Research (Spaced_Out),https://oxygennotincluded.fandom.com/wiki/Category:Research_(Spaced_Out),https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a5/Building_Materials_Study_Terminal.png/revision/latest/scale-to-width-down/64
   小行星生态（💥）,Biomes (Spaced_Out),https://oxygennotincluded.fandom.com/wiki/Biomes_(Spaced_Out),https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/10/Codex_Biomes.png/revision/latest/scale-to-width-down/64
   小行星星团（💥）,Planetoid Clusters,https://oxygennotincluded.fandom.com/wiki/Planetoid_Clusters,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/30/Planetoids_%28Spaced_Out%29.png/revision/latest/scale-to-width-down/64

   # label: %name%<br>%english
   # link: url
   # style: label;image=%image%;html=1;fontSize=8;fillColor=#FFCE9F;strokeColor=gray
   # height: 25
   # width: 145
   # levelspacing: 32
   # nodespacing: 32
   # layout: auto
   name,english,url,image
   发光虫,Shine Bug,https://oxygennotincluded.fandom.com/wiki/Shine_Bug,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/69/Shine_Bug.png/revision/latest/scale-to-width-down/64
   喷浮飞鱼,Puft,https://oxygennotincluded.fandom.com/wiki/Puft,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a4/Puft.png/revision/latest/scale-to-width-down/64
   好吃哈奇,Hatch,https://oxygennotincluded.fandom.com/wiki/Hatch,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/55/Hatch.png/revision/latest/scale-to-width-down/64
   浮油生物,Slickster,https://oxygennotincluded.fandom.com/wiki/Slickster,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c9/Slickster.png/revision/latest/scale-to-width-down/64
   帕库鱼,Pacu,https://oxygennotincluded.fandom.com/wiki/Pacu,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/4b/Pacu.png/revision/latest/scale-to-width-down/64
   异化虫,Divergent,https://oxygennotincluded.fandom.com/wiki/Divergent,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/5e/Sweetle.png/revision/latest
   毛鳞壁虎,Drecko,https://oxygennotincluded.fandom.com/wiki/Drecko,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/8d/Drecko.png/revision/latest/scale-to-width-down/64
   抛壳蟹,Pokeshell,https://oxygennotincluded.fandom.com/wiki/Pokeshell,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/17/Pokeshell.png/revision/latest/scale-to-width-down/64
   树鼠,Pip,https://oxygennotincluded.fandom.com/wiki/Pip,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/2b/Pip.png/revision/latest/scale-to-width-down/64
   释气海牛,Gassy Moo,https://oxygennotincluded.fandom.com/wiki/Gassy_Moo,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/83/Gassy_Moo.png/revision/latest/scale-to-width-down/64
   电弧蛞蝓,Plug Slug (Spaced Out),https://oxygennotincluded.fandom.com/wiki/Plug_Slug_(Spaced_Out),https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/5b/Plug_Slug.png/revision/latest/scale-to-width-down/64
   疫病章鱼,Morb,https://oxygennotincluded.fandom.com/wiki/Morb,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/bd/Morb.png/revision/latest
   辐射蜂,Beeta (Primal Aspid),https://oxygennotincluded.fandom.com/wiki/Beeta,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/82/Beeta.png/revision/latest
   锹环田鼠,Shove Vole,https://oxygennotincluded.fandom.com/wiki/Shove_Vole,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/1b/Shove_Vole.png/revision/latest

   # label: %name%<br>%english%
   # link: url
   # style: label;image=%image%;html=1;fontSize=8;fillColor=#FFCE9F;strokeColor=gray
   # height: 32
   # width: 145
   # levelspacing: 32
   # nodespacing: 0
   # edgespacing: 0
   # identify: english
   # parent: pid
   # layout: horizontalflow
   # connect: {"from": "pid", "to": "english", "invert": true, "style": "curved=1;fontSize=11;flowAnimation=1;flowAnimationDuration=1500;"}
   name,english,pid,url,image
   好吃哈奇蛋,Hatchling Egg,,https://oxygennotincluded.fandom.com/wiki/Hatch,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/94/Hatchling_Egg.png
   好吃哈奇稚虫,Hatchling,Hatchling Egg,https://oxygennotincluded.fandom.com/wiki/Hatch,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/de/Hatchling.png
   好吃哈奇成虫,Hatch,Hatchling,https://oxygennotincluded.fandom.com/wiki/Hatch,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/55/Hatch.png
   草质哈奇蛋,Sage Hatchling Egg,,https://oxygennotincluded.fandom.com/wiki/Hatch,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c6/Sage_Hatchling_Egg.png
   草质哈奇稚虫,Sage Hatchling,Sage Hatchling Egg,https://oxygennotincluded.fandom.com/wiki/Hatch,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/78/Sage_Hatchling.png
   草质哈奇成虫,Sage Hatch,Sage Hatchling,https://oxygennotincluded.fandom.com/wiki/Hatch,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/96/Sage_Hatch.png
   石壳哈奇蛋,Stone Hatchling Egg,,https://oxygennotincluded.fandom.com/wiki/Hatch,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/bc/Stone_Hatchling_Egg.png
   石壳哈奇稚虫,Stone Hatchling,Stone Hatchling Egg,https://oxygennotincluded.fandom.com/wiki/Hatch,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/37/Stone_Hatchling.png
   石壳哈奇成虫,Stone Hatch,Stone Hatchling,https://oxygennotincluded.fandom.com/wiki/Hatch,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/6f/Stone_Hatch.png
   光滑哈奇蛋,Smooth Hatchling Egg,,https://oxygennotincluded.fandom.com/wiki/Hatch,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/7b/Smooth_Hatchling_Egg.png
   光滑哈奇稚虫,Smooth Hatchling,Smooth Hatchling Egg,https://oxygennotincluded.fandom.com/wiki/Hatch,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/35/Smooth_Hatchling.png
   光滑哈奇成虫,Smooth Hatch,Smooth Hatchling,https://oxygennotincluded.fandom.com/wiki/Hatch,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/03/Smooth_Hatch.png
   金壳哈奇蛋,Gold Hatchling Egg,,https://oxygennotincluded.fandom.com/wiki/Hatch,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/2e/Gold_Hatchling_Egg.png
   金壳哈奇稚虫,Gold Hatchling,Gold Hatchling Egg,https://oxygennotincluded.fandom.com/wiki/Hatch,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/96/Gold_Hatchling.png
   金壳哈奇成虫,Gold Hatch,Gold Hatchling,https://oxygennotincluded.fandom.com/wiki/Hatch,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/59/Gold_Hatch.png
   发光虫蛋,Shine Nymph Egg,,https://oxygennotincluded.fandom.com/wiki/Shine_Bug#Shine_Bug,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/3f/Shine_Nymph_Egg.png
   发光虫稚虫,Shine Nymph,Shine Nymph Egg,https://oxygennotincluded.fandom.com/wiki/Shine_Bug#Shine_Bug,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/ba/Shine_Nymph.png
   发光虫成虫,Shine Bug,Shine Nymph,https://oxygennotincluded.fandom.com/wiki/Shine_Bug#Shine_Bug,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/69/Shine_Bug.png
   阳光虫蛋,Sun Nymph Egg,,https://oxygennotincluded.fandom.com/wiki/Shine_Bug#Sun_Bug,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/4f/Sun_Nymph_Egg.png
   阳光虫稚虫,Sun Nymph,Sun Nymph Egg,https://oxygennotincluded.fandom.com/wiki/Shine_Bug#Sun_Bug,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/7c/Sun_Nymph.png
   阳光虫成虫,Sun Bug,Sun Nymph,https://oxygennotincluded.fandom.com/wiki/Shine_Bug#Sun_Bug,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/3c/Sun_Bug.png
   皇家虫蛋,Royal Nymph Egg,,https://oxygennotincluded.fandom.com/wiki/Shine_Bug#Royal_Bug,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/5f/Royal_Nymph_Egg.png
   皇家虫稚虫,Royal Nymph,Royal Nymph Egg,https://oxygennotincluded.fandom.com/wiki/Shine_Bug#Royal_Bug,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/d3/Royal_Nymph.png
   皇家虫成虫,Royal Bug,Royal Nymph,https://oxygennotincluded.fandom.com/wiki/Shine_Bug#Royal_Bug,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/fb/Royal_Bug.png
   珊瑚虫蛋,Coral Nymph Egg,,https://oxygennotincluded.fandom.com/wiki/Shine_Bug#Coral_Bug,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f7/Coral_Nymph_Egg.png
   珊瑚虫稚虫,Coral Nymph,Coral Nymph Egg,https://oxygennotincluded.fandom.com/wiki/Shine_Bug#Coral_Bug,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/8c/Coral_Nymph.png
   珊瑚虫成虫,Coral Bug,Coral Nymph,https://oxygennotincluded.fandom.com/wiki/Shine_Bug#Coral_Bug,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/14/Coral_Bug.png
   天蓝虫蛋,Azure Nymph Egg,,https://oxygennotincluded.fandom.com/wiki/Shine_Bug#Azure_Bug,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b0/Azure_Nymph_Egg.png
   天蓝虫稚虫,Azure Nymph,Azure Nymph Egg,https://oxygennotincluded.fandom.com/wiki/Shine_Bug#Azure_Bug,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/2c/Azure_Nymph.png
   天蓝虫成虫,Azure Bug,Azure Nymph,https://oxygennotincluded.fandom.com/wiki/Shine_Bug#Azure_Bug,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/4c/Azure_Bug.png
   深渊虫蛋,Abyss Nymph Egg,,https://oxygennotincluded.fandom.com/wiki/Shine_Bug#Abyss_Bug,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/98/Abyss_Nymph_Egg.png
   深渊虫稚虫,Abyss Nymph,Abyss Nymph Egg,https://oxygennotincluded.fandom.com/wiki/Shine_Bug#Abyss_Bug,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/4b/Abyss_Nymph.png
   深渊虫成虫,Abyss Bug,Abyss Nymph,https://oxygennotincluded.fandom.com/wiki/Shine_Bug#Abyss_Bug,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/98/Abyss_Bug.png
   光耀虫蛋,Radiant Nymph Egg,,https://oxygennotincluded.fandom.com/wiki/Shine_Bug#Radiant_Bug,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/78/Radiant_Nymph_Egg.png
   光耀虫稚虫,Radiant Nymph,Radiant Nymph Egg,https://oxygennotincluded.fandom.com/wiki/Shine_Bug#Radiant_Bug,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/bd/Radiant_Nymph.png
   光耀虫成虫,Radiant Bug,Radiant Nymph,https://oxygennotincluded.fandom.com/wiki/Shine_Bug#Radiant_Bug,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/ae/Radiant_Bug.png
   树鼠蛋,Pip Egg,Pip,https://oxygennotincluded.fandom.com/wiki/Pip#Pip,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/25/Pip_Egg.png
   树鼠幼体,Pip Pipsqueak,Pip Egg,https://oxygennotincluded.fandom.com/wiki/Pip#Pip,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/ef/Pipsqueak.png
   树鼠,Pip,Pip Pipsqueak,https://oxygennotincluded.fandom.com/wiki/Pip#Pip,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/2b/Pip.png
   毛绒树鼠蛋,Cuddle Pip Egg,Cuddle Pip,https://oxygennotincluded.fandom.com/wiki/Pip#Cuddle_Pip,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/4e/Cuddle_Pip_Egg.png
   毛绒树鼠幼体,Cuddle Pip Pipsqueak,Cuddle Pip Egg,https://oxygennotincluded.fandom.com/wiki/Pip#Cuddle_Pip,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/2f/Cuddle_Pipsqueak.png
   毛绒树鼠,Cuddle Pip,Cuddle Pip Pipsqueak,https://oxygennotincluded.fandom.com/wiki/Pip#Cuddle_Pip,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b3/Cuddle_Pip.png
   毛鳞壁虎蛋,Drecklet Egg,,https://oxygennotincluded.fandom.com/wiki/Drecko,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/28/Drecklet_Egg.png
   小毛鳞壁虎,Drecklet,Drecklet Egg,https://oxygennotincluded.fandom.com/wiki/Drecko,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/13/Drecklet.png
   毛鳞壁虎,Dreck,Drecklet,https://oxygennotincluded.fandom.com/wiki/Drecko,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/8d/Drecko.png
   滑鳞壁虎蛋,Glossy Drecklet Egg,,https://oxygennotincluded.fandom.com/wiki/Drecko,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c0/Glossy_Drecklet_Egg.png
   小滑鳞壁虎,Glossy Drecklet,Glossy Drecklet Egg,https://oxygennotincluded.fandom.com/wiki/Drecko,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/ba/Glossy_Drecklet.png
   滑鳞壁虎,Glossy Dreck,Glossy Drecklet,https://oxygennotincluded.fandom.com/wiki/Drecko,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/9c/Glossy_Drecko.png
   抛壳蟹蛋,Pinch Roe,,https://oxygennotincluded.fandom.com/wiki/Pokeshell#Pokeshell,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/fb/Pinch_Roe.png
   小抛壳蟹,Pinch Spawn,Pinch Roe,https://oxygennotincluded.fandom.com/wiki/Pokeshell#Pokeshell,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f7/Pokeshell_Spawn.png
   抛壳蟹,Pinch,Pinch Spawn,https://oxygennotincluded.fandom.com/wiki/Pokeshell#Pokeshell,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/17/Pokeshell.png
   木壳蟹蛋,Oak Pinch Roe,,https://oxygennotincluded.fandom.com/wiki/Pokeshell#Oakshell,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/94/Oak_Pinch_Roe.png
   小木壳蟹,Oak Pinch Spawn,Oak Pinch Roe,https://oxygennotincluded.fandom.com/wiki/Pokeshell#Oakshell,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/23/Oakshell_Spawn.png
   木壳蟹,Oak Pinch,Oak Pinch Spawn,https://oxygennotincluded.fandom.com/wiki/Pokeshell#Oakshell,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/79/Oakshell.png
   沙泥蟹蛋,Sani Pinch Roe,,https://oxygennotincluded.fandom.com/wiki/Pokeshell#Sanishell,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b9/Sani_Pinch_Roe.png
   小沙泥蟹,Sani Pinch Spawn,Sani Pinch Roe,https://oxygennotincluded.fandom.com/wiki/Pokeshell#Sanishell,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/ec/Sanishell_Spawn.png
   沙泥蟹,Sani Pinch,Sani Pinch Spawn,https://oxygennotincluded.fandom.com/wiki/Pokeshell#Sanishell,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b1/Sanishell.png
   喷浮飞鱼蛋,Puftlet Egg,https://oxygennotincluded.fandom.com/wiki/Puft#Sigma_Puft,https://oxygennotincluded.fandom.com/wiki/Puft,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b5/Puftlet_Egg.png
   喷浮飞鱼幼体,Sigma Puftlet,Puftlet Egg,https://oxygennotincluded.fandom.com/wiki/Puft#Sigma_Puft,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/91/Puftlet.png
   喷浮飞鱼,Sigma Puft,Sigma Puftlet,https://oxygennotincluded.fandom.com/wiki/Puft#Sigma_Puft,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a4/Puft.png
   贵族飞鱼蛋,Puftlet Prince Egg,https://oxygennotincluded.fandom.com/wiki/Puft#Alpha_Puft,https://oxygennotincluded.fandom.com/wiki/Puft,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/4e/Puftlet_Prince_Egg.png
   贵族飞鱼幼体,Puftlet Prince,Puftlet Prince Egg,https://oxygennotincluded.fandom.com/wiki/Puft#Alpha_Puft,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/db/Puftlet_Prince.png
   贵族飞鱼,Alpha Puft,Puftlet Prince,https://oxygennotincluded.fandom.com/wiki/Puft#Alpha_Puft,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/95/Puft_Prince.png
   厚壳飞鱼蛋,Dense Puftlet Egg,https://oxygennotincluded.fandom.com/wiki/Puft#Dense_Puft,https://oxygennotincluded.fandom.com/wiki/Puft,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b8/Dense_Puftlet_Egg.png
   厚壳飞鱼幼体,Dense Puftlet,Dense Puftlet Egg,https://oxygennotincluded.fandom.com/wiki/Puft#Dense_Puft,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/ae/Dense_Puftlet.png
   厚壳飞鱼,Dense Puft,Dense Puftlet,https://oxygennotincluded.fandom.com/wiki/Puft#Dense_Puft,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/33/Dense_Puft.png
   洁净飞鱼蛋,Squeaky Puftlet Egg,https://oxygennotincluded.fandom.com/wiki/Puft#Squeaky_Puft,https://oxygennotincluded.fandom.com/wiki/Puft,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c0/Squeaky_Puftlet_Egg.png
   洁净飞鱼幼体,Squeaky Puftlet,Squeaky Puftlet Egg,https://oxygennotincluded.fandom.com/wiki/Puft#Squeaky_Puft,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/ad/Squeaky_Puftlet.png
   洁净飞鱼,Squeaky Puft,Squeaky Puftlet,https://oxygennotincluded.fandom.com/wiki/Puft#Squeaky_Puft,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/96/Squeaky_Puft.png
   帕库鱼卵,Pacu Fish Egg,,https://oxygennotincluded.fandom.com/wiki/Pacu#Pacu,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/9a/Fry_Egg.png
   帕库鱼幼体,Pacu Larva,Pacu Fish Egg,https://oxygennotincluded.fandom.com/wiki/Pacu#Pacu,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/93/Pacu_Fry.png
   帕库鱼,Pacu,Pacu Larva,https://oxygennotincluded.fandom.com/wiki/Pacu#Pacu,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/4b/Pacu.png
   热带帕库鱼卵,Tropical Pacu Fish Egg,,https://oxygennotincluded.fandom.com/wiki/Pacu#Tropical_Pacu,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/3a/Tropical_Fry_Egg.png
   热带帕库鱼幼体,Tropical Pacu Larva,Tropical Pacu Fish Egg,https://oxygennotincluded.fandom.com/wiki/Pacu#Tropical_Pacu,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/05/Tropical_Fry.png
   热带帕库鱼,Tropical Pacu,Tropical Pacu Larva,https://oxygennotincluded.fandom.com/wiki/Pacu#Tropical_Pacu,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/39/Tropical_Pacu.png
   大嘴鱼卵,Gulp Fish Egg,,https://oxygennotincluded.fandom.com/wiki/Pacu#Gulp_Fish,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/60/Gulp_Fry_Egg.png
   大嘴鱼幼体,Gulp Fish Larva,Gulp Fish Egg,https://oxygennotincluded.fandom.com/wiki/Pacu#Gulp_Fish,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/ef/Gulp_Fry.png
   大嘴鱼,Gulp Fish,Gulp Fish Larva,https://oxygennotincluded.fandom.com/wiki/Pacu#Gulp_Fish,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/21/Gulp_Fish.png
   浮油生物蛋,Slickster Larva Egg,Slickster,https://oxygennotincluded.fandom.com/wiki/Slickster#Slickster,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/74/Larva_Egg.png
   浮油生物幼体,Slickster Larva,Slickster Larva Egg,https://oxygennotincluded.fandom.com/wiki/Slickster#Slickster,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/79/Slickster_Larva.png
   浮油生物,Slickster,Slickster Larva,https://oxygennotincluded.fandom.com/wiki/Slickster#Slickster,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c9/Slickster.png
   长毛浮油生物蛋,Longhair Larva Egg,Longhair Slickster,https://oxygennotincluded.fandom.com/wiki/Slickster#Longhair_Slickster,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/d2/Longhair_Larva_Egg.png
   长毛浮油生物幼体,Longhair Larva,Longhair Larva Egg,https://oxygennotincluded.fandom.com/wiki/Slickster#Longhair_Slickster,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c1/Longhair_Larva.png
   长毛浮油生物,Longhair Slickster,Longhair Larva,https://oxygennotincluded.fandom.com/wiki/Slickster#Longhair_Slickster,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b2/Longhair_Slickster.png
   熔岩浮油生物蛋,Molten Larva Egg,Molten Slickster,https://oxygennotincluded.fandom.com/wiki/Slickster#Molten_Slickster,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/3a/Molten_Larva_Egg.png
   熔岩浮油生物幼体,Molten Larva,Molten Larva Egg,https://oxygennotincluded.fandom.com/wiki/Slickster#Molten_Slickster,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/0b/Molten_Larva.png
   熔岩浮油生物,Molten Slickster,Molten Larva,https://oxygennotincluded.fandom.com/wiki/Slickster#Molten_Slickster,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/d5/Molten_Slickster.png
   锹环田鼠蛋,Shove Vole Egg,Shove Vole,https://oxygennotincluded.fandom.com/wiki/Shove_Vole#Shove_Vole,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/55/Shove_Vole_Egg.png
   锹环田鼠幼体,Shove Vole Larva,Shove Vole Egg,https://oxygennotincluded.fandom.com/wiki/Shove_Vole#Shove_Vole,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b1/Vole_Pup.png
   锹环田鼠,Shove Vole,Shove Vole Larva,https://oxygennotincluded.fandom.com/wiki/Shove_Vole#Shove_Vole,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/1b/Shove_Vole.png
   珍馐田鼠蛋,Delecta Vole Egg,Delecta Vole,https://oxygennotincluded.fandom.com/wiki/Shove_Vole#Delecta_Vole,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b4/Delecta_Vole_Egg.png
   珍馐田鼠幼体,Delecta Vole Larva,Delecta Vole Egg,https://oxygennotincluded.fandom.com/wiki/Shove_Vole#Delecta_Vole,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/99/Delecta_Vole_Pup.png
   珍馐田鼠,Delecta Vole,Delecta Vole Larva,https://oxygennotincluded.fandom.com/wiki/Shove_Vole#Delecta_Vole,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/4e/Delecta_Vole.png



   # label: %name%<br>%english%
   # link: url
   # style: label;image=%image%;html=1;fontSize=8;fillColor=#FFCE9F;strokeColor=gray
   # height: 25
   # width: 145
   # levelspacing: 32
   # nodespacing: 32
   # layout: auto
   name,english,url,image
   六角根,Hexalent,https://oxygennotincluded.fandom.com/wiki/Hexalent,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f3/Hexalent.png/revision/latest/scale-to-width-down/64
   冰霜小麦,Sleet Wheat,https://oxygennotincluded.fandom.com/wiki/Sleet_Wheat,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/d4/Sleet_Wheat.png/revision/latest/scale-to-width-down/64
   土星动物捕草,Saturn Critter Trap,https://oxygennotincluded.fandom.com/wiki/Saturn_Critter_Trap,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/02/Saturn_Critter_Trap.png/revision/latest/scale-to-width-down/80
   夜幕菇,Dusk Cap,https://oxygennotincluded.fandom.com/wiki/Dusk_Cap,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/44/Dusk_Cap.png/revision/latest/scale-to-width-down/64
   小吃芽,Nosh Sprout,https://oxygennotincluded.fandom.com/wiki/Nosh_Sprout,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/4e/Nosh_Sprout.png/revision/latest/scale-to-width-down/64
   掩埋的淤泥根,Buried Muckroot,https://oxygennotincluded.fandom.com/wiki/Buried_Muckroot,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/9f/Buried_Muckroot.png/revision/latest/scale-to-width-down/64
   毛刺花,Bristle Blossom,https://oxygennotincluded.fandom.com/wiki/Bristle_Blossom,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a6/Bristle_Blossom.png/revision/latest
   水草,Waterweed,https://oxygennotincluded.fandom.com/wiki/Waterweed,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/71/Waterweed.png/revision/latest/scale-to-width-down/64
   沼泽甜菜,Swamp Chard (Spaced Out),https://oxygennotincluded.fandom.com/wiki/Swamp_Chard_(Spaced_Out),https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/6f/Swamp_Chard.png/revision/latest/scale-to-width-down/64
   沼浆笼,Bog Bucket (Spaced Out),https://oxygennotincluded.fandom.com/wiki/Bog_Bucket_(Spaced_Out),https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/d5/Bog_Bucket_%28Spaced_Out%29.png/revision/latest/scale-to-width-down/64
   火椒藤,Pincha Pepper,https://oxygennotincluded.fandom.com/wiki/Pincha_Pepper,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/07/Pincha_Pepperplant.png/revision/latest/scale-to-width-down/64
   米虱木,Mealwood,https://oxygennotincluded.fandom.com/wiki/Mealwood,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/80/Mealwood.png/revision/latest/scale-to-width-down/64
   虫果芽,Grubfruit Plant (Spaced Out),https://oxygennotincluded.fandom.com/wiki/Grubfruit_Plant_(Spaced_Out),https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/58/Spindly_Grubfruit_Plant.png/revision/latest/scale-to-width-down/64
   同伴芽,Buddy Bud,https://oxygennotincluded.fandom.com/wiki/Buddy_Bud,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/1d/Buddy_Bud.png/revision/latest/scale-to-width-down/64
   孢子兰,Sporechid,https://oxygennotincluded.fandom.com/wiki/Sporechid,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/76/Sporechid.png/revision/latest/scale-to-width-down/64
   极乐刺,Bliss Burst (Spaced Out),https://oxygennotincluded.fandom.com/wiki/Bliss_Burst_(Spaced_Out),https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/89/Bliss_Burst_%28Spaced_Out%29.png/revision/latest/scale-to-width-down/64
   欢乐叶,Mirth Leaf,https://oxygennotincluded.fandom.com/wiki/Mirth_Leaf,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/78/Mirth_Leaf.png/revision/latest/scale-to-width-down/64
   诱人荆棘,Bluff Briar,https://oxygennotincluded.fandom.com/wiki/Bluff_Briar,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/af/Bluff_Briar.png/revision/latest/scale-to-width-down/64
   锦醇菇,Mellow Mallow (Spaced Out),https://oxygennotincluded.fandom.com/wiki/Mellow_Mallow_(Spaced_Out),https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/9f/Mellow_Mallow.png/revision/latest/scale-to-width-down/64
   雀跃掌,Jumping Joya,https://oxygennotincluded.fandom.com/wiki/Jumping_Joya,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/86/Jumping_Joya.png/revision/latest/scale-to-width-down/64
   沙盐藤,Dasha Saltvine,https://oxygennotincluded.fandom.com/wiki/Dasha_Saltvine,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/41/Dasha_Saltvine.png/revision/latest/scale-to-width-down/64
   乔木树,Arbor Tree,https://oxygennotincluded.fandom.com/wiki/Arbor_Tree,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/24/Arbor_Tree.png/revision/latest/scale-to-width-down/64
   芳香百合,Balm Lily,https://oxygennotincluded.fandom.com/wiki/Balm_Lily,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/92/Balm_Lily.png/revision/latest/scale-to-width-down/64
   释气草,Gas Grass,https://oxygennotincluded.fandom.com/wiki/Gas_Grass,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c5/Gas_Grass.png/revision/latest/scale-to-width-down/64
   顶针芦苇,Thimble Reed,https://oxygennotincluded.fandom.com/wiki/Thimble_Reed,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/97/Thimble_Reed.png/revision/latest/scale-to-width-down/64
   冰息萝卜,Wheezewort,https://oxygennotincluded.fandom.com/wiki/Wheezewort,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/81/Wheezewort.png/revision/latest/scale-to-width-down/64
   氧齿蕨,Oxyfern,https://oxygennotincluded.fandom.com/wiki/Oxyfern,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/e1/Oxyfern.png/revision/latest/scale-to-width-down/64


   # label: %name%<br>%english%
   # link: url
   # style: label;image=%image%;html=1;fontSize=8;strokeColor=#6A72AD;fillColor=#FF8000;
   # height: 25
   # width: 145
   # levelspacing: 32
   # nodespacing: 32
   # layout: auto
   name,english,url,image
   烤肉串,Barbeque,https://oxygennotincluded.fandom.com/wiki/Barbeque,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f5/Resource_Barbeque.png/revision/latest
   浆果糕,Berry Sludge,https://oxygennotincluded.fandom.com/wiki/Berry_Sludge,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/30/Resource_Berry_Sludge.png/revision/latest
   毛刺浆果,Bristle Berry,https://oxygennotincluded.fandom.com/wiki/Bristle_Berry,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/11/Resource_Bristle_Berry.png/revision/latest
   沼浆果冻,Bog Jelly,https://oxygennotincluded.fandom.com/wiki/Bog_Jelly,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/cd/Bog_Jelly.png/revision/latest
   烤海鲜,Cooked Seafood,https://oxygennotincluded.fandom.com/wiki/Cooked_Seafood,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/e2/Resource_Cooked_Seafood.png/revision/latest
   咖喱豆,Curried Beans,https://oxygennotincluded.fandom.com/wiki/Curried_Beans,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/fa/Resource_CurriedBeans.png/revision/latest
   煎蘑菇,Fried Mushroom,https://oxygennotincluded.fandom.com/wiki/Fried_Mushroom,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/56/Resource_Fried_Mushroom.png/revision/latest
   冰霜面包,Frost Bun,https://oxygennotincluded.fandom.com/wiki/Frost_Bun,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/cc/Resource_Frost_Bun.png/revision/latest
   冰霜汉堡,Frost Burger,https://oxygennotincluded.fandom.com/wiki/Frost_Burger,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/47/Resource_Frost_Burger.png/revision/latest
   海生菜（水草叶）,Lettuce,https://oxygennotincluded.fandom.com/wiki/Lettuce,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/fe/Resource_Lettuce.png/revision/latest
   炙烤刺果,Gristle Berry,https://oxygennotincluded.fandom.com/wiki/Gristle_Berry,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/cd/Resource_Gristle_Berry.png/revision/latest
   虫果（虫果芽果实）,Grubfruit,https://oxygennotincluded.fandom.com/wiki/Grubfruit,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/e0/Grubfruit.png/revision/latest
   虫果果酱,Grubfruit Preserve,https://oxygennotincluded.fandom.com/wiki/Grubfruit_Preserve,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/1b/Grubfruit_Preserve.png/revision/latest
   六角根果实,Hexalent Fruit,https://oxygennotincluded.fandom.com/wiki/Hexalent_Fruit,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/42/Resource_Hexalent_Fruit.png/revision/latest
   米虱糕（面包）,Liceloaf,https://oxygennotincluded.fandom.com/wiki/Liceloaf,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/5f/Resource_Liceloaf.png/revision/latest
   米虱,Meal Lice,https://oxygennotincluded.fandom.com/wiki/Meal_Lice,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f6/Resource_Meal_Lice.png/revision/latest
   肉,Meat,https://oxygennotincluded.fandom.com/wiki/Meat,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b6/Resource_Meat.png/revision/latest
   混合浆果派,Mixed Berry Pie,https://oxygennotincluded.fandom.com/wiki/Mixed_Berry_Pie,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/68/Mixed_Berry_Pie.png/revision/latest
   淤泥根,Muckroot,https://oxygennotincluded.fandom.com/wiki/Muckroot,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/54/Resource_Muckroot.png/revision/latest
   软泥膏,Mush Bar,https://oxygennotincluded.fandom.com/wiki/Mush_Bar,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/ba/Resource_Mush_Bar.png/revision/latest
   炸泥膏,Mush Fry,https://oxygennotincluded.fandom.com/wiki/Mush_Fry,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c0/Resource_Mush_Fry.png/revision/latest
   蘑菇,Mushroom,https://oxygennotincluded.fandom.com/wiki/Mushroom,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/66/Resource_Mushroom.png/revision/latest
   蘑菇卷,Mushroom Wrap,https://oxygennotincluded.fandom.com/wiki/Mushroom_Wrap,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/ea/Resource_Mushroom_Wrap.png/revision/latest
   小吃豆,Nosh Bean,https://oxygennotincluded.fandom.com/wiki/Nosh_Bean,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/d2/Nosh_Bean.png/revision/latest
   营养棒,Nutrient Bar,https://oxygennotincluded.fandom.com/wiki/Nutrient_Bar,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/04/Resource_Nutrient_Bar.png/revision/latest
   煎蛋卷,Omelette,https://oxygennotincluded.fandom.com/wiki/Omelette,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/32/Resource_Omelette.png/revision/latest
   帕库鱼片,Pacu Fillet,https://oxygennotincluded.fandom.com/wiki/Pacu_Fillet,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/0b/Resource_Pacu_Fillet.png/revision/latest
   火椒面包,Pepper Bread,https://oxygennotincluded.fandom.com/wiki/Pepper_Bread,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/ce/Resource_Pepper_Bread.png/revision/latest
   火椒粒,Pincha Peppernut,https://oxygennotincluded.fandom.com/wiki/Pincha_Peppernut,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/cd/Pincha_Peppernut.png/revision/latest
   腌制米虱,Pickled Meal,https://oxygennotincluded.fandom.com/wiki/Pickled_Meal,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/af/Resource_Pickled_Meal.png/revision/latest
   植物肉,Plant Meat,https://oxygennotincluded.fandom.com/wiki/Plant_Meat,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b5/Plant_Meat.png/revision/latest
   生蛋,Raw Egg,https://oxygennotincluded.fandom.com/wiki/Raw_Egg,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/bd/Raw_Egg.png/revision/latest
   生蟹肉,Raw Shellfish,https://oxygennotincluded.fandom.com/wiki/Raw_Shellfish,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/aa/Raw_Shellfish.png/revision/latest
   烤虫果仁,Roast Grubfruit Nut,https://oxygennotincluded.fandom.com/wiki/Roast_Grubfruit_Nut,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/38/Roast_Grubfruit_Nut.png/revision/latest
   冰霜麦粒,Sleet Wheat Grain,https://oxygennotincluded.fandom.com/wiki/Sleet_Wheat_Grain,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/6b/Sleet_Wheat_Grain.png/revision/latest
   麻婆豆腐,Spicy Tofu,https://oxygennotincluded.fandom.com/wiki/Spicy_Tofu,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/8b/Resource_Spicy_Tofu.png/revision/latest
   贫瘠虫果,Spindly Grubfruit,https://oxygennotincluded.fandom.com/wiki/Spindly_Grubfruit,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c9/Spindly_Grubfruit.png/revision/latest
   浆果酿,Stuffed Berry,https://oxygennotincluded.fandom.com/wiki/Stuffed_Berry,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b6/Resource_Stuffed_Berry.png/revision/latest
   海陆双拼,Surf N Turf,https://oxygennotincluded.fandom.com/wiki/Surf_N_Turf,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/0c/Surf_N_Turf.png/revision/latest
   沼泽甜菜心,Swamp Chard Heart,https://oxygennotincluded.fandom.com/wiki/Swamp_Chard_Heart,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/90/Swamp_Chard_Heart.png/revision/latest
   沼泽欢愉,Swampy Delights,https://oxygennotincluded.fandom.com/wiki/Swampy_Delights,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/9a/Swampy_Delights.png/revision/latest
   豆腐,Tofu,https://oxygennotincluded.fandom.com/wiki/Tofu,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c2/Resource_Tofu.png/revision/latest
   蘑菇乳蛋饼,Mushroom Quiche,https://oxygennotincluded.fandom.com/wiki/Mushroom_Quiche,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/6a/Resource_Mushroom_Quiche.png/revision/latest
   蛋奶酥煎饼,Soufflé Pancakes,https://oxygennotincluded.fandom.com/wiki/Souffl%C3%A9_Pancakes,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/81/Resource_Souffle_Pancakes.png/revision/latest


   # label: %name%<br>%english%
   # link: url
   # style: label;image=%image%;html=1;fontSize=8;strokeColor=#6A72AD;fillColor=#007FFF;
   # height: 25
   # width: 145
   # levelspacing: 32
   # nodespacing: 32
   # layout: auto
   name,english,url,image
   氧气,Oxygen,https://oxygennotincluded.fandom.com/wiki/Oxygen,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/19/Oxygen.png/revision/latest
   污染氧,Polluted Oxygen,https://oxygennotincluded.fandom.com/wiki/Polluted_Oxygen,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/e4/Polluted_Oxygen.png/revision/latest
   二氧化碳,Carbon Dioxide,https://oxygennotincluded.fandom.com/wiki/Carbon_Dioxide,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f3/Carbon_Dioxide.png/revision/latest
   天然气,Natural Gas,https://oxygennotincluded.fandom.com/wiki/Natural_Gas,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/11/Natural_Gas.png/revision/latest
   核尘埃,Nuclear Fallout,https://oxygennotincluded.fandom.com/wiki/Nuclear_Fallout,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f4/Nuclear_Fallout.png/revision/latest
   气态超级冷却剂,Gas Super Coolant,https://oxygennotincluded.fandom.com/wiki/Gas_Super_Coolant,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/11/Gas_Super_Coolant.png/revision/latest
   丙烷,Propane,https://oxygennotincluded.fandom.com/wiki/Propane,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/34/Propane.png/revision/latest
   气态乙醇,Gas Ethanol,https://oxygennotincluded.fandom.com/wiki/Gas_Ethanol,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/e7/Gas_Ethanol.png/revision/latest
   气态岩,Rock Gas,https://oxygennotincluded.fandom.com/wiki/Rock_Gas,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a0/Rock_Gas.png/revision/latest
   气态盐,Salt Gas,https://oxygennotincluded.fandom.com/wiki/Salt_Gas,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/ba/Salt_Gas.png/revision/latest
   气态碳,Gas Carbon,https://oxygennotincluded.fandom.com/wiki/Gas_Carbon,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/57/Gas_Carbon.png/revision/latest
   气态磷,Gas Phosphorus,https://oxygennotincluded.fandom.com/wiki/Gas_Phosphorus,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/e5/Gas_Phosphorus.png/revision/latest
   气态金,Gas Gold,https://oxygennotincluded.fandom.com/wiki/Gas_Gold,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/bb/Gas_Gold.png/revision/latest
   气态钢,Gas Steel,https://oxygennotincluded.fandom.com/wiki/Gas_Steel,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/08/Gas_Steel.png/revision/latest
   气态钨,Gas Tungsten,https://oxygennotincluded.fandom.com/wiki/Gas_Tungsten,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/e6/Gas_Tungsten.png/revision/latest
   气态钴,Gas Cobalt,https://oxygennotincluded.fandom.com/wiki/Gas_Cobalt,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/5b/Gas_Cobalt.png/revision/latest
   气态铁,Gas Iron,https://oxygennotincluded.fandom.com/wiki/Gas_Iron,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/95/Gas_Iron.png/revision/latest
   气态铅,Gas Lead,https://oxygennotincluded.fandom.com/wiki/Gas_Lead,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/15/Gas_Lead.png/revision/latest
   气态铌,Gas Niobium,https://oxygennotincluded.fandom.com/wiki/Gas_Niobium,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f2/Gas_Niobium.png/revision/latest
   气态铜,Gas Copper,https://oxygennotincluded.fandom.com/wiki/Gas_Copper,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/ab/Gas_Copper.png/revision/latest
   气态铝,Gas Aluminum,https://oxygennotincluded.fandom.com/wiki/Gas_Aluminum,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/54/Gas_Aluminum.png/revision/latest
   氢气,Hydrogen,https://oxygennotincluded.fandom.com/wiki/Hydrogen,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/ed/Hydrogen.png/revision/latest
   氯气,Chlorine,https://oxygennotincluded.fandom.com/wiki/Chlorine,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/ce/Chlorine.png/revision/latest
   汞蒸气,Gas Mercury,https://oxygennotincluded.fandom.com/wiki/Gas_Mercury,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/41/Gas_Mercury.png/revision/latest
   硫蒸气,Gas Sulfur,https://oxygennotincluded.fandom.com/wiki/Gas_Sulfur,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/00/Gas_Sulfur.png/revision/latest
   蒸汽,Steam,https://oxygennotincluded.fandom.com/wiki/Steam,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/94/Steam.png/revision/latest
   高硫天然气,Sour Gas,https://oxygennotincluded.fandom.com/wiki/Sour_Gas,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/46/Sour_Gas.png/revision/latest



   # label: %name%<br>%english%
   # link: url
   # style: label;image=%image%;html=1;fontSize=8;strokeColor=#2D7600;fillColor=#66CC00;
   # height: 25
   # width: 145
   # levelspacing: 32
   # nodespacing: 32
   # layout: auto
   name,english,url,image
   乙醇,Ethanol,https://oxygennotincluded.fandom.com/wiki/Ethanol,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/95/Ethanol.png/revision/latest
   原油,Crude Oil,https://oxygennotincluded.fandom.com/wiki/Crude_Oil,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/60/Crude_Oil.png/revision/latest
   咸乳,Brackene,https://oxygennotincluded.fandom.com/wiki/Brackene,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/db/Brackene.png/revision/latest
   岩浆,Magma,https://oxygennotincluded.fandom.com/wiki/Magma,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f9/Magma.png/revision/latest
   水,Water,https://oxygennotincluded.fandom.com/wiki/Water,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/9d/Water.png/revision/latest
   汞,Mercury,https://oxygennotincluded.fandom.com/wiki/Mercury,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/41/Mercury.png/revision/latest//scale-to-width-down/64
   污染水,Polluted Water,https://oxygennotincluded.fandom.com/wiki/Polluted_Water,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/28/Polluted_Water.png/revision/latest
   浓盐水,Brine,https://oxygennotincluded.fandom.com/wiki/Brine,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/0c/Brine.png/revision/latest
   液态丙烷,Liquid Propane,https://oxygennotincluded.fandom.com/wiki/Liquid_Propane,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/48/Liquid_Propane.png/revision/latest
   液态二氧化碳,Liquid Carbon Dioxide,https://oxygennotincluded.fandom.com/wiki/Liquid_Carbon_Dioxide,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/61/Liquid_Carbon_Dioxide.png/revision/latest
   液态树脂,Liquid Resin,https://oxygennotincluded.fandom.com/wiki/Liquid_Resin,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/12/Liquid_Resin.png/revision/latest
   液态核废料,Nuclear Waste,https://oxygennotincluded.fandom.com/wiki/Nuclear_Waste,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a1/Nuclear_Waste.png/revision/latest
   液态氢,Liquid Hydrogen,https://oxygennotincluded.fandom.com/wiki/Liquid_Hydrogen,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/5e/Liquid_Hydrogen.png/revision/latest
   液态氧,Liquid Oxygen,https://oxygennotincluded.fandom.com/wiki/Liquid_Oxygen,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/1b/Liquid_Oxygen.png/revision/latest
   液态氯,Liquid Chlorine,https://oxygennotincluded.fandom.com/wiki/Liquid_Chlorine,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/6b/Liquid_Chlorine.png/revision/latest
   液态甲烷,Methane,https://oxygennotincluded.fandom.com/wiki/Methane,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/19/Methane.png/revision/latest
   液态石脑油,Naphtha,https://oxygennotincluded.fandom.com/wiki/Naphtha,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/49/Naphtha.png/revision/latest
   液态硫,Liquid Sulfur,https://oxygennotincluded.fandom.com/wiki/Liquid_Sulfur,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/d3/Liquid_Sulfur.png/revision/latest
   液态磷,Liquid Phosphorus,https://oxygennotincluded.fandom.com/wiki/Liquid_Phosphorus,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/db/Liquid_Phosphorus.png/revision/latest
   熔融玻璃,Molten Glass,https://oxygennotincluded.fandom.com/wiki/Molten_Glass,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/86/Molten_Glass.png/revision/latest
   熔融盐,Molten Salt,https://oxygennotincluded.fandom.com/wiki/Molten_Salt,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/89/Molten_Salt.png/revision/latest
   熔融碳,Liquid Carbon,https://oxygennotincluded.fandom.com/wiki/Liquid_Carbon,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/8b/Liquid_Carbon.png/revision/latest
   熔融蔗糖,Liquid Sucrose,https://oxygennotincluded.fandom.com/wiki/Liquid_Sucrose,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c6/Liquid_Sucrose.png/revision/latest
   熔融金,Liquid Gold,https://oxygennotincluded.fandom.com/wiki/Liquid_Gold,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/87/Liquid_Gold.png/revision/latest
   熔融钢,Liquid Steel,https://oxygennotincluded.fandom.com/wiki/Liquid_Steel,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/fc/Liquid_Steel.png/revision/latest
   熔融钨,Liquid Tungsten,https://oxygennotincluded.fandom.com/wiki/Liquid_Tungsten,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c7/Liquid_Tungsten.png/revision/latest
   熔融钴,Liquid Cobalt,https://oxygennotincluded.fandom.com/wiki/Liquid_Cobalt,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/8c/Liquid_Cobalt.png/revision/latest
   熔融铀,Liquid Uranium,https://oxygennotincluded.fandom.com/wiki/Liquid_Uranium,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/6c/Liquid_Uranium.png/revision/latest
   熔融铁,Liquid Iron,https://oxygennotincluded.fandom.com/wiki/Liquid_Iron,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/42/Liquid_Iron.png/revision/latest
   熔融铅,Molten Lead,https://oxygennotincluded.fandom.com/wiki/Molten_Lead,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/6a/Molten_Lead.png/revision/latest
   熔融铌,Liquid Niobium,https://oxygennotincluded.fandom.com/wiki/Liquid_Niobium,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/d5/Liquid_Niobium.png/revision/latest
   熔融铜,Liquid Copper,https://oxygennotincluded.fandom.com/wiki/Liquid_Copper,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/28/Liquid_Copper.png/revision/latest
   熔融铝,Molten Aluminum,https://oxygennotincluded.fandom.com/wiki/Molten_Aluminum,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/63/Molten_Aluminum.png/revision/latest
   盐水,Salt Water,https://oxygennotincluded.fandom.com/wiki/Salt_Water,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/3b/Salt_Water.png/revision/latest
   石油,Petroleum,https://oxygennotincluded.fandom.com/wiki/Petroleum,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a2/Petroleum.png/revision/latest
   粘性凝胶流体,Visco-Gel,https://oxygennotincluded.fandom.com/wiki/Visco-Gel,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/43/Visco-Gel.png/revision/latest
   超级冷却剂,Super Coolant,https://oxygennotincluded.fandom.com/wiki/Super_Coolant,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/2b/Super_Coolant.png/revision/latest


   # label: %name%<br>%english%
   # link: url
   # style: label;html=1;align=right;spacing=4;fontColor=#F7F7F7;fontSize=8;strokeColor=#2D7600;fillColor=#994C00;
   # height: 25
   # width: 145
   # levelspacing: 32
   # nodespacing: 32
   # layout: auto
   name,english,url,image
   农业,Agriculture,https://oxygennotincluded.fandom.com/wiki/Category:Agriculture
   有机物,Organic,https://oxygennotincluded.fandom.com/wiki/Category:Organic
   可耕种的泥土,Cultivable Soil,https://oxygennotincluded.fandom.com/wiki/Category:Cultivable_Soil
   精炼矿物,Refined Mineral,https://oxygennotincluded.fandom.com/wiki/Category:Refined_Mineral
   矿物原料,Raw Mineral,https://oxygennotincluded.fandom.com/wiki/Category:Raw_Mineral
   消耗性矿石,Consumable Ore,https://oxygennotincluded.fandom.com/wiki/Category:Consumable_Ore
   过滤介质,Filtration Medium,https://oxygennotincluded.fandom.com/wiki/Category:Filtration_Medium
   可液化物,Liquefiable,https://oxygennotincluded.fandom.com/wiki/Category:Liquefiable
   人造材料,Manufactured Material,https://oxygennotincluded.fandom.com/wiki/Category:Manufactured_Material
   金属矿石,Metal Ore,https://oxygennotincluded.fandom.com/wiki/Category:Metal_Ore
   稀有资源,Rare Resource,https://oxygennotincluded.fandom.com/wiki/Category:Rare_Resource
   精炼金属,Refined Metal,https://oxygennotincluded.fandom.com/wiki/Category:Refined_Metal
   其他,Miscellaneous,https://oxygennotincluded.fandom.com/wiki/Category:Miscellaneous
   特殊品,Special,https://oxygennotincluded.fandom.com/wiki/Category:Special

   # label: %name%<br>%english%
   # link: url
   # styles: {"group": "label;html=1;image=%image%;align=right;fontColor=#F7F7F7;fontSize=12;strokeColor=#2D7600;fillColor=#994C00;spacing=8;", \
   #           "item": "label;html=1;image=%image%;fontSize=8;strokeColor=#d6b656;fillColor=#fff2cc;"}
   # stylename: css
   # height: 25
   # width: 145
   # levelspacing: 32
   # nodespacing: 32
   # layout: auto
   css,name,english,url,image
   group,农业,Agriculture,https://oxygennotincluded.fandom.com/wiki/Category:Agriculture
   item,肥料,Fertilizer,https://oxygennotincluded.fandom.com/wiki/Fertilizer,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/25/Fertilizer.png/revision/latest
   item,磷矿,Phosphorite,https://oxygennotincluded.fandom.com/wiki/Phosphorite,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/5d/Phosphorite.png/revision/latest
   group,有机物,Organic,https://oxygennotincluded.fandom.com/wiki/Category:Organic
   item,固态树脂,Resin,https://oxygennotincluded.fandom.com/wiki/Resin,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/2c/Resin.png/revision/latest
   item,木材,Lumber,https://oxygennotincluded.fandom.com/wiki/Lumber,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/d3/Lumber.png/revision/latest
   item,污染土,Polluted Dirt,https://oxygennotincluded.fandom.com/wiki/Polluted_Dirt,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/04/Polluted_Dirt.png/revision/latest
   item,污染泥,Polluted Mud,https://oxygennotincluded.fandom.com/wiki/Polluted_Mud,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/78/Polluted_Mud_%28Spaced_Out%29.png/revision/latest
   item,泥巴,Mud,https://oxygennotincluded.fandom.com/wiki/Mud,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/08/Mud_%28Spaced_Out%29.png/revision/latest
   item,菌泥,Slime,https://oxygennotincluded.fandom.com/wiki/Slime,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/38/Slime.png/revision/latest
   item,藻类,Algae,https://oxygennotincluded.fandom.com/wiki/Algae,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/9b/Algae.png/revision/latest
   group,可耕种的泥土,Cultivable Soil,https://oxygennotincluded.fandom.com/wiki/Category:Cultivable_Soil
   item,粘土,Clay,https://oxygennotincluded.fandom.com/wiki/Clay,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a2/Clay.png/revision/latest
   item,泥土,Dirt,https://oxygennotincluded.fandom.com/wiki/Dirt,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/02/Resource_Dirt.png/revision/latest
   group,精炼矿物,Refined Mineral,https://oxygennotincluded.fandom.com/wiki/Category:Refined_Mineral
   item,碎岩,Crushed Rock,https://oxygennotincluded.fandom.com/wiki/Crushed_Rock,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/fd/Crushed_Rock.png/revision/latest
   group,矿物原料,Raw Mineral,https://oxygennotincluded.fandom.com/wiki/Category:Raw_Mineral
   item,化石,Fossil,https://oxygennotincluded.fandom.com/wiki/Fossil,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/8c/Fossil.png/revision/latest
   item,沉积岩,Sedimentary Rock,https://oxygennotincluded.fandom.com/wiki/Sedimentary_Rock,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/2e/Sedimentary_Rock.png/revision/latest
   item,火成岩,Igneous Rock,https://oxygennotincluded.fandom.com/wiki/Igneous_Rock,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/ad/Igneous_Rock.png/revision/latest
   item,石墨,Graphite,https://oxygennotincluded.fandom.com/wiki/Graphite,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/22/Graphite.png/revision/latest
   item,砂岩,Sandstone,https://oxygennotincluded.fandom.com/wiki/Sandstone,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/d6/Sandstone.png/revision/latest
   item,花岗岩,Granite,https://oxygennotincluded.fandom.com/wiki/Granite,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/4a/Granite.png/revision/latest
   item,镁铁质岩,Mafic Rock,https://oxygennotincluded.fandom.com/wiki/Mafic_Rock,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c9/Mafic_Rock.png/revision/latest
   item,陶瓷,Ceramic,https://oxygennotincluded.fandom.com/wiki/Ceramic,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f5/Ceramic.png/revision/latest
   item,黑曜石,Obsidian,https://oxygennotincluded.fandom.com/wiki/Obsidian,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/23/Obsidian.png/revision/latest
   group,消耗性矿石,Consumable Ore,https://oxygennotincluded.fandom.com/wiki/Category:Consumable_Ore
   item,咸乳蜡,Brackwax,https://oxygennotincluded.fandom.com/wiki/Brackwax,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/ef/Brackwax.png/revision/latest
   item,固态甲烷,Solid Methane,https://oxygennotincluded.fandom.com/wiki/Solid_Methane,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/76/Solid_Methane.png/revision/latest
   item,煤炭,Coal,https://oxygennotincluded.fandom.com/wiki/Coal,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a7/Coal.png/revision/latest
   item,盐,Salt,https://oxygennotincluded.fandom.com/wiki/Salt,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/77/Salt.png/revision/latest
   item,石灰,Lime,https://oxygennotincluded.fandom.com/wiki/Lime,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/34/Lime.png/revision/latest
   item,精炼碳,Refined Carbon,https://oxygennotincluded.fandom.com/wiki/Refined_Carbon,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/2b/Refined_Carbon.png/revision/latest
   item,精炼磷,Refined Phosphorus,https://oxygennotincluded.fandom.com/wiki/Refined_Phosphorus,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/cc/Refined_Phosphorus.png/revision/latest
   item,蔗糖,Sucrose,https://oxygennotincluded.fandom.com/wiki/Sucrose,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/cf/Sucrose_%28Spaced_Out%29.png/revision/latest
   item,铁锈,Rust,https://oxygennotincluded.fandom.com/wiki/Rust,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/20/Rust.png/revision/latest
   item,氧石,Oxylite,https://oxygennotincluded.fandom.com/wiki/Oxylite,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b6/Oxylite.png/revision/latest
   item,漂白石,Bleach Stone,https://oxygennotincluded.fandom.com/wiki/Bleach_Stone,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/fd/Bleach_Stone.png/revision/latest
   group,过滤介质,Filtration Medium,https://oxygennotincluded.fandom.com/wiki/Category:Filtration_Medium
   item,沙子,Sand,https://oxygennotincluded.fandom.com/wiki/Sand,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a7/Sand.png/revision/latest
   item,浮土,Regolith,https://oxygennotincluded.fandom.com/wiki/Regolith,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/23/Regolith.png/revision/latest
   group,可液化物,Liquefiable,https://oxygennotincluded.fandom.com/wiki/Category:Liquefiable
   item,雪,Snow,https://oxygennotincluded.fandom.com/wiki/Snow,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/4e/Snow.png/revision/latest
   item,冰,Ice,https://oxygennotincluded.fandom.com/wiki/Ice,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/77/Ice.png/revision/latest
   item,碎冰,Crushed Ice,https://oxygennotincluded.fandom.com/wiki/Crushed_Ice,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/e3/Crushed_Ice.png/revision/latest
   item,凝冻咸乳,Frozen Brackene,https://oxygennotincluded.fandom.com/wiki/Frozen_Brackene,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/09/Frozen_Brackene.png
   item,固态丙烷,Solid Propane,https://oxygennotincluded.fandom.com/wiki/Solid_Propane,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/30/Solid_Propane.png/revision/latest
   item,固态乙醇,Solid Ethanol,https://oxygennotincluded.fandom.com/wiki/Solid_Ethanol,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/29/Solid_Ethanol.png/revision/latest
   item,固态二氧化碳,Solid Carbon Dioxide,https://oxygennotincluded.fandom.com/wiki/Solid_Carbon_Dioxide,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/9d/Solid_Carbon_Dioxide.png/revision/latest
   item,固态原油,Solid Crude Oil,https://oxygennotincluded.fandom.com/wiki/Solid_Crude_Oil,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f1/Solid_Crude_Oil.png/revision/latest
   item,固态氢,Solid Hydrogen,https://oxygennotincluded.fandom.com/wiki/Solid_Hydrogen,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/08/Solid_Hydrogen.png/revision/latest
   item,固态氧,Solid Oxygen,https://oxygennotincluded.fandom.com/wiki/Solid_Oxygen,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/33/Solid_Oxygen.png/revision/latest
   item,固态氯,Solid Chlorine,https://oxygennotincluded.fandom.com/wiki/Solid_Chlorine,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/dd/Solid_Chlorine.png/revision/latest
   item,固态石油,Solid Petroleum,https://oxygennotincluded.fandom.com/wiki/Solid_Petroleum,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/5f/Solid_Petroleum.png/revision/latest
   item,固态石脑油,Solid Naphtha,https://oxygennotincluded.fandom.com/wiki/Solid_Naphtha,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/3c/Solid_Naphtha.png/revision/latest
   item,污染冰,Polluted Ice,https://oxygennotincluded.fandom.com/wiki/Polluted_Ice,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c1/Polluted_Ice.png/revision/latest
   item,浓盐冰,Brine Ice,https://oxygennotincluded.fandom.com/wiki/Brine_Ice,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/20/Brine_Ice.png/revision/latest
   group,人造材料,Manufactured Material,https://oxygennotincluded.fandom.com/wiki/Category:Manufactured_Material
   item,固态粘性凝胶,Solid Visco-Gel,https://oxygennotincluded.fandom.com/wiki/Solid_Visco-Gel,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/05/Solid_Visco-Gel.png/revision/latest
   item,固态超级冷却剂,Solid Super Coolant,https://oxygennotincluded.fandom.com/wiki/Solid_Super_Coolant,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c1/Solid_Super_Coolant.png/revision/latest
   item,塑料,Plastic,https://oxygennotincluded.fandom.com/wiki/Plastic,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/0b/Plastic.png/revision/latest
   item,塑料质,Plastium,https://oxygennotincluded.wiki.gg/wiki/Plastium,https://static.wikia.nocookie.net/oxygennotincluded/images/f/f0/塑料质.png/revision/latest?path-prefix=zh
   item,浓缩铀,Enriched Uranium,https://oxygennotincluded.fandom.com/wiki/Enriched_Uranium,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/26/Enriched_Uranium.png/revision/latest
   item,玻璃,Glass,https://oxygennotincluded.fandom.com/wiki/Glass,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/8f/Resource_Glass.png/revision/latest
   item,钢,Steel,https://oxygennotincluded.fandom.com/wiki/Steel,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c9/Steel.png/revision/latest
   item,导热质,Thermium,https://oxygennotincluded.fandom.com/wiki/Thermium,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/07/Thermium.png/revision/latest
   item,隔热质,Insulite,https://oxygennotincluded.fandom.com/wiki/Insulite,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/bc/Insulite.png/revision/latest
   group,金属矿石,Metal Ore,https://oxygennotincluded.fandom.com/wiki/Category:Metal_Ore
   item,朱砂矿,Cinnabar Ore,https://oxygennotincluded.wiki.gg/zh/wiki/朱砂矿,
   item,金汞齐,Gold Amalgam,https://oxygennotincluded.fandom.com/wiki/Gold_Amalgam,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/73/Gold_Amalgam.png/revision/latest
   item,银金矿,Electrum,https://oxygennotincluded.fandom.com/wiki/Electrum,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/cb/Electrum.png/revision/latest
   item,钴矿,Cobalt Ore,https://oxygennotincluded.fandom.com/wiki/Cobalt_Ore,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/ae/Cobalt_Ore_%28Spaced_Out%29.png/revision/latest
   item,铀矿,Uranium Ore,https://oxygennotincluded.fandom.com/wiki/Uranium_Ore,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/88/Uranium_Ore.png/revision/latest
   item,铁矿,Iron Ore,https://oxygennotincluded.fandom.com/wiki/Iron_Ore,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/87/Iron_Ore.png/revision/latest
   item,铜矿,Copper Ore,https://oxygennotincluded.fandom.com/wiki/Copper_Ore,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/78/Copper_Ore.png/revision/latest
   item,铝矿,Aluminum Ore,https://oxygennotincluded.fandom.com/wiki/Aluminum_Ore,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/bd/Aluminum_Ore.png/revision/latest
   item,黄铁矿,Pyrite,https://oxygennotincluded.fandom.com/wiki/Pyrite,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/64/Pyrite.png/revision/latest
   item,黑钨矿,Wolframite,https://oxygennotincluded.fandom.com/wiki/Wolframite,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/8d/Wolframite.png/revision/latest
   group,稀有资源,Rare Resource,https://oxygennotincluded.fandom.com/wiki/Category:Rare_Resource
   item,富勒烯,Fullerene,https://oxygennotincluded.fandom.com/wiki/Fullerene,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/16/Fullerene.png/revision/latest
   item,异构树脂,Isoresin,https://oxygennotincluded.fandom.com/wiki/Isoresin,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/02/Isoresin.png/revision/latest
   item,铌,Niobium,https://oxygennotincluded.fandom.com/wiki/Niobium,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/85/Niobium.png/revision/latest
   group,精炼金属,Refined Metal,https://oxygennotincluded.fandom.com/wiki/Category:Refined_Metal
   item,固态汞,Solid Mercury,https://oxygennotincluded.wiki.gg/wiki/Solid_Mercury,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/81/Solid_Mercury.png/revision/latest
   item,贫铀,Depleted Uranium,https://oxygennotincluded.fandom.com/wiki/Depleted_Uranium,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/ab/Depleted_Uranium.png/revision/latest
   item,金,Gold,https://oxygennotincluded.fandom.com/wiki/Gold,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/10/Gold.png/revision/latest
   item,钨,Tungsten,https://oxygennotincluded.fandom.com/wiki/Tungsten,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a3/Tungsten.png/revision/latest
   item,钴,Cobalt,https://oxygennotincluded.fandom.com/wiki/Cobalt,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/26/Cobalt_%28Spaced_Out%29.png/revision/latest
   item,铁,Iron,https://oxygennotincluded.fandom.com/wiki/Iron,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/45/Iron.png/revision/latest
   item,铅,Lead,https://oxygennotincluded.fandom.com/wiki/Lead,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/e8/Lead.png/revision/latest
   item,铜,Copper,https://oxygennotincluded.fandom.com/wiki/Copper,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/12/Copper.png/revision/latest
   item,铝,Aluminum,https://oxygennotincluded.fandom.com/wiki/Aluminum,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/ba/Aluminum.png/revision/latest
   group,其他,Miscellaneous,https://oxygennotincluded.fandom.com/wiki/Category:Miscellaneous
   item,固态核废料,Solid Nuclear Waste,https://oxygennotincluded.fandom.com/wiki/Solid_Nuclear_Waste,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/88/Uranium_Ore.png/revision/latest
   item,堆芯熔融物,Corium,https://oxygennotincluded.fandom.com/wiki/Corium,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a6/Radium.png/revision/latest
   item,深渊晶石,Abyssalite,https://oxygennotincluded.fandom.com/wiki/Abyssalite,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f1/Abyssalite.png/revision/latest
   item,硫,Sulfur,https://oxygennotincluded.fandom.com/wiki/Sulfur,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/1d/Sulfur.png/revision/latest
   item,钻石,Diamond,https://oxygennotincluded.fandom.com/wiki/Diamond,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/ea/Diamond.png/revision/latest
   item,沥青,Bitumen,https://oxygennotincluded.fandom.com/wiki/Bitumen,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/ce/Bitumen.png/revision/latest
   item,遗传生物软泥,Genetic Ooze,https://oxygennotincluded.fandom.com/wiki/Genetic_Ooze,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/8b/Genetic_Ooze.png/revision/latest
   item,镭,Radium,https://oxygennotincluded.fandom.com/wiki/Radium,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a6/Radium.png/revision/latest
   group,特殊品,Special,https://oxygennotincluded.fandom.com/wiki/Category:Special
   item,中子质,Neutronium/Neutrollium,https://oxygennotincluded.fandom.com/wiki/Neutronium,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/3b/Neutronium.png/revision/latest
   item,复合物,Composition,https://oxygennotincluded.fandom.com/zh/wiki/复合物,https://static.wikia.nocookie.net/oxygennotincluded/images/5/5f/真空.png/revision/latest?path-prefix=zh
   item,真空,Vacuum,https://oxygennotincluded.fandom.com/wiki/Vacuum,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/e1/Vacuum.png/revision/latest
   item,虚空,Void,https://oxygennotincluded.fandom.com/wiki/Void,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/e1/The_Void.png/revision/latest


Oxygen Not Included 游戏建筑物 CSV 数据表
======================================================

::

   # label: %name%<br>%english%
   # link: url
   # style: label;image=%image%;html=1;fillColor=#FFCE9F;strokeColor=gray
   # height: 48
   # width: 720
   name,english,url,image
   基地,Base,https://oxygennotincluded.fandom.com/zh/wiki/建筑#基地,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/6c/Base_Menu.png/revision/latest/scale-to-width-down/64
   氧气,Oxygen,https://oxygennotincluded.fandom.com/zh/wiki/建筑#氧气,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/cb/Oxygen_Menu.png/revision/latest/scale-to-width-down/64
   电力,Power,https://oxygennotincluded.fandom.com/zh/wiki/建筑#电力,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/8d/Power_Menu.png/revision/latest/scale-to-width-down/64
   食物,Food,https://oxygennotincluded.fandom.com/zh/wiki/建筑#食物,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/d5/Food_Menu.png/revision/latest/scale-to-width-down/64
   水管,Plumbing,https://oxygennotincluded.fandom.com/zh/wiki/建筑#水管,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/44/Plumbing_Menu.png/revision/latest/scale-to-width-down/64
   通风,Ventilation,https://oxygennotincluded.fandom.com/zh/wiki/建筑#通风,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/73/Ventilation_Menu.png/revision/latest/scale-to-width-down/64
   精炼,Refinement,https://oxygennotincluded.fandom.com/zh/wiki/建筑#精炼,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/6e/Refinement_Menu.png/revision/latest/scale-to-width-down/64
   医疗,Medicine,https://oxygennotincluded.fandom.com/zh/wiki/建筑#医疗,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/ef/Medicine_Menu.png/revision/latest/scale-to-width-down/64
   家具,Furniture,https://oxygennotincluded.fandom.com/zh/wiki/建筑#家具,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/91/Furniture_Menu.png/revision/latest/scale-to-width-down/64
   站台,Stations,https://oxygennotincluded.fandom.com/zh/wiki/建筑#站台,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/e5/Stations_Menu.png/revision/latest/scale-to-width-down/64
   实用,Utilities,https://oxygennotincluded.fandom.com/zh/wiki/建筑#实用,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f4/Utilities_Menu.png/revision/latest/scale-to-width-down/64
   信号,Automation,https://oxygennotincluded.fandom.com/zh/wiki/建筑#信号,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/3f/Automation_Menu.png/revision/latest/scale-to-width-down/64
   运输,Shipping,https://oxygennotincluded.fandom.com/zh/wiki/建筑#运输,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/8b/Shipping_Menu.png/revision/latest/scale-to-width-down/64
   火箭,Rocketry,https://oxygennotincluded.fandom.com/zh/wiki/建筑#火箭,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f0/Rocketry_Menu.png/revision/latest/scale-to-width-down/64
   辐射,Radiation,https://oxygennotincluded.fandom.com/zh/wiki/建筑#辐射,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/d7/Radiation_Menu.png/revision/latest/scale-to-width-down/64

   # label: %name%<br>%english%
   # link: url
   # style: label;image=%image%;html=1;fontSize=8;fillColor=#FFCE9F;strokeColor=gray
   # height: 25
   # width: 145
   # levelspacing: 32
   # nodespacing: 32
   # layout: orgchart
   name,english,url,image
   迷你舱,Mini-Pod,https://oxygennotincluded.fandom.com/wiki/Mini-Pod,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/01/Building_Mini-Pod.png/revision/latest/scale-to-width-down/130
   透气砖,Airflow Tile,https://oxygennotincluded.fandom.com/wiki/Airflow_Tile,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b1/Building_Airflow_Tile.png/revision/latest
   自动卸物箱,Automatic Dispenser,https://oxygennotincluded.fandom.com/wiki/Automatic_Dispenser,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/2c/Building_Automatic_Dispenser.png/revision/latest
   地堡门,Bunker Door,https://oxygennotincluded.fandom.com/wiki/Bunker_Door,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/4b/Building_Bunker_Door.png/revision/latest/scale-to-width-down/130
   地堡砖,Bunker Tile,https://oxygennotincluded.fandom.com/wiki/Bunker_Tile,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/df/Building_Bunker_Tile.png/revision/latest
   地毯砖,Carpeted Tile,https://oxygennotincluded.fandom.com/wiki/Carpeted_Tile,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/e8/Building_Carpeted_Tile.png/revision/latest
   干板墙,Drywall,https://oxygennotincluded.fandom.com/wiki/Drywall,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/7f/Building_Drywall.png/revision/latest
   消防滑杆,Fire Pole,https://oxygennotincluded.fandom.com/wiki/Fire_Pole,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/69/Building_Fire_Pole.png/revision/latest
   储气库,Gas Reservoir,https://oxygennotincluded.fandom.com/wiki/Gas_Reservoir,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/26/Building_Gas_Reservoir.png/revision/latest/scale-to-width-down/130
   隔热砖,Insulated Tile,https://oxygennotincluded.fandom.com/wiki/Insulated_Tile,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/1a/Building_Insulated_Tile.png/revision/latest
   梯子,Ladder,https://oxygennotincluded.fandom.com/wiki/Ladder,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/63/Building_Ladder.png/revision/latest
   储液库,Liquid Reservoir,https://oxygennotincluded.fandom.com/wiki/Liquid_Reservoir,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/cc/Building_Liquid_Reservoir.png/revision/latest
   手动气闸,Manual Airlock,https://oxygennotincluded.fandom.com/wiki/Manual_Airlock,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c2/Building_Manual_Airlock.png/revision/latest
   机械气闸,Mechanized Airlock,https://oxygennotincluded.fandom.com/wiki/Mechanized_Airlock,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/ad/Building_Mechanized_Airlock.png/revision/latest
   网格砖,Mesh Tile,https://oxygennotincluded.fandom.com/wiki/Mesh_Tile,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/bb/Building_Mesh_Tile.png/revision/latest
   金属砖,Metal Tile,https://oxygennotincluded.fandom.com/wiki/Metal_Tile,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b8/Building_Metal_Tile.png/revision/latest
   塑料梯子,Plastic Ladder,https://oxygennotincluded.fandom.com/wiki/Plastic_Ladder,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/e4/Building_Plastic_Ladder.png/revision/latest
   塑料砖,Plastic Tile,https://oxygennotincluded.fandom.com/wiki/Plastic_Tile,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/e7/Building_Plastic_Tile.png/revision/latest
   气动门,Pneumatic Door,https://oxygennotincluded.fandom.com/wiki/Pneumatic_Door,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a6/Building_Pneumatic_Door.png/revision/latest
   智能存储箱,Smart Storage Bin,https://oxygennotincluded.fandom.com/wiki/Smart_Storage_Bin,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f1/Building_Smart_Storage_Bin.png/revision/latest
   存储箱,Storage Bin,https://oxygennotincluded.fandom.com/wiki/Storage_Bin,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/19/Building_Storage_Bin.png/revision/latest
   存储砖,Storage Tile,https://oxygennotincluded.fandom.com/wiki/Storage_Tile,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/9c/Building_Storage_Tile.png/revision/latest
   砖块,Tile,https://oxygennotincluded.fandom.com/wiki/Tile,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/79/Building_Tile.png/revision/latest
   运载管道,Transit Tube,https://oxygennotincluded.fandom.com/wiki/Transit_Tube,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/ad/Building_Transit_Tube.png/revision/latest/scale-to-width-down/130
   运载管道入口,Transit Tube Access,https://oxygennotincluded.fandom.com/wiki/Transit_Tube_Access,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/11/Building_Transit_Tube_Access.png/revision/latest/scale-to-width-down/130
   运载管道渡口,Transit Tube Crossing,https://oxygennotincluded.fandom.com/wiki/Transit_Tube_Crossing,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/6c/Building_Transit_Tube_Crossing.png/revision/latest/scale-to-width-down/130
   窗户砖,Window Tile,https://oxygennotincluded.fandom.com/wiki/Window_Tile,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/31/Building_Window_Tile.png/revision/latest

   # label: %name%<br>%english%
   # link: url
   # style: label;image=%image%;html=1;fontSize=8;fillColor=#FFCE9F;strokeColor=gray
   # height: 25
   # width: 145
   # levelspacing: 32
   # nodespacing: 32
   # layout: orgchart
   name,english,url,image
   藻类箱,Algae Terrarium,https://oxygennotincluded.fandom.com/wiki/Algae_Terrarium,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/73/Building_Algae_Terrarium.png/revision/latest
   碳素脱离器,Carbon Skimmer,https://oxygennotincluded.fandom.com/wiki/Carbon_Skimmer,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/8c/Building_Carbon_Skimmer.png/revision/latest
   空气净化器,Deodorizer,https://oxygennotincluded.fandom.com/wiki/Deodorizer,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/8d/Building_Deodorizer.png/revision/latest
   电解器,Electrolyzer,https://oxygennotincluded.fandom.com/wiki/Electrolyzer,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/10/Building_Electrolyzer.png/revision/latest/scale-to-width-down/130
   氧气扩散器,Oxygen Diffuser,https://oxygennotincluded.fandom.com/wiki/Oxygen_Diffuser,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/28/Building_Oxygen_Diffuser.png/revision/latest
   铁锈脱氧机,Rust Deoxidizer,https://oxygennotincluded.fandom.com/wiki/Rust_Deoxidizer,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/84/Building_Rust_Deoxidizer.png/revision/latest/scale-to-width-down/130
   升华站,Sublimation Station,https://oxygennotincluded.fandom.com/wiki/Sublimation_Station,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/22/Building_Sublimation_Station.png/revision/latest/scale-to-width-down/130

   # label: %name%<br>%english%
   # link: url
   # style: label;image=%image%;html=1;fontSize=8;fillColor=#FFCE9F;strokeColor=gray
   # height: 25
   # width: 145
   # levelspacing: 32
   # nodespacing: 32
   # layout: orgchart
   name,english,url,image
   电池,Battery,https://oxygennotincluded.fandom.com/wiki/Battery,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/73/Building_Battery.png/revision/latest
   煤炭发电机,Coal Generator,https://oxygennotincluded.fandom.com/wiki/Coal_Generator,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b9/Building_Coal_Generator.png/revision/latest
   导线,Conductive Wire,https://oxygennotincluded.fandom.com/wiki/Conductive_Wire,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/47/Building_Conductive_Wire.png/revision/latest
   导线桥,Conductive Wire Bridge,https://oxygennotincluded.fandom.com/wiki/Conductive_Wire_Bridge,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/62/Building_Conductive_Wire_Bridge.png/revision/latest
   高负荷导线接合板,Heavi-Watt Conductive Joint Plate,https://oxygennotincluded.fandom.com/wiki/Heavi-Watt_Conductive_Joint_Plate,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c8/Building_Heavi-Watt_Conductive_Joint_Plate.png/revision/latest/scale-to-width-down/130
   高负荷导线,Heavi-Watt Conductive Wire,https://oxygennotincluded.fandom.com/wiki/Heavi-Watt_Conductive_Wire,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/ed/Building_Heavi-Watt_Conductive_Wire.png/revision/latest
   高负荷电线接合板,Heavi-Watt Joint Plate,https://oxygennotincluded.fandom.com/wiki/Heavi-Watt_Joint_Plate,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/6f/Building_Heavi-Watt_Joint_Plate.png/revision/latest/scale-to-width-down/130
   高负荷电线,Heavi-Watt Wire,https://oxygennotincluded.fandom.com/wiki/Heavi-Watt_Wire,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/0d/Building_Heavi-Watt_Wire.png/revision/latest
   氢气发电机,Hydrogen Generator,https://oxygennotincluded.fandom.com/wiki/Hydrogen_Generator,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a0/Building_Hydrogen_Generator.png/revision/latest
   巨型电池,Jumbo Battery,https://oxygennotincluded.fandom.com/wiki/Jumbo_Battery,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/32/Building_Jumbo_Battery.png/revision/latest
   大型变压器,Large Power Transformer,https://oxygennotincluded.fandom.com/wiki/Large_Power_Transformer,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/94/Building_Large_Power_Transformer.png/revision/latest/scale-to-width-down/130
   人力发电机,Manual Generator,https://oxygennotincluded.fandom.com/wiki/Manual_Generator,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/ee/Building_Manual_Generator.png/revision/latest
   天然气发电机,Natural Gas Generator,https://oxygennotincluded.fandom.com/wiki/Natural_Gas_Generator,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b3/Building_Natural_Gas_Generator.png/revision/latest/scale-to-width-down/130
   石油发电机,Petroleum Generator,https://oxygennotincluded.fandom.com/wiki/Petroleum_Generator,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/ea/Building_Petroleum_Generator.png/revision/latest
   电力截断器,Power Shutoff,https://oxygennotincluded.fandom.com/wiki/Power_Shutoff,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/58/Building_Power_Shutoff.png/revision/latest
   变压器,Power Transformer,https://oxygennotincluded.fandom.com/wiki/Power_Transformer,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/29/Building_Power_Transformer.png/revision/latest
   智能电池,Smart Battery,https://oxygennotincluded.fandom.com/wiki/Smart_Battery,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f3/Building_Smart_Battery.png/revision/latest
   太阳能板,Solar Panel,https://oxygennotincluded.fandom.com/wiki/Solar_Panel,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a5/Building_Solar_Panel.png/revision/latest/scale-to-width-down/130
   蒸汽涡轮机,Steam Turbine,https://oxygennotincluded.fandom.com/wiki/Steam_Turbine,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c6/Building_Steam_Turbine.png/revision/latest/scale-to-width-down/130
   电闸,Switch,https://oxygennotincluded.fandom.com/wiki/Switch,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f1/Building_Switch.png/revision/latest
   电线,Wire,https://oxygennotincluded.fandom.com/wiki/Wire,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/0d/Building_Wire.png/revision/latest
   电线桥,Wire Bridge,https://oxygennotincluded.fandom.com/wiki/Wire_Bridge,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a9/Building_Wire_Bridge.png/revision/latest/scale-to-width-down/130
   木材燃烧器,Wood Burner,https://oxygennotincluded.fandom.com/wiki/Wood_Burner,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b6/Building_Wood_Burner.png/revision/latest/scale-to-width-down/126


   # label: %name%<br>%english%
   # link: url
   # style: label;image=%image%;html=1;fontSize=8;fillColor=#FFCE9F;strokeColor=gray
   # height: 25
   # width: 145
   # levelspacing: 32
   # nodespacing: 32
   # layout: orgchart
   name,english,url,image
   飞行小动物公寓,Airborne Critter Condo,https://oxygennotincluded.fandom.com/wiki/Airborne_Critter_Condo,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/20/Building_Airborne_Critter_Condo.png/revision/latest
   飞行小动物陷阱,Airborne Critter Trap,https://oxygennotincluded.fandom.com/wiki/Airborne_Critter_Trap,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/e1/Building_Airborne_Critter_Trap.png/revision/latest
   小动物公寓,Critter Condo,https://oxygennotincluded.fandom.com/wiki/Critter_Condo,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/64/Building_Critter_Condo.png/revision/latest
   小动物放生点,Critter Drop-Off,https://oxygennotincluded.fandom.com/wiki/Critter_Drop-Off,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/94/Building_Critter_Drop-Off.png/revision/latest
   小动物喂食器,Critter Feeder,https://oxygennotincluded.fandom.com/wiki/Critter_Feeder,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b4/Building_Critter_Feeder.png/revision/latest
   小动物直饮器,Critter Fountain,https://oxygennotincluded.fandom.com/wiki/Critter_Fountain,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/5f/Building_Critter_Fountain.png/revision/latest
   小动物移取点,Critter Pick,https://oxygennotincluded.fandom.com/wiki/Critter_Pick-Up,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/05/Building_Critter_Pick-Up.png/revision/latest
   小动物陷阱,Critter Trap,https://oxygennotincluded.fandom.com/wiki/Critter_Trap,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/bd/Building_Critter_Trap.png/revision/latest/scale-to-width-down/130
   脱水机,Dehydrator,https://oxygennotincluded.fandom.com/wiki/Dehydrator,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/ec/Building_Dehydrator.png/revision/latest
   敲蛋桌,Egg Cracker,https://oxygennotincluded.fandom.com/wiki/Egg_Cracker,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/26/Building_Egg_Cracker.png/revision/latest
   电动烤炉,Electric Grill,https://oxygennotincluded.fandom.com/wiki/Electric_Grill,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f1/Building_Electric_Grill.png/revision/latest
   土培砖,Farm Tile,https://oxygennotincluded.fandom.com/wiki/Farm_Tile,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/7f/Building_Farm_Tile.png/revision/latest
   喂鱼器,Fish Feeder,https://oxygennotincluded.fandom.com/wiki/Fish_Feeder,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f5/Building_Fish_Feeder.png/revision/latest
   鱼类放生点,Fish Release,https://oxygennotincluded.fandom.com/wiki/Fish_Release,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c3/Building_Fish_Release.png/revision/latest
   捕鱼陷阱,Fish Trap,https://oxygennotincluded.fandom.com/wiki/Fish_Trap,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/3a/Building_Fish_Trap.png/revision/latest/scale-to-width-down/94
   燃气灶,Gas Range,https://oxygennotincluded.fandom.com/wiki/Gas_Range,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/d7/Building_Gas_Range.png/revision/latest/scale-to-width-down/130
   液培砖,Hydroponic Farm,https://oxygennotincluded.fandom.com/wiki/Hydroponic_Farm,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c2/Building_Hydroponic_Farm.png/revision/latest
   孵化器,Incubator,https://oxygennotincluded.fandom.com/wiki/Incubator,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/6c/Building_Incubator.png/revision/latest
   食物压制器,Microbe Musher,https://oxygennotincluded.fandom.com/wiki/Microbe_Musher,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/dd/Building_Microbe_Musher.png/revision/latest
   种植箱,Planter Box,https://oxygennotincluded.fandom.com/wiki/Planter_Box,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/72/Building_Planter_Box.png/revision/latest
   口粮箱,Ration Box,https://oxygennotincluded.fandom.com/wiki/Ration_Box,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/20/Building_Ration_Box.png/revision/latest
   冰箱,Refrigerator,https://oxygennotincluded.fandom.com/wiki/Refrigerator,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/29/Building_Refrigerator.png/revision/latest
   充水机,Rehydrator,https://oxygennotincluded.fandom.com/wiki/Rehydrator,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/82/Building_Rehydrator.png/revision/latest
   香料研磨器,Spice Grinder,https://oxygennotincluded.fandom.com/wiki/Spice_Grinder,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/18/Building_Spice_Grinder.png/revision/latest
   水中城堡,Water Fort,https://oxygennotincluded.fandom.com/wiki/Water_Fort,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/35/Building_Water_Fort.png/revision/latest


   # label: %name%<br>%english%
   # link: url
   # style: label;image=%image%;html=1;fontSize=8;fillColor=#FFCE9F;strokeColor=gray
   # height: 25
   # width: 145
   # levelspacing: 32
   # nodespacing: 32
   # layout: orgchart
   name,english,url,image
   空瓶器,Bottle Emptier,https://oxygennotincluded.fandom.com/wiki/Bottle_Emptier,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/95/Building_Bottle_Emptier.png/revision/latest
   导热板,Conduction Panel,https://oxygennotincluded.fandom.com/wiki/Conduction_Panel,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/bc/Building_Conduction_Panel.png/revision/latest/scale-to-width-down/130
   隔热液体管,Insulated Liquid Pipe,https://oxygennotincluded.fandom.com/wiki/Insulated_Liquid_Pipe,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/43/Building_Insulated_Liquid_Pipe.png/revision/latest
   抽水马桶,Lavatory,https://oxygennotincluded.fandom.com/wiki/Lavatory,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c3/Building_Lavatory.png/revision/latest
   液体管桥,Liquid Bridge,https://oxygennotincluded.fandom.com/wiki/Liquid_Bridge,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/e0/Building_Liquid_Bridge.png/revision/latest/scale-to-width-down/130
   液体筛选器,Liquid Filter,https://oxygennotincluded.fandom.com/wiki/Liquid_Filter,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/1f/Building_Liquid_Filter.png/revision/latest/scale-to-width-down/130
   液体计量阀,Liquid Meter Valve,https://oxygennotincluded.fandom.com/wiki/Liquid_Meter_Valve,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/d5/Building_Liquid_Meter_Valve.png/revision/latest
   液体管道,Liquid Pipe,https://oxygennotincluded.fandom.com/wiki/Liquid_Pipe,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/6b/Building_Liquid_Pipe.png/revision/latest
   液体管道元素传感器,Liquid Pipe Element Sensor,https://oxygennotincluded.fandom.com/wiki/Liquid_Pipe_Element_Sensor,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/44/Building_Liquid_Pipe_Element_Sensor.png/revision/latest
   液体管道病菌传感器,Liquid Pipe Germ Sensor,https://oxygennotincluded.fandom.com/wiki/Liquid_Pipe_Germ_Sensor,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f4/Building_Liquid_Pipe_Germ_Sensor.png/revision/latest
   液体管道温度传感器,Liquid Pipe Thermo Sensor,https://oxygennotincluded.fandom.com/wiki/Liquid_Pipe_Thermo_Sensor,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/5f/Building_Liquid_Pipe_Thermo_Sensor.png/revision/latest
   液泵,Liquid Pump,https://oxygennotincluded.fandom.com/wiki/Liquid_Pump,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/1d/Building_Liquid_Pump.png/revision/latest
   液体截断阀,Liquid Shutoff,https://oxygennotincluded.fandom.com/wiki/Liquid_Shutoff,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b5/Building_Liquid_Shutoff.png/revision/latest
   液体调节阀,Liquid Valve,https://oxygennotincluded.fandom.com/wiki/Liquid_Valve,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/7b/Building_Liquid_Valve.png/revision/latest
   排液口,Liquid Vent,https://oxygennotincluded.fandom.com/wiki/Liquid_Vent,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/96/Building_Liquid_Vent.png/revision/latest
   小型液泵,Mini Liquid Pump,https://oxygennotincluded.fandom.com/wiki/Mini_Liquid_Pump,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c7/Building_Mini_Liquid_Pump.png/revision/latest
   户外厕所,Outhouse,https://oxygennotincluded.fandom.com/wiki/Outhouse,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/cc/Building_Outhouse.png/revision/latest
   手压泵,Pitcher Pump,https://oxygennotincluded.fandom.com/wiki/Pitcher_Pump,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/be/Building_Pitcher_Pump.png/revision/latest
   导热液体管,Radiant Liquid Pipe,https://oxygennotincluded.fandom.com/wiki/Radiant_Liquid_Pipe,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/cf/Building_Radiant_Liquid_Pipe.png/revision/latest
   淋浴隔间,Shower,https://oxygennotincluded.fandom.com/wiki/Shower,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c5/Building_Shower.png/revision/latest
   墙排马桶,Wall Toilet,https://oxygennotincluded.fandom.com/wiki/Wall_Toilet,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/4a/Building_Wall_Toilet.png/revision/latest

   # label: %name%<br>%english%
   # link: url
   # style: label;image=%image%;html=1;fontSize=8;fillColor=#FFCE9F;strokeColor=gray
   # height: 25
   # width: 145
   # levelspacing: 32
   # nodespacing: 32
   # layout: orgchart
   name,english,url,image
   空罐器,Canister Emptier,https://oxygennotincluded.fandom.com/wiki/Canister_Emptier,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/8d/Building_Canister_Emptier.png/revision/latest
   罐装器,Canister Filler,https://oxygennotincluded.fandom.com/wiki/Canister_Filler,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/10/Building_Canister_Filler.png/revision/latest/scale-to-width-down/130
   气体管桥,Gas Bridge,https://oxygennotincluded.fandom.com/wiki/Gas_Bridge,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/e1/Building_Gas_Bridge.png/revision/latest/scale-to-width-down/130
   气体筛选器,Gas Filter,https://oxygennotincluded.fandom.com/wiki/Gas_Filter,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/00/Building_Gas_Filter.png/revision/latest/scale-to-width-down/130
   气体计量阀,Gas Meter Valve,https://oxygennotincluded.fandom.com/wiki/Gas_Meter_Valve,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/92/Building_Gas_Meter_Valve.png/revision/latest
   气体管道,Gas Pipe,https://oxygennotincluded.fandom.com/wiki/Gas_Pipe,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/39/Building_Gas_Pipe.png/revision/latest
   气体管道元素传感器,Gas Pipe Element Sensor,https://oxygennotincluded.fandom.com/wiki/Gas_Pipe_Element_Sensor,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/61/Building_Gas_Pipe_Element_Sensor.png/revision/latest
   气体管道病菌传感器,Gas Pipe Germ Sensor,https://oxygennotincluded.fandom.com/wiki/Gas_Pipe_Germ_Sensor,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/9b/Building_Gas_Pipe_Germ_Sensor.png/revision/latest
   气体管道温度传感器,Gas Pipe Thermo Sensor,https://oxygennotincluded.fandom.com/wiki/Gas_Pipe_Thermo_Sensor,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/59/Building_Gas_Pipe_Thermo_Sensor.png/revision/latest
   气泵,Gas Pump,https://oxygennotincluded.fandom.com/wiki/Gas_Pump,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/7b/Building_Gas_Pump.png/revision/latest
   火箭端口汽体装载器,Gas Rocket Port Loader,https://oxygennotincluded.fandom.com/wiki/Gas_Rocket_Port_Loader,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/5b/Building_Gas_Rocket_Port_Loader.png/revision/latest
   火箭端口汽体卸载器,Gas Rocket Port Unloader,https://oxygennotincluded.fandom.com/wiki/Gas_Rocket_Port_Unloader,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/cb/Building_Gas_Rocket_Port_Unloader.png/revision/latest
   气体截断阀,Gas Shutoff,https://oxygennotincluded.fandom.com/wiki/Gas_Shutoff,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/bc/Building_Gas_Shutoff.png/revision/latest
   气体调节阀,Gas Valve,https://oxygennotincluded.fandom.com/wiki/Gas_Valve,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/ed/Building_Gas_Valve.png/revision/latest
   排气口,Gas Vent,https://oxygennotincluded.fandom.com/wiki/Gas_Vent,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/fc/Building_Gas_Vent.png/revision/latest
   高压排气口,High Pressure Gas Vent,https://oxygennotincluded.fandom.com/wiki/High_Pressure_Gas_Vent,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/e7/Building_High_Pressure_Gas_Vent.png/revision/latest
   隔热气体管道,Insulated Gas Pipe,https://oxygennotincluded.fandom.com/wiki/Insulated_Gas_Pipe,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/fa/Building_Insulated_Gas_Pipe.png/revision/latest
   小型气泵,Mini Gas Pump,https://oxygennotincluded.fandom.com/wiki/Mini_Gas_Pump,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/9d/Building_Mini_Gas_Pump.png/revision/latest
   导热气体管道,Radiant Gas Pipe,https://oxygennotincluded.fandom.com/wiki/Radiant_Gas_Pipe,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/24/Building_Radiant_Gas_Pipe.png/revision/latest

   # label: %name%<br>%english%
   # link: url
   # style: label;image=%image%;html=1;fontSize=8;fillColor=#FFCE9F;strokeColor=gray
   # height: 25
   # width: 145
   # levelspacing: 32
   # nodespacing: 32
   # layout: orgchart
   name,english,url,image
   藻类蒸馏器,Algae Distiller,https://oxygennotincluded.fandom.com/wiki/Algae_Distiller,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f2/Building_Algae_Distiller.png/revision/latest
   漂白石料斗,Bleach Stone Hopper,https://oxygennotincluded.fandom.com/wiki/Bleach_Stone_Hopper,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/74/Building_Bleach_Stone_Hopper.png/revision/latest/scale-to-width-down/130
   咸乳蜡收集器,Brackwax Gleaner,https://oxygennotincluded.fandom.com/wiki/Brackwax_Gleaner,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c8/Building_Brackwax_Gleaner.png/revision/latest
   堆肥堆,Compost,https://oxygennotincluded.fandom.com/wiki/Compost,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/6c/Building_Compost.png/revision/latest
   脱盐器,Desalinator,https://oxygennotincluded.fandom.com/wiki/Desalinator,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/6c/Building_Desalinator.png/revision/latest/scale-to-width-down/130
   钻石压机,Diamond Press,https://oxygennotincluded.fandom.com/wiki/Diamond_Press,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c3/Building_Diamond_Press.png/revision/latest/scale-to-width-down/130
   乙醇蒸馏器,Ethanol Distiller,https://oxygennotincluded.fandom.com/wiki/Ethanol_Distiller,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/ad/Building_Ethanol_Distiller.png/revision/latest/scale-to-width-down/130
   肥料合成器,Fertilizer Synthesizer,https://oxygennotincluded.fandom.com/wiki/Fertilizer_Synthesizer,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/1b/Building_Fertilizer_Synthesizer.png/revision/latest/scale-to-width-down/130
   玻璃熔炉,Glass Forge,https://oxygennotincluded.fandom.com/wiki/Glass_Forge,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/15/Building_Glass_Forge.png/revision/latest
   窑炉,Kiln,https://oxygennotincluded.fandom.com/wiki/Kiln,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/74/Building_Kiln.png/revision/latest
   金属精炼器,Metal Refinery,https://oxygennotincluded.fandom.com/wiki/Metal_Refinery,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/73/Building_Metal_Refinery.png/revision/latest
   分子熔炉,Molecular Forge,https://oxygennotincluded.fandom.com/wiki/Molecular_Forge,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/5c/Building_Molecular_Forge.png/revision/latest
   原油精炼器,Oil Refinery,https://oxygennotincluded.fandom.com/wiki/Oil_Refinery,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/98/Building_Oil_Refinery.png/revision/latest/scale-to-width-down/130
   氧石精炼炉,Oxylite Refinery,https://oxygennotincluded.fandom.com/wiki/Oxylite_Refinery,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/95/Building_Oxylite_Refinery.png/revision/latest
   植物粉碎机,Plant Pulverizer,https://oxygennotincluded.fandom.com/wiki/Plant_Pulverizer,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/3c/Building_Plant_Pulverizer.png/revision/latest
   聚合物压塑器,Polymer Press,https://oxygennotincluded.fandom.com/wiki/Polymer_Press,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/0f/Building_Polymer_Press.png/revision/latest
   碎石机,Rock Crusher,https://oxygennotincluded.fandom.com/wiki/Rock_Crusher,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c3/Building_Rock_Crusher.png/revision/latest
   泥浆分离器,Sludge Press,https://oxygennotincluded.fandom.com/wiki/Sludge_Press,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c0/Building_Sludge_Press.png/revision/latest/scale-to-width-down/130
   净水器,Water Sieve,https://oxygennotincluded.fandom.com/wiki/Water_Sieve,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/57/Building_Water_Sieve.png/revision/latest


   # label: %name%<br>%english%
   # link: url
   # style: label;image=%image%;html=1;fontSize=8;fillColor=#FFCE9F;strokeColor=gray
   # height: 25
   # width: 145
   # levelspacing: 32
   # nodespacing: 32
   # layout: orgchart
   name,english,url,image
   配药桌,Apothecary,https://oxygennotincluded.fandom.com/wiki/Apothecary,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/53/Building_Apothecary.png/revision/latest
   除污淋浴隔间,Decontamination Shower,https://oxygennotincluded.fandom.com/wiki/Decontamination_Shower,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/42/Building_Decontamination_Shower.png/revision/latest
   病诊站,Disease Clinic,https://oxygennotincluded.fandom.com/wiki/Disease_Clinic,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/1c/Building_Disease_Clinic.png/revision/latest
   手部消毒站,Hand Sanitizer,https://oxygennotincluded.fandom.com/wiki/Hand_Sanitizer,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/99/Building_Hand_Sanitizer.png/revision/latest
   按摩床,Massage Table,https://oxygennotincluded.fandom.com/wiki/Massage_Table,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/65/Building_Massage_Table.png/revision/latest
   医务站,Sick Bay,https://oxygennotincluded.fandom.com/wiki/Sick_Bay,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/5c/Building_Sick_Bay.png/revision/latest/scale-to-width-down/130
   洗手池,Sink,https://oxygennotincluded.fandom.com/wiki/Sink,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c1/Building_Sink.png/revision/latest
   雅致的纪念碑,Tasteful Memorial,https://oxygennotincluded.fandom.com/wiki/Tasteful_Memorial,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/58/Building_Tasteful_Memorial.png/revision/latest
   分诊床,Triage Cot,https://oxygennotincluded.fandom.com/wiki/Triage_Cot,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b8/Building_Triage_Cot.png/revision/latest/scale-to-width-down/130
   洗手盆,Wash Basin,https://oxygennotincluded.fandom.com/wiki/Wash_Basin,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/31/Building_Wash_Basin.png/revision/latest


   # label: %name%<br>%english%
   # link: url
   # style: label;image=%image%;html=1;fontSize=8;fillColor=#FFCE9F;strokeColor=gray
   # height: 25
   # width: 145
   # levelspacing: 32
   # nodespacing: 32
   # layout: orgchart
   name,english,url,image
   透明花盆,Aero Pot,https://oxygennotincluded.fandom.com/wiki/Aero_Pot,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/61/Building_Aero_Pot.png/revision/latest
   游戏机台,Arcade Cabinet,https://oxygennotincluded.fandom.com/wiki/Arcade_Cabinet,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a2/Building_Arcade_Cabinet.png/revision/latest/scale-to-width-down/130
   沙滩椅,Beach Chair,https://oxygennotincluded.fandom.com/wiki/Beach_Chair,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/89/Building_Beach_Chair.png/revision/latest
   空白画布,Blank Canvas,https://oxygennotincluded.fandom.com/wiki/Blank_Canvas,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a8/Building_Blank_Canvas.png/revision/latest
   吸顶灯,Ceiling Light,https://oxygennotincluded.fandom.com/wiki/Ceiling_Light,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/49/Building_Ceiling_Light.png/revision/latest
   天花板饰件,Ceiling Trim,https://oxygennotincluded.fandom.com/wiki/Ceiling_Trim,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/95/Building_Ceiling_Trim.png/revision/latest
   舒适的床,Comfy Bed,https://oxygennotincluded.fandom.com/wiki/Comfy_Bed,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b2/Building_Comfy_Bed.png/revision/latest/scale-to-width-down/130
   边角饰件,Corner Trim,https://oxygennotincluded.fandom.com/wiki/Corner_Trim,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/34/Building_Corner_Trim.png/revision/latest
   床铺,Cot,https://oxygennotincluded.fandom.com/wiki/Cot,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f5/Building_Cot.png/revision/latest
   浓缩咖啡机,Espresso Machine,https://oxygennotincluded.fandom.com/wiki/Espresso_Machine,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/ee/Building_Espresso_Machine.png/revision/latest/scale-to-width-down/130
   花盆,Flower Pot,https://oxygennotincluded.fandom.com/wiki/Flower_Pot,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/4a/Building_Flower_Pot.png/revision/latest
   垂吊花盆,Hanging Pot,https://oxygennotincluded.fandom.com/wiki/Hanging_Pot,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/5a/Building_Hanging_Pot.png/revision/latest
   热水浴缸,Hot Tub,https://oxygennotincluded.fandom.com/wiki/Hot_Tub,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/29/Building_Hot_Tub.png/revision/latest/scale-to-width-down/130
   冰雕塑块,Ice Block,https://oxygennotincluded.fandom.com/wiki/Ice_Block,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a8/Building_Ice_Block.png/revision/latest
   榨汁机,Juicer,https://oxygennotincluded.fandom.com/wiki/Juicer,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/90/Building_Juicer.png/revision/latest
   点唱机器人,Jukebot,https://oxygennotincluded.fandom.com/wiki/Jukebot,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/2e/Building_Jukebot.png/revision/latest/scale-to-width-down/130
   梯床,Ladder Bed,https://oxygennotincluded.fandom.com/wiki/Ladder_Bed,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f3/Building_Ladder_Bed.png/revision/latest
   电灯,Lamp,https://oxygennotincluded.fandom.com/wiki/Lamp,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/ca/Building_Lamp.png/revision/latest
   风景画布,Landscape Canvas,https://oxygennotincluded.fandom.com/wiki/Landscape_Canvas,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/5f/Building_Landscape_Canvas.png/revision/latest/scale-to-width-down/130
   大型雕塑块,Large Sculpting Block,https://oxygennotincluded.fandom.com/wiki/Large_Sculpting_Block,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/6f/Building_Large_Sculpting_Block.png/revision/latest
   大理石雕塑块,Marble Block,https://oxygennotincluded.fandom.com/wiki/Marble_Block,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/1a/Building_Marble_Block.png/revision/latest
   机械冲浪板,Mechanical Surfboard,https://oxygennotincluded.fandom.com/wiki/Mechanical_Surfboard,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/cb/Building_Mechanical_Surfboard.png/revision/latest
   餐桌,Mess Table,https://oxygennotincluded.fandom.com/wiki/Mess_Table,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/cd/Building_Mess_Table.png/revision/latest/scale-to-width-down/130
   金属雕塑块,Metal Block,https://oxygennotincluded.fandom.com/wiki/Metal_Block,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/39/Building_Metal_Block.png/revision/latest
   丰碑底基,Monument Base,https://oxygennotincluded.fandom.com/wiki/Monument_Base,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/15/Building_Monument_Base.png/revision/latest/scale-to-width-down/130
   丰碑中段,Monument Midsection,https://oxygennotincluded.fandom.com/wiki/Monument_Midsection,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/ef/Building_Monument_Midsection.png/revision/latest/scale-to-width-down/130
   丰碑顶部,Monument Top,https://oxygennotincluded.fandom.com/wiki/Monument_Top,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/8c/Building_Monument_Top.png/revision/latest/scale-to-width-down/130
   公园标识,Park Sign,https://oxygennotincluded.fandom.com/wiki/Park_Sign,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/05/Building_Park_Sign.png/revision/latest
   共线电话,Party Line Phone,https://oxygennotincluded.fandom.com/wiki/Party_Line_Phone,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/31/Building_Party_Line_Phone.png/revision/latest/scale-to-width-down/112
   基座,Pedestal,https://oxygennotincluded.fandom.com/wiki/Pedestal,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/47/Building_Pedestal.png/revision/latest
   肖像画布,Portrait Canvas,https://oxygennotincluded.fandom.com/wiki/Portrait_Canvas,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a9/Building_Portrait_Canvas.png/revision/latest
   桑拿浴室,Sauna,https://oxygennotincluded.fandom.com/wiki/Sauna,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/2f/Building_Sauna.png/revision/latest
   雕塑块,Sculpting Block,https://oxygennotincluded.fandom.com/wiki/Sculpting_Block,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/fe/Building_Sculpting_Block.png/revision/latest
   汽水机,Soda Fountain,https://oxygennotincluded.fandom.com/wiki/Soda_Fountain,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c7/Building_Soda_Fountain.png/revision/latest
   日光灯,Sun Lamp,https://oxygennotincluded.fandom.com/wiki/Sun_Lamp,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/73/Building_Sun_Lamp.png/revision/latest
   垂直风洞,Vertical Wind Tunnel,https://oxygennotincluded.fandom.com/wiki/Vertical_Wind_Tunnel,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/59/Building_Vertical_Wind_Tunnel.png/revision/latest
   墙壁花盆,Wall Pot,https://oxygennotincluded.fandom.com/wiki/Wall_Pot,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/8f/Building_Wall_Pot.png/revision/latest
   饮水机,Water Cooler,https://oxygennotincluded.fandom.com/wiki/Water_Cooler,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/5d/Building_Water_Cooler.png/revision/latest


   # label: %name%<br>%english%
   # link: url
   # style: label;image=%image%;html=1;fontSize=8;fillColor=#FFCE9F;strokeColor=gray
   # height: 25
   # width: 145
   # levelspacing: 32
   # nodespacing: 32
   # layout: orgchart
   name,english,url,image
   工艺品分析站,Artifact Analysis Station,https://oxygennotincluded.fandom.com/wiki/Artifact_Analysis_Station,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/96/Building_Artifact_Analysis_Station.png/revision/latest/scale-to-width-down/130
   气压服检查站,Atmo Suit Checkpoint,https://oxygennotincluded.fandom.com/wiki/Atmo_Suit_Checkpoint,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/6a/Building_Atmo_Suit_Checkpoint.png/revision/latest
   气压服存放柜,Atmo Suit Dock,https://oxygennotincluded.fandom.com/wiki/Atmo_Suit_Dock,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a5/Building_Atmo_Suit_Dock.png/revision/latest
   爆破弹组装机,Blastshot Maker,https://oxygennotincluded.fandom.com/wiki/Blastshot_Maker,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b2/Blastshot_Maker.png/revision/latest/scale-to-width-down/130
   植物分析仪,Botanical Analyzer,https://oxygennotincluded.fandom.com/wiki/Botanical_Analyzer,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/66/Building_Botanical_Analyzer.png/revision/latest/scale-to-width-down/130
   时装翻新器,Clothing Refashionator,https://oxygennotincluded.fandom.com/wiki/Clothing_Refashionator,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a0/Building_Clothing_Refashionator.png/revision/latest/scale-to-width-down/130
   工作台,Crafting Station,https://oxygennotincluded.fandom.com/wiki/Crafting_Station,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/58/Building_Crafting_Station.png/revision/latest
   太空服锻造台,Exosuit Forge,https://oxygennotincluded.fandom.com/wiki/Exosuit_Forge,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/77/Building_Exosuit_Forge.png/revision/latest/scale-to-width-down/130
   农业站,Farm Station,https://oxygennotincluded.fandom.com/wiki/Farm_Station,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/75/Building_Farm_Station.png/revision/latest
   地质调谐仪,Geotuner,https://oxygennotincluded.fandom.com/wiki/Geotuner,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/3a/Building_Geotuner.png/revision/latest/scale-to-width-down/130
   照料站,Grooming Station,https://oxygennotincluded.fandom.com/wiki/Grooming_Station,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/52/Building_Grooming_Station.png/revision/latest
   喷气服检查站,Jet Suit Checkpoint,https://oxygennotincluded.fandom.com/wiki/Jet_Suit_Checkpoint,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f3/Building_Jet_Suit_Checkpoint.png/revision/latest
   喷气服存放柜,Jet Suit Dock,https://oxygennotincluded.fandom.com/wiki/Jet_Suit_Dock,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/06/Building_Jet_Suit_Dock.png/revision/latest
   铅服检查站,Lead Suit Checkpoint,https://oxygennotincluded.fandom.com/wiki/Lead_Suit_Checkpoint,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/09/Building_Lead_Suit_Checkpoint.png/revision/latest
   铅服存放柜,Lead Suit Dock,https://oxygennotincluded.fandom.com/wiki/Lead_Suit_Dock,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f1/Building_Lead_Suit_Dock.png/revision/latest
   材料研究终端,Materials Study Terminal,https://oxygennotincluded.fandom.com/wiki/Materials_Study_Terminal,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a5/Building_Materials_Study_Terminal.png/revision/latest/scale-to-width-down/130
   挤奶站,Milking Station,https://oxygennotincluded.fandom.com/wiki/Milking_Station,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/44/Building_Milking_Station.png/revision/latest
   轨道数据收集实验仪,Orbital Data Collection Lab,https://oxygennotincluded.fandom.com/wiki/Orbital_Data_Collection_Lab,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/62/Building_Orbital_Data_Collection_Lab.png/revision/latest
   氧气面罩检查站,Oxygen Mask Checkpoint,https://oxygennotincluded.fandom.com/wiki/Oxygen_Mask_Checkpoint,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/56/Building_Oxygen_Mask_Checkpoint.png/revision/latest
   氧气面罩存放柜,Oxygen Mask Dock,https://oxygennotincluded.fandom.com/wiki/Oxygen_Mask_Dock,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b4/Building_Oxygen_Mask_Dock.png/revision/latest
   电控站,Power Control Station,https://oxygennotincluded.fandom.com/wiki/Power_Control_Station,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/51/Building_Power_Control_Station.png/revision/latest
   研究站,Research Station,https://oxygennotincluded.fandom.com/wiki/Research_Station,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f4/Building_Research_Station.png/revision/latest
   修剪站,Shearing Station,https://oxygennotincluded.fandom.com/wiki/Shearing_Station,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/0e/Building_Shearing_Station.png/revision/latest
   技能涤除器,Skill Scrubber,https://oxygennotincluded.fandom.com/wiki/Skill_Scrubber,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/ab/Building_Skill_Scrubber.png/revision/latest
   超级计算机,Super Computer,https://oxygennotincluded.fandom.com/wiki/Super_Computer,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/4a/Building_Super_Computer.png/revision/latest
   望远镜,Telescope,https://oxygennotincluded.fandom.com/wiki/Telescope_(Base_Game),https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/9b/Building_Telescope_%28Base_Game%29.png/revision/latest
   纺织机,Textile Loom,https://oxygennotincluded.fandom.com/wiki/Textile_Loom,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/10/Building_Textile_Loom.png/revision/latest/scale-to-width-down/130
   虚拟天象仪,Virtual Planetarium,https://oxygennotincluded.fandom.com/wiki/Virtual_Planetarium,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/0a/Building_Virtual_Planetarium.png/revision/latest/scale-to-width-down/130

   # label: %name%<br>%english%
   # link: url
   # style: label;image=%image%;html=1;fontSize=8;fillColor=#FFCE9F;strokeColor=gray
   # height: 25
   # width: 145
   # levelspacing: 32
   # nodespacing: 32
   # layout: orgchart
   name,english,url,image
   冰冷风扇,Ice-E Fan,https://oxygennotincluded.fandom.com/wiki/Ice-E_Fan,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f3/Building_Ice-E_Fan.png/revision/latest
   制冰机,Ice Maker,https://oxygennotincluded.fandom.com/wiki/Ice_Maker,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/36/Building_Ice_Maker.png/revision/latest
   液体加热器,Liquid Tepidizer,https://oxygennotincluded.fandom.com/wiki/Liquid_Tepidizer,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/6b/Building_Liquid_Tepidizer.png/revision/latest/scale-to-width-down/130
   油井,Oil Well,https://oxygennotincluded.fandom.com/wiki/Oil_Well,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a8/Building_Oil_Well.png/revision/latest/scale-to-width-down/130
   矿石洗涤器,Ore Scrubber,https://oxygennotincluded.fandom.com/wiki/Ore_Scrubber,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/42/Building_Ore_Scrubber.png/revision/latest/scale-to-width-down/130
   空间加热器,Space Heater,https://oxygennotincluded.fandom.com/wiki/Space_Heater,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a6/Building_Space_Heater.png/revision/latest
   扫扫基站,Sweepy Dock,https://oxygennotincluded.fandom.com/wiki/Sweepy_Dock,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/28/Building_Sweepy_Dock.png/revision/latest
   变温板,Tempshift Plate,https://oxygennotincluded.fandom.com/wiki/Tempshift_Plate,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/97/Building_Tempshift_Plate.png/revision/latest
   液温调节器,Thermo Aquatuner,https://oxygennotincluded.fandom.com/wiki/Thermo_Aquatuner,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/5a/Building_Thermo_Aquatuner.png/revision/latest
   温度调节器,Thermo Regulator,https://oxygennotincluded.fandom.com/wiki/Thermo_Regulator,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/1e/Building_Thermo_Regulator.png/revision/latest


   # label: %name%<br>%english%
   # link: url
   # style: label;image=%image%;html=1;fontSize=8;fillColor=#FFCE9F;strokeColor=gray
   # height: 25
   # width: 145
   # levelspacing: 32
   # nodespacing: 32
   # layout: orgchart
   name,english,url,image
   与门,AND Gate,https://oxygennotincluded.fandom.com/wiki/AND_Gate,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c4/Building_AND_Gate.png/revision/latest
   气压传感器,Atmo Sensor,https://oxygennotincluded.fandom.com/wiki/Atmo_Sensor,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/af/Building_Atmo_Sensor.png/revision/latest
   自动化通知器,Automated Notifier,https://oxygennotincluded.fandom.com/wiki/Automated_Notifier,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/38/Building_Automated_Notifier.png/revision/latest
   信号播报器,Automation Broadcaster,https://oxygennotincluded.fandom.com/wiki/Automation_Broadcaster,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/3d/Building_Automation_Broadcaster.png/revision/latest
   信号接收器,Automation Receiver,https://oxygennotincluded.fandom.com/wiki/Automation_Receiver,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a2/Building_Automation_Receiver.png/revision/latest
   信号线组,Automation Ribbon,https://oxygennotincluded.fandom.com/wiki/Automation_Ribbon,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/8f/Building_Automation_Ribbon.png/revision/latest
   信号线组桥,Automation Ribbon Bridge,https://oxygennotincluded.fandom.com/wiki/Automation_Ribbon_Bridge,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/94/Building_Automation_Ribbon_Bridge.png/revision/latest/scale-to-width-down/130
   信号线,Automation Wire,https://oxygennotincluded.fandom.com/wiki/Automation_Wire,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/cf/Building_Automation_Wire.png/revision/latest/scale-to-width-down/130
   信号线桥,Automation Wire Bridge,https://oxygennotincluded.fandom.com/wiki/Automation_Wire_Bridge,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a6/Building_Automation_Wire_Bridge.png/revision/latest/scale-to-width-down/130
   缓冲门,BUFFER Gate,https://oxygennotincluded.fandom.com/wiki/BUFFER_Gate,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/ec/Building_BUFFER_Gate.png/revision/latest
   小动物传感器,Critter Sensor,https://oxygennotincluded.fandom.com/wiki/Critter_Sensor,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/75/Building_Critter_Sensor.png/revision/latest
   周期传感器,Cycle Sensor,https://oxygennotincluded.fandom.com/wiki/Cycle_Sensor,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/30/Building_Cycle_Sensor.png/revision/latest
   复制人检查站,Duplicant Checkpoint,https://oxygennotincluded.fandom.com/wiki/Duplicant_Checkpoint,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b5/Building_Duplicant_Checkpoint.png/revision/latest
   复制人运动传感器,Duplicant Motion Sensor,https://oxygennotincluded.fandom.com/wiki/Duplicant_Motion_Sensor,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a2/Building_Duplicant_Motion_Sensor.png/revision/latest
   过滤门,FILTER Gate,https://oxygennotincluded.fandom.com/wiki/FILTER_Gate,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c3/Building_FILTER_Gate.png/revision/latest
   气体元素传感器,Gas Element Sensor,https://oxygennotincluded.fandom.com/wiki/Gas_Element_Sensor,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/37/Building_Gas_Element_Sensor.png/revision/latest
   病菌传感器,Germ Sensor,https://oxygennotincluded.fandom.com/wiki/Germ_Sensor,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/0d/Building_Germ_Sensor.png/revision/latest
   音槌,Hammer,https://oxygennotincluded.fandom.com/wiki/Hammer,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/04/Building_Hammer.png/revision/latest/scale-to-width-down/130
   液压传感器,Hydro Sensor,https://oxygennotincluded.fandom.com/wiki/Hydro_Sensor,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/49/Building_Hydro_Sensor.png/revision/latest
   光线传感器,Light Sensor,https://oxygennotincluded.fandom.com/wiki/Light_Sensor,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/ac/Building_Light_Sensor.png/revision/latest
   液体元素传感器,Liquid Element Sensor,https://oxygennotincluded.fandom.com/wiki/Liquid_Element_Sensor,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/4b/Building_Liquid_Element_Sensor.png/revision/latest
   锁存器,Memory Toggle,https://oxygennotincluded.fandom.com/wiki/Memory_Toggle,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c2/Building_Memory_Toggle.png/revision/latest/scale-to-width-down/130
   非门,NOT Gate,https://oxygennotincluded.fandom.com/wiki/NOT_Gate,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/86/Building_NOT_Gate.png/revision/latest/scale-to-width-down/130
   或门,OR Gate,https://oxygennotincluded.fandom.com/wiki/OR_Gate,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/8e/Building_OR_Gate.png/revision/latest/scale-to-width-down/130
   像素屏,Pixel Pack,https://oxygennotincluded.fandom.com/wiki/Pixel_Pack,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/e9/Building_Pixel_Pack.png/revision/latest/scale-to-width-down/130
   辐射粒子传感器,Radbolt Sensor,https://oxygennotincluded.fandom.com/wiki/Radbolt_Sensor,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/88/Building_Radbolt_Sensor.png/revision/latest
   辐射传感器,Radiation Sensor,https://oxygennotincluded.fandom.com/wiki/Radiation_Sensor,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b3/Building_Radiation_Sensor.png/revision/latest/scale-to-width-down/130
   线组读取器,Ribbon Reader,https://oxygennotincluded.fandom.com/wiki/Ribbon_Reader,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/cc/Building_Ribbon_Reader.png/revision/latest/scale-to-width-down/130
   线组写入器,Ribbon Writer,https://oxygennotincluded.fandom.com/wiki/Ribbon_Writer,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/01/Building_Ribbon_Writer.png/revision/latest/scale-to-width-down/130
   信号计数器,Signal Counter,https://oxygennotincluded.fandom.com/wiki/Signal_Counter,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/2e/Building_Signal_Counter.png/revision/latest
   信号分配器,Signal Distributor,https://oxygennotincluded.fandom.com/wiki/Signal_Distributor,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a6/Building_Signal_Distributor.png/revision/latest
   信号选择器,Signal Selector,https://oxygennotincluded.fandom.com/wiki/Signal_Selector,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/ff/Building_Signal_Selector.png/revision/latest
   信号开关,Signal Switch,https://oxygennotincluded.fandom.com/wiki/Signal_Switch,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f7/Building_Signal_Switch.png/revision/latest
   太空扫描仪,Space Scanner,https://oxygennotincluded.fandom.com/wiki/Space_Scanner,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/14/Building_Space_Scanner.png/revision/latest
   温度传感器,Thermo Sensor,https://oxygennotincluded.fandom.com/wiki/Thermo_Sensor,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/3c/Building_Thermo_Sensor.png/revision/latest
   时间传感器,Timer Sensor,https://oxygennotincluded.fandom.com/wiki/Timer_Sensor,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b2/Building_Timer_Sensor.png/revision/latest
   功率传感器,Wattage Sensor,https://oxygennotincluded.fandom.com/wiki/Wattage_Sensor,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/9c/Building_Wattage_Sensor.png/revision/latest
   压力板,Weight Plate,https://oxygennotincluded.fandom.com/wiki/Weight_Plate,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/ac/Building_Weight_Plate.png/revision/latest
   异或门,XOR Gate,https://oxygennotincluded.fandom.com/wiki/XOR_Gate,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/81/Building_XOR_Gate.png/revision/latest/scale-to-width-down/130


   # label: %name%<br>%english%
   # link: url
   # style: label;image=%image%;html=1;fontSize=8;fillColor=#FFCE9F;strokeColor=gray
   # height: 25
   # width: 145
   # levelspacing: 32
   # nodespacing: 32
   # layout: orgchart
   name,english,url,image
   自动清扫器,Auto-Sweeper,https://oxygennotincluded.fandom.com/wiki/Auto-Sweeper,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c8/Building_Auto-Sweeper.png/revision/latest/scale-to-width-down/130
   运输轨桥,Conveyor Bridge,https://oxygennotincluded.fandom.com/wiki/Conveyor_Bridge,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/11/Building_Conveyor_Bridge.png/revision/latest/scale-to-width-down/130
   轨道滑槽,Conveyor Chute,https://oxygennotincluded.fandom.com/wiki/Conveyor_Chute,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/9f/Building_Conveyor_Chute.png/revision/latest
   运输装载器,Conveyor Loader,https://oxygennotincluded.fandom.com/wiki/Conveyor_Loader,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/8a/Building_Conveyor_Loader.png/revision/latest
   轨道计量器,Conveyor Meter,https://oxygennotincluded.fandom.com/wiki/Conveyor_Meter,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/40/Building_Conveyor_Meter.png/revision/latest
   运输轨道,Conveyor Rail,https://oxygennotincluded.fandom.com/wiki/Conveyor_Rail,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/55/Building_Conveyor_Rail.png/revision/latest
   运输轨道元素传感器,Conveyor Rail Element Sensor,https://oxygennotincluded.fandom.com/wiki/Conveyor_Rail_Element_Sensor,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b2/Building_Conveyor_Rail_Element_Sensor.png/revision/latest
   运输轨道病菌传感器,Conveyor Rail Germ Sensor,https://oxygennotincluded.fandom.com/wiki/Conveyor_Rail_Germ_Sensor,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/6b/Building_Conveyor_Rail_Germ_Sensor.png/revision/latest
   运输轨道温度传感器,Conveyor Rail Thermo Sensor,https://oxygennotincluded.fandom.com/wiki/Conveyor_Rail_Thermo_Sensor,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/88/Building_Conveyor_Rail_Thermo_Sensor.png/revision/latest
   运输存放器,Conveyor Receptacle,https://oxygennotincluded.fandom.com/wiki/Conveyor_Receptacle,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/d7/Building_Conveyor_Receptacle.png/revision/latest
   轨道截断器,Conveyor Shutoff,https://oxygennotincluded.fandom.com/wiki/Conveyor_Shutoff,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/19/Building_Conveyor_Shutoff.png/revision/latest
   自动采矿机,Robo-Miner,https://oxygennotincluded.fandom.com/wiki/Robo-Miner,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/9c/Building_Robo-Miner.png/revision/latest/scale-to-width-down/130
   固体筛选器,Solid Filter,https://oxygennotincluded.fandom.com/wiki/Solid_Filter,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/4f/Building_Solid_Filter.png/revision/latest/scale-to-width-down/130


   # label: %name%<br>%english%
   # link: url
   # style: label;image=%image%;html=1;fontSize=8;fillColor=#FFCE9F;strokeColor=gray
   # height: 25
   # width: 145
   # levelspacing: 32
   # nodespacing: 32
   # layout: orgchart
   name,english,url,image
   生物货舱,Biological Cargo Bay,https://oxygennotincluded.fandom.com/wiki/Biological_Cargo_Bay,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/d2/Building_Biological_Cargo_Bay.png/revision/latest
   货舱,Cargo Bay,https://oxygennotincluded.fandom.com/wiki/Cargo_Bay,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/ea/Building_Cargo_Bay.png/revision/latest/scale-to-width-down/130
   指挥舱,Command Capsule,https://oxygennotincluded.fandom.com/wiki/Command_Capsule,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/fc/Building_Command_Capsule.png/revision/latest/scale-to-width-down/130
   运输装载配件,Conveyor Loader Fitting,https://oxygennotincluded.fandom.com/wiki/Conveyor_Loader_Fitting,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/96/Building_Conveyor_Loader_Fitting.png/revision/latest/scale-to-width-down/130
   运输存放配件,Conveyor Receptacle Fitting,https://oxygennotincluded.fandom.com/wiki/Conveyor_Receptacle_Fitting,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/57/Building_Conveyor_Receptacle_Fitting.png/revision/latest/scale-to-width-down/130
   隔绝式望远镜,Enclosed Telescope,https://oxygennotincluded.fandom.com/wiki/Enclosed_Telescope,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/9b/Building_Telescope_%28Base_Game%29.png/revision/latest
   通行支架,Gantry,https://oxygennotincluded.fandom.com/wiki/Gantry,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b4/Building_Gantry.png/revision/latest/scale-to-width-down/130
   气罐货舱,Gas Cargo Canister,https://oxygennotincluded.fandom.com/wiki/Gas_Cargo_Canister,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/30/Building_Gas_Cargo_Canister.png/revision/latest
   气体输入配件,Gas Intake Fitting,https://oxygennotincluded.fandom.com/wiki/Gas_Intake_Fitting,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/d8/Building_Gas_Intake_Fitting.png/revision/latest/scale-to-width-down/130
   气体输出配件,Gas Output Fitting,https://oxygennotincluded.fandom.com/wiki/Gas_Output_Fitting,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/45/Building_Gas_Output_Fitting.png/revision/latest/scale-to-width-down/130
   火箭端口气体装载器,Gas Rocket Port Loader,https://oxygennotincluded.fandom.com/wiki/Gas_Rocket_Port_Loader,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/5b/Building_Gas_Rocket_Port_Loader.png/revision/latest
   火箭端口气体卸载器,Gas Rocket Port Unloader,https://oxygennotincluded.fandom.com/wiki/Gas_Rocket_Port_Unloader,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/cb/Building_Gas_Rocket_Port_Unloader.png/revision/latest
   液氢引擎,Hydrogen Engine,https://oxygennotincluded.fandom.com/wiki/Hydrogen_Engine,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/cd/Building_Hydrogen_Engine.png/revision/latest/scale-to-width-down/130
   星际发射器,Interplanetary Launcher,https://oxygennotincluded.fandom.com/wiki/Interplanetary_Launcher,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b6/Building_Interplanetary_Launcher.png/revision/latest
   液缸货舱,Liquid Cargo Tank,https://oxygennotincluded.fandom.com/wiki/Liquid_Cargo_Tank,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/c1/Building_Liquid_Cargo_Tank.png/revision/latest
   液缸燃料舱,Liquid Fuel Tank,https://oxygennotincluded.fandom.com/wiki/Liquid_Fuel_Tank,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/df/Building_Liquid_Fuel_Tank.png/revision/latest
   液体输入配件,Liquid Intake Fitting,https://oxygennotincluded.fandom.com/wiki/Liquid_Intake_Fitting,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/8b/Building_Liquid_Intake_Fitting.png/revision/latest/scale-to-width-down/130
   液体输出配件,Liquid Output Fitting,https://oxygennotincluded.fandom.com/wiki/Liquid_Output_Fitting,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/2b/Building_Liquid_Output_Fitting.png/revision/latest/scale-to-width-down/130
   液体氧化剂舱,Liquid Oxidizer Tank,https://oxygennotincluded.fandom.com/wiki/Liquid_Oxidizer_Tank,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b7/Building_Liquid_Oxidizer_Tank.png/revision/latest
   火箭端口液体装载器,Liquid Rocket Port Loader,https://oxygennotincluded.fandom.com/wiki/Liquid_Rocket_Port_Loader,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/77/Building_Liquid_Rocket_Port_Loader.png/revision/latest
   火箭端口液体卸载器,Liquid Rocket Port Unloader,https://oxygennotincluded.fandom.com/wiki/Liquid_Rocket_Port_Unloader,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/d7/Building_Liquid_Rocket_Port_Unloader.png/revision/latest
   流星爆破炮,Meteor Blaster,https://oxygennotincluded.fandom.com/wiki/Meteor_Blaster,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/d3/Meteor_Blaster.png/revision/latest
   航天指挥站,Mission Control Station,https://oxygennotincluded.fandom.com/wiki/Mission_Control_Station,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/9e/Building_Mission_Control_Station.png/revision/latest/scale-to-width-down/130
   载货拆包器,Payload Opener,https://oxygennotincluded.fandom.com/wiki/Payload_Opener,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/de/Building_Payload_Opener.png/revision/latest/scale-to-width-down/130
   石油引擎,Petroleum Engine,https://oxygennotincluded.fandom.com/wiki/Petroleum_Engine,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b1/Building_Petroleum_Engine.png/revision/latest/scale-to-width-down/130
   电源插座配件,Power Outlet Fitting,https://oxygennotincluded.fandom.com/wiki/Power_Outlet_Fitting,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/76/Building_Power_Outlet_Fitting.png/revision/latest/scale-to-width-down/130
   研究舱,Research Module,https://oxygennotincluded.fandom.com/wiki/Research_Module,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/35/Building_Research_Module.png/revision/latest/scale-to-width-down/130
   火箭控制台,Rocket Control Station,https://oxygennotincluded.fandom.com/wiki/Rocket_Control_Station,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/d1/Building_Rocket_Control_Station.png/revision/latest/scale-to-width-down/130
   火箭平台,Rocket Platform,https://oxygennotincluded.fandom.com/wiki/Rocket_Platform,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/61/Building_Rocket_Platform.png/revision/latest/scale-to-width-down/130
   火箭端口延伸桥,Rocket Port Extension,https://oxygennotincluded.fandom.com/wiki/Rocket_Port_Extension,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/2c/Building_Rocket_Port_Extension.png/revision/latest
   观光舱,Sight-Seeing Module,https://oxygennotincluded.fandom.com/wiki/Sight-Seeing_Module,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/6a/Building_Sight-Seeing_Module.png/revision/latest
   固体燃料推进器,Solid Fuel Thruster,https://oxygennotincluded.fandom.com/wiki/Solid_Fuel_Thruster,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/3c/Building_Solid_Fuel_Thruster.png/revision/latest/scale-to-width-down/130
   固体氧化剂舱,Solid Oxidizer Tank,https://oxygennotincluded.fandom.com/wiki/Solid_Oxidizer_Tank,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/5/51/Building_Solid_Oxidizer_Tank.png/revision/latest
   火箭端口固体装载器,Solid Rocket Port Loader,https://oxygennotincluded.fandom.com/wiki/Solid_Rocket_Port_Loader,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b5/Building_Solid_Rocket_Port_Loader.png/revision/latest
   火箭端口固体卸载器,Solid Rocket Port Unloader,https://oxygennotincluded.fandom.com/wiki/Solid_Rocket_Port_Unloader,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/7e/Building_Solid_Rocket_Port_Unloader.png/revision/latest
   星图位置传感器,Starmap Location Sensor,https://oxygennotincluded.fandom.com/wiki/Starmap_Location_Sensor,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/fd/Building_Starmap_Location_Sensor.png/revision/latest
   蒸汽引擎,Steam Engine,https://oxygennotincluded.fandom.com/wiki/Steam_Engine,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/76/Building_Steam_Engine.png/revision/latest/scale-to-width-down/130
   定位信标,Targeting Beacon,https://oxygennotincluded.fandom.com/wiki/Targeting_Beacon,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/10/Building_Targeting_Beacon.png/revision/latest
   望远镜,Telescope,https://oxygennotincluded.fandom.com/wiki/Telescope_(Spaced_Out),https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/9d/Building_Telescope_%28Spaced_Out%29.png/revision/latest


   # label: %name%<br>%english%
   # link: url
   # style: label;image=%image%;html=1;fontSize=8;fillColor=#FFCE9F;strokeColor=gray
   # height: 25
   # width: 145
   # levelspacing: 32
   # nodespacing: 32
   # layout: orgchart
   name,english,url,image
   人力辐射粒子发生器,Manual Radbolt Generator,https://oxygennotincluded.fandom.com/wiki/Manual_Radbolt_Generator,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/2/2c/Building_Manual_Radbolt_Generator.png/revision/latest
   辐射粒子蓄存器,Radbolt Chamber,https://oxygennotincluded.fandom.com/wiki/Radbolt_Chamber,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a1/Building_Radbolt_Chamber.png/revision/latest
   辐射粒子发生器,Radbolt Generator,https://oxygennotincluded.fandom.com/wiki/Radbolt_Generator,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/fc/Building_Radbolt_Generator.png/revision/latest
   辐射粒子接合板,Radbolt Joint Plate,https://oxygennotincluded.fandom.com/wiki/Radbolt_Joint_Plate,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/4/43/Building_Radbolt_Joint_Plate.png/revision/latest/scale-to-width-down/130
   辐射粒子变向器,Radbolt Reflector,https://oxygennotincluded.fandom.com/wiki/Radbolt_Reflector,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/e/e4/Building_Radbolt_Reflector.png/revision/latest
   辐射灯,Radiation Lamp,https://oxygennotincluded.fandom.com/wiki/Radiation_Lamp,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/6/6f/Building_Radiation_Lamp.png/revision/latest
   研究性反应堆,Research Reactor,https://oxygennotincluded.fandom.com/wiki/Research_Reactor,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/bc/Building_Research_Reactor.png/revision/latest
   铀素离心机,Uranium Centrifuge,https://oxygennotincluded.fandom.com/wiki/Uranium_Centrifuge,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/72/Building_Uranium_Centrifuge.png/revision/latest


   # label: %name%<br>%english%
   # link: url
   # style: label;image=%image%;html=1;fontSize=8;fillColor=#FFCE9F;strokeColor=gray
   # height: 25
   # width: 145
   # levelspacing: 32
   # nodespacing: 32
   # layout: orgchart
   name,english,url,image
   打印舱,Printing Pod,https://oxygennotincluded.fandom.com/wiki/Printing_Pod,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/b/b9/Printing_Pod.png
   反熵热量中和器,Anti Entropy Thermo-Nullifier,https://oxygennotincluded.fandom.com/wiki/Anti_Entropy_Thermo-Nullifier,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/3a/Anti_Entropy_Thermo-Nullifier.png/revision/latest
   神经振荡仪,Neural Vacillator,https://oxygennotincluded.fandom.com/wiki/Neural_Vacillator,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/1b/Neural_Vacillator.png/revision/latest/scale-to-width-down/130
   自动贩卖机,Vending Machine,https://oxygennotincluded.fandom.com/wiki/Vending_Machine,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/d/d3/Vending_Machine.png/revision/latest
   储物柜,Locker,https://oxygennotincluded.fandom.com/wiki/Locker,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/1/19/Locker.png/revision/latest
   计算机工作台,Computer Desk,https://oxygennotincluded.fandom.com/wiki/Computer_Desk,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/0f/Computer_Desk.png/revision/latest/scale-to-width-down/130
   桌子,Table,https://oxygennotincluded.fandom.com/wiki/Table,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/a/a5/Table.png/revision/latest/scale-to-width-down/130
   安全门,Security Door,https://oxygennotincluded.fandom.com/wiki/Security_Door,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/7/7c/Security_Door.png/revision/latest
   灯具,Light Fixture,https://oxygennotincluded.fandom.com/wiki/Light_Fixture,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/f/f0/Light_Fixture.png/revision/latest
   传送接收器,Teleporter Receiver,https://oxygennotincluded.fandom.com/wiki/Teleporter_Receiver,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/3/3e/Teleporter_Receiver.png/revision/latest
   传送发射器,Teleporter Transmitter,https://oxygennotincluded.fandom.com/wiki/Teleporter_Transmitter,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/0/06/Teleporter_Transmitter.png/revision/latest
   供给传送器输出端,Supply Teleporter Output,https://oxygennotincluded.fandom.com/wiki/Supply_Teleporter_Output,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/8/87/Supply_Teleporter_Output.png/revision/latest/scale-to-width-down/130
   供给传送器输入端,Supply Teleporter Input,https://oxygennotincluded.fandom.com/wiki/Supply_Teleporter_Input,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/c/cb/Supply_Teleporter_Input.png/revision/latest/scale-to-width-down/130
   低温箱3000,Cryotank 3000,https://oxygennotincluded.fandom.com/wiki/Cryotank_3000,https://static.wikia.nocookie.net/oxygennotincluded_gamepedia_en/images/9/9f/Cryotank_3000.png/revision/latest



Diagrams and Connectors
=======================

   Draw.io 中的图表（Diagrams）是一个非常泛的概念，可以指各种图形（Sahpes），也可以指各种图形
   组成的分组（Groups）。但是用户只需要区分两个最基本的概念：图表（Diagrams）、联接器（Connectors）。
   它们的一大区别是，联接器代表的图表之间起联接作用的线条、箭头，它本身不可以被联接。也就是鼠标悬停
   在联接器上方时不会出现箭头提示，而图表对象会有箭头提示用户创建联接器，这就是两者的最基本区别。

   图表一般也对应文档中的 `<mxCell>` 节点，这里说节点（Node）是指文档中的标签树状结构中的标签。
   在图论（graph theory），也就是 mxGraph 算法处理中也有节点的概念（Vertex），这里说的节点/顶点
   是指“图”（graph）这种数据结构中的一点，顶点通过边（edge）进行联接。根据联接关系的不同，可以形成
   多种图结构，无向图 (undirected graph)，有向图 (directed graph)，混合图 (mixed graph) 等。
   图论著名问题是七桥问题，说河心有两独立的小岛，有七座桥分别从岸边通向小岛，或者从小岛间通行。问题是，
   有没有办法每座桥都走遍，并且每座桥只能走一次，然后回到出发点位置。答案是不能。解答这个问题研究过程
   促使图论的形成。

   图论中的顶点可以是指代某种事物的抽象模型，边与顶点联接代表了某种关系。如果边是有向的边，那么图
   就是有向图。就上面的具体问题来说，小岛、桥对应图论中的顶点、边，两点连线代表两小岛间通行的桥梁。
   在另外一些问题的研究中，边还可以有长度，可以用来指代路程，也可以指代网络路由的路径。Dijkstra
   提的 A* 寻路算法就是基于图论的著名算法。

   *  `浙大王树森 图数据结构和算法 <https://space.bilibili.com/1369507485/channel/collectiondetail?sid=761574>`__
   *  `An introduction to graph theory by Darij Grinberg <https://arxiv.org/pdf/2308.04512>`__
       (Text for Math 530 in Spring 2022 at Drexel University)
   *  `Reinhard Diestel - Graph Theory Electronic Edition 2005 <https://www.maths.ed.ac.uk/~v1ranick/papers/diestel1.pdf>`__
   *  `Graph Theory and Its Applications - Crystal Egbunike and Wintana Tewolde  <https://math.mit.edu/research/highschool/primes/circle/documents/2022/Crystal%20&%20Wintana.pdf>`__
   *  ` <https://www.brianheinold.net/notes/A_Simple_Introduction_to_Graph_Theory_Heinold.pdf>`__

   Draw.io 和 SVG 都支持元素分组功能，分组是管理图形的基本方法，分组管理的图形还可以作为草图模板
   使用，只需要将它们添加到 Scratchpad 面板中，就可以在 SVG 图像中重复使用。Draw.io 基于 SVG
   和 HTML/CSS 技术绘制图表，所以掌握这些内容会有助于使用 darw.io 绘制图形。

   Scratchpad 面板中的图形会经由 `StorageFile` 调用浏览器的 `localStorage` API 进行存取。
   
   最新的 Draw.io v24.7.5 桌面版已经支持用户创建自定义模板库，只需要打开 Shapes 面板，再点击
   New Library 或者 Open Library 就可以创建新模板库或者加载现有的 XML 文件。只是目前还不会
   自动保存，通过拖放添加模板内容时需要用户手动保存模板库文件。如果是通过点击模板编辑按钮（铅笔图标）
   对模板进行编辑，则可以直接在编辑后保存。但是这种方式也有一个问题，就是在重新打开 draw.io 编辑器
   后依然会提示保存的路径。模板库中的图表使用 `<mxlibrary>` 节点保存经过 JSON 编码后的 XML 文档
   数据。以下代码片段就是一个保存有两个图表的模板库文件（内容有省略）：

   .. code:: xml

      <mxlibrary>[
      {
         "xml": "&lt;mxGraphModel&gt;&lt;root&gt;&lt;mxCell id=\"0\"/&gt;...&lt;/mxGraphModel&gt;",
         "w": 639.9999999999997,
         "h": 369.9999999999999
      },
      {
         "xml": "...",
         "w": 590,
         "h": 60
      }
      ]</mxlibrary>

   除了 JSON 编辑外，当用户从模板库的图表拖放图表到画布上时，还会经过另层处理，就是所有图表的 ID
   值会重新计算分配。否则多个按同样的模板在画布上创建多个图表时，ID 就会冲突。这就会导致一个问题，
   内容链接等需要关联 ID 的功能就会失效。通过 ID 得新分配后，模板上的内容链接设置的数据不会被修改，
   与 ID 关联的功能就不能正常使用。同样 tags 标记属性也不会进行处理，也就是创建模板时归属于什么
   tags 的图表，会原样地从模板中再恢复到画布。因此，关联 tags 进行的内容链接功能依然可用于模板。

   *  `diagrams.net Libraries <https://github.com/jgraph/drawio-libs>`
   *  `Use a custom shape library from the web <https://www.drawio.com/blog/public-custom-libraries>`

   Draw.io 最主要的绘图功能之一是可以自动的连接线，这些指示线也称为联接器（Connectors），有两类，
   每条指示线都可以同时使用这两种类型，一端是浮动式的，另一端可以是固定式的。当然鼠标悬停在图形上方，
   就会在四边出现箭头提示用户创建联接器。draw.io 还可以在用户克隆图形、拖放图形时自动创建联接器。
   如果激活了 Extras > Copy on Connect 功能，则会在创建联接时自动复制当前联接的图形：

   *  ``Floating connectors`` move around the perimeter of the shape.
   *  ``Fixed connectors`` stay attached to fixed points on your shape.

   当鼠标悬停在图表上方、没并选择图表对象时，会使用 x 标记指示固定的联接点，用户可以拖曳创建联接，
   这些固定联接点可以随时通过样式面板或者右键菜单修改： Edit -> Edit Connection Points...。
   联接点数据保存在 `<mxCell>` 的样式属性中，比如 `points=[[0.52,0.1,0,2,3]];` 表示一个联
   接点，5 个数值分别是 dx、dy 偏移百分比（52% 和 10%），后面是 x、y 方向修正量（2pt 和 3pt）。

   浮动联接与固定联接的区别在于，创建联接后，如果图表后续移动了位置，那么固定联接会保持线条的端点
   始终固定在指定的联接点上。如果希望创建浮动联接，只需要在创建联接时拖动联接箭头到图表内部，而不是
   固定联接点所在的边界上。只需注意图表边框会出现高亮绿色、蓝色的指示状态，绿色表示 Fixed。

   总的来说，创建图表间的联接有多种方法：

   *  激活 Settings -> Copy on Connect，这样拖动联接提示箭头时就会自动创建当前联接的图表；
   *  在未选择图表对象的前提下，鼠标悬停在图表上会显示 X 字样的联接点，再从这些点拖出联接线；
   *  选择图表后，在出现的联接箭头上悬停，待出现备选的图表时，从其中选择一个需要图表进行联接；
   *  为了画布中现有的图表创建联接，只需要在其中一方的提示箭头拖动到需要联接的图表所在位置即可；
   *  Shapes (Ctrl+Shift+K) 模板库中拖放图表到需要联接的图表的指示箭头，拖放到中心的🔁图标上替换它；

   还只可以使用键盘的方向键 Alt+Shift+Cursor 来快速创建联接图表，并且编辑器会自动将当前联接方向上
   的图表联接起来，而不必使用鼠标移动到指定的图表上，期间可以随意选择需要使用的模板图表。Cursor keys
   也就是键盘的四个方向键。配合快捷键可以快速为不同节点创建子节点，配合顶点选择、连线选择功能，可以为
   批量的图形设置统一的样式属性。Draw.io 提供了比较丰富的节点选择功能：所有层级子节点、子节点、同级、
   这些都可以单独进行选择。结合连线、顶点选择功能和区域反选，图层分层，可以很方便选择特定类型的图形：

   ::

      Alt+Shift+Cursor           Clone and connect

      (Shift+)Tab                Select next / previous
      Alt+Shift+P / Alt+Tab      Select parent
      Alt+Shift+X / C / S        Select (all) children / siblings
      Ctrl+Shift+I / E           Select vertices / edges

      Alt+Drag                   Start selection / Select intersection
      Ctrl+(Shift+)A             Select all / none
      Ctrl / Shift+Select / Drag Toggle selection state
      Alt+Click                  Select cell below
   
   使用粘贴功能时，被粘贴的图形定位有三种形式：使用外部数据时，例如文本，坐标会对齐到当前鼠标的位置，
   如果鼠标不在画布上，则会对齐到屏幕左上角为原点并逐次增加一个偏移量。如果使用画布中复制下来的图形，
   那么粘贴位置将对齐原位置并添加一个偏移量。第三种就是将内容粘贴并替换到当前选中图形的内容。

   创建联接后，就可以选择指示线修改它的样，包括线条的标签文字、色彩、箭头类型，直线、曲线、折线等等。
   使用线条右键菜单 Add Waypoint 给联接线添加航点以明确它在图表中的位置关系，或者直接拖动现有航点。
   对于多余的点，可以使用右键菜单 Remove Waypont 移除它。

   Draw.io 的图层功能会影响一些联接线的效果，虽然不同图层的图表可以建立联接，但是对于使用了跳线
   功能 Line Jumps (jumpStyle) 的联接线，如果其它与跳线相交的处于上层（文档节点树中靠近结尾），
   那么跳线就没交叉线的效果。通过调整图层顺序，让使用了跳线功能的联接线位于其它图层之上，这样跳线
   就会在遇到其它联接线时出现跳跃并跨过去了效果。

   Drwa.io 提供了非常易用的克隆功能，只需要按下 Ctrl 键同时鼠标拖动图表、联接器即可以完成复制操作。

   Draw.io 支持非常易用的选择功能，一般通过鼠标框选要编辑、设置属性的图形，只有完全处于选择框内部
   的图形才会被选中。配合 Alt 可以切换为触碰式框选，只要图形与选框接触就会被选中，配合 Shift 可以
   切换选择状态，选定图形后进行批量的图形属性修改。draw.io 的选择功能是基于 XML 节点层次关系思维
   设计的，选定一个图形，然后就可以以此作为参考，后续选择父级、子级、同级节点，详情参考官方文档 
   `draw.io` 以及快捷键参考卡 `Keyboard Shortcuts <https://app.diagrams.net/shortcuts.svg>`__

   ============================ =============================================
   (Shift+)Tab                  Select next / previous
   Alt+Shift+P / Alt+Tab        Select parent
   Alt+Shift+X / C / S          Select (all) children / siblings
   Alt+Drag                     Start selection / Select intersection
   Ctrl+(Shift+)A               Select all / none
   Ctrl+Shift+I / E             Select vertices / edges
   Ctrl / Shift+Select / Drag   Toggle selection state
   Alt+Click                    Select cell below
   ============================ =============================================

   Draw.io 支持 SVG 的视图映射功能，这样可以实现图形分页功能，也可以通过连接功能切换分页或标记内容。
   标记（Tags）和图层（Layers）都是图形内容的管理形式。通过给特定图形打标记，然后就可以通过标记设置
   面板来控制相应的图形是否要显示。图层也具有同样的功能，但是图层直接管理 SVG 文件中的节点数据，如果
   删除图层，那么图层内的图形数据就会一并删除。技术上来说，SVG 提供的 ``<g>`` 标签可以用于实现图层
   功能，SVG ViewBox 可以实现分页功能。Draw.io 默认会创建一个背景的图层（Background），用户可以
   随时添加更多图层或者修改。用户可以透选各个图层上的图形，剪切后再粘贴就可以将图形从原图层上转移到当前
   选中的图层上。或者点击图层面板上的三个竖起的点的图标，将选择的图形移动到指定图层。技术上来说，这种
   移动就是将图形从一个 ``<g>`` 节点内移动到另一个 ``<g>`` 节点内。Draw.io 本身使用的是 mxGraph
   绘图程序库，所有图形在内部都对应 `<mxCell>` 节点。



mxGraph Layouts
===============

   mxGraph 是基于图论（graph theory）开发的图表绘制框架，它的一个重要应用是 draw.io。图表
   排版使用一系列的布局（Layout）类型实现，比如圆形布局（mxCircleLayout）可以将图表按圆环位置
   分布排列。紧凑树状布局（mxCompactTreeLayout）是经典的树状结构的图形表示，树状布局适合无环图。
   布局类形的基类是 `mxGraphLayout`，布局相关类型如下：

   ==================== =====================================================
   mxGraphLayout        Base class for all layout algorithms in mxGraph.
   mxCircleLayout       A circluar layout for a given radius. 
   mxCompositeLayout    Allows to compose multiple layouts into a single layout. 
   mxCompactTreeLayout  A compact tree (Moen) algorithm.
   mxRadialTreeLayout   A radial tree algorithm. 
   mxEdgeLabelLayout    Layout for an edge label.  
   mxFastOrganicLayout  A fast organic layout algorithm. 
   mxParallelEdgeLayout Layout for arranging parallel edges. 
   mxPartitionLayout    Layout for partitioning the parent cell vertically or horizontally by filling the complete area with the child cells. 
   mxStackLayout        Layout to create a horizontal or vertical stack of the child vertices.
   mxOrgChartLayout     Layout for organizational chart.
   ==================== =====================================================

   OrgChart 属于一种扩展布局，API 文档并没有包含此对象。它的实现代码也没有放在 layout 目录下，
   而是独立保存在 orgchart 目录。可以通过阅读其代码了解此布局实现的功能，从其构造函数可以看到，
   默认使用的是 Hanger 4 这种四列式布局：

   .. code:: javascript

      //Branch Optimizers
      mxOrgChartLayout.prototype.BRANCH_OPT_LINEAR = 'branchOptimizerAllLinear';
      mxOrgChartLayout.prototype.BRANCH_OPT_HANGER2 = 'branchOptimizerAllHanger2';
      mxOrgChartLayout.prototype.BRANCH_OPT_HANGER4 = 'branchOptimizerAllHanger4';
      mxOrgChartLayout.prototype.BRANCH_OPT_FISHBONE1 = 'branchOptimizerAllFishbone1';
      mxOrgChartLayout.prototype.BRANCH_OPT_FISHBONE2 = 'branchOptimizerAllFishbone2';
      mxOrgChartLayout.prototype.BRANCH_OPT_1COLUMN_L = 'branchOptimizerAllSingleColumnLeft';
      mxOrgChartLayout.prototype.BRANCH_OPT_1COLUMN_R = 'branchOptimizerAllSingleColumnRight';
      mxOrgChartLayout.prototype.BRANCH_OPT_SMART = 'branchOptimizerSmart';

   使用自动布局功能：

   *  VS Code 插件版本以及旧版本访问 Arrange -> Layout 菜单。
   *  Darw.io v24.7.5 版本重新设计了界面，通过工具条 Insert > Layout 访问布局功能。
   *  Darw.io 在线版还未更到 v24.7.5，工具条与桌面版本位置不同，在页面顶部。

   编辑器设置布局时，使用默认配置值，如果排版达结果不能满足要求，可以使用自定义参数（Layout -> Custom..）
   进行微调整。如下配置就包含圆形布局对象（mxCircleLayout）设置的参数值，不同布局使用的参数对应
   各个布局类对象的成员变量，具体可以查询 mxGraph API 文档：

   .. code:: javascript

      [
      {
         "layout": "mxCircleLayout",
         "config": {
            "radius": 30,
            "moveCircle": true,
            "x0": 100,
            "y0": 60
         }
      }
      ]

      [
      {
         "layout": "mxHierarchicalLayout",
         "config": {
            "orientation": "west",
            "intraCellSpacing": 30,
            "interRankCellSpacing": 100,
            "interHierarchySpacing": 60,
            "parallelEdgeSpacing": 10
         }
      }
      ]

   注意，有些布局，比如树状布局、组织布局需要图表设置联接关系，这样才能基于图表间的关系进行布局。
   圆形布局会对页面所有图表进行处理，而不是选定的图表。经过测试，布局有些默认的约束，不能通过配置
   值来强制实现，对数量非常多的图表（群组）执行圆环布局时，那么结果将会出现一个半径超大的圆环布局，
   即使配置的半径（radius）很小。这看起来就像是一个 Bug。就好像自定义布局参数被无视了一样。
   如果确实需要对大量图表操作，可以通过分群组、甚至分页小量操作，然后群组旋转后现合并在一起。

   另外，编辑器内置“探索”插件（Autolayout Plugin: Explore）可以对复杂图表进行自动布局处理，
   当用户点击图表对象时，编辑器就根据图表的联接关系选择性展示。网页版本可通过 URL 地址启用此插件，
   添加 `p=ex` 参数表示启用此插件。启用插件后就通属性面板 Arrange -> Explore 使用它。注意，
   需要选择有联接的图表，插件按钮才会显示出来。

      https://app.diagrams.net/?p=ex

   *  `Animation and Automatic Layout: Explore Complex Diagrams <https://drawio-app.com/blog/animation-and-automatic-layout-explore-complex-diagrams/>`__
   *  `Apply layouts to rearrange a diagram <https://www.drawio.com/doc/faq/apply-layouts>`__
   *  `mxGraphLayout API <https://jgraph.github.io/mxgraph/docs/js-api/files/layout/mxGraphLayout-js.html>`__


Motion Graphics [Animation]
===========================

   Draw.io 默认提供了一个 Flow Animation 动画效果，它属于 Motion Grapihcs 的动画形式，
   即通过控制图形的几何属性来让图像实现运行。官方的动画用于联接线，模拟管道的流动效果。在样式面板
   激活了 Flow Animation 功能才后，同时会在属性列表中激活以下动画相关属性，主要是缓动效果函数
   的使用，Ease 表示缓动，in 表示缓动作用于动画开始，out 表示作用于动画结束：
   
   *  `Animate connectors <https://www.drawio.com/doc/faq/connector-animate>`__
   *  `More flow animation styles for connectors <https://www.drawio.com/blog/connector-animation-styles>`__

   =========================== ================ ======= ========= ===============================
   name                        display name     type    default   description
   =========================== ================ ======= ========= ===============================
   flowAnimationDuration       Flow Duration    int          500  
   flowAnimationTimingFunction Flow Timing      enum    'linear'  Linear, Ease, Ease-in, Ease-out, Ease-in-out
   flowAnimationDirection      Flow Direction   enum    'normal'  Normal, Reverse, Alternate, Alternate-Reverse
   =========================== ================ ======= ========= ===============================

   Flow Animation 导出到 SVG 文档依然有效果，等效 CSS 样式的关键帧动画如下。以下代码片段来自
   mxGraph 官方文档（Animation example for mxGraph）：

   *  https://github.com/jgraph/mxgraph/blob/master/javascript/examples/animation.html
   *  https://github.com/jgraph/mxgraph/blob/master/javascript/examples/morph.html

   .. code:: javascript

      <!-- Sets the basepath for the library if not in same directory -->
      <script type="text/javascript">
         mxBasePath = '../src';
      </script>

      <!-- Loads and initializes the library -->
      <script type="text/javascript" src="../src/js/mxClient.js"></script>

      <style type="text/css">
         .flow {
            stroke-dasharray: 8;
            animation: dash 0.5s linear;
            animation-iteration-count: infinite;
         }
         @keyframes dash {
            to {
            stroke-dashoffset: -16;
            }
         }
      </style>

      <!-- Example code -->
      <script type="text/javascript">
         function main(container)
         {
            var graph = new mxGraph(container);
            graph.setEnabled(false);
            var parent = graph.getDefaultParent();

            var vertexStyle = 'shape=cylinder;strokeWidth=2;fillColor=#ffffff;strokeColor=black;' +
                  'gradientColor=#a0a0a0;fontColor=black;fontStyle=1;spacingTop=14;';
            
            graph.getModel().beginUpdate();
            try
            {
                  var v1 = graph.insertVertex(parent, null, 'Pump', 20, 20, 60, 60,vertexStyle);
                  var v2 = graph.insertVertex(parent, null, 'Tank', 200, 150, 60, 60,vertexStyle);
                  var e1 = graph.insertEdge(parent, null, '', v1, v2,
                     'strokeWidth=3;endArrow=block;endSize=2;endFill=1;strokeColor=black;rounded=1;');
                  e1.geometry.points = [new mxPoint(230, 50)];
                  graph.orderCells(true, [e1]);
            }
            finally
            {
                  // Updates the display
                  graph.getModel().endUpdate();
            }

            // Adds animation to edge shape and makes "pipe" visible
            var state = graph.view.getState(e1);
            state.shape.node.getElementsByTagName('path')[0].removeAttribute('visibility');
            state.shape.node.getElementsByTagName('path')[0].setAttribute('stroke-width', '6');
            state.shape.node.getElementsByTagName('path')[0].setAttribute('stroke', 'lightGray');
            state.shape.node.getElementsByTagName('path')[1].setAttribute('class', 'flow');
         };
      </script>

      <!-- Page passes the container for the graph to the program -->
      <body onload="main(document.getElementById('graphContainer'))">

         <!-- Creates a container for the graph with a grid wallpaper -->
         <div id="graphContainer"
            style="position:relative;overflow:hidden;width:321px;height:241px;background:url('editors/images/grid.gif');cursor:default;">
         </div>
      </body>

   动画功能还可以通过 mxGraph 框架的 `mxAnimation` 或者其子类 `mxMorphing` 来实现。动画对象
   的基本功能是按 delay 指定的间隔执行 step 指定的回调函数来实现 Motion Graphics 动画。以下演示
   给 SVG 图片添加动效，步骤说明如下：

   1. 使用工具类 `mxUtils` 提供的函数将 SVG 图片转换为 mxGraph 的 shape 对象；
      参数说明： `svgString` 是 SVG 图像的 XML 数据，假设 SVG 图片的宽高都是 24 像素。

   2. 然后实例化一个 `mxAnimation` 对象；参数说明如下： 

      -  `delay` 是动画延迟时间，它会传递给 `setInterval()` 函数，影响动画帧率；
      -  `duration` 是动画持续时间；
      -  `timingFunction` 是动画时间函数，这里使用缓出（EASE_OUT）；
      -  `step` 是动画执行时的回调函数，每执行一步就回调一次。

   3. 设置好动画参数，就将动画对象绑定到 shape 对象上，并将动画样式（CSS 关键帧动画）赋值给此图形对象；

   4. 动画执行的回调函数中更新 shape 对象的状态，也就是执行 `mxUtils.bind()` 方法绑定的回调函数；

   其中 `x, y, width, height` 是初始状态， `targetX, targetY, targetWidth, targetHeight` 是目标状态。

   .. code:: javascript

      var svgDoc = mxUtils.parseXml(svgString);
      var svgNode = svgDoc.documentElement;
      var shape = new mxImageShape(new mxImage(svgNode.getAttribute('src'), 24, 24), 24, 24);

      var anim = new mxAnimation({
         delay: 0,
         duration: 1000,
         timingFunction: mxConstants.EASE_OUT,
         step: mxUtils.bind(this, function (current) {
            // update shape state
            shape.bounds = new mxRectangle(
               x + current * (targetX - x),
               y + current * (targetY - y),
               width + current * (targetWidth - width),
               height + current * (targetHeight - height)
            );
         })
      });

      mxUtils.setPrefixedStyle(shape.node.style, 'animation', anim.css);
      anim.start();

   以上代码并不适用于 mxGraph 最新版本， 新版本 `mxAnimation` 只负责在指定间隔时间中通过 
   `updateAnimation` 触发 mxEvent.EXECUTE 事件。动画类型 `mxAnimation` 本身继承自
   `mxEventSource`，因此可以通过它注册事件回调函数。

   .. code:: javascript

      mxAnimation.prototype.updateAnimation = function()
      {
         this.fireEvent(new mxEventObject(mxEvent.EXECUTE));
      };

      animation.startAnimation();
      animation.addListener(mxEvent.EXECUTE, console.log)

   关于 `mxMorphing` 动画效果的使用可以参考源代码示范 graphlayout.html 或者 morph.html。

   .. code:: javascript

     let graph = new mxGraph(container);
     let parent = graph.getDefaultParent();

      // Creates a layout algorithm to be used with the graph
      let circleLayout = new mxCircleLayout(graph);
      circleLayout.execute(parent);

     let v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30);
     let v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
     let edge = graph.insertEdge(parent, null, '', v1, v2, 'strokeWidth=3; strokeColor=black;');

     function initState()
     {
       let geo = graph.getCellGeometry(v1);
       geo = geo.clone();
       geo.x * = -1;
       graph.getModel().setGeometry(v1, geo);
       
       let geo = graph.getCellGeometry(v2);
       geo = geo.clone();
       geo.x * = -1;
       graph.getModel().setGeometry(v2, geo);
     }
     
     // Arguments are number of steps, ease and delay
     let morph = new mxMorphing(graph, 20, 1.2, 20);
     morph.addListener(mxEvent.DONE, function()
     {
       graph.getModel().endUpdate();
     });
     graph.getModel().beginUpdate();
     initState();
     morph.startAnimation();

   作为动画类的子类型， `mxMorphing` 构造器方法增加了一个 `mxGraph` 类型的参数，主要差别在于
   `updateAnimation` 方法的实现。可以通过 'mxGraph` 或者通过 `cells` 属性指定一组 `mxCell`
   作为动画要处理的图形， `animateCell()` 方法内会调用 `mxCellStatePreview` 对象提供的 
   `moveState()` 移动图表对象产生动画效果。图表的原始位置信息通过 `getCellGeometry()` 方法
   获取。原始几何信息会在 `getOriginForCell()` 方法中处理，并且按 `mxCell` 层级结构递归计算。
   启用事务后修改的 `mxGeometry` 几何变换信息则通过 `mxGraphView` 提供的 `getTranslate()` 
   和 `getScale()` 等方法获取，似乎它并没有提供获取旋转角度方面的方法，但是几何对象有旋转功能，
   只不过是直接通过旋转角度计算出相应的 (x, y) 坐标，而非记录旋转角度值。

   通过 `beginUpdate()` 启用事务功能的特点是：需要执行 `endUpdate()` 才会更新数据渲染结果，
   这就给动画功能提供了一个中间处理过程：

   .. code:: javascript

      mxMorphing.prototype.updateAnimation = function()
      {
         mxAnimation.prototype.updateAnimation.apply(this, arguments);
         var move = new mxCellStatePreview(this.graph);

         if (this.cells != null)
         {
            // Animates the given cells individually without recursion
            for (var i = 0; i < this.cells.length; i++)
            {
               this.animateCell(this.cells[i], move, false);
            }
         }
         else
         {
            // Animates all changed cells by using recursion to find
            // the changed cells but not for the animation itself
            this.animateCell(this.graph.getModel().getRoot(), move, true);
         }
         
         this.show(move);
         
         if (move.isEmpty() || this.step++ >= this.steps)
         {
            this.stopAnimation();
         }
      };

      mxMorphing.prototype.getDelta = function(state)
      {
         var origin = this.getOriginForCell(state.cell);
         var translate = this.graph.getView().getTranslate();
         var scale = this.graph.getView().getScale();
         var x = state.x / scale - translate.x;
         var y = state.y / scale - translate.y;

         return new mxPoint((origin.x - x) * scale, (origin.y - y) * scale);
      };

   执行 `moveState()` 方法进行记数，如果 `isEmpty()` 返回 true 表示没有记数，此时动画回调
   过程就会自动取消，终止动画。

   .. code:: javascript

      graph.getModel().beginUpdate();
      try
      {
         var circleLayout = new mxCircleLayout(graph);
         circleLayout.execute(graph.getDefaultParent());
      }
      finally
      {
         var morph = new mxMorphing(graph);
         morph.addListener(mxEvent.DONE, function()
         {
            graph.getModel().endUpdate();
         });
         
         morph.startAnimation();
      }


Mathematical Typesetting
=========================

   Draw.io 支持数学公式输入，它使用 `MathJax` 脚本库渲染数学公式。首先需要在编辑器激活数学排版功能，
   Extras -> Mathematical Typesetting，桌面版在设置菜单中操作。支持 LaTex、Inline LaTeX、
   AsciiMath 等等格式的公式，比如输入：

   .. code:: bash

      # AsciiMath 用 ` 分隔符号
      `a^2+b^2 = c^2`

      # LaTeX 用 $$ 分隔符号
      $$|A| = \sum\limits_{i=1}^{n}A_i+N_i$$
      
      # Inline LaTeX 使用 \( 和 \) 分隔符号
      \(\sqrt{3×-1}+(1+x)^2\)

   需要注意的是，公式必需是纯文本内容，如果是通过 HTML 页面复制的内容，因为可能包含不可见的 HTML
   标签，将这些内容粘贴到 draw.io 的文本框时，就会导致内容识别失败，通常这些内容会有色彩文字。此时，
   可以打开 HTML 代码模式再粘贴内容，或者禁止 Formatted Text 选项，以避免此标签内容的影响。

   使用 Draw.io 来编辑带有数学公式的文本时非常方便，只需要打开数学公式选项，将公式脚本粘贴到文本
   块中，确认后就可以看到渲染出来的公式。同时，公式原数据会保留在 mxGraph 文档内心便再次进行编辑。
   Draw.io 与 reStructuredText 格式可以保持非常好的兼容性。比如，reStructuredText 中使用
   :math: 前缀表示开始一个数学公式，后面和 Draw.io 使用 AsciiMath 一样用反引号来包括公式符号。
   但是，两者所使用的解析器不同，reStructuredText 使用的是 LaTeX 解析器，可以解析 ``\bullet``
   这种符号。如果要保持同样的公式解释，可以使用双美元等符号一包括公式符号，或者使用兼容的符号。

   有一点不够便利的是，双击内容编辑时，默认会滚动到内容的头部，如果编辑长段内容的中间部分时，需要
   再次定位到编辑目标内容所在位置。另外，数学公式符号不能进行复制，这一点不及 reStructuredText
   文档中的可复制的数学公式符号处理友好。

   另外，可以工具网站来验证公式的正确性：

   *  在线 LaTex 公式编辑器： https://www.latexlive.com/
   *  AsciiMathML 语法参考： https://www.intmath.com/help/send-math-email-syntax.php

   reStructuredText 官方文档中包含了一个非常全面的数学公式参考手册，现已经整理成 SVG 参考卡，
   可以使用浏览器或者 VS Code 打开（需要 draw.io 插件）：
   `LaTeX syntax for mathematics <pictures\LaTeX_syntax_for_mathematics.drawio.svg>`__

   Draw.io 可以通过内容链接实现交互式图形，比如切换显示图形的显示状态、显示指定内容页面等等。内容链接
   功能等功能请参考官方文档：

   *  `Interactive Tutorials <https://drawio-app.com/tutorials/interactive-tutorials/>`__
   *  `Work with custom links <https://www.drawio.com/doc/faq/custom-links>`__
   *  `Linking content in draw.io diagrams <https://drawio-app.com/blog/linking-content-in-draw-io-diagrams/>`__
   *  `Interactive diagrams with custom links and actions <https://drawio-app.com/blog/interactive-diagrams-with-custom-links-and-actions/>`__
   *  `draw.io for Confluence: Multi-Page Diagrams <https://drawio-app.com/blog/draw-io-for-confluence-multi-page-diagrams/>`__
   *  `Predefined placeholders <https://www.drawio.com/doc/faq/predefined-placeholders>`__
   *  `Use mathematical typesetting in diagrams <https://www.drawio.com/doc/faq/math-typesetting>`__
   *  `Maths equations in diagrams <https://www.drawio.com/blog/maths-in-diagrams>`__
   *  `MathJax <https://www.mathjax.org/>`__
   *  `Syntax for entering math using ASCIIMathML <http://www.intmath.com/help/send-math-email-syntax.php>`__
   *  `LaTeX syntax for mathematics <https://docutils.sourceforge.io/docs/ref/rst/mathematics.html>`__

User Data Object
================

   每个图形都有属性数据，通过右键菜单 Edit Data 就可以编辑它们，这些数据包括 ID 和 tags。其中
   ID 是一个图形的唯一标识，创建图形内容链接时就需要使用到这个 ID 属性值。

   用户可以设置自定义属性数据，并且勾选激活占位符（Placeholders）功能后，属性名称将可以被当前图形
   中的文本引用，假设用户定义了一个名为 Test 的属性并设置了一个值 “replaced”。在其它图形的文本
   中输入 %Test% 这样的数据语法格式，确认后，文本就会被替换为相应的属性值 “replaced”。当鼠标悬停
   在图形上方，所有用户设置的自定义属性都会显示出来，占位符常用于用于向用户展示提示信息（tooltips ）。
   除了用户定义占位符属性，draw.io 还内置了一系列预定义占位符属性（Predefined placeholders），
   用于获取 XML 节点中的各种标准属性数据，比如 id、page、width、height 等等。

   占位符替换功能属于 draw.io 基于 mxGraph 之上的扩展功能，适用于图表的 label 和 tooltip 属性，
   同样适用于 `<mxCell>` 节点的 value 属性中的文本。

   页面本身属于容器对象，但它没有 Placeholders 功能。页面上设置的属性数据称为 Global properties。

   自定义属性在导出 SVG 文件时会被忽略，Draw.io 内置插件 svgdata 提供了导出自定义数据的功能，
   可以将自定义的属性，ID 等等信息包含在导出的 SVG 文件中。不过 Draw.io Integration 似乎并
   没有默认启用此插件，插件作者表示不支持。桌面版 Draw.io 可以正常导出 tootip 等属性到 SVG 文档。

   .. code:: json

      $ find $USERPROFILE/.vscode | grep svgdata.js

   *  `List of draw.io plugins <https://www.drawio.com/doc/faq/plugins>`__
   *  `plugin configuration <https://github.com/hediet/vscode-drawio/issues/326>`__

   需要注意的是，draw.io 编辑器中运行的图形交互能力与 SVG 中的交互能力并不划等号，有些交互功能
   导出 SVG 文件时会丢失。交互式图形是计算机图形学中的一个分支，参考东京大学 Takeo Igarashi 
   老师的公开课： `Interactive Computer Graphics <https://www.coursera.org/learn/interactive-computer-graphics>`__

   以下是具有特殊功能的属性名称：

   *  `tooltip`: 这个属性名称表示在鼠标悬停时只显示这个属性的值，不显示其它自定义属性值。
   *  `placeholder`: 些属性名用于将图形转变为一个占位符对象，属性值为其它自定义属性的名称，
      这种方式将由容器提供自定义属性值，而不必手动修改文本框中字符串的变量占位符。

   如果要导出 SVG 文档，那么使用 tooltip 属性时需要注意，因为 SVG 中的 tooltip 功能是通过
   ``<title>`` 节点实现的，并且它只作用于 ``<svg>`` 标签。所以，如果给一个列表中的所有条目
   设置工具提示信息，那么它们可以在 Draw.io 编辑器正常工作。但是导出到 SVG 就会失效，因为 SVG
   绘图中的每个窗口元素或图形元素都可以提供一个 title 描述性字符串。通常 title 元素必须是它的
   父元素的第一个子元素。只有当 title 是它的父元素的第一个子元素的时候，那些编译器才会把 title
   显示为一个提示冒泡。

   因为图表中可以存在多个属性数据，占位符属性也有作用域，将激活了占位符的图形在不同的容器之间移动时，
   将会显示各个容器所设置的对应变量值。以下官方示范演示了这种功能，页面本身这个容器 A 和页面中的某
   一个容器 B 中设置了同名的 variableName 变量。当一个图形激活了 Placeholds 功能，又设置了
   ``placeholder`` 变量并且变量值对应为 variableName，那么这个图形在移入容器、移出容器时，就会
   显示 A 各 B 两个容器各自设置的 variableName 变量值：

   *  `placeholder property example <https://app.diagrams.net/i/Go7aT2t>`__
   *  the global `variableName` property is set to `This Value`
   *  the container `variableName` property is set to `That Value`

   当编辑这个图形的内容时，还可以自动更新当前容器上的占位符属性值，这里是指 variableName 变量值。

   占位符对象的数据源自容器（Container），要将一个图形变成容器，只需要在 Style 属性面板中勾选
   Container，或者更简单的是将图形转换为分组，快捷键为 Ctrl+G，解散分组为 Ctrl+Shift+U，程序
   会自动激活它为容器。注意，某些图形不能作为分组，比如箭头，它由 `<mxPoint>` 构成。如果要想将
   单个图表转换为分组容器，可以使用 style 面板设置 container 属性。每个分组容器（Group）对象
   的左上角会显示一个 + 或者 - 符号图标用于折叠、展开分组内容。这个功能是容器的默认功能，其它图表
   对象也可以设置样式属性支持折叠功能，如果没有出现这个折叠图标，那么需要先激活折叠/扩展功能设置：
   `Settings -> Collapse/Expand`。

   折叠功能有两种形式，对应两个属性：

   *  Tree Folding 折叠的是建立了联接关系的子节点，对应 `<mxCell>` 节点的样式值 treeFolding=1。
   *  Collapsible 折叠的是容器本身的内容，对应 `<mxCell>` 节点的样式值 collapsible=1。 


Content Link Actions
====================

   Draw.io 图形有基本概念：Cell 图形单元。多个图形单元可以组合为一个集合，每个图形单元对应文档
   中的一个 `<mxCell>` 节点。这些节点可以被打上标记（tags）也可以放到指定图层上管理。同时 Draw.io
   文档中使用 `<diagram>` 节点来实现分页功能，每一页都可以包含独立的图层、tags 标记的图表内容。
   内容链接是 HTML 超级链接功能的一种扩展，darw.io 可以在内容链接中对图表对象进行操作，而这些涉及
   到的图形单元或者页面将以特定的 JSON 数据格式应用到内容链接上。

   要链接并显示指定图形，链接地址数据格式如下，这些 cells 和 tags 图形有三种组合：

   .. code:: javascript

      // 仅使用 ID 关联操作
      data:action/json,{"actions":[{"operator":{"cells":["ID1","ID2"]}}]}

      // 仅使用 tags 关联操作
      data:action/json,{"actions":[{"operator":{"tags":["tags1","tags2"]}}]}

      // 混合使用 ID 和 tags 关联操作
      data:action/json,{"actions":[{"operator":{"cells":["ID1","ID2"],"tags":["tags1","tags2"]}}]}


   链接目标 ID 来源有三类：shape、page、layer，可以通过以下方式查看这些 ID 属性值：

   *  Shape ID: 直接在样式属性面板中的属性列表中查看，或者右键菜单 Edit Data (Ctrl+M)。
   *  Page ID: 没有选择任何内容的前提下通过侧栏的面板 Diagram -> Edit Data 或者快捷键查看。
   *  Layer ID: 使用菜单 Select View -> Layers 打开图层面板并选择图层，点击铅笔图标 (Edit Data)。

   内容链接可以使用多个 ID 和 tags 属性值，ID 和 tags 一般用法如下：

   *  If multiple tags are used, then the diagram elements that have all of the tags are selected (AND).
   *  To toggle cells with either tag1 or tag2, use multiple toggle actions instead.
   *  To specify all cells, use "cells": ["*"].
   *  To specify all cells with a tag, use "tags": [] (an empty array).

   其中操作符（operator）表示链接功能支持的行为动作，含义如下：

   ========== ==================================================================
   Operator   操作含义
   ========== ==================================================================
   toggle     切换 cellset 的显示状态。示例：data:action/json,{"actions":[{"toggle": {"cells": ["5", "7"]}}]}
   show       显示 cellset。示例：data:action/json,{"actions":[{"show": {"tags": []}},{"hide": {"tags": ["pipe", "water"]}}]}
   hide       隐藏 cellset。示例：data:action/json,{"actions":[{"hide": {"cells": ["5", "7"]}}]}
   highlight  高亮显示 cellset。示例：data:action/json,{"actions":[{"highlight": {"cells": ["5", "7"]}}]}
   open       跳转到指定页面。链接数据可以直接使用简写格式："data:page/id,PAGE_ID"。或者完整格式，示范 data:action/json,{"actions":[{"open": "data:page/id,1"},{"highlight":{"cells":["2"],"opacity":100, "color": "red"}}]}。
   select     画布视图移动到指定 cellset 对象所在位置，即当前视图显示相应的图表。
   scroll     画布视图滚动到指定 cellset 对象所在位置，即当前视图显示相应的图表。data:action/json,{"actions":[{"scroll": {"cells": ["sec10"]}}]}
   viewbox    直接指定视图坐标： data:action/json,{"actions":[{"wait":1000},{"viewbox":{"x":0,"y":0,"width":100,"height":100}}]}
   wait       Wait for a duration (ms): data:action/json,{"actions":[{"wait":1000}]}
   tags       Tags operators: data:action/json,{"actions":[{"tags":{"toggle":["atag"],"hidden":["btag"],"visible":["ctag"]}}]}
   style      Set Style: data:action/json,{"title":"MyLink","actions":[{"style":{"cells":["Target_ID"],"tags":[""],"key":"flowAnimation","value":"1"}}]}
   opacity    Opacity:  data:action/json,{"title":"MyLink","actions":[{"opacity":{"cells":["Target_ID"],"tags":[""],"value":".5"}}]}
   wipeIn     Wipe In:  data:action/json,{"title":"MyLink","actions":[{"delay":30,"steps":30,"wipeIn":{"cells":["Target_ID"],"tags":[""]}}]}
   wipeOut    Wipe Out: data:action/json,{"title":"MyLink","actions":[{"delay":30,"steps":30,"wipeOut":{"cells":["Target_ID"],"tags":[""]}}]} 
   fadeIn     Fade In:  data:action/json,{"title":"MyLink","actions":[{"fadeIn":{"cells":["Target_ID"],"tags":[""],"delay":1000}}]}
   fadeOut    Fade Out: data:action/json,{"title":"MyLink","actions":[{"fadeOut":{"cells":["Target_ID"],"tags":[""],"delay":1000}}]}
   ========== ==================================================================

   如果没有指定 scroll 行为，那么点击链接时，select 或者 highlight 行为指定的首个图形或图层会
   被设置为可视状态，并且 select 行为优先级更高。对于 highlight 行为，可以指定一个颜色 (string)
   以及一个毫秒为单位的时值（duration），还有一个 1 ~ 100 之间的不透明度（opacity）。

   打开指定页面的链接有两种设置方式，一是设置链接的 URL 地址，二是在 Edit Link 面板的页面列表
   中选择要链接（打开）的页面。这种方式其实等价于 URL 中设置 ``data:page/id,PAGE_ID`` 这样的地址。
   设置链接后还可以直接使用 Edit Data 查看链接地址，就是链接属性 link 中保存的数据。注意，如果
   手动修改页面 ID 可能导致 Draw.io Integration 出现 ID 值的管理混乱，这可能是插件版本问题，
   毕竟已经两年来没什么更新。这种问题在最新的 Draw.io v24.7.5 桌面版本没有出现。

   使用内容链接功能时注意，使用不正确可以导致 Actions 配置没有任何效果。比如 highlight 功能，
   但是目标对象不在当前屏幕中显示的区域，那么图表虽然改变了图表状态，但用户没看见。这种情况就可以
   使用 viewbox 功能，通过直接设置一个视图区，相当于用户使用移动、缩放操作查看画布中的某个区域。
   SVG 图像文档中经常需要使用到 viewBox 属性来设置图像渲染区域。又如，toggle 切换图表的显示/隐藏，
   如果给定 Page ID，那么这个切换就属性无效操作。切换页面只能使用 open 操作。测试中还发现，tags
   操作中，如果混合了 toggle、hidden、visible 操作在同一个链接中，就会导致 toggle 功能失效。

   设置好内容链接后，还需要将按钮放到一个专用图层中，并且将些图层锁定。如果没有锁定按钮的图层，那么
   用户点击设置了内容链接行为（Actions）的图表对象（按钮）时就会出现一个链接内容提示框，而不是直接
   执行链接功能。因此，为了方便用户（阅读者）执行这些链接功能，就需要将交互图表所在的图层锁定。

      Lock all interactive diagrams layers!

   Draw.io 提供了菜单可以锁定整个文件：File -> Properties -> Locked。

   注意：内容链接功能当前并不支持导出到 SVG 图形格式，因为没有提供相应的脚本代码来实现相应功能。
   另外，锁定图层中的链接也不一定能触发像 scroll 这样的动作，也就是它可以不会将视图聚焦到相应的
   图表区域中。

   由于内容链接功能设置有点复杂，如果你不能记住内容链接使用 data:action/json 这样的数据格式，
   那么就可以考虑使用 draw.io 官方为了帮助用户使用一些复杂功能而提供的一批 Web 辅助工具：

   -  `Draw.io Tools <http://jgraph.github.io/drawio-tools/>`__
   -  `Convert: <https://jgraph.github.io/drawio-tools/tools/convert.html>`__
      Inflate/deflate, URL encode/decode and remove linefeeds from any text
   -  `Base64: <https://jgraph.github.io/drawio-tools/tools/base64.html>`__
      Base64 encode images
   -  `Merge: <https://jgraph.github.io/drawio-tools/tools/merge.html>`__
      Create vertical image stack
   -  `Viewer: <https://jgraph.github.io/drawio-tools/tools/viewer.html>`__
      Create link for viewing diagrams
   -  `CSV: <https://jgraph.github.io/drawio-tools/tools/csv.html>`__
      Create link for viewing CSV
   -  `Link: <https://jgraph.github.io/drawio-tools/tools/link.html>`__
      Create custom links
   -  `Tickets: <https://jgraph.github.io/drawio-tools/tools/tickets.html>`__
      Freshdesk Tickets Editor
   -  `Navigator: <https://jgraph.github.io/drawio-tools/tools/navigator.html>`__
      Navigator Object Info

   创建内容链接后，当选择这个带有连接的图形对象时，编辑器提示它包信链接行为，显示为 Action 并且
   有一支铅笔的图标用于修改这个链接，垃圾桶图标用来删除链接行为。点击 Action 时就执行这个链接动作。
   如果带有内容链接功能的图表导出为 SVG 文件，那么就不会有以上的鼠标悬停效果，用户点击带有内容链接
   的图形时就会执行所设置的链接行为。这些功能都是通过 mxGraph 交互绘图框架提供的，当图表导出到
   SVG 文档后，这些功能就失效了。从技术上来讲，SVG 图形文档本身也支持基于 Web 环境的脚本交互，
   但是 draw.io 并没有提供相应的实现。


Predefined placeholders
=======================

   Each shape in a diagram can contain metadata or custom properties - extra information 
   about those shapes.

   These custom properties can also be used to define placeholder values, acting 
   like variables in a computer program. Placeholders can be used in shape labels 
   and tooltips to show the value of the custom property of that shape, the container 
   shape it is inside, or an ancestor in a multi-group shape.

   See how to `work with placeholders in labels and tooltips <https://www.drawio.com/blog/placeholders.html>`__.

   **Predefined placeholders**

   In addition to using property names as placeholders, you can use the following 
   predefined placeholders.

   ===================== ========================================================
   ``%id%``              Prints the ID of a shape or connector.
   ``%width%``           Prints the width of a shape.
   ``%height%``          Prints the height of a shape.
   ``%length%``          Prints the length of a connector.
   ``%date%``            Prints the current date using the system locale.
   ``%time%``            Prints the current time using the system locale.
   ``%timestamp%``       Prints a timestamp using the system locale.
   ``%date{format}%``    Prints a timestamp using a custom format, details below.
   ``%pagenumber%``      Prints the page number of the current page.
   ``%pagecount%``       Prints the total number of pages.
   ``%page%``            Prints the title of the current page.
   ``%filename%``        Prints the name of the file.
   ===================== ========================================================

   **Placeholders for Atlassian Confluence Server and DC**

   +---------------------------------+---------------------------------------------------------------+
   | ``%version%``                   | Prints the current version of the file.                       |
   +---------------------------------+---------------------------------------------------------------+
   | ``%creatorName%``               | Prints the name of the user that created the file.            |
   +---------------------------------+---------------------------------------------------------------+
   | ``%lastModifiedBy%``            | Prints the name of the user that last modified the file.      |
   +---------------------------------+---------------------------------------------------------------+
   | ``%lastModifiedTime[:format]%`` | Prints the last modified time using an optional date format,  |
   |                                 | eg. %lastModifiedTime:dddd, mmmm d, yyyy%                     |
   +---------------------------------+---------------------------------------------------------------+

   **Notes:**

   -  To print some text between ``%`` characters without the text being replaced, 
      use two ``%`` characters. For example, ``%%name%`` prints ``%name%`` even if 
      a property called ``name`` exists.

   -  If a shape and its ancestor have a property with the same name, the value of 
      the child shape’s property is used (this overrides the ancestor property). 
      Likewise, if multiple ancestors have a common property, the value of the 
      closest ancestor’s property is used. In this way, 
      `placeholder labels respect scope <https://www.drawio.com/blog/placeholder-scope.html>`__.

   **Custom timestamp formats**

   The following custom formats for timestamps are defined (e.g. ``%date{dddd, mmmm d, yyyy}%``)

   +-----------------------+---------------------------------------------------------------------------------------+
   | Timestamp format      | Description                                                                           |
   +=======================+=======================================================================================+
   | ``d``                 | Day of the month as digits; no leading zero for single-digit days.                    |
   +-----------------------+---------------------------------------------------------------------------------------+
   | ``dd``                | Day of the month as digits; leading zero for single-digit days.                       |
   +-----------------------+---------------------------------------------------------------------------------------+
   | ``ddd``               | Day of the week as a three-letter abbreviation.                                       |
   +-----------------------+---------------------------------------------------------------------------------------+
   | ``dddd``              | Day of the week as its full name.                                                     |
   +-----------------------+---------------------------------------------------------------------------------------+
   | ``m``                 | Month as digits; no leading zero for single-digit months.                             |
   +-----------------------+---------------------------------------------------------------------------------------+
   | ``mm``                | Month as digits; leading zero for single-digit months.                                |
   +-----------------------+---------------------------------------------------------------------------------------+
   | ``mmm``               | Month as a three-letter abbreviation.                                                 |
   +-----------------------+---------------------------------------------------------------------------------------+
   | ``mmmm``              | Month as its full name.                                                               |
   +-----------------------+---------------------------------------------------------------------------------------+
   | ``yy``                | Year as last two digits; leading zero for years less than 10.                         |
   +-----------------------+---------------------------------------------------------------------------------------+
   | ``yyyy``              | Year represented by four digits.                                                      |
   +-----------------------+---------------------------------------------------------------------------------------+
   | ``h``                 | Hours; no leading zero for single-digit hours (12-hour clock).                        |
   +-----------------------+---------------------------------------------------------------------------------------+
   | ``hh``                | Hours; leading zero for single-digit hours (12-hour clock).                           |
   +-----------------------+---------------------------------------------------------------------------------------+
   | ``H``                 | Hours; no leading zero for single-digit hours (24-hour clock).                        |
   +-----------------------+---------------------------------------------------------------------------------------+
   | ``HH``                | Hours; leading zero for single-digit hours (24-hour clock).                           |
   +-----------------------+---------------------------------------------------------------------------------------+
   | ``M``                 | Minutes; no leading zero for single-digit minutes.                                    |
   |                       | Uppercase ``M`` unlike CF timeFormat’s ``m`` to avoid conflict with months.           |
   +-----------------------+---------------------------------------------------------------------------------------+
   | ``MM``                | Minutes; leading zero for single-digit minutes.                                       |
   |                       | Uppercase ``MM`` unlike CF timeFormat’s ``mm`` to avoid conflict with months.         |
   +-----------------------+---------------------------------------------------------------------------------------+
   | ``s``                 | Seconds; no leading zero for single-digit seconds.                                    |
   +-----------------------+---------------------------------------------------------------------------------------+
   | ``ss``                | Seconds; leading zero for single-digit seconds.                                       |
   +-----------------------+---------------------------------------------------------------------------------------+
   | ``l`` *or* ``L``      | Milliseconds. ``l`` prints 3 digits. ``L`` prints 2 digits.                           |
   +-----------------------+---------------------------------------------------------------------------------------+
   | ``t``                 | Lowercase, single-character time marker string: ``a`` or ``p``.                       |
   |                       | No equivalent in CF.                                                                  |
   +-----------------------+---------------------------------------------------------------------------------------+
   | ``tt``                | Lowercase, two-character time marker string: ``am`` or ``pm``.                        |
   |                       | No equivalent in CF.                                                                  |
   +-----------------------+---------------------------------------------------------------------------------------+
   | ``T``                 | Uppercase, single-character time marker string: ``A`` or ``P``.                       |
   |                       | Uppercase ``T`` unlike CF’s ``t`` to allow for user-specified casing.                 |
   +-----------------------+---------------------------------------------------------------------------------------+
   | ``TT``                | Uppercase, two-character time marker string: ``AM`` or ``PM``.                        |
   |                       | Uppercase ``TT`` unlike CF’s ``tt`` to allow for user-specified casing.               |
   +-----------------------+---------------------------------------------------------------------------------------+
   | ``Z``                 | US timezone abbreviation, e.g. ``EST`` or ``MDT``. With non-US timezones or           |
   |                       | in the Opera browser, the ``GMT/UTC`` offset is returned, e.g. ``GMT-0500``.          |
   |                       | No equivalent in CF.                                                                  |
   +-----------------------+---------------------------------------------------------------------------------------+
   | ``o``                 | GMT/UTC timezone offset, e.g. ``-0500`` or ``+0230``. Note: No equivalent in CF.      |
   +-----------------------+---------------------------------------------------------------------------------------+
   | ``S``                 | The date’s ordinal suffix (``st``, ``nd``, ``rd``, or ``th``). Works well with ``d``. |
   |                       | No equivalent in CF.                                                                  |
   +-----------------------+---------------------------------------------------------------------------------------+
   | ``'…'`` *or* ``"…"``  | Literal character sequence. The surrounding quotes are removed.                       |
   |                       | No equivalent in CF.                                                                  |
   +-----------------------+---------------------------------------------------------------------------------------+
   | ``UTC:``              | Must be the first four characters of the timestamp mask. Converts the date from       |
   |                       | local time to UTC/GMT/Zulu time before applying the time format.                      |
   |                       | The ``"UTC:"`` prefix is removed. No equivalent in CF.                                |
   +-----------------------+---------------------------------------------------------------------------------------+


   **Predefined timestamp formats**

   There are several predefined timestamp formats that you can use.

   ===================== =============================== ========================
   Name                  Timestamp format                Example
   ===================== =============================== ========================
   ``default``           ddd mmm dd yyyy HH:MM:ss        Sat Jun 09 2007 17:46:21
   ``shortDate``         m/d/yy                          6/9/07
   ``mediumDate``        mmm d, yyyy                     Jun 9, 2007
   ``longDate``          mmmm d, yyyy                    June 9, 2007
   ``fullDate``          dddd, mmmm d, yyyy              Saturday, June 9, 2007
   ``shortTime``         h:MM TT                         5:46 PM
   ``mediumTime``        h:MM:ss TT                      5:46:21 PM
   ``longTime``          h:MM:ss TT Z                    5:46:21 PM EST
   ``isoDate``           yyyy-mm-dd                      2007-06-09
   ``isoTime``           HH:MM:ss                        17:46:21
   ``isoDateTime``       yyyy-mm-dd’T’HH:MM:ss           2007-06-09T17:46:21
   ``isoUtcDateTime``    UTC:yyyy-mm-dd’T’HH:MM:ss’Z’    2007-06-09T22:46:21Z
   ===================== =============================== ========================

   **Note:** Full and short names for days and months are currently only available in English.


Keyboard Shortcuts
==================

   https://app.diagrams.net/shortcuts.svg

   Cmd instead of Ctrl, Option instead of Alt for macOS

   控制键与图表中相应的图标搭配使用功能：

      ⇨  Click to connect and clone (Ctrl+Click to clone,
         Shift+Click to connect), Drag to connect
         (Ctrl+Drag to clone)

      ↻  Click to rotate 90° clockwise, Drag to rotate

      ⇫  Ctrl: Ask   Alt: Origin   Shift: As Image

   LABELS
   ::

      Double-click               Insert text or add an edge label
      (Shift+)Enter¹             New line in formatted labels
      Enter / Tab                Line break / Tab / Indent in labels
      Enter / F2                 Start editing label of selected cell
      Ctrl+Enter / Shift+Tab / F2 / Esc¹              Stop editing
      Ctrl+B / I                 Toggle bold / italic on selected text
      Ctrl+U                     Toggle underline on selected text
      Ctrl+. / ,                 Superscript / Subscript on selected text

      [¹]  Ctrl / Shift+Enter: New Line / Apply in Safari

   SELECTION
   ::

      (Shift+)Tab                Select next / previous
      Alt+Shift+P / Alt+Tab      Select parent
      Alt+Shift+X / C / S        Select (all) children / siblings
      Alt+Drag                   Start selection / Select intersection
      Ctrl+(Shift+)A             Select all / none
      Ctrl+Shift+I / E           Select vertices / edges
      Ctrl / Shift+Select / Drag Toggle selection state
      Alt+Click                  Select cell below

   TOOLS
   ::

      Ctrl+Shift+K               Toggle Shapes
      Ctrl+Shift+L               Toggle Layers
      Ctrl+Shift+O               Toggle Outline
      Ctrl+M                     Edit metadata
      Ctrl+Shift+P               Toggle Format
      Ctrl+Shift+M               Edit vertex geometry
      Ctrl+K                     Toggle Tags
      Ctrl+F                     Find/Replace

   CURSOR / PAGE KEYS
   ::

      Cursor                     Scroll / Move cell (pt)
      Shift+Cursor               Move cell (grid) or page
      Ctrl+Cursor                Resize cell (pt) or select page
      Ctrl+Shift+Cursor          Resize cell (grid size)
      Alt+Shift+Cursor           Clone and connect
      Alt+Cursor                 Scroll page
      Ctrl+Shift+Pg Up           Previous page
      Ctrl+Shift+Pg Down         Next page

   CANVAS
   ::

      Ctrl+X / C / Ctrl+Alt+X    Cut / Copy / Copy as Image
      Ctrl+V / Ctrl+Shift+V      Paste / Paste unformatted text
      Ctrl+G                     Group
      Ctrl+Shift+U               Ungroup
      Ctrl+L / Alt+Shift+L       Lock / Unlock / Edit link
      Ctrl+Enter / D             Duplicate
      Backspace or Delete        Delete selected cells
      Ctrl / Shift+Delete        ...with connections / labels
      Ctrl+R                     Turn / Rotate 90° clockwise
      Shift+Resize               Maintain proportions
      Ctrl+Resize                Centered resize
      Ctrl+Home                  Collapse container
      Ctrl+End                   Expand container
      Ctrl+Shift+End/Home        Enter / Exit group
      Ctrl+Shift+F / B           Bring to front / Send to back
      Alt+Ctrl+Shift+F / B       Bring forward / Send backward
      Alt+Shift+F / V / B / E    Copy / paste size / data
      Alt+Shift+R / T            Clear waypoints / Edit tooltip
      Ctrl+Shift+Y               Autosize
      Ctrl / Shift+Drag          Clone / Swap / Constrain

   VIEW
   ::

      Ctrl+Shift+Wheel           Canvas zoom in / out
      Alt+Wheel                  Canvas zoom in / out
      Wheel                      Canvas vertical scroll
      Shift+Wheel                Canvas horizontal scroll
      Space / Right-click+Drag   Pan canvas
      Alt+Ctrl+Shift+Drag        Create / Remove space
      Alt+Resize / Move          Ignore grid
      Shift+Home                 Home
      End                        Refresh
      Enter / Home               Reset view
      Ctrl+Shift+H               Fit window
      Ctrl+J                     Fit page
      Ctrl+Shift+J               Fit two pages
      Ctrl +                     Custom zoom
      Ctrl -                     Zoom in
      Ctrl+0                     Zoom out

   LIBRARY / CONNECT
   ::

      Alt+(Shift+) Drag shape from library         Disable replace and connect on drop targets (Shift ignores current style)
      Alt+(Shift / Ctrl)+Click on a library shape  Insert and connect the selected item (Shift ignores current style)
      Shift+Click on a library shape               Replace the selected item with the clicked item
      Click on a library shape                     Connect to unconnected side of selected edge
      Alt / Shift+Connect                          Ignore shape / Connect to a fixed point

   DOCUMENT
   ::

      Ctrl+(Shift+)S             Save (as)
      Ctrl+Z                     Undo
      Alt+Shift+A                Connection arrows
      Alt+Shift+O                Connection points
      Hold Alt                   Ignore handles under the mouse
      Ctrl+Shift+G               Toggle grid
      Ctrl+P                     Print
      Ctrl+Y                     Redo (Windows)
      Ctrl+Shift+Z               Redo (Linux/macOS)
      A / S / D / F / C          Add Text/Note/Rectangle/Ellipse/Line
      X                          Toggle Freehand Mode
      Ctrl / Right click         Context Menu
      (Ctrl / Shift)+Esc         Cancel editing / action

   STYLES
   ::

      Ctrl+Shift+R               Clear default style
      Ctrl+E                     Edit style
      Ctrl+Shift+D               Set as default style
      Alt+C                      Copy style
      Alt+V                      Paste style

      Drag                       Move cell / Pan canvas
      Tap and hold               Toggle selection / Rubberband
      Pinch                      Zoom
      Tap selected cell          Context menu

Draw.io CLI
===========

.. code:: bash

   $ ./draw.io.exe --help

   Usage: draw.io [options] [input file/folder]

   Options:
   -V, --version                    output the version number
   -c, --create                     creates a new empty file if no file is passed
   -k, --check                      does not overwrite existing files
   -x, --export                     export the input file/folder based on the given options
   -r, --recursive                  for a folder input, recursively convert all files in sub-folders also
   -o, --output <file/folder>       specify the output file/folder. If omitted, the input file name 
                                    is used for output with the specified format as extension
   -f, --format <format>            if output file name extension is specified, this option is 
                                    ignored (file type is determined from output extension, 
                                    possible export formats are pdf, png, jpg, svg, vsdx, and xml) 
                                    (default: "pdf")
   -q, --quality <quality>          output image quality for JPEG (default: 90)
   -t, --transparent                set transparent background for PNG
   -e, --embed-diagram              includes a copy of the diagram (for PNG, SVG and PDF formats only)
   --embed-svg-images               Embed Images in SVG file (for SVG format only)
   -b, --border <border>            sets the border width around the diagram (default: 0)
   -s, --scale <scale>              scales the diagram size
   --width <width>                  fits the generated image/pdf into the specified width, preserves aspect ratio.
   --height <height>                fits the generated image/pdf into the specified height, preserves aspect ratio.
   --crop                           crops PDF to diagram size
   -a, --all-pages                  export all pages (for PDF format only)
   -p, --page-index <pageIndex>     selects a specific page, if not specified and the format 
                                    is an image, the first page is selected
   -l, --layers <...,layer indexes> selects which layers to export (applies to all pages), 
                                    if not specified, all layers are selected
   -g, --page-range <from>..<to>    selects a page range (for PDF format only)
   -u, --uncompressed               Uncompressed XML output (for XML format only)
   -z, --zoom <zoom>                scales the application interface
   --svg-theme <theme>              Theme of the exported SVG image 
                                    (dark, light [default]) (default: "light")
   --svg-links-target <target>      Target of links in the exported SVG image 
                                    (auto [default], new-win, same-win) (default: "auto")
   --enable-plugins                 Enable Plugins
   -h, --help                       display help for command



/🟡Plugins Development
=======================

   Draw.io 源代码有 JavaScript 或者 Java 实现，但是还没有转换为 TypeScript，因此不能利用它
   提供的静态类型信息的优点。比如知道 JavaScript 代码中某个对象有一属性，但是想要知道它的属性值
   范围就是件麻烦事，极有可能代码中并没有相关的提示信息，只有去搜索所有代码看有那些用法。如果使用
   TypeScript，它就可以包含非常的类型信息，包含属性的取值范围，这就让项目代码逻辑非常清晰。

   作为一个参考，可以借鉴还在逐步使用 TypeScript 转译的 maxGraph 项目：

   *  https://github.dev/maxGraph/maxGraph
   *  https://npmmirror.com/package/@maxgraph/core

   由于 JavaScript 语言特性变化较大，Draw.io 整个软件结构的对象层次结构关系也比较复杂。继承
   机制不同，Draw.io 编辑器代码主要是直接使用原型链（Prototype），mxGraph 框架的主要继承方式
   是使用 mxUtils 中的扩展函数。同样，也是因为代码结构混乱，以及功能维护等问题，官方文档中声明，
   不再接收开源代码贡献，以避免在合并代码时出现功能性问题：

   .. code:: javascript

      function mxStencil(desc)
      {
         this.desc = desc;
         this.parseDescription();
         this.parseConstraints();
      };

      /**
      * Extends mxShape via mxUtils.
      */
      mxUtils.extend(mxStencil, mxShape);

      
      function SampleShape() { }

      /**
       * Extends by prototype
       */
      SampleShape.prototype = new mxActor();
      SampleShape.prototype.constructor = vsAseShape;


      function mxSwimlaneManager(graph, horizontal, addEnabled, resizeEnabled)
      {
         //...
         
         this.setGraph(graph);
      };

      /**
      * Extends mxEventSource.
      */
      mxSwimlaneManager.prototype = new mxEventSource();
      mxSwimlaneManager.prototype.constructor = mxSwimlaneManager;

   可以在 Draw.io 源代码目录中使用命令 `tsc --init` 创建 TypeScript 工程配置，最好是在各个
   模块中生成项目配置，因为 Draw.io 项目源代码中包含了打包输出的脚本文件。然后参考以下配置设置
   为“只生成类型声明文件”，并且指定 outDir 以独立保存生成的文件。最后，在项目目录下（任意子目录）
   运行 `tsc` 命令编脚本生成 d.ts 文件：
   
   .. code:: javascript

      {
      "compilerOptions": {
         /* Visit https://aka.ms/tsconfig to read more about this file */

         /* Projects */
         "composite": true,

         /* Language and Environment */
         "target": "es2016",

         /* Modules */
         "module": "commonjs",

         /* JavaScript Support */
         "allowJs": true,
         "checkJs": true,

         /* Emit */
         "declaration": true,
         "emitDeclarationOnly": true,
         "outDir": "../d.ts/",

         /* Interop Constraints */
         "esModuleInterop": true,
         "forceConsistentCasingInFileNames": true

         /* Completeness */
         "skipLibCheck": true
      }
      }

   或者直接通过命令单独编译 JavaScript，并且只为脚本生成 `*.d.ts` 类型声明文件：

   .. code:: bash

      tsc -d -allowJs -emitDeclarationOnly src/main/webapp/mxgraph/src/util/mxLog.js
      tsc -d -allowJs -emitDeclarationOnly src/main/webapp/mxgraph/src/util/mxUtils.js

   编译 Draw.io 编辑器部分代码时会触发 TS9005 异常，以下代码就可以在 2.6.2 以上版本版本触发
   此异常。这种由于编译器引入的问题，只能通过使用特定编译器解决，或者手工处理类型声明：

   .. code:: javascript

      // TS9005: Declaration emit for this file requires using private name '(Anonymous function)'. 
      // An explicit type annotation may unblock declaration emit.
      // https://github.com/microsoft/TypeScript/issues/57523
      const a = new function () {
         this.b = new function () {
            this.c = 1
         }
      }

   类型声明文件可以用于 TypeScript/JavaScript 项目开发的 LSP 智能类型提示信息，类型声明文件
   会保留原脚本中的注解信息。但由于以上是根据 JavaScript 脚本生成的类型声明文件，同时源代码中也
   没有提供符合 `@JSDoc <https://jsdoc.app/>` 规范的注解内容，因此会缺失参数类型等信息。如果
   需要，可以自行手工添加更完整的类型信息到类型声明文件中。

   Draw.io 提供插件机制，用户可以按要求开发自己的插件，比如实现一个可以将图表导出为 ASCII 图形
   的插件，就像 https://asciiflow.com/ 那样，使用纯字符串来绘制流程图。

   ============= ======= =======================================================
   Filename       ID      Description
   example       p1      Defines a custom sidebar and placeholders 
   explore.js    ex      Adds Explore from Here to the context menu, and a click handler to the lightbox
                         (`how to use <https://www.drawio.com/doc/faq/explore-plugin.html>`__)
   tooltips.js   tips    Adds an icon for shapes and connectors with tooltips (example)
   svgdata.js    svgdata Adds metadata and IDs in the SVG export
   number.js     number  Numbers all shapes in chromeless mode 
                         (`how to use <https://www.drawio.com/doc/faq/number-plugin.html>`__)
   sql.js        sql     Adds Arrange > Insert > Advanced > From SQL
                         (`how to use <https://www.drawio.com/doc/faq/sql-plugin.html>`__)
   props.js      props   Shows shape metadata in chromeless mode
                         (`how to use <https://www.drawio.com/doc/faq/properties-plugin.html>`__)
   text.js       text    Adds Extras > Extract Text for extracting all of the text in a diagram
   animation.js  anim    Adds Extras > Animation which autostarts in chromeless mode (example)
   update.js     update  Adds data-driven diagrams in chromeless mode (source code, example)
   replay.js     replay  Adds Extras > Record for replaying all changes made to a diagram
   anonymize.js  anon    Adds Extras > Anonymize Current Page to remove metadata and change labels, including the page name
                         (`how to use <https://www.drawio.com/doc/faq/anonymize-plugin.html>`__)
   webcola.js    webcola Adds Layout > WebCola Layout to run the interactive, constraint-based layout
   flow.js       flow    Adds Toggle Flow to the context menu, and a connector click handler to the lightbox
   ============= ======= =======================================================

   默认配置还允许加载外部插件，通过命令参数可以让 Draw.io 桌面版：
   By default external (custom) plugins are not allowed. To 
   allow external plugins you need to start the app with an
   option that enables them. Here is an example of the command I used in Windows:

      External Plugins: External plugins disabled.

   .. code:: bash

      ./draw.io.exe --enable-plugins

   通过参数启用插件后，配置中的所有插件都会被加载：

   .. code:: javascript

      "plugins": [
         "./plugins/text.js",
         "./plugins/animation.js",
         "./plugins/explore.js",
         "example.js"
      ],

   添加外部插件时，程序会将插件脚本拷贝到用户漫游目录。如果插件脚本缺失，则会在启动时报错提示：

      Error: ReferenceError: module is not defined

   添加外部插件时注意，选择好文件后不要点插件列表框中的 OK 按钮，等待软件将脚本拷贝到用户漫游目录。
   如果点 OK，可能会触发 BUG，软件会添加一个 “plugins/explore.js” 插件。主动等待软件完成拷贝，
   然后，会将脚本名称添加到插件列表中，例如“example.js”。然后关闭插件列表，再应用配置，重启后，
   还会将配置中的外部插件路径修改为对应的漫游目录下的完整路径。此时再从插件列表删除外部插件时，不会
   删除相应的脚本文件，如果下次再添加同一个外部插件就会提示文件已经存在，并且像前面所描述一样，添加
   一个错误的“plugins/explore.js”插件。注意，内置插件使用的是“./”相对路径。

   这里存在 BUG 可能是因为桌面版本与在线版本逻辑上的差异导致的，桌面版多了本地插件文件的处理。
   另外，Draw.io 桌面版本在设置外部插件后，重启时可以正确加载外部插件，但是再次重启就不会再加载。
   但是，内置插件一切正常。这个问题将在后面分析插件加载流程章节中进行分析、说明。

   桌面版本会将内置插件代码打包到资源目录下的 `app.asar` 程序资源包中。加载插件需要通过修改配置
   来选择加载的插件：Settings ▶ Configuration... ▶ Plugins。以下是 text.js 插件代码，启用
   此插件后，可以通过 Settings ▶ Extract Text... 将图形中所有文本内容提取出来。主要是通过
   `graph.getIndexableText()` 方法提供文本内容，插件对话框使用的是内置的可配置对话框对象，
   通过 showDialog 方法显示已经创建好的 `Dialog` 实例：

   .. code:: javascript

      // drawio\src\main\webapp\js\diagramly\EditorUi.js
      // drawio\src\main\webapp\js\grapheditor\EditorUi.js
      EditorUi.prototype.showDialog = function(elt, w, h, modal, 
            closable, onClose, noScroll, transparent, onResize, ignoreBgClick)


   由于缺失文档资料，插件机制也只能通过阅读代码来理解：

   *  Draw.loadPlugin() 方法加载一个插件（函数），通过菜单执插件时，插件函数可以接收到一个 `EditorUi` 对象；
   *  ui.actions.addAction() 方法可以向界面注册插件主功能行为代码，通过事件响应处理函数来执行它；
   *  menu.funct 函数用于配置菜单项，示范代码就是通过修改 extras 菜单，将插件 UI 添加到；
      file://C:/Users/OCEAN/AppData/Roaming/draw.io/plugins/example.js

   .. code:: javascript

      /**
       * Text extraction plugin.
       */
      Draw.loadPlugin(function(ui)
      {
        // Adds resource for action
        mxResources.parse('extractText=Extract Text...');

        // Adds action
        ui.actions.addAction('extractText', function()
        {
          var graph = ui.editor.graph;
          var text = graph.getIndexableText(
            (graph.isSelectionEmpty()) ? null :
            graph.getSelectionCells());
          var dlg = new EmbedDialog(ui, text, null,
            null, null, 'Extracted Text:');
          ui.showDialog(dlg.container, 450, 240, true, true);
          dlg.init();
        });

        var menu = ui.menus.get('extras');
        var oldFunct = menu.funct;

        menu.funct = function(menu, parent)
        {
          oldFunct.apply(this, arguments);

          ui.menus.addMenuItems(menu, ['-', 'extractText'], parent);
        };
      });


   插件功能触发时，会先会测试看用户是否有选择某些 `<mxCell>` 图表，如果是就提取这些选中的图形
   上的文本。否则， `getIndexableText()` 接收到 null 输入，其内部就会将 `mxGraphModel`
   模型的根点节作为操作对象，也就是提取所有图表上 label 属性的文本：

   .. code:: javascript

      this.model.getDescendants(this.model.root);

   其中 `getIndexableText()` 方法属于 ``grapheditor\Graph.js`` 脚本中的扩展方法。注意，
   `Graph` 类型与 `mxGraph` 类型的区别，这是编辑器中的图表对象，主要用于解决浏览器上的 UI 交互。
   而底层的 `mxGraph` 是图表数据抽象层，并不是图表图形的呈现，而是数据层面的图表结构描述。

   资源管理器 `mxResources` 提供 parse 方法用于解释键值对，其中 key 将作为菜单等资源消费者
   获取资源的关键字，同样的 key 还用于 Action 的注册，在向菜单添加（注册）菜单项时，只需要将
   key 传入，就可以建立菜单项与 Action 的关联，以及菜单显示的文字。注册动作时，key 可以使用
   后缀 '...'，它会被过滤掉不作为 key 的内容值。但是依然会作为 title 标签文本显示在菜单上，
   如果有相应菜单的话。

   .. code:: javascript

      function Action(label, funct, enabled, iconCls, shortcut);

   资源管理器 `mxResources` 支持多语言国际化， ``src\main\webapp\resources\dia_am.txt``
   就是默认的美式英语字符串资源。所有动作（Action）或者菜单注册时都使用 key，在显示文本的菜单上
   会将 key 值映射资为源文件中相同键值的字符。


Draw.io API Brief (mxGraph)
===========================

   Draw.io 客户端可以表示为打包输出的 mxClient.js 脚本，Web 页面加载此脚本就相当运行了整个
   Draw.io 软件。打包就是将源代码中相关的脚本压缩整合输出到这个脚本中保存。依次包含如下脚本：

   *  mxgraph\src\mxClient.js 客户端浏览器环境检测脚本。此外还用于加载样式、资源、模块：

      .. code:: javascript

         link: function(rel, href, doc, id)
         loadResources: function(fn, lan)
         include: function(src)

      通过阅读此脚本中可以了解 `mxClient.basePath` 目录下的各个模块的加载（打包）顺序。
      ::

         mxGraph 架构源代码 (``drawio\src\main\webapp\mxgraph``)
         │
         ├─ util - 为图形处理提供基础工具类实现：
         │  ├─ mxLog.js              — 日志功能支持，显示或打印调试信息到日志控制台；
         │  ├─ mxObjectIdentity.js   — 对象标识管理，默认以 mxObjectId 作为对象的标识属性；
         │  ├─ mxDictionary.js       — 字典对象，键值对数据管理；
         │  ├─ mxResources.js        — 带有国际化支持的资源管理类，基本字符串资源文件保存在 resources 目录；
         │  ├─ mxPoint.js            — 点，坐标点，`mxPoint(x, y)`；
         │  ├─ mxRectangle.js        — 矩形，基本几何体，`mxRectangle(x, y, width, height)`；
         │  ├─ mxEffects.js          — 基本动画效果支持；
         │  ├─ mxUtils.js            — 工具类，定义各种工具函数；
         │  ├─ mxConstants.js        — 常量集中定义、管理类型；
         │  ├─ mxEventObject.js      — 事件数据对象；
         │  ├─ mxMouseEvent.js       — Web 平台鼠标事件；
         │  ├─ mxEventSource.js      — 事件源管理类型；
         │  ├─ mxEvent.js            — DOM 事件支持；
         │  ├─ mxXmlRequest.js       — HTTP 请求包装类，AJAX 动态数据请求；
         │  ├─ mxClipboard.js        — 剪贴板功能支持，操作 `<mxCells>` 代码；
         │  ├─ mxWindow.js           — 通过 iframe 实现的窗口对象；
         │  ├─ mxForm.js             — 一个简易实现的 HTML forms 对象；
         │  ├─ mxImage.js            — 图像对象，`mxImage(src, width, height, x, y)`；
         │  ├─ mxDivResizer.js       — 界面分界调整功能支持；
         │  ├─ mxDragSource.js       — 外部内容（文件、文本、网页内容）拖放功能支持；
         │  ├─ mxToolbar.js          — 工具条支持；
         │  ├─ mxUndoableEdit.js     — 可恢复操作的编辑功能管理；
         │  ├─ mxUndoManager.js      — 操作历史管理，重做、恢复等功能支持；
         │  ├─ mxUrlConverter.js     — URL 地址转换，将相对地址转换为绝对地址；
         │  ├─ mxPanningManager.js   — 平移功能支持；
         │  ├─ mxPopupMenu.js        — 弹出菜单支持；
         │  ├─ mxAutoSaveManager.js  — 文档自动保存功能支持；
         │  ├─ mxAnimation.js        — 通过定时器实现的基本动画支持；
         │  ├─ mxMorphing.js         — 基于 mxAnimation 实现的形变动画支持；
         │  ├─ mxImageBundle.js      — 内嵌 Base64 编码打包图像管理功能；
         │  ├─ mxImageExport.js      — 画布导出为图像功能实现；
         │  ├─ mxAbstractCanvas2D.js — 画布摸象抽象基类，定义基本的绘图能力接口；
         │  ├─ mxXmlCanvas2D.js      — 通过 XML 绘图实现的画布；
         │  ├─ mxSvgCanvas2D.js      — 通过 SVG 绘图实现的画布；
         │  ╰─ mxGuide.js            — 引导线实现；
         ├─ shape — 各种图表类型，`mxShape` 及其子类型；
         ├─ layout — 各种布局类型，`mxGraphLayout` 及其子类型；
         ├─ model — 核心模型对象，`mxGraphModel`、`mxCell`、`mxGeometry`、`mxCellPath`
         ├─ view — 各种视图对象，包括单元编辑器、样式对象等等；
         │  ├─ mxPrintPreview           — 打印预览图；
         │  ├─ mxOutline                — 图表外轮廓 (overview)；
         │  ├─ mxStylesheet             — 样式对象；
         │  ├─ mxCellEditor             — 单元编辑器，输入文字或双击图表时使用的编辑功能；
         │  ├─ mxCellRenderer           — 单元渲染器，将 `<mxCell>` 中的图表数据渲染成 DOM 呈现的图表；
         │  ├─ mxGraphView              — 核心视图类型，负责为 mxGraph 实例提供视图渲染、用户交互事件处理服务；
         │  ├─ mxGraph                  — 核心类型，这是 mxGraph 主要的 API 对象；
         │  ├─ mxCellOverlay            — 敷层支持，显示工具提示、控制锚点等等；
         │  ├─ mxCellStatePreview       — 配合 mxTemporaryCellStates，用户对图表做移动等操作显示图表预览；
         │  ╰─ mxLayoutManager          — 布局管理器；
         ├─ handler — 各种事件处理器，例如：框选对象时的橡皮筋（mxRubberband），也就是选择框；
         ╰─ io — 各种涉及数据读写的功能支持，例如 XML 数据解码到对象的转换；
            ├─ mxCodecRegistry.js       — 解码器管理器，注册的回调函数会在有数据处理调用执行编码工作；
            ├─ mxCodec.js               — 核心编码器，将 XML 节点文档解释为图表
            ├─ mxObjectCodec.js         — 核心编码器：XML 节点与 JavaScript 对象转换编码器
            ├─ mxCellCodec.js           — 为 `<mxCell>` 设置编码器：new mxObjectCodec(new mxCell(), ['children'...
            ├─ mxModelCodec.js          — 为 `<mxGraphModel>` 设置编码器：new mxObjectCodec(new mxGraphModel())
            ├─ mxRootChangeCodec.js     — 为 `<mxRootChange>` 设置编码器：new mxObjectCodec(new mxRootChange(), ['model', 'previous', 'root'])
            ├─ mxChildChangeCodec.js    — 为子节点变动设置编码器：mxObjectCodec(new mxChildChange(), ['model', 'child',...
            ├─ mxTerminalChangeCodec.js — 为联接点变更 `mxTerminalChange` 设置编码器：
            │                             new mxObjectCodec(new mxTerminalChange(), ['model', 'previous'], ['cell', 'terminal']);
            ├─ mxGenericChangeCodec.js  — 为通用变更设置编码器，例如 `<mxValueChange>` `<mxStyleChange>` `<mxCollapseChange>` 等等
            ├─ mxGraphCodec.js          — 为 `<mxGraph>` 设置编码器：new mxObjectCodec(new mxGraph(), ['graphListeners', ...
            ├─ mxGraphViewCodec.js      — 为 `<mxGraphView>` 设置编码器：new mxObjectCodec(new mxGraphView());
            ╰─ mxStylesheetCodec.js     — 为 `<mxStylesheet>` 设置编码器：new mxObjectCodec(new mxStylesheet());


`mxCodec` 和 `mxObjectCodec`
======================================================

   mxGraph 使用 XML 作为图表数据载体形式，因此，XML 数据到图表图形化之间需要一个解码与编码的过程。
   两个主要的编码器： `mxCodec` 和 `mxObjectCodec` 有不同的用途，构造接收的参数也不同。其中
   对象编码器接爱的 template 是一个对象，它的属性值会被用作编码、解码过程中的默认值（模板）。并且，
   `mxCodec` 最终还是通过编码器获取并使用 `mxObjectCodec` 完成编码工作。注册编码器时，会记录
   编码构建函数名称（相当于类名），在调用解码器时通过 `mxCodecRegistry.getCodec(ctor)` 获取：

   .. code:: javascript

      function mxCodec(document);
      function mxObjectCodec(template, exclude, idrefs, mapping);

   以下是源代码文档中演示 XML 文档解码为 mxCell 图表的示范代码片段。字符串经过 `DOMParser` 处理
   得到 `Document` 对象，再经过 `mxCodec` 解码得到图表对象实例。这里会以 node.nodeName 作为
   相应的类型构造器名称，通过编码器管理器 `getCodec()` 得到当前为此类型（构造器）注册的编码器，
   `mxObjectCodec` 为默认后备编码器：

   .. code:: javascript

      var xml = `
         <root>
            <mxCell id="2" value="Hello," vertex="1">
               <mxGeometry x="20" y="20" width="80" height="30" as="geometry" />
            </mxCell>
            <mxCell id="3" value="World!" vertex="1">
               <mxGeometry x="200" y="150" width="80" height="30" as="geometry" />
            </mxCell>
            <mxCell id="4" value="" edge="1" source="2" target="3">
               <mxGeometry relative="1" as="geometry" />
            </mxCell>
         </root>
      `;
      var doc = mxUtils.parseXml(xml);
      var codec = new mxCodec(doc);
      var elt = doc.documentElement.firstChild;
      var cells = [];
      
      while (elt != null)
      {
        cells.push(codec.decode(elt));
        elt = elt.nextSibling;
      }
      
      graph.addCells(cells);

   所有解码过的对象会通过 `putObject` 和 `getObject` 方法缓存或重复使用。解码类还提供了两对
   钩子（Hook）， `beforeDecode` 和 `afterDecode`，以及 `beforeEncode` 和 `afterEncode`，
   用户可以在子类形中重写它们，以实现在解码前、后执行某些操作。编码涉及当前节点属性处理（包括属性过滤），
   以及子节点的递归处理，对应 `decodeAttributes` 和 `decodeChildren`。

   解码机制流程图：
   ::

      mxCellCodec ─────────────╮ <············· mxCell
      mxModelCodec ────────────┤ <············· mxGraphModel
      mxRootChangeCodec ───────┤ <············· mxRootChange
      mxChildChangeCodec ──────┤ <············· mxChildChange
      mxTerminalChangeCodec ───┤ <············· mxTerminalChange
      mxGenericChangeCodec ────┤ <············· mxValueChange─╮ mxStyleChange
      mxGraphCodec ────────────┤ <············· mxGraph       │ mxGeometryChange 
      mxGraphViewCodec ────────┤ <············· mxGraphView   │ mxCollapseChange 
      mxStylesheetCodec ───────┤ <············· mxStylesheet  │ mxVisibleChange 
                               │                     │        │ mxCellAttributeChange
                               │                     ↓        ╰─────
                               │ ┌─────────────────────────┐
                               │ │   mxObjectCodec( tmpl ) │     mxGraph Object
                               │ └─────────────────────────┘          🟩
                               │       │              decode(codec, elt) ─────→
                               ↓       ↓                 ↑ 
                           register( codec )             ·
                     ┌────────────────────────┐          ·
                     │                        │          ·
                     │    mxCodecRegistry     │          ·
                     │                        │          ·
                     └────────────────────────┘          ·
                           getCodec(ctor) ···············╯
                                      ↑  
              ╭───────────────────────╯
              │ getConstructor(elt.nodeName)
              │       ↑
              │ decode(elt)
      ┌────────────────────┐
      │                    │           🟨
      │ mxCodec (document) │ ←─────────────────── 
      │                    │   XML Document Nodes
      └────────────────────┘

   编码处理过程中有个令人疑惑的点，为何 mxCodec 或者 mxObjectCodec 本身是解码器


Draw.io Project and TypeScript Projects Manager
======================================================

   Draw.io 项目主要由编辑器（App、EditorUi）和 mxGraph 图形库两两部分，后者相对稳定文档也完整。
   2020 年 11 月更新到 mxGraph 4.2.2 release。可以通过 `mxClient.VERSION` 查看版本号。

   *  https://github.com/maxGraph/maxGraph
   *  https://github.com/jgraph/mxgraph/forks
   *  https://github.com/jgraph/drawio-desktop

   对应源代码的 src/main/webapp 目录下的内容，这个目录包含的内存就是一个杂乱，简单用表格汇总：

   ======== ===================================================================
   mxGraph  源代码保存在 mxgraph 子目录 ；
   Draw.io  主要源代码在 js/grapheditor 和 js/diagramly，还有 mxGraph 基类扩展 shapes（打包为 js/shapes.min.js）；
   Shapes   各种内置图形模板，stencils 目录（打包为 stencils.min.js），新建文档时的模板（templates）；
   Plugins  多个内置插件，保存在 plugins 子目录下，包括 Mindmaps 和 WebCola layout plugin；
   Bundles  脚本打包输出文件（各种 min.js），webapp 目录下有，js 目录下也有；
   3rd libs 各种第三方法类型库，例如实现 P2P 网络通信的 simple-peer，数学公式渲染的 MathJax 等等；
   Web dep. Web 部署文件，包含一个 Java Servlet 实现的服务器（WEB-INF），以及 HTML 客户端页面；
   ======== ===================================================================

   Draw.io 仓库中自带的 mxGraph 继承自 mxGraph 4.2.2，但是大部分文件都有改动，并且移除了内部
   的编辑器实现以及过时的矢量标记语言 (VML) 绘图支持。修改后的部分代码并没更新到 mxGraph 仓库，
   可以使用 `diff` 命令查看变动的部分，可以看到移除 VML 功能的同时也添加了一部分代码。W3C 给出的
   `Vector Markup Language (VML) <https://www.w3.org/TR/NOTE-VML>` 规范文档定格在 1998。
   现在已经是 SVG 统领开源矢量图形标准：

   *  移除 `mxEditor` 内部编辑器的实现，editor 整个目录（4 个脚本）；
   *  移除 VML 绘图支持，util/mxVmlCanvas2D.js；
   *  移除只供 `mxEditor` 使用的整个 resources 目录的文本资源，另外创建了 webapp/resources/ 资源目录；
   *  移除了 io 目录下的四个脚本，与 `mxEditor` 相关：

   .. code:: javascript

      diff -r mxgraph-4.2.2/javascript/src/js  drawio/src/main/webapp/mxgraph/src

      ├── js
      │   ├── editor
      │   │   ├── mxDefaultKeyHandler.js
      │   │   ├── mxDefaultPopupMenu.js
      │   │   ├── mxDefaultToolbar.js
      │   │   └── mxEditor.js
      │   ├── io
      │   │   ├── mxDefaultKeyHandlerCodec.js
      │   │   ├── mxDefaultPopupMenuCodec.js
      │   │   ├── mxDefaultToolbarCodec.js
      │   │   └── mxEditorCodec.js
      │   └── util
      │       └── mxVmlCanvas2D.js
      └── resources
         ├── editor.txt
         ├── editor_de.txt
         ├── editor_zh.txt
         ├── graph.txt
         ├── graph_de.txt
         └── graph_zh.txt

   桌面版本基于 Electron 实现，这部分的实现代码在 drawio-desktop 仓库，主要是 Web 客户端
   与 Electron API 的适配层实现。

   在浏览 mxGraph 分叉项目信息发现，maxGraph 在做 TypeScript 和模块化的迁移，并且使用 npm 
   package 进行管理，这比起自己从零开始转成 TypeScript 脚本更节省时间。此分叉也提交了一些 Pull
   Request，但是一直没有被采纳，应该是维护团队转手 draw.io AG 后缺少人力，也更有可能是缺少人才，
   下面给出猜测理由。当然，如果从 JavaScript 源代码维护的角度出发，还可以只添加 JSDoc，这样就
   可以利用 VS Code 自带的 JSDoc 注解类型检查功能，同时还避免从其它分叉项目引入新 BUG 的可能。
   从另一方面来讲，JavaScript ES6 规范之后，此脚本语言能力有较大的提升，类型机制也更完善，不一
   定要转换为 TypeScript 来做项目维护，ES6 + JSDoc 也是不错的选择。例如，mxGraph 就对 mxGraph
   项目做了代码结构上调整，增加 mixins/EditingMixin.ts 这样一些代码文件，这不一定见得是好事。
   另外，对原项目的注解也有较多改动，也不见得有超越原始代码注解的质量，可以说达不到原汁原味。

   而编辑器部分目前还是由 JGraph 团队维护、开发，但是其文档缺失，同时代码中的注解有非常多的错乱。
   这导致编辑器实现的文档基本是全无状态，只能通过代码分析、用户界面功能对照来判断各种对象的用途。
   由于 JavaScript 代码缺少接口类型信息，维护上也极大不便利，只能由熟悉整个架构的内部开发者承担。
   由于代码使用 Mixin 风格组织，同样的类型接口分散于各个功能相关的代码文件之内，这也使得搜集接口
   信息变得困难。尽管可以使用 TypeScript 编译器生成类型声明文件，但是错误的注解、省略的参数，还有
   分散的代码逻辑和实例层面上的功能扩展、重写，也使得 d.ts 类型文件中的信息参考作用不大。只能尝试
   使用 `App(\.\w+)+ =` 或者 `(EditorUi|editorUi)(\.\w+)+ =` 这样的正则表达式来搜索可能的
   接口代码。特别是 `EditorUi` 这个核心类型，只能用一个词来形容它：无处不在！

   以下是源代码中的无厘头注解的展示板，还好我的英文水平不太低，不然直接被带沟里。这是不是拿这些代码
   来鞭尸，只是 draw.io AG 团队是否不是原来开发 mxGraph 那个团队，这两者的代码水平明显不是同一
   个层次。我看到的是一个在走向下坡的开源产品，想必正是因为代码管理太糟糕，逼着官方拒绝社区代码贡献：

   .. code:: javascript

      /**
      * Translates this point by the given vector.
      * 
      * @param {number} dx X-coordinate of the translation.
      * @param {number} dy Y-coordinate of the translation.
      */
      RemoteFile.prototype.isAutosave = function()

      /**
      * Constructs a new action for the given parameters.
      */
      function Menu(funct, enabled)

      /**
      * Creates function to apply value
      */
      ColorDialog.prototype.colorNames = {};

      /**
      * Copyright (c) 2006-2012, JGraph Ltd
      */
      Format = function(editorUi, container)

      /**
      * Adds the given option.
      */
      BaseFormatPanel.prototype.createPanel = function()

      /**
      * Adds the given option.
      */
      BaseFormatPanel.prototype.createTitle = function(title)

      /**
      * Adds the label menu items to the given menu and parent.
      */
      ArrangePanel = function(format, editorUi, container);


   由于 Draw.io 并未使用模块化技术来管理源代码，因此在运行环境或者开发环境中，所有可用的类型都被
   看作是全局空间中的类型。这与现代模块化的开发技术不同，VS Code 等使用 TypeScript 语言开发时，
   它的智能提示信息默认都是根据模块化处理的，也就是引用了某些模块（比如 mxClient）才会在当前提供
   脚本环境中提供相应的类型信息提示，否则就显示为 any 类型。

VS Code and TypeScript/JavaScript Language Server
-------------------------------------------------

   作为一个基于 TypeScript 脚本开发的工具，VS Code 自带 LSP 智能提示，只需使用 `tsc --init` 命令
   在当前目录生成工程配置文件，这样解释器就会感知到这是一个脚本工程。通过修改配置，启用以下两项功能
   就可以让 LSP 进行 JavaScript 脚本文件的识别与符号处理与错误检查。只有项目根目录下才设置 
   `tsconfig.json` 配置，也就是说有这个配置文件的就是一个 TypeScript 工程。当设置 `"allowJs"`
   为 `true`，那么此时就相当于一个用于 JavaScript 项目的 `jsconfig.json` 配置文件，这是两个
   不同名称配置文件的唯一的内容上的差异，其它功能和作用基本相同。使用 TypeSCript 的一大好处是
   静态类型检查，当然 JavaScript 配合 JSDoc 注解功能也可以实现类型检查功能。可以通过将 Draw.io
   源代码设置为 TypeScript/JavaScript 项目，以获取更多的类型信息提示，尽管 Draw.io 源代码在
   静态类型检查或注解文档（JSDoc）这方面工作质量非常差。

   以下提供一个配置 Draw.io 工程的 tsconfig.json 配置参考：

   *  使用 `include` 包含有核心代码的目录，其它资源目录过滤掉不必处理，节省硬件资源。
   *  使用 `exclude` 排除了 webapp 目录下的所有打包输出的脚本。包括 mxGraph 客户端。
   *  使用 `module` 配置项禁用了模块化（None）。

   注意，要排除指定目录下的某文件，需要使用 `**/` 匹配所有目录，再跟指定目录及文件名。否则，
   直接指定目录只能匹配到根目录下的一级子目录。如果只是匹配文件名，没有指定目录部分，则对所有
   目录进行匹配，就如 `*.min.js` 这条规则会排除掉所有相应后缀名的脚本文件。排除也只是排除
   包含列表中的文件，没有包含的文件本就不用排除。

   因为设置了非模块化，构建项目时可以使用 `outFile` 将所有脚本原样打包到一个脚本文件，而无模块
   包装，这种传统的脚本形式可以直接在浏览器中运行，而不必使用模块导入。脚本打包的先后顺序与其在
   `include` 列表中的前后顺序相关，某些脚本有依赖关系的可以通过此列表进行调整。

   .. code:: javascript

      {
      "compilerOptions": {
         /* Visit https://aka.ms/tsconfig to read more about this file */

         /* Modules */
         "module": "none",

         /* JavaScript Support */
         "allowJs": true,
         "checkJs": true,

         /* Emit */
         "declaration": true,
         "outFile": "./dist/bin.js",
         "outDir": "./dist",

         /* Type Checking */
         "strict": true,
      },
      "exclude": [
         "*.min.js",
         "**/mxgraph/mxClient.js",
      ],
      "include": [
         "src/main/webapp/mxgraph/**/*", 
         "src/main/webapp/js/**/*",
      ]
      }


   为了解 LSP 语言服务器或客户端的运行状态，可以开启 Trace: Server 配置项以记录日志，或者查看
   TS Server Log 的状态。开启语言服务器的日志后，就可以通过 Output -> TypeScript 面板查看
   语言服务器输出的调试信息，看到以下内容时表示可以使用智能提示功能。语言服务器与编辑器交互过程产生
   的日志内容，可以执行命令打开查看： Developer: Open Log File...。VS Code 工作空间支持添加
   多个工程（目录），以下日志 Search path 显示会按当前打开的脚本文件优先定位、解释它的工程配置文件：

   .. code:: bash

      # Developer Log (Debug Output)
      2024-11-13 16:54:07.305 [info] Starting TS Server
      2024-11-13 16:54:07.305 [info] Using tsserver from: c:\VSCode\resources\app\extensions\node_modules\typescript\lib\tsserver.js
      2024-11-13 16:54:07.305 [info] <semantic> Forking...
      2024-11-13 16:54:07.305 [info] <semantic> Starting...

      # TypeScript Log
      Info 0    [21:35:23.848] Starting TS Server
      Info 1    [21:35:23.850] Version: 5.1.6
      Info 2    [21:35:23.850] Arguments: C:\VSCode\Code.exe C:\nvm\node_modules\typescript\lib\tsserver.js \
                                          --useInferredProjectPerProjectRoot \
                                          --enableTelemetry \
                                          --cancellationPipeName C:\Users\OCEAN\AppData\Local\Temp\vscode-typescript\0eadd7ee1acd88bfe5b1\tscancellation-1c27e958efb6d6cdd874.tmp* \
                                          --logVerbosity normal \
                                          --logFile c:\Users\OCEAN\AppData\Roaming\Code\logs\20241113T204446\window1\exthost\vscode.typescript-language-features\tsserver-log-I1hcOZ\tsserver.log \
                                          --traceDirectory "c:\Users\OCEAN\AppData\Roaming\Code\logs\20241113T204446\window1\exthost\vscode.typescript-language-features\tsserver-log-bXTLaa" \
                                          --locale en \
                                          --noGetErrOnBackgroundUpdate \
                                          --validateDefaultNpmLocation \
                                          --useNodeIpc
      Info 3    [21:35:23.850] Platform: win32 NodeVersion: v20.18.0 CaseSensitive: false
      Info 4    [21:35:23.850] ServerMode: undefined hasUnknownServerMode: undefined
      Info 5    [21:35:23.882] Host information vscode
      Info 6    [21:35:25.622] Search path: /drawio/src/main/webapp/js/diagramly
      Info 7    [21:35:25.625] For info: /drawio/src/main/webapp/js/diagramly/App.js :: Config file name: /drawio/src/main/webapp/js/tsconfig.json
      Info 8    [21:35:25.626] Creating configuration project /drawio/src/main/webapp/js/tsconfig.json
      Info 9    [21:35:25.705] Config: /drawio/src/main/webapp/js/tsconfig.json
      {
         "rootNames": [
         "c:/msys64/pl/drawio/src/main/webapp/mxgraph/src/mxClient.js",
         ...
         "c:/msys64/pl/drawio/src/main/webapp/js/PostConfig.js",
         "c:/msys64/pl/drawio/src/main/webapp/js/PreConfig.js",
         ...
         "c:/msys64/pl/drawio/src/main/webapp/js/diagramly/App.js",
         "c:/msys64/pl/drawio/src/main/webapp/js/diagramly/sidebar/Sidebar.js",
         ...
         "c:/msys64/pl/drawio/src/main/webapp/js/grapheditor/Actions.js",
         "c:/msys64/pl/drawio/src/main/webapp/js/grapheditor/Dialogs.js",
         "c:/msys64/pl/drawio/src/main/webapp/js/grapheditor/Editor.js",
         "c:/msys64/pl/drawio/src/main/webapp/js/grapheditor/EditorUi.js",
         "c:/msys64/pl/drawio/src/main/webapp/js/grapheditor/Format.js",
         "c:/msys64/pl/drawio/src/main/webapp/js/grapheditor/Graph.js",
         "c:/msys64/pl/drawio/src/main/webapp/js/grapheditor/Init.js",
         "c:/msys64/pl/drawio/src/main/webapp/js/grapheditor/Menus.js",
         "c:/msys64/pl/drawio/src/main/webapp/js/grapheditor/Shapes.js",
         "c:/msys64/pl/drawio/src/main/webapp/js/grapheditor/Sidebar.js",
         "c:/msys64/pl/drawio/src/main/webapp/js/grapheditor/Toolbar.js",
         ...
         ],
         "options": {
            "target": 3,
            "module": 0,
            "checkJs": true,
            "outFile": "c:/msys64/pl/drawio/dist/bin.js",
            "outDir": "c:/msys64/pl/drawio/dist",
            "esModuleInterop": true,
            "forceConsistentCasingInFileNames": true,
            "strict": true,
            "skipLibCheck": true,
            "configFilePath": "c:/msys64/pl/drawio/tsconfig.json"
         }
      }
      Info 10   [00:31:40.945] Starting updateGraphWorker: Project: c:/msys64/pl/drawio/tsconfig.json
      Info 11   [00:31:45.912] Finishing updateGraphWorker: Project: c:/msys64/pl/drawio/tsconfig.json 
                Version: 1 structureChanged: true structureIsReused:: Not Elapsed: 4966.5671999999995ms
      Info 12   [00:31:45.912] Project 'c:/msys64/pl/drawio/tsconfig.json' (Configured)
      Info 13   [00:31:45.912]   Files (302)

   VS Code 支持在一个工作空间（Workspace）管理、打开多个工程目录，当用户打开不同工程中的代码文件，
   就会启动一个内置或指定的 TypeScript 语言服务实例，并且搜索当前文件所归属的工程配置文件，并根据
   工程根目录路径和配置文件的设置（exclude, include 等等）找到要进行代码语法解释的代码文件，生成
   关系图（Graph），通过工程对象的 `updateGraph()` 方法。工作空间中的每个工程对应 TypeScript 
   源代码中的 `Project` 类型对象，也就是 `LanguageServiceHost` 子类，它代表的是语言服务器的
   主机（客户端），语言服务器为客户端提供各种语法分析数据、操作建议等等。完成更新后就建立了代码文件的
   基本信息，包括模块的依赖关系。

   *  `Compiling TypeScript <https://code.visualstudio.com/docs/typescript/typescript-compiling>`__
   *  `Language Server Extension Guide <https://code.visualstudio.com/api/language-extensions/language-server-extension-guide>`__
   *  `TypeScript standalone server <https://github.com/microsoft/TypeScript/wiki/Standalone-Server-(tsserver)>`__

   The TypeScript standalone server (aka tsserver) is a node executable that 
   encapsulates the TypeScript compiler and language services, and exposes them 
   through a JSON protocol. tsserver is well suited for editors and IDE support.

   VS Code 支持多个 TypeScript 编译器版本，并且可以自动检测项目根目录中 node_modules 模块目录下
   安装好的编译器版本。用户可以在 VS Code 工程配置文件中显式设置 `typescript.tsdk` 配置项，指定
   要使用的编译器版本路径，路径指向 tsserver.js 所在的目录，通常在 TypeScript 编译器的 lib 目录下。
   一般升级到最新的 VS Code 就会包含最新版本的 TypeScript 编译器。

   使用 `npm install -g typescript` 或者 `npm list -g typescript` 命令可以安装新版本或查询
   已经安装的版本，也可以安装指定版到工程的模块目录中。以下是编译器路径配置参考：

   .. code:: javascript

      {
         "typescript.tsdk": "/usr/local/lib/node_modules/typescript/lib"
      }

   .. Tip::

      Tip: To get a specific TypeScript version, specify @version during npm install. 
      For example, for TypeScript 3.6.0, you would use `npm install --save-dev typescript@3.6.0`. 
      To preview the next version of TypeScript, run `npm install --save-dev typescript@next`.


   *  `IntelliSense <https://code.visualstudio.com/docs/editor/intellisense>`__
   *  `JavaScript in Visual Studio Code <https://code.visualstudio.com/docs/nodejs/working-with-javascript>`__
   *  `JavaScript Language Service in Visual Studio <https://github.com/microsoft/TypeScript/wiki/JavaScript-Language-Service-in-Visual-Studio>`__

   VS Code 编程环境有丰富的智能提示内容，这些智能提示内容来源包括以下三个，前两种是基于源代码文件
   内容提供的智能提示，后面这种是最通用的通过专用类型声明文件提示的智能提示，包括自动获取社区维护的
   类型声明文件（Automatic acquisition of type definitions），社区维护的类型声明文件主要来
   自 DefinitelyTyped 项目：

   *  IntelliSense based on type inference
   *  IntelliSense based on JSDoc
   *  IntelliSense based on TypeScript Declaration Files

   在只有 type inference 智能提示有效的情况下，只有在编辑器中打开的脚本中的信息才会被自动提示。
   其它未感知的类型悬停时显示隐式的 any 类型（ImplicitAny）。另外，因为 LSP 服务器会根据脚本
   路径来确认其所归属的项目，并且按其项目分析得到的符号来给出智能提示信息。如果使用了文件符号链接，
   有可能因为打开文件所使用的路径与项目路径不匹配，导致 LSP 服务器误认为当前代码文件不属于当前工程，
   从而不提供相关的类型提示。这种情况也会导致只有 type inference 提示信息。

   TypeScript 作为 JavaScript 的超集，它默认的代码管理行为都基于模块化操作的。为了解决传统
   JavaScript 项目的符号处理问题，就需要在 TypeScript 项目配置做一些配置工作：

   *  为历史遗留代码编制类型声明文件 `.d.ts` 并放置到 `typeRoots` 配置项所指向的目录中；
   *  通过 TypeScript 编译器生成类型声明文件 `emitDeclarationOnly`，并放置到 `typeRoots` 配置项所指向的目录中；
   *  通过 NPM 下载并使用现有的类型声明文件，也可以激活 `typeAcquisition` 配置在后台自动下载；
   *  代码文件开头使用 `//@ts-check` 或者激活 `checkJs`，可以提供 TypeScript 一样的类型查功能；
   *  此外，还可以为历史遗留代码添加 JSDoc 注解内容，解决类型检查需要；

   偷懒的方式是将项目设置为 JavaScript 项目，即在配置文件中设置 `"allowJs": true`，这样的配置
   tsconfig.json 就等价于 jsconfig.json，两个配置文件名一样有效用。

   一般的 TypeScript 项目中是不需要额外设置 jsconfig.json 配置文件的，除了以下几种情况：

   *  Not all files should be in your JavaScript project (for example, you want 
      to exclude some files from showing IntelliSense). This situation is common 
      with front-end and back-end code.
   *  Your workspace contains more than one project context. In this situation, 
      you should add a jsconfig.json file at the root folder for each project.
   *  You are using the TypeScript compiler to down-level compile JavaScript source code.

   以下模块及类型声明文件生成相关的配置项仅供参考：

   .. code:: javascript

      {
         "compilerOptions": {
            "typeRoots": ["./typings", "./vendor/types"],  /* Specify multiple folders that act like './node_modules/@types'. */
            "types": ["node", "jest", "express"],          /* Specify type package names to be included without being referenced in a source file. */

            "allowJs": true,                               /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */
            //"strict": true,                              /* Enable all strict type-checking options. */

            "declaration": true,                           /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
            "emitDeclarationOnly": true,                   /* Only output d.ts files and not JavaScript files. */
            "outDir": "../@types/",                        /* Specify an output folder for all emitted files. */

         },
         "typeAcquisition": {
            "enable": true,
            "include": ["jquery"],
         }
      }

   作为基于 Node 平台的开发工具，NPM 模块管理使用 node_modules 目录作为项目所依赖模块的存放点。
   默认情况下，TypeScript 将 node_modules/@types 目录作为默认的类型声明文件的存放目录。所有
   @types 中可见的类型声明文件模块都可以为智能提示、类型检查提供信息。有效的模块目录包括所有封闭
   目录（enclosing folder），即所有父层目录中的类型模块目录，比如 ../node_modules/@types/。

   通过指定 `typeRoots` 可以改变以上默认行为，按用户配置的目录列表为类型声明文件的来源路径。通过
   指定 `types` 可以设置要加载到全局空间（globalThis）的类型声明，默认加载 @types 中所有模块，
   除非通过配置此列表限定。

   另外，TypeScript 还为浏览器环境提供了默认类型库配置（lib），这些类型库对应的是浏览器环境中的
   可用类型，例如 ES5、ES6、DOM、WebWorker 等等，甚至还有古老的 ScriptHost。


Non-modular JavaScript Project
------------------------------

   模块化是传统脚本工程到现代大规模 Web 工程的一个标志性技术，现代编程工具基本上都按模块化组织代码。
   应模块技术而起的还有组件技术，通过将某种单一功能或 UI 封装为一个相对独立（低耦合）的功能模块，使得
   大规模工程可以很好地通过小块化的功能进行管理和维护，这就是组件的基本概念。

   以下是一个使用了类型声明文件的、传统非模块化工程的配置模板，源代码中没有使用模块化的导出、导入相关
   语法。配置文件指定了 @types 为类型声明文件的专用存放目录，其中只定义了一个示例模块（Example），
   类型声明文件的具体编制方式请参考官方文档：

   .. code:: bash

      $ tree
      .
      ├── @types
      │   └── Example
      │       ├── index.d.ts
      │       ├── LICENSE
      │       └── README.md
      ├── base
      │   └── utils.js
      ├── src
      │   └── App.js
      └── tsconfig.json

   index.d.ts

      .. code:: javascript

         // Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

         /// <reference types="node" />

         import { IncomingMessage } from "http";

         interface Utils {
            extends(ctor: Function, superCtor: Function): boolean
         }

         declare function test(req: IncomingMessage): null;

         
   utils.js

      .. code:: javascript

         const Utils = {
            /**
            * 
            * @param {Function} ctor 
            * @param {Function} superCtor 
            */
            extends: function (ctor, superCtor) {

               const f = function(){}

               ctor.prototype = new superCtor()
               ctor.prototype.contructor = ctor
            }
         };

         function test(req) {
            // ...
         }


   App.js

      .. code:: javascript

         function App () {
            console.log("App ctor.")
         }


         function MainApp () {
            console.log("MainApp ctor.")
         }

         Utils.extends(MainApp, App)

         console.log("Is MainApp subclass of App?", new MainApp() instanceof App)
         console.log("Waht is 'test'?", test)

   tsconfig.json

      .. code:: javascript

         {
            "compilerOptions": {
               "moduleResolution": "node",
               "typeRoots": ["@types"],
               "types": [ "Example"],
               "module": "None",
               "target": "ES6",
               "allowJs": true,
               "checkJs": true,
               "outFile": "dist/bin.js",
               "outDir": "dist",
            },
            "include": ["base/**/*", "src/**/*"],
            
            "typeAcquisition": {
               "enable": true,
               "include": ["jquery"],
            }
         }

   项目中因为在类型声明文件中使用 Node 模块，需要在配置文件中设置相关的 `moduleResolution`
   模块解释算法，否则会报错 Cannot find module 'undici-types'。

   由于缺少非模块化的组织，代码文件之间没有明显的依赖关系，直接使用 tsc 命令打包时（outFile）,
   代码出现的前后位置就不一定能正确按实际的依赖关系排序，而是以目录路径排序，涉及 `include` 中
   包含的顺序。包含的路径可以设置先包含某些子目录，再包含父目录，路径可以出现重叠。为了保持这种非
   模块化工程结构，同时也将 `module` 配置为 None 方式表示不要使用模块化格式打包，而是保持代码
   原来的组织结构。

   激活 `allowJs` 目的是将 tsconfig.json 配置文件当作定义 JavaScript 项目的配置文件，也就是
   等价一个 jsconfig.json。另外，激活 `checkJs` 配置表示对 JavaScript 代码进行类型检查，等价
   于在脚本文件的开头使用 `//@ts-check`。激活类型检查的好处是为代码提示更完整的类型信息，包括提示
   用户为有问题的代码生成相应的 JSDoc 注解。

   可以使用类似以下 shell 脚本命令手动将所有脚本打包（拼接）到一起，并输入 node 中执行：

   .. code:: bash

      $ cat base/utils.js src/App.js | node -
      App ctor.
      MainApp ctor.
      is MainApp subclass of App? true

   VS Code 处理传统非模块化项目时，常常会出现智能提示问题，只能提示那些已经打开的代码文件中类型，
   关掉这些打开的代码文件后，就不能给出其包含的类型信息，悬停显示信息为未知类型（Implicit Any）。


Modular Projects
----------------

   模块化标志着 Web 应用开发进入到一个工程化时代。早期的 Web 应用项目的代码都是手工管理的，随着
   工程规模增长，传统的开发模式不能很好适配，模块化就是这样一个需求中演变的一种技术。早期，由于
   JavaScript 规范发展落后，缺失模块化规范，导致各路模块化不统一，首先众多的模块格式。随着规范
   出台，ESM 模块规范也伴随 esbuild 等一系列打包工具的兴起，其打包效率远远高于老牌的臃肿的 Webpack。
   越来越多的打包工具开始使用 esbuild 作为底层工具，其中 Vite 最具代表性，而 Tsup 则专注于
   Typescript 项目打包。只需执行一条 `esbuild --bundle App.js` 命令就可以完成打包。当然，
   这只是初步的打包，就是将编译器处理好的各个独立的脚本文件集中到一个文件布局，并没有加代码压缩、
   整理、混淆等等额外的工序。

   -  https://esbuild.github.io/
   -  https://github.com/parcel-bundler/parcel
   -  https://rollupjs.org/
   -  https://github.com/FredKSchott/snowpack
   -  https://www.npmjs.com/package/systemjs/v/5.0.0
   -  https://github.com/evanw/esbuild/blob/main/docs/architecture.md
   -  https://github.com/systemjs/systemjs/blob/main/docs/system-register.md
   -  `SystemJS 2.0.0 Release <https://guybedford.com/systemjs-2.0>`__

   `Micro Frontends extending the microservice idea to frontend development <https://micro-frontends.org>`__

   ESBuild 主要功能特性：

   *  Extreme speed without needing a cache
   *  JavaScript, CSS, TypeScript, and JSX built-in
   *  A straightforward API for CLI, JS, and Go
   *  Bundles ESM and CommonJS modules
   *  Bundles CSS including CSS modules
   *  Tree shaking, minification, and source maps
   *  Local server, watch mode, and plugins

   ========= ===================================================================
   ES MODULE - EcmaScript Module (ESM) 规范，Web 最新模块标准，支持 import 和 export 关键字进行模块导入导出处理。
   AMD       - Asynchromous Module Definition 是 RequireJS 中的模块定义，AMD 是异步加载模块，推崇依赖前置。
   CMD       - Common Module Definition 是在 AMD 基础上改进的一种规范，SeaJS 中使用。CMD 是就近依赖，而 AMD 是前置依赖。
   CommonJS  - Node.js 环境中使用，一个单独的文件就是一个模块，使用 `require` 方法加载模块，返回 `module.exports` 导出对象。
   UMD       - Universal Module Definition 兼容 AMD 和 commonJS 规范的同时，还兼容全局引用的方式。
   SystemJS  - System.js， `System.register` 可以看作一个新的模块设计， `System.import()` 导入，支持 ES5 运行环境下使用 ES6 modules（ESM）。
   ========= ===================================================================

   .. code:: javascript

      // ES5 script
      <script src="some.js"></script>

      // ES6 module
      <script src="some_es_module.js" type="module" ></script>

      // https://github.com/systemjs/systemjs/blob/main/docs/api.md
      <script type="systemjs-importmap">
         {
            "imports": { "sjs_module": "./sjs_module.js" }
         }
      </script>
      <script type="systemjs-module" src="import:sjs_module"></script>
      <!-- load SystemJS itself from CDN -->
      <script src="https://cdn.jsdelivr.net/npm/systemjs/dist/system.js"></script>


   CommonJS 和 AMD 模块格式定义了一个 `exports` 对象，通过它来完成导出操作。AMD 模块类型定义参考如下：

   .. code:: javascript

      define("mxGraph/mxStencil", ["require", "exports", ...], function (require, exports, ...) {
         // module contents ...
      });

   TypeScript 本身也支持打包，但这不是专长，只支持只有当输出 amd 和自己定义的 system 模块打包。
   只需要设置配置 `module` 为此两者之一，再设置 `outFile` 指定打包文件输出路径。

   System.js 是一个通用的模块加载器，它可以在浏览器环境下加载 JavaScript 和 TypeScript 模块。
   它是由开发者 Guy Bedford 创建的，用于解决模块加载的问题。System.js 可以加载 CommonJS、AMD、
   ES6 和 TypeScript 等模块类型。 `System.register` 支持的特性如下：

   *  Dynamic import()
   *  import.meta, including import.meta.url and import.meta.resolve
   *  Top-level await
   *  Live bindings updates, including through reexports, star exports and namespace imports, and any combination of these
   *  Circular references including function hoisting (where functions in non-executed modules can be used in circular reference cases)
   *  import assertions

   以下是 System.register 模块格式定义，以及 TypeScript 生成的 System 模块打包输出：

   .. code:: javascript

      System.register([...deps...], function (_export, _context) {
      return {
         setters: [...setters...],
         execute: function () {

         }
      };
      }, [...metas...],);


      System.register("mxGraph/mxStencil", [], function (exports_1, context_1) {
         "use strict";
         var mxStencil;
         var __moduleName = context_1 && context_1.id;
         return {
            setters: [],
            execute: function () {
                  /**
                  * Shape define by xml nodes.
                  */
                  mxStencil = class mxStencil extends mxShape {
                     /**
                     * mxStencil initializer
                     * @param {string} name
                     */
                     setName(name) {
                        this.name = name;
                        // base.init()
                     }
                  };
                  exports_1("default", mxStencil);
            }
         };
      });


TypeScript and Project References
---------------------------------

   `Intro to the TSConfig Reference <https://www.typescriptlang.org/tsconfig>`__
   参考手册完整地描述了工程配置文件的使用，配置文件的顶级配置项主要包含以下几项内容：

   .. code:: javascript

      {
         "compilerOptions": {
            /* Visit https://aka.ms/tsconfig to read more about this file */
            ...
            /* JavaScript Support */
            "allowJs": true,     /* Allow JavaScript files to be a part of your program. */
            "checkJs": true,     /* Enable error reporting in type-checked JavaScript files. */
            ...
         },
         "files": ["path/to/some.js"]         // Default: false
         "extends": "tsconfig.base.json",     // Default: false
         "exclude": ["mxGraph"],              // Default: ['node_modules', 'bower_components', 'jspm_packages', 'outDir']
         "include": [                         // Default: [] if files is specified; **/* otherwise.
            ".", "base"],
         "references": [                      // Default: false
            { "path": "src/main/webapp/js/tsconfig.json"}, 
            { "path": "src/main/webapp/mxgraph/src/tsconfig.json"},
         ],

         // NEW TypeScript 3.8+: Options for file/directory watching
         "watchOptions": {
            // Use native file system events for files and directories
            "watchFile": "useFsEvents",
            "watchDirectory": "useFsEvents",
            // Poll files for updates more frequently
            // when they're updated a lot.
            "fallbackPolling": "dynamicPriority",
            // Don't coalesce watch notification
            "synchronousWatchDirectory": true,
            // Finally, two additional settings for reducing the amount of possible
            // files to track  work from these directories
            "excludeDirectories": ["**/node_modules", "_build"],
            "excludeFiles": ["build/fileWhichChangesOften.ts"]
         }
      }
  
   配置文件中主要的是设置编译器选项，通过在配置文件中指定编译器参数，就可以在工程任意目录中执行 
   `tsc` 命令来进行编译工作。当然没有项目配置文件，也可以直接通过命令行参数来指定编译器功能，
   这种方式通常只用于少量几个文件的处理。顶级配置项除了编译参数之外，还有几个用于过滤或包含指定
   项目文件的配置项。默认情况下，项目默认配置 `**/*` 会处理所有脚本，除非使用 `exclude` 排除
   的目录。如果设置了 `files` 和 `include`，那么就只会对这两个配置项指定文件、目录下的脚本
   进行处理。其它位置的文件或 `exclude` 排除掉（排除 include 包含部分文件）的文件都不会被处理。
   这些选项对于 Draw.io 这种混杂了打包输出文件（各种 min.js 和源代码同目录）项目来说非常有用。
   `include` 和 `exclude` 配置支持以下 glob patterns 文件路径匹配规则:
   ::

      *     matches zero or more characters (excluding directory separators)
      ?     matches any one character (excluding directory separators)
      **/   matches any directory nested to any level

   配置文件可以使用 `"extends"` 来继承其它配置文件的设置，这样方便在同一个工程中对不同模块或脚本
   使用不同的配置。

   `Project References <https://www.typescriptlang.org/docs/handbook/project-references.html>`__

   是一个用于将大型工程分解为小模块的配置项。这个配置列表包含一系列 `{ "path": "../src" }` 
   引用一个包含 `tsconfig.json` 项目配置文件的工程目录，或者直接在 `path` 中指向工程配置文件
   本身，指向的目标工程也就是被引用的工程。

   这种从 TypeScript 3.0 引入的新式工程组织形式相对于旧式工程管理方式的好处是实现增量构建：

   *  从引用工程中导入模块，替代它相应输出的类型声明文件 (.d.ts)；
   *  引用工程如果生成 outFile，那么输出的 .d.ts 类型声明文件在当前工程中可见；
   *  新引入的构建模式（--build）自动查找引用工程、up-to-date 检测，增量构建 out-of-date 工程；

   通过“引用项目”这种分拆项目手段，可以大大提高类型检查和编译的速度，减少使用编辑器时的内存使用，
   并改善程序逻辑分组的执行，因为它们被当作一个独立单元进行处理。这种新的构建方式根本上还是工程
   的模块化，或者大工程的子工程化，只不过增加的 --build 构建模式可以实现增量构建。

   被引用的项目还需要启用新引入的 `composite` 编译选项，它会影响其它一些编译参数：

   *  根目录 `rootDir` 如果设置，默认指向包含 tsconfig 配置文件的目录。
   *  所有实现文件需要在 `include` 或者 `files` 匹配列表中，否则 `tsc` 提示缺失相应的文件（文件未指定）。
   *  默认启用声明文件生成（"declaration": true）。

   .. code:: javascript

      {
         "compilerOptions": {
            "composite": true,
            "types": [],
            "rootDir": "src",
            "module": "ESNext",
            "moduleResolution": "Node",
            "outDir": "dist"
         }
      }

   比如，以下工程目录结构包含了两个模块，converter 和 units，以及相应的测试脚本：
   ::

      /
      ├── src/
      │   ├── converter.ts
      │   └── units.ts
      ├── test/
      │   ├── converter-tests.ts
      │   └── units-tests.ts
      └── tsconfig.json

   旧式单个 tsconfig.json 配置的工程或将工程拆分成多个 tsconfig.json 配置的工程问题是：虽然
   可以正常在测试脚本中导入 src 目录下模块，但是输出目录中没有出现 src 则无法同时构建 src 和 test。
   修改 src 中实现代码，也需要对测试代码重新做类型检查，即使不会出现新的错误。反之，修改测试脚本也
   需要重新对 src 代码进行类型检查，即使用没有改动。另外， `tsc -w` 不能监视多个项目配置，同时
   没有内置的“最新状态检查”（up-to-date），分割多个项目会导致多次运行 `tsc` 的消耗。

   `Configuring Watch <https://www.typescriptlang.org/docs/handbook/configuring-watch.html>`

   使用代码文件监视 `tsc --watch` 可以在修改代码并保存后，检测到改动时自动调用编译命令。此功能
   通过 Node 提供的 `fs.watch` 与 `fs.watchFile` API 实现，这两种方法的实现机制羞差异在于，
   前者是采用文件系统的事件通知，而后者使用轮询机制（Polling）。TypeScript 3.8 开始为配置文件
   引入更多的监视功能行为配置选项，通过 "watchOptions" 全局配置项设置。

   官方文档最佳实践指导，在多子项目的工程中，使用一个解决方案工程专用于引用其它工程，使用 tsconfig.json
   扩展配置能力将重复使用的不同配置拆分保存到单独的配置文件中，这样可以在一个文件里更改公共配置。解决方案
   则提供一个简单的入口，可以简单地运行 `tsc -b src` 这样的命令来构建解决方案中包含的子项目。这里假定
   src/tsconfig.json 是解决方案配置文件，文件里列出了所有的子工程。TypeScript 3.0 开始可以在配置
   有至少一个工程引用的条件下，那么 `files` 可以配置为空数据而不引起报错。

   拆分大型工程为子工程（相对模块的结构）并不需要改动太多。只需给根目录下的子目录放一个 tsconfig.json 文件，
   并在根项目中引用子项目。然后将子项目的 `outDir` 指定为原来输出目录的子目录，或将 `rootDir` 指定为所有
   工程的某个公共根目录。使用了 `outFile` 打包的编译输出结构十分灵活，因为相对路径是无关紧要的。要注意的是，
   通常不需要使用 prepend - 因为这会改善构建时间并结省 I/O。TypeScript 项目本身是一个好的参照，也在使用
   这种配置模式：src/tsconfig_base.json，src/tsconfig.json 和 src/tsc/tsconfig.json。其中一些
   “library” 工程和一些 “endpoint” 工程，“endpoint” 工程会确保足够小并仅仅导入到需要它们的 “library”。

   构建模式（Build Mode）下，TypeScript 就可以完成增量编译，只需要执行 `tsc --build` 或者 `tsc -b`
   命令，可以提供多个子项目路径（包含 tsconfig.json）。例如 `tsc --build src test`，就如同使用 
   `tsc --project` 命令编译指定项目。构建模式按以下行为执行构建过程，会自动判断依赖关系来执行编译次序：

   *  Find all referenced projects
   *  Detect if they are up-to-date
   *  Build out-of-date projects in the correct order

   可以使用 `tsc --build --dry` 检查子项目的编译情况，或者 `tsc --build --watch` 监视多个项目：

   .. code:: bash

      > tsc -b                            # Use the tsconfig.json in the current directory
      > tsc -b src                        # Use src/tsconfig.json
      > tsc -b foo/prd.tsconfig.json bar  # Use foo/prd.tsconfig.json and bar/tsconfig.json

      There are also some flags specific to tsc -b:

      --verbose   : Prints out verbose logging to explain what’s going on (may be combined with any other flag)
      --dry       : Shows what would be done but doesn’t actually build anything
      --clean     : Deletes the outputs of the specified projects (may be combined with --dry)
      --force     : Act as if all projects are out of date
      --watch     : Watch mode (may not be combined with any flag except --verbose)

   使用子项目来分割大型项目可能遇到的一个问题就是，当原先作为同一个项目的一些部分当作子项目（模块）
   处理后，它的引用方式上的差别。这些问题包括但不仅限于：
   
   *  子项目启用了 `"incremental": true,`，并且将多了子项目的 `outDir` 设置到相同的输出路径，
      这会导致构建失败，因为各个子项目需要生成的 `.tsbuildinfo` 文件会重叠到同一路径。

      .. code:: bash

         mxGraph/tsconfig.json:110:5 - error TS6377: Cannot write file 
         '@types/tsconfig.tsbuildinfo' because it will overwrite '.tsbuildinfo' 
         file generated by referenced project 'base/tsconfig.json'

         110     {"path": "../base/tsconfig.json"},

   *  因为子项目的 'rootDir' 不再包含其它子项目对应的路径，又没有引用依赖项目，导致导入失败。

      .. code:: bash

         mxGraph/mxStencil.ts:1:33 - error TS6059: File '/base/shape/mxShape.js' 
         is not under 'rootDir' '/mxGraph'. 'rootDir' is expected to contain all 
         source files.ts(6059)

         1 import { extend, mxShape } from "../base/shape/mxShape";
                                          ~~~~~~~~~~~~~~~~~~~~~~~

         mxGraph/mxStencil.ts:1:33 - error TS6307: File '/base/shape/mxShape.js' 
         is not listed within the file list of project '/mxGraph/tsconfig.json'. 
         Projects must list all files or use an 'include' pattern.ts(6307)

         1 import { extend, mxShape } from "../base/shape/mxShape";

   *  在根项目中使用 `include` 包含了子项目所在路径。

      .. code:: bash

         error TS6305: Output file '@types/shape/shape/mxShape.d.ts' has not been built 
         from source file 'base/shape/mxShape.js'. The file is in the program because:

            Matched by include pattern 'base/**/*' in 'tsconfig.json'

         tsconfig.json:114:32
            114     "include": ["./main/**/*", "base/**/*"],
                                                ~~~~~~~~~~~
            File is matched by include pattern specified here.

   *  因为找不到所依赖子项目的类型声明导致编译失败。

      .. code:: bash

         main/App.js:1:23 - error TS6305: Output file '@types/mxGraph/mxStencil.d.ts'
         has not been built from source file 'mxGraph/mxStencil.ts'.

         1 import mxStencil from "../mxGraph/mxStencil";
                                 ~~~~~~~~~~~~~~~~~~~~~~

         main/App.js:2:25 - error TS7016: Could not find a declaration file for module 
         '../base/shape/mxShape'. 'base/shape/mxShape.js' implicitly has an 'any' type.

         2 import { mxShape } from "../base/shape/mxShape";
                                 ~~~~~~~~~~~~~~~~~~~~~~~

   一项目拆分案列示范，目录结构及注意事项如下：

   .. code:: bash

      $ tree
      .
      ├───────────────────────────────╮
      ├── @types                      ├── base              # reference project - base
      │   ├── mxGraph                 │   ├── shape
      │   │   └── mxStencil.d.ts      │   │   └── mxShape.js
      │   └── shape                   │   └── tsconfig.json
      │       └── shape               ├── main              # root project sources
      │           └── mxShape.d.ts    │   ├── App.js
      └── dist                        │   └── Editor.js
          ├── bundle.d.ts             ├── mxGraph           # reference project - mxGraph
          ├── bundle.js               │   ├── mxStencil.ts
          ├── bundle.tsbuildinfo      │   └── tsconfig.json
          ├── mxGraph                 └── tsconfig.json     # root project
          │   ├── mxStencil.js
          │   └── tsconfig.tsbuildinfo
          ├── shape
          │   └── mxShape.js
          └── tsconfig.tsbuildinfo

   *  子项目中启用 `"composite": true,` 作为一个可以被引用的合成项目；
   *  所有项目启用 `"incremental": true,` 增量编译以提交编译效率，避免无谓的重复编译动作；
   *  子项目中使用 `"outDir": "../dist/mxGraph",` 设置将输出统一放到构建目录（dist）下的专用子目录；
   *  子项目中使用 `"declarationDir": "../@types/mxGraph",` 设置将类型声明文件输出到专用目录；
   *  子项目中依赖其它子项目时，设置 `"references": [ {"path": "..."}, ]` 引用相应的项目；
   *  根项目中引用所有依赖到的子项目，设置 `"references": [ {"path": "..."}, ]` 引用相应的项目；
   *  注意：如果子项目作为根项目的子目录存在，使用 `"exclude": [ "dist", "base", "mxGraph"],` 排除掉子项目；
   *  注意：设置 `"emitDeclarationOnly": true,` 将只生成 .d.ts 类型声明文件。

   在拆分项目结构中，子项目也像一般的项目一样，同样有独立的编译配置，也可以使用独立的打包输出。
   `declarationDir` 与 `outFile` 配置项互斥，只能使用其中一种形式。并且不能直接将所有子项目
   和根项目一起打包输出到一个 boundle 文件中，这种功能需求要通过其它打包工具实现。
   
   目前，rollup 和老牌的打包工具 webpack 都有插件支持 TypeScript project references 功能。
   ESBuild 还没有直接提供支持，可以通过插件支持。ESBuild 使用不同的增量编译方法，官方文档给出三种
   `incremental build APIs <https://esbuild.github.io/api/#build>`__ 实现增量编译：

   *  **Watch mode** tells esbuild to watch the file system and automatically rebuild.
   *  **Serve mode** starts a local development server that serves the results of the latest build.
   *  **Rebuild mode** lets you manually invoke a build. 

   这些增量编译 API 可以组合起来使用，实现 live reloading 功能只需要使用 Watch 和 Serve。
   具体使用 TypeScript 内置的模块化还是什么专用的模块化打包工具，取决于需要，哪个方便就选择什么。


   配置文件中有几个较重要的和模块化、目录文件路径有关的设置：
   
   *  `outDir` 设置保存编译器生成文件（.js .js.map .d.ts ）的输出目录，默认输出到源文件所在目录。

   *  `rootDir` 设置包含所有源代码的目录作为项目根目录，默认值是所有非类型声明文件的最长公共路径。
      如果项目作为被引用的项目（ `"composite": true`，则默认为包含 tsconfig.json 文件的目录。
      TypeScript 编译文件时，保持与输入目录中相同的目录结构生成各种输出文件。
   
   * `outFile` 将所有 .js 打包到指定的输出文件，目前只支持 AMD 和 System 模块格式，或者无模块化（None）。
      默认是将文件按源文件目录结构，输出到源文件所在目录或者 `outDir`（如果已设置）。

   * `declarationDir` 为存放编译器生成的类型声明文件（.d.ts）指定一个专用目录。

   * `sourceRoot` 指定调试器需要读取源代码时使用的路径或者 URL 地址。

   *  `rootDirs` 为方便在代码中导入零散的目录，设置一组“虚拟目录”，就像融合到单个根目录一样，向暗示编译器它们是一个模块；

      .. code:: javascript

         {
            "compilerOptions": {
               "rootDirs": ["src/views", "generated/templates/views"]
            }
         }

         src
         └── views
            └── view1.ts (can import "./template1", "./view2`)
            └── view2.ts (can import "./template1", "./view1`)
         generated
         └── templates
                  └── views
                     └── template1.ts (can import "./view1", "./view2")



TypeScript Compiler Preliminary Exploration
------------------------------------------------------

   *  https://github.com/microsoft/TypeScript
   *  https://github.com/microsoft/vscode
   *  https://github.com/microsoft/TypeScript/wiki
   *  https://github.com/microsoft/TypeScript/blob/release-4.9/doc/spec-ARCHIVED.md
   *  `TypeScript Deep Dive <https://vscode.dev/github/basarat/typescript-book>`__
   *  `TypeScript Deep Dive [all in one] <TypeScript_Deep_Dive.md>`__
   *  `AssemblyScript - A TypeScript-like language for WebAssembly <https://www.assemblyscript.org/>`__
   *  `StaticScript - TypeScript as frontend and LLVM as backend <https://github.com/ovr/StaticScript>`
   *  https://github.com/andrei-markeev/ts2c
   *  https://objectcomputing.com/resources/publications/sett/typescript-the-good-parts
   *  https://www.huy.rocks/everyday/04-01-2022-typescript-how-the-compiler-compiles
   *  https://vscode.dev/github/huytd/everyday/master/notes/_meta/tsc-overview.png
   *  https://vscode.dev/github/huytd/everyday/blob/main/notes/04.01.2022%20-%20TypeScript%20Compilation%20Process.md
   *  https://radixweb.com/blog/typescript-vs-javascript
   *  https://jellydn.github.io/ts-inlay-hints/
   *  `Figure 3-1. TypeScript’s type hierarchy <https://www.oreilly.com/library/view/programming-typescript/9781492037644/ch03.html>`__
   *  `BASIC (Beginner's All-purpose Symbolic Instruction Code) <https://www.c64-wiki.com/wiki/BASIC>`__


   **阅读文字使我丰富，审视代码使我清明，了解历史使我真实，欣赏音乐使我怡悦，饮食三餐使我健康。**

   TypeScript 5.1.6 代码量已经非常大了，src 目录中代码内容已经有 15.5 MB，这是下一个
   考虑做一点源代码阅读的工程。目前还需要补一下形式语言与自动机理论，还有编译原理基础。

   TypeScript 作为一个翻译机确实需要一些编译原理的知识，但并不多，其核心是类型分析、流程分析、
   ES5 语法转换，这些并不是编译原理课程的主要内容，但是原理是相通的。TypeScript 和 VS Code
   这两个开源项目本身就是非常棒的学研案例，既有编译器实现这样的核心技术，又有工程实施与管理方面
   的优秀经验，都是不可多得的开源项目，也堪称 Web 平台顶流项目。

   The compiler API has a few main components:

   *  `Program` 类型表示 TypeScript 语言编写的整个程序，可以看作一堆 .ts 脚本转变得到的对象；
   *  `CompilerHost` 代表用户的系统，提供 API 读取代码文件、检查目录或大小写等等；
   *  `SourceFile` 代表程序（Program）中的每个源代码文件，将转换为文本或者 TypeScript AST 数据结构；

   TypeScript 所需要做的工作就是将 .ts 翻译成 .js，本质上如同将“中文”翻译成“英文”的过程。
   TypeScript 工程目录结构如下：

   .. code:: bash

      $ tree
      ├── bin                       #  命令行入口脚本，包括 tsc 和 tsserver 命令
      ├── doc                       #  语言规范文档 
      ├── lib                       #  标准库类型声明文件，以及 JSON 格式存储的诊断消息
      ├── scripts                   #  开发项目时的一些工具脚本
      ├── src                       #  源代码目录
      │   ├── loc                   #  诊断消息与翻译文案
      │   ├── compiler              #  编译器源码核心，以下按编译器实现逻辑关系依次罗列
      │   │   ├── core.ts
      │   │   ├── sys.ts
      │   │   ├── types.ts
      │   │   ├── scanner.ts
      │   │   ├── parser.ts            # 源代码编译产物主要有四个：
      │   │   ├── utilities.ts         # lib/tsc.js             编译器命令行工具
      │   │   ├── utilitiesPublic.ts   # lib/tsserver.js        语言服务命令行工具
      │   │   ├── binder.ts            # lib/tsserverlibrary.js 服务器类库
      │   │   ├── checker.ts           # lib/typescript.js      编译器核心类型实现
      │   │   ├── transformer.ts
      │   │   ├── transformers/
      │   │   ├── emitter.ts
      │   │   └── program.ts
      │   ├── executeCommandLine/   #  编译器命令行实现
      │   ├── tsc                   #  编译器命令行入口配置
      │   ├── tsserver              #  语言服务协议 Language Service Protocol 服务器实现同
      │   └── services              #  Language service API，为集成 LSP 服务的编辑器提供 LSP 智能提示服务
      └── tests                     #  测试文件

   TypeScript Compiler Architectures Overview：

   .. code:: javascript

         ┌──────────────────────────────┐                                   
         │ Program                      │      ┌───────────────────────────┐
         │                   ┌──────┐   │      │   Parser                  │
         │                   │ *.ts ├┐  │      │             ┌────────┐    │
         │ ┌───────────────┐ └─┬────┘├┐ │      │             │ Tokens─┼┐   │
         │ │ tsconfig.json │ + └┬────┘│ ┼─────→│   Scanner   └──┬─────┘│┐  │
         │ └───────────────┘    └─────┘ │      │        ─────→  └──────┘│  │
         │                              │      │                 └──────┘  │
         └──────────────┬───────────────┘      └─────────────────────┬─────┘
                        ↓                                            ↓      
         ┌────────────────────────────┐        ┌──────────┐    ┌───────────┐
         │ Emitter                    │        │          │    │           │
         │     ┌──────────────────┐   │        │  Binder  │←───┤    AST    │
         │     │ getDiagnostics() │   │        │          │    │           │
         │     └──────────────────┘   │        └─────┬────┘    └───────────┘
         │              │             │              │                      
         │              ↓             │         ┌────↓─────────────────────┐
         │       ┌──────────────┐     │         │  Symbols Table           │
         │       │              │     │         │                          │
         │       │ Type Checker │     ┼────────→│  ┌────────┬───────────┐  │
         │       │              │     │←────────┤  │  Node  │ Symbol    │  │
         │       └──────────────┘     │         │  ├────────┼───────────┤  │
         └──┬───────────┬──────────┬──┘         │  │  Node  │ Symbol    │  │
            │           │          │            │  ├────────┼───────────┤  │
      ┌─────↓─┐    ┌────↓───┐   ┌──↓────┐       │  │  Node  │ Symbol    │  │
      │ *.js  ├┐   │ *.d.ts ├┐  │ *.map ├┐      │  ├────────┼───────────┤  │
      └┬──────┘├┐  └┬───────┘├┐ └┬──────┘├┐     │  │  Node  │ Symbol    │  │
       └┬──────┘│   └┬───────┘│  └┬──────┘│     │  └────────┴───────────┘  │
        └───────┘    └────────┘   └───────┘     └──────────────────────────┘

   TypeScript inlay hints：

   .. code:: javascript

                                              ┌───────────────────────────┐
         ┌─────────────┐                      │ tsserver                  │
         │             │  InlayHintsRequest   │                           │
      ┌─→│ Code Editor ┼─────────────────────→│  server/sessions.ts       │
      │  │             │                      │  ┌─────────────────────┐  │
      │  └─────────────┘                      │  │ executeCommandSeq() │  │
      │                                       │  └─────────────────────┘  │
      │                                       │                           │
      │                                       │  Services/inlayHints.ts   │
      │                                       │  ┌─────────────────────┐  │
      │                                       │  │ ProvideInlayHints() │  │
      │                                       │  └─────────────────────┘  │
      │                                       └──────────────┬────────────┘
      │                                                      │             
      │                                                      ↓             
      │                      services/inlayHints.ts @ provideInlayHints()  
      │  ┌───────────────────────────────────────────────────┬────────────┐
      │  │                       ┌─┐                         │            │
      │  │                       └┬┘                         ↓            │
      │  │                     ┌──┼──┐            Services/inlayHints.ts  │
      │  │   ┌─────────┐      ┌┴┐┌┴┐┌┴┐           ┌─────────────────────┐ │
      │  │   │   .ts   ├─────→└┬┘└┬┘└┬┘ ────────→ │ Visitor(node: Node) │ │
      │  │   │ Sources │       │ ┌┴┐┌┴┐           └──────────┬──────────┘ │
      │  │   └─────────┘      ┌┴┐└─┘└─┘                      │            │
      │  │                    └─┘ AST                        ↓            │
      │  │                               ┌──────────────────────────────┐ │
      │  │   ┌───────────┐               │               addTypeHints() │ │
      │  │   │ InlayHint ├┐              │                              │ │
      └──┤   └─┬─────────┘│┐ ←───────────┤          addParameterHints() │ │
         │     └──────────┘│             │                              │ │
         │      └──────────┘             │ addEnumMemberVariableHints() │ │
         │                               └──────────────────────────────┘ │
         └────────────────────────────────────────────────────────────────┘

   TypeScript Types Hierarchy：

   .. code:: javascript

                                     ┌─────────┐                                  
                                     │ unknown │                                  
                                     └────┬────┘                                  
                                          │                                       
      ┌───────────┐     ┌──────┐       ┌──↓──┐       ┌──────┐                     
      │ undefined ←─────┼ void ←───────┤ any ┼───────→ null │                     
      └───────────┘     └──────┘       └───┬─┘       └──────┘                     
                                           │                                      
           ┌───────────┬──────────┬────────┴───┬───────────┬───────────┐          
      ┌────↓───┐  ┌────↓───┐  ┌───↓────┐  ┌────↓───┐  ┌────↓────┐  ┌───↓────┐     
      │ number │  │ bigint │  │ string │  │ symbol │  │ boolean │  │ object │     
      └────┬───┘  └───┬────┘  └───┬────┘  └───┬────┘  └─────────┘  └───┬────┘     
           │          │           │           │      ┌───────────┬─────┴─────┬───────────┐    
           │          │           │           │┌─────↓────┐┌─────↓──────┐┌───↓───┐   ┌───↓────┐
           │          │           │           ││ Function ││ Constuctor ││ Array │...│ Object │
           │          │           │           │└─────────┬┘└─────┬──────┘└───┬───┘   └───┬────┘
           │          │           │           │          │       │           │           │
      ┌────↓────────┐ │ ┌─────────↓───┐ ┌─────↓─────────┐│       │       ┌───↓───┐       │
      │ Number Enum │ │ │ String Enum │ │ Unique Symbol ││       │       │ Tuple │       │
      └────┬────────┘ │ └─────────┬───┘ └─────┬─────────┘│       │       └───┬───┘       │
           │          │           │           │          │       │           │           │
           │          │           │           │          │       │       ┌───↓───┐       │
           └──────────┴───────────┴───────────┴──────────┴───────┴──────→│ never │←──────╯
                                                                         └───────┘

   文档目录从 5.0 版本开始移除掉，可以访问在 4.9 或之前的版本这些文档。最后的规范文档更新在
   TypeScript Language Specification Version 1.8, January, 2016，缺失多部分内容：
   6.7 Generator Functions 6.8 Asynchronous Functions 6.9 Type Guard Functions


Draw.io Editor 相关模块代码加载逻辑 
======================================================

   Draw.io 编辑器加载过程可以参考以下两个文件：

   *  drawio/src/main/webapp/index.html
   *  drawio/src/main/webapp/js/diagramly/Devel.js

   Draw.io 代码主要分为三个部分，Electron 部分只对桌面版本有效：
   ::

      ┌──────────────────────────────────────┐
      │ Draw.io:                             │
      │     Devel.js or app.min.js           │
      │     App.js EditorUi.js Editor.js ... │
      └──────────────────────────────────────┘
      ┌──────────────────────────────────────┐
      │ mxGraph:                             │
      │    mxClient.js/shapes-14-6-5.min.js  │
      └──────────────────────────────────────┘
      ┌──────────────────────────────────────┐
      │ Electron:                            │
      │    DesktopLibrary.js ElectronApp.js  │
      │    drawio-desktop:                   │
      │     ├─ electron.js                   │
      │     ╰─ electron-preload.js           │
      └──────────────────────────────────────┘

   Web 环境中，加载的 mxgraph/mxClient.js ，如果是桌面环境则加载 shapes-14-6-5.min.js 作为
   mxGraph 图形类库。Electron 桌面环境不需要源代码 mxgraph/src/mxClient.js 脚本检测浏览器环境。

   Draw.io 目前没有提供 API 文档，代码自带的注解也相当有限，还有大量文不对题的注解，只有一份代码
   审查指南（Code Review Guidelines）。编辑器代码目录组织主要是 grapheditor（编辑器核心）和
   diagramly（图表数据处理），有多个脚本（类型）同名，Editor.js、EditorUi.js、Init.js、
   Menus.js 等有两份代码文件。
   
   从这些脚本代码风格来看，很明显属于是 Mixin Pattern。这些类型可能出现在多个脚本文件中，例如
   `EditorUi` 不仅有两个脚本文件对应，它的原型还会在 ElectronApp.js 脚本中被修改。这些类和
   编辑器关系较密切，是编辑器核心代码。由于文档缺失，只能有通过分析代码中的功能来对它们做一个定性
   的概括。类型层次结构或功能说明如下：
   ::

      ┌────────────────────────────────┐
      │ $ cd drawio/src/main/webapp    │  💻
      │ $ electron index.html          │  ⚛️
      └────────────────────────────────┘
                   ▼
      ┌─────────────────────────────────────────────────────────┐
      │  loadAppJS:                                             │
      │     mxscript('js/PreConfig.js');                        │
      │            ▼                                            │
      │┌───────────────────────────────────────────────────────┐│
      ││ Development only (urlParams['dev'] == '1')            ││
      ││    mxscript(drawDevUrl + 'js/PreConfig.js')           ││
      ││    mxscript(drawDevUrl + 'js/diagramly/Init.js')      ││
      ││    mxscript(geBasePath + '/Init.js')                  ││
      ││    mxscript(mxBasePath + '/mxClient.js')              ││
      ││    mxscript(drawDevUrl + 'js/diagramly/Devel.js')     ││
      ││                                                       ││
      ││    for mxIsElectron==true only                        ││
      ││       mxscript('js/diagramly/DesktopLibrary.js')      ││
      ││       mxscript('js/diagramly/ElectronApp.js')         ││
      │└───────────────────────────────────────────────────────┘│
      │            ▼                                            │
      │┌───────────────────────────────────────────────────────┐│
      ││ Production only                                       ││
      ││    mxscript('js/app.min.js', ...)                     ││
      ││                                                       ││
      ││    for mxIsElectron==true only                        ││
      ││       mxscript('js/diagramly/DesktopLibrary.js', ...) ││
      ││       mxscript('js/diagramly/ElectronApp.js', ...)    ││
      ││       mxscript('js/extensions.min.js', ...)           ││
      ││       mxscript('js/stencils.min.js', ...)             ││
      ││       mxscript('js/shapes-14-6-5.min.js', ...)        ││
      ││                                                       ││
      ││ mxscript('js/PostConfig.js');                         ││
      │└───────────────────────────────────────────────────────┘│
      └─────────────────────────────────────────────────────────┘
                   ▼
      Devel.js or app.min.js
      ┌──────────────────────────────────────────────────────────┐
      │ ...                                                      │
      │ mxscript(geBasePath +'/Editor.js');                      │
      │ mxscript(geBasePath +'/EditorUi.js');                    │
      │ mxscript(geBasePath +'/Sidebar.js');                     │
      │ mxscript(geBasePath +'/Graph.js');                       │
      │ mxscript(geBasePath +'/Format.js');                      │
      │ mxscript(geBasePath +'/Shapes.js');                      │
      │ mxscript(geBasePath +'/Actions.js');                     │
      │ mxscript(geBasePath +'/Menus.js');                       │
      │ mxscript(geBasePath +'/Toolbar.js');                     │
      │ mxscript(geBasePath +'/Dialogs.js');                     │
      │ ...                                                      │
      │ mxscript(drawDevUrl + 'js/diagramly/Dialogs.js');        │
      │ mxscript(drawDevUrl + 'js/diagramly/Editor.js');         │
      │ mxscript(drawDevUrl + 'js/diagramly/EditorUi.js');       │
      │ mxscript(drawDevUrl + 'js/diagramly/DiffSync.js');       │
      │ mxscript(drawDevUrl + 'js/diagramly/Settings.js');       │
      │ ...                                                      │
      │ mxscript(drawDevUrl + 'js/diagramly/App.js');            │
      │ mxscript(drawDevUrl + 'js/diagramly/Menus.js');          │
      │ mxscript(drawDevUrl + 'js/diagramly/Pages.js');          │
      │ mxscript(drawDevUrl + 'js/diagramly/Trees.js');          │
      │ mxscript(drawDevUrl + 'js/diagramly/Minimal.js');        │
      │ mxscript(drawDevUrl + 'js/diagramly/DistanceGuides.js'); │
      │ mxscript(drawDevUrl + 'js/diagramly/mxRuler.js');        │
      │ mxscript(drawDevUrl + 'js/diagramly/mxFreehand.js');     │
      │ mxscript(drawDevUrl + 'js/diagramly/P2PCollab.js');      │
      │ mxscript(drawDevUrl + 'js/diagramly/DevTools.js');       │
      │                                                          │
      └──────────────────────────────────────────────────────────┘

   其中 Init.js 是全局变量初化脚本，diagramly 目录下的更多是编辑器的全局环境配置，比如多语言名称
   处理，URL 地址参数处理等等。这些配置用途的脚本会向其它更深层的脚本提供 `mxLanguages` 这样的全局
   符号。特别地， `EditorUi` 更应该像是作为一个全局的单例（Singleton）对象存在的，它最终作为编辑器
   应用程序入口对象存在。入口类代码主要分布在三个脚本文件：

   *  ``grapheditor/EditorUi.js`` 类型定义文件；
   *  ``js/diagramly/EditorUi.js`` 类型功能扩展代码；
   *  ``js/diagramly/App.js`` 子类型实现代码；

   文档注解中将 `Editor` 类型称为 Editor constructor，反而称 `EditorUi` 为 graph editor。
   应用入口类主要功能是处理用户输入事件、快捷键映射、插件加载管理。导入导出、对话框和窗口管理等功能。

   .. code:: javascript

      // Alt+Shift+Keycode mapping to action
      EditorUi.prototype.altShiftActions = {
         65: 'connectionArrows',     // Alt+Shift+A
         82: 'clearWaypoints',       // Alt+Shift+R
         76: 'editLink',             // Alt+Shift+L
         79: 'connectionPoints',     // Alt+Shift+O
         81: 'editConnectionPoints', // Alt+Shift+Q
         84: 'editTooltip',          // Alt+Shift+T
         86: 'pasteSize',            // Alt+Shift+V
         70: 'copySize',             // Alt+Shift+F
         66: 'copyData',             // Alt+Shift+B
         69: 'pasteData'             // Alt+Shift+E
      };

      // Ctrl+Alt+Shift+Keycode mapping to action
      EditorUi.prototype.ctrlAltShiftActions = {
         70: 'bringForward',         // Ctrl+Alt+Shift+F
         66: 'sendBackward',         // Ctrl+Alt+Shift+B
      };

      // Ctrl+Alt+Keycode mapping to action
      EditorUi.prototype.ctrlAltActions = {
         88: 'copyAsImage'           // Ctrl+Alt+X
      };

   Electron 桌面环境下，加载 ElectronApp.js 脚本对应用入口类 App（EditorUi）的方法、接口
   进行改写、扩展，以利用 Electron 提供的 API 进行通信，并获得本地文件资源的 I/O 处理能力。
   脚本中定义了一个派生自 `mxXmlRequest` 的 `mxElectronRequest` 用于和 Electron 宿主通信。
   比如，打开浏览器开发者工具 `openDevTools` 就需要通过消息机制将命令发送到 Electrron 主线程，
   通过主线程中的脚本所具备的 API 调用能力来打开调试器界面。主线程脚本由于 drawio-desktop 项目
   提供。Web 页面（渲染线程）与主线程是 Chromium 中的两个独立、隔离内存空间的线程，因此必需使用
   一种进程间通信的技术（IPC）才能进行数据传输。所谓进程间通信（IPC），即通过某种技术让原本在两个
   隔离内存空间（操作系统管理内存空间）中的进程实现消息、数据互通的过程。可以使用 STDIO 也可以使用
   Socket 网络接口等等。

   .. code:: javascript

      electron.request(msg, function(data))
      electron.registerMsgListener('isModified', function(uniqueId))
      electron.sendMessage('isModified-result', function(reply));
      electron.listenOnce(this.reqType + '-success', function(data));

      // diagramly\ElectronApp.js
      App.prototype.openDevTools = function()
      {
         electron.sendMessage('openDevTools');

      };

      // https://vscode.dev/github/jgraph/drawio-desktop/blob/dev/src/main/electron.js#L262
      ipcMain.on('openDevTools', function(e)
      {
         if (!validateSender(e.senderFrame)) return null;

         mainWindow.webContents.openDevTools();
      });

   由于 Chrome 浏览器及其开源版本（Chromium）提供了非常好用的调试器工具（DevTools），同时近
   些年 Web 工程化技术快速发展，各种应用开发框架和模块化应用十分广泛，加之图形应用开发又非常便于
   迭代、自动化测试和调试，使得相当一部分桌面应用从传统 C/C++ 转移为 Web + JavaScript 开发。


   通过源代码分析研究，可以用以下这个示意图来概括 Draw.io Editor 的类型层次结构：

   .. code:: javascript

      ╭─┬╮
      ├─┼┤
      │ ││
      ╰─┴╯
      App (EditorUi)

         main()
            ├─ doLoad() <──────╮
            │  ╰─> realMain() ────>
            ╰─ doMain() ───────╯

      new Editor()


      new App(editorUi)


      Graph


      Action


      Menu

      Draw.io Editor Architectures

   以下是这些编辑器界面核心类型的构造函数原型：

   .. code:: javascript

      class Graph   (container, model, renderHint, stylesheet, themes, standalone) extends mxGraph {}
      class App     (editor, container, lightbox)                                  extends EditorUi {}
      class Menus   (editorUi)                                                     extends mxEventSource {}
      class Action  (label, funct, enabled, iconCls, shortcut)                     extends mxEventSource {}
      class Toolbar (editorUi, container) {}
      class Sidebar (editorUi, container) {}

      DrawioViewer (js/mxReader.js)
         this.graph = new Graph(container);

      Format = function(editorUi, container)
      BaseFormatPanel = function(format, editorUi, container)

      ArrangePanel = function(format, editorUi, container);
      mxUtils.extend(ArrangePanel, BaseFormatPanel);

      TextFormatPanel = function(format, editorUi, container);
      mxUtils.extend(TextFormatPanel, BaseFormatPanel);

      StyleFormatPanel = function(format, editorUi, container);
      mxUtils.extend(StyleFormatPanel, BaseFormatPanel);

      DiagramStylePanel = function(format, editorUi, container);
      mxUtils.extend(DiagramStylePanel, BaseFormatPanel);

      DiagramFormatPanel = function(format, editorUi, container);
      mxUtils.extend(DiagramFormatPanel, BaseFormatPanel);



XML/SVG and Graph, mxGraph
--------------------------------------------

   “图表”一词在 Draw.io 中会经常使用到，图表也可以称图形，泛指编辑器中看到的连接线、矩形、文本框
   等等。有时也会用它表示 `mxCell`，因为它就是 XML 文档中图表对象的容器。Draw.io 编辑器实现代码
   中派生底层的 `mxGraph` 类型得到 `Graph`。从构造器原型来看，只是多了 themes, standalone
   两个参数，它们都是为编辑器的样式功能服务的。

   .. code:: javascript

      /**
      * Constructs a new graph instance. Note that the constructor does not take a
      * container because the graph instance is needed for creating the UI, which
      * in turn will create the container for the graph. Hence, the container is
      * assigned later in EditorUi.
      */
      Graph = function(container, [model, renderHint, stylesheet, themes, standalone])

      /**
      * Graph inherits from mxGraph.
      */
      mxUtils.extend(Graph, mxGraph);


      function mxGraph( container, [model, renderHint, stylesheet] ) {
         ...
         // Initializes the main members that do not require a container
         this.model = (model != null) ? model : new mxGraphModel();
        this.cellRenderer = this.createCellRenderer();
         ...
      }

      /**
      * Extends mxEventSource.
      */
      mxGraph.prototype = new mxEventSource();
      mxGraph.prototype.constructor = mxGraph;

   ============ ===============================================================
   `container`  | Optional DOM node that acts as a container for the graph. 
                | If this is null then the container can be initialized later using `init`.
   `model`      | Optional `mxGraphModel` that constitutes the graph data.
   `renderHint` | Optional string that specifies the display accuracy and performance. 
                | Default is mxConstants.DIALECT_MIXEDHTML (for IE).
   `stylesheet` | Optional `mxStylesheet` to be used in the graph.
   ============ ===============================================================

   以上代码中 `Graph` 和 `mxGraph`两个类型分别来自 Draw.io 和 mxGraph 框架，这两个项目的
   代码组织有较大的差异。前者将原型继承部分全交换工具函数 `mxUtils.extend()` 进行包装，这样
   的层层包装有可能影响到 LSP 等智能提示，包括模块化支持。也有可能影响到 esbuild 等打包工具的
   正常工作，比如不能识别父类导致不能使用 `super()` 调用基类构造器。另外，需要先将父类实例作为
   原型对象赋值给子类以继承父类功能，这就导致子类中不便于直接在构造器中调用父类的构造器。另外，也
   容易被子类通过原型对象无意中重写父类的方法。而这此都是现代 OOP 程序语言基本语法可以解决的问题。

   .. code:: javascript

      var mxUtils =
      {
         extend: function(ctor, superCtor)
         {
            var f = function() {};
            f.prototype = superCtor.prototype;
            
            ctor.prototype = new f();
            ctor.prototype.constructor = ctor;
         },
         ...

   另外，原型链继承机制作为最古老的 JavaScript 继承机制，与最新规范的 `class` 和 `extends` 
   等关键字实现的规范类型继承机制不相容，规范类型机制下，原型链对象 `prototype` 处于只读状态。
   以上这种继承机制等同于使用 ECMAScript 5 新增的 `Object.create()` 方法进行的原型继承机制。
   基于原型的继承机制需要解决两个问题：构造函数是谁？它决定了返回的实例对象是什么。原型对象是谁？
   它决定了实例对象通过继承得到什么能力。新规定的完善，能很好地在同一代码块中风同时解决这两个问题。

   `ECMAScript® 2025 Language Specification <https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.create>`


   为了直观地认识 `Graph` 或者 `mxGraph` 这个类型，以下摘抄官方文档中的示范代码片断，演示如何
   在指定 HTML 页面中的 DOM 节点上构造出“图表”实例。将模型对象中的描述图形的数据转化为页面上的
   图形，数据 → 图形，这就是图表对象的基本功能：

   .. code:: javascript

      var container = document.getElementById('graph');
      var graph = new mxGraph(container);


   复习一下 mxGraph 官方教程展示的类型层次结构图：

   .. code:: javascript

                                ┌───────────┐
      ┌─────────────┐   view    │           │ stylesheet ┌──────────────┐
      │ mxGraphView ⇦───────────┼  mxGraph  ┼────────────⇨ mxStylesheet │
      └─────────────┘           │           │            └──────────────┘
                                └──┬──┬──┬──┘                         
                   selectionModel  │  │  │   cellRenderer             
                 ┌─────────────────┘  │  └─────────────────┐          
                 │                    │  model             │          
       ┌─────────⇩────────┐ ┌─────────⇩─────────┐ ┌────────⇩────────┐ 
       │ mxGraphSelection │ │   mxGraphModel    │ │ mxCellRenderer  │ 
       └──────────────────┘ └───────────────────┘ └─────────────────┘ 


Preference 用户喜好配置功能的实现逻辑
--------------------------------------------

   用户喜好配置（Preference）是一个让用户配置 Draw.io 的界面，因为应用基于 Web 平台开发，所以
   配置数据（JSON）会保存在 localStorage 本地存储对象中，此对象相应有一套 Web API 来读写数据。
   diagramly/Music.js 脚本中，会为配置菜单项绑定一个响应函数，用户进行喜好设置时，就会执行此函数，
   并创建一个对话框。可以从代码中看到，配置功能启用的前提条件有三：

   .. code:: javascript

    if (isLocalStorage && localStorage != null && urlParams['embed'] != '1')

   提示：Web 平台下，用户数据的持久化保存主要有三种，除了 sessionStorage 和 localStorage，
   还有传统的 Cookie。
   `Web Storage API <https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API>`__

   通过菜单打开开发者工具界面：Help -> Open Developer Tools -> Console，并且执行此脚本：  
   `JSON.stringify(localStorage)` 打印地存在对象的数据到控制台，以观察 Draw.io 存储的数据。
   为了更直观的观察数据，以下将 JSON 数据进行了格式化。并且将 .sketch-config 和 .drawio-config
   两部分数据分离出来，它们分别是 Draw.io 用户喜好配置：

   .. code:: javascript

      console.log(JSON.stringify(localStorage, null, "   "))
      console.log(JSON.stringify(JSON.parse(localStorage['.sketch-config']), null, "   "))
      console.log(JSON.stringify(JSON.parse(localStorage['.drawio-config']), null, "   "))
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
      

   .. code:: javascript

      {
      "._autoSaveTrans_": "1",
      ".lastOpenDir": "C:\\opendocs\\pictures",
      ".sketch-config": "{\"language\":\"\",...\"sketchMode\":true}",
      ".drawio-config": "{\"language\":\"en\",\"openCounter\":250,...\"ui\":\"simple\",\"darkMode\":false}",
      ".recent": "[{\"id\":\"Figure_1.1_Overview_of_OpenGL_operation.svg\",\"title\":\"Figure_1.1.svg\"}]",
      ".lastExpDir": "C:\\tmp",
      ".lastImpDir": "C:\\tmp",
      ".lastPluginDir": "C:\\tmp",
      ".lastSaveDir": "C:\\opendocs\\pictures"
      }

   .. code:: javascript

      {
      "language": "",
      "configVersion": null,
      "customFonts": [],
      "libraries": "general;uml;er;bpmn;flowchart;basic;arrows2",
      "customLibraries": ["L.scratchpad"],
      "plugins": [],
      "recentColors": [],
      "formatWidth": "240",
      "createTarget": false,
      "pageFormat": { "x": 0, "y": 0, "width": 827, "height": 1169 },
      "search": true,
      "showStartScreen": true,
      "gridColor": "#d0d0d0",
      "darkGridColor": "#424242",
      "autosave": false,
      "resizeImages": null,
      "openCounter": 5,
      "version": 18,
      "unit": 1,
      "isRulerOn": false,
      "pages": true,
      "ui": "",
      "sketchMode": true
      }

   .. code:: javascript

      {
      "language": "en",
      "configVersion": null,
      "customFonts": [{ "name": "仿宋" }, { "name": "微软雅黑" }],
      "libraries": "general;basic;arrows2;clipart;flowchart;android;bootstrap;c4;dfd;er;uml;fluid_power",
      "customLibraries": [
         "L.scratchpad",
         "SC%3A%5Ctmp%5CShapeLibrary.drawio.xml",
         "SC%3A%5Copendocs%5Cpictures%5CShapeLibrary.drawio.xml"
      ],
      "plugins": [
         "./plugins/animation.js",
         "./plugins/explore.js",
         "./plugins/svgdata.js",
         "example.js"
      ],
      "recentColors": [
         "00CCCC",
         "225169",
         "224445",
         "none",
         "FFFFFF",
         "999900",
         "FFFF33",
         "FFFF00",
         "FAFAFA",
         "660000",
         "E6E6E6"
      ],
      "formatWidth": 240,
      "createTarget": true,
      "pageFormat": { "x": 0, "y": 0, "width": 827, "height": 1169 },
      "search": true,
      "showStartScreen": false,
      "gridColor": "#d0d0d0",
      "darkGridColor": "#424242",
      "autosave": false,
      "resizeImages": null,
      "openCounter": 250,
      "version": 18,
      "unit": 1,
      "isRulerOn": true,
      "ui": "simple",
      "darkMode": false,
      "pages": true,
      "sketchMode": false,
      "enableAnimations": true
      }

   接下来就可以按图索骥，直接通过代码文件内容搜索出相关的脚本，可以从代码片段中得出初始结论：

   *  .sketch-config 属于最新的 Sketch 界面布局的专用配置；
   *  .drawio-config 属于基本的 Draw.io 用户喜好配置；

   .. code:: javascript

      // Implements the sketch-min UI
      if (Editor.currentTheme == 'sketch' && !window.DRAWIO_PUBLIC_BUILD)
      {
         Editor.configurationKey = '.sketch-configuration';
         Editor.settingsKey = '.sketch-config';
      }

      var key = (urlParams['sketch'] == '1') ? '.sketch-config' : '.drawio-config';


      // diagramly\Editor.js

      Editor.settingsKey = '.drawio-config';

      /**
      * Global configuration of the Editor
      * see https://www.drawio.com/doc/faq/configure-diagram-editor
      * 
      * For defaultVertexStyle, defaultEdgeStyle and defaultLibraries, this must be called before
      * mxSettings.load via global config variable window.mxLoadSettings = false.
      */
      Editor.configure = function(config)
         if (config.settingsName != null)
         {
            Editor.configurationKey = '.' + config.settingsName + '-configuration';
            Editor.settingsKey = '.' + config.settingsName + '-config';
            mxSettings.key = Editor.settingsKey;
         }

   Sketch Theme 作为最新版本的简约界面布局，对菜单结构进行了比较彻底的调整，以便于用户进行草图绘画。
   虽然有两份配置数据，但是 .drawio-config 作为基本配置，它依然是生效的，其中就有插件加载列表。
   全局配置函数 Editor.configure 定义在 diagramly\Editor.js，这个函数内会设置所有默认配置项
   的默认值，包括用户喜好数据存储时使用的 key 字符串。此函数会在 `App.main()` 设置的回调函数中
   执行，并且配置数据可以由多种提供途径：

   1. `(urlParams['configure'] == '1')` 条件满足，就等待一个 XML 配置数据消息，才会执行配置项的初始化；
   1. 使用全局配置数据 `window.DRAWIO_CONFIG`；
   1. 使用 `localStorage` 本地存储服务中的提供的数据 ；

   .. code:: javascript

      // Sends load event if configuration is requested and waits for configure message
      if (urlParams['configure'] == '1')
         // Receives XML message from opener and puts it into the graph
         var op = window.opener || window.parent;
         mxEvent.addListener(window, 'message', configHandler);
         op.postMessage(JSON.stringify({event: 'configure'}), '*');
         // wait a message ...
         mxEvent.removeListener(window, 'message', configHandler);
         Editor.configure(data.config);
         mxSettings.load();

      // Loads configuration from global scope or local storage
      if (window.DRAWIO_CONFIG != null)
         EditorUi.debug('Using global configuration', window.DRAWIO_CONFIG);
         Editor.configure(window.DRAWIO_CONFIG);
         mxSettings.load();

      // Loads configuration from local storage
      if (isLocalStorage && localStorage != null && urlParams['embed'] != '1')
         var configData = localStorage.getItem(Editor.configurationKey);
         EditorUi.debug('Using local configuration', configData);
         Editor.configure(configData);
         mxSettings.load();

   接收 XML message 的这个自定义事件比较晦涩，因为没有文档说明这个事件是基于什么前提下定义的。
   只能通过事件触发机制结合事件名称来搜索关联代码（fireEvent + message），代码中有多处使用了
   这样的消息，其中 `P2PCollab` 这个类型就有使用到类似的事件。从类名和注解内容来看，这个类是为
   多人协作点对点通信实现同步文件。可以在 PostConfig.js 脚本加入以下调试代码，并且通过开发者
   工具设置断点，以检测哪些 `postMessage` 方法触发了消息事件以及事件对象所携带的数据：

   .. code:: javascript

      mxEvent.addListener(window, 'message', function(it){
         console.info({arguments})
      });

   第一种通过消息事件加载配置的基本逻辑：先向 op（一个窗口对象）发送一个 `{event:'configure'}`，
   也就是告知需要进行配置，请提供相应的配置数据，然后就等待对方通过消息机制发送相应的配置数据。这种
   消息处理过程有前提条件，就是此时不能发送其它与配置无关的数据，否则时序逻辑就有问题。

   配置数据读取并经过全局配置函数处理后就执行 diagramly `mxSettings` -> `load()` -> `init()`。
   此类型的 `save()` 和 `load()` 方法专用于本地配置数据的存储、读取。在正确处理配置数据时并不会
   执行 `init()`，只有数据解析出错时才执行它，也仅仅是设置为 `getDefaults()` 方法提供的一套默认值。
   完成配置加载后，后续步骤就是按不同的模块需要使用 `mxSettings` 不同的配置项设置的值。配置项的读取
   或者设置使用相应的 get/set 方法来操作，例如 `getPlugins()` 和 `setPlugins()` 用于读写
   `mxSettings.settings.plugins` 配置的插件列表。插件的加载代码在 `App.main()` 方法中，执行
   到此时，前面已经完成了 `Editor` 的全局配置和用户喜好配置工作，应用只需要获得插件列表并根据条件
   决定是否要加载插件脚本。

   .. code:: javascript

      editorUi.actions.addAction('configuration...', function());

      EditorUi.prototype.showLocalStorageDialog = function(title, key, buttons, elt, helpLink, applyFn)

      editorUi.showLocalStorageDialog(mxResources.get('configuration') + ':', Editor.configurationKey,
         buttons, splashCb.parentNode, 'https://www.drawio.com/doc/faq/configure-diagram-editor',
         function()
         {
            if (splashCb.parentNode != null)
            {
               mxSettings.setShowStartScreen(splashCb.checked);
               mxSettings.save();
            }
         });


DrawioFileSync and Collaboration
--------------------------------------------

   协同操作文档通过 `DrawioFileSync` 这个类实现，通过网络同步消息实现文件的在多端同时更新，
   这里只是借助网盘的数据服务 API 实现多点编辑，同时也涉及复杂的 P2P (Peer-2-Peer) 通信。

   .. code:: javascript

      // diagramly\P2PCollab.js
      function P2PCollab(ui, sync, channelId)
         sync.file.fireEvent(new mxEventObject('realtimeMessage', 'message', msg));
         sync.file.fireEvent(new mxEventObject('realtimeStateChanged'));

         function createPeer(id, initiator)
            // TODO: Move URL to Editor.STUN_SERVER_URL, add to Editor.configure
            var p = new SimplePeer({
               initiator: initiator,
               config: { iceServers: [{ urls: 'stun:54.89.235.160:3478' }] }
            });

      /**
      * Draw function for the collaborator list.
      */
      DrawioFileSync.prototype.updateRealtime = function()
         this.p2pCollab = new P2PCollab(this.ui, this, this.channelId);


      DrawioFile.prototype.open = function()
         if (this.isSyncSupported())
         {
            this.startSync();
         }

      /**
      * Creates a starts the synchronization.
      */
      DrawioFile.prototype.startSync = function()
         this.sync = new DrawioFileSync(this);


      EmbedFile.prototype.isSyncSupported = function()
      {
         return this.desc != null && this.desc.id != null && this.desc.instanceId != null;
      };
      
   目前， `StorageFile` `OneDriveFile` `DriveFile` 等文件类型都支持文件同步，也就是说除了
   本地存储， Google Drive 和 OneDrive 才支持在线协作。Draw.io 桌面版未提供支持。Nextcloud
   插件的嵌入模式 `EmbedFile` 需要根据条件决定是否支持。创建 `DrawioFileSync` 开启协作同步就
   表示：文件的修改、光标的活动，都会接近实时地广播给已经建立连接的各个对端（Peer）。

   ICE（交互式连接建立）是 WebRTC（与其他技术一起）用于连接两个对等端的框架，不受网络拓扑结构的限制。
   这个协议让两端能够互相找到对方并建立一个连接，即便它们都位于网络地址转译（NAT）隔离的子网，跟内网的
   其他设备共享同一个公网 IP 地址。这个框架的算法是寻找连接两个对等节点的最低延迟路径，通常采用以下顺序寻找：

   -  直接的 UDP 连接（当且仅当在这种情况下，STUN 服务器会被用来查找对等端面向网络的地址）。
   -  直接的 TCP 连接，通过 HTTP 端口
   -  直接的 TCP 连接，通过 HTTPS 端口
   -  间接的连接通过中继器／TURN 服务器（如果直接连接方式失败，例如，如果一个对等端位于阻止穿越 NAT 的防火墙后面）

   Editor.STUN_SERVER_URL 用于配置用户指定的打通 P2P 隧道的中间服务器。使用第三方代码库
   `SimplePeer` 实现。作者 Feross 于 2020 才刚拿到计算机博士学位，不过个人经历非常丰富，
   simple-peer 项目已经获得 Google Open Source Peer Bonus [Aug 2021]。还开发了一个
   WebTorrent，可以直接在网页上播放 Torrent 视频资源，他还有空教别人在美国加州成立公司赚钱。
   Feross 还分享了 BitMidi 项目开发经历，真的是真情实感，阅读完就像是你自己做了这样一个项目。

   -  https://feross.org/
   -  https://feross.org/bitmidi/
   -  https://bitmidi.com/youre-only-lonely-l-mid
   -  https://github.com/preactjs/preact
   -  https://feross.org/form-california-llc/
   -  https://github.com/feross/simple-peer
   -  https://www.npmjs.com/package/simple-peer
  -  https://developer.mozilla.org/zh-CN/docs/Glossary/ICE
   -  ICE 的规范 https://datatracker.ietf.org/doc/html/rfc5245
   -  `Collaborate on and share diagrams online <https://www.drawio.com/doc/faq/share-diagrams>`__

   官方提供了一个手动使用 SimplePeer 建立 P2P 连接的示范代码：

   -  选建立一个 `SimplePeer` 实例作为通信网络的发起者（initiator），根据代码指示在 URL 中使用 #1。
   -  发起者会向 STUN 服务器公开自己的地址，也就是其它 Peer 连接需要的参数信息。
   -  将发起者打印出来的 offer 信息粘贴到另一个 `SimplePeer` 实例的页面，并通过 `p.signal()` 方法公布自己连接信号。
   -  将返回的 answer 粘贴到 initiator 方并通过 `p.signal()` 方法与当前公布了连接信号的 Peer 建立连接。

   .. code:: javascript

      const p = new SimplePeer({
        initiator: location.hash === '#1',
        trickle: false
      })

      p.on('error', err => console.log('error', err))

      p.on('signal', data => {
        console.log('SIGNAL', JSON.stringify(data))
        document.querySelector('#outgoing').textContent = JSON.stringify(data)
      })

      document.querySelector('form').addEventListener('submit', ev => {
        ev.preventDefault()
        p.signal(JSON.parse(document.querySelector('#incoming').value))
      })

      p.on('connect', () => {
        console.log('CONNECT')
        p.send('whatever' + Math.random())
      })

      p.on('data', data => {
        console.log('data: ' + data)
      })

   直接使用本地模式打开页面就可以，完成以上操作。只需要开不同的浏览器页面，需要浏览器支持 WebRTC。
   也可以在同一个浏览器页面中建立多个 Peer 的连接，在建立连接中使用到的数据就是信令（signaling data）。
   建立连接后就可以开始传输数据，例如视频、音频，根据需要使用。

   .. code:: javascript

      var Peer = require('simple-peer')

      var peer1 = new Peer({ initiator: true })
      var peer2 = new Peer()

      peer1.on('signal', data => {
      // when peer1 has signaling data, give it to peer2 somehow
      peer2.signal(data)
      })

      peer2.on('signal', data => {
      // when peer2 has signaling data, give it to peer1 somehow
      peer1.signal(data)
      })

      peer1.on('connect', () => {
      // wait for 'connect' event before using the data channel
      peer1.send('hey peer2, how is it going?')
      })

      peer2.on('data', data => {
      // got a data channel message
      console.log('got a message from peer1: ' + data)
      })



Plugins Loading 插件加载机制流程
--------------------------------------------

   Draw.io 新版本默认禁止加载外部插件，需要通过命令行参数来启用：

   .. code:: bash

      ./draw.io.exe --enable-plugins

      # On macOS it works like this:
      open -a /Applications/draw.io.app --args --enable-plugins

   通过分析 Draw.io 用户喜好配置功能的实现，可以了解到，插件的加载的第一步会先读取 Web 本地存储
   的用户数据，通过分析用户配置数据决定要加载什么插件。从这里可以分析得到 Draw.io 桌面版本的一个
   Bug：外部插件在首次加载后，再次重启 Draw.io 时就不再加载外部插件。原因是：Draw.io 在用户配置
   外部插件时，首次保存的外部插件路径是插件脚本的名称，路径隐含为用户的漫游目录下。重启 Draw.io
   之后，又会将插件配置的路径转换为 file:// 本地协议表示的绝对路径。这就是导致

   .. code:: javascript

      "plugins": [
         "./plugins/text.js",
         "./plugins/animation.js",
         "./plugins/explore.js",
         "example.js"
      ],

      "example.js" ==> "file://C:/Users/OCEAN/AppData/Roaming/draw.io/plugins/example.js"
                       "file://C:\\Users\\OCEAN\\AppData\\Roaming\\draw.io\\plugins\\example.js"

   本地插件配置方面的问题表达在多个方面，以上是其中一种现象。在修改插件配置时，添加外部插件文件后
   不能直接点击 OK 确认，需要等待 Draw.io 自行完成脚本文件的拷贝后返回插件列表。否则会错误地添加
   "./plugins/explore.js" 这个内部插件。另外一方面，手动修改外部插件路径，Draw.io 并不如实
   保存，比如正常可加载 "example.js" 这个外部脚本，但是 Draw.io 会默认其路径如内部插件那样
   "./plugin/example.js"，但这个路径加载逻辑又没处理好，导致不能加载。同样地，使用 file://
   本地协议的路径也没有处理好。第三的问题，当外部插件路径被 Draw.io 处理后，再从插件列表中将外部
   插件删除时，Draw.io 不能正确删除已经拷贝到用户漫游目录下的插件脚本文件。统合起来，所有问题都
   指向同一个问题：没有处理好本地脚本文件的路径。这个问题既涉及用户喜好配置的实现逻辑，同时又涉及
   插件加载机制。

   这些问题有可能只存在 Windows 系统下，目前也没有人报告这种问题，pull request 也不知道官方
   会不会接收，官方文档已经声明不接收员工以外的代码贡献。
   https://github.com/jgraph/drawio-desktop/issues

   为了测试已经拷贝到用户漫游目录（Roaming）下的外部插件，可以通过开发者工具强制修改插件配置：

   .. code:: javascript

      localStorage['.drawio-config'] = localStorage['.drawio-config']
         .replace("./plugins/example.js", "plugins/example.js")

      console.log(JSON.stringify(JSON.parse(localStorage['.drawio-config']), null, "   "))

   接下来带着 Draw.io 桌面版加载外部插件的 BUG，去探索插件加载机制。修复 BUG 之后就可以使用
   Electron 官方提供的 asar 工具重新打包脚本和资源文件。

   .. code:: bash

      # https://github.com/electron/asar
      npm install --engine-strict @electron/asar
      npm install --engine-strict --global @electron/asar


   插件的加载代码在 `App.main()` 方法中，前面已经完成了 `Editor` 的全局配置和用户喜好配置工作，
   应用只需要获得插件列表并根据条件决定是否要加载插件脚本。App 类型中有一组方法和一组字典与插件配置
   密切相关。此外，还有其它脚本中与插件有关的配置：

   *  `PLUGINS_BASE_PATH = PLUGINS_BASE_PATH || '';` diagramly/Init.js，开发环境下生效。
   *  `PLUGINS_BASE_PATH = '.';` diagramly/ElectronApp.js，桌面版环境下生效。
   *  `App.DrawPlugins` — 登记插件回调函数；
   *  `App.pluginRegistry` — 登记已经加载的插件，；
   *  `App.pluginsLoaded` — 登记插件的已加载状态；
   *  `App.initPluginCallback()` — 插件（回调）注册函数初始化；
   *  `App.loadPlugins(plugins, useInclude)` — 加载

   .. code:: javascript

      /**
      * Queue for loading plugins and wait for UI instance
      */
      App.initPluginCallback = function()
      {
         if (App.DrawPlugins == null)
         {
            // Workaround for need to load plugins now but wait for UI instance
            App.DrawPlugins = [];
            
            // Global entry point for plugins is Draw.loadPlugin. This is the only
            // long-term supported solution for access to the EditorUi instance.
            window.Draw = new Object();
            window.Draw.loadPlugin = function(callback)
            {
               App.DrawPlugins.push(callback);
            };
         }
      };
   
      mxscript_ = mxscript;
      mxscript = function(){ mxscript_(...arguments); console.log(arguments})}
      mxinclude_ = mxinclude;
      mxinclude = function(){ mxinclude_(...arguments); console.log(arguments})}

      function mxinclude(a, b){ console.log({a, b) 
      mxinclude_ = mxinclude;
      mxinclude = function(){ mxinclude_(arguments); console.log(arguments})}


   用于加载插件代码的两个方法都定义在 index.html 这个入口页面内，它们都是通过 `<script>` 脚本块
   来加载外部脚本，主要差别在于同步方式设置了 `defer = true`，异步方式设置了 `async = true`。
   同步方式使用的是 onload 回调函数实现，这种方式很容易出现深层嵌套的回调地狱（callback hell）：

   .. code:: javascript

      /**
       * Synchronously adds scripts to the page.
       */
      function mxscript(src, onLoad, id, dataAppKey, noWrite, onError);

    /**
     * Adds meta tag to the page.
     */
    function mxmeta(name, content, httpEquiv)

      /**
       * Asynchronously adds scripts to the page.
       */
    function mxinclude(src);

   这些方法在 `export.js` 脚本中也有定义，也就是出现了重复的、功能相似的函数定义，非常糟糕的代码。

   前面已经解析过插件实现的基本机制，无非就是一个接收 EditorUi 实例的一个回调函数，可以将这个回调
   函数称为“插件注册函数”，因为它需要在执行插件配置工作。而这个注册函数会由 `Draw.loadPlugin()`
   来调用，这个方法需要在插件脚本加载之前完成设置，也就是 `initPluginCallback()` 方法的工作。
   插件的一般实现过程：

   *  通过 `mxResources.parse(text)` 添加文本定义（key = value）；
   *  通过 `Actions.addAction(key, funct, enabled, iconCls, shortcut)` 添加插件行为功能；
   *  通过 `Menus.addMenuItem(menu, key, parent, trigger, sprite, label)` 等方法添加菜单绑定行为；

   通过菜单或者属性面板中的按钮触发 Action 中的回调函数，将执行流程交给插件核心代码，并通过 `EditorUi`
   实例提供的 API 实现插件功能。插件注册函数可以接收当前 `App` 实例对象，因此可以通过开发者工具运行
   以下代码来获取这个类型的引用，也可以为了某些调试目的将其暴露到全局空间。比如，通过此方法可以观察到
   diagramly 菜单脚本扩展的 `editorUi.pages` 这样的属性保存了一组 `DiagramPage` 对象。

   .. code:: javascript

      // Export App (EditorUi) instance to global space (window.app)
      Draw.loadPlugin(function(ui){ app = ui; }) 

   mxEvent.UNDO

   这种对未知信息的探索方法可以和源代码阅读、软件使用体验结合起来，以增加对有疑问的代码的理解深度。
   缺失官方文档支持的条件下，只有经过这样的探索过程，开发者才能更快速、全面地、深入地理解底层。获得
   这种经验后，再记录成开发文档或者开发指南，就只可以让后来者可以更加有效率地掌握前人的经验，或者对
   自己也有举一反三的功效，而这也就是书籍的最大作用了吧。

   diagramly 中的 Menus.js 脚本会按编辑器界面需求对当前的 `EditorUi` 实例进行扩展，这些代码表现
   相当的 Mixin Pattern，也可能正是这个原因，如果开源社区对整个 Draw.io 的脉络把握不到们，同时又
   编写了非常具有侵入式的代码，很有可能就因为修改了某些功能而导致其它原有功能受到影响，官方才声明停止
   接收开源社区贡献代码：

   .. code:: javascript

      editorUi.addInsertItem(menu, parent, title, method); // fromText' formatSql plantUml mermaid
      editorUi.addInsertMenuItems(menu, parent, methods);
      editorUi.freehandWindow = new FreehandWindow(editorUi, x, y, w, h, withBrush);
      editorUi.customLayoutConfig = [{'layout': 'mxHierarchicalLayout',...);
      editorUi.selectPage(diagramPage)
      editorUi.pages = []
      editorUi.currentPage

   混入编程模式（Mixin Pattern）确实是属于一种便于扩展开发的编程方法，但是代码如果缺乏良好组织，
   将会使用项目陷入不可维护的后果。为了增加对这种模式的理解，可以参考核心类 `EditorUi` 的代码组织，
   核心代码基本都在 grapheditor 和 diagramly 两个目录下，除了主要的两个 `EditorUi.js` 脚本，
   其它涉及 UI 界面设置、修改脚本文件中，多多少少都会对 `EditorUi` 类型的原型进行扩展、重写等等。
   比如，实现分页功能的 `Pages.js` 脚本，就包含类似以下的这样的原型功能扩展：

   .. code:: javascript

      EditorUi.prototype.initPages                = function()
      EditorUi.prototype.insertPage               = function(page, index, node)
      EditorUi.prototype.createPage               = function(name, id, node)


`mxXmlRequest` 与远程资源安全请求
--------------------------------------------

   mxGraph 内置的 `mxXmlRequest` 工具类用于 Web 资源请求，它基于旧式的 `XmlHttpRequest`
   对象实现。更现代的 Web Fetch API 是更流行的方式，所以不必一定使用内置类型来请求远程资源。

   Web 应用作为一种几乎是直接展示源代码的程序形式，其恶意攻击行为也五花八门。并且大量现代的诈骗案例
   都是通过网站的各种恶意攻击行为实现的，这些恶意攻击行为包括但不仅限以下这些：

   *  Click-jacking 点击劫持：也称 user interface redressing，通过修改 UI 及插入恶意交互代码实现下载安装恶意软件；
   *  Cross-site scripting (XSS) 跨站脚本：通过向客户端插入恶意代码偷取数据或其它攻击行为；
   *  Cross-site request forgery (CSRF) 伪造请求：比如通过图片地址，实际是恶意内容链接等等进行攻击，比如银行账户提款请求。
   *  Man-in-the-middle (MitM) 中间人攻击：在通信两方接收恶意的中间代理人；
   *  Session hijacking 会话劫持：冒名顶替正常用户与服务器间的会话。

   因此，浏览器有一项基本安全策略：同源策略（same-origin policy）。这个策略就是保证网络请求的
   资源共属同一个组织，才认为是安全的请求，只有这样的资源请求才被默认允许。其它跨站资源请求一律看
   作不安全行为，除非进行合适的策略配置。

      Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin

   `Cross-Origin Resource Sharing (CORS) <https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS>`__
   是跨站资源共享的安全规则，是服务器端通过标头告知客户端，是否被许可访问某些资源，此策略本身不是
   安全性策略，而是资源共享策略。如果跨站通信的服务器都是同一权属，所以管理从员可以修改服务程序，
   添加 CORS 头标，以明确告诉浏览器放行这些跨站行为，在同一组织架构内在不同域名的站点间共享数据。
   跨站资源共享带来的一个问题，就是请求发送前，客户端并不知道服务器是否允许这种跨站行为。所以产生
   一个先行的预检请求（preflight），如果返回的标头明确允许进行某种资源请求动作才会发送真正的请求。

   `Content-Security-Policy (CSP) <https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP>`
   是安全内容策略，目的是隔离不安全内容，防止客户端出现跨站脚本攻击行为 Cross-site scripting (XSS) 。
   浏览器安全机制默认不允许脚本进行跨站行为，因为允许这种跨站的数据传递意味着木马程序可以从你的站点偷取
   用户数据到其它服务器上。

   许多基于 Electron（Chromium）开发的桌面应用，Atom、Slack、VS Code 等等，Draw.io 桌面版作为
   基于 Electron 开发的应用，同样也需要安全防范。

   -  `Electron Security <https://www.electronjs.org/docs/latest/tutorial/security>`__
   -  `Types of Attacks <https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks>`__
   -  `Content Security Policy Level 3 <https://w3c.github.io/webappsec-csp/>`__
   -  `CSP Quick Reference Guide <https://content-security-policy.com/>`__
   -  https://www.iditect.com/program-example/nodejs--how-to-handle-cors-in-an-electron-app.html
   -  https://www.electronjs.org/docs/latest/tutorial/security
   -  https://github.com/electron/electron
   -  https://www.electronjs.org/docs/latest/

   Electron 基于 Chromium 开源浏览器，使用基多线程架构。加载 Web 应用有两种基本形式：直接加载
   HTML 页面，面板中包含 Web 浏览器环境下运行的脚本。另外一种就是加载 JavaScript 脚本，这个脚本
   称为主线程脚本，里面可以执行 Election API。官方文档 Process Model 说明，主线程是唯一的，也
   是应用的入口点，可以执行  `require` 这样的 API 加载各使用集成的 Node.js APIs，可以创建浏览
   器窗口以加载指定 Web 页面。执行页面脚本的线程称为渲染线程（renderer process），因此它需要呈现
   两面内容、元素样式等等。主进程中可以为设置页面加载前执行特殊的脚本——预加载脚本（Preload scripts），
   当然也属于渲染进程中执行的脚本，只不过比页面中通过 `<script>` 脚本块设置的脚本更优先运行。同时，
   由于它的特殊性被允许访问 Node.js APIs 的特权。此外，作为多线程架构，Electron 还可以创建更多的
   线程，这些线程统称工具线程（utility process）。

   .. code:: bash

         $ electron -help

         Electron 25.1.1 - Build cross platform desktop apps with JavaScript, HTML, 
         and CSS Usage: electron [options] [path]

         A path to an Electron app may be specified. It must be one of the following:

         - index.js file.
         - Folder containing a package.json file.
         - Folder containing an index.js file.
         - .html/.htm file.
         - http://, https://, or file:// URL.

         Options:

         -i, --interactive     Open a REPL to the main process.
         -r, --require         Module to preload (option can be repeated).
         -v, --version         Print the version.
         -a, --abi             Print the Node ABI version.

   Draw.io 设置了严格的 Electron CSP 策略，CSP meta tag 方式设置（通过 `mxmeta()` 函数添加）。
   也就是在客户端设置安全策略，防止客户端运行的脚本有安全性问题。以下内容为了简明将属性值按不同的规则
   分行显示：

   .. code:: javascript

      // mxmeta(null, '*;', 'Content-Security-Policy');
      // <meta content="*" http-equiv="Content-Security-Policy">

      <meta content="default-src 'self'; 
                     connect-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com; 
                     img-src * data:; 
                     media-src *; 
                     font-src *; 
                     style-src 'self' 'unsafe-inline' https://fonts.googleapis.com" 
                     http-equiv="Content-Security-Policy">


   Draw.io 设置只允许请求本地应用沙箱目录下的资源，或者预置的几个字体服务地址：

   .. code:: javascript

      new mxXmlRequest('index.html', 'key=value')
         .send(it=>console.log(it.getText()), console.error);

      // Example: Use fetch API with CORS in Electron app
      fetch('index.html', {
         method: 'GET',
         mode: 'cors'
      })
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));

   虽然，可以使用开发者工具修改 HTML 节点以及 CSP meta tag，但是安全策略生效于页面加载时，页面
   渲染后的修改并不会回馈更新安全策略的配置，除非是收窄范围、增强安全性的更新。CSP 常用于 HTTP
   服务器上的资源安全设置，即通过请求回复标头配置。如果是本地资源协议 `file://`，就只能使用 `<meta>`
   标签来配置。设置 connect-src 表示所有可以安全请求的资源，不管资源类型，设置为 "none" 表示
   不允许请求外部资源。不能使用 * 通配符号（子域名可以），default-src 作为后备设置。

   .. code:: javascript

      <meta http-equiv="Content-Security-Policy" content="default-src 'none'">

      Content-Security-Policy: connect-src 'none';
      Content-Security-Policy: connect-src <source-expression-list>;

   除了直接在 HTML 页面中使用 CSP meta tag 配置，CSP HTTP headers 还可以通过 Electron
   `webRequest` 对象的响应头处理函数中进行设置，当向服务发出的请求得到回复时，就会执行此 API：
   `webRequest.onHeadersReceived([filter, ]listener)`。

   .. code:: javascript

      const { session } = require('electron')

      session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
      callback({
         responseHeaders: {
            ...details.responseHeaders,
            'Content-Security-Policy': ['default-src \'none\'']
         }
      })
      })

   以下是 CSP 标头设置都允许 Electron 在当前站点或者 `apis.example.com` 执行脚本。但是前面
   这种设置权限太宽，不是推荐的设置：

   .. code:: javascript

      // Bad
      Content-Security-Policy: '*'

      // Good
      Content-Security-Policy: script-src 'self' https://apis.example.com


   任何尝试其它不符号安全规范的资源路径的请求，例如以下：

   .. code:: bash

      $ python -m http.server
      Serving HTTP on :: port 8000 (http://[::]:8000/) ... 

   .. code:: javascript

      new mxXmlRequest('http://localhost:8000', 'key=value').send(console.log, console.error);

      new mxXmlRequest('../../../../app.asar').send(console.log, console.error);
      new mxXmlRequest('../../../../app.asar', 'key=value', "GET").send(console.log, console.error);

   这些不合规的资源，都会被卸任不符合安全要求的资源请求，都会被阻止，并在控制台中输出异常消息：

      Refused to connect to 'file:///C:/drawio/resources/app.asar/drawio/src/main/webapp/' 
      because it violates the following Content Security Policy directive: "connect-src 'self' 
      http://localhost:8000 https://fonts.googleapis.com https://fonts.gstatic.com".

      Refused to connect to 'file:///C:/drawio/resources/app.asar/drawio/src/main/webapp/' 
      because it violates the document's Content Security Policy.

      GET file:///C:/drawio/resources/app.asar/app.asar net::ERR_BLOCKED_BY_CLIENT

   可以使用 curl 工具查看服务器端的标头设置，以下信息显示字体服务器的配置是允许跨站访问的，如果
   客户端的安全策略设置也允许访问，那么资源请求就不会被阻拦：

   .. code:: bash

      $ curl -I https://fonts.gstatic.com
      HTTP/2 404 
      cross-origin-resource-policy: cross-origin
      content-type: text/html; charset=UTF-8
      x-content-type-options: nosniff
      date: Sun, 10 Nov 2024 13:01:36 GMT
      server: sffe
      content-length: 1561
      x-xss-protection: 0
      alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000

   .. Danger:: 
      
      **Electron security warnings**

      Security warnings and recommendations are printed to the developer console.
      They only show up when the binary's name is Electron, indicating that a 
      developer is currently looking at the console.

      You can force-enable or force-disable these warnings by setting 
      ELECTRON_ENABLE_SECURITY_WARNINGS or ELECTRON_DISABLE_SECURITY_WARNINGS 
      on either process.env or the window object.


   以下 Python 脚本就是一个启用了 CORS 请示的用于测试的 Web 服务程序：

   .. code:: python

      #!/usr/bin/env python3

      # It's python3 -m http.server PORT for a CORS world
      # Save above content to a file say, cors_server.py.
      # Now you can use this like python cors_server.py 8000

      from http.server import HTTPServer, SimpleHTTPRequestHandler
      import sys


      class CORSRequestHandler(SimpleHTTPRequestHandler):
         
         def end_headers(self):
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('Access-Control-Allow-Methods', '*')
            self.send_header('Access-Control-Allow-Headers', '*')
            self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
            return super(CORSRequestHandler, self).end_headers()

         def do_OPTIONS(self):
            self.send_response(200)
            self.end_headers()


      host = sys.argv[1] if len(sys.argv) > 2 else '0.0.0.0'
      port = int(sys.argv[len(sys.argv)-1]) if len(sys.argv) > 1 else 8000

      print("Listening on {}:{}".format(host, port))
      httpd = HTTPServer((host, port), CORSRequestHandler)
      httpd.serve_forever()



`mxClipboard` 内置剪贴板与粘贴事件处理
--------------------------------------------

   以下以粘贴行为事件为例，解释 Draw.io 事件处理的基本逻辑。首先，Actions.js 中注册了处理剪切、
   粘贴等剪贴板相关事件处理的行为函数：

   .. code:: javascript

      this.addAction('copy', function());
      this.addAction('cut', function());
      this.addAction('paste', function());
      this.addAction('pasteHere', function(evt));

   主动触发 Action 行为的功能函数或设置可用状态：

   .. code:: javascript

      editorUi.actions.get('paste').funct();
      editorUi.actions.get('editDiagram').setEnabled(active && (file == null || !file.isRestricted()));


   mxGraph 底层定义了 `mxClipboard` 和 `mxEvent` 等等对象来处理 Web 相关事件。需要处理这
   些相关事件的对象，包括 `mxCellEditor` 或者 `EditorUi` 等类型，就通过这些事件处理类型来
   注册相应事件处理函数，再根据需要触发 Action。

   .. code:: javascript

      EditorUi.prototype.installNativeClipboardHandler = function();
         mxEvent.addListener(textInput, 'copy', mxUtils.bind(this, function(evt)));
         mxEvent.addListener(textInput, 'cut', mxUtils.bind(this, function(evt)));
         mxEvent.addListener(textInput, 'paste', mxUtils.bind(this, function(evt)));

   内部剪贴板对象 `mxClipboard` 定义了 cut、copy、paste 等方法来处理编辑器中的图表数据。用户
   触发相应的事件时，就会通过 Actions 注册的处理函数将数据写入 `mxClipboard`，或者从其读取相应
   的数据。事件触发既可以通过按钮、菜单来执行相应的 Action，也可以是键盘快捷键间接地通过 `mxEvent`
   注册的回调函数执行 Action。

   除了 `EditorUi` 定义有和剪贴板事件处理相关的函数，另外 `Graph` 这个类型也有。这个类型与图表
   显示直接相关，它剪贴的数据和样式关系更密切，通过样式面板触发。并且还有一个用于粘贴 HTML 代码块
   的处理函数，这个 `pasteHtmlAtCaret` 方法与 `pasteXml` 方法的差别在于：前者处理的是 HTML
   代码，。后者处理的是 `<mxGraphModel>` 节点包裹的 XML 图表数据，粘贴到编辑器中，会被解码生成
   相应的图表。使用 `copyXml` 方法会将选中的图表按 XML 节点层次结构生成相应的字符串，并且会将
   尖括号编码成 URL 规范符号。但是粘贴的 XML 可以是没有线索编码的原始 XML 字符串。

   .. code:: javascript

      EditorUi.prototype.copyXml       = function();
      EditorUi.prototype.copyImage     = function(cells, xml, scale);
      EditorUi.prototype.copyCells     = function(elt, removeCells);

      EditorUi.prototype.pasteXml      = function(xml, pasteAsLabel, compat, evt, html);
      EditorUi.prototype.pasteCells    = function(evt, realElt, useEvent, pasteAsLabel);

      Graph.prototype.copyStyle        = function(cell);
      Graph.prototype.copyCellStyles   = function(cells, keys, values, vertexStyle, edgeStyle, vertexStyleIgnored, edgeStyleIgnored);

      Graph.prototype.pasteHtmlAtCaret = function(html);
      Graph.prototype.pasteStyle       = function(style, cells, keys, replaceAll);
      Graph.prototype.pasteCellStyles  = function(cells, vertexStyle, edgeStyle, force, pasteEdgeStyle);


Draw.io grapheditor 编辑器核心功能
======================================================


EditorUi.js
-----------

   EditorUi.js — 编辑器程序核心，经过 diagramly/EditorUi.js 脚本扩充功能后并派生为 `App`
   类型，也就是编辑器的入口类。基类是 `mxEventSource`，只有继承它才拥有处理用户交互功事件能力。

   .. code:: javascript

      //Extends EditorUi
      mxUtils.extend(App, EditorUi);


   .. code:: javascript

      EditorUi = function(editor, container, lightbox)
      
      // Extends mxEventSource
      mxUtils.extend(EditorUi, mxEventSource);

      EditorUi.compactUi                     = true;

      EditorUi.parsePng                      = function(f, fn, error);

      EditorUi.prototype.splitSize           = (mxClient.IS_TOUCH || mxClient.IS_POINTER) ? 12 : 8;
      EditorUi.prototype.menubarHeight       = 30;
      EditorUi.prototype.formatEnabled       = true;
      EditorUi.prototype.formatWidth         = 240;
      EditorUi.prototype.toolbarHeight       = 38;
      EditorUi.prototype.footerHeight        = 28;
      EditorUi.prototype.defaultSidebarWidth = Math.min(screen.width / 2, (urlParams['sidebar-entries'] != 'large') ? 212 : 240);
      EditorUi.prototype.hsplitPosition      = (screen.width <= Editor.smallScreenWidth) ? 0 :
      EditorUi.prototype.allowAnimation      = true;
      EditorUi.prototype.lightboxMaxFitScale = 2;
      EditorUi.prototype.lightboxVerticalDivider = 4;
      EditorUi.prototype.hsplitClickEnabled  = false;
      EditorUi.prototype.updateDefaultStyle  = false;
      EditorUi.prototype.spaceDown           = false;
      EditorUi.prototype.shiftDown           = false;
      EditorUi.prototype.lazyZoomDelay       = 20;
      EditorUi.prototype.wheelZoomDelay      = 500;
      EditorUi.prototype.buttonZoomDelay     = 600;
      EditorUi.prototype.zeroOffset          = new mxPoint(0, 0);
      EditorUi.prototype.altShiftActions     = { 65: 'connectionArrows', ...} // Alt+Shift+A
      EditorUi.prototype.ctrlAltShiftActions = { 70: 'bringForward', ...} // Ctrl+Alt+Shift+F
      EditorUi.prototype.ctrlAltActions      = {  88: 'copyAsImage' ...} // Ctrl+Alt+X

      EditorUi.prototype.init ();
      EditorUi.prototype.clearSelectionState ();
      EditorUi.prototype.getSelectionState ();
      EditorUi.prototype.createSelectionState ();
      EditorUi.prototype.initSelectionState ();
      EditorUi.prototype.updateSelectionStateForTableCells (result);
      EditorUi.prototype.windowResized ();
      EditorUi.prototype.createTimeout (timeout, fn, error);
      EditorUi.prototype.tryAndHandle (fn, error);
      EditorUi.prototype.convertDarkModeColors (cells, keys);
      EditorUi.prototype.updateSelectionStateForCell (result, cell, cells, initial);
      EditorUi.prototype.installShapePicker ();
      EditorUi.prototype.centerShapePicker (div, rect, x, y, dir);
      EditorUi.prototype.showShapePicker (x, y, source, callback, direction, hovering, getInsertLocationFn, showEdges, startEditing);
      EditorUi.prototype.createShapePicker (x, y, source, callback, direction, afterClick, cells, hovering, getInsertLocationFn, showEdges, startEditing);
      EditorUi.prototype.getCellsForShapePicker (cell, hovering, showEdges);
      EditorUi.prototype.isShapePickerVisible (cancel);
      EditorUi.prototype.hideShapePicker (cancel);
      EditorUi.prototype.isSpaceDown ();
      EditorUi.prototype.isShiftDown ();
      EditorUi.prototype.onKeyDown (evt);
      EditorUi.prototype.onKeyPress (evt);
      EditorUi.prototype.isImmediateEditingEvent (evt);
      EditorUi.prototype.updateCssForMarker (markerDiv, prefix, shape, marker, fill);
      EditorUi.prototype.getImageForMarker (marker, fill);
      EditorUi.prototype.createMenus ();
      EditorUi.prototype.updatePasteActionStates ();
      EditorUi.prototype.initClipboard ();
      EditorUi.prototype.initCanvas ();
      EditorUi.prototype.addChromelessToolbarItems (addButton);
      EditorUi.prototype.isPagesEnabled ();
      EditorUi.prototype.createTemporaryGraph (stylesheet);
      EditorUi.prototype.addChromelessClickHandler ();
      EditorUi.prototype.toggleFormatPanel (visible);
      EditorUi.prototype.isFormatPanelVisible ();
      EditorUi.prototype.lightboxFit (maxHeight);
      EditorUi.prototype.isDiagramEmpty ();
      EditorUi.prototype.isSelectionAllowed (evt);
      EditorUi.prototype.addBeforeUnloadListener ();
      EditorUi.prototype.onBeforeUnload ();
      EditorUi.prototype.open ();
      EditorUi.prototype.showPrintDialog (title, fn);
      EditorUi.prototype.showPopupMenu (fn, x, y, evt);
      EditorUi.prototype.setCurrentMenu (menu, elt);
      EditorUi.prototype.resetCurrentMenu ();
      EditorUi.prototype.hideCurrentMenu ();
      EditorUi.prototype.updateDocumentTitle ();
      EditorUi.prototype.createHoverIcons ();
      EditorUi.prototype.redo ();
      EditorUi.prototype.undo ();
      EditorUi.prototype.canRedo ();
      EditorUi.prototype.canUndo ();
      EditorUi.prototype.getDiagramSnapshot ();
      EditorUi.prototype.updateDiagramData (snapshot, node);
      EditorUi.prototype.replaceDiagramData (data);
      EditorUi.prototype.getEditBlankXml ();
      EditorUi.prototype.getUrl (pathname);
      EditorUi.prototype.setScrollbars (value);
      EditorUi.prototype.fitDiagramToWindow ();
      EditorUi.prototype.hasScrollbars ();
      EditorUi.prototype.resetScrollbars ();
      EditorUi.prototype.setPageVisible (value);
      EditorUi.prototype.installResizeHandler (dialog, resizable, destroy);
      EditorUi.prototype.setBackgroundColor (value);
      EditorUi.prototype.setFoldingEnabled (value);
      EditorUi.prototype.setPageFormat (value, ignorePageVisible);
      EditorUi.prototype.setPageScale (value);
      EditorUi.prototype.setGridColor (value);
      EditorUi.prototype.addUndoListener ();
      EditorUi.prototype.updateActionStates ();
      EditorUi.prototype.getDiagramContainerOffset ();
      EditorUi.prototype.refresh (sizeDidChange);
      EditorUi.prototype.createTabContainer ();
      EditorUi.prototype.createDivs ();
      EditorUi.prototype.createSidebarContainer ();
      EditorUi.prototype.createUi ();
      EditorUi.prototype.createStatusContainer ();
      EditorUi.prototype.setStatusText (value);
      EditorUi.prototype.createStatusDiv (value);
      EditorUi.prototype.createToolbar (container);
      EditorUi.prototype.createSidebar (container);
      EditorUi.prototype.createFormat (container);
      EditorUi.prototype.createFooter ();
      EditorUi.prototype.createDiv (classname);
      EditorUi.prototype.addSplitHandler (elt, horizontal, dx, onChange);
      EditorUi.prototype.prompt (title, defaultValue, fn);
      EditorUi.prototype.handleError (resp, title, fn, invokeFnOnClose, notFoundMessage);
      EditorUi.prototype.showError (title, msg, btn, fn, retry, btn2, fn2, btn3, fn3, w, h, hide, onClose);
      EditorUi.prototype.showDialog (elt, w, h, modal, closable, onClose, noScroll, transparent, onResize, ignoreBgClick);
      EditorUi.prototype.hideDialog (cancel, isEsc, matchContainer);
      EditorUi.prototype.ctrlEnter ();
      EditorUi.prototype.pickColor (color, apply, defaultColor, defaultColorValue);
      EditorUi.prototype.openFile ();
      EditorUi.prototype.base64ToBlob (base64Data, contentType);
      EditorUi.prototype.writeImageToClipboard (dataUrl, w, h, error);
      EditorUi.prototype.writeHtmlToClipboard (html, error);
      EditorUi.prototype.writeTextToClipboard (text, error);
      EditorUi.prototype.extractGraphModelFromHtml (data);
      EditorUi.prototype.readGraphModelFromClipboard (fn);
      EditorUi.prototype.readGraphModelFromClipboardWithType (fn, type);
      EditorUi.prototype.parseHtmlData (data);
      EditorUi.prototype.extractGraphModelFromEvent (evt);
      EditorUi.prototype.isCompatibleString (data);
      EditorUi.prototype.saveFile (forceDialog);
      EditorUi.prototype.save (name);
      EditorUi.prototype.executeLayouts (layouts, post);
      EditorUi.prototype.executeLayout (exec, animate, post);
      EditorUi.prototype.showImageDialog (title, value, fn, ignoreExisting);
      EditorUi.prototype.showLinkDialog (value, btnLabel, fn);
      EditorUi.prototype.showDataDialog (cell);
      EditorUi.prototype.showBackgroundImageDialog (apply, img);
      EditorUi.prototype.setBackgroundImage (image);
      EditorUi.prototype.confirm (msg, okFn, cancelFn);
      EditorUi.prototype.createOutline (wnd);
      EditorUi.prototype.createKeyHandler (editor);
      EditorUi.prototype.createHelpIcon (href);
      EditorUi.prototype.destroy ();


Editor.js
---------

   Editor.js — Draw.io 编辑器核心类，定义各种编辑器界面中用到的图标、字体设置对话框设置。
   因为有需要解决用户的交互事件，所以编辑器继承自 `mxEventSource`。另外，此代码文件也涉及
   `mxGraphView` `mxGraph` `mxGraphHandler` 等等底层类型的原型修改。

   .. code:: javascript

      Editor = function(chromeless, themes, model, graph, editable)

      /**
      * Editor inherits from mxEventSource
      */
      mxUtils.extend(Editor, mxEventSource);

      Editor.pageCounter = 0;
      Editor.defaultHtmlFont = '-apple-system, BlinkMacSystemFont, "Segoe UI Variable",' +
                              '"Segoe UI", system-ui, ui-sans-serif, Helvetica, Arial, ' +
                              'sans-serif, "Apple Color Emoji", "Segoe UI Emoji"';
      Editor.useLocalStorage = typeof(Storage) != 'undefined' && mxClient.IS_IOS;
      Editor.smallScreenWidth = 1024;
      Editor.lightCheckmarkImage = 'data:image/gif;base64,...';
      Editor.darkCheckmarkImage = 'data:image/png;base64,...';
      Editor.helpImage = 'data:image/svg+xml;base64,...+';
      Editor.menuImage = 'data:image/svg+xml;base64,...+';
      Editor.moveImage = 'data:image/svg+xml;base64,...';
      Editor.zoomInImage = 'data:image/svg+xml;base64,...';
      Editor.zoomOutImage = 'data:image/svg+xml;base64,...';
      Editor.fullscreenImage = 'data:image/svg+xml;base64,...';
      Editor.fullscreenExitImage = 'data:image/svg+xml;base64,...';
      Editor.zoomFitImage = 'data:image/svg+xml;base64,...';
      Editor.layersImage = 'data:image/svg+xml;base64,...+';
      Editor.previousImage = 'data:image/svg+xml;base64,...';
      Editor.nextImage = 'data:image/svg+xml;base64,...';
      Editor.editImage = 'data:image/svg+xml;base64,...';
      Editor.duplicateImage = 'data:image/svg+xml;base64,...';
      Editor.addImage = 'data:image/svg+xml;base64,...';
      Editor.crossImage = 'data:image/svg+xml;base64,...';
      Editor.verticalDotsImage = 'data:image/svg+xml;base64,...';
      Editor.trashImage = 'data:image/svg+xml;base64,...+';
      Editor.hiddenImage = 'data:image/svg+xml;base64,...';
      Editor.visibleImage = 'data:image/svg+xml;base64,...';
      Editor.lockedImage = 'data:image/svg+xml;base64,...+';
      Editor.unlockedImage = 'data:image/svg+xml;base64,...+';
      Editor.printImage = 'data:image/svg+xml;base64,...';
      Editor.refreshImage = 'data:image/svg+xml;base64,...';
      Editor.backImage = 'data:image/svg+xml;base64,...';
      Editor.closeImage = 'data:image/svg+xml;base64,...='
      Editor.closeBlackImage = 'data:image/svg+xml;base64,...';
      Editor.minusImage = 'data:image/svg+xml;base64,...';
      Editor.plusImage = 'data:image/svg+xml;base64,...';
      Editor.addBoxImage = 'data:image/svg+xml;base64,...';
      Editor.shapesImage = 'data:image/svg+xml;base64,...';
      Editor.formatImage = 'data:image/svg+xml;base64,...';
      Editor.freehandImage = 'data:image/svg+xml;base64,...';
      Editor.undoImage = 'data:image/svg+xml;base64,...+';
      Editor.redoImage = 'data:image/svg+xml;base64,...';
      Editor.outlineImage = 'data:image/svg+xml;base64,...+';
      Editor.saveImage = 'data:image/svg+xml;base64,...';
      Editor.compareImage = 'data:image/svg+xml;base64,...';
      Editor.expandMoreImage = 'data:image/svg+xml;base64,...';
      Editor.expandLessImage = 'data:image/svg+xml;base64,...';
      Editor.gearImage = 'data:image/svg+xml;base64,...';
      Editor.extensionImage = 'data:image/svg+xml;base64,...';
      Editor.colorDropperImage = 'data:image/svg+xml;base64,...+';
      Editor.magnifyImage = 'data:image/svg+xml;base64,...+';
      Editor.sendImage = 'data:image/svg+xml;base64,...';
      Editor.sparklesImage = 'data:image/svg+xml;base64,...';
      Editor.checkmarkImage = Editor.lightCheckmarkImage;
      Editor.roughFillStyles = [{val: 'auto', dispName: 'Auto'}, {val: 'hachure', dispName: 'Hachure'},
      Editor.fillStyles = [{val: 'auto', dispName: 'Auto'}, {val: 'hatch', dispName: 'Hatch'},
      Editor.themes = [];
      Editor.ctrlKey = (mxClient.IS_MAC) ? 'Cmd' : 'Ctrl';
      Editor.hintOffset = 20;
      Editor.shapePickerHoverDelay = 300;
      Editor.fitWindowBorders = null;
      Editor.popupsAllowed = window.urlParams != null? urlParams['noDevice'] != '1' : true;
      Editor.simpleLabels = false;
      Editor.enableNativeCipboard = window == window.top && !mxClient.IS_FF && navigator.clipboard != null;
      Editor.sketchMode = false;
      Editor.enableCssDarkMode = window.mxIsElectron? false : true;
      Editor.cssDarkMode = false;
      Editor.darkMode = false;
      Editor.currentTheme = uiTheme;
      Editor.darkColor = (Editor.enableCssDarkMode) ? '#121212' : '#18141D';
      Editor.lightColor = '#f0f0f0';
      Editor.fontSizeUnit = 'px';
      Editor.pageSizeUnit = mxConstants.INCHES;
      Editor.isDarkMode (value);
      Editor.isPngDataUrl (url);
      Editor.isPngData (data);
      Editor.convertHtmlToText (label);
      Editor.extractGraphModelFromPng (data);
      Editor.soundex (name);
      Editor.selectFilename (input);
      Editor.selectSubstring (input, startPos, endPos);
      Editor.toUnit (value, unit);
      Editor.fromUnit (value, unit);

      /**
      * Editor inherits from mxEventSource
      */
      mxUtils.extend(Editor, mxEventSource);

      Editor.prototype.originalNoForeignObject = mxClient.NO_FO;
      Editor.prototype.transparentImage = (mxClient.IS_SVG) ? 'data:image/gif;base64,...' :
      Editor.prototype.extendCanvas = true;
      Editor.prototype.chromeless = false;
      Editor.prototype.cancelFirst = true;
      Editor.prototype.enabled = true;
      Editor.prototype.filename = null;
      Editor.prototype.modified = false;
      Editor.prototype.autosave = true;
      Editor.prototype.initialTopSpacing = 0;
      Editor.prototype.appName = document.title;
      Editor.prototype.editBlankUrl = window.location.origin + window.location.pathname;
      Editor.prototype.defaultGraphOverflow = 'hidden';
      Editor.prototype.init () { };
      Editor.prototype.isChromelessView ();
      Editor.prototype.setAutosave (value);
      Editor.prototype.getEditBlankUrl (params);
      Editor.prototype.editAsNew (xml, title);
      Editor.prototype.createGraph (themes, model);
      Editor.prototype.resetGraph ();
      Editor.prototype.readGraphState (node);
      Editor.prototype.setGraphXml (node);
      Editor.prototype.getGraphXml (ignoreSelection);
      Editor.prototype.updateGraphComponents ();
      Editor.prototype.setModified (value);
      Editor.prototype.setFilename (value);
      Editor.prototype.createUndoManager ();
      Editor.prototype.initStencilRegistry () { };
      Editor.prototype.destroy ();

      OpenFile.prototype.setConsumer (value);
      OpenFile.prototype.setData ();
      OpenFile.prototype.error (msg);
      OpenFile.prototype.execute ();
      OpenFile.prototype.cancel (cancel);

      Dialog.prototype.zIndex = mxPopupMenu.prototype.zIndex - 2;
      Dialog.prototype.noColorImage = (!mxClient.IS_SVG) ? IMAGE_PATH + '/nocolor.png' : 'data:image/png;base64,...';
      Dialog.prototype.defaultColorImage = (!mxClient.IS_SVG) ? IMAGE_PATH + '/defaultcolor.png' : 'data:image/png;base64,...';
      Dialog.prototype.closeImage = (!mxClient.IS_SVG) ? IMAGE_PATH + '/close.png' : 'data:image/png;base64,...';
      Dialog.prototype.clearImage = (!mxClient.IS_SVG) ? IMAGE_PATH + '/clear.gif' : 'data:image/gif;base64,...';
      Dialog.prototype.bgOpacity = 80;
      Dialog.prototype.getDocumentSize ();
      Dialog.prototype.getPosition (left, top);
      Dialog.prototype.close (cancel, isEsc);

      PrintDialog.prototype.create (editorUi);

      mxGraphView.prototype.validateBackgroundPage ();
      mxGraphView.prototype.validateBackgroundStyles (factor, cx, cy);
      mxGraphView.prototype.createSvgGrid (color, factor);
      mxGraphView.prototype.createBackgroundPageShape (bounds);
      mxGraphView.prototype.getBackgroundPageBounds ();
      mxGraph.prototype.panGraph (dx, dy);
      mxGraph.prototype.updatePageBreaks (visible, width, height);
      mxGraph.prototype.panGraph (dx, dy);
      mxGraphHandler.prototype.shouldRemoveCellsFromParent (parent, cells, evt);
      mxGraphHandler.prototype.isPropagateSelectionCell (cell, immediate, me);
      mxConnectionHandler.prototype.createMarker ();
      mxPopupMenu.prototype.addItem (title, image, funct, parent, iconCls, enabled);
      mxPopupMenuHandler.prototype.getCellForPopupEvent (me);


Actions.js
----------

   Actions.js — 动作管理，所谓动作 `Action`，就是菜单、按钮执行的具体功能。一个动作可以
   描述为：{标题，回调函数，可用状态，图标，快捷键}。

   .. code:: javascript

      function Actions(editorUi);
      function Action(label, funct, enabled, iconCls, shortcut);

      // Action inherits from mxEventSource
      mxUtils.extend(Action, mxEventSource);

      this.addAction('new...', function()...);
      this.addAction('open...', function()...);
      this.addAction('keyPressEnter', function()...);
      this.addAction('import...', function()...);
      this.addAction('save', function()...);
      this.addAction('saveAs...', function()...);
      this.addAction('export...', function()...);
      this.addAction('editDiagram...', function()...);
      this.addAction('pageSetup...', function()...);
      this.addAction('print...', function()...);
      this.addAction('preview', function()...);
      this.addAction('undo', function()...);
      this.addAction('redo', function()...);
      this.addAction('cut', function()...);
      this.addAction('copy', function()...);
      this.addAction('paste', function()...);
      this.addAction('pasteHere', function(evt)...);
      this.addAction('swap', function()...);
      this.addAction('copySize', function()...);
      this.addAction('pasteSize', function()...);
      this.addAction('copyData', function()...);
      this.addAction('copyAsText', function()...);
      this.addAction('pasteData', function(evt, trigger)...);
      this.addAction('delete', function(evt, trigger)...);
      this.addAction('deleteAll', function()...);
      this.addAction('deleteLabels', function()...);
      this.addAction('duplicate', function()...);
      this.addAction('selectVertices', function()...);
      this.addAction('selectEdges', function()...);
      this.addAction('selectAll', function()...);
      this.addAction('selectNone', function()...);
      this.addAction('lockUnlock', function()...);
      this.addAction('explore', function()...);
      this.addAction('home', function()...);
      this.addAction('exitGroup', function()...);
      this.addAction('enterGroup', function()...);
      this.addAction('collapse', function()...);
      this.addAction('expand', function()...);
      this.addAction('toFront', function()...);
      this.addAction('toBack', function()...);
      this.addAction('bringForward', function(evt)...);
      this.addAction('sendBackward', function(evt)...);
      this.addAction('group', function()...);
      this.addAction('ungroup', function()...);
      this.addAction('removeFromGroup', function()...);
      this.addAction('edit', function()...);
      this.addAction('editData...', function()...);
      this.addAction('editTooltip...', function()...);
      this.addAction('openLink', function()...);
      this.addAction('editLink...', function()...);
      this.addAction('editImage...', function()...);
      this.addAction('link...', function()...);
      this.addAction('autosize', function()...);
      this.addAction('snapToGrid', function()...);
      this.addAction('formattedText', function()...);
      this.addAction('wordWrap', function()...);
      this.addAction('rotation', function()...);
      this.addAction('resetView', function()...);
      this.addAction('zoomIn', function(evt)...);
      this.addAction('zoomOut', function(evt)...);
      this.addAction('fitWindow', function()...);
      this.addAction('fitPage', function()...);
      this.addAction('fitTwoPages', function()...);
      this.addAction('fitPageWidth', function()...);
      this.addAction('pageScale...', function()...);
      this.addAction('grid', function()...);
      this.addAction('guides', function()...);
      this.addAction('animations', function()...);
      this.addAction('tooltips', function()...);
      this.addAction('collapseExpand', function()...);
      this.addAction('pageView', function()...);
      this.addAction('connectionArrows', function()...);
      this.addAction('connectionPoints', function()...);
      this.addAction('copyConnect', function()...);
      this.addAction('autosave', function()...);
      this.addAction('help', function()...);
      this.addAction('fontColor...', function()...);
      this.addAction('strokeColor...', function()...);
      this.addAction('fillColor...', function()...);
      this.addAction('gradientColor...', function()...);
      this.addAction('backgroundColor...', function()...);
      this.addAction('borderColor...', function()...);
      this.addAction('removeFormat', function()...);
      this.addAction('vertical', function()...);
      this.addAction('shadow', function()...);
      this.addAction('solid', function()...);
      this.addAction('dashed', function()...);
      this.addAction('dotted', function()...);
      this.addAction('sharp', function()...);
      this.addAction('rounded', function()...);
      this.addAction('toggleRounded', function()...);
      this.addAction('curved', function()...);
      this.addAction('collapsible', function()...);
      this.addAction('editStyle...', function()...);
      this.addAction('setAsDefaultStyle', function()...);
      this.addAction('clearDefaultStyle', function()...);
      this.addAction('addWaypoint', function()...);
      this.addAction('removeWaypoint', function()...);
      this.addAction('clearAnchors', function()...);
      this.addAction('clearWaypoints', function()...);
      this.addAction('subscript', function()...);
      this.addAction('superscript', function()...);
      this.addAction('decreaseFontSize', function()...);
      this.addAction('increaseFontSize', function()...);
      this.addAction('image...', function()...);
      this.addAction('crop...', function()...);
      this.addAction('layers', function()...);
      this.addAction('format', function()...);
      this.addAction('outline', function()...);
      this.addAction('editConnectionPoints...', function()...);

Dialogs.js
----------

   Dialogs.js — mxGraph 各种内置对话框类型实现。

   .. code:: javascript

      var OpenDialog ();
      var ColorDialog (editorUi, color, apply, cancelFn, defaultColor, defaultColorValue);
      var AboutDialog (editorUi);
      var TextareaDialog (editorUi, title, url, fn, cancelFn, cancelTitle, w, h,
                                       addButtons, noHide, noWrap, applyTitle, helpLink, customButtons, header);
      var EditDiagramDialog (editorUi);
      var ExportDialog (editorUi);
      var EditDataDialog (ui, cell);
      var LinkDialog (editorUi, initialValue, btnLabel, fn);


Format.js
---------

   Format.js — 格式化面板实现，主要是 `ArrangePanel` `TextFormatPanel` `StyleFormatPanel`。
   基类 `BaseFormatPanel` 定义了基本的面板 API，比如：

   *  `createPanel()` 向面板中添加控件面板；
   *  `createOption()` 向面板中添加选项按钮；
   *  `addUnitInput()` 向面板中添加选项按钮；
   *  `addLabel()` 向面板中添加标签；
   *  `addAction()` 将行为（Action）绑定到面板的按钮上。

   .. code:: javascript

      Format = function(editorUi, container)
      BaseFormatPanel = function(format, editorUi, container)

      ArrangePanel = function(format, editorUi, container);
      mxUtils.extend(ArrangePanel, BaseFormatPanel);

      TextFormatPanel = function(format, editorUi, container);
      mxUtils.extend(TextFormatPanel, BaseFormatPanel);

      StyleFormatPanel = function(format, editorUi, container);
      mxUtils.extend(StyleFormatPanel, BaseFormatPanel);

      DiagramStylePanel = function(format, editorUi, container);
      mxUtils.extend(DiagramStylePanel, BaseFormatPanel);

      DiagramFormatPanel = function(format, editorUi, container);
      mxUtils.extend(DiagramFormatPanel, BaseFormatPanel);

      Format.inactiveTabBackgroundColor = '#e4e4e4';
      Format.classicFilledMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.classicThinFilledMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.openFilledMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.openThinFilledMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.openAsyncFilledMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.blockFilledMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.blockThinFilledMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.asyncFilledMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.ovalFilledMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.diamondFilledMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.diamondThinFilledMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.classicMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.classicThinMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.blockMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.blockThinMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.asyncMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.ovalMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.diamondMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.diamondThinMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.boxMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.halfCircleMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.dashMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.crossMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.circlePlusMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.circleMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.ERmandOneMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.ERmanyMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.ERoneToManyMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.ERzeroToOneMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.ERzeroToManyMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.EROneMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.baseDashMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.doubleBlockMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.doubleBlockFilledMarkerImage = Graph.createSvgImage(20, 22, '<path d=.../>', 32, 20);
      Format.processMenuIcon (elt, transform);

      Format.prototype.labelIndex = 0;
      Format.prototype.diagramIndex = 0;
      Format.prototype.currentIndex = 0;
      Format.prototype.showCloseButton = true;
      Format.prototype.rounded = false;
      Format.prototype.curved = false;
      Format.prototype.init ();
      Format.prototype.clear ();
      Format.prototype.refresh ();
      Format.prototype.immediateRefresh ();

      BaseFormatPanel.prototype.buttonBackgroundColor = 'transparent';
      BaseFormatPanel.prototype.installInputHandler (input, key, defaultValue, min, max, unit, textEditFallback, isFloat, useUnits);
      BaseFormatPanel.prototype.createPanel ();
      BaseFormatPanel.prototype.createTitle (title);
      BaseFormatPanel.prototype.addAction (div, name);
      BaseFormatPanel.prototype.addActions (div, names);
      BaseFormatPanel.prototype.createStepper (input, update, step, height, disableFocus, defaultValue, isFloat);
      BaseFormatPanel.prototype.createOption (label, isCheckedFn, setCheckedFn, listener, fn);
      BaseFormatPanel.prototype.createCellOption (label, key, defaultValue, enabledValue, disabledValue, fn, action, stopEditing, cells);
      BaseFormatPanel.prototype.createColorOption (label, getColorFn, setColorFn,
                                          defaultColor, listener, callbackFn, hideCheckbox, defaultColorValue);
      BaseFormatPanel.prototype.createCellColorOption (label, colorKey, defaultColor, callbackFn, setStyleFn, defaultColorValue);
      BaseFormatPanel.prototype.addArrow (elt);
      BaseFormatPanel.prototype.addUnitInput (container, unit, right, width, update, step, marginTop, disableFocus, isFloat);
      BaseFormatPanel.prototype.addGenericInput (container, unit, left, width, readFn, writeFn);
      BaseFormatPanel.prototype.createRelativeOption (label, key, width, handler, init);
      BaseFormatPanel.prototype.addLabel (div, title, right, width);
      BaseFormatPanel.prototype.addKeyHandler (input, listener);
      BaseFormatPanel.prototype.styleButtons (elts);
      BaseFormatPanel.prototype.destroy ();
      BaseFormatPanel.prototype.getUnit (prefix);
      BaseFormatPanel.prototype.inUnit (pixels);
      BaseFormatPanel.prototype.fromUnit (value);
      BaseFormatPanel.prototype.isFloatUnit ();
      BaseFormatPanel.prototype.getUnitStep ();

      ArrangePanel.prototype.init ();
      ArrangePanel.prototype.addTable (div);
      ArrangePanel.prototype.addLayerOps (div);
      ArrangePanel.prototype.addGroupOps (div);
      ArrangePanel.prototype.addAlign (div);
      ArrangePanel.prototype.addFlip (div);
      ArrangePanel.prototype.addDistribute (div);
      ArrangePanel.prototype.addAngle (div);
      ArrangePanel.prototype.addGeometry (container);
      ArrangePanel.prototype.addGeometryHandler (input, fn);
      ArrangePanel.prototype.addEdgeGeometryHandler (input, fn);
      ArrangePanel.prototype.addEdgeGeometry (container);

      TextFormatPanel.prototype.init ();
      TextFormatPanel.prototype.addFontOps (div);
      TextFormatPanel.prototype.addFont (container);

      StyleFormatPanel.prototype.defaultStrokeColor = 'black';
      StyleFormatPanel.prototype.init ();
      StyleFormatPanel.prototype.getCssRules (css);
      StyleFormatPanel.prototype.addSvgStyles (container);
      StyleFormatPanel.prototype.addSvgRule (container, rule, svg, styleElem, rules, ruleIndex, regex);
      StyleFormatPanel.prototype.addEditOps (div);
      StyleFormatPanel.prototype.addFill (container);
      StyleFormatPanel.prototype.getCustomColors ();
      StyleFormatPanel.prototype.addStroke (container);
      StyleFormatPanel.prototype.addLineJumps (container);
      StyleFormatPanel.prototype.addEffects (div);
      StyleFormatPanel.prototype.addStyleOps (div);

      DiagramStylePanel.prototype.init ();
      DiagramStylePanel.prototype.getGlobalStyleButtons ();
      DiagramStylePanel.prototype.addView (div);
      DiagramStylePanel.prototype.addGraphStyles (div);
      DiagramStylePanel.prototype.destroy ();

      DiagramFormatPanel.prototype.showBackgroundImageOption = true;
      DiagramFormatPanel.prototype.init ();
      DiagramFormatPanel.prototype.addView (div);
      DiagramFormatPanel.prototype.addOptions (div);
      DiagramFormatPanel.prototype.addGridOption (container);
      DiagramFormatPanel.prototype.addDocumentProperties (div);
      DiagramFormatPanel.prototype.addPaperSize (div);
      DiagramFormatPanel.prototype.addStyleOps (div);
      DiagramFormatPanel.prototype.destroy ();


Graph.js
--------

   Graph.js — Drwa.io 图形交互支持，区别于低层的 `mxGraph` (图表数据结构描述)。

   .. code:: javascript

      Graph = function(container, model, renderHint, stylesheet, themes, standalone)

      /**
      * Graph inherits from mxGraph.
      */
      mxUtils.extend(Graph, mxGraph);

      Graph.prototype.minFitScale = null;
      Graph.prototype.maxFitScale = null;
      Graph.prototype.linkPolicy = (urlParams['target'] == 'frame') ? 'blank' : (urlParams['target'] || 'auto');
      Graph.prototype.linkTarget = (urlParams['target'] == 'frame') ? '_self' : '_blank';
      Graph.prototype.linkRelation = 'nofollow noopener noreferrer';
      Graph.prototype.defaultScrollbars = true;
      Graph.prototype.defaultPageVisible = true;
      Graph.prototype.defaultGridEnabled = urlParams['grid'] != '0';
      Graph.prototype.lightbox = false;
      Graph.prototype.defaultPageBackgroundColor = '#ffffff';
      Graph.prototype.diagramBackgroundColor = '#f0f0f0';
      Graph.prototype.enableDiagramBackground = false;
      Graph.prototype.defaultPageBorderColor = '#ffffff';
      Graph.prototype.shapeForegroundColor = '#000000';
      Graph.prototype.shapeBackgroundColor = '#ffffff';
      Graph.prototype.scrollTileSize = new mxRectangle(0, 0, 400, 400);
      Graph.prototype.transparentBackground = true;
      Graph.prototype.selectParentAfterDelete = false;
      Graph.prototype.defaultEdgeLength = 80;
      Graph.prototype.immediateHandling = true;
      Graph.prototype.connectionArrowsEnabled = true;
      Graph.prototype.placeholderPattern = new RegExp('%(date\{.*\}|[^%^\{^\}^ ^"^ \'^=^;]+)%', 'g');
      Graph.prototype.absoluteUrlPattern = new RegExp('^(?:[a-z]+:)?//', 'i');
      Graph.prototype.defaultThemeName = 'default';
      Graph.prototype.defaultThemes = {};
      Graph.prototype.baseUrl = (urlParams['base'] != null) || document.location.toString()
      Graph.prototype.editAfterInsert = false;
      Graph.prototype.builtInProperties = ['label', 'tooltip', 'placeholders', 'placeholder'];
      Graph.prototype.standalone = false;
      Graph.prototype.enableFlowAnimation = false;
      Graph.prototype.roundableShapes = ['label', 'rectangle', 'internalStorage', 'corner', ...];
      Graph.prototype.vertexFontSize = null;
      Graph.prototype.edgeFontSize = null;
      Graph.prototype.useCssTransforms = false;
      Graph.prototype.currentScale = 1;
      Graph.prototype.currentTranslate = new mxPoint(0, 0);
      Graph.prototype.pasteEdgeStyle = false;
      Graph.prototype.init (container);
      Graph.prototype.isFillState (state);
      Graph.prototype.isGradientState (state);
      Graph.prototype.isStrokeState (state);
      Graph.prototype.isSpecialColor (color);
      Graph.prototype.isGlassState (state);
      Graph.prototype.isRoundedState (state);
      Graph.prototype.isLineJumpState (state);
      Graph.prototype.isAutoSizeState (state);
      Graph.prototype.isImageState (state);
      Graph.prototype.isShadowState (state);
      Graph.prototype.getVerticesAndEdges (vertices, edges);
      Graph.prototype.applyNewEdgeStyle (source, edges, dir);
      Graph.prototype.getCommonStyle (cells);
      Graph.prototype.mergeStyle (style, into, initial);
      Graph.prototype.getStartEditingCell (cell, trigger);
      Graph.prototype.copyStyle (cell);
      Graph.prototype.pasteStyle (style, cells, keys, replaceAll);
      Graph.prototype.copyCellStyles (cells, keys, values, vertexStyle, edgeStyle, vertexStyleIgnored, edgeStyleIgnored);
      Graph.prototype.includeDescendants (cells);
      Graph.prototype.pasteCellStyles (cells, vertexStyle, edgeStyle, force, pasteEdgeStyle);
      Graph.prototype.updateCellStyles (style, cells);
      Graph.prototype.isFastZoomEnabled ();
      Graph.prototype.isCssTransformsSupported ();
      Graph.prototype.getCellAt (x, y, parent, vertices, edges, ignoreFn);
      Graph.prototype.getScaledCellAt (x, y, parent, vertices, edges, ignoreFn);
      Graph.prototype.isRecursiveVertexResize (state);
      Graph.prototype.getAbsoluteParent (cell);
      Graph.prototype.isPart (cell);
      Graph.prototype.getCompositeParents (cells);
      Graph.prototype.getReferenceTerminal (terminal);
      Graph.prototype.getCompositeParent (cell);
      Graph.prototype.filterSelectionCells (ignoreFn);
      Graph.prototype.scrollRectToVisible (r);
      Graph.prototype.getCellsForGroup (cells);
      Graph.prototype.getCellsForUngroup (cells);
      Graph.prototype.updateCssTransform ();
      Graph.prototype.isLightboxView ();
      Graph.prototype.isViewer ();
      Graph.prototype.labelLinkClicked (state, elt, evt);
      Graph.prototype.openLink (href, target, allowOpener);
      Graph.prototype.getLinkTitle (href);
      Graph.prototype.isCustomLink (href);
      Graph.prototype.customLinkClicked (link, associatedCell);
      Graph.prototype.isExternalProtocol (href);
      Graph.prototype.isBlankLink (href);
      Graph.prototype.isRelativeUrl (url);
      Graph.prototype.getAbsoluteUrl (url);
      Graph.prototype.initLayoutManager ();
      Graph.prototype.createLayouts (list);
      Graph.prototype.getDataForCells (cells, includeValues);
      Graph.prototype.getNodesForCells (cells);
      Graph.prototype.createWipeAnimations (cells, wipeIn);
      Graph.prototype.createEdgeWipeAnimation (state, wipeIn);
      Graph.prototype.createVertexWipeAnimation (state, wipeIn);
      Graph.prototype.executeAnimations (animations, done, steps, delay);
      Graph.prototype.getPageSize ();
      Graph.prototype.getPageLayout (bounds, tr, s);
      Graph.prototype.getDefaultTranslate (pageLayout);
      Graph.prototype.updateMinimumSize ();
      Graph.prototype.sanitizeHtml (value, editing);
      Graph.prototype.updatePlaceholders ();
      Graph.prototype.isReplacePlaceholders (cell);
      Graph.prototype.isZoomWheelEvent (evt);
      Graph.prototype.isScrollWheelEvent (evt);
      Graph.prototype.isTransparentClickEvent (evt);
      Graph.prototype.isIgnoreTerminalEvent (evt);
      Graph.prototype.isEdgeIgnored (cell);
      Graph.prototype.isSplitTarget (target, cells, evt);
      Graph.prototype.getLabel (cell);
      Graph.prototype.isLabelMovable (cell);
      Graph.prototype.setGridSize (value);
      Graph.prototype.setDefaultParent (cell);
      Graph.prototype.getClickableLinkForCell (cell);
      Graph.prototype.getGlobalVariable (name);
      Graph.prototype.formatDate (date, mask, utc);
      Graph.prototype.getLayerForCell (cell);
      Graph.prototype.getLayerForCells (cells);
      Graph.prototype.createLayersDialog (onchange, inverted);
      Graph.prototype.replacePlaceholders (cell, str, vars, translate);
      Graph.prototype.restoreSelection (cells);
      Graph.prototype.selectCellForEvent (cell, evt);
      Graph.prototype.selectTableRange (startCell, endCell);
      Graph.prototype.snapCellsToGrid (cells, gridSize);
      Graph.prototype.removeChildCells (cell);
      Graph.prototype.updateShapes (source, targets, replaceStyles);
      Graph.prototype.selectCellsForConnectVertex (cells, evt, hoverIcons);
      Graph.prototype.isCloneConnectSource (source);
      Graph.prototype.insertEdgeBeforeCell (edge, cell);
      Graph.prototype.connectVertex (source, direction, length, evt, forceClone, ignoreCellAt, createTarget, done);
      Graph.prototype.getIndexableText (cells);
      Graph.prototype.convertValueToString (cell);
      Graph.prototype.getLinksForState (state);
      Graph.prototype.getLinkForCell (cell, allowUnsafe);
      Graph.prototype.getLinkTargetForCell (cell);
      Graph.prototype.postProcessCellStyle (cell, style);
      Graph.prototype.updateHorizontalStyle (cell, style);
      Graph.prototype.replaceDefaultColors (cell, style);
      Graph.prototype.replaceDefaultColor (style, key, value, inverseValue);
      Graph.prototype.getDefaultColor (style, key, defaultValue, inverseDefaultValue);
      Graph.prototype.updateAlternateBounds (cell, geo, willCollapse);
      Graph.prototype.isMoveCellsEvent (evt, state);
      Graph.prototype.foldCells (collapse, recurse, cells, checkFoldable, evt);
      Graph.prototype.moveSiblings (state, parent, dx, dy);
      Graph.prototype.resizeParentStacks (parent, layout, dx, dy);
      Graph.prototype.isContainer (cell);
      Graph.prototype.isCellConnectable (cell);
      Graph.prototype.isLabelMovable (cell);
      Graph.prototype.selectAll (parent);
      Graph.prototype.selectCells (vertices, edges, parent);
      Graph.prototype.getSwimlaneAt  (x, y, parent);
      Graph.prototype.isCellFoldable (cell);
      Graph.prototype.reset ();
      Graph.prototype.zoom (factor, center);
      Graph.prototype.zoomIn ();
      Graph.prototype.zoomOut ();
      Graph.prototype.fitPages (pageCount, ignoreHeight);
      Graph.prototype.fitWindow (bounds, border);
      Graph.prototype.convertValueToTooltip (cell);
      Graph.prototype.getTooltipForCell (cell);
      Graph.prototype.addFlowAnimationToNode (node, style, scale, id);
      Graph.prototype.addFlowAnimationStyle ();
      Graph.prototype.createFlowAnimationCss (id);
      Graph.prototype.stringToBytes (str);
      Graph.prototype.bytesToString (arr);
      Graph.prototype.compressNode (node);
      Graph.prototype.compress (data, deflate);
      Graph.prototype.decompress (data, inflate);
      Graph.prototype.zapGremlins (text);
      Graph.prototype.removeTextStyleForCell (cell, removeCellStyles);
      Graph.prototype.createParent (parent, child, childCount, dx, dy);
      Graph.prototype.createTable (rowCount, colCount, w, h, title, startSize, tableStyle, rowStyle, cellStyle);
      Graph.prototype.setTableValues (table, values, rowValues);
      Graph.prototype.createCrossFunctionalSwimlane (rowCount, colCount, w, h, title, tableStyle, rowStyle, firstCellStyle, cellStyle);
      Graph.prototype.visitTableCells (cell, visitor);
      Graph.prototype.getTableLines (cell, horizontal, vertical);
      Graph.prototype.isTableCell (cell);
      Graph.prototype.isTableRow (cell);
      Graph.prototype.isTable (cell);
      Graph.prototype.isStack (cell);
      Graph.prototype.isStackChild (cell);
      Graph.prototype.setTableRowHeight (row, dy, extend);
      Graph.prototype.setTableColumnWidth (col, dx, extend);

      /**
      * These overrides are only added if mxVertexHandler is defined (ie. not in embedded graph)
      */
      Graph.prototype.defaultVertexStyle = {};
      Graph.prototype.defaultEdgeStyle = {'edgeStyle': 'orthogonalEdgeStyle', 'rounded': '0', ...}
      Graph.prototype.createCurrentEdgeStyle ();
      Graph.prototype.getPagePadding ();
      Graph.prototype.loadStylesheet ();
      Graph.prototype.createCellLookup (cells, lookup);
      Graph.prototype.createCellMapping (mapping, lookup, cellMapping);
      Graph.prototype.importGraphModel (node, dx, dy, crop);
      Graph.prototype.encodeCells (cells);
      Graph.prototype.isSwimlane (cell, ignoreState);
      Graph.prototype.isCellEditable (cell);
      Graph.prototype.isCellMovable (cell);
      Graph.prototype.isExtendParent (cell);
      Graph.prototype.splitEdge (edge, cells, newEdge, dx, dy, x, y, parent);
      Graph.prototype.selectCell (isNext, isParent, isChild);
      Graph.prototype.swapShapes (source, target);
      Graph.prototype.moveCells (cells, dx, dy, clone, target, evt, mapping);
      Graph.prototype.removeCells (cells, includeEdges);
      Graph.prototype.updateCustomLinks (mapping, cells, graph);
      Graph.prototype.updateCustomLinksForCell (mapping, cell);
      Graph.prototype.doUpdateCustomLinksForCell (mapping, cell);
      Graph.prototype.getAllConnectionConstraints (terminal, source);
      Graph.prototype.flipEdge (edge);
      Graph.prototype.isValidRoot (cell);
      Graph.prototype.isValidDropTarget (cell, cells, evt);
      Graph.prototype.createGroupCell ();
      Graph.prototype.isExtendParentsOnAdd (cell);
      Graph.prototype.getPreferredSizeForCell (cell, w, gridEnabled);
      Graph.prototype.turnShapes (cells, backwards);
      Graph.prototype.stencilHasPlaceholders (stencil);
      Graph.prototype.processChange (change);
      Graph.prototype.invalidateDescendantsWithPlaceholders (cell);
      Graph.prototype.replaceElement (elt, tagName);
      Graph.prototype.processElements (elt, fn);
      Graph.prototype.updateLabelElements (cells, fn, tagName);
      Graph.prototype.cellLabelChanged (cell, value, autoSize);
      Graph.prototype.cellsRemoved (cells);
      Graph.prototype.removeCellsAfterUngroup (cells);
      Graph.prototype.setLinkForCell (cell, link);
      Graph.prototype.setTooltipForCell (cell, link);
      Graph.prototype.getAttributeForCell (cell, attributeName, defaultValue);
      Graph.prototype.setAttributeForCell (cell, attributeName, attributeValue);
      Graph.prototype.isTargetShape (target, cells, evt);
      Graph.prototype.getDropTarget (cells, evt, cell, clone);
      Graph.prototype.click (me);
      Graph.prototype.dblClick (evt, cell);
      Graph.prototype.insertTextForEvent (evt, cell);
      Graph.prototype.getInsertPoint ();
      Graph.prototype.getFreeInsertPoint ();
      Graph.prototype.getCenterInsertPoint (bbox);
      Graph.prototype.isMouseInsertPoint ();
      Graph.prototype.appendFontSize (style, fontSize);
      Graph.prototype.addText (x, y, state);
      Graph.prototype.addClickHandler (highlight, beforeClick, onClick);
      Graph.prototype.duplicateCells (cells, append);
      Graph.prototype.insertImage (newValue, w, h);
      Graph.prototype.insertLink (value);
      Graph.prototype.isCellResizable (cell);
      Graph.prototype.distributeCells (horizontal, cells, spacing);
      Graph.prototype.isCloneEvent (evt);
      Graph.prototype.createSvgImageExport ();
      Graph.prototype.parseBackgroundImage (json);
      Graph.prototype.getBackgroundImageObject (obj);
      Graph.prototype.getSvg (background, scale, border, nocrop, crisp, ignoreSelection, showText, imgExport, linkTarget, hasShadow, incExtFonts, theme, exportType, cells, noCssClass, disableLinks);
      Graph.prototype.addForeignObjectWarning (canvas, root);
      Graph.prototype.disableSvgLinks (node, visit);
      Graph.prototype.updateSvgLinks (node, target, removeCustom);
      Graph.prototype.createSvgCanvas (node);
      Graph.prototype.getSelectedTextBlocks ();
      Graph.prototype.getSelectedElement ();
      Graph.prototype.getSelectedEditingElement ();
      Graph.prototype.getParentByName (node, name, stopAt);
      Graph.prototype.getParentByNames (node, names, stopAt);
      Graph.prototype.selectNode (node);
      Graph.prototype.flipEdgePoints (cell, horizontal, c);
      Graph.prototype.flipChildren (cell, horizontal, c);
      Graph.prototype.flipCells (cells, horizontal);
      Graph.prototype.deleteCells (cells, includeEdges);
      Graph.prototype.insertTableColumn (cell, before);
      Graph.prototype.deleteLane (cell);
      Graph.prototype.insertLane (cell, before);
      Graph.prototype.insertTableRow (cell, before);
      Graph.prototype.deleteTableColumn (cell);
      Graph.prototype.deleteTableRow (cell);
      Graph.prototype.insertRow (table, index);
      Graph.prototype.deleteRow (table, index);
      Graph.prototype.insertColumn (table, index);
      Graph.prototype.deleteColumn (table, index);
      Graph.prototype.pasteHtmlAtCaret (html);
      Graph.prototype.createLinkForHint (link, label, associatedCell);
      Graph.prototype.initTouch ();
      Graph.prototype.expandedImage = Graph.createSvgImage(9, 9, '<defs><linearGradient id="grad1" x1="50%"...'
      Graph.prototype.collapsedImage = Graph.createSvgImage(9, 9, '<defs><linearGradient id="grad1" x1="0%"...'
      Graph.prototype.tolerance = 12;


Menus.js
--------

   Menus.js — 主界面菜单实现，新版本由于引入了多个界面布局，菜单的组织形式会根据不同布局变更，
   结合 diagramly 目录下的菜单脚本。主题可以通过编辑器对象注册 `Editor.themes.push('min')`，
   `EditorUi.initTheme()` 方法初始化主题配置。

   * minimal UI theme - ``diagramly/Minimal.js``

   .. code:: javascript

      EditorUi.initTheme ()
      {
         uiInitTheme.apply(this, arguments);
         
         if (uiTheme == 'min' && !initialized)
         {
            this.initMinimalTheme();
            initialized = true;
         }
      };

   .. code:: javascript

      Menus = function(editorUi)

      // Menu inherits from mxEventSource
      mxUtils.extend(Menu, mxEventSource);

      Menus.prototype.defaultFont = 'Helvetica';
      Menus.prototype.defaultFontSize = '12';
      Menus.prototype.defaultMenuItems = ['file', 'edit', 'view', 'arrange', 'extras', 'help'];
      Menus.prototype.defaultFonts = ['Helvetica', 'Verdana', 'Times New Roman', 'Garamond', ...]
      Menus.prototype.autoPopup = true;
      Menus.prototype.init ();
      Menus.prototype.put (name, menu);
      Menus.prototype.get (name);
      Menus.prototype.addSubmenu (name, menu, parent, label);
      Menus.prototype.addMenu (name, popupMenu, parent);
      Menus.prototype.addInsertTableCellItem (menu, parent);
      Menus.prototype.addInsertTableItem (menu, insertFn, parent, showOptions);
      Menus.prototype.edgeStyleChange (menu, label, keys, values, sprite, parent, reset, image);
      Menus.prototype.showIconOnly (elt);
      Menus.prototype.styleChange (menu, label, keys, values, sprite, parent, fn, post, iconOnly);
      Menus.prototype.createStyleChangeFunction (keys, values);
      Menus.prototype.promptChange (menu, label, hint, defaultValue, key, parent, enabled, fn, sprite, beforeFn);
      Menus.prototype.pickColor (key, cmd, defaultValue, defaultColor, defaultColorValue);
      Menus.prototype.toggleStyle (key, defaultValue);
      Menus.prototype.addMenuItem (menu, key, parent, trigger, sprite, label);
      Menus.prototype.addShortcut (item, action, asTooltip);
      Menus.prototype.addMenuItems (menu, keys, parent, trigger, sprites);
      Menus.prototype.createPopupMenu (menu, cell, evt);
      Menus.prototype.addPopupMenuItems (menu, cell, evt);
      Menus.prototype.isShowHistoryItems ();
      Menus.prototype.addPopupMenuHistoryItems (menu, cell, evt);
      Menus.prototype.addPopupDeleteItem (menu, cell, evt);
      Menus.prototype.addPopupMenuEditItems (menu, cell, evt);
      Menus.prototype.isShowStyleItems ();
      Menus.prototype.addPopupMenuStyleItems (menu, cell, evt);
      Menus.prototype.isShowArrangeItems ();
      Menus.prototype.addPopupMenuArrangeItems (menu, cell, evt);
      Menus.prototype.addPopupMenuCellItems (menu, cell, evt);
      Menus.prototype.isShowCellEditItems ();
      Menus.prototype.addPopupMenuCellEditItems (menu, cell, evt, parent);
      Menus.prototype.addPopupMenuSelectionItems (menu, cell, evt);
      Menus.prototype.createMenubar (container);
      Menus.prototype.menuCreated (menu, elt, className);

Shapes.js
---------

   Shapes.js — Draw.io 编辑器专用图形扩展，扩展多个 `mxShape` 子类同时改写了几个基类原型方法。

   .. code:: javascript

      mxShape.prototype.beforePaint (c);
      mxShape.prototype.afterPaint (c);
      mxShape.prototype.createComicCanvas (c);
      mxShape.prototype.createHandJiggle (c);

      mxUtils.extend(TableLineShape, mxShape);
      mxUtils.extend(TableShape, mxSwimlane);    // 表格图形
      mxUtils.extend(TableRowShape, TableShape); // 表格的行
      mxUtils.extend(CubeShape, mxCylinder);
      mxUtils.extend(WireShape, mxConnector);
      mxUtils.extend(WaypointShape, mxCylinder);
      mxUtils.extend(IsoRectangleShape, mxActor);
      mxUtils.extend(IsoCubeShape, mxCylinder);
      mxUtils.extend(DataStoreShape, mxCylinder);
      mxUtils.extend(NoteShape, mxCylinder);
      mxUtils.extend(NoteShape2, NoteShape);
      mxUtils.extend(IsoCubeShape2, mxShape);
      mxUtils.extend(CylinderShape, mxShape);
      mxUtils.extend(CylinderShape3, mxCylinder);
      mxUtils.extend(SwitchShape, mxActor);
      mxUtils.extend(FolderShape, mxCylinder);
      mxUtils.extend(UMLStateShape, mxCylinder);
      mxUtils.extend(CardShape, mxActor);
      mxUtils.extend(TapeShape, mxActor);
      mxUtils.extend(DocumentShape, mxActor);
      mxUtils.extend(ParallelogramShape, mxActor);
      mxUtils.extend(TrapezoidShape, mxActor);
      mxUtils.extend(CurlyBracketShape, mxActor);
      mxUtils.extend(ParallelMarkerShape, mxActor);
      mxUtils.extend(ProcessShape, mxRectangleShape);
      mxUtils.extend(TransparentShape, mxRectangleShape);
      mxUtils.extend(CalloutShape, mxHexagon);
      mxUtils.extend(StepShape, mxActor);
      mxUtils.extend(HexagonShape, mxHexagon);
      mxUtils.extend(PlusShape, mxRectangleShape);
      mxUtils.extend(ExtendedShape, mxRectangleShape);
      mxUtils.extend(MessageShape, mxCylinder);
      mxUtils.extend(UmlActorShape, mxShape);
      mxUtils.extend(UmlBoundaryShape, mxShape);
      mxUtils.extend(UmlEntityShape, mxEllipse);
      mxUtils.extend(UmlDestroyShape, mxShape);
      mxUtils.extend(UmlControlShape, mxShape);
      mxUtils.extend(UmlLifeline, mxRectangleShape);
      mxUtils.extend(UmlFrame, mxShape);
      mxUtils.extend(LollipopShape, mxShape);
      mxUtils.extend(RequiresShape, mxShape);
      mxUtils.extend(RequiredInterfaceShape, mxShape);
      mxUtils.extend(ProvidedRequiredInterfaceShape, mxShape);
      mxUtils.extend(ModuleShape, mxCylinder);
      mxUtils.extend(ComponentShape, mxCylinder);
      mxUtils.extend(AssociativeEntity, mxRectangleShape);
      mxUtils.extend(StateShape, mxDoubleEllipse);
      mxUtils.extend(StartStateShape, StateShape);
      mxUtils.extend(LinkShape, mxArrowConnector);
      mxUtils.extend(FlexArrowShape, mxArrowConnector);
      mxUtils.extend(ManualInputShape, mxActor);
      mxUtils.extend(InternalStorageShape, mxRectangleShape);
      mxUtils.extend(CornerShape, mxActor);
      mxUtils.extend(CrossbarShape, mxActor);
      mxUtils.extend(TeeShape, mxActor);
      mxUtils.extend(SingleArrowShape, mxActor);
      mxUtils.extend(DoubleArrowShape, mxActor);
      mxUtils.extend(DataStorageShape, mxActor);
      mxUtils.extend(OrShape, mxActor);
      mxUtils.extend(XorShape, mxActor);
      mxUtils.extend(LoopLimitShape, mxActor);
      mxUtils.extend(OffPageConnectorShape, mxActor);
      mxUtils.extend(TapeDataShape, mxEllipse);
      mxUtils.extend(OrEllipseShape, mxEllipse);
      mxUtils.extend(SumEllipseShape, mxEllipse);
      mxUtils.extend(SortShape, mxRhombus);
      mxUtils.extend(CollateShape, mxEllipse);
      mxUtils.extend(DimensionShape, mxEllipse);
      mxUtils.extend(PartialRectangleShape, mxEllipse);
      mxUtils.extend(LineEllipseShape, mxEllipse);
      mxUtils.extend(DelayShape, mxActor);
      mxUtils.extend(CrossShape, mxActor);
      mxUtils.extend(DisplayShape, mxActor);
      mxUtils.extend(mxShapeBasicRect2, mxActor);
      mxUtils.extend(FilledEdge, mxConnector);

      mxCellRenderer.registerShape('tableLine', TableLineShape);
      mxCellRenderer.registerShape('table', TableShape);
      mxCellRenderer.registerShape('tableRow', TableRowShape);
      mxCellRenderer.registerShape('cube', CubeShape);
      mxCellRenderer.registerShape('isoRectangle', IsoRectangleShape);
      mxCellRenderer.registerShape('wire', WireShape);
      mxCellRenderer.registerShape('waypoint', WaypointShape);
      mxCellRenderer.registerShape('isoRectangle', IsoRectangleShape);
      mxCellRenderer.registerShape('isoCube', IsoCubeShape);
      mxCellRenderer.registerShape('datastore', DataStoreShape);
      mxCellRenderer.registerShape('note', NoteShape);
      mxCellRenderer.registerShape('note2', NoteShape2);
      mxCellRenderer.registerShape('isoCube2', IsoCubeShape2);
      mxCellRenderer.registerShape('cylinder2', CylinderShape);
      mxCellRenderer.registerShape('cylinder3', CylinderShape3);
      mxCellRenderer.registerShape('switch', SwitchShape);
      mxCellRenderer.registerShape('folder', FolderShape);
      mxCellRenderer.registerShape('umlState', UMLStateShape);
      mxCellRenderer.registerShape('card', CardShape);
      mxCellRenderer.registerShape('tape', TapeShape);
      mxCellRenderer.registerShape('document', DocumentShape);
      mxCellRenderer.registerShape('parallelogram', ParallelogramShape);
      mxCellRenderer.registerShape('trapezoid', TrapezoidShape);
      mxCellRenderer.registerShape('curlyBracket', CurlyBracketShape);
      mxCellRenderer.registerShape('parallelMarker', ParallelMarkerShape);
      mxCellRenderer.registerShape('process', ProcessShape);
      mxCellRenderer.registerShape('process2', ProcessShape);
      mxCellRenderer.registerShape('transparent', TransparentShape);
      mxCellRenderer.registerShape('callout', CalloutShape);
      mxCellRenderer.registerShape('step', StepShape);
      mxCellRenderer.registerShape('hexagon', HexagonShape);
      mxCellRenderer.registerShape('plus', PlusShape);
      mxCellRenderer.registerShape('ext', ExtendedShape);
      mxCellRenderer.registerShape('message', MessageShape);
      mxCellRenderer.registerShape('umlActor', UmlActorShape);
      mxCellRenderer.registerShape('umlBoundary', UmlBoundaryShape);
      mxCellRenderer.registerShape('umlEntity', UmlEntityShape);
      mxCellRenderer.registerShape('umlDestroy', UmlDestroyShape);
      mxCellRenderer.registerShape('umlControl', UmlControlShape);
      mxCellRenderer.registerShape('umlLifeline', UmlLifeline);
      mxCellRenderer.registerShape('umlFrame', UmlFrame);
      mxCellRenderer.registerShape('lollipop', LollipopShape);
      mxCellRenderer.registerShape('requires', RequiresShape);
      mxCellRenderer.registerShape('requiredInterface', RequiredInterfaceShape);
      mxCellRenderer.registerShape('providedRequiredInterface', ProvidedRequiredInterfaceShape);
      mxCellRenderer.registerShape('module', ModuleShape);
      mxCellRenderer.registerShape('component', ComponentShape);
      mxCellRenderer.registerShape('associativeEntity', AssociativeEntity);
      mxCellRenderer.registerShape('endState', StateShape);
      mxCellRenderer.registerShape('startState', StartStateShape);
      mxCellRenderer.registerShape('link', LinkShape);
      mxCellRenderer.registerShape('flexArrow', FlexArrowShape);
      mxCellRenderer.registerShape('manualInput', ManualInputShape);
      mxCellRenderer.registerShape('internalStorage', InternalStorageShape);
      mxCellRenderer.registerShape('corner', CornerShape);
      mxCellRenderer.registerShape('crossbar', CrossbarShape);
      mxCellRenderer.registerShape('tee', TeeShape);
      mxCellRenderer.registerShape('singleArrow', SingleArrowShape);
      mxCellRenderer.registerShape('doubleArrow', DoubleArrowShape);
      mxCellRenderer.registerShape('dataStorage', DataStorageShape);
      mxCellRenderer.registerShape('or', OrShape);
      mxCellRenderer.registerShape('xor', XorShape);
      mxCellRenderer.registerShape('loopLimit', LoopLimitShape);
      mxCellRenderer.registerShape('offPageConnector', OffPageConnectorShape);
      mxCellRenderer.registerShape('tapeData', TapeDataShape);
      mxCellRenderer.registerShape('orEllipse', OrEllipseShape);
      mxCellRenderer.registerShape('sumEllipse', SumEllipseShape);
      mxCellRenderer.registerShape('sortShape', SortShape);
      mxCellRenderer.registerShape('collate', CollateShape);
      mxCellRenderer.registerShape('dimension', DimensionShape);
      mxCellRenderer.registerShape('partialRectangle', PartialRectangleShape);
      mxCellRenderer.registerShape('lineEllipse', LineEllipseShape);
      mxCellRenderer.registerShape('delay', DelayShape);
      mxCellRenderer.registerShape('cross', CrossShape);
      mxCellRenderer.registerShape('display', DisplayShape);
      mxCellRenderer.registerShape(mxShapeBasicRect2.prototype.cst.RECT2, mxShapeBasicRect2);
      mxCellRenderer.registerShape('filledEdge', FilledEdge);

      TableLineShape.prototype.updateBoundsFromLine ();
      TableLineShape.prototype.paintVertexShape (c, x, y, w, h);
      TableLineShape.prototype.paintTableLine (c, line, dx, dy);
      TableLineShape.prototype.intersectsRectangle (rect);

      TableShape.prototype.getLabelBounds (rect);
      TableShape.prototype.paintVertexShape (c, x, y, w, h);
      TableShape.prototype.paintForeground (c, x, y, w, h);
      TableShape.prototype.paintTableForeground (c, x, y, w, h);
      TableShape.prototype.configurePointerEvents (c);

      TableRowShape.prototype.paintForeground ();

      TapeShape.prototype.size = 0.4;
      TapeShape.prototype.redrawPath (c, x, y, w, h);
      TapeShape.prototype.getLabelBounds (rect);
      TapeShape.prototype.constraints = [new mxConnectionConstraint(new mxPoint(0, 0.35), false),;

      TrapezoidShape.prototype.size = 0.2;
      TrapezoidShape.prototype.fixedSize = 20;
      TrapezoidShape.prototype.isRoundable ();
      TrapezoidShape.prototype.redrawPath (c, x, y, w, h);
      TrapezoidShape.prototype.constraints = mxRectangleShape.prototype.constraints;

      TransparentShape.prototype.paintBackground (c, x, y, w, h);
      TransparentShape.prototype.paintForeground (c, x, y, w, h)   { };

      TeeShape.prototype.dx = 20;
      TeeShape.prototype.dy = 20;
      TeeShape.prototype.redrawPath (c, x, y, w, h);
      TeeShape.prototype.getConstraints (style, w, h);

      TapeDataShape.prototype.paintVertexShape (c, x, y, w, h);
      TapeDataShape.prototype.constraints = mxEllipse.prototype.constraints;
      ...

Sidebar.js
----------

   Sidebar.js — mxGraph 侧栏面板 `mxSidebar` 实现，用于展示各种内置图表。

   .. code:: javascript

      function Sidebar(editorUi, container);

      Sidebar.prototype.collapsedImage = (!mxClient.IS_SVG) ? IMAGE_PATH + '/collapsed.gif' : 'data:image/gif;base64,...';
      Sidebar.prototype.expandedImage = (!mxClient.IS_SVG) ? IMAGE_PATH + '/expanded.gif' : 'data:image/gif;base64,...';
      Sidebar.prototype.enableTooltips = true;
      Sidebar.prototype.tooltipBorder = 16;
      Sidebar.prototype.tooltipDelay = 300;
      Sidebar.prototype.dropTargetDelay = 200;
      Sidebar.prototype.gearImage = STENCIL_PATH + '/clipart/Gear_128x128.png';
      Sidebar.prototype.thumbWidth = 42;
      Sidebar.prototype.thumbHeight = 42;
      Sidebar.prototype.minThumbStrokeWidth = 1;
      Sidebar.prototype.thumbAntiAlias = false;
      Sidebar.prototype.thumbPadding = (document.documentMode >= 5) ? 2 : 3;
      Sidebar.prototype.thumbBorder = 2;
      Sidebar.prototype.moreShapesHeight = 52;
      Sidebar.prototype.livePreview = true;
      Sidebar.prototype.searchClosedLibraries = true;
      Sidebar.prototype.closedLibraryOpacity = null;
      Sidebar.prototype.thumbPadding = (document.documentMode >= 5) ? 0 : 1;
      Sidebar.prototype.thumbBorder = 1;
      Sidebar.prototype.thumbWidth = 32;
      Sidebar.prototype.thumbHeight = 30;
      Sidebar.prototype.minThumbStrokeWidth = 1.3;
      Sidebar.prototype.thumbAntiAlias = true;
      Sidebar.prototype.sidebarTitleSize = 8;
      Sidebar.prototype.sidebarTitles = false;
      Sidebar.prototype.tooltipTitles = true;
      Sidebar.prototype.maxTooltipWidth = 400;
      Sidebar.prototype.maxTooltipHeight = 400;
      Sidebar.prototype.addStencilsToIndex = true;
      Sidebar.prototype.defaultImageWidth = 80;
      Sidebar.prototype.defaultImageHeight = 80;
      Sidebar.prototype.tooltipMouseDown = null;
      Sidebar.prototype.expandLibraries = true;
      Sidebar.prototype.init ();
      Sidebar.prototype.refresh ();
      Sidebar.prototype.wasPaletteExpanded (paletteStates, id, defaultExpanded);
      Sidebar.prototype.getEntryContainer ();
      Sidebar.prototype.appendChild (child);
      Sidebar.prototype.getTooltipOffset (elt, bounds);
      Sidebar.prototype.createMoreShapes ();
      Sidebar.prototype.createTooltip (elt, cells, w, h, title, showLabel, off,
                                                                  maxSize, mouseDown, closable, applyAllStyles);
      Sidebar.prototype.showTooltip (elt, cells, w, h, title, showLabel);
      Sidebar.prototype.hideTooltip ();
      Sidebar.prototype.addDataEntry (tags, width, height, title, data);
      Sidebar.prototype.addEntries (images);
      Sidebar.prototype.setCurrentSearchEntryLibrary (id, lib);
      Sidebar.prototype.getKeyStyle (style);
      Sidebar.prototype.addLibForStyle (style, lib);
      Sidebar.prototype.getLibsForStyle (style);
      Sidebar.prototype.addEntry (tags, fn);
      Sidebar.prototype.addEntryForTag (tag, fn);
      Sidebar.prototype.isEntryIgnored (entry, searchClosedLibraries);
      Sidebar.prototype.searchEntries (searchTerms, count, page, success, 
                                                                  error, searchClosedLibraries);
      Sidebar.prototype.filterTags (tags);
      Sidebar.prototype.cloneCell (cell, value);
      Sidebar.prototype.showPopupMenuForEntry (elt, libs, evt);
      Sidebar.prototype.addSearchPalette (expand);
      Sidebar.prototype.insertSearchHint (div, searchTerm, count, page, results, len, more, terms);
      Sidebar.prototype.addGeneralPalette (expand);
      Sidebar.prototype.addMiscPalette (expand);
      Sidebar.prototype.addAdvancedPalette (expand);
      Sidebar.prototype.addBasicPalette (dir);
      Sidebar.prototype.createAdvancedShapes ();
      Sidebar.prototype.addBasicPalette (dir);
      Sidebar.prototype.addUmlPalette (expand);
      Sidebar.prototype.createTitle (label);
      Sidebar.prototype.createThumb (cells, width, height, parent, title, 
                                                                  showLabel, showTitle, w, h, bg, border, scale);
      Sidebar.prototype.createSection (title);
      Sidebar.prototype.createItem (cells, title, showLabel, showTitle, width, height,
                                                                  allowCellsInserted, showTooltip, clickFn, thumbWidth, 
                                                                  thumbHeight, icon, startEditing, sourceCell);
      Sidebar.prototype.createDropHandler (cells, allowSplit, allowCellsInserted, bounds, startEditing, sourceCell);
      Sidebar.prototype.createDragPreview (width, height);
      Sidebar.prototype.dropAndConnect (source, targets, direction, dropCellIndex, evt, firstVertex, freeSourceEdge);
      Sidebar.prototype.getDropAndConnectGeometry (source, target, direction, targets);
      Sidebar.prototype.isDropStyleEnabled (cells, firstVertex);
      Sidebar.prototype.isDropStyleTargetIgnored (state);
      Sidebar.prototype.disablePointerEvents (node);
      Sidebar.prototype.createDragSource (elt, dropHandler, preview, cells, bounds, startEditing);
      Sidebar.prototype.itemClicked (cells, ds, evt, elt);
      Sidebar.prototype.addClickHandler (elt, ds, cells, clickFn);
      Sidebar.prototype.createVertexTemplateEntry (style, width, height, value, title, showLabel, showTitle, tags);
      Sidebar.prototype.createVertexTemplate (style, width, height, value, title, showLabel, showTitle,
                                                                  allowCellsInserted, showTooltip, clickFn, thumbWidth, 
                                                                  thumbHeight, icon, startEditing);
      Sidebar.prototype.createVertexTemplateFromData (data, width, height, title, showLabel,
                                                                  showTitle, allowCellsInserted, showTooltip);
      Sidebar.prototype.createVertexTemplateFromCells (cells, width, height, title, showLabel,
                                                                  showTitle, allowCellsInserted, showTooltip, clickFn, 
                                                                  thumbWidth, thumbHeight, icon, startEditing, sourceCell);
      Sidebar.prototype.createEdgeTemplateEntry (style, width, height, value, title, showLabel,
                                                                  tags, allowCellsInserted, showTooltip);
      Sidebar.prototype.createEdgeTemplate (style, width, height, value, title, showLabel,
                                                                  allowCellsInserted, showTooltip);
      Sidebar.prototype.createEdgeTemplateFromCells (cells, width, height, title, showLabel, allowCellsInserted,
                                                                  showTooltip, showTitle, clickFn, thumbWidth, thumbHeight, icon);
      Sidebar.prototype.addPaletteFunctions (id, title, expanded, fns);
      Sidebar.prototype.addPalette (id, title, expanded, onInit);
      Sidebar.prototype.addFoldingHandler (title, content, funct);
      Sidebar.prototype.setContentVisible (content, visible);
      Sidebar.prototype.removePalette (id);
      Sidebar.prototype.addImagePalette (id, title, prefix, postfix, items, titles, tags);
      Sidebar.prototype.getTagsForStencil (packageName, stencilName, moreTags);
      Sidebar.prototype.addStencilPalette (id, title, stencilFile, style, ignore, onInit, scale, tags, customFns, groupId);
      Sidebar.prototype.destroy ();

Toolbar.js
----------

   Toolbar.js — 工具栏实现，Draw.io 重新实现的一个编辑器工具栏，不依赖 mxGraph `mxToolbar`。

   .. code:: javascript

      function Toolbar(editorUi, container);

      Toolbar.prototype.dropDownImage = (!mxClient.IS_SVG) ? IMAGE_PATH + '/dropdown.gif' : 'data:image/gif;base64,...';
      Toolbar.prototype.selectedBackground = '#d0d0d0';
      Toolbar.prototype.unselectedBackground = 'none';
      Toolbar.prototype.staticElements = null;
      Toolbar.prototype.init ();
      Toolbar.prototype.appendDropDownImageHtml (elt);
      Toolbar.prototype.addTableDropDown ();
      Toolbar.prototype.addDropDownArrow (menu, sprite, width, atlasWidth, left, top, atlasDelta, atlasLeft);
      Toolbar.prototype.setFontName (value);
      Toolbar.prototype.setFontSize (value);
      Toolbar.prototype.createTextToolbar ();
      Toolbar.prototype.hideMenu ();
      Toolbar.prototype.addMenu (label, tooltip, showLabels, name, c, showAll, ignoreState);
      Toolbar.prototype.addMenuFunction (label, tooltip, showLabels, funct, c, showAll);
      Toolbar.prototype.addMenuFunctionInContainer (container, label, tooltip, showLabels, funct, showAll);
      Toolbar.prototype.addSeparator (c);
      Toolbar.prototype.addItems (keys, c, ignoreDisabled);
      Toolbar.prototype.addItem (sprite, key, c, ignoreDisabled);
      Toolbar.prototype.addButton (classname, tooltip, funct, c);
      Toolbar.prototype.initElement (elt, tooltip);
      Toolbar.prototype.addEnabledState (elt);
      Toolbar.prototype.addClickHandler (elt, funct);
      Toolbar.prototype.createButton (classname);
      Toolbar.prototype.createLabel (label, tooltip);
      Toolbar.prototype.addMenuHandler (elt, showLabels, funct, showAll);
      Toolbar.prototype.destroy ();

   .. code:: javascript


      mxToolbar.prototype.constructor = mxToolbar;
      mxToolbar.prototype.container = null;
      mxToolbar.prototype.enabled = true;
      mxToolbar.prototype.noReset = false;
      mxToolbar.prototype.updateDefaultMode = true;
      mxToolbar.prototype.addItem (title, icon, funct, pressedIcon, style, factoryMethod);
      mxToolbar.prototype.addCombo (style);
      mxToolbar.prototype.addActionCombo (title, style);
      mxToolbar.prototype.addOption (combo, title, value);
      mxToolbar.prototype.addSwitchMode (title, icon, funct, pressedIcon, style);
      mxToolbar.prototype.addMode (title, icon, funct, pressedIcon, style, toggle);
      mxToolbar.prototype.selectMode (domNode, funct);
      mxToolbar.prototype.resetMode (forced);
      mxToolbar.prototype.addSeparator (icon);
      mxToolbar.prototype.addBreak ();
      mxToolbar.prototype.addLine ();
      mxToolbar.prototype.destroy ();


Draw.io diagramly 编辑器扩展脚本
======================================================


App.js
---------

   App.js — Draw.io 编辑器应用入口类，继承自 UI 核心 `EditorUi`。

   .. code:: javascript

      App (editor, container, lightbox);

      //Extends EditorUi
      mxUtils.extend(App, EditorUi);

      App.embedModePluginsCount = 0;
      App.ERROR_TIMEOUT = 'timeout';
      App.ERROR_BUSY = 'busy';
      App.ERROR_UNKNOWN = 'unknown';
      App.MODE_GOOGLE = 'google';
      App.MODE_DROPBOX = 'dropbox';
      App.MODE_ONEDRIVE = 'onedrive';
      App.MODE_GITHUB = 'github';
      App.MODE_GITLAB = 'gitlab';
      App.MODE_DEVICE = 'device';
      App.MODE_BROWSER = 'browser';
      App.MODE_TRELLO = 'trello';
      App.MODE_EMBED = 'embed';
      App.MODE_ATLAS = 'atlas';
      App.DROPBOX_APPKEY = window.DRAWIO_DROPBOX_ID;
      App.DROPBOX_URL = 'js/dropbox/Dropbox-sdk.min.js';
      App.DROPINS_URL = 'https://www.dropbox.com/static/api/2/dropins.js';
      App.ONEDRIVE_URL = mxClient.IS_IE11? 'https://js.live.net/v7.2/OneDrive.js' : 'js/onedrive/OneDrive.js';
      App.TRELLO_URL = 'https://api.trello.com/1/client.js';
      App.TRELLO_JQUERY_URL = 'js/jquery/jquery-3.6.0.min.js';
      App.PUSHER_KEY = '1e756b07a690c5bdb054';
      App.PUSHER_CLUSTER = 'eu';
      App.PUSHER_URL = 'https://js.pusher.com/7.0.3/pusher.min.js';
      App.SIMPLE_PEER_URL = 'js/simplepeer/simplepeer9.10.0.min.js';
      App.GOOGLE_APIS = 'drive-share'; 
      App.startTime = new Date();
      App.pluginRegistry = {'ex': 'plugins/explore.js',..}
      App.publicPlugin = [ 'ex', 'tips', 'svgdata', 'number', 'sql', ..]
      App.loadScripts (scripts, onload, onerror);

      // Stored mode: App.MODE_GOOGLE App.MODE_DROPBOX App.MODE_ONEDRIVE App.MODE_TRELLO
      App.getStoredMode ();
      App.mode = urlParams['mode'];
      App.clearServiceWorker (success, error);
      App.isSameDomain (link);
      App.isBuiltInPlugin (path);
      App.main (callback, createUi);
      App.initPluginCallback ();
      App.loadPlugins (plugins, useInclude);
      App.blockedAncestorFrames ();
      App.isMainCalled = true;
      App.DrawPlugins = [];
      App.pluginsLoaded = {};
      App.embedModePluginsCount = 0;
      App.prototype.defaultUserPicture = IMAGE_PATH + '/default-user.jpg';
      App.prototype.shareImage = 'data:image/png;base64,...';
      App.prototype.chevronUpImage = 'data:image/png;base64,...';
      App.prototype.chevronDownImage = 'data:image/png;base64,...';
      App.prototype.formatShowImage = 'data:image/png;base64,...';
      App.prototype.formatHideImage = 'data:image/png;base64,...';
      App.prototype.warnInterval = 300000;
      App.prototype.compactMode = false;
      App.prototype.fullscreenMode = false;
      App.prototype.menubarHeight = 64;
      App.prototype.footerHeight = 0;
      App.prototype.initializeEmbedMode ();
      App.prototype.initializeViewerMode ();
      App.prototype.init ();
      App.prototype.scheduleSanityCheck ();
      App.prototype.stopSanityCheck ();
      App.prototype.sanityCheck ();
      App.prototype.isOwnDomain ();
      App.prototype.isDriveDomain ();
      App.prototype.getPusher ();
      App.prototype.showNameConfBanner ();
      App.prototype.showDownloadDesktopBanner ();
      App.prototype.showRatingBanner ();
      App.prototype.checkLicense ();
      App.prototype.handleLicense (lic, domain);
      App.prototype.getEditBlankXml ();
      App.prototype.updateActionStates ();
      App.prototype.addRecent (entry, type, max);
      App.prototype.getRecent (type);
      App.prototype.resetRecent (type);
      App.prototype.onBeforeUnload ();
      App.prototype.updateDocumentTitle ();
      App.prototype.getThumbnail (width, fn, border);
      App.prototype.createBackground ();
      App.prototype.setMode (mode, remember);
      App.prototype.appIconClicked (evt);
      App.prototype.clearMode ();
      App.prototype.open ();
      App.prototype.loadGapi (then);
      App.prototype.load ();
      App.prototype.showRefreshDialog (title, message);
      App.prototype.showAlert (message);
      App.prototype.start ();
      App.prototype.loadDraft (xml, success);
      App.prototype.filterDrafts (filePath, guid, callback);
      App.prototype.checkDrafts ();
      App.prototype.showSplash (force);
      App.prototype.addLanguageMenu (elt, addLabel, right);
      App.prototype.loadFileSystemEntry (fileHandle, success, error);
      App.prototype.createFileSystemOptions (name);
      App.prototype.showSaveFilePicker (success, error, opts);
      App.prototype.pickFile (mode);
      App.prototype.pickLibrary (mode);
      App.prototype.saveLibrary (name, images, file, mode, noSpin, noReload, fn);
      App.prototype.saveFile (forceDialog, success);
      App.prototype.loadTemplate (url, onload, onerror, templateFilename, asLibrary);
      App.prototype.getModeForChar (char);
      App.prototype.isModeEnabled (mode);
      App.prototype.isModeReady (mode);
      App.prototype.uncompressPages (data);
      App.prototype.createFile (title, data, libs, mode, done, replace, folderId, tempFile, clibs, success);
      App.prototype.fileCreated (file, libs, replace, done, clibs, success);
      App.prototype.loadFile (id, sameWindow, file, success, force);
      App.prototype.getLibraryStorageHint (file);
      App.prototype.restoreLibraries ();
      App.prototype.loadLibraries (libs, done);
      App.prototype.updateButtonContainer ();
      App.prototype.fetchAndShowNotification (target, subtarget);
      App.prototype.showNotification (notifs, lsReadFlag);
      App.prototype.save (name, done);
      App.prototype.getExtensionForService (name);
      App.prototype.getServiceForName (name);
      App.prototype.getTitleForService (name);
      App.prototype.pickFolder (mode, fn, enabled, direct, force, returnPickerValue);
      App.prototype.exportFile (data, filename, mimeType, base64Encoded, mode, folderId);
      App.prototype.descriptorChanged ();
      App.prototype.showAuthDialog (peer, showRememberOption, fn, closeFn);
      App.prototype.convertFile (url, filename, mimeType, extension, success, error, executeRequest, headers);
      App.prototype.updateHeader ();
      App.prototype.toggleCompactMode (visible);
      App.prototype.getMainUser ();
      App.prototype.updateUserElement ();
      App.prototype.updateUserElementStyle ();
      App.prototype.updateUserElementIcon ();
      App.prototype.hideUserPanel ();
      App.prototype.toggleUserPanel ();
      App.prototype.createUserElement ();
      App.prototype.getCurrentUser ()

      // diagramly\ElectronApp.js
      App.mode = App.MODE_DEVICE;
      App.prototype.isExternalDataComms ()
      App.main = async function()
      App.prototype.load ()
      App.prototype.loadArgs (argsObj)
      App.prototype.pickFile ()
      App.prototype.pickLibrary (mode)
      App.prototype.chooseFileEntry = async function(fn)
      App.prototype.readGraphFile (fn, fnErr, path, noDraftCheck)
      App.prototype.createFileSystemFilters (defaultExt)
      App.prototype.saveFile (forceDialog)
      App.prototype.saveLibrary (name, images, file, mode, noSpin, noReload, fn)
      App.prototype.checkForUpdates ()
      App.prototype.toggleSpellCheck ()
      App.prototype.toggleStoreBkp ()
      App.prototype.toggleGoogleFonts ()
      App.prototype.openDevTools ()
      App.prototype.desktopZoomIn ()
      App.prototype.desktopZoomOut ()
      App.prototype.desktopResetZoom ()

Editor.js
---------

   Editor.js — 对核心 `Editor` 类型方法、属性的重写。

   .. code:: javascript

      Editor.prototype.fontCss = fontCss;
      Editor.prototype.appName = 'draw.io';
      Editor.prototype.diagramFileTypes = [{description: 'diagramXmlDesc', extension: 'drawio', mimeType: 'text/xml'}, ...]
      Editor.prototype.libraryFileTypes = [{description: 'Library (.drawiolib, .xml)', extensions: ['drawiolib', 'xml']}];
      Editor.prototype.fileExtensions = [{ext: 'html', title: 'filetypeHtml'},...]
      Editor.prototype.timeout = 25000;
      Editor.prototype.editButtonLink = (urlParams['edit'] != null) ? decodeURIComponent(urlParams['edit']) : null;
      Editor.prototype.crossOriginImages = !mxClient.IS_IE;
      Editor.prototype.setGraphXml             = function(node){};
      Editor.prototype.getGraphXml             = function(ignoreSelection, resolveReferences);
      Editor.prototype.isDataSvg               = function(svg);
      Editor.prototype.extractGraphModel       = function(node, allowMxFile, checked);
      Editor.prototype.resetGraph              = function();
      Editor.prototype.updateGraphComponents   = function();
      Editor.prototype.init                    = function();
      Editor.prototype.csvToArray              = function(text);
      Editor.prototype.getProxiedUrl           = function(url);
      Editor.prototype.isCorsEnabledForUrl     = function(url);
      Editor.prototype.createImageUrlConverter = function();
      Editor.prototype.convertImageToDataUri   = function(url, callback, error, convertScale, forceConvert);
      Editor.prototype.convertImages           = function(svgRoot, callback, imageCache, converter);
      Editor.prototype.loadUrl                 = function(url, success, error, forceBinary, retry, dataUriPrefix, noBinary, headers);
      Editor.prototype.getErrorMessage         = function(req);
      Editor.prototype.absoluteCssFonts        = function(fontCss);
      Editor.prototype.mapFontUrl              = function(mime, url, fn);
      Editor.prototype.embedCssFonts           = function(fontCss, then);
      Editor.prototype.loadFonts               = function(then);
      Editor.prototype.createGoogleFontCache   = function();
      Editor.prototype.embedExtFonts           = function(callback);
      Editor.prototype.addMathCss              = function(svgRoot);
      Editor.prototype.addFontCss              = function(svgRoot, fontCss);
      Editor.prototype.isExportToCanvas        = function();
      Editor.prototype.getMaxCanvasScale       = function(w, h, scale);
      Editor.prototype.exportToCanvas          = function(callback, width, imageCache, background, error, limitHeight,
                                                         ignoreSelection, scale, transparentBackground, addShadow, 
                                                         converter, graph, border, noCrop, grid,
                                                         theme, exportType, cells);
      Editor.prototype.useCanvasForExport = false;


EditorUi.js
-----------

   EditorUi.js — 扩展 `EditorUi` 核心类，为编辑器提供各种 UI 功能支持，比如各种文件格式导出。
   另外还派生了一个子类形 `HeadlessEditorUi`，按其名称所示，应该是一个无需 UI 界面的工作模式。
   如其注解内容所描述，这是一个离屏状态下运行的类型，不能参与用户交互事件的处理。此类形会在 export.js
   脚本中用到。

   .. code:: javascript

      /**
      * Headless Editor UI class for offscreen editor instances.
      */
      var HeadlessEditorUi = function()
      {
         EditorUi.call(this, new Editor(true), document.createElement('div'), true);
      };

      /**
       * Extends EditorUi.
       */
      mxUtils.extend(HeadlessEditorUi, EditorUi);

      HeadlessEditorUi.prototype.createUi ();
      HeadlessEditorUi.prototype.addTrees ();
      HeadlessEditorUi.prototype.onBeforeUnload ();
      HeadlessEditorUi.prototype.updateActionStates ();

   .. code:: javascript

      EditorUi.VERSION = '@DRAWIO-VERSION@';
      EditorUi.compactUi = Editor.currentTheme != 'atlas' || window.DRAWIO_PUBLIC_BUILD;
      EditorUi.enableLogging = urlParams['stealth'] != '1' && urlParams['lockdown'] != '1' &&
      EditorUi.drawHost = window.DRAWIO_BASE_URL;
      EditorUi.lightboxHost = window.DRAWIO_LIGHTBOX_URL;
      EditorUi.ignoredAnonymizedChars = '\n\t`~!@#$%^&*()_+{}|:"<>?-=[]\;\'.\/,\n\t';
      EditorUi.templateFile = TEMPLATE_PATH + '/index.xml';
      EditorUi.cacheUrl = window.REALTIME_URL;
      EditorUi.enablePlantUml = EditorUi.enableLogging;
      EditorUi.isElectronApp = window != null && window.process != null &&
      EditorUi.nativeFileSupport = !mxClient.IS_OP && !EditorUi.isElectronApp &&
      EditorUi.enableDrafts = !mxClient.IS_CHROMEAPP &&
      EditorUi.scratchpadHelpLink = 'https://www.drawio.com/doc/faq/scratchpad';
      EditorUi.enableHtmlEditOption = true;
      EditorUi.mermaidDiagramTypes = ['flowchart', 'classDiagram', 'sequenceDiagram',
      EditorUi.defaultMermaidConfig = { theme:'neutral', ... }
      EditorUi.lastErrorMessage = message;

      EditorUi.logError (message, url, linenumber, colno, err, severity, quiet)
      EditorUi.logEvent (data)
      EditorUi.sendReport (data, maxLength)
      EditorUi.debug ()
      EditorUi.removeChildNodes (node)
      EditorUi.embedSvgImages (root)
      EditorUi.replaceSvgImage (node)
      EditorUi.getSvgSubtree (href)
      EditorUi.isVisioFilename (filename)
      EditorUi.setGraphDarkMode (graph, container, darkMode)
      EditorUi.initTheme ()

      EditorUi.prototype.emptyDiagramXml = '<mxGraphModel><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel>';
      EditorUi.prototype.emptyLibraryXml = '<mxlibrary>[]</mxlibrary>';
      EditorUi.prototype.mode = null;
      EditorUi.prototype.timeout = Editor.prototype.timeout;
      EditorUi.prototype.defaultCustomShapeStyle = 'shape=stencil(...);whiteSpace=wrap;html=1;';
      EditorUi.prototype.maxBackgroundSize = 1600;
      EditorUi.prototype.maxImageSize = 1200;
      EditorUi.prototype.maxTextWidth = 520;
      EditorUi.prototype.resampleThreshold = 100000;
      EditorUi.prototype.maxImageBytes = 2000000;
      EditorUi.prototype.maxBackgroundBytes = 2500000;
      EditorUi.prototype.maxTextBytes = 500000;
      EditorUi.prototype.currentFile = null;
      EditorUi.prototype.printPdfExport = false;
      EditorUi.prototype.pdfPageExport = true;
      EditorUi.prototype.formatEnabled = urlParams['format'] != '0';
      EditorUi.prototype.insertTemplateEnabled = true;
      EditorUi.prototype.closableScratchpad = true;
      EditorUi.prototype.embedExportBorder = 8;
      EditorUi.prototype.embedExportBackground = null;
      EditorUi.prototype.shareCursorPosition = true;
      EditorUi.prototype.showRemoteCursors = true;
      EditorUi.prototype.useCanvasForExport = false;
      EditorUi.prototype.canvasSupported = !!(cnv.getContext && cnv.getContext('2d'));
      EditorUi.prototype.jpgSupported = (uri.match('image/jpeg') !== null);
      EditorUi.prototype.webpSupported = (uri.match('image/webp') !== null);
      EditorUi.prototype.footerHeight = 0;
      EditorUi.prototype.menubarHeight = 41;
      EditorUi.prototype.toolbarHeight = 38;
      EditorUi.prototype.remoteInvokableFns = {getDiagramTextContent: {isAsync: false},...}
      EditorUi.prototype.remoteInvokeCallbacks = [];
      EditorUi.prototype.remoteInvokeQueue = [];
      EditorUi.migrateStorageFiles = isLocalStorage;

      EditorUi.prototype.createButtonContainer ();
      EditorUi.prototype.openLink (url, target, allowOpener);
      EditorUi.prototype.showSplash (force) { };
      EditorUi.prototype.getLocalData (key, fn);
      EditorUi.prototype.setLocalData (key, data, fn);
      EditorUi.prototype.isLocked ();
      EditorUi.prototype.removeLocalData (key, fn);
      EditorUi.prototype.setShareCursorPosition (value);
      EditorUi.prototype.isShareCursorPosition ();
      EditorUi.prototype.setShowRemoteCursors (value);
      EditorUi.prototype.isShowRemoteCursors ();
      EditorUi.prototype.setMathEnabled (value);
      EditorUi.prototype.isMathEnabled (value);
      EditorUi.prototype.isStandaloneApp ();
      EditorUi.prototype.isOfflineApp ();
      EditorUi.prototype.isOffline (ignoreStealth);
      EditorUi.prototype.isExternalDataComms ();
      EditorUi.prototype.createSpinner (x, y, size);
      EditorUi.prototype.isCompatibleString (data);
      EditorUi.prototype.isVisioData (data);
      EditorUi.prototype.isRemoteVisioData (data);
      EditorUi.prototype.createKeyHandler (editor);
      EditorUi.prototype.extractGraphModelFromHtml (data);
      EditorUi.prototype.validateFileData (data);
      EditorUi.prototype.replaceFileData (data, patches);
      EditorUi.prototype.createFileData (node, graph, file, url, forceXml, forceSvg, forceHtml, embeddedCallback, ignoreSelection, compact, uncompressed, scale, border);
      EditorUi.prototype.getXmlFileData (ignoreSelection, currentPage, uncompressed, resolveReferences);
      EditorUi.prototype.anonymizeString (text, zeros);
      EditorUi.prototype.anonymizePatch (patch);
      EditorUi.prototype.anonymizeAttributes (node, zeros);
      EditorUi.prototype.anonymizeNode (node, zeros);
      EditorUi.prototype.synchronizeCurrentFile (forceReload);
      EditorUi.prototype.getFileData (forceXml, forceSvg, forceHtml, embeddedCallback, ignoreSelection, currentPage, node, compact, file, uncompressed, resolveReferences, scale, border);
      EditorUi.prototype.getHtml (node, graph, title, editLink, redirect, ignoreSelection);
      EditorUi.prototype.getHtml2 (xml, graph, title, editLink, redirect);
      EditorUi.prototype.setFileData (data);
      EditorUi.prototype.getBaseFilename (ignorePageName);
      EditorUi.prototype.downloadFile (format, uncompressed, addShadow, ignoreSelection, currentPage, pageVisible, transparent, scale, border, grid, includeXml, pageRange, margin, fit, sheetsAcross, sheetsDown);
      EditorUi.prototype.createDownloadRequest (filename, format, ignoreSelection, base64, currentPage, pageVisible, transparent, scale, border, grid, includeXml, pageRange, margin, fit, sheetsAcross, sheetsDown)   
      EditorUi.prototype.downloadRequestBuilder (filename, format, ignoreSelection, base64, transparent, currentPage, scale, border, grid, includeXml, pageRange, w, h, crop, margin, fit, sheetsAcross, sheetsDown)   
      EditorUi.prototype.setMode (mode, remember);
      EditorUi.prototype.getDiagramId ();
      EditorUi.prototype.getHashObject ();
      EditorUi.prototype.updateHashObject ();
      EditorUi.prototype.setHashObject (obj);
      EditorUi.prototype.loadDescriptor (desc, success, error);
      EditorUi.prototype.updateDiagram (xml);
      EditorUi.prototype.getCopyFilename (file, timestamp);
      EditorUi.prototype.logIfModified (file, discarded);
      EditorUi.prototype.fileLoaded (file, noDialogs, success);
      EditorUi.prototype.getHashValueForPages (pages, details);
      EditorUi.prototype.hashValue (obj, replacer, details);
      EditorUi.prototype.descriptorChanged ();
      EditorUi.prototype.restoreLibraries () { };
      EditorUi.prototype.saveLibrary (name, images, file, mode, noSpin, noReload, fn) { };
      EditorUi.prototype.isScratchpadEnabled ();
      EditorUi.prototype.toggleScratchpad ();
      EditorUi.prototype.createLibraryDataFromImages (images);
      EditorUi.prototype.closeLibrary (file);
      EditorUi.prototype.removeLibrarySidebar (id);
      EditorUi.prototype.repositionLibrary (nextChild, append);
      EditorUi.prototype.loadLibrary (file, expand);
      EditorUi.prototype.getLibraryStorageHint (file);
      EditorUi.prototype.showSidebar ();
      EditorUi.prototype.libraryLoaded (file, images, optionalTitle, expand);
      EditorUi.prototype.addLibraryEntries (imgs, content);
      EditorUi.prototype.getResource (obj);
      EditorUi.prototype.showImageDialog (title, value, fn, ignoreExisting, convertDataUri, withCrop, initClipPath);
      EditorUi.prototype.showLocalStorageDialog (title, key, buttons, elt, helpLink, applyFn);
      EditorUi.prototype.showBackgroundImageDialog (apply, img, color, showColor);
      EditorUi.prototype.showLibraryDialog (name, sidebar, images, file, mode);
      EditorUi.prototype.createFormat (container);
      EditorUi.prototype.handleError (resp, title, fn, invokeFnOnClose, notFoundMessage, fileHash, disableLogging);
      EditorUi.prototype.alert (msg, fn, optionalWidth);
      EditorUi.prototype.confirm (msg, okFn, cancelFn, okLabel, cancelLabel, closable);
      EditorUi.prototype.showBanner (id, text, onclick, doNotShowAgainOnClose, small, positionCss, t1, t2, to);
      EditorUi.prototype.setCurrentFile (file);
      EditorUi.prototype.getCurrentFile ();
      EditorUi.prototype.isExportToCanvas ();
      EditorUi.prototype.createImageDataUri (canvas, xml, format, dpi);
      EditorUi.prototype.saveCanvas (canvas, xml, format, ignorePageName, dpi);
      EditorUi.prototype.isLocalFileSave ();
      EditorUi.prototype.showTextDialog (title, text);
      EditorUi.prototype.doSaveLocalFile (data, filename, mimeType, base64Encoded, format, defaultExtension);
      EditorUi.prototype.createEchoRequest (data, filename, mimeType, base64Encoded, format, base64Response);
      EditorUi.prototype.saveLocalFile (data, filename, mimeType, base64Encoded, format, allowBrowser, allowTab, defaultExtension);
      EditorUi.prototype.openInNewWindow (data, mimeType, base64Encoded);
      EditorUi.prototype.isChromelessImageExportEnabled ();
      EditorUi.prototype.addChromelessToolbarItems (addButton);
      EditorUi.prototype.saveData (filename, format, data, mime, base64Encoded);
      EditorUi.prototype.saveRequest (filename, format, fn, data, base64Encoded, mimeType, allowTab);
      EditorUi.prototype.isServices (count);
      EditorUi.prototype.getEditBlankXml ();
      EditorUi.prototype.exportFile (data, filename, mimeType, base64Encoded, mode, folderId);
      EditorUi.prototype.getServiceForName (name);
      EditorUi.prototype.getTitleForService (name);
      EditorUi.prototype.pickFolder (mode, fn, enabled);
      EditorUi.prototype.exportSvg (scale, transparentBackground, ignoreSelection, addShadow, editable, embedImages, border, noCrop, currentPage, linkTarget, theme, exportType, embedFonts, saveFn);
      EditorUi.prototype.replaceAlternateContent (root, theme, callback);
      EditorUi.prototype.addRadiobox (div, radioGroupName, label, checked, disabled, disableNewline, visible);
      EditorUi.prototype.addCheckbox (div, label, checked, disabled, disableNewline, visible, asRadio, radioGroupName);
      EditorUi.prototype.addEditButton (div, lightbox);
      EditorUi.prototype.addLinkSection (div, showFrameOption);
      EditorUi.prototype.createUrlParameters (linkTarget, linkColor, lightbox, editLink, layers, params);
      EditorUi.prototype.createLink (linkTarget, linkColor, allPages, lightbox, editLink, layers, url, ignoreFile, params, useOpenParameter, currentPage);
      EditorUi.prototype.createHtml (publicUrl, zoomEnabled, initialZoom, linkTarget, linkColor, fit, allPages, layers, tags, lightbox, editLink, fn);
      EditorUi.prototype.showHtmlDialog (btnLabel, helpLink, publicUrl, fn);
      EditorUi.prototype.showRemoteExportDialog (btnLabel, helpLink, callback, hideInclude, showZoomBorder);
      EditorUi.prototype.showPublishLinkDialog (title, width, height, showFrameOption, helpLink, footer, publicUrl, file, fn);
      EditorUi.prototype.showExportDialog (title, embedOption, btnLabel, helpLink, callback, cropOption, defaultInclude, format, exportOption);
      EditorUi.prototype.showEmbedImageDialog (fn, title, imageLabel, shadowEnabled, helpLink);
      EditorUi.prototype.createEmbedImage (fit, shadow, retina, lightbox, edit, layers, fn, err);
      EditorUi.prototype.createEmbedSvg (fit, shadow, image, lightbox, edit, layers, fn);
      EditorUi.prototype.timeSince (date);
      EditorUi.prototype.decodeNodeIntoGraph (node, graph);
      EditorUi.prototype.getSvgFileProperties (node);
      EditorUi.prototype.getPngFileProperties (node);
      EditorUi.prototype.getEmbeddedPng (success, error, optionalData, scale, border);
      EditorUi.prototype.getEmbeddedSvg (xml, graph, url, noHeader, callback, ignoreSelection, redirect, embedImages, background, scale, border, shadow, theme);
      EditorUi.prototype.embedFonts (svgRoot, callback);
      EditorUi.prototype.exportImage (scale, transparentBackground, ignoreSelection, addShadow, editable, border, noCrop, currentPage, format, grid, dpi, theme, exportType);
      EditorUi.prototype.isCorsEnabledForUrl (url);
      EditorUi.prototype.addLocalPagesToMapping (mapping);
      EditorUi.prototype.importXml (xml, dx, dy, crop, noErrorHandling, addNewPage, applyDefaultStyles);
      EditorUi.prototype.updatePageLinks (mapping, pages);
      EditorUi.prototype.updateBackgroundPageLink (mapping, obj);
      EditorUi.prototype.updatePageLinksForCell (mapping, cell);
      EditorUi.prototype.updatePageLink (mapping, href);
      EditorUi.prototype.isRemoteVisioFormat (filename);
      EditorUi.prototype.importVisio (file, done, error, filename, customParam);
      EditorUi.prototype.importGraphML (xmlData, done, error);
      EditorUi.prototype.exportVisio (currentPage);
      EditorUi.prototype.convertLucidChart (data, success, error);
      EditorUi.prototype.createMermaidXml (input, config, data, w, h, prompt);
      EditorUi.prototype.generateOpenAiMermaidDiagram (prompt, success, error);
      EditorUi.prototype.extractMermaidDeclaration (value);
      EditorUi.prototype.generateMermaidImage (data, config, success, error, parseErrorHandler);
      EditorUi.prototype.generatePlantUmlImage (data, type, success, error);
      EditorUi.prototype.insertAsPreText (text, x, y);
      EditorUi.prototype.insertTextAt (text, dx, dy, html, asImage, crop, resizeImages, addNewPage);
      EditorUi.prototype.formatFileSize (size);
      EditorUi.prototype.convertDataUri (uri);
      EditorUi.prototype.isRemoteFileFormat (data, filename);
      EditorUi.prototype.isLucidChartData (data);
      EditorUi.prototype.importLocalFile (device, noSplash);
      EditorUi.prototype.importZipFile (file, success, onerror);
      EditorUi.prototype.importFile (data, mimeType, dx, dy, w, h, filename, done, file, crop, ignoreEmbeddedXml, evt);
      EditorUi.prototype.importFiles (files, x, y, maxSize, fn, resultFn, filterFn, barrierFn, resizeDialog, maxBytes, resampleThreshold, ignoreEmbeddedXml, evt);
      EditorUi.prototype.isBlankFile ();
      EditorUi.prototype.confirmImageResize (fn, force);
      EditorUi.prototype.parseFile (file, fn, filename);
      EditorUi.prototype.parseFileData (data, fn, filename);
      EditorUi.prototype.isResampleImageSize (size, thresh);
      EditorUi.prototype.resizeImage (img, data, fn, enabled, maxSize, thresh, fileSize);
      EditorUi.prototype.extractGraphModelFromPng (data);
      EditorUi.prototype.loadImage (uri, onload, onerror);
      EditorUi.prototype.getDefaultSketchMode ();
      EditorUi.prototype.createUi ();
      EditorUi.prototype.init ();
      EditorUi.prototype.windowResized ();
      EditorUi.prototype.initializeInlineEmbedMode ();
      EditorUi.prototype.installImagePasteHandler ();
      EditorUi.prototype.installNativeClipboardHandler ();
      EditorUi.prototype.setCurrentTheme (value, noRestart);
      EditorUi.prototype.isDefaultTheme (theme);
      EditorUi.prototype.doSetCurrentTheme (value, delay, post);
      EditorUi.prototype.saveScrollState ();
      EditorUi.prototype.restoreScrollState (state);
      EditorUi.prototype.installStatusMinimizer (parent);
      EditorUi.prototype.switchTheme (value);
      EditorUi.prototype.getWindows ();
      EditorUi.prototype.fitWindows ();
      EditorUi.prototype.hideWindows ();
      EditorUi.prototype.destroyWindows ();
      EditorUi.prototype.switchThemeConstants (value);
      EditorUi.prototype.switchCssForTheme (value);
      EditorUi.prototype.createWrapperForTheme (value);
      EditorUi.prototype.createMainMenuForTheme (value);
      EditorUi.prototype.isPageMenuVisible ();
      EditorUi.prototype.createFooterMenuForTheme (value);
      EditorUi.prototype.createPickerMenuForTheme (value);
      EditorUi.prototype.getNetworkStatus ();
      EditorUi.prototype.createMenubarForTheme (value);
      EditorUi.prototype.createMenu (key, img, className, clickFn);
      EditorUi.prototype.createToolbarButton (img, title, fn, size);
      EditorUi.prototype.createMenuItem (key, img, ignoreState);
      EditorUi.prototype.createFormatWindow ();
      EditorUi.prototype.toggleFormatPanel (visible);
      EditorUi.prototype.toggleShapesPanel (visible);
      EditorUi.prototype.isShapesPanelVisible ();
      EditorUi.prototype.isFormatPanelVisible ();
      EditorUi.prototype.refresh (sizeDidChange);
      EditorUi.prototype.createShapesPanel (container);
      EditorUi.prototype.createShapesWindow ();
      EditorUi.prototype.setSketchMode (value);
      EditorUi.prototype.setAndPersistDarkMode (value);
      EditorUi.prototype.setAndPersistLanguage (value);
      EditorUi.prototype.setAndPersistHighContrast (value);
      EditorUi.prototype.isHighContrast ();
      EditorUi.prototype.setHighContrast (value);
      EditorUi.prototype.isRulerVisible ();
      EditorUi.prototype.setRulerVisible (visible);
      EditorUi.prototype.isAutoDarkModeSupported ();
      EditorUi.prototype.isAutoDarkMode (ignoreUrl);
      EditorUi.prototype.setCssDarkModeEnabled (value);
      EditorUi.prototype.setDarkMode (value);
      EditorUi.prototype.createDarkStyle ();
      EditorUi.prototype.setCssDarkMode (value);
      EditorUi.prototype.doSetDarkMode (value, success, error);
      EditorUi.prototype.setPagesVisible (value);
      EditorUi.prototype.setSidebarTitles (value, remember);
      EditorUi.prototype.setInlineFullscreen (value);
      EditorUi.prototype.inlineSizeChanged ();
      EditorUi.prototype.doSetSketchMode (value);
      EditorUi.prototype.updateDefaultStyles ();
      EditorUi.prototype.getLinkTitle (href);
      EditorUi.prototype.getCustomLinkTitle (href);
      EditorUi.prototype.handleCustomLink (href, cell);
      EditorUi.prototype.installSettings ();
      EditorUi.prototype.copyImage (cells, xml, scale);
      EditorUi.prototype.copyCells (elt, removeCells);
      EditorUi.prototype.copyXml ();
      EditorUi.prototype.pasteXml (xml, pasteAsLabel, compat, evt, html);
      EditorUi.prototype.pasteCells (evt, realElt, useEvent, pasteAsLabel);
      EditorUi.prototype.showPrintDialog (title, fn);
      EditorUi.prototype.print (preview, args);
      EditorUi.prototype.addFileDropHandler (elts);
      EditorUi.prototype.highlightElement (elt);
      EditorUi.prototype.stringToCells (xml);
      EditorUi.prototype.openFileHandle (data, name, file, temp, fileHandle, editable);
      EditorUi.prototype.openFiles (files, temp);
      EditorUi.prototype.openLocalFile (data, name, temp, fileHandle, desc, editable);
      EditorUi.prototype.getBasenames ();
      EditorUi.prototype.addBasenamesForCell (cell, basenames);
      EditorUi.prototype.setGraphEnabled (enabled);
      EditorUi.prototype.initializeEmbedMode ();
      EditorUi.prototype.showLayersDialog ();
      EditorUi.prototype.getPublicUrl (file, fn);
      EditorUi.prototype.createLoadMessage (eventName);
      EditorUi.prototype.sendEmbeddedSvgExport (noExit);
      EditorUi.prototype.installMessageHandler (fn);
      EditorUi.prototype.createEmbedButton (title, fn, shortcut, primary);
      EditorUi.prototype.addEmbedButtons ();
      EditorUi.prototype.showImportCsvDialog ();
      EditorUi.prototype.showCustomLayoutDialog (value);
      EditorUi.prototype.loadOrgChartLayouts (fn);
      EditorUi.prototype.importCsv (text, done);
      EditorUi.prototype.doImportCsv (text, done);
      EditorUi.prototype.getSearch (exclude);
      EditorUi.prototype.getUrl (pathname);
      EditorUi.prototype.showLinkDialog (value, btnLabel, fn, showNewWindowOption, linkTarget);
      EditorUi.prototype.getServiceCount (allowBrowser);
      EditorUi.prototype.updateUi ();
      EditorUi.prototype.updateButtonContainer ();
      EditorUi.prototype.updateUserElement ();
      EditorUi.prototype.scheduleSanityCheck ();
      EditorUi.prototype.stopSanityCheck ();
      EditorUi.prototype.isDiagramActive ();
      EditorUi.prototype.createSidebar (container);
      EditorUi.prototype.restoreOpenLibraries ();
      EditorUi.prototype.updateActionStates ();
      EditorUi.prototype.destroy ();
      EditorUi.prototype.getDiagramTextContent ();
      EditorUi.prototype.showRemotelyStoredLibrary (title);
      EditorUi.prototype.handleRemoteInvokeReady (remoteWin);
      EditorUi.prototype.handleRemoteInvokeResponse (msg);
      EditorUi.prototype.remoteInvoke (remoteFn, remoteFnArgs, msgMarkers, callback, error);
      EditorUi.prototype.handleRemoteInvoke (msg, origin);
      EditorUi.prototype.openDatabase (success, error);
      EditorUi.prototype.setDatabaseItem (key, data, success, error, storeName);
      EditorUi.prototype.removeDatabaseItem (key, success, error, storeName);
      EditorUi.prototype.getDatabaseItem (key, success, error, storeName);
      EditorUi.prototype.getDatabaseItems (success, error, storeName);
      EditorUi.prototype.getDatabaseItemKeys (success, error, storeName);
      EditorUi.prototype.commentsSupported ();
      EditorUi.prototype.commentsRefreshNeeded ();
      EditorUi.prototype.commentsSaveNeeded ();
      EditorUi.prototype.getComments (success, error);
      EditorUi.prototype.addComment (comment, success, error);
      EditorUi.prototype.canReplyToReplies ();
      EditorUi.prototype.canComment ();
      EditorUi.prototype.newComment (content, user);
      EditorUi.prototype.isRevisionHistorySupported ();
      EditorUi.prototype.getRevisions (success, error);
      EditorUi.prototype.isRevisionHistoryEnabled ();
      EditorUi.prototype.getServiceName ();
      EditorUi.prototype.addRemoteServiceSecurityCheck (xhr);
      EditorUi.prototype.loadUrl (url, success, error, forceBinary, retry, dataUriPrefix, noBinary, headers);
      EditorUi.prototype.loadFonts (then);
      EditorUi.prototype.createSvgDataUri (svg);
      EditorUi.prototype.embedCssFonts (fontCss, then);
      EditorUi.prototype.embedExtFonts (callback);
      EditorUi.prototype.exportToCanvas (callback, width, imageCache, background, error, limitHeight, ignoreSelection, scale, transparentBackground, addShadow, converter, graph, border, noCrop, grid, theme);
      EditorUi.prototype.createImageUrlConverter ();
      EditorUi.prototype.convertImages (svgRoot, callback, imageCache, converter);
      EditorUi.prototype.convertImageToDataUri (url, callback);
      EditorUi.prototype.base64Encode (str);
      EditorUi.prototype.updateCRC (crc, data, off, len);
      EditorUi.prototype.crc32 (str);
      EditorUi.prototype.writeGraphModelToPng (data, type, key, value, error);
      EditorUi.prototype.getLocalStorageFileNames ();
      EditorUi.prototype.getLocalStorageFile (key);
      EditorUi.prototype.setMigratedFlag ();


Dialogs.js
----------

   Dialogs.js — Draw.io 编辑器各种内置对话框类型实现。

   .. code:: javascript

      var StorageDialog          = function(editorUi, fn, rowLimit);
      var SplashDialog           = function(editorUi);
      var EmbedDialog            = function(editorUi, result, timeout, ignoreSize, previewFn, title, tweet, previewTitle, filename);
      var GoogleSitesDialog      = function(editorUi, publicUrl);
      var CreateGraphDialog      = function(editorUi, title, type);
      var BackgroundImageDialog  = function(editorUi, applyFn, img, color, showColor);
      var ParseDialog            = function(editorUi, title, defaultType);
      var NewDialog              = function(editorUi, compact, showName, callback, createOnly, cancelCallback, leftHighlight, rightHighlight, rightHighlightBorder, itemPadding, templateFile, recentDocsCallback, searchDocsCallback, openExtDocCallback, showImport, createButtonLabel, customTempCallback, withoutType);
      var SaveDialog             = function(editorUi, title, saveFn, disabledModes, data, mimeType, base64Encoded, defaultMode);
      var CreateDialog           = function(editorUi, title, createFn, cancelFn, dlgTitle, btnLabel, overrideExtension, allowBrowser, allowTab, helpLink, showDeviceButton, rowLimit, data, mimeType, base64Encoded, hints, hideDialog);
      var PopupDialog            = function(editorUi, url, pre, fallback, hideDialog) ;
      var ImageDialog            = function(editorUi, title, initialValue, fn, ignoreExisting, convertDataUri, withCrop, initClipPath);
      var LinkDialog             = function(editorUi, initialValue, btnLabel, fn, showPages, showNewWindowOption, linkTarget);
      var FeedbackDialog         = function(editorUi, subject, emailOptional, diagramData);
      var RevisionDialog         = function(editorUi, revs, restoreFn);
      var DraftDialog            = function(editorUi, title, xml, editFn, discardFn, editLabel, discardLabel, ignoreFn, drafts);
      var AuthDialog             = function(editorUi, peer, showRememberOption, fn);
      var MoreShapesDialog       = function(editorUi, expanded, entries) ;
      var PluginsDialog          = function(editorUi, addFn, delFn, closeOnly) ;
      var CropImageDialog        = function(editorUi, image, clipPath, fn) ;
      var EditGeometryDialog     = function(editorUi, vertices) ;
      var LibraryDialog          = function(editorUi, name, library, initialImages, file, mode, allowBrowser);
      var EditShapeDialog        = function(editorUi, cell, title, w, h);
      var CustomDialog           = function(editorUi, content, okFn, cancelFn, okButtonText, helpLink, buttonsContent, hideCancel, cancelButtonText, hideAfterOKFn, customButtons, marginTop);
      var BtnDialog              = function(editorUi, peer, btnLbl, fn);
      var FontDialog             = function(editorUi, curFontname, curUrl, curType, fn);
      var FilePropertiesDialog   = function(editorUi, publicLink);
      var ConnectionPointsDialog = function(editorUi, cell) ;

Menus.js
--------

   Menus.js — Draw.io 编辑器菜单对象扩展、配置，主要是初始化方法的逻辑改写。通过调用
   `editorUi.actions.addAction()` 方法向编辑器对象添加行为，方法中传入 key 值与相应行为
   关联，并且通过此 key 值来查询相应的菜单标题内容。

   .. code:: javascript

      mxPopupMenu.prototype.showMenu ();
      Menus.prototype.createHelpLink (href);
      Menus.prototype.addLinkToItem (item, href);
      Menus.prototype.removeCustomFont (name, url);
      Menus.prototype.containsFont (name, url);
      Menus.prototype.addCustomFont (name, url);
      Menus.prototype.init ();

      this.addMenuItems(menu, ['points', 'inches', 'millimeters', 'meters'], parent);
      this.addMenuItems(menu, ['-', 'outline', 'fullscreen'], parent);
      this.addMenuItems(menu, ['keyboardShortcuts', '-', 'about'], parent);
      this.addMenuItems(menu, ['-', 'keyboardShortcuts', 'quickStart',
      this.addMenuItems(menu, ['check4Updates', '-'], parent);
      this.addMenuItems(menu, ['desktopResetZoom', 'desktopZoomIn',
      this.addMenuItems(menu, ['-', 'keyboardShortcuts',
      this.addMenuItems(menu, ['languageCode', '-'], parent);
      this.addMenuItems(menu, ['createSidebarEntry', 'showBoundingBox', '-',
      this.addMenuItems(menu, ['-', 'testShowConsole'], parent);
      this.addMenuItems(menu, ['exportPng'], parent);
      this.addMenuItems(menu, ['exportJpg'], parent);
      this.addMenuItems(menu, ['exportWebp'], parent);
      this.addMenuItems(menu, ['exportPng', 'exportJpg'], parent);
      this.addMenuItems(menu, ['exportSvg', '-'], parent);
      this.addMenuItems(menu, ['exportPdf'], parent);
      this.addMenuItems(menu, ['exportPdf'], parent);
      this.addMenuItems(menu, ['exportVsdx'], parent);
      this.addMenuItems(menu, ['-', 'exportHtml', 'exportXml', 'exportUrl'], parent);
      this.addMenuItems(menu, ['publishLink'], parent);
      this.addMenuItems(menu, ['-', 'lightMode', 'darkMode'], parent);
      this.addMenuItems(menu, ['-', 'toggleSimpleMode'], parent);
      this.addMenuItems(menu, ['-', 'lightMode', 'darkMode'], parent);
      this.addMenuItems(menu, ['publishLink'], parent);
      this.addMenuItems(menu, ['liveImage', '-'], parent);
      this.addMenuItems(menu, ['embedImage', 'embedSvg', '-', 'embedHtml'], parent);
      this.addMenuItems(menu, ['embedIframe'], parent);
      this.addMenuItems(menu, ['-', 'googleDocs', 'googleSlides', 'googleSheets', '-', 'microsoftOffice', '-', 'embedNotion'], parent);
      this.addMenuItems(menu, ['insertRectangle', 'insertEllipse', 'insertRhombus',
      this.addMenuItems(menu, ['insertTemplate'], parent);
      this.addMenuItems(menu, ['-', 'createShape', 'editDiagram'], parent);
      this.addMenuItems(menu, ['undo', 'redo', '-', 'cut', 'copy', 'copyAsImage', 'paste',
      this.addMenuItems(menu, ['showRemoteCursors'], parent);
      this.addMenuItems(menu, ['-', 'fullscreen'], parent);
      this.addMenuItems(menu, (['format', 'outline', 'layers', 'tags', 'chatWindowTitle']).
      this.addMenuItems(menu, ['-', 'search'], parent);
      this.addMenuItems(menu, ['toggleShapes', '-', 'pageView', 'pageScale']);
      this.addMenuItems(menu, ['ruler', '-', 'tooltips', 'animations',
      this.addMenuItems(menu, ['-', 'fullscreen'], parent);
      this.addMenuItems(menu, ['editLink', 'editShape', 'editImage', 'crop', '-',
      this.addMenuItems(menu, ['showRemoteCursors'], parent);
      this.addMenuItems(menu, ['googleFonts', 'spellCheck', 'autoBkp', 'drafts', '-'], parent);
      this.addMenuItems(menu, ['copyConnect', 'collapseExpand', '-'], parent);
      this.addMenuItems(menu, ['showRemoteCursors', 'shareCursor'], parent);
      this.addMenuItems(menu, ['autosave'], parent);
      this.addMenuItems(menu, ['-', 'editDiagram'], parent);
      this.addMenuItems(menu, ['showStartScreen'], parent);
      this.addMenuItems(menu, ['configuration'], parent);
      this.addMenuItems(menu, ['accounts'], parent);
      this.addMenuItems(menu, ['-'], parent);
      this.addMenuItems(menu, ['-', 'properties']);
      this.addMenuItems(menu, ['upload'], parent);
      this.addMenuItems(menu, ['-'], parent);
      this.addMenuItems(menu, ['-', 'revisionHistory'], parent);
      this.addMenuItems(menu, ['-', 'pageSetup', 'print', '-', 'rename'], parent);
      this.addMenuItems(menu, ['saveAndExit'], parent);
      this.addMenuItems(menu, ['save'], parent);
      this.addMenuItems(menu, ['saveAndExit'], parent);
      this.addMenuItems(menu, ['exit'], parent);
      this.addMenuItems(menu, ['rename'], parent);
      this.addMenuItems(menu, ['upload'], parent);
      this.addMenuItems(menu, ['properties'], parent);
      this.addMenuItems(menu, ['exportOptionsDisabled'], parent);
      this.addMenuItems(menu, ['save', '-', 'share'], parent);
      this.addMenuItems(menu, ['new'], parent);
      this.addMenuItems(menu, ['new', '-', 'rename', 'makeCopy',
      this.addMenuItems(menu, ['-', 'save', 'saveAs', '-'], parent);
      this.addMenuItems(menu, ['share', '-'], parent);
      this.addMenuItems(menu, ['rename'], parent);
      this.addMenuItems(menu, ['upload'], parent);
      this.addMenuItems(menu, ['makeCopy'], parent);
      this.addMenuItems(menu, ['moveToFolder'], parent);
      this.addMenuItems(menu, ['-', 'revisionHistory'], parent);
      this.addMenuItems(menu, ['-', 'properties']);
      this.addMenuItems(menu, ['-', 'pageSetup'], parent);
      this.addMenuItems(menu, ['print'], parent);
      this.addMenuItems(menu, ['-', 'close']);


Pages.js
--------

   `Pages.js` — Draw.io 编辑器中分页功能实现，每个页对应一个 XML `<diagram>`  节点层次结构。
   分页功能包括分页面板 UI 的实现、分页的增删改功能、自定义事件等等。

   .. code:: javascript

      DiagramPage.prototype.node                  = null;
      DiagramPage.prototype.root                  = null;
      DiagramPage.prototype.viewState             = null;
      DiagramPage.prototype.diagramModified       = false;
      DiagramPage.prototype.getId ();
      DiagramPage.prototype.getName ();
      DiagramPage.prototype.setName (value);
      DiagramPage.prototype.setDiagramModified (value);
      DiagramPage.prototype.isDiagramModified ();

      EditorUi.prototype.tabContainerHeight       = 36;
      EditorUi.prototype.setTabContainerVisible (visible)
      EditorUi.prototype.isTabContainerVisible ()
      EditorUi.prototype.getSelectedPageIndex ()
      EditorUi.prototype.getPageIndex (page)
      EditorUi.prototype.getPageById (id, pages)
      EditorUi.prototype.createImageForPageLink (src, sourcePage, sourceGraph, addFonts)
      EditorUi.prototype.pageSelected ()
      EditorUi.prototype.getImageForPage (page, sourcePage, sourceGraph, addFonts)
      EditorUi.prototype.initPages ()
      EditorUi.prototype.scrollToPage (page, force)
      EditorUi.prototype.restoreViewState (page, viewState, selection)
      EditorUi.prototype.updatePageRoot (page, checked)
      EditorUi.prototype.getDiagramSnapshot ()
      EditorUi.prototype.updateDiagramData (snapshot, node)
      EditorUi.prototype.replaceDiagramData (data)
      EditorUi.prototype.selectPage (page, quiet, viewState)
      EditorUi.prototype.selectNextPage (forward)
      EditorUi.prototype.insertPage (page, index, node)
      EditorUi.prototype.createPageId ()
      EditorUi.prototype.createPage (name, id, node)
      EditorUi.prototype.createPageName ()
      EditorUi.prototype.removePage (page)
      EditorUi.prototype.duplicatePage (page, name)
      EditorUi.prototype.initDiagramNode (page, node)
      EditorUi.prototype.clonePages (pages)
      EditorUi.prototype.clonePage (page)
      EditorUi.prototype.renamePage (page)
      EditorUi.prototype.movePage (oldIndex, newIndex)
      EditorUi.prototype.createTabContainer ()
      EditorUi.prototype.updateTabContainer ()
      EditorUi.prototype.checkTabScrollerOverflow ()
      EditorUi.prototype.isPageInsertTabVisible ()
      EditorUi.prototype.createTab ()
      EditorUi.prototype.getShortPageName (page)
      EditorUi.prototype.createControlTab (title, image, fn)
      EditorUi.prototype.createPageInsertTab ()
      EditorUi.prototype.createLeftScrollTab ()
      EditorUi.prototype.createRightScrollTab ()
      EditorUi.prototype.createPageMenuTab ()
      EditorUi.prototype.createTabForPage (page, pageNumber)
      EditorUi.prototype.addTabListeners (page, tab)
      EditorUi.prototype.createPageMenu (page, label)


Sidebars
--------

   `Sidebar-*.js` — Draw.io 编辑器图形库面板，展示各种内置图表，扩展了 mxGraph `mxSidebar`。

   .. code:: javascript

      Sidebar.prototype.tagIndex = '5V1dV+M6sv01rDvngax0oLvveYQEaGaAziE0PW8sxVYSDbblI9uk6V9...'
      Sidebar.prototype.searchIndexData = '7Z1rU+M40Kh/zVbN+wEq98vHkHDbJUxeHGDrfFEpjkh0cKwc2R6G...'
      Sidebar.prototype.gearImage = GRAPH_IMAGE_PATH + '/clipart/Gear_128x128.png';
      Sidebar.prototype.libAliases = {'aws2': 'aws3', 'gcp' : 'gcp2'};
      Sidebar.prototype.defaultEntries = 'general;uml;er;bpmn;flowchart;basic;arrows2';
      Sidebar.prototype.signs = ['Animals', 'Food', 'Healthcare', 'Nature', 'People', 'Safety', ...];
      Sidebar.prototype.ibm = ['Analytics', 'Applications', 'Blockchain', 'Data', 'DevOps', ...];
      Sidebar.prototype.allied_telesis = ['Buildings', 'Computer and Terminals', 'Media Converters', ...];
      Sidebar.prototype.gcp = ['Cards', 'Big Data', 'Compute', 'Developer Tools', 'Extras', ...];
      Sidebar.prototype.gcp2 = ['Paths', 'Zones', 'Service Cards', 'Compute', 'API Management', ...];
      Sidebar.prototype.gcpicons = ['AI and Machine Learning', 'API Management', 'Compute', ...];
      Sidebar.prototype.pids = ['Agitators', 'Apparatus Elements', 'Centrifuges', 'Compressors',...]; 
      Sidebar.prototype.cisco = ['Buildings', 'Computers and Peripherals', 'Controllers and Modules', ...]
      Sidebar.prototype.cisco19 = ['LAN Switching', 'Routing WAN', 'Network Management', ...];
      Sidebar.prototype.cisco_safe = ['Architecture', 'Business Icons', 'Capability', ...];
      Sidebar.prototype.sap = ['Annotations', 'Colored Connectors', 'Foundations', ...];
      Sidebar.prototype.sysml = ['Model Elements', 'Blocks', 'Ports and Flows', 'Constraint Blocks', ...];
      Sidebar.prototype.eip = ['Message Construction', 'Message Routing', 'Message Transformation', ...];
      Sidebar.prototype.gmdl = ['Bottom Navigation', 'Bottom Sheets', 'Buttons', 'Cards', 'Chips', ...];
      Sidebar.prototype.aws2 = ['Analytics', 'Application Services', 'Compute', 'Database', ...];
      Sidebar.prototype.aws3 = ['Analytics', 'Application Services', 'Artificial Intelligence', ...];
      Sidebar.prototype.aws4b = ['Arrows', 'General Resources', 'Illustrations', 'Groups Light', ...];
      Sidebar.prototype.aws4 = ['Arrows', 'General Resources', 'Illustrations', 'Groups', ...];
      Sidebar.prototype.office = ['Clouds', 'Communications', 'Concepts', 'Databases', 'Devices', ...];
      Sidebar.prototype.veeam = ['Data Center', 'Misc', 'Software', 'Storage', 'UsersStatus', ...];
      Sidebar.prototype.veeam2 = ['Auxiliary', 'Data Center', 'Features', 'General', ...];
      Sidebar.prototype.archimate3 = ['Application', 'Business', 'Generic', ...];
      Sidebar.prototype.electrical = ['LogicGates', 'Resistors', 'Capacitors', 'Inductors', ...];
      Sidebar.prototype.customEntries = null;
      Sidebar.prototype.appendCustomLibraries = false;
      Sidebar.prototype.enabledLibraries = null;
      Sidebar.prototype.maxPreloadCount = 20;
      Sidebar.prototype.configuration = [{id: 'general', libs: ['general', 'misc', 'advanced']},
      Sidebar.prototype.addEntry (tags, fn);
      Sidebar.prototype.refresh ();
      Sidebar.prototype.togglePalettes (prefix, ids);
      Sidebar.prototype.togglePalette (id);
      Sidebar.prototype.showPalettes (prefix, ids, visible);
      Sidebar.prototype.showPalette (id, visible);
      Sidebar.prototype.getConfigurationById (id);
      Sidebar.prototype.isEntryVisible (key);
      Sidebar.prototype.showEntries (entries, remember, force);
      Sidebar.prototype.init ();
      Sidebar.prototype.updateEntries ();
      Sidebar.prototype.addFoldingHandler (title, content, funct);
      Sidebar.prototype.extractShapeStyle (style);
      Sidebar.prototype.getTagsForStencil (pkg, stc, moreTags);
      Sidebar.prototype.addTagIndex (text);
      Sidebar.prototype.getUniqueLibraries (libs);
      Sidebar.prototype.openLibraries (libs);
      Sidebar.prototype.openLibrary (config, lib);
      Sidebar.prototype.showPopupMenuForEntry (elt, libs, evt);
      Sidebar.prototype.addSearchIndex (shapes);
      Sidebar.prototype.initPalettes ();
      Sidebar.prototype.addCustomEntries ();
      Sidebar.prototype.addStencilPalette (id, title, stencilFile, style, ignore, onInit, scale, tags, customFns, groupId);
      Sidebar.prototype.extractIconsFromResponse (res, results);
      Sidebar.prototype.isSearchIndexLoaded ();
      Sidebar.prototype.updateSearchIndex ();
      Sidebar.prototype.searchEntries (searchTerms, count, page, success, error, searchClosedLibraries);
      Sidebar.prototype.getTooltipOffset (elt, bounds);
      Sidebar.prototype.itemClicked (cells, ds, evt);



/🟡mxGraph Essentials
======================


   理解事件模型对于定制开发 mxGraph 应用非常有必要，可以说事件是整个图表应用的脉络，掌握了各种对象
   的事件来由和处理就可以深入理解这个基于图论（graph theory）之上设计的图表绘制框架。官方文档包含
   了丰富的示例，同时包含了面向新手的教程，从基本概念出发，讲述一个 Web 应用的基本要素。从浏览器上
   运行的客户端，到服务器上运行的服务程序。mxGraph 总的来说是属于于 Web 客户端应用，它的入口程序是
   `mxClient`，也就是说只需要在 Web 页面上加载 mxClient.js 脚本就可以运行 mxGraph 程序。

   *  `mxGraph Tutorial <https://jgraph.github.io/mxgraph/docs/tutorial.html>`__
   *  `mxGraph User Manual – JavaScript <https://jgraph.github.io/mxgraph/docs/manual.html>`__
   *  `mxGraph Examples - JavaScript <https://jgraph.github.io/mxgraph/javascript/index.html>`__

   如下脚本片段演示了从官方文档服务器中引用的 `mxClient` 程序，并且可以配置 mxGraph 框架的其它
   脚本所在的路径。正确配置了 `mxBasePath` 路径才可以成功加载依赖的资源，特别是你想要本地运行，
   直接使用浏览器打开页面时。


   .. code:: javascript

      <!-- Sets the basepath for the library if not in same directory -->
      <script type="text/javascript">
         mxBasePath = '../src';
      </script>
      <script type="text/javascript" src="https://jgraph.github.io/mxgraph/javascript/src/js/mxClient.js"></script>


   .. code:: javascript

      // Checks if the browser is supported
      if (!mxClient.isBrowserSupported())
      {
         // Displays an error message if the browser is not supported.
         mxUtils.error('Browser is not supported!', 200, false);
      }
      ...

   mxGraph 源代码根据不同的语言实现分文件夹管理，当前关注的是 JavaScript 语言的实现：

   .. table:: Table: Project Directory Structure

      ==================== =====================================================
      /doc                 Documentation root, includes this user manual
      /dotnet              .NET server-side classes
      /java                Java server-side classes
      /javascript          JavaScript client functionality.
      /javascript/examples HTML examples demonstrating the use of mxGraph
      ChangeLog            Details of the changes between releases
      index.html           Basic introduction to the library
      license.txt          The licensing terms under which you must use the library
      ==================== =====================================================

   客户端入口脚本也包含了几个版本，分别适用于开发环境和生产环境：

   =============================== ==============================================
   `javascript/src/js/mxClient.js` Source code works with separated module files.
   `javascript/mxClient.min.js`    Production version, which compressed all modules into one.
   `javascript/mxClient.js`        All-in-one version that combines all module source code.
   =============================== ==============================================

   `mxClient` 作为客户端入口，它的主要功能是检测浏览器环境，包含判断浏览器厂商、版本等信息。当然，
   最主要的还是判断对 SVG 图形的支持情况。至少有几种方法让你直接使用浏览器提供的开发者工具来运行
   以下这些测试代码：

   *  使用 Chrome 浏览器打开在线版 `draw.io Editor <https://app.diagrams.net/>`__，
      并使用 F12 打开开发者工具，或者执行菜单： More Tools -> Developer Tools。

   *  使用桌面版 `drawio-desktop <https://github.com/jgraph/drawio-desktop/releases>`__
      并通过菜单激活开发者工具： Settings -> Help -> Developer Tools。

   *  使用 Chrome 浏览器打开官方任一示范程序页面，然后激活开发者工具。
      比如事件处理演示这个页面 `mxGraph Events <https://jgraph.github.io/mxgraph/javascript/examples/events.html>`__。
   
   *  使用 Node.js 开发平台，通过 NPM 工具安装依赖模块， `npm install mxgraph --save`;

      .. code:: javascript

         // The factory function returns a 'namespace object' of the mxGraph package. 
         var mxgraph = require("mxgraph")({
            mxImageBasePath: "./src/images",
            mxBasePath: "./src"
         })

         var mxEvent = mxgraph.mxEvent;
         mxEvent.disableContextMenu(container);

   Draw.io 客户端入口代码位于 src/main/webapp/js/diagramly/App.js，页面加载时，执行
   App.main() 方法初始化 UI，依赖的脚本文件（例如插件）则通过 `mxscript()` 全局方法加载：

      .. code:: javascript

         App.main = function(callback, createUi)
         {
            ...
        function doLoad(bundle) <───────────────────────────────────────────────╮
        {                                                                       │
               mxUtils.getAll((urlParams['dev'] != '1') ? [bundle] : [bundle,       │
                  STYLE_PATH + '/default.xml'], function(xhr)                       │
               {                                                                    │
                  // Adds bundle text to resources                                  │
                  mxResources.parse(xhr[0].getText());                              │
                  ...                                                               │
                  function realMain()                                               │
             {                                                                 │
                ...                                                            │
                     var ui = (createUi != null) ? createUi() : new App(new Editor( │
                           urlParams['chrome'] == '0' || uiTheme == 'min',          │
                           null, null, null, urlParams['chrome'] != '0'));          │
                ...                                                            │
             }                                                                 │
                  callback(ui)                                                      │
                  ...                                                               │
                  realMain()                                                        │
                  ...                                                               │
               })                                                                   │
            }                                                                       │
                                 ╭──────────────────────────────────────────────────╯
          function doMain() { ...} <────╮
            doMain() ─────────────────────╯
         }

   加载客户端后，就可以按 mxGraph 框架组织逻辑来编写应用代码，将框架提供的各种类型组合起来得到一个
   交互图表绘制工具。当然这不是一蹴而就的事，必需要逐步来完成。



Hello World
===================

   .. code:: javascript

      <html>
      <head>
        <title>Hello, World! example for mxGraph</title>

        <!-- Sets the basepath for the library if not in same directory -->
        <script type="text/javascript">
          mxBasePath = '../src';
        </script>

        <!-- Loads and initializes the library -->
        <script type="text/javascript" src="../src/js/mxClient.js"></script>

        <!-- Example code -->
        <script type="text/javascript">
          // Program starts here. Creates a sample graph in the
          // DOM node with the specified ID. This function is invoked
          // from the onLoad event handler of the document (see below).
          function main(container)
          {
            // Checks if the browser is supported
            if (!mxClient.isBrowserSupported())
            {
              // Displays an error message if the browser is not supported.
              mxUtils.error('Browser is not supported!', 200, false);
            }
            else
            {
              var root = new mxCell();
              root.insert(new mxCell());
              var model = new mxGraphModel(root);

              // let container = document.body
              // let container = document.querySelector("#mydiv")
              let graph = new mxGraph(container, model);
              let parent = graph.getDefaultParent();

              // Adds cells to the model in a single step
              graph.getModel().beginUpdate();
              try
              {
                var v1 = graph.insertVertex(parent, null, 'Hello', 20, 20, 80, 30, 
                    'rounded;strokeColor=yellow;fillColor=green');
                var v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
                var e1 = graph.insertEdge(parent, null, '', v1, v2, 'strokeColor=yellow');

                graph.setConnectable(true);
                graph.setConnectableEdges(true);
                graph.setCellsEditable(false);
                graph.setMultigraph(false);

              }
              finally
              {
                // Updates the display
                graph.getModel().endUpdate();
              }

              // Disables the built-in context menu
              mxEvent.disableContextMenu(container);

              // Enables rubberband selection
              new mxRubberband(graph);
            }
          };
        </script>
      </head>

      <!-- Page passes the container for the graph to the program -->
      <body onload="main(document.getElementById('graphContainer'))">

        <!-- Creates a container for the graph with a grid wallpaper -->
        <div id="graphContainer" style="position:fixed;top:0;left:0;width: 100vw;height:100vh;"></div>
      </body>
      </html>

Class Architectures
===================

   首先，最主要的还是 mxGraph 的核心模型 `mxGraphModel` 和核心 API 对象 `mxGraph`，前者
   存储了图表的一切数据，后者提供了一个图表应用的几乎后有操作（方法和函数）。就目前阶段，需要一个
   HTML 标签作为图表的容器，直接使用页面中的 `<body>` 也没有问题。但是作为使用习惯，通常以页面
   中的 `<div>` 标签作为容器使用。

   创建 `mxGraph` 实例时，如果没有传递可用的 model，那么构造函数会默认创建一个核心模型实例，
   就像以下代码那样。

   .. code:: javascript

      // let node = document.getElementById('id-of-div-container');
      // let node = document.querySelector('#id-of-div-container');
      let container = document.body
      let model = new mxGraphModel();
      let graph = new mxGraph(container, model);

      // default model inside mxGraph
      // this.model = (model != null) ? model : new mxGraphModel();

   框架中的 `mxCell` 就是图形元素，它的代表 mxGraph 中的群组（Group）、节点（Vertex）、边（Edge）
   的容器。它在 mxGraph 框架数据模型中的地位，就如 HTML 中的 `<div>` 元素。类似地 `mxStylesheet`
   也就是 CSS 样式表的等价物，用于保存各种控制图表外观的样式属性。 `mxGraphView` 扩展自事件源对象
   `mxEventSource`，它可以处理各种图表事件。

   在用户使用 draw.io 编辑器设计图表时，“直接”打交道最多的就是 `mxCell`，它在一份 drawio 交互
   图表文档中无处不存。它内部引用 `mxGeometry` 类型来保存几何尺寸信息，这也是几何对象的主要功能。
   几何对象继承自 `mxRectangle` 类型，后者又继承自 `mxPoint`。这两个类对象都定义在 `mxClient`
   类文件中。所以，几何对象就是一个起点，加上宽高构成，另外还实现了基于平面的旋转、缩放、平移等函数。
   这些类型中，主要是 `mxCell` 和 `mxGeometry` 类型，会在保存 XML 文件时，串行化变成 XML 节点
   保存到文件中，节点名称就是对应的类名称，或者说是构建函数。

   对象的串行化（Serialization）是将内存的对象实例数据转换为易于保存且可原样恢复的数据，一般用于
   程序存档功能。读取存档就是逆向操作，称为逆串行化（deserialization），也叫 Marshal & Unmarshal。

   .. code:: javascript

                                ┌───────────┐
      ┌─────────────┐   view    │           │ stylesheet ┌──────────────┐
      │ mxGraphView ⇦───────────┼  mxGraph  ┼────────────⇨ mxStylesheet │
      └─────────────┘           │           │            └──────────────┘
                                └──┬──┬──┬──┘                         
                   selectionModel  │  │  │   cellRenderer             
                 ┌─────────────────┘  │  └─────────────────┐          
                 │                    │  model             │          
       ┌─────────⇩────────┐ ┌─────────⇩─────────┐ ┌────────⇩────────┐ 
       │ mxGraphSelection │ │   mxGraphModel    │ │ mxCellRenderer  │ 
       └──────────────────┘ │───────────────────│ └─────────────────┘ 
                            │                   │                     
            ┌───────────────┘                   └─────────────┐
            │ add          ( parent, child, index ): mxCell   │
            │ remove       ( cell )                : mxCell   │
            │ getParent    ( cell )                : mxCell   │
            │ getChildAt   ( cell, index )         : mxCell   │
            │ getChildCount( cell )                : mxCell   │
            │ getChildren  ( cell )                : [mxCell] │
            │ getTerminal  ( edge, isSource )      : mxCell   │
            │ getEdgeCount ( cell )                : int      │
            │ getEdgeAt    ( cell, index )         : mxCell   │
            │ ...                                             │
            └─────────────────────────────────────────────────┘
                              root    │ 
               ┌──────────────────────⇩──────────────────────┐
               │                   mxCell                    │
               │─────────────────────────────────────────────│
               │   value                        : string     │
               │   style                        : Object     │
               │   isVertex     ()              : bool       │
               │   isEdge       ()              : bool       │
               │   isConnectable()              : bool       │
               │   isVisible    ()              : bool       │
               │   isCollapsed  ()              : bool       │
               │   getGeometry  ()              : mxGeometry │
               │   setGeometry  (geometry)      : null       │
               │ insertEdge (edge, isOutgoing)  : mcCell     │
               │ ...                                         │
               └─────────────────────────────────────────────┘
                           geometry   │ 
               ┌──────────────────────⇩──────────────────────┐
               │                 mxGeometry                  │
               │─────────────────────────────────────────────│
               │   ┌─────────────────-───────────────────┐   │
               │   │            mxRectangle              │   │
               │   │─────────────────────────────────────│   │
               │   │  ┌──────────────-────────────────┐  │   │
               │   │  │           mxPoint             │  │   │
               │   │  │───────────────────────────────│  │   │
               │   │  │   x                  : int    │  │   │
               │   │  │   y                  : int    │  │   │
               │   │  └───────────────────────────────┘  │   │
               │   │   width                 : int       │   │
               │   │   height                : int       │   │
               │   └─────────────────────────────────────┘   │
               │                                             │
               │   rotate    (angle, cx)            : null   │
               │   translate (dx, dy)               : null   │
               │   scale     (sx, sy, fixedAspect)  : null   │
               │   equals    (obj)                  : null   │
               │                                             │
               └─────────────────────────────────────────────┘

   另外的 `mxEditor` 可以说是 draw.io 图表编辑器的前身，可以将它看作是精简版本。通过学习它的
   类层次结构就可以大概掌握 draw.io 整个应用结构的设计。编辑器类是 editor package 的中心对象。
   源代码中这个包的其它文件都是辅助作用。创建新编辑器实例时，可以给构造函数传入配置文件以自定义功能。

   .. code:: javascript

      var config = mxUtils.load('editors/config/keyhandler-commons.xml').getDocumentElement();
      var editor = new mxEditor(config);

   配置文件也是 XML 文件，它会经由 `mxCodec` 再经由 `mxEditorCodec` 或其它类读取并解释得到
   编辑器对象层次结构。这个过程在启动时完成对 editor, graph, model, toolbar, popupmenus
   等内容的配置。

   .. code:: javascript

                                       ┌────────────┐
                                       │ ────────── │                              
      ┌────────────────────┐ popupMenu │  mxEditor  │ undoManager ┌───────────────┐
      │ mxDefaultPopupMenu ⇦───────────┼            ┼─────────────⇨ mxUndoManager │
      └────────────────────┘           │            │   help,     └───────────────┘
                                       │ ────────── │   tasks,                     
                                       └───┬──┬──┬──┘   outline,            
                              toolbar      │  │  │      properties             
                         ┌─────────────────┘  │  └─────────────────┐          
                         │                    │ graph              │          
               ┌─────────⇩────────┐ ┌─────────⇩─────────┐ ┌────────⇩────────┐ 
               │ mxDefaultToolbar │ │      mxGraph      │ │    mxWindow     │ 
               └──────────────────┘ └───────────────────┘ └─────────────────┘ 



mxGraph Transaction
===================

   对于一个 Web 客户端应用，界面设计是其主要内容，包括用户交互操作、事件处理，可以说这些功能统统
   者是 `mxGraph` 一者包办，因此它需要协调不同浏览器的环境。框架的核心是 mxGraphModel 模型，
   它描述了图形的结构信息，模型的事务存储（transaction）在模型上，但是 `mxGraph` 的设计方式使得
   主要公共 API 都通过 `mxGraph` 类向开发者提供。这个类的实现代码也是整个框架最多的，文件代码达
   339K。从另一方面来说，用户的所用操作都是通过 `mxGraph` 这个类对象来执行核心模型的数据处理事务，
   包括修改图表内容、撤销操作等等。

   事务（Transaction）是并发控制的基本单位，是数据处理领域的最基本需求。

   事务有四大特征，简称 ACID：

   *  原子性（Atomic）：事务是最小操作单位，不可再分；
   *  一致性（Consistency）：要求所有的数据操作（DML）语句必须保证同时成功或者同时失败；
   *  隔离性（Isolation）：事务 A 和事务 B 之间具有隔离性；
   *  持久性（Durability）：持久是事务的保证，事务终结的标志（比如内存的数据持久到硬盘文件中）；

   DML = Data Manipulation Language

   事务的一般使用方式：

   *  开启事务：Start Transaction
   *  提交事务：Commit Transaction
   *  回滚事务：Rollback Transaction
   *  事务结束：End Transaction

   顶点（Vertexes）和边（Edges）是图论研究的最基本的对象，mxGraph 框架也是如此，所有代码都是
   围绕着顶点为与联接边进行操作。在程序中，顶点、边都是数据，需要通过核心模型的事务来进行读写操作，
   或者说向一张图中添加、移除顶点或者联接边。现在只需要使用 `mxGraphModel` 核心模型提供的事务
   方法： `beginUpdate()` 和 `endUpdate()`，在这两个方法之间执行以上的数据操作。并且，为了
   保证事务的可靠执行，需要使用 JavaScript 脚本的 try-finally 脚本块，保证在 finally 中执行
   事务结束方法，无论事务成功或失败。事务不仅提供可靠数据操作，还提供撤消、重做（undo/redo）功能。

   .. code:: javascript

      // Gets the default parent for inserting new cells. This
      // is normally the first child of the root (ie. layer 0).
      var parent = graph.getDefaultParent();

      // Adds cells to the model in a single step
      model.beginUpdate();
      try
      {
         var v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30);
         var v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
         var e1 = graph.insertEdge(parent, null, '', v1, v2);
      }
      finally
      {
         // Updates the display
         model.endUpdate();
      }


Graph model and Stylesheet
==========================

   图表模型（graph model）结构有以下几个属性：

   *  图容器根元素 `<root>` 用于包含图层，是所有图层的根元素。
   *  图层可以包含图表模型中的任意个元素，这些元素包括顶点（vertices），边（edges）和群组（groups）。
   *  群组（Groups）可以包含任意数量的图表模型中的元素。

   现在，按照这几个基本要求创建核心模型，并且为它创建一个 `<root>` 元素，以及样式属性设置。根元素
   下添加的首个 `mxCell` 就是默认图层（default layer）：

   .. code:: javascript

      var root = new mxCell();
      root.insert(new mxCell());
      var model = new mxGraphModel(root);

      let container = document.body
      let graph = new mxGraph(container, model);
      let parent = graph.getDefaultParent();

      var v1 = graph.insertVertex(parent, null, 'Hello',
               20, 20, 80, 30, 'rounded;strokeColor=red;fillColor=green');

      // var vertexStyle = graph.getStylesheet().getDefaultVertexStyle();
      // vertexStyle[mxConstants.STYLE_ROUNDED] = true;

      // var edgeStyle = graph.getStylesheet().getDefaultEdgeStyle();
      // edgeStyle[mxConstants.STYLE_EDGE] = mxEdgeStyle.TopToBottom;


   注意，mxCell 使用的 XML 文档中的节点并不是完全上下层级的嵌套结构，根元素 `<root>` 下层的
   `<mxCell>` 节点其实是扁平化的层级。虽然，各个 `<mxCell>` 与根元素的 XML 节点关系是上下
   层级关系，但是在 mxGraph 框架逻辑看来，只有通过 parent 指明的节点才是 graph model 中认
   可的上级节点。

   前面提到 `mxStylesheet` 是级联样式表（CSS）的等价物，它用于控制 `mxCell` 对象的外观，样式
   对象本身是一个映射对象：样式属性名称到样式值的映射。样式属性设置有两种形式，简写形式使用样式名称
   表示使用相应的样式，完整形式是样式属性名称与属性值使用 = 号连接起来，使用分号作为属性间的分隔符。
   语法格式定义：[stylename;|key=value;]。比如，一个启用圆角、红色描边、绿色填充的属性可以用
   “rounded;strokeColor=red;fillColor=green” 这样的字符串表示。以下打印的是通过样式对象
   `getDefaultVertexStyle()` 等方法获取的默认样式值：

   .. code:: javascript

      // Default Vertex Style
      {
         "shape": "rectangle",
         "verticalAlign": "middle",
         "align": "center",
         "fillColor": "#C3D9FF",
         "strokeColor": "#6482B9",
         "fontColor": "#774400"
      }

      // Default Edge Style
      {
         "shape": "connector",
         "endArrow": "classic",
         "verticalAlign": "middle",
         "align": "center",
         "strokeColor": "#6482B9",
         "fontColor": "#446299"
      }

   图表本身包含默认样式，用户也可以给图表或者通过 `putCellStyle()` 将样式设置保存起来，后续再
   通过 mxCell 或者 mxGraphModel 对象的 `setStyle()` 方法将样式应用于图表对象：

   .. code:: javascript

      // Stores the given map of key, value pairs under the given name in `styles`.
      mxStylesheet.prototype.putCellStyle = function( name, style )
      mxUtils.setStyle: function( style, key, value )

      mxCell.prototype.setStyle = function( style )  
      mxGraphModel.prototype.setStyle = function( cell, style ) 

      var style = new Object();
      style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_RECTANGLE;
      style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
      style[mxConstants.STYLE_ROUNDED] = true;
      graph.getStylesheet().putCellStyle('rounded', style);
      model.setStyle(cell, 'rounded');

   .. code:: javascript

      // Creates the default style for vertices
      var style = [];
      style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_RECTANGLE;
      style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
      style[mxConstants.STYLE_STROKECOLOR] = 'gray';
      style[mxConstants.STYLE_ROUNDED] = true;
      style[mxConstants.STYLE_FILLCOLOR] = '#EEEEEE';
      style[mxConstants.STYLE_GRADIENTCOLOR] = 'white';
      style[mxConstants.STYLE_FONTCOLOR] = '#774400';
      style[mxConstants.STYLE_ALIGN] = mxConstants.ALIGN_CENTER;
      style[mxConstants.STYLE_VERTICAL_ALIGN] = mxConstants.ALIGN_MIDDLE;
      style[mxConstants.STYLE_FONTSIZE] = '12';
      style[mxConstants.STYLE_FONTSTYLE] = 1;
      graph.getStylesheet().putDefaultVertexStyle(style);

      // Creates the default style for edges
      style = [];
      style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_CONNECTOR;
      style[mxConstants.STYLE_STROKECOLOR] = '#6482B9';
      style[mxConstants.STYLE_ALIGN] = mxConstants.ALIGN_CENTER;
      style[mxConstants.STYLE_VERTICAL_ALIGN] = mxConstants.ALIGN_MIDDLE;
      style[mxConstants.STYLE_EDGE] = mxEdgeStyle.ElbowConnector;
      style[mxConstants.STYLE_ENDARROW] = mxConstants.ARROW_CLASSIC;
      style[mxConstants.STYLE_FONTSIZE] = '10';
      graph.getStylesheet().putDefaultEdgeStyle(style);




mxGraph Event Model
===================

   根据官方 API Specification 文档，mxGraph 事件模型中存在三类事件：
   
   *  浏览器原生的 W3C DOM（Documnt Object Model） 事件；
   *  `mxEventSource` 触发的 `mxEventObjects` 事件，也用于创建用户自定义事件；
   *  `mxGraph` 图表操作时触发的 `mxMouseEvents` 事件；

   首先，来认识一下“事件”这个概念，通常这是一个用在日常生活中的高频词。但是用在编程领域，它有领域
   内的一些抽象特点。比如说，鼠标点击这个事件，是用户触发的经由鼠标这个输入设备将信号通过数据线传送
   到计算机内部。这在编程中是典型的 I/O 事件，也非常直观。但是，程序中还存在大量的“软件”形式的事件，
   比如，用户在一个闹钟程序中开启了一个 10s 时间的计时，时间达到时闹钟程序就给出一个消息通告。在这
   个过程中，用户通过 I/O 设备产生事件，闹钟程序也在程序内通过代码产生了通知事件。两者形式上有所不同，
   但是根本上来说，编程中的事件就是指由某种条件的达成引起某部分功能代码被执行的过程。将这个概念套用
   到 `mxGraph` 或者 `mxEventSource` 两个对象上，因此它们会在某些条件达成时，比如用户点击了图表
   或者拖动了联接箭头，它们会按逻辑触发相应的事件，并创建事件对象实例（ `mxEventObjects` 或者
   `mxMouseEvents` ），它们用于在程序不同的代码（函数、方法）之间传递数据，因此将这些用于传递事件
   数据的对象相应地称呼为“某某事件”。

   以下是为 `JavaScript Definitive Guide 7th <JavaScript_Definitive_Guide_7th.rst>`__
   一书 15.2 Events 章节内容配合制作的示意图，它描述了 W3C 标准事件模型中的一次事件包含的三个阶段。
   假定用户通过鼠标点击了 Web 页面上的一个 `<p>` 标签，并触发 click 事件，这个事件就会按示意图箭头
   所示的方向传递：

      *  捕获阶段 (capture phase)：开始从 Document 向目标元素传播，依次调用标签中绑定的捕获阶段事件处理函数；
      *  目标阶段 (target phase)：事件到达目标元素，触发目标元素上注册的事件处理函数；
      *  冒泡阶段 (bubbling phase)：从目标元素冒泡到 Document，依次调用标签上绑定的冒泡阶段事件处理函数；

      .. code:: javascript

         ╭───────────────╮                  ╭────────────────╮
         │ capture phase │                  │ bubbling phase │
         ╰── ─ ─ ─ ─ ─ ──╯                  ╰── ─ ─ ─ ─ ─ ─ ─╯
               │          ┌───────────────────┐   │
               ╰─> 1  2   │ Document (<body>) │   5 <──╮
                      │   └───────────────────┘        │
                      │      │  ┌─────────────────┐    │
                      ╰─> 3  ╰──│ <div>           │    6 <──╮
                          │     └─────────────────┘         │
                          │        │  ┌─────────────────┐   │
                          ╰───> 4  ╰──│ <p>             │   7 <──╮ ╭─ ─ ─ ─ ─ ─ ──╮
                                │     └─────────────────┘        │ │ target phase │
                                ╰────────────────────────────────╯ ╰─ ─ ─ ─ ─ ─ ──╯

         {tag: '➊', target: '<p>', type: 'click', source: PointerEvent}

         div.addEventListener("click", makelog("➌"), true)  // ➌ capture phrase
         div.addEventListener("click", makelog("➏"), false) // ➏ bubbling phrase

   为了避免 Web 的右键上下文菜单影响，可以禁用默认的鼠标右键功能：

   .. code:: javascript

      // Disables the built-in context menu
      // var mxEvent = mxgraph.mxEvent;
      mxEvent.disableContextMenu(container);

      // Enables rubberband selection
      new mxRubberband(graph);

   图形事件处理包括一个用于框选操作的“橡皮选区”（mxRubberband），启用橡皮选区功能的 mxGraph
   就可以使用鼠标拖动来框选需要操作的图表对象。“橡皮选区”只需激活即可使用，这是 mxGraph 框架中
   事件处理器 (mxHandler) 中的其中一个子类型实现，事件处理器对象有十数个具体类型，涉及各种方面
   的事件处理，比如 `mxTooltipHandler` 用于工具提示信息展示， `mxGraphHandle` 用于单元格修改。

   除了这些事件处理器对象，mxGraph 还通过 `mxEvent` 定义了一组 Cross-browser DOM event，
   兼容浏览器的事件。用户可以通过事件源对象注册监听这些事件， 比如 `mxEvent` 和 `mxGraph` 或者
   其它 `mxEventSource` 子类型提供的方法： `addListener()` `removeListener()`。

   ::

                        ╭───────────────╮
                        │ mxEventSource │
                        ╰───────┬───────╯
      ╭──────────────╮          │            ╭───────────────╮
      │ mxGraphModel │──────────┼────────────│ mxCellOverlay │
      ╰──────────────╯          │            ╰───────────────╯
      ╭─────────╮               │            ╭───────────╮
      │ mxGraph │───────────────┼────────────│ mxToolbar │
      ╰─────────╯               │            ╰───────────╯
      ╭─────────────╮           │            ╭──────────╮
      │ mxGraphView │───────────┼────────────│ mxWindow │
      ╰─────────────╯           │            ╰──────────╯
                           ╭──────────╮
                           │ mxEditor │
                           ╰──────────╯

   图表还有一些默认设置，比如通过拖动鼠标来连接图表或联接线，鼠标位于图表中心时即会高亮提示可联接。
   或者设置图表文字内容是否可以编辑。设置联接是否可以重叠，默认是可以重叠联接，如果设置为禁止，用户
   在重叠联接时看到弹框提示。还有平移图表功能设置（Panning），配合 `mxPanningHandler` 使用。
   具体参考 `mxGraph` 手册内容中的 Graph behaviour 部分：

   .. code:: javascript

      graph.setConnectable(true);
      graph.setConnectableEdges(true);
      graph.setCellsEditable(false);
      graph.setMultigraph(false);
      graph.setPanning(true);
      graph.panningHandler.useLeftButtonForPanning = true;

   通过设置 `getTooltipForCell()` 回调函数可以自定义 Tooltips 内容：

   .. code:: javascript

      graph.setTooltips(true);
      
      graph.getTooltipForCell = function(cell)
      {
         return (cell != null)? null : cell.style;
      };

   图表高亮处理可以参考源代码示范：javascript\examples\wires.html。代码通过重定义联接线对象
   的标记图形来实现线条的高亮指示。代码通过改写 `mxConnectionHandler` 原型方法 `createMarker()`，
   在此方法中定义 `highlight()` 方法，并且通过修改图表对象的 state 引用的样式来实现联接线的高亮，
   主要是修改 strokeWidth 和 strokeColor 属性。

   `mxConnectionHandler` 对象通过 marker 属性引用一个 `mxCellMarker` 用于查找联接线两端
   所在位置的图表目标。文档描述时使用了 <mxTerminalMarker>，这里使用的是错误的对象名。

   `mxCellMarker` 对象有一个 mark 事件，会在图表显示标记时触发，并执行 `mxCellHighlight`
   实例的 `highlight()`，这就是高亮动作。这个方法接收一个 `mxCellState` 对象，它记录了图表
   `mxGraphView` 和 `mxCell`  对象的状态信息，以及临时样式，修改临时样式就可以改变高亮状态：

   .. code:: javascript

      var highlight = new mxCellHighlight(graph, '#ff0000', 2);
      highlight.highlight(graph.view.getState(cell));

      mxCellMarker.prototype.mark = function()
      {
         this.highlight.setHighlightColor(this.currentColor);
         this.highlight.highlight(this.markedState);
         this.fireEvent(new mxEventObject(mxEvent.MARK, 'state', this.markedState));
      };

   `mxCellHighlight` 文档中描述高亮事件使用的是 mark（mxEvent.MARK），对应的 `highlight()`：

   .. code:: javascript

      /**
      * Function: mark
      * 
      * Marks the <markedState> and fires a <mark> event.
      */
      mxCellHighlight.prototype.highlight = function(state)
      {
         if (this.state != state)
         {
            if (this.shape != null)
            {
               this.shape.destroy();
               this.shape = null;
            }

            this.state = state;
            
            if (this.state != null)
            {
               this.drawHighlight();
            }
         }
      };

   mxGraph 框架中，有多个需要处理事件的类型都继承自己 `mxEventSource`，它们包括： `mxGraphModel`、
   `mxGraph`、 `mxGraphView`、 `mxEditor`、 `mxCellOverlay`、 `mxToolbar`、 `mxWindow`。
   这些使用同一 API 的类型提供了 `addListener()` 和 `removeListener()` 这些方法用于事件的注册
   与解除注册，因此这些类形又可以称为事件管理中心。阅读 mxGraph 4.2.2 框架源代码，可以发现它还
   是使用 ES5 规范的 JavaScript 脚本，并没有采用更新的 ES6 规范，因此代码还是使用基于原型链
   （prototype）的继承机制：

   .. code:: javascript

      /**
      * Extends mxEventSource.
      */
      mxGraph.prototype = new mxEventSource();
      mxGraph.prototype.constructor = mxGraph;

   需要使用事件机制的代码，包括发布事件和处理事件的两种代码，分别需要在事件中心中登记事件类型信息、
   事件处理函数。当条件满足时，事件中心就调用 `fireEvent()` 触发事件，并调用当前已经注册的与
   此事件相关的处理函数，这个过程称为事件派送（dispatch）。需要处理某些事件的这部分代码通常称为
   Event Listeners，并且会保存在 `eventListeners` 数组变量中。注册事件处理函数时，需要提供
   要处理的事件名称和一个处理事件的函数。事件中心通过事件名称来调用（触发）关联的处理函数。

   阅读 `mxEventSource` 的源代码发现，作者“偷懒”，用一个数组来保存事件名称和事件处理函数，这样
   在检查时，循环结构 step = 2，当触发事件时，首先匹配事件名称，如果匹配到 eventListeners[x]
   正是当前的事件，那么事件处理函数就是 eventListeners[x+1]。

   需要发布自定义事件的代码就要在达成条件时调用 `fireEvent()` 方法触发事件并传入事件数据：

   .. code:: javascript

      fireEvent(new mxEventObject("eventName", key1, val1, .., keyN, valN))

   就以 `mxGraph` 类对象而言，它本身既是事件管理中心的角色，同时可以看到前面的类型关系示意图，
   它与多个核心对象（ `mxEventSource` ）存在关联，它本身需要处理一些事件，包括窗口的 unload
   事件和图表内存变动事件。同时它又作为事件源，通过 `fireEvent()` 方法触发各种事件供开发者处理。
   所以，一个对象是什么角色，取决于它在什么情况下产生作用。

   由于不同类型之间有使用多种同类事件的需求，一般在注册、触发事件时不能使用字符串字面量表达事件名，
   这样的硬编码（hard code）不仅不利于程序的维护，同时也大大提供出错的机会。因此需要 `mxEvent`
   类型中统一定义 mxGraph 框架中的各种内置事件名称。当然，这不是它的主要职能，它的主要工作是提供
   跨浏览器的 DOM 节点事件支持，并且解决 DOM 节点与 JavaScript 代码间循环引用导致的内存泄露
   （memory leaks）问题，主要是 IE6 中的内存泄漏。

   事件模型中的 `mxEventObject` 类一般称为事件类，它包装事件触发时由事件发布方提供的相关数据。
   类型结结构也比较简明，除了 name 和 properties 两个数据属性外，还实现了用于标记事件被消费的
   状态的 `consumed` 属性，当事件处理方完成事件处理后，可以主动调用 `consumed()` 方法将事件
   标记为已消费状态，后续的事件处理器可以通过 `isConsumed()` 方法判断事件的处理状态。


Core API functions
==================

   ===================================================================== ================================================================================
   **Key API Methods:**

   `mxGraphModel.beginUpdate()`                                          | starts a new transaction or a sub-transaction.
   `mxGraphModel.endUpdate()`                                            | completes a transaction or a sub-transaction.
   `mxGraph.addVertex()`                                                 | Adds a new vertex to the specified parent cell.
   `mxGraph.addEdge()`                                                   | Adds a new edge to the specified parent cell.

   **Core API functions:**

   `mxGraph.insertVertex(parent, id, value, x, y, width, height, style)` | creates and inserts a new vertex into the model, within a begin/end update call.
   `mxGraph.insertEdge(parent, id, value, source, target, style)`        | creates and inserts a new edge into the model, within a begin/end update call.
   `mxGraph.setCellStyle(style, cells)`                                  | Sets the style for the array of cells, encapsulated in a begin/end update.
   `mxGraph.getCellStyle(cell)`                                          | Returns the style for the specified cell, merging the styles from 
                                                                         | any local style and the default style for that cell type.
   `mxGraph.resizeCell(cell, bounds)`                                    | Resizes the specified cell to the specified bounds, within a begin/end update call.
   `mxGraph.resizeCells(cells, bounds)`                                  | Resizes each of the cells in the cells array to the corresponding 
                                                                         | entry in the bounds array, within a begin/end update call.
   `mxGraph.groupCells(group, border, cells)`                            | Adds the specified cells to the specified group, within a begin/end update
   `mxGraph.ungroupCells(cells)`                                         | Removes the specified cells from their parent and adds them to their parent's parent. 
                                                                         | Any group empty after the operation are deleted. The operation occurs within a begin/end update.
   `mxGraph.foldCells(collapse, recurse, cells)`                         | States the collapsed state of the specificed cells, within a begin/end update.
   `mxGraph.enterGroup(cell)`                                            | Makes the specified cell the new root of the display area.
   `mxGraph.exitGroup()`                                                 | Makes the parent of the current root cell, if any, the new root cell.
   `mxGraph.home()`                                                      | Exits all groups, making the default parent the root cell.
   `mxGraph.orderCells(back, cells)`                                     | Moves the array of cells to the front or back of their siblings, 
                                                                         | depending on the flag, within a begin/end update.
   ===================================================================== ================================================================================

mxGraph Shapes and Layout
=========================

   mxGraph 图表上的每个图形都对应一个 `<mxCell>` 节点，无论这个图形有多简单，即使是一个小圆点，
   也对应这样的一个标签节点，对于复杂的图形还会涉及更多多的节点组合和属性数据。因此，每个图形至少
   占据几百到几千字节的数据以上。由于没有节点复用手段，对于拥有大量图形的情形，文档体积可能非常大。

   从形式上讲，列表、表格等等也可以看作是布局的一种形式。每个表格或者列表本身对应一个 `<mxCell>`，
   列表中的条目、表格中的行、表格中的单元格都对应一个 `<mxCell>`，它们依次作为父级的子元素，本身
   又按照列表或者表格的排版形式展示。从这些 `<mxCell>` 的层级关系可以看到，mxGraph 图形库的基本
   绘图逻辑是：数据容器 `<mxCell>` 用于记录图形数据，图形如何绘制由数据来描述，具体是样式数据、
   几何尺寸等等。

   Draw.io 目前存在一个较大的问题是：所有图形都是固定的，可定制程度较弱。甚至不允许用户修改图形
   的顶点数据，这是修改图形的基本能力，也是自由绘制矢量图形的基本要求。

   文档中 mxShape 部分给出的扩展定义图形的方法，定义扩展类、注册、使用三步走：

   .. code:: javascript

      // To extend from this class, the basic code looks as follows. 
      function CustomShape() { }

      CustomShape.prototype = new mxShape();
      CustomShape.prototype.constructor = CustomShape;

      // To register a custom shape in an existing graph instance
      mxCellRenderer.registerShape('customShape', CustomShape);

      //To use the shape you can refer to the given name above in a stylesheet. 
      var style = graph.getStylesheet().getDefaultVertexStyle();
      style[mxConstants.STYLE_SHAPE] = 'customShape';

   以上代码基于 JavaScript ES5 规范编写的、以原型链为类型继承方式。如果使用 ES6 或者更新的规范，
   就可以使用 `class` 或 `extends` 关键直接继承扩展。

   .. code:: javascript

      // 1. 继承 mxShape 类
      class CustomShape extends mxShape {
         constructor() {
            super();
         }
      }

      // 2. 在当前 mxGraph 实例中注册自定义图形类
      mxCellRenderer.registerShape('customShape', CustomShape);

      // 3. 通过 mxCell 样式属性 shape=customShape 来启用自定义图形
      const cell = new mxCell(
         null,
         new mxGeometry(100, 50, 50, 100),
         'shape=customShape'
      );

   基本步骤完成后，然后就是重定义绘图相关的 API 函数，渲染引擎根据样式属性执行自定义类进行绘画：

   ====================== ======================================================
   mxShape Painting APIs
   `beforePaint()`        | Invoked before paint is called.
   `afterPaint()`         | Invokes after paint was called.
   `paint()`              | Generic rendering code.
   `paintVertexShape()`   | Paints the vertex shape.
   `paintBackground()`    | Hook for subclassers.
   `paintForeground()`    | Hook for subclassers.
   `paintEdgeShape()`     | Hook for subclassers.
   `paintGlassEffect()`   | Paints the glass gradient effect.
   ====================== ======================================================

   图表的子层布局（childLayout）设置对多条目的图表的渲染有较大影响，它可以决定图表渲染为表格，
   还是列表，或者层级树。Drawio 图表库中还提供了一些组合图形，比如 Shapes - Misc - Ellipse Sketch
   就是 text + ellipse 组合，并且在内部的椭圆形中设置了 sketch=1 以使用素描效果。一些定制
   的图形则通过使用线条或者配合图像绘制。

   ============== ==============================================================
   treeLayout     mxCompactTreeLayout()
   flowLayout     mxHierarchicalLayout()
   circleLayout   mxCircleLayout()
   organicLayout  mxFastOrganicLayout()
   tableLayout    TableLayout()
   ============== ==============================================================

   ::

                              ╭─────────╮
                              │ mxShape │
                              ╰────┬────╯
         ╭───────────────────╮     │     ╭──────────────────╮
         │ mxActor           │     │     │ mxConnector      │
         │ mxCloud           │     │     │ mxArrow          │
         │ mxCylinder        │ ────┴──── │ mxArrowConnector │
         │ mxDoubleEllipse   │           ╰──────────────────╯
         │ mxEllipse         │
         │ mxHexagon         │
         │ mxImageShape      │
         │ mxLabel           │
         │ mxLine            │
         │ mxMarker          │
         │ mxPolyline        │
         │ mxRectangleShape  │
         │ mxRhombus         │
         │ mxStencil         │
         │ mxStencilRegistry │
         │ mxSwimlane        │
         │ mxText            │
         │ mxTriangle        │
         ╰───────────────────╯

mxCell Style Properties
=======================

   阅读 draw.io 源代码可知，图表属性分了几个类别，适用于图形的顶点（vertex）或者边线（edge）：

   =============================== =============================================
   Editor.commonProperties         Common properties for all edges.
   Editor.commonVertexProperties   Common properties for all vertices.
   Editor.commonEdgeProperties     Common properties for all edges.
   =============================== =============================================

   此顶点是图论中的概念，是联接边线的点，点与联线形成图的网络关系。另外，在图形学上，顶点通常指
   包含图形几何坐标的数据，常用用控制这些图形如何绘画出来。这里的边线可以看作画布上联接图表的线条，
   可以当作一条贝塞尔曲线来看待，曲线本身也同样需要使用顶点来控制。特别地，边线的顶点称为 Waypoints。

   图表属性大概分为以下几类：
   `Shape styles in draw.io <https://drawio-app.com/blog/shape-styles/>`__

   *  Color (fills, gradients, opacity, strokes and labels)
   *  Text (opacity, alignment, positioning, spacing, font family, size and style, color and wrapping)
   *  Perimeter (perimeter connections, port constraints, spacing)
   *  Misc (swim lanes, rotation, flipping, rounding, glass, dashed, shadow, direction)
   *  Indicators (sub-shapes)
   *  Image (alignment, aspect, background, width, height, flip, border)
   *  Connectors (routing style, arrow styling)

   样式属性中定义图形类型有两种方式：直接写类型名称或者使用完整格式，比如 "label" 或者 "shape=label"。
   因为图表与联线在代码逻辑上属性两种不同的类型定义，所以在绘制相应的图形时，它们各自适用独立的一套样式。
   联接线有四种基本类型，不同外观差异通过各种联接线样式来表现，比如 curved=1 就启用曲线，startArrow
   或者 endArrow 分别指定联接线的起点、终点的箭头样式，默认启用终点箭头，并且为 classic 箭头样式。
   可以设置 none 禁止使用箭头。还可以使用 `edgeStyle` 指定线条的渲染样式，可以在 Draw.io 样式面板
   中设置 Line - Waypoints 列表中选择联接线样式：

   ======================= ========================================================
   orthogonalEdgeStyle     正交联接线，拐角为直角。可以像直接一样创建多段式联接线（SegmentConnector）。
   elbowEdgeStyle          竖直（elbow=vertical, TopToBottom）或者水平布线（SideToSide），根据 cell 设置的标志进行左右边、上下边方向的联接。
   isometricEdgeStyle      等角投影，拐角为 45° 或者 135° 以模拟 2.5D 透视效果，同样可以使用 elbow=vertical 切换朝向。
   entityRelationEdgeStyle 实体关系联接线，常用于表现数据库模型图表。
   loopEdgeStyle           自循环联接，联接线从起点发出，并且终点又回到出发点的图表上。
   ======================= ========================================================

   Draw.io 中的图形是既定的，不能像 SVG 绘画中可以使用 Path 这样指令根据顶点来绘制，所以像弧线、
   扇形这样的图形，假如图形库中没有提供内部定义，用户就只能通过 FreeHand 工具来自己画。可在图形库
   中找到这些基本的图形：Shpes -> Basic -> Arc 或者 Pie。这些属于扩展图形，绘图逻辑可以参考
   源代码文件： `diagramly\Extensions.js`。图形库面板中绘制的图形在源代码中归类目录为 sidebar，
   比如，基本图形对应 `diagramly\sidebar\Sidebar-Basic.js`。

   常用 shape 类型样式定义参考如下表：

   ==================== ========================================================
   "shape=connector"    Default Edge Style. 默认联接线（直线）。
   "shape=link"         双线联接线，可以模拟管道连接。
   "shape=flexArrow"    带箭头的宽联接线，可以弯折或调整线条大小、箭头大小。
   "shape=arrow"        类似 flexArrow，但不能调整大小。

   "shape=rectangle"    Default Vertex Style. 省略 shape 属性时默认图表图形类型。
   "rounded=1"          圆角矩形（为矩形启用圆角属性），配合 arcSize 设置圆角半径，absoluteArcSize 设置定位类型。
   "shape=label"        标签（Note），可以配合 image 样式属性设置标签的图标，图像按方形处理。默认对齐：spacingLeft=52; align=right;
   "shape=ellipse"      椭圆、圆形，两者差别在于 Arrange 面板中保存的 mxGeometry 尺寸信息。
   "shape=stencil(...)" 由铅笔工具（FreeHand）绘制的自由线，括号内为编码或压缩后的曲线数据。
   "shape=text"         文本，图形所在面板 Shapes - General - Text/Textbox。
   "shape=cloud"        云朵，图形所在面板 Shapes - General - Cloud。
   "shape=cylinder"     圆柱，图形所在面板 Shapes - General - Cylinder。
   "shape=cube"         盒子，图形所在面板 Shapes - General - Cubic。
   "mxgraph.basic.arc"  弧线，Shapes - Basic - Arc，参考样式：verticalLabelPosition=bottom;verticalAlign=top;startAngle=0.2;endAngle=0.1;
   "mxgraph.basic.pie"  扇面，Shapes - Basic - Pie，参考样式：verticalLabelPosition=bottom;verticalAlign=top;startAngle=0.6;endAngle=0.9;
   "~.partConcEllipse"  扇区，Shapes - Basic - Partial Concentric Ellipse，参考样式：verticalLabelPosition=bottom;verticalAlign=top;startAngle=0.3;endAngle=0.1;arcWidth=0.5;
   "shape=swimlane"     列表，childLayout=stackLayout，图形所在面板 Shapes - General - List。
   "shape=table"        列表，childLayout=tableLayout，图形所在面板 Shapes - Misc - Table。
   "shape=retangle"     素描矩形，sketch=1，图形所在面板 Shapes - Misc - Retangle Sketch。
   "shape=datastore"    数据库，图形所在面板 Shapes - Advanced - Data Store。
   "shape=image"        嵌入图像，Insert -> Image，图像地址或 base64 编码数据保存在 image 属性中，例如：
                        shape=image;imageAspect=0;aspect=fixed;verticalLabelPosition=bottom;
                        verticalAlign=top;image=data:image/svg+xml,...;
   ==================== ========================================================

   图表属性与 CSS 样式表类似，也使用分号作为样式属性的分隔符号，只是样式名与值之间使用等号，而非冒号。
   使用快捷键 Ctrl+E 可以快速打开样式代码编辑框，也可以通过右键菜单 Edit -> Edit Style... 或者
   样式面板打开。

   所有属性都有可视状态控制，当它由于条件不充分时就会在编辑器中隐藏，例如图表的枚举编号功能，通过
   样式属性 Enumerate 功能激活后，编辑器就会给图表右上角添加一个黄色自动编号。并且属性列表中就会
   出现原本处于隐藏状态的 Enumerate Value 属性，它可以由用户设置一个指定的枚举编号，而不是编辑器
   自动生成的数码编号。有部分属性并不显示在属性列表中，因为它们涉及的是不同的绘图逻辑模式，它们会直接
   显式在格式化面板（Format）下的 Style、Text 或者 Arrange 属性面板中。

   需要注意的是，当双击图表进入文本编辑状态时，即图表中的文件处于选中状态，此时 Text 属性面板显示
   HTML CSS 样式，此时不能通过 Ctrl+E 打开样式代码编辑框，但是可设置的样式与 mxCell 中可使用的
   文本样式大概一致。只是修改的属性值会写入当前文档嵌入的 HTML 代码中。

   样式属性面板中还有其它属性可以改变图表的默认行为，其中有一系列标志位属性，用于切换相应的功能是否
   激活。图表对象的样式属说明性如下，它们都是 `bool` 类型，数值 0 和 1 对应脚本 false 和 true：

   ============= ================ ======= =======================================
   name          Captions         Values  Functions
   ============= ================ ======= =======================================
   connectable   Connectable      0,1     表示图表是否可创建联接线；
   editable      Editable         0,1     表示图表是否可以编辑；
   deletable     Deletable        0,1     表示图表是否可以删除；
   locked        Locked           0,1     表示图表是否锁定，会自动禁用多个状态属性；
   movableLabel  Movable Label    0,1     表示图表标签文字是否可以移动；
   movable       Movable          0,1     表示图表是否可以移动；
   resizable     Resizable        0,1     表示图表是否可以伸缩，启用时才会显示图形四周的尺寸控制点；
   rotatable     Rotatable        0,1     表示图表是否可以旋转，启用后会在图形右上角显示回旋箭头；
   ============= ================ ======= =======================================

   锁定一个图表时，用户就无法编辑它，它等价于同时将以上全部属性值设置为禁止状态：
   
      movable=0;resizable=0;rotatable=0;deletable=0;editable=0;locked=1;connectable=0;

   除了锁定图表对象，还可以对图层进行锁定，这种情形常用于配合内容链接功能使用，通常将带有内容链接的
   按钮放到一个专用图层中，因为按钮 link 属性中包含有各种内容链接行为（Actions），为了方便执行这
   些链接功能，就需要将按钮所在图层锁定。这样就不会在点击按钮时，出现一个链接内容提示框，而是直接执
   行链接功能。

   当用户觉得很满意当前的样式设置，那么就可以点击样式面板的 Style -> Set as Default Style
   将当前样式配置为默认值，那么后续新创建的所有图表就会复用这套最新的默认样式设置。并且，默认样式
   可以随时更新，只需要再选择其它拥有不同样式的图表对象，再重新执行以上操作，就可以更新默认样式。

   以下是图表中使用通用属性：

   ======================== ========================== ======= ======== ===============================
   name                     display name               type    default  description
   ======================== ========================== ======= ======== ===============================
   direction                Dirction                   string      east 设置图表的朝向：DIRECTION_NORTH: 'north', DIRECTION_SOUTH: 'south', DIRECTION_EAST: 'east', DIRECTION_WEST: 'west'。
   noLabel                  Hide Label                 bool       false 隐藏图表的 label 属性的文本，当取消 Font Color 时会修改此属性。
   treeFolding              Tree Folding               bool           1 是否可以折叠建立了联接关系的子节点。需要先激活折叠功能支持： `Settings -> Collapse/Expand`
   collapsible              Collapsible                bool           1 是否可以折叠容器本身的内容。需要先激活折叠功能支持： `Settings -> Collapse/Expand`
   ======================== ========================== ======= ======== ===============================


   以下是图表的全局控制属性简要，这些属性一般显示在 Format 窗口的 Style、Text、Arrange 面板中。
   部分样式属性的 name 和值定义为 mxConstants 对象中的常量值，样式属性名称、值是会被写入文档中
   `<mxCell>` 节点样式属性中的值，display name 只是编辑器中显示的用户友好的字符串：

   =========================== ========================== ======= ========= ===============================
   name                        display name               type    default   description
   =========================== ========================== ======= ========= ===============================
   opacity                     Style -> Opacity           int          100  min: 0, max: 100, 设置图表的整体不透明度。
   rounded                     Style -> Rounded           bool       false  设置是否激活图表圆角效果，配合 Arc Size 设置半径，或者使用图表右上边的角标调整。
   fillColor                   Style -> Fill              color    default  设置图表填充色，比如红色 #FF0000。
   fillStyle                   Style -> Fill              string      auto  设置填充风格：[ 'auto' (Auto),  'hatch' (Hatch), 'solid' (Solid),  'dots' (Dots), 'cross-hatch' (Cross Hatch),  'dashed' (Dashed), 'zigzag-line' (ZigZag Line) ]
   strokeColor                 Style -> Line              color    default  设置图表描边色。
   strokeWidth                 Style -> Line              float          1  设置图表描边精细。
   dashed                      Style -> Line              bool           0  设置是否使用虚线描边。
   dashPattern                 Style -> Line              [float]        -  设置虚线描边模板，使用空格分隔的两个值表示线、留白长度，单位 1 表示描边线宽度。
   perimeterSpacing            Style -> Perimeter         float          1  设置周边留白空间，可以影响联接线的远近距离。
   sketch                      Style -> Sketch            bool       false  设置是否启用草图模式，启用草图模式后，属性列表会增加一系列相关属性。
   glass                       Style -> Glass             bool       false  设置是否启用玻璃模拟，启用后通过给图表上半部投射一个大半径的圆形的下边缘部分，颜色为浅白以模拟玻璃折射效果。
   shadow                      Style -> Shadow            bool       false  设置是否激活图表的阴影模式。
   gradientColor               Style -> Gradient          color    default  渐变填充的终点色，从填充色（fillColor）过度。
   gradientDirection           Style -> Gradient          string     north  渐变填充方向定义在 mxConstants：'north', 'south', 'east', 'west', 'radial']
   fontFamily                  Text -> Font               string         -  设置字体名称，比如 `fontFamily=Comic Sans MS;`
   fontStyle                   Text -> Font               int            0  设置字体样式，组合值：FONT_BOLD: 1, FONT_ITALIC: 2, FONT_UNDERLINE: 4, FONT_STRIKETHROUGH: 8。
   fontSize                    Text -> Font               float          -  设置字体大小，一般文字在 10 ~ 24 pt，根据需要设置。
   horizontal                  Text -> Font               int            1  设置字体朝向，默认为水平方向，0 表示竖直方向，相当标签逆时旋转 90°。
   align                       Text -> Font               string    center  设置字体水平方向对齐：ALIGN_LEFT: 'left', ALIGN_CENTER: 'center', ALIGN_RIGHT: 'right'。
   verticalAlign               Text -> Font               string    middle  设置字体竖起方向对齐：ALIGN_TOP: 'top', ALIGN_MIDDLE: 'middle', ALIGN_BOTTOM: 'bottom'。
   labelPosition               Text -> Position           string    center  设置图表标签文字的竖起方向对齐位置：ALIGN_LEFT: 'left', ALIGN_CENTER: 'center', ALIGN_RIGHT: 'right'。
   verticalLabelPosition       Text -> Position           string    bottom  设置图表标签文字的水平方向对齐位置：ALIGN_TOP: 'top', ALIGN_MIDDLE: 'middle', ALIGN_BOTTOM: 'bottom'。
   textDirection               Text -> Writing Direction  string      auto  设置图表标签文字的书写方向：TEXT_DIRECTION_AUTO: 'auto', TEXT_DIRECTION_LTR: 'ltr', TEXT_DIRECTION_RTL: 'rtl'。
                                                                            用于设置文字排版方向：Left to Right 正常的左-右方向；
                                                                            Right to Left 旧式的右-左方向；
                                                                            Vertical (Left to Right) 不常用的竖直向右方向；
                                                                            Vertical (Right to Left) 旧式纵向排版，竖直向左方向；
   fontColor                   Text -> Font Color         color    default  设置图表标签文字的颜色，取消此属性时会自动隐藏标签文本（Hide Label）。
   labelBackgroundColor        Text -> Background Color   color    default  设置图表标签文字框的背景颜色，区分图表的填充色（Fill），只作用在标签文本范围。
   labelBorderColor            Text -> Border Color       color    default  设置图表标签文字框的边框颜色，区分图表的描边色（Line），只作用在标签文本范围。
   textShadow                  Text -> Shadow             bool       false  设置是否激活图表标签文字阴影模式。
   whiteSpace                  Text -> Word Wrap          string   deafult  设置是否激活图表标签文字折行：'normal', 'wrap', 'nowrap', 'pre'。
   html                        Text -> Formatted Text     bool           0  设置是否激活 HTML 标签内容内嵌支持，0 （禁用）或者 1（启用）。
   textOpacity                 Text -> Opacity            int          100  min: 0, max: 100, 设置图表标签文字的不透明度。
   spacing                     Text -> Spacing (Global)   int            0  设置图表标签文字的四周（Global）留白空间。
   spacingTop                  Text -> Spacing (Top)      int            0  设置图表标签文字的到图表上边（Top）留白空间。
   spacingLeft                 Text -> Spacing (Left)     int            0  设置图表标签文字的到图表左边（Left）留白空间。
   spacingBottom               Text -> Spacing (Bottom)   int            0  设置图表标签文字的到图表下边（Bottom）留白空间。
   spacingRight                Text -> Spacing (Right)    int            0  设置图表标签文字的到图表右边（Right）留白空间。
   =========================== ========================== ======= ========= ===============================

   注：取消 Formatted Text 功能时，不仅仅是设置 `html=0;` 样式属性，同时还会移除所有 HTML 标签内容。
   激活后则可以将内容转义后存储在 mxCell 这类节点的 value 或者 tooltip 这此属性中。可以手动修改此样式
   属性，这样就不会触发 HTML 标签内容的移除，而是直接以文本方式显示 HTML 标签内容。这里有一个有趣的现象，
   因为 draw.io 是本身是基于 Web 技术实现的，当手动设置 `html=0;` 样式属性时，就会显示 HTML 代码，
   双击编辑时，就会按 HTML 标签功能渲染出来。

   Draw.io 中的书写朝向（textDirection）与 CSS direction 属性相同，用于设置文本、表格列和
   水平溢出的方向。对于从右到左书写的语言（如希伯来语或阿拉伯语），应将该属性设置为 rtl；对于从左
   到右书写的语言（如英语和大多数其他语言），则应将该属性设置为 ltr。
   `MDN - CSS direction <https://developer.mozilla.org/zh-CN/docs/Web/CSS/direction>`__

   Draw.io 的页面也可以激活草图（Sketch）模式，就是在没有选择任何内容时，Format -> Style 面板
   中有 Sketch 按钮，也有圆角模式（Rounded），还有多个样式预置，点击这些内容，相应的样式就会应用
   到当前页面中的所有图表对象上。

   Arrange 属性面板用于调整图表的排列、位置设置、对齐分组，以及图表的深度调整等等功能。图表的深度
   决定了图表之间被遮挡的关系。根据图表的渲染顺序，在文档中 `<mxCell>` 节点越靠近文档开头，就越先
   被渲染。所以后面出现的图表，如果坐标重合，就会遮挡住前的图表。HTML 样式中有 z-index 属性来控制
   标签的渲染深度，并且深度值越大，渲染越靠后（可以遮挡其它先渲染的图形）。

   *  Arrange -> To Front 将当前选中的图表带到顶层，避免被其它图表遮挡；
   *  Arrange -> To Back 将当前选中的图表带到底层（文档靠近前头），使其可以被其它图表遮挡；
   *  Arrange -> Bring Forward 逐层地移动图表，而是不是一次性移到文档后头；
   *  Arrange -> Send Backward 逐层地移动图表，而是不是一次性移到文档前头；

   以下是和 mxGraph 图表的几何对象相关的属性说明，几何对象 `<mxGeometry>` 是文档中保存图表
   大小尺寸、位置等信息节点。每个 `<mxCell>` 节点都有几何数据：

   ======================== ========================== ======= ======== ===============================
   name                     display name               type    default  description
   ======================== ========================== ======= ======== ===============================
   x                        Position - Left            number  0        设置图表的原点 x 坐标
   y                        Position - Top             number  0        设置图表的原点 y 坐标
   width                    Size - Width               number  0        设置图表的高度尺寸        
   height                   Size - Height              number  0        设置图表的宽度尺寸        
   offset                   -                          [x,y]   null     
   relative                 -                          bool    false    
   ======================== ========================== ======= ======== ===============================

   `mxGeometry API <https://jgraph.github.io/mxgraph/docs/js-api/files/model/mxGeometry-js.html>`__

   以下是其它通用属性简要（Editor.commonProperties），这部分是图表顶点与连线共用的属性：

   ======================== ========================== ======= ======== ===============================
   name                     display name               type    default  description
   ======================== ========================== ======= ======== ===============================
   enumerate                Enumerate                  bool     false   给图表对象一个枚举编号。https://www.drawio.com/blog/number-shapes
   · enumerateValue         Enumerate Value            string      ''   由用户指定枚举编号，而不是自动生成的数码编号。 
   comic                    Comic                      bool     false   是否启用漫画风格曲线边。
   · jiggle                 Jiggle                     float       1    min: 0 
   sketch                   Sketch                     bool     false   设置是否启用草图模式。此属性在样式面板中，而不在属性列表中。
   · fillWeight             Fill Weight                int        -1    
   · hachureGap             Hachure Gap                int        -1    
   · hachureAngle           Hachure Angle              int       -41    
   · curveFitting           Curve Fitting              float       0.5  
   · simplification         Simplification             float       0    min: 0, max: 1
   · disableMultiStroke     Disable Multi Stroke       bool     false   
   · disableMultiStrokeFill Disable Multi Stroke Fill  bool     false   
   · dashOffset             Dash Offset                int         -1   
   · dashGap                Dash Gap                   int         -1   
   · zigzagOffset           ZigZag Offset              int         -1   
   · sketchStyle            Sketch Style               enum    'rough'  enumList: 'rough' (Rough), 'comic' (Comic)
   linecap                  Line Cap                   enum       null  enumList: null (Flat), 'round' (Round), 'square' (Square)
   linejoin                 Line Join                  enum       null  enumList: null (Miter), 'arcs' (Arcs), 'bevel' (Bevel), 'miter-clip' (Miter-Clip), 'round' (Round)
   ======================== ========================== ======= ======== ===============================

   以下这组属性和图表阴影、文字阴影属性有关，只有在 Style 或者 Text 属性面板中激活了 Shadow 模式
   才能使用，这是两种不同的阴影类型，样式属性名为 `shadow` 和 `textShadow`：

   ======================== ========================== ======= ======== ==============================
   name                     display name               type    default  description
   ======================== ========================== ======= ======== ==============================
   shadowColor              Shadow Color               color        -   
   shadowOpacity            Shadow Opacity             int          -   min: 0, max: 100
   shadowOffsetX            Shadow Offset X            int          -   
   shadowOffsetY            Shadow Offset Y            int          -   
   shadowBlur               Shadow Blur                int          -   min: 0
   ======================= ========================== ======= ======== ===============================


   以下是顶点的专用属性简要（commonVertexProperties），顶点属性并不直接出现在 UI 面板中：

   ======================= ========================== ======= ========= ===============================
   name                    display name               type    default   description
   ======================= ========================== ======= ========= ===============================
   colspan                 Colspan                    int      1        min: 1, 
   rowspan                 Rowspan                    int      1        min: 1, 
   resizeLastRow           Resize Last Row            bool     false    
   resizeLast              Resize Last Column         bool     false    
   fillOpacity             Fill Opacity               int      100      min: 0, max: 100, 
   strokeOpacity           Stroke Opacity             int      100      min: 0, max: 100, 
   overflow                Text Overflow              enum     visible  enumList: visible, hidden, block, fill, width
   noLabel                 Hide Label                 bool     false    
   labelPadding            Label Padding              float    0        
   direction               Direction                  enum     'east'   enumList: north, east, south, west
   portConstraint          Constraint                 enum     'none'   enumList: none, north, east, south, west 
   portConstraintRotation  Rotate Constraint          bool     false    
   connectable             Connectable                bool     -        
   allowArrows             Allow Arrows               bool     true     
   snapToPoint             Snap to Point              bool     false    
   perimeter               Perimeter                  enum     none     enumList: rectanglePerimeter, ellipsePerimeter, rhombusPerimeter, 
                                                                        trianglePerimeter, hexagonPerimeter2, lifelinePerimeter, 
                                                                        orthogonalPerimeter, backbonePerimeter, calloutPerimeter, 
                                                                        parallelogramPerimeter, trapezoidPerimeter, stepPerimeter, centerPerimeter
   fixDash                 Fixed Dash                 bool     false    
   container               Container                  bool     -        
   dropTarget              Drop Target                bool     -        
   collapsible             Collapsible                bool     -        
   recursiveResize         Resize Children            bool     true     
   expand                  Expand                     bool     true     
   part                    Part                       bool     false    
   editable                Editable                   bool     true     
   metaEdit                Edit Dialog                bool     false    
   backgroundOutline       Background Outline         bool     false    
   movable                 Movable                    bool     true     
   movableLabel            Movable Label              bool     false    
   autosize                Autosize                   bool     false    
   fixedWidth              Fixed Width                bool     false    
   resizable               Resizable                  bool     true     
   resizeWidth             Resize Width               bool     false    
   resizeHeight            Resize Height              bool     false    
   rotatable               Rotatable                  bool     true     
   cloneable               Cloneable                  bool     true     
   deletable               Deletable                  bool     true     
   treeFolding             Tree Folding               bool     false    
   treeMoving              Tree Moving                bool     false    
   pointerEvents           Pointer Events             bool     true     
   moveCells               Move Cells on Fold         bool     false    
   ======================= ========================== ======= ========= ===============================


   以下是联接线的专用属性简要（Editor.commonEdgeProperties）：

   *  arcSize = mxConstants.LINE_ARCSIZE = 20
   *  segment = mxConstants.ENTITY_SEGMENT = 30

   =========================== ========================== ======= ========= ===============================
   name                        display name               type    default   description
   =========================== ========================== ======= ========= ===============================
   arcSize                     Arc Size                   float         20  min:0, 设置图表圆角半径，需要激活模式 Rounded（rounded=1）。
   absoluteArcSize             Abs. Arc Size              bool       false  设置圆角的模式：relative, absolute
   sourcePortConstraint        Source Constraint          enum      'none'  enumList: ['none' (None), 'north' (North), 'east' (East), 'south' (South), 'west' (West)'}]
   targetPortConstraint        Target Constraint          enum      'none'  enumList: ['none' (None), 'north' (North), 'east' (East), 'south' (South), 'west' (West)'}]
   jettySize                   Jetty Size                 int       'auto'  min: 0, 使用条件：orthogonalEdgeStyle
   segment                     Segment Size               int           30  min: 0, 使用条件：entityRelationEdgeStyle
   fillOpacity                 Fill Opacity               int          100  min: 0, max: 100, 设置图表填充色的不透明度。
   strokeOpacity               Stroke Opacity             int          100  min: 0, max: 100, 设置图表描边线条不透明度。
   startFill                   Start Fill                 bool        true  联接线是否启用填充色。
   startFillColor              Start Fill Color           color       null  设置联接线填充色。
   endFill                     End Fill                   bool        true  联接线是否启用渐变填充。
   endFillColor                End Fill Color             color       null  设置联接线渐变填充色的结束端颜色。
   perimeterSpacing            Terminal Spacing           float          0  设置联接线两端点与图表之间的间隔。
   anchorPointDirection        Anchor Direction           bool        true  设置在计算连接边的固定点位置时是否应考虑 direction 方向样式。
   snapToPoint                 Snap to Point              bool       false  是否要将联接线端点吸附到联接顶点。
   dashPattern                 Dash Pattern               numbers       ''  设置线条在选中状态下显示的破折线样式，每两个值为一组，分别表示线段、留白的长度，所有值使用空格分隔。
   fixDash                     Fixed Dash                 bool       false  设置是否固定破折线的宽度，或者使用 linewidth 相同宽度。
   editable                    Editable                   bool        true  设置是否可以编辑，Lock 功能。
   metaEdit                    Edit Dialog                bool       false  
   backgroundOutline           Background Outline         bool       false  设置是否在高亮时显示背景。
   bendable                    Bendable                   bool        true  设置控制点是不可以移动以使用联接线弯曲。
   movable                     Movable                    bool        true  设置是否可以移动。
   cloneable                   Cloneable                  bool        true  设置是否可以通过 Ctrl+Drag 来克隆。
   deletable                   Deletable                  bool        true  设置是否可以删除。
   noJump                      No Jumps                   bool       false  
   ignoreEdge                  Ignore Edge                bool       false  
   orthogonalLoop              Loop Routing               bool       false  设置在没有航点（waypoints）或锚点的情况下使用 STYLE_LOOP 布线或者不布线。
   orthogonal                  Orthogonal                 bool       false  
   =========================== ========================== ======= ========= ===============================

   以下属性专用于连线的动画效果，只有在 Style 面板中激活了 Flow Animation 功能才可以使用，
   边线动画功能的属性名称为 `flowAnimation`。

   =========================== ========================== ======= ========= ===============================
   name                        display name               type    default   description
   =========================== ========================== ======= ========= ===============================
   flowAnimationDuration       Flow Duration              int          500  
   flowAnimationTimingFunction Flow Timing                enum    'linear'  enumList: ['linear' (Linear), 'ease' (Ease), 'ease-in' (Ease-in), 'ease-out' (Ease-out), 'ease-in-out' (Ease-in-out)]
   flowAnimationDirection      Flow Direction             enum    'normal'  enumList: ['normal' (Normal), 'reverse' (Reverse), 'alternate' (Alternate), 'alternate-reverse' (Alternate-Reverse)]
   =========================== ========================== ======= ========= ===============================

   边线的风格由 `mxEdgeStyle` 控制，每个风格对应一个控制边线渲染的函数。默认提供了多种风格，用户
   也可以实现并注册（二次开发）自定义边线风格。边线风格属性名为 `edgeStyle`，通过不同的属性值关联
   风格边线渲染控制函数。Draw.io 没有提供 UI 来设置边线风格，但可以通过 Edit -> Edit Style...
   直接修改 Style 属性数据来改变边线的风格。也可以使用样式数据的复制、粘贴功能。此外，有两个属性用于
   指定顶点、边线的默认风格，它们属于编辑器配置选项（Editor.configure）：

   *  defaultVertexStyle 设置形状的默认样式。
   *  defaultEdgeStyle 设置连接器的默认样式。

   `mxEdgeStyle API <https://jgraph.github.io/mxgraph/docs/js-api/files/view/mxEdgeStyle-js.html>`__

   ============================ ========================= ============================ =====================
   mxEdgeStyle style function   mxConstants symbols       edgeStyle                    Summary
   ============================ ========================= ============================ =====================
   mxEdgeStyle.EntityRelation   EDGESTYLE_ENTITY_RELATION 'entityRelationEdgeStyle'    Implements an entity relation style for edges (as used in database schema diagrams).
   mxEdgeStyle.Loop             EDGESTYLE_LOOP            'loopEdgeStyle'              Implements a self-reference, aka. loop.
   mxEdgeStyle.ElbowConnector   EDGESTYLE_ELBOW           'elbowEdgeStyle'             Uses either SideToSide or TopToBottom depending on the horizontal flag in the cell style.
   mxEdgeStyle.SideToSide       EDGESTYLE_SIDETOSIDE      'sideToSideEdgeStyle'        Implements a vertical elbow edge.
   mxEdgeStyle.TopToBottom      EDGESTYLE_TOPTOBOTTOM     'topToBottomEdgeStyle'       Implements a horizontal elbow edge.
   mxEdgeStyle.SegmentConnector EDGESTYLE_SEGMENT         'segmentEdgeStyle'           Implements an orthogonal edge style.
   mxEdgeStyle.OrthConnector    EDGESTYLE_ORTHOGONAL      'orthogonalEdgeStyle'        Implements a local orthogonal router between the given cells.
   ============================ ========================= ============================ =====================


Group and mxfile
================

   参考源代码文件如下，Graph Editor 是早期实现：

   *  https://github.com/jgraph/drawio/blob/dev/src/main/webapp/js/diagramly/Editor.js
   *  https://github.com/jgraph/drawio/blob/dev/src/main/webapp/js/grapheditor/Graph.js

   Draw.io 的分组操作逻辑是基于 mxGraph 公开的一系列 API 实现的，用户操作图表编辑时就相当于执行
   这些 API 方法。这些 API 方法包括：

   *  mxGraph.groupCells(group, border, cells)
   *  mxGraph.ungroupCells(cells)
   *  mxGraph.foldCells(collapse, recurse, cells)
   *  mxGraph.enterGroup(cell)
   *  mxGraph.exitGroup()

   Draw.io 中的每个图表对象都对对应一个 ``<mxCell>`` 节点，当然这个节点的 style 属性中包含
   container=1 属性值，就表示这是一个容器节点。整个 drawio 文档就是使用 ``<mxCell>`` 节点
   表示的容器与子图表的关联树。以下代码片段包含了基本的 drawio 文档结构：

   图表模型（graph model）结构有以下几个属性：

   *  图容器根元素 `<root>` 用于包含图层，是所有图层的根元素。
   *  图层可以包含图表模型中的任意个元素，这些元素包括顶点（vertices），边（edges）和群组（groups）。
   *  群组（Groups）可以包含任意数量的图表模型中的元素。

   ================= ===========================================================
   Node              Description
   ================= ===========================================================
   `<mxfile>`        Draw.io 图表文档的根节点。
   `<diagram>`       图表文档中的分页节点。
   `<mxGraphModel>`  mxGraph 绘图框架中的核心模型节点，包含是描述图表结构数据。
   `<root>`          核心模型的根（root）节点。
   `<mxCell>`        核心图表对象，对应的编程语言中的对象，是公开绘图 API 的主要对象。
   `<object>`        通用对象节点。
   ================= ===========================================================

   *  `mxGraph API Specification <https://jgraph.github.io/mxgraph/docs/js-api/files/index-txt.html>`__

   .. code:: xml

      <mxfile host="Electron" agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64)">
      <diagram name="Page-1" id="7nw-SgyZgNwATNYc28-y">
         <mxGraphModel dx="1466" dy="914" grid="0" gridSize="10" guides="1" 
            tooltips="1" connect="1" arrows="1" fold="1" 
            page="0" pageScale="1" pageWidth="827" pageHeight="1169" math="1" shadow="0">
            <root>
            <mxCell id="0" />
            <mxCell id="1" parent="0" value="A Group" style="html=1;align=left;container=1;"  />
            <object id="2" label="绝对零度为 -273.15°C。" var="my varaible&#xa;next line" placeholders="1" >
               <mxCell style="text;whiteSpace=wrap;align=left;verticalAlign=middle;fontSize=5;points=[[0.52,1,0,0,3]];" parent="1" vertex="1">
                  <mxGeometry x="75" y="2.5" width="381" height="75" as="geometry" />
               </mxCell>
            </object>
            </root>
         </mxGraphModel>
      </diagram>
      <diagram name="Page-2" id="9Ie5Bg91A8kF_RSLnxYR">
         <mxGraphModel ... >
            <root>
            <mxCell id="0" />
            <mxCell id="1" parent="0" />
            </root>
         </mxGraphModel>
      </diagram>
      </mxfile>

   图表对象 `<mxCell>` 通过 parent 属性来指示归属于哪个容器。页面的顶层是默认的容器，一般在文档
   中表示为 `<mxCell id="0" />`，每个页面的图表 ID 独立于各自的页面，也就是在在不同页面的图表
   可以使用相同的 ID，但是同页内的图表不可以。用户将图表拖入一个容器时，注意容器的边框出现高亮边界，
   程序就会设置它的 parent 属性为这个容器的 ID，表示归属于此容器。当图表被拖出这个容器时，parent
   就会更新指向最后所在的容器。如果没有放在任何容器，那么就归属于页面这个默认的容器。

   图表对象有多处可以保存文本内容：

   *  `<mxCell>` value 属性，保存用户对象数据（User Objects）；
   *  `<object>` label 属性，此节点属于用户对象数据，draw.io 基于 mxGraph 扩展出 placeholders 等功能；
   *  `<UserObject>` label 属性，等价于 `<object>` 节点。

   当用户向选中的对象粘贴文本内容时，就会将数据写入这些属性中。当用户粘贴的是图表对象时，这个新增的图表
   会出现它被复制/剪切下来时的位置。即使它可以会出现在原来的容器空间之中，但这依然会作为新创建图表对象
   添加到页面中，并且归属于页面这个容器。因此，通过剪切、粘贴可以让容器中的对象脱离容器，但其位置不变。
   基于 mxGraph 这种通过 parent 属性实现层级关联的逻辑，用户可以反复创建、解散群组，而不用担心文档
   中的 `<mxCell>` 节点关系会变得异常复杂。这一点与 SVG 通过 `<svg>` 和 `<g>` 等节点层级实现群组
   的逻辑不同。对群组操作时，可以使用配合快捷键在执行父级、子级内容：

   ============================ =============================================
   (Shift+)Tab                  Select next / previous
   Alt+Shift+P / Alt+Tab        Select parent
   Alt+Shift+X / C / S          Select (all) children / siblings
   Alt+Click                    Select cell below
   ============================ =============================================

   图表对象可以在 value 属性中保存文本，并且支持 HTML 代码，属性值就是经过转义后的 HTML 代码。
   当用户粘贴文本内容时，就会向这个属性写入编码后的数据。这种文本对应样式面板中的 Formatted Text，
   如果取消这个格式化文本功能，那么就会移除额外的 HTML 标签，转变成纯文本。Text 属性面板中的清理
   格式（Clear formatting）按钮的功能也类似，这个清理格式还一点差别：它会清理当前图表上设置的文本
   样式，而不仅仅是内嵌的 HTML 格式。清理格式后，就是编辑器默认配置的样式设置。

   对群组编辑，比如调整大小，会按比例影响好子层图表。并且这种影响直接修改子层图表的属性实现，不会因为
   后续子层图表脱离容器后消失。当将图表插入群组时，编辑器会按这个图表的几何尺寸修改容器的大小，并且只
   向右下角方向延伸，即增加 width 和 height 属性值，而不修改坐标值。当子层图表移出容器后，容器会
   保持尺寸不变，可以通过属性面板中的 `Arrange -> Autosize (Ctrl+Shift+Y)` 实现尺寸收缩、扩张。
   如果不想要自动改变子层对象的尺寸，那么可以修改容器对象的 `Style -> Resize Children` 属性。

   用户自定义属性使用一个 ``<object>`` 节点来保存，也就是一个通用对象，用户自定义属性名和值对应
   这个节点的属性与值。然后在这个节点内部再嵌入一个 ``<mxCell>`` 节点来保存图表数据。Draw.io
   可以复制、粘贴自定义属性或者数据，这些数据可以通过这种操作在不同的 ``<object>`` 节点之间传递。

   Draw.io 作为一个擅长图表绘制的工具，它只提供了一个铅笔（Freehand）工具给用户进行“自由”的使用线条
   作画，因此它也可以用来画简笔画，太不擅长一般意义上的数字绘画。绘画的线条虽然是由多个采样点组成，但是
   并没有向用户提供更多修改线条的功能，线条画好后就会作为模板图形（stencil）编码后保存在 `<mxCell>`
   的样式属性中，绘图的每一条线都对应生成一个 `<mxCell>`，样式格式为 `style="shape=stencil(...);"`。
   你甚至可以挑战一下自己，使用鼠标来写字，不过有个诀窍：不要看着屏幕写，要想着手部的运动，重点在于感受
   手部的运动、控制感。因此控制鼠标与笔杆的差别主要是手臂运动。当然，有绘图板更好，但是自由铅笔工具不支
   持压感设备。

   模板图形 `mxStencil` 是底层定义的基于 XML 节点描述的图形，通过 Draw.io 菜单 Insert -> Advanced -> Shape
   插件的自定义图形就是模板图形。另外，还有大量自带的模板图形，它们打包在 stencil.min.js 脚本中，
   这些模板图形由 `Graph` 通过一个  `mxStencilRegistry` 外部扩展方法 `loadStencil()` 来加载：

   .. code:: javascript

      // Loads the given stencil set
      mxStencilRegistry.loadStencilSet = function(stencilFile, postStencilLoad, force, async)

            xmlDoc = mxStencilRegistry.loadStencil(stencilFile);
            mxStencilRegistry.packages[stencilFile] = xmlDoc;

   只是 Draw.io 的笔刷采样使用了平滑过滤，默认设置为 4 级，不能接收运动太快的书写。可以点击画笔
   面板的齿轮图标修改平滑度（1 ~ 20）。当前画笔总共就三个属性可供用户修改，除了平滑度以外，还笔迹
   粗细及颜色。

   Draw.io 所有图形都可以称为 shape，但是内置的图形有它自己的图形名称，而有些图形不使用 shape
   这个样式属性，比如线条和箭头，又比如 Misc -> Title 模板图形直接使用 text 表示其存放文本图形。
   列表出类似，只不过将 HTML 编码保存。大多数据保存文本内容的图形都属性 text 类型。其它一些模板图形
   使用专用名称，比如 shape=doubleEllipse 表示一个双线椭圆，图形的名称代表的是图形绘制形式。

   表格包含了三种图表：

   *  shape=table 表格，默认为容器对象；
   *  shape=tableRow 行，默认为容器对象；
   *  shape=partialRectangle 单元格；

   虽然，表格的是容器对象，但是它作为专用容器，不能直接将其它图表拖入到这些容器内。只能先将单元格
   转换为容器后，再插入其它图表。


/🟡Draw.io Blogs
=======================================

   2024

   | Updated Citrix shape library for clean infrastructure diagrams | https://www.drawio.com/blog/citrix-diagrams-md
   | What makes a good UML diagram tool? | https://www.drawio.com/blog/uml-diagram-tools
   | Align connectors easily with a waypoint shape | https://www.drawio.com/blog/aligned-connectors
   | Showing probabilities and risk in diagrams | https://www.drawio.com/blog/probability-risk-diagrams
   | Step through and explore diagrams interactively | https://www.drawio.com/blog/explore-diagrams
   | draw.io updated for Atlassian Jira Software 10.0 | https://www.drawio.com/blog/drawio-jira10
   | Diagrams for retail - customer paths and planograms | https://www.drawio.com/blog/retail-diagrams
   | draw.io for Confluence Data Center 9.0 | https://www.drawio.com/blog/drawio-confluence-dc9
   | Change the style of text in draw.io | https://www.drawio.com/blog/style-text
   | What's the difference between a process map, process model and a flowchart? | https://www.drawio.com/blog/process-map-flowchart
   | New built-in SAP shape library for BTP solution diagrams | https://www.drawio.com/blog/sap-diagrams
   | Snap to grid and other helpful alignment tools in draw.io | https://www.drawio.com/blog/snap-to-grid
   | How many shapes do you need to draw technical diagrams? | https://www.drawio.com/blog/technical-diagramming-shapes
   | How to write better queries for smart template diagrams | https://www.drawio.com/blog/write-query-generate-diagram
   | Mermaid in draw.io updated to support ELK layout | https://www.drawio.com/blog/mermaid-elk-layout
   | All the tool panels in draw.io | https://www.drawio.com/blog/drawio-tool-panels
   | Privacy policy updates | https://www.drawio.com/blog/policy-updates
   | Case study - Requirements flows for a new website | https://www.drawio.com/blog/requirements-flows
   | Collaborative editing in draw.io in Confluence DC | https://www.drawio.com/blog/collaborative-editing-confluence-dc
   | Improve contrast and high contrast modes in draw.io | https://www.drawio.com/blog/high-constrast-mode
   | Technical diagrams for manufacturing - process engineering shape library | https://www.drawio.com/blog/process-engineering-shapes
   | Add draw.io diagrams and boards to your Monday Workspace | https://www.drawio.com/blog/drawio-monday
   | More flow animation styles for connectors | https://www.drawio.com/blog/connector-animation-styles
   | Vertical text for Japanese, Chinese and Korean | https://www.drawio.com/blog/vertical-text
   | Customise shape shadows to add impact to your diagrams | https://www.drawio.com/blog/shape-shadows
   | draw.io in Confluence DC - full version support and regular updates | https://www.drawio.com/blog/drawio-confluence-dc
   | draw.io in Confluence Cloud - features and security by design | https://www.drawio.com/blog/drawio-features-confluence-cloud
   | Configure the draw.io template library to use custom template diagrams | https://www.drawio.com/blog/configure-template-library
   | Diagrams in software design - forward or backward design? | https://www.drawio.com/blog/diagrams-software-design
   | Create and share custom template libraries with draw.io | https://www.drawio.com/blog/custom-template-libraries
   | Migrating with draw.io from Confluence Data Center/Server to Confluence Cloud | https://www.drawio.com/blog/confluence-drawio-migration
   | Draw tree diagrams to show hierarchies | https://www.drawio.com/blog/draw-tree-diagrams

   2023

   | The many types of technical diagrams | https://www.drawio.com/blog/types-of-technical-diagrams
   | Can you draw graphs and charts in draw.io? | https://www.drawio.com/blog/charts-in-drawio
   | draw.io is sponsoring FOSDEM 2024 | https://www.drawio.com/blog/fosdem24-sponsor
   | Useful medical diagrams for patients | https://www.drawio.com/blog/useful-medical-diagrams
   | Diagramming tools from simple to complex | https://www.drawio.com/blog/diagramming-tools
   | Use your favourite location or platform to save your diagram files | https://www.drawio.com/blog/save-diagram-files
   | Salesforce shape library for system infrastructure and business diagrams | https://www.drawio.com/blog/salesforce-shapes
   | Export diagrams to WebP format images | https://www.drawio.com/blog/export-webp
   | Three ways to add watermarks to draw.io diagrams | https://www.drawio.com/blog/watermark-diagrams
   | Make sense of confusing sentences with sentence trees and Reed-Kellogg diagrams | https://www.drawio.com/blog/sentence-trees
   | Use a waypoint shape to connect an association class in UML class diagrams | https://www.drawio.com/blog/uml-association-class
   | Swap shapes and connectors in draw.io | https://www.drawio.com/blog/swap-shapes
   | UML component diagrams show the structure of a system | https://www.drawio.com/blog/uml-component-diagrams
   | Create a variety of T-charts in draw.io | https://www.drawio.com/blog/t-charts
   | Use grab handles to move table rows | https://www.drawio.com/blog/table-rows
   | Draw freehand infographics in draw.io | https://www.drawio.com/blog/draw-infographics
   | How to create data flow diagrams in draw.io | https://www.drawio.com/blog/data-flow-diagrams
   | Explain system roles and responsibilities in diagrams | https://www.drawio.com/blog/role-responsibility-diagrams
   | New keyboard shortcuts in draw.io | https://www.drawio.com/blog/new-keyboard-shortcuts
   | Updates to draw.io dark mode diagrams improve readability | https://www.drawio.com/blog/dark-mode-diagrams
   | Share diagrams and edit them in draw.io | https://www.drawio.com/blog/share-to-edit-diagrams
   | Gantt charts to plan and track anything | https://www.drawio.com/blog/gantt-charts
   | draw.io automatically applies your Jira Cloud theme to diagram thumbnails | https://www.drawio.com/blog/dark-theme-drawio-jira
   | draw.io for diagrams on all platforms | https://www.drawio.com/blog/drawio-multiplatform
   | Switching tools - how Gliffy and draw.io are different | https://www.drawio.com/blog/gliffy-to-drawio
   | How to draw and use concept maps | https://www.drawio.com/blog/concept-maps
   | Draw interface mockups and store them in Jira issues | https://www.drawio.com/blog/mockups-in-jira
   | Use lists in diagrams to present text information clearly | https://www.drawio.com/blog/list-shapes
   | A history of diagram search terms | https://www.drawio.com/blog/search-for-diagrams
   | Explain feature flag DevOps easily with diagrams | https://www.drawio.com/blog/feature-flag-devops
   | Diagrams for teachers | https://www.drawio.com/blog/diagrams-for-teachers
   | Smart diagram generation for more template diagrams | https://www.drawio.com/blog/smart-diagram-generation
   | Using diagrams with GitLab | https://www.drawio.com/blog/gitlab-wiki-integration
   | More tips to draw faster in draw.io | https://www.drawio.com/blog/draw-faster-diagrams
   | Use a custom shape library from the web | https://www.drawio.com/blog/public-custom-libraries
   | Use PlantUML in draw.io | https://www.drawio.com/blog/plantuml
   | Diagrams in tables with container cells | https://www.drawio.com/blog/container-tables
   | Include diagrams in Notion templates with the draw.io extension | https://www.drawio.com/blog/diagram-notion-templates
   | Work with default styles | https://www.drawio.com/blog/default-styles
   | Feature flag development with tags in gitflow diagrams | https://www.drawio.com/blog/gitflow-feature-flags
   | Share diagram data in an image file | https://www.drawio.com/blog/diagram-data-image-formats
   | Thanks for supporting draw.io in 2022 | https://www.drawio.com/blog/end-of-year-2022

   2022

   | New simple mode for the diagram editor | https://www.drawio.com/blog/simple-mode-diagrams
   | Change connector arrows in draw.io | https://www.drawio.com/blog/change-connector-arrows
   | Use the new sensitive label to stop draw.io listing a diagram in the recent diagrams list and search results | https://www.drawio.com/blog/drawio-sensitive-label
   | Draw Azure architecture diagrams with updated shapes | https://www.drawio.com/blog/azure-diagrams
   | Draw UML activity diagrams | https://www.drawio.com/blog/uml-activity-diagrams
   | Add labels to any type of diagram | https://www.drawio.com/blog/label-any-diagram
   | Create data-driven diagrams with draw.io | https://www.drawio.com/blog/data-driven-diagrams
   | Switch between classic, simple and dark modes | https://www.drawio.com/blog/change-editor-mode
   | Generate diagrams from code | https://www.drawio.com/blog/diagrams-from-code
   | Diagrams for  a better incident response | https://www.drawio.com/blog/diagrams-incident-response
   | Use emoji in labels and tooltips | https://www.drawio.com/blog/emoji-labels-tooltips
   | Draw a UML use case diagram | https://www.drawio.com/blog/uml-use-case-diagrams
   | Straighten connectors in diagrams | https://www.drawio.com/blog/straighten-connectors
   | Store diagram files on cloud platforms | https://www.drawio.com/blog/cloud-storage-diagrams
   | Run your own draw.io server with Docker | https://www.drawio.com/blog/diagrams-docker-app
   | SysML vs UML - what's the difference? | https://www.drawio.com/blog/sysml-vs-uml
   | The many faces of draw.io | https://www.drawio.com/blog/diagrams-other-names
   | Draw a UML state machine diagram | https://www.drawio.com/blog/uml-state-diagrams
   | Use the diagram editor in dark mode | https://www.drawio.com/blog/dark-mode-diagram-editor
   | Translate diagrams in the draw.io editor | https://www.drawio.com/blog/translate-diagrams
   | Diagrams for marketing analysts - 5C, SWOT &amp; PEST | https://www.drawio.com/blog/marketing-analysis-diagrams
   | Increase the drawing canvas space | https://www.drawio.com/blog/increase-drawing-canvas
   | Create infographics and slides using layered shapes | https://www.drawio.com/blog/infographics-layered-shapes
   | Example diagram gallery for draw.io | https://www.drawio.com/blog/example-diagrams-gallery
   | Biology and chemistry clipart libraries for draw.io with Bioicons | https://www.drawio.com/blog/biochem-clipart-in-diagrams
   | Create a mindmap from text with PlantUML | https://www.drawio.com/blog/plantuml-mindmaps-from-text
   | Venn diagrams and templates | https://www.drawio.com/blog/venn-diagrams
   | Create a sequence diagram | https://www.drawio.com/blog/sequence-diagrams
   | Configure the draw.io app in Atlassian Confluence Cloud | https://www.drawio.com/blog/configure-drawio-app
   | Edit shape properties in diagrams | https://www.drawio.com/blog/shape-properties
   | What's the difference between diagrams, charts and graphs? | https://www.drawio.com/blog/diagrams-charts-graphs
   | Gliffy vs draw.io - concurrent editing | https://www.drawio.com/blog/gliffy-vs-drawio
   | Draw diagrams on a touch screen | https://www.drawio.com/blog/touch-screen-diagrams
   | Draw structural formulas in draw.io | https://www.drawio.com/blog/draw-structural-formulas
   | Create UML class diagrams | https://www.drawio.com/blog/uml-class-diagrams
   | Collaborate in real time using draw.io | https://www.drawio.com/blog/real-time-collaboration-diagrams
   | Updated shapes for GCP and AWS network diagrams | https://www.drawio.com/blog/gcp-aws-shapes-network-diagrams
   | Diagram in Lark with our open-source editor | https://www.drawio.com/blog/diagrams-in-lark
   | Draw timelines and roadmaps in draw.io | https://www.drawio.com/blog/timeline-diagrams
   | Diagram faster using mouse + keyboard shortcuts | https://www.drawio.com/blog/modifier-shortcuts-in-diagrams
   | Draw circular flowcharts | https://www.drawio.com/blog/circular-flowcharts
   | Edit the connection points on a shape | https://www.drawio.com/blog/edit-connection-points
   | Number shapes in a diagram | https://www.drawio.com/blog/number-shapes
   | Reporting issues, suggesting features and upvoting | https://www.drawio.com/blog/recent-updates-support
   | Reviews from real draw.io users | https://www.drawio.com/blog/reviews-customer-feedback

   2021

   | New draw.io features and updates in 2021 | https://www.drawio.com/blog/updated-in-2021
   | Clear the draw.io cache to use the newest build | https://www.drawio.com/blog/clear-diagrams-net-cache
   | Ishikawa diagrams for root cause analyses | https://www.drawio.com/blog/ishikawa-diagrams
   | Select shapes and connectors with keyboard shortcuts | https://www.drawio.com/blog/shortcut-select-shapes
   | Flowcharts in Confluence | https://www.drawio.com/blog/flowcharts-confluence
   | Diagram only in selected GitHub repositories | https://www.drawio.com/blog/single-repository-diagrams
   | draw.io for Notion Chrome extension | https://www.drawio.com/blog/drawio-notion
   | Complex diagramming on an online whiteboard | https://www.drawio.com/blog/complex-diagrams-whiteboard
   | Import diagrams from Lucidchart EDU to draw.io | https://www.drawio.com/blog/import-lucidchart-edu
   | What can you do with shape data in diagrams? | https://www.drawio.com/blog/shape-data
   | Import diagrams from Gliffy Online to draw.io | https://www.drawio.com/blog/import-gliffy-online
   | Edit diagrams directly in GitHub with draw.io and github.dev | https://www.drawio.com/blog/edit-diagrams-with-github-dev
   | Use tags in diagrams to select, hide and display related shapes and connectors | https://www.drawio.com/blog/tags-in-diagrams
   | Embed diagrams in WordPress as SVG | https://www.drawio.com/blog/diagrams-in-wordpress
   | Using pages as backgrounds | https://www.drawio.com/blog/background-pages-diagrams
   | How to use sketch.diagrams.net as an online whiteboard | https://www.drawio.com/blog/sketch-online-whiteboard
   | Plan, design and track projects with diagrams in remote teams | https://www.drawio.com/blog/project-planning-diagrams
   | End of support for IE 11 | https://www.drawio.com/blog/ie11-end-of-life
   | Differences between draw.io for Confluence Cloud and Data Center/Server | https://www.drawio.com/blog/atlassian-cloud-hosted-comparison
   | An online whiteboard for Confluence with draw.io | https://www.drawio.com/blog/online-whiteboard-confluence
   | draw.io is now an Atlassian Cloud Fortified app | https://www.drawio.com/blog/drawio-atlassian-cloud-fortified
   | Export images of diagrams directly from the lightbox viewer | https://www.drawio.com/blog/export-from-diagram-viewer
   | Draw dependency graphs in draw.io | https://www.drawio.com/blog/dependency-graphs
   | Move shapes forwards and backwards on the drawing canvas | https://www.drawio.com/blog/move-shapes-forwards-backwards
   | Change the drawing canvas grid | https://www.drawio.com/blog/change-drawing-canvas
   | Diagramming in a free Confluence Cloud instance | https://www.drawio.com/blog/confluence-cloud-free-diagrams
   | Template diagrams with previews, subcategories and search | https://www.drawio.com/blog/template-diagrams
   | Embed Confluence diagrams in Jira Cloud with the draw.io app | https://www.drawio.com/blog/confluence-diagrams-in-jira
   | Draw freehand shapes and annotate diagrams | https://www.drawio.com/blog/freehand-drawing
   | New draw.io Board macro for whiteboard-style diagrams in Confluence Cloud | https://www.drawio.com/blog/drawio-board-macro
   | Create a remote kanban board with draw.io | https://www.drawio.com/blog/kanban-boards
   | Embed diagrams in PowerPoint | https://www.drawio.com/blog/office-diagrams
   | Join connectors with the waypoint shape | https://www.drawio.com/blog/waypoint-shape
   | BPMN 2.0 shapes for detailed process flows and choreography models | https://www.drawio.com/blog/bpmn-2-0
   | Choose a different draw.io editor theme | https://www.drawio.com/blog/diagram-editor-theme
   | Draw and style connectors in draw.io | https://www.drawio.com/blog/use-connectors
   | Work with entity relationship table shapes in draw.io | https://www.drawio.com/blog/entity-relationship-tables
   | Use swimlanes with flowcharts to show who does each step | https://www.drawio.com/blog/swimlane-diagrams
   | Story mapping | https://www.drawio.com/blog/story-mapping
   | Use draw.io with Google Classroom | https://www.drawio.com/blog/google-classroom-diagrams
   | Introducing data governance and lockdown configuration options | https://www.drawio.com/blog/data-governance-lockdown
   | Advantages of a bring-your-own-storage model | https://www.drawio.com/blog/secure-diagramming-storage
   | UML 2.5 shape library with updated shapes | https://www.drawio.com/blog/uml-2-5
   | Create an interactive diagram and toggle layers with custom links | https://www.drawio.com/blog/interactive-diagram-layers

   2020

   | Embed diagrams into Notion from draw.io | https://www.drawio.com/blog/embed-diagrams-notion
   | Insert a diagram from specially formatted CSV data | https://www.drawio.com/blog/insert-from-csv
   | Embed diagrams in Confluence Data Center and Server | https://www.drawio.com/blog/embed-diagrams-confluence-server
   | Align text labels inside and outside shapes | https://www.drawio.com/blog/text-alignment
   | Rotate shapes, connectors and connector labels | https://www.drawio.com/blog/rotate-shapes
   | Manage your budget moving to Confluence Cloud | https://www.drawio.com/blog/gliffy-confluence-cloud-prices
   | Search for diagrams in Confluence Cloud and Server | https://www.drawio.com/blog/confluence-diagram-search
   | How to install and insert a diagram in Confluence Cloud | https://www.drawio.com/blog/embed-diagrams-confluence-cloud
   | Automatic layout shapes for flow charts, tree diagrams and mind maps | https://www.drawio.com/blog/automated-layout-shapes
   | Collaborative editing in draw.io for Confluence Cloud | https://www.drawio.com/blog/collaborative-editing-confluence-cloud
   | Use AWS icons to create a free Amazon architecture diagram | https://www.drawio.com/blog/aws-diagrams
   | Embed a diagram in GitHub markdown | https://www.drawio.com/blog/embed-diagrams-github-markdown
   | Create C4 models and diagrams | https://www.drawio.com/blog/c4-modelling
   | Maths equations in diagrams | https://www.drawio.com/blog/maths-in-diagrams
   | Double click and select a shape to add it | https://www.drawio.com/blog/double-click-shortcut
   | Work faster with the shape libraries using keyboard shortcuts | https://www.drawio.com/blog/shortcut-shape-library
   | Support for hand-drawn diagrams with rough.js | https://www.drawio.com/blog/rough-style
   | Improved table shapes | https://www.drawio.com/blog/tables
   | Work with waypoints on connectors | https://www.drawio.com/blog/waypoints-connectors
   | Create diagrams directly in VS Code | https://www.drawio.com/blog/embed-diagrams-vscode
   | Create a rack diagram in draw.io | https://www.drawio.com/blog/rack-diagrams
   | Team diagramming in all departments | https://www.drawio.com/blog/team-diagramming
   | Go to diagram.new to create a new diagram | https://www.drawio.com/blog/diagram-new
   | Simple draw.io embedding walk-through | https://www.drawio.com/blog/embedding-walkthrough
   | Embedded XML in PNG image files | https://www.drawio.com/blog/xml-in-png
   | Export diagrams to PDF files | https://www.drawio.com/blog/export-pdf
   | Use Mermaid syntax to create diagrams | https://www.drawio.com/blog/mermaid-diagrams
   | Work with custom shape libraries | https://www.drawio.com/blog/custom-libraries
   | Network and infrastructure diagrams | https://www.drawio.com/blog/network-diagrams
   | Use keyboard shortcuts to work faster with styles | https://www.drawio.com/blog/shortcut-styles
   | Use org charts to categorise data and show hierarchies | https://www.drawio.com/blog/org-charts
   | Create floorplans and layouts | https://www.drawio.com/blog/floorplans
   | Reference implementation moving to app.diagrams.net | https://www.drawio.com/blog/move-diagrams-net
   | Diagrams attached to Jira Server issues are now versioned | https://www.drawio.com/blog/jira-server-diagram-versions
   | How to create a gitflow diagram | https://www.drawio.com/blog/gitflow-diagram

   2019

   | How to use diagrams in Google Docs | https://www.drawio.com/blog/diagrams-google-docs
   | Insert from text to create tree and entity diagrams | https://www.drawio.com/blog/insert-from-text
   | Work with placeholders in labels and tooltips | https://www.drawio.com/blog/placeholders
   | Using external or custom fonts in draw.io | https://www.drawio.com/blog/external-fonts
   | draw.io in many languages = diagramming for everyone | https://www.drawio.com/blog/help-translate-diagrams
   | Analysing vulnerabilities with threat modelling using draw.io | https://www.drawio.com/blog/threat-modelling
   | We are sponsoring FOSDEM 2020 | https://www.drawio.com/blog/fosdem-sponsor
   | Add multiple pages to your diagrams | https://www.drawio.com/blog/multiple-page-diagrams
   | Use draw.io desktop to diagram offline | https://www.drawio.com/blog/diagrams-offline
   | Updates to the draw.io desktop app | https://www.drawio.com/blog/desktop-updates
   | Secure GitLab support with direct client authorisation | https://www.drawio.com/blog/gitlab-support
   | Secure GitHub support via OAuth | https://www.drawio.com/blog/github-support
   | Share diagrams via Google public links | https://www.drawio.com/blog/share-diagrams-via-google
   | Example diagrams are on GitHub | https://www.drawio.com/blog/example-diagrams-github
   | Export from Cloudockit to a .drawio diagram | https://www.drawio.com/blog/cloudockit-to-drawio
   | Insert from SQL to create an ER diagram | https://www.drawio.com/blog/insert-sql
   | Your diagram data is secure and private | https://www.drawio.com/blog/data-protection
   | Use Cloudcraft to export your AWS architecture to a .drawio diagram | https://www.drawio.com/blog/drawio-aws-cloudcraft
   | draw.io supports Veeam stencils | https://www.drawio.com/blog/veeam-stencils

   2018

   | Several ways to connect shapes | https://www.drawio.com/blog/connect-shapes
   | Placeholder labels respect scope | https://www.drawio.com/blog/placeholder-scope
   | Alt+Ctrl+Shift+drag to move an area of your diagram | https://www.drawio.com/blog/shortcut-move-area
   | draw.io import formats and sources | https://www.drawio.com/blog/import-formats
   | Alt+Shift+Select to deselect shapes | https://www.drawio.com/blog/shortcut-deselect-shapes
   | Disable resize children to resize grouped shapes individually | https://www.drawio.com/blog/disable-resize-children
   | Export diagrams as SVG images | https://www.drawio.com/blog/export-svg
   | Snap connectors to an anchor point | https://www.drawio.com/blog/snap-to-point
   | Export a diagram to HTML | https://www.drawio.com/blog/export-html
   | Publish a diagram as a link from Google Drive | https://www.drawio.com/blog/publish-link
   | Using the diagrams.net Chrome app | https://www.drawio.com/blog/drawio-chrome-app
   | Click to add shapes to the drawing canvas | https://www.drawio.com/blog/quick-add-shapes
   | Export a diagram to a URL | https://www.drawio.com/blog/export-url
   | Alt+shift+arrow keys to clone and connect shapes | https://www.drawio.com/blog/shortcut-clone-connect
   | Diagrams in Google Docs now support high resolution images | https://www.drawio.com/blog/high-resolution-images-google-docs
   | Use the online diagram viewer to share .drawio, VSDX, Gliffy, and Lucidchart diagrams | https://www.drawio.com/blog/online-diagram-viewer
   | Alt+drop to overlay shapes on containers | https://www.drawio.com/blog/shortcut-overlay-shapes
   | diagrams.net supports Google shared drives (Team Drives) | https://www.drawio.com/blog/google-shared-drives
   | Data privacy and Google Analytics | https://www.drawio.com/blog/google-analytics
   | Shift+toolbar delete to delete shapes and their connections | https://www.drawio.com/blog/shortcut-shift-delete




/🟡Draw.io FAQs
=======================================

   Confluence Cloud

   | Scramble all text in your diagram with the anonymize plugin | https://www.drawio.com/doc/faq/anonymize-plugin
   | Open the app management pages in Confluence and Jira Cloud | https://www.drawio.com/doc/faq/app-management-pages-confluence-jira-cloud
   | Find the draw.io app version and SEN in Confluence Cloud | https://www.drawio.com/doc/faq/app-version-confluence-cloud
   | Change the displayed diagram page and layers in an embedded draw.io diagram in Confluence Cloud | https://www.drawio.com/doc/faq/confluence-cloud-change-page-layers
   | Make a copy of a diagram in Confluence Cloud | https://www.drawio.com/doc/faq/confluence-cloud-copy-diagram
   | Edit an embedded diagram in Confluence Cloud | https://www.drawio.com/doc/faq/confluence-cloud-edit-embedded-diagram
   | Embed and reuse diagrams in Confluence Cloud | https://www.drawio.com/doc/faq/confluence-cloud-embed-diagram
   | Enable smart templates in draw.io for Confluence Cloud | https://www.drawio.com/doc/faq/confluence-cloud-enable-smart-templates
   | Disable the draw.io Lightbox on a diagram in Confluence Cloud | https://www.drawio.com/doc/faq/confluence-cloud-lightbox-disable
   | Move a diagram to another page in Confluence Cloud | https://www.drawio.com/doc/faq/confluence-cloud-move-diagram
   | Recover a diagram from an unpublished page in Confluence Cloud | https://www.drawio.com/doc/faq/confluence-cloud-recover-diagram-draft-page
   | Restore an older version of a diagram | https://www.drawio.com/doc/faq/confluence-cloud-restore-version
   | Change the draw.io macro Viewer Settings in Confluence Cloud | https://www.drawio.com/doc/faq/confluence-cloud-viewer-settings
   | Add and resolve comments on diagrams in Confluence | https://www.drawio.com/doc/faq/confluence-comments
   | Set the drawio-config space permissions in Confluence | https://www.drawio.com/doc/faq/confluence-drawio-config-space-permissions
   | Enable the Simple Viewer for draw.io diagrams in Confluence | https://www.drawio.com/doc/faq/confluence-simple-viewer
   | Set custom colours in Confluence Cloud | https://www.drawio.com/doc/faq/custom-colours-confluence-cloud
   | Use custom fonts in draw.io for Confluence Cloud | https://www.drawio.com/doc/faq/custom-fonts-confluence-cloud
   | Use custom libraries in Confluence Cloud | https://www.drawio.com/doc/faq/custom-libraries-confluence-cloud
   | Set custom default styles for shapes and connectors | https://www.drawio.com/doc/faq/custom-styles-confluence-cloud
   | Set up custom template diagrams in Confluence Cloud | https://www.drawio.com/doc/faq/custom-templates-confluence-cloud
   | Customise the draw.io interface | https://www.drawio.com/doc/faq/custom-ui-confluence-cloud
   | Data storage and flow of user data in draw.io for Confluence and Jira Cloud | https://www.drawio.com/doc/faq/data-flow-confluence-jira-cloud
   | Diagram not Found dialog | https://www.drawio.com/doc/faq/diagram-not-found-drawio-confluence-cloud
   | Get a community draw.io license for Confluence or Jira Cloud | https://www.drawio.com/doc/faq/drawio-community-license-cloud
   | Set up and customise draw.io in Confluence Cloud for administrators | https://www.drawio.com/doc/drawio-confluence-cloud-admin
   | Using draw.io in Confluence Cloud | https://www.drawio.com/doc/drawio-confluence-cloud
   | Work with draw.io diagrams in Confluence Cloud | https://www.drawio.com/doc/faq/embed-copy-move-diagrams-Confluence-Cloud
   | Embed a diagram from Google Drive into Confluence Cloud | https://www.drawio.com/doc/faq/embed-diagram-googledrive-confluence-cloud
   | Embed a diagram from OneDrive into Confluence Cloud | https://www.drawio.com/doc/faq/embed-diagram-onedrive-confluence-cloud
   | Get a free draw.io for Confluence Cloud license | https://www.drawio.com/doc/faq/free-license-confluence-cloud
   | License draw.io for Confluence and Jira Cloud correctly | https://www.drawio.com/doc/faq/license-drawio-confluence-jira-cloud
   | Mass import Gliffy diagrams to draw.io in Confluence Cloud | https://www.drawio.com/doc/faq/mass-import-gliffy-confluence-cloud
   | Migrate draw.io from one Confluence instance to another by updating PageIDs | https://www.drawio.com/doc/faq/migrate-drawio-confluence
   | Migrate draw.io from Confluence Data Center/Server to Confluence Cloud | https://www.drawio.com/doc/faq/migrate-drawio-dc-server-confluence-cloud
   | See the number of draw.io diagrams in a Confluence instance | https://www.drawio.com/doc/faq/number-of-diagams-in-confluence-instance
   | Solve PDF export problems under Confluence Cloud | https://www.drawio.com/doc/faq/pdf-problems-confluence-cloud
   | See shape metadata with the properties plugin | https://www.drawio.com/doc/faq/properties-plugin
   | Recover a diagram that was moved to another page in Confluence Cloud | https://www.drawio.com/doc/faq/recover-moved-diagram-confluence-cloud
   | Resize the draw.io viewer in Confluence Cloud | https://www.drawio.com/doc/faq/resize-viewer-confluence-cloud
   | Extract all of the text in your diagram | https://www.drawio.com/doc/faq/text-plugin
   | What happens to diagrams when the draw.io app license for Confluence or Jira Cloud becomes invalid | https://www.drawio.com/doc/faq/unlicensed-drawio-app-confluence-jira-cloud

   Confluence Data Center and Server

   | Manually add a draw.io license to Confluence Server | https://www.drawio.com/doc/faq/add-drawio-license-confluence-server
   | Scramble all text in your diagram with the anonymize plugin | https://www.drawio.com/doc/faq/anonymize-plugin
   | Change how diagram links open on Confluence Server | https://www.drawio.com/doc/faq/change-link-behaviour-confluence-server
   | Configure the draw.io editor | https://www.drawio.com/doc/faq/configure-diagram-editor
   | Configure server settings in draw.io for Confluence Server and Data Center | https://www.drawio.com/doc/faq/configure-drawio-confluence-server
   | Use a self-hosted JavaScript viewer in Confluence Server to export to HTML | https://www.drawio.com/doc/faq/configure-javascript-viewer-drawio-confluence-server
   | Add and resolve comments on diagrams in Confluence | https://www.drawio.com/doc/faq/confluence-comments
   | Set the drawio-config space permissions in Confluence | https://www.drawio.com/doc/faq/confluence-drawio-config-space-permissions
   | Rename a draw.io diagram in Confluence Data Center and Server | https://www.drawio.com/doc/faq/confluence-server-change-diagram-title
   | Change the filename of an attached diagram file in Confluence Data Center and Server | https://www.drawio.com/doc/faq/confluence-server-change-filename-diagram
   | Change displayed page and layers in the Simple Viewer in Confluence Data Center and Server | https://www.drawio.com/doc/faq/confluence-server-simple-viewer-change-page-layers
   | Enable the Simple Viewer for draw.io diagrams in Confluence | https://www.drawio.com/doc/faq/confluence-simple-viewer
   | Create a draw.io support zip in Confluence Server | https://www.drawio.com/doc/faq/create-confluence-server-support-zip
   | Get a quote for draw.io for Confluence Server | https://www.drawio.com/doc/faq/create-quote-drawio-confluence-server
   | Set up custom template diagrams in Confluence Server | https://www.drawio.com/doc/faq/custom-templates-confluence-server
   | Get a community draw.io license for Confluence or Jira Server | https://www.drawio.com/doc/faq/drawio-community-license-server
   | Embed a diagram from another page on Confluence Data Center and Server | https://www.drawio.com/doc/faq/embed-diagram-confluence-server
   | Import a CSV file from a URL to a draw.io diagram in Confluence Data Center and Server | https://www.drawio.com/doc/faq/embed-diagram-csv-confluence-server
   | Embed a diagram from Google Drive into Confluence Data Center and Server | https://www.drawio.com/doc/faq/embed-diagram-googledrive-confluence-server
   | Embed a diagram from OneDrive into Confluence Data Center and Server | https://www.drawio.com/doc/faq/embed-diagram-onedrive-confluence-server
   | Embed a diagram from a URL into a Confluence Data Center and Server page | https://www.drawio.com/doc/faq/embed-diagram-url-confluence-server
   | Enable additional debugging on draw.io for Confluence Server | https://www.drawio.com/doc/faq/enable-debugging-confluence-server
   | External image generation in draw.io for Confluence Server and Data Center | https://www.drawio.com/doc/faq/external-image-generation-drawio-confluence-server
   | Fix SVG images when using a proxy with Confluence Server | https://www.drawio.com/doc/faq/fix-svg-proxy-confluence-server
   | Enable Google Drive and OneDrive integration in Confluence Data Center and Server | https://www.drawio.com/doc/faq/googledrive-onedrive-integration-enable-confluence-server
   | Insert large images into diagrams on Confluence Server | https://www.drawio.com/doc/faq/insert-large-image-confluence-server
   | Install a specific version of draw.io in Confluence Server | https://www.drawio.com/doc/faq/install-drawio-version-confluence-server
   | Get license information for draw.io for Confluence or Jira Server | https://www.drawio.com/doc/faq/license-confluence-jira-server
   | License draw.io for Confluence or Jira Server | https://www.drawio.com/doc/faq/license-drawio-confluence-jira-server
   | Solve an Invalid License error in draw.io for Confluence or Jira Server | https://www.drawio.com/doc/faq/license-error-confluence-jira-server
   | Mass import Gliffy diagrams to draw.io in Confluence Data Center and Server | https://www.drawio.com/doc/faq/mass-import-gliffy-confluence-server
   | Migrate draw.io from Confluence Data Center/Server to Confluence Cloud | https://www.drawio.com/doc/faq/migrate-drawio-dc-server-confluence-cloud
   | Get a new draw.io evaluation license for Confluence Server | https://www.drawio.com/doc/faq/new-evaluation-license-drawio-confluence-server
   | See the number of draw.io diagrams in a Confluence instance | https://www.drawio.com/doc/faq/number-of-diagams-in-confluence-instance
   | Open .vsd, .vdx and .vss files in draw.io for Confluence Server | https://www.drawio.com/doc/faq/open-vsd-files-confluence-server
   | See shape metadata with the properties plugin | https://www.drawio.com/doc/faq/properties-plugin
   | Extract all of the text in your diagram | https://www.drawio.com/doc/faq/text-plugin
   | What happens to draw.io diagrams in Confluence Server when draw.io is not licensed | https://www.drawio.com/doc/faq/unlicensed-drawio-confluence-server

   Jira Cloud

   | Open the app management pages in Confluence and Jira Cloud | https://www.drawio.com/doc/faq/app-management-pages-confluence-jira-cloud
   | Find the draw.io app version and SEN in Jira Cloud | https://www.drawio.com/doc/faq/app-version-jira-cloud
   | Data storage and flow of user data in draw.io for Confluence and Jira Cloud | https://www.drawio.com/doc/faq/data-flow-confluence-jira-cloud
   | Get a community draw.io license for Confluence or Jira Cloud | https://www.drawio.com/doc/faq/drawio-community-license-cloud
   | Using draw.io in Jira Cloud | https://www.drawio.com/doc/drawio-jira-cloud
   | Embed a diagram from Confluence Cloud in Jira Cloud | https://www.drawio.com/doc/faq/embed-diagram-confluence-jira-cloud
   | Embed a diagram from Google Drive into Jira Cloud | https://www.drawio.com/doc/faq/embed-diagram-googledrive-jira-cloud
   | Embed a diagram from OneDrive into Jira Cloud | https://www.drawio.com/doc/faq/embed-diagram-onedrive-jira-cloud
   | Check access rights for draw.io in Jira Cloud | https://www.drawio.com/doc/faq/jira-cloud-insufficient-access-rights
   | License draw.io for Confluence and Jira Cloud correctly | https://www.drawio.com/doc/faq/license-drawio-confluence-jira-cloud
   | Migrate draw.io from Jira Server or DC to Jira Cloud | https://www.drawio.com/doc/faq/migrate-drawio-jira
   | What happens to diagrams when the draw.io app license for Confluence or Jira Cloud becomes invalid | https://www.drawio.com/doc/faq/unlicensed-drawio-app-confluence-jira-cloud

   Jira Data Center and Server

   | Convert a Gliffy diagram stored in Jira Server to draw.io | https://www.drawio.com/doc/faq/convert-gliffy-drawio-jira-server
   | Get a community draw.io license for Confluence or Jira Server | https://www.drawio.com/doc/faq/drawio-community-license-server
   | Fix Jira Server shortcuts in draw.io diagrams | https://www.drawio.com/doc/faq/jira-server-shortcuts-not-working
   | Get license information for draw.io for Confluence or Jira Server | https://www.drawio.com/doc/faq/license-confluence-jira-server
   | License draw.io for Confluence or Jira Server | https://www.drawio.com/doc/faq/license-drawio-confluence-jira-server
   | Solve an Invalid License error in draw.io for Confluence or Jira Server | https://www.drawio.com/doc/faq/license-error-confluence-jira-server
   | Migrate draw.io from Jira Server or DC to Jira Cloud | https://www.drawio.com/doc/faq/migrate-drawio-jira
   | Save diagrams as separate PNG files in Jira Server | https://www.drawio.com/doc/faq/save-separate-png-jira-server

   Online Whiteboard

   | Work with custom libraries in the Sketch editor theme | https://www.drawio.com/doc/faq/custom-library-online-whiteboard
   | Change the diagram editor theme | https://www.drawio.com/doc/faq/editor-theme-change
   | Minimise or move the format panel in the Sketch editor theme | https://www.drawio.com/doc/faq/format-panel-online-whiteboard
   | Draw a freehand shape | https://www.drawio.com/doc/faq/insert-freehand-shapes
   | Insert a template in the Sketch editor theme | https://www.drawio.com/doc/faq/insert-template-online-whiteboard
   | Open the Shapes panel in the Sketch editor theme | https://www.drawio.com/doc/faq/shapes-panel-online-whiteboard
   | Merge and unmerge table cells | https://www.drawio.com/doc/faq/table-merge-cells

   Desktop

   | No .vsd file import in the Desktop app | https://www.drawio.com/doc/faq/vsd-import-desktop

   Trust

   | Data storage and flow of user data in draw.io for Confluence and Jira Cloud | https://www.drawio.com/doc/faq/data-flow-confluence-jira-cloud
   | What happens to diagrams when the draw.io app license for Confluence or Jira Cloud becomes invalid | https://www.drawio.com/doc/faq/unlicensed-drawio-app-confluence-jira-cloud
   | Usage terms for diagrams created in draw.io | https://www.drawio.com/doc/faq/usage-terms

   Features

   | Add images to your diagram | https://www.drawio.com/doc/faq/add-images
   | Add and remove waypoints on connectors | https://www.drawio.com/doc/faq/add-remove-waypoints
   | Apply layouts to rearrange a diagram | https://www.drawio.com/doc/faq/apply-layouts
   | Insert shapes, links, templates and more in draw.io | https://www.drawio.com/doc/faq/arrange-insert-menu
   | Autosize shapes to fit their text labels | https://www.drawio.com/doc/faq/autosize
   | Change the background colour in draw.io | https://www.drawio.com/doc/faq/background-colour
   | Use a diagram page as a background image | https://www.drawio.com/doc/faq/background-diagram
   | Delete an existing background image | https://www.drawio.com/doc/faq/background-image-delete
   | Use a background image in your draw.io diagram | https://www.drawio.com/doc/faq/background-image
   | Enable or disable the collapse/expand feature on container shapes | https://www.drawio.com/doc/faq/collapse-expand-enable-disable
   | Work with custom links | https://www.drawio.com/doc/faq/custom-links
   | Set global diagram options in the format panel | https://www.drawio.com/doc/faq/diagram-options
   | Manually edit the XML source of your draw.io diagram | https://www.drawio.com/doc/faq/diagram-source-edit
   | Move around a diagram on the drawing canvas | https://www.drawio.com/doc/faq/drawing-canvas-move
   | Change the diagram editor grid | https://www.drawio.com/doc/faq/editor-grid-change
   | Enable or disable page view | https://www.drawio.com/doc/faq/editor-page-view
   | Change the diagram editor theme | https://www.drawio.com/doc/faq/editor-theme-change
   | Embed HTML options | https://www.drawio.com/doc/faq/embed-html-options
   | Generate code to embed a diagram in a webpage | https://www.drawio.com/doc/faq/embed-html
   | Embed your diagram as an SVG in a web page | https://www.drawio.com/doc/faq/embed-svg
   | Encode a diagram in a URL | https://www.drawio.com/doc/faq/export-to-url
   | Export a diagram with the editor grid | https://www.drawio.com/doc/faq/export-with-grid
   | Compare file storage locations | https://www.drawio.com/doc/faq/file-storage-locations-compare
   | Find shapes in your diagram based on their metadata or labels | https://www.drawio.com/doc/faq/find-shapes
   | Close the footer at app.diagrams.net | https://www.drawio.com/doc/faq/footer-close
   | File format for custom shape libraries | https://www.drawio.com/doc/faq/format-custom-shape-library
   | Minimise or move the format panel in the Sketch editor theme | https://www.drawio.com/doc/faq/format-panel-online-whiteboard
   | Show or hide the format panel | https://www.drawio.com/doc/faq/format-panel-show-hide
   | File format for the template library | https://www.drawio.com/doc/faq/format-template-library
   | Add a global custom property | https://www.drawio.com/doc/faq/global-custom-properties
   | Apply a new global style | https://www.drawio.com/doc/faq/global-style
   | Add and resolve comments on diagrams in Google Drive | https://www.drawio.com/doc/faq/google-drive-comments
   | Install draw.io for Google Drive via Google Workspace Marketplace | https://www.drawio.com/doc/faq/google-drive-install-drawio
   | Work with revisions of diagrams stored in Google Drive | https://www.drawio.com/doc/faq/google-drive-revision-history
   | Group and ungroup shapes and connectors | https://www.drawio.com/doc/faq/group-shapes-connectors
   | Get help with draw.io | https://www.drawio.com/doc/faq/help-menu
   | Crop an image | https://www.drawio.com/doc/faq/image-crop
   | Draw a freehand shape | https://www.drawio.com/doc/faq/insert-freehand-shapes
   | Insert CSV data and formatting information to generate a diagram | https://www.drawio.com/doc/faq/insert-from-csv
   | Insert layouts to build diagrams quickly | https://www.drawio.com/doc/faq/insert-layouts
   | Insert shapes via the menu | https://www.drawio.com/doc/faq/insert-shapes
   | Insert a template into an existing diagram | https://www.drawio.com/doc/faq/insert-template
   | Insert text and links | https://www.drawio.com/doc/faq/insert-text-link
   | Add text labels to shapes and connectors | https://www.drawio.com/doc/faq/labels-add
   | Move shapes and connectors from one layer to another | https://www.drawio.com/doc/faq/layer-move-shapes
   | Add and remove layers in a diagram | https://www.drawio.com/doc/faq/layers-add-remove
   | Work with layers in draw.io | https://www.drawio.com/doc/layers
   | Add line breaks in labels | https://www.drawio.com/doc/faq/line-breaks
   | Lock or unlock elements in a diagram | https://www.drawio.com/doc/faq/lock-elements
   | Use mathematical typesetting in diagrams | https://www.drawio.com/doc/faq/math-typesetting
   | Change the editor interface and menu language | https://www.drawio.com/doc/faq/menu-language-change
   | Move an area of your diagram | https://www.drawio.com/doc/faq/move-area
   | Create a new diagram using draw.io | https://www.drawio.com/doc/faq/new-diagram
   | Run draw.io offline | https://www.drawio.com/doc/faq/offline
   | Open an existing diagram file | https://www.drawio.com/doc/faq/open-diagram-file
   | Add a page to a diagram | https://www.drawio.com/doc/faq/page-add
   | Change the page size with Page scale | https://www.drawio.com/doc/faq/page-scale
   | Change the page size and orientation | https://www.drawio.com/doc/faq/page-size-orientation
   | Position labels inside and outside shapes | https://www.drawio.com/doc/faq/position-labels
   | Predefined placeholders | https://www.drawio.com/doc/faq/predefined-placeholders
   | Print a diagram | https://www.drawio.com/doc/faq/print-diagram
   | Print and fit a diagram to a page | https://www.drawio.com/doc/faq/print-fit-to-page
   | Publicly publish a diagram as a link | https://www.drawio.com/doc/faq/publish-diagram-as-link
   | Replace existing shapes | https://www.drawio.com/doc/faq/replace-shapes
   | Reset or override connection points on a shape | https://www.drawio.com/doc/faq/reset-connection-points
   | Save a diagram in various formats | https://www.drawio.com/doc/faq/save-file-formats
   | Use the scratchpad in draw.io | https://www.drawio.com/doc/faq/scratchpad
   | Select multiple shapes | https://www.drawio.com/doc/faq/select-multiple-shapes
   | Constrain proportions when resizing shapes | https://www.drawio.com/doc/faq/shape-constrain-proportions
   | Duplicate a shape | https://www.drawio.com/doc/faq/shape-duplicate
   | Move a shape only horizontally or vertically | https://www.drawio.com/doc/faq/shape-move-horizontal-vertical
   | Change the shape perimeter | https://www.drawio.com/doc/faq/shape-perimeter-change
   | Resize shapes or groups of shapes | https://www.drawio.com/doc/faq/shape-resize
   | Rotate shapes or groups of shapes | https://www.drawio.com/doc/faq/shape-rotate
   | Search for a shape in the shape library | https://www.drawio.com/doc/faq/shape-search
   | Delete a shape with all of its connectors | https://www.drawio.com/doc/faq/shapes-delete-connections
   | Deselect shapes and child shapes | https://www.drawio.com/doc/faq/shapes-deselect
   | Overlap shapes and containers | https://www.drawio.com/doc/faq/shapes-overlap
   | Swap shapes in place | https://www.drawio.com/doc/faq/shapes-swap
   | Change the fill pattern when using the Sketch style | https://www.drawio.com/doc/faq/sketch-style-fill-patterns
   | Spell check an entire diagram | https://www.drawio.com/doc/faq/spell-check-diagram
   | Use the SQL plugin to create an entity relationship diagram | https://www.drawio.com/doc/faq/sql-plugin
   | Select a storage location for your diagram files | https://www.drawio.com/doc/faq/storage-location-select
   | Copy and paste the styles of shapes and connectors | https://www.drawio.com/doc/faq/styles-copy-paste
   | Reset the default style | https://www.drawio.com/doc/faq/styles-default-reset
   | Format text using superscript and subscript | https://www.drawio.com/doc/faq/superscript-subscript
   | Synchronize and merge external changes to your diagram | https://www.drawio.com/doc/faq/synchronize
   | Add a table to your diagram | https://www.drawio.com/doc/faq/table-add
   | Add a cross-functional table to your diagram | https://www.drawio.com/doc/faq/table-cross-functional-add
   | Merge and unmerge table cells | https://www.drawio.com/doc/faq/table-merge-cells
   | Change the shape of a participant on a UML lifeline | https://www.drawio.com/doc/faq/uml-lifeline-shape-change
   | Change the writing direction | https://www.drawio.com/doc/faq/writing-direction-change
   | Change the zoom level | https://www.drawio.com/doc/faq/zoom

   Customisation

   | Configure the draw.io editor | https://www.drawio.com/doc/faq/configure-diagram-editor
   | Configure server settings in draw.io for Confluence Server and Data Center | https://www.drawio.com/doc/faq/configure-drawio-confluence-server
   | Set custom colours in Confluence Cloud | https://www.drawio.com/doc/faq/custom-colours-confluence-cloud
   | Use custom fonts in draw.io for Confluence Cloud | https://www.drawio.com/doc/faq/custom-fonts-confluence-cloud
   | Use custom libraries in Confluence Cloud | https://www.drawio.com/doc/faq/custom-libraries-confluence-cloud
   | Set custom default styles for shapes and connectors | https://www.drawio.com/doc/faq/custom-styles-confluence-cloud
   | Set up custom template diagrams in Confluence Cloud | https://www.drawio.com/doc/faq/custom-templates-confluence-cloud
   | Set up custom template diagrams in Confluence Server | https://www.drawio.com/doc/faq/custom-templates-confluence-server
   | Customise the draw.io interface | https://www.drawio.com/doc/faq/custom-ui-confluence-cloud
   | Embed HTML options | https://www.drawio.com/doc/faq/embed-html-options
   | Embed mode | https://www.drawio.com/doc/faq/embed-mode
   | File format for custom shape libraries | https://www.drawio.com/doc/faq/format-custom-shape-library
   | File format for the template library | https://www.drawio.com/doc/faq/format-template-library
   | Predefined placeholders | https://www.drawio.com/doc/faq/predefined-placeholders
   | Supported location hash properties | https://www.drawio.com/doc/faq/supported-location-hash-properties
   | Supported URL parameters | https://www.drawio.com/doc/faq/supported-url-parameters

   Shapes

   | Add rows to ERD tables, lists and UML classes | https://www.drawio.com/doc/faq/add-rows
   | Arrange shapes and connectors | https://www.drawio.com/doc/faq/arrange-tab
   | Autosize shapes to fit their text labels | https://www.drawio.com/doc/faq/autosize
   | Enable or disable the collapse/expand feature on container shapes | https://www.drawio.com/doc/faq/collapse-expand-enable-disable
   | Connect shapes in draw.io | https://www.drawio.com/doc/faq/connect-shapes
   | Connect to anywhere on a shape | https://www.drawio.com/doc/faq/connect-to-shapes-anywhere
   | Hide the connection arrows on shapes | https://www.drawio.com/doc/faq/connection-arrows-hide
   | Hide the fixed connection points on shapes | https://www.drawio.com/doc/faq/connection-points-hide
   | Enable or disable Copy on Connect | https://www.drawio.com/doc/faq/copy-on-connect
   | Create custom shapes in draw.io using the text editor | https://www.drawio.com/doc/faq/custom-shapes
   | Find shapes in your diagram based on their metadata or labels | https://www.drawio.com/doc/faq/find-shapes
   | File format for custom shape libraries | https://www.drawio.com/doc/faq/format-custom-shape-library
   | Add a global custom property | https://www.drawio.com/doc/faq/global-custom-properties
   | Apply a new global style | https://www.drawio.com/doc/faq/global-style
   | Group and ungroup shapes and connectors | https://www.drawio.com/doc/faq/group-shapes-connectors
   | Hide or display guidelines when moving shapes | https://www.drawio.com/doc/faq/guides-hide-display
   | Move shapes and connectors from one layer to another | https://www.drawio.com/doc/faq/layer-move-shapes
   | Add line breaks in labels | https://www.drawio.com/doc/faq/line-breaks
   | Position labels inside and outside shapes | https://www.drawio.com/doc/faq/position-labels
   | Replace existing shapes | https://www.drawio.com/doc/faq/replace-shapes
   | Reset or override connection points on a shape | https://www.drawio.com/doc/faq/reset-connection-points
   | Disable group resize | https://www.drawio.com/doc/faq/resize-group-disable
   | Select multiple shapes | https://www.drawio.com/doc/faq/select-multiple-shapes
   | Add a shadow to all shapes, connectors and text | https://www.drawio.com/doc/faq/shadow-add
   | Create and edit complex custom shapes | https://www.drawio.com/doc/faq/shape-complex-create-edit
   | Customise the connection points on a shape | https://www.drawio.com/doc/faq/shape-connection-points-customise
   | Constrain proportions when resizing shapes | https://www.drawio.com/doc/faq/shape-constrain-proportions
   | Duplicate a shape | https://www.drawio.com/doc/faq/shape-duplicate
   | Find which layer a shape is on | https://www.drawio.com/doc/faq/shape-find-layer
   | Move a shape only horizontally or vertically | https://www.drawio.com/doc/faq/shape-move-horizontal-vertical
   | Change the shape perimeter | https://www.drawio.com/doc/faq/shape-perimeter-change
   | Resize shapes or groups of shapes | https://www.drawio.com/doc/faq/shape-resize
   | Rotate shapes or groups of shapes | https://www.drawio.com/doc/faq/shape-rotate
   | Search for a shape in the shape library | https://www.drawio.com/doc/faq/shape-search
   | Change the style of shapes | https://www.drawio.com/doc/faq/shape-styles
   | Delete a shape with all of its connectors | https://www.drawio.com/doc/faq/shapes-delete-connections
   | Deselect shapes and child shapes | https://www.drawio.com/doc/faq/shapes-deselect
   | Overlap shapes and containers | https://www.drawio.com/doc/faq/shapes-overlap
   | Swap shapes in place | https://www.drawio.com/doc/faq/shapes-swap
   | Change the fill pattern when using the Sketch style | https://www.drawio.com/doc/faq/sketch-style-fill-patterns
   | Snap to point shape property | https://www.drawio.com/doc/faq/snap-to-point
   | Copy and paste the styles of shapes and connectors | https://www.drawio.com/doc/faq/styles-copy-paste
   | Reset the default style | https://www.drawio.com/doc/faq/styles-default-reset
   | Edit colours in embedded SVG images | https://www.drawio.com/doc/faq/svg-edit-colours
   | Insert SVG images into a diagram | https://www.drawio.com/doc/faq/svg-insert
   | Input right to left text | https://www.drawio.com/doc/faq/text-right-to-left
   | Change the style of text and labels | https://www.drawio.com/doc/faq/text-styles
   | Change the shape of a participant on a UML lifeline | https://www.drawio.com/doc/faq/uml-lifeline-shape-change

   Connectors

   | Add and remove waypoints on connectors | https://www.drawio.com/doc/faq/add-remove-waypoints
   | Arrange shapes and connectors | https://www.drawio.com/doc/faq/arrange-tab
   | Connect shapes in draw.io | https://www.drawio.com/doc/faq/connect-shapes
   | Connect to anywhere on a shape | https://www.drawio.com/doc/faq/connect-to-shapes-anywhere
   | Hide the connection arrows on shapes | https://www.drawio.com/doc/faq/connection-arrows-hide
   | Hide the fixed connection points on shapes | https://www.drawio.com/doc/faq/connection-points-hide
   | Animate connectors | https://www.drawio.com/doc/faq/connector-animate
   | Create a connector with bidirectional arrows | https://www.drawio.com/doc/faq/connector-bidirectional
   | See the difference between fixed and floating connectors | https://www.drawio.com/doc/faq/connector-fixed-vs-floating
   | Flip a connector horizontally or vertically | https://www.drawio.com/doc/faq/connector-flip
   | Create a connector with no arrows | https://www.drawio.com/doc/faq/connector-no-arrows
   | Reverse a connector | https://www.drawio.com/doc/faq/connector-reverse
   | Style connectors | https://www.drawio.com/doc/faq/connector-styles
   | Join connectors | https://www.drawio.com/doc/faq/connectors-join
   | Work with connectors | https://www.drawio.com/doc/faq/connectors
   | Enable or disable Copy on Connect | https://www.drawio.com/doc/faq/copy-on-connect
   | Add a global custom property | https://www.drawio.com/doc/faq/global-custom-properties
   | Apply a new global style | https://www.drawio.com/doc/faq/global-style
   | Group and ungroup shapes and connectors | https://www.drawio.com/doc/faq/group-shapes-connectors
   | Move shapes and connectors from one layer to another | https://www.drawio.com/doc/faq/layer-move-shapes
   | Add line breaks in labels | https://www.drawio.com/doc/faq/line-breaks
   | Position labels inside and outside shapes | https://www.drawio.com/doc/faq/position-labels
   | Reset or override connection points on a shape | https://www.drawio.com/doc/faq/reset-connection-points
   | Add a shadow to all shapes, connectors and text | https://www.drawio.com/doc/faq/shadow-add
   | Customise the connection points on a shape | https://www.drawio.com/doc/faq/shape-connection-points-customise
   | Delete a shape with all of its connectors | https://www.drawio.com/doc/faq/shapes-delete-connections
   | Snap to point shape property | https://www.drawio.com/doc/faq/snap-to-point
   | Copy and paste the styles of shapes and connectors | https://www.drawio.com/doc/faq/styles-copy-paste
   | Reset the default style | https://www.drawio.com/doc/faq/styles-default-reset
   | Change the style of text and labels | https://www.drawio.com/doc/faq/text-styles

   Text

   | Autosize shapes to fit their text labels | https://www.drawio.com/doc/faq/autosize
   | Use custom fonts in draw.io for Confluence Cloud | https://www.drawio.com/doc/faq/custom-fonts-confluence-cloud
   | Add text labels to shapes and connectors | https://www.drawio.com/doc/faq/labels-add
   | Add line breaks in labels | https://www.drawio.com/doc/faq/line-breaks
   | Use mathematical typesetting in diagrams | https://www.drawio.com/doc/faq/math-typesetting
   | Position labels inside and outside shapes | https://www.drawio.com/doc/faq/position-labels
   | Format text using superscript and subscript | https://www.drawio.com/doc/faq/superscript-subscript
   | Input right to left text | https://www.drawio.com/doc/faq/text-right-to-left
   | Change the style of text and labels | https://www.drawio.com/doc/faq/text-styles
   | Change the writing direction | https://www.drawio.com/doc/faq/writing-direction-change

   Tables

   | Add rows to ERD tables, lists and UML classes | https://www.drawio.com/doc/faq/add-rows
   | Add a table to your diagram | https://www.drawio.com/doc/faq/table-add
   | Add a cross-functional table to your diagram | https://www.drawio.com/doc/faq/table-cross-functional-add
   | Merge and unmerge table cells | https://www.drawio.com/doc/faq/table-merge-cells

   Plugins

   | Permanently load a plugin using draw.io | https://www.drawio.com/doc/faq/add-plugin
   | Scramble all text in your diagram with the anonymize plugin | https://www.drawio.com/doc/faq/anonymize-plugin
   | Uninstall a plugin from draw.io | https://www.drawio.com/doc/faq/delete-plugin
   | Step through your diagram using the explore function | https://www.drawio.com/doc/faq/explore-plugin
   | Automatically number shapes as you insert them | https://www.drawio.com/doc/faq/number-plugin
   | List of draw.io plugins | https://www.drawio.com/doc/faq/plugins
   | See shape metadata with the properties plugin | https://www.drawio.com/doc/faq/properties-plugin
   | Use the SQL plugin to create an entity relationship diagram | https://www.drawio.com/doc/faq/sql-plugin
   | Extract all of the text in your diagram | https://www.drawio.com/doc/faq/text-plugin

   Integrations

   | draw.io for Quip Product Status | https://www.drawio.com/doc/faq/drawio-quip
   | Open and edit diagrams stored in Dropbox | https://www.drawio.com/doc/faq/dropbox-diagram-open
   | Use diagram version control in Dropbox | https://www.drawio.com/doc/faq/dropbox-diagram-revisions
   | Use Dropbox to store diagrams | https://www.drawio.com/doc/faq/dropbox-diagrams-store
   | Embed a diagram from Google Drive into Confluence Data Center and Server | https://www.drawio.com/doc/faq/embed-diagram-googledrive-confluence-server
   | Embed a diagram from OneDrive into Confluence Data Center and Server | https://www.drawio.com/doc/faq/embed-diagram-onedrive-confluence-server
   | Embed a diagram on Google Sites | https://www.drawio.com/doc/faq/embed-diagrams-google-sites
   | Compare embed and export formats | https://www.drawio.com/doc/faq/embed-formats-compare
   | Embed HTML options | https://www.drawio.com/doc/faq/embed-html-options
   | Generate code to embed a diagram in a webpage | https://www.drawio.com/doc/faq/embed-html
   | Embed mode | https://www.drawio.com/doc/faq/embed-mode
   | Embed your diagram as an SVG in a web page | https://www.drawio.com/doc/faq/embed-svg
   | Enable third-party cookies in your browser | https://www.drawio.com/doc/faq/enable-third-party-cookies
   | Compare file storage locations | https://www.drawio.com/doc/faq/file-storage-locations-compare
   | Use diagrams in Google Docs | https://www.drawio.com/doc/faq/google-docs-diagrams
   | Fix connection issues with Google Drive | https://www.drawio.com/doc/faq/google-drive-connection-problems
   | Use draw.io with Google Drive | https://www.drawio.com/doc/faq/google-drive-diagrams
   | Create a new diagram in a Google Drive folder | https://www.drawio.com/doc/faq/google-drive-folder-new-diagram
   | Import a diagram into Google Drive | https://www.drawio.com/doc/faq/google-drive-import-diagram
   | Install draw.io for Google Drive via Google Workspace Marketplace | https://www.drawio.com/doc/faq/google-drive-install-drawio
   | Publicly publish a diagram stored in Google Drive | https://www.drawio.com/doc/faq/google-drive-publicly-publish-diagram
   | Rename, copy and move diagram files on Google Drive | https://www.drawio.com/doc/faq/google-drive-rename-copy-move-diagrams
   | Work with revisions of diagrams stored in Google Drive | https://www.drawio.com/doc/faq/google-drive-revision-history
   | Revoke access to Google Drive | https://www.drawio.com/doc/faq/google-drive-revoke-access
   | Install draw.io for Google Slides | https://www.drawio.com/doc/faq/google-slides-drawio-install
   | Enable Google Drive and OneDrive integration in Confluence Data Center and Server | https://www.drawio.com/doc/faq/googledrive-onedrive-integration-enable-confluence-server
   | Install diagrams.net for Google Workspace (G Suite) domain-wide | https://www.drawio.com/doc/faq/gsuite-addons-domain-wide
   | Troubleshoot authorisation problems with Google Workspace (G Suite) | https://www.drawio.com/doc/faq/gsuite-authorisation-troubleshoot
   | Permissions required to diagram in Google Workspace (G Suite) apps | https://www.drawio.com/doc/faq/gsuite-permissions
   | Use diagrams in Microsoft Word, Excel or Powerpoint | https://www.drawio.com/doc/faq/microsoft-office-diagrams
   | Authorise draw.io to access files in Microsoft OneDrive | https://www.drawio.com/doc/faq/microsoft-one-drive-authorisation
   | Use draw.io in Microsoft Teams | https://www.drawio.com/doc/faq/microsoft-teams-diagrams
   | Getting support for draw.io for Microsoft Teams | https://www.drawio.com/doc/faq/microsoft-teams-support
   | Install draw.io on a mobile device | https://www.drawio.com/doc/faq/mobile-diagram-app
   | Permissions required to store diagrams in OneDrive | https://www.drawio.com/doc/faq/onedrive-permissions
   | Revoke access to OneDrive | https://www.drawio.com/doc/faq/onedrive-revoke-access
   | Share a diagram file using Dropbox | https://www.drawio.com/doc/faq/share-diagram-dropbox
   | Collaborate on and share diagrams online | https://www.drawio.com/doc/faq/share-diagrams
   | Select a storage location for your diagram files | https://www.drawio.com/doc/faq/storage-location-select
   | Web browsers supported by draw.io online | https://www.drawio.com/doc/faq/supported-browsers
   | Supported location hash properties | https://www.drawio.com/doc/faq/supported-location-hash-properties
   | Supported URL parameters | https://www.drawio.com/doc/faq/supported-url-parameters
   | Synchronize and merge external changes to your diagram | https://www.drawio.com/doc/faq/synchronize

   Export

   | Compare embed and export formats | https://www.drawio.com/doc/faq/embed-formats-compare
   | Export a diagram to various file formats | https://www.drawio.com/doc/faq/export-diagram
   | Export a diagram as a higher resolution PNG image | https://www.drawio.com/doc/faq/export-higher-resolution
   | Export a diagram to HTML | https://www.drawio.com/doc/faq/export-to-html
   | Export a diagram to a JPEG image | https://www.drawio.com/doc/faq/export-to-jpeg
   | Export a diagram to a PDF file | https://www.drawio.com/doc/faq/export-to-pdf
   | Export a diagram to a PNG image | https://www.drawio.com/doc/faq/export-to-png
   | Export a diagram to an SVG image | https://www.drawio.com/doc/faq/export-to-svg
   | Encode a diagram in a URL | https://www.drawio.com/doc/faq/export-to-url
   | Export a diagram to an WebP image | https://www.drawio.com/doc/faq/export-to-webp
   | Export your diagram to an XML file | https://www.drawio.com/doc/faq/export-to-xml
   | Compare file storage locations | https://www.drawio.com/doc/faq/file-storage-locations-compare
   | Crop the PDF export to the diagram size | https://www.drawio.com/doc/faq/pdf-export-crop
   | Print a diagram to a PDF file | https://www.drawio.com/doc/faq/pdf-print-to
   | Solve PDF export problems under Confluence Cloud | https://www.drawio.com/doc/faq/pdf-problems-confluence-cloud
   | Print a diagram | https://www.drawio.com/doc/faq/print-diagram
   | Print and fit a diagram to a page | https://www.drawio.com/doc/faq/print-fit-to-page
   | Publicly publish a diagram as a link | https://www.drawio.com/doc/faq/publish-diagram-as-link
   | Why text in exported SVG images may not display correctly | https://www.drawio.com/doc/faq/svg-export-text-problems

   Import

   | Convert a Gliffy diagram stored in Jira Server to draw.io | https://www.drawio.com/doc/faq/convert-gliffy-drawio-jira-server
   | Import a diagram into Google Drive | https://www.drawio.com/doc/faq/google-drive-import-diagram
   | Import a diagram into an existing diagram | https://www.drawio.com/doc/faq/import-diagram
   | Import from Libre Office Draw is not supported | https://www.drawio.com/doc/faq/import-libre-office-draw
   | Insert CSV data and formatting information to generate a diagram | https://www.drawio.com/doc/faq/insert-from-csv
   | Import Lucidchart diagrams into draw.io | https://www.drawio.com/doc/faq/lucidchart-import
   | Mass import Gliffy diagrams to draw.io in Confluence Cloud | https://www.drawio.com/doc/faq/mass-import-gliffy-confluence-cloud
   | Mass import Gliffy diagrams to draw.io in Confluence Data Center and Server | https://www.drawio.com/doc/faq/mass-import-gliffy-confluence-server
   | Open .vsd, .vdx and .vss files in draw.io for Confluence Server | https://www.drawio.com/doc/faq/open-vsd-files-confluence-server
   | No .vsd file import in the Desktop app | https://www.drawio.com/doc/faq/vsd-import-desktop
   | Diagram differences after .vsd import | https://www.drawio.com/doc/faq/vsd-import-differences

   Google

   | Use diagrams in Google Docs | https://www.drawio.com/doc/faq/google-docs-diagrams
   | Add and resolve comments on diagrams in Google Drive | https://www.drawio.com/doc/faq/google-drive-comments
   | Fix connection issues with Google Drive | https://www.drawio.com/doc/faq/google-drive-connection-problems
   | Use draw.io with Google Drive | https://www.drawio.com/doc/faq/google-drive-diagrams
   | Create a new diagram in a Google Drive folder | https://www.drawio.com/doc/faq/google-drive-folder-new-diagram
   | Import a diagram into Google Drive | https://www.drawio.com/doc/faq/google-drive-import-diagram
   | Install draw.io for Google Drive via Google Workspace Marketplace | https://www.drawio.com/doc/faq/google-drive-install-drawio
   | Publicly publish a diagram stored in Google Drive | https://www.drawio.com/doc/faq/google-drive-publicly-publish-diagram
   | Rename, copy and move diagram files on Google Drive | https://www.drawio.com/doc/faq/google-drive-rename-copy-move-diagrams
   | Work with revisions of diagrams stored in Google Drive | https://www.drawio.com/doc/faq/google-drive-revision-history
   | Revoke access to Google Drive | https://www.drawio.com/doc/faq/google-drive-revoke-access
   | Install draw.io for Google Slides | https://www.drawio.com/doc/faq/google-slides-drawio-install
   | Install diagrams.net for Google Workspace (G Suite) domain-wide | https://www.drawio.com/doc/faq/gsuite-addons-domain-wide
   | Troubleshoot authorisation problems with Google Workspace (G Suite) | https://www.drawio.com/doc/faq/gsuite-authorisation-troubleshoot
   | draw.io for Google Workspace (G Suite) deletion policy | https://www.drawio.com/doc/faq/gsuite-deletion-policy
   | Permissions required to diagram in Google Workspace (G Suite) apps | https://www.drawio.com/doc/faq/gsuite-permissions

   Microsoft

   | Embed a diagram from OneDrive into Confluence Cloud | https://www.drawio.com/doc/faq/embed-diagram-onedrive-confluence-cloud
   | Embed a diagram from OneDrive into Confluence Data Center and Server | https://www.drawio.com/doc/faq/embed-diagram-onedrive-confluence-server
   | Embed a diagram from OneDrive into Jira Cloud | https://www.drawio.com/doc/faq/embed-diagram-onedrive-jira-cloud
   | Use diagrams in Microsoft Word, Excel or Powerpoint | https://www.drawio.com/doc/faq/microsoft-office-diagrams
   | Authorise draw.io to access files in Microsoft OneDrive | https://www.drawio.com/doc/faq/microsoft-one-drive-authorisation
   | Use draw.io in Microsoft Teams | https://www.drawio.com/doc/faq/microsoft-teams-diagrams
   | Getting support for draw.io for Microsoft Teams | https://www.drawio.com/doc/faq/microsoft-teams-support
   | Permissions required to store diagrams in OneDrive | https://www.drawio.com/doc/faq/onedrive-permissions
   | Revoke access to OneDrive | https://www.drawio.com/doc/faq/onedrive-revoke-access

   Troubleshooting

   | Manually save your diagram when standard saving fails | https://www.drawio.com/doc/faq/diagram-source-save
   | Check access rights for draw.io in Jira Cloud | https://www.drawio.com/doc/faq/jira-cloud-insufficient-access-rights
   | Solve an Invalid License error in draw.io for Confluence or Jira Server | https://www.drawio.com/doc/faq/license-error-confluence-jira-server

   Gliffy

   | Convert a Gliffy diagram stored in Jira Server to draw.io | https://www.drawio.com/doc/faq/convert-gliffy-drawio-jira-server
   | Mass import Gliffy diagrams to draw.io in Confluence Cloud | https://www.drawio.com/doc/faq/mass-import-gliffy-confluence-cloud
   | Mass import Gliffy diagrams to draw.io in Confluence Data Center and Server | https://www.drawio.com/doc/faq/mass-import-gliffy-confluence-server

   Lucidchart

   | Import Lucidchart diagrams into draw.io | https://www.drawio.com/doc/faq/lucidchart-import

