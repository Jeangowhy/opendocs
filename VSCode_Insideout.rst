
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

.. $; printf "S%s\n" {01..19}|clip

.. _SS01: #SS01

/🟡Fuzzy Finder and Digital Library
===================================

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


.. _SS02: #SS02

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
   和 Node.js 完美融合，使用 Web 技术来开发桌面应用，用 Node.js API 来访问文件系统。VS Code
   作为一个基于 TypeScript 脚本开发的工具，本身自带 LSP 智能提示，只需使用 `tsc --init` 命令
   在当前目录生成工程配置文件，这样解释器就会感知到这是一个脚本工程。通过修改配置，启用以下两项功能
   就可以让 LSP 进行 JavaScript 脚本文件的识别与符号处理与错误检查。只有项目根目录下才设置 
   `tsconfig.json` 配置，也就是说有这个配置文件的就是一个 TypeScript 工程。当设置 `"allowJs"`
   为 `true`，那么此时就相当于一个用于 JavaScript 项目的 `jsconfig.json` 配置文件，这是两个
   不同名称配置文件的唯一的内容上的差异，其它功能和作用基本相同。使用 TypeSCript 的一大好处是
   静态类型检查，当然 JavaScript 配合 JSDoc 注解功能也可以实现类型检查功能。

   .. code:: javascript

      "allowJs": true, /* Allow JavaScript files to be a part of your program. */
      "checkJs": true, /* Enable error reporting in type-checked JavaScript files. */

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
   \           Stable Edition           Insiders Edition
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

   为了让 VS Code 使用更顺手，需要根据需要细调配置项。例如，可以设置为喜欢的缩进指示线的颜色。
   VS Code 存在大量的配置项，如果找到需要的配置项需要点技术。官方提供了一个只读的且包含使用说明
   的默认配置文件 defaultSettings.json，可以通过命令面板 Command Palette (Ctrl+Shift+P)
   执行 Preferences: Open Default Settings (JSON) 来打开它，并阅读其中的配置信息。

   .. code:: javascript

      "[*]":{
         "editorIndentGuide.activeBackground1": "#13d420",
         "editorIndentGuide.background1": "#434943"
      },
      "workbench.activityBar.location": "top",

   VS Code 默认布局的左侧是工具栏，通过它可以切换操作文件、插件安装、配置等等，以及其它插件的功能
   面板的访问。在移动笔记本上，如果屏幕尺寸比较小，那么这部分空间可以通过切换侧栏面板的显示状态来优化。
   或者通过配置将 activityBar 显示上端，这样侧栏空间也多了。通过 Move Activity Bar 命令可以在
   顶部、底部，侧栏等位置移动工具条。还可以安装 Activity Bar 插件，它可以将工具栏集成到状态栏中更加
   节省屏幕空间。不必非使用它，使用快捷键来切换侧栏面板显示状态，这样可以最简化地实现屏幕空间的利用。


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
      以生成覆盖文件的跳转点，再按下对应的按键跳转，快速实现光标移动。插件作者似乎逆向优化，
      插件本身约 100KB，但是演示图片 16MB。另外，插件扫描内容的过程也产生性能问题，倒不如
      通过 VSCode 自带的查找来定位更便捷。因此插件本身属于 Useless，仅作为用户交互分析案例。
      VIM 可以使用 easymotion 插件。Sublime Text 可用 Find -> Incremental Find 功能。
   -  ``Project Manager`` 项目管理，适用于经常切换项目的场景。
      当然可以使用 code 命令，或者 File: Open Recent，Recent Directory 打开最近的目录。
   -  `Ascii Flow`_ 是图控的利器，它可以快速方便地使用 ASCII 字符绘制示意图，支持功能包括：
      线框图、文本、自由线、箭头线，可对选区进行剪切、粘贴操作，或者移动调整。
   -  推荐 `draw.io editor`_ 绘图工具，Draw.io VS Code Integration，提供了丰富基础图形，
      制作思维导图也很方便，插件提供了箭头连接跟随功能，移动图形也会同时更新连接的箭头线条。
      插件基于 `mxGraph` 提供交互图形制作的能力，并且使用体验比 Inkscape 更佳。
      打开 \*.drawio, \*.drawio.svg, \*.drawio.png 文件进入图形界面。
   -  ``Latex Sympy Calculator`` 计算文档中的 LaTeX 数学公式，并生成 = 号右侧部分。
   -  ``Emmet`` 这是一个程序化结构语言（XML/HTML）代码生成工具，几乎所有流行编辑器中都有它。
   -  ``Markdown Preview`` 为文本文档（markdown）提供实时预览。
      ``reStructuredText`` 文件格式还没有好用的插件，但是安装 rst 语法支持就足够用了，
      VS Code 会在编辑器顶部以面包屑形式展示层级化、可交互的目录结构。

   Draw.io 以及其核心图形库 mgGraph 文档： `Draw.io.rsg <Draw.io.rsg>`__

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

   就选区功能来说，VS Code 提供的功能已经完胜 Sublime Text：支持多行的多选区，不仅仅支持多行
   编辑，同时将多行内容的多个选区剪切下来后，再粘贴依然是同样的选区数量，这一点非常便于对整个文档的
   内容格式进行调整。Sublime Text 虽然也支持强大的多选区操作，但是它在一个选区包含多行内容时进行
   剪切、粘贴操作，会出现选区内容不一致的情况，因为它以行为粘贴时的选区单位，当前的选区数量与粘贴
   内容的行数不一致时，就不能正常处理用户意图。

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

   在命令行功能上，code 命令也保持了和 Vim 或者 Sublime Text (subl) 一样的便捷功能：处理其它
   命令标准输出文件（stdout），这使得 VS Code 可以非常方便地处理命令行内容的输入输出。Sublime
   还可以将处理后的数据再写入 stdout 作为其它命令的输入。VS Code 基于 Electron 平台的实现似乎
   约束了它在这个功能上的实现：

      To read output from another program, append '-' (e.g. 'echo Hello World | code.exe -')

   文件内容差异比较功能同样适用于非 Git 管理的文件，当编辑中的文件已经被外部程序修改过，此时执行
   保存时 VS Code 就会通过 diff 工具检测到文件的内容差异，用户可以选择覆盖，或者比较内容差异，
   并且根据差异修改完整后再保存，标题栏中有相应的操作按钮：Use you changes 或者 Discards。

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


.. _Ascii Flow: https://asciiflow.com/
.. _asciiflow: https://github.com/lewish/asciiflow
.. _draw.io editor: https://app.diagrams.net/
.. _RegularSelection: https://github.com/jimboyeah/run-snippet
.. _Dev Tunnels: https://learn.microsoft.com/en-us/azure/developer/dev-tunnels/
.. _Port Forwarding: https://code.visualstudio.com/docs/editor/port-forwarding
.. _Introducing Visual Studio Live Share: https://code.visualstudio.com/blogs/2017/11/15/live-share



.. _SS03: #SS03

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

   4. Root workspace 所在目录： ``/home/your-username/your-project``
   5. 当前编辑的文件： ``/home/your-username/your-project/folder/file.ext``

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

.. _SS04: #SS04

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

   读屏模式（screen reader）为视力障碍人士提供的辅助功能，配合屏幕阅读器大大提升了无障碍访问。
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

.. _SS05: #SS05

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

.. _SS06: #SS06

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

.. _SS07: #SS07

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
   +-----------------+--------------------------+--------------------+
   | Init script     | Gradle                   | init.gradle.kt     |
   +-----------------+--------------------------+--------------------+
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

.. _SS08: #SS08

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

.. _SS09: #SS09

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

.. _SS10: #SS10

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

.. _SS11: #SS11

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


.. _SS12: #SS12

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

.. _SS13: #SS13

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

.. _SS14: #SS14

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

.. _SS15: #SS15

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
   就可以安装 Pyright 或者 Pylance，推荐使用后者（支持 LSP）。外部模块路径可以添加到插件配置：
   Python › Analysis: Extra Paths

      C:/Program Files/Sublime Text/Lib/python38
      C:/Program Files/Blender Foundation/UPBGE-0.30-windows-x86_64/3.0/python/lib

   由于插件众多，配置项可以使用搜索过滤，@ext:ms-python.vscode-pylance，避免陷入配置泥潭。

   VScode 2024 年 6 月更新 Python 和 Jupyter 扩展，引入了 Python REPL 功能，可以直接执行
   代码块，就像 Jupyter Notebook 一样。对于那些熟悉 Jupyter 交互式窗口 的人来说，这个 REPL
   可能看起来很相似；但是，它有两个关键的区别：它不依赖于 Jupyter 扩展，不需要安装内核。Python
   的 VS Code Native REPL 遵循 Python REPL 执行历史，因为它不需要重新启动新进程，所以拥有
   更快速的响应。设置 “python.REPL.sendToNativeREPL” 可以改变代码块的执行方式，激活时使用
   Python REPL 扩展，否则将当前代码行、或者选择的代码块发送到 Terminal 窗口中执行，也就是需要
   先在控制台运行 Python 提供 REPL 交互。在执行代码块时，会使用 VS Code 启动时设置的 Python
   解释器。如果需要改变 Python 版本就需要在状态栏或者面板命令 Python: Select Interpreter
   选择指定的 Python 解释器版本，再重启（Developer: Reload Window）。对于 Pylance 插件，
   它会自动检测 Python 解释器，新根据用户当前选择的 Python 版本、venv 环境来提供 LSP 服务。

   * [Running Python code in Visual Studio Code](https://code.visualstudio.com/docs/python/run)
   * [Jupyter Kernel for Deno](https://docs.deno.com/runtime/reference/cli/jupyter/)

   这次更新的是一个带有上下文提示功能的 Jupyter Notebook，你可以将 Deno 提供的 jupyter 内核
   集成到 VS Code 中，这样就可以在 VS Code 中运行 Deno 代码（TypeScript 或者 JavaScript）。
   使用 `deno jupyter --install` 命令安装内核，然后在 VS Code 中创建 Notebook，并通过右上
   角内核切换按钮重新选择 deno jupyter 内核。如果在 Seclect a Jupyter Kernel 列表中没有
   显示 Deno，就点击面板右上角的刷新功能。Notebook 中可以使用 Deno 的标准库，例如，如下通过
   API 接口在 Notebook 中创建 SVG 图像：

   ```ts
   Deno.jupyter.svg
   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100">
      <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
    </svg>`;
   ```

   这次更新可惜没有 TypeScript REPL 的支持，其它提供了 REPL (Read-Eval-Print Loop) 功能
   的工具不能这样便利地使用。一个备用的选择是使用内置的 Terminal: Run Selected Text In 
   Active Terminal 功能，它可以将用户选择的代码块内容发送到终端执行，只需要先在终端运行 Deno
   或者 Node 这样的支持 REPL 功能的解释器，就可以避免在操作系统层面上重复创建、销毁进程，提高
   代码片段的执行效率。另外，还可以利用 bash 脚本的 hasbang 功能，在脚本首行设置如下所示的指令，
   指定一个用于执行脚本的解释器，就可以运行任意类型的脚本代码。

   ```typescript
   #!/usr/bin/env -S dono run
   console.log(Deno.version)
   ```

   这些功能都可以让 Code Runner 这种下载上千万的插件成为 Useless Extension。
   参考文档：[Terminal Basics](https://code.visualstudio.com/docs/terminal/basics)。

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

.. _SS16: #SS16

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

   Android 作为移动操作系统，通常应用于移动通信设备，设备本身使用全球唯一的 IMEI 号码标识，
   国际移动设备识别码 （International Mobile Equipment Identity），即通常所说的手机序列号、
   手机“串号”，用于在移动电话网络中识别每一部独立的手机等移动通信设备，相当于移动电话的身份证。

   IMEI 由 15 位数字组成，用来区别每一部移动通信设备。类型分配码 TAC (Type Allocation Code)
   用于标识设备制造区域，86 为中国。IMEI 码例子：868540050954128。

   getSystemService(Context.TELEPHONY_SERVICE).getDeviceId() 根据不同设备类型返回 
   IMEI，MEID 或者 ESN。

   Android 8.0（API Level 26）可以通过 ``TelephonyManager`` 服务获取设备 IMEI。
   ``getDeviceId()`` 方法会根据手机设备的制式（GSM 或 CDMA）返回相应的设备码（IMEI、MEID 和 ESN），
   该方法已经在 Android 8.0+ 版本废弃，取而代之的是 ``getImei()`` 方法。示例代码如下：

   .. code::java

      private String getIMEI(Context context) {
         TelephonyManager tm = (TelephonyManager) 
                           context.getSystemService(Service.TELEPHONY_SERVICE);
         if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            return tm.getImei();
         } else {
            return tm.getDeviceId();
         }
      }

   其它相关方法：

      *  Build: ``getSerial()``
      *  TelephonyManager: ``getImei()`` ``getDeviceId()`` ``getMeid()`` 
                           ``getSimSerialNumber()`` ``getSubscriberId()``

   无论是 ``getDeviceId()`` 方法还是 ``getImei()`` 方法都可以传入 ``slotIndex`` 用于
   查询多卡槽设备。IMEI 获取方式简单，也能保证唯一性和不变性，很多应用都使用 IMEI 为设备的唯一标识，
   但是 Android 6.0+ 获取 IMEI 需要动态申请 ``READ_PHONE_STATE`` 权限，用户可能拒绝该权限。
   Android 10+ 更新后，需要 ``READ_PRIVILEGED_PHONE_STATE`` 权限。另外，官方已经明确说明
   Google Play 上的第三方应用不能声明此权限获取 IMEI。 `Privacy changes in Android 10 <https://developer.android.google.cn/about/versions/10/privacy/changes>`__

   其它 ID 编码：

   MAC 网卡设备物理地址：

   *  Obtain randomized MAC address: Device owner apps and profile owner apps can 
      retrieve the randomized MAC address assigned to a specific network by calling 
      ``getRandomizedMacAddress()``.
   *  Obtain actual, factory MAC address: Device owner apps can retrieve a device's 
      actual hardware MAC address by calling ``getWifiMacAddress()``. This method 
      is useful for tracking fleets of devices.

   IMSI：国际移动用户识别号（International Mobile Subscriber Identification Number），
   IMSI 码例子：460080585306741。
   * 3 位数字 MCC (Mobile Country Code)，中国为 460。
   * 2 位数字 MNC (Mobile Network Code)，
      *  中国移动： 00、02、04、07，08（移动物联卡）
      *  中国联通 GSM 系统： 01、06、09，
      *  中国电信 CDMA 系统： 03、05，
      *  中国电信 4G：11，
      *  中国铁通：20。
   * 10 位数字 MSIN，移动订阅用户识别代码（Mobile subscription identification number）。

   ICCID：集成电路卡识别码（Integrate circuit card identity），20 位数字。
   ICCID 例子: 89860485192072216741，前六位为运营商代码：
   *  中国移动的为：898600；898602；898604；898607 。
   *  中国联通的为：898601；898606；898609。
   *  中国电信的为：898603。

   SN：Series Number 是产品的生产编号。这个编码由厂商制定编码规则，例如：P1Q21DJ6A0026310P


.. _SS17: #SS17

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


/🟡Gephi - The Open Graph Viz Platform
=======================================

   Gephi 是一款开源的基于图论和 Java 图形技术（NetBeans IDE and NetBeans Platform）
   开发的跨平台数据关系网络可视化工具。

   *  `Gephi - The Open Graph Viz Platform <https://gephi.org/users/download/>`__
   *  https://github.com/gephi/gephi/releases

   **Applications**

   *  Exploratory Data Analysis: intuition-oriented analysis by networks manipulations in real time.
   *  Link Analysis: revealing the underlying structures of associations between objects.
   *  Social Network Analysis: easy creation of social data connectors to map community organizations and small-world networks.
   *  Biological Network analysis: representing patterns of biological data.
   *  Poster creation: scientific work promotion with hi-quality printable maps.

   **Metrics ready**

   *  Centrality: used in sociology to indicate how well a node is connected. Available: degree (power-law), betweenness, closeness.
   *  And more: density, path length, diameter, HITS, modularity, clustering coefficient.

   **Technology**

   *  Ergonomic interface: no programming skills needed
   *  High-performance: built-in rendering engine.
   *  Native file formats: GDF (GUESS), GraphML (NodeXL), GML, NET (Pajek), GEXF and more.
   *  Customizable by plugins: layouts, metrics, data sources, manipulation tools, rendering presets and more.


/🟡ASCIIFlow 字画示意图
=======================================

   *  https://asciiflow.com/
   *  https://esbuild.github.io/api/#build
   *  `ASCIIFlow 与 VS Code 插件扩展更新 <https://github.com/Jeangowhy/asciiflow>`__
   *  `Material UI <https://mui.com/material-ui/getting-started/>`__
   *  `Monospace - An innovative superfamily of fonts for code <https://monaspace.githubnext.com/>`__
   *  `ASCIIFlow 中文支持探索 <https://juejin.cn/post/7163696728641077284>`__
   *  `ASCIIFlow fiexed oldversion <https://arthuryung.github.io/asciiflow/>`

   ASCIIFlow 是一款基于 Web 和字符绘制示意图的工具，它基于 React 框架开发，以下尝试将其主要
   功能流程做一个分析。

   字符图形绘制过程就是将各种模拟方框、线条、箭头线的字符绘制到 Canvas 对象上，形成图像，但同时
   又保留字符表达的示意图形，用户可以将这些示意图粘贴到记事本等文字处理软件中展示。ASCII 字符虽然
   有对应的全角字符（Full-width characters），但是由于缺少制表符号的全角符号，所以并不能解决
   包含中文符号的图表，只能使用全英文符号才能对齐图表。虽然可以在 ASCIIFlow 中使用中文字符，但
   每个字符会当作一个英文符号处理，占用画布中的一格子。导出为文本时，事实上每个中文字符需要占据两个
   标准字符位置。但这两个字符位置并不是绝对是等宽字体的两个字符，有偏差，和字体设计、渲染算法有关。
   如果确实需要使用中文符号来制表，那么可以使用利用 HTML 内容排版的 Draw.io 这个开源工具。

   为了更易于研究 ASCIIFlow 源代码，方便 VS Code 中直接操作，可以按照后面一章节说明的操作说明，
   使用 `esbuild` 转译官方提供的 vscode/extension.ts 插件代码为可以运行的 JavaScript。然后
   按照 VS Code 官方的插件模板设置插件必需的 package.json 扩展配置。执行命令安装本地插件，使用：
   Install Extension from Location...

   本地安装插件可以一边测试一边更新，只需要执行 Restart Extension Host 或者 Reload Window
   命令刷新插件。测试完成后就只可以卸载，有两种方式卸载本地插件：一是在插件面板中使用 @enabled 
   过滤出当前启用的插件，翻看列表或者输入插件名称，在插件配置页面进行卸载。另一种方式是使用命令面板，
   在插件注册的命令右侧有一个齿轮图标，点击它打开命令的热键配置页面，并且点击右侧的扩展来源（Source）
   打开插件配置页面进行卸载。

   使用 Node.js 的 `watch` 模块提供的，或者 esbuild 本身就内置的监视模式，随时在代码变动重新
   构建。使用 esbuild 可以简化并提升 React 项目的构建效率，它本身支持 jsx 和 tsx 格式。其监视
   模式下，任何会引起 build 失效代码改动都会触发项目的重新构建。

   .. code:: javascript

      #!/usr/bin/bash
      watch 'esbuild --bundle --outdir=dist/asciiflow2/ client/app.tsx' client
      esbuild --bundle --watch --outdir=dist/asciiflow2/ client/app.tsx

   软件的 UI 分为两部分：核心视图（View.tsx）和菜单面板（Drawer.tsx）。

   以下是应用程序入口 app.tsx 中的代码片段，它负责 ASCIIFlow 界面的布局、主题样式配置，以及
   SPA 应用的 URL 地址路由处理，主要是 hash 部分，对应使用的是 `HashRouter` 对象，路由传入
   的参数将由 `useParams()` 解析：

   .. code:: javascript

      export interface IRouteProps {
         local: string;
         share: string;
      }

      export const App = () => {
         return useWatchable(() => {
            const routeProps = useParams<IRouteProps>();
            store.setRoute(
               routeProps.share
               ? DrawingId.share(decodeURIComponent(routeProps.share))
               : DrawingId.local(routeProps.local || null)
            );

            const theme = React.useMemo(
               () =>
               createTheme({
                  palette: {
                     type: store.darkMode.get() ? "dark" : "light",
                  },
               }),
               [store.darkMode.get()]
            );
            return (
               <ThemeProvider theme={theme}>
               <div
                  className={[styles.app, store.darkMode.get() ? "dark" : ""].join(" ")}
               >
                  <Drawer />
                  <View
                     {...desktopController.getHandlerProps()}
                     {...touchController.getHandlerProps()}
                  />
               </div>
               </ThemeProvider>
            );
         });
      };

   顺带提一嘴 React 提供的 `HashRouter` 和 Material UI 框架。由于基于 URL hash 虽然可以实现
   页面的路由功能，但是由于 hash 不会被浏览器发向服务，所以无法用在服务端渲染（SSR）。另外，现代浏览
   器的路由功能可以直接用在 URL 地址，而不会引起页面刷新。所以 `BrowserRouter` 兼容功能更好。每当
   `history` 对象发生变化，就会触发 window `popstate` 事件。但是主动调用 `history.pushState()`
   和 `history.replaceState()` 方法都不会触发 `popstate` 事件，仅通过监听 `popstate` 事件就
   不能完全实现路由切换。因此框架需要监听 history 对象才能实现浏览器路由。参考 history.js 库实现。
   虽然，React 文档还有一些摘抄网文都在“强烈建议”不要使用 `HashRouter`，但其实你只需要知道什么情况
   下该使用什么路由。

   以下示范可以本地或者在线方式运行，参考以下命令构建代码：

   .. code:: bash

      yarn add @mui/material react react-dom react-router react-router-dom
      esbuild --watch --bundle --outdir=dist app.tsx
      echo '<div id="root"></div><script src="app.js"></script>' > dist/index.html
      start http://localhost:8000
      python -m http.server --directory dist

   .. code:: javascript

      import * as React from "react";
      import { 
      HashRouter, BrowserRouter, Route, Routes, Link, useParams 
      } from "react-router-dom";
      import * as ReactDOM from "react-dom/client";
      import Button from '@mui/material/Button';

      interface IUrlProps {
      local: string
      share: string
      mui: string
      }

      const isLocal = location.href.startsWith("file:")

      export default function ButtonUsage() {
      const props: IUrlProps = useParams()
      return <Button variant="contained"><Link to="/">{JSON.stringify(props)}</Link></Button>;
      }

      const App = () => {
      return isLocal? 
      <>
         <Button variant="outlined" onClick={()=>location.href="#/local/Local"}>"Local"</Button>
         <Button variant="outlined" onClick={()=>location.href="#/share/Share"}>"Share"</Button>
         <Button variant="outlined" onClick={()=>location.href="#/mui/Mui"}>"MUI"</Button>
      </>
      :
      <>
         <Button variant="outlined"><Link to="/local/Local">Local</Link></Button>
         <Button variant="outlined"><Link to="/share/Share">Share</Link></Button>
         <Button variant="outlined"><Link to="/mui/Mui">Mui</Link></Button>
      </>
      }

      const MyRoutes = () => <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/local/:local" element={<ButtonUsage />} />
      <Route path="/share/:share" element={<ButtonUsage />} />
      <Route path="/mui/:mui" element={<ButtonUsage />} />
      </Routes>

      const BR = () => <BrowserRouter basename="/"> <MyRoutes /> </BrowserRouter>
      const HR = () => <HashRouter> <MyRoutes /> </HashRouter>

      const root = document.getElementById("root")
      ReactDOM.createRoot(root).render(isLocal? <HR /> : <BR />)


   将焦点放到 View 视图对象的实现中来，作为一个 React 组件，它的构造函数如下:

   .. code:: javascript

      export const View = ({ ...rest }: React.HTMLAttributes<HTMLCanvasElement>) =>
      useWatchable(() => {
         const colors = getColors();
         useEffect(() => {
            const canvas = document.getElementById(
            "ascii-canvas"
            ) as HTMLCanvasElement;
            const disposer = autorun(() => render(canvas));
            return () => disposer();
         });

         // Add an cleanup an event listener on the window.
         useEffect(() => {
            const handler = () => {
            const canvas = document.getElementById(
               "ascii-canvas"
            ) as HTMLCanvasElement;
            canvas.width = document.documentElement.clientWidth;
            canvas.height = document.documentElement.clientHeight;
            render(canvas);
            };
            window.addEventListener("resize", handler);
            return () => {
            window.removeEventListener("resize", handler);
            };
         });

         return (
            <canvas
            width={document.documentElement.clientWidth}
            height={document.documentElement.clientHeight}
            tabIndex={0}
            style={{
               backgroundColor: colors.background,
               touchAction: "none",
               position: "fixed",
               left: 0,
               top: 0,
            }}
            id="ascii-canvas"
            {...rest}
            />
         );
      });

   `React - Hooks effect <https://reactjs.org/docs/hooks-effect.html>`

   View 组件使用了 React 框架的副作用功能，副作用 `useEffect` 即一个接收回调函数作为参数的钩子方法。
   并且，这个回调函数本身需要返回一个方法用于在组件销毁时做清理工作，即恢复设置的“副作用”。所谓副作用
   就是一些脱离 React 框架之内运行的脚本，通常这些脚本需要执行一些 React 框架无法直接进行的 DOM 操作。
   比如，以下这些都是：

   - Network request 数据获取；
   - Manual DOM manipulation 手动更改 DOM；
   - Event listeners or timeouts and intervals 事件侦听和定时器处理；

   使用 `useEffect` 的意义就是，方便执行那些需要在 `render` 之后执行的功能。在类组件中，通常会在
   componentDidMount 或者 componentDidUpdate 中执行副作用代码。而对于函数式组件，只有借助
   useEffect 来做同样的事。常用，并不需要执行副作用的清理，如果要做这一步工作，可以在类组件的
   componentWillUnmount 事件中或者在函数组件中给 useEffect 传入的回调函数中返回一个清理函数。
   注意 `useEffect` 接收的是一个回调函数，这让副作用机制可以保证代码的执行流程。

   如此，ASCIIFlow 中的 `View` 组件就是在接收一组 `<canvas>` 节点属性并创建画布对象节点，通过
   副作用代码获得画布引用，并调用渲染函数 `render`。画布划分成放置字符的小格，每格对应一个字符。
   目前支持几种有限的绘图功能，对应的是 `IDrawFunction` 接口的各种实现类型。为了记录什么位置绘制
   什么字符，定义了 `ILayerView` 接口，以及 `Layer` 实现类型。目前支持两种字符集，Unicode 和
   Ascii。当用户绘制字符图形时，根据当前选择的工具状态，来使用对应的绘图对象，比如 `DrawBox`，就
   是绘图矩形，根据起止坐标将字符设置到图层对象上 `Layer.set(position: Vector, value: string)`。
   数据保存在 `CanvasStore` 这个状态存储类型中，当用户完成一个绘制动作，就执行 `commitScratch()`
   将图层提交到 `undoLayers` 列表中以实现可撤消操作。绘图操作中间过程由 `setScratchLayer()`
   方法保存临时数据。

   .. code:: javascript

      interface ILayerJSON {
         version: number;
         x: number;
         y: number;
         text: string;
      }

      export interface ILayerView {
         get(position: Vector): string;
         keys(): Vector[];
         entries(): [Vector, string][];
      }

      export class Layer implements ILayerView
      export class LayerView implements ILayerView

   所有字符都使用分层概念绘制到 `<canvas>` 画布上，在数据结构设计上，将输入的字符串都转换为带有向量
   坐标的实体（Entry）: `[Vector, string]`。画布被设计成格子，每个格子容纳一个字符，字符串的每
   个字符按其所携带的坐标依次绘制到画布上的指定格子上。这种逻辑在处理选区、清除选区的字符内容时比较容易
   处理，只需要判断字符是否处于当前选择区的范围，如果是就将字符数据从图层上移除。层内的实体对象都保存在
   `Map<string, string>`，也就是说会增加一个 `Vector` 与字符串的转换。在阅读源代码时，可能会有一
   种主语义上不不协调感觉，key 就是 Vector。

   代码风格上似乎太混乱了点，像 `layerToText` 和 `textToLayer` 这样的方法独立保存到一个脚本。
   但是逻辑上，这似乎是 `IlayerView` 应该包含的 API。提供了 `deserialize(value: string)`
   以及 `serialize(value: string)` 这样的方法进行 `Layer` 与 `string`之间的相互转换。这个
   转换后的字符串是按照 `ILayerJSON` 接口的内容形式处理。在类型继承设计上，这里的 `Layer` 和
   `LayerView` 虽然有不同用途的，后者合并多个层实现也更简单。但是接口上两者并没有区别，这种有点
   混乱的接口实现并不特别好。

   ASCIIFlow 中的图层类型与一般绘图软件的图层概念不一样，它的 `Layer` 对象是记录字符内容与其坐标 的载体，并非真正的图层。在画布上的绘图过程将就是将这些数据记录直接按坐标将文字绘制上去。坐标使用的 是格子为计量单位，屏幕右下向分别为 +x +y 方向。另外，画布格子数量限制在 2000x600，但保留边界的 格子以外，可以在 1998x598 的范围绘制。格子（cell）坐标与屏幕坐标的转换使用 `screenToCell()` 以及 `cellToScreen()` 方法。以下常量限制的画布的格子数据，定义在 `constants.ts` 脚本中：

   .. code:: javascript

      export const MAX_GRID_WIDTH = 2000;
      export const MAX_GRID_HEIGHT = 600;


   `Layer` 类型没有显式构造函数，为了方便打印调试信息，给它添加一个显式的构造函数，并且给每个层
   添加一个识别号，并将这个识别号用于打印调试信息，这样就可以知道是哪个新的实例调用 API：

   .. code:: javascript

      export class Layer implements ILayerView {

         static seed: number = 1000
         id: number = 0

         constructor() {
            this.id = Layer.seed ++
         }
         //...

         public set(position: Vector, value: string) {
            console.log(`set layer ${this.id}`, {position, value})
            this.map.set(position.toString(), value);
         }

         public apply(otherLayer: Layer): [Layer, Layer] {
            const newLayer = new Layer();
            newLayer.map = new Map(this.map.entries());
            const undoLayer = new Layer();
            Array.from(otherLayer.map.entries()).forEach(([key, newValue]) => {
               const oldValue = this.map.get(key);
               // Spaces and empty strings are deletion characters.
               if (newValue === "" || newValue === " ") {
               newLayer.map.delete(key);
               } else {
               newLayer.map.set(key, newValue);
               }
               if (oldValue !== newValue) {
               undoLayer.map.set(key, !!oldValue ? oldValue : "");
               }
            });
            console.log(`apply layer ${this.id}`, newLayer, undoLayer)
            return [newLayer, undoLayer];
         }
      }

   另外，代码中耦合问题也比较严重，比如 `CanvasStore` 就直接访问 `IDrawFunction` 接口的方法。
   使用 `layerToText` 方法转换 `Layer` 对象为字符串时，会计算字符层的边界，也就是比较层内所有
   向量坐标的范围。

   .. code:: javascript

      export class DrawSelect extends AbstractDrawFunction {
         // ...
         handleKey(value: string, modifierKeys: IModifierKeys) {
            if (value === KEY_BACKSPACE || value === KEY_DELETE) {
               const layer = new Layer();
               store.currentCanvas.committed.entries().forEach(([key]) => {
               if (this.selectBox.contains(key)) {
                  layer.set(key, "");
               }
               });

               layer.setFrom(snap(layer, store.currentCanvas.committed));

               store.currentCanvas.setScratchLayer(layer);
               store.currentCanvas.commitScratch();
            }
         }

   图层上的绘制基本逻辑是：使用 `CanvasStore` 作为图层数据存取对象，并且将可撤消、重做的图层记录
   到 `undoLayers` 和 `redoLayers` 两个可监视的列表中。用户在绘制某一个画布格子时，调用图层的
   `set` 方法将格子内容记录下来，同时 `CanvasStore` 中将格子原内容记录到 `undeLayers`。撤消
   操作就从 `undoLayers` 取出并 `apply` 到合并层上，同时记录替换前的内容到 `redoLayers` 列表。
   图层数据的持久化使用 `Persistent` 类型，它内部调用 Web API `localStorage` 保存数据到浏览
   器开辟的磁盘空间中。另一个 `CanvasStore` 名称类似的 `Store` 类型，虽然名字叫 store，但其实
   做的主要不是数据保存的工作，更合适它的类名可能是 `Manager`，因为它管理着当前用户选择的作画工具
   （currentTool）。用户的操作触发的键盘、鼠标、触屏等硬件产生的事件，驱动着作画工具，绘图相应的
   图层内容。按键产生的状态都是由 Store 这个类记录的，说这个名字有没有错，其实也没大错，它确实是
   在存储状态信息。但是，存储状态信息并不是目的，管理绘画过程的状态才是它的根本。

   `Store` 类型还参与绘图文件的管理工作，其中 `deleteDrawing()` 和 `renameDrawing()` 方法
   就是通过 `DrawingId` 类型提供的信息完成对浏览器的持久化数据对象 `localStorage` 的读写。也就
   是绘图文件的删除、改名。这是说的“文件”是抽象的概念，对应的是 `localStorage` 对象中的键值对数据，
   key 对应文件名，value 对应文件内容。为了容易区分、处理持久化数据中的 key（文件名），Store 模块
   中定义了两个方法用来给 key 添加前缀。处理后形成 `drawing/share` 或者 `drawing/local` 前缀。
   代码分析到这里，就可以很明确地将 `CanvasStore` 与 `DrawingId`  类型组合与 ASCIIFlow 中的
   “文件”概念紧密关联起来。前者是文件数据（Layer），后者是文件象的处理逻辑（local or share）。
   这些“文件”就会缓存到 Store `canvases` 属性中，这个缓存动作和 `currentCanvas` 的获取都是
   通过 `canvas(drawingId: DrawingId)` 这个方法完成的。逻辑上，这是一种混乱的设计，在语义上，
   canvas 显然也不是一个好的取名。这种语义不明用词，如同你在生活中直接对别人说“苹果”一样令人困扰。
   使用这种用词的方式的条件只有一个，“防御式编程”，注意此防御非彼防御（Defensive Programming）。
   但是现代的代码混淆工具在这方面的工作效果远高于人类手工操作，除非你真的不想以后看得懂曾经写的代码。

   .. code:: javascript

      export class Store {

         private canvases = new Map<string, CanvasStore>();

   从以上分析结果来年，ASCIIFlow 在类型设计方面，逻辑显得稍有些混乱，主要是各个类名的用词够准确，
   会导致阅读代码时陷入困扰。就像是用红色的笔书写一个“绿”字，用绿色的笔书写一个“红”字。

   .. code:: javascript

      export function storagePrefix(drawingId: DrawingId) {
         return `drawing/${encodeURIComponent(drawingId.persistentKey)}/`;
      }
      export function storageKey(drawingId: DrawingId, key: string) {
         return storagePrefix(drawingId) + key;
      }

   ASCIIFlow 有两种图表处理方式：本地方式（local）将数据保存在浏览器开辟磁盘空间中。共享模式（share）
   将图表数据编码在 URL 地址中。使用 `DrawingId` 对象来表示这两种状态，并通过浏览器的 URL 地址中的
   hash 部分来传递。此对象通过内部实现 `IStringifier<T>` 接口，提供数据的串行化处理。主要是通过
   `JSONStringifier` 来调用 JSON API 完成编码。在入口类 `App` 构造器中，就接收到 hash 中的数据，
   经过 `HashRouter` 路由传递进来。并且调用 `store.setRoute()` 方法保存，这里的 `DrawingId`
   还有 `Store` 类型中使用的 route 这种词汇，非常容易令人困扰，到底 `DrawingId` 是不是路由呢？
   显然它不是路由，它是只是利用了 URL hash 传递数据而已。同时 `DrawingId` 这个类名也有有一样的
   问题，显然它也并不是 ID，它只是利用了 URL 携带的数据来判别该如何处理数据，并且利用了 `Persistent`
   来持久化数据。

   注意 `Persistent<T>` 这是一个泛型类，除了使用构造函数，还可以使用 `custom<T>()` 或者 `json<T>()`
   方法来实例化，这两种方法会使用 `watchable()` 包装 Persistent 实例。

   实例化 `Persistent` 对象时就会按照指定的 key 读取 `localStorage` 存储的数据，存储数据则
   是在 `set(value: T)` 中调用 `localStorage.setItem(key)` 将数据持久化。

   画布对象创建时接收到的属性主要是 `DesktopController` 和 `TouchController` 两个类型提供的
   事件处理函数，分别用于支持台式机和移动设备上的触屏操作。当用户点击时改变控制器模式，接着移动鼠标
   `handleMove()` 就触发当前前选择的作画工具的作画方法 `move()`，产生临时数据。当释放鼠标时完成
   作画动作，并调用作画工具的 `end()` 方法。当前作画工具类型是 `IDrawFunction`，保存在全局的 
   `Store` 实例中。用户通过鼠标或触屏事件激活画布上绑定的事件处理函数，并且将事件与 `IDrawFunction`
   的行为函数直接关联。注意，控制器 `Controller` 并非其它两个类型的父类，它是键盘事件控制器，代码中
   只将它当作为其它两个类的私有成员。控制器直接驱动作图工具，通过调用不同的方法来将作图工具在图层上留
   下作画数据（字符及其向量坐标）。不同的作画工具在实现上有些差别，整体依照 `IDrawFunction` 接口。
  
   `DrawLine` 是一个特别，它有一个 `drwa()` 方法，可以绘画直线和箭头线。但是鼠标按下就会触发七次
   `Layer` 对对象的 `set()` 方法，每移动一格也是如此，最后松开鼠标是触发一次 `apply()` 完成一个
   图层的绘制：

   .. code:: javascript

      set layer 2143 984:293 {value: '│'}
      set layer 2143 984:293 {value: '─'}
      set from layer 2142 _Layer {id: 2143, map: Map(1)}
      set layer 2142 984:293 {value: '─'}
      set layer 2142 984:293 {value: '─'}
      set layer 2142 984:293 {value: '─'}
      set layer 2142 984:293 {value: '─'}
      set layer 2142 984:293 {value: '─'}
      set from layer 2142 _Layer {id: 2144, map: Map(0)}
      apply layer 2140 _Layer {id: 2145, map: Map(1)} _Layer {id: 2146, map: Map(1)}

   按常理来推测，默认画线状态可能下下笔方向不一致，这需要调整一次容易理解，但是为何还有后面的额外调用呢？
   结合 `setFrom()` 以及 `apply()` 等方法来看，这个过程中涉及的不只是一个图层对象的操作。画线工具
   作为一个有 `draw()` 方法作图工具，它比其它工具都要复杂一点。其中的原因是它要处理不同线条位置潜在的
   连接点，每格子至少有四个连接方向。这个绘图方法内会调用其它有图层操作的方法，包括 `straightLine()`
   和 `cornerLine()` 方法。这两个方法都会创建新的 `Layer` 实例，并且从代码可以看到，作者很喜欢使用
   以下这种连用的 if 语句，并且逻辑上它并不应该使用这种独立的条件句，因此导致了以上这些重复的函数调用。
   绘画直线的逻辑矛盾点在于：作者想设计一个绘制直线的函数，但是又要处理线条的连接状态。以上打印的消息中，
   前两条是正常的绘画动作，后面 5 条是是代码逻辑不严密引起的。随着线条长度的增加，会在这 5 次基础之上，
   增加和线条长度 n - 1 的调用次数。

   .. code:: javascript

      function straightLine(startPosition: Vector, endPosition: Vector) {
         if (startPosition.x === endPosition.x) {
            const top = Math.min(startPosition.y, endPosition.y);
            const bottom = Math.max(startPosition.y, endPosition.y);
            for (let y = top; y <= bottom; y++) {
               layer.set(new Vector(startPosition.x, y), UNICODE.lineVertical);
            }
         }
         if (startPosition.y === endPosition.y) {
            const left = Math.min(startPosition.x, endPosition.x);
            const right = Math.max(startPosition.x, endPosition.x);
            for (let x = left; x <= right; x++) {
               layer.set(new Vector(x, startPosition.y), UNICODE.lineHorizontal);
            }
         }
         return layer;
      }

   我设想过一种解决线条绘制的方法：使得制表符号，每格子线条的绘制无非不超过这 9 个制表符号外加一个箭头，
   一条横向连接线和一条竖向连接线，绘画的上下文决定于中心格子及其周边共 5 格子。在确定用户绘画线条的方
   向后，并且在不需要和其它符号产生连接的情况下就可以直接绘制横线或竖线。而这个问题的难点为在于如何确定
   当前的格子中的线条与周边四个方向的符号产生连接。在以下的图表模式中，包含了所有线条可能的连接情况，但
   是这个模式中有重复的线段。绘画横线时，第二、第四行不作绘画点；在绘画竖线时，第二、第四列不作绘画点。
   以上纯粹是一种设想，并未通过代码实现。

   .. code:: javascript

      ┌─┬─┐
      │ │ │
      ├─┼─┤
      │ │ │
      └─┴─┘

   .. code:: javascript

      ┌──────────────────────┐  ┌────────────────────┐   ┌──────────────────────┐         
      │                      │  │                    │   │                      │         
      │  DesktopController   │  │    Controller      │   │   IDrawFunction      │         
      │                      │  │                    │   │ ┌────────────────────┴────────┐
      │                      │  │                    │   │ │            DrawLine         │
      │  handleMouseMove()───┼──┼──→ handleMove()────┼───┼─┼→ move()                     │
      │                      │  │                    │   │ │                             │
      │                      │ ┌┼──→ startDraw() ────┼───┼─┼→ start()                    │
      │  handleMouseDown()───┼─┤│                    │   │ │                             │
      │                      │ └┼──→ startDrag()     │   │ │                      draw() │
      │  handleMouseUp()─────┼┐ │                    │   │ │                             │
      │                      │├─┼───→ endAll()   ────┼───┼─┼→ end()                      │
      │  handleMouseLeave()──┼┘ │                    │   │ │                             │
      │                      │  │  handleKeyDown()──┐│   │ │                             │
      │                      │  │                   ├┼───┼─┼→ handleKey()                │
      │                      │  │  handleKeyPress()─┘│   │ └────────────────────┬────────┘
      └──────────────────────┘  └────────────────────┘   └──────────────────────┘         

   主程序入口中，除了鼠标、触屏事件将绑定在视图对象上，因为这这些事件触发绘图行为。另外，键盘事件
   以及粘贴事件都在全局范围中处理。控制器类型的设计，在逻辑上是比较清晰的，这是非常好的代码组织方式，
   在游戏开发中也经常使用到控制器的概念。

   .. code:: javascript

      document.getElementById("root").addEventListener("keypress", (e) => controller.handleKeyPress(e));
      document.getElementById("root").addEventListener("keydown", (e) => controller.handleKeyDown(e));
      document.getElementById("root").addEventListener("keyup", (e) => controller.handleKeyUp(e));

      document.addEventListener("paste", (e) => {
         e.preventDefault();
         // Text tool manages pasting it's own way.
         const clipboardText = e.clipboardData.getData("text");
         // Default to the center of the screen.
         var position = screenToCell(new Vector(window.innerWidth / 2, window.innerHeight / 2));
         // Use the select tool position if set.
         if (store.selectTool.selectBox) {
            position = store.selectTool.selectBox.topLeft();
         }
         if (store.toolMode() === ToolMode.TEXT && store.textTool.currentPosition) {
            position = store.textTool.currentPosition;
         }
         const pastedLayer = textToLayer(clipboardText, position);
         store.currentTool.cleanup();
         store.currentCanvas.setScratchLayer(pastedLayer);
         store.currentCanvas.commitScratch();
      });

   在阅读键盘事件处理代码的过程中，顺带修复了一个小问题：ASCIIFlow 作为 VS Code 插件运行时，默认的
   作画工具快捷键与 VS Code 的文档编辑器切换快捷键是冲突的，这会导致用户想切换工具时导致 VS Code 切换
   文档编辑器。修复这个问题只需要添加一个 `stopPropagation()` 避免事件传播到 VS Code，同时重构了代码：

   .. code:: javascript

      handleKeyDown(event: KeyboardEvent) {

         if (event.altKey) {
            store.altPressed.set(true);
            const toolMap = {
            "1": ToolMode.BOX,
            "2": ToolMode.SELECT,
            "3": ToolMode.FREEFORM,
            "4": ToolMode.ARROWS,
            "5": ToolMode.LINES,
            "6": ToolMode.TEXT,
            }
            if (Object.keys(toolMap).find( it => it == event.key)) {
            event.stopPropagation()
            event.preventDefault()
            store.setToolMode(toolMap[event.key as keyof (typeof toolMap)])
            }
         }
         ...

   另外，程序在处理平移（panning）画布的逻辑也有点问题，当用户选择文本工具时，按下空格就会有两种
   含义：激活平移状态、输入一个空格。所以当用户使用使用鼠标拖动画布时，空格会持续输入到画布。表现
   就是，平移画布的同时，光标也在移动。键盘输入的字符会按系统设置的间隔，持续地通过 `keypress`
   事件将按键对应产生的字符输入到程序中。ASCIIFlow 在输入空格时会将原有字符清除，但是制表符号就
   需要额外回车来确认。另外，由于字符与其它工作各自使用的是不同的图层存储数据，所以退格键并不能用来
   清理其它图层上的制表符号，只能清除文本层的内容。字符输入会传入绘图工具的 `handleKey()` 方法
   中处理，绘图工具接收键盘事件的另一个来源是 `keydown`。

   为了解决字符输入与平移问题，只需要在字符输入时，判断一下用户是否在进行平移操作。

   .. code:: javascript

      handleKeyPress(event: KeyboardEvent) {
         // ...
         if (!event.ctrlKey && !event.metaKey && event.keyCode !== 13 && this.mode != Mode.DRAG) {
            store.currentTool.handleKey(
               String.fromCharCode(event.keyCode),
               getModifierKeys(event)
            );
         }
      }

   通过前面添加的调试代码，可以清楚的看到一个粘贴事件触发的程序逻辑，首先将粘贴板中的字符串传递到
   `textToLayer()` 转换为图层，这个转换过程过程中以字符串的行为一层循环结构，再用内层循环将每个
   字符添加到图层上，调用 `layer.set(vector, char)` 之个方法就可以记录下字符与对应向量坐标。
   转换时，会创建一个 `Layer` 实例，完成字符转换得到图层数据后，就会调用 `setScratchLayer()` 
   将新的图层图例设置到当前 `CanvasStore` 实例中的 `scratch` 属性保存，这是一个临时草稿图层。
   可以看作是用户操作过程中要处理的图形数据所在，用户完成操作后，临时图层数据就会。

   .. code:: javascript

      set layer 1559 {position: _Vector, value: 'd'}
      set layer 1559 {position: _Vector, value: 'o'}
      set layer 1559 {position: _Vector, value: 'c'}
      set layer 1559 {position: _Vector, value: 'u'}
      set layer 1559 {position: _Vector, value: 'm'}
      set layer 1559 {position: _Vector, value: 'e'}
      set layer 1559 {position: _Vector, value: 'n'}
      set layer 1559 {position: _Vector, value: 't'}
      apply layer 1557 _Layer {id: 1560, map: Map(54)} _Layer {id: 1561, map: Map(8)}

   每个绘画工具本身也会创建一个 Layer 对象用来保存其当前的绘图内容。对象粘贴事件，绘画工具就是
   `DrawText` 类型。所有绘画工具类型中，也只有文本工具才提供 `cleanup()` 方法的具体现实，并且
   从语义上讲，不应该将这个方法取名为清理 (cleanup)，更应该是完成 (finished)。因为它内部如果保存
   有图层对象，就会调用 `CanvasStore.commitScratch()` 提交草稿图层。但是文本工具当前引用的图层
   被丢弃。在 `IDrawFunction` 接口的注解中，表明这是一个在退出工具时调用的方法。

   调用 `CanvasStore` 实例的提交草稿图层 `commitScratch()` 操作会在内部使用 `committed` 引用
   的图层对象的 `apply()` 方法。这个方法的名称很贴切，就是应用草稿图层图层，这个应用操作包含：

   *  `committed` 属性更新为应用后新图层，新图层包含最新的绘图内容。
   *  `undoLayers` 可撤消操作的图层列表新增最后一次 `apply()` 之间的内容。
   *  `redoLayers` 重做操作列表将被重置，设置为一个空列表。
   *  `scratch` 属性关联一个新的草稿图层。

   注意 `committed` 这个属性本身不是 `watchable` 包装的属性，但是 `persistentCommitted`
   这个它内部使用到的属性是 `watchable` 包装的，这由 `Persistent.custom()` 方法完成包装过程。


   当对象间存在一对多关系时，则使用观察者模式（Observer Pattern）。当一个对象被修改时自动通知依赖
   它的对象，这个“通知”也可以是一些实际和数据相关的操作。ASCIIFlow 中实现的 `Watchable` 就是这样
   的一种机制。

   `Watchable<T>` 泛型函数用来包装具有 `get: () => T` 和 `set: (value: T) => any` 方法的对象。
   将传入的泛型 T 的实例包装为可监视对象也就是返回一个 `WatchableAdapter<T>`，并且将泛型实例的两个
   方法的上下文绑定与这个实例对象绑定，这一步可以保证在调用 `get()` 和 `set()` 两个方法时，上下文不会
   错乱。源代码中的可监视实现了两种可监视方法： `watchable<T>` 和 `watchableValue<T>`，分别对应
   类实例和数据对象。它们最后都是返回一个 `WatchableAdapter<T>` 实例，只不过数据监视需要一个额外的
   上下文 `Reference<T>` 来管理数据。

   .. code:: javascript

      export class Reference<T> {
         constructor(public value: T) {}
      }

      export function watchableValue<T>(initialValue: T) {
         const reference = new Reference(initialValue);
         return new WatchableAdapter<T>(
            () => reference.value,
            (value) => {
               reference.value = value;
            }
         );
      }

   可监视实现代码中定义了 `IWatchable<T>` 接口，有两个实现类型： `WatchableAdapter<T>` 以及
   `WatchableView<T>`。这个接口定义了三个方法，分别用于获取被监视的对象，以及和注册、解除监视回调
   的方法。监视回调函数声明为 `Watcher<T>`，也就是一个接收泛型参数 T 或者未定义参数的、可返回任意
   类型的函数。也就是只管绑定回调，至于回调在干什么不关心。当数据通过泛型参数 T 实例的 `set()` 方法
   修改、更新时，监视适配器上注册的回调函数就会被调用，用户就可以通过这个回调来响应数据的变动。代码分析
   得出 `WatchableAdapter<T>` 的主要工作有以下几个：

   *  `get()` 方法调用被监视目标的 `getter()`，同时将当前实例（this）添加到 `usedWatchables` 集合；
   *  `watch()` 注册监视目标的回调函数；
   *  `unwatch()` 解除已经注册的监视函数；
   *  `set()` 调用监视目标的 `getter()`，同时执行已经注册的监视函数；

   .. code:: javascript

      type Watcher<T> = (value: T | undefined) => any;

      export interface IWatchable<T> {
         get(): T;
         watch(watcher: Watcher<T>): void;
         unwatch(watcher: Watcher<T>): void;
      }

   至于 `WatchableView<T>` 实现，目前还示意在绘图中使用，只是编写了个测试脚本。从其类型中设置的
   dependencies 属性来年，可能是作者想要实现一种用于监视依赖的机制。

   这种响应的代码需要良好的设计，否则很容易引起性能问题。ASCIIFlow 就有这方面的问题，在使用 Drawer
   面板时，点击文件列表，在这个过程中就会读取所有图形“文件”数据，如果数据量大，显然用户就会卡在这里。
   另外，ASCIIFlow 没有视图自动定位、聚焦的功能，选择功能也非常弱，如果图形很大就不是那么好处理了。

   现在将焦点拉回到 `<View>` 的构造函数，以下代码为了突出重点经过省略处理：

   .. code:: javascript

      export const View = ({ ...rest }: React.HTMLAttributes<HTMLCanvasElement>) =>
      useWatchable(() => {
         useEffect(() => {
            const canvas = document.getElementById( "ascii-canvas" );
            const disposer = autorun(() => render(canvas));
            return () => disposer();
         });

         // Add an cleanup an event listener on the window.
         useEffect(() => {
            // a handler function handle resize event
            window.addEventListener("resize", handler);
            return () => {
               window.removeEventListener("resize", handler);
            };
         });

         return <canvas id="ascii-canvas" {...rest} />;
      });

   `<View>` 是经过 `useWatchable()` 包装的视图，显然 `autorun` 接收了 `() => render(canvas)`
   这个箭头函数，并且需要给 React `useEffect` 机制返回一个用于解除副作用代码的回调函数。首先，以上这个
   箭头函数作用是调用 React 组合的渲染函数，为渲染 UI 提供组件的定义数据。以上 `useWatchable` 还有
   `autorun` 两人监视模块的函数都什么使用 `trackUsedWatchables(fn)` 调用传入的函数并取出其返回值，
   同时创建新的 `usedWatchables` 集合，注意这个名字使用了复数形式，几乎和其中一个函数名相同。除了代码中
   两处使用了 `trackUsedWatchables(fn)` 这函数，另外没有在绘图逻辑上使用到的 `WatchableView<T>`
   泛型类也同样用到，这个类型可以忽略。从以下代码看到 `new Set()` 这里的赋值语句是有逻辑问题的，也就是
   每次执行这个函数时，都会创建新的 `usedWatchables` 集合，这意味着原来集合中的数据丢失了。代码中有多处
   使用到 `useWatchable()` 包装 React 组件。也就是说每次调用 `WatchableAdapter<T>.get()` 方法
   添加到这个集合的对象都会下一次调用 `trackUsedWatchables(fn)` 时移除。每一次  `useWatchable()`
   或者 `autorun()` 都会让这种事件发生。换种角度来理解，也就是在 `trackUsedWatchables(fn)` 被调用
   之前所添加的被监视对象都属于同一组，从代码可知，目前只有 `useWatchable()` 和 `autorun()` 方法相关
   的两组被监视对象，可以看作是两组全局的被监视对象。

   暂且先不管它的意图，从使用到这个集合的两个方法入手。记录这些可监视对象到 `usedWatchables` 集合
   目的就是为了向它们注册监视函数 `watch(wrapperFn)`。其中 `useWatchable<T>` 注册的是一个计数器，
   它利用 React 的状态对象来计数。调用 `useState()` 返回的是一组对象，一个是状态值，另一个是这个值
   的设置函数 `(value, setValue)`。此钩子函数接收一个初始值或者是可以返回初始值的回调函数。作为钩子
   函数，React Hook，不能在循环、条件中使用它，只能在组件顶级代码中使用，不应用在渲染过程使用。这个钩子
   函数会产生一个钩子对象用于管理状态数据。

   重点在 `autorun()` 这个函数，它一方面执行传入的回调函数，同时，还将传入的回调函数包装、注册为监视函数。
   返回的是一个用于 dispose 操作的回调函数，这个满足 `useEffect()` 的规定。注册监视函数的目的是在修改
   监视对象时 `IWatchable<T>.set()` 调用这些监视函数，实现一对多的通知。而 `autorun()` 这个函数只在
   视图构造器中使用，也就是说 `autorun()` 通过包装 `View` 的渲染函数为监视函数，并添加到全局的监视函数
   列表 `useWatchables`，并且这个列表保存所有在下一次 `trackUsedWatchables()` 执行前添加的被监视对象，
   通过 `WatchableAdapter<T>.get()` 方法添加，然后在这些被监视对象的的 `setter()` 执行的同时触发
   视图的渲染函数，以实现实时渲染用于绘图的图层数据，直到视图组件被销毁才解除监视。由于 `autorun()` 中的
   闭包函数的存在，所以它可以持续通过 `watchables` 访问到原先 `usedWatchables` 登记的被监视对象，即
   使它被 `trackUsedWatchables()` 重新赋值。

   .. code:: javascript

      let usedWatchables: Set<IWatchable<any>> | undefined = undefined;

      function trackUsedWatchables<T>(fn: () => T): [T, Set<IWatchable<any>>] {
         try {
            usedWatchables = new Set();
            return [fn(), usedWatchables];
         } finally {
            usedWatchables = undefined;
         }
      }

      export function useWatchable<T>(fn: () => T): T {
         const [_, setCounter] = useState(0);
         const [value, watchables] = trackUsedWatchables(fn);
         useEffect(() => {
            const incrementCounter = () => setCounter((counter) => counter + 1);
            watchables.forEach((watchable) => {
               watchable.watch(incrementCounter);
            });
            return () => {
               watchables.forEach((watchable) => {
               watchable.unwatch(incrementCounter);
               });
            };
         }, []);
         return value;
      }

      export function autorun(fn: () => void): () => void {
         const [_, watchables] = trackUsedWatchables(fn);
         const wrapperFn = () => fn();
         watchables.forEach((watchable) => {
            watchable.watch(wrapperFn);
         });
         return () => {
            watchables.forEach((watchable) => {
               watchable.unwatch(wrapperFn);
            });
         };
      }

   从视图构造函数的实现来看 `useWatchable()` `useEffect()` `autorun()` 这三个函数的调用依次为
   附属关系。其中 `useWatchable()` 监视的目标的更新会触发计数器，因此它对理解 ASCIIFlow 代码的运行
   只有障眼的作用。核心在于 `autorun()` 阶段添加的全局被监视对象，它们主要是在视图渲染函数中添加的两个
   对象，它们是 `CanvasStore` 的两个可监视属性：草稿图层和选区：

   .. code:: javascript

      function render(canvas: HTMLCanvasElement) {

         const scratch = store.currentCanvas.scratch.get();
         const selection = store.currentCanvas.selection.get();

   经过以上的分析和代码整理，问题修复，ASCIIFLow 源代码分析工作至此结束。结果是更新了两个主要问题，
   利用 ASCIIFlow 绘制了它本身的程序构架图，同时多了一份开源代码阅读文档，自认为质量还挺高。因为
   没有人在做这方面的工作。

   ASCIIFlow 逻辑框架示意图如下，只有 UNICODE 字符输出字符可以再次粘贴到 ASCIIFlow 并转换为其它字符。

   .. code:: javascript

      ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╕   ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╕
      ┊                                                                                  ┊   ┊                 ╒┄┄┄┄┄┄┄┄┄┄╕         ┊
      ┊                                    AsciiFlow Web App                             ┊   ┊                 ┊ DrawBox  ┼┄┄┄┄┄╕   ┊
      ┊                                                                                  ┊   ┊                 ╘┄┄┄┄┄┄┄┄┄┄╛     ┊   ┊
      ┊ ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╕    ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╕ ┊   ┊                 ╒┄┄┄┄┄┄┄┄┄┄┄╕    ┊   ┊
      ┊ ┊ <Drawer>           ┊    ┊ <View> : (...) => <canvas>         ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╧┄╡   ┊                 ┊ DrawErase┄┼┄┄┄┄╡   ┊
      ┊ ┊                    ┊    ┊  ┊                                 ┊ ╒┄┄┄┄┄┄┄┄┄┄┄┄┄╕ ┊   ┊                 ╘┄┄┄┄┄┄┄┄┄┄┄╛    ┊   ┊
      ┊ ┊ ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╕  ┊    ┊  ╞┄┄useWatchable<T>(fn: () => T): T┊ ┊ onTouchStart┊ ┊   ┊                 ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄╕ ┊   ┊
      ┊ ┊ ┊ <ToolControl> ┊  ┊    ┊  ┊   ┊                             ┊ ╞┄┄┄┄┄┄┄┄┄┄┄┄┄╡ ┊   ┊                 ┊ DrawFreeform ┼┄╡   ┊
      ┊ ┊ ╘┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╛  ┊    ┊  ┊   ╘┄┄┄trackUsedWatchables(fn)   ┊ ┊ onTouchMove ┊ ┊   ┊                 ╘┄┄┄┄┄┄┄┄┄┄┄┄┄┄╛ ┊   ┊
      ┊ ┊ ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╕ ┊    ┊  ┊                                 ┊ ╞┄┄┄┄┄┄┄┄┄┄┄┄┄╡ ┊   ┊                 ╒┄┄┄┄┄┄┄┄┄┄╕     ┊   ┊
      ┊ ┊ ┊ <ShortcutChip> ┊ ┊    ┊  ╘┄┄useEffect()                    ┊ ┊ onTouchEnd  ┊ ┊   ┊                 ┊ DrawLine ┼┄┄┄┄┄╡   ┊
      ┊ ┊ ╘┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╛ ┊    ┊      ┊                             ┊ ╘┄┄┄┄┄┄┄┄┄┄┄┄┄╛ ┊   ┊                 ╘┄┄┄┄┄┄┄┄┄┄╛     ┊   ┊
      ┊ ┊ ╒┄┄┄┄┄┄┄┄┄┄┄┄╕     ┊    ┊      ╘┄┄┄render(canvas)            ┊                 ┊   ┊                 ╒┄┄┄┄┄┄┄┄┄┄╕     ┊   ┊
      ┊ ┊ ┊ <ToolHelp> ┊     ┊    ┊              ↑                     ┊ ╒┄┄┄┄┄┄┄┄┄┄┄┄┄╕ ┊   ┊                 ┊ DrawMove ┼┄┄┄┄┄╡   ┊
      ┊ ┊ ╘┄┄┄┄┄┄┄┄┄┄┄┄╛     ┊    ┊              ┊     Render the grid ┊ ┊ onMouseDown ┊ ┊   ┊                 ╘┄┄┄┄┄┄┄┄┄┄╛     ┊   ┊
      ┊ ┊                    ┊    ┊              ┊      ╒╤╤╤╤╤╤╤╤╤╤╤╕  ┊ ╞┄┄┄┄┄┄┄┄┄┄┄┄┄╡ ┊   ┊                 ╒┄┄┄┄┄┄┄┄┄┄╕     ┊   ┊
      ┊ ┊ ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╕ ┊    ┊              ┊      ╞┼┼┼┼┼┼┼┼┼┼┼╡  ┊ ┊ onMouseUp   ┊ ┊   ┊                 ┊ DrawNull ┼┄┄┄┄┄╡   ┊
      ┊ ┊ ┊ <ExportDialog> ┊ ┊    ┊              ┊      ╞┼┼┼┼┼┼┼┼┼┼┼╡  ┊ ╞┄┄┄┄┄┄┄┄┄┄┄┄┄╡ ┊   ┊  getCursor()    ╘┄┄┄┄┄┄┄┄┄┄╛     ┊   ┊
      ┊ ┊ ┊ useWatchable   ┊ ┊    ┊              ┊      ╞┼┼┼┼┼┼┼┼┼┼┼╡  ┊ ┊ onWheel     ┊ ┊   ┊                 ╒┄┄┄┄┄┄┄┄┄┄┄┄╕   ┊   ┊
      ┊ ┊ ┊╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄╕┊ ┊    ┊          autorun()  ╞┼┼┼┼┼┼┼┼┼┼┼╡  ┊ ╞┄┄┄┄┄┄┄┄┄┄┄┄┄╡ ┊   ┊                 ┊ DrawSelect ┼┄┄┄╡   ┊
      ┊ ┊ ┊┊ applyConfig()←┼┄┼┄╕  ┊              ↑      ╞┼┼┼┼┼┼┼┼┼┼┼╡  ┊ ┊ onMouseMove ╞┄┼┄┄┄┼┄┄┄┄┄→ move()    ╘┄┄┄┄┄┄┄┄┄┄┄┄╛   ┊   ┊
      ┊ ┊ ┊╘┄┄┄┄┄┄┄┄┄┄┄┄┄┄╛┊ ┊ ┊  ┊              ┊      ╞┼┼┼┼┼┼┼┼┼┼┼╡  ┊ ╘┄┄┄┄┄┄┄┄┄┄┄┄┄╛ ┊   ┊                 ╒┄┄┄┄┄┄┄┄┄┄╕     ┊   ┊
      ┊ ┊ ╘┄┄┄┄┄┄┄↑┄┄┄┄┄┄┄┄╛ ┊ ┊  ┊              ┊      ╘╧╧╧╧╧╧╧╧╧╧╧╛  ┊ ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄╕┊   ┊                 ┊ DrawText ╞┄┄┄┄┄╡   ┊
      ┊ ╘┄┄┄┄┄┄┄┄┄┼┄┄┄┄┄┄┄┄┄┄╛ ┊  ╘┄┄┄┄┄┄┄┄┄┄┄┄┄┄┼┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╡ ┊handleKeyDown ┊┊   ┊                 ╘┄┄┄┄┄┄┄┄┄┄╛     ┊   ┊
      ╘┄┄┄┄┄┄┄┄┄┄┄┼┄┄┄┄┄┄┄┄┄┄┄┄┼┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┼┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╡ ┊             ┄┼╧┄┄┄┼┄→handleKey() ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄↓┄┄╕┊
          ╒┄┄┄┄┄┄┄╛            ┊                 ┊         ╒┄┄┄┄┄┄┄┄┄┄┄╛ ┊handleKeyPress┊┊   ┊              ┊ AbstractDrawFunctio  ┊┊
          ┊                    ┊                 ┊         ┊             ╘┄┄┄┄┄┄┄┄┄┄┄┄┄┄╛┊   ┊              ╘┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╤ ┄╛┊
          ┊    ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╧┄╕      ╒┄┄┄┄┄┄┄┄╧┄┄┄┄┄┄┄╕ ┊              handleKeyUp    ┊   ┊              ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╕  ┊   ┊
          ┊    ┊  ICharacterSet  ┊      ┊ usedWatchables ┊ ┊                             ┊   ┊              ┊ IDrawFunction  ←┄┄╛   ┊
          ┊    ╘┄↑┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╛      ╘┄┄┄┄┄┄┄┄↑┄┄┄┄┄┄┄╛ ┊              endAll() ┄┄┄┄┄┄┼┄┄┄┼┄┄┄┄→ start() ╘┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╛      ┊
          ┊      ┊ ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╕       ┊         ┊                             ┊   ┊                                      ┊
          ┊      ╞┄╡ Double Struck [NEW] ┊       ┊         ┊              startDraw() ┄┄┄┼┄┄┄┼┄┄┄┄┄┄→ end()                         ┊
          ┊      ┊ ╘┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╛       ┊         ┊                             ┊   ╘┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╤┄┄┄┄┄┄┄┄┄┄┄┄┄╛
          ┊      ┊ ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╕       ┊         ┊              startDrag()    ┊                            ┊              
          ┊      ╞┄╡ Dotted        [NEW] ┊       ┊         ┊                             ┊                            ┊              
          ┊      ┊ ╘┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╛       ┊         ┊     ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╕   ┊                            ┊              
          ┊      ┊ ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╕       ┊         ┊ ╒┄╤┄╡ Controller        ┊←┄┄┼┄┄┄┄ Keyboard Events        ┊              
          ┊      ╞┄╡ Strong Struck [NEW] ┊       ┊         ┊ ┊ ┊ ╘┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╛   ┊                            ┊              
          ┊      ┊ ╘┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╛       ┊         ┊ ┊ ┊ ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╕   ┊                            ┊              
          ┊      ┊ ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╕       ┊         ┊ ┊ ╘┄╡ TouchController   ┊←┄┄┼┄┄┄┄┄┄┄ Touch Events        ┊              
          ┊      ╞┄╡ Strong Side   [NEW] ┊       ┊         ┊ ┊   ╘┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╛   ┊                            ┊              
          ┊      ┊ ╘┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╛       ┊         ┊ ┊   ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╕   ┊                            ┊              
          ┊      ┊ ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╕            ┊         ┊ ╘┄┄┄╡ DesktopController ┊←┄┄┼┄┄┄┄┄┄┄ Mouse Events        ┊              
          ┊      ╞┄╡ ASCII Extended ┊            ┊         ┊     ╘┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╛   ┊                            ┊              
          ┊      ┊ ╘┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╛            ┊         ╘┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╛                            ┊              
          ┊      ┊ ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╕            ┊                                                  ╒┄┄ paste         ┊              
          ┊      ╘┄╡ ASCII Basic    ┊            ╘┄┄┄┄┄┄┄┄┄┄┄┄╕                   ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╕ ┊                 ↓              
          ┊        ╘┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╛    ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┼┄┄┄┄┄┄┄┄┄┄┄╕       ┊               ┊ ┊      ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╕
          ┊                              ┊                    ┊         ╒┄┼┄┄┄┄┄┄┄┼ layerToText() ╞┄╛      ┊  Store                 ┊
          ┊                              ┊   CanvasStore      ┊         ┊ ┊       ┊ textToLayer() ┊        ┊                        ┊
          ┊                              ┊                    ┊         ┊ ┊       ┊               ┊        ┊  watchableValue        ┊
          ┊                              ┊     watchableValue ┊         ┊ ┊       ╘┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╛        ┊  ┊                     ┊
          ┊                              ┊     ┊              ┊         ┊ ┊                                ┊  ╞┄┄ currentTool       ┊
          ┊        ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┼┄┄┄→ ╞┄ scratch<Layer>        ┊ ┼┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┼┄→╞┄┄ currentCanvas     ┊
      ╒┄┄┄┼┄┄┄┄┄┄┄┄┼┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╕    ┊     ╘┄ selection<Box>        ┊ ┊                                ┊  ╞┄┄ freeformCharacter ┊
      ┊                             ┊    ┊                              ┊ ┊                                ┊  ╞┄┄ selectedToolMode  ┊
      ┊      ╒┄┄┄┄┄┄┄┄┄┄┄┄╕         ┊    ┊     WatchableAdapter<Layer> :┊ ┊                                ┊  ╞┄┄ panning           ┊
      ┊      ┊ ILayerView ┊         ┊    ┊     ┊                        ┊ ┊                                ┊  ╞┄┄ altPressed        ┊
      ┊      ╘┄┄┄┄┄┄↑┄┄┄┄┄╛         ┊    ┊     ╞┄ persistentCommitted   ┊ ┊  ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╕  ┊  ╞┄┄ currentCursor     ┊
      ┊     ╒┄┄┄┄┄┄┄╧┄┄┄┄┄┄┄╕       ┊    ┊     ╞┄ committed             ┊ ┊  ┊                          ┊  ┊  ╘┄┄ modifierKeys      ┊
      ┊ ╒┄┄┄╧┄┄┄┄┄╕ ╒┄┄┄┄┄┄┄╧┄┄┄╕   ┊    ┊     ╞┄ undoLayers            ┊ ┊  ┊  DrawingId               ┊  ╘┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╛
      ┊ ┊  Layer  ┊ ┊ LayerView ┊   ┊    ┊     ╘┄ redoLayers            ┊ ┊  ┊                          ┊  ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╕
      ┊ ╘┄┄┄┄┄┄┄┄┄╛ ╘┄┄┄┄┄┄┄┄┄┄┄╛   ┊    ┊                              ┊ ┊  ┊  type: "local" | "share" ┊  ┊                        ┊
      ┊                             ┊    ┊   undo()                     ┊ ┊  ┊                          ┊  ┊ Persistent             ┊
      ┊                             ┊    ┊   redo()                     ┊ ┊  ┊  saveDrawing()    ┄┄┄┄┄┄┄┼┄→┊ ╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╕ ┊
      ┊  deserialize(value: string)┄┼┄┄┄┄┼┄→ setScratchLayer(layer) ←┄┄┄╛ ┊  ┊                          ┊  ┊ ┊ localStorage       ┊ ┊
      ┊                             ┊    ┊   commitScratch()              ┊  ┊  deleteDrawing()┄┄┄┄┄┄┄┄┄┼┄┄┼→┊ ╞┄┄ getItem(key)   ┊ ┊
      ┊  apply(layer): [ldo, lundo] ┊    ┊   _route ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┼┄→┊  renameDrawing()┄┄┄┄┄┄┄┄┄┼┄┄┼→┊ ╘┄┄ setItem(key)   ┊ ┊
      ┊                             ┊    ┊                                ┊  ┊                          ┊  ┊ ╘┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╛ ┊
      ╘┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╛    ╘┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╛  ╘┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╛  ╘┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╛


VS Code Extension Preliminary Exploration
================================================================================

   *  `Electron - Process Model <https://vscode.dev/github/electron/electron/tree/main/docs/tutorial/process-model.md>`__
   *  `The Visual Studio Code Roadmap 2023/24 <https://github.com/microsoft/vscode/wiki/Roadmap>`__
   *  `Debug Adapter Protocol <https://microsoft.github.io/debug-adapter-protocol/>`__
   *  `Monaco - The Editor of the Web <https://microsoft.github.io/monaco-editor/>`__
   *  `Monaco Editor <https://vscode.dev/github.com/Microsoft/monaco-editor>`__
   *  `Language Server Protocol <https://microsoft.github.io/language-server-protocol/>`__
   *  `Language Server Extension Guide <https://code.visualstudio.com/api/language-extensions/language-server-extension-guide>`__


   2011 年，Erich Gamma 以杰出工程师 (Distinguished Engineer) 的身份加入 Visual Studio
   团队，这个头衔的获得者基本上都是微软内部金字塔尖的技术大拿，在整个微软也就十几位，.NET 之父
   Anders Hejlsberg 也是其中之一。Gamma 接受微软的原因是一项挑战——在浏览器里构建集成开发环境
   （IDE in Browser），而这项挑战也在几年后为万千开发者提供了不一般的开发体验。Erich Gamma
   在 2017 SpringOne Platform 做了一个关于 VSCode 的技术分享，总结了他过往在开发 Eclipse
   的经验基础之上对 VSCode 进行顶层设计时的诸多思路与决策。Erich Gamma 是 JUnit 作者之一，
   《设计模式》一书作者之一， 加入微软后，在瑞士苏黎世组建团队开始了从 Monaco-editor 到 VS Code
   的进化之路。

   2014 年，萨提亚·纳德拉（Satya Nadella）升任微软 CEO，发表了“微软爱Linux”的宣言；同年底，
   微软公布了 .NET 开发框架开源计划，将这长期以来只能运行于 Windows 系统下的开发环境，实现跨平台
   支持 Mac OS X 和 Linux；随后，微软在 Build 2016 开发者大会上公布了一大批创新技术、开发工具
   和云服务，并收购 Xamarin 与 Visual Studio 进行整合。微软紧锣密布地推出一系列大手笔技术变革，
   最终构建了从框架到工具完整的开源开发体系，实现真正的跨平台开发，逐步夯实微软开源的进程和基础。

   今天，2024 年的普通一天，我已经在 Windows 系统熟练地通过 MSYS2 和 WSL 环境使用 Linux。

   VS Code 技术栈包括：TypeScript 语言，浏览器（在线运行）或者 Electron（运行于桌面环境）。
   Electron 是非常重要的实现跨平台 Web 应用的宿主平台，它本身基于 Chromium 浏览器，集成 Node.js
   和 Native API。也就是说 Electron 拥有 Node 运行时环境，依靠 Chromium 提供的 Web 图形技术
   （HTML、CSS、JS）提供界面交互支持，另外还具有一些系统平台特性，比如桌面通知、本地文件系统访问。

   Electron API 设计继承了 Chromium 的多进程构架，一个 Web App 有且有一个入口进程和各个页面
   的渲染线程（Renderer Process），以及其它工具进程 `UtilityProcess`。API 模块设计也按照
   多进程架构设计，这种多进程架构的设计很好地保证了 Web 页面之间的安全：

   - Main Process - 唯一的入口主进程，可以访问 Node 及 Native API；
   - Renderer Process - 每页面的渲染进程，只能访问 Web API。特殊的 preloader 脚本可访问部分 Node.js API；
   - Share Modules（其它共享模块）

   基于 Web 平台开发的 Monaco Editor 是 VS Code 的核心组件之一，提供了现代编辑器的各种特性：
   语法高亮、智能提示、自动完成与验证、Diff Editor、Multiple Selections，正则语言查、选、改等等。

   VS Code 集成了 LSP (Language Server Protocol)，这是一个为各种编程语言和编辑器之间提供
   智能提示、符号定位、自动完成、代码语法纠错等等功能的服务协议。通过统一语言服务协议，各种语言编译器
   和编辑器之间就搭建起来一条规范的信息交接途径，所有编辑器的智能提示、完成等功能的实现也有规范可以依。
   用户在编辑器（Client）上的操作，比如打开文件、光标移动、悬停位置等信息传送给语言服务器（Server），
   通过后台相应的语言语法、词法解释、分析，得到各种信息再反馈给编辑器，由编辑器根据不同的信息通过不同
   的 UI 呈现给用户，比如用波浪线标记有语法错误的内容、弹出备选框实现自动完成等功能。

   VS Code 另一个强大的功能就是集成了 Debug Adapter Protocol，这已经是调试器与编辑器之间通信
   的事实规范。因此，各种流行的调试器程序开发者可以通过 VS Code 插件扩展实现其调试功能的支持，实现
   Debug Adapter 就可以按协议对接到编辑器。比如，Node.js 或者 Python，都有相应的 JavaScript
   和 Python 脚本的调试适配器，它们的调试功能都可以接入 VS Code。而编辑器或者 IDE 端只需要根据
   规范实现通用调试器界面（generic debugger UI），呈现调试适配器发送的状态数据即可以实现各种语言
   的调试功能，通信是双向的，因为需要实现向调试器下达断点设置等功能。

   无论是 LSP 还 DAP，这两种协议都使用 JSON-RPC 数据格式作为通信过程中信息传递的载体。 

   此外，VS Code 还整合了众多开源项目，请参考 VS Code Wiki 页面：
   `Related Project <https://vscode.dev/github.com/microsoft/vscode/wiki/Related-Project>`__

   VS Code 在 2019 年发布了 Remote Development，实现了远程开发，通过在远程 VSCode Server
   环境（比如虚拟机、容器、WSL）里开一个工作区（Workbench），然后用本地的 VS Code 连上去工作，
   就像在本地开发一样。这种架构设计下，插件机制的设计也变得相当复杂。Extension Host 是插件宿主，
   它运行于 Node.js 环境下的独立进程，因此 VS Code 插件也就是 Node.js 脚本模块。而插件与本地
   UI 以及远程工作区的通信也需要安全处理，因为在使用 Webview 的插件中，对访问的资源地址进行包装。
   插件宿主进程入口是 `startExtensionHostProcess()`，它负责实例化 `ExtensionHostMain`。
   VS Code 每个实例都有一个插件宿主进程管理当前工作空间中插件的激活、禁用状态。

   VS Code 包含 VS Code for Desktop / VS Code for Web 全平台环境运行，因此，插件的开发者
   也需要分清，插件运行环境：Web Broswer 或者 Electron。又因为远程开发的构架设计，插件开发者也
   需要考虑是 UI Extension 插件还是 Workspace Extension 插件。注意，Workspace 与 Workbench
   是不同的两个概念，前者指 VS Code 构架设计概念，后者更多指 UI 实现层面。


   `Source Code Organization <https://github.com/microsoft/vscode/wiki/Source-Code-Organization>`__
   文档描述了源代码的组织结构，其中中最关键的部分目录结构如下：

   *  `extensions` ─ 包含了将近 100 个内置插件的实现。
   *  `src/vs/base` ─ 通用功能，服务和构建用户界面。
   *  `src/vs/code` ─ 桌面应用程序的入口，缝合窗体、工具栏、菜单，Electron 主进程、共享进程、以及 CLI 命令行等等。
   *  `src/vs/editor` ─ 核心的 Monaco 代码编辑器，是一个独立项目。
   *  `src/vs/platform` ─ 为各层互通提供的基础服务，比如 workbench & code，服务通过依赖注入提供。
      注意，此层不应该包含 editor 或者 workbench 层的服务或代码。
   *  `src/vs/workbench` ─ 工作台是 Monaco 的寄主，管理 UI 布局 (Explorer, Status Bar...)，功能服务对接。
      借助 Electron 实现 VS Code for Desktop，以及借助 Web API 实现 VS Code for Web。
   *  `src/vs/server` ─ 远程开发中服务端程序入口，VS Code Server。


   核心层完全使用 TypeScript 实现，都按按目标执行环境（Target Environments）细分：

   *  `common` ─ 可跨环境复用的部分；
   *  `browser` ─ 依赖 Web API 的，比如 DOM 操作；
   *  `node` ─ 依赖 Node API 的部分底层代码，比如文件 I/O 操作；
   *  `electron-browser` ─ 依赖 Electron Renderer-Process API 的部分；
   *  `electron-main` ─ 依赖 Electron Main-Process API 的部分；

   .. code:: javascript

          VS Code for Desktop               VS Code for Web      
                        │                                │       
      ┌─────────────────┬────────────────────────────┐   │       
      │   src/vs/code/  │                            │   │       
      │                 ↓                            │   │       
      │ ┌──────────────────────────────────────────┐ │   │       
      │ │ electron-main/main.ts                    │ │   │       
      │ │                                          │ │   │       
      │ │ CodeMain()                               │ │   │       
      │ │   ...                                    │ │   │       
      │ │   instantiationService                   │ │   │       
      │ │   .createInstance(CodeApplication, ...)  │ │   │       
      │ │   .startup();         │                  │ │   │       
      │ │                       │                  │ │   │       
      │ └───────────────────────┼──────────────────┘ │   │       
      │                         │                    │   │       
      │ ┌───────────────────────┼──────────────────┐ │   │       
      │ │ electron-main/app.ts  │                  │ │   │       
      │ │                       │                  │ │   │       
      │ │                       ↓                  │ │   │       
      │ │ class CodeApplication extends Disposable │ │   │       
      │ │                   │                      │ │   │       
      │ └───────────────────┼──────────────────────┘ │   │       
      └─────────────────────┼────────────────────────┘   │       
                            :                            :       
      ┌─────────────────────┼────────────────────────────┬──────┐
      │                     │                            │      │
      │   src/vs/workbench  │                            │      │
      │                     ↓                            ↓      │
      │ ┌───────────────────────────┐ ┌───────────────────────┐ │
      │ │ workbench.sandbox.main.ts │ │ workbench.web.main.ts │ │
      │ └───────────────────┬───────┘ └───────┬───────────────┘ │
      │                     │                 │                 │
      │             ┌───────↓─────────────────↓────────┐        │
      │             │  workbench.common.main.ts        │        │
      │             └──────────────────────────────────┘        │
      └─────────────────────────────────────────────────────────┘

   VS Code 代码中大量使用控制反转 IoC（Inversion of Control）编程模式。IoC 是一种面向对象
   编程中的设计思想，目的用来减低计算机代码之间的耦合度。其基本思想是：借助于“第三方”实现解耦对象
   间的依赖关系。其中一种实现方式是依赖注入 DI（Dependency Injection），就是依赖的对象移出
   核心代码，并通过实例变量传入的方式将依赖关系转移到系统外部。

   软件工程实践中，依赖注入实现中将被依赖的对象定义为 `Service`，使用服务的对象称为客户（Client）。
   注入（Injection）则是指将被依赖的对象（Service）作为参数传递给使用该服务的对象内部。客户不需
   要主动去实例化所依赖的服务，也不需要通过工厂模式去获取依赖的服务。此外，还需要设计一个用于管理
   服务的对象，或称服务注册中心，客户的外部依赖通过服务中心创建。

   综上所述，VS Code 软件架构可以用以下示意图来表示。注意，远程开发部分并没有体现出来，Electron
   内部进程使用进程内通信（IPC），如果有远程操作（VS Code Server），那就需要使用远程过程调用协议
   （RPC, Remote Procedure Call Protocol）：

   .. code:: javascript

      ┌──────────────────────┐                                      ┌─┬────────────┐
      │       Electron       │            ┌────────────┐            │ │ Algol-60   │
      │                      │          ┌─┴───────────┐│            │ ├────────────┤
      │  ┌────────────────┐  │         ┌┴────────────┐││            │ │ BASIC      │
      │  │                │  │         │             │││            │ ├────────────┤
      │  │  Main Process  │  │         │   Node.js   ││┘            │ │ C/C++      │
      │  │      │  ↑      │  │         │             ├┘             │ ├────────────┤
      │  └──────┼──┼──────┘  │         └────↑──┬─────┘              │ │ Java       │
      │         │  │         │              │  │V8 Debuger Protocol │ ├────────────┤
      │         │  │ IPC     │              │  │                    │ │ Rust       │
      │         │  │         │              │  │                    │ ├────────────┤
      │  ┌──────┼──┼──────┐  │           ┌──┴──↓─────────┐          │ │ Golang     │
      │  │      ↓  │      ├──┼────────→ ┌┴──────────────┐│          │ ├────────────┤
      │  │ Render Process │  │         ┌┴──────────────┐│┘          │ │ Erlang     │
      │  │      │  ↑      │←─┼─────────┤ Debug Adapter ├┘           │ ├────────────┤
      │  └──────┼──┼──────┘  │         └───────────────┘            │ │ Kotlin     │
      │         │  │         │  Debug Adapter Protocol              │ ├────────────┤
      │         │  │ RPC     │                                      │ │ Python     │
      │  ┌──────┼──┼──────┐  │          ┌───────────────────────────┘ ├────────────┤
      │  │      ↓  │      │←─┼──────────┤                             │ JavaScript │
      │  │ Extension Host │  │          │  Language Server            ├────────────┤
      │  │                ├──┼─────────→│                             │ TypeScript │
      │  └────────────────┘  │          └───────────────────────────┐ ├────────────┤
      │                      │  Language Server Protocol            │ │   ......   │
      └──────────────────────┘                                      └─┴────────────┘

   .. code:: javascript

      // src/vs/platform/commands/common/commands.ts

      export interface ICommandRegistry {
         onDidRegisterCommand: Event<string>;
         registerCommand(id: string, command: ICommandHandler): IDisposable;
         registerCommand(command: ICommand): IDisposable;
         registerCommandAlias(oldId: string, newId: string): IDisposable;
         getCommand(id: string): ICommand | undefined;
         getCommands(): ICommandsMap;
      }

      export const CommandsRegistry: ICommandRegistry = new class implements ICommandRegistry {

         private readonly _commands = new Map<string, LinkedList<ICommand>>();

         private readonly _onDidRegisterCommand = new Emitter<string>();
         readonly onDidRegisterCommand: Event<string> = this._onDidRegisterCommand.event;

         registerCommand(idOrCommand: string | ICommand, handler?: ICommandHandler): IDisposable {
         // ...

      // src/vscode-dts/vscode.d.ts

      export namespace commands {
         export function registerCommand(command: string, callback: (...args: any[]) => any, thisArg?: any): Disposable;
      }

      // src/vs/monaco.d.ts

      declare namespace monaco.editor {
         export function registerCommand(id: string, handler: (accessor: any, ...args: any[]) => void): IDisposable;
      }



VS Code Extensions Beginners
================================================================================

   *  https://marketplace.visualstudio.com/items?itemName=zenghongtu.vscode-asciiflow2
   *  `Your First Extension <https://code.visualstudio.com/api/get-started/your-first-extension>`__
   *  `VS Code Extension Generator <https://www.npmjs.com/package/generator-code>`__
   *  `Extension Capabilities Overview <https://code.visualstudio.com/api/extension-capabilities/overview>`__

   首先，开发 VS Code 插件（扩展）需要明确插件运行在什么环境中，并且根据脚本运行环境来实现插件的功能。
   VS Code 约等于 Monaco-Editor + Electron + Node，也就是 Chromium 浏览器、V8 JavaScript
   引擎，还有 Node API。编写插件脚本时，只需要导入 `vscode` 模块就可以访问到所有 VS Code 提供的
   扩展接口（VS Code extensibility API）。另外，因为基于 Electron，如果插件还可以创建 Web 页面
   展示自己的 UI，或者使用 API 将 UI 集成到 VS Code 系统的界面中。可以通过 VC Code 代码仓库中的
   `vscode.d.ts` 类型声明文件获得所有 API 信息。

   `Extending Workbench <https://code.visualstudio.com/api/extension-capabilities/extending-workbench>`__
   文档中的一幅示意图可以很好地解释 VS Code 主界面的 UI 划分，以及插件可以定制的 UI 功能：

   .. figure::  https://code.visualstudio.com/assets/api/extension-capabilities/extending-workbench/workbench-contribution.png

   ============= ============================== ===============================
   UI Areas      Contribution Point/Components  Notes
   ------------- ------------------------------ -------------------------------
   Activity Bar  contributes.viewsContainers    : The Azure App Service extension adds a View Container
   Side Bar      contributes.views              : The built-in NPM extension adds a Tree View to the Explorer View
   Editor Group  `WebviewPanel`                 : The built-in Markdown extension adds a Webview next to other editors in the Editor Group
   Status Bar    `StatusBarItem`                : The VSCodeVim extension adds a Status Bar Item in the Status Bar
   ============= ============================== ===============================

   `Supporting Remote Development and GitHub Codespaces <https://code.visualstudio.com/api/advanced-topics/remote-extensions>`__
   远程开发是 VS Code 项目的一个重要目标，Remote Development or Codespaces。因此在 VS Code
   插件架构设计中，有意将插件划分为两种类型：首先 UI Extensions 插件安装在本地主机中（Local OS），
   也就是用户可以直接看到插件在 VS Code 界面上提供的功能，可以直接访问本地文件资源等等。而工作区插件
   （Workspace Extensinos）则安装、运行在远程或本地主机之中，取决于工作区运行的位置。也就是说，当
   用户在本地打开 VS Code 时，它的 UI 界面和工作区都在本地主机上，当用户连接到诸如 WSL 子系统等远程
   主机时（包括容器化虚拟主机），那么 UI 界面运行在本地主机上，但是工作区却是在远程主机上，用户在控件台
   执行的命令也需要发送到远程主机上执行。VS Code Server 服务会自动安装（更新）工作区插件，VS Code
   还会自动管理这个服务的启停，而这一切都在良好的插件架构设计上，对用户变得透明。

   VS Code 支持多种远程开发方式，内置支持以下四种：

   *  `Remote - SSH` - Connect to any location by opening folders on a remote machine/VM using SSH.
   *  `Dev Containers` - Work with a separate toolchain or container-based application inside (or mounted into) a container.
   *  `WSL` - Get a Linux-powered development experience in the Windows Subsystem for Linux.
   *  `Remote - Tunnels` - Connect to a remote machine via a secure tunnel, without configuring SSH.

   .. code::

      ┌─────────────────────────────────────────────────┐   ┌─────────────────────────────────────────────────────────┐
      │                    Local OS                     │   │                       Remote OS                         │
      │                                                 │   │                                                         │
      │                          ┌────────────────────┐ │   │┌───────────────────────────┐                            │
      │ ┌───────────────────┐    │                    │ │RPC││                           │   ┌────────────────────┐   │
      │ │ Local File System │◄───┼      VS Code      ─┼─┼───┼┼──►   VS Code Server       ┼──►│ Remote File System │   │
      │ └───────────────────┘    │                    │ │   ││                           │   └────────────────────┘   │
      │                          │ ┌────────────────┐ │ │   ││ ┌───────────────────────┐ │   ┌────────────────────┐   │
      │ ┌──────────────────────┐ │ │┌──────────────┐│ │ │   ││ │┌─────────────────────┐│ ┼──►│ Terminal Processes │   │
      │ │ Extn Child Processes │◄┼ ││ UI Extension ││ │ │   ││ ││ Workspace Extension ││ │   ├────────────────────┴┐  │
      │ └──────────────────────┘ │ │└──────────────┘│ │ │   ││ │└─────────────────────┘│ ┼──►│ Running Application │  │
      │ ┌───────────────┐        │ │┌──────────────┐│ │ │   ││ │┌─────────────────────┐│ │   ├──────────┬──────────┘  │
      │ │ Local OS APIs │◄───────┼ ││ UI Extension ││ │ │   ││ ││ Workspace Extension ││ ┼──►│ Debugger │             │
      │ └───────────────┘        │ │└──────────────┘│ │ │   ││ │└─────────────────────┘│ │   ├──────────┴───────────┐ │
      │                          │ │┌──────────────┐│ │ │   ││ │┌─────────────────────┐│ ┼──►│ Extn Child Processes │ │
      │                          │ ││ UI Extension ││ │ │   ││ ││ Workspace Extension ││ │   ├────────────────┬─────┘ │
      │                          │ │└──────────────┘│ │ │   ││ │└─────────────────────┘│ ┼──►│ Remote OS APIs │       │
      │                          ├─┘                └─┤ │   ││ │                       │ │   └────────────────┘       │
      │                          │Local Extension Host│ │   ││ └─Remote Extension Host─┘ │                            │
      │                          └────────────────────┘ │   │└───────────────────────────┘                            │
      └─────────────────────────────────────────────────┘   └─────────────────────────────────────────────────────────┘

   *  `VS Code Remote Development <https://code.visualstudio.com/docs/remote/remote-overview>`__
   *  `Visual Studio Code Server <https://code.visualstudio.com/docs/remote/vscode-server>`__
   *  `Extension Host <https://code.visualstudio.com/api/advanced-topics/extension-host>`__

   插件开发时，可以在 package.json 配置文件中指定  `"extensionKind": ["ui", "workspace"]` 
   这样的配置来决定插件期待优先的运行环境。

   因为 VS Code 不仅可以基于 Electron 运行在桌面系统环境，还可以直接在 Web 服务器上部署运行于
   浏览器环境。因此，插件开发需要考虑运行环境要，桌面环境或线上环境（Web Extensions），又或者通用。
   VS Code 提供用于测试插件的功能支持，通过运行参数让 VS Code 加载指定的开发中的插件，测试环境就
   称为 extension host 或者 web extension host 用于浏览器在线环境下的插件测试。目前在线运行的
   官方 VS Code 主要是 vscode.dev 和 github.dev，它们也是 GitHub Codespaces 在线开发的组成。
   在线插件（web extension）与桌面插件的一个主要区别是：项目配置文件中只有 `main` 入口，还是配置
   有浏览器环境入口 `browser`。使用了以下配置的插件会自动被 VS Code 认为是在线插件：

   *  The extension manifest (package.json) has `browser` entry point.
   *  The extension manifest has no `main` entry point and none of the following 
      contribution points: `localizations`, `debuggers`, `terminal`, `typescriptServerPlugins`.
   *  If an extension wants to provide a `debugger` or `terminal` that also work 
      in the web extension host, a `browser` entry point needs to be defined.

   +-------------------------------------+--------+-------+-------+
   | Configuration                       | |LEH|  | |WEH| | |REH| |
   +=====================================+========+=======+=======+
   | VS Code on the desktop              | ✔️     | ✔️    |       |
   +-------------------------------------+--------+-------+-------+
   | VS Code with remote                 | ✔️     | ✔️    | ✔️    |
   | (Container, SSH, WSL,               |        |       |       |
   | GitHub Codespace, Tunnel)           |        |       |       |
   +-------------------------------------+--------+-------+-------+
   | VS Code for the Web                 |        |       |       |
   | (vscode.dev, github.dev)            |        | ✔️    |       |
   +-------------------------------------+--------+-------+-------+
   | VS Code for the Web with Codespaces |        | ✔️    | ✔️    |
   +-------------------------------------+--------+-------+-------+

.. |LEH| replace:: local extension host
.. |WEH| replace:: web extension host
.. |REH| replace:: remote extension host

   综合以上，VS Code 插件有三种类型：本地运行的插件、Web 浏览器上运行的插件、远程运行插件。这些
   插件的运行时环境分别是 Node.js （本地插件和远程插件）和浏览器。VS Code Server 运行在标准的
   Node.js 环境中（非 Electron）。

   * local – A Node.js extension host running locally, on the same machine as the user interface.
   * web – A web extension host running in the browser or locally, on the same machine as the user interface.
   * remote – A Node.js extension host running remotely in a container or a remote location.


   以下是一组可以用于 Web extension 测试模块（@vscode/test-web）的参数：

   ========================== =================================================
   Option                     Argument Description
   ========================== =================================================
   --browserType              | The browser to launch: `chromium` (default), `firefox` or `webkit` 
   --extensionDevelopmentPath | A path pointing to an extension under development to include. 
   --extensionTestsPath       | A path to a test module to run. 
   --permission               | Permission granted to the opened browser: e.g. `clipboard-read`, `clipboard-write`.
                                See [full list of options][LK212]. Argument can be provided multiple times.  
   --folder-uri               | URI of the workspace to open VS Code on. Ignored when `folderPath` is provided 
   --extensionPath            | A path pointing to a folder containing additional extensions to include.
                                Argument can be provided multiple times. 
   folderPath                 | A local folder to open VS Code on.
                                The folder content will be available as a virtual file system and opened as workspace. 
   ========================== =================================================

   其中 `--extensionDevelopmentPath` 指定插件工程所在路径，另外 `--extensionTestsPath`
   用于指定插件测试测试模块的路径。可以在 launch.json 中添加 `--disable-extensions` 或者在
   runTests 脚本的 `launchArgs` 选项中添加该项以禁用其他插件。完成插件测试后，可以将插件共享、
   上传到官方插件集市服务器托管。

   从目前 VS Code 社区的发展态势来看，前景非常巨大有潜力。现在，已经可以从 VS Code 中看到 Google
   当年倡导的浏览器操作系统影子。现代浏览器提供了 File System API 用于访问本地文件系统，只要用户
   许可，Web 应用就能安全的读写本地文件。

   *  `Exetnsions  Marketplace <https://marketplace.visualstudio.com/vscode>`__
   *  `Web Extensions <https://code.visualstudio.com/api/extension-guides/web-extensions>`__
   *  `Testing Extensions <https://code.visualstudio.com/api/extension-guides/testing>`
   *  `File System API <https://developer.mozilla.org/docs/Web/API/File_System_Access_API>`__

   VS Code 官方文档提供了丰富的插件开发指导文档，Your First Extension 作为最简明的示范，用于
   展示如何通过 Yeoman 和 VS Code Extension Generator 基本插件骨架来开发一个只显示 Hello
   World 消息通知的插件。

   VS Code 基于 Node 环境，插件开发也一样需要安装 Node，还有 Git 用于获取示范工程代码。使用以下
   命令安装 yeoman 脚手架工具用于创建工程模板，是否要全局安装 yeoman 取决于需要：

   .. code:: javascript

      npx --package yo --package generator-code -- yo code

      # npm install --global yo generator-code
      # yo code

   对于一个简单的 HelloWorld 插件，只需要处理三件事（三个基本概念）就可以实现插件的完整结构：

   *  激活事件（Activation Event）的处理，就是在用户配置激活插件时的事件处理函数，例如 `onCommand` 。
      当用配置插件为激活状态时，编辑器就会触发激活事件，并调用插件代码中导出的 `activate()` 回调函数。
      VS Code 1.74.0 版本之后不需要显式配置 `onCommand` 激活事件。

      .. code:: javascript

         {
            "activationEvents": ["onCommand:myExtension.sayHello"]
         }

      插件内部命令也不需要 `onCommand` 激活事件，但如果想实现以下功能，就需要进行配置：

      *  Can be invoked using the Command Palette.
      *  Can be invoked using a keybinding.
      *  Can be invoked through the VS Code UI, such as through the editor title bar.
      *  Is intended as an API for other extensions to consume.

   *  使用 VS Code API 实现插件功能，这是一组 JavaScript APIs。在线开发站点可以查看这些 API： 
      `VS Code API <https://vscode.dev/github/microsoft/vscode/blob/main/src/vscode-dts/vscode.d.ts>`__

      某些插件（Remote SSH）本身也会包含这个 API 声明文件，使用 Open Extensions folder 命令打开
      插件目录，就可以找到。开发插件时，工程本身也需要依赖 `@types/vscode`，需要执行 `npm install`
      命令安装这些依赖模块。VS Code 安装目录下资源文件夹中的就有一份类型声明文件。

      使用 `vscode.commands.registerCommand(id, callback)` 为插件注册一个命令实现函数，用户
      可以在命令面板中执行这个注册好的命令回调函数。注册一个插件命令，需要为插件设置一个标识，比如
      `extension.sayHello`，这个标识需要和 Extension Manifest 配置的命令一致。注册命令后返回
      一个 `Disposable` 对象，它在销毁组件实例时，用于解除已经注册的命令，只需要将它推送到插件上下文
      对象 `ExtensionContext` 的可回收对象订阅列表 `subscriptions` 中即可以自动进行处理。

      注册好的命令可以使用 `vscode.commands.executeCommand()` 调用，比如调用内置命令：

      .. code:: javascript

         import * as vscode from 'vscode';

         async function printDefinitionsForActiveEditor() {
            const activeEditor = vscode.window.activeTextEditor;
            if (!activeEditor) {
               return;
            }

            const definitions = await vscode.commands.executeCommand<vscode.Location[]>(
               'vscode.executeDefinitionProvider',
               activeEditor.document.uri,
               activeEditor.selection.active
            );

            for (const definition of definitions) {
               console.log(definition);
            }
         }

   *  投放点配置 Contribution Point，这是一组扩展 package.json 的静态配置（Extension Manifest）。
      比如，以下 `contributes.commands` 配置中投放了一个插件命令，这样用户打开命令面板时就会出现它。
      插件功能参与实现编辑器功能的行为称为“contributes”，大概意思是提议、贡献一份力量的含义，同时也在
      配置文件中表示插件功能要投放的位置，因些将此种行为译作“投放点”是非常合适的选择，通俗易懂也贴切。

      这里假定插件标识为 `extension.sayHello`，使用句点来分隔前缀和命令名称，不是语法上的要求，是为了
      让标识更容易传递其语义，开发者也可以一眼分清是什么插件上的什么命令。命令配置中的 `title` 就是用户
      打开命令面板时显示的命令标题。可以看到 `contributes` 是一个列表，开发者可以配置任意数量的插件命令，
      同时也可以配置任意其它类型的投放点。

      .. code:: javascript

         {
            "contributes": {
               "commands": [
                  {
                  "command": "extension.sayHello",
                  "title": "Hello World",
                  "category": "Hello",
                  "icon": {
                     "light": "path/to/light/icon.svg",
                     "dark": "path/to/dark/icon.svg"
                  }
                  }
               ],
               "menus": { 
                  "extension.simpleMenu": [
                     {
                        "command": "extension.sayHello",
                        "group": "tags@1"
                     },
                  ] // ...
               },
               "submenus": [
                  {
                  "id": "extension.simpleMenu",
                  "label": "Hello"
                  },
               ],
            }
         }

   Contribution 是 VS Code 内部对于那些可以插件化的代码的称谓，在源代码中有专用的目录来编写这此
   可以为插件提供功能投放点的部分。例如，刚打开 VS Code 时显示的欢迎内容中，提供了用于创建新文件的
   功能，它就是一种内部注册好相应回调函数的功能投放点，因为功能有多种类型，所以注册这些功能的方法也有
   多种：

   *  `registerAction2` 用以为菜单项、命令注册一个回调动作；
   *  `KeybindingRegistry` 用以注册快捷键（可能也会同时注册命令）；
   *  `MenuRegistry` 用以在面板中注册一个子面板；
   *  `ViewContainerRegistry` 注册一个新的面板。；
   *  `ViewsRegistry` 用以在面板中注册一个子面板；
   
   .. code:: javascript

      // src\vs\workbench\contrib\welcomeViews\common\newFile.contribution.ts
      registerAction2(class extends Action2 {
         constructor() {
            super({
               id: 'welcome.showNewFileEntries',
               title: localize2('welcome.newFile', 'New File...'),
               category,
               f1: true,
               keybinding: {
                  primary: KeyMod.Alt + KeyMod.CtrlCmd + KeyMod.WinCtrl + KeyCode.KeyN,
                  weight: KeybindingWeight.WorkbenchContrib,
               },
               menu: {
                  id: MenuId.MenubarFileMenu,
                  group: '1_new',
                  order: 2
               }
            });
         }

         async run(accessor: ServicesAccessor): Promise<boolean> {
            return assertIsDefined(NewFileTemplatesManager.Instance).run();
         }
      });

   插件本身也可心是 TypeScript 项目，所以也有其它同类项目的类似结构，和配置文件。插件的核心在于
   package.json 配置和插件实现脚本 extension.ts。因为插件最终会在 VS Code 环境中运行，所以
   只需要在项目中引用 @types/code 模块提供类型声明信息即可以，不需要 VS Code 的原代码。依赖
   包配置文件 package.json 除了正常的 Node 项目配置信息，还包含（Extension Manifest）插件
   扩展元数据，主要包括 `contributes`， `activationEvents`，还有 `main` 指定的插件入口脚本。
   配置 `engines` 可以指定 VS Code 版本，如果有需要。选择的 VS Code 版本还可能与依赖模块不匹配，
   从而在安装依赖时出现错误：

   .. code:: bash

      npm WARN EBADENGINE Unsupported engine {
      npm WARN EBADENGINE   package: '@typescript-eslint/visitor-keys@8.11.0',
      npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
      npm WARN EBADENGINE   current: { node: 'v18.2.0', npm: '9.7.1' }
      npm WARN EBADENGINE }

   编写好插件实现代码后，接下来就是安装和测试插件。为了简化插件开发过程的测试，VS Code 提供了一种
   插件宿主运行模式，只需要在 `.vscode/launch.json` 配置一个 `"type": "extensionHost",`
   的进程加载配置，就可以在调试时运行一个专用于测试插件的 VS Code 实例。启动调试实例后，新的窗口
   就会按照 `launch.json` 文件中给 `args` （命令行参数）配置的插件路径参数加载指定插件入口脚本。
   等同于命令行手动执行插件的测试 `code --extensionDevelopmentPath helloworld-sample`。
   在测试宿主窗口中，测试 HelowWorld 插件，打开命令面板（Command Palette, Ctrl+Shift+P），
   输入投放点配置的命令标题，即可以看到有 “Hello World”这条命令。执行它，就可以在右下角的通知面板
   notification 中看到插件调用 `showInformationMessage()` 这个 API 发出的通告消息。

   以下是一份用于 web extension 测试的 launch.json 配置：

   .. code:: javascript

      {
      "version": "0.2.0",
      "configurations": [
         {
            "name": "Run Web Extension in VS Code",
            "type": "pwa-extensionHost",
            "debugWebWorkerHost": true,
            "request": "launch",
            "args": [
            "--extensionDevelopmentPath=${workspaceFolder}",
            "--extensionDevelopmentKind=web"
            ],
            "outFiles": ["${workspaceFolder}/dist/web/**/*.js"],
            "preLaunchTask": "npm: watch-web"
         }
      ]
      }

   为了让插件生效，可以使用 Developer: Reload Window 命令重新加载 VS Code 实例。也可以使用
   Output -> Extension Host 打包的插件调试信息来确认插件是否存在错误。一般插件脚本存在问题
   就无法正常注册命令的实现函数，在执行命令时就会出现“找不到xxx命令”的错误提示。使用开发者工具的
   控制台也可以看到调试信息。例如，因为通过手动执行插件调试命令，没使用绝对路径导致找不到插件文件。
   成功加载插件时，可以看到有一条 INFO Loading development extension 提示。这时还有种特殊
   情况导致执行不了插件命令，就是当前工作空间如果没有打开任何目录，加载插件并且访问资源就可能导致
   401 Unauthorized - HTTP 错误：

   .. code:: bash

      INFO Started local extension host with pid 15972.
      
      ERR Error scanning extensions at /asciiflow2-0.2.0.20241116: Unable to resolve nonexistent file

      Failed to load resource: the server responded with a status of 401 ()

   完成插件测试，接下来选择将插件共享、上传到官方插件集市服务器托管。打开 Markplace 主页，点击右
   上角 Publish extensions 登录，创建一个插件发布者账户（Publisher）。国内注册可能会遇到验证
   码服务器被挡的问题，grecaptcha is not defined。

   如果有自己的服务器域名，可以选择 Verified domain 进行验证，这样发布插件就会有一个蓝标标记通过
   了域名验证。然后，就可以将开发的插件打包上传。官方提供了专用的 vsce 命令用于将插件发布到插件集市。

   发行方是 VS Code 市场有权发布插件的唯一标识，每个插件的 package.json 文件都包含着 `publisher`
   字段标识插件的发行方、作者。注册成功并获得 Personal Access Token，马上就可以用 vsce 创建发行方。
   完成后，vsce 会记住这个 Personal Access Token，后续发布插件时会自动带上。

   .. code:: bash

      npm install -g vsce

      vsce create-publisher (publisher name)

      vsce login (publisher name)

   配置文件中设置的插件版本号使用 SemVer 语义标识符：major，minor，patch，匀可自动增量更新。
   使用 vsce 可以自动增量更新插件版本，也可以指定版本号发布插件。对于已经发布的插件，还可以使用
   unpublish 将其下架。指定插件 ID 的语法格式为 publisher.extension。下架插件的同时，插件
   所有历史统计数据也会一并清除。如果只是想打包插件，可以使用 `vsce package` 命令。此命令会在
   当前目录生成一个插件包 .vsix，它也可以当作本地插件进行安装使用。

   *  `Testing Extensions <https://code.visualstudio.com/api/working-with-extensions/testing-extension>`__
   *  `Publishing Extensions <https://code.visualstudio.com/api/working-with-extensions/publishing-extension>`__
   *  `Shipping Visual Studio Extensions <https://learn.microsoft.com/en-us/visualstudio/extensibility/shipping-visual-studio-extensions?view=vs-2022>`__
   *  `VSIX extension schema 2.0 reference <https://learn.microsoft.com/en-us/visualstudio/extensibility/vsix-extension-schema-2-0-reference?view=vs-2022>`__

   .. code:: bash

      vsce publish minor
      vsce publish 2.0.1
      vsce unpublish (publisher name).(extension name)


      vsce package --target win32-x64
      vsce publish --target win32-x64 win32-arm64
      vsce publish --packagePath PATH_TO_WIN32X64_VSIX

      # Install from a VSIX
      code --install-extension myextension.vsix


   发布工具会检查以下内容：

   *  pacakge.json 文件中的 icon 不可以是 SVG。
   *  pacakge.json 中的标记不可以是 SVG，除非来自于可靠的图标来源
   *  README.md 和 CHANGELOG.md 文档中的图片链接需要使用 https 协议
   *  README.md 和 CHANGELOG.md 文档中的图片不可以是 SVG，除非来自可靠的图标来源



VS Code Event Model
================================================================================

   事件是值得一说的部分，在日常生活中，事件就是指发生了什么事。在软件领域，事件被抽象为事件模型来
   理解。事件模型包含：
   
   *  事件的来源方：某些类型通过定义事件的发起机制，来让使用这个类型的客户代码拥有处理事件的机会；
   *  事件数据载体：也称事件对象，常用 `Event` 或者 `MouseEvent` 等等的名称来表示不同事件的数据载体；
   *  事件的消费者：某些类型定义事件源，对应另一端就是关心这此事件的事件消费者，它们通常注册处理函数（Listener）来等待事件的发生；

   事件来源方负责定义事件、管理事件监听队列，并且在自身销毁，保证清理事件消费者所注册的监听器，回调函数。
   一般来说，事件消费者会是先销毁的一方，因此需要自行解除监听。而事件来源方可能是整个软件生命周期都有效的
   事件管理中心，负责所有事件的派发（执行监听中的回调函数）。这涉及的就是事件管理的编程模式，常用事件管理
   的编程实现可以分为两类：

   *  分散式（Single-Responsibility Event Emitter）
   *  集中式（Centralized Event Dispatcher）

   Web DOM 的事件模型就是分散式的事件管理，页面中的所有 DOM 节点以及 document 和 window 对象，
   都可以注册各自的事件处理回调函数（Listener），解除监听任务也由事件消费者各自负责。Web DOM 规范
   的事件触发机制是三段式工作，也就是开发者有三个处理事件的时机，并且可以使用 `preventDefault()`
   解除事件相应产生的默认行为，以及使用 `stopPropagation()` 和 `stopImmediatePropagation()`
   解除其它后续阶级的事件处理函数的事件处理机会，立即解除表示解除其它当前阶段的事件处理函数：

   1. 首先从根节点逐次到触发事件的目标节点，这个过程称为捕捉事件阶段（capture phrase）；
   1. 然后触达引发事件的目标节点，这个过程称为目标事件阶段（target phrase）；
   1. 最后从目标节点逐次上长到根节点，这个过程称为冒泡事件阶段（bubbling phrase）；

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
                       │        │  ┌───────────┐         │     
                       ╰───> 4  ╰──│ <p>       │         7 <──╮
                             │    ╭┴ ─ ─ ─ ─ ─ ┴─╮            │
                             ╰────┼ target phase ┼────────────╯
                                  ╰─ ─ ─ ─ ─ ─ ──╯             

   事件总线（EventBus）是一种集中式的事件管理模式，它一般定义一个管理所有事件的中心，事件来源方
   通过调用中心的发布（post/emit）方法向事件中心提交事件相关的数据（事件对象），事件中心则负责
   向关注相关事件的消费方派发事件对象。事件消费方通过向事件中心注册监听函数来获得处理相应事件的机会。
   事件中心也只可以设计一个事件源的注册机制，让事件发起方声明它可能产生的事件类型。事件总线与观察者
   编程模式非常相近，并且只要对观察者模式稍加修改，只需增加一个中心作为观察者与被观察者关系解耦。

   .. code:: javascript

      ┌─────────────┐      ┌─────────────┐
      │ Subscriber  ├───┐  │             │
      │             │   │  │  EventBus   │     ┌───────────┐
      │   onEvent()◄┼─┐ │  │             │     │           │
      └─────────────┘ │ │  │  post()◄────┼─────┼ Publisher │
            ...       │ │  │             │     │           │
      ┌─────────────┐ ├─┼──┼─ dispatch() │     └───────────┘
      │ Subscriber  │ │ │  │             │
      │             ┼─┼─┴──┼─►register() │
      │   onEvent()◄┼─┘    │             │
      └─────────────┘      └─────────────┘

   观察者模式包含观察者与被观察者，是一对多的关系处理。被观察对象维护一个观察者列表(直接耦合)，当其状态
   发生变化时，就逐一通知列表中的观察者。事件总线则是“发布-订阅”模式的实现，中间增加一层解耦，使得事件源
   （被观察方）与事件消费者（观察者）之间不存在直接的耦合关系。

   由于不同事件模型设计会有不同的代码实现风格，即便是同一种事件模型，不同人实现也会有不同的风格。
   以下是事件总线演示程序，只是实现的最基本的结构，还可以添加事件过滤、优先级等等功能：

   .. code:: javascript

      #!/usr/bin/env node

      class EventBus {
         /**
         * @type {{ [event: string] : [(event:Event)=>any] }}
         */
         static listeners = /**@type {any} */ (new Map())

         /**
         * Register an new type of event.
         * 
         * @param {string} event
         */
         static registerEvent(event) {
            if (EventBus.listeners[event]) return
            EventBus.listeners[event] = /**@type {any} */ ([])
         }

         /**
         * Fire an event.
         * 
         * @param {Event} event 
         */
         static post(event) {
            const listeners = EventBus.listeners[event.type]
            if (listeners == null) return
            listeners.forEach(onEvent=>onEvent(event))
         }

         /**
         * Register an event listener.
         * 
         * @param { string } event
         * @param { (event:Event)=>any } listener 
         */
         static register(event, listener) {
            if (EventBus.listeners[event] == null) return 
            EventBus.listeners[event].push(listener)
         }

         /**
         * Unregister an event listener.
         * 
         * @param {string} event 
         * @param {(event: Event)=>any} listener 
         */
         static unresiter(event, listener) {
            if (!EventBus.listeners[event]) return null
            let id = EventBus.listeners[event].findIndex(it => it===listener)
            return EventBus.listeners[event].splice(id, 1)
         }
      }

      class App {
         constructor() {
            EventBus.registerEvent("appStart")
            EventBus.registerEvent("appExit")
            console.log("App ctor.")
         }
         run() {
            EventBus.post(new Event("appStart"))
            console.log("App ran.")
         }
         dispose() {
            EventBus.post(new Event("appExit"))
            console.log("App disposed.")
         }
      }

      class Animal {
         constructor() {
            EventBus.register("appStart", this.onEvent)
            EventBus.register("appExit", this.onEvent)
         }

         onEvent(event) {
            console.log("An animal feels something happend: ", event.type)
         }
      }

      class Dog extends Animal {
         constructor(){
            super()
         }

         onEvent(event) {
            console.log("A dog feels something happend: ", event.type)
         }
      }

      class Cat extends Animal {
         constructor(){
            super()
         }

         runAway() {
            let ret = EventBus.unresiter("appExit", this.onEvent)
            console.log("A cat run away...", ret)
         }

         onEvent(event) {
            console.log("A cat feels something happend: ", event.type)
         }
      }

      let app = new App()
      let dog = new Dog()
      let cat = new Cat()
      app.run()
      cat.runAway()
      app.dispose()

   以下是事件总线模型演示程序的输出：

   .. code:: javascript

      App ctor.
      A dog feels something happend:  appStart
      A cat feels something happend:  appStart
      App ran.
      A cat run away... [ [Function: onEvent] ]
      A dog feels something happend:  appExit
      App disposed.


   在软件架构层面来看，事件处理在代码逻辑关系的处理上有着非常重要的作用，编程中是如此重要，以至于产生了
   事件驱动构架（Event-Driven Architecture）这样一种专门基于事件处理驱动的软件开发构架，相关参考有 
   Software Architecture Patterns 一书。事件处理，还有更接近用户的 UI 交互设计，其核心目标是在架构
   实现层面上，既要满足功能需求，又要提供一个用户体验更佳的软件应用。开源的 Blender 在这方面做的就非常好，
   从 2.7 到 4.3 版本，其用户界面交互上的改进可以说是巨大的进步。VS Code 本身也是 EDA 事件驱动架构，
   如果不能从架构的层面来看待 VS Code，那么就非常可能导致阅读源代码时不理解为何代码会这样写，即使能理解
   其逻辑关系，但也不一定能理解其用意。

   *  `VS Code 高性能的秘密 — Dispose Pattern <https://github.com/kaola-fed/blog/issues/282>`__
   *  `Memory management <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management>`__
   *  `The JavaScript language - Objects: the basics - Garbage collection <https://javascript.info/object-basics>`__
   *  `Garbage collection in V8, an illustrated guide <https://github.com/lrlna/smol-zines/blob/main/guides/garbage-collection-in-v8.md>`__
   *  `Chrome V8 原理讲解 <https://vscode.dev/github/v8blink/v8-JavaScript-Documents/tree/main/chap1-0829>`__
   *  `A Deep Dive Into V8 <https://blog.appsignal.com/2020/07/01/a-deep-dive-into-v8.html>`__
   *  `VS Code Source Code Analysis <https://vscode.dev/github/Bistard/vscode-source-code-analysis>`__

   VS Code 采用分散式事件管理，定义了 `Event<T>` 接口，实现这个接口就表示相应的类型拥有触发某种事件的能力。
   此接口方法接收（注册）一个 `listener(T)` 监听器函数，并返回一个 `Disposable`，通过它可以解除事件的监听。
   规范的 `Disposable` 类型作为动态对象的深销毁管理器，它实现 `IDisposable` 接口，所有实现 `dispose()` 
   接口方法的对象，都可以通过这个方法来销毁。当然，真正从内存中销毁是 JavaScript 引擎回内存收机制的工作，脚本
   只需要做到清除过期引用的对象，保证不会产生持久闭包内引用的自由变量、循环引用、Unreachable island、DOM 对象
   引用等等导致引擎无法释放对象的情况即可。还可以考虑使用 ES6 引入的 `WeakSet` 和 `WeakMap` 两种新的数据结构。

   注意： `Event<T>` 接口本身是一个函数，一个接口方法，用来注册一个监听函数的方法，注册过程也可以理解为订阅事件。
   VS Code 1.45 版本开始 `fire()` 方法需要传入一个参数，如果还想各旧版本一样使用无参数形式，就需要创建
   `new EventEmitter<void>` 实例。事件发射器对象的基本用法参考如下：

   .. code:: javascript

      // Valid in VS Code 1.44
      const emitter = new EventEmitter<number>();

      emitter.event((x: number) => console.log(x));

      // Calling fire with no argument was valid but resulted in the `x` above being `undefined`
      emitter.fire();

   `Extension API guidelines <https://github.com/microsoft/vscode/wiki/Extension-API-guidelines>`__
   指导文档中表示，VS Code 代码规范中的事件应该使用 `on[Did|Will]VerbSubject` 这样的格式，比如编辑器中文档更改事件
   `onDidChangeActiveEditor` 或者保存文件事件 `onWillSaveTextDocument`，自带注解功能，行为时机都解释得清清楚楚。
   通常 on 这个前缀用来表示“什么事件”的发生，这样的命名的方法通常有两种使用形式：注册事件的监听函数，或者事件发生时被调用
   的函数。这两种形式是完全不同的程序逻辑，一个是注册回调函数，而后一种是事件的响应处理函数，也就等价前者中被注册的回调函数。
   因此，搞清楚这类命名的符号使用形式是最基本的问题，显然 VS Code 源代码中使用的是前一种，它用于注册监听函数。

   例如，使用 `TextDocumentContentProvider` 可以在 VS Code 编辑器打开一个虚拟文档（只读），此文档内容供应器接口
   定义了一个事件 `onDidChange` 用于通知文档内容发生了变更。以下代码片段中使用匿名类实现了此接口，并在构造函数中注册了
   事件的监听函数，并且同时通过 `EventEmitter` 提供的方法来触发这个事件。插件加载时执行 `showInformationMessage()`，
   用户可以获得一个通知提示。以下作为演示，直接触发事件并且紧接着就将事件监听函数解除，在实际应用中不会有这样直接处理的情形：

   .. code:: javascript

      export interface TextDocumentContentProvider {
         onDidChange?: Event<Uri>;
         provideTextDocumentContent(uri: Uri, token: CancellationToken): ProviderResult<string>;
      }

      const myProvider = new class implements vscode.TextDocumentContentProvider {

         // emitter and its event
         onDidChangeEmitter = new vscode.EventEmitter<vscode.Uri>();
         onDidChange = this.onDidChangeEmitter.event;

         constructor() {
            let disposable = this.onDidChange((uri: vscode.Uri) => vscode.window.showInformationMessage(uri+""))
            this.onDidChangeEmitter.fire(vscode.Uri.parse("cowsay:abc"))
            disposable.dispose()
         }

         provideTextDocumentContent(uri: vscode.Uri): string {
            // simply invoke cowsay, use uri-path as text
            return cowsay.say({ text: uri.path });
         }
      };
      // vscode.workspace.registerTextDocumentContentProvider(myScheme, myProvider)

   可以在官方文档中的虚拟文档与示范项目中找到相关参考：

   *  `Virtual Documents <https://code.visualstudio.com/api/extension-guides/virtual-documents>`__
   *  `Virtual documentation sample <https://github.com/microsoft/vscode-extension-samples/blob/main/virtual-document-sample/README.md>`__

   阅读 VS Code 源代码有个小问题：由于代码较多，虽然很空间获取类型声明文件中提供的类型信息，但是想要获取类型定义
   所在的源文件信息较难，有时候候不得不查找整个源代码仓库来翻找相关的代码片段。比如，想找到 `Event<T>` 接口的实现
   代码就是个麻烦事。由于 LSP 智能提示也不能直接告知源代码位置信息，因此即使知道此接口方法实现了注册多个监听函数的功能，
   但是想要找到实现代码所在的位置需要花点时间。

   `EventEmitter<T>` 这个泛型是早期定义，此类型暴露了一 `fire()` 方法用于触发（派发）事件，该方法的主要
   逻辑就是将事件对象派发给所有已经注册的监听器。Node.js 本身也提供了同名的类型定义。在最新版本的源代码中，
   已经找不到 src/vs/base/common/eventEmitter.ts，使用事件模块中的 `Emitter<T>` 替代。但是类型声明
   文件中依然保持了原来的类型声明：

   .. code:: javascript

      export interface Event<T> {
         (listener: (e: T) => any, thisArgs?: any, disposables?: Disposable[]): Disposable;
      }

      // vscode-1.95.3/src/vscode-dts/vscode.d.ts
      export class EventEmitter<T> {

         /**
         * The event listeners can subscribe to.
         */
         event: Event<T>;

         /**
         * Notify all subscribers of the {@link EventEmitter.event event}. Failure
         * of one or more listener will not fail this function call.
         *
         * @param data The event object.
         */
         fire(data: T): void;

         /**
         * Dispose this object and free resources.
         */
         dispose(): void;
      }

   阅读 `Emitter<T>` 源代码可以知道，在获取 `Emmiter.event` 属性时，其实获取的就是一个事件注册函数，
   可以将其返回值看作是一个 `register()` 或者 `subscribe()` 函数。然后，需要关注相应事件一客户代码
   通过它来注册事件监听函数。在事件模块中，将所有 `Event<void>` 称为信号（signal），监听函数无输入参数。
   Void 表示无类型，也就某个数据或者对象是缺失类型信息的，当然无类型本身就是一种类型信息。某种程度上来说，
   void 类型像是与 any 类型相反。当一个函数没有返回值时，你通常会见到其返回值类型是 void。

   VS Code 事件模块中其它相关方法：
   

   *  `any<T>()` 重载函数接受给定的一个包含任意个事件的集合，其中一个触发时就返回这个事件。使用 `combinedDisposable()` 集中管理回调的解除。
   *  `once<T>()` 使用一个新事件包装原事件，触发一次即解除监听。
   *  `onceIf<T>()` 组合 `once()` 与 `filter()` 实现事件有条件地单次触发。
   *  `map<I, O>()` 通过映射将原事件 `Event<I>` 转换成 `Event<O>`，类似 `Array.prototype.map()` 方法。
   *  `forEach<I>()` 使用事件包装原事件之后再触发事件。
   *  `filter<T, U>()` 或者 `filter<T, R>()` 重载函数，在指定条件下触发的特定事件。
   *  `reduce<I, O>()` 通过 `map<I, O>()` 以及传入的 `merge()` 回调堆叠事件，返回一个 `Event<O>` 结果。
   *  `fromNodeEventEmitter<T>()` 对 Node.js 原生事件发射器进行包装，调用原生的 `on()` 与 `removeListener()`。
   *  `fromDOMEventEmitter<T>()` 对 DOM 事件发射器 `DOMEventEmitter` 进行包装。
   *  `fromPromise<T>()` 将 `Promise` 包装为事件。
   *  `toromise<T>()` 将事件转换为 `Promise` 异步对象。
   *  `signal<T>()` Given an event, returns the same event but typed as `Event<void>`.
   *  `debounce<T>()` 或者 `debounce<I, O>()` 重载函数，通过延时来重新包装原事件实现防抖，过滤误触事件的机会。
   *  `accumulate<T>()` 防抖并使用一个数组累积过滤掉的误触事件，默认 delay = 0。通过防抖事件的 `merge()` 回调进行累积。

   Dispose 模式主要用来资源管理，通过调用其接口方法来主动释放。因此 JavaScript 的内存分配通过脚本引擎的
   GC (garbage collector) 自动管理，大部分情况下它会自动执行内存回收动作，且对用户不可见。然而这种自动化
   管理方式却存在一个潜在的问题：JavaScript 开发者会错误的认为他们不需要再关心所用过的内存管理问题，从而会
   无意间书写一些不利于内存回收的代码。其实，还是开发者最清楚被分配的内存在未来是否需要使用，但是每次使用完一个
   对象后就手动的将其销毁，这样的做法不高效，也不可靠。正因为此，VS Code 使用 Dispose Pattern 来管理对象
   销毁。当扩展功能执行时，Extension Host 会在正确的时机调用 `dispose()` 方法销毁 VS Code 生成的对象，
   减少内存使用。比如说，方法 `setStatusBarMessage(value: string)` 返回一个 Disposable 对象，当调用
   其 `dispose()` 方法的时候会移除掉信息对象。

   Dispose Pattern 如何解决在脚本触发异常时不能正常执行问题？

   `Disposable` 机制属于 VS Code 架构中的基本实现模块，源代码位于 vs/base/common/lifecycle.ts。
   有了可销毁对象的基础定义，还需要有执行回收这些可销毁对象的类型。回收操作有两种基本形式，一是开发者主动
   调用 `dispose()` 方法清理不再需要的对象，另一种是 VS Code 提供的更方便的自动化清理。比如，在注册
   插件命令时， `registerCommand()` 方法返回的 Disposable 对象就可以直接推给插件上下方对象管理，
   ExtensionContext.subscriptions，插件管理器会在插件卸载、禁用时自动清理掉插件的引用以让脚本解释
   引擎有机会回收它所占据的内存。

   .. code:: javascript

      export interface IDisposable {
         dispose(): void;
      }


      export abstract class Disposable implements IDisposable {

         /**
         * A disposable that does nothing when it is disposed of.
         *
         * TODO: This should not be a static property.
         */
         static readonly None = Object.freeze<IDisposable>({ dispose() { } });

         protected readonly _store = new DisposableStore();

         constructor() {
            trackDisposable(this);
            setParentOfDisposable(this._store, this);
         }

         public dispose(): void {
            markAsDisposed(this);

            this._store.dispose();
         }

         /**
         * Adds `o` to the collection of disposables managed by this object.
         */
         protected _register<T extends IDisposable>(o: T): T {
            if ((o as unknown as Disposable) === this) {
               throw new Error('Cannot register a disposable on itself!');
            }
            return this._store.add(o);
         }
      }

      export function dispose<T extends IDisposable>(disposable: T): T;
      export function dispose<T extends IDisposable>(disposable: T | undefined): T | undefined;
      export function dispose<T extends IDisposable, A extends Iterable<T> = Iterable<T>>(disposables: A): A;
      export function dispose<T extends IDisposable>(disposables: Array<T>): Array<T>;
      export function dispose<T extends IDisposable>(disposables: ReadonlyArray<T>): ReadonlyArray<T>;
      export function dispose<T extends IDisposable>(arg: T | Iterable<T> | undefined): any {
         if (Iterable.is(arg)) {
            const errors: any[] = [];

            for (const d of arg) {
               if (d) {
                  try {
                     d.dispose();
                  } catch (e) {
                     errors.push(e);
                  }
               }
            }

            if (errors.length === 1) {
               throw errors[0];
            } else if (errors.length > 1) {
               throw new AggregateError(errors, 'Encountered errors while disposing of store');
            }

            return Array.isArray(arg) ? [] : arg;
         } else if (arg) {
            arg.dispose();
            return arg;
         }
      }
      // vscode-1.95.3\src\vscode-dts\vscode.d.ts

   	export class Disposable {

         static from(...disposableLikes: { dispose: () => any; }[]): Disposable;

         constructor(callOnDispose: () => any);

         dispose(): any;
      }

   Disposable 是一个非常重要和基础的概念的，它贯穿了整个 vscode 项目中，大部分对象都继承 Disposable，
   还有大量的实现 IDisposable 接口的对象。 Disposable 本身并没有做太多事情: 它是一个抽象类，提供了两个
   方法 `_register()` 和 `dispose()`， 可以通过调用后者来销毁注册的 IDispsable 对象。



Software Architectures
================================================================================

   软件架构设计并不等于编码，它是从更高一层面来分析软件构成，也就是分解软件结构。可以将软件分解为由技术架构、
   和业务架构构成的产品。技术上需要适配于业务需求的前提下，进行非功能性的、底层的选型与开发平台的搭建。
   软件架构分析师的工作基于对业务需求的完全掌握之上，只有完全理解了各个业务中心的规划，才能选择与之相适配
   的技术平台。

   MIT 16.355 System Engineering of Software-Intensive Systems
   `Garland and Shaw, An Introduction to Software Architecture <http://sunnyday.mit.edu/16.355/intro_softarch.pdf>`__

   `Ronin Engineer: Books <https://github.dev/vking34/books/>`__
   `Fundamentals of Software Architecture: An Engineering Approach <https://github.com/pkardas/notes/blob/master/books/fundamentals-of-architecture.md>`__
   Book by Mark Richards and Neal Ford

      | Preface: Invalidating Axioms
      | Chapter 1: Introduction
      | Chapter 2: Architectural thinking
      | Chapter 3: Modularity
      | Chapter 4: Architecture Characteristics Defined
      | Chapter 5: Identifying Architectural Characteristics
      | Chapter 6: Measuring and Governing Architecture Characteristics
      | Chapter 7: Scope of Architecture Characteristics
      | Chapter 8: Component-Based Thinking
      | Chapter 9: Foundations
      | Chapter 10: Layered Architecture Style
      | Chapter 11: Pipeline Architecture Style
      | Chapter 12: Microkernel Architecture Style
      | Chapter 13: Service-Based Architecture Style
      | Chapter 14: Event-Driven Architecture Style
      | Chapter 15: Space-Driven Architecture Style
      | Chapter 16: Orchestration-Driven Service-Oriented Architecture
      | Chapter 17: Microservices Architecture
      | Chapter 18: Choosing the Appropriate Architecture Style
      | Chapter 19: Architecture Decisions
      | Chapter 20: Analyzing Architecture Risk
      | Chapter 21: Diagramming and Presenting Architecture
      | Chapter 22: Making Teams Effective
      | Chapter 23: Negotiation and Leadership Skills
      | Chapter 24: Developing a Career Path
      | Self-Assessment Questions

      **Preface: Invalidating Axioms**

      Axiom - A statement or proposition which is regarded as being established, 
      accepted, or self-evidently true.

      Software architects (like mathematicians) also build theories atop axioms 
      (but the software world is softer than mathematics).

      Architects have an important responsibility to question assumptions and 
      axioms left over from previous eras. Each new era requires new practices, 
      tools, measurements, patterns, and a host of other changes.


      **Chapter 4: Architecture Characteristics Defined**

      Architects may collaborate on defining the domain or business requirements, 
      but one key responsibility entails defining, discovering, and analyzing all 
      the things the software must do that isn't directly related to the domain 
      functionality -- architectural characteristics.

      Operational Architecture Characteristics:

      *  **Availability** - how long the system will need to be available
      *  **Continuity** - disaster recovery capability
      *  **Performance** - stress testing, peak analysis
      *  **Recoverability** - how quickly is the system required to be on-line again?
      *  **Reliability** - if it fails, will it cost the company large sums of money?
      *  **Robustness** - ability to handle error and boundary conditions while running
      *  **Scalability** - ability for the system to perform and operate as the number of users/requests increases

      Structural Architecture Characteristics

      *  **Configurability** - ability for the end users to easily change aspects of the software's configuration
      *  **Extensibility** - how important it is to plug new pieces of functionality in
      *  **Installability** - ease of system installation on all necessary platforms
      *  **Localization** - support for the multiple languages, currencies, measures
      *  **Maintainability** - how easy it is to apply changes and enhance the system?
      *  **Portability** - does the system need to run on more than one platform?
      *  **Supportability** - what level of technical support is needed by the application?
      *  **Upgradeability** - ability to quickly upgrade from a previous version

      Cross-cutting Architecture Characteristics

      *  **Accessibility** - access to all users, including those with disabilities
      *  **Archivability** - will the data need to be deleted/archived?
      *  **Authentication** - security requirements to ensure users are who they say they are
      *  **Authorization** - security requirements to ensure users can access only certain functions within application
      *  **Legal** - what legislative constraints is the system operation in?
      *  **Privacy** - ability to hide transactions from internal company employees
      *  **Security** - does the data need to be encrypted in the database, what type of authentication is needed...?
      *  **Supportability** - what level of technical support is needed by the application?
      *  **Usability** - level of training required for users to achieve their goals with the app

      Any list of architecture characteristics will be an incomplete list. Any 
      software may invent important architectural characteristics based on unique 
      factors. Many of the terms are imprecise and ambiguous. No complete list of 
      standards exists.

      Applications can support only a few of the architecture characteristics we 
      have listed. Firstly, each of the supported characteristics requires design 
      effort. Secondly, each architecture characteristic often has an impact on 
      others. Architects rarely encounter the situation where they are able to 
      design a system and maximize every single architecture characteristics.

      Never shoot for the best architecture, but rather the least worst architecture.

      Too many architecture characteristics lead to generic solutions that are 
      trying to solve every business problem, and those architectures rarely work 
      because the design becomes unwieldy. Architecture design should be as iterative 
      as possible.


   `Software Architecture Fundamentals, 2nd Edition <https://www.bilibili.com/video/BV1pr4y1z7WM?p=9>`__
   一书对多种基础软件架构进行了分析，并对各项特性做了一个比较。

   以下图表综合评估了事件驱动架构在体系结构特征方面的整体能力。星级评定表示一颗星代表该架构特性支持较弱，
   而五颗星则表示它非常适用于该特定的架构特性。可以看到事件驱动架构作为一种分布式架构，它的复杂性非常高，
   敏捷度和成本还行，其它四项特性（伸缩、容错、性能、扩展）都非常好。与当下流行的微服务架构的差别主要在
   可测试性与性能差别上，微服务通过服务分解，让测试单个服务变得容易，但是性能上远不及事件驱动架构。

   .. code:: javascript

      Characteristic       Star rating
      -------------------- -----------
      Partitioning type    Technical
      Overall cost         $  $  $
      Number of Quanta     1 to many
      Agility              ⭐⭐⭐
      Depoyability         ⭐⭐⭐
      Elasticity           ⭐⭐⭐
      Evolutionary         ⭐⭐⭐⭐⭐
      Fault tolerance      ⭐⭐⭐⭐⭐
      Modularity           ⭐⭐⭐⭐
      Performance          ⭐⭐⭐⭐⭐
      Extensibility        ⭐⭐⭐⭐⭐
      Reliability          ⭐⭐⭐
      Scalability          ⭐⭐⭐⭐⭐
      Simplicity           ⭐
      Testability          ⭐⭐

      Figure 5-5. Architecture characteristics star ratings for event-driven architecture

   .. code:: javascript

      ┌─────────────────┐     ┌─────────────────┐    ┌─────────────────┐
      │                 │     │  ────────────►  │    │                 │
      │    Initiating   │     │  Event Channel  │    │ Event Processor │
      │       Event     ├─────┼► ┌───────────┐ ─│─►  │  ┌───────────┐  │
      │                 │     │  └───────────┘  │    │  │ Component │  │
      └─────────────────┘     │                 │    │  └───────────┘  │
                              │            Processing│  ┌───────────┐  │
                              │            Event│ ┌──┤  │ Component │  │
      ┌─────────────────┐     │                 │ │  │  └───────────┘  │
      │ Event Processor │     │                 │ │  └─────────────────┘
      │  ┌───────────┐  │     │  ────────────►  │ │  ┌─────────────────┐
      │  │ Component │  │◄────┼─ Event Channel ◄┼─┘  │ Event Processor │
      │  └───────────┘  │  ┌──┼─ ┌───────────┐ ─┼───►│  ┌───────────┐  │
      │  ┌───────────┐  │  │  │  └───────────┘  │    │  │ Component │  │
      │  │ Component │  │  │  │                 │    │  └───────────┘  │
      │  └───────────┘  │  │  │                 │    │  ┌───────────┐  │
      └─────────────────┘  │  │                 │    │  │ Component │  │
                           │  │                 │    │  └───────────┘  │
                           │  │                 │    └─────────────────┘
      ┌─────────────────┐  │  │                 │    ┌─────────────────┐
      │ Event Processor │  │  │  ────────────►  │    │ Event Processor │
      │  ┌───────────┐  │◄─┘  │  Event Channel  │    │  ┌───────────┐  │
      │  │ Component │  ├─────┼► ┌───────────┐ ─┼───►│  │ Component │  │
      │  └───────────┘ Processing└───────────┘  │    │  └───────────┘  │
      │  ┌───────────┐ Event  │                 │    │  ┌───────────┐  │
      │  │ Component │  │     │                 │    │  │ Component │  │
      │  └───────────┘  │     │                 │    │  └───────────┘  │
      └─────────────────┘     └─────────────────┘    └─────────────────┘
      Figure 14-2. Broker topology

   事件驱动架构能够解决复杂的非确定性工作流和高度反应和响应的系统等难题。此外，新技术、工具、框架和基于
   云服务使得事件驱动架构比以往更易访问和可行，并且许多团队正在转向事件驱动架构来解决他们复杂的业务问题。
   事件驱动架构基于异步处理，通过高度解耦的事件处理器来触发和响应系统中发生的事件。事件驱动架构包含有
   初始事件、事件通道、事件处理器（服务）。

   事件处理器（服务）是事件驱动架构中的主要部署单元。它可以按不同的粒度存在，从单一目的函数（例如订单验证）
   到一个庞大而复杂的流程（例如金融交易执行或结算）。事件处理器能够触发异步事件，并对被触发的异步事件作出响应。

   事件通道是传递事件的工具（如队列或主题），存储已触发的事件，并将事件派发给能够响应这些事件的服务。
   在大多数情况下，触发事件通过对点通道，使用队列或消息传递。而处理事件则通常使用“发布-订阅”模式通道，
   使用主题或通知服务。

   在大多数情况下，只有一个服务接收到初始事件，然后开始一系列处理该初始事件相关联的其他事件链条，但并非
   必须如此。例如，在线拍卖场景中，对物品进行竞标（即初始事件），可能会被 Bid Capture 服务和 Bid Tracker
   服务同时捕捉到。

   事件驱动架构还可以实现事件溯源（Event Sourcing），系统不再只存储当前状态，而是记录每个事件引起的状态变化。
   这允许再次追溯某一特定时间点的状态，并确保数据完整性。

   事件驱动系统和消息驱动系统之间存在微妙但重要的区别，首先它们处理的对象不同：事件 vs. 消息。
   事件涉及了状态变化或已经做了某些事情，例如“我刚刚下了订单”或“我刚刚提交了对某个物品的竞价”。
   消息是针对特定服务发出的命令或请求，例如“将此付款应用于此订单”、“将该物品运送到此地址”或
   “给我客户的电子邮件地址”。触发事件后，后续的响应服务有多少这是不清楚的。而消息通常指向单个服务，
   比如支付服务。事件和消息之间另一个区别在于对于事件通道所有权，事件发送者或者消息接收者拥有该通道。

   Fundamentals of Software Architecture 一书对各种架构的一个总体评价：

   ==== ======= ========== =========== =========== =========== ========== ====
        Agility Deployment Testibility Performance Scalability Simplicity Cost
   ---- ------- ---------- ----------- ----------- ----------- ---------- ----
   |LA| ✗       ✗          ✔           ✗           ✗           ✔          $
   |MK| ✔       ✔          ✔           ✗           ✗           ✔          $$
   |EA| ✔       ✔          ✗           ✔           ✔           ✗          $$$
   |PA| ✔       ✗          ✔           ✗           ✗           ✔          $
   |SD| ✔       ✔          ✗           ✔           ✔           ✗          $$$$
   |MS| ✔       ✔          ✔           ✗           ✔           ✗          $$$
   |SO| ✗       ✗          ✗           ✗           ✔           ✗          $$$$
   |SB| ✔       ✔          ✔           ✗           ✔           ✗          $$
   ==== ======= ========== =========== =========== =========== ========== ====

   .. |LA| replace:: Layered Architecture Style
   .. |MK| replace:: Microkernel Architecture Style
   .. |EA| replace:: Event-Driven Architecture Style
   .. |PA| replace:: Pipeline Architecture Style
   .. |SD| replace:: Space-Driven Architecture Style
   .. |MS| replace:: Microservices Architecture
   .. |SO| replace:: Orchestration-Driven Service-Oriented Architecture
   .. |SB| replace:: Service-Based Architecture Style

   `Space-based Architecture <https://everfind.github.io/courses/software-architecture/space-based-architecture.html>`__
   基于空间的架构模式也叫云架构模式，专用于解决可伸缩性和并发性问题，实现具有可变且不可预测的并发用户量的应用。

   Web 应用都有类似的结构，客户请求自浏览器到达 Web 服务器，然后是业务服务器，最后到达数据库服务器。
   随着用户负载的增加，系统的瓶颈开始出现。首先是在 Web 服务器层，然后是业务服务器层，最后是数据库服
   务器层。为了解决瓶颈问题，通常会先横向扩展 Web 服务器。因为扩展 Web 服务器相对容易且便宜，有时可
   以解决瓶颈问题。然而，在大多数高用户负载的情况下，横向扩展 Web 服务器层只会将瓶颈向下移动到业务
   服务器。扩展业务服务器可能比 Web 服务器更复杂、更昂贵，并且通常也只是将瓶颈转移到数据库服务器上，
   而数据库服务器的扩展更加困难和昂贵。即使您可以扩展数据库，最终得到的是三角形拓扑，三角形最宽的部分
   是 Web 服务器（最容易扩展），最小的部分是数据库（最难扩展）。

   .. code:: javascript

                     ..                
                    .  .               
                   .    .              
                  .      .             
                 .Database.            
                .          .           
               .            .          
              .              .         
             .                .        
            . Bussiness Service.       
           .                    .      
          .                      .     
         .                        .    
        .                          .   
       .          Web Server        .  
      ................................ 

   基于空间的架构模式通过消除中央数据库约束并改用可复制的内存数据网格来实现高可伸缩性，最大限度的减少
   限制应用程序扩展的因素。应用的数据保存在内存中，并在所有活动的处理单元（processing unit）间复制。
   随着用户负载的增减变动，处理单元可以动态启动和关闭，从而解决可变的可扩展性。因为没有中央数据库，所以
   消除了数据库瓶颈，给应用提供了近乎无限的可扩展性。基于空间的架构模式的基本结构，有两个主要组成部分：
   处理单元（processing unit）和虚拟化中间件（virtualized middleware）。

   虚拟化中间件负责处理内务和通信，管理请求、会话、数据复制、分布式请求处理和流程单元部署，是整个架构
   的控制器。虚拟化中间件中有四个主要架构组件：消息网格（messaging grid）、数据网格（data grid）、
   处理网格（processing grid）和部署管理器（deployment manager）。

   .. code:: javascript

      ┌──────────────────────────────┐  ┌──────────────────────────────┐
      │                              │  │                              │
      │       Processing Unit        │  │       Processing Unit        │
      │                              │  │                              │
      │┌──────┐   ┌──────┐   ┌──────┐│  │┌──────┐   ┌──────┐   ┌──────┐│
      ││module│ ↔ │module│ ↔ │module││  ││module│ ↔ │module│ ↔ │module││
      │└──────┘   └──────┘   └──────┘│  │└──────┘   └──────┘   └──────┘│
      │                          ↑↓  │  │                          ↑↓  │
      │           ┌────────────────┐ │  │           ┌────────────────┐ │
      │           │  ┌─┐┌─┐┌─┐┌─┐  │ │┅┅│           │  ┌─┐┌─┐┌─┐┌─┐  │ │
      │┌────────┐ │  └─┘└─┘└─┘└─┘  │ │  │┌────────┐ │  └─┘└─┘└─┘└─┘  │ │
      ││Database│↔│  ┌─┐┌─┐┌─┐┌─┐  │ │  ││Database│↔│  ┌─┐┌─┐┌─┐┌─┐  │ │
      │└────────┘ │  └─┘└─┘└─┘└─┘  │ │  │└────────┘ │  └─┘└─┘└─┘└─┘  │ │
      │           │ In-Memory Data │ │  │           │ In-Memory Data │ │
      │           └────────────────┘ │  │           └────────────────┘ │
      │                    ↑↓        │  │                    ↑↓        │
      │┌────────────────────────────┐│  │┌────────────────────────────┐│
      ││  Data-Replication Engine   ││  ││  Data-Replication Engine   ││
      │└────────────────────────────┘│  │└────────────────────────────┘│
      └──────────────────────────────┘  └──────────────────────────────┘
                       ↑↓                               ↑↓              
      ┌────────────────────────────────────────────────────────────────┐
      │                                                                │
      │                    Virtualized Middleware                      │
      │                                                                │
      │ ┌─────────────┐ ┌───────────┐ ┌─────────────┐ ┌──────────────┐ │
      │ │  Messaging  │ │           │ │ Processing  │ │  Deployment  │ │
      │ │    Grid     │ │ Data Grid │ │    Grid     │ │    Manager   │ │
      │ └─────────────┘ └───────────┘ └─────────────┘ └──────────────┘ │
      └────────────────────────────────────────────────────────────────┘


VS Code Extensions - HelloWorld
================================================================================

   以下是官方提供的一个简单无 Web UI 的插件（helloworld-sample）工程目录结构以及配置参考：
   https://vscode.dev/github/microsoft/vscode-extension-samples/blob/main/helloworld-sample

   .. code:: javascript

      .
      ├── .vscode
      │   ├── launch.json     // Config for launching and debugging the extension
      │   └── tasks.json      // Config for build task that compiles TypeScript
      ├── .gitignore          // Ignore build output and node_modules
      ├── README.md           // Readable description of your extension's functionality
      ├── src
      │   └── extension.ts    // Extension source code
      ├── package.json        // Extension manifest
      └── tsconfig.json       // TypeScript configuration

   由于插件功能简单，因此使用以下示意图就可以很好地解释它的逻辑：

   *  插件提供配置，告诉 VS Code 会提供什么功能（contributes, activationEvents ...）；
   *  VS Code 读取插件配置，并根据插件功能安排相应的 UI 元素，包括命令面板、菜单、视图容器、视图乖乖；
   *  VS Code 尝试激活插件，调用插件导出的 `activate(extensionContext)` 函数；
   *  插件在激活函数执行时初始化插件需要实现的功能，比如实现配置文件中设置的命令；
   *  用户通过 UI 调用插件功能，比如示例中的 extension.helloWorld 命令；
   *  VS Code 退出，调用插件导出的 `deactivate()` 方法让插件执行清理工作。

   .. code:: javascript

      ┌───────────────────┐              ┌─────────────────────┐                    
      │                   │              │                     │                    
      │      VS Code      │              │  ExtensionContext   │                    
      │                   ┼──────┐       │                     │                    
      │   Extension Host  │      │       │  │ subscriptions │  │                    
      │                   │      │       │  │    ......     │  │                    
      └───────────────────┘      │       │  │ ┌───────────┐ │  │  ┌────────────┐    
                                 │       │  │ └───────────┘◄┼──┼──┤ Disposable │◄──┐
                                 │       │  │ ┌───────────┐ │  │  └────────────┘   │
                                 │       │  │ └───────────┘ │  │                   │
                                 │       │  └───────────────┘  │                   │
                                 │       └─────────────────────┘                   │
                                 │       ┌──────────────────────────────────────┐  │
                                 │       │                    HelloWrold Plugin │  │
                                 ▼       ┌─┐                                    │  │
                        exports.activate │=│ activate(context)                  │  │
                                         │ │                                    │  │
                                         │ │      ┌───────────────────────┐     │  │
      ┌──────────────────┐               │ │      │ Plugin Implementation │     │  │
      │                  │               │ │      └─────────────────┬─────┘     │  │
      │   User Action    │               │ │                        │           │  │
      │                  │               │ │  vscode.commands       ▼           │  │
      └─────────┬────────┘               └─┘  registerCommand(ID, callback)─────┼──┘
                │                        │                     ▲                │   
                │                        └─────────────────────┼────────────────┘   
                │                                              │                    
                ▼                ┌─────────────────────────────┼───────────────┐    
      ┌──────────────────────┐   │ "contributes": {            │               │    
      │                      │   │    "commands": [    ┌─── COMMAND ID ─────┐  │    
      │       VS Code        │   │       {             │                    │  │    
      │                      │   │          "command": "extension.helloWorld", │    
      │   Command Palette  ◄─┼───┼───────── "title": "Hello World"             │    
      │                      │   │       }                                     │    
      └──────────────────────┘   │    ]                                        │    
                                 │ },                             package.json │    
                                 └─────────────────────────────────────────────┘    

   src/extension.ts

   .. code:: javascript

      import * as vscode from 'vscode';

      export function activate(context: vscode.ExtensionContext) {

         console.log('Diagnostic information: Woh, "helloworld-sample" is now active!');

         // The command has been defined in the package.json file
         // Now provide the implementation of the command with registerCommand
         // The commandId parameter must match the command field in package.json
         const disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
            // The code you place here will be executed every time your command is executed
            // Display a message box to the user
            vscode.window.showInformationMessage('Hello World!');
         });

         context.subscriptions.push(disposable);
      }

   以上插件实现代码经过编译打包后，产生以下代码格式输出：

   .. code:: javascript

      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.activate = void 0;

      const vscode = require("vscode");

      function activate(context) {
         // ...
      }
      exports.activate = activate;
      //# sourceMappingURL=extension.js.map


   package.json

   .. code:: javascript

      {
         "name": "helloworld-sample",
         "displayName": "helloworld-sample",
         "description": "HelloWorld example for VS Code",
         "version": "0.0.1",
         "publisher": "vscode-samples",
         "repository": "https://github.com/Microsoft/vscode-extension-samples/helloworld-sample",
         "engines": {
            "vscode": "^1.74.0"
         },
         "categories": [
            "Other"
         ],
         "activationEvents": [],
         "main": "./out/extension.js",
         "contributes": {
            "commands": [
               {
                  "command": "extension.helloWorld",
                  "title": "Hello World"
               }
            ]
         },
         "scripts": {
            "vscode:prepublish": "npm run compile",
            "compile": "tsc -p ./",
            "lint": "eslint",
            "watch": "tsc -watch -p ./"
         },
         "devDependencies": {
            "@eslint/js": "^9.13.0",
            "@stylistic/eslint-plugin": "^2.9.0",
            "@types/node": "^20",
            "@types/vscode": "^1.73.0",
            "eslint": "^9.13.0",
            "typescript": "^5.6.2",
            "typescript-eslint": "^8.11.0"
         }
      }

   tsconfig.json

   .. code:: javascript

      {
         "compilerOptions": {
            "module": "commonjs",
            "target": "es2020",
            "lib": ["es2020"],
            "outDir": "out",
            "sourceMap": true,
            "strict": true,
            "rootDir": "src"
         },
         "exclude": ["node_modules", ".vscode-test"]
      }

   launch.json

   .. code:: javascript

      // A launch configuration that compiles the extension and then opens it inside a new window
      // Use IntelliSense to learn about possible attributes.
      // Hover to view descriptions of existing attributes.
      // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
      {
         "version": "0.2.0",
         "configurations": [{
               "name": "Run Extension",
               "type": "extensionHost",
               "request": "launch",
               "runtimeExecutable": "${execPath}",
               "args": [
                  "--extensionDevelopmentPath=${workspaceFolder}"
               ],
               "outFiles": [
                  "${workspaceFolder}/out/**/*.js"
               ],
               "preLaunchTask": "npm: watch"
            }
         ]
      }

   tasks.json

   .. code:: javascript

      // See https://go.microsoft.com/fwlink/?LinkId=733558
      // for the documentation about the tasks.json format
      {
         "version": "2.0.0",
         "tasks": [
            {
               "type": "npm",
               "script": "watch",
               "problemMatcher": "$tsc-watch",
               "isBackground": true,
               "presentation": {
                  "reveal": "never"
               },
               "group": {
                  "kind": "build",
                  "isDefault": true
               }
            }
         ]
      }


VS Code Extensions - AsciiFlow
================================================================================

   https://github.com/Jeangowhy/asciiflow/releases

   AsciiFlow 本身作为一个基于 Web 渲染图形的一个脚本应用，其本身的结构并不需要做任何修改，只需要
   按照 VS Code 的插件机制，以及利用 `vscode.WebviewPanel` 提供的网页渲染能力，加载原有的脚本
   和页面就可以创建一个集成的 AsciiFlow 插件。

   使用命令 Developer: Open Webview Developer Tools 可以打开开发者工具，用于调试 Webview
   渲染的页面。在开发者工具视图中，可以看到整个 VS Code 程序的页面代码，包含基于 `<iframe>` 渲染
   的插件页面。

   目前 VS Code 插件集市上的 AsciiFlow 插件已经是 2020 年更新过的旧版本。新版本也可以自己手动更新，
   只需要将以下官方代码仓库上的资源下载到插件所在目录：

   *  下载主程序（自己不用再打包）： https://asciiflow.com/bundle.js
   *  下载静态页面： https://vscode.dev/github/lewish/asciiflow/blob/main/client/index.html
   *  下载图像资源： https://vscode.dev/github/lewish/asciiflow/blob/main/client/public
   *  下载插件实现代码（后面提供修改版本）： https://github.com/lewish/asciiflow/tree/main/vscode/extension.ts
   *  按后面提供的 Webview 资源加载思路修改 bundle.js 中的资源（以上三个图像）路径。

   在直接修改安装好的插件代码过程中发现，脚本资源可以正常处理并正常加载，但是图像则不正常，在开发者
   Developer Tools 工具界面（Elements）中显示的依然是未处理过的路径，从早到晚悬停时提示的是一个
   vscode-webview:/ 地址。并且发现修改过的 HTML 页面数据未如实渲染，猜测可能是有缓存问题。

   但通过创建新插件测试发现，原来 AsciiFlow 打包输出的 bundle.js 代码已经包含了 HTML 页面内容。
   也就是说，插件通过加载（读取）静态 index.html 内容后，再运行 bundle.js 脚本，又经过第二次的
   HTML 内容修改，React 框架组件行为。因此直接修改 index.html 内容总是会被 React 组件内容替换。
   为了避免修改源代码，这里玩一个小花招，通过在 index.html 设置一个 `VSCPATH` 全局变量来传递资源
   路径，让 bundle.js 读取这些路径以正确地加载资源。

   .. code:: javascript

      VSCPATH = "";

   修改完成后，可以执行命令当作本地插件安装使用：Install Extension from Location...
   当然，以本地插件的方式也可以开发插件，由于是本地安装，可以在 VS Code 中取随时安装或卸载。
   插件文件不会被删除，可以随时修改插件代码以迭代开发。

   本地安装插件可以一边测试一边更新，只需要执行 Restart Extension Host 或者 Reload Window
   命令刷新插件。测试完成后就只可以卸载，有两种方式卸载本地插件：一是在插件面板中使用 @enabled 
   过滤出当前启用的插件，翻看列表或者输入插件名称，在插件配置页面进行卸载。另一种方式是使用命令面板，
   在插件注册的命令右侧有一个齿轮图标，点击它打开命令的热键配置页面，并且点击右侧的扩展来源（Source）
   打开插件配置页面进行卸载。

   以下是根据 AsciiFlow 官方代码仓库的 VS Code 插件（vscode/extension.ts）代码手工修改，
   没有使用 Node 构建过程，只是直接借用了官方网站上提供的 bundle.js 主程序。

   通过学习 HelloWorld Plugin，可以掌握最基本的 VS Code 扩展的结构。接下来，将重点放在基于
   Webview 实现的全定制编辑器界面的处理，也就是 `WebviewPanel` 的使用。此处的 Panel 是指
   整个 Web 页岩铺满的编辑器界面，而非 VS Code 中的各种面板，比如 output panel 等等。也就是
   了解决 `Asciiflow2Panel` 这个类是如何通过包装 `WebviewPanel` 来提供一个 Web 定制界面。

   说实话，以下插件的代码写得真不敢恭维，其中的 `currentPanel` 和 `_panel` 简直就闹心，很少见
   有这么令人困扰的代码。这两个虽然都叫 panel，但其实它们是不一样的 panel。或者说我家门前有两株树，
   一株是枣树，还有一株也是枣树。如果作者有时间的话，真应该好好写一优化一下代码的结构。以下简化示意
   通过简化代码及配置后展示其内部主要逻辑关系：

   .. code:: javascript

      ┌──────────────────────────────────────────────────┐    package.json                       
      │                                                  │  ┌───────────────────────────────────┐
      │                     VS Code                      │  │ "engines": {                      │
      │                                                  │  │  "vscode": "^1.38.0"              │
      │ ┌──────────────────────────────────────────────┐ │  │ },                                │
      │ │                                              │ │  │ "preview": true,                  │
      │ │        Command Palette (Ctrl+Shift+P)        │ │  │                                   │
      │ │                                              │ │  │ "activationEvents": [             │
      │ │                    Asciiflow: Open Asciiflow │ │  │   "onWebviewPanel:asciiflow"      │
      │ │                            ↑  ↑              │ │  │  ],                               │
      │ └────────────────────────────┼──┼──────────────┘ │  │                                   │
      │                              │  │                │  │ "main": "./out/extension.js",     │
      │  ┌────────────────────────┐  │  │                │  │ "browser": "./out/extension.js",  │
      │  │                        │  │  │                │  │ "contributes": {                  │
      │  │ VS Code Extension Host │  │  │                │  │  "commands": [                    │
      │  │                        │  │  │                │  │   {                               │
      │  └───────────────┬────────┘  │  └────────────────┼──┼─── "title": "Open Asciiflow",     │
      │                  │           └───────────────────┼──┼─── "category": "Asciiflow"        │
      │                  │          ┌────────────────────┼──┼─── "command": "ascii_flow.open",  │
      │                  │          │                    │  │   }                               │
      └──────────────────┼──────────┼────────────────────┘  │  ]                                │
        activate(context)│          │ context.extensionPath │ },                                │
      ┌──────────────────┼──────────┼───────────────────┐ │ └───────────────────────────────────┘
      │                  ↓          │                   │ │                                      
      │ vscode.window               ↓                   │ │    Asciiflow2Panel                   
      │ .registerCommand("asciiflow.open", callback)────┼─┤ ┌───────────────────────────────────┐
      │                                                 │ │ │                                   │
      │ vscode.window                                   │ │ │  static currentPanel = undefined  │
      │ .registerWebviewPanelSerializer("asciiflow2", { │ │ │                                   │
      │    async deserializeWebviewPanel(               │ │ │  constructor(panel, path)←───┬─┐  │
      │      webviewPanel,                              │ │ │                              │ │  │
      │      state                                      │ │ │     _panel = panel;          │ │  │
      │    ) {                                          │ │ │                              │ │  │
      │    Asciiflow2Panel.revive(webviewPanel, path);  │ └─┼→ static createOrShow(path)───┘ │  │
      │    },                                    │      │   │                                │  │
      │ });                                      └──────┼───┼→ static revive(panel, path) ───┘  │
      │                                                 │   │                                   │
      └─────────────────────────────────────────────────┘   │  _getHtmlForWebview()             │
                                                            │     _panel.html = rawhtml ←────┐  │
        index.html                                          │                                │  │
      ┌───────────────────────────────────────┐             │  dispose()                     │  │
      │   <!DOCTYPE html>                     │             │      _panel.dispose()          │  │
      │   <html>                              │             │                                │  │
      │     <head>                            │             └────────────────────────────────┼──┘
      │       <meta charset="UTF-8" />        │         ┌────────────────────────────────────┼──┐
      │                                       │         │                                    │  │
      │       <title>ASCIIFlow</title>        │         │ webview.asWebviewUri(uri) ─────────┘  │
      │     </head>                           │         │ vscode.Uri.file(uri)                  │
      │     <body>                            │         │ path.resolve(extensionPath)+"/app.js" │
      │       <div id="root"></div>           │         │                     ↑                 │
      │       <script src="/app.js"></script> │         └─────────────────────┼─────────────────┘
      │   </body>           ──────────────────┼───────────────────────────────┘                  
      │   </html>                             │  fs.readFileSync()       remap local resources   
      └───────────────────────────────────────┘                                                  


   .. code:: javascript

      //@ts-check
      "use strict";
      var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
         return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
         });
      };
      Object.defineProperty(exports, "__esModule", { value: true });

      const path = require("path");      // import * as path from "path";
      const vscode = require("vscode");  // import * as vscode from "vscode";
      const fs = require("fs");          // import * as fs from "fs";

      function activate(context) {
         context.subscriptions.push(
            vscode.commands.registerCommand("asciiflow.open", () => {
               // console.log(`Got extensionPath: ${context.extensionPath}`);
               // vscode.window.showInformationMessage(context.extensionPath)
               Asciiflow2Panel.createOrShow(context.extensionPath);
            })
         );

         if (vscode.window.registerWebviewPanelSerializer) {
            // Make sure we register a serializer in activation event
            vscode.window.registerWebviewPanelSerializer("asciiflow2", {
               async deserializeWebviewPanel(
               webviewPanel,
               state
               ) {
               console.log(`Got state: ${state}`);
               Asciiflow2Panel.revive(webviewPanel, context.extensionPath);
               },
            });
         }
      }

      class Asciiflow2Panel {


         static createOrShow( ) {
            const column = vscode.window.activeTextEditor
               ? vscode.window.activeTextEditor.viewColumn
               : undefined;

            // If we already have a panel, show it.
            if (Asciiflow2Panel.currentPanel) {
               Asciiflow2Panel.currentPanel._panel.reveal(column);
               return;    
            }

            // Otherwise, create a new panel.
            const panel = vscode.window.createWebviewPanel(
               Asciiflow2Panel.viewType,
               "ASCIIFlow Infinity",
               column || vscode.ViewColumn.Two,
               {
               enableScripts: true,
               retainContextWhenHidden: true,
               }
            );

            Asciiflow2Panel.currentPanel = new Asciiflow2Panel(panel, extensionPath);
         }

         static revive(panel, extensionPath) {
            Asciiflow2Panel.currentPanel = new Asciiflow2Panel(panel, extensionPath);
         }

         constructor(panel, path) {

            this._disposables = [];

            /**
            * @type vscode.WebviewPanel
            */
            this._panel = panel;

            /**
            * @type string
            */
            this._resourcesPath = path.join(extensionPath, "asciiflow2");

            this._panel.webview.html = this._getHtmlForWebview();

            // Listen for when the panel is disposed
            // This happens when the user closes the panel or when the panel is closed programatically
            this._panel.onDidDispose(() => this.dispose(), null, this._disposables);
         }

         _getHtmlForWebview() {
            let html = fs.readFileSync(
               path.join(this._resourcesPath, "index.html"),
               "utf-8"
            );

            // fix path
            const VSCPATH = this._panel.webview.asWebviewUri(vscode.Uri.file(path.resolve(this._resourcesPath)))+""
            // const unsolve = this._panel.webview.asWebviewUri(vscode.Uri.file(this._resourcesPath))+""
            html = html.replace(/(VSCPATH = ")(";)/g, (m, $1, $2) => $1 + VSCPATH + $2)
               .replace(
               /(<link.+?href="|<script.+?src="|<img.+?src="|url\(")(.+?)"/g,
               (m, $1, $2) => {
               const uri = vscode.Uri.file(path.resolve(this._resourcesPath, $2))
               // const uvr = vscode.Uri.file(path.resolve(this._resourcesPath, $2))
               //             .with({ scheme: "vscode-resource" })
               // console.info({m, a1:$1, a2:$2, path: uri+"", VSCPATH, unsolve, uvr, wuri: this._panel.webview.asWebviewUri(uri)+"" })
               return $1 + this._panel.webview.asWebviewUri(uri) + '"'
               }
            );

            vscode.window.showInformationMessage(html)
            return html;
         }

         dispose() {
            Asciiflow2Panel.currentPanel = undefined;

            // Clean up our resources
            this._panel.dispose();

            while (this._disposables.length) {
               const x = this._disposables.pop();
               if (x) {
                  x.dispose();
               }
            }
         }
      }

      /**
      * @type Asciiflow2Panel | undefined
      */
      Asciiflow2Panel.currentPanel = undefined;

      //   static viewType = "asciiflow2";
      Asciiflow2Panel.viewType = "asciiflow2";


      exports.activate = activate;


VS Code Webview Usages
================================================================================

   -  `Webview API <https://code.visualstudio.com/api/extension-guides/webview>`__
   -  `Webview View API Sample <https://vscode.dev/github/microsoft/vscode-extension-samples/tree/main/webview-view-sample>`__
   -  `When clause contexts <https://code.visualstudio.com/api/references/when-clause-contexts>`__

   VS Code 1.84 开始引入浮动编辑器窗口功能，Floating editor windows，用户可以随时将编辑器
   窗口移动到其它或者新建窗口中。另外，Monaco 编辑器本身支持悬停窗口（Hover Widgets），比如用户
   在查看 Markdown 文档时，鼠标放在图像链接中就会显示图片预览面板。

   .. figure:: https://code.visualstudio.com/assets/api/ux-guidelines/examples/architecture-containers.png

      The VS Code interface can roughly be divided into two main concepts: 
      containers and items. Generally speaking, containers can be considered 
      the larger sections of the VS Code interface that render one or more items.

   代码片段：创建命令行面板并运行命令：

   .. code:: javascript

      // https://github.dev/sijakret/vs-code-custom-hover-extension
      // https://vscode.dev/github/sijakret/vs-code-custom-hover-extension
      vscode.window.createTerminal("my terminal panel");
      terminal.sendText(some_commands);
      terminal.show();

   悬停提示信息面板的实现可以参考 Ultimate Hover 插件。此插件没有配置任何命令，只是随着 VS Code
   启动而启动，用户在编辑代码文件时，一些符合特征的字符串会触发悬窗提示。比如 "#282828" 会显示一个深
   黑色块。此功能使用的是智能提示 IntelliSense API，函数原型参考如下，关键是实现 `HoverProvider`
   以及返回相应的 `ProviderResult<T>`。VS Code 提供了良好的 Markdown 文档支持，包括智能提示
   内容展示也都可以使用 `vscode.MarkdownString()` 创建。返回的 `Hover` 既可以同步返回，也可以
   是异步返回：

   .. code:: javascript

      let a: HoverProvider = {
         provideHover(doc, pos, token): ProviderResult<Hover> {
            return new Hover('Hello World');
         }
      }
      let b: HoverProvider = {
         provideHover(doc, pos, token): ProviderResult<Hover> {
            return new Promise(resolve => {
               resolve(new Hover('Hello World'));
            });
         }
      }
      let c: HoverProvider = {
         provideHover(doc, pos, token): ProviderResult<Hover> {
            return; // undefined
         }
      }
      let d: HoverProvider = {
         provideHover(doc, pos, token): ProviderResult<Hover> {
            const hoverContent = new vscode.MarkdownString();
            const colorBytes = base64Encode content ...
            hoverContent.appendMarkdown(`<img src="data:image/png;base64,${colorBytes}" />`);
            hoverContent.supportHtml = true;
            return vscode.Hover(hoverContent);
         }
      }

   .. code:: javascript

      declare module 'vscode' {
      export namespace languages {

         export function registerHoverProvider(selector: DocumentSelector, provider: HoverProvider): Disposable;

         /**
         * The hover provider interface defines the contract between extensions and
         * the [hover](https://code.visualstudio.com/docs/editor/intellisense)-feature.
         */
         export interface HoverProvider {

            /**
            * Provide a hover for the given position and document. Multiple hovers at the same
            * position will be merged by the editor. A hover can have a range which defaults
            * to the word range at the position when omitted.
            *
            * @param document The document in which the command was invoked.
            * @param position The position at which the command was invoked.
            * @param token A cancellation token.
            * @returns A hover or a thenable that resolves to such. The lack of a result can be
            * signaled by returning `undefined` or `null`.
            */
            provideHover(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<Hover>;
         }

      }
      }

   一些插件意在被其他插件调用（vscode.extension.getExtension(extensionName).exports），
   因此会在激活后向外部提供一些 API。如果这些插件都在同一环境（都是 UI 插件或者都是工作区插件时）
   下工作不会出什么问题，但是一个 UI 插件和一个工作区插件相互间的调用就会出问题，因为它们运行在
   不同环境，工作区插件有可能是远程主机上运行。使用私有命令暴露 API 功能可以避免一些问题，但是，
   所有传入的对象参数都会被字符串化（JSON.stringify），因此这些对象不可以有循环引用，这会导致
   接受方只收到一个 object 类型字符串化的结果。

   就像剪贴板 Clipboard API，Webview API 也总是运行在本地环境，即使是工作区插件调用的：

   .. code:: javascript

      import * as vscode from 'vscode';

      export function activate(context: vscode.ExtensionContext) {
         context.subscriptions.push(vscode.commands.registerCommand('myExtension.clipboardIt', async () => {
            // Read from clipboard
            const text = await vscode.env.clipboard.readText();

            // Write to clipboard
            await vscode.env.clipboard.writeText(`It looks like you're copying "${text}". Would you like help?`);
         }));
      }

   大部分基于 Webview 的插件都可以正常工作，但是还有些注意事项，需要理解 VS Code 的远程工作架构设计中，
   包含了本地的 UI 进程和远程的工作空间（Remote Workspace）。只有理解了架构才能清楚如何使用 Webview，
   后面将演示如何实现 Webview 的远程访问。为了调试 Webview 内容，可以通过开发者调试工具来检查页面内容、
   控制台消息。使用命令面板打开 Developer: Toggle Developer Tools。

   Webviews 的一般使用方式有两种：

   *  使用 `vscode.createWebviewPanel()` 创建一个 Webview Panel 用于加载 HTML 内容。
      此种方式下创建的 HTML 页面将作为区别与 VS Code 编辑器的界面（distinct editors）。
      也就是说，开发者需要（可以）完全定制插件 UI 界面（custom editor）。需要根据功能需要
      将插件提供的 API 勾住 VS Code 中的事件（hook into editor events）。比如实现文件
      编辑、保存等等。

   *  另一种是将 `vscode.WebviewView` 渲染为 VS Code 主界面中的 侧栏面板（sidebars）或者
      一般的面板（panel areas）。和 `WebviewPanel` 类型一样都需要使用 `Webview`，只是它们
      嵌入的 HTML 页面呈现的方式有所不同。一般作为 VS Code 控件来使用 `WebviewView`，可以将
      它看作是一个可以容纳 `Webview` 内容的视图。作为 UI 控件，它拥有 `ViewBadge` 属性来控制
      角标的显示状态，还有标题等等。

   Webview 支持的音频格式：Wav Mp3 Ogg Flac，支持的视频格式： H.264 VP8。

   Webview 只能渲染写入 `webview.html` 属性中的 HTML 内容，不能直接读取 HTML 页面文件。

   Webview 页面内容有两种设置方式，直接写 `html` 属性，或者使用 `WebviewViewProvider` 供应类接口。
   在制定 VS Code 侧栏视图时需要使用实现了供应类接口的对象来提供视图内容，此种方式下，插件开发者不能直接
   实例化 `WebviewView`。而是通过实现 `WebviewViewProvider` 接口，在其 `resolveWebviewView()`
   方法中接收由插件宿主创建的实例。通过向注册一个 `WebviewViewProvider` 接口实现类型，此接口类型的
   `resolveWebviewView()` 方法会在 Webview 渲染时被调用，并接收到一个 webview 实例。需要在此接口
   方法中处理好 HTML 内容供应。参考官方示范工程 [webview view sample extension]。注册方法中的视图
   类型（viewType）与 package.json 配置的 contributes.views 拥有相同的标识，VS Code 才会在对应
   的侧栏面板中使用所提供的内容。

   .. code:: javascript

      vscode.window.registerWebviewViewProvider(viewType, provider));

   参考官方提供的实例演示： `Webview View Sample <https://vscode.dev/github/microsoft/vscode-extension-samples/blob/main/webview-view-sample/README.md>`__

   还有就是不能直接使用 file:// 本地协议，需要通过 `Webview.asWebviewUri()` 将资源地址转换
   为特殊的 vscode-resource: 协议形式。将资源安全访问权限交给 VS Code 处理，资源地址会添加
   类似 vscode-cdn.net 映射地址。因此，本地图像、样式等行数据资源就需要经过地址转换后才能使用。
   测试发现，使用 `.with({ scheme: "vscode-resource" })` 生成的协议头并不能访问到资源，
   只能是以下这种 `asWebviewUri()` 生成的映射地址：

      https://file%2B.vscode-resource.vscode-cdn.net/c%3A/asciiflow2/public/logo_full.svg

   WebviewPanel 实例的构造函数可以设置参数：

   .. code:: javascript

         createWebviewPanel(viewType, title, 
                           showOptions?: ViewColumn |{viewColumn, preserveFocus},
                           options?: WebviewPanelOptions & WebviewOptions)

   Webview 页面可以加载脚本文件，并且脚本只能使用浏览器环境，不能直接访问 VS Code APIs，只能通过
   `acquireVsCodeApi` 方法间接访问。默认设置禁止运行脚本，可以在实例化时，通过设置参数启用脚本功能：
   `enableScripts: true`。创建实例时，需要指定一个 ID（`viewType`）来标识每个 Webview Panel。
   标题（title）对应的是 Webview 页面的标题，在页面激活时，会作用 VS Code 标题的一部分显示出来。
   另外，VS Code 支持编辑器的分栏显示，所以通过 `viewColumn` 指定新页面呈现的栏位。编辑器中移动
   Webview 页面时，会触发 `onDidChangeViewState` 事件，使用 `viewColumn` 属性比较
   `vscode.ViewColumn` 枚举值就可以知道它被移动到哪一栏。


   .. code:: javascript

      import * as path from 'path';
      import * as vscode from 'vscode';

      export function activate(context: vscode.ExtensionContext) {
      context.subscriptions.push(
         vscode.commands.registerCommand('catCoding.start', () => {
            const panel = vscode.window.createWebviewPanel(
            'catCoding',
            'Cat Coding',
            vscode.ViewColumn.One,
            {
               // Enable scripts in the webview
               enableScripts: true
            }
            );

            panel.webview.html = getWebviewContent();
         })
      );
      }

      function getWebviewContent() {
         return `<!DOCTYPE html>
         <html lang="en">
         <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cat Coding</title>
         </head>
         <body>
            <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
            <h1 id="lines-of-code-counter">0</h1>

            <script>
               const counter = document.getElementById('lines-of-code-counter');

               let count = 0;
               setInterval(() => {
                     counter.textContent = count++;
               }, 100);
            </script>
         </body>
         </html>`;
      }


   Webview panel 实例化后，对应的是一个嵌入 VS Code 主界面的 `<iframe>` 页面，这个嵌入页面
   页面在未激活的情况下、VS Code 编辑器打开其它文件时会隐藏起来，再次激活标签时才显示出来，并不会
   销毁，可以使用 `visible` 属性检测当前的可见性。但是其 HTML Context 会在隐藏时销毁。通过配置
   使用 `retainContextWhenHidden` 选项可以强制保留 HTML 上下文，但这会消耗大量用于渲染的内存。
   另一个更轻量化的方案是在 HTML 上下文中使用 `getState()` 和 `setState()` 持久化的状态数据。

   .. code:: javascript

      // Inside a webview script
      const vscode = acquireVsCodeApi();

      // Check if we have an old state to restore from
      const previousState = vscode.getState();
      let count = previousState ? previousState.count : 0;
      document.body.textContent = count;

      setInterval(() => {
         document.body.textContent = count++;
         // Update the saved state
         vscode.setState({ count });
      }, 100);

   持久化 Webview 数据的另一种访问方式是实现 `WebviewPanelSerializer` 并实例化、注册它。
   必需在插件激活是调用 `registerWebviewPanelSerializer` 方法进行注册。当月 VS Code 重启
   并打开 WebviewPanel 就会将串行化持久数据读取出来并传递给注册的回调函数，这样就可以在回调函数
   中依据状态数据来恢复 WebviewPanel 的工作状态。状态数据是 Webview 内使用 `setState()` 方法
   保存的 JSON blob 对象。在未有效注册数据串行化接口实例之前，状态数据会在 WebviewPanel 关闭时
   丢弃。只有注册了串行化对象，并且在 `package.json` 配置 `onWebviewPanel` 激活事件，并且后面
   还需要附加和插件中注册的 `viewType` 一致的标识才生效。注意，Restart Extension Host 或者直接
   Ctrl+W (View: Close Editor) 关闭页面时无法恢复状态数据。但是通过菜单退出、点击窗口关闭按钮，
   或者在命令面板执行 Reload Window，甚至是在开发者工具中刷新页面者可以恢复。插件成功注册串行接口
   就会拥有两条执行路径，有数据恢复时执行 `registerWebviewPanelSerializer()` 注册的回调函数，
   否则执行 `registerCommand()` 注册的命令。

   当然，如果不希望用户关闭编辑器时丢失数据，使用 Web API，比如 `localStorage` 本地数据持久化对象。
   如果脚本代码需要使用这些数据，就可以结合消息机制来传递它们。虽然实现 `WebviewPanelSerializer`
   接口的数据恢复机制有点麻烦，但是它有一个好处：VS Code 重启时会自动打开上次的插件界面。

   .. code:: javascript

      "activationEvents": [
         ...,
         "onWebviewPanel:catCoding"
      ]

   .. code:: javascript

      export function activate(context: vscode.ExtensionContext) {
         // Normal setup...

         // And make sure we register a serializer for our webview type
         vscode.window.registerWebviewPanelSerializer('catCoding', new CatCodingSerializer());
      }

      class CatCodingSerializer implements vscode.WebviewPanelSerializer {
         async deserializeWebviewPanel(webviewPanel: vscode.WebviewPanel, state: any) {
            // `state` is the state persisted using `setState` inside the webview
            console.log(`Got state: ${state}`);

            // Restore the content of our webview.
            //
            // Make sure we hold on to the `webviewPanel` passed in here and
            // also restore any event listeners we need on it.
            webviewPanel.webview.html = getWebviewContent();
         }
      }

   WebviewPanel 的生命周期归属于创建它的插件，使用 `reveal()` 方法可以手动将页面激活。可以手动
   调用 `dispose()` 方法销毁它。或者侦听 `onDidDispose` 事件，在其销毁后做一些清理工作。

   .. code:: javascript

      export function activate(context: vscode.ExtensionContext) {
        context.subscriptions.push(
          vscode.commands.registerCommand('catCoding.start', () => {
            const panel = vscode.window.createWebviewPanel(
              'catCoding',
              'Cat Coding',
              vscode.ViewColumn.One,
              {}
            );

            panel.webview.html = '<h1>Coding Cat</h1>';

            // After 5sec, programmatically close the webview panel
            const timeout = setTimeout(() => panel.dispose(), 5000);

            panel.onDidDispose(
              () => {
                // Handle user closing panel before the 5sec have passed
                clearTimeout(timeout);
              },
              null,
              context.subscriptions
            );
          })
        );
      }

   `Remote Development and Codespaces <https://code.visualstudio.com/api/advanced-topics/remote-extensions>`
   文档中介绍了两种实现两种实现本地插件使用 Webview 访问远程服务的方法：

   -  Option 1 - Use `vscode.env.asExternalUri()`
   -  Option 2 - Use a port mapping

   插件可以通过 `webview.postMessage()` 向页面内发送消息，消息数据对象会串行化为 JSON 内容。
   Webview 内的脚本无法访问远程运行的插件启动的服务，即使访问远程机器的 IP，云主机或容器中的端口
   默认会被拦截。要实现 webview to remote 的通信，消息 API 可以通过端口映射配置绕过各种限制，
   哪些端口可以直接转发到远程机器上。实例化参数 `portMapping` 接收一组 `WebviewPortMapping`。
   建议使用访问本地资源的插件也使用端口影射，即使 `WebviewPortMapping` 中设置的两个端口相同。
   其中的 `webviewPort` 和 `extensionHostPort` 分别是 Webview 端使用的端口和插件服务端口。
   端口影射只处理 `http` 或 `https` 地址，Websocket 地址无效用 (e.g. `ws://localhost:3000`)。
   注意，localhost 主机代表的是本地主机，而工作空间的插件服务运行于远程，不能直接使用这个主机名通信。

   .. code:: javascript

      ┌──────────────────────────┐     ┌────────────────────────────────────────────────────────────┐
      │      Local OS            │     │                      Remote VM in Azure                    │
      │                          │     │                                                            │
      │  ┌────────────────────┐  │     │    ┌───────────────────────────┐                           │
      │  │                    │  │     │    │                           │   ┌─────────────┐         │
      │  │      VS Code      ─┼──┴─────┴────┼──►   VS Code Server       ┼──►│ Source Code │         │
      │  │                    │ SSH Tunnel  │                           │   └─────────────┘         │
      │  │                    │┌─┬─────┬─┐  │ ┌───────────────────────┐ │   ┌────────────────────┐  │
      │  │  ┌──────────────┐  ││ │     │ │  │ │                       │ ┼──►│ Terminal Processes │  │
      │  │  │   WebView    ┼──┼┘ │     │ │  │ │┌─────────────────────┐│ │   └────────────────────┘  │
      │  │  └──────────────┘  │  │     │ │  │ ││ Workspace Extension ││ │   ┌─────────────────────┐ │
      │  │                    │  │     │ │  │ │└─────────────────────┘│ ┼──►│ Running Application │ │
      │  │                    │  │     │ │  │ │                       │ │   └─────────────────────┘ │
      │  └────────────────────┘  │     │ │  │ └───────────┬───────────┘ │   ┌──────────┐            │
      │                          │     │ │  │             │             ┼──►│ Debugger │            │
      │                          │     │ │  └─────────────┼─────────────┘   └──────────┘            │
      │                          │     │ │  ┌─────────────┼─────────────┐                           │
      │                          │     │ │  │             ▼             │                           │
      │                          │     │ └──┼─► Extension Web Server    │                           │
      │                          │     │    │   (Use by WebView)        │                           │
      └──────────────────────────┘     │    │                           │                           │
                                       │    └───────────────────────────┘                           │
                                       └────────────────────────────────────────────────────────────┘
   插件与 Webview 间的消息通信机制的基本用法：

   .. code:: javascript

      // Send messages between plugin and webview.
      // Messages can be any JSON serializable data.

      // Send a message from plugin to webview.
      panel.webview.postMessage({ command: 'refactor' });

      // Handle messages from the webview
      panel.webview.onDidReceiveMessage(
        message => {
          switch (message.command) {
            case 'alert':
              vscode.window.showErrorMessage(message.text);
              return;
          }
        },
        undefined,
        context.subscriptions
      );


      // Handle the message inside the webview
      window.addEventListener('message', event => {

         // The JSON data our extension sent
         const message = event.data; 

         switch (message.command) {
            case 'refactor':
               // TODO:..
               break;
         }
      });

      const vscode = acquireVsCodeApi();

      // Send a message to plugin
      vscode.postMessage({
         command: 'alert',
         text: '🐛  from webview'
      })


   VS Code 1.40 引入 `vscode.env.asExternalUri` API 来转发 `http` 和 `https` 的资源请求。
   这个 API 同样适用于 `localhost` 资源的请求的转发。通过此方法映射后的地址可以正常访问到插件运行
   的 Web 服务。通过此方法映射后的 URI 可用于 `<ifram>` 或者其它 HTML 内容。需要为 Webview 启用
   脚本功能，并且添加 Content-Security-Policy (CSP) 内容安全策略设置。以下代码演示在 Webview
   内部通过 `<iframe>` 嵌入其它页面：

   .. code:: javascript

      // Use asExternalUri to get the URI for the web server
      const dynamicWebServerPort = await getWebServerPort();
      const fullWebServerUri = await vscode.env.asExternalUri(
              vscode.Uri.parse(`http://localhost:${dynamicWebServerPort}`)
          );

      // Create the webview
      const panel = vscode.window.createWebviewPanel(
          'asExternalUriWebview',
          'asExternalUri Example',
          vscode.ViewColumn.One, {
              enableScripts: true
          });

      const cspSource = panel.webview.cspSource;
      panel.webview.html = `<!DOCTYPE html>
              <head>
                  <meta
                      http-equiv="Content-Security-Policy"
                      content="default-src 'none'; frame-src ${fullWebServerUri} ${cspSource} https:; img-src ${cspSource} https:; script-src ${cspSource}; style-src ${cspSource};"
                  />
              </head>
              <body>
              <!-- All content from the web server must be in an iframe -->
              <iframe src="${fullWebServerUri}">
          </body>
          </html>`;


   第二种实现 Webview 访问外部资源的方法是 port mapping，创建 Webview 实例时设置 `portMapping` 。
   此方法有个前提要求，只能在 Webview API 中使用，不能在浏览器中使用。以下示例中，`localhost:3000`
   请求全都会映射到一个动态的端口上。这里假设有一个 `getWebServerPort()` 方法来获取 Express.js 
   这类 Web 服务的端口。

   .. code:: javascript

      const LOCAL_STATIC_PORT = 3000;
      const dynamicServerPort = await getWebServerPort();

      // Create webview and pass portMapping in
      const panel = vscode.window.createWebviewPanel(
          'remoteMappingExample',
          'Remote Mapping Example',
          vscode.ViewColumn.One, {
              portMapping: [
                  // This maps localhost:3000 in the webview to the web server port on the remote host.
                  { webviewPort: LOCAL_STATIC_PORT, extensionHostPort: dynamicServerPort }
              ]
          });

      // Reference the port in any full URIs you reference in your HTML.
      panel.webview.html = `<!DOCTYPE html>
          <body>
              <!-- This will resolve to the dynamic server port on the remote machine -->
              <img src="http://localhost:${LOCAL_STATIC_PORT}/canvas.png">
          </body>
          </html>`;
   

   VS Code 会自动向 Webview 内容中的 `<body>` 节点添加主题样式类：

   *  vscode-light - Light themes.
   *  vscode-dark - Dark themes.
   *  vscode-high-contrast - High contrast themes.

   可以通过 HTML 中嵌入 CSS 来反映当前用户的主题配置：

   .. code:: javascript

      body.vscode-light {
         color: black;
      }

      body.vscode-dark {
         color: white;
      }

      body.vscode-high-contrast {
         color: red;
      }

   Webviews 中可以通过 CSS variables 来访问 VS Code 主题配置色。但需要将配置中的句点替换为连字符号。
   比如 editor.foreground 对应的 CSS 变量为 `var(--vscode-editor-foreground)`。

      | --vscode-editor-font-family - Editor font family (from the editor.fontFamily setting).
      | --vscode-editor-font-weight - Editor font weight (from the editor.fontWeight setting).
      | --vscode-editor-font-size   - Editor font size (from the editor.fontSize setting).

   主题配置的方案名称会保存在一个 `vscode-theme-id` 数据中，通过这个 ID 值可以确定当前使用的某个主题：

   .. code:: javascript

      body[data-vscode-theme-id="One Dark Pro"] {
         background: hotpink;
      }

      code {
         color: var(--vscode-editor-foreground);
      }

   通过实例化参数 `localResourceRoots` 来限制 WebviewPanel 内容页面可访问的本地资源.默认可
   访问插件的安装目录下的资源：

   .. code:: javascript

         const panel = vscode.window.createWebviewPanel(
         'catCoding',
         'Cat Coding',
         vscode.ViewColumn.One,
         {
            // Only allow the webview to access resources in our extension's media directory
            localResourceRoots: [vscode.Uri.joinPath(context.extensionUri, 'media')]
         }
         );

         const onDiskPath = vscode.Uri.joinPath(context.extensionUri, 'media', 'cat.gif');
         const wurl = panel.webview.asWebviewUri(onDiskPath);

         panel.webview.html = somehtml.replace(localpath, wurl);

   在配置文件中设置 Webview 右键菜单（Context menus），通过设置菜单命令的 when 从句来限定
   菜单项的生效条件。插件宿主在加载插件配置后，就会自动设置由插件创建的 Webview 实例的菜单内容：

   .. code:: javascript

      "contributes": {
      "menus": {
         "webview/context": [
            {
            "command": "catCoding.yarn",
            "when": "webviewId == 'catCoding'"
            },
            {
            "command": "catCoding.insertLion",
            "when": "webviewId == 'catCoding' && webviewSection == 'editor'"
            }
         ]
      },
      "commands": [
         {
            "command": "catCoding.yarn",
            "title": "Yarn 🧶",
            "category": "Cat Coding"
         },
         {
            "command": "catCoding.insertLion",
            "title": "Insert 🦁",
            "category": "Cat Coding"
         },
         ...
      ]
      }


VS Code Webview LivePreview Plugin
================================================================================

   *  `VS Code 插件示例，一个 TypeScript 即时预览插件 <http://imzc.me/tools/2016/10/15/vscode-ext-typescript-live-preview/>`__
   *  `VSCode live code <https://vscode.dev/github.com/imzc/vscode-live-code>`__

   Webview 由于其本身就是一个 Web 环境，使用场景非常大，可以用它来做 Web 开发时的实时预览。
   VS Code 提供了 `vscode.workspace.onDidChangeTextDocument()` 事件来通知插件开发者的代码
   处理文件内容变化。这个方法跟 File Watcher API 的区别是，用户不需要执行 save 只需要在输入内容
   就能触发此事件。事件中包含一个 `contentChanges` 数组，包含所有修改内容、区间。一个 TypeScript
   程序的实时预览可以按以下步骤实现：

   *  注册一个 TypeScript 语言激活事件，插件需要在编辑 TypeScript 代码时激活；
   *  注册一个 command 以在 VS Code 中打开一个 WebView 用于预览 Web 程序；
   *  监听 `onDidChangeTextDocument` 事件，用户动态调用 TypeScript 编译器生成 JavaScript 代码；
   *  WebView 窗口中加载编译后的编译好的 JavaScript 主程序，提供实时预览；

   可选使用 `createOutputChannel()` 创建输出面板，来向用户展示插件执行编译过程中产生的消息。
   通过使用 TypeScript 提供的 `CompilerOptions` 创建编译配置，以及使用 `transpileModule()`
   方法将 .ts 源码转译为 .js 代码。可以将转化的打印到输出面板中，供用户参考。

   使用 `TextDocumentContentProvider` 可以为包含指定 scheme 的 URL 地址请求提供虚拟文本文档。
   示例代码中注册的内容就可以通过 `livecode://` 地址进行访问。vscode.Uri 对象提供了 `from()`
   还有 `with()` 等方法用来拼接带有指定 scheme 的地址。VS Code 旧版本提供 `vscode.previewHtml`
   这个内部命令，可以直接用它来打开 Webview 浏览指定地址的页面内容。VS Code 1.33 移除此内部命令，
   全面使用 Webview API。可以在 vscode-docs 代码仓库的发布笔记中找到 API 变动内容。

   除了虚拟文档，还有虚拟工作空间 Virtual Workspaces。一般来说，VS Code 直接打开磁盘目录作为
   工作空间的位置。但是像 GitHub Repositories 这样的扩展特别之处在于，它通过虚拟文件系统或者云
   服务器数据服务提供文件，并进行编辑操作。这种虚拟工作空间使得 VS Code 非常适合在线开发。

   注意，在插件命令回调中，需要判断一下当前窗口是否存在激活的编辑器，比如窗口没有打开文件这种情况，
   当前编辑器就是未定义的，就不应用继续执行和文档相关的处理：

   .. code:: javascript

        if (!vscode.window.activeTextEditor) return 

   新旧 API 交替后，编码方式也不一样了：

   .. code:: javascript

      // 1st solution
      vscode.window.createWebviewPanel()

      // 2nd solution
      vscode.WebviewViewProvider
      vscode.window.registerWebviewViewProvider(viewType, provider));

      // Old fashsion
      vscode.TextDocumentContentProvider
      vscode.workspace.registerTextDocumentContentProvider(scheme, provider);

   `Virtual Documents <https://code.visualstudio.com/api/extension-guides/virtual-documents>`__
   虚拟文档目的是提供一种方式，让开发者声明一种 scheme 协议，同一个供应方实现只能注册到同一种协议，
   并且注册以后就不能更改。官方示范使用 `showTextDocument()` 方法来打开虚拟文档：

   https://github.com/microsoft/vscode-extension-samples/blob/main/virtual-document-sample/src/extension.ts

   由于 Webview 有安全要求，只能访问经过映射地址访问本地资源。测试过程中发现也无法方法虚拟文档，
   它们的 URL 地址构建也不一样，后一种是经过 `webviewPanel.webview.asWebviewUri(uri)`
   重新映射的安全地址，来源自 `provideTextDocumentContent(uri: vscode.Uri)` 接收参数。
   并且 `asWebviewUri(uri)` 会自动给地址的 path 部分添加缺失的前缀斜杠：

   .. code:: javascript

      {$mid: 1, path: 'Hello', scheme: 'cowsay'} ==> "cowsay:Hello"
      {$mid: 1, path: '/Hello', scheme: 'https', authority: 'cowsay+.vscode-resource.vscode-cdn.net'}


   另外 `asWebviewUri(uri)` 还会转换原 URI 对象中的 scheme 到安全地址的主机名称部分的前头，
   并且使用 +. 符号连接用于安全映射的主机名，这里就是指 `vscode-resource.vscode-cdn.net`
   这个临时主机名。经过映射的地址，主机部分就用于完成安全的鉴权功能（authority）。正常的本地安全
   URL 地址应该是 `file` 而不是 `livecode`：

   .. code:: javascript

      {
      "uri": {
         "$mid": 1,
         "external": "https://livecode%2B.vscode-resource.vscode-cdn.net/c%3A/msys64/pl/vscode-live-code/src/extension.ts?file%3A%2F%2F%2Fc%253A%2Fmsys64%2Fpl%2Fvscode-live-code%2Fsrc%2Fextension.ts",
         "path": "/C:/msys64/pl/vscode-live-code/src/extension.ts",
         "scheme": "https",
         "authority": "livecode+.vscode-resource.vscode-cdn.net",
         "query": "file:///c%3A/msys64/pl/vscode-live-code/src/extension.ts"
      },
      "dynamicHtmlUrl": {
         "$mid": 1,
         "path": "/C:/msys64/pl/vscode-live-code/src/extension.ts",
         "scheme": "livecode",
         "query": "file:///c%3A/msys64/pl/vscode-live-code/src/extension.ts"
      },
      }

      https://livecode+.vscode-resource.vscode-cdn.net/c:/msys64/pl/vscode-live-code/src/extension.ts?file:///c%3A/msys64/pl/vscode-live-code/src/extension.ts


   .. code:: javascript

      /*---------------------------------------------------------
      * Copyright (C) Microsoft Corporation. All rights reserved.
      *--------------------------------------------------------*/

      import * as vscode from 'vscode';
      import * as cowsay from 'cowsay';

      export function activate({ subscriptions }: vscode.ExtensionContext) {

         // register a content provider for the cowsay-scheme
         const myScheme = 'cowsay';
         const myProvider = new class implements vscode.TextDocumentContentProvider {

            // emitter and its event
            onDidChangeEmitter = new vscode.EventEmitter<vscode.Uri>();
            onDidChange = this.onDidChangeEmitter.event;

            provideTextDocumentContent(uri: vscode.Uri): string {
               // simply invoke cowsay, use uri-path as text
               return cowsay.say({ text: uri.path });
            }
         };
         subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(myScheme, myProvider));

         // register a command that opens a cowsay-document
         subscriptions.push(vscode.commands.registerCommand('cowsay.say', async () => {
            const what = await vscode.window.showInputBox({ placeHolder: 'cowsay...' });
            if (what) {
               const uri = vscode.Uri.parse('cowsay:' + what);
               const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
               await vscode.window.showTextDocument(doc, { preview: false });
            }
         }));

         // register a command that updates the current cowsay
         subscriptions.push(vscode.commands.registerCommand('cowsay.backwards', async () => {
            if (!vscode.window.activeTextEditor) {
               return; // no editor
            }
            const { document } = vscode.window.activeTextEditor;
            if (document.uri.scheme !== myScheme) {
               return; // not my scheme
            }
            // get path-components, reverse it, and create a new uri
            const say = document.uri.path;
            const newSay = say.split('').reverse().join('');
            const newUri = document.uri.with({ path: newSay });
            await vscode.window.showTextDocument(newUri, { preview: false });
         }));
      }


   使用新版本 Webview API 方式，不能按文档供应方接口来实现，需要修改 `showPreview` 方法的实现。
   注册处理 `onDidChangeTextDocument` 事件的代码也需要更改，不能去使用 URI 来访问供应内容，应该
   直接将页面内容设置到 `Webview.html` 属性。为了方便，定义模块级变量 `webviewPanel` 来引用创建
   好的 `WebviewPanel` 对象。另外，由于事件中并没有对哪个代码文档进行区别，所有 TypeScript 会同样
   方式对待：

   .. code:: javascript

      let disposable = vscode.commands.registerCommand('livecode.previewTypeScript', () => {      

         if (!vscode.window.activeTextEditor) return 

         var document = vscode.window.activeTextEditor.document;
         showPreview(document);
      });

      vscode.workspace.onDidChangeTextDocument((tdcEvent:vscode.TextDocumentChangeEvent) =>{
         if(tdcEvent.document.languageId === 'typescript'){
            showPreview(document);
         }
      });


   .. code:: javascript

      function rawHTML(text:string) {
         return `
         <body style="margin:0; padding: 0; width: 100vw; height: 100vh;">
            ${text}
         </body>
         `
      }

      async function showPreview(document:vscode.TextDocument){
         
         if (webviewPanel === null){
            webviewPanel = vscode.window.createWebviewPanel(
                  "livecode", 
                  `Preview ${path.basename(document.uri.fsPath)}`, 
                  vscode.ViewColumn.Two,
                  {
                     "enableScripts": true, 
                     "enableFindWidget": true,
                     "enableCommandUris": true,
                     "localResourceRoots": [context.extensionUri]
                  })
            webviewPanel.onDidDispose((event)=>{
                  webviewPanel = null
            })
         }

         const doc = await vscode.workspace.openTextDocument(vscode.Uri.parse(document.uri.path))
         webviewPanel.webview.html = rawHTML(compileTypeScript(doc.getText()))
         // webviewPanel.webview.html = rawHTML(dynamicHtmlUrl)
      }

   参考测试脚本如下：

   .. code:: javascript

      class App {
         constructor(parameters?) {
            let p = document.createElement("p")
            p.textContent = `App ctor. ${parameters}`
            document.body.append(p)
            console.log(p.textContent, 
                  {
                  "1st node tag": document.children[0].tagName, 
                  "is 1st child equal to children[0]": document.firstChild == document.children[0]
                  })
         }
      }

      new App('===>ABC')


   需要注意的是，VS Code 环境中，如果 Webview 内缺失 `<body>` 标签，那么渲染页面后，也不能通过
   `document.append(body)` 这样的方式来动态创建、添加。这样会触发奇怪的错误。编译得到的脚本在页面
   渲染时，会使用 `eval()` 方法运行，并且会在内存中创建虚拟文件的方式运行，VM 开头加数字后缀的命名形式。
   因此，即使运行出错，处理异常时，也会因为脚本中的 `appendChild()` 方法导致报错信息无法在页面上呈现。

   .. code:: javascript
 
        try{
            eval("var App = /** @class */ (function () {\r\n...\r\nnew App('AC');\r\n");
        }
        catch(e){
            var error = document.createElement('p');
            error.style.color="#e50";
            error.style.fontSize="larger";
            error.textContent = e;
            document.body.appendChild(error);
        }  


   项目 package.json 关键配置参考：

   .. code:: javascript

      "engines": {
         "vscode": "^1.74.0"
      },
      "activationEvents": [
         "onLanguage:typescript",
         // "onCommand:livecode.previewTypeScript" no need with VS Code 1.74.0+
      ],
      "contributes": {
         "commands": [{
               "command": "livecode.previewTypeScript",
               "title": "Preview TypeScript"
         }],
         "keybindings": [
               {
                  "command": "livecode.previewTypeScript",
                  "key": "ctrl+k ctrl+t"
               }
         ]
      },


   extension.ts

   .. code:: javascript

      'use strict';
      // The module 'vscode' contains the VS Code extensibility API
      // Import the module and reference it with the alias vscode in your code below
      import * as vscode from 'vscode';
      import * as ts from 'typescript';
      import * as path from 'path';
      import { LiveCodeDocumentContentProvider } from './LiveCodeDocumentContentProvider';

      var output:vscode.OutputChannel;

      // this method is called when your extension is activated
      // your extension is activated the very first time the command is executed
      export function activate(context: vscode.ExtensionContext) {

         output = vscode.window.createOutputChannel("Live Code");
         output.show(true);
         output.appendLine("Live Code Started!");

         let provider = new LiveCodeDocumentContentProvider(context, compileTypeScript);
         let registration = vscode.workspace.registerTextDocumentContentProvider('livecode', provider);

         // The command has been defined in the package.json file
         // Now provide the implementation of the command with  registerCommand
         // The commandId parameter must match the command field in package.json
         let disposable = vscode.commands.registerCommand('livecode.previewTypeScript', () => {      
            var document = vscode.window.activeTextEditor.document;
            showPreview(document);
         });

         vscode.workspace.onDidChangeTextDocument(event=>{
            var document = event.document;
            if(!isTypeScriptFile(document)){
                  return;
            }

            provider.update(GetPreviewUri(document.uri));
         });

         context.subscriptions.push(disposable,registration);
      }

      // this method is called when your extension is deactivated
      export function deactivate() {
      }


      function showPreview(document:vscode.TextDocument){
         
         var resource = document.uri;
         var dynamicHtmlUrl= GetPreviewUri(resource); // "livecode:/c:/work/demo/test.ts?file:///c:/work/demo/test.ts"

         // Error because livecode:// is unknown.
         return vscode.commands.executeCommand('vscode.previewHtml', 
            dynamicHtmlUrl,
            vscode.ViewColumn.Three,
            `Preview ${path.basename(resource.fsPath)}`
            ).then(()=>{},(e)=>{
                  output.appendLine(e)
            });
      }

      function GetPreviewUri(uri:vscode.Uri){
         return uri.with({ scheme: 'livecode', path: uri.path, query: uri.toString() });
      }



      function isTypeScriptFile(document:vscode.TextDocument){
         return document.languageId === 'typescript'
            && document.uri.scheme !== 'livecode'; // prevent processing of own documents
      }

      function compileTypeScript(source:string){
         var tsconfig:ts.CompilerOptions = {
            target: ts.ScriptTarget.ES5
         };
         var compileResult = ts.transpileModule(source, { compilerOptions: tsconfig });
         var javascript = compileResult.outputText;
         var scriptTag = 
         `<script> 
            try{
                  eval(${JSON.stringify(javascript)});
            }
            catch(e){
                  var error = document.createElement('p');
                  error.style.color="#e50";
                  error.style.fontSize="larger";
                  error.textContent = e;
                  document.body.appendChild(error);
            }  
         </script>`;
         return scriptTag;
      }

   使用旧版本 API 的文档供应方实现 LiveCodeDocumentContentProvider.ts

   .. code:: javascript

      import * as vscode from 'vscode';
      import * as path from 'path';
      import { ExtensionContext, TextDocumentContentProvider, EventEmitter, Event, Uri, ViewColumn } from 'vscode';

      interface IRenderer {
         (text: string): string;
      }

      export class LiveCodeDocumentContentProvider implements TextDocumentContentProvider {
         private _context: ExtensionContext;
         private _onDidChange = new EventEmitter<Uri>();
         private _render:IRenderer;

         constructor(context: ExtensionContext,render:IRenderer) {
            this._context = context;
            this._render = render;
         }

         public provideTextDocumentContent(uri: Uri): Thenable<string> {

            return vscode.workspace.openTextDocument(Uri.parse(uri.query)).then(document => {
               const head = [].concat(
                  '<!DOCTYPE html>',
                  '<html>',
                  '<head>',
                  '<meta http-equiv="Content-type" content="text/html;charset=UTF-8">',
                  '</head>',
                  '<body>'
               ).join('\n');

               const body = this._render(document.getText());

               const tail = [
                  '</body>',
                  '</html>'
               ].join('\n');

               return head + body + tail;
            });
         }

         get onDidChange(): Event<Uri> {
            return this._onDidChange.event;
         }

         public update(uri: Uri) {
            this._onDidChange.fire(uri);
         }
      }


VS Code Webview Samples Brief
================================================================================

   官方提供多个 Webview 示范工程，这里对这些工程的要点进行一个摘要记录。

   可以将 VS Code 等等的类型声明模块安装到全局目录，比如 `npm install -g @types/vscode`，
   并修改 tsconfig.json 配置中的 `typeRoots` 指向全局的 @types 目录，就不必为多个工程单独、
   重复安装这些模块，除非有版本兼容问题需要专用版本。

   另外，结合本地安装插件（>Developer: Install Extension from Location..）进行插件的开发与调试，
   这种方式也是最便于使用官方示范工程的操作。因为工程主要用到的是 TypeScript 编译器和各种类型声明模块
   用于静态类型验证。全局安装这些工具可以节省各个工程的模块安装过程，同时也避免了国内网络出现的各种资源
   访问不畅通现象：

   .. code:: javascript

      {
         "typeRoots": ["c:/nodejs/node_modules/@types"],
      }

   本地安装插件可以一边测试一边更新，只需要执行 Restart Extension Host 或者 Reload Window
   命令刷新插件。测试完成后就只可以卸载，有两种方式卸载本地插件：一是在插件面板中使用 @enabled 
   过滤出当前启用的插件，翻看列表或者输入插件名称，在插件配置页面进行卸载。另一种方式是使用命令面板，
   在插件注册的命令右侧有一个齿轮图标，点击它打开命令的热键配置页面，并且点击右侧的扩展来源（Source）
   打开插件配置页面进行卸载。搜索插件时使用配置文件中的 `displayName` 中设置的名称。

   这些工程中配置了 VS Code 任务脚本，可以通过菜单 Terminal -> Run Task... 运行以完成插件
   代码的构建，将 TypeScript 代码转译为 JavaScript。这个菜单也可以执行 package.json 定义
   的脚本命令：

   .. code:: javascript

      "scripts": {
         "vscode:prepublish": "npm run compile",
         "compile": "tsc -p ./",
         "lint": "eslint",
         "watch": "tsc -w -p ./"
      },

   .. code:: javascript

      // See https://go.microsoft.com/fwlink/?LinkId=733558
      // for the documentation about the tasks.json format
      {
         "version": "2.0.0",
         "tasks": [
            {
               "type": "npm",
               "script": "watch",
               "problemMatcher": "$tsc-watch",
               "isBackground": true,
               "presentation": {
                  "reveal": "never"
               },
               "group": {
                  "kind": "build",
                  "isDefault": true
               }
            }
         ]
      }

   另外，也提供用于调试插件的程序加载配置（launch），如果使用本地插件安装方式，可以不使用这些功能。

   .. code:: javascript

      // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
      {
         "version": "0.2.0",
         "configurations": [
            {
               "name": "Run Extension",
               "type": "extensionHost",
               "request": "launch",
               "runtimeExecutable": "${execPath}",
               "args": ["--extensionDevelopmentPath=${workspaceRoot}"],
               "outFiles": ["${workspaceFolder}/out/**/*.js"],
               "preLaunchTask": "npm: watch"
            }
         ]
      }

   `Activation Events <https://code.visualstudio.com/api/references/activation-events>`__
   激活事件是指 VS Code 激活插件的事件，通过配置激活事件可以让 VS Code 知道如何激活需要激活的插件。
   事件配置使用事件名称开头，一般后面还跟着参数，比如 `"onLanguage:python"` 表示插件支持 Python
   语言，VS Code 打开 Python 脚本时就有机制激活这个插件。VS Code 1.74.0 版本开始，插件不再需要
   显式配置 `onCommand` 激活事件。另外，VS Code 启动事件使用 * 表示，是插件可以得到调用的最早时间。

   | onAuthenticationRequest       — This activation event is emitted and interested extensions will be activated whenever an extension requests an authentication session (via the authentication.getSession() API) with the matching providerId.
   | onChatParticipant             — An activation event emitted when the specified chat participant is invoked.
   | onCommand                     — This activation event is emitted and interested extensions will be activated whenever a command is being invoked.
   | onCustomEditor                — This activation event is emitted and interested extensions will be activated whenever VS Code needs to create a custom editor with the matching viewType.
   | onDebug                       — This activation event is emitted and interested extensions will be activated before a debug session is started.
   | onDebugAdapterProtocolTracker — It is emitted whenever a debug session with the specific type is about to be launched and a debug protocol tracker might be needed.
   | onDebugDynamicConfigurations  — It is called to provide dynamic debug configurations when the user asks for them, such as through the UI via the "Select and Start Debugging" command.
   | onDebugInitialConfigurations  — It is called to provide initial debug configurations, such as whenever a launch.json needs to be created.
   | onDebugResolve                — It is fired just before the resolveDebugConfiguration method of the DebugConfigurationProvider for the specified type is called.
   | onEditSession                 — It is emitted when an edit session is accessed with the given scheme.
   | onFileSystem                  — It is emitted and interested extensions will be activated whenever a file or folder from a specific scheme is read. 
   | onIssueReporterOpened         — This activation event is emitted when the issue reporter is opened (for example, by using Help: Report Issue).
   | onLanguage                    — This activation event is emitted and interested extensions will be activated whenever a file that resolves to a certain language gets opened.
   | onLanguageModelTool           — An activation event emitted when the specified language model tool is invoked.
   | onNotebook                    — It is emitted when the specified notebook document type is opened.
   | onOpenExternalUri             — An activation event emitted whenever an external URI, such as an http or https link, is being opened.
   | onRenderer                    — It is emitted when a notebook output renderer is used.
   | onSearch                      — It is emitted when a search is started in the folder with the given scheme.
   | onStartupFinished             — This activation event is emitted and interested extensions will be activated some time after VS Code starts up.
   | onTaskType                    — It is emitted emitted whenever tasks of a certain type need to be listed or resolved.
   | onTerminalProfile             — It is emitted when a specific terminal profile is launched.
   | onUri                         — This activation event is emitted and interested extensions will be activated whenever a system-wide Uri for that extension is opened. 
   | onView                        — This activation event is emitted and interested extensions will be activated whenever a view of the specified id is expanded in the VS Code sidebar. Built-in views do not emit an activation event.
   | onWalkthrough                 — It is emitted when a specified walkthrough is opened.
   | onWebviewPanel                — This activation event is emitted and interested extensions will be activated whenever VS Code needs to restore a webview with the matching viewType.
   | workspaceContains             — It is emitted and interested extensions will be activated whenever a folder is opened and the folder contains at least one file that matches a glob pattern.
   | *                             — The * activation event is emitted and interested extensions will be activated whenever VS Code starts up.

   `Contribution Points <https://code.visualstudio.com/api/references/contribution-points>`__
   插件功能投放点配置的选用注解：

   =========================== =================================================
       Contribution Points                           Briefs
   =========================== =================================================
    ◾  authentication          | Contributes an authentication provider.

    ◾  breakpoints             | Usually a debugger extension will also have a `contributes.breakpoints`
                               | entry where the extension lists the language file types for which setting
                               | breakpoints will be enabled. 

    ◾  colors                  | Contributes new themable colors. These colors can be used by the extension
                               | in editor decorators and in the status bar. Once defined, users can
                               | customize the color in the `workspace.colorCustomization` setting and
                               | user themes can set the color value.

    ◾  commands                | Contribute the UI for a command consisting of a `title`
                               | and (optionally) an `icon`, `category`, and `enabled` state.

    ◾  configuration           | Contribute configuration keys that will be exposed to the user.
                               | The user will be able to set these configuration options as User Settings
                               | or as Workspace Settings, either by using the Settings editor or by editing
                               | the JSON settings file directly.
    ◾  configurationDefaults   | Contribute default values for other registered configurations and override their defaults.

    ◾  customEditors           | The `customEditors` contribution point is how your extension tells
                               | VS Code about the custom editors that it provides. For example, VS Code
                               | needs to know what types of files your custom editor works with as well
                               | as how to identify your custom editor in any UI.

    ◾  debuggers               | Contribute a debugger to VS Code.

    ◾  grammars                | Contribute a TextMate grammar to a language. You must provide the `language`
                               | this grammar applies to, the TextMate `scopeName` for the grammar and the file path.

    ◾  icons                   | Contribute a new icon by ID, along with a default icon. The icon ID can then
                               | be used by the extension (or any other extensions that depend on the extension)
                               | anywhere a `ThemeIcon` can be used `new ThemeIcon("iconId")`, in Markdown
                               | strings (`$(iconId)`), and as icons in certain contribution points.

    ◾  iconThemes              | Contribute a file icon theme to VS Code. File icons are shown next
                               | to file names, indicating the file type.

    ◾  jsonValidation          | Contribute a validation schema for a specific type of `json` file.
                               | The `url` value can be either a local path to a schema file included
                               | in the extension or a remote server URL such as a json schema store.

    ◾  keybindings             | Contribute a key binding rule defining what command should be invoked
                               | when the user presses a key combination. See the Key Bindings topic
                               | where key bindings are explained in detail.

    ◾  languages               | Contribute definition of a programming language. This will introduce
                               | a new language or enrich the knowledge VS Code has about a language.

    ◾  menus                   | Contribute a menu item for a command to the editor or Explorer.
                               | The menu item definition contains the `command` that should
                               | be invoked when selected and the condition under which the
                               | item should show. The latter is defined with the `when` clause,
                               | which uses the key bindings `when` clause contexts.

    ◾  problemMatchers         | Contribute problem matcher patterns. These contributions work in
    ◾                          | both the output panel runner and in the terminal runner.
    ◾  problemPatterns         | Contributes named problem patterns that can be used in problem matchers (see above).

    ◾  productIconThemes       | Contribute a product icon theme to VS Code. Product icons are all icons used in VS Code
    ◾                          | except file icons and icons contributed from extensions.

    ◾  resourceLabelFormatters | Contributes resource label formatters that specify how to display URIs everywhere in the workbench.
    ◾  semanticTokenModifiers  | Contributes new semantic token modifiers that can be highlighted via theme rules.
    ◾  semanticTokenScopes     | Contributes mapping between semantic token types & modifiers and scopes either as a fallback or to support language-specific themes.
    ◾  semanticTokenTypes      | Contributes new semantic token types that can be highlighted via theme rules.

    ◾  snippets                | Contribute snippets for a specific language. The `language` attribute
                               | is the language identifier and the `path` is the relative path to
                               | the snippet file, which defines snippets in the VS Code snippet format.

    ◾  submenus                | Contribute a submenu as a placeholder onto which menu items
                               | can be contributed. A submenu requires a `label` to be shown
                               | in the parent menu. In addition to a title, commands can also
                               | define icons that VS Code will show in the editor title menu bar.

    ◾  taskDefinitions         | Contributes and defines an object literal structure that allows to uniquely identify a contributed task in the system.
    ◾  terminal                | Contribute a terminal profile to VS Code, allowing extensions to handle the creation of the profiles.
    ◾  themes                  | Contribute a color theme to VS Code, defining workbench colors and styles for syntax tokens in the editor.
    ◾  typescriptServerPlugins | Contributes TypeScript server plugins that augment VS Code's JavaScript and TypeScript support.

    ◾  views                   | Contribute a view to VS Code. 
                               | - `explorer`: Explorer view container in the Activity Bar
                               | - `scm`: Source Control Management (SCM) view container in the Activity Bar
                               | - `debug`: Run and Debug view container in the Activity Bar
                               | - `test`: Test view container in the Activity Bar
                               | - Custom view containers contributed by Extensions.

    ◾  viewsContainers         | Contribute a view container into which Custom views can be contributed.
                               | You must specify an identifier, title, and an icon for the view
                               | container. At present, you can contribute them to the Activity Bar
                               | (`activitybar`) and Panel (`panel`). Below example shows how the
                               | `Package Explorer` view container is contributed to the Activity Bar
                               | and how views are contributed to it.

    ◾  viewsWelcome            | Contribute welcome content to Custom views. Welcome content
                               | only applies to empty tree views. A view is considered empty
                               | if the tree has no children and no `TreeView.message`. By
                               | convention, any command links that are on a line by
                               | themselves are displayed as a button. You can specify
                               | the view that the welcome content should apply to with the `view`
                               | property. Visibility of the welcome content can be controlled
                               | with the `when` context value. The text to be displayed
                               | as the welcome content is set with the `contents` property.

    ◾  walkthroughs            | Contribute walkthroughs to appear on the Getting Started page.
   =========================== =================================================


   当前插件可以配置的菜单投放点如下，包括可配置的子菜单 `submenu` 类型：

   - `commandPalette`                 - global Command Palette
   - `comments/comment/title`         - Comments title menu bar
   - `comments/comment/context`       - Comments context menu
   - `comments/commentThread/title`   - Comments thread title menu bar
   - `comments/commentThread/context` - Comments thread context menu
   - `debug/callstack/context`        - Debug Call Stack view context menu
   - `debug/callstack/context`        - (group `inline`) Debug Call Stack view inline actions
   - `debug/toolBar`                  - Debug view toolbar
   - `debug/variables/context`        - Debug Variables view context menu
   - `editor/context`                 - editor context menu
   - `editor/lineNumber/context`      - editor line number context menu
   - `editor/title`                   - editor title menu bar
   - `editor/title/context`           - editor title context menu
   - `editor/title/run`               - Run submenu on the editor title menu bar
   - `explorer/context`               - Explorer view context menu
   - `extension/context`              - Extensions view context menu
   - `file/newFile`                   - New File item in the File menu and Welcome page
   - `interactive/toolbar`            - Interactive Window toolbar
   - `interactive/cell/title`         - Interactive Window cell title menu bar
   - `notebook/toolbar`               - notebook toolbar
   - `notebook/cell/title`            - notebook cell title menu bar
   - `notebook/cell/execute`          - notebook cell execution menu
   - `scm/title`                      - SCM title menu
   - `scm/resourceGroup/context`      - SCM resource groups menus
   - `scm/resourceFolder/context`     - SCM resource folders menus
   - `scm/resourceState/context`      - SCM resources menus
   - `scm/change/title`               - SCM change title menus
   - `scm/sourceControl`              - SCM source control menu
   - `terminal/context`               - terminal context menu
   - `terminal/title/context`         - terminal title context menu
   - `testing/item/context`           - Test Explorer item context menu
   - `testing/item/gutter`            - menu for a gutter decoration for a test item
   - `timeline/title`                 - Timeline view title menu bar
   - `timeline/item/context`          - Timeline view item context menu
   - `touchBar`                       - macOS Touch Bar
   - `view/title`                     - View title menu
   - `view/item/context`              - View item context menu
   - `webview/context`                - any webview context menu

   菜单（menus）与子菜单（submenus）的逻辑关系是：菜单是子菜单的投放点，它们都可以含有多个菜单项，
   菜单项与命令绑定执行相应的动作。可以参考 VS Code 源代码中的 git 插件的实现，源代码管理面板的
   菜单就是配置为两层级的菜单结构。子菜单需要使用 `submenu` 投放到指定位置，就像菜单中的命令一样。
   也就是 `submenus` 配置的菜单会填充到 `submenu` 所配置的投放点中。而菜单中的菜单项目则根据
   各个菜单的 ID 在一个 JSON 对象中设置，对象的键名就是菜单的 ID。

   菜单配置示范：

   .. code:: javascript

      {
         "contributes": {
            "menus": {
               "editor/title": [
               {
                  "when": "resourceLangId == markdown",
                  "command": "markdown.showPreview",
                  "alt": "markdown.showPreviewToSide",
                  "group": "navigation"
               },
               ]
            },
            "scm/title": [
               {
                  "command": "git.commit",
                  "group": "navigation",
                  "when": "scmProvider == git"
               },
               {
                  "submenu": "git.commit",
                  "group": "2_main@1",
                  "when": "scmProvider == git"
               },
            ],
            "submenus": [
               {
               "id": "git.commit",
               "label": "%submenu.commit%"
               },
            ],
            "git.commit": [
               {
                  "command": "git.commit",
                  "group": "1_commit@1"
               },
               {
                  "command": "git.commitStaged",
                  "group": "1_commit@2"
               },
               ...
            ],
         }
      }

   视图中的菜单等使用的图标规范（Icon specifications）：

   - `Size:` Icons should be 24x24 and centered.
   - `Color:` Icons should use a single color.
   - `Format:` It is recommended that icons be in SVG, though any image file type is accepted.
   - `States:` All icons inherit the following state styles:

   | State   | Opacity |
   | ------- | ------- |
   | Default | 60%     |
   | Hover   | 100%    |
   | Active  | 100%    |


tree-view-sample
---------------------------

   https://vscode.dev/github/microsoft/vscode-extension-samples/blob/main/tree-view-sample/README.md

   此示范工程展示自定义视图与视图容器（Views & View Containers）。在视图容器中展示了依赖包的
   数据，实现了一个简单的 Package Explorer。Tree view 是除了 Webview 之外，最常用的 VS Code
   扩展形式。此插件的代码量相较其它几个 Webview 相关的插件示范要多得多，并且从配置、编译运行都遇到
   不少问题。

   此插件通过 tree view 实现的主要功能内容包括：

   - Contributing views and view containers.
   - Contributing actions in various location of the view.
   - Implementing the tree data provider for the view.
   - Creating and working with the view.

   This sample provides following views

   - Node dependencies view
   - Ftp file explorer view

   示例代码中使用到的 API 和配置项目：

   .. code:: javascript

      //# Contribution Points    //# Activation Events   //# APIs

      - `views`                  - `onView:${viewId}`    - `window.createTreeView`
      - `viewsContainers`        - `onLanguage:json`     - `window.registerTreeDataProvider`
      - `menu`                   - `onLanguage:jsonc`    - `TreeView`
      - `view/title`                                     - `TreeDataProvider`
      - `view/item/context`

   插件信息页面都包含 Details 和 Features 两个选项卡，功能或特性信息都可以在 Feature 中看到：

   .. code:: javascript

      ### Views

      ID	                     Name	                     Where
      ----------------------- -------------------------- ---------------------
      fileExplorer            File Explorer              explorer
      ftpExplorer             FTP Explorer               explorer
      jsonOutline             Json Outline               explorer
      testView                Test View                  explorer
      testViewDragAndDrop     Test View Drag and Drop    explorer
      nodeDependencies        Node Dependencies          package-explorer

   插件提供了一个不能拖动的简化版本文件浏览器 `fileExplorer`，它以当前项目的目录下的文件为输入数据。
   另外使用了 node-ftp 模块来实现 FTP 文件的访问，并将文件列表在 ftpExplorere 视图中。另外两个
   视图 `jsonOutline` 和 `nodeDependencies` 则分别是以打开的 JSON 文件和工程配置文件作为数据，
   将数据以树状结构呈现出来。最后的 `testView` 和 `testViewDragAndDrop` 则分别是无拖功、有拖动
   功能的简单树状图测试视图。

   注意，VS Code 默认提供的 Outline 视图用于显示当前文件的大纲结构，默认属于 explorer 容器中
   的一个视图。用户可以调整这些视图所在位置（容器归属）。比如，我就喜欢将 Outline 放置到右侧栏
   （Secondary Side bar），并且设置一个专用快捷键。Activity Bar 视图容器默认位于主栏容器中
   （Primary Side bar），用户可以随时按使用习惯调整这些视图的布局。插件配置文件中，视图可配置
   `when` 条件从句，默认值为 `"when": "true"`，只有满足从句的条件时才会在相应的视图容器中显示。


   VS Code v1.23.0 开始支持用户使用视图容器来装载自定义视图，因此视图容器一般与自定义视图一起使用。
   因此，对应的两个功能投放点配置 `viewsContainers` 和 `views` 也是相关联的配置项。目前只支持两
   种视图容器，主栏面板中的视图容器 (`activitybar`) 和底部的面板 (`panel`)。配置项参考如下：

   **contributes.viewsContainers**

   - `id`: The name of the new view you're creating
   - `title`: The name which will show up at the top of the view
   - `icon`: an image which will be displayed for the view container in the activity bar

   **contributes.views**

   - `explorer`: Explorer view in the Side bar
   - `debug`: Debug view in the Side bar
   - `scm`: Source Control Management view in the Side bar
   - `test`: Test view container in the Activity Bar
   - Custom view containers contributed by Extensions.

   自定义视图 ``views`` 是定义 VS Code 界面非常重要的配置。视图需要一个容器来存放，VS Code
   内置有 `explorer` `scm` `debug` `test` 等等视图容器，也可以创建自定义视图容器来投放视图。
   有两种方法可以为视图填充内容物：

   - `TreeView` - 通过向 `createTreeView` 或者 `registerTreeDataProvider` API 提供数据供应类来填充。
      TreeViews 是理想的展示层次结构的数据列表界面组件。参考官方示范工程 [tree-view-sample]。

   - `WebviewView` - 通过向 `registerWebviewViewProvider` 提供 `WebviewViewProvider` 接口实现类型。
      此类型的 `resolveWebviewView()` 方法会在 Webview 渲染时调用，并接收到一个 webview 实例。
      需要在此接口方法中处理好 HTML 内容供应。参考官方示范工程 [webview view sample extension]。

   配置视图容器时，需要指定容器标识 `id`、标题 `title` 和图标 `icon`。目前仅支持 `activitybar`
   和 `panel` 中投放视图容器。官方示范工程 tree-view-sample 配置的投放于 Activity Bar 的视图
   容器（Package Explorer），以及投放到这个容器中的两个视图，package-dependencies 和
   package-outline。由于视图没有指定 `type` 属性为 `webview`，应用默认值 `tree` 作为树图。
   注意 `views` 配置中的每个 key 对应的是一个容器，其列表就是要投放到这个容器的视图。

   注：Activity Bar 也就是和 VS Code 自带的文件浏览面板、插件管理面板相同的视图容器。另外的
   Panel 就是主界面下侧的命令行、输出内容等等面板容器。如果缺失 Activity Bar 容器图标，那么
   就无法在主界面中看到相应的按钮，但是鼠标依然可以点对应的空白位置来激活这个视图容器。另外，还可以
   通过菜单来激活视图：View → Open View.. 。

   另外提一嘴欢迎内容视图，所谓欢迎内容视图 `viewsWelcome`，就是在 tree view 为空或者消息为空
   `TreeView.message` 的情况下显示的内容，此处称之为视图其实不太准确，它根本上是视图的内容，但是
   为了表达更流畅，就将展示欢迎内容时的视图状态称之为欢迎内容视图。VS Code 在处理视图内容时，为了易用，
   会将单独一行的命令链接（Command URIs）将显示为一个按钮。欢迎内容配置项中的 `view` 属性用于指定
   目标视图标识，即欢迎内容要显示在哪个视图中。也就是这个标识对应的那个视图如果满足以上条件时，并且同时
   满足 `when` 从句指定条件时，就会显示 `contents` 属性设置的欢迎内容文本。

   其中一个欢迎视图投放于 SCM 即源代码控制面板。通过 `when` 从句的条件可知，在打开的目录下启用了
   git 项目管理时，并且初始化过、工作目录没有内容的情况下才展示。内容中的两个链接会显示为两个按钮，
   因为链接没有和文本内容同在一行。由于 VS Code 内置的源代码管理插件也会更新视图内容，所以以下配置
   的视图可以一闪而过了。可以修改从句条件为 `"when": "true"` 或者移除，即使打开空目录也强制显示。

   以下配置简单展示了在 VS Code 文件浏览器视图容器中配置了一个 `calicoColors.welcome` 视图，
   而视图的内容即 `viewsWelcome` 配置的一个欢迎内容

   .. code:: javascript

      {
      "contributes": {
         "views": {
            "explorer": [
              {
                "type": "webview",
                "id": "calicoColors.welcome",
                "name": "Calico Colors"
              }
            ]
         },
         "viewsWelcome": [
            {
               "view": "calicoColors.welcome",
               "contents": "You can have paragraphs of text here. You can have [links](https://code.visualstudio.com) to external sources or [internal commands](command:welcome-view-content-sample.hello).\nUse new lines to have new paragraphs.\nPlace a link alone in a paragraph to make it a button\n[Hello](command:welcome-view-content-sample.hello)\n You can also render [codicons](https://microsoft.github.io/vscode-codicons/dist/codicon.html) using the $(...) syntax like: $(vscode) $(heart) $(github)\nAdd a little $(sparkle) to your welcome views!"
            },
            {
               "view": "scm",
               "contents": "In order to use git features, you can open a folder containing a git repository or clone from a URL.\n[Open Folder](command:vscode.openFolder)\n[Clone Repository](command:git.clone)\nTo learn more about how to use git and source control in VS Code [read our docs](https://aka.ms/vscode-scm).",
               "when": "config.git.enabled && git.state == initialized && workbenchState == empty"
            }
         ]
      }
      }

   由于此插件工程依赖了第三方库，如果仅仅依赖于 `vscode` 模块的插件，就不需要使用 NPM 或者 Yarn 
   安装任何依赖文件。只需要添加 @types/vscode 或者 @types/node 类型声明模块，就可以使用 VS Code
   的脚本智能提示。同时也可以直接使用 `esbuild` 或者 `tsc` 命令直接编译项目。对于依赖第三方库的插件，
   就需要安装好依赖，使用 `npm install` 或者 `cnpm install` 都可以。

   可以尝试换源或取消 SSL 验证，会降低安全性，请务必重新启用 SSL 验证。更换镜像源请清缓存并重新安装包：

   .. code:: javascript

      npm config set strict-ssl false
      npm config set strict-ssl true
      npm config set registry http://registry.cnpmjs.org
      npm config set registry http://registry.npm.taobao.org
      npm cache clean --force

   NPM（Node Package Manager）是 Node.js 默认的包管理器，用于安装、发布和管理 JavaScript 包。
   它是一个命令行工具，可以在终端中使用。NPM 有一个全球的包仓库。cnpm （China npm）是国内服务器镜像，
   专门为中国用户提供更快的下载速度。Yarn 是由 Facebook 开发的另一个 JavaScript 包管理器。新版
   Yarn 2.x (berry) 重构了 node_modules 目录管理依赖的模式。而旧版缺少 VS Code 配置扩展的支持。
   使用 cnpm 管理依赖，它会在 node_modules 创建以下划线开关的模块特定版本的目录，并且使用文件软链接
   为正式的项目引用的模块。这可能会导致 tsc 编译器检测到有多个类型声明冲突问题，可以删除不需要的模块版本。

   直接使用 TypeScript 编译器构建项目会和源文件的目录结构保持一致地输出转译后的脚本。除非使用 SystemJS
   模块格式或者不使用模块化，才能将所有脚本打包到 `outFile` 指定的输出文件。以下使用 esbuild 来构建项目，
   它会转译 TypeScript 脚本的同时，还会将 node_modules 中的依赖到的模块打包到输出同文件：

   .. code:: javascript

      cnpm install @types/vscode vscode-nls
      esbuild --bundle --watch --platform=node --outfile out/extension.js --external:vscode src/extension.ts 

   虽然完成插件编译，但是要运行它来还需要花点功夫。一般直接安装插件，只会在自定义视图显示空内容状态
   的提示性信息，表示插件示提供数据内容，只是按 package.json 配置了相应的视图区，还未曾添加任何
   要展示的内容：

      There is no data provider registered that can provide view data.

   接下来，一步步探索插件出了什么事故。首先，打开开发者工具（Toggle Developer Tools）查看控制台消息。
   由于 jsonc-parser 模块引用 vscode-nls，这一个本地化语言模块，Native Language Support，并且它
   不再维护。已经被 VS Code 内部提供的 l10n 模块替代。另外，VS Code 1.87 为插件开发者引入更新的带有
   Azure AI 翻译的预览版 `@vscode/l10n-dev` 模块。不知什么因由，esbuild 构建时，并没有打包到这个
   导入的依赖模块，这会引插件加载失败，需要额外安装它，并且插件运行时需要通过 node_modules 来加载它：

      failed: Cannot find module 'vscode-nls'

   注意 l10n 和 i18n 分别代表不同含义的 Localization vs. Internationalization。
   `the l10n-dev documentation on the Azure AI Translator <https://github.com/microsoft/vscode-l10n/blob/main/l10n-dev/README.md>`__

   另外，esbuild 还建议脚本中不要使用星来进行 namespace 导入，而是使用名称导入默认符号。因此，默认
   配置 `esModuleInterop = false` 情况下，TypeScript 处理 CommonJS/AMD/UMD 模块和处理 ES6
   模块一样，这里有两个问题。ES6 规范表示，命名空间导入 `import * as x` 只用于一个对象，TypeScript
   等价为 `= require("x")`。而旧有的模块格式，CommonJS/AMD/UMD 等等都没有相应的规定。

   .. code:: javascript

      // a namespace import
      import * as moment from "moment"; // TS
      const moment = require("moment")

      // a default import 
      import moment from "moment";      // TS
      const moment = require("moment").default

   激活 `esModuleInterop` 同时也相应激活了 `allowSyntheticDefaultImports`。

   .. code:: javascript

      ▲ [WARNING] Constructing "Client" will crash at run-time because it's an import 
      namespace object, not a constructor [call-import-namespace]

         src/ftpExplorer.ts:18:22:
            18 │       const client = new Client();
               ╵                          ~~~~~~

      Consider changing "Client" to a default import instead:

         src/ftpExplorer.ts:2:7:
            2 │ import * as Client from 'ftp';
            │        ~~~~~~~~~~~
            ╵        Client

      Make sure to enable TypeScript's "esModuleInterop" setting so that TypeScript's type checker
      generates an error when you try to do this. You can read more about this setting here:
      https://www.typescriptlang.org/tsconfig#esModuleInterop

   由于工程中使用了 `node-ftp <http://github.com/mscdex/node-ftp>`__ 模块用于 FTP 文件
   操作，并且在导出时使用了以下方式，将构造函数作为唯一导出物，如果导入时使用 * 符号而不用别名，那么
   就无法正确使用 FTP 客户端的构造函数。因此这种导入方式不推荐使用。因此，使用 `export =` 方式导出
   的模块需要打开 `esModuleInterop` 功能才能使用兼容性更好的默认导入：

   .. code:: javascript

      var FTP = module.exports = function() { ... }

   加载插件时，还遇到使用不稳定 API 的问题。以下信息提示缺少 extensionRuntime 访问许可。按文档配置
   好 package.json 文件，并且使用 `--enable-proposed-api <ext-id>` 命令行参数启动 VS Code，
   这样才能正常激活示范工程编译好的插件代码。插件标识字符串格式为 publisher.name：

   .. code:: javascript

      Activating extension 'vscode-samples.custom-view-samples' failed: Extension 
      'vscode-samples.custom-view-samples' CANNOT use API proposal: extensionRuntime.
      Its package.json#enabledApiProposals-property declares: [] but NOT extensionRuntime.
      The missing proposal MUST be added and you must start in extension development mode 
      or use the command line switch: --enable-proposed-api vscode-samples.custom-view-samples.

   使用不稳定 API 的流程如下，拷贝 API proposal 类型声明文件的意义就只是获得类型声明信息，对插件的
   激活机制没有影响：

   -  Use Insiders release of VS Code.
   -  To your `package.json`, add `"enabledApiProposals": ["<proposalName>"]`.
   -  Copy the corresponding files into your project's source location.
      `vscode.proposed.<proposalName>.d.ts <https://vscode.dev/github.com/microsoft/vscode/tree/main/src/vscode-dts>`__

   这个不稳定 API 的类型声明文件中只有不多几行内容，一是定义了一个枚举类型，二是向 `ExtensionContext`
   接口增加了插件运行类型属性，用于表明当前扩展插件运行时的类型。其类型就是新定义的 `ExtensionRuntime`。
   插件可以通过这个不稳定 API 来查询插件当前运行时的类型。在插件开发入门中的内容中已经说明三种插件的运行时
   只有两种：Node.js 和 Web API，对应枚举值 Node 和 Webworker。

   .. code:: javascript

      declare module 'vscode' {

         // https://github.com/microsoft/vscode/issues/104436

         export enum ExtensionRuntime {
            /**
            * The extension is running in a NodeJS extension host. 
            * Runtime access to NodeJS APIs is available.
            */
            Node = 1,
            /**
            * The extension is running in a Webworker extension host. 
            * Runtime access is limited to Webworker APIs.
            */
            Webworker = 2
         }

         export interface ExtensionContext {
            readonly extensionRuntime: ExtensionRuntime;
         }
      }

   配置好以上 API Proposal 之后，并且通过 `--enable-proposed-api` 启动 VS Code 成功激活、运行插件。
   再搜索插件代码发现根本没有使用以上 API，却提示要配置它，难道是某些依赖模块偷偷用了？令人困扰的是开发者根本
   没有获得任何与代码位置有关的提示信息，不知因何故触发了此机制。此暂且不究，待后机处理。

   *  `when clause contexts <https://code.visualstudio.com/api/references/when-clause-contexts>`__
   *  `when clause contexts <https://vscode.dev/github/microsoft/vscode-docs/blob/main/api/references/when-clause-contexts.md>`__
   *  `Contribution Points <https://vscode.dev/github/microsoft/vscode-docs/blob/main/api/references/contribution-points.md>`__
   *  `Commands <https://vscode.dev/github/microsoft/vscode-docs/blob/main/api/references/commands.md>`__
   *  `Theme Color <https://vscode.dev/github/microsoft/vscode-docs/blob/main/api/references/theme-color.md>`__
   *  `Extension Manifest <https://vscode.dev/github/microsoft/vscode-docs/blob/main/api/references/extension-manifest.md>`__
   *  `Document Selectors <https://vscode.dev/github/microsoft/vscode-docs/blob/main/api/references/document-selector.md>`__
   *  `Product Icon Reference <https://vscode.dev/github/microsoft/vscode-docs/blob/main/api/references/icons-in-labels.md>`__
   *  `Using Proposed API <https://vscode.dev/github/microsoft/vscode-docs/blob/main/api/references/using-proposed-api.md>`__
   *  `proposed-api-sample <https://github.com/microsoft/vscode-extension-samples/tree/main/proposed-api-sample>`__


   树图的数据供应者 `TreeDataProvider<T>` 有四个接口方法有、一个事件，配套使用的还有数据项对象
   `TreeItem`，它包含了常规的对象描述性属性，例如标签文字、描述、ID、图标、资源 URI、工具提示、
   命令、折叠显示的状态、可访问性信息、可选择状态，这些丰富的属性可以让 TreeView 实现 VS Code
   中的大多数视图。使用支持 LSP 语言服务功能的编辑器有一个最大的好处就是自动生成模板代码，比如要
   实现 `TreeDataProvider<T>` 这个接口，如果你不记得这个接口的四个方法和一个事件的名称，那么
   就可以通过编辑器标记在类型处的波浪线，使用快捷键 Ctrl+. 来执行 Quick Fix 功能，自动完成实现
   这个接口所需要的所有方法原型的代码。此接口 `getTreeItem` 和 `getChildren` 才是必需实现的 ：

   .. code:: javascript

      export interface TreeDataProvider<T> {
         onDidChangeTreeData?: Event<T | T[] | undefined | null | void>;
         getTreeItem(element: T): TreeItem | Thenable<TreeItem>;
         getChildren(element?: T): ProviderResult<T[]>;
         getParent?(element: T): ProviderResult<T>;
         resolveTreeItem?(item: TreeItem, element: T, token: CancellationToken): ProviderResult<TreeItem>;
      }

      export class TreeItem {
         label?: string | TreeItemLabel;
         id?: string;
         iconPath?: string | Uri | {
            light: string | Uri;
            dark: string | Uri;
         } | ThemeIcon;
         description?: string | boolean;
         resourceUri?: Uri;
         tooltip?: string | MarkdownString | undefined;
         command?: Command;
         collapsibleState?: TreeItemCollapsibleState;
         contextValue?: string;
         accessibilityInformation?: AccessibilityInformation;
         checkboxState?: TreeItemCheckboxState | {
            readonly state: TreeItemCheckboxState;
            readonly tooltip?: string;
            readonly accessibilityInformation?: AccessibilityInformation;
         };
         constructor(label: string | TreeItemLabel, collapsibleState?: TreeItemCollapsibleState);
         constructor(resourceUri: Uri, collapsibleState?: TreeItemCollapsibleState);
      }


tree-view-sample/tsconfig.json
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

   .. code:: javascript

      {
         "compilerOptions": {
      +     "moduleResolution": "nodenext",
      +     "esModuleInterop": true,
      +     "module": "None",
      +     "outFile": "out/extension.js",
            "target": "es2020",
            "lib": ["es2020"],
            "outDir": "out",
            "sourceMap": true,
            "rootDir": "src",
            "strict": true
         },
         "exclude": [
            "node_modules",
            ".vscode-test"
         ]
      }

tree-view-sample/package.json
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

   .. code:: javascript

      ┌─────────────────────────────┐      ┌──────────────────────────────────────────────┐
      │                             │      │ package.json                                 │
      │           VS Code           │      │                                              │
      │                             │      │ "contributes": {                             │
      │         Activity Bar        │      │ ┌──────────────────────────────────────────┐ │
      │                             │      │ │ "views": {                               │ │
      │                             │   ┌──┼─┼───"explorer": [                          │ │
      │ ┌─┐                         │   │  │ │    {                                     │ │
      │ │ │ File Explore ◄──────────┼───┘  │ │     "id": "jsonOutline",                 │ │
      │ └─┘┌────────────────────┐   │      │ │     "name": "Json Outline",              │ │
      │    │                    │   │ ┌────┼─┼───  "when": "jsonOutlineEnabled"         │ │
      │    │ View Container     │   │ │    │ │    },                                    │ │
      │    │                    │   │ │    │ │    {                                     │ │
      │    │ ┌────────────────┐ │   │ │    │ │     "id": "ftpExplorer",                 │ │
      │    │ │  Custome View  │◄┼───┼─┘ ┌──┼─┼──── "name": "FTP Explorer"               │ │
      │    │ ├────────────────┤ │   │   │  │ │    },                                    │ │
      │    │ │  Custome View  │◄┼───┼───┘  │ │    {                                     │ │
      │    │ ├────────────────┤ │   │      │ │     "id": "fileExplorer",                │ │
      │    │ │  Custome View  │◄┼───┼──────┼─┼───  "name": "File Explorer"              │ │
      │    │ ├────────────────┤ │   │      │ │    },                                    │ │
      │    │ │  Custome View  │◄┼───┼──┐   │ │    {                                     │ │
      │    │ └────────────────┘ │   │  └───┼─┼──── "id": "testView",                    │ │
      │    │      ......       ◄┼───┼─┐    │ │     "name": "Test View"                  │ │
      │    └────────────────────┘   │ │    │ │    },                                    │ │
      │ ┌─┐                         │ │    │ │    {                                     │ │
      │ │ │ Search                  │ └────┼─┼──── "id": "testViewDragAndDrop",         │ │
      │ └─┘                         │      │ │     "name": "Test View Drag and Drop"    │ │
      │ ┌─┐                         │      │ │    }                                     │ │
      │ │ │ Source Control Manage   │      │ │   ]                                      │ │
      │ └─┘                         │      │ │ },                                       │ │
      │ ┌─┐                         │     ┌┼─┼─"package-explorer": [                    │ │
      │ │ │ Run Debug               │     ││ │  {                                       │ │
      │ └─┘                       ┌─┼─────┼┼─┼── "id": "nodeDependencies",              │ │
      │ ┌─┐                       │ │     ││ │   "name": "Node Dependencies",           │ │
      │ │ │ Extensions            │ │     ││ │   "icon": "media/dep.svg",               │ │
      │ └─┘                       │ │     ││ │   "contextualTitle": "Package Explorer"  │ │
      │ ┌─┐                       │ │     ││ │  }                                       │ │
      │ │ │ Package Explorer ◄────┼─┼────┐││ │ ],                                       │ │
      │ └─┘┌────────────────────┐ │ │    │││ └──────────────────────────────────────────┘ │
      │  ▲ │                    │ │ │    │││ ┌──────────────────────────────────────────┐ │
      │  │ │ View Container     │ │ │◄───┼┼┼─┼──"viewsContainers": {                    │ │
      │  │ │                    │ │ │◄───┼┼┼─┼───"activitybar": [                       │ │
      │  │ │ ┌────────────────┐ │ │ │    │││ │    {                                     │ │
      │  │ │ │                │ │ │ │    │└┼─┼────►"id": "package-explorer",            │ │
      │  │ │ │  Custome View  │◄┼─┘ │    └─┼─┼─────"title": "Package Explorer",         │ │
      │  │ │ │                │ │   │    ┌─┼─┼─────"icon": "media/dep.svg"              │ │
      │  │ │ └────────────────┘ │   │    │ │ │    }                                     │ │
      │  │ └────────────────────┘   │    │ │ │   ]                                      │ │
      │  │                          │    │ │ │  },                                      │ │
      │  └──────────────────────────┼────┘ │ └──────────────────────────────────────────┘ │
      └─────────────────────────────┘      └──────────────────────────────────────────────┘

   .. code:: javascript

      {
         "name": "custom-view-samples",
         "displayName": "Custom view Samples",
         "description": "Samples for VSCode's view API",
         "version": "0.0.1",
         "publisher": "vscode-samples",
         "private": true,
         "license": "MIT",
         "repository": {
            "type": "git",
            "url": "https://github.com/Microsoft/vscode-extension-samples"
         },
         "engines": {
            "vscode": "^1.74.0"
         },
         "categories": [
            "Other"
         ],
         "activationEvents": [
            "onLanguage:json",
            "onLanguage:jsonc"
         ],
         "main": "./out/extension.js",
      +  enabledApiProposals": ["extensionRuntime"],
         "contributes": {
            "viewsContainers": {
               "activitybar": [
                  {
                     "id": "package-explorer",
                     "title": "Package Explorer",
                     "icon": "media/dep.svg"
                  }
               ]
            },
            "views": {
               "package-explorer": [
                  {
                     "id": "nodeDependencies",
                     "name": "Node Dependencies",
                     "icon": "media/dep.svg",
                     "contextualTitle": "Package Explorer"
                  }
               ],
               "explorer": [
                  {
                     "id": "jsonOutline",
                     "name": "Json Outline",
                     "when": "jsonOutlineEnabled"
                  },
                  {
                     "id": "ftpExplorer",
                     "name": "FTP Explorer"
                  },
                  {
                     "id": "fileExplorer",
                     "name": "File Explorer"
                  },
                  {
                     "id": "testView",
                     "name": "Test View"
                  },
                  {
                     "id": "testViewDragAndDrop",
                     "name": "Test View Drag and Drop"
                  }
               ]
            },
            "commands": [
               {
                  "command": "nodeDependencies.refreshEntry",
                  "title": "Refresh",
                  "icon": {
                     "light": "resources/light/refresh.svg",
                     "dark": "resources/dark/refresh.svg"
                  }
               },
               {
                  "command": "nodeDependencies.addEntry",
                  "title": "Add"
               },
               {
                  "command": "nodeDependencies.editEntry",
                  "title": "Edit",
                  "icon": {
                     "light": "resources/light/edit.svg",
                     "dark": "resources/dark/edit.svg"
                  }
               },
               {
                  "command": "nodeDependencies.deleteEntry",
                  "title": "Delete"
               },
               {
                  "command": "ftpExplorer.refresh",
                  "title": "Refresh",
                  "icon": {
                     "light": "resources/light/refresh.svg",
                     "dark": "resources/dark/refresh.svg"
                  }
               },
               {
                  "command": "ftpExplorer.openFtpResource",
                  "title": "Open FTP Resource"
               },
               {
                  "command": "ftpExplorer.revealResource",
                  "title": "Reveal in FTP View"
               },
               {
                  "command": "jsonOutline.refresh",
                  "title": "Refresh",
                  "icon": {
                     "light": "resources/light/refresh.svg",
                     "dark": "resources/dark/refresh.svg"
                  }
               },
               {
                  "command": "jsonOutline.refreshNode",
                  "title": "Refresh",
                  "icon": {
                     "light": "resources/light/refresh.svg",
                     "dark": "resources/dark/refresh.svg"
                  }
               },
               {
                  "command": "jsonOutline.renameNode",
                  "title": "Rename"
               },
               {
                  "command": "fileExplorer.refreshFile",
                  "title": "Refresh",
                  "icon": {
                     "light": "resources/light/refresh.svg",
                     "dark": "resources/dark/refresh.svg"
                  }
               },
               {
                  "command": "fileExplorer.openFile",
                  "title": "Open File"
               },
               {
                  "command": "testView.reveal",
                  "title": "Test View: Reveal"
               },
               {
                  "command": "testView.changeTitle",
                  "title": "Test View: Change Title"
               }
            ],
            "menus": {
               "commandPalette": [
                  {
                     "command": "ftpExplorer.revealResource"
                  }
               ],
               "view/title": [
                  {
                     "command": "nodeDependencies.refreshEntry",
                     "when": "view == nodeDependencies",
                     "group": "navigation"
                  },
                  {
                     "command": "jsonOutline.renameNode",
                     "when": "view == jsonOutline"
                  },
                  {
                     "command": "nodeDependencies.addEntry",
                     "when": "view == nodeDependencies"
                  },
                  {
                     "command": "jsonOutline.refresh",
                     "when": "view == jsonOutline",
                     "group": "navigation"
                  },
                  {
                     "command": "ftpExplorer.refresh",
                     "when": "view == ftpExplorer",
                     "group": "navigation"
                  }
               ],
               "view/item/context": [
                  {
                     "command": "nodeDependencies.editEntry",
                     "when": "view == nodeDependencies && viewItem == dependency",
                     "group": "inline"
                  },
                  {
                     "command": "nodeDependencies.deleteEntry",
                     "when": "view == nodeDependencies && viewItem == dependency"
                  },
                  {
                     "command": "jsonOutline.renameNode",
                     "when": "view == jsonOutline"
                  },
                  {
                     "command": "jsonOutline.refreshNode",
                     "when": "view == jsonOutline",
                     "group": "inline"
                  },
                  {
                     "command": "fileExplorer.refreshFile",
                     "when": "view == fileExplorer && viewItem == file",
                     "group": "inline"
                  }
               ]
            },
            "configuration": [
               {
                  "title": "JSON Outline",
                  "properties": {
                     "jsonOutline.autorefresh": {
                        "type": "boolean",
                        "description": "Auto refresh the JSON outline view when the contents of the json file change.",
                        "default": false
                     }
                  }
               }
            ]
         },
         "scripts": {
            "vscode:prepublish": "npm run compile",
            "compile": "tsc -p ./",
            "watch": "tsc -watch -p ./",
            "lint": "eslint"
         },
         "devDependencies": {
            "@eslint/js": "^9.13.0",
            "@stylistic/eslint-plugin": "^2.9.0",
            "@types/ftp": "^0.3.33",
            "@types/mkdirp": "^0.5.2",
            "@types/node": "^20",
            "@types/rimraf": "^2.0.2",
            "@types/vscode": "^1.73.0",
            "eslint": "^9.13.0",
            "typescript": "^5.6.2",
            "typescript-eslint": "^8.11.0"
         },
         "dependencies": {
            "ftp": "^0.3.10",
            "jsonc-parser": "^0.4.2",
            "minimist": "^1.2.6",
      +     "vscode-nls": "^5.2.0",
            "mkdirp": "^0.5.1",
            "rimraf": "^2.6.2"
         }
      }

tree-view-sample/src/extension.ts
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

   .. code:: javascript

      import * as vscode from 'vscode';

      import { DepNodeProvider, Dependency } from './nodeDependencies';
      import { JsonOutlineProvider } from './jsonOutline';
      import { FtpExplorer } from './ftpExplorer';
      import { FileExplorer } from './fileExplorer';
      import { TestViewDragAndDrop } from './testViewDragAndDrop';
      import { TestView } from './testView';

      export function activate(context: vscode.ExtensionContext) {
      	const rootPath = (vscode.workspace.workspaceFolders && (vscode.workspace.workspaceFolders.length > 0))
      		? vscode.workspace.workspaceFolders[0].uri.fsPath : undefined;

      	// Samples of `window.registerTreeDataProvider`
      	const nodeDependenciesProvider = new DepNodeProvider(rootPath);
      	vscode.window.registerTreeDataProvider('nodeDependencies', nodeDependenciesProvider);
      	vscode.commands.registerCommand('nodeDependencies.refreshEntry', () => nodeDependenciesProvider.refresh());
      	vscode.commands.registerCommand('extension.openPackageOnNpm', moduleName => vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(`https://www.npmjs.com/package/${moduleName}`)));
      	vscode.commands.registerCommand('nodeDependencies.addEntry', () => vscode.window.showInformationMessage(`Successfully called add entry.`));
      	vscode.commands.registerCommand('nodeDependencies.editEntry', (node: Dependency) => vscode.window.showInformationMessage(`Successfully called edit entry on ${node.label}.`));
      	vscode.commands.registerCommand('nodeDependencies.deleteEntry', (node: Dependency) => vscode.window.showInformationMessage(`Successfully called delete entry on ${node.label}.`));

      	const jsonOutlineProvider = new JsonOutlineProvider(context);
      	console.log(JSON.stringify({nodeDependenciesProvider, jsonOutlineProvider}));
      	vscode.window.registerTreeDataProvider('jsonOutline', jsonOutlineProvider);
      	vscode.commands.registerCommand('jsonOutline.refresh', () => jsonOutlineProvider.refresh());
      	vscode.commands.registerCommand('jsonOutline.refreshNode', offset => jsonOutlineProvider.refresh(offset));
      	vscode.commands.registerCommand('jsonOutline.renameNode', args => {
      		let offset = undefined;
      		if (args.selectedTreeItems && args.selectedTreeItems.length) {
      			offset = args.selectedTreeItems[0];
      		} else if (typeof args === 'number') {
      			offset = args;
      		}
      		if (offset) {
      			jsonOutlineProvider.rename(offset);
      		}
      	});
      	vscode.commands.registerCommand('extension.openJsonSelection', range => jsonOutlineProvider.select(range));

      	// Samples of `window.createView`
      	new FtpExplorer(context);
      	new FileExplorer(context);

      	// Test View
      	new TestView(context);

      	new TestViewDragAndDrop(context);
      }

tree-view-sample/src/fileExplorer.ts
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

   .. code:: javascript


tree-view-sample/src/ftpExplorer.ts
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

   .. code:: javascript


tree-view-sample/src/jsftp.d.ts
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

   .. code:: javascript


tree-view-sample/src/jsonOutline.ts
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

   .. code:: javascript


tree-view-sample/src/nodeDependencies.ts
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

   .. code:: javascript

      import * as vscode from 'vscode';
      import * as fs from 'fs';
      import * as path from 'path';

      export class DepNodeProvider implements vscode.TreeDataProvider<Dependency> {

         private _onDidChangeTreeData: vscode.EventEmitter<Dependency | undefined | void> = new vscode.EventEmitter<Dependency | undefined | void>();
         readonly onDidChangeTreeData: vscode.Event<Dependency | undefined | void> = this._onDidChangeTreeData.event;

         constructor(private workspaceRoot: string | undefined) {
         }

         refresh(): void {
            this._onDidChangeTreeData.fire();
         }

         getTreeItem(element: Dependency): vscode.TreeItem {
            return element;
         }

         getChildren(element?: Dependency): Thenable<Dependency[]> {
            if (!this.workspaceRoot) {
               vscode.window.showInformationMessage('No dependency in empty workspace');
               return Promise.resolve([]);
            }

            if (element) {
               return Promise.resolve(this.getDepsInPackageJson(path.join(this.workspaceRoot, 'node_modules', element.label, 'package.json')));
            } else {
               const packageJsonPath = path.join(this.workspaceRoot, 'package.json');
               if (this.pathExists(packageJsonPath)) {
                  return Promise.resolve(this.getDepsInPackageJson(packageJsonPath));
               } else {
                  vscode.window.showInformationMessage('Workspace has no package.json');
                  return Promise.resolve([]);
               }
            }

         }

         /**
         * Given the path to package.json, read all its dependencies and devDependencies.
         */
         private getDepsInPackageJson(packageJsonPath: string): Dependency[] {
            const workspaceRoot = this.workspaceRoot;
            if (this.pathExists(packageJsonPath) && workspaceRoot) {
               const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

               const toDep = (moduleName: string, version: string): Dependency => {
                  if (this.pathExists(path.join(workspaceRoot, 'node_modules', moduleName))) {
                     return new Dependency(moduleName, version, vscode.TreeItemCollapsibleState.Collapsed);
                  } else {
                     return new Dependency(moduleName, version, vscode.TreeItemCollapsibleState.None, {
                        command: 'extension.openPackageOnNpm',
                        title: '',
                        arguments: [moduleName]
                     });
                  }
               };

               const deps = packageJson.dependencies
                  ? Object.keys(packageJson.dependencies).map(dep => toDep(dep, packageJson.dependencies[dep]))
                  : [];
               const devDeps = packageJson.devDependencies
                  ? Object.keys(packageJson.devDependencies).map(dep => toDep(dep, packageJson.devDependencies[dep]))
                  : [];
               return deps.concat(devDeps);
            } else {
               return [];
            }
         }

         private pathExists(p: string): boolean {
            try {
               fs.accessSync(p);
            } catch {
               return false;
            }

            return true;
         }
      }

      export class Dependency extends vscode.TreeItem {

         constructor(
            public readonly label: string,
            private readonly version: string,
            public readonly collapsibleState: vscode.TreeItemCollapsibleState,
            public readonly command?: vscode.Command
         ) {
            super(label, collapsibleState);

            this.tooltip = `${this.label}-${this.version}`;
            this.description = this.version;
         }

         iconPath = {
            light: path.join(__filename, '..', '..', 'resources', 'light', 'dependency.svg'),
            dark: path.join(__filename, '..', '..', 'resources', 'dark', 'dependency.svg')
         };

         contextValue = 'dependency';
      }


tree-view-sample/src/testView.ts
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

   .. code:: javascript


tree-view-sample/src/testViewDragAndDrop.ts
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

   .. code:: javascript




welcome-view-content-sample
---------------------------

   https://vscode.dev/github/microsoft/vscode-extension-samples/blob/main/welcome-view-content-sample/README.md

   此插件与 Webview 无关，只是因为路径中有一个 view 才被放到这里作一个介绍。插件只是演示了如何
   注册命令，以及如何算是注册函数返回的 `Disposable` 对象，它会被 push 到上下文中的插件订阅列表
   subscriptions 之中，由插件宿主在销毁插件时自动释放插件占用的资源。逻辑与 helloworld-sample
   示例一样。

   只是多了一个 `viewsWelcome` 投放点配置，这个配置用于为自定义视图 `views` 提供欢迎内容。所谓
   欢迎内容，就是在 tree view 为空或者没有 `TreeView.message` 的情况下显示的内容。为了便利，
   单独一行的命令链接将显示为一个按钮。可以在 `view` 属性指定欢迎内容应要应用于什么视图，也就是这
   个标识对应的那个视图如果满足以上条件时，并且同时满足 `when` 从句指定条件时，就会显示 `contents`
   属性设置的欢迎内容文本。

   欢迎视图投放点设置为 `workbench.explorer.emptyView` 这个视图，通过查询 VS Code 源代码
   可以了解到这个视图就是 Explorer 视图，这个视图 ID 的缩略形式是 `explorer`。只需要打开新的
   VS Code 实例（Ctrl+N）并且不要打开任何目录，也就是 `empptyView` 空白状态视图：

   .. code:: javascript

      export class EmptyView extends ViewPane {

         static readonly ID: string = 'workbench.explorer.emptyView';
         static readonly NAME: ILocalizedString = nls.localize2('noWorkspace', "No Folder Opened");
         private _disposed: boolean = false;
         ...
      }

      export enum ViewsWelcomeExtensionPointFields {
         view = 'view',
         contents = 'contents',
         when = 'when',
         group = 'group',
         enablement = 'enablement',
      }

      export const ViewIdentifierMap: { [key: string]: string } = {
         'explorer': 'workbench.explorer.emptyView',
         'debug': 'workbench.debug.welcome',
         'scm': 'workbench.scm',
         'testing': 'workbench.view.testing'
      };


   welcome-view-content-sample/package.json

   .. code:: javascript

      {
         "name": "welcome-view-content-sample",
         "publisher": "vscode-samples",
         "description": "Uri Handler Sample",
         "version": "0.0.1",
         "private": true,
         "license": "MIT",
         "engines": {
            "vscode": "^1.95.0"
         },
         "categories": [
            "Other"
         ],
         "activationEvents": [],
         "main": "./out/extension.js",
         "contributes": {
            "commands": [
               {
               "command": "welcome-view-content-sample.hello",
               "title": "Hello World!"
               }
            ],
            "viewsWelcome": [
               {
               "view": "workbench.explorer.emptyView",
               "contents": "You can have paragraphs of text here. You can have [links](https://code.visualstudio.com) to external sources or [internal commands](command:welcome-view-content-sample.hello).\nUse new lines to have new paragraphs.\nPlace a link alone in a paragraph to make it a button\n[Hello](command:welcome-view-content-sample.hello)\n You can also render [codicons](https://microsoft.github.io/vscode-codicons/dist/codicon.html) using the $(...) syntax like: $(vscode) $(heart) $(github)\nAdd a little $(sparkle) to your welcome views!"
               }
            ]
         },
         "scripts": {
            "vscode:prepublish": "npm run compile",
            "compile": "tsc -p ./",
            "watch": "tsc -watch -p ./",
            "pretest": "npm run compile && npm run lint",
            "lint": "eslint",
            "test": "node ./out/test/runTest.js"
         },
         "devDependencies": {
            "@eslint/js": "^9.13.0",
            "@stylistic/eslint-plugin": "^2.9.0",
            "@types/glob": "^7.1.3",
            "@types/node": "^20",
            "@types/vscode": "^1.94.0",
            "@vscode/test-electron": "^2.3.9",
            "eslint": "^9.13.0",
            "glob": "^7.1.6",
            "typescript": "^5.6.2",
            "typescript-eslint": "^8.11.0"
         }
      }


   welcome-view-content-sample/src/extension.ts

   .. code:: javascript

      import * as vscode from 'vscode';

      export function activate(context: vscode.ExtensionContext) {
         const disposable = vscode.commands.registerCommand(
            'welcome-view-content-sample.hello',
            async () => {
               vscode.window.showInformationMessage('Hello world!');
            }
         );

         context.subscriptions.push(disposable);
      }


webview-codicons-sample
-----------------------

   https://vscode.dev/github/microsoft/vscode-extension-samples/blob/main/webview-codicons-sample/README.md

   此工程演示通过 Webview 来阵列 @vscode/codicons 模块中定义的图标。这是一个运行时依赖，因此
   需要先执行 `npm install @vscode/codicons` 命令安装它。可以不使用 Node 的编译流程，插件
   可以使用 node_modules 目录中的资源。这是一个基于 SVG 矢量图形制作的字体实现的图标，这是一个
   通用性较好图标库实现方式。其构建产物是一个 codicon.css 样式文件和一个 codicon.ttf 矢量字体。

   插件实现的功能只有一个 catCodicons.show 命令，就是将插件生成的展示图标的 HTML 页面展示出来。
   通过这个例子的展示，可以了解到，样式中加载的字体资源所使用的相对路径是不需要特别处理的，因为加载
   样式时使用的就是经过 `webview.asWebviewUri(vscode.Uri.joinPath(...))` 映射后的正确路径，
   所以也能正确地加载相对路径的字体。

   .. code:: javascript

      @font-face {
         font-family: "codicon";
         src: url("./codicon.ttf?9642aa1d48ab4e55aa1bf3f0b8678aa1") format("truetype");
      }


   webview-codicons-sample/package.json

   .. code:: javascript

      {
         "name": "cat-codicons",
         "description": "Cat Codicons - Using codicons in webviews",
         "version": "0.0.1",
         "publisher": "vscode-samples",
         "private": true,
         "license": "MIT",
         "engines": {
            "vscode": "^1.74.0"
         },
         "categories": [
            "Other"
         ],
         "activationEvents": [],
         "repository": {
            "type": "git",
            "url": "https://github.com/microsoft/vscode-extension-samples.git"
         },
         "main": "./out/extension.js",
         "contributes": {
            "commands": [
               {
                  "command": "catCodicons.show",
                  "title": "Show Cat Codicons",
                  "category": "Cat Codicons"
               }
            ]
         },
         "scripts": {
            "vscode:prepublish": "npm run compile",
            "compile": "tsc -p ./",
            "lint": "eslint",
            "watch": "tsc -w -p ./"
         },
         "devDependencies": {
            "@eslint/js": "^9.13.0",
            "@stylistic/eslint-plugin": "^2.9.0",
            "@types/node": "^20",
            "@types/vscode": "^1.73.0",
            "eslint": "^9.13.0",
            "typescript": "^5.6.2",
            "typescript-eslint": "^8.11.0"
         },
         "dependencies": {
            "@vscode/codicons": "^0.0.20"
         }
      }


   webview-codicons-sample/src/extension.ts

   .. code:: javascript

      import * as vscode from 'vscode';

      export function activate(context: vscode.ExtensionContext) {
         context.subscriptions.push(
            vscode.commands.registerCommand('catCodicons.show', () => {
               CatCodiconsPanel.show(context.extensionUri);
            })
         );
      }


      class CatCodiconsPanel {

         public static readonly viewType = 'catCodicons';

         public static show(extensionUri: vscode.Uri) {
            const column = vscode.window.activeTextEditor
               ? vscode.window.activeTextEditor.viewColumn
               : undefined;

            const panel = vscode.window.createWebviewPanel(
               CatCodiconsPanel.viewType,
               "Cat Codicons",
               column || vscode.ViewColumn.One
            );

            panel.webview.html = this._getHtmlForWebview(panel.webview, extensionUri);
         }

         private static _getHtmlForWebview(webview: vscode.Webview, extensionUri: vscode.Uri) {

            // Get resource paths
            const styleUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'styles.css'));
            const codiconsUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'node_modules', '@vscode/codicons', 'dist', 'codicon.css'));

            return `<!DOCTYPE html>
               <html lang="en">
               <head>
                  <meta charset="UTF-8">

                  <!--
                     Use a content security policy to only allow loading specific resources in the webview
                  -->
                  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; font-src ${webview.cspSource}; style-src ${webview.cspSource};">

                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Cat Coding</title>

                  <link href="${styleUri}" rel="stylesheet" />
                  <link href="${codiconsUri}" rel="stylesheet" />
               </head>
               <body>
                  <h1>codicons</h1>
                  <div id="icons">
                     <div class="icon"><i class="codicon codicon-account"></i> account</div>
                     <div class="icon"><i class="codicon codicon-activate-breakpoints"></i> activate-breakpoints</div>
                     <div class="icon"><i class="codicon codicon-add"></i> add</div>
                     <div class="icon"><i class="codicon codicon-archive"></i> archive</div>
                     ...
                     <div class="icon"><i class="codicon codicon-zoom-in"></i> zoom-in</div>
                     <div class="icon"><i class="codicon codicon-zoom-out"></i> zoom-out</div>
                  </div>
               </body>
               </html>`;
         }
      }



