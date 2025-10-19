# Summary

- [Introduction](#ANALYZER_README)
- [Introduction](#DOCS_README)
- [Installation](#installation)
  - [VS Code](#vs_code)
  - [rust-analyzer Binary](#rust_analyzer_binary)
  - [Other Editors](#other_editors)
- [Troubleshooting](#troubleshooting)
  - [FAQ](#faq)
- [Configuration](#configuration)
  - [Non-Cargo Based Projects](#non_cargo_based_projects)
- [Security](#security)
- [Privacy](#privacy)
- [Features](#features)
  - [Assists (Code Actions)](#assists)
  - [Diagnostics](#diagnostics)
- [Editor Features](#editor_features)
- [Contributing](#contributing_README)
  - [Architecture](#contributing_architecture)
  - [Debugging](#contributing_debugging)
  - [Guide](#contributing_guide)
  - [LSP Extensions](#contributing_lsp_extensions)
  - [Setup](#contributing_setup)
  - [Style](#contributing_style)
  - [Syntax](#contributing_syntax)
  - [Writing Tests](#contributing_testing)

<a id=ANALYZER_README></a>

# rust-analyzer README

<p align="center">
  <img
    src="https://raw.githubusercontent.com/rust-lang/rust-analyzer/master/assets/logo-wide.svg"
    alt="rust-analyzer logo">
</p>

rust-analyzer is a language server that provides IDE functionality for
writing Rust programs. You can use it with any editor that supports
the [Language Server
Protocol](https://microsoft.github.io/language-server-protocol/) (VS
Code, Vim, Emacs, Zed, etc).

rust-analyzer features include go-to-definition, find-all-references,
refactorings and code completion. rust-analyzer also supports
integrated formatting (with rustfmt) and integrated diagnostics (with
rustc and clippy).

Internally, rust-analyzer is structured as a set of libraries for
analyzing Rust code. See
[Architecture](https://rust-analyzer.github.io/book/contributing/architecture.html)
in the manual.

## Quick Start

https://rust-analyzer.github.io/book/installation.html

## Documentation

If you want to **contribute** to rust-analyzer check out the [CONTRIBUTING.md](#CONTRIBUTING) or
if you are just curious about how things work under the hood, see the
[Contributing](https://rust-analyzer.github.io/book/contributing) section of the manual.

If you want to **use** rust-analyzer's language server with your editor of
choice, check [the manual](https://rust-analyzer.github.io/book/).
It also contains some tips & tricks to help you be more productive when using rust-analyzer.

## Security and Privacy

See the [security](https://rust-analyzer.github.io/book/security.html) and
[privacy](https://rust-analyzer.github.io/book/privacy.html) sections of the manual.

## Communication

For usage and troubleshooting requests, please use "IDEs and Editors" category of the Rust forum:

https://users.rust-lang.org/c/ide/14

For questions about development and implementation, join rust-analyzer working group on Zulip:

https://rust-lang.zulipchat.com/#narrow/stream/185405-t-compiler.2Frust-analyzer

## Quick Links

* Website: https://rust-analyzer.github.io/
* Metrics: https://rust-analyzer.github.io/metrics/
* API docs: https://rust-lang.github.io/rust-analyzer/ide/
* Changelog: https://rust-analyzer.github.io/thisweek

## License

rust-analyzer is primarily distributed under the terms of both the MIT
license and the Apache License (Version 2.0).

See LICENSE-APACHE and LICENSE-MIT for details.


<a id=DOCS_README></a>

# rust-analyzer documentation

The rust analyzer manual uses [mdbook](https://rust-lang.github.io/mdBook/).

## Quick start

To run the documentation site locally:

```shell
cargo install mdbook
cargo install mdbook-toc
cargo xtask codegen
cd docs/book
mdbook serve
# make changes to documentation files in doc/book/src
# ...
```

mdbook will rebuild the documentation as changes are made.

## Making updates

While not required, installing the mdbook binary can be helpful in order to see the changes.
Start with the mdbook [User Guide](https://rust-lang.github.io/mdBook/guide/installation.html) to familiarize yourself with the tool.

## Generated documentation

Four sections are generated dynamically: assists, configuration, diagnostics and features. Their content is found in the `generated.md` files
of the respective book section, for example `src/configuration_generated.md`, and are included in the book via mdbook's
[include](https://rust-lang.github.io/mdBook/format/mdbook.html#including-files) functionality. Generated files can be rebuilt by running the various
test cases that generate them, or by simply running all of the `rust-analyzer` tests with `cargo test` and `cargo xtask codegen`.


## rust-analyzer

rust-analyzer is a language server that provides IDE functionality for
writing Rust programs. You can use it with any editor that supports
the [Language Server Protocol](https://microsoft.github.io/language-server-protocol/) 
(VS Code, Vim, Emacs, Zed, etc).

rust-analyzer features include go-to-definition, find-all-references,
refactorings and code completion. rust-analyzer also supports
integrated formatting (with rustfmt) and integrated diagnostics (with
rustc and clippy).

Internally, rust-analyzer is structured as a set of libraries for analyzing Rust code.
See [Architecture](https://rust-analyzer.github.io/book/contributing/architecture.html)
for more details.

To improve this document, send a pull request:
[https://github.com/rust-lang/rust-analyzer](https://github.com/rust-lang/rust-analyzer/blob/master/docs/book/README.md)

The manual is written in markdown and includes
some extra files which are generated from the source code. Run
`cargo test` and `cargo xtask codegen` to create these.

If you have questions about using rust-analyzer, please ask them in the
["IDEs and Editors"](https://users.rust-lang.org/c/ide/14) topic of Rust
users forum.


<a id=installation></a>

# Installation

To use rust-analyzer, you need a `rust-analyzer` binary, a text editor
that supports LSP, and the source code of the Rust standard library.

If you're [using VS Code](#vs_code), the extension bundles a
copy of the `rust-analyzer` binary. For other editors, you'll need to
[install the binary](#rust_analyzer_binary) and [configure your
editor](#other_editors).

## Rust Standard Library

rust-analyzer will attempt to install the standard library source code
automatically. You can also install it manually with `rustup`.

    $ rustup component add rust-src

Only the latest stable standard library source is officially supported
for use with rust-analyzer. If you are using an older toolchain or have
an override set, rust-analyzer may fail to understand the Rust source.
You will either need to update your toolchain or use an older version of
rust-analyzer that is compatible with your toolchain.

If you are using an override in your project, you can still force
rust-analyzer to use the stable toolchain via the environment variable
`RUSTUP_TOOLCHAIN`. For example, with VS Code or coc-rust-analyzer:

```json
{ "rust-analyzer.server.extraEnv": { "RUSTUP_TOOLCHAIN": "stable" } }
```

## Crates

There is a package named `ra_ap_rust_analyzer` available on
[crates.io](https://crates.io/crates/ra_ap_rust-analyzer), for people
who want to use rust-analyzer programmatically.

For more details, see [the publish workflow](https://github.com/rust-lang/rust-analyzer/blob/master/.github/workflows/autopublish.yaml).



<a id=vs_code></a>

# VS Code

This is the best supported editor at the moment. The rust-analyzer
plugin for VS Code is maintained [in tree](https://github.com/rust-lang/rust-analyzer/tree/master/editors/code).

You can install the latest release of the plugin from 
[the marketplace](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer).

Note that the plugin may cause conflicts with the previous official 
[Rust plugin](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust).
The latter is no longer maintained and should be uninstalled.

The server binary is stored in the extension install directory, which
starts with `rust-lang.rust-analyzer-` and is located under:

-   Linux: `~/.vscode/extensions`

-   Linux (Remote, such as WSL): `~/.vscode-server/extensions`

-   macOS: `~/.vscode/extensions`

-   Windows: `%USERPROFILE%\.vscode\extensions`

As an exception, on NixOS, the extension makes a copy of the server and
stores it under `~/.config/Code/User/globalStorage/rust-lang.rust-analyzer`.

Note that we only support the two most recent versions of VS Code.

### Updates

The extension will be updated automatically as new versions become
available. It will ask your permission to download the matching language
server version binary if needed.

#### Nightly

We ship nightly releases for VS Code. To help us out by testing the
newest code, you can enable pre-release versions in the Code extension
page.

### Manual installation

Alternatively, download a VSIX corresponding to your platform from the
[releases](https://github.com/rust-lang/rust-analyzer/releases) page.

Install the extension with the `Extensions: Install from VSIX` command
within VS Code, or from the command line via:

    $ code --install-extension /path/to/rust-analyzer.vsix

If you are running an unsupported platform, you can install
`rust-analyzer-no-server.vsix` and compile or obtain a server binary.
Copy the server anywhere, then add the path to your settings.json, for
example:

```json
{ "rust-analyzer.server.path": "~/.local/bin/rust-analyzer-linux" }
```

### Building From Source

Both the server and the Code plugin can be installed from source:

    $ git clone https://github.com/rust-lang/rust-analyzer.git && cd rust-analyzer
    $ cargo xtask install

You’ll need Cargo, nodejs (matching a supported version of VS Code) and
npm for this.

Note that installing via `xtask install` does not work for VS Code
Remote, instead you’ll need to install the `.vsix` manually.

If you’re not using Code, you can compile and install only the LSP
server:

    $ cargo xtask install --server

Make sure that `.cargo/bin` is in `$PATH` and precedes paths where
`rust-analyzer` may also be installed. Specifically, `rustup` includes a
proxy called `rust-analyzer`, which can cause problems if you’re
planning to use a source build or even a downloaded binary.

## VS Code or VSCodium in Flatpak

Setting up `rust-analyzer` with a Flatpak version of Code is not trivial
because of the Flatpak sandbox. While the sandbox can be disabled for
some directories, `/usr/bin` will always be mounted under
`/run/host/usr/bin`. This prevents access to the system’s C compiler, a
system-wide installation of Rust, or any other libraries you might want
to link to. Some compilers and libraries can be acquired as Flatpak
SDKs, such as `org.freedesktop.Sdk.Extension.rust-stable` or
`org.freedesktop.Sdk.Extension.llvm15`.

If you use a Flatpak SDK for Rust, it must be in your `PATH`:

 * install the SDK extensions with `flatpak install org.freedesktop.Sdk.Extension.{llvm15,rust-stable}//23.08`
 * enable SDK extensions in the editor with the environment variable `FLATPAK_ENABLE_SDK_EXT=llvm15,rust-stable` (this can be done using flatseal or `flatpak override`)

If you want to use Flatpak in combination with `rustup`, the following
steps might help:

-   both Rust and `rustup` have to be installed using
    <https://rustup.rs>. Distro packages *will not* work.

-   you need to launch Code, open a terminal and run `echo $PATH`

-   using
    [Flatseal](https://flathub.org/apps/details/com.github.tchx84.Flatseal),
    you must add an environment variable called `PATH`. Set its value to
    the output from above, appending `:~/.cargo/bin`, where `~` is the
    path to your home directory. You must replace `~`, as it won’t be
    expanded otherwise.

-   while Flatseal is open, you must enable access to "All user files"

A C compiler should already be available via `org.freedesktop.Sdk`. Any
other tools or libraries you will need to acquire from Flatpak.



<a id=rust_analyzer_binary></a>

# rust-analyzer Binary

Text editors require the `rust-analyzer` binary to be in
`$PATH`. You can download pre-built binaries from the
[releases](https://github.com/rust-lang/rust-analyzer/releases) page.
You will need to uncompress and rename the binary for your platform,
e.g. from `rust-analyzer-aarch64-apple-darwin.gz` on Mac OS to
`rust-analyzer`, make it executable, then move it into a directory in
your `$PATH`.

On Linux to install the `rust-analyzer` binary into `~/.local/bin`,
these commands should work:

    $ mkdir -p ~/.local/bin
    $ curl -L https://github.com/rust-lang/rust-analyzer/releases/latest/download/rust-analyzer-x86_64-unknown-linux-gnu.gz | gunzip -c - > ~/.local/bin/rust-analyzer
    $ chmod +x ~/.local/bin/rust-analyzer

Make sure that `~/.local/bin` is listed in the `$PATH` variable and use
the appropriate URL if you’re not on a `x86-64` system.

You don’t have to use `~/.local/bin`, any other path like `~/.cargo/bin`
or `/usr/local/bin` will work just as well.

Alternatively, you can install it from source using the command below.
You’ll need the latest stable version of the Rust toolchain.

    $ git clone https://github.com/rust-lang/rust-analyzer.git && cd rust-analyzer
    $ cargo xtask install --server

If your editor can’t find the binary even though the binary is on your `$PATH`, 
the likely explanation is that it doesn’t see the same `$PATH` as the shell, 
see [this issue](https://github.com/rust-lang/rust-analyzer/issues/1811). 
On Unix, running the editor from a shell or changing the `.desktop` file to set
the environment should help.

### rustup

`rust-analyzer` is available in `rustup`:

    $ rustup component add rust-analyzer

### Arch Linux

The `rust-analyzer` binary can be installed from the repos or AUR (Arch
User Repository):

-   [`rust-analyzer`](https://www.archlinux.org/packages/extra/x86_64/rust-analyzer/)
    (built from latest tagged source)

-   [`rust-analyzer-git`](https://aur.archlinux.org/packages/rust-analyzer-git)
    (latest Git version)

Install it with pacman, for example:

    $ pacman -S rust-analyzer

### Gentoo Linux

`rust-analyzer` is installed when the `rust-analyzer` use flag is set for dev-lang/rust or dev-lang/rust-bin. You also need to set the `rust-src` use flag.

### macOS

The `rust-analyzer` binary can be installed via
[Homebrew](https://brew.sh/).

    $ brew install rust-analyzer

### Windows

It is recommended to install the latest Microsoft Visual C++ Redistributable 
prior to installation. Download links can be found
[here](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist).



<a id=other_editors></a>

# Other Editors

rust-analyzer works with any editor that supports the [Language Server Protocol](https://microsoft.github.io/language-server-protocol/).

This page assumes that you have already [installed the rust-analyzer binary](#rust_analyzer_binary).


## Emacs

To use `rust-analyzer`, you need to install and enable one of the two
popular LSP client implementations for Emacs,
[Eglot](https://github.com/joaotavora/eglot) or [LSP
Mode](https://github.com/emacs-lsp/lsp-mode). Both enable
`rust-analyzer` by default in Rust buffers if it is available.

### Eglot

Eglot is the more minimalistic and lightweight LSP client for Emacs,
integrates well with existing Emacs functionality and is built into
Emacs starting from release 29.

After installing Eglot, e.g. via `M-x package-install` (not needed from
Emacs 29), you can enable it via the `M-x eglot` command or load it
automatically in `rust-mode` via

```
(add-hook 'rust-mode-hook 'eglot-ensure)
```

To enable clippy, you will need to configure the initialization options
to pass the `check.command` setting.

```
(add-to-list 'eglot-server-programs
             '((rust-ts-mode rust-mode) .
               ("rust-analyzer" :initializationOptions (:check (:command "clippy")))))
```

For more detailed instructions and options see the [Eglot
manual](https://joaotavora.github.io/eglot) (also available from Emacs
via `M-x info`) and the [Eglot
readme](https://github.com/joaotavora/eglot/blob/master/README.md).

Eglot does not support the rust-analyzer extensions to the
language-server protocol and does not aim to do so in the future. The
[eglot-x](https://github.com/nemethf/eglot-x#rust-analyzer-extensions)
package adds experimental support for those LSP extensions.

### LSP Mode

LSP-mode is the original LSP-client for emacs. Compared to Eglot it has
a larger codebase and supports more features, like LSP protocol
extensions. With extension packages like [LSP
UI](https://github.com/emacs-lsp/lsp-mode) it offers a lot of visual
eyecandy. Further it integrates well with [DAP
mode](https://github.com/emacs-lsp/dap-mode) for support of the Debug
Adapter Protocol.

You can install LSP-mode via `M-x package-install` and then run it via
the `M-x lsp` command or load it automatically in rust buffers with

```
(add-hook 'rust-mode-hook 'lsp-deferred)
```

For more information on how to set up LSP mode and its extension package
see the instructions in the [LSP mode
manual](https://emacs-lsp.github.io/lsp-mode/page/installation). Also
see the [rust-analyzer
section](https://emacs-lsp.github.io/lsp-mode/page/lsp-rust-analyzer/)
for `rust-analyzer` specific options and commands, which you can
optionally bind to keys.

Note the excellent
[guide](https://robert.kra.hn/posts/2021-02-07_rust-with-emacs/) from
[@rksm](https://github.com/rksm) on how to set-up Emacs for Rust
development with LSP mode and several other packages.

## Vim/Neovim

There are several LSP client implementations for Vim or Neovim:

### coc-rust-analyzer

1.  Install coc.nvim by following the instructions at
    [coc.nvim](https://github.com/neoclide/coc.nvim) (Node.js required)

2.  Run `:CocInstall coc-rust-analyzer` to install
    [coc-rust-analyzer](https://github.com/fannheyward/coc-rust-analyzer),
    this extension implements *most* of the features supported in the
    VSCode extension:

    -   automatically install and upgrade stable/nightly releases

    -   same configurations as VSCode extension,
        `rust-analyzer.server.path`, `rust-analyzer.cargo.features` etc.

    -   same commands too, `rust-analyzer.analyzerStatus`,
        `rust-analyzer.ssr` etc.

    -   inlay hints for variables and method chaining, *Neovim Only*

Note: coc-rust-analyzer is capable of installing or updating the
rust-analyzer binary on its own.

Note: for code actions, use `coc-codeaction-cursor` and
`coc-codeaction-selected`; `coc-codeaction` and `coc-codeaction-line`
are unlikely to be useful.

### LanguageClient-neovim

1.  Install LanguageClient-neovim by following the instructions
    [here](https://github.com/autozimu/LanguageClient-neovim)

    -   The GitHub project wiki has extra tips on configuration

2.  Configure by adding this to your Vim/Neovim config file (replacing
    the existing Rust-specific line if it exists):

        let g:LanguageClient_serverCommands = {
        \ 'rust': ['rust-analyzer'],
        \ }

### YouCompleteMe

Install YouCompleteMe by following the instructions
[here](https://github.com/ycm-core/YouCompleteMe#installation).

rust-analyzer is the default in ycm, it should work out of the box.

### ALE

To use the LSP server in [ale](https://github.com/dense-analysis/ale):

    let g:ale_linters = {'rust': ['analyzer']}

### nvim-lsp

Neovim 0.5 has built-in language server support. For a quick start
configuration of rust-analyzer, use
[neovim/nvim-lspconfig](https://github.com/neovim/nvim-lspconfig#rust_analyzer).
Once `neovim/nvim-lspconfig` is installed, use
`lua require'lspconfig'.rust_analyzer.setup({})` in your `init.vim`.

You can also pass LSP settings to the server:

```lua
lua << EOF
local lspconfig = require'lspconfig'

local on_attach = function(client)
    require'completion'.on_attach(client)
end

lspconfig.rust_analyzer.setup({
    on_attach = on_attach,
    settings = {
        ["rust-analyzer"] = {
            imports = {
                granularity = {
                    group = "module",
                },
                prefix = "self",
            },
            cargo = {
                buildScripts = {
                    enable = true,
                },
            },
            procMacro = {
                enable = true
            },
        }
    }
})
EOF
```

If you're running Neovim 0.10 or later, you can enable inlay hints via `on_attach`:

```lua
lspconfig.rust_analyzer.setup({
    on_attach = function(client, bufnr)
        vim.lsp.inlay_hint.enable(true, { bufnr = bufnr })
    end
})
```

Note that the hints are only visible after `rust-analyzer` has finished loading **and** you have to
edit the file to trigger a re-render.

See <https://sharksforarms.dev/posts/neovim-rust/> for more tips on
getting started.

Check out <https://github.com/mrcjkb/rustaceanvim> for a batteries
included rust-analyzer setup for Neovim.

### vim-lsp

vim-lsp is installed by following [the plugin
instructions](https://github.com/prabirshrestha/vim-lsp). It can be as
simple as adding this line to your `.vimrc`:

    Plug 'prabirshrestha/vim-lsp'

Next you need to register the `rust-analyzer` binary. If it is avim.lspvailable
in `$PATH`, you may want to add this to your `.vimrc`:

    if executable('rust-analyzer')
      au User lsp_setup call lsp#register_server({
            \   'name': 'Rust Language Server',
            \   'cmd': {server_info->['rust-analyzer']},
            \   'whitelist': ['rust'],
            \ })
    endif

There is no dedicated UI for the server configuration, so you would need
to send any options as a value of the `initialization_options` field, as
described in the [Configuration](#configuration) section. Here is an
example of how to enable the proc-macro support:

    if executable('rust-analyzer')
      au User lsp_setup call lsp#register_server({
            \   'name': 'Rust Language Server',
            \   'cmd': {server_info->['rust-analyzer']},
            \   'whitelist': ['rust'],
            \   'initialization_options': {
            \     'cargo': {
            \       'buildScripts': {
            \         'enable': v:true,
            \       },
            \     },
            \     'procMacro': {
            \       'enable': v:true,
            \     },
            \   },
            \ })
    endif

## Sublime Text

### Sublime Text 4:

-   Follow the instructions in
    [LSP-rust-analyzer](https://github.com/sublimelsp/LSP-rust-analyzer).

Install
[LSP-file-watcher-chokidar](https://packagecontrol.io/packages/LSP-file-watcher-chokidar)
to enable file watching (`workspace/didChangeWatchedFiles`).

### Sublime Text 3:

-   Install the [LSP package](https://packagecontrol.io/packages/LSP).

-   From the command palette, run `LSP: Enable Language Server Globally`
    and select `rust-analyzer`.

If it worked, you should see "rust-analyzer, Line X, Column Y" on the
left side of the status bar, and after waiting a bit, functionalities
like tooltips on hovering over variables should become available.

If you get an error saying `No such file or directory: 'rust-analyzer'`,
see the [rust-analyzer binary installation](#rust_analyzer_binary) section.

## GNOME Builder

GNOME Builder 3.37.1 and newer has native `rust-analyzer` support. If
the LSP binary is not available, GNOME Builder can install it when
opening a Rust file.

## Eclipse IDE

Support for Rust development in the Eclipse IDE is provided by 
[Eclipse Corrosion](https://github.com/eclipse/corrosion). If available in 
PATH or in some standard location, `rust-analyzer` is detected and powers
editing of Rust files without further configuration. If `rust-analyzer`
is not detected, Corrosion will prompt you for configuration of your
Rust toolchain and language server with a link to the *Window &gt;
Preferences &gt; Rust* preference page; from here a button allows to
download and configure `rust-analyzer`, but you can also reference
another installation. You’ll need to close and reopen all .rs and Cargo
files, or to restart the IDE, for this change to take effect.

## Kate Text Editor

Support for the language server protocol is built into Kate through the
LSP plugin, which is included by default. It is preconfigured to use
rust-analyzer for Rust sources since Kate 21.12.

To change rust-analyzer config options, start from the following example
and put it into Kate’s "User Server Settings" tab (located under the LSP
Client settings):

```json
{
    "servers": {
        "rust": {
            "initializationOptions": {
                "cachePriming": {
                    "enable": false
                },
                "check": {
                    "allTargets": false
                },
                "checkOnSave": false
            }
        }
    }
}
```

Then click on apply, and restart the LSP server for your rust project.

## juCi++

[juCi++](https://gitlab.com/cppit/jucipp) has built-in support for the
language server protocol, and since version 1.7.0 offers installation of
both Rust and rust-analyzer when opening a Rust file.

## Kakoune

[Kakoune](https://kakoune.org/) supports LSP with the help of
[`kak-lsp`](https://github.com/kak-lsp/kak-lsp). Follow the
[instructions](https://github.com/kak-lsp/kak-lsp#installation) to
install `kak-lsp`. To configure `kak-lsp`, refer to the 
[configuration section](https://github.com/kak-lsp/kak-lsp#configuring-kak-lsp) 
which is basically about copying the 
[configuration file](https://github.com/kak-lsp/kak-lsp/blob/master/kak-lsp.toml) in
the right place (latest versions should use `rust-analyzer` by default).

Finally, you need to configure Kakoune to talk to `kak-lsp` (see 
[Usage section](https://github.com/kak-lsp/kak-lsp#usage)). A basic
configuration will only get you LSP but you can also activate inlay
diagnostics and auto-formatting on save. The following might help you
get all of this.

    eval %sh{kak-lsp --kakoune -s $kak_session}  # Not needed if you load it with plug.kak.
    hook global WinSetOption filetype=rust %{
        # Enable LSP
        lsp-enable-window

        # Auto-formatting on save
        hook window BufWritePre .* lsp-formatting-sync

        # Configure inlay hints (only on save)
        hook window -group rust-inlay-hints BufWritePost .* rust-analyzer-inlay-hints
        hook -once -always window WinSetOption filetype=.* %{
            remove-hooks window rust-inlay-hints
        }
    }

## Helix

[Helix](https://docs.helix-editor.com/) supports LSP by default.
However, it won’t install `rust-analyzer` automatically. You can follow
instructions for [installing the rust-analyzer binary](#rust_analyzer_binary).

## Visual Studio 2022

There are multiple rust-analyzer extensions for Visual Studio 2022 on
Windows:

### VS RustAnalyzer

(License: GPL)

[Visual Studio
Marketplace](https://marketplace.visualstudio.com/items?itemName=cchharris.vsrustanalyzer)

[GitHub](https://github.com/cchharris/VS-RustAnalyzer)

### SourceGear Rust

(License: closed source)

[Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=SourceGear.SourceGearRust)

[GitHub (docs, issues, discussions)](https://github.com/sourcegear/rust-vs-extension)

-   Free (no-cost)

-   Supports all editions of Visual Studio 2022 on Windows: Community,
    Professional, or Enterprise

## Lapce

[Lapce](https://lapce.dev/) has a Rust plugin which you can install
directly. Unfortunately, it downloads an old version of `rust-analyzer`,
but you can set the server path under Settings.

## Zed

[Zed](https://zed.dev) has native `rust-analyzer` support. If the
rust-analyzer binary is not available, Zed can install it when opening
a Rust file.


<a id=troubleshooting></a>

# Troubleshooting

First, search the [troubleshooting FAQ](#faq). If your problem appears
there (and the proposed solution works for you), great! Otherwise, read on.

Start with looking at the rust-analyzer version. Try **rust-analyzer:
Show RA Version** in VS Code (using **Command Palette** feature
typically activated by Ctrl+Shift+P) or `rust-analyzer --version` in the
command line. If the date is more than a week ago, it’s better to update
rust-analyzer version.

The next thing to check would be panic messages in rust-analyzer’s log.
Log messages are printed to stderr, in VS Code you can see them in the
`Output > Rust Analyzer Language Server` tab of the panel. To see more
logs, set the `RA_LOG=info` environment variable, this can be done
either by setting the environment variable manually or by using
`rust-analyzer.server.extraEnv`, note that both of these approaches
require the server to be restarted.

To fully capture LSP messages between the editor and the server, run
the `rust-analyzer: Toggle LSP Logs` command and check `Output > Rust
Analyzer Language Server Trace`.

The root cause for many "nothing works" problems is that rust-analyzer
fails to understand the project structure. To debug that, first note the
`rust-analyzer` section in the status bar. If it has an error icon and
red, that’s the problem (hover will have somewhat helpful error
message). **rust-analyzer: Status** prints dependency information for
the current file. Finally, `RA_LOG=project_model=debug` enables verbose
logs during project loading.

If rust-analyzer outright crashes, try running
`rust-analyzer analysis-stats /path/to/project/directory/` on the
command line. This command type checks the whole project in batch mode
bypassing LSP machinery.

When filing issues, it is useful (but not necessary) to try to minimize
examples. An ideal bug reproduction looks like this:

```shell
$ git clone https://github.com/username/repo.git && cd repo && git switch --detach commit-hash
$ rust-analyzer --version
rust-analyzer dd12184e4 2021-05-08 dev
$ rust-analyzer analysis-stats .
💀 💀 💀
```

It is especially useful when the `repo` doesn’t use external crates or
the standard library.

If you want to go as far as to modify the source code to debug the
problem, be sure to take a look at the [contribution guide](#contributing/index)!


<a id=faq></a>

# Troubleshooting FAQ

### I see a warning "Variable `None` should have snake_case name, e.g. `none`"

rust-analyzer fails to resolve `None`, and thinks you are binding to a variable
named `None`. That's usually a sign of a corrupted sysroot. Try removing and re-installing
it: `rustup component remove rust-src` then `rustup component install rust-src`.

### Rust Analyzer and Cargo compete over the build lock

Rust Analyzer invokes Cargo in the background, and it can thus block manually executed
`cargo` commands from making progress (or vice-versa). In some cases, this can also cause
unnecessary recompilations caused by cache thrashing. To avoid this, you can configure
Rust Analyzer to use a [different target directory](#cargo.targetDir).
This will allow both the IDE and Cargo to make progress independently, at the cost of
increased disk space usage caused by the duplicated artifact directories.


<a id=configuration></a>

# Configuration

**Source:**
[config.rs](https://github.com/rust-lang/rust-analyzer/blob/master/crates/rust-analyzer/src/config.rs)

The [Installation](#installation) section contains details on
configuration for some of the editors. In general `rust-analyzer` is
configured via LSP messages, which means that it’s up to the editor to
decide on the exact format and location of configuration files.

Some clients, such as [VS Code](#vs_code) or [COC plugin in
Vim](#coc-rust-analyzer) provide `rust-analyzer` specific configuration
UIs. Others may require you to know a bit more about the interaction
with `rust-analyzer`.

For the later category, it might help to know that the initial
configuration is specified as a value of the `initializationOptions`
field of the [`InitializeParams` message, in the LSP
protocol](https://microsoft.github.io/language-server-protocol/specifications/specification-current/#initialize).
The spec says that the field type is `any?`, but `rust-analyzer` is
looking for a JSON object that is constructed using settings from the
list below. Name of the setting, ignoring the `rust-analyzer.` prefix,
is used as a path, and value of the setting becomes the JSON property
value.

For example, a very common configuration is to enable proc-macro
support, can be achieved by sending this JSON:

    {
      "cargo": {
        "buildScripts": {
          "enable": true,
        },
      },
      "procMacro": {
        "enable": true,
      }
    }

Please consult your editor’s documentation to learn more about how to
configure [LSP
servers](https://microsoft.github.io/language-server-protocol/).

To verify which configuration is actually used by `rust-analyzer`, set
`RA_LOG` environment variable to `rust_analyzer=info` and look for
config-related messages. Logs should show both the JSON that
`rust-analyzer` sees as well as the updated config.

This is the list of config options `rust-analyzer` supports:

{{#include configuration_generated.md}}


<a id=non_cargo_based_projects></a>

# Non-Cargo Based Projects

rust-analyzer does not require Cargo. However, if you use some other
build system, you’ll have to describe the structure of your project for
rust-analyzer in the `rust-project.json` format:

```typescript
interface ProjectJson {
    /// Path to the sysroot directory.
    ///
    /// The sysroot is where rustc looks for the
    /// crates that are built-in to rust, such as
    /// std.
    ///
    /// https://doc.rust-lang.org/rustc/command-line-arguments.html#--sysroot-override-the-system-root
    ///
    /// To see the current value of sysroot, you
    /// can query rustc:
    ///
    /// ```
    /// $ rustc --print sysroot
    /// /Users/yourname/.rustup/toolchains/stable-x86_64-apple-darwin
    /// ```
    sysroot?: string;
    /// Path to the directory with *source code* of
    /// sysroot crates.
    ///
    /// By default, this is `lib/rustlib/src/rust/library`
    /// relative to the sysroot.
    ///
    /// It should point to the directory where std,
    /// core, and friends can be found:
    ///
    /// https://github.com/rust-lang/rust/tree/master/library.
    ///
    /// If provided, rust-analyzer automatically adds
    /// dependencies on sysroot crates. Conversely,
    /// if you omit this path, you can specify sysroot
    /// dependencies yourself and, for example, have
    /// several different "sysroots" in one graph of
    /// crates.
    sysroot_src?: string;
    /// A ProjectJson describing the crates of the sysroot.
    sysroot_project?: ProjectJson;

    /// List of groups of common cfg values, to allow
    /// sharing them between crates.
    ///
    /// Maps from group name to its cfgs. Cfg follow
    /// the same format as `Crate.cfg`.
    cfg_groups?: { [key: string]: string[]; };
    /// The set of crates comprising the current
    /// project. Must include all transitive
    /// dependencies as well as sysroot crate (libstd,
    /// libcore and such).
    crates: Crate[];
    /// Configuration for CLI commands.
    ///
    /// These are used for running and debugging binaries
    /// and tests without encoding build system-specific
    /// knowledge into rust-analyzer.
    ///
    /// # Example
    ///
    /// Below is an example of a test runnable. `{label}` and `{test_id}`
    /// are explained in `Runnable::args`'s documentation below.
    ///
    /// ```json
    /// {
    ///     "program": "buck",
    ///     "args": [
    ///         "test",
    ///          "{label}",
    ///          "--",
    ///          "{test_id}",
    ///          "--print-passing-details"
    ///     ],
    ///     "cwd": "/home/user/repo-root/",
    ///     "kind": "testOne"
    /// }
    /// ```
    runnables?: Runnable[];
}

interface Crate {
    /// Optional crate name used for display purposes,
    /// without affecting semantics. See the `deps`
    /// key for semantically-significant crate names.
    display_name?: string;
    /// Path to the root module of the crate.
    root_module: string;
    /// Edition of the crate.
    edition: '2015' | '2018' | '2021' | '2024';
    /// The version of the crate. Used for calculating
    /// the correct docs.rs URL.
    version?: string;
    /// Dependencies
    deps: Dep[];
    /// Should this crate be treated as a member of
    /// current "workspace".
    ///
    /// By default, inferred from the `root_module`
    /// (members are the crates which reside inside
    /// the directory opened in the editor).
    ///
    /// Set this to `false` for things like standard
    /// library and 3rd party crates to enable
    /// performance optimizations (rust-analyzer
    /// assumes that non-member crates don't change).
    is_workspace_member?: boolean;
    /// Optionally specify the (super)set of `.rs`
    /// files comprising this crate.
    ///
    /// By default, rust-analyzer assumes that only
    /// files under `root_module.parent` can belong
    /// to a crate. `include_dirs` are included
    /// recursively, unless a subdirectory is in
    /// `exclude_dirs`.
    ///
    /// Different crates can share the same `source`.
    ///
    /// If two crates share an `.rs` file in common,
    /// they *must* have the same `source`.
    /// rust-analyzer assumes that files from one
    /// source can't refer to files in another source.
    source?: {
        include_dirs: string[];
        exclude_dirs: string[];
    };
    /// List of cfg groups this crate inherits.
    ///
    /// All cfg in these groups will be concatenated to
    /// `cfg`. It is impossible to replace a value from
    /// the groups.
    cfg_groups?: string[];
    /// The set of cfgs activated for a given crate, like
    /// `["unix", "feature=\"foo\"", "feature=\"bar\""]`.
    cfg: string[];
    /// Target tuple for this Crate.
    ///
    /// Used when running `rustc --print cfg`
    /// to get target-specific cfgs.
    target?: string;
    /// Environment variables, used for
    /// the `env!` macro
    env: { [key: string]: string; };

    /// Whether the crate is a proc-macro crate.
    is_proc_macro: boolean;
    /// For proc-macro crates, path to compiled
    /// proc-macro (.so file).
    proc_macro_dylib_path?: string;

    /// Repository, matching the URL that would be used
    /// in Cargo.toml.
    repository?: string;

    /// Build-specific data about this crate.
    build?: BuildInfo;
}

interface Dep {
    /// Index of a crate in the `crates` array.
    crate: number;
    /// Name as should appear in the (implicit)
    /// `extern crate name` declaration.
    name: string;
}

interface BuildInfo {
    /// The name associated with this crate.
    ///
    /// This is determined by the build system that produced
    /// the `rust-project.json` in question. For instance, if buck were used,
    /// the label might be something like `//ide/rust/rust-analyzer:rust-analyzer`.
    ///
    /// Do not attempt to parse the contents of this string; it is a build system-specific
    /// identifier similar to `Crate::display_name`.
    label: string;
    /// Path corresponding to the build system-specific file defining the crate.
    build_file: string;
    /// The kind of target.
    ///
    /// This information is used to determine what sort
    /// of runnable codelens to provide, if any.
    target_kind: 'bin' | 'lib' | 'test';
}

interface Runnable {
    /// The program invoked by the runnable.
    ///
    /// For example, this might be `cargo`, `buck`, or `bazel`.
    program: string;
    /// The arguments passed to `program`.
    args: string[];
    /// The current working directory of the runnable.
    cwd: string;
    /// Used to decide what code lens to offer.
    ///
    /// `testOne`: This runnable will be used when the user clicks the 'Run Test'
    /// CodeLens above a test.
    ///
    /// The args for testOne can contain two template strings:
    /// `{label}` and `{test_id}`. `{label}` will be replaced
    /// with the `Build::label` and `{test_id}` will be replaced
    /// with the test name.
    kind: 'testOne' | string;
}
```

This format is provisional and subject to change. Specifically, the
`roots` setup will be different eventually.

There are three ways to feed `rust-project.json` to rust-analyzer:

-   Place `rust-project.json` file at the root of the project, and
    rust-analyzer will discover it.

-   Specify
    `"rust-analyzer.linkedProjects": [ "path/to/rust-project.json" ]` in
    the settings (and make sure that your LSP client sends settings as a
    part of initialize request).

-   Specify
    `"rust-analyzer.linkedProjects": [ { "roots": […​], "crates": […​] }]`
    inline.

Relative paths are interpreted relative to `rust-project.json` file
location or (for inline JSON) relative to `rootUri`.

You can set the `RA_LOG` environment variable to `rust_analyzer=info` to
inspect how rust-analyzer handles config and project loading.

Note that calls to `cargo check` are disabled when using
`rust-project.json` by default, so compilation errors and warnings will
no longer be sent to your LSP client. To enable these compilation errors
you will need to specify explicitly what command rust-analyzer should
run to perform the checks using the
`rust-analyzer.check.overrideCommand` configuration. As an example, the
following configuration explicitly sets `cargo check` as the `check`
command.

    { "rust-analyzer.check.overrideCommand": ["cargo", "check", "--message-format=json"] }

`check.overrideCommand` requires the command specified to output json
error messages for rust-analyzer to consume. The `--message-format=json`
flag does this for `cargo check` so whichever command you use must also
output errors in this format. See the [Configuration](#_configuration)
section for more information.


<a id=security></a>

# Security

At the moment, rust-analyzer assumes that all code is trusted. Here is a
**non-exhaustive** list of ways to make rust-analyzer execute arbitrary
code:

-   proc macros and build scripts are executed by default

-   `.cargo/config` can override `rustc` with an arbitrary executable

-   `rust-toolchain.toml` can override `rustc` with an arbitrary
    executable

-   VS Code plugin reads configuration from project directory, and that
    can be used to override paths to various executables, like `rustfmt`
    or `rust-analyzer` itself.

-   rust-analyzer’s syntax trees library uses a lot of `unsafe` and
    hasn’t been properly audited for memory safety.


<a id=privacy></a>

# Privacy

The LSP server performs no network access in itself, but runs
`cargo metadata` which will update or download the crate registry and
the source code of the project dependencies. If enabled (the default),
build scripts and procedural macros can do anything.

The Code extension does not access the network.

Any other editor plugins are not under the control of the
`rust-analyzer` developers. For any privacy concerns, you should check
with their respective developers.

For `rust-analyzer` developers, `cargo xtask release` uses the GitHub
API to put together the release notes.


<a id=features></a>

# Features

{{#include features_generated.md:2:}}


<a id=assists></a>

# Assists

Assists, or code actions, are small local refactorings, available in a
particular context. They are usually triggered by a shortcut or by
clicking a light bulb icon in the editor. Cursor position or selection
is signified by `┃` character.

{{#include assists_generated.md:2:}}


<a id=diagnostics></a>

# Diagnostics

While most errors and warnings provided by rust-analyzer come from the
`cargo check` integration, there’s a growing number of diagnostics
implemented using rust-analyzer’s own analysis. Some of these
diagnostics don’t respect `#[allow]` or `#[deny]` attributes yet, but
can be turned off using the `rust-analyzer.diagnostics.enable`,
`rust-analyzer.diagnostics.experimental.enable` or
`rust-analyzer.diagnostics.disabled` settings.

## Clippy

To run `cargo clippy` instead of `cargo check`, you can set
`"rust-analyzer.check.command": "clippy"`.

{{#include diagnostics_generated.md:2:}}


<a id=editor_features></a>

# Editor Features

## VS Code

### Color configurations

It is possible to change the foreground/background color and font
family/size of inlay hints. Just add this to your `settings.json`:

```json
{
  "editor.inlayHints.fontFamily": "Courier New",
  "editor.inlayHints.fontSize": 11,

  "workbench.colorCustomizations": {
    // Name of the theme you are currently using
    "[Default Dark+]": {
      "editorInlayHint.foreground": "#868686f0",
      "editorInlayHint.background": "#3d3d3d48",

      // Overrides for specific kinds of inlay hints
      "editorInlayHint.typeForeground": "#fdb6fdf0",
      "editorInlayHint.parameterForeground": "#fdb6fdf0",
    }
  }
}
```

### Semantic style customizations

You can customize the look of different semantic elements in the source
code. For example, mutable bindings are underlined by default and you
can override this behavior by adding the following section to your
`settings.json`:

```json
{
  "editor.semanticTokenColorCustomizations": {
    "rules": {
      "*.mutable": {
        "fontStyle": "", // underline is the default
      },
    }
  },
}
```

Most themes doesn’t support styling unsafe operations differently yet.
You can fix this by adding overrides for the rules `operator.unsafe`,
`function.unsafe`, and `method.unsafe`:

```json
{
   "editor.semanticTokenColorCustomizations": {
         "rules": {
             "operator.unsafe": "#ff6600",
             "function.unsafe": "#ff6600",
             "method.unsafe": "#ff6600"
         }
    },
}
```

In addition to the top-level rules you can specify overrides for
specific themes. For example, if you wanted to use a darker text color
on a specific light theme, you might write:

```json
{
   "editor.semanticTokenColorCustomizations": {
         "rules": {
             "operator.unsafe": "#ff6600"
         },
         "[Ayu Light]": {
            "rules": {
               "operator.unsafe": "#572300"
            }
         }
    },
}
```

Make sure you include the brackets around the theme name. For example,
use `"[Ayu Light]"` to customize the theme Ayu Light.

### Special `when` clause context for keybindings.

You may use `inRustProject` context to configure keybindings for rust
projects only. For example:

```json
{
    "key": "ctrl+alt+d",
    "command": "rust-analyzer.openDocs",
    "when": "inRustProject"
}
```

More about `when` clause contexts
[here](https://code.visualstudio.com/docs/getstarted/keybindings#_when-clause-contexts).

### Setting runnable environment variables

You can use "rust-analyzer.runnables.extraEnv" setting to define
runnable environment-specific substitution variables. The simplest way
for all runnables in a bunch:

```json
"rust-analyzer.runnables.extraEnv": {
    "RUN_SLOW_TESTS": "1"
}
```

Or it is possible to specify vars more granularly:

```json
"rust-analyzer.runnables.extraEnv": [
    {
        // "mask": null, // null mask means that this rule will be applied for all runnables
        "env": {
                "APP_ID": "1",
                "APP_DATA": "asdf"
        }
    },
    {
        "mask": "test_name",
        "env": {
                "APP_ID": "2", // overwrites only APP_ID
        }
    }
]
```

You can use any valid regular expression as a mask. Also note that a
full runnable name is something like **run bin\_or\_example\_name**,
**test some::mod::test\_name** or **test-mod some::mod**, so it is
possible to distinguish binaries, single tests, and test modules with
this masks: `"^run"`, `"^test "` (the trailing space matters!), and
`"^test-mod"` respectively.

If needed, you can set different values for different platforms:

```json
"rust-analyzer.runnables.extraEnv": [
    {
        "platform": "win32", // windows only
        "env": {
                "APP_DATA": "windows specific data"
        }
    },
    {
        "platform": ["linux"],
        "env": {
                "APP_DATA": "linux data",
        }
    },
    { // for all platforms
        "env": {
                "APP_COMMON_DATA": "xxx",
        }
    }
]
```

### Compiler feedback from external commands

Instead of relying on the built-in `cargo check`, you can configure Code
to run a command in the background and use the `$rustc-watch` problem
matcher to generate inline error markers from its output.

To do this you need to create a new [VS Code
Task](https://code.visualstudio.com/docs/editor/tasks) and set
`"rust-analyzer.checkOnSave": false` in preferences.

For example, if you want to run
[`cargo watch`](https://crates.io/crates/cargo-watch) instead, you might
add the following to `.vscode/tasks.json`:

```json
{
    "label": "Watch",
    "group": "build",
    "type": "shell",
    "command": "cargo watch",
    "problemMatcher": "$rustc-watch",
    "isBackground": true
}
```

### Live Share

VS Code Live Share has partial support for rust-analyzer.

Live Share *requires* the official Microsoft build of VS Code, OSS
builds will not work correctly.

The host’s rust-analyzer instance will be shared with all guests joining
the session. The guests do not have to have the rust-analyzer extension
installed for this to work.

If you are joining a Live Share session and *do* have rust-analyzer
installed locally, commands from the command palette will not work
correctly since they will attempt to communicate with the local server.


<a id=contributing_README></a>

# Contributing Quick Start

rust-analyzer is an ordinary Rust project, which is organized as a Cargo workspace, builds on stable and doesn't depend on C libraries.
So, just

```bash
$ cargo test
```

should be enough to get you started!

To learn more about how rust-analyzer works, see [Architecture](#architecture).
It also explains the high-level layout of the source code.
Do skim through that document.

We also publish rustdoc docs to <https://rust-lang.github.io/rust-analyzer/ide/>.
Note though, that the internal documentation is very incomplete.

Various organizational and process issues are discussed in this document.

# Getting in Touch

rust-analyzer is a part of the [RLS-2.0 working group](https://github.com/rust-lang/compiler-team/tree/6a769c13656c0a6959ebc09e7b1f7c09b86fb9c0/working-groups/rls-2.0).
Discussion happens in this Zulip stream:

<https://rust-lang.zulipchat.com/#narrow/stream/185405-t-compiler.2Frust-analyzer>


# Issue Labels

* [good-first-issue](https://github.com/rust-lang/rust-analyzer/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22good%20first%20issue%22)
  are good issues to get into the project.
* [E-has-instructions](https://github.com/rust-lang/rust-analyzer/issues?q=is%3Aopen+is%3Aissue+label%3AE-has-instructions)
  issues have links to the code in question and tests.
* [Broken Window](https://github.com/rust-lang/rust-analyzer/issues?q=is:issue+is:open+label:%22Broken+Window%22)
  are issues which are not necessarily critical by themselves, but which should be fixed ASAP regardless, to avoid accumulation of technical debt.
* [E-easy](https://github.com/rust-lang/rust-analyzer/issues?q=is%3Aopen+is%3Aissue+label%3AE-easy),
  [E-medium](https://github.com/rust-lang/rust-analyzer/issues?q=is%3Aopen+is%3Aissue+label%3AE-medium),
  [E-hard](https://github.com/rust-lang/rust-analyzer/issues?q=is%3Aopen+is%3Aissue+label%3AE-hard),
  [E-unknown](https://github.com/rust-lang/rust-analyzer/issues?q=is%3Aopen+is%3Aissue+label%3AE-unknown),
  labels are *estimates* for how hard would be to write a fix. Each triaged issue should have one of these labels.
* [S-actionable](https://github.com/rust-lang/rust-analyzer/issues?q=is%3Aopen+is%3Aissue+label%3AS-actionable) and
  [S-unactionable](https://github.com/rust-lang/rust-analyzer/issues?q=is%3Aopen+is%3Aissue+label%3AS-unactionable)
  specify if there are concrete steps to resolve or advance an issue. Roughly, actionable issues need only work to be fixed,
  while unactionable ones are blocked either on user feedback (providing a reproducible example), or on larger architectural
  work or decisions. This classification is descriptive, not prescriptive, and might be wrong: Any unactionable issue might have a simple fix that we missed.
  Each triaged issue should have one of these labels.
* [fun](https://github.com/rust-lang/rust-analyzer/issues?q=is%3Aopen+is%3Aissue+label%3Afun)
  is for cool, but probably hard stuff.
* [C-Architecture](https://github.com/rust-lang/rust-analyzer/issues?q=is%3Aissue%20state%3Aopen%20label%3AC-Architecture)
  is for moderate/large scale architecture discussion.
  Also a kind of fun.
  These issues should generally include a link to a Zulip discussion thread.

# Code Style & Review Process

See the [Style Guide](#style).

# Cookbook

## CI

We use GitHub Actions for CI.
Most of the things, including formatting, are checked by `cargo test`.
If `cargo test` passes locally, that's a good sign that CI will be green as well.
The only exception is that some long-running tests are skipped locally by default.
Use `env RUN_SLOW_TESTS=1 cargo test` to run the full suite.

We use bors to enforce the [not rocket science](https://graydon2.dreamwidth.org/1597.html) rule.

## Launching rust-analyzer

Debugging the language server can be tricky.
LSP is rather chatty, so driving it from the command line is not really feasible, driving it via VS Code requires interacting with two processes.

For this reason, the best way to see how rust-analyzer works is to **find a relevant test and execute it**.
VS Code & Emacs include an action for running a single test.

Launching a VS Code instance with a locally built language server is also possible.
There's **"Run Extension (Debug Build)"** launch configuration for this in VS Code.

In general, I use one of the following workflows for fixing bugs and implementing features:

If the problem concerns only internal parts of rust-analyzer (i.e. I don't need to touch the `rust-analyzer` crate or TypeScript code), there is a unit-test for it.
So, I use **rust-analyzer: Run** action in VS Code to run this single test, and then just do printf-driven development/debugging.
As a sanity check after I'm done, I use `cargo xtask install --server` and **Reload Window** action in VS Code to verify that the thing works as I expect.

If the problem concerns only the VS Code extension, I use **Run Installed Extension** launch configuration from `launch.json`.
Notably, this uses the usual `rust-analyzer` binary from `PATH`.
For this, it is important to have the following in your `settings.json` file:

```json
{
    "rust-analyzer.server.path": "rust-analyzer"
}
```

After I am done with the fix, I use `cargo xtask install --client` to try the new extension for real.

If I need to fix something in the `rust-analyzer` crate, I feel sad because it's on the boundary between the two processes, and working there is slow.
I usually just `cargo xtask install --server` and poke changes from my live environment.
Note that this uses `--release`, which is usually faster overall, because loading stdlib into debug version of rust-analyzer takes a lot of time.
To speed things up, sometimes I open a temporary hello-world project which has `"rust-analyzer.cargo.sysroot": null` in `.code/settings.json`.
This flag causes rust-analyzer to skip loading the sysroot, which greatly reduces the amount of things rust-analyzer needs to do, and makes printf's more useful.
Note that you should only use the `eprint!` family of macros for debugging: stdout is used for LSP communication, and `print!` would break it.

If I need to fix something simultaneously in the server and in the client, I feel even more sad.
I don't have a specific workflow for this case.

Additionally, I use `cargo run --release -p rust-analyzer -- analysis-stats path/to/some/rust/crate` to run a batch analysis.
This is primarily useful for performance optimizations, or for bug minimization.

## TypeScript Tests

If you change files under `editors/code` and would like to run the tests and linter, install npm and run:

```bash
cd editors/code
npm ci
npm run lint
```

## How to ...

* ... add an assist? [#7535](https://github.com/rust-lang/rust-analyzer/pull/7535)
* ... add a new protocol extension? [#4569](https://github.com/rust-lang/rust-analyzer/pull/4569)
* ... add a new configuration option? [#7451](https://github.com/rust-lang/rust-analyzer/pull/7451)
* ... add a new completion? [#6964](https://github.com/rust-lang/rust-analyzer/pull/6964)
* ... allow new syntax in the parser? [#7338](https://github.com/rust-lang/rust-analyzer/pull/7338)

## Logging

Logging is done by both rust-analyzer and VS Code, so it might be tricky to figure out where logs go.

Inside rust-analyzer, we use the [`tracing`](https://docs.rs/tracing/) crate for logging,
and [`tracing-subscriber`](https://docs.rs/tracing-subscriber) for logging frontend.
By default, log goes to stderr, but the stderr itself is processed by VS Code.
`--log-file <PATH>` CLI argument allows logging to file.
Setting the `RA_LOG_FILE=<PATH>` environment variable will also log to file, it will also override `--log-file`.

To see the server stderr output in the running VS Code instance, go to the "Output" tab of the panel
and select `rust-analyzer Language Server`.
This shows `eprintln!` as well.
Note that `stdout` is used by LSP messages, so using `println!`—or anything that writes to `stdout`—will break rust-analyzer!

To log all communication between the server and the client, there are two choices:

* You can log on the server side, by running something like

  ```bash
  env RA_LOG=lsp_server=debug code .
  ```

* You can log on the client side, by the `rust-analyzer: Toggle LSP Logs` command or enabling `"rust-analyzer.trace.server": "verbose"` workspace setting.
  These logs are shown in a separate tab named `rust-analyzer LSP Trace` in the output and could be used with LSP inspector.
  Kudos to [@DJMcNab](https://github.com/DJMcNab) for setting this awesome infra up!

Finally there are the logs of the VSCode extension itself which go into the `rust-analyzer Extension` output tab.

There are also several VS Code commands which might be of interest:

* `rust-analyzer: Status` shows some memory-usage statistics.

* `rust-analyzer: View Hir` shows the HIR expressions within the function containing the cursor.

* If `rust-analyzer.showSyntaxTree` is enabled in settings, `Rust Syntax Tree: Focus on Rust Syntax Tree View` shows the syntax tree of the current file.

  You can click on nodes in the rust editor to go to the corresponding syntax node.

  You can click on `Reveal Syntax Element` next to a syntax node to go to the corresponding rust code and highlight the proper text range.

  If you trigger Go to Definition in the inspected Rust source file,
  the syntax tree view should scroll to and select the
  appropriate syntax node token.

  You can click on `Copy` next to a syntax node to copy a text representation of the node.

  ![demo](https://github.com/user-attachments/assets/2d20ae87-0abf-495f-bee8-54aa2494a00d)

## Profiling

We have a built-in hierarchical profiler, you can enable it by using `RA_PROFILE` env-var:

```bash
RA_PROFILE=*             // dump everything
RA_PROFILE=foo|bar|baz   // enabled only selected entries
RA_PROFILE=*@3>10        // dump everything, up to depth 3, if it takes more than 10 ms
```

Some rust-analyzer contributors have `export RA_PROFILE='*>10'` in my shell profile.

For machine-readable JSON output, we have the `RA_PROFILE_JSON` env variable. We support
filtering only by span name:

```bash
RA_PROFILE=* // dump everything
RA_PROFILE_JSON="vfs_load|parallel_prime_caches|discover_command" // dump selected spans
```

We also have a "counting" profiler which counts number of instances of popular structs.
It is enabled by `RA_COUNT=1`.

To measure time for from-scratch analysis, use something like this:

```bash
$ cargo run --release -p rust-analyzer -- analysis-stats ../chalk/
```

For measuring time of incremental analysis, use either of these:

```bash
$ cargo run --release -p rust-analyzer -- analysis-bench ../chalk/ --highlight ../chalk/chalk-engine/src/logic.rs
$ cargo run --release -p rust-analyzer -- analysis-bench ../chalk/ --complete ../chalk/chalk-engine/src/logic.rs:94:0
```

Look for `fn benchmark_xxx` tests for a quick way to reproduce performance problems.

## Release Process

Release process is handled by `release`, `dist`, `publish-release-notes` and `promote` xtasks, `release` being the main one.

`release` assumes that you have checkouts of `rust-analyzer`, `rust-analyzer.github.io`, and `rust-lang/rust` in the same directory:

```bash
./rust-analyzer
./rust-analyzer.github.io
./rust-rust-analyzer  # Note the name!
```

The remote for `rust-analyzer` must be called `upstream` (I use `origin` to point to my fork).
In addition, for `xtask promote` (see below), `rust-rust-analyzer` must have a `rust-analyzer` remote pointing to this repository on GitHub.

`release` calls the GitHub API calls to scrape pull request comments and categorize them in the changelog.
This step uses the `curl` and `jq` applications, which need to be available in `PATH`.
Finally, you need to obtain a GitHub personal access token and set the `GITHUB_TOKEN` environment variable.

Release steps:

1. Set the `GITHUB_TOKEN` environment variable.
2. Inside rust-analyzer, run `cargo xtask release`. This will:
   * checkout the `release` branch
   * reset it to `upstream/nightly`
   * push it to `upstream`. This triggers GitHub Actions which:
     * runs `cargo xtask dist` to package binaries and VS Code extension
     * makes a GitHub release
     * publishes the VS Code extension to the marketplace
   * call the GitHub API for PR details
   * create a new changelog in `rust-analyzer.github.io`
3. While the release is in progress, fill in the changelog.
4. Commit & push the changelog.
5. Run `cargo xtask publish-release-notes <CHANGELOG>` -- this will convert the changelog entry in AsciiDoc to Markdown and update the body of GitHub Releases entry.
6. Tweet.
7. Perform a subtree [pull](#performing-a-pull).
8. Perform a subtree [push](#performing-a-push).

If the GitHub Actions release fails because of a transient problem like a timeout, you can re-run the job from the Actions console.
If it fails because of something that needs to be fixed, remove the release tag (if needed), fix the problem, then start over.
Make sure to remove the new changelog post created when running `cargo xtask release` a second time.

We release "nightly" every night automatically and promote the latest nightly to "stable" manually, every week.

We don't do "patch" releases, unless something truly egregious comes up.
To do a patch release, cherry-pick the fix on top of the current `release` branch and push the branch.
There's no need to write a changelog for a patch release, it's OK to include the notes about the fix into the next weekly one.
Note: we tag releases by dates, releasing a patch release on the same day should work (by overwriting a tag), but I am not 100% sure.

## Permissions

There are two sets of people with extra permissions:

* The [rust-lang](https://github.com/rust-lang) team [t-rust-analyzer](https://github.com/rust-lang/team/blob/master/teams/rust-analyzer.toml).
  This team has write access to the repository and merge queue permissions (note the repo itself is managed by infra admins).
  It's ok to self-approve if you think you know what you are doing!
  Feel free to request a review or assign any PR to a reviewer with the relevant expertise to bring the work to their attention.
  Don't feel pressured to review assigned PRs though.
  If you don't feel like reviewing for whatever reason, someone else will pick the review up (but please speak up if you don't feel like it)!
* The [rust-lang](https://github.com/rust-lang) team [t-rust-analyzer-contributors](https://github.com/rust-lang/team/blob/master/teams/rust-analyzer-contributors.toml).
  This team has general triaging permissions allowing to label, close and re-open issues.

## Synchronizing subtree changes

`rust-analyzer` is a [josh](https://josh-project.github.io/josh/intro.html) subtree of the [rust-lang/rust](https://github.com/rust-lang/rust)
repository. We use the [rustc-josh-sync](https://github.com/rust-lang/josh-sync) tool to perform synchronization between these two
repositories. You can find documentation of the tool [here](https://github.com/rust-lang/josh-sync).

You can install the synchronization tool using the following commands:
```
cargo install --locked --git https://github.com/rust-lang/josh-sync
```

Both pulls (synchronizing changes from rust-lang/rust into rust-analyzer) and pushes (synchronizing
changes from rust-analyzer into rust-lang/rust) are performed from this repository.
changes from rust-analyzer to rust-lang/rust) are performed from this repository.

Usually we first perform a pull, wait for it to be merged, and then perform a push.

### Performing a pull

1) Checkout a new branch that will be used to create a PR against rust-analyzer
2) Run the pull command
    ```
    rustc-josh-sync pull
    ```
3) Push the branch to your fork of `rust-analyzer` and create a PR
  - If you have the `gh` CLI installed, `rustc-josh-sync` can create the PR for you.

### Performing a push

Wait for the previous pull to be merged.

1) Switch to `master` and pull
2) Run the push command to create a branch named `<branch-name>` in a `rustc` fork under the `<gh-username>` account
    ```
    rustc-josh-sync push <branch-name> <gh-username>
    ```
   - The push will ask you to download a checkout of the `rust-lang/rust` repository.
   - If you get prompted for a password, see [this](https://github.com/rust-lang/josh-sync?tab=readme-ov-file#git-peculiarities).
3) Create a PR from `<branch-name>` into `rust-lang/rust`

> Besides the `rust` checkout, the Josh cache (stored under `~/.cache/rustc-josh`) will contain a bare clone of `rust-lang/rust`. This currently takes several GBs.


<a id=contributing_architecture></a>

# Architecture

This document describes the high-level architecture of rust-analyzer.
If you want to familiarize yourself with the code base, you are just in the right place!

You might also enjoy ["Explaining Rust Analyzer"](https://www.youtube.com/playlist?list=PLhb66M_x9UmrqXhQuIpWC5VgTdrGxMx3y) series on YouTube.
It goes deeper than what is covered in this document, but will take some time to watch.

See also these implementation-related blog posts:

* <https://rust-analyzer.github.io/blog/2019/11/13/find-usages.html>
* <https://rust-analyzer.github.io/blog/2020/07/20/three-architectures-for-responsive-ide.html>
* <https://rust-analyzer.github.io/blog/2020/09/16/challeging-LR-parsing.html>
* <https://rust-analyzer.github.io/blog/2020/09/28/how-to-make-a-light-bulb.html>
* <https://rust-analyzer.github.io/blog/2020/10/24/introducing-ungrammar.html>

For older, by now mostly outdated stuff, see the [guide](#guide) and [another playlist](https://www.youtube.com/playlist?list=PL85XCvVPmGQho7MZkdW-wtPtuJcFpzycE).

## Bird's Eye View

![](https://user-images.githubusercontent.com/4789492/107129398-0ab70f00-687a-11eb-9bfc-d4eb023aec06.png)


On the highest level, rust-analyzer is a thing which accepts input source code from the client and produces a structured semantic model of the code.

More specifically, input data consists of a set of test files (`(PathBuf, String)` pairs) and information about project structure, captured in the so called `CrateGraph`.
The crate graph specifies which files are crate roots, which cfg flags are specified for each crate and what dependencies exist between the crates.
This is the input (ground) state.
The analyzer keeps all this input data in memory and never does any IO.
Because the input data is source code, which typically measures in tens of megabytes at most, keeping everything in memory is OK.

A "structured semantic model" is basically an object-oriented representation of modules, functions and types which appear in the source code.
This representation is fully "resolved": all expressions have types, all references are bound to declarations, etc.
This is derived state.

The client can submit a small delta of input data (typically, a change to a single file) and get a fresh code model which accounts for changes.

The underlying engine makes sure that model is computed lazily (on-demand) and can be quickly updated for small modifications.

## Entry Points

`crates/rust-analyzer/src/bin/main.rs` contains the main function which spawns LSP.
This is *the* entry point, but it front-loads a lot of complexity, so it's fine to just skim through it.

`crates/rust-analyzer/src/handlers/request.rs` implements all LSP requests and is a great place to start if you are already familiar with LSP.

`Analysis` and `AnalysisHost` types define the main API for consumers of IDE services.

## Code Map

This section talks briefly about various important directories and data structures.
Pay attention to the **Architecture Invariant** sections.
They often talk about things which are deliberately absent in the source code.

Note also which crates are **API Boundaries**.
Remember, [rules at the boundary are different](https://www.tedinski.com/2018/02/06/system-boundaries.html).

### `xtask`

This is rust-analyzer's "build system".
We use cargo to compile rust code, but there are also various other tasks, like release management or local installation.
They are handled by Rust code in the xtask directory.

### `editors/code`

VS Code plugin.

### `lib/`

rust-analyzer independent libraries which we publish to crates.io.
It's not heavily utilized at the moment.

### `crates/parser`

It is a hand-written recursive descent parser, which produces a sequence of events like "start node X", "finish node Y".
It works similarly to [kotlin's parser](https://github.com/JetBrains/kotlin/blob/4d951de616b20feca92f3e9cc9679b2de9e65195/compiler/frontend/src/org/jetbrains/kotlin/parsing/KotlinParsing.java),
which is a good source of inspiration for dealing with syntax errors and incomplete input.
Original [libsyntax parser](https://github.com/rust-lang/rust/blob/6b99adeb11313197f409b4f7c4083c2ceca8a4fe/src/libsyntax/parse/parser.rs) is what we use for the definition of the Rust language.
`TreeSink` and `TokenSource` traits bridge the tree-agnostic parser from `grammar` with `rowan` trees.

**Architecture Invariant:** the parser is independent of the particular tree structure and particular representation of the tokens.
It transforms one flat stream of events into another flat stream of events.
Token independence allows us to parse out both text-based source code and `tt`-based macro input.
Tree independence allows us to more easily vary the syntax tree implementation.
It should also unlock efficient light-parsing approaches.
For example, you can extract the set of names defined in a file (for typo correction) without building a syntax tree.

**Architecture Invariant:** parsing never fails, the parser produces `(T, Vec<Error>)` rather than `Result<T, Error>`.

### `crates/syntax`

Rust syntax tree structure and parser.
See [RFC](https://github.com/rust-lang/rfcs/pull/2256) and [./syntax.md](#syntax) for some design notes.

- [rowan](https://github.com/rust-analyzer/rowan) library is used for constructing syntax trees.
- `ast` provides a type safe API on top of the raw `rowan` tree.
- `ungrammar` description of the grammar, which is used to generate `syntax_kinds` and `ast` modules, using `cargo test -p xtask` command.

Tests for ra_syntax are mostly data-driven.
`test_data/parser` contains subdirectories with a bunch of `.rs` (test vectors) and `.txt` files with corresponding syntax trees.
During testing, we check `.rs` against `.txt`.
If the `.txt` file is missing, it is created (this is how you update tests).
Additionally, running the xtask test suite with `cargo test -p xtask` will walk the grammar module and collect all `// test test_name` comments into files inside `test_data/parser/inline` directory.

To update test data, run with `UPDATE_EXPECT` variable:

```bash
env UPDATE_EXPECT=1 cargo qt
```

After adding a new inline test you need to run `cargo test -p xtask` and also update the test data as described above.

Note [`api_walkthrough`](https://github.com/rust-lang/rust-analyzer/blob/2fb6af89eb794f775de60b82afe56b6f986c2a40/crates/ra_syntax/src/lib.rs#L190-L348)
in particular: it shows off various methods of working with syntax tree.

See [#93](https://github.com/rust-lang/rust-analyzer/pull/93) for an example PR which fixes a bug in the grammar.

**Architecture Invariant:** `syntax` crate is completely independent from the rest of rust-analyzer. It knows nothing about salsa or LSP.
This is important because it is possible to make useful tooling using only the syntax tree.
Without semantic information, you don't need to be able to _build_ code, which makes the tooling more robust.
See also https://mlfbrown.com/paper.pdf.
You can view the `syntax` crate as an entry point to rust-analyzer.
`syntax` crate is an **API Boundary**.

**Architecture Invariant:** syntax tree is a value type.
The tree is fully determined by the contents of its syntax nodes, it doesn't need global context (like an interner) and doesn't store semantic info.
Using the tree as a store for semantic info is convenient in traditional compilers, but doesn't work nicely in the IDE.
Specifically, assists and refactors require transforming syntax trees, and that becomes awkward if you need to do something with the semantic info.

**Architecture Invariant:** syntax tree is built for a single file.
This is to enable parallel parsing of all files.

**Architecture Invariant:**  Syntax trees are by design incomplete and do not enforce well-formedness.
If an AST method returns an `Option`, it *can* be `None` at runtime, even if this is forbidden by the grammar.

### `crates/base-db`

We use the [salsa](https://github.com/salsa-rs/salsa) crate for incremental and on-demand computation.
Roughly, you can think of salsa as a key-value store, but it can also compute derived values using specified functions.
The `base-db` crate provides basic infrastructure for interacting with salsa.
Crucially, it defines most of the "input" queries: facts supplied by the client of the analyzer.
Reading the docs of the `base_db::input` module should be useful: everything else is strictly derived from those inputs.

**Architecture Invariant:** particularities of the build system are *not* the part of the ground state.
In particular, `base-db` knows nothing about cargo.
For example, `cfg` flags are a part of `base_db`, but `feature`s are not.
A `foo` feature is a Cargo-level concept, which is lowered by Cargo to `--cfg feature=foo` argument on the command line.
The `CrateGraph` structure is used to represent the dependencies between the crates abstractly.

**Architecture Invariant:** `base-db` doesn't know about file system and file paths.
Files are represented with opaque `FileId`, there's no operation to get an `std::path::Path` out of the `FileId`.

### `crates/hir-expand`, `crates/hir-def`, `crates/hir_ty`

These crates are the *brain* of rust-analyzer.
This is the compiler part of the IDE.

`hir-xxx` crates have a strong [ECS](https://en.wikipedia.org/wiki/Entity_component_system) flavor, in that they work with raw ids and directly query the database.
There's little abstraction here.
These crates integrate deeply with salsa and chalk.

Name resolution, macro expansion and type inference all happen here.
These crates also define various intermediate representations of the core.

`ItemTree` condenses a single `SyntaxTree` into a "summary" data structure, which is stable over modifications to function bodies.

`DefMap` contains the module tree of a crate and stores module scopes.

`Body` stores information about expressions.

**Architecture Invariant:** these crates are not, and will never be, an api boundary.

**Architecture Invariant:** these crates explicitly care about being incremental.
The core invariant we maintain is "typing inside a function's body never invalidates global derived data".
i.e., if you change the body of `foo`, all facts about `bar` should remain intact.

**Architecture Invariant:** hir exists only in context of particular crate instance with specific CFG flags.
The same syntax may produce several instances of HIR if the crate participates in the crate graph more than once.

### `crates/hir`

The top-level `hir` crate is an **API Boundary**.
If you think about "using rust-analyzer as a library", `hir` crate is most likely the façade you'll be talking to.

It wraps ECS-style internal API into a more OO-flavored API (with an extra `db` argument for each call).

**Architecture Invariant:** `hir` provides a static, fully resolved view of the code.
While internal `hir-*` crates _compute_ things, `hir`, from the outside, looks like an inert data structure.

`hir` also handles the delicate task of going from syntax to the corresponding `hir`.
Remember that the mapping here is one-to-many.
See `Semantics` type and `source_to_def` module.

Note in particular a curious recursive structure in `source_to_def`.
We first resolve the parent _syntax_ node to the parent _hir_ element.
Then we ask the _hir_ parent what _syntax_ children does it have.
Then we look for our node in the set of children.

This is the heart of many IDE features, like goto definition, which start with figuring out the hir node at the cursor.
This is some kind of (yet unnamed) uber-IDE pattern, as it is present in Roslyn and Kotlin as well.

### `crates/ide`, `crates/ide-db`, `crates/ide-assists`, `crates/ide-completion`, `crates/ide-diagnostics`, `crates/ide-ssr`

The `ide` crate builds on top of `hir` semantic model to provide high-level IDE features like completion or goto definition.
It is an **API Boundary**.
If you want to use IDE parts of rust-analyzer via LSP, custom flatbuffers-based protocol or just as a library in your text editor, this is the right API.

**Architecture Invariant:** `ide` crate's API is build out of POD types with public fields.
The API uses editor's terminology, it talks about offsets and string labels rather than in terms of definitions or types.
It is effectively the view in MVC and viewmodel in [MVVM](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel).
All arguments and return types are conceptually serializable.
In particular, syntax trees and hir types are generally absent from the API (but are used heavily in the implementation).
Shout outs to LSP developers for popularizing the idea that "UI" is a good place to draw a boundary at.

`ide` is also the first crate which has the notion of change over time.
`AnalysisHost` is a state to which you can transactionally `apply_change`.
`Analysis` is an immutable snapshot of the state.

Internally, `ide` is split across several crates. `ide-assists`, `ide-completion`, `ide-diagnostics` and `ide-ssr` implement large isolated features.
`ide-db` implements common IDE functionality (notably, reference search is implemented here).
The `ide` contains a public API/façade, as well as implementation for a plethora of smaller features.

**Architecture Invariant:** `ide` crate strives to provide a _perfect_ API.
Although at the moment it has only one consumer, the LSP server, LSP *does not* influence its API design.
Instead, we keep in mind a hypothetical _ideal_ client -- an IDE tailored specifically for rust, every nook and cranny of which is packed with Rust-specific goodies.

### `crates/rust-analyzer`

This crate defines the `rust-analyzer` binary, so it is the **entry point**.
It implements the language server.

**Architecture Invariant:** `rust-analyzer` is the only crate that knows about LSP and JSON serialization.
If you want to expose a data structure `X` from ide to LSP, don't make it serializable.
Instead, create a serializable counterpart in `rust-analyzer` crate and manually convert between the two.

`GlobalState` is the state of the server.
The `main_loop` defines the server event loop which accepts requests and sends responses.
Requests that modify the state or might block user's typing are handled on the main thread.
All other requests are processed in background.

**Architecture Invariant:** the server is stateless, a-la HTTP.
Sometimes state needs to be preserved between requests.
For example, "what is the `edit` for the fifth completion item of the last completion edit?".
For this, the second request should include enough info to re-create the context from scratch.
This generally means including all the parameters of the original request.

`reload` module contains the code that handles configuration and Cargo.toml changes.
This is a tricky business.

**Architecture Invariant:** `rust-analyzer` should be partially available even when the build is broken.
Reloading process should not prevent IDE features from working.

### `crates/toolchain`, `crates/project-model`, `crates/flycheck`

These crates deal with invoking `cargo` to learn about project structure and get compiler errors for the "check on save" feature.

They use `crates/paths` heavily instead of `std::path`.
A single `rust-analyzer` process can serve many projects, so it is important that server's current directory does not leak.

### `crates/mbe`, `crates/tt`, `crates/proc-macro-api`, `crates/proc-macro-srv`, `crates/proc-macro-srv-cli`

These crates implement macros as token tree -> token tree transforms.
They are independent from the rest of the code.

`tt` crate defined `TokenTree`, a single token or a delimited sequence of token trees.
`mbe` crate contains tools for transforming between syntax trees and token tree.
And it also handles the actual parsing and expansion of declarative macro (a-la "Macros By Example" or mbe).

For proc macros, the client-server model are used.
We start a separate process  (`proc-macro-srv-cli`) which loads and runs the proc-macros for us.
And the client (`proc-macro-api`) provides an interface to talk to that server separately.

And then token trees are passed from client, and the server will load the corresponding dynamic library (which built by `cargo`).
And due to the fact the api for getting result from proc macro are always unstable in `rustc`,
we maintain our own copy (and paste) of that part of code to allow us to build the whole thing in stable rust.

 **Architecture Invariant:**
Bad proc macros may panic or segfault accidentally. So we run it in another process and recover it from fatal error.
And they may be non-deterministic which conflict how `salsa` works, so special attention is required.

### `crates/cfg`

This crate is responsible for parsing, evaluation and general definition of `cfg` attributes.

### `crates/vfs`, `crates/vfs-notify`, `crates/paths`

These crates implement a virtual file system.
They provide consistent snapshots of the underlying file system and insulate messy OS paths.

**Architecture Invariant:** vfs doesn't assume a single unified file system.
i.e., a single rust-analyzer process can act as a remote server for two different machines, where the same `/tmp/foo.rs` path points to different files.
For this reason, all path APIs generally take some existing path as a "file system witness".

### `crates/stdx`

This crate contains various non-rust-analyzer specific utils, which could have been in std, as well
as copies of unstable std items we would like to make use of already.

### `crates/profile`

This crate contains utilities for CPU and memory profiling.

### `crates/intern`

This crate contains infrastructure for globally interning things via `Arc`.

### `crates/load-cargo`

This crate exposes several utilities for loading projects, used by the main `rust-analyzer` crate
and other downstream consumers.

### `crates/rustc-dependencies`

This crate wraps the `rustc_*` crates rust-analyzer relies on and conditionally points them to
mirrored crates-io releases such that rust-analyzer keeps building on stable.

### `crates/span`

This crate exposes types and functions related to rust-analyzer's span for macros.

A span is effectively a text range relative to some item in a file with a given `SyntaxContext` (hygiene).

## Cross-Cutting Concerns

This sections talks about the things which are everywhere and nowhere in particular.

### Stability Guarantees

One of the reasons rust-analyzer moves relatively fast is that we don't introduce new stability guarantees.
Instead, as much as possible we leverage existing ones.

Examples:

* The `ide` API of rust-analyzer are explicitly unstable, but the LSP interface is stable, and here we just implement a stable API managed by someone else.
* Rust language and Cargo are stable, and they are the primary inputs to rust-analyzer.
* The `rowan` library is published to crates.io, but it is deliberately kept under `1.0` and always makes semver-incompatible upgrades

Another important example is that rust-analyzer isn't run on CI, so, unlike `rustc` and `clippy`, it is actually ok for us to change runtime behavior.

At some point we might consider opening up APIs or allowing crates.io libraries to include rust-analyzer specific annotations, but that's going to be a big commitment on our side.

Exceptions:

* `rust-project.json` is a de-facto stable format for non-cargo build systems.
  It is probably ok enough, but was definitely stabilized implicitly.
  Lesson for the future: when designing API which could become a stability boundary, don't wait for the first users until you stabilize it.
  By the time you have first users, it is already de-facto stable.
  And the users will first use the thing, and *then* inform you that now you have users.
  The sad thing is that stuff should be stable before someone uses it for the first time, or it should contain explicit opt-in.
* We ship some LSP extensions, and we try to keep those somewhat stable.
  Here, we need to work with a finite set of editor maintainers, so not providing rock-solid guarantees works.

### Code generation

Some components in this repository are generated through automatic processes.
Generated code is updated automatically on `cargo test`.
Generated code is generally committed to the git repository.

In particular, we generate:

* API for working with syntax trees (`syntax::ast`, the [`ungrammar`](https://github.com/rust-analyzer/ungrammar) crate).
* Various sections of the manual:

    * features
    * assists
    * config

* Documentation tests for assists

See the `xtask\src\codegen\assists_doc_tests.rs` module for details.

**Architecture Invariant:** we avoid bootstrapping.
For codegen we need to parse Rust code.
Using rust-analyzer for that would work and would be fun, but it would also complicate the build process a lot.
For that reason, we use syn and manual string parsing.

### Cancellation

Let's say that the IDE is in the process of computing syntax highlighting, when the user types `foo`.
What should happen?
`rust-analyzer`s answer is that the highlighting process should be cancelled -- its results are now stale, and it also blocks modification of the inputs.

The salsa database maintains a global revision counter.
When applying a change, salsa bumps this counter and waits until all other threads using salsa finish.
If a thread does salsa-based computation and notices that the counter is incremented, it panics with a special value (see `Canceled::throw`).
That is, rust-analyzer requires unwinding.

`ide` is the boundary where the panic is caught and transformed into a `Result<T, Cancelled>`.

### Testing

rust-analyzer has three interesting [system boundaries](https://www.tedinski.com/2018/04/10/making-tests-a-positive-influence-on-design.html) to concentrate tests on.

The outermost boundary is the `rust-analyzer` crate, which defines an LSP interface in terms of stdio.
We do integration testing of this component, by feeding it with a stream of LSP requests and checking responses.
These tests are known as "heavy", because they interact with Cargo and read real files from disk.
For this reason, we try to avoid writing too many tests on this boundary: in a statically typed language, it's hard to make an error in the protocol itself if messages are themselves typed.
Heavy tests are only run when `RUN_SLOW_TESTS` env var is set.

The middle, and most important, boundary is `ide`.
Unlike `rust-analyzer`, which exposes API, `ide` uses Rust API and is intended for use by various tools.
A typical test creates an `AnalysisHost`, calls some `Analysis` functions and compares the results against expectation.

The innermost and most elaborate boundary is `hir`.
It has a much richer vocabulary of types than `ide`, but the basic testing setup is the same: we create a database, run some queries, assert result.

For comparisons, we use the `expect` crate for snapshot testing.

To test various analysis corner cases and avoid forgetting about old tests, we use so-called marks.
See the [cov_mark](https://docs.rs/cov-mark/latest/cov_mark/) crate documentation for more.

**Architecture Invariant:** rust-analyzer tests do not use libcore or libstd.
All required library code must be a part of the tests.
This ensures fast test execution.

**Architecture Invariant:** tests are data driven and do not test the API.
Tests which directly call various API functions are a liability, because they make refactoring the API significantly more complicated.
So most of the tests look like this:

```rust
#[track_caller]
fn check(input: &str, expect: expect_test::Expect) {
    // The single place that actually exercises a particular API
}

#[test]
fn foo() {
    check("foo", expect![["bar"]]);
}

#[test]
fn spam() {
    check("spam", expect![["eggs"]]);
}
// ...and a hundred more tests that don't care about the specific API at all.
```

To specify input data, we use a single string literal in a special format, which can describe a set of rust files.
See the `Fixture` its module for fixture examples and documentation.

**Architecture Invariant:** all code invariants are tested by `#[test]` tests.
There's no additional checks in CI, formatting and tidy tests are run with `cargo test`.

**Architecture Invariant:** tests do not depend on any kind of external resources, they are perfectly reproducible.


### Performance Testing

TBA, take a look at the `metrics` xtask and `#[test] fn benchmark_xxx()` functions.

### Error Handling

**Architecture Invariant:** core parts of rust-analyzer (`ide`/`hir`) don't interact with the outside world and thus can't fail.
Only parts touching LSP are allowed to do IO.

Internals of rust-analyzer need to deal with broken code, but this is not an error condition.
rust-analyzer is robust: various analysis compute `(T, Vec<Error>)` rather than `Result<T, Error>`.

rust-analyzer is a complex long-running process.
It will always have bugs and panics.
But a panic in an isolated feature should not bring down the whole process.
Each LSP-request is protected by a `catch_unwind`.
We use `always` and `never` macros instead of `assert` to gracefully recover from impossible conditions.

### Observability

rust-analyzer is a long-running process, so it is important to understand what's going on inside.
We have several instruments for that.

The event loop that runs rust-analyzer is very explicit.
Rather than spawning futures or scheduling callbacks (open), the event loop accepts an `enum` of possible events (closed).
It's easy to see all the things that trigger rust-analyzer processing, together with their performance

rust-analyzer includes a simple hierarchical profiler (`hprof`).
It is enabled with `RA_PROFILE='*>50'` env var (log all (`*`) actions which take more than `50` ms) and produces output like:

```
85ms - handle_completion
    68ms - import_on_the_fly
        67ms - import_assets::search_for_relative_paths
             0ms - crate_def_map:wait (804 calls)
             0ms - find_path (16 calls)
             2ms - find_similar_imports (1 calls)
             0ms - generic_params_query (334 calls)
            59ms - trait_solve_query (186 calls)
         0ms - Semantics::analyze_impl (1 calls)
         1ms - render_resolution (8 calls)
     0ms - Semantics::analyze_impl (5 calls)
```

This is cheap enough to enable in production.


Similarly, we save live object counting (`RA_COUNT=1`).
It is not cheap enough to enable in prod, and this is a bug which should be fixed.

### Configurability

rust-analyzer strives to be as configurable as possible while offering reasonable defaults where no configuration exists yet.
The rule of thumb is to enable most features by default unless they are buggy or degrade performance too much.
There will always be features that some people find more annoying than helpful, so giving the users the ability to tweak or disable these is a big part of offering a good user experience.
Enabling them by default is a matter of discoverability, as many users don't know about some features even though they are presented in the manual.
Mind the code--architecture gap: at the moment, we are using fewer feature flags than we really should.

### Serialization

In Rust, it is easy (often too easy) to add serialization to any type by adding `#[derive(Serialize)]`.
This easiness is misleading -- serializable types impose significant backwards compatibility constraints.
If a type is serializable, then it is a part of some IPC boundary.
You often don't control the other side of this boundary, so changing serializable types is hard.

For this reason, the types in `ide`, `base_db` and below are not serializable by design.
If such types need to cross an IPC boundary, then the client of rust-analyzer needs to provide a custom, client-specific serialization format.
This isolates backwards compatibility and migration concerns to a specific client.

For example, `rust-project.json` is its own format -- it doesn't include `CrateGraph` as is.
Instead, it creates a `CrateGraph` by calling appropriate constructing functions.


<a id=contributing_debugging></a>

# Debugging VSCode plugin and the language server

## Prerequisites

- Install [LLDB](https://lldb.llvm.org/) and the [LLDB Extension](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb).
- Open the root folder in VSCode. Here you can access the preconfigured debug setups.

  <img height=150px src="https://user-images.githubusercontent.com/36276403/74611090-92ec5380-5101-11ea-8a41-598f51f3f3e3.png" alt="Debug options view">

- Install all TypeScript dependencies

  ```bash
  cd editors/code
  npm ci
  ```

## Common knowledge

* All debug configurations open a new `[Extension Development Host]` VSCode instance
where **only** the `rust-analyzer` extension being debugged is enabled.
* To activate the extension you need to open any Rust project folder in `[Extension Development Host]`.

## Debug TypeScript VSCode extension

- `Run Installed Extension` - runs the extension with the globally installed `rust-analyzer` binary.
- `Run Extension (Debug Build)` - runs extension with the locally built LSP server (`target/debug/rust-analyzer`).

TypeScript debugging is configured to watch your source edits and recompile.
To apply changes to an already running debug process, press <kbd>Ctrl+Shift+P</kbd> and run the following command in your `[Extension Development Host]`

```
> Developer: Reload Window
```

## Debug Rust LSP server

- When attaching a debugger to an already running `rust-analyzer` server on Linux you might need to enable `ptrace` for unrelated processes by running:

  ```bash
  echo 0 | sudo tee /proc/sys/kernel/yama/ptrace_scope
  ```

- By default, the LSP server is built without debug information. To enable it, you'll need to change `Cargo.toml`:

  ```toml
    [profile.dev]
    debug = 2
  ```

- Select `Run Extension (Debug Build)` to run your locally built `target/debug/rust-analyzer`.

- In the original VSCode window once again select the `Attach To Server` debug configuration.

- A list of running processes should appear. Select the `rust-analyzer` from this repo.

- Navigate to `crates/rust-analyzer/src/main_loop.rs` and add a breakpoint to the `on_request` function.

- Go back to the `[Extension Development Host]` instance and hover over a Rust variable and your breakpoint should hit.

If you need to debug the server from the very beginning, including its initialization code, you can use the `--wait-dbg` command line argument or `RA_WAIT_DBG` environment variable. The server will spin at the beginning of the `try_main` function (see `crates\rust-analyzer\src\bin\main.rs`)

```rust
    let mut d = 4;
    while d == 4 { // set a breakpoint here and change the value
        d = 4;
    }
```

However for this to work, you will need to enable debug_assertions in your build

```rust
RUSTFLAGS='--cfg debug_assertions' cargo build --release
```

## Demo

- [Debugging TypeScript VScode extension](https://www.youtube.com/watch?v=T-hvpK6s4wM).
- [Debugging Rust LSP server](https://www.youtube.com/watch?v=EaNb5rg4E0M).

## Troubleshooting

### Can't find the `rust-analyzer` process

It could be a case of just jumping the gun.

The `rust-analyzer` is only started once the `onLanguage:rust` activation.

Make sure you open a rust file in the `[Extension Development Host]` and try again.

### Can't connect to `rust-analyzer`

Make sure you have run `echo 0 | sudo tee /proc/sys/kernel/yama/ptrace_scope`.

By default this should reset back to 1 every time you log in.

### Breakpoints are never being hit

Check your version of `lldb`. If it's version 6 and lower, use the `classic` adapter type.
It's `lldb.adapterType` in settings file.

If you're running `lldb` version 7, change the lldb adapter type to `bundled` or `native`.


<a id=contributing_guide></a>

# Guide to rust-analyzer

## About the guide

This guide describes the current state of rust-analyzer as of the 2024-01-01 release
(git tag [2024-01-01]). Its purpose is to document various problems and
architectural solutions related to the problem of building IDE-first compiler
for Rust. There is a video version of this guide as well -
however, it's based on an older 2019-01-20 release (git tag [guide-2019-01]):
https://youtu.be/ANKBNiSWyfc.

[guide-2019-01]: https://github.com/rust-lang/rust-analyzer/tree/guide-2019-01
[2024-01-01]: https://github.com/rust-lang/rust-analyzer/tree/2024-01-01


## The big picture

On the highest possible level, rust-analyzer is a stateful component. A client may
apply changes to the analyzer (new contents of `foo.rs` file is "fn main() {}")
and it may ask semantic questions about the current state (what is the
definition of the identifier with offset 92 in file `bar.rs`?). Two important
properties hold:

* Analyzer does not do any I/O. It starts in an empty state and all input data is
  provided via `apply_change` API.

* Only queries about the current state are supported. One can, of course,
  simulate undo and redo by keeping a log of changes and inverse changes respectively.

## IDE API

To see the bigger picture of how the IDE features work, let's take a look at the [`AnalysisHost`] and
[`Analysis`] pair of types. `AnalysisHost` has three methods:

* `default()` for creating an empty analysis instance
* `apply_change(&mut self)` to make changes (this is how you get from an empty
  state to something interesting)
* `analysis(&self)` to get an instance of `Analysis`

`Analysis` has a ton of methods for IDEs, like `goto_definition`, or
`completions`. Both inputs and outputs of `Analysis`' methods are formulated in
terms of files and offsets, and **not** in terms of Rust concepts like structs,
traits, etc. The "typed" API with Rust specific types is slightly lower in the
stack, we'll talk about it later.

[`AnalysisHost`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/ide/src/lib.rs#L161-L213
[`Analysis`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/ide/src/lib.rs#L220-L761

The reason for this separation of `Analysis` and `AnalysisHost` is that we want to apply
changes "uniquely", but we might also want to fork an `Analysis` and send it to
another thread for background processing. That is, there is only a single
`AnalysisHost`, but there may be several (equivalent) `Analysis`.

Note that all of the `Analysis` API return `Cancellable<T>`. This is required to
be responsive in an IDE setting. Sometimes a long-running query is being computed
and the user types something in the editor and asks for completion. In this
case, we cancel the long-running computation (so it returns `Err(Cancelled)`),
apply the change and execute request for completion. We never use stale data to
answer requests. Under the cover, `AnalysisHost` "remembers" all outstanding
`Analysis` instances. The `AnalysisHost::apply_change` method cancels all
`Analysis`es, blocks until all of them are `Dropped` and then applies changes
in-place. This may be familiar to Rustaceans who use read-write locks for interior
mutability.

Next, let's talk about what the inputs to the `Analysis` are, precisely.

## Inputs

rust-analyzer never does any I/O itself, all inputs get passed explicitly via
the `AnalysisHost::apply_change` method, which accepts a single argument, a
`Change`. [`Change`] is a wrapper for `FileChange` that adds proc-macro knowledge.
[`FileChange`] is a builder for a single change "transaction", so it suffices
to study its methods to understand all the input data.

[`Change`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/hir-expand/src/change.rs#L10-L42
[`FileChange`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/base-db/src/change.rs#L14-L78

The `change_file` method controls the set of the input files, where each file
has an integer id (`FileId`, picked by the client) and text (`Option<Arc<str>>`).
Paths are tricky; they'll be explained below, in source roots section,
together with the `set_roots` method. The "source root" [`is_library`] flag
along with the concept of [`durability`] allows us to add a group of files which
are assumed to rarely change. It's mostly an optimization and does not change
the fundamental picture.

[`is_library`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/base-db/src/input.rs#L38
[`durability`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/base-db/src/change.rs#L80-L86

The `set_crate_graph` method allows us to control how the input files are partitioned
into compilation units -- crates. It also controls (in theory, not implemented
yet) `cfg` flags. `CrateGraph` is a directed acyclic graph of crates. Each crate
has a root `FileId`, a set of active `cfg` flags and a set of dependencies. Each
dependency is a pair of a crate and a name. It is possible to have two crates
with the same root `FileId` but different `cfg`-flags/dependencies. This model
is lower than Cargo's model of packages: each Cargo package consists of several
targets, each of which is a separate crate (or several crates, if you try
different feature combinations).

Procedural macros are inputs as well, roughly modeled as a crate with a bunch of
additional black box `dyn Fn(TokenStream) -> TokenStream` functions.

Soon we'll talk how we build an LSP server on top of `Analysis`, but first,
let's deal with that paths issue.

## Source roots (a.k.a. "Filesystems are horrible")

This is a non-essential section, feel free to skip.

The previous section said that the filesystem path is an attribute of a file,
but this is not the whole truth. Making it an absolute `PathBuf` will be bad for
several reasons. First, filesystems are full of (platform-dependent) edge cases:

* It's hard (requires a syscall) to decide if two paths are equivalent.
* Some filesystems are case-sensitive (e.g. macOS).
* Paths are not necessarily UTF-8.
* Symlinks can form cycles.

Second, this might hurt the reproducibility and hermeticity of builds. In theory,
moving a project from `/foo/bar/my-project` to `/spam/eggs/my-project` should
not change a bit in the output. However, if the absolute path is a part of the
input, it is at least in theory observable, and *could* affect the output.

Yet another problem is that we really *really* want to avoid doing I/O, but with
Rust the set of "input" files is not necessarily known up-front. In theory, you
can have `#[path="/dev/random"] mod foo;`.

To solve (or explicitly refuse to solve) these problems rust-analyzer uses the
concept of a "source root". Roughly speaking, source roots are the contents of a
directory on a file system, like `/home/matklad/projects/rustraytracer/**.rs`.

More precisely, all files (`FileId`s) are partitioned into disjoint
`SourceRoot`s. Each file has a relative UTF-8 path within the `SourceRoot`.
`SourceRoot` has an identity (integer ID). Crucially, the root path of the
source root itself is unknown to the analyzer: A client is supposed to maintain a
mapping between `SourceRoot` IDs (which are assigned by the client) and actual
`PathBuf`s. `SourceRoot`s give a sane tree model of the file system to the
analyzer.

Note that `mod`, `#[path]` and `include!()` can only reference files from the
same source root. It is of course possible to explicitly add extra files to
the source root, even `/dev/random`.

## Language Server Protocol

Now let's see how the `Analysis` API is exposed via the JSON RPC based language server protocol.
The hard part here is managing changes (which can come either from the file system
or from the editor) and concurrency (we want to spawn background jobs for things
like syntax highlighting). We use the event loop pattern to manage the zoo, and
the loop is the [`GlobalState::run`] function initiated by [`main_loop`] after
[`GlobalState::new`] does a one-time initialization and tearing down of the resources.

[`main_loop`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/rust-analyzer/src/main_loop.rs#L31-L54
[`GlobalState::new`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/rust-analyzer/src/global_state.rs#L148-L215
[`GlobalState::run`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/rust-analyzer/src/main_loop.rs#L114-L140

Let's walk through a typical analyzer session!

First, we need to figure out what to analyze. To do this, we run `cargo
metadata` to learn about Cargo packages for current workspace and dependencies,
and we run `rustc --print sysroot` and scan the "sysroot"
(the directory containing the current Rust toolchain's files) to learn about crates
like `std`. This happens in the [`GlobalState::fetch_workspaces`] method.
We load this configuration at the start of the server in [`GlobalState::new`],
but it's also triggered by workspace change events and requests to reload the
workspace from the client.

[`GlobalState::fetch_workspaces`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/rust-analyzer/src/reload.rs#L186-L257

The [`ProjectModel`] we get after this step is very Cargo and sysroot specific,
it needs to be lowered to get the input in the form of `Change`. This happens
in [`GlobalState::process_changes`] method. Specifically

* Create `SourceRoot`s for each Cargo package(s) and sysroot.
* Schedule a filesystem scan of the roots.
* Create an analyzer's `Crate` for each Cargo **target** and sysroot crate.
* Setup dependencies between the crates.

[`ProjectModel`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/project-model/src/workspace.rs#L57-L100
[`GlobalState::process_changes`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/rust-analyzer/src/global_state.rs#L217-L356

The results of the scan (which may take a while) will be processed in the body
of the main loop, just like any other change. Here's where we handle:

* [File system changes](https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/rust-analyzer/src/main_loop.rs#L273)
* [Changes from the editor](https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/rust-analyzer/src/main_loop.rs#L801-L803)

After a single loop's turn, we group the changes into one `Change` and
[apply] it. This always happens on the main thread and blocks the loop.

[apply]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/rust-analyzer/src/global_state.rs#L333

To handle requests, like ["goto definition"], we create an instance of the
`Analysis` and [`schedule`] the task (which consumes `Analysis`) on the
threadpool. [The task] calls the corresponding `Analysis` method, while
massaging the types into the LSP representation. Keep in mind that if we are
executing "goto definition" on the threadpool and a new change comes in, the
task will be canceled as soon as the main loop calls `apply_change` on the
`AnalysisHost`.

["goto definition"]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/rust-analyzer/src/main_loop.rs#L767
[`schedule`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/rust-analyzer/src/dispatch.rs#L138
[The task]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/rust-analyzer/src/handlers/request.rs#L610-L623

This concludes the overview of the analyzer's programing *interface*. Next, let's
dig into the implementation!

## Salsa

The most straightforward way to implement an "apply change, get analysis, repeat"
API would be to maintain the input state and to compute all possible analysis
information from scratch after every change. This works, but scales poorly with
the size of the project. To make this fast, we need to take advantage of the
fact that most of the changes are small, and that analysis results are unlikely
to change significantly between invocations.

To do this we use [salsa]: a framework for incremental on-demand computation.
You can skip the rest of the section if you are familiar with `rustc`'s red-green
algorithm (which is used for incremental compilation).

[salsa]: https://github.com/salsa-rs/salsa

It's better to refer to salsa's docs to learn about it. Here's a small excerpt:

The key idea of salsa is that you define your program as a set of queries. Every
query is used like a function `K -> V` that maps from some key of type `K` to a value
of type `V`. Queries come in two basic varieties:

* **Inputs**: the base inputs to your system. You can change these whenever you
  like.

* **Functions**: pure functions (no side effects) that transform your inputs
  into other values. The results of queries are memoized to avoid recomputing
  them a lot. When you make changes to the inputs, we'll figure out (fairly
  intelligently) when we can re-use these memoized values and when we have to
  recompute them.

For further discussion, its important to understand one bit of "fairly
intelligently". Suppose we have two functions, `f1` and `f2`, and one input,
`z`. We call `f1(X)` which in turn calls `f2(Y)` which inspects `i(Z)`. `i(Z)`
returns some value `V1`, `f2` uses that and returns `R1`, `f1` uses that and
returns `O`. Now, let's change `i` at `Z` to `V2` from `V1` and try to compute
`f1(X)` again. Because `f1(X)` (transitively) depends on `i(Z)`, we can't just
reuse its value as is. However, if `f2(Y)` is *still* equal to `R1` (despite
`i`'s change), we, in fact, *can* reuse `O` as result of `f1(X)`. And that's how
salsa works: it recomputes results in *reverse* order, starting from inputs and
progressing towards outputs, stopping as soon as it sees an intermediate value
that hasn't changed. If this sounds confusing to you, don't worry: it is
confusing. This illustration by @killercup might help:

![step 1](https://user-images.githubusercontent.com/1711539/51460907-c5484780-1d6d-11e9-9cd2-d6f62bd746e0.png)
![step 2](https://user-images.githubusercontent.com/1711539/51460915-c9746500-1d6d-11e9-9a77-27d33a0c51b5.png)
![step 3](https://user-images.githubusercontent.com/1711539/51460920-cda08280-1d6d-11e9-8d96-a782aa57a4d4.png)
![step 4](https://user-images.githubusercontent.com/1711539/51460927-d1340980-1d6d-11e9-851e-13c149d5c406.png)

## Salsa Input Queries

All analyzer information is stored in a salsa database. `Analysis` and
`AnalysisHost` types are essentially newtype wrappers for [`RootDatabase`]
-- a salsa database.

[`RootDatabase`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/ide-db/src/lib.rs#L69-L324

Salsa input queries are defined in [`SourceDatabase`] and [`SourceDatabaseExt`]
(which are a part of `RootDatabase`). They closely mirror the familiar `Change`
structure: indeed, what `apply_change` does is it sets the values of input queries.

[`SourceDatabase`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/base-db/src/lib.rs#L58-L65
[`SourceDatabaseExt`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/base-db/src/lib.rs#L76-L88

## From text to semantic model

The bulk of the rust-analyzer is transforming input text into a semantic model of
Rust code: a web of entities like modules, structs, functions and traits.

An important fact to realize is that (unlike most other languages like C# or
Java) there is not a one-to-one mapping between the source code and the semantic model. A
single function definition in the source code might result in several semantic
functions: for example, the same source file might get included as a module in
several crates or a single crate might be present in the compilation DAG
several times, with different sets of `cfg`s enabled. The IDE-specific task of
mapping source code into a semantic model is inherently imprecise for
this reason and gets handled by the [`source_analyzer`].

[`source_analyzer`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/hir/src/source_analyzer.rs

The semantic interface is declared in the [`semantics`] module. Each entity is
identified by an integer ID and has a bunch of methods which take a salsa database
as an argument and returns other entities (which are also IDs). Internally, these
methods invoke various queries on the database to build the model on demand.
Here's [the list of queries].

[`semantics`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/hir/src/semantics.rs
[the list of queries]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/hir-ty/src/db.rs#L29-L275

The first step of building the model is parsing the source code.

## Syntax trees

An important property of the Rust language is that each file can be parsed in
isolation. Unlike, say, `C++`, an `include` can't change the meaning of the
syntax. For this reason, rust-analyzer can build a syntax tree for each "source
file", which could then be reused by several semantic models if this file
happens to be a part of several crates.

The representation of syntax trees that rust-analyzer uses is similar to that of `Roslyn`
and Swift's new [libsyntax]. Swift's docs give an excellent overview of the
approach, so I skip this part here and instead outline the main characteristics
of the syntax trees:

* Syntax trees are fully lossless. Converting **any** text to a syntax tree and
  back is a total identity function. All whitespace and comments are explicitly
  represented in the tree.

* Syntax nodes have generic `(next|previous)_sibling`, `parent`,
  `(first|last)_child` functions. You can get from any one node to any other
  node in the file using only these functions.

* Syntax nodes know their range (start offset and length) in the file.

* Syntax nodes share the ownership of their syntax tree: if you keep a reference
  to a single function, the whole enclosing file is alive.

* Syntax trees are immutable and the cost of replacing the subtree is
  proportional to the depth of the subtree. Read Swift's docs to learn how
  immutable + parent pointers + cheap modification is possible.

* Syntax trees are build on best-effort basis. All accessor methods return
  `Option`s. The tree for `fn foo` will contain a function declaration with
  `None` for parameter list and body.

* Syntax trees do not know the file they are built from, they only know about
  the text.

The implementation is based on the generic [rowan] crate on top of which a
[rust-specific] AST is generated.

[libsyntax]: https://github.com/apple/swift/tree/5e2c815edfd758f9b1309ce07bfc01c4bc20ec23/lib/Syntax
[rowan]: https://github.com/rust-analyzer/rowan/tree/100a36dc820eb393b74abe0d20ddf99077b61f88
[rust-specific]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/syntax/src/ast/generated.rs

The next step in constructing the semantic model is ...

## Building a Module Tree

The algorithm for building a tree of modules is to start with a crate root
(remember, each `Crate` from a `CrateGraph` has a `FileId`), collect all `mod`
declarations and recursively process child modules. This is handled by the
[`crate_def_map_query`], with two slight variations.

[`crate_def_map_query`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/hir-def/src/nameres.rs#L307-L324

First, rust-analyzer builds a module tree for all crates in a source root
simultaneously. The main reason for this is historical (`module_tree` predates
`CrateGraph`), but this approach also enables accounting for files which are not
part of any crate. That is, if you create a file but do not include it as a
submodule anywhere, you still get semantic completion, and you get a warning
about a free-floating module (the actual warning is not implemented yet).

The second difference is that `crate_def_map_query` does not *directly* depend on
the `SourceDatabase::parse` query. Why would calling the parse directly be bad?
Suppose the user changes the file slightly, by adding an insignificant whitespace.
Adding whitespace changes the parse tree (because it includes whitespace),
and that means recomputing the whole module tree.

We deal with this problem by introducing an intermediate [`block_def_map_query`].
This query processes the syntax tree and extracts a set of declared submodule
names. Now, changing the whitespace results in `block_def_map_query` being
re-executed for a *single* module, but because the result of this query stays
the same, we don't have to re-execute [`crate_def_map_query`]. In fact, we only
need to re-execute it when we add/remove new files or when we change mod
declarations.

[`block_def_map_query`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/hir-def/src/nameres.rs#L326-L354

We store the resulting modules in a `Vec`-based indexed arena. The indices in
the arena becomes module IDs. And this brings us to the next topic:
assigning IDs in the general case.

## Location Interner pattern

One way to assign IDs is how we've dealt with modules: Collect all items into a
single array in some specific order and use the index in the array as an ID. The
main drawback of this approach is that these IDs are not stable: Adding a new item can
shift the IDs of all other items. This works for modules, because adding a module is
a comparatively rare operation, but would be less convenient for, for example,
functions.

Another solution here is positional IDs: We can identify a function as "the
function with name `foo` in a ModuleId(92) module". Such locations are stable:
adding a new function to the module (unless it is also named `foo`) does not
change the location. However, such "ID" types ceases to be a `Copy`able integer and in
general can become pretty large if we account for nesting (for example: "third parameter of
the `foo` function of the `bar` `impl` in the `baz` module").

[`Intern` and `Lookup`] traits allows us to combine the benefits of positional and numeric
IDs. Implementing both traits effectively creates a bidirectional append-only map
between locations and integer IDs (typically newtype wrappers for [`salsa::InternId`])
which can "intern" a location and return an integer ID back. The salsa database we use
includes a couple of [interners]. How to "garbage collect" unused locations
is an open question.

[`Intern` and `Lookup`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/hir-expand/src/lib.rs#L96-L106
[interners]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/hir-expand/src/lib.rs#L108-L122
[`salsa::InternId`]: https://docs.rs/salsa/0.16.1/salsa/struct.InternId.html

For example, we use `Intern` and `Lookup` implementations to assign IDs to
definitions of functions, structs, enums, etc. The location, [`ItemLoc`] contains
two bits of information:

* the ID of the module which contains the definition,
* the ID of the specific item in the module's source code.

We "could" use a text offset for the location of a particular item, but that would play
badly with salsa: offsets change after edits. So, as a rule of thumb, we avoid
using offsets, text ranges or syntax trees as keys and values for queries. What
we do instead is we store "index" of the item among all of the items of a file
(so, a positional based ID, but localized to a single file).

[`ItemLoc`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/hir-def/src/lib.rs#L209-L212

One thing we've glossed over for the time being is support for macros. We have
only proof of concept handling of macros at the moment, but they are extremely
interesting from an "assigning IDs" perspective.

## Macros and recursive locations

The tricky bit about macros is that they effectively create new source files.
While we can use `FileId`s to refer to original files, we can't just assign them
willy-nilly to the pseudo files of macro expansion. Instead, we use a special
ID, [`HirFileId`] to refer to either a usual file or a macro-generated file:

```rust
enum HirFileId {
    FileId(FileId),
    Macro(MacroCallId),
}
```

`MacroCallId` is an interned ID that identifies a particular macro invocation.
Simplifying, it's a `HirFileId` of a file containing the call plus the offset
of the macro call in the file.

Note how `HirFileId` is defined in terms of `MacroCallId` which is defined in
terms of `HirFileId`! This does not recur infinitely though: any chain of
`HirFileId`s bottoms out in `HirFileId::FileId`, that is, some source file
actually written by the user.

Note also that in the actual implementation, the two variants are encoded in
a single `u32`, which are differentiated by the MSB (most significant bit).
If the MSB is 0, the value represents a `FileId`, otherwise the remaining
31 bits represent a `MacroCallId`.

[`HirFileId`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/span/src/lib.rs#L148-L160

Now that we understand how to identify a definition, in a source or in a
macro-generated file, we can discuss name resolution a bit.

## Name resolution

Name resolution faces the same problem as the module tree: if we look at the
syntax tree directly, we'll have to recompute name resolution after every
modification. The solution to the problem is the same: We [lower] the source code of
each module into a position-independent representation which does not change if
we modify bodies of the items. After that we [loop] resolving all imports until
we've reached a fixed point.

[lower]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/hir-def/src/item_tree.rs#L110-L154
[loop]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/hir-def/src/nameres/collector.rs#L404-L437
And, given all our preparation with IDs and a position-independent representation,
it is satisfying to [test] that typing inside function body does not invalidate
name resolution results.

[test]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/hir-def/src/nameres/tests/incremental.rs#L31

An interesting fact about name resolution is that it "erases" all of the
intermediate paths from the imports: in the end, we know which items are defined
and which items are imported in each module, but, if the import was `use
foo::bar::baz`, we deliberately forget what modules `foo` and `bar` resolve to.

To serve "goto definition" requests on intermediate segments we need this info
in the IDE, however. Luckily, we need it only for a tiny fraction of imports, so we just ask
the module explicitly, "What does the path `foo::bar` resolve to?". This is a
general pattern: we try to compute the minimal possible amount of information
during analysis while allowing IDE to ask for additional specific bits.

Name resolution is also a good place to introduce another salsa pattern used
throughout the analyzer:

## Source Map pattern

Due to an obscure edge case in completion, IDE needs to know the syntax node of
a use statement which imported the given completion candidate. We can't just
store the syntax node as a part of name resolution: this will break
incrementality, due to the fact that syntax changes after every file
modification.

We solve this problem during the lowering step of name resolution. Along with
the [`ItemTree`] output, the lowering query additionally produces an [`AstIdMap`]
via an [`ast_id_map`] query. The `ItemTree` contains [imports], but in a
position-independent form based on [`AstId`]. The `AstIdMap` contains a mapping
from position-independent `AstId`s to (position-dependent) syntax nodes.

[`ItemTree`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/hir-def/src/item_tree.rs
[`AstIdMap`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/hir-expand/src/ast_id_map.rs#L136-L142
[`ast_id_map`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/hir-def/src/item_tree/lower.rs#L32
[imports]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/hir-def/src/item_tree.rs#L559-L563
[`AstId`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/hir-expand/src/ast_id_map.rs#L29


## Type inference

First of all, implementation of type inference in rust-analyzer was spearheaded
by [@flodiebold]. [#327] was an awesome Christmas present, thank you, Florian!

Type inference runs on per-function granularity and uses the patterns we've
discussed previously.

First, we [lower the AST] of a function body into a position-independent
representation. In this representation, each expression is assigned a
[positional ID]. Alongside the lowered expression, [a source map] is produced,
which maps between expression ids and original syntax. This lowering step also
deals with "incomplete" source trees by replacing missing expressions by an
explicit `Missing` expression.

Given the lowered body of the function, we can now run [type inference] and
construct a mapping from `ExprId`s to types.

[@flodiebold]: https://github.com/flodiebold
[#327]: https://github.com/rust-lang/rust-analyzer/pull/327
[lower the AST]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/hir-def/src/body.rs
[positional ID]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/hir-def/src/hir.rs#L37
[a source map]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/hir-def/src/body.rs#L84-L88
[type inference]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/hir-ty/src/infer.rs#L76-L131

## Tying it all together: completion

To conclude the overview of the rust-analyzer, let's trace the request for
(type-inference powered!) code completion!

We start by [receiving a message] from the language client. We decode the
message as a request for completion and [schedule it on the threadpool]. This is
the place where we [catch] canceled errors if, immediately after completion, the
client sends some modification.

In [the handler], we deserialize LSP requests into rust-analyzer specific data
types (by converting a file url into a numeric `FileId`), [ask analysis for
completion] and serialize results into the LSP.

The [completion implementation] is finally the place where we start doing the actual
work. The first step is to collect the [`CompletionContext`] -- a struct which
describes the cursor position in terms of Rust syntax and semantics. For
example, `expected_name: Option<NameOrNameRef>` is the syntactic representation
for the expected name of what we're completing (usually the parameter name of
a function argument), while `expected_type: Option<Type>` is the semantic model
for the expected type of what we're completing.

To construct the context, we first do an ["IntelliJ Trick"]: we insert a dummy
identifier at the cursor's position and parse this modified file, to get a
reasonably looking syntax tree. Then we do a bunch of "classification" routines
to figure out the context. For example, we [find an parent `fn` node], get a
[semantic model] for it (using the lossy `source_analyzer` infrastructure)
and use it to determine the [expected type at the cursor position].

The second step is to run a [series of independent completion routines]. Let's
take a closer look at [`complete_dot`], which completes fields and methods in
`foo.bar|`. First we extract a semantic receiver type out of the `DotAccess`
argument. Then, using the semantic model for the type, we determine if the
receiver implements the `Future` trait, and add a `.await` completion item in
the affirmative case. Finally, we add all fields & methods from the type to
completion.

[receiving a message]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/rust-analyzer/src/main_loop.rs#L213
[schedule it on the threadpool]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/rust-analyzer/src/dispatch.rs#L197-L211
[catch]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/rust-analyzer/src/dispatch.rs#L292
[the handler]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/rust-analyzer/src/handlers/request.rs#L850-L876
[ask analysis for completion]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/ide/src/lib.rs#L605-L615
[completion implementation]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/ide-completion/src/lib.rs#L148-L229
[`CompletionContext`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/ide-completion/src/context.rs#L407-L441
["IntelliJ Trick"]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/ide-completion/src/context.rs#L644-L648
[find an parent `fn` node]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/ide-completion/src/context/analysis.rs#L463
[semantic model]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/ide-completion/src/context/analysis.rs#L466
[expected type at the cursor position]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/ide-completion/src/context/analysis.rs#L467
[series of independent completion routines]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/ide-completion/src/lib.rs#L157-L226
[`complete_dot`]: https://github.com/rust-lang/rust-analyzer/blob/2024-01-01/crates/ide-completion/src/completions/dot.rs#L11-L41


<a id=contributing_lsp_extensions></a>

<!---
lsp/ext.rs hash: 78e87a78de8f288e

If you need to change the above hash to make the test pass, please check if you
need to adjust this doc as well and ping this issue:

  https://github.com/rust-lang/rust-analyzer/issues/4604

--->

# LSP Extensions

This document describes LSP extensions used by rust-analyzer.
It's a best effort document, when in doubt, consult the source (and send a PR with clarification ;-) ).
We aim to upstream all non Rust-specific extensions to the protocol, but this is not a top priority.
All capabilities are enabled via the `experimental` field of `ClientCapabilities` or `ServerCapabilities`.
Requests which we hope to upstream live under `experimental/` namespace.
Requests, which are likely to always remain specific to `rust-analyzer` are under `rust-analyzer/` namespace.

If you want to be notified about the changes to this document, subscribe to [#4604](https://github.com/rust-lang/rust-analyzer/issues/4604).


## Configuration in `initializationOptions`

**Upstream Issue:** https://github.com/microsoft/language-server-protocol/issues/567

The `initializationOptions` field of the `InitializeParams` of the initialization request should contain the `"rust-analyzer"` section of the configuration.

`rust-analyzer` normally sends a `"workspace/configuration"` request with `{ "items": ["rust-analyzer"] }` payload.
However, the server can't do this during initialization.
At the same time some essential configuration parameters are needed early on, before servicing requests.
For this reason, we ask that `initializationOptions` contains the configuration, as if the server did make a `"workspace/configuration"` request.

If a language client does not know about `rust-analyzer`'s configuration options it can get sensible defaults by doing any of the following:
 * Not sending `initializationOptions`
 * Sending `"initializationOptions": null`
 * Sending `"initializationOptions": {}`

## Snippet `TextEdit`

**Upstream Issue:** https://github.com/microsoft/language-server-protocol/issues/724

**Experimental Client Capability:** `{ "snippetTextEdit": boolean }`

If this capability is set, `WorkspaceEdit`s returned from `codeAction` requests and `TextEdit`s returned from `textDocument/onTypeFormatting` requests might contain `SnippetTextEdit`s instead of usual `TextEdit`s:

```typescript
interface SnippetTextEdit extends TextEdit {
    insertTextFormat?: InsertTextFormat;
    annotationId?: ChangeAnnotationIdentifier;
}
```

```typescript
export interface TextDocumentEdit {
    textDocument: OptionalVersionedTextDocumentIdentifier;
    edits: (TextEdit | SnippetTextEdit)[];
}
```

When applying such code action or text edit, the editor should insert snippet, with tab stops and placeholders.
At the moment, rust-analyzer guarantees that only a single `TextDocumentEdit` will have edits which can be `InsertTextFormat.Snippet`.
Any additional `TextDocumentEdit`s will only have edits which are `InsertTextFormat.PlainText`.

### Example

"Add `derive`" code action transforms `struct S;` into `#[derive($0)] struct S;`

### Unresolved Questions

* Where exactly are `SnippetTextEdit`s allowed (only in code actions at the moment)?
* Can snippets span multiple files (so far, no)?

## `CodeAction` Groups

**Upstream Issue:** https://github.com/microsoft/language-server-protocol/issues/994

**Experimental Client Capability:** `{ "codeActionGroup": boolean }`

If this capability is set, `CodeAction`s returned from the server contain an additional field, `group`:

```typescript
interface CodeAction {
    title: string;
    group?: string;
    ...
}
```

All code-actions with the same `group` should be grouped under single (extendable) entry in lightbulb menu.
The set of actions `[ { title: "foo" }, { group: "frobnicate", title: "bar" }, { group: "frobnicate", title: "baz" }]` should be rendered as

```
💡
  +-------------+
  | foo         |
  +-------------+-----+
  | frobnicate >| bar |
  +-------------+-----+
                | baz |
                +-----+
```

Alternatively, selecting `frobnicate` could present a user with an additional menu to choose between `bar` and `baz`.

### Example

```rust
fn main() {
    let x: Entry/*cursor here*/ = todo!();
}
```

Invoking code action at this position will yield two code actions for importing `Entry` from either `collections::HashMap` or `collection::BTreeMap`, grouped under a single "import" group.

### Unresolved Questions

* Is a fixed two-level structure enough?
* Should we devise a general way to encode custom interaction protocols for GUI refactorings?

## Parent Module

**Upstream Issue:** https://github.com/microsoft/language-server-protocol/issues/1002

**Experimental Server Capability:** `{ "parentModule": boolean }`

This request is sent from client to server to handle "Goto Parent Module" editor action.

**Method:** `experimental/parentModule`

**Request:** `TextDocumentPositionParams`

**Response:** `Location | Location[] | LocationLink[] | null`


### Example

```rust
// src/main.rs
mod foo;
// src/foo.rs

/* cursor here*/
```

`experimental/parentModule` returns a single `Link` to the `mod foo;` declaration.

### Unresolved Question

* An alternative would be to use a more general "gotoSuper" request, which would work for super methods, super classes and super modules.
  This is the approach IntelliJ Rust is taking.
  However, experience shows that super module (which generally has a feeling of navigation between files) should be separate.
  If you want super module, but the cursor happens to be inside an overridden function, the behavior with single "gotoSuper" request is surprising.

## Join Lines

**Upstream Issue:** https://github.com/microsoft/language-server-protocol/issues/992

**Experimental Server Capability:** `{ "joinLines": boolean }`

This request is sent from client to server to handle "Join Lines" editor action.

**Method:** `experimental/joinLines`

**Request:**

```typescript
interface JoinLinesParams {
    textDocument: TextDocumentIdentifier,
    /// Currently active selections/cursor offsets.
    /// This is an array to support multiple cursors.
    ranges: Range[],
}
```

**Response:** `TextEdit[]`

### Example

```rust
fn main() {
    /*cursor here*/let x = {
        92
    };
}
```

`experimental/joinLines` yields (curly braces are automagically removed)

```rust
fn main() {
    let x = 92;
}
```

### Unresolved Question

* What is the position of the cursor after `joinLines`?
  Currently, this is left to editor's discretion, but it might be useful to specify on the server via snippets.
  However, it then becomes unclear how it works with multi cursor.

## On Enter

**Upstream Issue:** https://github.com/microsoft/language-server-protocol/issues/1001

**Experimental Server Capability:** `{ "onEnter": boolean }`

This request is sent from client to server to handle the <kbd>Enter</kbd> key press.

**Method:** `experimental/onEnter`

**Request:**: `TextDocumentPositionParams`

**Response:**

```typescript
SnippetTextEdit[]
```

### Example

```rust
fn main() {
    // Some /*cursor here*/ docs
    let x = 92;
}
```

`experimental/onEnter` returns the following snippet

```rust
fn main() {
    // Some
    // $0 docs
    let x = 92;
}
```

The primary goal of `onEnter` is to handle automatic indentation when opening a new line.
This is not yet implemented.
The secondary goal is to handle fixing up syntax, like continuing doc strings and comments, and escaping `\n` in string literals.

As proper cursor positioning is raison d'être for `onEnter`, it uses `SnippetTextEdit`.

### Unresolved Question

* How to deal with synchronicity of the request?
  One option is to require the client to block until the server returns the response.
  Another option is to do a operational transforms style merging of edits from client and server.
  A third option is to do a record-replay: client applies heuristic on enter immediately, then applies all user's keypresses.
  When the server is ready with the response, the client rollbacks all the changes and applies the recorded actions on top of the correct response.
* How to deal with multiple carets?
* Should we extend this to arbitrary typed events and not just `onEnter`?

## Structural Search Replace (SSR)

**Experimental Server Capability:** `{ "ssr": boolean }`

This request is sent from client to server to handle structural search replace -- automated syntax tree based transformation of the source.

**Method:** `experimental/ssr`

**Request:**

```typescript
interface SsrParams {
    /// Search query.
    /// The specific syntax is specified outside of the protocol.
    query: string,
    /// If true, only check the syntax of the query and don't compute the actual edit.
    parseOnly: boolean,
    /// The current text document. This and `position` will be used to determine in what scope
    /// paths in `query` should be resolved.
    textDocument: TextDocumentIdentifier;
    /// Position where SSR was invoked.
    position: Position;
    /// Current selections. Search/replace will be restricted to these if non-empty.
    selections: Range[];
}
```

**Response:**

```typescript
WorkspaceEdit
```

### Example

SSR with query `foo($a, $b) ==>> ($a).foo($b)` will transform, eg `foo(y + 5, z)` into `(y + 5).foo(z)`.

### Unresolved Question

* Probably needs search without replace mode
* Needs a way to limit the scope to certain files.

## Matching Brace

**Upstream Issue:** https://github.com/microsoft/language-server-protocol/issues/999

**Experimental Server Capability:** `{ "matchingBrace": boolean }`

This request is sent from client to server to handle "Matching Brace" editor action.

**Method:** `experimental/matchingBrace`

**Request:**

```typescript
interface MatchingBraceParams {
    textDocument: TextDocumentIdentifier,
    /// Position for each cursor
    positions: Position[],
}
```

**Response:**

```typescript
Position[]
```

### Example

```rust
fn main() {
    let x: Vec<()>/*cursor here*/ = vec![];
}
```

`experimental/matchingBrace` yields the position of `<`.
In many cases, matching braces can be handled by the editor.
However, some cases (like disambiguating between generics and comparison operations) need a real parser.
Moreover, it would be cool if editors didn't need to implement even basic language parsing

### Unresolved Question

* Should we return a nested brace structure, to allow [paredit](https://paredit.org/)-like actions of jump *out* of the current brace pair?
  This is how `SelectionRange` request works.
* Alternatively, should we perhaps flag certain `SelectionRange`s as being brace pairs?

## Runnables

**Upstream Issue:** https://github.com/microsoft/language-server-protocol/issues/944

**Experimental Server Capability:** `{ "runnables": { "kinds": string[] } }`

This request is sent from client to server to get the list of things that can be run (tests, binaries, `cargo check -p`).

**Method:** `experimental/runnables`

**Request:**

```typescript
interface RunnablesParams {
    textDocument: TextDocumentIdentifier;
    /// If null, compute runnables for the whole file.
    position?: Position;
}
```

**Response:** `Runnable[]`

```typescript
interface Runnable {
    label: string;
    /// If this Runnable is associated with a specific function/module, etc., the location of this item
    location?: LocationLink;
    /// Running things is necessary technology specific, `kind` needs to be advertised via server capabilities,
    // the type of `args` is specific to `kind`. The actual running is handled by the client.
    kind: string;
    args: any;
}
```

rust-analyzer supports two `kind`s of runnables, `"cargo"` and `"shell"`. The `args` for `"cargo"` look like this:

```typescript
{
    /**
     * Environment variables to set before running the command.
     */
    environment?: Record<string, string>;
    /**
     * The working directory to run the command in.
     */
    cwd: string;
    /**
     * The workspace root directory of the cargo project.
     */
    workspaceRoot?: string;
    /**
     * The cargo command to run.
     */
    cargoArgs: string[];
    /**
     * Arguments to pass to the executable, these will be passed to the command after a `--` argument.
     */
    executableArgs: string[];
    /**
     * Command to execute instead of `cargo`.
     */
    overrideCargo?: string;
}
```

The args for `"shell"` look like this:

```typescript
{
    /**
     * Environment variables to set before running the command.
     */
    environment?: Record<string, string>;
    /**
     * The working directory to run the command in.
     */
    cwd: string;
    kind: string;
    program: string;
    args: string[];
}
```

## Test explorer

**Experimental Client Capability:** `{ "testExplorer": boolean }`

If this capability is set, the `experimental/discoveredTests` notification will be sent from the
server to the client.

**Method:** `experimental/discoverTest`

**Request:** `DiscoverTestParams`

```typescript
interface DiscoverTestParams {
    // The test that we need to resolve its children. If not present,
    // the response should return top level tests.
    testId?: string | undefined;
}
```

**Response:** `DiscoverTestResults`

```typescript
interface TestItem {
    // A unique identifier for the test
    id: string;
    // The file containing this test
    textDocument?: lc.TextDocumentIdentifier | undefined;
    // The range in the file containing this test
    range?: lc.Range | undefined;
    // A human readable name for this test
    label: string;
    // The kind of this test item. Based on the kind,
	// an icon is chosen by the editor.
    kind: "package" | "module" | "test";
    // True if this test may have children not available eagerly
    canResolveChildren: boolean;
    // The id of the parent test in the test tree. If not present, this test
    // is a top level test.
    parent?: string | undefined;
    // The information useful for running the test. The client can use `runTest`
    // request for simple execution, but for more complex execution forms
    // like debugging, this field is useful.
    // Note that this field includes some information about label and location as well, but
    // those exist just for keeping things in sync with other methods of running runnables
    // (for example using one consistent name in the vscode's launch.json) so for any propose
    // other than running tests this field should not be used.
    runnable?: Runnable | undefined;
};

interface DiscoverTestResults {
    // The discovered tests.
    tests: TestItem[];
    // For each test which its id is in this list, the response
    // contains all tests that are children of this test, and
    // client should remove old tests not included in the response.
    scope: string[] | undefined;
    // For each file which its uri is in this list, the response
    // contains all tests that are located in this file, and
    // client should remove old tests not included in the response.
    scopeFile: lc.TextDocumentIdentifier[] | undefined;
}
```

**Method:** `experimental/discoveredTests`

**Notification:** `DiscoverTestResults`

This notification is sent from the server to the client when the
server detect changes in the existing tests. The `DiscoverTestResults` is
the same as the one in `experimental/discoverTest` response.

**Method:** `experimental/runTest`

**Request:** `RunTestParams`

```typescript
interface RunTestParams {
    // Id of the tests to be run. If a test is included, all of its children are included implicitly. If
    // this property is undefined, then the server should simply run all tests.
    include?: string[] | undefined;
    // An array of test ids the user has marked as excluded from the test included in this run; exclusions
    // should apply after inclusions.
    // May be omitted if no exclusions were requested. Server should not run excluded tests or
    // any children of excluded tests.
    exclude?: string[] | undefined;
}
```

**Response:** `void`

**Method:** `experimental/endRunTest`

**Notification:**

This notification is sent from the server to the client when the current running
session is finished. The server should not send any run notification
after this.

**Method:** `experimental/abortRunTest`

**Notification:**

This notification is sent from the client to the server when the user is no longer
interested in the test results. The server should clean up its resources and send
a `experimental/endRunTest` when is done.

**Method:** `experimental/changeTestState`

**Notification:** `ChangeTestStateParams`

```typescript
type TestState = { tag: "passed" }
    | {
        tag: "failed";
        // The standard error of the test, containing the panic message. Clients should
        // render it similar to a terminal, and e.g. handle ansi colors.
        message: string;
    }
    | { tag: "started" }
    | { tag: "enqueued" }
    | { tag: "skipped" };

interface ChangeTestStateParams {
    testId: string;
    state: TestState;
}
```

**Method:** `experimental/appendOutputToRunTest`

**Notification:** `string`

This notification is used for reporting messages independent of any single test and related to the run session
in general, e.g. cargo compiling progress messages or warnings.

## Open External Documentation

This request is sent from the client to the server to obtain web and local URL(s) for documentation related to the symbol under the cursor, if available.

**Method:** `experimental/externalDocs`

**Request:** `TextDocumentPositionParams`

**Response:** `string | null`

## Local Documentation

**Experimental Client Capability:** `{ "localDocs": boolean }`

If this capability is set, the `Open External Documentation` request returned from the server will have the following structure:

```typescript
interface ExternalDocsResponse {
    web?: string;
    local?: string;
}
```

## Analyzer Status

**Method:** `rust-analyzer/analyzerStatus`

**Request:**

```typescript
interface AnalyzerStatusParams {
    /// If specified, show dependencies of the current file.
    textDocument?: TextDocumentIdentifier;
}
```

**Response:** `string`

Returns internal status message, mostly for debugging purposes.

## Reload Workspace

**Method:** `rust-analyzer/reloadWorkspace`

**Request:** `null`

**Response:** `null`

Reloads project information (that is, re-executes `cargo metadata`).

## Rebuild proc-macros

**Method:** `rust-analyzer/rebuildProcMacros`

**Request:** `null`

**Response:** `null`

Rebuilds build scripts and proc-macros, and runs the build scripts to reseed the build data.

## Server Status

**Experimental Client Capability:** `{ "serverStatusNotification": boolean }`

**Method:** `experimental/serverStatus`

**Notification:**

```typescript
interface ServerStatusParams {
    /// `ok` means that the server is completely functional.
    ///
    /// `warning` means that the server is partially functional.
    /// It can answer correctly to most requests, but some results
    /// might be wrong due to, for example, some missing dependencies.
    ///
    /// `error` means that the server is not functional. For example,
    /// there's a fatal build configuration problem. The server might
    /// still give correct answers to simple requests, but most results
    /// will be incomplete or wrong.
    health: "ok" | "warning" | "error",
    /// Is there any pending background work which might change the status?
    /// For example, are dependencies being downloaded?
    quiescent: boolean,
    /// Explanatory message to show on hover.
    message?: string,
}
```

This notification is sent from server to client.
The client can use it to display *persistent* status to the user (in modline).
It is similar to the `showMessage`, but is intended for stares rather than point-in-time events.

Note that this functionality is intended primarily to inform the end user about the state of the server.
In particular, it's valid for the client to completely ignore this extension.
Clients are discouraged from but are allowed to use the `health` status to decide if it's worth sending a request to the server.

### Controlling Flycheck

The flycheck/checkOnSave feature can be controlled via notifications sent by the client to the server.

**Method:** `rust-analyzer/runFlycheck`

**Notification:**

```typescript
interface RunFlycheckParams {
    /// The text document whose cargo workspace flycheck process should be started.
    /// If the document is null or does not belong to a cargo workspace all flycheck processes will be started.
    textDocument: lc.TextDocumentIdentifier | null;
}
```

Triggers the flycheck processes.


**Method:** `rust-analyzer/clearFlycheck`

**Notification:**

```typescript
interface ClearFlycheckParams {}
```

Clears the flycheck diagnostics.

**Method:** `rust-analyzer/cancelFlycheck`

**Notification:**

```typescript
interface CancelFlycheckParams {}
```

Cancels all running flycheck processes.

## View Syntax Tree

**Method:** `rust-analyzer/viewSyntaxTree`

**Request:**

```typescript
interface ViewSyntaxTreeParams {
    textDocument: TextDocumentIdentifier,
}
```

**Response:** `string`

Returns json representation of the file's syntax tree.
Used to create a treeView for debugging and working on rust-analyzer itself.

## View Hir

**Method:** `rust-analyzer/viewHir`

**Request:** `TextDocumentPositionParams`

**Response:** `string`

Returns a textual representation of the HIR of the function containing the cursor.
For debugging or when working on rust-analyzer itself.

## View Mir

**Method:** `rust-analyzer/viewMir`

**Request:** `TextDocumentPositionParams`

**Response:** `string`

Returns a textual representation of the MIR of the function containing the cursor.
For debugging or when working on rust-analyzer itself.

## Interpret Function

**Method:** `rust-analyzer/interpretFunction`

**Request:** `TextDocumentPositionParams`

**Response:** `string`

Tries to evaluate the function using internal rust analyzer knowledge, without compiling
the code. Currently evaluates the function under cursor, but will give a runnable in
future. Highly experimental.

## View File Text

**Method:** `rust-analyzer/viewFileText`

**Request:** `TextDocumentIdentifier`

**Response:** `string`

Returns the text of a file as seen by the server.
This is for debugging file sync problems.

## View ItemTree

**Method:** `rust-analyzer/viewItemTree`

**Request:**

```typescript
interface ViewItemTreeParams {
    textDocument: TextDocumentIdentifier,
}
```

**Response:** `string`

Returns a textual representation of the `ItemTree` of the currently open file, for debugging.

## View Crate Graph

**Method:** `rust-analyzer/viewCrateGraph`

**Request:**

```typescript
interface ViewCrateGraphParams {
    full: boolean,
}
```

**Response:** `string`

Renders rust-analyzer's crate graph as an SVG image.

If `full` is `true`, the graph includes non-workspace crates (crates.io dependencies as well as sysroot crates).

## Expand Macro

**Method:** `rust-analyzer/expandMacro`

**Request:**

```typescript
interface ExpandMacroParams {
    textDocument: TextDocumentIdentifier,
    position: Position,
}
```

**Response:**

```typescript
interface ExpandedMacro {
    name: string,
    expansion: string,
}
```

Expands macro call at a given position.

## Hover Actions

**Experimental Client Capability:** `{ "hoverActions": boolean }`

If this capability is set, `Hover` request returned from the server might contain an additional field, `actions`:

```typescript
interface Hover {
    ...
    actions?: CommandLinkGroup[];
}

interface CommandLink extends Command {
    /**
     * A tooltip for the command, when represented in the UI.
     */
    tooltip?: string;
}

interface CommandLinkGroup {
    title?: string;
    commands: CommandLink[];
}
```

Such actions on the client side are appended to a hover bottom as command links:
```
  +-----------------------------+
  | Hover content               |
  |                             |
  +-----------------------------+
  | _Action1_ | _Action2_       |  <- first group, no TITLE
  +-----------------------------+
  | TITLE _Action1_ | _Action2_ |  <- second group
  +-----------------------------+
  ...
```

## Open Cargo.toml

**Upstream Issue:** https://github.com/rust-lang/rust-analyzer/issues/6462

**Experimental Server Capability:** `{ "openCargoToml": boolean }`

This request is sent from client to server to open the current project's Cargo.toml

**Method:** `experimental/openCargoToml`

**Request:** `OpenCargoTomlParams`

**Response:** `Location | null`


### Example

```rust
// Cargo.toml
[package]
// src/main.rs

/* cursor here*/
```

`experimental/openCargoToml` returns a single `Link` to the start of the `[package]` keyword.

## Related tests

This request is sent from client to server to get the list of tests for the specified position.

**Method:** `rust-analyzer/relatedTests`

**Request:** `TextDocumentPositionParams`

**Response:** `TestInfo[]`

```typescript
interface TestInfo {
    runnable: Runnable;
}
```

## Hover Range

**Upstream Issue:** https://github.com/microsoft/language-server-protocol/issues/377

**Experimental Server Capability:** { "hoverRange": boolean }

This extension allows passing a `Range` as a `position` field of `HoverParams`.
The primary use-case is to use the hover request to show the type of the expression currently selected.

```typescript
interface HoverParams extends WorkDoneProgressParams {
    textDocument: TextDocumentIdentifier;
    position: Range | Position;
}
```
Whenever the client sends a `Range`, it is understood as the current selection and any hover included in the range will show the type of the expression if possible.

### Example

```rust
fn main() {
    let expression = $01 + 2 * 3$0;
}
```

Triggering a hover inside the selection above will show a result of `i32`.

## Move Item

**Upstream Issue:** https://github.com/rust-lang/rust-analyzer/issues/6823

This request is sent from client to server to move item under cursor or selection in some direction.

**Method:** `experimental/moveItem`

**Request:** `MoveItemParams`

**Response:** `SnippetTextEdit[]`

```typescript
export interface MoveItemParams {
    textDocument: TextDocumentIdentifier,
    range: Range,
    direction: Direction
}

export const enum Direction {
    Up = "Up",
    Down = "Down"
}
```

## Workspace Symbols Filtering

**Upstream Issue:** https://github.com/microsoft/language-server-protocol/issues/941

**Experimental Server Capability:** `{ "workspaceSymbolScopeKindFiltering": boolean }`

Extends the existing `workspace/symbol` request with ability to filter symbols by broad scope and kind of symbol.
If this capability is set, `workspace/symbol` parameter gains two new optional fields:


```typescript
interface WorkspaceSymbolParams {
    /**
     * Return only the symbols defined in the specified scope.
     */
    searchScope?: WorkspaceSymbolSearchScope;
    /**
     * Return only the symbols of specified kinds.
     */
    searchKind?: WorkspaceSymbolSearchKind;
    ...
}

const enum WorkspaceSymbolSearchScope {
    Workspace = "workspace",
    WorkspaceAndDependencies = "workspaceAndDependencies"
}

const enum WorkspaceSymbolSearchKind {
    OnlyTypes = "onlyTypes",
    AllSymbols = "allSymbols"
}
```

## Client Commands

**Upstream Issue:** https://github.com/microsoft/language-server-protocol/issues/642

**Experimental Client Capability:** `{ "commands?": ClientCommandOptions }`

Certain LSP types originating on the server, notably code lenses, embed commands.
Commands can be serviced either by the server or by the client.
However, the server doesn't know which commands are available on the client.

This extensions allows the client to communicate this info.


```typescript
export interface ClientCommandOptions {
    /**
     * The commands to be executed on the client
     */
    commands: string[];
}
```

## Colored Diagnostic Output

**Experimental Client Capability:** `{ "colorDiagnosticOutput": boolean }`

If this capability is set, the "full compiler diagnostics" provided by `checkOnSave`
will include ANSI color and style codes to render the diagnostic in a similar manner
as `cargo`. This is translated into `--message-format=json-diagnostic-rendered-ansi`
when flycheck is run, instead of the default `--message-format=json`.

The full compiler rendered diagnostics are included in the server response
regardless of this capability:

```typescript
// https://microsoft.github.io/language-server-protocol/specifications/specification-current#diagnostic
export interface Diagnostic {
    ...
    data?: {
        /**
         * The human-readable compiler output as it would be printed to a terminal.
         * Includes ANSI color and style codes if the client has set the experimental
         * `colorDiagnosticOutput` capability.
         */
        rendered?: string;
    };
}
```

## Dependency Tree

**Method:** `rust-analyzer/fetchDependencyList`

**Request:**

```typescript
export interface FetchDependencyListParams {}
```

**Response:**
```typescript
export interface FetchDependencyListResult {
    crates: {
        name: string;
        version: string;
        path: string;
    }[];
}
```
Returns all crates from this workspace, so it can be used create a viewTree to help navigate the dependency tree.

## View Recursive Memory Layout

**Method:** `rust-analyzer/viewRecursiveMemoryLayout`

**Request:** `TextDocumentPositionParams`

**Response:**

```typescript
export interface RecursiveMemoryLayoutNode = {
    /// Name of the item, or [ROOT], `.n` for tuples
    item_name: string;
    /// Full name of the type (type aliases are ignored)
    typename: string;
    /// Size of the type in bytes
    size: number;
    /// Alignment of the type in bytes
    alignment: number;
    /// Offset of the type relative to its parent (or 0 if its the root)
    offset: number;
    /// Index of the node's parent (or -1 if its the root)
    parent_idx: number;
    /// Index of the node's children (or -1 if it does not have children)
    children_start: number;
    /// Number of child nodes (unspecified it does not have children)
    children_len: number;
};

export interface RecursiveMemoryLayout = {
    nodes: RecursiveMemoryLayoutNode[];
};
```

Returns a vector of nodes representing items in the datatype as a tree, `RecursiveMemoryLayout::nodes[0]` is the root node.

If `RecursiveMemoryLayout::nodes::length == 0` we could not find a suitable type.

Generic Types do not give anything because they are incomplete. Fully specified generic types do not give anything if they are selected directly but do work when a child of other types [this is consistent with other behavior](https://github.com/rust-lang/rust-analyzer/issues/15010).

### Unresolved questions:

- How should enums/unions be represented? currently they do not produce any children because they have multiple distinct sets of children.
- Should niches be represented? currently they are not reported.
- A visual representation of the memory layout is not specified, see the provided implementation for an example, however it may not translate well to terminal based editors or other such things.


<a id=contributing_setup></a>

# Setup Guide

This guide gives a simplified opinionated setup for developers contributing to rust-analyzer using Visual Studio Code to make changes and Visual Studio Code Insiders to test those changes. This guide will assume you have Visual Studio Code and Visual Studio Code Insiders installed.

## Prerequisites

Since rust-analyzer is a Rust project, you will need to install Rust. You can download and install the latest stable version of Rust [here](https://www.rust-lang.org/tools/install).

## Step-by-Step Setup

**Step 01**: Fork the rust-analyzer repository and clone the fork to your local machine.

**Step 02**: Open the project in Visual Studio Code.

**Step 03**: Open a terminal and run `cargo build` to build the project.

**Step 04**: Install the language server locally by running the following command:

```sh
# Install only the language server  
cargo xtask install --server \  
    --code-bin code-insiders \  # Target a specific editor (code, code-exploration, code-insiders, codium, or code-oss)  
    --dev-rel  # Build in release mode with debug info level 2  
```

In the output of this command, there should be a file path provided to the installed binary on your local machine.
It should look something like the following output below:

```
Installing <path-to-rust-analyzer-binary>
Installed package `rust-analyzer v0.0.0 (<path-to-rust-analyzer-binary>)` (executable `rust-analyzer.exe`)
```

In Visual Studio Code Insiders, you will want to open your User Settings (JSON) from the Command Palette. From there you should ensure that the `rust-analyzer.server.path` key is set to the `<path-to-rust-analyzer-binary>`. This will tell Visual Studio Code Insiders to use the locally installed version that you can debug.

The User Settings (JSON) file should contain the following:

```json
{
    "rust-analyzer.server.path": "<path-to-rust-analyzer-binary>"
}
```

Now you should be able to make changes to rust-analyzer in Visual Studio Code and then view the changes in Visual Studio Code Insiders.

## Debugging rust-analyzer
The simplest way to debug rust-analyzer is to use the `eprintln!` macro. The reason why we use `eprintln!` instead of `println!` is because the language server uses `stdout` to send messages. So instead we will debug using `stderr`.

An example debugging statement could go into the `main_loop.rs` file which can be found at `crates/rust-analyzer/src/main_loop.rs`. Inside the `main_loop` we will add the following `eprintln!` to test debugging rust-analyzer:

```rs
eprintln!("Hello, world!");
```
Now, run the following commands to check the project and reinstall the server:  

```sh  
cargo check  
cargo xtask install --server --code-bin code-insiders --dev-rel  
```  

Now on Visual Studio Code Insiders, we should be able to open the Output tab on our terminal and switch to Rust Analyzer Language Server to see the `eprintln!` statement we just wrote.

If you are able to see your output, you now have a complete workflow for debugging rust-analyzer.


<a id=contributing_style></a>

# Style

Our approach to "clean code" is two-fold:

* We generally don't block PRs on style changes.
* At the same time, all code in rust-analyzer is constantly refactored.

It is explicitly OK for a reviewer to flag only some nits in the PR, and then send a follow-up cleanup PR for things which are easier to explain by example, cc-ing the original author.
Sending small cleanup PRs (like renaming a single local variable) is encouraged.

When reviewing pull requests prefer extending this document to leaving
non-reusable comments on the pull request itself.

# General

## Scale of Changes

Everyone knows that it's better to send small & focused pull requests.
The problem is, sometimes you *have* to, eg, rewrite the whole compiler, and that just doesn't fit into a set of isolated PRs.

The main things to keep an eye on are the boundaries between various components.
There are three kinds of changes:

1. Internals of a single component are changed.
   Specifically, you don't change any `pub` items.
   A good example here would be an addition of a new assist.

2. API of a component is expanded.
   Specifically, you add a new `pub` function which wasn't there before.
   A good example here would be expansion of assist API, for example, to implement lazy assists or assists groups.

3. A new dependency between components is introduced.
   Specifically, you add a `pub use` reexport from another crate or you add a new line to the `[dependencies]` section of `Cargo.toml`.
   A good example here would be adding reference search capability to the assists crates.

For the first group, the change is generally merged as long as:

* it works for the happy case,
* it has tests,
* it doesn't panic for the unhappy case.

For the second group, the change would be subjected to quite a bit of scrutiny and iteration.
The new API needs to be right (or at least easy to change later).
The actual implementation doesn't matter that much.
It's very important to minimize the amount of changed lines of code for changes of the second kind.
Often, you start doing a change of the first kind, only to realize that you need to elevate to a change of the second kind.
In this case, we'll probably ask you to split API changes into a separate PR.

Changes of the third group should be pretty rare, so we don't specify any specific process for them.
That said, adding an innocent-looking `pub use` is a very simple way to break encapsulation, keep an eye on it!

Note: if you enjoyed this abstract hand-waving about boundaries, you might appreciate [this post](https://www.tedinski.com/2018/02/06/system-boundaries.html).


## Crates.io Dependencies

We try to be very conservative with usage of crates.io dependencies.
Don't use small "helper" crates (exception: `itertools` and `either` are allowed).
If there's some general reusable bit of code you need, consider adding it to the `stdx` crate.
A useful exercise is to read Cargo.lock and see if some *transitive* dependencies do not make sense for rust-analyzer.

**Rationale:** keep compile times low, create ecosystem pressure for faster compiles, reduce the number of things which might break.

## Commit Style

We don't have specific rules around git history hygiene.
Maintaining clean git history is strongly encouraged, but not enforced.
Use rebase workflow, it's OK to rewrite history during PR review process.
After you are happy with the state of the code, please use [interactive rebase](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History) to squash fixup commits.

Avoid @mentioning people in commit messages and pull request descriptions(they are added to commit message by bors).
Such messages create a lot of duplicate notification traffic during rebases.

If possible, write Pull Request titles and descriptions from the user's perspective:

```
# GOOD
Make goto definition work inside macros

# BAD
Use original span for FileId
```

This makes it easier to prepare a changelog.

If the change adds a new user-visible functionality, consider recording a GIF with [peek](https://github.com/phw/peek) and pasting it into the PR description.

To make writing the release notes easier, you can mark a pull request as a feature, fix, internal change, or minor.
Minor changes are excluded from the release notes, while the other types are distributed in their corresponding sections.
There are two ways to mark this:

* use a `feat: `, `feature: `, `fix: `, `internal: ` or `minor: ` prefix in the PR title
* write `changelog [feature|fix|internal|skip] [description]` in a comment or in the PR description; the description is optional, and will replace the title if included.

These comments don't have to be added by the PR author.
Editing a comment or the PR description or title is also fine, as long as it happens before the release.

**Rationale:** clean history is potentially useful, but rarely used.
But many users read changelogs.
Including a description and GIF suitable for the changelog means less work for the maintainers on the release day.

## Clippy

We use Clippy to improve the code, but if some lints annoy you, allow them in the [Cargo.toml](https://github.com/rust-lang/rust-analyzer/blob/master/Cargo.toml) [workspace.lints.clippy] section.

# Code

## Minimal Tests

Most tests in rust-analyzer start with a snippet of Rust code.
These snippets should be minimal -- if you copy-paste a snippet of real code into the tests, make sure to remove everything which could be removed.

It also makes sense to format snippets more compactly (for example, by placing enum definitions like `enum E { Foo, Bar }` on a single line),
as long as they are still readable.

When using multiline fixtures, use unindented raw string literals:

```rust
    #[test]
    fn inline_field_shorthand() {
        check_assist(
            inline_local_variable,
            r#"
struct S { foo: i32}
fn main() {
    let $0foo = 92;
    S { foo }
}
"#,
            r#"
struct S { foo: i32}
fn main() {
    S { foo: 92 }
}
"#,
        );
    }
```

**Rationale:**

There are many benefits to this:

* less to read or to scroll past
* easier to understand what exactly is tested
* less stuff printed during printf-debugging
* less time to run test

Formatting ensures that you can use your editor's "number of selected characters" feature to correlate offsets with test's source code.

## Marked Tests

Use
[`cov_mark::hit! / cov_mark::check!`](https://github.com/matklad/cov-mark)
when testing specific conditions.
Do not place several marks into a single test or condition.
Do not reuse marks between several tests.

**Rationale:** marks provide an easy way to find the canonical test for each bit of code.
This makes it much easier to understand.
More than one mark per test / code branch doesn't add significantly to understanding.

## `#[should_panic]`

Do not use `#[should_panic]` tests.
Instead, explicitly check for `None`, `Err`, etc.

**Rationale:** `#[should_panic]` is a tool for library authors to make sure that the API does not fail silently when misused.
`rust-analyzer` is not a library, we don't need to test for API misuse, and we have to handle any user input without panics.
Panic messages in the logs from the `#[should_panic]` tests are confusing.

## `#[ignore]`

Do not `#[ignore]` tests.
If the test currently does not work, assert the wrong behavior and add a fixme explaining why it is wrong.

**Rationale:** noticing when the behavior is fixed, making sure that even the wrong behavior is acceptable (ie, not a panic).

## Function Preconditions

Express function preconditions in types and force the caller to provide them (rather than checking in callee):

```rust
// GOOD
fn frobnicate(walrus: Walrus) {
    ...
}

// BAD
fn frobnicate(walrus: Option<Walrus>) {
    let walrus = match walrus {
        Some(it) => it,
        None => return,
    };
    ...
}
```

**Rationale:** this makes control flow explicit at the call site.
Call-site has more context, it often happens that the precondition falls out naturally or can be bubbled up higher in the stack.

Avoid splitting precondition check and precondition use across functions:

```rust
// GOOD
fn main() {
    let s: &str = ...;
    if let Some(contents) = string_literal_contents(s) {

    }
}

fn string_literal_contents(s: &str) -> Option<&str> {
    if s.starts_with('"') && s.ends_with('"') {
        Some(&s[1..s.len() - 1])
    } else {
        None
    }
}

// BAD
fn main() {
    let s: &str = ...;
    if is_string_literal(s) {
        let contents = &s[1..s.len() - 1];
    }
}

fn is_string_literal(s: &str) -> bool {
    s.starts_with('"') && s.ends_with('"')
}
```

In the "Bad" version, the precondition that `1` and `s.len() - 1` are valid string literal boundaries is checked in `is_string_literal` but used in `main`.
In the "Good" version, the precondition check and usage are checked in the same block, and then encoded in the types.

**Rationale:** non-local code properties degrade under change.

When checking a boolean precondition, prefer `if !invariant` to `if negated_invariant`:

```rust
// GOOD
if !(idx < len) {
    return None;
}

// BAD
if idx >= len {
    return None;
}
```

**Rationale:** it's useful to see the invariant relied upon by the rest of the function clearly spelled out.

## Control Flow

As a special case of the previous rule, do not hide control flow inside functions, push it to the caller:

```rust
// GOOD
if cond {
    f()
}

// BAD
fn f() {
    if !cond {
        return;
    }
    ...
}
```

See also [this post](https://matklad.github.io/2023/11/15/push-ifs-up-and-fors-down.html)

## Assertions

Assert liberally.
Prefer [`stdx::never!`](https://docs.rs/always-assert/0.1.2/always_assert/macro.never.html) to standard `assert!`.

**Rationale:** See [cross cutting concern: error handling](https://github.com/rust-lang/rust-analyzer/blob/master/docs/book/src/contributing/architecture.md#error-handling).

## Getters & Setters

If a field can have any value without breaking invariants, make the field public.
Conversely, if there is an invariant, document it, enforce it in the "constructor" function, make the field private, and provide a getter.
Never provide setters.

Getters should return borrowed data:

```rust
struct Person {
    // Invariant: never empty
    first_name: String,
    middle_name: Option<String>
}

// GOOD
impl Person {
    fn first_name(&self) -> &str { self.first_name.as_str() }
    fn middle_name(&self) -> Option<&str> { self.middle_name.as_ref() }
}

// BAD
impl Person {
    fn first_name(&self) -> String { self.first_name.clone() }
    fn middle_name(&self) -> &Option<String> { &self.middle_name }
}
```

**Rationale:** we don't provide public API, it's cheaper to refactor than to pay getters rent.
Non-local code properties degrade under change, privacy makes invariant local.
Borrowed owned types (`&String`) disclose irrelevant details about internal representation.
Irrelevant (neither right nor wrong) things obscure correctness.

## Useless Types

More generally, always prefer types on the left

```rust
// GOOD      BAD
&[T]         &Vec<T>
&str         &String
Option<&T>   &Option<T>
&Path        &PathBuf
```

**Rationale:** types on the left are strictly more general.
Even when generality is not required, consistency is important.

## Constructors

Prefer `Default` to zero-argument `new` function.

```rust
// GOOD
#[derive(Default)]
struct Foo {
    bar: Option<Bar>
}

// BAD
struct Foo {
    bar: Option<Bar>
}

impl Foo {
    fn new() -> Foo {
        Foo { bar: None }
    }
}
```

Prefer `Default` even if it has to be implemented manually.

**Rationale:** less typing in the common case, uniformity.

Use `Vec::new` rather than `vec![]`.

**Rationale:** uniformity, strength reduction.

Avoid using "dummy" states to implement a `Default`.
If a type doesn't have a sensible default, empty value, don't hide it.
Let the caller explicitly decide what the right initial state is.

## Functions Over Objects

Avoid creating "doer" objects.
That is, objects which are created only to execute a single action.

```rust
// GOOD
do_thing(arg1, arg2);

// BAD
ThingDoer::new(arg1, arg2).do();
```

Note that this concerns only outward API.
When implementing `do_thing`, it might be very useful to create a context object.

```rust
pub fn do_thing(arg1: Arg1, arg2: Arg2) -> Res {
    let mut ctx = Ctx { arg1, arg2 };
    ctx.run()
}

struct Ctx {
    arg1: Arg1, arg2: Arg2
}

impl Ctx {
    fn run(self) -> Res {
        ...
    }
}
```

The difference is that `Ctx` is an impl detail here.

Sometimes a middle ground is acceptable if this can save some busywork:

```rust
ThingDoer::do(arg1, arg2);

pub struct ThingDoer {
    arg1: Arg1, arg2: Arg2,
}

impl ThingDoer {
    pub fn do(arg1: Arg1, arg2: Arg2) -> Res {
        ThingDoer { arg1, arg2 }.run()
    }
    fn run(self) -> Res {
        ...
    }
}
```

**Rationale:** not bothering the caller with irrelevant details, not mixing user API with implementor API.

## Functions with many parameters

Avoid creating functions with many optional or boolean parameters.
Introduce a `Config` struct instead.

```rust
// GOOD
pub struct AnnotationConfig {
    pub binary_target: bool,
    pub annotate_runnables: bool,
    pub annotate_impls: bool,
}

pub fn annotations(
    db: &RootDatabase,
    file_id: FileId,
    config: AnnotationConfig
) -> Vec<Annotation> {
    ...
}

// BAD
pub fn annotations(
    db: &RootDatabase,
    file_id: FileId,
    binary_target: bool,
    annotate_runnables: bool,
    annotate_impls: bool,
) -> Vec<Annotation> {
    ...
}
```

**Rationale:** reducing churn.
If the function has many parameters, they most likely change frequently.
By packing them into a struct we protect all intermediary functions from changes.

Do not implement `Default` for the `Config` struct, the caller has more context to determine better defaults.
Do not store `Config` as a part of the `state`, pass it explicitly.
This gives more flexibility for the caller.

If there is variation not only in the input parameters, but in the return type as well, consider introducing a `Command` type.

```rust
// MAYBE GOOD
pub struct Query {
    pub name: String,
    pub case_sensitive: bool,
}

impl Query {
    pub fn all(self) -> Vec<Item> { ... }
    pub fn first(self) -> Option<Item> { ... }
}

// MAYBE BAD
fn query_all(name: String, case_sensitive: bool) -> Vec<Item> { ... }
fn query_first(name: String, case_sensitive: bool) -> Option<Item> { ... }
```

## Prefer Separate Functions Over Parameters

If a function has a `bool` or an `Option` parameter, and it is always called with `true`, `false`, `Some` and `None` literals, split the function in two.

```rust
// GOOD
fn caller_a() {
    foo()
}

fn caller_b() {
    foo_with_bar(Bar::new())
}

fn foo() { ... }
fn foo_with_bar(bar: Bar) { ... }

// BAD
fn caller_a() {
    foo(None)
}

fn caller_b() {
    foo(Some(Bar::new()))
}

fn foo(bar: Option<Bar>) { ... }
```

**Rationale:** more often than not, such functions display "`false sharing`" -- they have additional `if` branching inside for two different cases.
Splitting the two different control flows into two functions simplifies each path, and remove cross-dependencies between the two paths.
If there's common code between `foo` and `foo_with_bar`, extract *that* into a common helper.

## Appropriate String Types

When interfacing with OS APIs, use `OsString`, even if the original source of data is utf-8 encoded.
**Rationale:** cleanly delineates the boundary when the data goes into the OS-land.

Use `AbsPathBuf` and `AbsPath` over `std::Path`.
**Rationale:** rust-analyzer is a long-lived process which handles several projects at the same time.
It is important not to leak cwd by accident.

# Premature Pessimization

## Avoid Allocations

Avoid writing code which is slower than it needs to be.
Don't allocate a `Vec` where an iterator would do, don't allocate strings needlessly.

```rust
// GOOD
use itertools::Itertools;

let (first_word, second_word) = match text.split_ascii_whitespace().collect_tuple() {
    Some(it) => it,
    None => return,
}

// BAD
let words = text.split_ascii_whitespace().collect::<Vec<_>>();
if words.len() != 2 {
    return
}
```

**Rationale:** not allocating is almost always faster.

## Push Allocations to the Call Site

If allocation is inevitable, let the caller allocate the resource:

```rust
// GOOD
fn frobnicate(s: String) {
    ...
}

// BAD
fn frobnicate(s: &str) {
    let s = s.to_string();
    ...
}
```

**Rationale:** reveals the costs.
It is also more efficient when the caller already owns the allocation.

## Collection Types

Prefer `rustc_hash::FxHashMap` and `rustc_hash::FxHashSet` instead of the ones in `std::collections`.

**Rationale:** they use a hasher that's significantly faster and using them consistently will reduce code size by some small amount.

## Avoid Intermediate Collections

When writing a recursive function to compute a sets of things, use an accumulator parameter instead of returning a fresh collection.
Accumulator goes first in the list of arguments.

```rust
// GOOD
pub fn reachable_nodes(node: Node) -> FxHashSet<Node> {
    let mut res = FxHashSet::default();
    go(&mut res, node);
    res
}
fn go(acc: &mut FxHashSet<Node>, node: Node) {
    acc.insert(node);
    for n in node.neighbors() {
        go(acc, n);
    }
}

// BAD
pub fn reachable_nodes(node: Node) -> FxHashSet<Node> {
    let mut res = FxHashSet::default();
    res.insert(node);
    for n in node.neighbors() {
        res.extend(reachable_nodes(n));
    }
    res
}
```

**Rationale:** re-use allocations, accumulator style is more concise for complex cases.

## Avoid Monomorphization

Avoid making a lot of code type parametric, *especially* on the boundaries between crates.

```rust
// GOOD
fn frobnicate(mut f: impl FnMut()) {
    frobnicate_impl(&mut f)
}
fn frobnicate_impl(f: &mut dyn FnMut()) {
    // lots of code
}

// BAD
fn frobnicate(mut f: impl FnMut()) {
    // lots of code
}
```

Avoid `AsRef` polymorphism, it pays back only for widely used libraries:

```rust
// GOOD
fn frobnicate(f: &Path) {
}

// BAD
fn frobnicate(f: impl AsRef<Path>) {
}
```

**Rationale:** Rust uses monomorphization to compile generic code, meaning that for each instantiation of a generic functions with concrete types, the function is compiled afresh, *per crate*.
This allows for exceptionally good performance, but leads to increased compile times.
Runtime performance obeys 80%/20% rule -- only a small fraction of code is hot.
Compile time **does not** obey this rule -- all code has to be compiled.

# Style

## Order of Imports

Separate import groups with blank lines.
Use one `use` per crate.

Module declarations come before the imports.
Order them in "suggested reading order" for a person new to the code base.

```rust
mod x;
mod y;

// First std.
use std::{ ... }

// Second, external crates (both crates.io crates and other rust-analyzer crates).
use crate_foo::{ ... }
use crate_bar::{ ... }

// Then current crate.
use crate::{}

// Finally, parent and child modules, but prefer `use crate::`.
use super::{}

// Re-exports are treated as item definitions rather than imports, so they go
// after imports and modules. Use them sparingly.
pub use crate::x::Z;
```

**Rationale:** consistency.
Reading order is important for new contributors.
Grouping by crate allows spotting unwanted dependencies easier.

## Import Style

Qualify items from `hir` and `ast`.

```rust
// GOOD
use syntax::ast;

fn frobnicate(func: hir::Function, strukt: ast::Struct) {}

// BAD
use hir::Function;
use syntax::ast::Struct;

fn frobnicate(func: Function, strukt: Struct) {}
```

**Rationale:** avoids name clashes, makes the layer clear at a glance.

When implementing traits from `std::fmt` or `std::ops`, import the module:

```rust
// GOOD
use std::fmt;

impl fmt::Display for RenameError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result { .. }
}

// BAD
impl std::fmt::Display for RenameError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result { .. }
}

// BAD
use std::ops::Deref;

impl Deref for Widget {
    type Target = str;
    fn deref(&self) -> &str { .. }
}
```

**Rationale:** overall, less typing.
Makes it clear that a trait is implemented, rather than used.

Avoid local `use MyEnum::*` imports.
**Rationale:** consistency.

Prefer `use crate::foo::bar` to `use super::bar` or `use self::bar::baz`.
**Rationale:** consistency, this is the style which works in all cases.

By default, avoid re-exports.
**Rationale:** for non-library code, re-exports introduce two ways to use something and allow for inconsistency.

## Order of Items

Optimize for the reader who sees the file for the first time, and wants to get a general idea about what's going on.
People read things from top to bottom, so place most important things first.

Specifically, if all items except one are private, always put the non-private item on top.

```rust
// GOOD
pub(crate) fn frobnicate() {
    Helper::act()
}

#[derive(Default)]
struct Helper { stuff: i32 }

impl Helper {
    fn act(&self) {

    }
}

// BAD
#[derive(Default)]
struct Helper { stuff: i32 }

pub(crate) fn frobnicate() {
    Helper::act()
}

impl Helper {
    fn act(&self) {

    }
}
```

If there's a mixture of private and public items, put public items first.

Put `struct`s and `enum`s first, functions and impls last. Order type declarations in top-down manner.

```rust
// GOOD
struct Parent {
    children: Vec<Child>
}

struct Child;

impl Parent {
}

impl Child {
}

// BAD
struct Child;

impl Child {
}

struct Parent {
    children: Vec<Child>
}

impl Parent {
}
```

**Rationale:** easier to get the sense of the API by visually scanning the file.
If function bodies are folded in the editor, the source code should read as documentation for the public API.

## Context Parameters

Some parameters are threaded unchanged through many function calls.
They determine the "context" of the operation.
Pass such parameters first, not last.
If there are several context parameters, consider packing them into a `struct Ctx` and passing it as `&self`.

```rust
// GOOD
fn dfs(graph: &Graph, v: Vertex) -> usize {
    let mut visited = FxHashSet::default();
    return go(graph, &mut visited, v);

    fn go(graph: &Graph, visited: &mut FxHashSet<Vertex>, v: usize) -> usize {
        ...
    }
}

// BAD
fn dfs(v: Vertex, graph: &Graph) -> usize {
    fn go(v: usize, graph: &Graph, visited: &mut FxHashSet<Vertex>) -> usize {
        ...
    }

    let mut visited = FxHashSet::default();
    go(v, graph, &mut visited)
}
```

**Rationale:** consistency.
Context-first works better when non-context parameter is a lambda.

## Variable Naming

Use boring and long names for local variables ([yay code completion](https://github.com/rust-lang/rust-analyzer/pull/4162#discussion_r417130973)).
The default name is a lowercased name of the type: `global_state: GlobalState`.
Avoid ad-hoc acronyms and contractions, but use the ones that exist consistently (`db`, `ctx`, `acc`).
Prefer American spelling (color, behavior).

Default names:

* `res` -- "result of the function" local variable
* `it` -- I don't really care about the name
* `n_foos` -- number of foos (prefer this to `foo_count`)
* `foo_idx` -- index of `foo`

Many names in rust-analyzer conflict with keywords.
We use mangled names instead of `r#ident` syntax:

```
crate  -> krate
enum   -> enum_
fn     -> func
impl   -> imp
macro  -> mac
mod    -> module
struct -> strukt
trait  -> trait_
type   -> ty
```

**Rationale:** consistency.

## Error Handling Trivia

Use `anyhow::Result` rather than just `Result`.

**Rationale:** makes it immediately clear what result that is.

Use `anyhow::format_err!` rather than `anyhow::anyhow`.

**Rationale:** consistent, boring, avoids stuttering.

There's no specific guidance on the formatting of error messages, see [anyhow/#209](https://github.com/dtolnay/anyhow/issues/209).
Do not end error and context messages with `.` though.

## Early Returns

Do use early returns

```rust
// GOOD
fn foo() -> Option<Bar> {
    if !condition() {
        return None;
    }

    Some(...)
}

// BAD
fn foo() -> Option<Bar> {
    if condition() {
        Some(...)
    } else {
        None
    }
}
```

**Rationale:** reduce cognitive stack usage.

Use `return Err(err)` to throw an error:

```rust
// GOOD
fn f() -> Result<(), ()> {
    if condition {
        return Err(());
    }
    Ok(())
}

// BAD
fn f() -> Result<(), ()> {
    if condition {
        Err(())?;
    }
    Ok(())
}
```

**Rationale:** `return` has type `!`, which allows the compiler to flag dead
code (`Err(...)?` is of unconstrained generic type `T`).

## Comparisons

When doing multiple comparisons use `<`/`<=`, avoid `>`/`>=`.

```rust
// GOOD
assert!(lo <= x && x <= hi);
assert!(r1 < l2 || r2 < l1);
assert!(x < y);
assert!(0 < x);

// BAD
assert!(x >= lo && x <= hi);
assert!(r1 < l2 || l1 > r2);
assert!(y > x);
assert!(x > 0);
```

**Rationale:** Less-then comparisons are more intuitive, they correspond spatially to [real line](https://en.wikipedia.org/wiki/Real_line).

## If-let

Avoid `if let ... { } else { }` construct, use `match` instead.

```rust
// GOOD
match ctx.expected_type.as_ref() {
    Some(expected_type) => completion_ty == expected_type && !expected_type.is_unit(),
    None => false,
}

// BAD
if let Some(expected_type) = ctx.expected_type.as_ref() {
    completion_ty == expected_type && !expected_type.is_unit()
} else {
    false
}
```

**Rationale:** `match` is almost always more compact.
The `else` branch can get a more precise pattern: `None` or `Err(_)` instead of `_`.

## Match Ergonomics

Don't use the `ref` keyword.

**Rationale:** consistency & simplicity.
`ref` was required before [match ergonomics](https://github.com/rust-lang/rfcs/blob/master/text/2005-match-ergonomics.md).
Today, it is redundant.
Between `ref` and match ergonomics, the latter is more ergonomic in most cases, and is simpler (does not require a keyword).

## Empty Match Arms

Use `=> (),` when a match arm is intentionally empty:

```rust
// GOOD
match result {
    Ok(_) => (),
    Err(err) => error!("{}", err),
}

// BAD
match result {
    Ok(_) => {}
    Err(err) => error!("{}", err),
}
```

**Rationale:** consistency.

## Functional Combinators

Use high order monadic combinators like `map`, `then` when they are a natural choice; don't bend the code to fit into some combinator.
If writing a chain of combinators creates friction, replace them with control flow constructs: `for`, `if`, `match`.
Mostly avoid `bool::then` and `Option::filter`.

```rust
// GOOD
if !x.cond() {
    return None;
}
Some(x)

// BAD
Some(x).filter(|it| it.cond())
```

This rule is more "soft" then others, and boils down mostly to taste.
The guiding principle behind this rule is that code should be dense in computation, and sparse in the number of expressions per line.
The second example contains *less* computation -- the `filter` function is an indirection for `if`, it doesn't do any useful work by itself.
At the same time, it is more crowded -- it takes more time to visually scan it.

**Rationale:** consistency, playing to language's strengths.
Rust has first-class support for imperative control flow constructs like `for` and `if`, while functions are less first-class due to lack of universal function type, currying, and non-first-class effects (`?`, `.await`).

## Turbofish

Prefer type ascription over the turbofish.
When ascribing types, avoid `_`

```rust
// GOOD
let mutable: Vec<T> = old.into_iter().map(|it| builder.make_mut(it)).collect();

// BAD
let mutable: Vec<_> = old.into_iter().map(|it| builder.make_mut(it)).collect();

// BAD
let mutable = old.into_iter().map(|it| builder.make_mut(it)).collect::<Vec<_>>();
```

**Rationale:** consistency, readability.
If compiler struggles to infer the type, the human would as well.
Having the result type specified up-front helps with understanding what the chain of iterator methods is doing.

## Helper Functions

Avoid creating single-use helper functions:

```rust
// GOOD
let buf = {
    let mut buf = get_empty_buf(&mut arena);
    buf.add_item(item);
    buf
};

// BAD
let buf = prepare_buf(&mut arena, item);

...

fn prepare_buf(arena: &mut Arena, item: Item) -> ItemBuf {
    let mut res = get_empty_buf(&mut arena);
    res.add_item(item);
    res
}
```

Exception: if you want to make use of `return` or `?`.

**Rationale:** single-use functions change frequently, adding or removing parameters adds churn.
A block serves just as well to delineate a bit of logic, but has access to all the context.
Re-using originally single-purpose function often leads to bad coupling.

## Local Helper Functions

Put nested helper functions at the end of the enclosing functions
(this requires using return statement).
Don't nest more than one level deep.

```rust
// GOOD
fn dfs(graph: &Graph, v: Vertex) -> usize {
    let mut visited = FxHashSet::default();
    return go(graph, &mut visited, v);

    fn go(graph: &Graph, visited: &mut FxHashSet<Vertex>, v: usize) -> usize {
        ...
    }
}

// BAD
fn dfs(graph: &Graph, v: Vertex) -> usize {
    fn go(graph: &Graph, visited: &mut FxHashSet<Vertex>, v: usize) -> usize {
        ...
    }

    let mut visited = FxHashSet::default();
    go(graph, &mut visited, v)
}
```

**Rationale:** consistency, improved top-down readability.

## Helper Variables

Introduce helper variables freely, especially for multiline conditions:

```rust
// GOOD
let rustfmt_not_installed =
    captured_stderr.contains("not installed") || captured_stderr.contains("not available");

match output.status.code() {
    Some(1) if !rustfmt_not_installed => Ok(None),
    _ => Err(format_err!("rustfmt failed:\n{}", captured_stderr)),
};

// BAD
match output.status.code() {
    Some(1)
        if !captured_stderr.contains("not installed")
           && !captured_stderr.contains("not available") => Ok(None),
    _ => Err(format_err!("rustfmt failed:\n{}", captured_stderr)),
};
```

**Rationale:** Like blocks, single-use variables are a cognitively cheap abstraction, as they have access to all the context.
Extra variables help during debugging, they make it easy to print/view important intermediate results.
Giving a name to a condition inside an `if` expression often improves clarity and leads to nicely formatted code.

## Token names

Use `T![foo]` instead of `SyntaxKind::FOO_KW`.

```rust
// GOOD
match p.current() {
    T![true] | T![false] => true,
    _ => false,
}

// BAD

match p.current() {
    SyntaxKind::TRUE_KW | SyntaxKind::FALSE_KW => true,
    _ => false,
}
```

**Rationale:** The macro uses the familiar Rust syntax, avoiding ambiguities like "is this a brace or bracket?".

## Documentation

Style inline code comments as proper sentences.
Start with a capital letter, end with a dot.

```rust
// GOOD

// Only simple single segment paths are allowed.
MergeBehavior::Last => {
    tree.use_tree_list().is_none() && tree.path().map(path_len) <= Some(1)
}

// BAD

// only simple single segment paths are allowed
MergeBehavior::Last => {
    tree.use_tree_list().is_none() && tree.path().map(path_len) <= Some(1)
}
```

**Rationale:** writing a sentence (or maybe even a paragraph) rather just "a comment" creates a more appropriate frame of mind.
It tricks you into writing down more of the context you keep in your head while coding.

For `.md` files prefer a sentence-per-line format, don't wrap lines.
If the line is too long, you want to split the sentence in two :-)

**Rationale:** much easier to edit the text and read the diff, see [this link](https://asciidoctor.org/docs/asciidoc-recommended-practices/#one-sentence-per-line).


<a id=contributing_syntax></a>

# Syntax in rust-analyzer

## About the guide

This guide describes the current state of syntax trees and parsing in rust-analyzer as of 2020-01-09 ([link to commit](https://github.com/rust-lang/rust-analyzer/tree/cf5bdf464cad7ceb9a67e07985a3f4d3799ec0b6)).

## Source Code

The things described are implemented in three places

* [rowan](https://github.com/rust-analyzer/rowan/tree/v0.15.10) -- a generic library for rowan syntax trees.
* [syntax](https://github.com/rust-lang/rust-analyzer/tree/36a70b7435c48837018c71576d7bb4e8f763f501/crates/syntax) crate inside rust-analyzer which wraps `rowan` into rust-analyzer specific API.
  Nothing in rust-analyzer except this crate knows about `rowan`.
* [parser](https://github.com/rust-lang/rust-analyzer/tree/36a70b7435c48837018c71576d7bb4e8f763f501/crates/parser) crate parses input tokens into a `syntax` tree

## Design Goals

* Syntax trees are lossless, or full fidelity. All comments and whitespace get preserved.
* Syntax trees are semantic-less. They describe *strictly* the structure of a sequence of characters, they don't have hygiene, name resolution or type information attached.
* Syntax trees are simple value types. It is possible to create trees for a syntax without any external context.
* Syntax trees have intuitive traversal API (parent, children, siblings, etc).
* Parsing is lossless (even if the input is invalid, the tree produced by the parser represents it exactly).
* Parsing is resilient (even if the input is invalid, parser tries to see as much syntax tree fragments in the input as it can).
* Performance is important, it's OK to use `unsafe` if it means better memory/cpu usage.
* Keep the parser and the syntax tree isolated from each other, such that they can vary independently.

## Trees

### Overview

The syntax tree consists of three layers:

* GreenNodes
* SyntaxNodes (aka RedNode)
* AST

Of these, only GreenNodes store the actual data, the other two layers are (non-trivial) views into green tree.
Red-green terminology comes from Roslyn ([link](https://ericlippert.com/2012/06/08/red-green-trees/)) and gives the name to the `rowan` library. Green and syntax nodes are defined in rowan, ast is defined in rust-analyzer.

Syntax trees are a semi-transient data structure.
In general, frontend does not keep syntax trees for all files in memory.
Instead, it *lowers* syntax trees to more compact and rigid representation, which is not full-fidelity, but which can be mapped back to a syntax tree if so desired.

### GreenNode

GreenNode is a purely-functional tree with arbitrary arity. Conceptually, it is equivalent to the following run of the mill struct:

```rust
#[derive(PartialEq, Eq, Clone, Copy)]
struct SyntaxKind(u16);

#[derive(PartialEq, Eq, Clone)]
struct Node {
    kind: SyntaxKind,
    text_len: usize,
    children: Vec<Arc<Either<Node, Token>>>,
}

#[derive(PartialEq, Eq, Clone)]
struct Token {
    kind: SyntaxKind,
    text: String,
}
```

All the difference between the above sketch and the real implementation are strictly due to optimizations.

Points of note:
* The tree is untyped. Each node has a "type tag", `SyntaxKind`.
* Interior and leaf nodes are distinguished on the type level.
* Trivia and non-trivia tokens are not distinguished on the type level.
* Each token carries its full text.
* The original text can be recovered by concatenating the texts of all tokens in order.
* Accessing a child of particular type (for example, parameter list of a function) generally involves linearly traversing the children, looking for a specific `kind`.
* Modifying the tree is roughly `O(depth)`.
  We don't make special efforts to guarantee that the depth is not linear, but, in practice, syntax trees are branchy and shallow.
* If mandatory (grammar wise) node is missing from the input, it's just missing from the tree.
* If an extra erroneous input is present, it is wrapped into a node with `ERROR` kind, and treated just like any other node.
* Parser errors are not a part of syntax tree.

An input like `fn f() { 90 + 2 }` might be parsed as

```
FN@0..17
  FN_KW@0..2 "fn"
  WHITESPACE@2..3 " "
  NAME@3..4
    IDENT@3..4 "f"
  PARAM_LIST@4..6
    L_PAREN@4..5 "("
    R_PAREN@5..6 ")"
  WHITESPACE@6..7 " "
  BLOCK_EXPR@7..17
    L_CURLY@7..8 "{"
    WHITESPACE@8..9 " "
    BIN_EXPR@9..15
      LITERAL@9..11
        INT_NUMBER@9..11 "90"
      WHITESPACE@11..12 " "
      PLUS@12..13 "+"
      WHITESPACE@13..14 " "
      LITERAL@14..15
        INT_NUMBER@14..15 "2"
    WHITESPACE@15..16 " "
    R_CURLY@16..17 "}"
```

#### Optimizations

(significant amount of implementation work here was done by [CAD97](https://github.com/cad97)).

To reduce the amount of allocations, the GreenNode is a [DST](https://doc.rust-lang.org/reference/dynamically-sized-types.html), which uses a single allocation for header and children. Thus, it is only usable behind a pointer.

```
*-----------+------+----------+------------+--------+--------+-----+--------*
| ref_count | kind | text_len | n_children | child1 | child2 | ... | childn |
*-----------+------+----------+------------+--------+--------+-----+--------*
```

To more compactly store the children, we box *both* interior nodes and tokens, and represent
`Either<Arc<Node>, Arc<Token>>` as a single pointer with a tag in the last bit.

To avoid allocating EVERY SINGLE TOKEN on the heap, syntax trees use interning.
Because the tree is fully immutable, it's valid to structurally share subtrees.
For example, in `1 + 1`, there will be a *single* token for `1` with ref count 2; the same goes for the ` ` whitespace token.
Interior nodes are shared as well (for example in `(1 + 1) * (1 + 1)`).

Note that, the result of the interning is an `Arc<Node>`.
That is, it's not an index into interning table, so you don't have to have the table around to do anything with the tree.
Each tree is fully self-contained (although different trees might share parts).
Currently, the interner is created per-file, but it will be easy to use a per-thread or per-some-context one.

We use a `TextSize`, a newtyped `u32`, to store the length of the text.

We currently use `SmolStr`, a small object optimized string to store text.
This was mostly relevant *before* we implemented tree interning, to avoid allocating common keywords and identifiers. We should switch to storing text data alongside the interned tokens.

#### Alternative designs

##### Dealing with trivia

In the above model, whitespace is not treated specially.
Another alternative (used by swift and roslyn) is to explicitly divide the set of tokens into trivia and non-trivia tokens, and represent non-trivia tokens as

```rust
struct Token {
    kind: NonTriviaTokenKind,
    text: String,
    leading_trivia: Vec<TriviaToken>,
    trailing_trivia: Vec<TriviaToken>,
}
```

The tree then contains only non-trivia tokens.

Another approach (from Dart) is to, in addition to a syntax tree, link all the tokens into a bidirectional link list.
That way, the tree again contains only non-trivia tokens.

Explicit trivia nodes, like in `rowan`, are used by IntelliJ.

##### Accessing Children

As noted before, accessing a specific child in the node requires a linear traversal of the children (though we can skip tokens, because the tag is encoded in the pointer itself).
It is possible to recover O(1) access with another representation.
We explicitly store optional and missing (required by the grammar, but not present) nodes.
That is, we use `Option<Node>` for children.
We also remove trivia tokens from the tree.
This way, each child kind generally occupies a fixed position in a parent, and we can use index access to fetch it.
The cost is that we now need to allocate space for all not-present optional nodes.
So, `fn foo() {}` will have slots for visibility, unsafeness, attributes, abi and return type.

IntelliJ uses linear traversal.
Roslyn and Swift do `O(1)` access.

##### Mutable Trees

IntelliJ uses mutable trees.
Overall, it creates a lot of additional complexity.
However, the API for *editing* syntax trees is nice.

For example the assist to move generic bounds to where clause has this code:

```kotlin
 for typeBound in typeBounds {
     typeBound.typeParamBounds?.delete()
}
```

Modeling this with immutable trees is possible, but annoying.

### Syntax Nodes

A function green tree is not super-convenient to use.
The biggest problem is accessing parents (there are no parent pointers!).
But there are also "identify" issues.
Let's say you want to write a code which builds a list of expressions in a file: `fn collect_expressions(file: GreenNode) -> HashSet<GreenNode>`.
For the input like

```rust
fn main() {
    let x = 90i8;
    let x = x + 2;
    let x = 90i64;
    let x = x + 2;
}
```

both copies of the `x + 2` expression are representing by equal (and, with interning in mind, actually the same) green nodes.
Green trees just can't differentiate between the two.

`SyntaxNode` adds parent pointers and identify semantics to green nodes.
They can be called cursors or [zippers](https://en.wikipedia.org/wiki/Zipper_(data_structure)) (fun fact: zipper is a derivative (as in ′) of a data structure).

Conceptually, a `SyntaxNode` looks like this:

```rust
type SyntaxNode = Arc<SyntaxData>;

struct SyntaxData {
    offset: usize,
    parent: Option<SyntaxNode>,
    green: Arc<GreenNode>,
}

impl SyntaxNode {
    fn new_root(root: Arc<GreenNode>) -> SyntaxNode {
        Arc::new(SyntaxData {
            offset: 0,
            parent: None,
            green: root,
        })
    }
    fn parent(&self) -> Option<SyntaxNode> {
        self.parent.clone()
    }
    fn children(&self) -> impl Iterator<Item = SyntaxNode> {
        let mut offset = self.offset;
        self.green.children().map(|green_child| {
            let child_offset = offset;
            offset += green_child.text_len;
            Arc::new(SyntaxData {
                offset: child_offset,
                parent: Some(Arc::clone(self)),
                green: Arc::clone(green_child),
            })
        })
    }
}

impl PartialEq for SyntaxNode {
    fn eq(&self, other: &SyntaxNode) -> bool {
        self.offset == other.offset
            && Arc::ptr_eq(&self.green, &other.green)
    }
}
```

Points of note:

* SyntaxNode remembers its parent node (and, transitively, the path to the root of the tree)
* SyntaxNode knows its *absolute* text offset in the whole file
* Equality is based on identity. Comparing nodes from different trees does not make sense.

#### Optimization

The reality is different though :-)
Traversal of trees is a common operation, and it makes sense to optimize it.
In particular, the above code allocates and does atomic operations during a traversal.

To get rid of atomics, `rowan` uses non thread-safe `Rc`.
This is OK because trees traversals mostly (always, in case of rust-analyzer) run on a single thread. If you need to send a `SyntaxNode` to another thread, you can send a pair of **root**`GreenNode` (which is thread safe) and a `Range<usize>`.
The other thread can restore the `SyntaxNode` by traversing from the root green node and looking for a node with specified range.
You can also use the similar trick to store a `SyntaxNode`.
That is, a data structure that holds a `(GreenNode, Range<usize>)` will be `Sync`.
However, rust-analyzer goes even further.
It treats trees as semi-transient and instead of storing a `GreenNode`, it generally stores just the id of the file from which the tree originated: `(FileId, Range<usize>)`.
The `SyntaxNode` is the restored by reparsing the file and traversing it from root.
With this trick, rust-analyzer holds only a small amount of trees in memory at the same time, which reduces memory usage.

Additionally, only the root `SyntaxNode` owns an `Arc` to the (root) `GreenNode`.
All other `SyntaxNode`s point to corresponding `GreenNode`s with a raw pointer.
They also point to the parent (and, consequently, to the root) with an owning `Rc`, so this is sound.
In other words, one needs *one* arc bump when initiating a traversal.

To get rid of allocations, `rowan` takes advantage of `SyntaxNode: !Sync` and uses a thread-local free list of `SyntaxNode`s.
In a typical traversal, you only directly hold a few `SyntaxNode`s at a time (and their ancestors indirectly), so a free list proportional to the depth of the tree removes all allocations in a typical case.

So, while traversal is not exactly incrementing a pointer, it's still pretty cheap: TLS + rc bump!

Traversal also yields (cheap) owned nodes, which improves ergonomics quite a bit.

#### Alternative Designs

##### Memoized RedNodes

C# and Swift follow the design where the red nodes are memoized, which would look roughly like this in Rust:

```rust
type SyntaxNode = Arc<SyntaxData>;

struct SyntaxData {
    offset: usize,
    parent: Option<SyntaxNode>,
    green: Arc<GreenNode>,
    children: Vec<OnceCell<SyntaxNode>>,
}
```

This allows using true pointer equality for comparison of identities of `SyntaxNodes`.
rust-analyzer used to have this design as well, but we've since switched to cursors.
The main problem with memoizing the red nodes is that it more than doubles the memory requirements for fully realized syntax trees.
In contrast, cursors generally retain only a path to the root.
C# combats increased memory usage by using weak references.

### AST

`GreenTree`s are untyped and homogeneous, because it makes accommodating error nodes, arbitrary whitespace and comments natural, and because it makes possible to write generic tree traversals.
However, when working with a specific node, like a function definition, one would want a strongly typed API.

This is what is provided by the AST layer. AST nodes are transparent wrappers over untyped syntax nodes:

```rust
pub trait AstNode {
    fn cast(syntax: SyntaxNode) -> Option<Self>
    where
        Self: Sized;

    fn syntax(&self) -> &SyntaxNode;
}
```

Concrete nodes are generated (there are 117 of them), and look roughly like this:

```rust
#[derive(Debug, Clone, PartialEq, Eq, Hash)]
pub struct FnDef {
    syntax: SyntaxNode,
}

impl AstNode for FnDef {
    fn cast(syntax: SyntaxNode) -> Option<Self> {
        match kind {
            FN => Some(FnDef { syntax }),
            _ => None,
        }
    }
    fn syntax(&self) -> &SyntaxNode {
        &self.syntax
    }
}

impl FnDef {
    pub fn param_list(&self) -> Option<ParamList> {
        self.syntax.children().find_map(ParamList::cast)
    }
    pub fn ret_type(&self) -> Option<RetType> {
        self.syntax.children().find_map(RetType::cast)
    }
    pub fn body(&self) -> Option<BlockExpr> {
        self.syntax.children().find_map(BlockExpr::cast)
    }
    // ...
}
```

Variants like expressions, patterns or items are modeled with `enum`s, which also implement `AstNode`:

```rust
#[derive(Debug, Clone, PartialEq, Eq, Hash)]
pub enum AssocItem {
    FnDef(FnDef),
    TypeAliasDef(TypeAliasDef),
    ConstDef(ConstDef),
}

impl AstNode for AssocItem {
    ...
}
```

Shared AST substructures are modeled via (dynamically compatible) traits:

```rust
trait HasVisibility: AstNode {
    fn visibility(&self) -> Option<Visibility>;
}

impl HasVisibility for FnDef {
    fn visibility(&self) -> Option<Visibility> {
        self.syntax.children().find_map(Visibility::cast)
    }
}
```

Points of note:

* Like `SyntaxNode`s, AST nodes are cheap to clone pointer-sized owned values.
* All "fields" are optional, to accommodate incomplete and/or erroneous source code.
* It's always possible to go from an ast node to an untyped `SyntaxNode`.
* It's possible to go in the opposite direction with a checked cast.
* `enum`s allow modeling of arbitrary intersecting subsets of AST types.
* Most of rust-analyzer works with the ast layer, with notable exceptions of:
  * macro expansion, which needs access to raw tokens and works with `SyntaxNode`s
  * some IDE-specific features like syntax highlighting are more conveniently implemented over a homogeneous `SyntaxNode` tree

#### Alternative Designs

##### Semantic Full AST

In IntelliJ the AST layer (dubbed **P**rogram **S**tructure **I**nterface) can have semantics attached, and is usually backed by either syntax tree, indices, or metadata from compiled libraries.
The backend for PSI can change dynamically.

### Syntax Tree Recap

At its core, the syntax tree is a purely functional n-ary tree, which stores text at the leaf nodes and node "kinds" at all nodes.
A cursor layer is added on top, which gives owned, cheap to clone nodes with identity semantics, parent links and absolute offsets.
An AST layer is added on top, which reifies each node `Kind` as a separate Rust type with the corresponding API.

## Parsing

The (green) tree is constructed by a DFS "traversal" of the desired tree structure:

```rust
pub struct GreenNodeBuilder { ... }

impl GreenNodeBuilder {
    pub fn new() -> GreenNodeBuilder { ... }

    pub fn token(&mut self, kind: SyntaxKind, text: &str) { ... }

    pub fn start_node(&mut self, kind: SyntaxKind) { ... }
    pub fn finish_node(&mut self) { ... }

    pub fn finish(self) -> GreenNode { ... }
}
```

The parser, ultimately, needs to invoke the `GreenNodeBuilder`.
There are two principal sources of inputs for the parser:
  * source text, which contains trivia tokens (whitespace and comments)
  * token trees from macros, which lack trivia

Additionally, input tokens do not correspond 1-to-1 with output tokens.
For example, two consecutive `>` tokens might be glued, by the parser, into a single `>>`.

For these reasons, the parser crate defines a callback interfaces for both input tokens and output trees.
The explicit glue layer then bridges various gaps.

The parser interface looks like this:

```rust
pub struct Token {
    pub kind: SyntaxKind,
    pub is_joined_to_next: bool,
}

pub trait TokenSource {
    fn current(&self) -> Token;
    fn lookahead_nth(&self, n: usize) -> Token;
    fn is_keyword(&self, kw: &str) -> bool;

    fn bump(&mut self);
}

pub trait TreeSink {
    fn token(&mut self, kind: SyntaxKind, n_tokens: u8);

    fn start_node(&mut self, kind: SyntaxKind);
    fn finish_node(&mut self);

    fn error(&mut self, error: ParseError);
}

pub fn parse(
    token_source: &mut dyn TokenSource,
    tree_sink: &mut dyn TreeSink,
) { ... }
```

Points of note:

* The parser and the syntax tree are independent, they live in different crates neither of which depends on the other.
* The parser doesn't know anything about textual contents of the tokens, with an isolated hack for checking contextual keywords.
* For gluing tokens, the `TreeSink::token` might advance further than one atomic token ahead.

### Reporting Syntax Errors

Syntax errors are not stored directly in the tree.
The primary motivation for this is that syntax tree is not necessary produced by the parser, it may also be assembled manually from pieces (which happens all the time in refactorings).
Instead, parser reports errors to an error sink, which stores them in a `Vec`.
If possible, errors are not reported during parsing and are postponed for a separate validation step.
For example, parser accepts visibility modifiers on trait methods, but then a separate tree traversal flags all such visibilities as erroneous.

### Macros

The primary difficulty with macros is that individual tokens have identities, which need to be preserved in the syntax tree for hygiene purposes.
This is handled by the `TreeSink` layer.
Specifically, `TreeSink` constructs the tree in lockstep with draining the original token stream.
In the process, it records which tokens of the tree correspond to which tokens of the input, by using text ranges to identify syntax tokens.
The end result is that parsing an expanded code yields a syntax tree and a mapping of text-ranges of the tree to original tokens.

To deal with precedence in cases like `$expr * 1`, we use special invisible parenthesis, which are explicitly handled by the parser.

### Whitespace & Comments

Parser does not see whitespace nodes.
Instead, they are attached to the tree in the `TreeSink` layer.

For example, in

```rust
// non doc comment
fn foo() {}
```

the comment will be (heuristically) made a child of function node.

### Incremental Reparse

Green trees are cheap to modify, so incremental reparse works by patching a previous tree, without maintaining any additional state.
The reparse is based on heuristic: we try to contain a change to a single `{}` block, and reparse only this block.
To do this, we maintain the invariant that, even for invalid code, curly braces are always paired correctly.

In practice, incremental reparsing doesn't actually matter much for IDE use-cases, parsing from scratch seems to be fast enough.

### Parsing Algorithm

We use a boring hand-crafted recursive descent + pratt combination, with a special effort of continuing the parsing if an error is detected.

### Parser Recap

Parser itself defines traits for token sequence input and syntax tree output.
It doesn't care about where the tokens come from, and how the resulting syntax tree looks like.


<a id=contributing_testing></a>

rust-analyzer's testing is based on *snapshot tests*: a test is a piece of input text, usually a Rust code, and some output text. There is then some testing helper that runs the feature on the input text and compares the result to the output text.

rust-analyzer uses a combination of the crate [`expect-test`](https://docs.rs/expect-test) and a custom testing framework.

This all may sound too abstract, so let's demonstrate with an example.

Type inference tests are located at `crates/hir-ty/src/tests`. There are various test helpers you can use. One of the simplest is `check_no_mismatches()`: it is given a piece of Rust code (we'll talk more about Rust code in tests later) and asserts that there are no type mismatches in it, that is, one type was expected but another was found (for example, `let x: () = 1` is a type mismatch). Note that we determine type mismatches via rust-analyzer's own analysis, not via the compiler (this is what we are testing, after all), which means there are often missed mismatches and sometimes bogus ones as well.

For example, the following test will fail:
```rust
#[test]
fn this_will_fail() {
    check_no_mismatches(
        r#"
fn main() {
    let x: () = 1;
}
    "#,
    );
}
```

Sometimes we want to check more that there are no type mismatches. For that we use other helpers. For example, often we want to assert that the type of some expression is some specific type. For that we use the `check_types()` function. It takes a Rust code string with custom annotation, that are common in our test suite. The general scheme of annotation is:

 - `$0` marks a position. What to do with it is determined by the testing helper. Commonly it denotes the cursor position in IDE tests (for example, hover).
 - `$0...$0` marks a range, commonly a selection in IDE tests.
 - `^...^`, commonly seen in a comment (`// ^^^^`), labels the line above. For example, the following will attach the label `hey` to the range of the variable name `cool`:

    ```rust
    let cool;
     // ^^^^ hey
    ```

`check_types()` uses labels to assert type: when you attach a label to a range, `check_types()` assert that the type of this range will be what written in the label.

It's all too abstract without an example:
```rust
#[test]
fn my_test() {
    check_types(
        r#"
fn main() {
    let x = 1;
     // ^ i32
}
    "#,
    );
}
```
Here, we assert that the type of the variable `x` is `i32`. Which is true, of course, so the test will pass.

Oftentimes it is convenient to assert the types of all of the expressions at once, and that brings us to the last kind of test. It uses `expect-test` to match an output text:
```rust
#[test]
fn my_test() {
    check_infer(
        r#"
fn main() {
    let x = 1;
}
    "#,
        expect![[r#"
            10..28 '{     ...= 1; }': ()
            20..21 'x': i32
            24..25 '1': i32
        "#]],
    );
}
```
The text inside the `expect![[]]` is determined by the helper, `check_infer()` in this case. For `check_infer()`, each line is a range in the source code (the range is counted in bytes and the source is trimmed, indentation is stripped), next to it there is the text in that range, or some part of it with `...` if it's too long, and finally comes the type of that range.

The important feature of `expect-test` is that it allows easy update of the expectation. Say you changed something in the code, maybe fixed a bug, and the output in `expect![[]]` needs to change. Or maybe you are writing it from scratch. Writing it by hand is very tedious and prone to mistakes. But `expect-trait` has a magic. You can set the environment variable `UPDATE_EXPECT=1`, then run the test, and it will update automatically! Some editors (e.g. VSCode) make it even more convenient: on them, on the top of every test that uses `expect-test`, next to the usual `Run | Debug` buttons, rust-analyzer also shows an `Update Expect` button. Clicking it will run that test in updating mode.

## Rust code in the tests

The first thing that you probably already noticed is that the Rust code in the tests is syntax highlighted! In fact, it even uses semantic highlighting. rust-analyzer highlights strings "as if" they contain Rust code if they are passed to a parameter marked `#[rust_analyzer::rust_fixture]`, and rust-analyzer test helpers do that (in fact, this was designed for them).

The syntax highlighting is very important, not just because it's nice to the eye: it's very easy to make mistakes in test code, and debugging that can be very hard. Often the test will just fail, printing an `{unknown}` type, and you'll have no clue what's going wrong. The syntax is the clue; if something isn't highlighted correctly, that probably means there is an error (there is one exception to this, which we'll discuss later). You can even set the semantic highlighting tag `unresolved_reference` to e.g. red, so you will see such things clearly.

Still, often you won't know what's going wrong. Why you can't fix the test, or worse, you expect it to fail but it doesn't. You can try the code on a real IDE to be sure it works. Later we'll give some tips to fix the test.

### The fixture

The Rust code in a test is not, a fact, a single Rust file. It has a mini-language that allows you to express multiple files, multiple crates, different configs, and more. All options are documented in `crates/test-utils/src/fixture.rs`, but here are some of the common ones:

 - `//- minicore: flag1, flag2, ...`. This is by far the most common flag. Tests in rust-analyzer don't have access by default to any other type - not `Option`, not `Iterator`, not even `Sized`. This flag allows you to include parts of the `crates/test-utils/src/minicore.rs` file, which mimics `core`. All possible flags are listed at the top of `minicore` along with the flags they imply, then later you can see by `// region:flag` and `// endregion:flag` what code each flag enables.
 - `// /path/to/file.rs crate:crate deps:dep_a,dep_b`. The first component is the filename of the code that follows (until the next file). It is required, but only if you supply this line. Other components in this line are optional. They include `crate:crate_name`, to start a new crate, or `deps:dep_a,dep_b`, to declare dependencies between crates. You can also declare modules as usual in Rust - just name your paths `/foo.rs` or `/foo/mod.rs`, declare `mod foo` and that's it!

So the following snippet:
```rust
//- minicore: sized, fn
// /lib.rs crate:foo
pub mod bar;
// /bar.rs
pub struct Bar;
// /main.rs crate:main deps:foo
use foo::Bar;
```
Declares two crates `foo` and `main` where `main` depends on `foo`, with dependency in `Sized` and the `FnX` traits from `core`, and a module of `foo` called `bar`.

And as promised, here are some tips to make your test work:

 - If you use some type/trait, you must *always* include it in `minicore`. Note - not all types from core/std are available there, you can add new (under flags) if you need. And import them if they are not in the prelude.
 - If you use unsized types (`dyn Trait`/slices), you may want to include some or all of the following `minicore` flags: `sized`, `unsize`, `coerce_unsized`, `dispatch_from_dyn`.
 - If you use closures, consider including the `fn` minicore flag. Async closures need the `async_fn` flag.
 - `sized` is commonly needed, consider adding it if you're stuck.