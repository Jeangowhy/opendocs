#!/usr/bin/env bash
cat << EOF
```
#     ____      ____
#    / __/___  / __/
#   / /_/_  / / /_
#  / __/ / /_/ __/
# /_/   /___/_/    Fuzzy finder for your shell
#
```
EOF
exit

git clone --depth=1 git@github.com:junegunn/fzf /pl/fzf
git clone --depth=1 git@github.com:junegunn/fzf.wiki /pl/fzf-wiki

printf "# /Examples Community-maintained\n\n" >> $0
cat "Examples.md" >> $0

printf "# /Examples for fish\n\n" >> $0
cat "Examples-(fish).md" >> $0

printf "# /Examples (completion)\n\n" >> $0
cat "Examples-(completion).md" >> $0

printf "# /Examples (vim)\n\n" >> $0
cat "Examples-(vim).md" >> $0

printf "# /Cygwin\n\n" >> $0
cat "Cygwin.md" >> $0

printf "# /Windows\n\n" >> $0
cat "Windows.md" >> $0

printf "# /Browse chrome bookmarks\n\n" >> $0
cat "Browse-chrome-bookmarks.md" >> $0

printf "# /Configuring fuzzy completion\n\n" >> $0
cat "Configuring-fuzzy-completion.md" >> $0

printf "# /Configuring shell key bindings\n\n" >> $0
cat "Configuring-shell-key-bindings.md" >> $0

printf "# /Color schemes\n\n" >> $0
cat "Color-schemes.md" >> $0

printf "# /Installing curses gem\n\n" >> $0
cat "Installing-curses-gem.md" >> $0

printf "# /Language bindings\n\n" >> $0
cat "Language-bindings.md" >> $0

printf "# /On MacVim with iTerm2\n\n" >> $0
cat "On-MacVim-with-iTerm2.md" >> $0

printf "# /Related projects\n\n" >> $0
cat "Related-projects.md" >> $0
exit
- - - 

# /FZF CLI

    usage: fzf [options]

      Search
        -x, --extended        Extended-search mode
                              (enabled by default; +x or --no-extended to disable)
        -e, --exact           Enable Exact-match
        --algo=TYPE           Fuzzy matching algorithm: [v1|v2] (default: v2)
        -i                    Case-insensitive match (default: smart-case match)
        +i                    Case-sensitive match
        --literal             Do not normalize latin script letters before matching
        -n, --nth=N[,..]      Comma-separated list of field index expressions
                              for limiting search scope. Each can be a non-zero
                              integer or a range expression ([BEGIN]..[END]).
        --with-nth=N[,..]     Transform the presentation of each line using
                              field index expressions
        -d, --delimiter=STR   Field delimiter regex (default: AWK-style)
        +s, --no-sort         Do not sort the result
        --tac                 Reverse the order of the input
        --disabled            Do not perform search
        --tiebreak=CRI[,..]   Comma-separated list of sort criteria to apply
                              when the scores are tied [length|begin|end|index]
                              (default: length)

      Interface
        -m, --multi[=MAX]     Enable multi-select with tab/shift-tab
        --no-mouse            Disable mouse
        --bind=KEYBINDS       Custom key bindings. Refer to the man page.
        --cycle               Enable cyclic scroll
        --keep-right          Keep the right end of the line visible on overflow
        --scroll-off=LINES    Number of screen lines to keep above or below when
                              scrolling to the top or to the bottom (default: 0)
        --no-hscroll          Disable horizontal scroll
        --hscroll-off=COLS    Number of screen columns to keep to the right of the
                              highlighted substring (default: 10)
        --filepath-word       Make word-wise movements respect path separators
        --jump-labels=CHARS   Label characters for jump and jump-accept

      Layout
        --height=HEIGHT[%]    Display fzf window below the cursor with the given
                              height instead of using fullscreen
        --min-height=HEIGHT   Minimum height when --height is given in percent
                              (default: 10)
        --layout=LAYOUT       Choose layout: [default|reverse|reverse-list]
        --border[=STYLE]      Draw border around the finder
                              [rounded|sharp|horizontal|vertical|
                               top|bottom|left|right|none] (default: rounded)
        --margin=MARGIN       Screen margin (TRBL | TB,RL | T,RL,B | T,R,B,L)
        --padding=PADDING     Padding inside border (TRBL | TB,RL | T,RL,B | T,R,B,L)
        --info=STYLE          Finder info style [default|inline|hidden]
        --prompt=STR          Input prompt (default: '> ')
        --pointer=STR         Pointer to the current line (default: '>')
        --marker=STR          Multi-select marker (default: '>')
        --header=STR          String to print as header
        --header-lines=N      The first N lines of the input are treated as header
        --header-first        Print header before the prompt line
        --ellipsis=STR        Ellipsis to show when line is truncated (default: '..')

      Display
        --ansi                Enable processing of ANSI color codes
        --tabstop=SPACES      Number of spaces for a tab character (default: 8)
        --color=COLSPEC       Base scheme (dark|light|16|bw) and/or custom colors
        --no-bold             Do not use bold text

      History
        --history=FILE        History file
        --history-size=N      Maximum number of history entries (default: 1000)

      Preview
        --preview=COMMAND     Command to preview highlighted line ({})
        --preview-window=OPT  Preview window layout (default: right:50%)
                              [up|down|left|right][,SIZE[%]]
                              [,[no]wrap][,[no]cycle][,[no]follow][,[no]hidden]
                              [,border-BORDER_OPT]
                              [,+SCROLL[OFFSETS][/DENOM]][,~HEADER_LINES]
                              [,default]

      Scripting
        -q, --query=STR       Start the finder with the given query
        -1, --select-1        Automatically select the only match
        -0, --exit-0          Exit immediately when there's no match
        -f, --filter=STR      Filter mode. Do not start interactive finder.
        --print-query         Print query as the first line
        --expect=KEYS         Comma-separated list of keys to complete fzf
        --read0               Read input delimited by ASCII NUL characters
        --print0              Print output delimited by ASCII NUL characters
        --sync                Synchronous search for multi-staged filtering
        --version             Display version information and exit

      Environment variables
        FZF_DEFAULT_COMMAND   Default command to use when input is tty
        FZF_DEFAULT_OPTS      Default options
                              (e.g. '--layout=reverse --inline-info')



# /Sublime Text CLI + FZF 模糊查找

使用 Sublime Text 提供的 subl 命令编辑打印出来的帮助信息，此命令使用的是 Edit stdin 功能：

```sh
subl --help | subl -
```

    Sublime Text build 4169

    Usage: subl [arguments] [files]         Edit the given files
       or: subl [arguments] [directories]   Open the given directories
       or: subl [arguments] -- [files]      Edit files that may start with '-'
       or: subl [arguments] -               Edit stdin
       or: subl [arguments] - >out          Edit stdin and write the edit to stdout

    Arguments:
      --project <project>:    Load the given project
      --command <command>:    Run the given command
      -n or --new-window:     Open a new window
      --launch-or-new-window: Only open a new window if the application is open
      -a or --add:            Add folders to the current window
      -w or --wait:           Wait for the files to be closed before returning
      -b or --background:     Don't activate the application
      -s or --stay:           Keep the application activated after closing the file
      --safe-mode:            Launch using a sandboxed (clean) environment
      -h or --help:           Show help (this message) and exit
      -v or --version:        Show version and exit

    Filenames may be given a :line or :line:column suffix to open at a specific
    location.

使用 subl 获取剪贴板数据（只能将剪贴板内容粘贴到 Sublime Text 当前活动窗口中）：

```sh
subl --command "paste"
```

利用 find 与 fzf 模糊查找特定文件，并利用 subl 进行编辑：

```sh
subl `find . -name '*.md' | fzf `
```

这里使用了三个命令：

find 查找命令，在当前目录（.） 查找与 -name 指定名称（`*.exe`）匹配了文件，这里需要引用包括
文件名，因为这里包含模式匹配，如果没有引号，* 这个符号就会被 bash 当作文件名进行扩展。

获取到文件列表后，传递给 fzf 进行模糊查找、过滤，最后将结果通过 bash 的命令替代扩展返回给 subl
命令。bash 命令替代有两种形式，反引号或 $() 包括要进行替代的命令。

利用 nl fzf sed 来定位 Markdown 标题行号（#号标题），并且使用 subl 打开文档并定位跳转行号：

```sh
filter_title='/^ \+[0-9]\+\s/{s/^ *[0-9]\+\s#/\0/p}'
filter_line='s/^ \+\([0-9]\+\).*/\1/p'
file=`find . -name '*.md' | fzf`
line=`nl -ba "$file" | sed -n "$filter_title" | fzf | sed -n "$filter_line"`
subl "$file:$line"
# nl a "$file"| xxd | head -n 10 | subl -
```

GNU coreutils 工具包提供了一个 nl: Number lines 工具，可以用它来给文件内容加行号。注意，
行号前导的对齐用的空格，而添加的行号后面跟着一个 TAB 符号。可以使用 xxd 显示它们编码值 0x09。
使用 sed 进行匹配时，不能使用空格来匹配制表符号，而应该使用 \s 来匹配这类空白符号。

注意，nl (Number lines) 命令和 ln（link symbol）完全是不同的命令。nl 命令编写行号有多种
风格，-ba 表示所有行都加行号（all），即使是空行。


# /Wiki Pages

<img src="https://raw.githubusercontent.com/junegunn/i/master/fzf.png" height="170" alt="fzf">

