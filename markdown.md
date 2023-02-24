# Markdown 参考
- [MarkDown语法参考](https://www.appinn.com/markdown/)
- [我花了一晚上，把所有笔记从语雀迁移到 Notion](https://zhuanlan.zhihu.com/p/82711077)


## [TOC] 标题目录树


Sublime 需要 `MarkdownTOC` 插件支持

使用 [TOC] 生成一个自带的目录，Sublime 使用 MarkdownTOC 插件生成，并且 [TOC] 标签要独立一行，行前必需是空行。

建议将目录生成在文章最上边，方便阅读操作。


[TOC]



## Title 标题

Markdown 支持两种标题的语法，类 Setext 和类 atx 形式。

类 Setext 形式是用底线的形式，利用等号 = 作最高阶标题，负号 - 作第二阶标题，任何数量的 = 和 - 都可以有效果，例如：

	This is an H1
	=============

	This is an H2
	-------------

类 Atx 形式则是在行首插入 1 到 6 个 # ，对应到标题 1 到 6 阶，可以选择性地在行尾加上加「闭合」类 atx 样式的标题，行尾的 # 数量也不用和开头一样，行首的井字符数量决定标题的阶数，例如：

	# 这是 H1
	# 这是 H1 #
	## 这是 H2
	## 这是 H2 ##
	### 这是 H3 ######


## hr 水平分割线

【语法】 3 个及以上的星号 `***` 或减号 `---` 或下底线 `___` 来表示，注意多个减号表示标题。


## Strong 强调

Markdown 使用星号（`*`）和底线（`_`）作为标记强调字词的符号，被 `*` 或 `_` 包围的字词会被转成用 `<em>` 标签包围，用两个 `**` 或 `__` 包起来的话，则会被转成 `<strong>`。但是如果你的 ` * ` 和 ` _ ` 两边都有空白的话，它们就只会被当成普通的符号。


## List 列表

* 星号开关 无序列表
* 星号开关 无序列表
+ 加号开关 无序列表
+ 加号开关 无序列表
- 减号开关 无序列表
- 减号开关 无序列表

1. 数字开头 有序列表
1. 数字开头 有序列表
2. 数字开头 有序列表
3. 数字开头 有序列表
4. 数字开头 有序列表

## Blockquotes 区块引用

> Markdown 标记区块引用是使用类似 email 中用右箭括号 > 引用方式，在每行的最前面加上右箭括号！

## Code 代码

如果要标记一小段行内代码，你可以用反引号把它包起来（&#96;）

`int i = 0;`

使用缩进：

	int i = 0;

或使用三个反引号：

	```js
	var i = true;
	```

```js
var i = true;
```



## Table 表格的表达

了解 markdown 的朋友应该都知道，在 md 中实现表格是件很容易的事情，但是中跨行或跨列 span 很不容易。如下，
代码表示：

	| 左对齐标题 | 右对齐标题 | 居中对齐标题 |
	| :------| ------: | :------: |
	| 短文本 | 中等文本 | 稍微长一点的文本 |
	| 稍微长一点的文本 | 短文本 | 中等文本 |

	<table>
	    <tr>
	        <td bgcolor=#FF69B4>第一列</td> 
	        <td>第二列</td>
	        <td>第三列</td> 
	   </tr>
	    <tr>
	        <td colspan="2"bgcolor=#7B68EE>合并第1，2列</td>
	        <td>第2行，第3列</td    
	    </tr>
	    <tr>
	        <td colspan="2" bgcolor=#ADFF2F>合并第1，2列</td>
	        <td>第3行，第3列</td    
	    </tr>
	</table>


| 左对齐标题 | 右对齐标题 | 居中对齐标题 |
| :------| ------: | :------: |
| 短文本 | 中等文本 | 稍微长一点的文本 |
| 稍微长一点的文本 | 短文本 | 中等文本 |

<table>
    <tr>
        <td bgcolor=#FF69B4>第一列</td> 
        <td>第二列</td>
        <td>第三列</td> 
   </tr>
    <tr>
        <td colspan="2"bgcolor=#7B68EE>合并第1，2列</td>
        <td>第2行，第3列</td    
    </tr>
    <tr>
        <td colspan="2" bgcolor=#ADFF2F>合并第1，2列</td>
        <td>第3行，第3列</td    
    </tr>
</table>

若我们要将上表中的相同文字单元格进行合并，单纯的 markdown 语法还没有实现的。由于 markdown 兼容 html，可以使用 table 实现，除非必要，还是推荐使用 markdown 本身的表格语法。

需要注意的一点是，在 markdown 中使用 html 代码来实现表格的效果，需要在表格的外面套上

	<escape></escape>


有些人觉得 DocBook XML 不直观，因此开发了 AsciiDoc 不过 AsciiDoc 的语法很复杂，当然比 DocBook XML 简短，但未必简单。

所以还是有不少人偏好 AsciiDoc，边在文档里抨击 MarkDown 有太多方言，互相不兼容，一边又改了 AsciiDoc 的语法。不仅加了很多新语法，还去掉了一些语法，各 MarkDown 方言至少极少去掉始祖 MarkDown 语法。


## Table Edit 插件

使用 Sublime Table Edit 插件：
- https://packagecontrol.io/packages/Table%20Editor

Ctrl-Shift-P 激活 Enable for Current View/Syntax，完成编辑再关闭 Disable for current view

Table editor 支持的语法:

- Simple
- EmacsOrgMode
- Pandoc
- Multi Markdown
- reStructuredText
- Textile

参考键：

- 按下 `|`、`|-`、`|=`、`|A|B`、 再按 Tab 就会自动完成其它表格结构内容，或者结合 Ctrl-K, Enter 使用； 
- Tab 在单元格中跳转；
- Alt 加方向键移动表格行或列；
- Alt-Shift 加方向键增删行或列；
- Alt-Enter 将内容拆分成多行，行的分隔可以使用 `|-`；
- Ctrl-J 将拆分成多行内容的内容合并，和 Sublime 的并行快捷键充分融合；
- Ctrl-K, - 松开再按，自动插入行分隔线，这种分隔线在转换 HTML 需要转译程序支持；
- Ctrl-K, Enter 松开再按，自动插入带做分隔线的行；
- Ctrl-k, | 将选中的 CSV 内容制作成表格，注意 `|` 需要配置 Shift 键；

		Name,Age
		Anna,20
		Alexander,27

| Name      | Age     |
| :------   | :------ |
| Anna      | 20      |
| Alexander | 27      |

	|     Name     |    Phone    |  Age  |              Position              |
	| -----------: | ----------- | ----- | ---------------------------------- |
	|     Anna     |  123456789  |   32  |     Senior Software Engineer_      |
	|--------------|-------------|-------|------------------------------------|
	| Alexander    |   987654321 |    28 | Senior Software                    |
	|              |             |       | Testing Engineer                   |
	|--------------|-------------|-------|------------------------------------|
	| Alexander    |   987654321 |    28 | Senior Software Testing Engineer   |
	|              |             |       |                                    |
	|              |             |       |                                    |
	|==============|=============|=======|====================================|
	|              |             |       |                                    |

|     Name     |    Phone    |  Age  |              Position              |
| -----------: | ----------- | ----- | ---------------------------------- |
|     Anna     |  123456789  |   32  |     Senior Software Engineer_      |
|--------------|-------------|-------|------------------------------------|
| Alexander    |   987654321 |    28 | Senior Software                    |
|              |             |       | Testing Engineer                   |
|--------------|-------------|-------|------------------------------------|
| Alexander    |   987654321 |    28 | Senior Software Testing Engineer   |
|              |             |       |                                    |
|              |             |       |                                    |
|==============|=============|=======|====================================|
|              |             |       |                                    |




## Slash 反斜杠

Markdown 可以利用反斜杠来插入一些在语法中有其它意义的符号，例如：如果你想要用星号加在文字旁边的方式来做出强调效果（但不用 `<em>` 标签），你可以在星号的前面加上反斜杠：

	\*literal asterisks\*

Markdown 支持以下这些符号前面加上反斜杠来帮助插入普通的符号：

	\   反斜线
	`   反引号
	*   星号
	_   底线
	{}  花括号
	[]  方括号
	()  括弧
	#   井字号
	+   加号
	-   减号
	.   英文句点
	!   惊叹号



## Link & image 超链接和图片

<style>

img {height:240px;}

</style>

Markdown 支持两种形式的链接语法： 行内式和引用式两种形式。

这是行内式超链接 [Open Home](http://example.com/)，` [Open Home](http://example.com/)`，这是 `<http://example.com/>` <http://example.com/> 自动链接写法，Markdown 支持以比较简短的自动链接形式来处理网址和电子邮件信箱，只要是用方括号包起来， Markdown 就会自动把它转成链接，如邮件超链接 `<address@example.com>` <address@example.com>，会自动添加mailto超链接。

这里打开 `[Home]` [Home] 页面，MD 支持这种引用式写法，如果你不想混淆的话，链接地址可以用尖括号：

Markdown 使用一种和链接很相似的语法来标记图片，同样也允许两种样式： 行内式和引用式。戳这里 `[ImageRefID]` [ImageRefID] 打开引用图片，

行内式的链接语法看起来像是：

	[MarkDown 语法参考](https://www.appinn.com/markdown/)

[MarkDown 语法参考](https://www.appinn.com/markdown/)

行内式的图片语法看起来像是：

	![Alt text](./anki/1.png)
	![Alt text](./anki/1.png "Optional title")

![Alt text](./anki/1.png)
![Alt text](./anki/1.png "Optional title")

引用式的图片语法则长得像这样：

	![Alt text][ImageRefID]

![Alt text][ImageRefID]

链接引用和图片引用的定义方式一样，前面方括号的是引用ID，「ImageRefID」 是图片引用ID：

	[ImageRefID]: url/to/image  "Optional title attribute"
	[Home]: http://example.com/ (Optional Title Here)
	[Map]: <http://example.com/> "Optional Title Here"

- [ImageRefID]: ./anki/1.png  "Optional title attribute"
- [Home]: http://example.com/ (Optional Title Here)
- [Map]: <http://example.com/> "Optional Title Here"

图片&链接

	[![图片描述](图片地址)](链接地址)

[![图片描述](./anki/1.png)](./anki/1.png)



# Sample Markdown Cheat Sheet
-----------------------------

This is a sample markdown file to help you write Markdown quickly :)

If you use the fabulous [Sublime Text 2/3 editor][ST] along with the [Markdown Preview plugin][MarkdownPreview], open your ST2 Palette with `CMD+⇧+P` then choose `Markdown Preview in browser` to see the result in your browser.

## Text basics
this is *italic* and this is **bold** .  another _italic_ and another __bold__

this is `important` text. and percentage signs : % and `%`

This is a paragraph with a footnote (builtin parser only). [^note-id]

Insert `[ TOC ]` without spaces to generate a table of contents (builtin parsers only).

## Indentation
> Here is some indented text
>> even more indented

## Titles
# Big title (h1)
## Middle title (h2)
### Smaller title (h3)
#### and so on (hX)
##### and so on (hX)
###### and so on (hX)

## Example lists (1)

 - bullets can be `-`, `+`, or `*`
 - bullet list 1
 - bullet list 2
    - sub item 1
    - sub item 2

        with indented text inside

 - bullet list 3
 + bullet list 4
 * bullet list 5

## Links

This is an [example inline link](http://lmgtfy.com/) and [another one with a title](http://lmgtfy.com/ "Hello, world").

Links can also be reference based : [reference 1][ref1] or [reference 2 with title][ref2].

References are usually placed at the bottom of the document

## Images

A sample image :

![revolunet logo](http://www.revolunet.com/static/parisjs8/img/logo-revolunet-carre.jpg "revolunet logo")

As links, images can also use references instead of inline links :

![revolunet logo][revolunet-logo]


## Code

It's quite easy to show code in markdown files.

Backticks can be used to `highlight` some words.

Also, any indented block is considered a code block.  If `enable_highlight` is `true`, syntax highlighting will be included (for the builtin parser - the github parser does this automatically).

    <script>
        document.location = 'http://lmgtfy.com/?q=markdown+cheat+sheet';
    </script>

## Math

Math can be displayed in the browser using MathJax or Katex. The feature can be enabled by correctly configuring the `"js"`, `"css"`, and `"markdown_extensions"` configuration fields. This allows for inline math to be included \\(\frac{\pi}{2}\\) $\pi$.

Alternatively, math can be written on its own line:

$$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) \, e^{ - i \omega t}dt$$

\\[\int_0^1 f(t) \mathrm{d}t\\]

\\[\sum_j \gamma_j^2/d_j\\]

\\[\S_{j \gamma_j^2/d_j}\\]


    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>MathJax example</title>
      <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
      <script id="MathJax-script" async
              src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
      </script>
    </head>
    <body>
    <p>
      When \(a \ne 0\), there are two solutions to \(ax^2 + bx + c = 0\) and they are
      \[x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\]
    </p>
    </body>
    </html>

一元二次方程：

<p>When \(a \ne 0\), there are two solutions to \(ax^2 + bx + c = 0\) and they are \[x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\]</p>

向量

$$|x|, ||v|| \quad\longrightarrow\quad \lvert x\rvert, \lVert v\rVert$$


引用符号

$$♠\quad♡\quad♢\quad♣\\ ♤\quad♥\quad♦\quad♧ $$

Limits

$$\lim \limits_{x \to 1} \frac{x^2-1}{x-1}$$



<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"> </script>

GitHub Page 里的 Jekyll 虽然支持 Markdown，但是不能正确显示公式，可以借用 MathJax 帮助渲染。

方法：

1 设置 markdown 引擎为 kramdown，方法为在 `_config.yml` 里添加：

markdown: kramdown

2 在 md 文件开始输入代码：

    <head>
        <script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
        <script type="text/x-mathjax-config">
            MathJax.Hub.Config({
                tex2jax: {
                skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
                inlineMath: [['$','$']]
                }
            });
        </script>
    </head>

然后正文就可以写公式：$ e = m c^2 $ 这样就能正确显示了。

如果要所有文档都使用 mathjax，可以在主题配置文件里面的 `<head>`标签里加入上面代码，但是实际测试发现，每次都会连接mathjax所以加载页面很慢。因此建议对需要公式显示的文档开启。

如果是在 Gtihub Page 搭建的时候选择的主题，仓库里看不到主题配置文件可以这样做：

    https://github.com/pages-themes

把 THEME_NAME 替换为自己的主题名字，比如我的主题名字为 Cayman，然后把这个文件的内容添加到自己仓库里面的 `_layout/default.html`。

在`<head>`标签里添加上面的内容，就可以全部文档都使用了。




## GitHub Flavored Markdown

If you use the Github parser, you can use some of [Github Flavored Markdown][gfm] syntax :

 * User/Project@SHA: revolunet/sublimetext-markdown-preview@7da61badeda468b5019869d11000307e07e07401
 * User/Project#Issue: revolunet/sublimetext-markdown-preview#1
 * User : @revolunet

Some Python code :

```python
import random

class CardGame(object):
    """ a sample python class """
    NB_CARDS = 32
    def __init__(self, cards=5):
        self.cards = random.sample(range(self.NB_CARDS), 5)
        print 'ready to play'
```

Some Javascript code :

```js
var config = {
    duration: 5,
    comment: 'WTF'
}
// callbacks beauty un action
async_call('/path/to/api', function(json) {
    another_call(json, function(result2) {
        another_another_call(result2, function(result3) {
            another_another_another_call(result3, function(result4) {
                alert('And if all went well, i got my result :)');
            });
        });
    });
})
```

The Github Markdown also brings some [nice Emoji support][emoji] : :+1: :heart: :beer:

[^note-id]: This is the text of the note. 

## Parsers and Extensions

Markdown Preview comes with **Python-Markdown** preloaded.

### *Python-Markdown*

The [Python-Markdown Parser][] provides support for several extensions.

[Python-Markdown Parser]: https://github.com/Python-Markdown/markdown

#### Extra Extensions

* `abbr` -- [Abbreviations][]
* `attr_list` -- [Attribute Lists][]
* `def_list` -- [Definition Lists][]
* `fenced_code` -- [Fenced Code Blocks][]
* `footnotes` -- [Footnotes][]
* `tables` -- [Tables][]
* `smart_strong` -- [Smart Strong][]

[Abbreviations]: https://python-markdown.github.io/extensions/abbreviations
[Attribute Lists]: https://python-markdown.github.io/extensions/attr_list
[Definition Lists]: https://python-markdown.github.io/extensions/definition_lists
[Fenced Code Blocks]: https://python-markdown.github.io/extensions/fenced_code_blocks
[Footnotes]: https://python-markdown.github.io/extensions/footnotes
[Tables]: https://python-markdown.github.io/extensions/tables
[Smart Strong]: https://python-markdown.github.io/extensions/smart_strong


You can enable them all at once using the `extra` keyword.

    extensions: [ 'extra' ]

If you want all the extras plus the `toc` extension,
your settings would look like this:

    {
        ...
        parser: 'markdown',
        extensions: ['extra', 'toc'],
        ...
    }


#### Other Extensions

There are also some extensions that are not included in Markdown Extra
but come in the standard Python-Markdown library.

* `code-hilite` -- [CodeHilite][]
* `header-id` -- [HeaderId][]
* `meta_data` -- [Meta-Data][]
* `nl2br` -- [New Line to Break][]
* `sane_lists` -- [Sane Lists][]
* `smarty` -- [Smarty][]
* `toc` -- [Table of Contents][]
* `wikilinks` -- [WikiLinks][]

[CodeHilite]:  https://python-markdown.github.io/extensions/code_hilite
[HeaderId]:  https://python-markdown.github.io/extensions/header_id
[Meta-Data]:  https://python-markdown.github.io/extensions/meta_data
[New Line to Break]:  https://python-markdown.github.io/extensions/nl2br
[Sane Lists]:  https://python-markdown.github.io/extensions/sane_lists
[Table of Contents]:  https://python-markdown.github.io/extensions/toc
[WikiLinks]:  https://python-markdown.github.io/extensions/wikilinks
[Smarty]: hhttps://python-markdown.github.io/extensions/smarty

#### 3rd Party Extensions

*Python-Markdown* is designed to be extended.

Some included ones are:

* `delete` -- github style delte support via `~~word~~`
* `githubemoji` --  github emoji support
* `tasklist` -- github style tasklists
* `magiclink` -- github style auto link conversion of http|ftp links
* `headeranchor` -- github style header anchor links
* `github` -- Adds the above extensions in one shot
* `b64` -- convert and embed local images to base64.  Setup by adding this `b64(base_path=${BASE_PATH})`

There are also a number of others available:

Just fork this repo and add your extensions inside the `.../Packages/Markdown Preview/markdown/extensions/` folder.

Check out the list of [3rd Party extensions](
https://github.com/waylan/Python-Markdown/wiki/Third-Party-Extensions).


#### Default Extensions

The default extensions are:

* `footnotes` -- [Footnotes]
* `toc` -- [Table of Contents]
* `fenced_code` -- [Fenced Code Blocks] 
* `tables` -- [Tables]

Use the `default` keyword, to select them all.
If you want all the defaults plus the `definition_lists` extension,
your settings would look like this:

    {
        ...
        parser: 'markdown',
        extensions: ['default', 'definition_lists'],
        ...
    }

## Examples

### Tables

The `tables` extension of the *Python-Markdown* parser is activated by default,
but is currently **not** available in *Markdown2*.

The syntax was adopted from the [php markdown project](http://michelf.ca/projects/php-markdown/extra/#table),
and is also used in github flavoured markdown.

| Year | Temperature (low) | Temperature (high) |  
| ---- | ----------------- | -------------------|  
| 1900 |               -10 |                 25 |  
| 1910 |               -15 |                 30 |  
| 1920 |               -10 |                 32 |  


### Wiki Tables

If you are using *Markdown2* with the `wiki-tables` extra activated you should see a table below:

|| *Year* || *Temperature (low)* || *Temperature (high)* ||  
||   1900 ||                 -10 ||                   25 ||  
||   1910 ||                 -15 ||                   30 ||  
||   1920 ||                 -10 ||                   32 ||  


### Definition Lists

This example requires *Python Markdown*'s `def_list` extension.

Apple
:   Pomaceous fruit of plants of the genus Malus in 
    the family Rosaceae.

Orange
:   The fruit of an evergreen tree of the genus Citrus.


## About

This plugin and this sample file is proudly brought to you by the [revolunet team][revolunet]

 [ref1]: http://revolunet.com
 [ref2]: http://revolunet.com "rich web apps"
 [MarkdownREF]: http://daringfireball.net/projects/markdown/basics
 [MarkdownPreview]: https://github.com/revolunet/sublimetext-markdown-preview
 [ST]: http://sublimetext.com
 [revolunet]: http://revolunet.com
 [revolunet-logo]: http://www.revolunet.com/static/parisjs8/img/logo-revolunet-carre.jpg "revolunet logo"
 [gfm]: https://help.github.com/articles/github-flavored-markdown/
 [emoji]: http://www.emoji-cheat-sheet.com/