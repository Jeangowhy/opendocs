
# 🟡 Open Docs 文档阅读指南

此文档是个人的学习资源库，也是日常的笔记。因为涉及到源代码阅读，所以更需要一个高效的信息定位工具，
Sublime Text 就是这样一个优秀的选项。正如其名，Sublime Text 是一款技能超众的文本处理工具，
它的 Goto 跳转系统的设计是我最喜欢的功能之一，能够跳转到代码中的类型定义、函数定义，行号或文件。
基于此，开发了一个 [RunSnippt](https://github.com/jimboyeah/run-snippet) 插件，
帮助我快速在文档、代码之间跳转。

同时，Sublime Text 又可以通常编程 IDE 工具使用，当然这需要自己去掌握编译器命令行的使用。搭配上
LSP 支持，使用它也成为了最快捷的开发工具之一，最我的最爱。

为了方便在文档之间快速跳转，推荐在 Sublime Text 环境下阅读文档，只需要安装 run-snippet 插件，
使用 F9 快捷键跳转到光标下的文件或链接。

快速安装 RunSnippet 插件：

- Ctrl+Shift+P 打开 Sublime Text 命令调板；
- 执行 Add Repository 添加本插件代码仓库地址: https://github.com/jimboyeah/run-snippet
- 然后执行 Install Package 并输入 RunSnippt 进行确认安装；

手动添加 Repository，执行菜单： Perferences 🡒 Package Settings 🡒 Package Control 🡒 Settings

    "repositories":
    [
        "https://github.com/jimboyeah/run-snippet",
    ],

可以在 Packages 目录执行以下命令安装 RunSnippet 插件：

    git clone git@github.com/jimboyeah/run-snippet.git

添加配置文件，默认启用分组跳转，如果 Sublime Text 没有设置分组，则在当前 View 弹出文件跳转窗口，
这种行为有点打断思路。更合理的做法是 GUI 设置 2 个 Group，并且在另一个 Group 弹出文件 Panel。
Load settings from /Packages/Users/RunSnippet.sublime-settings

```json
    {
        "jump_between_group": true,
    }
```


Sublime Text 开发环境插件推荐：

1. LSP for Sublime Text https://lsp.sublimetext.io/language_servers/#deno
2. Terminus 终端模拟 https://packagecontrol.io/packages/Terminus
3. Origami 界面窗口切分 https://packagecontrol.io/packages/Origami
4. 程序化标签输入 https://packagecontrol.io/packages/Emmet
5. 加强侧边栏 https://packagecontrol.io/packages/SideBarEnhancements
6. 函数标记追踪 https://packagecontrol.io/packages/CTags
7. 智能提示 https://packagecontrol.io/packages/SublimeCodeIntel
8. 格式美化 https://packagecontrol.io/packages/HTML-CSS-JS%20Prettify
9. https://github.com/Kronuz/ColorHighlight
10. https://packagecontrol.io/packages/ColorPicker
10. https://github.com/sokolovstas/SublimeWebInspector

Color Highlighter 需要配置 ImageMagick https://imagemagick.org/ 命令行工具，推荐使用 Color Highlight：

    "icon_factory.convert_command":"C:/Program Files/ImageMagick-7.1.1-Q16-HDRI/convert.exe",

Origami 支持窗口分割根据 `auto_zoom_on_focus` 设置的比例自动进行伸缩，插件原功能维持 x y 两个方向使用同一比例值，需要实现两个方向单独比例调整，参考以下 PR 更新。

https://github.com/Jeangowhy/Origami/pull/1
upgrade zoom_pane(self, auto_zoom) to support auto zoom in X and Y direction，Origami settings update:

```json
// Automatically zoom the active pane.
// Set it to true for the default zoom, or to a user-definable
// fraction of the screen, such as "0.75" or [0.5, 0.7].
"auto_zoom_on_focus": [0.55, 0.75],
```

Origami Keyboard shortcuts
Default, these keyboard shortcuts are all two-stage, and are hidden behind command+k. First press command+k, then press the arrow keys with modifiers:

NOTE: Windows and Linux use ctrl instead of command.

    First               Then                  Action
    command+k   ▲►▼◄          travel to an adjacent pane
    command+k   shift+▲►▼◄  carry the current file to the destination
    command+k   alt+▲►▼◄      clone the current file to the destination
    command+k   ctrl+▲►▼◄     create an adjacent pane
    command+k   ctrl+shift+▲►▼◄ destroy an adjacent pane
    command+k   ctrl+alt+▲►▼◄   create an adjacent pane and carry the current file to the destination

These keyboard shortcuts are designed to make it really easy to modify the layout of your editor.

NOTE: The following keyboard shortcuts for zooming and editing pane sizes are not enabled by default due to a conflict with built-in ST features. Open the Preferences: Origami Key Bindings from the Command Palette to enable or edit them, or just use the Command Palette to trigger those commands.

    First         Then        Action
    command+k   command+z   Zoom the current pane so it takes up 90% of the screen (the fraction is changeable in the keybindings)
    command+k   shift+command+z Un-zoom: equally space all panes
    It is also possible to edit the pane sizes:

    First         Then        Action
    command+k   command+r   Adjust the top and bottom separator
    command+k   command+c   Adjust the left and right separator

In the keybindings you can change a mode which specifies which separation lines you want to edit. * ALL means all horizontal (or vertical) separators * RELEVANT means all horizontal (or vertical) separators which intersect the column (row) of the selected row. * NEAREST means top and bottom (or left and right) separators. This is the default mode. * BEFORE means top (or left) separator * AFTER means bottom (or right) separator

Automation
You can have Origami automatically zoom the active pane by setting `auto_zoom_on_focus` in your Origami user preferences. Set it to true for the default zoom, or set it to a user-definable fraction of the screen, such as 0.75.

Origami can also automatically close a pane for you once you've closed the last file in it. Just set `auto_close_empty_panes` to true in the Origami preferences.
