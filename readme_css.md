
今晚……
大概是这辈子最后一次在这里了。
明天还会继续，前路还要行进。
只是，
落在身后的东西越来越多，
带在身上的东西却越来越少。
还好，
远方有个她，
便觉得还有点温度了

- hammerjs guesture https://hammerjs.github.io/
- pulldown refresh https://apeatling.github.io/web-pull-to-refresh/
- Zepto.js: the aerogel-weight jQuery https://zeptojs.com

# 🚩 SVG 矢量图形
- https://developer.mozilla.org/en-us/docs/web/svg



# 🚩 HTML5 & CSS3 readme
- https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5
- 面试官：前端跨页面通信，你知道哪些方法？ https://www.jianshu.com/p/bda0b7ead248
- 浏览器的工作原理：新式网络浏览器幕后揭秘 https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/
- [A Complete Guide to Flexbox]: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

- CSS魔术师Houdini API介绍 https://www.w3cplus.com/css/css-houdini.html
- alibaba/bindingx: Bind actions to effects. https://github.com/alibaba/bindingx
- 哦屋～你也可以拥有一个自己牛逼的脚手架！ - https://juejin.im/post/5ca2d524f265da30cb0c44ef
- alibaba/rax: [ v1.0 released] The fastest way to build universal application. https://github.com/alibaba/rax

- Learning JavaScript Design Patterns by Addy Osmani https://addyosmani.com/resources/essentialjsdesignpatterns/book/


## Forms 表单
- https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range

元数据（Metadata）含有页面的相关信息，包括样式、脚本及数据，能帮助一些软件（例如 搜索引擎、浏览器 等等）更好地运用和渲染页面。对于样式和脚本的元数据，可以直接在网页里定义，也可以链接到包含相关信息的外部文件。

	<base>	指定用于一个文档中包含的所有相对 URL 的根 URL。一份中只能有一个 <base> 元素。
	<head>	规定文档相关的配置信息（元数据），包括文档的标题，引用的文档样式和脚本等。
	<link>	外部资源链接元素 (<link>) 规定了当前文档与外部资源的关系。该元素最常用于链接样式表，此外也可以被用来创建站点图标(比如 PC 端的“favicon”图标和移动设备上用以显示在主屏幕的图标) 。
	<meta>	表示那些不能由其它HTML元相关元素 (<base>, <link>, <script>, <style> 或 <title>) 之一表示的任何元数据信息.
	<style>	HTML的<style>元素包含文档的样式信息或者文档的部分内容。默认情况下，该标签的样式信息通常是CSS的格式。
	<title>	定义文档的标题，显示在浏览器的标题栏或标签页上。它只可以包含文本，若是包含有标签，则包含的任何标签都不会被解释。

内容分区元素允许你将文档内容从逻辑上进行组织划分，来为页面内容创建明确的大纲，以便区分各个章节的内容。

	<address>	 元素 表示其中的 HTML 提供了某个人或某个组织（等等）的联系信息。
	<article>	元素表示文档、页面、应用或网站中的独立结构，其意在成为可独立分配的或可复用的结构，如在发布中，它可能是论坛帖子、杂志或新闻文章、博客、用户提交的评论、交互式组件，或者其他独立的内容项目。​​
	<aside>	 元素表示一个和其余页面内容几乎无关的部分，被认为是独立于该内容的一部分并且可以被单独的拆分出来而不会使整体受影响。
	<footer>	 元素表示最近一个章节内容或者根节点（sectioning root ）元素的页脚。一个页脚通常包含该章节作者、版权数据或者与文档相关的链接等信息。
	<header>	 元素用于展示介绍性内容，通常包含一组介绍性的或是辅助导航的实用元素。它可能包含一些标题元素，但也可能包含其他元素，比如 Logo、搜索框、作者名称，等等。
	<h1>, <h2>, <h3>, <h4>, <h5>, <h6>	标题(Heading)元素呈现了六个不同的级别的标题，<h1> 级别最高，而 <h6> 级别最低。
	<hgroup>	 Element (HTML Headings Group Element) 代表一个段的标题。它规定了在文档轮廓里（the outline of the document ）的单一标题是它所属的隐式或显式部分的标题。
	<main>	 元素呈现了文档的 <body> 或应用的主体部分。主体部分由与文档直接相关，或者扩展于文档的中心主题、应用的主要功能部分的内容组成。
	<nav>	元素表示页面的一部分，其目的是在当前文档或其他文档中提供导航链接。导航部分的常见示例是菜单，目录和索引。
	<section>	HTML <section>元素表示一个包含在HTML文档中的独立部分，它没有更具体的语义元素来表示，一般来说会有包含一个标题。

HTML 提供了许多可一起使用的元素，这些元素能用来创建一个用户可以填写并提交到网站或应用程序的表单。

	<button>	可点击的按钮，可以用在表单或文档其它需要使用简单标准按钮的地方。
	<datalist>	元素包含一组 <option> 元素，这些元素表示其它表单控件可选值。
	<fieldset>	
	<form>		表单元素表示了文档中的一个区域，此区域包含有交互控制元件，用来向 Web 服务器提交信息。
	<input>		输入控件为基于 Web 的表单创建交互式控件，以便接受来自用户的数据，具体表现取决于设备和 user agent。
	<label>		标签表示用户界面中某个元素的说明。
	<legend>	域说明元素 HMTL Legend Field Element 代表一个用于表示它的父元素 <fieldset> 的内容的标题。
	<meter>		显示已知范围的标量值或者分数值。
	<optgroup>	在一个 <select> 元素中创建一组选项
	<option>	表单 <select> 元素中的一个选项，或者 <optgroup> <datalist> 元素中包含的项，可以表示菜单项。
	<output>	表示计算或用户操作的结果。
	<progress>	进度条，用来显示一项任务的完成进度。虽然规范中没有规定该元素具体如何显示，浏览器开发商可以自己决定。
	<select>	选项控件，提供一个选项菜单。
	<textarea>	多行纯文本编辑控件。

<label for="file">File progress:</label>
<progress id="file" max="100" value="70"> 70% </progress>

描述列表可以很方便的将元数据展示为键-值对列表：

<dl>
    <dt>Name</dt>
    <dd>Godzilla</dd>
    <dt>Born</dt>
    <dd>1952</dd>
    <dt>Birthplace</dt>
    <dd>Japan</dd>
    <dt>Color</dt>
    <dd>Green</dd>
</dl>

小技巧：通过 CSS3 ，我们可以很容易的在术语后面添加一个与内容无关的分隔符号，比如：

	dt:after {
	  content: ": ";
	}

转入框可以说是功能最多的一个控件，取决于 type 属性的值和浏览器的支持度，不同的 type 值会产生完全不同的效果。如果未指定此属性，则采用的默认类型为 text。

	button		按钮，上面显示 value 属性的值，默认为空。		
	checkbox	复选框，可设为选中或未选中。		
	color		用于指定颜色的控件，浏览器支持就会激活取色器。
	date		输入日期的控件（年、月、日，不包括时间）。在支持的浏览器激活时打开日期选择器或年月日的数字滚轮。
	datetime-local	输入日期和时间的控件，不包括时区。在支持的浏览器激活时打开日期选择器或年月日的数字滚轮。
	email		编辑邮箱地址的区域，类似 text 输入，但在支持的浏览器和带有动态键盘的设备上会有确认参数和相应的键盘。		
	file		让用户选择文件的控件，使用 accept 属性指定许可的文件类型。		
	hidden		隐藏的控件，其值仍会提交到服务器。
	month		输入年和月的控件，没有时区。		HTML5
	number		用于输入数字的控件。如果支持的话，会显示滚动按钮并提供缺省验证（即只能输入数字）。拥有动态键盘的设备上会显示数字键盘。		
	password	单行的文本区域，其值会被遮盖。如果站点不安全，会警告用户。		
	radio	单选按钮，允许在多个拥有相同 name 值的选项中选中其中一个。		
	range	此控件用于输入不需要精确的数字。控件是一个范围组件，默认值为正中间的值。同时使用htmlattrdefmin   和 htmlattrdefmax来规定值的范围。		  HTML5
	reset	此按钮将表单的所有内容重置为默认值。不推荐。		
	search	用于搜索字符串的单行文字区域。输入文本中的换行会被自动去除。在支持的浏览器中可能有一个删除按钮，用于清除整个区域。拥有动态键盘的设备上的回车图标会变成搜索图标。		HTML5
	submit	用于提交表单的按钮。		
	tel	用于输入电话号码的控件。拥有动态键盘的设备上会显示电话数字键盘。		HTML5
	text	默认值。单行的文本区域，输入中的换行会被自动去除。		
	time	用于输入时间的控件，不包括时区。		HTML5
	url		用于输入 URL 的控件。类似 text 输入，但有验证参数，在支持动态键盘的设备上有相应的键盘。
	week	用于输入以年和周数组成的日期，不带时区。


作为字符串输入框用法展示：

	<label for="name">Name (4 to 8 characters):</label>
	<input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10">


作为 range 范围输入控件，相当于滚动条，根据以下不同的属性值细调控件功能：

- list	设置一个 `<datalist>` 列表元素的 id，它包含可选项的值。
- max	最大值 maximum。
- min	最小值 minimum。
- step	步进值。

示范：

	<input type="range" min="-10" max="10">

	<input type="range" min="5" max="10" step="0.01">

	<input type="range" id="volume" name="volume" min="0" max="11">
	<label for="volume">Volume</label>

	<input type="range" id="cowbell" name="cowbell" min="0" max="100" value="90" step="10">
	<label for="cowbell">Cowbell</label>


	<!-- inaccessible -->
	<p>Enter your name: <input id="name" type="text" size="30"></p>

	<!-- implicit label -->
	<p><label>Enter your name: <input id="name" type="text" size="30"></label></p>

	<!-- explicit label -->
	<p><label for="name">Enter your name: </label><input id="name" type="text" size="30"></p>


使用选项列表，可以设置标签：

	<input type="range" list="tickmarks">

	<datalist id="tickmarks">
	  <option value="0" label="0%"></option>
	  <option value="10"></option>
	  <option value="20"></option>
	  <option value="30"></option>
	  <option value="40"></option>
	  <option value="50" label="50%"></option>
	  <option value="60"></option>
	  <option value="70"></option>
	  <option value="80"></option>
	  <option value="90"></option>
	  <option value="100" label="100%"></option>
	</datalist>


通过样式可以控制控件的方向，可以横放也可以竖放，90 度旋转就可以立起来：

	input {
		transform: rotate(-90deg)
	}


## UI pseudo-classes

为 input 元素提供的样式伪类：

	Pseudo-class	Description
	:enabled		匹配当前处于启用状态的元素，即可以交互，选择、输入、点击，可以获取焦点等等。
	:disabled		匹配禁用状态的元素，即不可以交互的元素。
	:read-only		匹配只读，并且用户不可以编辑的元素。
	:read-write		匹配用户可以读写的元素。
	:default		匹配默认选项列表中的默认项，如当前组选中的 checkbox 或 radio。
	:checked		匹配当前选中的元素，checkbox 或 radio，<option>。
	:indeterminate	通过 JavaScript 设置 checkbox 元素为 true，或所有同名 radio 的值都取消选中状态，或者处于不确定状态的 <progress> 元素。
	:valid			匹配有效的表单控件，当前包含有效值，但不匹配约束条件，如 quired, pattern , step and max。
	:invalid		无效状态，设置值不满足约束条件的元素。
	:in-range		匹配符合输入范围，range 设置值在 min 和 max 之间。
	:out-of-range	匹配超出范围的控件，range 设置的值不在 min 和 max 之间。
	:placeholder-shown	匹配 <input> <textarea> 元素的占位内容。
	:required		为 <input> <select> <textarea> 提供表示必选项。
	:optional		为 <input> <select> <textarea> 提供表示可选项。
	:blank			为 <input> <textarea> 元素提供表示当前没值。
	:user-invalid	用户输入无效，和 :invalid 相似。

示范，给选中的选项按钮紧跟在后面的 label 设置样式：

	input:checked + label {
	  color: red;
	  font-weight: bold;
	}

使用属性选择符 Attribute selectors

	/* matches a password input */
	input[type="password"] {}

	/* matches a form control whose valid values are limited to a range of values*/
	input[min][max] {}

	/* matches a form control with with a pattern attribute */
	 input[pattern] {}

点位符伪类选择符 ::placeholder

	::placeholder {
	  color: blue;
	}


## object-fit
- https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit

object-fit CSS 属性指定元素的内容应该如何适应到其所在的窗口中，使用什么样的高度和宽度。

您可以通过使用 object-position 属性来切换被替换元素的内容对象在元素框内的对齐方式。

属性值的具体含义如下：

- **object-fit: fill;** 充满，默认值。替换内容拉伸填满整个 content box, 不保证保持原有的比例。
- **object-fit: contain;** 包含在内部，保持原有尺寸比例。可能缩放心保证替换内容尺寸一定可以在容器里面放得下。
- **object-fit: cover;** 覆盖，可能缩放并保持原有尺寸比例，部分区域可能超出容器不可见。
- **object-fit: none;**: 无，保持原有尺寸比例，同时保持替换内容原始尺寸大小。
- **object-fit: scale-down;** 缩小，内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些。


## iframe sandbox
- https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe
- https://github.com/w3c/webappsec-permissions-policy/blob/master/features.md
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
- http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html

空字符串 "" 表示限制以下行为：

- allow-same-origin	允许 iframe 内容被视为与包含文档有相同的来源。
- allow-top-navigation	允许 iframe 内容从包含文档导航（加载）内容。
- allow-forms	允许表单提交。
- allow-scripts	允许脚本执行。
- allow-same-origin 同源，允许父子页面共享cookie, 互相操作.

当被嵌入的文档与主页面同源时，allow-scripts 和 allow-same-origin，将允许嵌入的文档通过代码删除 sandbox 属性。

	<iframe class="PlayerFrame player" src="/__sw__blank.html" sandbox="allow-same-origin" allow="geolocation"></iframe>

使用 src="data:...", srcdoc="..." 直接设置 iframe 内容时的区别：

	1. src 的 data:text/html 是 Data URI，长度不能超过 32,768
	2. 同时使用时 srcdoc 优先级更高
	3. 当前 IE 不支持 srcdoc
	4. srcdoc 更安全

	<iframe srcdoc="<p>Some HTML</p>"></iframe>
	<iframe src="data:text/html,<p>Some HTML</p>"></iframe>


postMessage 可用于父子窗口安全地传递消息

iframe 的 referrerpolicy 属性牵扯到了 HTTP 的 referer 策略：

- No Referrer：任何情况下都不发送 Referrer 信息；
- No Referrer When Downgrade：仅当发生协议降级（如 HTTPS 页面引入 HTTP 资源，从 HTTPS 页面跳到 HTTP 等）时不发送 Referrer 信息。这个规则是现在大部分浏览器默认所采用的；
- Origin Only：发送只包含 host 部分的 Referrer。启用这个规则，无论是否发生协议降级，无论是本站链接还是站外链接，都会发送 Referrer 信息，但是只包含协议 + host 部分（不包含具体的路径及参数等信息）；
- Origin When Cross-origin：仅在发生跨域访问时发送只包含 host 的 Referrer，同域下还是完整的。它与 Origin Only 的区别是多判断了是否 - Cross-origin。需要注意的是协议、域名和端口都一致，才会被浏览器认为是同域；
- Unsafe URL：无论是否发生协议降级，无论是本站链接还是站外链接，统统都发送 Referrer 信息。正如其名，这是最宽松而最不安全的策略；
比如我们这样配置：

<iframe allow="fullscreen 'none'" referrerpolicy="no-referrer" src='http://127.0.0.1:3000/iframe.html'></iframe>



## [debug] 样式
- https://css-tricks.com/almanac/selectors/n/not/
- https://scrimba.com/learn/learnvue/hello-vue--cyLQNAM

定义以下样式：

	/*! debug.css | MIT License | https://gist.github.com/zaydek/6b2e55258734deabbd2b4a284321d6f6 */
	[debug], [debug] *:not(g):not(path) {
	  color:                 hsla(210, 100%, 100%, 0.9) !important;
	  background:            hsla(210, 100%,  50%, 0.5) !important;
	  outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;

	  box-shadow: none !important;
	  filter:     none !important;
	}

Trick To Debug CSS 技巧调试 CSS，not() 指

然后在需要进行调试的节点上添加 debug 激活样式：

	<div debug>
	  <input type="text"></input>
	  <p class="not">This not for debug</p>
	</div>


