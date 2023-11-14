

combine script
=========================================================

此文档来源自 [Clangd](https://github.com/llvm/clangd-www) 官方文档，合并使用脚本：

    #! /usr/bin/env bash
    toc='./_data/navigation.yml'
    
    print_title() {
        printf "\n%.0s" {1..2}
        printf "$1\n"
        printf "=%.0s" {1..57}
        printf "\n%.0s" {1..2}
    }
    
    print_title "combine script"
    cat << EOF
    此文档来源自 [Clangd](https://github.com/llvm/clangd-www) 官方文档，合并使用脚本：
    
    EOF
    cat $0 | sed -n 's/.*/    \0/gp'
    
    print_title $toc
    cat << EOF
    此文档目录数据来源 navigation.yml：
    
    EOF
    cat $toc | sed -n 's/.*/    \0/gp'
    
    while read -r line
    do
        print_title "$line"
        if [ "http" != ${line:0:4} ]
        then
            cat ".${line/ =*/}.md"
        fi
    done << EOF
    `sed -n '/- title: /, /url: /{ 
        s/.*title: / /; 
        T url; h; 
        :url s/.*url: / /; 
        T next; G; s/\n/ =>/p; 
        :next }' $toc`
    EOF

为了提高兼容性，可以使用 `[\r\n]\+` 匹配换行符号，`\n` 在 Linux 可能无法工作。

./_data/navigation.yml
=========================================================

此文档目录数据来源 navigation.yml：

    - title: Getting Started
      url: /installation
      icon: '▶'
    - title: Features
      url: /features
      icon: '✓'
    - title: Configuration
      url: /config
      icon: '⚙️'
    - title: Troubleshooting
      url: /troubleshooting
      icon: '💥'
    - title: Guides
      url: /guides/
      icon: '📖'
      children:
        - title: Using a remote index
          description: >
            Avoid indexing a large project locally and share an index between
            developers in your team by running clangd index server.
          url: /guides/remote-index
        - title: System headers
          description: >
            Details about how system header detection in clangd works and how to fix
            issues with missing system headers.
          url: /guides/system-headers
        - title: 'Managing #includes'
          description: >
            Identify and #include the headers you actually use, and understand how
            clangd decides which headers are used.
          url: /guides/include-cleaner
    - title: FAQ
      url: /faq
      icon: '❓'
    - separator
    - title: Design
      url: /design/
      icon: '✨'
      children:
        - title: Code walkthrough
          url: /design/code
        - title: Compile commands
          url: /design/compile-commands
        - title: Threads & requests
          url: /design/threads
        - title: The clangd index
          url: /design/indexing
        - title: Remote index
          url: /design/remote-index
        - title: Include Cleaner
          url: /design/include-cleaner
    - title: Protocol extensions
      url: /extensions
      icon: '⊕'
    - separator
    - title: Browse code
      url: https://github.com/llvm/llvm-project/tree/main/clang-tools-extra/clangd
      icon: '📄'
    - title: Bug tracker
      url: https://github.com/clangd/clangd/issues
      icon: '🐞'
    - title: Forum
      url: https://github.com/clangd/clangd/discussions
      icon: '💡'
    - title: Chat (#clangd)
      url: https://discord.gg/xS7Z362
      icon: '💬'


/installation => Getting Started
=========================================================

# Getting started

To use clangd, you need:

- clangd installed
- a plugin for your editor
- to tell clangd how your project is built

## Installing clangd

For best results, use the [most recent version](https://github.com/clangd/clangd/releases/latest) of clangd. 

You can check the version currently installed with `clangd --version`.

(Version numbers are based on LLVM. clangd 7 was the first usable release).

### Installing with a package manager

<details>
<summary markdown="span">Mac OS X</summary>
 
Clangd can be installed (along with LLVM) via [Homebrew](https://brew.sh):
```
brew install llvm
```

or with [MacPorts](https://www.macports.org/):

```
sudo port install clang-11
```

</details>

<details>
<summary markdown="span">Windows</summary>
Download the LLVM installer from [releases.llvm.org](http://releases.llvm.org/download.html)
</details>

<details>
<summary markdown="span">Debian/Ubuntu</summary>
Installing the `clangd` package will usually give you a slightly older version.

Try to install a packaged release (12.0):

```bash
sudo apt-get install clangd-12
```

If that's not found, at least `clangd-9` or `clangd-8` should be available.
Versions before 8 were part of the `clang-tools` package.

This will install clangd as `/usr/bin/clangd-12`. Make it the default `clangd`:

```bash
sudo update-alternatives --install /usr/bin/clangd clangd /usr/bin/clangd-12 100
```

</details>

<details>
<summary markdown="span">Other systems</summary>
Most distributions include clangd in a `clangd` package, in a `clang-tools`
package, or in the full `llvm` distribution.

For some platforms, binaries are also available at [releases.llvm.org](http://releases.llvm.org/download.html).
</details>

### Standalone .zip releases

You can also download binaries directly for macOS, windows, and Linux (x86-64):
[latest stable release](https://github.com/clangd/clangd/releases/latest).

If you live on the bleeding edge, snapshot pre-releases are built weekly and
available on the [github releases page](https://github.com/clangd/clangd/releases).

### Compiling from sources

You can find instructions in
[llvm-project](https://github.com/llvm/llvm-project/tree/main/clang-tools-extra/clangd#building-and-testing-clangd).

## Editor plugins

Language Server plugins are available for many editors. In principle clangd
should work with any of them, though feature set and interface may vary.

Here are some plugins we know work well with clangd:

<details>
<summary markdown="span">Vim</summary>
[YouCompleteMe](https://ycm-core.github.io/YouCompleteMe/) can be installed with
clangd support. **This is not on by default**, you must install it with
`install.py --clangd-completer`.

We recommend changing a couple of YCM's default settings. In `.vimrc` add:
```
" Let clangd fully control code completion
let g:ycm_clangd_uses_ycmd_caching = 0
" Use installed clangd, not YCM-bundled clangd which doesn't get updates.
let g:ycm_clangd_binary_path = exepath("clangd")
```

You should see errors highlighted and completions as you type.

![Code completion in YouCompleteMe](https://clangd.llvm.org/screenshots/ycm_completion.png)

YouCompleteMe supports many of clangd's features:

- code completion
- diagnostics and fixes (`:YcmCompleter FixIt`)
- find declarations, references, and definitions (`:YcmCompleter GoTo` etc)
- rename symbol (`:YcmCompleter RefactorRename`)

### Under the hood

- **Debug logs**: run `:YcmDebugInfo` to see clangd status, and `:YcmToggleLogs`
  to view clangd's debug logs.
- **Command-line flags**: Set `g:ycm_clangd_args` in `.vimrc`, e.g.:

  ```vim
  let g:ycm_clangd_args = ['-log=verbose', '-pretty']
  ```

- **Alternate clangd binary**: set `g:ycm_clangd_binary_path` in `.vimrc`.

---

[LanguageClient-neovim](https://github.com/autozimu/LanguageClient-neovim)
also has [instructions for using clangd](https://github.com/autozimu/LanguageClient-neovim/wiki/Clangd),
and **may** be easier to install.
</details>

<details>
<summary markdown="span">Emacs</summary>
[eglot](https://github.com/joaotavora/eglot) can be configured to work with clangd.

Install eglot with `M-x package-install RET eglot RET`.

Add the following to `~/.emacs` to enable clangd:

```elisp
(require 'eglot)
(add-to-list 'eglot-server-programs '((c++-mode c-mode) "clangd"))
(add-hook 'c-mode-hook 'eglot-ensure)
(add-hook 'c++-mode-hook 'eglot-ensure)
```

After restarting you should see diagnostics for errors in your code, and `M-x
completion-at-point` should work.

![Diagnostics in Emacs](https://clangd.llvm.org/screenshots/emacs_diagnostics.png)

eglot supports many of clangd's features, with caveats:

- code completion, enhanced by `company-mode`, see below
- diagnostics and fixes
- find definitions and references (`M-x xref-find-definitions` etc)
- hover and highlights
- code actions (`M-x eglot-code-actions`)

### company-mode

eglot does have basic integration with company-mode, which provides a more
fluent completion UI.

You can install it with `M-x package-install RET company RET`, and enable it
with `M-x company-mode`.

![Completion in company-mode](https://clangd.llvm.org/screenshots/emacs_company.png)

### Under the hood

- **Debug logs**: available in the `EGLOT events` buffer.
- **Command-line flags and alternate binary**: instead of adding `"clangd"`
  to `eglot-server-programs`, add `("/path/to/clangd" "-log=verbose")` etc.
</details>

<details>
<summary markdown="span">Visual Studio Code</summary>
The official extension is
[vscode-clangd](https://marketplace.visualstudio.com/items?itemName=llvm-vs-code-extensions.vscode-clangd)
and can be installed from within VSCode.

Choose **View** --> **Extensions**, then search for "clangd". (Make sure
the Microsoft C/C++ extension is **not** installed).

After restarting, you should see red underlines underneath errors, and
you should get rich code completions including e.g. function parameters.

![Code completion in VSCode](https://clangd.llvm.org/screenshots/basic_completion.png)

vscode-clangd has excellent support for all clangd features, including:

- code completion
- diagnostics and fixes
- find declarations, references, and definitions
- find symbol in file (`Ctrl-P @foo`) or workspace (`Ctrl-P #foo`)
- hover and highlights
- code actions

### Under the hood

- **Debug logs**: when clangd is running, you should see "Clang Language Server"
  in the dropdown of the Output panel (**View** -> **Output**).
- **Command-line flags**: these can be passed in the `clangd.arguments` array
  in your `settings.json`. (**File** -> **Preferences** -> **Settings**).
- **Alternate clangd binary**: set the `clangd.path` string in `settings.json`.
</details>

<details>
<summary markdown="span">Sublime Text</summary>
[tomv564/LSP](https://github.com/tomv564/LSP) works with clangd out of the box.

Select **Tools**-->**Install Package Control** (if you haven't installed it yet).

Press `Ctrl-Shift-P` and select **Package Control: Install Package**. Select
**LSP**.

Press `Ctrl-Shift-P` and select **LSP: Enable Language Server Globally**. Select
**clangd**.

Open a C++ file, and you should see diagnostics and completion:

![Completion in Sublime Text](https://clangd.llvm.org/screenshots/sublime_completion.png)

The LSP package has excellent support for all most clangd features, including:

- code completion (a bit noisy due to how snippets are presented)
- diagnostics and fixes
- find definition and references
- hover and highlights
- code actions

### Under the hood

Settings can be tweaked under **Preferences**-->**Package Settings**-->**LSP**.

- **Debug logs**: add `"log_stderr": true`
- **Command-line flags and alternate clangd binary**: inside the
  `"clients": {"clangd": { ... } }` section, add
  `"command": ["/path/to/clangd", "-log=verbose"]` etc.

</details>

<details>
<summary markdown="span">Other editors</summary>
There is a directory of LSP clients at [langserver.org](http://langserver.org).

A generic client should be configured to run the command `clangd`, and
communicate via the language server protocol on standard input/output.
</details>

If you don't have strong feelings about an editor, we suggest you try out
[VSCode](https://code.visualstudio.com/), it has excellent language server
support and most faithfully demonstrates what clangd can do.

## Project setup

To understand your source code, clangd needs to know your build flags.
(This is just a fact of life in C++, source files are not self-contained).

By default, clangd will assume your code is built as `clang some_file.cc`,
and you'll probably get spurious errors about missing `#include`d files, etc.
There are a couple of ways to fix this.

### `compile_commands.json`

This file provides compile commands for every source file in a project.
It is usually generated by tools.

clangd will look in the parent directories of the files you edit looking for it,
and also in subdirectories named `build/`.
For example, if editing `$SRC/gui/window.cpp`, we search in `$SRC/gui/`,
`$SRC/gui/build/`, `$SRC/`, `$SRC/build/`, ...

<details>
<summary markdown="span">CMake-based projects</summary>
If your project builds with CMake, it can generate this file. You should enable
it with:

```bash
cmake -DCMAKE_EXPORT_COMPILE_COMMANDS=1
```

`compile_commands.json` will be written to your build directory.
If your build directory is `$SRC` or `$SRC/build`, clangd will find it.
Otherwise, symlink or copy it to `$SRC`, the root of your source tree.

```bash
ln -s ~/myproject-build/compile_commands.json ~/myproject/
```
</details>

<details>
<summary markdown="span">Bazel-based projects</summary>
Bazel can generate this file via [this extractor extension](https://github.com/hedronvision/bazel-compile-commands-extractor). Refer to instructions in the project README; it is intended for use with clangd. 
</details>

<details>
<summary markdown="span">Other build systems, using Bear</summary>
[Bear](https://github.com/rizsotto/Bear) is a tool to generate a
compile_commands.json file by recording a complete build.

For a `make`-based build, you can run `make clean; bear -- make` to generate the
file (and run a clean build!).
</details>

Other tools can also generate this file. See [the compile_commands.json
specification](https://clang.llvm.org/docs/JSONCompilationDatabase.html).

### `compile_flags.txt`

If all files in a project use the same build flags, you can put those
flags one-per-line in `compile_flags.txt` in your source root.

Clangd will assume the compile command is `clang $FLAGS some_file.cc`.

Creating this file by hand is a reasonable place to start if your project is
quite simple. However background-indexing will not work, as clangd can't be
sure which of the files are project sources.

This file will be ignored if `compile_commands.json` is present.


/features => Features
=========================================================

# Features

Here is what clangd can do for you.
Screenshots show [VSCode](https://code.visualstudio.com/); the available
features and UI will depend on your editor.

{% include toc.md %}

## Errors and warnings

clangd runs the clang compiler on your code as you type, and shows diagnostics
of errors and warnings in-place.

![screenshot: clang errors](https://clangd.llvm.org/screenshots/errors.png)

(Some errors are suppressed: diagnostics that require expanding templates in
headers are disabled for performance reasons).

### Fixes

The compiler can suggest fixes for many common problems automatically, and
clangd can update the code for you.

![screenshot: apply fix](https://clangd.llvm.org/screenshots/apply_fix.gif)

If a missing symbol was seen in a file you've edited recently, clangd will
suggest inserting it.
{:.v9}

![screenshot: include-fixer fix](https://clangd.llvm.org/screenshots/include_fixer_fix.png)

### clang-tidy checks
{:.v9}

clangd embeds [clang-tidy](https://clang.llvm.org/extra/clang-tidy/) which
provides extra hints about code problems: bug-prone patterns, performance traps,
and style issues.

![screenshot: apply clang-tidy fix](https://clangd.llvm.org/screenshots/apply_clang_tidy_fix.gif)

clangd respects your project's `.clang-tidy` file which controls the checks to
run. Not all checks work within clangd.


## Code completion

You'll see suggestions as you type based on what methods, variables, etc are
available in this context.

![screenshot: code completion](https://clangd.llvm.org/screenshots/code_completion.png)

Abbreviating words may help you find the right result faster. If you type in
`camelCase` but the function you're looking for is `snake_case`, that's OK.

### Namespace and include insertion
{:.v8}

clangd will sometimes suggest results from other files and namespaces. In this
case the correct qualifier and `#include` directive will be inserted.

![screenshot: code completion insert ns](https://clangd.llvm.org/screenshots/code_completion_insert_ns_qualifiers.gif)

### Signature help

Some editors will show you the parameters of the function you're calling, as
you fill them in.

![screenshot: signature help](https://clangd.llvm.org/screenshots/signature_help.gif)

## Cross-references

These features let you navigate your codebase.

They work across the files you've opened.
{:.v7}

clangd will also automatically index your whole project.
{:.v9}

### Find definition/declaration

Jump to the definition or declaration of a symbol under the cursor.

![screenshot: go to def](https://clangd.llvm.org/screenshots/go_to_def.gif)

(Some editors only expose "find definition" - hit it again to jump to the
declaration).
{:.v9}

This also works on #include lines, to jump to the included file.

### Find references

Show all references to a symbol under the cursor.

![screenshot: find references](https://clangd.llvm.org/screenshots/find_all_refs.gif)

Some editors will automatically highlight local references to the selected
symbol as you move around a file.

## Navigation

clangd informs the editor of the code structure in the current file.
Some editors use this to present an outline view:

![screenshot: outline](https://clangd.llvm.org/screenshots/outline.png)

In VSCode, this also allows jumping to a symbol within the current file.

Searching for symbols within the scope of the whole project is also possible.

![screenshot: navigation](https://clangd.llvm.org/screenshots/navigation.gif)

## Hover
{:.v10}

Hover over a symbol to see more information about it, such as its type,
documentation, and definition.

![screenshot: hover](https://clangd.llvm.org/screenshots/hover.png)

Hovering over `auto` will show the underlying type.

## Formatting

clangd embeds [clang-format](https://clang.llvm.org/docs/ClangFormat.html),
which can reformat your code: fixing indentation, breaking lines, and reflowing
comments.

![screenshot: format selection](https://clangd.llvm.org/screenshots/format_selection.gif)

clangd respects your project's `.clang-format` file which controls styling
options.

Format-as-you-type is experimental and doesn't work well yet.

## Refactoring

### Rename

Rename a symbol under the cursor. All usages of the symbol will be renamed,
including declaration, definition and references.

![screenshot: rename](https://clangd.llvm.org/screenshots/rename.gif)

Most symbols are renameable, such as classes, variables, functions and methods.

Renaming a symbol will affect usages of the name across the project.
{:.v11}

Known limitations

- References in templates and macro bodies may not be renamed (difficult to
  analyze in general)
- References in comments and disabled preprocessor sections are not yet renamed
- Related symbols (e.g. overriden methods in a class hierarchy) are not yet renamed
- Renaming symbols used in several files uses the [project index](design/indexing), and works best when it is up-to-date

> TIP: the rename workflow highly depends on the editor you are using. Some
> editors, e.g. VSCode, provide a way to preview the rename changes before
> applying them; while some just apply the changes directly.
{:.tip}


/config => Configuration
=========================================================

# Configuration

The configuration mechanism is new in clangd 11, and more options will be
exposed in this way in future.
{:.v11}

{% include toc.md %}

## Files

Configuration is stored in YAML files. These are either:

- **project configuration**: a file named `.clangd` in the source tree.
  (clangd searches in all parent directories of the active file).

  Generally this should be used for shared and checked-in settings.

  (Existing _directories_ named `.clangd` can be deleted.
  These were used for temporary storage by clangd before version 11.)

- **user configuration**: a `config.yaml` file in an OS-specific directory:
  - *Windows*: `%LocalAppData%\clangd\config.yaml`, typically
    `C:\Users\Bob\AppData\Local\clangd\config.yaml`.
  - *macOS*: `~/Library/Preferences/clangd/config.yaml`
  - *Linux and others*: `$XDG_CONFIG_HOME/clangd/config.yaml`, typically
    `~/.config/clangd/config.yaml`.

  Private settings go here, and can be scoped to projects using `If` conditions.

Each file can contain multiple fragments separated by `---` lines. (This is
only useful if the fragments have different `If` conditions).

JSON is a subset of YAML, so you can use that syntax if you prefer.

Changes should take effect immediately as you continue to edit code.

## Loading and combining fragments

By default, user configuration applies to all files that are opened.
Project configuration applies to files under its tree (`proj/.clangd` configures
`proj/**`).

`If` conditions can further limit this, e.g. to configure only header files.

Configuration is combined when this is sensible. In case of conflicts, user
config has the highest precedence, then inner project, then outer project.

# Schema

At the top-level, a fragment is a key-value mapping that divides the document
into "blocks" of related options, each of which is a key-value mapping.

In most places where an array of scalar values can be specified, a single value
is also acceptable. e.g. `Add: -Wall` is equivalent to `Add: [-Wall]`.

## If

Conditions in the `If` block restrict when a fragment applies.

```yaml
If:                               # Apply this config conditionally
  PathMatch: .*\.h                # to all headers...
  PathExclude: include/llvm-c/.*  # except those under include/llvm-c/
```

Each separate condition must match (combined with AND).
When one condition has multiple values, any may match (combined with OR).
e.g. `PathMatch: [foo/.*, bar/.*]` matches files in either directory.

Conditions based on a file's path use the following form:

- if the fragment came from a project directory, the path is relative
- if the fragment is global (e.g. user config), the path is absolute
- paths always use forward-slashes (UNIX-style)

If no file is being processed, these conditions will not match.

### PathMatch

The file being processed must fully match a regular expression.

### PathExclude

The file being processed must *not* fully match a regular expression.

## CompileFlags

Affects how a source file is parsed.

```yaml
CompileFlags:                     # Tweak the parse settings
  Add: [-xc++, -Wall]             # treat all files as C++, enable more warnings
  Remove: -W*                     # strip all other warning-related flags
  Compiler: clang++               # Change argv[0] of compile flags to `clang++`
```

clangd emulates how clang would interpret a file.
By default, it behaves roughly as `clang $FILENAME`, but real projects usually
require setting the include path (with the `-I` flag), defining preprocessor
symbols, configuring warnings etc.

Often, a compilation database specifies these compile commands. clangd
searches for `compile_commands.json` in parents of the source file.

This section modifies how the compile command is constructed.

### Add

List of flags to append to the compile command.

### Remove

List of flags to remove from the compile command.

- If the value is a recognized clang flag (like `-I`) then it will be
  removed along with any arguments. Synonyms like `--include-directory=`
  will also be removed.
- Otherwise, if the value ends in `*` (like `-DFOO=*`) then any argument
  with the prefix will be removed.
- Otherwise any argument exactly matching the value is removed.

In all cases, `-Xclang` is also removed where needed.

Example:

- Command: `clang++ --include-directory=/usr/include -DFOO=42 foo.cc`
- Configuration: `Remove: [-I, -DFOO=*]`
- Result: `clang++ foo.cc`

Flags added by the same CompileFlags entry will not be removed.

### CompilationDatabase
{:.v12}

Directory to search for compilation database (compile_commands.json etc).
Valid values are:
- A single path to a directory (absolute, or relative to the fragment)
- Ancestors: search all parent directories (the default)
- None: do not use a compilation database, just default flags.

### Compiler
{:.v14}

String to replace the executable name in the compile flags. The name controls
flag parsing (clang vs clang-cl), target inference (gcc-arm-noneabi) etc.

If the option matches a glob mentioned in `--query-driver`, then it'll be
invoked for extraction of include paths.

## Index

Controls how clangd understands code outside the current file.

```yaml
Index:
  Background: Skip     # Disable slow background indexing of these files.
```

clangd's indexes provide information about symbols that isn't available to
clang's parser, such as incoming references.

### Background

Whether files are built in the background to produce a project index.
This is checked for translation units only, not headers they include.
Legal values are `Build` (the default) or `Skip`.

### External
{:.v12}

Used to define an external index source:

- On-disk monolithic index produced by `clangd-indexer` or
- Address of a [remote-index-server](/guides/remote-index).

`MountPoint` can be used to specify source root for the index. This is necessary
to handle relative path conversions. Overall schema looks like this:

```yaml
Index:
  External:
    File: /abs/path/to/an/index.idx
    # OR
    Server: my.index.server.com:50051
    MountPoint: /files/under/this/project/
```

- Exactly one of `File` or `Server` needs to be specified.
- `MountPoint` defaults to location of the config fragment if not provided, must
  be absolute in global config and relative in local config.
- Declaring an `External` index disables background-indexing implicitly for
  files under the `MountPoint`. Users can turn it back on, by explicitly
  mentioning `Background: Build` in a later fragment.

### StandardLibrary
{:.v15}

Controls whether clangd eagerly indexes the standard library (to give
code completions of standard library symbols on an empty file). Sample block
(default).

```
Index:
  StandardLibrary: No
```

## Style

Describes the style of the codebase, beyond formatting.

### FullyQualifiedNamespaces

Namespaces that should always be fully qualified, meaning no "using"
declarations, always spell out the whole name (with or without leading::). 
All nested namespaces are affected as well.
Affects availability of the AddUsing tweak.

## Diagnostics
{:.v12}

### Suppress

Diagnostic codes that should be suppressed.

Valid values are:

- `'*'`, to disable all diagnostics
- diagnostic codes exposed by clangd (e.g `unknown_type`, `-Wunused-result`)
- clang internal diagnostic codes (e.g. `err_unknown_type`)
- warning categories (e.g. `unused-result`)
- clang-tidy check names (e.g. `bugprone-narrowing-conversions`)

This is a simple filter. Diagnostics can be controlled in other ways
(e.g. by disabling a clang-tidy check, or the `-Wunused` compile flag).
This often has other advantages, such as skipping some analysis.

### ClangTidy

Configure how clang-tidy runs over your files.

The settings are merged with any settings found in .clang-tidy
configuration files with the ones from clangd configs taking precedence.

#### Add

List of [checks](https://clang.llvm.org/extra/clang-tidy/checks/list.html).
These can be globs, for example `Add: 'bugprone-*'`.

#### Remove

List of checks to disable, can be globs.

This takes precedence over Add, this supports enabling all checks from a module apart from some specific checks.

Example to use all modernize module checks apart from use trailing return type:

```yaml
Diagnostics:
  ClangTidy:
    Add: modernize*
    Remove: modernize-use-trailing-return-type
```

#### CheckOptions

Key-value pairs of options for clang-tidy checks.
Available options for all checks can be found [here](https://clang.llvm.org/extra/clang-tidy/checks/list.html).

Note the format here is slightly different to `.clang-tidy` configuration
files as we don't specify `key: <key>, value: <value>`. Instead just use
`<key>: <value>`

```yaml
Diagnostics:
  ClangTidy:
    CheckOptions:
      readability-identifier-naming.VariableCase: CamelCase
```

### UnusedIncludes
{:.v14}

Enables Include Cleaner's [unused includes
diagnostics](/design/include-cleaner). Possible values: `None` (default),
`Strict`.

```yaml
Diagnostics:
  UnusedIncludes: Strict
```

## Completion
{:.v13}

### AllScopes
Whether code completion should include suggestions from scopes that are
not visible. The required scope prefix will be inserted.

## InlayHints
{:.v14}

Configures the behaviour of the inlay-hints feature. Sample block (default):

```yaml
InlayHints:
  BlockEnd: No
  Designators: Yes
  Enabled: Yes
  ParameterNames: Yes
  DeducedTypes: Yes
```

### Enabled
{:.v14}

A boolean that enables/disables the inlay-hints feature for all kinds, when
disabled, configuration for specific kinds are ignored.

### ParameterNames
{:.v14}

A boolean that enables/disables inlay-hints for parameter names in function
calls.

### DeducedTypes
{:.v14}

A boolean that enables/disables inlay-hints for deduced types.

### Designators
{:.v14}

A boolean that enables/disables inlay-hints for designators in aggregate initialization. (eg: `Designators: true`: `std::vector<int> arr = {[0]= 1, [1]= 2}` ; `Designators: false`: `std::vector<int> arr = {1, 2}`)

### BlockEnd
{:.v17}

A boolean that enables/disables inlay-hints for block end comment. An example is shown below (comments are inlay hints):

```c++
void foo() {
  struct S {
  }; // struct S
} // foo
```

## Hover
{:.v14}

Configures contents of the hover cards. Sample block (default):

```yaml
Hover:
  ShowAKA: No
```

### ShowAKA
{:.v14}

A boolean that controls printing of desugared types, e.g:
`vector<int>::value_type (aka int)`


/troubleshooting => Troubleshooting
=========================================================

# Troubleshooting

Sorry if things are going wrong!

{% include toc.md %}

## Update clangd

Every release fixes many bugs, works in more scenarios, and provides clearer
logs for troubleshooting.

Try to [install the latest major-version release][installation] or even a
pre-release snapshot before you try anything else!

## Gathering logs

Your editor should make clangd's `stderr` log available (see [installation][]
for how). These describe the messages exchanged between the editor and `clangd`,
and what clangd was thinking.

Even if you don't understand the contents, it's tremendously useful to include
this when filing a bug. If you add `--log=verbose` to the clangd arguments, this
will include more detail (e.g. the full content of LSP messages).

## Lots of error diagnostics

If your code builds OK but clangd shows lots of error diagnostics, it
probably can't parse your code very well. Other features will work poorly too:

![Many errors](https://clangd.llvm.org/screenshots/many_errors.png)

### Can't find includes within your project

This usually means that we don't have a compile command for this file.
`compile_commands.json` should exist in some parent directory and should have
a valid command. If this file has changed, you'll need to restart clangd to see
the changes.

The logs can tell you whether `compile_commands.json` was found and what compile
command was ultimately used.

### Can't find standard library headers (`<map>`, `<stdio.h>` etc)

First, you'll need the standard library (and any other libraries you depend on)
installed on your system! Even if you don't actually build on this machine,
clangd needs to parse the headers.

The standard library headers are often found relative to the compiler.
Try to configure your project with an absolute path to the compiler
(`/usr/bin/gcc`, not `gcc`).
The logs (with `--log=verbose`) can tell you the `cc1` command, including which
paths were searched for the standard library. You can compare this to the output
of `clang -### <args>`.

If you're using an unusual compiler (e.g. a cross-compiler for a different
platform) you may want to pass `--query-driver=/path/to/mygcc` or
`--query-driver=/path/to/mygcc,/path/to/myg++` when using C++ to allow clangd
to extract the include paths from it directly.

### Can't find compiler built-in headers (`<stddef.h>` etc)

These headers are formally part of the standard library, but so closely coupled
to the parser that they are installed with clangd.

They must be found in `../lib/clang/<version>/include`. If you've built clangd
from source or installed it from a package, these should be in the right place.
If you've moved the binary around, move it back!

## Dealing with crashes

If clangd is exiting unexpectedly, this is probably a crashing bug in clangd.
Understanding it better will help you work around it, and if you can file an
informative [bug report][] we'll try to fix it for the next release.

The most helpful crash reports have a log including a (symbolic) stack trace,
some idea of what the trigger is, and fairly compact example code that exhibits
the problem.

### Crashes triggered by requests

If clangd crashes when you go to a particular definition, or hover on a
particular name, then the bug is probably in the code handling that request.
You can sometimes just avoid doing this!

If you can, try to work out the simplest program that will still exhibit the
crash. This is a much more useful/fixable bug report.

### Crashes when opening a file

If clangd triggers as soon as you open a particular file, it's likely a crash
when parsing or indexing that file (or an included header). Again it's very
useful to know what's in the file and minimize it as far as possible (especially
include).

A crash goes that goes away when disabling clang-tidy (`--clang-tidy=0`) is
likely specific to a particular check and pattern of code.

Note that a background-indexing crash can appear to trigger on file open.

### Crashes in background indexing

Unfortunately a crash while background-indexing any file can take down the whole
clangd process. When you start clangd again, it will pick up where it left off,
and crash again. You can tell that this is happening if adding the clangd flag
`--background-index=0` avoids the crash.

Typically many files are indexed at once and it can be hard to tell which is
crashing. Pass `-j=1 --log=verbose` to clangd to only index one file at a time
and log its name. Once the file is identified, it can also be reduced to a
simpler crashing example.

### Getting stacktraces from crashes

`clangd` is likely writing a "stack trace" to the logs which helps explain
why it crashed. It may look unhelpful, like this:

```
/home/me/bin/clangd[0x4f626c]
/lib/x86_64-linux-gnu/libpthread.so.0(+0x13520)[0x7fb6b93c3520]
/home/me/bin/clangd[0x12cc8d2]
...
```

It will be more useful if you have `llvm-symbolizer` on your PATH.

```
0x00000000004f626c llvm::sys::RunSignalHandlers()
0x00007fe04358f520 __restore_rt
0x00000000012cc8d2 clang::Parser::ParseDirectDeclarator()
...
```

This is typically part of the `llvm` package.
It may be installed as e.g. `llvm-symbolizer-10`, and you need to add a symlink.

[installation]: /installation
[bug report]: https://github.com/clangd/clangd/issues


/guides/ => Guides
=========================================================



/guides/remote-index => Using a remote index
=========================================================

---
redirect_from: /llvm-remote-index
redirect_from: /llvm-remote-index.html
redirect_from: /remote-index
redirect_from: /remote-index.html
---
# Using a remote index

Usually clangd will build an [index](/design/indexing) of your project in the
background. For large projects, this can be slow.

If someone has set up a clangd index server for your project, then you can query
this central index instead of building your own.

## Obtaining a suitable version of clangd

You need a remote-index-enabled version (12 or later) of clangd, such as
[the latest clangd release on github](https://github.com/clangd/clangd/releases/latest).

The official LLVM releases and Debian etc packages of clangd 12 are not
remote-index-enabled!

(If building clangd from source, you need `-DCLANGD_ENABLE_REMOTE=On` in CMake).

## Configuring clangd to use the remote index

You'll need the address of the server you want to connect to, and the local
source code it matches.

In your [user configuration](/config), add a section like:

```yaml
If:
  PathMatch: /path/to/code/.*
Index:
  External:
    Server: someserver:5900
    MountPoint: /path/to/code/
```

## What to expect

After restarting clangd, it should no longer want to index your whole project,
and you should get complete results for find-references etc.

Results may not be entirely up-to-date. Index servers usually scan the
project once a day, and if you're working on a branch you may get further skew.
Files that you've had open will still be indexed locally and will be up-to-date.

Queries to the index server may reveal information about the code you're editing
(e.g. partial identifiers). Public servers should have a privacy policy.

## Public index servers

Some open-source projects have public servers:

- [LLVM](http://clangd-index.llvm.org/): `clangd-index.llvm.org:5900`
- [Chromium](https://linux.clangd-index.chromium.org/): `linux.clangd-index.chromium.org:5900` (`linux` can instead be `chromeos`/`android`/`fuchsia`/`chromecast-linux`/`chromecast-android`)

## Running up an index server

This is a little more involved, and you'll want to understand the
[design of the remote index](/design/remote-index). In short:

 - you should periodically check out and index your project with a command like
   `clangd-indexer --executor=all-TUs /proj/compile_commands.json > proj.idx`
 - run the server as `clangd-index-server proj.idx /proj`. It listens on port
   50051 by default, and reloads the index file when it is overwritten.

The `clangd-indexer` and `clangd-index-server` tools can be found in
`clangd_indexing_tools.zip` on the
[release page](https://github.com/clangd/clangd/releases/latest).

[clangd/llvm-remote-index](https://github.com/clangd/llvm-remote-index) is an
example of a production-ready instance, with the indexing step running on
GitHub Actions and the server running on Google Compute Engine.


/guides/system-headers => System headers
=========================================================

# System headers
This guide tries to explain how clangd finds system headers while providing its
functionality. It aims to provide users with enough understanding to resolve any
issues around these headers being missing.

{% include toc.md %}

## What are system headers ?

In the context of this guide, any header a project depends on but doesn't exist
in the repository is considered a system header. These usually include:

-   Standard library, e.g: `<iostream>`
-   Third party libraries, e.g: `boost`
-   Posix, e.g: `<pthread.h>`
-   Compiler's built-in headers, e.g: `<stddef.h>`

These headers are usually provided either by a custom toolchain, which might be
part of the repository, or directly via system installed libraries.

Clangd itself only ships with its own built-in headers, because they are tied to
the version of clang embedded in clangd. The rest (including C++ STL) must be
provided by your system.

## How clangd finds those headers

`Clangd` comes with an embedded `clang` parser. Hence it makes use of all the
mechanisms that exist in clang for lookups, while adding some extra spices to
increase chances of discovery on Mac environments. Here follows some information
about what clang does.

### Search directories mentioned with compile flags

As most other compilers clang provides some command line flags to control system
header search explicitly. Most important of these is `-isystem`, which adds a
directory to system include search path.

Best way to ensure clangd can find your system includes is by putting the
directories to be searched into your compile flags via `-isystem`. You can
achieve this with
[compile\_flags.txt](https://clang.llvm.org/docs/JSONCompilationDatabase.html#alternatives),
[compile\_commands.json](https://clang.llvm.org/docs/JSONCompilationDatabase.html)
or a
[clangd configuration file](http://clangd.llvm.org/config.html#compileflags).

You might also want to take a look at
[-isysroot](https://clang.llvm.org/docs/ClangCommandLineReference.html#cmdoption-clang-isysroot-dir),
[-system-header-prefix](https://clang.llvm.org/docs/ClangCommandLineReference.html#cmdoption-clang-system-header-prefix)
and
[env variables](https://clang.llvm.org/docs/CommandGuide/clang.html#envvar-C_INCLUDE_PATH,OBJC_INCLUDE_PATH,CPLUS_INCLUDE_PATH,OBJCPLUS_INCLUDE_PATH)
respected by clang.

### Heuristic search for system headers

Clang performs some
[toolchain specific searches](https://github.com/llvm/llvm-project/tree/main/clang/lib/Driver/ToolChains/)
to find suitable directories for system header search. The heuristics used by
most of these search algorithms primarily rely on the **directory containing the
clang driver** and **the target triple**.

You can investigate this search by invoking any clang with `-v`, for example
`clang -v -c -xc++ /dev/null` (you can replace `/dev/null` with `nul` on
windows). This prints out:

```
...
Found candidate GCC installation: /usr/lib/gcc/x86_64-linux-gnu/10
Found candidate GCC installation: /usr/lib/gcc/x86_64-linux-gnu/8
Found candidate GCC installation: /usr/lib/gcc/x86_64-linux-gnu/9
Selected GCC installation: /usr/lib/gcc/x86_64-linux-gnu/10
...
ignoring nonexistent directory "/usr/lib/gcc/x86_64-linux-gnu/10/../../../../x86_64-linux-gnu/include"
ignoring nonexistent directory "/include"
#include "..." search starts here:
#include <...> search starts here:
 /usr/lib/gcc/x86_64-linux-gnu/10/../../../../include/c++/10
 /usr/lib/gcc/x86_64-linux-gnu/10/../../../../include/x86_64-linux-gnu/c++/10
 /usr/lib/gcc/x86_64-linux-gnu/10/../../../../include/c++/10/backward
 /usr/lib/clang/13.0.0/include
 /usr/local/include
 /usr/include/x86_64-linux-gnu
 /usr/include
End of search list.
```

Directories after `#include <...> search starts here` includes all the
directories that will be used for system header search.

#### Directory of the driver

These heuristics often expect the standard library to be found near the
compiler. Therefore clangd needs to know where the compiler is, especially when
using a custom toolchain.

Clangd makes use of the first argument of the compile flags as the driver's
path. Ideally this argument should specify full path to the compiler.

For example, for a `compile_commands.json` entry like: `{ "directory":
"/home/user/llvm/build", "command": "/usr/bin/clang++ -c -o file.o file.cc",
"file": "file.cc" },` first argument is `/usr/bin/clang++`.

Note that, in case of a `compile_flags.txt` driver name defaults to `clang-tool`
sitting next to `clangd` binary.

#### Target Triple

The second important factor is target triple, which specifies the architecture
and OS to build for. It can be explicitly specified with `--target` compile flag
or can be deduced implicitly from the driver name.

This enables `clang` to try to locate appropriate headers for the target
platform for example with `--target=x86_64-w64-mingw32` clang will look for
mingw installed headers, which is one common toolchain for windows. You can see
its effects on the header search dirs by executing `clang
--target=x86_64-w64-mingw32 -xc++ -v -c /dev/null` (and without the target
info).

This can also be achieved by implicitly including target information in the
driver name, but is a lot more subtle and less convenient. So this guide doesn't
go into much details about it, but you can find more
[here](https://github.com/llvm/llvm-project/blob/de79919e9ec9c5ca1aaec54ca0a5f959739d48da/clang/include/clang/Driver/ToolChain.h#L286).

### Query-driver

Instead of trying to guess the header search paths, clangd can also try to query
the actual compiler. For example if your compile flags has `/custom/compiler` as
the driver name, clangd will run something similar to `/custom/compiler -E -xc++
-v /dev/null` and parse its output (this should work with variants of gcc,
clang, and other compilers with compatible interfaces).

Note that this is a mechanism that solely exists in clangd and has nothing to do
with clang.

It can be used as a last resort when clang's heuristics are not enough to detect
standard library locations being used by your custom toolcahin.

Since it implies executing arbitrary binaries, that might be checked-in with the
project, clangd does not perform this inference automatically. You need to
allowlist binaries you deem safe for execution using `--query-driver` **clangd**
command line option. Please note that this option is just an allowlist and the
real driver to be executed still comes from the compile command. It is a list of
comma separated globs and a driver from a compile command needs to match at
least one of these globs. For example to whitelist drivers in paths:

-   `/path/to/my/project/arm-gcc`
-   `/path/to/my/project/arm-g++`
-   `/path/to/other/project/gcc`

You can pass
`--query-driver="/path/to/my/project/arm-g*,/path/to/other/project/gcc"` into
clangd. You can find details about changing clangd arguments used by your editor
in [here](https://clangd.llvm.org/installation#editor-plugins), but it is always
best to check your editor/LSP client's documents directly.

## Fixing missing system header issues

Since we've established some basic understanding of how system header search
works for clang and clangd. Now let's talk about how to fix missing system
header issues.

### Headers not present in the system at all

As mentioned above, clangd doesn't ship with its own standard library. If you
can build the project you are working on the same machine you are using clangd,
you probably have the headers you need on your system but clangd is failing to
find them, so you can just skip this section.

If you know your system lacks one, you should get it from some place suitable
for your platform. Unfortunately this document is not the best place to talk
about choices or how to get them but here are some choices:

-   `libc++-dev` or `libstdc++-dev` packages on debian-like systems,
-   `mingw` for windows,
-   `libc++` or `libstdc++` for mac, either through `brew` or `XCode`.

After getting the headers clangd should hopefully be able to detect them,
assuming they are not installed to a non-default location.

### You can build your project but clangd is complaining about missing headers

In such a case you can start by checking your clangd logs to see compile flags
being used by clangd. Easiest way to achieve this is by executing `clangd
--check=/path/to/a/file/in/your/project.cc`. Outputs logs should contain
something like:

```
I[17:11:57.203] Compile command from CDB is: ...
I[17:11:57.206] internal (cc1) args are: -cc1 ...
```

Note that `--check` is only available starting from clangd-12. For earlier
versions you can open the file in your editor and access clangd logs through
your LSP plugin.

If you are seeing a log line containing `Generic fallback command is` instead of
the one above, it means clangd is not able to pick your compile commands. If you
don't have any
[compilation database](https://clangd.llvm.org/installation.html#project-setup),
it is expected. But otherwise you should fix that first.
<!--- FIXME: Add a link to compilation database discovery doc. -->

You should first try executing the command from CDB to see if it can compile
your file. If it can't, it means you have problems with your compile command
again and probably there's a discrepancy between what your build system uses and
what's being fed into clangd.

### Compile command provided to clangd works on its own

There are usually two reasons for this failure. Either driver mentioned in the
compile command is relative or it is employing custom heuristics unknown to
clang.

#### Relative driver name

As mentioned above most of the clang's heuristics rely on the location of the
driver. If clangd cannot figure out the absolute path for your driver, then all
those relative search heuristics will fail.

The best option here is changing the driver name in your CDB to use absolute
path rather than relative paths. Other than that you can also try putting the
directory containing your driver into `$PATH` so clangd can make it absolute
itself.

#### Your driver has heuristics unknown to clang

This is the worst scenario to hit, and unfortunately is common for custom
toolchains targetting embedded devices.

You can execute the driver with `-v` option to see all the search directories it
has found and the target triple being used. Afterwards there are a couple
options:

-   Explicitly providing target triple in your compile flags and hope that
    clang's heuristics can work out the rest.
-   Add each system header search path to your compile flags via `-isystem` or
    env variables as mentioned above. Note that you might need to disable
    clang's search for system headers using
    [-nostdlibinc](https://clang.llvm.org/docs/CommandGuide/clang.html#cmdoption-nostdlibinc)
    and variants.
-   Using clangd's `--query-driver` option to let clangd infer target triple and
    system headers by executing the driver mentioned in the compile flags.
-   If it feels like your driver is actually performing a generic heuristic,
    send a patch to clang to improve it for all!


/guides/include-cleaner => 'Managing #includes'
=========================================================

# Managing `#include`s

clangd has features to help you maintain the set of `#include`
directives at the top of each file that are used to import dependencies.

It follows the [include-what-you-use](https://github.com/include-what-you-use/include-what-you-use/blob/master/docs/WhyIWYU.md)
model: **each source file should `#include` headers that declare the symbols
 it references, and no others.**

This means:
 - files should not rely on _transitive_ includes, only headers they include
   directly
 - `#include` directives describe direct dependencies between files, and it's
   possible to reason about them locally

This is opinionated, and stricter than "will it compile". It implies adding
`#includes` that the compiler does not strictly need. Some `#includes` that
satisfy the compiler should be replaced with more specific ones.
If your codebase broadly aims to follow this style, you should enable these
features.

## Show which headers are used

{:.v16}

Hovering on a name will show you which header provides that symbol:
![Symbol hover showing provider in VSCode](https://clangd.llvm.org/screenshots/symbol_header.png)

Hovering on an `#include` will show which of its symbols are used in the file.
![#include hover showing symbols in VSCode](https://clangd.llvm.org/screenshots/header_symbols.png)

Using "find references" in your editor you can navigate to these uses.

## "Unused include" warning

{:.v14}

`#include`ing headers that are not used can confuse readers, slow down build
times, and make code harder to refactor. clangd can warn about this:

![Unused include warning in VSCode](https://clangd.llvm.org/screenshots/unused_include.png)

Often, these `#include` directives have no effect and can simply be removed.
This isn't always the case: the analysis makes assumptions about code style.

## "Missing include" warning

{:.v17}

Similarly, using symbols from a header without `#include`ing it is brittle and
hides dependencies. clangd can show such uses:

![Missing include warning in VSCode](https://clangd.llvm.org/screenshots/missing_include.png)

Generally clangd can suggest a correct `#include` to add here. In some
cases where multiple headers provide a symbol, you may prefer a different one.

## Scenarios and solutions

**An included header X is marked unused, but it #includes Y, which I use**

**clangd says I should include header Y, but I'm already including X, which
includes Y**

This is a transitive include. Generally you should avoid this, but there are
times when it's needed, especially with external libraries.

- Remove the `#include "X.h"` and add `#include "Y.h"` 
- If X **intends** to provide all the symbols of Y, indicate this in `X.h` with:
  `#include "Y.h" // IWYU pragma: export`
- If X is an internal header that should not be included directly, add a comment
  `// IWYU pragma: private; include "Y.h"`.
- Suppress unused-include warnings with `// IWYU pragma: keep`.
- Suppress all warnings for `X.h` in your configuration.

**A header is marked unusued, but is needed by other headers I later include**

The later headers are not self-contained; our idea of dependencies breaks down.

- Suppress the warning with `// IWYU pragma: keep`. Document why!
- Suppress all warnings for this header in your configuration.

**I'm editing header X and `#include "Y.h"` is marked unused. I want X to
provide all of Y's symbols**

You are exporting a header: this makes dependencies less clear and
coarser-grained, but is sometimes useful.

- Indicate this with `#include "Y.h" // IWYU pragma: export`.
- If Y is a private implementation detail, annotate it with
  `// IWYU pragma: private: include "X.h"`.

**I'm using a symbol in a tricky way (e.g. through a template), but the header
is marked as unused**

There are some types of uses the analysis cannot find.

- Suppress the warning with `// IWYU pragma: keep`

**A header is marked unused, but removing it breaks my build!**

clangd's definition of "unused" isn't the same as the compiler's (see above
section). You may have to add missing includes too, or do other cleanups.

- Identify which headers are **directly** used, and `#include` those instead.
- Suppress the warning with `// IWYU pragma: keep`.

**clangd suggests `#include "X"`, but the real header for the symbol is Y.**

This is merely a suggestion: including `Y` should also hide the warning.

clangd tries to pick the best header, preferring those that public,
self-contained, provide full definitions (for classes and templates), and have
a name matching the symbol's name.

However, there are limitations. Most notably: only headers that are already
transitively included are considered. You may have to insert the correct
#include yourself.

**clangd suggests `#include <cstddef>`, but we prefer e.g. `<stddef.h>`**

If the file is C++, then the C++ headers `<c*>` will be preferred.
The C header names `<*.h>` will still be accepted as providing the symbol, but
you'll have to `#include` them by hand - this behavior isn't customizable.

If you're using namespaced symbols (`std::printf` rather than `::printf`) then
only the `<cstdio>` header is acceptable.

## Adjusting behavior

### Configuration

In your configuration file, set `Diagnostics.UnusedIncludes` and
`Diagnostics.MissingIncludes` to `Strict` or `None`.
You can also disable analysis of particular files (using `If` blocks),
and suppress all warnings of certain headers.

```
If:
  PathMatch: .*/project1/.*\.cpp
Diagnostics:
  UnusedIncludes: Strict
  MissingIncludes: Strict
  Includes:
    IgnoreHeader: Python\.h
```

### IWYU pragmas

These are magic comments [compatible with the include-what-you-use tool](
https://github.com/include-what-you-use/include-what-you-use/blob/master/docs/IWYUPragmas.md).
clangd supports only a subset.

* **keep**

  ```
  #include "secretly-used.h" // IWYU pragma: keep
  ```

  This avoids a particular `#include` being marked unused, without saying why.

* **export**

  ```
  // in "foo.h"
  #include "secretly-used.h" // IWYU pragma: export
  ```

  Files can include `foo.h` to use symbols declared in `secretly-used.h`.
  The exported `#include` line itself will never be marked as unused.

* **private**

  ```
  // in "private.h"
  // IWYU pragma: private; include "public.h"
  ```

  Files **must** include `public.h` to use symbols defined in `private.h`.


/faq => FAQ
=========================================================

# Frequently Asked Questions (FAQ)

{% include toc.md %}

## How do I install clangd?

Clangd is often distributed either within LLVM packages or in a separate
Clang-related packages (e.g.
[clang-tools](https://packages.ubuntu.com/search?keywords=clang-tools) on
Ubuntu). These packages (mostly) follow official LLVM releases, which are
released once every 6 months.

If you want to use new versions of clangd, you have several options:

- Download the binaries from our GitHub repository:
  - [Stable track](https://github.com/clangd/clangd/releases/latest) - follows
    the same release cycle as official LLVM releases and most distributions
  - [Weekly builds](https://github.com/clangd/clangd/releases) - not tested as
    thoroughly as official releases
- [Compile from sources](#how-do-i-build-clangd-from-sources).

## How do I check the clangd version I am using?

- Check the logs: clangd prints version on the first line. See your LSP client
  documentation on where to find them: e.g. VSCode has logs in the output panel,
  coc-clangd gives you the logs via `:CocCommand` into `workspace.showOutput`
- Run `clangd --version`. Note: the binary in your `$PATH` might not be the one
  used within the editor, checking logs is preferred.

## Can you give an example configuration file for clangd?

The [preferred way](https://clangd.llvm.org/config) to store clangd
configuration is through YAML files. Here's an example config you could use:

```yaml
CompileFlags:
  # Treat code as C++, use C++17 standard, enable more warnings.
  Add: [-xc++, -std=c++17, -Wall, -Wno-missing-prototypes]
  # Remove extra warnings specified in compile commands.
  # Single value is also acceptable, same as "Remove: [-mabi]"
  Remove: -mabi
Diagnostics:
  # Tweak Clang-Tidy checks.
  ClangTidy:
    Add: [performance*, modernize*, readability*]
    Remove: [modernize-use-trailing-return-type]
    CheckOptions:
      readability-identifier-naming.VariableCase: CamelCase
---
# Use Remote Index Service for LLVM.
If:
  # Note: This is a regexp, notice '.*' at the end of PathMatch string.
  PathMatch: /path/to/llvm/.*
Index:
  External:
    Server: clangd-index.llvm.org:5900
    MountPoint: /path/to/llvm/
```

This can go in your project as `.clangd` or a global `clangd/config.yaml` file.

## How do I build clangd from sources?

If you are a developer or downloading pre-built binaries is not an option, you
can [compile
clangd](https://github.com/llvm/llvm-project/blob/main/clang-tools-extra/clangd/README.md#building-and-testing-clangd)
from [LLVM
sources](https://github.com/llvm/llvm-project/tree/main/clang-tools-extra/clangd).
Follow [Getting
Started](https://llvm.org/docs/GettingStarted.html#getting-the-source-code-and-building-llvm)
instructions and make sure `LLVM_ENABLE_PROJECTS` has `clang;clang-tools-extra`
(e.g. `DLLVM_ENABLE_PROJECTS="clang;clang-tools-extra"`).

## How do I stop clangd from indexing certain folders?

```yaml
If:
  # Note: This is a regexp, notice '.*' at the end of PathMatch string.
  PathMatch: /my/project/large/dir/.*
Index:
  # Disable slow background indexing of these files.
  Background: Skip
```

## How do I make additional headers visible to clangd?

If you have some headers outside of the visibility of clangd, you can either
include individual headers (`-include=/headers/file.h`) or add
directories to the include path (`-I/other/headers`). The easiest way to do
that is through configuration file:

```yaml
CompileFlags:
  Add: [-include=/headers/file.h, -I/other/headers]
```

## Why does clangd not return all references for a symbol?

One of the potential reasons is that clangd has not indexed all the files in
your project. Please make sure all files are visible to clangd through the
project setup and `compile_commands.json`.

If you are sure all files are indexed and can be accessed: clangd limits the
number of returned results to prevent UI freezes by default.  If you have more
than a 1000 symbols and you would like to get through all of them, please pass
`--limit-references=0` to clangd invocation.

The same applies to the Remote Index Service but we are not respecting
`--limit-references=0` on the server side to prevent DDoS attacks.

## How do I fix errors I get when opening headers outside of my project directory?

Clangd might fail to find suitable compile flags for headers outside of your 
project directory (e.g. third party dependencies installed elsewhere -- for more 
details see [here](https://clangd.llvm.org/design/compile-commands#headers-outside-the-project-directory)).

To work around this, you can instruct clangd to use your project's compilation
database for all files, not just files in the project directory.

This can be done by passing the path of the directory containing the compilation
datbase as a `--compile-commands-dir=<path>` command-line argument to clangd.

## What can I do if clangd chooses the wrong source file to infer commands for a header?

A tool like
[CompDB](https://github.com/Sarcasm/compdb#generate-a-compilation-database-with-header-files)
can be used to post-process a `compile_commands.json` file to also contain
entries for headers.

In the absence of entries for headers, clangd will use 
[heuristics](https://clangd.llvm.org/design/compile-commands#commands-for-header-files)
to choose a source file whose compile command to use when opening a header.
The heuristics are currently based on filesystem paths and can sometimes
choose the wrong source file, though 
[improvements](https://github.com/clangd/clangd/issues/123) are planned.

## Why does clangd produce false or missing diagnostics?

To provide increased responsiveness, clangd skips parsing the bodies of
functions defined in included headers. This optimization can result in:

- False positive diagnotics, particularly around unused declarations
  (if the relevant uses are in the code that was skipped). This can be
  worked around by suppressing affected diagnostic categories in the
  [config file](https://clangd.llvm.org/config.html#suppress).

- Missing diagnostics, if they occur in code that was skipped. See
  [this issue](https://github.com/clangd/clangd/issues/137) for some
  discussion.

If you believe a false or missing diagnostic is not related to this (and
also not configuration-related, i.e. resulting from clang using the wrong
compile command for a file), please file a bug in the
[issue tracker](https://github.com/clangd/clangd/issues).

## Does clangd support CUDA?

There is some support, but it's not very polished or tested.
clangd uses clang to parse code and [clang can understand CUDA code](https://llvm.org/docs/CompileCudaWithLLVM.html).

Generally you'll need to:
 - ensure that your editor plugin is enabling clangd when CUDA files are open (e.g. enabling for extension `*.cu`)
 - make sure that clangd understands these are CUDA files (e.g. by extension `*.cu` or adding the clang flag `-xcuda`)
 - set the path to your cuda installation if it isn't detected, by adding the clang flag `--cuda-path=...`

## Error "Unable to handle compilation, expected exactly one compiler job" (macOS)

If your project is configured to build for both ARM (M1) and Intel (x64), you'll see this error
on clangd <= 13.

[The problem](https://github.com/clangd/clangd/issues/827) 
is that the flags `arch x86_64 -arch arm64` tell clang to parse the code twice in
different configurations, and we're not sure which to use. (clangd 14 will pick the first one).

You can work around the problem by tweaking the compile flags in your clangd config file:

```
CompileFlags:
  Remove: [-arch]
  Add: [-arch, x86_64]
```

(In other cases, this error message indicates a compile command we don't understand.
If you're not on a Mac it's more likely your compile flags are badly malformed.)

## How can I detect clangd in the preprocessor?

clangd uses the clang parser, and defines preprocessor symbols like `__clang__`.
Code that detects compilers will detect it as clang, which is usually good.
If a library can't be parsed by clang, it generally can't be parsed by clangd either.

Clangd does not define any extra symbols allowing you to detect it specifically.
But you must write `#ifdef _CLANGD`, you can configure this:

```
CompileFlags:
  Add: [-D_CLANGD=1]
```


/design/ => Design
=========================================================



/design/code => Code walkthrough
=========================================================

# clangd code walkthrough

This describes the critical parts of clangd and roughly what they do.
It may get out of date from time to time, please
[file a bug](https://github.com/llvm/clangd-www/issues)!
It mostly starts at the outside and works it way inward.

The clangd code lives in the [llvm-project] repository under
[clang-tools-extra/clangd][clangd]. We'll also mention some dependencies in
other parts of llvm-project (such as clang).

Links below point to the [woboq] code browser. It has nice cross-referenced navigation, but may show
a slightly outdated version of the code.

{% include toc.md %}

## Starting up and managing files

### Entry point and JSON-RPC

The `clangd` binary itself has its [main()] entrypoint in `tool/ClangdMain.cpp`.
This mostly parses flags and hooks `ClangdLSPServer` up to its dependencies.

One vital dependency is [JSONTransport] which speaks the JSON-RPC protocol
over stdin/stdout. LSP is layered on top of this [Transport] abstraction.
(There's also an Apple XPC transport in the [xpc/] directory).

We call `ClangdLSPServer.run()` to start the loop, and it synchronously
processes messages until the client disconnects. Calls to the large
non-threadsafe singletons (`ClangdLSPServer`, `ClangdServer`, `TUScheduler`)
all happen on the main thread.
See [threads and request handling].

### Language Server Protocol

[ClangdLSPServer] handles the LSP protocol details. Incoming requests are routed
to some method on this class using a lookup table, and then implemented
by dispatching them to the contained `ClangdServer`.

The incoming JSON requests are mapped onto structs defined in [Protocol.h].
In the simplest cases these are just forwarded to the appropriate method on
`ClangdServer` - we use the LSP structs as vocabulary types for most things.

In other cases there's some gap between LSP and what seems to be a sensible C++
API, so `ClangdLSPServer` has some real work to do.

### ClangdServer and TUScheduler

The [ClangdServer] class is best thought of as the C++ API to clangd.
Features tend to be implemented as stateless, synchronous functions ("give me
hover information from this AST at offset 25"). ClangdServer exposes them as
stateful, asynchronous functions ("compute hover information for the latest
version of Foo.cpp at offset 25, call back when done") which is the LSP model.

[TUScheduler] is responsible for keeping track of the latest version of each
file, building and caching ASTs and preambles as inputs, and providing threads
to run requests on in an appropriate sequence. (More details in
[threads and request handling]).
It also pushes certain events to `ClangdServer` via [ParsingCallbacks], to
allow emitting diagnostics and indexing ASTs.

`ClangdServer` is fairly mechanical for the most part. The features are
implemented in various other files, and the scheduling and AST building is
done by `TUScheduler`, so largely it just binds these together.
`TUScheduler` doesn't know about particular features (except diagnostics).

### Compile commands

Like other clang-based tools, clangd uses clang's command-line syntax as its
interface to configure parse options (like include directories).
The arguments are obtained from a [tooling::CompilationDatabase], typically
built by reading `compile_commands.json` from a nearby directory.
[GlobalCompilationDatabase] is responsible for finding and caching such
databases, and for providing "fallback" commands when none are found.

Various heuristic tweaks are applied to these commands to make them more likely
to work, particularly on Mac. These live in [CommandMangler].

## Features

### Diagnostics

During parsing, clang emits diagnostics through a `DiagnosticConsumer` callback.
clangd's [StoreDiags] implementation converts them into [Diag] objects,
which capture the relationships between diagnostics, fixes, and notes.
These are exposed in `ParsedAST`.
(clang-tidy diagnostics are generated separately in `buildAST()`, but also end
up captured by `StoreDiags` and exposed in the same way).

[IncludeFixer] attempts to add automatic fixes to certain diagnostics by using
the index to find headers that should be included.

`TUScheduler` has a logic to determine when a `ParsedAST`'s diagnostics are
"correct enough" to emit, and when a new build is needed for this purpose.
It then triggers `ClangdServer::onMainAST`, which calls
`ClangdLSPServer::onDiagnosticsReady`, which sends them to the client.

### AST-based features

Most clangd requests are handled by inspecting a `ParsedAST`, and maybe the
index. Examples are [locateSymbolAt()] (go-to-definition) and [getHover()].

These features are spread across various files, but are easy to find from their
callsites in `ClangdServer`.

### Code completion (and signature help)

Code completion does not follow the usual pattern for AST-based features.
Instead there's a dedicated parse of the current file with a callback when the
completion point is reached.
The core completion logic is implemented in clang's [SemaCodeComplete.cpp] and
has access to information not present in the AST, such as name-lookup structures
and parser state.

[CodeComplete.h] is mostly concerned with running clang in this mode,
combining clang's results with index-based results, applying ranking, and
converting to LSP's data model.

The ranking is mostly implemented in [Quality.h], and the name-matching
is done by [FuzzyMatcher].

### Code actions

Most code actions are provided by `Tweak`s. These are small plugins that
implement the [Tweak] interface. They live in the [refactor/tweaks] directory
and are registered through the linker. Given a selection, they can (quickly)
determine whether they apply there and (maybe slowly) generate the actual edits.
The LSP code-actions flow is built out of these primitives.

## Feature infrastructure

### Parsing and ASTs

The representation of a parsed file in clangd is [ParsedAST].
As the name suggests this is mostly used to access Clang's AST
(`clang::ASTContext`), but extends it by:

 - recording and exposing information gathered from callbacks (e.g. diagnostics)
 - encapsulating the other objects (e.g. SourceManager and Preprocessor) and
   keeps them alive with the correct lifetime

`ParsedAST::build()` is where we run the clang parser.
Some low-level bits (creating `CompilerInstance`) are in [Compiler.h]
instead, and are reused when we run clang without retaining an AST (code
completion, indexing, preambles).

The [PreambleData] structure similarly extends Clang's `PrecompiledPreamble`
class with extra recorded information. It contains the AST of included headers
and is only rebuilt when those headers change. The preamble is large, it's kept
on disk by default and parts are deserialized on demand.

### Abstractions over clang AST

Several tasks come up in various features and we have reusable solutions:

 - [SelectionTree] identifies the AST nodes corresponding to a point or range
   in the source code.
   Used in go-to-definition, code actions, and many other features.
 - [targetDecl()] identifies the declaration an AST node refers to.
   Used e.g. in go-to-definition.
 - [findExplicitReferences()] traverses a chunk of AST and lists declarations
   referenced. Used e.g. in find-references and rename. Should be used for
   indexing, one day.

### Index

Operations that need information outside the current file/AST make use of
[the clangd index], which is in the [index/] directory.

[SymbolIndex] is the index interface exposed to consuming features, and
describes the data/queries they should provide. (`Symbol`, `Ref`, etc).
It has several implementations used as building-blocks:

- [MemIndex] is a simple in-memory implementation that's cheap to construct.
- [Dex] is a more complex one with a scalable fuzzyFind search.
- [MergedIndex] combines indexes, merging results.
- [IndexClient] is a client for a remote index service over grpc.

[SymbolCollector] extracts indexable data from a translation unit.
[index/Serialization.h] defines a binary format to store/load index data.

These building blocks are used to provide clangd's index data:

- [BackgroundIndex] runs `SymbolCollector` over project files in background
  threads, periodically combining the results into an exposed `Dex` index.
  Index data is also written to disk and only reindexed when these are stale.
- [FileIndex] stores the index information from all opened files and their
  preambles, running SymbolCollector on ASTs after they are rebuilt. It is a
  `MergedIndex` of a `Dex` of the preambles and a `MemIndex` of the main-file
  symbols. This is also known as the "dynamic index".
- The "static index" is configured in `main` and may be a
  simple index file (generated by [indexer/IndexerMain.cpp]) loaded into `Dex`,
  a `RemoteIndex`, or nothing at all.

## Dependencies

### Clang libraries

Clang code structure is a huge topic, but the most important pieces for clangd:

- AST: [clang/AST/] defines the data structures that represent
  parsed C++ code, such the [Decl], [Stmt], and [Type] hierarchies.
  [RecursiveASTVisitor] is the generic mechanism to walk an AST.
- Preambles: [PrecompiledPreamble] wraps a serialized partial AST that can be
  lazy-loaded from disk, clangd relies *heavily* on this optimization.
- Preprocessor: at the token level, the [Preprocessor] handles directives and
  macro expansion, and we use [PPCallbacks] hooks to listen for events.

### Clang-tools libraries

clangd shares code with other tools derived from the Clang compiler, these
libraries live outside clangd.

- [syntax::TokenBuffer] captures token-boundary and preprocessing information
  that clang itself doesn't preserve.
- [clang/Index/] implements an indexing-oriented traversal of Clang ASTs, which
  is used in clangd's index.
- [clang/Format/] is the clang-format logic used to satisfy formatting requests
  and also to format newly-inserted code.
- [tooling::CompilationDatabase] is the foundation for clangd's integration
  with build systems.

### General support libraries

Like most LLVM code, clangd heavily uses [llvm/ADT/] and [llvm/Support/] to
supplement the standard library. We try to avoid other LLVM dependencies.

clangd has its own [support/] library, conceptually similar to `llvm/Support`.
It contains libraries that are general-purpose, but not a good fit for llvm as a
whole (too opinionated, or focused on multithreading). The most prominent:

- [ThreadsafeFS] addresses the problems with llvm's FileSystem abstraction for
  multithreaded programs.
- [Context] is used to passing certain "ambient" data around within the current
  thread, and automatically propagating it when scheduling on another thread.
  (It is related to dynamically-scoped variables, and thread-local storage).
  It's used for certain settings like overriding LSP encoding, for tracking
  actions across threads, request cancellation and more.
- [support/Logger.h] provides a concise, threadsafe logging API and lets
  embedders handle logs.
- [support/Trace.h] allows instrumentation of clangd's implementation with
  events and metrics for performance analysis etc.

## Testing

Most of the tests are in the [unittests/] directory (despite being a mix of unit
and integration tests). Test files are mostly named after the file they're
testing, and use the [googletest] framework.

Some helpers are widely shared between tests:

- [TestTU] lets tests tersely specify code for a test case, and can prepare
  `ParsedAST` and other structures needed for testing features on that code.
- [Annotations] recognizes code examples with marked points and ranges.
  This is used e.g. to specify tests for "go to definition".

clangd has a small number of black-box tests in [test/]. These use LLVM [lit]
and [FileCheck] to drive the clangd binary and verify output. They smoke-test
clangd as an LSP server, and test a few hard-to-isolate features.

[FileCheck]: https://llvm.org/docs/CommandGuide/FileCheck.html
[googletest]: https://github.com/google/googletest
[lit]: https://llvm.org/docs/CommandGuide/lit.html
[llvm-project]: https://github.com/llvm/llvm-project
[woboq]: https://code.woboq.org/llvm/clang-tools-extra/clangd/

[threads and request handling]: /design/threads
[the clangd index]: /design/indexing

[clangd]: https://code.woboq.org/llvm/clang-tools-extra/clangd/
[index/]: https://code.woboq.org/llvm/clang-tools-extra/clangd/index/
[test/]: https://code.woboq.org/llvm/clang-tools-extra/clangd/test/
[refactor/tweaks/]: https://code.woboq.org/llvm/clang-tools-extra/clangd/refactor/tweaks/
[support/]: https://code.woboq.org/llvm/clang-tools-extra/clangd/support/
[unittests/]: https://code.woboq.org/llvm/clang-tools-extra/clangd/unittests/
[xpc/]: https://code.woboq.org/llvm/clang-tools-extra/clangd/xpc/

[llvm/ADT/]: https://code.woboq.org/llvm/llvm/include/llvm/ADT/
[llvm/Support/]: https://code.woboq.org/llvm/llvm/include/llvm/Support/
[clang/AST/]: https://code.woboq.org/llvm/clang/include/clang/AST/
[clang/Index/]: https://code.woboq.org/llvm/clang/include/clang/Index/
[clang/Format/]: https://code.woboq.org/llvm/clang/include/clang/Format/

[CodeComplete.h]: https://code.woboq.org/llvm/clang-tools-extra/clangd/CodeComplete.h.html
[Compiler.h]: https://code.woboq.org/llvm/clang-tools-extra/clangd/Compiler.h.html
[Protocol.h]:https://code.woboq.org/llvm/clang-tools-extra/clangd/Protocol.h.html
[Quality.h]: https://code.woboq.org/llvm/clang-tools-extra/clangd/Quality.h.html
[index/Serialization.h]: https://code.woboq.org/llvm/clang-tools-extra/clangd/index/Serialization.h.html
[indexer/IndexerMain.cpp]: https://code.woboq.org/llvm/clang-tools-extra/clangd/indexer/IndexerMain.h.html
[support/Logger.h]: https://code.woboq.org/llvm/clang-tools-extra/clangd/support/Logger.h.html
[support/Trace.h]: https://code.woboq.org/llvm/clang-tools-extra/clangd/support/Trace.h.html

[SemaCodeComplete.cpp]: https://code.woboq.org/llvm/clang/lib/Sema/SemaCodeComplete.cpp.html

[Annotations]: https://code.woboq.org/llvm/clang-tools-extra/clangd/unittests/Annotations.h.html#clang::clangd::Annotations
[BackgroundIndex]: https://code.woboq.org/llvm/clang-tools-extra/clangd/index/Background.h.html#clang::clangd::BackgroundIndex
[ClangdLSPServer]: https://code.woboq.org/llvm/clang-tools-extra/clangd/ClangdLSPServer.h.html#clang::clangd::ClangdLSPServer
[ClangdServer]: https://code.woboq.org/llvm/clang-tools-extra/clangd/ClangdServer.h.html#clang::clangd::ClangdServer
[CommandMangler]: https://code.woboq.org/llvm/clang-tools-extra/clangd/CompileCommands.h.html#clang::clangd::CommandMangler
[Context]: https://code.woboq.org/llvm/clang-tools-extra/clangd/Context.h.html#clang::clangd::Context
[Dex]: https://code.woboq.org/llvm/clang-tools-extra/clangd/index/dex/Dex.h.html#clang::clangd::dex::Dex
[Diag]: https://code.woboq.org/llvm/clang-tools-extra/clangd/Diagnostics.h.html#clang::clangd::Diag
[FileIndex]: https://code.woboq.org/llvm/clang-tools-extra/clangd/index/FileIndex.h.html#clang::clangd::FileIndex
[FuzzyMatcher]: https://code.woboq.org/llvm/clang-tools-extra/clangd/FuzzyMatch.h.html#clang::clangd::FuzzyMatcher
[GlobalCompilationDatabase]: https://code.woboq.org/llvm/clang-tools-extra/clangd/GlobalCompilationDatabase.h.html#clang::clangd::GlobalCompilationDatabase
[IncludeFixer]: https://code.woboq.org/llvm/clang-tools-extra/clangd/IncludeFixer.h.html#clang::clangd::IncludeFixer
[IndexClient]: https://code.woboq.org/llvm/clang-tools-extra/clangd/index/remote/Client.cpp.html#clang::clangd::remote::(anonymousnamespace)::IndexClient
[JSONTransport]: https://code.woboq.org/llvm/clang-tools-extra/clangd/JSONTransport.cpp.html#clang::clangd::(anonymousnamespace)::JSONTransport
[MemIndex]: https://code.woboq.org/llvm/clang-tools-extra/clangd/index/MemIndex.h.html#clang::clangd::MemIndex
[MergedIndex]: https://code.woboq.org/llvm/clang-tools-extra/clangd/index/Merge.h.html#clang::clangd::MergedIndex
[ParsedAST]: https://code.woboq.org/llvm/clang-tools-extra/clangd/ParsedAST.h.html#clang::clangd::ParsedAST
[ParsingCallbacks]: https://code.woboq.org/llvm/clang-tools-extra/clangd/TUScheduler.h.html#clang::clangd::ParsingCallbacks
[PreambleData]: https://code.woboq.org/llvm/clang-tools-extra/clangd/Preamble.h.html#clang::clangd::PreambleData
[SelectionTree]: https://code.woboq.org/llvm/clang-tools-extra/clangd/Selection.h.html#clang::clangd::SelectionTree
[StoreDiags]: https://code.woboq.org/llvm/clang-tools-extra/clangd/Diagnostics.h.html#clang::clangd::StoreDiags
[SymbolCollector]: https://code.woboq.org/llvm/clang-tools-extra/clangd/index/SymbolCollector.h.html#clang::clangd::SymbolCollector
[SymbolIndex]: https://code.woboq.org/llvm/clang-tools-extra/clang-include-fixer/SymbolIndex.h.html#clang::include_fixer::SymbolIndex
[TUScheduler]: https://code.woboq.org/llvm/clang-tools-extra/clangd/TUScheduler.h.html#clang::clangd::TUScheduler
[TestTU]: https://code.woboq.org/llvm/clang-tools-extra/clangd/unittests/TestTU.h.html#clang::clangd::TestTU
[ThreadsafeFS]: https://code.woboq.org/llvm/clang-tools-extra/clangd/support/ThreadsafeFS.h.html#clang::clangd::ThreadsafeFS
[Transport]: https://code.woboq.org/llvm/clang-tools-extra/clangd/Transport.h.html#clang::clangd::Transport
[Tweak]: https://code.woboq.org/llvm/clang-tools-extra/clangd/refactor/Tweak.h.html#clang::clangd::Tweak
[findExplicitReferences()]: https://code.woboq.org/llvm/clang-tools-extra/clangd/FindTarget.h.html
[getHover()]: https://code.woboq.org/llvm/clang-tools-extra/clangd/Hover.h.html
[locateSymbolAt()]: https://code.woboq.org/llvm/clang-tools-extra/clangd/XRefs.h.html
[main()]: https://code.woboq.org/llvm/clang-tools-extra/clangd/tool/ClangdMain.cpp.html#main
[targetDecl()]: https://code.woboq.org/llvm/clang-tools-extra/clangd/FindTarget.h.html

[Decl]: https://code.woboq.org/llvm/clang/include/clang/AST/DeclBase.h.html#clang::Decl
[Stmt]: https://code.woboq.org/llvm/clang/include/clang/AST/Stmt.h.html#clang::Stmt
[Type]: https://code.woboq.org/llvm/clang/include/clang/AST/Type.h.html#clang::Type
[Preprocessor]: https://code.woboq.org/llvm/clang/include/clang/Lex/Preprocessor.h.html#clang::Preprocessor
[PPCallbacks]: https://code.woboq.org/llvm/clang/include/clang/Lex/PPCallbacks.h.html#clang::PPCallbacks
[RecursiveASTVisitor]: https://code.woboq.org/llvm/clang/include/clang/AST/RecursiveASTVisitor.h.html#clang::RecursiveASTVisitor
[PrecompiledPreamble]: https://code.woboq.org/llvm/clang/include/clang/Frontend/PrecompiledPreamble.h.html#clang::PrecompiledPreamble
[syntax::TokenBuffer]: https://code.woboq.org/llvm/clang/include/clang/Tooling/Syntax/Tokens.h.html#clang::syntax::TokenBuffer
[tooling::CompilationDatabase]: https://code.woboq.org/llvm/clang/include/clang/Tooling/CompilationDatabase.h.html#clang::tooling::CompilationDatabase


/design/compile-commands => Compile commands
=========================================================

# Compile commands

Interpreting source code requires a certain amount of context.

```c++
#include <stdio.h> // which file is this, exactly?

char data[sizeof(int)]; // how big is this array?

@class Foo; // objective-C, or just a syntax error?
```

C++ compilers expect this context to be passed as command-line flags (and
provide some defaults). A command might look like:
`clang -x objective-c++ -I/path/headers --target=x86_64-pc-linux-gnu -DNDEBUG foo.mm`.
Build systems are responsible for collecting the right flags for each file.

Clangd also needs this bundle of hints for the files it operates on.
It reuses the compiler's approach: first we determine a virtual
**compile command** for each opened file (ideally by consulting the build
system). Then we use this command to configure the parser.

## Compile command vs clangd flags

These are easy to conflate, and important to distinguish!

**`clangd` flags** are passed when the editor starts clangd.
They appear in the clangd log at the very start, like
```
I[...] argv[1]: --log=verbose
```

The **compile command** (or compile flags) is a **virtual** command constructed,
and interpreted within clangd.
It is logged when a file is opened, e.g.
```
I[...] ASTWorker building file /path/test.cc version 1 with command [/path]
/usr/bin/clang /path/test.cc -DNDEBUG -fsyntax-only -resource-dir=/usr/lib/clang/lib/12/
```

## What can be in a compile command?

Because clangd embeds both clang's driver (used to interpret compile commands)
and clang's parser (which is controlled by flags), most [flags that can be passed
to `clang`](https://clang.llvm.org/docs/ClangCommandLineReference.html)
will also work with clangd. The defaults are also similar to `clang` running on
the same system.

The most critical flags in practice are:

- Setting the `#include` search path: `-I`, `-isystem`, and others.
- Controlling the language variant used: `-x`, `-std` etc
- Predefining preprocessor macros, `-D` and friends

Without these flags, clangd will often spectacularly fail to parse source code,
generating many spurious errors (e.g. #included files not being found).

Many other flags are interesting though:

- Warnings are controlled with compile flags (e.g. `-Wall`, `-Wswitch`,
  `-Wno-switch`, `-Werror`...)
- Changing the target platform (e.g. `--target`) affects some builtins, like
  the size of `long`.

As well as flags, the named program (`argv[0]`) affects parser behavior.
`clang++` will parse as C++ by default, while `clang` will assume C.
`/opt/llvm/bin/clang` will search for the standard library under `/opt/llvm`
as well as the usual places.

(The working directory is also considered part of the compile command, mostly
it affects how relative paths within the compile command are interpreted).

## Where do compile commands come from?

Generally, clangd first obtains a basic compile command from a compilation
database and then applies some tweaks to it.

### Compilation databases

A [compilation database](https://clang.llvm.org/docs/JSONCompilationDatabase.html)
  describes compile commands for a codebase. It can be:
- a file named `compile_commands.json` listing commands for each file.
  Usually generated by a build system like CMake.
- a file named `compile_flags.txt` listing flags to be used for all files.
  Typically hand-authored for simple projects.

We first check for a compilation database in the directory containing the
source file, and then walk up into parent directories until we find one.

[GlobalCompilationDatabase] is responsible for discovering, caching and
refreshing compilation databases.

#### Commands for header files

Clangd parses headers like any other source file (which is why it [only supports
self-contained headers](https://github.com/clangd/clangd/issues/45)). However
most build systems don't compile headers directly and therefore don't record
compile commands for them.

If no command is available for a header, but a file has been opened that
transitively includes it, then that file's command will be used. To enable this
[TUScheduler] keeps a `HeaderIncluderCache` to look up the relevant file.

Otherwise when `compile_commands.json` is used, we'll pick some entry whose
filename most closely matches that of the header. The idea is that `bar/foo.cc`
is likely to include `bar/foo.h` and therefore have a compatible command.
This is implemented in [InterpolatingCompilationDatabase]. As it's purely a
filename-based heuristic it occasionally goes wrong.
It can also provide a decent default command for newly created files the build
system doesn't know about yet.

If a command has been "borrowed" from another file, this is noted when the
compile command is logged. (`... with command inferred from foo/bar.cc`).

#### Fallback commands

If no compilation database is found, a very simple command like `clang foo.cc`
is used. For a real project this will often fail to find `#include`s, but it
allows clangd to work on toy examples without configuration.

### Tweaks always applied

- bare command names like `clang` are made absolute (by looking them up on the
  `$PATH`, querying `xcrun` on mac, or failing that guessing).
  This increases the chances of being able to find the standard library.
- on mac, `-isysroot` is set to the default SDK (by querying `xcrun`).
  This more closely matches the behavior of Apple's `/usr/bin/clang` (which is
  really a script that invokes the real clang with extra flags).
  Without this, the standard library again will not be found.
- `-fsyntax-only` is added because we're just parsing, not compiling.
- `-resource-dir=...` is added, because built-in headers like `<stddef.h>` must
  be the ones installed with clangd.
- certain unsupported flags like `-plugin` are dropped.

### Query-driver

If the compile command names a compiler that is present, then clangd can query
it to understand its default configuration (header search paths and target), and
then adjust the compile command to configure the clang parser to match.

The compiler (e.g. `custom-gcc`) must be compatible enough with gcc to dump its
configuration in response to this command:

```
$ custom-gcc -E -v -x c++ /dev/null
Target: arm-linux-gnueabihf
...
#include <...> search starts here:
 /opt/custom-gcc/include/c++/10
 ...
End of search list.
```

This would cause clangd to add `--target=arm-linux-gnueabihf -isystem
/opt/custom-gcc/include/c++/10` to the compile command, to better simulate this
toolchain. This is often easier than configuring the correct search paths by
hand when code is designed to build with a customized toolchain.

The compiler queried is always the `argv[0]` of the compile command, but the
clangd flag `--query-driver=/path/to/custom-gcc` must be passed to enable this.
(This must be explicitly enabled as we're executing otherwise unknown binaries!)

### Customizing compile commands

Users may want to modify the compile command used for various reasons.
This is the preferred way to choose which warnings to show, and can sometimes
be used to work around clangd bugs/limitations.

Editing `compile_commands.json` is usually not a feasable option as it is
a generated file and changes will be quickly overwritten (though writing tools
to automate customizations is possible).

The [configuration file](/config) is a simpler alternative, allowing compile
flags to be added or removed. e.g.

```
CompileFlags:
  Add: '-Wswitch'
  Remove: '-Werror'
```

## Compile command problems

Incorrect compile commands can cause problems of different severity.
In all cases, the log contains the compile command that was used, and it can be
easiest to feed variations of that command to `clang` to try to understand
the problem.

### Unusable command

If a command is completely malformed, we won't run the parser. This produces
some diagnostics which are attached to line 1 but other features on the file
will not be available (will fail with "invalid AST").

(This isn't great, maybe we should recover with a fallback command instead?)

This can be recognized by the diagnostics (often "expected exactly one compiler
job") by subsequent "invalid AST" errors, and by the "Could not
build CompilerInvocation" log message.

### Severe parsing problems

If the command was unsuitable for the file, then then the parser may run but
fail to understand much of the file. Typical causes:

- couldn't find included headers because of missing `-I` flags
- command is for parsing C but the code is C++

Usually diagnostics reported near the top of the file will make these problems
obvious.

### Subtle parsing problems

Sometimes only a few constructs do not get parsed correctly. For example if
the code uses some C++20 constructs but the compile command doesn't specify
the language version, or if some expected preprocessor symbols are missing.

This may happens when compile commands from another compiler are used, and
the defaults are different (e.g. GCC currently defaults to C++17, vs C++14 for
clang).

This will usually result in diagnostics that pinpoint the problem.

### Headers outside the project directory

When opening a header outside the project directory (for example, a header from
an external library that's included by a file in the project), clangd will
typically fail to find a compilation database (which is usually located in the 
project directory), and fall back to a default command that may not include
flags that are important for parsing the header's code (for example, include
paths to locate the headers that _it_ includes).

See [this FAQ question](https://clangd.llvm.org/faq#how-do-I-fix-errors-I-get-when-opening-headers-outside-of-my-project-directory)
for a way to work around this.

[GlobalCompilationDatabase]: https://code.woboq.org/llvm/clang-tools-extra/clangd/GlobalCompilationDatabase.h.html#clang::clangd::GlobalCompilationDatabase
[InterpolatingCompilationDatabase]: https://code.woboq.org/llvm/clang/lib/Tooling/InterpolatingCompilationDatabase.cpp.html#clang::tooling::(anonymousnamespace)::InterpolatingCompilationDatabase
[TUScheduler]: https://code.woboq.org/llvm/clang-tools-extra/clangd/TUScheduler.h.html#clang::clangd::TUScheduler


/design/threads => Threads & requests
=========================================================

# Threads and request handling

Our main goals in handling incoming requests are:

- respond to requests as quickly as possible (don't block on unrelated work)
- provide diagnostics as soon as possible once the user stops typing
- handle requests using the expected version the of the file
- use a predictable and bounded amount of CPU and RAM

Some constraints are provided by clang:

- Clang supports parsing the preamble (initial `#include`s) separately for
  better incremental performance.
- Initial build of the preamble can be extremely slow - tens of seconds.
  Incremental AST builds (with an up-to-date preamble) are fast (sub-second).
- Once built, the preamble is threadsafe (it's just immutable bytes).
  However ASTs are not threadsafe, even for read-only operations.

## Life of a request

An LSP message like `textDocument/definition` or `textDocument/didChange` is
decoded by `ClangdLSPServer` and dispatched to the appropriate function on
`ClangdServer`. This happens on the main thread, ClangdServer is not threadsafe.
Therefore, its methods should not block - that would block incoming messages
which could be independent (code completion in a different file) or relevant
(cancelling a slow request).

Instead, they determine the affected file and place the action on `TUScheduler`.
This class maintains a set of `ASTWorker`s, each is responsible for one file.
The `ASTWorker` has a queue of operations, and a thread consuming them:

- throwing away operations that are obsolete:
  - reads that have been cancelled
  - writes immediately followed by writes (e.g. two consecutive keystrokes)
- executing the first operation that is still valid:
  - writes: rebuilding the AST (and preamble if needed), publishing diagnostics
  - reads: passing the AST to the action callback

This ensures there's only one AST and one preamble per open file, operations on
one file don't block another, and that reads see exactly the writes issued
before them.

## Debouncing

For files that rebuild relatively slowly, starting to build as soon as we see
the first change isn't ideal.

Suppose the user quickly types `foo();`. Building after the `f` is typed means:

- we'll always see a diagnostic "unknown identifier `f`", which is annoying.
- we'll never see the correct diagnostics until after 2 rebuilds

To address this, writes are debounced: rebuilding doesn't start until either a
read is received or a short deadline expires (user stopped typing).

## Code completion

Unlike typical requests like go-to-definition, code completion does not use
the pre-built AST. Clang doesn't do a great job of preserving the AST around
incomplete code, and completion can make good use of transient parser state.
We run a fresh parse with clang's completion API enabled, which injects a
"code completion" token into the token stream, and invokes a callback once the
parser hits it.

As this doesn't reuse the AST, it can run on a separate thread rather than the
ASTWorker. It does use the preamble, but we don't wait for it to be up-to-date.
Since completion is extremely time sensitive, it just uses whichever is
immediately available.


/design/indexing => The clangd index
=========================================================

# The clangd index

The index stores information about the whole codebase. It's used to provide LSP
features where the AST of the current file doesn't have the information we need.

## Exposed data

- `Symbol`s are the primary objects managed by the index. A function, variable,
  class, or macro is a Symbol, and each one has an opaque `SymbolID`.
  Two declarations of the same thing will produce the same `SymbolID` and thus
  be merged into one `Symbol`.

  Symbols have names, declaration/definition locations, documentation, and a
  bunch of attributes used for code completion.

  They can be looked up by ID, or fuzzy-searched by name.

- `Ref`s are uses of a symbol in code, such as a call to a function.
  They are edges between a `Symbol` and a location in some file.

  They can be looked up by SymbolID.

- `Relation`s describe related symbols, such as a class that inherits another.
  They are edges between two `Symbol`s, labeled with a relation kind.

  They are looked up using one of the `Symbols` and the kind.

## Implementations

`SymbolIndex` is an interface, and clangd maintains several instances.
These are stitched together using `MergedIndex`, which layers one index on top
of another. Code implementing features sees only a single combined index.

### `FileIndex` ("dynamic index")

This is the top layer, and includes symbols from the files that have been opened
and the headers they include. This is used:

- to provide code completions for symbols at global scope in header files.
  (This is more efficient than deserializing big parts of the preamble).
- to ensure cross-references for the files you're working on are available, even
  if the background index hasn't finished yet
- to ensure locations of definitions/references aren't stale despite actively
  editing the file

The `FileIndex` class stores data from each file separately. When a file is
parsed, the TUScheduler invokes a callback which adds the AST to the index.
(In fact, there is a separate storage and callback for expensive-and-rare
preamble rebuilds vs cheap-and-frequent main-file rebuilds).

### `BackgroundIndex`

As the name suggests, this parses all files in the project in the background
to build a complete index. This is used:

- to ensure full coverage of the codebase
- to capture references inside template instantiations, which are disabled
  elsewhere in clangd for performance reasons

The `BackgroundIndex` maintains a thread-pool, and when a compilation database
is found, the compile command for each source file is placed on a queue.

Before indexing each file, the index checks for a cached `*.idx` file on disk.
After indexing, it writes this file. This avoids reindexing on startup if
nothing changed since last time.
These files are located in `.cache/clangd/index/` next to `compile_commands.json`.
For headers with no CDB, such as the standard library, they are in `clangd/index`
under the user's cache directory (`$XDG_CACHE_HOME`, `DARWIN_USER_CACHE_DIR`, or
`%LocalAppData%`).

### Static index

The (optional) static index is built outside clangd. It would typically cover
the whole codebase. This is used:

- to avoid waiting for the background index to build
- to allow the background index to be disabled for large projects, saving
  CPU/RAM/battery

With the `-index-file` option, clangd will load an index produced by the
`clangd-indexer` tool.

### Remote index

For large codebases (e.g. LLVM and Chromium) global index can take a long
time to build (multiple hours even on very powerful machines for Chrome-sized
projects) and induces a large memory overhead (multiple GB of RAM) to serve
within clangd.

Remote index allows serving index on a separate machine and connecting to it
from your device. This means you don't have to build the index yourself
anymore and clangd will use significantly less memory. Hence developers can
work from less powerful machines, while still using clangd to its fullest.
For more details, see [remote index](/design/remote-index).


/design/remote-index => Remote index
=========================================================

# Remote index

A [project-wide index](/design/indexing) can be slow to build, particularly
for large projects on slower machines like laptops. A "remote index" allows
a shared server to host the index instead.

## How it works

The remote index has three components:

- the **indexer** is a batch process that should run on a powerful machine.
  It parses all the code for your project, and produces an index file.
- the **server** exposes the index over a network. It loads the index file into
  memory, and exposes a [gRPC](https://grpc.io) service to query it.
- the **client** is part of clangd, which runs on the development machine.
  It connects to the server and requests information (such as the definition
  of a symbol) in real-time.

Each of these components are open-source and part of
[llvm/llvm-project/clang-tools-extra/clangd](https://github.com/llvm/llvm-project/tree/main/clang-tools-extra/clangd/).

## Indexer

`clangd-indexer` collects public symbols from headers (functions, classes,
types, etc). It's necessary to run the build system for your project first,
to produce `compile_commands.json` and possibly generate source files.

Running `clangd-indexer` is expensive and produced index is not incremental.
Usually the index is produced periodically and so is always slightly stale.

## Server

`clangd-index-server` is an RPC server that processes index requests. Clangd
issues requests to the server whenever it uses its global index (e.g. find
references request, index-based code completion).

The source code lives under different paths on different machines.
The `--project-root` flags specifies the source root on the indexer machine,
this prefix will be stripped. The client will add its own prefix as appropriate.

## Client

The client is compiled into clangd, and enabled when `Index.External.Server` is
set in the [user config](/config). A "mount point" must also be specified to
translate between local and remote paths.

The remote index cannot be enabled from project config for privacy reasons
(the client reveals information about the code being edited, and the project
config from the source code repository isn't sufficiently trusted).

## Building/releases

The client and server require the gRPC libraries.
Because of this dependency, they are not enabled by default in CMake.

To build remote-index-enabled `clangd` and `clangd-index-server`, you need:
 - gRPC libraries (e.g. `apt install libgrpc++-dev libprotobuf-dev
   protobuf-compiler-grpc` or `brew install grpc protobuf` or
   [build from source](https://github.com/grpc/grpc/blob/master/BUILDING.md))
 - to set the `-DCLANGD_ENABLE_REMOTE=On` and possibly `-DGRPC_INSTALL_PATH`
   CMake flags

The [clangd releases on GitHub](https://github.com/clangd/clangd/releases)
include remote index support, but official LLVM releases do not (yet).


/design/include-cleaner => Include Cleaner
=========================================================

# Include Cleaner

Manually managing includes in a C++ translation unit, especially in the face of
transitive inclusions, requires a lot of effort. Include Cleaner aims to
provide diagnostics to keep includes in an
[IWYU](https://include-what-you-use.org/)-clean state.

Include Cleaner is available in "preview" mode with an incomplete set of
capabilities and can be enabled through [configuration
file](/config#unusedincludes). If you experience any bugs, please submit a bug
report in [clangd/issues](https://github.com/clangd/clangd/issues).

{:.v14}

## How it works

Include Cleaner issues diagnostics for includes that are present but not used
in the main file. When you open a file, clangd will analyze the symbols the
file uses and mark all headers defining these symbols as "used". The warnings
will be issued for the headers that are included but not marked as "used".
Example:

```c++
// foo.h
#pragma once

class Foo {};
```

```c++
// bar.h
#pragma once

class Bar {};
```

```c++
// main.cpp

#include "foo.h"
#include "bar.h" // <- Will be marked as unused and suggested to be removed.

int main() {
  Foo f;
}
```

Here, `main.cpp` only makes use of symbols from `foo.h` and removing `#include
"bar.h"` prevents unnecessary parsing of `bar.h` and allows breaking the
dependency on it.

### Deciding what headers are used

Clangd relies on Clang AST to deduce which headers are used and which aren't,
the whole Include Cleaner decision process is described below.

#### Scanning the main file

IncludeCleaner will traverse Clang AST of the main file. It will recursively
visit AST nodes and collect locations of all referenced symbols (e.g.  types,
functions, global variables). Any declaration explicitly mentioned in the code,
brought in via macro expansions, implicitly through type deductions or template
instantiations will be marked as "used". Example:

```c++
// foo.h
#pragma once

// USED
int foo();

// USED
#define FOO foo

// USED
struct Bar {
  Bar();
}

// USED
struct Baz;

// USED
template <typename T> Baz getBaz();
```

```c++
// main.cpp

#include "foo.h"

int main() {
  // Uses foo() and FOO
  FOO();
  // Uses Baz, getBaz and Bar.
  auto baz = getBaz<Bar>();
}
```

This means that Include Cleaner is conservatively treating symbols in the
expanded code as usages as opposed to only explicitly spelled symbols.

Include Cleaner will also traverse the macro names in the spelled code to
collect used macros.

After the process is complete, all declaration and definition locations will be
collected and passed to the next stage.

#### Marking the headers as used

`SourceLocation` instances collected at the previous step will be converted to
`FileID`s and deduplicated.

This is achieved by looking at two hints in the code:

- `IWYU pragma: private` directives, which explicitly tells a particular header
  should only be included through another.
- Header being non-self contained (e.g. missing header guards or pragma once,
  having a `.inc` extension). In which case Include Cleaner uses the first
  self-contained header in the include stack as the public interface.

After the responsible headers are collected, the only step left is producing
diagnostics for unused headers.

#### Issuing warnings

After most of the work is done, Include Cleaner needs to decide which headers
are not used in the main file. All inclusions are scanned and checked for
containing `IWYU pragma: keep`; if they do not, they are not used and will be
warned about.

### IWYU pragmas

IWYU tool offers a set of
[pragmas](https://github.com/include-what-you-use/include-what-you-use/blob/master/docs/IWYUPragmas.md).
Include Cleaner respects `keep`, `always_keep`, `private`, and
`export`/`begin_exports`/`end_exports`.

## Future plans and Limitations

### Umbrella headers

The "umbrella" headers are re-exporting the implementation headers for public
use, which is a common practice in Open Source projects. A notable example of
this is Googletest: the `gtest/gtest.h` top-level header does not contain any
definitions: it includes a number of "internal" headers that are not
recommended to users. The users should always write `#include
"gtest/gtest.h"`. The way to propagate that information to Include Cleaner is
using `// IWYU pragma: private, include "public.h"` in your `private.h` header
that is being exported.

### Standard library

By default, Include Cleaner will not diagnose headers from the Standard
Library. Standard Library headers support is not complete yet (due to the
macros and the fact that a symbol is allowed to come from multiple headers) but
you can enable this unstable feature through passing `--include-cleaner-stdlib`
flag to clangd invocation.

### Inserting Includes

The complete version of Include Cleaner will not only warn about unused
headers, but also provide a way to include used headers directly, not through a
chain of transitive includes.



/extensions => Protocol extensions
=========================================================

# Protocol extensions

clangd supports some features that are not in the official
[Language Server Protocol specification](https://microsoft.github.io/language-server-protocol/specification).

We try to do this sparingly. The most important considerations are:

- **Editor support**: How many users will the feature be available to?
- **Standardization**: Is the feature stable? is it likely to be adopted by more
  editors over time?
- **Utility**: Does the feature provide a lot of value?
- **Complexity**: Is this hard to implement in clangd, or constrain future work?
  Is the protocol complicated?

These extensions may evolve or disappear over time. If you use them, try to
recover gracefully if the structures aren't what's expected.

{% include toc.md %}

## Switch between source/header
{:.v6}

Lets editors switch between the main source file (`*.cpp`) and header (`*.h`).

**New client->server request**: `textDocument/switchSourceHeader`.
  - Params: `TextDocumentIdentifier`: an open file.
  - Result: `string`: the URI of the corresponding header (if a source file was
    provided) or source file (if a header was provided).

If the corresponding file can't be determined, `""` is returned.
[bug?](https://github.com/clangd/clangd/issues/12)

## File status
{:.v8}

Provides information about activity on clangd's per-file worker thread.
This can be relevant to users as building the AST blocks many other operations.

**New server->client notification**: `textDocument/clangd.fileStatus`
  - Sent when the current activity for a file changes. Replaces previous
    activity for that file.
  - Params: `FileStatus` object with properties:
    - `uri : string`: the document whose status is being updated.
    - `state : string`: human-readable information about current activity.

**New initialization option**: `initializationOptions.clangdFileStatus : bool`
  - Enables receiving `textDocument/clangd.fileStatus` notifications.

## Compilation commands
{:.v8}

clangd relies on having accurate compilation commands to correctly interpret a
file. Typically these are discovered via a `compile_commands.json` file in
a parent directory. These extensions allow editors to supply the commands over
LSP instead.

**New initialization option**: `initializationOptions.compilationDatabasePath : string`
  - Specifies the directory containing the compilation database (e.g.
    `compile_commands.json`). This path will be used for all files, instead of
    searching their ancestor directories.

**New initialization option**: `initializationOptions.fallbackFlags : string[]`
  - Controls the flags used when no specific compile command is found.
    The compile command will be approximately `clang $FILE $fallbackFlags` in
    this case.

**New configuration setting**: `settings.compilationDatabaseChanges : {string: CompileCommand}`
  - Provides compile commands for files. This can also be provided on startup as
    `initializationOptions.compilationDatabaseChanges`.
  - Keys are file paths (Not URIs! [bug?](https://github.com/clangd/clangd/issues/13))
  - Values are `{workingDirectory: string, compilationCommand: string[]}`

## Force diagnostics generation
{:.v7}

Clangd does not regenerate diagnostics for every version of a file (e.g. after
every keystroke), as that would be too slow. Its heuristics ensure:
 - diagnostics do not get too stale
 - if you stop editing, diagnostics will catch up

This extension allows editors to force diagnostics to be generated/not generated
at a particular revision.

**New property of `textDocument/didChange` request**: `wantDiagnostics : bool`
 - if true, diagnostics will be produced for exactly this version.
 - if false, diagnostics will not be produced for this version, even if there
   are no further edits.
 - if unset, diagnostics will be produced for this version or some subsequent
   one in a bounded amount of time.

## Diagnostic categories
{:.v8}

Clang groups diagnostics into categories (e.g. "Inline Assembly Issue").
Clangd can emit these categories for interested editors.

**New property of `Diagnostic` object**: `category : string`:
 - A human-readable name for a group of related diagnostics.
   Diagnostics with the same code will always have the same category.

**New client capability**: `textDocument.publishDiagnostics.categorySupport`:
 - Requests that clangd send `Diagnostic.category`.

## Inline fixes for diagnostics
{:.v8}

LSP specifies that code actions for diagnostics (fixes) are retrieved
asynchronously using `textDocument/codeAction`. However clangd always computes
these eagerly, and providing them alongside diagnostics can improve the UX in
editors.

**New property of `Diagnostic` object**: `codeActions : CodeAction[]`:
 - All the code actions that address this diagnostic.

**New client capability**: `textDocument.publishDiagnostics.codeActionsInline : bool`
 - Requests that clangd send `Diagnostic.codeActions`.

## Symbol info request
{:.v8}

This attempts to resolve the symbol under the cursor, without retrieving
further information (like definition location, which may require consulting an
index). This was added to support integration with indexes outside clangd.

**New client->server request**: `textDocument/symbolInfo`:
 - Params: `TextDocumentPositionParams`
 - Response: `SymbolDetails`, an object with properties:
   - `name : string` the unqualified name of the symbol
   - `containerName : string` the enclosing namespace, class etc (without
     trailing `::`)
   - `usr : string`: the clang-specific "unified symbol resolution" identifier
   - `id : string?`: the clangd-specific opaque symbol ID

## UTF-8 offsets
{:.v9}

LSP specifies that offsets within lines are in UTF-16 code units (for `Position`s and also delta-encoded document updates).
This choice of encoding is a legacy of VSCode's JavaScript implementation.

clangd allows clients to use UTF-8 offsets instead. This allows clients that always speak UTF-8 (in violation of the protocol) to work correctly, and those that are UTF-8 native to avoid unnecessary transcoding (which may be slow if implemented in e.g. vimscript).

**New client capability**: `offsetEncoding : string[]`:

  Lists the encodings the client supports, in preference order. It SHOULD include `"utf-16"`. If not present, it is assumed to be `["utf-16"]`

  Well-known encodings are:
  - `utf-8`: `character` counts bytes
  - `utf-16`: `character` counts code units
  - `utf-32`: `character` counts codepoints

**New InitializeResponse property**: `offsetEncoding: string`:
  - Specifies the encoding that the server selected, which should be used.
  - This should be one of the requested encodings, or `"utf-16"` if none were supported.
  - Only sent if the client capability was specified (or otherwise negotiated, e.g. clangd flag `-offset-encoding=utf-8`).

**Advice for clients using this extension**:
  - clients that only support UTF-8 should send `offsetEncoding: ["utf-8"]` in their client capabilities.
    This will cause the server to use UTF-8 if supported.
  - clients that prefer UTF-8 but can use UTF-16 should send `offsetEncoding: ["utf-8", "utf-16"]` and observe the selected encoding in the `InitializeResponse`, defaulting to UTF-16 if it's not present.
    This will negotiate UTF-8 with servers that support it.
  - clients that prefer UTF-16 may send `offsetEncoding: ["utf-16"]` or simply not use the extension.

**Advice for servers using this extension**:
  - servers that only support UTF-8 should send `offsetEncoding: "utf-8"` in their InitializeResponse.
    This will enable UTF-8 in clients that support it.
  - servers that support both UTF-8 and UTF-16 should check whether the client capabilities mentions `"utf-8"` as supported, and use it if so. The selected encoding should be reported in the `InitializeResponse`.
    This allows UTF-8 to be used when the client prefers it.
  - servers that only support UTF-16 can add `offsetEncoding: "utf-16"` or simply not use the extension.

## Type hierarchy
{:.v9}

Clangd supports the type hierarchy extension proposed for LSP.

Type hierarchy allows the server to provide the client with information about
the subclasses (derived classes) and superclasses (base classes) of the class
referenced at a provided document location. Clients typically use this to show
a tree view of the class and its subclasses or superclasses (or sometimes, in
languages with single inheritance, a single tree showing both).

The version of the protocol currently implemented is the one in
[this proposal](https://github.com/microsoft/vscode-languageserver-node/pull/426).

## Code completion scores
{:.v10}

LSP gives servers limited control over completion display order through the
`sortText` attribute. Clangd uses several signals such as number of usages to
ensure the most likely completions are near the top.

However as the user continues to type, editors filter and re-rank the results
on the client side. This re-ranking should take into account the signals from
the server, but LSP does not expose them.

**New CompletionItem property**: `score: number`:
  - The quality of the result, independent of how well it fuzzy-matches the word
    being completed. (Value is >= 0, higher is better).
  - Clients that fuzzy client-side filtering should multiply `score` by their
    fuzzy-match score and sort by the result.
  - Clients with non-fuzzy client-side filtering only should sort by `score`.
  - Clients that don't support client-side filtering should ignore this and
    use `sortText`, which incorporates `score` and fuzzy-matching.

## AST
{:.v12}

C++ has a complicated grammar and semantic structure that's not always obvious
from the source. Inspecting the Clang AST can lend some insight.
Despite the origin of the name (Abstract Syntax Tree), it captures semantics as
well as syntax (e.g. implicit casts).

**New client->server request**: `textDocument/ast`:
 - Params: `ASTParams` object with properties:
   - `textDocument : TextDocumentIdentifier`: the open file to inspect
   - `range : Range`: the region of the source code whose AST is fetched.
     The highest-level node that entirely contains the range is returned.
 - Result: `ASTNode` object with properties:
   - `role : string`: the general kind of node, such as "expression".
     Corresponds to clang's base AST node type, such as Expr.
     The most common are "expression", "statement", "type" and "declaration".
   - `kind : string`: the specific kind of node, such as "BinaryOperator".
     Corresponds to clang's concrete node class, with Expr etc suffix dropped.
   - `detail : string?`: brief additional details, such as '||'.
     Information present here depends on the node kind.
   - `arcana : string?`: one line dump of information, similar to that printed
     by `clang -Xclang -ast-dump`. Only available for certain types of nodes.
   - `range : Range`: the part of the code that produced this node.
     Missing for implicit nodes, nodes produced by macro expansion, etc.
   - `children : ASTNode[]?`: descendants describing the internal structure.
     The tree of nodes is similar to that printed by `clang -Xclang -ast-dump`,
     or that traversed by `clang::RecursiveASTVisitor`.

**New server capability**: `astProvider : bool`:
 - Signals that the server supports `textDocument/ast` requests.

## Memory usage
{:.v12}

clangd can use a lot of memory. It can be valuable to understand where it goes.
We expose a hierarchy where memory is associated with a tree of components.
e.g. an AST may be stored under `clangd_server.tuscheduler."main.cpp".ast`.

The actual component hierarchy is subject to change between versions, and
the memory usage is only estimated (it mostly counts objects rather than
tracking allocations directly).

**New client->server request**: `$/memoryUsage`:
 - Params: none
 - Result: `MemoryTree` object with properties:
   - `_total : number`: number of bytes used, including child components
   - `_self : number`: number of bytes used, excluding child components
   - `[component] : MemoryTree`: memory usage of a named child component

**New server capability**: `memoryUsageProvider : bool`:
 - Signals that the server supports `$/memoryUsage` requests.

## Reference Container
{:.v16}

When finding references to a symbol, it's often useful to know the name of the
function or class in which the reference occurs. 

**New property of `Location` object**: `containerName : string?`:
 - Name of the function or class in which the reference occurs. Might be null,
   e.g. if the containing symbol is not indexed. Can also be an empty string, e.g.
   for declarations at global scope. 

**New client capability**: `textDocument.references.container`:
 - Requests that clangd adds the `containerName` property to the `Location`
   objects returned by `textDocument/references`

## Inlay hints
{:.v14}

Inlay hints are labels that are displayed by the editor in-line with the code.

| **Without hints:** | <tt>memcpy(buf, data, n)</tt> |
| **With hints:**    | <tt>memcpy(_dest:_ buf, _src:_ data, _count:_ n)</tt> |

clangd can provide several categories of hints.

**New client->server request**: `clangd/inlayHints`:
 - Params: `InlayHintsParams` object with properties:
   - `textDocument : TextDocumentIdentifier`: the open file to inspect
   - `range : Range?`: the region of the source code to retrieve hints for.
     If not set, returns hints for the whole document.
 - Result: `InlayHints[]`, where `InlayHint` has properties:
   - `kind : string`: Type of hint being provided, e.g. `"parameter"`, `"type"`.
   - `label : string`: The label that should be displayed, e.g. `"dest:"`.
   - `position : Position`: The point between characters to show the hint.
   - `range : Range`: The range the hint is associated with, e.g. the argument.

**New server capability**: `clangdInlayHintsProvider` : bool`:
 - Signals that the server supports `clangd/inlayHints` requests.

_Compatibility_: Several language servers support inlay hint extensions.
This extension is mostly compatible with
[rust-analyzer/inlayHints](https://github.com/kjeremy/vscode-languageserver-node/blob/5849e59afd9d598666426f2640dfbd173eace02d/protocol/src/protocol.inlayHints.proposed.md).
typescript-language-server also supports a similar
[typescript/inlayHints](https://github.com/typescript-language-server/typescript-language-server#inlay-hints-typescriptinlayhints-experimental).

Our hope is that some version of inlay hints is standardized in LSP. Once
standard inlay hints are implemented in clangd, we will deprecate this extension
and eventually remove it.

See LSP
[bug 956](https://github.com/microsoft/language-server-protocol/issues/956),
[PR 609](https://github.com/microsoft/vscode-languageserver-node/pull/609),
[PR 772](https://github.com/microsoft/vscode-languageserver-node/pull/772).


https://github.com/llvm/llvm-project/tree/main/clang-tools-extra/clangd => Browse code
=========================================================



https://github.com/clangd/clangd/issues => Bug tracker
=========================================================



https://github.com/clangd/clangd/discussions => Forum
=========================================================



https://discord.gg/xS7Z362 => Chat (#clangd)
=========================================================

