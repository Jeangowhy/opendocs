

/Visual Studio Code
===================

   FOA：我认为有两种程序必需在学习计算之前应该掌握的，第一类是 Vim 或者 Emacs，它们提供的价值是
   开放思维。第二类则是 Sublime Text 和 VS Code 这样作品，它们在开发的基础上提供更便利的易用性，
   特别是后者从开发语言到本身的实现都是开源的作品。

   VS Code Team 由著名工程师 Erich Gamma 领导，Erich 是《设计模式》作者之一，Eclipse 之父，
   拥有多年的 IDE 开发经验。VS Code 基于 Web 实现的开源编辑器，编辑器开源项目是 Monaco。技术栈
   关系如下：

   - VS Code = Electron 桌面应用 + TypeScript 脚本语言。
   - Electron = Google Chromium 开源浏览器 + Node.js 脚本运行时。
   - Node.js = Google V8 JavaScript 引擎 + API。

   Electron 原名 Atom-Shell，是 Github 为 Atom 编辑器编写的一个开源框架。它将 Chromium 
   和 Node.js 完美融合，使用 Web 技术来开发桌面应用，用 Node.js API 来访问文件系统。

   TypeScript 是 JavaScript 脚本的超集。目前 VS Code 的核心有 1100 多个 TS 文件，
   TypeScript 的语言强大的类型系统优势为多次重构提供了保障，极大提升项目的可维护性。

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

   - `Code Stable Edition`__，稳定版（蓝版），提供的功能经过深思熟虑、开发周期较长、较稳定的发布版本。
   - `Code Insiders Edition`__，探索者版（绿版），每日构建，提供最新功能和改进。
   
   两种版本有各自独立专用的插件安装目录和缓存目录：

   ==========  =======================  ================================
               Stable Edition           Insiders Edition
   ==========  =======================  ================================
   Plugin Dir  "%USERPROFILE%\.vscode"  "%USERPROFILE%\.vscode-insiders"
   Cache Dir   "%APPDATA%\Code"         "%APPDATA%\Code - Insiders"
   ==========  =======================  ================================

   以上是本地运行的 VS Code，还有第二种运行形式：`Code Web`__，网页版或者称云端运行，它是部署
   在云服务器上的稳定版本，以 Web 在线运行形式呈现，包括 vscode.dev 和 github.dev 等等，
   使用它们可以浏览、编辑远程项目（Open Remote Repository），包括浏览 github 上的项目。

   因为浏览器是有安全限制的，Web 应用在未授权的前提下禁止访问本地文件。那么 VS Code Web 版是
   如何做好开本地文件夹的？这要归于 HTML5 新增的 `File System API`__。尽管 VS Code Web
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

   .. _Code Web: https://vscode.dev/
   .. _Code Stable Edition: https://code.visualstudio.com/download
   .. _Code Insiders Edition: https://code.visualstudio.com/insiders
   .. _File System API: https://developer.mozilla.org/en-US/docs/Web/API/File_System_API

