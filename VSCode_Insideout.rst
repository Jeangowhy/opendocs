
/TOC
====

*  ``/🟡Fuzzy Finder and Digital Library                             `` [S01]_
*  ``/🟡Visual Studio Code                                           `` [S02]_
*  ``/🟡Tasks and Debug                                              `` [S03]_
*  ``/🟡Script and Terminal                                          `` [S04]_
*  ``/🟡JavaFX GUI with Gradle and Kotlin LSP                        `` [S05]_
*  ``| | Maven Project                                                 `` [S06]_
*  ``| | Gradle Project                                                `` [S07]_
*  ``| | VS Code with Gradle and Kotlin                                `` [S08]_
*  ``| | Gradle Project Init                                           `` [S09]_
*  ``| | JavaFX GUI Framework                                          `` [S10]_
*  ``| | Java Module Project                                           `` [S11]_
*  ``/🟡Debugging and Debuginfo                                      `` [S12]_
*  ``/🟡VS Code Remote Development                                   `` [S13]_
*  ``/🟡LLVM Clang and Clangd (C/C++ LSP)                            `` [S14]_
*  ``/🟡VS Code Extensions                                           `` [S15]_
*  ``/🟡VS Code and Android                                          `` [S16]_
*  ``/🟡Jetpack Compose UI                                           `` [S17]_


.. _S01: #S01

/🟡Fuzzy Finder and Digital Library
===================================

   [!TIP]
   当前流行的操作系统都有文件浏览器，但是对于一个工作于电脑屏幕前的人来说，GUI 就是花哨的代名。
   事实上 GUI 并不能提升效率，反而在没有合理的设计的前提下，GUI 带来的是广泛低能效的灾难。
   人类的记天然具有模糊特征，记忆中的事件不是绝对精确的。混沌、模糊是记忆的基本状态，在使用计算机
   系统时，这些基本特性体现在多方面：比如找文件、找文件夹，或者翻查菜单找某种功能操作等等，都是
   因为 GUI 的设计不合理造成的困境。社区开发了一款模糊信息搜索工具（ `fuzzy finder`_ ），
   通过它可以将计算机系统中的文件、文件夹、文件数据按模糊的记忆进行过滤。安装它之后，并将其添加到
   环境变量的 PATH 中以方便直接执行，这样就可以使用 fzf 命令进行信息过滤。文件系统的过滤是
   最基本用法，比如在 Windows 系统上打开文件浏览器，并在地址栏输入 fzf 执行它，程序会弹出
   文件列表，按记忆输入模糊的内容片段，fzf 就会将最匹配的文件过滤出来，但是回车确认后并不能
   打开相应的文件。因为它默认只是打印用户选中的那一条数据。

   Windows 提供外壳扩展程序（Shell Extension）可以用来扩展文件浏览器的功能，比如 QTTabBar
   这款工具就可以提供 Tabs 页面标签式的文件夹打开方式，这种功能 Windows 11 才提供！！！！
   Windows 文件浏览器地址栏可以输入路径、或者运行可程序，也可以运行脚本，系统会根据注册表中
   记录的脚本文件类型来调用解释器，但也仅限如此操作。Windows 文件浏览器不能作为脚本执行器来
   执行脚本。但是可以使用脚本解释器程序的功能来间接执行现场编写的脚本，比如安装 MSYS2 提供的
   bash 脚本解释器后，就可以在 Windows 文件浏览器地址栏中输入以下命令：

   .. code-block:: bash

      bash -c "whoami; echo $PWD; sleep 3"

   这里的现场脚本就会打印 whoami 命令查询到的用户账户名称、当前工作目录，再暂停 3 秒后退出。
   Windows 文件浏览器的地址栏几乎就是唯一的可以让用户从键盘输入的 UI 控件，这样的设计不能
   说不十分糟糕！

   脚本解释器再配合 fzf 工具就可以实现浏览器从未想过要提供给用户的功能，比如 VS Code 插件
   安装在 $USERPROFILE/.vscode/extensions 目录中，想要多众多插件目录找一个是比较费事，
   偏偏 Windows 自动的搜索功能不是给人用的，本机 search 服务也一直处于禁用状态。Bash 提供
   非常便利的 command expansion 功能，简单说就是一个命令可以将另一命令的输出扩展为自己的
   输入数据。比如 ``start $(fzf)`` 或者 ``start `fzf``` 就可以利用 Windows 提供的 
   start 命令打开 fzf 过滤出来的文件。又如 ``start `ls | fzf``` 就可以用来打开当前位置
   下的子目录。配合其它程序，就可以实现不同的功能。比如查看 Microsoft C/C++ 插件的目录，
   就可以使用以下命令，并输入模糊的 cpp 这样的关键字就可以找到：

   .. code-block:: bash

      start `find $USERPROFILE/.vscode/extensions -maxdepth 1 -type d | fzf`

   Microsoft C/C++ 插件（ms-vscode.cpptools）块头大，大小取决于使用，基本安装 200MB+。
   它包含了多家软件厂商提供的工具，包括编译器革新框架领跑者 LLVM 提供的代码格式化与整理工具：

   .. code-block:: bash

      ../bin/cpptools-srv.exe
      ../bin/cpptools.exe
      ../debugAdapters/bin/createdump.exe
      ../debugAdapters/bin/OpenDebugAD7.exe
      ../debugAdapters/bin/WindowsDebugLauncher.exe
      ../debugAdapters/vsdbg/bin/Remote Debugger/x86/msvsmon.exe
      ../debugAdapters/vsdbg/bin/vsdbg.exe
      ../debugAdapters/vsdbg/bin/VsDebugConsole.exe
      ../LLVM/bin/clang-format.exe
      ../LLVM/bin/clang-tidy.exe

   要执行某个程序，借助 command expansion 以及 find 工具，按以下命令行操作，如果要给待
   执行的程序传递参数，就可以写在圆括号后面（--help）。Sublime Text 提供了一个 subl 命令
   行工具，它可以接收命令的 stdout 以及借助编辑器编辑它再输出给其它命令作为 stdin 使用。
   以下第二条命令，find 程序将找到的 exe 文件路径输出给 Sublime Text 进行编辑，当完成
   编辑并直接关闭文件，subl 命令就会将编辑后的内容返回给命令行。以上的插件程序列表就是通过
   这个 subl 命令行进行编辑的：

   .. code-block:: bash

      $(find .. -path '*/*.exe' | fzf) --help
      $(find .. -path '*/*.exe' | subl -) --help

   或者使用 VS Code 与 Sublime Text 打开工程目录：

   .. code-block:: bash

      code $(ls.exe -d ../projects | fzf)
      subl $(ls.exe -d ../projects | fzf)

   Fuzzy finder 本身提供非常丰富的可配置参数，但是掌握如何与 bash 及命令工具配合使用已经
   可以解决大多数文件系统相关的需求。继上一篇： `论 《Intel 80386 CPU 编程手册》与私有电子图书馆建造 <mcu/Intel_80386_manual.md>`__
   缺失了 Fuzzy Finder 工具的内容，现在补上这一个工具后，那么个人电子图书的基本构建就已经
   非常完善了：

   *  Find 命令提供文档目录数据；
   *  Fuzzy Finder 过滤目标文件（一级索引）；
   *  Markdown 或者 reStructuredText 文档提供内容目录结构（二级索引）；
   *  Vim、VS Cocde 或者 Sublime Text 作为浏览工具，通过正则搜索快速地跳转于目录于内容之间；

   以上这套工具基本都是开源的，除了 Sublime Text 是闭源商业软件。并且 Fuzzy Finder 还可以
   与 sed awk 等编辑工具配合用于文件目录条目查找、并且利用 Vim 打开并跳转到指定行号。实现这个
   便利的个人电子图书馆，只需要稍许的付出，制作文档的目录索引，同时大脑中建立关键字的模糊印象。
   缩进是文档中最易得，并且最容易使用脚本处理的文档章节段落分区组织形式，reStructuredText 文档
   大量使用缩进来表现文档的章节段落。

   .. code-block:: bash

      subl `find . -name '*.md' | fzf `

   这里使用了三个命令：

   find 查找命令，在当前目录（.） 查找指定 ``*.md`` 名称匹配规则的文件，这里需要引用包括
   文件名称规则，因为这里包含模式匹配，如果没有引号，* 这个符号就会被 bash 当作文件名进行扩展。

   获取到文件列表后，传递给 fzf 进行模糊查找、过滤，最后将结果通过 bash 的命令替代扩展返回给 subl
   命令。bash 命令替代有两种形式，反引号或 $() 包括要进行替代的命令。

   利用 nl fzf sed 等命令来定位 Markdown 标题行号（# 号标题），然后使用 vim 等编辑工具
   打开文档，同时定位、跳转到指定行号：

   .. code-block:: bash

      filter_title='/^ \+[0-9]\+\s/{s/^ *[0-9]\+\s#/\0/p}'
      filter_line='s/^ \+\([0-9]\+\).*/\1/p'
      file=`find . -name '*.md' | fzf`
      line=`nl -ba "$file" | sed -n "$filter_title" | fzf | sed -n "`` [S]_filter_line"`
      subl "$file:$line"
      vim "$file" +$line
      # nl a "$file"| xxd | head -n 10 | subl -

   GNU coreutils 工具包提供了一个 nl: Number lines 工具，可以用它来给文件内容加行号。注意，
   行号前导的对齐用的空格，而添加的行号后面跟着一个 TAB 符号。可以使用 xxd 显示它们编码值 0x09。
   使用 sed 进行匹配时，不能使用空格来匹配制表符号，而应该使用 ``\s`` 来匹配这类空白符号。

   注意，nl (Number lines) 命令和 ln（link symbol）完全是不同的命令。nl 命令编写行号有多种
   风格，-ba 表示所有行都加行号（all），即使是空行（blank）。

   对于文档编辑，可能经常需要对一些内容进行列表编号，VS Code 本身没有这样的功能，但是可以利用
   多点编辑功能以及 GNU Coreutils 工具集，或者 Bash 脚本功能，比如序号生成就可以使用花括号
   展开（3.5.1 Brace Expansion），还可以利用 Windows 平台下的 ``clip`` 命令将生成的编号
   复制到剪贴板中备用：

   .. code-block:: bash

      $ printf "%s\n" {01..03}
       01
       02
       03

      $ printf "%s\n" {01..09..3}
       01
       04
       07

   为了方便使用，使用函数将零散的脚本组织起来，像以下这样就可以直接调用这个脚本来快速打开文档，
   并且跳转到目录条目对应的内容中。另外，vim 本身就可以很方便地执行 shell 命令，这样就可以
   在 vim 中直接调用脚本中的函数并打开文档，比如 ``:!echo hello shell``。尽管，vim 在
   多个进程中打开同一个文件时会给出警告（编辑缓冲区冲突问题），但是对于浏览文档，可以选择只读
   模式（read-only）打开。Sublime Text 提供的 subl 命令也可以做类似的事，并且它有一点改进
   的功能是会自动处理检测到已经打开文件的窗口，如题再次打开同一个文件时就会复用这个窗口（进程）：

   .. code-block:: bash

      #!/usr/bin/env bash

      doc_view="vim"
      if ! [[ -z $DOC_VIEW ]]; then
          doc_view=$DOC_VIEW
      fi

      function opendocs()
      {
          doc=`find 'c:\opendocs\' | fzf`
          if [[ $? == 0 ]]; then
              doc_jump "$doc"
          fi
      }

      function doc_jump()
      {
          file=$1
          local fl='s/^ \+\([0-9]\+\).*/\1/p'
          local ft='/^ \+[0-9]\+\s\w/{p}'
          #  "Filter for Markdown Title"
          if [[ $file =~ ".md" ]]; then
              ft='/^ \+[0-9]\+\s#/{p}'
          fi

          local line=`nl -ba "$file" | sed -n "$ft" | fzf | sed -n "$fl"`

          if [[ -z "$line" ]]; then
              line="1"
          fi
          echo "$doc_view [$?] $file @$line"

          if [[ $? == 0 ]]; then
              if [[ "$doc_view" == "vim" ]]; then
                  "$doc_view" "$file" +$line
              elif [[ "$doc_view" == "subl" ]]; then
                  "$doc_view" "$file:$line"
              else
                  echo "Unknown doc viewer [$?]: $doc_view"
              fi
          fi
      }

      if [[ -z $1 ]]; then
          opendocs
      else
          doc_jump "$1"
      fi

   MSYS2 提供了 MinTTY 终端模拟器用于执行平台初始化，它们对应 msys2_shell.cmd 脚本的功能。
   这些入口程序就等价于 mintty + MSYS2 平台配置，运行它们就相当于运行 `mintty` (默认设置的终端)，
   并配置平台参数，包括可执行命令所在子目录。它们没有使用帮助，但是可以直接给传递要运行的程序以及参数，
   MinTTY 本身就是一个支持 shebang 的脚本执行器。

   .. code-block:: bash

      msys2 .\opendocs.sh
      msys2 bash -login -i .\opendocs.sh

      msys2  vim .\vim_flavor.md
      mintty vim .\vim_flavor.md

   这些 shell 环境本身就是 bash 运行环境，也可以另外安装 bash 解释器，但是另外安装的解释器可能
   出现无法使用 Unicode 符号的问题，比如使用 vim 无法查看 Unicode 表情符号。另外 msys2_shell
   脚本设置的初始环境也不支持 Unicode 表情符号，还会弹出终端窗口，可以使用以下参数来避免弹窗：

      msys2_shell.cmd -defterm -here -no-start -ucrt64

   MSYS2 自带的环境入口程序（MinTTY）确实可以支持 Unicode 符号，并且 MinTTY 终端模拟器提供
   更丰富的设置，包括终端窗口的透明。 `MinTTY <https://mintty.github.io/>`__ 开源终端模拟器
   广泛应用于 MSYS2、Cygwin，Git bash 以及 WSL 等系统环境中。支持图形显示以及 Sixel 图形库。

   MinTTY 以其轻量级的设计和高性能著称，使用 Windows API 实现原生的图形渲染。其特点是：

   *  现代界面：全新的窗口样式，支持透明度调整、多色彩方案，并能很好地适应高 DPI 显示器。
   *  快速响应：优化的 I/O 处理使其在处理大量数据流时表现优异，无卡顿感。
   *  Unicode 支持：能够完美呈现各种语言的字符，无论是在 ASCII 还是非 ASCII 环境下。
   *  低资源占用：与其他终端相比，MinTTY 对系统资源的需求更低，运行更加流畅。

   MinTTY 3.5.1 文档显示开始支持标签栏，这样方便使用多个终端窗口，使用 −−tabbar 启用终端标签。
   如果这样，MinTTY 将比 Windows Terminal 还好用，更加有吸引力。

   但是在当前的 MinTTY 3.6.4 (x86_64-pc-msys2) 版本上，运行会闪退。还有一个选择是 `ConEmu`，
   这个终端模拟器可以吸附系统进程到 Tab 标签页，但是性能和 Windows Terminal 同水平，欠佳！
   
   MSYS2 提供的 MinTTY 终端模拟器入口程序只用于执行 MSYS2 平台初始化，不会执行用户主目录下的
   默认 bash 配置脚本，只执行 `/etc/profile` 配置脚本。可以在此添加用户配置信息，比如 PATH 
   搜索路径，需要增加的路径变量添加到脚本中 PATH 路径列表中导出。

   Linux 系统 shell 环境配置脚本路径参考：

      =============== ==================== ======== ==============================
      Location        Profile Level        Priority Notes
      =============== ==================== ======== ==============================
      /etc/profile    System-wide profile  1        config with /etc/profile.d
      /etc/bashrc     Every-User profile   2        -
      ~/.bash_profile Current-User profile 3        only execute when user login
      ~/.bash_rc      Current-User profile 4        execute when shell start
      =============== ==================== ======== ==============================

   Bash 作为通用脚本解释器，它可以在 Linux/Windows 环境下很好地执行自动化任务，它有多种运行方式：

   * Invoked as an interactive login shell, or with --login
   * Invoked as an interactive non-login shell
   * Invoked non-interactively
   * Invoked with name sh

   所谓登录（--login）即让脚本解释器在启动时就加载解释器登录配置脚本（.bash_profile），此配置脚本
   可以在多个位置存放： `~/.bash_profile`, `~/.bash_login`, `~/.profile`。同时，在退出时
   还会执行 `~/.bash_logout` 配置脚本。如果不使用登录参数，则加载 Bash 解释器时不执行登录配置脚本，
   但是会加载默认运行配置 `~/.bashrc`，可以使用 --norc 参数禁用它，或使用 --rcfile 指定其它配置。

   所谓交互（interactive shell）即可以与用户进行输入/输出数据交互的脚本运行环境，这是默认执行状态，
   除非使用 -s 参数让 Bash 进入静默模式，此时用户不能参与脚本的交互，脚本解释器执行完指定脚本后退出。

   为了整合 MinTTY 支持 Unicode 的特性，以及 Vim 高速处理文件的优点，可以在 Windows 系统上使用
   脚本添加以下注册表选项，这样就可以直接在文件浏览器中使用右键菜单来执行 Vim 打开文件。同时还可以
   设置 MinTTY 环境下运行 Bash 脚本解释器，这样就可以支持 Unicode，很好地进行中文符号处理。甚至
   可以为电子图书馆制作一个入口脚本，但是这已经不是必要的操作，使用 Windows 系统的运行功能直接调用
   ``mintty`` 命令执行相应的脚本即可：

   .. code-block:: bash

      vim='C:\\msys64\\usr\\bin\\mintty.exe C:\\msys64\\usr\\bin\\vim.exe'
      # REG ADD     'HKCR\*\shell\Open with VIM...' -f
      REG ADD     'HKCR\*\shell\Open with VIM...\command' -f -ve -t REG_SZ -d "$vim '%1'"
      REG ADD     'HKCR\*\shell\Open with VIM...\command' -f -v "Icon" -t REG_SZ -d "$vim"

      bsh='C:\\msys64\\usr\\bin\\mintty.exe C:\\msys64\\usr\\bin\\bash.exe'
      cmd="$bsh -c \"echo bash with shebang...; sleep 0.1; '%1'\""
      cmdb="$bsh -c \"cd '%V'; bash -i <<< 'exec </dev/tty;'\""

      # REG DELETE  'HKCR\*\shell\Open with bash'
      # REG DELETE  'HKCR\Directory\shell\bash'
      # REG DELETE  'HKCR\Directory\Background\shell\bash'

      REG ADD     'HKCR\.sh' -f -ve -t REG_SZ -d ".sh_auto_file"
      REG ADD     'HKCR\.sh_auto_file\shell\open\command' -f -ve -t REG_SZ -d "$cmd"
      REG QUERY   'HKCR\.sh' -s
      REG QUERY   'HKCR\.sh_auto_file' -s

      # REG ADD     'HKCR\*\shell\Open with bash...' -f
      REG ADD     'HKCR\*\shell\Open with bash...\command' -f -ve -t REG_SZ -d "$cmd"
      REG ADD     'HKCR\*\shell\Open with bash...\command' -f -v "Icon" -t REG_SZ -d "$bsh"

      # REG ADD     'HKCR\Directory\shell\bash' -f
      REG ADD     'HKCR\Directory\shell\bash' -f -ve -t REG_SZ -d "⚡ Open with bash..."
      REG ADD     'HKCR\Directory\shell\bash' -f -v "Icon" -t REG_SZ -d "$bsh"
      REG ADD     'HKCR\Directory\shell\bash\command' -f -ve -t REG_SZ -d "$cmdb"

      # REG ADD     'HKCR\Directory\Background\shell\bash' -f
      REG ADD     'HKCR\Directory\Background\shell\bash' -f -ve -t REG_SZ -d "⚡ Open with bash..."
      REG ADD     'HKCR\Directory\Background\shell\bash' -f -v "Icon" -t REG_SZ -d "$bsh"
      REG ADD     'HKCR\Directory\Background\shell\bash\command' -f -ve -t REG_SZ -d "$bsh"


.. _fuzzy finder: https://github.com/junegunn/fzf


.. _S02: #S02

/🟡Visual Studio Code
======================

   FOA：我认为有两种程序必需在学习计算之前应该掌握的，第一类是 Vim 或者 Emacs，它们提供的价值是
   开放思维。第二类则是 Sublime Text 和 VS Code 这样作品，它们在开发的基础上提供更便利的易用性，
   特别是后者从开发语言到本身的实现都是开源的作品。

   前几天重看了一遍《功夫》，没想到这片已经是二十年前的作品了！最精彩的部分我认为是天残地缺与三大高手
   对战的桥段，这三大高手在前面一直在铺垫段位关系，并且这种铺垫在整片持续进行，以突出人物的功夫境界。
   段落高潮在于第三个，通过中国古典音乐将中国传统舞台剧与刀枪棍棒完美融合在一起，全是暴力美感与艺术。
   五郎八卦棍阿鬼死前说了一句：“能力越大，责任就越大，你避不了。What are you parepared to do?”
   我想到要给这篇 VSCode Insideout 起个中文名《八戒，听说你想学 VSCode？让为师教你啊！》

   VS Code Team 由著名工程师 Erich Gamma 领导，Erich 是《设计模式》作者之一，Eclipse 之父，
   拥有多年的 IDE 开发经验。VS Code 基于 Web 实现的开源编辑器，技术栈关系如下：

   *  VS Code = Electron 桌面应用 + TypeScript 脚本语言 + Monaco 开源编辑器。
   *  Electron = Google Chromium 开源浏览器 + Node.js 脚本运行时。
   *  Node.js = Google V8 JavaScript 引擎 + Runtime API。

   Electron 原名 Atom-Shell，是 Github 为 Atom 编辑器编写的一个开源框架。它将 Chromium 
   和 Node.js 完美融合，使用 Web 技术来开发桌面应用，用 Node.js API 来访问文件系统。

   TypeScript 是 JavaScript 脚本的超集。目前 VS Code 的核心有 1100 多个 TS 文件，
   TypeScript 的语言强大的类型系统优势为多次重构提供了保障，极大提升项目的可维护性。

   - `Visual Studio Code <https://code.visualstudio.com/docs>`__
   - `Monaco - The Editor of the Web <https://github.com/Microsoft/monaco-editor>`__
   - `Monaco Editor Samples <https://github.com/microsoft/monaco-editor-samples>`__
   - `Monaco Editor <https://microsoft.github.io/monaco-editor/>`__

   摩纳哥 (Monaco) 是人类史上人均 GDP 最高的国家，2022 年数据 24.09 万美元是中国的 18 倍多！
   是新加坡的 3 倍，是香港的 5 倍。Monaco 特点：国小、税低、富人聚集。VS Code 编辑器代号剑指
   Monaco 似乎有点美国味。

   VS Code 使用纯 DOM 操作，为了保证 UI 响应速度，没有采用现有的 UI 库，大部分 UI 采用
   绝对尺寸，简单粗暴的避免大面积 UI 的联动刷新。

   .. figure:: https://code.visualstudio.com/assets/api/ux-guidelines/examples/architecture-sections.png
      :target: https://code.visualstudio.com/api/ux-guidelines/overview
      :alt: UX Guidelines - Overview of Visual Studio Code containers elements

   得益于现代 UI 构架，可以在不使用 Android Studio 可视化布局编辑器功能前提下开发移动应用。
   更轻量级的 VS Code 来开发 Android 应用也成为一个可选项。确保已经安装 Android SDK，并正确
   配置环境变量（以正确调用 SDK 工具命令）。编程永远都是用合适的工具做合适的事情，Android Studio
   开发 APP 是最佳选择。但是折腾不止是生命的意义，无它，仅凭开源与易用两条，就足够理由去折腾，
   它让你在必需作出选择时拥有更更多的选择！选择这种不太“方便”的方式就注定需要了解更多命令行工具
   的使用，包括各种编译器命令的调用，通过命令完成代码编译与运行。也需要掌握一种自动化工程构建工具，
   Maven 或 Gradle（推荐）。有了这些基础，就可以直接使用编译器编写代码，让它跑起来，然后再以
   工程形式组织起来，并按照 Android 应用的构建流程编译生成 APK 程序包。并透过 SDK 提供的命令
   安装到手册或虚拟机进行调试。Gradle 官方文档有详细的资料帮助建立基于 Kotlin 或 Java 工程。

   VS Code 基于 Electron 开发的桌面应用，基于 Web 技术，软件界面设计非常具有弹性。比如，UI
   组件与编辑器的字体设置，可以通过 ``Ctrl Shift -`` 和 ``Ctrl Shift +`` 进行整体缩放调整，
   也可以改变编辑器的字体为一个相对大一点的字号，这样就可以保持整体缩放的前提下，减小 UI 控制占
   据屏幕空间的比例，提高笔记本等便携设备的小屏幕的利用效率。

   现代编辑器有一种向命令控制台靠近的趋势，无论是 Vim、Emacs、Sublime Text，还是 VS Code，
   Intellij IDEA，都提供了一个类似视图叫做命令面板（Command Palette），通过命令面板，用户
   可以直接输入要执行的命令，或者了角编辑器提供了命令。传统编辑器，比如 Ooooooffice 套件，包括
   Word 文档，用户要学习一项功能，真的需要花费点心思去找各个菜单，各个面板，最后可能还找不到！
   新式的基于命令控制台的编辑器拥有明显的优势，用户只要对一个功能形成模糊记忆，就可以通过命令
   控制台的模糊匹配将潜在的功能过滤出来，而不用像传统操作那样一个一个界面去翻，这简直是翻垃圾桶！

   VS Code 配置默认快捷键 F1 或 Ctrl+Shift+P 来执行 ``Show All Commands`` 命令以
   打开命令面板。所以，当用户只记得其中任意一点，就很容易再次找到对应的功能，退后一步，程序的
   菜单栏列表还躺原来的地方。这种软件设计模式下，用户根本不需要花时间专门记忆快捷键，而在使用
   过程中完成对功能快速访问的路径记忆。这一点非常符合人类大脑形成深度记忆的条件：知识点间形成
   丰富的网络联系。

   VS Code 版本系统有两种版本（Stable 和 Insiders）、两种形式（Web 和本地运行）：

   - `Code Stable Edition`_，稳定版（蓝版），提供的功能经过深思熟虑、开发周期较长、较稳定的发布版本。
   - `Code Insiders Edition`_，探索者版（绿版），每日构建，提供最新功能和改进。
   
   两种版本有各自独立专用的插件安装目录和缓存目录：

   ==========  =======================  ================================
               Stable Edition           Insiders Edition
   ==========  =======================  ================================
   Plugin Dir  "%USERPROFILE%\.vscode"  "%USERPROFILE%\.vscode-insiders"
   Cache Dir   "%APPDATA%\Code"         "%APPDATA%\Code - Insiders"
   ==========  =======================  ================================

   以上是本地运行的 VS Code，还有第二种运行形式： `Code Web`_，网页版或者称云端运行，它是部署
   在云服务器上的稳定版本，以 Web 在线运行形式呈现，包括 vscode.dev 和 github.dev 等等，
   使用它们可以浏览、编辑远程项目（Open Remote Repository），包括浏览 github 上的项目。

   因为浏览器是有安全限制的，Web 应用在未授权的前提下禁止访问本地文件。那么 VS Code Web 版是
   如何做好开本地文件夹的？这要归于 HTML5 新增的 `File System API`_。尽管 VS Code Web
   可以打开本地项目，但是受限于浏览器的安全环境和脚本运行时能力，许多功能也受限不能使用，部分插件
   也不支持，shell 脚本不能在线执行。因为有文件系统 API 的支持，VS Code Web 不仅可以打开本地
   项目，还可以下载 github 项目的某些文件或文件夹，这一点比起只能克隆分支的 git 命令要方便。

      =============================  =========================================
      Interfaces                      Methods
      =============================  =========================================
      FileSystemHandle                Window.showOpenFilePicker()
      FileSystemFileHandle            Window.showSaveFilePicker()
      FileSystemDirectoryHandle       Window.showDirectoryPicker()
      FileSystemSyncAccessHandle      DataTransferItem.getAsFileSystemHandle()
      FileSystemWritableFileStream    StorageManager.getDirectory()
      =============================  =========================================

   Code Web 存在的理由当然不止于此，它才是未来的开发环境的未来：远程在线开发。当前可以安装使用
   `Github Codespaces`_，基于云即时开发环境、容器虚拟技术提供用于开发的通用语言、工具和实用程序。
   Code Web 远程开发可以免去安装 IDE，直接登录 Web 连接开发环境。代码空间（Codespace）生命周期
   从创建代码空间时开始，到删除代码空间时结束。 中间可以断开连接并重新连接到活动代码空间，而不会
   影响其正在运行的进程。 可以停止并重新启动代码空间，而不会丢失对项目所做的更改。这种云开发将提升
   开源项目的代码贡献量，并提升项目维护质量。Codespaces 提供了一个集成在 GitHub 中，功能完整的
   云端开发环境。



.. _Code Web: https://vscode.dev/
.. _Code Stable Edition: https://code.visualstudio.com/download
.. _Code Insiders Edition: https://code.visualstudio.com/insiders
.. _File System API: https://developer.mozilla.org/en-US/docs/Web/API/File_System_API
.. _GitHub Codespaces: https://code.visualstudio.com/docs/remote/codespaces

.. container:: section

   VS Code 有许多非常有创意的扩展：

   -  ``Live Share`` 实现运程协作编程而无需同步工程、环境配置。
      `Introducing Visual Studio Live Share`_
   -  `Port Forwarding`_ 通过内置 `Dev Tunnels`_ 实现本地端口转发、内网穿透，向互联网
      暴露本地 Web 服务。可以使用 ``devtunnel echo`` 命令启动一个用于测试的回响服务器。
      其它免费的内网穿透工具：CloudFlare Tunnel。
   -  ``MetaJump`` 文件内快速跳转，``Alt+/`` 激活，输入目标位置可能出现的一个关键字符，
      以生成覆盖文件的跳转点，再按下对应的按键跳转，快速实现光标移动。
      插件作者似乎逆向优化，插件本身约 100KB，但是演示图片 16MB。
      VIM 可以使用 easymotion 插件。Sublime Text 可用 Find -> Incremental Find 功能。
   -  ``Project Manager`` 项目管理，适用于经常切换项目的场景。
      当然可以使用 code 命令，或者 File: Open Recent，Recent Directory 打开最近的目录。
   -  推荐 `draw.io`_ 绘图工具，Draw.io VS Code Integration，提供了丰富基础图形，
      制作思维导图也很方便，插件提供了箭头连接跟随功能，移动图形也会同时更新连接的箭头线条。
      插件基于 `mxGraph`_ 提供交互图形制作的能力，并且使用体验比 Inkscape 更佳。
      打开 \*.drawio, \*.drawio.svg, \*.drawio.png 文件进入图形界面。
   -  ``Latex Sympy Calculator`` 计算文档中的 LaTeX 数学公式，并生成 = 号右侧部分。
   -  ``Emmet`` 这是一个程序化结构语言（XML/HTML）代码生成工具，几乎所有流行编辑器中都有它。
   -  ``Markdown Preview`` 为文本文档（markdown）提供实时预览。
      ``reStructuredText`` 文件格式还没有好用的插件，但是安装 rst 语法支持就足够用了，
      VS Code 会在编辑器顶部以面包屑形式展示层级化、可交互的目录结构。

   Sublime Text 有一个非常实用的命令，Split selection into lines 可以将选区拆分成行选区。
   VS Code 也有类似功能，命令名称叫 Add Cursors to Line Ends。这两个支持多选区的工具都有
   正则选区功能（``Alt+Enter``），使用正则表达式就可以选中匹配的目标字符串，然后进行批量处理。

.. _draw.io: https://app.diagrams.net/
.. _mxGraph: https://jgraph.github.io/mxgraph/
.. _RegularSelection: https://github.com/jimboyeah/run-snippet
.. _Dev Tunnels: https://learn.microsoft.com/en-us/azure/developer/dev-tunnels/
.. _Port Forwarding: https://code.visualstudio.com/docs/editor/port-forwarding
.. _Introducing Visual Studio Live Share: https://code.visualstudio.com/blogs/2017/11/15/live-share

.. container:: section

   随着 VS Code 版本的快速迭代，目前 VS Code 1.89.1 易用程序非常高，Sublime Text 优势功能
   （Goto Anything）已经慢慢被化解。VS Code 现在也有完善的跳转能力，从文件跳转到代码符号跳转，
   以下其它功能的跳转，几乎应有尽有。基于 Web 设计的 UI 在优化过，也没有性能问题，就是内存占用大。
   鉴于 VS Code 实在是内存消耗大户，建议禁用所有插件，启用插件只基于 Workspace 启用，也就是
   使用工程使用什么插件只在工程内启用。

   另外 Terminal 视图经过优化，尽管基于 Web 实现的界面，但响应速度极快，优化后 VS Code 1.17
   使用 Canvas 进行渲染。旧版本 DOM 渲染潜在问题，和新版本分层概念下的 Canvas 渲染说明如下：

   DOM Rendering

   -  **Selection**
   -  **Misaligned characters**
   -  **Excessive garbage collection**
   -  **Performance**

   Canvas Render Layers

   1. **Text**: Background colors and foreground text, this layer is opaque.
   2. **Selection**: Selection using the mouse.
   3. **Link**: The underline when hovering over links.
   4. **Cursor**: The terminal's cursor.

   参考官方 blogs 文章 `Integrated Terminal Performance Improvements`_

   视图的切换也非常方便，比如 SideBar 与编辑区的切换操作：

   - ``Ctrl+0`` View: Focus into Primary Side Bar
   - ``Ctrl+1`` View: Focus First Editor Group 
   - ``Ctrl+K, Ctrl+ArrowUp`` View: Focus Editor Group Above 
   - ``Ctrl+K, Ctrl+ArrowDown`` View: Focus Editor Group Below 
   - ``Ctrl+K, Ctrl+ArrowUp`` View: Split Editor (Sublime Text Keymap)
   - ``Ctrl+K, Ctrl+ArrowDown`` View: Close Editor (Sublime Text Keymap)
   - ``Ctrl+\`` View: Split Editor
   - ``Ctrl+F11`` View: Toggle Maximized Panel
   - ``Alt+1`` workbench.action.openEditorAtIndex1, 2, 3, ...
   - ``Alt+F11`` Terminal View: Toggle Maximized Panel
   - ``Ctrl+K, Z`` Zen Mode 修禅模式，最大化简化 UI 元素降低干扰因素

   VS Code 官方也提供了使用技巧参考文档： `Visual Studio Code Tips and Tricks`_

.. _Integrated Terminal Performance Improvements: https://code.visualstudio.com/blogs/2017/10/03/terminal-renderer
.. _Visual Studio Code Tips and Tricks: https://code.visualstudio.com/docs/getstarted/tips-and-tricks
.. _VS Code Speech: https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-speech

.. container:: section

   官方为了挖其它编辑器用户，可谓花尽心思，连对方的快捷键方案都通过插件提供了。只要安装了
   Sublime Text Keymap and Settings Importer，就可以按原有的操作习惯使用 VS Code。
   就连 Git diff 文件差异比较工具也集成了，可以使用命令面板 ``FIle: Compare`` 或者使用
   VS Code 文件浏览器的右键菜单，先选择两个文件再使用 ``Compare Selected``。或者直接在
   文件上右击，选择 ``Select for Compare`` 将其标记为要比较的文件，然后在另一个文件上点击
   ``Compare with Selected`` 进行比较。差异视图（Diff View）中的左侧显示先选择的文件，
   右侧显示另一个文件的内容，增、删的内容差异分别使用 + 和 - 号标记在行首。可以使用 Diff View
   右个角的提供的工具（Swap Left and Right Side）切换文件左右两边的位置。对于大文件，还可以
   点击折纸图标（Toggle Collapse Unchanged Regions）将无改动的内容区域折叠起来，方便查看
   差异区域。使用上、下箭头可以快速在各个差异位置跳转。

   VS Code 与 Github 版本托管或者 git 版管理工具集成，提供更容易的访问的版本管理图形化操作。
   `VS Code Speech`_ 插件提供语音输入功能，可以和 GitHub Copilot Chat 进行 AI 交流操作。

   基于 Intellij IDE 定制的 Android Studio 可以设置版权模板，方便在大工程中添加版权信息，
   VS Code 也可以使用 Configure User Snippets 定义版本代码片段来快捷插入版本信息。创建
   一个全局代码片段（global snippets file...），然后 VS Code 给出模板文件方便修改：

   *  使用 $1, $2 ... 等等作为制表跳转位置占位符号（tab stops）并且可以设置默认值，如：${1:label}；
   *  使用 $1, $2 ... 等等也可以用于复制占位符号所设置默认值的内容到指定位置；
   *  使用 $0 作为最终光标位置，也就是按 Tab 键轮番跳转占位符号之后最终的光标位置；
   *  "scope" 设置 IntelliSense 启用此代码片段的语言标识符，例如 "javascript,typescript,cpp,c"；
   *  "prefix" 设置触发代码片段的关键字，在代码文件中输入这个字符串就可以触发自动完成以插入版权信息。

   .. code-block:: json

      {
         "Insert copyright": {
            "scope": "javascript,typescript,cpp,c",
            "prefix": "copyright",
            "body": [
               "/**",
               " * @file ${1:g000}",
               " * @author Jenago (jimbowhy@foxmail.com)",
               " * @brief  ${2:Kernel Programming Tutorials - Programming C and C++}",
               " * @version ${3:0.1}",
               " * @date Sat May 25 08:20:55 CST 2024",
               " * @ref https://en.cppreference.com/w/c/language/basic_concepts",
               " * @ref https://en.cppreference.com/w/cpp/language/basic_concepts",
               " * ",
               " * @copyright Copyright (c) 2024",
               " * ",
               " */",
               "$3"
            ],
            "description": "Insert basic copyright information"
         }
      }

   VS Code 提供了 Screen Reader 优化模式，减少界面干扰，这种模式下，如果代码有问题，就会使用
   声音提示（audio cue signals），默认是拨竹片音效，可以在 Accessibility 配置面板修改配置。
   VS Code 在界面便易访问设计方面花了大功夫，其中主题设计上就有所体现，从多彩到单色、减色方案，
   以及高对比度方案，多方面照顾了色弱、视弱用户。

   .. figure:: https://code.visualstudio.com/assets/docs/editor/accessibility/accessibility-color-wheels.png
      :target: https://code.visualstudio.com/docs/editor/accessibility

      Accessibility

   显然，如果有一天，我的视力系统比我还退休得快，那么 VS Code 就是我家了。2020 年国际防盲机构
   （IAPB Vision Atlas）数据显示，全球有 11 亿人患有视力损害，请关爱视力：

      - 4300 万人口 是盲人（粗略的流行率为 0.5%）。
      - 2.95 亿人 有中度至重度视力障碍（粗略的流行率为 3.7%）。
      - 2.58 亿人 有轻度视力障碍（粗略的流行率为 3.3%）。
      - 5.1 亿人 有近视问题（粗略的流行率为 6.5%）。

   制作键陷阱（Tab trapping）也是一个非常方便的功能，默认情况下，Tab 键会在编辑器中输入相应的
   制表符号，也可以在终端（Terminal）中触发命令自动完成输入功能。但是有时候需要切换到其它 UI 组件
   上操作，这就需要启用 Tab 陷阱，Toggle Tab Key Moves Focus，让制表键用于切换 UI 界面焦点，
   而不是向特定界面输入字符。可以设置 editor.tabFocusMode 来启用 Tab 用于切换 UI 聚集。除了
   使用 Tab 聊聊功能，还可以使用 Focus Next Part (F6) 来切换 UI，如果焦点在状态栏，就可以
   使用箭头按键来移动焦点以操作状态栏中的各个功能区。切换焦点的过程中，VS Code 做了很好的优化，
   会快速显示 Tooltips 信息提示用户当前焦点所在位置。

   VS Code 有个问题，渲染大文档时，比如 10MB 尺寸的 Markdown，它渲染流程会从头处理到用户浏览
   的位置，所以当界面宽度调试时，比如侧栏面板切换显示时、窗口伸缩时，就会导致卡死，因为 VS Code
   在做“无用”功。反观 Sublime Text 或者 Vim 就不会这样低能，只渲染视图缓存区间直接避免此类问题。
   `大尺寸 Markdown 文档存在无效渲染 <https://github.com/microsoft/vscode/issues/213070>`__

   VS Code 1.84 更新全面支持浮动面板，可以手动任意面板到任意位置。比如将文件浏览器窗口拖动到
   插件面板也可以，但是这会使用文件浏览器的快捷键失效。可以使用 ``View: Reset View Locations``
   恢复默认布局（Restore Layout）。常用面板浮动命令可以搜索 ``View: Move``。

   果然，开源是未来！开源有未来！开源拥抱未来！

.. _S03: #S03

/🟡Tasks and Debug
==================

   VS Code 作为开源编辑器软件中拥有最佳调试体验的一员，它内置了 Node.js 运行时，提供调试
   JavaScript 或者 TypeScript 的能力，以及其它转译成它们的语言。同时也可以通过安装相应的
   调试器实现 PHP, Ruby, Go, C#, Python, C++, PowerShell 等流行语言的程序调试工作。

   VS Code 不是 IDE，却能做 IDE 的工作，要用好 VS Code，就必需掌握程序开发中使用的两套配置，
   这些功能对应 .vscode 缓存文件夹中保存的两个配置文件 ``tasks.json`` 和 ``launch.json``，
   它们分别对应 Run 菜单和 Terminal 菜单的功能，千万不要将它们搞混，它们分别是：

   - 任务系统， ``tasks.json``，编写用于构建程序脚本任务，参考 `Integrate with External Tools via Tasks`_；
   - 调试系统， ``launch.json``，用于调试、运行项目编译好的程序，包括脚本程序，参考 `VS Code Debugers Launch`_；

   VS Code 它们涉及到的功能分开菜单呈现，不仅是因为它们有不同的目标取向，更多的是需要 VS Code
   提供不同的逻辑功能支持。即使是运行同样的命令，通过任务系统运行、与通过调试系统运行，VS Code 会
   有完全不同的响应。

   配置文件中不仅可以使用 VS Code 预定义变量，还可以使用命令，如果存在 VS Code 预定义命令，或者
   插件实现了相应的命令。语法上也类似，比如，``${workspaceFolder}"`` 表示工作空间所在目录路径，
   而命令调用侧是 ``${command:AskForProgramName}"``，这里假设配置属性 ``type`` 指定插件
   或 VS Code 实现了这样的命令。还可以引用系统环境变量，并且 VS Code 提供了配置面板来添加
   自定义的环境变量，配置面板定位符： ``terminal.integrated.env``。

   以下是配置文件中支持的的占位符号格式：

   ===================================== =======================================
    Token                                 Description                          
   ===================================== =======================================
   ``${workspaceFolder}``                The selected workspace folder path.
   ``${config:some.setting.identifier}`` The value of any configuration setting.
   ``${env:Name}``                       The value of an environment variable.
   ``${command:commandID}``              The string return value of a command.
   ``${input:variableID}``               User input variable.
   ===================================== =======================================

   VS Code 支持三种形式的用户输入变量，tasks.json 或者 launch.json 配置文件 "inputs" 字段
   用于设置变量类型参数。但是用户变量每次执行任务时都需要重新输入，没有记忆功能，两个配置文件之间
   也不能共享同一个用户输入变量：

   1. **promptString**: Shows an input box to get a string from the user.

      - **description**: Shown in the quick input, provides context for the input.
      - **default**: Default value that will be used if the user doesn't enter something else.
      - **password**: Set to true to input with a password prompt that will not show the typed value.

   2. **pickString**: Shows a Quick Pick dropdown to let the user select from several options.

      - **description**: Shown in the quick pick, provides context for the input.
      - **options**:  An array of options for the user to pick from.
      - **default**: Default value that will be used if the user doesn't enter something else. It must be one of the option values.

      An option can be a string value or an object with both a label and value. 
      The dropdown will display **label: value**.

   3. **command**: Runs an arbitrary command.

      - **command**: Command being run on variable interpolation.
      - **args**: Optional option bag passed to the command's implementation.

   .. code-block:: json

      {
          "version": "2.0.0",
          "tasks": [
              {
                  "label": "task name",
                  "command": "${input:variableID}",
                  // ...
              }
          ],
          "inputs": [
              {
                  "id": "variableID",
                  "type": "type of input variable",
                  // type specific configuration attributes
              }
          ]
      }

   假设 VS Code 当前编辑文件及状态如下，那么内建变量及对应值如下：

   1. Root workspace 所在目录： ``/home/your-username/your-project``
   2. 当前编辑的文件： ``/home/your-username/your-project/folder/file.ext``

   ============================== =========================================
   **${userHome}**                ``/home/your-username`` - the path of the user's home folder
   **${workspaceFolder}**         ``/home/your-username/your-project`` - the path of the folder opened in VS Code
   **${workspaceFolderBasename}** ``your-project`` - the name of the folder opened in VS Code without any slashes (/)
   **${file}**                    ``/home/your-username/your-project/folder/file.ext`` - the current opened file
   **${fileWorkspaceFolder}**     ``/home/your-username/your-project`` - the current opened file's workspace folder
   **${relativeFile}**            ``folder/file.ext`` - the current opened file relative to `workspaceFolder`
   **${relativeFileDirname}**     ``folder`` - the current opened file's dirname relative to `workspaceFolder`
   **${fileBasename}**            ``file.ext`` - the current opened file's basename
   **${fileBasenameNoExtension}** ``file`` - the current opened file's basename with no file extension
   **${fileExtname}**             ``.ext`` - the current opened file's extension
   **${fileDirname}**             ``/home/your-username/your-project/folder`` - the current opened file's folder path
   **${fileDirnameBasename}**     the current opened file's folder name
   **${cwd}**                     the task runner's current working directory upon the startup of VS Code
   **${lineNumber}**              the current selected line number in the active file
   **${selectedText}**            the current selected text in the active file
   **${execPath}**                the path to the running ``code.exe`` executable
   **${defaultBuildTask}**        the name of the default build task
   **${/}** **${pathSeparator}**  ``/`` on macOS or linux, ``\`` on Windows
   ============================== =========================================

   VS Code 通过 IntelliSense_ 提供智能提示，将光标放在字符串内（双引号内），或者执行命令
   Trigger Suggest 可以得到提示。VS Code 和 Sublime Text 一样支持项目中添加多个文件夹，
   这种形式的项目就是 Multi-root Workspaces。它们有个差别：VS Code 中的 workspaceFolder
   内置变量总是指定任务所在的工程文件，或者说保存任务配置文件的 .vscode 所在目录。Sublime Text
   侧会根据当前项目的目录顺序，并以目录列表中的首个目录作为项目路径。

   完整变量列表参考 `Visual Studio Code Variables Reference`_ 或插件扩展 `Extension Guides`_。

   .. _Integrate with External Tools via Tasks: https://code.visualstudio.com/docs/editor/tasks
   .. _VS Code Debugers Launch: https://code.visualstudio.com/docs/editor/debugging
   .. _Visual Studio Code Variables Reference: https://code.visualstudio.com/docs/editor/variables-reference
   .. _Extension Guides: https://code.visualstudio.com/api/extension-guides/overview

.. container:: section

   ``Terminal`` 菜单提供以下用于执行脚本的功能：
   
   - Run task 运行 ``tasks.json`` 配置文件中的设置任务；
   - Run build task (Ctrl+Shift+B) 运行构建任务，Build Task 是任务的一种，用于构建项目；
   - Run active file 运行当前活动的脚本文件，根据脚本类型使用相应的解释器；
   - Run selected text 使用默认配置的 `Terminal Profiles`_ 终端运行选中的脚本块（忽略脚本文件类型）。

   脚本任务主要目标是为构建项目服务的，它们会以终端命令的形式执行各种构建任务。VS Code 提供常用
   的构建工具的配置，点击 Terminal -> Configure Tasks... 就会弹出备选任务列表，上面提供的
   是各种成功检测到的并且支持的构建工具命令的配置模板，选择其中一个需要的配置模板，VS Code 就会
   将其写入 ``tasks.json`` 配置文件中，然后可以根据文档参考自行编辑它。

   默认快捷键 Ctrl+Shift+B 执行默认构建任务（Run Build Task），如果没有默认任务，则运行时会
   提示选择一个任务作为默认的构建任务。

   也可以显式定义默认构建任务，点击菜单：Terminal -> Configure Default Build Task...。
   以上是任务系统的基本使用方式，通常需要掌握大量的命令行工具的使用，包括不仅限于编译器，GCC、Rust、
   Clang 等等；脚本解释器，Node、Deno、Python 等等；Shell 脚本解释器，Bash、PowerShell 等等；
   项目构建自动化工具：Make、Ninja、CMake、Meson、Maven、Gradle 等等；众多的命令行工具，比如
   GNU Coreutils 套件。

   总结来说，VS Code 任务系统的配置主要涉及任务类型（type）、命令（command）、命令行参数（args）。
   任务名称（label）也是比较重要的一个属性，因为 VS Code 设计的任务是可以有依赖关系的。也就是
   一个任务运行之前依赖什么任务，可以通过 ``dependsOn`` 指定。但是没有类似 runAfter 这样的属性，
   要设计一串有序运行的任务，就需要使用 ``dependsOrder`` 属性，并且设置为 "sequence" 将需要
   依次执行的任务组合起来，按执行顺序放入``dependsOn`` 属性，这样的任务就是组合任务（Compound tasks）。
   为了提高构建效率，组合任务默认并行运行（"parallel"）。

   调试系统配置和构建任务是前后相关的，可以认为调试配置依赖构建任务，可以在配置调试系统时，在配置
   文件中添加 ``preLaunchTask`` 或者 ``postDebugTask``，用于调用构建任务。这种依赖关系设计
   可以让调试器运行之前，执行构建任务以生成待调试的程序，也可以在调试结束后执行收尾工作。组合任务
   中任何一个步骤执行失败，整个任务就会立即终止。

   VS Code 任务系统毕竟是为编辑器服务的，它不能替代自动化构建工具的功能。但是任务系统也提供丰富的
   功能配置。VS Code 可以自动检测可直接使用的任务（Task auto-detection），当前可支持 Gulp, 
   Grunt, Jake, npm 等自动化工具的自动检测。用户也可以在 ``tasks.json`` 配置文件定制任务
   （Custom tasks）。可以通过 ``presentation`` 属性改变任务输出行为（Output behavior）。
   执行任务产生的输出数据可以进一步处理，提取其中可能包含的错误信息（problem matchers）供给
   VS Code 使用，比如实现点击错误跳转到相应代码文件。快捷键与任务绑定，还可以方便地实现外部工具
   的定义（External Tools）。

   VS Code 使用 TypeScript 开发，源代码提供了类型定义文件 `VS Code Types Declaration`_，
   v1.80 导出的公开接口有 260 涉及整个应用框架的方方面，参考 `Source Code Organization`_。
   `VS Code API`_ 文档内容根据类型声明文件中的 JSDOC 注解生成，可以直接在 VS Code 查看
   类型声明源文件，它提供更便利的符号跳转功能。

   ==========================  ================
   ``WorkspaceConfiguration``  工作空间配置对应的类型
   ``DebugConfiguration``      调试配置对应的类型
   ``DebugSession``            程序调试会话
   ``BaseTaskConfiguration``   任务配置文件对应的类型
   ==========================  ================

   源代码中，任务定义为 ``Task``，它就是任务执行器，根据任务类型来制定执行规则。“任务执行”定义
   为 ``TaskExecution`` 接口，基本的任务执行类型有三种，对应 ``tasks.json`` 配置文件中的
   type 属性：

   ========================  ================
   TS Type Declaration       tasks.json type
   ========================  ================
   ``ProcessExecution``      "process"
   ``ShellExecution``        "shell"
   ``CustomExecution``       customs
   ========================  ================
   
   .. _Source Code Organization: https://github.com/microsoft/vscode/wiki/Source-Code-Organization
   .. _VS Code Types Declaration: https://github.dev/microsoft/vscode/blob/main/src/vscode-dts/vscode.d.ts
   .. _VS Code API: https://code.visualstudio.com/api/references/vscode-api

.. container:: section

   VS Code 作为一个跨平台的编辑器，其任务系统当然也需要考虑跨平台，其实现方式是：为提供不同平台
   提供特异化的配置，例如，以下配置的 Run Node 任务在 Windows 和 Linux 系统下会有不同的行为：

   .. code-block:: json

      {
        "label": "Run Node",
        "type": "process",
        "windows": {
          "command": "C:\\Program Files\\nodejs\\node.exe"
        },
        "linux": {
          "command": "/usr/bin/node"
        }
      }

   以下是一份 ``tasks.json`` 配置参考它包含了一 Bash 脚本运行任务，和一个 Deno 脚本开发
   任务，尽管配置文件指明它是默认构建任务（"isDefault": true）。后面将以 C/C++ 语言编程开发
   结合 clangd_ 提供 LSP 智能提示服务，以及 C/C++ 程序调试任务配置作深入说明：

   .. code-block:: json

      {
          // See https://go.microsoft.com/fwlink/?LinkId=733558
          // for the documentation about the tasks.json format
          "version": "2.0.0",
          "tasks": [
              {
                  "label": "Bash run",
                  "type": "shell",
                  "command": "bash -c \"${file}\"",
                  "problemMatcher": [],
                  "group": "build"
              },
              {
                  "type": "deno",
                  "command": "task",
                  "args": [
                      "dev"
                  ],
                  "problemMatcher": [
                      "$deno"
                  ],
                  "label": "deno: dev",
                  "detail": "$ deno run --watch main.ts",
                  "group": {
                      "kind": "build",
                      "isDefault": true
                  }
              }
          ]
      }

   ``Run`` 菜单主要提供用于执行调试（debug）的功能，或直接运行（launch）项目构建的程序：

   - Start Debugging (F5)
   - Start Without Debugging (Ctrl+F5)

   调试系统配置除了使用 ``Run`` 菜单中的 Add Configuration... 之外，主要是通过侧栏面板
   ``Run and Debug`` (Ctrl+Shift+D) 设置。当拥有多项配置时，在此面板上切换调试配置，包括调试
   控制台的开启，如果关闭了 Debug Console。状态栏左侧也提供 ``Select and start Debug Configuration``
   弹出列表，用于切换调试配置，也可以在命令面板执行 Debug。调试断点在代码编辑器行首左侧空白区设置，
   通过点击切换断点的添加、移除操作，或者使用 F9 快捷键，添加断点后，代码行首显示一个红色圆点 🔴。
   VS Code 还提供高级断点属性，在添加断点后，使用右键菜单 ``Edit breakpoint`` 设置：

   -  基于表达式的断点 (Expression condition)，表达式求值返回 true 时中断程序执行；
   -  基于击点计数器的断点 （hit counts），当断点击中次数到达设置值时中断程序执行；
   -  基于以上组合的断点。

   使用调试时，如果在 Windows 系统中配置默认控制台配置为 Bash（MSYS2），可能会出现以下提示：

      stty: 'standard input': Inappropriate ioctl for device

   意思是 VS Code 集成的控制台中 stdin 文件不符合 Linux I/O Control 设备接口规范。
   ``ioctl`` 是设备驱动程序中设备控制接口函数，也是系统调用，控制字符设备驱动通常具有的功能，
   一般字符设备会实现打开、关闭、读、写等功能，如需要还可以扩展新的功能，通常以增设 ioctl() 命令
   （cmd）的方式实现。

   错误消息定义是 ``ENOTTY``： The ioctl is not supported by the file descriptor.
   参考 The Kernel Documentation `ioctl based interfaces`_， `Generic Error Codes`_，
   和源代码 `ioctl.h`_。参考书：Linux Kernel Development。

   .. _Generic Error Codes: https://github.com/torvalds/linux/blob/master/Documentation/userspace-api/media/gen-errors.rst
   .. _ioctl based interfaces: https://www.kernel.org/doc/html/latest/driver-api/ioctl.html
   .. _ioctl.rst: https://github.com/torvalds/linux/blob/master/Documentation/driver-api/ioctl.rst
   .. _ioctl.h: https://github.dev/torvalds/linux/blob/master/include/uapi/asm-generic/ioctl.h

.. container:: section

   调试系统配置的程序有两种调试运行方式（request）：直接运行 ``launch``，或者将调试器附加到
   现有进程上 ``attach``。附加进程调试方式不一定所有调试器都支持，比如 Bash Debug 就不支持。
   可以使用全能的 GDB，它提供 (gdb) Bash on Windows Attach。

   例如，以下是 ``launch.json`` 中配置的 Bash 调试配置：

   .. code-block:: json

      {
          // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
          "version": "0.2.0",
          "configurations": [
              {
                  "type": "bashdb",
                  "request": "launch",
                  "name": "Bash-Debug (simplest configuration)",
                  "program": "${file}"
              }
          ]
      }

   在工程使用中，调试器配置通常与构建任务配合工作，以下是一级集合了 CMake 与乍化构建工具的任务
   与调试配置。使用了 VS Code 提供的用户输入变量，可以在执行 ``run ...`` 任务时指定要运行的
   程序名称，需要用户输入 ``executable`` 用户变量的值，在调试时也一样可以指定要调试的程序命称：

   .. code-block::

      |     ╭──────────────╮     ╭──────────────╮      ╭──────────────────╮
      |     │ (gdb) Launch │     │ (gdb) Launch │      │ (gdb) Launch raw │
      |     │    [Debug]   │     │   [Release]  │      │     [Debug]      │
      |     ╰───────┬──────╯     ╰───────┬──────╯      ╰────────┬─────────╯
      | launch.json │                    │                      │
      | ────────────┼────────────────────┼──────────────────────┼─────────────
      | tasks.json  │                    │                      │
      |     ╭──────────────╮     ╭──────────────╮    ╭──────────────────────╮
      |     │ CMake Build  │     │ CMake Build  │    │   Build Active File  │
      |     │    [Debug]   │     │  [Release]   │    ╰──────────┬───────────╯
      |     ╰───────┬──────╯     ╰───────┬──────╯    ╭──────────────────────╮
      |             │                    │           │ Prepare build folder │
      |    ╭────────────────╮   ╭────────────────╮   ╰──────────┬───────────╯
      |    │ CMake Generate │   │ CMake Generate │   ╭──────────────────────╮
      |    │     [Debug]    │   │   [Release]    │   │       Run ...        │
      |    ╰────────┬───────╯   ╰────────┬───────╯   ╰──────────┬───────────╯
      |             │                    │                      │
      |     ╭──────────────────────────────────────────────────────────────╮
      |     │                      Shell Commands                          │
      |     ╰──────────────────────────────────────────────────────────────╯

   此配置文件用于 Linux Kernel 内核学习文档配套的项目代码：Getting Started Linux kernel Programming

   *  `kernel_started <https://github.com/Jeangowhy/opendocs/blob/main/kernel_started.rst>`__
   *  `hi_kernel <https://www.github.com/jimboyeah/demo/tree/hi_kernel>`__

   .. code-block:: json

      {
          // See https://go.microsoft.com/fwlink/?LinkId=733558
          // for the documentation about the tasks.json format
          "version": "2.0.0",
          "tasks": [
              {
                  "label": "CMake Build [Debug]",
                  "type": "shell",
                  "command": "cmake --build .build/Debug --verbose",
                  "problemMatcher": [],
                  "dependsOn": [ "CMake Generate [Debug]" ],
                  "dependsOrder": "sequence",
                  "group": {
                      "kind": "build"
                  }
              },
              {
                  "label": "CMake Build [Release]",
                  "type": "shell",
                  "command": "cmake --build .build/Release --verbose",
                  "problemMatcher": [],
                  "dependsOn": [ "CMake Generate [Release]" ],
                  "dependsOrder": "sequence",
                  "group": {
                      "kind": "build"
                  }
              },
              {
                  "label": "CMake Generate [Release]",
                  "type": "shell",
                  "command": "cmake --version; cmake -S . -B .build/Release -DCMAKE_BUILD_TYPE=Release -G Ninja"
              },
              {
                  "label": "CMake Generate [Debug]",
                  "type": "shell",
                  "command": "cmake --version; cmake -S . -B .build/Debug -DCMAKE_BUILD_TYPE=Debug -G Ninja"
              },
              {
                  "label": "Build Active File",
                  "type": "shell",
                  "command": "gcc -gdwarf-2 -g3 '${fileBasename}' -o '.build/${fileBasenameNoExtension}.exe'",
                  "problemMatcher": [],
                  "dependsOn": [ "Prepare build folder" ],
                  "dependsOrder": "sequence",
                  "group": {
                      "kind": "build",
                      "isDefault": true
                  }
              },
              {
                  "label": "Prepare build folder",
                  "type": "shell",
                  "command": "rm.exe -rf '${workspaceFolder}/.build'; mkdir '${workspaceFolder}/.build'"
              },
              {
                  "label": "Variable Reference",
                  "type": "shell",
                  "command": "echo workspaceFolder: ${workspaceFolder} ",
                  "problemMatcher": []
              },
              {
                  "label": "Run ...",
                  "type": "shell",
                  "command": "cmake --build .build/Debug --verbose --target '${input:executable}'; $(find . -path '*${input:executable}')",
                  "problemMatcher": [],
              }
          ],
          "inputs": [
              { "id": "executable", "type":"promptString", "default": "x0001", "description": "specify an programm name."}
          ]
      }

   .. code-block:: json

      {
          // Use IntelliSense to learn about possible attributes.
          // Hover to view descriptions of existing attributes.
          // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
          "version": "0.2.0",
          "configurations": [
              {
                  "name": "(gdb) Launch [Debug]",
                  "type": "cppdbg" ,
                  "request": "launch",
                  "program": "${workspaceFolder}/.build/Debug/${input:executable}",
                  "cwd": "${fileDirname}",
                  "MIMode": "gdb",
                  "miDebuggerPath": "gdb",
                  "preLaunchTask": "CMake Build [Debug]",
                  "sourceFileMap":{
                      "/build/glibc-SzIz7B/glibc-2.31/": "/mnt/c/dl/pl/glibc-2.31/"
                  }
              },
              {
                  "name": "(gdb) Launch [Release]",
                  "type": "cppdbg",
                  "request": "launch",
                  "program": "${workspaceFolder}/.build/Release/${input:executable}",
                  "cwd": "${fileDirname}",
                  "MIMode": "gdb",
                  "miDebuggerPath": "gdb",
                  "preLaunchTask": "CMake Build [Release]",
              },
              {
                  "name": "(gdb) Launch raw [Debug]",
                  "type": "cppdbg",
                  "request": "launch",
                  "program": "${workspaceRoot}\\.build\\${input:executable}",
                  // "program": "c:\\msys64\\usr\\bin\\bash.exe",
                  "args": ["-c", "echo $PWD : ${workspaceRoot} : ${workspaceFolder}; tree -a ."],
                  "stopAtEntry": false,
                  "cwd": "${workspaceFolder}\\",
                  "preLaunchTask": "Build Active File",
              }
          ],
          "inputs": [
              { "id": "executable", "type":"promptString", "default": "x0001", "description": "specify an programm name."}
          ]
      }

.. _S04: #S04

/🟡Script and Terminal
======================

   VS Code 集成的终端（Terminal）功能非常强大，支持 Unicode 符号，使用 Canvas 绘图获得高
   性能，另外为以下 shell 提供易于使用的命令行体验：

   * Linux/macOS: bash, fish, pwsh, zsh
   * Windows: pwsh

   终端集成功能（shell integration） 提供了一些不其它终端上不常见但极方便的功能，好用程序比
   Microsoft Store 上提供的 Windows Terminal 还要好用。特别是在进入 screen reader 模式，
   参考以下这张组命令：

   - Go to Next Command (Alt+DownArrow) in the accessible view
   - Go to Previous Command (Alt+UpArrow) in the accessible view
   - Go to Symbol (Control+Shift+O)
   - Run Recent Command (Control+Alt+R)
   - Go to Recent Directory (Control+G)

   文件跳转或文件内符号跳转是经常使用的功能，终端执行命令后输出的内容也可以作为文件、路径来执行跳转。
   执行过的命令也会记录在历史数据列表，只需要相应执行以上命令，就可以方便地跳转文件、跳转目录、或者
   执行历史记录的命令。因为列表使用的是类似 fuzzy finder 一样的模糊匹配，定位目标数据非常方便。

   读屏模式（screen reader）为视力障碍人士提个的辅助功能，配合屏幕阅读器大大提升了无障碍访问。
   即使是正常用户，通过启用读屏模式也可以降低复杂 UI 带来的干扰，提升工作效率。在读屏模式下，一些
   信号的传递会通过播放声音来实现，可以使用以下命令来设置这些声明信息：

   - List Signal Announcements
   - List Signal Sounds

   使用快捷键 ``Alt+F1`` 和 ``Alt+F2`` 分别打开 Accessibility Help 和 Accessible View
   帮助信息窗口，显示出的内容以通过读屏工具给视障用户提供帮助。配合前面的终端集成功能，即使是视障
   用户也能很好地使用 VS Code。

   VS Code 提供良好的 Terminal 编程体验，打开脚本文件，状态栏中就会显示文件对应的脚本语言类型。
   比如，``.sh`` 文件默认为 Shell Script，点击它可指定文件类型关联（Select Language Mode）。
   使用 ``Ctrl+```（反引号位于 ~ 按键）打开默认的终端程序，可以在终端视图中点击右上角 + 图标
   右侧的向下箭头，使用弹出菜单中的 Select Default Profiles 来设置默认的终端。VS Code 终端
   还支持 Unicode 和 emoji 表情符号，当然也支持中文符号的输入。

   Windows 系统上默认使用 PowerShell，并且默认在终端视图打开，视图 VS Code 主界面的下方。
   也可以在编辑器中打开 Shell 程序窗口，可以修改配置 ``terminal.integrated.defaultLocation``
   来决定在 ``view`` 还是在 ``editor`` 区域打开终端。当前打开的终端窗口也可以自由拖动，可以
   放置到编辑器区域，也可以再拖回终端视图区域，并且可以进行水平或竖直分割窗口。

   VS Code 用户喜好配置面板是一个包含后有配置项的列表，随着插件的安装，这个配置列表的选项也在增加。
   列表包含两套配置：用户配置（User）和工作区楝（Workspace），后者配置适用于当前打开的工作区。
   配置列表拖动过程中，左侧的目录会根据当前所在区域，高亮显示对应的条目。虽然配置项目可能多达几百
   上千条，但是，可以使用字符串过滤器或者使用 Setting ID，比如  ``terminal.explorerKind``
   或者 ``\@feature:terminal Expolorer Kind``，就可以快速找到要设置的选项。这里配置的
   Terminal Expolorer Kind 涉及到 VS Code 文件浏览器中的文件操作，当点击文件右键菜单时，
   会出现 “Open in External Terminal” 菜单项，它打开的终端是什么类型，就在此配置项中指定，
   Expolorer Kind 设置为 external 时就会打开外部 shell 窗口，类似通过 ``Ctrl+Shift+C``
   打开新的终端窗口。如果是 integrated 方式，就会直接在 VS Code 终端视图中打开。

   官方提供的 PowerShell for Visual Studio Code 插件可以为 PowerShell 脚本提供丰富的
   智能提示信息，但是这个插件有点大块头 300MB 级别，隔壁 Kotlin 编译也差不多这么大。

   Windows 系统中，运行当前活动的脚本文件，默认：PowerShell 运行于 VS Code 集成终端窗口。
   如果是 Bash，则会使用外部程序（External）形式运行脚本。`Terminal Profiles`_ 配置不同
   操作系统下的脚本运行时所使用的软件终端，此外还有 VS Code 通过检测系统环境获释的终端。可以
   为不同的操作系统指定默认的终端 Profiles 配置：

   =========================================  ===============================
   Terminal External Settings                 Default
   =========================================  ===============================
   Terminal › External: Linux Exec            xterm
   Terminal › External: Osx Exec              Terminal.app
   Terminal › External: Windows Exec          C:\Windows\System32\cmd.exe
   Terminal › Integrated › Profiles: Linux    -
   Terminal › Integrated › Profiles: Osx      -
   Terminal › Integrated › Profiles: Windows  PowerShell
   =========================================  ===============================
   .. _Terminal Profiles: https://code.visualstudio.com/docs/terminal/profiles


   以下配置文件为 Windows 系统提供了多个 Shell 程序，并设置 MSYS2 提供的 bash 为默认值。
   `Terminal Profiles`_ 是 VS Code 中设置可用终端类型的配置文件，它有两种检测形式，直接使用
   路径（path）指定 Shell 程序，或者使用（source）指定，目前支持 "PowerShell" 和 "Git Bash"。

   .. code-block:: josn

      {
          "terminal.integrated.profiles.windows": {
              "bash (MSYS2)": {
                  "path": "C:\\msys64\\usr\\bin\\bash.exe",
                  "args": [
                    "--login",
                    "-i"
                  ],
                  "env": { "CHERE_INVOKING": "1" }
              },
              "Sublime Text": {
                  "path": "subl",
                  "args": [ "${file} "]
              },
              "PowerShell": {
                  "source": "PowerShell",
                  "icon": "terminal-powershell"
              },
              "Command Prompt": {
                  "path": [
                      "${env:windir}\\System32\\cmd.exe"
                  ],
                  "args": [],
                  "icon": "terminal-cmd"
              },
              "Git Bash": {
                  "source": "Git Bash"
              }
          },
          "terminal.integrated.defaultProfile.windows": "bash (MSYS2)"
      }


   VS Code 快捷键配置面板，File -> Preferences -> Keyboard Shortcuts，提供了一个命令
   与快捷键关联列表。这个列表包含所有可用的命令，支持命令搜索，也支持快捷键搜索，方便快速定位到
   要这设置快捷键的条目。例如，创建终端窗口的命令是 Terminal: Create New Terminal (With Profile)，
   对应命令 ID：``workbench.action.terminal.newWithProfile``，可以为它关联一个快捷键，
   方便根据不同的 Profiles 来创建新的终端窗口，也可以用来开启外部工具（External Tools）。

   默认配置 Open New External Terminal（Ctrl+Shift+C），以外部程序方式打开终端窗口。

   VS Code 没有像 Visual Studio 或者 Intellij IDE 那样提供 External Tools 配置外部工具，
   但是可以使用构建系统中的任务（Tasks）来实现类似功能。使用 Terminal 配置最易用的，例如，前面
   配置了 ``subl`` 命令，这是 Sublime Text 提供的命令行工具，它有一个非常方便的功能：支持
   通过 stdin 和 stdout 与其它终端命令一起协作。

   在命令面板执行：Preferences: Open Keyboard Shortcuts (JSON) 打开自定义快捷键配置文件，
   在这里可以添加任何用于运行 VS Code 命令的快捷键绑定。这里提供一组配置参考，定义一个 Bash 
   脚本运行任务，"Bash Active File"，支持脚本中使用 shebang 运行当前系统中可用的脚本解释器。
   然后，在自定义快捷键配置文件中，添加 ``"key": "alt+,"`` 给它绑定快捷键：

   .. code-block:: json

      {
          "version": "2.0.0",
          "tasks": [
              {
                  "label": "Gradle Build",
                  "type": "shell",
                  "command": "gradle :build"
              },
              {
                  "label": "Bash Active File",
                  "type": "shell",
                  "command": "bash -c './${fileBasename}'",
                  "problemMatcher": []
              },
              {
                  "label": "Bash Started",
                  "type": "shell",
                  "command": "bash -c './started'",
                  "problemMatcher": []
              }
          ]
      }

   .. code-block:: json

     {
       "key": "alt+.",
       "command": "workbench.action.terminal.runActiveFile"
     },
     {
       "key": "alt+,",
       "command": "workbench.action.tasks.runTask",
       "args": {
         "task": "Bash Started",
         "type": "shell"
       }
     },

   这种绑定 Task 的快捷键有个小问题：Task 是工程中定义的，不是全局的任务，切换工程就要重新配置。
   当然，用好这套任务系统，开发任务也相当便利，配合自定义的脚本（started）可以实现很多功能，完全
   可以省掉好多 “Useless Plugin”。


   命令行有一个自动运行功能，安装某些软件后如果设置了 AutoRun 就可能导致控制台出现错误信息。卸载
   软件后，如果还遗留以下注册表项目，那么打开控制台时，就会出现一条「系统找不到指定的路径」错误提示。

      计算机\HKEY_CURRENT_USER\Software\Microsoft\Command Processor\AutoRun

.. _S05: #S05

/🟡JavaFX GUI with Gradle and Kotlin LSP
========================================

   本小节涉及以下主题内容：

   * VS Code 中使用 Maven 插件及项目配置；
   * VS Code 中使用 Gradle 插件及项目配置；
   * VS Code 中使用 Kotin + LSP 项目开发配置；
   * VS Code 中使用 Java 模块 + JavaFX 图形框架项目开发配置；

   鉴于此，至少涉及 Java/Kotlin 两种编程语言，Maven/Gradle 两种自动化构建工具，以及 JavaFX
   图形构架，还会涉及 Gradle 项目配置文件使用到的 Groovy 或 Kotlin 脚本。

   Java + Kotlin 混合语言 Gradle JavaFX 项目模板： https://github.com/jimboyeah/demo/tree/hi_javafx
.. _S06: #S06

Maven Project
---------------

   VS Code 上开发 JavaFX 图形编程项目操作步骤：
   
   * 安装 Java 语言插件包： `Extension Pack for Java`_
   * 执行命令创建 JavaFX 项目： ``Maven: New Project...``，如果列表没有显示可点击 ``Find More``。
   * 命令面板中运行 ``Maven: Execute Commands...`` 或者直接运行终端命令 ``mvn test`` 进行测试。

.. _Extension Pack for Java: https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack

   Maven 可使用 `Exec Maven Plugin`_ 插件运行程序，但直接使用 Java 执行 jar 程序包更直接：

      java -cp target/my-app-1.0-SNAPSHOT.jar com.mycompany.app.App

   安装插件包中的 ``Maven`` 项目管理插件，它提供了多种 Java 项目模板，包括 JavaFX 项目。
   Maven 项目管理工具会自动下载依赖模块，保存到用户主目录中的仓库缓存目录中，Windows 系统为
   ``%USERPROFILE%/.m2/repository``。项目编译过程可能遇到找不到 Java 类库的问题，可以
   使用 ``mvn -X test -f "pom.xml"`` 查看编译过程细节：

      Fatal Error: Unable to find package java.lang in classpath or bootclasspath
   
   .. code-block:: bash

      > mvn -X test
      Apache Maven 3.6.3 (cecedd343002696d0abb50b32b541b8a6ba2883f)
      Maven home: C:\maven-3.6.3\bin\..
      Java version: 17.0.8, vendor: Oracle Corporation, runtime: C:\jdk-17
      Default locale: zh_SG, platform encoding: GBK
      OS name: "windows 10", version: "10.0", arch: "amd64", family: "windows"

   JDK 1.8 (JDK 8) 运行时基础类库位于 rt.jar 文件包内，JDK 9 引入模块化机制（modules），
   JDK 11 开始使用模块文件替代旧系统的 JAR 映像，Maven 更新又跟不上 JDK 更新节奏，导致在新
   环境中出现找不到基础类库的问题。参考文档 `Oracle JDK 22 Migration Guide`_。

   JDK 9 是模块机制与 JAR 映像机制的过度期，如果 JAR 包根目录下有 module-info.class 文件，
   则是一个已经包含了模块化信息的模块。模块信息类（module-info.class）中可以指定模块名字和版本，
   哪些 Package 可以被别的模块访问，依赖于哪些模块，这些依赖是否继续传递等。伴随模块机制引入了
   ModulePath 的概念，和 ClassPath 指定 JAR 类似，不过 ModulePath 中的 JAR 包或 Jmod
   文件被当作 Module 来处理，而 ClassPath 指定 JAR 包，无论是否模块化都作为传统 JAR 包处理。

   JDK 11 开始，JavaFX 剥离作为独立维护的项目，参考 JavaFX 文档 `JavaFX docs`_。

   JDK 17 相比 JDK 1.8，即使相比 JDK 11 也有较大的变动，麻烦的是编译器又不给出变更提示信息。
   解决方法可以是修改 JAVA_HOME 环境变量指向包含 JRE 的目录。可以修改项目配置文件的编译插件配置，
   maven-compiler-plugin 插件可以通过配置 executable 指定编译器，不建议硬编码到 pom.xml。
   通过脚本指定 JDK 或修改环境变量，脚本参考如下：

   .. code-block:: bash

      # PowerShell
      $env:JAVA_HOME="C:/jdk1.8.0_202/"

      # Bash
      JAVA_HOME="C:/jdk1.8.0_202/"

      mvn test -f 'pom.xml'
      java -jar demo/target/demo-1.0-SNAPSHOT.jar com.example.MainApp

.. _JavaFX docs: https://openjfx.io/openjfx-docs/
.. _Oracle JDK 17 Migration Guide: https://docs.oracle.com/en/java/javase/17/migrate/migrating-jdk-8-later-jdk-releases.html
.. _Oracle JDK 22 Migration Guide: https://docs.oracle.com/en/java/javase/22/migrate/migrating-jdk-8-later-jdk-releases.html
.. _Working with GUI applications in VS Code: https://code.visualstudio.com/docs/java/java-gui
.. _Maven in 5 Minutes: https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html
.. _Maven Available Plugins: https://maven.apache.org/plugins/index.html
.. _Apache Maven Compiler Plugin: https://maven.apache.org/plugins/maven-compiler-plugin/
.. _Exec Maven Plugin: https://www.mojohaus.org/exec-maven-plugin/
.. _javafx-gradle-plugin: https://github.com/openjfx/javafx-gradle-plugin
.. _S07: #S07

Gradle Project
---------------

   Gradle 比 Maven 项目管理工具更流行，广泛应用于 Android 和 Java 以及 C++ 等项目，
   Gradle 主要特点如下，当然 Gradle 的臃肿也是一大特点：

   1. 声明式：Gradle 使用更简洁、更易读的 Groovy DSL 编写构建脚本。
   2. 灵活性：Gradle 支持多项目、变体和自定义构建逻辑。
   3. 依赖管理：支持自动从 Maven 仓库或其他仓库下载所需的库。
   4. 插件化：丰富的插件以及各种任务定制，如编译、测试、打包、部署等。
   5. 增量构建：自动判断需要重新构建的文件，从而提高构建效率。

   Gradle 还有一个缺点是不兼容更新太频繁，构建时经常得到警告、错误信息，又不指明 build.gradle
   中哪一行有问题。并且，错误可能是插件引起的，需要逐一启用/禁用插件进行检查，以确认哪个插件问题。
   比如，JavaPluginConvention (Gradle API 8.7) 将会由 JavaPluginExtension (9.0) 替换。
   但是在执行构建命令时，使用 ``--warning-mode all`` 只提供文档链接，并没有指出是哪个插件使用
   了弃用的特性，构建脚本中也无法想到相关的脚本。

   https://docs.gradle.org/current/dsl/org.gradle.api.plugins.JavaPluginConvention.html

   解决 Gradle 频繁变更导致的兼容性问题，最简单的方法使用原工程使用的 Gradle 版本，或者按照
   官方文档给出的版本迁移指导修改配置脚本：
   `Upgrading your build from Gradle 7.x to 8.0 <https://docs.gradle.org/current/userguide/upgrading_version_7.html>`__
   
   Gradle 版本迁移并不是件轻松的事，有些问题文档是没有直接答案的，因为问题可能是由于使用了基于
   旧版本的插件导致的。比如 ``IncrementalTaskInputs`` 将在第 8.0 中删除。原先的 @TaskAction
   标注将不能应用于 IncrementalTask.taskAction$gradle_core，改用用 org.gradle.work.InputChanges 代替。

      Cannot use @TaskAction annotation on method IncrementalTask.taskAction$gradle_core() 
         because interface org.gradle.api.tasks.incremental.IncrementalTaskInputs 
         is not a valid parameter to an action method.

   可使用 Groovy 或者 Kotlin 脚本作为构建规则配置文件：build.gradle(.kts)。Gradle 构建
   系统中有三类脚本，脚本中可以使用的全局对象参考 `Gradle DSLs and API`_ 文档。

   +-----------------+--------------------------+--------------------+
   |  Type of script | Delegates to instance of |     File name      |
   +-----------------+--------------------------+--------------------+
   | Build script    | Project                  | build.gradle.kt    |
   | Init script     | Gradle                   | init.gradle.kt     |
   | Settings script | Settings                 | settings.gradle.kt |
   +-----------------+--------------------------+--------------------+

   Gradle 和 GNU Make 拥有类似的依赖关系处理逻辑，GNU Make 脚本中的 Targets 等价于
   Gradle 脚本中的 Tasks。当一个构建脚本（build.gradle）更新后，Gradle 就需要重新生成
   Task Graphs，根据其依赖关系、更新状态来决定要执行什么构建任务。

   Gradle 为了加速构建任务，使用 `Gradle Daemon`_ 守护进程常驻内存，作为后台进程运行，实时
   与用户交互，以避免重复执行启动降低效率。守护进程默认启用，``--daemon`` 和 ``--no-daemon``
   命令行参数可以切换状态，并使用 ``--stop`` 关闭守护进程。使用守护进程的一大原因是 Gradle 在
   Java 虚拟机（JVM）上运行并使用多个支持库，初始化时间较长。Gradle 守护进程通过以下功能解决了
   构建效率问题：

   * Caching project information across builds
   * Running in the background so every Gradle build doesn’t have to wait for JVM startup
   * Benefiting from continuous runtime optimization in the JVM
   * Watching the file system to calculate exactly what needs to be rebuilt before you run a build

   守护进程也用于持续集成的服务器上，Continuous Integration (CI)。
   
   启用守护进程提升效率同时可能占用大量内存，可达 4GB 以上。可以配置 gradle.properties 调整
   运行 Daemon 的虚拟机运行参数：

      org.gradle.jvmargs=-Xmx4096M
      org.gradle.parallel=true
      org.gradle.daemon=true

   Gradle Tooling API 是一套供 IDE 集成的编程接口，VS Code 这类工具就可以提供 Gadle 操作面板。

   参考官方文档：

   *  Running Gradle Builds - Core Concepts - `Gradle Basics`_
   *  Authoring Gradle Builds - Learning the Basics - `Gradle Build Lifecycle`_
   *  Optimizing Build Performance - `Gradle Daemon`_