## calc(expression) var() 变量及计算表达式
- https://www.w3.org/TR/css-variables-1/#using-variables
- CSS如何实现内凹圆角效果 https://www.w3cplus.com/css/scooped-corners.html
- Scooped Corners in 2018 by Ana Tudor https://css-tricks.com/scooped-corners-in-2018/
- Logical Operations with CSS Variables - Ana Tudor https://css-tricks.com/logical-operations-with-css-variables/
- [视区相关单位 vw vh vm 简介](https://www.zhangxinxu.com/wordpress/2012/09/new-viewport-relative-units-vw-vh-vm-vmin/)

calc() 即 calculate 计算函数，用于样式的动态计算。

- 需要注意的是，运算符前后都需要保留一个空格，例如：width: calc(100% - 10px)；
- 任何长度值都可以使用 calc() 函数进行计算；
- calc() 函数支持四则运算；
- calc() 函数使用标准的数学运算优先级规则；
- 可以使用 %、px、em、rem 等单位；

浏览器兼容性还算不错，在 IE9+、FF4.0+、Chrome19+、Safari6+ 都得到较好支持，同样需要在其前面加上各浏览器厂商的识别符。

实际使用时，同样需要添加浏览器的前缀：

- Firefox **-moz-calc(expression);**
- chrome safari **-webkit-calc(expression);**
- Standard **calc(expression);**


声明 CSS 变量的时候，变量名前面要加两根连词线，变量名大小写敏感，如 --header 和 --Header 是两个不同变量。读取变量时，var() 函数可以使用第二个参数，表示变量的默认值，如果该变量不存在，就会使用这个默认值。第二个参数不处理内部的逗号或空格，都视作参数的一部分。

    .box{
        --color: red;
        color: var(--bg,pink);
    }

全局及局部变量的区别，:root 伪类可以看做是一个全局作用域，在里面声明的变量，后续所有选择器都可以使用：

    :root { --color: blue; }
    .box{color: var(--color)}

    .box{
        --color: red;
        color: var(--color);
    }

可以结合 CSS3 calc()一起计算

	p{
	  --size: 20;   
	  font-size: calc(var(--size) * 1px);//20px
	}

CSS 变量使用就近原则继承，不存在 !important 这种用法，以下使用的是 red 颜色：

    :root { --color: blue; }
    div { --color: green; }
    #alert { --color: red; }
    * { color: var(--color); }

用变量来模拟逻辑运算，产生保证变量取值为 0 或 1，利用乘法运算：

	--and: calc(var(--k)*var(--i))
	--nand: calc(1 - var(--k)*var(--i))
	--nor: calc((1 - var(--k))*(1 - var(--i)))
	--or: calc(1 - (1 - var(--k))*(1 - var(--i)))
	--xor: calc((var(--k) - var(--i))*(var(--k) - var(--i)))


Viewport 视区为浏览器内部的可视区域大小，即 `window.innerWidth`、`window.innerHeight` 大小，不包含任务栏标题栏以及底部工具栏的浏览器区域大小。CSS3 单位 vw 即 Viewport Width，同样 vh 对应 Viewport Height。

	1vw 等于视口宽度的 1%。
	1vh 等于视口高度的 1%。
	vmin：选取 vw 和 vh 中最小的那个，也用 vm 表示。
	vmax：当前 vw 和 vh 中较大的一个值

示范：

	div {
	    height: calc(100vh - 100px);
	    width: calc(100% - 100px);
	    width: calc((1 / 7) * 100%) !important;
	}


CSS 实现内凹圆角效果：

	:root {
	    --r: 2em;
	}

	.ScoopedCorner {
		overflow: hidden;
		position: relative;
		margin: .25em auto;
		min-width: 15em;
		max-width: 15em;
		min-height: 10em;
		border-radius: 1em;
	}
	
	.ScoopedCorner:before {
		content: '';
		position: absolute;
		margin: calc(var(--r) * -1);
		padding: var(--r);
		border-radius: 50%;
		box-shadow: 0 0 0 300px rgba(99,55,200, .75);
		background: transparent;
	}

要点：

- 用一个 overflow hidden 的 box 隐藏出血内容；
- 设置伪元素为透明背景 ::before background-color transparent
- 设置伪元素 box-shadow 并且要足够大以充满整个 box，这部分是非常有意思的一点，它是给 box 背景色的同时也将圆角表现出来；
- 移动伪元素，使其中心位于 box 的四角就形成倒圆角的错觉；





# 🚩 File API
- http://www.w3.org/TR/file-writer-api/

File Writer API 全局函数 saveAs 示范

	$(button).on( 'click', function (e) {
	    var data = table
	        .data()
	        .map( function (row) {
	            return row.join(',');
	        } )
	        .join( '\n' );
	 
	    saveAs(
	        new Blob( [data], {type : 'text/csv'},
	        'My file.csv'
	    );
	} );


# 🚩 Clipboard API 剪贴板
- https://www.w3.org/TR/clipboard-apis/
- https://datatables.net/blog/2014-01-31
- http://www.ruanyifeng.com/blog/2021/01/clipboard-api.html
- https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
- https://blog.tomayac.com/2020/03/20/multi-mime-type-copying-with-the-async-clipboard-api/
- Unblocking clipboard access https://web.dev/async-clipboard/

有三种方法可以实现剪贴板操作。

- Document.execCommand()，但只能对选中的内容复制或剪贴，无法向剪贴板任意写入内容。
- Clipboard API 是下一代异步的剪贴板操作方法，比传统的方法更强大、更合理。
- copy 事件和 paste 事件

首先，Chrome 浏览器规定，只有 HTTPS 协议的页面才能使用 Clipboard API。不过，开发环境（localhost）允许使用非加密协议。

其次，调用时需要明确获得用户的许可。权限的具体实现使用了 Permissions API，跟剪贴板相关的有两个权限：clipboard-write（写权限）和clipboard-read（读权限）。"写权限"自动授予脚本，而"读权限"必须用户明确同意给予。也就是说，写入剪贴板，脚本可以自动完成，但是读取剪贴板时，浏览器会弹出一个对话框，询问用户是否同意读取。

示范：

	$(button).on( 'click', function (e) {
		var data = table
			.data()
			.map( function (row) {
				return row.join(',');
			} )
			.join( '\n' );
	 
		var clip = new ClipboardEvent( 'copy' );
		clip.clipboardData.setData( 'text/plain', data );
		clip.preventDefault();
	 
		e.target.dispatchEvent( clip );
	} );

```js
function setClipboard(text) {
    var type = "text/plain";
    var blob = new Blob([text], { type });
    var data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(data).then(
        function () {
        console.log("/* success */")
        },
        function (evt) {
        console.log("/* failure */", evt)
        }
    );
}
document.addEventListener("click", function(){
	setClipboard("COPYED");
    console.log("copy click");
});
setClipboard("ABC")
// /* failure */ DOMException: Document is not focused.
```

## Clipboard API

navigator.clipboard 属性返回 Clipboard 对象，所有操作都通过这个对象进行。

	const clipboardObj = navigator.clipboard;

如果navigator.clipboard属性返回undefined，就说明当前浏览器不支持这个 API。

由于用户可能把敏感数据（比如密码）放在剪贴板，允许脚本任意读取会产生安全风险，所以这个 API 的安全限制比较多。

首先，Chrome 浏览器规定，只有 HTTPS 协议的页面才能使用这个 API。不过，开发环境（localhost）允许使用非加密协议。

其次，调用时需要明确获得用户的许可。权限的具体实现使用了 Permissions API，跟剪贴板相关的有两个权限：clipboard-write（写权限）和clipboard-read（读权限）。"写权限"自动授予脚本，而"读权限"必须用户明确同意给予。也就是说，写入剪贴板，脚本可以自动完成，但是读取剪贴板时，浏览器会弹出一个对话框，询问用户是否同意读取。

	navigator.permissions.query({ name: 'clipboard-read' }).then(console.log)
	navigator.permissions.query({ name: 'clipboard-write' }).then(console.log)

Clipboard 对象提供了四个方法，用来读写剪贴板。它们都是异步方法，返回 Promise 对象。

- Clipboard.readText() 用于复制剪贴板里面的文本数据。
- Clipboard.writeText()方法用于将文本内容写入剪贴板。
- Clipboard.read() 用于复制剪贴板里面的数据，可以是文本、二进制数据（比如图片）。
- Clipboard.write()方法用于将任意数据写入剪贴板，可以是文本数据，也可以是二进制数据。

用户点击页面后，就会输出剪贴板里面的文本。注意，浏览器这时会跳出一个对话框，询问用户是否同意脚本读取剪贴板。如果用户不同意，脚本就会报错。这时，可以使用 try...catch 结构，处理报错。

	document.body.addEventListener(
	  'click',
	  async function getClipboardContents() {
	  try {
	    const text = await navigator.clipboard.readText();
	    console.log('Pasted content: ', text);
	  } catch (err) {
	    console.error('Failed to read clipboard contents: ', err);
	  }
	});

	async function getClipboardContents() {
	  try {
	    const clipboardItems = await navigator.clipboard.read();
	    for (const clipboardItem of clipboardItems) {
	      for (const type of clipboardItem.types) {
	        const blob = await clipboardItem.getType(type);
	        console.log(URL.createObjectURL(blob));
	      }
	    }
	  } catch (err) {
	    console.error(err.name, err.message);
	  }
	}

ClipboardItem 对象表示一个单独的剪贴项，每个剪贴项都拥有 ClipboardItem.types 属性和 ClipboardItem.getType() 方法。

ClipboardItem.types 属性返回一个数组，里面的成员是该剪贴项可用的 MIME 类型，比如某个剪贴项可以用 HTML 格式粘贴，也可以用纯文本格式粘贴，那么它就有两个 MIME 类型（text/html和text/plain）。

ClipboardItem.getType(type) 方法用于读取剪贴项的数据，返回一个 Promise 对象。该方法接受剪贴项的 MIME 类型作为参数，返回该类型的数据，该参数是必需的，否则会报错。

	try {
	  const imgURL = 'https://dummyimage.com/300.png';
	  const data = await fetch(imgURL);
	  const blob = await data.blob();
	  await navigator.clipboard.write([
	    new ClipboardItem({
	      [blob.type]: blob
	    })
	  ]);
	  console.log('Image copied.');
	} catch (err) {
	  console.error(err.name, err.message);
	}

上面示例中，脚本向剪贴板写入了一张图片。注意，Chrome 浏览器目前只支持写入 PNG 格式的图片。

ClipboardItem()是浏览器原生提供的构造函数，用来生成ClipboardItem实例，它接受一个对象作为参数，该对象的键名是数据的 MIME 类型，键值就是数据本身。

下面的例子是将同一个剪贴项的多种格式的值，写入剪贴板，一种是文本数据，另一种是二进制数据，供不同的场合粘贴使用。


	function copy() {
	  const image = await fetch('kitten.png');
	  const text = new Blob(['Cute sleeping kitten'], {type: 'text/plain'});
	  const item = new ClipboardItem({
	    'text/plain': text,
	    'image/png': image
	  });
	  await navigator.clipboard.write([item]);
	}

## Clipboard Events

用户向剪贴板放入数据时，将触发 copy 事件，剪切时触发 cut 事件。

下面的示例是将用户放入剪贴板的文本，转为大写。

	const source = document.querySelector('.source');

	source.addEventListener('copy', (event) => {
	  const selection = document.getSelection();
	  event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
	  event.preventDefault();
	});

上面示例中，事件对象的 clipboardData 属性包含了剪贴板数据。它是一个对象，有以下属性和方法。

	Event.clipboardData.setData(type, data)：修改剪贴板数据，需要指定数据类型。
	Event.clipboardData.getData(type)：获取剪贴板数据，需要指定数据类型。
	Event.clipboardData.clearData([type])：清除剪贴板数据，可以指定数据类型。如果不指定类型，将清除所有类型的数据。
	Event.clipboardData.items：一个类似数组的对象，包含了所有剪贴项，不过通常只有一个剪贴项。

下面的示例是拦截用户的复制操作，将指定内容放入剪贴板。

	const clipboardItems = [];

	document.addEventListener('copy', async (e) => {
	  e.preventDefault();
	  try {
	    let clipboardItems = [];
	    for (const item of e.clipboardData.items) {
	      if (!item.type.startsWith('image/')) {
	        continue;
	      }
	      clipboardItems.push(
	        new ClipboardItem({
	          [item.type]: item,
	        })
	      );
	      await navigator.clipboard.write(clipboardItems);
	      console.log('Image copied.');
	    }
	  } catch (err) {
	    console.error(err.name, err.message);
	  }
	});

上面示例中，先使用 e.preventDefault() 取消了剪贴板的默认操作，然后由脚本接管复制操作。

cut 事件则是在用户进行剪切操作时触发，它的处理跟 copy 事件完全一样，也是从 Event.clipboardData 属性拿到剪切的数据。


用户使用剪贴板数据，进行粘贴操作时，会触发 paste 事件。

下面的示例是拦截粘贴操作，由脚本将剪贴板里面的数据取出来。

	document.addEventListener('paste', async (e) => {
	  e.preventDefault();
	  const text = await navigator.clipboard.readText();
	  console.log('Pasted text: ', text);
	});



## 6.4.1. Reading from the clipboard
These data types must be exposed by paste events if a corresponding native type exists on the clipboard:

	- text/plain
	- text/uri-list
	- text/csv
	- text/css
	- text/html
	- application/xhtml+xml
	- image/png
	- image/jpg, image/jpeg
	- image/gif
	- image/svg+xml
	- application/xml, text/xml
	- application/javascript
	- application/json
	- application/octet-stream

Example: Overwrite what is copied to the clipboard.

	document.addEventListener('cut', function(e) {
	  // e.clipboardData is initially empty, but we can set it to the
	  // data that we want copied onto the clipboard as part of the cut.
	  // Write the data that we want copied onto the clipboard.
	  e.clipboardData.setData('text/plain', 'Hello, world!');
	  e.clipboardData.setData('text/html', '<b>Hello, world!</b>');

	  // Since we will be canceling the cut operation, we need to manually
	  // update the document to remove the currently selected text.
	  deleteCurrentDocumentSelection();

	  // This is necessary to prevent the document selection from being
	  // written to the clipboard.
	  e.preventDefault();
	});

Example: Overwrite what is being pasted onto the clipboard.

	document.addEventListener('paste', function(e) {
	  // e.clipboardData contains the data that is about to be pasted.
	  if (e.clipboardData.types.indexOf('text/html') > -1) {
	    var oldData = e.clipboardData.getData('text/html');
	    var newData = '<b>Ha Ha!</b> ' + oldData;

	    // Since we are canceling the paste operation, we need to manually
	    // paste the data into the document.
	    pasteClipboardData(newData);

	    // This is necessary to prevent the default paste action.
	    e.preventDefault();
	  }
	});


## 5.1. Clipboard event interfaces

The ClipboardEvent interface extends the Event interface.

	dictionary ClipboardEventInit : EventInit {
	  DataTransfer? clipboardData = null;
	};

	[Exposed=Window]
	interface ClipboardEvent : Event {
	  constructor(DOMString type, optional ClipboardEventInit eventInitDict = {});
	  readonly attribute DataTransfer? clipboardData;
	};

Object Management Group’s Interface Definition Language (IDL) 


## 6.4.2. Writing to the clipboard
These data types must be placed on the clipboard with a corresponding native type description if added to a DataTransfer object during copy and cut events.

	- text/plain
	- text/uri-list
	- text/csv
	- text/html
	- image/svg+xml
	- application/xml, text/xml
	- application/json

Example: Overriding the copy event

	// Overwrite what is being copied to the clipboard.
	document.addEventListener('copy', function(e) {
	  // e.clipboardData is initially empty, but we can set it to the
	  // data that we want copied onto the clipboard.
	  e.clipboardData.setData('text/plain', 'Hello, world!');
	  e.clipboardData.setData('text/html', '<b>Hello, world!</b>');

	  // This is necessary to prevent the current document selection from
	  // being written to the clipboard.
	  e.preventDefault();
	});

## 7.2. Clipboard Interface

	typedef sequence<ClipboardItem> ClipboardItems;

	[SecureContext, Exposed=Window] interface Clipboard : EventTarget {
	  Promise<ClipboardItems> read();
	  Promise<DOMString> readText();
	  Promise<undefined> write(ClipboardItems data);
	  Promise<undefined> writeText(DOMString data);
	};

	typedef (DOMString or Blob) ClipboardItemDataType;
	typedef Promise<ClipboardItemDataType> ClipboardItemData;

	callback ClipboardItemDelayedCallback = ClipboardItemData ();

	[Exposed=Window] interface ClipboardItem {
	  constructor(record<DOMString, ClipboardItemData> items,
	    optional ClipboardItemOptions options = {});
	  static ClipboardItem createDelayed(
	      record<DOMString, ClipboardItemDelayedCallback> items,
	      optional ClipboardItemOptions options = {});

	  readonly attribute PresentationStyle presentationStyle;
	  readonly attribute long long lastModified;
	  readonly attribute boolean delayed;

	  readonly attribute FrozenArray<DOMString> types;

	  Promise<Blob> getType(DOMString type);
	};

	enum PresentationStyle { "unspecified", "inline", "attachment" };

	dictionary ClipboardItemOptions {
	  PresentationStyle presentationStyle = "unspecified";
	};



## 6.9.3 The DataTransfer interface
- https://html.spec.whatwg.org/multipage/dnd.html#datatransfer

DataTransfer objects are used to expose the drag data store that underlies a drag-and-drop operation.

	[Exposed=Window]
	interface DataTransfer {
	  constructor();

	  attribute DOMString dropEffect;
	  attribute DOMString effectAllowed;

	  [SameObject] readonly attribute DataTransferItemList items;

	  undefined setDragImage(Element image, long x, long y);

	  /* old interface */
	  readonly attribute FrozenArray<DOMString> types;
	  DOMString getData(DOMString format);
	  undefined setData(DOMString format, DOMString data);
	  undefined clearData(optional DOMString format);
	  [SameObject] readonly attribute FileList files;
	};

# Colors by Name
- https://www.w3.org/TR/2003/WD-css3-color-20030214/

Unix X11 Color Names, Robert B. Hess. Colors By Name. MSDN Online Web Workshop. 02 November 1996. 

	{hex: '#f0f8ff', hsl: 'hsl(240,248,255)', name: 'aliceblue'},
	{hex: '#faebd7', hsl: 'hsl(250,235,215)', name: 'antiquewhite'},
	{hex: '#00ffff', hsl: 'hsl(0,255,255)'  , name: 'aqua'},
	{hex: '#7fffd4', hsl: 'hsl(127,255,212)', name: 'aquamarine'},
	{hex: '#f0ffff', hsl: 'hsl(240,255,255)', name: 'azure'},
	{hex: '#f5f5dc', hsl: 'hsl(245,245,220)', name: 'beige'},
	{hex: '#ffe4c4', hsl: 'hsl(255,228,196)', name: 'bisque'},
	{hex: '#000000', hsl: 'hsl(0,0,0)'      , name: 'black'},
	{hex: '#ffebcd', hsl: 'hsl(255,235,205)', name: 'blanchedalmond'},
	{hex: '#0000ff', hsl: 'hsl(0,0,255)'    , name: 'blue'},
	{hex: '#8a2be2', hsl: 'hsl(138,43,226)' , name: 'blueviolet'},
	{hex: '#a52a2a', hsl: 'hsl(165,42,42)'  , name: 'brown'},
	{hex: '#deb887', hsl: 'hsl(222,184,135)', name: 'burlywood'},
	{hex: '#5f9ea0', hsl: 'hsl(95,158,160)' , name: 'cadetblue'},
	{hex: '#7fff00', hsl: 'hsl(127,255,0)'  , name: 'chartreuse'},
	{hex: '#d2691e', hsl: 'hsl(210,105,30)' , name: 'chocolate'},
	{hex: '#ff7f50', hsl: 'hsl(255,127,80)' , name: 'coral'},
	{hex: '#6495ed', hsl: 'hsl(100,149,237)', name: 'cornflowerblue'},
	{hex: '#fff8dc', hsl: 'hsl(255,248,220)', name: 'cornsilk'},
	{hex: '#dc143c', hsl: 'hsl(220,20,60)'  , name: 'crimson'},
	{hex: '#00ffff', hsl: 'hsl(0,255,255)'  , name: 'cyan'},
	{hex: '#00008b', hsl: 'hsl(0,0,139)'    , name: 'darkblue'},
	{hex: '#008b8b', hsl: 'hsl(0,139,139)'  , name: 'darkcyan'},
	{hex: '#b8860b', hsl: 'hsl(184,134,11)' , name: 'darkgoldenrod'},
	{hex: '#a9a9a9', hsl: 'hsl(169,169,169)', name: 'darkgray'},
	{hex: '#006400', hsl: 'hsl(0,100,0)'    , name: 'darkgreen'},
	{hex: '#a9a9a9', hsl: 'hsl(169,169,169)', name: 'darkgrey'},
	{hex: '#bdb76b', hsl: 'hsl(189,183,107)', name: 'darkkhaki'},
	{hex: '#8b008b', hsl: 'hsl(139,0,139)'  , name: 'darkmagenta'},
	{hex: '#556b2f', hsl: 'hsl(85,107,47)'  , name: 'darkolivegreen'},
	{hex: '#ff8c00', hsl: 'hsl(255,140,0)'  , name: 'darkorange'},
	{hex: '#9932cc', hsl: 'hsl(153,50,204)' , name: 'darkorchid'},
	{hex: '#8b0000', hsl: 'hsl(139,0,0)'    , name: 'darkred'},
	{hex: '#e9967a', hsl: 'hsl(233,150,122)', name: 'darksalmon'},
	{hex: '#8fbc8f', hsl: 'hsl(143,188,143)', name: 'darkseagreen'},
	{hex: '#483d8b', hsl: 'hsl(72,61,139)'  , name: 'darkslateblue'},
	{hex: '#2f4f4f', hsl: 'hsl(47,79,79)'   , name: 'darkslategray'},
	{hex: '#2f4f4f', hsl: 'hsl(47,79,79)'   , name: 'darkslategrey'},
	{hex: '#00ced1', hsl: 'hsl(0,206,209)'  , name: 'darkturquoise'},
	{hex: '#9400d3', hsl: 'hsl(148,0,211)'  , name: 'darkviolet'},
	{hex: '#ff1493', hsl: 'hsl(255,20,147)' , name: 'deeppink'},
	{hex: '#00bfff', hsl: 'hsl(0,191,255)'  , name: 'deepskyblue'},
	{hex: '#696969', hsl: 'hsl(105,105,105)', name: 'dimgray'},
	{hex: '#696969', hsl: 'hsl(105,105,105)', name: 'dimgrey'},
	{hex: '#1e90ff', hsl: 'hsl(30,144,255)' , name: 'dodgerblue'},
	{hex: '#b22222', hsl: 'hsl(178,34,34)'  , name: 'firebrick'},
	{hex: '#fffaf0', hsl: 'hsl(255,250,240)', name: 'floralwhite'},
	{hex: '#228b22', hsl: 'hsl(34,139,34)'  , name: 'forestgreen'},
	{hex: '#ff00ff', hsl: 'hsl(255,0,255)'  , name: 'fuchsia'},
	{hex: '#dcdcdc', hsl: 'hsl(220,220,220)', name: 'gainsboro'},
	{hex: '#f8f8ff', hsl: 'hsl(248,248,255)', name: 'ghostwhite'},
	{hex: '#ffd700', hsl: 'hsl(255,215,0)'  , name: 'gold'},
	{hex: '#daa520', hsl: 'hsl(218,165,32)' , name: 'goldenrod'},
	{hex: '#808080', hsl: 'hsl(128,128,128)', name: 'gray'},
	{hex: '#008000', hsl: 'hsl(0,128,0)'    , name: 'green'},
	{hex: '#adff2f', hsl: 'hsl(173,255,47)' , name: 'greenyellow'},
	{hex: '#808080', hsl: 'hsl(128,128,128)', name: 'grey'},
	{hex: '#f0fff0', hsl: 'hsl(240,255,240)', name: 'honeydew'},
	{hex: '#ff69b4', hsl: 'hsl(255,105,180)', name: 'hotpink'},
	{hex: '#cd5c5c', hsl: 'hsl(205,92,92)'  , name: 'indianred'},
	{hex: '#4b0082', hsl: 'hsl(75,0,130)'   , name: 'indigo'},
	{hex: '#fffff0', hsl: 'hsl(255,255,240)', name: 'ivory'},
	{hex: '#f0e68c', hsl: 'hsl(240,230,140)', name: 'khaki'},
	{hex: '#e6e6fa', hsl: 'hsl(230,230,250)', name: 'lavender'},
	{hex: '#fff0f5', hsl: 'hsl(255,240,245)', name: 'lavenderblush'},
	{hex: '#7cfc00', hsl: 'hsl(124,252,0)'  , name: 'lawngreen'},
	{hex: '#fffacd', hsl: 'hsl(255,250,205)', name: 'lemonchiffon'},
	{hex: '#add8e6', hsl: 'hsl(173,216,230)', name: 'lightblue'},
	{hex: '#f08080', hsl: 'hsl(240,128,128)', name: 'lightcoral'},
	{hex: '#e0ffff', hsl: 'hsl(224,255,255)', name: 'lightcyan'},
	{hex: '#fafad2', hsl: 'hsl(250,250,210)', name: 'lightgoldenrodyellow'},
	{hex: '#d3d3d3', hsl: 'hsl(211,211,211)', name: 'lightgray'},
	{hex: '#90ee90', hsl: 'hsl(144,238,144)', name: 'lightgreen'},
	{hex: '#d3d3d3', hsl: 'hsl(211,211,211)', name: 'lightgrey'},
	{hex: '#ffb6c1', hsl: 'hsl(255,182,193)', name: 'lightpink'},
	{hex: '#ffa07a', hsl: 'hsl(255,160,122)', name: 'lightsalmon'},
	{hex: '#20b2aa', hsl: 'hsl(32,178,170)' , name: 'lightseagreen'},
	{hex: '#87cefa', hsl: 'hsl(135,206,250)', name: 'lightskyblue'},
	{hex: '#778899', hsl: 'hsl(119,136,153)', name: 'lightslategray'},
	{hex: '#778899', hsl: 'hsl(119,136,153)', name: 'lightslategrey'},
	{hex: '#b0c4de', hsl: 'hsl(176,196,222)', name: 'lightsteelblue'},
	{hex: '#ffffe0', hsl: 'hsl(255,255,224)', name: 'lightyellow'},
	{hex: '#00ff00', hsl: 'hsl(0,255,0)'    , name: 'lime'},
	{hex: '#32cd32', hsl: 'hsl(50,205,50)'  , name: 'limegreen'},
	{hex: '#faf0e6', hsl: 'hsl(250,240,230)', name: 'linen'},
	{hex: '#ff00ff', hsl: 'hsl(255,0,255)'  , name: 'magenta'},
	{hex: '#800000', hsl: 'hsl(128,0,0)'    , name: 'maroon'},
	{hex: '#66cdaa', hsl: 'hsl(102,205,170)', name: 'mediumaquamarine'},
	{hex: '#0000cd', hsl: 'hsl(0,0,205)'    , name: 'mediumblue'},
	{hex: '#ba55d3', hsl: 'hsl(186,85,211)' , name: 'mediumorchid'},
	{hex: '#9370db', hsl: 'hsl(147,112,219)', name: 'mediumpurple'},
	{hex: '#3cb371', hsl: 'hsl(60,179,113)' , name: 'mediumseagreen'},
	{hex: '#7b68ee', hsl: 'hsl(123,104,238)', name: 'mediumslateblue'},
	{hex: '#00fa9a', hsl: 'hsl(0,250,154)'  , name: 'mediumspringgreen'},
	{hex: '#48d1cc', hsl: 'hsl(72,209,204)' , name: 'mediumturquoise'},
	{hex: '#c71585', hsl: 'hsl(199,21,133)' , name: 'mediumvioletred'},
	{hex: '#191970', hsl: 'hsl(25,25,112)'  , name: 'midnightblue'},
	{hex: '#f5fffa', hsl: 'hsl(245,255,250)', name: 'mintcream'},
	{hex: '#ffe4e1', hsl: 'hsl(255,228,225)', name: 'mistyrose'},
	{hex: '#ffe4b5', hsl: 'hsl(255,228,181)', name: 'moccasin'},
	{hex: '#ffdead', hsl: 'hsl(255,222,173)', name: 'navajowhite'},
	{hex: '#000080', hsl: 'hsl(0,0,128)'    , name: 'navy'},
	{hex: '#fdf5e6', hsl: 'hsl(253,245,230)', name: 'oldlace'},
	{hex: '#808000', hsl: 'hsl(128,128,0)'  , name: 'olive'},
	{hex: '#6b8e23', hsl: 'hsl(107,142,35)' , name: 'olivedrab'},
	{hex: '#ffa500', hsl: 'hsl(255,165,0)'  , name: 'orange'},
	{hex: '#ff4500', hsl: 'hsl(255,69,0)'   , name: 'orangered'},
	{hex: '#da70d6', hsl: 'hsl(218,112,214)', name: 'orchid'},
	{hex: '#eee8aa', hsl: 'hsl(238,232,170)', name: 'palegoldenrod'},
	{hex: '#98fb98', hsl: 'hsl(152,251,152)', name: 'palegreen'},
	{hex: '#afeeee', hsl: 'hsl(175,238,238)', name: 'paleturquoise'},
	{hex: '#db7093', hsl: 'hsl(219,112,147)', name: 'palevioletred'},
	{hex: '#ffefd5', hsl: 'hsl(255,239,213)', name: 'papayawhip'},
	{hex: '#ffdab9', hsl: 'hsl(255,218,185)', name: 'peachpuff'},
	{hex: '#cd853f', hsl: 'hsl(205,133,63)' , name: 'peru'},
	{hex: '#ffc0cb', hsl: 'hsl(255,192,203)', name: 'pink'},
	{hex: '#dda0dd', hsl: 'hsl(221,160,221)', name: 'plum'},
	{hex: '#b0e0e6', hsl: 'hsl(176,224,230)', name: 'powderblue'},
	{hex: '#800080', hsl: 'hsl(128,0,128)'  , name: 'purple'},
	{hex: '#ff0000', hsl: 'hsl(255,0,0)'    , name: 'red'},
	{hex: '#bc8f8f', hsl: 'hsl(188,143,143)', name: 'rosybrown'},
	{hex: '#4169e1', hsl: 'hsl(65,105,225)' , name: 'royalblue'},
	{hex: '#8b4513', hsl: 'hsl(139,69,19)'  , name: 'saddlebrown'},
	{hex: '#fa8072', hsl: 'hsl(250,128,114)', name: 'salmon'},
	{hex: '#f4a460', hsl: 'hsl(244,164,96)' , name: 'sandybrown'},
	{hex: '#2e8b57', hsl: 'hsl(46,139,87)'  , name: 'seagreen'},
	{hex: '#fff5ee', hsl: 'hsl(255,245,238)', name: 'seashell'},
	{hex: '#a0522d', hsl: 'hsl(160,82,45)'  , name: 'sienna'},
	{hex: '#c0c0c0', hsl: 'hsl(192,192,192)', name: 'silver'},
	{hex: '#87ceeb', hsl: 'hsl(135,206,235)', name: 'skyblue'},
	{hex: '#6a5acd', hsl: 'hsl(106,90,205)' , name: 'slateblue'},
	{hex: '#708090', hsl: 'hsl(112,128,144)', name: 'slategray'},
	{hex: '#708090', hsl: 'hsl(112,128,144)', name: 'slategrey'},
	{hex: '#fffafa', hsl: 'hsl(255,250,250)', name: 'snow'},
	{hex: '#00ff7f', hsl: 'hsl(0,255,127)'  , name: 'springgreen'},
	{hex: '#4682b4', hsl: 'hsl(70,130,180)' , name: 'steelblue'},
	{hex: '#d2b48c', hsl: 'hsl(210,180,140)', name: 'tan'},
	{hex: '#008080', hsl: 'hsl(0,128,128)'  , name: 'teal'},
	{hex: '#d8bfd8', hsl: 'hsl(216,191,216)', name: 'thistle'},
	{hex: '#ff6347', hsl: 'hsl(255,99,71)'  , name: 'tomato'},
	{hex: '#40e0d0', hsl: 'hsl(64,224,208)' , name: 'turquoise'},
	{hex: '#ee82ee', hsl: 'hsl(238,130,238)', name: 'violet'},
	{hex: '#f5deb3', hsl: 'hsl(245,222,179)', name: 'wheat'},
	{hex: '#ffffff', hsl: 'hsl(255,255,255)', name: 'white'},
	{hex: '#f5f5f5', hsl: 'hsl(245,245,245)', name: 'whitesmoke'},
	{hex: '#ffff00', hsl: 'hsl(255,255,0)'  , name: 'yellow'},
	{hex: '#9acd32', hsl: 'hsl(154,205,50)' , name: 'yellowgreen'},



# Three.js 3D
https://threejs.org/
http://www.hewebgl.com/article/articledir/1

JavaScript 3D library
The aim of the project is to create an easy to use, lightweight, 3D library with a default WebGL renderer. The library also provides Canvas 2D, SVG and CSS3D renderers in the examples.

- Examples — http://threejs.org/examples/
- Documentation — http://threejs.org/docs/
- Wiki — https://github.com/mrdoob/three.js/wiki
- Migrating — https://github.com/mrdoob/three.js/wiki/Migration-Guide
- Questions — http://stackoverflow.com/questions/tagged/three.js
- Forum — https://discourse.threejs.org/
- Gitter — https://gitter.im/mrdoob/three.js
- Slack - https://join.slack.com/t/threejs/shared_invite/enQtMzYxMzczODM2OTgxLTQ1YmY4YTQxOTFjNDAzYmQ4NjU2YzRhNzliY2RiNDEyYjU2MjhhODgyYWQ5Y2MyZTU3MWNkOGVmOGRhOTQzYTk

Usage
Download the minified library and include it in your HTML, or install and import it as a module, Alternatively, see how to build the library yourself.

<script src="js/three.min.js"></script>

This code creates a scene, a camera, and a geometric cube, and it adds the cube to the scene. It then creates a WebGL renderer for the scene and camera, and it adds that viewport to the document.body element. Finally, it animates the cube within the scene for the camera.

	var camera, scene, renderer;
	var geometry, material, mesh;

	init();
	animate();

	function init() {

		camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
		camera.position.z = 1;

		scene = new THREE.Scene();

		geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
		material = new THREE.MeshNormalMaterial();

		mesh = new THREE.Mesh( geometry, material );
		scene.add( mesh );

		renderer = new THREE.WebGLRenderer( { antialias: true } );
		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( renderer.domElement );

	}

	function animate() {

		requestAnimationFrame( animate );

		mesh.rotation.x += 0.01;
		mesh.rotation.y += 0.02;

		renderer.render( scene, camera );

	}



# MUI
https://github.com/dcloudio/mui/
https://dev.dcloud.net.cn/mui/

接近原生APP体验的高性能框架

mui 性能和体验的差距，一直是 mobile app 开发者放弃HTML5的首要原因。 浏览器天生的切页白屏、不忍直视的转页动画、浮动元素的抖动、无法流畅下拉刷新等问题，这些都让HTML5开发者倍感挫败，尤其拿到Android低端机运行，摔手机的心都有； 另一方面，浏览器默认控件样式又少又丑，制作一个漂亮的控件非常麻烦，也有一些制作简单的ui框架但性能低下。

mui框架有效的解决了这些问题，这是一个可以方便开发出高性能App的框架，也是目前最接近原生App效果的框架。

轻量
追求性能体验，是我们开始启动MUI项目的首要目标，轻量必然是重要特征；

MUI不依赖任何第三方JS库，压缩后的JS和CSS文件仅有100+K和60+K


原生UI
鉴于之前的很多前端框架（特别是响应式布局的框架），UI控件看起来太像网页，没有原生感觉，因此追求原生UI感觉也是我们的重要目标

MUI以iOS平台UI为基础，补充部分Android平台特有的UI控件

流畅体验
下拉刷新    侧滑导航    滑动触发操作菜单

为实现下拉刷新功能，大多H5框架都是通过DIV模拟下拉回弹动画，在低端android手机上，DIV动画经常出现卡顿现象（特别是图文列表的情况）； mui通过双webview解决这个DIV的拖动流畅度问题；拖动时，拖动的不是div，而是一个完整的webview（子webview），回弹动画使用原生动画。 

mui提供了两种侧滑导航实现：webview模式和div模式，两种模式各有优劣，适用于不同的场景。每种侧滑实现模式，有不同的侧滑动画效果，主要分为四类：

- 动画1：主界面移动、菜单不动
- 动画2：主界面不动、菜单移动
- 动画3：主界面和菜单同时移动
- 动画4：缩放式侧滑（类手机QQ）

在手机应用中（特别是iOS平台），很多操作菜单都是滑动触发的，比如短信界面，左滑显示“删除”按钮，点击可以删除该短信对话；邮件列表界面，左滑可以删除，右滑可以标注为"已读/未读"状态； mui的列表控件也支持滑动触发操作菜单功能，仅需按照特定格式拼装DOM结构即可；另外，滑动还支持事件触发，开发者可以通过监听滑动事件（slideleft/slideright），完成操作前的确认提醒工作。



# Frozen UI
http://frozenui.github.io/getting-started

FrozenUI 是一套基于移动端的UI库。它非常轻量、精美，遵从手机QQ设计规范，提供了表单、对话框、列表等常用组件。此外，FrozenUI还提供文字截断、1px边框、rem、两端留白等常用场景的解决方案。CSS做得更模块化和颗粒化，使用sass编写CSS代码，你完全可以按照实际情况按需加载。

获取 FrozenUI
方式一：点击链接下载文件

	https://github.com/frozenui/frozenui/archive/2.0.0.zip

方式二：在页面上引入样式文件（推荐）

	<link rel="stylesheet" href="http://i.gtimg.cn/vipstyle/frozenui/2.0.0/css/frozen.css">

如何使用
通过以上方式获取到 FrozenUI 后，在页面中引入后即可使用。以 FrozenUI 的按钮为例：

	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0, user-scalable=no">
			<title>FrozenUI Demo</title>
			<!-- 引入 FrozenUI -->
			<link rel="stylesheet" href="http://i.gtimg.cn/vipstyle/frozenui/2.0.0/css/frozen.css"/>
		</head>
		<body>
			<!-- 使用 -->
			<div class="ui-btn-wrap">
				<button class="ui-btn">常规按钮</button>
				<button class="ui-btn disabled">不可点击按钮</button>
			</div>
		</body>
	</html>

更多的使用示例，请参考 http://frozenui.github.io/frozenui/demo/index.html

如何开发
FrozenUI 使用 Grunt 作为编译系统，在你开发编译之前需要安装 node.js（npm 已经包含在内) 和 Grunt 。

	git clone https://github.com/frozenui/frozenui.git
	cd frozenui
	npm install
	grunt

运行 grunt 命令，会监听src目录下所有文件的变更，并且默认会在8080端口启动服务器，然后在浏览器打开 http://localhost:8080/。

项目 clone 到本地后，可以看到文件组织结构，具体文件说明如下：

	FrozenUI/
	├── release/
	│   └── 编译生成文件
	├── src/
	│   └── css
	│        └── 样式文件
	│   └── scss
	│        └── 存放 .scss源码
	│   └── demo
	│        └── 参考例子
	│   └── font
	│        └── 存放 icon的图片
	│
	└── tool/
		  └── 编译工具

历史版本及代码规范
- 2.0.0以前的历史版本修改记录： https://github.com/frozenui/frozenui/wiki/History
- 2.0.0版本的修改记录： https://github.com/frozenui/frozenui/wiki/History-2.0.0
- 组件css规范： https://github.com/frozenui/frozenui/wiki/CSS-Guide
- 通用代码规范： https://github.com/frozenui/frozenui/wiki/CSS-Guide

# UI 组件定制
- http://css3lib.alloyteam.com/uilib/turnpage/BookBlock/index2.html
- https://tympanus.net/Development/BookBlock/index2.html

边框阴影控制：

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
		<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
		<title>BookBlock: A Content Flip Plugin</title>
		<meta name="description" content="BookBlock: A Content Flip Plugin" />
		<meta name="keywords" content="jquery, plugin, css3, flip, page, 3d, booklet, book, perspective" />
		<meta name="author" content="Codrops" />
		<!-- <link rel="shortcut icon" href="../favicon.ico">  -->
		<style>
	.bb-bookblock {
	  width: 300px;
	  height: 225px;
	}

	ul.bb-custom-grid {
	  list-style: none;
	  margin: 40px auto 30px auto;
	  padding: 0;
	  width: 700px;
	}

	/* Micro clearfix hack by Nicolas Gallagher http://nicolasgallagher.com/micro-clearfix-hack/ */
	ul.bb-custom-grid:before,
	ul.bb-custom-grid:after {
	  content: " ";
		display: table;
	}

	ul.bb-custom-grid:after {
	  clear: both;
	}
	/* end clearfix hack */

	ul.bb-custom-grid li {
	  float: left;
	  width: 300px;
	  height: 260px;
	  padding: 10px 20px 50px 20px;
	  background: #f8f8f8 url(../images/demo2/noise.jpg);
	  position: relative;
	  -webkit-box-sizing: content-box;
	  -moz-box-sizing: content-box;
	  box-sizing: content-box;
	  margin-bottom: 20px;
	  box-shadow: 0 1px 2px rgba(0,0,0,0.2);
	}

	ul.bb-custom-grid li:nth-child(odd) {
	  margin-right: 20px;
	}

	ul.bb-custom-grid li:before,
	ul.bb-custom-grid li:after{
	  content: '';
	  position: absolute;
	  z-index: -2;
	  bottom: 15px;
	  left:  10px;
	  width: 50%;
	  height: 20%;
	  box-shadow: 0 15px 10px rgba(0, 0, 0, 0.7);
	  -webkit-transform: rotate(-3deg);
	  -moz-transform: rotate(-3deg);
	  -ms-transform: rotate(-3deg);
	  -o-transform: rotate(-3deg);
	  transform: rotate(-3deg);
	}

	ul.bb-custom-grid li:after {
	  right: 10px;
	  left: auto;
	  -webkit-transform: rotate(3deg);
	  -moz-transform: rotate(3deg);
	  -ms-transform: rotate(3deg);
	  -o-transform: rotate(3deg);
	  transform: rotate(3deg);
	}

	ul.bb-custom-grid li a {
	  display: block;
	}

	ul.bb-custom-grid li h3 {
	  color: #9a9b92;
	  margin: 0;
	  padding: 0;
	  text-transform: uppercase;
	  font-family: "Montserrat", sans-serif;
	  font-weight: 400;
	  font-size: 14px;
	  line-height: 35px;
	  border-top: 1px dashed rgba(0,0,0,0.1);
	  text-shadow: 0 1px 1px rgba(255,255,255,0.9);
	}

	ul.bb-custom-grid nav {
	  text-align: center;
	  margin-top: 12px;
	  padding-bottom: 5px;
	  border-bottom: 1px dashed rgba(0,0,0,0.1);
	}

	ul.bb-custom-grid nav span {
	  display: inline-block;
	  width: 12px;
	  height: 12px;
	  border-radius: 50%;
	  background: #f0f0f0;
	  margin: 3px;
	  cursor: pointer;
	  box-shadow: 
		inset 0 1px 1px rgba(0,0,0,0.2), 
		0 2px 1px rgba(255,255,255,0.9);
	}

	ul.bb-custom-grid nav span.bb-current {
	  background: #bdd70d;
	}
		</style>
	  </head>
	  <body>
	<div class="container">

	  <!-- Codrops top bar -->
	  <div class="codrops-top">
		<a href="http://tympanus.net/codrops/2012/08/29/multiple-area-charts-with-d3-js/">
		  <strong>&laquo; Previous Demo: </strong>Multiple Area Charts with D3.js
		</a>
		<span class="right">
		  <a href="http://dribbble.com/isaac317">Images by Isaac Montemayor</a>
		  <a href="http://tympanus.net/codrops/2012/09/03/bookblock-a-content-flip-plugin/">
			<strong>Back to the Codrops Article</strong>
		  </a>
		</span>
		<div class="clr"></div>
	  </div><!--/ Codrops top bar -->

	  <header>
	  
		<h1><strong>BookBlock</strong> &ndash; A Content Flip Plugin</h1>
		<h2>Flip any content like in a booklet</h2>
		
		<nav class="codrops-demos">
		  <a href="index.html">Demo 1</a>
		  <a class="current-demo" href="index2.html">Demo 2</a>
		  <a href="index3.html">Demo 3</a>
		</nav>
		
		<div class="support-note"><!-- let's check browser support with modernizr -->
		  <span class="no-csstransforms">CSS transforms are not supported in your browser</span>
		  <span class="no-csstransforms3d">CSS 3D transforms are not supported in your browser</span>
		  <span class="no-csstransitions">CSS transitions are not supported in your browser</span>
		</div>
		
	  </header>
	  
	  <section class="main">

		<ul class="bb-custom-grid" id="bb-custom-grid">
		  <li>
			<h3>Neonmob set</h3>
			<div class="bb-bookblock">
			  <div class="bb-item"><a href="http://dribbble.com/shots/614568-Lands-Devil-Spirit-Jinx"><img src="http://css3lib.alloyteam.com/uilib/turnpage/BookBlock/images/demo2/1.jpg" alt="image01"/></a></div>
			</div>
			<nav>
			  <span class="bb-current"></span>
			  <span></span>
			  <span></span>
			  <span></span>
			</nav>
		  </li>
		  <li>
			<h3>Illustration Work</h3>
			<div class="bb-bookblock">
			  <div class="bb-item"><a href="http://dribbble.com/shots/702201-Cat"><img src="http://css3lib.alloyteam.com/uilib/turnpage/BookBlock/images/demo2/5.jpg" alt="image05"/></a></div>
			</div>
			<nav>
			  <span class="bb-current"></span>
			  <span></span>
			  <span></span>
			  <span></span>
			</nav>
		  </li>
		  <li>
			<h3>Everyday Monsters</h3>
			<div class="bb-bookblock">
			  <div class="bb-item"><a href="http://dribbble.com/shots/298473-Pirate-Ghosts"><img src="http://css3lib.alloyteam.com/uilib/turnpage/BookBlock/images/demo2/9.jpg" alt="image09"/></a></div>
			</div>
			<nav>
			  <span class="bb-current"></span>
			  <span></span>
			  <span></span>
			  <span></span>
			</nav>
		  </li>
		  <li>
			<h3>Signage for the Office</h3>
			<div class="bb-bookblock">
			  <div class="bb-item"><a href="http://dribbble.com/shots/327171-Around-the-Office-Signage-7"><img src="http://css3lib.alloyteam.com/uilib/turnpage/BookBlock/images/demo2/13.jpg" alt="image13"/></a></div>
			</div>
			<nav>
			  <span class="bb-current"></span>
			  <span></span>
			  <span></span>
			  <span></span>
			</nav>
		  </li>
		</ul>
		
	  </section>
	  
	</div>
	  </body>
	</html>


## Toggle Button

	<!-- https://testing-library.com/docs/guiding-principles/ -->

	<style type="text/css">
	.toggle_BsTx {
	    align-items: center;
	    display: flex;
	    height: 10px;
	    justify-content: center;
	    position: relative;
	    width: 10px
	}

	.toggle_BsTx:before {
	    position: absolute
	}

	.react-toggle {
	    touch-action: pan-x;
	    display: inline-block;
	    position: relative;
	    cursor: pointer;
	    background-color: transparent;
	    border: 0;
	    padding: 0;
	    -webkit-touch-callout: none;
	    -webkit-user-select: none;
	    -moz-user-select: none;
	    -ms-user-select: none;
	    user-select: none;
	    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	    -webkit-tap-highlight-color: transparent
	}

	.react-toggle-screenreader-only {
	    border: 0;
	    clip: rect(0 0 0 0);
	    height: 1px;
	    margin: -1px;
	    overflow: hidden;
	    padding: 0;
	    position: absolute;
	    width: 1px
	}

	.react-toggle--disabled {
	    cursor: not-allowed
	}

	.react-toggle-track {
	    width: 50px;
	    height: 24px;
	    padding: 0;
	    border-radius: 30px;
	    background-color: #4d4d4d;
	    transition: all .2s ease
	}

	.react-toggle-track-check {
	    position: absolute;
	    width: 14px;
	    height: 10px;
	    top: 0;
	    bottom: 0;
	    margin-top: auto;
	    margin-bottom: auto;
	    line-height: 0;
	    left: 8px;
	    opacity: 0;
	    transition: opacity .25s ease
	}

	.react-toggle--checked .react-toggle-track-check,
	.react-toggle-track-x,
	[data-theme=dark] .react-toggle .react-toggle-track-check {
	    opacity: 1;
	    transition: opacity .25s ease
	}

	.react-toggle-track-x {
	    position: absolute;
	    width: 10px;
	    height: 10px;
	    top: 0;
	    bottom: 0;
	    margin-top: auto;
	    margin-bottom: auto;
	    line-height: 0;
	    right: 10px
	}

	.react-toggle--checked .react-toggle-track-x,
	[data-theme=dark] .react-toggle .react-toggle-track-x {
	    opacity: 0
	}

	.react-toggle-thumb {
	    transition: all .5s cubic-bezier(.23, 1, .32, 1) 0ms;
	    position: absolute;
	    top: 1px;
	    left: 1px;
	    width: 22px;
	    height: 22px;
	    border: 1px solid #4d4d4d;
	    border-radius: 50%;
	    background-color: #fafafa;
	    box-sizing: border-box;
	    transition: all .25s ease
	}

	.react-toggle--checked .react-toggle-thumb,
	[data-theme=dark] .react-toggle .react-toggle-thumb {
	    left: 27px;
	    border-color: #19ab27
	}

	.react-toggle--focus .react-toggle-thumb {
	    box-shadow: 0 0 2px 3px #0099e0
	}

	.react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
	    box-shadow: 0 0 5px 5px #0099e0
	}

	</style>

	<div class="react-toggle react-toggle--checked" onClick="window.toggle=!window.toggle; this.className = !toggle? 'react-toggle react-toggle--checked':'react-toggle'">
	  <div class="react-toggle-track">
	    <div class="react-toggle-track-check"><span class="toggle_BsTx">🌜</span></div>
	    <div class="react-toggle-track-x"><span class="toggle_BsTx">🌞</span></div>
	  </div>
	  <div class="react-toggle-thumb"></div>
	  <input aria-label="Dark mode toggle" class="react-toggle-screenreader-only" type="checkbox" checked="">
	</div>



# 🚩 Binary - Blob, Uint8Aray, ArrayBuffer, atob/btoa
https://developer.mozilla.org/zh-CN/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView
https://developer.mozilla.org/en-US/docs/Web/API/FileReader#readAsArrayBuffer()
https://developer.mozilla.org/zh-CN/docs/Web/API/File
https://developer.mozilla.org/zh-CN/docs/Web/API/Blob

ArrayBuffer 表示固定字节长度的二进数据：

	new ArrayBuffer(length)

可以从以下途径获得 ArrayBuffer：

- From a Base64 string 
- From a local file 
- From Uint8Array.buffer

Uint8Array 表示 8-bit 无符号整型数组： 

	new Uint8Array(); // new in ES2017
	new Uint8Array(length);
	new Uint8Array(typedArray);
	new Uint8Array(object);
	new Uint8Array(buffer [, byteOffset [, length]]);

常用方法：

- Uint8Array.from() Creates a new Uint8Array from an array-like or iterable object. See also Array.from().
- Uint8Array.of() Creates a new Uint8Array with a variable number of arguments. See also Array.of().

Base64 是一组相似的二进制到文本（binary-to-text）的编码规则，使得二进制数据在解释成 radix-64 的表现形式后能够用 ASCII 字符串的格式表示出来。Base64 这个词出自一种 MIME 数据传输编码。 

Base64编码普遍应用于需要通过被设计为处理文本数据的媒介上储存和传输二进制数据而需要编码该二进制数据的场景。这样是为了保证数据的完整并且不用在传输过程中修改这些数据。Base64 也被一些应用（包括使用 MIME 的电子邮件）和在 XML 中储存复杂数据时使用。 

在 JavaScript 中，有两个函数被分别用来处理解码和编码 base64 字符串：

- btoa() Binary ArrayBuffer to Ascii, Base64 encode。
- atob() Ascii to Binary ArrayBuffer, Base64 decode。

Base64 编码 Uint8Array 时，需要先转换为 String 再进行编码。Base64 解码还原 Uint8Array 时要重新封装，先将还原回来的 String 进行字符分割，再用 charCodeAt() 将字符转换成数值：

	var u8 = new Uint8Array([65, 66, 67, 68]);
	var b64encoded = btoa(String.fromCharCode.apply(null, u8));

	var u8_2 = new Uint8Array(atob(b64encoded).split("").map(function(c) {
		return c.charCodeAt(0); 
	}));

DataView 提供了一个 low-level 接口来读写 ArrayBuffer 而不必考虑平台的字节序问题 platform's endianness。
https://developer.mozilla.org/en-US/docs/Glossary/Endianness
Examples with the number 0x12345678 (i.e. 305 419 896 in decimal):

- little-endian: 0x78 0x56 0x34 0x12
- big-endian: 0x12 0x34 0x56 0x78
- mixed-endian (historic and very rare): 0x34 0x12 0x78 0x56

	// create an ArrayBuffer with a size in bytes
	const buffer = new ArrayBuffer(16);

	// Create a couple of views
	const view1 = new DataView(buffer);
	const view2 = new DataView(buffer,12,4); //from byte 12 for the next 4 bytes
	view1.setInt8(12, 42); // put 42 in slot 12

	console.log(view2.getInt8(0));
	// expected output: 42


Update:

Mozilla recently released a StringView for manipulating strings contained in Typed Arrays. Specifically the bytesToBase64 method is probably what you want.

If that's too heavy weight, then here is a simple routine (based on the one posted by @RohitSengar) that converts a Uint8Array to a string (which can then be easily base64 encoded):

	function Uint8ToString(u8a){
	  var CHUNK_SZ = 0x8000;
	  var c = [];
	  for (var i=0; i < u8a.length; i+=CHUNK_SZ) {
		c.push(String.fromCharCode.apply(null, u8a.subarray(i, i+CHUNK_SZ)));
	  }
	  return c.join("");
	}
	// Usage
	var u8 = new Uint8Array([65, 66, 67, 68]);
	var b64encoded = btoa(Uint8ToString(u8));

StringView
https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Code_snippets/StringView_library

- creating a C-like interface for strings (i.e. array of characters codes — ArrayBufferView in JavaScript) based upon the JavaScript ArrayBuffer interface,
- creating a collection of methods for such string-like objects (since now: stringViews) which work strictly on array of numbers rather than on immutable JavaScript strings,
- working with other Unicode encodings, different from default JavaScript's UTF-16 DOMStrings,



IE10+可以支持 。低于IE10的可以使用 polyfill 实现：base64.js。
https://github.com/dankogai/js-base64#readme

	var byteCharacters;
	if (window.atob) {
		byteCharacters = atob(b64Data);
	} else {
		byteCharacters = Base64.decode(b64Data);
	}

Blob 对象表示一个不可变、原始数据的类文件对象。Blob 表示的不一定是JavaScript原生格式的数据。File 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。

要从其他非blob对象和数据构造一个 Blob，请使用 Blob() 构造函数。要创建一个 blob 数据的子集 blob，请使用 slice() 方法。要获取用户文件系统上的文件对应的 Blob 对象，请参阅 File 文档。

Blob也仅支持IE10+，网上有很多polyfill来实现，这里仅作推荐Blob.js。
https://github.com/eligrey/Blob.js

有一个库有很多这方面的支持：其中的typedarray.js，如下部分源码：

	...
	global.Int8Array = global.Int8Array || Int8Array;
	global.Uint8Array = global.Uint8Array || Uint8Array;
	global.Uint8ClampedArray = global.Uint8ClampedArray || Uint8ClampedArray;
	global.Int16Array = global.Int16Array || Int16Array;
	global.Uint16Array = global.Uint16Array || Uint16Array;
	global.Int32Array = global.Int32Array || Int32Array;
	global.Uint32Array = global.Uint32Array || Uint32Array;
	global.Float32Array = global.Float32Array || Float32Array;
	global.Float64Array = global.Float64Array || Float64Array;
	...


# <a download=""></a>

浏览器主动提供下载文件功能，首先IE不支持HTML5的download属性：

	var a = document.createElement('a');
	var ev = document.createEvent('HTMLEvents');
	var name = '报告导出列表' + new Date().toLocaleString() + '.xlsx';
	ev.initEvent('click', true, true);
	a.download = name;
	a.href = URL.createObjectURL(blob);
	a.click();

在IE下是不支持的，可以使用msSaveBlob来解决（IE10+）：

	if (navigator.msSaveBlob) {
		return navigator.msSaveBlob(blob, name);
	}

	a.click();

推荐一个文件下载库：FileSaver。使用也很简单，比如以下直接引用的方式使用：
https://github.com/eligrey/FileSaver.js/

	<script src="../js/FileSaver.min.js"></script>
	<script>
	...
	saveAs(blob, 'hello world.xlsx'); 
	</script>

这个库也仅支持IE10+。


# RGB to Grey
RGB转灰度的几种算法 https://www.cnblogs.com/zhangjiansheng/p/6925722.html

方法一：

对于彩色转灰度，有一个很著名的心理学公式：

	Gray = R*0.299 + G*0.587 + B*0.114

方法二：

而实际应用时，希望避免低速的浮点运算，所以需要整数算法。注意到系数都是3位精度的没有，我们可以将它们缩放1000倍来实现整数运算算法：

	Gray = (R*299 + G*587 + B*114 + 500) / 1000

RGB一般是8位精度，现在缩放1000倍，所以上面的运算是32位整型的运算。注意后面那个除法是整数 除法，所以需要加上500来实现四舍五入。 就是由于该算法需要32位运算，所以该公式的另一个变种很流行：

	Gray = (R*30 + G*59 + B*11 + 50) / 100

方法三：

上面的整数算法已经很快了，但是有一点仍制约速度，就是最后的那个除法。移位比除法快多了，所以可以将系数缩放成2的整数幂。 习惯上使用16位精度，2的16次幂是65536，所以这样计算系数：

	0.299 * 65536 = 19595.264 ≈ 19595
	0.587 * 65536 + (0.264) = 38469.632 + 0.264 = 38469.896 ≈ 38469
	0.114 * 65536 + (0.896) =   7471.104 + 0.896 = 7472

可能很多人看见了，我所使用的舍入方式不是四舍五入。四舍五入会有较大的误差，应该将以前的计算结果的误差一起计算进去，舍入方式是去尾法：

写成表达式是：

	Gray = (R*19595 + G*38469 + B*7472) >> 16

2至20位精度的系数：

	Gray = (R*1 + G*2 + B*1) >> 2
	Gray = (R*2 + G*5 + B*1) >> 3
	Gray = (R*4 + G*10 + B*2) >> 4
	Gray = (R*9 + G*19 + B*4) >> 5
	Gray = (R*19 + G*37 + B*8) >> 6
	Gray = (R*38 + G*75 + B*15) >> 7
	Gray = (R*76 + G*150 + B*30) >> 8
	Gray = (R*153 + G*300 + B*59) >> 9
	Gray = (R*306 + G*601 + B*117) >> 10
	Gray = (R*612 + G*1202 + B*234) >> 11
	Gray = (R*1224 + G*2405 + B*467) >> 12
	Gray = (R*2449 + G*4809 + B*934) >> 13
	Gray = (R*4898 + G*9618 + B*1868) >> 14
	Gray = (R*9797 + G*19235 + B*3736) >> 15
	Gray = (R*19595 + G*38469 + B*7472) >> 16
	Gray = (R*39190 + G*76939 + B*14943) >> 17
	Gray = (R*78381 + G*153878 + B*29885) >> 18
	Gray = (R*156762 + G*307757 + B*59769) >> 19
	Gray = (R*313524 + G*615514 + B*119538) >> 20

仔细观察上面的表格，这些精度实际上是一样的：3与4、7与8、10与11、13与14、19与20。所以 16bit 运算下最好的计算公式是使用 7 位精度，比先前那个系数缩放 100 倍的精度高，而且速度快：

	Gray = (R*38 + G*75 + B*15) >> 7

其实最有意思的还是那个 2 位精度的，完全可以移位优化：

	Gray = (R + (WORD)G<<1 + B) >> 2

方法四：

另一种是 Adobe Photoshop 里的公式 Adobe RGB (1998) [gamma=2.20] 

	 Gray = (R^2.2 * 0.2973 + G^2.2 * 0.6274 + B^2.2 * 0.0753)^(1/2.2)

该方法运行速度稍慢，但是效果很好。

方法五：

还有就是平均值方法 

	GRAY = (RED+BLUE+GREEN)/3

（GRAY,GRAY,GRAY ） 替代 （RED,GREEN,BLUE）

但是这样做的精度比较低，图像转化为灰度效果不是太好。

综合上面的算法对我个人而言，我更喜欢用方法三的转化方法，转化的效果跟转化的精度都可以。

下面是我利用 OV2640 摄像头与灰度公式 

	Gray = (R*19595 + G*38469 + B*7472) >> 16

进行拍摄的图像，上面是灰度图像，下面是二值化图像，因为边沿所以导致在图像周围很多噪点。

https://images2015.cnblogs.com/blog/1006496/201705/1006496-20170531194809977-822094555.png

下面的图像阈值我设置为90，因为这是我晚上做的实验，晚上工作室光照强度不好，调大阈值可以得到更好的二值化图像。旁边的黑点同样是边缘造成的噪点，只要进行个过滤噪点操作就可以了。

https://images2015.cnblogs.com/blog/1006496/201705/1006496-20170531202016993-1230405589.png

整体上我自己写了一部分，从网上借鉴某个大牛写的一部分总结。谢谢大牛把自己的经验分享出来，促进大家的学习。


# CSS实现动态晴阴雨雪
https://www.jianshu.com/p/a278f32a67ca

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>单标签！纯CSS实现动态晴阴雨雪</title>
	</head>

	<body>
		<div class="weather sunny"></div>
		<div class="weather cloudy"></div>
		<div class="weather rainy"></div>
		<div class="weather snowy"></div>
	</body>
	<style>
	.weather {
		position: relative;
		display: inline-block;
		width: 180px;
		height: 240px;
		background: #23b7e5;
		border-radius: 8px;
	}
	.sunny:before {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 60px;
		height: 60px;
		background: #F6D963;
		border-radius: 50%;
		box-shadow: 0 0 20px #ff0;
		z-index: 2;
	}
	.sunny:after {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		margin: -45px 0 0 -45px; 
		width: 90px;
		height: 90px;
		background: #FFEB3B;
		clip-path: polygon(
			50% 0%,
			64.43% 25%,
			93.3% 25%,
			78.87% 50%,
			93.3% 75%,
			64.43% 75%,
			50% 100%,
			35.57% 75%,
			6.7% 75%,
			21.13% 50%,
			6.7% 25%,
			35.57% 25%);
		z-index: 1;
		animation: sunScale 2s linear infinite;
	}
	@keyframes sunScale {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}
	.cloudy:before,
	.rainy:before,
	.snowy:before {
		content: "";
		position: absolute;
		top: 50%;
		left: 25%;
		transform: translate(-50%, -50%);
		width: 36px;
		height: 36px;
		background: #fff;
		border-radius: 50%;
		box-shadow: 
			#fff 22px -15px 0 6px,
			#fff 57px -6px 0 2px, 
			#fff 87px 4px 0 -4px,
			#fff 33px 6px 0 6px,
			#fff 61px 6px 0 2px,
			#ccc 29px -23px 0 6px,
			#ccc 64px -14px 0 2px,
			#ccc 94px -4px 0 -4px;
		z-index: 2;
	}
	.cloudy:before {
		animation: cloudMove 2s linear infinite;
	}
	@keyframes cloudMove {
		0% {
			transform: translate(-50%, -50%);
		}
		50% {
			transform: translate(-50%, -60%);
		}
		100% {
			transform: translate(-50%, -50%);
		}
	}
	.rainy:after {
		content: "";
		position: absolute;
		top:50%;
		left: 25%;
		width: 4px;
		height: 14px;
		background: #fff;
		border-radius: 2px;
		box-shadow:
			#fff 25px -10px 0,
			#fff 50px 0 0,
			#fff 75px -10px 0,
			#fff 0 25px 0,
			#fff 25px 15px 0,
			#fff 50px 25px 0,
			#fff 75px 15px 0,
			#fff 0 50px 0,
			#fff 25px 40px 0,
			#fff 50px 50px 0,
			#fff 75px 40px 0;
		animation: rainDrop 2s linear infinite; 
	}
	@keyframes rainDrop {
		0% {
			transform: translate(0, 0) rotate(10deg);
		}
		100% {
			transform: translate(-4px, 24px) rotate(10deg);
			box-shadow:
			#fff 25px -10px 0,
			#fff 50px 0 0,
			#fff 75px -10px 0,
			#fff 0 25px 0,
			#fff 25px 15px 0,
			#fff 50px 25px 0,
			#fff 75px 15px 0,
			rgba(255, 255, 255, 0) 0 50px 0,
			rgba(255, 255, 255, 0) 25px 40px 0,
			rgba(255, 255, 255, 0) 50px 50px 0,
			rgba(255, 255, 255, 0) 75px 40px 0;
		}
	}
	.snowy:after {
		content: "";
		position: absolute;
		top:50%;
		left: 25%;
		width: 8px;
		height: 8px;
		background: #fff;
		border-radius: 50%;
		box-shadow:
			#fff 25px -10px 0,
			#fff 50px 0 0,
			#fff 75px -10px 0,
			#fff 0 25px 0,
			#fff 25px 15px 0,
			#fff 50px 25px 0,
			#fff 75px 15px 0,
			#fff 0 50px 0,
			#fff 25px 40px 0,
			#fff 50px 50px 0,
			#fff 75px 40px 0;
		animation: snowDrop 2s linear infinite; 
	}
	@keyframes snowDrop {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(25px);
			box-shadow:
			#fff 25px -10px 0,
			#fff 50px 0 0,
			#fff 75px -10px 0,
			#fff 0 25px 0,
			#fff 25px 15px 0,
			#fff 50px 25px 0,
			#fff 75px 15px 0,
			rgba(255, 255, 255, 0) 0 50px 0,
			rgba(255, 255, 255, 0) 25px 40px 0,
			rgba(255, 255, 255, 0) 50px 50px 0,
			rgba(255, 255, 255, 0) 75px 40px 0;
		}
	}
	</style>
	</html>


# HTML BOLB 
[HTTP BOLB API](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob)

BLOB - Binary Large Object 是处理大尺寸二进制字节数据的一种对象，在数据库系统如 MySQL 中就有，H5 也引入了 Blob 数据对象来处理文件数据，具体参考 [HTTP BOLB API]。使用 Blob 对象可以隐藏真实的资源路径，在一定程度上可以起到数据的加密性。日常使用的一些音频，视频，图片，我们都可以使用其 Blob 二进制数据流地址来替代静态文件 URI，只需要服务器到以下两点：

- 服务端返回的为资源的二进制数据
- 前端接收到二进制数据后，使用 URL.createObjectURL(blobData) 方法将服务端返回的二进制数据转换为 Blob 的 url 资源挂载到相应的资源对象。

实例，对 video.mp4 资源加密，不使用静态 url 进行加载，使用 blob url 进行加密。

服务端 index.php

	<?php
	// 返回 BOLB 二进制流数据
	$file_path = __DIR__ . '/video.mp4';
	$file_size = filesize($file_path);
	$oct_data = fread(fopen($file_path, "r"), $filesize);
	 
	header("Content-type: video/mpeg4;charset=UTF-8");
	header("Content-Length: " . $filesize);
	echo $oct_data;