webview-sample
--------------

   https://vscode.dev/github/microsoft/vscode-extension-samples/blob/main/webview-sample/README.md

   - Creating and showing a basic webview.
   - Dynamically updating a webview's content.
   - Loading local content in a webview.
   - Running scripts in a webview.
   - Sending message from an extension to a webview.
   - Sending messages from a webview to an extension.
   - Using a basic content security policy.
   - Webview lifecycle and handling dispose.
   - Saving and restoring state when the panel goes into the background.
   - Serialization and persistence across VS Code reboots.

   此插件工程注册了两个命令，一个用来展示一张 7.5MB 动图:猫编码（cat.gif），同时使用间隔回调
   `setInterval` 中的回调函数持续地计数并展示。另外，随机地产生一条模拟 BUG 出现的消息发送到
   插件这边，插件则调用 `vscode.window.showInformationMessage()` 将这条消息通告给用户。

   *  Start cat coding session
   *  Do some refactoring

   注：cat.git 这张 7.5 MB 的动图使用 webp 格式存储只有 433 KB。

   通过移动页面到不同的编辑栏位，通过消息机来实现不同的动图。可以使用快捷键 Ctrl+Alt+Right 或者
   Ctrl+\ 来移动栏位。编辑器栏位判断通过比较 webview.viewColumn 和 vscode.ViewColumn 枚举
   类型的值实现。然后根据比较结果更新 HTML 页面加载的动图，以实现移动编辑器栏位时的不同响应效果。

   Do some refactoring 命令会向 Webview 发送一条 "refactor" 消息表示代码已经完成重构，
   页面脚本收到消息后将 coding session 命令展示的页面中的计数值减半。

   加载脚本的过程和后面的 webview-view-sample 一样使用了 none 单次使用的随机密码来提供脚本
   安全性，避免加载其它恶意脚本。

   webview-sample/package.json

   .. code:: javascript

      {
         "name": "cat-coding",
         "description": "Cat Coding - A Webview API Sample",
         "version": "0.0.1",
         "publisher": "vscode-samples",
         "private": true,
         "license": "MIT",
         "repository": {
            "type": "git",
            "url": "https://github.com/Microsoft/vscode-extension-samples"
         },
         "engines": {
            "vscode": "^1.74.0"
         },
         "categories": [
            "Other"
         ],
         "activationEvents": [
            "onWebviewPanel:catCoding"
         ],
         "main": "./out/extension.js",
         "contributes": {
            "commands": [
               {
                  "command": "catCoding.start",
                  "title": "Start cat coding session",
                  "category": "Cat Coding"
               },
               {
                  "command": "catCoding.doRefactor",
                  "title": "Do some refactoring",
                  "category": "Cat Coding"
               }
            ]
         },
         "scripts": {
            "vscode:prepublish": "npm run compile",
            "compile": "tsc -p ./",
            "lint": "eslint",
            "watch": "tsc -w -p ./"
         },
         "devDependencies": {
            "@eslint/js": "^9.13.0",
            "@stylistic/eslint-plugin": "^2.9.0",
            "@types/node": "^20",
            "@types/vscode": "^1.73.0",
            "@types/vscode-webview": "^1.57.0",
            "eslint": "^9.13.0",
            "typescript": "^5.6.2",
            "typescript-eslint": "^8.11.0"
         }
      }


   webview-sample/media/main.js

   .. code:: javascript

      // This script will be run within the webview itself
      // It cannot access the main VS Code APIs directly.

      (function () {
         const vscode = acquireVsCodeApi();

         const oldState = /** @type {{ count: number} | undefined} */ (vscode.getState());

         const counter = /** @type {HTMLElement} */ (document.getElementById('lines-of-code-counter'));
         console.log('Initial state', oldState);

         let currentCount = (oldState && oldState.count) || 0;
         counter.textContent = `${currentCount}`;

         setInterval(() => {
            counter.textContent = `${currentCount++} `;

            // Update state
            vscode.setState({ count: currentCount });

            // Alert the extension when the cat introduces a bug
            if (Math.random() < Math.min(0.001 * currentCount, 0.05)) {
                  // Send a message back to the extension
                  vscode.postMessage({
                     command: 'alert',
                     text: '🐛  on line ' + currentCount
                  });
            }
         }, 100);

         // Handle messages sent from the extension to the webview
         window.addEventListener('message', event => {
            const message = event.data; // The json data that the extension sent
            switch (message.command) {
                  case 'refactor':
                     currentCount = Math.ceil(currentCount * 0.5);
                     counter.textContent = `${currentCount}`;
                     break;
            }
         });
      }());


   webview-sample/src/extension.ts

   .. code:: javascript

      import * as vscode from 'vscode';

      const cats = {
         'Coding Cat': 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
         'Compiling Cat': 'https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif',
         'Testing Cat': 'https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif'
      };

      export function activate(context: vscode.ExtensionContext) {
         context.subscriptions.push(
            vscode.commands.registerCommand('catCoding.start', () => {
               CatCodingPanel.createOrShow(context.extensionUri);
            })
         );

         context.subscriptions.push(
            vscode.commands.registerCommand('catCoding.doRefactor', () => {
               if (CatCodingPanel.currentPanel) {
                  CatCodingPanel.currentPanel.doRefactor();
               }
            })
         );

         
         if (vscode.window.registerWebviewPanelSerializer) {
            // Make sure we register a serializer in activation event
            vscode.window.registerWebviewPanelSerializer(CatCodingPanel.viewType, {
               async deserializeWebviewPanel(webviewPanel: vscode.WebviewPanel, state: unknown) {
                  console.log(`Got state: ${state}`);
                  // Reset the webview options so we use latest uri for `localResourceRoots`.
                  webviewPanel.webview.options = getWebviewOptions(context.extensionUri);
                  CatCodingPanel.revive(webviewPanel, context.extensionUri);
               }
            });
         }
      }

      function getWebviewOptions(extensionUri: vscode.Uri): vscode.WebviewOptions {
         return {
            // Enable javascript in the webview
            enableScripts: true,

            // And restrict the webview to only loading content from our extension's `media` directory.
            localResourceRoots: [vscode.Uri.joinPath(extensionUri, 'media')]
         };
      }

      /**
      * Manages cat coding webview panels
      */
      class CatCodingPanel {
         /**
         * Track the currently panel. Only allow a single panel to exist at a time.
         */
         public static currentPanel: CatCodingPanel | undefined;

         public static readonly viewType = 'catCoding';

         private readonly _panel: vscode.WebviewPanel;
         private readonly _extensionUri: vscode.Uri;
         private _disposables: vscode.Disposable[] = [];

         public static createOrShow(extensionUri: vscode.Uri) {
            const column = vscode.window.activeTextEditor
               ? vscode.window.activeTextEditor.viewColumn
               : undefined;

            // If we already have a panel, show it.
            if (CatCodingPanel.currentPanel) {
               CatCodingPanel.currentPanel._panel.reveal(column);
               return;
            }

            // Otherwise, create a new panel.
            const panel = vscode.window.createWebviewPanel(
               CatCodingPanel.viewType,
               'Cat Coding',
               column || vscode.ViewColumn.One,
               getWebviewOptions(extensionUri),
            );

            CatCodingPanel.currentPanel = new CatCodingPanel(panel, extensionUri);
         }

         public static revive(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
            CatCodingPanel.currentPanel = new CatCodingPanel(panel, extensionUri);
         }

         private constructor(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
            this._panel = panel;
            this._extensionUri = extensionUri;

            // Set the webview's initial html content
            this._update();

            // Listen for when the panel is disposed
            // This happens when the user closes the panel or when the panel is closed programmatically
            this._panel.onDidDispose(() => this.dispose(), null, this._disposables);

            // Update the content based on view changes
            this._panel.onDidChangeViewState(
               () => {
                  if (this._panel.visible) {
                     this._update();
                  }
               },
               null,
               this._disposables
            );

            // Handle messages from the webview
            this._panel.webview.onDidReceiveMessage(
               message => {
                  switch (message.command) {
                     case 'alert':
                        vscode.window.showErrorMessage(message.text);
                        return;
                  }
               },
               null,
               this._disposables
            );
         }

         public doRefactor() {
            // Send a message to the webview webview.
            // You can send any JSON serializable data.
            this._panel.webview.postMessage({ command: 'refactor' });
         }

         public dispose() {
            CatCodingPanel.currentPanel = undefined;

            // Clean up our resources
            this._panel.dispose();

            while (this._disposables.length) {
               const x = this._disposables.pop();
               if (x) {
                  x.dispose();
               }
            }
         }

         private _update() {
            const webview = this._panel.webview;

            // Vary the webview's content based on where it is located in the editor.
            switch (this._panel.viewColumn) {
               case vscode.ViewColumn.Two:
                  this._updateForCat(webview, 'Compiling Cat');
                  return;

               case vscode.ViewColumn.Three:
                  this._updateForCat(webview, 'Testing Cat');
                  return;

               case vscode.ViewColumn.One:
               default:
                  this._updateForCat(webview, 'Coding Cat');
                  return;
            }
         }

         private _updateForCat(webview: vscode.Webview, catName: keyof typeof cats) {
            this._panel.title = catName;
            this._panel.webview.html = this._getHtmlForWebview(webview, cats[catName]);
         }

         private _getHtmlForWebview(webview: vscode.Webview, catGifPath: string) {
            // Local path to main script run in the webview
            const scriptPathOnDisk = vscode.Uri.joinPath(this._extensionUri, 'media', 'main.js');

            // And the uri we use to load this script in the webview
            const scriptUri = webview.asWebviewUri(scriptPathOnDisk);

            // Local path to css styles
            const styleResetPath = vscode.Uri.joinPath(this._extensionUri, 'media', 'reset.css');
            const stylesPathMainPath = vscode.Uri.joinPath(this._extensionUri, 'media', 'vscode.css');

            // Uri to load styles into webview
            const stylesResetUri = webview.asWebviewUri(styleResetPath);
            const stylesMainUri = webview.asWebviewUri(stylesPathMainPath);

            // Use a nonce to only allow specific scripts to be run
            const nonce = getNonce();

            return `<!DOCTYPE html>
               <html lang="en">
               <head>
                  <meta charset="UTF-8">

                  <!--
                     Use a content security policy to only allow loading images from https or from our extension directory,
                     and only allow scripts that have a specific nonce.
                  -->
                  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; img-src ${webview.cspSource} https:; script-src 'nonce-${nonce}';">

                  <meta name="viewport" content="width=device-width, initial-scale=1.0">

                  <link href="${stylesResetUri}" rel="stylesheet">
                  <link href="${stylesMainUri}" rel="stylesheet">

                  <title>Cat Coding</title>
               </head>
               <body>
                  <img src="${catGifPath}" width="300" />
                  <h1 id="lines-of-code-counter">0</h1>

                  <script nonce="${nonce}" src="${scriptUri}"></script>
               </body>
               </html>`;
         }
      }

      function getNonce() {
         let text = '';
         const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
         for (let i = 0; i < 32; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
         }
         return text;
      }


