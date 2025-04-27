

# 🚩 让世界多一份 Vim 教程：Topdown 式入门姿势
https://vscode.dev/github.com/kxzk/library/blob/master/vim

Vim 是一个开源的自动化文本编辑软件，历久弥新，现在迎来了 Vim 9.0。这是一篇为写作、阅读者
用好 Vim 这款自动化文本工具而作的教材。内容涉及 Vim 软件基本结构说明，编程与自动化思维应用。
写作目的是解决当前 Vim 文档以及公开资料中缺少一种系统化视角的教学材料。普遍地以一种盲人摸象
式的形式组织文字，更多的是过于关注每个琐碎功能细节，而缺少对 Vim 本质的把握。诚然，对于研究
任何一个大型的系统，开始就是一种自知或者不自知的盲人摸象式的学习过程，因为知识的掌握不可突变。
但是如果以一个成熟者的心态角度，给起步时的自己献礼，那么这种原原本本呈现自己曾经走过一遍的
摸象之路的做法，肯定不是最佳的选择。我想的是，应该从起步是的那种朦胧状态态开始，为过去的自己
重新设计一条更正确的道路。当然，这需要创作者清晰记得自己的走过来的路程，而不是吃上水了就忘记
打井的人，这种比喻好像不那么贴切。

本文会在一些地方对 Vim 官方文档内容组织上的问题作出批评。但是必需指出，产品文档与本文的写作
动机完全不同，作品文档旨在全面阐述功能特性，内容组织的逻辑是按产品组成结构来编排的。而不同于
本文的创作动机，完全是以应用目标为导向，或者说是发挥 Vim 这个编辑软件的特长而进行内容编排。

这里立个愿：有生之年出一本《让世界多一份教程》。汇报一下自己所喜爱的开源软件作品，想必这是给
开源社区做的最好的工作了。目前在 B 站上已经发布了部分收录在 OpenDocs 电子仓库的内容：

• [《让世界多一份 Graphviz 教程！》](https://www.bilibili.com/opus/1033642025060139017)
• [《让世界多一份 Inkscape 教程：SVG 漫谈》](https://www.bilibili.com/read/cv34045046/)

回到正题，以下是 Vim 的部分核心功能：

• 开放的软件数据模型：tabpage/window/popup/buffer/register；
• 多种工作模式（状态，mode），包括最基本的：普通模式、命令模式、编辑模式（insert）等等；
• Vim Script 专用脚本、Shell 脚本支持，与开放的外部脚本接口，包括 Python、Lua 等等；
• 可编程命令、键盘按键序列、命令自动化与自定义，程序化响应用户输入，支持命令与按键令映射（map）；
• 完善的在内置帮助文档，文本格式，带有 tag 标记、支持帮助主题、关键词跳转；

如果以自动机理论的角度来总结 Vim 编辑器，用一句来说就是：有多种模式与用户互动的软件自动机器。
可以将看作一款即时响应的编程机器，通用编程行业中称为交互式 Read-Eval-Print Loop (REPL)。
也就是用户输入脚本代码，解析器（Vim）直接给出运算结果或者响应，然后循环整个过程直到用户退出。
因此，Vim 是一个自带编程功能文本编辑器，它本身就是一个 Vim 脚本引擎！

Vim 项目伴随整个电子计算机发展历史，这使得它继承了非常多的历史遗产，直接使得它的项目变得复杂。
这一点直接体现在它的脚本编程上，可以直接查询 [Vim 源代码](https://github.com/vim/vim)
了解细节技术，包括 runtime 目录下的运行时初始化脚本以及各种功能配置脚本。

开始之前先到官方网站下载 [Vim](https://www.vim.org/) 并解压安装到自己的系统中，并且将
vim 命令所在的目录添加到系统的 PATH 环境变量中，方便执行命令。

但是 Neovim 通过允许插件使用“更通用的语言”在 Lua 中编写插件来超越 Vim 。并不是说 Vim 的内置语言不好，而是如果您想要类似 IDE 的功能，设置会变得很复杂。而且，对于实际的编程语言，这种配置比 Vim 更容易。经过 20 多年的发展，Vim 已经积累了超过 30 多万行 C89 代码，单靠几个人的
力量维护显然不切实际，应该适时引入外部力量。

作为一个 Vim 分叉项目，[Neovim](https://github.com/neovim/neovim) 也是不错的选择。
由于 Vim 目前的代码库的管理存在两个问题：Vim 的首席开发人员没有将其培养一个社区友好的项目，Vim 的主要开发和讨论还是在邮件列表上。与 Neovim 相比，Vim 代码库的可维护性较差。NeoVim
自诞生以来，它就专注于提高自己的扩展性与易用性，例如内置终端、异步执行这两个比较重要的功能、
弹出窗口（用于显示调试消息和自动完成建议）。浮动弹窗这个功能现在 Vim 也有，但是它是受到强大
的社区“压力”后才被 Vim 采用。

Neovim 内嵌的可编程 terminal emulator 可以像一般文档一样使用 Vim 功能对其进行编辑，
只需通过 `:set modifiable` 配置为读写状态。使用 `:terminal` 进入终端执行各种操作，
使用 `<C-\><C-N>` 键或者鼠标拖选可以让终端进入一般模式或者区块选择模式，然后再通过进入
插入模式和各种按键 (a A i I 等等) 来继续执行 shell 命令操作。

注意：Windows 系统中，Neovim 默认设置 `shell=cmd.exe`，`shellcmdflag=/s /c`。
如果两都不匹配，比如 shell 变成 bash，那么就可能出现命令解释错误，应该修改配置：

    " avoid: /usr/bin/bash: /s: No such file or directory
    if executable('bash')
      set shell=bash
      set shellcmdflag=-c
    endif

Neovim 终端文档： [Terminal](https://neovim.io/doc/user/terminal.html)


## First Things First

在正式使用 Vim 程序之前，需要了解一些 Vim 软件结构设计方面的知识。我称之为 Vim Layout：
Vim 是一个自动机器，是机器就有不同的工作状态，只能通电了才能工具。Vim 也一样，它的“电力”
就是用户输入，也称用户交互。第一个要掌握的 Vim 技能应该是“开机”和“关机”。首先，执行命令
打开 Vim 主界面：

```vim
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│~                         VIM - Vi IMproved                           │
│~                                                                     │
│~                         version 9.0.2070                            │
│~                      by Bram Moolenaar et al.                       │
│~       Vim is open source and freely distributable information       │
│~                                                                     │
│~                  Help poor children in Uganda!                      │
│~         type   :help iccf< Enter>      for information              │
│~                                                                     │
│~         type   :q<Enter>               to exit                      │
│~         type   :help<Enter> or         for on-line help             │
│~         type   :help version9<Enter>   for version info             │
│~                                                                     │
│~                                                                     │
│~                                                                     │
└──────────────────────────────────────────────────────────────────────┘
```

欢迎屏幕只显示了 Vim 版本信息和几个帮助命令，还有一个教用户退出 Vim 的命令 `:<Enter>`。如果
用户没看清楚，或者误敲按键，那么新手用户就有可能错失首先正确关闭 Vim 的机会。刚进入的 Vim 程序
此时处于普通模式，也可以称为正常模型（Normal Mode）。可以用状态图来表示 Vim 的工作状态，这里
就以最基本的 Normal、Insert、Command-line 等状态来说明 Vim 的自动化工作模型。更多的模式
操作可以参考 intro.txt mode-switching 文档。

• 正常模式：或称编辑、插入模式，Vim 等待用户按键，包括字符键和组合快捷键，以执行各种命令。
• 插入模式：Vim 接收用户从键盘中键入的字符串，可以使用快捷键执行功能或者 `<Esc>` 返回正常模式。
• 命令模式：用户在正常模式下输入 `:` 进入命令模式，此时可以在单行文本框中输入 Vim 内部命令。
• 可视模式（visual mode）：可以通过控制光标选择一段连续（以字或行为单位）的内容。
• 区块模式（visual block mode）：可以通过控制光标在多行内容上框选一块区域的内容。

特别地，在插入模式下，为了方便临时执行命令而不是切换到命令模式，Vim 提供 `<CTRL-O>` 快捷键。
为了区别这个专用于插入模式下的组合键，文档中使用带有模式简称前缀的标记 `i_CTRL-O`。这种临时
方式只能执行一些简单的命令，比如修改、删除、内容并行等等。

这里使用 `<Enter>` 这样的尖括号包裹的内容表示一个键盘上的功能键，并且组合键开头的修饰键可以
使用 `<C><M><S>` 简写记号（notation），分别表示 Ctrl、Alt/Meta、Shift 按键。这是 Vim
的键盘记号约定，其它字符则按其字面量表示，在设置键盘按键映射时也使用这样的表达形式。命令中的 
`:` 对应 Vim 命令模式中的冒号。

                            ┌───────────────┐     ┌───────────────────┐
                            │  Visual mode  │     │ Visual block mode │
                            └───────────────┘     └───────────────────┘
                              │  v/V/gv   │          ^   <Ctrl-v>  │<Esc>
                              │   gh/gH   │          │  g<Ctrl-h>  │<Esc>
                              │           │          │  g<Ctrl-H>  │<Esc>
                              │           └──────────┤             v
                        <Esc> │                   ┌───────────────────┐
           ┌──────────────────└──────────────────>│    Normal Mode    │
           │                                      └───────────────────┘
    ┌──────────────┐                                      │  ^   
    │ Command-Line │                 Insert mode commands │  │ <Esc>
    └──────────────┘                                      │  │ <CTRL-C>
           │               :start                 ┌───────v───────────┐
           └─────────────────────────────────────>│    Insert Mode    │
                                                  └───────────────────┘

其中的 Insert mode commands 代表一组用不同方式插入内容的命令 (inserting)：

    [count]a   Append text after the cursor.
    [count]A   Append text at the end of the line.
    [count]i   Insert text before the cursor.
    [count]I   Insert text before the first non-blank in the line.
    [count]gI  Insert text in column 1.
           gi  Insert text in the same position as where in the current buffer.
    [count]o   Begin a new line below the cursor and insert text.
    [count]O   Begin a new line above the cursor and insert text.

以上示意图有五个框分别代表 Vim 中的 5 种模式，但是可视模式 Visual mode 和 Visual block
两种细分模式可以看作一种，因为它们是为内容选择设置的。内容选择有以字符方式延伸的、有以行为单位
延伸的。还有以块的方式选择，这也就是 block 模式的含义。可以使用以下键盘激活选择模式，后面也称
这种直接通过按键执行的功能称为命令。与命令行输入的命令其实是等价的，它们都可以在 Vim 脚本中找
到同样功能的代码实现形式，它们都是以键盘映射的方式建立按键与功能对应关系。从正常模式到选择模式
转换不仅仅只有一种按键，默认就配置就有 v/V 和 gh/gH 这两对，它们分别为字符选择/行选择模式。
以及 `<Ctrl-v>` `g<Ctrl-h>` `g<Ctrl-H>` 等按键进入块反选模式。额外还有一个 gv 命令，
它的作用是重选原来选择的内容，包括字符选项、行选择或者区块选择。

一般在选择模式下选择好内容后，下一步就是要做内容的复制（y）、删除（d）、改动（c）等动作，但现在
重点不是这些内容，它们将安排到后续 Fly in the Vim World 部分细讲。

Vim 的命令都是可编程的，因为它们本身就是暴露到命令行中的 Vim 脚本环境中的函数，也就是说，
使用命令就是在调用 Vim 内置函数，只是它们的语言形式不同。Vim 脚本中使用内置的函数时，没有
省略一说，但是为了方法用户使用，Vim 命令行中使用的命令却有简写形式和完整形式，并且在文档中
使用方括号包裹可简写的部分。比如内容替换命令 `:s[ubstitute]`，这只是它的名称部分，命令的
完整形式还包括前缀参数和后缀参数。由于插入命令实在太常用，所以它只提供最简写的形式，命令名称
前面的 `[count]` 就是一个前缀参数，表示一个数值，用于控制命令执行的重复次数。这是其中一种
参数类型，还有控制内容行号范围的，比如 `:[range]go[to]` 命令，跳转到文件指定字节数的位置。

举例来说：

• 在当前行末端添加 10 个 x 字符：`:10Ax<Esc>`；
• 或者添加 10 行空内容：`10A<Enter><Esc>`。

一旦设置好参数 ([count])，Vim 状态机记下此值，从正常模式进入编辑模式，输入的所有内容，直到
用户按下 `<Esc>` 返回到正常模式前的内容都是会被重复的内容。也可在插入模式使用 `<Ctrl-O>`
临时执行命令，然后返回编辑状态，而不是切换到命令模式。这个功能方便需要频繁使用命令编辑的情况。

还有 `:[range]gg` 命令，用于跳转到指定行，或者默认跳转到首行。跳转到末行使用 `:G` 命令。
注意，`gg` 命令是一个使用了全局前缀的命令，即首个 `g` 其实是 Commands starting with 'g'。
还有很多命令使用 g 作为前缀的。并且这些命令很容易和全局命令 `:g[lobal]` 搞混，这是一个全局
重复控制命令，用于重复执行其它命令。它的完整形态是 `:[range]g[lobal]/{pattern}/[cmd]`，
因为和替换命令一样涉及了正则表达式匹配规则，所以将在后面一起说明。

以上是通过键盘常规字符来触发 Vim 命令的常规操作，此外，Vim 还可以设置组合键来执行命令操作，
而不必在命令模式下输入。比如 `CTRL-W_v` 或者 `CTRL-W_s`，快捷键对应的是以下两条用于窗口
分割的命令，分别是竖直方向分割和水平方向分割，前缀参数 [N] 指定高/宽度的行列数：

• :[N]vs[plit] [++opt] [+cmd] [file]
• :[N]sp[lit] [++opt] [+cmd] [file]

除了这么多的执行命令的形式，在按键映射设置文档（map.txt）最后一节，还祭出了用户自定义命令
这一强大的功能，它被大量应用于插件开发。还有专门一个 autocmd.txt 文档解说的自动化命令，
看它们的参数就知道有复杂，这也许可以看出来它的功能强大。既有事件处理，又有正则模式匹配，还
可以根据文件类型来设置要执行的命令。

• :com[mand][!] [{attr}...] {cmd} {repl}
• :au[tocmd]! [group] {event} {pat} [++once] [++nested] {cmd}


好了到这里，已经完成基本的内容编辑功能，现在来保存内容，并可以退出 Vim 了。执行以下命令：
`w noname.txt | q`，这是两条命令，在命令行中使用 `|` 来分隔多条命令。并且这是使用的
是 `:[range]w[rite] [++opt] {file}` 和 `:q[uit]` 命令的简写形式。特别地，当命令
执行时遇到一此条件限制，比如文件存在且设置为只读状态，那么就需要强制执行命令：即在命令名称
后缀一个感叹号，就像 `:q[uit]!` 这样的形式。

```
┌──────────────────────────────────────────────────────────────────────┐
│AAAAAAAAAA                                                            │
│~                                                                     │
│~                                                                     │
│~                                                                     │
│~                                                                     │
│~                                                                     │
│~                                                                     │
│~                                                                     │
│~                                                                     │
│~                                                                     │
│~                                                                     │
│~                                                                     │
│~                                                                     │
│~                                                                     │
│~                                                                     │
│~                                                                     │
│──────────────────────────────────────────────────────────────────────│
│:w noname.txt | q                                                     │
└──────────────────────────────────────────────────────────────────────┘
```

至此，Vim 已经完成了一个编辑器的基本工作流程，打开-编辑-保存-退出。Vim 提供了自动备份功能，
默认在 Unix 系统启用（"yes")，其它系统自动（"auto"）。备份文件以 *.swp 或者存在多个备份
文件（未正常退出导致）时按字母顺序增加，比如 *.swq 或者 *.swr 等等。在下次打开文件时，会
检测备份文件是否存在，如果有则提示用户做选择。使用 'backupcopy' 选项配置。'backupdir'
选项设置备份文件的保存目录，默认优先保存在当前目录，其次是临时目录。

除了最基本的普通模式（normal）、插入模式 (insert)、命令模式 (command-line)，Vim 还有多种
模式，其中一种较特殊的 ex (Ex mode) 精简模式，也可以称之为专家模式。它是古老 ed 编辑器的模拟，
工作方式有和 sed 也类似，编辑器运行界面以行为单位器的可视模式。可以使用 `vim -e` 命令进入，
也可以使用 `:vi[sual]` 和 `:Q` (Ex-mode) 两个命令在一般模式、精简模式间切换。精简模式下
使用一些与常规模式中不同的命令，参考文档 ex-cmd-index。此模式最大的不同就是，缺少即时的响应，
它几乎总保持在命令模式。比如 `:10<Enter>` 跳转到第十行，直接回车进入下一行。可以使用 `:i`
命令在当前行插入内容，但需要按 `<C-C>` 来返回到命令行，并且在编辑的过程中有可能你会不知道当前
所在行。使用 `:1,$p` 命令打印文件所有行内容，使用 `:1,2s/.*/new \0/` 在首两行前插入 new
这个词。精简模式主要是为了方便做单个文件的处理，并且可以快速切换编辑其它的文件。并且当前只打开
一个文件进行编辑，`edit` 命令打开新文件时也同时关闭旧文件。

Vim 提供了一个称为 digraph 的功能用于输入 ASCII 字符集不能表示的符号，包括各种制表符号、各种
语言的字母，数学符号，也包含日语假名。这些符号使用两个可以通过标准键盘输入的 ASCII 字符表示，
有两种方式在 Vim 插入模式中调出这些特殊符号，`CTRL-K {char1} {char2}`，或者激活选项时，
启用的方式：`:set digraph` 然后通过 `char1} <BS> {char2}`  键入。可以在键入时打开帮助
内容中的符号表来参考输入，`:help digraph-table` 或者 `:help digraph-table-mbyte`。
或者参考组织更有条理的 [RFC-1345 Digraphs](https://sheet.shiar.nl/digraphs)。

用户也只可以创建自己的符号表，使用 `:dig` 命令跟着一或两个 ASCII 字符，再跟着 Unicode 编码。
注意，使用空格隔开编码，并且要使用 10 进制的值，可以使用 `:exe` 命令执行表达式，间接使用十六
进制值。这些新添加的符号会自动分配一对 ASCII 编号，可以使用无参数的 `:dig` 命令查询。使用
Unicode 符号，就需要配置 Vim 使用 UTF-8 编码方案。

```vim
dig  :(  9785    " ☹  White Frowning Face  Ctrl-k :(
dig  :)  9786    " ☺  White Smiling Face   Ctrl-k :)
dig  <3  9829    " ♥  Black Heart Suit     Ctrl-k <3

exe 'digr += ae' .. 0x259F " 9631 ▟ QUADRANT
```

Vim 还提供缩略词（abbreviations）输入功能，比如，先定义一个缩略词 `:iab latex \LaTeX`，
然后在插入模式下，输入 `latex<Space>` 就会被替换为 `\LaTeX`，使用非常方便。缩略词功能会
根据 `:set iskeyword?` 命令查询到的当前关键词范围设置来避免错误的替换。默认的关系词设置
`iskeyword=@,48-57,_,192-255` 是一个包含 @ _ 符号、数字和大小写字母组成的字符串。因此，
在输入缩略词时只有按空格后才会被替换，否则它作为一个关键词时会被原样保留。你甚至可以配置缩略
词来输入特殊符号，比如 `:iabbrev omega Ω`，这种功能类似使用内置的 `:digraph` 命令。
缩略词可以绑定到缓冲区对象上，限制其作用范围，比如 `:iabbrev <buffer> --- &mdash;`。
可以配合后面讲解自动命令及脚本来深度定制。


Vim 也支持加密数据，主要是使用 Blowfish 对称（解密加密同密钥）、区块加密块算法，由 Bruce 
Schneider 于 1993 年设计，现已应用在多种加密产品。Blowfish 能保证很好的加密速度，目前为止
没有发现有效地破解方法。输入 `vim -x new_file.txt` 命令就可以开始加密模式，如果输入的密码
与原密码不一致，解密得到的是无效信息。并且使用不同的密码进行多层的加密解码，并不能恢复原始数据。

这里有必要区分一下命令与 Vim 脚本函数的差异。首先，bash 命令行执行时也可以指定 Vim 运行
其内部命令。以下 bash 脚本演示了如何让 Vim 像 sed 这样的命令一样对数据文件进行批处理，
使用的是 Ex mode 的命令：

```bash
vim --cmd "echo 'before init'" -c "echo 'Hi batch mode'|quit"
vim -E -s some.dat < some.vim
vim -s /dl/abc.vim

vim -E -s some.dat <<EOF
   :%substitute/home.html/index.html/
   :update
   :quit
EOF
```

命令行中执行 Vim 命令和脚本的区别主要在特殊符号的处理上。两个环境都可以使用 `"` 双引号作注解，
Vim9 则以 # 作为脚本中的注解符号，但其本身在命令行中作交替文件名使用，参考 cmdline-special。
竖线符号是 :bar 命令分隔符号，脚本中映射按键时就需要转义表达 `\|`。它不是 Shell 的管道 pipe。
命令行与脚本区别除了特殊符号外，一般语法是一致的，比如 `:set shortmess=-S` 可以在脚本中写成
`set shortmess=-S`，它们的作用一样，都是将 S 标志从选项中移除。


## Help on Vim Help

用好 Vim 的第一步应该就是掌握内置的 txt 格式的帮助文档，为了方便阅读，可以按照 help.txt
这个入口文档中的目录结构将其合并到一个文件。[vim_9.0.doc](vim_9.0.doc) 是已经合并的
并且排除了体积较大的版本变更相关内容，即不含 version4.txt ~ version9.txt 这些文档。
为了便于使用，可以在配置脚本中映射快捷键以打开这个合集帮助文档，具体原理在后面的小节说明：

```vim
"" vim ~/.vimrc
"" Press Ctrl+H to view Vim 9.0 Documentation all-in-one version
map <C-H> :edit /c/opendocs/vim_9.0.doc\|set filetype=help
```

文档可以划分为几个部分：

• 官方自带的多国语言入门教程，可以使用 `vimtutor zh` 这样的命令运行它。
• 帮助入口（help)，此部分是帮助文档的总目录。
• 关于帮助命令、文档的使用（helphelp)，说明 help 命令的使用。
** `:h[elp] {subject}` 打开指定证明 {subject} 的帮助文档；
** `:helpc[lose]` 关闭现有的帮助文档窗口；
** `:helpg[rep] {pattern}[@xx]` 在主题模糊的情况下，搜索所有 txt 帮助文档；
• 用户手册（user-manual)，罗列了完整的 Vim 命令，主要用于查阅。
** 入门基础，喜好配置，Getting Started, `usr_01.txt` - `usr_12.txt`
** 探索完整的界面功能，Editing Effectively, `usr_20.txt` - `usr_32.txt`
** 命令定义、界面调整、语法高亮，Tuning Vim, `usr_40.txt` - `usr_45.txt` 
** 插件开发，Writing Vim scripts, `usr_50.txt` - `usr_52.txt`
** Making Vim Run, `usr_90.txt`
• 参考手册（reference_toc)，此部分给入门级用户阅读，基囊了基本的 Vim 知识点。
** 基本参考，`intro.txt`
** 命令索引，`index.txt`
** 标记索引，`help-tags.txt`
** 常用功能，`howto.txt`
** 以及其它基础高级参考内容，Basic editing & Advanced editing
• 快速参考（quickref)，此部分给半生不熟的用户用来快速查阅各种命令。

你阅读的第一个完整的 Vim 脚本可能是 `vimtutor` 命令（脚本）中调用的 `tutor.vim`，它的
目的是拷贝教程源文件到临时目录中。其中参数 `-u NONE` 表示不加载默认的 `~/.vimrc` 配置，
它本身也是 Vim 脚本文件。Vim 将文件路径记录在 % 这个寄存器中，在命令模式中按键查看这个
临时文件的路径：`<Esc>:%<Enter>`。这里并不是在命令行中直接通过寄存器名称符号来读取其内容，
而是因为 % 是 Vim 脚本环境中的一个特殊命令符号（cmdline-special）。

```sh
:use_vim
:: The script tutor.vim tells Vim which file to copy
call vim -u NONE -c "so $VIMRUNTIME/tutor/tutor.vim"
IF ERRORLEVEL 1 GOTO no_executable

:: Start vim without any .vimrc, set 'nocompatible'
call vim -u NONE -c "set nocp" %TUTORCOPY%
```

Vim 受上世纪 90 年代的 Amiga 个人计算机系统上的 Manx's Aztec C compiler 编译工具影响，
实现了一个称为 quickfix 的基于“错误信息列表”的功能。这个古老编译器通过收集错误信息列表，并且
使用 vim 的跳转到指定代码位置，然后修复错误，以实现 edit-compile-edit cycle 工作流程。
这个功能也被用于 Vim 的帮助文档的全局搜索、以及目录搜索功能中。Vim 提供两组命令分别收集文件
内容的定位信息列表 (location list)，命令带有 l 前缀。与之相对的是 quickfix list 的命令。
这两种列表都有对应的只读 changedtick 变量来记录列表变更的总次数。分别使用 `ll` 和 `cc`
命令来查看/定位到指定 nr （number row）位置上的内容：

    :lvimgrep   :lgrep   :lhelpgrep   :lmake    :[nr]ll[!]  :lli[st] 
     :vimgrep    :grep    :helpgrep    :make    :[nr]cc[!]  :cl

其它相关命令可以查阅快速参考文档 Quickfix commands。

Vim 帮助文档自带 tag 标记，也就是文本中使用 * 星号包裹的、由字母和连字符号组成的字符串标记，
帮助命令可以直接通过它定位。同时，帮助命令也可以通过文档名称来定位，比如 `:help map.txt`。
用户也可以编写含有 tag 标记的文档导入到 Vim，使用 `:helptags path/to/doc/` 命令给指定
目录下的文档生成标记索引文件，并保存在同目录中的 tags 文件中。然后就可以通过 `:help` 命令
查看导入的帮助文档。注意，Vim 只将 'runtimepath' 目录列表中的 doc 子目录作文档目录。

在输入命令时，或者命令选项（有空格与命令隔开），可以使用 `<Ctrl-D>` 或者 `<Tab>` 按键激活
备选内容列表，列表内容包括相似名称的命令、相似名称的参数、可用参数等等。比如，`:syntax` 命令
用于打开语法高亮功能，可以使用，`:syntax <Ctrl-D>` 查看可能的选项，包括 *on* 和 *off*
两个基本项。又比如，`:color` 命令用于打开主题配置方案，可以使用，`:color <Ctrl-D>` 查看
内置配色方案。也可以使用 `:color<Ctrl-C>` 查询到这个命令的完整形式是 `:colorscheme`。

Vim 提供 `Ctrl-]` 快捷键跳转当前光标下的 tag 所指向内容，`CTRL-T` 和 `CTRL-O` 返回。

此外，帮助文档提供了多种标记来定位：

• 文档标记：比如文档名 `editing.txt` 或者章节标记 `edit-intro`。
• 命令标记：比如 `:display` 或者简写形式 `:di`。
• 函数标记：比如 `execute()` 函数无简写形式。
• 快捷键标记：`<C-W>` 或者 `CTRL-W_CTRL-N`，`_<C-R>_<C-W>`。
• 带有模式缀的标记：比如插入模式专用快捷键 `i_CTRL-O`。
• 特性功能标记：`+feature-list`，`+syntax`，``。
• 选项标记（options.txt）：`'hlsearch'`，`'hls'`。

注意，键盘标记使用连字符 - 表示组合键，下划线 _ 表示连续的分组按键。`<Ctrl>` 按键还使用
`^` 符号表示，比如 `:h ^6` 查看用于切换编辑文件的命令默认绑定的快捷键。用户设置的按键映射，
可以直接使用不带参数的 `:map` 等命令进行查询，不同的映射命令查询不同模式下的映射规则。

要批评一下 Vim 的一点是，用于控制搜索时的高亮显示的 `hlsearch` 是使用 `:set hlsearch`
命令设置的选项，但是你不能用同样的方式来禁止它。而是通过另一个命令 `:nohlsearch` 来控制
临时关闭高亮显示，以及使用 `:set nohlsearch` 完全关闭高亮显示。当然，也可以通过“非法”
的正则语言来实现，比如 `$^` 这是一个永远不会有匹配的规则，没有内容会是“行尾在行首”。

注意，设置变量和设置选项分别使用 `:set` 命令和 `:let` 命令。

帮助内容或主题的跳转，这些将在下一节统一说明，这些功能逻辑上和编辑文档时的光标移动定位是一致的，
应该在一个主题中进行学习。

Vim 提供了两个非常便利的执行外部命令（External commands）的命令，还有一个正常模式下的
功能键 `K` 用于执行外部的帮助信息供应程序，关键字为光标下的标识字符串。

可以设置 `set keywordprg=man\ -s` 这样的选项指定辅助命令，Vim 会连带关键词与此值拼接
调用外部命令。默认使用的是 Linux 系统自带的 `man` 命令：

    :sh[ell]        start a shell
    :!{command}     execute {command} with a shell
       K            lookup keyword under the cursor with
                    'keywordprg' program (default: "man")

Vim 并不是万能的，有些功能也不一定比起 VS Code 这此新式的编辑工具先进，比如基于正则的
多选功能、块操作。但是它还是变化，并且存活足够长的时间，这足以证明它的优秀。并且它足够开放，
允许让用户进行功能上的扩展，以使它更灵活，更能满足个人定制需求。

除了执行外部命令，Vim 也提供插入外部文件或命令输出内容到编辑区（Special inserts），默认
插入内容到光标下，可以在 [range] 指定插入位置。有了这个功能就可以和外部程序建立密切联系，
比如向文档插入当前时间 `:r!date`，或者利用 bash 的脚本能力，`:r!echo {A..Z}` 快速生成
26 个字母表。又或者通过 curl 或者 sed、pandoc 这类工具获取网络信息并且加以处理再导入到
文档中。通过这种能力，可以将 Vim 命令行的内容插入到文档中。当然，这也不是什么特异功能。
VS Code 这类新式编辑器也能实现这的功能，包括将当前选择的文本内容作为 bash 脚本发送到当前
活动的终端中执行：

    :{range}r[ead] [++opt] [name]
    :[range]r[ead] [++opt] !{cmd}

Vim 实现的方法是将 `:r!` 后面的命令字符串提出出来，然后以 bash 命令解析它并将结果重定向
到临时文件，命令执行完成后，Vim 再读取输出内容并修改文档的 buffer 数据对象完成内容的插入。
这个过程可以在命令编写格式不正确，导致运行出错时给出的报告信息分析得出：

```vim
    :r!curl https://www.vim.org/ | pandoc -tasciidoc -rhtml
    
    " bash -c `(cmd)>/tmp/file`
```

这里需要注意，Vim 命令行环境不同 bash 中的命令行环境，这里设置有 Vim 专用的各种符号，比如
% 代表的是 Vim 当前编辑的文件名称，还可以使用 #n 指定编号的文件名，参考 cmdline-special。
使用 `:new` 等命令新创建的窗口自动产生 buffer 对象，并且是处于无文件名状态，不能使用这些
特殊符号来获取其名称。可以使用 `:file name` 命令来命名。特殊符号或者环境变量可以通过以下
扩展方法来获取相应的值，注意它与 `extend()` 扩充方法非常像：

    expand({string} [, {nosuf} [, {list}]])

Vim 中提供的可读写的寄存器数据也可以实现命令行内容的读取。插入模式下使用 `<Ctrl-R>` 快捷键
并在引号提示后输入指定的寄存器名称，比如 * 星号代表系统剪贴板（clipboard），: 冒号代表命令行
最后的输入。使用 `<Ctrl-R>` 快捷键就是在调用寄存器读取命令，更准确地说是 Vim 命令也在调用
内置的函数。这个方法同样可以用于命令行，因为命令行本身就是一个用于输入文本的对话框，只不过它
专用于输入简单的命令，而不是用于编辑长篇内容。寄存器内容可以在 Vim 关闭时保存，Vim 再次启动
还可以继续使用。除了其中用于保存临时内容的无名寄存器（unnamed register），它使用双引号命名。
因为 Vim 寄存器使用双引号作为命名前缀，所以这个无名寄存器在文档中表示为一对双引号。这也是使用
最频繁的寄存器，编辑使用的 d, c, s, x 等会删除内容的命令，以及复制命令（yank）都会修改其值。

There are ten types of registers:

    1. The unnamed register             ""
    2. 10 numbered registers            "0 to "9
    3. The small delete register        "-
    4. 26 named registers               "a to "z or "A to "Z
    5. Three read-only registers        ":, "., "%
    6. Alternate buffer register        "#
    7. The expression register          "=
    8. The selection and drop registers "*, "+ and "~ 
    9. The black hole register          "_
    10. Last search pattern register    "/

Special registers:

    '"' the unnamed register, containing the text of the last delete or yank
    '%' the current file name
    '#' the alternate file name
    '*' the clipboard contents (X11: primary selection)
    '+' the clipboard contents
    '/' the last search pattern
    ':' the last command-line
    '-' the last small (less than a line) delete
    '.' the last inserted text *c_CTRL-R_=*
    '=' the expression register: you are prompted to
        enter an expression (see |expression|)
        (doesn't work at the expression prompt; some
        things such as changing the buffer or current
        window are not allowed to avoid side effects)
        When the result is a |List| the items are used
        as lines.  They can have line breaks inside too.

## Fly in The Vim World

这小节的内容标题为 Fly in the Vim World，目的是让读者掌握 Vim 最精要的法术：光标的飞行。
这种能力可以用于文件编辑是定位要修改的内容位置，可以在阅读时快速定位到所关注的内容位置。主要
内容分为两部分，一是文档内的内容定位，以及 Vim 的标签、窗口、文件的切换。另一个方面是内容
编辑部分，包括常规编辑功能和基本正则的替换功能。并且，正则工具作为 Vim 最强大的特性之一，
它几乎全面覆盖了光标运动与内容编辑的功能。可以说，没有基于正则语言的搜索与替换功能的 Vim
就是没有了灵魂。在内容排列上，将以“基本光标运动-内容编辑-正则语言-标签窗口系统”的形式组织。
这些将覆盖官方文档的大量内容，并且完全不同于官方文档的组合形式，因为本文并非要替换官方文档，
而是提供一个更容易掌握官方文档所涉及内容的新视角。

### Cursor Fly

按照常规的 Vim 入门学习套路，一般是先学习从键盘的方向键控制光标的思维转换到 hijk 按键控制，
这是两种思维模式，掌握这种新的思维固然很重要，但是一般教程却忽略了这种模式变化背后的关键点：
命令式（Imperative） 和声明式（ Declarative）。前者是相对落后或者低级的思维模式，后者
相对高级，表现在：Vim 中执行一个操作前需要精心的计划。就以最基本光标在屏幕上的移动来说，
命令式的思维流程是：按键、按键、按键···，还没到位置，再继续按键。而声明式的思维流程：我要
移动光标；到哪？有多远？几行？几个词？几个字符？然后将这些因此考虑在内，编写出一个 `10j`
这样的命令，下移光标 10 行。换句话说就是，要多用脑子。

Vim 编辑环境中从键盘的方向键 (←, ↓, ↑, →) 转换为字母键还有另外一个隐含目的，方向键本身
属于不可显示的控制字符，在硬件终端时代，就用于控制光标移动。但是在 Vim 开始设计时，已经是
设定了向可编程的方向，这种不可见的控制字符不利于在脚本表达，必需找到可以在脚本中方便表达的
字符来替代它们。恰巧，键盘的人为设计使得打字时的手势将右手放在了 hjkl 等键盘上，这就让它
们成为光标控制命令字符的最佳选择。

可以在 motion.txt 手册中找到 left-right-motions 描述的光标控制键已经将 hjkl 影射到
相应的方向键，也包含了额外的快捷键。无论是哪种按键方式，无一例外，它们都是在调用一个称为光标
的函数 `cursor()`，这也就是这些按键能控制光标的关键：

            h       <Left>      CTRL-H      <BS>   
            l       <Right>     <Space> 
            k       <Up>        CTRL-P  
            j       <Down>      CTRL-J      <NL>    CTRL-N  

    cursor({list})
    cursor({lnum}, {col} [, {off}])         *cursor()*
    col({expr} [, {winid}])                 *col()*
    line({expr} [, {winid}])                *line()*

```
┌──────────────────────────────────────────────────────────────────────┐
│Line░1░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│"# some.vim                       │
│Line 2                      │      │syntax on                         │
│Line 3                      │      │set cursor line                   │
│Line 4                      │      │cursor(line(".")+10, 9)           │
│Line 5              ┌─────────────────┐                               │
│Line 6              │ from Line 1     │                               │
│Line 7              │ (current line)  │                               │
│Line 8              │ move to Line 11 │                               │
│Line 9              └─────────────────┘                               │
│Line 11                     │      │~                                 │
│Line 10 <───────────────────┘      │~                                 │
│~                                  │~                                 │
│~                                  │~                                 │
│~                                  │~                                 │
│~                                  │~                                 │
│~                                  │~                                 │
│──────────────────────────────────────────────────────────────────────│
│:call cursor(line(".")+10, 9)                                         │
└──────────────────────────────────────────────────────────────────────┘
```

在使用 Vim 命令时，有一个非常频繁使用到的可选参数 [range]，它用于指定或限制命令操作的行范围。
命令行中使用 . 句点表示当前行号（the current line）。脚本编程中称 Range of Operation,
或者 Line Addressing and Marks，可以在快速参考文档 quickref.txt (Q_ra) 找到各种范围
设置方式或格式。比如说，光标下移 10 行的操作 `10j` 或者 `10<Ctrl-j>` 等价于脚本中调用函数
`cursor(line(".")+10, 1)` 或者命令行中执行 `:call cursor(line(".")+10, 1)`。这些
都是内置函数，可以通过 builtin.txt 文档快速查询到函数原型。所以，无一例外，这四种基于编程
提供的运动形式（字母键、组合键、命令、脚本），最终都统一在 Vim 的软件原型设计上：一切可编程，
让编辑器跟上你的思维。这也引出了本文写作的动力：自动化编辑。

在文字的渲染程序中，控制光标的位置，就是控制数据编辑点的位置，也就是 buffer 对象当前的编辑点。
渲染（render）一词本身用于计算机图形学上的术语，指的是图形从数学模型（坐标点描述的几何对象）
通过 GPU 渲染流水线处理最终以平面图像的形式呈现的过程。用在这里，指的是文字从字符编码（数值）
到字体符号映射再显示（绘制）到屏幕上的过程。形式上，它们都是在转化数据为图像，只是涉及不同原理。
用户看到在屏幕上的光标，其实是编辑点的外显，它的根在数据上，也就是状态机当前记录的 buffer 中
的编辑点。这个编辑点在运动，屏幕上的光标跟着动，显示器存在的目的是用图形语言的方式告诉用户，
机器当前内部的状态的变化过程。但是一般的文字材料并不谈及这一点，一是因为对于专业的人来说这是基本
认识，二是因为都觉得向非专业的人士讲述这些深层的东西不经济。但是我在 COVID-19 疫情几年的时间
里接触到的大量英文原著教材都在说一件事：用心地通过文字与读者交流是一件高尚的事。这和软件开源有
一些重要的相同点：真诚和奉献。

Vim 集成了多种编程脚本接口，包括 Python、Lua、Ruby 等等。当前行号和内容对应的是以下两个属性，
以导出到 Ruby 脚本语言的编程接口为例（ruby-vim）：

    line = Vim::Buffer.current.line       # gets the current line
    num = Vim::Buffer.current.line_number # gets the current line number

以下使用经典的十字坐标来呈现 Vim 这种基于编程能力提供的强大“飞标术”，称之为 fly cursor。
制图基本原则：越远离坐标轴的功能键飞行能力越高，纵轴表示飞行级别为行（rows），横轴为行内。
纵轴上、下对应表示往屏幕上、下方运动，横轴左、右方向对应表示向行左侧、右侧运动。文档中称这
些功能为文本目标运动（Text object motions）。

```vim
│                                   Previous                                  │
│                                       ↑                                     │
│                                  first line                                 │
│                                       │                                     │
│                                   gg  │ goto (first) line                   │
│                                   G   │ goto (last) line                    │
│                                   H   │ top of screen (home)                │
│         ?                     #   N   │ find pattern/word and repeat        │
│             C-b  C-u                  │ half/whole screen (page)            │
│                      {   (            │ sentence/paragraph                  │
│                              ┌────────┼─────────┐                           │
│                              │        k  <Up>   │                           │
│ Back       ,       B   gE    │        │         │    E   W        ; Forward │
│←───0───^───F───T───b───ge────│────h───·───l─────│────e───w────t───f────$───→│
│  line  │ find  │   │   │     │ <Left> │ <Right> │    │   │    │  find  line │
│  head  │ char  │   │  goto   │        │         │   word │    │  char  end  │
│       line    find │  word   │        j <Down>  │   end  │   find           │
│       begin   tail │  end    └────────┼─────────┘   or   │   tail           │
│               char │  or delimeted    │        delimited │   char           │
│                  word begin           │                 word                │
│                  word delimited       │                 begin/delimited     │
│                                       │                                     │
│                      }   )            │ sentence/paragraph                  │
│             C-f  C-d                  │ half/whole screen (page)            │
│         /                     *   n   │ find pattern/word and repeat        │
│                                       │                                     │
│                                   G   │ goto last line                      │
│                                       │                                     │
│                                   last line                                 │
│                                       ↓                                     │
│                                      Next                                   │
```

VS Code 与 Sublime Text 等现代编辑器都提供有光标位置历史记录。Vim 同样的功能命令是：
`Ctrl-o` (go back) 以及 `Ctrl-i` (go forward)，最后编辑点还可以使用 `'.` 书签
形式（包括反引号使用书签的方式）。在帮助文档 motion.txt 中还可以找到一堆的跳转用途的命令。
可以通过 `:help jumplist` 或者 `:help jump-motions` 命令查询帮助信息，

除了以上光标运动控制，Vim 帮助文档中还可以使用 CTRL-T 以及 CTRL-O 来往跳转浏览过的内容。

文档 usr_29.txt Moving through programs 中还介绍了一组用于程序匹配符号间的跳转命令。
使用 `CTRL-]` 进入光标下的标签指向内容，查询 *Q_ta*  Using tags 获取其它跳转命令信息。
使用 `[I` 列表与光标所位置相同的符号列表，使用 `[i` 和 `]i` 还有 `[<Tab>` 和 `]<Tab>`
前后跳到相同符号。

这个十字坐标上分配的符号非常对称，基本上每一种功能都两个方向上对应的按键。有两个特别的位置使用的
前缀 g 按键的命令，这是因为键盘上的按键数量有限，不能每种功能都使用具有同源含义名称的按键，就像
单词的开头和结尾分别用 b/B、w/W 和 e/E 表示，但是移动往左向（Back）的单词结尾就不能再使用 e
键了，只能借助经常用到的 g 这个命令前缀专用键。包括移动往上方（Previous）的行号跳转功能键 gg，
与之相同的还有 G 命令，它们都是号跳转命令，只不过默认的跳转的行号不同，分别是首行、末行位置

有了灵活的光标控制能力后，接着就可以结合能进行数据修改的操作：复制、粘贴、大小写、移动、拼接等等。
这些都是现代编辑工具所必备功能，Vim 还提供了将外部文件賖插入到编辑区的功能。另外，复制、粘贴
功能基于 Vim 设计的寄存器机制（registers），可以通过命令进行读取和写入（相当于粘贴、剪切）。
在命令行输入的命令也会记录到专用寄存器中，在编辑文件时的删除（delete）、复制（yank）操作也会
将内容写入专用寄存器。因此，Vim 的删除就是剪切。

以下表格从 change.txt 文档整理出一组常用编辑功能，其中 [N] 和 {motion} 分别表示重复次数、
控制光标运动的命令：

    Commands                            Editing functions            
    ---------------------------------------------------------------

    :edit %                             Reload current file
    :file name                          Rename current file

    Undo/Redo commands

    [N]u                                undo last N changes
    [N]CTRL-R                           redo last N undone changes
       U                             restore last changed line

    Deleting text

    [N]x            delete N characters under and after the cursor
    [N]<Del>        delete N characters under and after the cursor
    [N]X            delete N characters before the cursor
    [N]d{motion}    delete the text that is moved over with {motion}
    [N]dd           delete N lines
    [N]D            delete to the end of the line (and N-1 more lines)
    [N]J            join N-1 lines (delete <EOL>s)
    [N]gJ           like "J", but without inserting spaces
    :[range]d [x]   delete [range] lines [into register x]

    Copying and moving text

    "{char}       use register {char} for the next delete, yank, or put
    :reg          show the contents of all registers
    :reg {arg}    show the contents of registers mentioned in {arg}
    [N]y{motion}  yank the text moved over with {motion} into a register
    {visual}y  yank the highlighted text into a register
    [N]yy         yank N lines into a register
    [N]Y          yank N lines into a register
    [N]p          put a register after the cursor position (N times)
    [N]P          put a register before the cursor position (N times)
    [N]]p         like p, but adjust indent to current line
    [N][p         like P, but adjust indent to current line
    [N]gp         like p, but leave cursor after the new text
    [N]gP         like P, but leave cursor after the new text

    Inserting text

    [N]a   append text after the cursor (N times)
    [N]A   append text at the end of the line (N times)
    [N]i   insert text before the cursor (N times) (also: <Insert>)
    [N]I   insert text before the first non-blank in the line (N times)
    [N]gI  insert text in column 1 (N times)
    [N]o   open a new line below the current line, append text (N times)
    [N]O   open a new line above the current line, append text (N times)

    in Visual block mode:
    I    insert the same text in front of all the selected lines
    A    append the same text after all the selected lines

    [g]~{motion}                        Switch case of {motion} text.
     gu~{motion}                        Switch to lowercase of {motion} text.
     gU{motion}                         Make {motion} text uppercase.
     guu                                Make current line lowercase.
     g~~                                Switch case of current line.

    <<              Shift [count] lines one 'shiftwidth' leftwards.
    >>              Shift [count] lines one 'shiftwidth' rightwards.

    CTRL-A          Add [count] to the number or alphabetic character
    CTRL-X          Subtract [count] from the number or alphabetic

    CTRL-N		    Find next keyword.                      *i_CTRL-N*
    CTRL-P		    Find previous keyword.                  *i_CTRL-P*

    <NL> or CTRL-J	Begin new line.                *i_CTRL-J* *i_<NL>*
    <CR> or CTRL-M	Begin new line.                *i_CTRL-M* *i_<CR>*

    CTRL-K {char1} [char2]  Enter digraph (see |digraphs|). *i_CTRL-K*

    CTRL-R {register}   Insert the contents of a register.  *i_CTRL-R*
    CTRL-W      Delete the word before the cursor.          *i_CTRL-W*
    CTRL-U      Delete all characters before the cursor.    *i_CTRL-U*

通过前面的学习，可以了解到 Vim 执行某个功能有有二种形式：用户按键触发的功能、通过命令行输入。
命令行输入又分为调用命令（通过内置  `:commad` 定义命令），直接通过 `:call` 调用函数。
使用 `:execute` 命令或者 `execute()` 函数执行表达式求值以字符串形式提供的 Vim 命令。
另外，通过 `:autocmd` 命令设置的自动化命令也算是一种。可以使用 `:normal` 命令以正常模式
执行一系列命令。这几个命令（有相应的函数）组合在一起可以实现非常多的功能。

    execute({command} [, {silent}]) 
    call({func}, {arglist} [, {dict}])

    :exe[cute] {expr1} .. 
    :norm[al][!] {commands}

    :com[mand][!] [{attr}...] {cmd} {repl}
    :delc[ommand] -buffer {cmd}	

    :au[tocmd] [group] {event} {aupat} [++once] [++nested] {cmd}

    :[range]cal[l] {name}([arguments])

以下通过编程构造出一些常用但 Vim 未内置提供的编辑功能：

    :onoremap in( :<c-u>normal! f(vi(<cr>      通过查找、选择编辑括号中的内容
    :onoremap in( :<c-u>normal! f(vi(<cr>      通过查找、选择编辑前一对括号中的内容

    :onoremap ih :<c-u>execute "normal! ?^==\\+$\r:nohlsearch\rkvg_"<cr>

    :[range]j[oin][!] {count} [flags]   Join lines


### Search/Substiutte with Regular Language

Vim 提供全面的行、句、词、字级别的光标行动、光标历史位置间的移动，这些是现代编辑器的基本功能。
前面使用了一个十字坐标系统来建立这些基础操作的认识。抛开这些 Vim 常规操作，还有一个强大的基于
正则语言的替换命令 `:substitute`，这是一个极度有用且会频繁使用的功能，所以基本上不会使用
它的全名称。且是使用 `:s` 简写。另外一个就是专用的文档内搜索功能 `/` 以及反向搜索 `?`。
对于一个编辑器而言，基于正则语言的搜索命令和替换命令实在是太强大了，在编译器领域上，正则语言
还用于描述通用编程语言的文法。Vim 中也使用了整个 patterns.txt 文档来解释什么是正则语言的
匹配模式。替换命令和搜索功能（search-commands），这里没有称之为命令，它本身是替换命令的
一个功能。与之相关的还有用于脚本中的 `substitute()` 和  `search()` 函数。

正则语言有两大功用：作为实现其它通用语言的基础工具，以及作为字符串处理工具。作为一门计算机
语言，它在复杂度上远不如通用语言。但是在实践中，因为它涉及的规非常散乱，因此掌握它并用它好
确实有点难度，但是会值得，因为用计算机的场合基本上都会有它的影子。

从计算机语言的角度出发，通俗点说，正则语言可以定义为只有两种数据的字符串处理专用语言：一是
字符字面量 (literal character)，二是特殊功能符号 (special character)。可以用正规式
（regular expression）表达的语言字符就是正规集（regular sets）。举例来说，“一个字母”、
“一串字母”、“一个数字或一个字母”、“任意个字符”、“零个或一个字符”这些都属于是正规式。正规式
是定义正规集的数学工具，用于描述程序语言单词的表达式，与非确定性有限自动机（NFA）联系紧密。

这里不打算完整教学正则语言的点点滴滴，只将重心放到一组实用功能或者概念上来。正则语言在形式语言
理论中，归属于上下文无关语言的一个子集，即语言的表达上，后面的内容与前面的内容无关。简单来说，
就是用一组正规规则（正则语言句子）去描述与之相匹配的字符串（被正则语言所描述）。Vim 正常模式
下输入 `/app.*<Enter>` 就表示用一段正则语言 `app.*` 描述与之相匹配的字符串内容。那么这段
正则语言的含义是：app 开头的一串内容（到行尾）。

有一些适用于内容搜索或替换的选项。语法高亮功能可以让光标更位置更容易视觉定位，`:syntax on`
功能开启后，然后可以启用光标所在行高亮特性，`set cursorline`。搜索结果的高亮显示选项使用
`:set hlsearch` 命令开启，`:nohlsearch` 命令临时关闭高亮显示（下次搜索时恢复），使用
`:set nohlsearch` 完全关闭高亮显示。还有 `set incsearch` 会在输入匹配模式时高亮首个
匹配的内容。在搜索过程中，如果在大块的文件中卡住，那么可以使用 `Ctrl-C` 来结束搜索。高亮
显示的其它模式还可以通过专用的 'highlight' 选项进行设置。通过显示搜索计数器信息可以让用户
随时了解当前光标位于哪个匹配位置，search count message 默认禁用，`:set shortmess=-S`
命令可将标志 S 移除以显示计数器。参考 option-summary 文档。

TIP: Vim 秉承一题多解的理论，提供了多种设置方式，在脚本中或者命令行中使用更快捷的选项“反转”，
比如 `:set hlsearch!` 这种表达式表示的是设置 'hlsearch' 选项，并反转 true、false 值。

支持正则语言模式匹配的搜索命令与文本替换命令的一般语法格式如下：

    [count]/{pattern}[/]<CR>                |exclusive|
    [count]/{pattern}/{offset}<CR>          |linewise|
    [count]/<CR>
    [count]//{offset}<CR>

    [count]?{pattern}[?]<CR>                |exclusive|
    [count]?{pattern}?{offset}<CR>          |linewise|
    [count]??{offset}<CR>

    :[range]s[ubstitute]/{pattern}/{string}/[flags] [count]
    :[range]&[&][flags] [count]
    :[range]~[&][flags] [count]
    :[range]sno[magic] ...  Same as `:substitute`, but always use 'nomagic'.
    :[range]sm[agic] ...    Same as `:substitute`, but always use 'magic'.

其它与搜索、替换命令搭配使用的命令：

    [count]n               (forward) Repeat |last-pattern|
    [count]N    (opposite direction) Repeat |last-pattern| 

    [count]*               (forward) Search keyword nearest to the  cursor. 
    [count]#        Same as "*", but search backward. 
    [count]g*       Like "*", but partial matches，no "\<" and "\>" around the word.
    [count]g#       Like "#", but partial matches，no "\<" and "\>" around the word.
          gd        goto local declaration of identifier under the cursor
          gD        goto global declaration of identifier under the cursor
          1gd       Like "gd", but ignore matches inside a {} block that
                            ends before the cursor position.
          1gD       Like "gD", but ignore matches inside a {} block that
                            ends before the cursor position.

Vim 还集成了 `:grep` 命令，它调用同名 shell 命令，用于搜索文件中与正则表达式匹配的内容。
类似的还有用于自动化构建项目的 `:make` 命令，它们都通过相应的选项 ('grepprg', 'makeprg')
指定外部程序，以及使用 'grepformat' 或者'errorformat' 属性指定错误消息格式。

在阅读 Bash 编程书籍或资料的过程中，接触到一个 *useless cat* 的说法。意思是无效或胡乱使用
cat 这个日常必备命令。正因为它太常见了，所以很多情况下用户不关心是否真的的需要它，只要是在
文件读取的位置都用上它。这种情况就是 useless cat，比如，错误地将它与 sed 命令一起使用。
因为 sed 命令本身就支持文件的读取，根本不需要它。这里的问题是，多执行一个命令，看似无大碍。
但是在一些需要循环处理的脚本中，多一个命令就是多万千上万个命令的执行时间消耗，就是向操作系统
做额外的成千上万次进程申请、销毁流程，这是相当严重的性能杀手。进而，我的关注往另一个方向发展，
useless plugin，这是使用一些带有插件扩展接口的程序经常遇到的问题。由于宿主程序开放了插件
API，所有开发者都可编写插件，质量也就良莠并存。即使是 Vim 社区上被人捧上天的 EasyMotion，
在我看来，它也不过是一个 useless plugin。验证它的最好办法就是精通 Vim 的搜索与替换命令。
尽早认清 useless plugin 问题可有助于避免掉进一个陷阱，它会让用户远离一个好用且简洁的 Vim。
只有掌握最本质的 Vim 才能让它为自己服务，并且能使 Vim 作为一个集成了脚本引擎的文本编辑器
发挥出它本身具有的强大潜能。而不是陷入无休止的 useless plugin 安装、配置、卸载的重复过程。

专用于文档内搜索功能包含正向搜索 `/` 以及反向搜索 `?`，而替换命令 `:s` 则是正向搜索，并且默认
搜索当前行的内容、替换首个匹配内容。替换命令还有 `:&` 和 `:~` 两个附加命令，用于重复执行同样的
模式匹配，但是不同参数的替换。替换命令分别通过 [range] 和 [flags] 设置搜索范围和替换方式。

正则匹配模式是这两类命令的核心，而命令的其它参数是配角，并且相对容易掌握，放在前面集中说明。由于
正则语言本身具有一定的复杂度，并且它的规则非常细碎，因此后面将以指南加符号手册的形式来组织内容，
这种方式也是我最喜欢的技术写作方法。一方面它具有非常友好的教学文字，另一方面它又可以当作小手册。
综合起来，使得本文在小篇幅的限制下，囊括了 Vim 的核心功能与文档内容。

Vim 会记录用户最后选择内容的位置，在可视模式或者块模式下选择内容后，如果转换到命令行模式，Vim
就会自动在命令行前面设置 `'<,`>`，这是命令前缀参数 [range]，用于限制命令的作用范围。它是一个
区间表达式，分别使用带有单引号前缀的左、右尖括号表示左右区间。可以在任何具有 [range] 前缀参数
的命令中使用它，包括替换命令。这个区间参数等价于在匹配模式中使用 `\%V` 这个特殊符号，它的含义
是匹配可视选区（Match inside the Visual area），使用 `:help \%V` 命令获取帮助，或者直接
查询 pattern-overview 文档或者 Ordinary atoms (pattern-atoms) 罗列的规则。

    :'<,'>s/old/new/    # (Replace pattern in selected area)
    :s/\%Vabc/xyz/      # (Same as above, and you can try gv) 

Vim 在发展过程中继承 ed 编辑器和 Perl 脚本语言的正则表达式遗产，这导致 Vim 现有两种正则模式：
magic 和 nomagic 模式，官方文档也按这两种模式来编写，以及 very magic 模式。这些模式差别可能
导致用户的困惑，但是它们只在处理正则规则符号表达上的差异，主要是转义字符的不同。Vim 正则表达式
默认使用 \m（magic）模式，但许多元字符需要转义才能生效，比如 +、|、()，导致正则表达式冗长且
难以阅读。因此设置 “very magic” 模式可以帮助减少转义字符，使正则表达式更简洁。可以设置选项
`:set magic` 或者 `:set nomagic` 来改变正则模式。或者在模式中使用符号来指定模式。但量，
very magic 模式只能在匹配模式中使用 \v 来启用：

    magic   nomagic   matches ~
      \m      \m      'magic' on for the following chars in the pattern
      \M      \M      'magic' off for the following chars in the pattern
      \v      \v      the following chars in the pattern are "very magic"
      \V      \V      the following chars in the pattern are "very nomagic"
      \%#=1   \%#=1   select regexp engine |/zero-width|

标志位参数 s_flags 说明：

• g - 修改一行内的所有匹配，而不仅仅是第一处匹配；
• c - Confirm each substitution，让用户确认或拒绝每一处修改；
• n - Report the number of matches，不执行替换操作，而只是统计和显示匹配的数量；
• e - 专门用于屏蔽错误提示；
• i - Ignore case for the pattern，大小写不敏感，可以通过 `ic` 选项设置；
• I - Don't ignore case for the pattern. 大小写敏感；
• & - 需要在首位，用于指示 Vim 重用上一次 substitute 命令所用过的标志位。

比如 `:%s/ABC/xyz/g` 对全文替换 ABC 为 xyz。替换命令可以兼有搜索的功能，注意，`:s/pattern`
或者 `:s/pattern/` 这种省略备选字符串的方式等价于 `:s/pattern//`。执行替换命令后，Vim 就
保存正式匹配模式，就可以像使用搜索命令一样使用其它配合命令进一步搜索文档中的其它位置。当然，如果
执行了全文替换，就不会再出现匹配的匹配的内容了，除非替换成相同内容。利用撤消 u 和重复 `<C-r>`
可以快速恢复替换之前的状态以后重做替换命令。

大小写敏感模式切换是正则语言的基本功能，比如 VS Code 中可以在搜索框中的图形界面设置，如果使用 
JavaScript 脚本，就可以通过后缀选项 (/pattern/i) 设置，它们都保持了比较一致的组织逻辑。但是，
Vim 中的设置大小写敏感模式设置还可以在 pattern 中使用 `\c` 或者 `\C` 设置不敏感、敏感模式，
并且不一定要求在模式规则的开头。这种处理方式在逻辑上是会令人困扰的，它一方面提供 [flags] 来设置
行内容的全局替换（/g），另一方面又在 pattern 中设置大小写敏感模式，这种分散的功能组织不仅会增加
学习者的负担，也会增加其文档编写的复杂度，这也进一步导致 Vim 官方文档的散乱程度。由于 Vim 继承
原始的行编辑器 ed，对于行编辑器而言，全局的范围就是一行，这就是 g 标志位命令的由来。Vim 设计上
也和 Perl 一样，为一个问题提供多种解决办法。

Note that 'ignorecase', "\c" and "\C" are not used for the character classes.

Vim 默认采用大小写敏感的查找，为了方便我们常常将其配置为大小写不敏感，或者每次搜索时在模式规则
中指定 \c 或者 \C 进行手动切换。按照 Ignoring case in a pattern 文档所述，设置为智能方式
'smartcase' 会在遇到大写字母字面量时，自动切换到大小写敏感模式模式。

    set ignorecase
    set smartcase 

搜索命令对持前缀 [count] 和后缀 search-offset 参数，表示跳过行号的计数和行号偏移。但是注意，
[count] 参数不能在输入搜索命令时设置，而应该在执行搜索前先按相应的数字键设置。文档中也没有将此
参数标记在搜索命令的前缀位置，而是标注在解释内容中。行号偏移的参数格式参考如下：

    [num]       [num] lines downwards, in column 1
    +[num]      [num] lines downwards, in column 1
    -[num]      [num] lines upwards, in column 1
    e[+num]     [num] characters to the right of the end of the match
    e[-num]     [num] characters to the left of the end of the match
    s[+num]     [num] characters to the right of the start of the match
    s[-num]     [num] characters to the left of the start of the match
    b[+num]     [num] identical to s[+num] above (mnemonic: begin)
    b[-num]     [num] identical to s[-num] above (mnemonic: begin)
    ;{search-command}   execute {search-command} next

搜索命令虽然不支持使用前缀 [range] 参数来限制搜索范围，但是可以通过多种正则规则来限制，甚至
变通方法，可以先跳转到指定行或者书签位置再开始搜索。注意书签定义使用 m 命令，调出书签可以使用
反引号或单引号加书签，但是在模式匹配中只能使用单引号方式：

    /\%123l         what to search in line 123
    /\%V            what to search in visual selection area
    /\%>'a\%<'b     what to search in between mark a and b
    /\%>199l\%<300l what to search is limit between search-range

Vim 提供了一个强大的模糊搜索功能 (fuzzy-matching)，这是对人类大脑非常友好的信息提取技术。
对于一些记忆不是很清晰的关键字，通常不能直接搜索到内容关键位置，或者需要花很多时间去翻查。但是
模糊查找使用一个评分机制，将用户提供的模糊关键字与匹配内容进行一个评分排行，并根据排行榜顺序
提供给用户作参考。此功能基于 `matchfuzzy()` 和 `matchfuzzypos()` 两个函数实现，可以通过
`:vimgrep` 命令调用，只需要传入 f 标志即可 ：

- The number of sequentially matching characters.
- The number of characters (distance) between two consecutive matching characters.
- Matches at the beginning of a word
- Matches at a camel case character (e.g. Case in CamelCase)
- Matches after a path separator or a hyphen.
- The number of unmatched characters in a string.

Vim 命令一般都是前缀 [range] 来指定命令在文档的作用行区间范围 (cmdline-ranges)，搜索与替换
命令也一样。替换命令还多了一个后缀的 [count] 参数，看其名称可知是一个用户计数的参数，其含义是指
在达到这个计数（行数量）时停止执行。但是这个计数的起点有点怪，因为它是从 [range] 的右边界开始的，
也就是说 [range] 和 [count] 参数要搭配使用，比如 `:%s/ABC/xyz/g1` 就表示只替换最后一行的
ABC 为 xyz。

行号区间地址（range address）的格式是一个或者使用逗号或者分号分隔的一对区间符号，符号含义如下。
比如使用相对偏移的命令 `:1,2+2print` 打印文件的首三行内容，行区间为 `1,4` 不含区间的右边界。
Vim 支持行区间折叠功能，比如 `:3,4fold`，或者打开 `:3,4foldopen`，当行区间的右边界在折叠的
行内，则折叠区会当作一行计算。可以看到行间距也支持正则表达，但是不能用在替换或者查找命令中。可以
用在其它编辑命令中，比如 `:1,/\d/d` 表示从第一行删除直到遇到含有数字的行为止（包含这行）。

        +/-             :range-offset
        {number}        an absolute line number
        .               the current line
        $               the last line in the file
        %               equal to 1,$ (the entire file)
        't              position of mark t (lowercase)
        'T              position of mark T (uppercase)
        \/              the next line where the previously used search pattern matches
        \?              the previous line where the previously used search pattern matches
        \&              the next line where the previously used substitute pattern matches
        /{pattern}[/]   the next line where {pattern} matches
        ?{pattern}[?]   the previous line where {pattern} matches

接下来讲一下替换命令中的 /string/ 部分，它也就是替换后的。因为正则语言支持分组，并且支持分组引用。
分组的语法格式是使用 \(\) 包裹其它正则规则，每组对应一个数字编号 \0 表示整个正则规则匹配的内容，
\1 ... \9 依次对应括号包裹的分组匹配内容。比如，`:%s/\(A\)\(B\)\(C\)/\3\2\1/` 则会替换
交文本中的 ABC 为 CBA。还有几种形式 (sub-replace-special)，使用反斜杠转义为普通字符，其中
`<CR>` 这样的热键可以使用 `CTRL-V <Enter>` 输入 ：

    &       与 \0 等价；
    ~       使用上一次调用 substitute 命令时提供的 string 内容；

    \u      next character made uppercase
    \U      following characters made uppercase, until \E
    \l      next character made lowercase
    \L      following characters made lowercase, until \E
    \e      end of \u, \U, \l and \L (NOTE: not <Esc>!)
    \E      end of \u, \U, \l and \L
    <CR>    split line in two at this point
    \r      idem
    \<CR>   insert a carriage-return (CTRL-M)
    \n      insert a <NL> (<NUL> in the file) (does NOT break the line)
    \b      insert a <BS>
    \t      insert a <Tab>
    \\      insert a single backslash
    \x      where x is any character not mentioned above:
            Reserved for future expansion

Vim 提供 sub-replace-expression 用法，用脚本来生成替换文本，语法格式为 \={vim script}。
用于在替换时执行 vim script 并将脚本返回内容作为 string。使用 `submatch()` 内置函数处理，
调用此函数时，传入一个序号，那么此函数返回匹配规则中对应分组的内容。比如 `submatch(0)` 等价
\0 或者 &。用法演示如下，分别是使用 Unicode 字符替换 E 字符；使用内置函数测量 sys 开头的
单词长度并替换原单词；使用 `expand()` 函数扩展环境变量 $HOME，并将此变量的值替换到文本换行
符号前。注意，替换命令使用斜杠作为各种参数的分隔符号，用户可以在特殊情况下变更分隔符号。Vim 会
根据 `:s` 命令名称后的字符来确认分隔符号。提示：在输入替换规则时，可以使用 `<Ctrl-R>` 读取
Vim 寄存器的内容。

    :s/E/\="\<Char-0x20ac>"/g

    :s/sys\w*/\=strlen(submatch(0))/gei

    :s@\n@\="\r" .. expand("$HOME") .. "\r"@

Vim 内置两个正则解析引擎，旧式但功能全面的无限回溯式正则引擎 (backtracking engine)，以及更
快速的新式的 NFA (非确定性自动机)。可以通过 'regexpengine' 选项来改变正则引擎。0、1、2 分别
表示自动选择、回溯引擎、新式 NFA 引擎。

Vim 正则匹配模式有分支概念 (branch)，也是多个匹配模式其中一个匹配成功就返回结果。每个分支由
分片连接在一起，然后再细分为原子，原子对应的是正则模式规则中的符号表达，这部分后面给出参考列表。
这是一个循环结构，就是无限回溯的正则语言。可以在 pattern-overview 文档中快速了解模式规则。

    pattern ::=      branch
                 or  branch \| branch
                 or  branch \| branch \| branch
                 etc.

    branch ::=       concat
                 or  concat \& concat
                 or  concat \& concat \& concat
                 etc.

    concat  ::=      piece
                 or  piece piece
                 or  piece piece piece
                 etc.

    piece   ::=      atom
                 or  atom  multi

    atom    ::=      ordinary-atom
                 or  \( pattern \)
                 or  \%( pattern \)
                 or  \z( pattern \)

接下来是正则语言的本体，涉及非常多规则细节，主要就是用于控制匹配的内容：数值、字符、符号、断行，
以及空白符号，重复控制等等。首先，规则中的一般字母数字都按其字面量匹配文本，而正则规则符号有其
特殊含义，说明如下：默认正则模式使用魔术符号 magic 对应的符号，只有设置 `:set nomaigc` 
模式后才使用 nomagic 一列对应的符号表达。转义符号为反斜杠，对特殊符号转义后，其匹配的是除去
反斜杠的余下部分符号的字面量。以下是一组最基本的正则语言符号释义：

    |pattern|           Special characters in search patterns

                                     meaning  magic   nomagic
                matches any single character    .       \.
                       matches start of line    ^       ^
                               matches <EOL>    $       $
                       matches start of word    \<      \<
                         matches end of word    \>      \>
        matches a single char from the range    [a-z]   \[a-z]
      matches a single char not in the range    [^a-z]  \[^a-z]
                  matches an identifier char    \i      \i
                   idem but excluding digits    \I      \I
                 matches a keyword character    \k      \k
                   idem but excluding digits    \K      \K
               matches a file name character    \f      \f
                   idem but excluding digits    \F      \F
               matches a printable character    \p      \p
                   idem but excluding digits    \P      \P
             matches a white space character    \s      \s
         matches a non-white space character    \S      \S
                      matches an end-of-line    \n      \n

                group a pattern into an atom    \(\)    \(\)

以下内容摘抄自官方正则模式文档中的 5. Multi items （pattern-multi-items）

    'magic'  'nomagic'  matches of the preceding atom ~
    -------  -------- --------------------------------------
    *        \*       0 or more       as many as possible
    \+       \+       1 or more       as many as possible
    \=       \=       0 or 1          as many as possible
    \?       \?       0 or 1          as many as possible
    \{n,m}   \{n,m}   n to m          as many as possible
    \{n}     \{n}     n               exactly
    \{n,}    \{n,}    at least n      as many as possible
    \{,m}    \{,m}    0 to m          as many as possible
    \{}      \{}      0 or more       as many as possible (same as *)
    \{-n,m}  \{-n,m}  n to m          as few as possible
    \{-n}    \{-n}    n               exactly
    \{-n,}   \{-n,}   at least n      as few as possible
    \{-,m}   \{-,m}   0 to m          as few as possible
    \{-}     \{-}     0 or more       as few as possible

    \@=      \@=      preceding, requires a match         |/zero-width|
    \@!      \@!      preceding, requires NO match        |/zero-width|
    \@<=     \@<=     behind, requires a match            |/zero-width|
    \@<!     \@<!     behind, requires NO match           |/zero-width|

    \@123<=
        Like "\@<=" but only look back 123 bytes. This avoids trying lots
        of matches that are known to fail and make executing the pattern very
        slow.  Example, check if there is a "<" just before "span":
                /<\@1<=span
        This will try matching "<" only one byte before "span", which is the
        only place that works anyway.

    \@123<!
        Like "\@<!" but only look back 123 bytes. This avoids trying lots of
        matches that are known to fail and make executing the pattern very
        slow.

    \@>
        Matches the preceding atom like matching a whole pattern.
        Like "(?>pattern)" in Perl.
        Example         matches ~
        \(a*\)\@>a      nothing (the "a*" takes all the "a"'s, there can't be
                        another one following)

用例子来说明，这些正则符号的使用。比如，* 星号表示匹配前一个/组字符的任意多个（0 或多个），那么
在为搜索或替换命令编写正则规则时，就需要使用 `:s/x*/X/g` 或者 nomagic 模式下的 `:s/x\*/X/g`，
它们是等价的表达，就是将一连串的的 x 字符替换为一个大写的 X。那么怎么理解正则语言中的这个 0 到
任意多个的语义呢？假设输入的文本是 “xyz”，那么这条规则就会出现二个匹配点，“•xy•z”，用黑点标记。
第一个匹配点在开头，即使开头的不是 “x” 这个字符，也存在这个 0 宽度的匹配，因为它连着后面的 “x”
直到 y（不匹配）结束，然后下面进行新的测试，发现只能匹配 0 宽度，因为 z 不匹配。所以替换后结果
就是 “XyXz”。像星号 * 这种尽量多匹配字符的规则，在正则语言中称为贪婪模式（greedy），与之对应
的就有懒惰模式（lazy）。使用时，需要根据具体场合来选择 * 贪婪匹配还是 \{-} 懒惰匹配。

零宽匹配或者零宽断言（Zero-Width Assertions）是一组非常有用的高级正则语言规则。它们的用途
是匹配但不消耗输入的字符串内容的前提下找到匹配位置，这也是其名字“零宽”（zero-width）的含义。
就像前面例子中第二个匹配位置那样，它匹配到了位置，但没有消耗其中的字符。根据其设置的正则解析
程序扫描方向的不同、匹配情况，两两组合得到四种表达形式。并且可以将零宽断言部分放置在匹配规则
主体的左边或者右边，形成复杂的正则规则。

两种扫描方式分别称为向前扫描 (lookahead) 和向后扫描 (lookbehind)，或简称前行、后行。语义
解释对应的是，解释程序扫描输入字符串流时，是从前往后（从左到右）扫描还是从后往前（从右左往左）。
而断言则是对应就匹配、不匹配两种情况。下表将它们的格式与 perl-patterns 风格作个对比。Perl
语言与 JavaScript 中的零宽匹配规则相似，都按照同样的圆括号包裹的 `(assertiion)` 格式书写，
Vim 则是 `(assertion)\@...` 格式。

    |      |   Match   Direction
    |------|---------------------
    | @=   |   正匹配    正则规则前行
    | @!   |   负匹配    正则规则前行
    | @<=  |   正匹配    正则规则后行
    | @<!  |   负匹配    正则规则后行

    Capability                      in Vimspeak     in Perlspeak ~
    ----------------------------------------------------------------
    force case insensitivity        \c              (?i)
    force case sensitivity          \C              (?-i)
    backref-less grouping           \%(atom\)       (?:atom)
    conservative quantifiers        \{-n,m}         *?, +?, ??, {}?
    0-width match                   atom\@=         (?=atom)
    0-width non-match               atom\@!         (?!atom)
    0-width preceding match         atom\@<=        (?<=atom)
    0-width preceding non-match     atom\@<!        (?<!atom)
    match without retry             atom\@>         (?>atom)

还是使用例子来说明它们的用法。上表中使用 atom 表达用于断言的正则规则，可以使用圆括号包裹的
分组规则，否则只能设置一个字符宽度的零宽断言。假设输入字符串为 “sensitivity”，那以下规则
对应的匹配位置或内容如下，使用圆括号标记。这里为了简化起见，只使用一个零宽断言作为演示。实际
使用中，可能存在需要多个零宽断言的情况：

    Vim Commands     Matchs          Notes
    ---------------  -------------  ---------------------------------
    /\w\+\(it\)\@=   (sensitiv)ity  ➊ 前行查找字符串，断言它后面必需跟着 "it" 字符；
    /\w\+\(it\)\@!   (sensitivity)  ➋ 前行查找字符串，断言它后面不能跟着 "it" 字符；
    /\w\+\(it\)\@<=  (sensitivit)y  ➌ 后行查找字符串，断言它后面必需跟着 "it" 字符；
    /\w\+\(it\)\@<!  (sensitivity)  ➍ 后行查找字符串，断言它后面不能跟着 "it" 字符；

为了加深对扫描方向的理解，可以考虑这样一个使用 Perl 风格表达的规则，`(?<!\d)\d{5}(?!\d)`，
它用来匹配一组连续的 5 个数字，如果有少于或多于 5 个的情况就不算。如果交换其中两个零宽断言，
前行与后行的规则位置交换，这会导致左则为前行扫描。因为是零宽的缘故，解析程序就会扫描到 `\d{5}
这部分的位置，这与它本身是数字符号就冲突。另一侧的问题也一样，所以永远不会有这样的匹配字符串。
它的错误与 `$^` 这种正则表达式样，都是属于逻辑悖论。

还有一个潜在的问题是：如果在零宽断言中确定主体规则匹配的字符边界。可以将断言匹配的区间称为 R，w
因为零宽本身不消耗输入字符，所以边界问题取决于正则主体的内容是否能与 R 区间内容相匹配：如果不能
与这匹配，则可以从断言 R 的边界处开始；如果可以匹配（完全或部分），则从匹配的边界处开始。

理解正则表达式中的零宽断言是还相当难度的，一个难度是教材的缺失，另一个是正则语言应用规则繁琐。
作为一个非重度正则语言使用者，我曾经相当长的时间也对正则的零宽规则有误解，混淆了它的前后、正反，
以及零宽断言在匹配模式中使用的位置问题。正则语言作为一种语言，它属于领域专用语言，与通常语言
在功能上当然有差别。它不能像通用语言那样做一切能在计算器中做的事。正则语言的强项是描述文本，p
这也是它作为一种文本处理专用语言的长处。比如说，有这样的一条规则 `(\d\{4}) - \d{7}`，对于
使用过电话座机的人来说，这条规则很明显就等于是正则语言说：“这是一个带有区号的座机电话号。”

因为正则语言本身比通用语言的结构简单，常年作为其它语言实现过程中的一种基础技术。一般商业书籍
不以它为中心。比如 JavaScript: The Definitive Guide, 7th Edition 或者 
Concepts of Programming Languages 10th Edition 这类大块头教材，基本上只是提了一嘴，
并没有深入去探究正则语言这回事。Teach Yourself Regular Expressions In 10 Minutes
这种 200 页的“超长教程”则是不痛不痒讲了些相对实用的知识，并不能直达正则语言的本质。还不如教案
[Lecture Notes](https://www.cl.cam.ac.uk/teaching/1011/RLFA/LectureNotes.pdf)
on Regular Languages and Finite Automata for Part IA of the Computer Science Tripos。

相对专业一点的教材有：Mastering Regular Expressions,
Powerful Techniques for Perl and Other Tools  y Jeffrey E. F. Friedl 
[3rd edition](https://vscode.dev/github.com/pengbo-learn/books)
[2nd edition](https://docstore.mik.ua/orelly/perl4/mre/mre.pdf)

正则语言其实是一个相当有用的工具语言，它的一大作用是用在构建通用语言的解释程序中，而用它作为
字符串处理工具则是第二大用途。对于一个面向文本的工作人员，学习正则语言也是回报相当大的一种投入。
大量的基础工具和文本处理工具都会配备正则工具，诸如 grep/sed/awk/jq，当然也包括 Vim。

正则语言可以溯源到 1956 年，Stephen Kleene (以他的名字命名了克林闭包) 发表了一篇标题为
《神经网络事件表示法和有穷自动机》的论文，描述了一种叫做“正则集合（Regular Sets）”的符号。
随后，Unix 之父 Ken Thompson 于 1968 年发表了文章《正则表达式搜索算法》，并且将正则引入
自己开发的编辑器 qed，以及之后的 ed 编辑器，然后又移植到 grep 文本搜索工具中。自此，正则语言
被广泛应用于 Unix 类系统的各种工具中。

在正则语言技术发展的过程中，由于当时缺少标准化管理，也没有人管理。于是，1986 年诞生 POSIX
标准化。POSIX 作为一系列规范，定义了 Unix 操作系统各种支持的功能，包括正则表达式的规范。
因此，Unix 类系统上的大部分工具，如 grep、sed、awk 等，均遵循该标准。1987 年 12 月，
Larry Wall 发布 Perl 语言第一版，因其功能强大一票走红，所引入的正则表达式功能大放异彩。
之后 Perl 语言中的正则表达式不断改进，影响越来越大。在此基础上，又于 1997 年诞生了 Perl
兼容正则表达式（Perl Compatible Regular Expressions）。

目前主流正则引擎有 3 类，基于确定有穷状态机 (DFA, Deterministic Finite Automaton) 
和不确定有穷状态机 (DFA, Nondeterministic Finite Automaton)。乔姆斯基形式语言理论中，
它们都适用于处理上下文无关文法文语言的子集：正则语言。这些引擎简要说明如下：

• DFA 正则引擎，线性扫描永不回溯，不能捕捉分组，不支持反向引用；
• 传统型 NFA 引擎，“贪婪”匹配无尽回溯算法，魂捕捉分组、反向引用，但是性能差；
• POSIX NFA 引擎，提供 longest-leftmost 匹配，以及环视和非贪婪模式；

NFA 自动机实现的正则引擎最重要的部分是：回溯（backtracking）。回溯就像是在道路的每个分岔口
留下一小堆面包屑 (breadcrumb)。如果走到尽头，就可以照原路返回，直到遇见面包屑标示的尚未尝试
过的道路。如果那条路也走不通，你可以继续返回，找到下一堆面包屑，如此重复，直到找到出路，或者
走完所有没有尝试过的路。

POSIX NFA 引擎与传统的 NFA 引擎类似，不同的一点在于：在确保已找到可能的最长的匹配之前，
将继续回溯。因此，POSIX NFA 引擎的速度慢于传统的 NFA 引擎；并且在使用 POSIX NFA 时，
恐怕不会愿意在更改回溯搜索的顺序的情况下来支持较短的匹配搜索，而非较长的匹配搜索。

可以使用类似以下的方式来测试不同的正则引擎：

    echo =XX========================================= | egrep 'X(.+)+X'

一些软件会混合使用 DFA/NFA 双引擎：GNU awk, GNU grep。一种简单但有效的策略是：尽可能
多使用 DFA，只在需要反向引用的时候，才切换到 NFA。

    Table 4-1: Some Tools and Their Regex Engines

    Engine type         Programs
    ------------------  --------------------------------------------
    DFA                 awk (most versions), egrep (most versions), 
                        flex, lex, MySQL, Procmail
    Traditional NFA     GNU Emacs, Java, grep (most versions), less, 
                        more, .NET languages, PCRE library, Perl, 
                        PHP (pcr e routines), Python, Ruby,
                        sed (most versions), vi
    POSIX NFA           mawk, Mortice Kern Systems’ utilities, 
                        GNU Emacs (when requested)
    Hybrid NFA/DFA      GNU awk, GNU grep /egrep, Tcl



### Ordinary Pattern atoms

以下为 pattern.txt 文档中的 6. Ordinary atoms (pattern-atoms) 罗列的规则，
仅作为参考手册使用：

    An ordinary atom can be:

    ^       At beginning of pattern or after "\|", "\(", "\%(" or "\n": matches
            start-of-line; at other positions, matches literal '^'. |/zero-width|
            Example         matches ~
            ^beep(          the start of the C function "beep" (probably).

    \^      Matches literal '^'.  Can be used at any position in the pattern, but
            not inside [].

    \_^     Matches start-of-line. |/zero-width|  Can be used at any position in
            the pattern, but not inside [].
            Example         matches ~
            \_s*\_^foo      white space and blank lines and then "foo" at
                            start-of-line

    $       At end of pattern or in front of "\|", "\)" or "\n" ('magic' on):
            matches end-of-line <EOL>; at other positions, matches literal '$'.
            |/zero-width|

    \$      Matches literal '$'.  Can be used at any position in the pattern, but
            not inside [].

    \_$     Matches end-of-line. |/zero-width|  Can be used at any position in the
            pattern, but not inside [].  Note that "a\_$b" never matches, since
            "b" cannot match an end-of-line.  Use "a\nb" instead |/\n|.
            Example         matches ~
            foo\_$\_s*      "foo" at end-of-line and following white space and
                            blank lines

    .       (with 'nomagic': \.)                            */.* */\.*
            Matches any single character, but not an end-of-line.

    \_.     Matches any single character or end-of-line.
            Careful: "\_.*" matches all text to the end of the buffer!

    \<      Matches the beginning of a word: The next char is the first char of a
            word.  The 'iskeyword' option specifies what is a word character.
            |/zero-width|

    \>      Matches the end of a word: The previous char is the last char of a
            word.  The 'iskeyword' option specifies what is a word character.
            |/zero-width|

    \zs     Matches at any position, but not inside [], and sets the start of the
            match there: The next char is the first char of the whole match.
            |/zero-width|
            Example: >
                    /^\s*\zsif
    <       matches an "if" at the start of a line, ignoring white space.
            Can be used multiple times, the last one encountered in a matching
            branch is used.  Example: >
                    /\(.\{-}\zsFab\)\{3}
    <       Finds the third occurrence of "Fab".
            This cannot be followed by a multi. *E888*
            {not available when compiled without the |+syntax| feature}
    \ze     Matches at any position, but not inside [], and sets the end of the
            match there: The previous char is the last char of the whole match.
            |/zero-width|
            Can be used multiple times, the last one encountered in a matching
            branch is used.
            Example: "end\ze\(if\|for\)" matches the "end" in "endif" and
            "endfor".
            This cannot be followed by a multi. |E888|
            {not available when compiled without the |+syntax| feature}

    \%^     Matches start of the file.  When matching with a string, matches the
            start of the string.
            For example, to find the first "VIM" in a file: >
                    /\%^\_.\{-}\zsVIM

    \%$     Matches end of the file.  When matching with a string, matches the
            end of the string.
            Note that this does NOT find the last "VIM" in a file: >
                    /VIM\_.\{-}\%$

    \%V     Match inside the Visual area.  When Visual mode has already been
            stopped match in the area that |gv| would reselect.
            This is a |/zero-width| match.  To make sure the whole pattern is
            inside the Visual area put it at the start and just before the end of
            the pattern, e.g.: >
                    /\%Vfoo.*ba\%Vr

    \%#     Matches with the cursor position.  Only works when matching in a
            buffer displayed in a window.
            WARNING: When the cursor is moved after the pattern was used, the
            result becomes invalid.  Vim doesn't automatically update the matches.

    \%'m    Matches with the position of mark m.
    \%<'m   Matches before the position of mark m.
    \%>'m   Matches after the position of mark m.
            Example, to highlight the text from mark 's to 'e: >
                    /.\%>'s.*\%<'e..

    \%23l   Matches in a specific line.
    \%<23l  Matches above a specific line (lower line number).
    \%>23l  Matches below a specific line (higher line number).
    \%.l    Matches at the cursor line.
    \%<.l   Matches above the cursor line.
    \%>.l   Matches below the cursor line.

    \%23c   Matches in a specific column.
    \%<23c  Matches before a specific column.
    \%>23c  Matches after a specific column.
    \%.c    Matches at the cursor column.
    \%<.c   Matches before the cursor column.
    \%>.c   Matches after the cursor column.

    \%23v   Matches in a specific virtual column.
    \%<23v  Matches before a specific virtual column.
    \%>23v  Matches after a specific virtual column.
    \%.v    Matches at the current virtual column.
    \%<.v   Matches before the current virtual column.
    \%>.v   Matches after the current virtual column.

    Character classes:
    \i      identifier character (see 'isident' option)     */\i*
    \I      like "\i", but excluding digits                 */\I*
    \k      keyword character (see 'iskeyword' option)      */\k*
    \K      like "\k", but excluding digits                 */\K*
    \f      file name character (see 'isfname' option)      */\f*
    \F      like "\f", but excluding digits                 */\F*
    \p      printable character (see 'isprint' option)      */\p*
    \P      like "\p", but excluding digits                 */\P*

        NOTE: the above also work for multibyte characters.  The ones below only
        match ASCII characters, as indicated by the range.

    \s      whitespace character: <Space> and <Tab>
    \S      non-whitespace character; opposite of \s
    \d      digit:                          [0-9]
    \D      non-digit:                      [^0-9]
    \x      hex digit:                      [0-9A-Fa-f]
    \X      non-hex digit:                  [^0-9A-Fa-f]
    \o      octal digit:                    [0-7]
    \O      non-octal digit:                [^0-7]
    \w      word character:                 [0-9A-Za-z_]
    \W      non-word character:             [^0-9A-Za-z_]
    \h      head of word character:         [A-Za-z_]
    \H      non-head of word character:     [^A-Za-z_]
    \a      alphabetic character:           [A-Za-z]
    \A      non-alphabetic character:       [^A-Za-z]
    \l      lowercase character:            [a-z]
    \L      non-lowercase character:        [^a-z]
    \u      uppercase character:            [A-Z]
    \U      non-uppercase character:        [^A-Z]

        NOTE: Using the atom is faster than the [] form.

        NOTE: 'ignorecase', "\c" and "\C" are not used by character classes.

    \e      matches <Esc>
    \t      matches <Tab>
    \r      matches <CR>
    \b      matches <BS>
    \n      matches an end-of-line

    ~       matches the last given substitute string

    \(\)    A pattern enclosed by escaped parentheses.
            E.g., "\(^a\)" matches 'a' at the start of a line.
            There can only be nine of these.  You can use "\%(" to add more, but
            not counting it as a sub-expression.

    \1      Matches the same string that was matched by
            the first sub-expression in \( and \).
       ...
    \9      Like "\1", but uses ninth sub-expression.
            Example: "\([a-z]\).\1" matches "ata", "ehe", "tot", etc.
            Note: The numbering of groups is done based on which "\(" comes first
            in the pattern (going left to right), NOT based on what is matched
            first.

    \%(\)   A pattern enclosed by escaped parentheses.
            Just like \(\), but without counting it as a sub-expression.  This
            allows using more groups and it's a little bit faster.

    x       A single character, with no special meaning, matches itself
    \x      A backslash followed by a single character, with no special meaning,
            is reserved for future expansions

    []      (with 'nomagic': \[])
    \_[]
            A collection.  This is a sequence of characters enclosed in square
            brackets.  It matches any single character in the collection.
            Example         matches ~
            [xyz            any literal '[xyz'
            [xyz]           any 'x', 'y' or 'z'
            [abc\n]         any 'a', 'b', 'c', and end-of-line
            [^abc\n]        NOT any 'a', 'b', 'c', and end-of-line
            [a-zA-Z]$       any alphabetic character at the end of a line
            \c[a-z]$        same
            [А-яЁё]         Russian alphabet (with utf-8 and cp1251)

        The following character classes are supported:
            Name        Func            Contents ~
            [:alnum:]   isalnum         ASCII letters and digits
            [:alpha:]   isalpha         ASCII letters
            [:blank:]                   space and tab
            [:cntrl:]   iscntrl         ASCII control characters
            [:digit:]                   decimal digits '0' to '9'
            [:graph:]   isgraph         ASCII printable characters excluding
                                        space
            [:lower:]   islower         lowercase letters (all letters when
                        ASCII only     'ignorecase' is used)
            [:print:]   builtin rules   printable characters including space
            [:punct:]   ispunct         ASCII punctuation characters
            [:space:]                   whitespace characters: space, tab, CR,
                                        NL, vertical tab, form feed
            [:upper:]   isupper         uppercase letters (all letters when
                        ASCII only    'ignorecase' is used)
            [:xdigit:]                  hexadecimal digits: 0-9, a-f, A-F
            [:return:]                  the <CR> character
            [:tab:]                     the <Tab> character
            [:escape:]                  the <Esc> character
            [:backspace:]               the <BS> character
            [:ident:]                   identifier character (same as "\i")
            [:keyword:]                 keyword character (same as "\k")
            [:fname:]                   file name character (same as "\f")

        - The following translations are accepted when the 'l' flag is not
          included in 'cpoptions':
                \e      <Esc>
                \t      <Tab>
                \r      <CR>    (NOT end-of-line!)
                \b      <BS>
                \n      line break, see above |/[\n]|
                \d123   decimal number of character
                \o40    octal number of character up to 0o377
                \x20    hexadecimal number of character up to 0xff
                \u20AC  hex. number of multibyte character up to 0xffff
                \U1234  hex. number of multibyte character up to 0xffffffff
          NOTE: The other backslash codes mentioned above do not work inside []!

    \%[]    A sequence of optionally matched atoms.  This always matches.
            It matches as much of the list of atoms it contains as possible.  
            Thus it stops at the first atom that doesn't match.  For example:
                    /r\%[ead]
            matches "r", "re", "rea" or "read".  The longest that matches is used.
            To match the Ex command "function", where "fu" is required and
            "nction" is optional, this would work: >

    \%d123  Matches the character specified with a decimal number.  Must be
            followed by a non-digit.
    \%o40   Matches the character specified with an octal number up to 0o377.
            Numbers below 0o40 must be followed by a non-octal digit or a
            non-digit.
    \%x2a   Matches the character specified with up to two hexadecimal characters.
    \%u20AC Matches the character specified with up to four hexadecimal
            characters.
    \%U1234abcd     Matches the character specified with up to eight hexadecimal
            characters, up to 0x7fffffff


### Tabpage/Window

熟练使用 Vim 的一个表现就是熟悉 tabpage, window, buffer, 以及 register 等基本对象，
可以随意控制光标在整个文档的游走、控制 tabpage, window 对象的切换、开启、关闭、分割等操作，
以及控制 register 寄存器内容的读写（剪切与粘贴）。这些对象是紧密联系的，官方文档对它们的内在
联系的并没有以最好的形式组织文档内容，反而只有 windows.txt 和 tabpage.txt 两个主题参考。
这种 button-up 的文档组织，很容易给新手造成理解困扰，这也就是这个 tom-down 视角下编写的
教程意义之所在。

手册中 intro.txt definitions 先是定义了 buffer, screen, window 的概念，然后隔了
N+1 个主题后，又在 window.txt 中增加了 buffer, window 和 tab page 之间的关系说明。

•  A buffer is the in-memory text of a file.
•  A window is a viewport on a buffer.
•  A tab page is a collection of windows.
• *buffer*  Contains lines of text, usually read from a file.
• *screen*  The whole area that Vim uses to work in.  This can be
            a terminal emulator window.  Also called "the Vim window".
• *window*  A view on a buffer.  There can be multiple windows for one buffer.

综合起来，就是一个 Vim 程序在操作系统提供的终端环境中运行（非图形界面版本），这个环境就是
终端模拟器（软终端）提供的控制台窗口，然后 Vim 作为应用软件运行于终端，即用户所看到的软件
界面，暂且称之为 Vim 主界面。这个主界面的结构就如以下示意图所展示的那样。

假设，使用 `vim -p3` 运行 Vim 或者使用内置命令 `:tabnew "tab page 1"` 创建多个
标签页面 (tab-page)，并且使用 `:new window 1` 这样的命令创建新多个窗口，那么 Vim 
主界面就会和以下这示意图相似。这也是 Vim 界面的较完整的形态，当然还有菜单并没呈现。但这
个基本结构已经足够用来说明 Vim 的软件基本结构了。

但是以上内容显然还是不能全面地分解一个 Vim 程序结构。作为一个编辑器，它最重要的部分除了
功能特性之外，应该就是数据的存储与管理，这部分正好对应 buffer 和 register 两类对象。

┌──────────────────────────────────────────────────────────────────────┐
│ tab page 1 │ tab page 2 │ tab page 3 │ ...                           │
┌────────────┘────────────┘────────────┘───────────────────────────────┐
│                             │                                        │
│~                            │~                                       │
│~                            │~                                       │
│~           window 1         │~               window 2                │
│~                            │~                                       │
│~                            │~                                       │
│~                            │~                                       │
│==== status line =============== status line =========================│
│                                                                      │
│~                                                                     │
│~                                                                     │
│~                                                                     │
│~                            window 3                                 │
│~                                                                     │
│~                                                                     │
│~                                                                     │
│==== status line =====================================================│
│:new window 4 | split | vsplit                                        │
└──────────────────────────────────────────────────────────────────────┘

    ┌───────────────────────────┐   ┌───────────────────────────┐
    │ More goto and marks:      │   │ Windows navigation:       │
    │                           │   │                           │
    │ #G  goto # line           │   │ C-W_w  circle switch      │
    │ %   goto matching bracket │   │ C-W_h  to left window     │
    │ m{a-zA-Z}  mark location  │   │ C-W_j  to window below    │
    │ `{a-zA-Z}  jump to mark   │   │ C-W_k  to window above    │
    │ '{a-zA-Z}  jump to mark   │   │ C-W_l  to right window    │
    │ ``  toggle mark location  │   │ C-W_=  equalize windows   │
    │ ''  last location         │   │ C-W__  maximize window    │
    │ ''  last location         │   │ C-W_t  move window to top │
    │ '.  last edit position    │   │ C-W_b  move window to bot │
    └───────────────────────────┘   │ C-W_s  horizontal split   │
    ┌───────────────────────────┐   │ C-W_v  vertical split     │
    │ Tabpage and buffer:       │   │ C-W_c  close window       │
    │                           │   │ C-W_q  quit window/Vim    │
    │ ZZ      save and quit     │   └───────────────────────────┘
    │ ZQ :x   quit window       │   ┌───────────────────────────┐
    │ :qa[ll] Exit Vim unsaved  │   │ Windows Scrolling         │
    │ :edit! reload             │   │                           │
    │ :b  #  edit # buffer      │   │ zz  focus on current line │
    │ :bd #  delete # buffer    │   │ zh or zH  scroll to left  │
    │ :ls    list buffers       │   │ zl or zL  scroll to right │
    │ :ls!   show all unlisted  │   │ C-u   half page upwards   │
    └───────────────────────────┘   │ C-d   half page downwards │
                                    │ C-f   pages forwards      │
                                    │ C-b   pages backwards     │
                                    └───────────────────────────┘

Vim 手册中对命令的注解也比较零乱，缺少应有的条理，有可能是文档历史遗留下来的问题。比如说，
`!` 后缀符号在语义上强制执行命令，但是文档中，将 `q[uit]` 和 `q[uit]!` 当作两个命令
分开给出参考内容。另外，像 `:hide` 这样的命令，其本意就不是 hide a window，而是关闭。
当然，这种问题的根源不在于文档，而在于代码设计者。

以下几个涉及 tabpage 和 window 对象创建（分割）的操作是必需技术。这些命令都配置有默认
快捷键操作它们，并且使用快捷键操作也依然可以先行为命令设定前缀参数。比如新建 window 的
宽高数值 [N]，或者创建 tabpage 时指定标签页数量 [N]：

    :[count]tabe[dit] [++opt] [+cmd] {file}
    :[count]tabnew    [++opt] [+cmd] {file}

    :[N]new      [++opt] [+cmd] {file}      CTRL-W_n
    :[N]sp[lit]  [++opt] [+cmd] {file}      CTRL-W_s
    :[N]vs[plit] [++opt] [+cmd] [file]      CTRL-W_v

    :{count}q[uit][!]                       CTRL-W_q
    :{count}clo[se][!]                      CTRL-W_c

通过以上命令自动创建相应的缓冲区对象。Vim 没有提供命令直接创建 buffer 对象，但是提供了丰富的
缓冲区相关的操作命令。这使得 Vim 的操作思维不像其它软件，就像 Chrome 浏览器中的网页标那样可以
随意拖曳位置。Vim 的用户思维是：tabpage 是相对固定的，window 也是相对固定的，但是它们的装载
的数据对象（buffer）是可变的，它们的外观尺寸是可调整的。一般，用户的 Vim 工作区一旦设置好，
几本上是不会频繁的去调整的。

Vim 提供了用于控制光标在 tabpage 中的窗口间游走的快捷键：Ctrl-W_h/j/k/l 这和 Vim 默认的
光标移动方向键一致。另外还有 Ctrl-W_t/b/p/P 作用对应 top/bottom/previous/Preview。
Vim 当然也提供了 window-moving 操作，可以调换窗口的位置，但这并不是常用功能。只需按常规的
Vim 光标控制和上下左右语义所对应的大写字母去理解快捷键：Ctrl-W_H/J/K/L/r/R/x/T，其中的
x 和 T 分别表示交互（exchange）和 移到标签页(tabpage)，字母 r 或 R 自然是两个旋转方向。

Vim 运行中支持 `CTRL-Z` 来执行后台挂起，以运行其它 shell 命令，然后再通过 bash 提供的
`fg` 命令恢复运行。参考 usr_21.txt Go away and come back 文档介绍。

Vim 提供了一个会话机制，可以将当前的界面布局数据保存到会话文件，它也是一个 Vim 脚本。在启动
Vim 时使用 `vim -S session.vim` 来加载指定的会话脚本，等价于 `:source session.vim`，
就是通过脚本控制、调整窗口 布局，免去重复的手动操作。会话脚本会记录记录当前 Vim 用户设置的
环境配置值，包括选项配置与键盘映射等。可以在使用 Vim 过程随时通过 `:mksession` 命令将会话
状态写入指定文件。默认会话脚本为 `~/Session.vim`。

        :mksession ~/Session.vim
        :source ~/Session.vim

        vim -S ~/Session.vim

The windows that were open are restored, with the same position and size as
before.  Mappings and option values are like before.
   What exactly is restored depends on the 'sessionoptions' option.  The
default value is:
"blank,buffers,curdir,folds,help,options,tabpages,winsize,terminal".

        blank           keep empty windows
        buffers         all buffers, not only the ones in a window
        curdir          the current directory
        folds           folds, also manually created ones
        help            the help window
        options         all options and mappings
        tabpages        all tab pages
        winsize         window sizes
        terminal        include terminal windows

Change this to your liking.  To also restore the size of the Vim window, for
example, use: >

        :set sessionoptions+=resize


    state       displayed   loaded      ":buffers"  ~
                in window                shows       ~
    active        yes        yes          'a'
    hidden        no         yes          'h'
    inactive      no         no           ' '

:files[!] [flags]                               *:files*
:buffers[!] [flags]                             *:buffers* *:ls*
:ls[!] [flags]
                Show all buffers.  Example:

                        1 #h   "/test/text"             line 1 ~
                        2u     "asdf"                   line 0 ~
                        3 %a + "version.c"              line 1 ~

                When the [!] is included the list will show unlisted buffers
                (the term "unlisted" is a bit confusing then...).

                Each buffer has a unique number.  That number will not change,
                thus you can always go to a specific buffer with ":buffer N"
                or "N CTRL-^", where N is the buffer number.

                For the file name these special values are used:
                        [Prompt]        |prompt-buffer|
                        [Popup]         buffer of a |popup-window|
                        [Scratch]       'buftype' is "nofile"
                        [No Name]       no file name specified
                For a |terminal-window| buffer the status is used.

                Indicators (chars in the same column are mutually exclusive):
                u       an unlisted buffer (only displayed when [!] is used)
                           |unlisted-buffer|
                 %      the buffer in the current window
                 #      the alternate buffer for ":e #" and CTRL-^
                  a     an active buffer: it is loaded and visible
                  h     a hidden buffer: It is loaded, but currently not
                           displayed in a window |hidden-buffer|
                   -    a buffer with 'modifiable' off
                   =    a readonly buffer
                   R    a terminal buffer with a running job
                   F    a terminal buffer with a finished job
                   ?    a terminal buffer without a job: `:terminal NONE`
                    +   a modified buffer
                    x   a buffer with read errors

                [flags] can be a combination of the following characters,
                which restrict the buffers to be listed:
                     +   modified buffers
                     -   buffers with 'modifiable' off
                     =   readonly buffers
                     a   active buffers
                     u   unlisted buffers (overrides the "!")
                     h   hidden buffers
                     x   buffers with a read error
                     %   current buffer
                     #   alternate buffer
                     R   terminal buffers with a running job
                     F   terminal buffers with a finished job
                     ?   terminal buffers without a job: `:terminal NONE`
                     t   show time last used and sort buffers
                Combining flags means they are "and"ed together, e.g.:
                     h+   hidden buffers which are modified
                     a+   active buffers which are modified

                When using |:filter| the pattern is matched against the
                displayed buffer name, e.g.: >
                        filter /\.vim/ ls

## Powerful Commands

如果要罗列 Vim 的命令，那真的是太多了。这些命令提供了丰富的可编程特性，而用好这此功能需要有
一些 Vim 脚本编程的基本知识。因为 Vim 脚本有些古怪，不必要求精通，知道基本的脚本使用即可。
以下是几个重要的功能：

• `:substitute` 兼有内容搜索查找、替换编辑、光标跳转功能，参考 Fly in the Vim World；
• `:autocmd` 文档事件自动化处理命令，给各种文件及不同事件设置自动命令，将命令功能自动化；

Vim 编程文档主要在 vim9.txt、vim9class.txt 和 eval.txt (兼容旧版本)。Vim 为脚本设计
了多种变量作用域，通过不同的前缀来指定 (variable-scope, vim9-scopes)。变量没有任何作用
域前缀修饰时，有三种情形：函数内的无前缀变量为函数作用域，脚本文件级别中编写的变量会作为全局
作用域（旧版）、脚本局部作用域（Vim9 默认作用域）。参考 eval.txt 3. Internal variable。

    There are several name spaces for variables.  Which one is to be used is
    specified by what is prepended:

                    (nothing) In a function: local to the function;
                              in a legacy script: global;
                              in a |Vim9|  script: local to the script
    |buffer-variable|    b:   Local to the current buffer.
    |window-variable|    w:   Local to the current window.
    |tabpage-variable|   t:   Local to the current tab page.
    |global-variable|    g:   Global.
    |local-variable|     l:   Local to a function (only in a legacy function)
    |script-variable|    s:   Local to a |:source|'ed Vim script.
    |function-argument|  a:   Function argument (only in a legacy function).
    |vim-variable|       v:   Global, predefined by Vim.

要使用 Vim9 script 语法，可以按照以下方式设置：

- a function defined with the `:def` command
- a script file where the first command is `vim9script`
- an autocommand defined in the context of the above
- a command prefixed with the `vim9cmd` command modifier

可以混用旧版或 Vim9 脚本，通过前缀修饰符来限制命令：

    :vim9[cmd] {cmd}
    :leg[acy] {cmd}

        " comments may go here
        if !has('vim9script')
           " legacy script commands go here
           finish
        endif
        vim9script
        # Vim9 script commands go here

新版本引入 `import`  和 `export` 关键词用于导入其它脚本导出的函数。可以导入自动加载脚本，
即那些保存在 Vim 运行时搜索路径 'runtimepath' 列表中的 autoload 目录下的脚本。只需使用
`import autoload ...` 语法。假设自动加载脚本为 autoload/for/myplugin.vim，那么它导出
的函数或者符号都会添加 "for#myplugin#" 这个前缀，注意前缀中包括子目录和脚本名。

旧版本脚本中的函数名必需大写字母开头作为全局函数（因此多个脚本中的同名函数可能冲突），或者使用 `s:` 前缀，将函数定义为脚本局部函数。使用 Vim9 脚本解析时，不使用 # 号连接前缀名称，而是使用
`export` 关系词，或者使用 `g:` 前缀定义全局函数，名称一样需要大写字母开头。但不能使用 `s:`
前缀，因为默认就是脚本局部函数。

编写自动加载脚本时，自动加载函数的定义有两种基本形式，一是使用带有 # 为分隔符的前缀形式，或者
Vim9 中使用 `export` 导出的形式，它们必需定义为全局函数，这样才是可以自动加载的函数，常用
于插件开发。脚本中的局部函数不会被自动加载，即使是在自动加载脚本中。自动加载机制的工作原理是：
在 Vim 解析器解析到用户在调用带有 # 前缀或者导出的函数时自动加载并解析。也就是说，自动加载
并非在 Vim 启动时加载自动脚本。因此在自动脚本中定义的全局函数在用户调用自动加载函数之前并没有
被加载。只有先调用可自动加载的函数，此时才会执行自动加载脚本，并且，脚本顶级代码只初始执行一次，
后续不再执行。比如，脚本 myplugin.vim (自动加载目录下) 编写以下测试函数，然后启动 Vim，就
可以通过 `:call` 命令调用它，此时脚本会被自动加载。但不能先调用 `:1,8call Comment()`，
因为它不是自动加载函数，不会触发自动加载机制。注意：Vim 不支持循环引用，在脚本中出现循环引用
将导致错误，无法正确解析脚本中的函数。

    function myplugin#test(...)
        echo printf("argc: %s, = %s", a:[0], a:["000"])
    endfunction
    " :call myplugin#test("T","V")
    " {0: 2, 000: [T, V], 2: V, 1: T, firstline: 26, lastline: 26}

    :function Comment() range
    :  execute (a:firstline + 1) .. "," .. a:lastline .. 's/^/" '
    :endfunction
    " :4,8call Comment()

Vim9 脚本中可以直接调用函数而不必通过 `:call`，可以使用前缀冒号或者 `:exe @a` 语法执行
寄存器中的命令。赋值不使用 `:let` 命令，也不能使用 `:unlet` 解除非全局变量，但可以解除全局
变量定义或者 List 与 Dictionary 对象变量。明确了赋值号 = 两边需要空格。局部变量用 `:var` 
声明，局部常量使用`:final` 或者 `:const` 声明。具体差异参考 vim9-differences 文档

    vim9script
    export def g:GlobalFunc(): string
        var local = 'this is a function local variable'
        return local
    enddef
    echo g:GlobalFunc()
    g:global = 'this is a global variable'
    var scriptva = 'this is a script variable'
    # var s:var = 'E1016: Cannot declare a script variable'
    # var w:var = 'E1016: Cannot declare a window variable'
    # var b:var = 'E1016: Cannot declare a buffer variable'
    # var t:var = 'E1016: Cannot declare a tab variab'
    echo  g:global
    echo  scriptva
    unlet g:global
    # unlet scriptva # E1081: Cannot unlet script variable

接下来认识一下 Vim 脚本中变量的 10 种数据类型，其中数值有整数和浮点数两种：

    Number      A 32 or 64 bit signed number.  |expr-number|
    Float       A floating point number. |floating-point-format|
    String      A NUL terminated string of 8-bit unsigned characters (bytes).
    List        An ordered sequence of items, see |List| for details.
    Dictionary  An associative, unordered array.
    Funcref     A reference to a function |Funcref|.
    Special     |v:false|, |v:true|, |v:none| and |v:null|.
    Job         Used for a job, see |job_start()|. 
    Channel     Used for a channel, see |ch_open()|.
    Blob        Binary Large Object. Stores any sequence of bytes.

Job 就是 `system()` 函数或者 `:!cmd` 命令形式的补充，它不需要像这两种执行 shel 命令的
方式，不需要同步等待 shell 命令的操作完成，Job 对象可以用于异步调用 shell 命令。

上表中的 Job 和 Channel 属于进程间通信技术中的对象，属于管道通信实现方式。参考文档
chnnnel.txt Inter-process communication。Vim 主要的基于 socket 或者 pipe 实现了
四种 Job 形式。支持 5 种数据传输格式，对应 5 种通信模式。应用于开发插件，比如基于 LSP 协议
的智能提示功能的插件：

1. [socket] A daemon, serving several Vim instances.
2. [socket, pipes] One job working with one Vim instance, asynchronously.
3. [socket, pipes] A job performing some work for a short time, asynchronously.
4. [pipes] Running a filter, synchronously.

    RAW    nothing known, Vim cannot tell where a message ends
    NL     every message ends in a NL (newline) character
    JSON   JSON encoding |json_encode()|
    JS     JavaScript style JSON-like encoding |js_encode()|
    LSP    Language Server Protocol encoding |language-server-protocol|

Vim 支持常用的 + - * / 和求模 % 等数值运算符号，其中 + - 两个符号也是一元符号表示正负数。
Vim 比较两个值时，其中一个为数值，那么就会将另一个转换数值再做比较，使用数值运算符号时也一样。
在开发插件时使用的 `<SID>` 自动序列号也是数值。字符串连接使用句点 (concatenation) 表示。
布尔值 v:true 和 v:false、v:null、v:none、[] 在数值转换时分别等价于数值 1 和 0。注意，
与字符串做算术时，浮点数不会自动转换为字符串。Vim9 增加了类型判断表达式 `<type>expr9`。

    :echom "hello"   + 10   "  0 + 10 =  10
    :echom "10hello" + 10   " 10 + 10 =  20
    :echom "hello10" + 10   "  0 + 10 =  10
    :echom "0b10"    - 10   "  2 - 10 =  -8
    :echom "0x10"    * 10   " 16 * 10 = 160
    :echom "0100"    / 10   " 64 / 10 =  7
    :echom "0100"    / 10   " 64 / 10 =  7
    :echom "1.0e2"   + 0    "  1 +  0 =  1
    :echom 1.0e2     + 0    " 1.0e2 + 0 = 100

Vim 支持按位移位运算，以及与、或、非逻辑运算，但未见文档提示有异或（XOR）：

    expr6 << expr6          bitwise left shift
    expr6 >> expr6          bitwise right shift
    expr3 || expr3 ...      logical OR
    expr4 && expr4 ...      logical AND
    ! expr9                 logical NOT

Vim 除了提供一般语言中由 = ! < > 等符号组合起来的比较运算符号之外，还提供 =~ 和 !~ 用于正则
表达式匹配比较，以及 ==? (ignoring case) 和 ==# (match case) 限制大小写敏感模式的比较。
对于 List/Dictionary/Blob 对象实例的判断，使用专用的 is 和 isnot 比较运算符。

Vim 表达式语法中，最具特色的莫过选项（变量）、寄存器（变量）、环境变量的求值赋值，分别使用前缀
& @ $ 三个符号。这三种变量中的选项变量配有专用的命令 `:set` 来设置其值，或后缀 ? 问号查询值，
后缀 ! 感叹号进行布尔值取反再赋值，或者使用 += -= 组合运算符号修改标志位值的选项中的 flags。
其它变量与一般的脚本变量语法一致，使用 `:let` 命令或者语句赋值。另外，Vim 还给选项提供语义上
的专用值，比如大小写比较模式选项 'ignorecase' 可以通过 `:set noignorecase` 设置不敏感，
等价于 `:set ignorecase=0` 或 `:set ignorecase=v:false`。

    For buffer-local and window-local options:
        Command              global value    local value 
    ======================= ==============  =============    
          :set option=value      set             set
     :setlocal option=value       -              set
    :setglobal option=value      set              -
          :set option?            -            display
     :setlocal option?            -            display
    :setglobal option?          display           -


需要注意，Vim 继承了历史遗产，这也时导致其脚本规则变得复杂的原因。比如 # 符号在 vi 命令中作
显示当前行内容并添加行号前缀。但是 Vim9 引入 # 作为新的注解符号，而原有的功能使用 `:number`
命令替代。而这个单词也作为“行号显示”状态的选项使用，`:number` 与 `:set number` 完全具有
不同含义。所以，如果不注意符号的使用，可以出现意外的作用。

参考文档 eval.txt Expression syntax (expression-syntax)。

    number                  number constant
    "string"                string constant, backslash is special
    'string'                string constant, ' is doubled
    [expr1, ...]            |List|
    {expr1: expr1, ...}     |Dictionary|
    #{key: expr1, ...}      legacy |Dictionary|
    &option                 option value
    (expr1)                 nested expression
    variable                internal variable
    va{ria}ble              internal variable with curly braces
    $VAR                    environment variable
    @r                      contents of register 'r'
    function(expr1, ...)    function call
    func{ti}on(expr1, ...)  function call with curly braces
    {args -> expr1}         legacy lambda expression
    (args) => expr1         Vim9 lambda expression

条件分支 if-else 语句结构中不使用括号包裹条件，在并行表达时使用 | 连接语句，而不是分号。
Vim 默认区分大小写，但是用户可以改变设置。如果编写通用的插件代码，就不应该出现这种受环境
变化而改变运行逻辑的代码，包括映射键盘时使用 `:map` 这样的命令。插件开发应该使用防御性
编程 (defensive programming)。

:if "foo" == "FOO"
:    echom "foo is FOO if ignorecase"
:elseif "nope!"
:    echom "elseif"
:else
:    echom "finally!"
:endif

    :autocmd BufNewFile * :write
             ^          ^ ^
             |          | |
             |          | The command to run.
             |          |
             |          A "pattern" to filter the event.
             |
             The "event" to watch for.

    :autocmd BufWritePre,BufRead *.html :normal gg=G
    :autocmd FileType python     :iabbrev <buffer> iff if:<left>
    :autocmd FileType javascript :iabbrev <buffer> iff if ()<left>

    :augroup testgroup
    :    autocmd! " Claar augroup
    :    autocmd BufWrite * :echom "Foo"
    :    autocmd BufWrite * :echom "Bar"
    :augroup END

Skim `+:help autocmd-events+` to see a list of all the events you can
bind autocommands to. You don't need to memorize each one right now.
Just try to get a feel for the kinds of things you can do.


* Starting to edit a file that doesn't already exist.
* Reading a file, whether it exists or not.
* Switching a buffer's `+filetype+` setting.
* Not pressing a key on your keyboard for a certain amount of time.
* Entering insert mode.
* Exiting insert mode.

Vim 自己默认加载一系列常规功能插件，可以用 `:scriptnames` 查看所有加载的插件脚本文件。


1. Multiple repeats                                     *multi-repeat*

*:g* *:global* *E148*
:[range]g[lobal]/{pattern}/[cmd]
                        Execute the Ex command [cmd] (default ":p") on the
                        lines within [range] where {pattern} matches.

:[range]g[lobal]!/{pattern}/[cmd]
                        Execute the Ex command [cmd] (default ":p") on the
                        lines within [range] where {pattern} does NOT match.

*:v* *:vglobal*
:[range]v[global]/{pattern}/[cmd]
                        Same as :g!.


根据 usr_51.txt Write plugins 文档描述的两种插件脚本的编写方式，完全取于映射的作用空间：

•   global plugins: For all types of files.
• filetype plugins: Only for files of a specific type.


全局插件涉及的特殊参数 (plugin-special) 或者方法：

var name                Variable local to the script.

<SID>                   Script-ID, used for mappings and functions local to
                        the script.

hasmapto()              Function to test if the user already defined a mapping
                        for functionality the script offers.

<Leader>                Value of "mapleader", which the user defines as the
                        keys that plugin mappings start with.

map <unique>            Give a warning if a mapping already exists.

noremap <script>        Use only mappings local to the script, not global
                        mappings.

exists(":Cmd")          Check if a user command already exists.

局部插件（文件类型相关的插件，ftplugin-special）涉及到的特殊参数与函数：

<LocalLeader>           Value of "maplocalleader", which the user defines as
                        the keys that filetype plugin mappings start with.

map <buffer>            Define a mapping local to the buffer.

noremap <script>        Only remap mappings defined in this script that start
                        with <SID>.

setlocal                Set an option for the current buffer only.

command -buffer         Define a user command local to the buffer.

exists("*s:Func")       Check if a function was already defined.

Also see |plugin-special|, the special things used for all plugins.



## Keyboar Mapping

按键影射 (key_map) 确实是个技术问题。键盘从击键到串口输入控制中心，再到操作系统，以及软件终端，
这里经过层层盘剥，早已不是原来的面目。一方面，系统图形软件需要用一些按键来实现快捷控制，主要有
用于菜单的加速键 （Accelerator）和热键（HotKey）。这些已经有功能的按键将会被过滤掉，并不会
传递给终端应用程序。

从键盘硬件产生的信号根源来看，这涉及到早期的硬件终端的信号传递约定。

ANSI 转义序列（ANSI Escape Sequences）的部分序列约定：

• ESC - 以 ESC（\x1B） 开头的序列，对应 ASCII 字符 `[`
• SGR (Select Graphic Rendition) 是一组用于控制光标和字体的控制代码
• CSI (Control Sequence Introducer)：以 `ESC [` 或 CSI（\x9B）开头的序列
• DCS (Device Control String)：以 `ESC P` 或 DCS （\x90）开头的序列
• OSC (Operating System Command)：以 `ESC ]` 或 OSC（\x9D）开头的序列

早期的硬终端使用的控制代码 (ANSI/VT100) 用来控制终端的特殊命令，它可以改变颜色和光标的位置，
实现那些无法被程序本身完成的操作。如果控制代码是可被终端解析（不可显示）的代码，则会直接执行硬件
操作，比如设置字体或背景颜色，而不是打印到屏幕。可以使用 echo 命令来测试终端支持什么控制代码。

```bash
echo -e '\033[?47h'  # save screen and create new screen
echo -e '\033[?47l'1 # restore screen that saved
printf '%b\n' 'It is\033[31m not \033[39mintelligent to use\033[32m hardcoded ANSI\033[39m codes!'
```

有些终端为了避免用户粘贴的内容被当作控制码解释，会使用 bracketed paste mode，也就是前缀 
“^[[200~” 这样的控制代码，将粘贴的内容完全当作是字符串处理。

这里很有必要澄清一个概念：终端是运行程序的控制台“窗口”，Bash 和 Vim 是“窗口里运行的应用程序”。
当技术进化到现在，只有软件模拟的终端的时代，因为 terminal 一词主要指的就是软件实现的具有硬件
终端功能的程序。也因传统使得约定，软件中本来可以很方法的实现的功能，却因为历史包袱，需要以控制码
的方式来控制。一些软件也使用这些控制代码。可以在 less、vim、top、screen 等应用程序中看到屏幕
保存/恢复操作，这些程序可能会提供参数 禁能 此操作。如，less 命令可以使会用 -X 参数禁能此操作。
当然，Vim 这种继承历史包袱的一大回报就是：它可以在现有任何可以支持 shell 的环境中运行，也包括
远程终端连接，这是最接近历史上硬件终端工作方式的使用场景。

• https://www.lihaoyi.com/post/BuildyourownCommandLinewithANSIescapecodes.html
• [XTerm Control Sequences by Edward Moy](https://invisible-island.net/xterm/ctlseqs/ctlseqs.html)

在终端下使用 vim/neovim, emacs, nano 都会碰到使用 ALT 键的情况（终端下叫做 meta 键），
由于历史原因，大部分终端软件的默认设置都无法正确使用 ALT 键。正确使用 ALT 键最简单的做法是：
将终端软件的 “Use Alt as Meta key” 功能打开，意思是在终端下按下 ALT+X 时就将其转换为
`<ESC>x` 两个字节发送给应用程序，对应字节码为：0x27, 0x78。注意 ESC 后面是小写 x，如果
是大写字母 X 就变成 ALT+SHIFT+X，其它字母也如此。

```vim
"" Map Alt-x by ANSI Escape Sequences
:map <Esc>x :echo "Escaped Alt"

"" Map Alt-x by Vim default
noremap <M-x> :echo "ALT-X pressed"<cr>

exec "set <M-x>=\ex"
set ttimeout ttimeoutlen=100
```

在终端里同时按下 ALT-X 和先按 ESC 键再按 X 键其实是没有区别的，但是软件中有一个时间检测窗口，
只要是在这个窗口内发生的按键都认为是组合键。一般设置成 50ms ~ 100ms，尽量不要低于 25ms，
否则在网络远程操作的终端上就可能有高概率会判断错误。远程主机一般靠超时来区别到底是不是 ALT-X，
还是先按 ESC 再按 X 键，这就会识别成两个次按键动作。Vim/NeoVim 通过 ttimeoutlen 来设置
功能键超时检测。

早年的终端，处理 ALT 组合键时，将单个字符的最高位设置成 1，按照 map-alt-keys 文档说明，
这也是 Vim 的默认处理方式。只是现在支持这种处理方式的终端较少，其优点是避免了 ESC+x 这种
模式的额外处理过程，可以直接识别，不需要计算按两个键之间的超时。如果你的 Vim 设置 `<M-x>`
按键不能正常工作，那么很大可能就是运行 Vim 的终端并不是这种方式处理 Alt 组合按键。这种情况，
你就应该在 Vim 配置中使用 ANSI Escape Sequences 这种方式设置映射键。

使用 showkey 这类键盘码扫描检测工具来检测设置是否正确，看看软件接收到终端发来的是什么数据。

Vim 内部的按键映射处理机制与延时机制稍有不同，但也有延时机制的参与。Vim 按键输入为连续的序列，
用户在设定时间内连续的按键，就作为一个序列解释，这里有几种种情况：

• 单一按键：如果按键已经映射到命令（各种模式），那么立即执行映射的命令；
• 多个按键，并且在超时时间范围内：按键将按照现有的按键序列映射执行相应的命令；
• 多个按键，超时：按键序列将作为普通按键输入；

使用演示，以下映射了一个插入模式下的按键序列，在插入模式中连续按下 jk 两键，那么它们（这个序列）
将解释一个返回正常模式的命令 `<Esc>`，而非在文本区输入字符，因为此时已经消耗了输入序列中的符号。

    "" Press jk to escape to normal mode from insert mode
    inoremap jk <Esc>

因此，Vim 与用户对话的过程，用户键盘的输入就是一组编程过的字符序列，具体功能取决于映射的功能，
可以是 Vim 内置的映射，也可以是用户自定义的映射，甚至是覆盖内置的映射。Vim 提供多个命令用于
映射不同模式下的按键序列，或者使用 `:map` 映射所有模式中通用的按键序列。映射函数有两种工作
模式，一种是名称中带有 [nore] 部分的非递归映射（no recusive），另外的对应是递归映射。一般
推荐先使用非递归映射，只有在需要将按键序列层层嵌套映射的情况下才使用递归映射。比如说映射再个全局
序列，`:map abc ABC` 以及 `:map ABC :echo "ABC"<CR>` 那么按下 abc 按键时，对应序列
将递归地替换为 ABC，也就是执行命令打印出 "ABC"。递归与非递归的的差别就在于递归替换的过程，
在递归映射模式下，有此序列可能会因为 Vim 内置映射的存在而失效。并且，插件模式下这些递归影射
可能完全无效，因为被当作文本字符输入，只能使用插件模式专用的映射，`:imap` 或者 `:inoremap`。
并且插件模式下的映射的目标序列（映射命令的右值）会当作字符插入到文本区，除非切换到正常模式，
或者使用非字符形式的功能键、组合键。

在选择或者设置按键序列时，应该以哈夫曼前缀编码（Prefix code ）为基本原则，也就是尽量不在
多个映射规则中的序列中使用相同的前缀，因为 Vim 在处理按键序列时，只要匹配到一条规则，就会
执行相应的目标命令、或其它嵌套映射，虽然会按最长有效序列优先行。但是用户在输入时如果有停顿，
那么就有可能误触意外操作。比如映射了 `ab` 和 `abc` 两个序列，那么用户连续输入 abc 按键时
会先触发 `abc` 这个映射，而不是 `ab`，但是如果用户停顿后再输入 c 则触发 `ab` 这条规则。

对于现有的按键映射规则，可以直接使用 `:map` 这样不带参数的命令来查询（listing mappings）。
映射命令对应有两组解除映射命令，分别是带有 clear 后缀的批量清除映射命令，以及其它用于清除
单独映射规则命令。此外，还可以使用映射命令与 `<nop>` 无操作记号来禁用旧旧映射规则，比如
`:inoremap <esc> <nop>`。

Vim 脚本的自动加载功能为用户提供编写插件脚本的机制。因此，就可以存在不同的用户插件使用的同样的
自定义命令名称，或者因注册相同名称的键盘映射而导致 Vim 程序运行出错。为了尽量避免命令、按键冲突，
Vim 为映射方法提供了多个选项来限制按键的作用范围：

• `<SID>` script ID：可直接前缀于（插件脚本内的）命令名前面，映射限制在脚本内部空间；
• `<Plug>` 插件名：不与任何按键序列匹配，也用于将映射限制在脚本内部空间；
• `<unique>` 唯一性：确保映射不会重复（覆盖），否则就会弹出警告信息；
• `<expr>` 作为首个参数，映射命令右值将作为表达式进行解释，表达式动态求值结果作为映射的目标；
• `<buffer>` 绑定缓冲区：确保映射不会应用到其它文件中；
• `<Leader>` 前导键：所映射的按键只在 `mapleader` 全局变量所设置的按键敲击后生效；
• `<LocalLeader>` 局部前导键：映射只在 `maplocalleader` 局部变量所设置的按键敲击后生效。

以下是一个插件中用于映射内部函数的映射命令完整形式，参数细节参考 `:map-arguments` 文档。

    :map <script> <silent> <nowait> <buffer> <Leader><F1> :call <SID>Help()<CR>

Vim 在执行映射时，会自动将 `<SID>` 替换为一个唯一的序列号前缀，使用 `<SNR>` 表示，以实现与
其它插件映射的区分。在内部使用 `<SNR>123_` 的格式表示，数字部分代表脚本编号。

前导键 `<LocalLeader>` 和 `<Leader>` 类似，只不过局部前导键它只作用于某种文件类型。如果
需要设置某种文件类型专用命令，那么使用局部前导键是正确的用法。这里的“局部”一词的含义一般与
某个 buffer 或者某种文件相关。

设置 `mapleader` 和 `maplocalleader` 时最好区分开，不要出现冲突。前导键的设置在映射时
生效，完成映射后再修改前导键变量时，不会影响已经完成映射的按键。等价于直接在映射命令的按键序列
中硬编码对应的按键。在未设置 `g:mapleader` 全局变量的情况下，使用反斜杠作为默认的的前导键。
因此，下面两组按键映射等价：

```vim
    map <Leader>A  oanother line<Esc>
    map \A         oanother line<Esc>

    " But after (legacy script): >
    let mapleader = "\\"
    " Or (Vim9 script): >
    g:mapleader = "\\"
    map \A  oanother line<Esc>
```

以下脚本片段来自官方 write-plugin 文档中的插件 Demo，演示了限制按键映射作用在脚本内部：

```vim
if !hasmapto('<Plug>TypecorrAdd;')
 map <unique> <Leader>a  <Plug>TypecorrAdd;
endif
noremap <unique> <script> <Plug>TypecorrAdd;  <SID>Add

noremenu <script> Plugin.Add\ Correction      <SID>Add

noremap <SID>Add  :call <SID>Add(expand("<cword>"), 1)<CR>

function s:Add(from, correct)
 let to = input("type the correction for " .. a:from .. ": ")
 exe ":iabbrev " .. a:from .. " " .. to
 if a:correct | exe "normal viws\<C-R>\" \b\e" | endif
 let s:count = s:count + 1
 echo s:count .. " corrections now"
endfunction
```

TIP: 面包屑导航 (Breadcrumb Navigation) 这个概念来自童话故事"汉赛尔和格莱特"，当汉赛尔
和格莱特穿过森林时，不小心迷路了，但是他们发现在沿途走过的地方都撒下了面包屑，让这些面包屑来
帮助他们找到回家的路。

以下数据表结合文档给出的详细 Vim 模式与映射命令的关联表，整合文档内容包含 usr_40.txt
Make new commands 以及 map.txt 1. Key mapping 等文档资料，map-table，map-listing，
：

    When listing mappings the characters in the first two columns are:

      CHAR      MODE    ~
     <Space>    Normal, Visual, Select and Operator-pending
        n       Normal
        v       Visual and Select
        s       Select
        x       Visual
        o       Operator-pending
        !       Insert and Command-line
        i       Insert
        l       ":lmap" mappings for Insert, Command-line and Lang-Arg
        c       Command-line
        t       Terminal-Job

    Just before the {rhs} a special character can appear:
    *   indicates that it is not remappable
        &       indicates that only script-local mappings are remappable
        @       indicates a buffer-local mapping

                            Mode   | n | i | c | v | s | o | t | l | ~
    Map Command / Unmapping        +---+---+---+---+---+---+---+---+ ~
     [nore]map  unmap  mapc[lear]  | Y | - | - | Y | Y | Y | - | - |
    n[nore]map nunmap nmapc[lear]  | Y | - | - | - | - | - | - | - |
     [nore]map! unmap! mapc[lear]! | - | Y | Y | - | - | - | - | - |
    i[nore]map iunmap imapc[lear]  | - | Y | - | - | - | - | - | - |
    c[nore]map cunmap cmapc[lear]  | - | - | Y | - | - | - | - | - |
    v[nore]map vunmap vmapc[lear]  | - | - | - | Y | Y | - | - | - |
    x[nore]map xunmap xmapc[lear]  | - | - | - | Y | - | - | - | - |
    s[nore]map sunmap smapc[lear]  | - | - | - | - | Y | - | - | - |
    o[nore]map ounmap omapc[lear]  | - | - | - | - | - | Y | - | - |
    t[nore]map tunmap tmapc[lear]  | - | - | - | - | - | - | Y | - |
    l[nore]map lunmap lmapc[lear]  | - | Y | Y | - | - | - | - | Y |


*key-notation* *key-codes* *keycodes*
These names for keys are used in the documentation.  They can also be used
with the ":map" command (insert the key name by pressing CTRL-K and then the
key you want the name for).

    notation        meaning             equivalent  decimal value(s)        ~
    -----------------------------------------------------------------------
    <Nul>           zero                    CTRL-@    0 (stored as 10) *<Nul>*
    <BS>            backspace               CTRL-H    8     *backspace*
    <Tab>           tab                     CTRL-I    9     *tab* *Tab*
    *linefeed*
    <NL>            linefeed                CTRL-J   10 (used for <Nul>)
    <CR>            carriage return         CTRL-M   13     *carriage-return*
    <Return>        same as <CR>                            *<Return>*
    <Enter>         same as <CR>                            *<Enter>*
    <Esc>           escape                  CTRL-[   27     *escape* *<Esc>*
    <Space>         space                            32     *space*
    <lt>            less-than               <        60     *<lt>*
    <Bslash>        backslash               \        92     *backslash* *<Bslash>*
    <Bar>           vertical bar            |       124     *<Bar>*
    <Del>           delete                          127
    <CSI>           command sequence intro  ALT-Esc 155     *<CSI>*
    <xCSI>          CSI when typed in the GUI               *<xCSI>*

    <EOL>           end-of-line (can be <CR>, <NL> or <CR><NL>,
                    depends on system and 'fileformat')     *<EOL>*

    <Up>            cursor-up                       *cursor-up* *cursor_up*
    <Down>          cursor-down                     *cursor-down* *cursor_down*
    <Left>          cursor-left                     *cursor-left* *cursor_left*
    <Right>         cursor-right                    *cursor-right* *cursor_right*
    <S-Up>          shift-cursor-up
    <S-Down>        shift-cursor-down
    <S-Left>        shift-cursor-left
    <S-Right>       shift-cursor-right
    <C-Left>        control-cursor-left
    <C-Right>       control-cursor-right
    <F1> - <F12>    function keys 1 to 12           *function_key* *function-key*
    <S-F1> - <S-F12> shift-function keys 1 to 12    *<S-F1>*
    <Help>          help key
    <Undo>          undo key
    <Insert>        insert key
    <Home>          home                            *home*
    <End>           end                             *end*
    <PageUp>        page-up                         *page_up* *page-up*
    <PageDown>      page-down                       *page_down* *page-down*
    <kHome>         keypad home (upper left)        *keypad-home*
    <kEnd>          keypad end (lower left)         *keypad-end*
    <kPageUp>       keypad page-up (upper right)    *keypad-page-up*
    <kPageDown>     keypad page-down (lower right)  *keypad-page-down*
    <kPlus>         keypad +                        *keypad-plus*
    <kMinus>        keypad -                        *keypad-minus*
    <kMultiply>     keypad *                        *keypad-multiply*
    <kDivide>       keypad /                        *keypad-divide*
    <kEnter>        keypad Enter                    *keypad-enter*
    <kPoint>        keypad Decimal point            *keypad-point*
    <k0> - <k9>     keypad 0 to 9                   *keypad-0* *keypad-9*
    <S-...>         shift-key                       *shift* *<S-*
    <C-...>         control-key                     *control* *ctrl* *<C-*
    <M-...>         alt-key or meta-key             *meta* *alt* *<M-*
    <A-...>         same as <M-...>                 *<A-*
    <D-...>         command-key (Macintosh only)    *<D-*
    <t_xx>          key with "xx" entry in termcap
    -----------------------------------------------------------------------

## .vimrc coniguration

以下为 .vimrc 配置参考，提供常用功能及快捷键配置，以及插件手动安装支持和管理器（vim-plug）。
配置中通过插件管理器配置安装 vim-lsp，此插件为语言服务工具，功能简洁易用，需要安装三套脚本
以提供完整的 LSP 语言服务：

•  [vim-lsp 语言服务插件](https://github.com/prabirshrestha/vim-lsp[])
•  [vim-lsp 默认配置预置](https://github.com/mattn/vim-lsp-settings)
•  [vim-lsp 自动完成功能支持](https://github.com/prabirshrestha/asyncomplete.vim)

因为 Vim 插件没有形成统一的规范，官方虽然有默认的插件目录结构，但是第三方插件管理工具可能使用
各自的目录结构。比如 vim-plug 默认使用 ~/vimfiles/plugged 目录作为插件安装目录，它会被
添加到 'runtimepath` 路径列表中。可以使用 `plug#begin(path)` 命令初始化时指定一个目录。

以下配置脚本中定义了手动安装 vim-plug 插件的功能，只需要按 `<Leader>plug` 键进行安装，默认
的 `<Leader>` 键为 `\`，因此就是依次按下 `\plug` 激活安装命令。依次按键的时间间隔设置为
`timeoutlen=450`，要在 450ms 时间内按一个键。安装后插件管理器后，配置好的 `<Leader>l`
以及 `<Leader>so` 快捷键可以分别用来加载 .vimrc 脚本和 source 当前脚本，使新安装的插件
配置生效。然后就可以使用 vim-plug 插件提供的 `:PlugInstall` 命令来安装由插件管理器管理的
插件列表中的一切插件，这种安装方式比起手动安装方便。有新的插件只需要在插件列表中添加插件信息，
再运行安装命令即可。

提示：服务器程序安装路径在用户本地数据目录：AppData\Local\vim-lsp-settings。

完成 vim-lsp 插件安装后，就可以执行 `:LspInstallServer` 命令为当前编辑的 C/C++ 或者
Python 等代码文件安装 LSP 服务器，然后重新打开 Vim 即可以在编辑代码文件时激活相应的 LSP
服务程序，通过 `:LspStatus` 命令查看当前运行中的服务器。根据需要给各功能绑定快捷键，比如
悬停信息 `:LspHover` 显示鼠标或光标当前位置的对象信息。此命令可能会在初始后脚本执行完后
才生效，因此配置脚本中可能检测不到它，但依然可以先绑定自动命令，假设它后续生效。参考 vim-lsp
文档提供的快捷键配置，比如错误信息跳转、Hover 信息面板内容滚动操作。因此环境是动态变化的，
需要通过自动命令在 LSP 服务生效的文档中绑定。以下包含了配置一个 Python LSP 服务以及快捷键
绑定的脚本示范：

```vim
if executable('pylsp')
    " pip install python-lsp-server
    au User lsp_setup call lsp#register_server({
        \ 'name': 'pylsp',
        \ 'cmd': {server_info->['pylsp']},
        \ 'allowlist': ['python'],
        \ })
endif

function! s:on_lsp_buffer_enabled() abort
    setlocal omnifunc=lsp#complete
    setlocal signcolumn=yes
    if exists('+tagfunc') | setlocal tagfunc=lsp#tagfunc | endif
    nmap <buffer> gd <plug>(lsp-definition)
    nmap <buffer> gs <plug>(lsp-document-symbol-search)
    nmap <buffer> gS <plug>(lsp-workspace-symbol-search)
    nmap <buffer> gr <plug>(lsp-references)
    nmap <buffer> gi <plug>(lsp-implementation)
    nmap <buffer> gt <plug>(lsp-type-definition)
    nmap <buffer> <leader>rn <plug>(lsp-rename)
    nmap <buffer> [g <plug>(lsp-previous-diagnostic)
    nmap <buffer> ]g <plug>(lsp-next-diagnostic)
    nmap <buffer> K <plug>(lsp-hover)
    nnoremap <buffer> <expr><c-f> lsp#scroll(+4)
    nnoremap <buffer> <expr><c-d> lsp#scroll(-4)

    let g:lsp_format_sync_timeout = 1000
    autocmd! BufWritePre *.rs,*.go call execute('LspDocumentFormatSync')
    
    " refer to doc to add more commands
endfunction

augroup lsp_install
    au!
    " call s:on_lsp_buffer_enabled only for languages that has the server registered.
    autocmd User lsp_buffer_enabled call s:on_lsp_buffer_enabled()
augroup END
```

配置文件中，Alt 组合键有两组，`<Esc>` 打头的对应使用 ANSI Escape 键盘序列，使用 `<M-x>`
则是对应终端统一用 8-bit 数据传递 Alt+x 组合键的场合。这两种配置可以分别适应命令行模式 Vim
以及图形模式的 gvim。

```vim
"" :source $VIM/.vimrc
"" "Config load from Home ~/.vimrc"

set mouse=a
set fileencodings=utf-8,gb2312,gb18030,gbk,ucs-bom,cp936,latin1 
set enc=utf8 
set fencs=utf8,gbk,gb2312,gb18030
set encoding=utf-8
set backspace=2
set autoread
autocmd CursorHold,CursorHoldI   * checktime
"autocmd CursorMoved,CursorMovedI * echo printf("cursor (%s,%s)",line("."),col("."))
colorscheme slate
colorscheme shine
syntax on
set incsearch
set shortmess-=S
set guifont=FiraMono\ Nerd\ Font
"" Vim keys sequence and ANISI Escape codes timeout setting
set ttimeout timeoutlen=450
"" Press <Shift-K> to open Vim help at keywod location
setlocal keywordprg=:help
"" let mapleader = "\\"  "" The default map leader
"" Press <Leader>so to save and source current vim script
map <Leader>so :w \| so %<CR>
"" Press <Leader>ss/sl to save/load session
map <Leader>ss :mksession 
map <Leader>sl :so ~/Session.vim
"" Press <Leader>s to toggle status line
map <Leader>s :call <SID>cycle_toggle('laststatus', [0,1,2])<CR>
set statusline=#%n:%F\ =>%P/%L(%c,%o)\ [0x%B]
"" Press <Leader>n to toggle line number (<C-g> can be ok)
map <Leader>ln :set number!<CR>
map <Leader>rn :set relativenumber!<CR>
map <Leader>cl :set cursorline!<CR>
map <Leader>cc :set cursorcolumn!<CR>
"" Press <Leader>o/p to perform Copy/Paste for Winodws
map <Leader>o "*y
map <Leader>o "*y
map <Leader>O "*Y
map <Leader>p "*p
inoremap <Leader>P <C-O>"*P
inoremap <Leader>O <C-O>"*Y
inoremap <Leader>p <C-O>"*p
inoremap <Leader>P <C-O>"*P
"" Press Ctrl+C or Alt+C (ANSI Escape) to enter command mode
map <Esc>c       :
imap <C-C>  <Esc>:
"" Press jk to escape to normal mode from insert mode
inoremap jk <Esc>
"" Press Space it is equal to Ctrl+F (PageDown) in normal mode
nmap <Space> <C-f>
"" Prese Meta or Alt + 1/2/3 to switch tabpage
nnoremap <M-`> :tabnew<CR>
nnoremap <M-1> :tabn 1<CR>
nnoremap <M-2> :tabn 2<CR>
nnoremap <M-3> :tabn 3<CR>
nnoremap <Esc>` :tabnew<CR>
nnoremap <Esc>1 :tabn 1<CR>
nnoremap <Esc>2 :tabn 2<CR>
nnoremap <Esc>3 :tabn 3<CR>
"" Press \t to toggle tabeline (default mapleader is \)
nmap <silent> <Leader>t	:call <SID>cycle_toggle('showtabline', [0,1,2])<CR>
"" Press \/ to toggle search highlight
map <leader>/ :set hlsearch!<CR>
"" Press Meta or Alt+Z (by ANSI Escape) to toggle line wrap
map <M-z>  :set wrap!<CR>
map <Esc>z :set nowrap!<CR>
"" Press Ctrl+L to edit ~/.vimrc
map <C-L> :edit ~/.vimrc<Enter>
"" Press Ctrl+H to view Vim 9.0 Documentation all-in-one version
nmap <C-H> :edit /c/opendocs/vim_9.0.doc\|set filetype=help
"" Press Alt+0 (By ANSI Escape) to download Vim 9.0 doc all-in-one versiion
map <Esc>0 :!curl -L "https://github.com/Jeangowhy/opendocs/blob/main/vim_9.0.doc?raw=true"

function! s:cycle_toggle(option, values)
  if len(a:values) == 0
    echoerr "cycle_toggle received an empty value list"
    return
  endif

  execute 'let l:current = &' . a:option
  let l:sid = expand('<SID>')
  let l:default = l:sid

  for it in a:values
    if it == l:current | break | endif
    let l:default = it
  endfor
  let l:default = string(l:default) == string(l:sid)? a:values[-1] : l:default

  execute 'set '.a:option.'='.escape(l:default, ' \')
  echo printf('cycle toggle %s: %s => %s', a:option, l:current, l:default)
endfunction

function! s:pluginstall(url)
  exec "!curl -L -o ~/.vim/download.cache "..a:url
  if v:shell_error
    echow "Fail to download plugin."
    return
  endif

  cd ~/.vim
  let s:ret = system('tar -xf ~/.vim/download.cache.zip')
  if v:shell_error
      let s:ret = system('unzip -xoq ~/.vim/download.cache')
  endif
  if v:shell_error 
      :echow "Can't extract file by tar/unzip, plug install fail. #"..v:shell_error
  else
      :echow "Plugin was installed under ~/.vim, "
\         .."and you need to source it from ~/.vimrc."
  endif
  cd -
"  tar -xf ~/.vim/download.cache #> /dev/null
"  if ! [[ $? == 0 ]]; then
"      unzip -xoq ~/.vim/download.cache #> /dev/null
"  fi
"  if [[ $? != 0 ]]; then
"      echo "Can't extract file by tar/unzip, plug install fail."
"  else
"      echo "Done."
"  fi
endfunction

function! s:soplugin(path)
  if ! empty(glob(a:path))
    exec "source "..a:path
  endif
endfunction

"" Install and configure plugins manually
let PLUGGED = '~/.vim/plugged'
"" Update tags file of plugin doc manually
noremap <Leader>ud :helptags ~/.vim/doc/<CR>
"" https://www.vim.org/scripts/script.php?script_id=42
nnoremap <Leader>bufe :call <SID>pluginstall("https://www.vim.org/scripts/download_script.php?src_id=28905")
call <SID>soplugin("~/.vim/plugin/bufexplorer.vim")
nnoremap <Leader>seoul :call <SID>pluginstall("https://github.com/junegunn/seoul256.vim/archive/refs/heads/master.zip")
call <SID>soplugin("~/.vim/seoul256.vim-master/colors/seoul256.vim")
call <SID>soplugin("~/.vim/seoul256.vim-master/colors/seoul256-light.vim")

"" Use plugin manager: vim-plug
nnoremap <Leader>plug :call <SID>pluginstall("https://github.com/junegunn/vim-plug/archive/refs/heads/master.zip")
call <SID>soplugin("~/.vim/vim-plug-master/plug.vim")
if exists("*plug#begin") 
  call plug#begin(PLUGGED)
  if exists(":Plug")
    ":echo "Listing enabled plugins for vim-plug..."
    :Plug 'prabirshrestha/vim-lsp'
    :Plug 'mattn/vim-lsp-settings'
    :Plug 'prabirshrestha/asyncomplete.vim'
    :Plug 'preservim/nerdtree'
    :Plug 'tpope/vim-sensible'
  endif
  call plug#end()
endif

"" Hover information when cursor move to a new place 
if !exists(":LspHover")
  :echo ":LspHover not available yet. But assume it will enable late."
endif
noremap <Leader><Leader>             :LspHover<CR>
autocmd CursorHold,CursorHoldI *     :LspHover
"autocmd  CursorMoved,CursorMovedI * :LspHover<CR>
```


# 🚩 Vim 哲学
- 大家來學 VIM（一個歷久彌新的編輯器） http://www.study-area.org/tips/vim/
- Learn VIM while playing a game - VIM Adventures https://vim-adventures.com
- [Vim 中文手册](https://github.com/yianwillis/vimcdoc)
- [Vim documentation](https://vimguide.readthedocs.io/en/latest/vim.html)
- [multiselect](https://www.vim.org/scripts/script.php?script_id=953)
- https://vscode.dev/github/dmcbane/vim_cheatsheet_wallpaper/blob/master/vim-cheatsheet.svg
- https://weibeld.net/vim/assets/beautiful-vim-cheatsheet.png

Vim 是一种独特的软件思维：输入设备要么处于命令状态、要么处于内容输入状态，通过将这些零散的功能重新组合，就可以得到一种全新的富有创造性的工具！

键盘上的按键要么作为字符输入，要么作为控制 Vim 的命令，同样是 26 个字符或数字、符号按键，在不同的 Vim 工作模式下具有不同的功能。而按键同时又成为切换 Vim 工作模式的命令按键。

- VIM 有多种不同的工作模式，其中 7 种基本模式，但入门只需要学习三种必要模式：
    - *Normal mode*: When typing commands.
    - *Insert mode*:  These are also used in Replace mode.
    - *Command-line mode*: When entering a ":" or "/" command.
- 按 Esc 键进入 Normal mode，这种模式下可以接收命令，打开 vim 时就处于这种模式；
    - 例如，按下 5gg<Enter> 表示跳转到第 5 行，gg 表示跳转命令，行号提前指定，相当于调用一个函数；
    - *hjkl* 四个按键控制光标移动位置，对应 Left、Down、Up、Right 四个方向；
    - *dd* 剪切当前行
    - *y* 复制当前行
    - *p* 粘贴内容
- 按 i 键进入 Insert mode，这种模式下可以往文件中输入字符串；
- 按 : 或 / 进入命令行模式，可以输入各种命令：
    - `:q` 表示 quit 命令，按回车执行以退出 vim 程序；
    - 所有命令加 ! 后缀表示强制执行，例如 `:q!` 不保存文件直接退出；
    - `:w` 保存文件，写入数据到磁盘；
    - 按下 / 进入搜索命令，想要定位到什么位置，就输入对应位置的内容；

使用 Tab 标签方式打开多个文件：

    vim -p some.sh more.sh

设置快捷键提升命令执行效率，修改配置文件 `vim ~/.vimrc` 增加相应的映射配置项目。例如，Tab 切换快捷键 Ctrl-L Ctrl-H 这样设置，<Esc> <CR> 分别表示按下 Esc 和回车键，它们之间就是要执行的命令:

    noremap <Tab> :tabnext<CR>
    noremap <C-L> <Esc>:tabnext<CR>
    noremap <C-H> <Esc>:tabprevious<CR>

设置根据文件类型执行的命令，比如正常模式下 Python 代码执行或 C++ 代码编译，使用 % 引用当前文件。要在编辑模式下使用快捷键，可以使用 :imap 或 :lmap 替代 :nmap 。

以下设置，如果当前文件是 sh 脚本，在 Normal mode 按下 F9 将触发以下行为：

- :w <CR>  执行文件保存命令；
- :! clear <CR> 执行控制台清屏命令；
- :! echo Execute bash: %; bash % <Enter> 执行控制台 echo 命令输出信息，并再执行 bash 调用脚本；

```sh
" Bash script
"  Execute : F9 (Below code is used in .vimrc file)
:autocmd FileType sh :nmap <F9> :w <CR> :! clear <CR> :! echo Execute bash: %; bash % <Enter>

" python commands
"  Execute : F9 (Below code is used in .vimrc file)
:autocmd FileType python :nmap <F9> :! clear <CR> :! python % <Enter>

" C/C++ commands
" Compile : F9 (Below code is used in .vimrc file)
:autocmd FileType c,cpp :nmap <F9> :! rm -r out <CR> :! clear <CR> :! g++ % -o out <Enter>
" Run : Ctrl+F9 (Below code is used in .vimrc file)
:autocmd FileType c,cpp :nmap <C-F9> :! clear <CR> :! ./out <CR>
```

以下是多行编辑演示，Multiple line editing。

把各行的单词拼接成一行，用逗号连接，Vim 要几步？

    one
    two
    three
    four
    five
    six
    seven
    eight
    nine
    ten

    1. Esc   进入 Normal mode
    2. 2G    跳转第 2 行
    3. <C-v> 打开 Visual block 模式 (Windows <C+q>)
    4. 8j    往下选 8 行
    5. I,Esc 插入逗号
    6. 1G    跳转第 1 行
    7. 10J   拼接后续 10 行内容

    one ,two ,three ,four ,five ,six ,seven ,eight ,nine ,ten

这里使用到了 Block Selection 区块选择 Ctrl-v 激活，并在区块的各行插入逗号，然后是 Join Line 操作将所有共 10 行拼接起来。

多选编辑还会用到行尾内容编辑，选择内容块时使用 `$` 选择到末尾，再配合 `a` 执行 append 内容附加操作，相对于 `I` 是在行首插入内容。

还有许多文档的内容是有重复的，比如 Markdown 文档的标题部总是以 # 符号开始的，参考以下内容的编辑：

    Title A     ===>     # Title A
    Title B     ===>     # Title B
    Title C     ===>     # Title C

要往候选标题内容前面添加 # 符号，可以先将这符号通过 y 命令复制下来，所以不管内容是什么。然后执行命令将其粘贴到多行内容中，操作流程 gg<C-v>3j:normal0p 分解如下：

    - gg    跳转到第一行
    - <C-v> 进入 Visual Block 模式进行块操作
    - 3j    向下选 3 行
    - :normal 进入正常命令模式
    - 0p    光标移到行首，并将默认寄存器的内容粘贴出来

还可以使用 " 符号指定其它寄存器的内容，如 "gp，寄存器内容通过 :reg 命令查询。

这里的操作只有几个步骤，但涉及的知识点有点多，首先的 Vim 的不同模式，执行命令具有不同效果。其次是 Vim 内部结构，包含寄存器，文件 buffer 等等。


使用 <C-a> 对数字执行自增可以用来创建连续的数列，例如将包含数值的内容 *m3u8*，使用 y 复制后再 10p 粘贴出 10 行，再执行 g <C-a>。使用 g 激活 global context 的一个数值状态，Visual block 模式下可以识别它，将自增量累计起来。


Windows 下使用 <C-v> 作为粘贴功能使用，默认改为 <C-q> 激活 Visual block 模式，参数 :help CTRL-V-alternative

如果还是无效，可以添加按键映射，将 q 按键作为 Visual block 激活按钮：

    " vim ~/.vimrc
    nnoremap q <c-v>

区块选择是多点编辑的一种方式，其它的编辑工具如 Sublime Text，它还支持多选区编辑，Multiple Carets / Multiple Cursors / Multiple Selections，而 vim 需要安装插件。


比如，要修改 php 配置，关掉 Opcache 缓存，那么假设知道 php.ini 所在，直接用 vim 打开：

    vim /usr/local/php56/etc/php.ini

界面看起来好丑是不是，执行命令改个 blue 主题色就好多了：

    colorscheme blue
    colors blue

然后搜索 opcache.enable 位置， 

    <Esc>/opcache.enable [Enter]

然后可以用 n 来查找下一个，找到后用 hjkl 来移动光标到分号，按下 x 删去，也可以用 cw/cc 来修改单词/单句，改错了不要紧， 按下 [Esc] 回到命令模式，用 u 还原。改完了就用 w 命令保存，q 命令退出，可以一起执行，感叹号表示强制执行。

    [Esc] w [Enter]
    [Esc] wq [Enter]
    [Esc] wq! [Enter]



## ==⚡ Configuration 特性配置

Vim 的功能特性要比 Vi 多得多，但其中大部分都没有缺省启用。为了使用更多的
特性，您得创建一个 vimrc 文件，默认地VIM会从主目录下读取配置文件 .vimrc 或Windows平台下加下划线前缀。

开始编辑 vimrc 文件，具体命令取决于您所使用的操作系统：

    :edit ~/.vimrc          这是 Unix 系统所使用的命令
    :edit $VIM/_vimrc       这是 MS-Windows 系统所使用的命令

接着读取 vimrc 示例文件的内容：

    :r $VIMRUNTIME/vimrc_example.vim

保存文件，命令为：

    :write

在退出前可以按下i打开插入编辑模式，将以下这行配色设置放在首行位置，再按下 ESC 进入命令模式保存文件：

    colorscheme zellner

下次您启动 Vim 时，编辑器就会有了语法高亮的功能。您可以把您喜欢的各种设置添加到这个 vimrc 文件中。要了解更多信息请输入 :help vimrc-intro 要了解 VIM 装置的配置脚本，可以使用 version 命令：

    :version
    VIM - Vi IMproved 7.4 (2013 Aug 10, compiled Nov 24 2016 16:44:48)
    Included patches: 1-1689
    Extra patches: 8.0.0056
    ..................................................................
       system vimrc file: "$VIM/vimrc"
         user vimrc file: "$HOME/.vimrc"
     2nd user vimrc file: "~/.vim/vimrc"
          user exrc file: "$HOME/.exrc"
      fall-back for $VIM: "/usr/share/vim"
    ..................................................................
    Press ENTER or type command to continue


可以使用 set 命令进行临时性的配置修改，也可以写入配置文件中：

    colorscheme desert        // 配色方案
    syntax on       // 语法高亮度显示
    filetype on     // 检测文件类型
    set number      // 显示行号
    set autoindent  // vim使用自动对齐，也就是把当前行的对齐格式应用到下一行
    set smartindent // 依据上面的对齐格式，只能的选择对齐方式
    set showmatch   // 设置匹配模式，类似当输入一个左括号时会匹配相应的那个右括号
    set vb t_vb=    // 当vim进行编辑时，如果命令错误，会发出一个响声，该设置去掉响声
    set ruler       // 在编辑过程中，在右下角显示光标位置的状态行
    set cursorline  // 设置游标

    set guifont=Courier_new:h14:b:cDEFAULT        // 设置字体和大小
    set incsearch   // 找要匹配的单词。eg：如果要查找search单词，当输入到/s（回车确认选择）时，会自动找到第一个s开头的单词


开启鼠标模式，例如 :set mouse=a 开启所有模式的 mouse 支持

    n 普通模式
    v 可视模式
    i 插入模式
    c 命令行模式
    h 在帮助文件里，以上所有的模式
    a 以上所有的模式
    r 跳过 |hit-enter| 提示
    A 在可视模式下自动选择

关闭鼠标模式 :set mouse= 后面不要跟任何值或者空字符串可以关闭鼠标模式

Ubuntu 16.0 系统中定位 VIM 安装目录：

    root@aiirobo:~# whereis vim
    vim: /usr/bin/vim /usr/bin/vim.basic /usr/bin/vim.tiny /etc/vim /usr/share/vim /usr/share/man/man1/vim.1.gz

    root@aiirobo:~# ls /usr/share/vim
    addons  registry  vim74  vimfiles  vimrc  _vimrc  vimrc.tiny

    root@aiirobo:~# ls /usr/share/vim/vim74/
    autoload       delmenu.vim   ftplugin            indent.vim  menu.vim    print        syntax
    bugreport.vim  doc           ftplugin.vim        indoff.vim  mswin.vim   rgb.txt      tutor
    colors         evim.vim      ftplugof.vim        keymap      optwin.vim  scripts.vim  vimrc_example.vim
    compiler       filetype.vim  gvimrc_example.vim  lang        pack        spell
    debian.vim     ftoff.vim     indent              macros      plugin      synmenu.vim

配色方案目录，在 .vimrc 脚本中加入 colorscheme zellner 就可以使用：

    root@aiirobo:~# ls /usr/share/vim/vim74/colors
    blue.vim      delek.vim    evening.vim   morning.vim  peachpuff.vim  shine.vim  zellner.vim
    darkblue.vim  desert.vim   industry.vim  murphy.vim   README.txt     slate.vim
    default.vim   elflord.vim  koehler.vim   pablo.vim    ron.vim        torte.vim

| dark style themes    | light themes
| -------------------- | ---------------------
| koehler              | desert
| industry             | peachpuff
| elflord              | darkblue
| pablo                | murphy
| zellner              | blue
| slate                | shine
| koehler              | evening
| delek                | morning
| default              |
| ron                  |


## ==⚡ Basic Skills 基本编辑功能

注意了，在文档中，`C-`、`^` 或 `C+` 通常用来表示控制键一起按。

Vim 是命令化编辑器，功能强大到没朋友，只有 Emacs 一个对头。

Vim 有命令模式 Command Mode 也叫 Normal 标准模式和编辑模式 Write/Insert Mode，进入 Vim 界面就是处于命令模式，等待用于输入命令。

此时，可以使用以下命令进入编辑模式：

- `i` Insert 开启内容插入模式
- `I` Beginning of line 在行前插入命令；
- `a` After cursor 在光标后附加；
- `A` Append 行尾附加；
- `C` Change to end 修改当前字符到到行尾的内容
- `o` Next line 后面插入一行;
- `O` Previous line 前面插入一行;
- `s` Substitutes Character 替换字符;
- `S` Substitutes line 替换行;


进入编辑模式后，ESC 按键可以返回到 Normal 模式，继续进行命令交互。

此外，Vim 还有一个命令行编辑模式 Command Line Mode，在标准模式下使用 `:` 进入命令行模式，可以执行另一类命令，比如软件的即出 `q`、打开文件 `o`、文件写入 `w`，也可以执行文件内容的查找替换等等。

所以 Vim 基本就是一个不停切换状态的状态机器：

    Normal --> : --> Command Line Mode --> ESC -->
    Normal --> i, A, C, r --> Write/Insert Mode -->
    Normal ...


基本的编辑命令功能：

- `u` Undo 撤消
- `^r` Redo 重做
- `.` Repeat 重做上一个命令
- `y` Copy 拷贝命令
- `yy` Copy line 拷贝行
- `p` Paste 贴帖
- `d` Delete 删除命令
- `dd` Delete line 删除行
- `D` Delete to End 删除到行尾
- `x` Cut 剪切
- `X` Cut 剪切光标前字符
- `c` Change 修改命令
- `r` Replce 替换字符内容
- `J` Join line 拼行
- `<` 或 `>` 缩进与反缩进
- `[` 或 `]` 在匹配的括号间移动光标

这些命令使用方法，大多数可以用以下模式表示：

    [operator][count][motion]

指定操作 operator，再指定重复次数 count 默认为 0 次，最后指定运动方向 motion 默认为 `j` 向下。

比如，光标所在行和以下的两行进行缩进 `>2j`，如果使用 `>` 直接回车就表示使用默认的重得 0 次，方向为 `j` 向下。

命令还可以进行组合，比如删除命令与查找命令组合，`d/foo` 将当前光标位置到下一个 foo 的内容删除。

又如，拷贝命令和光标前向跳转 forward 命令组合使用，`y3fi` 复制光标位置到后面第 3 个 i 字位置的内容。

又如，修改、删除、拷贝命令和光标跳转命令组合使用：

| 命令组合 |          c 修改         |          d 删除         |          y 拷贝         |
|----------|-------------------------|-------------------------|-------------------------|
|          | cc 修改行               | 删除行                  | 拷贝行                  |
| w        | cw 修改单词             | dw 删除单词             | yw 拷贝单词             |
| W        | cW 修改整个词           | dW 删除整个词           | yW 拷贝整个词           |
| e        | ce 修改光标到词尾       | de 删除光标到词尾       | ye 拷贝光标到词尾       |
| f        | cfx 光标到下一个 x 位置 | dfx 光标到下一个 x 位置 | yfx 光标到下一个 x 位置 |
| (        | c( 修改 到句首          | d( 删除 到句首          | y( 拷贝 到句首          |
| )        | c) 修改到句首           | d) 删除到句首           | y) 拷贝到句首           |
| {        | c{ 修改到段落开头       | d{ 删除到段落开头       | y{ 拷贝到段落开头       |
| }        | c} 修改到段落结尾       | d} 删除到段落结尾       | y} 拷贝到段落结尾       |


在编辑模式下，还有一个块操作模式 Visual Block Mode，**<C-v>** 打开块操作，C 表示控制键一起按，Windows 平台使用 Ctrl-q。进入块操作后，可以选择要内容，即构成内容块，然后再处理。

例如，利用块操作把各行的单词拼接成一行，用逗号连接，Vim 要几步？

    one
    two
    three
    four
    five
    six
    seven
    eight
    nine
    ten

操作步骤：

    0. Esc    进入命令模式
    1. 2G     跳到第 2 行
    2. <C-v>  打开块操作 C- 表示控制键一起按
    3. 8j     往下选择 8 行
    4. I,Esc  往选中的 8 行的行首插入逗号
    5. 1G     跳到第 1 行
    6. 10J    拼接 10 行

结果

    one ,two ,three ,four ,five ,six ,seven ,eight ,nine ,ten


和块操作相似的还有，可视选行：

    v - start visual mode, mark lines, then do a command (like y-yank)
    V - start linewise visual mode

new mode after typing:            *v_v* *v_CTRL-V* *v_V*

| old mode          |   "v"     |       "CTRL-V"        |       "V"        ~ |
| ----------------- | --------- | --------------------- | ------------------ |
| Normal            |  Visual   |    blockwise Visual   |    linewise Visual |
| Visual            |  Normal   |    blockwise Visual   |    linewise Visual |
| blockwise Visual  |  Visual   |    Normal             |    linewise Visual |
| linewise Visual   |  Visual   |    blockwise Visual   |    Normal          |

按 V 进入 Visual Line Mode 模式，可以对选定的多行内容操作，例如使用 < 或 > 改变缩进。

Windows 下使用 <C-v> 作为粘贴功能使用，默认改为 <C-q> 激活 Visual block 模式，参数 :help CTRL-V-alternative

如果还是无效，可以添加按键映射，将 q 按键作为 Visual block 激活按钮：

    " vim ~/.vimrc
    nnoremap q <c-v>


高级的内容移动操作，如上下互换一行 `ddkP`：

- dd 将删除该行并将它添加到默认寄存器中。
- k 将上移一行(j将沿直线移动)
- P 将粘贴到当前行的上方


使用 `:m` 移动命令 move 移动光标所在行，或者选中的块：

- `:m+1` - 移下一行后面，即下移 1 行；
- `:m-2` - 移到前两行后面，即上移 1 行，负号表示上移；
- `:m1` - 移动第一行后面；

为了更好地使用移动命令，可以设置显示行号：

    :set number


## ==⚡ Cursor Motions 光标移动控制
- [Vim中如何快速进行光标移动？](https://harttle.land/2015/11/07/vim-cursor.html)
- [Quick reference guide](doc/quickref.txt)
- [Cursor motions](doc/motion.txt)

These commands move the cursor position.  If the new position is off of the
screen, the screen is scrolled to show the cursor (see also 'scrolljump' and
'scrolloff' options).

1. Motions and operators        |operator|
2. Left-right motions           |left-right-motions|
3. Up-down motions              |up-down-motions|
4. Word motions                 |word-motions|
5. Text object motions          |object-motions|
6. Text object selection        |object-select|
7. Marks                        |mark-motions|
8. Jumps                        |jump-motions|
9. Various motions              |various-motions|


光标移动技能升级路线，从字母到单词，从行到段落，从文本块到文件：

- 先掌握简单的光标控制，上下左右 h, j, k, l，和附加、插入 a, i 两种内容修改方式。
- 以上这些只需要重复使用，这个阶段也只需要重复用 Vim 键盘形成肌肉记忆。
- 学会单词移动，再学习更多的控制方法，在文件头尾位置移动 w, b, $, ^, 0, gg, G，编辑文件更轻松。
- 学会正则查找和替换 /search, %s/search/replace/g。
- 学会滚屏 zz, zt, zb, ^f, ^b，标识符间来回移动、按屏幕移动光标 H, L, M、窗格间移动 ^w + hjkl。
- 后续可以学习用户命令定义、键盘映射，宏录制、块列编辑等。

下一阶段：熟悉段落与单词间跳转，熟悉数字的使用。比如对于代码中 func(args, count)，我要记住从行首到第二个参数的快捷键是 4w。

用一个方向坐标可以很形象地表示 Vim 是如何控制光标位置的：

    Hello there! Vim is a modern version of Vi, the venerable Unix text
    editor. Here is a cheat sheet form Vim. This line ends here.
    So. This is some silly sampppp;le text to demo navigation. In Vim.
    |A n|ew line.    |     ^     || | |    |       |           | |   |
    |   |       |    |<- b | e ->|| | |    |       |           | |   |
    |   |       |<------ } | w -->| | |    |       |           | |   |
    |   |                  | E ---->| |    |       |           | |   |
    |   |                  | W ------>|    |       |           | |   |
    |   |                  | 2W ---------->|       |           | |   |
    |   |                  | fn ------------------>|           | |   |
    |   |<-------------- ( | ) ------------------------------->| |   |
    |                      | tV -------------------------------->|   |
    |<------------------ 0 | $ ------------------------------------->|

用到的基本方向概念除了左下上右 hjkl 外，还有 foward 前向，backward 后向：

- `f` - forward 前向到某字符
- `w` - forward word 向前一个单词 
- `b` - backward word 后向一个单词
- `e/E` - Ends 单词结束位置
- `(/)` - Start/End of sentence 句首行尾
- `0/$` - Start/end of line 行首行尾
- `^` - Line begin 行首，包括打头的空间字符也算行内容
- `{/}` - Start/end of paragraph 段落开头、结尾
- `/ab` - Search 查找 ab 字符串
- `ma` - Mark position 标记当前位置为 a，返回标记位置使用反引号 `，即 &#96; 键。
- `^b` - Page backward 往回翻页
- `^f` - Page forward 往前翻页

使用 <CTRL-G> 或者 g <CTRL-G> 获取当前光标所在文件的位置信息。


✅⛏ 字符间移动

在 Visual 模式或者 Insert 模式，可以按 Esc 回到 Normal 模式。

在 Vim 的 Normal 模式里， 通过 h, j, k, l, i 来进行左下上右的光标移动，进入插入模式。

在 Vim 中多数操作都支持数字前缀，比如 10j 可以向下移动 10 行。

当这些光标移动命令与其它命令相结全，就会产生指数化膨胀的功能，例如与删除命令 d 配合，就可以删除上下行，左右字符等等。再与后面的单词间移动命令，或屏幕空间内的移动命令结合就解锁新的删除行为。


✅⛏ 单词间移动

多数情况下单词移动比字符移动更加高效。 `w` 移动光标到下一个单词的词首，`b` 移动光标到上一个单词的词首；`e` 移动光标到下一个单词的结尾，`ge` 移动光标到上一个单词的结尾。

单词移动同样支持数字前缀，比如 4w 可以向后移动 4 个单词。连续的标点符号算一个单词。

有趣的是 `W`, `B`, `E` 具有同样的功能，只不过它是用空格来分隔单词的，可以跳地更远~

`^` 到行首，`$` 到行尾。

例如，使用 `y` 拷贝一行：^y$。


✅⛏ 相对屏幕移动

注意了，在文档中，`C-`、`^` 或 `C+` 通常用来表示控制键一起按。

以下翻页功能几乎在所有 Unix 软件中都是好使的，比如 man 和 less。 

- `^f` 向下翻页；
- `^b` 向上翻页；
- `^e` 逐行下滚；
- `^y` 逐行上滚。
- `H` 可以移动到屏幕的首行；
- `M` 到屏幕中间；
- `L` 到屏幕尾行；
- `zt` 可以置顶当前行，通常用来查看完整的下文，比如函数、类的定义。 
- `zz` 将当前行置于屏幕中部；
- `zb` 将当前行置于屏幕底部。



✅⛏ 文件范围移动

通过 :10 可以直接移动光标到文件第 10 行。如果你看不到行号，可以 :set number。 

- `gg` 移到文件首行；
- `G` 移到尾行；

例如，使用 y 拷贝整个文件：`ggyG`。

- `/xx` 可以查找某个单词 xx，`n` 查找下一个，`N` 查找上一个。 在光标跳转之后，可以通过 `^o` 返回上一个光标位置，`^i` 跳到下一个光标位置。
- `?xx` 可以反向查找，`q/`, `q?` 可以列出查找历史。

在编程中还可以使用 `gd` 移动到当前符号的定义位置，其实它移动到文件中第一出现符号的位置，结合 * 号在相同符号中跳转。这种跳转在 vim help 命令浏览帮助文档时非常有用，能快速定位到文档标签位置，在内容与目录之间快速跳转。

另外，帮助文档还支持 Tag 跳转，使用 Ctrl-] 可以快速打开标记对应的其它帮助文档，例如光标在 |usr_05.txt| 这个标记上按下 C-] 就直接进入这个帮助文件。又比如，通过目录可以直接跳转到 内容区：

    Contents
    |05.6|  Adding a plugin 

    Text
    *05.6*  Adding a plugin



## ==⚡ Mouse & Scroll
- [Scrolling](doc/scroll.txt)
- [Options](doc/options.txt)
- [:tag search](doc/tagsrch.txt)
- [RunSnippet - Sublime Plugin](https://github.com/jimboyeah/run-snippet)

现代的编辑器都会乃至鼠标，使用命令`:set mouse=a` 开启所有模式下的鼠标点击功能。

The mouse can be enabled for different modes:

            n       Normal mode and Terminal modes
            v       Visual mode
            i       Insert mode
            c       Command-line mode
            h       all previous modes when editing a help file
            a       all previous modes
            r       for |hit-enter| and |more-prompt| prompt

如果您的终端无法否决进入应用程序的鼠标事件，请为 nvi 三种模式启用鼠标功能：

    :set mouse=nvi

启用鼠标另一个好处是在查看帮助文档时，可以通过双击或点击 :tag 进行快速定位，两个方向多种按键实现跳转：

- Forward 往前跳转，使用 g<LeftMouse> 或 <C-LeftMouse> 或  *CTRL-]*
- Backward 往回跳转，使用 g<RightMouse> 或 <C-RightMouse> 或 *CTRL-T*

使用以下脚本可以查看当前键盘、鼠标、滚轮输入的数据：

    for i in range(1,10) | echom getchar()

手势向上、向下滚动一下鼠标，分别对就输出：

    <80><fd>L
    <80><fd>K

在配置文件中设置映射，加倍滚动速度：

    noremap <ScrollWheelDown> <ScrollWheelDown> <ScrollWheelDown>
    noremap <ScrollWheelUp>   <ScrollWheelUp>   <ScrollWheelUp>



## ==⚡ :tag Search & CTags Help
- [Help on help files](doc/helphelp.txt)
- [Syntax highlighting](doc/syntax.txt)
- [:tag search](doc/tagsrch.txt)
- [help.vim plugin](vim81/syntax/help.vim)
- [menu.vim plugin](vim81/menu.vim)
- [synmenu.vim](vim81/synmenu.vim)
- http://ctags.sourceforge.net/
- https://docs.ctags.io/en/latest/
- https://courses.cs.washington.edu/courses/cse451/10au/tutorials/tutorial_ctags.html

标签定位与搜索是 Vim 提供的最为强大的功能之一，通过定义 :tag 标签，可以在文档中，包括帮助文档中快速定位所关心的内容，使用命令 `:help tag` 获取相关帮助文档。

要给 Vim 添加帮助文件的 CTags 跳转功能，可以使用 :helptags 命令生成本地定位标签信息，参考 :help add-local-help。

以下命令可以快速打开帮助文档，并执行命令 Ctrl-W T 将窗口移到 Panel 頁中最大化显示：

    vim -p -c "exec 'help index'" -c "exec 'wincmd T'"

标签定位是除了搜索定位、或直接指定行号定位之外的常用内容定位方法，当然使用 / 执行搜索，再配置 n 或 N 进行来回前后定位也是非常高效的。

另外，请为 nvi 三种模式启用鼠标功能，增加入门用户可使得性：

    :set mouse=nvi

而使用 :tag 则在跨文件定位提供了更多的便利，在执行 :help 命令时，就是在各文档中定位 tag。同时，结合 *Stack* 记录了各次跳转的位置，可以使用 Ctrl-t Ctrl-] 来回穿插跳转。

Sublime Text 可以安装 Vintage 插件来模拟实现 Vim 操作模式，但功能并不完整，：tag 快速定位功能就没有。

在 Android 设备上，可以安装 DroidVim，操作起来也十分顺手，如果还配置一个蓝牙键盘，那就完全是迷你的移动 PC，如果获取 ROOT 限权就完全可以当作开发平台来使用。就算，没有 ROOT 权限，日常使用 bash 编程也基本满足要求。


文档中有以下 :tag 定义，执行命令 `:help :tag` 或 `:help E712` 就会自动定位到相应的文件的对应位置，并且使用 Ctrl-T 可以往回跳转。这就是 Vim 帮助文档的正确查看姿势，可以根据索引提供的主题来学习和种功能分类的命令用法：

     *:ta* *:tag* *E426* *E429*             *E712* *E896* *E897* *E899*

    1. Insert mode                          |insert-index|
    2. Normal mode                          |normal-index|
       2.1. Text objects                    |objects|
       2.2. Window commands                 |CTRL-W|
       2.3. Square bracket commands         |[|
       2.4. Commands starting with 'g'      |g|
       2.5. Commands starting with 'z'      |z|
       2.6. Operator-pending mode           |operator-pending-index|
    3. Visual mode                          |visual-index|
    4. Command-line editing                 |ex-edit-index|
    5. Terminal-Job mode                    |terminal-job-index|
    6. EX commands                          |ex-cmd-index|

    For an overview of options see |option-list|.
    For an overview of built-in functions see |functions|.
    For a list of Vim variables see |vim-variable|.
    For a complete listing of all help items see |help-tags|.


可以使用正则匹配规则，比如 `:tselect /map` 命令将在一个预览窗口罗列所以包含 map 这个关键字的文档内容以供选择查看。可以根据以上用法查看相关的帮助主题信息：

                                *tag-preview*
    The tag match list can also be used in the preview window.  The commands are
    the same as above, with a "p" prepended.
    {not available when compiled without the |+quickfix| feature}

                                *:pts* *:ptselect*
    :pts[elect][!] [name]   Does ":tselect[!] [name]" and shows the new tag in a
                "Preview" window.  See |:ptag| for more info.

                                *:ptj* *:ptjump*
    :ptj[ump][!] [name] Does ":tjump[!] [name]" and shows the new tag in a
                "Preview" window.  See |:ptag| for more info.

                                *:ptn* *:ptnext*
    :[count]ptn[ext][!] ":tnext" in the preview window.  See |:ptag|.

                                *:ptp* *:ptprevious*
    :[count]ptp[revious][!] ":tprevious" in the preview window.  See |:ptag|.

                                *:ptN* *:ptNext*
    :[count]ptN[ext][!] Same as ":ptprevious".

                                *:ptr* *:ptrewind*
    :[count]ptr[ewind][!]   ":trewind" in the preview window.  See |:ptag|.

                                *:ptf* *:ptfirst*
    :[count]ptf[irst][!]    Same as ":ptrewind".

                                *:ptl* *:ptlast*
    :ptl[ast][!]        ":tlast" in the preview window.  See |:ptag|.



使用 **gD** 移动到当前符号的定义位置，其实它移动到文件中第一出现符号的位置，结合 * 号在相同符号中跳转。这种跳转在 vim help 命令浏览帮助文档时非常有用，能快速定位到文档标签位置，在内容与目录之间快速跳转。

帮助文档支持 :tag 跳转，使用 Ctrl-] 可以快速打开标记对应的其它帮助文档，例如光标在 |usr_05.txt| 这个标记上按下 C-] 就直接进入这个帮助文件。

又比如，通过目录可以直接跳转到 内容区：

    Contents
    |05.6|  Adding a plugin 

    Text
    *05.6*  Adding a plugin

:tag 基本概念：

1. Jump to a tag        |tag-commands|
2. Tag stack            |tag-stack|
3. Tag match list       |tag-matchlist|
4. Tags details         |tag-details|
5. Tags file format     |tags-file-format|
6. Include file searches    |include-search|
7. Using 'tagfunc'      |tag-function|

:tag 定义格式：可心使用冒号开头并跟着标识符号，并使用星号包括。如 C 语言函数名称，类似的标识符号规则，由字母开头并，后续字母、下划线、连字符及数字等，可以使用 ctags 工具处理文件生成标记信息，没有标记信息时 vim 会提示 E433: No tags file，默认的信息标记文件是当前目录下的 `./tags` 文件，可以根据错误码提示获取相应的帮助信息 `:help E433`；

- 静态标签定义使用星号包括 :tag 定义，如 *static-tag*，或 *usr_toc.txt*；
- 文档中放置相应的关键字习惯做法是使用竖线包括 :tag，比如 |static-tag|，或 |usr_toc.txt|；

- *CTRL-]* 观察模式下使用的快捷键，等于命令 `:tag {name}`，可以快速定位到当前 :tag 关联的内容，如果光标当前的内容不是关键字就会选取其右侧的第一个关键字。

- *CTRL-T* 快捷键或 . 执行 repeat 操作可以快速回退原来的位置，跳转过程会在 *Stack* 留下位置记录，可以使用 :tselect 查看记录，使用 :tag! 和 :pop! 向前、身后跳转，就是对 *Stack* 记录进行操作。

可以通过 Vim 命令执行正向、或回跳转，命令如下，{name} 其中 {name} 可以是 :tag 全名也可以是正则表达式，有多个匹配内容时可以在 [count] 指定其序号。使用 :tnext 跳转到下一个位置，可以避免含义模糊。

    :[count]ta[g][!] {name}

        Jump to the definition of {name}, using the information in the tags file(s). 
        Put {name} in the tag stack.

    :[count]po[p][!]    Jump to [count] older entry in tag stack (default 1).

    :[count]ta[g][!]    Jump to [count] newer entry in tag stack (default 1).

    :tags           Show the contents of the tag stack.  The active
                    entry is marked with a '>'.

以下是多匹配时的优先选择规则：

1. "FSC"  A full matching static tag for the current file.
2. "F C"  A full matching global tag for the current file.
3. "F  "  A full matching global tag for another file.
4. "FS "  A full matching static tag for another file.
5. " SC"  An ignore-case matching static tag for the current file.
6. "  C"  An ignore-case matching global tag for the current file.
7. "   "  An ignore-case matching global tag for another file.
8. " S "  An ignore-case matching static tag for another file.

支持正则的命令 ":tag" and ":tselect" 可以在参数中使用 / 表示匹配模式，否则就是普通的 :tag 名称。

Examples:

    :tag main
        jumps to the tag "main" that has the highest priority.
    :tag /^get
        jumps to the tag that starts with "get" and has the highest priority.
    :tag /norm
        lists all the tags that contain "norm", including "id_norm".


可以设置文件搜索选项，:help file-searching，指定标签信息文件，路径中使用一个星表示任意字符，使用连续两个星表示多级子目录，可以跟一个数字表示子目录尝试。

如果目录中包含空格就使用 \ 进行转义，如果包含逗号，就使用 \\ 转义：

        :set tags=./tags,tags,/home/.vim/**/commontags

        :set tags=tags\ /home/user/commontags

        :set tags=tag\\\ file,/home/user/common\\,tags

使用 ctags 工具处理生成的标签信息文件格式可以参考 $VIMRUNTIME/doc/tags，在 vim 程序内执行 :shell 命令时会自动定义 $VIM 这些变量:

```sh
# :shell
$ cat $VIMRUNTIME/doc/tags | grep "g?"
g?      change.txt      /*g?*
g??     change.txt      /*g??*
g?g?    change.txt      /*g?g?*
v_g?    change.txt      /*v_g?*
```

标记信息文件有三列，第一例为标记定义，第二列为文件相对路径，第三列为标签的匹配模式，前缀了 / 符号。

The lines in the tags file must have one of these two formats:

1.  {tagname}       {TAB} {tagfile} {TAB} {tagaddress}
2.  {tagname}       {TAB} {tagfile} {TAB} {tagaddress} {term} {field} ..

规则按 ACCII 字符集排序，如果 tagname 未按 ASCII 字符串排序，会提示 Tags file not sorted: {file name}

各段内容使用 {TAB} 制表符号分隔，像手册中 `|40.1|` 这样的标签被映射到 [Vim User Manual - Make new commands](doc/usr_40.txt)，而文档会有高亮着色是因为插件 `$VIMRUNTIME/syntax/help.vim`。

    32.3    usr_32.txt  /*32.3*
    32.4    usr_32.txt  /*32.4*
    40.1    usr_40.txt  /*40.1*
    40.2    usr_40.txt  /*40.2*
    40.3    usr_40.txt  /*40.3*

Some programs that generate tags files:

    ctags       As found on most Unix systems.  Only supports C.  Only
                does the basic work.
                                *Exuberant_ctags*
    exuberant ctags     This is a very good one.  It works for C, C++, Java,
                Fortran, Eiffel and others.  It can generate tags for
                many items.  See http://ctags.sourceforge.net.
    etags           Connected to Emacs.  Supports many languages.
    JTags           For Java, in Java.  It can be found at
                http://www.fleiner.com/jtags/.
    ptags.py        For Python, in Python.  Found in your Python source
                directory at Tools/scripts/ptags.py.
    ptags           For Perl, in Perl.  It can be found at
                http://www.eleves.ens.fr:8080/home/nthiery/Tags/.
    gnatxref        For Ada.  See http://www.gnuada.org/.  gnatxref is
                part of the gnat package.

Vim 提供一个函数机制用来给 *tselect* 这些命令成标签列表，以下求其创建自己的 *tagfunc*，这种函数接收匹配模式、标志位和其它信息三个参数，并且设置 *set tagfunc=TagFunc* 选项：

- 标志可能是 'c' 或 'i'，分别表示一般命令调用和 Insert mode 下用户调用 Ctrl-X Ctrl-] 获取自动完成标签列表，可以参考当前光标上下文件来生成 tag 列表。

```sh
    function! TagFunc(pattern, flags, info)
      function! CompareFilenames(item1, item2)
        let f1 = a:item1['filename']
        let f2 = a:item2['filename']
        return f1 >=# f2 ?
            \ -1 : f1 <=# f2 ? 1 : 0
      endfunction

      let result = taglist(a:pattern)
      call sort(result, "CompareFilenames")

      return result
    endfunc
    set tagfunc=TagFunc
```


## ==⚡ Windows & Buffers 多窗口
- [Terminal information](doc/term.txt)
- [Terminal window support](doc/terminal.txt)
- [Introduction to Vim - 8. Definitions](doc/intro.txt)
- [Editing with multiple windows and buffers](doc/widows.txt)
- [Displaying text in a floating window](doc/popup.txt)
- [Vim documentation](https://vimguide.readthedocs.io/en/latest/vim.html#split-windows)

标签页 tab、窗口 window、缓冲区 buffer 是 Vim 多文件编辑的三种方式，它们可以单独使用，也可以同时使用。 它们的关系是这样的：

    ==============================================================================
    8. Definitions                                          *definitions*

      buffer                Contains lines of text, usually read from a file.
      screen                The whole area that Vim uses to work in.  This can be
                            a terminal emulator window.  Also called "the Vim
                            window".
      window                A view on a buffer.  There can be multiple windows for
                            one buffer.

    A screen contains one or more windows, separated by status lines and with the
    command line at the bottom.

            +-------------------------------+
    screen  | window 1      | window 2      |
            |               |               |
            |               |               |
            |= status line =|= status line =|
            | window 3                      |
            |                               |
            |                               |
            |==== status line ==============|
            |command line                   |
            +-------------------------------+

==============================================================================
1. Introduction                 *windows-intro* *window*

    Summary:
       A buffer is the in-memory text of a file.
       A window is a viewport on a buffer.
       A tab page is a collection of windows.

    A window is a viewport onto a buffer.  You can use multiple windows on one
    buffer, or several windows on different buffers.

    A buffer is a file loaded into memory for editing.  The original file remains
    unchanged until you write the buffer to the file.

    A buffer can be in one of three states:

                                *active-buffer*
    active:   The buffer is displayed in a window.  If there is a file for this
          buffer, it has been read into the buffer.  The buffer may have been
          modified since then and thus be different from the file.
                                *hidden-buffer*
    hidden:   The buffer is not displayed.  If there is a file for this buffer, it
          has been read into the buffer.  Otherwise it's the same as an active
          buffer, you just can't see it.
                                *inactive-buffer*
    inactive: The buffer is not displayed and does not contain anything.  Options
          for the buffer are remembered if the file was once loaded.  It can
          contain marks from the |viminfo| file.  But the buffer doesn't
          contain text.

    In a table:

    state       displayed   loaded      ":buffers"  ~
                in window                shows       ~
    active        yes        yes          'a'
    hidden        no         yes          'h'
    inactive      no         no           ' '

==============================================================================
7. Argument and buffer list commands            *buffer-list*

          args list            buffer list          meaning ~
    1. :[N]argument [N]     11. :[N]buffer [N]      to arg/buf N
    2. :[N]next [file ..]   12. :[N]bnext [N]       to Nth next arg/buf
    3. :[N]Next [N]         13. :[N]bNext [N]       to Nth previous arg/buf
    4. :[N]previous [N]     14. :[N]bprevious [N]   to Nth previous arg/buf
    5. :rewind / :first     15. :brewind / :bfirst  to first arg/buf
    6. :last                16. :blast              to last arg/buf
    7. :all                 17. :ball               edit all args/buffers
                            18. :unhide             edit all loaded buffers
                            19. :[N]bmod [N]        to Nth modified buf

      split & args list     split & buffer list      meaning ~
    21. :[N]sargument [N]   31. :[N]sbuffer [N]     split + to arg/buf N
    22. :[N]snext [file ..] 32. :[N]sbnext [N]      split + to Nth next arg/buf
    23. :[N]sNext [N]       33. :[N]sbNext [N]      split + to Nth previous arg/buf
    24. :[N]sprevious [N]   34. :[N]sbprevious [N]  split + to Nth previous arg/buf
    25. :srewind / :sfirst  35. :sbrewind / :sbfirst split + to first arg/buf
    26. :slast              36. :sblast             split + to last arg/buf
    27. :sall               37. :sball              edit all args/buffers
                            38. :sunhide            edit all loaded buffers
                            39. :[N]sbmod [N]       split + to Nth modified buf

    40. :args               list of arguments
    41. :buffers            list of buffers

    The meaning of [N] depends on the command:
     [N] is the number of buffers to go forward/backward on 2/12/22/32,
         3/13/23/33, and 4/14/24/34
     [N] is an argument number, defaulting to current argument, for 1 and 21
     [N] is a buffer number, defaulting to current buffer, for 11 and 31
     [N] is a count for 19 and 39

    Note: ":next" is an exception, because it must accept a list of file names
    for compatibility with Vi.



要分屏打开多个文件，使用 `-O` 参数，可以让 Vim 以分屏的方式打开多个文件：

    vim -O main.cpp my-oj-toolkit.h

使用小写的 `-o` 可以水平分屏。

在进入 Vim 后，可以使用这些命令来打开/关闭窗口：

    :sp[lit] {file}     水平分屏
    :new {file}         水平分屏
    :sv[iew] {file}     水平分屏，以只读方式打开
    :vs[plit] {file}    垂直分屏
    :clo[se]            关闭当前窗口

上述命令中，如未指定 file 则打开当前文件。

Split windows

    Commands    Descriptions
    :split      split window in two part and display current file in both window
    :split <filename>   open <filename> in split window
    :5 split <filename> open <filename> in new split window with width of 5 line
    :new        split window in two part with second window as blank
    crtl-w j    go to below split window
    crtl-w k    go to above split window
    crtl-ww, crtl-w w   go to next split window
    crtl-w +    increase the width of split window by one line
    5 crtl-w -  decrease the width of split window by 5 line
    crtl-w =    make all split window of equal size
    crtl-w _    maximize the current split window

Text files

    Commands        Descriptions
    :set textwidth=50   change the line after 50 character
    :1,5 center 50  textwidth = 50 and center the lines 1 to 5
    :1,5 right 50   textwidth = 50 and right justify the text on lines 1 to 5
    :1,5 left 4     left margin = 4 for lines 1 to 5
                    Use $ for end of the line as shown below,    
    :1,$ center 50  textwidth=50 and cneter all the line
                    or use % sign for the file (results is same as above,    
    :% center 50     
    :set wrap       turn the wrap words on
    :set nowrap     turn off the wrap words

快捷键操作多窗口参考文档 :help windows：

    Ctrl+w s        Split Herizontal 水平分割当前窗口
    Ctrl+w v        Split Vertical 垂直分割当前窗口
    Ctrl+w q        Quit Window 关闭当前窗口
    Ctrl+w n        New Window 打开一个新窗口（空文件）
    Ctrl+w o        Keep Current Only 关闭出当前窗口之外的所有窗口

移动光标/切换窗口的快捷键也使用了小写的方向键 hjkl：

    Ctrl+w h        切换到左边窗口
    Ctrl+w j        切换到下边窗口
    Ctrl+w k        切换到上边窗口
    Ctrl+w l        切换到右边窗口
    Ctrl+w w        遍历切换窗口

移动当前窗口，注意使用大写的方向键：

    Ctrl+w H        向左移动当前窗口
    Ctrl+w J        向下移动当前窗口
    Ctrl+w K        向上移动当前窗口
    Ctrl+w L        向右移动当前窗口
    Ctrl+w T        Move to Panel Page 移到标签页

调整窗口大小的快捷键，中间可以指定个数字表示行数：

    Ctrl+w +        增加窗口高度
    Ctrl+w -        减小窗口高度
    Ctrl+w =        统一窗口高度


## ==⚡ Tabs Panel 多文件编辑与标签页
- [Editing with windows in multiple tab pages](doc/tabpage.txt)
- [Vim 多文件编辑：标签页](https://harttle.land/2015/11/12/vim-tabpage.html)

标签页是窗口（Window）容器，每个 Vim 程序实例可以创建任意的 Tabs，每个 Tab 可以分割成
多个窗口，每个窗口打开/编辑一个 Buffer（对应一个文件的读取到内存中的数据内容）。这些窗口
可以在 Tab 页面中进行移动 （`<C,w>`,H/I/J/K）。利用缓冲区对象，可以将窗口（编辑的文件）
移动到 Vim 到其它标签页面中的窗口中进行编辑。例如，以下使用 `buffers` 命令查看当前打开
的文件缓冲区，并使用 `buffer 2` 在当前标签页面的窗口中打开它：

```vim
:buffers
  1 #a   "index.txt"                    line 1
  2 %a   "builtin.txt"                  line 1
:buffer 2
```
使用 `<C>+w,-/+/</>` 可以调整窗口的大小，Window resize。

打开与关闭

标签页是最常见的多文件编辑方式吧，熟悉 IDE 的小伙伴一定能很快上手！ 使用 **-p** 参数来用多个标签页启动 Vim：

```sh
$ vim -p sshd_config authorized_keys
:tabs
Tab page 1
>   sshd_config
Tab page 2
    authorized_keys
Press ENTER or type command to continue
```

在 Vim 中也可以标签方式打开和关闭文件：

    :tabs         list all tabs including their displayed window
    :tabe[dit] {file}   edit specified file in a new tab
    :tabf[ind] {file}   open a new tab with filename given, searching the 'path' to find it
    :tabc[lose]         close current tab
    :tabc[lose] {i}     close i-th tab
    :tabo[nly]          close all other tabs (show only the current tab)

中括号中的部分可以省略，在 Vim 中 **:h tabedit** 可以查看命令帮助。

移动标签

    :tabm 0       move current tab to first
    :tabm         move current tab to last
    :tabm {i}     move current tab to position i+1

标签跳转

    :tabn         go to next tab
    :tabp         go to previous tab
    :tabfirst     go to first tab
    :tablast      go to last tab

在正常模式 Normal 下，还可以使用快捷键：

    gt            go to next tab
    gT            go to previous tab
    {i}gt         go to tab in position i 

可以设置更通用的切换标签页快捷键，比如我的 `~/.vimrc` 是这样设置的:

    " Tab switch
    noremap <C-H> <Esc>:echo "keymap C-H"<Enter> :tabprevious<Enter>
    noremap <C-L> <Esc>:echo "keymap C-L"<Enter> :tabnext<Enter>
    noremap <Tab> <Esc>:echo "keymap Tab"<Enter> :tabnext<Enter>
    noremap <C-Tab> <Esc>:echo "keymap C-Tab"<Enter> :taprevious<Enter>

注意 :echo 是 Vim 内的命令，内容需要加引号包括，而 :!echo 是操作系统上执行命令，内容不需要加引号。


## ==⚡ Neo Vim - GUI Version
- [Vim's Graphical User Interface](doc/gui.txt)
- [Vim's GUI Menu Plugin](vim81/menu.vim)
- [Vim's GUI Syntax Menu Plugin](vim81/synmenu.vim)
- [the X11 GUI](doc/gui_x11.txt)
- [the Win32 GUI](doc/gui_w32.txt)
- [Using the GUI](doc/usr_09.txt)
- [Exploiting the GUI](doc/usr_31.txt)
- [Add new menus](doc/usr_42.txt)
- [NeoVim](https://neovim.io/)
- [ActualVim](https://github.com/lunixbochs/actualvim)
- [Inter-process communication](doc/channel.txt)
- [:help nvim-from-vim](http://neovim.io/doc/user/nvim.html)
- Modern Vim Craft Your Development Environment with Vim 8 and Neovim
- https://github.com/lunarvim/LunarVim

Vim's Graphical User Interface                          *gui* *GUI*

1. Starting the GUI             |gui-start|
2. Scrollbars                   |gui-scrollbars|
3. Mouse Control                |gui-mouse|
4. Making GUI Selections        |gui-selections|
5. Menus                        |menus|
6. Font                         |gui-font|
7. Extras                       |gui-extras|
8. Shell Commands               |gui-shell|

Vim 作为一款文字界面 TUI 应用，本身是非常成功的一种模式，当然，它也有 GUI
图形界面版本 gvim，使用 X11 GUI 或 Win32 GUI API 实现，需要安装相应 GUI 模块支持的版本才能使用。

    gvim file.txt
    vim -g file.txt

Vim will open a window and display "file.txt" in it.  What the window looks
like depends on the version of Vim.  It should resemble the following picture
(for as far as this can be shown in ASCII!).

    +----------------------------------------------------+
    | file.txt + (~/dir) - VIM             X |  <- window title
    +----------------------------------------------------+
    | File  Edit  Tools  Syntax  Buffers  Window  Help   |  <- menubar
    +----------------------------------------------------+
    | aaa  bbb  ccc  ddd  eee  fff  ggg  hhh  iii  jjj   |  <- toolbar
    | aaa  bbb  ccc  ddd  eee  fff  ggg  hhh  iii  jjj   |
    +----------------------------------------------------+
    | file text                  | ^ |
    | ~                      | # |
    | ~                      | # |  <- scrollbar
    | ~                      | # |
    | ~                      | # |
    | ~                      | # |
    |                        | V |
    +----------------------------------------------------+

Actual uses an embedded Neovim instance to accurately manipulate each Sublime Text buffer as though you were editing the text directly in vim, while the Sublime Text interface, features, and plugins continue to work (see end of README for caveats).

Windows 可以安装 NeoVim，它基于 QT GUI 图形库实现用户界面，下载安装后可以获得 nvim.exe 和 nvim-qt.exe 两个程序，还有 curl.exe 等依赖工具。

还有解决 Windows WSL 系统文件性能问题的工具 [win32yank.exe](https://github.com/equalsraf/win32yank)

安装后需要设置初始配置脚本，设置好初始化脚本之前，用户目录下的 `~/.vimrc` 配置不会自动加载，因为 NeoVim 的配置入口脚本是 init.vim，主要负责加载其它 lua 脚本。

参考帮助文档 :help nvim-from-vim，可以从 $MYVIMRC 内置变量获取配置入口文件位置：

    Transitioning from Vim              *nvim-from-vim*

    1. To start the transition, create your |init.vim| (user config) file: >

        :call mkdir(stdpath('config'), 'p')
        :exe 'edit '.stdpath('config').'/init.vim'

    2. Add these contents to the file: >

        set runtimepath^=~/.vim runtimepath+=~/.vim/after
        let &packpath = &runtimepath
        source ~/.vimrc

    3. Restart Nvim, your existing Vim config will be loaded.


应该尽量避免嵌套运行 Vim，因为程序可能对数据完整性有破坏，并且在 Vim 内运行的 Vim 在退出后，按键输入还可能被外层 Vim 再处理。

可以判断 $NVIM_LISTEN_ADDRESS 变量，使用别名处理来避免无意的嵌套运行 Vim：

```sh
# terminal/alias-nvim-nvr.sh
if [ -n "$NVIM_LISTEN_ADDRESS" ]; then
    if [ -x "$(command -v nvr)" ]; then
        alias nvim=nvr
    else
        alias nvim='echo "No nesting!"'
    fi
fi
```

bash 脚本中，使用 [ -n ] 做字符中是否为空值判断，使用 [ -x ] 判断文件是否存丰并且是可执行文件。command 命令可以查询指定命令握在位置，参考 bash manual - 6.4 Bash Conditional Expressions。

Neovim 0.5.0 像是不支持 + * 两个个寄存器的，它们内容相同，所以在 Windows 上不能共享剪贴板，或需要自己配置寄存器来实现剪切板的互通。在最新版本上，可以使用，并激活鼠标进行 Visual 选择内容后进行复制：

```sh
:set mouse=nvi
v    # into Visual mode and select text 
"*y  # copy to * register
"+y" # copy to + register
:reg # review register content
```

Windows 平台下，Neovim 控制台版本运行时 Ctrl-Z 会冻结，目前解决办法是重新映射按键：

```sh
"" # Ctrl-Z will call nvim frozen
if has("win32") && has("nvim")
  nnoremap <C-z> :\|"Ctrl-Z may cause nvim frozen<Home>
  inoremap <C-z> :\|"Ctrl-Z may cause nvim frozen<Home>
  vnoremap <C-z> :\|"Ctrl-Z may cause nvim frozen<Home>
  snoremap <C-z> :\|"Ctrl-Z may cause nvim frozen<Home>
  xnoremap <C-z> :\|"Ctrl-Z may cause nvim frozen<Home>
  cnoremap <C-z> :\|"Ctrl-Z may cause nvim frozen<Home>
  onoremap <C-z> :\|"Ctrl-Z may cause nvim frozen<Home>
endif
```

众所周知 xterm 标准的终端只有 256 色，GUI 是支持渲染百万色的，必然颜色会更鲜艳/容易看清，只需要配置：

    :set termguicolors

就能启用 truecolor rendering，然后可以安装真彩主题，如 gruvbox：

```py
Plugin 'morhetz/gruvbox'
colorscheme gruvbox
set background=dark
highlight Normal guibg=NONE ctermbg=None
```

NeoVim 主题插件目录在 $VIMRUNTIME 系统变量中指定，执行 :colorscheme 命令时按 Tab 会弹出候选主题名称，按需要设置：

```sh
:colorscheme evening
:colorscheme elflord
:colorscheme torte
:colorscheme slate
:colorscheme shine
:colorscheme desert
```

Sbulime Text 可以使用 ActualVim，这个插件基于 NeoVim 实现，使用 Channel IPC 传递命令数据。

安装插件后需要修改配置文件，添加 nvim.exe 所在目录，插件本身也提供了默认路径检测：

    "neovim_path": "C:/Program Files/Neovim/bin/", 

插件还不够稳定，在 Windows 系统上所说性能有问题，而且设置好后也报错不能正常使用：

    ActualVim\lib\neovim\msgpack_rpc\session.py", line 109, in request
        raise IOError('EOF')

    ActualVim\view.py", line 602, in set_path
        self.buf.name = path
    AttributeError: 'NoneType' object has no attribute 'name'

可以直接下载 NeoVim，或者使用 WinGet 工具安装：

```sh
> WinGET search NeoVim
Name   Id            Version Source
------------------------------------
Neovim Neovim.Neovim 0.7.0   winget

> &$env:WinGET install NeoVim
Found Neovim [Neovim.Neovim] Version 0.7.0
This application is licensed to you by its owner.
...
Downloading https://github.com/neovim/neovim/releases/download/v0.7.0/nvim-win64.msi

> &$env:WinGET show Neovim
Found Neovim [Neovim.Neovim]
Version: 0.7.0
Publisher: neovim.io
Moniker: nvim

# PowerShell: Set enviroment $PATH
[environment]::SetEnvironmentvariable("Path", "$Env:Path;C:\Program Files\Neovim\bin\","User")
```

添加注册表右键菜单，将以下内容保存为 UTF16-LE 格式的 .reg 文件并双击导入注册表：

```sh
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\Background\shell\vim-gui]
@="⚡ Neo Vim GUI .."
"Icon"="C:\\Program Files\\Neovim\\bin\\nvim-qt.exe"

[HKEY_CLASSES_ROOT\Directory\Background\shell\vim-gui\command]
@="C:\\Program Files\\Neovim\\bin\\nvim-qt.exe '%V'"

[HKEY_CLASSES_ROOT\Directory\Background\shell\vim]
@="✒ Neo Vim ..."
"ICON"="C:\\Program Files\\Neovim\\bin\\nvim-qt.exe"

[HKEY_CLASSES_ROOT\Directory\Background\shell\vim\command]
@="C:\\Program Files\\Neovim\\bin\\nvim.exe '%V'"
```



## ==⚡ Buffer 多文件编辑与缓冲区
- [Editing files](doc/editing.txt)
- [Editing with multiple windows and buffers](doc/widows.txt)

引用 Vim 官方解释，缓冲区是一个文件的内容占用的那部分 Vim 内存：

>A buffer is an area of Vim’s memory used to hold text read from a file. In addition, an empty buffer with no associated file can be created to allow the entry of text. –vim.wikia

Editing a file with Vim means:

1. reading the file into a buffer
2. changing the buffer with editor commands
3. writing the buffer into a file

先来回顾一下 Tab，Window，Buffer 关系。

基于缓冲区的多文件编辑是 Vim 最为推荐的做法，Vim 维护着你在当前打开的这些 Buffer 里的所有跳转， Ctrl+o 和 Ctrl+i 可以遍历这些光标位置，但一个窗口内只有一个 Buffer 是处于可见状态的。

不带任何参数打开多个文件便可以把它们都放入缓冲区 Buffer：

    vim a.txt b.txt

当你使用 :q 关闭文件时是否看到过 1 more file to edit 的警告？那就是缓冲区中的文件。

进入 Vim 后，通过 :e[dit] 命令即可打开某个文件到缓冲区。使用 :new 可以打开一个新窗口。 关闭一个文件可以用 :q，移出缓冲区用 :bd[elete]，占用缓冲区的文件对你毫无影响，多数情况下不需要这样做。

如果 Buffer 未保存 :bd 会失败，如果强制删除可以 :bd!。

缓冲区之间跳转最常用的方式便是 Ctrl+^，即 Ctrl-6 不需要按下 Shift，来切换当前缓冲区和上一个缓冲区。 

另外，还提供了很多跳转命令：

    :bn[ext]            下一个缓冲区
    :bp[revious]        上一个缓冲区
    :b {number, expression}     跳转到指定缓冲区

:b 接受缓冲区编号，或者部分文件名。例如：

- :b2 将会跳转到编号为 2 的缓冲区，如果你正在用 :ls 列出缓冲区，这时只需要输入编号回车即可。
- :b exa 将会跳转到最匹配 exa 的文件名，比如 example.html，模糊匹配打开文件正是 Vim 缓冲区的强大之处。

除了退出 Vim 时会自动关闭 buffers，也可以使用各种命令主动管理，增加或移除：

:bad[d] [+lnum] {fname}
        Add file name {fname} to the buffer list, without loading it.
        If "lnum" is specified, the cursor will be positioned at that
        line when the buffer is first entered.  Note that other
        commands after the + will be ignored.

:[N]bd[elete][!]            *:bd* *:bdel* *:bdelete* *E516*
:bd[elete][!] [N]
        Unload buffer [N] (default: current buffer) and delete it from
        the buffer list.  If the buffer was changed, this fails,
        unless when [!] is specified, in which case changes are lost.


A buffer can also be unlisted.  This means it exists, but it is not in the
list of buffers. |unlisted-buffer|

:files[!] [flags]               *:files*
:buffers[!] [flags]             *:buffers* *:ls*
:ls[!] [flags]
        Show all buffers.  Example:

            1 #h   "/test/text"     line 1 ~
            2u     "asdf"           line 0 ~
            3 %a + "version.c"      line 1 ~


==============================================================================
12. Special kinds of buffers            *special-buffers*

Instead of containing the text of a file, buffers can also be used for other
purposes.  A few options can be set to change the behavior of a buffer:
    'bufhidden' what happens when the buffer is no longer displayed
            in a window.
    'buftype'   what kind of a buffer this is
    'swapfile'  whether the buffer will have a swap file
    'buflisted' buffer shows up in the buffer list


在 Vim 多文件窗口编辑中已经介绍了 Vim 中分割屏幕的操作。 其实分屏时还可以指定一个 Buffer 在新的 Window 中打开。

    :sb 3               分屏并打开 #3 Buffer
    :vertical sb 3      同上，垂直分屏
    :vertical rightbelow sfind file.txt

注意 sfind 可以打开在 Vim PATH 中的任何文件。这当然需要我们设置 PATH，一个通用的做法是在 `~/.vimrc` 中添加：

    " 将当前工作路径设为Vim PATH
    set path=$PWD/**


利用通配符进行缓冲区跳转

这是缓冲区最强大的功能之一。我们可以使用通配符来指定要跳转到的缓冲区文件名。 在此之前，我们启动 wildmenu 并设置匹配后文件选择模式为 full。 wildchar 为选择下一个备选文件的快捷键， 而 wildcharm 用于宏定义中语义同 wildchar，比如后面的 noremap。

    set wildmenu wildmode=full 
    set wildchar=<Tab> wildcharm=<C-Z>

比如现在按下打开这些文件：

    vehicle.c vehicle.h car.c car.h jet.c jet.h jetcar.c jetcar.h

然后按下 **:b <Tab>** 便可看到 Vim 提供的备选文件列表了， 按下 Tab 选择下一个，按下回车打开当前文件。

    :b <Tab>       " 依次显示所有 Buffer 中的文件
    :b *car<Tab>   " 显示 car.c jetcar.c car.h jetcar.h
    :b .h<Tab>     " 显示 vehicle.h car.h jet.h jetcar.h
    :b .c<Tab>     " 显示 vehicle.c car.c jet.c jetcar.c
    :b ar.c<Tab>   " 显示 car.c jetcar.c
    :b j*c<Tab>    " 显示 jet.c jetcar.c jetcar.h

我们可以为 :b <Tab> 设置一个快捷键 ^n，这时便用到上文中设置的 wildcharm 了：

    noremap <c-n> :b <c-z>



## ==⚡ Registers 寄存器
- [Command-line mode](doc/cmdline.txt)
- [Change text](doc/change.txt)
- [Expression evaluation](doc/eval.txt)

Registers 寄存器是 vim 运行过程用来保存临时数据场所，可以在 vim 关闭后再次启动后使用。可以用各种命令读写，比如 yy 命令就是将当前行或指定行数内存写入默认寄存器，然后使用 p 命令粘贴出来，命令中还可以指定对哪个寄存器操作。

例如，文件名保存在 % 寄存器中，所以在执行 Shell 命令时可以用到它，`:! echo %` 

There are ten types of registers:

    1. The unnamed register         ""
    2. 10 numbered registers        "0 to "9
    3. The small delete register    "-
    4. 26 named registers           "a to "z or "A to "Z
    5. Three read-only registers    ":, "., "%
    6. Alternate buffer register    "#
    7. The expression register      "=
    8. The selection and drop registers "*, "+ and "~ 
    9. The black hole register      "_
    10. Last search pattern register "/

Special registers:

    '"' the unnamed register, containing the text of the last delete or yank
    '%' the current file name
    '#' the alternate file name
    '*' the clipboard contents (X11: primary selection)
    '+' the clipboard contents
    '/' the last search pattern
    ':' the last command-line
    '-' the last small (less than a line) delete
    '.' the last inserted text *c_CTRL-R_=*
    '=' the expression register: you are prompted to
        enter an expression (see |expression|)
        (doesn't work at the expression prompt; some
        things such as changing the buffer or current
        window are not allowed to avoid side effects)
        When the result is a |List| the items are used
        as lines.  They can have line breaks inside
        too.

其中 expression register 会提示输入表达式，确认后表达式结果保存在 : last command-line 寄存器中，表达式本身保存在 = 寄存器。涉及 Vim script 编程，插件开发也需要脚本，可以参考相关资料。

另外，还有两个寄存器和操作系统剪贴板使用同一存储，这样可以在 Vim 与系统之间转递数据。


使用 :reg 命令查看当前寄存器所存储的内容，双引号代表默认寄存器：

    Type Name Content
      l  ""   ["x]Y^I^I^Iyank [count] lines [into register x] (synonym for^J
      l  "0   {Visual}["x]Y^I^IYank the highlighted lines [into register x] (for^J
      c  "1
      l  "2   ["x]Y^I^I^Iyank [count] lines [into register x] (synonym for^J
      l  "3   let line = 3                | " Line number determined at runtime^J
      l  "4   let line = 3                | " Line number determined at runtime^J
      l  "5   let line = 3                | " Line number determined at runtime^J
      l  "6   let line = 3                | " Line number determined at runtime^J
      l  "7   let line = 3                | " Line number determined at runtime^J
      l  "8   let line = 3                | " Line number determined at runtime^J
      l  "9   let line = 3                | " Line number determined at runtime^J
      c  "x
      l  "y   ["x]Y^I^I^Iyank [count] lines [into register x] (synonym for^J
      c  "-   t
      c  ":   reg
      c  "%   /usr/share/vim/vim81/doc/change.txt
      c  "#   /usr/share/vim/vim81/doc/eval.txt
      c  "/   <>

Copying and moving text 部分命令参考

    "{a-zA-Z0-9.%#:-"}  Use register {a-zA-Z0-9.%#:-"} for next delete, yank
                or put (use uppercase character to append with
                delete and yank) ({.%#:} only work with put).

                                                                    *:reg* *:registers*
    :reg[isters]        Display the type and contents of all numbered and
                named registers.  If a register is written to for
                |:redir| it will not be listed.
                Type can be one of:
                "c" for |characterwise| text
                "l" for |linewise| text
                "b" for |blockwise-visual| text


    :reg[isters] {arg}  Display the contents of the numbered and named
                registers that are mentioned in {arg}.  For example: >
                    :reg 1a
    <           to display registers '1' and 'a'.  Spaces are allowed
                in {arg}.

                                                                    *:di* *:display*
    :di[splay] [arg]    Same as :registers.

                                                                    *y* *yank*
    ["x]y{motion}       Yank {motion} text [into register x].  When no
                characters are to be yanked (e.g., "y0" in column 1),
                this is an error when 'cpoptions' includes the 'E'
                flag.

                                                                    *yy*
    ["x]yy          Yank [count] lines [into register x] |linewise|.

                                                                    *Y*
    ["x]Y           yank [count] lines [into register x] (synonym for
                yy, |linewise|).  If you like "Y" to work from the
                cursor to the end of line (which is more logical,
                but not Vi-compatible) use ":map Y y$".


## ==⚡ Command line & History
- [Command-line - History](doc/cmdline.txt)

命令行是直接输入命令的模式，除了在 Normal mode 中直接响应按键映射的命令，在命令行中可以直接输入要执行的命令，或者调用 API 函数。

在命令行输入 “ 开头将当作注解，而忽略所有后续输入内容。

许多命令都可以接收一个 range 指定行号范围信息，格式有多种，有逗号、分号分隔式，有 Visual Range 式，有正则匹配式等。

比如复制当前行往后共 3 行内容，命令为 .,+2y，句点表示当前行，+2 表示后续两行，总共 3 行内容。

使用逗号和分号作分隔的差别在于，分号会设置光标为分号后面的数值所指位置。

Some Ex commands accept a line range in front of them.  This is noted as
[range].  It consists of one or more line specifiers, separated with ',' or
';'.

The basics are explained in section |10.3| of the user manual.

                        *:,* *:;*
When separated with ';' the cursor position will be set to that line
before interpreting the next line specifier.  This doesn't happen for ','.
Examples: >
   4,/this line/
<   from line 4 till match with "this line" after the cursor line. >
   5;/that line/
<   from line 5 till match with "that line" after line 5.

The default line specifier for most commands is the cursor position, but the
commands ":write" and ":global" have the whole file (1,$) as default.

If more line specifiers are given than required for the command, the first
one(s) will be ignored.

Line numbers may be specified with:     *:range* *{address}*

    {number}    an absolute line number
    .           the current line                    *:.*
    $           the last line in the file           *:$*
    %           equal to 1,$ (the entire file)      *:%*
    't          position of mark t (lowercase)      *:'*
    'T          position of mark T (uppercase); when the mark is in
                another file it cannot be used in a range
    /{pattern}[/]   the next line where {pattern} matches     *:/*
    ?{pattern}[?]   the previous line where {pattern} matches *:?*
    \/          the next line where the previously used search
                pattern matches
    \?          the previous line where the previously used search
                pattern matches
    \&          the next line where the previously used substitute
                pattern matches

Each may be followed (several times) by '+' or '-' and an optional number.
This number is added or subtracted from the preceding line number.  If the
number is omitted, 1 is used.

命令行中还可以使用各种特殊符号，比如 % 号这个符号就表示当前的文件名，可以在命令中使用：

    :echo expand("%")
    :source %
    :!echo "%"
    :let &tags = expand("%:p:h") . "/tags"

注意，如果直接在 Vim 内部解释这些特殊符号，可能需要主动调用 expand() 方法进行扩展处理，根据具体情况决定。如果，将这些符号传递到外部命令使用，Vim 会自动扩展，替换为具体值。

expand({expr} [, {nosuf} [, {list}]])                           expand()
                Expand wildcards and the following special keywords in {expr}.
                'wildignorecase' applies.

                If {list} is given and it is TRUE, a List will be returned.
                Otherwise the result is a String and when there are several
                matches, they are separated by <NL> characters.  [Note: in
                version 5.0 a space was used, which caused problems when a
                file name contains a space]

                If the expansion fails, the result is an empty string.  A name
                for a non-existing file is not included, unless {expr} does
                not start with '%', '#' or '<', see below.

                When {expr} starts with '%', '#' or '<', the expansion is done
                like for the cmdline-special variables with their associated
                modifiers.  Here is a short overview:

                        %               current file name
                        #               alternate file name
                        #n              alternate file name n
                        <cfile>         file name under the cursor
                        <afile>         autocmd file name
                        <abuf>          autocmd buffer number (as a String!)
                        <amatch>        autocmd matched name
                        <sfile>         sourced script file or function name
                        <slnum>         sourced script line number or function
                                        line number
                        <sflnum>        script file line number, also when in
                                        a function
                        <cword>         word under the cursor
                        <cWORD>         WORD under the cursor
                        <client>        the {clientid} of the last received
                                        message server2client()
                Modifiers:
                        :p              expand to full path
                        :h              head (last path component removed)
                        :t              tail (last path component only)
                        :r              root (one extension removed)
                        :e              extension only

==============================================================================
6. Ex special characters                *cmdline-special*

Note: These are special characters in the executed command line.  If you want
to insert special things while typing you can use the CTRL-R command.  For
example, "%" stands for the current file name, while CTRL-R % inserts the
current file name right away.  See |c_CTRL-R|.

Note:  If you want to avoid the effects of special characters in a Vim script
you may want to use |fnameescape()|.  Also see |`=|.


In Ex commands, at places where a file name can be used, the following
characters have a special meaning.  These can also be used in the expression
function |expand()|.
    %   Is replaced with the current file name.       *:_%* *c_%*
    #   Is replaced with the alternate file name.     *:_#* *c_#*
        This is remembered for every window.
    #n  (where n is a number) is replaced with        *:_#0* *:_#n*
        the file name of buffer n.  "#0" is the same as "#".     *c_#n*
    ##  Is replaced with all names in the argument list   *:_##* *c_##*
        concatenated, separated by spaces.  Each space in a name
        is preceded with a backslash.
    #<n (where n is a number > 0) is replaced with old    *:_#<* *c_#<*
        file name n.  See |:oldfiles| or |v:oldfiles| to get the
        number.                         *E809*
        {only when compiled with the |+eval| and |+viminfo| features}

Note that these, except "#<n", give the file name as it was typed.  If an
absolute path is needed (when using the file name from a different directory),
you need to add ":p".  See |filename-modifiers|.

The "#<n" item returns an absolute path, but it will start with "~/" for files
below your home directory.

Note that backslashes are inserted before spaces, so that the command will
correctly interpret the file name.  But this doesn't happen for shell
commands.  For those you probably have to use quotes (this fails for files
that contain a quote and wildcards): >
    :!ls "%"
    :r !spell "%"

To avoid the special meaning of '%' and '#' insert a backslash before it.
Detail: The special meaning is always escaped when there is a backslash before
it, no matter how many backslashes.
    you type:       result  ~
       #            alternate.file
       \#           #
       \\#          \#
Also see |`=|.

                   *:<cword>* *<cword>* *:<cWORD>* *<cWORD>*
                   *:<cexpr>* *<cexpr>* *:<cfile>* *<cfile>*
                   *:<afile>* *<afile>* *:<abuf>* *<abuf>*
                   *:<amatch>* *<amatch>*
                   *:<sfile>* *<sfile>* *:<slnum>* *<slnum>*
                   *:<sflnum>* *<sflnum>* *E499* *E500*

Examples, when the file name is "src/version.c", current dir
"/home/mool/vim": >
  :p            /home/mool/vim/src/version.c
  :p:.                     src/version.c
  :p:~               ~/vim/src/version.c
  :h                       src
  :p:h          /home/mool/vim/src
  :p:h:h        /home/mool/vim
  :t                       version.c
  :p:t                     version.c
  :r                       src/version
  :p:r          /home/mool/vim/src/version
  :t:r                     version
  :e                           c
  :s?version?main?             src/main.c
  :s?version?main?:p    /home/mool/vim/src/main.c
  :p:gs?/?\\?       \home\mool\vim\src\version.c

Examples, when the file name is "src/version.c.gz": >
  :p            /home/mool/vim/src/version.c.gz
  :e                             gz
  :e:e                         c.gz
  :e:e:e                       c.gz
  :e:e:r                       c
  :r                       src/version.c
  :r:e                         c
  :r:r                     src/version
  :r:r:r                   src/version
<
                    *extension-removal* *:_%<*
If a "<" is appended to "%", "#", "#n" or "CTRL-V p" the extension of the file
name is removed (everything after and including the last '.' in the file
name).  This is included for backwards compatibility with version 3.0, the
":r" form is preferred.  Examples: >

    %       current file name
    %<      current file name without extension
    #       alternate file name for current window
    #<      idem, without extension
    #31     alternate file number 31
    #31<        idem, without extension
    <cword>     word under the cursor
    <cWORD>     WORD under the cursor (see |WORD|)
    <cfile>     path name under the cursor
    <cfile><    idem, without extension


通过学习 Vim 寄存器，就可以解锁新姿势：往命令行粘贴内容的技能。无论是在命令行输入还编辑文档
插入模块，它们都具有相同的程序状态：等待用户输入。所以它们都可以使用寄存器的读取动作（粘贴）。
粘贴内容对应的操作是，Ctrl-R " 读取默认寄存器内存并粘贴到文件中。注意，按下 Ctrl-R 快捷键
时自动插入一个双引号，它表示默认的 unnamed register，只需要再输入一个符号就可以指定其它
寄存器，比如 * 号表示系统剪贴板，获取帮助 `:help <C-R>` 或者 `:help c_<C-R>`。

例如，在 Normal mode 执行 "yY 命令，将当前行、或选中内容保存到 "y 寄存器中。

通过学习 Vim Script 又可以解锁另一种反向操作的姿势：将命令粘贴到文件中！

    :exe '!chcp Bad'.' Apple!'
    :exe "normal I:exe '!chcp Bad'.' Apple!'"
    :normal I:exe '!chcp Bad'.' Apple!'

执行命令 :execute 就是执行内置函数（`execute({command})`），传入命令脚本并返回执行结果。而通过命令 :normal I 则是进入 Normal mode 执行 Insert 命令，从而完成将命令行内容输入到文件中的需求。可以在 Vim 脚本中直接调用内置函数，或者在命令模式下使用，只是不不能直接执行函数而不处理其返回值，可以像这样 `:echo system("pwd")`。或者 `:silent let f = system('ls *.vim')` 这样。注意 `system` 函数与 `exeute` 的返回值差异，前者才是返回外部命令的输出内容,。因此，以下第二条命令才会向文档中插件外部命令返回的结果：

    :exe "normal I:execute Output:".execute("!ls")

    :exe "normal I:system Output:".system("!ls")

    :execute Output:
    1  a   "index.txt"                    line 1
    2 #a   "builtin.txt"                  line 1
    3 %a + "[No Name]"                    line 14

    :system Output:arabic.txt
    autocmd.txt
    builtin.txt
    change.txt
    channel.txt
    cmdline.txt
    debug.txt

执行 :normal I 命令直接插入字符串内容到文件，如果引其它变量，那么再套一层 :exe 命令去生成结果再执行插入：

另外，Vim 虽然支持 json 编码，但不支持 json 格式化，需要利用 PowerShell、Python 等工具的辅助。

在命令行中传递字符串非常定容易出错，可以写入文件再处理。Vim 提供 shell 调用，可以在命令模式下使用 `!cmd` 格式调用外部命令，也可以使用 `system({expr} [, {input}])` 函数来调用外部命令。

:exe "normal I:exec BBB".execute("!ls")

以下脚本可以将 global 作用域的信息转化为格式化后的字符串，如果提示 *E499* 可能是因为当前 buffer 是新创建的没有相应文件名，使用 :file name 设置一下：

```sh
# PowerShell
python -c "print(json.dumps({'4': 5, '6': 7}, sort_keys=True, indent=4))" 
# (Get-Content global.json) -replace '^"@|" $',"" -replace "'",'"' -replace "\\","\\\\" |ConvertFrom-Json|ConvertTo-Json

# Vim
:!pwsh /c @{a=3.141; b=1.414}
:exe '! echo "' . string(g:) .'" > global.json'
:exe 'normal I' . substitute(string(g:),'\\', '\\\\', 'g')
:w global.json
:exe '!pwsh /c "(Get-Content global.json)|ConvertFrom-Json|ConvertTo-Json"'
# substitute(string(g:), "\\(':\\)\\|\\(, '\\)", {m -> m[1] == "':" ? "' =" : "; '"},"g")
```

直接使用 PowerShell 的 Hashtable 处理 Json 的数据需要做一些修改，将 : 改 = 作为字段赋值，将 , 号改成 ; 作为字段的分隔。

按正常 Vim 正式的表达，\(':\)\|\(, '\) 可以匹配需要修改的两部分内容，但是使用 substitute 方法时不能正确处理。这是因为在字面量处理时，\ 符号作为转义符号使用，所以正则表达式中的 \ 就应该使用 \\ 表示。


将正则匹配到的多个位置替换成为不同内容这是一种常见字符串处理需求，不能直接往 {sub} 设置字符串来实现，需要给它传入 *Funcref* 来自定义替换，可以参考文档使用匿名函数。 {m -> '0x' .. m[1]} 函数接收匹配结果，它包含至多 9 组匹配内容。

{sub} 还可以传入以 \= 开头的字符串，以使用表达式作为替换内容的生成工具。

                When {sub} starts with "\=", the remainder is interpreted as
                an expression. See sub-replace-expression.  Example:
                        :echo substitute(s, '%\(\x\x\)',
                           \ '\=nr2char("0x" .. submatch(1))', 'g')

               When {sub} is a Funcref that function is called, with one
                optional argument.  Example:
                   :echo substitute(s, '%\(\x\x\)', SubNr, 'g')
                The optional argument is a list which contains the whole
                matched string and up to nine submatches, like what
                submatch() returns.  Example:
                   :echo substitute(s, '%\(\x\x\)', {m -> '0x' .. m[1]}, 'g')

                Can also be used as a method:
                        GetString()->substitute(pat, sub, flags)


    ==============================================================================
    1. Command-line editing                 *cmdline-editing*

                                *:his* *:history*
    :his[tory]  Print the history of last entered commands.
            {not available when compiled without the |+cmdline_hist|
            feature}

    :his[tory] [{name}] [{first}][, [{last}]]
            List the contents of history {name} which can be:
            c[md]    or :       command-line history
            s[earch] or / or ?  search string history
            e[xpr]   or =       expression register history
            i[nput]  or @       input line history
            d[ebug]  or >       debug command history
            a[ll]               all of the above

            If the numbers {first} and/or {last} are given, the respective
            range of entries from a history is listed.  These numbers can
            be specified in the following form:
                                *:history-indexing*
            A positive number represents the absolute index of an entry
            as it is given in the first column of a :history listing.
            This number remains fixed even if other entries are deleted.

            A negative number means the relative position of an entry,
            counted from the newest entry (which has index -1) backwards.

            Examples:
            List entries 6 to 12 from the search history: >
                :history / 6,12
    <
            List the penultimate entry from all histories: >
                :history all -2
    <
            List the most recent two entries from all histories: >
                :history all -2,




## ==⚡ Vim Cheat Sheet
- [Vim Cheat Sheet](https://vim.rtorr.com/)

Vim Cheat Sheet

Global

    :h[elp] keyword - open help for keyword
    :sav[eas] file - save file as
    :clo[se] - close current pane
    :ter[minal] - open a terminal window
    K - open man page for word under the cursor

>Tip Run vimtutor in a terminal to learn the first Vim commands.

Cursor movement

    h - move cursor left
    j - move cursor down
    k - move cursor up
    l - move cursor right
    H - move to top of screen
    M - move to middle of screen
    L - move to bottom of screen
    w - jump forwards to the start of a word
    W - jump forwards to the start of a word (words can contain punctuation)
    e - jump forwards to the end of a word
    E - jump forwards to the end of a word (words can contain punctuation)
    b - jump backwards to the start of a word
    B - jump backwards to the start of a word (words can contain punctuation)
    % - move to matching character (default supported pairs: '()', '{}', '[]' - use :h matchpairs in vim for more info)
    0 - jump to the start of the line
    ^ - jump to the first non-blank character of the line
    $ - jump to the end of the line
    g_ - jump to the last non-blank character of the line
    gg - go to the first line of the document
    G - go to the last line of the document
    5gg or 5G - go to line 5
    fx - jump to next occurrence of character x
    tx - jump to before next occurrence of character x
    Fx - jump to previous occurence of character x
    Tx - jump to after previous occurence of character x
    ; - repeat previous f, t, F or T movement
    , - repeat previous f, t, F or T movement, backwards
    } - jump to next paragraph (or function/block, when editing code)
    { - jump to previous paragraph (or function/block, when editing code)
    zz - center cursor on screen
    Ctrl + e - move screen down one line (without moving cursor)
    Ctrl + y - move screen up one line (without moving cursor)
    Ctrl + b - move back one full screen
    Ctrl + f - move forward one full screen
    Ctrl + d - move forward 1/2 a screen
    Ctrl + u - move back 1/2 a screen

>Tip Prefix a cursor movement command with a number to repeat it. For example, 4j moves down 4 lines.

Insert mode - inserting/appending text

    i - insert before the cursor
    I - insert at the beginning of the line
    a - insert (append) after the cursor
    A - insert (append) at the end of the line
    o - append (open) a new line below the current line
    O - append (open) a new line above the current line
    ea - insert (append) at the end of the word
    Ctrl + h - delete the character before the cursor during insert mode
    Ctrl + w - delete word before the cursor during insert mode
    Ctrl + j - begin new line during insert mode
    Ctrl + t - indent (move right) line one shiftwidth during insert mode
    Ctrl + d - de-indent (move left) line one shiftwidth during insert mode
    Ctrl + n - insert (auto-complete) next match before the cursor during insert mode
    Ctrl + p - insert (auto-complete) previous match before the cursor during insert mode
    Esc - exit insert mode

Editing

    r - replace a single character
    J - join line below to the current one with one space in between
    gJ - join line below to the current one without space in between
    gwip - reflow paragraph
    g~ - switch case up to motion
    gu - change to lowercase up to motion
    gU - change to uppercase up to motion
    cc - change (replace) entire line
    C - change (replace) to the end of the line
    c$ - change (replace) to the end of the line
    ciw - change (replace) entire word
    cw - change (replace) to the end of the word
    s - delete character and substitute text
    S - delete line and substitute text (same as cc)
    xp - transpose two letters (delete and paste)
    u - undo
    U - restore (undo) last changed line
    Ctrl + r - redo
    . - repeat last command
    Marking text (visual mode)
    v - start visual mode, mark lines, then do a command (like y-yank)
    V - start linewise visual mode
    o - move to other end of marked area
    Ctrl + v - start visual block mode
    O - move to other corner of block
    aw - mark a word
    ab - a block with ()
    aB - a block with {}
    at - a block with <> tags
    ib - inner block with ()
    iB - inner block with {}
    it - inner block with <> tags
    Esc - exit visual mode

>Tip Instead of b or B one can also use ( or { respectively.

Visual commands

    > - shift text right
    < - shift text left
    y - yank (copy) marked text
    d - delete marked text
    ~ - switch case
    u - change marked text to lowercase
    U - change marked text to uppercase

Registers

    :reg[isters] - show registers content
    "xy - yank into register x
    "xp - paste contents of register x
    "+y - yank into the system clipboard register
    "+p - paste from the system clipboard register

>Tip Registers are being stored in `~/.viminfo`, and will be loaded again on next restart of vim.

>Tip Special registers:

    0 - last yank
    " - unnamed register, last delete or yank
    % - current file name
    # - alternate file name
    * - clipboard contents (X11 primary)
    + - clipboard contents (X11 clipboard)
    / - last search pattern
    : - last command-line
    . - last inserted text
    - - last small (less than a line) delete
    = - expression register
    _ - black hole register


Marks and positions

    :marks - list of marks
    ma - set current position for mark A
    `a - jump to position of mark A
    y`a - yank text to position of mark A
    `0 - go to the position where Vim was previously exited
    `" - go to the position when last editing this file
    `. - go to the position of the last change in this file
    `` - go to the position before the last jump
    :ju[mps] - list of jumps
    Ctrl + i - go to newer position in jump list
    Ctrl + o - go to older position in jump list
    :changes - list of changes
    g, - go to newer position in change list
    g; - go to older position in change list
    Ctrl + ] - jump to the tag under cursor

>Tip To jump to a mark you can either use a backtick (&#96;) or an apostrophe ( ' ). Using an apostrophe jumps to the beginning (first non-black) of the line holding the mark.

反引号转义 &amp;#96; 

Macros

    qa - record macro a
    q - stop recording macro
    @a - run macro a
    @@ - rerun last run macro
    Cut and paste
    yy - yank (copy) a line
    2yy - yank (copy) 2 lines
    yw - yank (copy) the characters of the word from the cursor position to the start of the next word
    y$ - yank (copy) to end of line
    p - put (paste) the clipboard after cursor
    P - put (paste) before cursor
    dd - delete (cut) a line
    2dd - delete (cut) 2 lines
    dw - delete (cut) the characters of the word from the cursor position to the start of the next word
    D - delete (cut) to the end of the line
    d$ - delete (cut) to the end of the line
    x - delete (cut) character

Indent text

    >> - indent (move right) line one shiftwidth
    << - de-indent (move left) line one shiftwidth
    >% - indent a block with () or {} (cursor on brace)
    >ib - indent inner block with ()
    >at - indent a block with <> tags
    3== - re-indent 3 lines
    =% - re-indent a block with () or {} (cursor on brace)
    =iB - re-indent inner block with {}
    gg=G - re-indent entire buffer
    ]p - paste and adjust indent to current line

Exiting

    :w - write (save) the file, but don't exit
    :w !sudo tee % - write out the current file using sudo
    :wq or :x or ZZ - write (save) and quit
    :q - quit (fails if there are unsaved changes)
    :q! or ZQ - quit and throw away unsaved changes
    :wqa - write (save) and quit on all tabs

Search and replace

    /pattern - search for pattern
    ?pattern - search backward for pattern
    \vpattern - 'very magic' pattern: non-alphanumeric characters are interpreted as special regex symbols (no escaping needed)
    n - repeat search in same direction
    N - repeat search in opposite direction
    :%s/old/new/g - replace all old with new throughout file
    :%s/old/new/gc - replace all old with new throughout file with confirmations
    :noh[lsearch] - remove highlighting of search matches
    Search in multiple files
    :vim[grep] /pattern/ {`{file}`} - search for pattern in multiple files
    e.g. :vim[grep] /foo/ **/*
    :cn[ext] - jump to the next match
    :cp[revious] - jump to the previous match
    :cope[n] - open a window containing the list of matches
    :ccl[ose] - close the quickfix window

Tabs

    :tabnew or :tabnew {page.words.file} - open a file in a new tab
    Ctrl + wT - move the current split window into its own tab
    gt or :tabn[ext] - move to the next tab
    gT or :tabp[revious] - move to the previous tab
    #gt - move to tab number #
    :tabm[ove] # - move current tab to the #th position (indexed from 0)
    :tabc[lose] - close the current tab and all its windows
    :tabo[nly] - close all tabs except for the current one
    :tabdo command - run the command on all tabs (e.g. :tabdo q - closes all opened tabs)

Working with multiple files

    :e[dit] file - edit a file in a new buffer
    :bn[ext] or :bn - go to the next buffer
    :bp[revious] or :bp - go to the previous buffer
    :bd[elete] - delete a buffer (close a file)
    :b# - go to a buffer by #
    :b file - go to a buffer by file
    :ls - list all open buffers
    :sp[lit] file - open a file in a new buffer and split window
    :vs[plit] file - open a file in a new buffer and vertically split window
    :vert[ical] ba[ll] - edit all buffers as vertical windows
    :tab ba[ll] - edit all buffers as tabs
    Ctrl + ws - split window
    Ctrl + wv - split window vertically
    Ctrl + ww - switch windows
    Ctrl + wq - quit a window
    Ctrl + wx - exchange current window with next one
    Ctrl + w= - make all windows equal height & width
    Ctrl + wh - move cursor to the left window (vertical split)
    Ctrl + wl - move cursor to the right window (vertical split)
    Ctrl + wj - move cursor to the window below (horizontal split)
    Ctrl + wk - move cursor to the window above (horizontal split)

Diff

    zf - manually define a fold up to motion
    zd - delete fold under the cursor
    za - toggle fold under the cursor
    zo - open fold under the cursor
    zc - close fold under the cursor
    zr - reduce (open) all folds by one level
    zm - fold more (close) all folds by one level
    zi - toggle folding functionality
    ]c - jump to start of next change
    [c - jump to start of previous change
    do or :diffg[et] - obtain (get) difference (from other buffer)
    dp or :diffpu[t] - put difference (to other buffer)
    :diffthis - make current window part of diff
    :dif[fupdate] - update differences
    :diffo[ff] - switch off diff mode for current window

>Tip The commands for folding (e.g. za) operate on one level. To operate on all levels, use uppercase letters (e.g. zA).

>Tip To view the differences of files, one can directly start Vim in diff mode by running vimdiff in a terminal. One can even set this as git difftool.

## ==⚡ encoding

Vim 有四个与编码有关的选项：

- fileencoding 假设文件的编码方式和 Vim 内部编码方式不同，Vim 在打开或保存文件时就会进行转换。
- fileencodings 设置一个编码方案列表，以供 Vim 自动确定编码。
- encoding  内部字符编码，建议仅仅在 .vimrc 中改变它的值。
- termencoding 屏幕显示的编码，如果设置它，Vim 就会将内部编码经过转换后再输出到屏幕。

假设没有特别的理由，请始终将 encoding 设置为 utf-8 以支持全球码。为了避免在非 UTF-8 的系统如 Windows 下，菜单和系统提示出现乱码，可同一时候做这几项设置：

    set encoding=utf-8           | 文件编码方案
    set langmenu=zh_CN.UTF-8     | 菜单内容语言方案
    language message zh_CN.UTF-8 | 界面语言类型

下面是推荐的 fileencodings 设置：

    set fileencodings=ucs-bom,utf-8,cp936,gb18030,big5,euc-jp,euc-kr,latin1

设置了编码方案，还需要合适的字体文件支持。Unicode 是全球通用的符号编码方案，它涉及的字符量极大，没有字体可以支持所有字符。对于编程使用的等宽字体，可以考虑使用 [Fira Code](https://github.com/tonsky/FiraCode) 字体。

Windows 系统中可以尝试通过修改注册表 `HKEY_CURRENT_USER\Console` 中的条目，找到相应的程序名对应的条目，并添加或者修改现有的名为“FaceName”的字符串值，输入类型 FiraMono Nerd Font 这样的字体名称。

Vim 在插件模式下可以通过 `<C,v>` 输入 Unicode 字符编码来输入相应的字符，比如 For 中间点(\cdot, ·) 对应的输入 `<C-v>u00b7` 或者 `<C-v>ub7` 再加回车或者 Esc 完成输入。

当中，ucs-bom 是一种很严格的编码，非该编码的文件没有可能被误判为 ucs-bom，因此放在第一位。

utf-8 也相当严格，除了非常短的文件外，现实生活中一般文件是不可能被误判的，因此放在第二位。

接下来是 cp936 和 gb18030 这两种相对宽松编码。假设放前面的话，会出现大量误判。cp936 的编码空间比 gb18030 小，所以把 cp936 放在 gb18030 前面。

至于 big5、euc-jp 和 euc-kr，它们的严格程度和 cp936 几乎相同，把它们放在后面，在编辑这些编码的文件的时候必定出现大量误判，但这是 Vim 内置编码探測机制没有办法解决。因为中国用户非常少有机会编辑这些编码的文件。因此我们还是决定把 cp936 和 gb18030 放在前面以保证这些编码的识别。

最后就是 latin1 这种极其宽松的编码，以至于我们不得不把它放在最后一位。只是可惜的是，当你碰到一个真的 latin1 编码的文件时，绝大部分情况下，它没有机会 fall-back 到 latin1，省略它也不会有问题。只是，正如前面所说的，中国用户没有太多机会接触这种文件。

此时。假设你知道这个文件的正确编码的话，能够在打开文件的时候使用 ++enc=encoding 的方式来打开文件。如：

    :e ++enc=utf-8 myfile.txt

Vim 启动时会依据 .vimrc 中设置的 encoding 的值来设置 buffer、菜单文本、消息文的字符编码方式。

读取须要编辑的文件，依据 fileencodings 中列出的字符编码方式逐一探測该文件编码方式。

其实，Vim 的探測精确度并不高，尤其是在 encoding 没有设置为 utf-8 时。

因此强烈建议将 encoding 设置为 utf-8，尽管假设你想 Vim 显示中文菜单和提示消息的话这样会带来还有一个小问题。

读取文件后，再对照 fileencoding 和 encoding 的值，若不同则调用 iconv 将文件内容转换为 encoding 编码方式，而且把转换后的内容放到为此文件开辟的 buffer。

编辑完毕后保存文件时，再次对照 fileencoding 和 encoding 的值。若不同，再次调用 iconv 将即将 buffer 中的文本转换为 fileencoding 所描写叙述的字符编码方式，并保存到指定的文件里。

3.解决的方法演示样例

（1）方法一： /home/username/.vimrc 或者 /root/.vimrc 下添加两句话：

    let &termencoding=&encoding
    set fileencodings=utf-8,gbk,ucs-bom,cp936

（2）方法而二：打开文件后，在 vi 编辑器中设定：

    :set encoding=utf-8 termencoding=gbk fileencoding=utf-8

（3）方法三：新建UTF-8文件，在vi编辑器设定：

    :set fenc=utf-8
    :set enc=GB2312

这样在编辑器里输入中文，保存的文件是 UTF-8。

（4）方法四：一个推荐的 `~/.vimrc` 文件配置：

    set encoding=utf-8
    set fileencodings=ucs-bom,utf-8,cp936,gb18030,latin1
    set termencoding=gb18030
    set expandtab
    set ts=4
    set shiftwidth=4
    set nu
    syntax on

    if has('mouse')
    set mouse-=a
    endif


## ==⚡ Switching from mode to mode
- [Introduction to Vim - 6. Switching from mode to mode](doc/intro.txt)


Switching from mode to mode

    ==============================================================================
    6. Switching from mode to mode              *mode-switching*

    If for any reason you do not know which mode you are in, you can always get
    back to Normal mode by typing <Esc> twice.  This doesn't work for Ex mode
    though, use ":visual".
    You will know you are back in Normal mode when you see the screen flash or
    hear the bell after you type <Esc>.  However, when pressing <Esc> after using
    CTRL-O in Insert mode you get a beep but you are still in Insert mode, type
    <Esc> again.

                                                                      *i_esc*
                 |TO mode|        |        |        |        |        |    ~
                 |Normal | Visual | Select |Insert  | Replace|Cmd-line| Ex ~
    FROM mode    |       |        |        |        |        |        |    ~
    Normal       |       | v V ^V |   *4   | *1     |  R gR  |: / ? ! | Q
    Visual       | *2    |        |   ^G   | c C    |   --   |  :     | --
    Select       | *5    | ^O ^G  |        | *6     |   --   |  --    | --
    Insert       | <Esc> |   --   |   --   |        |<Insert>|  --    | --
    Replace      | <Esc> |   --   |   --   |<Insert>|        |  --    | --
    Command-line | *3    |   --   |   --   | :start |   --   |        | --
    Ex           |  :vi  |   --   |   --   | --     |   --   |  --    |  

    -- not possible

    *1 Go from Normal mode to Insert mode by giving the command "i", "I", "a",
       "A", "o", "O", "c", "C", "s" or S".
    *2 Go from Visual mode to Normal mode by giving a non-movement command, which
       causes the command to be executed, or by hitting <Esc> "v", "V" or "CTRL-V"
       (see |v_v|), which just stops Visual mode without side effects.
    *3 Go from Command-line mode to Normal mode by:
       - Hitting <CR> or <NL>, which causes the entered command to be executed.
       - Deleting the complete line (e.g., with CTRL-U) and giving a final <BS>.
       - Hitting CTRL-C or <Esc>, which quits the command-line without executing
         the command.
       In the last case <Esc> may be the character defined with the 'wildchar'
       option, in which case it will start command-line completion.  You can
       ignore that and type <Esc> again.
    *4 Go from Normal to Select mode by:
       - use the mouse to select text while 'selectmode' contains "mouse"
       - use a non-printable command to move the cursor while keeping the Shift
         key pressed, and the 'selectmode' option contains "key"
       - use "v", "V" or "CTRL-V" while 'selectmode' contains "cmd"
       - use "gh", "gH" or "g CTRL-H"  |g_CTRL-H|
    *5 Go from Select mode to Normal mode by using a non-printable command to move
       the cursor, without keeping the Shift key pressed.
    *6 Go from Select mode to Insert mode by typing a printable character.  The
       selection is deleted and the character is inserted.


# 🚩 Vim Scripting 
- [Learn Vimscript the Hard Way](https://learnvimscriptthehardway.stevelosh.com/)
- [Andrew Scala - Five Minute Vimscript](http://andrewscala.com/vimscript/)
- [Learn Vimscript in Y minutes](https://learnxinyminutes.com/docs/vimscript/)
- [Vim script language](http://vimdoc.sourceforge.net/htmldoc/usr_41.html)
- [Writing a Vim Plugin](https://vimways.org/2019/writing-vim-plugin/)
- [Expression evaluation](doc/eval.txt)
- [Write a Vim script](doc/usr_41.txt)
- [Sign Support Features](doc/sign.txt)
- [Command-line mode](doc/cmdline.txt)
- [Introduction to Vim - 6. Switching from mode to mode](doc/intro.txt)
- [Key mapping, abbreviations and user-defined commands](doc/map.txt)

Key mapping 和用户命令定义是最基本的 Vim 功能扩展方式：

    1. Key mapping                  |key-mapping|
       1.1 MAP COMMANDS             |:map-commands|
       1.2 Special arguments        |:map-arguments|
       1.3 Mapping and modes        |:map-modes|
       1.4 Listing mappings         |map-listing|
       1.5 Mapping special keys     |:map-special-keys|
       1.6 Special characters       |:map-special-chars|
       1.7 What keys to map         |map-which-keys|
       1.8 Examples                 |map-examples|
       1.9 Using mappings           |map-typing|
       1.10 Mapping alt-keys        |:map-alt-keys|
       1.11 Mapping in modifyOtherKeys mode |modifyOtherKeys|
       1.12 Mapping an operator     |:map-operator|
    2. Abbreviations                |abbreviations|
    3. Local mappings and functions |script-local|
    4. User-defined commands        |user-commands|
        Command attributes          |command-attributes|
        Argument handling           |:command-nargs|
        Completion behavior         |:command-completion|
        Custom completion           |:command-completion-custom|
        Range handling              |:command-range|
        Special cases               |command-special-cases|
        Replacement text            |command-replacement|

Expression evaluation 文档，eval.txt 就是 Vim 脚本语言参考手册：

    Expression evaluation           *expression* *expr* *E15* *eval*

    1.  Variables               |variables|
        1.1 Variable types      |datatypes|
            |Numbers|
            |Strings|
        1.2 Function references |Funcref|
        1.3 Lists               |Lists|
        1.4 Dictionaries        |Dictionaries|
        1.5 Blobs               |Blobs|
        1.6 More about variables|more-variables|
    2.  Expression syntax       |expression-syntax|
    3.  Internal variable       |internal-variables|
    4.  Builtin Functions       |functions|
    5.  Defining functions      |user-functions|
    6.  Curly braces names      |curly-braces-names|
    7.  Commands                |expression-commands|
    8.  Exception handling      |exception-handling|
    9.  Examples                |eval-examples|
    10. Vim script version      |vimscript-version|
    11. No +eval feature        |no-eval-feature|
    12. The sandbox             |eval-sandbox|
    13. Textlock                |textlock|


Vim 提供的 :term 内置终端，和专家模式 Ex mode 是专门为脚本编程准备的，使用 Q 或 gQ 进入专家模式，使用 vi 或 visual 命令退出专家模式。

Ex mode 就像是自动帮你输入了 : 符号，让你不专心编写脚本，有以下功能差异：

    - You don't have to keep pressing ":".
    - The screen doesn't get updated after each command.
    - There is no normal command-line editing.
    - Mappings and abbreviations are not used.

Vim 脚本只有 " 注释，可以写在行首，或脚本代码后面，不存在块注释。

直接运行 vim 脚本文件或脚本内容：

```sh
# -c <command>         Execute <command> after loading the first file
# -S <session>         Source file <session> after loading the first file
vim -S hi.vim
vim -S ~/.vim/Session.vim
vim -c "echo 'hi.vim'"
```

Vim 提供 :mksession 命令生成会话脚本，即将当前的配置状态、文件打开状态、插件配置、键盘映射等等信息都写入一个 Session.vim 脚本中，再次加载它就可以回到保存时的状态。

直接在命令输入栏编写脚本，或者通过 :source 命令装入脚本。

演示一个 while 或 for 循环结构与 echo 命令打印信息：

```sh
:let i = 1

:while i < 5
:  echo "count is" i
:  let i += 1
:endwhile

:for i in range(1, 4)
:  echo "count is" i
:endfor
```

命令行中执行 Vim 命令和 Shell 命令是有区别的：

```sh
:!echo some thing print to shell screen
:echo "Some thing prnt to Vim UI"
:echo 0100  | "result is 64
```

其中 `| "` 常用来在命令行做注解，竖线符号是 :bar 命令分隔符号，参数中要使用它就需要转义表达 `\|`。它不是 Shell 的管道 pipe，其作用和 PowerShell 的分号一样。

Because of Vi compatibility the following strange commands are supported:

    :|          print current line (like ":p")
    :3|         print line 3 (like ":3p")
    :3          goto line 3


Vim Script 通过 & 符号来访问属性，也就是 :set 命令设置 Vim 选项属性。而通过 :let 赋值的变量，直接使用，或前缀作用域使用。环境变量则通过 $ 来访问，和 bash 脚本一样。

Vim Script 作为显示指定作用域的脚本，属性同变量一样也有作用域，可以通过 &l: 这种语法方式来改变作用域，这里 l 是指定为本地作用域 local scope，相当于我们使用了 :setlocal 命令。

Other basic items in an expression are:

    $NAME       environment variable
    &name       option
    @r          register

Examples: >

    :echo "The value of 'tabstop' is" &ts
    :echo "Your home directory is" $HOME
    :if @a > 5

在脚本中执行命令，参考 Learn Vimscript in Y minutes：

```sh
" Executing (run-time macros of sorts)
" ####################################
let line = 3                | " Line number determined at runtime
execute line .. 'delete'    | " Delete a line

execute 'help write-plugin' | " Help on writing plugin, :help write-plugin

" Executing normal-mode commands
" ##############################
"
" Use `:normal` to play back a sequence of normal mode commands from the
" command-line. Add an exclamation mark to ignore user mappings.

normal! ggddGp             | " Transplant first line to end of buffer

" Window commands can be used with :normal, or with :wincmd if :normal would
" not work
wincmd L                   | " Move current window all the way to the right
wincmd T                   | " Move the current window to a new tab page.
```

## ==⚡ Vim with Lua, Python ...
- [The Lua Interface to Vim](doc/if_lua.txt)
- [The Python Interface to Vim](doc/if_pyth.txt)
- https://github.com/nanotee/nvim-lua-guide
- https://spacevim.org/use-vim-as-a-lua-ide/
- https://realpython.com/vim-and-python-a-match-made-in-heaven/
- [Learn X in Y minutes - Lua](https://learnxinyminutes.com/docs/lua/)
- [From init.vim to init.lua - a crash course](https://www.notonlycode.org/neovim-lua-config/)
- [QuickJS Javascript Engine - Fabrice Bellard](https://bellard.org/quickjs)
- [The Rise of Worse is Better - Richard P. Gabriel](https://dreamsongs.com/RiseOfWorseIsBetter.html)

虽然，Vim 有自家的脚本解释器实现，但是 Lua/Python 等脚本接口也得到了支持，编译 Vim 时需要使用 +lua feature 等编译选项。Vim 会向这些脚本接口提供一个 vim 模块，外部脚本引擎通过它来与 Vim 宿主通信。除了一些通用的功能对象，还会根据不同的脚本接口提供专用的对象，

在 NeoVim 环境上，可以执行 :checkhealth 检查扩展状态，还可以给 Python 接口安装相应 Client library 模块，判断接口的有效性请执行检测命令 :has('python') 或 :has('python3')：

    vim --version | grep python

    pip install neovim

NeoVim 默认提供多种脚本接口集成，很多现代的功能，如 LSP - Language Service Protocol 都可以在 Vim 上实现，参考 LunarVim 配置实现。

Note: the version of Lua that Neovim embeds is LuaJIT 2.1.0, which maintains compatibility with Lua 5.1.

Vim Script 本身就是围绕编辑文本设计出来的专用脚本，本质就是领域专用语言 DSL - Domain Specific Language，处理这类事情自是行云流水一般的高效，两种脚本设置快捷键的语法差异对比如下：

```sh
# Vim version keymapping
nnoremap <silent><c-h> <c-w>h

# lua version keymapping
vim.api.nvim_set_keymap('n', '<C-h>', '<C-w>h', { noremap = true, silent = true })
```

再来个 Vim 选项设置的例子：

```sh
# Vim version option setting
set tabstop=2
set expandtab
set background=light

# lua version option setting
vim.opt.tabstop=2
vim.opt.expandtab=true
vim.opt.background='light'
```

不是说 Lua 不是一门好语言，而是说在特定的领域内，DSL 语言会比通用语言更加直接高效。

Lua 它是按照嵌入式脚本语言来设计的，适合写一些小东西，在游戏脚本嵌入领域，Lua 显然是胜于 Vim Script。比如游戏的 UI 界面，简单的 redis 数据处理逻辑。

但是 Lua 写大的东西并不适合，碎片化严重得很，在 Lua 里，定义一个类有 5+ 种方式，定义一个模块也有 5 种方法。所以你会发现，Lua 代码写长了，就很容易散。

大部分时候只能靠编码规范来约束，不同的团队都有各自的方法来定义一个 class 或者 module 之类的东西，那么不同团队写出来的 Lua 代码无法共享，无法共享意味着知识很难累积。

计算机技术有很多看似不错的解决方案，往往不能很好解决实际问题，而有些看似粗糙的技术，却往往能解决实际问题，参考著名文章 Worse Is Better 。

综上，在小的事情上，Lua 的描述力赶不上 Vim Script，在复杂的大的事情上，Lua 又不适合写复杂的程序。还不如原有 vimscript 写配置，复杂点的插件可以用 python 开发，vim 早就支持 python 写插件了。

Lua 唯一优势就是比 vimscript 快，不过现在 Vim 9 的脚本速度已经超过 Lua，注意不是 LuaJIT。且是 Vim 脚本是强类型语言，更适合写复杂程序。

Vim 嵌入的脚本引擎选择还是挺多的，除了已经集成，还有未集成的 JavaScript 脚本引擎也是不错的选择，不用考虑重型的 V8 也还有 Fabrice Bellard 大牛的 QuickJS 这类符合 ES2020 标准的轻量级引擎。

QuickJS is a small and embeddable Javascript engine. It supports the ES2020 specification including modules, asynchronous generators, proxies and BigInt.
It optionally supports mathematical extensions such as big decimal floating point numbers (BigDecimal), big binary floating point numbers (BigFloat) and operator overloading.

Main Features:

  1. ⇨ Small and easily embeddable: just a few C files, no external dependency, 210 KiB of x86 code for a simple hello world program.
  2. ⇨ Fast interpreter with very low startup time: runs the 75000 tests of the ECMAScript Test Suite in about 100 seconds on a single core of a desktop PC. The complete life cycle of a runtime instance completes in less than 300 microseconds.
  3. ⇨ Almost complete ES2020 support including modules, asynchronous generators and full Annex B support (legacy web compatibility).
  4. ⇨ Passes nearly 100% of the ECMAScript Test Suite tests when selecting the ES2020 features. A summary is available at Test262 Report.
  5. ⇨ Can compile Javascript sources to executables with no external dependency.
  6. ⇨ Garbage collection using reference counting (to reduce memory usage and have deterministic behavior) with cycle removal.
  7. ⇨ Mathematical extensions: BigDecimal, BigFloat, operator overloading, bigint mode, math mode.
  8. ⇨ Command line interpreter with contextual colorization implemented in Javascript.
  9. ⇨ Small built-in standard library with C library wrappers.

NeoVim 选择了集成 Node.js 来提供 JavaScript 脚本扩展能力，它使用 V8 脚本引擎。

NeoVim 使用 Python 脚本扩展可以支持虚拟环境，并且可以硬编码指定 Python 可执行程序为每个项目提供专用的环境：

```sh
# Example using pyenv:
pyenv install 3.4.4
pyenv virtualenv 3.4.4 py3nvim
pyenv activate py3nvim
python3 -m pip install pynvim
pyenv which python  # Note the path

# If you run into problems, uninstall _both_ then install "pynvim" again:
python -m pip uninstall neovim pynvim
python -m pip install --user --upgrade pynvim

# The last command reports the interpreter path, add it to your init.vim:
let g:python3_host_prog = '/path/to/py3nvim/bin/python'
```

如果硬编码指定 Python 路径，可以不安装 Python 客户端模块。旧的客户端模块是 "neovim"，更新为 "pynvim"。


PYTHON PROVIDER CONFIGURATION
                                                g:python3_host_prog
Command to start Python 3 (executable, not directory). Setting this makes
startup faster. Useful for working with virtualenvs. Must be set before any
check for has("python3").
    let g:python3_host_prog = '/path/to/python3'

                                                g:loaded_python3_provider
To disable Python 3 support:
    let g:loaded_python3_provider = 0

virtualenvs often, you should assign one
virtualenv for Neovim and hard-code the interpreter path via
g:python3_host_prog so that the "pynvim" package is not required
for each virtualenv.

Virtualenv Support
One issue with the goto definition above is that VIM, by default, doesn’t know anything about virtualenv, so you have to make VIM and YouCompleteMe aware of your virtualenv by adding the following lines of code to .vimrc:

```sh
"" # python with virtualenv support
"" # apt-get update
"" # apt-get install python3-venv
"" # python3 -m venv /path/to/new/venv
py << EOF
import os
import sys
if 'VIRTUAL_ENV' in os.environ:
  project_base_dir = os.environ['VIRTUAL_ENV']
  activate_this = os.path.join(project_base_dir, 'bin/activate_this.py')
  execfile(activate_this, dict(__file__=activate_this))
EOF
```

This determines if you are running inside a virtualenv, switches to that specific virtualenv, and then sets up your system path so that YouCompleteMe will find the appropriate site packages.


关于如何集成 Python 运行环境，请参考 Python 官方文档 Extending and Embedding the Python Interpreter - Embedding Python in Another Application

以下是 Vim 内嵌 Python 的接口文档整理参考：

Scripting Interfaces

- [Providers](doc/provider.txt)
- [using Cscope with Vim](doc/if_cscop.txt) - (vim82/src/if_cscop.c)
- [Lua interface](doc/if_lua.txt)           - (vim82/src/if_lua.c)
- [MzScheme interface](doc/if_mzsch.txt)    - (vim82/src/if_mzsch.c)
- [Perl interface](doc/if_perl.txt)         - (vim82/src/if_perl.c)
- [Python interface](doc/if_pyth.txt)       - (vim82/src/if_pyth.c)
- [Tcl interface](doc/if_tcl.txt)           - (vim82/src/if_tcl.c)
- [Ruby interface](doc/if_ruby.txt)         - (vim82/src/if_ruby.c)
- [Interface with a debugger](doc/debugger.txt) - (vim82/src/debugger.c)
- [OLE automation interface for Win32](doc/if_ole.txt) - (vim82/src/if_ole.c)
- [NetBeans External Editor interface](doc/netbeans.txt) - (vim82/src/netbeans.c)
- [debugging signs](doc/sign.txt)           - (vim82/src/sign.c)

|       Lua        |        Python        |         Ruby        |
|------------------|----------------------|---------------------|
| List userdata    | Buffer objects       | Vim::Buffer objects |
| Dict userdata    | Range objects        | Vim::Window objects |
| Blob userdata    | Window objects       | Global variables    |
| Funcref userdata | Tab page objects     | rubyeval() Vim      |
| Buffer userdata  | vim.bindeval objects |                     |
| Window userdata  | pyeval(), py3eval()  |                     |
| luaeval()        |                      |                     |

### ===🗝 Python Interface

The Python Interface to Vim             *python* *Python*

1. Commands                     |python-commands|
   - Execute Python statement       |:python|
   - Execute Python script          |:python|
   - Execute Python function        |:pydo|
   - Execute Python script file     |:pyfile|
2. The vim module               |python-vim|
    - vim.command(str)              |python-command|
    - vim.eval(str)                 |python-eval|
    - vim.bindeval(str)             |python-bindeval|
    - vim.strwidth(str)             |python-strwidth|
    - vim.foreach_rtp(callable)     |python-foreach_rtp|
    - vim.chdir(*args, **kwargs)    |python-chdir|
    - vim.fchdir(*args, **kwargs)   |python-fchdir|
    - Error object vim.error        |python-error|
    - vim.buffers                   |python-buffers|
    - vim.windows                   |python-windows|
    - vim.tabpages                  |python-tabpages|
    - vim.current                   |python-current|
    - vim.vars                      |python-vars|
    - vim.vvars                     |python-vvars|
    - vim.options                   |python-options|
    - Input/Output from Python      |python-output| |python-input|
    - Python 'runtimepath' handling |python-special-path|
    - vim.VIM_SPECIAL_PATH          |python-VIM_SPECIAL_PATH|
    - vim.find_module(...)          |python-find_module|
    - vim.path_hook(path)           |python-path_hook|
    - vim._get_paths                |python-_get_paths|
3. Buffer objects               |python-buffer|
    - The buffer object attributes are: |buffer-attributes|
    ⚑ b.vars      Dictionary-like object
    ⚑ b.options   Mapping object
    ⚑ b.name      String, RW. Contains buffer name (full path).
    ⚑ b.number    Buffer number. Can be used as |python-buffers| key.
    ⚑ b.valid     True or False.
    - The buffer object methods are:    |buffer-methods|
    ⚐ b.append(str)   Append a line to the buffer
    ⚐ b.append(str, nr)  Idem, below line "nr"
    ⚐ b.append(list)  Append a list of lines to the buffer
    ⚐ b.append(list, nr)  Idem, below line "nr"
    ⚐ b.mark(name)    Return a tuple (row,col) the marked position
    ⚐ b.range(s,e)    Return a range object
4. Range objects                |python-range|
    - The range object attributes are:    |range-attributes|
    ⚑ r.start     Index of first line into the buffer
    ⚑ r.end       Index of last line into the buffer
    - The range object methods are:       |range-methods|
    ⚐ r.append(str)   Append a line to the range
    ⚐ r.append(str, nr)  Idem, after line "nr"
    ⚐ r.append(list)  Append a list of lines to the range
    ⚐ r.append(list, nr)  Idem, after line "nr"
5. Window objects               |python-window|
    - Window attributes are:
    ⚑ buffer (read-only)  The buffer displayed in this window
    ⚑ cursor (read-write) The current cursor position, tuple (row,col).
    ⚑ height (read-write) The window height, in rows
    ⚑ width (read-write)  The window width, in columns
    ⚑ vars (read-only)    The window |w:| variables.
    ⚑ options (read-only) The window-local options.
    ⚑ number (read-only)  Window number.  The first window has number 1.
    ⚑ row, col (read-only) On-screen window position in display cells.
    ⚑ tabpage (read-only) Window tab page.
    ⚑ valid (read-write)  True or False.
6. Tab page objects             |python-tabpage|
    - Tab page attributes are:
    ⚐ number      The tab page number like the one returned by |tabpagenr()|.
    ⚐ windows     Like |python-windows|, but for current tab page.
    ⚐ vars        The tab page |t:| variables.
    ⚐ window      Current tabpage window.
    ⚐ valid       True or False. page is invalid when it is closed.
7. vim.bindeval objects         |python-bindeval-objects|
    - vim.Dictionary object          |python-Dictionary|
    - vim.List object                |python-List|
    - vim.Function object            |python-Function|
8. pyeval(), py3eval() Vim functions |python-pyeval|
9. Dynamic loading              |python-dynamic|
10. Python 3                    |python3|
11. Python X                    |python_x|
12. Building with Python support|python-building|


### ===🗝 Python Commands

==============================================================================
1. Commands                     *python-commands*

                    *:python* *:py* *E263* *E264* *E887*
:[range]py[thon] {stmt}
            Execute Python statement {stmt}.  A simple check if
            the `:python` command is working: >
                :python print "Hello"

:[range]py[thon] << [endmarker]
{script}
{endmarker}
            Execute Python script {script}.
            Note: This command doesn't work when the Python
            feature wasn't compiled in.  To avoid errors, see
            |script-here|.

The {endmarker} below the {script} must NOT be preceded by any white space.

If [endmarker] is omitted from after the "<<", a dot '.' must be used after
{script}, like for the |:append| and |:insert| commands.

This form of the |:python| command is mainly useful for including python code
in Vim scripts.

Example: >

    function! IcecreamInitialize()
    python << EOF
    class StrawberryIcecream:
        def __call__(self):
            print 'EAT ME'
    EOF
    endfunction

To see what version of Python you have: >

    :python print(sys.version)

There is no need to import sys, it's done by default.

Note: Python is very sensitive to the indenting.  Make sure the "class" line
and "EOF" do not have any indent.


                            *:pydo*
:[range]pydo {body} Execute Python function "def _vim_pydo(line, linenr):
            {body}" for each line in the [range], with the
            function arguments being set to the text of each line
            in turn, without a trailing <EOL>, and the current
            line number. The function should return a string or
            None. If a string is returned, it becomes the text of
            the line in the current turn. The default for [range]
            is the whole file: "1,$".

Examples:
>
    :pydo return "%s\t%d" % (line[::-1], len(line))
    :pydo if line: return "%4d: %s" % (linenr, line)
<
One can use `:pydo` in possible conjunction with `:py` to filter a range using
python. For example: >

    :py3 << EOF
    needle = vim.eval('@a')
    replacement = vim.eval('@b')

    def py_vim_string_replace(str):
        return str.replace(needle, replacement)
    EOF
    :'<,'>py3do return py_vim_string_replace(line)
<
                            *:pyfile* *:pyf*
:[range]pyf[ile] {file}
            Execute the Python script in {file}.  The whole
            argument is used as a single file name.

Both of these commands do essentially the same thing - they execute a piece of
Python code, with the "current range" |python-range| set to the given line
range.

In the case of :python, the code to execute is in the command-line.
In the case of :pyfile, the code to execute is the contents of the given file.

Python commands cannot be used in the |sandbox|.

To pass arguments you need to set sys.argv[] explicitly.  Example: >

    :python sys.argv = ["foo", "bar"]
    :pyfile myscript.py

Here are some examples                  *python-examples*  >

    :python from vim import *
    :python from string import upper
    :python current.line = upper(current.line)
    :python print "Hello"
    :python str = current.buffer[42]

(Note that changes - like the imports - persist from one command to the next,
just like in the Python interpreter.)


### ===🗝 vim module

==============================================================================
2. The vim module                   *python-vim*

Python code gets all of its access to vim (with one exception - see
|python-output| below) via the "vim" module.  The vim module implements two
methods, three constants, and one error object.  You need to import the vim
module before using it: >

Overview >
```sh
:python import vim
:py print "Hello"           # displays a message
:py      vim.command(cmd)   # execute an Ex command
:py w  = vim.windows[n]     # gets window "n"
:py cw = vim.current.window # gets the current window
:py b  = vim.buffers[n]     # gets buffer "n"
:py cb = vim.current.buffer # gets the current buffer
:py w.height = lines        # sets the window height
:py w.cursor = (row, col)   # sets the window cursor position
:py pos   = w.cursor    # gets a tuple (row, col)
:py name  = b.name      # gets the buffer file name
:py line  = b[n]        # gets a line from the buffer
:py lines = b[n:m]      # gets a list of lines
:py num   = len(b)      # gets the number of lines
:py b[n]  = str         # sets a line in the buffer
:py b[n:m] = [str1, str2, str3] # sets a number of lines at once
:py del b[n]            # deletes a line
:py del b[n:m]          # deletes a number of lines
```

Methods of the "vim" module

vim.command(str)                    *python-command*
    Executes the vim (ex-mode) command str.  Returns None.
    Examples: >
        :py vim.command("set tw=72")
        :py vim.command("%s/aaa/bbb/g")
<   The following definition executes Normal mode commands: >
        def normal(str):
            vim.command("normal "+str)
        # Note the use of single quotes to delimit a string containing
        # double quotes
        normal('"a2dd"aP')
<                               *E659*
    The ":python" command cannot be used recursively with Python 2.2 and
    older.  This only works with Python 2.3 and later: >
        :py vim.command("python print 'Hello again Python'")

vim.eval(str)                       *python-eval*
    Evaluates the expression str using the vim internal expression
    evaluator (see |expression|).  Returns the expression result as:
    - a string if the Vim expression evaluates to a string or number
    - a list if the Vim expression evaluates to a Vim list
    - a dictionary if the Vim expression evaluates to a Vim dictionary
    Dictionaries and lists are recursively expanded.
    Examples: >
        :" value of the 'textwidth' option
        :py text_width = vim.eval("&tw")
        :
        :" contents of the 'a' register
        :py a_reg = vim.eval("@a") 
        :
        :" Result is a string! Use string.atoi() to convert to a number.
        :py str = vim.eval("12+12")
        :
        :py tagList = vim.eval('taglist("eval_expr")')
<   The latter will return a python list of python dicts, for instance:
    [{'cmd': '/^eval_expr(arg, nextcmd)$/', 'static': 0, 'name': ~
    'eval_expr', 'kind': 'f', 'filename': './src/eval.c'}] ~

vim.bindeval(str)                   *python-bindeval*
    Like |python-eval|, but returns special objects described in 
    |python-bindeval-objects|. These python objects let you modify (|List| 
    or |Dictionary|) or call (|Funcref|) vim objects.

vim.strwidth(str)                   *python-strwidth*
    Like |strwidth()|: returns number of display cells str occupies, tab 
    is counted as one cell.

vim.foreach_rtp(callable)               *python-foreach_rtp*
    Call the given callable for each path in 'runtimepath' until either 
    callable returns something but None, the exception is raised or there 
    are no longer paths. If stopped in case callable returned non-None, 
    vim.foreach_rtp function returns the value returned by callable.

vim.chdir(*args, **kwargs)              *python-chdir*
vim.fchdir(*args, **kwargs)             *python-fchdir*
    Run os.chdir or os.fchdir, then all appropriate vim stuff.
    Note: you should not use these functions directly, use os.chdir and 
          os.fchdir instead. Behavior of vim.fchdir is undefined in case 
          os.fchdir does not exist.

Error object of the "vim" module

vim.error                       *python-error*
    Upon encountering a Vim error, Python raises an exception of type
    vim.error.
    Example: >
        try:
            vim.command("put a")
        except vim.error:
            # nothing in register a

Constants of the "vim" module

    Note that these are not actually constants - you could reassign them.
    But this is silly, as you would then lose access to the vim objects
    to which the variables referred.


vim.buffers                     *python-buffers*
    A mapping object providing access to the list of vim buffers.  The
    object supports the following operations: >

        :py b = vim.buffers[i]  # Indexing (read-only)
        :py b in vim.buffers    # Membership test
        :py n = len(vim.buffers)    # Number of elements
        :py for b in vim.buffers:   # Iterating over buffer list
<
vim.windows                     *python-windows*
    A sequence object providing access to the list of vim windows.  The
    object supports the following operations: >

        :py w = vim.windows[i]  # Indexing (read-only)
        :py w in vim.windows    # Membership test
        :py n = len(vim.windows)    # Number of elements
        :py for w in vim.windows:   # Sequential access
<   Note: vim.windows object always accesses current tab page. 
    |python-tabpage|.windows objects are bound to parent |python-tabpage| 
    object and always use windows from that tab page (or throw vim.error 
    in case tab page was deleted). You can keep a reference to both 
    without keeping a reference to vim module object or |python-tabpage|, 
    they will not lose their properties in this case.

vim.tabpages                        *python-tabpages*
    A sequence object providing access to the list of vim tab pages. The 
    object supports the following operations: >

        :py t = vim.tabpages[i] # Indexing (read-only)
        :py t in vim.tabpages   # Membership test
        :py n = len(vim.tabpages)   # Number of elements
        :py for t in vim.tabpages:  # Sequential access
<
vim.current                     *python-current*
    An object providing access (via specific attributes) to various
    "current" objects available in vim:
        vim.current.line    The current line (RW)       String
        vim.current.buffer  The current buffer (RW)     Buffer
        vim.current.window  The current window (RW)     Window
        vim.current.tabpage The current tab page (RW)   TabPage
        vim.current.range   The current line range (RO) Range

    The last case deserves a little explanation.  When the :python or
    :pyfile command specifies a range, this range of lines becomes the
    "current range".  A range is a bit like a buffer, but with all access
    restricted to a subset of lines.  See |python-range| for more details.

    Note: When assigning to vim.current.{buffer,window,tabpage} it expects 
    valid |python-buffer|, |python-window| or |python-tabpage| objects 
    respectively. Assigning triggers normal (with |autocommand|s) 
    switching to given buffer, window or tab page. It is the only way to 
    switch UI objects in python: you can't assign to 
    |python-tabpage|.window attribute. To switch without triggering 
    autocommands use >

        py << EOF
        saved_eventignore = vim.options['eventignore']
        vim.options['eventignore'] = 'all'
        try:
            vim.current.buffer = vim.buffers[2] # Switch to buffer 2
        finally:
            vim.options['eventignore'] = saved_eventignore
        EOF
<
vim.vars                        *python-vars*
vim.vvars                       *python-vvars*
    Dictionary-like objects holding dictionaries with global (|g:|) and 
    vim (|v:|) variables respectively. Identical to `vim.bindeval("g:")`, 
    but faster.

vim.options                     *python-options*
    Object partly supporting mapping protocol (supports setting and 
    getting items) providing a read-write access to global options.
    Note: unlike |:set| this provides access only to global options. You
    cannot use this object to obtain or set local options' values or
    access local-only options in any fashion. Raises KeyError if no global
    option with such name exists (i.e. does not raise KeyError for
    |global-local| options and global only options, but does for window-
    and buffer-local ones).  Use |python-buffer| objects to access to
    buffer-local options and |python-window| objects to access to
    window-local options.

    Type of this object is available via "Options" attribute of vim 
    module.

Output from Python                  *python-output*
    Vim displays all Python code output in the Vim message area.  Normal
    output appears as information messages, and error output appears as
    error messages.

    In implementation terms, this means that all output to sys.stdout
    (including the output from print statements) appears as information
    messages, and all output to sys.stderr (including error tracebacks)
    appears as error messages.

                            *python-input*
    Input (via sys.stdin, including input() and raw_input()) is not
    supported, and may cause the program to crash.  This should probably be
    fixed.

            *python2-directory* *python3-directory* *pythonx-directory*
Python 'runtimepath' handling               *python-special-path*

In python vim.VIM_SPECIAL_PATH special directory is used as a replacement for 
the list of paths found in 'runtimepath': with this directory in sys.path and 
vim.path_hooks in sys.path_hooks python will try to load module from 
{rtp}/python2 (or python3) and {rtp}/pythonx (for both python versions) for 
each {rtp} found in 'runtimepath'.

Implementation is similar to the following, but written in C: >

```py
from imp import find_module, load_module
import vim
import sys

class VimModuleLoader(object):
    def __init__(self, module):
        self.module = module

    def load_module(self, fullname, path=None):
        return self.module

def _find_module(fullname, oldtail, path):
    idx = oldtail.find('.')
    if idx > 0:
        name = oldtail[:idx]
        tail = oldtail[idx+1:]
        fmr = find_module(name, path)
        module = load_module(fullname[:-len(oldtail)] + name, *fmr)
        return _find_module(fullname, tail, module.__path__)
    else:
        fmr = find_module(fullname, path)
        return load_module(fullname, *fmr)

# It uses vim module itself in place of VimPathFinder class: it does not 
# matter for python which object has find_module function attached to as 
# an attribute.
class VimPathFinder(object):
    @classmethod
    def find_module(cls, fullname, path=None):
        try:
            return VimModuleLoader(_find_module(fullname, fullname, path or vim._get_paths()))
        except ImportError:
            return None

    @classmethod
    def load_module(cls, fullname, path=None):
        return _find_module(fullname, fullname, path or vim._get_paths())

def hook(path):
    if path == vim.VIM_SPECIAL_PATH:
        return VimPathFinder
    else:
        raise ImportError

sys.path_hooks.append(hook)
```

vim.VIM_SPECIAL_PATH                    *python-VIM_SPECIAL_PATH*
    String constant used in conjunction with vim path hook. If path hook 
    installed by vim is requested to handle anything but path equal to 
    vim.VIM_SPECIAL_PATH constant it raises ImportError. In the only other 
    case it uses special loader.

    Note: you must not use value of this constant directly, always use 
          vim.VIM_SPECIAL_PATH object.

vim.find_module(...)                    *python-find_module*
vim.path_hook(path)                 *python-path_hook*
    Methods or objects used to implement path loading as described above. 
    You should not be using any of these directly except for vim.path_hook 
    in case you need to do something with sys.meta_path. It is not 
    guaranteed that any of the objects will exist in the future vim 
    versions.

vim._get_paths                      *python-_get_paths*
    Methods returning a list of paths which will be searched for by path 
    hook. You should not rely on this method being present in future 
    versions, but can use it for debugging.

    It returns a list of {rtp}/python2 (or {rtp}/python3) and 
    {rtp}/pythonx directories for each {rtp} in 'runtimepath'.

### ===🗝 Buffer objects

==============================================================================
3. Buffer objects                   *python-buffer*

Buffer objects represent vim buffers.  You can obtain them in a number of ways:
    - via vim.current.buffer (|python-current|)
    - from indexing vim.buffers (|python-buffers|)
    - from the "buffer" attribute of a window (|python-window|)

Buffer objects have two read-only attributes - name - the full file name for
the buffer, and number - the buffer number.  They also have three methods
(append, mark, and range; see below).

You can also treat buffer objects as sequence objects.  In this context, they
act as if they were lists (yes, they are mutable) of strings, with each
element being a line of the buffer.  All of the usual sequence operations,
including indexing, index assignment, slicing and slice assignment, work as
you would expect.  Note that the result of indexing (slicing) a buffer is a
string (list of strings).  This has one unusual consequence - b[:] is different
from b.  In particular, "b[:] = None" deletes the whole of the buffer, whereas
"b = None" merely updates the variable b, with no effect on the buffer.

Buffer indexes start at zero, as is normal in Python.  This differs from vim
line numbers, which start from 1.  This is particularly relevant when dealing
with marks (see below) which use vim line numbers.

The buffer object attributes are:
                                                        *buffer-attributes*
    b.vars      Dictionary-like object used to access 
            |buffer-variable|s.
    b.options   Mapping object (supports item getting, setting and 
            deleting) that provides access to buffer-local options 
            and buffer-local values of |global-local| options. Use 
            |python-window|.options if option is window-local, 
            this object will raise KeyError. If option is 
            |global-local| and local value is missing getting it 
            will return None.
    b.name      String, RW. Contains buffer name (full path).
            Note: when assigning to b.name |BufFilePre| and 
            |BufFilePost| autocommands are launched.
    b.number    Buffer number. Can be used as |python-buffers| key.
            Read-only.
    b.valid     True or False. Buffer object becomes invalid when 
            corresponding buffer is wiped out.

The buffer object methods are:
                                                        *buffer-methods*
    b.append(str)   Append a line to the buffer
    b.append(str, nr)  Idem, below line "nr"
    b.append(list)  Append a list of lines to the buffer
            Note that the option of supplying a list of strings to
            the append method differs from the equivalent method
            for Python's built-in list objects.
    b.append(list, nr)  Idem, below line "nr"
    b.mark(name)    Return a tuple (row,col) representing the position
            of the named mark (can also get the []"<> marks)
    b.range(s,e)    Return a range object (see |python-range|) which
            represents the part of the given buffer between line
            numbers s and e |inclusive|.

Note that when adding a line it must not contain a line break character '\n'.
A trailing '\n' is allowed and ignored, so that you can do: >
    :py b.append(f.readlines())

Buffer object type is available using "Buffer" attribute of vim module.

Examples (assume b is the current buffer) >

        :py print b.name            # write the buffer file name
        :py b[0] = "hello!!!"       # replace the top line
        :py b[:] = None             # delete the whole buffer
        :py del b[:]                # delete the whole buffer
        :py b[0:0] = [ "a line" ]   # add a line at the top
        :py del b[2]                # delete a line (the third)
        :py b.append("bottom")      # add a line at the bottom
        :py n = len(b)              # number of lines
        :py (row,col) = b.mark('a') # named mark
        :py r = b.range(1,5)        # a sub-range of the buffer
        :py b.vars["foo"] = "bar"   # assign b:foo variable
        :py b.options["ff"] = "dos" # set fileformat
        :py del b.options["ar"]     # same as :set autoread<

### ===🗝 Range objects 

==============================================================================
4. Range objects                    *python-range*

Range objects represent a part of a vim buffer.  You can obtain them in a
number of ways:
    - via vim.current.range (|python-current|)
    - from a buffer's range() method (|python-buffer|)

A range object is almost identical in operation to a buffer object.  However,
all operations are restricted to the lines within the range (this line range
can, of course, change as a result of slice assignments, line deletions, or
the range.append() method).

The range object attributes are:
                                                        *range-attributes*
    r.start     Index of first line into the buffer
    r.end       Index of last line into the buffer

The range object methods are:
                                                        *range-methods*
    r.append(str)   Append a line to the range
    r.append(str, nr)  Idem, after line "nr"
    r.append(list)  Append a list of lines to the range
            Note that the option of supplying a list of strings to
            the append method differs from the equivalent method
            for Python's built-in list objects.
    r.append(list, nr)  Idem, after line "nr"

Range object type is available using "Range" attribute of vim module.

Example (assume r is the current range):
    # Send all lines in a range to the default printer
    vim.command("%d,%dhardcopy!" % (r.start+1,r.end+1))

### ===🗝 Window objects

==============================================================================
5. Window objects                   *python-window*

Window objects represent vim windows.  You can obtain them in a number of ways:
    - via vim.current.window (|python-current|)
    - from indexing vim.windows (|python-windows|)
    - from indexing "windows" attribute of a tab page (|python-tabpage|)
    - from the "window" attribute of a tab page (|python-tabpage|)

You can manipulate window objects only through their attributes.  They have no
methods, and no sequence or other interface.

Window attributes are:
    buffer (read-only)  The buffer displayed in this window
    cursor (read-write) The current cursor position in the window
                This is a tuple, (row,col).
    height (read-write) The window height, in rows
    width (read-write)  The window width, in columns
    vars (read-only)    The window |w:| variables. Attribute is 
                unassignable, but you can change window 
                variables this way
    options (read-only) The window-local options. Attribute is 
                unassignable, but you can change window 
                options this way. Provides access only to 
                window-local options, for buffer-local use 
                |python-buffer| and for global ones use 
                |python-options|. If option is |global-local| 
                and local value is missing getting it will 
                return None.
    number (read-only)  Window number.  The first window has number 1.
                This is zero in case it cannot be determined
                (e.g. when the window object belongs to other
                tab page).
    row, col (read-only)    On-screen window position in display cells.
                First position is zero.
    tabpage (read-only) Window tab page.
    valid (read-write)  True or False. Window object becomes invalid 
                when corresponding window is closed.

The height attribute is writable only if the screen is split horizontally.
The width attribute is writable only if the screen is split vertically.

Window object type is available using "Window" attribute of vim module.

### ===🗝 Tab page objects

==============================================================================
6. Tab page objects                 *python-tabpage*

Tab page objects represent vim tab pages. You can obtain them in a number of 
ways:
    - via vim.current.tabpage (|python-current|)
    - from indexing vim.tabpages (|python-tabpages|)

You can use this object to access tab page windows. They have no methods and 
no sequence or other interfaces.

Tab page attributes are:
    number      The tab page number like the one returned by 
            |tabpagenr()|.
    windows     Like |python-windows|, but for current tab page.
    vars        The tab page |t:| variables.
    window      Current tabpage window.
    valid       True or False. Tab page object becomes invalid when 
            corresponding tab page is closed.

TabPage object type is available using "TabPage" attribute of vim module.

### ===🗝 vim.bindeval objects

==============================================================================
7. vim.bindeval objects             *python-bindeval-objects*

vim.Dictionary object               *python-Dictionary*
    Dictionary-like object providing access to vim |Dictionary| type.
    Attributes:
        Attribute  Description ~
        locked     One of                       *python-.locked*
                    Value           Description ~
                    zero            Variable is not locked
                    vim.VAR_LOCKED  Variable is locked, but can be unlocked
                    vim.VAR_FIXED   Variable is locked and can't be unlocked
                   Read-write. You can unlock locked variable by assigning 
                   `True` or `False` to this attribute. No recursive locking 
                   is supported.
        scope      One of
                    Value              Description ~
                    zero               Dictionary is not a scope one
                    vim.VAR_DEF_SCOPE  |g:| or |l:| dictionary
                    vim.VAR_SCOPE      Other scope dictionary,
                                       see |internal-variables|
    Methods (note: methods do not support keyword arguments):
        Method      Description ~
        keys()      Returns a list with dictionary keys.
        values()    Returns a list with dictionary values.
        items()     Returns a list of 2-tuples with dictionary contents.
        update(iterable), update(dictionary), update(**kwargs)
                    Adds keys to dictionary.
        get(key[, default=None])
                    Obtain key from dictionary, returning the default if it is 
                    not present.
        pop(key[, default])
                    Remove specified key from dictionary and return 
                    corresponding value. If key is not found and default is 
                    given returns the default, otherwise raises KeyError.
        popitem()
                    Remove random key from dictionary and return (key, value) 
                    pair.
        has_key(key)
                    Check whether dictionary contains specified key, similar 
                    to `key in dict`.

        __new__(), __new__(iterable), __new__(dictionary), __new__(update)
                    You can use `vim.Dictionary()` to create new vim 
                    dictionaries. `d=vim.Dictionary(arg)` is the same as 
                    `d=vim.bindeval('{}');d.update(arg)`. Without arguments 
                    constructs empty dictionary.

    Examples: >
        d = vim.Dictionary(food="bar")      # Constructor
        d['a'] = 'b'                # Item assignment
        print d['a']                # getting item
        d.update({'c': 'd'})            # .update(dictionary)
        d.update(e='f')             # .update(**kwargs)
        d.update((('g', 'h'), ('i', 'j')))  # .update(iterable)
        for key in d.keys():            # .keys()
        for val in d.values():          # .values()
        for key, val in d.items():      # .items()
        print isinstance(d, vim.Dictionary) # True
        for key in d:               # Iteration over keys
        class Dict(vim.Dictionary):     # Subclassing
<
    Note: when iterating over keys you should not modify dictionary.

vim.List object                 *python-List*
    Sequence-like object providing access to vim |List| type.
    Supports `.locked` attribute, see |python-.locked|. Also supports the 
    following methods:
        Method          Description ~
        extend(item)    Add items to the list.

        __new__(), __new__(iterable)
                        You can use `vim.List()` to create new vim lists. 
                        `l=vim.List(iterable)` is the same as 
                        `l=vim.bindeval('[]');l.extend(iterable)`. Without 
                        arguments constructs empty list.
    Examples: >
        l = vim.List("abc")     # Constructor, result: ['a', 'b', 'c']
        l.extend(['abc', 'def'])    # .extend() method
        print l[1:]         # slicing
        l[:0] = ['ghi', 'jkl']      # slice assignment
        print l[0]          # getting item
        l[0] = 'mno'            # assignment
        for i in l:         # iteration
        print isinstance(l, vim.List)   # True
        class List(vim.List):       # Subclassing

vim.Function object             *python-Function*
    Function-like object, acting like vim |Funcref| object. Accepts special 
    keyword argument `self`, see |Dictionary-function|. You can also use 
    `vim.Function(name)` constructor, it is the same as 
    `vim.bindeval('function(%s)'%json.dumps(name))`.

    Attributes (read-only):
        Attribute    Description ~
        name         Function name.
        args         `None` or a |python-List| object with arguments.  Note 
                     that this is a copy of the arguments list, constructed 
                     each time you request this attribute. Modifications made 
                     to the list will be ignored (but not to the containers 
                     inside argument list: this is like |copy()| and not 
                     |deepcopy()|).
        self         `None` or a |python-Dictionary| object with self 
                     dictionary. Note that explicit `self` keyword used when 
                     calling resulting object overrides this attribute.
        auto_rebind  Boolean. True if partial created from this Python object 
                     and stored in the Vim script dictionary should be
                     automatically rebound to the dictionary it is stored in
                     when this dictionary is indexed. Exposes Vim internal
                     difference between `dict.func` (auto_rebind=True) and
                     `function(dict.func,dict)` (auto_rebind=False). This
                     attribute makes no sense if `self` attribute is `None`.

    Constructor additionally accepts `args`, `self` and `auto_rebind` 
    keywords.  If `args` and/or `self` argument is given then it constructs 
    a partial, see |function()|.  `auto_rebind` is only used when `self` 
    argument is given, otherwise it is assumed to be `True` regardless of 
    whether it was given or not.  If `self` is given then it defaults to 
    `False`.

    Examples: >
        f = vim.Function('tr')          # Constructor
        print f('abc', 'a', 'b')        # Calls tr('abc', 'a', 'b')
        vim.command('''
            function DictFun() dict
                return self
            endfunction
        ''')
        f = vim.bindeval('function("DictFun")')
        print f(self={})            # Like call('DictFun', [], {})
        print isinstance(f, vim.Function)   # True

        p = vim.Function('DictFun', self={})
        print f()
        p = vim.Function('tr', args=['abc', 'a'])
        print f('b')

### ===🗝 pyeval() py3eval()

==============================================================================
8. pyeval() and py3eval() Vim functions         *python-pyeval*

To facilitate bi-directional interface, you can use |pyeval()| and |py3eval()| 
functions to evaluate Python expressions and pass their values to Vim script.
|pyxeval()| is also available.

The Python value "None" is converted to v:none.

### ===🗝 Dynamic loading

==============================================================================
9. Dynamic loading                  *python-dynamic*

On MS-Windows and Unix the Python library can be loaded dynamically.  The
|:version| output then includes |+python/dyn| or |+python3/dyn|.

This means that Vim will search for the Python DLL or shared library file only
when needed.  When you don't use the Python interface you don't need it, thus
you can use Vim without this file.


MS-Windows ~

To use the Python interface the Python DLL must be in your search path.  In a
console window type "path" to see what directories are used.  The 'pythondll'
or 'pythonthreedll' option can be also used to specify the Python DLL.

The name of the DLL should match the Python version Vim was compiled with.
Currently the name for Python 2 is "python27.dll", that is for Python 2.7.
That is the default value for 'pythondll'.  For Python 3 it is python36.dll
(Python 3.6).  To know for sure edit "gvim.exe" and search for
"python\d*.dll\c".


Unix ~

The 'pythondll' or 'pythonthreedll' option can be used to specify the Python
shared library file instead of DYNAMIC_PYTHON_DLL or DYNAMIC_PYTHON3_DLL file
what were specified at compile time.  The version of the shared library must
match the Python 2.x or Python 3 version Vim was compiled with.

### ===🗝 Python 3

==============================================================================
10. Python 3                        *python3*

                            *:py3* *:python3*
The `:py3` and `:python3` commands work similar to `:python`.  A simple check
if the `:py3` command is working: >
    :py3 print("Hello")

To see what version of Python you have: >
    :py3 import sys
    :py3 print(sys.version)
<                           *:py3file*
The `:py3file` command works similar to `:pyfile`.
                            *:py3do*
The `:py3do` command works similar to `:pydo`.


Vim can be built in four ways (:version output):
1. No Python support        (-python, -python3)
2. Python 2 support only    (+python or +python/dyn, -python3)
3. Python 3 support only    (-python, +python3 or +python3/dyn)
4. Python 2 and 3 support   (+python/dyn, +python3/dyn)

Some more details on the special case 4:  *python-2-and-3*

When Python 2 and Python 3 are both supported they must be loaded dynamically.

When doing this on Linux/Unix systems and importing global symbols, this leads
to a crash when the second Python version is used.  So either global symbols
are loaded but only one Python version is activated, or no global symbols are
loaded. The latter makes Python's "import" fail on libraries that expect the
symbols to be provided by Vim.
                            *E836* *E837*
Vim's configuration script makes a guess for all libraries based on one
standard Python library (termios).  If importing this library succeeds for
both Python versions, then both will be made available in Vim at the same
time.  If not, only the version first used in a session will be enabled.
When trying to use the other one you will get the E836 or E837 error message.

Here Vim's behavior depends on the system in which it was configured.  In a
system where both versions of Python were configured with --enable-shared,
both versions of Python will be activated at the same time.  There will still
be problems with other third party libraries that were not linked to
libPython.

To work around such problems there are these options:
1. The problematic library is recompiled to link to the according
   libpython.so.
2. Vim is recompiled for only one Python version.
3. You undefine PY_NO_RTLD_GLOBAL in auto/config.h after configuration.  This
   may crash Vim though.

                            *E880*
Raising SystemExit exception in python isn't endorsed way to quit vim, use: >
    :py vim.command("qall!")
<

                            *has-python*
You can test what Python version is available with: >
    if has('python')
      echo 'there is Python 2.x'
    endif
    if has('python3')
      echo 'there is Python 3.x'
    endif

Note however, that when Python 2 and 3 are both available and loaded
dynamically, these has() calls will try to load them.  If only one can be
loaded at a time, just checking if Python 2 or 3 are available will prevent
the other one from being available.

To avoid loading the dynamic library, only check if Vim was compiled with
python support: >
    if has('python_compiled')
      echo 'compiled with Python 2.x support'
      if has('python_dynamic')
        echo 'Python 2.x dynamically loaded'
      endif
    endif
    if has('python3_compiled')
      echo 'compiled with Python 3.x support'
      if has('python3_dynamic')
        echo 'Python 3.x dynamically loaded'
      endif
    endif

This also tells you whether Python is dynamically loaded, which will fail if
the runtime library cannot be found.

### ===🗝 Python X

==============================================================================
11. Python X                        *python_x* *pythonx*

Because most python code can be written so that it works with python 2.6+ and
python 3 the pyx* functions and commands have been written.  They work exactly
the same as the Python 2 and 3 variants, but select the Python version using
the 'pyxversion' setting.

You should set 'pyxversion' in your |.vimrc| to prefer Python 2 or Python 3
for Python commands. If you change this setting at runtime you may risk that
state of plugins (such as initialization) may be lost.

If you want to use a module, you can put it in the {rtp}/pythonx directory.
See |pythonx-directory|.

                            *:pyx* *:pythonx*
The `:pyx` and `:pythonx` commands work similar to `:python`.  A simple check
if the `:pyx` command is working: >
    :pyx print("Hello")

To see what version of Python is being used: >
    :pyx import sys
    :pyx print(sys.version)
<
                    *:pyxfile* *python_x-special-comments*
The `:pyxfile` command works similar to `:pyfile`.  However you can add one of
these comments to force Vim using `:pyfile` or `:py3file`: >

    #!/any string/python2     " Shebang. Must be the first line of the file.
    #!/any string/python3     " Shebang. Must be the first line of the file.
    # requires python 2.x     " Maximum lines depend on 'modelines'.
    # requires python 3.x     " Maximum lines depend on 'modelines'.

Unlike normal modelines, the bottom of the file is not checked.
If none of them are found, the 'pyxversion' setting is used.
                            *W20* *W21*
If Vim does not support the selected Python version a silent message will be
printed.  Use `:messages` to read them.

                            *:pyxdo*
The `:pyxdo` command works similar to `:pydo`.

                            *has-pythonx*
You can test if pyx* commands are available with: >
    if has('pythonx')
      echo 'pyx* commands are available. (Python ' . &pyx . ')'
    endif

When compiled with only one of |+python| or |+python3|, the has() returns 1.
When compiled with both |+python| and |+python3|, the test depends on the
'pyxversion' setting.  If 'pyxversion' is 0, it tests Python 3 first, and if
it is not available then Python 2.  If 'pyxversion' is 2 or 3, it tests only
Python 2 or 3 respectively.

Note that for `has('pythonx')` to work it may try to dynamically load Python 3
or 2.  This may have side effects, especially when Vim can only load one of
the two.

If a user prefers Python 2 and want to fallback to Python 3, he needs to set
'pyxversion' explicitly in his |.vimrc|.  E.g.: >
    if has('python')
      set pyx=2
    elseif has('python3')
      set pyx=3
    endif

### ===🗝 Building with Python support

==============================================================================
12. Building with Python support            *python-building*

A few hints for building with Python 2 or 3 support.

UNIX

See src/Makefile for how to enable including the Python interface.

On Ubuntu you will want to install these packages for Python 2:
    python
    python-dev
For Python 3:
    python3
    python3-dev
For Python 3.6:
    python3.6
    python3.6-dev

If you have more than one version of Python 3, you need to link python3 to the
one you prefer, before running configure.


## ==⚡ User Commmands
                                                                *user-commands*
- [development of Vim](doc/develop.txt)
- [Make new commands](doc/usr_40.txt)
- [Key mapping, commands - 4. User-defined commands](doc/map.txt)

- Command Examples                      |command-examples|
- Command attributes                    |command-atributes|
- Argument handling                     |:command-nargs|
- Completion behavior                   |:command-completion|
- Custom completion                     |:command-completion-custom|
- Range handling                        |:command-range| |:command-count|
- Special cases                         |command-special-cases|
- Replacement text                      |command-replacement|

除了 Vim 内部命令外，可以定义用户命令，但需要大写字母开头后跟其它字符，规则是 A-Z[A-Za-z0-9#]。

如果使用数字结尾，可能与命令参数混淆，如果命令需要数值参数。比如，":Cc2" 可能是执行不带参数的一个命令，也可以是执行 ":Cc" 命令带参数 "2"，显式使用括号解决二义问题。

使用命令时，可以输入简写名字，最佳匹配的命令会被执行，并且内部命令优先，否则提示不能从多个匹配命令中确定执行。

Example: >

    :command Rename ...
    :command Renumber ...
    :Rena               " Means "Rename"
    :Renu               " Means "Renumber"
    :Ren                " Error - ambiguous
    :command Paste ...

    :com[mand]                      *:com* *:command*
                List all user-defined commands.  When listing commands,
                the characters in the first columns are:
                    !   Command has the -bang attribute
                    "   Command has the -register attribute
                    |   Command has the -bar attribute
                    b   Command is local to current buffer
                (see below for details on attributes)
                The list can be filtered on command name with
                |:filter|, e.g., to list all commands with "Pyth" in
                the name: >

                    filter Pyth command

    :com[mand] {cmd}    List the user-defined commands that start with {cmd}

    :com[mand][!] [{attr}...] {cmd} {repl}
                Define a user command.  The name of the command is
                {cmd} and its replacement text is {repl}.  The
                command's attributes (see below) are {attr}.  If the
                command already exists, an error is reported, unless a
                ! is specified, in which case the command is
                redefined.  There is one exception: When sourcing a
                script again, a command that was previously defined in
                that script will be silently replaced.


    :delc[ommand] {cmd}             *:delc* *:delcommand* *E184*
                Delete the user-defined command {cmd}.

    :delc[ommand] -buffer {cmd}                 *E1237*
                Delete the user-defined command {cmd} that was defined
                for the current buffer.

    :comc[lear]                     *:comc* *:comclear*
                Delete all user-defined commands.

参考 Vim-Plug 和 Vundle 插件管理器定义的用户命令：

    :filter Plug command
        Name              Args Address Complete    Definition
    |   Plug              +                        call plug#(<args>)
    !|  PlugClean         0                        call s:clean(<bang>0)
    |   PlugDiff          0                        call s:diff()
    !|  PlugInstall       *            customlist  call s:install(<bang>0, [<f-args>])
    !|  PlugSnapshot      ?            file        call s:snapshot(<bang>0, <f-args>)
    |   PlugStatus        0                        call s:status()
    !|  PlugUpdate        *            customlist  call s:update(<bang>0, [<f-args>])
    |   PlugUpgrade       0                        if s:upgrade() | execute 'source' s
    |   UpdateRemotePlugins 0                      call remote#host#UpdateRemotePlugin


```sh
"=========================="
" Vim-Plug Plugin Commands "
"=========================="
function! s:define_commands()
  command! -nargs=+ -bar Plug call plug#(<args>)
  if !executable('git')
    return s:err('`git` executable not found. Most commands will not be available. To suppress this message, prepend `silent!` to `call plug#begin(...)`.')
  endif
  if has('win32')
  \ && &shellslash
  \ && (&shell =~# 'cmd\(\.exe\)\?$' || s:is_powershell(&shell))
    return s:err('vim-plug does not support shell, ' . &shell . ', when shellslash is set.')
  endif
  if !has('nvim')
    \ && (has('win32') || has('win32unix'))
    \ && !has('multi_byte')
    return s:err('Vim needs +multi_byte feature on Windows to run shell commands. Enable +iconv for best results.')
  endif
  command! -nargs=* -bar -bang -complete=customlist,s:names PlugInstall call s:install(<bang>0, [<f-args>])
  command! -nargs=* -bar -bang -complete=customlist,s:names PlugUpdate  call s:update(<bang>0, [<f-args>])
  command! -nargs=0 -bar -bang PlugClean call s:clean(<bang>0)
  command! -nargs=0 -bar PlugUpgrade if s:upgrade() | execute 'source' s:esc(s:me) | endif
  command! -nargs=0 -bar PlugStatus  call s:status()
  command! -nargs=0 -bar PlugDiff    call s:diff()
  command! -nargs=? -bar -bang -complete=file PlugSnapshot call s:snapshot(<bang>0, <f-args>)
endfunction

"=========================="
" Vundle Plugin Commands "
"=========================="
com! -nargs=+  -bar   Plugin
\ call vundle#config#bundle(<args>)

com! -nargs=* -bang -complete=custom,vundle#scripts#complete PluginInstall
\ call vundle#installer#new('!' == '<bang>', <f-args>)

com! -nargs=? -bang -complete=custom,vundle#scripts#complete PluginSearch
\ call vundle#scripts#all('!' == '<bang>', <q-args>)

com! -nargs=0 -bang PluginList
\ call vundle#installer#list('!' == '<bang>')

com! -nargs=? -bang   PluginClean
\ call vundle#installer#clean('!' == '<bang>')

com! -nargs=0         PluginDocs
\ call vundle#installer#helptags(g:vundle#bundles)
```


### ===🗝 Command Examples ~
                                                                *command-examples*

直接执行 :command 命令是定义用户命令最简单的操作：

```sh
:let b:error = "None"
:command -nargs=1 Error echoerr <args>
```

以上定义了一个 :Error 命令，它调用 :echoerr 内部命令显示消息，在命令行中定义变量可以使用 buffer 作用域 b: 表示一个缓冲区变量。命令定义中会将传入的参数 <args> 再次传递给 :echoerr 命令。参数这种用尖括号表示的是转义序列，本身就是 Replacement Text，最后会替换为具体值，也是 Vim Script 语法的特色，使用起来很方便，参考 *command-replacement-text*。

例如，命令可以强制执行，只需要将 ! 后缀在命令后面，在实现命令时需要使用 -bang 属性和 <bang> 替换点位符号，使用 :command 查询用户命令列表中会显示这些特性。

以下 :Ddel 例子解析，用户命令的行为就是 +,$ 指定了一个内容区间，从当前光标位置到文件结尾，然后执行 d 命令删除。

注意，在命令中输入的 $ 等同 <End> 表示文件末尾，而在 Visual Mode 输入 $ 表示行尾。


Examples >

```sh
" Delete everything after here to the end
:com Ddel +,$d

" Rename the current buffer
:com -nargs=1 -bang -complete=file Ren f <args>|w<bang>

" Replace a range with the contents of a file
" (Enter this all as one line)
:com -range -nargs=1 -complete=file
 Replace <line1>-pu_|<line1>,<line2>d|r <args>|<line1>d

" Count the number of lines in the range
:com! -range -nargs=0 Lines  echo <line2> - <line1> + 1 "lines"

" Call a user function (example of <f-args>)
:com -nargs=* Mycmd call Myfunc(<f-args>)
```

When executed as: >

    :Mycmd arg1 arg2

This will invoke: >

```sh
:call Myfunc("arg1","arg2")

:"" #A more substantial example
:function Allargs(command)
:   let i = 0
:   while i < argc()
:      if filereadable(argv(i))
:         execute "e " . argv(i)
:         execute a:command
:      endif
:      let i = i + 1
:   endwhile
:endfunction
:command -nargs=+ -complete=command Allargs call Allargs(<q-args>)

```

The command Allargs takes any Vim command(s) as argument and executes it on all
files in the argument list.  Usage example (note use of the "e" flag to ignore
errors and the "update" command to write modified buffers): >

    :Allargs %s/foo/bar/ge|update

This will invoke: >

    :call Allargs("%s/foo/bar/ge|update")
<
When defining a user command in a script, it will be able to call functions
local to the script and use mappings local to the script.  When the user
invokes the user command, it will run in the context of the script it was
defined in.  This matters if |<SID>| is used in a command.


### ===🗝 Command attributes ~
                                                            *command-atributes*
用户定义命令基本格式包含四个部分，一般单行编写，多行需要使用 \ 符号开头：

    :com[mand][!] [{attr}...] {cmd} {repl}

- 使用 :command 命令声明用户命令；
- [{attr}...] 任意可选参数，使用 -nargs 属性指定命令接收的参数个数；
- {cmd} 参数为命令名称；
- {repl} 参数为命令表达式；

定义一已经存在的命令会触发错误，使用 :command! 强制重定义，消隐错误信息。

特殊情况是执行 source 脚本文件时，会静默地覆盖现有命令而不会出现错误信息。

User-defined commands are treated by Vim just like any other Ex commands.  They
can have arguments, or have a range specified.  Arguments are subject to
completion as filenames, buffers, etc.  Exactly how this works depends upon the
command's attributes, which are specified when the command is defined.

There are a number of attributes, split into four categories: argument
handling, completion behavior, range handling, and special cases.  The
attributes are described below, by category.


### ===🗝 Argument handling ~
                                                    *E175* *E176* *:command-nargs*

命令参数默认为 0 个，如果使用时提供参数则会报错，使用 -nargs 指定参数个数：

        -nargs=0    No arguments are allowed (the default)
        -nargs=1    Exactly one argument is required, it includes spaces
        -nargs=*    Any number of arguments are allowed (0, 1, or many),
                    separated by white space
        -nargs=?    0 or 1 arguments are allowed
        -nargs=+    Arguments must be supplied, but any number are allowed

Arguments are considered to be separated by (unescaped) spaces or tabs in this
context, except when there is one argument, then the white space is part of
the argument.

Note that arguments are used as text, not as expressions.  Specifically,
"s:var" will use the script-local variable in the script where the command was
defined, not where it is invoked!  Example:

    script1.vim: >
        :let s:error = "None"
        :command -nargs=1 Error echoerr <args>

    script2.vim: >
        :source script1.vim
        :let s:error = "Wrong!"
        :Error s:error

Executing script2.vim will result in "None" being echoed.  Not what you
intended!  Calling a function may be an alternative.


### ===🗝 Completion behavior ~
                                    *:command-completion* *E179* *E180* *E181*
                                    *:command-complete*

### ===🗝 Custom completion ~
                                    *:command-completion-custom*
                                    *:command-completion-customlist* *E467* *E468*

### ===🗝 Range handling ~
                                    *E177* *E178* *:command-range* *:command-count*

By default, user-defined commands do not accept a line number range.  However,
it is possible to specify that the command does take a range (the -range
attribute), or that it takes an arbitrary count value, either in the line
number position (-range=N, like the |:split| command) or as a "count"
argument (-count=N, like the |:Next| command).  The count will then be
available in the argument with |<count>|.

Possible attributes are:

    -range      Range allowed, default is current line
    -range=%    Range allowed, default is whole file (1,$)
    -range=N    A count (default N) which is specified in the line
            number position (like |:split|); allows for zero line
            number.
    -count=N    A count (default N) which is specified either in the line
            number position, or as an initial argument (like |:Next|).
    -count      acts like -count=0

Note that -range=N and -count=N are mutually exclusive - only one should be
specified.

                    *:command-addr*
It is possible that the special characters in the range like ., $ or % which
by default correspond to the current line, last line and the whole buffer,
relate to arguments, (loaded) buffers, windows or tab pages.

Possible values are (second column is the short name used in listing):
    -addr=lines         Range of lines (this is the default for -range)
    -addr=arguments   arg   Range for arguments
    -addr=buffers     buf   Range for buffers (also not loaded buffers)
    -addr=loaded_buffers  load  Range for loaded buffers
    -addr=windows     win   Range for windows
    -addr=tabs        tab   Range for tab pages
    -addr=quickfix    qf    Range for quickfix entries
    -addr=other       ? other kind of range; can use ".", "$" and "%"
                as with "lines" (this is the default for
                -count)


### ===🗝 Special cases ~
                                    *:command-bang* *:command-bar* *command-special-cases*
                                    *:command-register* *:command-buffer*

There are some special cases as well:

    -bang       The command can take a ! modifier (like :q or :w)
    -bar        The command can be followed by a "|" and another command.
            A "|" inside the command argument is not allowed then.
            Also checks for a " to start a comment.
    -register   The first argument to the command can be an optional
            register name (like :del, :put, :yank).
    -buffer     The command will only be available in the current buffer.
    -keepscript Do not use the location of where the user command was
            defined for verbose messages, use the location of where
            the user command was invoked.

In the cases of the -count and -register attributes, if the optional argument
is supplied, it is removed from the argument list and is available to the
replacement text separately.
Note that these arguments can be abbreviated, but that is a deprecated
feature.  Use the full name for new scripts.

### ===🗝 Replacement text ~
                                                            *command-replacement-text*
The replacement text for a user defined command is scanned for special escape
sequences, using <...> notation.  Escape sequences are replaced with values
from the entered command line, and all other text is copied unchanged.  The
resulting string is executed as an Ex command.  To avoid the replacement use
<lt> in place of the initial <.  Thus to include "<bang>" literally use
"<lt>bang>".

The valid escape sequences are

    <line1> The starting line of the command range.                         *<line1>*
    <line2> The final line of the command range.                            *<line2>*
    <range> The number of items in the command range: 0, 1 or 2             *<range>*
    <count> Any count supplied (as described for the '-range'               *<count>*
        and '-count' attributes).
    <bang>  (See the '-bang' attribute) Expands to a ! if the               *<bang>*
        command was executed with a ! modifier, otherwise
        expands to nothing.
                                                                            *<mods>*
    <mods>  The command modifiers, if specified. Otherwise, expands to
        nothing. Supported modifiers are |:aboveleft|, |:belowright|,
        |:botright|, |:browse|, |:confirm|, |:hide|, |:keepalt|,
        |:keepjumps|, |:keepmarks|, |:keeppatterns|, |:leftabove|,
        |:lockmarks|, |:noswapfile| |:rightbelow|, |:silent|, |:tab|,
        |:topleft|, |:verbose|, and |:vertical|.
        Note that these are not yet supported: |:noautocmd|,
        |:sandbox| and |:unsilent|.
        Examples: >
            command! -nargs=+ -complete=file MyEdit
                \ for f in expand(<q-args>, 0, 1) |
                \ exe '<mods> split ' . f |
                \ endfor

            function! SpecialEdit(files, mods)
            for f in expand(a:files, 0, 1)
                exe a:mods . ' split ' . f
            endfor
            endfunction
            command! -nargs=+ -complete=file Sedit
                \ call SpecialEdit(<q-args>, <q-mods>)
<
                                                                    *<reg>* *<register>*
    <reg>   (See the '-register' attribute) The optional register,
        if specified.  Otherwise, expands to nothing.  <register>
        is a synonym for this.
                                                                    *<args>*
    <args>  The command arguments, exactly as supplied (but as
        noted above, any count or register can consume some
        of the arguments, which are then not part of <args>).
    <lt>    A single '<' (Less-Than) character.  This is needed if you
        want to get a literal copy of one of these escape sequences
        into the expansion - for example, to get <bang>, use
        <lt>bang>.

                                                                            *<q-args>*
If the first two characters of an escape sequence are "q-" (for example,
<q-args>) then the value is quoted in such a way as to make it a valid value
for use in an expression.  This uses the argument as one single value.
When there is no argument <q-args> is an empty string.
                            *<f-args>*
To allow commands to pass their arguments on to a user-defined function, there
is a special form <f-args> ("function args").  This splits the command
arguments at spaces and tabs, quotes each argument individually, and the
<f-args> sequence is replaced by the comma-separated list of quoted arguments.
See the Mycmd example below.  If no arguments are given <f-args> is removed.
   To embed whitespace into an argument of <f-args>, prepend a backslash.
<f-args> replaces every pair of backslashes (\\) with one backslash.  A
backslash followed by a character other than white space or a backslash
remains unmodified.  Overview:

    command        <f-args> ~
    XX ab          'ab'
    XX a\b         'a\b'
    XX a\ b        'a b'
    XX a\  b       'a ', 'b'
    XX a\\b        'a\b'
    XX a\\ b       'a\', 'b'
    XX a\\\b       'a\\b'
    XX a\\\ b      'a\ b'
    XX a\\\\b      'a\\b'
    XX a\\\\ b     'a\\', 'b'



## ==⚡ Key mapping
                                                                *key-mapping*
- [Introduction to Vim](doc/intro.txt)
- [Make new commands](doc/usr_40.txt)
- [Key mapping, abbreviations and user-defined commands](doc/map.txt)
- [Mapping](https://vimguide.readthedocs.io/en/latest/vim.html#mapping)
- [Vim Documentation](https://www.vim.org/docs.php)
- [Mapping fast keycodes in Vim](https://vim.fandom.com/wiki/Mapping_fast_keycodes_in_terminal_Vim)
- [Handy keymaps in Vim](https://aonemd.me/posts/handy-keymaps-in-vim/)

使用命令查看文档：

    :help map
    :help noremap
    :help nnoremap

   1.1 MAP COMMANDS                     |:map-commands|
   1.2 Special arguments                |:map-arguments|
   1.3 Mapping and modes                |:map-modes|
   1.4 Listing mappings                 |map-listing|
   1.5 Mapping special keys             |:map-special-keys|
   1.6 Special characters               |:map-special-chars|
   1.7 What keys to map                 |map-which-keys|
   1.8 Examples                         |map-examples|
   1.9 Using mappings                   |map-typing|
   1.10 Mapping alt-keys                |:map-alt-keys|
   1.11 Mapping in modifyOtherKeys mode |modifyOtherKeys|
   1.12 Mapping an operator             |:map-operator|

Key mapping 就是将按键映射为其它行为，典型的应用如下，为一个按键定义一系列要执行的命令：

    :map <F2> a<C-R>=strftime("%c")<CR><Esc>

在编辑模式下 VIM 可以用来插入当前时间，strftime() 是一个时间格式化函数。

- `map` 表示定义一个 key mapping，这是一种递归映射方式；
- `<F2>` 表示这个规则将 F2 功能键映射为后面的一系列命令；
- `a` 表示执行 Append 插入命令；
- `<C-R>` 表示 Ctrl-R 组合键，读取寄存器，按下组合键后会动产生一个 `"` 符号；
- `"=` 这是表达式寄存器，expression register，后面输入的表达式就是一个时间格式化函数；
- `<CR>` 回车确认输入内容；
- `<Esc>` 退出 Append 编辑模式；

在编辑键盘映射时注意，可显示字符都相当于直接键入 Vim，比如映射 ; 作为 : 进入命令行模式。

```sh
"" # Map : to ; also in command mode.
nnoremap ; :
vmap ; :
```

而 `<key>` 这种表达表示的是特殊按键，如何要当作字符，就需要使用 `<lt>` 或 `\<` 转义左箭括号，另外斜杠转义为 `\\`，参考 :help notation。

    Examples are often given in the <> notation.  Sometimes this is just to make
    clear what you need to type, but often it can be typed literally, e.g., with
    the ":map" command.  The rules are:
     1.  Printable characters are typed directly, except backslash and "<"
     2.  Backslash is represented with "\\", double backslash, or "<Bslash>".
     3.  Literal "<" is represented with "\<" or "<lt>".  When there is no
         confusion possible, "<" can be used directly.
     4.  "<key>" means the special key typed (see the table above).  Examples:
           <Esc>        Escape key
           <C-G>        CTRL-G
           <Up>         cursor up key
           <C-LeftMouse>    Control- left mouse click
           <S-F11>      Shifted function key 11
           <M-a>        Meta- a  ('a' with bit 8 set)
           <M-A>        Meta- A  ('A' with bit 8 set)

    The <> notation uses <lt> to escape the special meaning of key names.  Using a
    backslash also works, but only when 'cpoptions' does not include the 'B' flag.


说到快捷键，Vim 本身就应该是为简捷而生！

同样，使用 Sublime Text 或操作系统也应该朴素的操作，将触摸板手势与应用操作常用功能结合，三指、四手操作手势的不同方向都可以进行定制。常用的 Tab 切换，窗口、页面关闭，任务切换等等都可以与之相关联。

  ⛏ 二指手势
      - 二指点击 == 鼠标单击
      - 二指双击 == 鼠标右击
      - 二指拖动 == 鼠标滚轮
  ⛏ 三指手势
      - 三指点击 == 鼠标中键
      - 三指向上 == 切换任务
      - 三指向下 == Alt-Tab 切换上一任务
      - 三指向左 == Ctrl-Shift-Tab 回退上一选项卡
      - 三指向右 == Ctrl-Tab 切换上一选项卡
  ⛏ 四指手势
      - 四指点击 == 任务中心
      - 四指向上 == 关闭选项卡
      - 四指向下 == 显示桌面
      - 四指向左 == Alt-Left 向后导航
      - 四指向右 == Alt-Right 向前导航

Sublime Text 中的 Cursor 跳转也可以进行统一处理，将默认的 Alt+- 和 Alt+Shift+- 快捷键重新映射为 Alt+Left 或 Right 才是正确做法：

```json
    { "keys": ["alt+left"], "command": "jump_back" },
    { "keys": ["alt+right"], "command": "jump_forward" },
```

设置快捷键提升 Vim 命令执行效率，修改配置文件 `vim ~/.vimrc` 增加相应的映射配置项目。例如，Tab 切换快捷键 Ctrl+L Ctrl+H 这样设置，<Esc> <CR> 分别表示按下 Esc 和回车键，它们之间就是要执行的命令:

    noremap <Tab> :tabnext<CR>
    noremap <C-L> <Esc>:tabnext<CR>
    noremap <C-H> <Esc>:tabprevious<CR>

因为使用了 noremap 映射，快捷键可以在这些模式下使用：Normal, Visual, Select, Insert and Command-line

    The general syntax of a map command is:

    {cmd} {attr} {lhs} {rhs}

    where
    {cmd}  is one of ':map', ':map!', ':nmap', ':vmap', ':imap',
           ':cmap', ':smap', ':xmap', ':omap', ':lmap', etc.
    {attr} is optional and one or more of the following: <buffer>, <silent>,
           <expr> <script>, <unique> and <special>.
           More than one attribute can be specified to a map.
    {lhs}  left hand side, is a sequence of one or more keys that you will use
           in your new shortcut.
    {rhs}  right hand side, is the sequence of keys that the {lhs} shortcut keys
           will execute when entered.

    Examples:

    map <F2> :echo 'Current time is ' . strftime('%c')<CR>
    map! <F3> <C-R>=strftime('%c')<CR>
    nnoremap <silent> <F2> :lchdir %:p:h<CR>:pwd<CR>

设置映射时需要注意，不能与系统现有习惯快捷冲突，比如 Ctrl-C 通常用来产生中断信号，以下是几个内置的按键映射，使用 :map 或 :verbose map <key> 查询现有按键映射。

    Ctrl-I      Tab
    Ctrl-[      Esc
    Ctrl-M      Enter
    Ctrl-H      Backspace

另外，并不是所有组合键都有效，比较 Left 方向键，测试中发现它与 Alt-Shift-Left 这种组合就没有作用。又如 M 键上，内置的 CTRL-M 等效于 <CR> 即 <ENTER>，所以直接映射这个键几乎没什么用处。

```sh
:echo " Key mapping test"
map <Left>       <Esc>:echo "Key mapping test: map Left."
map <S-Left>     <Esc>:echo "Key mapping test: map S-Left."
map <M-Left>     <Esc>:echo "Key mapping test: map M-Left."
map <C-Left>     <Esc>:echo "Key mapping test: map C-Left."
map <C-S-Left>   <Esc>:echo "Key mapping test: map C-S-Left."
map <M-C-Left>   <Esc>:echo "Key mapping test: map M-C-Left."
map <M-S-Left>   <Esc>:echo "Key mapping test: map M-S-Left!"
map <M-C-S-Left> <Esc>:echo "Key mapping test: map M-C-S-Left."
```

Vim 系统中使用两种按键码：

- Terminal keycodes，如 `^[[1;2A` 这种；
- Vim keycodes 显示更友好，如 <C-v> 这种表达；

以方向键来说，最大的特点就是它们属于不可见的按键，像数字、字母等可以输入可见字符的按键具有自身的特殊性，所以不能直接使用以上这种 keycodes 来完全表达它们的复杂性。

按下 m 是很普通的一种按键状态，而 M 键虽然只是变化了一下大写，但是它涉及了组合键与按键序列的处理问题，编写映射规则时，M 和 <S-M> 是等价的，在后面的定义会覆盖前面的定义。

而变换键 Alt 的处理上，主流 terminal 的习惯做法是使用 Esc 前缀，前缀的 ^[ 就是 Esc 转义。

- Alt+m 就是 `^[m`
- Alt+Shift+m 就是 `^[M`

GUI Vim 本身已经处理 Alt 按键逻辑，但是因为历史习惯用法，Terminal 上还是沿用传统习惯。

Vim 需要自己的键码表示，因为它要在各种平台上运行，需要根据自己的键码进行操作，并将终端键码的具体分配留在后续进行自动检测，或由用户手动设置。

有关 Vim 内部键码的列表，请参见 :help terminal_key_code 或使用 :set termcap 列出终端键码，:help terminal-options。

使用 cat 命令，或以下 Vim 脚本可以查看 keycodes 类型及 code 值，使用 Ctrl-D 输入 EOF 结束命令：

    for i in range(1,10) 
      echom getchar()
    endfor

对于 CTRL-P，因为 code 值为 16，所以有以下几种等价表达：

    :nnoremap <C-P> {
    :nnoremap <Char-16> {
    :nnoremap <Char-020> {
    :nnoremap <Char-0x10> {

    前导键是 Vim 中的一个特殊键，它可以与其他键组合映射以执行某些功能。默认情况下，Vim 将领导者映射到反斜杠键。我看到很多 Vimmer（是的，现在这是一个词）将其设置为逗号键。但是，我喜欢将其设置为空格键；它是键盘中间的一个大键，因此很容易找到它并将其与其他组合键一起使用：

    "The Leader
    let mapleader="\<Space>"
    现在我们已经映射了领导键，我们可以开始将其他键映射到函数。

    我们列表中的第一个函数将是保存或写入缓冲区函数。不是使用 shift 和分号键生成冒号，输入 w，然后按 Enter 保存当前缓冲区，我发现用字母 w 敲空格键更快，更容易专门用于在写作过程中多次使用的函数。这只是两个按键而不是四个：

    "save current buffer
    nnoremap <leader>w :w<cr>
    第二个功能是用另一个模式/单词替换当前光标下的单词。简单地说，它复制光标下的单词并将其插入到替换命令调用中。您只需要键入替换模式并按 Enter 键即可实际替换文本：

    "replace the word under cursor
    nnoremap <leader>* :%s/\<<c-r><c-w>\>//g<left><left>
    Next 是许多现代文本编辑器中的一个功能，即自动关闭标签。尽管有时在您不需要它时它会变得很烦人，但大多数时候它在用最流行的语言编写函数定义、if 语句和其他控制结构时很方便。以下每个键盘映射都只是插入一个结束标签并将光标放在开始和结束标签之间：

    "autoclose tags
    inoremap ( ()<Left>
    inoremap { {}<Left>
    inoremap [ []<Left>
    inoremap " ""<Left>
    我觉得这部分真的很长，所以这是最后一个功能。要在 Vim 中向上或向下移动一行，通常你会删除它并将其粘贴到所需的目标行中。这些键盘映射可以使用前导键 + k 或 j （向上和向下）向上或向下移动行：

    "move lines around
    nnoremap <leader>k :m-2<cr>==
    nnoremap <leader>j :m+<cr>==
    xnoremap <leader>k :m-2<cr>gv=gv
    xnoremap <leader>j :m'>+<cr>gv=gv



键码符号参考 :help intro 关于 Notation 部分内容，或直接使用命令 :help key-notation 或 :help keycodes 跳转：

    {lhs}       means left-hand-side    *{lhs}*
    {rhs}       means right-hand-side   *{rhs}*
    <M>         表示 Alt 键，Modify
    <C>         表示 Ctrl 键，Control
    <S>         表示 Shift 键
    <Esc>       表示 Esc 键，Escape
    <CR> <Enter>      表示回车键
    <C-R>       表示 Ctrl-R 组合键
    <F4>        表示 F4 功能键
    <C-F6>      表示 Ctrl-F6 功能键
    <M-F6>      表示 Alt-F6 功能键
    <S-F6>      表示 Shift-F6 功能键
    <C-S-F7>    表示 Ctrl-Shift-F7 功能键
    <M-S-F8>    表示 Alt-Shift-F8 功能键
    <M-C-S-F9>  表示 Alt-Ctrl-Shift-F9 功能键
    <kUp>       keypad cursor-up
    <kDown>     keypad cursor-down
    <kLeft>     keypad cursor-left
    <kRight>    keypad cursor-right
    <kHome>     keypad home (upper left)
    <kEnd>      keypad end (lower left)
    <kOrigin>   keypad origin (middle)
    <kPageUp>   keypad page-up (upper right)
    <kPageDown> keypad page-down (lower right)
    <kDel>      keypad delete
    <kPlus>     keypad +
    <kMinus>    keypad -
    <kMultiply> keypad *
    <kDivide>   keypad /
    <kPoint>    keypad .
    <kComma>    keypad ,
    <kEqual>    keypad =
    <kEnter>    keypad Enter
    <k0> - <k9> keypad 0 to 9


根据 vim 所处不同的模式，设置不同的映射，vim 有以下六种工作模式：

- For *Normal mode*: When typing commands.
- For *Visual mode*: When typing commands while the Visual area is highlighted.
- For *Select mode*: like Visual mode but typing text replaces the selection.
- For *Operator-pending mode*: When an operator is pending (after "d", "y", "c",
  etc.).  See below: |omap-info|.
- For *Insert mode*:  These are also used in Replace mode.
- For *Command-line mode*: When entering a ":" or "/" command.

Overview of which map command works in which mode.  More details below.

    |      COMMANDS            |        MODES ~
    |--------------------------|--------------------------------------------
    | :map   :noremap  :unmap  |   Normal, Visual, Select, Operator-pending
    | :nmap  :nnoremap :nunmap |   Normal
    | :vmap  :vnoremap :vunmap |   Visual and Select
    | :smap  :snoremap :sunmap |   Select
    | :xmap  :xnoremap :xunmap |   Visual
    | :omap  :onoremap :ounmap |   Operator-pending
    | :map!  :noremap! :unmap! |   Insert and Command-line
    | :imap  :inoremap :iunmap |   Insert
    | :lmap  :lnoremap :lunmap |   Insert, Command-line, Lang-Arg
    | :cmap  :cnoremap :cunmap |   Command-line
    | :tmap  :tnoremap :tunmap |   Terminal-Job

    Same information in a table:
                                *map-table*
             Mode  | Norm | Ins | Cmd | Vis | Sel | Opr | Term | Lang | ~
    Command        +------+-----+-----+-----+-----+-----+------+------+ ~
    [nore]map      | yes  |  -  |  -  | yes | yes | yes |  -   |  -   |
    n[nore]map     | yes  |  -  |  -  |  -  |  -  |  -  |  -   |  -   |
    [nore]map!     |  -   | yes | yes |  -  |  -  |  -  |  -   |  -   |
    i[nore]map     |  -   | yes |  -  |  -  |  -  |  -  |  -   |  -   |
    c[nore]map     |  -   |  -  | yes |  -  |  -  |  -  |  -   |  -   |
    v[nore]map     |  -   |  -  |  -  | yes | yes |  -  |  -   |  -   |
    x[nore]map     |  -   |  -  |  -  | yes |  -  |  -  |  -   |  -   |
    s[nore]map     |  -   |  -  |  -  |  -  | yes |  -  |  -   |  -   |
    o[nore]map     |  -   |  -  |  -  |  -  |  -  | yes |  -   |  -   |
    t[nore]map     |  -   |  -  |  -  |  -  |  -  |  -  | yes  |  -   |
    l[nore]map     |  -   | yes | yes |  -  |  -  |  -  |  -   | yes  |


根据命令的名称的前缀可以有不同的含义：

- nore 表示非递归，Non-Recursive Mapping
- n 表示在普通模式下生效，Normal
- v 表示在可视模式下生效，Visual
- i 表示在插入模式下生效，Insert
- c 表示在命令行模式下生效，Command-line

所谓递归 Recursive Mapping，递归的映射，也就是说：

- 如果键 <a> 被映射成了 <b>，<c> 又被映射成了 <a>：
- 如果映射是递归的，那么 <c> 就被映射成了 <b>。
- 如果非递归映射的，那么 <c> 就只被映射成 <a>，而不会递归处理。

比如 :noremap 的递归映射：

    :noremap k j
    :noremap j k

这两个递归映射会导致 up 和 down 两个命令交换，k --> j，j --> k。

默认递归深度为 1000，设置在 maxmapdepth 属性中。

默认的 map 就是递归的映射，非递归的命令前缀为 [nore]，好处是不会被其它映射覆盖，配置怎么设置就怎么有效果。



## ==⚡ Automatic Command
                                                                *autocmd*
- [Automatic commands](doc/autocmd.txt)
- [Vim: autocmd.txt](http://vimdoc.sourceforge.net/htmldoc/autocmd.html)

使用自动命令，autocmd 可以实现的最基本的功能就是根据文件类型执行映射的命令，比如正常模式下 Python 代码执行或 C++ 代码编译，使用 % 引用当前文件。要在编辑模式下使用快捷键，可以使用 :imap 或 :lmap 替代 :nmap 。

注意，在编辑模式下触发的是字符串输入行为，所以会将内容输入到编辑框。

以下设置，如果当前文件是 sh 脚本，在 Normal mode 按下 F9 将触发以下行为：

- :w <CR>  执行文件保存命令；
- :! clear <CR> 执行控制台清屏命令；
- :! echo Execute bash: %; bash % <Enter> 执行控制台 echo 命令输出信息，并再执行 bash 调用脚本；

注意，; 作用命令分隔系统支持不及 && 良好，可以替换它，或者使用多次 <Enter> 确认命令执行，进行分开处理。

```sh
" Vim Script
"  Execute : F9 (Below code is used in .vimrc file)
:autocmd FileType vim :nmap <F9> :w \| echo "Source ".expand('%')<CR>:so % <Enter>
:autocmd FileType vim :imap <F9> <Esc>:w \| echo "Source ".expand('%')<CR>:so % <Enter>

" Bash script
"  Execute : F9 (Below code is used in .vimrc file)
:autocmd FileType sh :nmap <F9> :w<CR>:!clear <CR> :! bash % <Enter>
:autocmd FileType sh :imap <F9> <Esc>:w<CR>:!clear <CR> :! bash % <Enter>

" python commands
"  Execute : F9 (Below code is used in .vimrc file)
:autocmd FileType python :nmap <F9> :w<CR>:!clear <CR> :! python % <Enter>

" C/C++ commands
" Compile : F9 (Below code is used in .vimrc file)
:autocmd FileType c,cpp :nmap <F9> :! rm -r out <CR> :w<CR>:! g++ % -o out<CR>
" Run : Ctrl+F9 (Below code is used in .vimrc file)
if has('win32')
  :autocmd FileType c,cpp :nmap <C-F9> :!clear <CR> :! .\out.exe<CR>
else
  :autocmd FileType c,cpp :nmap <C-F9> :!clear <CR> :! ./out <CR>
endif
```

Vim 自动化命令 :autocmd 非常强大，可以进行程序设置，根据不同的事件，如 *FileType* 来执行不同的命令，语法如下：

    ==============================================================================
    2. Defining autocommands                *autocmd-define*

    :au[tocmd] [group] {event} {pat} [nested] {cmd}

    ==============================================================================
    3. Removing autocommands                *autocmd-remove*

    :au[tocmd]! [group] {event} {pat} [++once] [++nested] {cmd}
                Remove all autocommands associated with {event} and
                {pat}, and add the command {cmd}.

    :au[tocmd]! [group] {event} {pat}
                Remove all autocommands associated with {event} and
                {pat}.

    :au[tocmd]! [group] * {pat}
                Remove all autocommands associated with {pat} for all
                events.

    :au[tocmd]! [group] {event}
                Remove ALL autocommands for {event}.
                Warning: You should not do this without a group for
                |BufRead| and other common events, it can break
                plugins, syntax highlighting, etc.

    :au[tocmd]! [group] Remove ALL autocommands.

    ==============================================================================
    4. Listing autocommands                 *autocmd-list*

    :au[tocmd] [group] {event} {pat}
                Show the autocommands associated with {event} and
                {pat}.

    :au[tocmd] [group] * {pat}
                Show the autocommands associated with {pat} for all
                events.

    :au[tocmd] [group] {event}
                Show all autocommands for {event}.

    :au[tocmd] [group]  Show all autocommands.


文件类型设置规则可参考内置插件代码：

     cat $VIMRUNTIME/filetype.vim | grep setf

     vim $VIMRUNTIME/filetype.vim

对于 sh 文件，要根据第一行的标注来确定具体文件类型，默认值是 sh。在 filetype.vim 脚本中会调用 *SetFileTypeSH()* 进行分析：

```sh
# dist#ft#SetFileTypeSH()
vim $VIMRUNTIME/autoload/dist/ft.vim
```

当前文件类型可以使用 `:set filetype?` 命令进行查询。


## ==⚡ Vim script version
                                                                    *vimscript-version*
- [Expression evaluation -  10. Vim script](doc/eavl.txt)

在脚本中可以使用 *：scriptversion* 指定一个脚本版本号，不同版本功能上有些差异。最新的 Vim 8.1 具有 version 1 ~ 4，而 NeoVim 0.7 中只提供 version 1。

查询是否具有相应功能，通常使用两个函数： |has()| and |exists()| 

==============================================================================
10. Vim script versions     *vimscript-version* *vimscript-versions*
                            *scriptversion*
Over time many features have been added to Vim script.  This includes Ex
commands, functions, variable types, etc.  Each individual feature can be
checked with the |has()| and |exists()| functions.

Sometimes old syntax of functionality gets in the way of making Vim better.
When support is taken away this will break older Vim scripts.  To make this
explicit the |:scriptversion| command can be used.  When a Vim script is not
compatible with older versions of Vim this will give an explicit error,
instead of failing in mysterious ways.

                            *scriptversion-1*  >
 :scriptversion 1
<   This is the original Vim script, same as not using a |:scriptversion|
    command.  Can be used to go back to old syntax for a range of lines.
    Test for support with: >

        has('vimscript-1')

<                           *scriptversion-2*  >
 :scriptversion 2
<   String concatenation with "." is not supported, use ".." instead.
    This avoids the ambiguity using "." for Dict member access and
    floating point numbers.  Now ".5" means the number 0.5.

                            *scriptversion-3*  >
 :scriptversion 3
<   All |vim-variable|s must be prefixed by "v:".  E.g. "version" doesn't
    work as |v:version| anymore, it can be used as a normal variable.
    Same for some obvious names as "count" and others.
    Test for support with: >

        has('vimscript-3')
<
                            *scriptversion-4*  >
 :scriptversion 4
<   Numbers with a leading zero are not recognized as octal.  With the
    previous version you get: >

        echo 017   " displays 15
        echo 018   " displays 18

<   with script version 4: >

        echo 017   " displays 17
        echo 018   " displays 18

<   Also, it is possible to use single quotes inside numbers to make them
    easier to read: >

        echo 1'000'000

<   The quotes must be surrounded by digits.

    Test for support with: >
        has('vimscript-4')


## ==⚡ Datatypes & Scopes
                                                            *datatypes*
- [Expression evaluation - 1.1 Variable types](doc/eavl.txt)

做为一种脚本语言，Vimscript 的特色是，显式指定变量的作用域。一个变量，需要在名字前加作用域前缀：

- a:var 变量设置为函数参数作用域
- b:var 变量设置为缓冲区级作用域
- g:var 变量设置为全局变量，函数外部变量默认为全局变量
- l:var 变量设置为函数内局部变量，定义于函数内部的变量默认为 local
- s:var 变量设置为 Vim 脚本文件级作用域
- t:var 变量设置为标签页级作用域
- v:var 变量设置为 Vim 专用的全局变量
- w:var 变量设置为窗口级作用域

参考文档 Expression evaluation |internal-variables|

除了 Global 和 Function argument 分别使用 g: a: 前缀，函数参数作用域比较特别。此外，其它均为局部作用域，或者是脚本作用域，或者是缓冲区等等。

```sh
echo  a:                | " All function arguments
echo  b:                | " All buffer variables
echo  g:                | " All global variables
echo  l:                | " All local variables
echo  s:                | " All script variables
echo  t:                | " All tab page variables
echo  v:                | " All Vim variables
echo  w:                | " All window variables

:let i=0 | unlet g:i | echo "Unlet global vaiable i"
:exec "normal I".json_encode(g:) | " Insert global symbol as json
```

作用域决定的变量可以在什么情况下被访问，列如，一个变量会要传递到另一个脚本文件中使用，比较调用其它脚本中的命令，所以不能给它脚本级别的作用域 s: 前缀，这样会导致另一个脚本不能跨过作用域访问其它脚本的 s: 变量。

The numbers, strings and variables mentioned above are expressions by
themselves.  Thus everywhere an expression is expected, you can use a number,
string or variable.  Other basic items in an expression are:

    $NAME       environment variable
    &name       option
    @r          register

Examples: >

    :echo "The value of 'tabstop' is" &ts
    :echo "Your home directory is" $HOME
    :if @a > 5


Vim 8.1 脚本版本为 Script 4，提供下面 10 个分类共 12 种基本数据类型，包括 Special 分类中的 Boolean、None、Null。而常用的 NeoVim 使用 Script 1，则不

    ==============================================================================
    1. Variables                        *variables*

    1.1 Variable types ~
                            *E712* *E896* *E897* *E899*

    There are ten types of variables:

    Number      A 32 or 64 bit signed number.  |expr-number| *Number*
            64-bit Numbers are available only when compiled with the
            |+num64| feature.
            Examples:  -123  0x10  0177  0b1011

    Float       A floating point number. |floating-point-format| *Float*
            {only when compiled with the |+float| feature}
            Examples: 123.456  1.15e-6  -1.1e3

                                *E928*
    String      A NUL terminated string of 8-bit unsigned characters (bytes).
            |expr-string| Examples: "ab\txx\"--"  'x-z''a,c'

    List        An ordered sequence of items, see |List| for details.
            Example: [1, 2, ['a', 'b']]

    Dictionary  An associative, unordered array: Each entry has a key and a
            value. |Dictionary|
            Examples:
                {'blue': "#0000ff", 'red': "#ff0000"}
                #{blue: "#0000ff", red: "#ff0000"}

    Funcref     A reference to a function |Funcref|.
            Example: function("strlen")
            It can be bound to a dictionary and arguments, it then works
            like a Partial.
            Example: function("Callback", [arg], myDict)

    Special     |v:false|, |v:true|, |v:none| and |v:null|.  *Special*

    Job     Used for a job, see |job_start()|. *Job* *Jobs*

    Channel     Used for a channel, see |ch_open()|. *Channel* *Channels*

    Blob        Binary Large Object. Stores any sequence of bytes.  See |Blob|
            for details
            Example: 0zFF00ED015DAF
            0z is an empty Blob.

一个变量的类型可以通过 *type()* 函数查看，例如 :echo type(123) 输出 0 表示数值。

                                *type()*
    type({expr})    The result is a Number representing the type of {expr}.
            Instead of using the number directly, it is better to use the
            v:t_ variable that has the value:
                Number:     0  |v:t_number|
                String:     1  |v:t_string|
                Funcref:    2  |v:t_func|
                List:       3  |v:t_list|
                Dictionary: 4  |v:t_dict|
                Float:      5  |v:t_float|
                Boolean:    6  |v:t_bool| (v:false and v:true)
                None:       7  |v:t_none| (v:null and v:none)
                Job:        8  |v:t_job|
                Channel:    9  |v:t_channel|
                Blob:      10  |v:t_blob|
            For backward compatibility, this method can be used: >
                :if type(myvar) == type(0)
                :if type(myvar) == type("")
                :if type(myvar) == type(function("tr"))
                :if type(myvar) == type([])
                :if type(myvar) == type({})
                :if type(myvar) == type(0.0)
                :if type(myvar) == type(v:false)
                :if type(myvar) == type(v:none)
    <       To check if the v:t_ variables exist use this: >
                :if exists('v:t_number')

    <       Can also be used as a |method|: >
                mylist->type()


字符串和数字之间会进行自动转换，官方的几个例子：

    String "456" --> Number 456
    String "6bar" --> Number 6
    String "foo" --> Number 0
    String "0xf1" --> Number 241
    String "0100" --> Number 64
    String "0b101" --> Number 5
    String "-8" --> Number -8
    String "+8" --> Number 0

"foo" 和 "+8" 都被转换成 0 这些 case 的特殊，八进制 "0100" 的情况，要注意不成功能转换的结果。

为了避免出现八进制转换的问题，使用 str2nr 函数来做显示转换，它默认使用 10 进制。

    :echo 0100  | "result is 64
    :echo str2nr("0100") | "result is 100

Vim Script 使用 0 表示 False，其余数值均表示 True，分别对应 v:false 和 v:true 两个 Vim 专用的全局变量。


## ==⚡ Numbers
                                                *Numbers*

参考 2. Expression syntax                    *expression-syntax*


number          number constant         *expr-number*
                *hex-number* *octal-number* *binary-number*

Decimal, Hexadecimal (starting with 0x or 0X), Binary (starting with 0b or 0B)
and Octal (starting with 0).

                        *floating-point-format*
Floating point numbers can be written in two forms:

    [-+]{N}.{M}
    [-+]{N}.{M}[eE][-+]{exp}

{N} and {M} are numbers.  Both {N} and {M} must be present and can only
contain digits.
[-+] means there is an optional plus or minus sign.
{exp} is the exponent, power of 10.
Only a decimal point is accepted, not a comma.  No matter what the current
locale is.
{only when compiled with the |+float| feature}

Examples:

    123.456
    +0.0001
    55.0
    -0.123
    1.234e03
    1.0E-6
    -3.1416e+88

These are INVALID:

    3.      empty {M}
    1e40    missing .{M}

Rationale:
Before floating point was introduced, the text "123.456" was interpreted as
the two numbers "123" and "456", both converted to a string and concatenated,
resulting in the string "123456".  Since this was considered pointless, and we
could not find it intentionally being used in Vim scripts, this backwards
incompatibility was accepted in favor of being able to use the normal notation
for floating point numbers.

                            *float-pi* *float-e*
A few useful values to copy&paste: >

    :let pi = 3.14159265359
    :let e  = 2.71828182846

Or, if you don't want to write them in as floating-point literals, you can
also use functions, like the following: >

    :let pi = acos(-1.0)
    :let e  = exp(1.0)
<
                        *floating-point-precision*
The precision and range of floating points numbers depends on what "double"
means in the library Vim was compiled with.  There is no way to change this at
runtime.

The default for displaying a |Float| is to use 6 decimal places, like using
printf("%g", f).  You can select something else when using the |printf()|
function.  Example: >

    :echo printf('%.15e', atan(1))
<   7.853981633974483e-01



## ==⚡ Strings
                                                *Strings*

参考 2. Expression syntax                    *expression-syntax*

|expr4| expr5
    expr5 == expr5      equal
    expr5 != expr5      not equal
    expr5 >  expr5      greater than
    expr5 >= expr5      greater than or equal
    expr5 <  expr5      smaller than
    expr5 <= expr5      smaller than or equal
    expr5 =~ expr5      regexp matches
    expr5 !~ expr5      regexp doesn't match

    expr5 ==? expr5     equal, ignoring case
    expr5 ==# expr5     equal, match case
    etc.            As above, append ? for ignoring case, # for
                matching case

    expr5 is expr5      same |List|, |Dictionary| or |Blob| instance
    expr5 isnot expr5   different |List|, |Dictionary| or |Blob|
                instance

|expr5| expr6
    expr6 +  expr6 ...  number addition, list or blob concatenation
    expr6 -  expr6 ...  number subtraction
    expr6 .  expr6 ...  string concatenation
    expr6 .. expr6 ...  string concatenation



|expr9| number          number constant
    "string"        string constant, backslash is special
    'string'        string constant, ' is doubled


字符串可以使用单引或双引号包括，单引号不会进行字符转义。

```sh
:echo "A newline \n"
:echo 'No newline \n'
```

"string"        string constant     *expr-quote*

Note that double quotes are used.

A string constant accepts these special characters:

\...    three-digit octal number (e.g., "\316")
\..     two-digit octal number (must be followed by non-digit)
\.      one-digit octal number (must be followed by non-digit)
\x..    byte specified with two hex numbers (e.g., "\x1f")
\x.     byte specified with one hex number (must be followed by non-hex char)
\X..    same as \x..
\X.     same as \x.
\u....  character specified with up to 4 hex numbers, stored according to the
        current value of 'encoding' (e.g., "\u02a4")
\U....  same as \u but allows up to 8 hex numbers.
\b      backspace <BS>
\e      escape <Esc>
\f      formfeed <FF>
\n      newline <NL>
\r      return <CR>
\t      tab <Tab>
\\      backslash
\"      double quote
\<xxx>  Special key named "xxx".  e.g. "\<C-W>" for CTRL-W.  This is for use
        in mappings, the 0x80 byte is escaped.
        To use the double quote character it must be escaped: "<M-\">".
        Don't use <Char-xxxx> to get a utf-8 character, use \uxxxx as
        mentioned above.

Note that "\xff" is stored as the byte 255, which may be invalid in some
encodings.  Use "\u00ff" to store character 255 according to the current value
of 'encoding'.

Note that "\000" and "\x00" force the end of the string.



String Conditionals and Operators

<string> == <string>: String equals.
<string> != <string>: String does not equal.
<string> =~ <pattern>: String matches pattern.
<string> !~ <pattern>: String doesn’t match pattern.
<operator>#: Additionally match case.
<operator>?: Additionally don’t match case.

Note: Vim option ignorecase sets default case sensitivity for == and != operators. Add ? or # to the end of the operator to match based on a case or not.

<string> . <string>: Concatenate two strings.

    :function! TrueFalse(arg)
    :   return a:arg? "true" : "false"
    :endfunction

    :echo TrueFalse("X start" =~ 'X$')
    false
    :echo TrueFalse("end X" =~ 'X$')
    true
    :echo TrueFalse("end x" =~# 'X$')
    false


## ==⚡ Lists
                                                *list* *List* *Lists* *E686*
- [Expression evaluation - 1.3 Lists](doc/eavl.txt)

Tags Contents

- List creation                                 |list-create| |E696| |E697|
- List index                                    |list-index| |E684|
- Sublist                                       |list-sublist| |sublist|
- List identity                                 |list-identity|
- List unpack                                   |list-unpack|
- List modification                             |list-modification|
- List functions                                |list-functions| |E714|
- For loop                                      |For-loop|


List creation                                   *list-create* *E696* *E697*

列表类型 List 可以混杂保存各种元素在一个列表中：

    :let b:emptylist = []
    :let b:nestedlist = [[1,2],['a','b']]
    :let b:list1 = [1, 4.1e+3, "Hello", [1,2]]

    :let mylist = [1, two, 3, "four"]
    :let emptylist = []

List index                                      *list-index* *E684*

    :echo b:list1[0]    | "the 1st element
    :echo b:list1[-1]   | "the last element

    :echo b:list1[2]                | "E684 list index out of range
    :echo get(b:list1, 2)           | "return 0
    :echo get(b:list1, 2, "NONE")   | "return "NONE"

访问可能不存在的列表元素时，可以使用 get() 函数，它不会出异常，而是返回一个 0 或者指定值表示不存在。

List concatenation                              *list-concat* *E684*

Two lists can be concatenated with the "+" operator: >

    :let longlist = mylist + [5, 6]
    :let mylist += [7, 8]

Sublist                                         *list-sublist* *sublist*

    :let shortlist = mylist[2:-1]      |" get List [3, "four"]

Omitting the first index is similar to zero.  Omitting the last index is
similar to -1. >

    :let endlist = mylist[2:]          |" from item 2 to the end: [3, "four"]
    :let shortlist = mylist[2:2]       |" List with one item: [3]
    :let otherlist = mylist[:]         |" make a copy of the List

If the first index is beyond the last item of the List or the second item is
before the first item, the result is an empty list.  There is no error
message.

If the second index is equal to or greater than the length of the list the
length minus one is used: >

    :let mylist = [0, 1, 2, 3]
    :echo mylist[2:8]                  |" result: [2, 3]


List identity                                   *list-identity*

列表在内存中的特性：

- 为了避免内存操作，列表直接赋值是等价的、非拷贝，是同一引用；
- 可以调用 *copy()* 和 *deepcopy()* 进行浅拷贝或深拷贝；
- 使用 *is* 运算符判断等价性，使用 *==* 判断等值性；
- 使用 *==* 运算符判断有个特殊情况，元素中数值与字符串不等价，即使通常 1 == "1" 判断为等价；

When variable "aa" is a list and you assign it to another variable "bb", both
variables refer to the same list.  Thus changing the list "aa" will also
change "bb": >

    :let aa = [1, 2, 3]
    :let bb = aa
    :call add(aa, 4)
    :echo bb
<   [1, 2, 3, 4]

Making a copy of a list is done with the |copy()| function.  Using [:] also
works, as explained above.  This creates a shallow copy of the list: Changing

a list item in the list will also change the item in the copied list: >

    :let aa = [[1, 'a'], 2, 3]
    :let bb = copy(aa)
    :call add(aa, 4)
    :let aa[0][1] = 'aaa'
    :echo aa
<   [[1, aaa], 2, 3, 4] >

    :echo bb
<   [[1, aaa], 2, 3]

To make a completely independent list use |deepcopy()|.  This also makes a
copy of the values in the list, recursively.  Up to a hundred levels deep.

The operator "is" can be used to check if two variables refer to the same
List.  "isnot" does the opposite.  In contrast "==" compares if two lists have
the same value. >

    :let alist = [1, 2, 3]
    :let blist = [1, 2, 3]
    :echo alist is blist
<   0 >

    :echo alist == blist
<   1

Note about comparing lists: Two lists are considered equal if they have the
same length and all items compare equal, as with using "==".  There is one
exception: When comparing a number with a string they are considered
different.  There is no automatic type conversion, as with using "==" on
variables.  Example: >

    echo 4 == "4"
<   1 >
    echo [4] == ["4"]
<   0

Thus comparing Lists is more strict than comparing numbers and strings.  You
can compare simple values this way too by putting them in a list: >

    :let a = 5
    :let b = "5"
    :echo a == b
<   1 >
    :echo [a] == [b]
<   0


List unpack                                     *list-unpack*

To unpack the items in a list to individual variables, put the variables in
square brackets, like list items: >

    :let [var1, var2] = mylist

When the number of variables does not match the number of items in the list
this produces an error.  To handle any extra items from the list append ";"
and a variable name: >

    :let [var1, var2; rest] = mylist

This works like: >

    :let var1 = mylist[0]
    :let var2 = mylist[1]
    :let rest = mylist[2:]

Except that there is no error if there are only two items.  "rest" will be an
empty list then.


List modification                               *list-modification*

To change a specific item of a list use |:let| this way: >

    :let list[4] = "four"
    :let listlist[0][3] = item

To change part of a list you can specify the first and last item to be
modified.  The value must at least have the number of items in the range: >

    :let list[3:5] = [3, 4, 5]

Adding and removing items from a list is done with functions.  Here are a few
examples: >

    :call insert(list, 'a')     " prepend item 'a'
    :call insert(list, 'a', 3)  " insert item 'a' before list[3]
    :call add(list, "new")      " append String item
    :call add(list, [1, 2])     " append a List as one new item
    :call extend(list, [1, 2])  " extend the list with two more items
    :let i = remove(list, 3)    " remove item 3
    :unlet list[3]          " idem
    :let l = remove(list, 3, -1)    " remove items 3 to last item
    :unlet list[3 : ]       " idem
    :call filter(list, 'v:val !~ "x"')  " remove items with an 'x'

Changing the order of items in a list: >

    :call sort(list)        " sort a list alphabetically
    :call reverse(list)     " reverse the order of items
    :call uniq(sort(list))      " sort and remove duplicates

For loop ~
                                                            *For-loop*

The |:for| loop executes commands for each item in a |List|, |String| or |Blob|.
A variable is set to each item in sequence.  Example with a List: >

    :for item in mylist
    :   call Doit(item)
    :endfor

This works like: >

    :let index = 0
    :while index < len(mylist)
    :   let item = mylist[index]
    :   :call Doit(item)
    :   let index = index + 1
    :endwhile

If all you want to do is modify each item in the list then the |map()|
function will be a simpler method than a for loop.

Just like the |:let| command, |:for| also accepts a list of variables.  This
requires the argument to be a List of Lists. >

    :for [lnum, col] in [[1, 3], [2, 8], [3, 0]]
    :   call Doit(lnum, col)
    :endfor

This works like a |:let| command is done for each list item.  Again, the types
must remain the same to avoid an error.

It is also possible to put remaining items in a List variable: >

    :for [i, j; rest] in listlist
    :   call Doit(i, j)
    :   if !empty(rest)
    :      echo "remainder: " .. string(rest)
    :   endif
    :endfor

For a Blob one byte at a time is used.

For a String one character, including any composing characters, is used as a
String.  Example: >

    for c in text
      echo 'This character is ' .. c
    endfor


List functions ~
                                                            *list-functions*
                        *E714*
Functions that are useful with a List: >

```sh
:let r = call(funcname, list)       "" # call a function with an argument list
:if empty(list)                     "" # check if list is empty
:let l = len(list)                  "" # number of items in list
:let big = max(list)                "" # maximum value in list
:let small = min(list)              "" # minimum value in list
:let xs = count(list, 'x')          "" # count nr of times 'x' appears in list
:let i = index(list, 'x')           "" # index of first 'x' in list
:let lines = getline(1, 10)         "" # get ten text lines from buffer
:call append('$', lines)            "" # append text lines in buffer
:let list = split("a b c")          "" # create list from items in a string
:let string = join(list, ', ')      "" # create string from list items
:let s = string(list)               "" # String representation of list
:call map(list, '">> " .. v:val')   "" # prepend ">> " to each item
```

Don't forget that a combination of features can make things simple.  For
example, to add up all the numbers in a list: >

    :exe 'let sum = ' .. join(nrlist, '+')


## ==⚡ Dictionaries
                                                                    *Dictionaries*
- [Expression evaluation - 1.4 Dictionaries](doc/eavl.txt)

- Dictionary creation                       *dict-creation*
- Accessing entries                         *dict-accessing*
- Dictionary to List conversion             *dict-to-list*
- Dictionary identity                       *dict-identity*
- Dictionary modification                   *dict-modification*
- Dictionary function                       *Dictionary-function*
- Functions for Dictionaries                *dict-functions*

字典就是通过哈希函数实现的一种快速查找和插入数据的结构，非常高效，O(1) 时间复杂度。

可以为字典对象创建函数方法，字典复制和 list 同样要使用 copy 和 deepcopy 函数。

A Dictionary is an associative array: Each entry has a key and a value.  The
entry can be located with the key.  The entries are stored without a specific
ordering.


Dictionary creation ~
                        *E720* *E721* *E722* *E723* *dict-creation*
A Dictionary is created with a comma separated list of entries in curly
braces.  Each entry has a key and a value, separated by a colon.  Each key can
only appear once.  Examples: >

    :let mydict = {1: 'one', 2: 'two', 3: 'three'}
    :let emptydict = {}
<                           *E713* *E716* *E717*
A key is always a String.  You can use a Number, it will be converted to a
String automatically.  Thus the String '4' and the number 4 will find the same
entry.  Note that the String '04' and the Number 04 are different, since the
Number will be converted to the String '4'.  The empty string can also be used
as a key.
                        *literal-Dict* *#{}*
To avoid having to put quotes around every key the #{} form can be used.  This
does require the key to consist only of ASCII letters, digits, - and _ .
Example: >

    let mydict = #{zero: 0, one_key: 1, two-key: 2, 333: 3}

Note that 333 here is the string "333".  Empty keys are not possible with #{}.

A value can be any expression.  Using a Dictionary for a value creates a
nested Dictionary: >

    :let nestdict = {1: {11: 'a', 12: 'b'}, 2: {21: 'c'}}

An extra comma after the last entry is ignored.



Accessing entries ~                                         *dict-accessing*
The normal way to access an entry is by putting the key in square brackets: >

    :let val = mydict["one"]
    :let mydict["four"] = 4

You can add new entries to an existing Dictionary this way, unlike Lists.

For keys that consist entirely of letters, digits and underscore the following
form can be used |expr-entry|: >

    :let val = mydict.one
    :let mydict.four = 4

Since an entry can be any type, also a List and a Dictionary, the indexing and
key lookup can be repeated: >

    :echo dict.key[idx].key


Dictionary to List conversion ~                             *dict-to-list*
You may want to loop over the entries in a dictionary.  For this you need to
turn the Dictionary into a List and pass it to |:for|.

Most often you want to loop over the keys, using the |keys()| function: >

    :for key in keys(mydict)
    :   echo key . ': ' . mydict[key]
    :endfor

The List of keys is unsorted.  You may want to sort them first: >

    :for key in sort(keys(mydict))

To loop over the values use the |values()| function:  >

    :for v in values(mydict)
    :   echo "value: " . v
    :endfor

If you want both the key and the value use the |items()| function.  It returns
a List in which each item is a List with two items, the key and the value: >

    :for [key, value] in items(mydict)
    :   echo key . ': ' . value
    :endfor


Dictionary identity ~                                       *dict-identity*

Just like Lists you need to use |copy()| and |deepcopy()| to make a copy of a
Dictionary.  Otherwise, assignment results in referring to the same
Dictionary: >

    :let onedict = {'a': 1, 'b': 2}
    :let adict = onedict
    :let adict['a'] = 11
    :echo onedict['a']
    11

Two Dictionaries compare equal if all the key-value pairs compare equal.  For
more info see |list-identity|.


Dictionary modification ~                                   *dict-modification*

To change an already existing entry of a Dictionary, or to add a new entry,
use |:let| this way: >

    :let dict[4] = "four"
    :let dict['one'] = item

Removing an entry from a Dictionary is done with |remove()| or |:unlet|.
Three ways to remove the entry with key "aaa" from dict: >

    :let i = remove(dict, 'aaa')
    :unlet dict.aaa
    :unlet dict['aaa']

Merging a Dictionary with another is done with |extend()|: >

    :call extend(adict, bdict)

This extends adict with all entries from bdict.  Duplicate keys cause entries
in adict to be overwritten.  An optional third argument can change this.
Note that the order of entries in a Dictionary is irrelevant, thus don't
expect ":echo adict" to show the items from bdict after the older entries in
adict.

Weeding out entries from a Dictionary can be done with |filter()|: >

    :call filter(dict, 'v:val =~ "x"')

This removes all entries from "dict" with a value not matching 'x'.

Dictionary function                 *Dictionary-function* *self* *E725* *E862*
When a function is defined with the "dict" attribute it can be used in a
special way with a dictionary.  Example: >

    :function Mylen() dict
    :   return len(self.data)
    :endfunction
    :let mydict = {'data': [0, 1, 2, 3], 'len': function("Mylen")}
    :echo mydict.len()

This is like a method in object oriented programming.  The entry in the
Dictionary is a |Funcref|.  The local variable "self" refers to the dictionary
the function was invoked from.

It is also possible to add a function without the "dict" attribute as a
Funcref to a Dictionary, but the "self" variable is not available then.

                *numbered-function* *anonymous-function*
To avoid the extra name for the function it can be defined and directly
assigned to a Dictionary in this way: >

    :let mydict = {'data': [0, 1, 2, 3]}
    :function mydict.len()
    :   return len(self.data)
    :endfunction
    :echo mydict.len()

The function will then get a number and the value of dict.len is a |Funcref|
that references this function.  The function can only be used through a
|Funcref|.  It will automatically be deleted when there is no |Funcref|
remaining that refers to it.

It is not necessary to use the "dict" attribute for a numbered function.

If you get an error for a numbered function, you can find out what it is with
a trick.  Assuming the function is 42, the command is: >
    :function {42}


Functions for Dictionaries ~                               *dict-functions*
Functions that can be used with a Dictionary: >

    :if has_key(dict, 'foo')    " TRUE if dict has entry with key "foo"
    :if empty(dict)         " TRUE if dict is empty
    :let l = len(dict)      " number of items in dict
    :let big = max(dict)        " maximum value in dict
    :let small = min(dict)      " minimum value in dict
    :let xs = count(dict, 'x')  " count nr of times 'x' appears in dict
    :let s = string(dict)       " String representation of dict
    :call map(dict, '">> " . v:val')  " prepend ">> " to each item


## ==⚡ Function references
                                                                    *Funcref*
- [Expression evaluation - 1.2 Function references](doc/eavl.txt)

A Funcref variable is obtained with the |function()| function, the |funcref()|
function or created with the lambda expression |expr-lambda|.  It can be used
in an expression in the place of a function name, before the parenthesis
around the arguments, to invoke the function it refers to.  Example: >

    :let Fn = function("MyFunc")
    :echo Fn()
<                           *E704* *E705* *E707*
A Funcref variable must start with a capital, "s:", "w:", "t:" or "b:".  You
can use "g:" but the following name must still start with a capital.  You
cannot have both a Funcref variable and a function with the same name.

A special case is defining a function and directly assigning its Funcref to a
Dictionary entry.  Example: >

    :function dict.init() dict
    :   let self.val = 0
    :endfunction

The key of the Dictionary can start with a lower case letter.  The actual
function name is not used here.  Also see |numbered-function|.

A Funcref can also be used with the |:call| command: >
    :call Fn()
    :call dict.init()

The name of the referenced function can be obtained with |string()|. >
    :let func = string(Fn)

You can use |call()| to invoke a Funcref and use a list variable for the
arguments: >
    :let r = call(Fn, mylist)
<
                                *Partial*
A Funcref optionally binds a Dictionary and/or arguments.  This is also called
a Partial.  This is created by passing the Dictionary and/or arguments to
function() or funcref().  When calling the function the Dictionary and/or
arguments will be passed to the function.  Example: >

    let Cb = function('Callback', ['foo'], myDict)
    call Cb('bar')

This will invoke the function as if using: >
    call myDict.Callback('foo', 'bar')

This is very useful when passing a function around, e.g. in the arguments of
|ch_open()|.

Note that binding a function to a Dictionary also happens when the function is
a member of the Dictionary: >

    let myDict.myFunction = MyFunction
    call myDict.myFunction()

Here MyFunction() will get myDict passed as "self".  This happens when the
"myFunction" member is accessed.  When making assigning "myFunction" to
otherDict and calling it, it will be bound to otherDict: >

    let otherDict.myFunction = myDict.myFunction
    call otherDict.myFunction()

Now "self" will be "otherDict".  But when the dictionary was bound explicitly
this won't happen: >

    let myDict.myFunction = function(MyFunction, myDict)
    let otherDict.myFunction = myDict.myFunction
    call otherDict.myFunction()

Here "self" will be "myDict", because it was bound explicitly.



## ==⚡ lambda expression

参考 2. Expression syntax                    *expression-syntax*

lambda expression               *expr-lambda* *lambda*
{args -> expr1}     lambda expression

A lambda expression creates a new unnamed function which returns the result of
evaluating |expr1|.  Lambda expressions differ from |user-functions| in
the following ways:

1. The body of the lambda expression is an |expr1| and not a sequence of |Ex|
   commands.
2. The prefix "a:" should not be used for arguments.  E.g.: >

    :let F = {arg1, arg2 -> arg1 - arg2}
    :echo F(5, 2)
<   3

The arguments are optional.  Example: >

    :let F = {-> 'error function'}
    :echo F()
<   error function
                            *closure*
Lambda expressions can access outer scope variables and arguments.  This is
often called a closure.  Example where "i" and "a:arg" are used in a lambda
while they already exist in the function scope.  They remain valid even after
the function returns: >

    :function Foo(arg)
    :  let i = 3
    :  return {x -> x + i - a:arg}
    :endfunction
    :let Bar = Foo(4)
    :echo Bar(6)
<   5

Note that the variables must exist in the outer scope before the lamba is
defined for this to work.  See also |:func-closure|.

Lambda and closure support can be checked with: >

    if has('lambda')

Examples for using a lambda expression with |sort()|, |map()| and |filter()|: >

    :echo map([1, 2, 3], {idx, val -> val + 1})
<   [2, 3, 4] >
    :echo sort([3,7,2,1,4], {a, b -> a - b})
<   [1, 2, 3, 4, 7]

The lambda expression is also useful for Channel, Job and timer: >

    :let timer = timer_start(500,
            \ {-> execute("echo 'Handler called'", "")},
            \ {'repeat': 3})
<   Handler called
    Handler called
    Handler called

Note how execute() is used to execute an Ex command.  That's ugly though.


Lambda expressions have internal names like '<lambda>42'.  If you get an error
for a lambda expression, you can find what it is with the following command: >

    :function {'<lambda>42'}

See also: |numbered-function|


## ==⚡ Blobs
                                                                    *Blobs*
- [Expression evaluation - 1.5 Blobs](doc/eavl.txt)

- Blob creation                                         |blob-creation|
- Blob index                                            |blob-index|
- Blob iteration                                        |blob-iteration|
- Blob concatenation                                    |blob-concatenation|
- Part of a blob                                        |part-of-a-blob|
- Blob modification                                     |blob-modification|
- Blob identity                                         |blob-identity|

A Blob is a binary object.  It can be used to read an image from a file and
send it over a channel, for example.

A Blob mostly behaves like a |List| of numbers, where each number has the
value of an 8-bit byte, from 0 to 255.


Blob creation                                           *blob-creation*

A Blob can be created with a |blob-literal|: >

    :let b = 0zFF00ED015DAF
Dots can be inserted between bytes (pair of hex characters) for readability,
they don't change the value: >

    :let b = 0zFF00.ED01.5DAF

A blob can be read from a file with |readfile()| passing the {type} argument
set to "B", for example: >

    :let b = readfile('image.png', 'B')

A blob can be read from a channel with the |ch_readblob()| function.


Blob index                                          *blob-index* *E979*

A byte in the Blob can be accessed by putting the index in square brackets
after the Blob.  Indexes are zero-based, thus the first byte has index zero. >

    :let myblob = 0z00112233
    :let byte = myblob[0]       " get the first byte: 0x00
    :let byte = myblob[2]       " get the third byte: 0x22

A negative index is counted from the end.  Index -1 refers to the last byte in
the Blob, -2 to the last but one byte, etc. >

    :let last = myblob[-1]      " get the last byte: 0x33

To avoid an error for an invalid index use the |get()| function.  When an item
is not available it returns -1 or the default value you specify: >

    :echo get(myblob, idx)
    :echo get(myblob, idx, 999)


Blob iteration                                      *blob-iteration*

The |:for| loop executes commands for each byte of a Blob.  The loop variable is
set to each byte in the Blob.  Example: >

    :for byte in 0z112233
    :   call Doit(byte)
    :endfor

This calls Doit() with 0x11, 0x22 and 0x33.


Blob concatenation                                  *blob-concatenation*

Two blobs can be concatenated with the "+" operator: >

    :let longblob = myblob + 0z4455
    :let myblob += 0z6677

To change a blob in-place see |blob-modification| below.


Part of a blob                                      *part-of-a-blob*

A part of the Blob can be obtained by specifying the first and last index,
separated by a colon in square brackets: >

    :let myblob = 0z00112233
    :let shortblob = myblob[1:2]    " get 0z1122
    :let shortblob = myblob[2:-1]   " get 0z2233

Omitting the first index is similar to zero.  Omitting the last index is
similar to -1. >

    :let endblob = myblob[2:]   " from item 2 to the end: 0z2233
    :let shortblob = myblob[2:2]    " Blob with one byte: 0z22
    :let otherblob = myblob[:]  " make a copy of the Blob

If the first index is beyond the last byte of the Blob or the second index is
before the first index, the result is an empty Blob.  There is no error
message.

If the second index is equal to or greater than the length of the list the
length minus one is used: >

    :echo myblob[2:8]       " result: 0z2233


Blob modification                                       *blob-modification*

To change a specific byte of a blob use |:let| this way: >

    :let blob[4] = 0x44

When the index is just one beyond the end of the Blob, it is appended. Any
higher index is an error.

To change a sequence of bytes the [:] notation can be used: >

    let blob[1:3] = 0z445566

The length of the replaced bytes must be exactly the same as the value
provided. *E972*

To change part of a blob you can specify the first and last byte to be
modified.  The value must have the same number of bytes in the range: >

    :let blob[3:5] = 0z334455

You can also use the functions |add()|, |remove()| and |insert()|.


Blob identity                                           *blob-identity*

Blobs can be compared for equality: >

    if blob == 0z001122

And for equal identity: >

    if blob is otherblob

<                           *blob-identity* *E977*
When variable "aa" is a Blob and you assign it to another variable "bb", both
variables refer to the same Blob.  Then the "is" operator returns true.

When making a copy using [:] or |copy()| the values are the same, but the
identity is different: >

    :let blob = 0z112233
    :let blob2 = blob
    :echo blob == blob2
<   1 >
    :echo blob is blob2
<   1 >
    :let blob3 = blob[:]
    :echo blob == blob3
<   1 >
    :echo blob is blob3
<   0

Making a copy of a Blob is done with the |copy()| function.  Using [:] also
works, as explained above.


## ==⚡ More about variables
                                                                    *more-variables*
- [Expression evaluation - 1.6 More about variables](doc/eavl.txt)

If you need to know the type of a variable or expression, use the |type()|
function.

When the '!' flag is included in the 'viminfo' option, global variables that
start with an uppercase letter, and don't contain a lowercase letter, are
stored in the viminfo file |viminfo-file|.

When the 'sessionoptions' option contains "global", global variables that
start with an uppercase letter and contain at least one lowercase letter are
stored in the session file |session-file|.

    variable name | can be stored where ~
    ==============|======================
    my_var_6      | not
    My_Var_6      | session file
    MY_VAR_6      | viminfo file


It's possible to form a variable name with curly braces, see
|curly-braces-names|.


## ==⚡ Expression syntax
                                                                    *expression-syntax*
- [Expression evaluation -  2.  Expression syntax](doc/eavl.txt)

Expression syntax summary, from least to most significant:

|expr1| expr2
    expr2 ? expr1 : expr1   if-then-else

|expr2| expr3
    expr3 || expr3 ...  logical OR

|expr3| expr4
    expr4 && expr4 ...  logical AND

|expr4| expr5
    expr5 == expr5      equal
    expr5 != expr5      not equal
    expr5 >  expr5      greater than
    expr5 >= expr5      greater than or equal
    expr5 <  expr5      smaller than
    expr5 <= expr5      smaller than or equal
    expr5 =~ expr5      regexp matches
    expr5 !~ expr5      regexp doesn't match

    expr5 ==? expr5     equal, ignoring case
    expr5 ==# expr5     equal, match case
    etc.            As above, append ? for ignoring case, # for
                matching case

    expr5 is expr5      same |List|, |Dictionary| or |Blob| instance
    expr5 isnot expr5   different |List|, |Dictionary| or |Blob|
                instance

|expr5| expr6
    expr6 +  expr6 ...  number addition, list or blob concatenation
    expr6 -  expr6 ...  number subtraction
    expr6 .  expr6 ...  string concatenation
    expr6 .. expr6 ...  string concatenation

|expr6| expr7
    expr7 *  expr7 ...  number multiplication
    expr7 /  expr7 ...  number division
    expr7 %  expr7 ...  number modulo

|expr7| expr8
    ! expr7         logical NOT
    - expr7         unary minus
    + expr7         unary plus

|expr8| expr9
    expr8[expr1]        byte of a String or item of a |List|
    expr8[expr1 : expr1]    substring of a String or sublist of a |List|
    expr8.name      entry in a |Dictionary|
    expr8(expr1, ...)   function call with |Funcref| variable
    expr8->name(expr1, ...) |method| call

|expr9| number          number constant
    "string"        string constant, backslash is special
    'string'        string constant, ' is doubled
    [expr1, ...]        |List|
    {expr1: expr1, ...} |Dictionary|
    #{key: expr1, ...}  |Dictionary|
    &option         option value
    (expr1)         nested expression
    variable        internal variable
    va{ria}ble      internal variable with curly braces
    $VAR            environment variable
    @r          contents of register 'r'
    function(expr1, ...)    function call
    func{ti}on(expr1, ...)  function call with curly braces
    {args -> expr1}     lambda expression


"..." indicates that the operations in this level can be concatenated.
Example: >
    &nu || &list && &shell == "csh"

All expressions within one level are parsed from left to right.


## ==⚡ Internal variable
                                                                    *internal-variables*
- [Expression evaluation -  3.  Internal variable](doc/eavl.txt)

- Name Spaces for Variables
- Predefined Vim Variables            |vim-variable| |v:var| |v:|


An internal variable name can be made up of letters, digits and _ .  But it
cannot start with a digit.  It's also possible to use curly braces, see
|curly-braces-names|.

An internal variable is created with the ":let" command |:let|.
An internal variable is explicitly destroyed with the ":unlet" command
|:unlet|.
Using a name that is not an internal variable or refers to a variable that has
been destroyed results in an error.

There are several name spaces for variables.  Which one is to be used is
specified by what is prepended:

        (nothing) In a function: local to a function; otherwise: global
|buffer-variable|    b:   Local to the current buffer.
|window-variable|    w:   Local to the current window.
|tabpage-variable|   t:   Local to the current tab page.
|global-variable|    g:   Global.
|local-variable|     l:   Local to a function.
|script-variable|    s:   Local to a |:source|'ed Vim script.
|function-argument|  a:   Function argument (only inside a function).
|vim-variable|       v:   Global, predefined by Vim.

The scope name by itself can be used as a |Dictionary|.  For example, to
delete all script-local variables: >

    :for k in keys(s:)
    :    unlet s:[k]
    :endfor
<
                        *buffer-variable* *b:var* *b:*
A variable name that is preceded with "b:" is local to the current buffer.
Thus you can have several "b:foo" variables, one for each buffer.
This kind of variable is deleted when the buffer is wiped out or deleted with
|:bdelete|.

One local buffer variable is predefined:
                    *b:changedtick* *changetick*
b:changedtick   The total number of changes to the current buffer.  It is
        incremented for each change.  An undo command is also a change
        in this case.  Resetting 'modified' when writing the buffer is
        also counted.
        This can be used to perform an action only when the buffer has
        changed.  Example: >
            :if my_changedtick != b:changedtick
            :   let my_changedtick = b:changedtick
            :   call My_Update()
            :endif
<       You cannot change or delete the b:changedtick variable.

                        *window-variable* *w:var* *w:*
A variable name that is preceded with "w:" is local to the current window.  It
is deleted when the window is closed.

                        *tabpage-variable* *t:var* *t:*
A variable name that is preceded with "t:" is local to the current tab page,
It is deleted when the tab page is closed. {not available when compiled
without the |+windows| feature}

                        *global-variable* *g:var* *g:*
Inside functions global variables are accessed with "g:".  Omitting this will
access a variable local to a function.  But "g:" can also be used in any other
place if you like.

                        *local-variable* *l:var* *l:*
Inside functions local variables are accessed without prepending anything.
But you can also prepend "l:" if you like.  However, without prepending "l:"
you may run into reserved variable names.  For example "count".  By itself it
refers to "v:count".  Using "l:count" you can have a local variable with the
same name.

                        *script-variable* *s:var*
In a Vim script variables starting with "s:" can be used.  They cannot be
accessed from outside of the scripts, thus are local to the script.

They can be used in:
- commands executed while the script is sourced
- functions defined in the script
- autocommands defined in the script
- functions and autocommands defined in functions and autocommands which were
  defined in the script (recursively)
- user defined commands defined in the script
Thus not in:
- other scripts sourced from this one
- mappings
- menus
- etc.

Script variables can be used to avoid conflicts with global variable names.
Take this example: >

    let s:counter = 0
    function MyCounter()
      let s:counter = s:counter + 1
      echo s:counter
    endfunction
    command Tick call MyCounter()

You can now invoke "Tick" from any script, and the "s:counter" variable in
that script will not be changed, only the "s:counter" in the script where
"Tick" was defined is used.

Another example that does the same: >

    let s:counter = 0
    command Tick let s:counter = s:counter + 1 | echo s:counter

When calling a function and invoking a user-defined command, the context for
script variables is set to the script where the function or command was
defined.

The script variables are also available when a function is defined inside a
function that is defined in a script.  Example: >

    let s:counter = 0
    function StartCounting(incr)
      if a:incr
        function MyCounter()
          let s:counter = s:counter + 1
        endfunction
      else
        function MyCounter()
          let s:counter = s:counter - 1
        endfunction
      endif
    endfunction

This defines the MyCounter() function either for counting up or counting down
when calling StartCounting().  It doesn't matter from where StartCounting() is
called, the s:counter variable will be accessible in MyCounter().

When the same script is sourced again it will use the same script variables.
They will remain valid as long as Vim is running.  This can be used to
maintain a counter: >

    if !exists("s:counter")
      let s:counter = 1
      echo "script executed for the first time"
    else
      let s:counter = s:counter + 1
      echo "script executed " . s:counter . " times now"
    endif

Note that this means that filetype plugins don't get a different set of script
variables for each buffer.  Use local buffer variables instead |b:var|.

Predefined Vim Variables            *vim-variable* *v:var* *v:* *E963*

    |v:argv|                |argv-variable|
    |v:beval_col|           |beval_col-variable|
    |v:beval_bufnr|         |beval_bufnr-variable|
    |v:beval_lnum|          |beval_lnum-variable|
    |v:beval_text| |        beval_text-variable|
    |v:beval_winnr|         |beval_winnr-variable|
    |v:beval_winid|         |beval_winid-variable|
    |v:char|                |char-variable|
    |v:charconvert_from|    |charconvert_from-variable|
    |v:charconvert_to|      |charconvert_to-variable|
    |v:cmdarg|              |cmdarg-variable|
    |v:cmdbang|             |cmdbang-variable|
    |v:completed_item|      |completed_item-variable|
    |v:count|               |count-variable|
    |v:count1|              |count1-variable|
    |v:ctype|               |ctype-variable|
    |v:dying|               |dying-variable|
    |v:echospace|           |echospace-variable|
    |v:errmsg|              |errmsg-variable|
    |v:errors|              |errors-variable|       |assert-return|
    |v:event|               |event-variable|
    |v:exception|           |exception-variable|
    |v:false|               |false-variable|
    |v:fcs_reason|          |fcs_reason-variable|
    |v:fcs_choice|          |fcs_choice-variable|
    |v:fname_in|            |fname_in-variable|
    |v:fname_out|           |fname_out-variable|
    |v:fname_new|           |fname_new-variable|
    |v:fname_diff|          |fname_diff-variable|
    |v:folddashes|          |folddashes-variable|
    |v:foldlevel|           |foldlevel-variable|
    |v:foldend|             |foldend-variable|
    |v:foldstart|           |foldstart-variable|
    |v:hlsearch|            |hlsearch-variable|
    |v:insertmode|          |insertmode-variable|
    |v:key|                 |key-variable|
    |v:lang|                |lang-variable|
    |v:lc_time|             |lc_time-variable|
    |v:lnum|                |lnum-variable|
    |v:mouse_win|           |mouse_win-variable|
    |v:mouse_winid|         |mouse_winid-variable|
    |v:mouse_lnum|          |mouse_lnum-variable|
    |v:mouse_col|           |mouse_col-variable|
    |v:none|                |none-variable|         |None|
    |v:null|                |null-variable|
    |v:oldfiles|            |oldfiles-variable|
    |v:option_new|
    |v:option_old|
    |v:option_oldlocal|
    |v:option_oldglobal|
    |v:option_type|
    |v:option_command|
    |v:operator|            |operator-variable|
    |v:prevcount|           |prevcount-variable|
    |v:profiling|           |profiling-variable|
    |v:progname|            |progname-variable|
    |v:progpath|            |progpath-variable|
    |v:register|            |register-variable|
    |v:scrollstart|         |scrollstart-variable|
    |v:servername|          |servername-variable|
    |v:searchforward|       |searchforward-variable|
    |v:shell_error|         |shell_error-variable|
    |v:statusmsg|           |statusmsg-variable|
    |v:swapname|            |swapname-variable|
    |v:swapchoice|          |swapchoice-variable|
    |v:swapcommand|         |swapcommand-variable|
    |v:t_TYPE|              |v:t_bool|              |t_bool-variable|
    |v:t_channel|           |t_channel-variable|
    |v:t_dict|              |t_dict-variable|
    |v:t_float|             |t_float-variable|
    |v:t_func|              |t_func-variable|
    |v:t_job|               |t_job-variable|
    |v:t_list|              |t_list-variable|
    |v:t_none|              |t_none-variable|
    |v:t_number|            |t_number-variable|
    |v:t_string|            |t_string-variable|
    |v:t_blob|              |t_blob-variable|
    |v:termresponse|        |termresponse-variable|
    |v:termblinkresp|
    |v:termstyleresp|
    |v:termrbgresp|
    |v:termrfgresp|
    |v:termu7resp|
    |v:testing|             |testing-variable|
    |v:this_session|        |this_session-variable|
    |v:throwpoint|          |throwpoint-variable|
    |v:true|                |true-variable|
    |v:val|                 |val-variable|
    |v:version|             |version-variable|
    |v:versionlong|         |versionlong-variable|
    |v:vim_did_enter|       |vim_did_enter-variable|
    |v:warningmsg|          |warningmsg-variable|
    |v:windowid|            |windowid-variable|



## ==⚡ Builtin Functions
                                                                    *functions*
- [Expression evaluation -  4.  Builtin Functions](doc/eavl.txt)
- [Writing a plugin - 41.6 Using functions](doc/usr_41.txt)

FUNCTIONS                       *function-list*

There are many functions.  We will mention them here, grouped by what they are
used for.  You can find an alphabetical list here: |functions|.  Use CTRL-] on
the function name to jump to detailed help on it.

- String manipulation:               *string-functions*
- List manipulation:                 *list-functions*
- Dictionary manipulation:           *dict-functions*
- Floating point computation:        *float-functions*
- Other computation:                 *bitwise-function*
- Variables:                         *var-functions*
- Cursor and mark position:          *cursor-functions* *mark-functions*
- Text in the current buffer:        *text-functions*
- Text in another buffer:            *another-buffer*
- System and manipulation of files:  *system-functions* *file-functions*
- Date and Time:                     *date-functions* *time-functions*
- Buffers, windows, argument list:   *buffer-functions* *window-functions* *arg-functions*
- Command line:                      *command-line-functions*
- Quickfix and location lists:       *quickfix-functions*
- Insert mode completion:            *completion-functions*
- Folding:                           *folding-functions*
- Syntax and highlighting:           *syntax-functions* *highlighting-functions*
- Spelling:                          *spell-functions*
- History:                           *history-functions*
- Interactive:                       *interactive-functions*
- GUI:                               *gui-functions*
- Vim server:                        *server-functions*
- Window size and position:          *window-size-functions*
- Mappings:                          *mapping-functions*
- Testing:                           *test-functions*
- Inter-process communication:       *channel-functions*
- Jobs:                              *job-functions*
- Signs:                             *sign-functions*
- Terminal window:                   *terminal-functions*
- Popup window:                      *popup-window-functions*
- Timers:                            *timer-functions*
- Tags:                              *tag-functions*
- Prompt Buffer:                     *promptbuffer-functions*
- Various:                           *various-functions*


String manipulation:                    *string-functions*

    nr2char()       get a character by its number value
    list2str()      get a character string from a list of numbers
    char2nr()       get number value of a character
    str2list()      get list of numbers from a string
    str2nr()        convert a string to a Number
    str2float()     convert a string to a Float
    printf()        format a string according to % items
    escape()        escape characters in a string with a '\'
    shellescape()       escape a string for use with a shell command
    fnameescape()       escape a file name for use with a Vim command
    tr()            translate characters from one set to another
    strtrans()      translate a string to make it printable
    tolower()       turn a string to lowercase
    toupper()       turn a string to uppercase
    match()         position where a pattern matches in a string
    matchend()      position where a pattern match ends in a string
    matchstr()      match of a pattern in a string
    matchstrpos()       match and positions of a pattern in a string
    matchlist()     like matchstr() and also return submatches
    stridx()        first index of a short string in a long string
    strridx()       last index of a short string in a long string
    strlen()        length of a string in bytes
    strchars()      length of a string in characters
    strwidth()      size of string when displayed
    strdisplaywidth()   size of string when displayed, deals with tabs
    substitute()        substitute a pattern match with a string
    submatch()      get a specific match in ":s" and substitute()
    strpart()       get part of a string using byte index
    strcharpart()       get part of a string using char index
    strgetchar()        get character from a string using char index
    expand()        expand special keywords
    expandcmd()     expand a command like done for `:edit`
    iconv()         convert text from one encoding to another
    byteidx()       byte index of a character in a string
    byteidxcomp()       like byteidx() but count composing characters
    repeat()        repeat a string multiple times
    eval()          evaluate a string expression
    execute()       execute an Ex command and get the output
    win_execute()       like execute() but in a specified window
    trim()          trim characters from a string

List manipulation:                  *list-functions*

    get()           get an item without error for wrong index
    len()           number of items in a List
    empty()         check if List is empty
    insert()        insert an item somewhere in a List
    add()           append an item to a List
    extend()        append a List to a List
    remove()        remove one or more items from a List
    copy()          make a shallow copy of a List
    deepcopy()      make a full copy of a List
    filter()        remove selected items from a List
    map()           change each List item
    sort()          sort a List
    reverse()       reverse the order of a List
    uniq()          remove copies of repeated adjacent items
    split()         split a String into a List
    join()          join List items into a String
    range()         return a List with a sequence of numbers
    string()        String representation of a List
    call()          call a function with List as arguments
    index()         index of a value in a List
    max()           maximum value in a List
    min()           minimum value in a List
    count()         count number of times a value appears in a List
    repeat()        repeat a List multiple times

Dictionary manipulation:                *dict-functions*

    get()           get an entry without an error for a wrong key
    len()           number of entries in a Dictionary
    has_key()       check whether a key appears in a Dictionary
    empty()         check if Dictionary is empty
    remove()        remove an entry from a Dictionary
    extend()        add entries from one Dictionary to another
    filter()        remove selected entries from a Dictionary
    map()           change each Dictionary entry
    keys()          get List of Dictionary keys
    values()        get List of Dictionary values
    items()         get List of Dictionary key-value pairs
    copy()          make a shallow copy of a Dictionary
    deepcopy()      make a full copy of a Dictionary
    string()        String representation of a Dictionary
    max()           maximum value in a Dictionary
    min()           minimum value in a Dictionary
    count()         count number of times a value appears

Floating point computation:             *float-functions*

    float2nr()      convert Float to Number
    abs()           absolute value (also works for Number)
    round()         round off
    ceil()          round up
    floor()         round down
    trunc()         remove value after decimal point
    fmod()          remainder of division
    exp()           exponential
    log()           natural logarithm (logarithm to base e)
    log10()         logarithm to base 10
    pow()           value of x to the exponent y
    sqrt()          square root
    sin()           sine
    cos()           cosine
    tan()           tangent
    asin()          arc sine
    acos()          arc cosine
    atan()          arc tangent
    atan2()         arc tangent
    sinh()          hyperbolic sine
    cosh()          hyperbolic cosine
    tanh()          hyperbolic tangent
    isnan()         check for not a number

Other computation:                  *bitwise-function*

    and()           bitwise AND
    invert()        bitwise invert
    or()            bitwise OR
    xor()           bitwise XOR
    sha256()        SHA-256 hash

Variables:                      *var-functions*

    type()          type of a variable
    islocked()      check if a variable is locked
    funcref()       get a Funcref for a function reference
    function()      get a Funcref for a function name
    getbufvar()     get a variable value from a specific buffer
    setbufvar()     set a variable in a specific buffer
    getwinvar()     get a variable from specific window
    gettabvar()     get a variable from specific tab page
    gettabwinvar()      get a variable from specific window & tab page
    setwinvar()     set a variable in a specific window
    settabvar()     set a variable in a specific tab page
    settabwinvar()      set a variable in a specific window & tab page
    garbagecollect()    possibly free memory

Cursor and mark position:       *cursor-functions* *mark-functions*

    col()           column number of the cursor or a mark
    virtcol()       screen column of the cursor or a mark
    line()          line number of the cursor or mark
    wincol()        window column number of the cursor
    winline()       window line number of the cursor
    cursor()        position the cursor at a line/column
    screencol()     get screen column of the cursor
    screenrow()     get screen row of the cursor
    screenpos()     screen row and col of a text character
    getcurpos()     get position of the cursor
    getpos()        get position of cursor, mark, etc.
    setpos()        set position of cursor, mark, etc.
    byte2line()     get line number at a specific byte count
    line2byte()     byte count at a specific line
    diff_filler()       get the number of filler lines above a line
    screenattr()        get attribute at a screen line/row
    screenchar()        get character code at a screen line/row
    screenchars()       get character codes at a screen line/row
    screenstring()      get string of characters at a screen line/row

Working with text in the current buffer:        *text-functions*

    getline()       get a line or list of lines from the buffer
    setline()       replace a line in the buffer
    append()        append line or list of lines in the buffer
    indent()        indent of a specific line
    cindent()       indent according to C indenting
    lispindent()        indent according to Lisp indenting
    nextnonblank()      find next non-blank line
    prevnonblank()      find previous non-blank line
    search()        find a match for a pattern
    searchpos()     find a match for a pattern
    searchpair()        find the other end of a start/skip/end
    searchpairpos()     find the other end of a start/skip/end
    searchdecl()        search for the declaration of a name
    getcharsearch()     return character search information
    setcharsearch()     set character search information

Working with text in another buffer:             *another-buffer*

    getbufline()        get a list of lines from the specified buffer
    setbufline()        replace a line in the specified buffer
    appendbufline()     append a list of lines in the specified buffer
    deletebufline()     delete lines from a specified buffer

                    
System functions and manipulation of files:
                    *system-functions* *file-functions*

    glob()          expand wildcards
    globpath()      expand wildcards in a number of directories
    glob2regpat()       convert a glob pattern into a search pattern
    findfile()      find a file in a list of directories
    finddir()       find a directory in a list of directories
    resolve()       find out where a shortcut points to
    fnamemodify()       modify a file name
    pathshorten()       shorten directory names in a path
    simplify()      simplify a path without changing its meaning
    executable()        check if an executable program exists
    exepath()       full path of an executable program
    filereadable()      check if a file can be read
    filewritable()      check if a file can be written to
    getfperm()      get the permissions of a file
    setfperm()      set the permissions of a file
    getftype()      get the kind of a file
    isdirectory()       check if a directory exists
    getfsize()      get the size of a file
    getcwd()        get the current working directory
    haslocaldir()       check if current window used |:lcd| or |:tcd|
    tempname()      get the name of a temporary file
    mkdir()         create a new directory
    chdir()         change current working directory
    delete()        delete a file
    rename()        rename a file
    system()        get the result of a shell command as a string
    systemlist()        get the result of a shell command as a list
    environ()       get all environment variables
    getenv()        get one environment variable
    setenv()        set an environment variable
    hostname()      name of the system
    readfile()      read a file into a List of lines
    readdir()       get a List of file names in a directory
    writefile()     write a List of lines or Blob into a file

Date and Time:              *date-functions* *time-functions*

    getftime()      get last modification time of a file
    localtime()     get current time in seconds
    strftime()      convert time to a string
    reltime()       get the current or elapsed time accurately
    reltimestr()        convert reltime() result to a string
    reltimefloat()      convert reltime() result to a Float

            
Buffers, windows and the argument list:
            *buffer-functions* *window-functions* *arg-functions*

    argc()          number of entries in the argument list
    argidx()        current position in the argument list
    arglistid()     get id of the argument list
    argv()          get one entry from the argument list
    bufadd()        add a file to the list of buffers
    bufexists()     check if a buffer exists
    buflisted()     check if a buffer exists and is listed
    bufload()       ensure a buffer is loaded
    bufloaded()     check if a buffer exists and is loaded
    bufname()       get the name of a specific buffer
    bufnr()         get the buffer number of a specific buffer
    tabpagebuflist()    return List of buffers in a tab page
    tabpagenr()     get the number of a tab page
    tabpagewinnr()      like winnr() for a specified tab page
    winnr()         get the window number for the current window
    bufwinid()      get the window ID of a specific buffer
    bufwinnr()      get the window number of a specific buffer
    winbufnr()      get the buffer number of a specific window
    listener_add()      add a callback to listen to changes
    listener_flush()    invoke listener callbacks
    listener_remove()   remove a listener callback
    win_findbuf()       find windows containing a buffer
    win_getid()     get window ID of a window
    win_gotoid()        go to window with ID
    win_id2tabwin()     get tab and window nr from window ID
    win_id2win()        get window nr from window ID
    getbufinfo()        get a list with buffer information
    gettabinfo()        get a list with tab page information
    getwininfo()        get a list with window information
    getchangelist()     get a list of change list entries
    getjumplist()       get a list of jump list entries
    swapinfo()      information about a swap file
    swapname()      get the swap file path of a buffer

Command line:                   *command-line-functions*

    getcmdline()        get the current command line
    getcmdpos()     get position of the cursor in the command line
    setcmdpos()     set position of the cursor in the command line
    getcmdtype()        return the current command-line type
    getcmdwintype()     return the current command-line window type
    getcompletion()     list of command-line completion matches

Quickfix and location lists:            *quickfix-functions*

    getqflist()     list of quickfix errors
    setqflist()     modify a quickfix list
    getloclist()        list of location list items
    setloclist()        modify a location list

Insert mode completion:             *completion-functions*

    complete()      set found matches
    complete_add()      add to found matches
    complete_check()    check if completion should be aborted
    complete_info()     get current completion information
    pumvisible()        check if the popup menu is displayed
    pum_getpos()        position and size of popup menu if visible

Folding:                    *folding-functions*

    foldclosed()        check for a closed fold at a specific line
    foldclosedend()     like foldclosed() but return the last line
    foldlevel()     check for the fold level at a specific line
    foldtext()      generate the line displayed for a closed fold
    foldtextresult()    get the text displayed for a closed fold

Syntax and highlighting:      *syntax-functions* *highlighting-functions*

    clearmatches()      clear all matches defined by |matchadd()| and
                the |:match| commands
    getmatches()        get all matches defined by |matchadd()| and
                the |:match| commands
    hlexists()      check if a highlight group exists
    hlID()          get ID of a highlight group
    synID()         get syntax ID at a specific position
    synIDattr()     get a specific attribute of a syntax ID
    synIDtrans()        get translated syntax ID
    synstack()      get list of syntax IDs at a specific position
    synconcealed()      get info about concealing
    diff_hlID()     get highlight ID for diff mode at a position
    matchadd()      define a pattern to highlight (a "match")
    matchaddpos()       define a list of positions to highlight
    matcharg()      get info about |:match| arguments
    matchdelete()       delete a match defined by |matchadd()| or a
                |:match| command
    setmatches()        restore a list of matches saved by
                |getmatches()|

Spelling:                   *spell-functions*

    spellbadword()      locate badly spelled word at or after cursor
    spellsuggest()      return suggested spelling corrections
    soundfold()     return the sound-a-like equivalent of a word

History:                    *history-functions*

    histadd()       add an item to a history
    histdel()       delete an item from a history
    histget()       get an item from a history
    histnr()        get highest index of a history list

Interactive:                    *interactive-functions*

    browse()        put up a file requester
    browsedir()     put up a directory requester
    confirm()       let the user make a choice
    getchar()       get a character from the user
    getcharmod()        get modifiers for the last typed character
    feedkeys()      put characters in the typeahead queue
    input()         get a line from the user
    inputlist()     let the user pick an entry from a list
    inputsecret()       get a line from the user without showing it
    inputdialog()       get a line from the user in a dialog
    inputsave()     save and clear typeahead
    inputrestore()      restore typeahead

GUI:                        *gui-functions*

    getfontname()       get name of current font being used
    getwinpos()     position of the Vim window
    getwinposx()        X position of the Vim window
    getwinposy()        Y position of the Vim window
    balloon_show()      set the balloon content
    balloon_split()     split a message for a balloon
    balloon_gettext()   get the text in the balloon

Vim server:                 *server-functions*

    serverlist()        return the list of server names
    remote_startserver()    run a server
    remote_send()       send command characters to a Vim server
    remote_expr()       evaluate an expression in a Vim server
    server2client()     send a reply to a client of a Vim server
    remote_peek()       check if there is a reply from a Vim server
    remote_read()       read a reply from a Vim server
    foreground()        move the Vim window to the foreground
    remote_foreground() move the Vim server window to the foreground

Window size and position:           *window-size-functions*

    winheight()     get height of a specific window
    winwidth()      get width of a specific window
    win_screenpos()     get screen position of a window
    winlayout()     get layout of windows in a tab page
    winrestcmd()        return command to restore window sizes
    winsaveview()       get view of current window
    winrestview()       restore saved view of current window

Mappings:                   *mapping-functions*

    hasmapto()      check if a mapping exists
    mapcheck()      check if a matching mapping exists
    maparg()        get rhs of a mapping
    wildmenumode()      check if the wildmode is active

Testing:                    *test-functions*

    assert_equal()      assert that two expressions values are equal
    assert_equalfile()  assert that two file contents are equal
    assert_notequal()   assert that two expressions values are not equal
    assert_inrange()    assert that an expression is inside a range
    assert_match()      assert that a pattern matches the value
    assert_notmatch()   assert that a pattern does not match the value
    assert_false()      assert that an expression is false
    assert_true()       assert that an expression is true
    assert_exception()  assert that a command throws an exception
    assert_beeps()      assert that a command beeps
    assert_fails()      assert that a command fails
    assert_report()     report a test failure
    test_alloc_fail()   make memory allocation fail
    test_autochdir()    enable 'autochdir' during startup
    test_override()     test with Vim internal overrides
    test_garbagecollect_now()   free memory right now
    test_getvalue()     get value of an internal variable
    test_ignore_error() ignore a specific error message
    test_null_blob()    return a null Blob
    test_null_channel() return a null Channel
    test_null_dict()    return a null Dict
    test_null_job()     return a null Job
    test_null_list()    return a null List
    test_null_partial() return a null Partial function
    test_null_string()  return a null String
    test_settime()      set the time Vim uses internally
    test_setmouse()     set the mouse position
    test_feedinput()    add key sequence to input buffer
    test_option_not_set()   reset flag indicating option was set
    test_scrollbar()    simulate scrollbar movement in the GUI

Inter-process communication:            *channel-functions*

    ch_canread()        check if there is something to read
    ch_open()       open a channel
    ch_close()      close a channel
    ch_close_in()       close the in part of a channel
    ch_read()       read a message from a channel
    ch_readblob()       read a Blob from a channel
    ch_readraw()        read a raw message from a channel
    ch_sendexpr()       send a JSON message over a channel
    ch_sendraw()        send a raw message over a channel
    ch_evalexpr()       evaluates an expression over channel
    ch_evalraw()        evaluates a raw string over channel
    ch_status()     get status of a channel
    ch_getbufnr()       get the buffer number of a channel
    ch_getjob()     get the job associated with a channel
    ch_info()       get channel information
    ch_log()        write a message in the channel log file
    ch_logfile()        set the channel log file
    ch_setoptions()     set the options for a channel
    json_encode()       encode an expression to a JSON string
    json_decode()       decode a JSON string to Vim types
    js_encode()     encode an expression to a JSON string
    js_decode()     decode a JSON string to Vim types

Jobs:                               *job-functions*

    job_start()     start a job
    job_stop()      stop a job
    job_status()        get the status of a job
    job_getchannel()    get the channel used by a job
    job_info()      get information about a job
    job_setoptions()    set options for a job

Signs:                      *sign-functions*

    sign_define()       define or update a sign
    sign_getdefined()   get a list of defined signs
    sign_getplaced()    get a list of placed signs
    sign_jump()     jump to a sign
    sign_place()        place a sign
    sign_placelist()    place a list of signs
    sign_undefine()     undefine a sign
    sign_unplace()      unplace a sign
    sign_unplacelist()  unplace a list of signs

Terminal window:                *terminal-functions*

    term_start()        open a terminal window and run a job
    term_list()     get the list of terminal buffers
    term_sendkeys()     send keystrokes to a terminal
    term_wait()     wait for screen to be updated
    term_getjob()       get the job associated with a terminal
    term_scrape()       get row of a terminal screen
    term_getline()      get a line of text from a terminal
    term_getattr()      get the value of attribute {what}
    term_getcursor()    get the cursor position of a terminal
    term_getscrolled()  get the scroll count of a terminal
    term_getaltscreen() get the alternate screen flag
    term_getsize()      get the size of a terminal
    term_getstatus()    get the status of a terminal
    term_gettitle()     get the title of a terminal
    term_gettty()       get the tty name of a terminal
    term_setansicolors()    set 16 ANSI colors, used for GUI
    term_getansicolors()    get 16 ANSI colors, used for GUI
    term_dumpdiff()     display difference between two screen dumps
    term_dumpload()     load a terminal screen dump in a window
    term_dumpwrite()    dump contents of a terminal screen to a file
    term_setkill()      set signal to stop job in a terminal
    term_setrestore()   set command to restore a terminal
    term_setsize()      set the size of a terminal

Popup window:                   *popup-window-functions*

    popup_create()      create popup centered in the screen
    popup_atcursor()    create popup just above the cursor position,
                closes when the cursor moves away
    popup_beval()       at the position indicated by v:beval_
                variables, closes when the mouse moves away
    popup_notification()    show a notification for three seconds
    popup_dialog()      create popup centered with padding and border
    popup_menu()        prompt for selecting an item from a list
    popup_hide()        hide a popup temporarily
    popup_show()        show a previously hidden popup
    popup_move()        change the position and size of a popup
    popup_setoptions()  override options of a popup
    popup_settext()     replace the popup buffer contents
    popup_close()       close one popup
    popup_clear()       close all popups
    popup_filter_menu() select from a list of items
    popup_filter_yesno()    blocks until 'y' or 'n' is pressed
    popup_getoptions()  get current options for a popup
    popup_getpos()      get actual position and size of a popup

Timers:                     *timer-functions*

    timer_start()       create a timer
    timer_pause()       pause or unpause a timer
    timer_stop()        stop a timer
    timer_stopall()     stop all timers
    timer_info()        get information about timers

Tags:                       *tag-functions*

    taglist()       get list of matching tags
    tagfiles()      get a list of tags files
    gettagstack()       get the tag stack of a window
    settagstack()       modify the tag stack of a window

Prompt Buffer:                  *promptbuffer-functions*

    prompt_setcallback()    set prompt callback for a buffer
    prompt_setinterrupt()   set interrupt callback for a buffer
    prompt_setprompt()  set the prompt text for a buffer

Various:                    *various-functions*

    mode()          get current editing mode
    visualmode()        last visual mode used
    exists()        check if a variable, function, etc. exists
    has()           check if a feature is supported in Vim
    changenr()      return number of most recent change
    cscope_connection() check if a cscope connection exists
    did_filetype()      check if a FileType autocommand was used
    eventhandler()      check if invoked by an event handler
    getpid()        get process ID of Vim

    libcall()       call a function in an external library
    libcallnr()     idem, returning a number

    undofile()      get the name of the undo file
    undotree()      return the state of the undo tree

    getreg()        get contents of a register
    getregtype()        get type of a register
    setreg()        set contents and type of a register
    reg_executing()     return the name of the register being executed
    reg_recording()     return the name of the register being recorded

    shiftwidth()        effective value of 'shiftwidth'

    wordcount()     get byte/word/char count of buffer

    luaeval()       evaluate Lua expression
    mzeval()        evaluate |MzScheme| expression
    perleval()      evaluate Perl expression (|+perl|)
    py3eval()       evaluate Python expression (|+python3|)
    pyeval()        evaluate Python expression (|+python|)
    pyxeval()       evaluate |python_x| expression
    debugbreak()        interrupt a program being debugged



## ==⚡ Defining functions
                                                                    *user-functions*
- [Expression evaluation -  5.  Defining functions](doc/eavl.txt)

- Local Function                            |local-function|
- List Function                             |:fu| |:function| |E128| |E129| |E123|
- Function Verbose                          |:function-verbose|
- Define a new function                     |E124| |E125| |E853| |E884|
- Line range argument                       |:func-range| |a:firstline| |a:lastline|
- Function range example                    |function-range-example|
- Delete function                           |:delf| |:delfunction| |E130| |E131| |E933|
- Return from a function                    |:retu| |:return| |E133|
- Function argument                         |function-argument| |a:var|
- Optional arguments                        |optional-function-argument|
- Local variables                           |local-variables|
- Automatically Loading Functions           |autoload-functions|
- Using an autocommand                      |using-autocommand|
- Using an autoload script                  |autoload| |E746|

New functions can be defined.  These can be called just like builtin
functions.  The function executes a sequence of Ex commands.  Normal mode
commands can be executed with the |:normal| command.

The function name must start with an uppercase letter, to avoid confusion with
builtin functions.  To prevent from using the same name in different scripts
avoid obvious, short names.  A good habit is to start the function name with
the name of the script, e.g., "HTMLcolor()".

It's also possible to use curly braces, see |curly-braces-names|.  And the
|autoload| facility is useful to define a function only when it's called.

                            *local-function*
A function local to a script must start with "s:".  A local script function
can only be called from within the script and from functions, user commands
and autocommands defined in the script.  It is also possible to call the
function from a mapping defined in the script, but then |<SID>| must be used
instead of "s:" when the mapping is expanded outside of the script.
There are only script-local functions, no buffer-local or window-local
functions.

                    *:fu* *:function* *E128* *E129* *E123*
:fu[nction]     List all functions and their arguments.

:fu[nction] {name}  List function {name}.
            {name} can also be a |Dictionary| entry that is a
            |Funcref|: >
                :function dict.init

:fu[nction] /{pattern}  List functions with a name matching {pattern}.
            Example that lists all functions ending with "File": >
                :function /File$
<
                            *:function-verbose*
When 'verbose' is non-zero, listing a function will also display where it was
last defined. Example: >

    :verbose function SetFileTypeSH
    function SetFileTypeSH(name)
        Last set from /usr/share/vim/vim-7.0/filetype.vim
<
See |:verbose-cmd| for more information.

                        *E124* *E125* *E853* *E884*
:fu[nction][!] {name}([arguments]) [range] [abort] [dict] [closure]
            Define a new function by the name {name}.  The body of
            the function follows in the next lines, until the
            matching |:endfunction|.

            The name must be made of alphanumeric characters and
            '_', and must start with a capital or "s:" (see
            above).  Note that using "b:" or "g:" is not allowed.
            (since patch 7.4.260 E884 is given if the function
            name has a colon in the name, e.g. for "foo:bar()".
            Before that patch no error was given).

            {name} can also be a |Dictionary| entry that is a
            |Funcref|: >
                :function dict.init(arg)
<           "dict" must be an existing dictionary.  The entry
            "init" is added if it didn't exist yet.  Otherwise [!]
            is required to overwrite an existing function.  The
            result is a |Funcref| to a numbered function.  The
            function can only be used with a |Funcref| and will be
            deleted if there are no more references to it.
                                *E127* *E122*
            When a function by this name already exists and [!] is
            not used an error message is given.  There is one
            exception: When sourcing a script again, a function
            that was previously defined in that script will be
            silently replaced.
            When [!] is used, an existing function is silently
            replaced.  Unless it is currently being executed, that
            is an error.
            NOTE: Use ! wisely.  If used without care it can cause
            an existing function to be replaced unexpectedly,
            which is hard to debug.

            For the {arguments} see |function-argument|.

                    *:func-range* *a:firstline* *a:lastline*
            When the [range] argument is added, the function is
            expected to take care of a range itself.  The range is
            passed as "a:firstline" and "a:lastline".  If [range]
            is excluded, ":{range}call" will call the function for
            each line in the range, with the cursor on the start
            of each line.  See |function-range-example|.
            The cursor is still moved to the first line of the
            range, as is the case with all Ex commands.
                                *:func-abort*
            When the [abort] argument is added, the function will
            abort as soon as an error is detected.
                                *:func-dict*
            When the [dict] argument is added, the function must
            be invoked through an entry in a |Dictionary|.  The
            local variable "self" will then be set to the
            dictionary.  See |Dictionary-function|.
                        *:func-closure* *E932*
            When the [closure] argument is added, the function
            can access variables and arguments from the outer
            scope.  This is usually called a closure.  In this
            example Bar() uses "x" from the scope of Foo().  It
            remains referenced even after Foo() returns: >
                :function! Foo()
                :  let x = 0
                :  function! Bar() closure
                :    let x += 1
                :    return x
                :  endfunction
                :  return funcref('Bar')
                :endfunction

                :let F = Foo()
                :echo F()
<               1 >
                :echo F()
<               2 >
                :echo F()
<               3

                        *function-search-undo*
            The last used search pattern and the redo command "."
            will not be changed by the function.  This also
            implies that the effect of |:nohlsearch| is undone
            when the function returns.

                *:endf* *:endfunction* *E126* *E193* *W22*
:endf[unction] [argument]
            The end of a function definition.  Best is to put it
            on a line by its own, without [argument].

            [argument] can be:
                | command   command to execute next
                \n command  command to execute next
                " comment   always ignored
                anything else   ignored, warning given when
                        'verbose' is non-zero
            The support for a following command was added in Vim
            8.0.0654, before that any argument was silently
            ignored.

            To be able to define a function inside an `:execute`
            command, use line breaks instead of |:bar|: >
                :exe "func Foo()\necho 'foo'\nendfunc"
<
                *:delf* *:delfunction* *E130* *E131* *E933*
:delf[unction][!] {name}
            Delete function {name}.
            {name} can also be a |Dictionary| entry that is a
            |Funcref|: >
                :delfunc dict.init
<           This will remove the "init" entry from "dict".  The
            function is deleted if there are no more references to
            it.
            With the ! there is no error if the function does not
            exist.
                            *:retu* *:return* *E133*
:retu[rn] [expr]    Return from a function.  When "[expr]" is given, it is
            evaluated and returned as the result of the function.
            If "[expr]" is not given, the number 0 is returned.
            When a function ends without an explicit ":return",
            the number 0 is returned.
            Note that there is no check for unreachable lines,
            thus there is no warning if commands follow ":return".

            If the ":return" is used after a |:try| but before the
            matching |:finally| (if present), the commands
            following the ":finally" up to the matching |:endtry|
            are executed first.  This process applies to all
            nested ":try"s inside the function.  The function
            returns at the outermost ":endtry".

                        *function-argument* *a:var*
An argument can be defined by giving its name.  In the function this can then
be used as "a:name" ("a:" for argument).
                    *a:0* *a:1* *a:000* *E740* *...*
Up to 20 arguments can be given, separated by commas.  After the named
arguments an argument "..." can be specified, which means that more arguments
may optionally be following.  In the function the extra arguments can be used
as "a:1", "a:2", etc.  "a:0" is set to the number of extra arguments (which
can be 0).  "a:000" is set to a |List| that contains these arguments.  Note
that "a:1" is the same as "a:000[0]".
                                *E742*
The a: scope and the variables in it cannot be changed, they are fixed.
However, if a composite type is used, such as |List| or |Dictionary| , you can
change their contents.  Thus you can pass a |List| to a function and have the
function add an item to it.  If you want to make sure the function cannot
change a |List| or |Dictionary| use |:lockvar|.

It is also possible to define a function without any arguments.  You must
still supply the () then.

It is allowed to define another function inside a function body.

                        *optional-function-argument*
You can provide default values for positional named arguments.  This makes
them optional for function calls.  When a positional argument is not
specified at a call, the default expression is used to initialize it.
This only works for functions declared with `:function`, not for lambda
expressions |expr-lambda|.

Example: >

    function Something(key, value = 10)
      echo a:key .. ": " .. a:value
    endfunction
    call Something('empty')   "empty: 10"
    call Something('key', 20) "key: 20"

The argument default expressions are evaluated at the time of the function
call, not definition.  Thus it is possible to use an expression which is
invalid the moment the function is defined.  The expressions are also only
evaluated when arguments are not specified during a call.

You can pass |v:none| to use the default expression.  Note that this means you
cannot pass v:none as an ordinary value when an argument has a default
expression.

Example: >
  function Something(a = 10, b = 20, c = 30)
  endfunction
  call Something(1, v:none, 3)      " b = 20
<
                                *E989*
Optional arguments with default expressions must occur after any mandatory
arguments.  You can use "..." after all optional named arguments.

It is possible for later argument defaults to refer to prior arguments,
but not the other way around.  They must be prefixed with "a:", as with all
arguments.

Example that works: >
  :function Okay(mandatory, optional = a:mandatory)
  :endfunction
Example that does NOT work: >
  :function NoGood(first = a:second, second = 10)
  :endfunction
<
When not using "...", the number of arguments in a function call must be equal
to the number of mandatory named arguments.  When using "...", the number of
arguments may be larger.

                            *local-variables*
Inside a function local variables can be used.  These will disappear when the
function returns.  Global variables need to be accessed with "g:".

Example: >
  :function Table(title, ...)
  :  echohl Title
  :  echo a:title
  :  echohl None
  :  echo a:0 . " items:"
  :  for s in a:000
  :    echon ' ' . s
  :  endfor
  :endfunction

This function can then be called with: >
  call Table("Table", "line1", "line2")
  call Table("Empty Table")

To return more than one value, return a |List|: >
  :function Compute(n1, n2)
  :  if a:n2 == 0
  :    return ["fail", 0]
  :  endif
  :  return ["ok", a:n1 / a:n2]
  :endfunction

This function can then be called with: >
  :let [success, div] = Compute(102, 6)
  :if success == "ok"
  :  echo div
  :endif
<
                        *:cal* *:call* *E107* *E117*
:[range]cal[l] {name}([arguments])
        Call a function.  The name of the function and its arguments
        are as specified with `:function`.  Up to 20 arguments can be
        used.  The returned value is discarded.
        Without a range and for functions that accept a range, the
        function is called once.  When a range is given the cursor is
        positioned at the start of the first line before executing the
        function.
        When a range is given and the function doesn't handle it
        itself, the function is executed for each line in the range,
        with the cursor in the first column of that line.  The cursor
        is left at the last line (possibly moved by the last function
        call).  The arguments are re-evaluated for each line.  Thus
        this works:
                        *function-range-example*  >
    :function Mynumber(arg)
    :  echo line(".") . " " . a:arg
    :endfunction
    :1,5call Mynumber(getline("."))
<
        The "a:firstline" and "a:lastline" are defined anyway, they
        can be used to do something different at the start or end of
        the range.

        Example of a function that handles the range itself: >

    :function Cont() range
    :  execute (a:firstline + 1) . "," . a:lastline . 's/^/\t\\ '
    :endfunction
    :4,8call Cont()
<
        This function inserts the continuation character "\" in front
        of all the lines in the range, except the first one.

        When the function returns a composite value it can be further
        dereferenced, but the range will not be used then.  Example: >
    :4,8call GetDict().method()
<       Here GetDict() gets the range but method() does not.

                                *E132*
The recursiveness of user functions is restricted with the |'maxfuncdepth'|
option.

It is also possible to use `:eval`.  It does not support a range, but does
allow for method chaining, e.g.: >

    eval GetList()->Filter()->append('$')

A function can also be called as part of evaluating an expression or when it
is used as a method: >

    let x = GetList()
    let y = GetList()->Filter()


AUTOMATICALLY LOADING FUNCTIONS ~
                            *autoload-functions*
When using many or large functions, it's possible to automatically define them
only when they are used.  There are two methods: with an autocommand and with
the "autoload" directory in 'runtimepath'.


Using an autocommand ~
                            *using-autocommand*
This is introduced in the user manual, section |41.14|.

The autocommand is useful if you have a plugin that is a long Vim script file.
You can define the autocommand and quickly quit the script with `:finish`.
That makes Vim startup faster.  The autocommand should then load the same file
again, setting a variable to skip the `:finish` command.

Use the FuncUndefined autocommand event with a pattern that matches the
function(s) to be defined.  Example: >

    :au FuncUndefined BufNet* source ~/vim/bufnetfuncs.vim

The file "~/vim/bufnetfuncs.vim" should then define functions that start with
"BufNet".  Also see |FuncUndefined|.


Using an autoload script ~
                            *autoload* *E746*
This is introduced in the user manual, section |41.15|.

Using a script in the "autoload" directory is simpler, but requires using
exactly the right file name.  A function that can be autoloaded has a name
like this: >

    :call filename#funcname()

When such a function is called, and it is not defined yet, Vim will search the
"autoload" directories in 'runtimepath' for a script file called
"filename.vim".  For example "~/.vim/autoload/filename.vim".  That file should
then define the function like this: >

    function filename#funcname()
       echo "Done!"
    endfunction

The file name and the name used before the # in the function must match
exactly, and the defined function must have the name exactly as it will be
called.

It is possible to use subdirectories.  Every # in the function name works like
a path separator.  Thus when calling a function: >

    :call foo#bar#func()

Vim will look for the file "autoload/foo/bar.vim" in 'runtimepath'.

This also works when reading a variable that has not been set yet: >

    :let l = foo#bar#lvar

However, when the autoload script was already loaded it won't be loaded again
for an unknown variable.

When assigning a value to such a variable nothing special happens.  This can
be used to pass settings to the autoload script before it's loaded: >

    :let foo#bar#toggle = 1
    :call foo#bar#func()

Note that when you make a mistake and call a function that is supposed to be
defined in an autoload script, but the script doesn't actually define the
function, the script will be sourced every time you try to call the function.
And you will get an error message every time.

Also note that if you have two script files, and one calls a function in the
other and vice versa, before the used function is defined, it won't work.
Avoid using the autoload functionality at the toplevel.

Hint: If you distribute a bunch of scripts you can pack them together with the
|vimball| utility.  Also read the user manual |distribute-script|.


## ==⚡ Curly braces names
                                                                    *curly-braces-names*
- [Expression evaluation -  6.  Curly braces](doc/eavl.txt)

In most places where you can use a variable, you can use a "curly braces name"
variable.  This is a regular variable name with one or more expressions
wrapped in braces {} like this: >

    my_{adjective}_variable

When Vim encounters this, it evaluates the expression inside the braces, puts
that in place of the expression, and re-interprets the whole as a variable
name.  So in the above example, if the variable "adjective" was set to
"noisy", then the reference would be to "my_noisy_variable", whereas if
"adjective" was set to "quiet", then it would be to "my_quiet_variable".

One application for this is to create a set of variables governed by an option
value.  For example, the statement >

    echo my_{&background}_message

would output the contents of "my_dark_message" or "my_light_message" depending
on the current value of 'background'.

You can use multiple brace pairs: >

    echo my_{adverb}_{adjective}_message

..or even nest them: >

    echo my_{ad{end_of_word}}_message

where "end_of_word" is either "verb" or "jective".

However, the expression inside the braces must evaluate to a valid single
variable name, e.g. this is invalid: >

    :let foo='a + b'
    :echo c{foo}d
.. since the result of expansion is "ca + bd", which is not a variable name.

                        *curly-braces-function-names*
You can call and define functions by an evaluated name in a similar way.
Example: >

    :let func_end='whizz'
    :call my_func_{func_end}(parameter)

This would call the function "my_func_whizz(parameter)".

This does NOT work: >

  :let i = 3
  :let @{i} = ''  " error
  :echo @{i}      " error


## ==⚡ Commands
                                                                    *expression-commands*
- [Expression evaluation -  7.  Commands](doc/eavl.txt)

01. :let {var-name} = {expr1}                   |:let|
02. :let ${env-name} = {expr1}                  |:let-environment| |:let-$|
03. :let @{reg-name} = {expr1}                  |:let-register| |:let-@|
04. :let &{option-name} = {expr1}               |:let-option| |:let-&|
05. :let [{name1}, {name2}, ...] = {expr1}      |:let-unpack|
06. :let {var-name} =<< [trim] {endmarker}      |:let=<<| |:let-heredoc|
07. :unl[et][!] {name} ...                      |:unlet| |:unl|
08. :unl[et] ${env-name} ...                    |:unlet-environment| |:unlet-$|
09. :lockv[ar][!] [depth] {name} ...            |:lockvar| |:lockv|
10. :cons[t] {var-name} = {expr1}               |:cons| |:const|
11. :unlo[ckvar][!] [depth] {name} ...          |:unlockvar| |:unlo|
12. :eval {expr}                                |:eval|
13. :if {expr1}                                 |:if| |:end| |:endif| |:en|
14. :el[se]                                     |:else| |:el|
15. :elsei[f] {expr1}                           |:elseif| |:elsei|
16. :wh[ile] {expr1}                            |:while| |:endwhile| |:wh| |:endw|
17. :for {var} in {object}                      |:for|
18. :endfo[r]                                   |:endfo| |:endfor|
19. :con[tinue]                                 |:continue| |:con|
20. :brea[k]                                    |:break| |:brea|
21. :try                                        |:try| |:endt| |:endtry|
22. :cat[ch] /{pattern}/                        |:cat| |:catch|
23. :fina[lly]                                  |:fina| |:finally|
24. :th[row] {expr1}                            |:th| |:throw|
25. :ec[ho] {expr1} ..                          |:ec| |:echo|
26. :echon {expr1} ..                           |:echon|
27. :echoh[l] {name}                            |:echoh| |:echohl|
28. :echom[sg] {expr1} ..                       |:echom| |:echomsg|
29. :echoe[rr] {expr1} ..                       |:echoe| |:echoerr|
30. :exe[cute] {expr1} ..                       |:exe| |:execute|


### ===🗝 let unlet

:let {var-name} = {expr1}               *:let* *E18*
            Set internal variable {var-name} to the result of the
            expression {expr1}.  The variable will get the type
            from the {expr}.  If {var-name} didn't exist yet, it
            is created.

:let {var-name}[{idx}] = {expr1}            *E689*
            Set a list item to the result of the expression
            {expr1}.  {var-name} must refer to a list and {idx}
            must be a valid index in that list.  For nested list
            the index can be repeated.
            This cannot be used to add an item to a |List|.
            This cannot be used to set a byte in a String.  You
            can do that like this: >
                :let var = var[0:2] . 'X' . var[4:]
<           When {var-name} is a |Blob| then {idx} can be the
            length of the blob, in which case one byte is
            appended.

                            *E711* *E719*
:let {var-name}[{idx1}:{idx2}] = {expr1}        *E708* *E709* *E710*
            Set a sequence of items in a |List| to the result of
            the expression {expr1}, which must be a list with the
            correct number of items.
            {idx1} can be omitted, zero is used instead.
            {idx2} can be omitted, meaning the end of the list.
            When the selected range of items is partly past the
            end of the list, items will be added.

            *:let+=* *:let-=* *:letstar=*
            *:let/=* *:let%=* *:let.=* *:let..=* *E734* *E985*
:let {var} += {expr1}   Like ":let {var} = {var} + {expr1}".
:let {var} -= {expr1}   Like ":let {var} = {var} - {expr1}".
:let {var} *= {expr1}   Like ":let {var} = {var} * {expr1}".
:let {var} /= {expr1}   Like ":let {var} = {var} / {expr1}".
:let {var} %= {expr1}   Like ":let {var} = {var} % {expr1}".
:let {var} .= {expr1}   Like ":let {var} = {var} . {expr1}".
:let {var} ..= {expr1}  Like ":let {var} = {var} .. {expr1}".
            These fail if {var} was not set yet and when the type
            of {var} and {expr1} don't fit the operator.
            `.=` is not supported with Vim script version 2 and
            later, see |vimscript-version|.


:let ${env-name} = {expr1}          *:let-environment* *:let-$*
            Set environment variable {env-name} to the result of
            the expression {expr1}.  The type is always String.

            On some systems making an environment variable empty
            causes it to be deleted.  Many systems do not make a
            difference between an environment variable that is not
            set and an environment variable that is empty.

:let ${env-name} .= {expr1}
            Append {expr1} to the environment variable {env-name}.
            If the environment variable didn't exist yet this
            works like "=".

:let @{reg-name} = {expr1}          *:let-register* *:let-@*
            Write the result of the expression {expr1} in register
            {reg-name}.  {reg-name} must be a single letter, and
            must be the name of a writable register (see
            |registers|).  "@@" can be used for the unnamed
            register, "@/" for the search pattern.
            If the result of {expr1} ends in a <CR> or <NL>, the
            register will be linewise, otherwise it will be set to
            characterwise.
            This can be used to clear the last search pattern: >
                :let @/ = ""
<           This is different from searching for an empty string,
            that would match everywhere.

:let @{reg-name} .= {expr1}
            Append {expr1} to register {reg-name}.  If the
            register was empty it's like setting it to {expr1}.

:let &{option-name} = {expr1}           *:let-option* *:let-&*
            Set option {option-name} to the result of the
            expression {expr1}.  A String or Number value is
            always converted to the type of the option.
            For an option local to a window or buffer the effect
            is just like using the |:set| command: both the local
            value and the global value are changed.
            Example: >
                :let &path = &path . ',/usr/local/include'
<           This also works for terminal codes in the form t_xx.
            But only for alphanumerical names.  Example: >
                :let &t_k1 = "\<Esc>[234;"
<           When the code does not exist yet it will be created as
            a terminal key code, there is no error.

:let &{option-name} .= {expr1}
            For a string option: Append {expr1} to the value.
            Does not insert a comma like |:set+=|.

:let &{option-name} += {expr1}
:let &{option-name} -= {expr1}
            For a number or boolean option: Add or subtract
            {expr1}.

:let &l:{option-name} = {expr1}
:let &l:{option-name} .= {expr1}
:let &l:{option-name} += {expr1}
:let &l:{option-name} -= {expr1}
            Like above, but only set the local value of an option
            (if there is one).  Works like |:setlocal|.

:let &g:{option-name} = {expr1}
:let &g:{option-name} .= {expr1}
:let &g:{option-name} += {expr1}
:let &g:{option-name} -= {expr1}
            Like above, but only set the global value of an option
            (if there is one).  Works like |:setglobal|.

:let [{name1}, {name2}, ...] = {expr1}      *:let-unpack* *E687* *E688*
            {expr1} must evaluate to a |List|.  The first item in
            the list is assigned to {name1}, the second item to
            {name2}, etc.
            The number of names must match the number of items in
            the |List|.
            Each name can be one of the items of the ":let"
            command as mentioned above.
            Example: >
                :let [s, item] = GetItem(s)
<           Detail: {expr1} is evaluated first, then the
            assignments are done in sequence.  This matters if
            {name2} depends on {name1}.  Example: >
                :let x = [0, 1]
                :let i = 0
                :let [i, x[i]] = [1, 2]
                :echo x
<           The result is [0, 2].

:let [{name1}, {name2}, ...] .= {expr1}
:let [{name1}, {name2}, ...] += {expr1}
:let [{name1}, {name2}, ...] -= {expr1}
            Like above, but append/add/subtract the value for each
            |List| item.

:let [{name}, ..., ; {lastname}] = {expr1}
            Like |:let-unpack| above, but the |List| may have more
            items than there are names.  A list of the remaining
            items is assigned to {lastname}.  If there are no
            remaining items {lastname} is set to an empty list.
            Example: >
                :let [a, b; rest] = ["aval", "bval", 3, 4]
<
:let [{name}, ..., ; {lastname}] .= {expr1}
:let [{name}, ..., ; {lastname}] += {expr1}
:let [{name}, ..., ; {lastname}] -= {expr1}
            Like above, but append/add/subtract the value for each
            |List| item.

                        *:let=<<* *:let-heredoc*
                        *E990* *E991* *E172* *E221*
:let {var-name} =<< [trim] {endmarker}
text...
text...
{endmarker}
            Set internal variable {var-name} to a List containing
            the lines of text bounded by the string {endmarker}.
            {endmarker} must not contain white space.
            {endmarker} cannot start with a lower case character.
            The last line should end only with the {endmarker}
            string without any other character.  Watch out for
            white space after {endmarker}!

            Without "trim" any white space characters in the lines
            of text are preserved.  If "trim" is specified before
            {endmarker}, then indentation is stripped so you can
            do: >
                let text =<< trim END
                   if ok
                     echo 'done'
                   endif
                END
<           Results in: ["if ok", "  echo 'done'", "endif"]
            The marker must line up with "let" and the indentation
            of the first line is removed from all the text lines.
            Specifically: all the leading indentation exactly
            matching the leading indentation of the first
            non-empty text line is stripped from the input lines.
            All leading indentation exactly matching the leading
            indentation before `let` is stripped from the line
            containing {endmarker}.  Note that the difference
            between space and tab matters here.

            If {var-name} didn't exist yet, it is created.
            Cannot be followed by another command, but can be
            followed by a comment.

            To avoid line continuation to be applied, consider
            adding 'C' to 'cpoptions': >
                set cpo+=C
                let var =<< END
                   \ leading backslash
                END
                set cpo-=C
<
            Examples: >
                let var1 =<< END
                Sample text 1
                    Sample text 2
                Sample text 3
                END

                let data =<< trim DATA
                    1 2 3 4
                    5 6 7 8
                DATA
<
                                *E121*
:let {var-name} ..  List the value of variable {var-name}.  Multiple
            variable names may be given.  Special names recognized
            here:               *E738*
              g:    global variables
              b:    local buffer variables
              w:    local window variables
              t:    local tab page variables
              s:    script-local variables
              l:    local function variables
              v:    Vim variables.

:let            List the values of all variables.  The type of the
            variable is indicated before the value:
                <nothing>   String
                #   Number
                *   Funcref

:unl[et][!] {name} ...              *:unlet* *:unl* *E108* *E795*
            Remove the internal variable {name}.  Several variable
            names can be given, they are all removed.  The name
            may also be a |List| or |Dictionary| item.
            With [!] no error message is given for non-existing
            variables.
            One or more items from a |List| can be removed: >
                :unlet list[3]    " remove fourth item
                :unlet list[3:]   " remove fourth item to last
<           One item from a |Dictionary| can be removed at a time: >
                :unlet dict['two']
                :unlet dict.two
<           This is especially useful to clean up used global
            variables and script-local variables (these are not
            deleted when the script ends).  Function-local
            variables are automatically deleted when the function
            ends.

:unl[et] ${env-name} ...            *:unlet-environment* *:unlet-$*
            Remove environment variable {env-name}.
            Can mix {name} and ${env-name} in one :unlet command.
            No error message is given for a non-existing
            variable, also without !.
            If the system does not support deleting an environment
            variable, it is made empty.

### ===🗝 const

                        *:cons* *:const*
:cons[t] {var-name} = {expr1}
:cons[t] [{name1}, {name2}, ...] = {expr1}
:cons[t] [{name}, ..., ; {lastname}] = {expr1}
:cons[t] {var-name} =<< [trim] {marker}
text...
text...
{marker}
            Similar to |:let|, but additionally lock the variable
            after setting the value.  This is the same as locking
            the variable with |:lockvar| just after |:let|, thus: >
                :const x = 1
<           is equivalent to: >
                :let x = 1
                :lockvar 1 x
<           This is useful if you want to make sure the variable
            is not modified.
                            *E995*
            |:const| does not allow to for changing a variable: >
                :let x = 1
                :const x = 2  " Error!
<                           *E996*
            Note that environment variables, option values and
            register values cannot be used here, since they cannot
            be locked.

:cons[t]
:cons[t] {var-name}
            If no argument is given or only {var-name} is given,
            the behavior is the same as |:let|.

### ===🗝 lockvar unlockvar

:lockv[ar][!] [depth] {name} ...            *:lockvar* *:lockv*
            Lock the internal variable {name}.  Locking means that
            it can no longer be changed (until it is unlocked).
            A locked variable can be deleted: >
                :lockvar v
                :let v = 'asdf'     " fails!
                :unlet v
<                           *E741* *E940*
            If you try to change a locked variable you get an
            error message: "E741: Value is locked: {name}".
            If you try to lock or unlock a built-in variable you
            get an error message: "E940: Cannot lock or unlock
            variable {name}".

            [depth] is relevant when locking a |List| or
            |Dictionary|.  It specifies how deep the locking goes:
                1   Lock the |List| or |Dictionary| itself,
                    cannot add or remove items, but can
                    still change their values.
                2   Also lock the values, cannot change
                    the items.  If an item is a |List| or
                    |Dictionary|, cannot add or remove
                    items, but can still change the
                    values.
                3   Like 2 but for the |List| /
                    |Dictionary| in the |List| /
                    |Dictionary|, one level deeper.
            The default [depth] is 2, thus when {name} is a |List|
            or |Dictionary| the values cannot be changed.
                                *E743*
            For unlimited depth use [!] and omit [depth].
            However, there is a maximum depth of 100 to catch
            loops.

            Note that when two variables refer to the same |List|
            and you lock one of them, the |List| will also be
            locked when used through the other variable.
            Example: >
                :let l = [0, 1, 2, 3]
                :let cl = l
                :lockvar l
                :let cl[1] = 99     " won't work!
<           You may want to make a copy of a list to avoid this.
            See |deepcopy()|.


:unlo[ckvar][!] [depth] {name} ...          *:unlockvar* *:unlo*
            Unlock the internal variable {name}.  Does the
            opposite of |:lockvar|.

### ===🗝 eval

                            *:eval*
:eval {expr}        Evaluate {expr} and discard the result.  Example: >
                :eval Getlist()->Filter()->append('$')

<           The expression is supposed to have a side effect,
            since the resulting value is not used.  In the example
            the `append()` call appends the List with text to the
            buffer.  This is similar to `:call` but works with any
            expression.

            The command can be shortened to `:ev` or `:eva`, but
            these are hard to recognize and therefore not to be
            used.


### ===🗝 if-else-endif

:if {expr1}         *:if* *:end* *:endif* *:en* *E171* *E579* *E580*
:en[dif]        Execute the commands until the next matching ":else"
            or ":endif" if {expr1} evaluates to non-zero.

            From Vim version 4.5 until 5.0, every Ex command in
            between the ":if" and ":endif" is ignored.  These two
            commands were just to allow for future expansions in a
            backward compatible way.  Nesting was allowed.  Note
            that any ":else" or ":elseif" was ignored, the "else"
            part was not executed either.

            You can use this to remain compatible with older
            versions: >
                :if version >= 500
                :  version-5-specific-commands
                :endif
<           The commands still need to be parsed to find the
            "endif".  Sometimes an older Vim has a problem with a
            new command.  For example, ":silent" is recognized as
            a ":substitute" command.  In that case ":execute" can
            avoid problems: >
                :if version >= 600
                :  execute "silent 1,$delete"
                :endif
<
            NOTE: The ":append" and ":insert" commands don't work
            properly in between ":if" and ":endif".

                        *:else* *:el* *E581* *E583*
:el[se]         Execute the commands until the next matching ":else"
            or ":endif" if they previously were not being
            executed.

                    *:elseif* *:elsei* *E582* *E584*
:elsei[f] {expr1}   Short for ":else" ":if", with the addition that there
            is no extra ":endif".

### ===🗝 while-endwhile

:wh[ile] {expr1}            *:while* *:endwhile* *:wh* *:endw*
                        *E170* *E585* *E588* *E733*
:endw[hile]     Repeat the commands between ":while" and ":endwhile",
            as long as {expr1} evaluates to non-zero.
            When an error is detected from a command inside the
            loop, execution continues after the "endwhile".
            Example: >
                :let lnum = 1
                :while lnum <= line("$")
                   :call FixLine(lnum)
                   :let lnum = lnum + 1
                :endwhile
<
            NOTE: The ":append" and ":insert" commands don't work
            properly inside a ":while" and ":for" loop.

### ===🗝 for-endfor

:for {var} in {object}                  *:for* *E690* *E732*
:endfo[r]                       *:endfo* *:endfor*
            Repeat the commands between ":for" and ":endfor" for
            each item in {object}.  {object} can be a |List| or
            a |Blob|.  Variable {var} is set to the value of each
            item.  When an error is detected for a command inside
            the loop, execution continues after the "endfor".
            Changing {object} inside the loop affects what items
            are used.  Make a copy if this is unwanted: >
                :for item in copy(mylist)
<
            When {object} is a |List| and not making a copy, Vim
            stores a reference to the next item in the |List|
            before executing the commands with the current item.
            Thus the current item can be removed without effect.
            Removing any later item means it will not be found.
            Thus the following example works (an inefficient way
            to make a |List| empty): >
                for item in mylist
                   call remove(mylist, 0)
                endfor
<           Note that reordering the |List| (e.g., with sort() or
            reverse()) may have unexpected effects.

            When {object} is a |Blob|, Vim always makes a copy to
            iterate over.  Unlike with |List|, modifying the
            |Blob| does not affect the iteration.

:for [{var1}, {var2}, ...] in {listlist}
:endfo[r]
            Like ":for" above, but each item in {listlist} must be
            a list, of which each item is assigned to {var1},
            {var2}, etc.  Example: >
                :for [lnum, col] in [[1, 3], [2, 5], [3, 8]]
                   :echo getline(lnum)[col]
                :endfor
<

### ===🗝 continue break 
                        *:continue* *:con* *E586*
:con[tinue]     When used inside a ":while" or ":for" loop, jumps back
            to the start of the loop.
            If it is used after a |:try| inside the loop but
            before the matching |:finally| (if present), the
            commands following the ":finally" up to the matching
            |:endtry| are executed first.  This process applies to
            all nested ":try"s inside the loop.  The outermost
            ":endtry" then jumps back to the start of the loop.

                        *:break* *:brea* *E587*
:brea[k]        When used inside a ":while" or ":for" loop, skips to
            the command after the matching ":endwhile" or
            ":endfor".
            If it is used after a |:try| inside the loop but
            before the matching |:finally| (if present), the
            commands following the ":finally" up to the matching
            |:endtry| are executed first.  This process applies to
            all nested ":try"s inside the loop.  The outermost
            ":endtry" then jumps to the command after the loop.

### ===🗝 try-catch-finally-throw

:try                *:try* *:endt* *:endtry* *E600* *E601* *E602*
:endt[ry]       Change the error handling for the commands between
            ":try" and ":endtry" including everything being
            executed across ":source" commands, function calls,
            or autocommand invocations.

            When an error or interrupt is detected and there is
            a |:finally| command following, execution continues
            after the ":finally".  Otherwise, or when the
            ":endtry" is reached thereafter, the next
            (dynamically) surrounding ":try" is checked for
            a corresponding ":finally" etc.  Then the script
            processing is terminated.  (Whether a function
            definition has an "abort" argument does not matter.)
            Example: >
        :try | edit too much | finally | echo "cleanup" | endtry
        :echo "impossible"  " not reached, script terminated above
<
            Moreover, an error or interrupt (dynamically) inside
            ":try" and ":endtry" is converted to an exception.  It
            can be caught as if it were thrown by a |:throw|
            command (see |:catch|).  In this case, the script
            processing is not terminated.

            The value "Vim:Interrupt" is used for an interrupt
            exception.  An error in a Vim command is converted
            to a value of the form "Vim({command}):{errmsg}",
            other errors are converted to a value of the form
            "Vim:{errmsg}".  {command} is the full command name,
            and {errmsg} is the message that is displayed if the
            error exception is not caught, always beginning with
            the error number.
            Examples: >
        :try | sleep 100 | catch /^Vim:Interrupt$/ | endtry
        :try | edit | catch /^Vim(edit):E\d\+/ | echo "error" | endtry
<:cat[ch] /{pattern}/    
:fina[lly]      
:th[row] {expr1}    
:ec[ho] {expr1} ..  
:echon {expr1} ..   
                    *:cat* *:catch* *E603* *E604* *E605*
:cat[ch] /{pattern}/    The following commands until the next |:catch|,
            |:finally|, or |:endtry| that belongs to the same
            |:try| as the ":catch" are executed when an exception
            matching {pattern} is being thrown and has not yet
            been caught by a previous ":catch".  Otherwise, these
            commands are skipped.
            When {pattern} is omitted all errors are caught.
            Examples: >
        :catch /^Vim:Interrupt$/     " catch interrupts (CTRL-C)
        :catch /^Vim\%((\a\+)\)\=:E/     " catch all Vim errors
        :catch /^Vim\%((\a\+)\)\=:/  " catch errors and interrupts
        :catch /^Vim(write):/        " catch all errors in :write
        :catch /^Vim\%((\a\+)\)\=:E123:/ " catch error E123
        :catch /my-exception/        " catch user exception
        :catch /.*/          " catch everything
        :catch               " same as /.*/
<
            Another character can be used instead of / around the
            {pattern}, so long as it does not have a special
            meaning (e.g., '|' or '"') and doesn't occur inside
            {pattern}.
            Information about the exception is available in
            |v:exception|.  Also see |throw-variables|.
            NOTE: It is not reliable to ":catch" the TEXT of
            an error message because it may vary in different
            locales.

                    *:fina* *:finally* *E606* *E607*
:fina[lly]      The following commands until the matching |:endtry|
            are executed whenever the part between the matching
            |:try| and the ":finally" is left:  either by falling
            through to the ":finally" or by a |:continue|,
            |:break|, |:finish|, or |:return|, or by an error or
            interrupt or exception (see |:throw|).

                            *:th* *:throw* *E608*
:th[row] {expr1}    The {expr1} is evaluated and thrown as an exception.
            If the ":throw" is used after a |:try| but before the
            first corresponding |:catch|, commands are skipped
            until the first ":catch" matching {expr1} is reached.
            If there is no such ":catch" or if the ":throw" is
            used after a ":catch" but before the |:finally|, the
            commands following the ":finally" (if present) up to
            the matching |:endtry| are executed.  If the ":throw"
            is after the ":finally", commands up to the ":endtry"
            are skipped.  At the ":endtry", this process applies
            again for the next dynamically surrounding ":try"
            (which may be found in a calling function or sourcing
            script), until a matching ":catch" has been found.
            If the exception is not caught, the command processing
            is terminated.
            Example: >
        :try | throw "oops" | catch /^oo/ | echo "caught" | endtry
<           Note that "catch" may need to be on a separate line
            for when an error causes the parsing to skip the whole
            line and not see the "|" that separates the commands.

### ===🗝 echo echon echohl echomsg echoerr
                            *:ec* *:echo*
:ec[ho] {expr1} ..  Echoes each {expr1}, with a space in between.  The
            first {expr1} starts on a new line.
            Also see |:comment|.
            Use "\n" to start a new line.  Use "\r" to move the
            cursor to the first column.
            Uses the highlighting set by the |:echohl| command.
            Cannot be followed by a comment.
            Example: >
        :echo "the value of 'shell' is" &shell
<                           *:echo-redraw*
            A later redraw may make the message disappear again.
            And since Vim mostly postpones redrawing until it's
            finished with a sequence of commands this happens
            quite often.  To avoid that a command from before the
            ":echo" causes a redraw afterwards (redraws are often
            postponed until you type something), force a redraw
            with the |:redraw| command.  Example: >
        :new | redraw | echo "there is a new window"
<
                            *:echon*
:echon {expr1} ..   Echoes each {expr1}, without anything added.  Also see
            |:comment|.
            Uses the highlighting set by the |:echohl| command.
            Cannot be followed by a comment.
            Example: >
                :echon "the value of 'shell' is " &shell
<
            Note the difference between using ":echo", which is a
            Vim command, and ":!echo", which is an external shell
            command: >
        :!echo %        --> filename
<           The arguments of ":!" are expanded, see |:_%|. >
        :!echo "%"      --> filename or "filename"
<           Like the previous example.  Whether you see the double
            quotes or not depends on your 'shell'. >
        :echo %         --> nothing
<           The '%' is an illegal character in an expression. >
        :echo "%"       --> %
<           This just echoes the '%' character. >
        :echo expand("%")   --> filename
<           This calls the expand() function to expand the '%'.

                            *:echoh* *:echohl*
:echoh[l] {name}    Use the highlight group {name} for the following
            |:echo|, |:echon| and |:echomsg| commands.  Also used
            for the |input()| prompt.  Example: >

        :echohl WarningMsg | echo "Don't panic!" | echohl None

            see |v:errmsg| |errmsg-variable|
                |v:statusmsg| |statusmsg-variable|
                |v:warningmsg| |warningmsg-variable|
<           Don't forget to set the group back to "None",
            otherwise all following echo's will be highlighted.

                            *:echom* *:echomsg*
:echom[sg] {expr1} ..   Echo the expression(s) as a true message, saving the
            message in the |message-history|.
            Spaces are placed between the arguments as with the
            |:echo| command.  But unprintable characters are
            displayed, not interpreted.
            The parsing works slightly different from |:echo|,
            more like |:execute|.  All the expressions are first
            evaluated and concatenated before echoing anything.
            If expressions does not evaluate to a Number or
            String, string() is used to turn it into a string.
            Uses the highlighting set by the |:echohl| command.
            Example: >
        :echomsg "It's a Zizzer Zazzer Zuzz, as you can plainly see."
<           See |:echo-redraw| to avoid the message disappearing
            when the screen is redrawn.
                            *:echoe* *:echoerr*
:echoe[rr] {expr1} ..   Echo the expression(s) as an error message, saving the
            message in the |message-history|.  When used in a
            script or function the line number will be added.
            Spaces are placed between the arguments as with the
            |:echomsg| command.  When used inside a try conditional,
            the message is raised as an error exception instead
            (see |try-echoerr|).
            Example: >
        :echoerr "This script just failed!"
<           If you just want a highlighted message use |:echohl|.
            And to get a beep: >
        :exe "normal \<Esc>"
<

### ===🗝 execute
                            *:exe* *:execute*
:exe[cute] {expr1} ..   Executes the string that results from the evaluation
            of {expr1} as an Ex command.
            Multiple arguments are concatenated, with a space in
            between.  To avoid the extra space use the "."
            operator to concatenate strings into one argument.
            {expr1} is used as the processed command, command line
            editing keys are not recognized.
            Cannot be followed by a comment.
            Examples: >
        :execute "buffer" nextbuf
        :execute "normal" count . "w"
<
            ":execute" can be used to append a command to commands
            that don't accept a '|'.  Example: >
        :execute '!ls' | echo "theend"

<           ":execute" is also a nice way to avoid having to type
            control characters in a Vim script for a ":normal"
            command: >
        :execute "normal ixxx\<Esc>"
<           This has an <Esc> character, see |expr-string|.

            Be careful to correctly escape special characters in
            file names.  The |fnameescape()| function can be used
            for Vim commands, |shellescape()| for |:!| commands.
            Examples: >
        :execute "e " . fnameescape(filename)
        :execute "!ls " . shellescape(filename, 1)
<
            Note: The executed string may be any command-line, but
            starting or ending "if", "while" and "for" does not
            always work, because when commands are skipped the
            ":execute" is not evaluated and Vim loses track of
            where blocks start and end.  Also "break" and
            "continue" should not be inside ":execute".
            This example does not work, because the ":execute" is
            not evaluated and Vim does not see the "while", and
            gives an error for finding an ":endwhile": >
        :if 0
        : execute 'while i > 5'
        :  echo "test"
        : endwhile
        :endif
<
            It is allowed to have a "while" or "if" command
            completely in the executed string: >
        :execute 'while i < 5 | echo i | let i = i + 1 | endwhile'
<

                            *:exe-comment*
            ":execute", ":echo" and ":echon" cannot be followed by
            a comment directly, because they see the '"' as the
            start of a string.  But, you can use '|' followed by a
            comment.  Example: >
        :echo "foo" | "this is a comment



## ==⚡ Exception handling
                                                                    *exception-handling*
- [Expression evaluation -  8.  Exception](doc/eavl.txt)

- Try Conditionals                                      |try-conditionals|
- Nesting of try Conditionals                           |try-nesting|
- Examining Exception Handling Code                     |except-examine|
- Throwing and Catching Exceptions                      |throw-catch|
- Cleanup Code                                          |try-finally|
- Catching Errors                                       |catch-errors|
- Ignoring Errors                                       |ignore-errors|
- Catching Interrupts                                   |catch-interrupt|
- Catching All                                          |catch-all|
- Exceptions and Autocommands                           |except-autocmd|
- Exception Hierarchies and Parameterized Exceptions    |except-hier-param|
- Peculiarities                                         |except-compat|

The Vim script language comprises an exception handling feature.  This section
explains how it can be used in a Vim script.

Exceptions may be raised by Vim on an error or on interrupt, see
|catch-errors| and |catch-interrupt|.  You can also explicitly throw an
exception by using the ":throw" command, see |throw-catch|.


TRY CONDITIONALS                    *try-conditionals*

Exceptions can be caught or can cause cleanup code to be executed.  You can
use a try conditional to specify catch clauses (that catch exceptions) and/or
a finally clause (to be executed for cleanup).
   A try conditional begins with a |:try| command and ends at the matching
|:endtry| command.  In between, you can use a |:catch| command to start
a catch clause, or a |:finally| command to start a finally clause.  There may
be none or multiple catch clauses, but there is at most one finally clause,
which must not be followed by any catch clauses.  The lines before the catch
clauses and the finally clause is called a try block. >

     :try
     :  ...
     :  ...             TRY BLOCK
     :  ...
     :catch /{pattern}/
     :  ...
     :  ...             CATCH CLAUSE
     :  ...
     :catch /{pattern}/
     :  ...
     :  ...             CATCH CLAUSE
     :  ...
     :finally
     :  ...
     :  ...             FINALLY CLAUSE
     :  ...
     :endtry

The try conditional allows to watch code for exceptions and to take the
appropriate actions.  Exceptions from the try block may be caught.  Exceptions
from the try block and also the catch clauses may cause cleanup actions.
   When no exception is thrown during execution of the try block, the control
is transferred to the finally clause, if present.  After its execution, the
script continues with the line following the ":endtry".
   When an exception occurs during execution of the try block, the remaining
lines in the try block are skipped.  The exception is matched against the
patterns specified as arguments to the ":catch" commands.  The catch clause
after the first matching ":catch" is taken, other catch clauses are not
executed.  The catch clause ends when the next ":catch", ":finally", or
":endtry" command is reached - whatever is first.  Then, the finally clause
(if present) is executed.  When the ":endtry" is reached, the script execution
continues in the following line as usual.
   When an exception that does not match any of the patterns specified by the
":catch" commands is thrown in the try block, the exception is not caught by
that try conditional and none of the catch clauses is executed.  Only the
finally clause, if present, is taken.  The exception pends during execution of
the finally clause.  It is resumed at the ":endtry", so that commands after
the ":endtry" are not executed and the exception might be caught elsewhere,
see |try-nesting|.
   When during execution of a catch clause another exception is thrown, the
remaining lines in that catch clause are not executed.  The new exception is
not matched against the patterns in any of the ":catch" commands of the same
try conditional and none of its catch clauses is taken.  If there is, however,
a finally clause, it is executed, and the exception pends during its
execution.  The commands following the ":endtry" are not executed.  The new
exception might, however, be caught elsewhere, see |try-nesting|.
   When during execution of the finally clause (if present) an exception is
thrown, the remaining lines in the finally clause are skipped.  If the finally
clause has been taken because of an exception from the try block or one of the
catch clauses, the original (pending) exception is discarded.  The commands
following the ":endtry" are not executed, and the exception from the finally
clause is propagated and can be caught elsewhere, see |try-nesting|.

The finally clause is also executed, when a ":break" or ":continue" for
a ":while" loop enclosing the complete try conditional is executed from the
try block or a catch clause.  Or when a ":return" or ":finish" is executed
from the try block or a catch clause of a try conditional in a function or
sourced script, respectively.  The ":break", ":continue", ":return", or
":finish" pends during execution of the finally clause and is resumed when the
":endtry" is reached.  It is, however, discarded when an exception is thrown
from the finally clause.
   When a ":break" or ":continue" for a ":while" loop enclosing the complete
try conditional or when a ":return" or ":finish" is encountered in the finally
clause, the rest of the finally clause is skipped, and the ":break",
":continue", ":return" or ":finish" is executed as usual.  If the finally
clause has been taken because of an exception or an earlier ":break",
":continue", ":return", or ":finish" from the try block or a catch clause,
this pending exception or command is discarded.

For examples see |throw-catch| and |try-finally|.


NESTING OF TRY CONDITIONALS             *try-nesting*

Try conditionals can be nested arbitrarily.  That is, a complete try
conditional can be put into the try block, a catch clause, or the finally
clause of another try conditional.  If the inner try conditional does not
catch an exception thrown in its try block or throws a new exception from one
of its catch clauses or its finally clause, the outer try conditional is
checked according to the rules above.  If the inner try conditional is in the
try block of the outer try conditional, its catch clauses are checked, but
otherwise only the finally clause is executed.  It does not matter for
nesting, whether the inner try conditional is directly contained in the outer
one, or whether the outer one sources a script or calls a function containing
the inner try conditional.

When none of the active try conditionals catches an exception, just their
finally clauses are executed.  Thereafter, the script processing terminates.
An error message is displayed in case of an uncaught exception explicitly
thrown by a ":throw" command.  For uncaught error and interrupt exceptions
implicitly raised by Vim, the error message(s) or interrupt message are shown
as usual.

For examples see |throw-catch|.


EXAMINING EXCEPTION HANDLING CODE           *except-examine*

Exception handling code can get tricky.  If you are in doubt what happens, set
'verbose' to 13 or use the ":13verbose" command modifier when sourcing your
script file.  Then you see when an exception is thrown, discarded, caught, or
finished.  When using a verbosity level of at least 14, things pending in
a finally clause are also shown.  This information is also given in debug mode
(see |debug-scripts|).


THROWING AND CATCHING EXCEPTIONS            *throw-catch*

You can throw any number or string as an exception.  Use the |:throw| command
and pass the value to be thrown as argument: >
    :throw 4711
    :throw "string"
<                           *throw-expression*
You can also specify an expression argument.  The expression is then evaluated
first, and the result is thrown: >
    :throw 4705 + strlen("string")
    :throw strpart("strings", 0, 6)

An exception might be thrown during evaluation of the argument of the ":throw"
command.  Unless it is caught there, the expression evaluation is abandoned.
The ":throw" command then does not throw a new exception.
   Example: >

    :function! Foo(arg)
    :  try
    :    throw a:arg
    :  catch /foo/
    :  endtry
    :  return 1
    :endfunction
    :
    :function! Bar()
    :  echo "in Bar"
    :  return 4710
    :endfunction
    :
    :throw Foo("arrgh") + Bar()

This throws "arrgh", and "in Bar" is not displayed since Bar() is not
executed. >
    :throw Foo("foo") + Bar()
however displays "in Bar" and throws 4711.

Any other command that takes an expression as argument might also be
abandoned by an (uncaught) exception during the expression evaluation.  The
exception is then propagated to the caller of the command.
   Example: >

    :if Foo("arrgh")
    :  echo "then"
    :else
    :  echo "else"
    :endif

Here neither of "then" or "else" is displayed.

                            *catch-order*
Exceptions can be caught by a try conditional with one or more |:catch|
commands, see |try-conditionals|.   The values to be caught by each ":catch"
command can be specified as a pattern argument.  The subsequent catch clause
gets executed when a matching exception is caught.
   Example: >

    :function! Foo(value)
    :  try
    :    throw a:value
    :  catch /^\d\+$/
    :    echo "Number thrown"
    :  catch /.*/
    :    echo "String thrown"
    :  endtry
    :endfunction
    :
    :call Foo(0x1267)
    :call Foo('string')

The first call to Foo() displays "Number thrown", the second "String thrown".
An exception is matched against the ":catch" commands in the order they are
specified.  Only the first match counts.  So you should place the more
specific ":catch" first.  The following order does not make sense: >

    :  catch /.*/
    :    echo "String thrown"
    :  catch /^\d\+$/
    :    echo "Number thrown"

The first ":catch" here matches always, so that the second catch clause is
never taken.

                            *throw-variables*
If you catch an exception by a general pattern, you may access the exact value
in the variable |v:exception|: >

    :  catch /^\d\+$/
    :    echo "Number thrown.  Value is" v:exception

You may also be interested where an exception was thrown.  This is stored in
|v:throwpoint|.  Note that "v:exception" and "v:throwpoint" are valid for the
exception most recently caught as long it is not finished.
   Example: >

    :function! Caught()
    :  if v:exception != ""
    :    echo 'Caught "' . v:exception . '" in ' . v:throwpoint
    :  else
    :    echo 'Nothing caught'
    :  endif
    :endfunction
    :
    :function! Foo()
    :  try
    :    try
    :      try
    :    throw 4711
    :      finally
    :    call Caught()
    :      endtry
    :    catch /.*/
    :      call Caught()
    :      throw "oops"
    :    endtry
    :  catch /.*/
    :    call Caught()
    :  finally
    :    call Caught()
    :  endtry
    :endfunction
    :
    :call Foo()

This displays >

    Nothing caught
    Caught "4711" in function Foo, line 4
    Caught "oops" in function Foo, line 10
    Nothing caught

A practical example:  The following command ":LineNumber" displays the line
number in the script or function where it has been used: >

    :function! LineNumber()
    :    return substitute(v:throwpoint, '.*\D\(\d\+\).*', '\1', "")
    :endfunction
    :command! LineNumber try | throw "" | catch | echo LineNumber() | endtry
<
                            *try-nested*
An exception that is not caught by a try conditional can be caught by
a surrounding try conditional: >

    :try
    :  try
    :    throw "foo"
    :  catch /foobar/
    :    echo "foobar"
    :  finally
    :    echo "inner finally"
    :  endtry
    :catch /foo/
    :  echo "foo"
    :endtry

The inner try conditional does not catch the exception, just its finally
clause is executed.  The exception is then caught by the outer try
conditional.  The example displays "inner finally" and then "foo".

                            *throw-from-catch*
You can catch an exception and throw a new one to be caught elsewhere from the
catch clause: >

    :function! Foo()
    :  throw "foo"
    :endfunction
    :
    :function! Bar()
    :  try
    :    call Foo()
    :  catch /foo/
    :    echo "Caught foo, throw bar"
    :    throw "bar"
    :  endtry
    :endfunction
    :
    :try
    :  call Bar()
    :catch /.*/
    :  echo "Caught" v:exception
    :endtry

This displays "Caught foo, throw bar" and then "Caught bar".

                            *rethrow*
There is no real rethrow in the Vim script language, but you may throw
"v:exception" instead: >

    :function! Bar()
    :  try
    :    call Foo()
    :  catch /.*/
    :    echo "Rethrow" v:exception
    :    throw v:exception
    :  endtry
    :endfunction
<                           *try-echoerr*
Note that this method cannot be used to "rethrow" Vim error or interrupt
exceptions, because it is not possible to fake Vim internal exceptions.
Trying so causes an error exception.  You should throw your own exception
denoting the situation.  If you want to cause a Vim error exception containing
the original error exception value, you can use the |:echoerr| command: >

    :try
    :  try
    :    asdf
    :  catch /.*/
    :    echoerr v:exception
    :  endtry
    :catch /.*/
    :  echo v:exception
    :endtry

This code displays

    Vim(echoerr):Vim:E492: Not an editor command:   asdf ~


CLEANUP CODE                        *try-finally*

Scripts often change global settings and restore them at their end.  If the
user however interrupts the script by pressing CTRL-C, the settings remain in
an inconsistent state.  The same may happen to you in the development phase of
a script when an error occurs or you explicitly throw an exception without
catching it.  You can solve these problems by using a try conditional with
a finally clause for restoring the settings.  Its execution is guaranteed on
normal control flow, on error, on an explicit ":throw", and on interrupt.
(Note that errors and interrupts from inside the try conditional are converted
to exceptions.  When not caught, they terminate the script after the finally
clause has been executed.)
Example: >

    :try
    :  let s:saved_ts = &ts
    :  set ts=17
    :
    :  " Do the hard work here.
    :
    :finally
    :  let &ts = s:saved_ts
    :  unlet s:saved_ts
    :endtry

This method should be used locally whenever a function or part of a script
changes global settings which need to be restored on failure or normal exit of
that function or script part.

                            *break-finally*
Cleanup code works also when the try block or a catch clause is left by
a ":continue", ":break", ":return", or ":finish".
   Example: >

    :let first = 1
    :while 1
    :  try
    :    if first
    :      echo "first"
    :      let first = 0
    :      continue
    :    else
    :      throw "second"
    :    endif
    :  catch /.*/
    :    echo v:exception
    :    break
    :  finally
    :    echo "cleanup"
    :  endtry
    :  echo "still in while"
    :endwhile
    :echo "end"

This displays "first", "cleanup", "second", "cleanup", and "end". >

    :function! Foo()
    :  try
    :    return 4711
    :  finally
    :    echo "cleanup\n"
    :  endtry
    :  echo "Foo still active"
    :endfunction
    :
    :echo Foo() "returned by Foo"

This displays "cleanup" and "4711 returned by Foo".  You don't need to add an
extra ":return" in the finally clause.  (Above all, this would override the
return value.)

                            *except-from-finally*
Using either of ":continue", ":break", ":return", ":finish", or ":throw" in
a finally clause is possible, but not recommended since it abandons the
cleanup actions for the try conditional.  But, of course, interrupt and error
exceptions might get raised from a finally clause.
   Example where an error in the finally clause stops an interrupt from
working correctly: >

    :try
    :  try
    :    echo "Press CTRL-C for interrupt"
    :    while 1
    :    endwhile
    :  finally
    :    unlet novar
    :  endtry
    :catch /novar/
    :endtry
    :echo "Script still running"
    :sleep 1

If you need to put commands that could fail into a finally clause, you should
think about catching or ignoring the errors in these commands, see
|catch-errors| and |ignore-errors|.


CATCHING ERRORS                     *catch-errors*

If you want to catch specific errors, you just have to put the code to be
watched in a try block and add a catch clause for the error message.  The
presence of the try conditional causes all errors to be converted to an
exception.  No message is displayed and |v:errmsg| is not set then.  To find
the right pattern for the ":catch" command, you have to know how the format of
the error exception is.
   Error exceptions have the following format: >

    Vim({cmdname}):{errmsg}
or >
    Vim:{errmsg}

{cmdname} is the name of the command that failed; the second form is used when
the command name is not known.  {errmsg} is the error message usually produced
when the error occurs outside try conditionals.  It always begins with
a capital "E", followed by a two or three-digit error number, a colon, and
a space.

Examples:

The command >
    :unlet novar
normally produces the error message >
    E108: No such variable: "novar"
which is converted inside try conditionals to an exception >
    Vim(unlet):E108: No such variable: "novar"

The command >
    :dwim
normally produces the error message >
    E492: Not an editor command: dwim
which is converted inside try conditionals to an exception >
    Vim:E492: Not an editor command: dwim

You can catch all ":unlet" errors by a >
    :catch /^Vim(unlet):/
or all errors for misspelled command names by a >
    :catch /^Vim:E492:/

Some error messages may be produced by different commands: >
    :function nofunc
and >
    :delfunction nofunc
both produce the error message >
    E128: Function name must start with a capital: nofunc
which is converted inside try conditionals to an exception >
    Vim(function):E128: Function name must start with a capital: nofunc
or >
    Vim(delfunction):E128: Function name must start with a capital: nofunc
respectively.  You can catch the error by its number independently on the
command that caused it if you use the following pattern: >
    :catch /^Vim(\a\+):E128:/

Some commands like >
    :let x = novar
produce multiple error messages, here: >
    E121: Undefined variable: novar
    E15: Invalid expression:  novar
Only the first is used for the exception value, since it is the most specific
one (see |except-several-errors|).  So you can catch it by >
    :catch /^Vim(\a\+):E121:/

You can catch all errors related to the name "nofunc" by >
    :catch /\<nofunc\>/

You can catch all Vim errors in the ":write" and ":read" commands by >
    :catch /^Vim(\(write\|read\)):E\d\+:/

You can catch all Vim errors by the pattern >
    :catch /^Vim\((\a\+)\)\=:E\d\+:/
<
                            *catch-text*
NOTE: You should never catch the error message text itself: >
    :catch /No such variable/
only works in the English locale, but not when the user has selected
a different language by the |:language| command.  It is however helpful to
cite the message text in a comment: >
    :catch /^Vim(\a\+):E108:/   " No such variable


IGNORING ERRORS                     *ignore-errors*

You can ignore errors in a specific Vim command by catching them locally: >

    :try
    :  write
    :catch
    :endtry

But you are strongly recommended NOT to use this simple form, since it could
catch more than you want.  With the ":write" command, some autocommands could
be executed and cause errors not related to writing, for instance: >

    :au BufWritePre * unlet novar

There could even be such errors you are not responsible for as a script
writer: a user of your script might have defined such autocommands.  You would
then hide the error from the user.
   It is much better to use >

    :try
    :  write
    :catch /^Vim(write):/
    :endtry

which only catches real write errors.  So catch only what you'd like to ignore
intentionally.

For a single command that does not cause execution of autocommands, you could
even suppress the conversion of errors to exceptions by the ":silent!"
command: >
    :silent! nunmap k
This works also when a try conditional is active.


CATCHING INTERRUPTS                 *catch-interrupt*

When there are active try conditionals, an interrupt (CTRL-C) is converted to
the exception "Vim:Interrupt".  You can catch it like every exception.  The
script is not terminated, then.
   Example: >

    :function! TASK1()
    :  sleep 10
    :endfunction

    :function! TASK2()
    :  sleep 20
    :endfunction

    :while 1
    :  let command = input("Type a command: ")
    :  try
    :    if command == ""
    :      continue
    :    elseif command == "END"
    :      break
    :    elseif command == "TASK1"
    :      call TASK1()
    :    elseif command == "TASK2"
    :      call TASK2()
    :    else
    :      echo "\nIllegal command:" command
    :      continue
    :    endif
    :  catch /^Vim:Interrupt$/
    :    echo "\nCommand interrupted"
    :    " Caught the interrupt.  Continue with next prompt.
    :  endtry
    :endwhile

You can interrupt a task here by pressing CTRL-C; the script then asks for
a new command.  If you press CTRL-C at the prompt, the script is terminated.

For testing what happens when CTRL-C would be pressed on a specific line in
your script, use the debug mode and execute the |>quit| or |>interrupt|
command on that line.  See |debug-scripts|.


CATCHING ALL                        *catch-all*

The commands >

    :catch /.*/
    :catch //
    :catch

catch everything, error exceptions, interrupt exceptions and exceptions
explicitly thrown by the |:throw| command.  This is useful at the top level of
a script in order to catch unexpected things.
   Example: >

    :try
    :
    :  " do the hard work here
    :
    :catch /MyException/
    :
    :  " handle known problem
    :
    :catch /^Vim:Interrupt$/
    :    echo "Script interrupted"
    :catch /.*/
    :  echo "Internal error (" . v:exception . ")"
    :  echo " - occurred at " . v:throwpoint
    :endtry
    :" end of script

Note: Catching all might catch more things than you want.  Thus, you are
strongly encouraged to catch only for problems that you can really handle by
specifying a pattern argument to the ":catch".
   Example: Catching all could make it nearly impossible to interrupt a script
by pressing CTRL-C: >

    :while 1
    :  try
    :    sleep 1
    :  catch
    :  endtry
    :endwhile


EXCEPTIONS AND AUTOCOMMANDS             *except-autocmd*

Exceptions may be used during execution of autocommands.  Example: >

    :autocmd User x try
    :autocmd User x   throw "Oops!"
    :autocmd User x catch
    :autocmd User x   echo v:exception
    :autocmd User x endtry
    :autocmd User x throw "Arrgh!"
    :autocmd User x echo "Should not be displayed"
    :
    :try
    :  doautocmd User x
    :catch
    :  echo v:exception
    :endtry

This displays "Oops!" and "Arrgh!".

                            *except-autocmd-Pre*
For some commands, autocommands get executed before the main action of the
command takes place.  If an exception is thrown and not caught in the sequence
of autocommands, the sequence and the command that caused its execution are
abandoned and the exception is propagated to the caller of the command.
   Example: >

    :autocmd BufWritePre * throw "FAIL"
    :autocmd BufWritePre * echo "Should not be displayed"
    :
    :try
    :  write
    :catch
    :  echo "Caught:" v:exception "from" v:throwpoint
    :endtry

Here, the ":write" command does not write the file currently being edited (as
you can see by checking 'modified'), since the exception from the BufWritePre
autocommand abandons the ":write".  The exception is then caught and the
script displays: >

    Caught: FAIL from BufWrite Auto commands for "*"
<
                            *except-autocmd-Post*
For some commands, autocommands get executed after the main action of the
command has taken place.  If this main action fails and the command is inside
an active try conditional, the autocommands are skipped and an error exception
is thrown that can be caught by the caller of the command.
   Example: >

    :autocmd BufWritePost * echo "File successfully written!"
    :
    :try
    :  write /i/m/p/o/s/s/i/b/l/e
    :catch
    :  echo v:exception
    :endtry

This just displays: >

    Vim(write):E212: Can't open file for writing (/i/m/p/o/s/s/i/b/l/e)

If you really need to execute the autocommands even when the main action
fails, trigger the event from the catch clause.
   Example: >

    :autocmd BufWritePre  * set noreadonly
    :autocmd BufWritePost * set readonly
    :
    :try
    :  write /i/m/p/o/s/s/i/b/l/e
    :catch
    :  doautocmd BufWritePost /i/m/p/o/s/s/i/b/l/e
    :endtry
<
You can also use ":silent!": >

    :let x = "ok"
    :let v:errmsg = ""
    :autocmd BufWritePost * if v:errmsg != ""
    :autocmd BufWritePost *   let x = "after fail"
    :autocmd BufWritePost * endif
    :try
    :  silent! write /i/m/p/o/s/s/i/b/l/e
    :catch
    :endtry
    :echo x

This displays "after fail".

If the main action of the command does not fail, exceptions from the
autocommands will be catchable by the caller of the command:  >

    :autocmd BufWritePost * throw ":-("
    :autocmd BufWritePost * echo "Should not be displayed"
    :
    :try
    :  write
    :catch
    :  echo v:exception
    :endtry
<
                            *except-autocmd-Cmd*
For some commands, the normal action can be replaced by a sequence of
autocommands.  Exceptions from that sequence will be catchable by the caller
of the command.
   Example:  For the ":write" command, the caller cannot know whether the file
had actually been written when the exception occurred.  You need to tell it in
some way. >

    :if !exists("cnt")
    :  let cnt = 0
    :
    :  autocmd BufWriteCmd * if &modified
    :  autocmd BufWriteCmd *   let cnt = cnt + 1
    :  autocmd BufWriteCmd *   if cnt % 3 == 2
    :  autocmd BufWriteCmd *     throw "BufWriteCmdError"
    :  autocmd BufWriteCmd *   endif
    :  autocmd BufWriteCmd *   write | set nomodified
    :  autocmd BufWriteCmd *   if cnt % 3 == 0
    :  autocmd BufWriteCmd *     throw "BufWriteCmdError"
    :  autocmd BufWriteCmd *   endif
    :  autocmd BufWriteCmd *   echo "File successfully written!"
    :  autocmd BufWriteCmd * endif
    :endif
    :
    :try
    :   write
    :catch /^BufWriteCmdError$/
    :  if &modified
    :    echo "Error on writing (file contents not changed)"
    :  else
    :    echo "Error after writing"
    :  endif
    :catch /^Vim(write):/
    :    echo "Error on writing"
    :endtry

When this script is sourced several times after making changes, it displays
first >
    File successfully written!
then >
    Error on writing (file contents not changed)
then >
    Error after writing
etc.

                            *except-autocmd-ill*
You cannot spread a try conditional over autocommands for different events.
The following code is ill-formed: >

    :autocmd BufWritePre  * try
    :
    :autocmd BufWritePost * catch
    :autocmd BufWritePost *   echo v:exception
    :autocmd BufWritePost * endtry
    :
    :write


EXCEPTION HIERARCHIES AND PARAMETERIZED EXCEPTIONS  *except-hier-param*

Some programming languages allow to use hierarchies of exception classes or to
pass additional information with the object of an exception class.  You can do
similar things in Vim.
   In order to throw an exception from a hierarchy, just throw the complete
class name with the components separated by a colon, for instance throw the
string "EXCEPT:MATHERR:OVERFLOW" for an overflow in a mathematical library.
   When you want to pass additional information with your exception class, add
it in parentheses, for instance throw the string "EXCEPT:IO:WRITEERR(myfile)"
for an error when writing "myfile".
   With the appropriate patterns in the ":catch" command, you can catch for
base classes or derived classes of your hierarchy.  Additional information in
parentheses can be cut out from |v:exception| with the ":substitute" command.
   Example: >

    :function! CheckRange(a, func)
    :  if a:a < 0
    :    throw "EXCEPT:MATHERR:RANGE(" . a:func . ")"
    :  endif
    :endfunction
    :
    :function! Add(a, b)
    :  call CheckRange(a:a, "Add")
    :  call CheckRange(a:b, "Add")
    :  let c = a:a + a:b
    :  if c < 0
    :    throw "EXCEPT:MATHERR:OVERFLOW"
    :  endif
    :  return c
    :endfunction
    :
    :function! Div(a, b)
    :  call CheckRange(a:a, "Div")
    :  call CheckRange(a:b, "Div")
    :  if (a:b == 0)
    :    throw "EXCEPT:MATHERR:ZERODIV"
    :  endif
    :  return a:a / a:b
    :endfunction
    :
    :function! Write(file)
    :  try
    :    execute "write" fnameescape(a:file)
    :  catch /^Vim(write):/
    :    throw "EXCEPT:IO(" . getcwd() . ", " . a:file . "):WRITEERR"
    :  endtry
    :endfunction
    :
    :try
    :
    :  " something with arithmetics and I/O
    :
    :catch /^EXCEPT:MATHERR:RANGE/
    :  let function = substitute(v:exception, '.*(\(\a\+\)).*', '\1', "")
    :  echo "Range error in" function
    :
    :catch /^EXCEPT:MATHERR/    " catches OVERFLOW and ZERODIV
    :  echo "Math error"
    :
    :catch /^EXCEPT:IO/
    :  let dir = substitute(v:exception, '.*(\(.\+\),\s*.\+).*', '\1', "")
    :  let file = substitute(v:exception, '.*(.\+,\s*\(.\+\)).*', '\1', "")
    :  if file !~ '^/'
    :    let file = dir . "/" . file
    :  endif
    :  echo 'I/O error for "' . file . '"'
    :
    :catch /^EXCEPT/
    :  echo "Unspecified error"
    :
    :endtry

The exceptions raised by Vim itself (on error or when pressing CTRL-C) use
a flat hierarchy:  they are all in the "Vim" class.  You cannot throw yourself
exceptions with the "Vim" prefix; they are reserved for Vim.
   Vim error exceptions are parameterized with the name of the command that
failed, if known.  See |catch-errors|.


PECULIARITIES
                            *except-compat*
The exception handling concept requires that the command sequence causing the
exception is aborted immediately and control is transferred to finally clauses
and/or a catch clause.

In the Vim script language there are cases where scripts and functions
continue after an error: in functions without the "abort" flag or in a command
after ":silent!", control flow goes to the following line, and outside
functions, control flow goes to the line following the outermost ":endwhile"
or ":endif".  On the other hand, errors should be catchable as exceptions
(thus, requiring the immediate abortion).

This problem has been solved by converting errors to exceptions and using
immediate abortion (if not suppressed by ":silent!") only when a try
conditional is active.  This is no restriction since an (error) exception can
be caught only from an active try conditional.  If you want an immediate
termination without catching the error, just use a try conditional without
catch clause.  (You can cause cleanup code being executed before termination
by specifying a finally clause.)

When no try conditional is active, the usual abortion and continuation
behavior is used instead of immediate abortion.  This ensures compatibility of
scripts written for Vim 6.1 and earlier.

However, when sourcing an existing script that does not use exception handling
commands (or when calling one of its functions) from inside an active try
conditional of a new script, you might change the control flow of the existing
script on error.  You get the immediate abortion on error and can catch the
error in the new script.  If however the sourced script suppresses error
messages by using the ":silent!" command (checking for errors by testing
|v:errmsg| if appropriate), its execution path is not changed.  The error is
not converted to an exception.  (See |:silent|.)  So the only remaining cause
where this happens is for scripts that don't care about errors and produce
error messages.  You probably won't want to use such code from your new
scripts.

                            *except-syntax-err*
Syntax errors in the exception handling commands are never caught by any of
the ":catch" commands of the try conditional they belong to.  Its finally
clauses, however, is executed.
   Example: >

    :try
    :  try
    :    throw 4711
    :  catch /\(/
    :    echo "in catch with syntax error"
    :  catch
    :    echo "inner catch-all"
    :  finally
    :    echo "inner finally"
    :  endtry
    :catch
    :  echo 'outer catch-all caught "' . v:exception . '"'
    :  finally
    :    echo "outer finally"
    :endtry

This displays: >
    inner finally
    outer catch-all caught "Vim(catch):E54: Unmatched \("
    outer finally
The original exception is discarded and an error exception is raised, instead.

                            *except-single-line*
The ":try", ":catch", ":finally", and ":endtry" commands can be put on
a single line, but then syntax errors may make it difficult to recognize the
"catch" line, thus you better avoid this.
   Example: >
    :try | unlet! foo # | catch | endtry
raises an error exception for the trailing characters after the ":unlet!"
argument, but does not see the ":catch" and ":endtry" commands, so that the
error exception is discarded and the "E488: Trailing characters" message gets
displayed.

                            *except-several-errors*
When several errors appear in a single command, the first error message is
usually the most specific one and therefor converted to the error exception.
   Example: >
    echo novar
causes >
    E121: Undefined variable: novar
    E15: Invalid expression: novar
The value of the error exception inside try conditionals is: >
    Vim(echo):E121: Undefined variable: novar
<                           *except-syntax-error*
But when a syntax error is detected after a normal error in the same command,
the syntax error is used for the exception being thrown.
   Example: >
    unlet novar #
causes >
    E108: No such variable: "novar"
    E488: Trailing characters
The value of the error exception inside try conditionals is: >
    Vim(unlet):E488: Trailing characters
This is done because the syntax error might change the execution path in a way
not intended by the user.  Example: >

    try
        try | unlet novar # | catch | echo v:exception | endtry
    catch /.*/
        echo "outer catch:" v:exception
    endtry

This displays "outer catch: Vim(unlet):E488: Trailing characters", and then
a "E600: Missing :endtry" error message is given, see |except-single-line|.


## ==⚡ Examples
                                                                    *eval-examples*
- [Expression evaluation -  9.  Examples](doc/eavl.txt)

- Printing in Binary                                    |printing-in-binary|
- Sorting lines                                         |sorting-lines|
- scanf() replacement                                   |sscanf|
- getting the scriptnames in a Dictionary               |scriptnames-dictionary|
- Printing in Binary                                    |printing-in0binary|

Printing in Binary ~
                                *printing-in-binary*
>
  :" The function Nr2Bin() returns the binary string representation of a number.
  :func Nr2Bin(nr)
  :  let n = a:nr
  :  let r = ""
  :  while n
  :    let r = '01'[n % 2] . r
  :    let n = n / 2
  :  endwhile
  :  return r
  :endfunc

  :" The function String2Bin() converts each character in a string to a
  :" binary string, separated with dashes.
  :func String2Bin(str)
  :  let out = ''
  :  for ix in range(strlen(a:str))
  :    let out = out . '-' . Nr2Bin(char2nr(a:str[ix]))
  :  endfor
  :  return out[1:]
  :endfunc

Example of its use: >
  :echo Nr2Bin(32)
result: "100000" >
  :echo String2Bin("32")
result: "110011-110010"


Sorting lines ~
                        *sorting-lines*

This example sorts lines with a specific compare function. >

  :func SortBuffer()
  :  let lines = getline(1, '$')
  :  call sort(lines, function("Strcmp"))
  :  call setline(1, lines)
  :endfunction

As a one-liner: >
  :call setline(1, sort(getline(1, '$'), function("Strcmp")))


scanf() replacement ~
                            *sscanf*
There is no sscanf() function in Vim.  If you need to extract parts from a
line, you can use matchstr() and substitute() to do it.  This example shows
how to get the file name, line number and column number out of a line like
"foobar.txt, 123, 45". >
   :" Set up the match bit
   :let mx='\(\f\+\),\s*\(\d\+\),\s*\(\d\+\)'
   :"get the part matching the whole expression
   :let l = matchstr(line, mx)
   :"get each item out of the match
   :let file = substitute(l, mx, '\1', '')
   :let lnum = substitute(l, mx, '\2', '')
   :let col = substitute(l, mx, '\3', '')

The input is in the variable "line", the results in the variables "file",
"lnum" and "col". (idea from Michael Geddes)


getting the scriptnames in a Dictionary ~
                        *scriptnames-dictionary*
The |:scriptnames| command can be used to get a list of all script files that
have been sourced.  There is no equivalent function or variable for this
(because it's rarely needed).  In case you need to manipulate the list this
code can be used: >

    " Get the output of ":scriptnames" in the scriptnames_output variable.
    let scriptnames_output = ''
    redir => scriptnames_output
    silent scriptnames
    redir END

    " Split the output into lines and parse each line.  Add an entry to the
    " "scripts" dictionary.
    let scripts = {}
    for line in split(scriptnames_output, "\n")
      " Only do non-blank lines.
      if line =~ '\S'
    " Get the first number in the line.
    let nr = matchstr(line, '\d\+')
    " Get the file name, remove the script number " 123: ".
    let name = substitute(line, '.\+:\s*', '', '')
    " Add an item to the Dictionary
    let scripts[nr] = name
      endif
    endfor
    unlet scriptnames_output

## ==⚡ No +eval feature
                                                                    *no-eval-feature*
- [Expression evaluation -  11. No +eval feature](doc/eavl.txt)

When the |+eval| feature was disabled at compile time, none of the expression
evaluation commands are available.  To prevent this from causing Vim scripts
to generate all kinds of errors, the ":if" and ":endif" commands are still
recognized, though the argument of the ":if" and everything between the ":if"
and the matching ":endif" is ignored.  Nesting of ":if" blocks is allowed, but
only if the commands are at the start of the line.  The ":else" command is not
recognized.

Example of how to avoid executing commands when the |+eval| feature is
missing: >

    :if 1
    :  echo "Expression evaluation is compiled in"
    :else
    :  echo "You will _never_ see this message"
    :endif

To execute a command only when the |+eval| feature is disabled can be done in
two ways.  The simplest is to exit the script (or Vim) prematurely: >
    if 1
       echo "commands executed with +eval"
       finish
    endif
    args  " command executed without +eval

If you do not want to abort loading the script you can use a trick, as this
example shows: >

    silent! while 0
      set history=111
    silent! endwhile

When the |+eval| feature is available the command is skipped because of the
"while 0".  Without the |+eval| feature the "while 0" is an error, which is
silently ignored, and the command is executed.


## ==⚡ The sandbox
                                                                    *eval-sandbox*
- [Expression evaluation -  12. The sandbox](doc/eavl.txt)

The 'foldexpr', 'formatexpr', 'includeexpr', 'indentexpr', 'statusline' and
'foldtext' options may be evaluated in a sandbox.  This means that you are
protected from these expressions having nasty side effects.  This gives some
safety for when these options are set from a modeline.  It is also used when
the command from a tags file is executed and for CTRL-R = in the command line.
The sandbox is also used for the |:sandbox| command.

These items are not allowed in the sandbox:

    - changing the buffer text
    - defining or changing mapping, autocommands, user commands
    - setting certain options (see |option-summary|)
    - setting certain v: variables (see |v:var|)  *E794*
    - executing a shell command
    - reading or writing a file
    - jumping to another buffer or editing a file
    - executing Python, Perl, etc. commands

This is not guaranteed 100% secure, but it should block most attacks.

                            *:san* *:sandbox*
:san[dbox] {cmd}    Execute {cmd} in the sandbox.  Useful to evaluate an
            option that may have been set from a modeline, e.g.
            'foldexpr'.

                            *sandbox-option*
A few options contain an expression.  When this expression is evaluated it may
have to be done in the sandbox to avoid a security risk.  But the sandbox is
restrictive, thus this only happens when the option was set from an insecure
location.  Insecure in this context are:

- sourcing a .vimrc or .exrc in the current directory
- while executing in the sandbox
- value coming from a modeline
- executing a function that was defined in the sandbox

Note that when in the sandbox and saving an option value and restoring it, the
option will still be marked as it was set in the sandbox.


## ==⚡ Textlock
                                                                    *textlock*
- [Expression evaluation -  13. Textlock](doc/eavl.txt)

In a few situations it is not allowed to change the text in the buffer, jump
to another window and some other things that might confuse or break what Vim
is currently doing.  This mostly applies to things that happen when Vim is
actually doing something else.  For example, evaluating the 'balloonexpr' may
happen any moment the mouse cursor is resting at some position.

This is not allowed when the textlock is active:
    - changing the buffer text
    - jumping to another buffer or window
    - editing another file
    - closing a window or quitting Vim
    - etc.


# 🚩 Vim Plugins
- [Starting Vim - 4. Initialization](doc/starting.txt)
- [Write a Vim script - |41.11| Writing a plugin](doc/usr_41.txt)
- [Inter-process communication](doc/channel.txt)
- [Displaying text in a floating window](doc/popup.txt)
- [Cursor motions](vim81/doc/motion.txt)
- [Sign Support Features](doc/signs.txt)
- [Vim NetBeans Protocol](vim81/doc/netbeans.txt)
- Vim Recipes by Run Paint Run Run
- Vim Tutorial and Reference by Steve Oualline
- Learning the vi and Vim Editors Power and Agility Beyond Just Text Editing 8th
- [CISC 3110 Advanced Programming Techniques Vim Resources](http://sci.notbc.org/~weiss/resources/vim/Vim-course/others/vim-1.0.pdf)
- [zip.vim plugin](vim81/autoload/zip.vim)
- [netrw.vim plugin](vim81/autoload/netrw.vim)
- [netrw.vim manual](vim81/doc/pi_netrw.txt)

开发插件除了掌握脚本编程外，还需要对 Vim 系统提供的各种工具有一定了解，例如 IPC 通信，[Sign Support Features](doc/signs.txt)，又或者弹框显示内容，它不像一般窗口可以修改其内容：

- briefly show a message without overwriting the command line
- prompt the user with a dialog
- display contextual information while typing
- give extra information for auto-completion

插件只不过是 Vim 脚本文件，参考内置插件 |standard-plugin-list|，例如zip.vim 插件，它可以通过 unzip 命令来获取压缩包中的文件信息，并提供给 vim 进行使用，包含文件编辑。研究现有插件结构是学习 Vim 插件开发的最好方法，如果你掌握 unzip 命令的使用，也可以结合 Vim 脚本开发出类似功能的插件。

例如，使用下载、上传工具 curl 或 wget 可以一个非常非常简便的文字版本网页浏览器，直接使用命令打开网页就会加载 netrw.vim 插件进行操作：

    :tabe http://www.baidu.com/s?wd=vim

从 Vim 哲学来讲，以超级精简的方式，自己动手去完善它，以此来获得工作上的创新体验真的可以激奋人心！

Vim's functionality can be extended by adding plugins.  A plugin is nothing
more than a Vim script file that is loaded automatically when Vim starts.  You
can add a plugin very easily by dropping it in your plugin directory.
{not available when Vim was compiled without the |+eval| feature}

There are two types of plugins:

      global plugin: Used for all kinds of files
    filetype plugin: Only used for a specific type of file

To make it really easy to load a Vim script when starting Vim, the "plugin"
runtime directory can be used.  All `*.vim` files in it will be automatically
loaded.  For Unix, the directory `~/.vim/plugin` is used by default.  The
'runtimepath' option can be set to look in other directories for plugins.

查看 vim 启动流程与插件相关帮助信息，启动过程中的插件加载部分如下：

    ：help plugin
    ：help plugins
    ：help starting

    4. Load the plugin scripts.                 *load-plugins*
        This does the same as the command: >
            :runtime! plugin/**/*.vim
    <   The result is that all directories in the 'runtimepath' option will be
        searched for the "plugin" sub-directory and all files ending in ".vim"
        will be sourced (in alphabetical order per directory), also in
        subdirectories.

        However, directories in 'runtimepath' ending in "after" are skipped
        here and only loaded after packages, see below.

        Loading plugins won't be done when:
        - The 'loadplugins' option was reset in a vimrc file.
        - The |--noplugin| command line argument is used.
        - The |--clean| command line argument is used.
        - The "-u NONE" command line argument is used |-u|.
        - When Vim was compiled without the |+eval| feature.

        Note that using "-c 'set noloadplugins'" doesn't work, because the
        commands from the command line have not been executed yet.  You can
        use "--cmd 'set noloadplugins'" or "--cmd 'set loadplugins'" |--cmd|.

        Packages are loaded.  These are plugins, as above, but found in the
        "start" directory of each entry in 'packpath'.  Every plugin directory
        found is added in 'runtimepath' and then the plugins are sourced.  See
        |packages|.

        The plugins scripts are loaded, as above, but now only the directories
        ending in "after" are used.  Note that 'runtimepath' will have changed
        if packages have been found, but that should not add a directory
        ending in "after".


标准 vim 启动流程中，会加载 `$HOME/.vimrc` 配置脚本，然后根据 `runtimepath` 选项指定的目录列表搜索并加载插件目录，它们使用 .vim 后缀名，包括子目录。

        system          plugin directory ~
        Unix            ~/.vim/plugin/
        PC and OS/2     $HOME/vimfiles/plugin or $VIM/vimfiles/plugin
        Amiga           s:vimfiles/plugin
        Macintosh       $VIM:vimfiles:plugin
        Mac OS X        ~/.vim/plugin/
        RISC-OS         Choices:vimfiles.plugin

插件加载相当于执行以下命令：

                :runtime! plugin/**/*.vim

而 `runtimepath` 列表中那些名字以 "after" 后缀的目录会在在其它 packages 文件加载后才装入。

$VIM 和 $VIMRUNTIME 两个变量分别是命令路径和运行时所在目录，这里包含所有文档及内置插件脚本。

像 NeoVim 就不是正常加载 `~/.vimrc`，而是 `stdpath('config')` 指定的一个 init.vim 脚本。

注意，runtimepath 是系统选项，而非变量，使用 & 符号访问，不能像变量一样使用 $ 符号。

    echo "rtp: ".substitute(&rtp, ",", "\n", 'g')

另外，$MYVIMRC 系统变量指向当前自动加载的配置脚本。


## ==⚡ Write a Vim Plugins - HTML2MD
- [Expression evaluation 5. Defining functions](doc/eavl.txt)
- [Write a Vim script |41.11| Writing a plugin](doc/usr_41.txt)
- [Write a Vim Script |41.14| Writing a plugin that loads quickly](doc/usr_41.txt)

开始写 Vim 插件前，掌握基础的 Vim 命令和 API 函数的区别和联系是有必要的：

- Vim 命令，是对 Vim 提供的各种功能的调用，比如 Buffer 内容的读写；
- Vim 脚本函数就是 API 二次包装开发，例如脚本中可使用 execute 函数调用 Vim 命令；
- Vim 也有 :execute 命令，和 execute 函数是不同的概念，虽然它们做同样的事；
- 调用函数的语法是 :call execute(cmd)，直接写 :execute 表示调用命令而不是函数；
- 调用函数可以获取返回值，调用命令则没有。

例如以下通过 execute 函数调用 :execute 命令，命令可以简写，然后将命令返回值保存到 result 变量：

    :let r=execute('exe "echo \"bad apple\""')

并且，注意外层单引号包括的命令字符串中使用 \ 不会被转义，而 execute 函数将命令字符串传递到 Vim 内部执行时，\" 转义起作用了，:exe 命令执行的命令就是 echo "bad apple"，这里打印出来的字符串就会保存到 result 变量中。


Vim 脚本作为一种特定域语言，提供非常多的专用特性，比如按键序列表示，<CR> 表示回车键，还可以使用 command 定义 Vim 命令。

Vim 脚本可以通过自动加载机制装入，也可以使用 :source 命令装入脚本；

Vim 提供了两种主要的函数自动加载机制，参考：

- Automatically Loading Functions *autoload-functions*
- Using an autocommand  *using-autocommand*

⛏ 方式一，以脚本文件名自动加载，要求有 2 点：
    - 将脚本放置在 runtimepath 列表目录中的 autoload 子目录下。
    - 执行函数时，使用 `file#func` 这种命令规则，多级子目录使用 # 连接起来。
⛏ 方式二，以自动命令 autocommand 与 FuncUndefined 事件实现自动加载。

为了加速插件加载，Vim 使用二次加载插件的机制，加载一个脚本两次，这听起来可能很奇怪。

这种机制设置的用意是，它在第一次加载时很快，因为要将脚本的大部分延迟到第二次加载，在实际使用它们时才会发生第二次加载。

Vim 7 版本后，提供了自动加载。

The autocommand is useful if you have a plugin that is a long Vim script file.
You can define the autocommand and quickly quit the script with `:finish`.
That makes Vim startup faster.  The autocommand should then load the same file
again, setting a variable to skip the `:finish` command.

Use the FuncUndefined autocommand event with a pattern that matches the
function(s) to be defined.  Example: >

    :au FuncUndefined BufNet* source ~/vim/bufnetfuncs.vim

The file `~/vim/bufnetfuncs.vim` should then define functions that start with
"BufNet".  Also see |FuncUndefined|.


假设有以下插件脚本，存放于 `~/.vim/autoload` 目录下：

```sh
"" # This line has no effect
echo "autoload Demo plugin..."

"" # to see what a command has defined
:verbose command ErrorMessage
:let s:error = "NONE"
:command -nargs=1 ErrorMessage echoerr <args>

"" # to see what a function has defined
"" # :verbose function demo#MyFun
function demo#MyFun(args)
  echo a:args
endfunc
```

调用函数，无论使用 call，echo、或者使用 :source 引入脚本，都会使用脚本定义的各种符号生效。

加载插件脚本后，可以使用 :verbose 命令去查询用户定义命令、或插件函数定义。如果函数名称不以 `file#func` 这种格式编写，那么调用时不会触发自动加载，需要主动使用 :source 命令加载。

要查看 runtimepath 列表选项设置的值，可以 :echo &rtp，使用 & 符号是因为它是选项不是变量。

```sh
:echo "rtp: ".substitute(&rtp, ",", "\n", 'g')
:call demo#MyFun(123)
:source ~\.vim\autoload\demo.vim
autoload Demo plugin...

:verbose command ErrorMessage
    Name              Args Address Complete    Definition
    ErrorMessage      1                        echoerr <args>
        Last set from ~\.vim\autoload\demo.vim line 5

:verbose function MyFun
   function MyFun(args)
        Last set from ~\.vim\autoload\demo.vim line 9
1    echo a:args
   endfunction
```

以下插件使 Vim 实现网页文章摘要功能，将 21 Best Vim Plugs 页面读取后再过滤掉额外的 HTML 得到 Markdown 文档。Vim 可以直接 tabe 读取网页，其背后可以是调用 curl 和 wget 等工具请求网页，也可以使用 read 或内置 NetRW 插件的 Nread 方法。

为了简化处理，先将换行符号统一过滤。使用正则也只能是做些过滤工作，并不能很完整地处理整个 HTML 嵌套结构。

使用正则表示式过滤多余的 HTML 信息非常有意思，对于一般标签，它是配对的，比如 <p>something</p>，有时又可以不配对，比如 <img src="some.jpg" />，正式表达式的复杂度取决于提取内容来自哪，并且需要使用反向引用提供的数据。

使用 Regex 替换了标签及样式等多余内容，因为 Vim 的正则表达式比较怪异，可以使用 NeoVim 提供的 GUI 可视化操作，会将匹配内存用不同颜色显示，更加直观。

当然，正则表达式使用一种 Domain-specific Language 有它自身的局限性，不能像 General Purpose Language 一样使用通用功能来解决各种复杂的逻辑。

比如，将 PDF 转换 MD 格式，如果采用 PDF -> TXT -> MD 这种方法，为了保存目录结构，就需要对内容做一些处理添加类似 CTags 这种用于快速定位的标记信息。

对于正则表达式来说，需要先匹配目录项，并替换掉内容中与目录项想适应的部分，并添加定位标记信息：

    :%s/    \(\d\+\.\) \([- A-Za-z0-9?]\+\)\(\(.*\n\)\{-}.*\)\(^\2$\)/    #\1# \2\3\4 ==*\5*/c

但是这种表达式是肯定有性能问题的，替换一个目录项就需要扫描整个文件，时间复杂度和空间复杂度都极高！

而采用通用语言的处理就高效多了：

- 先扫描目录的条目，并作记录；
- 扫描内存，查找与目录匹配的特定内容；
- 如果找到就替换它，并添加相应的定位信息标记；

所以整个操作只需要扫描一遍文件即可以完成！

```sh
call lib#
```


```sh
:tabe https://www.dunebook.com/best-vim-plugins/
:"" # Remove multiline Style, svg, Script block
:%s/<\(svg\|noscript\|script\|style\)\(.*\n\)\{-}.*\(\1\)>//gc
:"" # Remove all newline
:%s/[\r\n]//g
:"" # Remove Style or Script block
:%s/<\(script\).\{-}\(\1\)>/<\1\/>/gc
:%s/<\(style\).\{-}\(\1\)>/<\1\/>/gc
:"" # Image process
:%s/<img.\{-}src=['"]\=\([^'"]\+\).\{-}\/>/\r![img](\1)\r/gc
:"" # Anchor process
:%s/<a.\{-}href=['"]\=\([^'"]\{}\)['"]\=.\{-}>\(.\{-}\)<\/a>/\r- [\2](\1)\r/gc
:"" # Paragraph process
:%s/<\(title\)>\(.\{-}\)<\/\1>/\r# \2\r/gc
:%s/<h\(\d\).\{-}>/\r# \1- /gc
:%s/<\/\=p.\{-}>/\r/gc
:%s/<\/\=\(strong\|bold\).\{-}>/`/gc

:"" # ul ol list
:"" # %s/<li[^>]*>\(.\{-}\(\@=<li\).\{-}\)<\/li>/\r- \2\r/gc
:%s/<li[^a-z]*>/\r○ /gc
:%s/<\([uo]l\)>\([\n]\)\(.*\)<\/\1>/\r   \3/gc

:"" # Other or unmatch tag process
:%s/<[\/!]\=\(\w\)[^<]*>//gc

:"" # Escape symbols
:exec '%s/&#8220;/"/gc' | exec ":%s/&#8217;/'/gc"

```


以下是官方 write-plugin 文档中的插件 Demo，要点：

- 通过 g:loaded_typecorr 全局变量来检测是否已经进行了第一轮加载；
- 使用 finish 命令停止重复执行，Stop sourcing a script；
- 使用缩略语功能，参考 [2. Abbreviations](doc/map.txt)
- 使用本地映射，参考 [3. Local mappings and functions](doc/map.txt)

```sh
" Vim global plugin for correcting typing mistakes
" Last Change:  2000 Oct 15
" Maintainer:   Bram Moolenaar <Bram@vim.org>
" License:  This file is placed in the public domain.

if exists("g:loaded_typecorr")
 finish
endif
let g:loaded_typecorr = 1

let s:save_cpo = &cpo
set cpo&vim

iabbrev teh the
iabbrev otehr other
iabbrev wnat want
iabbrev synchronisation
   \ synchronization
let s:count = 4

if !hasmapto('<Plug>TypecorrAdd;')
 map <unique> <Leader>a  <Plug>TypecorrAdd;
endif
noremap <unique> <script> <Plug>TypecorrAdd;  <SID>Add

noremenu <script> Plugin.Add\ Correction      <SID>Add

noremap <SID>Add  :call <SID>Add(expand("<cword>"), 1)<CR>

function s:Add(from, correct)
 let to = input("type the correction for " .. a:from .. ": ")
 exe ":iabbrev " .. a:from .. " " .. to
 if a:correct | exe "normal viws\<C-R>\" \b\e" | endif
 let s:count = s:count + 1
 echo s:count .. " corrections now"
endfunction

if !exists(":Correct")
 command -nargs=1  Correct  :call s:Add(<q-args>, 0)
endif

let &cpo = s:save_cpo
unlet s:save_cpo
```



## ==⚡ Vundle & Vim-Plug
- [Expression evaluation 5. Defining functions](doc/eavl.txt)
- [Write a Vim script |41.11| Writing a plugin](doc/usr_41.txt)
- [Write a Vim Script |41.14| Writing a plugin that loads quickly](doc/usr_41.txt)
- [Vim Bundle](https://github.com/VundleVim/Vundle)
- [vim-plug: Minimalist Vim Plugin Manager](https://github.com/junegunn/vim-plug)
- https://adam.garrett-harris.com/2015-03-10-how-to-switch-from-vundle-to-vim-plug
- https://github.com/nshen/learn-neovim-lua/tree/main/lua
- https://github.com/LunarVim/LunarVim
- https://github.com/wbthomason/packer.nvim
- https://github.com/junegunn/vim-plug/wiki/tutorial


Vim 提供了两种主要的函数自动加载机制，参考：

- Automatically Loading Functions *autoload-functions*
- Using an autocommand  *using-autocommand*

⛏ 方式一，以脚本文件名自动加载，要求有 2 点：
    - 将脚本放置在 runtimepath 列表目录中的 autoload 子目录下。
    - 执行函数时，使用 `file#func` 这种命令规则，多级子目录使用 # 连接起来。
⛏ 方式二，以自动命令 autocommand 与 FuncUndefined 事件实现自动加载。

Vim bundle 和 Vim-Plug 是管理 Vim 插件的插件，它们都会使用到插件自动加载机制。这两个工具用户较多的，Vundle 发展较早，功能也多，比如 PluginSearch 功能，这方便了找插件。

Vundle allows you to...

1. keep track of and configure your plugins right in the .vimrc
2. install configured plugins (a.k.a. scripts/bundle)
3. update configured plugins
4. search by name all available Vim scripts
5. clean unused plugins up
6. run the above actions in a single keypress with interactive mode

Vundle automatically...

1. manages the runtime path of your installed scripts
2. regenerates help tags after installing and updating


Vim-Plug Pros.

1. Easy to set up: Single file. No boilerplate code required.
2. Easy to use: Concise, intuitive syntax
3. Super-fast parallel installation/update (with any of +job, +python, +python3, +ruby, or Neovim)
4. Creates shallow clones to minimize disk space usage and download time
5. On-demand loading for faster startup time
6. Can review and rollback updates
7. Branch/tag/commit support
8. Post-update hooks
9. Support for externally managed plugins

Vim-plug 新秀插件管理器，单文件实现，是一个自由、开源、速度非常快的、极简的 vim 插件管理器。它可以并行地安装或更新插件。因为使用 git 管理，还可以回滚更新，并且它创建浅层克隆 shallow clone 最小化磁盘空间使用和下载时间。它支持按需加载插件以加快启动时间。其他值得注意的特性是支持分支/标签/提交、post-update 钩子、支持外部管理的插件等。

Vim-Plug 很好地利用了 Python/Ruby/Git 等编程工具，将 Vim 特定域脚本语言与 Python 通用脚本语言相结合，实现插件版本管理，和远程下载安装。

How to shallow clone?

We can mention the depth of the repository using the depth indicator followed by a natural number that represents the depth of the git commit tree.

```sh
# You can also use git shallow clone to access a single branch:
# git clone [remote-url] --branch [name] --single-branch [folder]

# Here's an example usage to clone only with the latest commit node:
# git clone --depth <depth> <upstream-repository-link>
git clone --depth=1 https://github.com/Dsantra92/Google-Form-Automation
 ``` 

选取其中一个插件管理安装，将脚本管理器安装到 Vim 设置的 "autoload" 目录中：

    git clone https://github.com/VundleVim/Vundle.vim.git .vim/bundle/Vundle.vim

    curl -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim

两个插件管理器的初化脚本比较，主要是初始化、插件加载方法、和结束加载方法的差别：

```sh
" ================================ ""
" # === Vundle Plugins Manager === #
" ================================ ""
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

" #=== Plugins go here ===#
Plugin 'gmarik/Vundle.vim'

call vundle#end()
filetype plugin indent on

" ================================== ""
" # === Vim-Plug Plugins Manager === #
" ================================== ""
set rtp+=~/.vim/autoload rtp+=~/.vim/after
" # Plugins will be downloaded under the specified directory.
call plug#begin(has('nvim') ? stdpath('data') . '/plugged' : '~/.vim/plugged')

" #=== Plugins go here ===#
Plug 'junegunn/seoul256.vim'
Plug 'junegunn/vim-easy-align'
Plug 'https://github.com/junegunn/vim-github-dashboard.git'

call plug#end()
```

在 NeoVim 环境中，对于 Vundle 或 Vim-Plug，可以给系统选项 runtimepath 添加插件目录，以自动加载 vim 脚本文件。关于插件的自动加载机制，参考 |autoload|。

但是在原 Vim 环境中，这样设置并不能加载 Vim-Plug 插件，参考 vim-plug/wiki/tutorial。

    With vim-plug, you declare the list of plugins you want to use in your Vim configuration 
    file. It's ~/.vimrc for ordinary Vim, and ~/.config/nvim/init.vim for Neovim. The list 
    should start with call plug#begin(PLUGIN_DIRECTORY) and end with call plug#end(). 
    PLUGIN_DIRECTORY is a placeholder for vim-plug's plugin directory. 

    Please do not set it to a directory from runtimepath option. Do NOT set it to the 
    autoload/ directory where plug.vim is.

通过判断 has('nvim') 或 has('win32') 可以在 Windows WSL 子系统中与宿主机使用相同的插件目录，命令映射也可以同样处理。

    call plug#begin(has('nvim') ? '~/.vim/plugged' : '/mnt/c/Users/x/.vim/plugged')

    nmap <silent> vimi :exe "e " . ( has('nvim') ? "~/.vimrc" : "/mnt/c/Users/OCEAN/.vimrc")<CR>

注意，以下配置中 PLUGGED 变量会传递到 Vim-Plug 脚本中使用，所以不能将它定义为脚本级别的作用域 s: 前缀，这样会导致 Vim-Plug 脚本不能跨过作用域访问其它脚本的 s: 变量。

注意，runtimepath 是选项设置，可以 :echo &rtp 查看内容，使用 & 符号是因为它是选项不是变量。并且，通过变量给它更新选项值时，不能像设置选项那样直接使用 += 赋值，而需要进行二次包装，将变量值转变成字符串然再与 :set 命令连接，然后通过 execute 命令执行更新。

```sh
let HOME = has('nvim') ? '~' : '/mnt/c/Users/OCEAN'
let PLUGGED = HOME . '/.vim/plugged'

"" #==== Vim-Plug Plugins Manager ====#
"" # set rtp +=PLUGGED
exe 'set rtp +='.PLUGGED
exe 'set rtp +='.HOME.'/.vim'
call plug#begin(PLUGGED)

"" #=== Plugins go here ===#
Plug 'junegunn/seoul256.vim'
Plug 'junegunn/vim-easy-align'
Plug 'https://github.com/junegunn/vim-github-dashboard.git'
" Unmanaged plugin (manually installed and updated)
Plug PLUGGED . '/project-1.4.1'

call plug#end()
"" # echo "rtp: ".substitute(&rtp, ",", "\n", 'g')
```

这种 Windows 和 Linux 共同文件的情况，在先从 Windows 安装插件时可能发生换行符号冲突，因为多了一个 ^M 回车符号，E492: Not an editor command: ^M on Linux subsystem。

解决方法是将内容复制出来替换原来的 CRLF 换行符号，并在新文件 buffer 中保存，或者使用其它工具，直接在原文件操作还是会保留 CRLF 格式：

```sh
"" # :call setreg('"*',join(getline(1,'$'),"\n")) | :0,$d | put
:call setreg('"*',join(getline(1,'$'),"\n")) | :tabnew some.vim | put
```

Linux 使用单个 Line Feed \n 控制符号表示换行，而 Windows 则将对应机械打字机控制打印头回位的 Carriage Return \r 符号也作为换行符号的一部分。

There are mainly two kinds of control characters for line endings, Carriage Return (CR, the code is \r) and Line Feed (LF, the code is \n).

On different OS, different line ending is used.

1. OSX, Linux: LF (\n)
2. Legacy MacOS (MacOS 9 and earlier): CR (\r)
3. Windows: CR LR pair (\r\n)

Carriage return points the cursor to the beginning of the line horizontly and Line feed shifts the cursor to the next line vertically. Combination of both gives you new line(\n) effect.

安装成功后，就可以执行插件管理器提供的方法，如果没有正确设置插件管理器的加载路径，在执行相应的方法时会提示 E492 Not an Editor Command，表示 Vim 并没有加载相应插件管理器的代码。

以 Vim-Plug 为例，调用 `plug#begin()` 函数方法，指定一个插件安装目录，后续安装的插件都会下载到此处，可以通过插件安装选项修改目录。以上设置的是两个 Vim-Plug 插件，设置的是 github 开发者账户名称与插件名称，可以指定 github 代码仓库地址。

以 `filename#functionname` 这种方式调用函数时，Vim 会自动从 autoload 目录加载相应的脚本。

seoul256.vim 是一个主题配色，可以直接使用 :colorscheme seoul256 激活它。

使用 :command 命令查询 Vim-Plug 插件提供的自定义命令，用户自定义命令参考 |user-commands|：

    :command Plug
        Name              Args Address Complete    Definition
    |   Plug              +                        call plug#(<args>)
    !|  PlugClean         0                        call s:clean(<bang>0)
    |   PlugDiff          0                        call s:diff()
    !|  PlugInstall       *            customlist  call s:install(<bang>0, [<f-args>])
    !|  PlugSnapshot      ?            file        call s:snapshot(<bang>0, <f-args>)
    |   PlugStatus        0                        call s:status()
    !|  PlugUpdate        *            customlist  call s:update(<bang>0, [<f-args>])
    |   PlugUpgrade       0                        if s:upgrade() | execute 'source' s:e

执行 `:PlugStaus` 检查安装是否正确。配置文件中只是演示注册了两个插件，这是 github 地址的简写。，Vim-Plug 状态检查结果会显示这两个插件还没有下载代码安装，所以执行 `:PlugInstall` 命令进行下载、安装：

    Updated. Elapsed time: 3.504664 sec.                                        │
    [==]                                                                        │
                                                                                │
    - Finishing ... Done!                                                       │
    - vim-easy-align: Cloning into 'C:\Users\x\.vim\plugged\vim-easy-align'...  │
    - seoul256.vim: Cloning into 'C:\Users\x\.vim\plugged\seoul256.vim'...      │
    ~

    Finished. 0 error(s).                                                       │
    [==]                                                                        │
                                                                                │
    - vim-easy-align: OK                                                        │
    - seoul256.vim: OK


配置 `~/.vimrc`，可以使用具体目录路径替代 ~ 符号，从 `$MYVIMRC` 系统变量中获取当前使用的配置脚本路径。

另外，Vim-Plug 会自动启用 filetype 插件不必另外设置：

< Usage >_____________________________________________________________________~
                                                                    *plug-usage*

    Add a vim-plug section to your `~/.vimrc` (or `stdpath('config') . '/init.vim'` for
    Neovim)

                                                               *plug#begin* *plug#end*

     1. Begin the section with `call plug#begin([PLUGIN_DIR])`
     2. List the plugins with `Plug` commands
     3. `call plug#end()` to update 'runtimepath' and initialize plugin system
       - Automatically executes `filetype plugin indent on` and `syntax enable`.
         You can revert the settings after the call. e.g. `filetype indent off`,
         `syntax off`, etc.

    call plug#begin()
    " The default plugin directory will be as follows:
    "   - Vim (Linux/macOS): '~/.vim/plugged'
    "   - Vim (Windows): '~/vimfiles/plugged'
    "   - Neovim (Linux/macOS/Windows): stdpath('data') . '/plugged'
    " You can specify a custom plugin directory by passing it as the argument
    "   - e.g. `call plug#begin('~/.vim/plugged')`
    "   - Avoid using standard Vim directory names like 'plugin'

    " Shorthand notation; fetches https://github.com/junegunn/vim-easy-align
    Plug 'junegunn/vim-easy-align'

    " Any valid git URL is allowed
    Plug 'https://github.com/junegunn/vim-github-dashboard.git'

    " Multiple Plug commands can be written in a single line using | separators
    Plug 'SirVer/ultisnips' | Plug 'honza/vim-snippets'

    " On-demand loading
    Plug 'scrooloose/nerdtree', { 'on':  'NERDTreeToggle' }
    Plug 'tpope/vim-fireplace', { 'for': 'clojure' }

    " Using a non-default branch
    Plug 'rdnetto/YCM-Generator', { 'branch': 'stable' }

    " Using a tagged release; wildcard allowed (requires git 1.9.2 or above)
    Plug 'fatih/vim-go', { 'tag': '*' }

    " Plugin options
    Plug 'nsf/gocode', { 'tag': 'v.20150303', 'rtp': 'vim' }

    " Plugin outside ~/.vim/plugged with post-update hook
    Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }

    " Unmanaged plugin (manually installed and updated)
    Plug '~/my-prototype-plugin'


NeoVim 提供的默认配置使用 Vundle，供参考：

```sh
set nocompatible  " be iMproved, required 
filetype off  " required

set rtp+=~/.vim/bundle/Vundle.vim 

call vundle#begin() 
" let Vundle manage Vundle, required

Plugin 'VundleVim/Vundle.vim' 
Plugin 'godlygeek/tabular'
Plugin 'plasticboy/vim-markdown'

call vundle#end() " required 

filetype plugin on " required 

" 常用命令如下：
" :PluginList       - 查看已经安装的插件
" :PluginInstall    - 安装插件
" :PluginUpdate     - 更新插件
" :PluginSearch     - 搜索插件
" :PluginClean      - 删除插件，把安装插件对应行删除，然后执行这个命令即可
" h: vundle         - 获取帮助 

set fileencodings=ucs-bom,utf-8,cp936,gb18030,big5,euc-jp,euc-kr,latin1
```

参考帮助文档 :help nvim-from-vim，可以从 $MYVIMRC 内置变量获取配置入口文件位置：

    Transitioning from Vim              *nvim-from-vim*

    1. To start the transition, create your |init.vim| (user config) file: >

        :call mkdir(stdpath('config'), 'p')
        :exe 'edit '.stdpath('config').'/init.vim'

    2. Add these contents to the file: >

        set runtimepath^=~/.vim runtimepath+=~/.vim/after
        let &packpath = &runtimepath
        source ~/.vimrc

    3. Restart Nvim, your existing Vim config will be loaded.


在 Vim 执行命令安装插件：

    :so ~/.vimrc
    :PluginInstall

等待提示 Done 表示完成插件安装：

    [Vundle] Installer
    X  " Installing plugins to C:\Users\OCEAN\.vim\bundle 
    Plugin 'VundleVim/Vundle.vim'                      
    + Plugin 'godlygeek/tabular'                         
    + Plugin 'plasticboy/vim-markdown'                   
    * Helptags                                           


## ==⚡ Builtin Plugins

                                                            *standard-plugin-list*
- [zip.vim plugin](vim81/autoload/zip.vim)
- [netrw.vim plugin](vim81/autoload/netrw.vim)
- [netrw.vim manual](vim81/doc/pi_netrw.txt)

Standard plugins:

    |pi_getscript.txt| Downloading latest version of Vim scripts
    |pi_logipat.txt|   Logical operators on patterns
    |pi_netrw.txt|     Reading and writing files over a network
    |pi_paren.txt|     Highlight matching parens
    |pi_spec.txt|      Filetype plugin to work with rpm spec files
    |pi_tar.txt|       Tar file explorer
    |pi_vimball.txt|   Create a self-installing Vim script
    |pi_gzip.txt|      Reading and writing compressed files
    |pi_zip.txt|       Zip archive explorer

### ⛏ pi_getscript                                              *pi_getscript.txt*
- [pi_getscript manual](vim81/doc/pi_getscript.txt)

Getscript is a plugin that simplifies retrieval of the latest versions of the
scripts that you yourself use!  Typing |:GLVS| will invoke getscript; it will
then use the <GetLatestVimScripts.dat> (see |GetLatestVimScripts_dat|) file to
get the latest versions of scripts listed therein from http://vim.sf.net/.

Vim 7.0 does not include the GetLatestVimScripts.dist file which
serves as an example and a template.  So, you'll need to create
your own!


### ⛏ pi_logipat                                                *pi_logipat.txt*
- [pi_logipat manual](vim81/doc/pi_logipat.txt)

    Boolean logic patterns are composed of

            operators  ! = not
                       | = logical-or
                       & = logical-and
            grouping   ( ... )
            patterns   "pattern"

    :LogiPat {boolean-logic pattern}        *:LogiPat*
        :LogiPat is a command which takes a boolean-logic
        argument (|logiPat-arg|).

    :LP {boolean-logic pattern}         *:LP*
        :LP is a shorthand command version of :LogiPat

==============================================================================
3. LogiPat Examples                 *logiPat-examples*

    LogiPat takes Boolean logic arguments and produces a regular
    expression which implements the choices.  A series of examples
    follows:
>
    :LogiPat "abc"
<       will search for lines containing the string  :abc:
>
    :LogiPat "ab""cd"
<       will search for lines containing the string  :ab"c:
>
    :LogiPat !"abc"
<       will search for lines which don't contain the string  :abc:
>
    :LogiPat "abc"|"def"
<       will search for lines which contain either the string
        :abc:  or the string  :def:
>
    :LogiPat !("abc"|"def")
<       will search for lines which don't contain either
        of the strings  :abc:  or  :def:
>
    :LogiPat "abc"&"def"
<       will search for lines which contain both of the strings
        :abc:  and  :def:
>
    :let pat= LogiPat('!"abc"')
<       will return the regular expression which will match
        all lines not containing  :abc: .  The double quotes
        are needed to pass normal patterns to LogiPat, and
        differentiate such patterns from boolean logic
        operators.


### ⛏ pi_netrw                                                  *pi_netrw.txt*
- [pi_netrw manual](vim81/doc/pi_netrw.txt)

内置的 NetRW 插件让网络文件访问非常便利，支持 stp/http/ssh 等等协议。

脚本 [netrwPlugin.vim](vim81\plugin\netrwPlugin.vim) 提供多种风格的文件浏览器：

```sh
"" # Commands: :Explore, :Sexplore, Hexplore, Vexplore, Lexplore {{{2
com! -nargs=* -bar -bang -count=0 -complete=dir Explore  call netrw#Explore(<count>,0,0+<bang>0,<q-args>)
com! -nargs=* -bar -bang -count=0 -complete=dir Sexplore call netrw#Explore(<count>,1,0+<bang>0,<q-args>)
com! -nargs=* -bar -bang -count=0 -complete=dir Hexplore call netrw#Explore(<count>,1,2+<bang>0,<q-args>)
com! -nargs=* -bar -bang -count=0 -complete=dir Vexplore call netrw#Explore(<count>,1,4+<bang>0,<q-args>)
com! -nargs=* -bar       -count=0 -complete=dir Texplore call netrw#Explore(<count>,0,6        ,<q-args>)
com! -nargs=* -bar -bang                        Nexplore call netrw#Explore(-1,0,0,<q-args>)
com! -nargs=* -bar -bang                        Pexplore call netrw#Explore(-2,0,0,<q-args>)
com! -nargs=* -bar -bang -count=0 -complete=dir Lexplore call netrw#Lexplore(<count>,<bang>0,<q-args>)
```

使用 Bookmarks 管理常用目录，配合 gb 命令快速跳转到已添加到书签列表的目录，并且在移动、拷贝文件时也可以使用书签：

       mb   Bookmark current directory
       qb   List bookmarked directories and history
       mB   Unbookmark current directory
      1mB   Unbookmark 1st bookmarked item
       gb   Go to previous bookmarked directory
      1gb   Go to 1st bookmarked item

目录书签按排序好存放在 .netrwbook 文件，通常位于 'runtimepath' 列表中的第一个目录下，即用户主目录，执行命令查询 :echo split(&rtp, ',')[0]。

参考 NetRW Quick Panel 提供的信息：

```sh
call s:NetrwInit("g:netrw_quickhelp",0)
let s:QuickHelp= ["-:go up dir  D:delete  R:rename  s:sort-by  x:special",
   \              "(create new)  %:file  d:directory",
   \              "(windows split&open) o:horz  v:vert  p:preview",
   \              "i:style  qf:file info  O:obtain  r:reverse",
   \              "(marks)  mf:mark file  mt:set target  mm:move  mc:copy",
   \              "(bookmarks)  mb:make  mB:delete  qb:list  gb:go to",
   \              "(history)  qb:list  u:go up  U:go down",
   \              "(targets)  mt:target Tb:use bookmark  Th:use history"]
```

执行简写命令 :Nt 打开 netrw 文件浏览器，示范文件移动操作：

- 可以使用 mf 或 mr 等命令标记文件；
- 使用 mt 标记目标文件夹；
- 使用 mm 将已经标记的文件移动到目标文件夹，但不能往上级目录操作；
- 可以使用 mx 或 mX 命令对标记文件执行 Shell 命令操作；

文件浏览器中可以使用 I 进行 Visual Line 模式选择文件名，并通过 yy 等命令进行复制。

调用 Shell 命令时，可以使用任意 % 点位符号，它会被选择的文件文件名替换，如果没有 % 符号，会以字符串方式与输入的命令拼接。

Upon activation of the "mx" map, netrw will query the user for some (external)
command to be applied to all marked files.  All "%"s in the command will be
substituted with the name of each marked file in turn.  If no "%"s are in the
command, then the command will be followed by a space and a marked filename.

Upon activation of the 'mX' map, netrw will query the user for some (external)
command to be applied to all marked files on the global marked file list.  The
"en bloc" means that one command will be executed on all the files at once: >

    command files

This approach is useful, for example, to select files and make a tarball: >

    (mark files)
    mX
    Enter command: tar cf mynewtarball.tar
<
The command that will be run with this example:

    tar cf mynewtarball.tar 'file1' 'file2' ...


Netrw 使用鼠标点击进入文件或目录，习惯双击操作会很容易出现误操作。

默认情况下，Netrw 将在当前窗口中打开文件，可以修改配置变量以不同的浏览器分割方式打开文件：

    let g:netrw_browse_split = 3

    *g:netrw_browse_split*    when browsing, <cr> will open the file by:
                =0: re-using the same window  (default)
                =1: horizontally splitting the window first
                =2: vertically   splitting the window first
                =3: open file in new tab
                =4: act like "P" (ie. open previous window)
                    Note that |g:netrw_preview| may be used
                    to get vertical splitting instead of
                    horizontal splitting.
                =[servername,tab-number,window-number]
                    Given a |List| such as this, a remote server
                    named by the "servername" will be used for
                    editing.  It will also use the specified tab
                    and window numbers to perform editing
                    (see |clientserver|, |netrw-ctrl-r|)
                This option does not affect the production of
                |:Lexplore| windows.

The <netrw.vim> browser provides settings in the form of variables which
you may modify; by placing these settings in your <.vimrc>, you may customize
your browsing preferences.  (see also: |netrw-settings|)

The |g:netrw_browse_split| option, which is zero by default, may be used to
cause the opening of files to be done in a new window or tab instead of the
default.  When the option is one or two, the splitting will be taken
horizontally or vertically, respectively.  When the option is set to three, a
<cr> will cause the file to appear in a new tab.

When using the gui (gvim), one may select a file by pressing the <leftmouse>
button.  In addition, if

 * g:netrw_retmap == 1       AND   (its default value is 0)
 * in a netrw-selected file, AND
 * the user doesn't already have a <2-leftmouse> mapping defined before
   netrw is loaded

then a doubly-clicked leftmouse button will return to the netrw browser
window.

Netrw attempts to speed up browsing, especially for remote browsing where one
may have to enter passwords, by keeping and re-using previously obtained
directory listing buffers.  The g:netrw_fastbrowse variable is used to
control this behavior; one may have slow browsing (no buffer re-use), medium
speed browsing (re-use directory buffer listings only for remote directories),
and fast browsing (re-use directory buffer listings as often as possible).
The price for such re-use is that when changes are made (such as new files
are introduced into a directory), the listing may become out-of-date.  One may
always refresh directory listing buffers by pressing ctrl-L (see
netrw-ctrl-l).

QUICK REFERENCE: COMMANDS   *netrw-explore-cmds* *netrw-browse-cmds* {{{2

     :NetrwClean[!]............................................|netrw-clean|
     :NetrwSettings............................................|netrw-settings|
     :Ntree....................................................|netrw-ntree|
     :Explore[!]  [dir] Explore directory of current file......|netrw-explore|
     :Hexplore[!] [dir] Horizontal Split & Explore.............|netrw-explore|
     :Lexplore[!] [dir] Left Explorer Toggle...................|netrw-explore|
     :Nexplore[!] [dir] Vertical Split & Explore...............|netrw-explore|
     :Pexplore[!] [dir] Vertical Split & Explore...............|netrw-explore|
     :Rexplore          Return to Explorer.....................|netrw-explore|
     :Sexplore[!] [dir] Split & Explore directory .............|netrw-explore|
     :Texplore[!] [dir] Tab & Explore..........................|netrw-explore|
     :Vexplore[!] [dir] Vertical Split & Explore...............|netrw-explore|

     Used with :Explore **/pattern : (also see netrw-starstar)
     :Nexplore............. go to next matching file                :Nexplore
     :Pexplore............. go to previous matching file            :Pexplore

QUICK REFERENCE: MAPS               *netrw-browse-maps* {{{2

      ---           -----------------           ----
      Map           Quick Explanation           Link
      ---           -----------------           ----
      <cr>   Netrw will enter the directory or read the file      |netrw-cr|
      <del>  Netrw will attempt to remove the file/directory      |netrw-del|
      <c-h>  Edit file hiding list                                |netrw-ctrl-h|
      <c-l>  Causes Netrw to refresh the directory listing        |netrw-ctrl-l|
      <c-r>  Browse using a gvim server                           |netrw-ctrl-r|
      <c-tab> Shrink/expand a netrw/explore window                |netrw-c-tab|
      <CR>  ==> Opens a directory or a file.                      |netrw-cr|

       -    ==> Go up to the parent directory.
       u    ==> Go back to the previous directory in the history.
       i    ==> Cycle between thin, long, wide, and tree listings|netrw-i|
       I    ==> Toggle the displaying of the banner              |netrw-I|
       c    Make browsing directory the current directory        |netrw-c|
       d    Make a directory                                     |netrw-d|
       %    Open a new file in netrw's current directory         |netrw-%|

       r    Reverse sorting order                                |netrw-r|
       s    Select sorting style: by name, time, or file size    |netrw-s|
       S    Specify suffix priority for name-sorting             |netrw-S|

       gn   Make top of tree the directory below the cursor      |netrw-gn|
       o    Enter the file/directory under the cursor in a new   |netrw-o|
            browser window.  A horizontal split is used.
       t    Enter the file/directory under the cursor in a new tab|netrw-t|
       v    Enter the file/directory under the cursor in a new   |netrw-v|
            browser window.  A vertical split is used. 
     
       p    Preview the file                                     |netrw-p|
       P    Browse in the previously used window                 |netrw-P|
       x    View file with an associated program                 |netrw-x|
       X    Execute filename under cursor via |system()|         |netrw-X|

       mb   Bookmark current directory                           |netrw-mb|
       mB   Unbookmark current directory                         |netrw-mB|
       gb   Go to previous bookmarked directory                  |netrw-gb|
       qb   List bookmarked directories and history              |netrw-qb|

       gh   Quick hide/unhide of dot-files                       |netrw-gh|
       qf   Display information on file                          |netrw-qf|
       md   Apply diff to marked files (up to 3)                 |netrw-md|
       me   Place marked files on arg list and edit them         |netrw-me|
       mT   Apply ctags to marked files                          |netrw-mT|

       mf   Mark a file                                          |netrw-mf|
       mF   Unmark files                                         |netrw-mF|
       qF   Mark files using a quickfix list                     |netrw-qF|
       qL   Mark files using a |location-list|                     |netrw-qL|
       mr   Mark files using a shell-style |regexp|              |netrw-mr|
       mu   Unmark all marked files                              |netrw-mu|
       mt   Current browsing directory becomes markfile target   |netrw-mt|

       mp   Print marked files                                   |netrw-mp|
       mc   Copy marked files to marked-file target directory    |netrw-mc|
       mm   Move marked files to marked-file target directory    |netrw-mm|

       D    Attempt to remove the file(s)/directory(ies)         |netrw-D|
       O    Obtain a file specified by cursor                    |netrw-O|
       R    Rename the designated file(s)/directory(ies)         netrw-R

       mv   Apply arbitrary vim   command to marked files        |netrw-mv|
       mx   Apply arbitrary shell command to marked files        |netrw-mx|
       mX   Apply arbitrary shell command to marked files en bloc|netrw-mX|
       mz   Compress/decompress marked files                     |netrw-mz|


Netrw makes reading files, writing files, browsing over a network, and
local browsing easy!  First, make sure that you have plugins enabled, so
you'll need to have at least the following in your <.vimrc>:
(or see |netrw-activate|) >

    set nocp                    " 'compatible' is not set
    filetype plugin on          " plugins are enabled
<
(see |'cp'| and |:filetype-plugin-on|)

Netrw supports "transparent" editing of files on other machines using urls
(see |netrw-transparent|). As an example of this, let's assume you have an
account on some other machine; if you can use scp, try: >

    vim scp://hostname/path/to/file
<
Want to make ssh/scp easier to use? Check out |netrw-ssh-hack|!

So, what if you have ftp, not ssh/scp?  That's easy, too; try >

    vim ftp://hostname/path/to/file


### ⛏ pi_paren                                                  *pi_paren.txt*
- [pi_paren manual](vim81/doc/pi_paren.txt)

Highlighting matching parens            *matchparen*

高亮配对括号，比如光标放在以下 C 代码的花括号或圆括号上，另一个配对的括号就会高亮显示：

```c
#include <stdio.h>

int main(void)
{
  print("Hi, C");
  return 0;
}
```

The functionality mentioned here is a |standard-plugin|.
This plugin is only available if 'compatible' is not set.

You can avoid loading this plugin by setting the "loaded_matchparen" variable: >
    :let loaded_matchparen = 1

The plugin installs CursorMoved, CursorMovedI and WinEnter autocommands to
redefine the match highlighting.

                    *:NoMatchParen* *:DoMatchParen*
To disable the plugin after it was loaded use this command: >

    :NoMatchParen

And to enable it again: >

    :DoMatchParen

The highlighting used is MatchParen.  You can specify different colors with
the ":highlight" command.  Example: >

    :hi MatchParen ctermbg=blue guibg=lightblue

The characters to be matched come from the 'matchpairs' option.  You can
change the value to highlight different matches.  Note that not everything is
possible.  For example, you can't highlight single or double quotes, because
the start and end are equal.

The syntax highlighting attributes are used.  When the cursor currently is not
in a string or comment syntax item, then matches inside string and comment
syntax items are ignored.  Any syntax items with "string" or "comment"
somewhere in their name are considered string or comment items.

The search is limited to avoid a delay when moving the cursor.  The limits
are:
- What is visible in the window.
- 100 lines above or below the cursor to avoid a long delay when there are
  closed folds.
- 'synmaxcol' times 2 bytes before or after the cursor to avoid a delay
  in a long line with syntax highlighting.
- A timeout of 300 msec (60 msec in Insert mode). This can be changed with the
  g:matchparen_timeout and g:matchparen_insert_timeout variables and their
  buffer-local equivalents b:matchparen_timeout and
  b:matchparen_insert_timeout.

If you would like the |%| command to work better, the matchit plugin can be
used, see |matchit-install|.  This plugin also helps to skip matches in
comments.  This is unrelated to the matchparen highlighting, they use a
different mechanism.


### ⛏ pi_spec                                                   *pi_spec.txt*
- [pi_spec manual](vim81/doc/pi_spec.txt)

This is a filetype plugin to work with rpm spec files.

Currently, this Vim plugin allows you to easily update the %changelog
section in RPM spec files.  It will even create a section for you if it
doesn't exist yet.  If you've already inserted an entry today, it will
give you the opportunity to just add a new item in today's entry.  If you
don't provide a format string (|spec_chglog_format|), it'll ask you an
email address and build a format string by itself.


### ⛏ pi_tar                                                    *pi_tar.txt*
- [pi_tar manual](vim81/doc/pi_tar.txt)

   When one edits a *.tar file, this plugin will handle displaying a
   contents page.  Select a file to edit by moving the cursor atop
   the desired file, then hit the <return> key.  After editing, one may
   also write to the file.  Currently, one may not make a new file in
   tar archives via the plugin.

                        *:Vimuntar*
   VIMUNTAR~

   :Vimuntar [vimhome]

    This command copies, if necessary, the tarball to the .vim or vimfiles
    directory using the first writable directory in the |'runtimepath'|
    when no [vimhome] is specified.  Otherwise, the [vimhome] argument
    allows the user to specify that directory, instead.

    The copy is done using the command in *g:tar_copycmd* , which is >
        cp   for cygwin, unix, macunix
        copy for windows (32, 95, 64, 16)
<   The extraction is done with the command specified with
    *g:tar_extractcmd* , which by default is >
        "tar -xf"
<
                        *:TarDiff*
   DIFFERENCING SUPPORT~

   :TarDiff [filename]

    This command will attempt to show the differences between the tarball
    version of a file and the associated file on the system.  In order to
    find that file on the system, the script uses the path associated with
    the file mentioned in the tarball.  If the current directory is not
    correct for that path, :TarDiff will fail to find the associated file.

    If the [filename] is given, that that filename (and path) will be used
    to specify the associated file.


   PREVENTING LOADING~

   If for some reason you do not wish to use vim to examine tar'd files,
   you may put the following two variables into your <.vimrc> to prevent
   the tar plugin from loading: >

    let g:loaded_tarPlugin= 1
    let g:loaded_tar      = 1
<

==============================================================================
3. Options                      *tar-options*

   These options are variables that one may change, typically in one's
   <.vimrc> file.
                         Default
   Variable               Value   Explanation
   *g:tar_browseoptions*  "Ptf"   used to get a list of contents
   *g:tar_readoptions*    "OPxf"  used to extract a file from a tarball
   *g:tar_cmd*            "tar"   the name of the tar program
   *g:tar_nomax*            0     if true, file window will not be maximized
   *g:tar_secure*         undef   if exists:
                    "--"s will be used to prevent unwanted
                    option expansion in tar commands.
                    Please be sure that your tar command
                    accepts "--"; Posix compliant tar
                    utilities do accept them.
                  if not exists:
                    The tar plugin will reject any tar
                    files or member files that begin with
                    "-"
                  Not all tar's support the "--" which is why
                  it isn't default.
   *g:tar_writeoptions*   "uf"    used to update/replace a file


### ⛏ pi_vimball                                                *pi_vimball.txt*
- [ Set your sett- [pi_vimball manual](vim81/doc/pi_vimball.txt)
ings - 05.4 Adding a package](doc/usr_05.txt)

Vim can be tuned to work like you want it to.  This chapter shows you how to
make Vim start with options set to different values.  Add plugins to extend
Vim's capabilities.  Or define your own macros.

    05.1    The vimrc file
    05.2    The example vimrc file explained
    05.3    Simple mappings
    05.4    Adding a package
    05.5    Adding a plugin
    05.6    Adding a help file
    05.7    The option window
    05.8    Often used options

==============================================================================
2. Vimball Introduction                     *vimball-intro*

    Vimball is intended to make life simpler for users of plugins.  All
    a user needs to do with a vimball is: >
        vim someplugin.vba
        :so %
        :q
<   and the plugin and all its components will be installed into their
    appropriate directories.  Note that one doesn't need to be in any
    particular directory when one does this.  Plus, any help for the
    plugin will also be automatically installed.

    If a user has decided to use the AsNeeded plugin, vimball is smart
    enough to put scripts nominally intended for .vim/plugin/ into
    .vim/AsNeeded/ instead.

    Removing a plugin that was installed with vimball is really easy: >
        vim
        :RmVimball someplugin
<   This operation is not at all easy for zips and tarballs, for example.

    Vimball examines the user's |'runtimepath'| to determine where to put
    the scripts.  The first directory mentioned on the runtimepath is
    usually used if possible.  Use >
        :echo &rtp
<   to see that directory.

==============================================================================
3. Vimball Manual                   *vimball-manual*

MAKING A VIMBALL                        *:MkVimball*

        :[range]MkVimball[!] filename [path]

    The range is composed of lines holding paths to files to be included
    in your new vimball, omitting the portion of the paths that is
    normally specified by the runtimepath (|'rtp'|).  As an example: >
        plugin/something.vim
        doc/something.txt
<   using >

        :[range]MkVimball filename

WINDOWS                         *vimball-windows*

    Many vimball files are compressed with gzip.  Windows, unfortunately,
    does not come provided with a tool to decompress gzip'ped files.
    Fortunately, there are a number of tools available for Windows users
    to un-gzip files:
>
        Item     Tool/Suite   Free   Website
        ----     ----------   ----   -------
        7zip        tool       y     http://www.7-zip.org/
        Winzip      tool       n     http://www.winzip.com/downwz.htm
        unxutils    suite      y     http://unxutils.sourceforge.net/
        cygwin      suite      y     http://www.cygwin.com/
        GnuWin32    suite      y     http://gnuwin32.sourceforge.net/
        MinGW       suite      y     http://www.mingw.org/



### ⛏ pi_gzip                                                   *pi_gzip.txt*
- [pi_gzip manual](vim81/doc/pi_gzip.txt)

The functionality mentioned here is a |standard-plugin|.
This plugin is only available if 'compatible' is not set.
You can avoid loading this plugin by setting the "loaded_gzip" variable: >
    :let loaded_gzip = 1

==============================================================================
1. Autocommands                     *gzip-autocmd*

The plugin installs autocommands to intercept reading and writing of files
with these extensions:

    extension   compression ~
    *.Z     compress (Lempel-Ziv)
    *.gz        gzip
    *.bz2       bzip2
    *.lzma      lzma
    *.xz        xz
    *.lz        lzip
    *.zst       zstd

That's actually the only thing you need to know.  There are no options.

After decompressing a file, the filetype will be detected again.  This will
make a file like "foo.c.gz" get the "c" filetype.

If you have 'patchmode' set, it will be appended after the extension for
compression.  Thus editing the patchmode file will not give you the automatic
decompression.  You have to rename the file if you want this.


### ⛏ pi_zip                                                    *pi_zip.txt*
- [pi_zip manual](vim81/doc/pi_zip.txt)

   When one edits a *.zip file, this plugin will handle displaying a
   contents page.  Select a file to edit by moving the cursor atop
   the desired file, then hit the <return> key.  After editing, one may
   also write to the file.  Currently, one may not make a new file in
   zip archives via the plugin.

                                *zip-x*
   x : may extract a listed file when the cursor is atop it

   OPTIONS

                            *g:zip_nomax*

   If this variable exists and is true, the file window will not be
   automatically maximized when opened.

                            *g:zip_shq*
   Different operating systems may use one or more shells to execute
   commands.  Zip will try to guess the correct quoting mechanism to
   allow spaces and whatnot in filenames; however, if it is incorrectly
   guessing the quote to use for your setup, you may use >
    g:zip_shq
<  which by default is a single quote under Unix (') and a double quote
   under Windows (").  If you'd rather have no quotes, simply set
   g:zip_shq to the empty string (let g:zip_shq= "") in your <.vimrc>.

                            *g:zip_unzipcmd*
   Use this option to specify the program which does the duty of "unzip".
   It's used during browsing. By default: >

    let g:zip_unzipcmd= "unzip"
<
                            *g:zip_zipcmd*
   Use this option to specify the program which does the duty of "zip".
   It's used during the writing (updating) of a file already in a zip
   file; by default: >

    let g:zip_zipcmd= "zip"
<
                            *g:zip_extractcmd*
   This option specifies the program (and any options needed) used to
   extract a file from a zip archive.  By default, >

    let g:zip_extractcmd= g:zip_unzipcmd
<
   PREVENTING LOADING~

   If for some reason you do not wish to use vim to examine zipped files,
   you may put the following two variables into your <.vimrc> to prevent
   the zip plugin from loading: >

    let g:loaded_zipPlugin= 1
    let g:loaded_zip      = 1




## ==⚡ Nice Plugins
- https://vim.fandom.com/wiki/Use_Vim_like_an_IDE
- https://github.com/SpaceVim/SpaceVim
- https://github.com/lunarvim/LunarVim


SpaceVim 是一个社区驱动的模块化 Vim/Neovim 配置集合，以模块的方式组织管理插件以
及相关配置，为不同的语言开发量身定制了相关的开发模块，该模块提供代码自动补全，
语法检查、格式化、调试、REPL 等特性。用户仅需载入相关语言的模块即可得到一个开箱
即用的 Vim-IDE。



⛏ 目录树插件 NERDTree: File Tree Traversal Within Vim

The NERDTree plug-in is a major step forward in making Vim function like a stan‐
dard IDE. Once installed, you open and close its window with the :NERDTreeToggle
command. The documentation suggests mapping this to a keyboard sequence such as
CTRL-N , like so:

    map <C-n> :NERDTreeToggle<CR>

This command opens a new window on the left side of the screen, showing a
standard file tree. Type ? in the NERDTree window to see a list of commands you can
use to expand or contract directories and to open files in the current or new windows.
The behavior varies depending on whether the current line in the NERDTree window
is a file or a directory.


⛏ 自动完成插件 YouCompleteMe: Dynamic completion and semantic checking
The YouCompleteMe plug-in is very powerful. It provides as-you-type completion
and semantic error checking for multiple programming languages. As of this writing,
it supports C, C++, C#, Go, JavaScript, Python, Rust, and TypeScript. You may have
to install additional software to get things to work for your language.
You can install YouCompleteMe directly from source—instructions are included at
the GitHub site. However, you may be able to install it using your system’s package
manager, and we found this to be the easier way to go.


⛏ 代码管理插件 Fugitive: Running Git from Within Vim
Vim users who manage their files with Git end up moving back and forth between
their Vim window and their terminal window in order to issue Git commands. The
Fugitive plug-in allows you to stay within Vim while working with Git.
The change to make is very simple. Instead of running the git command in a
terminal emulator, use :Git (or even just :G ) and continue as usual ( :Git add , :Git
status , :Git commit , etc.). Fugitive places any output from Git into a new temporary
buffer, if necessary. When committing a file, you edit the commit message in the
current Vim instance.


⛏ 集成开发插件 Vim as an IDE
This is something of a tutorial on Vim plug-ins for software development, as
opposed to something that is ready to just drop in and go. It’s valuable because
of the many links to sources for more information. See https://github.com/jez/
vim-as-an-ide.


⛏ 多语言调试插件 vimspector
This is “a multi language graphical debugger for Vim.” The focus here is on
debugging code, not on being a full-featured IDE. See https://github.com/pure
mourning/vimspector.


### ===🗝 seoul256.vim
- https://github.com/junegunn/seoul256.vim

seoul256.vim is a low-contrast Vim color scheme based on Seoul Colors. Works on 256-color terminal or on GVim.

Use your favorite plugin manager.

vim-plug

- Add `Plug 'junegunn/seoul256.vim'` to .vimrc
- Run :PlugInstall


```sh
" Unified color scheme (default: dark)
colo seoul256

" Light color scheme
colo seoul256-light

" Switch
set background=dark
set background=light

" seoul256 (dark):
"   Range:   233 (darkest) ~ 239 (lightest)
"   Default: 237
let g:seoul256_background = 236
colo seoul256

" seoul256 (light):
"   Range:   252 (darkest) ~ 256 (lightest)
"   Default: 253
let g:seoul256_background = 256
colo seoul256
```


### ===🗝 EasyAlign

EasyAlign 是一文字、表格对齐插件，帮助文档 :help vim-easy-align，在 .vimrc 设置以下映射开始使用它：

```sh
"" # Start interactive EasyAlign in visual mode (e.g. vip<Enter>)
vmap <Enter> <Plug>(EasyAlign)

"" # Start interactive EasyAlign for a motion/text object (e.g. gaip)
nmap ga <Plug>(EasyAlign)
```

以上两个分别是 Visual Mode 和 Normal Mode 模式下的映射，可以执行以下命令测试：

- `vipga` "(v)isual-select (i)nner (p)aragraph and (ga) start easy-align"
- `gaip` "(ga) start easy-align on (i)nner (p)aragraph"

假设，有以下需要对齐内容：

    apple   =red
    grass+=green
    sky-=   blue

    | Option| Type | Default | Description |
    |--|--|--|--|
    | threads | Fixnum | 1 | number of threads in the thread pool |
    |queues |Fixnum | 1 | number of concurrent queues |
    |queue_size | Fixnum | 1000 | size of each queue |
    |   interval | Numeric | 0 | dispatcher interval for batch processing |
    |batch | Boolean | false | enables batch processing mode |
     |batch_size | Fixnum | nil | number of maximum items to be assigned at once |
     |logger | Logger | nil | logger instance for debug logs |


光标在前面内容所在行上，执行以下命令之一，按 = 号位置对齐它们：

    vip<Enter>=
    gaip=

命令各个分步骤解析：

 - vip<Enter>=
   - v      ==> 进入 visual-select
   - ip     ==> 选择 inner paragraph
   - <Enter>==> Start EasyAlign command
   - =      ==> 按 = 号位置对齐内容
 - gaip=
   - ga     ==> Start EasyAlign command
   - ip     ==> for inner paragraph
   - =      ==> Align around =

表格对齐操作使用不同的分隔符号，参考命令 `<Enter>*|`，对齐后的内容参考：

        apple  = red
        grass += green
        sky   -= blue

    | Option     | Type    | Default | Description                                    |
    | --         | --      | --      | --                                             |
    | threads    | Fixnum  | 1       | number of threads in the thread pool           |
    | queues     | Fixnum  | 1       | number of concurrent queues                    |
    ..

### ===🗝 Tabular
- https://github.com/godlygeek/tabular
- http://vimcasts.org/episodes/aligning-text-with-tabular-vim/

Sometimes, it's useful to line up text. Naturally, it's nicer to have the computer do this for you, since aligning things by hand quickly becomes unpleasant. While there are other plugins for aligning text, the ones I've tried are either impossibly difficult to understand and use, or too simplistic to handle complicated tasks. This plugin aims to make the easy things easy and the hard things possible, without providing an unnecessarily obtuse interface. It's still a work in progress, and criticisms are welcome.

See Aligning Text with Tabular.vim for a screencast that shows how Tabular.vim works.

See doc/Tabular.txt for detailed documentation.

A format specifier is either l, r, or c, followed by one or more digits.  If
the letter is l, the field will be left aligned, similarly for r and right
aligning and c and center aligning.  The number following the letter is the
number of spaces padding to insert before the start of the next field.
Multiple format specifiers can be added to the same command - each field will
be printed with the next format specifier in the list; when they all have been
used the first will be used again, and so on.  So, the last command right
aligned every field, then inserted 0 spaces of padding before the next field.
What if we wanted to right align the text before the comma, and left align the
text after the comma?  The command would look like this:
>
  :Tabularize /,/r1c1l0

            Some short phrase , some other phrase
    A much longer phrase here , and another long phrase

Aligning assignments Before:

    one = 1
    two = 2
    three = 3
    four = 4

Running :Tab /= produces:

    one   = 1
    two   = 2
    three = 3
    four  = 4

Colon assignmentsThere are a couple of different ways that colon assignments could be aligned. If we start with an example that is not aligned:

```js
var video = {
    metadata: {
        title: "Aligning assignments"
        h264Src: "/media/alignment.mov",
        oggSrc: "/media/alignment.ogv"
        posterSrc: "/media/alignment.png"
        duration: 320,
    }
}
```

Select the inner block by positioning your cursor inside it and running vi} (enable Visual mode, and select inner Brace). Then you could run :Tab/: which would produce this result:

```js
var video = {
    metadata: {
        title     : "Aligning assignments"
        h264Src   : "/media/alignment.mov",
        oggSrc    : "/media/alignment.ogv"
        posterSrc : "/media/alignment.png"
        duration  : 320,
    }
}
```

If you don’t like stacking the colons in a column, you could use the \zs atom to exclude the : character from the search match. Running :Tab /:\zs produces this result:

```js
var video = {
    metadata: {
        title:      "Aligning assignments"
        h264Src:    "/media/alignment.mov",
        oggSrc:     "/media/alignment.ogv"
        posterSrc:  "/media/alignment.png"
        duration:   320,
    }
}
```

Be aware that if you work in a team, there may be a house style that you should follow.Table markupHere is a scenario outline for cucumber steps, including a pipe-delimited table of examples:

    Scenario Outline: eating
      Given there are &lt;start&gt; cucumbers
      When I eat &lt;eat&gt; cucumbers
      Then I should have &lt;left&gt; cucumbers

      Examples:
        |start|eat|left|
        |12|5|7|
        |20|5|15|

With the cursor positioned anywhere in the table, running :Tab/| produces:

    Scenario Outline: eating
      Given there are &lt;start&gt; cucumbers
      When I eat &lt;eat&gt; cucumbers
      Then I should have &lt;left&gt; cucumbers

      Examples:
        | start | eat | left |
        | 12    | 5   | 7    |
        | 20    | 5   | 15   |

Creating mappingsIf you find yourself using a particular token for alignment often, then you might want to save yourself a few keystrokes by creating mappings for normal and visual modes. Here are a few suggestions to get you started:

    let mapleader=','
    if exists(":Tabularize")
      nmap <Leader>a= :Tabularize /=<CR>
      vmap <Leader>a= :Tabularize /=<CR>
      nmap <Leader>a: :Tabularize /:\zs<CR>
      vmap <Leader>a: :Tabularize /:\zs<CR>
    endif

If you were in normal or visual mode, you could type ,a= to align equals signs. In visual mode, the alignment would apply to the selected lines, but in normal mode tabular would attempt to guess the range.You could take it a step further, by creating an insert mode mapping to trigger the :Tabular command when you type the character that you want to align. Tim Pope shows us how in this gist:

    inoremap <silent> <Bar>   <Bar><Esc>:call <SID>align()<CR>a

    function! s:align()
      let p = '^\s*|\s.*\s|\s*$'
      if exists(':Tabularize') && getline('.') =~# '^\s*|' && (getline(line('.')-1) =~# p || getline(line('.')+1) =~# p)
        let column = strlen(substitute(getline('.')[0:col('.')],'[^|]','','g'))
        let position = strlen(matchstr(getline('.')[0:col('.')],'.*|\s*\zs.*'))
        Tabularize/|/l1
        normal! 0
        call search(repeat('[^|]*|',column).'\s\{-\}'.repeat('.',position),'ce',line('.'))
      endif
    endfunction

If you put this in your vimrc file, then it will call the :Tabularize command each time you insert a | character.

Further reading

   1. the Tabular plugin
   2. :help /\zs - Vim’s zero-width ‘pattern start’ search atom
   3. :help /\@<= - Vim also has a ‘positive lookbehind’ assertion
   4. Tim Pope’s insert mode cucumber alignment gist
   5. Align.vim by Charles Campbell - another fine alignment plugin


### ===🗝 Popup Menu
- https://github.com/dzhou121/gonvim
- https://github.com/neovim/neovim/wiki/Related-projects#gui
- https://github.com/akiyosi/goneovim
- [Lightning-fast and Powerful Code Editor written in Rust](https://github.com/lapce/lapce)

Neovim GUI written in Golang, using a [Golang qt backend](https://github.com/therecipe/qt)
`Downloads:` Pre-built packages for Windows, macOS, and Linux are found at the [Releases](https://github.com/dzhou121/gonvim/releases/) page.

`Requirements:` [Neovim](https://github.com/neovim/neovim) (v0.2)



### ===🗝 Airline or Powerline - Tab Bar/Status Bar
- https://github.com/powerline/powerline
- https://github.com/Lokaltog/powerline
- https://github.com/vim-airline/vim-airline
- https://github.com/vim-airline/vim-airline-thremes
- https://linuxconfig.org/introduction-to-powerline-the-statusline-plugin-for-vim
- https://www.alexwhittemore.com/gvim-with-powerline-on-windows-8-64bit/
- https://www.ricalo.com/blog/install-powerline-windows/

状态条插件的内容有三个部分：

   - 字体文件的介绍，以及安装与使用；
   - Vim-Airline 和 Vim-Powerline 的差别；
   - Vim-Airline 和 Vim-Powerline 安装与配置；

使用 Windows Terminal 终端应用，Set the shell's title
- https://docs.microsoft.com/en-us/windows/terminal/tutorials/tab-title

|   Shell    |                 Command                  |
|------------|------------------------------------------|
| PowerShell | $Host.UI.RawUI.WindowTitle = "New Title" |
| Command    | Prompt  TITLE "New Title"                |
| bash*      | echo -ne "\033]0;New Title\a"            |

Vim-Airline 和 Vim-Powerline 都是非常棒棒的状态条、标签块插件，可优化 Vim 原有的 Tab 有点混乱的状。

作为更早期的插件，Powerline 使用 Python 脚本开发，不仅支持 Vim，看起来块头更大。并且在 Vim 配置上也更显异类，并且混乱，需要有一定的 Python 配置能力和 Vim 脚本接口扩展知识。

另外，因为 Powerline 使用更好看箭头，需要安装额外的 Arimo for Powerline 字体。只在 Windows WSL 系统上安装，Windows Terminal 上并没有效果，并且很卡顿体验不够好：

    sudo apt install --yes powerline
    sudo apt-get install fonts-powerline

在 Windows 上的 NeoVim 中也出现了错误：

    AttributeError: 'LegacyVim' object has no attribute 'bindeval'

安装字体注意，因为在 Windows WSL 环境下使用 Vim，控制台是在宿主系统上执行的，字体就要安装在宿主系统上。因为 Windows Terminal 运行在宿主系统上，WSL 是子系统，字体应该在宿主机上安装。

字体特点介绍如，按紧凑度升序：

|               字体               |                                特点                   
|----------------------------------|-----------------------------------------------------
| Space Mono for Powerline         | 结构相当稀疏，画面整洁几乎接收空旷，对中文支持较好。
| JetBrains Mono Thin              | 结构相当稀疏，看起来画面很，对中文支持较好。
| Source Code Pro for Powerline    | 行间结构较稀疏，看起来画面很，对中文支持较好。
| Roboto Mono for Powerline        | 行间结构较稀疏，Thin/Light/Medium 样式设置到 for 字之前。
| Fira Mono for Powerline          | 画面比较平衡，内容紧凑但不会拥挤，中文支持很好。
| Fira Code                        | 画面比较平衡，内容紧凑但不会拥挤，Unicode 支持很好，连字很优秀。
| Cousine for Powerline            | 行间结构平衡，但字间比较宽，画面比 Ubuntu Mono 要整洁。
| Hack                             | 画面比较平衡，内容紧凑但不会拥挤，中文支持很好。
| Cascadia Code/Mono               | 画面比较平衡，笔画丰满、紧凑但相当整洁，中文支持很好。
| Inconsolata for Powerline        | 拉丁字母非常好看，苗条，内容更紧凑，中文支持不好，大小粗细不一致。
| Anonymice Powerline              | 结构也属于密集的，但看画面比 Ubuntu Mono 要整洁。
| Ubuntu Mono derivative Powerline | 行间结构密集，看起来画面很拥挤，同时也表示可以显示更多内容。


Cascadia Code、Fira Code、JetBrains Mono 三款字体均支持连字，>= <= => -> != <> 这类两字并作一格，也均有非连字版本，字体均强调了 'l' 的辨识度。

- [Arimo for Powerline](https://github.com/powerline/fonts)
- [Cascadia Code](https://github.com/microsoft/cascadia-code/releases)
- [Fira Code](https://github.com/tonsky/FiraCode/releases)
- [JetBrains Mono](https://github.com/JetBrains/JetBrainsMono/releases)
- [Sarasa Gothic 更纱黑体](https://github.com/be5invis/Sarasa-Gothic)

各字体的变体：

| Fira Code |   JetBrains Mono  | Cascadia Code/Mono | Arimo for PL |  Source Code Pro  |  Space Mono |
|-----------|-------------------|--------------------|--------------|-------------------|-------------|
| Bold      | Bold              | Bold               | Normal       | Black             | Bold        |
| SemiBold  | BoldItalic        | Bold Italic        | Bold         | Black Italic      | Bold Italic |
| Medium    | ExtraBold         | ExtraLight         | Bold Italic  | Bold              | Italic      |
| Regular   | ExtraBoldItalic   | ExtraLight Italic  | Italic       | Bold Italic       | Regular     |
| Light     | SemiBold          | Italic             |              | Semibold Italic   |             |
| Retina    | SemiBoldItalic    | Light              |              | Semibold          |             |
|           | Medium            | Light Italic       |              | Medium            |             |
|           | Medium Italic     | Regular            |              | Medium Italic     |             |
|           | Regular           | SemiBold           |              | Light             |             |
|           | Light             | SemiBold Italic    |              | Light Italic      |             |
|           | Light Italic      | SemiLight          |              | ExtraLight        |             |
|           | ExtraLight        | SemiLight Italic   |              | ExtraLight Italic |             |
|           | ExtraLight Italic |                    |              | Italic            |             |
|           | Thin              |                    |              |                   |             |
|           | ThinItalic        |                    |              |                   |             |
|           | Italic            |                    |              |                   |             |

Fira Code 是 Mozilla 公司主推的字体系列，专为写程序设计的字体。出来具有等宽等基本属性外，还加入了编程连字特性（ligatures），这点做得非常好，并且对视网膜高清屏有支持，有 Retina 变体。

Fira Code 就是利用这个特性对编程中的常用符号进行优化，比如把输入的「!=」直接显示成 「≠」 或者把 「>=」 变成 「≥ 」 等等，以此来提高代码的可读性。并且 1liIoOpP0 这此字符辨识度极高。

Fira Code 对 Unicode 字符集支持度还非常高，其中 Medium 变体中文有粗线不一问题；

   1. Fixed height of ∑ U+2211 N-ARY SUMMATION #1083
   2. Added U+2241..U+224B ≁ ≂ ≃ ≄ ≅ ≆ ≇ ≉ ≊ ≋ #1090
   3. Added new enclosed characters from Unicode 13 U+0229C ⊜, U+1F10D 🄍, U+1F10E 🄎, U+1F10F 🄏, U+1F16D 🅭, U+1F16E 🅮, U+1F16F 🅯, U+1F1AD 🆭 #1070
   4. Redrew U+27F0..U+27FF Supplemental Arrows-A to be strict monospace ⟲⟳⟴⟵⟶⟷⟸⟹⟺⟻⟼⟽⟾⟿ #1109 #1123
   5. Added U+220E End of Proof ∎ #1115
   6. Added U+FFFD Replacement Character � #1137, thanks @gjvnq
   7. Added U+EE00..U+EE0B Progress Bar  #1182
   8. Added U+2237 Propotion ∷ #1219
   9. Added U+21AA Rightwards Arrow with Hook ↪ #1307

更纱黑体是一种中文编程字体，包含以下样式：

   - Sarasa Gothic / 更纱黑体：基于Inter，全宽引号
   - Sarasa UI / 更纱黑体 UI：基于Inter，窄引号

以下 PowerSHell 脚本供参考，可以直接下载 Powerline 字包，解压后执行安装脚本，它会执行 Windows 字体安装程序，将字体安装到 Windows Fonts 目录下：

```sh
$url = "https://github.com/powerline/fonts/archive/master.zip"
powershell -command "& { iwr $url -OutFile ~\fonts.zip }"
Expand-Archive -Path ~\fonts.zip -DestinationPath ~
~\fonts-master\install.ps1
```

另一个替代选择是微软的 Cascadia Code 字体，它支持 Powerline Glyph。Windows Terminal 要使用此字体，需要修改属性，或者直接修改配置文件 settings.json，通过 Ctrl-Shift-P 打开 Open Settings file，或设置 Open settings ⇨ PowerShell ⇨ Apperance ⇨ Text ⇨ Font Face 指定：

```json
{
    "profiles" : {
    "list": 
    [
        {
            "commandline" : "C:\\Program Files\\PowerShell\\7\\pwsh.exe",
            "fontFace" : "Cascadia Mono PL",
            // ...
        }
    ]
}
```

Cascadia Code 字体包内含有 OTF\TTF\WOFF2 三种格式，通常选择其中 TTF 格式安装。WOFF2 这种格式在网页上应用很常见，因为它体积更小。选择其中一个字体文件，双击打开字体浏览程序安装，或者多选通过右键菜单批量安装。

另外，字体包中还提供了 static 目录下的字体文件，这部分是静态字体，在 Variable 字体不支持的情况可以使用，一般都是使用可变形字体。变体字的好处就是包含了 Thin/Light/Medium/Bold 等变体字形，使用起来比较方便。Cascadia Code 目前有四个组合变体，主要是 Code 和 Mono 两种，后者是等宽不连字，PL 表示 PowerLine。

Cascadia Code 是 Microsoft 提供的一种新的等宽字体，可为命令行应用程序和文本编辑器提供全新的体验。 Cascadia Code 是与 Windows 终端一起开发的。 建议将此字体与终端应用程序和文本编辑器（如 Visual Studio 和 Visual Studio Code）一起使用。

Cascadia Code is a purpose-built monospaced TrueType font for Windows Terminal, the new command-line interface for Microsoft Windows. It includes programming ligatures and was designed to enhance the look and feel of Windows Terminal, terminal applications and text editors such as Visual Studio and Visual Studio Code. The font is open source under the SIL Open Font License and available on GitHub. 

Windows 终端在其包中提供 Cascadia Code 和 Cascadia Mono，字体信息如下：

|     字体名称      | 包括连字 | Powerline 字形 |
|------------------|----------|----------------|
| Cascadia Code    | 是       | 否             |
| Cascadia Mono    | 否       | 否             |
| Cascadia Code PL | 是       | 是             |
| Cascadia Mono PL | 否       | 是             |

Font Variants

   1. Cascadia Code: standard version of Cascadia
   2. Cascadia Mono: a version of Cascadia that doesn't have ligatures
   3. Cascadia (Code|Mono) PL: a version of Cascadia that has embedded Powerline symbols

| Font formats |                                 Notes                                  |
|--------------|------------------------------------------------------------------------|
| ttf variable | Recommend this version for all users, and particularly those           |
|              | on Windows or any other OS that employs TrueType hinting. It offers    |
|              | the greatest diversity of weight options (anything from 200-700).      |
|--------------|------------------------------------------------------------------------|
| ttf static   | In the rare situation where the above variable font version is         |
|              | not supported, or a singular weight is preferred to the entire range,  |
|              | static formats are supplied. However, please note they do not have     |
|              | the same degree of hinting quality as the variable font versions.      |
|--------------|------------------------------------------------------------------------|
| otf static   | For users who prefer OTF format fonts, otf static instances            |
|              | are provided. At this time we do not have a variable font OTF version. |
|--------------|------------------------------------------------------------------------|
| WOFF2        | These versions are provided for the purposes of web use,               |
|              | and are available both as variable fonts, and static instances.        |

目前，Vim-Powerline 已经停止更新，并转向 Powerline 项目。

在 Vim 配置脚本中测试当前环境是否对 Python 3.x 的支持。

配置上需要 Python 基础，需要使用 `pip` 和 `setuptools` 包安装工具，并且对 Windows 系统支持还不好，PowerShell 脚本也没提供。

```sh
"" # Config vim-powerline for Vim-Plug
Plug 'Lokaltog/vim-powerline'

"" # Powerline in .vimrc, Test for Python 3.x 
if has('python3')
  python3 import sys
  python3 print('Python',sys.version)

  "" # The status bar is never displayed
  set laststatus=0
  "" # The status bar is displayed only if there are at least two windows
  set laststatus=1
  "" # The status bar is always displayed
  set laststatus=2

  python3 from powerline.vim import setup as powerline_setup
  python3 powerline_setup()
  python3 del powerline_setup
endif
```

1. Install Python 3.2+, Python 2.6+ or PyPy and ``pip`` with ``setuptools``. 
   This step is distribution-specific, so no commands provided.
2. Install Powerline using one of the following commands:

      pip install --user powerline-status

   will get the latest release version and

      pip install --user git+https://github.com/powerline/powerline

   will get the latest development version.

   .. note:: Due to the naming conflict with an unrelated project powerline is
      named ``powerline-status`` in PyPI.

   .. note::
      Powerline developers should be aware that``pip install --editable`` does 
      not currently fully work. Installation performed this way are missing 
      ``powerline`` executable that needs to be symlinked. It will be located in 
      ``scripts/powerline``.

Basic powerline configuration is done via `JSON` files located at `.config/powerline/`. It is a good idea to start by copying the default configuration located at `powerline_root/powerline/config_files/` to `.config/powerline/`.

If you installed the powerline from the AUR or via pip, `powerline_root` should be `/usr/lib/python3.6/site-packages/` or something similar, depending on your python version.


Airline 更轻量化，安装后免配置即可用，还可以搭配主题，Vundle 或 Vim-Plug 方式安装如下：

```sh
"" # Install the themes as you would this plugin (Vundle example):
Plugin 'vim-airline/vim-airline'
Plugin 'vim-airline/vim-airline-themes'

"" # Install the themes as you would this plugin (Vim-Plug example):
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'

"" # https://github.com/vim-airline/vim-airline/issues/1291
let g:airline_powerline_fonts=1
set guifont=Space\ Mono\ for\ Powerline:h7.5:w4.5
"" # set guifont=Inconsolata\ for\ Powerline:h7.5:w4.5
"" # set guifont=Fira\ Code:h7.5:w4.5
"" # set guifont=Cascadia\ Mono\ PL:h7.5:w4.5
"" # set guifont=Arimo\ for\ Powerline:h7.5:w4.5
"" # set guifont=Arimo\ Italic\ for\ Powerline:h7.5:w4.5
```

可以在 Airline 中使用 Powerline 的好看字体，通过 g:airline_powerline_font 全局变量启用。

图形界面字体还可以通过 guifont 选项设置，格式参考 :help guifont。


```sh
"" # Colorful abcdefgh
"" # https://github.com/vim-airline/vim-airline/issues/299#issuecomment-25772886
function! AccentDemo()
  let keys = ['a','b','c','d','e','f','g','h']
  for k in keys
    call airline#parts#define_text(k, k)
  endfor
  call airline#parts#define_accent('a', 'red')
  call airline#parts#define_accent('b', 'green')
  call airline#parts#define_accent('c', 'blue')
  call airline#parts#define_accent('d', 'yellow')
  call airline#parts#define_accent('e', 'orange')
  call airline#parts#define_accent('f', 'purple')
  call airline#parts#define_accent('g', 'bold')
  call airline#parts#define_accent('h', 'italic')
  let g:airline_section_a = airline#section#create(keys)
endfunction
autocmd VimEnter * call AccentDemo()
```

以 Vim-Plug 为例，修改 .vimrc 配置文件后，通过 :PlugStatus 查询插件状态，通过 :PlugInstall 安装插件。

插件样式主题命令参考：

   ⭆ In .vimrc, use let g:airline_theme='<theme>', e.g. ='simple'
   ⭆ :AirlineTheme <theme> to set the theme, e.g. :AirlineTheme simple
   ⭆ :AirlineTheme random to set a randomly selected
   ⭆ `:help airline` `:help airline-themes` to get help


When the plugin is correctly loaded, there will be a nice statusline at the
bottom of each vim window.

That line consists of several sections, each one displaying some piece of
information. By default (without configuration) this line will look like this:

    +-----------------------------------------------------------------------------+
    |~                                                                            |
    |~                                                                            |
    |~                     VIM - Vi IMproved                                      |
    |~                                                                            |
    |~                       version 8.2                                          |
    |~                    by Bram Moolenaar et al.                                |
    |~           Vim is open source and freely distributable                      |
    |~                                                                            |
    |~           type :h :q<Enter>          to exit                               |
    |~           type :help<Enter> or <F1>  for on-line help                      |
    |~           type :help version8<Enter> for version info                      |
    |~                                                                            |
    |~                                                                            |
    +-----------------------------------------------------------------------------+
    | A | B |                     C                            X | Y | Z |  [...] |
    +-----------------------------------------------------------------------------+

The statusline is the colored line at the bottom, which contains the sections
(possibly in different colors):

section|meaning (example)
-------|------------------
  A    | displays the mode + additional flags like crypt/spell/paste (INSERT)
  B    | Environment status (VCS information - branch, hunk summary (master), [battery][61] level)
  C    | filename + read-only flag (~/.vim/vimrc RO)
  X    | filetype  (vim)
  Y    | file encoding[fileformat] (utf-8[unix])
  Z    | current position in the file
 [...] | additional sections (warning/errors/statistics) from external plugins (e.g. YCM, syntastic, ...)

The information in Section Z looks like this:

`10% ☰ 10/100 ln : 20`

This means:

    10%      - 10 percent down the top of the file
    ☰ 10     - current line 10
    /100 ln  - of 100 lines
    : 20     - current column 20

For a better look, those sections can be colored differently, depending on various conditions
(e.g. the mode or whether the current file is 'modified')

🌻 Features

*  Tiny core written with extensibility in mind ([open/closed principle][8]).
*  Integrates with a variety of plugins, including: [vim-bufferline][6],
   [fugitive][4], [flog][62], [unite][9], [ctrlp][10], [minibufexpl][15], [gundo][16],
   [undotree][17], [nerdtree][18], [tagbar][19], [vim-gitgutter][29],
   [vim-signify][30], [quickfixsigns][39], [syntastic][5], [eclim][34],
   [lawrencium][21], [virtualenv][31], [tmuxline][35], [taboo.vim][37],
   [ctrlspace][38], [vim-bufmru][47], [vimagit][50], [denite][51],
   [vim.battery][61] and more.
*  Looks good with regular fonts and provides configuration points so you can use unicode or powerline symbols.
*  Optimized for speed - loads in under a millisecond.
*  Extensive suite of themes for popular color schemes including [solarized][23] (dark and light), [tomorrow][24] (all variants), [base16][32] (all variants), [molokai][25], [jellybeans][26] and others.
 Note these are now external to this plugin. More details can be found in the [themes repository][46].
*  Supports 7.2 as the minimum Vim version.
*  The master branch tries to be as stable as possible, and new features are merged in only after they have gone through a [full regression test][33].
*  Unit testing suite.




### ===🗝 Tagbar
- https://github.com/preservim/tagbar
- http://ctags.sourceforge.net/

Tagbar: a class outline viewer for Vim
Vint Check

What Tagbar is
Tagbar is a Vim plugin that provides an easy way to browse the tags of the current file and get an overview of its structure. It does this by creating a sidebar that displays the ctags-generated tags of the current file, ordered by their scope. This means that for example methods in C++ are displayed under the class they are defined in.

What Tagbar is not
Tagbar is not a general-purpose tool for managing tags files. It only creates the tags it needs on-the-fly in-memory without creating any files. tags file management is provided by other plugins, like for example easytags.

Extract the archive or clone the repository into a directory in your 'runtimepath', or use a plugin manager of your choice like pathogen. Don't forget to run :helptags if your plugin manager doesn't do it for you so you can access the documentation with :help tagbar.

If the ctags executable is not installed in one of the directories in your $PATH environment variable you have to set the g:tagbar_ctags_bin variable, see the documentation for more info.


Quickstart

Put something like the following into your `~/.vimrc`:

    nmap <F8> :TagbarToggle<CR>

If you do this the F8 key will toggle the Tagbar window. You can of course use any shortcut you want. For more flexible ways to open and close the window (and the rest of the functionality) see the documentation using :help tagbar.


### ===🗝 LaTeX MathJax MathML AsciiMath
- [EqnEditor](https://editor.codecogs.com/)
- [LatexLive Editor](https://latexlive.com/)
- [Python-Markdown Parser]: https://github.com/Python-Markdown/markdown
- [MathJax Documentation](https://docs.mathjax.org/en/latest/index.html)
- [MathJax Web Demos Repository](https://github.com/mathjax/MathJax-demos-web)

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"> </script>

Math can be displayed in the browser using MathJax or Katex. The feature can be enabled by correctly configuring the `"js"`, `"css"`, and `"markdown_extensions"` configuration fields. This allows for inline math to be included \\(\frac{\pi}{2}\\) $\pi$.

Alternatively, math can be written on its own line:

$$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) \, e^{ - i \omega t}dt$$

\\[\int_0^1 f(t) \mathrm{d}t\\]

\\[\sum_j \gamma_j^2/d_j\\]

\\[\S_{j \gamma_j^2/d_j}\\]


Here is a complete sample page containing TeX mathematics (see the MathJax Web Demos Repository for more).

```py
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



### ===🗝 Markdown
- https://github.com/preservim/vim-markdown
- https://github.com/plasticboy/vim-markdown
- https://github.com/tpope/vim-markdown
- [Vim markdown.vim](runtime/syntax/markdown.vim)
- [NeoVim Markdown Preview](https://github.com/iamcco/markdown-preview.nvim)
- [Vim Markdown Preview](https://github.com/iamcco/markdown-preview.vim)
- [Minimd : A fast, folding Markdown outliner](https://www.vim.org/scripts/script.php?script_id=5958)

目前 plasticboy 迁移到 preservim 账户项目上，克隆时会自动选择后者。

With vim-plug:

Add Plug 'iamcco/markdown-preview.vim' to the vimrc or init.vim file and type :PlugInstall.

Or with MathJax support for typesetting math:

    Plug 'iamcco/mathjax-support-for-mkdp'
    Plug 'iamcco/markdown-preview.vim'

Usage
Command:

    MarkdownPreview
    " Open preview window in markdown buffer

    MarkdownPreviewStop
    " Close the preview window and server


If you use Vundle, add the following lines to your `~/.vimrc`:

    Plugin 'godlygeek/tabular'
    Plugin 'preservim/vim-markdown'

The tabular plugin must come before vim-markdown.

Then run inside Vim:

    :so ~/.vimrc
    :PluginInstall

The following commands are useful to open and close folds:

   1. zr: reduces fold level throughout the buffer
   2. zR: opens all folds
   3. zm: increases fold level throughout the buffer
   4. zM: folds everything all the way
   5. za: open a fold your cursor is on
   6. zA: open a fold your cursor is on recursively
   7. zc: close a fold your cursor is on
   8. zC: close a fold your cursor is on recursively

配置 `~/.vimrc` 增加 Markdown 插件选项：

    "不折叠显示，默认是折叠显示
    let g:vim_markdown_folding_disabled = 1
    let g:vim_markdown_override_foldtext = 0

    "可折叠的级数，对应md的标题级别
    let g:vim_markdown_folding_level = 6
    let g:vim_markdown_no_default_key_mappings = 1
    let g:vim_markdown_emphasis_multiline = 0
    set conceallevel=2
    let g:vim_markdown_frontmatter=1
    syntax on

可用命令：

- :Toc 
- :Toch 
- :Toct 
- :Tocv

### ===🗝 fugitive - Git Integration
- https://github.com/tpope/vim-fugitive
- http://vimcasts.org/episodes/fugitive-vim---a-complement-to-command-line-git/
- https://github.com/junegunn/vim-github-dashboard

Want to perform basic git commands without leaving the comfort of VIM? Then vim-fugitive is the way to go:

    Plugin 'tpope/vim-fugitive'

The fugitive plugin, by Tim Pope, is a git wrapper for Vim. It complements the command line interface to git, but doesn’t aim to replace it. In this episode, we’ll see how some of fugitive’s commands can streamline your workflow.

This is the first of a five part series on fugitive.

Using the :Git command, you can run any arbitrary git command from inside Vim. I prefer to switch to the shell for anything that generates a log of output, such as git log for example. But commands that generate little or no output are fair game for running from inside Vim (:Git checkout -b experimental for example).At Vim’s command line, the % symbol has a special meaning: it expands to the full path of the current file. You can use this to run any git command that expects a filepath as an argument, making the command act on the current file. But fugitive also provides a few convenience methods, some of which are summarized in this table:

|       git       | fugitive |                          action                          |
|-----------------|----------|----------------------------------------------------------|
| :Git add %      | :Gwrite  | Stage the current file to the index                      |
| :Git checkout % | :Gread   | Revert current file to last checked in version           |
| :Git rm %       | :Gremove | Delete the current file and the corresponding Vim buffer |
| :Git mv %       | :Gmove   | Rename the current file and the corresponding Vim buffer |

The :Gcommit command opens up a commit window in a split window. One advantage to using this, rather than running git commit in the shell, is that you can use Vim’s keyword autocompletion when composing your commit message.The :Gblame command opens a vertically split window containing annotations for each line of the file: the last commit reference, with author and timestamp. The split windows are bound, so that when you scroll one, the other window will follow.

Further Reading

    :help cmdline-special
    :help :_%
    ctlr-n/ctrl-p keyword autocompletion
    :help 'complete'
    :help :Git
    :help :Gwrite
    :help :Gread
    :help :Gremove
    :help :Gmove
    :help :Gcommit
    :help :Gblame


### ===🗝 Vimgo
- https://github.com/fatih/vim-go

This plugin adds Go language support for Vim, with the following main features:

   1. Compile your package with :GoBuild, install it with :GoInstall or test it with :GoTest. Run a single test with :GoTestFunc).
   2. Quickly execute your current file(s) with :GoRun.
   3. Improved syntax highlighting and folding.
   4. Debug programs with integrated delve support with :GoDebugStart.
   5. Completion and many other features support via gopls.
   6. formatting on save keeps the cursor position and undo history.
   7. Go to symbol/declaration with :GoDef.
   8. Look up documentation with :GoDoc or :GoDocBrowser.
   9. Easily import packages via :GoImport, remove them via :GoDrop.
   10. Precise type-safe renaming of identifiers with :GoRename.
   11. See which code is covered by tests with :GoCoverage.
   12. Add or remove tags on struct fields with :GoAddTags and :GoRemoveTags.
   13. Call staticcheck with :GoMetaLinter to invoke all possible linters (e.g. golint, vet, errcheck, deadcode, etc.) and put the result in the quickfix or location list.
   14. Lint your code with :GoLint, run your code through :GoVet to catch static errors, or make sure errors are checked with :GoErrCheck.
   15. Advanced source analysis tools utilizing guru, such as :GoImplements, :GoCallees, and :GoReferrers.
   16. ... and many more! Please see doc/vim-go.txt for more information.
   17. Integration with gopls.
   18. The gopls instance can be shared with other Vim plugins.
   19. Vim-go's use of gopls can be disabled and alternative tools can be used when desired.
   20. Integration with Tagbar via gotags.
   21. Integration with Ultisnips and other snippet engines.

Install

vim-go requires at least Vim 8.0.1453 or Neovim 0.4.0.

The latest stable release is the recommended version to use. If you choose to use the master branch instead, please do so with caution; it is a development branch.

vim-go follows the standard runtime path structure. Below are some helper lines for popular package managers:

```sh
# Vim 8 packages
git clone https://github.com/fatih/vim-go.git ~/.vim/pack/plugins/start/vim-go
# Neovim packages
git clone https://github.com/fatih/vim-go.git ~/.local/share/nvim/site/pack/plugins/start/vim-go
# Pathogen
git clone https://github.com/fatih/vim-go.git ~/.vim/bundle/vim-go
# vim-plug
Plug 'fatih/vim-go', { 'do': ':GoUpdateBinaries' }
# Vundle
Plugin 'fatih/vim-go'
```

You will also need to install all the necessary binaries. vim-go makes it easy to install all of them by providing a command, :GoInstallBinaries, which will go get all the required binaries.

Check out the Install section in the documentation for more detailed instructions (:help go-install).

Usage

The full documentation can be found at doc/vim-go.txt. You can display it from within Vim with :help vim-go.

Depending on your installation method, you may have to generate the plugin's help tags manually (e.g. :helptags ALL).

We also have a tutorial in the official vim-go wiki.


### ===🗝 Vim-javascript
- [vim-javascript](https://github.com/pangloss/vim-javascript)
- https://www.vim.org/scripts/script.php?script_id=4452

JavaScript bundle for vim, this bundle provides syntax highlighting and improved indentation.

Installation
Install with native package manager

    git clone https://github.com/pangloss/vim-javascript.git ~/.vim/pack/vim-javascript/start/vim-javascript

since Vim 8.

Install with pathogen

    git clone https://github.com/pangloss/vim-javascript.git ~/.vim/bundle/vim-javascript

alternatively, use a package manager like vim-plug

Configuration Variables
The following variables control certain syntax highlighting plugins. You can add them to your .vimrc to enable their features.

    let g:javascript_plugin_jsdoc = 1
Enables syntax highlighting for JSDocs.

Default Value: 0

    let g:javascript_plugin_ngdoc = 1
Enables some additional syntax highlighting for NGDocs. Requires JSDoc plugin to be enabled as well.

Default Value: 0

    let g:javascript_plugin_flow = 1
Enables syntax highlighting for Flow.

Default Value: 0

    augroup javascript_folding
        au!
        au FileType javascript setlocal foldmethod=syntax
    augroup END

Enables code folding for javascript based on our syntax file.

Please note this can have a dramatic effect on performance.


### ===🗝 Vim Project
- https://www.vim.org/scripts/download_script.php?src_id=6273
- https://www.vim.org/scripts/script.php?script_id=69
- [Vim Project](plugged/project-1.4.1/doc/project.txt)

工具管理插件，Vim-Plug 方式安装，下载解压到 `~/.vim/plugged`，此目录为管理器指定的插件存放目录：

    " Unmanaged plugin (manually installed and updated)
    Plug '~/.vim/plugged/project-1.4.1'

使用 :helptags 生成、安装插件文档 tags 信息，然后 :help project 阅读文档。

    :helptags ~/.vim/plugged/project-1.4.1/doc

查询插件命令细节信息：

    :verbose com Project
        Name              Args Address Complete    Definition
        Project           ?            file        call <SNR>17_Project('<args>')
            Last set from ~\.vim\plugged\project-1.4.1\plugin\project.vim line 1266

Project 使用时需要创建工程管理文件，具体命令参考 :help project-mappings：

1、 敲入 Vim 命令 :Project 运行工程插件，可以看到 project 的列表，如果为空就要手动初始化；
2、 输入 \C 映射命令，它会处理子目录，按以下提示输入工程信息：

Enter the Name of the Entry: ProjectName
Enter the Absolute Directory to Load:  /to/project/path
Enter the CD parameter: . 
Enter the File Filter: *.*

工程设置说明：

1. CD   ==> 项目根目录，在选中一个文件时 Vim 需要通过 cd 命令进入。
2. in   ==> 进入文件缓冲时执行指定的 Vim 脚本。
3. out  ==> 退出文件缓冲时执行指定的 Vim 脚本。
4. filter   ==> 过滤符，过滤剩下指定类型的文件。如果子项目中没有指定过滤符，将承继夫项目的过滤符。
5. flags    ==> 标志位，为某个折叠指定某些特性。

得到工程管理文件后，后续可以通过 Vim 命令行加载工程：

    vim -c 'Project /home/.vimprojects'


==============================================================================
MAPPINGS                            *project-mappings*

Map Action ~
\r  Refreshes the Project fold
\R  Executes \r recursively in the current fold and all folds below.
    This does not work for Projects using |netrw|.
\c  Creates a Project fold entry.  It asks for the description, the path
    to the files, the CD parameter, and the filename |glob()| pattern.
    From this information, it will create the Project Entry below the
    cursor.

    This does not work for Projects using |netrw|.

\C  Creates a Project fold entry like \c, but recursively includes all the
    subdirectories.

==============================================================================
COMMANDS                            *project-invoking*

You can use the plugin by placing it in your plugin directory (e.g.,
`~/.vim/plugin`). See |add-global-plugin|. When you start vim the next time, you
then enter the command >

    :Project

or >

    :Project {file}

If you do not specify the filename, $HOME/.vimprojects is used.

To have Vim come up with the Project Window enabled automatically (say, from a
GUI launcher), run Vim like this:  [g]vim +Project

Note that you can invoke :Project on only one file at a time.  If you wish to
change the Project File, do a :bwipe in the Project Buffer, then re-invoke the
Plugin as described above.

Several Projects can be kept and displayed in the same file, each in a fold
delimited by { and } (see |fold.txt|).  There can be any number of nested
folds to provide you with a Project hierarchy.  Any line without a { or a } in
the file is considered to be a filename.  Blank lines are ignored, and any
text after a # is ignored.

Because the plugin uses standard Vim folds, you can use any of the
|fold-commands|. You can double-click on the first line of a fold to open and
close it. You can select a file to open by putting the cursor on its name and
pressing <Return> or by double-clicking on it.  The plugin will create a new
window to the right or use the |CTRL-W_p| equivalent if it exists.


                                  *project-syntax*
Each Project Entry has this form:

    project_entry ::=
        <Description>={projpath} [{options}] {
        [ filename ]
        [ project_entry ]
        }

{options} is one or more of the following (on the same line):

        CD={path}
        in={filename}
        out={filename}
        filter="{pat}"
        flags={flag}

Note that a project_entry can reside within a project_entry. This allows you
to set up a hierarchy within your Project.



project.tar.gz : Organize/Navigate projects of files (like IDE/buffer explorer)

 script karma   Rating 3383/1032, Downloaded by 89806    Comments, bugs, improvements   Vim wiki
created by
Aric Blumer
 
script type
utility
 
description
You can use this plugin's basic functionality to set up a list of
frequently-accessed files for easy navigation. The list of files
will be displayed in a window on the left side of the Vim
window, and you can press <Return> or double-click on
filenames in the list to open the files. This is similar to how
some IDEs I've used work. I find this easier to use than
having to navigate a directory hierarchy with the file-explorer.
It also obviates the need for a buffer explorer because you
have your list of files on the left of the Vim Window.


But there's much, much more . . . .

You can also instruct the Plugin to change to a directory and
to run scripts when you select a file. These scripts can, for
example, modify the environment to include compilers in
$PATH. This makes it very easy to use quickfix with multiple
projects that use different environments. I give examples in
the documentation.

Other features include:
o Loading/Unloading all the files in a Project (\l, \L, \w, and \W)
o Grepping all the files in a Project (\g and \G)
o Running a user-specified script on a file (can be used
  to launch an external program on the file) (\1 through \9)
o Running a user-specified script on all the files in a Project
  (\f1-\f9 and \F1-\F9)
o Also works with the netrw plugin using directory
  names like ftp://remotehost
             (Good for webpage maintenance.)
o Support for custom mappings for version control
  integration (example of perforce in the documentation).
o I also give an example in the documentation on how to
  set up a custom launcher based on extension. The
  example launches *.jpg files in a viewer. I have also set
  up viewers for PDF (acroread) and HTML files (mozilla)
  for my own use.

This plugin is known to work on Linux, Solaris, and Windows.
I cannot test it on Windows, though, so please let me know if
you run into any problems. If you use it on other platforms,
let me know.

(Let me know if you need a .zip file)
 
install details
Decompress and untar in your ~/.vim directory (or
equivalent).  Inside Vim, enter this:
   :helptags ~/.vim/doc
(or equivalent directory)
(Enter ":help add-global-plugin" to determine the directory to
untar it into.)

Then enter
  :help project
for information


### ===🗝 Obsession
- Modern Vim Craft Your Development Environment with Vim 8 and Neovim (Drew Neil)

Saving Sessions Automatically

If you like the idea of having your session recorded automatically, you should
try installing the Obsession plugin 1 by Tim Pope. You can install it to your
bundle package like this:

```sh
 ➾ $ cd $VIMCONFIG/pack/bundle/start
 ➾ $ git clone https://github.com/tpope/vim-obsession.git
```

Let’s try this out. Start by opening two files, using horizontal splits this time
(just to mix things up):

 ➾ $ vim -o app.js test/app-test.js

Now, start tracking your session by running:

 ➾ :Obsession

Tracking session in Session.vim 

This sets up an autocommand so that the :mksession! command is triggered
whenever the VimLeavePre or BufEnter events fire (see Tip 26, Using Autocommands
to Respond to Events, on page 105). Test this out by opening the package.json file
in a new tab page, then quiting Vim:

 ➾ :tabedit package.json
 ➾ :qa

It doesn’t matter whether you exit Vim using :q , :qall , ZZ , or whatever, your
session should automatically be saved. Now if you restart Vim and load the
session, it should pick up from where you left off:

 ➾ $ vim -S

Not only does the new session restore buffers, windows, tabs, and so on, it
also restores the autocommands that were registered when you ran the
:Obsession command. So any changes made to this session will also be recorded
when you quit Vim.

You can pause session tracking with the :Obsession command. This works as
a toggle, so you can run the same command again to resume tracking later
on. If you want to stop tracking your session altogether, run:

 ➾ :Obsession!

This removes the Session.vim file and disables the autocommands.


### ===🗝 Vim-Cmake
- https://github.com/cdelledonne/vim-cmake

Cmake 是一个自动化构建系统，可以生成 Makefile/NMake/Ninja 等等自动化构建工具的脚本，也包含 Visual Studio 工程文件。

创建一个演示用的简单 CMakeLists.txt 脚本，然后执行 :CMakeGenerate 和 :CMakeBuild 执行构建：

```sh
cmake_minimum_required(VERSION 2.4.4)

project(hi C)

add_executable(hi ../hi.c)
```

Vim-CMake is a plugin for building CMake projects inside of Vim/Neovim, with a
nice visual feedback.

Features

* Visual experience, shows CMake output in a console-like window
* Slick management of build configurations
* Autocompletion for build targets and build configurations
* Quickfix list population after each build
* Airline/statusline status information, including current build configuration
* Plug-and-play, but configurable
* Written in Vimscript

Requirements

* Vim with +terminal, or Neovim >= 0.5
* Under Windows, only Neovim is supported at the moment

Installation

```sh
# Use a package manager like vim-plug:
Plug 'cdelledonne/vim-cmake'

# or Vim's native package manager:
mkdir -p ~/.vim/pack/plug/start
cd ~/.vim/pack/plug/start
git clone https://github.com/cdelledonne/vim-cmake.git
```

Run `:CMakeGenerate` from the top-level CMake source directory to generate a
build system for the project.  Then, run `:CMakeBuild` to build the project.
The built files will end up in the binary directory ([out-of-source
build][oos]).  To switch between build configurations, run `:CMakeSwitch
<config>`.

With Vim-CMake, you can easily manage build configurations (Debug, Release,
etc.), build specific targets and control build options, and fix errors using
Vim's quickfix feature.  For a detailed explanation of commands, mappings and
functionalities run `:help cmake`.  A quick overview follows.

Commands and `<Plug>` mappings

| Command                   | `<Plug>` mapping  | Description                           |
|:--------------------------|:------------------|:--------------------------------------|
| `:CMakeGenerate[!]`       | `(CMakeGenerate)` | Generate build system                 |
| `:CMakeClean`             | `(CMakeClean)`    | Remove build system and build files   |
| `:CMakeBuild[!] [target]` | `(CMakeBuild)`    | Build a project                       |
| `:CMakeInstall`           | `(CMakeInstall)`  | Install build output                  |
| `:CMakeSwitch <config>`   | `(CMakeSwitch)`   | Switch to another build configuration |
| `:CMakeOpen`              | `(CMakeOpen)`     | Open CMake console window             |
| `:CMakeClose`             | `(CMakeClose)`    | Close CMake console window            |
| `:CMakeStop`              | `(CMakeStop)`     | Stop running command                  |

Additional `<Plug>` mappings

| `<Plug>` mapping     | Behaves as                                            |
|:---------------------|:------------------------------------------------------|
| `(CMakeBuildTarget)` | `(CMakeBuild)`, but leaves cursor in the command line |

Global <Plug> mappings~

| <Plug>(CMakeGenerate)    | `:CMakeGenerate`.                                      |
| <Plug>(CMakeClean)       | `:CMakeClean`.                                         |
| <Plug>(CMakeBuild)       | `:CMakeBuild`.                                         |
| <Plug>(CMakeBuildTarget) | Inserts `:CMakeBuild` in the command line, and leaves  |
|                          | the cursor there.                                      |
| <Plug>(CMakeInstall)     | `:CMakeInstall`.                                       |
| <Plug>(CMakeSwitch)      | Inserts `:CMakeSwitch` in the command line, and leaves |
|                          | the cursor there.                                      |
| <Plug>(CMakeOpen)        | `:CMakeOpen`.                                          |
| <Plug>(CMakeClose)       | `:CMakeClose`.                                         |
| <Plug>(CMakeStop)        | `:CMakeStop`.                                          |

Example usage of the <Plug> mappings:
>
    nmap <leader>cg <Plug>(CMakeGenerate)
    nmap <leader>cb <Plug>(CMakeBuild)
    nmap <leader>ci <Plug>(CMakeInstall)
    nmap <leader>cs <Plug>(CMakeSwitch)
    nmap <leader>cq <Plug>(CMakeClose)

Key mappings in the CMake console window

| Key mapping | Description                |
|:------------|:---------------------------|
| `cg`        | Run `:CMakeGenerate`       |
| `cb`        | Run `:CMakeBuild`          |
| `ci`        | Run `:CMakeInstall`        |
| `cq`        | Close CMake console window |
| `<C-C>`     | Stop running command       |


Configuration

Vim-CMake has sensible defaults. Again, run `:help cmake` for an extensive
documentation of all the configuration options.  A list of default values
follows.

| Options                         | Default            |
|:--------------------------------|:-------------------|
| `g:cmake_command`               | `'cmake'`          |
| `g:cmake_default_config`        | `'Debug'`          |
| `g:cmake_build_dir_location`    | `'.'`              |
| `g:cmake_generate_options`      | `[]`               |
| `g:cmake_build_options`         | `[]`               |
| `g:cmake_native_build_options`  | `[]`               |
| `g:cmake_console_size`          | `15`               |
| `g:cmake_console_position`      | `'botright'`       |
| `g:cmake_console_echo_cmd`      | `1`                |
| `g:cmake_jump`                  | `0`                |
| `g:cmake_jump_on_completion`    | `0`                |
| `g:cmake_jump_on_error`         | `1`                |
| `g:cmake_link_compile_commands` | `0`                |
| `g:cmake_root_markers`          | `['.git', '.svn']` |
| `g:cmake_log_file`              | `''`               |


------------------------------------------------------------------------------
                            *cmake-generate*
Generating a project build system~
                            *:CMakeGenerate*
:CMakeGenerate[!] [config] [opts]
            Generate project build system for a CMake project.  If
            [!] is supplied, the existing build system is removed
            before generating a new one.  [config] specifies the
            build configuration to generate.  [opts] are passed
            directly to CMake.

By default, the build system is generated for the build configuration
specified by `g:cmake_default_config` (see |cmake-configuration|).  For
instance, if the default build configuration is "Debug", `cmake` will be
passed `-D CMAKE_BUILD_TYPE=Debug`, and the build system will be generated in
`Debug/`, relative to `g:cmake_build_dir_location` (see
|cmake-configuration|).  That will result in the following `cmake` command:
>
    cmake -D CMAKE_BUILD_TYPE=Debug [...] \
        -S <project_root> -B <build_dir_location>/Debug
<
To generate a build system for another configuration, e.g., "Release", run
>
    :CMakeGenerate Release [...]
<
which will result in the following `cmake` command:
>
    cmake -D CMAKE_BUILD_TYPE=Release [...] \
        -S <project_root> -B <build_dir_location>/Release
<
To generate a build system for a configuration, while passing a different
`CMAKE_BUILD_TYPE` to `cmake`, run
>
    :CMakeGenerate SomeConfigName -D CMAKE_BUILD_TYPE=Release [...]
<
which will result in the following `cmake` command:
>
    cmake -D CMAKE_BUILD_TYPE=Release [...] \
        -S <project_root> -B <build_dir_location>/SomeConfigName
<
Use |:CMakeSwitch| to switch between build configurations.

                            *:CMakeClean*
:CMakeClean     Remove project build system relative to the current
            build configuration.


------------------------------------------------------------------------------
Building and installing a project~
                            *:CMakeBuild*
:CMakeBuild[!] [opts] [target] [-- [nativeopts]]
            Build a project using the generated build system
            from the current build configuration, and populate a
            quickfix list (see |cmake-quickfix|).  If [!] is
            supplied, the existing build files are cleaned (using
            CMake's `--clean-first` option) before building the
            project.  [opts] are passed directly to CMake.
            [target] is the target to build instead of the default
            target.  [nativeopts] are passed directly to the
            native tool.

For instance, to build the target `mytarget` using a maximum of 4 processes
and passing the `VERBOSE=1` option to the native tool, run
>
    :CMakeBuild --parallel 4 mytarget -- VERBOSE=1
<
Vim-CMake provides autocompletion for build targets.  Just press <TAB> at any
point after `:CMakeBuild` in the command line to trigger autocompletion, e.g.
>
    :CMakeBuild --parallel 4 <TAB>
<
                            *:CMakeInstall*
:CMakeInstall       Install a project from the current build
            configuration.

------------------------------------------------------------------------------
                            *cmake-switch*
Switching between build configurations~
                            *:CMakeSwitch*
:CMakeSwitch {config}   Switch to build configuration {config}.  The build
            configuration must exist, that is, there has to be a
            project build system (for instance generated with
            |:CMakeGenerate|) in the directory {config}.

For instance, to switch to an existing configuration called "Release", run
>
    :CMakeSwitch Release
<
The default build configuration on start-up is specified by
`g:cmake_default_config` (see |cmake-configuration|).  Use |:CMakeGenerate| to
generate a build configuration.


==============================================================================
EVENTS                          *cmake-events*

Vim-CMake provides a set of custom events to trigger further actions.
Run `:help cmake` for an extensive documentation of all configuration options and examples

| Event                           | Description                               |
|:--------------------------------|:------------------------------------------|
| `User CMakeBuildSucceeded`      | Triggered after a successful `:CMakeBuild`|
| `User CMakeBuildFailed`         | Triggered after a failed `:CMakeBuild`    |

Example usage of `CMakeBuildFailed` to jump to the first error
>
    let g:cmake_jump_on_error = 0 " We do not want to focus the console
    augroup vim-cmake-group
    autocmd User CMakeBuildFailed :cfirst
    augroup END
<
Example usage of `CMakeBuildSucceeded` to close the Vim-CMake console
>
    augroup vim-cmake-group
    autocmd! User CMakeBuildSucceeded CMakeClose
    augroup END
<






### ===🗝 YouCompleteMe - Auto-Complete
- https://github.com/Valloric/YouCompleteMe

YouCOmpleteMe 插件比较大，如果遇到网络问题安装中断，可以考虑重新克隆子模块：

    git clone git@github.com:Valloric/YouCompleteMe.git
    
    git submodule update --init --recursive

The best plugin for Python auto-complete is YouCompleteMe. Again, use Vundle to install:

    Bundle 'Valloric/YouCompleteMe'

Under the hood, YouCompleteMe uses a few different auto-completers (including Jedi for Python), and it needs some C libraries to be installed for it to work correctly. The docs have very good installation instructions, so I won’t repeat them here, but be sure you follow them.

It works out of the box pretty well, but let’s add a few customizations:

    let g:ycm_autoclose_preview_window_after_completion=1
    map <leader>g  :YcmCompleter GoToDefinitionElseDeclaration<CR>

The first line ensures that the auto-complete window goes away when you’re done with it, and the second defines a shortcut for goto definition.

Note: My leader key is mapped to space, so space-g will goto definition of whatever I’m currently on. That’s helpful when I’m exploring new code.



### ===🗝 LSP - Language Server Protocol
1. https://github.com/tonini/alchemist-server
2. https://github.com/ternjs/tern
3. https://github.com/Microsoft/language-server-protocol/blob/gh-pages/specification.md
4. https://code.visualstudio.com/blogs/2016/06/27/common-language-protocol
5. https://langserver.org
6. https://github.com/autozimu/LanguageClient-neovim
7. https://github.com/autozimu/LanguageClient-neovim/blob/master/INSTALL.md
8. https://github.com/prabirshrestha/vim-lsp
9. https://github.com/natebosch/vim-lsc
10. https://github.com/neovim/neovim/pull/6856
- Modern Vim Craft Your Development Environment with Vim 8 and Neovim (Drew Neil)


The implementation of certain language-specific features requires deep
knowledge of the target language. I’m talking about features like jump to
definition, auto-completion, and showing in-place contextual information
such as function signatures or documentation. For want of a better term, I’m
going to group these together and refer to them as “Rich Language” features.
To implement a useful “jump to definition” feature, you need to be able to
identify the core constructs of that language, whether they’re called functions,
methods, classes, modules, or whatever. You also need to be able to locate
the file and line number where a construct is defined, which requires knowl-
edge of how the target language loads code from external files. Each language
has its own conventions, so the implementation of this feature would be dif-
ferent for each language.

Suppose you want to add these Rich Language features when working with
TypeScript in Vim. You could use Vim script to encode all of that TypeScript-
specific knowledge. That would give you the features you want in Vim, but
only in Vim. If you wanted to attract open-source contributions (bug-fixes,
new features, and so on), you’d have to appeal to programmers who know
both TypeScript and Vim script. That’s a relatively small pool of potential
contributors. Parcelling up TypeScript functionality into silos that only work
with a single text editor is a bit of a dead end.

Alternatively, you could create an editor-agnostic Language Server that
implements the TypeScript-specific features. This would run in a process of
its own, providing an application programming interface (API) that would
allow any text editor to interface with it. You could implement the Language
Server using any language of your choice, but TypeScript would be the obvious
choice. Anyone with TypeScript knowledge could potentially submit patches
for bug fixes and new features. Those improvements would then be available
to all users, regardless of their choice of text editor.

This approach is fairly common today. To name a couple of examples:

Alchemist-server provides Rich Language features for Elixir ¹, and Tern provides
Rich Language features for JavaScript. ² You can install a Vim plugin to hook
up with Tern, and you can install another Vim plugin to work with Alchemist.
Likewise, you could find similar plugins to make these engines work with
other text editors. It’s great that these tools can be used with different text
editors, but there’s still a sore point: Alchemist and Tern each have completely
different APIs.

Wouldn’t it be cool if there was a standardized protocol for these kinds of
editor-agnostic tools? The folks at Microsoft have designed the Language
Server Protocol (LSP) to meet this need. ³ Here’s the promise: If your text editor
speaks LSP, then you can add Rich Language features for any programming
language simply by installing the appropriate Language Server.
Microsoft first announced LSP in June 2016. ⁴ Since then, Language Servers
have emerged for dozens of different programming languages, and a handful
of text editors have gained LSP clients. You can find a comprehensive list
online. ⁵

I’m rooting for LSP! If the technology gains widespread adoption then it could
unlock Rich Language features for lots of different text editors. The job control
APIs in Vim 8 and Neovim make it possible for these editors to communicate
asynchronously with Language Servers, which is crucial for providing a good
user experience.

This topic naturally falls within the scope of Modern Vim. In truth, LSP was
largely responsible for motivating me to write this book. So why haven’t I
written about it in this edition? I just need more time. The technology is still
new, and it’s not yet clear to me what’s the best way to use LSP in Vim ⁸ and
Neovim.

If you can’t wait for the next edition and you want to try out LSP in Vim for
yourself, there are several resources to explore. LanguageClient-neovim, 6 by
Junfeng Li, is currently the most well-established LSP plugin. This is imple-
mented in Python as a remote plugin. The author’s original intention was to
support Neovim only, but people have found clever ways of making this work
in Vim 8, too. You’ll find advice on how to install this plugin on GitHub. ⁷
vim-lsp, ⁸ by Prabir Shrestha, is another promising LSP plugin. This one is
designed to work in Vim 8 and Neovim. There’s also vim-lsc 9 by Nate Bosch.
Finally, TJ DeVries is working on adding built-in LSP support to Neovim. You
can view the work-in-progress pull request on GitHub. ¹⁰

As you can see, there’s lots of excitement around LSP in the Vim and (espe-
cially) Neovim communities. Having so many options is overwhelming at the
moment, but with competition, some of these projects may thrive.



# 🚩 $HOME/.vimrc Minimal
- https://github.com/wsdjeg/vim-galore-zh_cn/blob/master/contents/minimal-vimrc.vim

```vim
"
" A (not so) minimal vimrc.
"

" You want Vim, not vi. When Vim finds a vimrc, 'nocompatible' is set anyway.
" We set it explicitely to make our position clear!
set nocompatible

filetype plugin indent on  " Load plugins according to detected filetype.
syntax on                  " Enable syntax highlighting.

set autoindent             " Indent according to previous line.
set expandtab              " Use spaces instead of tabs.
set softtabstop =4         " Tab key indents by 4 spaces.
set shiftwidth  =4         " >> indents by 4 spaces.
set shiftround             " >> indents to next multiple of 'shiftwidth'.

set backspace   =indent,eol,start  " Make backspace work as you would expect.
set hidden                 " Switch between buffers without having to save first.
set laststatus  =2         " Always show statusline.
set display     =lastline  " Show as much as possible of the last line.

set showmode               " Show current mode in command-line.
set showcmd                " Show already typed keys when more are expected.

set incsearch              " Highlight while searching with / or ?.
set hlsearch               " Keep matches highlighted.

set ttyfast                " Faster redrawing.
set lazyredraw             " Only redraw when necessary.

set splitbelow             " Open new windows below the current window.
set splitright             " Open new windows right of the current window.

set cursorline             " Find the current line quickly.
set wrapscan               " Searches wrap around end-of-file.
set report      =0         " Always report changed lines.
set synmaxcol   =200       " Only highlight the first 200 columns.

set list                   " Show non-printable characters.
if has('multi_byte') && &encoding ==# 'utf-8'
  let &listchars = 'tab:▸ ,extends:❯,precedes:❮,nbsp:±'
else
  let &listchars = 'tab:> ,extends:>,precedes:<,nbsp:.'
endif

" The fish shell is not very compatible to other shells and unexpectedly
" breaks things that use 'shell'.
if &shell =~# 'fish$'
  set shell=/bin/bash
endif

" Put all temporary files under the same directory.
" https://github.com/mhinz/vim-galore#handling-backup-swap-undo-and-viminfo-files
set backup
set backupdir   =$HOME/.vim/files/backup//
set backupext   =-vimbackup
set backupskip  =
set directory   =$HOME/.vim/files/swap//
set updatecount =100
set undofile
set undodir     =$HOME/.vim/files/undo//
set viminfo     ='100,n$HOME/.vim/files/info/viminfo
```

# 🚩 $HOME/.vimrc 用户配置脚本
- https://github.com/DamZiobro/vim-ide/blob/master/vimrc
- https://github.com/nshen/learn-neovim-lua
- https://github.com/lunarvim/LunarVim

Vim 默认配置入口脚本是 $HOME/.vimrc 或者 `~/.vimrc`，如果是 NeoVim 则不同，默认配置入口通过 $MYVIMRC 路径，或者 stdpath('config') 获取配置目录路径。

⛏ 快捷编辑配置，利用自动化命令让配置文件在保存修改时自动生效：

```sh
"" # Make .vimrc take effect after writed it
autocmd BufWritePost $MYVIMRC source $MYVIMRC
"" # Edit and source .vimrc file
nmap <silent> vim :e $MYVIMRC<CR>
nmap <silent> vimh :e ~/.vimrc<CR>
nmap <silent> vims :w<CR> :so $MYVIMRC<CR>
```

⛏ 设置 Normal/Visual 模式下使用 ; 符号作为命令行触发按键，q 激活 Visusl block 模式

```sh
"" # nmap <silent> <leader>/ :nohlsearch<CR>
"" # Map : to ; also in command mode.
nnoremap ; :
vmap ; :
cnoremap ; <Esc>
"" # Visual blcok mode by q
"nnoremap q <c-v>
```

⛏ 设置状态条、标签、标尺行号

```sh
"" # Always show status line
set laststatus=2
set statusline=%F%m%r%h%w[%L][%{&ff}]%y[%p%%][%04l,%04v]
"" # :set tabline=%!MyTabLine()
"" # Show tabline if ther more than one page
set showtabline=1
"" # Show line & column number of cursor
set ruler
"" # Show line number gatter
set number
set numberwith=3
"" # Show imcomplete command in the lower right status
set showcmd
```

⛏ 设置折行

```sh
set nowrap
set expandtab
```

Vim 窗口宽度会根据用户调试控制台窗口的大小而改变，也可以使用 `set colomns` 命令设置。

⛏ Tab 宽度与空格替换

```sh
"" # Tab stop size
"" # ret! 2 ==> Replace tab with 2 white-spaces
set tabstop=2
set softtabstop=2
set shiftwith=2
```

⛏ 主题配色方案

```sh
"" # 输入 :colorscheme 即可查看当前的配色方案，默认是 default。
"" # 配色方案脚本放在 /usr/share/vim/vim74/colors/
"dark style themes
"colorscheme slate
"light themes
colorscheme peachpuff
```

⛏ 设置 Vim 窗口行高与列宽，行号，以及 NVI 三模式下的鼠标支持：

```sh
set lines=48 columns=158
set number
set mouse=nvi
```

⛏ 设置编码方案

```sh
"" # Vim 编码设置
set encoding=utf-8
set termencoding=utf-8
set fileencoding=utf-8
set fileencodings=ucs-bom,utf-8,gbk,cp936,gb2312,big5,euc-jp,euc-kr,latin1

if has("win32")
    set fileencoding=chinese
else
    set fileencoding=utf-8
endif

"" # 防止特殊符号无法正常显示
set ambiwidth=double

"" # 删除所有 Vim 菜单
source $VIMRUNTIME/delmenu.vim
source $VIMRUNTIME/menu.vim

"" # 解决控制台乱码
language messages zh_CN.utf-8
```

⛏ 设置 NetRW 文件浏览器

```sh
"" # NetRW Explorer
"" # Open file in new page
let g:netrw_browse_split=3
"" # make vim's current directory track netrw's browsing directory.
let g:netrw_keepdir=0
"" # Shift-W to close window
"" # noremap  W :close <CR> 
"" # Ctrl-E to open file broswer
inoremap <C-e> <Esc>:exe <C-e>
noremap  <C-e> :exe ':Se '.GetCurrentBufFolder()<CR>
"noremap  <C-w> :close <CR>
function GetCurrentBufFolder()
  let p = substitute(bufname(), '[\\\/][^\\\/]\{-}$', '','g')
  let p = isdirectory(p) ? substitute(p,'\\','\\','g') : '.'
  echo p
  return p
endfunc
```

⛏ 设置作者声明信息块

```sh
map <F2> ms:call AddAuthor()<CR>'s

function AddAuthor()
    let n=1
    while n < 5
        let line = getline(n)
        if line =~'^\s*\*\s*\S*Last\s*modified\s*:\s*\S*.*'
            call UpdateTitle()
            return
        endif
        let n = n + 1
    endwhile
    call AddTitle()
endfunction

function UpdateTitle()
    normal m'
    execute '/* Last modified\s*:/s@:.*$@\=strftime(": %Y-%m-%d %H:%M")@'
    normal "
    normal mk
    execute '/* Filename\s*:/s@:.*$@\=": ".expand("%:t")@'
    execute "noh"
    normal 'k
    echohl WarningMsg | echo "Successful in updating the copy right." | echohl None
endfunction

function AddTitle()
    call append(0,"/**********************************************************")
    call append(1," * Author        : Jimbowhy")
    call append(2," * Email         : coolnuts@126.com")
    call append(3," * Last modified : ".strftime("%Y-%m-%d %H:%M"))
    call append(4," * Filename      : ".expand("%:t"))
    call append(5," * Description   : ")
    call append(6," * *******************************************************/")
    echohl WarningMsg | echo "Successful in adding the copyright." | echohl None
endfunction
```

⛏ 设置 Diff 格式

```sh
set diffexpr=MyDiff()
function MyDiff()
  let opt = '-a --binary '
  if &diffopt =~ 'icase' | let opt = opt . '-i ' | endif
  if &diffopt =~ 'iwhite' | let opt = opt . '-b ' | endif
  let arg1 = v:fname_in
  if arg1 =~ ' ' | let arg1 = '"' . arg1 . '"' | endif
  let arg2 = v:fname_new
  if arg2 =~ ' ' | let arg2 = '"' . arg2 . '"' | endif
  let arg3 = v:fname_out
  if arg3 =~ ' ' | let arg3 = '"' . arg3 . '"' | endif
  if $VIMRUNTIME =~ ' '
    if &sh =~ '\<cmd'
      if empty(&shellxquote)
        let l:shxq_sav = ''
        set shellxquote&
      endif
      let cmd = '"' . $VIMRUNTIME . '\diff"'
    else
      let cmd = substitute($VIMRUNTIME, ' ', '" ', '') . '\diff"'
    endif
  else
    let cmd = $VIMRUNTIME . '\diff'
  endif
  silent execute '!' . cmd . ' ' . opt . arg1 . ' ' . arg2 . ' > ' . arg3
  if exists('l:shxq_sav')
    let &shellxquote=l:shxq_sav
  endif
endfunction
```


⛏ 其它设置

```sh
source $VIMRUNTIME/vimrc_example.vim
source $VIMRUNTIME/mswin.vim
behave mswin
set nu!

syntax enable
syntax on

set guifont=Bitstream_Vera_Sans_Mono:h10:cANSI
"" # set guifont=Arial_monospaced_for_SAP:h9:cANSI
"" # set guifont=Currior\ new:h12:b:cDEFAULT
"" # set guifont=Consolas:h11:b:cDEFAULT

set tags=tags;
set autochdir
set autoindent
set smartindent
filetype indent on

autocmd vimenter * NERDTree
autocmd vimenter * NERDTree

let   Tlist_Inc_Winwidth=0          "配置打开函数列表的时候不改变窗口大小
let   Tlist_Use_Right_Window=1      "配置函数列表挂靠在屏幕右手边
let   Tlist_File_Fold_Auto_Close=1  "配置自动关闭非活动的文件
let   Tlist_Exit_OnlyWindow=1       "配置当前只有函数列表窗口的时候退出vim
map <F5> :TlistToggle<cr>           "快捷键F5切换函数列表
map <F4> :NERDTreeToggle<cr>        "快捷键F4切换NERD目录列表


```