前端 index.html

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Blob Url</title>
	</head>
	<body>
		<video id="video" width="400" controls="controls"></video>
		<script type="text/javascript">
			var xhr = new XMLHttpRequest();
			xhr.open('POST', '/index.php', true);
			xhr.responseType = 'blob'; //设置请求结果类型为 blob
			xhr.onload = function(e) {
				if (this.status == 200) {//请求成功
					var blob = this.response;
					//获取 Blob 对象地址，并把值赋给容器
					document.getElementById("video").src = URL.createObjectURL(blob);
				}
			};
			xhr.send();
		</script>
	</body>
	</html>

以上实列中视频资源静态地址就被服务端程序替代隐藏了，生产中很少会直接将一个大文件资源以完整的二进制流的方式返回给前端，因为服务端需要将相应的资源打开读取会消耗对应的内存，比如一个视频如果 50M，那我们服务端返回其二进制数据时就要将文件载入，消耗 50M 的服务器内存然后返回给前端，这代价略大。通常对视频文件的做法是进行切片使用 m3u8 视频列表处理，其实并不是为了加密，因为浏览器还是会解析 blob 并去 get 请求对应的 m3u8 列表文件地址。

HLS - HTTP Live Streaming 是苹果公司移动设备而开发的流媒体解决方案。在 HLS 技术中 Web 服务器向客户端提供接近实时的音视频流，在普通的 HTTP 的应用上直接提供点播和直播。

该技术基本原理是将视频文件或视频流切分成小片 ts 文件并建立索引文件 m3u8。支持的视频流编码为 H.264，音频流编码为 AAC。

HLS 无需专门软件，普通的网络服务器即可，大大降低了 CDN 边缘服务器的配置要求，可以使用任何现成的 CDN。分发使用的协议是最常见 HTTP，代理服务器对这个协议的缓存优化相当成熟，而很少有代理服务器对 RTSP 的进行缓存优。

此外，HTTP Live Streaming 还有一个巨大优势：自适应码率流播（adaptive streaming）。效果就是客户端会根据网络状况自动选择不同码率的视频流，条件允许的情况下使用高码率，网络繁忙的时候使用低码率，并且自动在二者间随意切换。这对移动设备网络状况不稳定的情况下保障流畅播放非常有帮助。实现方法是服务器端提供多码率视频流，并且在列表文件中注明，播放器根据播放进度和下载速度自动调整。

例如 DPlayer 播放器的做法：
https://github.com/MoePlayer/DPlayer
https://www.cnblogs.com/tocy/p/using-ffmpeg-build-hls-live-system.html
https://www.jianshu.com/p/a30bb3afef10

	<script src="/static/hls.min.js"></script>
	<script src="/static/DPlayer.min.js"></script>
	<script type="text/javascript">
		var myVideo = new DPlayer({
		container: document.getElementById('myVideo'),
		screenshot: true,
		logo: '/logo.png',
		autoplay:false,
		video: {
			url: 'https://www.fhbf9.com/20200824/EdVBdoMg/index.m3u8',
			type: 'hls'
		}
	});
		myVideo.currentTime = function() {
		  return myVideo.video.currentTime;
		}
	</script>

	<video 
		webkit-playsinline="" 
		x-webkit-airplay="allow" 
		playsinline="" 
		crossorigin="anonymous" 
		preload="metadata" 
		src="blob:https://www.rbdy2020.com/8eec133c-7a8f-42cb-980f-4e1ae4ee0b9a">
	</video>


# Canvas
https://www.w3school.com.cn/html5/html_5_canvas.asp
https://www.w3school.com.cn/tags/tag_canvas.asp
https://html.spec.whatwg.org/#the-canvas-element

HTML5 的 canvas 元素使用 JavaScript 在网页上绘制图像。画布是一个矩形区域，您可以控制其每一像素。canvas 拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。

Internet Explorer 9+, Firefox, Opera, Chrome 以及 Safari 支持 <canvas> 标签。

注释：Internet Explorer 8 以及更早的版本不支持 <canvas> 标签。

canvas 元素所有的绘制工作必须在 JavaScript 内部完成：

<canvas id="myCanvas" width="200" height="100" style="border:1px solid #c3c3c3;">
Your browser does not support the canvas element.
</canvas>

<script type="text/javascript">
	var c = document.getElementById("myCanvas");
	var cxt = c.getContext("2d");
	cxt.fillStyle="#FF0000";
	cxt.fillRect(0,0,150,75);
</script>

JavaScript 使用 id 来寻找 canvas 元素，然后通过 getContext() 方法创建 context 绘图对象，getContext("2d") 就是获取 Canvas Contenxt 二维绘图对象，是内建的 HTML5 对象，拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。

绘图对象有一个参考坐标，上面的 fillRect(x1,y1,x2,y2) 方法意思是在画布上绘制 150x75 的矩形，从左上角开始为零点 (0,0)，两轴的正方向往右、下。

lineTo() 线条实例
通过指定从何处开始，在何处结束，来绘制一条线：

<script type="text/javascript">
	var c=document.getElementById("myCanvas");
	var cxt=c.getContext("2d");
	cxt.moveTo(10,10);
	cxt.lineTo(150,50);
	cxt.lineTo(10,50);
	cxt.stroke();
</script>

arc() 圆形实例
通过规定尺寸、颜色和位置，来绘制一个圆：

<script type="text/javascript">
	var c=document.getElementById("myCanvas");
	var cxt=c.getContext("2d");
	cxt.fillStyle="#FF0000";
	cxt.beginPath();
	cxt.arc(70,18,15,0,Math.PI*2,true);
	cxt.closePath();
	cxt.fill();
</script>

createLinearGradient() 渐变实例
使用您指定的颜色来绘制渐变背景：

Canvas 实例：渐变
JavaScript 代码：

<script type="text/javascript">
	var c=document.getElementById("myCanvas");
	var cxt=c.getContext("2d");
	var grd=cxt.createLinearGradient(0,0,175,50);
	grd.addColorStop(0,"#FF0000");
	grd.addColorStop(1,"#00FF00");
	cxt.fillStyle=grd;
	cxt.fillRect(0,0,175,50);
</script>

drawImage() 图像实例
把一幅图像放置到画布上：

<script type="text/javascript">
	var c=document.getElementById("myCanvas");
	var cxt=c.getContext("2d");
	var img=new Image()
	img.src="flower.png"
	cxt.drawImage(img,0,0);
</script>


drawImage() 方法还可以用来抓取播放中的视频图片:

<style type="text/css">
	.renderwrap video,
	.renderwrap img,
	.renderwrap .review { width:480px; border:1px solid white;}
</style>
<div class="renderwrap">
	<button onclick="getVideoImage(event)">render</button>
	<div class="review" id="poster"></div>
	<div contenteditable="true" id="renderbox"></div>
	<input type="file" name="" id="upload" onchange="getVideoImage(event)">
</div>

<script type="text/javascript">
function getVideoImage(e) {
	console.log(e)
	var obj_file = document.getElementById("upload");
	var file = obj_file.files[0];
	var blob = new Blob([file]),
		url = URL.createObjectURL(blob);
	if (file && /video/g.test(file.type)) {
		var $video = $('<video controls src="url"></video>'.replace("url", url));
		$('#renderbox').html($video);
		var video = $("video")[0];
		video.currentTime = 0.1;
		// video.autoplay = true;
		video.addEventListener("canplay", function(_event) {
			var canvas = document.createElement("canvas");
			canvas.width = video.videoWidth;
			canvas.height = video.videoHeight;
			console.log(video.videoWidth)
			canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
			var img = document.createElement("img");
			img.src = canvas.toDataURL("image/png");
			$("#poster").html(img);
			URL.revokeObjectURL(this.src);
			video.pause();
		});
	} else {
		alert("请上传一个视频文件！");
		obj_file.value = ""
	}
};
</script>




# Canvas toBlob to Formdata
https://github.com/blueimp/JavaScript-Canvas-to-Blob
https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/toBlob

Include the (minified) JavaScript Canvas to Blob script in your HTML markup:
	
	<script src="js/canvas-to-blob.min.js"></script>

Then use the canvas.toBlob() method in the same way as the native implementation:
	
	var canvas = document.createElement('canvas')
	/* ... your canvas manipulations ... */
	if (canvas.toBlob) {
	  canvas.toBlob(function(blob) {
		// Do something with the blob object,
		// e.g. creating a multipart form for file uploads:
		var formData = new FormData()
		formData.append('file', blob, fileName)
		/* ... */
	  }, 'image/jpeg')
	}

HTMLCanvasElement.toBlob() 方法创造 Blob 对象，用以展示 canvas 上的图片；这个图片文件可以被缓存或保存到本地，由用户代理端自行决定。如不特别指明，图片的类型默认为 image/png，分辨率为96dpi。

	canvas.toBlob(callback, type, encoderOptions);

参数
- callback 回调函数，可获得一个单独的Blob对象参数。
- type 可选 DOMString类型，指定图片格式，默认格式为image/png。
- encoderOptions 可选 Number类型，值在0与1之间，当请求图片格式为image/jpeg或者image/webp时用来指定图片展示质量。如果这个参数的值不在指定类型与范围之内，则使用默认值，其余参数将被忽略。

示例
将canvas图像转换为文件
当一个内容画到canvas上时，我们可以将它生成任何一个格式支持的图片文件。比如，下面的代码段获得了id为“canvas”的<canvas>元素中的图像，复制成一个PNG图，在文档中加入一个新的<img>元素，这个<img>元素的源图就是使用canvas创建的那个图像。 

	var canvas = document.getElementById("canvas");

	canvas.toBlob(function(blob) {
	  var newImg = document.createElement("img"),
		  url = URL.createObjectURL(blob);

	  newImg.onload = function() {
		// no longer need to read the blob so it's revoked
		URL.revokeObjectURL(url);
	  };

	  newImg.src = url;
	  document.body.appendChild(newImg);
	});

注意，我们这里创建的是PNG图片；如果在toBlob()传入第二个参数，就可以指定图片格式。例如，生成JPEG格式的图片：

	canvas.toBlob(function(blob){...}, "image/jpeg", 0.95); // JPEG at 95% quality

# FormData
https://developer.mozilla.org/zh-CN/docs/Web/API/formData

FormData 接口提供了一种表示表单数据的键值对的构造方式，经过它的数据可以使用 XMLHttpRequest.send() 方法送出，本接口和此方法都相当简单直接。如果送出时的编码类型被设为 "multipart/form-data"，它会使用和表单一样的格式。

如果你想构建一个简单的GET请求，并且通过 `<form>` 的形式带有查询参数，可以将它直接传递给URLSearchParams。

实现了 FormData 接口的对象可以直接在for...of结构中使用，而不需要调用entries() : for (var p of myFormData) 的作用和 for (var p of myFormData.entries()) 是相同的。

方法

- FormData.append()  向 FormData 中添加新的属性值，FormData 对应的属性值存在也不会覆盖原值，而是新增一个值，如果属性不存在则新增一项属性值。
- FormData.delete()  从 FormData 对象里面删除一个键值对。
- FormData.entries()  返回一个包含所有键值对的iterator对象。
- FormData.get()  返回在 FormData 对象中与给定键关联的第一个值。
- FormData.getAll()  返回一个包含 FormData 对象中与给定键关联的所有值的数组。
- FormData.has()  返回一个布尔值表明 FormData 对象是否包含某些键。
- FormData.keys()  返回一个包含所有键的iterator对象。
- FormData.set()  给 FormData 设置属性值，如果FormData 对应的属性值存在则覆盖原值，否则新增一项属性值。
- FormData.values()  返回一个包含所有值的iterator对象。

## FormData.append()

FormData.set 和 append() 的区别在于，如果指定的键已经存在， FormData.set 会使用新值覆盖已有的值，而 append() 会把新值添加到已有值集合的后面。

提示： 这个方法在 Web Workers 中可用。

语法
这个方法有两个版本：一个有两个参数的版本和一个有三个参数的版本。

	formData.append(name, value);
	formData.append(name, value, filename);

参数
- name value中包含的数据对应的表单名称。
- value 表单的值。可以是 USVString 或 Blob (包括子类型，如 File)。
- filename 可选 传给服务器的文件名称 (一个 USVString), 当一个 Blob 或 File 被作为第二个参数的时候， Blob 对象的默认文件名是 "blob"。 File 对象的默认文件名是该文件的名称。

注意： 如果你指定一个 Blob 作为数据添加到 FormData 对象中， 文件名会被放在 "Content-Disposition" 头部（常常会根据浏览器变化而变化）传给服务器。

下面的代码创建了一个空的 FormData 对象：

	var formData = new FormData(); // Currently empty

你可以通过 FormData.append 往对象里加入键值对：

	formData.append('username', 'Chris');
	formData.append('userpic', myFileInput.files[0], 'chris.jpg');

跟常规表单数据一样，你可以使用同一个名称添加多个值 。例如 (为了与PHP命名习惯一致在名称中添加了[])：

	formData.append('userpic[]', myFileInput1.files[0], 'chris1.jpg');
	formData.append('userpic[]', myFileInput2.files[0], 'chris2.jpg');

这项技术使得多文件上传的处理更加简单，因为所得数据结构更有利于循环。


# SpeechSynthesisUtterance

		let say = new window.SpeechSynthesisUtterance('Press space to play Pacman');
		window.speechSynthesis.speak(say);


# Video to Image

	function savePic(fileName) {
		var fileType = "png";  // 如果文件名中没有带后缀，默认使用png
		switch (fileName) {  // 判断保存的图片格式
			case fileName.indexOf("png") > -1:
				fileType = "png";
				break;
			case fileName.indexOf("jpg") > -1:
				fileType = "jpg";
				break;
		
			case fileName.indexOf("jpeg") > -1:
				fileType = "jpeg";
				break;
			case fileName.indexOf("bmp") > -1:
				fileType = "bmp";
				break;
			case fileName.indexOf("gif") > -1:
				fileType = "gif";
				break;
			default:
				fileType = "png";
				break;
			}
			var video = document.querySelector('#videoElementID');  // 找到需要截图的video标签
			var canvas = window.canvas = document.createElement("canvas");
			canvas.width = video.videoWidth;
			canvas.height = video.videoHeight; 
			canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);  // 图片大小和视频分辨率一致
			var strDataURL = canvas.toDataURL("image/" + fileType);   // canvas中video中取一帧图片并转成dataURL
			var arr = strDataURL.split(','),
				mime = arr[0].match(/:(.*?);/)[1],
				bstr = atob(arr[1]),
				n = bstr.length,
				u8arr = new Uint8Array(n);
			while (n--) {
				u8arr[n] = bstr.charCodeAt(n);
			}
			var blob = new Blob([u8arr], {
				type: mime
			});
			var url = window.URL.createObjectURL(blob);
			var a = document.createElement('a');  
			a.style.display = 'none';
			a.href = url;
			a.download = fileName;
			document.body.appendChild(a);
			a.click();
			setTimeout(function () {
				document.body.removeChild(a);
				window.URL.revokeObjectURL(url);
			}, 1000);
		
		}

	}


# canvas.toDataURL()

	var dataURI;

	var img = document.querySelector(".file-preview-image");

	var canvas = document.createElement('canvas');
	canvas.width = img.width;
	canvas.height = img.height;
	canvas.getContext('2d').drawImage(img, 0,0);
	dataURI = canvas.toDataURL();


# Video and Audio
- https://www.w3school.com.cn/tags/tag_video.asp
- https://www.w3school.com.cn/jsref/dom_obj_audio.asp
- https://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp
- https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLAudioElement

示范：

	<audio src="someaudio.wav">
	您的浏览器不支持 audio 标签。
	</audio>

	<audio controls="controls">  
	   <source src="music.ogg" /> 
	   <source src="music.mp3" /> 
	   <source src="music.wav" /> 
	</audio> 

	<video src="movie.ogg" controls="controls">
	您的浏览器不支持 video 标签。
	</video>

	<video controls poster="/images/w3school.gif" >
	   <source src="movie.mp4" type="video/mp4">
	   <source src="movie.ogg" type="video/ogg">
	   Your browser does not support the video tag.
	</video>

	属性        值           描述
	autoplay    autoplay    如果出现该属性，则视频在就绪后马上播放。
	controls    controls    如果出现该属性，则向用户显示控件，比如播放按钮。
	loop        loop        如果出现该属性，则当媒介文件完成播放后再次开始播放。
	muted       muted       规定视频的音频输出应该被静音。
	poster      URL         规定视频下载时显示的图像，或者在用户点击播放按钮前显示的图像。
	preload     preload     如果出现该属性，则视频在页面加载时进行加载，并预备播放。 如果使用 "autoplay"，则忽略该属性。
	src         url         要播放的视频的 URL。

	height      pixels      设置视频播放器的高度。
	width       pixels      设置视频播放器的宽度。

object-fit CSS 属性指定可替换元素的内容应该如何适应到其使用的高度和宽度确定的框。设置成fill平铺就可以了，代码如下：

	video{
		width:100%;
		height:100%;
		object-fit:fill;  
	}

参考网址 https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit


Audio/Video 编程对象

	Media = new Audio("http://www.abc.com/test.mp3");
	//audio和video都可以通过标签获取对象
	Media = document.getElementById("media");

HTML5 Audio/Video 方法
- addTextTrack()  向音频/视频添加新的文本轨道
- canPlayType()   检测浏览器是否能播放指定的音频/视频类型
- load()  重新加载音频/视频元素
- play()  开始播放音频/视频
- pause() 暂停当前播放的音频/视频

HTML5 Audio/Video 属性

- **audioTracks** 返回表示可用音轨的 AudioTrackList 对象
- **autoplay**    设置或返回是否在加载完成后随即播放音频/视频
- **buffered**    返回表示音频/视频已缓冲部分的 TimeRanges 对象
- **controller**  返回表示音频/视频当前媒体控制器的 MediaController 对象
- **controls**    设置或返回音频/视频是否显示控件（比如播放/暂停等）
- **crossOrigin** 设置或返回音频/视频的 CORS 设置
- **currentSrc**  返回当前音频/视频的 URL
- **currentTime** 设置或返回音频/视频中的当前播放位置（以秒计）
- **defaultMuted**    设置或返回音频/视频默认是否静音
- **defaultPlaybackRate** 设置或返回音频/视频的默认播放速度
- **duration**    返回当前音频/视频的长度（以秒计）
- **ended**   返回音频/视频的播放是否已结束
- **error**   返回表示音频/视频错误状态的 MediaError 对象
- **loop**    设置或返回音频/视频是否应在结束时重新播放
- **mediaGroup**  设置或返回音频/视频所属的组合（用于连接多个音频/视频元素）
- **muted**   设置或返回音频/视频是否静音
- **networkState**    返回音频/视频的当前网络状态
- **paused**  设置或返回音频/视频是否暂停
- **playbackRate**    设置或返回音频/视频播放的速度
- **played**  返回表示音频/视频已播放部分的 TimeRanges 对象
- **preload** 设置或返回音频/视频是否应该在页面加载后进行加载
- **readyState**  返回音频/视频当前的就绪状态
- **seekable**    返回表示音频/视频可寻址部分的 TimeRanges 对象
- **seeking** 返回用户是否正在音频/视频中进行查找
- **src** 设置或返回音频/视频元素的当前来源
- **startDate**   返回表示当前时间偏移的 Date 对象
- **textTracks**  返回表示可用文本轨道的 TextTrackList 对象
- **videoTracks** 返回表示可用视频轨道的 VideoTrackList 对象
- **volume**  设置或返回音频/视频的音量

HTML5 Audio/Video 事件

- **abort**   当音频/视频的加载已放弃时
- **canplay** 当浏览器可以播放音频/视频时
- **canplaythrough**  当浏览器可在不因缓冲而停顿的情况下进行播放时
- **durationchange**  当音频/视频的时长已更改时
- **emptied** 当目前的播放列表为空时
- **ended**   当目前的播放列表已结束时
- **error**   当在音频/视频加载期间发生错误时
- **loadeddata**  当浏览器已加载音频/视频的当前帧时
- **loadedmetadata**  当浏览器已加载音频/视频的元数据时
- **loadstart**   当浏览器开始查找音频/视频时
- **pause**   当音频/视频已暂停时
- **play**    当音频/视频已开始或不再暂停时
- **playing** 当音频/视频在已因缓冲而暂停或停止后已就绪时
- **progress**    当浏览器正在下载音频/视频时
- **ratechange**  当音频/视频的播放速度已更改时
- **seeked**  当用户已移动/跳跃到音频/视频中的新位置时
- **seeking** 当用户开始移动/跳跃到音频/视频中的新位置时
- **stalled** 当浏览器尝试获取媒体数据，但数据不可用时
- **suspend** 当浏览器刻意不获取媒体数据时
- **timeupdate**  当目前的播放位置已更改时
- **volumechange**    当音量已更改时
- **waiting** 当视频由于需要缓冲下一帧而停止


TimeRanges 对象   
表示音频/视频中的可寻址部分。

TimeRanges 对象的属性：

length - 获得音频/视频中可寻址范围的数量
start(index) - 获得可寻址范围的开始位置
end(index) - 获得可寻址范围的结束位置
注释：第一个可寻址范围的下标是 index 0。

	//TimeRanges(区域)对象
	TimeRanges.length;              //区域段数
	TimeRanges.start(index)         //第index段区域的开始位置
	TimeRanges.end(index)           //第index段区域的结束位置

事件

	Media = 
	eventTester = function(e){
	  Media.addEventListener(e,function(){
	   console.log((new Date()).getTime(),e);
	  });
	}
	eventTester("loadstart");       //客户端开始请求数据
	eventTester("progress");        //客户端正在请求数据
	eventTester("suspend");         //延迟下载
	eventTester("abort");           //客户端主动终止下载（不是因为错误引起），
	eventTester("error");           //请求数据时遇到错误
	eventTester("stalled");         //网速失速
	eventTester("play");            //play()和autoplay开始播放时触发
	eventTester("pause");           //pause()触发
	eventTester("loadedmetadata");  //成功获取资源长度
	eventTester("loadeddata");      //提示当前帧的数据是可用的
	eventTester("waiting");         //等待数据，并非错误
	eventTester("playing");         //开始回放
	eventTester("canplay");         //可以播放，但中途可能因为加载而暂停
	eventTester("canplaythrough");  //可以播放，歌曲全部加载完毕
	eventTester("seeking");         //寻找中
	eventTester("seeked");          //寻找完毕
	eventTester("timeupdate");      //播放时间改变
	eventTester("ended");           //播放结束
	eventTester("ratechange");      //播放速率改变
	eventTester("durationchange");  //资源长度改变
	eventTester("volumechange");    //音量改变


使用Video播放JS异步拉取的媒体流
http://chimee.org/docs/chimee_player_preface.html

直播行业的兴起，让更多的人了解了动态媒体流的存在，而WebRTC制定之初也主要是定位在多媒体实时通讯方向，这里面包含的MediaSource API让我们可以用JS创建动态媒体源，然后再通过任意异步方式往里 appendBuffer，实现不停的拉流播放。

	var video = document.querySelector('video');
	var mediaSource = new MediaSource(); 
	video.src = URL.createObjectURL(mediaSource);

	mediaSource.addEventListener('sourceopen', function() {
	  var sourceBuffer = mediaSource.addSourceBuffer('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
	  fetchAB('https://nickdesaulniers.github.io/netfix/demo/frag_bunny.mp4', function (buf) {
		sourceBuffer.addEventListener('updateend', function () {
		  mediaSource.endOfStream();
		  video.play();
		});
		sourceBuffer.appendBuffer(buf);
	  });
	});

	function fetchAB (url, cb) {
	  var xhr = new XMLHttpRequest();
	  xhr.open('get', url);
	  xhr.responseType = 'arraybuffer';
	  xhr.onload = function () { cb(xhr.response) };
	  xhr.send();
	};

前面我们在谈到原生Video支持的媒体格式类型时，了解到的M3U8动态切片格式是众多格式中适合直播流的媒体类型，但并不是所有浏览器都支持，而且眼下很多直播平台可能也还是在使用FLV比较多，但原生Video并不支持FLV，但是结合JS动态拉流、解码、编码、MediaSource API，也让WEB前端直接播放原生不支持的媒体格式成为了可能。


# Player

	<!doctype html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1 user-scalable=0"/>
		<link rel="shortcut icon" href="img/logo.png">
		<title>html5 audio音频播放</title>
		<style>
			*{ margin: 0; padding:0;}
			body{-webkit-tap-highlight-color: rgba(0,0,0,0); font-family: "微软雅黑"}
			h1{ width: 100%; font-size: 1.5em; text-align: center; line-height: 3em; color:#47c9af; }
			#audio{ width: 100%;}
			#control{ width: 150px; height: 150px; line-height: 150px; text-align: center; border-radius: 200px; border:none; color:#fff; margin-top: -75px; margin-left:-75px; left:50%; top:50%; position: absolute; box-shadow: #888 0 0 8px;}
			.color_gray{ background: #e4e4e4}
			.hide{ display: none;}
			.show{ display: block;}
			.play{ background:  #f06060;}
			.pause{ background:skyblue}
			/*进度条样式*/
			.progressBar{ width: 100%; height: 10px;margin: 30px auto 30px auto; position:absolute; left: 0; bottom: 35px;}
			.progressBar div{ position: absolute;}
			.progressBar .progressBac{ width: 100%; height: 10px;  left: 0; top:0; background: #e4e4e4;}
			.progressBar .speed{width: 100%; height: 10px; left: -100%; background: #f06060; }
			.progressBar .drag{ width: 30px; height: 30px; left: 0; top:-10px;  background: skyblue; opacity: 0.8; border-radius: 50px; box-shadow: #fff 0 0 5px;}
			/*时间样式*/
			#time{ width: 100%; height: 20px;position: absolute; left: 0; bottom:30px; color:#888;}
			.tiemDetail{ position: absolute; right:10px; top:0;}
			#songInfo{overflow: hidden; width: 200px; height:50px; line-height: 50px; text-align: center; color:#34495e;   margin-top: -25px; margin-left:-100px; left:50%; top:70%; position: absolute;}
			.shareImg{ position: absolute; left: 100000px;}
		</style>
	<script src="js/zepto.js"></script>
	</head>
		
	<body>
		<script>
	$(function() {
		getSong();
	})

	//获取歌曲链接并插入dom中
	function getSong() { 
		var audio = document.getElementById("audio");
		audio.src = "http://frontman.qiniudn.com/songnotime.mp3";
		audio.loop = true; //歌曲循环
		playCotrol(); //播放控制函数

	}

	//点击播放/暂停
	function clicks() {
		var audio = document.getElementById("audio");
		$("#control").click(function() {
			if ($("#control").hasClass("play")) {
				$("#control").addClass("pause").removeClass("play");
				audio.play();//开始播放
				dragMove();//并且滚动条开始滑动
				$("#control").html("暂停播放");
			} else {
				$("#control").addClass("play").removeClass("pause");
				$("#control").html("点击播放");
				audio.pause();
			}
		})
	}

	//播放时间
	function timeChange(time, timePlace) {//默认获取的时间是时间戳改成我们常见的时间格式
		var timePlace = document.getElementById(timePlace);
		//分钟
		var minute = time / 60;
		var minutes = parseInt(minute);
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		//秒
		var second = time % 60;
		seconds = parseInt(second);
		if (seconds < 10) {
			seconds = "0" + seconds;
		}
		var allTime = "" + minutes + "" + ":" + "" + seconds + ""
		timePlace.innerHTML = allTime;
	}

	//播放事件监听
	function playCotrol() {
		audio.addEventListener("loadeddata", //歌曲一经完整的加载完毕( 也可以写成上面提到的那些事件类型)
			function() {
				$("#control").addClass("play").removeClass("color_gray");
				$("#control").html("点击播放");
				addListenTouch(); //歌曲加载之后才可以拖动进度条
				var allTime = audio.duration;
				timeChange(allTime, "allTime");
				setInterval(function() {
					var currentTime = audio.currentTime;
					$("#time .currentTime").html(timeChange(currentTime, "currentTime"));
				}, 1000);
				clicks();
			}, false);

		audio.addEventListener("pause",
			function() { //监听暂停
				$("#control").addClass("play").removeClass("pause");
				$("#control").html("点击播放");
				if (audio.currentTime == audio.duration) {
					audio.stop();
					audio.currentTime = 0;
				}
			}, false);
		audio.addEventListener("play",
			function() { //监听暂停
				$("#control").addClass("pause").removeClass("play");
				$("#control").html("暂停播放");
				dragMove();
			}, false);
		audio.addEventListener("ended", function() {
			alert(0)
		}, false)
	}
		
	//进度条
	//这里我用的是事件实现进度拖动 如果不太熟悉touch的可以看下我之前写的一个小demo http://www.cnblogs.com/leinov/p/3701951.html
	 var startX, x, aboveX = 0; //触摸时的坐标 //滑动的距离  //设一个全局变量记录上一次内部块滑动的位置 

	//1拖动监听touch事件
	function addListenTouch() {
		document.getElementById("drag").addEventListener("touchstart", touchStart, false);
		document.getElementById("drag").addEventListener("touchmove", touchMove, false);
		document.getElementById("drag").addEventListener("touchend", touchEnd, false);
		var drag = document.getElementById("drag");
		var speed = document.getElementById("speed");
	}

	//touchstart,touchmove,touchend事件函数
	 function touchStart(e) {  
		 e.preventDefault();
		 var touch = e.touches[0];
		 startX = touch.pageX; 
	 }
	 function touchMove(e) { //滑动          
		 e.preventDefault();
		 var touch = e.touches[0];
		 x = touch.pageX - startX; //滑动的距离
		 //drag.style.webkitTransform = 'translate(' + 0+ 'px, ' + y + 'px)';  //也可以用css3的方式     
		 drag.style.left = aboveX + x + "px"; //  
		 speed.style.left = -((window.innerWidth) - (aboveX + x)) + "px";
	 }
	 function touchEnd(e) { //手指离开屏幕
		 e.preventDefault();
		 aboveX = parseInt(drag.style.left);
		 var touch = e.touches[0];
		 var dragPaddingLeft = drag.style.left;
		 var change = dragPaddingLeft.replace("px", "");
		 numDragpaddingLeft = parseInt(change);
		 var currentTime = (numDragpaddingLeft / (window.innerWidth - 30)) * audio.duration;//30是拖动圆圈的长度，减掉是为了让歌曲结束的时候不会跑到window以外
		 audio.currentTime = currentTime;
	 }
	//3拖动的滑动条前进
	function dragMove() {
		setInterval(function() {
			drag.style.left = (audio.currentTime / audio.duration) * (window.innerWidth - 30) + "px";
			speed.style.left = -((window.innerWidth) - (audio.currentTime / audio.duration) * (window.innerWidth - 30)) + "px";
		}, 500);
	}
	</script>

	<h1>html5 audio 音频播放demo</h1>

	<!--audiostart-->
	<audio id="audio" src=""  loop="loop" autoplay="autoplay" ></audio>
	<!--audio End-->



	<!--播放控制按钮start-->
	<button id="control" class="">loading</button>
	<!--播放控制按钮end-->

	<!--时间进度条块儿start-->
	<section class="progressBar">
		<div class="progressBac"></div>
		<div class="speed" id="speed"></div>
		<div class="drag" id="drag"></div>
	</section>
	<!--时间进度条块儿end-->

	<!--播放时间start-->
	<div id="time"><div class="tiemDetail"><span class="currentTime" id="currentTime">00:00</span>/<span class="allTime" id="allTime">00:00</span></div></div>
	<!--播放时间end-->
	<!--歌曲信息start-->
	<div id="songInfo">没时间-Leinov<div class="shareImg"><img src="img/html5audio.jpg" alt=""></div></div>
	<!--歌曲信息end-->
	</body>
	</html>

# fullscreen API 接口

fullscreenElement 该属性返回当前处于全屏模式的DOM元素。
fullscreenEnabled 该属性返回当前 document 是否进入了可以请求全屏模式的状态。

requestFullscreen() 请求进入全屏模式。
exitFullscreen() 退出全屏模式。

fullscreenchange 进入/退出全屏模式切换时会触发。
fullscreenerror 进入/退出全屏模式失败时会触发。

由于fullscreen API 存在浏览器兼容性问题，所以我们在使用的时候需要进行跨浏览器处理，参考代码：

跨浏览器返回正处于全屏的元素

	function fullscreenElement() {
		var fullscreenEle = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
		//注意：要在用户授权全屏后才能获取全屏的元素，否则 fullscreenEle为null
		console.log("全屏元素：" + fullscreenEle);
		return fullscreenEle;
	}

跨浏览器返回当前 document 是否进入了可以请求全屏模式的状态

	function fullscreenEnable() {
		var isFullscreen = document.fullscreenEnabled || window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled;
		//注意：要在用户授权全屏后才能准确获取当前的状态
		if (isFullscreen) {
			console.log('全屏模式');
		} else {
			console.log('非全屏模式');
		}
	}

跨浏览器发动全屏

	function launchFullScreen(element) {
		if (element.requestFullscreen) {
			element.requestFullscreen();
		} else if (element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		} else if (element.msRequestFullscreen) {
			element.msRequestFullscreen();
		} else if (element.webkitRequestFullscreen) {
			element.webkitRequestFullScreen();
		}
	}

跨浏览器退出全屏

	function exitFullscreen() {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.msExitFullscreen) {
			document.msExiFullscreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		}
	}

各浏览器 fullscreenchange 事件处理

	document.addEventListener('fullscreenchange', function(){ /*code*/ });
	document.addEventListener('webkitfullscreenchange', function(){ /*code*/});
	document.addEventListener('mozfullscreenchange', function(){ /*code*/});
	document.addEventListener('MSFullscreenChange', function(){ /*code*/});
 

各浏览器 fullscreenerror 事件处理

	document.addEventListener('fullscreenerror', function(){ /*code*/ });
	document.addEventListener('webkitfullscreenerror', function(){ /*code*/});
	document.addEventListener('mozfullscreenerror', function(){ /*code*/);
	document.addEventListener('MSFullscreenError', function(){ /*code*/ });


跨浏览器全屏模式下样式代码

	:-webkit-full-screen { }
	:-moz-full-screen { }
	:-ms-fullscreen { }
	:fullscreen { }


	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<title>Fullscreen</title>
			<style>
				section {
					float:left;
					margin:10px;
					width:260px;
					height:200px;
					font-size:24px;
					text-align:center;
					line-height:36px;
					border:1px solid gray;
					overflow:hidden;
				}
				section div,img,canvas,video,button {
					display:block;
					margin:auto;
					width:100%;
					cursor:pointer;
				}
				div {
					min-height:156px;
					line-height:156px;
					color:white;
					font-weight:bold;
					background-color:#FF00E3;
				}
				canvas {
					background-color:blue;
				}
				video {
					background-color:#666;
				}
				button {
					min-height:156px;
					line-height:156px;
					color:white;
					font-size:24px;
					font-weight:bold;
					background-color:#0AAF00;
				}

			</style>
		</head>
	<body>

	<section>
		<div id="div">div 点我全屏给你看哦</div>DIV全屏
	</section>

	<section>
		<img id="img" src="http://www.jq22.com/img/cs/500x300-1.png">图片全屏
	</section>

	<section>
		<canvas id="canvas"></canvas>canvas全屏
	</section>

	<section>
		<video id="video" src="http://jq22.qiniudn.com/jq22com.webm" controls=""></video>视频全屏
	</section>

	<section>
		<button id="button">button点我全屏</button>按扭全屏
	</section>

	</body>
		<script>
	window.onload = function() {

		//打开全屏方法
		function openFullscreen(element) {
			if (element.requestFullscreen) {
				element.requestFullscreen();
			} else if (element.mozRequestFullScreen) {
				element.mozRequestFullScreen();
			} else if (element.msRequestFullscreen) {
				element.msRequestFullscreen();
			} else if (element.webkitRequestFullscreen) {
				element.webkitRequestFullScreen();
			}
		}

		//退出全屏方法
		function exitFullScreen() {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.msExitFullscreen) {
				document.msExiFullscreen();
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();

			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			}
		}

		//div全屏(全屏方法1)
		document.getElementById("div").addEventListener('click', function() {
			openFullscreen(this); //调用上面全屏方法1
		}, false);

		//img全屏
		document.getElementById("img").addEventListener('click', function() {
			alert('请下载相应的html, css, js代码在本地运行看效果！');
			//全屏方法2
			var RFSN = document.documentElement.requestFullScreen || document.documentElement.webkitRequestFullScreen || document.documentElement.mozRequestFullScreen || document.documentElement.msRequestFullScreen;
			if (RFSN) {
				RFSN.call(this);
			} else if (typeof window.ActiveXObject != "undefined") {
				var wscript = new ActiveXObject("WScript.Shell");
				if (wscript != null) {
					wscript.SendKeys("{F11}");
				}
			}
		}, false);

		//canvas全屏
		document.getElementById("canvas").addEventListener('click', function() {
			openFullscreen(this);
		}, false);


		//视频全屏
		document.getElementById("video").addEventListener('click', function() {
			alert('请下载相应的html, css, js代码在本地运行看效果！');
			openFullscreen(this);
		}, false);

		//按扭全屏
		document.getElementById("button").addEventListener('click', function() {
			openFullscreen(this);
		}, false);




		//canvas动画
		var canvas = document.getElementById('canvas'), //获取canvas元素
			context = canvas.getContext('2d'), //获取画图环境，指明为2d
			centerX = canvas.width / 2, //Canvas中心点x轴坐标
			centerY = canvas.height / 2, //Canvas中心点y轴坐标
			rad = Math.PI * 2 / 100, //将360度分成100份，那么每一份就是rad度
			speed = 0.1; //加载的快慢就靠它了 

		//绘制蓝色外圈
		function blueCircle(n) {
			context.save();
			context.strokeStyle = "#fff"; //设置描边样式
			context.lineWidth = 5; //设置线宽
			context.beginPath(); //路径开始
			context.arc(centerX, centerY, 100, -Math.PI / 2, -Math.PI / 2 + n * rad, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
			context.stroke(); //绘制
			context.closePath(); //路径结束
			context.restore();
		}

		//绘制白色外圈
		function whiteCircle() {
			context.save();
			context.beginPath();
			context.strokeStyle = "white";
			context.arc(centerX, centerY, 100, 0, Math.PI * 2, false);
			context.stroke();
			context.closePath();
			context.restore();
		}

		//百分比文字绘制
		function text(n) {
			context.save(); //save和restore可以保证样式属性只运用于该段canvas元素
			context.strokeStyle = "#fff"; //设置描边样式
			context.font = "40px Arial"; //设置字体大小和字体
			//绘制字体，并且指定位置
			context.strokeText(n.toFixed(0) + "%", centerX - 25, centerY + 10);
			context.stroke(); //执行绘制
			context.restore();
		}

		//动画循环
		(function drawFrame() {
			window.requestAnimationFrame(drawFrame, canvas);
			context.clearRect(0, 0, canvas.width, canvas.height);
			whiteCircle();
			text(speed);
			blueCircle(speed);
			if (speed > 100) speed = 0;
			speed += 0.1;
		}());

	}
		</script>
	</html>


# iceWorks 响应式布局网格方案
[IceWorks响应式方案](https://github.com/alibaba/ice/wiki/响应式方案)
[IceWorks Grid 组件网格系统](https://ice.work/component/grid)
[enquire.js - Awesome Media Queries in JavaScript](https://github.com/WickyNilliams/enquire.js)
[Testing media queries programmatically](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries)
[MediaQueryList](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList)

在 ICE 物料中，响应式设计主要分为 Layout 和 Block 两部分，两者区分开来；Block 的响应式不依赖于 Layout 的相关配置和样式，这样设计的目的主要是解耦和可扩展性，保证区块不仅仅适用于 ICE 提供的 Layout，也可以是自定义的 Layout；

响应式断点阈值与 ICE Grid 的栅格系统基本保持一致，但稍有删减，主要分 xss、s、l 三种场景做适配：

	xss  320px
	  s  720px
	  l  1200px

使用 CSS3 @media 规则：

	@media screen and (min-width: 1200px) {

	}

	@media screen and (min-width: 721px) and (max-width: 1199px) {
	  
	}

	@media screen and (max-width: 720px) {
	  
	}

使用纯 JavaScript 实现的 CSS 媒体查询库 enquire.js 来监听当前屏幕分辨率的变化，大致用法如下：

	  import { enquire } from 'enquire-js';

	  state = {
		isMobile: false
	  }

	  componentDidMount() {
		this.enquireScreenRegister();
	  }

	  /**
	   * 注册监听屏幕的变化，可根据不同分辨率做对应的处理
	   */
	  enquireScreenRegister = () => {
		const mediaCondition = 'only screen and (max-width: 720px)';

		enquireScreen((mobile) => {
		  this.setState({
			isMobile: mobile,
		  });
		}, mediaCondition);
	  };

直接在页面引入 CDN：

	<script src="https://cdn.bootcss.com/enquire.js/2.1.6/enquire.min.js"> </script>
	<script>
	  enquire.register("screen and (max-width:1000px)", {
		 match : function() {
		  console.log("match max-width:1000px")
		 },      // OPTIONAL
		 // If supplied, triggered when the media query transitions
		 // *from an unmatched to a matched state*

		 unmatch : function() {
		  console.log("unmatch max-width:1000px")
		 },    // OPTIONAL
		 // If supplied, triggered when the media query transitions
		 // *from a matched state to an unmatched state*.
		 // Also may be called when handler is unregistered (if destroy is not available)

		 setup : function() {
		  console.log("setup max-width:1000px")
		 },      // OPTIONAL
		 // If supplied, triggered once immediately upon registration of the handler

		 destroy : function() {
		  console.log("setup max-width:1000px")
		 },    // OPTIONAL
		 // If supplied, triggered when handler is unregistered. Place cleanup code here

		 deferSetup : true           // OPTIONAL, defaults to false
		 // If set to true, defers execution the setup function
		 // until the media query is first matched. still triggered just once
	  });
	  enquire.register("screen and (max-width:320px)", {
		 match : function() {
		  console.log("match max-width:320px")
		 },
		 unmatch : function() {
		  console.log("unmatch max-width:320px")
		 },
		 setup : function() {
		  console.log("setup max-width:320px")
		 },
		 destroy : function() {
		  console.log("setup max-width:320px")
		 },
		 deferSetup : true
	  });
	</script>

Grid 组件的栅格系统提供了320，480，720, 990，1200，1500等几乎所有主流分辨率场景的响应规则。 响应式栅格采用24列栅格体系和5分比实现，以满足2，3，4，5，6分比布局等多种情况。

固定栅格采用 20px 宽度作为单位栅格，推荐使用 9，10，12，14，16，18，24，但同时也提供了从1到30的所有栅格，也可根据需求定制固定栅格列。

响应式断点阈值为：

	xxs	>=320px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象	String/Number/Object	-
	xs	>=480px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象	String/Number/Object	-
	s	>=720px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象	String/Number/Object	-
	m	>=990px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象	String/Number/Object	-
	l	>=1200px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象	String/Number/Object	-
	xl	>=1500px，响应式栅格，可为栅格数（span）或一个包含栅格数（span）和偏移栅格数（offset）对象

设置组件属性：

	<IceContainer className={styles.container}>
	  <Row wrap>
		<Col xxs="24" s="12" l="6" className={styles.item}>
		  <div className={styles.count}>￥ 146,657</div>
		</Col>
		<Col xxs="24" s="12" l="6" className={styles.item}>
		  <div className={styles.count}>92%</div>
		</Col>
	  </Row>
	</IceContainer>


# flexable
- [Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- [A Visual Guide to CSS3 Flexbox Properties](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)
- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [flex布局使用在overflow: auto容器内时，溢出部分被修剪的解决办法](https://segmentfault.com/q/1010000013475438/a-1020000013477897)
- Flexbox 游乐场 https://codepen.io/enxaneta/pen/adLPwv
- https://developer.mozilla.org/zh-cn/docs/web/css/place-content
- CSS Flexible Box Layout https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout
- Box alignment in grid layout https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Grid_Layout
- http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html
- https://developer.mozilla.org/en-US/docs/Glossary/Main_Axis

Flexbox 游乐场这个作品中，作者为大家展示了 Flex 容器属性与项目属性的应用，交互地学习 Web 的 Flexbox 布局技术。UI 控件的设计做得不错，拖动可以调整数值，点击可以设置预配置属性。

Flex 布局涉及容器和子项设置，容器设置为 Flex 布局后，其子项就是 Flex 布局的子元素，有相应的属性设置。

以下6个属性设置在容器上。

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

以下 6 个属性设置在项目上。

- order
- flex-grow
- flex-shrink
- flex-basis
- flex
- align-self

列如，一个风格样式定义，父元素设置 grid 样式，其内部元素设置不同的列样式占据不同的格子宽度：

	.grid {
	    display: flex;
	    flex-direction: row;
	    flex-wrap: wrap;
	}
	.col11 { width:100% !important; flex-grow: 1; flex-shrink: 1; }
	.col12 { width: 50% !important; flex-grow: 1; flex-shrink: 1; }
	.col13 { width: 33% !important; flex-grow: 1; flex-shrink: 1; }
	.col23 { width: 66% !important; flex-grow: 1; flex-shrink: 1; }
	.col14 { width: 25% !important; flex-grow: 1; flex-shrink: 1; }
	.col34 { width: 75% !important; flex-grow: 1; flex-shrink: 1; }
	.col15 { width: 20% !important; flex-grow: 1; flex-shrink: 1; }
	.col25 { width: 40% !important; flex-grow: 1; flex-shrink: 1; }
	.col35 { width: 60% !important; flex-grow: 1; flex-shrink: 1; }
	.col45 { width: 80% !important; flex-grow: 1; flex-shrink: 1; }
	.col16 { width: 16% !important; flex-grow: 1; flex-shrink: 1; }
	.col56 { width: 83% !important; flex-grow: 1; flex-shrink: 1; }
	.col17 { width: calc((1 / 7) * 100%) !important; flex-grow: 1; flex-shrink: 1; }
	.col27 { width: calc((2 / 7) * 100%) !important; flex-grow: 1; flex-shrink: 1; }
	.col37 { width: calc((3 / 7) * 100%) !important; flex-grow: 1; flex-shrink: 1; }
	.col47 { width: calc((4 / 7) * 100%) !important; flex-grow: 1; flex-shrink: 1; }
	.col57 { width: calc((5 / 7) * 100%) !important; flex-grow: 1; flex-shrink: 1; }
	.col67 { width: calc((6 / 7) * 100%) !important; flex-grow: 1; flex-shrink: 1; }
	.col18 { width: calc((1 / 8) * 100%) !important; flex-grow: 1; flex-shrink: 1; }
	.col38 { width: calc((3 / 8) * 100%) !important; flex-grow: 1; flex-shrink: 1; }
	.col58 { width: calc((5 / 8) * 100%) !important; flex-grow: 1; flex-shrink: 1; }
	.col58 { width: calc((5 / 8) * 100%) !important; flex-grow: 1; flex-shrink: 1; }
	.col78 { width: calc((7 / 8) * 100%) !important; flex-grow: 1; flex-shrink: 1; }
	.col19 { width: calc((1 / 9) * 100%) !important; flex-grow: 1; flex-shrink: 1; }
	.col29 { width: calc((2 / 9) * 100%) !important; flex-grow: 1; flex-shrink: 1; }
	.col39 { width: calc((3 / 9) * 100%) !important; flex-grow: 1; flex-shrink: 1; }
	.col49 { width: calc((4 / 9) * 100%) !important; flex-grow: 1; flex-shrink: 1; }
	.col59 { width: calc((5 / 9) * 100%) !important; flex-grow: 1; flex-shrink: 1; }
	.col69 { width: calc((6 / 9) * 100%) !important; flex-grow: 1; flex-shrink: 1; }
	.col79 { width: calc((7 / 9) * 100%) !important; flex-grow: 1; flex-shrink: 1; }
	.col89 { width: calc((8 / 9) * 100%) !important; flex-grow: 1; flex-shrink: 1; }


浏览器支持：

	Chrome 29+
	Firefox 28+
	Internet Explorer 11+
	Opera 17+
	Safari 6.1+ (prefixed with -webkit-)
	Android 4.4+
	iOS 7.1+ (prefixed with -webkit-)

## SCSS 语法

	@mixin flexbox() {
	  display: -moz-box; /*firefox*/
	  display: -ms-flexbox; /*IE10*/
	  display: -webkit-box; /*Safari*/
	  display: -webkit-flex; /*Chrome*/
	  display: flex;
	}

	@mixin flex($values) {
	  -webkit-box-flex: $values;
	  -moz-box-flex:  $values;
	  -webkit-flex:  $values;
	  -ms-flex:  $values;
	  flex:  $values;
	}

	@mixin order($val) {
	  -webkit-box-ordinal-group: $val;  
	  -moz-box-ordinal-group: $val;     
	  -ms-flex-order: $val;     
	  -webkit-order: $val;  
	  order: $val;
	}

	.wrapper {
	  @include flexbox();
	}

	.item {
	  @include flex(1 200px);
	  @include order(2);
	}

## flex 容器设置

	.flex-container {
	  display: -webkit-flex; /_ Safari _/
	  display: flex;
	}

	.flex-container {
	  display: -webkit-inline-flex; /_ Safari _/
	  display: inline-flex;
	}

## flex-direction:row|row-reverse|column|column-reverse

	.flex-container {
	  -webkit-flex-direction: row; /_ Safari _/
	  flex-direction:         row;
	}

	.flex-container {
	  -webkit-flex-direction: row-reverse; /_ Safari _/
	  flex-direction:         row-reverse;
	}


	.flex-container {
	  -webkit-flex-direction: column; /_ Safari _/
	  flex-direction:         column;
	}

	.flex-container {
	  -webkit-flex-direction: column-reverse; /_ Safari _/
	  flex-direction:         column-reverse;
	}

	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;


## flex-wrap:wrap|nowrap

	.flex-container {
	  -webkit-flex-wrap: nowrap; /_ Safari _/
	  flex-wrap:         nowrap;
	}

	.flex-container {
	  -webkit-flex-wrap: wrap; /_ Safari _/
	  flex-wrap:         wrap;
	}

	.flex-container {
	  -webkit-flex-wrap: wrap-reverse; /_ Safari _/
	  flex-wrap:         wrap-reverse;
	}


## justify-content:flex-start|flex-end|center|space-between|space-around

	.flex-container {
	  -webkit-justify-content: flex-start; /_ Safari _/
	  justify-content:         flex-start;
	}

	.flex-container {
	  -webkit-justify-content: flex-end; /_ Safari _/
	  justify-content:         flex-end;
	}

	.flex-container {
	  -webkit-justify-content: center; /_ Safari _/
	  justify-content:         center;
	}

	.flex-container {
	  -webkit-justify-content: space-between; /_ Safari _/
	  justify-content:         space-between;
	}

	.flex-container {
	  -webkit-justify-content: space-around; /_ Safari _/
	  justify-content:         space-around;
	}

## align-items:stretch|flex-start|flex-end|center|baseline

	.flex-container {
	  -webkit-align-items: stretch; /_ Safari _/
	  align-items:         stretch;
	}

	.flex-container {
	  -webkit-align-items: flex-start; /_ Safari _/
	  align-items:         flex-start;
	}

	.flex-container {
	  -webkit-align-items: flex-end; /_ Safari _/
	  align-items:         flex-end;
	}

	.flex-container {
	  -webkit-align-items: center; /_ Safari _/
	  align-items:         center;
	}

	.flex-container {
	  -webkit-align-items: baseline; /_ Safari _/
	  align-items:         baseline;
	}


## align-content

可选值 stretch|flex-start|flex-end|center|space-between|space-around

	.flex-container {
	  -webkit-align-content: stretch; /_ Safari _/
	  align-content:         stretch;
	}

	.flex-container {
	  -webkit-align-content: flex-start; /_ Safari _/
	  align-content:         flex-start;
	}

	.flex-container {
	  -webkit-align-content: flex-end; /_ Safari _/
	  align-content:         flex-end;
	}

	.flex-container {
	  -webkit-align-content: center; /_ Safari _/
	  align-content:         center;
	}

	.flex-container {
	  -webkit-align-content: space-between; /_ Safari _/
	  align-content:         space-between;
	}

	.flex-container {
	  -webkit-align-content: space-around; /_ Safari _/
	  align-content:         space-around;
	}

## Flexbox item properties

## flexorder:0

	.flex-item {
	  -webkit-order: ; /_ Safari _/
	  order:         ;
	}

## flex-grow:0

	.flex-item {
	  -webkit-flex-grow: ; /_ Safari _/
	  flex-grow:         ;
	}

## flex-shrink:1

	.flex-item {
	  -webkit-flex-shrink: ; /_ Safari _/
	  flex-shrink:         ;
	}

## flex-basis:auto

flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

	.flex-item {
	  -webkit-flex-basis: auto | ; /_ Safari _/
	  flex-basis:         auto | ;
	}

## flex:0 1 auto 子项总体设置

This property is the shorthand for the flex-grow, flex-shrink and flex-basis properties. 

	.flex-item {
	  -webkit-flex: none | auto | [  ? ||  ]; /_ Safari _/
	  flex:         none | auto | [  ? ||  ];
	}

flex-basis 用于设置子项的占用空间。如果设置了值，则子项占用的空间为设置的值；如果没设置或者为 auto，那子项的空间为 width/height 的值。

flex-grow 用来设置瓜分父项的剩余空间的比列，值越大分的空间越大。

flex-shrink 用来吸收超出的空间，设置为 0 时不参与空间分配。

1、剩余空间＝父容器空间－子容器 1.flex-basis/width - 子容器 2.flex-basis/width - … 
2、如果父容器空间不够，就走压缩flex-shrink，否则走扩张flex-grow； 
3、如果你不希望某个容器在任何时候都不被压缩，那设置flex-shrink:0； 
4、如果子容器的的flex-basis设置为0(width也可以，不过flex-basis更符合语义)，那么计算剩余空间的时候将不会为子容器预留空间。 
5、如果子容器的的flex-basis设置为auto(width也可以，不过flex-basis更符合语义)，那么计算剩余空间的时候将会根据子容器内容的多少来预留空间。

当 flex 布局使用了 justify-content: center; 时，外围容器 overflow: auto; 会修剪x轴左溢出或修剪y轴上溢出，需要注意内容的尺度范围。对于在正常文档中子元素，width=auto 时，只能达到父元素宽度的 100%。即使是 flex 也如此。当你把元素抽离文档流时 position=absolute 时，它的宽素就不会收到父元素的宽度限制。

## align-self:auto

	.flex-item {
	  -webkit-align-self: auto | flex-start | flex-end | center | baseline | stretch; /_ Safari _/
	  align-self:         auto | flex-start | flex-end | center | baseline | stretch;
	}



## flex ref

	/* 子元素-平均分栏 */
	.flex1 {
		-webkit-box-flex: 1;      /* OLD - iOS 6-, Safari 3.1-6 */
		-moz-box-flex: 1;         /* OLD - Firefox 19- */
		width: 20%;               /* For old syntax, otherwise collapses. */
		-webkit-flex: 1;          /* Chrome */
		-ms-flex: 1;              /* IE 10 */
		flex: 1;                  /* NEW, Spec - Opera 12.1, Firefox 20+ */
	}
	/* 父元素-横向排列（主轴） */
	.flex-h {
		display: box;              /* OLD - Android 4.4- */

		display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
		display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
		display: -ms-flexbox;      /* TWEENER - IE 10 */
		display: -webkit-flex;     /* NEW - Chrome */
		display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */


		/* 09版 */
		-webkit-box-orient: horizontal;
		/* 12版 */
		-webkit-flex-direction: row;
		-moz-flex-direction: row;
		-ms-flex-direction: row;
		-o-flex-direction: row;
		flex-direction: row;
	}
	/* 父元素-横向换行 */
	.flex-hw {
		/* 09版 */
		/*-webkit-box-lines: multiple;*/
		/* 12版 */
		-webkit-flex-wrap: wrap;
		-moz-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		-o-flex-wrap: wrap;
		flex-wrap: wrap;
	}
	/* 父元素-水平居中（主轴是横向才生效） */
	.flex-hc {
		/* 09版 */
		-webkit-box-pack: center;
		/* 12版 */
		-webkit-justify-content: center;
		-moz-justify-content: center;
		-ms-justify-content: center;
		-o-justify-content: center;
		justify-content: center;
		/* 其它取值如下：
			align-items     主轴原点方向对齐
			flex-end        主轴延伸方向对齐
			space-between   等间距排列，首尾不留白
			space-around    等间距排列，首尾留白
		 */
	}
	/* 父元素-纵向排列（主轴） */
	.flex-v {
		display: box;              /* OLD - Android 4.4- */

		display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
		display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
		display: -ms-flexbox;      /* TWEENER - IE 10 */
		display: -webkit-flex;     /* NEW - Chrome */
		display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */


		/* 09版 */
		-webkit-box-orient: vertical;
		/* 12版 */
		-webkit-flex-direction: column;
		-moz-flex-direction: column;
		-ms-flex-direction: column;
		-o-flex-direction: column;
		flex-direction: column;
	}
	/* 父元素-纵向换行 */
	.flex-vw {
		/* 09版 */
		/*-webkit-box-lines: multiple;*/
		/* 12版 */
		-webkit-flex-wrap: wrap;
		-moz-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		-o-flex-wrap: wrap;
		flex-wrap: wrap;
	}
	/* 父元素-竖直居中（主轴是横向才生效） */
	.flex-vc {
		/* 09版 */
		-webkit-box-align: center;
		/* 12版 */
		-webkit-align-items: center;
		-moz-align-items: center;
		-ms-align-items: center;
		-o-align-items: center;
		align-items: center;
	}
	/* 子元素-显示在从左向右（从上向下）第1个位置，用于改变源文档顺序显示 */
	.flex-1 {
		-webkit-box-ordinal-group: 1;   /* OLD - iOS 6-, Safari 3.1-6 */
		-moz-box-ordinal-group: 1;      /* OLD - Firefox 19- */
		-ms-flex-order: 1;              /* TWEENER - IE 10 */
		-webkit-order: 1;               /* NEW - Chrome */
		order: 1;                       /* NEW, Spec - Opera 12.1, Firefox 20+ */
	}
	/* 子元素-显示在从左向右（从上向下）第2个位置，用于改变源文档顺序显示 */
	.flex-2 {
		-webkit-box-ordinal-group: 2;   /* OLD - iOS 6-, Safari 3.1-6 */
		-moz-box-ordinal-group: 2;      /* OLD - Firefox 19- */
		-ms-flex-order: 2;              /* TWEENER - IE 10 */
		-webkit-order: 2;               /* NEW - Chrome */
		order: 2;                       /* NEW, Spec - Opera 12.1, Firefox 20+ */
	}

# word-break word-wrap white-space overflow-wrap

white-space

用来控制空白字符的显示的，同时还能控制是否自动换行。

	normal 浏览器默认自动换行
	nowrap 强制不换行，换行符无效，</br>才能导致换行
	pre    空格和换行符全都被保留了下来！不过自动换行还是没了。保留 pre 是preserve的缩写
	pre-wrap 显然pre-wrap就是preserve+wrap，保留空格和换行符，且可以自动换行。
	pre-line 换行符有效，自动换行有效，所以pre-line其实

word-wrap 控制单词换行

	normal	只在允许的断字点换行（浏览器保持默认处理）。
	break-word	在长单词打断换行。

word-break 控制单词打断

	normal	使用浏览器默认的换行规则。
	break-all	允许在单词内换行。
	keep-all	只能在半角空格或连字符处换行。


# autocomplete="off" 对 password 无效

chrome浏览器对type="password"进行了识别，并把"密码"项进行了填充，并且把"密码"项前面input当成了"账号"项进行了填充。只需要在前面添加一个占位便签让chrome去处理，旧版的chrome可以使用隐藏属性 display:none 或 visibility:hidden，但新版chrome不可：

	<input type="password" style="font-size:0;border:0;"/>
	<label>
		<span>密码:</span>
		<input type="password" name=password" placeholder="请输入密码" autocomplete="off">
	</label>


# 剖析 CSS-Trick，为我所用_CSS 教程_w3cplus
https://css-tricks.com/
https://www.w3cplus.com/css/css-css-conf-5.html

最早通过 `<img>` 标签来引用图标（每个图标一个文件）。 为了节省请求，提出了Sprites的概念，即将多个图标合并在一起，使用一个图片文件，借助background相关的属性来实现图标。 图片毕竟是位图，面对多种设备终端，或者说更易于控制图标颜色和大小，开始在使用Icon Font来制作Web图标。 当然，字体图标是解决了不少问题，但每次针对不同的图标的使用，需要自定义字体，也要加载相应的字体文件，相应的也带了一定的问题，比如说跨域问题，字体加载问题。 随着SVG的支持力度越来越强，大家开始在思考SVG，使用SVG来制作图标。该技术能解决我们前面碰到的大部分问题，特别是在而对众多终端设备的时候，它的优势越发明显。 SVG和img有点类似，我们也可以借助 `<symbol>` 标签和 `<use>` 标签，将所有的SVG图标拼接在一起，有点类似于Sprites的技术，只不过在此称为SVG Sprites

CSS-Tricks网站也使用了该技术，该技术并不复杂，比如：

	<!-- HTML -->
	<svg width="0" height="0" display="none" xmlns="http://www.w3.org/2000/svg">
		<symbol id="half-circle" viewBox="0 0 106 57">...</symbol>
		<!-- .... -->
		<symbol id="icon-burger" viewBox="0 0 24 24">...</symbol>
	</svg>

SVG Sprites和img Sprites有所不同，SVG Sprites就是一些代码（类似于HTML一样），估计没有接触过的同学会问，SVG Sprites对应的代码怎么来获取呢？其实很简单，可以借助一些设计软件来完成，比如Sketch。当然也可以使用一些构建工具，比如说svg-sprite。有了这个之后，在该使用的地方，使用 `<use>` 标签，指定 `<symbol>` 中相应的id值即可，比如：

	<svg class="icon-nav-articles" width="26px" height="26px">
		<use xlink:href="#icon-nav-articles"></use>
	</svg>

使用SVG的图标还有一优势，我们可以在CSS中直接通过代码来控制图标的颜色：

	.site-header .main-nav .main-sections>li>a>svg {
		// ...
		fill: none;
		stroke-width: 2;
		stroke: #c2c2c2;
	}
	.site-header .main-nav:hover>ul>li:nth-child(1) svg {
		stroke: #ff8a00;
	}

# toggleFullScreen
https://developers.google.cn/web/fundamentals/native-hardware/fullscreen/

	function toggleFullscreen() {
	  var doc = window.document;
	  var docEl = doc.documentElement;

	  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
	  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

	  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
		requestFullScreen.call(docEl);
	  } else {
		cancelFullScreen.call(doc);
	  }
	}

# geolocation.getCurrentPosition
https://www.tutorialspoint.com/html5/geolocation_getcurrentposition.htm
https://www.tutorialspoint.com/html5/html5_quick_guide.htm

	navigator.geolocation.getCurrentPosition((res)=>{
		var latitude = res.coords.latitude;
		var longitude = res.coords.longitude;
		alert("getCurrentPosition Latitude : " + latitude + " Longitude: " + longitude);
	},(res)=>{
		if(res.code == 1) {
			alert("Error "+res.code +": Access is denied!");
		} else if( res.code == 2) {
			alert("Error "+res.code +": Position is unavailable!");
		}
	},{enableHighAccuracy:false,timeout:10*1000});


# Cammer Video
https://andrei.codes/ascii-camera/

	/*
		camera.js v1.1
		http://github.com/idevelop/camera.js

		Author: Andrei Gheorghe (http://idevelop.github.com)
		License: MIT
	*/

	var camera = (function() {
		var options;
		var video, canvas, context;
		var renderTimer;

		function initVideoStream() {
			video = document.createElement("video");
			video.setAttribute('width', options.width);
			video.setAttribute('height', options.height);
			video.setAttribute('playsinline', 'true');
			video.setAttribute('webkit-playsinline', 'true');

			navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
			window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

			if (navigator.getUserMedia) {
				navigator.getUserMedia({
					video: true,
					audio: false,
				}, function(stream) {
					options.onSuccess();

					if (video.mozSrcObject !== undefined) { // hack for Firefox < 19
						video.mozSrcObject = stream;
					} else {
						video.srcObject = stream;
					}

					initCanvas();
				}, options.onError);
			} else {
				options.onNotSupported();
			}
		}

		function initCanvas() {
			canvas = options.targetCanvas || document.createElement("canvas");
			canvas.setAttribute('width', options.width);
			canvas.setAttribute('height', options.height);

			context = canvas.getContext('2d');

			// mirror video
			if (options.mirror) {
				context.translate(canvas.width, 0);
				context.scale(-1, 1);
			}
		}

		function startCapture() {
			video.play();

			renderTimer = setInterval(function() {
				try {
					context.drawImage(video, 0, 0, video.width, video.height);
					options.onFrame(canvas);
				} catch (e) {
					// TODO
				}
			}, Math.round(1000 / options.fps));
		}

		function stopCapture() {
			pauseCapture();

			if (video.mozSrcObject !== undefined) {
				video.mozSrcObject = null;
			} else {
				video.srcObject = null;
			}
		}

		function pauseCapture() {
			if (renderTimer) clearInterval(renderTimer);
			video.pause();
		}

		return {
			init: function(captureOptions) {
				var doNothing = function(){};

				options = captureOptions || {};

				options.fps = options.fps || 30;
				options.width = options.width || 640;
				options.height = options.height || 480;
				options.mirror = options.mirror || false;
				options.targetCanvas = options.targetCanvas || null; // TODO: is the element actually a <canvas> ?

				options.onSuccess = options.onSuccess || doNothing;
				options.onError = options.onError || doNothing;
				options.onNotSupported = options.onNotSupported || doNothing;
				options.onFrame = options.onFrame || doNothing;

				initVideoStream();
			},

			start: startCapture,

			pause: pauseCapture,

			stop: stopCapture
		};
	})();



# WebRTC
- https://bloggeek.me/what-is-webrtc/
- https://www.tutorialspoint.com/html5/html5_web_rtc.htm
- https://www.html5rocks.com/en/tutorials/webrtc/basics/
- https://juejin.im/post/5c6f97e3e51d450dfc6f231e
- http://javascript.ruanyifeng.com/htmlapi/webrtc.html

示范：

	function gotStream(stream) {
	   window.AudioContext = window.AudioContext || window.webkitAudioContext;
	   var audioContext = new AudioContext();
	   
	   // Create an AudioNode from the stream
	   var mediaStreamSource = audioContext.createMediaStreamSource(stream);
	   
	   // Connect it to destination to hear yourself
	   // or any other node for processing!
	   mediaStreamSource.connect(audioContext.destination);
	}
	navigator.getUserMedia({audio:true}, gotStream);


	var signalingChannel = createSignalingChannel();
	var pc;
	var configuration = ...;

	// run start(true) to initiate a call
	function start(isCaller) {
	   pc = new RTCPeerConnection(configuration);
	   
	   // send any ice candidates to the other peer
	   pc.onicecandidate = function (evt) {
		  signalingChannel.send(JSON.stringify({ "candidate": evt.candidate }));
	   };
	   
	   // once remote stream arrives, show it in the remote video element
	   pc.onaddstream = function (evt) {
		  remoteView.src = URL.createObjectURL(evt.stream);
	   };
	   
	   // get the local stream, show it in the local video element and send it
	   navigator.getUserMedia({ "audio": true, "video": true }, function (stream) {
		  selfView.src = URL.createObjectURL(stream);
		  pc.addStream(stream);
		  
		  if (isCaller)
			 pc.createOffer(gotDescription);
		  
		  else
			 pc.createAnswer(pc.remoteDescription, gotDescription);
			 
			 function gotDescription(desc) {
				pc.setLocalDescription(desc);
				signalingChannel.send(JSON.stringify({ "sdp": desc }));
			 }
		  });
	   }
	   
	   signalingChannel.onmessage = function (evt) {
		  if (!pc)
			 start(false);
			 var signal = JSON.parse(evt.data);
		  
		  if (signal.sdp)
			 pc.setRemoteDescription(new RTCSessionDescription(signal.sdp));
		  
		  else
			 pc.addIceCandidate(new RTCIceCandidate(signal.candidate));
	};


# WebUsb
https://developers.google.cn/web/fundamentals/native-hardware/build-for-webusb/
https://github.com/sowbug/weblight
https://github.com/webusb/arduino
https://wicg.github.io/webusb/


# Add to Homescreen - PWA - Progressive Web Apps

https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Add_to_home_screen
https://developers.google.cn/web/fundamentals/app-install-banners/
https://vuejs.org/

script

	window.addEventListener('beforeinstallprompt', (e) => {
		e.preventDefault();
		e.prompt();
		deferredPrompt.userChoice.then((choiceResult) => {
			if (choiceResult.outcome === 'accepted') {
				console.log('User accepted the A2HS prompt');
			} else {
				console.log('User dismissed the A2HS prompt');
			}
			deferredPrompt = null;
		});
	});

metas

	<link rel="apple-touch-icon" sizes="57x57" href="/images/icons/apple-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="/images/icons/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="/images/icons/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="/images/icons/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="/images/icons/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="/images/icons/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="/images/icons/apple-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="/images/icons/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192" href="/images/icons/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="/images/icons/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png">
	<link rel="icon" href="/images/logo.png" type="image/png">

	<meta name="msapplication-TileColor" content="#4fc08d">
	<meta name="theme-color" content="#4fc08d">

	<meta name="msapplication-config" content="browserconfig.xml">
	<link rel="manifest" href="/manifest.json">

	<!-- Add to homescreen for Chrome on Android -->
	<meta name="mobile-web-app-capable" content="yes">
	<link rel="icon" sizes="196x196" href="images/touch/chrome-touch-icon-196x196.png">

	<!-- Tile icon for Win8 (144x144 + tile color) -->
	<!-- win 8 磁贴图标 -->
	<meta name="msapplication-TileImage" content="/images/icons/ms-icon-144x144.png">
	<meta name="msapplication-TileImage" content="images/touch/ms-touch-icon-144x144-precomposed.png">
	<!-- win 8 磁贴颜色 -->


browserconfig.xml

	<?xml version="1.0" encoding="utf-8"?>
	<browserconfig>
		<msapplication>
			<tile>
				<square70x70logo src="/images/icons/ms-icon-70x70.png" />
				<square150x150logo src="/images/icons/ms-icon-150x150.png" />
				<square310x310logo src="/images/icons/ms-icon-310x310.png" />
				<TileColor>#ffffff</TileColor>
			</tile>
		</msapplication>
	</browserconfig>


manifest.json

	{
		"background_color": "#ffffff",
		"description": "The Progressive JavaScript Framework",
		"display": "standalone",
		"icons": [{
			"src": "/images/icons/android-icon-36x36.png",
			"sizes": "36x36",
			"type": "image/png",
			"density": "0.75"
		}, {
			"src": "/images/icons/android-icon-48x48.png",
			"sizes": "48x48",
			"type": "image/png",
			"density": "1.0"
		}, {
			"src": "/images/icons/android-icon-72x72.png",
			"sizes": "72x72",
			"type": "image/png",
			"density": "1.5"
		}, {
			"src": "/images/icons/android-icon-96x96.png",
			"sizes": "96x96",
			"type": "image/png",
			"density": "2.0"
		}, {
			"src": "/images/icons/android-icon-144x144.png",
			"sizes": "144x144",
			"type": "image/png",
			"density": "3.0"
		}, {
			"src": "/images/icons/android-icon-192x192.png",
			"sizes": "192x192",
			"type": "image/png",
			"density": "4.0"
		}],
		"lang": "en-US",
		"name": "Vue.js",
		"short_name": "Vue",
		"start_url": "./menu",
		"theme_color": "#4fc08d"
	}


# affix
https://vue.ant.design/components/affix/


# File Upload
[Upload 上传组件设计思路 - 高扩展](https://zhuanlan.zhihu.com/p/56684600)

文件上传完后页面会刷新带来的体验问题

原生的文件上传都是通过form post 上传，上传完成后整个页面会重定向到 action 的地址。现在大家已经习惯了 ajax 做数据提交，因为可以不需要reload页面就可以带来整个页面的数据更新，无刷新更新的体验会提升很多。 我打算整片拆两个段来讲这个问题，拆分点大约从2012年附近开始，因为 html5 差不多在这个时间段开始被现代浏览器逐步支持。两个段分别叫传统解决方案和现代解决方案。

传统解决方案

UI 一致性问题

我们期望在任何浏览器下都是一个样式，比如一种样式的按钮，期望的UI

	<form action="/api/file" method="post">
	  <!-- input 设置为透明，覆盖在 button 上面 --->
	  <input type="file" style="opacity:0;position:absolute;zindex:9999;top:0;right:0;"/>
	  <button type="submit">Upload File</button>
	</form>

通过把 input 设置为透明覆盖在 button 按钮上面，让用户以为自己点击的是 button，其实点击的是 button 上面的 input。这样就可以做成用户点击button就能选择文件的“假象”。


点击 button 实际被定位到了 input

查找 button 其实定位到了 input。详细代码可以看这里： https://github.com/alibaba-fusion/next/blob/master/src/upload/runtime/iframe-uploader.jsx#L192

无刷新上传
我们期望选择完文件立刻执行上传，上传完成后直接在页面上展现上传状态


	<iframe name="uploadiframe" style="display:none"></iframe>
	<form action="/api/file" method="post" target="uploadiframe">
	  <input type="file" style="opacity: 0; position:absolute;zindex:9999;top:0;right:0;"/>
	  <button type="submit">Upload File</button>
	</form>

在提交的时候 form 通过 target 指定到对应的 iframe 去上传数据，让form 的数据通过隐藏的 iframe 来提交。

	const doc = this.refs.iframe.contentDocument; // 取 iframe
	const script = doc.getElementsByTagName('script')[0]; // 清除 iframe 内无用 script
	if (script && script.parentNode === doc.body) {
	  doc.body.removeChild(script);
	}
	const response = JSON.parse(doc.body.innerHTML); // 取返回内容解析成 JSON

因为 iframe 完成上传后页面会整体刷新，再通过监听 iframe 的 onLoad 事件获取返回的结果。关于获取返回内容如何再给主页面做反馈展示的代码可以看这里： 
https://github.com/alibaba-fusion/next/blob/master/src/upload/runtime/iframe-uploader.jsx#L73-L79


现代上传方案

html5 出来后，可以通过 input 可以直接拿到 File 文件对象，再把 File 封装到 FormData，通过 ajax 的形式提交到后端接口实现文件上传。

UI 一致性问题
不需要再把 input 盖在 button 上面，而是通过监听父节点的点击事件，在事件里面触发 input 的 click 方法。

我其实可以在 div 里面放的不仅仅是 button 了，可以是任何元素，这样我们就能做出任何形状的上传按钮。 下面列举几个例子 卡片状态

	<script>
	function selectFile() {
	  $('#inputfile').click(); //点击父节点的时候主动触发 input 的点击
	}
	function onSelect(target) {
	  console.log(target.files); // 获取文件对象  File
	}
	</script>
	<div role="upload" onclick="selectFile()">
	  <input type="file" style="display: none;" id="inputfile" onchange="onSelect(this)">
	  <button>Upload File</button>
	</div>

	<div role="upload">
	  <input type="file" style="display: none;">
	  <div class="selecter">
		  <i class="icon-add" />
		  <span> Upload File </span>
	  </div>
	</div>

我其实可以在 div 里面放的不仅仅是 button 了，可以是任何元素，这样我们就能做出任何形状的上传按钮。 下面列举几个例子 卡片状态



上传面板

	<div role="upload">
	  <input type="file" style="display: none;">
	  <div class="selecter">
		  <i class="icon-upload" />
		  <span class="title"> 点击或者拖动文件到虚线框内上传 </span>
		  <span class="desc"> 支持 docx, xls, PDF, rar, zip, PNG, JPG 等类型文件 </span>
	  </div>
	</div>

无刷新上传原理是把 File 对象封装到 FormData，再通过 ajax 的形式提交到后端接口。直接上代码：

	function upload(file) {
		const xhr = new XMLHttpRequest();

		// 上传进度
		xhr.upload.onprogress = function progress(e) {
		};
		// 上传状态
		xhr.onload = function onload() {
		};
	  
		const formData = new FormData();
		// 往 formData 里面增加要上传的文件对象
		formData.append('filename', file);

		// 指定 api 接口和上传方式
		xhr.open('POST', '/api/upload', true);
		// 开始发送数据
		xhr.send(formData);
	}

以上是把一个 file 对象加到 formData 中，再通过 XMLHttpRequest 把 formData 发送到指定的接口 /api/upload 的一个大致过程。详细代码可以查看这里 https://github.com/alibaba-fusion/next/blob/master/src/upload/runtime/request.jsx 我们现实中为了可能为了兼容 ie9 , 所以还需要封装一个 uploader，优先支持 html5 但是在 ie9 下自动切换为 iframe 方案。


# Expression

	height: expression(document.body.scrollHeight > document.body.offsetHeight ? document.body.scrollHeight : document.body.offsetHeight + 'px');

	margin: expression(0 - parseInt(this.offsetHeight / 2) + (TBWindowMargin = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop) + 'px');


# content counter(term) 内容生成
https://www.w3cplus.com/css3/css-generated-content-counters.html

CSS 内容生成 

	p:before { content: "Start"; }
	p:after { content: "End"; }

等价

	<p>
		<before>Start</before>
		Actual content
		<after>End</after>
	</p>

`content` 属性取值

`none`, normal The pseudo-content would not be generated.
`<string>` This would be a textual string enclosed in quotation marks.
`url()` This function enables us to insert an external resource (usually an image), as with the background-image property.
`counter()`, `counters()` These functions insert counters (see below for details).
`attr(attribute)` This function enables us to insert the value of attribute of a given element.
`open-quote`, `close-quote`, `no-open-quote`, `no-close-quote` These values automate the generation of quotation marks.


	p:before {
	   content: “( ” “0A7” “ )”;
	   padding-right: 0.2em;
	}

图片生成

	a:before {
	   content: url(link.png);
	   padding-right: 0.2em;
	}

属性值生成

	a[href]:after {
	   content: "( " attr(href) " )";
	   padding-left: 0.2em;
	   color: #000;
	   font: small "Courier New", Courier, monospace;
	}

counters计数器

	dl { counter-reset: term; }
	dt:before { counter-increment: term; content: counter(term); }

	dl { counter-reset: term -1; }
	dt:before { counter-increment: term 3; content: counter(term) ". "; }

	ol { counter-reset: item; list-style: none;  }
	li { display: block; }
	li:before { counter-increment: item;  content: counters(item, ".") " "; }

	dl { counter-reset: term definition; }
	dt:before { counter-increment: term; content: counter(term) ". "; }
	dd:before { counter-increment: definition; content: counter(term) "." counter(definition) " "; }

	li:before { counter-increment: item; content: counters(item, ".", lower-roman) " "; }

	dl {counter-reset: term definition; }
	dt:before {counter-increment: term; content: counter(term, upper-latin) ". "; } 
	dd:before {counter-increment: definition; content: counter(definition, lower-latin) ". "; }


counter(name, ‘list-style-type’) 指定序号样式

	decimal decimal-leading-zero lower-roman upper-roman lower-greek lower-latin upper-latin lower-alpha upper-alpha

三级目录序号

	.toc ul { counter-reset: item; list-style: none;  }
	.toc ul li:before { counter-increment: item;  content: counters(item, ".", upper-roman) " "; }
	.toc ul ul { counter-reset: itemsub; list-style: none;  }
	.toc ul ul li:before { counter-increment: itemsub;  content: counters(itemsub, ".", decimal-leading-zero) " "; }
	.toc ul ul ul { counter-reset: item3rd; list-style: none;  }
	.toc ul ul ul li:before { counter-increment: item3rd;  content: counters(item3rd, ".", lower-latin) " "; }
	

Firefox 兼容 counter-style，定义格式如下：
https://www.cnblogs.com/whqet/p/css_counter.html

	@counter-style counter名字{
		 system  : 算法;
		 range   : 使用范围;
		 symbols : 符号; or additive-symbols: 符号
		 prefix  : 前缀;
		 suffix  : 后缀;
		 pad     : 补零(eg. 01,02,03);
		 negative: 负数策略;
		 fallback: 出错后的默认值;
		 speakas : 语音策略;

	div:before {
	  color:white; text-shadow:1px 1px 5px blue;
	  counter-increment: item;
	  content: counters(item, ".", cjk-stem) " ";
	}
	@counter-style cjk-stem{
	system:alphabetic;
	symbols:"\7532" "\4E59" "\4E19" "\4E01" "\620A" "\5DF1" "\5E9A" "\8F9B" "\58EC" "\7678";/*甲 乙 丙 丁 戊 己 庚 辛 壬 癸*/
	suffix:"、";
	}


# clip 剪切与半圆


	<html>
	<head>
		<meta charset="UTF-8">
		<title>扇形绘制</title>
		<style>
			.sector{ position: relative; width: 200px; height: 200px; border-radius: 100px; background-color: yellow; }
			.sx1{
				position: absolute;
				width: 200px;
				height: 200px;
				transform: rotate(0deg);
				clip: rect(0px,100px,200px,0px);
				border-radius: 100px;
				background-color: #f00;
				-webkit-animation: left-spin 2s infinite linear; 
			}

			.sx2{
				position: absolute;
				width: 200px;
				height: 200px;
				transform: rotate(0deg);
				clip: rect(0px,100px,200px,0px);
				border-radius: 100px;
				background-color: #f00;
				-webkit-animation: right-spin 2s infinite linear;
			}
			.sector .sx1{transform: rotate(-0deg);}
			.sector .sx2{transform: rotate(-0deg);}

			@-webkit-keyframes right-spin {
			  from {-webkit-transform: rotate(0deg); }
			  to {-webkit-transform: rotate(360deg); }
			}
			@-webkit-keyframes left-spin {
			  from {-webkit-transform: rotate(0deg); }
			  to {-webkit-transform: rotate(-360deg); }
			}
			/* Set the wrapper clip to auto, effectively removing the clip */
			@-webkit-keyframes close-wrapper {
			  to {clip: rect(auto, auto, auto, auto); }
			}
		</style>

	</head>

	<body>

	扇形制作原理，底部一个纯色原形，用2个相同颜色的半圆按角度进行旋转任意产生扇形效果，这个 `rect (top, right, bottom, left)` 属性用来绘制半圆，在clip的rect范围内的内容显示出来，使用clip属性，元素必须是 `position:absolute`。

	<div class="sector">
		<div class="sx1"></div>
		<div class="sx2"></div>
	</div>

	</body> 
	</html>


# 字体与图标
https://www.w3cplus.com/css3/how-to-turn-your-icons-into-a-web-font.html
阿里字体图标库 http://www.iconfont.cn/
IcoMoon 免费字体图库管理器 https://icomoon.io/app/#/select

字体图标除了图像清晰度之外，比位图还有哪些优势呢。

 适用性：一个图标字体比一系列的图像（特别是在Retina屏中使用双倍大小的图像）要小。一旦图标字体加载了，你的图标就会马上渲染出来，不需要下载一个图像。
 可扩展性：图标字体可以用过font-size属性设置其任何大小。这使您能够随时输出不同大小的图标，然而，使用位图，你必须得为每个不同大小的图像输出一个不同文件。
 灵活性：文字效果可以很容易地应用到你的图标上，包括颜色，阴影和翻转等效果。他们还可以在任何背景下显示。
 兼容性：网页字体支持所有现代浏览器，包括IE低版本。详细兼容性可以点击这里。


	/* http://weloveiconfonts.com/api/?family=brandico */
	@charset "UTF-8";
	@font-face {
	  font-family: 'brandico';
	  font-style: normal;
	  font-weight: normal;
	  src: url('http://weloveiconfonts.com/api/fonts/brandico/brandico.eot');
	  src: url('http://weloveiconfonts.com/api/fonts/brandico/brandico.eot?#iefix') format('eot'), 
	  url('http://weloveiconfonts.com/api/fonts/brandico/brandico.woff') format('woff'), 
	  url('http://weloveiconfonts.com/api/fonts/brandico/brandico.ttf') format('truetype'), 
	  url('http://weloveiconfonts.com/api/fonts/brandico/brandico.svg#brandico') format('svg');
	}
	.brandico-facebook:before{content:"\f300"}.brandico-facebook-rect:before{content:"\f301"}.brandico-twitter:before{content:"\f302"}.brandico-twitter-bird:before{content:"\f303"}.brandico-vimeo:before{content:"\f30f"}.brandico-vimeo-rect:before{content:"\f30e"}.brandico-tumblr:before{content:"\f311"}.brandico-tumblr-rect:before{content:"\f310"}.brandico-googleplus-rect:before{content:"\f309"}.brandico-github-text:before{content:"\f307"}.brandico-github:before{content:"\f308"}.brandico-skype:before{content:"\f30b"}.brandico-icq:before{content:"\f304"}.brandico-yandex:before{content:"\f305"}.brandico-yandex-rect:before{content:"\f306"}.brandico-vkontakte-rect:before{content:"\f30a"}.brandico-odnoklassniki:before{content:"\f30c"}.brandico-odnoklassniki-rect:before{content:"\f30d"}.brandico-friendfeed:before{content:"\f312"}.brandico-friendfeed-rect:before{content:"\f313"}.brandico-blogger:before{content:"\f314"}.brandico-blogger-rect:before{content:"\f315"}.brandico-deviantart:before{content:"\f316"}.brandico-jabber:before{content:"\f317"}.brandico-lastfm:before{content:"\f318"}.brandico-lastfm-rect:before{content:"\f319"}.brandico-linkedin:before{content:"\f31a"}.brandico-linkedin-rect:before{content:"\f31b"}.brandico-picasa:before{content:"\f31c"}.brandico-wordpress:before{content:"\f31d"}.brandico-instagram:before{content:"\f31e"}.brandico-instagram-filled:before{content:"\f31f"}



	@import url(http://weloveiconfonts.com/api/?family=brandico);

	p:before {
	   content: "f303";
	   padding-right: 0.3em;
	   font-family: 'brandico', sans-serif;
	   font-size: 22px;
	}

# RGB RGBA HSL HSLA 色彩模型

RGB/RGBA 模型是加色模型，分成 Red、Green、Blue 三色分量，每个分量取值 [0,255]，REGA 中多加了一个 Alpha 透明通道，取值 [0,1]，可用小数。
HSL/HSLA 色彩模型将色彩分成色调、饱和度和亮度 HSL(hue, saturation, lightness)，HSV (hue, saturation, value)，这种模型跟人类视觉相符，色调取值 [0°, 359°]，是角度对应色彩，0°、120°、240°  对应表示 Red、Green、Blue 三种基色，其他角度就基色的混合。饱和度取值 [0%,100%]，百分比越高色彩越艳丽。亮度取值 [0%,100%]，百分比越高色彩越亮，0%、100% 对应黑白。

RGB

	#ffffff
	#fff

RGBA

	RGBA(255,255,255,0.1);

HSL

	hsla(100%,100%,100%);

HSLA

	hsla(100%,100%,100%,0.1);


# ⚑ Gradient 渐变效果
- https://developer.mozilla.org/es/docs/Web/CSS/linear-gradient()

CSS3 线性渐变语法

Webkit 是第一个支持 CSS3 渐变的浏览器引擎，不过其语法也相对其他浏览器引擎复杂，还分为新旧两个版本。

	-webkit-gradien(<type>,<point>[,<radius>]?,<point>[,<radius>]?[,<stop>]*)	

	-webkit-linear-gradient([<point>||<angle>,]?<stop>,<stop>[,<stop>]*)	

Gecko引擎的渐变语法

	-moz-linear-gradient([<point>||<angle>,]?<stop>,<stop>[,<stop>]*)

Gecko 引擎的渐变中共有三个参数，第一个数数表示线性渐变的方向，例如 top 是从上到下、left 是从左到右。如果定义成 left top，那就是从左上角到右下角。第二个和第三个参数分别是起点颜色和终点颜色。你还可以在它们之间插入更多的参数，表示多种颜色的渐变。

	Formal grammar: linear-gradient(  [ <angle> | to <side-or-corner> ,]? <color-stop> [, <color-stop>]+ )
	                                  \---------------------------------/ \----------------------------/
	                                    Definition of the gradient line         List of color stops

	                      where <side-or-corner> = [left | right] || [top | bottom]
	                        and <color-stop>     = <color> [ <percentage> | <length> ]?

	linear-gradient( 45deg, blue, red );           /* A gradient on 45deg axis starting blue and finishing red */
	linear-gradient( to left top, blue, red);      /* A gradient going from the bottom right to the top left starting blue and
	                                                  finishing red */

	linear-gradient( 0deg, blue, green 40%, red ); /* A gradient going from the bottom to top, starting blue, being green after 40%
	                                                  and finishing red */

Presto引擎的线性渐变语法

	-o-linear-gradient([<point>||<angle>,]?<stop>,<stop>[,<stop>]*)	


创建一个线性渐变，至少需要指定两种颜色，如果不指定方向，默认从上到下渐变，即 180deg 或者 to bottom，顺时针递增角度。

	#gradient {
	  background-image:
      linear-gradient(cornsilk, #0f05 20%), 
      linear-gradient(to right, cornsilk, #8801);
	}



## repeating-linear-gradient() 循环线性填充
https://developer.mozilla.org/en-US/docs/Web/CSS/repeating-linear-gradient

	/* A repeating gradient tilted 45 degrees,
	   starting blue and finishing red, repeating 3 times */
	repeating-linear-gradient(45deg, blue, red 33.3%);
	
	/* A repeating gradient going from the bottom right to the top left,
	   starting blue and finishing red, repeating every 20px */
	repeating-linear-gradient(to left top, blue, red 20px);
	
	/* A gradient going from the bottom to top,
	   starting blue, turning green after 40%,
	   and finishing red. This gradient doesn't repeat because
	   the last color stop defaults to 100% */
	repeating-linear-gradient(0deg, blue, green 40%, red);
	
	/* A gradient repeating five times, going from the left to right, 
	   starting red, turning green, and back to red */ 
	repeating-linear-gradient(to right, red 0%, green 10%, red 20%);


	background: repeating-linear-gradient(#e66465, #e66465 20px, #9198e5 20px, #9198e5 25px);
	background: repeating-linear-gradient(45deg, #3f87a6, #ebf8e1 15%, #f69d3c 20%);
	background: repeating-linear-gradient(transparent, #4d9f0c 40px), repeating-linear-gradient(0.25turn, transparent, #3f87a6 20px)
	background-image: repeating-linear-gradient(#383838, #fefefe 1px, #fefefe 32px);


Zebra stripesSection，with multiple color stop lengths 后一种多点式兼容性较差

	body {
	  background-image: repeating-linear-gradient(-45deg, transparent, transparent 20px, black 20px, black 40px);
	  background-image: repeating-linear-gradient(-45deg, transparent 0 20px, black 20px 40px);
	}

<side-or-corner>
The position of the gradient line's starting point. If specified, it consists of the word to and up to two keywords: one indicates the horizontal side (left or right), and the other the vertical side (top or bottom). The order of the side keywords does not matter. If unspecified, it defaults to to bottom.
The values to top, to bottom, to left, and to right are equivalent to the angles 0deg, 180deg, 270deg, and 90deg respectively. The other values are translated into an angle.
<angle>
The gradient line's angle of direction. A value of 0deg is equivalent to to top; increasing values rotate clockwise from there.
<linear-color-stop>
A color-stop's <color> value, followed by one or two optional stop positions, (each being either a <percentage> or a <length> along the gradient's axis). A percentage of 0%, or a length of 0, represents the start of the gradient; the value 100% is 100% of the image size, meaning the gradient will not repeat.
<color-hint>

## conic-gradient() 放射线渐变
https://developer.mozilla.org/zh-CN/docs/Web/CSS/conic-gradient
神奇的 conic-gradient 圆锥渐变 - http://web.jobbole.com/91586/
1 HTML Element + 5 CSS Properties = Magic! https://css-tricks.com/1-html-element-5-css-properties-magic/

兼容支持 Chrome, Opera

	.rays {
		background: conic-gradient(deeppink 0 30%, yellowgreen 0 70%, teal 0 100%);
		background: conic-gradient(#000 12.5%, #fff 0 37.5%, #000 0 62.5%, #fff 0 87.5%, #000 0); 
		background: repeating-conic-gradient(#000 0% .5, transparent 0% 0);
		background-size: 50px 50px;
	}

	.color-pet {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background: conic-gradient(red, orange, yellow, green, teal, blue, purple);
	}


采用这样一个过渡 hsl(0%, 100%, 50%) –> hsl(100%, 100%, 50%)，中间只改变色相，生成 20 个过渡状态。借助 SCSS ，CSS 语法如下:


	$colors: ();
	$totalStops:20;

	<a href="http://www.jobbole.com/members/lowkey2046">@for</a> $i from 0 through $totalStops{
		$colors: append($colors, hsl($i *(360deg/$totalStops), 100%, 50%), comma);
	}

	.colors {
		width: 200px;
		height: 200px;
		background: conic-gradient($colors);
		border-radius: 50%;
	}


## radial-gradient() 径向渐变
https://developer.mozilla.org/zh-CN/docs/Web/CSS/radial-gradient
https://www.cnblogs.com/lvmylife/p/5422064.html

纯CSS实现蜡烛、火焰以及熄灭后烟雾效果  https://www.zhangxinxu.com/wordpress/2018/05/pure-css-candle-flame-smoke/
3种纯CSS实现中间镂空的12色彩虹渐变圆环方法 https://www.zhangxinxu.com/wordpress/2017/11/pure-css-colorful-circle/
深入理解CSS径向渐变radial-gradient - https://www.cnblogs.com/xiaohuochai/p/5383285.html


Formal grammar: 

	radial-gradient( [ circle || <length> ] [ at <position> ]? ,
	| [ ellipse || [<length> | <percentage> ]{2}] [ at <position> ]? ,
	| [ [ circle | ellipse ] || <extent-keyword> ] [ at <position> ]? ,
	| at <position> ,
	<color-stop> [ , <color-stop> ]+ )


径向渐变不同于线性渐变，径向渐变是从一个点向四周的颜色渐变。用 50px 25px 表示 ellipse，50% 50% 表示圆心位置，渐变起点的位置，可以为百分比，默认是图形的正中心。颜色可以有多个，其后的值可以指定颜色出现的位置，可以百分比 0% 100% 等，也可以有其它单位 。渐变的形状，默认为 ellipse 表示椭圆形，circle 表示圆形。亦可以通过指定渐变两边的大小，来定制椭圆。还可以指定相对边角位的来限制渐变的大小， closest-side：最近边； farthest-side：最远边； closest-corner：最近角； farthest-corner：最远角，如果指定这四个相对值，那么圆心的位置会决定径向渐变的图形，想要指定其它限制圆形两轴大小，可以使用其它数值及单位。

	background: radial-gradient(50% 25%, start-color, ..., last-color);
	background: radial-gradient(ellipse at 50% 50%, start-color, ..., last-color);
	background: radial-gradient(50px 25px at 50% 50%, start-color, ..., last-color);
	background: radial-gradient(circle at 50% 50%, start-color, ..., last-color);
	background: radial-gradient(circle at 50% 50%, start-color 0%, ..., last-color 100%);

	background: radial-gradient(circle closest-side at 50% 10%, #9898ff, #28bbff, rgba(0, 0, 0, 0.03));
	background: radial-gradient(circle farthest-side at 50% 10%, #9898ff, #28bbff, rgba(0, 0, 0, 0.03));
	background-image: radial-gradient(ellipse farthest-corner at 45px 45px , #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%);
	background-image: radial-gradient(ellipse farthest-corner at 470px 47px , #FFFF80 20%, rgba(204, 153, 153, 0.4) 30%, #E6E6FF 60%);
	background-image: radial-gradient(farthest-corner at 45px 45px , #FF0000 0%, #0000FF 100%);

	<div class="view"></div>
	<style>
	.view {
		margin: auto;
		width: 55%;
		min-height: 96px;
		background-image: radial-gradient( 150% 110% at 50% 0%, #9898ff, #28bbff 48%, rgba(0, 0, 0, 0.03) 50%);
		text-align: center;
		line-height: 3em;
		font-weight: bold;
		color: white;
	}
	</style>


`<position>` 与background-position或者transform-origin类似。如缺省，默认为中心点。
`<shape>` 渐变的形状。圆形（渐变的形状是一个半径不变的正圆）或椭圆形（轴对称椭圆）。默认值为椭圆。
`<size>`  渐变的尺寸大小。包含的值见下表尺寸常数表。
`<color-stop>` 表示某个确定位置的固定色值，包含一个 `<color>` 值加上可选的位置值（相对虚拟渐变射线的 `<percentage>` 或者 `<length>` 长度值）。 百分比值0%，或者长度值0，表示渐变中心点；百分比值100%表示渐变射线与边缘形状相交的点。 其间的百分比值线性对应渐变射线上的点。

`<extent-keyword>` 关键字用于描述边缘轮廓的具体位置。

|常量	|描述|
|-------|----|
|closest-side	|渐变的边缘形状与容器距离渐变中心点最近的一边相切（圆形）或者至少与距离渐变中心点最近的垂直和水平边相切（椭圆）。|
|closest-corner	|渐变的边缘形状与容器距离渐变中心点最近的一个角相交。|
|farthest-side	|与closest-side相反，边缘形状与容器距离渐变中心点最远的一边相切（或最远的垂直和水平边）。|
|farthest-corner|渐变的边缘形状与容器距离渐变中心点最远的一个角相交。 早期草稿还包含其他关键字 cover 和 contain，分别相当于标准关键字 farthest-corner 和 closest-side 。但因为在某些实现中丢弃了这些旧的关键字，所以请仅使用标准关键字。|


// Definition of the contour, size and position of the ending shape List of color stops 

	<extent-keyword> = closest-corner | closest-side | farthest-corner | farthest-side 
	<color-stop> = <color> [ <percentage> | <length> ]? 

// Definition of the ending shape 

	radial-gradient( circle, … ) /* Synonym of radial-gradient( circle farthest-corner, …) */ 
	radial-gradient( ellipse, … ) /* Synonym of radial-gradient( ellipse farthest-corner, …) */ 
	radial-gradient( <extent-keyword>, … ) /* It draws a circle */ 
	radial-gradient( circle radius, … ) /* A centered circle of the given length. It can't be a percentage */ 
	radial-gradient( ellipse x-axis y-axis, … ) /* The two semi-major axis are given, horizontal, then vertical */ 

// Definition of the position of the shape 

	radial-gradient (… at <position>, … ) 

// Definition of the color stops 

	radial-gradient (…, <color-stop>) 
	radial-gradient (…, <color-stop>, <color-stop>) 



# viewport 移动端屏幕适应
[Viewportsizes](http://viewportsizes.com/mine/)
[视区相关单位 vw vh vm 简介以及可实际应用场景 « 张鑫旭](https://www.zhangxinxu.com/wordpress/2012/09/new-viewport-relative-units-vw-vh-vm-vmin/)

Viewport “视区”所指为浏览器内部的可视区域大小，即 `window.innerWidth`、`window.innerHeight` 大小，不包含任务栏标题栏以及底部工具栏的浏览器区域大小。CSS3 单位 vw 即 Viewport Width，同样 vh 对应 Viewport Height。

	vw：1vw等于视口宽度的1%。
	vh：1vh等于视口高度的1%。
	vmin：选取vw和vh中最小的那个，也用 vm 表示。
	vmax：选取vw和vh中最大的那个。

通过 meta 信息标签可以对 Viewport 与内容进行适配，如指定 device-width，表示与视口宽度一样的内容将在手机上全屏显示，这时的缩放比列为1:1，如果为2倍，则视口宽度的内容会占据两屏幕的宽度才能显示完全。

	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">

该meta标签的作用是让当前viewport的宽度的内容投射到设备完整宽度，即是全屏显示状态，同时不允许用户手动缩放。

meta viewport 标签首先是由苹果公司在其safari浏览器中引入的，目的就是解决移动设备的viewport问题。后来安卓以及各大浏览器厂商也都纷纷效仿，引入对meta viewport的支持，事实也证明这个东西还是非常有用的。

在苹果的规范中，meta viewport 有6个属性(暂且把content中的那些东西称为一个个属性和值)，如下：

+ width			设置layout viewport  的宽度，为一个正整数，或字符串"width-device"
+ initial-scale	设置页面的初始缩放值，为一个数字，可以带小数
+ minimum-scale	允许用户的最小缩放值，为一个数字，可以带小数
+ maximum-scale	允许用户的最大缩放值，为一个数字，可以带小数
+ height			设置layout viewport  的高度，这个属性对我们并不重要，很少使用
+ user-scalable	是否允许用户进行缩放，值为"no"或"yes", no 代表不允许，yes代表允许

这些属性可以同时使用，也可以单独使用或混合使用，多个属性同时使用时用逗号隔开就行了。


# content和attr() UTF-8 emoji 表情图案图标
https://www.utf8icons.com/favourites

Using Emoji in Web Apps - https://www.iamcal.com/emoji-in-web-apps/
Emoji表情符号兼容方案 - 吃我一棒 - https://www.cnblogs.com/wzk1992/p/5735537.html

emoji表情SB Unicode- http://www.oicqzone.com/qqjiqiao/2014123020663.html
emoji表情有很多种版本，其中包括Unified、DoCoMo、KDDI、Softbank和Google，并且不同版本用于表示同一符号表情的Unicode代码也不相同。本篇文章，给出SoftBank（日本软银集团）版本的emoji表情代码表（网上一般称之为SB Unicode，指的就是它）。其中虎脸Emoji符号在iOS5 为Unicode：\U0001f42f；而在IOS4.x 为：\ue050 (SoftBank 编码)。


emoji表情符号，是20世纪90年代由NTT Docomo栗田穣崇(Shigetaka Kurit)创建的，词义来自日语（えもじ，e-moji，moji在日语中的含义是字符）。emoji可以使数字通信做到让人如同面对面交流，避免错误传达信息。
自苹果公司发布的iOS 5输入法中加入了emoji后，这种表情符号开始席卷全球，目前emoji已被大多数现代计算机系统所兼容的Unicode编码采纳，普遍应用于各种手机短信和社交网络中。
所谓Emoji就是一种在Unicode位于\u1F601-\u1F64F区段的字符。这个显然超过了目前常用的UTF-8字符集的编码范围\u0000-\uFFFF。

查Symbola表，我们的目标对象大致是从

	1F300-1F3FF => "\uD83C\uDF00" - "\uD83C\uDFFF"
	1F400-1F4FF => "\uD83D\uDC00" - "\uD83D\uDCFF"
	1F500-1F5FF => "\uD83D\uDD00" - "\uD83D\uDDFF"
	1F600-1F6FF => "\uD83D\uDE00" - "\uD83D\uDEFF"
	1F700-1F7FF => "\uD83D\uDF00" - "\uD83D\uDFFF"


	var emojis = [], item = "";
	for(var i=0xDF00; i<0xDFFF; i++){
		item += String.fromCharCode(0xD83C,i);
		if( (i+1) % 16 == 0 ){
			console.log({emoji:item, value:"+"+i.toString(16)});
			item = "";
		}
	}
	for(var i=0xDC00; i<0xDFFF; i++){
		item += String.fromCharCode(0xD83D,i);
		if( (i+1) % 16 == 0 ){
			console.log({emoji:item, value:"+"+i.toString(16)});
			item = "";
		}
	}

⏰ 🍕 ⌚ ⏱ ☃ ☕ ⚘ ☼ 🌤 🌥 🌦 🌧 🌨 🌩 🌪 🌷 🌹 ☆ ★ ⚔ ⚛ ⚜ ✠ 〠 ♔ ♕ ♖ ♗ ♘ ♙ ♚ ♛ ♜ ♝ ♞ ♟ 
📧 ✓ ✗ ✔ ✘ ☯ ♠ ♣ ♥ ♦ ♤ ♧ ♡ ♢ ✍ ❄ ❦

云朵🌧表情 Unicode Big Endian 编码 4 个字节，FE FF 为 BOM 序号：

	FE FF D8 3C DF 27 

UTF-8 变长编码：

	F0 9F 8C A7 




	<style>
	.button:before {
		font: 			1.2em/0 'Pictos', sans-serif;
		content: 		attr(data-icon);
		margin-right: 	0.4em;
	}
	</style>
	<a href="#" data-icon="♚" class="button orange shield glossy">King</a>
	<a href="#" data-icon="♛" class="button pink serif round glass">Queen</a>
	<a href="#" data-icon="♞" class="button blue skew">Horse</a>
	<a href="#" data-icon="❀" class="button green icon">Flower</a>

Emoji Unicode Tables 
http://apps.timwhitlock.info/emoji/tables/unicode

	//过滤表情正则表达式
	public static final String EMOJI = "[\ud83c\udc00-\ud83c\udfff]|[\ud83d\udc00-\ud83d\udfff]|[\u2600-\u27ff]";
	//匹配昵称
	public static final String MATCHER_NICKNAME = "[A-Za-z0-9_\\-\\u4e00-\\u9fa5]+";

	//匹配数字、中英文、标点符号
	public static final String MATCHER_DEFAULT = "[A-Za-z0-9_\\-\\u4e00-\\u9fa5\\p{P}]+";

	//过滤金额
	public static final String MATCHER_MONEY = "(^[1-9]\\d*(\\.\\d{1,2})?$)|(^[0]{1}(\\.\\d{1,2})?$)";

	//匹配中文字符
	public static final String MATCHER_CN = "[\\u4e00-\\u9fa5]";

## first-child last-child nth-child nth-last-child first-of-type last-of-type


- :first-child
	first-child 表示选择列表中的第一个标签。代码如下：
	li:first-child{background:#090}
	上面的意思是，li 列表中的 第一个 li 模块的背景颜色。

- :last-child
	last-child表示选择列表中的最后一个标签，代码如下：
	li:last-child{background:#090}

- :first-of-type
	选择器匹配属于其父元素的特定类型的首个子元素。

- :last-of-type
	选择器匹配属于其父元素的特定类型的最后一个子元素。

- :nth-child(3)
	表示选择列表中的第3个标签，代码如下：
	li:nth-child(3){background:#090}
	上面代码中的3也可以改成其它数字，如4、5等。想选择第几个标签，就填写几。

- :nth-child(2n)
	这个表示选择列表中的偶数标签，即选择 第2、第4、第6…… 标签。

- :nth-child(2n-1)
	这个表示选择列表中的奇数标签，即选择 第1、第3、第5、第7……标签。

- :nth-child(n+3)
	这个表示选择列表中的标签从第3个开始到最后。

- :nth-child(-n+3)
	这个表示选择列表中的标签从0到3，即小于3的标签。

- :nth-last-child(3)
	这个表示选择列表中的倒数第3个标签。
	last-of-type表示其父元素下的最后一个指定类型的元素。


注意，父元素是很重要的一点，虽然 body 也可以作为父元素，但是实际开发中 html 结构是很复杂的，所以建议书写清晰的结构。

:last-child 和 :last-of-type 的区别
- E:last-child/:first-child 要求选择器 E 匹配的元素必须是父元素的第一个或最后一个元素。
- E:last-of-type/:first-of-type 不要求选择器 E 匹配的元素是父元素的第一个或最后一个元素，只需要元素类型匹配。
- E:last-of-type/:first-of-type 当选择器匹配到前半部分，后面无匹配时会失效，如 Group D 的 paragraph 加入导致 :first-of-type 失效， class 和 tag 冲突时，class 无效

示范：

	<!DOCTYPE html>
	<html>

	<head>
		<meta charset="utf-8">
		<title>:x-child 伪类选择器</title>
		<style>
		p.one { border-bottom: 10px solid red; }
		p.one:first-child { border-bottom: 10px solid blue; }
		p.one:last-child { border-bottom: 10px solid yellow; }
		p.two { border-bottom: 10px solid red; }
		p.two:first-of-type { border-bottom: 10px solid blue; }
		p.two:last-of-type { border-bottom: 10px solid yellow; }
		.group { box-shadow:1px 1px 1px black, -1px -1px 1px black; margin:24px; padding:24px; background: #fefefe; }
		</style>
	</head>

	<body>
		<div class="group">
			<h3>Group A</h3>
			<p class="one">.first [red]</p>
			<p class="one">.first [red]</p>
			<p class="one">.first [red]</p>
			<p>paragraph</p>
		</div>
		<div class="group">
			<p class="one">.first [blue]</p>
			<h3>Group B</h3>
			<p class="one">.first [red]</p>
			<div>division</div>
			<p class="one">.first [yellow]</p>
		</div>
		<div class="group">
			<h3>Group C</h3>
			<p class="two">.two [blue]</p>
			<p class="two">.two [red]</p>
			<p class="two">.two [red]</p>
			<p>paragraph</p>
		</div>
		<div class="group">
			<h3>Group D</h3>
			<p>paragraph</p>
			<p class="two">.two [red]</p>
			<p class="two">.two [red]</p>
			<p class="two">.two [yellow]</p>
			<div>division</div>
		</div>
	</body>

	</html>


## background-position 属性
https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment

定位背景图像：

	body
	{ 
		background-image:url('bgimage.gif');
		background-repeat:no-repeat;
		background-attachment:fixed;
		background-position:center;
	}

background-position 属性设置背景图像的起始位置。

这个属性设置背景原图像（由 background-image 定义）的位置，背景图像如果要重复，将从这一点开始。

提示：您需要把 background-attachment 属性设置为 "fixed"，才能保证该属性在 Firefox 和 Opera 中正常工作。


background-attachment 设置背景图像是否固定或者随着页面的其余部分滚动。

	默认值:    scroll
	继承: no
	版本: CSS1
	JavaScript 语法:  object object.style.backgroundAttachment="fixed"

浏览器支持
表格中的数字表示支持该属性的第一个浏览器版本号。

紧跟在 -webkit-, -ms- 或 -moz- 前的数字为支持该前缀属性的第一个浏览器版本号。

注意： Internet Explorer 8 及其更早版本的浏览器不支持多个背景图像在一个元素。

属性值

	值   描述
	scroll  背景图片随着页面的滚动而滚动，这是默认的。
	fixed   背景图片不会随着页面的滚动而滚动。
	local   背景图片会随着元素内容的滚动而滚动。
	initial 设置该属性的默认值。 阅读关于 initial 内容
	inherit 指定 background-attachment 的设置应该从父元素继承。 阅读关于 inherit 内容



## box-shadow text-shadow
https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow

可以指定 x y 轴偏移，模糊半径也就是强度，扩展半径设及颜色，多个阴影使用逗号分隔。相同属性 text-shadow 也同样的语法格式，但 text-shadow 并没有 inset 这个值。

	box-shadow: 10px 5px 5px red;

	box-shadow: 60px -16px teal;
	box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
	box-shadow: inset 5em 1em gold;
	box-shadow: 3px 3px red, -1em 0 .4em olive;

完整语法

	/* offset-x | offset-y | color */
	box-shadow: 60px -16px teal;

	/* offset-x | offset-y | blur-radius | color */
	box-shadow: 10px 5px 5px black;

	/* offset-x | offset-y | blur-radius | spread-radius | color */
	box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

	/* inset | offset-x | offset-y | color */
	box-shadow: inset 5em 1em gold;

	/* Any number of shadows, separated by commas */
	box-shadow: 3px 3px red, -1em 0 0.4em olive;

	/* Global keywords */
	box-shadow: inherit;
	box-shadow: initial;
	box-shadow: unset;


## background-clip 背景剪影 渐变色字体
https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip

指定一个区域渲染背景，超出区域的背景会被忽略，`border-box` 限定背景区域在边框所在位置包括边框，`padding-box` 限定背景区域在补白区域包括补白不包括边框，`content-box` 限定背景在内容区域不含补白区域，`text` 限定背景区域在文字笔划区，用来做文字剪影这是实验特性。

	background-clip: border-box;;
	background-clip: padding-box;;
	background-clip: content-box;;

	background-clip: inherit;
	background-clip: initial;
	background-clip: unset;

	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;

结合文字剪影可以做出渐变色字体效果

	.gradient-link-button {
		background: -webkit-gradient(linear,left top,right top,from(#ff8a00),to(#da1b60));
		background: linear-gradient(to right,#ff8a00,#da1b60), linear-gradient(to right,#ffc989,#fff2bc);;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-box-decoration-break: clone;
		box-decoration-break: clone;
		font-weight: 700;
	}


## text-overflow
https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-overflow

文本溢出是否显示属性：text-overflow：clip（不显示省略标记）/ellipsis（文本溢出时“...”显示），或自定义方式，Firefox Mobile (Gecko) 支持。

	/* Overflow behavior at line end
	   Right end if ltr, left end if rtl */
	text-overflow: clip;
	text-overflow: ellipsis;
	text-overflow: "…";
	text-overflow: fade;
	text-overflow: fade(10px);
	text-overflow: fade(5%);

text-overflow 只是规定了文本溢出后的显示样式，但它不会强制文本溢出，这也就是很多时候，我们虽然设置了text-overflow: ellipsis，但文本其实没有表现出溢出特性，所以当然也就不起作用。

	width: 100%;  /*也可以是固定值、min-width这些*/
	white-space: nowrap;  /*强制文本不能换行*/
	overflow: hidden;  /*隐藏溢出内容*/
	text-overflow: ellipsis;

如果是这种行内元素，请再加上display: block，因为行内元素的默认宽度就是文字的宽度且无法设置width

相比单行溢出，多行溢出就要更为复杂一点，要用到伸缩盒子的概念：display: -webkit-box;。

估计也就这时候能看到这个概念了，现在display:flex已经取代了box这种不正规的写法。
具体代码参考：

	width: 100%;
	overflow: hidden;
	word-break: break-all;  /*允许在单词内换行，更美观*/
	text-overflow: ellipsis;
	display: -webkit-box;  /*元素作为box伸缩盒子*/
	-webkit-line-clamp: 3;  /*设置文本行数限制*/
	-webkit-box-orient: vertical;  /*设置文本排列方式*/

定义此属性有四个必要条件：

- 须有容器宽度: width:value;
- 强制文本在一行内显示: white-space:nowrap;
- 溢出内容隐藏: overflow:hidden;
- 溢出文本显示“...”: text-overflow:ellipsis;

溢出属性 overflow:visible（默认值，不会被隐藏）

- hidden（内容隐藏）
- auto（如果内容隐藏，则浏览器内显示滚动条）
- scroll（内容会隐藏并显示滚动条）
- inherit（规定应该从父元素继承overflow属性的值）

空白空间属性 white-space:normal/pre/nowrap/pre-wrap /pre-line /inherit   
- normal（默认值，空白会被浏览器忽略）
- nowrap（文本不会换行，文本会在同一行上继续，直到遇到标签<br />为止）
- pre（空白会被浏览器保留，其行为方式类似HTML中的pre标签）
- pre-wrap（保留空白符序列，但是正常的进行换行）
- pre-line（合并空白符序列，但是保留换行符）
- inherit（规定应该从父元素继承White-space属性的值(ie浏览器不支持此属性值)）

所有主流浏览器都支持 text-overflow 属性。

定义和用法
text-overflow 属性规定当文本溢出包含元素时发生的事情。

	默认值：    clip
	继承性：    no
	版本： CSS3

JavaScript 语法：  object.style.textOverflow="ellipsis"

语法
text-overflow: clip|ellipsis|string;

	值   描述  测试
	clip    修剪文本。   测试
	ellipsis    显示省略符号来代表被修剪的文本。    测试
	string  使用给定的字符串来代表被修剪的文本。


## scrollbar custom 滚动条定制

滚动条组成
::-webkit-scrollbar 滚动条整体部分
::-webkit-scrollbar-thumb  滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条）
::-webkit-scrollbar-track  滚动条的轨道（里面装有Thumb）
::-webkit-scrollbar-button 滚动条的轨道的两端按钮，允许通过点击微调小方块的位置。
::-webkit-scrollbar-track-piece 内层轨道，滚动条中间部分（除去）
::-webkit-scrollbar-corner 边角，即两个滚动条的交汇处
::-webkit-resizer 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件

	.scrolled {
	  margin:16px auto;
	  border:0.1px solid rgba(1,1,1,0.5);
	  width:400px; 
	  height:400px;
	  overflow: scroll;
	}
	.scrolled h1 {
	  width:200%;
	  height:200%;
	  font-size:200px;
	  text-align: center;
	}

	div#style-$.scrolled*11>h1{$}

以上测试模板

	 .scrollbar {
		margin-left: 22px;
		float: left;
		height: 300px;
		width: 65px;
		background: #F5F5F5;
		overflow-y: scroll;
		margin-bottom: 25px;
	}

	.force-overflow {
		min-height: 450px;
	}

	#wrapper {
		text-align: center;
		margin: auto;
	}

	#style-1::-webkit-scrollbar,
	#style-2::-webkit-scrollbar {
		width: 12px;
		background-color: #F5F5F5;
	}

	#style-4::-webkit-scrollbar,
	#style-5::-webkit-scrollbar,
	#style-6::-webkit-scrollbar,
	#style-7::-webkit-scrollbar,
	#style-8::-webkit-scrollbar,
	#style-9::-webkit-scrollbar,
	#style-10::-webkit-scrollbar,
	#style-11::-webkit-scrollbar {
		width: 10px;
		background-color: #F5F5F5;
	}

	/**  STYLE 1 */
	#style-1::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
		background-color: #555;
	}

	#style-1::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
		border-radius: 10px;
		background-color: #F5F5F5;
	}

	/**  STYLE 2 */
	#style-2::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
		background-color: #D62929;
	}

	#style-2::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
		border-radius: 10px;
		background-color: #F5F5F5;
	}

	/**  STYLE 3 */
	#style-3::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
		background-color: #F5F5F5;
	}

	#style-3::-webkit-scrollbar {
		width: 6px;
		background-color: #F5F5F5;
	}

	#style-3::-webkit-scrollbar-thumb {
		background-color: #000000;
	}

	/**  STYLE 4 */
	#style-4::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
		background-color: #F5F5F5;
	}

	#style-4::-webkit-scrollbar-thumb {
		background-color: #000000;
		border: 2px solid #555555;
	}

	/**  STYLE 5 */
	#style-5::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
		background-color: #F5F5F5;
	}

	#style-5::-webkit-scrollbar-thumb {
		background-color: #0ae;
		background-image: -webkit-gradient(linear, 0 0, 0 100%,
						  color-stop(.5, rgba(255, 255, 255, .2)),
								  color-stop(.5, transparent), to(transparent));
	}

	/**  STYLE 6 */
	#style-6::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
		background-color: #F5F5F5;
	}

	#style-6::-webkit-scrollbar-thumb {
		background-color: #F90; 
		background-image: -webkit-linear-gradient(45deg,rgba(255, 255, 255, .2) 25%,
												  transparent 25%,
												  transparent 50%,
												  rgba(255, 255, 255, .2) 50%,
												  rgba(255, 255, 255, .2) 75%,
												  transparent 75%,
												  transparent)
	}

	/** STYLE 7 */
	#style-7::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
		background-color: #F5F5F5;
		border-radius: 10px;
	}

	#style-7::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-image: -webkit-gradient(linear,
										   left bottom,
										   left top,
										   color-stop(0.44, rgb(122,153,217)),
										   color-stop(0.72, rgb(73,125,189)),
										   color-stop(0.86, rgb(28,58,148)));
	}

	/**  STYLE 8 */
	#style-8::-webkit-scrollbar-track {
		border: 1px solid black;
		background-color: #F5F5F5;
	}

	#style-8::-webkit-scrollbar-thumb {
		background-color: #000000;  
	}

	/**  STYLE 9 */
	#style-9::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
		background-color: #F5F5F5;
	}

	#style-9::-webkit-scrollbar-thumb {
		background-color: #F90; 
		background-image: -webkit-linear-gradient(90deg, rgba(255, 255, 255, .2) 25%,
												  transparent 25%,
												  transparent 50%,
												  rgba(255, 255, 255, .2) 50%,
												  rgba(255, 255, 255, .2) 75%,
												  transparent 75%,
												  transparent)
	}

	/**  STYLE 10 */
	#style-10::-webkit-scrollbar-thumb {
	  border-radius: 10px;
	  background: linear-gradient(left, #96A6BF, #63738C);
	  box-shadow: inset 0 0 1px 1px #5C6670;
	}

	#style-10::-webkit-scrollbar-track {
	  border-radius: 10px;
	  background: #eee;
	  box-shadow: 0 0 1px 1px #bbb, inset 0 0 7px rgba(0,0,0,0.3)
	}

	#style-10::-webkit-scrollbar-thumb:hover {
	  background: linear-gradient(left, #8391A6, #536175);
	}

	/**  STYLE 11 */
	#style-11::-webkit-scrollbar-track {
	  border-radius: 10px;
	  background: rgba(0,0,0,0.1);
	  border: 1px solid #ccc;
	}

	#style-11::-webkit-scrollbar-thumb {
	  border-radius: 10px;
	  background: linear-gradient(left, #fff, #e4e4e4);
	  border: 1px solid #aaa;
	}

	#style-11::-webkit-scrollbar-thumb:hover {
	  background: #fff;
	}

	#style-11::-webkit-scrollbar-thumb:active {
	  background: linear-gradient(left, #22ADD4, #1E98BA);
	}



# CSS3绘图
http://css3lib.alloyteam.com/#animation/CircleHoverEffects
http://www.htmleaf.com/Demo/201504051632.html
http://play.163.com/special/minions/
https://www.uisdc.com/best-css3-animation-library
CSS3 蒲公英_陈在真 http://blog.sina.com.cn/s/blog_74d6cedd01013x6r.html

	<style>
		.flag {height: 0px;width: 0px;border: 30px solid #804480;margin: auto;border-bottom: 30px solid rgba(0,0,0,0);}
		.flip {transform: rotateX(180deg);}
		.breach { border-top: 30px solid rgba(0,0,0,0); }
		.arrow-down { border-left: 30px solid rgba(0,0,0,0); border-right: 30px solid rgba(0,0,0,0); }
		.arrow-right { border-top: 30px solid rgba(0,0,0,0); border-right: 30px solid rgba(0,0,0,0); }
		.sector { border-top: 30px solid rgba(0,0,0,0); border-right: 30px solid rgba(0,0,0,0); border-radius:30px; }
		.heart {
			height: 0px;width: 0px;border: 30px solid #804480;margin: auto;border-bottom: 30px solid rgba(0,0,0,0);
			border-left: 30px solid rgba(0,0,0,0); border-right: 30px solid rgba(0,0,0,0);
		}
		.heart .circle { width: 32px; height: 30px; border-radius: 16px; background: #804480; float: left; margin: -51px -1px; }
		.heart .circle:nth-child(1) { margin-left: -31px; }

		.starFive, .starFive:before, .starFive:after { 
			content: ""; position: absolute; width: 0; height: 0; 
			border-left: 80px solid transparent; border-right: 80px solid transparent; border-bottom: 60px solid #f00;
		}
		.starFive { position: relative; transform: rotate(35deg); } 
		.starFive:before { transform: rotate(-70deg); top: -1px; left: -80px; } 
		.starFive:after { transform: rotate(70deg); top: -1px; left: -80px; }
	</style>
	<div class="flag "></div>
	<div class="flag flip"></div>
	<div class="flag breach"></div>
	<div class="flag arrow-down"></div>
	<div class="flag arrow-right"></div>
	<div class="flag sector" id="shape"></div>
	<div class="heart">
		<div class="circle"></div>
		<div class="circle"></div>
	</div>
	<div class="starFive"></div>
	<script>
		let shape = document.getElementById("shape");
		let degree = 0;
		setInterval(function(){
			degree=degree%360+10;
			shape.style.transform="rotateZ("+degree+"deg)";
		},50);
	</script>

	<style>
	.loader {
	  margin: 100px auto;
	  font-size: 25px;
	  width: 1em;
	  height: 1em;
	  border-radius: 50%;
	  position: relative;
	  text-indent: -9999em;
	  -webkit-animation: loading 1.1s ease infinite;
	  animation: loading 1.1s ease infinite;
	  -webkit-transform: translateZ(0);
	  -ms-transform: translateZ(0);
	  transform: translateZ(0);
	}
	@-webkit-keyframes loading {
	  0%,
	  100% { box-shadow: 0em -2.6em 0em 0em rgba(128, 64, 128, 1), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2); }
	  50% { box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(128, 64, 128, 1); }
	}
	@keyframes loading {
	  0%,
	  100% { box-shadow: 0em -2.6em 0em 0em rgba(128, 64, 128, 1), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2); }
	  50% { box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(128, 64, 128, 1); }
	}
	</style>
	<div class="loader"></div>


# Transition

CSS3 的三大动效属性是 Transition、Transform、Animation。Transition 允许 css 的属性值在一定的时间区间内平滑地过渡。

属性有以下四个：

**transition-property** 指定对HTML元素的哪个css属性进行过渡渐变处理，这个属性可以是color、width、height等各种标准的css属性。
**transition-duration** 指定属性过渡的持续时间
**transition-timing-function** 指定渐变的速度
**transition-delay** 指定延迟时间，也就是经过多长时间才开始执行过渡过程。

timing-function：

1、ease：（逐渐变慢）默认值，ease函数等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0)； 
2、linear：（匀速），linear 函数等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0)； 
3、ease-in：(加速)，ease-in 函数等同于贝塞尔曲线(0.42, 0, 1.0, 1.0)； 
4、ease-out：（减速），ease-out 函数等同于贝塞尔曲线(0, 0, 0.58, 1.0)； 
5、ease-in-out：（加速然后减速），ease-in-out 函数等同于贝塞尔曲线(0.42, 0, 0.58, 1.0)； 
6、cubic-bezier：（该值允许你去自定义一个时间曲线）， 特定的cubic-bezier曲线。 (x1, y1, x2, y2)四个值特定于曲线上点P1和点P2。所有值需在[0, 1]区域内，否则无效。

应用示例，用来控制 transform 的时效，以下任一条样式会使用变换样式整个动效时间延长为 10 秒，all 用来匹配所有样式属性：

	transition: all 10s;
	transition: transform 10s;
	transition: transform 10s ease-out;
	transition: transform 10s ease-out 1s;

浏览器兼容性

Internet Explorer 9 以及更早的版本，不支持 transition 属性。

Internet Explorer 10, Firefox, Opera 和 Chrome 支持 transition 属性。

Chrome 25 以及更早的版本以及 Safari 需要前缀 -webkit-。
基于 webkit 内核的私有属性是：-webkit-transition;
基于 gecko 内核的私有属性是：-moz-transition;
基于 prestot 内核的私有属性是：-o-transition;

	.navbar-burger span {
	  background-color: currentColor;
	  display: block;
	  height: 1px;
	  left: calc(50% - 8px);
	  position: absolute;
	  transform-origin: center;
	  transition-duration: 86ms;
	  transition-property: background-color, opacity, transform;
	  transition-timing-function: ease-out;
	  width: 16px;
	}

实例
把鼠标指针放到 div 元素上，其宽度会从 100px 逐渐变为 300px：

	div
	{
	width:100px;
	transition: width 2s;
	-moz-transition: width 2s; /* Firefox 4 */
	-webkit-transition: width 2s; /* Safari 和 Chrome */
	-o-transition: width 2s; /* Opera */
	}

	div:hover { width:300px; }

注释：本例在 Internet Explorer 中无效。


# transform 变换
[transform](https://m.jb51.net/w3school/cssref/pr_transform.htm)

旋转 div 元素：

	div {
		transform: rotate(7deg);
		-ms-transform: rotate(7deg); 	/* IE 9 */
		-moz-transform: rotate(7deg); 	/* Firefox */
		-webkit-transform: rotate(7deg); /* Safari 和 Chrome */
		-o-transform: rotate(7deg); 	/* Opera */
	}

Internet Explorer 10、Firefox、Opera 支持 transform 属性。
Internet Explorer 9 支持替代的 -ms-transform 属性（仅适用于 2D 转换）。
Safari 和 Chrome 支持替代的 -webkit-transform 属性（3D 和 2D 转换）。
Opera 只支持 2D 转换。

	transform: none|transform-functions;

|transform-functions值	|描述	|
|-----------------------|-------|
|none	|定义不进行转换。	|
|matrix(n,n,n,n,n,n)	|定义 2D 转换，使用六个值的矩阵。	|
|matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)	|定义 3D 转换，使用 16 个值的 4x4 矩阵。	
|translate(x,y)	|定义 2D 转换。	|
|translate3d(x,y,z)	|定义 3D 转换。	
|translateX(x)	|定义转换，只是用 X 轴的值。	|
|translateY(y)	|定义转换，只是用 Y 轴的值。	|
|translateZ(z)	|定义 3D 转换，只是用 Z 轴的值。	
|scale(x,y)	|定义 2D 缩放转换。	|
|scale3d(x,y,z)	|定义 3D 缩放转换。	
|scaleX(x)	|通过设置 X 轴的值来定义缩放转换。	|
|scaleY(y)	|通过设置 Y 轴的值来定义缩放转换。	|
|scaleZ(z)	|通过设置 Z 轴的值来定义 3D 缩放转换。	
|rotate(angle)	|定义 2D 旋转，在参数中规定角度。	|
|rotate3d(x,y,z,angle)	|定义 3D 旋转。	
|rotateX(angle)	|定义沿着 X 轴的 3D 旋转。	|
|rotateY(angle)	|定义沿着 Y 轴的 3D 旋转。	|
|rotateZ(angle)	|定义沿着 Z 轴的 3D 旋转。	|
|skew(x-angle,y-angle)	|定义沿着 X 和 Y 轴的 2D 倾斜转换。	|
|skewX(angle)	|定义沿着 X 轴的 2D 倾斜转换。	|
|skewY(angle)	|定义沿着 Y 轴的 2D 倾斜转换。	|
|perspective(n)	|为 3D 转换元素定义透视视图。	|

多个变换函数用空格分隔，不使用逗号。

	transform: scale(2) translateY(150px);


# animation keyframes 底色渐变动画

	<!DOCTYPE html>
	<html>

	<head>
		<meta charset="utf-8">
		<title>keyframe animation</title>
		<style type="text/css">
		body {
			background-color: #e74c3c;
			animation: bg-color 1s infinite;
			-webkit-animation: bg-color 1s infinite;
		}

		@-webkit-keyframes bg-color {
			0% { background-color: #e74c3c; }
			20% { background-color: #f1c40f; }
			40% { background-color: #1abc9c; }
			60% { background-color: #3498db; }
			80% { background-color: #9b59b6; }
			100% { background-color: #e74c3c; } 
		}

		@keyframes bg-color {
			0% { background-color: #e74c3c; }
			20% { background-color: #f1c40f; }
			40% { background-color: #1abc9c; }
			60% { background-color: #3498db; }
			80% { background-color: #9b59b6; }
			100% { background-color: #e74c3c; } 
		}

		h1 {
			font-family: Meiryo, "HiraginoKakuGothicProW3", sans-serif;
			text-align: center;
			margin-top: 150px;
			color: #fff;
		}
		</style>
	</head>

	<body>
		<h1>keyframe animation</h1>
	</body>

	</html>

# animation keyframes 动画

http://css3lib.alloyteam.com/uilib/progress_bar/demo2/index.html
https://designmodo.com/steps-css-animations/
https://codepen.io/slyka85/pen/QvBQPb

	animation: drive 4s steps(4, end) infinite;
	animation: drive 4s steps(4, start) infinite;

时效曲线函数除了常用的 linear/ease/ease-in/ease-out 等，可以自定义贝塞尔曲线 cubic-bezier(x1,y1,x2,y2), 还可以使用帧函数 steps。 steps() 第一个参数 number 为指定的间隔数，即把动画分为 n 步阶段性展示，第二个参数可选，接受 start 和 end 两个值，指定在每个间隔的起点或是终点发生阶跃变化，默认为 end。

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


# 动画事件 animationend webkitAnimationEnd

	//捕捉 transitionEnd 事件
	element.addEventListener('webkitTransitionEnd', end, false); 

	$("#dom").addClass('slideOut').on('animationend webkitAnimationEnd', function () {
		this.remove();
	});

1、-webkit-animation 动画其实有三个事件： 

	dom.addEventListener("webkitAnimationStart", function(){ //动画开始时事件
		console.log(1);//动画开始时，控制台输出1
	}, false);
	// 动画结束时事件
	dom.addEventListener("webkitAnimationEnd", function() {
		console.log("动画结束");
	})
	dom.addEventListener("webkitAnimationIteration", function(){ //动画重复运动时的事件
		console.log(3);//第一遍动作完成时，控制台输出3
	}, false); 

2、css3的过渡属性transition，在动画结束时，也存在结束的事件 webkitTransitionEnd; 
注意：transition,也仅仅有这一个事件。


# CSS3 Animation 组成

1.关键帧(@keyframes)

关键帧(keyframes) - 定义动画在不同阶段的状态。
动画属性(properties) - 决定动画的播放时长，播放次数，以及用何种函数式去播放动画等。（可以类比音视频播放器）
css属性 - 就是css元素不同关键帧下的状态。

下面我们来看一个例子。关键帧主要分为3个阶段，0%、50%、100%。 动画播放时长为6s、循环播放(infinite)、以linear方式进行播放。 修改的元素 margin-top 属性。

	.list div:first-child {
	 animation: dropdown 8s linear infinite;
	}
	@keyframes dropdown {
		0% { margin-top: 0px;}
	   /** 暂停效果 */
	   10% { margin-top: 0px;}
	   50% { margin-top: -100px;}
	   60% { margin-top: -100px;}
	   90% { margin-top: -200px;}
	  100% { margin-top: -200px;}
	}

需要注意！当属性的个数不确定时：

当我们在定义不同关键帧，元素属性的个数是一个变化的值。 
如果一个关键帧的属性，没有出现在其他关键帧的时候，那么这些属性将会使用上一帧的默认值。 
区别在于，缺省之后的渐变效果是不会出现的。比如下面两种写法，

	  @keyframes dropdown {
		0% { top: 0; }
		30% { top: 300px; }
		50% { top: 150px; }
		70% { top: 300px; }
		80% { top: 0px;  left:-200px;}
		100% { top: 0px;  }
	  }

	  @keyframes dropdown {
		0% { top: 0; left:0px;}
		30% { top: 300px; left:0px;}
		50% { top: 150px; left:0px;}
		70% { top: 300px; left:0px;}
		80% { top: 0px;  left:-200px;}
		100% { top: 0px;  left:0px;}
	  }


语法

	@keyframes keyframes-name { 
	[ [ from | to | <百分比> ] [, from | to | <百分比> ]* block ]* 
	} 
	keyframes-name 
	帧列表的名称。 名称必须符合 CSS 语法中对标识符的定义。 
	from 
	等效于 0%. 
	to 
	等效于 100%.

2.动画属性

动画属性可以理解为播放器的相关功能，一个最基本的播放器应该具有：播放/暂停、播放时长、播放顺序(逆序/正序/交替播放)、循环次数等。 

	主要也分为两大点：

	指定播放的元素
	定义播放信息的配置 

	简写属性形式:

	animation: 
	[animation-name] [animation-duration] // 动画的名称、持续时间 
	[animation-timing-function][animation-delay] // 关于时间的函数(properties/t)、延迟时间 
	[animation-iteration-count] [animation-direction] // 播放次数、播放顺序 
	[animation-fill-mode] [animation-play-state]; // 播放前或停止后设置相应样式、控制动画运行或暂停

a.时间函数（animation-timing-function）

animation-timing-function属性定义了动画的播放速度曲线。默认值，如果没有显示写调用的函数，则默认为ease。 可选配置参数为:

	ease、 
	ease-in、 
	ease-out、 
	ease-in-out、 
	linear、 
	cubic-bezier(number, number, number, number) 


b. 动画方向 animation-direction

 表示CSS动画是否反向播放。可选配置参数为:

	single-animation-direction = normal | reverse | alternate | alternate-reverse
	animation-direction: normal 正序播放
	animation-direction: reverse 倒序播放
	animation-direction: alternate 交替播放
	animation-direction: alternate-reverse 反向交替播放
	animation-direction: normal, reverse
	animation-direction: alternate, reverse, normal



3.动画延迟（animation-delay）

	animation-delay属性定义动画是从何时开始播放，即动画应用在元素上的到动画开始的这段时间的长度。 
	默认值0s，表示动画在该元素上后立即开始执行。 
	该值以秒(s)或者毫秒(ms)为单位。

4.动画迭代次数（animation-iteration-count）

次数可以是1次或者无限循环。默认值只播放一次。

	single-animation-iteration-count = infinite | number

5.动画填充模式（animation-fill-mode）

	animation-fill-mode是指给定动画播放前后应用元素的样式。

	single-animation-fill-mode = none | forwards | backwards | both
	animation-fill-mode: none 动画执行前后不改变任何样式
	animation-fill-mode: forwards 保持目标动画最后一帧的样式
	animation-fill-mode: backwards 保持目标动画第一帧的样式
	animation-fill-mode: both 动画将会执行 forwards 和 backwards 执行的动作。

6.动画播放状态（animation-timing-function）

	animation-play-state: 定义动画是否运行或者暂停。可以确定查询它来确定动画是否运行。 
	默认值为running

	single-animation-timing-function = running | paused
	running 动画正常播放
	paused 动画暂停播放



# Demo CSS Rader

	<body class="half">
	
		<div id="example">
			<div class="page-bg"></div>
			<div class="frame-preloading">
				<div class="tip gradient-text" id="loadingTip">······</div>
				<div class="page-loader"></div>
			</div>
		</div>

	</body>

	<style>
		.frame-preloading::after {
			content:"";
			display:block;
			position: relative; top:50%; z-index: 1;
			margin: -240px auto; width: 270px; height: 480px; border-radius: 32px;
			background: url('./imgs/fingers.1536326112.jpg') center no-repeat; background-size: contain;
		}
		.frame-preloading {
			font-family: "Avenir", Helvetica, Arial, sans-serif;
			margin: auto; width:100%; height: 100%;
			text-align: center; font-size: 3em;
			position:fixed; top:0; left:0; z-index: 0;
		}

		.frame-preloading .tip { position: fixed; z-index: 2; width:100%; top:50%; left:0; text-align: center; }
		.gradient-text {
			background: -webkit-gradient(linear,left top,right top,from(#ff8a00),to(#FF5100));
			background: linear-gradient(to right,#ff8a00,#FF5100);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			-webkit-box-decoration-break: clone;
			box-decoration-break: clone;
			font-weight: 700;
		}
		.page-loader {
			width: 32px; height: 32px; margin: -5px 0 0 -16px;
			border: 3px solid #FFF; border-radius: 999px;
			position: fixed; top: 50%; left: 50%;
			/*display: none;*/
			z-index: 2;
			-webkit-animation: pulsecircle .7s linear infinite;
			animation: pulsecircle .7s linear infinite
		}
		.page-bg {
			background-color: #29272C;
			height: 100%;
			left: 0;
			overflow: hidden;
			position: fixed;
			top: 0;
			width: 100%;
			z-index: 1;
			display:none; 
		}
		@-webkit-keyframes pulsecircle {
			0% {-webkit-transform: scale(0.4, .4); opacity: 0 }
			50% {opacity: 1 }
			100% {-webkit-transform: scale(8.2, 8.2); opacity: 0 }
		}
		@keyframes pulsecircle {
			0% {transform: scale(0.1, .1); opacity: 0 }
			50% {opacity: 1 }
			100% {transform: scale(8.2, 8.2); opacity: 0 }
		}

	</style>


# Demo loading Circle

	.next-icon-loading:before {
		content: "\E646";
		-webkit-animation: loadingCircle 1s infinite linear;
				animation: loadingCircle 1s infinite linear; }

	@-webkit-keyframes loadingCircle {
	  0% {
		-webkit-transform-origin: 50% 50%;
				transform-origin: 50% 50%;
		-webkit-transform: rotate(0deg);
				transform: rotate(0deg); }
	  100% {
		-webkit-transform-origin: 50% 50%;
				transform-origin: 50% 50%;
		-webkit-transform: rotate(360deg);
				transform: rotate(360deg); } }

	@keyframes loadingCircle {
	  0% {
		-webkit-transform-origin: 50% 50%;
				transform-origin: 50% 50%;
		-webkit-transform: rotate(0deg);
				transform: rotate(0deg); }
	  100% {
		-webkit-transform-origin: 50% 50%;
				transform-origin: 50% 50%;
		-webkit-transform: rotate(360deg);
				transform: rotate(360deg); } }