webview-view-sample
-------------------

   https://vscode.dev/github/microsoft/vscode-extension-samples/blob/main/webview-view-sample/README.md

      - Contributing a webview based view to the explorer.
      - Posting messages from an extension to a webview view
      - Posting message from a webview to an extension  
      - Persisting state in the view.
      - Contributing commands to the view title.

   此插件通过投放点 `views` 实现了一个 Activity Bar（explorer）中显示的调色板功能，配置了两个
   命令：添加颜色、清除颜色。配置了一个菜单项（view/title），显示在面板的右上角，用于清除所以添加
   的颜色。点击调色面板时，插件负责将相应的颜色代码，比如 #ffffff 插入到当前文档中。

   所有插件注册的面板（ Activity Bar）都会拥有一个自动生成的聚焦命令，将光标定位到并打开面板。
   比如 >Explorer: Focus on Calico COlors View。

   此工程一个要点是使用 `WebviewViewProvider` 作为定制 Activeity Bar 面板所需数据的供应者。
   此接口只有一个用于解决 Webview View 的方法：

   .. code:: javascript

      export interface WebviewViewProvider {
         resolveWebviewView(webviewView: WebviewView, context: WebviewViewResolveContext, token: CancellationToken): Thenable<void> | void;
      }

   插件实现代码需要处理好 `webviewView` 实例的所有事件处理，包括保存好引用，并且将 HTML 内容
   设置到 `webviewView.html` 属性值。

   有了插件中的 `WebviewViewProvider` 供应的 HTML 数据，配置文件中的自定义视图 `views` 
   就可以将渲染的 HTML 页面显示到 Activity Bar 区域。

   然后，菜单配置的 `view/title` 就是在视图面板中显示的标题菜单，通过 ID 与命令绑定，并且将
   命令的标题显示出来。使用条件从句 `"when": "view == calicoColors.colorsView"` 保证
   与自定义视图的 ID 匹配时才有效、才显示出来。如果命令配置了图标 `icon` 字段，则优先显示图标。

   HTML 中使用了 nonce 全局属性，用于提升安全性，此属性定义密码学 nonce（“只使用一次的数字”），
   内容安全策略（CSP）可以使用它来确定是否允许对给定元素进行获取。可用于允许对特定资源的获取，比如
   内联脚本、样式元素。可以帮助你避免使用 CSP unsafe-inline 指令。出于安全考虑，nonce 内容属性
   是隐藏的，尝试获取属性值 `script.getAttribute("nonce")` 将返回空字符串。
   
   Nonce（Number used once）在密码学中是一个只被使用一次的任意或非重复的随机数值。在加密技术中
   的初始向量和加密散列函数都发挥着重要作用，在各类验证协议的通信应用中确保验证信息不被重复使用以
   对抗重放攻击(Replay Attack)。Web 服务器上，使用一个密码学安全的随机数生成器生成至少 128 bit
   的 base64 编码的随机字符串。使用 16 进制编码这个 16 字节的值就是 32 个字符。每次加载页面时，
   应该以不同的方式生成 nonce（只能生成一次！）。例如，在 Node.js 中，应该这样做：

   .. code:: javascript

      const crypto = require("crypto");
      crypto.randomBytes(16).toString("base64");
      // '8IBTHwOdqNKAWeKl7plt8g=='

   代码生成的 nonce 就可用于希望允许执行的内联脚本，以及发送带有 CSP 标头的 nonce。
   需要在 Content-Security-Policy 标头中发送 nonce 值前面添加 nonce- 前缀：

   .. code:: javascript

      // Content-Security-Policy: script-src 'nonce-8IBTHwOdqNKAWeKl7plt8g=='

      // <script nonce="8IBTHwOdqNKAWeKl7plt8g==">
      // // …
      // </script>



   这个工程的核心流程如下所示，由于涉及多技术栈，VS Code + HTML DOM + JavaScript 等等，提升
   工程的复杂度，也需要开发者对各种技术更加熟练才能处理好可能出现的问题，以及插件程序的调试。

   .. code:: javascript

                 ┌─────────────────────┐                                                                  
                 │ WebviewViewProvider │                                                                  
                 └──────────▲──────────┘                                                                  
                            │                                                                             
      ┌─────────────────────┼──────────────────────┐     ┌───────────────────────────────────────────┐    
      │            ColorsViewProvider              │     │                                           │    
      │                                            │     │                  main.js               ◄──┼───┐
      │  ┌──────────────────────────────────────┐  │     │                                           │   │
      │  │ resolveWebviewView(webviewView, ...) │  │     │   const vscode = acquireVsCodeApi()       │   │
      │  └──────────────────────────────────────┘  │     │                                           │   │
      │                                            │     │                                           │   │
      │  ┌──────────────┐   "clearColors" webview.postMessage()                                      │   │
      │  │ clearColors()├────────────────┬─────────┼─────│──►window.addEventListener('message', ...) │   │
      │  └──────────────┘                │         │     │                                       │   │   │
      │  ┌────────────┐       "addColor" │         │     │   addColor()◄─────────────────────────┼   │   │
      │  │ addColor() ├──────────────────┘         │     │        ▼                              │   │   │
      │  └────────────┘                            │     │   updateColorList(colors) ◄───────────┘   │   │
      │                                            │     │        ▼            │                     │   │
      │  ┌────────────┐                            │     │   vscode.setState() │                     │   │
      │  │ getNonce() ├────────────►$              │     │                     └─────────────────┐   │   │
      │  └────────────┘                            │     │                                       │   │   │
      │                                    vscode.postMessage()                                  │   │   │
      │    webview.onDidReceiveMessage() ◄─────────┼─────│─  onColorClicked(color)               │   │   │
      │                │                           │     │                                       │   │   │
      └────────────────┼───────────────────────────┘     └───────────────────────────────────────┼───┘   │
                       │                                                                         │       │
                 vscode.SnippetString()     ┌────────────────────────────────────────────────────┼───┐   │
                       │                    │                                                    │   │   │
      window.          │                    │                  Webview HTML Context              │   │   │
      activeTextEditor?.insertSnippet()     │  ──────────────────────────────────────────────────┼─  │   │
                       │                    │                                                    │   │   │
      ┌────────────────┼────────────────┐   │ <meta http-equiv="Content-Security-Policy"         │   │   │
      │                ▼                │   │          content="default-src 'none';              │   │   │
      │          VS Code Editor         │   │             style-src ${webview.cspSource};        │   │   │
      │                                 │   │             script-src 'nonce-${nonce}';">         │   │   │
      │                                 │   │                                                    │   │   │
      │                                 │   │  <ul class="color-list">◄──────────────────────────┘   │   │
      │     #da1b22  #da1b22  #da1b22   │   │  </ul>                                                 │   │
      │                                 │   │                                                        │   │
      │                                 │   │  <button class="add-color-button">Add Color</button>   │   │
      │                                 │   │                                                        │   │
      │                                 │   │  <script nonce="${nonce}" src="${scriptUri}"></script>─┼───┘
      │                                 │   │                                                        │    
      └─────────────────────────────────┘   └────────────────────────────────────────────────────────┘    

   webview-view-sample/package.json

   .. code:: javascript

      {
        "name": "calico-colors",
        "description": "Calico Colors - A Webview View API Sample",
        "version": "0.0.1",
        "publisher": "vscode-samples",
        "private": true,
        "license": "MIT",
        "repository": {
          "type": "git",
          "url": "https://github.com/Microsoft/vscode-extension-samples"
        },
        "engines": {
          "vscode": "^1.74.0"
        },
        "extensionKind": [
          "ui",
          "workspace"
        ],
        "categories": [
          "Other"
        ],
        "activationEvents": [],
        "main": "./out/extension.js",
        "contributes": {
          "views": {
            "explorer": [
              {
                "type": "webview",
                "id": "calicoColors.colorsView",
                "name": "Calico Colors"
              }
            ]
          },
          "commands": [
            {
              "command": "calicoColors.addColor",
              "category": "Calico Colors",
              "title": "Add Color"
            },
            {
              "command": "calicoColors.clearColors",
              "category": "Calico Colors",
              "title": "Clear Colors",
              "icon": "$(clear-all)"
            }
          ],
          "menus": {
            "view/title": [
              {
                "command": "calicoColors.clearColors",
                "group": "navigation",
                "when": "view == calicoColors.colorsView"
              }
            ]
          }
        },
        "scripts": {
          "vscode:prepublish": "npm run compile",
          "compile": "tsc -p ./",
          "lint": "eslint",
          "watch": "tsc -w -p ./"
        },
        "devDependencies": {
          "@eslint/js": "^9.13.0",
          "@stylistic/eslint-plugin": "^2.9.0",
          "@types/vscode": "^1.73.0",
          "eslint": "^9.13.0",
          "typescript": "^5.6.2",
          "typescript-eslint": "^8.11.0"
        }
      }

   webview-view-sample/src/extension.ts

   .. code:: javascript

      import * as vscode from 'vscode';

      export function activate(context: vscode.ExtensionContext) {

         const provider = new ColorsViewProvider(context.extensionUri);

         context.subscriptions.push(
            vscode.window.registerWebviewViewProvider(ColorsViewProvider.viewType, provider));

         context.subscriptions.push(
            vscode.commands.registerCommand('calicoColors.addColor', () => {
               provider.addColor();
            }));

         context.subscriptions.push(
            vscode.commands.registerCommand('calicoColors.clearColors', () => {
               provider.clearColors();
            }));
      }

      class ColorsViewProvider implements vscode.WebviewViewProvider {

         public static readonly viewType = 'calicoColors.colorsView';

         private _view?: vscode.WebviewView;

         constructor(
            private readonly _extensionUri: vscode.Uri,
         ) { }

         public resolveWebviewView(
            webviewView: vscode.WebviewView,
            _context: vscode.WebviewViewResolveContext,
            _token: vscode.CancellationToken,
         ) {
            this._view = webviewView;

            webviewView.webview.options = {
               // Allow scripts in the webview
               enableScripts: true,

               localResourceRoots: [
                  this._extensionUri
               ]
            };

            webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

            webviewView.webview.onDidReceiveMessage(data => {
               switch (data.type) {
                  case 'colorSelected':
                     {
                        vscode.window.activeTextEditor?.insertSnippet(new vscode.SnippetString(`#${data.value}`));
                        break;
                     }
               }
            });
         }

         public addColor() {
            if (this._view) {
               this._view.show?.(true); // `show` is not implemented in 1.49 but is for 1.50 insiders
               this._view.webview.postMessage({ type: 'addColor' });
            }
         }

         public clearColors() {
            if (this._view) {
               this._view.webview.postMessage({ type: 'clearColors' });
            }
         }

         private _getHtmlForWebview(webview: vscode.Webview) {
            // Get the local path to main script run in the webview, then convert it to a uri we can use in the webview.
            const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'main.js'));

            // Do the same for the stylesheet.
            const styleResetUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'reset.css'));
            const styleVSCodeUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'vscode.css'));
            const styleMainUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'main.css'));

            // Use a nonce to only allow a specific script to be run.
            const nonce = getNonce();

            return `<!DOCTYPE html>
               <html lang="en">
               <head>
                  <meta charset="UTF-8">

                  <!--
                     Use a content security policy to only allow loading styles from our extension directory,
                     and only allow scripts that have a specific nonce.
                     (See the 'webview-sample' extension sample for img-src content security policy examples)
                  -->
                  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; script-src 'nonce-${nonce}';">

                  <meta name="viewport" content="width=device-width, initial-scale=1.0">

                  <link href="${styleResetUri}" rel="stylesheet">
                  <link href="${styleVSCodeUri}" rel="stylesheet">
                  <link href="${styleMainUri}" rel="stylesheet">

                  <title>Cat Colors</title>
               </head>
               <body>
                  <ul class="color-list">
                  </ul>

                  <button class="add-color-button">Add Color</button>

                  <script nonce="${nonce}" src="${scriptUri}"></script>
               </body>
               </html>`;
         }
      }

      function getNonce() {
         let text = '';
         const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
         for (let i = 0; i < 32; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
         }
         return text;
      }

   webview-view-sample/media/main.js

   .. code:: javascript

      //@ts-check

      // This script will be run within the webview itself
      // It cannot access the main VS Code APIs directly.
      (function () {
          const vscode = acquireVsCodeApi();

          const oldState = vscode.getState() || { colors: [] };

          /** @type {Array<{ value: string }>} */
          let colors = oldState.colors;

          updateColorList(colors);#da1b22

          document.querySelector('.add-color-button').addEventListener('click', () => {
              addColor();
          });

          // Handle messages sent from the extension to the webview
          window.addEventListener('message', event => {
              const message = event.data; // The json data that the extension sent
              switch (message.type) {
                  case 'addColor':
                      {
                          addColor();
                          break;
                      }
                  case 'clearColors':
                      {
                          colors = [];
                          updateColorList(colors);
                          break;
                      }

              }
          });

          /**
           * @param {Array<{ value: string }>} colors
           */
          function updateColorList(colors) {
              const ul = document.querySelector('.color-list');
              ul.textContent = '';
              for (const color of colors) {
                  const li = document.createElement('li');
                  li.className = 'color-entry';

                  const colorPreview = document.createElement('div');
                  colorPreview.className = 'color-preview';
                  colorPreview.style.backgroundColor = `#${color.value}`;
                  colorPreview.addEventListener('click', () => {
                      onColorClicked(color.value);
                  });
                  li.appendChild(colorPreview);

                  const input = document.createElement('input');
                  input.className = 'color-input';
                  input.type = 'text';
                  input.value = color.value;
                  input.addEventListener('change', (e) => {
                      const value = e.target.value;
                      if (!value) {
                          // Treat empty value as delete
                          colors.splice(colors.indexOf(color), 1);
                      } else {
                          color.value = value;
                      }
                      updateColorList(colors);
                  });
                  li.appendChild(input);

                  ul.appendChild(li);
              }

              // Update the saved state
              vscode.setState({ colors: colors });
          }

          /** 
           * @param {string} color 
           */
          function onColorClicked(color) {
              vscode.postMessage(){ type: 'colorSelected', value: color });
          }

          /**
           * @returns string
           */
          function getNewCalicoColor() {
              const colors = ['020202', 'f1eeee', 'a85b20', 'daab70', 'efcb99'];
              return colors[Math.floor(Math.random() * colors.length)];
          }

          function addColor() {
              colors.push({ value: getNewCalicoColor() });
              updateColorList(colors);
          }
      }());