.. container:: section

   VS Code 有许多非常有创意的扩展：

   -  ``Live Share`` 实现运程协作编程而无需同步工程、环境配置。
      `Introducing Visual Studio Live Share`__
   -  `Port Forwarding`__ 通过内置 `Dev Tunnels`__ 实现本地端口转发、内网穿透，向互联网
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
      插件基于 `mxGraph`__ 提供交互图形制作的能力，并且使用体验比 Inkscape 更佳。
      打开 \*.drawio, \*.drawio.svg, \*.drawio.png 文件进入图形界面。
   -  ``Latex Sympy Calculator`` 计算文档中的 LaTeX 数学公式，并生成 = 号右侧部分。
   -  ``Emmet`` 这是一个程序化结构语言（XML/HTML）代码生成工具，几乎所有流行编辑器中都有它。
   -  ``Markdown Preview`` 为文本文档（markdown）提供实时预览。
      ``reStructuredText`` 文件格式还没有好用的插件，只有 rst 语法支持。

   Sublime Text 有一个非常实用的命令，Split selection into lines 可以将选区拆分成行选区。
   VS Code 也有类似功能，命令名称叫 Add Cursors to Line Ends。但是这两个支持多选区的工具
   都没有提供正则选区功能，看来我在 Sublime Text 上开发的 `RegularSelection`__ 插件将要再造
   一个供 VS Code 环境使用。

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

   参考官方 blogs 文章 `Integrated Terminal Performance Improvements`__

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

   各种 VS Code 使用技巧参考文档：`Visual Studio Code Tips and Tricks`__

   .. _Integrated Terminal Performance Improvements: https://code.visualstudio.com/blogs/2017/10/03/terminal-renderer
   .. _Visual Studio Code Tips and Tricks: https://code.visualstudio.com/docs/getstarted/tips-and-tricks

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

   VS Code 提供了 Screen Reader 优化模式，减少界面干扰，这种模式下，如果代码有问题，就会使用
   声音提示（audio cue signals），默认是拨竹片音效，可以在 Accessibility 配置面板修改配置。

   VS Code 有个问题，渲染大文档时，比如 10MB 尺寸的 Markdown，它渲染流程会从头处理到用户浏览
   的位置，所以当界面宽度调试时，比如侧栏面板切换显示时、窗口伸缩时，就会导致卡死，因为 VS Code
   在做“无用”功。反观 Sublime Text 或者 Vim 就不会这样低能，只渲染视图缓存区间直接避免此类问题。
   `大尺寸 Markdown 文档存在无效渲染 <https://github.com/microsoft/vscode/issues/213070>`__

   VS Code 1.84 更新全面支持浮动面板，可以手动任意面板到任意位置。比如将文件浏览器窗口拖动到
   插件面板也可以，但是这会使用文件浏览器的快捷键失效。可以使用 ``View: Reset View Locations``
   恢复默认布局（Restore Layout）。常用面板浮动命令可以搜索 ``View: Move``。

   果然，开源是未来！开源有未来！开源拥抱未来！

Tasks and Debug
***************

   VS Code 作为开源编辑器软件中拥有最佳调试体验的一员，它内置了 Node.js 运行时，提供调试
   JavaScript 或者 TypeScript 的能力，以及其它转译成它们的语言。同时也可以通过安装相应的
   调试器实现 PHP, Ruby, Go, C#, Python, C++, PowerShell 等流行语言的程序调试工作。

   VS Code 不是 IDE，却能做 IDE 的工作，要用好 VS Code，就必需掌握程序开发中使用的两套配置，
   这些功能对应 .vscode 缓存文件夹中保存的两个配置文件 ``tasks.json`` 和 ``launch.json``，
   它们分别对应 Run 菜单和 Terminal 菜单的功能，千万不要将它们搞混，它们分别是：

   - 任务系统，``tasks.json``，编写用于构建程序脚本任务，参考 `Integrate with External Tools via Tasks`__；
   - 调试系统，``launch.json``，用于调试、运行项目编译好的程序，包括脚本程序，参考 `VS Code Debugers Launch`__；

   VS Code 它们涉及到的功能分开菜单呈现，不仅是因为它们有不同的目标取向，更多的是需要 VS Code
   提供不同的逻辑功能支持。即使是运行同样的命令，通过任务系统运行、与通过调试系统运行，VS Code 会
   有完全不同的响应。

   配置文件中不仅可以使用 VS Code 预定义变量，还可以使用命令，如果存在 VS Code 预定义命令，或者
   插件实现了相应的命令。语法上也类似，比如，``${workspaceFolder}"`` 表示工作空间所在目录路径，
   而命令调用侧是 ``${command:AskForProgramName}"``，这里假设配置属性 ``type`` 指定插件
   或 VS Code 实现了这样的命令。还可以引用系统环境变量，并且 VS Code 提供了配置面板来添加
   自定义的环境变量，配置面板定位符：``terminal.integrated.env``。

   以下是配置文件中使用到的占位符号格式：

   ===================================== =======================================
    Token                                 Description                          
   ===================================== =======================================
   ``${workspaceFolder}``                The selected workspace folder path.
   ``${config:some.setting.identifier}`` The value of any configuration setting.
   ``${env:Name}``                       The value of an environment variable.
   ``${command:commandID}``              The string return value of a command.
   ===================================== =======================================

   完整变量列表参考 `Visual Studio Code Variables Reference`__ 或插件扩展 `Extension Guides`__。

   .. _Integrate with External Tools via Tasks: https://code.visualstudio.com/docs/editor/tasks
   .. _VS Code Debugers Launch: https://code.visualstudio.com/docs/editor/debugging
   .. _Visual Studio Code Variables Reference: https://code.visualstudio.com/docs/editor/variables-reference
   .. _Extension Guides: https://code.visualstudio.com/api/extension-guides/overview

