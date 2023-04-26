
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