.. _Gradle Basics: https://docs.gradle.org/current/userguide/gradle_basics.html
.. _Gradle Build Lifecycle: https://docs.gradle.org/current/userguide/build_lifecycle.html
.. _Gradle Daemon: https://docs.gradle.org/8.7/userguide/gradle_daemon.html

   Gradle 项目依赖类型说明如下，可用下表罗列的各种方法声明不同类型的依赖：

   *  直接依赖指，从远程仓库（如 Maven Central）中获取的依赖，可以 Maven 仓库的路径字符串指明。
   *  项目依赖，在一个多模块项目中，模块之间存在的依赖关系，可用 project 方法声明。
   *  本地 JAR 映像依赖，直接引用项目目录中的 JAR 文件。可用 files 或 fileTree 方法声明。

   使用 ``./gradlew app:dependencies`` 查询当前 Gradle 项目依赖关系。VS Code 安装并启用
   Gradle 插件后，此命令可以在 Gradle 插件面板中的 help 命令分组下找到。

   API 依赖和 implementation 依赖是相关概念，API 意味着导出、暴露以供消费，而后者意味所
   声明依赖强调内部实现、封装、隐藏细节，有助于减少编译时的依赖传递，提高构建效率，当然可以在
   运行时实现导出。

   考虑到新版本的 jar 包一般都向下兼容，Gradle 会使用最新版本的 jar 包。实际开发中，还
   是建议使用官方自带的这种解决方案。当然除此之外，Gradle 也为我们提供了一系列的解决依赖
   冲突的方法: ``exclude`` 方法用于移除一个依赖，不允许依赖传递，强制使用某个版本。

   在添加依赖项时,如果设置 ``transitive`` 为 false，表示关闭依赖传递。即内部的所有依赖
   不会添加到编译和运行时的类路径。

   执行 ``./gradlew build`` 命令时，Gradle 就会按配置的依赖仓库下载文件并应用到项目中。
   依赖配置代码片段自行在 `Maven Repository`_ 查询，构建脚本中的依赖类型及关系参考 Gradle
   插件文档 `The Java Library Plugin`_，主要是依赖声明与用户自定义配置：

   Java Library plugin - configurations used to declare dependencies

   ======================= ======================= =========== ============
   Configuration name      Role                    Consumable?  Resolvable?
   ======================= ======================= =========== ============
   ``api``                 声明编译时、运行时 API 依赖        no           no 
   ``implementation``      声明依赖（强调内部而非导出）          no           no
   ``compileOnly``         声明编译时依赖                 no           no
   ``compileOnlyApi``      声明编译时 API 依赖            no           no   
   ``runtimeOnly``         声明运行时依赖                 no           no
   ``testImplementation``  声明测试用例依赖（编译时）           no           no
   ``testCompileOnly``     声明测试用户编译时依赖             no           no    
   ``testRuntimeOnly``     声明测试用例运行时依赖             no           no
   ======================= ======================= =========== ============

   Java Library plugin — configurations used by consumers

   ======================= ======================= =========== ============
   Configuration name      Role                    Consumable?  Resolvable?
   ======================= ======================= =========== ============
   ``apiElements``         用于针对当前库编译时的依赖           yes         no
   ``runtimeElements``     用于当前库运行时的依赖             yes         no
   ======================= ======================= =========== ============

   Java Library plugin - configurations used by the library itself

   ======================== ======================= =========== ============
   Configuration name       Role                    Consumable?  Resolvable?
   ======================== ======================= =========== ============
   ``compileClasspath``     编译时支持库的类路径              no           yes
   ``runtimeClasspath``     运行时支持库的类路径              no           yes
   ``testCompileClasspath`` 测试用例编译时支持库的类路径          no           yes
   ``testRuntimeClasspath`` 测试用例运行时支持库的类路径          no           yes
   ======================== ======================= =========== ============

   *  ``compile`` 已在 Gradle 7.0 中移除，原表示编译时和打包时都需要的依赖。
   *  ``runtime`` 已在 Gradle 7.0 中移除，原表示运行和测试时需要的依赖。

.. _Maven Repository: https://mvnrepository.com/artifact/org.jetbrains.kotlin/kotlin-stdlib
.. _The Java Library Plugin: https://docs.gradle.org/current/userguide/java_library_plugin.html
.. _Kotlin Build Tools - Gradle: https://kotlinlang.org/docs/gradle.html

   典型的 Gradle 构建流程包含如下步骤：

   -  1. Initialization
   -  1.1. Detects the settings file.
   -  1.2. Evaluates the settings file to determine projects and subprojects.
   -  1.3. Creates a Project instance for every project.
   -  2. Configuration
   -  2.1. Evaluates the build scripts of every project participating in the build.
   -  2.2. Creates a task graph for requested tasks.
   -  3. Execution
   -  3.1. Schedules and executes each of the selected tasks in the order of their dependencies.

   Gradle 提供 Maven 兼容功能，执行 ``gradle init`` 命令初始化项目，此命令会生成以下脚本：

   1. ``gradlew``: Gradle start up script for UNIX-like sytem.
   2. ``gradlew.bat``: Gradle startup script for Windows.
   3. ``build.gradle`` 主项目构建脚本。
   4. ``settings.gradle`` 主项目配置脚本。
   5. ``gradle\wrapper\gradle-wrapper.properties`` 包装程序的配置文件，包含指定 Gradle 版本。

   启动脚本负责配置 Gradle Wrapper 运行环境，包括下载包装程序配置文件中指定的 Gradle 二进制
   程序包，所有下载到的 Gradle 会保存在用户主目录下的子目录内： %USERPROFILE%/.gradle 。

.. _S08: #S08

VS Code with Gradle and Kotlin
------------------------------

   VS Code 环境中使用 Gradle 项目管理工具进行 JavaFX 图形应用开发配置参考：

   *  安装项目管理工具插件： ``Gradle for Java``
   *  命令面板中执行项目初始化命令： ``Create a Gradle Java Project...``
   *  或者选择：Create a Gradle Java Project Advanced...，以选择配置脚本（Groovy、Kotlin）等等。
   *  选择创建一个 Application 应用程序项目。
   *  可选择修改 gradle\wrapper\gradle-wrapper.properties 以指定现有 Gradle 版本，免去下载。
   *  执行终端命令，测试程序框架是否正确输出 Hello World： ``gradle run``

   参考以下 Kotlin 配置脚本 ``build.gradle.kts``，根据 JDK 环境调整 JavaFX Gradle 插件版本，
   以及根据使用到的 JavaFX 模块添加相应的依赖或版本：

   .. code-block: kotlin

      plugins {
         // Apply the application plugin to add support for building a CLI application in Java.
         application
         // https://github.com/openjfx/javafx-gradle-plugin
         id("org.openjfx.javafxplugin") version "0.0.8"
      }

      javafx {
         version = "17"  // Specify JavaFX version
         modules("javafx.controls", "javafx.fxml")
         //configuration = "implementation" // set dependency scope
         //configurations("implementation", "testImplementation")
      }

   使用 Kotlin 语言编程，可选安装 Kotlin_ 智能提示插件和 `Kotlin Language`_ 语法支持插件。
   LSP 服务依赖于 `Kotlin Language Server`_，调试器依赖于 `Kotlin Debug Adapter`_。
   VS Code 安装插件后就可以添加调试配置（"type": "kotlin"）。

   如果安装了 Android Studio，那么就只可以使用它的插件目录下自带的 Kotlin 编译器，将编译器
   kotlinc 所在目录添加了环境变量搜索目录列表中。

   `Kotlin Language Server`_ 目前在 Sublime Text 4169 配置正常可用，但是 VS Code 
   上配置就难以成功获得 LSP 智能提示服务，Output 面板也没用调试信息供分析。也没有提供日志，
   甚至命令行的帮助信息都不给，只能看 Main.kt 源代码：

   .. code-block:: kotlin

      https://github.dev/fwcd/kotlin-language-server

      class Args {
          /*
           * The language server can currently be launched in three modes:
           *  - Stdio, in which case no argument should be specified (used by default)
           *  - TCP Server, in which case the client has to connect to the specified tcpServerPort (used by the Docker image)
           *  - TCP Client, in which case the server will connect to the specified tcpClientPort/tcpClientHost (optionally used by VSCode)
           */

          @Parameter(names = ["--tcpServerPort", "-sp"])
          var tcpServerPort: Int? = null
          @Parameter(names = ["--tcpClientPort", "-p"])
          var tcpClientPort: Int? = null
          @Parameter(names = ["--tcpClientHost", "-h"])
          var tcpClientHost: String = "localhost"
      }

   尝试改用 TCP 连接方式提供 LSP 服务，禁用插件并重新启用后，Output 面板终于出现了 Kotlin 
   调试信息输出，LSP 服务也终于正常工作。这似乎在运行一次调试、自动下载 `Kotlin Debug Adapter`_ 
   之后发生的。

   在执行 Java 应用调试时，极有可能遇到框架组件缺失的问题，DEBUG CONSOLE 面板查看调试消息：

      Error: JavaFX runtime components are missing, and are required to run this application

   需要在配置调试器时指定 --module-path 等参数引用 JavaFX 运行时，以下是 Kotlin 调试配置参考：

   .. code-block:: json

      {
          "version": "0.2.0",
          "configurations": [
              {
                  "type": "kotlin",
                  "request": "launch",
                  "name": "Kotlin Launch",
                  "projectRoot": "${workspaceFolder}",
                  "mainClass": "hi_javafx.App",
                  "vmArguments": "--module-path C:/javafx-sdk-17.0.11/lib --add-modules javafx.base,javafx.controls,javafx.fxml",
                  // "preLaunchTask": "Gradle Build"
              }
          ]
      }

   Kotlin Debug 插件似乎并不能正常调试 JavaFX 应用，就连基本的 Kotlin 程序的断点不中断。
   更别说 async await 异步代码的断点调试。代码文件命名也是英文，无空格。Red Hat 提供的 Java
   调试则可以正常工作，只是需要设置 "classPaths" 参数以使 JVM 可加载到待调试的入口类。大概
   是因为 Jetbrains 需要卖自家 IDE，没向社区提供好用调试工具。如果对调试没有什么太多要求，
   VS Code 也胜任 Kotlin 开发，尽管体验不及 Intellij IDE。以下 launch.json 配置仅供参考：

   .. code-block:: json

      {
          "version": "0.2.0",
          "configurations": [
              {
                  "type": "java",
                  "name": "Launch Java Program",
                  "request": "launch",
                  "mainClass": "org.example.App",
                  "preLaunchTask": "Gradle Build appJava",
                  "vmArgs": "",
                  "classPaths": ["${workspaceFolder}/AppJava/app/build/classes/java/main"]
              },
              {
                  "type": "kotlin",
                  "request": "launch",
                  "name": "Kotlin Launch",
                  "projectRoot": "${workspaceFolder}",
                  "mainClass": "hi_javafx.App",
                  "vmArguments": "--module-path C:/javafx-sdk-17.0.11/lib --add-modules javafx.base,javafx.controls,javafx.fxml",
                  "preLaunchTask": "Gradle Build appFX",
              }, 
          ]
      }

   在新旧版本切换过程中非常容易因为构建产生的缓存可能因为 JDK 版本混乱而出现错误，因此了解类文件
   格式版本与 JDK 的对应关系可以帮助掌握问题产生的根源。另外，在执行调试时，也经常可能因为环境变量
   设置的 JDK 版本与 Gradle 构建时使用的版本不同，而导致 VS Code 调试失败。以下就是调试控制台
   输出的错误提示，原因就是调试器运行的 Java 17 与编译器使用的 Java 21 版本不兼容：

      Error: LinkageError occurred while loading main class hi_javafx.App
         java.lang.UnsupportedClassVersionError: hi_javafx/App has been compiled 
         by a more recent version of the Java Runtime (class file version 65.0), 
         this version of the Java Runtime only recognizes class file versions up to 61.0

   Table 4.1-A. ``class`` file format major versions

   .. container:: table-contents

      ======= ================== ===== ================
      Java SE Released           Major Supported majors
      ======= ================== ===== ================
      1.0.2   May 1996           45    45 <===========
      1.1     February 1997      45    45
      1.2     December 1998      46    45 .. 46
      1.3     May 2000           47    45 .. 47
      1.4     February 2002      48    45 .. 48
      5.0     September 2004     49    45 .. 49
      6       December 2006      50    45 .. 50
      7       July 2011          51    45 .. 51
      8       March 2014         52    45 .. 52 <=====
      9       September 2017     53    45 .. 53
      10      March 2018         54    45 .. 54
      11      September 2018     55    45 .. 55 <=====
      12      March 2019         56    45 .. 56
      13      September 2019     57    45 .. 57
      14      March 2020         58    45 .. 58
      15      September 2020     59    45 .. 59
      16      March 2021         60    45 .. 60
      17      September 2021     61    45 .. 61 <=====
      18      March 2022         62    45 .. 62
      19      September 2022     63    45 .. 63
      20      March 2023         64    45 .. 64
      21      September 2023     65    45 .. 65
      22      March 2024         66    45 .. 66
      ======= ================== ===== ================

   参考 JVM 规范文档 `JVM Spec Chapter 4. The class File Format`_

.. _JVM Spec Chapter 4. The class File Format: https://docs.oracle.com/javase/specs/jvms/se22/html/jvms-4.html
.. _Gradle DSLs and API: https://docs.gradle.org/current/kotlin-dsl/index.html
.. _Kotlin: https://marketplace.visualstudio.com/items?itemName=fwcd.kotlin
.. _Kotlin Language Server: https://github.com/fwcd/kotlin-language-server
.. _Kotlin Debug Adapter: https://github.com/fwcd/kotlin-debug-adapter
.. _Kotlin Language: https://marketplace.visualstudio.com/items?itemName=mathiasfrohlich.Kotlin

   LSP 智能提示服务需要先下载 `Kotlin Language Server`_，然后在打开设置面板，搜索定位到
   kotlin.languageServer.path，并指定 LSP 客户端的启动脚本。要为 Gradle 配置脚本启用智能
   提示支持，需要配置插件启用以下配置项，重启插件后，打开 kts 脚本就可以看到底部状态栏提示建立索引
   （Kotlin: Indexing）。Gradle Kotlin DSL 脚本支持目前还是体验性功能，并不一定可用：

       "kotlin.scripts.buildScriptsEnabled": true,
       "kotlin.scripts.enabled": true

   Kotlin LSP 需要项目使用 JDK 11+。可能通过 JAVA_HOME 或者在项目级别中指定 Java 版本，
   后者只影响当前项目，``gradle.properties`` 文件设置局部配置，参考如下：

      org.gradle.java.home=<YOUR_JDK_PATH>

   如果，使用 JDK 9+ 可以在项目构建脚本 build.gradle.kts 中按如下任意一种形式配置。Gradle
   会在构建项目时自行下载 JDK 并保存到缓存目录，下载可能比较耗时，并且可能导致 timeout 错误：

      java {
          sourceCompatibility = JavaVersion.VERSION_1_8
          targetCompatibility = JavaVersion.VERSION_1_8
      }
      
      java {
          toolchain {
              languageVersion = JavaLanguageVersion.of(17)
          }
      }

   使用 ``gradle -q javaToolchains`` 命令查看系统中安装好的 JDK/JRE 环境，包括安装到缓存
   目录中、可自动检测到的版本。可以在 ``gradle.properties`` 配置 Gradle 的自动检测、自动下载：

      org.gradle.java.installations.auto-detect=false
      org.gradle.java.installations.auto-download=false

      org.gradle.java.installations.fromEnv=JDK8,JRE17
      org.gradle.java.installations.paths=/custom/path/jdk1.8,/shared/jre11

   文档参考 `JVM languages and frameworks`_ and Java Toolchains `Toolchains for JVM projects`_

.. _JVM languages and frameworks: https://docs.gradle.org/current/userguide/java_plugin.html
.. _Toolchains for JVM projects: https://docs.gradle.org/current/userguide/toolchains.html

   Java LSP 服务由 Language Supprot for Java(TM) by Red Hat 插件提供，可以在设置面板中
   启动调试信息追踪，java.trace.server 设置为 message 或者 verbose，然后在 Output 面板
   中选择 Language Supprot for Java 就可以看到 LSP 客户端运行状态信息。插件支持 Maven 或者
   Gradle 项目，会自动自动依赖模块的 API 文档，文档下载完成后才能看到相应模块的智能提示信息。

   参考以下 Kotlin 配置脚本 ``build.gradle.kts``，增加了 Kotlin 编译器（JVM 平台），
   同时改变入口类为 ``AppKt``，它对应 App.kt 源文件：

   .. code-block:: kotlin

      plugins {
          // Apply the application plugin to add support for building a CLI application in Java.
          application
          // https://github.com/openjfx/javafx-gradle-plugin
          id("org.openjfx.javafxplugin") version "0.0.8"
          kotlin("jvm") version "1.7.10"
      }

      javafx {
          version = "17"  // Specify JavaFX version
          modules("javafx.controls", "javafx.fxml")
          //configuration = "implementation" // set dependency scope
          //configurations("implementation", "testImplementation")
      }

      application {
          // Define the main class for the application.
          mainClass.set("hi_javafx.AppKt")
      }

   **注意配置入口类时，Kotlin 的编译机制与生成类名的关系，如果入口方法定义为代码 Top-Level，
   函数，那么对于 app.kt 代码文件而言，生成入口类就是 AppKt，不仅加 Kt 后缀，还大写字母开头，
   并且会根据包名生成目录。**

   Java 中强制 main() 入口函数必需为入口类的公开静态函数。Kotlin 简化作为代码文件的顶级函数，
   但是使用 @JvmStatic 标注在 JVM 虚拟机层面上做工作，以及使得伴随对象（companiion object），
   也可以将入口函数定义在一个类对象内部。只要代码文件没有定义顶级函数时，Kotlin 就不会生成文件名
   对应的类。

   鉴于以上逻辑，使用 class 关键字定义类型时，就不能使用和文件名对应的生成类形重名。注意，设置
   入口类，如果入口类名不匹配将导致执行程序时出现 java.lang.ClassNotFoundException 异常：

   .. code-block:: bash

      > tree app/build/classes
      app/build/classes
      ├── java
      │   └── main
      │       └── hi_javafx
      │           ├── App.class             # ====> src/main/java/hi_javafx/App.java
      │           └── FXMLController.class
      └── kotlin
          └── main
              ├── hi_javafx
              │   └── AppKt.class           # ====> src/main/kotlin/App.kt
              └── META-INF
                  └── app.kotlin_module

   根据构建配置脚本中使用到的 Kotlin 编译版本及平台差异，Gradle 会下载不同的文件到缓存目录中，
   可以在 MSYS2 环境使用以下命令查看当前缓存中的文件空间占用排行，如果有些 Kontlin 版本已经
   不再使用，就可以清理掉回收空间：

      du -hd 4 "$USERPROFILE\.gradle\caches" | sort -h

.. _S09: #S09

Gradle Project Init
-------------------

   Gradle 工程配置可能很复杂，出现问题需要用点策略来排除，基本策略是从简化到复杂依赖逐步解决：

   *  首先确定使用的 JDK 版本，选择兼容的 JavaFX 版本，并决定是否使用 Java 模块系统；
   *  先创建简单的非 Java 或者 Kotlin 模块项目，测试 Gradle 是否正常编译、运行项目；
   *  添加 JavaFX 等依赖模块，可逐个模块添加，以测试那个依赖模块、什么版本有兼容问题；
   *  如果编译出现问题，就要检查代码是否有问题，特别是 Kotlin 代码，注意清理旧缓存文件；

   Gradle 命令行与工程初始化参考：

   * Running Gradle Builds - `Initializing the Project`_
   * Authoring Gradle Builds - `Multi-Project Build Basics`_
   * Reference - `Command-Line Interface Reference`_
   * Reference - `Build Init Plugin`_

.. _Initializing the Project: https://docs.gradle.org/current/userguide/part1_gradle_init.html
.. _Multi-Project Build Basics: https://docs.gradle.org/8.7/userguide/intro_multi_project_builds.html
.. _Command-Line Interface Reference: https://docs.gradle.org/8.7/userguide/command_line_interface.html
.. _Build Init Plugin: https://docs.gradle.org/8.7/userguide/build_init_plugin.html

   Gradle 初始化命令是创建项目基本目录结构的快速且便利的方法，初始化命令可以创建多种项目，
   项目类型由 `Build Init Plugin`_ 提供，以下是内建初始化插件（Build init types）：
   
   =========================== ==================
    Type                       Description      
   =========================== ==================
   ``pom-maven-conversion``    Converts an existing Apache Maven build to Gradle
   ``basic``                   A basic, empty, Gradle build
   ``java-application``        A command-line application implemented in Java
   ``java-gradle-plugin``      A Gradle plugin implemented in Java
   ``java-library``            A Java library
   ``kotlin-application``      A command-line application implemented in Kotlin/JVM
   ``kotlin-gradle-plugin``    A Gradle plugin implemented in Kotlin/JVM
   ``kotlin-library``          A Kotlin/JVM library
   ``groovy-application``      A command-line application implemented in Groovy
   ``groovy-gradle-plugin``    A Gradle plugin implemented in Groovy
   ``groovy-library``          A Groovy library
   ``scala-application``       A Scala application
   ``scala-library``           A Scala library
   ``cpp-application``         A command-line application implemented in C++
   ``cpp-library``             A C++ library
   =========================== ==================

   .. code-block:: sh

      gradle init \
        --type java-application \
        --dsl kotlin \
        --test-framework junit-jupiter \
        --package my.project \
        --project-name my-project  \
        --no-split-project  \
        --java-version 17

      gradle help init
      gradle init --use-defaults --type java-application

   .. code-block:: sh

      #!/usr/bin/env bash

      mkdir AppKt
      cd AppKt
      gradle init --type kotlin-application --project-name AppKt
      gradle run
      gradle clean :app:run

      gradle help tasks
      gradle :app:run

      tree -fL 6 app
      gradle projects

      exit
      .
      ├── app
      │   ├── build
      │   ├── build.gradle.kts
      │   └── src
      ├── gradle
      │   ├── libs.versions.toml
      │   └── wrapper
      ├── gradlew
      ├── gradlew.bat
      └── settings.gradle.kts

      ------------------------------------------------------------
      Root project 'AppKt'
      ------------------------------------------------------------

      Root project 'AppKt'
      \--- Project ':app'

   命令行工具创建多模块项目，先创建子项目文件夹，再进入子项目目录执行项目初始化命令。然后修改顶级
   级的配置文件（settings.gradle.kts），使用 ``include`` 方法将子项目包含进来。之后，在项目
   根目录下就可以执行子项目相关的命令，使用 ``gradle projects`` 命令罗列项目结构。注意，子项目
   加入父项目后，父项目的设置就会影响到子项目。

   项目创建时默认使用 app 目录包含项目代码，也就是 Root project 包含了一个 ``app`` 子项目。
   多模块项目中，顶级项目包含一个包含子项目的全局配置文件，子项目只需要拥有自己的构建配置脚本。
   顶层项目的名称会记录在全局配置文件（rootProject）属性中，子项目名称则和使用 include 方法
   包含的目录名称一致。执行 Gradle 任务时，可用子项目作为前缀（``:app:run``）来限制任务范围。
   Gradle 没有命令直接往项目添加子模块，但可以使用初始化命令在子目录下创建项目，然后使用 API
   `Settings`_ 将项目内的 app 代码文件夹当作子模块包含进顶层项目，子项目对应的路径则通过
   ``project`` 方法指定：

   .. code-block:: kotlin

      // include two projects, 'foo' and 'foo:bar'
      // directories are inferred by replacing ':' with '/'
      include(['foo:bar'])

      // include one project whose project dir does not match the logical project path
      include(['baz'])
      project(':baz').projectDir = file('foo/baz')

      // include many projects whose project dirs do not match the logical project paths
      file('subprojects').eachDir { dir ->
        include([dir.name])
        project(":${dir.name}").projectDir = dir
      }

   参考以下 Java 或 Kotlin 应用项目的全局配置脚本（settings.gradle.kts）：

   * The ``settings.gradle.kts`` file should include all subprojects.
   * Each subproject should have its own ``build.gradle.kts`` file.

   .. code-block:: 

      plugins {
          // Apply the foojay-resolver plugin to allow automatic download of JDKs
          id("org.gradle.toolchains.foojay-resolver-convention") version "0.8.0"
      }

      rootProject.name = "AppKt"
      include("app")

   Gradle 7.0 引入新的管理依赖方式 Version Catalogs，此功能在最新 Gradle 版本已经稳定可用。
   参考文档：Working with Dependencies - Controlling Transitives - `Sharing Versions`_

.. _Sharing Versions: https://docs.gradle.org/current/userguide/platforms.html
.. _Settings: https://docs.gradle.org/current/dsl/org.gradle.api.initialization.Settings.html

   这是一种集中化的依赖管理方案，Catalogs 一词有分类、目录、范畴等多重含义，翻译为目录似乎也有歧义，
   官方文档定义 Version Catalog 是依赖项列表，作为依赖项协调呈现，用作构建脚本中声明的依赖项。
   从这一点解释，Version Catalog 勉强可以译作“”依赖目录”，但是和文件系统的目录一词又容易混用，
   译作“依赖条目”显然比“依赖目录”更恰当，语义也更清晰明了。大量中文社区翻译的文档使用的是人工智障
   翻译，出现了类似“依赖项列表”，“依赖项坐标”等等明显误导、损害原意的翻译。尽管文档中出现了
   coordinates 这样的词汇，它本身确实有坐标之含义，但是对理解 Gradle 依赖管理显然弊大于利。

   依赖条目可以配置在 ``settings.gradle(.kts)`` 文件，使用 GAV (group, artifact, version) 
   三元组信息结构表示。除了在 ``settings.gradle(.kts)`` 配置文件中直接声明依赖目录，官方更
   推荐使用 TOML 文件。Version Catalogs 集中式依赖管理特点如下：

   *  可统一管理项目所有子模块的依赖，并生成对应的类型安全的访问器，如：libs.coreKtx。
   *  依赖项可以声明为单个依赖条目，也可以组合为多个依赖项为分组（bundles）。
   *  支持版本号与依赖名分离，可以在多个依赖间共享版本号；
   *  支持在单独的 ``libs.versions.toml`` 文件中配置依赖；
   *  支持在项目间共享依赖；

   不同项目模板配置的依赖也不尽相同，如果构建脚本与配置依赖不协调，就会导致编译失败。初始化项目
   依赖是最少的，主要是 Junit Jupiter 测试框架，Java 和 Kotlin 依赖的模块稍有差别。对于支持
   多平台的 Kotlin 项目还会设置有对应平台的插件。参考以下 ``libs.versions.toml`` 配置文件，
   使用 Java/Kotlin 项目模板创建的默认配置，此处使用了 JVM 平台的插件支持：

   .. code-block::

      # This file was generated by the Gradle 'init' task.
      # https://docs.gradle.org/current/userguide/platforms.html#sub::toml-dependencies-format

      [versions]
      guava = "32.1.3-jre"

      # for Kotlin
      junit-jupiter-engine = "5.10.1"
      # for Java
      junit-jupiter = "5.10.1"

      [libraries]
      guava = { module = "com.google.guava:guava", version.ref = "guava" }

      # for Kotlin
      junit-jupiter-engine = { module = "org.junit.jupiter:junit-jupiter-engine", version.ref = "junit-jupiter-engine" }
      # for Java
      junit-jupiter = { module = "org.junit.jupiter:junit-jupiter", version.ref = "junit-jupiter" }

      [plugins]
      jvm = { id = "org.jetbrains.kotlin.jvm", version = "1.9.22" }

   Gradle Kotlin 项目模板默认的构建配置脚本参考（build.gradle.kts），为支持 Kotlin 语言，
   配置脚本中启用了 Kotlin 插件，此处启用了 JVM 平台的支持：

   .. code-block:: kotlin

      plugins {
          // Apply the org.jetbrains.kotlin.jvm Plugin to add support for Kotlin.
          // alias(libs.plugins.jvm)
          // kotlin("jvm") version "1.9.20"
          id("org.jetbrains.kotlin.jvm") version "1.9.20"

          // Apply the application plugin to add support for building a CLI application in Java.
          application
      }

      repositories {
          // Use Maven Central for resolving dependencies.
          mavenCentral()
      }

      dependencies {
          // Use the Kotlin JUnit 5 integration.
          testImplementation("org.jetbrains.kotlin:kotlin-test-junit5")

          // Use the JUnit 5 integration.
          testImplementation(libs.junit.jupiter.engine)

          testRuntimeOnly("org.junit.platform:junit-platform-launcher")

          // This dependency is used by the application.
          implementation(libs.guava)
      }

      // Apply a specific Java toolchain to ease working on different environments.
      java {
          toolchain {
              languageVersion = JavaLanguageVersion.of(21)
          }
      }

      application {
          // Define the main class for the application.
          mainClass = "hi_javafx.AppKt"
      }

      tasks.named<Test>("test") {
          // Use JUnit Platform for unit tests.
          useJUnitPlatform()
      }

   **注意配置入口类时，Kotlin 的编译机制与生成类名的关系，如果入口方法定义为代码 Top-Level，
   函数，那么对于 app.kt 代码文件而言，生成入口类就是 AppKt，不仅加 Kt 后缀，还大写字母开头。**

   启用 Kotlin 时注意版本，因为 Gradle 插件初始化项目时会自动下载 kotlin-compiler-embeddable
   编译器，文件较大，如果频繁切换 Kotlin 版本，会导致 Gradle 缓存目录占用大量空间。可以定时检查：

   du -hd 2 $USERPROFILE/.gradle/caches/ | sort -h

   非模块工程（Non-modular projects），根据 JavaFX 文档，只需向构建脚本添加 JavaFx 插件
   与及对插件设置，添加 JavaFX 模块依赖即可，以下为 Groovy 脚本：

   .. code-block:: sh

      plugins {
        id 'application'
        id 'org.openjfx.javafxplugin' version '0.1.0'
      }

      repositories {
          mavenCentral()
      }

      javafx {
          version = "21"
          modules = [ 'javafx.controls' ]
      }

      mainClassName = 'HelloFX'
.. _S10: #S10