.. container:: section

   ``Terminal`` 菜单提供以下用于执行脚本的功能：
   
   - Run task 运行 ``tasks.json`` 配置文件中的设置任务；
   - Run build task (Ctrl+Shift+B) 运行构建任务，Build Task 是任务的一种，用于构建项目；
   - Run active file 运行当前活动的脚本文件，根据脚本类型使用相应的解释器；
   - Run selected text 使用默认配置的 `Terminal Profiles`__ 终端运行选中的脚本块（忽略脚本文件类型）。

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
   Linux Coreutils 套件。

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

   VS Code 使用 TypeScript 开发，源代码提供了类型定义文件 `VS Code Types Declaration`__，
   v1.80 导出的公开接口有 260 涉及整个应用框架的方方面，参考 `Source Code Organization`__。
   `VS Code API`__ 文档内容根据类型声明文件中的 JSDOC 注解生成，可以直接在 VS Code 查看
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
   参考 The Kernel Documentation `ioctl based interfaces`__，`Generic Error Codes`__，
   和源代码 `ioctl.h`__。参考书：Linux Kernel Development。

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

Script and Terminal
*******************

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
   如果是 Bash，则会使用外部程序（External）形式运行脚本。`Terminal Profiles`__ 配置不同
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
   `Terminal Profiles`__ 是 VS Code 中设置可用终端类型的配置文件，它有两种检测形式，直接使用
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

JavaFX GUI with Gradle and Kotlin LSP
*************************************

   本小节涉及以下主题内容：

   * VS Code 中使用 Maven 插件及项目配置；
   * VS Code 中使用 Gradle 插件及项目配置；
   * VS Code 中使用 Kotin + LSP 项目开发配置；
   * VS Code 中使用 Java 模块 + JavaFX 图形框架项目开发配置；

   鉴于此，至少涉及 Java/Kotlin 两种编程语言，Maven/Gradle 两种自动化构建工具，以及 JavaFX
   图形构架，还会涉及 Gradle 项目配置文件使用到的 Groovy 或 Kotlin 脚本。

   Java + Kotlin 混合语言 Gradle JavaFX 项目模板： https://github.com/jimboyeah/demo/tree/hi_javafx

Maven Project
---------------

   VS Code 上开发 JavaFX 图形编程项目操作步骤：
   
   * 安装 Java 语言插件包： `Extension Pack for Java`__
   * 执行命令创建 JavaFX 项目： ``Maven: New Project...``，如果列表没有显示可点击 ``Find More``。
   * 命令面板中运行 ``Maven: Execute Commands...`` 或者直接运行终端命令 ``mvn test`` 进行测试。

.. _Extension Pack for Java: https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack

   Maven 可使用 `Exec Maven Plugin`__ 插件运行程序，但直接使用 Java 执行 jar 程序包更直接：

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
   环境中出现找不到基础类库的问题。参考文档 `Oracle JDK 22 Migration Guide`__。

   JDK 9 是模块机制与 JAR 映像机制的过度期，如果 JAR 包根目录下有 module-info.class 文件，
   则是一个已经包含了模块化信息的模块。模块信息类（module-info.class）中可以指定模块名字和版本，
   哪些 Package 可以被别的模块访问，依赖于哪些模块，这些依赖是否继续传递等。伴随模块机制引入了
   ModulePath 的概念，和 ClassPath 指定 JAR 类似，不过 ModulePath 中的 JAR 包或 Jmod
   文件被当作 Module 来处理，而 ClassPath 指定 JAR 包，无论是否模块化都作为传统 JAR 包处理。

   JDK 11 开始，JavaFX 剥离作为独立维护的项目，参考 JavaFX 文档 `JavaFX docs`__。

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

Gradle Project
---------------

   Gradle 比 Maven 项目管理工具更流行，广泛应用于 Android 和 Java 以及 C++ 等项目，
   Gradle 主要特点如下，当然 Gradle 的臃肿也是一大特点：

   1. 声明式：Gradle 使用更简洁、更易读的 Groovy DSL 编写构建脚本。
   2. 灵活性：Gradle 支持多项目、变体和自定义构建逻辑。
   3. 依赖管理：支持自动从 Maven 仓库或其他仓库下载所需的库。
   4. 插件化：丰富的插件以及各种任务定制，如编译、测试、打包、部署等。
   5. 增量构建：自动判断需要重新构建的文件，从而提高构建效率。

   可使用 Groovy 或者 Kotlin 脚本作为构建规则配置文件：build.gradle(.kts)。Gradle 构建
   系统中有三类脚本，脚本中可以使用的全局对象参考 `Gradle DSLs and API`__ 文档。

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

   Gradle 为了加速构建任务，使用 `Gradle Daemon`__ 守护进程常驻内存，作为后台进程运行，实时
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

   *  Running Gradle Builds - Core Concepts - `Gradle Basics`__
   *  Authoring Gradle Builds - Learning the Basics - `Gradle Build Lifecycle`__
   *  Optimizing Build Performance - `Gradle Daemon`__

.. _Gradle Basics: https://docs.gradle.org/current/userguide/gradle_basics.html
.. _Gradle Build Lifecycle: https://docs.gradle.org/current/userguide/build_lifecycle.html
.. _Gradle Daemon: https://docs.gradle.org/8.7/userguide/gradle_daemon.html

   Grandle 项目依赖类型说明如下，可用下表罗列的各种方法声明不同类型的依赖：

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
   依赖配置代码片段自行在 `Maven Repository`__ 查询，构建脚本中的依赖类型及关系参考 Gradle
   插件文档 `The Java Library Plugin`__，主要是依赖声明与用户自定义配置：

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

.. _JVM languages and frameworks: https://docs.gradle.org/current/userguide/java_plugin.html
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


JavaFX with Gradle and Kotlin
-----------------------------

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

   使用 Kotlin 语言编程，可选安装 Kotlin_ 智能提示插件和 `Kotlin Language`__ 语法支持插件。
   LSP 服务依赖于 `Kotlin Language Server`__，调试器依赖于 `Kotlin Debug Adapter`__。
   VS Code 安装插件后就可以添加调试配置（"type": "kotlin"）。

   如果安装了 Android Studio，那么就只可以使用它的插件目录下自带的 Kotlin 编译器，将编译器
   kotlinc 所在目录添加了环境变量搜索目录列表中。

   `Kotlin Language Server`__ 目前在 Sublime Text 4169 配置正常可用，但是 VS Code 
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
   调试信息输出，LSP 服务也终于正常工作。这似乎在运行一次调试、自动下载 `Kotlin Debug Adapter`__
   之后发生的。

.. _Gradle DSLs and API: https://docs.gradle.org/current/kotlin-dsl/index.html
.. _Kotlin: https://marketplace.visualstudio.com/items?itemName=fwcd.kotlin
.. _Kotlin Language Server: https://github.com/fwcd/kotlin-language-server
.. _Kotlin Debug Adapter: https://github.com/fwcd/kotlin-debug-adapter
.. _Kotlin Language: https://marketplace.visualstudio.com/items?itemName=mathiasfrohlich.Kotlin

   LSP 智能提示服务需要先下载 `Kotlin Language Server`__，然后在打开设置面板，搜索定位到
   kotlin.languageServer.path，并指定 LSP 客户端的启动脚本。Kotlin LSP 需要项目使用 JDK 11+。
   可能通过 JAVA_HOME 或者在项目级别中指定 Java 版本后者只影响当前项目，gradle.properties 
   文件设置局部配置，参考如下：

      org.gradle.java.home=<YOUR_JDK_PATH>

   如果，使用 JDK 9+ 可以在项目构建脚本 build.gradle.kts 中按如下任意一种形式配置：

      java {
          sourceCompatibility = JavaVersion.VERSION_1_8
          targetCompatibility = JavaVersion.VERSION_1_8
      }
      
      java {
          toolchain {
              languageVersion = JavaLanguageVersion.of(17)
          }
      }

   Grandle 文档参考 `JVM languages and frameworks`__

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


Gradle Project Init
-------------------

   Gradle 工程配置可能很复杂，出现问题需要用点策略来排除，基本策略是从简化到复杂依赖逐步解决：

   *  首先确定使用的 JDK 版本，选择兼容的 JavaFX 版本，并决定是否使用 Java 模块系统；
   *  先创建简单的非 Java 或者 Kotlin 模块项目，测试 Gradle 是否正常编译、运行项目；
   *  添加 JavaFX 等依赖模块，可逐个模块添加，以测试那个依赖模块、什么版本有兼容问题；
   *  如果编译出现问题，就要检查代码是否有问题，特别是 Kotlin 代码，注意清理旧缓存文件；

   Gradle 命令行与工程初始化参考：

   * Running Gradle Builds - `Initializing the Project`__
   * Authoring Gradle Builds - `Multi-Project Build Basics`__
   * Reference - `Command-Line Interface Reference`__
   * Reference - `Build Init Plugin`__

