
# Bootstrap readme 移动端UI ========================================================================


Bootstrap 是由 Twitter 的 Mark Otto 和 Jacob Thornton 开发的。Bootstrap 是 2011 年八月在 GitHub 上发布的开源产品。

Getting started · Bootstrap 3.3.7
https://getbootstrap.com/docs/3.3/getting-started/

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" >
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" >
<script src="https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

Bootstrap4 教程 - http://www.runoob.com/bootstrap4/bootstrap4-tutorial.html
http://www.runoob.com/bootstrap/bootstrap-intro.html
http://www.runoob.com/try/demo_source/bootstrap3-glyph-icons.htm
http://www.runoob.com/bootstrap/bootstrap-plugins-overview.html
http://pikock.github.io/bootstrap-magic/app/#!/editor

Bootstrap 自带 12 种 jQuery 插件，扩展了功能，可以给站点添加更多的互动。即使您不是一名高级的 JavaScript 开发人员，您也可以着手学习 Bootstrap 的 JavaScript 插件。利用 Bootstrap 数据 API（Bootstrap Data API），大部分的插件可以在不编写任何代码的情况被触发。

Bootstrap4 是 Bootstrap 的最新版本，与 Bootstrap3 相比拥有了更多的具体的类以及把一些有关的部分变成了相关的组件。同时 Bootstrap.min.css 的体积减少了40%以上。
Bootstrap4 放弃了对 IE8 以及 iOS 6 的支持，现在仅仅支持 IE9 以上 以及 iOS 7 以上版本的浏览器。如果对于其中需要用到以前的浏览器，那么请使用 Bootstrap3。

Bootstrap4 可以通过 Bootstrap 4 CDN 或从官网 getbootstrap.com 下载 Bootstrap 4。 国内推荐使用 Staticfile CDN 上的库：

<link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/4.1.0/css/bootstrap.min.css">
<script src="https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/popper.js/1.12.5/umd/popper.min.js" title="弹窗、提示、下拉菜单"></script>
<script src="https://cdn.staticfile.org/twitter-bootstrap/4.1.0/js/bootstrap.min.js"></script>

此外，你还可以使用以下的 CDN 服务：
国内推荐使用 : https://www.staticfile.org/
国际推荐使用 : https://cdnjs.com/
你可以去官网 https://getbootstrap.com/ 下载 Bootstrap4 资源库。

注：此外你还可以通过包的管理工具 npm、 gem、 composer 等来安装：

    npm install bootstrap@4.0.0-beta.2
    gem 'bootstrap', '~> 4.0.0.beta2'
    composer require twbs/bootstrap:4.0.0-beta.2

使用 HTML5 doctype 创建第一个 Bootstrap 4 页面。Bootstrap 要求使用 HTML5 文件类型，所以需要添加 HTML5 doctype 声明。 为了让 Bootstrap 开发的网站对移动设备友好，确保适当的绘制和触屏缩放，需要在网页的 head 之中添加 viewport meta 标签，如下所示：

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  </head>
</html>


width=device-width 表示宽度是设备屏幕的宽度。
initial-scale=1 表示初始的缩放比例。
shrink-to-fit=no 自动适应手机屏幕的宽度。

Bootstrap 4 需要一个容器元素来包裹网站的内容，我们可以使用以下两个容器类：

    .container 类用于固定宽度并支持响应式布局的容器。
    .container-fluid 类用于 100% 宽度，占据全部视口（viewport）的容器。

<div class="container">
  <h1>我的第一个 Bootstrap 页面</h1>
  <p>这是一些文本。</p> 
</div>

<div class="container-fluid">
  <h1>我的第一个 Bootstrap 页面</h1>
  <p>使用了 .container-fluid，100% 宽度，占据全部视口（viewport）的容器。</p> 
</div>