JavaFX GUI Framework
---------------------

   但是，工程使用 Java 模块形式时，运行 JavaFX 程序就可能出现问题，不同版本 Java 版本输出
   错误信息也不同。这里使用编译器为 JDK 17（class file version 58.0）。低版本运行时不支持
   高版本 class 文件版本这容易确认，高版本 JDK 兼容低版本，可以运行低版本编译的类文件。但是
   同样的 Java 17 却提示缺失 JavaFX 运行时，其实已经打包到输出的 lib 目录 ：

   .. code-block:: sh

      > $env:JAVA_HOME="C:\jdk-17\" ; .\app\build\distributions\bin\app.bat      
      Error: JavaFX runtime components are missing, and are required to run this application

      > $env:JAVA_HOME="C:\jdk-14.0.2\" ; .\app\build\distributions\bin\app.bat  
      Error: LinkageError occurred while loading main class hi_javafx.AppKt
           java.lang.UnsupportedClassVersionError: hi_javafx/AppKt has been compiled by 
           a more recent version of the Java Runtime (class file version 61.0), this 
           version of the Java Runtime only recognizes class file versions up to 58.0

   JavaFX runtime 缺失问题通常是高版本 JDK 中，由于应用没有提供模块信息导致的，可以像以下
   命令行这样手动添加 ModulePath 以及 JavaFX 运行时模块。但是通过修改工程配置才最终解决方法，
   添加模块信息，使项目类型变成 Java Modules (JPMS) 。以及相当设置构建脚本中的依赖引用。因为
   项目使用 Kotlin，既需要配置 JavaFX，又需要配置 Kotlin 语言。构建 Java 模块又需要依赖
   Kotlin 标准模块，整个项目开发体验真的是烂透了！大概项目结构如此复杂的设计就是为了多卖周边。
   也因此需要翻看至少两份文档： `Kotlin Build Tools - Gradle`_ 文档和 Gradle 文档，
   也许还有 JDK 模块化和 JavaFX 文档或示范工程 https://github.dev/openjfx/samples 。

   JDK 8U302 不再捆绑 JavaFX，但是 JDK 8U201 仍然捆绑 ``jre/lib/ext/jfxrt.jar``。
   使用以下程序测试，JDK 8U201 捆绑的 JavaFX 构架，或者下载最新的版，配合使用最新 JDK。
   此代码不依赖 FXML 文档，直接通过代码组建一个简单的窗体。

   JavaFX 构架的顶级容器是 ``Stage`` 对象，它对应的是操作系统中的窗口，通过创建 Stage 实例
   就可以创建多个窗口。JavaFX 它由多个子组件组成，包括一个称为 Prism 的高性能图形引擎，一个小巧
   高效的窗口系统 Glass，一个媒体引擎和一个 Web 引擎。集成了 Java 2D、OpenGL、D3D 等开发接口。
   尽管这些组件没有公开暴露，但了它们的有助于更好地理解 JavaFX 应用程序的运行机制。

   低层的 API 会封装在动态链接库中，Maven 仓库中提供的 JAR 包本身包含了动态连接库。如果是官方
   下载到的 JavaFX 安装包，其实中就会单独在 bin 目录包含封装这些低层 API 的动态连接库。如果
   缺失这些 API 文件，程序运行就会出现类似以下的异常信息：

   .. code-block:: bash

      Graphics Device initialization failed for :  d3d, sw
      Error initializing QuantumRenderer: no suitable pipeline found
      java.lang.RuntimeException: java.lang.RuntimeException: 
         Error initializing QuantumRenderer: no suitable pipeline found
          at javafx.graphics/com.sun.javafx.tk.quantum.QuantumRenderer.getInstance(QuantumRenderer.java:283)
          ...
      Exception in thread "main" java.lang.reflect.InvocationTargetException
          ...
      Caused by: java.lang.RuntimeException: No toolkit found
          at javafx.graphics/com.sun.javafx.tk.Toolkit.getToolkit(Toolkit.java:280)

   .. figure:: https://docs.oracle.com/javase/8/javafx/get-started-tutorial/img/jfxar_dt_001_arch-diag.png

   UI 在窗口中的组织形式由 ``Scene`` 对象代表的 scene graph 表示，即 UI 控件的树状数据结构。
   场景对象通过舞台对象的 setScene 方法添加到窗口上，然后调用舞台的 show 方法显示 UI 图形。

   JavaFX 使用 MVVM 编程模式，视图与业务逻辑解耦，可以使用 FXML 标签文档来设计 UI。
   FXML 标签文档记录了 UI 组件的层次结构，Application 负责加载它并通过 Java 反射技术，
   将标签对就的节点的属性数据反向依赖注入类实例，并成为可运行程序的一部分。标签发展包含尺寸、
   布局、文字以及事件标记。例如，AnchorPane 要绑定一个控制器类（javafx.fxml.Initializable），
   就可以在 ``fx:controller`` 属性中填写相应的 Java/Kotlin 类型名称。

   FXML 中的节点对应的是 Java 代码定义的各种类型，可以是 JavaFX 构架自身的类型，也可以是用户
   定义的类型，Java 或 Kotlin 语言定义的类型都可以。FXML 只是通过标签结构存储属性数据而已，
   它本身就是字符格式的文本。例如，以下演示了一个 fxml 文档与对应的 MyClass 类型的联系：

   .. code-block:: java

      <?xml version="1.0" encoding="UTF-8"?>
      <?import hi_javafx.MyClass?>

      <MyClass value="The Value"/>
      
      <!-- ---------------------------------------- -->

      public MyClass 
      {
          public static MyClass valueOf(String value) 
          {
              return new MyClass(value);
          }

          private String value = null;

          public MyClass(String value) 
          {
              this.value = value;
          }
      }
   
   FXML 文档中包含以下几类数据：

   -  A class instance
   -  A property of a class instance
   -  A "static" property
   -  A "define" block
   -  A block of script code
   
   FXML 文档中的特性标签（Property Elements）：

   -  A property setter
   -  A read-only list property
   -  A read-only map property

   FXML 文档中可表示的各种属性（Attributes）：

   -  A property of a class instance
   -  A "static" property
   -  An event handler

   FXML 文档可以使用的特殊属性、标签：

   ================== ====================================================
   ``fx:id``          定义标签在文档中的 ID 编码，可用于引用、关联 Java 对象中的属性。
   ``fx:value``       用于初始化那些拥有 valueOf(Stirng) 静态方法的实例对象。
   ``fx:factory``     指定静态、无参数的工厂函数用于创建类型实例。
   ``fx:controller``  用于 root 标签关联一个 MVVM 控制器。
   ``<fx:constant>``  此标签创建一个类型的常量引用。
   ``<fx:include>``   此标签引用其它 FXML 文档。
   ``<fx:reference>`` 创建另一个标签的引用。
   ``<fx:copy>``      创建现有标签的副本。
   ``<fx:root>``      创建上一层定义的 root 标签的引用。
   ``<fx:define>``    在对象层级关系外创建对象，以待引用使用。
   ``<fx:script>``    定义 JVM 脚本块，支持 JavaScript, Groovy, Clojure 等等。
   ================== ====================================================

   所谓控制器（FXML Controller），就是 MVVM 编程模式约定的、用于控制 UI 的程序功能，因为解耦
   需要而独立形成的一个概念。控制器本身是一般的 Java 类型定义，结合元编程、反射技术、反向依赖注入，
   就可以将 FXML 文档中的标签属性填充到 Java 类实例对应的属性中，对应的属性或方法使用 @FXML
   进行标注。标注的目的就是为反射技术提供信息，以确定需要执行的处理工作。

   FXML 文档中的标签节点可以使用 ``fx:controller`` 属性绑定控制器，也可以在代码中加 FXML 
   (FXMLLoader) 后使用加载器的 ``setController`` 方法绑定控制器。例如，以下代码片段演示了
   如何使用 @FXML 标注来帮助反射技术绑定标签中设置的 ``onAction`` 事件到控制器上方法上。当然，
   FXML 支持脚本，可以直接填写代码：

   .. code-block:: java

      <VBox xmlns:fx="http://javafx.com/fxml" spacing="20"
         fx:controller="hi_javafx.FxmlController">
      <children>
          <Button fx:id="button1" text="Click me!" onAction="#buttonClicked"/>
      </children>
      </VBox>

      <!-- ---------------------------------------- -->

      import javafx.event.Event;
      import javafx.fxml.FXML;
      import javafx.scene.control.Label;

      public class FxmlController 
      {
          @FXML
          public void buttonClicked(Event e)
          {
              System.out.println("Button clicked");
          }
      }

   这种标注、绑定语法在 Java 上可以使用，Kotlin 语言上也可以使用。``@FXML`` 的意义就是在
   加载 FXML 文档后，解释各个节点的属性值，并将属性、标签对应的对像等等注入关联控制器上，使用 
   @FXML 标注过的属性上。所谓“注入”（Injects）就是反向依赖编程模式的一种术语，也就是设置对象
   的属性值。只不过这种设置方式比较特别：需要 @FXML 标记一个依赖外部数据的属性，以及从外部加载
   的数据，这里的 FXML 文档就是外部数据。类属性名称与 FXML 标签的 fx:id 属性产生关联。

   控制反转 IoC_ (Inversion of control) 技术是 Martin Fowler 教授提出的一种软件设计模式。

   Inversion of Control Containers and the Dependency Injection pattern

   .. _IoC: https://www.martinfowler.com/articles/injection.html


   复杂软件系统中，依赖是随处可见的，如果处理不好，那么程序各个零件之间的耦合程度极高，难以分解，
   会给软件的复用、扩展或维护造成极大问题。常规的依赖关系处理，如果 A 依赖 B，当 B 不可用或无效
   时就会造成 A 也无法使用，是就是正向依赖控制。反转依赖控制就是将依赖控制从 A 内部转换给 B。A
   只需要做好随时启用 B 的工作，至于 B 实际如下处理（被禁用、被移除）不关心。回到代码中的 @FXML，
   它表示对应的属性需要反射技术为它绑定一个数据（属性、对象），但是要不要绑定就交给反射程序去处理。

   当绑定的对象属性存在多个 FXML 数据时，就会在运行时出现 InvocationTargetException 异常。
   假设代码中使用 @FXML 标注要绑定一个数据，但是 FXML 文档又找不到相应的数据（依赖缺失），那么
   编译时就会给出错误信息，指示缺失依赖的数据：

   .. code-block:: bash

      FXMLController.java:16: error: cannot find symbol
          private Button button;
                  ^
        symbol:   class Button
        location: class FXMLController

   控制器可以选择实现初始化接口 Initializable（Controller initialization interface），
   它只包含一个会在 root 节点完全处理扣执行的初始化方法，参数接收有二：

   * public void initialize(URL location, ResourceBundle resources);
   * @param location 相对 root 对象文件的路径，可能是 null 表示未知位置；
   * @param resources 用于 root 对象本地化 (localize) 的资源，可能是 null 表示未可本地化；

   因为参数可为 null，Java 语言中没有区分参数是否可以为 null 的表达形式。但是使用 Kotlin 语言
   实现接口时，就要使用 Nullable 形式声明参数，否则就会导致以下运行时异常：

      override fun initialize(url: URL?, bundle: ResourceBundle?)

      Caused by: java.lang.NullPointerException: 
         Parameter specified as non-null is null: 
         method hi_javafx.FXMLControllerKt.initialize, parameter bundle
          at hi_javafx/hi_javafx.FXMLControllerKt.initialize(FXMLController.kt)
          at javafx.fxml/javafx.fxml.FXMLLoader.loadImpl(FXMLLoader.java:2655)

   JavaFx 提供了众多的布局容器（Container），也支持响应式的布局。例如，BorderPane 布局 
   支持视图的五分区分割，中间部分为主，四边只占据其 UI 控件所需的最小空间。当窗口大小调整后，
   默认状态下容器整体所占大小区域还是保持初始值，并不会主动适应窗口变化。设置基本尺寸基础上，
   prefHeight 和 prefWidth 属性，再配合 maxHeight 和 maxWidth 属性的 "Infinity"
   无限值方式即可以实现响应式布局：

   =============== ====================================================
   ``Pane``        基础容器，代表一个放置 UI 控件的平面区域。
   ``BorderPane``  分界布局，分割出 top/right/bottom/left/center 5 个区域。
   ``HBox``        水平布局，水平排列控件，不换行。
   ``VBox``        垂直布局，竖起排列控件，不换列。
   ``FlowPane``    流式布局，HBox + VBox 整合，可设置一个方向排列 UI 控件。
   ``GridPane``    方格布局，支持 UI 控件跨行、跨列分布。
   ``AnchorPane``  锚点布局，通过设置一个控件的 Anchor 来改变位置。
   ``Accordion``   卷帘布局，点击卷帘按钮时收起或展示内容。
   ``ScrollPane``  滚动布局，支持滚动显示内容，带有滚动条的容器。
   ``StackPane``   堆栈布局，UI 控件堆叠放置，使用绝对定位调整位置。
   ``TabPane``     标签而已，使用标签页分组放置 UI 控件，点击标签切换显示。
   =============== ====================================================

   可视化设计工具及教程文档参考：

   *  `Scene Builder`_ and `Scene Builder Wiki`_
   *  `Getting Started with JavaFX`_ 
   *  `JavaFX Tutorial`_ by akob Jenkov
   *  `FXGL - JavaFX Game Library`_