.. _Initializing the Project: https://docs.gradle.org/current/userguide/part1_gradle_init.html
.. _Multi-Project Build Basics: https://docs.gradle.org/8.7/userguide/intro_multi_project_builds.html
.. _Command-Line Interface Reference: https://docs.gradle.org/8.7/userguide/command_line_interface.html
.. _Build Init Plugin: https://docs.gradle.org/8.7/userguide/build_init_plugin.html

   Gradle 初始化命令是创建项目基本目录结构的快速且便利的方法，初始化命令可以创建多种项目，
   项目类型由 `Build Init Plugin`__ 提供，以下是内建初始化插件（Build init types）：
   
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
   `Settings`__ 将项目内的 app 代码文件夹当作子模块包含进顶层项目，子项目对应的路径则通过
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
   参考文档：Working with Dependencies - Controlling Transitives - `Sharing Versions`__

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
   也因此需要翻看至少两份文档：`Kotlin Build Tools - Gradle`__ 文档和 Gradle 文档，
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

   *  `Scene Builder`__ and `Scene Builder Wiki`__
   *  `Getting Started with JavaFX`__ 
   *  `JavaFX Tutorial`__ by akob Jenkov
   *  `FXGL - JavaFX Game Library`__

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

   `Intrinsics`__ 是 Kotlin 内部类，可以在编译器附带的标准库或者在 Gradle 缓存文件中找到。
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


Java Module Project
--------------------

   Java 9 引入 Java Platform Module System (JPMS)，模块信息包含以下内容及关键字：

   ========================  ============================
   ``module``                - module name
   ``requires``              - dependencies
   ``exports``               - exported packages
   ``uses`` or ``provides``  - used and provided services
   ========================  ============================

   Module System Benefits

   *  strong encapsulation
   *  reliable configuration
   *  scalable platform

   https://dev.java/learn/modules/

   这里假定项目使用 Kotlin 作为配置脚本语言，模块及构建脚本配置参考如下，根据使用到的依赖调整。
   JDK 自带模块生成工具 `jlink`__ ，Gradle 项目对应有插件 `org.beryx.jlink`__ 。启用插件，
   并配置入口模块。

.. _jlink: https://docs.oracle.com/en/java/javase/15/docs/specs/man/jlink.html
.. _org.beryx.jlink: https://badass-jlink-plugin.beryx.org/releases/latest/
.. _JlinkTask: https://github.com/beryx/badass-jlink-plugin/blob/master/src/main/groovy/org/beryx/jlink/JlinkTask.groovy

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

              stage.setTitle("JavaFX with Grandle and Kotlin")
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



Debugging and Debuginfo
***********************

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

   Node.js 或浏览器环境中的 JavaScript 脚本调试可以使用 `Chrome DevTools Protocol`__。
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

   `Debug Adapter Protocol (DAP)`__ 的出现，编辑器中集成调试器功能就只需要按统一的接口规范
   实现 Debug Adapters，调试器只要遵循同样的规范，编辑器只要遵循同样的规范，它们就可以互通使用，
   而不是重复造轮子。无论是 Sublime Text 还是 VS Code，VIM，Emacs 等等。

   .. figure:: https://microsoft.github.io/debug-adapter-protocol/img/with-DAP.png

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

   根据 `gdb 13.2`__ 文档，GCC 当前支持 '-gdwarf-3' 和 '-gdwarf-4'。

   根据 `GCC`__ 手册所述，可以使用 ``gcc -Q --help=optimizers``  命令查看所有优化相关参数。
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
   ``ldd`` 命令查看可执行程序依赖的动态库。
   ``readelf`` 检查 Linux 可执行程序格式（ELF）的文件信息。
   ``objdump`` 查看生成的目标文件包含的信息，包括反汇编、符号定义、符号重定位等。
   ``nm`` 命令列表可执行程序文件中的符号定义。

   输出的文件格式信息如果包含为 ``elf32-i386``，这表示运行于 i386 架构上的 Linux 可执行文件。
   如果是 ``elf64-x86-64`` 表示使用的是 x86_64 架构运行的代码，表明使用的编译器是 64-bit 版本。

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


