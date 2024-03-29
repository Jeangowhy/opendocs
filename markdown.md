

/Markdown Live HTML
===================

Sublime Text 可以安装 MarkdownLivePreview 插件实现 Markdown 文档实时编辑预览，此插件
引用了 markdown2 进行格式转换： Markdown 转 HTML。它通过 Sublime Text 提供的 minihtml
接口实现 HTML 简单内容的预览。通过监视 Sublime View 编程接口，在用户修改内容时即触发 Phantom
对象的更新：

    sublime.PhantomSet(preview_view)

用户每个改动都触发 Markdown2HTML 的转换，这种监视可能有性能问题，特别是大号文件。

推荐使用 Pandoc 文件格式转换工具，它实现的功能更全面，支持的格式更丰富。markmon 默认选择。
可以使用 markmon 来监视 Markdown 文件的改动，然后再执行指定的命令（-command）转换格式。

```sh
Usage: node /nodejs/node_modules/markmon/bin/markmon [filename] --port [num] --command [string] --view [string] --projectdir [path] --stylesheet [path] --help

Options:
  --port        Port to listen to                                                 [default: 3000]
  --command     Command to parse markdown to html                                 [default: "pandoc --mathjax -N -t HTML5"]
  --view        Command to execute after the server is setup
  --projectdir  Root directory of your project, useful for local image resources
  --stylesheet  Path to your custom stylesheet
  --help        Get this help message
```