# demo

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Hello Bootstrap!</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"> 

    <script src="js/jquery-2.1.1.min.js"></script>
    <script src="bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link href="bootstrap/3.3.7/css/bootstrap-theme.css" rel="stylesheet">
    <link href="bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="bootstrap-select/css/bootstrap-select.min.css">
    <script src="bootstrap-select/js/bootstrap-select.min.js"></script>

    <!-- <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/4.1.0/css/bootstrap.min.css">
    <script src="https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdn.staticfile.org/popper.js/1.12.5/umd/popper.min.js"></script>
    <script src="https://cdn.staticfile.org/twitter-bootstrap/4.1.0/js/bootstrap.min.js"></script> -->

    <style>
      .container h1 {border-bottom:2px solid #7ca4c5;}
      .icon-glyph {margin:2px;width:280px;float:left;text-align: left;}
      .icon-glyph span { font-size:22px; }
    </style>

  </head>
  <body>

<div class="container">
    <h1 id="title">Hello World!</h1>
    <!-- All of the Node.js APIs are available in this renderer process. -->
    We are using Node.js <script>document.write(process.versions.node)</script>,
    Chromium <script>document.write(process.versions.chrome)</script>,
    and Electron <script>document.write(process.versions.electron)</script>.
    <a href="https://getbootstrap.com/docs/3.3/customize/?id=7830063837006f6fc84f">Customize and download · Bootstrap here</a>.
</div><!-- container -->

<script>
  // You can also require other files to run in this process
  require('./renderer.js');
</script>

<div class="container buttons">
  <h1>Bootstrap 按钮</h1>
  <ul>
    <li><p><button class="btn">Click</button>.btn 为按钮添加基本样式</p></li>
    <li><p><button class="btn btn-default">Click</button>.btn .btn-default  默认/标准按钮</p></li>
    <li><p><button class="btn btn-primary">Click</button>.btn .btn-primary  原始按钮样式（未被操作）</p></li>
    <li><p><button class="btn btn-success">Click</button>.btn .btn-success  表示成功的动作</p></li>
    <li><p><button class="btn btn-info">Click</button>.btn .btn-info  该样式可用于要弹出信息的按钮</p></li>
    <li><p><button class="btn btn-warning">Click</button>.btn .btn-warning  表示需要谨慎操作的按钮</p></li>
    <li><p><button class="btn btn-danger">Click</button>.btn .btn-danger  表示一个危险动作的按钮操作</p></li>
    <li><p><button class="btn btn-link">Click</button>.btn .btn-link  让按钮看起来像个链接 (仍然保留按钮行为)</p></li>
    <li><p><button class="btn btn-lg">Click</button>.btn .btn-lg  制作一个大按钮</p></li>
    <li><p><button class="btn btn-sm">Click</button>.btn .btn-sm  制作一个小按钮</p></li>
    <li><p><button class="btn btn-xs">Click</button>.btn .btn-xs  制作一个超小按钮</p></li>
    <li><p><button class="btn btn-block">Click</button>.btn .btn-block  块级按钮(拉伸至父元素100%的宽度)</p></li>
    <li><p><button class="btn active">Click</button>.btn .active  按钮被点击</p></li>
    <li><p><button class="btn disabled">Click</button>.btn .disabled  禁用按钮</p></li>
  </ul>
</div> <!-- container -->


<div class="container">
  <h1>Bootstrap 图片</h1>
  <ul>
    <li><p><img src="demo.jpg" alt="demo" class="img-rounded"></p> .img-rounded 添加 border-radius:6px 来获得图片圆角。</li>
    <li><p><img src="demo.jpg" alt="demo" class="img-circle"></p> .img-circle 添加 border-radius:50% 来让整个图片变成圆形。</li>
    <li><p><img src="demo.jpg" alt="demo" class="img-thumbnail"></p> .img-thumbnail 添加一些内边距（padding）和一个灰色的边框。</li>
    <li><p><img src="demo.jpg" alt="demo" class="img-responsive"></p> .img-responsive 响应式图片将很好地扩展到父元素 具有 max-width: 100%; 和 height: auto; </li>
  </ul>
</div><!-- container -->


<div class="container">
  <h1>CSS3 keyframes 动画</h1>

  <style>
    @-webkit-keyframes growup { 
      0% { 
        -webkit-transform: translateX(-1px) rotate(0deg) scale(1.0);
        transform: translateX(-1px) rotate(0deg) scale(1.0); width:0%; 
      }
      50% { 
        -webkit-transform: translateX(-1px) rotate(0deg) scale(1.0); 
        transform: translateX(-1px) rotate(0deg) scale(1.0); width:50%; 
      }
      100% { 
        -webkit-transform: translateX(-1px) rotate(0deg) scale(1.0); 
        transform: translateX(-1px) rotate(0deg) scale(1.0); width:100%; 
      }
    }
    @keyframes growup { 
      0% { 
        -webkit-transform: translateX(-1px) rotate(0deg) scale(1.0);
        transform: translateX(-1px) rotate(0deg) scale(1.0); width:0%; 
      }
      50% { 
        -webkit-transform: translateX(-1px) rotate(0deg) scale(1.0);
        transform: translateX(-1px) rotate(0deg) scale(1.0); width:50%; 
      }
      100% { 
        -webkit-transform: translateX(-1px) rotate(0deg) scale(1.0);
        transform: translateX(-1px) rotate(0deg) scale(1.0); width:100%; 
      }
    }
    .progressbar { color:#DF3C0A; background-color: rgba(255,255,255,0.5); border:1px solid rgba(128,128,128,0.5); border-radius:50px; height:32px; margin:0 8px; position:relative; overflow:hidden; font-size:32rpx; text-align:center; line-height:32px;  }
    .progressbar .wrap { position:relative; width:100%; height:100%; }
    .progressbar .done { background-color:rgba(254, 246, 30, 1); position:absolute; left:0; top:0; height:100%; border-radius:50px; }
    .progressbar .done { -webkit-animation: growup 2s linear; animation: growup 2s linear; }
  </style>
  <div class="progressbar">
    <div class="wrap" style="width:50%;">
      <div class="done" style="width:100%;">progress animation...</div>
    </div>
  </div>

</div><!-- container -->


<div class="container">
  <h1>Bootstrap 辅助类</h1>

  <h2>文本色彩样式</h2>
  <p>以下不同的类展示了不同的文本颜色。如果文本是个链接鼠标移动到文本上会变暗：</p>
  <p class="text-muted"><b>提示</b> .text-muted 类的文本样式</p>
  <p class="text-primary"><b>主要</b> .text-primary 类的文本样式</p>
  <p class="text-success"><b>成功</b> .text-success 类的文本样式</p>
  <p class="text-info"><b>信息</b> .text-info 类的文本样式</p>
  <p class="text-warning"><b>警告</b> .text-warning 类的文本样式</p>
  <p class="text-danger"><b>危险</b> .text-danger 类的文本样式</p>

  <h2>背景色彩样式</h2>
  <p>以下不同的类展示了不同的背景颜色。 如果文本是个链接鼠标移动到文本上会变暗：</p>

  <p class="bg-primary"><b>主要</b> .bg-primary 表格单元格使用了 "bg-primary" 类</p>
  <p class="bg-success"><b>成功</b> .bg-success 表格单元格使用了 "bg-success" 类</p>
  <p class="bg-info"><b>信息</b> .bg-info 表格单元格使用了 "bg-info" 类</p>
  <p class="bg-warning"><b>警告</b> .bg-warning 表格单元格使用了 "bg-warning" 类</p>
  <p class="bg-danger"><b>危险</b> .bg-danger 表格单元格使用了 "bg-danger" 类</p>
  
  <h2>其他</h2>
  <p class="pull-left"> .pull-left 元素浮动到左边 </p>
  <p class="pull-right"> .pull-right 元素浮动到右边 </p>
  <p class="center-block"> .center-block 设置元素为 display:block 并居中显示</p>
  <p class="clearfix"> .clearfix  清除浮动 </p>
  <p class="show"> .show  强制元素显示 </p>
  <p class="hidden"> .hidden  强制元素隐藏 </p>
  <p class="sr-only"> .sr-only 除了屏幕阅读器外，其他设备上隐藏元素</p>
  <p class="sr-only-focusable"> .sr-only-focusable 与 .sr-only 类结合使用，在元素获取焦点时显示(如：键盘操作的用户)</p>
  <p class="text-hide"> .text-hide 将页面元素所包含的文本内容替换为背景图</p>
  <p> .close  显示关闭按钮 <span class="close">X</span> </p>
  <p> .caret  显示下拉式功能 <span class="caret"><i class="sr-only">caret</i></span> </p>

  <h2>Well</h2>
  <p>内容凹陷显示或插图效果，如 div.well 就可以创建一个well效果。使用可选类 well-lg 或 well-sm 来改变 Well 的尺寸大小。这两个类是与 .well 类结合使用的。这两个类会影响内边距（padding），根据使用的类，Well 会显示得更大或者更小。</p>
  <code>
    Zen-Coding:
    div.well{Well内容框}+div.well.well-sm{Well内容框中码}+div.well.well-lg{Well内容框大码}
  </code>
  <div class="well">Well内容框</div>
  <div class="well well-sm">Well内容框中码</div>
  <div class="well well-lg">Well内容框大码</div>


  <h2>进度条</h2>
  <p>Bootstrap 进度条使用 CSS3 过渡和动画来获得该效果。Internet Explorer 9 及之前的版本和旧版的 Firefox 不支持该特性，Opera 12 不支持动画。创建一个基本的进度条就是在 div.progress>div.progress-bar。添加一个带有百分比表示的宽度的 style 属性，例如 style="width: 60%"; 表示进度条在 60% 的位置。进度条还增加了后缀 .progress-bar-success、info、warning、danger 表达不同的语境。多个进度条放在一组会堆叠在一起，要独立展示可以分组。</p>
  <code>
    Zen-Coding:
    div.progress>div.progress-bar.progress-bar-danger[style=width:16%]^div.progress-bar[style=width:45% role=progressbar aria-valuenow=60 aria-valuemin=0 aria-valuemax=100]>span.sr-only{40% 完成}
  </code>

  <div class="progress">
    <div class="progress-bar progress-bar-success" style="width:8%"></div>
    <div class="progress-bar progress-bar-info" style="width:16%"></div>
    <div class="progress-bar progress-bar-warning" style="width:24%"></div>
      <div class="progress-bar" role="progressbar" aria-valuenow="60" 
          aria-valuemin="0" aria-valuemax="100" style="width: 40%;">
          <span class="sr-only">40% 完成</span>
      </div>
    <div class="progress-bar progress-bar-danger" style="width:2%"></div>
  </div>

</div><!-- container -->




<div class="container">
  <h1>WAI-ARIA无障碍网页应用属性</h1>
  <p>WAI-ARIA指无障碍网页应用。主要针对的是视觉缺陷，失聪，行动不便的残疾人以及假装残疾的测试人员。尤其像盲人，眼睛看不到，其浏览网页则需要借助辅助设备，如屏幕阅读器，屏幕阅读机可以大声朗读或者输出盲文。为什么需要ARIA？</p>
  <p><a href="https://www.zhangxinxu.com/wordpress/2012/03/wai-aria-%E6%97%A0%E9%9A%9C%E7%A2%8D%E9%98%85%E8%AF%BB/">WAI-ARIA无障碍网页应用属性完全展示</a></p>
  <ul>
    <li>如何让盲人用户知道当前浏览区域就是网站主导航？</li>
    <li>如果让盲人用户知道点击某个按钮后出来的是弹框？</li>
    <li>如何让盲人用户知道点击某个按钮后页面另外一个区域的文字发生了变化？</li>
    <li>如何让盲人用户知道您使用了li标签是用来模拟标准select控件呢？</li>
    <li>如何让盲人用户知道您模拟的select控件是单选呢还是可以多选呢？</li>
  </ul>
  <p>ARIA规范一直在更新维护，浏览器方面IE8+以及其他所有现代浏览器都都已支持ARIA, 几乎可以说是全方位支持。流行的JavaScript库jQuery, 以及衍生的jQuery Mobile早早支持了ARIA，国内知名JavaScript库kissy也在去年（我没记错的话）支持了ARIA并在实际项目中使用了（可以在淘宝首页寻觅踪迹）。对于常用的选项卡，就是增加几个role属性，增加几个aria-属性就可以了，然后，这个选项卡就变成了很牛逼很碉堡的无障碍阅读选项卡啦。聪明好学的你可能希望知道这里aria-hidden, aria-labelledby是啥意思。 WAI-ARIA无障碍网页应用属性可以参考官方文档，下面提供几个常用属性参考。</p>

  <p>ARIA Roles值示意及说明表 ul[role="group"]</p>
  <ul>
    <li>aria-valuemax 数值。表允许的最大值。用在范围组件上。对应于HTML5中的max属性。</li>
    <li>menu  表示菜单</li>
    <li>menubar 表示菜单栏</li>
    <li>menuitem  表示菜单项</li>
    <li>menuitemcheckbox  表示可复选的菜单项</li>
    <li>menuitemradio 表示只能单选的菜单项</li>
    <li>option  表示选项</li>
    <li>presentation  表示称述</li>
    <li>progressbar 表示进度条</li>
    <li>radio 表示单选</li>
    <li>region  表示区域</li>
    <li>row 表示行</li>
    <li>separator 表示分隔</li>
    <li>slider  表示滑动条</li>
    <li>spinbutton  表示微调 </li>
    <li>tab 表示标签</li>
    <li>tablist 表示标签列表</li>
    <li>timer 表示计数  </li>
    <li>toolbar 表示工具栏</li>
  </ul>

  <p>ARIA 属性值示意及说明表 ul[aria-busy=true]</p>
  <ul>
    <li>aria-atomic 表示区域内容是否完整播报。当为true时，表示辅助设备需要把整个区域内容都通报给使用者；</li>
    <li>aria-autocomplete 表示用户的文本框的自动提示是否提供。可选值有：inline, list, both, none.</li>
    <li>aria-busy 表当前区域的忙碌状态。为true, 表该区域正在加载；或为error, 表示该区域验证无效。</li>
    <li>aria-controls 字符串。空格分隔的id属性值列表。</li>
    <li>aria-label  字符串。</li>
    <li>aria-labelledby 字符串。空格分隔的id</li>
    <li>aria-level  数值。表示等级。</li>
    <li>aria-live 默认为off:不宣布更新；polite:只有用户闲时宣布；assertive:尽快对用户宣布；rude:即时提醒用户。</li>
    <li>aria-multiselectable  表示是否可多选。默认为false, 表示一次只能选择一个项。true表示一次可以选择多个项。</li>
    <li>aria-owns 字符串。值为目标元素id.</li>
    <li>aria-posinset 数值。表示当前位置。</li>
    <li>aria-readonly 字符串。表示是否只读。默认为false, 表示元素值可以被修改；</li>
    <li>aria-relevant 表示区域内哪些操作行为需要做出反应。additions:新增节点的时候做出反应；removals:删除节点时重要操作；text:文本改变是值得重视的；all等同于同时使用上面三个属性值。</li>
    <li>aria-required 字符串。元素值是否必需。默认为false, 表示元素值可以为空；</li>
    <li>aria-secret 字符串。表示机密状态。</li>
    <li>aria-valuemax 数值。表允许的最大值。</li>
    <li>aria-valuemin 数值。表示允许的最小值。</li>
    <li>aria-valuenow 数值。表示当前值。</li>
    <li>aria-valuetext  字符串。定义等同于aria-valuenow人可读的文本。</li>
  </ul>

  <p>ARIA 状态值示意及说明表 input[type=checkbox aria-checked=true]</p>
  <ul>
    <li>aria-checked  字符串。表示检查的状态。true表示元素被选择；false表示元素未被选择；mixed表示元素同时有选择和为选择状态。</li>
    <li>aria-disabled 字符串。表禁用状态，true表示当前是非激活状态；false表示清除非激活状态。</li>
    <li>aria-disabled 字符串。表禁用状态，true表示当前是非激活状态；false表示清除非激活状态。</li>
    <li>aria-expanded 字符串。表示展开状态。默认为undefined, 表示当前展开状态未知。其它可选值：true表示元素是展开的；</li>
    <li>aria-hidden 字符串。可选值为true和false, true表示元素隐藏(不可见)，false表示元素可见。</li>
    <li>aria-invalid  字符串。表示元素值是否错误的。默认为false, 表示是OK的，如果为true, 则表示值验证不通过。</li>
    <li>aria-pressed  表示按下的状态，默认为undfined:按下状态未知，true:元素往下（按钮按下），false:元素抬起，mixed:元素同时有按下和没有按下的状态。</li>
    <li>aria-selected 字符串。表示选择状态。可选值有：true, false, undefined. 默认为undefined，表示元素选择状态未知。</li>
  </ul>

</div><!-- container -->




<div class="container">

  <h1>列表组</h1>
  <p>列表组件用于以列表形式呈现复杂的和自定义的内容，通过添加 span.badge 可以向任意的列表项添加徽章组件，它会自动定位到右边。由于样式优先级不够，不能搭配文本语境色 text-info
text-warning text-danger text-success。创建一个基本的列表组: <kbd>ul.list-group>li.list-group-item{$$$}*5>span.badge{$$}</kbd></p>
  <ul class="list-group">
    <li class="list-group-item">001<span class="badge text-info">01</span></li>
    <li class="list-group-item">002<span class="badge text-warning">02</span></li>
    <li class="list-group-item">003<span class="badge text-danger">03</span></li>
    <li class="list-group-item">004<span class="badge text-success">04</span></li>
    <li class="list-group-item">005<span class="badge">05</span></li>
  </ul>

</div><!-- container -->




<div class="container">
  <h1>超大屏幕（Jumbotron）</h1>
  <p>支持的另一个特性，超大屏幕（Jumbotron）。顾名思义该组件可以增加标题的大小，并为登陆页面内容添加更多的外边距（margin）。使用超大屏幕（Jumbotron）需要创建 div.container>div.jumbotron 容器，内部的内容除了更大的 h1，字体粗细 font-weight 会设置为 200。为了获得占用全部宽度且不带圆角的超大屏幕，请使用 div.jumbotron>div.container。</p>

  <code>
    Zen-Coding:
    div.container>div.jumbotron>h1{欢迎登陆页面！}+p{这是一个超大屏幕（Jumbotron）的实例。}+p>a.btn.btn-primary.btn-lg{学习更多}^^^div.jumbotron>div.container>h1{欢迎登陆页面！}+p{这是一个超大屏幕（Jumbotron）的实例。}+p>a.btn.btn-primary.btn-lg{学习更多}
  </code>

  <div class="container">
    <div class="jumbotron">
      <h1>欢迎登陆页面！</h1>
      <p>这是一个超大屏幕（Jumbotron）的实例。</p>
      <p><a href="" class="btn btn-primary btn-lg">学习更多</a></p>
    </div>
  </div>
  <div class="jumbotron">
    <div class="container">
      <h1>欢迎登陆页面！</h1>
      <p>这是一个超大屏幕（Jumbotron）的实例。</p>
      <p><a href="" class="btn btn-primary btn-lg">学习更多</a></p>
    </div>
  </div>


</div><!-- container -->






<div class="container">
  <h1>警告（Alerts）</h1>
  <p>警告（Alerts）向用户提供了一种定义消息样式的方式。它们为典型的用户操作提供了上下文信息反馈。 您可以为警告框添加一个可选的关闭按钮。为了创建一个内联的可取消的警告框，请使用 警告（Alerts） jQuery 插件。</p>

  <p>通过创建一个 div.alert，搭配四个上下文 class（即 .alert-success、.alert-info、.alert-warning、.alert-danger）来添加一个基本的警告框。</p>
  <code>
    Zen-Coding:
    div.alert.alert-success+div.alert.alert-info+div.alert.alert-warning+div.alert.alert-danger
  </code>

  <div class="alert alert-success">成功！很好地完成了提交。</div>
  <div class="alert alert-info">信息！请注意这个信息。</div>
  <div class="alert alert-warning">警告！请不要提交。</div>
  <div class="alert alert-danger">错误！请进行一些更改。</div>

  <p>创建一个可取消的警告（Dismissal Alert），在基本的警告框添加可选的  button.close[data-dismiss=alert] 即可打开关闭按钮，按键内容可以设置乘号&times;。使用 a.alert-link 实体类来快速提供带有匹配颜色的链接。</p>
  <code>
    Zen-Coding:
    div.alert.alert-success>button.close[data-dismiss=alert]{&times;}^div.alert.alert-info>a.alert-link^div.alert.alert-warning+div.alert.alert-danger
  </code>

  <div class="alert alert-success ">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true"> &times; </button>
        成功！很好地完成了提交。
    </div>
    <div class="alert alert-info alert-dismissable">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true"> &times; </button>
      <a href="#" class="alert-link">信息！请注意这个信息链接。</a>
    </div>
    <div class="alert alert-warning alert-dismissable">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true"> &times; </button>
        警告！请不要提交。
    </div>
    <div class="alert alert-danger alert-dismissable">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true"> &times; </button>
        错误！请进行一些更改。
    </div>

</div><!-- container -->




<div class="container">

  <h1>表格</h1>

  <p>表格样式 table.table.table-striped.table-bordered.table-hover.table-condensed</p>
  <table class="table table-striped table-bordered table-hover table-condensed">
    <thead>
      <tr>
        <th>样式类</th>
        <th>效果</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>.table</td>
        <td>  为任意 &lt;table&gt; 添加基本样式 (只有横向分隔线)</td>
      </tr>
      <tr>
        <td>.table-striped</td>
        <td>  在 &lt;tbody&gt; 添加隔行条纹 ( IE8 不支持)</td>
      </tr>
      <tr>
        <td>.table-bordered</td>
        <td>  为所有表格的单元格添加边框</td>
      </tr>
      <tr>
        <td>.table-hover</td>
        <td>  在 &lt;tbody&gt; 内的任一行启用鼠标悬停状态</td>
      </tr>
      <tr>
        <td>.table-condensed</td>
        <td>  让表格更加紧凑</td>
      </tr>
    </tbody>
  </table>

  <p>表格样式 table.table.table-striped.table-hover</p>
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th>结合色彩样式</th>
        <th>效果</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="active">.active</td>
        <td>  将悬停的颜色应用在行或者单元格上</td>
      </tr>
      <tr>
        <td class="success">.success</td>
        <td>  表示成功的操作</td>
      </tr>
      <tr>
        <td class="info">.info</td>
        <td>  表示信息变化的操作</td>
      </tr>
      <tr>
        <td class="warning">.warning</td>
        <td>  表示一个警告的操作</td>
      </tr>
      <tr>
        <td class="danger">.danger</td>
        <td>  表示一个危险的操作</td>
      </tr>
    </tbody>
  </table>

  <!-- div.table-responsive>table.table>caption+thead>tr>th*3^^tbody>tr*4>td*3 -->

  <code>Zen-Coding 表格生成代码： div.table-responsive>table.table>caption+thead>tr>th*3^^tbody>tr*4>td*3</code>
  <div class="table-responsive">
    <table class="table">
    <caption>响应式表格布局：通过 div.table-responsive>table.table，您可以让表格水平滚动以适应小型设备（小于 768px）。当在大于 768px 宽的大型设备上查看时，您将看不到任何的差别。</caption>
    <thead>
      <tr>
        <th>产品</th>
        <th>付款日期</th>
        <th>状态</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>产品1</td>
        <td>23/11/2013</td>
        <td>待发货</td></tr>
      <tr>
        <td>产品2</td>
        <td>10/11/2013</td>
        <td>发货中</td></tr>
      <tr>
        <td>产品3</td>
        <td>20/10/2013</td>
        <td>待确认</td></tr>
      <tr>
        <td>产品4</td>
        <td>20/10/2013</td>
        <td>已退货</td></tr>
    </tbody>
    </table>
  </div>

</div><!-- container -->






<div class="container">
  <h1>Bootstrap 表单</h1>

  <h2>垂直或基本表单</h2>

  <p>基本的表单结构是 Bootstrap 自带的，个别的表单控件自动接收一些全局样式。下面列出了创建基本表单的步骤： </p>
  <ol>
    <li>向父 &lt;form&gt; 元素添加 role="form"。</li>
    <li>把标签和控件放在一个带有 class .form-group 的 &lt;div&gt; 中。这是获取最佳间距所必需的。</li>
    <li>向所有的文本元素 &lt;input&gt;、&lt;textarea&gt; 和 &lt;select&gt; 添加 class ="form-control" 。</li>
  </ol>
  
  <code>Zen-Coding: form[role=form]>div.form-group>label[for=name]{名称}+input.form-control#name[placeholder=请输入名称]^div.form-group>label[for=file]{文件}+input#file[type=file]+p{请选择文件}^div.checkbox>label>input[type=checkbox]{请勾选}^^button.btn.btn-default[type=submit]</code>
  <form role="form">
    <div class="form-group">
      <label for="name">名称</label>
      <input type="text" class="form-control" id="name" placeholder="请输入名称">
    </div>
    <div class="form-group">
      <label for="inputfile">文件输入</label>
      <input type="file" id="inputfile">
      <p class="help-block">这里是块级帮助文本的实例。</p>
    </div>
    <div class="checkbox">
      <label>
        <input type="checkbox">请打勾
      </label>
    </div>
    <button type="submit" class="btn btn-default">提交</button>
  </form>

  <h2>内联表单</h2>
  <p>如果需要创建一个表单，它的所有元素是内联的，向左对齐的，标签是并排的，请向 &lt;form&gt; 标签添加 class .form-inline。默认情况下，Bootstrap 中的 input、select 和 textarea 有 100% 宽度。在使用内联表单时，您需要在表单控件上设置一个宽度。 使用 class .sr-only，您可以隐藏内联表单的标签。</p>
  <code>Zen-Coding: form.form-inline[role=form]>div.form-group>label[for=name]{名称}+input.form-control#name[placeholder=请输入名称]^div.form-group>label[for=file]{文件}+input#file[type=file]+p{请选择文件}^div.checkbox>label>input[type=checkbox]{请勾选}^^button.btn.btn-default[type=submit]{提交}</code>

  <form action="" class="form-inline" role="form">
    <div class="form-group"><label for="name">名称</label><input type="text" class="form-control" id="name" placeholder="请输入名称"></div>
    <div class="form-group">
      <label for="file">文件</label>
      <input type="file" id="file">
      <!-- <p>请选择文件</p> -->
    </div>
    <div class="checkbox"><label for=""><input type="checkbox">请勾选</input></label></div>
    <button class="btn btn-default" type="submit">提交</button>
  </form>

  <h2>水平表单</h2>
  <p>水平表单与其他表单不仅标记的数量上不同，而且表单的呈现形式也不同。如需创建一个水平布局的表单，请按下面的几个步骤进行：</p>
  <ol>
    <li>使用表单 form.form-horizontal。</li>
    <li>把标签和控件放在一个 div.form-group 中。</li>
    <li>使用标签 label.control-label。</li>
  </ol>
  <code>Zen-Coding: form.form-horizontal[role=form]>div.form-group>label[for=name]{名称}+input.form-control#name[placeholder=请输入名称]^div.form-group>label[for=file]{文件}+input#file[type=file]+p.sr-only{请选择文件}^div.checkbox>label.form-control>input#cb[name=check,type=checkbox]{请勾选}^^button.btn.btn-default[type=submit]{提交}</code>

  <form action="" class="form-horizontal" role="form">
    <div class="form-group"><label for="name">名称</label><input type="text" class="form-control" id="name" placeholder="请输入名称"></div>
    <div class="form-group">
      <label for="file">文件</label>
      <input class="form-control" type="file" id="file">
      <p class="sr-only">请选择文件</p>
    </div>
    <div class="checkbox form-control" ><label for="cb"><input id="cb" type="checkbox">请勾选</input></label></div>
    <button class="btn btn-default" type="submit">提交</button>
  </form>


  <h2>输入框（Input）文本框（Textarea）</h2>
  <p>最常见的表单文本字段是输入框 input。用户可以在其中输入大多数必要的表单数据。Bootstrap 提供了对所有原生的 HTML5 的 input 类型的支持，包括：text、password、datetime、datetime-local、date、month、time、week、number、email、url、search、tel 和 color。适当的 type 声明是必需的，这样才能让 input 获得完整的样式。</p>
  <p>当您需要进行多行输入的时，则可以使用文本框 textarea。必要时可以改变 rows 属性（较少的行 = 较小的盒子，较多的行 = 较大的盒子）。</p>
  <code>Zen-Coding: form[role=form;name=me]>div.form-group>label[for=name]{输入框}+input.form-control+label[for=brief]{文本框}+textarea.form-control[rows=3]</code>

  <form role="form">
    <div class="form-group">
      <label for="name">输入框</label>
      <input class="form-control"></input>
      <label for="name">文本框</label>
      <textarea class="form-control" rows="3"></textarea>
    </div>
  </form>

  <h2>复选框（Checkbox）和单选框（Radio）</h2>
  <p> 当创建表单时，如果您想让用户从列表中选择若干个选项时，请使用 checkbox。如果您限制用户只能选择一个选项，请使用 radio。 对一系列复选框和单选框使用 .checkbox-inline 或 .radio-inline class，控制它们显示在同一行上。</p>

  <code>Zen-Coding: 
    form[role=form]>div.form-group>label{默认的复选框单选按钮的实例}+label.checkbox[for=ida]{Option A}>input#ida[type=checkbox]^+label.radio[for=idb]{Option B}>input#idb[type=radio name=presets]^+label.radio[for=idc]{Option C}>input#idc[type=radio name=presets]^^div.form-group>label{内联的复选框和单选按钮的实例}+label.checkbox-inline[for=idx]{Option X}>input#idx[type=checkbox]^+label.radio-inline[for=idy]{Option Y}>input#idy[type=radio name=presets]^+label.radio-inline[for=idz]{Option Z}>input#idz[type=radio name=presets]
  </code>
  <form action="" role="form">
    <div class="form-group">
      <label for="">默认的复选框单选按钮的实例</label>
      <label for="ida" class="checkbox"><input type="checkbox" id="ida"> Option A</label>
      <label for="idb" class="radio"><input type="radio" id="idb" name="presets"> Option B</label>
      <label for="idc" class="radio"><input type="radio" id="idc" name="presets"> Option C</label>
    </div>
    <div class="form-group">
      <label for="">内联的复选框和单选按钮的实例</label>
      <label for="idx" class="checkbox-inline"><input type="checkbox" id="idx"> Option X</label>
      <label for="idy" class="radio-inline"><input type="radio" id="idy" name="presets"> Option Y</label>
      <label for="idz" class="radio-inline"><input type="radio" id="idz" name="presets"> Option Z</label>
    </div>
  </form>

  <h2>选择框（Select）</h2>
  <p>当您想让用户从多个选项中进行选择，但是默认情况下只能选择一个选项时，则使用选择框。 使用 select 展示列表选项，通常是那些用户很熟悉的选择列表，比如州或者数字。 使用 multiple="multiple" 允许用户选择多个选项。 下面的实例演示了这两种类型（select 和 multiple）：</p>
  <code>Zen-Coding: 
    form[role=form]>div.form-group>label[for=single]{选择列表}+select.form-control[id=single]>option{option $}*5^label[for=multiple]{可多选的选择列表}+select.form-control[multiple]>option{option $}*5
  </code>
  <form action="" role="form">
    <div class="form-group">
      <label for="single">选择列表</label>
      <select name="" id="single" class="form-control">
        <option value="">option 1</option>
        <option value="">option 2</option>
        <option value="">option 3</option>
        <option value="">option 4</option>
        <option value="">option 5</option>
      </select>
      <label for="multiple">可多选的选择列表</label>
      <select name="" id="" class="form-control" multiple="">
        <option value="">option 1</option>
        <option value="">option 2</option>
        <option value="">option 3</option>
        <option value="">option 4</option>
        <option value="">option 5</option>
      </select>
    </div>
  </form>
  <script>
    // $('select').selectpicker();
  </script>

  <h2>其它表单项</h2>
  <p>当您需要在一个水平表单内的表单标签后放置纯文本时，请在使用 p.form-control-static。</p>

  <form class="form-horizontal" role="form">
    <div class="form-group">
      <label class="col-sm-2 control-label">Email</label>
      <div class="col-sm-10">
        <p class="form-control-static">email@example.com</p>
      </div>
    </div>
    <div class="form-group">
      <label for="inputPassword" class="col-sm-2 control-label">密码</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword" placeholder="请输入密码">
      </div>
    </div>
  </form>

  <h2>表单控件状态</h2>
  <p>除了 :focus 状态（即，用户点击 input 或使用 tab 键聚焦到 input 上），Bootstrap 还为禁用的输入框定义了样式，并提供了表单验证的 class。</p>
  <p>当输入框 input 接收到输入焦点 :focus 时，输入框的轮廓会被移除，同时应用 box-shadow。</p>
  <p>如果您想要禁用一个输入框 input，只需要简单地添加 disabled 属性，这不仅会禁用输入框，还会改变输入框的样式以及当鼠标的指针悬停在元素上时鼠标指针的样式。</p>
  <p>对 fieldset 添加 disabled 属性来禁用内部所有控件。</p>
  <p>错误、警告和成功消息的验证样式，对父元素添加适当的 class（.has-warning、 .has-error 或 .has-success）即可使用验证状态。</p>
  <p>表单控件大小可以分别使用 input.input-lg 和 div.row>div.col-lg-* 来设置表单的高度和宽度所占网格。</p>
  <p>表单控件可以在输入框 input 上有一个块级帮助文本。为了添加一个占用整个宽度的内容块，请在使用 input+span.help-block{块级帮助文本}。</p>

  <form class="form-horizontal" role="form">
    <div class="form-group">
      <label class="col-sm-2 control-label">聚焦</label>
      <div class="col-sm-10">
        <div class="row col-lg-4">
          <input class="form-control" id="focusedInput" type="text"  value="该输入框获得焦点... .col-lg-4">
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="inputPassword" class="col-sm-2 control-label"> 禁用 </label>
      <div class="col-sm-10">
        <input class="form-control input-lg" id="disabledInput" type="text" placeholder="该输入框禁止输入... .input-lg" disabled>
      </div>
    </div>
    <fieldset disabled>
      <div class="form-group">
        <label for="disabledTextInput"  class="col-sm-2 control-label">禁用输入（Fieldset disabled </label>
        <div class="col-sm-10">
          <div class="row col-lg-6">
            <input type="text" id="disabledTextInput input-lg" class="form-control"  placeholder="禁止输入 .col-lg-6 .input-lg">
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="disabledSelect"  class="col-sm-2 control-label">禁用选择菜单（Fieldset disabled）
        </label>
        <div class="col-sm-10">
          <select id="disabledSelect" class="form-control">
            <option>禁止选择</option>
          </select>
        </div>
      </div>
    </fieldset>
    <div class="form-group has-success">
      <label class="col-sm-2 control-label" for="inputSuccess"> 输入成功 div.has-success </label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="inputSuccess">
      </div>
    </div>
    <div class="form-group has-warning">
      <label class="col-sm-2 control-label" for="inputWarning"> 输入警告 div.has-warning </label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="inputWarning">
      </div>
    </div>
    <div class="form-group has-error">
      <label class="col-sm-2 control-label" for="inputError"> 输入错误 div.has-error </label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="inputError">
      </div>
    </div>
    <div class="row">
      <div class="col-lg-2">
        <input type="text" class="form-control" placeholder=".col-lg-2">
      </div>
      <div class="col-lg-3">
        <input type="text" class="form-control" placeholder=".col-lg-3">
      </div>
      <div class="col-lg-4">
        <input type="text" class="form-control" placeholder=".col-lg-4">
      </div>
    </div>    
  </form>


</div><!-- container -->



<div class="container">
  <h1>响应式实用工具</h1>
  <p>Bootstrap 提供了一些辅助类，以便更快地实现对移动设备友好的开发。这些可以通过媒体查询结合大型、小型和中型设备，实现内容对设备的显示和隐藏。需要谨慎使用这些工具，避免在同一个站点创建完全不同的版本。响应式实用工具目前只适用于块和表切换。</p>

  <pre> 
                  超小屏幕 手机 (<768px)    小屏幕 平板 (≥768px)    中等屏幕 桌面 (≥992px)    大屏幕 桌面 (≥1200px)
  .visible-xs-*   可见                     隐藏                    隐藏                     隐藏
  .visible-sm-*   隐藏                     可见                    隐藏                     隐藏
  .visible-md-*   隐藏                     隐藏                    可见                     隐藏
  .visible-lg-*   隐藏                     隐藏                    隐藏                     可见
  .hidden-xs      隐藏                     可见                    可见                     可见
  .hidden-sm      可见                     隐藏                    可见                     可见
  .hidden-md      可见                     可见                    隐藏                     可见
  .hidden-lg      可见                     可见                    可见                     隐藏
  </pre>
  <p>从 v3.2.0 版本起，形如 .visible-*-* 的类针对每种屏幕大小都有了三种变体，每个针对 CSS 中不同的 display 属性，列表如下：</p>
  <pre>
  类组  CSS                 display
  .visible-*-block        display: block;
  .visible-*-inline       display: inline;
  .visible-*-inline-block display: inline-block;  
  </pre>
  <p>因此，以超小屏幕（xs）为例，可用的 .visible-*-* 类是：.visible-xs-block、.visible-xs-inline 和 .visible-xs-inline-block。 .visible-xs、.visible-sm、.visible-md 和 .visible-lg 类也同时存在。但是从 v3.2.0 版本开始不再建议使用。除了 table 相关的元素的特殊情况外，它们与 .visible-*-block 大体相同。</p>

  <h2>打印类</h2>
  下表列出了打印类。使用这些切换打印内容。
  <pre>
  class                        浏览器   打印机
  .visible-print-block         隐藏     可见
  .visible-print-inline        隐藏     可见
  .visible-print-inline-block  隐藏     可见
  .hidden-print                可见     隐藏</pre>

  <p>下面的实例演示了上面所列举的帮助器类的用法。调整浏览器的窗口大小，或者在不同的设备上加载实例，测试响应式实用工具类。</p>

  <div class="container" style="padding: 40px;">
      <div class="row visible-on">
          <div class="col-xs-6 col-sm-3" style="background-color: #dedef8; box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;">
              <span class="hidden-xs">特别小型 超小屏幕 手机 (<768px)</span>
              <span class="visible-xs">✔ 在特别小型设备上可见</span>
          </div>
          <div class="col-xs-6 col-sm-3" style="background-color: #dedef8; box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;">
              <span class="hidden-sm">小型 小屏幕 平板 (≥768px)</span>
              <span class="visible-sm">✔ 在小型设备上可见</span>
          </div>
          <div class="clearfix visible-xs"></div>
          <div class="col-xs-6 col-sm-3" style="background-color: #dedef8; box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;">
              <span class="hidden-md">中型 中等屏幕 桌面 (≥992px)</span>
              <span class="visible-md">✔ 在中型设备上可见</span>
          </div>
          <div class="col-xs-6 col-sm-3" style="background-color: #dedef8; box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;">
              <span class="hidden-lg">大型 大屏幕 桌面 (≥1200px)</span>
              <span class="visible-lg">✔ 在大型设备上可见</span>
          </div>
      </div>
  </div>
</div> <!-- container -->







<div class="container">
  <h1>Bootstrap 网格系统（Grid System）</h1>

  <h2>基本原理</h2>
  <ul>
    <li><p>网格系统通过一系列包含内容的行和列来创建页面布局。下面列出了 Bootstrap 网格系统是如何工作的：</p></li>
    <li><p>行必须放置在 .container class 内，以便获得适当的对齐（alignment）和内边距（padding）。</p></li>
    <li><p>使用行来创建列的水平组。</p></li>
    <li><p>内容应该放置在列内，且唯有列可以是行的直接子元素。</p></li>
    <li><p>预定义的网格类，比如 .row 和 .col-xs-4，可用于快速创建网格布局。LESS 混合类可用于更多语义布局。</p></li>
    <li><p>列通过内边距（padding）来创建列内容之间的间隙。该内边距是通过 .rows 上的外边距（margin）取负，表示第一列和最后一列的行偏移。</p></li>
    <li><p>网格系统是通过指定您想要横跨的十二个可用的列来创建的。例如，要创建三个相等的列，则使用三个 .col-xs-4。</p></li>
  </ul>
  
  <h2>媒体查询</h2>
  媒体查询是非常别致的"有条件的 CSS 规则"。它只适用于一些基于某些规定条件的 CSS。如果满足那些条件，则应用相应的样式。
  Bootstrap 中的媒体查询允许您基于视口大小移动、显示并隐藏内容。下面的媒体查询在 LESS 文件中使用，用来创建 Bootstrap 网格系统中的关键的分界点阈值。

  <pre>
  /* 超小设备（手机，小于 768px） */
  /* Bootstrap 中默认情况下没有媒体查询 */

  /* 小型设备（平板电脑，768px 起） */
  @media (min-width: @screen-sm-min) { ... }

  /* 中型设备（台式电脑，992px 起） */
  @media (min-width: @screen-md-min) { ... }

  /* 大型设备（大台式电脑，1200px 起） */
  @media (min-width: @screen-lg-min) { ... }
  </pre>

  <p>我们有时候也会在媒体查询代码中包含 max-width，从而将 CSS 的影响限制在更小范围的屏幕大小之内。</p>

    <pre>
  @media (max-width: @screen-xs-max) { ... }
  @media (min-width: @screen-sm-min) and (max-width: @screen-sm-max) { ... }
  @media (min-width: @screen-md-min) and (max-width: @screen-md-max) { ... }
  @media (min-width: @screen-lg-min) { ... }
    </pre>

  <p>媒体查询有两个部分，先是一个设备规范，然后是一个大小规则。在上面的案例中，设置了下列的规则，让我们来看下面这行代码：</p>

  <pre>
  @media (min-width: @screen-sm-min) and (max-width: @screen-sm-max) { ... }
  </pre>

  <p>对于所有带有 min-width: @screen-sm-min 的设备，如果屏幕的宽度小于 @screen-sm-max，则会进行一些处理。</p>

  <h2>网格选项</h2>
  <p>下表总结了 Bootstrap 网格系统如何跨多个设备工作：</p>
  <pre>
                超小设备手机（<768px）   小型设备平板电脑（≥768px）    中型设备台式电脑（≥992px）    大型设备台式电脑（≥1200px）
  网格行为       一直是水平的             以折叠开始，断点以上是水平的  以折叠开始，断点以上是水平的  以折叠开始，断点以上是水平的
  最大容器宽度   None (auto)             750px                       970px                       1170px
  Class 前缀     .col-xs-                .col-sm-                    .col-md-                    .col-lg-
  列数量和       12                      12                          12                          12
  最大列宽       Auto                    60px                        78px                        95px
  间隙宽度       30px 每边分别 15px       30px 每边分别 15px          30px 每边分别 15px          30px 每边分别 15px
  可嵌套         Yes                     Yes                         Yes                         Yes
  偏移量         Yes                     Yes                         Yes                         Yes
  列排序         Yes                     Yes                         Yes                         Yes
  </pre>

  <h2>基本的网格结构</h2>
  <p>下面是 Bootstrap 网格的基本结构：</p>

  <pre>
  &lt;div class="container"&gt;
     &lt;div class="row"&gt;
        &lt;div class="col-xs-12">col-xs-12&lt;/div&gt;
        &lt;div class="col-md-6">col-md-6&lt;/div&gt;
     &lt;/div&gt;
     &lt;div class="row">...&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="container">...&gt;</pre>

  <!-- 
    <div class="container">
       <div class="row">
          <div class="col-xs-12">col-xs-12</div>
          <div class="col-md-6">col-md-6</div>      
       </div>
       <div class="row">...</div>
    </div>
   -->
</div><!-- container -->


<div class="container">
  <h1>Bootstrap 排版</h1>
  <p class="lead">.lead   使段落突出显示使段落突出显示</p>
  <p class="small">.small   设定小文本设定小文本 (设置为父文本的 85% 大小)</p>
  <p class="text-left">.text-left 设定文本左对齐</p>
  <p class="text-center">.text-center 设定文本居中对齐</p>
  <p class="text-right">.text-right 设定文本右对齐</p>
  <p class="text-justify">.text-justify 设定文本对齐,段落中超出屏幕部分文字自动换行</p>
  <p class="text-nowrap">.text-nowrap 段落中超出屏幕部分不换行</p>
  <p class="text-lowercase">.text-lowercase 设定文本小写</p>
  <p class="text-uppercase">.text-uppercase 设定文本大写</p>
  <p class="text-capitalize">.text-capitalize 设定单词首字母大写</p>
  <p class="initialism">.initialism   显示在显示在 &lt;abbr&gt; 元素中的文本以小号字体展示，且可以将小写字母转换为大写字母</p>
  <p class="blockquote-reverse">.blockquote-reverse 设定引用右对齐</p>
  <p class="list-unstyled">.list-unstyled 移除默认的列表样式，列表项中左对齐 ( &lt;ul&gt; 和 &lt;ol&gt; 中)。 </p>
  <p class="list-inline">.list-inline 将所有列表项放置同一行</p>
  <p class="dl-horizontal">.dl-horizontal 该类设置了浮动和偏移，应用于 &lt;dl&gt; 元素和 &lt;dt&gt; 元素中，具体实现可以查看实例</p>
  <p class="pre-scrollable">.pre-scrollable 使 &lt;pre&gt; 元素可滚动，代码块区域最大高度为340px,一旦超出这个高度,就会在Y轴出现滚动条 </p>
</div><!-- container -->


<div class="container">
  <h1>Bootstrap 字体图标 Glyphicons</h1>
  <a href="http://www.runoob.com/try/demo_source/bootstrap3-glyph-icons.htm">Bootstrap 图标示例</a>

  <p>Bootstrap 捆绑了 200 多种字体格式的字形。首先让我们先来理解一下什么是字体图标。 字体图标是在 Web 项目中使用的图标字体。虽然，Glyphicons Halflings 需要商业许可，但是您可以通过基于项目的 Bootstrap 来免费使用这些图标。 为了表示对图标作者的感谢，希望您在使用时加上 GLYPHICONS 网站的链接。 我们已经在 环境安装 章节下载了 Bootstrap 3.x 版本，并理解了它的目录结构。在 fonts 文件夹内可以找到字体图标，它包含了下列这些文件：</p>

  <pre>glyphicons-halflings-regular.eot
  glyphicons-halflings-regular.svg
  glyphicons-halflings-regular.ttf
  glyphicons-halflings-regular.woff</pre>

  <p>字体图标一大好处就是可以通过修改字体大小颜色来改变图案，还可以使用其它的CSS来设置外观，如阴影 text-shadow: black 5px 3px 3px; 相关的 CSS 规则写在 dist 文件夹内的 css 文件夹内的 bootstrap.css 和 bootstrap-min.css 文件上。</p>
  <code> Zen-Coding:
    div>button.btn.btn-default>span.glyphicon.glyphicon-sort-by-attributes^button.btn.btn-default>span.glyphicon.glyphicon-sort-by-attributes-alt^button.btn.btn-default>span.glyphicon.glyphicon-sort-by-order^button.btn.btn-default>span.glyphicon.glyphicon-sort-by-order-alt
    div>button.btn.btn-default.btn-lg>span.glyphicon.glyphicon-user^button.btn.btn-default.btn-sm>span.glyphicon.glyphicon-user^button.btn.btn-default.btn-xs>span.glyphicon.glyphicon-user
  </code>

  <div>
    <button class="btn btn-default"><span class="glyphicon glyphicon-sort-by-attributes"></span></button>
    <button class="btn btn-default"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span></button>
    <button class="btn btn-default"><span class="glyphicon glyphicon-sort-by-order"></span></button>
    <button class="btn btn-default"><span class="glyphicon glyphicon-sort-by-order-alt"></span></button>
  </div>
  <div>
    <button class="btn btn-default btn-lg"><span style="text-shadow: black 5px 3px 3px;" class="glyphicon glyphicon-user"></span></button>
    <button class="btn btn-default btn-sm"><span class="glyphicon glyphicon-user"></span></button>
    <button class="btn btn-default btn-xs"><span class="glyphicon glyphicon-user"></span></button>
  </div>

  <div><button class="icon-glyph"><span class="glyphicon glyphicon-adjust"></span> .glyphicon-adjust</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-align-center"></span> .glyphicon-align-center</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-align-justify"></span> .glyphicon-align-justify</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-align-left"></span> .glyphicon-align-left</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-align-right"></span> .glyphicon-align-right</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-arrow-down"></span> .glyphicon-arrow-down</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-arrow-left"></span> .glyphicon-arrow-left</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-arrow-right"></span> .glyphicon-arrow-right</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-arrow-up"></span> .glyphicon-arrow-up</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-asterisk"></span> .glyphicon-asterisk</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-backward"></span> .glyphicon-backward</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-ban-circle"></span> .glyphicon-ban-circle</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-barcode"></span> .glyphicon-barcode</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-bell"></span> .glyphicon-bell</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-bold"></span> .glyphicon-bold</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-book"></span> .glyphicon-book</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-bookmark"></span> .glyphicon-bookmark</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-briefcase"></span> .glyphicon-briefcase</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-bullhorn"></span> .glyphicon-bullhorn</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-calendar"></span> .glyphicon-calendar</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-camera"></span> .glyphicon-camera</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-certificate"></span> .glyphicon-certificate</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-check"></span> .glyphicon-check</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-chevron-down"></span> .glyphicon-chevron-down</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-chevron-left"></span> .glyphicon-chevron-left</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-chevron-right"></span> .glyphicon-chevron-right</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-chevron-up"></span> .glyphicon-chevron-up</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-circle-arrow-down"></span> .glyphicon-circle-arrow-down</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-circle-arrow-left"></span> .glyphicon-circle-arrow-left</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-circle-arrow-right"></span> .glyphicon-circle-arrow-right</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-circle-arrow-up"></span> .glyphicon-circle-arrow-up</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-cloud"></span> .glyphicon-cloud</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-cloud-download"></span> .glyphicon-cloud-download</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-cloud-upload"></span> .glyphicon-cloud-upload</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-cog"></span> .glyphicon-cog</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-collapse-down"></span> .glyphicon-collapse-down</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-collapse-up"></span> .glyphicon-collapse-up</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-comment"></span> .glyphicon-comment</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-compressed"></span> .glyphicon-compressed</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-copyright-mark"></span> .glyphicon-copyright-mark</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-credit-card"></span> .glyphicon-credit-card</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-cutlery"></span> .glyphicon-cutlery</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-dashboard"></span> .glyphicon-dashboard</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-download"></span> .glyphicon-download</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-download-alt"></span> .glyphicon-download-alt</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-earphone"></span> .glyphicon-earphone</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-edit"></span> .glyphicon-edit</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-eject"></span> .glyphicon-eject</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-envelope"></span> .glyphicon-envelope</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-euro"></span> .glyphicon-euro</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-exclamation-sign"></span> .glyphicon-exclamation-sign</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-expand"></span> .glyphicon-expand</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-export"></span> .glyphicon-export</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-eye-close"></span> .glyphicon-eye-close</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-eye-open"></span> .glyphicon-eye-open</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-facetime-video"></span> .glyphicon-facetime-video</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-fast-backward"></span> .glyphicon-fast-backward</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-fast-forward"></span> .glyphicon-fast-forward</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-file"></span> .glyphicon-file</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-film"></span> .glyphicon-film</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-filter"></span> .glyphicon-filter</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-fire"></span> .glyphicon-fire</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-flag"></span> .glyphicon-flag</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-flash"></span> .glyphicon-flash</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-floppy-disk"></span> .glyphicon-floppy-disk</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-floppy-open"></span> .glyphicon-floppy-open</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-floppy-remove"></span> .glyphicon-floppy-remove</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-floppy-save"></span> .glyphicon-floppy-save</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-floppy-saved"></span> .glyphicon-floppy-saved</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-folder-close"></span> .glyphicon-folder-close</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-folder-open"></span> .glyphicon-folder-open</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-font"></span> .glyphicon-font</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-forward"></span> .glyphicon-forward</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-fullscreen"></span> .glyphicon-fullscreen</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-gbp"></span> .glyphicon-gbp</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-gift"></span> .glyphicon-gift</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-glass"></span> .glyphicon-glass</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-globe"></span> .glyphicon-globe</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-hand-down"></span> .glyphicon-hand-down</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-hand-left"></span> .glyphicon-hand-left</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-hand-right"></span> .glyphicon-hand-right</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-hand-up"></span> .glyphicon-hand-up</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-hd-video"></span> .glyphicon-hd-video</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-hdd"></span> .glyphicon-hdd</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-header"></span> .glyphicon-header</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-headphones"></span> .glyphicon-headphones</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-heart"></span> .glyphicon-heart</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-heart-empty"></span> .glyphicon-heart-empty</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-home"></span> .glyphicon-home</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-import"></span> .glyphicon-import</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-inbox"></span> .glyphicon-inbox</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-indent-left"></span> .glyphicon-indent-left</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-indent-right"></span> .glyphicon-indent-right</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-info-sign"></span> .glyphicon-info-sign</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-italic"></span> .glyphicon-italic</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-leaf"></span> .glyphicon-leaf</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-link"></span> .glyphicon-link</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-list"></span> .glyphicon-list</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-list-alt"></span> .glyphicon-list-alt</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-lock"></span> .glyphicon-lock</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-log-in"></span> .glyphicon-log-in</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-log-out"></span> .glyphicon-log-out</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-magnet"></span> .glyphicon-magnet</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-map-marker"></span> .glyphicon-map-marker</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-minus"></span> .glyphicon-minus</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-minus-sign"></span> .glyphicon-minus-sign</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-move"></span> .glyphicon-move</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-music"></span> .glyphicon-music</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-new-window"></span> .glyphicon-new-window</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-off"></span> .glyphicon-off</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-ok"></span> .glyphicon-ok</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-ok-circle"></span> .glyphicon-ok-circle</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-ok-sign"></span> .glyphicon-ok-sign</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-open"></span> .glyphicon-open</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-paperclip"></span> .glyphicon-paperclip</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-pause"></span> .glyphicon-pause</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-pencil"></span> .glyphicon-pencil</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-phone"></span> .glyphicon-phone</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-phone-alt"></span> .glyphicon-phone-alt</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-picture"></span> .glyphicon-picture</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-plane"></span> .glyphicon-plane</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-play"></span> .glyphicon-play</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-play-circle"></span> .glyphicon-play-circle</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-plus"></span> .glyphicon-plus</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-plus-sign"></span> .glyphicon-plus-sign</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-print"></span> .glyphicon-print</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-pushpin"></span> .glyphicon-pushpin</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-qrcode"></span> .glyphicon-qrcode</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-question-sign"></span> .glyphicon-question-sign</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-random"></span> .glyphicon-random</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-record"></span> .glyphicon-record</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-refresh"></span> .glyphicon-refresh</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-registration-mark"></span> .glyphicon-registration-mark</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-remove"></span> .glyphicon-remove</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-remove-circle"></span> .glyphicon-remove-circle</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-remove-sign"></span> .glyphicon-remove-sign</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-repeat"></span> .glyphicon-repeat</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-resize-full"></span> .glyphicon-resize-full</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-resize-horizontal"></span> .glyphicon-resize-horizontal</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-resize-small"></span> .glyphicon-resize-small</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-resize-vertical"></span> .glyphicon-resize-vertical</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-retweet"></span> .glyphicon-retweet</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-road"></span> .glyphicon-road</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-save"></span> .glyphicon-save</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-saved"></span> .glyphicon-saved</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-screenshot"></span> .glyphicon-screenshot</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-sd-video"></span> .glyphicon-sd-video</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-search"></span> .glyphicon-search</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-send"></span> .glyphicon-send</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-share"></span> .glyphicon-share</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-share-alt"></span> .glyphicon-share-alt</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-shopping-cart"></span> .glyphicon-shopping-cart</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-signal"></span> .glyphicon-signal</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-sort"></span> .glyphicon-sort</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-sort-by-alphabet"></span> .glyphicon-sort-by-alphabet</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-sort-by-alphabet-alt"></span> .glyphicon-sort-by-alphabet-alt></button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-sort-by-attributes"></span> .glyphicon-sort-by-attributes</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> .glyphicon-sort-by-attributes-alt</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-sort-by-order"></span> .glyphicon-sort-by-order</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-sort-by-order-alt"></span> .glyphicon-sort-by-order-alt</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-sound-5-1"></span> .glyphicon-sound-5-1</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-sound-6-1"></span> .glyphicon-sound-6-1</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-sound-7-1"></span> .glyphicon-sound-7-1</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-sound-dolby"></span> .glyphicon-sound-dolby</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-sound-stereo"></span> .glyphicon-sound-stereo</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-star"></span> .glyphicon-star</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-star-empty"></span> .glyphicon-star-empty</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-stats"></span> .glyphicon-stats</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-step-backward"></span> .glyphicon-step-backward</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-step-forward"></span> .glyphicon-step-forward</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-stop"></span> .glyphicon-stop</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-subtitles"></span> .glyphicon-subtitles</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-tag"></span> .glyphicon-tag</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-tags"></span> .glyphicon-tags</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-tasks"></span> .glyphicon-tasks</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-text-height"></span> .glyphicon-text-height</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-text-width"></span> .glyphicon-text-width</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-th"></span> .glyphicon-th</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-th-large"></span> .glyphicon-th-large</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-th-list"></span> .glyphicon-th-list</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-thumbs-down"></span> .glyphicon-thumbs-down</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-thumbs-up"></span> .glyphicon-thumbs-up</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-time"></span> .glyphicon-time</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-tint"></span> .glyphicon-tint</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-tower"></span> .glyphicon-tower</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-transfer"></span> .glyphicon-transfer</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-trash"></span> .glyphicon-trash</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-tree-conifer"></span> .glyphicon-tree-conifer</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-tree-deciduous"></span> .glyphicon-tree-deciduous</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-unchecked"></span> .glyphicon-unchecked</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-upload"></span> .glyphicon-upload</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-usd"></span> .glyphicon-usd</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-user"></span> .glyphicon-user</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-volume-down"></span> .glyphicon-volume-down</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-volume-off"></span> .glyphicon-volume-off</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-volume-up"></span> .glyphicon-volume-up</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-warning-sign"></span> .glyphicon-warning-sign</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-wrench"></span> .glyphicon-wrench</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-zoom-in"></span> .glyphicon-zoom-in</button></div>
  <div><button class="icon-glyph"><span class="glyphicon glyphicon-zoom-out"></span> .glyphicon-zoom-out</button></div>

</div><!-- container -->


<div class="container">
  <h1>下拉菜单（Dropdowns）</h1>

  <p>下拉菜单是可切换的，是以列表格式显示链接的上下文菜单。这可以通过与 下拉菜单（Dropdown） JavaScript 插件 的互动来实现，通过 data 属性：向链接或按钮添加 data-toggle="dropdown" 来切换下拉菜单。使用下拉菜单（Dropdown）插件，您可以向任何组件（比如导航栏、标签页、胶囊式导航菜单、按钮等）添加下拉菜单。 如果您想要单独引用该插件的功能，那么您需要引用 dropdown.js。或者引用 bootstrap.js 或压缩版的 bootstrap.min.js。如果您需要保持链接完整（在浏览器不启用 JavaScript 时有用），请使用 data-target 属性代替 href="#"，href 保持指向正确地址。</p>
  <pre>
  &lt;div class="dropdown"&gt;
    &lt;a id="dLabel" role="button" data-toggle="dropdown" data-target="#" href="/page.html"&gt;
        下拉菜单（Dropdown） &lt;span class="caret">&lt;/span&gt;
    &lt;/a&gt;

    &lt;ul class="dropdown-menu" role="menu" aria-labelledby="dLabel"&gt;
        ...
    &lt;/ul&gt;
  &lt;/div>&gt;
  </pre>

  <p>通过 JavaScript 调用下拉菜单切换，请使用下面的方法，下拉菜单切换有一个简单的方法用来显示或隐藏下拉菜单。：</p>
  <pre>
    $('.dropdown-toggle').dropdown()
    $().dropdown('toggle')</pre>

  <h2>相关样式</h2>
  <pre>
  .navbar                  导航条容器
  .navbar-header           导航条标题
  .navbar-default          导航条样式
  .container-fluid         流式容器
  .nav-tabs                tab标签风格样式
  .navbar-nav              tab标签风格样式
  .dropdown                指定下拉菜单容器
  .dropdown-menu           指定下拉菜单项目
  .dropdown-menu-right     下拉菜单右对齐
  .dropdown-header         下拉菜单中添加标题
  .pull-right              使用 ul.dropdown-menu.pull-right 来向右对齐下拉菜单。
  .dropup                  指定向上弹出的下拉菜单
  .disabled                下拉菜单中的禁用项
  .divider                 下拉菜单中的分割线</pre>
  <code>Zen-Coding:
  div.dropdown>button.btn.dropdown-toggle#menu[data-toggle=dropdown]{MENU}>span.caret^ul.dropdown-menu[role=menu aria-labelledby=menu]>li[role=presentation]*5>a[role=menuitem]{Menu $}
  </code>
  <div class="dropdown">
    <button class="btn dropdown-toggle" id="menu" data-toggle="dropdown">MENU<span class="caret"></span></button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="menu">
          <li class="dropdown-header">下拉菜单标题</li>
      <li><a href="" role="menuitem">Menu 1</a></li>
      <li><a href="" role="menuitem">Menu 2</a></li>
      <li><a href="" role="menuitem">Menu 3</a></li>
      <li><a href="" role="menuitem">Menu 4</a></li>
      <li><a href="" role="menuitem">Menu 5</a></li>
    </ul>
  </div>

  <p>带有下拉菜单的导航条</p>
  <nav class="navbar navbar-default" role="navigation">
      <div class="container-fluid"> 
      <div class="navbar-header">
          <a class="navbar-brand" href="http://www.runoob.com/bootstrap/bootstrap-dropdown-plugin.html">Dropdown插件</a>
      </div>
      <div>
          <ul class="nav navbar-nav">
              <li class="active">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                      Platforms
                      <b class="caret"></b>
                  </a>
                  <ul class="dropdown-menu">
                      <li><a href="#">iOS</a></li>
                      <li><a href="#">Win2</a></li>
                      <li><a href="#">Linux</a></li>
                  </ul>
              </li>
              <li><a href="#">SVN</a></li>
              <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                      Java 
                      <b class="caret"></b>
                  </a>
                  <ul class="dropdown-menu">
                      <li><a href="#">jmeter</a></li>
                      <li><a href="#">EJB</a></li>
                      <li><a href="#">Jasper Report</a></li>
                      <li class="divider"></li>
                      <li><a href="#">分离的链接</a></li>
                      <li class="divider"></li>
                      <li><a href="#">另一个分离的链接</a></li>
                  </ul>
              </li>
          </ul>
      </div>
      </div>
  </nav>


  <p>带有下拉菜单的标签页</p>
  <ul class="nav nav-tabs">
    <li class="active"><a href="#">Home</a></li>
    <li><a href="#">SVN</a></li>
    <li><a href="#">iOS</a></li>
    <li><a href="#">VB.Net</a></li>
    <li class="dropdown">
      <a class="dropdown-toggle" data-toggle="dropdown" href="#">
        Java <span class="caret"></span>
      </a>
      <ul class="dropdown-menu">
        <li><a href="#">Swing</a></li>
        <li class="divider"></li>
        <li><a href="#">jMeter</a></li>
        <li><a href="#">EJB</a></li>
      </ul>
    </li>
    <li><a href="#">PHP</a></li>
  </ul>

  <h2>按钮组与下拉菜单</h2>
  
  <p>按钮组允许多个按钮被堆叠在同一行上。当你想要把按钮对齐在一起时，这就显得非常有用。您可以通过 Bootstrap 按钮（Button） 插件 添加可选的 JavaScript 单选框和复选框样式行为。</p>
  <pre>
  .btn-group    该 class 用于形成基本的按钮组。在 .btn-group 中放置一系列带有 class .btn 的按钮。  
  .btn-toolbar  该 class 有助于把几组 div.btn-group 结合到一个 div.btn-toolbar 中，一般获得更复杂的组件。  
  .btn-group-lg, .btn-group-sm, .btn-group-xs 这些 class 可应用到整个按钮组的大小调整，而不需要对每个按钮进行大小调整。  
  .btn-group-vertical 该 class 让一组按钮垂直堆叠显示，而不是水平堆叠显示。  
  </pre>

  <p>按钮下拉菜单，菜单也可以往上拉伸的，只需要简单地向父 .btn-group 容器添加 .dropup 即可。</p>
  <div class="btn-group">
      <button type="button" class="btn btn-default" data-toggle="dropdown">默认
          <span class="caret"></span>
      </button>
      <ul class="dropdown-menu" role="menu">
          <li> <a href="#">功能</a> </li>
          <li> <a href="#">另一个功能</a> </li>
          <li> <a href="#">其他</a> </li>
          <li class="divider"></li>
          <li> <a href="#">分离的链接</a> </li>
      </ul>
  </div>
  <div class="btn-group">
      <button type="button" class="btn btn-primary" data-toggle="dropdown">原始
          <span class="caret"></span>
      </button>
      <ul class="dropdown-menu" role="menu">
          <li> <a href="#">功能</a> </li>
          <li> <a href="#">另一个功能</a> </li>
          <li> <a href="#">其他</a> </li>
          <li class="divider"></li>
          <li> <a href="#">分离的链接</a> </li>
      </ul>
  </div>

  <p>分割的按钮下拉菜单使用与下拉菜单按钮大致相同的样式，但是对下拉菜单添加了原始的功能。分割按钮的左边是原始的功能，右边是显示下拉菜单的切换。</p>
  <div class="btn-group">
      <button type="button" class="btn btn-default">默认</button>
      <button type="button" class="btn btn-default" 
          data-toggle="dropdown">
          <span class="caret"></span>
          <span class="sr-only">切换下拉菜单</span>
      </button>
      <ul class="dropdown-menu" role="menu">
          <li><a href="#">功能</a></li>
          <li><a href="#">另一个功能</a></li>
          <li><a href="#">其他</a></li>
          <li class="divider"></li>
          <li><a href="#">分离的链接</a></li>
      </ul>
  </div>
  <div class="btn-group">
      <button type="button" class="btn btn-primary">原始</button>
      <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
          <span class="caret"></span>
          <span class="sr-only">切换下拉菜单</span>
      </button>
      <ul class="dropdown-menu" role="menu">
          <li><a href="#">功能</a></li>
          <li><a href="#">另一个功能</a></li>
          <li><a href="#">其他</a></li>
          <li class="divider"></li>
          <li><a href="#">分离的链接</a></li>
      </ul>
  </div>

</div><!-- container -->


<div class="container">
  <h1>缩略图</h1>
  <p>大多数站点都需要在网格中布局图像、视频、文本等。Bootstrap 通过缩略图为此提供了一种简便的方式。使用 Bootstrap 创建缩略图的步骤如下：</p>
  <url>
    <li>在图像周围添加带有 class .thumbnail 的 <a> 标签。</li>
    <li>这会添加四个像素的内边距（padding）和一个灰色的边框。</li>
    <li>当鼠标悬停在图像上时，会动画显示出图像的轮廓。</li>
  </url>
  <code>
    Zen-Coding:
    div.row>.col-sm-6.col-md-3*4>a.thumbnail>img[src=demo.jpg alt=thumbnail]
  </code>
  <div class="row">
    <div class="col-sm-6 col-md-3"><a href="" class="thumbnail"><img src="demo.jpg" alt="thumbnail"></a></div>
    <div class="col-sm-6 col-md-3"><a href="" class="thumbnail"><img src="demo.jpg" alt="thumbnail"></a></div>
    <div class="col-sm-6 col-md-3"><a href="" class="thumbnail"><img src="demo.jpg" alt="thumbnail"></a></div>
    <div class="col-sm-6 col-md-3"><a href="" class="thumbnail"><img src="demo.jpg" alt="thumbnail"></a></div>
  </div>


  <p>现在我们有了一个基本的缩略图，我们可以向缩略图添加各种 HTML 内容，比如标题、段落或按钮。 将 a.thumbnail 改为 div.thumbnail，然后添加任何您想要添加的东西到div窗口。我们可以使用默认的基于 span 的命名规则来调整大小。 如果您想要给多个图像进行分组，请把它们放置在一个无序列表中，且每个列表项向左浮动。 </p>

  <code>
    Zen-Coding:
    div.row>div.col-sm-6.col-md-3*4>div.thumbnail>img[src=demo.jpg alt=demo]+div.caption>h3{Picture Caption}+p{Some more infomation}+p>a.btn.btn-default{hate}+a.btn.btn-primary{Like}
  </code>

  <div class="row">
    <div class="col-sm-6 col-md-3">
      <div class="thumbnail">
        <img src="demo.jpg" alt="demo">
        <div class="caption">
          <h3>Picture Caption</h3>
          <p>Some more infomation</p>
          <p><a href="" class="btn btn-default">hate</a><a href="" class="btn btn-primary">Like</a></p>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="thumbnail">
        <img src="demo.jpg" alt="demo">
        <div class="caption">
          <h3>Picture Caption</h3>
          <p>Some more infomation</p>
          <p><a href="" class="btn btn-default">hate</a><a href="" class="btn btn-primary">Like</a></p>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="thumbnail">
        <img src="demo.jpg" alt="demo">
        <div class="caption">
          <h3>Picture Caption</h3>
          <p>Some more infomation</p>
          <p><a href="" class="btn btn-default">hate</a><a href="" class="btn btn-primary">Like</a></p>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="thumbnail">
        <img src="demo.jpg" alt="demo">
        <div class="caption">
          <h3>Picture Caption</h3>
          <p>Some more infomation</p>
          <p><a href="" class="btn btn-default">hate</a><a href="" class="btn btn-primary">Like</a></p>
        </div>
      </div>
    </div>
  </div>

</div><!-- container -->



<div class="container">
  <h1>警告框（Alert）插件</h1>
  <p>警告框（Alert）消息大多是用来向终端用户显示诸如警告或确认消息的信息。使用警告框（Alert）插件，您可以向所有的警告框消息添加可取消（dismiss）功能。
  通过 $(".alert").alert() 或 data 属性API（Data API）添加可取消功能，添加 data-dismiss="alert"，就会自动为警告框添加关闭功能。如需在关闭时启用动画效果，请确保添加了 .fade 和 .in 样式类</p>

  <p>$('.alert').addClass("fade").alert('close') 联动关闭所有的警告框。注意 .close 绑定单击事件的方式。</p>
  <pre>
  $(function(){
      $(".close").click(function(){
          $("#myAlert").addClass("fade").alert("close");
          $("#myAlert2").addClass("fade").alert("close");
      });
  }); </pre>
  <kbd>
    div.alert.alert-success>a.close[data-dismiss=alert]{&times;}+b{成功！}^div.alert.alert-warning>a.close[data-dismiss=alert]{&times;}+b{警告！}
  </kbd>

  <h2>示例</h2>
  <div id="myAlert" class="alert alert-success">
      <a href="#" class="close" data-dismiss="alert">&times;</a>
      <strong>成功！</strong>结果是成功的。
  </div>
  <div id="myAlert2" class="alert alert-warning">
      <a href="#" class="close" data-dismiss="alert">&times;</a>
      <strong>警告！</strong>您的网络连接有问题。(关闭所有警告)
  </div>
  <script>
  $(function(){
      $(".close").click(function(){
          $("#myAlert").addClass("fade").alert("close");
          $("#myAlert2").addClass("fade").alert("close");
      });
  });
  $('.alert').bind('close.bs.alert', function () {
    console.log("警告框（Alert）插件事件: close.bs.alert")
  }).bind('closed.bs.alert', function () {
    console.log("警告框（Alert）插件事件: closed.bs.alert")
  })
  </script>

  <p>警告框（Alert）插件中要用到的事件。这些事件可在函数中当钩子使用。在调用 close 实例方法时立即触发 close.bs.alert 事件。当警告框被关闭时（将等待 CSS 过渡效果完成）触发 closed.bs.alert，此时警告框还未从页面消失。</p>
  <pre>
  $('#myalert').bind('close.bs.alert', function () {
    // 执行一些动作...
  })
      
  $('#myalert').bind('closed.bs.alert', function () {
      // 执行一些动作...
  })</pre>

</div><!-- container -->


<div class="container">
  
  <h1>按钮（Button）插件</h1>
  <p>Bootstrap 按钮（Button）插件可以给普通按钮添加进一些交互，比如控制按钮状态，或者为其他组件（如工具栏）创建按钮组。添加 data-loading-text="Loading..." 作为其属性即可。可以给 button 元素添加 data-toggle="button" 属性来实现按钮的正常状态/按压状态，而不必写脚本。</p>

  <p>JavaScript 启用按钮（Button）插件，通过执行 $('.btn').button() 方法即可进行如下操作：</p>
  <ul>
    <li>.button('toggle') 切换按压状态。赋予按钮被激活的外观。您可以使用 data-toggle 属性启用按钮的自动切换。</li>
    <li>.button('loading')  当加载时，按钮是禁用的，且文本变为 button 元素的 data-loading-text 属性的值。  </li>
    <li>.button('reset')  重置按钮状态，文本内容恢复为最初的内容。当您想要把按钮返回为原始的状态时，该方法非常有用。 </li>
    <li>.button(string) 该方法中的字符串string是指由用户声明的任何字符串。使用该方法，重置按钮状态，并添加新的内容。 </li>
  </ul>

  <pre>
  $(".btn").click(function(){
    $(this).button('loading').delay(1000).queue(function() {
        $(this).button('reset');
    // $(this).dequeue(); 
    });
  }); </pre>
  <p><kbd>button.btn.btn-primary[data-loading-text=loading...]{Load Data}+button.btn.btn-success[data-toggle=button]{Ok}</kbd></p>

  <button class="btn btn-primary" data-loading-text="loading...">Load Data</button>
  <button class="btn btn-success" data-toggle="button">Ok</button>
  <script>
      $(function() {
          $(".btn-primary").click(function(){
              $(this).button('loading').delay(1000).queue(function() {
                $(this).button('reset');
              // $(this).dequeue(); 
              });
          });
      });
  </script>

  <p>您可以创建复选框组，并通过向 btn-group 添加 data 属性 data-toggle="buttons" 来添加复选框组的切换，注意 buttons 复数形式才会将复选框隐藏。</p>
  <p><kbd>div.btn-group[data-toggle=buttons]>label.btn.btn-info*3>input[type=checkbox]+{option $}</kbd></p>

  <div class="btn-group" data-toggle="buttons">
    <label for="" class="btn btn-info"> <input type="checkbox"> option 1</label>
    <label for="" class="btn btn-info"> <input type="checkbox"> option 2</label>
    <label for="" class="btn btn-info"> <input type="checkbox"> option 3</label>
  </div>

  <p>单选框也可以通过向 btn-group 添加 data 属性 data-toggle="buttons" 来实现。</p>
  <p><kbd>div.btn-group[data-toggle=buttons]>label.btn.btn-danger*3>input[type=radio]+{option $}</kbd></p>
  <div class="btn-group" data-toggle="buttons">
    <label for="" class="btn btn-danger"><input type="radio">option 1</label>
    <label for="" class="btn btn-danger"><input type="radio">option 2</label>
    <label for="" class="btn btn-danger"><input type="radio">option 3</label>
  </div>

</div><!-- container -->


<div class="container">

  <h1>模态框（Modal）插件</h1>
  <p> 模态框（Modal）是覆盖在父窗体上的子窗体。通常，目的是显示来自一个单独的源的内容，可以在不离开父窗体的情况下有一些互动。子窗体可提供信息、交互等。 如果您想要单独引用该插件的功能，那么您需要引用 modal.js。或者，正如 Bootstrap 插件概览 一章中所提到，您可以引用 bootstrap.js 或压缩版的 bootstrap.min.js。</p>

  <p>使用模态框前需要使用 .modal 定义好内容，需要暂显效果可以添加 .fade 样式如 div.modal.fade。相关样式如下</p>
  <ul>
    <li>.modal         主体容器样式，遮罩部分</li>
    <li>modal-dialog   模态框包含框体内容</li>
    <li>modal-content  模态框内容部分</li>
    <li>modal-header   模态框头部</li>
    <li>modal-title    模态框标题</li>
    <li>modal-body     模态框主体内容</li>
    <li>modal-footer   模态框底部</li>
    <li></li>
  </ul>

  <p>触发显示模态框，可以在控制器元素（比如按钮或者链接）上设置属性 data-toggle="modal"，同时设置 data-target="#identifier" 或 href="#identifier" 来指定要切换的特定的模态框（带有 id="identifier"）。</p>

  <p>或者通过 JavaScript 来调用带有 id="identifier" 的模态框 $('#identifier').modal(options)</p>
  <p><kbd>button.btn.btn-warning[data-toggle=modal data-target=#myModal]{打开模态框}+div.modal.fade#myModal>.modal-dialog>.modal-content>.modal-header>button.close[data-dismiss=modal]{&times;}+h4.modal-title{Modal Title}^.modal-body{Text Content...}+.modal-footer>button.btn.btn-default[data-dismiss=modal]{Close}+button.btn.btn-primary{Run}</kbd></p>

  <button class="btn btn-warning" data-toggle="modal" data-target="#myModal">触发模态框</button>
  <button class="btn btn-danger" id="modalOpen" data-target="#myModal">modal()触发</button>
  <button class="btn btn-warning" data-toggle="modal" data-target="#myModal2" data-backdrop="static">backdrop=static</button>
  <script>
     $(function () { 
       $('#modalOpen').on("click",function(){ $("#myModal").modal({keyboard: true }); })
       $('#aModal').on('hide.bs.modal', function () { document.title=('关闭模态框...');})
     });
  </script>
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Title</h4>
        </div>
        <div class="modal-body">Text Content...</div>
        <div class="modal-footer">
          <button class="btn btn-default" data-dismiss="modal">Close</button>
          <button class="btn btn-primary">Run</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Another Modal Title</h4>
        </div>
        <div class="modal-body">More Text Content...</div>
        <div class="modal-footer">
          <button class="btn btn-default" data-dismiss="modal">Close</button>
          <button class="btn btn-Success" data-dismiss="modal">Fine</button>
        </div>
      </div>
    </div>
  </div>

  <ul class="list-group">
    <li class="list-group-item">使用模态窗口，您需要有某种触发器。您可以使用按钮或链接。这里我们使用的是按钮。</li>
    <li class="list-group-item">如果您仔细查看上面的代码，您会发现在 &lt;button&gt; 标签中，<b>data-target="#myModal"</b> 是您想要在页面上加载的模态框的目标。您可以在页面上创建多个模态框，然后为每个模态框创建不同的触发器。现在，很明显，您不能在同一时间加载多个模块，但您可以在页面上创建多个在不同时间进行加载。</li>
    <li class="list-group-item">在模态框中需要注意两点：
       <ol>
       <li>第一是 <b>.modal</b>，用来把 &lt;div&gt; 的内容识别为模态框。</li>
       <li>第二是 <b>.fade</b> class。当模态框被切换时，它会引起内容淡入淡出。</li>
       </ol>
    </li>
    <li class="list-group-item"><b>aria-labelledby="myModalLabel"</b>，该属性引用模态框的标题。</li>
    <li class="list-group-item">属性 <b>aria-hidden="true"</b> 用于保持模态窗口不可见，直到触发器被触发为止（比如点击在相关的按钮上）。</li>
    <li class="list-group-item">&lt;div class="modal-header"&gt;，modal-header 是为模态窗口的头部定义样式的类。</li>
    <li class="list-group-item"><b>class="close"</b>，close 是一个 CSS class，用于为模态窗口的关闭按钮设置样式。</li>
    <li class="list-group-item"><b>data-dismiss="modal"</b>，是一个自定义的 HTML5 data 属性。在这里它被用于关闭模态窗口。</li>
    <li class="list-group-item"><b>class="modal-body"</b>，是 Bootstrap CSS 的一个 CSS class，用于为模态窗口的主体设置样式。</li>
    <li class="list-group-item"><b>class="modal-footer"</b>，是 Bootstrap CSS 的一个 CSS class，用于为模态窗口的底部设置样式。</li>
    <li class="list-group-item"><b>data-toggle="modal"</b>，HTML5 自定义的 data 属性 data-toggle 用于打开模态窗口。</li>
  </ul>


  <h2>选项</h2>
  <p>可以用选项来定制模态窗口（Modal Window）的外观和感观，它们是通过 data 属性或 JavaScript 来传递的。</p>
  <ul class="list-group">
    <li class="list-group-item">backdrop 对应属性 data-backdrop boolean 或 string 'static' 指定一个静态的背景，当用户点击模态框外部时不会关闭模态框。</li>
    <li class="list-group-item">keyboard 对应属性 data-keyboard boolean 当按下 escape 键时关闭模态框，设置为 false 时则按键无效。</li>
    <li class="list-group-item">show     对应属性 data-show     boolean 当初始化时显示模态框。</li>
    <li class="list-group-item">remote   对应属性 data-remote path    结合 jQuery.load() 方法加载页面(需要在HTTP上执行)。</li>
  </ul>

  <pre>
  // 参考脚本
  $('#loadUrl').click(function (event) {
      event.preventDefault();
      var url = $(this).data('remote')||$(this).attr('href');
      alert(url);
      $('#myModal').modal();
      $('#myModal').load(url);
  })
  </pre>
  <p><kbd>a.btn.btn-success[data-toggle=modal data-remote=index.html data-target=#myModal]{点击加载页面内容}</kbd></p>

  <a id="loadUrl" class="btn btn-success" data-toggle="modal" data-remote="index.html" data-target="#modal">点击加载页面内容</a>


  <h2>参数</h2>
  <p>下面是一些可与 modal(options) 方法结合的选项，这个方法接收参数并据设置激活模态框。</p>
  <ul class="list-group">
    <li class="list-group-item"></li>
    <li class="list-group-item">modal({keyboard: false }) 关闭键盘响应，不能通过ESC关闭。</li>
    <li class="list-group-item">modal('toggle') 切换模态框关闭/打开。</li>
    <li class="list-group-item">modal('show') 手动打开模态框。</li>
    <li class="list-group-item">modal('hide') 手动隐藏模态框。</li>
  </ul>

  <h2>事件</h2>
  <ul class="list-group">
    <li class="list-group-item">show.bs.modal 在调用 show 方法后触发。</li>
    <li class="list-group-item">shown.bs.modal  当模态框对用户可见时触发（将等待 CSS 过渡效果完成）。</li>
    <li class="list-group-item">hide.bs.modal 当调用 hide 实例方法时触发，窗口准备关闭。</li>
    <li class="list-group-item">hidden.bs.modal 当模态框完全对用户隐藏时触发。</li>
  </ul>
  
  <pre>
  $(function() {
      $('#myModal').on('hide.bs.modal', function() {
          alert('closing modal...');
      }).on('show.bs.modal', function () {
          alert('opening modal...');
    }).on('shown.bs.modal', function () {
          alert('opened modal...');
    }).on('hidden.bs.modal', function () {
          alert('closed modal...');
    })
  }); </pre>



</div><!-- container -->


<div class="container">
  <h1> 提示工具（Tooltip）插件</h1>
  <p>当您想要描述一个链接的时候，提示工具（Tooltip）就显得非常有用。提示工具（Tooltip）插件是受 Jason Frame 写的 jQuery.tipsy 的启发。提示工具（Tooltip）插件做了很多改进，例如不需要依赖图像，而是改用 CSS 实现动画效果，用 data 属性存储标题信息。 提示工具（Tooltip）插件根据需求生成内容和标记，默认情况下是把提示工具（tooltip）放在它们的触发元素后面。 通过 data 属性向一个锚标签添加 data-toggle="tooltip" 即可。锚的 title 即为提示工具（tooltip）的文本。</p>

  <p><kbd>div.panel>a.btn.btn-primary[data-toggle=tooltip title="Tip contents"]{Hover Me}+button.btn.btn-primary[data-toggle=tooltip title="Tip contents"]{Hover Me}</kbd></p>

  <div class="panel">
  <a class="btn btn-primary" href="#" data-toggle="tooltip" data-placement="top" title="Example tooltip">on top</a>
  <a class="btn btn-primary" href="#" data-toggle="tooltip" data-placement="right" title="Example tooltip">on right</a>
  <a class="btn btn-primary" href="#" data-toggle="tooltip" data-placement="left" title="Example tooltip">on left</a>
  <a class="btn btn-primary" href="#" data-toggle="tooltip" data-placement="bottom" title="Example tooltip">on bottom</a>
  <button class="btn btn-primary" data-toggle="tooltip" data-placement="bottom" data-trigger="click" title="Example tooltip">on click</button>
  <a class="btn btn-primary" href="#" data-toggle="tooltip" title="Example tooltip">请悬停在我的上面</a>
  <button class="btn btn-primary" data-toggle="tooltip" title="Example tooltip">请悬停在我的上面</button>
  <script> $(function () { $("[data-toggle='tooltip']").tooltip(); });</script>
  </div>

  <p>提示工具（Tooltip）插件不像之前所讨论的下拉菜单及其他插件那样，它不是纯 CSS 插件。如需使用该插件，您必须使用 jquery 激活它（tooltip）：</p>
  <pre>$(function () {<br>  $("[data-toggle='tooltip']").tooltip(); <br>});</pre>
  
  <p>默认情况下，插件把提示工具（tooltip）设置在顶部。也可以通过脚本触发提示工具</p>
  <pre>$('#identifier').tooltip(options)</pre>


  <h2>选项</h2>
  <p>有一些选项是通过 Bootstrap 数据 API（Bootstrap Data API）添加或通过 JavaScript 调用的。</p>
  <pre>
  选项名称     类型              默认值          Data 属性名称    描述
  animation   boolean           true           data-animation   提示工具使用 CSS 渐变滤镜效果。
  html        boolean           false          data-html        向提示工具插入 HTML。如果为 false，jQuery 的 text 方法将被用于向 dom 插入内容。
  placement   string |function  top            data-placement   规定如何定位（top|bottom|left|right|auto，还可以这样 "auto left"。
  selector    string            false          data-selector    如果提供了一个选择器，提示工具对象将被委派到指定的目标。
  title       string | function ''             data-title       如果未指定 title 属性，则 title 选项是默认的 title 值。
  trigger     string            'hover focus'  data-trigger     定义如何触发提示工具： click| hover | focus | manual。
                                                                您可以传递多个触发器，每个触发器之间用空格分隔。
  delay       number | object   0              data-delay       延迟显示和隐藏提示工具的毫秒数或对象结构 delay: { show: 500, hide: 100 }
  container   string | false    false          data-container   向指定元素追加提示工具。 实例： container: 'body'</pre>


  <h2>方法</h2>
  <p>下面是一些提示工具（Tooltip）插件中有用的方法：</p>
  <pre>
  $().tooltip(options)                Options: 向元素集合附加提示工具句柄。
  $('#element').tooltip('toggle')     Toggle:  切换显示/隐藏元素的提示工具。
  $('#element').tooltip('show')       Show:    显示元素的提示工具。
  $('#element').tooltip('hide')       Hide:    隐藏元素的提示工具。
  $('#element').tooltip('destroy')    Destroy: 隐藏并销毁元素的提示工具。</pre>


  <h2>事件</h2>
  <p>下表列出了提示工具（Tooltip）插件中要用到的事件。这些事件可在函数中当钩子使用。</p>

  <pre>
  $('#myTooltip').on('show.bs.tooltip', function () {
    // show.bs.tooltip  当调用 show 实例方法时立即触发该事件。
  })
  $('#myTooltip').on('shown.bs.tooltip', function () {
    // shown.bs.tooltip 当提示工具对用户可见时触发该事件（将等待 CSS 过渡效果完成）。 
  })
  $('#myTooltip').on('hide.bs.tooltip', function () {
    // hide.bs.tooltip  当调用 hide 实例方法时立即触发该事件。  
  })
  $('#myTooltip').on('hidden.bs.tooltip', function () {
    // hidden.bs.tooltip  当提示工具对用户隐藏时触发该事件（将等待 CSS 过渡效果完成）。 
  })</pre>

</div><!-- container -->


<div class="container"></div><!-- container -->



<div class="container"></div><!-- container -->



<div class="container"></div><!-- container -->


  </body>
</html>