LLVM Clang and Clangd (C/C++ LSP)
*********************************

   VS Code 与 Sublime Text 都是轻量级编辑器，当然后者自研的图形渲染系统比 Electron 更轻量，
   占用内存也更少。但是 VS Code 集成的调用功能更全面、更优秀，适配多种调试协议。即使调试 shell 
   脚本也不在话下，只需要安装有相应的调试器即可以。并且，基于 `Language Server Protocol`__(LSP_)
   的智能语言提示功能也更流畅，而 Sbublime Text 虽然也有 LSP 插件，但是配置过程比较繁琐。

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
   `Chris Lattner`__ ，读博期间不断地研究探索关于编译器的未知领域，发表了一篇又一篇的论文。
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

   `Chris Lattner`__ 和法国 `Fabrice Bellard`__ 都殿堂级的人类高质量程天才序员。
   他们的作品，LLVM、QEMU、FFMPEG 足以改变人类历史。

   `Chris Lattner`__ 成立了一家 ModularAI 公司，并实现用于 AI 编程的 `Mojo`__ 编程语言，
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

   * 卡内基梅隆大学现代编译器架构优化课程（2019 讲义可访问） `CMU 15-745 Fall '23 Projects`__
   * LLVM 教程文档： `LLVM Getting Started`__, `configuration files`__
   * LLVM 源代码阅读： `LLVM on github.dev`__, `LLVM on vscode.dev`__
   * ORC 实时编译技术文档： `ORC Design and Implementation`__
   * 编译器研发者 CPU 构架信息参考： `Architecture & Platform Information for Compiler Writers`__

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

   --gcc-install-dir=<arg>
   Use GCC installation in the specified directory. The directory ends with path components like ‘lib{,32,64}/gcc{,-cross}/$triple/$version’. Note: executables (e.g. ld) used by the compiler are not overridden by the selected GCC installation

   --gcc-toolchain=<arg>
   Specify a directory where Clang can find ‘include’ and ‘lib{,32,64}/gcc{,-cross}/$triple/$version’. Clang will use the GCC installation with the largest version

clang --verbose --gcc-install-dir=C:\msys64\usr\lib\gcc\x86_64-pc-msys\13.2.0 -gdwarf-2 -g3 .\k0001.c -o .build\k0003.exe

clang --verbose -gdwarf-2 -g3 .\k0001.c --gcc-toolchain=C:\msys64\usr\lib\gcc\x86_64-pc-msys\13.2.0 -o .build\k0003.exe

clang++ --verbose -gdwarf-2 -g3 .\k0001.c --gcc-toolchain=C:\msys64\usr\lib\gcc\x86_64-pc-msys\13.2.0 -o .build\k0003.exe
clang++ --verbose -gdwarf-2 -g3 .\k0001.c -o .build\k0003.exe

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
   参考 `CMake Generator`__。

   .. code-block:: sh

      cmake -S . -B .build/Debug -DCMAKE_BUILD_TYPE=Debug -G Ninja
      cmake --build .build/Debug --verbose

   .. _CMake Generator: https://cmake.org/cmake/help/latest/manual/cmake-generators.7.html

.. container:: section

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
          // Use IntelliSense to learn about possible attributes.
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


VS Code Extensions
******************

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

   - `Visual Studio Code <https://code.visualstudio.com/docs>`__
   - `Visual Studio Code - github <https://github.com/Microsoft/vscode-docs/>`__
   - `Monaco - The Editor of the Web <https://github.com/Microsoft/monaco-editor>`__
   - `Monaco Editor Samples <https://github.com/microsoft/monaco-editor-samples>`__
   - `Monaco Editor <https://microsoft.github.io/monaco-editor/>`__
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


VS Code and Android
*******************

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
   - **Kotlin Language**，此插件提供 Kotlin 语言的支持，如果需要使用可以考虑安装。
   - **Kotlin** Kotlin IDE for Visual Studio Code. Smart code completion, linting, 
      debugging, formatting and more for Kotlin in VSCode using the 
      `Kotlin language server <https://github.com/fwcd/kotlin-language-server>`__
      and the `Kotlin debug adapter <https://github.com/fwcd/kotlin-debug-adapter>`__.

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

   `JCEF - Java Chromium Embedded Framework <https://intellij-sdk-docs-cn.github.io/intellij/sdk/docs/reference_guide/jcef.html>`__
   `JBR with JCEF <https://github.com/JetBrains/JetBrainsRuntime>`__
   `The Chromium Projects <https://www.chromium.org/Home/>`__