[Pandoc](https://pandoc.org/) 是专业的文档格式转换工具，网站上，所有标记为 ↔︎ 表示可以实现，
所有支持格式的互转换。比如，以下脚本将 Pandoc 自带的用户手册（HTML）转换成 Markdown 文档：
(← = conversion from; → = conversion to; ↔︎ = conversion from and to)

```sh
out=/c/opendocs/pandoc_3.1.12.md
man="\Program Files\Pandoc\Pandoc User's Guide.html"
pandoc='\Program Files\Pandoc\pandoc.exe'
link "$pandoc" "/c/vcpkg/pandoc.exe"
pandoc --help
pandoc --to=markdown "$man" >> $out; subl $out
# Powershell:
# New-Item -Type SymbolicLink -Target "$pandoc" -Path /vcpkg/pandoc.exe
```

Pandoc 不能处理任意的 HTML 格式，但是可以处理其自身生成的 HTML 格式。

markmon 提供了一个 Web 服务器，默认端口为 3000。其 Web 前端基于 Socket.IO 框架提供了
Websocket 通信，并通过它来实现实现预览所需要的通信： 

```sh
# https://github.com/trentm/python-markdown2/blob/master/lib/markdown2.py
pip install markdown2
# https://www.npmjs.com/package/markmon
npm install -g markmon
# https://www.npmjs.com/package/turndown
npm install -g turndown
markmon --projectdir . --command 'python -m markdown2' --view 'start http://localhost:3000' README.md 
# subl "$(dirs=($(whereis markmon)); dirname $(dirname ${dirs[1]}))/markmon"
```

通过 marKmon 命令行指定要监视的文件（README.md），并且指定命令（-command）在文件改动时执行它，
进行格式转换，Web 服务器会将更新消息通过 Websocket 通知前面页面，并刷新页面（会自滚动到变更位置）。

Markmon 安装包未自动添加全局命令的入口，可以手动向 Nodejs 全局模块目录 node_modules\.bin
添加以下脚本，以便在 Linux、Windows 平台上执行此工具：

1. markmon

    ```sh
    #!/bin/sh
    basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")
    module='/markmon/bin/markmon'

    case `uname` in
        *CYGWIN*|*MINGW*|*MSYS*) basedir=`cygpath -w "$basedir"`;;
    esac

    if [ -x "$basedir/node" ]; then
      "$basedir/node"  "$basedir/..$module" "$@"
      ret=$?
    else 
      node  "$basedir/..$module" "$@"
      ret=$?
    fi
    exit $ret
    ```

2. markmon.cmd

    ```sh
    @ECHO off
    SETLOCAL
    CALL :find_dp0
    SET module='\markmon\bin\markmon'

    IF EXIST "%dp0%\node.exe" (
      SET "_prog=%dp0%\node.exe"
    ) ELSE (
      SET "_prog=node"
      SET PATHEXT=%PATHEXT:;.JS;=;%
    )

    "%_prog%"  "%dp0%\..%module%" %*
    ENDLOCAL
    EXIT /b %errorlevel%
    :find_dp0
    SET dp0=%~dp0
    EXIT /b
    ```

3. markmon.ps1

    ```sh
    #!/usr/bin/env pwsh
    $basedir=Split-Path $MyInvocation.MyCommand.Definition -Parent
    $module='/markmon/bin/markmon'

    $exe=""
    if ($PSVersionTable.PSVersion -lt "6.0" -or $IsWindows) {
      # Fix case when both the Windows and Linux builds of Node
      # are installed in the same directory
      $exe=".exe"
    }
    $ret=0
    if (Test-Path "$basedir/node$exe") {
      & "$basedir/node$exe"  "$basedir/..$module" $args
      $ret=$LASTEXITCODE
    } else {
      & "node$exe"  "$basedir/..$module" $args
      $ret=$LASTEXITCODE
    }
    exit $ret
```



/Markdown 参考
===============

## //[TOC] 标题目录树


Sublime 需要 `MarkdownTOC` 插件支持

使用 [TOC] 生成一个自带的目录，Sublime 使用 MarkdownTOC 插件生成，并且 [TOC] 标签要独立一行，行前必需是空行。

建议将目录生成在文章最上边，方便阅读操作。


[TOC]



## //Title 标题

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


## //HR 水平分割线

【语法】 3 个及以上的星号 `***` 或减号 `---` 或下底线 `___` 来表示，注意多个减号表示标题。
* * *


## //Strong 强调

Markdown 使用星号（`*`）和底线（`_`）作为标记强调字词的符号，被 `*` 或 `_` 包围的字词会被转成用 `<em>` 标签包围，用两个 `**` 或 `__` 包起来的话，则会被转成 `<strong>`。但是如果你的 ` * ` 和 ` _ ` 两边都有空白的话，它们就只会被当成普通的符号。


## //List 列表

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

## //Blockquotes 区块引用

> Markdown 标记区块引用是使用类似 email 中用右箭括号 > 引用方式，在每行的最前面加上右箭括号！

## //Code 代码

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

Pandco Extension: `fenced_code_attributes`

Optionally, you may attach attributes to fenced or backtick code block
using this syntax:

    ~~~~ {#mycode .haskell .numberLines startFrom="100"}
    qsort []     = []
    qsort (x:xs) = qsort (filter (< x) xs) ++ [x] ++
                   qsort (filter (>= x) xs)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



## //Table 表格的表达

了解 markdown 的朋友应该都知道，在 md 中实现表格是件很容易的事情，但是中跨行或跨列 span 很不容易。如下，
代码表示：

	| 左对齐标题 | 右对齐标题 | 居中对齐标题 |
	| :------| ------: | :------: |
	| 短文本 | 中等文本 | 稍微长一点的文本 |
	| 稍微长一点的文本 | 短文本 | 中等文本 |

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

若要合并单元格，需要像 pandoc 这样的工具支持的 markdown 语法。因为 markdown 兼容 html，
可以使用 table 实现，除非必要，还是推荐使用 markdown 本身的表格语法。


## //Slash 反斜杠

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



## //Link & image 超链接和图片

<style> img {height:240px;} </style>

Markdown 支持两种形式的链接语法： 行内式和引用式两种形式。

这是行内式超链接 `[Open Home](https://github.com/Jeangowhy)`：[Open Home](https://github.com/Jeangowhy)。
这是自动链接写法 `<https://github.com/Jeangowhy>`： <https://github.com/Jeangowhy> 。
Markdown 支持以比较简短的自动链接形式来处理网址和电子邮件信箱，只要用方括号包起来，就会被转成链接。
如邮件超链接 `<address@example.com>`：<address@example.com>，会自动添加 mailto 超链接。

引用式两种形式的连接或图像需要先定义好连接地址。链接引用和图片引用的定义方式一样：方括号加冒号，
方括号中填写引用 ID，冒号后面跟着一个空格，再填上连接地址：

    [ImageRefID]: https://www.sublimehq.com/images/sublime_text.png  "Optional title attribute"
    [Home]: https://github.com/Jeangowhy (Optional Title Here)
    [Map]: <https://github.com/Jeangowhy> "Optional Title Here"

比如要引用以上定义的 `[ImageRefID]` 连接，可以将它作为连接、图像来使用：

1. `[ImageRefID]` 表示引用作为连接： [ImageRefID]
2. `![Alt Text][ImageRefID]` 表示引用作为图像： ![][ImageRefID]
3. `[![Alt Text][ImageRefID]](..)` 表示引用作为带连接的图像： [![Alt Text][ImageRefID]](..)

[ImageRefID]: https://www.sublimehq.com/images/sublime_text.png  "Optional title attribute"
[Home]: https://github.com/Jeangowhy (Optional Title Here)
[Map]: <https://github.com/Jeangowhy> "Optional Title Here"



/Sample Markdown Cheat Sheet
============================

This is a sample markdown file to help you write Markdown quickly :)

If you use the fabulous [Sublime Text 2/3 editor][ST] along with the [Markdown Preview plugin][MarkdownPreview], open your ST2 Palette with `CMD+⇧+P` then choose `Markdown Preview in browser` to see the result in your browser.

## //Text basics
this is *italic* and this is **bold** .  another _italic_ and another __bold__

this is `important` text. and percentage signs : % and `%`

This is a paragraph with a footnote (builtin parser only). [^note-id]

Insert `[ TOC ]` without spaces to generate a table of contents (builtin parsers only).

## //Indentation
> Here is some indented text
>> even more indented

    ## Titles
    # Big title (h1)
    ## Middle title (h2)
    ### Smaller title (h3)
    #### and so on (hX)
    ##### and so on (hX)
    ###### and so on (hX)

## //Example lists (1)

 - bullets can be `-`, `+`, or `*`
 - bullet list 1
 - bullet list 2
    - sub item 1
    - sub item 2

        with indented text inside

 - bullet list 3
 + bullet list 4
 * bullet list 5

## //Links

This is an [example inline link](https://github.com/Jeangowhy) and [another one with a title](https://github.com/Jeangowhy "Hello, world").

Links can also be reference based : [reference 1][ref1] or [reference 2 with title][ref2].

References are usually placed at the bottom of the document

## //Images

A sample image :

![revolunet logo](https://www.sublimehq.com/images/sublime_text.png "revolunet logo")

As links, images can also use references instead of inline links :

![revolunet logo][ImageRefID]


## //Code

It's quite easy to show code in markdown files.

Backticks can be used to `highlight` some words.

Also, any indented block is considered a code block.  If `enable_highlight` is `true`, syntax highlighting will be included (for the builtin parser - the github parser does this automatically).

    document.location = 'http://lmgtfy.com/?q=markdown+cheat+sheet';

/LaTeX Math
=============

Math can be displayed in the browser using MathJax or Katex. The feature can be enabled by correctly configuring the `"js"`, `"css"`, and `"markdown_extensions"` configuration fields. This allows for inline math to be included \\(\frac{\pi}{2}\\) $\pi$.

Alternatively, math can be written on its own line:

$$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) \, e^{ - i \omega t}dt$$

\\[\int_0^1 f(t) \mathrm{d}t\\]

\\[\sum_j \gamma_j^2/d_j\\]

\\[\S_{j \gamma_j^2/d_j}\\]

```html
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
```

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

```html
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
```

然后正文就可以写公式：$ e = m c^2 $ 这样就能正确显示了。

如果要所有文档都使用 mathjax，可以在主题配置文件里面的 `<head>`标签里加入上面代码，但是实际测试发现，每次都会连接mathjax所以加载页面很慢。因此建议对需要公式显示的文档开启。

如果是在 Gtihub Page 搭建的时候选择的主题，仓库里看不到主题配置文件可以这样做：

    https://github.com/pages-themes

把 THEME_NAME 替换为自己的主题名字，比如我的主题名字为 Cayman，然后把这个文件的内容添加到自己仓库里面的 `_layout/default.html`。

在`<head>`标签里添加上面的内容，就可以全部文档都使用了。




/Parsers and Extensions
=======================
https://facelessuser.github.io/pymdown-extensions/

Markdown Preview comes with **Python-Markdown** preloaded.

### //*Python-Markdown*

The [Python-Markdown Parser][] provides support for several extensions.

[Python-Markdown Parser]: https://github.com/Python-Markdown/markdown

#### //Extra Extensions

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


#### //Other Extensions

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

#### //3rd Party Extensions

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


#### //Default Extensions

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

## //Examples

### //Tables

The `tables` extension of the *Python-Markdown* parser is activated by default,
but is currently **not** available in *Markdown2*.

The syntax was adopted from the [php markdown project](http://michelf.ca/projects/php-markdown/extra/#table),
and is also used in github flavoured markdown.

| Year | Temperature (low) | Temperature (high) |  
| ---- | ----------------- | -------------------|  
| 1900 |               -10 |                 25 |  
| 1910 |               -15 |                 30 |  
| 1920 |               -10 |                 32 |  


### //Wiki Tables

If you are using *Markdown2* with the `wiki-tables` extra activated you should see a table below:

|| *Year* || *Temperature (low)* || *Temperature (high)* ||  
||   1900 ||                 -10 ||                   25 ||  
||   1910 ||                 -15 ||                   30 ||  
||   1920 ||                 -10 ||                   32 ||  


### //Definition Lists

This example requires *Python Markdown*'s `def_list` extension.

Apple
:   Pomaceous fruit of plants of the genus Malus in 
    the family Rosaceae.

Orange
:   The fruit of an evergreen tree of the genus Citrus.


## //About

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


/GitHub Flavored Markdown
==========================
0. https://github.com/github/docs
0. https://docs.github.com/en/get-started/writing-on-github
1. https://help.github.com/articles/github-flavored-markdown/
2. https://docs.gitlab.com/ee/user/markdown.html#tables
3. https://github.com/facelessuser/MarkdownPreview
4. https://github.github.com/gfm/#tables-extension-

```sh
git clone --depth=1 git@github.com:github/docs /c/dl/pl/github_docs;
```

If you use the Github parser, you can use some of [Github Flavored Markdown][gfm] syntax :

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

## //GitHub MD Advanced fromating: Alerts
https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting

Alerts are a Markdown extension based on the blockquote syntax that you can 
use to emphasize critical information. On GitHub, they are displayed with 
distinctive colors and icons to indicate the significance of the content.

Use alerts only when they are crucial for user success and limit them to one or 
two per article to prevent overloading the reader. Additionally, you should avoid 
placing alerts consecutively. Alerts cannot be nested within other elements.

To add an alert, use a special blockquote line specifying the alert type, followed 
by the alert information in a standard blockquote. Five types of alerts are available:

    > [!NOTE]
    > Useful information that users should know, even when skimming content.

    > [!TIP]
    > Helpful advice for doing things better or more easily.

    > [!IMPORTANT]
    > Key information users need to know to achieve their goal.

    > [!WARNING]
    > Urgent info that needs immediate user attention to avoid problems.

    > [!CAUTION]
    > Advises about risks or negative outcomes of certain actions.


## //Organizing information with tables

You can build tables to organize information in comments, issues, pull requests, and wikis.

You can create tables with pipes | and hyphens -. Hyphens are used to create each column's header, while pipes separate each column. You must include a blank line before your table in order for it to correctly render.


    | First Header  | Second Header |
    | ------------- | ------------- |
    | Content Cell  | Content Cell  |
    | Content Cell  | Content Cell  |

Screenshot of a Markdown table with two columns of equal width as rendered on GitHub. Headers render in boldface, and alternate content rows have gray shading.

The pipes on either end of the table are optional.

Cells can vary in width and do not need to be perfectly aligned within columns. There must be at least three hyphens in each column of the header row.

    | Command | Description |
    | --- | --- |
    | git status | List all new or modified files |
    | git diff | Show file differences that haven't been staged |

Screenshot of a Markdown table with two columns of differing width as rendered on GitHub. Rows list the commands "git status" and "git diff" and their descriptions.

If you are frequently editing code snippets and tables, you may benefit from enabling a fixed-width font in all comment fields on GitHub. For more information, see "About writing and formatting on GitHub."

Formatting content within your table
You can use formatting such as links, inline code blocks, and text styling within your table:

    | Command | Description |
    | --- | --- |
    | `git status` | List all *new or modified* files |
    | `git diff` | Show file differences that **haven't been** staged |

Screenshot of a Markdown table with two columns of differing width as rendered on GitHub. The commands "git status" and "git diff" are formatting as code blocks.

You can align text to the left, right, or center of a column by including colons : to the left, right, or on both sides of the hyphens within the header row.

    | Left-aligned | Center-aligned | Right-aligned |
    | :---         |     :---:      |          ---: |
    | git status   | git status     | git status    |
    | git diff     | git diff       | git diff      |

Screenshot of a Markdown table with three columns as rendered on GitHub, showing how text within cells can be set to align left, center, or right.

To include a pipe | as content within your cell, use a \ before the pipe:

    | Name     | Character |
    | ---      | ---       |
    | Backtick | `         |
    | Pipe     | \|        |

Screenshot of a Markdown table as rendered on GitHub showing how pipes, which normally close cells, can display inside cells when prefaced by a backslash.



/Pandoc
============

Markdown reader - support new table features #6317 https://github.com/jgm/pandoc/issues/6317

Add support for (at least some of) the new table features introduced in pandoc-types/pull/66.

It would be good if at least one of pandoc markdown's table syntax would support that: grid tables seem like the obvious candidate. Something like:

+---------------+---------------+--------------------+
| Fruit         | Price         | Advantages         |
+===============+===============+====================+
| rowspan                       | - built-in wrapper |
|                               | - bright color     |
+---------------+---------------+--------------------+
| subheader     | Price         | Advantages         |
+===============+===============+====================+
| Oranges       | colspan       | - cures scurvy     |
|               |               | - tasty            |
+---------------+               +--------------------+
|| Row header   |               | - cures scurvy     |
||              |               | - tasty            |
+---------------+---------------+--------------------+
| Table foot    | Price         | Advantages         |
+===============+===============+====================+

This would roughly tick off the following of the new table features:

 rowspan, colspan (note that pandoc markdown's grid tables already support this now)
 table head and foot (note that pandoc markdown's grid tables already support this now)
 multiple header lines
 row headers
 table attributes
 captions that allow block-level content and include an optional short caption
It does have the disadvantage that if the last rows look like header rows, they are simply treated as the table foot.


/Table Editor
=============

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



//Overview
----------

_Table Editor_ is a package for the _Sublime Text 2_ and _Sublime Text 3_ editor for edit text tables. _Table Editor_ is has almost the same keys as Emacs-org mode table editor.

_Table Editor_ allow on easy way edit text table, it allows:

*   navigate with tab/shift tab
*   insert/delete row
*   insert/delete column
*   auto align number cells to right, text cells to left, header cells to center
*   move column left/right
*   move row up/down
*   split long cell
*   join two rows into one
*   convert selected CSV region into table
*   direct support subset of wiki table syntax
    *   Simple
    *   EmacsOrgMode
    *   Pandoc(Grid Tables, Pipe Tables)
    *   Multi Markdown(support colspan in alpha status)
    *   reStructuredText
    *   Textile(support colspan and rowspan in alpha status)
*   auto detect table syntax by view syntax
*   switch between different table syntax on the fly
*   temporary disable/enable table editor for current view
*   customize table syntax with settings
*   support CJK : Chinese, Japanese, Korean(alpha status)
*   show demo film in scratch view

//Textile
---------
Alignment:

    |_.   Name  |_. Age |_. Custom Alignment Demo |
    | Anna      |    20 |<. left                  |
    | Alexander |    27 |>.                 right |
    | Misha     |    42 |=.         center        |
    |           |       |                         |

Colspan(alpha status):

    |\2. spans two cols   |
    | col 1    | col 2    |

Rowspan(alpha status):

    |/3. spans 3 rows | a |
    | b               |
    | c               |

Compound Textile table cell specifiers:

    |_\2.  spans two cols |
    |_<. col 1 |_>. col 2 |


//Usage
-------

### //Basic editing

For first time you should enable table editor with command palette:

*   click _ctrl+shift+p_
*   select _Table Editor: Enable for current syntax_ or _Table Editor: Enable for current view_ or “Table Editor: Set table syntax … for current view”

Then when _Table Editor_ is enabled, type

| Name | Phone |
|-

Then press _Tab_ key, you will get pretty printed table

| Name | Phone |
|------|-------|
| \_    |       |

Then fill a data and press _Tab_ key to navigate to next field or add new row if necessary

|    Name   |   Phone   |
|-----------|-----------|
| Anna      | 123456789 |
| Alexander | 987654321 |
| \_         |           |

For make table a bit faster faster type only

|Name|Phone

And then click _ctrl+k,enter_.

| Name | Phone |
|------|-------|
| \_    |       |

_Table Editor_ support double hline with character '='. Type below

| Name | Phone |
|=

and click _tab_ key

| Name | Phone |
|======|=======|
| \_    |       |

Then fill rows and click _ctrl+k,enter_ each time when cursor in _Phone_ position

|    Name   |   Phone   |
|===========|===========|
| Anna      | 123456789 |
|-----------|-----------|
| Alexander | 987654321 |
|-----------|-----------|
| \_         |           |

Additional to _tab_ and _shift+tab_ use _enter_ for move cursor down and insert new row if necessary.

### //Work with columns

Let's we have a table with columns _| Name | Phone |_, and you decide insert column _| Age |_ before column _| Phone |_. For do this set cursor position into any rows in column Phone

|    Name   |   Phone   |
|-----------|-----------|
| Anna      | 123456789 |
| Alexander | 987654321 |
|           | \_         |

Click _alt+shift+right_

|    Name   |   |   Phone   |
|-----------|---|-----------|
| Anna      |   | 123456789 |
| Alexander |   | 987654321 |
|           | \_ |           |

Fill _| Age |_ column

|    Name   | Age |   Phone   |
|-----------|-----|-----------|
| Anna      |  32 | 123456789 |
| Alexander |  28\_| 987654321 |
|           |     |           |

Then after some thought you decide switch columns _| Age |_ and _| Phone |_. For do this, you can click _alt+right_ when cursor in the _| Age |_ column or you can click _alt+left_ when cursor position in the _| Phone |_ column

|    Name   |   Phone   | Age |
|-----------|-----------|-----|
| Anna      | 123456789 | 32  |
| Alexander | 987654321 | 28\_ |
|           |           |     |

Now cursor position in the _| Age |_ column, when you click _alt+shift+left_, column _| Age |_ will be deleted

|    Name   |   Phone    |
|-----------|------------|
| Anna      | 123456789  |
| Alexander | 987654321\_ |
|           |            |

### //Work with rows

Let's we have a table

|    Name   |   Phone   | Age |
|-----------|-----------|-----|
| Anna      | 123456789 | 32\_ |
| Alexander | 987654321 | 28  |
|           |           |     |

For insert row bellow current cursor position click _alt+shift+down_

|    Name   |   Phone   | Age |
|-----------|-----------|-----|
|           |           | \_   |
| Anna      | 123456789 | 32  |
| Alexander | 987654321 | 28  |
|           |           |     |

For delete row click _alt\_shift+up_

|    Name   |   Phone   | Age |
|-----------|-----------|-----|
| Anna      | 123456789 | 32\_ |
| Alexander | 987654321 | 28  |
|           |           |     |

Some time you cell value became to long as in next example column _| Position |_

|    Name   |   Phone   | Age |             Position             |
|-----------|-----------|-----|----------------------------------|
| Anna      | 123456789 |  32 | Senior Software Engineer\_        |
| Alexander | 987654321 |  28 | Senior Software Testing Engineer |
|           |           |     |                                  |

You like to split value of column _| Position |_ into several rows. First let's click _ctrl+k,-_ for insert hline after cursor position

|    Name   |   Phone   | Age |             Position             |
|-----------|-----------|-----|----------------------------------|
| Anna      | 123456789 |  32 | Senior Software Engineer\_        |
|-----------|-----------|-----|----------------------------------|
| Alexander | 987654321 |  28 | Senior Software Testing Engineer |
|           |           |     |                                  |

Then let's move cursor to before word _Engineer_ in the first row and click _alt+enter_

|    Name   |   Phone   | Age |             Position             |
|-----------|-----------|-----|----------------------------------|
| Anna      | 123456789 |  32 | Senior Software                  |
|           |           |     | Engineer\_                        |
|-----------|-----------|-----|----------------------------------|
| Alexander | 987654321 |  28 | Senior Software Testing Engineer |
|           |           |     |                                  |

Move cursor before word _Software_ in the first row and click _alt+enter_ again

|    Name   |   Phone   | Age |             Position             |
|-----------|-----------|-----|----------------------------------|
| Anna      | 123456789 |  32 | Senior                           |
|           |           |     | Software Engineer\_               |
|-----------|-----------|-----|----------------------------------|
| Alexander | 987654321 |  28 | Senior Software Testing Engineer |
|           |           |     |                                  |

Move cursor to the first row after word _Senior_ and click _ctrl+j_

|    Name   |   Phone   | Age |             Position             |
|-----------|-----------|-----|----------------------------------|
| Anna      | 123456789 |  32 | Senior Software Engineer\_        |
|-----------|-----------|-----|----------------------------------|
| Alexander | 987654321 |  28 | Senior Software Testing Engineer |
|           |           |     |                                  |

Let's move cursor with tab key to second row(hlines skipped automatically) and click _ctrl+k,enter_

|    Name   |   Phone   | Age |             Position             |
|-----------|-----------|-----|----------------------------------|
| Anna      | 123456789 |  32 | Senior Software Engineer         |
|-----------|-----------|-----|----------------------------------|
| Alexander | 987654321 |  28 | Senior Software Testing Engineer |
|-----------|-----------|-----|----------------------------------|
| \_         |           |     |                                  |

### //Convert CSV into table

Select some text with CSV data

Name,Age
Anna,20
Alexander,27

and then click _ctrl+k, |_ to convert CSV data into table, you will get

| Name      | Age |
| Anna      | 20  |
| Alexander | 27  |

_Convert CSV into table_ command automatically recognize CSV dialect, for example you can enter data separated by _tab_. If _Convert CSV into table_ command can not recognize CSV dialect you will get one row table where selected line is a row in the table.

### //Temporary Enable/Disable _Table Editor_ for current view

Some time you like temporary enable table editor and then disable it. It is useful if you edit _Python_ or _Java_ code and like to pretty print table, then continue edit your code. For do this you should:

*   Click _ctrl+shift+p_ for show command palette
*   Select _Table Editor: Enable for current view_

Then after you edit table you can disable Table Editor

*   Click _ctrl+shift+p_ for show command palette
*   Select _Table Editor: Disable for current view_

### //Supported Syntaxes

Table editor support next table syntax:

*   Simple
*   EmacsOrgMode
*   Pandoc
*   Multi Markdown
*   reStructuredText
*   Textile

**Simple**

|    Name   | Age |
|-----------|-----|
| Anna      |  20 |
| Alexander |  27 |

**EmacsOrgMode**

|    Name   | Age |
|-----------+-----|
| Anna      |  20 |
| Alexander |  27 |

**Pandoc Grid Tables**

+-----------+-----+
|    Name   | Age |
+===========+=====+
| Anna      |  20 |
+-----------+-----+
| Alexander |  27 |
+-----------+-----+

**Pandoc Pipe tables**

Pandoc Pipe tables is the same as Multi Markdown, you have to switch into Multi Markdown if you use this table style.

**Multi Markdown/Pandoc Pipe tables**

Alignment:

|    Name   | Phone | Age Column |
| :-------- | :---: | ---------: |
| Anna      |   12  |         20 |
| Alexander |   13  |         27 |


| Right | Left | Default | Center |
| ----: | :--- | ------- | :----: |
|    12 | 12   |      12 |   12   |
|   123 | 123  |     123 |  123   |
|     1 | 1    |       1 |   1    |

Colspan(alpha status):

|              |           Grouping          ||
| First Header | Second Header | Third Header |
| ------------ | :-----------: | -----------: |
| Content      |         \*Long Cell\*         ||
| Content      |    \*\*Cell\*\*   |         Cell |
| New section  |      More     |         Data |
| And more     |    And more   |              |
| :---------------------------------------: |||

**RestructuredText**

|    Name   | Age |
+-----------+-----+
| Anna      |  20 |
| Alexander |  27 |

**Textile**

Alignment:

|\_.   Name  |\_. Age |\_. Custom Alignment Demo |
| Anna      |    20 |<. left                  |
| Alexander |    27 |>.                 right |
| Misha     |    42 |=.         center        |
|           |       |                         |

Colspan(alpha status):

|\\2. spans two cols   |
| col 1    | col 2    |

Rowspan(alpha status):

|/3. spans 3 rows | a |
| b               |
| c               |

Compound Textile table cell specifiers:

|\_\\2.  spans two cols |
|\_<. col 1 |\_>. col 2 |

Note: Formatting and work with textile tables with colspan and rowspan has alpha status.

### //Switch table syntax on the fly

Table Editor syntax detected by user settings and if it is not specified recognized automatically by view syntax. But you can change table syntax on the fly with command palette:

*   Table Editor: Set table syntax 'Simple' for current view
*   Table Editor: Set table syntax 'EmacsOrgMode' for current view
*   Table Editor: Set table syntax 'Pandoc' for current view
*   Table Editor: Set table syntax 'MultiMarkdown' for current view
*   Table Editor: Set table syntax 'reStructuredText' for current view
*   Table Editor: Set table syntax 'Textile' for current view

Above commands automatically enable table editor for current view.

### //CJK support

Table Editor supports CJK languages. If you use CJK language you have to set monospaced fonts which supports CJK characters. For example next fonts work on my windows computer

*   NSimSun
*   FangSong
*   SimHei

"font\_face": "NSimSun",

| column A | column B |     column C    |
+----------+----------+-----------------+
| 这家伙   | 真的     | 棒极了！        |
| この男   | 本当に   | 素晴らしいです! |

Size of CJK glyph in monospaced font equals 2 normal characters.

### //Demo

Press _ctrl+shift+p_ to launch command palette and select _Table Editor: Show demo film in new scratch view_. It is integration test and demo at the same time.

//Installation
--------------

### //Using Sublime Package Control

It is preferred and simplest way for most users.

*   Install Package Control [http://wbond.net/sublime\_packages/package\_control](http://wbond.net/sublime_packages/package_control)
*   Open Package Control
*   Select _Install Package_
*   Find and select _Table Editor_

### //Using Git

If you like work with HEAD you can locate _Table Editor_ in your packages directory.

*   Go to your Packages directory, you can locate to your Packages directory by using the menu item _Preferences -> Browse Packages…_
*   Inside the Packages directory, clone the SublimeTableEditor repository using the command below:

_git clone [https://github.com/vkocubinsky/SublimeTableEditor.git](https://github.com/vkocubinsky/SublimeTableEditor.git) “Table Editor”_

### //Download Manually

*   Download the files using the GitHub .zip download option.
*   Unzip the files and rename the folder to _Table Editor_.
*   Copy the folder to your Sublime Text 2 Packages directory.

//Settings
----------

You can customize _Table Editor_ by change settings. For do this you have to modify settings file (see [http://docs.sublimetext.info/en/latest/customization/settings.html](http://docs.sublimetext.info/en/latest/customization/settings.html)).

For apply changes for all files you can open user settings with menu “Preferences -> Settings - User”. For apply changes for specific syntax you can open syntax settings with menu “Preferences -> Settings - More -> Syntax Specific - User”.

### //Enable Table Editor

By default _Table Editor_ is disabled. For enable _Table Editor_ you have to set

{
    "enable\_table\_editor": true
}

Usually you will enable _Table Editor_ for specific syntax. You can do this very easy if launch command palette by _ctrl+shift+p_ and select _Table Editor: Enable for current syntax_.

### //Set Table Syntax

You can control table syntax with settings

{
    // Set table syntax for Table Editor.
    // Valid options are: "Simple", "EmacsOrgMode", "Pandoc", "MultiMarkdown",
    //                    "reStructuredText", "Textile"
    "table\_editor\_syntax": "Simple"
}

By default TableEditor auto detects table syntax by view syntax with next rules:

*   Markdown, MultiMarkdown -> MultiMarkdown
*   reStructuredText -> reStructuredText
*   Textile -> Textile
*   Other -> Simple

### //Override Table Border For Simple Syntax

You can override table border style for Simple Syntax. Table editor supports next table border styles:

*   simple: _|—|—|_
*   emacs: org mode _|—+—|_
*   grid: _+—+—+_

{
    // Override border style for Table Editor
    // Valid options are: "simple", "grid", "emacs"
    "table\_editor\_border\_style": "simple"
}

### //Override custom column alignment for Simple Syntax

This settings by default is enabled, but you can disable it

{
    // If table\_editor\_custom\_column\_alignment is true, supports '<', '>', '#' column alignment
    "table\_editor\_custom\_column\_alignment": false
}

With this feature you can explicit set justification with format characters

*   '<' - left
*   '>' - right
*   '#' - center

as in next example

| column 1 | column 2 | column 3 |
| <<<<<<<< | >>>>>>>> | ######## |
|----------|----------|----------|
| 1        |    row 1 |    c1    |
| 2        |    row 2 |    c2    |
| 3        |    row 3 |    c3    |

### //Auto align number column to right

By default a number column aligns to right, if you do not like this you can disable it

{

    "table\_editor\_align\_number\_right": false
}

Also you can temporary switch this setting with command palette:

*   Table Editor: Enable 'align\_number\_right' for current view
*   Table Editor: Disable 'align\_number\_right' for current view

### //Detect header column to center

By default a header column aligns to center, if you do not like this you can disable it

{

    "table\_editor\_detect\_header": false
}

Also you can temporary switch this setting with command palette :

*   Table Editor: Enable 'detect\_header' for current view
*   Table Editor: Disable 'detect\_header' for current view

### //Keep space left

Some time you do not like remove leading space from a data in a column, as in next example

| Unordered  List |   Order List  |
|-----------------|---------------|
| - item 1        | # item 1      |
|   - subitem 1   |   # subitem 1 |
|   - subitem 2   | # item 2      |
| - item 2        |   # subitem 2 |
|                 |               |

{
    "table\_editor\_keep\_space\_left": true
}

Also you can temporary switch this setting with command palette:

*   Table Editor: Enable 'keep\_space\_left' for current view
*   Table Editor: Disable 'keep\_space\_left' for current view

### //Intelligent Formating

Intelligent Formatting is an configuration option for table editor. Currently this option have effect only for textiles and multimarkdown tables. It is true by default for textile syntax. You can disable it if you want “json { "table\_editor\_intelligent\_formatting”:false }

Let you have a table

    |\_. Attribute Name |\_. Required |\_. Value Type |
    |                  |            |              |

and want a row spanning all 3 columns

    |\_. Attribute Name |\_. Required |\_. Value Type |
    | \\3. All Events                 |            |              |

after click tab table editor will format table as

    |\_. Attribute Name |\_. Required |\_. Value Type |
    |\\3. All Events                                |

Probably it is expected result and this result of Table Editor with 
"table\_editor\_intelligent\_formatting":true.

But probably you expected

    |\_. Attribute Name |\_. Required |\_. Value Type |   |   |
    |\\3. All Events                                |   |   |

and this result of Table Editor with 
"table\_editor\_intelligent\_formatting":false.

## //Keybinding

\*\*ctrl+shift+a\*\*

        Re-align the table without change the current table field. Move cursor to begin of the current table field.

\*\*tab\*\*

        Re-align the table, move to the next field. Creates a new row if necessary. 

\*\*shift+tab\*\*

        Re-align, move to previous field.

\*\*enter\*\*

        Re-align the table and move down to next row. Creates a new row if necessary.
        At the beginning or end of a line, enter still does new line.

\*\*alt+left\*\*

        Move the current column left.

\*\*alt+right\*\*

        Move the current column right.

\*\*alt+shift+left\*\*

        Kill the current column.

\*\*alt+shift+right\*\*

        Insert a new column to the left of the cursor position.

\*\*alt+shift+up\*\*

        Kill the current row or horizontal line.

\*\*alt+shift+down\*\*

        Insert a new row above the current row. 

\*\*alt+up\*\*

        Move current row up

\*\*alt+down\*\*

        Move current row down

\*\*ctrl+k, -\*\*

        Insert single horizontal line below current row. 
        Doesn't make sense and doesn't supported for Textile syntax

\*\*ctrl+k, =\*\*

        Insert double horizontal line below current row. 
        Doesn't make sense and doesn't supported for Textile syntaxes


\*\*ctrl+k, enter\*\*

        Insert a horizontal line below current row, and move the cursor into the row below that line. 
        Doesn't make sense and doesn't supported for Textile syntaxes


\*\*ctrl+k, |\*\*

        Convert selected CSV region into table

\*\*alt+enter\*\*

        Split rest of cell down from current cursor position,
        insert new line bellow if current row is last row in the table or if next line is hline

 \*\*ctrl+j\*\*

        Join current row and next row into one if next row is not hline


## //License

Package is distributed by Apache 2.0 License

## //Testing

Test environment

- Ubuntu 12.04 64bit on VirtualBox
- Windows 7 64bit
- OS X 10.8.4