.. _Getting Started with JavaFX: https://docs.oracle.com/javase/8/javafx/get-started-tutorial/index.html
.. _JavaFX Tutorial: https://jenkov.com/tutorials/javafx/index.html
.. _Scene Builder Wiki: https://github.com/gluonhq/scenebuilder/wiki/Basic-JavaFX-project-with-Scene-Builder
.. _Scene Builder: https://gluonhq.com/products/scene-builder
..  _FXGL - JavaFX Game Library: https://github.dev/AlmasB/FXGL

   /BMApp.java

   .. code-block:: bash

      import javafx.application.Application;
      import static javafx.application.Application.launch;
      import javafx.fxml.FXMLLoader;
      import javafx.scene.Parent;
      import javafx.scene.Scene;
      import javafx.scene.control.Label;
      import javafx.scene.layout.StackPane;
      import javafx.stage.Stage;

      public class BMApp extends Application 
      {
          @Override
          public void start(Stage stage) throws Exception {
              // Parent root = FXMLLoader.load(getClass().getResource("/fxml/Scene.fxml"));
              String javer = System.getProperty("java.version");
              String fxver = System.getProperty("javafx.version");
              Label label = new Label("JavaFx "+fxver+" at Java "+javer);

              Scene scene = new Scene(root, 640, 240);
              // scene.getStylesheets().add("/styles/Styles.css");
              stage.setTitle(STYLESHEET_CASPIAN);
              
              stage.setTitle("JavaFX with Java");
              stage.setScene(scene);
              stage.show();
          }

          public static void main(String[] args) {
              launch(args);
          }
      }

   /fxml/Scene.fxml

   .. code-block:: bash

      <?xml version="1.0" encoding="UTF-8"?>

      <?import java.lang.*?>
      <?import java.util.*?>
      <?import javafx.scene.control.Button?>
      <?import javafx.scene.control.Label?>
      <?import javafx.scene.layout.BorderPane?>
      <?import javafx.scene.layout.HBox?>
      <?import javafx.scene.layout.StackPane?>

      <BorderPane id="root" 
          maxHeight="Infinity" maxWidth="Infinity" 
          prefHeight="200" prefWidth="320" 
          xmlns="http://javafx.com/javafx/21" 
          xmlns:fx="http://javafx.com/fxml/1" 
          fx:controller="hi_javafx.FXMLController">
        <center>
          <StackPane prefHeight="200.0" prefWidth="320.0" BorderPane.alignment="CENTER">
            <children>
              <Button fx:id="button" onAction="#handleButtonAction" text="Try Click Me!" />
            </children>
          </StackPane>
        </center>
         <bottom>
            <HBox alignment="CENTER">
               <children>
                  <Label fx:id="label" />
               </children>
            </HBox>
         </bottom>
      </BorderPane>


   .. code-block:: bash

      $JAVA_HOME/bin/java -version
      BUNDLED=C:/jdk1.8.0_202/jre/lib/ext/jfxrt.jar;
      SDK=C:/javafx-sdk-17.0.11/lib/
      MODULES=javafx.controls,javafx.fxml

      JAVA_HOME=C:/JDK1.8u302
      JAVA_HOME=C:/JDK1.8.0_202
      $JAVA_HOME/bin/javac -classpath "$SDK" BMApp.java
      $JAVA_HOME/bin/java BMApp -classpath "$SDK"

      JAVA_HOME=C:/JDK-17
      $JAVA_HOME/bin/javac --module-path "$SDK" --add-modules $MODULES BMApp.java
      $JAVA_HOME/bin/java --module-path "$SDK" --add-modules $MODULES BMApp

   如果 JDK 版本与 JavaFX 版本不兼容，比如 JDK1.8u302 编译器使用 JavaFX 17 编译时就会报告
   各种类型找不到的错误消息：

      error: package javafx.application does not exist

   直接在命令行中运行 Kotlin 编译输出的类文件时，如果未指定 Kotlin 运行时就会出现以下错误：

   .. code-block:: bash

      Java HotSpot(TM) 64-Bit Server VM (build 17.0.8+9-LTS-211, mixed mode, sharing)
      java.lang.reflect.InvocationTargetException
          at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
          ...
      Caused by: java.lang.NoClassDefFoundError: kotlin/jvm/internal/Intrinsics
          at hi_javafx.App$Companion.main(App.kt)
          at hi_javafx.App.main(App.kt)
          ...
      Caused by: java.lang.ClassNotFoundException: kotlin.jvm.internal.Intrinsics

   `Intrinsics`_ 是 Kotlin 内部类，可以在编译器附带的标准库或者在 Gradle 缓存文件中找到。
   **注意，要求和类文件使用的 Kotlin 编译器同版本捆绑的标准库，如果版本不一致也会导致以上错误。**

   .. _Intrinsics: https://vscode.dev/github/JetBrains/kotlin/blob/master/libraries/stdlib/jvm/runtime/kotlin/jvm/internal/Intrinsics.java

   .. code-block:: bash

      for it in $(find /c/kotlin/kotlinc/lib/*); do
          echo $it
          7z l $it | grep kotlin.jvm.internal.Intrinsics
      done

      find $USERPROFILE/.gradle/caches | grep /kotlin-stdlib-1.9.20.jar

      /c/kotlin/kotlinc/lib/kotlin-stdlib-sources.jar
      1980-02-01 00:00:00 .....         9980         1961  jvmMain\kotlin\jvm\internal\Intrinsics.java
      /c/kotlin/kotlinc/lib/kotlin-stdlib.jar
      1980-02-01 00:00:00 .....          475          306  kotlin\jvm\internal\Intrinsics$Kotlin.class
      1980-02-01 00:00:00 .....         9086         3612  kotlin\jvm\internal\Intrinsics.class

.. _S11: #S11

Java Module Project
--------------------

   Java 9 引入 Java Platform Module System (JPMS)，增加了模块信息（module-info.java）
   用于描述模块（Module Descriptor），此文件包含以下内容及关键字：

   ========================  ============================
   ``module``                - Module name
   ``requires``              - Dependencies
   ``exports``               - Exported packages
   ``uses`` or ``provides``  - Used and provided services
   ``open`` or ``opens``     - Reflection Permissions
   ========================  ============================

   ``opens`` 用来指定开放可使用反射功能的包，可指定 public 类型以直接访问，其他类型可反射。
   ``open`` 用来指定开放模块以允许公开访问，public 修饰的可以直接引用，其他可反射。

   例如，JavaFX GUI 编程中，@FXML 标注就需要使用反射，应用程序中就需要将自身的反射权开放：

   .. code-block:: java

      open module com.pack.lib {
          opens com.pack.app to javafx.fxml
          exports com.pack.lib;
      }

   Module System Benefits

   *  strong encapsulation
   *  reliable configuration
   *  scalable platform

   随模块系统加入的 Java 命令行参数说明如下：

   ============== ====================================================
   module-path    – To specify the module path list of directories that contain your modules.
   add-reads      – The command line ``requires`` directive.
   add-exports    – Command line replacement for the exports directive.
   add-opens      – Replace the open clause in the module declaration file.
   add-modules    – Adds the list of modules into the default set of modules
   list-modules   – Prints a list of all modules and their version strings
   patch-module   – Add or override classes in a modules
   illegal-access - [permit(default)|warn|deny] – Either relax strong encapsulation by warning or fails with errors.
   ============== ====================================================

   模块可以分为以下几种类型（Module Types）：

   ======================= ====================================================
   **System Modules**       – Java SE 和 JDK 内置模块，可以使用 list-modules 命令罗列出来；
   **Application Modules**  – 应用模块，名称与定义在 JAR 包顶级目录中的 module-info.class；
   **Automatic Modules**    – 自动模块，模块名称自动命名为 JAR 名称，之间完全公开访问。
   **Unnamed Module**       – 无名模块，兼容旧版用途，经由 classpath 加载的类或 JAR，而非经由 module path 加载。
   ======================= ====================================================

.. _jlink: https://docs.oracle.com/en/java/javase/15/docs/specs/man/jlink.html
.. _org.beryx.jlink: https://badass-jlink-plugin.beryx.org/releases/latest/
.. _JlinkTask: https://github.com/beryx/badass-jlink-plugin/blob/master/src/main/groovy/org/beryx/jlink/JlinkTask.groovy
.. _A Guide to Java Modularity: https://www.baeldung.com/java-modularity
.. _Tutorials of Modules: https://dev.java/learn/modules/

   这里假定项目使用 Kotlin 作为配置脚本语言，模块及构建脚本配置参考如下，根据使用到的依赖调整。
   JDK 自带模块生成工具 `jlink`_ ，Gradle 项目对应有插件 `org.beryx.jlink`_ 。启用插件，
   并配置入口模块。

   以下是 Java 模块信息文件，``src/main/java/module-info.java``，注意代码文件存放的位置，
   应该在源代码的顶层目录，否则编译时将报告：Project :app => no module-info.java found。
   模块信息编译后会打包到 JAR 文档的根目录下存放。模块信息声明的依赖需要和 Gradle 构建脚本中
   配置的依赖相符合，否则编译时就会找不到相应的模块。

   .. code-block:: java

      module hi_javafx {
          requires kotlin.stdlib;
          requires javafx.controls;
          requires javafx.fxml;
          requires javafx.web;
          requires transitive javafx.graphics;

          // requires org.controlsfx.controls;
          // requires com.dlsc.formsfx;
          // requires net.synedra.validatorfx;
          // requires org.kordamp.ikonli.javafx;
          // requires org.kordamp.bootstrapfx.core;
          // requires eu.hansolo.tilesfx;
          // requires com.almasb.fxgl.all;

          opens hi_javafx to javafx.fxml;
          exports hi_javafx;
      }

   以下是启用 Kotlin 语言以及 Java 模块打包的构建脚本参考（build.gradle.kts），为支持 Java
   模块打包启用了 ``jlink`` 插件并配置了对应的任务。添加了应用程序插件的 ``mainModule`` 属性，
   它会在运行程序时设置 --module-path 添加模块路径。执行 ``gradle jar`` 命令打包后，输出 JAR
   文件根目录含有 ``module-info.class`` 文件。可用 ``javap`` 命令反字节码得到模块定义信息。

   .. code-block:: java

      plugins {
          // Apply the org.jetbrains.kotlin.jvm Plugin to add support for Kotlin.
          // alias(libs.plugins.jvm)
          // kotlin("jvm") version "1.9.20"
          id("org.jetbrains.kotlin.jvm") version "1.9.20"

          // https://github.com/openjfx/javafx-gradle-plugin
          id("org.openjfx.javafxplugin") version "0.0.13"

          id("org.javamodularity.moduleplugin") version "1.8.12"
          id("org.beryx.jlink") version "2.25.0"

          // Apply the application plugin to add support for building a CLI application in Java.
          application
      }

      repositories {
          // Use Maven Central for resolving dependencies.
          mavenCentral()
      }

      javafx {
          version = "17"  // Specify JavaFX version
          modules ("javafx.controls", "javafx.fxml", 
                   "javafx.web", "javafx.swing" , "javafx.media")
          
          //configuration = "implementation" // set dependency scope
          //configurations("implementation", "testImplementation")
      }

      jlink {
          // options = ['--strip-debug', '--compress', '2', '--no-header-files', '--no-man-pages']
          launcher {
              name = "hi_javafx"
          }
      }

      dependencies {

          // Use the Kotlin JUnit 5 integration.
          testImplementation("org.jetbrains.kotlin:kotlin-test-junit5")

          // Use the JUnit 5 integration.
          testImplementation(libs.junit.jupiter.engine)

          testRuntimeOnly("org.junit.platform:junit-platform-launcher")

          // This dependency is used by the application.
          implementation(libs.guava)

          implementation("org.jetbrains.kotlin:kotlin-stdlib:1.9.20")

          // implementation("org.controlsfx:controlsfx:11.1.2")
          // implementation("com.dlsc.formsfx:formsfx-core:11.6.0") {
          //     exclude(group = "org.openjfx")
          // }
          // implementation("net.synedra:validatorfx:0.4.0") {
          //     exclude(group = "org.openjfx")
          // }
          // implementation("org.kordamp.ikonli:ikonli-javafx:12.3.1")
          // implementation("org.kordamp.bootstrapfx:bootstrapfx-core:0.4.0")
          // implementation("eu.hansolo:tilesfx:11.48") {
          //     exclude(group = "org.openjfx")
          // }
          // implementation("com.github.almasb:fxgl:17.3") {
          //     exclude(group = "org.openjfx")
          //     exclude(group = "org.jetbrains.kotlin")
          // }
      }

      // Apply a specific Java toolchain to ease working on different environments.
      java {
          toolchain {
              languageVersion = JavaLanguageVersion.of(17)
          }
      }

      application {
          // Define the main class for the application.
          mainClass = "hi_javafx.App"
          mainModule.set("hi_javafx")
      }

      tasks.named<Test>("test") {
          // Use JUnit Platform for unit tests.
          useJUnitPlatform()
      }

   执行 Gradle 编译编译、打包命令生成可执行 Java 程序，参考以下脚本直接使用 Java 命令运行程序，
   Kotlin 标准库根据编译时使用的版本引用相应的 kotlin-stdlib.jar 文件。如果编译器使用的是手动
   安装的 Kotlin 版本，可以将其 kotlinc/lib 目录下的所有库文件添加到 -cp 路径列表中。另外，
   同样也要注意 JavaFX 二进制文件所所用的 Java 编译器版本，只有版本匹配才能正常运行程序。以下
   脚本中，可以根据需要调整是优先使用构建输出的 build/classes 还是 build/lib 中的 JAR 包：

   .. code-block:: bash

      gradle clean jar

      LIBS=$(find "C:/kotlin/kotlinc/lib" -follow -type f -path "*/*.jar" | sed -n 'p; a ;')
      BUNDLED=C:/jdk1.8.0_202/jre/lib/ext/jfxrt.jar;
      SDK="C:/javafx-sdk-17.0.11/lib/"
      MODULES=javafx.controls,javafx.fxml
      CPBUILD="app/build/classes/kotlin/main/;app/build/classes/java/main/;app/build/resources/main;"
      CPJAR="app/build/libs/appFX.jar"
      CLASSPATH="$CPJAR;$CPBUILD;$USERPROFILE/.gradle/caches/modules-2/files-2.1/org.jetbrains.kotlin/kotlin-stdlib/1.9.20/e58b4816ac517e9cc5df1db051120c63d4cde669/kotlin-stdlib-1.9.20.jar"

      $JAVA_HOME/bin/java -version
      $JAVA_HOME/bin/java --module-path "$SDK" --add-modules $MODULES -cp "$CLASSPATH" hi_javafx.App

      # find $USERPROFILE/.gradle/caches | grep /kotlin-stdlib-1.9.20.jar

      function findIntrinsics()
      {
          for it in $(find /c/kotlin/kotlinc/lib/*); do
              echo $it
              7z l $it | grep kotlin.jvm.internal.Intrinsics
          done
      }

   启用模块机制后，构建过程可以出现一些“奇怪”的错误，比如 ``gradle :appFX:build`` 命令输出
   以下两组错误信息，测试用例的源代码编译出错：

   .. code-block:: bash
      :class: vscode

      > Configure project :appFX
      Project :appFX => 'hi_javafx' Java module

      > Task :appFX:compileTestJava FAILED
      error: cannot access module-info
        bad class file: build\classes\merged\module-info.class
          class file has wrong version 65.0, should be 61.0
          Please remove or make sure it appears in the correct subdirectory of the classpath.

   .. code-block:: bash

      // Apply a specific Java toolchain to ease working on different environments.
      java {
          toolchain {
              languageVersion = JavaLanguageVersion.of(21)
          }
      }

   导致 class file version 问题一个原因是中途修改 Java 工具链，导致构建缓存文件中存在不同
   的类文件版本，进而导致构建失败。只需要 ``gradle clean`` 清理掉缓存文件，再重新构建即可。

   注意 ``hi_javafx`` 是根项目的名称，也就是 settings.gradle.kts 配置脚本中指定的名称
   （rootProject.name）。执行其中一个 ``compileTestJava`` 编译任务时，却将其当作模块。
   既是测试用例导致的编译错误，那就检查测试代码，修改错误代码后再重新编译，只是错误消息较奇怪。
   默认使用的 Jupiter Test 构架也无法测试 GUI，它通常用于 API 测试。图形应用的测试应该使用
   TestFX、FEST Swing、Robot 等等测试框架。

   .. code-block:: bash
      :class: sublime

      > Configure project :appFX
      Project :appFX => 'hi_javafx' Java module

      > Task :appFX:compileTestKotlin NO-SOURCE

      > Task :appFX:compileTestJava FAILED
      error: module not found: hi_javafx
      1 error

   模块系统无法区分生产代码和测试代码，如果主程序源代码和测试源代码视为不同的模块，必须将主程序包
   从主模块导出到测试模块，并在测试模块中引入需要依赖包。如果为测试代码也定义为一个模块，则会因为
   测试包同时存在于两个模块中，导致 module layer 初始化异常。不定义模块又有找不到模块的异常，
   这似乎是互相矛盾的死区。尝试将测试模块也定义为相同的模块名称，内容留空，竟然也可以编译执行测试。
   但这种操作显然是不合规范的，因为一个 App 只能是一个模块，测试代码中添加的 module-info.java
   和另一个至少有一个会在编译输出时被覆盖掉（build/classes/merged）：

   .. code-block:: bash

      > Task :appFX:test FAILED
      WARNING: module-info.class ignored in patch: build\classes\java\test
      Error occurred during initialization of boot layer
      java.lang.LayerInstantiationException: 
         Package hi_javafx_test in both module hi_javafx and module hi_javafx_test
   
   尝试在测试代码中引用 JavaFX 却引发"依赖包不存在"以及找不到符号的错误，主程序代码显然可用：

   .. code-block:: bash

      > Task :appFX:compileTestJava FAILED
      src\test\java\hi_javafx\AppTest.java:8: error: package javafx.stage does not exist
      import javafx.stage.Stage;
                         ^
      src\test\java\hi_javafx\AppTest.java:12: error: cannot find symbol
              new MainApp().start( new Stage() );
                                       ^
        symbol:   class Stage
        location: class AppTest

   值得留意的是 LSP 提供的智能提示分别显示 Stage 等类型处于不可访问状态：

      Java LSP:
      "The type javafx.stage.Stage is not accessible" Java(16778666)

      Kotlin LSP:
      Symbol is declared in unnamed module which is not read by current module

   一个临时解决办法就是不在 Kotlin 项目中使用 Java 编写测试代码，改用 Kotln 测试：

   .. code-block:: java

      package hi_javafx;

      import org.junit.jupiter.api.Test;
      import static org.junit.jupiter.api.Assertions.*;
      // import javafx.stage.Stage;

      class AppTest {
          @Test void appHasAGreeting() throws Exception {
              // new MainApp().start( new Stage() );
              assertNotNull("void", "app show a GUI window.");
          }
      }

   .. code-block:: kotlin

      package hi_javafx

      import org.junit.jupiter.api.Test
      import org.junit.jupiter.api.Assertions.*
      // import kotlin.test.Test
      // import kotlin.test.assertNotNull
      // import javafx.stage.Stage

      class AppTestKt 
      {
          @Test fun appHasATest() 
          {
              // MainApp().start( Stage() );
              MainApp.main(emptyArray())
              assertNotNull("void", "app show a GUI window.");
          }
      }

   为了避免两个同类名的测试用例相互覆盖，另一个使用了 AppTestKt 名称作为区别。

   测试代码中访问 JavaFX 框架类型时，测试报告显示异常： NoClassDefFoundError。这是因为
   JavaFX Gradle 插件默认配置并不会在运行测试时添加依赖模块。即使按官方手册配置好测试运行时依赖
   (Dependency scope)，但是 Gradle 8.7 也不能通过编译，告知构建脚本有错误，configureClosure
   接收的参数过多。不知到是否 Gradle 版本过高，通过查询插件源代码，测试代码中最高为 Gradle 8.3。
   另外，找到相近的 ``setConfigurations(String[])`` 方法，尝试数组赋值也不能通过脚本检查。
   似乎插件并没有为测试使用 JavaFX 作准备，Gradle 一套配置还需要用户去翻插件源代码也是厉害了，
   看样子就肯定是折磨了一大批人：

   https://github.com/openjfx/javafx-gradle-plugin/blob/master/src/main/java/org/openjfx/gradle/JavaFXOptions.java#L139

   .. code-block:: bash

      javafx {
          version = "17"  // Specify JavaFX version
          sdk = "c:/javafx-sdk-17.0.11" // Set local JavaFX SDK
          modules ("javafx.controls", "javafx.fxml", 
                   "javafx.web", "javafx.swing" , "javafx.media")
          // configuration = "compileOnly" // set dependency scope
          // configurations ("implementation", "testImplementation")
          // configurations.add("testImplementation")
      }

   Kotlin 编写的测试代码会引起以下异常，程序定义的模块没有访问 kotlin.test 模块的权力。虽然，
   测试断言已声明在测试代码中（unnamed module），但是此模块并未许可访问 kotlin.test 模块：

      java.lang.IllegalAccessError: 
      class hi_javafx_test.AppTestKt (in module hi_javafx) 
      cannot access class kotlin.test.AssertionsKt (in module kotlin.test) 
      because module hi_javafx does not read module kotlin.test

   可能原因是 Kotlin 测试库并未做好 Java 模块系统的支持。解决办法有二：不要使用 Java 模块，
   或者使用 Junit Jupiter API 替代 Kotlin 包装的 API。

   程序代码（Java/Kotlin）参考列表如下：

   *  src/main/java/App.java
   *  src/main/java/FXMLController.java
   *  src/main/kotlin/FXMLController.kt
   *  src/main/kotlin/App.kt

   src/main/java/App.java

   .. code-block:: java

      package hi_javafx;

      import javafx.application.Application;
      import static javafx.application.Application.launch;
      import javafx.fxml.FXMLLoader;
      import javafx.scene.Parent;
      import javafx.scene.Scene;
      import javafx.stage.Stage;


      public class App extends Application {

          @Override
          public void start(Stage stage) throws Exception {
              Parent root = FXMLLoader.load(getClass().getResource("/fxml/Scene.fxml"));
              
              Scene scene = new Scene(root);
              scene.getStylesheets().add("/styles/Styles.css");
              // stage.setTitle(STYLESHEET_CASPIAN);
              
              stage.setTitle("JavaFX and Maven");
              stage.setScene(scene);
              stage.show();
          }

          /**
           * The main() method is ignored in correctly deployed JavaFX application.
           * main() serves only as fallback in case the application can not be
           * launched through deployment artifacts, e.g., in IDEs with limited FX
           * support. NetBeans ignores main().
           *
           * @param args the command line arguments
           */
          public static void main(String[] args) {
              launch(args);
          }

      }

   src/main/java/FXMLController.java

   .. code-block:: java

      package hi_javafx;

      import java.net.URL;
      import java.util.ResourceBundle;
      import javafx.event.ActionEvent;
      import javafx.fxml.FXML;
      import javafx.fxml.Initializable;
      import javafx.scene.control.Label;

      public class FXMLController implements Initializable {
          
          @FXML
          private Label label;
          
          @FXML
          private void handleButtonAction(ActionEvent event) {
              System.out.println("You clicked me!");
              label.setText("Hello World!");
          }
          
          @Override
          public void initialize(URL url, ResourceBundle rb) {
              // TODO
          }    
      }


   src\main\resources\fxml\Scene.fxml

   .. code-block:: kotlin

      <?xml version="1.0" encoding="UTF-8"?>

      <?import java.lang.*?>
      <?import java.util.*?>
      <?import javafx.scene.*?>
      <?import javafx.scene.control.*?>
      <?import javafx.scene.layout.*?>

      <AnchorPane id="AnchorPane" prefHeight="200" prefWidth="320" 
          xmlns:fx="http://javafx.com/fxml" 
          fx:controller="hi_javafx.FXMLControllerKt">
          <children>
              <Button layoutX="126" layoutY="90" text="Click Me!" onAction="#handleButtonAction" fx:id="button" />
              <Label layoutX="126" layoutY="120" minHeight="16" minWidth="69" fx:id="label" />
          </children>
      </AnchorPane>


   src/main/kotlin/FXMLController.kt

   .. code-block:: kotlin

      package hi_javafx

      import java.net.URL
      import java.util.ResourceBundle
      import javafx.event.ActionEvent
      import javafx.fxml.FXML
      import javafx.fxml.Initializable
      import javafx.scene.control.Label
      import javafx.scene.control.Button

      class FXMLControllerKt () : Initializable
      {

          @FXML 
          lateinit private var label: Label

          @FXML
          lateinit private var button: Button

          @FXML
          @Suppress("UNUSED_PARAMETER")
          private fun handleButtonAction (event: ActionEvent)
          {
              System.out.println("Button was clicked!")
              label.setText("Hello JavaFX with Kotlin")
          }

          override 
          fun initialize(url: URL?, bundle: ResourceBundle?) 
          { 
              System.out.println("url: $url, bundle: $bundle")
          }
      }

   src/main/kotlin/App.kt

   .. code-block:: kotlin

      package hi_javafx;

      import javafx.application.Application
      import javafx.application.Application.launch
      import javafx.fxml.FXMLLoader
      import javafx.scene.Parent
      import javafx.scene.Scene
      import javafx.stage.Stage
      import javafx.scene.control.Label
      import javafx.scene.layout.StackPane
      import java.net.URL


      class AppVer : Application ()
      {
          override
          fun start(stage: Stage)
          {
             val javaVer: String = System.getProperty("java.version")
             val fxVer: String = System.getProperty("javafx.version")
             val lab: Label = Label("JavaFX " + fxVer + " runs on Java " + javaVer)
             val scene: Scene = Scene(StackPane(lab), 640.0, 480.0)
             stage.setScene(scene)
             stage.show()
          }
      }


      class App : Application ()
      {
          override 
          fun start(stage: Stage) 
          {
              var fxml: URL = App::class.java.getResource("/fxml/Scene.fxml")
              var root : Parent = FXMLLoader.load(fxml)

              var scene: Scene = Scene(root)
              scene.getStylesheets().add("/styles/Styles.css")

              stage.setTitle("JavaFX with Gradle and Kotlin")
              stage.setScene(scene)
              stage.show()
          }

          companion object
          {
              @JvmStatic
              @Suppress("UNUSED_PARAMETER")
              fun main(args: Array<String>) 
              {
                  println("Hello JavaFX App"  )
                  // launch( AppVer::class.java )
                  Application.launch( App::class.java, *args )
              }
          }
      }


.. _S12: #S12

/🟡Debugging and Debuginfo
==========================

   Sep 9, 1947 CE: World’s First Computer Bug

   1947 年 9 月 9 日，地点位于马萨诸塞州剑桥市的哈佛大学（Harvard University），第一代程序媛
   Hopper 正领着她的小组在一间一战时建造的老建筑机房里构造一个称为 “Mark II” 的艾肯中继器计算机。
   团队发现，他们的 Mark II 始终存在错误，操作人员在电板编号为 70 的中继器触点旁发现了一只飞蛾。
   操作员把飞蛾贴在操作日志上，并写下了“First actual case of bug being found”，他们还提出
   了一个词：“debug”，调试，表示他们已经从机器上移走了 bug（调试了机器）。然而，这个"bug"就是
   字面上的一个虫子，当时一名团队成员在日志中写道“First actual case of bug being found”。

   .. figure:: https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638888858/EducationHub/photos/computer-bug.jpg
      :target: https://education.nationalgeographic.org/resource/worlds-first-computer-bug/

   在 2006 年前的 IE 时代，调试 JavaScript 代码主要靠 window.alert() 或者将调试信息输出
   到页面上，这种硬 debug 的手段，不亚于系统底层开发，效率极低。2006 年 1 月份，Apple WebKit
   团队第一版本的 Web Inspector 问世，尽管最初版的调试工具很简陋（它甚至连 console 都没有），
   但是它为开发者展示了两个他们很难洞见的内容 —— DOM 树以和与之匹配的样式规则，奠定 Web 调试
   工具的原型。同时开源社区出现 Firefox Firebug 插件，专注于 Web 开发的调试，它是最好用的
   前端调试工具，同时也奠定了现代 DevTools 的 Web UI 的布局。

   Google 团队基于 WebKit 加入浏览器研发，他们推出的 Chrome 以「安全、极速、更稳定」吸引了大部分
   开发者的关注，同时在开发者工具这方面，Google 吸收多款调试工具的优秀功能，推出了 DevTools。

   调试器基本功能就让目标程序在开发者期待的位置中断运行并提供信息用于分析问题。现代多数开发工具都
   集成了调试功能，这种基于图形界面的调试手段比起直接操作命令行要方便得多。数量众多的开发工具集成
   众多语言的调试工具也是个不小的问题，为了统一调试协议接口，微软制定了 Debug Adaptor Protocol
   通用调试协议，目前已经成为了社区的事实标准。

   调试信息是提升调试体验的有效手段，通过编译器、解释器收集到与源代码相关的一些要点信息，比如
   数据类型、变量值、源代码位置以及变量符号位置等等，位置信息可以包括源代码文件路径、行号、列号。

   Node.js 或浏览器环境中的 JavaScript 脚本调试可以使用 `Chrome DevTools Protocol`_。
   编辑器要实现 Debug Client 部分，以及 Debug Client 与 IDE 的视图进行联动，就可以实现
   基于图形操作的的可视化调试工具。

   .. code-block:: bash

      |                                     +-----------------+
      |                                     |  Node Program   |
      |                                     +---------+-------+
      |                                               ^
      |                                               |
      |  +-----------------+                +---------+-------+
      |  |  Chrome Devtool |                | Node.js Debugger|
      |  +--------+--------+                +---------+-------+
      |           |                                   ^
      |           |                                   |
      |         CRDP                                 V8DP
      |           |      +-------------------+        |
      |           +----->+   node inspector  +--------+
      |                  +-------------------+
      |
      |  CRDP: Chrome Remote Debugging Protocol
      |  V8DP: V8 Debugging Protocol
      |
      |
      |  +-----------------+        +----------------+
      |  |                 |        |                |
      |  |      IDE        |        |  Node Program  |
      |  |      +----------+---+    |           +----+------+
      |  +------| Debug Client |    +-----------+  Debugger |
      |         +----------+---+                +-----+-----+
      |                    |                          ^
      |                    |            CRDP          |
      |                    +--------------------------+

   实现一个 Debug Client 其实成本挺高的，需要吃透所有的调试协议（V8 Debugging Protocol），
   包含了几十个指令，每个指令都需要进行通讯适配和 UI 适配，这还只是一种语言，如果你的 IDE 面向
   多种语言，就需要适配多种调试协议，不同协议的差异可能还挺大的，这些工作完全会让你崩溃。

   `Debug Adapter Protocol (DAP)`_ 的出现，编辑器中集成调试器功能就只需要按统一的接口规范
   实现 Debug Adapters，调试器只要遵循同样的规范，编辑器只要遵循同样的规范，它们就可以互通使用，
   而不是重复造轮子。无论是 Sublime Text 还是 VS Code，VIM，Emacs 等等。

   .. figure:: https://microsoft.github.io/debug-adapter-protocol/img/with-DAP.png
      :target: https://microsoft.github.io/debug-adapter-protocol/overview

.. _Debug Adapter Protocol (DAP): https://microsoft.github.io/debug-adapter-protocol/
.. _V8 developer shell (d8): https://v8.dev/docs/d8
.. _V8 Inspector Protocol: https://v8.dev/docs/inspector
.. _Chrome DevTools Protocol: 
.. _10 Years of Web Inspector: https://webkit.org/blog/5718/10-years-of-web-inspector/

.. container:: section

   Machine Interface ("MI") 调试引擎，这是根据 Core Interfaces 实现的调试器接口，设置
   **MIMode** 属性为 gdb 或 lldb。在 **miDebuggerPath** 指定调试器完整路径（包括扩展名）
   或者命令名（路径由 VS Code 自动检测）。这种方式中断难，不能在程序运行时中断。另外，要使用
   GDBSever 进行远程调试，需要在 **miDebuggerServerAddress** 指定服务器地址。

   如果出现提示信息：No symbol "foo" in current context。表示可执行程序中没有包含调试信息，
   解决方法：不要使用优化编译，并且设置编译器选项，比如 GNU C/C++ 编译器使用 ``-gstabs`` 或者
   ``-g3`` ``-Og`` 等选项生成调试符号、提升调试体验。这样编译产生的目标文件（COFF, ELF, MachO）
   才带调试信息，也可以使用 DWARF2 (``-gdwarf-2``)。

   可执行程序带有调试信息就可以实现源代码级别的调试，否则就需要进行汇编代码的调试。不能使用优化选项，
   代码优化（gcc -O）会干扰乱原代码的结构，这会导致无法使用源代码调试，而只能在汇编级别调试：

   .. code-block:: sh

       gcc   -gdwarf-2 -Og -g3 k0001.c -o ./.build/k0001-2.exe
       gcc   -gdwarf-3 -Og k0001.c -o ./.build/k0001-3.exe
       gcc   -gdwarf-4 -Og k0001.c -o ./.build/k0001-4.exe

       clang -gdwarf-2 -Og k0001.c -o ./.build/k0001-2.exe
       clang -gdwarf-3 -Og k0001.c -o ./.build/k0001-3.exe
       clang -gdwarf-4 -Og k0001.c -o ./.build/k0001-4.exe

   目前 DWARF_ Debugging Format Standard 调试信息格式规范已经在类 UNIX 系统中逐步替代
   Stabs (symbol table strings) 成为主流的调试信息格式。 使用 GCC 或者 LLVM 系列编译器
   可以很方便生成 DWARF 调试信息。

   根据 `gdb 13.2`_ 文档，GCC 当前支持 '-gdwarf-3' 和 '-gdwarf-4'。

   根据 `GCC`_ 手册所述，可以使用 ``gcc -Q --help=optimizers``  命令查看所有优化相关参数。
   仅指定 ``-g`` 标志，大多数编译器不会在调试信息中包含有关预处理器宏的信息。 如果使用 DWARF 
   调试格式，并指定选项 ``-g3``，则 GCC 3.1 及更高版本编译会提供宏信息。

   .. _gdb 13.2: https://sourceware.org/gdb/
   .. _DWARF: https://dwarfstd.org/dwarf5std.html
   .. _GCC: https://gcc.gnu.org/

.. container:: section

   GCC 默认设置 ``-O0``，编译器此时考虑降低编译时间以及产生正确的调试结果。设置 ``-Og`` 可提升
   调试体验，虽然它开启了某些优化，但没有使用会干扰调试的优化功能，它常用于 edit-compile-debug
   的工作流程中，收集、提供的调试信息比 ``-O0`` 这种简单禁用优化选项来得丰富。

   编译器生成的可执行程序可以使用编译器套件附带的一些辅助工具检测包含的信息：

   *  ``ldd`` 命令查看可执行程序依赖的动态库。
   *  ``readelf`` 检查 Linux 可执行程序格式（ELF）的文件信息。
   *  ``objdump`` 查看生成的目标文件包含的信息，包括反汇编、符号定义、符号重定位等。
   *  ``nm`` 命令列表可执行程序文件中的符号定义。

   参考文档： GNU Binutils https://www.gnu.org/software/binutils/

   输出的文件格式信息如果包含为 ``elf32-i386``，这表示运行于 i386 架构上的 Linux 可执行文件。
   如果是 ``elf64-x86-64`` 表示使用的是 x86_64 架构运行的代码，表明使用的编译器是 64-bit 版本。
   
   调试符号信息可以保存在独立文件中，分离调试信息后，可执行程序中有两种基本的关联调试符号文件的方法：
   
   *  通过 "debug link" 指向调试符号信息文件，文件名称通常是 EXECUTABLE.debug 这样的格式。
   *  通过 "build ID" 序列编号关联高度符号信息文件，参考：Debugging Information in Separate Files

   将调试符号与主程序文件分离，好处是可以大大压缩可执行文件的尺寸，而且调试符号有专用文件也方便
   后续的调试工作。GCC 编译器在构建程序的过程中，就可以使用配套工具抽离调试符号，并保存到专用文件。
   生成发布版本时，与调试符号文件关联起来：

   .. code-block:: bash

      # Build a libraries
      cmake -D CMAKE_BUILD_TYPE=Debug ..
      make

      # Make debug symbol files
      objcopy --only-keep-debug libmy_library.so libmy_library.so.debug

      # Make Release
      strip libmy_library.so -o libmy_library.so.release
      objcopy --add-gnu-debuglink=libmy_library.so.debug libmy_library.so.release
      cp libmy_library.so.release libmy_library.so


   有了调试符号，调试器就可以将指令与原始代码关联起来，程序断点也可以按原代码行来设置，比如以下
   直接在 gdb 环境使用 ``b main`` 命令在程序入口函数设置一个断点。又如 ``b -line 20`` 将
   断点设置在第 20 等。运行程序中断并显示源代码：

   .. code-block:: sh

      For help, type "help".
      Type "apropos word" to search for commands related to "word"...
      Reading symbols from .\.build\hello-kernel.c.exe...
      (gdb) b main
      Breakpoint 1 at 0x10040108d: file .\hello-kernel.c, line 20.
      (gdb) r
      Starting program: /c/dl/pl/hi_cpp/.\.build\hello-kernel.c.exe 
      [New Thread 1684.0x34d8]...

      Thread 1 "hello-kernel.c" hit Breakpoint 1, main () at .\hello-kernel.c:20
      20          printf("Hello Kernel!\n");
      (gdb) c
      Continuing.
      Hello Kernel!
      [Thread 2448.0x1118 exited with code 0]...
      [Inferior 1 (process 2448) exited normally]


   VS Code 官方提供的 C/C++ 调试器插件存在这样的情况，击中断点，但是程序没有中断，运行到结束。
   另一个问题是直接使用 gdb 调试程序时，断点处正确中断程序的执行，但是无法显示源代码，同时显示的
   代码路径又是正确的路径。

   .. code-block:: sh

      Thread 1 "k0001.c" hit Breakpoint 1, main () at C:\msys64\pl\hi_cpp\k0001.c:20

      Thread 1 "k0001.c" hit Breakpoint 1, main () at C:\dl\pl\hi_cpp\k0001.c:20
      20      C:\dl\pl\hi_cpp\k0001.c: No such file or directory.

   前一个问题一般是调试信息未正确生成，即编译器调试信息输出相关的参数设置错误。后一个问题出现在
   Windows 系统，通过测试发现是编译源代码时使用绝对路径、同时使用斜杠作为路径分隔符号时产生。
   如果源代码文件使用相对路径不会有问题，输出文件使用什么路径无影响。执行 gdb 命令时，程序路径
   如果是使用斜杠的绝对路径，由于 gdb 是基于 MSYS2 系统，可能路径处理的逻辑依然是 Linux 风格，
   导致它将绝对路径识别为相对路径，并给它添加上项目目录前缀。这种情况下，${workspaceFolder}
   或者 ${file} 变量就不能用在编译器中指示源代码的位置。

   .. code-block:: sh

      gcc -gdwarf-2 -g3 C:/dl/pl/hi_cpp/k0001.c -o C:/dl/pl/hi_cpp/.build/k0004.exe
      gcc -gdwarf-2 -g3 C:/hi_cpp/k0001.c -o C:/hi_cpp/.build/k0001.exe
      gcc -gdwarf-2 -g3 C:\hi_cpp\k0001.c -o C:\hi_cpp\.build\k0002.exe

      > gdb c:\hi_cpp\.build\k0002.exe
      Reading symbols from c:\hi_cpp\.build\k0002.exe...
      (gdb) b main
      BFD: reopening /c/hi_cpp/c:\hi_cpp\.build\k0002.exe: No such file or directory
      Breakpoint 1 at 0x100401088: file C:\hi_cpp\k0001.c, line 19.

      > gdb /c/hi_cpp/.build/k0002.exe
      Reading symbols from /c/hi_cpp/.build/k0002.exe...
      (gdb) b main
      Breakpoint 1 at 0x10040108d: file C:\hi_cpp\k0001.c, line 20.
      20      C:\hi_cpp\k0001.c: No such file or directory.

   Windows 系统中 clang 编译的程序存在类似的问题，指示源代码路径正确，又报告找不到相应的文件。
   输出的可执行文件上，即使源代码文件没有使用绝对路径也如此。可以使用 ``objdump`` 检查程序文件
   中包含的调试符号信息。源代码路径会登记在 ``cygming-crtbeg`` 到 ``cygming-crtend`` 之间。
   而 clang 编译输出的可执行程序没包含 DWARF 调试信息。尝试通过 ``clang --verbose`` 获取
   编译细节，发现 Windows 系统上它调用的是 MSVC 编译作为后端，没有生成 DWARF 信息就不奇怪。

   当调试目标程序需要读取输入数据，VS Code 并没有为所有调试器提供支持，但有以下方式实现：
   参考文档： `Redirect input/output to/from the debug target <https://code.visualstudio.com/docs/editor/debugging>`__

   *  设置 "externalConsole": true, 使用外部控制台手动输入程序需要的数据；
   *  使用 "request": "launch", 调试方式，在控制台中执行程序，并且让程序为调试器提供 attach 的机会；
   *  如果调试器支持集成终端 (Integrated Terminal)，配置文件 args 参数可以使用 "<" 或 ">" 进行 I/O 重定向。
   
   以下 launch.json 配置仅供参考，在集成终端使用 "<" 重定向输入 stdin 为外部文件（"in.txt"）：

   .. code-block:: json

      {
        "name": "launch program that reads a file from stdin",
        "type": "node",
        "request": "launch",
        "program": "program.js",
        "console": "integratedTerminal",
        "args": ["<", "in.txt"]
      }

   `C++ Primer 5th Edition <http://www.informit.com/title/0321714113>`__ 提供的
   示范代码就大量使用 std::cin 来输入参数，这种情况下就需要使用重定向等方法来向程序输入数据，
   配置文件中的 args 指定的参数只能通过 main 入口函数接收。如果调试器支持 VS Code 集成终端，
   那么就可以很方便地解决外部数据输入问题。

   对于全平台通用的 GDB 调试器，它本身提供的 ``run`` 命令就像 shell 一样支持重定向输入、输出，
   参考手册 4.6 `Your Program's Input and Output`_：

   .. code-block:: bash

      (gdb) help run
      run, r
      Start debugged program.
      You may specify arguments to give it.
      Args may include "*", or "[...]"; they are expanded using the
      shell that will start the program (specified by the "$SHELL" environment
      variable).  Input and output redirection with ">", "<", or ">>"
      are also allowed.

   GDB 功能非常强大，本身就可以当作 shell 脚本解释器使用，进入调试器字符界面（TUI），也可以很
   方便地执行 shell 命令，根据手册（2.3 Shell Commands）所述，使用 ``shell`` 命令或者简写
   ``!`` 就可以执行外部程序。GDB 支持 ``set args`` 给调试目标程序设置参数，也可以在命令行中
   使用 ``-ex`` 执行设置：
   
   ::
      
      set args [Arguments]
      show args
   
   比如以下 C++ 程序：

   .. code-block:: cpp

      #include <iostream>
      int main(int argc, char *argv[]) 
      {
         std::cout << "Hello C++!" << std::endl;
         for (int it = 0; it < argc; it ++)
            std::cout << it << ": " << argv[it] << std::endl;
         return 0;
      }

   可以直接在 shell 中执行 ``g++`` 编译命令，也可以进入 gdb 界面后再执行编译命令：

   .. code-block:: bash

      $ gdb -ex 'set args -path /pl/C++_Primer < data/add_item' hello
      ...
      (gdb) show args
      Argument list to give program being debugged when it is started is "-path /pl/C++_Primer < data/add_item".
      (gdb) !g++ -g -o hello 1/main_only.cc
      (gdb) file hello
      Load new symbol table from "hello"? (y or n) y
      Reading symbols from hello...
      (gdb) run
      Starting program: /cpp/hello -path /pl/C++_Primer < data/add_item
      [New Thread 15388.0xec4]
      Hello C++!
      0: /cpp/hello
      1: -path
      2: /pl/C++_Primer
      3: <
      4: data/add_item

   注意：GDB 以上实现的重定向功能在 Linux 正常工作，但是在 Windows 系统下，包括 MSYS2 环境下
   可能能无法正常工作。特别是 PowerShell，它本身就无法使用 "<" 符号进行输入重定向。可以考虑使用
   WSL 环境中运行 Linux，或者直接使用 Linux 系统。

   GDB 支持多种功能扩展方式 `Extending GDB`_，支持多种脚本进行自动化，本身集成 Python 脚本
   解释器，可以使用 ``show configuration`` 命令查看当前 gdb 是否在编译时启用脚本模块支持。
   最基本的是 GDB 命令脚本（GDB Command Files），调试器初始化时会执行 .gdbinit 脚本，可以
   在初始化脚本中编写任意的 GDB 调试器命令，一般用来设置调试环境。初始化脚本可以在当前工作目录，
   或者用户主目录下。如果调试环境完全可信，可在初始化脚本中添加 ``set auto-load safe-path /``
   以完全启用脚本自动加载机制。或者使用 ``add-auto-load-safe-path`` 单独添加可依赖的脚本路径。
   当前目录下的 .gdbinit 脚本也需要在用户主目录下的初始化脚本设置为可依赖的路径才能自动加载。

   GDB 加载目标文件时（object file），会自动搜索与目标文件配置的脚本以实现自定义调试自动化。
   比如，使用 ``file`` 命令加载待调试程序或者程序需要加载共享库，GDB 有多种方式查找 Python
   脚本：objfile-gdb.py 脚本文件（对象文件名后加 ``-gdb.py`` 后缀）或者查找 ELF 或 COFF
   可执行程序中的包含的 ``.debug_gdb_scripts`` 调试信息段落。可使用 ``info auto-load`` 
   命令查看当前已经自动加载的脚本，至少有以下四种自动加载脚本：

      *  GDB scripts
      *  Guile scripts
      *  Local gdbinit
      *  Python scripts

   默认设置下，GDB 调试脚本分离保存在专用目录下（"$debugdir:$datadir/auto-load"）。其中
   占位符号 $debugdir 和 $datadir 会分别被替换为 DEBUG-FILE-DIRECTORY 和 DATA-DIRECTORY。
   可以使用 ``show debug-file-directory`` 这样的命令查看 GDB 环境变量设置。

   可以使用 ``(gdb) python print(gdb.PYTHONDIR)`` 命令打印 Python gdb 模块的所在路径，
   并将路径添加到 VS Code Pylance 插件的额外解释路径中：Python › Analysis: Extra Paths，
   以获得 LSP 自动提示功能。例如，以下脚本演示了 ``file hello`` 命令在加载调试目标程序时，
   自动加载了对应的 ``hello-dbg.py`` 脚本，并打印出目标文件（objfile）的路径信息：

   .. code-block:: python

      import gdb

      print("auto load: ", gdb.PYTHONDIR, gdb.current_objfile())

   .. code-block:: bash

      (gdb) file hello
      Load new symbol table from "hello"? (y or n) y
      Reading symbols from hello...
      auto load:  /usr/share/gdb/python <gdb.Objfile filename=/cpp/hello>

   脚本接口中提供了 STDOUT 和 STDERR 等标准文件的访问，但是不能使用 STDIN。

.. _Extending GDB: https://sourceware.org/gdb/current/onlinedocs/gdb#Extending-GDB
.. _Your Program’s Input and Output: https://sourceware.org/gdb/current/onlinedocs/gdb

.. _S13: #S13

/🟡VS Code Remote Development
=============================

   远程开发是远程办公利器，通过 VS Code 提供的远程开发环境还可以配合 Microsft WSL 插件，
   连接到 Windows 10 WSL 子系统上进行 Linux Kernel 系统的开发。

   `VS Code Remote Development`_ 原理构架图如下：

   .. figure:: https://code.visualstudio.com/assets/docs/remote/wsl/architecture-wsl.png
      :target: https://code.visualstudio.com/docs/remote/remote-overview

      基于 WSL 的远程开发原理构架图

   VS Code 支持四种形式的远程开发，安装 `Remote Development Extension Pack`_ 插件包
   即可以获得相应的支持：

   *  ``Remote SSH`` - 通过 SSH 隧道连接任意远程服务器主机或虚拟机，支持安装好 OpenSSH 的主机构架包括：
      x86_64, ARMv7l (AArch32), and ARMv8l (AArch64) glibc-based Linux, Windows 10/Server (1803+), and macOS 10.14+ (Mojave)；
   *  ``Remote Tunnels`` - 通过 VS Code Tunnel 内网穿透隧道连接任意远程主机或虚拟机，使用 vscode.dev 进行远程开发；
   *  ``Dev Containers`` - 连接到容器虚拟环境中，以使用单独的工具链或基于容器的应用进程；
   *  ``WSL`` - 连接到本地 Windows 10 系统上的 Windows Subsystem for Linux (WSL)；

   远程开发使用到 `Visual Studio Code Server`_，这是安装在远程主机上的服务端，此服务器需要
   许可证。VS Code 提供通过 ``tunnel`` 命令行参数创建与服务器建立连接的 Remote Tunnels，
   也可以下载专用的 VS Code CLI 版本。隧道的创建是 P2P 网络的内网穿透，需要借助透网协调服务器、
   Session Traversal Utilities for NAT (STUN) 协议等等完成内网与内网之间的联接。另外，
   VS Code 提供 ``serve-web`` 命令行参数启动一个 Web Server，这是提供 VS Code Web 运行
   环境，与上面提到的 VS Code Server 是不同的软件。VS Code Web 只是在本地启用 Web UI 服务，
   VS Code Server 则是向远程开发提供服务器，它需要 `Visual Studio Code Server License`_。
   VS Code Web 运行时也需要 VS Code Server，会自动下载安装并保存为 ``code-tunnel`` 命令文件。
   新版本 VS Code 提供的 Forward Port 功能就是基于 P2P 内网穿透技术提供的功能，让本地 Web
   服务暴露到互联网。所以，理论上，只要有自己的内网穿透工具访问远程主机上的 Web 服务，就可以不
   使用 VS Code Server，现在已经有第三方服务器版本（韭菜收割版） `Code Server`_。此工具当前 
   没有提供 Windows 安装包，但可以使用 Node 平台进行安装：

   .. code-block:: bash

      npm install --global code-server
      code-server
      # Now visit http://127.0.0.1:8080. Your password is in ~/.config/code-server/config.yaml

   使用 ``code tunnel`` 命令创建隧道后，就可以使用各种 Remote Tunnels 命令查看隧道及连接。
   国内网络有可能连接 Tunnels 服务器时超时，从而导致隧道创建失败。尽管此服务器可能通过 ping 测试：

   .. code-block:: bash

      > code tunnel user logout
      > code tunnel user login

      > ping global.rel.tunnels.api.visualstudio.com

      正在 Ping tunnels-prod-rel-asse-v3-cluster.southeastasia.cloudapp.azure.com [20.197.80.108] 具有 32 字节的数据:
      来自 20.197.80.108 的回复: 字节=32 时间=126ms TTL=112
      来自 20.197.80.108 的回复: 字节=32 时间=103ms TTL=112
      来自 20.197.80.108 的回复: 字节=32 时间=118ms TTL=112
      来自 20.197.80.108 的回复: 字节=32 时间=112ms TTL=112

   远程开发的实现与进程间通信技术（IPC）原理相似，在远程主机上运行一个服务器，本身主机运行的客户
   端将 VS Code 的操作通过中间的通信隧道传递给远程主机，并执行相应的操作。常用的远程连接技术有
   SFTP、SSH 等等。Windows 10 系统还与 WSL 子系统连接则是通过本身端口连接。共用同一个磁盘空间，
   使用不同的文件系统组织。可以使用以下命令打开 WSL 系统上的目录或者文件：

      code --remote wsl+<distro name> <path in WSL>

      code --remote wsl+Ubuntu-20.04 /home/jim/projects/c

      code --folder-uri vscode-remote://wsl+Ubuntu-20.04/home/ubuntu/folder.with.dot

      code --file-uri vscode-remote://wsl+Ubuntu-20.04/home/ubuntu/fileWithoutExtension
      code --goto vscode-remote://wsl+Ubuntu-20.04/home/ubuntu/somefile

   注意填写安装好的 WSL 版本号，如果不对，连接就会给出不能进行远程连接的错误提示：
   CodeExpectedError: No remote extension installed to resolve vscode-remote://wsl.

   因为连接开发需要在远程主机上执行命令，所以部分插件也需要另外安装才能在远程主机上执行相应的操作。
   需要注意的是，VS Code 本身还是运行在本地主机上，插件列表中安装的插件也是本地使用的插件，但有
   Install in WSL:Ubuntu-20.04 这样的信息提示安装到远程主机上使用，比如 Microsoft C/C++
   插件，这样才能获得 WSL 系统上的智能提示。VS Code Server 和插件默认会安装到用户主目录下：

   .. code-block:: bash

      $ tree -L 2  ~/.vscode-server/
      ...
      $ du -hd 2 ~/.vscode-server/ | sort -h | tail -n 10
      15M     /home/jeango/.vscode-server/extensions/liximomo.sftp-1.12.10
      44M     /home/jeango/.vscode-server/data/User
      77M     /home/jeango/.vscode-server/extensions/cssho.vscode-svgviewer-2.0.0
      115M    /home/jeango/.vscode-server/data/CachedExtensionVSIXs
      162M    /home/jeango/.vscode-server/data
      172M    /home/jeango/.vscode-server/bin
      172M    /home/jeango/.vscode-server/bin/dc96b837cf6bb4af9cd736aa3af08cf8279f7685
      281M    /home/jeango/.vscode-server/extensions/ms-vscode.cpptools-1.20.5-linux-x64
      396M    /home/jeango/.vscode-server/extensions
      729M    /home/jeango/.vscode-server/

   成功连接并打开目录、文件后，可以使用 Close Remote Connection 命令断开连接。
   有了 WSL 开发环境就可以很好地研究 `Linux Kernel`_ 代码了，官方代码仓库本身包含了一份
   开发者文档 `The Linux Kernel documentation`_，开发者可以先读 `Kernel README`_。

   最后，总结一下基于 VSCode Remote Tunnel 远程开发的优劣：

   *  + 免费开源的 VS Code vs. 收费的 IDE。
   *  + 性能优势，只要网络正常，就能使用 vscode.dev 访问远程机器资源，不需要担心本地主机性能问题。
   *  + 环境一致，远程开发使用同一个开发环境，包括环境变量、依赖安装等等，无需解决环境配置问题，就能成功编译运行项目。
   *  + 可访问性，任何时间、任何地点、任何设备，网络通畅，只要设备搭载浏览器支持 vscode.dev 即可实现远程办公。
   *  - 机器损耗与电费支出，一台常年不关也不休眠的电脑。
   *  - 网络问题，遇到网络不通，或网速过慢时，体验不好。

   使用 ``service`` 命令安装隧道服务，以避免经常手动执行命令的方式开启隧道。可以随机安装、卸载服务：
   ``code tunnel service install`` 或者 ``code tunnel service uninstall``。为了避免
   主机进入休眠，可以使用 ``no-sleep`` 选项，例如 ``code tunnel --no-sleep``。

   VS Code 远程开发使用步骤：在本地主机（或者说家里）使用 ``code tunnel`` 命令或者在命令面板
   中执行 Turn on Remote Tunnel Access 创建远程隧道，开启 Remote Tunnel 内网穿透服务，
   且保持主机不关机也不休眠，可关闭屏幕节能。然后在任何地点的电脑上打开浏览器访问 vscode.dev，
   使用相同的登陆账号访问本地主机提供的 VS Code 开发环境。


.. _Code Server: https://github.com/coder/code-server
.. _Visual Studio Code Server License: https://aka.ms/vscode-server-license
.. _Visual Studio Code Server: https://code.visualstudio.com/docs/remote/vscode-server
.. _Linux Kernel: https://github.dev/torvalds/linux
.. _Kernel README: https://github.dev/torvalds/linux/blob/master/Documentation/admin-guide/README.rst
.. _The Linux Kernel documentation: https://www.kernel.org/doc/html/latest/
.. _Remote Development Extension Pack: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack
.. _VS Code Remote Development: https://code.visualstudio.com/docs/remote/remote-overview

.. _S14: #S14

/🟡LLVM Clang and Clangd (C/C++ LSP)
====================================

   VS Code 与 Sublime Text 都是轻量级编辑器，当然后者自研的图形渲染系统比 Electron 更轻量，
   占用内存也更少。但是 VS Code 集成的调用功能更全面、更优秀，适配多种调试协议。即使调试 shell 
   脚本也不在话下，只需要安装有相应的调试器即可以。并且，基于 `Language Server Protocol`_(LSP_)
   的智能语言提示功能也更流畅，而 Sbublime Text 虽然也有 LSP 插件，但是配置过程比较繁琐。

   VS Code 支持多种语言的调试工作，Rust 这种底层语言也支持。首先安装 Rust 官方 rust-analyzer
   插件以提供 LSP 智能提示服务。系统也需要先安装好 rustup 以及编译器环境，包括 cargo 项目依赖
   管理工具。VS Code 支持自动检测 cargo 任务，在命令面板中就可以执行 Rust 程序的构建、运行等等。
   调试器可以使用 C/C++ 调试器，安装以下任意一个扩展，取决于操作系统类型：

   *  Windows ： Microsoft `C/C++ Extension`_
   *  OS X / Linux ： `CodeLLDB Extension`_

   三大系统上可用的调试器如下，GDB 是通用的开源调试器：

   *  Linux: GDB
   *  macOS: LLDB or GDB
   *  Windows: the Visual Studio Windows Debugger or GDB (using Cygwin or MinGW)

   `The LLDB Debugger`_ 调试器作为 LLVM 编译套件中的 GDB “架构升级版”，功能更加强大。
   基于 LLDB 之上开发的 `CodeLLDB`_ 主要为 C++ 和 Rust 语言提供调试服务。兼容调试信息的
   语言包括： Ada, Fortran, Kotlin Native, Nim, Objective-C, Pascal, Swift, Zig。
   CodeLLDB 可以通过 WSL2 工作在 Winows 10 或者 Windows 11 系统上。支持 CPU 构架包括：
   AArch64, ARM, AVR, MSP430, RISCV, X86 等等。

   为了调试时可以使用框架或系统底层源代码，可以根据文档（Specifying Source Directories）
   设置源代码搜索目录，这里假设使用 GDB 调试器。

   `C#`_ 作为 VS Code 同源项目，自然是提供大力度的支持，可以使用以下扩展：

   *  .NET debugging - see the `C# Dev Kit`_ debugging.
   *  Mono debugging - see the `Mono Debug`_ extension.

   为了程序开始就进入中断，可以配置 launch.json 打开 "stopAtEntry": true。另外，如果代码
   文件中行首不能通过点击切换断点状态，可以修改配置：debug.allowBreakpointsEverywhere。

   Microsoft C/C++ 插件对接 VS Code IntelliSense_ 功能，可以实现 C++ 代码的智能提示，
   打开设置面板 IntelliSense Mode 可以设置不同的编译器所使用的基础库（头文件）提供提示信息。
   这个功能会通过测试系统现有可用的编译器，用户可以设置 Default: Compiler Path 指定路径。
   比如，将智能提示模式设置为 gcc-x86 模式，然后 IntelliSense_ 通过检测系统中可用的 GCC
   编译器并使用编译器捆绑的代码库作为智能提示信息提供给用户。可以通过控制台输出面板查看配置
   是否成功，关闭并重启 Microsoft C/C++ 插件可以使 IntelliSense_ 服务重启，并打印类似
   以下信息供参考：

   .. code-block::bash

      For C++ source files, IntelliSenseMode was changed from 
         "windows-gcc-x86" to "windows-msvc-x86" based on compiler args and querying compilerPath: "cl.exe"
      [5/25/2024, 2:09:28 AM] IntelliSenseMode was changed because it didn't match the detected compiler.  
         Consider setting "compilerPath" instead.  
         Set "compilerPath" to "" to disable detection of system includes and defines.

      [5/25/2024, 2:14:32 AM] For C++ source files, IntelliSenseMode was changed from 
         "windows-gcc-x86" to "linux-gcc-x86" based on compiler args and querying compilerPath: "c:/msys64/usr/bin/gcc.exe"
      [5/25/2024, 2:14:32 AM] For C source files, IntelliSenseMode was changed from 
         "windows-gcc-x86" to "linux-gcc-x86" based on compiler args and querying compilerPath: "c:/msys64/usr/bin/gcc.exe"

   启用 IntelliSense_ 智能提示后，就可以主动使用 Trigger Suggest (Ctrl + Space) 触发提示。
   另一种智能方案是使用基于大语言模型 AI 问答技术的 `GitHub Copilot`_ 插件，它需要登录使用。

   使用 C++20 规范编程时，例如 ``std::format`` 这样的新类型可能没有自动提示，IntelliSense
   默认没有启用 C++ 规范，可以在 VS Code 全局配置（settings.json）或者 c_cpp_properties.json
   配置中设置规范标准版本。可以在配置面板中搜索 `CPP Standard` 进行设置：

   .. code-block:: json

      {
         "C_Cpp.default.intelliSenseMode": "gcc-x86",
         "C_Cpp.default.compilerPath": "c:/msys64/usr/bin/gcc.exe",
         "C_Cpp.intelliSenseEngineFallback": "enabled",
         "C_Cpp.default.includePath": [
            "C:\\msys64\\mingw64\\include\\c++\\13.2.0\\"
         ],
         "C_Cpp.default.cppStandard": "c++20",
         "C_Cpp.default.cStandard": "c17",
      }

   设置好之后，就可以使用指定的编译器及代码库来编程，比如 Windows 上使用 MSYS2 移植平台来编程。
   还可以安装 Microsft WSL 插件，同时在 Windows 10 系统上安装 Linux 子系统，就可以通过远程
   开发连接到子系统上进行 Linux Kernel 系统的开发。

.. _rust-src: https://github.com/rust-lang/rust/blob/master/library/core/src/ops/function.rs#L81
.. _rust-analyzer: https://github.com/rust-lang/rust-analyzer
.. _kotlin-debug-adapter: https://github.com/fwcd/kotlin-debug-adapter
.. _IntelliSense: https://code.visualstudio.com/docs/editor/intellisense
.. _GitHub Copilot: https://marketplace.visualstudio.com/items?itemName=GitHub.copilot

.. _C#: https://code.visualstudio.com/docs/languages/csharp
.. _C# Degugging: https://code.visualstudio.com/docs/csharp/debugging
.. _Mono Debug: https://marketplace.visualstudio.com/items?itemName=ms-vscode.mono-debug
.. _C# Dev Kit: https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit
.. _C/C++ Extension: https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb
.. _CodeLLDB Extension: https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools
.. _The LLDB Debugger: https://lldb.llvm.org/index.html
.. _CodeLLDB: https://github.com/vadimcn/codelldb/tree/v1.10.0

   C 语言作为一个精简结构的系统底层编程语言，本身标准库只提供了常用的函数库，少了 C++ 宏大的类库，
   也大大降低了语言本身的复杂性。但是反作用就是缺少现成的算法与数据结构，比如红黑数，堆栈，哈希表，
   等高级一点的数据结构就需要自行开发，或者使用社区开源方案。以下是一组 C 语言的代码库：

   *  The GNU C Library - glibc https://www.gnu.org/software/libc/
   *  GLib – 2.0 - GTK  https://docs.gtk.org/glib
   *  libcstl https://github.com/activesys/libcstl

   其中 libcstl 名称为“标准 C 语言通用数据结构和常用算法库”，模仿 C++ STL 接口形式，提供
   序列容器、关联容器、容器适配器、迭代器、函数和算法。
   
   GLib 2.0 可以看作 C 语言的 STL。此开源库原本是 GTK+ 和 GNOME 图形框架的一个部分，后来独立
   作为一个基本库维护，GLib 提供了常用的数据结构类型，宏函数，字符串工具，文件处理工具，等等。

   The GNU C Library (glibc) 是 Linux 系统下的 C 语言运行时，程序底层会执行这个代码库。
   VS Code C/C++ 插件在调试程序时，可以点击 CALL STACK 面板查看运行时动态库文件所关联的源代码，
   代码路径是构建时输出的目录，比如：

       /build/glibc-SzIz7B/glibc-2.31/csu/libc-start.c

   C/C++ 程序调试器支持通过配置 ``sourceFileMap`` 来映射源代码文件，就像 JavaScript 或者
   TypeScript 脚本可以使用 ``sourceMaps`` 一样。另外，为了方便调试 Release 程序，系统厂商
   还会提供调试专用的符号文件（symbol files），也可以通过 launch.json 来配置。调试符号文件
   配置有两种配置路径，分别作用于 VSDBG 和 GDB 两系统：
   
   *  ``additionalSOLibSearchPath`` (``DWARF`` for GDB or LLDB) 
   *  ``symbolSearchPath`` (``.pdb`` for the Visual Studio Windows Debugger).

   以下是 VS Code 用户文档，以下给出配置示范仅供参考。分别设设置了 The GNU C Library 以及
   MSVC C Runtime，请按当前运行环境提示的路径映射。详情参考官方文档（Debugging C++ Code）：

   .. code-block:: json

      "sourceFileMap":{
          "/build/glibc-SzIz7B/glibc-2.31/": "/mnt/c/dl/pl/glibc-2.31/",
          "D:\\a\\_work\\1\\s\\src\\vctools\\crt\\vcstartup\\src\\startup": "C:\\Program Files\\Microsoft Visual Studio\\2022\\Community\\VC\\Tools\\MSVC\\14.35.32215\\crt\\src\\vcruntime"
      }

   Rust 程序调试时，似乎 ``sourceFileMap`` 映射不起作用，但可以创建软链接将调试器给出的路径
   映射到下载到的 Rust 源代码目录上。VS Code 提供了一个 Copy Path of Active File 命令可以
   用来复制文件路径：

   .. code-block:: powershell

      PS C:\Windows\system32>
      >> $T="C:\rustc\rust-1.50.0"
      >> $P="C:\rustc\897e37553bba8b42751c67658967889d11ecd120"
      >> New-Item -Type SymbolicLink -Target "$T" -Path "$P"

   不要总是编译巨人的代码库，电费很贵时间更贵。可以使用源代码是最好的礼物，You can fucking code.

   在使用 vsdbg 调试器的过程中，还会产生 PCH (precompiled headers) 信息文件缓存目录中，
   路径可以在设置面板中查询 Intelli Sense Cache Path，默认位置如下：

   ========= ==========================================
   Windows    %LocalAppData%/Microsoft/vscode-cpptools 
   Linux      $XDG_CACHE_HOME/vscode-cpptools/ or $HOME/.cache/vscode-cpptools/
   macOS      $HOME/Library/Caches/vscode-cpptools/ 
   ========= ==========================================

   安装 Microsoft C/C++ 调试插件后，再使用 Run -> Add Configurations... 菜单创建调试
   配置，或者执行命令 Debug: Add Configuration...，内置的 IntelliSense_ 智能提示就会出现
   C/C++ 调试配置模板。Windows 系统中 VS Code C/C++ 调试配置类型主要有两种，对应两大系统的
   调试器，调试执行方式也有两种，组合起来就至少有四种调试运行方式：

   *  "type": "cppdbg"： 使用通用的 C/C++ 调试适配器；
   *  "type": "cppvsdbg"： 使用 Microsoft 自家的 ``vsdbg`` 调试适配器（AD）；
   *  "request": "launch"： 直接创建新进程加载待调试程序，这种调试形式控制程序加载到结束整个过程；
   *  "request": "attach"： 将调试器附加到已经在运行的程序进程上，这种方式可以让待调试程序先运行到特定状态；

   由于不同的类型配置，可使用的选项也不同，当设置好一个调试器类型后，或者设置了专用选项后，再修改
   调试类形就受到专用选项的约束，如果更改后的 "type" 值与现有选项有冲突，那么 VS Code 的智能
   提示功（IntelliSense）就会用黄色波浪线标记 "type" 属性值，表示不可识别的调试器类型。如果
   熟悉各种调试器的配置选项，可以手动逐项填写调试器配置。VS Code 安装及启用的插件不同，所提供的
   可用调试器类型也不同。

   VS Code 提供的 C/C++ 项目配置文件如下，具体选项参考 `Configure C/C++ debugging`_。 

   *  ``tasks.json`` (compiler build settings)
   *  ``launch.json`` (debugger settings)
   *  ``c_cpp_properties.json`` (compiler path and IntelliSense_ settings)

   VS Code 源代码中，将调试器配置文件和进入调试（调试会话）这两种数据状态分别定义为两种类型：
   ``DebugConfiguration`` 和 ``DebugSession``。配置的 "type" 或者 "request" 属性
   都是指 debug session 的类型和运行方式。调试器插件提供 ``DebugConfigurationProvider``
   对应各种调试器配置项。

   .. figure:: https://code.visualstudio.com/assets/api/extension-guides/debugger-extension/debug-arch2.png
      :target: https://code.visualstudio.com/api/extension-guides/debugger-extension

      Debugger Extension

   VS Code 实现为一个通用的调试器 UI 界面，安装的各种调试器插件就充当 Debug Adapter (DA)
   的角色，VS Code <==> DA <==> Debugger 三者形成完整的调试工作环境，中间通信使用通用的
   `Debug Adapter Protocol (DAP)`__ 进行数据传递。

   `Debug Adapter Protocol (DAP)`__ 协议的构架设计中，调试会话有两种模式：

   *  **single session mode**: 开发工具（VS Code）以独立进程启动 DA，传递数据依靠 stdin 和 stdout；
   *  **multi session mode**: 开发工具（VS Code）假定系统中已经启动了 DA，直接通过指定端口传递数据；

   DAP 协议和 LSP 协议一样，都是独立于 VS Code 编辑器的编程领域的协议，并且使用便利也非常流行。

   调试器配置中可以使用 ``setupCommands``，它用来在调试器初始化过程中执行些前期设置，比如 GDB
   中可以使用 (gdb) set follow-fork-mode child 命令启用子进程跟踪（多进程调试），对应在配置
   文件中的设置如下，也就是 set 命令对应为 -gdb-set：

   .. code-block:: json

      "setupCommands": [
         {"text": "-gdb-set follow-fork-mode child"}
      ]

initialization file
show auto-load
info auto-load
Automatically loading associated files
GDB 初始配置文件，可以通过 `gdb -n -x .gdbinit`
-exec directory folder/of/source

.. _Debug Adapter Protocol (DAP): https://microsoft.github.io/debug-adapter-protocol/
.. _Configure C/C++ debugging: https://code.visualstudio.com/docs/cpp/launch-json-reference

   LLVM 编译器套件包含了为 C/C++ 提供的 LSP 服务的 ``clangd`` 命令，VS Code 可以安装同名
   插件，提供功能如下：

   -  code completion
   -  compile errors and warnings
   -  go-to-definition and cross references
   -  hover information and inlay hints
   -  include management
   -  code formatting
   -  simple refactorings

   先到 LLVM_ 官方网站下载安装包，直接触到到本地磁盘，并配置环境变量访问各个命令，包括 clangd。
   VS Code 中安装 clangd_ 插件，然后检查 Output 面板输出内容，看插件启动是否成功。输出面板是
   所有命令共用的，查看某个命令的输出内容，就可以点击面板右上角的下拉列表，这里包含当前已经产生输出
   所有命令。一种最有可能出现的错误是 clangd_ 命令行参数错误，输出面板可能出现类似如下的内容：

      clangd.EXE: Unknown command line argument '"--query-driver=clang++"'.

   注意，单引号包括的参数，这部分是插件配置面板中填写的参数内容，因为多加了双引号，VS Code 在
   传递参数时又自动添加了引号，导致 clangd_ 接收到的参错出现多余引号而不能识别。因此，需要修改
   参数，删去参数中的外围引号即可以。

   Query Driver 是 GCC 兼容的驱动器，用于匹配并提取一组（globs) 系统头文件文件。头文件
   路径类似 ``/usr/bin/**/clang-*`` 或者 ``/path/to/repo/**/g++-*`` 格式。

   然后，禁用插件再重新启用，当输出内容包含如下信息，就表示插件（LSP Client）已经按 LSP 协议
   完成启动和初始化（initialized），等待编辑请求智能提示：

   .. code-blogk:: sh

      I[15:26:46.616] clangd version 15.0.7
      I[15:26:46.619] Features: windows
      I[15:26:46.619] PID: 932
      I[15:26:46.619] Working directory: c:\msys64\pl\hi_cpp
      I[15:26:46.619] argv[0]: C:\llvm\bin\clangd.EXE
      I[15:26:46.619] argv[1]: --query-driver=clang++
      I[15:26:46.631] Starting LSP over stdin/stdout
      I[15:26:46.634] <-- initialize(0)
      I[15:26:46.653] --> reply:initialize(0) 18 ms
      I[15:26:46.658] <-- initialized
      I[15:26:46.680] <-- textDocument/didOpen

   .. _LLVM: https://releases.llvm.org/
   .. _clangd: https://clangd.llvm.org
   .. _LSP: https://github.com/Microsoft/vscode-languageserver-node
   .. _Language Server Protocol: https://github.com/Microsoft/language-server-protocol

.. container:: section

   智能提示有个好处是弥补人类脑力的缺点：记忆模糊。比如，以下 C/C++ 程序片断中，只是简单打印
   一串字符，只使用到 ``printf`` 函数，但是包含什么头文件呢？``stdlib.h`` 还是 ``stdio.h``？
   这种情况下，智能提供就可以根据代码的逻辑关系，推理得到应该包含后者。

   .. code-block:: cpp

      #include <stdlib.h>

      int main(void)
      {
          printf("Hello Linux Kernel!");
      }

   另外，智能提示和语法高亮还有一个重要的作用，高亮不仅仅是高亮显示语言关键字，它的重要作用在于，
   将不同语义的文本使用不同的颜色显示，增加了视觉上的对比和活跃度，这可以促进视觉系统接收信息的
   效率。相比单色（monochrome），多彩文本拥有调动视神经兴奋度的能力，也可以促进阅读者的专注度。
   这一点非常重要，专注度的提升，可以直接影响大脑``信息关联网络``的快速形成，从而减少模糊记忆。
   颜色变化只是众多视兴奋手段之一，绘画设计领域讲究生动、醒目，形式多样，不局限于明暗、大小、远近、
   疏密、动静等等的对比。


   GCC 编译器套件之所以称为套件，GNU Compiler Collection，是因为 GCC 经过长时间的发展，
   不仅仅支持 C/C++ 程序的编译，还支持多种语言的跨平台编译，包括 Objective-C、Objective-C++、
   Fortran、Ada、D 和 Go 等等。但是由于早期编译器架构设计不合理，导致整个编译体系非常复杂。

   LLVM (Low Level Virtual Machine) 作者是 UIUC（伊利诺伊大学厄巴纳香槟分校）博士生
   `Chris Lattner`_ ，读博期间不断地研究探索关于编译器的未知领域，发表了一篇又一篇的论文。
   他在硕士毕业论文里提出了一套完整的在编译时、链接时、运行时甚至是在闲置时优化程序的编译思想，
   直接奠定了 LLVM 的基础。LLVM 在他念博士时更加成熟，使用 GCC 作为前端来对用户程序进行语义
   分析产生 IF（Intermidiate Format），然后 LLVM 使用分析结果完成代码优化和生成。

   Ph.D. Computer Science: Spring 2002 - Spring 2005
   Thesis: `Macroscopic Data Structure Analysis and Optimization 
   <https://llvm.org/pubs/2005-05-04-LattnerPHDThesis.html>`__

   M.S. Computer Science: Fall 2000 - Fall 2002
   Thesis: `LLVM - An Infrastructure for Multi-Stage Optimization
   <https://llvm.org/pubs/2002-12-LattnerMSThesis.html>`__

   其硕士论文中表示，传统编译器设计为 compile-link-execute 单层构架，不是三层，是单层三阶段。
   这种设计主要缺点是不能适应新环境中的性能需求，因为不方便对代码执行优化工作。

   LLVM 编译器构架核心在于革新设计的多阶段优化系统，使用一套虚拟指令集（virtual instruction set）
   作为这些阶段子系统的粘合剂。这套虚拟指令集就是中间层（IR），像汇编指令一样低级（紧凑）表示、易转换，
   同时拥有高级类型信息（high-level type information），使得在编译工作的链接阶段、后链接阶段
   可以进行积极的优化工作。在特别条件下，还支持运行时（run-time）与机器空闲时（idle time）优化。

   LLVM 三层编译器架构设计中，clang 是其前端部分负责编译原代码生成中间代码（IR），中间代码
   更方便于做优化工作，而后端则与机器指令、虚拟关系密切。clang 作为前端，工作在 Windows 平台的
   clang-cl 驱动默认使用 MSVC 编译器为后端。

   这一模型的好处是，要支持多种语言时，只需要添加多个前端就可以。当需要支持多种目标机器时，只需要
   添加多个后端就可以。对于中间的优化器，可以使用通用的中间代码。另一个大好处，开发前端的人只需要
   知道如何将源代码转换为优化器能够理解的中间代码就可以了，他不需要知道优化器的工作原理，也不需要
   了解目标机器的知识。这大大降低了编译器的开发难度，使更多的开发人员可以参与进来。就凭这一构架，
   LLVM 就可以统领计算机编译器江湖！

   `Chris Lattner`_ 和法国 `Fabrice Bellard`_ 都殿堂级的人类高质量程天才序员。
   他们的作品，LLVM、QEMU、FFMPEG 足以改变人类历史。

   `Chris Lattner`_ 成立了一家 ModularAI 公司，并实现用于 AI 编程的 `Mojo`_ 编程语言，
   它是 Python 超集，但速度快几千倍，因为充分利用了现代多核心 CPU 的算力并行处理工作。拥有像
   Rust 一样的所有权概念（Ownership and borrowing）以及 Lifecycles and lifetimes。

   LLVM 为了方便 GCC 用户迁移到 Clang，设计考虑到与 GCC 的兼容，编译驱动（Compilation Driver）
   或语言特性都有对应的参照物，以下是 LLVM 标准编译驱动名称与 GCC 对照关系：

   - ``clang`` for the ``gcc`` driver (used to compile C programs)
   - ``clang++`` for the ``gxx`` driver (used to compile C++ programs)
   - ``clang-cpp`` for the ``cpp`` driver (pure preprocessor)
   - ``clang-cl`` for the ``cl`` driver
   - ``flang`` for the ``flang`` driver
   - ``clang-dxc`` for the ``dxc`` driver

   LLVM 编译器三层架构设计中，Clang 本身工作只包括前端部分，整个编译流程包括以下主要步骤：

   - **Preprocessor**: 执行 C 语言预处理，展开 #includes 和 #defines 等宏指令。
      使用 ``Clang -E``  命令完成这个步骤就停止。
   - **Parsing**: 源代码词法解析（parses）与语法分析（semantically analyzes）。
      生成中间阶段的抽象语法树 Abstract Syntax Trees (AST)。以及，根据不同输入生成：
      precompiled header (PCH), preamble, or precompiled module file (PCM)。
      使用 ``clang -precompile``  命令完成这个步骤就停止，这是处理输入为头文件的默认行为。
   - **IR generation**: 源代码转换为中间层表示，主要是方便对代码做优化工作。对于 Clang，中间代码就是 LLVM IR。
      使用 ``clang -emit-llvm `` 命令产生中间代码，配合 -S 输出文本，否则输出字节码。
   - **Compiler backend**: 编译器后端将中间代码转换为目标机器汇编代码。
      使用 ``clang -S``  命令生成汇编代码，然后停止后续步骤。
   - **Assembler**: 汇编程序将汇编代码转换为机器码对象文件，包含特定机器可以直接执行的指令。
      使用 ``clang -c`` 生成机器码对象文件，然后停止后续步骤。
   - **Linker**: 链接程序将多个对象文件链接成为一个映像（可执行文件或者共享库）。

   CPU 作为计算系统最重要的硬件资源，它在单位时间内容能执行的指令数是有限的，优化程序所能做的
   就是从以下方面着手：

      Execution-time    = Operation count * Machine cycles per operation    

   * 最小化操作，消减指令数量，包括算术、内存访问；
   * 使用简化运算替代复杂的运算，比如用 shift 指令替换乘法指令；
   * 降低数据、指令的缓存失败（cache misses）；
   * 利用多核心 CPU 资源并行处理，单位时间内执行更多的指令；

   为了进一步优化代码，很多编译器、解释器都向 JIT (Just In Time) 方向发展，Google V8 脚本
   引擎性能优异，很大程度上是因为实现了 JIT 编译。JIT 这个术语有两层意思：动态生成、动态运行代码。
   JIT 是相对于 AOT (Ahead Of Time) 概念而言的，AOT 就是常规的编译，在程序执行前编译好的代码，
   JIT 作用于 AOT 之后的程序执行阶段，也因此称之为懒编译 (late/lazy compilation)。

   代码优化需要花费时间，为了在快速启动和高度优化之间取得平衡，Java 虚拟机和 Firefox 浏览器等等
   使用了分层（Tiered）实现 JIT/AOT 编译技术。一般分为两层，第一层可以较快地生成本地代码；第二层
   编译器在后台线程中生成执行效果更好的代码。

   LLVM 提供 ORC JIT APIs，即是按需编译（On-Request Compilation），最新版本 ORC v2。

   * 卡内基梅隆大学现代编译器架构优化课程（2019 讲义可访问） `CMU 15-745 Fall '23 Projects`_
   * LLVM 教程文档： `LLVM Getting Started`_, `configuration files`_
   * LLVM 源代码阅读： `LLVM on github.dev`_, `LLVM on vscode.dev`_
   * ORC 实时编译技术文档： `ORC Design and Implementation`_
   * 编译器研发者 CPU 构架信息参考： `Architecture & Platform Information for Compiler Writers`_

.. _Fabrice Bellard: https://www.bellard.org/
.. _Chris Lattner: https://www.nondot.org/sabre/
.. _LLVM Getting Started: https://llvm.org/docs/GettingStartedTutorials.html
.. _ORC Design and Implementation: https://llvm.org/docs/ORCv2.html
.. _configuration files: https://clang.llvm.org/docs/UsersManual.html
.. _Assembling a Complete Toolchain: https://clang.llvm.org/docs/Toolchain.html
.. _Mojo: https://www.modular.com/max/mojo
.. _Crafting Interpreters by Robert Nystrom: https://www.craftinginterpreters.com
.. _Operating Systems - Three Easy Pieces: https://pages.cs.wisc.edu/~remzi/OSTEP/
.. _LLVM on github.dev: https://github.dev/llvm/llvm-project
.. _LLVM on vscode.dev: https://vscode.dev/github/llvm/llvm-project
.. _Architecture & Platform Information for Compiler Writers: https://llvm.org/docs/CompilerWriterInfo.html
.. _CMU 15-745 Fall '23 Projects: https://www.cs.cmu.edu/~15745/projects.html

   编译工作涉及一套工具链（toolchain），这套工具各自独立负责一个工序，包括编译（compile），
   链接库文件（link libraries）和生成归档（archives）等等。GCC 工具链包含 cc1 和 cc1plus，
   分别用于编译 C 语言和 C++ 语言的源代码文件。

   .. code-block:: sh

      > objdump -W .\.build\k0003.exe | grep DWARF
        DWARF Version:               5
        DWARF Version:               2

      > objdump -g .\.build\k0003.exe

      .\.build\k0002.exe:     file format pei-x86-64

      crt0.c:
      cygming-crtbeg:
      .\k0001.c:
      cygming-crtend:
      *globals*:
      typedef void void; ...

   注意：Windows 系统中，如果用户偏好设置 Bash 为默认终端，可能出现兼容性问题，主要是命令行
   出现的斜杠 \ 符号问题，Bash 将它当作转义起始符号，如果调试控制台 (Debug Console) 出现
   bash 提示的错误，多半是这个问题。Linux 系统应该不存在这种问题。

      bash: ers\bin\WindowsDebugLauncher.exe: No such file or directory

   如果喜好使用 Bash，可以在调试时临时切换默认终端（Select Default Profile）为 PowerShell。


   以上是手动调用编译并设置参数完成编译过程，这个过程完全可控，但是缺点是维护十分困难，在实际工程
   中根本不能使用，手动操作仅作教学使用。工程中这些工作完全使用自动化构建工具完成。早期的 Make 
   命令通过编写编译规则，设置构建目标及其依赖关系。然后调用 make 命令，由它检测那些代码已经完成
   编译，并且没有更新，没有更新的代码就可以省略重复的编译工作，提升了效率，对于大型项目非常重要。

   现代拥有大量自动构建工具，Make 这种直接控制编译器的脚本也不用手写了，而是使用像 CMake 这种
   构建脚本生成工具来完成。开发都只需要编写更上层的控制语句，编译的调用及其参数设置基本上由自动化
   工具代劳。只需要给 VS Code 安装官方 ``CMake Tools`` 插件，就可以通过命令面板使用 CMake。还可以
   选择安装 CMake Language Support 以提供脚本文件自动完成功能，不过需要安装 .NET 6 Runtime。
   有推销 .NET 之嫌，建议参考 CMake 文档编写脚本。

   CMake 默认脚本文件名称为 CMakeLists.txt，默认构建输出目录为 build，可以在插件配置面板修改
   默认值。安装好 ``CMake Tools`` 插件并启用后，编辑构建脚本并保存，就会触发执行 CMake 生成器。
   假定创建了一个名为 ``hi_kernel`` 的项目，当前只有一个 ``k0001.c`` 源文件，它编译后要产生
   一个可执行程序，那么 CMake 脚本就可以如下这样编写：

   .. code-block:: cmake

      project(hi_kernel C)

      add_executable(k0001 k0001.c)


   CMake 构建项目分为两步：生成构建脚本（Ninja、Makefile 等等）或工程文件（MSVC 项目等），
   然后根据生成的脚本或工程执行构建。执行前一个步骤的程序称为生成器（Generator），CMake 提供
   多种生成器。编译时设置 --verbose 参数可以查看 CMake 调用什么编译以及使用了什么编译参数。
   参考 `CMake Generator`_。

   .. code-block:: sh

      cmake -S . -B .build/Debug -DCMAKE_BUILD_TYPE=Debug -G Ninja
      cmake --build .build/Debug --verbose

.. _CMake Generator: https://cmake.org/cmake/help/latest/manual/cmake-generators.7.html
.. _CMakeCCompilerABI: https://github.com/Kitware/CMake/blob/master/Modules/CMakeCCompilerABI.c
.. _CMakeCXXCompilerABI: https://github.com/Kitware/CMake/blob/master/Modules/CMakeCXXCompilerABI.cpp

   CMake 提供一个 ``CMAKE_BUILD_TYPE`` 变量用来配置构建类型，它也是配置编译优化选项的变量：

   .. _Building LLVM with CMake: https://llvm.org/docs/CMake.html
   
   =========================== ============= ========== ========== ==========================
   Build Type                  Optimizations Debug Info Assertions Best suited for
   =========================== ============= ========== ========== ==========================
   **Release**                 For Speed     No         No         Users of LLVM and Clang

   **Debug**                   None          Yes        Yes        Developers of LLVM

   **RelWithDebInfo**          For Speed     Yes        No         Users that also need Debug

   **MinSizeRel**              For Size      No         No         When disk space matters
   =========================== ============= ========== ========== ==========================

   CMake 在初始化时，CMakeTestCCompiler.cmake 模块会对系统中可用的编译器进行检测，并尝试用
   ``try_compile`` 命令调用编译器来编译检测程序（CMakeCCompilerABI_ CMakeCXXCompilerABI_）
   以确认编译器 ABI 兼容性。过程出现错误通常都与编译器的安装、环境配置等有关。如果，要分析问题根源，
   就需要了解编译程序的工作流程及步骤。

   CMake 还会使用 `CMakeCCompilerId` 或者 `CMakeCXXCompilerId` 检测程序以确定编译器厂商，
   如果在项目中混入并编译这些代码，则会导致多得 main 函数冲突：

      cmakecxxcompilerid.cpp:514: multiple definition of `main';

   比如，以下这种错误显示测试程序的链接步骤失败：

   .. code-block:: bash

      [2/2] Linking C executable cmTC_b5137.exe
      FAILED: cmTC_b5137.exe 
      cmd.exe /C "cd . && C:\msys64\usr\bin\gcc.exe  \
               -v CMakeFiles/cmTC_b5137.dir/CMakeCCompilerABI.c.obj \
               -o cmTC_b5137.exe -Wl,--out-implib,libcmTC_b5137.dll.a \
               -Wl,--major-image-version,0,--minor-image-version,0   && cd ."
      系统找不到指定的路径。

   控制台输出的信息“系统找不到指定的路径”是一个非常抽象的描述，究竟是什么系统找不到什么的路径呢？
   这只能靠经验来猜测，如果是 cmd.exe 路径找不到，输出的信息应该是 shell 程序的错误信息格式。
   如果是 gcc 编译器找不到头文件，那么就不应该是在链接阶段报错；如果是链接程序找不到库文件，显然
   是极有可能的情况。Winows 系统上使用 MSYS2 环境，gcc 编译器会用到一系列 Windows API 共享库，
   缺失/误删这些文件都有可能导致链接失败：

      -lkernel32 -luser32 -lgdi32 -lwinspool -lshell32 -lole32 -loleaut32 -luuid -lcomdlg32 -ladvapi32

   可以手动执行编译器以确认这些依赖库文件是否存在：

   .. code-block:: bash

      gcc -std=c17 -o .build/g0002 .\src\k0000.c -ladvapi32 

   编译器，严格来说是 gcc 编译驱动器（driver）可以向底层的汇编程序、预处理器、链接程序传递一系列
   参数，使用以下选项实现，前面输出的错误信息中 --out-implib 就是给链接程序传递的参数：

   .. code-block:: bash
      
      -Wa,<options>            Pass comma-separated <options> on to the assembler.
      -Wp,<options>            Pass comma-separated <options> on to the preprocessor.
      -Wl,<options>            Pass comma-separated <options> on to the linker.

   以上编译命令中出现的 libcmTC_xxx 就是测试程序产生的一个链接库文件，它应该可以在编译器前面的
   工作中产生，日志文件中也应该有记录。如果没有这个库，那么可能是构建工具出现了什么问题面导致的问题。
   可以检查 CMakeFiles/CMakeError.log 日志文件，这里提供更丰富的信息供分析问题的根源，比如，
   程序目标平台（Target）、编译器版本，头文件搜索路径、库文件路径等信息：

   .. code-block:: bash

      Target: x86_64-pc-msys
      ...
      GNU C17 (GCC) version 13.2.0 (x86_64-pc-msys)
      	compiled by GNU C version 13.2.0, GMP version 6.3.0, MPFR version 4.2.1, MPC version 1.3.1, isl version isl-0.26-GMP
      ...
      #include "..." search starts here:
      #include <...> search starts here:
      /usr/lib/gcc/x86_64-pc-msys/13.2.0/include
      /usr/lib/gcc/x86_64-pc-msys/13.2.0/include-fixed
      /usr/include
      /usr/include/w32api
      End of search list.
      ...
      LIBRARY_PATH=/usr/lib/gcc/x86_64-pc-msys/13.2.0/:/usr/x86_64-pc-msys/lib/:/usr/:/usr/lib/

   以上问题就是在 Ninja 1.11.1 中出现的链接库缺失问题，libcmTC_xxx 其实是测试程序的工程名。
   但未知何种原因，Ninja 脚本中会将其作为链接库使用。CMake 支持多种 Generator，除了 Ninja，
   还可以切换其它自动构建工具试试，比如以下几种都和 GNU Make 比较搭配：

   .. code-block:: bash

      cmake -S . -B .build/a -G "Ninja"
      cmake -S . -B .build/a -G "Unix Makefiles"
      cmake -S . -B .build/a -G "MSYS Makefiles"
      cmake -S . -B .build/a -G "MinGW Makefiles"
   
   GNU Make 使用命令名称是 make。 `MinGW Make` 或者 `NMake` 各自有独特的构建工具命令名称，
   可以设置 CMAKE_MAKE_PROGRAM 指向正确的构建工具命令，比如 Mingw32-make，以免 CMake 提示
   找不到构建工具可用。

   可以尝试在 Linux (Ubuntu 20) 环境下测试 CMake，看是系统环境还是 CMakeFiles.txt 脚本问题。
   Ubuntu 20 系统软件仓库中目前似乎最高版本只有 GCC 9.4.0，只支持到 c++2a 草案，GCC 13 则较好地
   支持 c++20 标准规范，使用 `gcc -v --help | grep "std="` 命令查询规范支持列表。Ubuntu 
   系统使用 GCC 13 支持 C++20 规范有多个选择：升级到最新 Ubuntu 版本，或者编译 GCC 源代码安装。
   最轻松的是选择可信的第三方软件源 (PPA - Personal Package Archive)，GCC 安装命令参考如下：

   .. code-block:: bash

      sudo apt update
      sudo add-apt-repository ppa:ubuntu-toolchain-r/test
      sudo apt-get install build-essential gcc gcc-13 g++-13

      sudo apt list | grep "build-essential"
      sudo apt upgrade "build-essential"
      sudo apt search "build-essential"

      $ g++-13 --version
      g++-13 (Ubuntu 13.1.0-8ubuntu1~20.04.2) 13.1.0

   使用国内 PPA 源服务器可提升下载速度方法，修改 /etc/apt/sources.list.d 目录下面的代理地址
   设置，更改为中科大代理 PPA 地址。需要管理员权限，可以使用 ``sudo vim`` 命令。修改后的配置
   内容参考如下所示：

   .. code-block:: bash

      deb https://launchpad.proxy.ustclug.org/ubuntu-toolchain-r/test/ubuntu/ jammy main
      # deb https://ppa.launchpadcontent.net/ubuntu-toolchain-r/test/ubuntu/ jammy main
      # deb-src https://ppa.launchpadcontent.net/ubuntu-toolchain-r/test/ubuntu/ jammy main

   不过，切换软件源后，可能因为 Ubuntu 20.04 依赖问题没解决好导致不能安装 GCC 13：

      Depends: libisl23 (>= 0.15) but it is not installable

   CMake 脚本中不认 c++2a 这样的规范，只能使用 c++17 或者 c++20 这样的规范，构建脚本会向编译器
   传递 -std=gnu++2a 这样的参数：

   .. code-block:: bash

      set(CMAKE_CXX_COMPILER g++-13)
      set(CMAKE_C_COMPILER   gcc-13)

      if (CMAKE_SYSTEM_NAME MATCHES "Linux")
         set(CMAKE_CXX_STANDARD 20)
      else()
         set(CMAKE_CXX_STANDARD 23)
      endif()

      project(hi_kernel C CXX)
      cmake_minimum_required(VERSION 3.0)

      # set(CMAKE_LIBRARY_PATH "c:/msys64/usr/lib/w32api/")
      # link_directories("c:/msys64/usr/lib/w32api/")

      add_executable(k0000 src/k0000.c)
      add_executable(k0001 src/k0001-generic-errors.c)

      add_executable(g0001 src/g0001-diff-ccpp.cpp)
      add_executable(g0002 src/g0002.cpp)


   CMake 各版本对 C++ 规范的支持度：

      ============ ============= ============
      CXX_STANDARD CMake Version C++ Standard
      ============ ============= ============
      98           3.1           C++98
      11           3.1           C++11
      14           3.1           C++14
      17           3.8           C++17
      20           3.12          C++20
      23           3.20          C++23
      26           3.25          C++26
      ============ ============= ============

   以下是 tasks.json 任务配置参考，包含 CMake 任务 Debug 和 Realease 两套配置，以及直接脚本
   调用编译器编译程序，注意任务 ``label``，它在其它依赖它的子任务中 ``dependsOn`` 用作引用，
   并且，后面 ``launch.json`` 调试系统配置也会通过 ``label`` 引用任务作为调试的前缀工作：

   .. code-block:: json

      {
          // See https://go.microsoft.com/fwlink/?LinkId=733558
          // for the documentation about the tasks.json format
          "version": "2.0.0",
          "tasks": [
              {
                  "label": "CMake Build [Debug]",
                  "type": "shell",
                  "command": "cmake --build .build/Debug --verbose",
                  "problemMatcher": [],
                  "dependsOn": ["Prepare build folder", "CMake Generate [Debug]"],
                  "dependsOrder": "sequence",
                  "group": {
                      "kind": "build",
                  }
              },
              {
                  "label": "CMake Build [Release]",
                  "type": "shell",
                  "command": "cmake --build .build/Release --verbose",
                  "problemMatcher": [],
                  "dependsOn": ["Prepare build folder", "CMake Generate [Release]"],
                  "dependsOrder": "sequence",
                  "group": {
                      "kind": "build",
                  }
              },
              {
                  "label": "CMake Generate [Release]",
                  "type": "shell",
                  "command": "cmake -S . -B .build/Release -DCMAKE_BUILD_TYPE=Release -G Ninja"
              },
              {
                  "label": "CMake Generate [Debug]",
                  "type": "shell",
                  "command": "cmake -S . -B .build/Debug -DCMAKE_BUILD_TYPE=Debug -G Ninja"
              },
              {
                  "label": "Build Active File",
                  "type": "shell",
                  "command": "gcc -gdwarf-2 -g3 '${fileBasename}' -o '.build/${fileBasenameNoExtension}.exe'",
                  "problemMatcher": [],
                  "dependsOn": ["Prepare build folder"],
                  "dependsOrder": "sequence",
                  "group": {
                      "kind": "build",
                      "isDefault": true
                  }
              },
              {
                  "label": "Prepare build folder",
                  "type" : "shell",
                  "command": "rm.exe -rf '${workspaceFolder}/.build'; mkdir '${workspaceFolder}/.build'"
              }
          ]
      }

   构建任务配置文件 ``launch.json`` 包含三个调试配置，Launch [Release] 配置会调用 CMake 
   Build [Release]。因为没有生成调试信息，VS Code 在代码文件中的断点也不起作用。手动调用编译器
   的配置是 Launch raw [Debug]，这里可以使用 shell 命令做一些测试。因为 Windows 系统下安装
   MSYS2 环境运行 gdb 调试器，有可能出现目录分隔符，\ 和 / 的兼容性问题，会导致调试器不能正确
   读取待调试程序。根据参考文档，``program`` 属性必须指定全路径（full path），否则不能加载程序。
   另外，``${workspaceRoot}`` 和 ``${workspaceFolder}`` 变量还有些许区别，前者是项目根
   目录，即 VS Code 打开的目录，后者是 .code-workspace 文件所在目录。

   .. code-block:: json

      {
          // Use IntelliSense_ to learn about possible attributes.
          // Hover to view descriptions of existing attributes.
          // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
          "version": "0.2.0",
          "configurations": [
              {
                  "name": "(gdb) Launch [Debug]",
                  "type": "cppdbg" ,
                  "request": "launch",
                  "program": "${workspaceFolder}/.build/Debug/${fileBasenameNoExtension}.exe",
                  "cwd": "${fileDirname}",
                  "MIMode": "gdb",
                  "miDebuggerPath": "C:/msys64/usr/bin/gdb.exe",
                  "preLaunchTask": "CMake Build [Debug]",
              },
              {
                  "name": "(gdb) Launch [Release]",
                  "type": "cppdbg",
                  "request": "launch",
                  "program": "${workspaceFolder}/.build/Release/${fileBasenameNoExtension}.exe",
                  "cwd": "${fileDirname}",
                  "MIMode": "gdb",
                  "miDebuggerPath": "C:/msys64/usr/bin/gdb.exe",
                  "preLaunchTask": "CMake Build [Release]",
              },
              {
                  "name": "(gdb) Launch raw [Debug]",
                  "type": "cppdbg",
                  "request": "launch",
                  "program": "${workspaceRoot}/.build/${fileBasenameNoExtension}.exe",
                  // "program": "c:\\msys64\\usr\\bin\\bash.exe",
                  "args": ["-c", "echo $PWD : ${workspaceRoot} : ${workspaceFolder}; tree -a ."],
                  "stopAtEntry": false,
                  "cwd": "${workspaceFolder}\\",
                  "preLaunchTask": "Build Active File",
              }
          ]
      }

.. _S15: #S15

/🟡VS Code Extensions
=====================

   VS Code 本身使用 TypeScript 脚本语言和 Node.js 构建实现，并提供良好的插件扩展机制，通过
   开发自己的插件扩展可以进一步定制 VS Code，官方文档提供大量插件案列及文档材料。以下是插件扩展
   能力（Extension Capabilities），不仅限于此列表功能：

   - Registering commands, configurations, keybindings, or context menu items.
   - Storing workspace or global data.
   - Displaying notification messages.
   - Using Quick Pick to collect user input.
   - Open the system file picker to let users select files or folders.
   - Use the Progress API to indicate long-running operations.

   VS Code 整个程序界面称为工作台（Workbench），它包含以下 UI 组件，它们都具有扩展能力，
   可以编写插件扩展它们（Extending Workbench）：

   - Title Bar
   - Activity Bar
   - Side Bar
   - Panel
   - Editor Group
   - Status Bar

   .. figure:: https://code.visualstudio.com/assets/api/ux-guidelines/examples/architecture-containers.png
      :alt: UX Guidelines - Overview of Visual Studio Code containers elements
      :target: https://code.visualstudio.com/api/ux-guidelines/overview

   - `Visual Studio Code - github <https://github.com/Microsoft/vscode-docs/>`__
   - `Extension samples <https://github.com/microsoft/vscode-extension-samples>`__

   插件安装目录 .vscode 位于用户主目录（Home），可以使用 MSYS2 或者 WSL 提供的命令查看这些
   插件分别占用的空间。因为卸载旧版本时，过时插件的文件存在残留，可以根据此来决定回收哪些插件占用
   的磁盘空间。插件安装有个基本逻辑：更新插件版本或卸载插件时，文件会在下次启动时删除（旧版本）。

   .. code-block:: bash

      #!/usr/bin/env bash
      du -hd 2 "$USERPROFILE/.vscode/extensions" | sort -h

   除了插件安装目录，VS Code 还会使用缓存目录，存放程序运行产生的临时文件或用户配置，包括插件
   使用到的临时文件，比如 RedHat Java 插件为提供智能提示（org.eclipse.jdt.core）下载的
   API 文档等等：

   ========  ========================================
   Linux     $HOME/.config/Code
   macOS     $HOME/Library/Application\ Support/Code
   Windows   %APPDATA%\Code
   ========  ========================================

   VS Code 开源的最大好处是插件扩展特别丰富，一些常见问题都有解决方案。比如，Sublime Text 插件
   开发使用的是 Python 脚本，它本身提供了一个模块，要将 Sublime 脚本模块引入 VS Code 编程环境，
   就只可以安装 Pyright 或者 Pylance（推荐），并将外部模块路径添加到插件配置： Python › Analysis: Extra Paths

      C:/Program Files/Sublime Text/Lib/python38
      C:/Program Files/Blender Foundation/UPBGE-0.30-windows-x86_64/3.0/python/lib

   由于插件众多，配置项可以使用搜索过滤，@ext:ms-python.vscode-pylance，避免陷入配置泥潭。


   以下是 VS Code 编辑器与文档相关的对象类型定义：

   ==========================  ===============================
   ``TextEditor``              VS Code 主界面中编辑文件的编辑器对象。
   ``TextDocument``            在编辑器编辑的文档对象。
   ``Position``                光标在文档中的位置信息。
   ``Range``                   区间对象，代表一对有序的 Position。
   ``Selection``               文档内容选区，Range 子类型。编辑器通过属性（selections）支持多选区。
   ``TypeDefination``          文件类型定义，不同文件类型拥有功能不同。
   ==========================  ===============================


   [yzane.markdown-pdf](https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf)
   是一款 PDF 文档生成插件，它内部使用了基于 Chromium 开源浏览器抓屏的 `Puppeteer <https://pptr.dev/category/introduction>`__。
   此插件安装的浏览器（Chromium）是精简版本，裁剪掉与图形渲染无关的功能，不能播放视频，MP3 倒是
   可以播放，并且浏览文档非常快速。Puppeteer 比较友好的实现 Web 爬虫、自动化测试、页面捕获等功能。

   -  Automate form submission, UI testing, keyboard input, etc.
   -  Create an automated testing environment using the latest JavaScript and browser features.
   -  Capture a timeline trace of your site to help diagnose performance issues.
   -  Test Chrome Extensions.
   -  Generate screenshots and PDFs of pages.
   -  Crawl a SPA (Single-Page Application) and generate pre-rendered content (i.e. "SSR" (Server-Side Rendering)).

   它基于 Chrome DevTool Protocol 和 Headless Chrome 实现脚本自动化：

   -  ``Chrome DevTool Protocol (CDP)``

      CDP 基于 WebSocket 实现与浏览器内核的快速数据通道。
      CDP 分为多个域（DOM，Debugger，Network，Profiler，Console...），每个域中都定义了
      相关的命令和事件（Commands and Events）。基于 CDP 封装一些工具，就可以对 Chrome 
      浏览器进行调试及分析，比如常用的 “Chrome 开发者工具” 就是基于 CDP 实现的 Web 开发工具。

      如果以 remote-debugging-port 参数启动 Chrome，那么就可以看到所有 Tab 页面的开发者
      调试前端页面，还会在同一端口上还提供了 http 服务，主要提供以下几个接口：

      ===================================   ============================
      GET /json/version                     # 获取浏览器的一些元信息
      GET /json or /json/list               # 当前浏览器上打开的一些页面信息
      GET /json/protocol                    # 获取当前 CDP 的协议信息   
      GET /json/new?{url}                   # 开启一共新的 Tab 页面
      GET /json/activate/{targetId}         # 激活某个页面成为当前显示的页面
      GET /json/close/{targetId}            # 关闭某个页面
      GET /devtools/inspector.html          # 打开当前页面的开发者调试工具
      WebSocket /devtools/page/{targetId}   # 获取某个页面的 websocket 地址
      ===================================   ============================

   -  ``Headless Chrome``

      Headless 指的是无界面的环境中运行 Chrome，实属于无头无脸了。通过命令行或者脚本操作
      Chrome，无需人的干预，运行更稳定。只需要启动 Chrome 时添加参数 --headless 即可。

   .. code-block:: bash

      # Mac OS X 命令别名
      alias chrome="/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome"  

      # 开启远程调试
      chrome --headless --remote-debugging-port=9222 --disable-gpu 

      # 获取页面 DOM
      chrome --headless --disable-gpu --dump-dom https://www.baidu.com 

      # 截图
      chrome --headless --disable-gpu --screenshot https://www.baidu.com 

   `List of Chromium Command Line Switches <https://peter.sh/experiments/chromium-command-line-switches/>`__

.. _S16: #S16

/🟡VS Code and Android
======================

   项目模板参考： https://github.com/jimboyeah/demo/tree/android_with_vscode

   VS Code 创建 Android 项目，需要根据使用需求安装以下一些插件：

   - Java Extension Pack，此插件包含有 6 个插件：
      -  **Language Support for Java(TM) by Red Hat** - Java Linting, Intellisense, 
         formatting, refactoring, Maven/Gradle support and more...
      -  **Debugger for Java by Microsoft** - A lightweight Java debugger for Visual Studio Code
      -  **Test Runner for Java by Microsoft** - Run and debug JUnit or TestNG test cases.
      -  **Project Manager for Java by Microsoft**-  Manage Java projects in Visual Studio Code
      -  **IntelliCode by Microsoft** - AI-assisted development
      -  **Maven for Java by Microsoft** - Manage Maven projects, execute goals, 
         generate project from archetype, improve user experience for Java developers.

   - Android Extension Pack，此插件包提供 Android SDK、Gradle 等集成支持、支持布局预览等。
      - **Android for VS Code** 插件（adelphes）提供应用调试功能。
      - **Android Full Support** 插件提供应用项目模板创建等功能，自带 Kotlin LSP 和 SDK 工具，似乎没什么用。
      - **Android ADB WLAN** 插件提供无线连接操作，可以直接使用 adb 命令进行连接。
      - **Android Studio Logcat** 插件提供 adb 日志查询界面，需要熟悉 logcat 过滤器的使用。

   - **Kotlin Language**，此插件提供 Kotlin 语言的支持，如果需要使用可以考虑安装。
   - **Kotlin** Kotlin IDE for Visual Studio Code，依赖以下两个插件，提供代码智能提示、调试等功能。
      - `Kotlin language server <https://github.com/fwcd/kotlin-language-server>`__
      - `Kotlin debug adapter <https://github.com/fwcd/kotlin-debug-adapter>`__

   Android 团队为 Gradle 项目管理提供了 AGP 插件（Android Gradle plugin）：

   *  ``com.android.application`` 插件提供 Gradle 任务用于构建 apk；
      https://developer.android.google.cn/build/releases/gradle-plugin

   *  ``com.android.library`` 插件提供 Gradle 任务构建 Android Library;
      https://developer.android.google.cn/studio/projects/android-library

   .. image:: https://developer.android.google.cn/static/images/build/android-sdks.png
      :target: https://developer.android.google.cn/build?hl=en

   按照 Android 应用开发的流程，使用 Android Sudio 或者 VS Code 作为开发工具，没有根本的区别。
   只不过 Android Studio 作为官方的开发集成环境，它提供了默认的配套环境，也提供了更完善的功能支持。
   VS Code 环境配置则需要用户在熟悉 Android SDK 开发组件的前提自行配置。

   Android 应用可以使用 Flutter UI 框架进行开发，此框架使用 Dart 脚本语言，安装相应的插件支持。
   安装 Gradle 集成可能会占用较多资源，如果熟悉 gradle 命令行，可以选择不安装此插件。安装好插件，
   需要用户在配置页面设置以下配置项：
   
   *  JAVA SDK 下载安装。
   *  Android SDK Tools 配置（Sdk Location），默认使用 ``${ANDROID_SDK_ROOT}`` 环境变量，可以指定 SDK 路径。

   使用 VS Code 开发 Android App 只是一个可选项，Android Studio 作为官方开发平台（IDE），拥有
   更丰富特性，包括更智能的类型提示，可视化设计，包括矢量图形的支持，这些功能都是 VS Code 环境缺失的。
   Android 5.0 (API 21)开始引入矢量图支持，矢量图的常用格式是 SVG，Android 引入了自己的 XML
   格式，使用 ``<vector>`` 节点来表示 ``VectorDrawable`` 矢量图形。
   `Vector drawables overview <https://developer.android.google.cn/develop/ui/views/graphics/vector-drawable-resources>`__
   
   Android 5.0 之前只支持位图，默认格式是 png。但是 Android 设备分辨率的多样性，导致位图素材
   需要适配不同的屏幕尺寸，而矢量图可无损缩放的特性很好地解决了屏幕适配问题。因此，Android 5.0 
   版本之后，如果采用矢量图形，就不再需要做位图适配。

   可以将所有矢量图形文件（xml）保存到 Drawable 资源目录下。也可以创建一个 ``mipmap-anydpi``
   资源目录，将矢量图形应用到所有屏幕尺寸。工程资源目录下的 mipmap 子目录一般都是像素图像需要根据
   屏幕像素工艺密度来做适配，官方文档 Support different pixel densities 配图很好地说明了
   两个不同密度参数的屏幕，显示同样的 ``dp`` 单位的字符时所占据的物理像素数量的差别：

   .. figure:: https://developer.android.google.cn/static/images/screens_support/densities-phone_2x.png
      :target: https://developer.android.google.cn/training/multiscreen/screendensities

      Screen compatibility overview


   **Table 1.** Configuration qualifiers for different pixel densities.

   ================= =====================================================
   Density qualifier Description
   ================= =====================================================
   ``ldpi``          (~120 dpi)  Resources for low-density screens.
   ``mdpi``          (~160 dpi)  Resources for medium-density screens. (baseline density)
   ``hdpi``          (~240 dpi)  Resources for high-density screens.
   ``xhdpi``         (~320 dpi)  Resources for extra-high-density screens.
   ``xxhdpi``        (~480 dpi)  Resources for extra-extra-high-density screens.
   ``xxxhdpi``       (~640 dpi)  Resources for extra-extra-extra-high-density uses.
   ``nodpi``         Resources for all densities. These are density-independent resources.
   ``tvdpi``         Resources for screens somewhere between mdpi and hdpi; approximately ~213 dpi.
   ================= =====================================================

   像素与“密素”的计算关系是 ``px = dp * (dpi / 160)``，应用中使用倍率计算与像素之间的转换关系，
   ``DisplayMetrics.density`` = densityDpi / 160。标准工艺下，16px = 16dp = 2.5 mm
   （1 英寸 = 2.54 厘米）。

   比如一个大小为 48x48 像素的图形适配尺寸如下，使相同的资源文件名称，但是存放到不同密度名称的目录下：

   ======= ======== =========== =========== ===================================
   36x36   (0.75x)  (~120 dpi)  (ldpi)      for low density 
   48x48   (1.0x)   (~160 dpi)  (mdpi)      for medium density 
   64x64   (1.33x)  (~213 dpi)  (tvdpi)     for televisions screen 
   72x72   (1.5x)   (~240 dpi)  (hdpi)      for high density 
   96x96   (2.0x)   (~320 dpi)  (xhdpi)     for extra-high density 
   144x144 (3.0x)   (~480 dpi)  (xxhdpi)    for extra-extra-high density 
   192x192 (4.0x)   (~640 dpi)  (xxxhdpi)   for extra-extra-extra-high density 
   ======= ======== =========== =========== ===================================

   Android Studio 文件菜可创建矢量图形或者位图资源：File --> New --> Vector Asset/Image Asset。
   支持 SVG 与 PSD 格式的转换。但是不支持 SVG 矢量图中的动画，转换为 Android 专用的 XML 格式保存，
   矢量路径信息保存到 ``<vector>`` 节点内。Android Studio 中的 ``android`` 插件目录下包含
   一些基础的图形，比如矢量头像（avatar_1.xml ... avtar_16.xml），也包含了一系列风景背景图
   （scenic）。创建新项目时，选择 `Responsive Views Activity` 模板就会包含这些矢量图形资源。

   Android VectorDrawable 使用的 XML 标签虽然与 SVG 有所不同，但是路径中包含的矢量数据格式
   是兼容的，只需要修改节点的名称和属性名称就可以相互转换：

   .. code:: xml

      <!-- Android VectorDrawable -->
      <!-- https://github.dev/android/compose-samples/blob/main/Owl/app/src/main/res/drawable/ic_grain.xml -->
      <?xml version="1.0" encoding="utf-8"?>
      <vector
         xmlns:android="http://schemas.android.com/apk/res/android"
         android:width="24dp"
         android:height="24dp"
         android:viewportWidth="24"
         android:viewportHeight="24">
         <path android:fillColor="#FF000000" android:pathData="M16.5,3c-1.74,0 ... z" />
      </vector>

      <!-- SVG -->
      <?xml version='1.0' encoding='ascii'?>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1920" height="1080">
         <path fillColor="#FF000000" d="M16.5,3c-1.74,0 ... z" />
      </svg>

   虽然，VS Code 缺失这些图形设计方面的功能支持，但是使用 Jetpack Compose 这样的声明式图形框架
   作为开发 App 开发工具，这是现代 Android 开发环境，完全可以抛弃掉旧式 Android 图形界面的设计。

   Red Hat 提供的 Java LSP 智能提示功能基于 Eclipse™ JDT Language Server 实现，但是对
   Android Gradle 工程导入支持只是体验性功能，不能提供良好的 AndroidX 类库的智能提示。插件
   对 Android 项目支持配置项：Java › Jdt › Ls › Android Support。

   Android 作为一个基于 Linux 内核深度定制的移动操作系统，涉及众多领域的知识，这里有一份开发者
   学习路线图供参考： 
   
   *  `Android Developer Step by step guide to becoming an Android developer in 2024 <https://roadmap.sh/android>`__
   *  `Android Roadmap [SVG] <https://github.com/Jeangowhy/opendocs/blob/main/pictures/android_roadmap.svg>`__

   使用 Kotlin 作为 Android 应用开发语言，就需要在 Gradle 等自动化构建工具中配置好编译器插件。
   注意，虽然插件本身占用空间不大，但是不同的插件版本对应使用的 Kotlin 编译器版本也不同，如果频繁
   切换版本，则会下载多个版本的 Kotlin 编译器和标准库，同时还可能依赖不同版本的 Android SDK
   组件占用大量空间。并且，不同的版本的编译器搭配的开发框架及其它配套相关依赖也可能有版本兼容要求，
   比如 Japack Compose 的版本兼容关系：

   *  `Compatibility and versions <https://github.dev/JetBrains/kotlin-multiplatform-dev-docs/blob/master/topics/compose/compose-compatibility-and-versioning.md>`__
   *  `Compose to Kotlin Compatibility Map <https://developer.android.google.cn/jetpack/androidx/releases/compose-kotlin>`__

   | Compose Multiplatform | Jetpack Compose | Jetpack Compose Material3 | Kotlin |
   |-----------------------|-----------------|---------------------------|--------|
   | [1.6.11]              | 1.6.7           | 1.2.1                     | 1.9.24 |
   | [1.6.10]              | 1.6.7           | 1.2.1                     | 1.9.24 |
   | [1.6.2]               | 1.6.4           | 1.2.1                     | 1.9.24 |
   | [1.6.1]               | 1.6.3           | 1.2.1                     | 1.9.24 |
   | [1.6.0]               | 1.6.1           | 1.2.0                     | 1.9.24 |
   | [1.5.12]              | 1.5.4           | 1.1.2                     | 1.9.23 |
   | [1.5.11]              | 1.5.4           | 1.1.2                     | 1.9.22 |
   | [1.5.10]              | 1.5.4           | 1.1.2                     | 1.9.22 |
   | [1.5.1]               | 1.5.0           | 1.1.1                     | 1.9.0  |
   | [1.5.0]               | 1.5.0           | 1.1.1                     | 1.9.0  |
   | [1.4.3]               | 1.4.3           | 1.0.1                     | 1.8.10 |
   | [1.4.1]               | 1.4.3           | 1.0.1                     | 1.8.0  |
   | [1.4.0]               | 1.4.0           | 1.0.1                     | 1.8.0  |
   | [1.3.1]               | 1.3.3           | 1.0.1                     | 1.7.10 |
   | [1.3.0]               | 1.3.3           | 1.0.1                     | 1.7.10 |
   | [1.2.1]               | 1.2.1           | 1.0.0-alpha14             | 1.7.0  |
   | [1.2.0]               | 1.2.1           | 1.0.0-alpha14             | 1.7.0  |
   | [1.1.1]               | 1.1.0           | 1.0.0-alpha05             | 1.6.10 |
   | [1.1.0]               | 1.1.0           | 1.0.0-alpha05             | 1.6.10 |
   | [1.0.1]               | 1.1.0-beta02    | 1.0.0-alpha03             | 1.5.21 |
   | [1.0.0]               | 1.1.0-beta02    | 1.0.0-alpha03             | 1.5.10 |

   .. code-block:: bash

      # \.gradle\caches\modules-2\files-2.1\org.jetbrains.kotlin
      $ pushd $USERPROFILE/.gradle/caches; tree -fL 4 | grep kotlin | vim -; popd

   .. code-block:: kotlin

      plugins {
         id("com.android.application") version "8.1.2" apply false
         id("com.android.library") version "8.1.2" apply false
         id("org.jetbrains.kotlin.android") version "1.9.10" apply false
      }

      android {
         ...
         buildFeatures {
            compose = true
         }
         composeOptions {
            kotlinCompilerExtensionVersion = "1.5.13"
         }
      }

   Kotlin 插件提供的开发环境需要 JetBrains Runtime (JBR)，这是一个基于 OpenJDK 的跨平台的
   (Windows, Mac OS X, Linux) JCEF 框架运行时，作为 JetBrains IDE 全线产品的基础构成。
   Gaadle 项目中的 JetBrains 依赖会下载到 $USERPROFILE.gradle\caches\modules-2
   JetBrains 基本上所产品都是基于 Java Swing 开发的。比如 IDEA 、WebStorm 等等，都是
   使用 Java 开发的桌面端程序。利用开源的浏览器框架，JetBrains 就可以将工作重心放在产品设计上。
   而不必在 UI 实现的方式上花额外的时间，由于硬件性能的普遍提升，Web UI 框架也成为当今最流行
   的图形应用开发技术。
   
   The Chromium Embedded Framework (CEF) is a simple framework for embedding 
   Chromium-based browsers in other applications. 

   It supports enhanced class redefinition (DCEVM), features optional JCEF,
   a framework for embedding Chromium-based browsers, includes a number of 
   improvements in font rendering, keyboards support, windowing/focus subsystems, 
   HiDPI, accessibility, and performance, provides better desktop integration 
   and bugfixes not yet present in OpenJDK.

   JCEF is a Java port of CEF framework for embedding Chromium-based browsers 
   in applications using Swing.

   Embedding of the browser component inside the IDE allows amongst others:

   - rendering HTML content
   - previewing generated HTML (e.g., from Markdown)

   - `JCEF - Java Chromium Embedded Framework <https://intellij-sdk-docs-cn.github.io/intellij/sdk/docs/reference_guide/jcef.html>`__
   - `JBR with JCEF <https://github.com/JetBrains/JetBrainsRuntime>`__
   - `The Chromium Projects <https://www.chromium.org/Home/>`__

   开发 Android 应用程序必需有软件开发工具包: Android SDK (Software Development Kit)。
   现在的 Android Studio 包含了 SDK 安装功能，通过其工具菜单就可以安装 SDK 各个组件。在早期
   提供的 SDK 安装包中包含了 Android SDK tools，它包含的工具和最新的 Command Line Tools
   工具包基本一致，就是多了一个可以用于命令行创建工程模板的 ``android`` 脚本，以及模拟器命令等。
   这个脚本主要用于手动管理 SDK, AVD, 以及项目管理，但是最新命令行工具包中不再提供这个脚本工具。
   并且最新的 Android SDK Tools 提供的脚本也不再支持项目管理功能，推荐使用 Android Sutio。
   也就是使用 Intellj IDEA 环境中的 ``Android`` 插件进行项目管理操作。如果要使用命令行创建
   项目，可以使用老版本 SDK，比如 Android SDK r24.4.1 或者 r25.2.5。使用以下命令创建一个
   Android 10 项目（API Level 29），根据需要修改项目名称和 Android API Level。脚本默认
   使用 Ant 作为自动化构建工具，可以使用 ``-g -v 8.2`` 这样的参数指定 Gradle 构建工具，
   以及适配的 Gradle Android plugin 版本：

   .. code-block:: bash

      android create project -n hi_app -t android-29 -p . -k org.example.hi_app -a hi_app
      # Action "create project":
      #   Creates a new Android project.
      #     Options:
      #     -n --name          : Project name.
      #     -p --path          : The new project's directory. [required]
      #     -a --activity      : Name of the default Activity that is created. [required]
      #     -k --package       : Android package name for the application. [required]
      #     -t --target        : Target ID of the new project. [required]
      #     -g --gradle        : Use gradle template.
      #     -v --gradle-version: Gradle Android plugin version.

   目前最新的 `Gradle Android plugin`_ 版本是 8.6，它的兼容性如下：

   ================  ===============  ===============  ======================
   Components        Minimum version  Default version  Notes
   ================  ===============  ===============  ======================
   Gradle            8.6              8.6              To learn more, see updating Gradle.
   SDK Build Tools   34.0.0           34.0.0           Install or configure SDK Build Tools.
   NDK               N/A              26.1.10909125    Install or configure a different version of the NDK.
   JDK               17               17               To learn more, see setting the JDK version.
   ================  ===============  ===============  ======================

.. _Gradle Android plugin: https://developer.android.google.cn/build/releases/past-releases/agp-8-4-0-release-notes

   使用 VS Code 开发应用，熟悉 `Android SDK <Android_Studio.rst>`__ 提供的开发工具很有必要，
   主要工具包括 cmdline-tools 工具包，以及平台工具，platform-tools 和 build-tools：
   
   *  SDK 管理工具（sdkmanager），用于安装 SDK 组件。
      比如 ``sdkmanager --install cmdline-tools;latest platform-tools``
   *  模拟器管理工具（avdmanager），用于创建基于 Qemu 的模拟器，以便使用软件进行模拟仿真。
   *  调试桥（ADB）：用于 USB 或无线连接手机，安装管理应用、调试日志的查询、执行各种命令。

   安卓开发工具安装及工具构建流程文档：

   *  命令行工具包（Android Command Line Tools） https://developer.android.google.cn/studio
   *  Android SDK Tools 下载 https://www.androiddevtools.cn/
   *  `Android SDK r24.4.1 <https://dl.google.com/android/android-sdk_r24.4.1-windows.zip>`__
   *  `Android SDK Tools r25.2.5 <https://dl.google.com/android/repository/tools_r25.2.5-windows.zip>`__
   *  `Android SDK samples-23_r02 <https://dl.google.com/android/repository/samples-23_r02.zip >`__
   *  `Android SDK 手动下载安装 <https://mirrors.cloud.tencent.com/AndroidSDK/>`__
   *  `Android SDK 命令行工具 <https://developer.android.google.cn/tools>`__
   *  `Understand the Android build system <https://developer.android.google.cn/build>`__
   *  `Build your app from the command line <https://developer.android.google.cn/build/building-cmdline>`__

   Android Studio 默认使用 Gradle 作为项目管理工具，创建 Android 项目有多种方法：

   * 使用 Android Studio 创建项目模板；
   * 使用 Android Samples 示范代码中的项目；
   * 使用 Android SDK Tools 提供的 ``android`` 脚本创建项目；

   项目创建后，会提供一系列 Gradle 任务，使用 ``./gradlew help tasks`` 查询可用任务。

   ========================== ============================================
   ./gradlew projects         显示当前工程中包含的项目；
   ./gradlew build            构建当前工程中包含的项目；
   installDebug               - Installs the Debug build.
   installDebugAndroidTest    - Installs the android (on device) tests for the Debug build.
   uninstallAll               - Uninstall all applications.
   uninstallDebug             - Uninstalls the Debug build.
   uninstallDebugAndroidTest  - Uninstalls the android (on device) tests for the Debug build.
   uninstallRelease           - Uninstalls the Release build.
   connectedAndroidTest       - Installs and runs instrumentation tests for all flavors on connected devices.
   connectedCheck             - Runs all device checks on currently connected devices.
   connectedDebugAndroidTest  - Installs and runs the tests for debug on connected devices.
   deviceAndroidTest          - Installs and runs instrumentation tests using all Device Providers.
   deviceCheck                - Runs all device checks using Device Providers and Test Servers.
   ========================== ============================================

   项目创建完成后，根据需要修改项目配置文件（build.gradle），添加依赖项或者修改构建选项。执行
   Gradle 构建任务，比如 ``./gradlew installDebug`` 就可以将构建好的 apk 程序包安装到
   已经连接的手机上。或者，安装到已启动模拟器中，如果没有连接真机。

   Android Studio 环境中，可以使用 AndroidJUnitRunner 运行那些 ``@RunWith(AndroidJUnit4::class)``
   标记为测试对象的测试用例。如何使用命令行，就需要执行 Gradle 任务，例如 ``./gradlew connectedCheck``
   就会运行测试，它会自动安装 App（connectedDebugAndroidTest）并尝试连接正在运行的 App。

   Android 应用开发过程中，自动化测试阶段包含两种测试：逻辑测试和实验测试，它些测试与代码目录组织
   关系对应如下：
   `Write automated tests <https://developer.android.google.cn/codelabs/basic-android-kotlin-compose-write-automated-tests>`__

   ==============  ======================  ===========================  =======
   business logic  local tests             module/src/test/java         JVM
   UI logic        instrumentation tests   module/src/androidTest/java  Android
   ==============  ======================  ===========================  =======

   业务逻辑上的测试就是一般的单元测试，直接在 JVM 环境上运行程序的部分（最小单元）代码，并根据其
   功能逻辑编写测试单元，测试程序运行于开发主机上安装的 JVM 环境中。UI 界面测试则是真机上运行的
   功能测试， ``Instrumentation`` 意指测量仪器，通过真机提供的环境，实现 UI 界面元素的测试，
   包含 UI 组件的交互行为，状态检查与验证。JUnit 是最流行的单元测试构架，它用于执行测试代码，
   如果是 UI 测试，需要还需要 ``Espresso`` 和 ``ActivityScenario`` 等专用构架。
   `Test your app <https://developer.android.google.cn/studio/test>`__

   Android 真机测试时，测试代码会打包到独立的 test apk 程序包，与主程序 app apk 一并安装到
   待测试环境。真机测试程序可以加载 test apk 与 app apk 到同一个系统进程，这样就可以通过测试
   代码访问应用的组件，并调用组件接口进行测试。UI 测试过程的行为根据编写的测试代码执行，测试程序
   （test apk）可以在在执行测试前、测试后分别执行 ``@Before`` 和 ``@After`` 注解的方法，
   它们可以用于执行诸如启动、关闭待测试 App 等工作。Android Studio 提供更易用的测试环境，并且
   可以连接设备的远程桌面。可以说， ``Activity`` 之于 App， 就如 ``Instrumentation`` 之于
   测试程序（test apk）。

   测试报告文件 ``test-result.pb`` 使用 Android Studio 查看（Run > Import Tests From File）。

   以下代码片段摘自 `Android Programming: The Big Nerd Ranch Guide, 5th Edition <https://github.com/sudhirkhanger/The-Big-Nerd-Ranch-Guide>`__
   随书代码，第六章 Testing：

   .. code::bash

      import androidx.test.core.app.ActivityScenario
      import androidx.test.core.app.ActivityScenario.launch
      import androidx.test.espresso.Espresso.onView
      import androidx.test.espresso.action.ViewActions.click
      import androidx.test.espresso.assertion.ViewAssertions.matches
      import androidx.test.espresso.matcher.ViewMatchers.withId
      import androidx.test.espresso.matcher.ViewMatchers.withText
      import androidx.test.ext.junit.runners.AndroidJUnit4
      import org.junit.After
      import org.junit.Before
      import org.junit.Test
      import org.junit.runner.RunWith

      @RunWith(AndroidJUnit4::class)
      class MainActivityTest {

         private lateinit var scenario: ActivityScenario<MainActivity>

         @Before
         fun setup() {
            scenario = launch(MainActivity::class.java)
         }

         @After
         fun teardown() {
            scenario.close()
         }

         @Test
         fun showsFirstQuestionOnLaunch() {
            onView(withId(R.id.question_text_view))
                  .check(matches(withText(R.string.question_australia)))
         }

         @Test
         fun showsSecondQuestionAfterNextPress() {
            onView(withId(R.id.next_button)).perform(click())
            onView(withId(R.id.question_text_view))
                  .check(matches(withText(R.string.question_oceans)))
         }

         @Test
         fun handlesActivityRecreation() {
            onView(withId(R.id.next_button)).perform(click())
            scenario.recreate()
            onView(withId(R.id.question_text_view))
                  .check(matches(withText(R.string.question_oceans)))
         }
      }

   Android 应用程序一般会产生以下几种类型的数据：

   *  file              普通的文件存储
   *  database          本地 SQLite 数据库（.db 文件）
   *  sharedPreference  配置数据 (.xml 文件）
   *  cache             图片缓存文件

   内部存储器有 App 专用数据目录保存，假设 App 包名为 ``com.xxx.xxx``：

   /data/data/com.xxx.xxx/files - 应用内文件
   /data/data/com.xxx.xxx/databases - 应用内数据库
   /data/data/com.xxx.xxx/shared_prefs - 应用内配置文件
   /data/data/com.xxx.xxx/cache - 应用内缓存
   /mnt/sdcard/android/data/com.xxx.xxx/cache - 外部 Cache 路径

   Android 中获取数据文件路径的方法：

   *  context.getExternalFilesDir() - 文件目录
   *  context.getExternalCacheDir() - 外部缓存目录
   *  contect.getCacheDir() - 内部缓存路径
   *  contect.getDatabasePath(String name) - 根据名字获取数据库

   SQLite 作为最流行的嵌入式数据库，Android 一直也在使用它来为 App 提供本地数据服务。最新版本
   Android Studio 4.1 提供 App 数据库连接服务，View -> App Inspector 面板可以连接正在设备
   上运行的 App 数据库（Database Inspector）。VS Code 中没有这样的功能插件，但是可以通过 adb
   连接 Android 模拟器，并通过执行以下命令来导出 SQLite 数据库文件。 ``run-as`` 只对 debuggable 
   状态下的 App 有效，并且只能访问指定 App 的专用数据目录（app-specific data）：

   .. code::bash

      adb shell "run-as <package-name> cp /data/data/<package-name>/databases/<database-name> /sdcard/"
      adb pull /sdcard/<database-name>

      pkg="com.example.cupcake" adb shell "run-as $pkg ls -lR /data/data/$pkg"

   数据库文件在首次运行 App 或者清理缓存数据后首次运行时才会从 APK 解包并复制到内部专用存储目录。

   Android 工程中，通常使用 ``Repository`` 类型代表一个数据库，即数据仓库，一般实现为单列模式，
   Singleton，即定义构造函数为私有， ``private constructor``，并提供一个方法，通过它调用
   ``Room.databaseBuilder()`` 返回数据实例。

   Jetpack Room 提供的数据持久化功能就基于 SQLite 数据库，并提供易于使用的 ORM 关系映射框架。
   官方教程参考： Persist data with Room。使用 Room 数据抽象层容易出现的问题：

   数据库 schema 导出处理，默认会导出 schema 用做数据库结构的版本比较，当数据库版本升级时，
   就可以执行迁移接口 ``Migration`` 提供的迁移函数，对数据库进行升级。如果在源代码中没有设置
   数据注解属性 ``exportSchema = false``，并且又没有设置 ``room.schemaLocation`` 指定
   导出 schema 保存路径，就会出现以下警告：

      warning: Schema export directory is not provided to the annotation 
      processor so we cannot export the schema. You can either provide 
      `room.schemaLocation` annotation processor argument OR set exportSchema 
      to false.
   
   解决方法是，设置数据库对象的注解，或者在 Gradle 配置文件中添加 ``room.schemaLocation``：

   .. code::kotlin

      @Database(
      version = 1,
      entities = [User::class],
      exportSchema = false
      )
      abstract class AppDatabase : androidx.room.RoomDatabase() {
      ...
      }
   
   DAO 接口方法返回的关系数据对象不能确定转换关系：

      Not sure how to convert a Cursor to this method's return type (java.lang.Object).
      public abstract java.lang.Object getCrime(@org.jetbrains.annotations.NotNull()

   DAO 接口读取数据库内容返回游标对象（Cursor），游标是以数据行为单元的数据集，数据行可随机读取。
   Kotlin 编译版本变更较大，特别是注解处理方面，经历了 KAPT 到 KSP 机制的升级，在切换 Gradle
   项目的配置时，改变 Kotlin 编译器插件也将导致配置插件依赖的变化，包括 KAPT 和 KSP 插件的配置，
   这些插件的版本配置错误，将导致 DAO 相关注解符号处理错误，从而产生 Cursor 对象的转换失败：

   .. code::kotlin
   
      // https://developer.android.google.cn/build/migrate-to-ksp?hl=en
      plugins {
         id("org.jetbrains.kotlin.kapt") version "1.8.10" apply false
         id("com.google.devtools.ksp") version "1.8.10-1.0.9" apply false
      }

      ksp {
         arg("room.schemaLocation", "$projectDir/schemas")
         arg("room.incremental", "true")
      }

      dependencies {
         // To use Kotlin annotation processing tool (kapt)
         // kapt("androidx.room:room-compiler:$room_version")
         // To use Kotlin Symbol Processing (KSP)
         ksp("androidx.room:room-compiler:$room_version")
      }

   为了避免数据读写层性能问题导致 UI 卡顿，所有数据接口必需在 UI 主线程外执行，Kotlin 提供了
   异步执行机制——协程，Jetpack 框架提供了 ``LiveData``。

   ================  =====================  ======================
   Query type        Kotlin features        Jetpack Lifecycle
   ================  =====================  ======================
   One-shot write    Coroutines (suspend)   N/A
   One-shot read     Coroutines (suspend)   N/A
   Observable read   Flow<T>                LiveData<T>
   ================  =====================  ======================

   * Room 2.2 开始支持 Kotlin ``Flow`` 写入可观察查询（observable queries）；
   * Room 2.1 开始支持 Kotlin ``suspend`` 关键字，异步协程实现 DAO 查询；

   在关系型数据库的 ORM 框架中，实体对象（entity）代表关系数据表中的一行数据，数据访问接口（DAO) 
   对应的是一组操作数据库数据 CURD（（CREATE、READ、UPDATE、DELETE））操作方法。
   
   如果数据表字段与实体类型的属性名称不一致，就需要使用映射注解，需要给实体对象的属性添加相应的注解，
   将相应属性映射到数据表的对应字段即可，例如 ``@ColumnInfo(name = "db_title")``：

   .. code::kotlin

      import androidx.room.*
      import kotlinx.coroutines.flow.Flow
      import java.util.UUID
      import java.util.Date

      @Entity
      data class Crime(
         @PrimaryKey val id: UUID,
         val title: String,
         val date: Date,
         val isSolved: Boolean,
         val suspect: String = ""
      )

      @Dao
      interface CrimeDao {
         @Query("SELECT * FROM crime")
         fun getCrimes(): Flow<List<Crime>>

         @Query("SELECT * FROM crime WHERE id=(:id)")
         suspend fun getCrime(id: UUID): Crime

         @Update
         suspend fun updateCrime(crime: Crime)

         @Insert
         suspend fun addCrime(crime: Crime)
      }

   SQLiteStudio 一个免费的、开源的、多平台 SQLite 数据库管理器，基于 C++ 与 Qt 框架。

   *  `Persist data with Room <https://developer.android.google.cn/codelabs/basic-android-kotlin-compose-persisting-data-room?hl=en>`__
   *  `Persist data with Room [code] <https://vscode.dev/github/google-developer-training/basic-android-kotlin-compose-training-inventory-app>`__
   *  `Migrate your Room database <https://developer.android.google.cn/training/data-storage/room/migrating-db-versions>`__
   *  `Debug your database with the <Database Inspector https://developer.android.google.cn/studio/inspect/database>`__

   安装了 Android for VS Code 插件，在配置调试器时，就可以通过 Go -> Add Configuration...
   创建配置文件，并且使用调试器的备选列表中由插件提供的 ``Android`` 选项，就可以自动添加以下配置，
   包含了直接运行并调试 App（launch 方法），以及附加调试方式（attach）以调试手机当前运行中的进程。
   可以根据需要以下 ``launch.json`` 配置文件，比如连接多设备，可以添加 "targetDevice" 以选择调试。
   为了方便执行构建、安装 apk 的流程，可以将构建任务作为运行调试器在前置任务（preLaunchTask），
   并且向 ``tasks.json`` 添加命令调用 gradle 执行构建任务：

   .. code-block:: cpp

      {
         // Use IntelliSense to learn about possible attributes.
         // Hover to view descriptions of existing attributes.
         // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
         "version": "0.2.0",
         "configurations": [
            {
                  "type": "android",
                  "request": "launch",
                  "name": "Android launch",
                  "appSrcRoot": "${workspaceRoot}/app/src/main",
                  "apkFile": "${workspaceRoot}/app/build/outputs/apk/debug/app-debug.apk",
                  // "targetDevice": "${command:PickAndroidDevice}",
                  "preLaunchTask": "gradle build",
                  "adbPort": 5037
            },
            {
                  "type": "android",
                  "request": "attach",
                  "name": "Android attach",
                  "appSrcRoot": "${workspaceRoot}/app/src/main",
                  "adbPort": 5037,
                  "preLaunchTask": "gradle build",
                  "processId": "${command:PickAndroidProcess}"
            }
         ]
      }

   .. code-block:: cpp

      {
         // See https://go.microsoft.com/fwlink/?LinkId=733558
         // for the documentation about the tasks.json format
         "version": "2.0.0",
         "tasks": [
            {
                  "label": "Android Test",
                  "type": "shell",
                  "problemMatcher": [],
                  "command": "./gradlew",
                  "args": ["compileDebugAndroidTestSources"],
            },
            {
                  "label": "gradle build",
                  "type": "shell",
                  "problemMatcher": [],
                  "command": "./gradlew build"
            },
            {
                  "label": "gradle installDebug",
                  "type": "shell",
                  "problemMatcher": [],
                  "command": "./gradlew installDebug"
            }
         ]
      }

   注意，项目模板创建日期是 2013 年，如果需要使用新版本的 Gradle 就需要考虑配置脚本语法及插件版本
   的适配问题。根据需要修改 gradle\wrapper\gradle-wrapper.properties 配置文件：

   .. code-block:: bash

      #Wed Apr 10 15:27:10 PDT 2013
      distributionBase=GRADLE_USER_HOME
      distributionPath=wrapper/dists
      zipStoreBase=GRADLE_USER_HOME
      zipStorePath=wrapper/dists
      distributionUrl=http\://services.gradle.org/distributions/gradle-1.12-all.zip
      #distributionUrl=https\://services.gradle.org/distributions/gradle-8.7-bin.zip

   模板中的测试代码使用的也是过时的 ``android.test.ActivityInstrumentationTestCase2``，
   API level 24 已被弃用。应使用 Android Testing Support Library 编写测试代码。应该改用
   ``ActivityTestRule`` 或者更新的 ``ActivityScenario``。使用 `Espresso`_ 测试 UI 控件。

   AndroidX Test API 进一步优化应用的测试，使用 Guava 团队提供的 Truth 创建更容易读懂的断言。
   在构建测试的验证步骤（或 then 步骤）时，可以使用此库来代替基于 JUnit 或 Hamcrest 的断言。
   使用 Truth Library (``com.google.common.truth.Truth``) 来表达某个对象具有特定属性，
   短语包含要测试的条件，例如：

   *  ``assertThat(object).hasFlags(FLAGS)``
   *  ``assertThat(object).doesNotHaveFlags(FLAGS)``
   *  ``assertThat(intent).hasData(URI)``
   *  ``assertThat(extras).string(string_key).equals(EXPECTED)``

.. _Fundamentals of testing Android apps: https://developer.android.google.cn/training/testing/fundamentals
.. _Advanced Android in Kotlin 05.1:Testing Basics: https://developer.android.google.cn/codelabs/advanced-android-kotlin-training-testing-basics
.. _Advanced Android Testing: https://vscode.dev/github/google-developer-training/advanced-android-testing
.. _Testing cheatsheet: https://developer.android.google.cn/develop/ui/compose/testing/testing-cheatsheet
.. _Espresso: https://developer.android.google.cn/training/testing/espresso

   模板使用的是 Java 语言，当时 Kotlin 才发布不到两年，如果使用 kotlin 编程就需要变更项目结构：

   .. code-block::

      ├── build.gradle
      ├── gradle
      │   └── wrapper
      │       ├── gradle-wrapper.jar
      │       └── gradle-wrapper.properties
      ├── gradlew
      ├── gradlew.bat
      ├── local.properties
      └── src
         ├── androidTest
         │   └── java
         └── main
            ├── AndroidManifest.xml
            ├── java
            └── res

   由于版本较旧，AndroidManifest.xml 中的配置也需要进行更新，比如 Activity 就需要显式导出，
   需要添加 ``android:exported="true"``。旧版本直接在 manifest 节点的 package 属性声明
   程序包名，新版本不支持此属性，直接忽略此值。

   新版本的 Gradle 使用的项目目录结构如下，App 应用使用单独子目录管理，并在项目根目录下的配置
   文件中（settings.gradle.kts）使用 ``include(":app")`` 指令包含进入项目树。

   .. code-block::

      ├── app
      │   ├── build.gradle.kts
      │   ├── libs
      │   ├── proguard-rules.pro
      │   └── src
      │       ├── androidTest
      │       ├── main
      │       │   ├── AndroidManifest.xml
      │       │   ├── java
      │       │   └── res
      │       └── test
      │           └── java
      ├── build.gradle.kts
      ├── gradle
      │   └── wrapper
      │       ├── gradle-wrapper.jar
      │       └── gradle-wrapper.properties
      ├── gradle.properties
      ├── gradlew
      ├── gradlew.bat
      ├── local.properties
      └── settings.gradle.kts

   以下是 Gradle 旧版本的与新版本的配置差别对比：

   .. code-block:: cpp

      // build.gradle（groovy）
      buildscript {
          repositories {
              mavenCentral()
          }
          dependencies {
              classpath 'com.android.tools.build:gradle:7.4'
          }
      }
      apply plugin: 'android'

      android {
          compileSdkVersion 'android-34'
          buildToolsVersion '34.0.0'

          buildTypes {
              release {
                  runProguard false
                  proguardFile getDefaultProguardFile('proguard-android.txt')
              }
          }
      }

   .. code-block:: cpp

      // build.gradle.kts （kotlin） 
      // Top-level build file where you can add configuration options common to all sub-projects/modules.
      plugins {
         id("com.android.application") version "8.2.0" apply false
         id("org.jetbrains.kotlin.android") version "2.0.0-RC2" apply false
      }

   新版本 Gradle 项目根目录的构建配置只有几行，是因为将应用的构建移动到了 app 子目录下。
   App 应用构建配置脚本（app/build.gradle.kts）参考如下：

   .. code-block:: bash

      plugins {
         id("com.android.application")
         id("org.jetbrains.kotlin.android")
      }

      android {
         namespace = "org.example.hi_app"
         compileSdk = 34

         defaultConfig {
            applicationId = "org.example.hi_app"
            minSdk = 29
            targetSdk = 34
            versionCode = 1
            versionName = "1.0"

            testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
         }

         buildTypes {
            release {
                  isMinifyEnabled = false
                  proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
            }
         }
         compileOptions {
            sourceCompatibility = JavaVersion.VERSION_1_8
            targetCompatibility = JavaVersion.VERSION_1_8
         }
         kotlinOptions {
            jvmTarget = "1.8"
         }
         buildFeatures {
            viewBinding = true
         }
      }

      dependencies {
         implementation("androidx.core:core-ktx:1.10.1")
         implementation("androidx.appcompat:appcompat:1.6.1")
         implementation("com.google.android.material:material:1.9.0")
         implementation("androidx.constraintlayout:constraintlayout:2.1.4")
         implementation("androidx.navigation:navigation-fragment-ktx:2.6.0")
         implementation("androidx.navigation:navigation-ui-ktx:2.6.0")
         testImplementation("junit:junit:4.13.2")
         androidTestImplementation("androidx.test.ext:junit:1.1.5")
         androidTestImplementation("androidx.test.espresso:espresso-core:3.5.1")
      }

   早期项目模板未包含 gradle.properties 和 settings.gradle.kts 等配置文件，以下供参考：

   .. code-block:: bash

      # gradle.properties

      # Project-wide Gradle settings.
      # IDE (e.g. Android Studio) users:
      # Gradle settings configured through the IDE *will override*
      # any settings specified in this file.
      # For more details on how to configure your build environment visit
      # http://www.gradle.org/docs/current/userguide/build_environment.html
      # Specifies the JVM arguments used for the daemon process.
      # The setting is particularly useful for tweaking memory settings.
      org.gradle.jvmargs=-Xmx2048m -Dfile.encoding=UTF-8
      # When configured, Gradle will run in incubating parallel mode.
      # This option should only be used with decoupled projects. More details, visit
      # http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:decoupled_projects
      # org.gradle.parallel=true
      # AndroidX package structure to make it clearer which packages are bundled with the
      # Android operating system, and which are packaged with your app's APK
      # https://developer.android.com/topic/libraries/support-library/androidx-rn
      android.useAndroidX=true
      # Kotlin code style for this project: "official" or "obsolete":
      kotlin.code.style=official
      # Enables namespacing of each library's R class so that its R class includes only the
      # resources declared in the library itself and none from the library's dependencies,
      # thereby reducing the size of the R class for that library
      android.nonTransitiveRClass=true

   .. code-block:: cpp

      // settings.gradle.kts

      pluginManagement {
         repositories {
            google()
            mavenCentral()
            gradlePluginPortal()
         }
      }
      dependencyResolutionManagement {
         repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
         repositories {
            google()
            mavenCentral()
         }
      }

      rootProject.name = "My Application"
      include(":app")

   ProGuard rules（proguard-rules.pro）为 Androi R8 工具（压缩，混淆，优化）设置规则。
   Android Gradle Plugin 3.4.0 或更高版本使用。R8 和 Proguard 相比，能够更快地缩减代码，
   同时改善输出大小，R8 默认处于启用状态。R8 普通模式可以兼容 Proguard，完全模式（fullMode）
   会启用一些额外的优化，这个时候可能需要一些其它 ProGuard 规则以避免运行时问题。可以在项目的
   gradle.properties 配置文件中设置以下选项来禁用 R8，或者启用启用完全模式：

   *  android.enableR8=false
   *  android.enableR8.fullMode=true

   .. code-block:: bash

      # Add project specific ProGuard rules here.
      # You can control the set of applied configuration files using the
      # proguardFiles setting in build.gradle.
      #
      # For more details, see
      #   http://developer.android.com/guide/developing/tools/proguard.html

      # If your project uses WebView with JS, uncomment the following
      # and specify the fully qualified class name to the JavaScript interface
      # class:
      #-keepclassmembers class fqcn.of.javascript.interface.for.webview {
      #   public *;
      #}

      # Uncomment this to preserve the line number information for
      # debugging stack traces.
      #-keepattributes SourceFile,LineNumberTable

      # If you keep the line number information, uncomment this to
      # hide the original source file name.
      #-renamesourcefileattribute SourceFile


.. _S17: #S17

/🟡Jetpack Compose UI
======================

   Android Jetpack Compose 官方示范工程： 

   *  `Now In Android <https://vscode.dev/github/android/nowinandroid/tree/main/docs>`__
   *  `Jetpack Compose samples <https://github.com/android/compose-samples/tree/main>`__
   *  `Jetpack Compose Codelabs <https://github.com/android/codelab-android-compose>`__
   *  `Android UI Testig Samples <https://github.com/android/testing-samples>`__

   Android 系统目前主推 Jetpack Compose，此 UI 框架使用声明式函数构建简单的界面组件。
   需要掌握可组合函数、基本布局以及 Material Design、列表和动画在 Compose 中的工作原理。
   Jetpack Compose 是用于构建原生 Android UI 的现代工具包。使用更少的代码，强大的工具和
   更直观的 Kotlin API，简化并加速 Android 应用上的 UI 开发。

   传统 Android 应用需要使用 Java/Kotlin 代码编写 Activity，或者在 XML 中编写布局代码。
   声明式的 Jetpack Compose 框架完全抛弃传统的复杂方式，用一种类似搭积木的风格来编写 UI 代码。
   “可组合函数”构造出 UI 组件实例，这样的函数可以使用 ``@Composable`` 标注，构造出的 UI 组件
   经过 Kotlin 编译器组合，并最终得到用户界面。Compose 中的可组合函数其实就是高阶函数。这种 UI
   开发体验和 React Web UI 构架非常相似。

   Jetpack Compose 完全基于 Kotlin 语言，但可以与 Java 编程语言完全互操作，并且可以直接
   访问所有 Android 和 Jetpack API。但是，Jetpack Compose 本身不支持 Java 语言。
   参考： `Kotlin for Java developers <https://developer.android.google.cn/kotlin/interop>`__

   Kotlin 作为一个比 Java 更现代的，同样基于 JVM 的编程语言，它的 lambda 表达式和 Groovy
   脚本一样方便。以下代码片断演示了 Kitlin 与 Java 代码的互调用（Java 调用 Kotlin）：

   .. code-block:: kotlin

      // Consider this Kotlin definition:

      fun interface GreeterCallback {
          fun greetName(String name)
      }

      fun sayHi(greeter: GreeterCallback) = /* … */

      // When invoked from Kotlin:
      sayHi { println("Hello, $it!") }

      // When invoked from Java:
      sayHi(name -> System.out.println("Hello, " + name + "!"));

   通过以上代码片断对比，Kotlin 代码明显更加简洁，它连只有一个参数的 lambda 表达式也作了简化，
   使用隐式参数 ``it`` 语法糖，这样就不用显式声明这个参数，也就不用额外编写参数列表，直接使用
   花括号包裹 lambda 函数体即可。由于 Kotlin 省略分号，因此换行很重要。这对于 C/C++ 用户有个
   小问题是，这对花括号很容易被误读成代码块。此代码风格设计便于实现 Single Abstract Method (SAM)。
   以上代码中，还展示了 Kotlin lambda 的经典用法，省略参数的简化表达，函数调用时接收的 lambda 简化，
   注意，sayHi {...} 是方法调用，只是省略了圆括号。这种 lambda 语法形式中直接使用了简化的表达，因为
   只有一个参数，可以使用隐式参数 ``it`` 表达，并且省略 lambda 参数列表。另外，lambda 作为其它方法的
   最后一个参数，将其编写在函数调用操作符号（圆括号）之后，这种语法称为 ``trailing lambda``。
   参考： `Kotlin Coding conventions <https://kotlinlang.org/docs/coding-conventions.html>`__

   =================================   ========================================
   Java                                Kotlin
   =================================   ========================================
   ``final`` object                    ``val`` object
   ``equals()``                        ==
   ==                                  ===
   Class that just holds data          ``data`` class
   Initialization in the constructor   Initialization in the ``init`` block
   ``static`` fields and functions     fields and functions declared in a ``companion object``
   Singleton class                     ``object``
   =================================   ========================================

   Compose 框架中，UI 组件通常使用可组合函数定义，这种函数可以理解为 ``@Composable (Input) -> Unit``，
   即输入的是数据，但输出值却不是通常意义的函数返回值，而是一个行为：插入 UI 元素到视图树中的注册动作。
   Kotlin ``Unit`` 和 Java ``void`` 非常像似，从一般语义上讲它们是等价物：没有返回值。但是，
   它们真正的区别在于，``void`` 是真的表示什么都不返回；``Unit`` 却是一个真实存在的类型：

   .. code-block:: kotlin

      public object Unit {
         override fun toString() = "kotlin.Unit"
      }

   也就是说 Kotlin 所有函数都有返回值，即便是一般意义上的无返回值也是返回一个 ``Unit`` 对象。
   它是一个 ``object``，也就是 Kotlin 里的单例类型或者说单例对象。当一个函数的返回值类型是
   ``Unit`` 的时候，Kotlin 会自动给它添加 return 返回一个 ``Unit`` 类型的对象。Kotlin
   语言这样设计的意义就在于，使用 ``Unit`` 去掉了无返回值的函数的特殊性，从而统一了函数形式。
   去除有返回值和无返回值的函数的本质区别，这样很多事做起来就会更简单。这种语言特性在现代编程
   语言中均有体现：TypeScript 中的“永不返回”类型 ``Never``；Rust 中的“不可计算”类型 ``!``；
   等等。

   相比其它早期的编程语言，Kotlin 还有更多“奇怪”的语法，比如以下摘自 Android 官方文档的代码片段：
   `Bottom sheets <https://developer.android.google.cn/develop/ui/compose/components/bottom-sheets>`__

   .. code:: prettyprint

      val sheetState = rememberModalBottomSheetState()
      val scope = rememberCoroutineScope()
      var showBottomSheet by remember { mutableStateOf(false) }
      Scaffold(
          floatingActionButton = {
              ExtendedFloatingActionButton(
                  text = { Text("Show bottom sheet") },
                  icon = { Icon(Icons.Filled.Add, contentDescription = "") },
                  onClick = {
                      showBottomSheet = true
                  }
              )
          }
      ) { contentPadding ->
          // Screen content

          if (showBottomSheet) {
              ModalBottomSheet(
                  onDismissRequest = {
                      showBottomSheet = false
                  },
                  sheetState = sheetState
              ) {
                  // Sheet content
                  Button(onClick = {
                      scope.launch { sheetState.hide() }.invokeOnCompletion {
                          if (!sheetState.isVisible) {
                              showBottomSheet = false
                          }
                      }
                  }) {
                      Text("Hide bottom sheet")
                  }
              }
          }
      }

   调用 ``Scaffold`` 组合函数不仅用了圆括号，后面还接了一对花括号，以 C/C++ 语法来看，这些代码
   就像是在定义一个函数，因为真的是太象了。但是 Kotlin 的函数是使用 ``fun`` 关键字定义的。以上
   这种函数调用语法之所以显得奇怪，是因为 Kotlin 语法设计首要目标是让代码更整洁、简练，后面的花括号
   其实就是一个 lambda 表达式，它是 ``Scaffold`` 函数的最后一个参数，跟在圆括号后面就有函数的错觉。
   Kotlin 只有函数参数中最后的一个参数为 lambda 时才能在传递 lambda 表达时写在圆括号后面。
   
   Kotlin 与 Compose 联系如此密切，以至 Google 采用作为 Modern Android 首推开发语言及 UI 框架。

   Android 原生的 UI 代码设计存在一些问题，一个重要的原因是 View.java 这个类实在是太大了，
   有太多的代码，它大到你甚至无法在 Githubs 上直接查看该文件，因为它实际上包含了 30000 行代码。
   对于一个代码文件来说，这很疯狂，应用开发所使用的几乎每一个 Android UI 组件都需要继承于 View。

   继前面的内内容，为了简化，主程序代码只完成布局配置文件（layout.xml）的加载，没有涉及其它功能：

   .. code-block:: java

      package org.example.hi_app;

      import android.app.Activity;
      import android.os.Bundle;

      public class hi_app extends Activity
      {
         /** Called when the activity is first created. */
         @Override
         public void onCreate(Bundle savedInstanceState)
         {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.main);
         }
      }

   配套的布局文件 ``app\src\main\res\layout\main.xml`` 内容参考：

   .. code-block:: xml

      <?xml version="1.0" encoding="utf-8"?>
      <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
         android:orientation="vertical"
         android:layout_width="fill_parent"
         android:layout_height="fill_parent"
         >
      <TextView
         android:layout_width="fill_parent"
         android:layout_height="wrap_content"
         android:text="Hello World, hi_app"
         />
      </LinearLayout>

   使用 Kotlin 语言改造 App 入口类，新语言最大的好处就是让代码更整洁，入口类名称有变动，
   需要相应更新 AndroidManifest.xml 清单文件中的设置：

   .. code-block:: kotlin

      package org.example.hi_app

      import android.app.Activity
      import android.os.Bundle
      import androidx.appcompat.app.AppCompatActivity

      class hi_app_kt : Activity()
      {
         /** Called when the activity is first created. 
         */
         override
         fun onCreate(savedInstanceState: Bundle?)
         {
            super.onCreate(savedInstanceState)
            setContentView(R.layout.main)
         }
      }

   API 22 提供的 ``AppCompatActivity`` 入口类，它本用来替代 ``ActionBarActivity``，提供
   Material Design 风格控件支持。也就是说，如果使用它来加载布局配置文件，就需要设置相应的
   ActionBar，否则 App 会在解释布局时出错而导致闪退。

   除了 JetBrains 官方文档，Goodle Android 官方文档也提供了以下 Kotlin 教程：
   `Kotlin Bootcamp for Programmers`_。

   In the Kotlin Bootcamp for Programmers course, you learn the basics of
   Kotlin as you create various small programs in IntelliJ IDEA.

   This course is geared towards programmers who know an object-oriented language
   such as Java or C++. If you're familiar with C#, some of the
   features of Kotlin will be familiar.

   *  `Lesson 1`_: Get started

      In Lesson 1, you learn how to work with the Kotlin REPL (Read-Eval-Print Loop)
      interactive shell, and you practice using the basic syntax of Kotlin code.

   *  `Lesson 2`_: Kotlin basics

      In Lesson 2, you learn how to use Kotlin data types, operators, and variables,
      and how to work with booleans and conditions. You explore the difference between
      nullable and non-nullable variables, and you practice using arrays, lists, and
      loops in Kotlin.

   *  `Lesson 3`_: Functions

      In Lesson 3, you learn how to create a program with a ``main()`` function and
      arguments in IntelliJ IDEA. You create small programs as you learn about
      default values, compact functions, list filters, basic lambdas, and
      higher-order functions.

   *  `Lesson 4`_: Classes and objects

      In Lesson 4, you learn about classes, objects, and inheritance in Kotlin.
      You create small programs as you learn about abstract classes, interfaces,
      and interface delegation.

   *  `Lesson 5.1`_: Extensions

      In Lesson 5.1, you learn about collections, constants, and extension functions in
      Kotlin. You create small programs as you learn about pairs, triples, lists, and
      hash maps for storing data, and implement extension functions to add
      functionality to existing classes.

   *  `Lesson 5.2`_: Generics

      In Lesson 5.2, you learn about generic classes, methods, and functions in Kotlin.
      You create a type hierarchy, make classes more flexible by making them
      generic, and extend their functionality with generic methods and functions.

   *  `Lesson 6`_: Functional manipulation

      In Lesson 6, you learn about annotations, labeled breaks, and Single Abstract
      Methods (SAMs). You also review lambdas and higher-order functions. You then create and
      use lambdas and higher-order functions, and learn about higher-order
      functions in the Kotlin Standard Library.


.. _Kotlin Bootcamp for Programmers: https://developer.android.google.cn/courses/kotlin-bootcamp/overview
.. _Lesson 1: Get started: https:codelabs.developers.google.cn/codelabs/kotlin-bootcamp-introduction
.. _Lesson 2: Kotlin basics: https://codelabs.developers.google.cn/codelabs/kotlin-bootcamp-basics
.. _Lesson 3: Functions: https://codelabs.developers.google.cn/codelabs/kotlin-bootcamp-functions
.. _Lesson 4: Classes and objects: https://codelabs.developers.google.cn/codelabs/kotlin-bootcamp-classes
.. _Lesson 5.1: Extensions: https://codelabs.developers.google.cn/codelabs/kotlin-bootcamp-extensions
.. _Lesson 5.2: Generics: https://codelabs.developers.google.cn/codelabs/kotlin-bootcamp-generics
.. _Lesson 6: Functional manipulation: https://codelabs.developers.google.cn/codelabs/kotlin-bootcamp-sams


   Android Studio 中创建 Compose 项目非常便捷，只需新建一个 Empty Activity 项目模板，
   然后设置使用 Kotlin 语言，以及使用 API level 21+ 即可支持 Jetpack Cmompose 框架。
   现有项目中引入 Compose 框架，可以修改 build.gradle.kt 配置脚本中设置：

   .. code-block:: kotlin

      android {
         buildFeatures {
            compose = true
         }

         composeOptions {
            kotlinCompilerExtensionVersion = "1.5.13"
         }

         defaultConfig {
            minSdk = 21
         }
      }

      dependencies {
         // implementation(projects.shared)
         implementation(libs.compose.ui)
         implementation(libs.compose.ui.tooling.preview)
         implementation(libs.compose.material3)
         implementation(libs.androidx.activity.compose)
         debugImplementation(libs.compose.ui.tooling)
      }

   另外，以上配置脚本还需要配合以下集中式依赖声明（gradle/libs.versions.toml）：

   .. code-block:: toml

      [versions]
      agp = "8.4.0"
      kotlin = "1.9.20"
      compose = "1.5.4"
      compose-compiler = "1.5.4"
      compose-material3 = "1.1.2"
      androidx-activityCompose = "1.8.0"

      [libraries]
      kotlin-test = { module = "org.jetbrains.kotlin:kotlin-test", version.ref = "kotlin" }
      androidx-activity-compose = { module = "androidx.activity:activity-compose", version.ref = "androidx-activityCompose" }
      compose-ui = { module = "androidx.compose.ui:ui", version.ref = "compose" }
      compose-ui-tooling = { module = "androidx.compose.ui:ui-tooling", version.ref = "compose" }
      compose-ui-tooling-preview = { module = "androidx.compose.ui:ui-tooling-preview", version.ref = "compose" }
      compose-foundation = { module = "androidx.compose.foundation:foundation", version.ref = "compose" }
      compose-material3 = { module = "androidx.compose.material3:material3", version.ref = "compose-material3" }

      [plugins]
      androidApplication = { id = "com.android.application", version.ref = "agp" }
      androidLibrary = { id = "com.android.library", version.ref = "agp" }
      kotlinAndroid = { id = "org.jetbrains.kotlin.android", version.ref = "kotlin" }
      kotlinMultiplatform = { id = "org.jetbrains.kotlin.multiplatform", version.ref = "kotlin" }
      kotlinCocoapods = { id = "org.jetbrains.kotlin.native.cocoapods", version.ref = "kotlin" }

   Kotlin 作为一个以跨平台开发为目标的开发平台，它可以同一个项目中同时开发 Android 和 iOS 应用，
   这种情况下，通常需要将共享代码使用一个 shared 模块（选择这个名称更符合语意），然后在项目根目录
   下的设置（settings.gradle.kts）中使用 ``include(":shared")`` 指令将其包含到项目树中。
   然后，在各个平台代码项目中，作为 implementation 方式引用这个共享代码模块。

   Kotlin 跨平台项目 (multiplatform projects) 中才可以使用 ``expect`` 和 ``actual``
   声明表达式，以引入底层 API，参考 KMP 文档 `Kotlin Multiplatform`_。例如，以下代码声明了
   底层的 ``getPlatform()`` 方法，它返回平台类型名称：

   .. code-block:: kotlin

      interface Platform {
         val name: String
      }

      expect fun getPlatform(): Platform
   
   目前，多平台项目需要使用在线 `Kotlin Multiplatform wizard`_ 创建项目模板，Android Sutdio
   也是如此，参考官方文档 `Create your multiplatform project`_。

   注意，Compose 对 Kotlin 编译器版本有要求，Compose Compiler Gradle plugin 版本配置。
   如果 build.gradle 脚本中使用的版本不兼容，则会有版本错误提示信息，根据所提示版本号修改
   build.gradle 中配置的版本。

   如果没有配置好 Compose 框架模块运行时依赖，执行构建任务时，就会提示类似以下的错误信息：

      The Compose Compiler requires the Compose Runtime to be on the class path, 
      but none could be found. The compose compiler plugin you are using (version 1.5.13) 
      expects a minimum runtime version of 1.0.0.

   .. code-block:: kotlin

      // Top-level build file where you can add configuration options common to all sub-projects/modules.
      plugins {
         id("com.android.application") version "8.2.0" apply false
         id("org.jetbrains.kotlin.android") version "1.9.23" apply false
      }

   另外，使用 Gradle 构建时，可能会和 Kotlin 插件有次，它可能会加载到临时生成的资源程序包（R.jar），
   这会导致在构建过程中无法删除，从而提示: 另一个程序正在使用此文件，进程无法访问。可以停用插件再
   执行构建任务。可以使用 ``jps`` 命令查询 JVM 进程号，进程名称为 MainKt，然后使用 ``taskkill``
   结束进程。Linux 系统中可以使用 ``ps`` 以及 ``kill -s SIGINT pid`` 命令。

.. _Kotlin Multiplatform: https://kotlinlang.org/docs/multiplatform.html
.. _Kotlin Multiplatform wizard: https://kmp.jetbrains.com/
.. _Create your multiplatform project: https://www.jetbrains.com/help/kotlin-multiplatform-dev/compose-multiplatform-create-first-app.html

   使用 Compose 框架后的主程序代码参考如下，注意入口类更名为 MainActivity，需要同步清单文件。
   代码中的 ``Text`` 和 ``Surface`` 以及 ``MaterialTheme`` 都是 Compose UI 组件，通过
   ``@Composable`` 标注的可组合函数，它们返回的 UI 控件实例可以直接交给 ``setContent`` 方法
   设置根到视图并渲染得到用户界面。另外， ``@Preview`` 注解提供一个预览机制，IDE 可以让开发者在
   不运行 App 的前提下预览 UI 渲染的效果。Android Studio 环境中，只需要打开代码文件，并切换为
   Split 或者 Design 视图即可以看到组件的预览效果。

   ``Fragment`` 组件代表了 Activity 界面中的一个区域，或者说是组合完整用户界面的一个块，语义上
   类似 ``Surface`` 这样的组件，通过这种小块内容组合出完整用户界面，可以增加应用的界面的灵活度。
   这个类有两个版本，传统版本 ``android.app.Fragment`` 和 Jetpack 版本 ``androidx.fragment.app.Fragment``。

   Compose 中的入口类还是 ``Activity``，只不过使用 ``androidx.activity.ComponentActivity``
   进行了重新包装，以提供可组合函数的支持。和原生 ``Activity`` 不同的是，原先 ``onCreate`` 方法中的
   ``setContentView`` 方法包装起来了，取而代之的是新增 Kotlin 扩展方法： ``setContent``，也就是
   这个方法中的参数接收可组合函数： ``@Composable () -> Unit``。入口类涉及以下三个代码文件：

   *  androidx\\core\\app\\ComponentActivity.java
   *  androidx\\activity\\ComponentActivity.java
   *  androidx\\activity\\compose\\ComponentActivity.kt

   另一个不同点在继承入口类时，使用了圆括号： ``class MainActivity : ComponentActivity()``。
   Kotlin 这种“怪异”的表达和语言设计有关，因为父类有主构造函数，子类必须在主构造函数中初始化它。
   Kotlin 类形定义语法中有两种构造函数：主构造函数和二级构造函数。构造函数都使用 ``constructor``
   关键字声明，主构造函数直接声明在类名称后面，而二级构造函数声明在主构建函数体内。如果主要构造函数
   没有任何注释或可见性修饰符，则可以省略 ``constructor`` 关键字，这种情况下类名跟着圆括号，看着
   就像是在定义一个函数，但圆括号中的是类成员列表。Kotlin 中的所有类都有一个公共的父类 ``Any``。

   .. code-block:: kotlin

      class Person (val name: String) 
      {
         val children: MutableList<Person> = mutableListOf()
         constructor (name: String, parent: Person) : this(name) 
         {
            parent.children.add(this)
         }
      }

   Java 编程中，注解编程机制可用于向程序切面插入代码。Kotlin 语言也同样提供了注解解析工具 KAPT
    (Kotlin Annotation Processing Tool)。KAPT 内部实际上基于 APT 工作，但是 APT 只能处理 
   Java 注解，因此需要先生成 APT 可解析的 stub (Java代码)，这拖慢了 Kotlin 的整体编译速度。

   ``@Composeble`` 注解就可以将函数转化成 Composeble 函数，同时 Composeble 函数也只能在
   Composeble 函数中运行。这看起来似乎跟协程底层实现有相似之处。可组合函数并不是通过注解处理器
   （KAPT）处理的，因为注解处理器只能生成注解对象对应的代码，不能修改代码。而可组合函数需要修改代码，通过
   KCP（Kotlin Compiler Plugin）编译插件，可以将它类比为 KAPT + transform 机制，既可以
   生成代码，也可以修改代码。支持跨平台，包括 Android 开发。

   Kotlin 协程 ``suspend`` 关键字和 ``@Composable`` 类似，都会在编译源代码时进行类型修改，
   协程函数会添加一个 ``Continuation<*>`` 类型的参数，可组合函数则会添加一个 ``Composer``
   类型参数。

   简单来说，Kotlin 编译过程就是将源码编译成字节码的过程，KCP 则在编译过程中提供 Hook 时机，
   期间可解析 AST、修改字节码产物等，以实现可组合函数的符号解析、字节码生成等。
   
   为了解决 KAPT 低效率问题，官方提供了最新的 KSP (Kotlin Symbol Processing) 来取代 KAPT，
   KSP 可以直接解析 Kotlin 源代码中的注解，这样就可以实现高达 2x 的性能提升。

.. _Migrate from kapt to KSP: https://developer.android.google.cn/build/migrate-to-ksp
.. _AndroidX Compose compiler 1.6.21: https://github.com/androidx/androidx/tree/compose-compiler-1.6.21/compose
.. _Develop UI for Android: https://developer.android.google.cn/develop/ui
.. _Developer guides - App architecture: https://developer.android.google.cn/topic/architecture/intro
.. _Jetpack Compose Quick start: https://developer.android.google.cn/develop/ui/compose/setup
.. _Material 3: https://m3.material.io/get-started

   可组合函数中可以构造任意 UI 组件，使用条件语句就可以让 UI 组件在适合条件下渲染。这种条件控制
   的渲染并非像 Web 那样通过临时设置显示、隐藏属性来实现，而是真正从 UI 组件树中移除、添加组件。
   在没有使用布局组件（layout component）的情况下，UI 组件会重叠在一起，相互遮挡，后面的组件
   会覆盖前面注册的组件。使用布局组件包装其它 UI 组件，就可以获得相应的组件布局排版，例如最基本的
   ``Column`` 或 ``Row`` 就可以将组件按列、按行排列，避免重叠在一起。为了方便设置 App 的基本
   界面构架，Material Design 提供了一个 ``Scaffold``，它代表了用户屏幕空间的布局，Scaffold
   实现了 Material Design 的基本视图界面结构，即主界面脚手架，包含侧边应用栏、底部导航栏、导航栏
   的自动布局。常搭配顶部导航栏、底部导航栏使用： ``TopAppBar``、 ``BottomNavigation``。
   导航条可以看作是状态栏与用户快捷菜单的组合体，一方面显示应用的页面信息，另一方面向用户提供操作
   功能（actions）。

   为了提升渲染效率，Compose UI 默认只允许对一个 UI 组件进行一次测量，这样的约定下，子元素不会
   重复进行测量，大量节省了渲染时间消耗。就像在传统 ``View`` 系统中，当 ``LinearLayout`` 等
   基础布局无法满足需求时，可以通过重写 measure 与 layout 来达成你的期望。Compose 沿用了这一理念，
   在一些场景下如果 Compose 内置组件可能无法满足你的需求，可以尝试定制测量与布局。

   ``Color`` 对象表示界面的颜色，提供了多个构造函数，可以传递颜色分量（包含透明通道），或者直接
   传递一个表示色值的整形数值（ARGB color int）。颜色分量包括 red、green、blue、alpha，以及
   色彩空间（ColorSpace），Compose 支持常用的色彩空间，色值使用以下三种模型形式：

   *  ColorSpace.Model.Rgb - 分量取值范围 8 bits [0,255]
   *  ColorSpace.Model.Xyz - 分量取值范围 16 bits [-65504.0, 65504.0]，透明通道是 10 bits [0..1023]
   *  ColorSpace.Model.Lab - 分量取值范围同上

   另外，还提供了几个常用色值常量：

   .. code-block:: kotlin

      companion object {
         @Stable  val Black       = Color(0xFF000000)
         @Stable  val DarkGray    = Color(0xFF444444)
         @Stable  val Gray        = Color(0xFF888888)
         @Stable  val LightGray   = Color(0xFFCCCCCC)
         @Stable  val White       = Color(0xFFFFFFFF)
         @Stable  val Red         = Color(0xFFFF0000)
         @Stable  val Green       = Color(0xFF00FF00)
         @Stable  val Blue        = Color(0xFF0000FF)
         @Stable  val Yellow      = Color(0xFFFFFF00)
         @Stable  val Cyan        = Color(0xFF00FFFF)
         @Stable  val Magenta     = Color(0xFFFF00FF)
         @Stable  val Transparent = Color(0x00000000)
      }
   
   `Material 3`_` 是下一代应用设计规范，实现方案有 Flutter，Jetpack Compose 等等。规范中
   定义了一些基本的色彩角色概念（ `color roles <https://m3.material.io/styles/color/roles>`__ ）：

   *  ``Surface`` – A role used for backgrounds and large, low-emphasis areas of the screen.
   *  ``Primary``, ``Secondary``, ``Tertiary`` – Accent color roles used to emphasize or de-emphasize foreground elements.
   *  ``Container`` – Roles used as a fill color for foreground elements like buttons. 
      They should not be used for text or icons.
   *  ``On`` – Roles starting with this term indicate a color for text or icons on top of its paired parent color.
      For example, ``on primary`` is used for text and icons against the ``primary`` fill color.
   *  ``Variant`` – Roles ending with this term offer a lower emphasis alternative to its non-variant pair. 
      For example, ``outline variant`` is a less emphasized version of the ``outline`` color.

   配色使用简约的三色方案，此外还有系统默认 UI 元素色彩，比如在 Android 亮色主题配置下，暗背景，
   亮文字。配合三个主题色，就可以满足大量设计场景，又不至于使颜色过于复杂。

   主题色彩配置好，就可以通过 ``MaterialTheme`` 对象将色彩应用到 UI 组件上，设置 color 属性。
   通过主题配色，可以让应用界面拥有更统一的设计效果。包装系统底层的 ``isSystemInDarkTheme()`` 
   方法会根据 Android 系统设置的主题色调，返回一个布尔值指示当前系统是否使用深色调。

   Compose 框架参考文档及源代码仓库：

   - `Jetpack Compose Quick start`_
   - `Developer guides - App architecture`_
   - `AndroidX Compose compiler 1.6.21`_

   ``app\src\main\kotlin\org\example\hi_app\hi_app.kt``

   .. code-block:: kotlin

      package org.example.hi_app

      import android.os.Bundle
      import androidx.activity.ComponentActivity
      import androidx.activity.compose.setContent
      import androidx.compose.foundation.layout.Column
      import androidx.compose.foundation.layout.Row
      import androidx.compose.foundation.layout.fillMaxSize
      import androidx.compose.material3.*
      import androidx.compose.runtime.Composable
      import androidx.compose.ui.graphics.Color
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.tooling.preview.Preview


      class MainActivity : ComponentActivity() {
         override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)
            setContent {
                  Hi_Theme {
                     Surface(
                        modifier = Modifier.fillMaxSize(),
                        color = MaterialTheme.colorScheme.background
                     ) {
                        Row {
                           GreetingView("Hi!")
                           GreetingView("> R.string.app_name = ${getString(R.string.app_name)}")
                        }
                     }
                  }
            }
         }
      }

      @Composable
      fun GreetingView(text: String, color: Color = MaterialTheme.colorScheme.primary ) {
         Column {
            Text(text = "Column", color = color )
            Text(text = text,     color = color )
         }
      }

      @Preview
      @Composable
      fun DefaultPreview() {
         Hi_Theme {
            GreetingView("Hello, Android!")
         }
      }

   ``app\src\main\kotlin\org\example\hi_app\Hi_Theme.kt``

   .. code-block:: kotlin

      package org.example.hi_app

      import androidx.compose.foundation.isSystemInDarkTheme
      import androidx.compose.foundation.shape.RoundedCornerShape
      import androidx.compose.material3.MaterialTheme
      import androidx.compose.material3.Shapes
      import androidx.compose.material3.Typography
      import androidx.compose.material3.darkColorScheme
      import androidx.compose.material3.lightColorScheme
      import androidx.compose.runtime.Composable
      import androidx.compose.ui.graphics.Color
      import androidx.compose.ui.text.TextStyle
      import androidx.compose.ui.text.font.FontFamily
      import androidx.compose.ui.text.font.FontWeight
      import androidx.compose.ui.unit.dp
      import androidx.compose.ui.unit.sp

      @Composable
      fun Hi_Theme (
         darkTheme: Boolean = isSystemInDarkTheme(),
         content: @Composable () -> Unit
      ) {
         val colors = if (darkTheme) {
            darkColorScheme(
                  primary = Color(0xFFBB86FC),
                  secondary = Color(0xFF03DAC5),
                  tertiary = Color(0xFF3700B3)
            )
         } else {
            lightColorScheme(
                  primary = Color(0xFF6200EE),
                  secondary = Color(0xFF03DAC5),
                  tertiary = Color(0xFF3700B3)
            )
         }
         val typography = Typography(
            bodyMedium = TextStyle(
                  fontFamily = FontFamily.Default,
                  fontWeight = FontWeight.Normal,
                  fontSize = 16.sp
            )
         )
         val shapes = Shapes(
            small = RoundedCornerShape(4.dp),
            medium = RoundedCornerShape(4.dp),
            large = RoundedCornerShape(0.dp)
         )

         MaterialTheme(
            colorScheme = colors,
            typography = typography,
            shapes = shapes,
            content = content
         )
      }