[![Join the chat at https://gitter.im/junegunn/fzf](https://badges.gitter.im/junegunn/fzf.svg)](https://gitter.im/junegunn/fzf?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

- [Examples](https://github.com/junegunn/fzf/wiki/Examples) (Community-maintained)
    - Various examples for bash and zsh
    - [Examples for fish](https://github.com/junegunn/fzf/wiki/Examples-(fish))
- [Examples (completion)](https://github.com/junegunn/fzf/wiki/Examples-(completion))
    - Learn how to write your own fuzzy completion
- [Examples (vim)](https://github.com/junegunn/fzf/wiki/Examples-(vim))
    - If you\'re not familiar with Vimscript, check out [fzf.vim](https://github.com/junegunn/fzf.vim)

### Articles

- [Key bindings for git with fzf](https://github.com/junegunn/fzf-git.sh)
- [fzf screencasts by gotbletu](https://www.youtube.com/playlist?list=PLqv94xWU9zZ2fMsMMDF4PjtNHCeBFbggD)
- [Fuzzy bookmarks for your shell](http://dmitryfrank.com/articles/shell_shortcuts)
- [Fuzzy bookmarks for zsh](https://github.com/kurkale6ka/zsh/#fuzzy-cd-based-on-bookmarks)
- [Using FZF instead of DMENU](https://medium.com/njiuko/using-fzf-instead-of-dmenu-2780d184753f)
- [A tour of several fzf based scripts](https://mattorb.com/the-many-faces-of-fzf/)
- Fuzzy clone a private org github repo [Part 1](https://mattorb.com/fuzzy-find-github-repository/), 
  [Part 2](https://mattorb.com/fuzzy-find-a-github-repository-part-deux/)
- fzf basics: [1) layout](https://qmacro.org/blog/posts/2021/02/02/fzf-the-basics-part-1-layout/) 
  and [2) search results](https://qmacro.org/blog/posts/2021/02/07/fzf-the-basics-part-2-search-results/)
- [Learning by rewriting - bash, jq and fzf details](https://qmacro.org/blog/posts/2021/08/26/learning-by-rewriting-bash-jq-and-fzf-details/)


# /Examples Community-maintained

*Disclaimer: The examples are maintained by the community and are not thoroughly tested.*

To add a script:
- check it runs on bash and zsh
- add it under an appropriate category in the ToC

Table of Contents
=================

* [General](#general)
* [Command history](#command-history)
* System
  * [i3](#i3)
  * [Copy current item to clipboard](#clipboard)
  * [Processes](#processes)
  * [dotfiles management](#dotfiles-management)
  * [Systemctl units](#systemctl-units)
  * [man pages](#man-pages)
* Package management
  * [Pacman/Yay](#pacman)
  * [NPM](#npm)
  * [Homebrew](#homebrew)
  * [Homebrew Cask](#homebrew-cask)
  * [DNF](#dnf)
  * [Flatpak](#flatpak)
  * [Conda](#conda)
* Filesystem navigation
  * [Opening files](#opening-files)
  * [Changing directory](#changing-directory)
  * [Searching file contents](#searching-file-contents)
  * [cd](#cd)
     * [Integration with <a href="https://github.com/changyuheng/zsh-interactive-cd">zsh-interactive-cd</a>.](#integration-with-zsh-interactive-cd)
     * [Interactive cd](#interactive-cd)
  * [autojump](#autojump)
     * [Integration with <a href="https://github.com/wting/autojump">autojump</a>](#integration-with-autojump)
  * [z](#z)
     * [Integration with <a href="https://github.com/rupa/z">z</a>.](#integration-with-z)
     * [With <a href="https://github.com/changyuheng/fz">fz</a>.](#with-fz)
     * [With <a href="https://github.com/clvv/fasd">fasd</a>.](#with-fasd-1)
  * [Locate](#locate)
  * [Browsing](#browsing)
* CLI Tools
  * [Git](#git)
  * [jrnl](#jrnl)
  * [tmux](#tmux)
  * [dictcc translation](#dictcc-translation)
  * [kubectl](#kubectl)
  * [pass and pass-tomb](#pass-and-pass-tomb)
* Moving from other tools
  * [fzf as selector menu (pipe entries like dmenu/rofi)](#fzf-as-selector-menu)
  * [fzf as rofi replacement](#fzf-as-rofi-replacement)
  * [fzf as dmenu replacement](#fzf-as-dmenu-replacement)
* [ctags](#ctags)
* [ASDF](#asdf)
* [v](#v)
   * [Inspired by v. Opens files in ~/.viminfo](#inspired-by-v-opens-files-in-viminfo)
   * [With <a href="https://github.com/clvv/fasd">fasd</a>.](#with-fasd)
* [Shell bookmarks](#shell-bookmarks)
* [Google Chrome](#google-chrome)
   * [Browsing history](#browsing-history)
   * [Bookmarks](#bookmarks)
* [mpd](#mpd)
* [Readline](#readline)
* [RVM](#rvm)
* [Vagrant](#vagrant)
* [Wrapper](#wrapper)
* [LastPass CLI](#lastpass-cli)
* [fzf-marker](#fzf-marker)
* [Search for academic pdfs by author, title, keywords, abstract](#search-for-academic-pdfs-by-author-title-journal-institution)
* [BibTeX](#bibtex)
* [Docker](#docker)
* [buku](#buku)
* [Python Behave BDD](#python-behave-bdd)
* [Transmission](#transmission)
* [Todoist CLI](#Todoist-CLI)
* [Emoji](#Emoji)

Nice collection at https://github.com/DanielFGray/fzf-scripts

### General
```sh
# Use fd and fzf to get the args to a command.
# Works only with zsh
# Examples:
# f mv # To move files. You can write the destination after selecting the files.
# f 'echo Selected:'
# f 'echo Selected music:' --extension mp3
# fm rm # To rm files in current directory
f() {
    sels=( "${(@f)$(fd "${fd_default[@]}" "${@:2}"| fzf)}" )
    test -n "$sels" && print -z -- "$1 ${sels[@]:q:q}"
}

# Like f, but not recursive.
fm() f "$@" --max-depth 1

# Deps
alias fz="fzf-noempty --bind 'tab:toggle,shift-tab:toggle+beginning-of-line+kill-line,ctrl-j:toggle+beginning-of-line+kill-line,ctrl-t:top' --color=light -1 -m"
fzf-noempty () {
  local in="$(</dev/stdin)"
  test -z "$in" && (
    exit 130
  ) || {
    ec "$in" | fzf "$@"
  }
}
ec () {
  if [[ -n $ZSH_VERSION ]]
  then
    print -r -- "$@"
  else
    echo -E -- "$@"
  fi
}
```

Inspired by the above, suggested by [Matt-A-Bennett](https://github.com/Matt-A-Bennett) (not tested in zsh):
```sh                                                                              
# Run command/application and choose paths/files with fzf.                      
# Always return control of the terminal to user (e.g. when opening GUIs).       
# The full command that was used will appear in your history just like any      
# other (N.B. to achieve this I write the shell's active history to             
# ~/.bash_history)                                                                
#                                                                               
# Usage:
# f cd [OPTION]... (hit enter, choose path)
# f cat [OPTION]... (hit enter, choose files)
# f vim [OPTION]... (hit enter, choose files)
# f vlc [OPTION]... (hit enter, choose files)

f() {
    # Store the program
    program="$1"

    # Remove first argument off the list
    shift

    # Store option flags with separating spaces, or just set as single space
    options="$@"
    if [ -z "${options}" ]; then
        options=" "
    else
        options=" $options "
    fi

    # Store the arguments from fzf
    arguments="$(fzf --multi)"

    # If no arguments passed (e.g. if Esc pressed), return to terminal
    if [ -z "${arguments}" ]; then
        return 1
    fi

    # We want the command to show up in our bash history, so write the shell's
    # active history to ~/.bash_history. Then we'll also add the command from
    # fzf, then we'll load it all back into the shell's active history
    history -w

    # ADD A REPEATABLE COMMAND TO THE BASH HISTORY ############################
    # Store the arguments in a temporary file for sanitising before being
    # entered into bash history
    : > /tmp/fzf_tmp
    for file in "${arguments[@]}"; do
        echo "$file" >> /tmp/fzf_tmp
    done

    # Put all input arguments on one line and sanitise the command by putting
    # single quotes around each argument, also first put an extra single quote
    # next to any pre-existing single quotes in the raw argument
    sed -i "s/'/''/g; s/.*/'&'/g; s/\n//g" /tmp/fzf_tmp

    # If the program is on the GUI list, add a '&' to the command history
    if [[ "$program" =~ ^(nautilus|zathura|evince|vlc|eog|kolourpaint)$ ]]; then
        sed -i '${s/$/ \&/}' /tmp/fzf_tmp
    fi

    # Grab the sanitised arguments
    arguments="$(cat /tmp/fzf_tmp)"

    # Add the command with the sanitised arguments to our .bash_history
    echo $program$options$arguments >> ~/.bash_history

    # Reload the ~/.bash_history into the shell's active history
    history -r

    # EXECUTE THE LAST COMMAND IN ~/.bash_history #############################
    fc -s -1

    # Clean up temporary variables
    rm /tmp/fzf_tmp
}
```
### Opening files

```sh
# fe [FUZZY PATTERN] - Open the selected file with the default editor
#   - Bypass fuzzy finder if there's only one match (--select-1)
#   - Exit if there's no match (--exit-0)
fe() {
  IFS=$'\n' files=($(fzf-tmux --query="$1" --multi --select-1 --exit-0))
  [[ -n "$files" ]] && ${EDITOR:-vim} "${files[@]}"
}

# Modified version where you can press
#   - CTRL-O to open with `open` command,
#   - CTRL-E or Enter key to open with the $EDITOR
fo() {
  IFS=$'\n' out=("$(fzf-tmux --query="$1" --exit-0 --expect=ctrl-o,ctrl-e)")
  key=$(head -1 <<< "$out")
  file=$(head -2 <<< "$out" | tail -1)
  if [ -n "$file" ]; then
    [ "$key" = ctrl-o ] && open "$file" || ${EDITOR:-vim} "$file"
  fi
}
```

```sh
# vf - fuzzy open with vim from anywhere
# ex: vf word1 word2 ... (even part of a file name)
# zsh autoload function
vf() {
  local files

  files=(${(f)"$(locate -Ai -0 $@ | grep -z -vE '~$' | fzf --read0 -0 -1 -m)"})

  if [[ -n $files ]]
  then
     vim -- $files
     print -l $files[1]
  fi
}
```

```sh
# fuzzy grep open via ag
vg() {
  local file

  file="$(ag --nobreak --noheading $@ | fzf -0 -1 | awk -F: '{print $1}')"

  if [[ -n $file ]]
  then
     vim $file
  fi
}

# fuzzy grep open via ag with line number
vg() {
  local file
  local line

  read -r file line <<<"$(ag --nobreak --noheading $@ | fzf -0 -1 | awk -F: '{print $1, $2}')"

  if [[ -n $file ]]
  then
     vim $file +$line
  fi
}
```

### Changing directory

```sh
# fd - cd to selected directory
fd() {
  local dir
  dir=$(find ${1:-.} -path '*/\.*' -prune \
                  -o -type d -print 2> /dev/null | fzf +m) &&
  cd "$dir"
}
```

```sh
# Another fd - cd into the selected directory
# This one differs from the above, by only showing the sub directories and not
#  showing the directories within those.
fd() {
  DIR=`find * -maxdepth 0 -type d -print 2> /dev/null | fzf-tmux` \
    && cd "$DIR"
}
```

```sh
# fda - including hidden directories
fda() {
  local dir
  dir=$(find ${1:-.} -type d 2> /dev/null | fzf +m) && cd "$dir"
}
```

```sh
# fdr - cd to selected parent directory
fdr() {
  local declare dirs=()
  get_parent_dirs() {
    if [[ -d "${1}" ]]; then dirs+=("$1"); else return; fi
    if [[ "${1}" == '/' ]]; then
      for _dir in "${dirs[@]}"; do echo $_dir; done
    else
      get_parent_dirs $(dirname "$1")
    fi
  }
  local DIR=$(get_parent_dirs $(realpath "${1:-$PWD}") | fzf-tmux --tac)
  cd "$DIR"
}
```

```sh
# cf - fuzzy cd from anywhere
# ex: cf word1 word2 ... (even part of a file name)
# zsh autoload function
cf() {
  local file

  file="$(locate -Ai -0 $@ | grep -z -vE '~$' | fzf --read0 -0 -1)"

  if [[ -n $file ]]
  then
     if [[ -d $file ]]
     then
        cd -- $file
     else
        cd -- ${file:h}
     fi
  fi
}
```

Suggested by [@harelba](https://github.com/harelba) and [@dimonomid](https://github.com/dimonomid):

```sh
# cdf - cd into the directory of the selected file
cdf() {
   local file
   local dir
   file=$(fzf +m -q "$1") && dir=$(dirname "$file") && cd "$dir"
}
```

```sh
# Another CTRL-T script to select a directory and paste it into line
__fzf_select_dir ()
{
        builtin typeset READLINE_LINE_NEW="$(
                command find -L . \( -path '*/\.*' -o -fstype dev -o -fstype proc \) \
                        -prune \
                        -o -type f -print \
                        -o -type d -print \
                        -o -type l -print 2>/dev/null \
                | command sed 1d \
                | command cut -b3- \
                | env fzf -m
        )"

        if
                [[ -n $READLINE_LINE_NEW ]]
        then
                builtin bind '"\er": redraw-current-line'
                builtin bind '"\e^": magic-space'
                READLINE_LINE=${READLINE_LINE:+${READLINE_LINE:0:READLINE_POINT}}${READLINE_LINE_NEW}${READLINE_LINE:+${READLINE_LINE:READLINE_POINT}}
                READLINE_POINT=$(( READLINE_POINT + ${#READLINE_LINE_NEW} ))
        else
                builtin bind '"\er":'
                builtin bind '"\e^":'
        fi
}

builtin bind -x '"\C-x1": __fzf_select_dir'
builtin bind '"\C-t": "\C-x1\e^\er"'
```

Fuzzy cd for fish shell: https://gist.github.com/rumpelsepp/b1b416f52d6790de1aee

autojump(macOS) + fzf for fish shell: https://gist.github.com/l4u/06502cf680b9a3817efddfb0a9a6ede8

### Searching file contents

```sh
grep --line-buffered --color=never -r "" * | fzf

# with ag - respects .agignore and .gitignore
ag --nobreak --nonumbers --noheading . | fzf

# using ripgrep combined with preview
# find-in-file - usage: fif <searchTerm>
fif() {
  if [ ! "$#" -gt 0 ]; then echo "Need a string to search for!"; return 1; fi
  rg --files-with-matches --no-messages "$1" | fzf --preview "highlight -O ansi -l {} 2> /dev/null | rg --colors 'match:bg:yellow' --ignore-case --pretty --context 10 '$1' || rg --ignore-case --pretty --context 10 '$1' {}"
}
```

```sh
# alternative using ripgrep-all (rga) combined with fzf-tmux preview
# This requires ripgrep-all (rga) installed: https://github.com/phiresky/ripgrep-all
# This implementation below makes use of "open" on macOS, which can be replaced by other commands if needed.
# allows to search in PDFs, E-Books, Office documents, zip, tar.gz, etc. (see https://github.com/phiresky/ripgrep-all)
# find-in-file - usage: fif <searchTerm> or fif "string with spaces" or fif "regex"
fif() {
    if [ ! "$#" -gt 0 ]; then echo "Need a string to search for!"; return 1; fi
    local file
    file="$(rga --max-count=1 --ignore-case --files-with-matches --no-messages "$*" | fzf-tmux +m --preview="rga --ignore-case --pretty --context 10 '"$*"' {}")" && echo "opening $file" && open "$file" || return 1;
}
```

Suggested by [@gbstan](https://github.com/gbstan)

```sh
#!/bin/bash

##
# Interactive search.
# Usage: `ff` or `ff <folder>`.
#
[[ -n $1 ]] && cd $1 # go to provided folder or noop
RG_DEFAULT_COMMAND="rg -i -l --hidden --no-ignore-vcs"

selected=$(
FZF_DEFAULT_COMMAND="rg --files" fzf \
  -m \
  -e \
  --ansi \
  --disabled \
  --reverse \
  --bind "ctrl-a:select-all" \
  --bind "f12:execute-silent:(subl -b {})" \
  --bind "change:reload:$RG_DEFAULT_COMMAND {q} || true" \
  --preview "rg -i --pretty --context 2 {q} {}" | cut -d":" -f1,2
)

[[ -n $selected ]] && subl $selected # open multiple files in editor
```

Suggested by [@knoxknox](https://github.com/knoxknox)

```sh
#!/bin/bash
# Interactive search using ag (silver searcher)

[[ -n $1 ]] && cd $1 # go to provided folder or noop
typeset AG_DEFAULT_COMMAND="ag -i -l --hidden"
typeset IFS=$'\n'
typeset selected=($(
      fzf \
      -m \
      -e \
      --ansi \
      --disabled \
      --reverse \
      --print-query \
      --bind "change:reload:$AG_DEFAULT_COMMAND {q} || true" \
      --preview "ag -i --color --context=2 {q} {}"))
[ -n "$selected" ] && ${EDITOR} -c "/\\c${selected[0]}" ${selected[1]}
```

### Command history

```sh
# fh - repeat history
fh() {
  eval $( ([ -n "$ZSH_NAME" ] && fc -l 1 || history) | fzf +s --tac | sed -E 's/ *[0-9]*\*? *//' | sed -E 's/\\/\\\\/g')
}
```

```sh
# fh - repeat history
fh() {
  print -z $( ([ -n "$ZSH_NAME" ] && fc -l 1 || history) | fzf +s --tac | sed -E 's/ *[0-9]*\*? *//' | sed -E 's/\\/\\\\/g')
}
```

Replacing `eval` with `print -z` will push the arguments onto the editing buffer stack, allowing you to edit the command before running it. It also means the command you run will appear in your history rather than just `fh`. Unfortunately this only works for zsh. See below for solutions working with Bash.

#### With write to terminal capabilities

These have been tested in bash.

```sh
# fh - repeat history
runcmd (){ perl -e 'ioctl STDOUT, 0x5412, $_ for split //, <>' ; }

fh() {
  ([ -n "$ZSH_NAME" ] && fc -l 1 || history) | fzf +s --tac | sed -re 's/^\s*[0-9]+\s*//' | runcmd
}

# fhe - repeat history edit
writecmd (){ perl -e 'ioctl STDOUT, 0x5412, $_ for split //, do{ chomp($_ = <>); $_ }' ; }

fhe() {
  ([ -n "$ZSH_NAME" ] && fc -l 1 || history) | fzf +s --tac | sed -re 's/^\s*[0-9]+\s*//' | writecmd
}
```

```sh
# Another CTRL-R script to insert the selected command from history into the command line/region
__fzf_history ()
{
    builtin history -a;
    builtin history -c;
    builtin history -r;
    builtin typeset \
        READLINE_LINE_NEW="$(
            HISTTIMEFORMAT= builtin history |
            command fzf +s --tac +m -n2..,.. --tiebreak=index --toggle-sort=ctrl-r |
            command sed '
                /^ *[0-9]/ {
                    s/ *\([0-9]*\) .*/!\1/;
                    b end;
                };
                d;
                : end
            '
        )";

        if
                [[ -n $READLINE_LINE_NEW ]]
        then
                builtin bind '"\er": redraw-current-line'
                builtin bind '"\e^": magic-space'
                READLINE_LINE=${READLINE_LINE:+${READLINE_LINE:0:READLINE_POINT}}${READLINE_LINE_NEW}${READLINE_LINE:+${READLINE_LINE:READLINE_POINT}}
                READLINE_POINT=$(( READLINE_POINT + ${#READLINE_LINE_NEW} ))
        else
                builtin bind '"\er":'
                builtin bind '"\e^":'
        fi
}

builtin set -o histexpand;
builtin bind -x '"\C-x1": __fzf_history';
builtin bind '"\C-r": "\C-x1\e^\er"'
```

```sh
# re-wrote the script above
bind '"\C-r": "\C-x1\e^\er"'
bind -x '"\C-x1": __fzf_history';

__fzf_history ()
{
__ehc $(history | fzf --tac --tiebreak=index | perl -ne 'm/^\s*([0-9]+)/ and print "!$1"')
}

__ehc()
{
if
        [[ -n $1 ]]
then
        bind '"\er": redraw-current-line'
        bind '"\e^": magic-space'
        READLINE_LINE=${READLINE_LINE:+${READLINE_LINE:0:READLINE_POINT}}${1}${READLINE_LINE:+${READLINE_LINE:READLINE_POINT}}
        READLINE_POINT=$(( READLINE_POINT + ${#1} ))
else
        bind '"\er":'
        bind '"\e^":'
fi
}
```

### Processes

```sh
# fkill - kill process
fkill() {
  local pid
  pid=$(ps -ef | sed 1d | fzf -m | awk '{print $2}')

  if [ "x$pid" != "x" ]
  then
    echo $pid | xargs kill -${1:-9}
  fi
}
```
```sh
# fkill - kill processes - list only the ones you can kill. Modified the earlier script.
fkill() {
    local pid 
    if [ "$UID" != "0" ]; then
        pid=$(ps -f -u $UID | sed 1d | fzf -m | awk '{print $2}')
    else
        pid=$(ps -ef | sed 1d | fzf -m | awk '{print $2}')
    fi  

    if [ "x$pid" != "x" ]
    then
        echo $pid | xargs kill -${1:-9}
    fi  
}
```

### Systemctl units

The https://github.com/NullSense/fuzzy-sys project implements frequently used systemctl unit file manipulating commands.

### Git

List all available git commands and help with [`git-commands`](https://github.com/hankchanocd/git-commands) 

```sh
# fbr - checkout git branch
fbr() {
  local branches branch
  branches=$(git --no-pager branch -vv) &&
  branch=$(echo "$branches" | fzf +m) &&
  git checkout $(echo "$branch" | awk '{print $1}' | sed "s/.* //")
}

# fbr - checkout git branch (including remote branches)
fbr() {
  local branches branch
  branches=$(git branch --all | grep -v HEAD) &&
  branch=$(echo "$branches" |
           fzf-tmux -d $(( 2 + $(wc -l <<< "$branches") )) +m) &&
  git checkout $(echo "$branch" | sed "s/.* //" | sed "s#remotes/[^/]*/##")
}

# fbr - checkout git branch (including remote branches), sorted by most recent commit, limit 30 last branches
fbr() {
  local branches branch
  branches=$(git for-each-ref --count=30 --sort=-committerdate refs/heads/ --format="%(refname:short)") &&
  branch=$(echo "$branches" |
           fzf-tmux -d $(( 2 + $(wc -l <<< "$branches") )) +m) &&
  git checkout $(echo "$branch" | sed "s/.* //" | sed "s#remotes/[^/]*/##")
}

# fco - checkout git branch/tag
fco() {
  local tags branches target
  branches=$(
    git --no-pager branch --all \
      --format="%(if)%(HEAD)%(then)%(else)%(if:equals=HEAD)%(refname:strip=3)%(then)%(else)%1B[0;34;1mbranch%09%1B[m%(refname:short)%(end)%(end)" \
    | sed '/^$/d') || return
  tags=$(
    git --no-pager tag | awk '{print "\x1b[35;1mtag\x1b[m\t" $1}') || return
  target=$(
    (echo "$branches"; echo "$tags") |
    fzf --no-hscroll --no-multi -n 2 \
        --ansi) || return
  git checkout $(awk '{print $2}' <<<"$target" )
}


# fco_preview - checkout git branch/tag, with a preview showing the commits between the tag/branch and HEAD
fco_preview() {
  local tags branches target
  branches=$(
    git --no-pager branch --all \
      --format="%(if)%(HEAD)%(then)%(else)%(if:equals=HEAD)%(refname:strip=3)%(then)%(else)%1B[0;34;1mbranch%09%1B[m%(refname:short)%(end)%(end)" \
    | sed '/^$/d') || return
  tags=$(
    git --no-pager tag | awk '{print "\x1b[35;1mtag\x1b[m\t" $1}') || return
  target=$(
    (echo "$branches"; echo "$tags") |
    fzf --no-hscroll --no-multi -n 2 \
        --ansi --preview="git --no-pager log -150 --pretty=format:%s '..{2}'") || return
  git checkout $(awk '{print $2}' <<<"$target" )
}

```

```sh
# fcoc - checkout git commit
fcoc() {
  local commits commit
  commits=$(git log --pretty=oneline --abbrev-commit --reverse) &&
  commit=$(echo "$commits" | fzf --tac +s +m -e) &&
  git checkout $(echo "$commit" | sed "s/ .*//")
}
```

```sh
# fshow - git commit browser
fshow() {
  git log --graph --color=always \
      --format="%C(auto)%h%d %s %C(black)%C(bold)%cr" "$@" |
  fzf --ansi --no-sort --reverse --tiebreak=index --bind=ctrl-s:toggle-sort \
      --bind "ctrl-m:execute:
                (grep -o '[a-f0-9]\{7\}' | head -1 |
                xargs -I % sh -c 'git show --color=always % | less -R') << 'FZF-EOF'
                {}
FZF-EOF"
}
```
```sh
alias glNoGraph='git log --color=always --format="%C(auto)%h%d %s %C(black)%C(bold)%cr% C(auto)%an" "$@"'
_gitLogLineToHash="echo {} | grep -o '[a-f0-9]\{7\}' | head -1"
_viewGitLogLine="$_gitLogLineToHash | xargs -I % sh -c 'git show --color=always % | diff-so-fancy'"

# fcoc_preview - checkout git commit with previews
fcoc_preview() {
  local commit
  commit=$( glNoGraph |
    fzf --no-sort --reverse --tiebreak=index --no-multi \
        --ansi --preview="$_viewGitLogLine" ) &&
  git checkout $(echo "$commit" | sed "s/ .*//")
}

# fshow_preview - git commit browser with previews
fshow_preview() {
    glNoGraph |
        fzf --no-sort --reverse --tiebreak=index --no-multi \
            --ansi --preview="$_viewGitLogLine" \
                --header "enter to view, alt-y to copy hash" \
                --bind "enter:execute:$_viewGitLogLine   | less -R" \
                --bind "alt-y:execute:$_gitLogLineToHash | xclip"
}
```
Compare against `master` branch with [`git-stack`](https://github.com/hankchanocd/git-stack) 

```sh
# fcs - get git commit sha
# example usage: git rebase -i `fcs`
fcs() {
  local commits commit
  commits=$(git log --color=always --pretty=oneline --abbrev-commit --reverse) &&
  commit=$(echo "$commits" | fzf --tac +s +m -e --ansi --reverse) &&
  echo -n $(echo "$commit" | sed "s/ .*//")
}
```

```sh
# fstash - easier way to deal with stashes
# type fstash to get a list of your stashes
# enter shows you the contents of the stash
# ctrl-d shows a diff of the stash against your current HEAD
# ctrl-b checks the stash out as a branch, for easier merging
fstash() {
  local out q k sha
  while out=$(
    git stash list --pretty="%C(yellow)%h %>(14)%Cgreen%cr %C(blue)%gs" |
    fzf --ansi --no-sort --query="$q" --print-query \
        --expect=ctrl-d,ctrl-b);
  do
    mapfile -t out <<< "$out"
    q="${out[0]}"
    k="${out[1]}"
    sha="${out[-1]}"
    sha="${sha%% *}"
    [[ -z "$sha" ]] && continue
    if [[ "$k" == 'ctrl-d' ]]; then
      git diff $sha
    elif [[ "$k" == 'ctrl-b' ]]; then
      git stash branch "stash-$sha" $sha
      break;
    else
      git stash show -p $sha
    fi
  done
}
```

Create a gitignore file from [gitignore.io](http://gitignore.io):

https://gist.github.com/phha/cb4f4bb07519dc494609792fb918e167

```sh
# fgst - pick files from `git status -s` 
is_in_git_repo() {
  git rev-parse HEAD > /dev/null 2>&1
}

fgst() {
  # "Nothing to see here, move along"
  is_in_git_repo || return

  local cmd="${FZF_CTRL_T_COMMAND:-"command git status -s"}"

  eval "$cmd" | FZF_DEFAULT_OPTS="--height ${FZF_TMUX_HEIGHT:-40%} --reverse $FZF_DEFAULT_OPTS $FZF_CTRL_T_OPTS" fzf -m "$@" | while read -r item; do
    echo "$item" | awk '{print $2}'
  done
  echo
}
```

Interactive fixup of a commit

```
function git-fixup () {
  git ll -n 20 | fzf | cut -f 1 | xargs git commit --no-verify --fixup
}
```

Usage: 

```
git fixup
git rebase -i master --autosquash
```

[Article on fixup and autosquash](https://fle.github.io/git-tip-keep-your-branch-clean-with-fixup-and-autosquash.html).


[The shell plugin `forgit`](https://github.com/wfxr/forgit) implemented the frequently used commands with some improves(support `bash`, `zsh` and `fish`):

![forgit-ga](https://raw.githubusercontent.com/wfxr/i/master/forgit-ga.png)

![forgit-glo](https://raw.githubusercontent.com/wfxr/i/master/forgit-glo.png)

![forgit-gi](https://raw.githubusercontent.com/wfxr/i/master/forgit-gi.png)

Watch GitHub actions for the current branch, with selection via fzf

```sh
# gh-watch -- watch the current actions
gh-watch() {
    gh run list \
      --branch $(git rev-parse --abbrev-ref HEAD) \
      --json status,name,databaseId |
      jq -r '.[] | select(.status != "completed") | (.databaseId | tostring) + "\t" + (.name)' |
      fzf -1 -0 | awk '{print $1}' | xargs gh run watch
}
```

### [jrnl](https://github.com/jrnl-org/jrnl)

Suggested by [@windisch](https://github.com/windisch).

```sh
# fjrnl - Search JRNL headlines
fjrnl() {                                                                                                                                                                                               
  title=$(jrnl --short | fzf --tac --no-sort) &&                                                                                                                                                         
  jrnl -on "$(echo $title | cut -c 1-16)" $1                                                                                                                                                             
  } 
```

### ctags

```sh
# ftags - search ctags
ftags() {
  local line
  [ -e tags ] &&
  line=$(
    awk 'BEGIN { FS="\t" } !/^!/ {print toupper($4)"\t"$1"\t"$2"\t"$3}' tags |
    cut -c1-80 | fzf --nth=1,2
  ) && ${EDITOR:-vim} $(cut -f3 <<< "$line") -c "set nocst" \
                                      -c "silent tag $(cut -f2 <<< "$line")"
}
```

```sh
# ftags - search ctags with preview
# only works if tags-file was generated with --excmd=number
ftags() {
  local line
  [ -e tags ] &&
  line=$(
    awk 'BEGIN { FS="\t" } !/^!/ {print toupper($4)"\t"$1"\t"$2"\t"$3}' tags |
    fzf \
      --nth=1,2 \
      --with-nth=2 \
      --preview-window="50%" \
      --preview="bat {3} --color=always | tail -n +\$(echo {4} | tr -d \";\\\"\")"
  ) && ${EDITOR:-vim} $(cut -f3 <<< "$line") -c "set nocst" \
                                      -c "silent tag $(cut -f2 <<< "$line")"
}
```

### tmux

```zsh
# zsh; needs setopt re_match_pcre. You can, of course, adapt it to your own shell easily.
tmuxkillf () {
    local sessions
    sessions="$(tmux ls|fzf --exit-0 --multi)"  || return $?
    local i
    for i in "${(f@)sessions}"
    do
        [[ $i =~ '([^:]*):.*' ]] && {
            echo "Killing $match[1]"
            tmux kill-session -t "$match[1]"
        }
    done
}
```

```sh
# tm - create new tmux session, or switch to existing one. Works from within tmux too. (@bag-man)
# `tm` will allow you to select your tmux session via fzf.
# `tm irc` will attach to the irc session (if it exists), else it will create it.

tm() {
  [[ -n "$TMUX" ]] && change="switch-client" || change="attach-session"
  if [ $1 ]; then
    tmux $change -t "$1" 2>/dev/null || (tmux new-session -d -s $1 && tmux $change -t "$1"); return
  fi
  session=$(tmux list-sessions -F "#{session_name}" 2>/dev/null | fzf --exit-0) &&  tmux $change -t "$session" || echo "No sessions found."
}
```

```sh
# fs [FUZZY PATTERN] - Select selected tmux session
#   - Bypass fuzzy finder if there's only one match (--select-1)
#   - Exit if there's no match (--exit-0)
fs() {
  local session
  session=$(tmux list-sessions -F "#{session_name}" | \
    fzf --query="$1" --select-1 --exit-0) &&
  tmux switch-client -t "$session"
}
```

```sh
# ftpane - switch pane (@george-b)
ftpane() {
  local panes current_window current_pane target target_window target_pane
  panes=$(tmux list-panes -s -F '#I:#P - #{pane_current_path} #{pane_current_command}')
  current_pane=$(tmux display-message -p '#I:#P')
  current_window=$(tmux display-message -p '#I')

  target=$(echo "$panes" | grep -v "$current_pane" | fzf +m --reverse) || return

  target_window=$(echo $target | awk 'BEGIN{FS=":|-"} {print$1}')
  target_pane=$(echo $target | awk 'BEGIN{FS=":|-"} {print$2}' | cut -c 1)

  if [[ $current_window -eq $target_window ]]; then
    tmux select-pane -t ${target_window}.${target_pane}
  else
    tmux select-pane -t ${target_window}.${target_pane} &&
    tmux select-window -t $target_window
  fi
}

# In tmux.conf
# bind-key 0 run "tmux split-window -l 12 'bash -ci ftpane'"
```

To search for windows and show which is currently active, add [ftwind](https://github.com/pokey/dotfiles/blob/dade6c88af31458c323e8f0247af510bca7af0f5/bin/ftwind) somewhere in your path.  Then add eg `bind-key f run -b ftwind` to your `tmux.conf`.

### Select pane

Allows you to select pane with `bind-key + 0`.
Requires [`ftpane()` function](https://github.com/junegunn/fzf/wiki/Examples#tmux).

```sh
# Index starts from 1
set-option -g base-index 1

# select-pane (@george-b)
bind-key 0 run "tmux split-window -p 40 'bash -ci ftpane'"
```

### Search entire file system (ALT-`)

ALT-` key will split the current window and start fzf for the entire list of files. The selected files will be pasted on to the original window.

```sh
# fzf-locate
bind-key -n 'M-`' run "tmux split-window -p 40 'tmux send-keys -t #{pane_id} \"$(locate / | fzf -m | paste -sd\\  -)\"'"
```

### kubectl
Add support for kubectl completion with fzf
```bash
# BASH
# Tested kubectl version `v1.23.6`
# Make all kubectl completion fzf
command -v fzf >/dev/null 2>&1 && { 
  source <(kubectl completion bash | sed 's#"${requestComp}" 2>/dev/null#"${requestComp}" 2>/dev/null | head -n -1 | fzf  --multi=0 #g')
}

# ZSH
# Make all kubectl completion fzf
command -v fzf >/dev/null 2>&1 && { 
  source <(kubectl completion zsh | sed 's#${requestComp} 2>/dev/null#${requestComp} 2>/dev/null | head -n -1 | fzf  --multi=0 #g')
}
```
Put this in your `.bashrc` or `.zshrc` instead of:
```bash
source <(kubectl completion bash)
```
It will source kubectl completion with fzf support 
Examples:
```bash
# Will open fzf windows with k8s objects starting with `p`
kubectl get p<tab><tab>

# Will open fzf list of pods.
kubectl get pods <tab><tab>
```

Notes:

This will make all kubectl commands use fzf for completion.<br>
This was tested with (should work with all commands):

- [x] version `v1.23.6`
- [x] bash
- [x] zsh
- commands: 
   - [x] get
   - [x] get pods
   - [x] describe 
   - [x] describe pods
   - [x] logs

Suggested by: [@shmuel-raichman](https://github.com/shmuel-raichman/dotfiles)

### [pass](https://www.passwordstore.org/) and [pass-tomb](https://github.com/roddhjav/pass-tomb)
The below [passfzf](https://git.sr.ht/~mlaparie/passfzf) script is a wrapper for `pass` (the UNIX password store) and `pass-tomb`. Check the source repository for any updates.

![](https://git.sr.ht/~mlaparie/passfzf/blob/master/demo/passfzf_screenshot1.png)

```sh
#!/usr/bin/env bash
# This script unlocks the pass tomb, if any, and then usess fzf to find
# passwords and copy, show, delete, rename and duplicate them, as well as
# to add or generate new passwords, and synchronize them (with git).
# Dependencies: fd, fzf, pass
# Optional dependencies: git, pass-tomb
# 
# MIT License, Copyright © [2022] Mathieu Laparie <mlaparie [at] disr [dot] it>

store="$HOME/.password-store/"
swapfile="/swap/swapfile" # Set path to any swapfile not listed in /etc/fstab

# Open pass tomb, if any
if [[ -e "$HOME/.password.tomb" ]]; then
    sudo swapoff -a && sudo swapoff "${swapfile}" 2> /dev/null
    pass open 2> /dev/null
fi

# Select pass entry
main() {
    while :; do
        clear
        selection=$(fd .gpg ~/.password-store/ -d 8 \
                      | fzf --query "${tmp}" \
                            --prompt="# " \
                            --ansi \
                            --extended \
                            --no-border \
                            --with-nth 5.. \
                            --delimiter "/" \
                            --layout=reverse-list \
                            --no-multi \
                            --cycle \
                            --header='
Ret: copy, C-s: show, C-e: edit, C-r: rename, C-d: duplicate,
C-a: add, C-g: generate and copy new password, C-t: trash
C-p: git pull, M-p: git push, C-c/C-q/Esc: clear query or exit' \
                            --margin='1,2,1,2' \
                            --color='16,gutter:-1' \
                            --bind="tab:down" \
                            --bind="btab:up" \
                            --bind="ctrl-s:execute(echo 'show' > /tmp/passfzfarg)+accept" \
                            --bind="ctrl-e:execute(echo 'edit' > /tmp/passfzfarg)+accept" \
                            --bind="ctrl-r:execute(echo 'mv' > /tmp/passfzfarg)+accept" \
                            --bind="ctrl-d:execute(echo 'cp' > /tmp/passfzfarg)+accept" \
                            --bind="ctrl-a:execute(echo 'add' > /tmp/passfzfarg)+print-query" \
                            --bind="ctrl-g:execute(echo 'generate --clip' > /tmp/passfzfarg)+print-query" \
                            --bind="ctrl-t:execute(echo 'rm' > /tmp/passfzfarg)+accept" \
                            --bind="ctrl-p:abort+execute(echo 'git pull' > /tmp/passfzfarg)" \
                            --bind="alt-p:abort+execute(echo 'git push -u --all' > /tmp/passfzfarg)" \
                            --bind="ctrl-c:execute(echo 'quit' > /tmp/passfzfarg)+cancel" \
                            --bind="ctrl-q:execute(echo 'quit' > /tmp/passfzfarg)+cancel" \
                            --bind="esc:execute(echo 'quit' > /tmp/passfzfarg)+cancel")

        if [[ -f "/tmp/passfzfarg" ]]; then
            arg=$(cat /tmp/passfzfarg)
            rm /tmp/passfzfarg
        else
            arg="show --clip"
        fi

        if ! [[ -v "$selection" ]]; then
            clear
            case "$arg" in
                add)
                    printf "\033[0;32mNew password Directory/Name:\033[0m ${selection}"
                    if [[ -n "$selection" ]]; then
                        printf "\033[0;32m\nPress Return to confirm or type new Directory/Name:\033[0m "
                    fi
                    read -r
                    tmp="${REPLY:=$selection}"
                    pass ${arg} "${tmp}"
                    tmp="${selection:=$tmp}"
                    continue
                    ;;
                mv | cp)
                    tmp=${selection::-4} && tmp=${tmp#"$store"}
                    printf "\033[0;32m\nNew Directory/Name to ${arg} '${tmp}' to:\033[0m "
                    read -r
                    if [[ -n "$REPLY" ]]; then
                        pass ${arg} "${tmp}" "${REPLY}"
                    fi
                    tmp="${REPLY:=$tmp}"
                    continue
                    ;;
                "generate --clip")
                    printf "\033[0;32mNew password Directory/Name:\033[0m ${selection}"
                    if [[ -n "$selection" ]]; then
                        printf "\033[0;32m\nPress Return to confirm or type new Directory/Name:\033[0m "
                    fi
                    read -r
                    tmp="${REPLY:=$selection}"
                    printf "\033[0;32mNumber of characters:\033[0m "
                    read -r
                    pass ${arg} --in-place "${tmp}" "${REPLY}" \
                        2> /dev/null || pass ${arg} "${tmp}" "${REPLY}"
                    tmp="${selection:=$tmp}"
                    printf "\nPress any key to continue. "
                    read -rsn1
                    continue
                    ;;
                quit)
                    pkill -P $$
                    return
                    ;;
                *)
                    if [[ -n "$selection" ]]; then
                        tmp=${selection::-4} && tmp=${tmp#"$store"}
                        pass ${arg} "${tmp}"
                    else
                        pass ${arg}
                    fi
                    printf "\nPress any key to continue. "
                    read -rsn1
                    continue
                    ;;
            esac
        fi
    done
}

main

# Close pass tomb, if any
if [[ -e "$HOME/.password.tomb" ]]; then
    printf "\n"
    pass close
    sudo swapon -a && sudo swapon "${swapfile}" 2> /dev/null
fi

printf "\nPress any key to quit. " && read -rsn1
```

### ASDF

```sh
# Install one or more versions of specified language
# e.g. `vmi rust` # => fzf multimode, tab to mark, enter to install
# if no plugin is supplied (e.g. `vmi<CR>`), fzf will list them for you
# Mnemonic [V]ersion [M]anager [I]nstall
vmi() {
  local lang=${1}

  if [[ ! $lang ]]; then
    lang=$(asdf plugin-list | fzf)
  fi

  if [[ $lang ]]; then
    local versions=$(asdf list-all $lang | fzf --tac --no-sort --multi)
    if [[ $versions ]]; then
      for version in $(echo $versions);
      do; asdf install $lang $version; done;
    fi
  fi
}
```

```sh
# Remove one or more versions of specified language
# e.g. `vmi rust` # => fzf multimode, tab to mark, enter to remove
# if no plugin is supplied (e.g. `vmi<CR>`), fzf will list them for you
# Mnemonic [V]ersion [M]anager [C]lean
vmc() {
  local lang=${1}

  if [[ ! $lang ]]; then
    lang=$(asdf plugin-list | fzf)
  fi

  if [[ $lang ]]; then
    local versions=$(asdf list $lang | fzf -m)
    if [[ $versions ]]; then
      for version in $(echo $versions);
      do; asdf uninstall $lang $version; done;
    fi
  fi
}
```

### Homebrew

```sh
# Install (one or multiple) selected application(s)
# using "brew search" as source input
# mnemonic [B]rew [I]nstall [P]ackage
bip() {
  local inst=$(brew search "$@" | fzf -m)

  if [[ $inst ]]; then
    for prog in $(echo $inst);
    do; brew install $prog; done;
  fi
}
```


```sh
# Update (one or multiple) selected application(s)
# mnemonic [B]rew [U]pdate [P]ackage
bup() {
  local upd=$(brew leaves | fzf -m)

  if [[ $upd ]]; then
    for prog in $(echo $upd);
    do; brew upgrade $prog; done;
  fi
}
```

```sh
# Delete (one or multiple) selected application(s)
# mnemonic [B]rew [C]lean [P]ackage (e.g. uninstall)
bcp() {
  local uninst=$(brew leaves | fzf -m)

  if [[ $uninst ]]; then
    for prog in $(echo $uninst);
    do; brew uninstall $prog; done;
  fi
}
```

```sh
# filename: bi
#!/usr/bin/env zsh
# Fully manage brew installation and suppression, and then some.
# needs zsh, jq, bat
# Inspired by:
# - https://github.com/raycast/extensions/tree/main/extensions/brew
# - https://github.com/junegunn/fzf/wiki/examples#dnf

readonly wait_click="echo $'\n\e[34mPress any key to continue...' && read -rsk 1"
readonly jq_all='
  (. | map(.cask_tokens) | flatten | map(split("/")[-1] + " (cask)"))[]
  , (. | map(.formula_names) | flatten)[]
'

readonly jq_installed='(.formulae[] | .name), (.casks[] | .token + " (cask)")'

readonly tmp_file="$(mktemp)"
trap "rm -f $tmp_file" EXIT

readonly reload="reload%case \$(cat $tmp_file) in
  install) { echo Install mode; brew tap-info --json --installed | jq --raw-output '$jq_all' | sort } ;;
  *) { echo Remove mode; brew info --json=v2 --installed | jq --raw-output '$jq_installed' | sort } ;;
esac%"


readonly state="cat $tmp_file"

readonly nextstate="execute-silent%case \$(cat $tmp_file) in install) echo rm > $tmp_file ;; *) echo install > $tmp_file ;; esac%"

readonly bold="\e[1m"
readonly reset="\e[0m"
readonly italic="\e[3m"
readonly gray="\e[30m"
readonly c="\e[1;36m"
readonly d="\e[1;37m"

readonly help="\
\
${bold}${c}[${d}B${c}]${d}rew ${c}[${d}I${c}]${d}nteractive${reset}

${italic}Tab${reset}     Switch between install mode and remove mode
${italic}Enter${reset}   Select formula or cask for installation or deletion (depends on mode)

${italic}ctrl-s${reset}  Show formula or cask installation [s]ource code
${italic}ctrl-j${reset}  Show formula or cask [J]SON information
${italic}crtl-e${reset}  [E]dit formula or cask source code

${italic}?${reset}       Help (this page)
${italic}ESC${reset}     Quit


It is also advised you use auto-updates, this can be done with:

    brew autoupdate start --upgrade --cleanup --enable-notification

"

echo install > $tmp_file

{ echo "Install mode (? for help)"; brew tap-info --json --installed | jq --raw-output "$jq_all" | sort } |
  fzf --reverse --header-lines=1  --header-first --prompt="$ " \
    --bind="enter:execute(
      if [[ '{2}' == '(cask)' ]]; then
        brew \$($state) --cask {1}
      else
        brew \$($state) {1}
      fi
      $wait_click)+$reload" \
    --bind='ctrl-s:preview(
      bat --color=always $(brew edit --print-path {1}) --style=header
    )' \
    --bind="ctrl-j:preview:brew info --json=v2 {1} | jq '
      (.formulae + .casks)[0] | with_entries(select(try (.value | length > 0)))
    ' | bat --plain --language=json --color=always" \
    --bind="ctrl-e:execute:
      EDITOR='code --wait' brew edit {1}
      bat --color=always --language=markdown --plain <<-MD
        To install the formulae (or cask) you edited with your changes, use:

            brew reinstall --build-from-source {1}
      MD
      $wait_click" \
    --bind="tab:$nextstate+$reload" \
    --bind="?:preview:printf '$help'" \
    --preview='brew info {1} | bat --color=always --language=Markdown --style=plain' \
    --preview-window='bottom,wrap,<13(right)'

```



### Homebrew Cask

```sh
# Install or open the webpage for the selected application 
# using brew cask search as input source
# and display a info quickview window for the currently marked application 
install() {
    local token
    token=$(brew search --casks "$1" | fzf-tmux --query="$1" +m --preview 'brew info {}')
                    
    if [ "x$token" != "x" ]                                                                
    then             
        echo "(I)nstall or open the (h)omepage of $token"
        read input                             
        if [ $input = "i" ] || [ $input = "I" ]; then    
            brew install --cask $token                   
        fi                                                                                    
        if [ $input = "h" ] || [ $input = "H" ]; then                                         
            brew home $token                     
        fi                                           
    fi                             
}                                              
```


```sh
# Uninstall or open the webpage for the selected application 
# using brew list as input source (all brew cask installed applications) 
# and display a info quickview window for the currently marked application
uninstall() {                                                                     
    local token                                                                   
    token=$(brew list --casks | fzf-tmux --query="$1" +m --preview 'brew info {}')
                                                                                  
    if [ "x$token" != "x" ]                                                       
    then                                                                          
        echo "(U)ninstall or open the (h)omepae of $token"                        
        read input                                                                
        if [ $input = "u" ] || [ $input = "U" ]; then                             
            brew uninstall --cask $token                                          
        fi                                                                        
        if [ $input = "h" ] || [ $token = "h" ]; then                             
            brew home $token                                                      
        fi                                                                        
    fi                                                                            
}                                                                                 
```
### DNF

Interactively Install, Remove, Upgrade and Fuzzy search DNF packages using fzf

```sh

#!/usr/bin/bash
readonly basename="$(basename "$0")"

if ! hash fzf &> /dev/null; then
    printf 'Error: Missing dep: fzf is required to use %s.\n' "${basename}" >&2
    exit 64
fi

#Colors
declare -r esc=$'\033'
declare -r BLUE="${esc}[1m${esc}[34m"
declare -r RED="${esc}[31m"
declare -r GREEN="${esc}[32m"
declare -r YELLOW="${esc}[33m"
declare -r CYAN="${esc}[36m"
# Base commands
readonly QRY="dnf --cacheonly --quiet repoquery "
readonly PRVW="dnf --cacheonly --quiet --color=always info"
readonly QRY_PRFX='  '
readonly QRY_SFFX=' > '
# Install mode
readonly INS_QRYS="${QRY} --qf '${CYAN}%{name}'"
readonly INS_PRVW="${PRVW}"
readonly INS_PRMPT="${CYAN}${QRY_PRFX}Install packages${QRY_SFFX}"
# Remove mode
readonly RMV_QRYS="${QRY} --installed --qf '${RED}%{name}'"
readonly RMV_PRVW="${PRVW} --installed"
readonly RMV_PRMPT="${RED}${QRY_PRFX}Remove packages${QRY_SFFX}"
# Remove-userinstalled mode
readonly RUI_QRYS="${QRY} --userinstalled --qf '${YELLOW}%{name}'"
readonly RUI_PRVW="${PRVW} --installed"
readonly RUI_PRMPT="${YELLOW}${QRY_PRFX}Remove User-Installed${QRY_SFFX}"
# Updates mode
readonly UPD_QRY="${QRY} --upgrades --qf '${GREEN}%{name}'"
readonly UPD_QRYS="if [[ $(${UPD_QRY} | wc -c) -ne 0 ]]; then ${UPD_QRY}; else echo ${GREEN}No updates available.; echo Try refreshing metadata cache...; fi"
readonly UPD_PRVW="${PRVW}"
readonly UPD_PRMPT="${GREEN}${QRY_PRFX}Upgrade packages${QRY_SFFX}"

mapfile -d '' fhelp <<-EOF

        "${basename}"
        Interactive package manager for Fedora

        Alt-i       Install mode (default)
        Alt-r       Remove mode
        Alt-e       Remove User-Installed mode
        Alt-u       Updates mode
        Alt-m       Update package metadata cache

        Enter       Confirm selection
        Tab         Mark package ()
        Shift-Tab   Unmark package
        Ctrl-a      Select all

        ?           Help (this page)
        ESC         Quit
EOF

declare tmp_file
if tmp_file="$(mktemp --tmpdir "${basename}".XXXXXX)"; then
    printf 'in' > "${tmp_file}" &&
    SHELL='/bin/bash' \
    FZF_DEFAULT_COMMAND="${INS_QRYS}" \
  fzf \
    --ansi \
  --multi \
  --query=$* \
  --header=" ${basename} | Press Alt+? for help or ESC to quit" \
  --header-first \
  --prompt="${INS_PRMPT}" \
  --marker=' ' \
  --preview-window='right,67%,wrap' \
  --preview="${INS_PRVW} {1}" \
  --bind="enter:execute(if grep -q 'in' \"${tmp_file}\"; then sudo dnf install {+}; 
        elif grep -q 'rm' \"${tmp_file}\"; then sudo dnf remove {+}; \
        elif grep -q 'up' \"${tmp_file}\"; then sudo dnf upgrade {+}; fi; \
        read -s -r -n1 -p $'\n${BLUE}Press any key to continue...' && printf '\n')" \
  --bind="alt-i:unbind(alt-i)+reload(${INS_QRYS})+change-preview(${INS_PRVW} {1})+change-prompt(${INS_PRMPT})+execute-silent(printf 'in' > \"${tmp_file}\")+first+rebind(alt-r,alt-e,alt-u)" \
  --bind="alt-r:unbind(alt-r)+reload(${RMV_QRYS})+change-preview(${RMV_PRVW} {1})+change-prompt(${RMV_PRMPT})+execute-silent(printf 'rm' > \"${tmp_file}\")+first+rebind(alt-i,alt-e,alt-u)" \
  --bind="alt-e:unbind(alt-e)+reload(${RUI_QRYS})+change-preview(${RUI_PRVW} {1})+change-prompt(${RUI_PRMPT})+execute-silent(printf 'rm' > \"${tmp_file}\")+first+rebind(alt-i,alt-r,alt-u)" \
  --bind="alt-u:unbind(alt-u)+reload(${UPD_QRYS})+change-preview(${UPD_PRVW} {1})+change-prompt(${UPD_PRMPT})+execute-silent(printf 'up' > \"${tmp_file}\")+first+rebind(alt-i,alt-r,alt-e)" \
  --bind="alt-m:execute(sudo dnf makecache;read -s -r -n1 -p $'\n${BLUE}Press any key to continue...' && printf '\n')" \
  --bind="alt-?:preview(printf \"${fhelp[0]}\")" \
  --bind="ctrl-a:select-all"
    
    rm -f "${tmp_file}" &> /dev/null
else
    printf 'Error: Failed to create tmp file. $TMPDIR (or /tmp if $TMPDIR is unset) may not be writable.\n' >&2
    exit 65
fi
```

### Flatpak
#### flatpak-widget (for zsh)
![](https://user-images.githubusercontent.com/114978689/201288486-af070edc-b1c4-4535-bb48-1d51453f501d.png)
```sh
# CLR=$(for i in {0..7}; do echo "tput setaf $i"; done)
BLK=\$(tput setaf 0); RED=\$(tput setaf 1); GRN=\$(tput setaf 2); YLW=\$(tput setaf 3); BLU=\$(tput setaf 4); 
MGN=\$(tput setaf 5); CYN=\$(tput setaf 6); WHT=\$(tput setaf 7); BLD=\$(tput bold); RST=\$(tput sgr0);    

AWK_VAR="awk -v BLK=${BLK} -v RED=${RED} -v GRN=${GRN} -v YLW=${YLW} -v BLU=${BLU} -v MGN=${MGN} -v CYN=${CYN} -v WHT=${WHT} -v BLD=${BLD} -v RST=${RST}"

# Searches only from flathub repository
fzf-flatpak-install-widget() {
  flatpak remote-ls flathub --cached --columns=app,name,description \
  | awk -v cyn=$(tput setaf 6) -v blu=$(tput setaf 4) -v bld=$(tput bold) -v res=$(tput sgr0) \
  '{
    app_info=""; 
    for(i=2;i<=NF;i++){
      app_info=cyn app_info" "$i 
    };
    print blu bld $2" -" res app_info "|" $1
    }' \
  | column -t -s "|" -R 3 \
  | fzf \
    --ansi \
    --with-nth=1.. \
    --prompt="Install > " \
    --preview-window "nohidden,40%,<50(down,50%,border-rounded)" \
    --preview "flatpak --system remote-info flathub {-1} | $AWK_VAR -F\":\" '{print YLW BLD \$1 RST WHT \$2}'" \
    --bind "enter:execute(flatpak install flathub {-1})" # when pressed enter it doesn't showing the key pressed but it is reading the input
  zle reset-prompt
}
bindkey '^[f^[i' fzf-flatpak-install-widget #alt-f + alt-i
zle -N fzf-flatpak-install-widget

fzf-flatpak-uninstall-widget() {
  touch /tmp/uns
  flatpak list --columns=application,name \
  | awk -v cyn=$(tput setaf 6) -v blu=$(tput setaf 4) -v bld=$(tput bold) -v res=$(tput sgr0)  \
  '{
    app_id="";
    for(i=2;i<=NF;i++){
      app_id" "$i
    };
    print bld cyn $2 " - " res blu $1
   }' \
  | column -t \
  | fzf \
    --ansi \
    --with-nth=1.. \
    --prompt="  Uninstall > " \
    --header="M-u: Uninstall | M-r: Run" \
    --header-first \
    --preview-window "nohidden,50%,<50(up,50%,border-rounded)" \
    --preview  "flatpak info {3} | $AWK_VAR -F\":\" '{print RED BLD  \$1 RST \$2}'" \
    --bind "alt-r:change-prompt(Run > )+execute-silent(touch /tmp/run && rm -r /tmp/uns)" \
    --bind "alt-u:change-prompt(Uninstall > )+execute-silent(touch /tmp/uns && rm -r /tmp/run)" \
    --bind "enter:execute(
    if [ -f /tmp/uns ]; then 
      flatpak uninstall {3}; 
    elif [ -f /tmp/run ]; then
      flatpak run {3}; 
    fi
    )" # same as the install one but when pressed  entered the message is something like this 
# "Proceed with these changes to the system installation? [Y/n]:" but it will uninstall the selected app weird but idk y
  rm -f /tmp/{uns,run} &> /dev/null
  zle reset-prompt
}
bindkey '^[f^[u' fzf-flatpak-uninstall-widget #alt-f + alt-u
zle -N fzf-flatpak-uninstall-widget
```

### Conda

#### conda-activate (for bash)

Fuzzy conda environment selection with python version display and `conda tree leaves` preview.

![image](https://user-images.githubusercontent.com/36678697/214879546-32e7c184-3a82-4660-9baa-ea73deff5127.png)

```sh
fzf-conda-activate () {
    choice=(
        $(
            conda env list |
            sed 's/\*/ /;1,2d' |
            xargs -I {} bash -c '
                name_path=( {} );
                py_version=( $(${name_path[1]}/bin/python --version) );
                echo ${name_path[0]} ${py_version[1]} ${name_path[1]}
            ' |
            column -t |
            fzf --layout=reverse \
                --info=inline \
                --border=rounded \
                --height=40 \
                --preview-window="right:30%" \
                --preview-label=" conda tree leaves " \
                --preview=$'
                    conda tree -p {3} leaves |
                    perl -F\'[^\\w-_]\' -lae \'print for grep /./, @F;\' |
                    sort
                '
        )
    )
    [[ -n "$choice" ]] && conda activate "$choice"
}
```

### v

#### Inspired by [v](https://github.com/rupa/v). Opens files in ~/.viminfo

```sh
# v - open files in ~/.viminfo
v() {
  local files
  files=$(grep '^>' ~/.viminfo | cut -c3- |
          while read line; do
            [ -f "${line/\~/$HOME}" ] && echo "$line"
          done | fzf-tmux -d -m -q "$*" -1) && vim ${files//\~/$HOME}
}
```

#### With [fasd](https://github.com/clvv/fasd).

Suggested by [@epiloque](https://github.com/epiloque)

```sh
v() {
  local file
  file="$(fasd -Rfl "$1" | fzf -1 -0 --no-sort +m)" && vi "${file}" || return 1
}
```

Suggested by [@mazinbokhari](https://github.com/mazinbokhari/dotfiles)
```
# fasd & fzf change directory - open best matched file using `fasd` if given argument, filter output of `fasd` using `fzf` else
v() {
    [ $# -gt 0 ] && fasd -f -e ${EDITOR} "$*" && return
    local file
    file="$(fasd -Rfl "$1" | fzf -1 -0 --no-sort +m)" && vi "${file}" || return 1
}
```

### cd

#### Integration with [zsh-interactive-cd](https://github.com/changyuheng/zsh-interactive-cd).

Fish like interactive tab completion for cd in zsh.

![zsh-interactive-cd-demo](https://raw.githubusercontent.com/changyuheng/zsh-interactive-cd/master/demo.gif)

#### Interactive cd
Suggested by [@mgild](https://github.com/mgild)
Like normal cd but opens an interactive navigation window when called with no arguments.  For ls, use -FG instead of --color=always on osx.
```sh
function cd() {
    if [[ "$#" != 0 ]]; then
        builtin cd "$@";
        return
    fi
    while true; do
        local lsd=$(echo ".." && ls -p | grep '/$' | sed 's;/$;;')
        local dir="$(printf '%s\n' "${lsd[@]}" |
            fzf --reverse --preview '
                __cd_nxt="$(echo {})";
                __cd_path="$(echo $(pwd)/${__cd_nxt} | sed "s;//;/;")";
                echo $__cd_path;
                echo;
                ls -p --color=always "${__cd_path}";
        ')"
        [[ ${#dir} != 0 ]] || return 0
        builtin cd "$dir" &> /dev/null
    done
}
```

### autojump

#### Integration with [autojump](https://github.com/wting/autojump)

like normal autojump when used with arguments but displays an fzf prompt when used without

<img width="1491" alt="image" src="https://user-images.githubusercontent.com/1673006/226426683-f5851d28-0e30-476f-a63a-9a9958579b59.png">

```sh
j() {
    local preview_cmd="ls {2..}"
    if command -v exa &> /dev/null; then
        preview_cmd="exa -l {2}"
    fi

    if [[ $# -eq 0 ]]; then
                 cd "$(autojump -s | sort -k1gr | awk -F : '$1 ~ /[0-9]/ && $2 ~ /^\s*\// {print $1 $2}' | fzf --height 40% --reverse --inline-info --preview "$preview_cmd" --preview-window down:50% | cut -d$'\t' -f2- | sed 's/^\s*//')"
    else
        cd $(autojump $@)
    fi
}
```

### z

#### Integration with [z](https://github.com/rupa/z).

like normal z when used with arguments but displays an fzf prompt when used without.

```sh
unalias z 2> /dev/null
z() {
  [ $# -gt 0 ] && _z "$*" && return
  cd "$(_z -l 2>&1 | fzf --height 40% --nth 2.. --reverse --inline-info +s --tac --query "${*##-* }" | sed 's/^[0-9,.]* *//')"
}
```

Here is another version that also supports relaunching z with the arguments
for the previous command as the default input by using zz

```sh
unalias z
z() {
  if [[ -z "$*" ]]; then
    cd "$(_z -l 2>&1 | fzf +s --tac | sed 's/^[0-9,.]* *//')"
  else
    _last_z_args="$@"
    _z "$@"
  fi
}

zz() {
  cd "$(_z -l 2>&1 | sed 's/^[0-9,.]* *//' | fzf -q "$_last_z_args")"
}
```

Since z is not very optimal located on a qwerty keyboard I have these aliased as j and jj

```sh
alias j=z
alias jj=zz
```

#### With [fz](https://github.com/changyuheng/fz).

It's yet another z integration. In this version, fuzzy search is enabled with tab completion.

![fz-demo](https://raw.githubusercontent.com/changyuheng/fz/master/fz-demo.gif)

#### With [fasd](https://github.com/clvv/fasd).

Suggested by [@l4u](https://github.com/l4u) and [@epiloque](https://github.com/epiloque)

```sh
z() {
  local dir
  dir="$(fasd -Rdl "$1" | fzf -1 -0 --no-sort +m)" && cd "${dir}" || return 1
}
```

Suggested by [@mazinbokhari](https://github.com/mazinbokhari/dotfiles)
```
# fasd & fzf change directory - jump using `fasd` if given argument, filter output of `fasd` using `fzf` else
z() {
    [ $# -gt 0 ] && fasd_cd -d "$*" && return
    local dir
    dir="$(fasd -Rdl "$1" | fzf -1 -0 --no-sort +m)" && cd "${dir}" || return 1
}
```


### Shell bookmarks

Yet another useful application for `fzf`: shell bookmarks. It looks as follows:
![cdg_demo](http://dmitryfrank.com/_media/articles/cdg_recorded.gif)

See complete article for details: [Fuzzy bookmarks for your shell](http://dmitryfrank.com/articles/shell_shortcuts)

### Google Chrome

#### Browsing history

OSX/Linux Version:
```sh
# c - browse chrome history
c() {
  local cols sep google_history open
  cols=$(( COLUMNS / 3 ))
  sep='{::}'

  if [ "$(uname)" = "Darwin" ]; then
    google_history="$HOME/Library/Application Support/Google/Chrome/Default/History"
    open=open
  else
    google_history="$HOME/.config/google-chrome/Default/History"
    open=xdg-open
  fi
  cp -f "$google_history" /tmp/h
  sqlite3 -separator $sep /tmp/h \
    "select substr(title, 1, $cols), url
     from urls order by last_visit_time desc" |
  awk -F $sep '{printf "%-'$cols's  \x1b[36m%s\x1b[m\n", $1, $2}' |
  fzf --ansi --multi | sed 's#.*\(https*://\)#\1#' | xargs $open > /dev/null 2> /dev/null
}
```

Windows Version:
```ps1
Function c() {
  $Columns = [int]((get-host).ui.rawui.WindowSize.Width / 3)
  $Separator ='{::}'
  $History = "$env:USERPROFILE\AppData\Local\Google\Chrome\User Data\Default\History"
  $TempFile = New-TemporaryFile
  $Query = "select substr(title, 1, $Columns), url from urls order by last_visit_time desc"
  Copy-Item $History -Destination $TempFile
  @(sqlite3 -separator "$Separator" "$TempFile" "$Query") |
  ForEach-Object {
    $Title, $Url = ($_ -split $Separator)[0, 1]
    "$($Title.PadRight($Columns))  `e[36m$Url`e[0m"
  } | fzf --ansi --multi | ForEach-Object{start-process "chrome.exe" ($_ -replace '.*(https*://)', '$1'),'--profile-directory="Default"'}
}
```

#### Bookmarks

Chrome Bookmarks browser with [jq](https://stedolan.github.io/jq/) for OS X
```
# b - browse chrome bookmarks
b() {
     bookmarks_path=~/Library/Application\ Support/Google/Chrome/Default/Bookmarks

     jq_script='
        def ancestors: while(. | length >= 2; del(.[-1,-2]));
        . as $in | paths(.url?) as $key | $in | getpath($key) | {name,url, path: [$key[0:-2] | ancestors as $a | $in | getpath($a) | .name?] | reverse | join("/") } | .path + "/" + .name + "\t" + .url'

    jq -r "$jq_script" < "$bookmarks_path" \
        | sed -E $'s/(.*)\t(.*)/\\1\t\x1b[36m\\2\x1b[m/g' \
        | fzf --ansi \
        | cut -d$'\t' -f2 \
        | xargs open
}
```

Chrome Bookmarks browser with [jq](https://stedolan.github.io/jq/) for Windows
```
# b - browse chrome bookmarks
Function b() {
  $Bookmarks = "$env:LOCALAPPDATA\Google\Chrome\User Data\Default\Bookmarks"

  $JqScript=@"
     def ancestors: while(. | length >= 2; del(.[-1,-2]));
     . as `$in | paths(.url?) as `$key | `$in | getpath(`$key) | {name,url, path: [`$key[0:-2] | ancestors as `$a | `$in | getpath(`$a) | .name?] | reverse | join(\`"/\`") } | .path + \`"/\`" + .name + \`"|\`" + .url
"@
  
     Get-Content "$Bookmarks" | jq -r "$JqScript" `
     | ForEach-Object { 
       $_ -replace "(.*)\|(.*)", "`$1`t`e[36m`$2`e[0m"
      } `
     | fzf --ansi `
     | ForEach-Object {
       start-process "chrome.exe" ($_ -split "`t")[1],'--profile-directory="Default"'
      }
}
```

Chrome Bookmarks browser with ruby

https://gist.github.com/junegunn/15859538658e449b886f (for OS X)

### Browsing

```sh
# Simple replacement for urlview in X
# https://github.com/d630/bin/blob/master/furlview
% furlview ( - | FILE ... )
```

### NPM
[npm-fzf](https://github.com/hankchanocd/npm-fzf) - Fuzzy search npm modules with `fzf`.

```
# run npm script (requires jq)
fns() {
  local script
  script=$(cat package.json | jq -r '.scripts | keys[] ' | sort | fzf) && npm run $(echo "$script")
}
```

### Locate

`Alt-i` to paste item from `locate /` output (zsh only):

```sh
# ALT-I - Paste the selected entry from locate output into the command line
fzf-locate-widget() {
  local selected
  if selected=$(locate / | fzf -q "$LBUFFER"); then
    LBUFFER=$selected
  fi
  zle redisplay
}
zle     -N    fzf-locate-widget
bindkey '\ei' fzf-locate-widget
```

### mpd

You must have [`mpc`](http://www.musicpd.org/clients/mpc/) installed on your computer in order to use this function.

```sh
fmpc() {
  local song_position
  song_position=$(mpc -f "%position%) %artist% - %title%" playlist | \
    fzf-tmux --query="$1" --reverse --select-1 --exit-0 | \
    sed -n 's/^\([0-9]\+\)).*/\1/p') || return 1
  [ -n "$song_position" ] && mpc -q play $song_position
}
```

#### clerk

[clerk](https://github.com/carnager/clerk) is a simple MPD client using rofi or fzf.

![](https://camo.githubusercontent.com/58bc51b41274d612f8e6fd4bc9609a5864102e3a/68747470733a2f2f7069632e35333238302e64652f636c65726b2e706e67)

### Readline

```sh
# CTRL-X-1 - Invoke Readline functions by name
__fzf_readline ()
{
    builtin eval "
        builtin bind ' \
            \"\C-x3\": $(
                builtin bind -l | command fzf +s +m --toggle-sort=ctrl-r
            ) \
        '
    "
}

builtin bind -x '"\C-x2": __fzf_readline';
builtin bind '"\C-x1": "\C-x2\C-x3"'
```

### RVM

```sh
# RVM integration
frb() {
  local rb
  rb=$((echo system; rvm list | grep ruby | cut -c 4-) |
       awk '{print $1}' |
       fzf-tmux -l 30 +m --reverse) && rvm use $rb
}
```

### Vagrant

You must have [`jq`](https://github.com/stedolan/jq) installed on your computer in order to use this function.

```sh
vs(){
  #List all vagrant boxes available in the system including its status, and try to access the selected one via ssh
  cd $(cat ~/.vagrant.d/data/machine-index/index | jq '.machines[] | {name, vagrantfile_path, state}' | jq '.name + "," + .state  + "," + .vagrantfile_path'| sed 's/^"\(.*\)"$/\1/'| column -s, -t | sort -rk 2 | fzf | awk '{print $3}'); vagrant ssh
}
```

### Wrapper
When you have defined an alias or wrapper for some command, you might want to inherit the completion from a parent function. Find out the completion used for your command and do:

```sh
_fzf_complete_myssh() {
  _fzf_complete_ssh "$@"
}
```

See also `_fzf_setup_completion` in the completion source code.

### LastPass CLI
Search through your LastPass vault with [LastPass CLI](https://github.com/lastpass/lastpass-cli) and copy password to clipboard.

```sh
$ lpass show -c --password $(lpass ls  | fzf | awk '{print $(NF)}' | sed 's/\]//g')
```

### [fzf-marker](https://github.com/liangguohuan/fzf-marker)
The terminal command Tweak https://github.com/pindexis/marker.git

[![asciicast](https://asciinema.org/a/122370.png)](https://asciinema.org/a/122370?autoplay=1)

```sh
# marker templete select
_fzf_marker_main_widget() {
  if echo "$BUFFER" | grep -q -P "{{"; then
    _fzf_marker_placeholder
  else
    local selected
    if selected=$(cat ${FZF_MARKER_CONF_DIR:-~/.config/marker}/*.txt |
      sed -e "s/\(^[a-zA-Z0-9_-]\+\)\s/${FZF_MARKER_COMMAND_COLOR:-\x1b[38;5;255m}\1\x1b[0m /" \
          -e "s/\s*\(#\+\)\(.*\)/${FZF_MARKER_COMMENT_COLOR:-\x1b[38;5;8m}  \1\2\x1b[0m/" |
      fzf --bind 'tab:down,btab:up' --height=80% --ansi -q "$LBUFFER"); then
      LBUFFER=$(echo $selected | sed 's/\s*#.*//')
    fi
    zle redisplay
  fi
}

_fzf_marker_placeholder() {
  local strp pos placeholder
  strp=$(echo $BUFFER | grep -Z -P -b -o "\{\{[\w]+\}\}")
  strp=$(echo "$strp" | head -1)
  pos=$(echo $strp | cut -d ":" -f1)
  placeholder=$(echo $strp | cut -d ":" -f2)
  if [[ -n "$1" ]]; then
    BUFFER=$(echo $BUFFER | sed -e "s/{{//" -e "s/}}//")
    CURSOR=$(($pos + ${#placeholder} - 4))
  else
    BUFFER=$(echo $BUFFER | sed "s/$placeholder//")
    CURSOR=pos
  fi
}

_fzf_marker_placeholder_widget() { _fzf_marker_placeholder "defval" }

zle -N _fzf_marker_main_widget
zle -N _fzf_marker_placeholder_widget
bindkey "${FZF_MARKER_MAIN_KEY:-\C-@}" _fzf_marker_main_widget
bindkey "${FZF_MARKER_PLACEHOLDER_KEY:-\C-v}" _fzf_marker_placeholder_widget
```


### Search for academic PDFs by author, title, journal, institution

Search for all pdf files. FZF will match the query against any text found on the first page of the PDF. For instance, one can query for author names, article title, journal, institutions, keywords. It works by extracting the text on the first page of the PDF using ``pdftotext``.   
The selected file is then opened by the default pdf viewer. 

Requires the [pdftotext](https://en.wikipedia.org/wiki/Pdftotext) command line tool. Tested on Ubuntu 17.10 on bash and zsh.

![](https://user-images.githubusercontent.com/1019692/34446795-12229072-ecac-11e7-856a-ec0df0de60ae.gif)

The script is now given at https://github.com/bellecp/fast-p

### BibTeX

Search records in BibTeX files using FZF, select records to cite, or pretty print in markdown. With vim integration.

![](https://d.pr/i/8uXzLx+ "screenshot")

This plugin is at https://github.com/msprev/fzf-bibtex

### Docker

```sh
# Select a docker container to start and attach to
function da() {
  local cid
  cid=$(docker ps -a | sed 1d | fzf -1 -q "$1" | awk '{print $1}')

  [ -n "$cid" ] && docker start "$cid" && docker attach "$cid"
}
```

```sh
# Select a running docker container to stop
function ds() {
  local cid
  cid=$(docker ps | sed 1d | fzf -q "$1" | awk '{print $1}')

  [ -n "$cid" ] && docker stop "$cid"
}
```

```sh
# Select a docker container to remove
function drm() {
  local cid
  cid=$(docker ps -a | sed 1d | fzf -q "$1" | awk '{print $1}')

  [ -n "$cid" ] && docker rm "$cid"
}
```

```sh
# Same as above, but allows multi selection:
function drm() {
  docker ps -a | sed 1d | fzf -q "$1" --no-sort -m --tac | awk '{ print $1 }' | xargs -r docker rm
}
```


```sh
# Select a docker image or images to remove
function drmi() {
  docker images | sed 1d | fzf -q "$1" --no-sort -m --tac | awk '{ print $3 }' | xargs -r docker rmi
}
```

### buku
Search and open website bookmarks stored in a [buku](https://github.com/jarun/Buku) database.

```sh
# BUKU bookmark manager
# get bookmark ids
get_buku_ids() {
    buku -p -f 5 | fzf --tac --layout=reverse-list -m | \
      cut -d $'\t' -f 1
    # awk -F= '{print $1}'
    # cut -d $'\t' -f 1
}

# buku open
fb() {
    # save newline separated string into an array
    ids=( $(get_buku_ids) )

    echo buku --open ${ids[@]}

    [[ -z $ids ]] && return 1 # return error if has no bookmark selected

    buku --open ${ids[@]}
}

# buku update
fbu() {
    # save newline separated string into an array
    ids=( $(get_buku_ids) )

    echo buku --update ${ids[@]} $@

    [[ -z $ids ]] && return 0 # return if has no bookmark selected

    buku --update ${ids[@]} $@
}

# buku write
fbw() {
    # save newline separated string into an array
    ids=( $(get_buku_ids) )
    # print -l $ids

    # update websites
    for i in ${ids[@]}; do
        echo buku --write $i
        buku --write $i
    done
}

```

...And a nicer looking alternative, using [fzfmenu](#fzf-as-dmenu-replacement).

```sh
#!/usr/bin/env bash
# fb - buku bookmarks fzfmenu opener
buku -p -f 4 |
    awk -F $'\t' '{
        if ($4 == "")
            printf "%s \t\x1b[38;5;208m%s\033[0m\n", $2, $3
        else
            printf "%s \t\x1b[38;5;124m%s \t\x1b[38;5;208m%s\033[0m\n", $2, $4, $3
    }' |
    fzfmenu --tabstop 1 --ansi -d $'\t' --with-nth=2,3 \
        --preview-window='bottom:10%' --preview 'printf "\x1b[38;5;117m%s\033[0m\n" {1}' |
        awk '{print $1}' | xargs -d '\n' -I{} -n1 -r xdg-open '{}'
```

If you have `sqlite` installed - you can use it to query DB directly (which takes about ~2ms compared to buku's ~100ms).

To do that, replace the `buku -p -f 4` with

```sh
sqlite3 -separator $'\t' "$HOME/.local/share/buku/bookmarks.db" "SELECT id,URL,metadata,tags FROM bookmarks" | awk -F $'\t' '{gsub(/(^,|,$)/,"",$4); printf "%s\t%s\t%s\t%s\n", $1, $2, $3, $4}'
```

Now you can bind it on some key, e.g. with [sxhkd](https://github.com/baskerville/sxhkd) in sxhkdrc:

```
super + shift + u
  fb
```

![demo](https://i.imgur.com/Vc3GKhW.png)


### i3
Fuzzy search desktop entries and launch the appropriate application.
```
i3-dmenu-desktop --dmenu=fzf
```
Display in a floating window. Add this to your i3 config file (this example uses termite, but any terminal emulator that allows setting the window title can be used):
```
bindsym $mod+d exec --no-startup-id termite -t 'fzf-menu' -e 'i3-dmenu-desktop --dmenu=fzf'
for_window [title="fzf-menu"] floating enable
```

### Man pages
Quickly display a man page using fzf and fd.
`MANPATH` has to be set to a single directory (usually `/usr/share/man`).
Accepts an optional argument for the manual section (defaults to 1).

```sh
man-find() {
    f=$(fd . $MANPATH/man${1:-1} -t f -x echo {/.} | fzf) && man $f
}
```

```sh
fman() {
    man -k . | fzf --prompt='Man> ' | awk '{print $1}' | xargs -r man
}
```

```sh
# Same as above, but with previews and works correctly with man pages in different sections.
function fman() {
    man -k . | fzf -q "$1" --prompt='man> '  --preview $'echo {} | tr -d \'()\' | awk \'{printf "%s ", $2} {print $1}\' | xargs -r man' | tr -d '()' | awk '{printf "%s ", $2} {print $1}' | xargs -r man
}
```

Same as above, but the preview is colored with [bat](https://github.com/sharkdp/bat)
```sh
fman() {
    man -k . | fzf -q "$1" --prompt='man> '  --preview $'echo {} | tr -d \'()\' | awk \'{printf "%s ", $2} {print $1}\' | xargs -r man | col -bx | bat -l man -p --color always' | tr -d '()' | awk '{printf "%s ", $2} {print $1}' | xargs -r man
}
# Get the colors in the opened man page itself
export MANPAGER="sh -c 'col -bx | bat -l man -p --paging always'"
```

Same as above, but for Termux (Android). man -k behaves differently in Termux, compared to Ubuntu.
```sh
#!/data/data/com.termux/files/usr/bin/bash
export MANPAGER=~/bin/pman
man -k . | fzf --height=100% --preview-window=up -q "$1" --prompt='man> ' \
    --preview $"echo {} | perl -p -e 's/[-\w, ]*, //; s/\((\d+).*/ \1/' \
    | awk '{printf \"%s \", \$2} {print \$1}' \
    | xargs -r man \
    | col -bx | bat -l man -p --color always " \
    | perl -p -e 's/[-\w, ]*, //; s/\((\d+).*/ \1/' \
    | awk '{printf "%s ", $2} {print $1}' \
    | xargs -n 2 -r man
```
Here is ~/bin/pman:
```sh
#!/data/data/com.termux/files/usr/bin/bash
cat $* | col -bx | bat -l man -p --paging always
```

#### fzf-man-pages widget (for zsh)
Same functionality as above 
- with colored and syntax higlighting 
- doesn't exit or close fzf when pressed enter

![](https://user-images.githubusercontent.com/114978689/201280168-550fe07f-a26a-4f8f-8ec9-3c1be05b3316.png)

```sh

fzf-man-widget() {
  batman="man {1} | col -bx | bat --language=man --plain --color always --theme=\"Monokai Extended\""
   man -k . | sort \
   | awk -v cyan=$(tput setaf 6) -v blue=$(tput setaf 4) -v res=$(tput sgr0) -v bld=$(tput bold) '{ $1=cyan bld $1; $2=res blue;} 1' \
   | fzf  \
      -q "$1" \
      --ansi \
      --tiebreak=begin \
      --prompt=' Man > '  \
      --preview-window '50%,rounded,<50(up,85%,border-bottom)' \
      --preview "${batman}" \
      --bind "enter:execute(man {1})" \
      --bind "alt-c:+change-preview(cht.sh {1})+change-prompt(ﯽ Cheat > )" \
      --bind "alt-m:+change-preview(${batman})+change-prompt( Man > )" \
      --bind "alt-t:+change-preview(tldr --color=always {1})+change-prompt(ﳁ TLDR > )"
  zle reset-prompt
}
# `Ctrl-H` keybinding to launch the widget (this widget works only on zsh, don't know how to do it on bash and fish (additionaly pressing`ctrl-backspace` will trigger the widget to be executed too because both share the same keycode)
bindkey '^h' fzf-man-widget
zle -N fzf-man-widget
# Icon used is nerdfont
```

### Python Behave BDD

<kbd>Tab</kbd> copy the step name.

<kbd>Enter</kbd> copy the step location
```sh
fbehave() {
    behave "$@" -d -f steps 2> /dev/null | \
    awk -F " *# " '/\s*(Given|When|Then|\*)/ {print $1"\t"$2}' | \
    fzf -d "\t" --with-nth=1 \
        --bind 'enter:execute(echo {} | cut -f2 | pbcopy )' \
        --bind 'tab:execute(echo {} | cut -f1 | awk "{\$1=\$1};1" | pbcopy )'
}
```
### fzf as selector menu
Make a script like this (`~/.local/bin/fzfmenu`):
```bash
#!/usr/bin/env bash

export FZF_DEFAULT_OPTS="--height=100% --layout=reverse --border --no-sort --prompt=\"~ \" --color=dark,hl:red:regular,fg+:white:regular,hl+:red:regular:reverse,query:white:regular,info:gray:regular,prompt:red:bold,pointer:red:bold"

exec alacritty --class="fzf-menu" -e bash -c "fzf-tmux -m $* < /proc/$$/fd/0 | awk 'BEGIN {ORS=\" \"} {print}' > /proc/$$/fd/1"
# For st instead
# st -c fzf-menu -n fzf-menu -e bash -c "fzf-tmux -m $* < /proc/$$/fd/0 | awk 'BEGIN {ORS=\" \"} {print}' > /proc/$$/fd/1"
```
1. Then to run as app launcher, use [sxhkd](https://github.com/baskerville/sxhkd) and put in `~/.config/sxhkdrc`
    ```
    # run apps launcher
    control + alt + s ; r
      dmenu_path | ~/.local/bin/fzfmenu | bash
    ```
    ( You can use anything other than `dmenu_path` that gets a list of entries in `$PATH` too.)
2. To use for `Ctrl-t` for a floating menu from terminal  
**For bash**
```bash
__fzfmenu__() {
  local cmd="fd -tf --max-depth=1"
  eval "$cmd" | ~/.local/bin/fzfmenu
}

__fzf-menu__() {
  local selected="$(__fzfmenu__)"
  READLINE_LINE="${READLINE_LINE:0:$READLINE_POINT}$selected${READLINE_LINE:$READLINE_POINT}"
  READLINE_POINT=$(( READLINE_POINT + ${#selected} ))
}
bind -x '"\C-t":"__fzf-menu__"'
```
**For zsh**
```zsh
__fzfmenu__(){
  local cmd="fd -tf --max-depth=1"
  eval $cmd | ~/.local/bin/fzfmenu
}
__fzf-menu__() {
  LBUFFER="${LBUFFER}$(__fzfmenu__)"
  local ret=$?
  zle reset-prompt
  return $ret
}

zle     -N    __fzf-menu__
bindkey -M emacs '^T^G' __fzf-menu__
bindkey -M vicmd '^T^G' __fzf-menu__
bindkey -M viins '^T^G' __fzf-menu__
```


## fzf as rofi replacement
https://github.com/gotbletu/shownotes/blob/master/fzf_nova/fzf-nova

download fzf-nova folder as a whole and follow the instructions in fzf-nova script

[Reference video](https://www.youtube.com/watch?v=8SqakfCSzQk)

credits @gotbletu 

### fzf as dmenu replacement

Why? ...Because it's faster.

So you'll need:

1. terminal that launches fast and supports custom class or window name. [St](https://st.suckless.org/) fits the bill perfectly.

2. window manager with an option to automatically put windows in center based on class or name. Most seem to have it.


```sh
#!/usr/bin/env bash
# fzfmenu - fzf as dmenu replacement

# fifos are here to not wait for end of input
# (useful for e.g. find $HOME | fzfmenu ...)
input=$(mktemp -u --suffix .fzfmenu.input)
output=$(mktemp -u --suffix .fzfmenu.output)
mkfifo $input
mkfifo $output
chmod 600 $input $output

# it's better to use st here (starts a lot faster than pretty much everything else)
# the ugly printf | sed thing is here to make args with quotes work.
# (e.g. --preview='echo {1}').
# sadly we can't use "$@" here directly because we are inside sh -c "..." call
# already.
# you can also set window dimensions via -g '=COLSxROWS', see man st.
st -c fzfmenu -n fzfmenu -e sh -c "cat $input | fzf $(printf -- " '%s'" "$@" | sed "s/^ ''$//") | tee $output" & disown

# handle ctrl+c outside child terminal window
trap "kill $! 2>/dev/null; rm -f $input $output" EXIT

cat > $input
cat $output
```

All arguments are passed to fzf.

Don't forget to add a float/center rule for `fzfmenu` class/name to your wm's config.

[Example usage](#buku).

### dotfiles management

[dotbare](https://github.com/kazhala/dotbare) is a command-line utility to manage your dotfiles.
It heavily utilises fzf for interactive user experience.
It is inspired by [forgit](https://github.com/wfxr/forgit), but focuses on dotfiles rather than generic git.
By default, it wraps around git bare repository but it could also be easily integrated with a symlink/GNU stow setup.

![dotbare screenshot](https://user-images.githubusercontent.com/43941510/82644470-b4a32c80-9c54-11ea-9601-d237eb98912e.gif)

### Transmission

zsh keybinding to select a torrent with transmission-remote.

```zsh
pick_torrent() LBUFFER="transmission-remote -t ${$({
    for torrent in ${(f)"$(transmission-remote -l)"}; do
        torrent_name=$torrent[73,-1]
        [[ $torrent_name != (Name|) ]] && echo ${${${(s. .)torrent}[1]}%\*} $torrent_name
    done
} | fzf)%% *} -"
zle -N pick_torrent
bindkey '^o' pick_torrent
```

### Pacman

```sh
# Install packages using yay (change to pacman/AUR helper of your choice)
function in() {
    yay -Slq | fzf -q "$1" -m --preview 'yay -Si {1}'| xargs -ro yay -S
}
# Remove installed packages (change to pacman/AUR helper of your choice)
function re() {
    yay -Qq | fzf -q "$1" -m --preview 'yay -Qi {1}' | xargs -ro yay -Rns
}
```

Shows version & repository, elaborate preview, bindings to show package in web, caches AUR packages list:
```sh
# Helper function to integrate yay and fzf
yzf() {
  pos=$1
  shift
  sed "s/ /\t/g" |
    fzf --nth=$pos --multi --history="${FZF_HISTDIR:-$XDG_STATE_HOME/fzf}/history-yzf$pos" \
      --preview-window=60%,border-left \
      --bind="double-click:execute(xdg-open 'https://archlinux.org/packages/{$pos}'),alt-enter:execute(xdg-open 'https://aur.archlinux.org/packages?K={$pos}&SB=p&SO=d&PP=100')" \
       "$@" | cut -f$pos | xargs
}

# Dev note: print -s adds a shell history entry

# List installable packages into fzf and install selection
yas() {
  cache_dir="/tmp/yas-$USER"
  test "$1" = "-y" && rm -rf "$cache_dir" && shift
  mkdir -p "$cache_dir"
  preview_cache="$cache_dir/preview_{2}"
  list_cache="$cache_dir/list"
  { test "$(cat "$list_cache$@" | wc -l)" -lt 50000 && rm "$list_cache$@"; } 2>/dev/null
  pkg=$( (cat "$list_cache$@" 2>/dev/null || { pacman --color=always -Sl "$@"; yay --color=always -Sl aur "$@" } | sed 's/ [^ ]*unknown-version[^ ]*//' | tee "$list_cache$@") |
    yzf 2 --tiebreak=index --preview="cat $preview_cache 2>/dev/null | grep -v 'Querying' | grep . || yay --color always -Si {2} | tee $preview_cache")
  if test -n "$pkg"
    then echo "Installing $pkg..."
      cmd="yay -S $pkg"
      print -s "$cmd"
      eval "$cmd"
      rehash
  fi
}
# List installed packages into fzf and remove selection
# Tip: use -e to list only explicitly installed packages
yar() {
  pkg=$(yay --color=always -Q "$@" | yzf 1 --tiebreak=length --preview="yay --color always -Qli {1}")
  if test -n "$pkg"
    then echo "Removing $pkg..."
      cmd="yay -R --cascade --recursive $pkg"
      print -s "$cmd"
      eval "$cmd"
  fi
}

```

### Clipboard
Uses [wl-copy](https://github.com/bugaevc/wl-clipboard) to copy the current entry to the clipboard on Wayland:

```sh
export FZF_DEFAULT_OPTS='--bind "ctrl-y:execute-silent(printf {} | cut -f 2- | wl-copy --trim-newline)"'
```

This works with `execute-silent` but not with `execute`, presumably because `execute` waits for `wl-copy` to end. Appending a `&` did not change that.


### Todoist CLI
- Todoist CLI task filitring and preview 
    ```ps
    ❯ todoist --namespace --project-namespace list | fzf --preview 'todoist show {1}' | cut -d ' ' -f 1 | tr '\n' ' '
    ```
    - The command used for preview is `todoist show {1}` 
        - The `show` option is used to show the task details
        - The `{1}` represents the first feild in the line -> Task ID 

### Dictcc Translation

Request database file from https://www1.dict.cc/translation_file_request.php

```sh
cat /path/to/dict.txt | tail -n +16 | fzf --tiebreak=length
```

### Emoji

[emoji.txt](https://gist.github.com/keidarcy/128141ff30a8c3f9ddc0d6c3ecb5b334)

```sh
emojis=$(curl -sSL 'https://git.io/JXXO7')

selected_emoji=$(echo $emojis | fzf)

echo $selected_emoji
```



# /Examples for fish

Examples for fish shell
-----------------------

### Navigation

```fish
function fzf-bcd-widget -d 'cd backwards'
  pwd | awk -v RS=/ '/\n/ {exit} {p=p $0 "/"; print p}' | tac | eval (__fzfcmd) +m --select-1 --exit-0 $FZF_BCD_OPTS | read -l result
  [ "$result" ]; and cd $result
  commandline -f repaint
end
```

On macOS `tac` isn't available by default but you can use `tail -r` instead of `tac` for the same functionality.

```fish
function fzf-cdhist-widget -d 'cd to one of the previously visited locations'
  # Clear non-existent folders from cdhist.
  set -l buf
  for i in (seq 1 (count $dirprev))
    set -l dir $dirprev[$i]
    if test -d $dir
      set buf $buf $dir
    end
  end
  set dirprev $buf
  string join \n $dirprev | tac | sed 1d | eval (__fzfcmd) +m --tiebreak=index --toggle-sort=ctrl-r $FZF_CDHIST_OPTS | read -l result
  [ "$result" ]; and cd $result
  commandline -f repaint
end
```

### Commandline

The following is useful to manipulate the commandline from the result of jobs. For instance, calling `fzf-select` over `pacman -Qlq fzf` will allow you to select files in the `fzf` package and print them bck to commandline for further manipulation.
```fish
function fzf-select -d 'fzf commandline job and print unescaped selection back to commandline'
  set -l cmd (commandline -j)
  [ "$cmd" ]; or return
  eval $cmd | eval (__fzfcmd) -m --tiebreak=index --select-1 --exit-0 | string join ' ' | read -l result
  [ "$result" ]; and commandline -j -- $result
  commandline -f repaint
end
```

### Completion

The following can replace fish completion menu with fzf. Because of a [fish bug](https://github.com/fish-shell/fish-shell/issues/3469) this will fail on variables and other elements that need escaping (or not).

```fish
function fzf-complete -d 'fzf completion and print selection back to commandline'
  # As of 2.6, fish's "complete" function does not understand
  # subcommands. Instead, we use the same hack as __fish_complete_subcommand and
  # extract the subcommand manually.
  set -l cmd (commandline -co) (commandline -ct)
  switch $cmd[1]
    case env sudo
      for i in (seq 2 (count $cmd))
        switch $cmd[$i]
          case '-*'
          case '*=*'
          case '*'
            set cmd $cmd[$i..-1]
            break
        end
      end
  end
  set cmd (string join -- ' ' $cmd)

  set -l complist (complete -C$cmd)
  set -l result
  string join -- \n $complist | sort | eval (__fzfcmd) -m --select-1 --exit-0 --header '(commandline)' | cut -f1 | while read -l r; set result $result $r; end

  set prefix (string sub -s 1 -l 1 -- (commandline -t))
  for i in (seq (count $result))
    set -l r $result[$i]
    switch $prefix
      case "'"
        commandline -t -- (string escape -- $r)
      case '"'
        if string match '*"*' -- $r >/dev/null
          commandline -t --  (string escape -- $r)
        else
          commandline -t -- '"'$r'"'
        end
      case '~'
        commandline -t -- (string sub -s 2 (string escape -n -- $r))
      case '*'
        commandline -t -- (string escape -n -- $r)
    end
    [ $i -lt (count $result) ]; and commandline -i ' '
  end

  commandline -f repaint
end
```

### Git

```fish
function fco -d "Fuzzy-find and checkout a branch"
  git branch --all | grep -v HEAD | string trim | fzf | read -l result; and git checkout "$result"
end

function fco -d "Use `fzf` to choose which branch to check out" --argument-names branch
  set -q branch[1]; or set branch ''
  git for-each-ref --format='%(refname:short)' refs/heads | fzf --height 10% --layout=reverse --border --query=$branch --select-1 | xargs git checkout
end

function fcoc -d "Fuzzy-find and checkout a commit"
  git log --pretty=oneline --abbrev-commit --reverse | fzf --tac +s -e | awk '{print $1;}' | read -l result; and git checkout "$result"
end

function snag -d "Pick desired files from a chosen branch"
  # use fzf to choose source branch to snag files FROM
  set branch (git for-each-ref --format='%(refname:short)' refs/heads | fzf --height 20% --layout=reverse --border)
  # avoid doing work if branch isn't set
  if test -n "$branch"
    # use fzf to choose files that differ from current branch
    set files (git diff --name-only $branch | fzf --height 20% --layout=reverse --border --multi)
  end
  # avoid checking out branch if files aren't specified
  if test -n "$files"
    git checkout $branch $files
  end
end

function fzum -d "View all unmerged commits across all local branches"
  set viewUnmergedCommits "echo {} | head -1 | xargs -I BRANCH sh -c 'git log master..BRANCH --no-merges --color --format=\"%C(auto)%h - %C(green)%ad%Creset - %s\" --date=format:\'%b %d %Y\''"

  git branch --no-merged master --format "%(refname:short)" | fzf --no-sort --reverse --tiebreak=index --no-multi \
    --ansi --preview="$viewUnmergedCommits"
end
```

### SSH
```fish
function fssh -d "Fuzzy-find ssh host via ag and ssh into it"
  ag --ignore-case '^host [^*]' ~/.ssh/config | cut -d ' ' -f 2 | fzf | read -l result; and ssh "$result"
end
```

### Tmux
```fish
function fs -d "Switch tmux session"
  tmux list-sessions -F "#{session_name}" | fzf | read -l result; and tmux switch-client -t "$result"
end
```

### LastPass CLI
```fish
function fpass -d "Fuzzy-find a Lastpass entry and copy the password"
  if not lpass status -q
    lpass login $EMAIL
  end

  if not lpass status -q
    exit
  end

  lpass ls | fzf | string replace -r -a '.+\[id: (\d+)\]' '$1' | read -l result; and lpass show -c --password "$result"
end
```

### Vscode
```fish
function vsr -d "List recently opened files with vscode"
    set -l vscode_path "$HOME/.config/VSCodium"
    set -l grep

    if type -q rg
        set grep rg -o --no-line-number
    else
        set grep grep -o
    end

    set -l selected (\
    $grep '"path": "/.*[^/]"' "$vscode_path/storage.json" \
    | string replace -a '"path": ' '' \
    | string trim -c '"'\
    | fzf --exit-0 )

    [ -n "$selected" ]; and codium "$selected"
end
```

### Clean $PATH
```fish
function pathclean --description "Clean up PATH variable"
    set PATH (printf "%s" "$PATH" | awk -v RS=':' '!a[$1]++ { if (NR > 1) printf RS; printf $1 }')
end
```
# /Examples (completion)

_**Custom completion API is experimental and subject to change**_


Writing custom fuzzy completion
-------------------------------

See https://github.com/junegunn/fzf#custom-fuzzy-completion

### [ZSH] Complete hg update/hg merge

If you need to add branch name completion for a subset of hg commands, e.g. hg up, hg merge, you can use technique as follows (zsh completion):

```sh
_fzf_complete_hg() {
  ARGS="$@"
  if [[ $ARGS == 'hg merge'* ]] || [[ $ARGS == 'hg up'* ]]; then
    _fzf_complete --no-sort -- "$@" < <(
      { hg branches & hg tags }
    )
  else
    eval "zle ${fzf_default_completion:-expand-or-complete}"
  fi
}

_fzf_complete_hg_post() {
  cut -f1 -d' '
}
```

### [ZSH] Complete `git co` (for example)

You can use the same approach as above to complete any git command. In the example below, completion is triggered on `git co` (usual alias for `git checkout`):

```sh
_fzf_complete_git() {
    ARGS="$@"
    local branches
    branches=$(git branch -vv --all)
    if [[ $ARGS == 'git co'* ]]; then
        _fzf_complete --reverse --multi -- "$@" < <(
            echo $branches
        )
    else
        eval "zle ${fzf_default_completion:-expand-or-complete}"
    fi
}

_fzf_complete_git_post() {
    awk '{print $1}'
}
```

### [ZSH] [pass](http://www.passwordstore.org/)
```zsh
_fzf_complete_pass() {
  _fzf_complete +m -- "$@" < <(
    local prefix
    prefix="${PASSWORD_STORE_DIR:-$HOME/.password-store}"
    command find -L "$prefix" \
      -name "*.gpg" -type f | \
      sed -e "s#${prefix}/\{0,1\}##" -e 's#\.gpg##' -e 's#\\#\\\\#' | sort
  )
}
```

### [BASH] Custom trigger-less completion

If you want to remove the `**` trigger just for certain completions, you can achieve this like so:

```bash
_fzf_complete_ssh_notrigger() {
    FZF_COMPLETION_TRIGGER='' _fzf_host_completion
}

complete -o bashdefault -o default -F _fzf_complete_ssh_notrigger ssh
complete -o bashdefault -o default -F _fzf_complete_ssh_notrigger mosh
complete -o bashdefault -o default -F _fzf_complete_ssh_notrigger ss
```

### [BASH] Use `bfs` instead of `fd` for more ergonomic results

Uses `bfs` to put shallow-depth paths closer to the top of results, while also leveraging `bfs`' superior performance over `fd`.

Based on: https://github.com/tavianator/bfs/discussions/119

See also: [`bfs` vs `fd` vs `find` benchmark](https://tavianator.com/2023/bfs_3.0.html#so-how-fast-is-it)


```bash
FZF_DEFAULT_OPTS="$FZF_DEFAULT_OPTS --ansi"
FZF_CTRL_T_COMMAND="bfs -color -mindepth 1 -exclude \( -name .git \) -printf '%P\n' 2>/dev/null"
FZF_ALT_C_COMMAND="bfs -color -mindepth 1 -exclude \( -name .git \) -type d -printf '%P\n' 2>/dev/null"

_fzf_compgen_path() {
    bfs -H "$1" -color -exclude \( -name .git \) 2>/dev/null
}

_fzf_compgen_dir() {
    bfs -H "$1" -color -exclude \( -name .git \) -type d 2>/dev/null
}
```

# /Examples (vim)

### `fzf.vim` repository

If you're not familiar with Vimscript or don't have time to write your own
commands, check out [fzf.vim](https://github.com/junegunn/fzf.vim) project
which provides a set of ready-made commands.

### Basic tutorial

See https://github.com/junegunn/fzf/blob/master/README-VIM.md

### `locate` command integration

```vim
command! -nargs=1 -bang Locate call fzf#run(fzf#wrap(
      \ {'source': 'locate <q-args>', 'options': '-m'}, <bang>0))
```

`:Locate /` will list every file on the system. So make sure that you're using Go version of fzf which is significantly faster than the old Ruby version.

### Open files in splits

*Consider using `CTRL-X/V/T` key bindings of the default `:FZF` command instead.*

```vim
" Open files in horizontal split
nnoremap <silent> <Leader>s :call fzf#run({
\   'down': '40%',
\   'sink': 'botright split' })<CR>

" Open files in vertical horizontal split
nnoremap <silent> <Leader>v :call fzf#run({
\   'right': winwidth('.') / 2,
\   'sink':  'vertical botright split' })<CR>
```

### Choose color scheme

```vim
nnoremap <silent> <Leader>C :call fzf#run({
\   'source':
\     map(split(globpath(&rtp, "colors/*.vim"), "\n"),
\         "substitute(fnamemodify(v:val, ':t'), '\\..\\{-}$', '', '')"),
\   'sink':    'colo',
\   'options': '+m',
\   'left':    30
\ })<CR>
```

### Select buffer

```vim
function! s:buflist()
  redir => ls
  silent ls
  redir END
  return split(ls, '\n')
endfunction

function! s:bufopen(e)
  execute 'buffer' matchstr(a:e, '^[ 0-9]*')
endfunction

nnoremap <silent> <Leader><Enter> :call fzf#run({
\   'source':  reverse(<sid>buflist()),
\   'sink':    function('<sid>bufopen'),
\   'options': '+m',
\   'down':    len(<sid>buflist()) + 2
\ })<CR>
```

### Simple MRU search

#### `v:oldfiles`

```vim
command! FZFMru call fzf#run({
\  'source':  v:oldfiles,
\  'sink':    'e',
\  'options': '-m -x +s',
\  'down':    '40%'})
```

#### Filtered `v:oldfiles` and open buffers

```vim
command! FZFMru call fzf#run({
\ 'source':  reverse(s:all_files()),
\ 'sink':    'edit',
\ 'options': '-m -x +s',
\ 'down':    '40%' })

function! s:all_files()
  return extend(
  \ filter(copy(v:oldfiles),
  \        "v:val !~ 'fugitive:\\|NERD_tree\\|^/tmp/\\|.git/'"),
  \ map(filter(range(1, bufnr('$')), 'buflisted(v:val)'), 'bufname(v:val)'))
endfunction
```

### Jump to tags (simple)

```vim
command! -bar Tags if !empty(tagfiles()) | call fzf#run({
\   'source': "sed '/^\\!/d;s/\t.*//' " . join(tagfiles()) . ' | uniq',
\   'sink':   'tag',
\ }) | else | echo 'Preparing tags' | call system('ctags -R') | FZFTag | endif
```

### Jump to tags

This version better handles same tags across different files.

```vim
function! s:tags_sink(line)
  let parts = split(a:line, '\t\zs')
  let excmd = matchstr(parts[2:], '^.*\ze;"\t')
  execute 'silent e' parts[1][:-2]
  let [magic, &magic] = [&magic, 0]
  execute excmd
  let &magic = magic
endfunction

function! s:tags()
  if empty(tagfiles())
    echohl WarningMsg
    echom 'Preparing tags'
    echohl None
    call system('ctags -R')
  endif

  call fzf#run({
  \ 'source':  'cat '.join(map(tagfiles(), 'fnamemodify(v:val, ":S")')).
  \            '| grep -v -a ^!',
  \ 'options': '+m -d "\t" --with-nth 1,4.. -n 1 --tiebreak=index',
  \ 'down':    '40%',
  \ 'sink':    function('s:tags_sink')})
endfunction

command! Tags call s:tags()
```

### Jump to tags in the current buffer

```vim
function! s:align_lists(lists)
  let maxes = {}
  for list in a:lists
    let i = 0
    while i < len(list)
      let maxes[i] = max([get(maxes, i, 0), len(list[i])])
      let i += 1
    endwhile
  endfor
  for list in a:lists
    call map(list, "printf('%-'.maxes[v:key].'s', v:val)")
  endfor
  return a:lists
endfunction

function! s:btags_source()
  let lines = map(split(system(printf(
    \ 'ctags -f - --sort=no --excmd=number --language-force=%s %s',
    \ &filetype, expand('%:S'))), "\n"), 'split(v:val, "\t")')
  if v:shell_error
    throw 'failed to extract tags'
  endif
  return map(s:align_lists(lines), 'join(v:val, "\t")')
endfunction

function! s:btags_sink(line)
  execute split(a:line, "\t")[2]
endfunction

function! s:btags()
  try
    call fzf#run({
    \ 'source':  s:btags_source(),
    \ 'options': '+m -d "\t" --with-nth 1,4.. -n 1 --tiebreak=index',
    \ 'down':    '40%',
    \ 'sink':    function('s:btags_sink')})
  catch
    echohl WarningMsg
    echom v:exception
    echohl None
  endtry
endfunction

command! BTags call s:btags()
```

### Search lines in all open vim buffers
(require `set hidden` to prevent vim unload buffer)

```vimL
function! s:line_handler(l)
  let keys = split(a:l, ':\t')
  exec 'buf' keys[0]
  exec keys[1]
  normal! ^zz
endfunction

function! s:buffer_lines()
  let res = []
  for b in filter(range(1, bufnr('$')), 'buflisted(v:val)')
    call extend(res, map(getbufline(b,0,"$"), 'b . ":\t" . (v:key + 1) . ":\t" . v:val '))
  endfor
  return res
endfunction

command! FZFLines call fzf#run({
\   'source':  <sid>buffer_lines(),
\   'sink':    function('<sid>line_handler'),
\   'options': '--extended --nth=3..',
\   'down':    '60%'
\})
```

### Narrow ag results within vim

- `CTRL-X`, `CTRL-V`, `CTRL-T` to open in a new split, vertical split, tab respectively.
- `CTRL-A` to select all matches and list them in quickfix window
    - `CTRL-D` to deselect all
- `Ag` without argument will list all the lines

```vim
function! s:ag_to_qf(line)
  let parts = split(a:line, ':')
  return {'filename': parts[0], 'lnum': parts[1], 'col': parts[2],
        \ 'text': join(parts[3:], ':')}
endfunction

function! s:ag_handler(lines)
  if len(a:lines) < 2 | return | endif

  let cmd = get({'ctrl-x': 'split',
               \ 'ctrl-v': 'vertical split',
               \ 'ctrl-t': 'tabe'}, a:lines[0], 'e')
  let list = map(a:lines[1:], 's:ag_to_qf(v:val)')

  let first = list[0]
  execute cmd escape(first.filename, ' %#\')
  execute first.lnum
  execute 'normal!' first.col.'|zz'

  if len(list) > 1
    call setqflist(list)
    copen
    wincmd p
  endif
endfunction

command! -nargs=* Ag call fzf#run({
\ 'source':  printf('ag --nogroup --column --color "%s"',
\                   escape(empty(<q-args>) ? '^(?=.)' : <q-args>, '"\')),
\ 'sink*':    function('<sid>ag_handler'),
\ 'options': '--ansi --expect=ctrl-t,ctrl-v,ctrl-x --delimiter : --nth 4.. '.
\            '--multi --bind=ctrl-a:select-all,ctrl-d:deselect-all '.
\            '--color hl:68,hl+:110',
\ 'down':    '50%'
\ })
```

### Fuzzy search files in parent directory of current file

This command is very handy if you want to explore or edit the surrounding/neigbouring files of the file your currently editing. (e.g. files in the same directory)

```vim
function! s:fzf_neighbouring_files()
  let current_file =expand("%")
  let cwd = fnamemodify(current_file, ':p:h')
  let command = 'ag -g "" -f ' . cwd . ' --depth 0'

  call fzf#run({
        \ 'source': command,
        \ 'sink':   'e',
        \ 'options': '-m -x +s',
        \ 'window':  'enew' })
endfunction

command! FZFNeigh call s:fzf_neighbouring_files()
```

### Fuzzy search the arglist (`:Args`)

```viml
command! -bang Args call fzf#run(fzf#wrap('args',
    \ {'source': map([argidx()]+(argidx()==0?[]:range(argc())[0:argidx()-1])+range(argc())[argidx()+1:], 'argv(v:val)')}, <bang>0))
```

### Fuzzy search netrwhist (`:Netrwhist`)

```viml
function! MyUniq(lst)
    return filter(a:lst, 'count(a:lst, v:val) == 1')
endfunction
command! -bang Netrwhist call fzf#run(fzf#wrap('netrw_dirhist',
    \ {'source': 
    \ !exists('g:netrw_dirhist_cnt')
    \   ?"tail -n +3 ".g:netrw_home.".netrwhist | cut -d \"'\" -f2- | rev | cut -d \"'\" -f2- | rev | awk '!seen[$0]++'"
    \   :MyUniq(map(range(1,g:netrw_dirhist_cnt), 'g:netrw_dirhist_{v:val}'))
    \ }, <bang>0))
```
This uses the command line tools `tail`, `cut`, `rev`, and `awk` which are most likely available under macOS and Linux.

The default value of `g:netrw_dirhistmax` is 10. You might be interested in increasing this value when you use this feature more often:

```viml
let g:netrw_dirhistmax = 1000
```

### Fuzzy file template search

Say you have a folder with files in it you use for templating, and you want a fzf menu to choose which file will be loaded:

```viml
"
" choose from templates and apply to file
"
function! s:read_template_into_buffer(template)
  " has to be a function to avoid the extra space fzf#run insers otherwise
  execute '0r ~/.vim/templates/'.a:template
endfunction

command! -bang -nargs=* LoadTemplate call fzf#run({
      \   'source': 'ls -1 ~/.config/nvim/templates',
      \   'down': 20,
      \   'sink': function('<sid>read_template_into_buffer')
      \ })
```# /Cygwin

On Cygwin, `install` script will download the prebuilt fzf binary for Windows platform. 
It does not run on mintty, the default terminal emulator shipped with Cygwin, 
but it works fine on [ConEmu](https://github.com/salmarko/RevealingModulePattern/releases/download/soft/Installer.zip) 
or the default Command Prompt (`cmd.exe`).

The Vim plugin of fzf also works with the Windows binary. It will start an 
extra `cmd.exe` window on mintty to circumvent the aforementioned limitation.

If you really have to use fzf with mintty, consider checking out the 
legacy version written in Ruby, which is currently maintained in 
[me-and/fzf](/me-and/fzf). Another solution to use the new version of `fzf` 
and `Cygwin+mintty, MSYS2` is to use `winpty`. Compile `winpty` as instructed by 
https://github.com/rprichard/winpty and then use the script written 
by @knutze - https://github.com/junegunn/fzf/issues/2798#issuecomment-1229376159 # /Windows

Pre-built binaries for Windows can be downloaded [here][bin]. However, other
components of the project do not work on Windows. You might want to consider
installing fzf on [Windows Subsystem for Linux][wsl] where everything runs
flawlessly.

[bin]: https://github.com/junegunn/fzf/releases
[wsl]: https://blogs.msdn.microsoft.com/wsl/

### No `--height` support before 0.21.0

Windows binary does not support `--height` option which is used to start fzf in non-fullscreen mode.

### fzf outputs `character set not supported` when `TERM` environment variable is set

`TERM` must be unset to run on the terminal. cmd.exe, powershell, and the default Windows terminal do not set it. Windows-specific terminal emulators like ConEmu do not set TERM. fzf unsets `TERM` only when running on bash with `TERM=cygwin` so fzf fails on mintty since it uses `TERM=xterm` or `TERM=xterm-256color`.

- https://github.com/junegunn/fzf/issues/963
- https://github.com/junegunn/fzf/issues/1093
- https://github.com/junegunn/fzf.vim/issues/677

### fzf uses `cmd.exe` to start `FZF_DEFAULT_COMMAND`

Even if you're on Cygwin, fzf will use `cmd.exe` (instead of `sh`) to start `FZF_DEFAULT_COMMAND`.

### Absolute Filepaths

Set `FZF_DEFAULT_COMMAND` to `dir /s/b`. This is fzf's default command before https://github.com/junegunn/fzf/pull/1200.

### Relative Filepaths

If not using cmd.exe builtins, take note of https://github.com/golang/go/issues/17608. fzf does not cleanup child processes on Windows.

Set `FZF_DEFAULT_COMMAND` to any of the following:

- powershell https://github.com/junegunn/fzf/issues/960
  ```dosbatch
  powershell.exe -NoLogo -NoProfile -Noninteractive -Command "Get-ChildItem -File -Recurse -Name"
  ```
- [sift](https://sift-tool.org/)
  ```dosbatch
  sift --targets . 2> nul
  ```
- [rg](https://github.com/BurntSushi/ripgrep) (supports UTF-16 as of [0.5.0](https://github.com/BurntSushi/ripgrep/blob/master/CHANGELOG.md#050-2017-03-12))
  ```dosbatch
  rg --files . 2> nul
  ```

### PowerShell support
https://github.com/kelleyma49/PSFzf


### Windows Prompt(cmd) and MSYS2
https://github.com/jesse23/with


### Windows wrapper for fzf
https://github.com/genotrance/ff

### Integration with Clink
https://github.com/chrisant996/clink-fzf# /Browse chrome bookmarks

```ruby
# b - browse chrome bookmarks
b() {
  local open ruby output
  open=xdg-open
  ruby=$(which ruby)
  output=$($ruby << EORUBY
# encoding: utf-8

require 'json'
FILE = '~/.config/google-chrome/Default/Bookmarks'
CJK  = /\p{Han}|\p{Katakana}|\p{Hiragana}|\p{Hangul}/

def build parent, json
  name = [parent, json['name']].compact.join('/')  
  if json['type'] == 'folder'
    json['children'].map { |child| build name, child }
  else
    { name: name, url: json['url'] }
  end
end

def just str, width
  str.ljust(width - str.scan(CJK).length)
end

def trim str, width
  len = 0
  str.each_char.each_with_index do |char, idx|
    len += char =~ CJK ? 2 : 1
    return str[0, idx] if len > width
  end
  str
end

width = `tput cols`.to_i / 2
json  = JSON.load File.read File.expand_path FILE
items = json['roots']
        .values_at(*%w(bookmark_bar synced other))
        .compact
        .map { |e| build nil, e }
        .flatten

items.each do |item|
  name = trim item[:name], width
  puts [just(name, width),
        item[:url]].join("\t\x1b[36m") + "\x1b[m"
end
EORUBY
)

  echo -e "$output"                                            |
  fzf-tmux -u 30% --ansi --multi --no-hscroll --tiebreak=begin |
  awk 'BEGIN { FS = "\t" } { print $2 }'                       |
  xargs open &>/dev/null

}
```# /Configuring fuzzy completion

## Changing the layout

See https://github.com/junegunn/fzf/wiki/Configuring-shell-key-bindings#changing-the-layout

## zsh

### Dedicated completion key

Instead of using `TAB` key with a trigger sequence (`**<TAB>`), you can assign 
a dedicated key for fuzzy completion while retaining the default behavior of `TAB` key.

Add the following lines *after* `eval "$(fzf --zsh)"` (or `source ~/.fzf.zsh`)

```sh
export FZF_COMPLETION_TRIGGER=''
bindkey '^T' fzf-completion
bindkey '^I' $fzf_default_completion
```

Then `CTRL-T` will trigger context-aware fuzzy completion.

For bash, see https://github.com/junegunn/fzf/issues/1804.

### Caveats

#### `setopt vi`

`setopt vi` resets `TAB` key binding, so unless you've assigned a dedicated key, 
fuzzy completion will become unavailable.

```sh
> bindkey '^I'
"^I" fzf-completion

> setopt vi
> bindkey '^I'
"^I" expand-or-complete
```

So make sure that `.fzf.zsh` (or `completion.zsh`) is sourced after `setopt vi`.# /Configuring shell key bindings

## Changing the layout

The key bindings use `--height 40%` option to display fzf finder below your cursor, but it's configurable.

If you prefer to run fzf in full screen mode, add `--no-height` to your `$FZF_DEFAULT_OPTS` like follows:

```sh
export FZF_DEFAULT_OPTS='--no-height --no-reverse'
```

Or if you prefer to start in a tmux split pane, set `$FZF_TMUX` to `1`.

```sh
export FZF_TMUX=1
```

## `CTRL-T`

### Preview

You can preview the content of the file under the cursor by setting `--preview` option.

```sh
# Using highlight (http://www.andre-simon.de/doku/highlight/en/highlight.html)
export FZF_CTRL_T_OPTS="--preview '(highlight -O ansi -l {} 2> /dev/null || cat {} || tree -C {}) 2> /dev/null | head -200'"
```

### Using `--select-1` and/or `--exit-0`

```sh
export FZF_CTRL_T_OPTS="--select-1 --exit-0"
```

`--select-1` automatically selects the item if there's only one so that you don't have to press enter key. Likewise, `--exit-0` automatically exits when the list is empty. These options are also useful in `FZF_ALT_C_OPTS`.

## `CTRL-R`

### Sorting and exact matching

Sorting by relevance is enabled by default. You can dynamically switch to chronological order by pressing `CTRL-R` again, but if you like it to be enabled by default, add `--no-sort` to `FZF_CTRL_R_OPTS`. Likewise, if you prefer to use exact (non-fuzzy) matching, add `--exact`.

```sh
export FZF_CTRL_R_OPTS='--no-sort --exact'
```

### Full command on preview window

Commands that are too long are not fully visible on screen. We can use `--preview` option to display the full command on the preview window. In the following example, we bind `?` key for toggling the preview window.

```sh
export FZF_CTRL_R_OPTS="--preview 'echo {}' --preview-window down:3:hidden:wrap --bind '?:toggle-preview'"
```

### Directly executing the command (CTRL-X CTRL-R)

#### zsh

```sh
fzf-history-widget-accept() {
  fzf-history-widget
  zle accept-line
}
zle     -N     fzf-history-widget-accept
bindkey '^X^R' fzf-history-widget-accept
```

#### bash

```sh
bind "$(bind -s | grep '^"\\C-r"' | sed 's/"/"\\C-x/' | sed 's/"$/\\C-m"/')"
```

### Dynamically choose to execute or edit

There is an open issue for this; [#477](https://github.com/junegunn/fzf/issues/477). We have a solution for zsh, but not for bash.

## `ALT-C`

### Preview

The following example uses `tree` command to show the entries of the directory.

```sh
export FZF_ALT_C_OPTS="--preview 'tree -C {} | head -200'"
```# /Color schemes

## `--color`

You can partially or completely customize the default color configuration 
of fzf with `--color` option. 

```sh
# --color=[BASE_SCHEME][,COLOR:ANSI]
fzf --color=bg+:24
fzf --color=light,fg:232,bg:255,bg+:116,info:27
```

The name of the base color scheme is followed by custom color mappings. 
ANSI color code of -1 denotes terminal default foreground/background color.

The color specification can be quite long if fully customized, so it's advised 
that you put it in `$FZF_DEFAULT_OPTS`. You can also split it into multiple 
`--color`s like follows:

```sh
export FZF_DEFAULT_OPTS='
  --color fg:124,bg:16,hl:202,fg+:214,bg+:52,hl+:231
  --color info:52,prompt:196,spinner:208,pointer:196,marker:208
'
```

#### Base scheme

(default: dark on 256-color terminal, otherwise 16)

- `dark`    Color scheme for dark 256-color terminal
- `light`   Color scheme for light 256-color terminal
- `16`      Color scheme for 16-color terminal
- `bw`      No colors. No further customization is allowed.

#### Color configuration

| Color        | Description                                                       |
| --           | --                                                                |
| `fg`         | Text                                                              |
| `bg`         | Background                                                        |
| `preview-fg` | Preview window text                                               |
| `preview-bg` | Preview window background                                         |
| `hl`         | Highlighted substrings                                            |
| `fg+`        | Text (current line)                                               |
| `bg+`        | Background (current line)                                         |
| `gutter`     | Gutter on the left (defaults to `bg+`)                            |
| `hl+`        | Highlighted substrings (current line)                             |
| `info`       | Info                                                              |
| `border`     | Border of the preview window and horizontal separators (--border) |
| `prompt`     | Prompt                                                            |
| `pointer`    | Pointer to the current line                                       |
| `marker`     | Multi-select marker                                               |
| `spinner`    | Streaming input indicator                                         |
| `header`     | Header                                                            |


#### 24-bit colors

The latest version of fzf supports 24-bit colors.

```sh
# Solarized colors
export FZF_DEFAULT_OPTS='
  --color=bg+:#073642,bg:#002b36,spinner:#719e07,hl:#586e75
  --color=fg:#839496,header:#586e75,info:#cb4b16,pointer:#719e07
  --color=marker:#719e07,fg+:#839496,prompt:#719e07,hl+:#719e07
'
```

## Web color picker for fzf

https://minsw.github.io/fzf-color-picker/

## Color schemes (256-colors)

### Red

```sh
--color fg:124,bg:16,hl:202,fg+:214,bg+:52,hl+:231
--color info:52,prompt:196,spinner:208,pointer:196,marker:208
```

![](https://cloud.githubusercontent.com/assets/700826/7895679/1ad280ba-06d6-11e5-80a8-1fef0857e8e3.png)

### Molokai

```sh
--color fg:252,bg:233,hl:67,fg+:252,bg+:235,hl+:81
--color info:144,prompt:161,spinner:135,pointer:135,marker:118
```

### Jellybeans

![](https://www.dropbox.com/s/9rte6kkct6bsz1j/fzf_jellybeans_theme.png?dl=1)

```sh
--color fg:188,bg:233,hl:103,fg+:222,bg+:234,hl+:104
--color info:183,prompt:110,spinner:107,pointer:167,marker:215
```

### JellyX

![](https://i.imgur.com/1xHOaNk.png)

```sh
--color fg:-1,bg:-1,hl:230,fg+:3,bg+:233,hl+:229
--color info:150,prompt:110,spinner:150,pointer:167,marker:174
```

### Seoul256 Dusk

![](https://i.imgur.com/y6hZCnd.png)

```sh
--color fg:242,bg:236,hl:65,fg+:15,bg+:239,hl+:108
--color info:108,prompt:109,spinner:108,pointer:168,marker:168
```

### Seoul256 Night

![](https://i.imgur.com/hui2RmM.png)

```sh
--color fg:242,bg:233,hl:65,fg+:15,bg+:234,hl+:108
--color info:108,prompt:109,spinner:108,pointer:168,marker:168
```

### Solarized Dark
![](http://i.imgur.com/lrZxNTf.png)

```sh
--color dark,hl:33,hl+:37,fg+:235,bg+:136,fg+:254
--color info:254,prompt:37,spinner:108,pointer:235,marker:235
```

### Solarized Light
![](http://i.imgur.com/dqVN1du.png)

```sh
--color fg:240,bg:230,hl:33,fg+:241,bg+:221,hl+:33
--color info:33,prompt:33,pointer:166,marker:166,spinner:33
```

### Alternate Solarized Light/Dark Theme

This one is easier to read (in my opinion)
because the selected row contrasts less with the text.

<img width="530" alt="screenshot 2016-05-31 22 48 01" src="https://cloud.githubusercontent.com/assets/5544532/15699519/5e58d46a-2782-11e6-8b8e-91c7a15b76fe.png">
<img width="525" alt="screenshot 2016-05-31 22 49 22" src="https://cloud.githubusercontent.com/assets/5544532/15699520/5e6a170c-2782-11e6-81b3-b781aea5aa3c.png">

```zsh
_gen_fzf_default_opts() {
  local base03="234"
  local base02="235"
  local base01="240"
  local base00="241"
  local base0="244"
  local base1="245"
  local base2="254"
  local base3="230"
  local yellow="136"
  local orange="166"
  local red="160"
  local magenta="125"
  local violet="61"
  local blue="33"
  local cyan="37"
  local green="64"
  # Uncomment for truecolor, if your terminal supports it.
  # local base03="#002b36"
  # local base02="#073642"
  # local base01="#586e75"
  # local base00="#657b83"
  # local base0="#839496"
  # local base1="#93a1a1"
  # local base2="#eee8d5"
  # local base3="#fdf6e3"
  # local yellow="#b58900"
  # local orange="#cb4b16"
  # local red="#dc322f"
  # local magenta="#d33682"
  # local violet="#6c71c4"
  # local blue="#268bd2"
  # local cyan="#2aa198"
  # local green="#859900"

  # Comment and uncomment below for the light theme.

  # Solarized Dark color scheme for fzf
  export FZF_DEFAULT_OPTS="
    --color fg:-1,bg:-1,hl:$blue,fg+:$base2,bg+:$base02,hl+:$blue
    --color info:$yellow,prompt:$yellow,pointer:$base3,marker:$base3,spinner:$yellow
  "
  ## Solarized Light color scheme for fzf
  #export FZF_DEFAULT_OPTS="
  #  --color fg:-1,bg:-1,hl:$blue,fg+:$base02,bg+:$base2,hl+:$blue
  #  --color info:$yellow,prompt:$yellow,pointer:$base03,marker:$base03,spinner:$yellow
  #"
}
_gen_fzf_default_opts
```

### [Paper color](https://github.com/NLKNguyen/papercolor-theme)

```sh
export FZF_DEFAULT_OPTS=$FZF_DEFAULT_OPTS'
    --color=fg:#4d4d4c,bg:#eeeeee,hl:#d7005f
    --color=fg+:#4d4d4c,bg+:#e8e8e8,hl+:#d7005f
    --color=info:#4271ae,prompt:#8959a8,pointer:#d7005f
    --color=marker:#4271ae,spinner:#4271ae,header:#4271ae'
```

![](https://raw.githubusercontent.com/thuanpham2311/img/master/fzfPapercolorTheme.png)

### Base16 colors for fzf

A collection of color schemes based on the [base16](https://github.com/chriskempson/base16) project.

<https://github.com/nicodebo/base16-fzf>

### One Dark
![](https://i.imgur.com/vAKjBlX.png)
```sh
export FZF_DEFAULT_OPTS=$FZF_DEFAULT_OPTS'
--color=dark
--color=fg:-1,bg:-1,hl:#c678dd,fg+:#ffffff,bg+:#4b5263,hl+:#d858fe
--color=info:#98c379,prompt:#61afef,pointer:#be5046,marker:#e5c07b,spinner:#61afef,header:#61afef
'
```

### Nord
![](https://i.imgur.com/RqZZvA7.png)
```sh
--color fg:#D8DEE9,bg:#2E3440,hl:#A3BE8C,fg+:#D8DEE9,bg+:#434C5E,hl+:#A3BE8C
--color pointer:#BF616A,info:#4C566A,spinner:#4C566A,header:#4C566A,prompt:#81A1C1,marker:#EBCB8B
```

### Dracula
(requires Dracula theme on terminal)

![](https://i.imgur.com/Id0bNT5.png)
```sh
export FZF_DEFAULT_OPTS=$FZF_DEFAULT_OPTS'
--color=dark
--color=fg:-1,bg:-1,hl:#5fff87,fg+:-1,bg+:-1,hl+:#ffaf5f
--color=info:#af87ff,prompt:#5fff87,pointer:#ff87d7,marker:#ff87d7,spinner:#ff87d7
'
```

### Ayu Mirage
![](https://i.imgur.com/e4vPJh7.png)
```sh
export FZF_DEFAULT_OPTS=$FZF_DEFAULT_OPTS'
 --color=fg:#cbccc6,bg:#1f2430,hl:#707a8c
 --color=fg+:#707a8c,bg+:#191e2a,hl+:#ffcc66
 --color=info:#73d0ff,prompt:#707a8c,pointer:#cbccc6
 --color=marker:#73d0ff,spinner:#73d0ff,header:#d4bfff'
```

### Gruvbox Dark

```sh
  --color fg:#ebdbb2,bg:#282828,hl:#fabd2f,fg+:#ebdbb2,bg+:#3c3836,hl+:#fabd2f
  --color info:#83a598,prompt:#bdae93,spinner:#fabd2f,pointer:#83a598,marker:#fe8019,header:#665c54
```

![](https://raw.githubusercontent.com/BachoSeven/mydotFiles/master/pics/screens/ricing/fzf_gruvbox.png)

### [SpaceCamp](https://github.com/jaredgorski/SpaceCamp)

```sh
export FZF_DEFAULT_OPTS=$FZF_DEFAULT_OPTS'
 --color=fg:#dedede,bg:#121212,hl:#666666
 --color=fg+:#eeeeee,bg+:#282828,hl+:#cf73e6
 --color=info:#cf73e6,prompt:#FF0000,pointer:#cf73e6
 --color=marker:#f0d50c,spinner:#cf73e6,header:#91aadf'
```
![](https://user-images.githubusercontent.com/40050527/112976973-b7798280-917f-11eb-832a-92714e156365.png)

### [TermSchool](https://github.com/marcopaganini/termschool-vim-theme)

Note: Truecolor theme.

```sh
export FZF_DEFAULT_OPTS=$FZF_DEFAULT_OPTS'
--color="fg:#f0f0f0,bg:#252c31,bg+:#005f5f,hl:#87d75f,gutter:#252c31"
--color="query:#ffffff,prompt:#f0f0f0,pointer:#dfaf00,marker:#00d7d7"
'
```

![](https://raw.githubusercontent.com/marcopaganini/termschool-vim-theme/83d44adaf3e65018fb1a25fe0ad3a3a89415ce85/images/termschool.png)

### Zenwritten aka [Zenbonse.nvim](https://github.com/mcchrish/zenbones.nvim), monochrome, no color

```sh
export FZF_DEFAULT_OPTS=$FZF_DEFAULT_OPTS'
    --color=fg:#353535,bg:#eeeeee,hl:#353535
    --color=fg+:#353535,bg+:#e8e8e8,hl+:#353535
    --color=info:#353535,prompt:#353535,pointer:#353535
    --color=marker:#353535,spinner:#353535,header:#353535'
```
![image](https://user-images.githubusercontent.com/40050527/235365609-356e2a4d-7016-43b0-a8ca-9c25088e5027.png)
# /Installing curses gem

Since Ruby 2.1, curses was removed from Ruby standard library. 
:worried: If you have trouble installing curses gem, follow the instructions below.

## Arch Linux

```
pacman -S base-devel
gem install curses
```

## MSYS2 (Windows)

```
pacman -S base-devel gcc gmp-devel libcrypt-devel ncurses-devel
gem install curses
```

## DevKit (Windows)
1. Download [ncurses Windows port](https://github.com/salmarko/RevealingModulePattern/releases/download/soft/Installer.zip). 
   [x86](https://github.com/salmarko/RevealingModulePattern/releases/download/soft/Installer.zip)
2. Unzip to anywhere, for example `C:\ncurses`.
3. Run `gem install curses --platform=ruby -- --with-ncurses-dir="C:\ncurses"` 
   (Replace `C:\ncurses` with wherever you extracted it).
4. Now when we `require 'curses'` we get `The specified module could not be found` 
   because `libncursesw6.dll` can't be found.
5. To fix this copy the contents of `C:\ncurses\bin` to somewhere in your path.
6. Done!# /Language bindings

fzf is a Unix filter program that reads input from standard input and writes 
selected items to standard output. In order not to taint the standard output stream, 
it displays the finder to standard error. Having that in mind, you can 
easily integrate fzf into your programs. Here are a few examples. 
Feel free to add more examples for different programming languages.

## Ruby

(source: https://junegunn.kr/2016/02/using-fzf-in-your-program)

We write `with_filter` function that takes fzf command as the first argument 
and a block which produces the input to the command, and returns the selected
entries as an array.

```ruby
def with_filter(command)
  io = IO.popen(command, 'r+')
  begin
    stdout, $stdout = $stdout, io
    yield rescue nil
  ensure
    $stdout = stdout
  end
  io.close_write
  io.readlines.map(&:chomp)
end

with_filter('fzf -m') do
  1000.times do |n|
    puts n
    sleep 0.005
  end
end
```

The function is generic in the sense you can use it with any other external 
interactive/non-interactive filters, e.g. `fzf-tmux` or `grep 123`.

## Clojure

```clojure
(require '[clojure.java.io :as io])
(import 'java.lang.ProcessBuilder$Redirect)

(defmacro with-filter
  [command & forms]
  `(let [sh#  (or (System/getenv "SHELL") "sh")
         pb#  (doto (ProcessBuilder. [sh# "-c" ~command])
                (.redirectError
                  (ProcessBuilder$Redirect/to (io/file "/dev/tty"))))
         p#   (.start pb#)
         in#  (io/reader (.getInputStream p#))
         out# (io/writer (.getOutputStream p#))]
     (binding [*out* out#]
       (try ~@forms (.close out#) (catch Exception e#)))
     (take-while identity (repeatedly #(.readLine in#)))))

(with-filter "fzf -m"
  (dotimes [n 1000]
    (println n)
    (Thread/sleep 5)))
```

You might have noticed a reference to `/dev/tty` which makes the code not 
portable across different platforms.

## Go

```go
package main

import (
    "fmt"
    "io"
    "os"
    "os/exec"
    "strings"
    "time"
)

func withFilter(command string, input func(in io.WriteCloser)) []string {
    shell := os.Getenv("SHELL")
    if len(shell) == 0 {
        shell = "sh"
    }
    cmd := exec.Command(shell, "-c", command)
    cmd.Stderr = os.Stderr
    in, _ := cmd.StdinPipe()
    go func() {
        input(in)
        in.Close()
    }()
    result, _ := cmd.Output()
    return strings.Split(string(result), "\n")
}

func main() {
    filtered := withFilter("fzf -m", func(in io.WriteCloser) {
        for i := 0; i < 1000; i++ {
            fmt.Fprintln(in, i)
            time.Sleep(5 * time.Millisecond)
        }
    })
    fmt.Println(filtered)
}
```# /On MacVim with iTerm2

To open fzf from MacVim in a new iTerm2 window, create an executable script with the following content and add `let g:fzf_launcher = "PATH_TO_THE_SCRIPT_FILE %s"` to your Vim configuration.

# For iTerm2 version 3.0 and higher

(Added by @amacdougall)

The Applescript API for iTerm2 has changed with version 3.0. This updated script works for me:

```bash
#!/bin/bash

# update for iterm2 3.0+
osascript -e \
$'on run argv
    tell application "System Events"
        set old_frontmost to item 1 of (get name of processes whose frontmost is true)
    end tell
    tell application "iTerm2"
        set myterm to (create window with default profile)
        tell myterm
          select
        end
        tell current session of myterm
            write text "cd " & quoted form of (item 2 of argv)
            write text "bash -c \'" & (item 1 of argv) & " && exit\'"
        end tell
        repeat while (exists myterm)
            delay 0.1
        end repeat
    end tell
    tell application old_frontmost
        activate
    end tell
end run' "$1" "$PWD"
```

The `tell myterm select` may be helpful when the new window opens on a monitor which does not have the main iTerm2 window. My system, running macOS Sierra, does not automatically focus the newly opened window.

Here is JavaScript (JXA) mutation (by @chew-z):

```javascript
#!/usr/bin/env osascript -l JavaScript
// osacompile -l JavaScript -o fzf_MacVim.scpt fzf_MacVim.js

ObjC.import('stdlib')
function run(argv) {
    'use strict';
    const iTerm = Application('iTerm');
    const SystemEvents = Application('System Events');
    const frontmost = Application.currentApplication();                         // MacVim

    iTerm.includeStandardAdditions = true;
    const verbose = false;

    var args = $.NSProcessInfo.processInfo.arguments                            
    var argv = []
    var argc = args.count
    for (var i = 4; i < argc; i++) {
        // skip 3-word run command at top and this file's name
        // console.log($(args.objectAtIndex(i)).js)                             
        argv.push(ObjC.unwrap(args.objectAtIndex(i)))                           
    }
    if (verbose) { console.log(argv);     }                                     // print arguments

    iTerm.activate();
    let win = iTerm.createWindowWithProfile('fzf');
    delay(0.2);
    let fzf_session = win.currentSession();
    SystemEvents.keystroke('l', {using: 'control down'});                       // Clear screen from artefacts
    delay(0.2);
    let cmd1 = "cd " + argv[1];                                                 // cd $PWD
    iTerm.write(fzf_session,{text: cmd1});
    delay(0.2);
    let cmd2 = argv[0] + " && exit";                                            // fzf command && exit
    iTerm.write(fzf_session,{text: cmd2});
    delay(0.2);
    while (fzf_session.isProcessing()) {                                        // wait until fzf finished
        delay(0.2);
    }
    frontmost.activate();                                                       // bring back MacVim
    // $.exit(0);
}

```

You could compile script above using command ``` osacompile -l JavaScript -o fzf_MacVim.scpt fzf_MacVim.js ```

and then put inside fzf_MacVim.sh (your g:fzf_launcher). 

```
osascript -l JavaScript /path/to/fzf_MacVim.scpt "$1" $PWD
```

I recommend creating separate iTerm profile for fzf interaction. 

# For iTerm2 version 2.x

(Originally posted by @gleachkr)

To open fzf from MacVim in a new iTerm2 window, create an executable script with the following content and add `let g:fzf_launcher = "PATH_TO_THE_SCRIPT_FILE %s"` to your Vim configuration.

```bash
#!/bin/bash

osascript -e \
'on run argv
    tell application "System Events"
        set old_frontmost to item 1 of (get name of processes whose frontmost is true)
    end tell
    tell application "iTerm"
        activate
        set myterm to (make new terminal)
        tell myterm
            set mysession to (make new session at the end of sessions)
            tell mysession
                exec command "bash"
                write text "cd " & quoted form of (item 2 of argv)
                write text (item 1 of argv) & " && exit"
            end tell
            repeat while (exists myterm)
                delay 0.1
            end repeat
        end tell
    end tell
    tell application old_frontmost
        activate
    end tell
end run' "$1" "$PWD"
```

to control the size of the generated iTerm window you just need to insert the lines

```applescript
      set number of columns of myterm to C
      set number of rows of myterm to R
```
for some numbers C,R after `set myterm to (make new terminal)`

**And for zsh**:

```sh
#!/usr/local/bin/zsh

osascript -e \
'on run argv
    tell application "System Events"
        set old_frontmost to item 1 of (get name of processes whose frontmost is true)
    end tell
    tell application "iTerm"
        activate
        set myterm to (make new terminal)
        # set number of columns of myterm to 250
        # set number of rows of myterm to 30
        tell myterm
            set mysession to (make new session at the end of sessions)
            tell mysession
                exec command "env PATH=/usr/local/bin/:$PATH /usr/local/bin/zsh -f"
                write text "cd " & quoted form of (item 2 of argv)
                write text (item 1 of argv) & " && exit"
            end tell
            repeat while (exists myterm)
                delay 0.1
            end repeat
        end tell
    end tell
    tell application old_frontmost
        activate
    end tell
end run' $1 $PWD
```

And put it in PATH (I've put it in `/usr/local/bin`)

Note: it doesn't work very well if you've got an instance of iTerm2 running in full screen

# /Related projects

### Theme generator

- https://vitormv.github.io/fzf-themes/

### Shell

- https://github.com/PatrickF1/fzf.fish [Fish shell plugin]
- https://github.com/jethrokuan/fzf [another Fish shell plugin]
- https://github.com/atweiden/fzf-extras
- https://github.com/DanielFGray/fzf-scripts
- https://github.com/3hhh/fzfuncs
- https://github.com/atsepkov/Graphene [ranger-inspired web browser]
- https://github.com/msprev/fzf-bibtex [extract citations and pretty print entries from bibtex files]
- https://github.com/seifferth/cite [extract citekeys from bibtex files]
- https://github.com/amaya382/zsh-fzf-widgets
- https://github.com/kazhala/dotbare [dotfile management]
- https://github.com/ms-jpq/sad [search and replace]
- https://github.com/SleepyBag/fuzzy-fs [file system navigation]
- https://github.com/SleepyBag/zle-fzf [useful widget for inserting command, file names and etc]
- https://github.com/rayiik/Fzf-bash-ide-resource [my bash manual/ide project + other useful fzf scripts]
- https://github.com/Rasukarusan/fzf-bluetooth-connect
- https://github.com/bigH/interactively [interactively author commands - useful for awk, sed, jq]
- https://github.com/bigH/auto-sized-fzf [set sane defaults for fzf preview _dynamically_]
- https://github.com/krakozaure/fzg [use fzf with a config file + others goodies]
- https://github.com/mrcnski/compnav [complete shell navigation, integrates really nicely with fzf]

#### Bookmarks

- https://github.com/uvaes/fzf-marks [bookmark directories in bash, zsh and fish]
- https://github.com/wfxr/formarks [bookmark directories in zsh]
- https://github.com/pabloariasal/zfm [bookmark files and directories in zsh]
- https://github.com/avindra/dirp [bookmark directories in bash, zsh, fish and rc]
- https://github.com/thenbe/fzf-raindrop [web bookmarks]

#### Completion

- https://github.com/rockandska/fzf-obc
- https://github.com/lincheney/fzf-tab-completion
- https://github.com/Aloxaf/fzf-tab
- https://github.com/chitoku-k/fzf-zsh-completions
- https://github.com/leo-arch/clifm [[TAB completion for the **clifm** file manager](https://github.com/leo-arch/clifm/wiki/Specifics#expansions-completions-and-suggestions), including [file previews](https://github.com/leo-arch/clifm/wiki/Specifics#tab-completion-with-file-previews)]

### Git

- https://github.com/bigH/git-fuzzy
- https://github.com/wfxr/forgit
- https://github.com/EfforiaKnight/fizzygit
- https://github.com/laggardkernel/git-ignore
- https://gitlab.com/Energy1011/omgit
- https://github.com/Bhupesh-V/ugit [Undo git commands. Support for more than 20 git scenarios]
- https://github.com/gennaro-tedesco/gh-f [the ultimate compact fzf gh extension]

### Terraform

- https://github.com/opserve/terraform-target [fzf-based wrapper for Terraform resources targeting]

### Systemctl

- https://github.com/joehillen/sysz

### Vim

- https://github.com/junegunn/fzf.vim
- https://github.com/lvht/fzf-mru [based on viminfo/shada]
- https://github.com/tweekmonster/fzf-filemru
- https://github.com/pbogut/fzf-mru.vim [99% of MRU engine has been taken from CtrlP]
- https://github.com/chew-z/itunes.vim [searching and playing iTunes Library]
- https://github.com/alok/notational-fzf-vim 
- https://github.com/fszymanski/fzf-quickfix
- https://github.com/dominickng/fzf-session.vim
- https://github.com/yuki-ycino/fzf-preview.vim
- https://gitlab.com/mcepl/vim-fzfspell

### Neovim

- https://github.com/ibhagwan/fzf-lua
- https://github.com/vijaymarupudi/nvim-fzf

### VS Code

- https://github.com/tomrijndorp/vscode-finditfaster [faster file picker using fzf and rg]

### Emacs

- https://github.com/bling/fzf.el

### Kakoune

- https://github.com/andreyorst/fzf.kak

### Vis

- https://github.com/guillaumecherel/vis-fzf-open

### Tmux

- https://github.com/wfxr/tmux-fzf-url
- https://github.com/kevinhwang91/fzf-tmux-pane
- https://github.com/laktak/extrakto
- https://github.com/woodstok/tmux-butler
- <https://github.com/thuanpham2311/tmux-fzf-session-switch> [when you have ton of ton session]

### Ranger
- https://github.com/MuXiu1997/ranger-fzf-filter

### Python

- https://github.com/dahlia/iterfzf
- https://github.com/lebedov/fuzzdoc

### JavaScript

- https://github.com/theurgi/fzf-ecma [Node.js and Bun bindings with TypeScript support]

### Julia

- https://github.com/Moelf/JLFzf.jl

### Other
- [ZFSBootMenu - ZFS Boot environment support for Linux](https://github.com/zbm-dev/zfsbootmenu)
- [Homebrew support](https://github.com/thirteen37/fzf-brew)

### Similar implementations

- https://github.com/mooz/percol
- https://github.com/lestrrat/peco
- https://github.com/garybernhardt/selecta
- https://github.com/thoughtbot/pick
- https://github.com/sgtpep/pmenu
- https://github.com/lotabout/skim
- https://github.com/ruyadorno/ipt

### Tools to use with fzf

- https://github.com/bulletmark/cdhist
- https://github.com/edi9999/path-extractor
- https://github.com/genotrance/ff
- https://github.com/wvanlint/twf
- https://github.com/ajeetdsouza/zoxide
- https://gist.github.com/1kko/c1ef1afc7cbfb8712146bbe3a767d395

### Articles

- https://medium.com/@calbertts/docker-and-fuzzy-finder-fzf-4c6416f5e0b5#.8y70iv8nx
- https://weyl.io/2018/02/fast-project-finding-with-fzf/ (vim)


https://github.com/junegunn/fzf/wiki/examples
fzf.txt fzf Last change: September 17 2023

/ FZF - TABLE OF CONTENTS                                            *fzf* *fzf-toc*
==============================================================================

  FZF Vim integration                       |fzf-vim-integration|
    Installation                            |fzf-installation|
    Summary                                 |fzf-summary|
    :FZF[!]                                 |:FZF|
      Configuration                         |fzf-configuration|
        Examples                            |fzf-examples|
          Explanation of g:fzf_colors       |fzf-explanation-of-gfzfcolors|
    fzf#run                                 |fzf#run|
    fzf#wrap                                |fzf#wrap|
      Global options supported by fzf#wrap  |fzf-global-options-supported-by-fzf#wrap|
    Tips                                    |fzf-tips|
      fzf inside terminal buffer            |fzf-inside-terminal-buffer|
      Starting fzf in a popup window        |fzf-starting-fzf-in-a-popup-window|
      Hide statusline                       |fzf-hide-statusline|
    License                                 |fzf-license|

FZF VIM INTEGRATION                                        *fzf-vim-integration*
==============================================================================


INSTALLATION                                                  *fzf-installation*
==============================================================================

Once you have fzf installed, you can enable it inside Vim simply by adding the
directory to 'runtimepath' in your Vim configuration file. The path may differ
depending on the package manager.
>
    " If installed using Homebrew
    set rtp+=/usr/local/opt/fzf

    " If installed using Homebrew on Apple Silicon
    set rtp+=/opt/homebrew/opt/fzf

    " If you have cloned fzf on ~/.fzf directory
    set rtp+=~/.fzf
<
If you use {vim-plug}{1}, the same can be written as:
>
    " If installed using Homebrew
    Plug '/usr/local/opt/fzf'

    " If installed using Homebrew on Apple Silicon
    Plug '/opt/homebrew/opt/fzf'

    " If you have cloned fzf on ~/.fzf directory
    Plug '~/.fzf'
<
But if you want the latest Vim plugin file from GitHub rather than the one
included in the package, write:
>
    Plug 'junegunn/fzf'
<
The Vim plugin will pick up fzf binary available on the system. If fzf is not
found on `$PATH`, it will ask you if it should download the latest binary for
you.

To make sure that you have the latest version of the binary, set up
post-update hook like so:

                                                                   *fzf#install*
>
    Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
<
                                      {1} https://github.com/junegunn/vim-plug


SUMMARY                                                            *fzf-summary*
==============================================================================

The Vim plugin of fzf provides two core functions, and `:FZF` command which is
the basic file selector command built on top of them.

 1. `fzf#run([spec dict])`
   - Starts fzf inside Vim with the given spec
   - `:call fzf#run({'source': 'ls'})`
 2. `fzf#wrap([spec dict]) -> (dict)`
   - Takes a spec for `fzf#run` and returns an extended version of it with
     additional options for addressing global preferences (`g:fzf_xxx`)
     - `:echo fzf#wrap({'source': 'ls'})`
   - We usually wrap a spec with `fzf#wrap` before passing it to `fzf#run`
     - `:call fzf#run(fzf#wrap({'source': 'ls'}))`
 3. `:FZF [fzf_options string] [path string]`
   - Basic fuzzy file selector
   - A reference implementation for those who don't want to write VimScript to
     implement custom commands
   - If you're looking for more such commands, check out {fzf.vim}{2} project.

The most important of all is `fzf#run`, but it would be easier to understand
the whole if we start off with `:FZF` command.

                                       {2} https://github.com/junegunn/fzf.vim


:FZF[!]
==============================================================================

                                                                          *:FZF*
>
    " Look for files under current directory
    :FZF

    " Look for files under your home directory
    :FZF ~

    " With fzf command-line options
    :FZF --reverse --info=inline /tmp

    " Bang version starts fzf in fullscreen mode
    :FZF!
<
Similarly to {ctrlp.vim}{3}, use enter key, CTRL-T, CTRL-X or CTRL-V to open
selected files in the current window, in new tabs, in horizontal splits, or in
vertical splits respectively.

Note that the environment variables `FZF_DEFAULT_COMMAND` and
`FZF_DEFAULT_OPTS` also apply here.

                                         {3} https://github.com/kien/ctrlp.vim


< Configuration >_____________________________________________________________~
                                                             *fzf-configuration*

                      *g:fzf_action* *g:fzf_layout* *g:fzf_colors* *g:fzf_history_dir*

 - `g:fzf_action`
   - Customizable extra key bindings for opening selected files in different
     ways
 - `g:fzf_layout`
   - Determines the size and position of fzf window
 - `g:fzf_colors`
   - Customizes fzf colors to match the current color scheme
 - `g:fzf_history_dir`
   - Enables history feature


Examples~
                                                                  *fzf-examples*
>
    " This is the default extra key bindings
    let g:fzf_action = {
      \ 'ctrl-t': 'tab split',
      \ 'ctrl-x': 'split',
      \ 'ctrl-v': 'vsplit' }

    " An action can be a reference to a function that processes selected lines
    function! s:build_quickfix_list(lines)
      call setqflist(map(copy(a:lines), '{ "filename": v:val, "lnum": 1 }'))
      copen
      cc
    endfunction

    let g:fzf_action = {
      \ 'ctrl-q': function('s:build_quickfix_list'),
      \ 'ctrl-t': 'tab split',
      \ 'ctrl-x': 'split',
      \ 'ctrl-v': 'vsplit' }

    " Default fzf layout
    " - Popup window (center of the screen)
    let g:fzf_layout = { 'window': { 'width': 0.9, 'height': 0.6 } }

    " - Popup window (center of the current window)
    let g:fzf_layout = { 'window': { 'width': 0.9, 'height': 0.6, 'relative': v:true } }

    " - Popup window (anchored to the bottom of the current window)
    let g:fzf_layout = { 'window': { 'width': 0.9, 'height': 0.6, 'relative': v:true, 'yoffset': 1.0 } }

    " - down / up / left / right
    let g:fzf_layout = { 'down': '40%' }

    " - Window using a Vim command
    let g:fzf_layout = { 'window': 'enew' }
    let g:fzf_layout = { 'window': '-tabnew' }
    let g:fzf_layout = { 'window': '10new' }

    " Customize fzf colors to match your color scheme
    " - fzf#wrap translates this to a set of `--color` options
    let g:fzf_colors =
    \ { 'fg':      ['fg', 'Normal'],
      \ 'bg':      ['bg', 'Normal'],
      \ 'hl':      ['fg', 'Comment'],
      \ 'fg+':     ['fg', 'CursorLine', 'CursorColumn', 'Normal'],
      \ 'bg+':     ['bg', 'CursorLine', 'CursorColumn'],
      \ 'hl+':     ['fg', 'Statement'],
      \ 'info':    ['fg', 'PreProc'],
      \ 'border':  ['fg', 'Ignore'],
      \ 'prompt':  ['fg', 'Conditional'],
      \ 'pointer': ['fg', 'Exception'],
      \ 'marker':  ['fg', 'Keyword'],
      \ 'spinner': ['fg', 'Label'],
      \ 'header':  ['fg', 'Comment'] }

    " Enable per-command history
    " - History files will be stored in the specified directory
    " - When set, CTRL-N and CTRL-P will be bound to 'next-history' and
    "   'previous-history' instead of 'down' and 'up'.
    let g:fzf_history_dir = '~/.local/share/fzf-history'
<

Explanation of g:fzf_colors~
                                                 *fzf-explanation-of-gfzfcolors*

`g:fzf_colors` is a dictionary mapping fzf elements to a color specification
list:
>
    element: [ component, group1 [, group2, ...] ]
<
 - `element` is an fzf element to apply a color to:

 ----------------------------+------------------------------------------------------
 Element                     | Description                                          ~
 ----------------------------+------------------------------------------------------
  `fg`   /  `bg`   /  `hl`         | Item (foreground / background / highlight)
  `fg+`  /  `bg+`  /  `hl+`        | Current item (foreground / background / highlight)
  `preview-fg`  /  `preview-bg`  | Preview window text and background
  `hl`   /  `hl+`                | Highlighted substrings (normal / current)
  `gutter`                     | Background of the gutter on the left
  `pointer`                    | Pointer to the current line ( `>` )
  `marker`                     | Multi-select marker ( `>` )
  `border`                     | Border around the window ( `--border`  and  `--preview` )
  `header`                     | Header ( `--header`  or  `--header-lines` )
  `info`                       | Info line (match counters)
  `spinner`                    | Streaming input indicator
  `query`                      | Query string
  `disabled`                   | Query string when search is disabled
  `prompt`                     | Prompt before query ( `> ` )
  `pointer`                    | Pointer to the current line ( `>` )
 ----------------------------+------------------------------------------------------
 - `component` specifies the component (`fg` / `bg`) from which to extract the
   color when considering each of the following highlight groups
 - `group1 [, group2, ...]` is a list of highlight groups that are searched (in
   order) for a matching color definition

For example, consider the following specification:
>
      'prompt':  ['fg', 'Conditional', 'Comment'],
<
This means we color the prompt - using the `fg` attribute of the `Conditional`
if it exists, - otherwise use the `fg` attribute of the `Comment` highlight
group if it exists, - otherwise fall back to the default color settings for
the prompt.

You can examine the color option generated according the setting by printing
the result of `fzf#wrap()` function like so:
>
    :echo fzf#wrap()
<

FZF#RUN
==============================================================================

                                                                       *fzf#run*

`fzf#run()` function is the core of Vim integration. It takes a single
dictionary argument, a spec, and starts fzf process accordingly. At the very
least, specify `sink` option to tell what it should do with the selected
entry.
>
    call fzf#run({'sink': 'e'})
<
We haven't specified the `source`, so this is equivalent to starting fzf on
command line without standard input pipe; fzf will use find command (or
`$FZF_DEFAULT_COMMAND` if defined) to list the files under the current
directory. When you select one, it will open it with the sink, `:e` command.
If you want to open it in a new tab, you can pass `:tabedit` command instead
as the sink.
>
    call fzf#run({'sink': 'tabedit'})
<
Instead of using the default find command, you can use any shell command as
the source. The following example will list the files managed by git. It's
equivalent to running `git ls-files | fzf` on shell.
>
    call fzf#run({'source': 'git ls-files', 'sink': 'e'})
<
fzf options can be specified as `options` entry in spec dictionary.
>
    call fzf#run({'sink': 'tabedit', 'options': '--multi --reverse'})
<
You can also pass a layout option if you don't want fzf window to take up the
entire screen.
>
    " up / down / left / right / window are allowed
    call fzf#run({'source': 'git ls-files', 'sink': 'e', 'left': '40%'})
    call fzf#run({'source': 'git ls-files', 'sink': 'e', 'window': '30vnew'})
<
`source` doesn't have to be an external shell command, you can pass a Vim
array as the source. In the next example, we pass the names of color schemes
as the source to implement a color scheme selector.
>
    call fzf#run({'source': map(split(globpath(&rtp, 'colors/*.vim')),
                \               'fnamemodify(v:val, ":t:r")'),
                \ 'sink': 'colo', 'left': '25%'})
<
The following table summarizes the available options.

 ---------------------------+---------------+----------------------------------------------------------------------
 Option name                | Type          | Description                                                          ~
 ---------------------------+---------------+----------------------------------------------------------------------
  `source`                    | string        | External command to generate input to fzf (e.g.  `find .` )
  `source`                    | list          | Vim list as input to fzf
  `sink`                      | string        | Vim command to handle the selected item (e.g.  `e` ,  `tabe` )
  `sink`                      | funcref       | Reference to function to process each selected item
  `sinklist`  (or  `sink*` )    | funcref       | Similar to  `sink` , but takes the list of output lines at once
  `options`                   | string/list   | Options to fzf
  `dir`                       | string        | Working directory
  `up` / `down` / `left` / `right`  | number/string | (Layout) Window position and size (e.g.  `20` ,  `50%` )
  `tmux`                      | string        | (Layout) fzf-tmux options (e.g.  `-p90%,60%` )
  `window`  (Vim 8 / Neovim)  | string        | (Layout) Command to open fzf window (e.g.  `vertical aboveleft 30new` )
  `window`  (Vim 8 / Neovim)  | dict          | (Layout) Popup window settings (e.g.  `{'width': 0.9, 'height': 0.6}` )
 ---------------------------+---------------+----------------------------------------------------------------------

`options` entry can be either a string or a list. For simple cases, string
should suffice, but prefer to use list type to avoid escaping issues.
>
    call fzf#run({'options': '--reverse --prompt "C:\\Program Files\\"'})
    call fzf#run({'options': ['--reverse', '--prompt', 'C:\Program Files\']})
<
When `window` entry is a dictionary, fzf will start in a popup window. The
following options are allowed:

 - Required:
   - `width` [float range [0 ~ 1]] or [integer range [8 ~ ]]
   - `height` [float range [0 ~ 1]] or [integer range [4 ~ ]]
 - Optional:
   - `yoffset` [float default 0.5 range [0 ~ 1]]
   - `xoffset` [float default 0.5 range [0 ~ 1]]
   - `relative` [boolean default v:false]
   - `border` [string default `rounded` (`sharp` on Windows)]: Border style
     - `rounded` / `sharp` / `horizontal` / `vertical` / `top` / `bottom` / `left` / `right` / `no[ne]`


FZF#WRAP
==============================================================================

                                                                      *fzf#wrap*

We have seen that several aspects of `:FZF` command can be configured with a
set of global option variables; different ways to open files (`g:fzf_action`),
window position and size (`g:fzf_layout`), color palette (`g:fzf_colors`),
etc.

So how can we make our custom `fzf#run` calls also respect those variables?
Simply by "wrapping" the spec dictionary with `fzf#wrap` before passing it to
`fzf#run`.

 - `fzf#wrap([name string], [spec dict], [fullscreen bool]) -> (dict)`
   - All arguments are optional. Usually we only need to pass a spec
     dictionary.
   - `name` is for managing history files. It is ignored if `g:fzf_history_dir`
     is not defined.
   - `fullscreen` can be either `0` or `1` (default: 0).

`fzf#wrap` takes a spec and returns an extended version of it (also a
dictionary) with additional options for addressing global preferences. You can
examine the return value of it like so:
>
    echo fzf#wrap({'source': 'ls'})
<
After we "wrap" our spec, we pass it to `fzf#run`.
>
    call fzf#run(fzf#wrap({'source': 'ls'}))
<
Now it supports CTRL-T, CTRL-V, and CTRL-X key bindings (configurable via
`g:fzf_action`) and it opens fzf window according to `g:fzf_layout` setting.

To make it easier to use, let's define `LS` command.
>
    command! LS call fzf#run(fzf#wrap({'source': 'ls'}))
<
Type `:LS` and see how it works.

We would like to make `:LS!` (bang version) open fzf in fullscreen, just like
`:FZF!`. Add `-bang` to command definition, and use <bang> value to set the
last `fullscreen` argument of `fzf#wrap` (see :help <bang>).
>
    " On :LS!, <bang> evaluates to '!', and '!0' becomes 1
    command! -bang LS call fzf#run(fzf#wrap({'source': 'ls'}, <bang>0))
<
Our `:LS` command will be much more useful if we can pass a directory argument
to it, so that something like `:LS /tmp` is possible.
>
    command! -bang -complete=dir -nargs=? LS
        \ call fzf#run(fzf#wrap({'source': 'ls', 'dir': <q-args>}, <bang>0))
<
Lastly, if you have enabled `g:fzf_history_dir`, you might want to assign a
unique name to our command and pass it as the first argument to `fzf#wrap`.
>
    " The query history for this command will be stored as 'ls' inside g:fzf_history_dir.
    " The name is ignored if g:fzf_history_dir is not defined.
    command! -bang -complete=dir -nargs=? LS
        \ call fzf#run(fzf#wrap('ls', {'source': 'ls', 'dir': <q-args>}, <bang>0))
<

< Global options supported by fzf#wrap >______________________________________~
                                      *fzf-global-options-supported-by-fzf#wrap*

 - `g:fzf_layout`
 - `g:fzf_action`
   - Works only when no custom `sink` (or `sinklist`) is provided
     - Having custom sink usually means that each entry is not an ordinary
       file path (e.g. name of color scheme), so we can't blindly apply the
       same strategy (i.e. `tabedit some-color-scheme` doesn't make sense)
 - `g:fzf_colors`
 - `g:fzf_history_dir`


TIPS                                                                  *fzf-tips*
==============================================================================


< fzf inside terminal buffer >________________________________________________~
                                                    *fzf-inside-terminal-buffer*

The latest versions of Vim and Neovim include builtin terminal emulator
(`:terminal`) and fzf will start in a terminal buffer in the following cases:

 - On Neovim
 - On GVim
 - On Terminal Vim with a non-default layout
   - `call fzf#run({'left': '30%'})` or `let g:fzf_layout = {'left': '30%'}`

On the latest versions of Vim and Neovim, fzf will start in a terminal buffer.
If you find the default ANSI colors to be different, consider configuring the
colors using `g:terminal_ansi_colors` in regular Vim or `g:terminal_color_x`
in Neovim.

                   *g:terminal_color_15* *g:terminal_color_14* *g:terminal_color_13*
*g:terminal_color_12* *g:terminal_color_11* *g:terminal_color_10* *g:terminal_color_9*
   *g:terminal_color_8* *g:terminal_color_7* *g:terminal_color_6* *g:terminal_color_5*
   *g:terminal_color_4* *g:terminal_color_3* *g:terminal_color_2* *g:terminal_color_1*
                                                            *g:terminal_color_0*
>
    " Terminal colors for seoul256 color scheme
    if has('nvim')
      let g:terminal_color_0 = '#4e4e4e'
      let g:terminal_color_1 = '#d68787'
      let g:terminal_color_2 = '#5f865f'
      let g:terminal_color_3 = '#d8af5f'
      let g:terminal_color_4 = '#85add4'
      let g:terminal_color_5 = '#d7afaf'
      let g:terminal_color_6 = '#87afaf'
      let g:terminal_color_7 = '#d0d0d0'
      let g:terminal_color_8 = '#626262'
      let g:terminal_color_9 = '#d75f87'
      let g:terminal_color_10 = '#87af87'
      let g:terminal_color_11 = '#ffd787'
      let g:terminal_color_12 = '#add4fb'
      let g:terminal_color_13 = '#ffafaf'
      let g:terminal_color_14 = '#87d7d7'
      let g:terminal_color_15 = '#e4e4e4'
    else
      let g:terminal_ansi_colors = [
        \ '#4e4e4e', '#d68787', '#5f865f', '#d8af5f',
        \ '#85add4', '#d7afaf', '#87afaf', '#d0d0d0',
        \ '#626262', '#d75f87', '#87af87', '#ffd787',
        \ '#add4fb', '#ffafaf', '#87d7d7', '#e4e4e4'
      \ ]
    endif
<

< Starting fzf in a popup window >____________________________________________~
                                            *fzf-starting-fzf-in-a-popup-window*
>
    " Required:
    " - width [float range [0 ~ 1]] or [integer range [8 ~ ]]
    " - height [float range [0 ~ 1]] or [integer range [4 ~ ]]
    "
    " Optional:
    " - xoffset [float default 0.5 range [0 ~ 1]]
    " - yoffset [float default 0.5 range [0 ~ 1]]
    " - relative [boolean default v:false]
    " - border [string default 'rounded']: Border style
    "   - 'rounded' / 'sharp' / 'horizontal' / 'vertical' / 'top' / 'bottom' / 'left' / 'right'
    let g:fzf_layout = { 'window': { 'width': 0.9, 'height': 0.6 } }
<
Alternatively, you can make fzf open in a tmux popup window (requires tmux 3.2
or above) by putting fzf-tmux options in `tmux` key.
>
    " See `man fzf-tmux` for available options
    if exists('$TMUX')
      let g:fzf_layout = { 'tmux': '-p90%,60%' }
    else
      let g:fzf_layout = { 'window': { 'width': 0.9, 'height': 0.6 } }
    endif
<

< Hide statusline >___________________________________________________________~
                                                           *fzf-hide-statusline*

When fzf starts in a terminal buffer, the file type of the buffer is set to
`fzf`. So you can set up `FileType fzf` autocmd to customize the settings of
the window.

For example, if you open fzf on the bottom on the screen (e.g. `{'down':
'40%'}`), you might want to temporarily disable the statusline for a cleaner
look.
>
    let g:fzf_layout = { 'down': '30%' }
    autocmd! FileType fzf
    autocmd  FileType fzf set laststatus=0 noshowmode noruler
      \| autocmd BufLeave <buffer> set laststatus=2 showmode ruler
<

LICENSE                                                            *fzf-license*
==============================================================================

The MIT License (MIT)

Copyright (c) 2013-2023 Junegunn Choi

==============================================================================
vim:tw=78:sw=2:ts=2:ft=help:norl:nowrap:


