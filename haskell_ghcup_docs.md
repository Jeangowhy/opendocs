#!/usr/bin/env bash
URL=https://www.haskell.org/ghcup/dev/
URL=https://www.haskell.org/ghcup/guide/
URL=https://www.haskell.org/ghcup/steps/
URL=https://www.haskell.org/ghcup/install/
#pandoc -r html "$URL" -t markdown >> $0

exit
==============================================================================

# /Installation from SJTU MIRROR

[SJTUG 软件源镜像服务](https://mirror.sjtu.edu.cn/docs/ghcup)

Ghcup 是一种用于安装 Haskell 的工具，它使得用户可以轻易地在 GNU/Linux、macOS 和 FreeBSD 
上安装特定版本的 ghc，并从零开始搭建好一个全新的 Haskell 开发环境（包括 cabal 与 HLS 支持）。

使用说明

创建 ~/.ghcup/config.yaml 并输入以下内容

    url-source:
        OwnSource: "https://mirror.sjtu.edu.cn/ghcup/yaml/ghcup/data/ghcup-0.0.6.yaml"

安装 ghcup 之前完成以上步骤，于终端中执行以下指令（请不要以 root 用户执行），随后跟随屏幕上的指引完成安装。

如果您运行的是 Linux, macOS (Intel), FreeBSD 或 WSL，请执行

    curl --proto '=https' --tlsv1.2 -LsSf https://mirror.sjtu.edu.cn/ghcup/script/install.sh | sh

如果您运行的是 macOS (Apple 芯片) 请执行

    curl --proto '=https' --tlsv1.2 -LsSf https://mirror.sjtu.edu.cn/ghcup/script/install.sh | arch -x86_64 /bin/bash

This install.sh script can download and install the following binaries:

  * ghcup - The Haskell toolchain installer
  * ghc   - The Glasgow Haskell Compiler
  * cabal - The Cabal build tool for managing Haskell software
  * stack - A cross-platform program for developing Haskell projects (similar to cabal)
  * hls   - (optional) A language server for develop to integrate with their editor/IDE

故障排除

ghcup 出现形如此的错误： [ Error ] JSON decoding failed with: AesonException 
这可能是由于本机 ghcup 版本与配置文件版本不匹配造成。 ghcup 于 0.1.15.1 版本前使用 0.0.4 版本的配置文件，此版本及之后的版本使用 0.0.5+ 版本的配置文件。 请尝试将 config.yaml 中的 ghcup-0.0.6.yaml 改为 ghcup-0.0.4.yaml （抑或反之）后重试。

请注意，ghcup 上游倾向于仅更新最新版本配置文件中的内容，当版本发生变化后请及时更新配置文件版本。

通过 ghcup 安装软件包时出现如此错误： Error: Download failed ...
这一错误可能是由于现有的是旧版本 ghcup，配置文件长期未更新，其中包含的软件包版本过旧所致。
本镜像站仅保证同步最新版本配置文件中包含的软件包。并尽力保留旧版本的软件包，但当存储空间不足时，
可能随时删除旧文件。

当出现上述现象时，请首先尝试更新 ghcup 的版本，并根据 故障排除 1 的指示修改配置文件。
若 ghcup 已无法更新，可以尝试删除 ~/.ghcup 整个文件夹（这一操作将删除 ghcup 以及所有
通过 ghcup 安装的软件），并根据 使用说明 重新安装最新版本的 ghcup。

若完成以上步骤后问题仍未解决，请至 此处 向我们反馈 BUG。
https://github.com/sjtug/mirror-requests



执行 `cabal user-config init` 初始化配置文件。

修改 ~/.cabal/config 配置文件，Windows 平台上的配置文件是 %APPDATA%\cabal\config。
或者修改 cabal 安装目录下的配置文件（ $CABAL_DIR/config），添加镜像服务器：
https://mirrors.tuna.tsinghua.edu.cn/help/hackage/
Cabal ≥ 1.2.4 (GHC 8.0)

```sh
subl $CABAL_DIR/config
```

```yaml
repository mirrors.tuna.tsinghua.edu.cn
  url: http://mirrors.tuna.tsinghua.edu.cn/hackage
  secure: True
```


Stack 是基于 GHC 编译器与 Cabal 工具之上的另一个工程管理工具，Stack features：

* Installing the [Glasgow Haskell Compiler (GHC)](https://www.haskell.org/ghc/)
  automatically, in an isolated location.
* Installing packages needed for your project.
* Building your project.
* Testing your project.
* Benchmarking your project.

它也总是要访问 github 资源，在国内这种环境下很恶心。镜像服务器解决问题，参考手册文档 China-based users。

使用条件 stack >= v2.5.1，修改配置文件，添加镜像地址 hackage + stackage：
https://mirrors.tuna.tsinghua.edu.cn/help/stackage/

```sh
# Linux
# mkdir ~/.stack
# subl ~/.stack/config.yaml
# Stack's global configuration 
# subl /etc/stack/config.yaml

# Windows and MSYS64
cat >> "$APPDATA\stack\config.yaml" << EOF

setup-info-locations: ["https://mirrors.tuna.tsinghua.edu.cn/stackage/stack-setup.yaml"]
urls:
  latest-snapshot: https://mirrors.tuna.tsinghua.edu.cn/stackage/snapshots.json

snapshot-location-base: https://mirrors.tuna.tsinghua.edu.cn/stackage/stackage-snapshots/

package-index:
  download-prefix: http://mirrors.tuna.tsinghua.edu.cn/hackage/
EOF
subl "$APPDATA\stack\config.yaml"
```

此外，还需要手动下载 global-hints.yaml，如果配置好 SSH 访问 github，则可以使用以下命令完成操作。
注意，文件名不同，增加了 cache 后缀。这是由于 stack 暂时不支持配置该文件的上游地址，需要在每次用到
新版本的 GHC 时更新该文件。
https://github.dev/commercialhaskell/stackage-content/blob/master/stack/global-hints.yaml

```sh
# git clone --depth=1 git@github.com:commercialhaskell/stackage-content /pl/stackage-content
# Linux
# subl ~/.stack/pantry/global-hints-cache.yaml

# Windows
# mkdir $APPDATA/stack/pantry/
cache=global-hints-cache.yaml
cp /pl/stackage-content/stack/global-hints.yaml $APPDATA/stack/pantry/$cache
subl $APPDATA/stack/pantry/$cache
```

配置全局 stack 包括创建/修改以下文件，可以使用 `stack path --stack-root` 命令查看目录路径：

    ~/.stack/config.yaml
    ~/.stack/global-project/stack.yaml
    ~/.stack/pantry/global-hints-cache.yaml

进入准备构建的 Haskell 项目目录，运行 stack update 下载 resolver 对应的 package index，
这个索引没有国内镜像，只能从 github 拉取。

Stack 有两种使用 GHC 编译器的策略：

*  Strategy 1: Stack hooks (new, recommended) stack 2.9.1+
*  Strategy 2: System GHC (works on all stack versions)

如下配置可以让它使用系统中已经安装好的 GHC，通过 Stack 可以运行 ghci (包含调试功能的交互环境)：

```sh
$ stack config set system-ghc --global true
"$APPDATA\stack\config.yaml" has been extended. 
$ stack ghci
```


然后，再执行更新依赖包列表，并安装需要的包进行编程：

```sh
$ ghcup install cabal 
[ Info  ] verifying digest of: cabal-install-3.10.3.0-x86_64-mingw64.zip  

$ cabal update
Downloading the latest package list from hackage.haskell.org

$ cabal install QuickCheck

$ cabal init hi_haskell
$ cabal run hi_haskell
app\Main.hs:3:1: error: [GHC-87110]
    Could not load module ‘HaskellSay’.
    It is a member of the hidden package ‘haskell-say-1.0.0.0’.
    Perhaps you need to add ‘haskell-say’ to the build-depends in your .cabal file.
    Use -v to see a list of the files searched for.

$ cabal list-bin hi_haskell
...\x86_64-windows\ghc-9.8.2\hi-haskell-0.1.0.0\x...\hi_haskell.exe 
$ cabal install hi_haskell 
```

根据依赖修改 项目目录下的 .cabal 配置文件，添加依赖到 `build-depends` 列表。

以下是 cabal 脚本编程示范：

```sh
#!/usr/bin/env cabal
{- cabal:
build-depends:
  base ^>=4.19.0.0,
  haskell-say ^>=1.0.0.0
-}

import HaskellSay (haskellSay)

main :: IO ()
main = haskellSay "Hello, Haskell!"
```


SublimeHaskell
--------------

Sublime Text 安装 Haskell 语法支持插件，并配置 LSP 客户端：

    ghcup install hls

```sh
    "haskell": {
        "enabled": false,
        "command": ["c:/ghcup/bin/haskell-language-server-wrapper.exe", "lsp"],
        "selector": "source.haskell",
    },
```

SublimeHaskell 插件需要安装 hsdev 提供自动完成等功能：

    Necessary:
    ghc and a recent Haskell Platform (>= 2012 should do fine)
    hsdev cabal package (`cabal install hsdev`) for inspection, 
    enhanced completion, goto, symbol info etc.

cabal insalll 可能无法解释依赖关系（版本依赖条件不满足），无论是在国内镜像服务器还是官方服务器：

```sh
$ cabal install hsdev-0.2.2.0  
Error: cabal-3.10.3.0.exe: Could not resolve dependencies: 
[__0] next goal: hsdev (user goal)
[__0] rejecting: hsdev-0.3.4.0, hsdev-0.3.3.8, hsdev-0.3.3.6, hsdev-0.3.3.5,
hsdev-0.2.2.1 (constraint from user target requires ==0.2.2.0)
[__0] trying: hsdev-0.2.2.0
[__1] next goal: text-region (dependency of hsdev)
[__1] rejecting: text-region-0.3.1.0 (conflict: hsdev => text-region>=0.1 && <0.2)
[__1] skipping: text-region-0.3.0.0, text-region-0.2.0.0 (has the same
characteristics that caused the previous version to fail: excluded by
constraint '>=0.1 && <0.2' from 'hsdev')
[__1] trying: text-region-0.1.0.1
[__2] next goal: base (dependency of hsdev)
[__2] rejecting: base-4.19.1.0/installed-6554 (conflict: text-region =>
base>=4.8 && <4.11)
[__2] skipping: base-4.19.1.0, base-4.19.0.0, base-4.18.2.0, ... base-4.11.0.0 (has
the same characteristics that caused the previous version to fail: excluded by
constraint '>=4.8 && <4.11' from 'text-region')
[__2] rejecting: base-4.10.1.0, base-4.10.0.0, base-4.9.1.0, base-4.9.0.0, ...
base-3.0.3.1 (constraint from non-upgradeable package requires installed instance)
[__2] fail (backjumping, conflict set: base, hsdev, text-region)  
```


  *SublimeHaskell* 2.2.0
  - - -
  
  SublimeHaskell now uses new major `hsdev` release: `hsdev-0.3.3.1`.
  New version can be installed with stack using `lts-13.29`, however it has some additional dependencies. You can either install it from sources or using custom `stack.yaml` file.
  
  From sources:

  ```sh
  $ git clone https://github.com/mvoidex/hsdev -b 0.3.3.1
  $ cd hsdev
  $ stack install
  ```
  
  Using this config (lets name it `hsdev-0.3.3.1.yaml`):

  ```yaml
  packages: []
  resolver: lts-13.29
  extra-deps:
  - hsdev-0.3.3.1
  - haddock-api-2.21.0
  - hdocs-0.5.3.1
  - network-3.0.1.1
  ```
  
  Ask stack to install: `stack install hsdev --stack-yaml hsdev-0.3.3.1.yaml`
  
  `cabal install hsdev-0.3.3.1` should also work at least for `ghc-8.2.2`, `ghc-8.4.3`, `ghc-8.6.1`.
  
  Improvements
  ===
  
  Major improvements are:
  1. Now uses `haskell-names` package to resolve names. `Go to definition` now should work for local defs too. There also popup on hover which allows you to select all usages of symbol in current file.
  2. Stores data using `sqlite` which is fast and uses much less memory
  
  New commands
  ===
  There're also some new commands:
  
   - `Eval expression` — evaluate expression in context of current module, outputs evaluated result in panel
   - `Expression type` — evaluate expression type in context of current module, outputs type in panel
   - `Show symbol usages` (context menu) — shows all usages of symbol (click on location to open file)


# /Installation

-   [ Edit on GitHub](https://github.com/haskell/ghcup-hs/edit/master/docs/install.md)

::: {#toc-collapse .navbar-collapse .collapse .card .bg-secondary}
-   [Installation](#installation)
    -   [How to install](#how-to-install)
    -   [System requirements](#system-requirements)
    -   [Next steps](#next-steps)
    -   [Uninstallation](#uninstallation)
    -   [Supported tools](#supported-tools)
    -   [Supported platforms](#supported-platforms)
    -   [Manual installation](#manual-installation)
    -   [Esoteric distros](#esoteric-distros)
    -   [Vim integration](#vim-integration)
    -   [VSCode integration](#vscode-integration)
    -   [Get help](#get-help)
:::


GHCup makes it easy to install specific versions of GHC on GNU/Linux,
macOS (aka Darwin), FreeBSD and Windows and can also bootstrap a fresh
[Haskell developer environment](https://www.haskell.org/ghcup/#supported-tools) from scratch. It
follows the UNIX philosophy of 
[do one thing and do it well](https://en.wikipedia.org/wiki/Unix_philosophy#Do_One_Thing_and_Do_It_Well).
Similar in scope to
[rustup](https://github.com/rust-lang-nursery/rustup.rs),
[pyenv](https://github.com/pyenv/pyenv) and [jenv](http://www.jenv.be).

## How to install

The following commands will download the `ghcup` binary into
`~/.ghcup/bin` (or `C:\ghcup\bin` on windows) and then run it to
interactively install the [Haskell Toolchain](#supported-tools). These
commands should be run as **non-root/non-admin user**.

For Linux, macOS, FreeBSD or Windows Subsystem 2 for Linux, run this in
a terminal:

``` sh
curl --proto '=https' --tlsv1.2 -sSf https://get-ghcup.haskell.org | sh
```

For Windows, run this in a PowerShell session:

``` psh
Set-ExecutionPolicy Bypass -Scope Process -Force;[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; try { Invoke-Command -ScriptBlock ([ScriptBlock]::Create((Invoke-WebRequest https://www.haskell.org/ghcup/sh/bootstrap-haskell.ps1 -UseBasicParsing))) -ArgumentList $true } catch { Write-Error $_ }
```

There\'s also a [youtube
video](https://www.youtube.com/watch?v=bB4fmQiUYPw) explaining
installation on windows.

If you want to know what these scripts do, check out the [source code at
the
repository](https://github.com/haskell/ghcup-hs/tree/master/scripts/bootstrap).
Advanced users may want to perform a [manual
installation](#manual-installation) and GPG verify the binaries.

### Which versions get installed?

GHCup has two main channels for every tool: **recommended** and
**latest**. By default, it installs *recommended*.

*latest* follows the latest release of every tool, while *recommended*
is at the discretion of the GHCup maintainers and based on community
adoption (hackage libraries, tools like HLS, stackage support, etc.) and
known bugs.

Also see [tags and shortcuts](../guide/#tags-and-shortcuts) for more
information.

## System requirements

### Linux Debian

#### Generic

The following distro packages are required:
`build-essential curl libffi-dev libffi6 libgmp-dev libgmp10 libncurses-dev libncurses5 libtinfo5`

#### Version >= 11 && < = 12

The following distro packages are required:
`build-essential curl libffi-dev libffi7 libgmp-dev libgmp10 libncurses-dev libncurses5 libtinfo5`

#### Version >= 12

The following distro packages are required:
`build-essential curl libffi-dev libffi8 libgmp-dev libgmp10 libncurses-dev libncurses5 libtinfo5`

### Linux Ubuntu

#### Generic

The following distro packages are required:
`build-essential curl libffi-dev libffi6 libgmp-dev libgmp10 libncurses-dev libncurses5 libtinfo5`

#### Version >= 20.04 && <  20.10

The following distro packages are required:
`build-essential curl libffi-dev libffi7 libgmp-dev libgmp10 libncurses-dev libncurses5 libtinfo5`

#### Version >= 20.10 && <  23

The following distro packages are required:
`build-essential curl libffi-dev libffi8ubuntu1 libgmp-dev libgmp10 libncurses-dev libncurses5 libtinfo5`

#### Version >= 23

The following distro packages are required:
`build-essential curl libffi-dev libffi8ubuntu1 libgmp-dev libgmp10 libncurses-dev`

### Linux Fedora

#### Generic

The following distro packages are required:
`gcc gcc-c++ gmp gmp-devel make ncurses ncurses-compat-libs xz perl`

### Linux CentOS

#### Generic

The following distro packages are required:
`gcc gcc-c++ gmp gmp-devel make ncurses ncurses-compat-libs xz perl`

#### Version >= 7 && <  8

The following distro packages are required:
`gcc gcc-c++ gmp gmp-devel make ncurses xz perl`

### Linux Alpine

#### Generic

The following distro packages are required:
`binutils-gold curl gcc g++ gmp-dev libc-dev libffi-dev make musl-dev ncurses-dev perl tar xz`

### Linux (generic)

#### Generic

You need the following packages: curl g++ gcc gmp make ncurses realpath
xz-utils. Consult your distro documentation on the exact names of those
packages.

### Darwin

#### Generic

On OS X, in the course of running ghcup you will be given a dialog box
to install the command line tools. Accept and the requirements will be
installed for you. You will then need to run the command again. On
Darwin M1 you might also need a working llvm installed (e.g. via brew)
and have the toolchain exposed in PATH.

### FreeBSD

#### Generic

The following distro packages are required:
`curl gcc gmp gmake ncurses perl5 libffi libiconv`

### Windows

#### Generic

On Windows, msys2 should already have been set up during the
installation, so most users should just proceed. If you are installing
manually, make sure to have a working mingw64 toolchain and shell.

## Next steps

1.  Follow the [First steps guide](../steps) on how to build a \"Hello
    world\" program, use `ghc`, run an interactive REPL and create a
    Haskell project
2.  To understand the difference and overlap of `stack` and `cabal`,
    read on
    [here](https://gist.github.com/merijn/8152d561fb8b011f9313c48d876ceb07)
3.  To learn Haskell proper check out the links at [How to learn Haskell
    proper](../steps#how-to-learn-haskell-proper)
4.  To learn more about Haskell Toolchain management, check out the
    [ghcup user guide](../guide/)

## Uninstallation

On linux, just run `ghcup nuke`, then make sure any ghcup added lines in
your `~/.bashrc` (or similar) are removed.

On windows, right click on the `Uninstall Haskell.ps1` PowerShell script
on your Desktop and select *Run with PowerShell*.

## Supported tools

GHCup supports the following tools, which are also known as the
**Haskell Toolchain**:

Show all supported [GHC](https://www.haskell.org/ghc/) versions

  GHC Version   Tags
  ------------- ---------------------------------------------------
  9.8.1         [latest]{style="color:blue"}, base-4.19.0.0
  9.6.3         base-4.18.1.0
  9.6.2         base-4.18.0.0
  9.6.1         base-4.18.0.0
  9.4.7         [recommended]{style="color:green"}, base-4.17.2.0
  9.4.6         base-4.17.2.0
  9.4.5         base-4.17.1.0
  9.4.4         base-4.17.0.0
  9.4.3         base-4.17.0.0
  9.4.2         base-4.17.0.0
  9.4.1         base-4.17.0.0
  9.2.8         base-4.16.4.0
  9.2.7         base-4.16.4.0
  9.2.6         base-4.16.4.0
  9.2.5         base-4.16.4.0
  9.2.4         base-4.16.3.0
  9.2.3         base-4.16.2.0
  9.2.2         base-4.16.1.0
  9.2.1         base-4.16.0.0
  9.0.2         base-4.15.1.0
  9.0.1         base-4.15.0.0
  8.10.7        base-4.14.3.0
  8.10.6        base-4.14.3.0
  8.10.5        base-4.14.2.0
  8.10.4        base-4.14.1.0
  8.10.3        base-4.14.1.0
  8.10.2        base-4.14.1.0
  8.10.1        base-4.14.0.0
  8.8.4         base-4.13.0.0
  8.8.3         base-4.13.0.0
  8.8.2         base-4.13.0.0
  8.8.1         base-4.13.0.0
  8.6.5         base-4.12.0.0
  8.6.4         base-4.12.0.0
  8.6.3         base-4.12.0.0
  8.6.2         base-4.12.0.0
  8.6.1         base-4.12.0.0
  8.4.4         base-4.11.1.0
  8.4.3         base-4.11.1.0
  8.4.2         base-4.11.1.0
  8.4.1         base-4.11.0.0
  8.2.2         base-4.10.1.0
  8.0.2         base-4.9.1.0
  7.10.3        base-4.8.2.0

Show all supported
[cabal-install](https://cabal.readthedocs.io/en/stable/) versions

  Cabal Version   Tags
  --------------- ------------------------------------
  3.10.2.0        [latest]{style="color:blue"}
  3.10.1.0        
  3.8.1.0         
  3.6.2.0         [recommended]{style="color:green"}
  3.6.0.0         
  3.4.1.0         
  3.4.0.0         
  3.2.0.0         
  3.0.0.0         
  2.4.1.0         

Show all supported
[HLS](https://haskell-language-server.readthedocs.io/en/stable/)
versions

  HLS Version   Tags
  ------------- ------------------------------------------------------------------
  2.4.0.0       [latest]{style="color:blue"}, [recommended]{style="color:green"}
  2.3.0.0       
  2.2.0.0       
  2.1.0.0       
  2.0.0.1       
  2.0.0.0       
  1.10.0.0      
  1.9.1.0       
  1.9.0.0       
  1.8.0.0       
  1.7.0.0       
  1.6.1.0       
  1.6.0.0       
  1.5.1         
  1.5.0         
  1.4.0         
  1.3.0         
  1.2.0         
  1.1.0         

Show all supported
[Stack](https://docs.haskellstack.org/en/stable/README/) versions

  Stack Version   Tags
  --------------- ------------------------------------
  2.13.1          [latest]{style="color:blue"}
  2.11.1          [recommended]{style="color:green"}
  2.9.3           
  2.9.1           
  2.7.5           
  2.7.3           
  2.7.1           
  2.5.1           

## Supported platforms

This list may not be exhaustive and specifies support for bindists only.

  Platform              Architecture   ghcup   GHC   cabal   HLS   stack
  --------------------- -------------- ------- ----- ------- ----- -------
  Windows 8.1           amd64          ✅      ✅    ✅      ✅    ✅
  Windows 10            amd64          ✅      ✅    ✅      ✅    ✅
  Windows Server 2016   amd64          ✅      ✅    ✅      ✅    ✅
  Windows Server 2019   amd64          ✅      ✅    ✅      ✅    ✅
  Windows Server 2022   amd64          ✅      ✅    ✅      ✅    ✅
  Windows WSL1          amd64          ❌      ❔    ❔      ❔    ❔
  Windows WSL2          amd64          ✅      ✅    ✅      ✅    ✅
  MacOS >= 10.13        amd64          ✅      ✅    ✅      ✅    ✅
  MacOS < 10.13         amd64          ❌      ❔    ❔      ❔    ❔
  MacOS                 aarch64        ✅      ✅    ✅      ⚠️    ❌
  FreeBSD               amd64          ✅      ⚠️    ✅      ⚠️    ❌
  Linux generic         x86            ✅      ✅    ✅      ✅    ✅
  Linux generic         amd64          ✅      ✅    ✅      ✅    ✅
  Linux generic         aarch64        ✅      ⚠️    ✅      ⚠️    ❌
  Linux generic         armv7          ✅      ⚠️    ✅      ⚠️    ❌

### Windows < 8.1

No longer supported for recent GHCs, according to manual testing of GHC
9.8.1 on Windows 7. According to [msys2
documentation](https://www.msys2.org/docs/windows_support), the minimum
Windows version is now 8.1.

### WSL1

Unsupported. GHC may or may not work. Upgrade to WSL2.

### MacOS < 10.13

Not supported. Would require separate binaries, since >=10.13 binaries
are incompatible. Please upgrade.

### MacOS aarch64

HLS bindists are still experimental. Stack has only unofficial binaries
for this platform. There are various issues with GHC itself.

### FreeBSD

Lacks some upstream bindists and may need compat libs (such as
`misc/compat12x`). HLS bindists are experimental. Only latest FreeBSD is
generally supported.

### Linux ARMv7/AARCH64

Lower availability of bindists. Stack and HLS binaries are experimental.

## Manual installation

### Unix

Download the binary for your platform at
<https://downloads.haskell.org/~ghcup/> and place it into your `PATH`
anywhere.

If you want to GPG verify the binaries, import the following keys first:

``` sh
gpg --batch --keyserver keyserver.ubuntu.com --recv-keys 7D1E8AFD1D4A16D71FADA2F2CCC85C0E40C06A8C
gpg --batch --keyserver keyserver.ubuntu.com --recv-keys FE5AB6C91FEA597C3B31180B73EDE9E8CFBAEF01
gpg --batch --keyserver keyserver.ubuntu.com --recv-keys 88B57FCF7DB53B4DB3BFA4B1588764FBE22D19C4
gpg --batch --keyserver keyserver.ubuntu.com --recv-keys EAF2A9A722C0C96F2B431CA511AAD8CEDEE0CAEF
```

Then adjust your `PATH` in `~/.bashrc` (or similar, depending on your
shell) like so:

``` sh
export PATH="$HOME/.cabal/bin:$HOME/.ghcup/bin:$PATH"
```

### Windows

1.  Install ghcup binary
    -   choose a base directory for installation, e.g. `C:\` that has
        sufficient space
    -   then create the directory, e.g. `C:\ghcup\bin`
    -   download the binary:
        https://downloads.haskell.org/\~ghcup/x86_64-mingw64-ghcup.exe
    -   place it as `ghcup.exe` into e.g. `C:\ghcup\bin`
2.  Install MSYS2
    -   download https://repo.msys2.org/distrib/msys2-x86_64-latest.exe
        and execute it
    -   remember the installation destination you choose (default is
        `C:\msys64`)
    -   finish the installation
3.  Add environment variables and update `Path`
    -   open search bar and type in \"Edit the system environment
        variables\", then open it
    -   click on \"Environment Variables\...\" at the near bottom
    -   in the upper half, select `Path` variable and double click on it
    -   in the new window, click \"New\", type in `C:\ghcup\bin`
        (depending on step 1.) and press enter
    -   click \"OK\" at the bottom
    -   in the upper half, click on \"New\...\"
    -   enter `GHCUP_MSYS2` under \"Variable name\" and the installation
        destination from step 2. under \"Variable value\"
    -   click \"OK\" at the bottom
    -   in the upper half, click on \"New\...\"
    -   enter `GHCUP_INSTALL_BASE_PREFIX` under \"Variable name\" and
        based on the installation destination from step 1. enter the
        device directory (default `C:\`)
    -   click \"OK\" at the bottom
    -   in the upper half, click on \"New\...\"
    -   enter `CABAL_DIR` under \"Variable name\" and based on the
        installation destination from step 1. enter the device
        directory + `cabal` subdir (default `C:\cabal`)
    -   click \"OK\" at the bottom
    -   click \"OK\" at the bottom
    -   click \"OK\" at the bottom
4.  Install tools
    -   open powershell
    -   run `ghcup install ghc --set recommended`
    -   run `ghcup install cabal latest`
    -   run `ghcup install stack latest`
    -   run `ghcup install hls latest`
    -   run `cabal update`
5.  Update msys2
    -   run `ghcup run -m -- pacman --noconfirm -Syuu`
    -   run `ghcup run -m -- pacman --noconfirm -Syuu`
    -   run
        `ghcup run -m -- pacman --noconfirm -S --needed curl autoconf mingw-w64-x86_64-pkgconf`
    -   run `ghcup run -m -- pacman --noconfirm -S ca-certificates`
6.  Update cabal config
    -   go to e.g. `C:\cabal` (based on device you picked in 1.)
    -   open file `config`
    -   uncomment `extra-include-dirs` (the `--`) and add the value
        (depending on installation destination you chose in 2.), e.g.
        `C:\msys64\mingw64\include`\... so the final line should be
        `extra-include-dirs: C:\msys64\mingw64\include`
    -   uncomment `extra-lib-dirs` and do the same, adding
        `C:\msys64\mingw64\lib`
    -   uncomment `extra-prog-path` and set it to
        `C:\ghcup\bin, C:\cabal\bin, C:\msys64\mingw64\bin, C:\msys64\usr\bin`,
        depending on your install destinations from 1. and 2.
7.  Set up msys2 shell
    -   run
        `ghcup run -m -- sed -i -e 's/db_home:.*$/db_home: windows/' /etc/nsswitch.conf`
        to make the HOME in your msys2 shell match the one from windows
    -   make a desktop shortcut from `C:\msys64\msys2_shell.cmd`, which
        will allow you to start a proper msys2 shell
    -   run
        `ghcup run -m -- sed -i -e 's/#MSYS2_PATH_TYPE=.*/MSYS2_PATH_TYPE=inherit/' /c/msys64/msys2.ini`
    -   run
        `ghcup run -m -- sed -i -e 's/rem set MSYS2_PATH_TYPE=inherit/set MSYS2_PATH_TYPE=inherit/' /c/msys64/msys2_shell.cmd`

All set. You can run `cabal init` now in an empty directory to start a
project.

## Esoteric distros

### Void Linux

Since void linux can be installed with glibc and musl, it\'s hard to
support correctly with ghcup. One way to make ghcup work on **Void Linux
musl** is to follow the [Overriding distro
detection](../guide/#overriding-distro-detection) section and tell it to
consider Alpine bindists only. E.g.:

``` sh
curl --proto '=https' --tlsv1.2 -sSf https://get-ghcup.haskell.org | BOOTSTRAP_HASKELL_MINIMAL=1 sh
source ~/.ghcup/env
ghcup config set platform-override '{ "arch": "A_64", "platform": { "contents": "Alpine", "tag": "Linux" }, "version": "3.17" }'
ghcup install cabal --set latest
ghcup install ghc --set latest
ghcup install stack --set latest
ghcup install hls --set latest
```

## Vim integration

See [ghcup.vim](https://github.com/hasufell/ghcup.vim).

## VSCode integration

The developers of the Haskell Language Server offer an
[extension](https://github.com/haskell/vscode-haskell) tightly
integrated with the [Haskell Language
Server](https://github.com/haskell/haskell-language-server). To get
started:

1.  Install GHCup. During installation, opt in to install the Haskell
    Language Server (HLS).
2.  Install the extension (from VSCode: Ctrl + P and then
    `ext install haskell.haskell`).
3.  Make sure your project uses the GHC version installed from GHCup
    (otherwise HLS is likely to fail on launch):
    -   instructions for
        [stack](https://docs.haskellstack.org/en/stable/yaml_configuration/#system-ghc)

On Linux, some users have reported an issue when VSCode is not launched
from a terminal (\"cannot find ghc version\"). A solution is to [let HLS
know about your GHCup on
\$PATH](https://github.com/haskell/vscode-haskell#stackcabalghc-can-not-be-found).

## Get help

-   [Libera IRC chat on #haskell-ghcup or
    #haskell](https://kiwiirc.com/nextclient/irc.libera.chat/?nick=Guest%7C?#haskell,#haskell-ghcup)
-   [GHCup issue
    tracker](https://github.com/haskell/ghcup-hs/issues/new)
-   [Matrix](https://app.element.io/#/room/#haskell-tooling:matrix.org)
-   [Discord](https://discord.gg/pKYf3zDQU7)
:::
::::::::
:::::::::

------------------------------------------------------------------------

Documentation built with [MkDocs](https://www.mkdocs.org/).



# /First steps

-   [Edit on GitHub](https://github.com/haskell/ghcup-hs/edit/master/docs/steps.md)

::: {#toc-collapse .navbar-collapse .collapse .card .bg-secondary}
-   [First steps](#first-steps)
    -   [Compiling programs with ghc](#compiling-programs-with-ghc)
    -   [An interactive environment](#an-interactive-environment)
    -   [Creating a proper package with modules](#creating-a-proper-package-with-modules)
-   [Where to go from here](#where-to-go-from-here)
    -   [How to learn Haskell proper](#how-to-learn-haskell-proper)
    -   [Projects to contribute to](#projects-to-contribute-to)
:::

In this guide we\'ll take a look at a few core tools that are installed
with the Haskell toolchain, namely, `ghc`, `runghc` and `ghci`. These
tools can be used to compile, interpret or explore Haskell programs.

First, let\'s start by opening your system\'s command line interface and
running `ghc --version` to make sure we have successfully installed a
Haskell toolchain:

    ➜ ghc --version
    The Glorious Glasgow Haskell Compilation System, version 8.10.7

If this fails, consult [the Getting started page](../install) for
information on how to install Haskell on your computer.

This guide is partly based on [Gil Mizrahi\'s
blog](https://gilmi.me/blog/post/2021/08/14/hs-core-tools).

## Compiling programs with ghc

Running `ghc` invokes the Glasgow Haskell Compiler (GHC), and can be
used to compile Haskell modules and programs into native executables and
libraries.

Create a new Haskell source file named `hello.hs`, and write the
following code in it:

``` hs
main = putStrLn "Hello, Haskell!"
```

Now, we can compile the program by invoking `ghc` with the file name:

``` sh
➜ ghc hello.hs
[1 of 1] Compiling Main             ( hello.hs, hello.o )
Linking hello ...
```

For more in-depth information about the files `ghc` produces, follow the
[GHC user guide](https://downloads.haskell.org/ghc/latest/docs/html/users_guide/using.html#getting-started-compiling-programs)
guide.

Now we run our program:

``` sh
➜ ./hello 
Hello, Haskell!
```

Alternatively, we can skip the compilation phase by using the command
`runghc`:

``` sh
➜ runghc hello.hs
Hello, Haskell!
```

`runghc` interprets the source file instead of compiling it and does not
create build artifacts. This makes it very useful when developing
programs and can help accelerate the feedback loop. More information
about `runghc` can be found in the [GHC user
guide](https://downloads.haskell.org/ghc/latest/docs/html/users_guide/runghc.html).

### Turning on warnings

The `-Wall` flag will enable GHC to emit warnings about our code.

``` sh
➜ ghc -Wall hello.hs -fforce-recomp
[1 of 1] Compiling Main             ( hello.hs, hello.o )

hello.hs:1:1: warning: [-Wmissing-signatures]
    Top-level binding with no type signature: main :: IO ()
  |
1 | main = putStrLn "Hello, Haskell!"
  | ^^^^
Linking hello ...
```

While Haskell can infer the types of most expressions, it is recommended
that top-level definitions are annotated with their types.

Now our `hello.hs` source file should looks like this:

``` hs
main :: IO ()
main = putStrLn "Hello, world!"
```

And now GHC will compile `hello.hs` without warnings.

## An interactive environment

GHC provides an interactive environment in a form of a
Read-Evaluate-Print Loop (REPL) called GHCi. To enter the environment
run the program `ghci`.

``` sh
➜ ghci
GHCi, version 9.0.2: https://www.haskell.org/ghc/  :? for help
ghci> 
```

It provides an interactive prompt where Haskell expressions can be
written and evaluated.

For example:

``` sh
ghci> 1 + 1
2
ghci> putStrLn "Hello, world!"
Hello, world!
```

We can define new names:

``` sh
ghci> double x = x + x
ghci> double 2
4
```

We can write multi-line code by surrounding it with `:{` and `:}`:

``` hs
ghci> :{
| map f list =
|     case list of
|         [] -> []
|         x : xs -> f x : map f xs
| :}
ghci> map (+1) [1, 2, 3]
[2,3,4]
```

We can import Haskell source files using the `:load` command (`:l` for
short):

``` sh
ghci> :load hello.hs
[1 of 1] Compiling Main             ( hello.hs, interpreted )
Ok, one module loaded.
ghci> main
Hello, Haskell!
```

As well as import library modules:

``` sh
ghci> import Data.Bits
ghci> shiftL 32 1
64
ghci> clearBit 33 0
32
```

We can even ask what the type of an expression is using the `:type`
command (`:t` for short):

``` sh
λ> :type putStrLn
putStrLn :: String -> IO ()
```

To exit `ghci`, use the `:quit` command (or `:q` for short)

``` sh
ghci> :quit
Leaving GHCi.
```

A more thorough introduction to GHCi can be found in the 
[GHC user guide](https://downloads.haskell.org/~ghc/latest/docs/html/users_guide/ghci.html).

### Using external packages in ghci

By default, GHCi can only load and use packages that are 
[included with the GHC installation](https://downloads.haskell.org/ghc/9.4.2/docs/users_guide/9.4.2-notes.html#included-libraries).

However, users of the [cabal-install](https://www.haskell.org/cabal) and
[stack](http://haskellstack.org) build tools can download and load
external packages very easily using the following commands:

cabal-install:

``` sh
cabal repl --build-depends async,say
```

Stack:

``` sh
stack exec --package async --package say -- ghci
```

And the modules of the relevant packages will be available for import:

``` sh
GHCi, version 9.0.1: https://www.haskell.org/ghc/  :? for help
ghci> import Control.Concurrent.Async 
ghci> import Say
ghci> concurrently_ (sayString "Hello") (sayString "World")
Hello
World
```

Stack users can also use this feature with `runghc` and `ghc` by
replacing `ghci` in the command above, and cabal-install users can
generate an environment file that will make `async` and `say` visible
for GHC tools in the current directory using this command:

``` sh
cabal install --lib async say --package-env .
```

Many more packages are waiting for you on
[Hackage](https://hackage.haskell.org).

## Creating a proper package with modules

The previous methods to compile Haskell code are for quick experiments
and small programs. Usually in Haskell, we create cabal projects, where
build tools such as `cabal-install` or `stack` will install necessary
dependencies and compile modules in correct order. For simplicity\'s
sake, this section will only use `cabal-install`.

To get started, run:

``` sh
mkdir haskell-project
cd haskell-project
cabal init --interactive
```

If you let it generate a simple project with sensible defaults, then you
should have these files:

-   `src/MyLib.hs`: the library module of your project
-   `app/Main.hs`: the entry point of your project
-   `haskell-project.cabal`: the \"cabal\" file, describing your
    project, its dependencies and how it\'s built

To build the project, run:

``` sh
cabal build
```

To run the main executable, run:

``` sh
➜ cabal run
Hello, Haskell!
someFunc
```

### Adding dependencies

Now let\'s add a dependency and adjust our library module. Open
`haskell-project.cabal` and find the library section:

    library
        exposed-modules:  MyLib

        -- Modules included in this library but not exported.
        -- other-modules:

        -- LANGUAGE extensions used by modules in this package.
        -- other-extensions:
        build-depends:    base ^>=4.14.3.0
        hs-source-dirs:   src
        default-language: Haskell2010

The interesting parts here are `exposed-modules` and `build-depends`. To
add a dependency, it should look like this:

        build-depends:    base ^>=4.14.3.0
                        , directory

Now open `src/MyLib.hs` and change it to:

``` hs
module MyLib (someFunc) where

import System.Directory

someFunc :: IO ()
someFunc = do
  contents <- listDirectory "src"
  putStrLn (show contents)
```

### Adding modules

To add a module to your package, adjust `exposed-modules`, like so

        exposed-modules:  MyLib
                          OtherLib

then create `src/OtherLib.hs` with the following contents:

``` hs
module OtherLib where

otherFunc :: String -> Int
otherFunc str = length str
```

To use this function interactively, we can run:

``` sh
➜ cabal repl
ghci> import OtherLib
ghci> otherFunc "Hello Haskell"
13
```

For further information about how to manage Haskell projects see the
[Cabal user
guide](https://cabal.readthedocs.io/en/stable/getting-started.html).

# Where to go from here

::: {.text-center .main-buttons}
[Discover Haskell packages](https://hackage.haskell.org/){.btn
.btn-primary role="button"} [The standard
library](https://hackage.haskell.org/package/base){.btn .btn-primary
role="button"} [Editor setup with
HLS](https://haskell-language-server.readthedocs.io/en/stable/installation.html){.btn
.btn-primary role="button"} [Online
playground](https://play.haskell.org/){.btn .btn-primary role="button"}
:::

## How to learn Haskell proper

To learn Haskell, try any of those:

-   A beginner friendly [4-lectures
    course](https://github.com/haskell-beginners-2022/course-plan) with
    exercises (by [Dmitrii Kovanikov](https://kodimensional.dev/))
-   An in-depth university [CIS 194 Haskell
    course](https://www.cis.upenn.edu/~cis194/spring13/) including
    exercises (by [Brent Yorgey](https://byorgey.wordpress.com/))

## Projects to contribute to

-   <https://github.com/haskell/haskell-language-server>
-   <https://github.com/haskell/cabal>
-   <https://github.com/commercialhaskell/stack>
-   <https://github.com/haskell/ghcup-hs>
-   <https://github.com/jgm/pandoc>
-   <https://github.com/simonmichael/hledger>
-   <https://github.com/koalaman/shellcheck>
::::
:::::::::
::::::::::

------------------------------------------------------------------------

Documentation built with [MkDocs](https://www.mkdocs.org/).



# /User Guide

This is a more in-depth guide specific to GHCup. `ghcup --help` is your
friend.

-   [Edit on GitHub](https://github.com/haskell/ghcup-hs/edit/master/docs/guide.md)

::: {#toc-collapse .navbar-collapse .collapse .card .bg-secondary}
-   [User Guide](#user-guide)
    -   [Basic usage](#basic-usage)
    -   [Manpages](#manpages)
    -   [Shell-completion](#shell-completion)
    -   [Portability](#portability)
-   [Configuration](#configuration)
    -   [Overriding distro detection](#overriding-distro-detection)
    -   [Env variables](#env-variables)
    -   [Caching](#caching)
    -   [Metadata](#metadata)
    -   [Stack integration](#stack-integration)
    -   [Mirrors (proper)](#mirrors-proper)
-   [More on installation](#more-on-installation)
    -   [Customisation of the installation scripts](#customisation-of-the-installation-scripts)
    -   [Installing custom bindists](#installing-custom-bindists)
    -   [Compiling from source](#compiling-from-source)
    -   [Cross support](#cross-support)
    -   [Isolated installs](#isolated-installs)
    -   [Continuous integration](#continuous-integration)
    -   [GPG verification](#gpg-verification)
-   [Tips and tricks](#tips-and-tricks)
    -   [ghcup run](#ghcup-run)
-   [Troubleshooting](#troubleshooting)
    -   [Script immediately exits on windows](#script-immediately-exits-on-windows)
    -   [C compiler cannot create executables](#c-compiler-cannot-create-executables)
    -   [Certificate authority errors (curl)](#certificate-authority-errors-curl)
:::

## Basic usage

For the simple, interactive, text-based user interface (TUI), run:

``` sh
ghcup tui
```

For the full functionality via cli:

``` sh
# list available ghc/cabal versions
ghcup list

# install the recommended GHC version
ghcup install ghc

# install a specific GHC version
ghcup install ghc 8.2.2

# set the currently "active" GHC version
ghcup set ghc 8.4.4

# install cabal-install
ghcup install cabal

# update ghcup itself
ghcup upgrade
```

### Tags and shortcuts

GHCup has a number of tags and version shortcuts, that can be used as
arguments to **install**/**set** etc. All of the following are valid
arguments to `ghcup install ghc`:

-   `latest`, `recommended`
-   `base-4.15.1.0`
-   `9.0.2`, `9.0`, `9`

If the argument is omitted, the default is `recommended`.

Other tags include:

-   `prerelease`: a prerelease version
-   `latest-prerelease`: the latest prerelease version

## Manpages

For man pages to work you need [man-db](http://man-db.nongnu.org/) as
your `man` provider, then issue `man ghc`. Manpages only work for the
currently set ghc. `MANPATH` may be required to be unset.

## Shell-completion

Shell completions are in
[scripts/shell-completions](https://github.com/haskell/ghcup-hs/tree/master/scripts/shell-completions)
directory of this repository.

For bash: install `shell-completions/bash` as e.g.
`/etc/bash_completion.d/ghcup` (depending on distro) and make sure your
bashrc sources the startup script
(`/usr/share/bash-completion/bash_completion` on some distros).

## Portability

`ghcup` is very portable. There are a few exceptions though:

1.  legacy subcommands `ghcup install` (without a tool identifier) and
    `ghcup install-cabal` may be removed in the future

# Configuration

A configuration file can be put in `~/.ghcup/config.yaml`. The default
config file explaining all possible configurations can be found in this
repo:
[config.yaml](https://github.com/haskell/ghcup-hs/blob/master/data/config.yaml).

Partial configuration is fine. Command line options always override the
config file settings.

## Overriding distro detection

If you\'re running e.g. an Ubuntu derivative based on 18.04 and ghcup is
picking bindists that don\'t work well, you could do this in
`config.yaml`:

``` yml
platform-override:
  arch: A_64
  platform:
    contents: Ubuntu
    tag: Linux
  version: '18.04'
```

## Env variables

This is the complete list of env variables that change GHCup behavior:

-   `GHCUP_USE_XDG_DIRS`: see [XDG support](#xdg-support) below
-   `GHCUP_INSTALL_BASE_PREFIX`: the base of ghcup (default: `$HOME`)
-   `GHCUP_CURL_OPTS`: additional options that can be passed to curl
-   `GHCUP_WGET_OPTS`: additional options that can be passed to wget
-   `GHCUP_GPG_OPTS`: additional options that can be passed to gpg
-   `GHCUP_SKIP_UPDATE_CHECK`: Skip the (possibly annoying) update check
    when you run a command
-   `CC`/`LD` etc.: full environment is passed to the build system when
    compiling GHC via GHCup

On windows, there\'s additionally:

-   `GHCUP_MSYS2`: Has to point to the root of an existing MSYS2
    installation (when installed by GHCup, that\'s e.g.
    `C:\ghcup\msys64`). GHCup bootstrap takes care of this usually.
-   `GHCUP_MSYS2_ENV`: The [MSYS2
    environment](https://www.msys2.org/docs/environments/) to use when
    executing e.g. `ghcup run --mingw-path`. Possible values are `MSYS`,
    `UCRT64`, `CLANG64`, `CLANGARM64`, `CLANG32`, `MINGW64`, `MINGW32`.
    Defaults to `MINGW64`, `MINGW32` or `CLANGARM64`, depending on the
    architecture. `MSYS` is always added as the last component. If you
    change this value after running the bootstrap script, you may need
    to make sure that the cabal config reflects this change, more
    specifically `extra-prog-path`, `extra-include-dirs` and
    `extra-lib-dirs`. (**NOTE: specifying anything other than the
    default is considered experimental**)

### XDG support

To enable XDG style directories, set the environment variable
`GHCUP_USE_XDG_DIRS` to anything.

Then you can control the locations via XDG environment variables as
such:

-   `XDG_DATA_HOME`: GHCs will be unpacked in `ghcup/ghc` subdir
    (default: `~/.local/share`)
-   `XDG_CACHE_HOME`: logs and download files will be stored in `ghcup`
    subdir (default: `~/.cache`)
-   `XDG_BIN_HOME`: binaries end up here (default: `~/.local/bin`)
-   `XDG_CONFIG_HOME`: the config file is stored in `ghcup` subdir as
    `config.yaml` (default: `~/.config`)

**Note that `ghcup` makes some assumptions about structure of files in
`XDG_BIN_HOME`. So if you have other tools installing e.g.
stack/cabal/ghc into it, this will likely clash. In that case consider
disabling XDG support.**

## Caching

GHCup has a few caching mechanisms to avoid redownloads. All cached
files end up in `~/.ghcup/cache` by default.

### Downloads cache

Downloaded tarballs (such as GHC, cabal, etc.) are not cached by default
unless you pass `ghcup --cache` or set caching in your
[config](#configuration) via `ghcup config set cache true`.

### Metadata cache

The metadata files (also see
[github.com/haskell/ghcup-metadata](https://github.com/haskell/ghcup-metadata))
have a 5 minutes cache per default depending on the last access time of
the file. That means if you run `ghcup list` 10 times in a row, only the
first time will trigger a download attempt.

### Clearing the cache

If you experience problems, consider clearing the cache via
`ghcup gc --cache`.

## Metadata

Metadata files are also called release or distribution channels. They
describe tool versions, where to download them etc. and can be viewed
here: <https://github.com/haskell/ghcup-metadata>.

See the
[description](https://github.com/haskell/ghcup-metadata#metadata-variants-distribution-channels)
of metadata files to understand their purpose. These can be combined.

For example, if you want access to both prerelease and cross bindists,
you\'d do:

``` sh
ghcup config add-release-channel https://raw.githubusercontent.com/haskell/ghcup-metadata/master/ghcup-prereleases-0.0.7.yaml
ghcup config add-release-channel https://raw.githubusercontent.com/haskell/ghcup-metadata/master/ghcup-cross-0.0.8.yaml
```

This results in the following configuration in `~/.ghcup/config.yaml`:

``` yaml
url-source:
# the base url that contains all the release bindists
- GHCupURL
# prereleases
- https://raw.githubusercontent.com/haskell/ghcup-metadata/master/ghcup-prereleases-0.0.8.yaml
# cross bindists
- https://raw.githubusercontent.com/haskell/ghcup-metadata/master/ghcup-cross-0.0.8.yaml
```

You can add as many channels as you like. They are combined under
*Last*, so versions from the prerelease channel here overwrite the
default ones, if any.

To remove the channel, delete the entire `url-source` section or set it
back to the default:

``` yml
url-source:
  - GHCupURL
```

Also see
[config.yaml](https://github.com/haskell/ghcup-hs/blob/master/data/config.yaml)
for more options.

You can also use an alternative metadata via one-shot cli option:

``` sh
ghcup --url-source=https://some-url/ghcup-0.0.8.yaml tui
```

One main caveat of using URLs is that you might need to check whether
there are new versions of the file (e.g. `ghcup-0.0.7.yaml` vs
`ghcup-0.0.8.yaml`). Although old metadata files are supported for some
time, they are not so indefinitely.

### Mirrors

Metadata files can also be used to operate 3rd party mirrors, in which
case you want to use a URL instead of the `GHCupURL` alias. E.g. in
`~/.ghcup/config.yaml`, you\'d do:

``` yml
url-source:
  - https://mirror.sjtu.edu.cn/ghcup/yaml/ghcup/data/ghcup-0.0.6.yaml
```

Note that later versions of GHCup allow more sophisticated mirror
support, see [here](https://www.haskell.org/ghcup/#mirrors-proper).

#### Known mirrors

1.  <https://mirror.sjtu.edu.cn/docs/ghcup>
2.  <https://mirrors.ustc.edu.cn/help/ghcup.html>

### Git based metadata config

If you don\'t like the way ghcup updates its metadata with caching and
fetching via curl, you can also do as follows:

Clone the metadata git repo:

``` sh
mkdir -p /home/user/git/
cd /home/user/git/
git clone -b master https://github.com/haskell/ghcup-metadata.git
```

Then tell ghcup to use file locations in `~/.ghcup/config.yaml`, e.g.:

``` yaml
url-source:
- file:///home/user/git/ghcup-metadata/ghcup-0.0.8.yaml
- file:///home/user/git/ghcup-metadata/ghcup-cross-0.0.8.yaml
- file:///home/user/git/ghcup-metadata/ghcup-prereleases-0.0.8.yaml
```

Now, if you invoke `ghcup tui`, it will open instantly without any
download, since it just reads the metadata from local disk.

You\'ll have to update the metadata manually though, like so:

``` sh
cd /home/user/git/
git pull --ff-only origin master
```

## Stack integration

Stack manages GHC versions internally by default. In order to make it
use ghcup installed GHC versions there are two strategies.

### Strategy 1: Stack hooks (new, recommended)

Since stack 2.9.1 you can customize the installation logic of GHC
completely, see
<https://docs.haskellstack.org/en/stable/yaml_configuration/#ghc-installation-customisation>.

We can use this to simply invoke ghcup whenever stack is trying to
install/discover a GHC versions. This is done via placing a shell script
at `~/.stack/hooks/ghc-install.sh` and making it executable.

The ghcup bootstrap script asks you during installation whether you want
to install this shell script. You can also install/update it manually
like so:

``` sh
mkdir -p ~/.stack/hooks/
curl https://raw.githubusercontent.com/haskell/ghcup-hs/master/scripts/hooks/stack/ghc-install.sh \
  > ~/.stack/hooks/ghc-install.sh
chmod +x ~/.stack/hooks/ghc-install.sh
# hooks are only run when 'system-ghc: false'
stack config set system-ghc false --global
```

By default, when the hook fails for whatever reason, stack will fall
back to its own installation logic. To disable this, run
`stack config set install-ghc false --global`.

### Strategy 2: System GHC (works on all stack versions)

You can instruct stack to use \"system\" GHC versions (whatever is in
PATH). To do so, run the following commands:

``` sh
stack config set install-ghc false --global
stack config set system-ghc  true  --global
```

### Using stack\'s setup-info metadata to install GHC

You can now use stack\'s [setup-info
metadata](https://github.com/commercialhaskell/stackage-content/blob/master/stack/stack-setup-2.yaml)
to install GHC. For that, you can invoke ghcup like so as a shorthand:

``` sh
# ghcup will only see GHC now
ghcup -s StackSetupURL install ghc 9.4.7
# this combines both ghcup and stack metadata
ghcup -s '["GHCupURL", "StackSetupURL"]' install ghc 9.4.7
```

To make this permanent and combine it with the GHCup metadata, you can
add the following to your `~/.ghcup/config.yaml`:

``` yaml
url-source:
  - GHCupURL
  # stack versions take precedence
  # you'll still have access to GHCup provided versions and tools in case they don't exist in stack metadata
  - StackSetupURL
```

You can customize or add sections to the setup-info similar to how the
[stack
documentation](https://docs.haskellstack.org/en/stable/yaml_configuration/#setup-info)
explains it. E.g. to change the 9.4.7 bindist, you might do:

``` yaml
url-source:
  - GHCupURL
  - StackSetupURL
  - setup-info:
      ghc:
        linux64-tinfo6:
          9.4.7:
            url: "https://downloads.haskell.org/~ghc/9.4.7/ghc-9.4.7-x86_64-fedora27-linux.tar.xz"
            content-length: 179117892
            sha256: 216b76b7c6383e6ad9ba82533f323f8550e52893a8b9fa33c7b9dc4201ac766a
```

#### Caveats

The main caveat with using this method is that there\'s no guarantee
that GHCup will pick a compatible HLS bindist when you try to install
HLS.

Another potential usability issue is that the `latest` and `recommended`
shorthands won\'t work anymore, since Stack metadata doesn\'t have a
concept of those and we don\'t try to be smart when combining the
metadatas.

### Windows

On windows, you may find the following config options useful too:
`skip-msys`, `extra-path`, `extra-include-dirs`, `extra-lib-dirs`.

Also check out:
<https://docs.haskellstack.org/en/stable/yaml_configuration>

## Mirrors (proper)

Mirrors are now supported via configuration, instead of specifying
alternative metadata files.

As an example, this would be a complete mirror configuration in
`~/.ghcup/config.yaml`:

``` yaml
mirrors:
  # yaml download location, would result in:
  #      https://raw.githubusercontent.com/haskell/ghcup-metadata/develop/ghcup-0.0.8.yaml
  #   -> https://mirror.sjtu.edu.cn/ghcup/yaml/haskell/ghcup-metadata/master/ghcup-0.0.8.yaml
  "raw.githubusercontent.com":
    authority:
      host: "mirror.sjtu.edu.cn"
    pathPrefix: "ghcup/yaml"
  # for stack and some older HLS versions, would result in e.g.
  #      https://github.com/haskell/haskell-language-server/releases/download/1.2.0/haskell-language-server-Windows-1.2.0.tar.gz
  #   -> https://mirror.sjtu.edu.cn/ghcup/github/haskell/haskell-language-server/releases/download/1.2.0/haskell-language-server-Windows-1.2.0.tar.gz
  "github.com":
    authority:
      host: "mirror.sjtu.edu.cn"
    pathPrefix: "ghcup/github"
  # for all haskell.org hosted bindists, would result in e.g.
  #      https://downloads.haskell.org/~ghc/9.8.1/ghc-9.8.1-x86_64-deb10-linux.tar.xz
  #   -> https://mirror.sjtu.edu.cn/ghcup/haskell-downloads/~ghc/9.8.1/ghc-9.8.1-x86_64-deb10-linux.tar.xz
  "downloads.haskell.org":
    authority:
      host: "mirror.sjtu.edu.cn"
    pathPrefix: "downloads.haskell.org"
```

The configuration depends on the host of the mirror and they have to
provide the correct configuration.

# More on installation

## Customisation of the installation scripts

The scripts offered to install GHCup are available here:

-   [bootstrap-haskell](https://github.com/haskell/ghcup-hs/blob/master/scripts/bootstrap/bootstrap-haskell#L7)
    for Unix-like operating systems
-   [bootstrap-haskell.ps1](https://github.com/haskell/ghcup-hs/blob/master/scripts/bootstrap/bootstrap-haskell.ps1)
    for Windows (PowerShell). This will, in turn, run the final
    bootstrap script (by default, that for the Unix-like operating
    systems).

The effect of the scripts can be customised by setting one or more
`BOOTSTRAP_HASKELL_*` environment variables (as set out in the first
script) and, in the case of Windows, by specifying parameters (as set
out in the PowerShell script).

For example, you can toggle:

-   non-interactive installation
-   a more verbose installation
-   whether to install only GHCup (and, on Windows, MSYS2)
-   not to trigger the upgrade of GHCup
-   whether to install the latest version of HLS
-   whether to install the latest version of Stack
-   whether to respect the XDG Base Directory Specification
-   whether to adjust (prepend) the PATH in `bashrc`
-   on Windows, whether to adjust MINGW paths in `cabal.config`

You can also specify:

-   the GHC version to install
-   the Cabal version to install
-   which downloader to use (the default is `curl`)
-   the base URL for the download of the GHCup binary distribution

On Windows, you can also use the parameters to:

-   toggle whether to overwrite a previous installation
-   specify the GHCup installation root directory
-   specify the Cabal root directory
-   specify the directory of an existing installation of MSYS2 (for
    example, the one supplied by Stack)
-   specify the URL of the final bootstrap script
-   toggle whether to run the final bootstrap script via `bash` (instead
    of in a new MSYS2 shell)

## Installing custom bindists

There are a couple of good use cases to install custom bindists:

1.  manually built bindists (e.g. with patches)
    -   example:
        `ghcup install ghc -u 'file:///home/mearwald/tmp/ghc-eff-patches/ghc-8.10.2-x86_64-deb10-linux.tar.xz' 8.10.2-eff`
2.  GHC head CI bindists
    -   example specifying a branch (`master`):
        `ghcup install ghc -u 'https://gitlab.haskell.org/ghc/ghc/-/jobs/artifacts/master/raw/ghc-x86_64-linux-fedora33-release.tar.xz?job=x86_64-linux-fedora33-release' head`
    -   example specifying a job id (`1129565`):
        `ghcup install ghc -u ' https://gitlab.haskell.org/api/v4/projects/1/jobs/1129565/artifacts/ghc-x86_64-linux-alpine3_12-validate+fully_static.tar.xz' mr7847`
3.  DWARF bindists
    -   example:
        `ghcup install ghc -u 'https://downloads.haskell.org/~ghc/8.10.2/ghc-8.10.2-x86_64-deb10-linux-dwarf.tar.xz' 8.10.2-dwarf`

Since the version parser is pretty lax, `8.10.2-eff` and `head` are both
valid versions and produce the binaries `ghc-8.10.2-eff` and `ghc-head`
respectively. GHCup always needs to know which version the bindist
corresponds to (this is not automatically detected).

## Compiling from source

### GHC

Compiling from source is supported for both source tarballs and
arbitrary git refs. See `ghcup compile ghc --help` for a list of all
available options.

If you need to overwrite the existing `build.mk`, check the default
files in
[data/build_mk](https://github.com/haskell/ghcup-hs/tree/master/data/build_mk),
copy them somewhere, adjust them and pass `--config path/to/build.mk` to
`ghcup compile ghc`. Common `build.mk` options are explained
[here](https://gitlab.haskell.org/ghc/ghc/-/wikis/building/using#build-configuration).

Make sure your system meets all the
[prerequisites](https://gitlab.haskell.org/ghc/ghc/-/wikis/building/preparation).

### HLS

There are 3 main ways to compile HLS from source.

1.  from hackage (should have up to date version bounds)
    -   `ghcup compile hls --version 1.7.0.0 --ghc 9.2.3`
2.  from git (allows to build latest sources and PRs)
    -   `ghcup compile hls --git-ref master --ghc 9.2.3`
    -   `ghcup compile hls --git-ref a32db0b --ghc 9.2.3`
    -   `ghcup compile hls --git-ref 1.7.0.0 --ghc 9.2.3`
3.  from source distribution that\'s packaged during release from the
    corresponding git sources
    -   `ghcup compile hls --source-dist 1.7.0.0 --ghc 9.2.3`

All these use `cabal v2-install` under the hood, so all build components
are cached. You can pass arbitrary arguments to cabal, e.g. set the
index state like so:

``` sh
ghcup compile hls --git-ref master --ghc 9.2.3 -- --index-state=2022-06-12T00:00:00Z --allow-newer
```

You can pass `--ghc <ver>` multiple times to install for many GHCs at
once.

When building from git sources, ghcup will auto-detect the HLS version
that the git commit corresponds to from the
`haskell-language-server.cabal` file. This version might not have been
updated since the last release. If you want to avoid overwriting the
existing installed HLS version, you can instruct ghcup to use
`git describe` to set the HLS version instead:

``` sh
ghcup compile hls --git-ref master --ghc 9.2.3 --git-describe-version
```

You can also set the version explicitly:

``` sh
ghcup compile hls --git-ref master --ghc 9.2.3 --overwrite-version 1.7.0.0-p1
```

To instruct cabal to run `cabal update` before building, run
`ghcup compile hls --version 1.7.0.0 --ghc 9.2.3 --cabal-update`

As always, check `ghcup compile hls --help`.

#### Updating HLS for a new GHC version

First try to build from hackage with some tricks:

``` sh
ghcup compile hls --version 1.7.0.0 --ghc 9.2.4 --cabal-update -- --allow-newer --index-state=2022-06-12T00:00:00Z
```

This augments the currently installed 1.7.0.0 official bindists in ghcup
with new GHC versions support.

If that fails (since `--allow-newer` is quite brutal), you can install
from HLS master branch (which may contain new fixes) like so:

    ghcup compile hls --git-ref master --git-describe-version --ghc 8.10.7 --ghc 9.2.4 --cabal-update

This however will create a new HLS version in ghcup, e.g.
`1.7.0.0-105-gdc682ba1`, for both 8.10.7 and 9.2.4. If you want to
switch back to the official bindists, run `ghcup set hls 1.7.0.0`.

## Cross support

ghcup can compile a cross GHC for any target. However, this requires
that the build host has a complete cross toolchain and various libraries
installed for the target platform.

Consult the GHC documentation on the
[prerequisites](https://gitlab.haskell.org/ghc/ghc/-/wikis/building/cross-compiling#tools-to-install).
For distributions with non-standard locations of cross toolchain and
libraries, this may need some tweaking of `build.mk` or configure args.
See `ghcup compile ghc --help` for further information.

Since ghcup version 0.1.20.0, we provide cross bindists for GHC JS and
WASM. These can be installed conveniently. However, these are intended
as a developer preview only. By using these GHC variants, you are
implicitly signing up to participate in GHC development! If you run into
bugs or missing behavior, join the dev chat at
https://matrix.to/#/#GHC:matrix.org.

First, add the cross release channel:

``` sh
ghcup config add-release-channel https://raw.githubusercontent.com/haskell/ghcup-metadata/develop/ghcup-cross-0.0.8.yaml
```

The next sections explain how to install each cross bindist.

### GHC JS cross bindists (experimental)

You need the required emscripten JS toolchain:

``` sh
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
./emsdk install latest
./emsdk activate latest
source ./emsdk_env.sh
```

Instructions are also here: [Download and install --- Emscripten
3.1.43-git (dev)
documentation](https://emscripten.org/docs/getting_started/downloads.html).

To install we need to invoke ghcup like so:

``` sh
emconfigure ghcup install ghc --set javascript-unknown-ghcjs-9.6.2
```

You\'ll now have the compiler `javascript-unknown-ghcjs-ghc`. To build a
hello world, do e.g.:

``` sh
echo 'main = putStrLn "hello world"' > hello.hs
javascript-unknown-ghcjs-ghc -fforce-recomp hello.hs
./hello
```

You can follow the instructions
[here](https://gitlab.haskell.org/ghc/ghc/-/wikis/javascript-backend/building#compiling-hello-world).

### GHC WASM cross bindists (experimental)

You need the required wasm toolchain:

``` sh
git clone https://gitlab.haskell.org/ghc/ghc-wasm-meta.git
cd ghc-wasm-meta/
export SKIP_GHC=yes
./setup.sh
source ~/.ghc-wasm/env
```

**Note that some wasm bindists don\'t work with the master branch of
ghc-wasm-meta. GHCup will warn you about such cases prior to
installation and point you to the right commit.**

To install, we need to invoke ghcup like so also passing the
`--host=<host>` flag (adjust as needed):

``` sh
ghcup install ghc --set wasm32-wasi-9.6.3.20230927 -- --host=x86_64-linux --with-intree-gmp --with-system-libffi
```

Also check the documentation here: [Glasgow Haskell Compiler /
ghc-wasm-meta](https://gitlab.haskell.org/ghc/ghc-wasm-meta).

You\'ll now have the compiler `wasm32-wasi-ghc`. To build a hello world,
do e.g.:

``` sh
echo 'main = putStrLn "hello world"' > hello.hs
wasm32-wasi-ghc hello.hs -o hello.wasm
wasmtime ./hello.wasm
```

## Isolated installs

**Before using isolated installs, make sure to have at least GHCup
version 0.1.17.8!**

Ghcup also enables you to install a tool (GHC, Cabal, HLS, Stack) at an
isolated location of your choosing. These installs, as the name
suggests, are separate from your main installs and DO NOT conflict with
them.

-   No symlinks are made to these isolated installed tools, you\'d have
    to manually point to them wherever you intend to use them.

-   These installs, can also NOT be deleted from ghcup, you\'d have to
    go and manually delete these.

You need to use the `--isolate` or `-i` flag followed by the directory
path.

Examples:

1.  install an isolated GHC version at location
    /home/user/isolated_dir/ghc/

    -   `ghcup install ghc 8.10.5 --isolate /home/user/isolated_dir/ghc`

2.  isolated install Cabal at a location you desire

    -   `ghcup install cabal --isolate /home/username/my_isolated_dir/`

3.  do an isolated install with a custom bindist

    -   `ghcup install ghc --isolate /home/username/my_isolated_dir/ -u 'https://gitlab.haskell.org/ghc/ghc/-/jobs/artifacts/master/raw/ghc-x86_64-linux-fedora33-release.tar.xz?job=x86_64-linux-fedora33-release' head`

4.  isolated install HLS

    -   `ghcup install hls --isolate /home/username/dir/hls/`

5.  you can even compile ghc to an isolated location.

    -   `ghcup compile ghc -j 4 -v 9.0.1 -b 8.10.5 -i /home/username/my/dir/ghc`

## Continuous integration

On Windows, GHCup can be installed automatically on a CI runner
non-interactively, as below. The parameters to the PowerShell script are
specified positionally, after `-ArgumentList`:

``` ps
$ErrorActionPreference = 'Stop';Set-ExecutionPolicy Bypass -Scope Process -Force;[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072;try { Invoke-Command -ScriptBlock ([ScriptBlock]::Create((Invoke-WebRequest https://www.haskell.org/ghcup/sh/bootstrap-haskell.ps1 -UseBasicParsing))) -ArgumentList $false,$true,$true,$false,$false,$false,$false,"C:\" } catch { Write-Error $_ }
```

`$ErrorActionPreference = 'Stop'` here acts like `set -e` and stops
execution if ghcup installation fails.

On linux/darwin/freebsd, run the following on your runner:

``` sh
curl --proto '=https' --tlsv1.2 -sSf https://get-ghcup.haskell.org | BOOTSTRAP_HASKELL_NONINTERACTIVE=1 BOOTSTRAP_HASKELL_MINIMAL=1 sh
```

This will just install `ghcup` and on Windows additionally MSYS2.

See the installation scripts referred to above for the full list of
environment variables and, in the case of Windows, parameters to tweak
the script behavior.

### github workflows

On github workflows GHCup itself is pre-installed on all platforms, but
may use non-standard install locations. Here\'s an example workflow with
a GHC matrix:

``` yaml
jobs:
  build:
    runs-on: ${{ matrix.os }}
    strategy:
      fail-fast: true
      matrix:
        os: [ubuntu-22.04, macOS-latest]
        ghc: ['9.6', '9.4', '9.2', '9.0', '8.10', '8.8', '8.6']
    steps:
    - uses: actions/checkout@v3
    - name: Setup toolchain
      run: |
        ghcup install cabal --set recommended
        ghcup install ghc --set ${{ matrix.ghc }}
    - name: Build
      run: |
        cabal update
        cabal test all --test-show-details=direct

  i386:
    runs-on: ubuntu-latest
    container:
      image: i386/ubuntu:bionic
    steps:
    - name: Install GHCup in container
      run: |
        apt-get update -y
        apt-get install -y autoconf build-essential zlib1g-dev libgmp-dev curl
        # we just go with recommended versions of cabal and GHC
        curl --proto '=https' --tlsv1.2 -sSf https://get-ghcup.haskell.org | BOOTSTRAP_HASKELL_NONINTERACTIVE=1 BOOTSTRAP_HASKELL_INSTALL_NO_STACK=1 sh
    - uses: actions/checkout@v1
    - name: Test
      run: |
        # in containers we need to fix PATH
        source ~/.ghcup/env
        cabal update
        cabal test all --test-show-details=direct
```

## GPG verification

GHCup supports verifying the GPG signature of the metadata file. The
metadata file then contains SHA256 hashes of all downloads, so this is
cryptographically secure.

First, obtain the gpg keys:

``` sh
gpg --batch --keyserver keyserver.ubuntu.com --recv-keys 7D1E8AFD1D4A16D71FADA2F2CCC85C0E40C06A8C
gpg --batch --keyserver keyserver.ubuntu.com --recv-keys FE5AB6C91FEA597C3B31180B73EDE9E8CFBAEF01
gpg --batch --keyserver keyserver.ubuntu.com --recv-keys 88B57FCF7DB53B4DB3BFA4B1588764FBE22D19C4
gpg --batch --keyserver keyserver.ubuntu.com --recv-keys EAF2A9A722C0C96F2B431CA511AAD8CEDEE0CAEF
```

Then verify the gpg key in one of these ways:

1.  find out where I live and visit me to do offline key signing
2.  figure out my mobile phone number and call me to verify the
    fingerprint
3.  more boring: contact me on Libera IRC (`maerwald`) and verify the
    fingerprint

Once you\'ve verified the key, you have to figure out if you trust me.

If you trust me, then you can configure gpg in `~/.ghcup/config.yaml`:

``` yml
gpg-setting: GPGLax # GPGStrict | GPGLax | GPGNone
```

In `GPGStrict` mode, ghcup will fail if verification fails. In `GPGLax`
mode it will just print a warning. You can also pass the mode via
`ghcup --gpg <strict|lax|none>`.

# Tips and tricks

## ghcup run

If you don\'t want to explicitly switch the active GHC all the time and
are using tools that rely on the plain `ghc` binary, GHCup provides an
easy way to execute commands with a certain toolchain prepended to PATH,
e.g.:

``` sh
ghcup run --ghc 8.10.7 --cabal latest --hls latest --stack latest --install -- code Setup.hs
```

This will execute vscode with GHC set to 8.10.7 and all other tools to
their latest version.

# Troubleshooting

## Script immediately exits on windows

There are two possible reasons:

1.  your company blocks the script (some have a whitelist)\... ask your
    administrator
2.  your Antivirus or Windows Defender interfere with the installation.
    Disable them temporarily.

## C compiler cannot create executables

### Darwin

You need to update your XCode command line tools, e.g. [like
this](https://stackoverflow.com/questions/34617452/how-to-update-xcode-from-command-line).

## Certificate authority errors (curl)

If your certificates are outdated or improperly configured, curl may be
unable to download ghcup.

There are two known workarounds:

1.  Tell curl to ignore certificate errors (dangerous):
    `curl -k https://raw.githubusercontent.com/haskell/ghcup-hs/master/scripts/bootstrap/bootstrap-haskell | GHCUP_CURL_OPTS="-k" sh`
2.  Try to use wget instead:
    `wget -O /dev/stdout https://raw.githubusercontent.com/haskell/ghcup-hs/master/scripts/bootstrap/bootstrap-haskell | BOOTSTRAP_HASKELL_DOWNLOADER=wget sh`

On windows, you can disable curl like so:

``` pwsh
Set-ExecutionPolicy Bypass -Scope Process -Force;[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072;try { Invoke-Command -ScriptBlock ([ScriptBlock]::Create((Invoke-WebRequest https://www.haskell.org/ghcup/sh/bootstrap-haskell.ps1 -UseBasicParsing))) -ArgumentList $true,$false,$false,$false,$false,$false,$false,"","","","",$true } catch { Write-Error $_ }
```
:::
::::::::
:::::::::

------------------------------------------------------------------------

Documentation built with [MkDocs](https://www.mkdocs.org/).


# /Development and contribution

All you wanted to know about GHCup development.

## Building

GHCup supports development via cabal and stack. E.g.:

* build via stack: `stack build`
* build via cabal (with whatever GHC version): `cabal build`
* build via cabal reproducibly with a specific GHC version
    - GHC 8.10.7: `cabal build --project-file=cabal.ghc8107.project`
    - GHC 9.0.2: `cabal build --project-file=cabal.ghc902.project`
    - and so on (check supported versions via `ls cabal.ghc+([0-9]).project`)
* build the release binaries: `cabal build --project-file=cabal.project.release`

## Contribution process and expectations

* discuss your idea first before implementing anything
* GHCup is a dictatorship, so the final decisions are made by the author
* we don't manage contributors... you can work on anything you like
* reviews focus on logic and design, not on style and formatting
* remember that features, decisions and bugs are high impact, since GHCup is used in CIs, github workflows, etc.

## Module graph

[![Module graph](https://www.haskell.org/ghcup/modules_small.svg){: .center style="width:900px"}](https://www.haskell.org/ghcup/modules_wide.svg)

Main functionality is in `GHCup` module. Utility functions are
organised tree-ish in `GHCup.Utils` and `GHCup.Utils.*`.

Anything dealing with ghcup specific directories is in
`GHCup.Utils.Dirs`.

Download information on where to fetch bindists from is in the [ghcup-metadata](https://github.com/haskell/ghcup-metadata) repository.

## Design decisions

### Using [Excepts](https://hackage.haskell.org/package/haskus-utils-variant-3.0/docs/Haskus-Utils-Variant-Excepts.html) as a beefed up ExceptT

This is an open variant, similar to [plucky](https://hackage.haskell.org/package/plucky) or [oops](https://github.com/i-am-tom/oops) and allows us to combine different error types. Maybe it is too much and it's a little bit [unergonomic](https://github.com/haskus/packages/issues/32) at times. If it really hurts maintenance, it will be removed. It was more of an experiment.

### No use of haskell-TLS

I consider haskell-TLS an interesting experiment, but not a battle-tested and peer-reviewed crypto implementation. There is little to no research about what the intricacies of using haskell for low-level crypto are and how vulnerable such binaries are. Instead, we use either curl the binary or wget. There's also an implementation based on OpenSSL bindings, but it isn't enabled by default, since it would complicate shipping static binaries.

### Optics instead of lens

They're a little safer (less Monoid weirdness with view) and have better error messages. Consider the following with [lens](https://hackage.haskell.org/package/lens):

```
> view (_Just . to (++ "abc")) Nothing
""
```

vs [optics](https://hackage.haskell.org/package/optics):

```
> view (_Just % to (++ "abc")) Nothing

<interactive>:2:1: error:
    • An_AffineFold cannot be used as A_Getter
    • In the expression: view (_Just % to (++ "abc")) Nothing
      In an equation for ‘it’: it = view (_Just % to (++ "abc")) Nothing
```

### StrictData on by default

Kazu Yamamoto [explained it in his PR](https://github.com/yesodweb/wai/pull/752#issuecomment-501531386) very well. I like to agree with him. The instances where we need non-strict behavior, we annotate it.

`Strict` is a little more odd as a default, since it depends on how you define your functions as well.

## Code style and formatting

Unfortunately, code formatters are semi-broken on this codebase, due to TH and CPP.

Some light suggestions:

1. mtl-style preferred
2. no overly pointfree style
3. use `where` a lot, so the main function body reads like prose
4. documentation is part of the code

## Common tasks

### Adding a new GHC version

Head over to: [https://github.com/haskell/ghcup-metadata#adding-a-new-ghc-version](https://github.com/haskell/ghcup-metadata#adding-a-new-ghc-version)

### Adding a new CLI command

An example illustration on how to deal with [optparse-applicative](https://hackage.haskell.org/package/optparse-applicative) can be seen here: [https://github.com/haskell/ghcup-hs/commit/c19dd5ee8b2edbaf0336af143f1c75b6f4843e26](https://github.com/haskell/ghcup-hs/commit/c19dd5ee8b2edbaf0336af143f1c75b6f4843e26)

Every subcommand now lives in its own module under [GHCup.OptParse.MyCommand](https://github.com/haskell/ghcup-hs/tree/master/app/ghcup/GHCup/OptParse).

## Major refactors

1. First major refactor included adding cross support. This added
   `GHCTargetVersion`, which includes the target in addition to the version.
   Most of the `Version` parameters to functions had to be replaced with
   that and ensured the logic is consistent for cross and non-cross
   installs.
2. This refactor added windows support wrt [#130](https://gitlab.haskell.org/haskell/ghcup-hs/-/issues/130).
   The major changes here were switching `hpath` library out for `filepath`/`directory` (sadly) and
   introducing a non-unix way of handling processes via the `process` library. It also introduced considerable
   amounts of CPP wrt file handling, installation etc.
3. This refactor split up the huge `Main.hs` and put every subcommand in its own module: [#212](https://gitlab.haskell.org/haskell/ghcup-hs/-/merge_requests/212)

# Releasing

1. Update version in `ghcup.cabal`

2. Update `GHCup.Version` module. `ghcupURL` must only be updated if we change the `GHCupInfo` type or the YAML representation of it. The version of the YAML represents the change increments. `ghcUpVer` is the current application version, read from `ghcup.cabal`.

3. Add ChangeLog entry

4. If a new ghcup yaml version is needed, create one at [ghcup-metadata repo](https://github.com/haskell/ghcup-metadata) and push to a temporary release branch, then update the `data/metadata` submodule in ghcup-hs repo to that branch, so CI can pass

5. Commit and git push with tag. Wait for tests to succeed and release artifacts to build.

6. Download release artifacts and upload them `downloads.haskell.org/~ghcup` along with checksum files (also check `scripts/releasing/pull_release_artifacts.sh` and `scripts/releasing/sftp-upload-artifacts.sh`)

7. Add ghcup release artifacts to ALL yaml files, see [ghcup-metadata repo](https://github.com/haskell/ghcup-metadata)

8. Upload the final `ghcup-<ver>.yaml` (and a detached GPG sig of it) to `webhost.haskell.org/ghcup/data/` (for yaml versions <= 0.0.6) as well as [https://github.com/haskell/ghcup-metadata](https://github.com/haskell/ghcup-metadata) (for all versions).

9. Update version in `scripts/bootstrap/bootstrap-haskell` (`ghver` variable at the top of the script)

10. Upload `scripts/bootstrap/bootstrap-haskell` and `scripts/bootstrap/bootstrap-haskell.ps1` to `webhost.haskell.org/ghcup/sh/`

11. Update the top-level ghcup symlinks at `downloads.haskell.org/~ghcup` (see `scripts/releasing/sftp-symlink-artifacts.sh`)

12. Update the `data/metadata` submodule in ghcup-hs repo to master

13. Do hackage release

14. Post on reddit/discourse/etc. and collect rewards

# Documentation

This documentation page is built via [mkdocs](https://www.mkdocs.org/), see `mkdocs.yml` and `docs/` subfolder.
The module graph needs [graphmod](https://github.com/yav/graphmod) and is generated via `scripts/dev/modgraph.sh`.
