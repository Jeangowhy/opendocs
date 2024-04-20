#!/usr/bin/env bash
exit
# https://github.com/commercialhaskell/stack
# https://docs.haskellstack.org/en/stable/stack_work/
#git clone --depth=1 git@github.com:commercialhaskell/stack /pl/stack
pushd '/pl/stack'
out=/od/haskell_stack.md
while read file; do
    if ! [[ -z "$file" ]]; then printf "# /$file\n\n" >> $out; fi
    if ! [[ -a "$file" ]]; then continue; fi
    cat "$file" >> $out
done <<EOF
doc/README.md

General guidnce
    doc/install_and_upgrade.md
    doc/GUIDE.md
    doc/faq.md
    doc/glossary.md
    doc/other_resources.md
    doc/ChangeLog.md
    doc/SIGNING_KEY.md

Reference (advanced)
    doc/GUIDE_advanced.md
    doc/environment_variables.md
    doc/yaml_configuration.md
    doc/global_flags.md
    doc/build_command.md
    doc/clean_command.md
    doc/config_command.md
    doc/docker_command.md
    doc/dot_command.md
    doc/eval_command.md
    doc/exec_command.md
    doc/ghc_command.md
    doc/hoogle_command.md
    doc/hpc_command.md
    doc/ide_command.md
    doc/init_command.md
    doc/list_command.md
    doc/ls_command.md
    doc/new_command.md
    doc/path_command.md
    doc/purge_command.md
    doc/query_command.md
    doc/runghc_command.md
    doc/run_command.md
    doc/script_command.md
    doc/sdist_command.md
    doc/setup_command.md
    doc/templates_command.md
    doc/uninstall_command.md
    doc/unpack_command.md
    doc/update_command.md
    doc/upgrade_command.md
    doc/upload_command.md

Specific topics
    doc/stack_root.md
    doc/pantry.md
    doc/custom_snapshot.md
    doc/stack_yaml_vs_cabal_package_file.md
    doc/scripts.md
    doc/docker_integration.md
    doc/nix_integration.md
    doc/editor_integration.md
    doc/debugging.md
    doc/developing_on_windows.md
    doc/shell_autocompletion.md
    doc/CI.md
    doc/travis_ci.md
    doc/azure_ci.md
    doc/lock_files.md
    doc/stack_work.md

How Stack works (advanced)
    doc/build_overview.md
    doc/CONTRIBUTING.md
    doc/ghci.md
    doc/nonstandard_project_init.md
    doc/SIGNING_KEY.md
    doc/Stack_and_VS_Code.md

Stack's code (advanced)
    doc/CONTRIBUTING.md
    doc/dev_containers.md
    doc/maintainers/7zip.md
    doc/maintainers/archive/releases.md
    doc/maintainers/docker.md
    doc/maintainers/docker_images.md
    doc/maintainers/ghc.md
    doc/maintainers/haskellstack.org.md
    doc/maintainers/msys.md
    doc/maintainers/releases.md
    doc/maintainers/self-hosted_runners.md
    doc/maintainers/stack_errors.md
    doc/maintainers/team_process.md
EOF
exit


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/README.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The Haskell Tool Stack

Welcome to the [Haskell](https://www.haskell.org/) programming language and the
Haskell Tool Stack (Stack)! Stack is a program for developing Haskell projects.
It is aimed at Haskellers both new and experienced. It is cross-platform and
aims to support fully users on Linux, macOS and Windows.

<img src="https://i.imgur.com/WW69oTj.gif" width="50%" align="right">

Stack features:

* Installing the [Glasgow Haskell Compiler (GHC)](https://www.haskell.org/ghc/)
  automatically, in an isolated location.
* Installing packages needed for your project.
* Building your project.
* Testing your project.
* Benchmarking your project.

## How to install Stack

Stack can be installed on most Unix-like operating systems (including macOS) and
Windows. It will require at least about 5 GB of disk space, for use with one
version of GHC.

!!! info

    In addition to the methods described below, Stack can also be installed
    using the separate [GHCup](https://www.haskell.org/ghcup/) installer for
    Haskell-related tools. GHCup provides Stack for some combinations of machine
    architecture and operating system not provided elsewhere. By default, the
    script to install GHCup (which can be run more than once) also configures
    Stack so that if Stack needs a version of GHC, GHCup takes over obtaining
    and installing that version.

=== "Linux"

    For most Linux distributions, the easiest way to install Stack
    directly (rather than use GHCup) is to command:

    ~~~text
    curl -sSL https://get.haskellstack.org/ | sh
    ~~~

    or:

    ~~~text
    wget -qO- https://get.haskellstack.org/ | sh
    ~~~

    !!! note

        The script at [get.haskellstack.org](https://get.haskellstack.org/) will
        ask for root access using `sudo`. It needs such access in order to use
        your platform's package manager to install dependencies and to install
        to `/usr/local/bin`. If you prefer more control, follow the manual
        installation instructions in the
        [install and upgrade guide](install_and_upgrade.md).

=== "macOS"

    From late 2020, Apple began a transition from Mac computers with Intel
    processors (Intel-based Mac) to
    [Mac computers with Apple silicon](https://support.apple.com/en-gb/HT211814).

    === "Intel-based"

        For most Intel-based Mac computers, the easiest way to install Stack
        directly (rather than use GHCup) is to command:

        ~~~text
        curl -sSL https://get.haskellstack.org/ | sh
        ~~~

        or:

        ~~~text
        wget -qO- https://get.haskellstack.org/ | sh
        ~~~

        !!! note

            The script at [get.haskellstack.org](https://get.haskellstack.org/)
            will ask for root access using `sudo`. It needs such access in order
            to use your platform's package manager to install dependencies and
            to install to `/usr/local/bin`. If you prefer more control, follow
            the manual installation instructions in the
            [install and upgrade guide](install_and_upgrade.md).

    === "Apple silicon"

        Mac computers with Apple silicon have an M1, M1 Pro, M1 Max, M1 Ultra or
        M2 chip. These chips use an architecture known as ARM64 or AArch64.

        For Mac computers with Apple silicon, the easiest way to install Stack
        directly (rather than use GHCup) is to command:

        ~~~text
        curl -sSL https://get.haskellstack.org/ | sh
        ~~~

        or:

        ~~~text
        wget -qO- https://get.haskellstack.org/ | sh
        ~~~

        !!! note

            The script at [get.haskellstack.org](https://get.haskellstack.org/)
            will ask for root access using `sudo`. It needs such access in order
            to use your platform's package manager to install dependencies and
            to install to `/usr/local/bin`. If you prefer more control, follow
            the manual installation instructions in the
            [install and upgrade guide](install_and_upgrade.md).

=== "Windows"

    On 64-bit Windows, the easiest way to install Stack directly (rather than
    use GHCup) is to download and install the
    [Windows installer](https://get.haskellstack.org/stable/windows-x86_64-installer.exe).

    !!! warning

        The Windows installer for Stack 2.9.1, 2.9.3 and 2.11.1 (only) will
        replace the user `PATH` environment variable (rather than append to it)
        if a 1024 character limit is exceeded. If the content of your existing
        user `PATH` is long, preserve it before running the installer.

    !!! note

        Systems with antivirus software may need to add Stack to the list of
        'trusted' applications.

=== "Other/direct downloads"

    For other operating systems and direct downloads (rather than use GHCup),
    see the [install and upgrade guide](install_and_upgrade.md).

## How to upgrade Stack

If Stack is already installed, you can upgrade it to the latest version by the
command:

~~~text
stack upgrade
~~~

!!! note

    If you used [GHCup](https://www.haskell.org/ghcup/) to install Stack, you
    should also use GHCup, and not Stack, to upgrade Stack.

## Quick Start guide

For an immediate experience of using Stack to build an executable with Haskell,
first you need to follow the [guide to install Stack](#how-to-install-Stack).

### Step 1: Start your new project

To start a new project named `my-project`, issue these four commands in a
terminal:

~~~text
stack new my-project
cd my-project
stack build
stack exec my-project-exe
~~~

- The `stack new my-project` command will create a new directory, named
  `my-project`. It contains all the files needed to start a project correctly,
  using a default template.
- The `cd my-project` command will change the current working directory to that
  directory.
- The `stack build` command will build the template project and create an
  executable named `my-project-exe` (on Windows, `my-project-exe.exe`). First,
  if necessary, Stack will download a version of GHC in an isolated location.
  That won't interfere with other GHC installations on your system.
- The `stack exec my-project-exe` command will run (execute) the built
  executable, in Stack's environment.

For a complete list of Stack's commands, and flags and options common to those
commands, simply command:

~~~text
stack
~~~

For help on a particular Stack command, including flags and options specific to
that command, for example `stack build`, command:

~~~text
stack build --help
~~~

If you want to launch a run-eval-print loop (REPL) environment, then command:

~~~text
stack repl
~~~

!!! info

    `stack ghci` can be used instead of `stack repl`. GHCi is GHC's REPL tool.

People organise Haskell code into packages. If you want to use Stack to install
an executable provided by a Haskell package, then all you have to do is command:

~~~text
stack install <package-name>
~~~

### Step 2: Next steps

The `stack new my-project` command in step one should have created the following
files and directories (among others):

~~~text
.
├── app
│   └── Main.hs
├── src
│   └── Lib.hs
├── test
│   └── Spec.hs
├── my-project.cabal
├── package.yaml
└── stack.yaml
~~~

The Haskell source code for the executable (application) is in file `Main.hs`.

The executable uses a library. Its source code is in file `Lib.hs`.

The contents of `my-project.cabal` describes the project's package. That file is
generated by the contents of `package.yaml`.

!!! info

    If you want, you can delete the `package.yaml` file and update the
    `my-project.cabal` file directly. Stack will then use that file.

The contents of `stack.yaml` describe Stack's own project-level configuration.

You can edit the source files in the `src` directory (used for the library) or
the `app` directory (used for the executable (application)).

As your project develops, you may need to depend on a library provided by
another Haskell package. If you do, then add the name of that new package to the
file `package.yaml`, in its `dependencies:` section.

!!! info

    When you use `stack build` again, Stack will use `package.yaml` to create an
    updated `my-project.cabal` for you.

If Stack reports that the Stack configuration has no specified version for the
new package, then follow Stack's likely recommended action to add a specific
version of that package your project's `stack.yaml` file, in its `extra-deps:`
section.

That was a really fast introduction on how to start to code in Haskell using
Stack. If you want to go further, we highly recommend you read Stack's
introductory [user's guide](GUIDE.md).

## Complete guide to Stack

A complete [user's guide](GUIDE.md) to Stack is available, covering all of
the most common ways to use Stack. Terms used in Stack's documentation are also
explained in the [glossary](glossary.md).

## Why Stack?

Stack is a build tool for Haskell designed to answer the needs of Haskell users,
both new and experienced. It has a strong focus on reproducible build plans,
multi-package projects, and a consistent, easy-to-learn set of Stack commands.
It also aims to provide the customizability and power that experienced
developers need.

Stack does not stand alone. It is built on the great work provided by:

* The __Glasgow Haskell Compiler__ ([GHC](https://www.haskell.org/ghc/)), the
  premier Haskell compiler. Stack will manage your GHC installations and
  automatically select the appropriate version of GHC for your project.
* The __Cabal build system__. Cabal is a specification for defining Haskell
  packages and a [library](https://hackage.haskell.org/package/Cabal) for
  performing builds.

    !!! info

        Cabal is also the name of another build tool, provided by the
        `cabal-install` package. This guide distinguishes between them by Cabal
        (the library) and Cabal (the tool).

* The __Hackage Haskell Package Repository__, a
  [repository](https://hackage.haskell.org/) of Haskell packages providing
  thousands of open source libraries and applications to help you get your work
  done.
* The __Stackage package collection__, sets of packages from Hackage that are
  [curated](https://www.stackage.org/). That is, they are regularly tested for
  compatibility. Stack defaults to using Stackage package sets to avoid
  problems with incompatible dependencies.

Stack is provided by a team of volunteers and companies under the auspices of
the [Commercial Haskell](http://commercialhaskell.com/) group. The project was
spearheaded by [FP Complete](https://www.fpcomplete.com/) to answer the needs of
commercial Haskell users. It has since become a thriving open source project
meeting the needs of Haskell users of all stripes.

If you'd like to get involved with Stack, check out the
[newcomer friendly](https://github.com/commercialhaskell/stack/issues?q=is%3Aopen+is%3Aissue+label%3a%22newcomer+friendly%22)
label on the GitHub issue tracker.

## Questions, feedback, and discussion

* For answers to frequently asked questions about Stack, please see the
  [FAQ](faq.md).
* For general questions, comments, feedback and support, please post to the
  [Haskell Community](https://discourse.haskell.org/about).
* For bugs, issues, or requests, please
  [open an issue](https://github.com/commercialhaskell/stack/issues/new).
* When using Stack Overflow, please use the
  [haskell-stack](http://stackoverflow.com/questions/tagged/haskell-stack) tag.

## How to contribute to the maintenance or development of Stack

A [guide](CONTRIBUTING.md) is provided to help potential contributors to the
Stack project.

If you have already installed a version of Stack and the
[Git application](https://git-scm.com/) the followings steps should get you
started with building Stack from source with Stack:

1.  Clone the `stack` repository from GitHub with the command:

    ~~~text
    git clone https://github.com/commercialhaskell/stack.git
    ~~~

2.  Change the current working directory to the cloned `stack` directory with
    the command:

    ~~~text
    cd stack
    ~~~

3.  Build the `stack` executable using a preexisting installation of Stack with
    the command:

    ~~~text
    stack build
    ~~~

4.  Once the `stack` executable has been built, check its version with the
    command:

    ~~~text
    stack exec -- stack --version
    ~~~

    Make sure the version is the latest one.

5.  In the GitHub repository's issue tracker, look for issues tagged with
    [newcomer friendly](https://github.com/commercialhaskell/stack/issues?q=is%3Aopen+is%3Aissue+label%3a%22newcomer+friendly%22)
    and
    [awaiting pull request](https://github.com/commercialhaskell/stack/issues?q=is%3Aopen+is%3Aissue+label%3A%22awaiting+pull+request%22)
    labels.

If you need to check your changes quickly command:

~~~text
stack repl
~~~

and then, at the REPL's prompt, command:

~~~text
:main --stack-root=<path_to_root> --stack-yaml=<path_to_stack.yaml> <COMMAND>
~~~

This allows you to set a special Stack root (instead of the default Stack root)
and to target your commands at a particular `stack.yaml` file instead of the one
found in the current directory.

## How to uninstall

To uninstall Stack, it should be sufficient to delete:

1. the Stack root directory (see `stack path --stack-root`, before you
   uninstall);
2. if different, the directory containing Stack's global YAML configuration file
   (see `stack path --global-config`, before you uninstall);
3. on Windows, the directory containing Stack's tools (see
   `stack path --programs`, before you uninstall), which is located outside of
   the Stack root directory; and
4. the `stack` executable file (see `which stack`, on Unix-like operating
   systems, or `where.exe stack`, on Windows).

You may also want to delete ``.stack-work`` directories in any Haskell projects
that you have built using Stack. The `stack uninstall` command provides
information about how to uninstall Stack.
# /General guidnce



- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/install_and_upgrade.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Install or upgrade

## Install Stack

Stack can be installed on most Linux distributions, macOS and Windows. It will
require at least about 5 GB of disk space, of which about 3 GB is for a single
version of GHC and about 2 GB is for Stack's local copy of the Hackage package
index.

Stack is open to supporting more operating systems. To request support for an
operating system, please submit an
[issue](https://github.com/commercialhaskell/stack/issues/new) at Stack's
GitHub repository.

!!! info

    In addition to the methods described below, Stack can also be installed
    using the separate [GHCup](https://www.haskell.org/ghcup/) installer for
    Haskell-related tools. GHCup provides Stack for some combinations of machine
    architecture and operating system not provided elsewhere. Unlike Stack,
    other build tools do not automatically install GHC. GHCup can be used to
    install GHC for those other tools. By default, the script to install GHCup
    (which can be run more than once) also configures Stack so that if Stack
    needs a version of GHC, GHCup takes over obtaining and installing that
    version.

!!! info "Releases on GitHub"

    Stack executables are also available on the
    [releases](https://github.com/commercialhaskell/stack/releases) page of
    Stack's GitHub repository.

!!! info "`https://get.haskellstack.org/stable` URLs"

    URLs with the format
    `https://get.haskellstack.org/stable/<PLATFORM>.<EXTENSION>` point to the
    latest stable release. See the manual download links for examples.

=== "Linux"

    For most Linux distributions, the easiest way to install Stack directly
    (rather than use GHCup) is to command:

    ~~~text
    curl -sSL https://get.haskellstack.org/ | sh
    ~~~

    or:

    ~~~text
    wget -qO- https://get.haskellstack.org/ | sh
    ~~~

    !!! note

        The script at [get.haskellstack.org](https://get.haskellstack.org/) will
        ask for root access using `sudo`. It needs such access in order to use
        your platform's package manager to install dependencies and to install
        to `/usr/local/bin`. If you prefer more control, follow the manual
        installation instructions for your platform below.

    ### Manual download

    Manual download for Linux distributions depends on your machine
    architecture, x86_64 or AArch64/ARM64.

    === "x86_64"

        * Click
          [:material-cloud-download-outline:](https://get.haskellstack.org/stable/linux-x86_64.tar.gz)
          to download an archive file with the latest release.

        * Extract the archive and place the `stack` executable somewhere on your
          PATH (see the [Path](#path) section below).

        * Ensure you have the required system dependencies installed. These
          include GCC, GNU Make, xz, perl, libgmp, libffi, and zlib. We also
          recommend Git and GPG.

        The installation of system dependencies will depend on the package
        manager for your Linux distribution. Notes are provided for Arch Linux,
        CentOS, Debian, Fedora, Gentoo and Ubuntu.

        === "Arch Linux"

            ~~~text
            sudo pacman -S make gcc ncurses git gnupg xz zlib gmp libffi zlib
            ~~~

        === "CentOS"

            ~~~text
            sudo yum install perl make automake gcc gmp-devel libffi zlib zlib-devel xz tar git gnupg
            ~~~

        === "Debian"

            ~~~text
            sudo apt-get install g++ gcc libc6-dev libffi-dev libgmp-dev make xz-utils zlib1g-dev git gnupg netbase
            ~~~

        === "Fedora"

            ~~~text
            sudo dnf install perl make automake gcc gmp-devel libffi zlib zlib-devel xz tar git gnupg
            ~~~

        === "Gentoo"

            Ensure you have the `ncurses` package with `USE=tinfo`. Without it,
            Stack will not be able to install GHC.

        === "Ubuntu"

            ~~~text
            sudo apt-get install g++ gcc libc6-dev libffi-dev libgmp-dev make xz-utils zlib1g-dev git gnupg netbase
            ~~~

    === "AArch64"

        * Click
          [:material-cloud-download-outline:](https://get.haskellstack.org/stable/linux-aarch64.tar.gz)
          to download an archive file with the latest release.

        * Extract the archive and place the `stack` executable somewhere on your
          PATH (see the [Path](#path) section below).

        * Ensure you have the required system dependencies installed. These
          include GCC, GNU Make, xz, perl, libgmp, libffi, and zlib. We also
          recommend Git and GPG.

        The installation of system dependencies will depend on the package
        manager for your Linux distribution. Notes are provided for Arch Linux,
        CentOS, Debian, Fedora, Gentoo and Ubuntu.

        === "Arch Linux"

            ~~~text
            sudo pacman -S make gcc ncurses git gnupg xz zlib gmp libffi zlib
            ~~~

        === "CentOS"

            ~~~text
            sudo yum install perl make automake gcc gmp-devel libffi zlib zlib-devel xz tar git gnupg
            ~~~

        === "Debian"

            ~~~text
            sudo apt-get install g++ gcc libc6-dev libffi-dev libgmp-dev make xz-utils zlib1g-dev git gnupg netbase
            ~~~

        === "Fedora"

            ~~~text
            sudo dnf install perl make automake gcc gmp-devel libffi zlib zlib-devel xz tar git gnupg
            ~~~

        === "Gentoo"

            Ensure you have the `ncurses` package with `USE=tinfo`. Without it,
            Stack will not be able to install GHC.

        === "Ubuntu"

            ~~~text
            sudo apt-get install g++ gcc libc6-dev libffi-dev libgmp-dev make xz-utils zlib1g-dev git gnupg netbase
            ~~~

    ### Linux packages

    Some Linux distributions have official or unofficial packages for Stack,
    including Arch Linux, Debian, Fedora, NixOS, openSUSE/SUSE Linux Enterprise,
    and Ubuntu. However, the Stack version available as a Linux package may lag
    behind Stack's current version and, in some cases, the lag may be
    significant.

    !!! info "Linux packages that lag behind Stack's current version"

        If Stack version available as a Linux package lags behind Stack's
        current version, using `stack upgrade --binary-only` is recommended
        after installing it.

    === "Arch Linux"

        The Arch extra package repository provides an official x86_64
        [package](https://www.archlinux.org/packages/extra/x86_64/stack/).
        You can install it with the command:

        ~~~text
        sudo pacman -S stack
        ~~~

        The Arch User Repository (AUR) also provides:

        *   a [`stack-bin` package](https://aur.archlinux.org/packages/stack-bin);
            and

        *   a [`stack-static` package](https://aur.archlinux.org/packages/stack-static)

    === "Debian"

        There are Debian
        [packages](https://packages.debian.org/search?keywords=haskell-stack&searchon=names&suite=all&section=all)
        for Buster and up. However, the distribution's Stack version lags
        behind.

    === "Fedora"

        Fedora includes Stack, but its Stack version may lag behind.

    === "NixOS"

        Users who follow the `nixos-unstable` channel or the Nixpkgs `master`
        branch can install the latest Stack release into their profile with the
        command:

        ~~~text
        nix-env -f "<nixpkgs>" -iA stack
        ~~~

        Alternatively, the package can be built from source as follows.

        1.  Clone the git repo, with the command:

            ~~~text
            git clone https://github.com/commercialhaskell/stack.git
            ~~~

        2.  Create a `shell.nix` file with the command:

            ~~~text
            cabal2nix --shell ./. --no-check --no-haddock > shell.nix
            ~~~

            Note that the tests fail on NixOS, so disable them with
            `--no-check`. Also, Haddock currently doesn't work for Stack, so
            `--no-haddock` disables it.

        3.  Install Stack to your user profile with the command:

            ~~~text
            nix-env -i -f shell.nix
            ~~~

        For more information on using Stack together with Nix, please see the
        [NixOS manual section on Stack](http://nixos.org/nixpkgs/manual/#how-to-build-a-haskell-project-using-stack).

    === "SUSE"

        There is also an unofficial package for openSUSE or SUSE Linux
        Enterprise. Its Stack version may lag behind. To install it:

        === "openSUSE Tumbleweed"

            ~~~text
            sudo zypper in stack
            ~~~

        === "openSUSE Leap"

            ~~~text
            sudo zypper ar http://download.opensuse.org/repositories/devel:/languages:/haskell/openSUSE_Leap_42.1/devel:languages:haskell.repo
            sudo zypper in stack
            ~~~

        === "SUSE Linux Enterprise 12"

            ~~~text
            sudo zypper ar http://download.opensuse.org/repositories/devel:/languages:/haskell/SLE_12/devel:languages:haskell.repo
            sudo zypper in stack
            ~~~

    === "Ubuntu"

        There are Ubuntu
        [packages](http://packages.ubuntu.com/search?keywords=haskell-stack&searchon=names&suite=all&section=all)
        for Ubuntu 20.04 and up.

    It is possible to set up auto-completion of Stack commands. For further
    information, see the [shell auto-completion](shell_autocompletion.md)
    documentation.

=== "macOS"

    Most users of Stack on macOS will also have up to date tools for software
    development (see [Xcode Command Line Tools](#xcode-command-line-tools)
    below).

    From late 2020, Apple began a transition from Mac computers with Intel
    processors (Intel-based Mac) to
    [Mac computers with Apple silicon](https://support.apple.com/en-gb/HT211814).

    === "Intel-based"

        Intel-based Mac computers have processors with x86_64 architectures. For
        most Intel-based Mac computers, the easiest way to install Stack
        directly (rather than use GHCup) is to command:

        ~~~text
        curl -sSL https://get.haskellstack.org/ | sh
        ~~~

        or:

        ~~~text
        wget -qO- https://get.haskellstack.org/ | sh
        ~~~

        !!! note

            The script at [get.haskellstack.org](https://get.haskellstack.org/)
            will ask for root access using `sudo`. It needs such access in order
            to use your platform's package manager to install dependencies and
            to install to `/usr/local/bin`. If you prefer more control, follow
            the manual installation instructions below.

        !!! info

            We generally test on the current version of macOS and do our best to
            keep it compatible with the three most recent major versions. Stack
            may also work on older versions.

        ### Manual download

        * Click
          [:material-cloud-download-outline:](https://get.haskellstack.org/stable/osx-x86_64.tar.gz)
          to download an archive file with the latest release for x86_64
          architectures.

        * Extract the archive and place `stack` somewhere on your PATH (see the
          [Path](#path) section below).

        * Now you can run Stack from the command line in a terminal.

    === "Apple silicon"

        Mac computers with Apple silicon have an M1, M1 Pro, M1 Max, M1 Ultra or
        M2 chip. These chips use an architecture known as ARM64 or AArch64.

        For Mac computers with Apple silicon, the easiest way to install Stack
        directly (rather than use GHCup) is to command:

        ~~~text
        curl -sSL https://get.haskellstack.org/ | sh
        ~~~

        or:

        ~~~text
        wget -qO- https://get.haskellstack.org/ | sh
        ~~~

        !!! note

            The script at [get.haskellstack.org](https://get.haskellstack.org/)
            will ask for root access using `sudo`. It needs such access in order
            to use your platform's package manager to install dependencies and
            to install to `/usr/local/bin`. If you prefer more control, follow
            the manual installation instructions below.

        The installation of Stack or some packages (e.g. `network`) requiring C
        source compilation might fail with `configure: error: C compiler cannot
        build executables`. In that case you should pass `-arch arm64` as part
        of the `CFLAGS` environment variable. This setting will be picked up by
        the C compiler of your choice.

        ~~~bash
        # Assuming BASH below

        # passing CFLAGS in-line with the command giving rise to the error
        CFLAGS="-arch arm64 ${CFLAGS:-}" some_command_to_install_stack
        CFLAGS="-arch arm64 ${CFLAGS:-}" stack [build|install]

        # -- OR --

        # ~/.bash_profile
        # NOTE: only do this if you do not have to cross-compile, or remember to unset
        # CFLAGS when needed
        export CFLAGS="-arch arm64 ${CFLAGS:-}"
        ~~~

        The setting instructs the C compiler to compile objects for ARM64. These
        can then be linked with libraries built for ARM64. Without the
        instruction, the C compiler, invoked by Cabal running in x86-64, would
        compile x86-64 objects and attempt to link them with existing ARM64
        libraries, resulting in the error above.

        ### Manual download

        * Click
          [:material-cloud-download-outline:](https://get.haskellstack.org/stable/osx-aarch64.tar.gz)
          to download an archive file with the latest release for AArch64
          architectures.

        * Extract the archive and place `stack` somewhere on your PATH (see the
          [Path](#path) section below).

        * Now you can run Stack from the command line in a terminal.

        ### LLVM

        The documentation for each version of GHC identifies the versions of
        LLVM that are supported. That is summarised in the table below for
        recent versions of GHC:

        |GHC version|LLVM versions|
        |-----------|-------------|
        |9.8.2      |11 to 15     |
        |9.6.4      |11 to 15     |
        |9.4.8      |10 to 14     |
        |9.2.8      |9 to 12      |
        |9.0.2      |9, 10 or 12  |
        |8.10.7     |9 to 12      |

    ### Using Homebrew

    [Homebrew](https://brew.sh/) is a popular package manager for macOS. If you
    have its `brew` tool installed, you can just command:

    ~~~text
    brew install haskell-stack
    ~~~

    * The Homebrew formula and bottles are **unofficial** and lag slightly
      behind new Stack releases, but tend to be updated within a day or two.

    * Normally, Homebrew will install from a pre-built binary (aka "pour from a
      bottle"), but if it starts trying to build everything from source (which
      will take hours), see
      [their FAQ on the topic](https://github.com/Homebrew/brew/blob/master/docs/FAQ.md#why-do-you-compile-everything).

    ### Xcode Command Line Tools

    macOS does not come with all the tools required for software development but
    a collection of useful tools, known as the Xcode Command Line Tools, is
    readily available. A version of that collection is provided with each
    version of Xcode (Apple’s integrated development environment) and can also
    be obtained from Apple separately from Xcode. The collection also includes
    the macOS SDK (software development kit). The macOS SDK provides header
    files for macOS APIs.

    If you use a command that refers to a common Xcode Command Line Tool and
    the Xcode Command Line Tools are not installed, macOS may prompt you to
    install the tools.

    macOS also comes with a command line tool, `xcode-select`, that can be used
    to obtain the Xcode Command Line Tools. Command `xcode-select --print-path`
    to print the path to the currently selected (active) developer directory. If
    the directory does not exist, or is empty, then the Xcode Command Line Tools
    are not installed.

    If the Xcode Command Line Tools are not installed, command
    `xcode-select --install` to open a user interface dialog to request
    automatic installation of the tools.

    An upgrade of macOS may sometimes require the existing Xcode Command Line
    Tools to be uninstalled and an updated version of the tools to be installed.
    The existing tools can be uninstalled by deleting the directory reported by
    `xcode-select --print-path`.

    If, after the installation of Stack, running `stack setup` fails with
    `configure: error: cannot run C compiled programs.` that indicates that the
    Xcode Command Line Tools are not installed.

    If building fails with messages that `*.h` files are not found, that may
    also indicate that Xcode Command Line Tools are not up to date.

    Xcode 10 provided an SDK for macOS 10.14 (Mojave) and
    [changed the location](https://developer.apple.com/documentation/xcode-release-notes/xcode-10-release-notes#Command-Line-Tools)
    of the macOS system headers. As a workaround, an extra package was provided
    by Apple which installed the headers to the base system under
    `/usr/include`.

    ### Auto-completion of Stack commands

    It is possible to set up auto-completion of Stack commands. For further
    information, see the [shell auto-completion](shell_autocompletion.md)
    documentation.

=== "Windows"

    On 64-bit Windows, the easiest way to install Stack directly (rather than
    use GHCup) is to download and use the
    [Windows installer](https://get.haskellstack.org/stable/windows-x86_64-installer.exe).

    !!! warning "Long user PATH environment variable"

        The Windows installer for Stack 2.9.1, 2.9.3 and 2.11.1 (only) will
        replace the user `PATH` environment variable (rather than append to it)
        if a 1024 character limit is exceeded. If the content of your existing
        user `PATH` is long, preserve it before running the installer.

    !!! note "Anti-virus software"

        Systems with antivirus software may need to add Stack to the list of
        'trusted' applications.

        You may see a "Windows Defender SmartScreen prevented an unrecognized
        app from starting" warning when you try to run the installer. If so,
        click on **More info**, and then click on the **Run anyway** button that
        appears.

    We recommend installing to the default location with the installer, as that
    will make `stack install` and `stack upgrade` work correctly out of the box.

    ### Manual download

    * Click
      [:material-cloud-download-outline:](https://get.haskellstack.org/stable/windows-x86_64.zip)
      to download an archive file with the latest release.

    * Unpack the archive and place `stack.exe` somewhere on your PATH (see the
      [Path](#path) section below).

    * Now you can run Stack from the command line in a terminal.

## Path

You can install Stack by copying the executable file anywhere on your PATH. A
good place to install is the same directory where Stack itself will install
executables, which depends on the operating system:

=== "Unix-like"

    Stack installs executables to:

    ~~~text
    $HOME/.local/bin
    ~~~

    If you don't have that directory in your PATH, you may need to update your
    PATH. That can be done by editing the `~/.bashrc` file.

=== "Windows"

    Stack installs executables to:

    ~~~text
    %APPDATA%\local\bin
    ~~~

    For example: `C:\Users\<user-name>\AppData\Roaming\local\bin`.

    If you don't have that directory in your PATH, you may need to update your
    PATH. That can be done by searching for 'Edit Environment variables for your
    account' under Start.

!!! note

    If you used [GHCup](https://www.haskell.org/ghcup/) to install Stack, GHCup
    puts executable files in the `bin` directory in the GHCup root directory.

## China-based users

If you're attempting to install Stack from within China:

* As of 24 February 2020, the download link has limited connectivity from within
  mainland China. If this is the case, please proceed by manually downloading
  (ideally via a VPN) and installing Stack per the instructions found on this
  page pertinent to your operating system.

* After installation, your `config.yaml` file will need to be configured before
  Stack can download large files consistently from within China (without
  reliance on a VPN). Please add the following to the bottom of the
  `config.yaml` file:

~~~yaml
###ADD THIS IF YOU LIVE IN CHINA
setup-info-locations:
- "http://mirrors.tuna.tsinghua.edu.cn/stackage/stack-setup.yaml"
urls:
  latest-snapshot: http://mirrors.tuna.tsinghua.edu.cn/stackage/snapshots.json

package-index:
- download-prefix: http://mirrors.tuna.tsinghua.edu.cn/hackage/
~~~

## Using an HTTP proxy

To use Stack behind a HTTP proxy with IP address *IP* and port *PORT*, first set
up an environment variable `http_proxy` and then run the Stack command. For
example:

=== "Unix-like"

    ~~~text
    export http_proxy=IP:PORT
    stack install
    ~~~

    On most operating systems, it is not mandatory for programs to follow the
    "system-wide" HTTP proxy. Some programs, such as browsers, do honor this
    "system-wide" HTTP proxy setting, while other programs, including Bash, do
    not. That means configuring "http proxy setting" in your System Preferences
    (macOS) would not result in Stack traffic going through the proxy.

=== "Windows"

    ~~~text
    $Env:http_proxy=IP:PORT
    stack install
    ~~~

    It is not mandatory for programs to follow the "system-wide" HTTP proxy.
    Some programs, such as browsers, do honor this "system-wide" HTTP proxy
    setting, while other programs do not. That means configuring
    "http proxy setting" in your Control Panel would not result in Stack traffic
    going through the proxy.

## Upgrade Stack

There are different approaches to upgrading Stack, which vary as between
Unix-like operating systems (including macOS) and Windows.

!!! note

    If you used [GHCup](https://www.haskell.org/ghcup/) to install Stack, you
    should also use GHCup to upgrade Stack. GHCup uses an executable named
    `stack` to manage versions of Stack, through a file `stack.shim`. Stack will
    likely overwrite the executable on upgrade.

=== "Unix-like"

    There are essentially four different approaches:

    1.  The `stack upgrade` command, which downloads a Stack executable, or
        builds it from source, and installs it to Stack's 'local-bin' directory
        (see `stack path --local-bin`). If different and permitted, it also
        installs a copy in the directory of the current Stack executable. (If
        copying is not permitted, copy `stack` from Stack's 'local-bin'
        directory to the system location afterward.) You can use `stack upgrade`
        to get the latest official release, and `stack upgrade --git` to install
        from GitHub and live on the bleeding edge. Make sure the location of the
        Stack executable is on the PATH. See the [Path](#Path) section above.

    2.  If you're using a package manager and are happy with sticking with the
        officially released binaries from the distribution (which may the lag
        behind the latest version of Stack significantly), simply follow your
        normal package manager strategies for upgrading. For example:

        ~~~text
        apt-get update
        apt-get upgrade
        ~~~

    3.  The `get.haskellstack.org` script supports the `-f` argument to
        over-write the current Stack executable. For example, command:

        ~~~text
        curl -sSL https://get.haskellstack.org/ | sh -s - -f
        ~~~

        or:

        ~~~text
        wget -qO- https://get.haskellstack.org/ | sh -s - -f
        ~~~

    4.  Manually follow the steps above to download the newest executable from
        the GitHub releases page and replace the old executable.

=== "Windows"

    There are essentially two different approaches:

    1.  The `stack upgrade` command, which downloads a Stack executable, or
        builds it from source, and installs it to Stack's 'local-bin' directory
        (see `stack path --local-bin`). If different and permitted, it also
        installs a copy in the directory of the current Stack executable. (If
        copying is not permitted, copy `stack` from Stack's 'local-bin'
        directory to the system location afterward.) You can use `stack upgrade`
        to get the latest official release, and `stack upgrade --git` to install
        from GitHub and live on the bleeding edge. Make sure the location of the
        Stack executable is on the PATH. See the [Path](#Path) section above.

    2.  Manually follow the steps above to download the newest executable from
        the GitHub releases page and replace the old executable.

## Install earlier versions

To install a specific version of Stack, navigate to the desired version on the
[GitHub release page](https://github.com/commercialhaskell/stack/releases), and
click the appropriate link under its "Assets" drop-down menu.

Alternatively, use the URL
`https://github.com/commercialhaskell/stack/releases/download/vVERSION/stack-VERSION-PLATFORM.EXTENSION`.
For example, the tarball for Stack version 2.1.0.1, osx-x86_64 is at
`https://github.com/commercialhaskell/stack/releases/download/v2.1.0.1/stack-2.1.0.1-osx-x86_64.tar.gz`.

Here's a snippet for `appveyor.yml` files, borrowed from `dhall`'s
[`appveyor.yml`](https://github.com/dhall-lang/dhall-haskell/blob/1079b7a3a7a6922f72a373e47daf6f1b74f128b1/appveyor.yml).
Change the values of PATH and VERSION as needed.

~~~yaml
install:
  - set PATH=C:\Program Files\Git\mingw64\bin;%PATH%
  - curl --silent --show-error --output stack.zip --location "https://github.com/commercialhaskell/stack/releases/download/v%STACK_VERSION%/stack-%STACK_VERSION%-windows-x86_64.zip"
  - 7z x stack.zip stack.exe
  - stack setup > nul
  - git submodule update --init --recursive
~~~


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/GUIDE.md


  <div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# User guide (introductory)

Stack is a modern, cross-platform build tool for Haskell code.

This introductory guide takes a new Stack user through the typical workflows.
This guide will not teach Haskell or involve much code, and it requires no prior
experience with the Haskell packaging system or other build tools. Terms used in
the guide are defined in the [glossary](glossary.md).

Some of Stack's features will not be needed regularly or by all users. See the
[advanced user's guide](GUIDE_advanced.md) for information about those features.

## Stack's functions

Stack handles the management of your toolchain (including GHC — the Glasgow
Haskell Compiler — and, for Windows users, MSYS2), building and registering
libraries, building build tool dependencies, and more. While it can use existing
tools on your system, Stack has the capacity to be your one-stop shop for all
Haskell tooling you need. This guide will follow that Stack-centric approach.

### What makes Stack special?

The primary Stack design point is __reproducible builds__. If you run
`stack build` today, you should get the same result running `stack build`
tomorrow. There are some cases that can break that rule (changes in your
operating system configuration, for example), but, overall, Stack follows this
design philosophy closely. To make this a simple process, Stack uses curated
package sets called __snapshots__.

Stack has also been designed from the ground up to be user friendly, with an
intuitive, discoverable command line interface. For many users, simply
downloading Stack and reading `stack --help` will be enough to get up and
running. This guide provides a more gradual tour for users who prefer that
learning style.

To build your project, Stack uses a project-level configuration file, named
`stack.yaml`, in the root directory of your project as a sort of blueprint. That
file contains a reference to the snapshot (also known as a __resolver__) which
your package will be built against.

Finally, Stack is __isolated__: it will not make changes outside of specific
Stack directories. Stack-built files generally go in either the Stack root
directory or `./.stack-work` directories local to each project. The
[Stack root](stack_root.md) directory holds packages belonging to snapshots and
any Stack-installed versions of GHC. Stack will not tamper with any system
version of GHC or interfere with packages installed by other build tools, such
as Cabal (the tool).

## Downloading and Installation

The [documentation dedicated to downloading Stack](install_and_upgrade.md) has
the most up-to-date information for a variety of operating systems. Instead of
repeating that content here, please go check out that page and come back here
when you can successfully run `stack --version`.

We also assume that the directory reported by `stack path --local-bin` has been
added to the PATH.

## Hello World Example

With Stack installed, let's create a new project from a template and walk
through the most common Stack commands.

In this guide, an initial `$` represents the command line prompt. The prompt may
differ in the terminal on your operating system. Unless stated otherwise, the
working directory is the project's root directory.

### The `stack new` command

We'll start off with the `stack new` command to create a new *project*, that
will contain a Haskell *package* of the same name. So let's pick a valid
package name first:

> A package is identified by a globally-unique package name, which consists
> of one or more alphanumeric words separated by hyphens. To avoid ambiguity,
> each of these words should contain at least one letter.

(From the
[Cabal users guide](https://www.haskell.org/cabal/users-guide/developing-packages.html#developing-packages))

We'll call our project `helloworld`, and we'll use the `new-template` project
template. This template is used by default, but in our example we will refer to
it expressly. Other templates are available. For further information about
templates, see the `stack templates` command
[documentation](templates_command.md).

From the root directory for all our Haskell projects, we command:

~~~text
stack new helloworld new-template
~~~

For this first Stack command, there's quite a bit of initial setup it needs to
do (such as downloading the list of packages available upstream), so you'll see
a lot of output. Over the course of this guide a lot of the content will begin
to make more sense.

After creating the project directory, and obtaining and populating the project
template, Stack will initialise its own project-level configuration. For further
information about setting paramaters to populate templates, see the YAML
configuration [documentation](yaml_configuration.md#templates). For further
information about initialisation, see the `stack init` command
[documentation](#the-stack-init-command). The `stack new` and `stack init`
commands have options and flags in common.

!!! info

    Pass the `--bare` flag to cause Stack to create the project in the current
    working directory rather than in a new project directory.

!!! info

    Parameters to populate project templates can be set at the command line with
    the `--param <key>:<value>` (or `-p`) option.

We now have a project in the `helloworld` directory! We will change to that
directory, with command:

~~~text
cd helloworld
~~~

### The `stack build` command

Next, we'll run the most important Stack command, `stack build`:

~~~text
stack build
# installing ... building ...
~~~

Stack needs a version of GHC in order to build your project. Stack will discover
that you are missing it and will install it for you.

You'll get intermediate download percentage statistics while the download is
occurring. This command may take some time, depending on download speeds.

!!! note

    GHC will be installed to your Stack programs directory, so calling `ghc` on
    the command line won't work. See the `stack exec`, `stack ghc`, and
    `stack runghc` commands below for more information.

Once a version of GHC is installed, Stack will then build your project.

### The `stack exec` command

Looking closely at the output of the previous command, you can see that it built
both a library called `helloworld` and an executable called `helloworld-exe` (on
Windows, `helloworld-exe.exe`). We'll explain more in the next section, but, for
now, just notice that the executables are installed in a location in our
project's `.stack-work` directory.

Now, Let's use the `stack exec` command to run our executable (which just
outputs "someFunc"):

~~~text
stack exec helloworld-exe
someFunc
~~~

`stack exec` works by providing the same reproducible environment that was used
to build your project to the command that you are running. Thus, it knew where
to find `helloworld-exe` even though it is hidden in the `.stack-work`
directory. Command `stack path --bin-path` to see the PATH in the Stack
environment.

!!! info

    On Windows, the Stack environment includes the `\mingw64\bin`, `\usr\bin`
    and `\usr\local\bin` directories of the Stack-supplied MSYS2. If your
    executable depends on files (for example, dynamic-link libraries) in those
    directories and you want ro run it outside of the Stack environment, you
    will need to ensure copies of those files are on the PATH.

### The `stack test` command

Finally, like all good software, `helloworld` actually has a test suite.

Let's run it with the `stack test` command:

~~~text
stack test
# build output ...
~~~

Reading the output, you'll see that Stack first builds the test suite and then
automatically runs it for us. For both the `build` and `test` command, already
built components are not built again. You can see this by using the
`stack build` and `stack test` commands a second time:

~~~text
stack build
stack test
# build output ...
~~~

## Inner Workings of Stack

In this subsection, we'll dissect the `helloworld` example in more detail.

### Files in helloworld

Before studying Stack more, let's understand our project a bit better. The files
in the directory include:

~~~text
app/Main.hs
src/Lib.hs
test/Spec.hs
ChangeLog.md
README.md
LICENSE
Setup.hs
helloworld.cabal
package.yaml
stack.yaml
.gitignore
~~~

The `app/Main.hs`, `src/Lib.hs`, and `test/Spec.hs` files are all Haskell
source files that compose the actual functionality of our project (we won't
dwell on them here).

The `ChangeLog.md`, `README.md`, `LICENSE` and `.gitignore` files have no effect
on the build.

The `helloworld.cabal` file is updated automatically as part of the
`stack build` process and should not be modified.

The files of interest here are `Setup.hs`, `stack.yaml`, and `package.yaml`.

The `Setup.hs` file is a component of the Cabal build system which Stack uses.
It's technically not needed by Stack, but it is still considered good practice
in the Haskell world to include it. The file we're using is straight
boilerplate:

~~~haskell
import Distribution.Simple
main = defaultMain
~~~

Next, let's look at our `stack.yaml` file, which gives our project-level
settings. Ignoring comments beginning `#`, the contents will look something like
this:

~~~yaml
resolver:
  url: https://raw.githubusercontent.com/commercialhaskell/stackage-snapshots/master/lts/22/11.yaml
packages:
- .
~~~

The value of the [`resolver`](yaml_configuration.md#resolver) key tells Stack
*how* to build your package: which GHC version to use, versions of package
dependencies, and so on. Our value here says to use
[LTS Haskell 22.11](https://www.stackage.org/lts-22.11), which implies GHC 9.6.4
(which is why `stack build` installs that version of GHC if it is not already
available to Stack). There are a number of values you can use for `resolver`,
which we'll cover later.

The value of the `packages` key tells Stack which project packages, located
locally, to build. In our simple example, we have only a single project package,
located in the same directory, so '`.`' suffices. However, Stack has powerful
support for multi-package projects, which we'll elaborate on as this guide
progresses.

Another file important to the build is `package.yaml`.

The `package.yaml` file describes the package in the
[Hpack](https://github.com/sol/hpack) format. Stack has in-built Hpack
functionality and this is its preferred package format. The default behaviour is
to generate the Cabal file (here named `helloworld.cabal`) from this
`package.yaml` file, and accordingly you should **not** modify the Cabal file.

It is also important to remember that Stack is built on top of the Cabal build
system. Therefore, an understanding of the moving parts in Cabal are necessary.
In Cabal, we have individual *packages*, each of which contains a single Cabal
file, named `<package_name>.cabal`. The Cabal file can define one or more
*components*: a library, executables, test suites, and benchmarks. It also
specifies additional information such as library dependencies, default
language pragmas, and so on.

In this guide, we'll discuss the bare minimum necessary to understand how to
modify a `package.yaml` file. You can see a full list of the available options
at the [Hpack documentation](https://github.com/sol/hpack#quick-reference). The
Cabal User Guide is the definitive reference for the
[Cabal file format](https://cabal.readthedocs.io/en/stable/cabal-package.html).

### The location of GHC

As we saw above, the `build` command installed GHC for us. You can use the
`stack path` command for quite a bit of path information (which we'll play with
more later). We'll look at where GHC is installed:

=== "Unix-like"

    Command:

    ~~~text
    stack exec -- which ghc
    /home/<user_name>/.stack/programs/x86_64-linux/ghc-9.0.2/bin/ghc
    ~~~

=== "Windows (with PowerShell)"

    Command:

    ~~~text
    stack exec -- where.exe ghc
    C:\Users\<user_name>\AppData\Local\Programs\stack\x86_64-windows\ghc-9.0.2\bin\ghc.exe
    ~~~

As you can see from that path (and as emphasized earlier), the installation is
placed to not interfere with any other GHC installation, whether system-wide or
even different GHC versions installed by Stack.

## Cleaning your project

You can clean up build artifacts for your project using the `stack clean` and
`stack purge` commands.

### The `stack clean` command

`stack clean` deletes the local working directories containing compiler output.
By default, that means the contents of directories in `.stack-work/dist`, for
all the `.stack-work` directories within a project.

Use `stack clean <specific-package>` to delete the output for the package
_specific-package_ only.

### The `stack purge` command

`stack purge` deletes the local stack working directories, including extra-deps,
git dependencies and the compiler output (including logs). It does not delete
any snapshot packages, compilers or programs installed using `stack install`.
This essentially reverts the project to a completely fresh state, as if it had
never been built. `stack purge` is just a shortcut for `stack clean --full`

### The `stack build` command

The `build` command is the heart and soul of Stack. It is the engine that powers
building your code, testing it, getting dependencies, and more. Quite a bit of
the remainder of this guide will cover more advanced `build` functions and
features, such as building test and Haddocks at the same time, or constantly
rebuilding blocking on file changes.

!!! note

    Using the `build` command twice with the same options and arguments should
    generally do nothing (besides things like rerunning test suites), and
    should, in general, produce a reproducible result between different runs.

## Adding dependencies

Let's say we decide to modify our `helloworld` source a bit to use a new
library, perhaps the ubiquitous `text` package. In `src/Lib.hs`, we can, for
example add:

~~~haskell
{-# LANGUAGE OverloadedStrings #-}
module Lib
    ( someFunc
    ) where

import qualified Data.Text.IO as T

someFunc :: IO ()
someFunc = T.putStrLn "someFunc"
~~~

When we try to build this, things don't go as expected:

~~~text
stack build
# build failure output (abridged for clarity) ...
src\Lib.hs:6:1: error:
    Could not load module ‘Data.Text.IO’
    It is a member of the hidden package ‘text-1.2.5.0’.
    Perhaps you need to add ‘text’ to the build-depends in your .cabal file.
    Use -v (or `:set -v` in ghci) to see a list of the files searched for.
  |
6 | import qualified Data.Text.IO as T
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
~~~

This means that the package containing the module in question is not available.
To tell Stack to use [text](https://hackage.haskell.org/package/text), you need
to add it to your `package.yaml` file — specifically in your `dependencies`
section, like this:

~~~yaml
dependencies:
- base >= 4.7 && < 5
- text # added here
~~~

Now if we rerun `stack build`, we should get a successful result. Command:

~~~text
stack build
# build output ...
~~~

This output means that the `text` package was downloaded, configured, built, and
locally installed. Once that was done, we moved on to building our project
package (`helloworld`). At no point did we need to ask Stack to build
dependencies — it does so automatically.

### Listing Dependencies

Let's have Stack add a few more dependencies to our project. First, we'll
include two new packages in the `dependencies` section for our library in our
`package.yaml`:

~~~yaml
dependencies:
- base >= 4.7 && < 5
- text
- filepath
- containers
~~~

After adding these two dependencies, we can again run `stack build` to have them
installed. Command:

~~~text
stack build
# build output ...
~~~

Finally, to find out which versions of these libraries Stack installed, we can
ask Stack to `ls dependencies`. Command:

~~~text
stack ls dependencies
# dependency output ...
~~~

### extra-deps

Let's try a more off-the-beaten-track package: the joke
[acme-missiles](http://www.stackage.org/package/acme-missiles) package. Our
source code is simple:

~~~haskell
module Lib
    ( someFunc
    ) where

import Acme.Missiles

someFunc :: IO ()
someFunc = launchMissiles
~~~

Again, we add this new dependency to the `package.yaml` file like this:

~~~yaml
dependencies:
- base >= 4.7 && < 5
- text
- filepath
- containers
- acme-missiles # added
~~~

However, rerunning `stack build` shows us the following error message. Command:

~~~text
stack build
# build failure output ...
~~~

It says that it was unable to construct the build plan.

This brings us to the next major topic in using Stack.

## Curated package sets

Remember above when `stack new` selected some
[LTS snapshot](https://github.com/commercialhaskell/lts-haskell#readme) for us?
That defined our build plan and available packages. When we tried using the
`text` package, it just worked, because it was part of the LTS *package set*.

We've specified the `acme-missiles` package in the `package.yaml` file (see
above), but `acme-missiles` is not part of that LTS package set, so building
failed.

To add `acme-missiles` to the available packages, we'll use the `extra-deps` key
in the `stack.yaml` file. That key defines extra packages, not present in the
snapshot, that will be needed as dependencies. You can add this like so:

~~~yaml
extra-deps:
- acme-missiles-0.3 # not in the LTS snapshot
~~~

Now `stack build` will succeed.

With that out of the way, let's dig a little bit more into these package sets,
also known as *snapshots*. We mentioned the LTS snapshots, and you can get quite
a bit of information about it at
[https://www.stackage.org/lts](https://www.stackage.org/lts), including:

* The appropriate value (`lts-22.13`, as is currently the latest LTS)
* The GHC version used
* A full list of all packages available in this snapshot
* The ability to perform a Hoogle search on the packages in this snapshot
* A [list of all modules](https://www.stackage.org/lts/docs) in a snapshot,
  which can be useful when trying to determine which package to add to your
  `package.yaml` file.

You can also see a
[list of all available snapshots](https://www.stackage.org/snapshots). You'll
notice two flavors: LTS (for "Long Term Support") and Nightly. You can read more
about them on the
[LTS Haskell GitHub page](https://github.com/commercialhaskell/lts-haskell#readme).
If you're not sure which to use, start with LTS Haskell (which Stack will lean
towards by default as well).

## Snapshots and changing your compiler version

Let's explore package sets a bit further. Instead of `lts-22.13`, let's change
our `stack.yaml` file to use the
[latest nightly](https://www.stackage.org/nightly). Right now, this is currently
2024-03-20 - please see the snapshot from the link above to get the latest.

Then, commanding `stack build` again will produce:

~~~text
stack build
# Downloaded nightly-2024-03-20 build plan.
# build output ...
~~~

We can also change snapshots on the command line, which can be useful in a
Continuous Integration (CI) setting, like on Travis. For example, command:

~~~text
stack --snapshot lts-21.25 build
# Downloaded lts-21.25 build plan.
# build output ...
~~~

When passed on the command line, you also get some additional "short-cut"
versions of snapshots: `--snapshot nightly` will use the newest Nightly snapshot
available, `--snapshot lts` will use the newest LTS, and `--snapshot lts-22`
will use the newest LTS in the 22.x series. The reason these are only available
on the command line and not in your `stack.yaml` file is that using them:

1. Will slow down your build (since Stack then needs to download information on
   the latest available LTS each time it builds)
2. Produces unreliable results (since a build run today may proceed differently
   tomorrow because of changes outside of your control)

### Changing GHC versions

Finally, let's try using an older LTS snapshot. We'll use the newest 21.x
snapshot with the command:

~~~text
stack --snapshot lts-21 build
# build output ...
~~~

This succeeds, automatically installing the necessary GHC along the way. So, we
see that different LTS versions use different GHC versions and Stack can handle
that.

### Other snapshot values

We've mentioned `nightly-YYYY-MM-DD` and `lts-X.Y` values for the snapshot.
There are actually other options available, and the list will grow over time.
At the time of writing:

* `ghc-X.Y.Z`, for requiring a specific GHC version but no additional packages
* Experimental custom snapshot support

The most up-to-date information can always be found in the
[stack.yaml documentation](yaml_configuration.md#snapshot).

## Existing projects

Alright, enough playing around with simple projects. Let's take an open source
package and try to build it. We'll be ambitious and use
[yackage](https://hackage.haskell.org/package/yackage), a local package server
using [Yesod](http://www.yesodweb.com/). To get the code, we'll use the
`stack unpack` command from the root directory for all our Haskell projects:

~~~text
stack unpack yackage
Unpacked yackage-0.8.1 to <root_directory>/yackage-0.8.1/
~~~

You can also unpack to the directory of your liking instead of the current one
by issuing the command:

~~~text
stack unpack yackage --to <desired_directory>
~~~

This will create a `yackage-0.8.1` directory inside `<desired_directory>`.

We will change to that directory, with the command:

~~~text
cd yackage-0.8.1
~~~

### The `stack init` command

This new directory does not have a `stack.yaml` file, so we need to make one
first. We could do it by hand, but let's be lazy instead with the `stack init`
command:

~~~text
stack init
# init output ...
~~~

`stack init` does quite a few things for you behind the scenes:

* Finds all of the Cabal files in your current directory and subdirectories
  (unless you use `--ignore-subdirs`) and determines the packages and versions
  they require
* Finds the best combination of snapshot and package flags that allows
  everything to compile with minimum external dependencies
* It tries to look for the best matching snapshot from latest LTS, latest
  nightly, other LTS versions in that order

Assuming it finds a match, it will write your `stack.yaml` file, and everything
will work.

!!! note

    The `yackage` package does not currently support Hpack, but you can also use
    `hpack-convert` should you need to generate a `package.yaml` file.

#### Excluded Packages

Sometimes multiple packages in your project may have conflicting requirements.
In that case `stack init` will fail, so what do you do?

You could manually create `stack.yaml` by omitting some packages to resolve the
conflict. Alternatively you can ask `stack init` to do that for you by
specifying `--omit-packages` flag on the command line. Let's see how that
works.

To simulate a conflict we will use `acme-missiles-0.3` in `yackage` and we will
also copy `yackage.cabal` to another directory and change the name of the file
and package to `yackage-test`. In this new package we will use
`acme-missiles-0.2` instead. Let's see what happens when we command `stack init`
again:

~~~text
stack init --force --omit-packages
# init failure output ...
~~~

Looking at `stack.yaml`, you will see that the excluded packages have been
commented out under the `packages` field. In case wrong packages are excluded
you can uncomment the right one and comment the other one.

Packages may get excluded due to conflicting requirements among user packages or
due to conflicting requirements between a user package and the snapshot
compiler. If all of the packages have a conflict with the compiler then all of
them may get commented out.

When packages are commented out you will see a warning every time you run a
command which needs the configuration file. The warning can be disabled by
editing the configuration file and removing it.

#### Using a specific snapshot

Sometimes you may want to use a specific snapshot for your project instead of
`stack init` picking one for you. You can do that by using
`stack init --snapshot <snapshot>`.

You can also init with a compiler snapshot if you do not want to use a
Stackage snapshot. That will result in all of your project's dependencies being
put under the `extra-deps` section.

#### Installing the compiler

Stack will automatically install the compiler when you run `stack build` but you
can manually specify the compiler by running `stack setup <GHC-VERSION>`.

#### Miscellaneous and diagnostics

_Add selected packages_: If you want to use only selected packages from your
project directory you can do so by explicitly specifying the package directories
on the command line.

_Duplicate package names_: If multiple packages under the directory tree have
same name, `stack init` will report those and automatically ignore one of them.

_Ignore subdirectories_: By default `stack init` searches all the subdirectories
for Cabal files. If you do not want that then you can use `--ignore-subdirs`
command line switch.

_Cabal warnings_: `stack init` will show warnings if there were issues in
reading a Cabal file. You may want to pay attention to the warnings as sometimes
they may result in incomprehensible errors later on during dependency solving.

_Package naming_: If the `Name` field defined in a Cabal file does not match
with the Cabal file name then `stack init` will refuse to continue.

_User warnings_: When packages are excluded or external dependencies added Stack
will show warnings every time the configuration file is loaded. You can suppress
the warnings by editing the configuration file and removing the warnings from
it. You may see something like this:

~~~text
stack build
Warning: Some packages were found to be incompatible with the resolver and have been left commented out in the packages section.
Warning: Specified resolver could not satisfy all dependencies. Some external packages have been added as dependencies.
You can suppress this message by removing it from stack.yaml
~~~

## Different databases

Time to take a short break from hands-on examples and discuss a little
architecture. Stack has the concept of multiple *databases*.

A database consists of a GHC package database (which contains the compiled
version of a library), executables, and a few other things as well. To give you
an idea, the contents of the parent directory of the `stack path --local-pkg-db`
directory are the directories:

~~~text
bin
doc
lib
pkgdb
~~~

Databases in Stack are *layered*. For example, the database listing we just gave
is called a *local* database (also known as a *mutable* database). That is
layered on top of a *snapshot* database (also known as a *write-only* database).
The snapshot database contains the libraries and executables that are considered
to be *immutable*. Finally, GHC itself ships with a number of libraries and
executables, also considered to be immutable, which forms the *global* database.

To get a quick idea of this, we can look at the output of the
`stack exec -- ghc-pkg list` command in our `helloworld` project:

~~~text
<stack path --global-pkg-db directory>
    Cabal-3.6.3.0
    Win32-2.12.0.1
    array-0.5.4.0
    base-4.16.2.0
    binary-0.8.9.0
    bytestring-0.11.3.1
    containers-0.6.5.1
    deepseq-1.4.6.1
    directory-1.3.6.2
    exceptions-0.10.4
    filepath-1.4.2.2
    (ghc-9.2.3)
    ghc-bignum-1.2
    ghc-boot-9.2.3
    ghc-boot-th-9.2.3
    ghc-compact-0.1.0.0
    ghc-heap-9.2.3
    ghc-prim-0.8.0
    ghci-9.2.3
    haskeline-0.8.2
    hpc-0.6.1.0
    integer-gmp-1.1
    libiserv-9.2.3
    mtl-2.2.2
    parsec-3.1.15.0
    pretty-1.1.3.6
    process-1.6.13.2
    rts-1.0.2
    stm-2.5.0.2
    template-haskell-2.18.0.0
    text-1.2.5.0
    time-1.11.1.1
    transformers-0.5.6.2
    xhtml-3000.2.2.1

<stack path --snapshot-pkg-db directory>
    acme-missiles-0.3

<stack path --local-pkg-db directory>
    helloworld-0.1.0.0
~~~

where `<stack path --global-pkg-db directory>` refers to the directory output by
the command `stack path --global-pkg-db`, and so on.

Notice that `acme-missiles` ends up in the *snapshot* database. Any package
which comes from Hackage, an archive, or a repository is considered to be an
*immutable* package.

Anything which is considered *mutable*, or depends on something mutable, ends up
in the *local* database. This includes your own code and any other packages
located on a local file path.

The reason we have this structure is that:

* it lets multiple projects reuse the same binary builds of immutable packages,
* but doesn't allow different projects to "contaminate" each other by putting
  non-standard content into the shared snapshot database.

As you probably guessed, there can be multiple snapshot databases available. See
the contents of the `snapshots` directory in the [Stack root](stack_root.md).

* On Unix-like operating systems, each snapshot is in the last of a sequence of
  three subdirectories named after the platform, a 256-bit hash of the source
  map (how the package should be built -- including the compiler, options, and
  immutable dependencies), and the GHC version.

* On Windows, each snapshot is in a subdirectory that is a shorter hash (eight
  characters) of the sequence of three directories used on Unix-like operating
  systems. This is done to avoid problems created by default limits on file
  path lengths on Windows systems.

These snapshot databases don't get layered on top of each other; they are each
used separately.

In reality, you'll rarely — if ever — interact directly with these databases,
but it's good to have a basic understanding of how they work so you can
understand why rebuilding may occur at different points.

## The build synonyms

Let's look at a subset of the `stack --help` output:

~~~text
build    Build the package(s) in this directory/configuration
install  Shortcut for 'build --copy-bins'
test     Shortcut for 'build --test'
bench    Shortcut for 'build --bench'
haddock  Shortcut for 'build --haddock'
~~~

Four of these commands are just synonyms for the `build` command. They are
provided for convenience for common cases (e.g., `stack test` instead of
`stack build --test`) and so that commonly expected commands just work.

What's so special about these commands being synonyms? It allows us to make
much more composable command lines. For example, we can have a command that
builds executables, generates Haddock documentation (Haskell API-level docs),
and builds and runs your test suites, with:

~~~text
stack build --haddock --test
~~~

You can even get more inventive as you learn about other flags. For example,
take the following command:

~~~text
stack build --pedantic --haddock --test --exec "echo Yay, it succeeded" --file-watch
~~~

This command will:

* turn on all warnings and errors (the `--pedantic` flag)
* build your library and executables
* generate Haddocks (the `--haddock` flag)
* build and run your test suite (the `--test` flag)
* run the command `echo Yay, it succeeded` when that completes (the `--exec`
  option)
* after building, watch for changes in the files used to build the project, and
  kick off a new build when done (the `--file-watch` flag)

### The `stack install` command and `copy-bins` option

It's worth calling out the behavior of the `install` command and `--copy-bins`
option, since this has confused a number of users (especially when compared to
behavior of other tools like Cabal (the tool)). The `install` command does
precisely one thing in addition to the build command: it copies any generated
executables to the local binary directory. You may recognize the default value
for that path:

On Unix-like operating systems, command:

~~~text
stack path --local-bin
/home/<user_name>/.local/bin
~~~

On Windows, command:

~~~text
stack path --local-bin
C:\Users\<user_name>\AppData\Roaming\local\bin
~~~

That's why the download page recommends adding that directory to your PATH. This
feature is convenient, because now you can simply run `executable-name` in your
shell instead of having to run `stack exec executable-name` from inside your
project directory.

Since it's such a point of confusion, let me list a number of things Stack does
*not* do specially for the `install` command:

* Stack will always build any necessary dependencies for your code. The install
  command is not necessary to trigger this behavior. If you just want to build a
  project, run `stack build`.
* Stack will *not* track which files it's copied to your local binary directory
  nor provide a way to automatically delete them. There are many great tools out
  there for managing installation of binaries, and Stack does not attempt to
  replace those.
* Stack will not necessarily be creating a relocatable executable. If your
  executables hard-codes paths, copying the executable will not change those
  hard-coded paths.

  * At the time of writing, there's no way to change those kinds of paths with
    Stack, but see
    [issue #848 about --prefix](https://github.com/commercialhaskell/stack/issues/848)
    for future plans.

That's really all there is to the `install` command: for the simplicity of what
it does, it occupies a much larger mental space than is warranted.

## Targets, locals, and extra-deps

We haven't discussed this too much yet, but, in addition to having a number of
synonyms *and* taking a number of options on the command line, the `build`
command *also* takes many arguments. These are parsed in different ways, and can
be used to achieve a high level of flexibility in telling Stack exactly what you
want to build.

We're not going to cover the full generality of these arguments here; instead,
there's documentation covering the full
[build command syntax](build_command.md). Here, we'll just point out a few
different types of arguments:

* You can specify a *package name*, e.g. `stack build vector`.
    * This will attempt to build the `vector` package, whether it's a local
      package, in your extra-deps, in your snapshot, or just available upstream.
      If it's just available upstream but not included in your locals,
      extra-deps, or snapshot, the newest version is automatically promoted to
      an extra-dep.
* You can also give a *package identifier*, which is a package name plus
  version, e.g. `stack build yesod-bin-1.4.14`.
    * This is almost identical to specifying a package name, except it will (1)
      choose the given version instead of latest, and (2) error out if the given
      version conflicts with the version of a project package.
* The most flexibility comes from specifying individual *components*, e.g.
  `stack build helloworld:test:helloworld-test` says "build the test suite
  component named helloworld-test from the helloworld package."
    * In addition to this long form, you can also shorten it by skipping what
      type of component it is, e.g. `stack build helloworld:helloworld-test`, or
      even skip the package name entirely, e.g. `stack build :helloworld-test`.
* Finally, you can specify individual *directories* to build to trigger building
  of any project packages included in those directories or subdirectories.

When you give no specific arguments on the command line (e.g., `stack build`),
it's the same as specifying the names of all of your project packages. If you
just want to build the package for the directory you're currently in, you can
use `stack build .`.

### Components, --test, and --bench

Here's one final important yet subtle point. Consider our `helloworld` package:
it has a library component, an executable `helloworld-exe`, and a test suite
`helloworld-test`. When you run `stack build helloworld`, how does it know which
ones to build? By default, it will build the library (if any) and all of the
executables but ignore the test suites and benchmarks.

This is where the `--test` and `--bench` flags come into play. If you use them,
those components will also be included. So `stack build --test helloworld` will
end up including the helloworld-test component as well.

You can bypass this implicit adding of components by being much more explicit,
and stating the components directly. For example, the following will not build
the `helloworld-exe` executable:

~~~text
stack purge
stack build :helloworld-test
helloworld> configure (lib + test)
Configuring helloworld-0.1.0.0...
helloworld> build (lib + test) with ghc-9.6.4
Preprocessing library for helloworld-0.1.0.0..
Building library for helloworld-0.1.0.0..
[1 of 2] Compiling Lib
[2 of 2] Compiling Paths_helloworld
Preprocessing test suite 'helloworld-test' for helloworld-0.1.0.0..
Building test suite 'helloworld-test' for helloworld-0.1.0.0..
[1 of 2] Compiling Main
[2 of 2] Compiling Paths_helloworld
[3 of 3] Linking .stack-work\dist\<hash>\build\helloworld-test\helloworld-test.exe
helloworld> copy/register
Installing library in ...\helloworld\.stack-work\install\...
Registering library for helloworld-0.1.0.0..
helloworld> test (suite: helloworld-test)

Test suite not yet implemented



helloworld> Test suite helloworld-test passed
Completed 2 action(s).
~~~

We first purged our project to clear old results so we know exactly what Stack
is trying to do.

The last line shows that our command also *runs* the test suite it just built.
This may surprise some people who would expect tests to only be run when using
`stack test`, but this design decision is what allows the `stack build` command
to be as composable as it is (as described previously). The same rule applies to
benchmarks. To spell it out completely:

* The `--test` and `--bench` flags simply state which components of a package
  should be built, if no explicit set of components is given
* The default behavior for any test suite or benchmark component which has been
  built is to also run it

You can use the `--no-run-tests` and `--no-run-benchmarks` flags to disable
running of these components. You can also use `--no-rerun-tests` to prevent
running a test suite which has already passed and has not changed.

!!! note

    Stack doesn't build or run test suites and benchmarks for non-local
    packages. This is done so that a command like `stack test` doesn't need to
    run 200 test suites!

## Multi-package projects

Until now, everything we've done with Stack has used a single-package project.
However, Stack's power truly shines when you're working on multi-package
projects. All the functionality you'd expect to work just does: dependencies
between packages are detected and respected, dependencies of all packages are
just as one cohesive whole, and if anything fails to build, the build commands
exits appropriately.

Let's demonstrate this with the `wai-app-static` and `yackage` packages,
starting in the root directory for all our Haskell projects. Command:

~~~text
mkdir multi
cd multi
stack unpack wai-app-static yackage
Unpacked wai-app-static (from Hackage) to .../multi/wai-app-static-3.1.7.4/
Unpacked yackage (from Hackage) to .../multi/yackage-0.8.1/
stack init
Looking for .cabal or package.yaml files to use to init the project.
Using cabal packages:
- wai-app-static-3.1.7.4/
- yackage-0.8.1/

Cabal file warning in .../multi/yackage-0.8.1/yackage.cabal@47:40: version operators used. To use version operators the package needs to specify at least 'cabal-version: >= 1.8'.
Cabal file warning in .../multi/yackage-0.8.1/yackage.cabal@21:36: version operators used. To use version operators the package needs to specify at least 'cabal-version: >= 1.8'.
Selecting the best among 18 snapshots...

* Matches ...

Selected resolver: ...
Initialising configuration using resolver: ...
Total number of user packages considered: 2
Writing configuration to file: stack.yaml
stack build --haddock --test
# Goes off to build a whole bunch of packages
~~~

If you look at the `stack.yaml` file, you'll see exactly what you'd expect:

~~~yaml
resolver:
  url: https://raw.githubusercontent.com/commercialhaskell/stackage-snapshots/master/lts/19/17.yaml
packages:
- wai-app-static-3.1.7.4
- yackage-0.8.1
~~~

Notice that multiple directories are listed in the `packages` key.

In addition to local directories, you can also refer to packages available in a
Git repository or in a tarball over HTTP/HTTPS. This can be useful for using a
modified version of a dependency that hasn't yet been released upstream.

!!! note

    When adding upstream packages directly to your project it is important to
    distinguish _project packages_ located locally from the upstream
    _dependency packages_. Otherwise you may have trouble running `stack ghci`.
    See [stack.yaml documentation](yaml_configuration.md#packages) for more
    details.

## Flags and GHC options

There are two common ways to alter how a package will install: with Cabal flags
and with GHC options.

### Cabal flag management

To change a Cabal flag setting, we can use the command line `--flag` option. The
`yackage` package has an `upload` flag that is enabled by default. We can
command:

~~~text
stack build --flag yackage:-upload
~~~

This means: when compiling the `yackage` package, turn off the `upload` flag
(thus the `-` in `-upload`). Unlike other tools, Stack is explicit about which
package's flag you want to change. It does this for two reasons:

1. There's no global meaning for Cabal flags, and therefore two packages can
   use the same flag name for completely different things.
2. By following this approach, we can avoid unnecessarily recompiling snapshot
   packages that happen to use a flag that we're using.

You can also change flag values on the command line for extra-dep and snapshot
packages. If you do this, that package will automatically be promoted to an
extra-dep, since the build plan is different than what the plan snapshot
definition would entail.

### GHC options

GHC options follow a similar logic as in managing Cabal flags, with a few
nuances to adjust for common use cases. Let's consider the command:

~~~text
stack build --ghc-options="-Wall -Werror"
~~~

This will set the `-Wall -Werror` options for all *local targets*. Note that
this will not affect extra-dep and snapshot packages at all. This design
provides us with reproducible and fast builds.

(By the way: the above GHC options have a special convenience flag:
`--pedantic`.)

There's one extra nuance about command line GHC options: Since they only apply
to local targets, if you change your local targets, they will no longer apply
to other packages. Let's play around with an example from the `wai` repository,
which includes the `wai` and `warp` packages, the latter depending on the
former. If we command again:

~~~text
stack build --ghc-options=-O0 wai
~~~

It will build all of the dependencies of `wai`, and then build `wai` with all
optimizations disabled. Now let's add in `warp` as well. Command:

~~~text
stack build --ghc-options=-O0 wai warp
~~~

This builds the additional dependencies for `warp`, and then builds `warp` with
optimizations disabled. Importantly: it does not rebuild `wai`, since `wai`'s
configuration has not been altered. Now the surprising case. Command:

~~~text
stack build --ghc-options=-O0 warp
wai-3.0.3.0-5a49351d03cba6cbaf906972d788e65d: unregistering (flags changed from ["--ghc-options","-O0"] to [])
warp-3.1.3-a91c7c3108f63376877cb3cd5dbe8a7a: unregistering (missing dependencies: wai)
wai-3.0.3.0: configure
~~~

You may expect this to be a no-op: neither `wai` nor `warp` has changed.
However, Stack will instead recompile `wai` with optimizations enabled again,
and then rebuild `warp` (with optimizations disabled) against this newly built
`wai`. The reason: reproducible builds. If we'd never built `wai` or `warp`
before, trying to build `warp` would necessitate building all of its
dependencies, and it would do so with default GHC options (optimizations
enabled). This dependency would include `wai`. So when we command:

~~~text
stack build --ghc-options=-O0 warp
~~~

We want its behavior to be unaffected by any previous build steps we took.
While this specific corner case does catch people by surprise, the overall goal
of reproducible builds is - in the Stack maintainers' views - worth the
confusion.

Final point: if you have GHC options that you'll be regularly passing to your
packages, you can add them to your `stack.yaml` file. See the
[documentation section on ghc-options](yaml_configuration.md#ghc-options)
for more information.

!!! note

    That's it, the heavy content of this guide is done! Everything from here on
    out is simple explanations of commands. Congratulations!

## The `stack path` command

Generally, you don't need to worry about where Stack stores various files. But
some people like to know this stuff. That's when the `stack path` command is
useful. `stack path --help` explains the available options and, consequently,
the output of the command:

~~~text
--stack-root             Global Stack root directory
--global-config          Global Stack configuration file
--project-root           Project root (derived from stack.yaml file)
--config-location        Configuration location (where the stack.yaml file is)
--bin-path               PATH environment variable
--programs               Install location for GHC and other core tools (see
                         'stack ls tools' command)
--compiler-exe           Compiler binary (e.g. ghc)
--compiler-bin           Directory containing the compiler binary (e.g. ghc)
--compiler-tools-bin     Directory containing binaries specific to a
                         particular compiler
--local-bin              Directory where Stack installs executables (e.g.
                         ~/.local/bin (Unix-like OSs) or %APPDATA%\local\bin
                         (Windows))
--extra-include-dirs     Extra include directories
--extra-library-dirs     Extra library directories
--snapshot-pkg-db        Snapshot package database
--local-pkg-db           Local project package database
--global-pkg-db          Global package database
--ghc-package-path       GHC_PACKAGE_PATH environment variable
--snapshot-install-root  Snapshot installation root
--local-install-root     Local project installation root
--snapshot-doc-root      Snapshot documentation root
--local-doc-root         Local project documentation root
--local-hoogle-root      Local project documentation root
--dist-dir               Dist work directory, relative to package directory
--local-hpc-root         Where HPC reports and tix files are stored
~~~

In addition, `stack path` accepts the flags above on the command line to state
which keys you're interested in. This can be convenient for scripting. As a
simple example, let's find out the sandboxed versions of GHC that Stack
installed:

=== "Unix-like"

    Command:

    ~~~text
    ls $(stack path --programs)/*.installed
    /home/<user_name>/.stack/programs/x86_64-linux/ghc-9.0.2.installed
    ~~~

=== "Windows (with PowerShell)"

    Command:

    ~~~text
    dir "$(stack path --programs)/*.installed"

    Directory: C:\Users\mikep\AppData\Local\Programs\stack\x86_64-windows

    Mode                 LastWriteTime         Length Name
    ----                 -------------         ------ ----
    -a---          27/07/2022  5:40 PM              9 ghc-9.0.2.installed
    -a---          25/02/2022 11:39 PM              9 msys2-20210604.installed
    ~~~

While we're talking about paths, to wipe our Stack install completely, here's
what typically needs to be removed:

1. the Stack root folder (see `stack path --stack-root`, before you uninstall);
2. if different, the folder containing Stack's global YAML configuration file
   (see `stack path --global-config`, before you uninstall);
3. on Windows, the folder containing Stack's tools (see `stack path --programs`,
   before you uninstall), which is located outside of the Stack root folder; and
4. the `stack` executable file (see `which stack`, on Unix-like operating
   systems, or `where.exe stack`, on Windows).

You may also want to delete `.stack-work` folders in any Haskell projects that
you have built using Stack. The `stack uninstall` command provides information
about how to uninstall Stack.

## The `stack exec` command

We've already used `stack exec` multiple times in this guide. As you've likely
already guessed, it allows you to run executables, but with a slightly modified
environment. In particular: `stack exec` looks for executables on Stack's bin
paths, and sets a few additional environment variables (like adding those paths
to the PATH, and setting `GHC_PACKAGE_PATH`, which tells GHC which package
databases to use).

If you want to see exactly what the modified environment looks like, try
command:

~~~text
stack exec env
~~~

The only issue is how to distinguish flags to be passed to Stack versus those
for the underlying program. Thanks to the `optparse-applicative` library, Stack
follows the Unix convention of `--` to separate these. For example, command:

~~~text
stack exec --package stm -- echo I installed the stm package via --package stm
~~~

yields output like:

~~~text
Run from outside a project, using implicit global project config
Using latest snapshot resolver: lts-22.7
Writing global (non-project-specific) config file to: /home/michael/.stack/global/stack.yaml
Note: You can change the snapshot via the resolver field there.
I installed the stm package via --package stm
~~~

Flags worth mentioning:

* `--package foo` can be used to force a package to be installed before running
  the given command.
* `--no-ghc-package-path` can be used to stop the `GHC_PACKAGE_PATH` environment
  variable from being set. Some tools — notably Cabal (the tool) — do not behave
  well with that variable set.

You may also find it convenient to use `stack exec` to launch a subshell
(substitute `bash` with your preferred shell) where your compiled executable is
available at the front of your PATH. Command:

~~~text
stack exec bash
~~~

## The `stack ghci` or `stack repl` command

GHCi is the interactive GHC environment, a.k.a. the REPL. You *could* access it
with command:

~~~text
stack exec ghci
~~~

But that won't load up locally written modules for access. For that, use the
`stack ghci` or `stack repl` commands, which are equivalent. To then load
modules from your project in GHCi, use the `:module` command (`:m` for short)
followed by the module name.

!!! note

    If you have added packages to your project please make sure to mark them as
    extra-deps for faster and reliable usage of `stack ghci`. Otherwise GHCi may
    have trouble due to conflicts of compilation flags or having to
    unnecessarily interpret too many modules. See Stack's project-level
    [configuration](yaml_configuration.md#extra-deps) to learn how to
    configure a package as an extra-dep.

For further information, see the [REPL environment](ghci.md) documentation.

## The `stack ghc` and `stack runghc` commands

You'll sometimes want to just compile (or run) a single Haskell source file,
instead of creating an entire Cabal package for it. You can use `stack exec ghc`
or `stack exec runghc` for that. As simple helpers, we also provide the
`stack ghc` and `stack runghc` commands, for these common cases.

## Finding project configs, and the implicit global project

Whenever you run something with Stack, it needs a project-level configuration
file. The algorithm Stack uses to find such a file is:

1. Check for a `--stack-yaml` option on the command line
2. Check for a `STACK_YAML` environment variable
3. Check the current directory and all ancestor directories for a `stack.yaml`
   file

The first two provide a convenient method for using an alternate configuration.
For example: `stack build --stack-yaml stack-ghc-9.2.3.yaml` can be used by your
CI system to check your code against GHC 9.2.3. Setting the `STACK_YAML`
environment variable can be convenient if you're going to be running commands
like `stack ghc` in other directories, but you want to use the configuration you
defined in a specific project.

If Stack does not find a project level configuration file in any of the three
specified locations, the *implicit global* logic kicks in. You've probably
noticed that phrase a few times in the output from commands above. Implicit
global is essentially a hack to allow Stack to be useful in a non-project
setting. When no implicit global configuration file exists, Stack creates one
for you with the latest LTS snapshot. This allows you to do things like:

* compile individual files easily with `stack ghc`
* build executables without starting a project, e.g. `stack install pandoc`

Keep in mind that there's nothing magical about this implicit global
configuration. It has no effect on projects at all. Every package you install
with it is put into isolated databases just like everywhere else. The only magic
is that it's the catch-all project whenever you're running Stack somewhere else.

## `stack.yaml` versus Cabal files

Now that we've covered a lot of Stack use cases, this quick summary of
`stack.yaml` versus Cabal files will hopefully make sense and be a good reminder
for future uses of Stack:

* A project can have multiple packages.
* Each project has a `stack.yaml`.
* Each package has a Cabal file, named `<package_name>.cabal`.
* The Cabal file specifies which packages are dependencies.
* The `stack.yaml` file specifies which packages are available to be used.
* The Cabal file specifies the components, modules, and build flags provided by
  a package
* `stack.yaml` can override the flag settings for individual packages
* `stack.yaml` specifies which packages to include

## Comparison to other tools

Stack is not the only tool available for building Haskell code. Stack came into
existence due to limitations at that time with some of the existing tools. If
you are happily building Haskell code with other tools, you may not need Stack.
If you're experiencing problems with other tools, give Stack a try instead.

If you're a new user who has no experience with other tools, we recommend Stack.
The defaults match modern best practices in Haskell development, and there are
fewer corner cases you need to be aware of. You *can* develop Haskell code with
other tools, but you probably want to spend your time writing code, not
convincing a tool to do what you want.

### Underlying package format

Before turning to differences, we clarify an important similarity: Stack, Cabal
(the tool), and presumably all other tools share the same underlying package
format of Cabal (the library). This is a Good Thing: we can share the same set
of upstream libraries, and collaboratively work on the same project with Stack,
Cabal (the tool), and NixOS. In that sense, we're sharing the same ecosystem.

### Curation vs dependency solving

* Stack uses 'curation' (snapshots and Stack's project-level configuration file
  (`stack.yaml`, by default) define precisely the set of packages available for
  a project). The Stack team firmly believes that the majority of users want to
  simply ignore dependency resolution nightmares and get a valid build plan from
  day one. That's why we've made 'curation' the focus of Stack.

* Cabal (the tool) can use 'curation' too but its origins are in dependency
  solving.

### Emphasis on reproducibility

* Stack goes to great lengths to ensure that `stack build` today does the
  same thing tomorrow. With Stack, changing the build plan is always an explicit
  decision.

* Cabal (the tool) does not go to the same lengths: build plans can be affected
  by the presence of pre-installed packages, and running `cabal update` can
  cause a previously successful build to fail.

### Automatic building of dependencies

*   Stack's automatically builds dependencies. So for example, in Stack,
    `stack test` does the same job as:

    ~~~text
    cabal install --enable-tests --only-dependencies
    cabal configure --enable-tests
    cabal build
    cabal test
    ~~~

    (newer versions of Cabal (the tool) may make this command sequence shorter).

*   With Cabal (the tool), you need to use `cabal install` to trigger dependency
    building. This is somewhat necessary as building dependencies can, in some
    cases, break existing installed packages.

### Isolation

* Stack is isolated - provides 'sandboxed' behaviour - by default, via its
  databases. In other words: when you use Stack, there's
  __no need for sandboxes__, everything is (essentially) sandboxed by default.

* With Cabal (the tool), the default behavior is a non-isolated build where
  working on two projects can cause the user package database to become
  corrupted. The Cabal solution to this is sandboxes.

### Tools other than Stack and Cabal (the tool)

* [cabal-meta](https://hackage.haskell.org/package/cabal-meta) inspired a lot of
  the multi-package functionality of Stack. Still relevant for Cabal (the
  tool).
* [cabal-src](https://hackage.haskell.org/package/cabal-src). Deprecated in
  favor of Stack in 2016.
* [stackage-cli](https://hackage.haskell.org/package/stackage-cli).Deprecated
  in favor of Stack in 2015.
* [cabal-dev](https://hackage.haskell.org/package/cabal-dev). Deprecated in
  favor of Cabal (the tool) in 2013.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/faq.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# FAQ

So that this doesn't become repetitive: for the reasons behind the answers
below, see the [Build overview](build_overview.md) page. The goal of the answers
here is to be as helpful and concise as possible.

## What version of GHC is used when I run something like `stack ghci`?

The version of GHC, as well as which packages can be installed, are specified by
the _snapshot_. This may be something like `lts-22.7`, which is from
[Stackage](https://www.stackage.org/). The [user's guide](GUIDE.md) discusses
the snapshot in more detail.

The snapshot is determined by finding the relevant project-level configuration
file (`stack.yaml`, by default) for the directory you're running the command
from. This essentially works by:

1. Check for a `STACK_YAML` environment variable or the `--stack-yaml`
   command line argument
2. If none present, check for a `stack.yaml` file in the current
   directory or any parents
3. If no `stack.yaml` file was found, use the _implicit global_

The implicit global is a shared project used whenever you're outside
of another project. It's a sort of "mutable shared state" that you
should be aware of when working with Stack.

A frequent request when working with the implicit global is how to move to a
more recent LTS snapshot. You can do this using the following command from
outside of a project:

~~~text
stack config set snapshot lts
~~~

## Where is Stack installed and will it interfere with the GHC (etc) I already have installed?

Stack itself is installed in normal system locations based on the mechanism you
used (see the [Install and upgrade](install_and_upgrade.md) page). Stack
installs files in the Stack root and other files in a `.stack-work` directory
within each project's directory. None of this should affect any existing Haskell
tools at all.

## What is the relationship between Stack and Cabal (the tool)?

* 'Cabal' can refer to Cabal (the library) or to Cabal (the tool). Cabal (the
  library) is used by Stack to build your Haskell code. Cabal (the tool) is
  provided by the `cabal-install` package.
* A Cabal file is provided for each package, named `<package_name>.cabal`. It
  defines all package-level metadata, just like it does in the world of Cabal
  (the tool): modules, executables, test suites, etc. No change at all on this
  front.
* A `stack.yaml` file references one or more packages, and provides information
  on where dependencies come from.
* The `stack init` command initializes a `stack.yaml` file from an existing
  Cabal file.
* Stack uses Cabal (the library) via an executable. For `build-type: Simple`
  (the most common case), Stack builds that executable using the version of
  Cabal which came with the compiler. Stack caches such executables, in the
  Stack root under directory `setup-exe-cache`.
* In rare or complex cases, a different version of Cabal to the one that came
  with the compiler may be needed. `build-type: Custom` and a `setup-custom`
  stanza in the Cabal file, and a `Setup.hs` file in the package directory, can
  be specified. The `stack.yaml` file can then specify the version of Cabal
  that Stack will use to build the executable (named `setup`) from `Setup.hs`.
  Stack will use Cabal via `setup`.

For detail on the differences between a `stack.yaml` file and a Cabal file, see
[stack.yaml vs a Cabal file](stack_yaml_vs_cabal_package_file.md).

## I need to use a different version of a package than what is provided by the LTS Haskell snapshot I'm using, what should I do?

You can make tweaks to a snapshot by modifying the `extra-deps` configuration
value in your `stack.yaml` file, e.g.:

~~~yaml
snapshot: lts-22.7
packages:
- .
extra-deps:
- text-2.0.2@rev:1
~~~

## I need to use a package (or version of a package) that is not available on Hackage, what should I do?

Add it to the
[`extra-deps`](yaml_configuration.md#extra-deps) list in your project's
`stack.yaml` file, specifying the package's source code location relative to the
directory where your `stack.yaml` file lives, e.g.

~~~yaml
snapshot: lts-22.7
packages:
- .
extra-deps:
- third-party/proprietary-dep
- github-version-of/conduit
- patched/diagrams
~~~

The above example specifies that the `proprietary-dep` package is found in the
project's `third-party` directory, that the `conduit` package is found in the
project's `github-version-of` directory, and that the `diagrams` package is
found in the project's `patched` directory. This autodetects changes and
reinstalls the package.

To install packages directly from a Git repository, use e.g.:

~~~yaml
extra-deps:
  - git: https://github.com/githubuser/reponame.git
    commit: somecommitID
~~~

## What is the meaning of the arguments given to `stack build`, `test`, etc?

Those are the targets of the build, and can have one of three formats:

* A package name (e.g., `my-package`) will mean that the `my-package` package
  must be built
* A package identifier (e.g., `my-package-1.2.3`), which includes a specific
  version. This is useful for passing to `stack install` for getting a specific
  version from upstream
* A directory (e.g., `./my-package`) for including a local directory's package,
  including any packages in subdirectories

## I need to modify an upstream package, how should I do it?

Typically, you will want to get the source for the package and then add it to
your `packages` list in the `stack.yaml` file. (See the previous question.)
`stack unpack` is one approach for getting the source. Another would be to add
the upstream package as a submodule to your project.

## How do I use this with sandboxes?

Explicit sandboxing on the part of the user is not required by Stack. All
builds are automatically isolated into separate package databases without any
user interaction. This ensures that you won't accidentally corrupt your
installed packages with actions taken in other projects.

## Can I run `cabal` commands inside `stack exec`?

With a recent enough version of Cabal (the tool) (1.22 or later), you can. For
earlier versions this does not work, due to Cabal issue
[#1800](https://github.com/haskell/cabal/issues/1800). Note that
even with recent versions, for some commands you may need the following extra
level of indirection. Command:

~~~text
stack exec -- cabal exec -- cabal <command>
~~~

However, virtually all `cabal` commands have an equivalent in Stack, so this
should not be necessary. In particular, users of Cabal (the tool) may be
accustomed to the `cabal run` command. With Stack, command:

~~~text
stack build
stack exec <program-name>
~~~

Or, if you want to install the binaries in a shared location, command:

~~~text
stack install <program-name>
~~~

assuming your PATH has been set appropriately.

## Using custom preprocessors

If you have a custom preprocessor, for example, Ruby, you may have a file like:

***B.erb***

~~~haskell
module B where

<% (1..5).each do |i| %>
test<%= i %> :: Int
test<%= i %> = <%= i %>
<% end %>
~~~

To ensure that Stack picks up changes to this file for rebuilds, add the
following lines to your `stack.yaml` file:

~~~yaml
custom-preprocessor-extensions:
- erb

require-stack-version: ">= 2.6.0"
~~~

And for backwards compatability with older versions of Stack, also add the
following line to your Cabal file:

    extra-source-files:   B.erb

You could also use the
[`--custom-preprocessor-extensions`](yaml_configuration.md#custom-preprocessor-extensions)
flag.

## I already have GHC installed, can I still use Stack?

Yes. In its default configuration, Stack will simply ignore any system GHC
installation and use a sandboxed GHC that it has installed itself. You can find
these sandboxed GHC installations in the `ghc-*` directories in the
`stack path --programs` directory.

If you would like Stack to use your system GHC installation, use the
[`--system-ghc`](yaml_configuration.md#system-ghc) flag or run
`stack config set system-ghc --global true` to make Stack check your PATH for a
suitable GHC by default.

Stack can only use a system GHC installation if its version is compatible with
the configuration of the current project, particularly the snapshot specified by
the [`snapshot`](yaml_configuration.md#snapshot) or
[`resolver`](yaml_configuration.md#resolver) key.

GHC installation doesn't work for all operating systems, so in some cases you
will need to use `system-ghc` and install GHC yourself.

## How does Stack determine what GHC to use?

In its default configuration, Stack determines from the current project which
GHC version, architecture etc it needs. It then looks in the `ghc-<version>`
subdirectory of the `stack path --programs` directory for a compatible GHC,
requesting to install one via `stack setup` if none is found.

If you are using the [`--system-ghc`](yaml_configuration.md/#system-ghc) flag or
have configured `system-ghc: true` either in the project `stack.yaml` or the
global `config.yaml`, Stack will use the first GHC that it finds on your PATH,
falling back on its sandboxed installations only if the found GHC doesn't comply
with the various requirements (version, architecture) that your project needs.

See issue [#420](https://github.com/commercialhaskell/stack/issues/420) for a
detailed discussion of Stack's behavior when `system-ghc` is enabled.

## How do I get extra build tools?

Stack will automatically install build tools required by your packages or their
dependencies, in particular [Alex](https://hackage.haskell.org/package/alex) and
[Happy](https://hackage.haskell.org/package/happy).

!!! note

    This works when using LTS or nightly snapshots, not with GHC or custom
    snapshots. You can manually install build tools by running, e.g.,
    `stack build alex happy`.

## How does Stack choose which snapshot to use when creating a new configuration file?

It checks the two most recent LTS Haskell major versions and the most recent
Stackage Nightly for a snapshot that is compatible with all of the version
bounds in your Cabal file, favoring the most recent LTS. For more information,
see the snapshot auto-detection section in the architecture document.

## I'd like to use my installed packages in a different directory. How do I tell Stack where to find my packages?

Set the `STACK_YAML` environment variable to point to the `stack.yaml`
configuration file for your project. Then you can run `stack exec`, `stack ghc`,
etc., from any directory and still use your packages.

## My tests are failing. What should I do?

Like all other targets, `stack test` runs test suites in parallel by default.
This can cause problems with test suites that depend on global resources such
as a database or binding to a fixed port number. A quick hack is to force stack
to run all test suites in sequence, using `stack test --jobs=1`. For test
suites to run in parallel developers should ensure that their test suites do
not depend on global resources (e.g. by asking the operating system for a random
port to bind to) and where unavoidable, add a lock in order to serialize access
to shared resources.

## Can I get bash autocompletion?

Yes, see the [shell-autocompletion](shell_autocompletion.md) documentation.

## How do I update my package index?

Users of Cabal (the tool) are used to running `cabal update` regularly. You can
do the same with Stack by running `stack update`. But generally, it's not
necessary: if the package index is missing, or if a snapshot refers to
package/version that isn't available, Stack will automatically update and then
try again. If you run into a situation where Stack doesn't automatically do the
update for you, please report it as a bug.

## Isn't it dangerous to automatically update the index? Can't that corrupt build plans?

No, Stack is very explicit about which packages it's going to build for you.
There are three sources of information to tell it which packages to install:
the selected snapshot, the `extra-deps` configuration value, and your local
packages. The only way to get Stack to change its build plan is to modify one
of those three. Updating the index will have no impact on Stack's behavior.

## I have a custom package index I'd like to use, how do I do so?

You can configure this in your project-level configuration file (`stack.yaml`,
by default). See [YAML configuration](yaml_configuration.md).

## How can I make sure my project builds against multiple GHC versions?

You can create multiple YAML configuration files for your project, one for each
build plan. For example, you might set up your project directory like so:

~~~text
myproject/
  stack-ghc-9.0.2.yaml
  stack-ghc-9.2.4.yaml
  stack.yaml --> symlink to stack-ghc-9.2.4.yaml
  myproject.cabal
  src/
    ...
~~~

When you run `stack build`, you can set the `STACK_YAML` environment variable to
indicate which build plan to use. On Unix-like operating systems command:

~~~bash
stack build  # builds using the default stack.yaml
STACK_YAML=stack-ghc-7.10.yaml
stack build  # builds using the given yaml file
~~~

On Windows (with PowerShell) command:

~~~ps
$Env:STACK_YAML='stack-ghc-9.0.2.yaml'
stack build
~~~

## I heard you can use this with Docker?

Yes, Stack supports using Docker with images that contain preinstalled Stackage
packages and the tools. See [Docker integration](docker_integration.md) for
details.

## How do I use this with Travis CI?

See the [Travis CI instructions](travis_ci.md)

## How do I use this with Azure CI?

See the [Azure CI instructions](azure_ci.md)

## What is licensing restrictions on Windows?

Currently, on Windows, GHC produces binaries linked statically with
[GNU Multiple Precision Arithmetic Library](https://gmplib.org/) (GMP), which is
used by [integer-gmp](https://hackage.haskell.org/package/integer-gmp) library
to provide big integer implementation for Haskell. Contrary to the majority of
Haskell code licensed under permissive BSD3 license, GMP library is licensed
under LGPL, which means resulting binaries
[have to be provided with source code or object files](http://www.gnu.org/licenses/gpl-faq.html#LGPLStaticVsDynamic).
That may or may not be acceptable for your situation. Current workaround is to
use GHC built with alternative big integer implementation called
`integer-simple`, which is free from LGPL limitations as it's pure Haskell and
does not use GMP.  Unfortunately it has yet to be available out of the box with
Stack. See issue [#399](https://github.com/commercialhaskell/stack/issues/399)
for the ongoing effort and information on workarounds.

## How to get a working executable on Windows?

When executing a binary after building with `stack build` (e.g. for target
"foo"), the command `foo.exe` might complain about missing runtime libraries
(whereas `stack exec foo` works).

Windows is not able to find the necessary C++ libraries from the standard
prompt because they're not in the PATH environment variable. `stack exec` works
because it's modifying PATH to include extra things.

Those libraries are shipped with GHC (and, theoretically in some cases, MSYS2).
The easiest way to find them is `stack exec which`. For example, command:

~~~text
stack exec -- which libstdc++-6.dll
/c/Users/Michael/AppData/Local/Programs/stack/i386-windows/ghc-7.8.4/mingw/bin/libstdc++-6.dll
~~~

A quick workaround is adding this path to the PATH environment variable or
copying the files somewhere Windows finds them (see
https://msdn.microsoft.com/de-de/library/7d83bc18.aspx).

See issue [#425](https://github.com/commercialhaskell/stack/issues/425).

Another issue that may arise with building on Windows is as follows. The default
location of Stack's programs folder is `%LOCALAPPDATA\Programs\stack`. If there
is a space character in the `%LOCALAPPDATA%` path this may, in some
circumstances, cause problems with building packages that make use of the GNU
project's `autoconf` package and `configure` shell script files. It may be
necessary to override the default location of Stack's programs folder. See the
[local-programs-path](yaml_configuration.md#local-programs-path) option for more
information.

See issue [#4726](https://github.com/commercialhaskell/stack/issues/4726).

## Can I change Stack's default temporary directory?

Stack downloads and extracts files to `$STACK_ROOT/programs` on most platforms,
which defaults to `~/.stack/programs`. On Windows `$LOCALAPPDATA\Programs\stack`
is used. If there is not enough free space in this directory, Stack may fail.
For instance, `stack setup` with a GHC installation requires roughly 1GB free.
If this is an issue, you can set `local-programs-path` in your
`~/.stack/config.yaml` to a directory on a file system with more free space.

If you use Stack with Nix integration, be aware that Nix uses a `TMPDIR`
variable, and if it is not set Nix sets it to some subdirectory of `/run`, which
on most Linuxes is a Ramdir. Nix will run the builds in `TMPDIR`, therefore if
you don't have enough RAM you will get errors about disk space. If this happens
to you, please _manually_ set `TMPDIR` before launching Stack to some directory
on the disk.

## Why doesn't Stack rebuild my project when I specify `--ghc-options` on the command line?

Because GHC options often only affect optimization levels and warning behavior,
Stack doesn't recompile when it detects an option change by default. This
behavior can be changed though by setting the
[`rebuild-ghc-options` option](yaml_configuration.md#rebuild-ghc-options) to
`true`.

To force recompilation manually, use the `--force-dirty` flag. If this still
doesn't lead to a rebuild, add the `-fforce-recomp` flag to your
`--ghc-options`.

## Why doesn't Stack apply my `--ghc-options` to my dependencies?

By default, Stack applies command line GHC options only to
[project packages](yaml_configuration.md#packages). For an explanation of this
choice see this discussion on issue
[#827](https://github.com/commercialhaskell/stack/issues/827#issuecomment-133263678).

If you still want to set specific GHC options for a dependency, use the
[`ghc-options`](yaml_configuration.md#ghc-options) option in your
YAML configuration file.

To change the set of packages that command line GHC options apply to, use the [`apply-ghc-options`](yaml_configuration.md#apply-ghc-options) option.

## `stack setup` on a Windows system only tells me to add certain paths to the PATH variable instead of doing it

With PowerShell, it is easy to automate even that step. Command:

~~~ps
$Env:Path = ( stack setup | %{ $_ -replace '[^ ]+ ', ''} ), $Env:Path -join ";"
~~~

## How do I reset/remove Stack (such as to do a completely fresh build)?

The first thing to remove is project-specific `.stack-work` directory within
the project's directory. Next, remove the Stack root directory overall. You may
have errors if you remove the latter but leave the former. Removing Stack
itself will relate to how it was installed, and if you used GHC installed
outside of Stack, that would need to be removed separately.

## How does Stack handle parallel builds? What exactly does it run in parallel?

See issue [#644](https://github.com/commercialhaskell/stack/issues/644) for more
details.

## I get strange `ld` errors about recompiling with "-fPIC"

(Updated in January 2019)

This is related to more recent versions of Linux distributions that have GCC
with PIE enabled by default. The continuously-updated distros like Arch, in
particular, had been in flux with this change and the upgrading
libtinfo6/ncurses6, and there were some workarounds attempted in Stack that
ended up causing trouble as these distros evolved.

GHC added official support for this setup in 8.0.2, so if you are using an
older version your best bet is to upgrade. You may be able to work around it
for older versions by editing `~/.stack/programs/x86_64-osx/ghc-VER/lib/ghc-
VER/settings` (replace `VER` with the GHC version) and adding `-no-pie` (or
`--no-pie` in the case of Gentoo, at least as of December 2017) to the __C
compiler link flags__.

If `stack setup` complains that there is no `linuxNN-*-nopie` bindist available,
try adding `ghc-build: *` (replacing the `*` with the actual value that
precedes `-nopie`, which may be empty) to your `~/.stack/config.yaml` (this
will no longer be necessary for stack >= 1.7).

If you are experiencing this with GHC >= 8.0.2, try running
`stack setup --reinstall` if you've upgraded your Linux distribution or you set
up GHC before late December 2017.

If GHC doesn't recognize your C compiler as being able to use `-no-pie`, this
can happen even with GCC and Clang, it might be necessary to enable this feature
manually. To do this, just change
`("C compiler supports -no-pie", "NO"),` to
`("C compiler supports -no-pie", "YES"),`
in the file `~/.stack/programs/x86_64-osx/ghc-VER/lib/ghc-VER/settings`.

If you are still having trouble after trying the above, check the following for
more possible workarounds:

  * Previous version of this [FAQ entry](https://docs.haskellstack.org/en/v1.6.3/faq/#i-get-strange-ld-errors-about-recompiling-with-fpic)
  * Related issues:
    [#3518](https://github.com/commercialhaskell/stack/issues/3518),
    [#2712](https://github.com/commercialhaskell/stack/issues/2712),
    [#3630](https://github.com/commercialhaskell/stack/issues/3630),
    [#3648](https://github.com/commercialhaskell/stack/issues/3648)

## Where does the output from `--ghc-options=-ddump-splices` (and other `-ddump*` options) go?

These are written to `*.dump-*` files inside the package's `.stack-work`
directory. Specifically, they will be available at
`PKG-DIR/$(stack path --dist-dir)/build/SOURCE-PATH`, where `SOURCE-PATH` is the
path to the source file, relative to the location of the Cabal file. When
building named components such as test-suites, `SOURCE-PATH` will also include
`COMPONENT/COMPONENT-tmp`, where `COMPONENT` is the name of the component.

## Why is DYLD_LIBRARY_PATH ignored?

If you are on Mac OS X 10.11 ("El Capitan") or later, there is a GHC issue
[#11617](https://ghc.haskell.org/trac/ghc/ticket/11617) which prevents the
`DYLD_LIBRARY_PATH` environment variable from being passed to GHC (see issue
[#1161](https://github.com/commercialhaskell/stack/issues/1161)) when System
Integrity Protection (a.k.a. "rootless") is enabled. There are two known
workarounds:

 1. Known to work in all cases:
    [disable System Integrity Protection](http://osxdaily.com/2015/10/05/disable-rootless-system-integrity-protection-mac-os-x/).
    **WARNING: Disabling SIP will severely reduce the security of your system, so only do this if absolutely necessary!**
 2. Experimental: modify GHC's shell script wrappers to use a shell outside the
    protected directories (see issue
    [#1161](https://github.com/commercialhaskell/stack/issues/1161#issuecomment-186690904)).

## Why do I get a `/usr/bin/ar: permission denied` error?

## Why is the `--` argument separator ignored in Windows PowerShell

Some versions of Windows PowerShell don't pass the `--` to programs (see issue
[#813](https://github.com/commercialhaskell/stack/issues/813)). The workaround
is to quote the `"--"`. For example, command:

~~~ps
stack exec "--" cabal --version
~~~

This is known to be a problem on Windows 7, but seems to be fixed on Windows 10.

## Does Stack also install the system/C libraries that some Cabal packages depend on?

No, this is currently out of the scope of Stack's target set of features.
Instead of attempting to automate the installation of 3rd party dependencies, we
have the following approaches for handling system dependencies:

* Nix and docker help make your build and execution environment deterministic
  and predictable. This way, you can install system dependencies into a
  container, and share this container with all developers.

* If you have installed some libraries into a non-standard location, use the
  [`extra-lib-dirs`](yaml_configuration.md#extra-lib-dirs) option or the
  [`extra-include-dirs`](yaml_configuration.md#extra-include-dirs) option to
  specify it.

In the future, Stack might give operating system-specific suggestions for how to
install system libraries.

## How can I make Stack aware of my custom SSL certificates?

### macOS

In principle, you can use the following command to add a certificate to your
system certificate keychain:

~~~bash
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain <certificate>
~~~

Some users have reported issues with this approach, see issue
[#907](https://github.com/commercialhaskell/stack/issues/907) for more
information.

### Other *NIX OSs

Use the `SYSTEM_CERTIFICATE_PATH` environment variable to point at the directory
where you keep your SSL certificates.

## How do I get `verbose` output from GHC when I build?

Add `ghc-options: -vN` to the Cabal file or pass it via
`stack build --ghc-options="-v"`.

## Does Stack support the Hpack specification?

Yes:

* If a package directory contains an [Hpack](https://github.com/sol/hpack)
  `package.yaml` file, then Stack will use it to generate a Cabal file when
  building the package.
* You can run `stack init` to initialize a `stack.yaml` file regardless of
  whether your packages are declared with Cabal files or with Hpack
  `package.yaml` files.
* You can use the `with-hpack` YAML configuration or command line option to
  specify an Hpack executable to use instead of Stack's in-built Hpack
  functionality.

## How do I resolve linker errors when running `stack setup` or `stack build` on macOS?

This is likely to be caused by having both a LLVM installation and default Apple
Clang compiler on the PATH. The symptom of this issue is a linker error "bad
relocation (Invalid pointer diff)". The compiler picks up inconsistent versions
of binaries and the mysterious error occurs.

The workaround is to remove LLVM binaries from the PATH.

## How do I suppress `'-nopie'` warnings with `stack build` on macOS?

~~~bash
clang: warning: argument unused during compilation: '-nopie'
 [-Wunused-command-line-argument]
~~~

This warning is shown when compiler support of `-no-pie` is expected but
unavailable. It's possible to bypass the warning for a specific version of GHC
by modifying a global setting:

~~~bash
# ~/.stack/programs/x86_64-osx/ghc-8.2.2/lib/ghc-8.2.2/settings
-- ("C compiler supports -no-pie", "YES"),
++ ("C compiler supports -no-pie", "NO"),
~~~

**Note that we're fixing `ghc-8.2.2` in this case; repeat for other versions as necessary.**
You should apply this fix for the version of GHC that matches your snapshot.

Issue [#4009](https://github.com/commercialhaskell/stack/issues/4009) goes into
further detail.

## How do I install GHC in Stack when it fails with the error: Missing ghc bindist for "linux64-ncurses6"?

Example Error:

~~~text
No setup information found for ghc-8.6.4 on your platform.
This probably means a GHC bindist has not yet been added for OS key 'linux64-ncurses6'.
Supported versions: ghc-7.10.3, ghc-8.0.1, ghc-8.0.2, ghc-8.2.1, ghc-8.2.2
~~~

Most Linux distributions have standardized on providing libtinfo.so.6 (either
directly or as a symlink to libncursesw.so.6). As such, there aren't GHC 8.6.*
bindists that link to libncursesw.so.6 available.

So creating a symlink to libncursesw.so.6 as libtinfo.so.6 can prevent this
error (root privileges might be required). Command:

~~~bash
ln -s /usr/lib/libncursesw.so.6 /usr/lib/libtinfo.so.6
~~~


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/glossary.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Glossary

The following terms are used in Stack's documentation.

|Term               |Meaning                                                   |
|-------------------|----------------------------------------------------------|
|Cabal              |The Haskell Common Architecture for Building Applications and Libraries, provided by the [`Cabal` package](https://hackage.haskell.org/package/Cabal). Also referred to as Cabal (the library) to distinguish it from Cabal (the tool).|
|Cabal file|A file containing a [package description](https://cabal.readthedocs.io/en/stable/cabal-package.html) used by Cabal, named `<package_name>.cabal`.|
|Cabal (the tool)|The Haskell build tool provided by the [`cabal-install` package](https://hackage.haskell.org/package/cabal-install).|
|CI                 |Continuous integration.                                   |
|CMake              |A [system](https://cmake.org/) for managing build processes.|
|`config.yaml`      |A global and non-project-specific configuration file used by Stack.|
|dependency         |A Haskell package other than a project package and on which a project package depends (directly or indirectly), located locally or elsewhere.|
|Docker             |A [platform](https://www.docker.com/) for developing,  shipping, and running applications. It can package and run an application in a loosely isolated environment called a _container_.|
|Emacs              |[GNU Emacs](https://www.gnu.org/software/emacs/), an extensible, customisable text editor.|
|extra-deps         |Extra dependencies (one version of each) that add to, or shadow, those specified in a snapshot.|
|FreeBSD            |A Unix-like operating system.                             |
|GCC                |The [GNU Compiler Collection](https://gcc.gnu.org/) or its executable `gcc`.|
|GHC                |The [Glasgow Haskell Compiler](https://www.haskell.org/ghc/).|
|GHC boot package   |A package that comes with GHC, is included in GHC's global package database, and is not included in a Stackage snapshot. See the output of command `stack exec -- ghc-pkg list --global`.|
|GHCi               |GHC's [interactive environment](https://downloads.haskell.org/~ghc/latest/docs/html/users_guide/ghci.html).|
|GHCJS              |A Haskell to JavaScript [compiler](https://github.com/ghcjs/ghcjs).|
|GHCup              |An [installer](https://www.haskell.org/ghcup/) for Haskell.
|Git                |A [distributed version control system](https://git-scm.com/).|
|GPG                |The [GNU Privacy Guard](https://gnupg.org/) or GnuPG, software that allows you to encrypt or sign your data and communications.|
|Hackage            |The [Haskell Package Repository](https://hackage.haskell.org/).
|Haddock            |The [document generation tool](https://hackage.haskell.org/package/haddock) for Haskell libraries.|
|'Haskell' extension|The ['Haskell' extension]() for VS Code.                  |
|HLS                |[Haskell Language Server](https://haskell-language-server.readthedocs.io/en/latest/), an implementation of the Language Server Protocol for Haskell.|
|Homebrew           |A [package manager](https://brew.sh/) for macOS or Linux, or its executable `brew`.|
|Hoogle             |A Haskell API [search engine](https://hoogle.haskell.org/).|
|Hpack              |A [format](https://github.com/sol/hpack) for Haskell packages or the executable `hpack` that produces a Cabal file from `package.yaml`.|
|Linux              |A family of operating systems based on the Linux kernel.  |
|macOS              |The primary operating system for Apple's Mac computers. Previously known as Mac OS X or OS X.|
|Make               |A [build automation tool](https://www.gnu.org/software/make/).|
|MSYS2              |The [MSYS2](https://www.msys2.org/) software distribution and building platform for Windows.|
|Nix                |A purely functional [package manager](https://nixos.org/), available for Linux and macOS.|
|package            |A Haskell package is an organised collection of Haskell code and related files. It is described by a Cabal file or a `package.yaml` file, which is itself part of the package.|
|`package.yaml`     |A file that describes a package in the Hpack format.      |
|Pantry             |A library for content-addressable Haskell package management, provided by the [`pantry` package](https://hackage.haskell.org/package/pantry). A dependency of Stack.|
|PATH               |The `PATH` environment variable, specifying a list of directories searched for executable files.|
|project            |A Stack project is a local directory that contains a project-level configuration file (`stack.yaml`, by default). A project may relate to more than one project package.|
|project package    |A Haskell package that is part of a project and located locally. Distinct from a dependency located locally.|
|PVP                |The Haskell [Package Versioning Policy](https://pvp.haskell.org/), which tells developers of libraries how to set their version numbers.|
|REPL               |An interactive (run-eval-print loop) programming environment.|
|resolver           |A synonym for snapshot.                                   |
|`Setup.hs`         |A project-specific file used by Cabal to perform setup tasks.|
|snapshot           |A snapshot defines a GHC version, a set of packages (one version of each), and build flags or other settings.|
|Stack              |The Haskell Tool Stack project or its executable `stack`. |
|`stack.yaml`       |A project-level configuration file used by Stack, which may also contain non-project-specific options.|
|Stackage           |A [distribution](https://www.stackage.org/) of compatible Haskell packages.|
|Stack root         |A directory in which Stack stores important files. See `stack path --stack-root`. On Windows, or if Stack is configured to use the XDG Base Directory Specification, Stack also stores important files outside of the Stack root.|
|Stack work directory|A directory within a local project or package directory in which Stack stores files created during the build process. Named `.stack-work`, by default.|
|Unix-like operating systems|Linux, FreeBSD and macOS.                         |
|VS Code            |[Visual Studio Code](https://code.visualstudio.com/), a source code editor.|
|Windows            |A group of operating systems developed by Microsoft.      |
|WSL                |[Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/). Provides a Linux environment on Windows.|
|XDG Base Directory Specification|A [specification](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html) of directories relative to which files should be located.|
|YAML               |A human-friendly [data serialization language](https://yaml.org/).|


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/other_resources.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Other resources

There are lots of resources available for learning more about Stack:

* `stack` or `stack --help` — lists Stack's commands, and flags and options
  common to those commands
* `stack <command> --help` — provides help on the particular Stack command,
  including flags and options specific to the command
* `stack --version` — identify the version and Git hash of the Stack executable
* `--verbose` (or `-v`) — much more info about internal operations (useful for
  bug reports)
* The [home page](http://haskellstack.org)
* The [Stack mailing list](https://groups.google.com/d/forum/haskell-stack)
* The [FAQ](faq.md)
* The [haskell-stack tag on Stack Overflow](http://stackoverflow.com/questions/tagged/haskell-stack)
* [Another getting started with Stack tutorial](http://seanhess.github.io/2015/08/04/practical-haskell-getting-started.html)
* [Why is Stack not Cabal?](https://www.fpcomplete.com/blog/2015/06/why-is-stack-not-cabal)


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/ChangeLog.md


../ChangeLog.md# /doc/SIGNING_KEY.md

<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Signing key

Each released Stack executable is signed with either:

* the GPG key with ID 0x575159689BEFB442; or
* the GPG key of a person that has been authorised by the GPG key with ID
  0x575159689BEFB442.

The signature is in an `*.asc` file. For example:

~~~text
stack-2.7.5-linux-x86_64-bin
stack-2.7.5-linux-x86_64-bin.asc
~~~

The signature can be verified with GPG, as follows:

~~~text
# Receive the public key from a keyserver
gpg --keyserver keyserver.ubuntu.com --recv-keys 0x575159689BEFB442
# Get information about the key
gpg --keyid-format long --list-keys 0x575159689BEFB442
pub   rsa2048/575159689BEFB442 2015-06-02 [SC]
      C5705533DA4F78D8664B5DC0575159689BEFB442
uid                 [ unknown] FPComplete <dev@fpcomplete.com>
sub   rsa2048/85A738994664AB89 2015-06-02 [E]

# Attempt to verify the file using the signature file. The public key has not
# yet been certified with a trusted signature.
gpg --verify stack-2.7.5-linux-x86_64-bin.asc stack-2.7.5-linux-x86_64-bin
gpg: Signature made 06/03/2022 15:15:21 GMT Standard Time
gpg:                using RSA key C5705533DA4F78D8664B5DC0575159689BEFB442
gpg: Good signature from "FPComplete <dev@fpcomplete.com>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: C570 5533 DA4F 78D8 664B  5DC0 5751 5968 9BEF B442
~~~

The GPG key with ID 0x575159689BEFB442, and keys it has signed, have been
uploaded to the
[Ubuntu Keyserver](https://keyserver.ubuntu.com/pks/lookup?search=0x575159689BEFB442&fingerprint=on&op=index).

This is the public key block for GPG key ID 0x575159689BEFB442:

~~~text
-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: GnuPG v1

mQENBFVs+cMBCAC5IsLWTikd1V70Ur1FPJMn14Sc/C2fbXc0zRcPuWX+JaXgrIJQ
74A3UGBpa07wJDZiQLLz4AasDQj++9gXdiM9MlK/xWt8BQpgQqSMgkktFVajSWX2
rSXPjqLtsl5dLsc8ziBkd/AARXoeITmXX+n6oRTy6QfdMv2Tacnq7r9M9J6bAz6/
7UsKkyZVwsbUPea4SuD/s7jkXAuly15APaYDmF5mMlpoRWp442lJFpA0h52mREX1
s5FDbuKRQW7OpZdLcmOgoknJBDSpKHuHEoUhdG7Y3WDUGYFZcTtta1qSVHrm3nYa
7q5yOzPW4/VpftkBs1KzIxx0nQ5INT5W5+oTABEBAAG0H0ZQQ29tcGxldGUgPGRl
dkBmcGNvbXBsZXRlLmNvbT6JATcEEwEKACEFAlVs+cMCGwMFCwkIBwMFFQoJCAsF
FgMCAQACHgECF4AACgkQV1FZaJvvtEIP8gf/S/k4C3lp/BFb0K9DHHSt6EaGQPwy
g+O8d+JvL7ghkvMjlQ+UxDw+LfRKANTpl8a4vHtEQLHEy1tPJfrnMA8DNci8HLVx
rK3lIqMfv5t85VST9rz3X8huSw7qwFyxsmIqFtJC/BBQfsOXC+Q5Z2nbResXHMeA
5ZvDopZnqKPdmMOngabPGZd89hOKn6r8k7+yvZ/mXmrGOB8q5ZGbOXUbCshst7lc
yZWmoK3VJdErQjGHCdF4MC9KFBQsYYUy9b1q0OUv9QLtq/TeKxfpvYk9zMWAoafk
M8QBE/qqOpqkBRoKbQHCDQgx7AXJMKnOA0jPx1At57hWl7PuEH4rK38UtLkBDQRV
bPnDAQgAx1+4ENyaMk8XznQQ4l+nl8qw4UedZhnR5Xxr6z2kcMO/0VdwmIDCpxaM
spurOF+yExfY/Chbex7fThWTwVgfsItUc/QLLv9jkvpveMUDuPyh/4QrAQBYoW09
jMJcOTFQU+f4CtKaN/1PNoTSU2YkVpbhvtV3Jn2LPFjUSPb7z2NZ9NKe10M0/yN+
l0CuPlqu6GZR5L3pA5i8PZ0Nh47j0Ux5KIjrjCGne4p+J8qqeRhUf04yHAYfDLgE
aLAG4v4pYbb1jNPUm1Kbk0lo2c3dxx0IU201uAQ6LNLdF/WW/ZF7w3iHn7kbbzXO
jhbq2rvZEn3K9xDr7homVnnj21/LSQARAQABiQEfBBgBCgAJBQJVbPnDAhsMAAoJ
EFdRWWib77RC3ukH/R9jQ4q6LpXynQPJJ9QKwstglKfoKNpGeAYVTEn0e7NB0HV5
BC+Da5SzBowboxC2YCD1wTAjBjLLQfAYNyR+tHpJBaBmruafj87nBCDhSWwWDXwx
OUDpNOwKUkrwZDRlM7n4byoMRl7Vh/7CXxaTqkyao1c5v3mHh/DremiTvOJ4OXgJ
77NHaPXezHkCFZC8/sX6aY0DJxF+LIE84CoLI1LYBatH+NKxoICKA+yeF3RIVw0/
F3mtEFEtmJ6ljSks5tECxfJFvQlkpILBbGvHfuljKMeaj+iN+bsHmV4em/ELB1ku
N9Obs/bFDBMmQklIdLP7dOunDjY4FwwcFcXdNyg=
=YUsC
-----END PGP PUBLIC KEY BLOCK-----
~~~
# /Reference (advanced)



- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/GUIDE_advanced.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# User guide (advanced)

Some of Stack's features will not be needed regularly or by all users. This part
of the guide provides information about those features, organised as a reference
guide. Some of the features are complex and separate pages are dedicated to
them.

## Environment variables

The existence or content of certain environment variables can affect how Stack
behaves. For further information, see the
[environment variables](environment_variables.md) documentation.

## YAML configuration files

Stack is configured by the content of YAML files. A global YAML configuration
file contains non-project specific options. A project-level YAML configuration
file contains project-specific options and may contain non-project specific
options. For further information, see the
[YAML configuration](yaml_configuration.md) documentation.

## Global flags and options

Stack can also be configured by flags and options on the command line. Global
flags and options apply to all of Stack's commands. For further information, see
the [global flags and options](global_flags.md) documentation.

## Stack commands

Stack's commands are listed below, in alphabetical order.

* [`bench`](build_command.md) - a synonym for `stack build --bench`
* [`build`](build_command.md) - build packages
* [`clean`](clean_command.md) - delete build artefacts for the project packages
* [`config`](config_command.md) - access and modify Stack's configuration
* [`docker`](docker_command.md) - use Stack with Docker
* [`dot`](dot_command.md) - dependency visualization
* [`eval`](eval_command.md) - evaluate some Haskell code inline
* [`exec`](exec_command.md) - executate a command in the Stack environment
* [`haddock`](build_command.md) - a synonym for `stack build --haddock`
* [`hoogle`](hoogle_command.md) - run `hoogle`
* [`hpc`](hpc_command.md) - generate Haskell Program Coverage (HPC) code coverage
  reports
* [`ghc`](ghc_command.md) - run `ghc`
* [`ghci`](ghci.md) - run GHCi, a REPL environment
* [`ide`](ide_command.md) - information for an integrated development
  environment (IDE)
* [`init`](init_command.md) - initialise Stack's project-level YAML configuration file for an
  existing project
* [`install`](build_command.md) - a synonym for `stack build --copy-bins`
* [`list`](list_command.md) - list packages on Hackage or in a snapshot
* [`ls`](ls_command.md) - list information about Stack
* [`new`](new_command.md) - create a new project with Stack
* [`path`](path_command.md) - information about locations used by Stack
* [`purge`](purge_command.md) - delete the Stack working directories
* [`query`](query_command.md) - information about the build
* [`repl`](ghci.md) - a synonym for `stack ghci`
* [`run`](run_command.md) - build and run an executable
* [`runghc`](runghc_command.md) - run `runghc`
* [`runhaskell`](runghc_command.md) - a synonym for `stack runghc`
* [`script`](script_command.md) - run a Haskell source file as a script
* [`sdist`](sdist_command.md) - create an archive file for a package, in a form
  accepted by Hackage
* [`setup`](setup_command.md) - get GHC for a Stack project
* [`templates`](templates_command.md) - information about templates for use with
  `stack new`
* [`test`](build_command.md) - a synonym for `stack build --test`
* [`uninstall`](uninstall_command.md) - information about how to uninstall Stack
* [`unpack`](unpack_command.md) - unpack one or more packages locally
* [`update`](update_command.md) - update the package index
* [`upgrade`](upgrade_command.md) - upgrade Stack
* [`upload`](upload_command.md) - upload a package to Hackage


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/environment_variables.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Stack's environment variables

The environment variables listed in alphabetal order below can affect how Stack
behaves.

## `GH_TOKEN` or `GITHUB_TOKEN`

[:octicons-tag-24: 2.11.1](https://github.com/commercialhaskell/stack/releases/tag/v2.11.1)

Stack will use the value of the `GH_TOKEN` or, in the alternative,
`GITHUB_TOKEN` environment variable (if not an empty string) as credentials to
authenticate its requests of the GitHub REST API, using HTTP 'Basic'
authentication.

GitHub limits the rate of unauthenticated requests to its API, although most
users of Stack will not experience that limit from the use of Stack alone. The
limit for authenticated requests is significantly higher.

For more information about authentication of requests of the GitHub REST API,
see GitHub's REST API documentation.

## `HACKAGE_KEY`

[:octicons-tag-24: 2.7.5](https://github.com/commercialhaskell/stack/releases/tag/v2.7.5)

Related command: [`stack upload`](upload_command.md)

Hackage allows its members to register an API authentification token and to
authenticate using the token.

A Hackage API authentification token can be used with `stack upload` instead of
username and password, by setting the `HACKAGE_KEY` environment variable. For
example:

=== "Unix-like"

     ~~~text
     HACKAGE_KEY=<api_authentification_token>
     stack upload .
     ~~~

=== "Windows (with PowerShell)"

     ~~~text
     $Env:HACKAGE_KEY=<api_authentification_token>
     stack upload .
     ~~~

## `HACKAGE_USERNAME` and `HACKAGE_PASSWORD`

[:octicons-tag-24: 2.3.1](https://github.com/commercialhaskell/stack/releases/tag/v2.3.1)

Related command: [`stack upload`](upload_command.md)

`stack upload` will request a Hackage username and password to authenticate.
This can be avoided by setting the `HACKAGE_USERNAME` and `HACKAGE_PASSWORD`
environment variables. For
example:

=== "Unix-like"

    ~~~text
    export $HACKAGE_USERNAME="<username>"
    export $HACKAGE_PASSWORD="<password>"
    stack upload .
    ~~~

=== "Windows (with PowerShell)"

    ~~~text
    $Env:HACKAGE_USERNAME='<username>'
    $Env:HACKAGE_PASSWORD='<password>'
    stack upload .
    ~~~

## `NO_COLOR`

Related command: all commands that can produce colored output using control character sequences.

Stack follows the standard at http://no-color.org/. Stack checks for a
`NO_COLOR` environment variable. When it is present and not an empty string
(regardless of its value), Stack prevents the addition of control character
sequences for color to its output.

## `STACK_ROOT`

Related command: all commands that make use of Stack's global YAML configuration
file (`config.yaml`).

Overridden by: Stack's global
[`--stack-root`](global_flags.md#-stack-root-option) option.

The environment variable `STACK_ROOT` can be used to specify the
[Stack root](stack_root.md) directory.

## `STACK_WORK`

Related command: all commands that make use of Stack's work directories.

Overridden by: Stack's [`work-dir`](yaml_configuration.md#work-dir) non-project
specific configuration option, or global
[`--work-dir`](global_flags.md#-work-dir-option) option.

The environment variable `STACK_WORK` can be used to specify the path of Stack's
work directory, within a local project or package directory, and override
Stack's default of `.stack-work`. The path must be a relative one, relative to
the root directory of the project or package. The relative path cannot include a
`..` (parent directory) component.

## `STACK_XDG`

Related command: all commands that make use of Stack's user-specific general
YAML configuration file (`config.yaml`).

Overridden by: the use of Stack's `STACK_ROOT` environment variable, or the use
of Stack's global
[`--stack-root`](global_flags.md#-stack-root-option) option.

On Unix-like operating systems and Windows, Stack can be configured to follow
the XDG Base Directory Specification if the environment variable `STACK_XDG` is
set to any non-empty value.

## `STACK_YAML`

Related command: all commands that make use of Stack's project-level YAML
configuration file.

Overridden by: Stack's global
[`--stack-yaml`](global_flags.md#-stack-yaml-option) option.

The environment variable `STACK_YAML` can be used to specify Stack's
project-level YAML configuration file.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/yaml_configuration.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Configuration and customisation

Stack is configured by the content of YAML files. Some Stack operations can also
be customised by the use of scripts.

!!! info

    A Haskell package is an organised collection of Haskell code and related
    files. It is described by a Cabal file or a `package.yaml` file (which can
    be used to generate a Cabal file). The package description is itself part of
    the package. Its file is located in the root directory of a project package
    or dependency located locally.

    A Stack project is a local directory that contains a Stack project-level
    configuration file (`stack.yaml`, by default). A project may relate to more
    than one project package. A single-package project's directory will usually
    also be the project package's root directory.

## YAML configuration

Stack's YAML configuration options break down into
[project-specific](#project-specific-configuration) options and
[non-project-specific](#non-project-specific-configuration) options. The former
are configured at the project level. The latter are configured at the project
level or globally.

The **project-level** configuration file (`stack.yaml`, by default) contains
project-specific options and may contain non-project-specific options. However,
non-project-specific options in the project-level configuration file in the
`global-project` directory (see below) are ignored by Stack.

Stack obtains project-level configuration from one of the following (in order of
preference):

1. A file specified by the `--stack-yaml` command line option.
2. A file specified by the `STACK_YAML` environment variable.
3. A file named `stack.yaml` in the current directory or an ancestor directory.
4. A file name `stack.yaml` in the `global-project` directory in the
   [Stack root](stack_root.md).

The **global** configuration file (`config.yaml`) contains only
non-project-specific options. The location of this file depends on the operating
system and whether Stack is configured to use the XDG Base Directory
Specification.

=== "Unix-like"

    `config.yaml` is located in `/etc/stack` (for system-wide options); and/or
    in the [Stack root](stack_root.md) (for user-specific options).

=== "Windows"

    `config.yaml` is located in the [Stack root](stack_root.md).

=== "XDG Base Directory Specification"

    On Unix-like operating systems and Windows, Stack can be configured to
    follow the XDG Base Directory Specification if the environment variable
    `STACK_XDG` is set to any non-empty value. However, Stack will ignore that
    configuration if the [Stack root](stack_root.md) location has been set on
    the command line or the `STACK_ROOT` environment variable exists.

    If Stack is following the XDG Base Directory Specification, the location of
    `config.yaml` (for user-specific options) is `<XDG_CONFIG_HOME>/stack`. If
    the `XDG_CONFIG_HOME` environment variable does not exist, the default is
    `~/.config/stack` on Unix-like operating systems and `%APPDIR%\stack` on
    Windows.

This page is intended to document fully all YAML configuration options. If you
identify any inaccuracies or incompleteness, please update the page, and if
you're not sure how, open an issue labeled "question".

If you wish to understand the difference between a `stack.yaml` files and a
Cabal file (named `<package_name>.cabal`), see the
[stack.yaml vs a Cabal file](stack_yaml_vs_cabal_package_file.md) documentation.

## Project-specific configuration

Project-specific configuration options are valid only in a project-level
configuration file (`stack.yaml`, by default).

Each of the Haskell packages to which a Stack project relates is either a
**project package** that is part of the project and located locally or a package
on which one or more of the project packages depends (directly or indirectly).
The latter is referred to as a **dependency** and it may be located locally or
elsewhere.

!!! info

    Project packages are built by default. Dependencies are only built when
    needed. Building can target individual components of a project package. The
    individual components of dependencies cannot be targeted. Test suite and
    benchmark components of a project package can be built and run. The library
    and executable components of a dependency, and only those components, are
    built when the dependency is needed.

In your project-specific options, you specify both **which project packages** to
build and **which dependencies to use** when building these packages.

A dependency specified as an [extra-dep](#extra-deps) will shadow a package of
the same name specified in a [snapshot](#snapshot). A project package will
shadow a dependency of the same name.

### snapshot

Command line equivalent (takes precedence):
[`--snapshot`](global_flags.md#snapshot-option) or
[`--resolver`](global_flags.md#resolver-option) option

The `snapshot` key specifies which snapshot is to be used for this project. A
snapshot defines a GHC version, the package version of packages available for
installation, and various settings like build flags. It is also called a
resolver since a snapshot states how dependencies are resolved. There are
currently four snapshot types:

* LTS Haskell snapshots, e.g. `snapshot: lts-22.7`
* Stackage Nightly snapshots, e.g. `snapshot: nightly-2023-12-16`
* No snapshot, just use packages shipped with the compiler. For GHC this looks
  like `snapshot: ghc-9.6.4`
* Custom snapshot, via a URL or relative file path. For further information, see
  the [snapshot and package location](pantry.md) documentation.

Each of these snapshots will also determine what constraints are placed on the
compiler version. See the [compiler-check](#compiler-check) option for some
additional control over compiler version.

A package version specified in a snapshot can be shadowed by an
[extra-dep](#extra-deps) of the same name or a [project package](#packages) of
the same name.

### resolver

`resolver` and [`snapshot`](#snapshot) are synonyms. Only one of these keys is
permitted, not both.

### packages

Default:

~~~yaml
packages:
- .
~~~

The `packages` key specifies a list of the project packages that are part of
your project. These are specified via paths to local directories. A path is
considered relative to the directory containing the project-level configuration
file (`stack.yaml`, by default). For example, if the `stack.yaml` file is
located at `/dir1/dir2/stack.yaml`, and has:

~~~yaml
packages:
- my-package
- dir3/my-other-package
~~~

the configuration means "project packages in directories `/dir1/dir2/my-package`
and `/dir1/dir2/dir3/my-other-package`".

The `packages` key is optional. The default value, '`.`', means that the
project has a single project package located in the current directory.

A project package will shaddow a dependency of the same name.

A package version specified in a snapshot can be shadowed by an
[extra-dep](#extra-deps) of the same name or a [project package](#packages) of
the same name.

Each specified project package directory must have a valid Cabal file or Hpack
`package.yaml` file present. Any subdirectories of the directory are not
searched for Cabal files. A subdirectory has to be specified as an independent
item in the list of project packages.

A project package is different from a dependency (located locally or elsewhere)
specified as an [extra-dep](#extra-deps) or via a [snapshot](#snapshot). For
example:

* a project package will be built by default by commanding
  [`stack build`](build_command.md) without specific targets. A dependency will
  only be built if it is needed; and
* test suites and benchmarks may be built and run for a project package. They
  are never run for a dependency.

### extra-deps

Default: `[]`

The `extra-deps` key specifies a list of extra dependencies on top of what is
defined in the [snapshot](#snapshot). A dependency may come from either a Pantry
package location or a local file path.

A Pantry package location is one or three different kinds of sources:

* the package index (Hackage);
* an archive (a tarball or zip file, either local or over HTTP or HTTPS); or
* a Git or Mercurial repository.

For further information on the format for specifying a Pantry package location,
see the [Pantry](pantry.md) documentation. For example:

~~~yaml
extra-deps:
# The latest revision of a package in the package index (Hackage):
- acme-missiles-0.3
# A specific revision of a package in the package index (Hackage):
- acme-missiles-0.3@rev:0
# An *.tar.gz archive file over HTTPS:
- url: https://github.com/example-user/my-repo/archive/08c9b4cdf977d5bcd1baba046a007940c1940758.tar.gz
  subdirs:
  - my-package
# A Git repository at a specific commit:
- git: https://github.com/example-user/my-repo.git
  commit: '08c9b4cdf977d5bcd1baba046a007940c1940758'
# An archive of files at a point in the history of a GitHub repository
# (identified by a specific commit):
- github: example-user/my-repo
  commit: '08c9b4cdf977d5bcd1baba046a007940c1940758'
  subdirs:
  - my-package
~~~

!!! note

    GHC boot packages are special. An extra-dep with the same package name and
    version as a GHC boot package will be ignored.

!!! note

    The `commit:` key expects a YAML string. A commit hash, or partial hash,
    comprised only of digits represents a YAML number, unless it is enclosed in
    quotation marks.

For a local file path source, the path is considered relative to the directory
containing the `stack.yaml` file. For example, if the `stack.yaml` is located
at `/dir1/dir2/stack.yaml`, and has:

~~~yaml
extra-deps:
- my-package
- dir3/my-other-package
~~~

the configuration means "extra-deps packages in directories
`/dir1/dir2/my-package` and `/dir1/dir2/dir3/my-other-package`".

!!! note

    A local file path that has the format of a package identifier will be
    interpreted as a reference to a package on Hackage. Prefix it with `./` to
    avoid that confusion.

!!! note

    A specified extra-dep that does not have the format of a valid Pantry
    package location (for example, a reference to a package on Hackage that
    omits the package's version) will be interpreted as a local file path.

An extra-dep will shadow a dependency specified in a [snapshot](#snapshot) of
the same name. An extra-dep can be shadowed by a [project package](#packages) of
the same name.

!!! info

    Some Haskell packages published on Hackage, for example `base` and `ghc`,
    are referred to as 'wired-in' to one or more versions of GHC or as 'magic'.
    They can be distinguished from normal packages by the contents of their
    Cabal files: GHC's `-this-unit-id` option is set as the name of the package
    without a version. For example, the `base.cabal` for `base-4.19.1.0`
    includes:

    ~~~yaml
    -- We need to set the unit id to base (without a version number)
    -- as it's magic.
    ghc-options: -this-unit-id base
    ~~~

    The GHC boot packages that are 'wired-in' cannot be shaddowed with different
    versions of the same package. Given their dependencies, the use of these
    boot packages in a build plan may limit what can be specified as an
    extra-dep.

    For example, GHC boot package `ghc-9.8.2` has a dependency on `process`. Its
    `*.conf` file identifies the dependency as `process-1.6.18.0-4fb7`. If
    package `ghc-9.8.2` is part of a build plan and a different version of
    `process` is specified as an extra-dep, during a build, Stack will identify
    that the build plan refers to two versions of `process` and warn that the
    build is likely to fail.

    Stack treats the following as the names of 'wired-in' packages: `base`,
    `dph-par`, `dph-seq`, `ghc-bignum`, `ghc-prim`, `ghc`, `integer-gmp`,
    `integer-simple`, `interactive`, `rts` and `template-haskell`.

### flags

Default: `{}`

Command line equivalent (takes precedence):
[`stack build --flag`](build_command.md#-flag-option) option

Cabal flags can be set for each package separately. For example:

~~~yaml
flags:
  package-name:
    flag-name: true
~~~

If a specified Cabal flag for a package included directly in a snapshot is
different to the Cabal flag specified for that package in the snapshot, then the
package will automatically be promoted to be an [extra-dep](#extra-deps).

In order to set a Cabal flag for a GHC boot package, the package must be
specified as an [extra-dep](#extra-deps).

### drop-packages

[:octicons-tag-24: 2.1.1](https://github.com/commercialhaskell/stack/releases/tag/v2.1.1)

Default: `[]`

Packages which, when present in the snapshot specified in the
[`snapshot`](#snapshot) or [`resolver`](#resolver) key, should not be included
in our project. This can be used for a few different purposes, e.g.:

* Ensure that packages you don't want used in your project cannot be used in a
  `package.yaml` file (e.g., for license reasons)
* When using a custom GHC build, avoid incompatible packages (see this
  [comment](https://github.com/commercialhaskell/stack/pull/4655#issuecomment-477954429)).

~~~yaml
drop-packages:
- buggy-package
- package-with-unacceptable-license
~~~

!!! info

    Stackage snapshots LTS Haskell 14.27 (GHC 8.6.5) and earlier, and Nightly
    2022-02-08 (GHC 8.8.2) and earlier, included directly the `Cabal` package.
    Later snapshots do not include directly that package (which is a GHC boot
    package).

    For the older Stackage snapshots, it could be handy to drop the
    snapshot-specified `Cabal` package, to avoid building that version of the
    package. For the later snapshots, there is no package version to drop.

### user-message

If present, specifies a message to be displayed every time the configuration is
loaded by Stack. It can serve as a reminder for the user to review the
configuration and make any changes if needed. The user can delete this message
if the generated configuration is acceptable.

For example, a user-message is inserted by `stack init` when it omits packages
or adds external dependencies, namely:

~~~yaml
user-message: ! 'Warning: Some packages were found to be incompatible with the snapshot
  and have been left commented out in the packages section.

  Warning: Specified snapshot could not satisfy all dependencies. Some external packages
  have been added as dependencies.

  You can omit this message by removing it from stack.yaml

'
~~~

### custom-preprocessor-extensions

Default: `[]`

Command line equivalent: `--customer-preprocessor-extensions` option

In order for Stack to be aware of any custom preprocessors you are using, add
their extensions here

~~~yaml
custom-preprocessor-extensions:
- erb
~~~

TODO: Add a simple example of how to use custom preprocessors.

### extra-package-dbs

[:octicons-tag-24: 0.1.6.0](https://github.com/commercialhaskell/stack/releases/tag/v0.1.6.0)

Default: `[]`

A list of relative or absolute paths to package databases. These databases will
be added on top of GHC's global package database before the addition of other
package databases.

!!! warning

    Use of this feature may result in builds that are not reproducible, as Stack
    has no control over the contents of the extra package databases.

### curator

:octicons-beaker-24: Experimental

[:octicons-tag-24: 2.1.0.1](https://github.com/commercialhaskell/stack/releases/tag/v2.1.0.1)

Default: `{}`

Configuration intended for use only by the
[`curator` tool](https://github.com/commercialhaskell/curator), which uses Stack
to build packages. For given package names (which need not exist in the
project), Stack can be configured to ignore (skip) silently building test
suites, building benchmarks and/or creating Haddock documentation or to expect
that building test suites, building benchmarks and/or creating Haddock
documentation will fail.

For example:

~~~yaml
curator:
  skip-test:
  - my-package1
  expect-test-failure:
  - my-package2
  skip-bench:
  - my-package3
  expect-benchmark-failure:
  - my-package4
  skip-haddock:
  - my-package5
  expect-haddock-failure:
  - my-package6
~~~

## Non-project-specific configuration

Non-project configuration options can be included in a project-level
configuration file (`stack.yaml`, by default) or in global configuration files
(`config.yaml`). However, non-project-specific options in the project-level
configuration file in the `global-project` directory are ignored by Stack. The
options below are listed in alphabetic order.

### allow-different-user

[:octicons-tag-24: 1.0.1.0](https://github.com/commercialhaskell/stack/releases/tag/v1.0.1.0)

Restrictions: POSIX systems only.

Default: `false`

Command line equivalent (takes precedence): `--[no-]allow-different-user` flag

Allow users other than the owner of the [Stack root](stack_root.md) to use the
Stack installation.

~~~yaml
allow-different-user: true
~~~

The intention of this option is to prevent file permission problems, for example
as the result of a Stack command executed under `sudo`.

The option is automatically enabled when Stack is re-spawned in a Docker
process.

### allow-newer

[:octicons-tag-24: 0.1.8.0](https://github.com/commercialhaskell/stack/releases/tag/v0.1.8.0)

Default: `false`

Whether to ignore version bounds in Cabal files. This also ignores lower bounds.
The name `allow-newer` is chosen to match the commonly-used Cabal option.


~~~yaml
allow-newer: true
~~~

### allow-newer-deps

:octicons-beaker-24: Experimental

[:octicons-tag-24: 2.9.3](https://github.com/commercialhaskell/stack/releases/tag/v2.9.3)

Default: `none`

Determines a subset of packages to which `allow-newer` should apply. This option
has no effect (but warns) if `allow-newer` is `false`.

~~~yaml
allow-newer-deps:
  - foo
  - bar
~~~

### apply-ghc-options

[:octicons-tag-24: 0.1.6.0](https://github.com/commercialhaskell/stack/releases/tag/v0.1.6.0)

Default: `locals`

Related command line:
[`stack build --ghc-options`](build_command.md#-ghc-options-option) option

Determines to which packages any GHC command line options specified on the
command line are applied. Possible values are: `everything` (all packages,
project packages or otherwise), `locals` (all project packages, targets or
otherwise), and `targets` (all project packages that are targets).

!!! note

    The use of `everything` can break invariants about your snapshot database.

!!! info

    Before Stack 0.1.6.0, the default value was `targets`.

### apply-prog-options

[:octicons-tag-24: 2.11.1](https://github.com/commercialhaskell/stack/releases/tag/v2.11.1)

Default: `locals`

Related command line:
[`stack build --PROG-option`](build_command.md#-prog-option-options) options

Determines to which packages all and any `--PROG-option` command line options
specified on the command line are applied. Possible values are: `everything`
(all packages, project packages or otherwise), `locals` (all project packages,
targets or otherwise), and `targets` (all project packages that are targets).

!!! note

    The use of `everything` can break invariants about your snapshot database.

### arch

Default: The machine architecture on which Stack is running.

Command line equivalent (takes precedence):
[`--arch`](global_flags.md#-arch-option) option

Stack identifies different GHC executables by platform (operating system and
machine architecture), (optional) GHC variant and (optional) GHC build.
See [`setup-info`](#setup-info).

`arch` sets the machine architecture. Values can be those recognized by Cabal
(the library) (which are case-insensitive and include `i386`, `x86_64`, and
`aarch64` / `arm64`), or other values (which are case-sensitive and treated as
an unknown 'other' architecture of the specified name).

By default, Stack will warn the user if the specified machine architecture is an
unknown 'other' architecture. The warning can be muted; see
[`notify-if-arch-unknown`](#notify-if-arch-unknown)

!!! note

    The machine architecture on which Stack is running is as classified by
    Cabal (the library). Cabal does not distinguish between certain
    architectures. Examples are `ppc64`/`powerpc64`/`powerpc64le` (classified as
    `ppc64`) and `arm`/`armel`/`armeb` (classified as `arm`).

!!! note

    As Cabal (the library) does not distinguish between machine architectures
    `powerpc64` and `powerpc64le`, the latter can be specified in Stack's
    configuration as an 'other' architecture, such as `arch: ppc64le`.

### build

[:octicons-tag-24: 1.1.0](https://github.com/commercialhaskell/stack/releases/tag/v1.1.0)

Default:

~~~yaml
build:
  library-profiling: false
  executable-profiling: false
  library-stripping: true
  executable-stripping: true

  # NOTE: global usage of haddock can cause build failures when documentation is
  # incorrectly formatted. This could also affect scripts which use Stack.
  haddock: false
  haddock-arguments:

    # Additional arguments passed to haddock. The corresponding command line
    # option is --haddock-arguments. Example of use:
    #
    # haddock-args:
    # - "--css=/home/user/my-css"
    haddock-args: []

  # The corresponding command line flag is --[no-]open.
  open-haddocks: false

  # If Stack is configured to build Haddock documentation, defaults to true.
  haddock-deps: false

  # The configuration is ignored, if haddock-for-hackage: true.
  haddock-internal: false

  # The configuration is ignored, if haddock-for-hackage: true.
  haddock-hyperlink-source: true

  # If specified, implies haddock-internal: false and
  # haddock-hyperlink-source: true. Since Stack 2.15.1.
  haddock-for-hackage: false
  copy-bins: false
  copy-compiler-tool: false
  prefetch: false
  keep-going: false
  keep-tmp-files: false

  # These are inadvisable to use in your global configuration, as they make the
  # Stack build command line behave quite differently.
  force-dirty: false
  test: false
  test-arguments:
    rerun-tests: true   # Rerun successful tests

    # The corresponding command line option is --test-arguments. Example of use:
    #
    # additional-args:
    # - "--fail-fast"
    additional-args: []
    coverage: false
    no-run-tests: false
  bench: false
  benchmark-opts:

    # Example of use:
    #
    # benchmark-arguments: "--csv bench.csv"
    benchmark-arguments: ""
    no-run-benchmarks: false
  reconfigure: false
  cabal-verbosity: normal
  cabal-verbose: false
  split-objs: false
  skip-components: [] # --skip

  # Since Stack 1.8. Starting with Stack 2.0, the default is true
  interleaved-output: true

  # Since Stack 2.13.1. Available options are none, count-only, capped and full.
  progress-bar: capped

  # Since Stack 1.10.
  ddump-dir: ""
~~~

Command line equivalents (take precedence): Yes, see below.

Allows setting build options which are usually specified on the command line.

The meanings of these settings correspond directly with the command line flags
of the same name. For further information, see the
[`stack build` command](build_command.md) documentation and the
[users guide](GUIDE.md#the-build-command).

### casa

[:octicons-tag-24: 2.13.1](https://github.com/commercialhaskell/stack/releases/tag/v2.13.1)

Default:

~~~yaml
casa:
  enable: true # Use a Casa server?
  repo-prefix: https://casa.stackage.org # Unless casa-repo-prefix is set.
  max-keys-per-request: 1280 # Maximum number of keys per request.
~~~

This option specifies whether or not Stack should use a Casa
(content-addressable storage archive) server to cache Cabal files and all other
files in packages; and, if so, the prefix for the URL used to pull information
from the server and the maximum number of keys per request. For further
information, see this blog post about
[Casa and Stack](https://www.fpcomplete.com/blog/casa-and-stack/).

`repo-prefix` replaces [`casa-repo-prefix`](#casa-repo-prefix) (which is
deprecated) and has precedence if both keys are set.

### casa-repo-prefix

[:octicons-tag-24: 2.3.1](https://github.com/commercialhaskell/stack/releases/tag/v2.3.1)

Deprecated in favour of [`casa`](#casa), which takes precedence if present.

Default: `https://casa.stackage.org`

This option specifies the prefix for the URL used to pull information from the
Casa server.

### color

Command line equivalent (takes precedence): `--color` option

This option specifies when to use color in output. The option is used as
`color: <WHEN>`, where `<WHEN>` is 'always', 'never', or 'auto'. On Windows
versions before Windows 10, for terminals that do not support color codes, the
default is 'never'; color may work on terminals that support color codes.

(The British English spelling (colour) is also accepted. In yaml configuration
files, the American spelling is the alternative that has priority.)

### compiler

[:octicons-tag-24: 0.1.8.0](https://github.com/commercialhaskell/stack/releases/tag/v0.1.8.0)

Command line equivalent (takes precedence): `--compiler` option

Overrides the compiler version in the snapshot. Note that the `compiler-check`
flag also applies to the version numbers. This uses the same syntax as compiler
snapshots like `ghc-9.6.3`. This can be used to override the compiler for a
Stackage snapshot, like this:

~~~yaml
snapshot: lts-22.7
compiler: ghc-9.6.3
compiler-check: match-exact
~~~

#### Building GHC from source

:octicons-beaker-24: Experimental

[:octicons-tag-24: 2.1.1](https://github.com/commercialhaskell/stack/releases/tag/v2.1.1)

Stack supports building the GHC compiler from source, using
[Hadrian](https://gitlab.haskell.org/ghc/ghc/blob/master/hadrian/README.md) (the
build system for GHC). The GHC version to build and to use is defined by a a Git
commit ID and a Hadrian "flavour", with the following syntax:

~~~yaml
compiler: ghc-git-<commit_id>-<Hadrian_flavour>
~~~

In the following example the commit ID is "5be7ad..." and the flavour is
"quick":

~~~yaml
compiler: ghc-git-5be7ad7861c8d39f60b7101fd8d8e816ff50353a-quick
~~~

By default, the code is retrieved from the main GHC repository. If you want to
select another repository, use the `compiler-repository` option:

~~~yaml
compiler-repository: git://my/ghc/repository
# default
# compiler-repository: https://gitlab.haskell.org/ghc/ghc.git
~~~

Stack does not check the compiler version when it uses a compiler built from
source. It is assumed that the built compiler is recent enough as Stack doesn't
enable any known workaround to make older compilers work.

Building the compiler can take a very long time (more than one hour). For faster
build times, use Hadrian flavours that disable documentation generation.

#### Bootstrap compiler

Building GHC from source requires a working GHC (known as the bootstrap
compiler). As we use a Stack based version of Hadrian (`hadrian/build-stack` in
GHC sources), the bootstrap compiler is configured into `hadrian/stack.yaml` and
fully managed by Stack.

!!! note

    For some commit IDs, the snapshot specified in `hadrian/stack.yaml`
    specifies a version of GHC that cannot be used to build GHC. This results in
    GHC's `configure` script reporting messages similar to the following before
    aborting:

    ~~~text
    checking version of ghc... 9.0.2
    configure: error: GHC version 9.2 or later is required to compile GHC.
    ~~~

    The resolution is: (1) to specify an alternative snapshot (one that
    specifies a sufficiently recent version of GHC) on the command line, using
    Stack's option `--snapshot <snapshot>`. Stack will use that snapshot when
    running GHC's `configure` script; and (2) to set the contents of the `STACK`
    environment variable to be `stack --snapshot <snapshot>`. Hadrian's
    `build-stack` script wil refer to that environment variable for the Stack
    command it uses.

#### Hadrian prerequisites

The Hadrian build system has certain
[prerequisites](https://gitlab.haskell.org/ghc/ghc/-/wikis/building/preparation).
It requires certain versions of the `happy` and `alex` executables on the PATH.
Stack will build and install `happy` and `alex`, if not already on the PATH.

=== "macOS"

    Hadrian requires, or case use, certain tools or Python packages that do not
    come with macOS by default and that need to be installed using `brew` or
    `pip3` (Python). Hadrian's LaTeX documentation also requires the
    [DejaVu fonts](https://dejavu-fonts.github.io/) to be installed.

    ~~~zsh
    brew install python@3.11
    # GHC uses a Python script named `boot`.
    brew install automake
    # Tool for generating GNU Standards-compliant Makefiles.
    brew install texinfo
    # Official documentation format of the GNU project.
    pip3 install -U sphinx
    # Sphinx is the Python documentation generator.
    brew install --cask mactex
    # MacTeX: Full TeX Live distribution with GUI applications
    ~~~

=== "Windows"

    Hadrian requires, or can use, certain MSYS2 or Python packages that do not
    come with the Stack-supplied MSYS2 by default and need to be installed
    using `pacman` (MSYS2) or `pip` (Python). Hadrian's LaTeX documentation also
    requires the [DejaVu fonts](https://dejavu-fonts.github.io/) to be
    installed.

    ~~~pwsh
    stack exec -- pacman --sync --refresh
    # Synchronize MSYS2 package databases
    stack exec -- pacman --sync mingw-w64-x86_64-python-pip
    # The PyPA recommended tool (pip) for installing Python packages. Also
    # installs Python as a dependency. GHC uses a Python script named `boot`.
    # The package must be the one from the `mingw64` MSYS2 repository, as Python
    # from the `msys` repository cannot interpret Windows file paths correctly.
    stack exec -- pacman --sync mingw-w64-x86_64-autotools
    # The GNU autotools build system, including `autoreconf`, `aclocal`
    # and `make`. GHC uses a sh script named `configure` which is itself created
    # from a file named `configure.ac`.
    stack exec -- pacman --sync patch
    # A utility to apply patch files to original sources.
    stack exec -- pacman --sync texinfo
    # Utilities to work with and produce manuals, ASCII text, and on-line
    # documentation from a single source file, including `makeinfo`.
    stack exec -- pacman --sync mingw-w64-x86_64-ca-certificates
    # Common CA (certificate authority) certificates.
    stack exec -- pip install -U sphinx
    # Sphinx is the Python documentation generator.
    ~~~

    Hadrian may require certain LaTeX packages and may prompt for these to be
    installed duing the build process.

#### Global packages

The GHC compiler you build from sources may depend on unreleased versions of
some global packages (e.g. Cabal). It may be an issue if a package you try to
build with this compiler depends on such global packages because Stack may not
be able to find versions of those packages (on Hackage, etc.) that are
compatible with the compiler.

The easiest way to deal with this issue is to drop the offending packages as
follows. Instead of using the packages specified in the snapshot, the global
packages bundled with GHC will be used.

~~~yaml
drop-packages:
- Cabal
- ...
~~~

Another way to deal with this issue is to add the relevant packages as
`extra-deps` built from source. To avoid mismatching versions, you can use
exactly the same commit id you used to build GHC as follows:

~~~
extra-deps:
- git: https://gitlab.haskell.org/ghc/ghc.git
  commit: '5be7ad7861c8d39f60b7101fd8d8e816ff50353a'
  subdirs:
    - libraries/Cabal/Cabal
    - libraries/...
~~~

### compiler-check

[:octicons-tag-24: 0.1.4.0](https://github.com/commercialhaskell/stack/releases/tag/v0.1.4.0)

Default: `match-minor`

Specifies how the compiler version in the snapshot is matched against concrete
versions. Valid values:

* `match-minor`: make sure that the first three components match, but allow
  patch-level differences. For example< 7.8.4.1 and 7.8.4.2 would both match
  7.8.4. This is useful to allow for custom patch levels of a compiler.
* `match-exact`: the entire version number must match precisely
* `newer-minor`: the third component can be increased, e.g. if your snapshot is
  `ghc-7.10.1`, then 7.10.2 will also be allowed. This was the default up
  through Stack 0.1.3

### concurrent-tests

[:octicons-tag-24: 0.1.2.0](https://github.com/commercialhaskell/stack/releases/tag/v0.1.2.0)

Default: `true`

This option specifies whether test suites should be executed concurrently with
each other. The default is `true` since this is usually fine and it often means
that tests can complete earlier. However, if some test suites require exclusive
access to some resource, or require a great deal of CPU or memory resources,
then it makes sense to set this to `false`.

~~~yaml
concurrent-tests: false
~~~

### configure-options

[:octicons-tag-24: 2.1.1](https://github.com/commercialhaskell/stack/releases/tag/v2.1.1)

Related command line (takes precedence):
[`stack build --PROG-option`](build_command.md#prog-option-options) options

`configure-options` can specify Cabal (the library) options (including
`--PROG-option` or `--PROG-options` options) for the configure step of the Cabal
build process for a named package, all project packages that are targets (using
the `$targets` key), all project packages (targets or otherwise) (using the
`$locals` key), or all packages (project packages or otherwise) (using the
`$everything` key).

~~~yaml
configure-options:
  $everything:
  - --with-gcc
  - /some/path
  $locals:
  - --happy-option=--ghc
  $targets:
  # Only works on platforms where GHC supports linking against shared Haskell
  # libraries:
  - --enable-executable-dynamic
  my-package:
  - --another-flag
~~~

On platforms where GHC supports linking against shared Haskell libraries (that
currently excludes Windows), Cabal's `--enable-executable-dynamic` flag (which
implies `--enable-shared`, unless `--disable-shared` is specified) links
dependent Haskell libraries into executables dynamically.

### connection-count

Default: `8`

Integer indicating how many simultaneous downloads are allowed to happen.

### default-init-snapshot

:octicons-tag-24: UNRELEASED

Default: As for the [`stack init`](init_command.md) command when no snapshot is
specified at the command line.

Command line equivalent (takes precedence):
[`--snapshot`](global_flags.md#snapshot-option) or
[`--resolver`](global_flags.md#resolver-option) option

This option specifies which snapshot to use with `stack init`, when none is
specified at the command line.

`default-init-snapshot: global` specifies the snapshot specified by the
project-level configuration file in the `global-project` directory in the
[Stack root](stack_root.md#global-project-directory).

### default-template

Default: `new-template` in the
[stack-templates](https://github.com/commercialhaskell/stack-templates/)
repository.

This option specifies which template to use with `stack new`, when none is
specified. Other templates are listed in the
[stack-templates](https://github.com/commercialhaskell/stack-templates/)
repository. See the output of `stack templates`.

### docker

Command line equivalents: `--docker-*` flags and options (see
`stack --docker-help` for details).

For further information, see the
[Docker integration](docker_integration.md#configuration) documentation.

### dump-logs

[:octicons-tag-24: 1.3.0](https://github.com/commercialhaskell/stack/releases/tag/v1.3.0)

Default: `warning`

Command line equivalent (takes precedence): `--[no-]dump-logs` flag

In the case of *non-interleaved* output and *more than one* target package,
Stack sends the build output from GHC for each target package to a log file,
unless an error occurs that prevents that. For further information, see the
[`stack build --[no-]interleaved-output` flag](build_command.md#-no-interleaved-output-flag)
documentation.

The value of the `dump-logs` key controls what, if any, log file content is sent
('dumped') to the standard error stream of the console at the end of the build.
Possible values are:

~~~yaml
dump-logs: none    # don't dump the content of any log files
dump-logs: warning # dump the content of any log files that include GHC warnings
dump-logs: all     # dump the content of all log files
~~~

At the command line, `--no-dump-logs` is equivalent to `dump-logs: none` and
`--dump-logs` is equivalent to `dump-logs: all`.

If GHC reports an error during the build and a log file is created, that build
output will be included in the log file. Stack will also report errors during
building to the standard error stream. That stream can be piped to a file. For
example, for a file named `stderr.log`:

~~~text
stack --no-dump-logs --color always build --no-interleaved-output 2> stderr.log
~~~

### extra-include-dirs

Default: `[]`

Command line equivalent: `--extra-include-dirs` option (repeat for each
directory)

A list of extra paths to be searched for header files. Paths should be absolute

~~~yaml
extra-include-dirs:
- /opt/foo/include
~~~

Since these are system-dependent absolute paths, it is recommended that you
specify these in your `config.yaml` file. If you control the build environment
in your project's ``stack.yaml``, perhaps through docker or other means, then it
may well make sense to include these there as well.

### extra-lib-dirs

Default: `[]`

Command line equivalent: `--extra-lib-dirs` option (repeat for each directory)

A list of extra paths to be searched for libraries. Paths should be absolute

~~~yaml
extra-lib-dirs:
- /opt/foo/lib
~~~

Since these are system-dependent absolute paths, it is recommended that you
specify these in your `config.yaml` file. If you control the build environment
in your project's ``stack.yaml``, perhaps through Docker or other means, then it
may well make sense to include these there as well.

### extra-path

[:octicons-tag-24: 0.1.4.0](https://github.com/commercialhaskell/stack/releases/tag/v0.1.4.0)

This option specifies additional directories to prepend to the PATH. These will
be used when resolving the location of executables, and will also be visible in
the PATH of processes run by Stack.

For example, to prepend `/path-to-some-dep/bin` to your PATH:

~~~yaml
extra-path:
- /path-to-some-dep/bin
~~~

Other paths added by Stack - things like the project's binary directory and the
compiler's binary directory - will take precedence over those specified here
(the automatic paths get prepended).

### ghc-build

[:octicons-tag-24: 1.3.0](https://github.com/commercialhaskell/stack/releases/tag/v1.3.0)

Default: `standard`

Command line equivalent (takes precedence): `--ghc-build` option

Stack identifies different GHC executables by platform (operating system and
machine architecture), (optional) GHC variant and (optional) GHC build.
See [`setup-info`](#setup-info).

`ghc-build` specifies a specialized architecture for the GHC executable.
Normally this is determined automatically, but it can be overridden. Possible
arguments include `standard`, `gmp4`, `nopie`, `tinfo6`, `tinfo6-libc6-pre232`,
`tinfo6-nopie`, `ncurses6`, `int-native` and `integersimple`.

### ghc-options

[:octicons-tag-24: 0.1.4.0](https://github.com/commercialhaskell/stack/releases/tag/v0.1.4.0)

Default: `{}`

Related command line (takes precedence):
[`stack build --ghc-options`](build_command.md#-ghc-options-option) option

GHC command line options can be specified for a package in its Cabal file
(including one created from a `package.yaml` file). This option augments and, if applicable (see below), overrides any such GHC command line options.

`ghc-options` can specify GHC command line options for a named package, all
project packages that are targets (using the `$targets` key), all project
packages (targets or otherwise) (using the `$locals` key), or all packages
(project packages or otherwise) (using the `$everything` key).

~~~yaml
ghc-options:
  "$everything": -O2
  "$locals": -Wall
  "$targets": -Werror
  some-package: -DSOME_CPP_FLAG
~~~

GHC's command line options are _order-dependent_ and evaluated from left to
right. Later options can override the effect of earlier ones. Stack applies
options (as applicable) in the order of `$everything`, `$locals`, `$targets`,
and then those for the named package. Any GHC command line options for a package
specified at Stack's command line are applied after those specified in Stack's
YAML configuration files.

Since Stack 1.6.1, setting a GHC options for a specific package will
automatically promote it to a project package (much like setting a custom
package flag). However, setting options via `$everything` on all flags will not
do so (see
[GitHub discussion](https://github.com/commercialhaskell/stack/issues/849#issuecomment-320892095)
for reasoning). This can lead to unpredictable behavior by affecting your
snapshot packages.

!!! info

    Before Stack 1.6.1, the key `*` (then deprecated) had the same function as
    the key `$everything`.

### ghc-variant

[:octicons-tag-24: 0.1.5.0](https://github.com/commercialhaskell/stack/releases/tag/v0.1.5.0)

Default: `standard`

Command line equivalent (takes precedence): `--ghc-variant` option

Stack identifies different GHC executables by platform (operating system and
machine architecture), (optional) GHC variant and (optional) GHC build.
See [`setup-info`](#setup-info).

`ghc-variant` specifies a variant of the GHC executable. Known values are:

* `standard`: Use the standard GHC binary distribution
* `int-native`: From GHC 9.4.1, use a GHC bindist that uses the Haskell-native
   big-integer
  [backend](https://downloads.haskell.org/~ghc/9.0.2/docs/html/users_guide/9.0.1-notes.html#highlights).
  For further information, see this [article](https://iohk.io/en/blog/posts/2020/07/28/improving-haskells-big-numbers-support/).
* `integersimple`: Use a GHC bindist that uses
  [integer-simple instead of GMP](https://ghc.haskell.org/trac/ghc/wiki/ReplacingGMPNotes)
* any other value: Use a custom GHC bindist. You should specify
  [setup-info](#setup-info) or [setup-info-locations](#setup-info-locations)
  so `stack setup` knows where to download it,
  or pass the `stack setup --ghc-bindist` argument on the command-line

This option is incompatible with `system-ghc: true`.

### global-hints-location

:octicons-tag-24: UNRELEASED

Default:

~~~yaml
global-hints-location:
  url: https://raw.githubusercontent.com/commercialhaskell/stackage-content/master/stack/global-hints.yaml
~~~

(as set in the `pantry` library)

Sets the location of the global hints YAML file. The location can be either a
filepath of a local file or a URL. The filepath can be absolute or relative to
the Stack root.

For example:

~~~yaml
global-hints-location:
  filepath: \pantry\global-hints.yaml
~~~

or:

~~~yaml
global-hints-location:
  url: https://example.com/global-hints/location/global-hints.yaml
~~~

### hackage-base-url

[:octicons-tag-24: 1.9.1](https://github.com/commercialhaskell/stack/releases/tag/v1.9.1)

Default: `https://hackage.haskell.org/`

Sets the address of the Hackage server to upload the package to.

~~~yaml
hackage-base-url: https://hackage.example.com/
~~~

### hide-source-paths

Default: `true`
([:octicons-tag-24: 2.1.1](https://github.com/commercialhaskell/stack/releases/tag/v2.1.1))

Whether to use the `-fhide-source-paths` option by default for GHC >= 8.2:

~~~yaml
hide-source-paths: false
~~~

Build output when enabled:

~~~text
...
[1 of 2] Compiling Lib
[2 of 2] Compiling Paths_test_pr
...
~~~

Build output when disabled:

~~~text
...
[1 of 2] Compiling Lib              ( src/Lib.hs, .stack-work/dist/x86_64-linux-tinfo6/Cabal-2.4.0.1/build/Lib.o )
...
~~~

### hide-th-loading

Default: `true`

Strip out the "Loading ..." lines from GHC build output, produced when using
Template Haskell.

### hpack-force

:octicons-tag-24: UNRELEASED

Default: `false`

Command line equivalent (takes precedence):
[`--hpack-force` option](global_flags.md#-no-hpack-force-flag)

Whether or not to allow Hpack to overwrite a Cabal file that has been modified
manually. By default, Hpack 0.20.0 or later will decline to overwrite such a
Cabal file.

### ignore-revision-mismatch

(Removed 1.11)

This flag was introduced in Stack 1.6, and removed on the move to Pantry. You
will receive a warning if this configuration value is set.

### install-ghc

Default: `true`
([:octicons-tag-24: 1.5.0](https://github.com/commercialhaskell/stack/releases/tag/v1.5.0))

Command line equivalent (takes precedence): `--[no-]install-ghc` flag

Whether or not to automatically install GHC when necessary.

### jobs

Default: the number of CPUs (cores) that the machine has.

Command line equivalent (takes precedence):
[`-j`, `--jobs` option](global_flags.md#-jobs-or-j-option)

Specifies the number of concurrent jobs (principally, Stack actions during
building - see further below) to run.

When [building GHC from source](#building-ghc-from-source), specifies the
`-j[<n>]` flag of GHC's Hadrian build system.

In some circumstances, the default can cause some machines to run out of memory
during building. If those circumstances arise, specify `jobs: 1`.

This configuration option is distinct from GHC's own `-j[<n>]` flag, which
relates to parallel compilation of modules within a package.

### local-bin-path

Default (on Unix-like operating systems): `~/.local/bin`

Default (on Windows): `%APPDATA%\local\bin`

Command line equivalent (takes precedence): `--local-bin-path` option

Specifies the target directory for
[`stack build --copy-bins`](build_command.md#-no-copy-bins-flag) and
`stack install`. An absolute or relative path can be specified.

If the project-level configuration is provided in the `global-project` directory
in the [Stack root](stack_root.md), a relative path is assumed to be relative to
the current directory. Otherwise, it is assumed to be relative to the directory
of the project-level configuration file.

### local-programs-path

[:octicons-tag-24: 1.3.0](https://github.com/commercialhaskell/stack/releases/tag/v1.3.0)

This overrides the location of the Stack 'programs' directory, where tools like
GHC get installed. The path must be an absolute one.

Stack's defaults differ between Unix-like operating systems and Windows.

=== "Unix-like"

    Default: `programs` directory in the [Stack root](stack_root.md).

=== "Windows"

    Default: `%LOCALAPPDATA%\Programs\stack`, if the `%LOCALAPPDATA%`
    environment variable exists. Otherwise, the `programs` directory in the
    [Stack root](stack_root.md).

    The MSYS2 tool is also installed in the Stack 'programs' directory.

    !!! warning

        If there is a space character in the path to Stack's 'programs'
        directory this may cause problems with building packages that make use
        of the GNU project's `autoconf` package and `configure` shell script
        files. That may be the case particularly if there is no corresponding
        short name ('8 dot 3' name) for the directory in the path with the space
        (which may be the case if '8 dot 3' names have been stripped or their
        creation not enabled by default). If there are problems building, it
        will be necessary to specify an alternative path that does not contain
        space characters. Examples of packages on Hackage that make use of
        `configure` are `network` and `process`.

### modify-code-page

[:octicons-tag-24: 0.1.6.0](https://github.com/commercialhaskell/stack/releases/tag/v0.1.6.0)

Restrictions: Windows systems only.

Default: `true`

Command line equivalent (takes precedence): `--[no-]modify-code-page` flag

Whether to modify the code page for UTF-8 output.

~~~yaml
modify-code-page: false
~~~

### msys-environment

:octicons-tag-24: UNRELEASED

Restrictions: Windows systems only.

Default: `MINGW64` (64-bit Windows) or `MINGW32` (32-bit Windows)

The name of the MSYS2 environment (case-sensitive) used in the Stack
environment. Valid environments are `CLANG32`, `CLANG64`, `CLANGARM64`,
`MINGW32`, `MINGW64`, and `UCRT64`.

### nix

[:octicons-tag-24: 0.1.10.0](https://github.com/commercialhaskell/stack/releases/tag/v0.1.10.0)

Default:

~~~yaml
nix:
  enable: false # Except on NixOS, where `enable: true`
  pure: true
  packages: []
  shell-file:
  nix-shell-options: []
  path: []
  add-gc-roots: false
~~~

Command line equivalents: `--nix-*` flags and options (see `stack --nix-help`
for details).

For further information, see the
[Nix integration](nix_integration.md#configuration) documentation.

### notify-if-arch-unknown

[:octicons-tag-24: 2.15.1](https://github.com/commercialhaskell/stack/releases/tag/v2.15.1)

Default: `true`

If the specified machine architecture value is unknown to Cabal (the library),
should Stack notify the user of that?

### notify-if-cabal-untested

[:octicons-tag-24: 2.15.1](https://github.com/commercialhaskell/stack/releases/tag/v2.15.1)

Default: `true`

If Stack has not been tested with the version of Cabal (the library) that has
been found, should Stack notify the user of that?

### notify-if-ghc-untested

[:octicons-tag-24: 2.15.1](https://github.com/commercialhaskell/stack/releases/tag/v2.15.1)

Default: `true`

If Stack has not been tested with the version of GHC that is being used, should
Stack notify the user of that?

### notify-if-nix-on-path

[:octicons-tag-24: 2.15.1](https://github.com/commercialhaskell/stack/releases/tag/v2.15.1)

Default: `true`

If Stack's integration with the Nix package manager is not enabled, should Stack
notify the user if a `nix` executable is on the PATH?

### package-index

[:octicons-tag-24: 2.9.3](https://github.com/commercialhaskell/stack/releases/tag/v2.9.3)

Default:

~~~yaml
package-index:
  download-prefix: https://hackage.haskell.org/
  hackage-security:
    keyids:
    - 0a5c7ea47cd1b15f01f5f51a33adda7e655bc0f0b0615baa8e271f4c3351e21d
    - 1ea9ba32c526d1cc91ab5e5bd364ec5e9e8cb67179a471872f6e26f0ae773d42
    - 2c6c3627bd6c982990239487f1abd02e08a02e6cf16edb105a8012d444d870c3
    - 51f0161b906011b52c6613376b1ae937670da69322113a246a09f807c62f6921
    - fe331502606802feac15e514d9b9ea83fee8b6ffef71335479a2e68d84adc6b0
    key-threshold: 3
    ignore-expiry: true
~~~

Specify the package index. The index must use the
[Hackage Security](https://hackage.haskell.org/package/hackage-security) format.
This setting is most useful for providing a mirror of the official Hackage
server for

* bypassing a firewall; or
* faster downloads.

If the setting specifies an index that does not mirror Hackage, it is likely
that will result in significant breakage, including most snapshots failing to
work.

In the case of Hackage, the keys of its root key holders are contained in the
`haskell-infra/hackage-root-keys`
[repository](https://github.com/haskell-infra/hackage-root-keys). The Hackage
package index is signed. A signature is valid when three key holders have
signed. The Hackage timestamp is also signed. A signature is valid when one key
holder has signed.

If the `hackage-security` key is absent, the Hackage Security configuration will
default to that for the official Hackage server.

`key-threshold` specifies the minimum number of keyholders that must have signed
the package index for it to be considered valid.

`ignore-expiry` specifies whether or not the expiration of timestamps should be
ignored.

!!! info

    Before Stack 2.1.3, the default for `ignore-expiry` was `false`. For more
    information, see
    [issue #4928](https://github.com/commercialhaskell/stack/issues/4928).

### pvp-bounds

[:octicons-tag-24: 0.1.5.0](https://github.com/commercialhaskell/stack/releases/tag/v0.1.5.0)

Default: `none`

Command line equivalent (takes precedence): `stack sdist --pvp-bounds` option or
`stack upload --pvp-bounds` option

!!! warning

    As of Stack 1.6.0, this feature does not reliably work, due to issues with
    the Cabal library's printer. Stack will generate a warning when a lossy
    conversion occurs, in which case you may need to disable this setting. For
    further information, see issue
    [#3550](https://github.com/commercialhaskell/stack/issues/3550).

When using the `sdist` and `upload` commands, this setting determines whether
the Cabal file's dependencies should be modified to reflect PVP lower and upper
bounds.

#### Basic use

Values are `none` (unchanged), `upper` (add upper bounds), `lower` (add
lower bounds), and both (and upper and lower bounds). The algorithm Stack
follows is:

* If an upper or lower bound (other than `>= 0` - 'any version') already exists
  on a dependency, it is left alone
* When adding a lower bound, Stack looks at the current version specified by
  `stack.yaml`, and sets it as the lower bound (e.g., `foo >= 1.2.3`)
* When adding an upper bound, Stack sets it as less than the next major version
  (e.g., `foo < 1.3`)

~~~yaml
pvp-bounds: none
~~~

For further information, see the announcement
[blog post](https://www.fpcomplete.com/blog/2015/09/stack-pvp).

#### Use with Cabal file revisions

[:octicons-tag-24: 1.5.0](https://github.com/commercialhaskell/stack/releases/tag/v1.5.0)

Each of the values listed above supports adding `-revision` to the end of the
value, e.g. `pvp-bounds: both-revision`. This means that, when uploading to
Hackage, Stack will first upload your tarball with an unmodified Cabal file, and
then upload a Cabal file revision with the PVP bounds added.

This can be useful - especially combined with the
[Stackage no-revisions feature](http://www.snoyman.com/blog/2017/04/stackages-no-revisions-field) -
as a method to ensure PVP compliance without having to proactively fix bounds
issues for Stackage maintenance.

### recommend-stack-upgrade

[:octicons-tag-24: 2.1.1](https://github.com/commercialhaskell/stack/releases/tag/v2.1.1)

Default: `true`

When Stack notices that a new version of Stack is available, should it notify
the user?

### rebuild-ghc-options

[:octicons-tag-24: 0.1.6.0](https://github.com/commercialhaskell/stack/releases/tag/v0.1.6.0)

Default: `false`

Should Stack rebuild a package when its GHC options change?

The default value reflects that, in most cases, GHC options are used to affect
optimization levels and warning behavior, for which GHC does not recompile the
modules.

!!! info

    Before Stack 0.1.6.0, Stack rebuilt a package when its GHC options changed.

### require-stack-version

Default: `"-any"`

Require a version of Stack within the specified range
([cabal-style](https://www.haskell.org/cabal/users-guide/developing-packages.html#build-information))
to be used for this project. Example: `require-stack-version: "== 0.1.*"`

### save-hackage-creds

[:octicons-tag-24: 1.5.0](https://github.com/commercialhaskell/stack/releases/tag/v1.5.0)

Default: `true`

Command line equivalent (takes precedence):
[`stack upload --[no]-save-hackage-creds`](upload_command.md) option

Controls whether, when using `stack upload`, the user's Hackage username and
password are stored in a local file.

~~~yaml
save-hackage-creds: true
~~~

### setup-info

[:octicons-tag-24: 0.1.5.0](https://github.com/commercialhaskell/stack/releases/tag/v0.1.5.0)

The `setup-info` dictionary specifies download locations for tools to be
installed during set-up, such as GHC or, on Windows, 7z and MSYS2. The
dictionary maps `('Tool', 'Platform', 'Version')` to the location where it can
be obtained. For example, mapping `(GHC, 64-bit Windows, 9.2.3)` to the URL
hosting the archive file for GHC's installation.

Possible usages of this configuration option are:

1. Using Stack offline or behind a firewall.
2. Extending the tools known to Stack, such as cutting-edge versions of GHC or
   builds for custom Linux distributions (for use with the
   [ghc-variant](#ghc-variant) option).

By default, Stack obtains the dictionary from
[stack-setup-2.yaml](https://github.com/commercialhaskell/stackage-content/raw/master/stack/stack-setup-2.yaml).

The `setup-info` dictionary is constructed in the following order:

1. `setup-info` in the YAML configuration - inline configuration
2. `--setup-info-yaml` command line arguments - URLs or paths. Multiple
   locations may be specified.
3. `setup-info-locations` in the YAML configuration - URLs or paths. See further
   below.

The format of this key is the same as in the default
[stack-setup-2.yaml](https://github.com/commercialhaskell/stackage-content/raw/master/stack/stack-setup-2.yaml).
For example, GHC 9.2.3 of custom variant `myvariant` (see further below) on
64-bit Windows:

~~~yaml
setup-info:
  ghc:
    windows64-custom-myvariant:
      9.2.3:
        url: "https://example.com/ghc-9.2.3-x86_64-unknown-mingw32-myvariant.tar.xz"
~~~

'Platforms' are pairs of an operating system and a machine architecture (for
example, 32-bit i386 or 64-bit x86-64) (represented by the
`Cabal.Distribution.Systems.Platform` type). Stack currently (version 2.15.1)
supports the following pairs in the format of the `setup-info` key:

|Operating system|I386 arch|X86_64 arch|Other machine architectures                                 |
|----------------|---------|-----------|------------------------------------------------------------|
|Linux           |linux32  |linux64    |AArch64: linux-aarch64, Arm: linux-armv7, Sparc: linux-sparc|
|OSX             |macosx   |macosx     |                                                            |
|Windows         |windows32|windows64  |                                                            |
|FreeBSD         |freebsd32|freebsd64  |AArch64: freebsd-aarch64                                    |
|OpenBSD         |openbsd32|openbsd64  |                                                            |

For GHC, the distinguishing 'Version' in the key format includes a 'tag' for
any (optional) GHC variant (see [ghc-variant](#ghc-variant)) and a further 'tag'
for any (optional) specialised GHC build (see [ghc-build](#ghc-build)).

The optional variant 'tag' is either `-integersimple` or
`-custom-<custom_variant_name>`.

For example, for GHC 9.0.2 of specialised GHC build `tinfo6` on x86_64 Linux:
~~~yaml
setup-info:
  ghc:
    linux64-tinfo6:
      9.0.2:
        url: "http://downloads.haskell.org/~ghc/9.0.2/ghc-9.0.2a-x86_64-fedora27-linux.tar.xz"
        content-length: 237286244
        sha1: affc2aaa3e6a1c446698a884f56a0a13e57f00b4
        sha256: b2670e9f278e10355b0475c2cc3b8842490f1bca3c70c306f104aa60caff37b0
~~~

On Windows, the required 7z executable and DLL tools are represented in the
format of the `setup-info` key simply by `sevenzexe-info` and `sevenzdll-info`.

This configuration **adds** the specified setup information metadata to the
default. Specifying this configuration **does not** prevent the default
[stack-setup-2.yaml](https://github.com/commercialhaskell/stackage-content/raw/master/stack/stack-setup-2.yaml)
from being consulted as a fallback. If, however, you need to **replace** the
default `setup-info` dictionary, use the following:

~~~yaml
setup-info-locations: []
~~~

### setup-info-locations

[:octicons-tag-24: 2.3.1](https://github.com/commercialhaskell/stack/releases/tag/v2.3.1)

Command line equivalent (takes precedence): `--setup-info-yaml` option

By way of introduction, see the [`setup-info`](#setup-info) option. This option
specifies the location(s) of `setup-info` dictionaries.

The first location which provides a dictionary that specifies the location of a
tool - `('Tool', 'Platform', 'Version')` - takes precedence. For example, you
can extend the default tools, with a fallback to the default `setup-info`
location, as follows:

~~~yaml
setup-info-locations:
- C:/stack-offline/my-stack-setup.yaml
- relative/inside/my/project/setup-info.yaml
- \\smbShare\stack\my-stack-setup.yaml
- http://stack-mirror.com/stack-setup.yaml
# Fallback to the default location
- https://github.com/commercialhaskell/stackage-content/raw/master/stack/stack-setup-2.yaml
~~~

Stack only refers to the default `setup-info` location if no locations are
specified in the `setup-info-locations` configuration or on the command line
using the `--setup-info-yaml` option.

For example, both of the following will cause `stack setup` not to consult the
default `setup-info` location:

~~~yaml
setup-info-locations:
- C:/stack-offline/my-stack-setup.yaml
~~~

and

~~~yaml
setup-info-locations: []
~~~

Relative paths are resolved relative to the `stack.yaml` file (either the one in
the local project or the global `stack.yaml`).

Relative paths may also be used for the installation paths to tools (such as GHC
or 7z). This allows vendoring the tools inside a monorepo (a single repository
storing many projects). For example:

Directory structure:

~~~text
- src/
- installs/
  - my-stack-setup.yaml
  - 7z.exe
  - 7z.dll
  - ghc-9.2.3.tar.xz
- stack.yaml
~~~

In the project's `stack.yaml`:

~~~yaml
setup-info-locations:
- installs/my-stack-setup.yaml
~~~

In `installs/my-stack-setup.yaml`:

~~~yaml
sevenzexe-info:
  url: "installs/7z.exe"

sevenzdll-info:
  url: "installs/7z.dll"

ghc:
  windows64:
    9.2.3:
      url: "installs/ghc-9.2.3.tar.xz"
~~~

### skip-ghc-check

Default: `false`

Command line equivalent (takes precedence): `--[no-]skip-ghc-check` flag

Should we skip the check to confirm that your system GHC version (on the PATH)
matches what your project expects?

### skip-msys

[:octicons-tag-24: 0.1.2.0](https://github.com/commercialhaskell/stack/releases/tag/v0.1.2.0)

Restrictions: Windows systems only

Default: `false`

Command line equivalent (takes precedence):
[`--[no-]skip-msys`](global_flags.md#-no-skip-msys-option) flag

Skips checking for the Stack-supplied MSYS2 (and installing that MSYS2, if it is
not installed) when Stack is setting up the environment.

~~~yaml
skip-msys: true
~~~

!!! note

    Usually, the use of this option does not make sense in project-level
    configuration and it is used only in global configuration.

### snapshot-location-base

[:octicons-tag-24: 2.5.1](https://github.com/commercialhaskell/stack/releases/tag/v2.5.1)

Default: https://raw.githubusercontent.com/commercialhaskell/stackage-snapshots/master/
(as set in the `pantry` library)

Command line equivalent (takes precedence): `--snapshot-location-base` option

Sets the base location of the LTS Haskell or Stackage Nightly snapshots.

For example:

~~~yaml
snapshot-location-base: https://example.com/snapshots/location/
~~~

has the following effect:

* `lts-X.Y` expands to `https://example.com/snapshots/location/lts/X/Y.yaml`
* `nightly-YYYY-MM-DD` expands to
  `https://example.com/snapshots/location/nightly/YYYY/M/D.yaml`

This key is convenient in setups that restrict access to GitHub, for instance
closed corporate setups. In this setting, it is common for the development
environment to have general access to the internet, but not for testing/building
environments. To avoid the firewall, one can run a local snapshots mirror and
then use a custom `snapshot-location-base` in the closed environments only.

### stack-colors

Command line equivalent (takes precedence): `--stack-colors` option

Stack uses styles to format some of its output. The default styles do not work
well with every terminal theme. This option specifies Stack's output styles,
allowing new styles to replace the defaults. The option is used as
`stack-colors: <STYLES>`, where `<STYLES>` is a colon-delimited sequence of
key=value, 'key' is a style name and 'value' is a semicolon-delimited list of
'ANSI' SGR (Select Graphic Rendition) control codes (in decimal). Use the
command `stack ls stack-colors --basic` to see the current sequence.

The 'ANSI' standards refer to (1) standard ECMA-48 'Control Functions for Coded
Character Sets' (5th edition, 1991); (2) extensions in ITU-T Recommendation
(previously CCITT Recommendation) T.416 (03/93) 'Information Technology – Open
Document Architecture (ODA) and Interchange Format: Character Content
Architectures' (also published as ISO/IEC International Standard 8613-6); and
(3) further extensions used by 'XTerm', a terminal emulator for the X Window
System. The 'ANSI' SGR codes are described in a
[Wikipedia article](http://en.wikipedia.org/wiki/ANSI_escape_code)
and those codes supported on current versions of Windows in
[Microsoft's documentation](https://docs.microsoft.com/en-us/windows/console/console-virtual-terminal-sequences).

For example, users of the popular
[Solarized Dark](https://ethanschoonover.com/solarized/)
terminal theme might wish to set the styles as follows:

~~~yaml
stack-colors: error=31:good=32:shell=35:dir=34:recommendation=32:target=95:module=35:package-component=95:secondary=92:highlight=32
~~~
In respect of styles used in verbose output, some of that output occurs before
the configuration file is processed.

(The British English spelling (colour) is also accepted. In YAML configuration
files, the American spelling is the alternative that has priority.)

### stack-developer-mode

[:octicons-tag-24: 2.3.3](https://github.com/commercialhaskell/stack/releases/tag/v2.3.3)

Default (official distributed binaries): `false`

Default (built from source): `true`

Turns on a mode where some messages are printed at WARN level instead of DEBUG
level, especially useful for developers of Stack itself.

~~~yaml
stack-developer-mode: false
~~~

### system-ghc

Default: `false`, unless the [Docker](docker_integration.md) or
[Nix](nix_integration.md) integration is enabled.

Command line equivalent (takes precedence): `--[no-]system-ghc` flag

Enables or disables using the GHC available on the PATH. (Make sure PATH is
explicit, i.e., don't use ~.) Useful to enable if you want to save the time,
bandwidth or storage space needed to setup an isolated GHC.

In a Nix-enabled configuration, Stack is incompatible with `system-ghc: false`.

~~~yaml
# Turn on system GHC
system-ghc: true
~~~

### templates

Command line equivalent (takes precedence): `stack new --param <key>:<value>`
(or `-p`) option

Templates used with `stack new` have a number of parameters that affect the
generated code. These can be set for all new projects you create. The result of
them can be observed in the generated LICENSE and Cabal files. The value for all
of these parameters must be strings.

The parameters are: `author-email`, `author-name`, `category`, `copyright`,
`year` and `github-username`.

* _author-email_ - sets the `maintainer` property in Cabal
* _author-name_ - sets the `author` property in Cabal and the name used in
  LICENSE
* _category_ - sets the `category` property in Cabal. This is used in Hackage.
  For examples of categories see
  [Packages by category](https://hackage.haskell.org/packages/). It makes sense
  for `category` to be set on a per project basis because it is uncommon for all
  projects a user creates to belong to the same category. The category can be
  set per project by passing `-p "category:value"` to the `stack new` command.
* _copyright_ - sets the `copyright` property in Cabal. It is typically the
  name of the holder of the copyright on the package and the year(s) from which
  copyright is claimed. For example: `Copyright (c) 2023-2024 Joe Bloggs`
* _year_ - if `copyright` is not specified, `year` and `author-name` are used
  to generate the copyright property in Cabal. If `year` is not specified, it
  defaults to the current year.
* _github-username_ - used to generate `homepage` and `source-repository` in
  Cabal. For instance `github-username: myusername` and
  `stack new my-project new-template` would result:

~~~yaml
homepage: http://github.com/myusername/my-project#readme

source-repository head
  type: git
  location: https://github.com/myusername/my-project
~~~

These properties can be set in `config.yaml` as follows:
~~~yaml
templates:
  params:
    author-name: Your Name
    author-email: youremail@example.com
    category: Your Projects Category
    copyright: 'Copyright (c) 2024 Your Name'
    github-username: yourusername
~~~

Additionally, `stack new` can automatically initialize source control
repositories in the directories it creates.  Source control tools can be
specified with the `scm-init` option. At the moment, only `git` is supported.

~~~yaml
templates:
  scm-init: git
~~~

### urls

Default:

~~~yaml
urls:
  latest-snapshot: https://stackage-haddock.haskell.org/snapshots.json
~~~

Customize the URLs where Stack looks for snapshot build plans.

!!! note

    The default for Stack 1.3.0 to 2.15.3 was
    https://s3.amazonaws.com/haddock.stackage.org/snapshots.json. Following the
    handover of the Stackage project to the Haskell Foundation in
    early 2024, the file at that URL may not be up to date. Users of those
    versions of Stack should configure the URL to be the default above.

### with-gcc

Command line equivalent (takes precedence): `--with-gcc` option

Specify a path to GCC explicitly, rather than relying on the normal path
resolution.

~~~yaml
with-gcc: /usr/local/bin/gcc-5
~~~

### with-hpack

Command line equivalent (takes precedence): `--with-hpack` option

Use an [Hpack](https://github.com/sol/hpack) executable, rather than Stack's
in-built version of the Hpack functionality.

~~~yaml
with-hpack: /usr/local/bin/hpack
~~~

### work-dir

[:octicons-tag-24: 0.1.10.0](https://github.com/commercialhaskell/stack/releases/tag/v0.1.10.0)

Default: `.stack-work`

Command line equivalent (takes precedence):
[`--work-dir`](global_flags.md#-work-dir-option) option

Environment variable alternative (lowest precedence):
[`STACK_WORK`](environment_variables.md#stack_work)

`work-dir` specifies the path of Stack's work directory, within a local project
or package directory. The path must be a relative one, relative to the
root directory of the project or package. The relative path cannot include a
`..` (parent directory) component.

## Customisation scripts

### GHC installation customisation

[:octicons-tag-24: 2.9.1](https://github.com/commercialhaskell/stack/releases/tag/v2.9.1)

On Unix-like operating systems and Windows, Stack's installation procedure can
be fully customised by placing a `sh` shell script (a 'hook') in the
[Stack root](stack_root.md) directory at `hooks/ghc-install.sh`. On Unix-like
operating systems, the script file must be made executable. The script is run by
the `sh` application (which is provided by MSYS2 on Windows).

The script **must** return an exit code of `0` and the standard output **must**
be the absolute path to the GHC binary that was installed. Otherwise Stack will
ignore the script and possibly fall back to its own installation procedure.

The script is not run when `system-ghc: true`.

When `install-ghc: false`, the script is still run, which allows you to ensure
that only your script will install GHC and Stack won't default to its own
installation logic, even when the script fails.

The following environment variables are always available to the script:

* `HOOK_GHC_TYPE = "bindist" | "git" | "ghcjs"`

For "bindist", additional variables are:

* `HOOK_GHC_VERSION = <ver>`

For "git", additional variables are:

* `HOOK_GHC_COMMIT = <commit>`
* `HOOK_GHC_FLAVOR = <flavor>`

For "ghcjs", additional variables are:

* `HOOK_GHC_VERSION = <ver>`
* `HOOK_GHCJS_VERSION = <ver>`

An example script is:

~~~sh
#!/bin/sh

set -eu

case $HOOK_GHC_TYPE in
	bindist)
		# install GHC here, not printing to stdout, e.g.:
		#   command install $HOOK_GHC_VERSION >/dev/null
		;;
	git)
		>&2 echo "Hook doesn't support installing from source"
		exit 1
		;;
	*)
		>&2 echo "Unsupported GHC installation type: $HOOK_GHC_TYPE"
		exit 2
		;;
esac

echo "location/to/ghc/executable"
~~~

If the following script is installed by GHCup, GHCup makes use of it, so that if
Stack needs a version of GHC, GHCup takes over obtaining and installing that
version:

~~~sh
#!/bin/sh

set -eu

case $HOOK_GHC_TYPE in
    bindist)
        ghcdir=$(ghcup whereis --directory ghc "$HOOK_GHC_VERSION" || ghcup run --ghc "$HOOK_GHC_VERSION" --install) || exit 3
        printf "%s/ghc" "${ghcdir}"
        ;;
    git)
        # TODO: should be somewhat possible
        >&2 echo "Hook doesn't support installing from source"
        exit 1
        ;;
    *)
        >&2 echo "Unsupported GHC installation type: $HOOK_GHC_TYPE"
        exit 2
        ;;
esac
~~~


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/global_flags.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Stack's global flags and options

Stack can also be configured by flags and options on the command line. Global
flags and options apply to all of Stack's commands. In addition, all of Stack's
commands accept the `--setup-info-yaml` and `--snapshot-location-base` options
and the `--help` flag.

## `--allow-different-user` flag

Restrictions: POSIX systems only

Default: True, if inside Docker; false otherwise

Enable/disable permitting users other than the owner of the
[Stack root](stack_root.md) directory to use a Stack installation. For further
information, see the documentation for the corresponding non-project specific
configuration [option](yaml_configuration.md#allow-different-user).

## `--arch` option

Pass the option `--arch <architecture>` to specify the relevant machine
architecture. For further information, see the documentation for the
corresponding non-project specific configuration
[option](yaml_configuration.md#arch).

## `--color` or `-colour` options

Pass the option `stack --color <when>` to specify when to use color in output.
For further information, see the documentation for the corresponding non-project
specific configuration [option](yaml_configuration.md#color).

## `--compiler` option

Pass the option `--compiler <compiler>` to specify the compiler. For further
information, see the [YAML configuration](yaml_configuration.md#compiler)
documentation.

## `--custom-preprocessor-extensions` option

Pass the option `--custom-preprocessor-extensions <extension>` to specify an
extension used for a custom preprocessor. For further information, see the
documentation for the corresponding non-project specific configuration
[option](yaml_configuration.md#custom-preprocessor-extensions).

## `--docker*` flags and options

Stack supports automatically performing builds inside a Docker container. For
further information see `stack --docker-help` or the
[Docker integratiom](docker_integration.md) documentation.

## `--[no-]dump-logs` flag

Default: Dump warning logs

Enables/disables the dumping of the build output logs for project packages to
the console. For further information, see the documentation for the
corresponding non-project specific configuration
[option](yaml_configuration.md#dump-logs).

## `--extra-include-dirs` option

Pass the option `--extra-include-dirs <director>` to specify an extra directory
to check for C header files. The option can be specified multiple times. For
further information, see the documentation for the corresponding non-project
specific configuration [option](yaml_configuration.md#extra-include-dirs).

## `--extra-lib-dirs` option

Pass the option `--extra-lib-dirs <director>` to specify an extra directory
to check for libraries. The option can be specified multiple times. For further
information, see the documentation for the corresponding non-project specific
configuration [option](yaml_configuration.md#extra-lib-dirs).

## `--ghc-build` option

Pass the option `--ghc-build <build>` to specify the relevant specialised GHC
build. For further information, see the documentation for the corresponding
non-project specific configuration [option](yaml_configuration.md#ghc-build).

## `--ghc-variant` option

Pass the option `--ghc-variant <variant>` to specify the relevant GHC variant.
For further information, see the documentation for the corresponding non-project
specific configuration [option](yaml_configuration.md#ghc-variant).

## `--[no-]hpack-force` flag

:octicons-tag-24: UNRELEASED

Default: Disabled

By default, Hpack 0.20.0 or later will decline to overwrite a Cabal file that
has been modified manually. Pass the flag `--hpack-force` to allow Hpack to
overwrite such a Cabal file.

## `--hpack-numeric-version` flag

Pass the flag `--hpack-numeric-version` to cause Stack to report the numeric
version of its built-in Hpack library to the standard output stream (e.g.
`0.35.0`) and quit.

## `--[no-]install-ghc` flag

Default: Enabled

Enables/disables the download and instalation of GHC if necessary. For further
information, see the documentation for the corresponding non-project specific
configuration [option](yaml_configuration.md#install-ghc).

## `--jobs` or `-j` option

Pass the option `--jobs <number_of_jobs>` to specify the number of concurrent
jobs (Stack actions during building) to run.

When [building GHC from source](yaml_configuration.md#building-ghc-from-source),
specifies the `-j[<n>]` flag of GHC's Hadrian build system.

By default, Stack specifies a number of concurrent jobs equal to the number of
CPUs (cores) that the machine has. In some circumstances, that default can cause
some machines to run out of memory during building. If those circumstances
arise, specify `--jobs 1`.

This configuration option is distinct from GHC's own `-j[<n>]` flag, which
relates to parallel compilation of modules within a package.

For further information, see the documentation for the corresponding non-project
specific configuration option: [`jobs`](yaml_configuration.md#jobs).

## `--local-bin-path` option

Pass the option `--local-bin-path <directory>` to set the target directory for
[`stack build --copy-bins`](build_command.md#-no-copy-bins-flag) and
`stack install`. An absolute or relative path can be specified. A relative path
at the command line is always assumed to be relative to the current directory.

For further information, see the documentation for the corresponding non-project
specific configuration [option](yaml_configuration.md#local-bin-path).

## `--lock-file` option

Default: `read-write`, if snapshot specified in YAML configuration file;
`read-only`, if a different snapshot is specified on the command line.

Pass the option `--lock-file <mode>` to specify how Stack interacts with lock
files. Valid modes are:

* `error-on-write`: Stack reports an error, rather than write a lock file;
* `ignore`: Stack ignores lock files;
* `read-only`: Stack only reads lock files; and
* `read-write`: Stack reads and writes lock files.

## `--[no-]modify-code-page` flag

Restrictions: Windows systems only

Default: Enabled

Enables/disables setting the codepage to support UTF-8. For further information,
see the documentation for the corresponding non-project specific configuration
[option](yaml_configuration.md#modify-code-page).

## `--nix*` flags and options

Stack can be configured to integrate with Nix. For further information, see
`stack --nix-help` or the [Nix integration](nix_integration.md) documentation.

## `--numeric-version` flag

Pass the flag `--numeric-version` to cause Stack to report its numeric version
to the standard output stream (e.g. `2.9.1`) and quit.

## `--[no-]plan-in-log` flag

[:octicons-tag-24: 2.13.1](https://github.com/commercialhaskell/stack/releases/tag/v2.13.1)

Default: Disabled

Enables/disables the logging of build plan construction in debug output.
Information about the build plan construction can be lengthy. If you do not need
it, it is best omitted from the debug output.

## `--resolver` option

A synonym for the [`--snapshot` option](#snapshot-option) to specify the
snapshot resolver.

## `--[no-]rsl-in-log` flag

[:octicons-tag-24: 2.9.1](https://github.com/commercialhaskell/stack/releases/tag/v2.9.1)

Default: Disabled

Enables/disables the logging of the raw snapshot layer (rsl) in debug output.
Information about the raw snapshot layer can be lengthy. If you do not need it,
it is best omitted from the debug output.

## `--[no-]script-no-run-compile` flag

Default: Disabled

Enables/disables the use of options `--no-run --compile` with the
[`stack script` command](script_command.md).

## `--silent` flag

Equivalent to the `--verbosity silent` option.

## `--[no-]skip-ghc-check` option

Default: Disabled

Enables/disables the skipping of checking the GHC version and architecture. For
further information, see the documentation for the corresponding non-project
specific configuration [option](yaml_configuration.md#skip-ghc-check).

## `--[no-]skip-msys` option

Restrictions: Windows systems only

Default: Disabled

Enables/disables the skipping of checking for the Stack-supplied MSYS2 (and
installing that MSYS2, if it is not installed) when Stack is setting up the
environment. For further information, see the documentation for the
corresponding non-project specific configuration
[option](yaml_configuration.md#skip-msys).

## `--snapshot` option

[:octicons-tag-24: 2.15.1](https://github.com/commercialhaskell/stack/releases/tag/v2.15.1)

Pass the option `--snapshot <snapshot>` to specify the snapshot. For further
information, see the [YAML configuration](yaml_configuration.md#snapshot)
documentation.

At the command line (only):

*   `--snapshot lts-<major_version>` specifies the latest Stackage LTS Haskell
    snapshot with the specified major version;
*   `--snapshot lts` specifies, from those with the greatest major version, the
    latest Stackage LTS Haskell snapshot;
*   `--snapshot nightly` specifies the most recent Stackage Nightly snapshot;
    and
*   `--snapshot global` specifies the snapshot specified by the project-level
    configuration file in the `global-project` directory in the
    [Stack root](stack_root.md#global-project-directory).

## `--stack-colors` or `--stack-colours` options

Pass the option `--stack-colors <styles>` to specify Stack's output styles. For
further information, see the documentation for the corresponding non-project
specific configuration [option](yaml_configuration.md#stack-colors).

## `--stack-root` option

Overrides: `STACK_ROOT` environment variable

Pass the option `--stack-root <absolute_path_to_the_Stack_root>` to specify the
path to the [Stack root](stack_root.md) directory. The path must be an absolute
one.

## `--stack-yaml` option

Default: `stack.yaml`

Overrides: `STACK_YAML` enviroment variable

Pass the option `--stack-yaml <file>` to specify Stack's project-level YAML
configuration file.

## `--[no-]system-ghc` flag

Default: Disabled

Enables/disables the use of a GHC executable on the PATH, if one is available
and its version matches.

## `--[no-]terminal` flag

Default: Stack is running in a terminal (as detected)

Enables/disables whether Stack is running in a terminal.

## `--terminal-width` option

Default: the terminal width (if detected); otherwise `100`

Pass the option `--terminal-width <width>` to specify the width of the terminal,
used by Stack's pretty printed messages.

## `--[no-]time-in-logs` flag

Default: Enabled

Enables/disables the inclusion of time stamps against logging entries when the
verbosity level is 'debug'.

## `--verbose` or `-v` flags

Equivalent to the `--verbosity debug` option.

## `--verbosity` option

Default: `info`

Pass the option `--verbosity <log_level>` to specify the level for logging.
Possible levels are `silent`, `error`, `warn`, `info` and `debug`, in order of
increasing amounts of information provided by logging.

## `--version` flag

Pass the flag `--version` to cause Stack to report its version to standard
output and quit. For versions that are release candidates, the report will list
the dependencies that Stack has been compiled with.

## `--with-gcc` option

Pass the option `--with-gcc <path_to_gcc>` to specify use of a GCC executable.
For further information, see the documentation for the corresponding non-project
specific configuration [option](yaml_configuration.md#with-gcc).

## `--with-hpack` option

Pass the option `--with-hpack <hpack>` to specify use of an Hpack executable.
For further information, see the documentation for the corresponding
non-project specific configuration [option](yaml_configuration.md#with-hpack).

## `--work-dir` option

Default: `.stack-work`

Overrides: [`STACK_WORK`](environment_variables.md#stack_work) environment
variable, and [`work-dir`](yaml_configuration.md) non-project specific
configuration option.

Pass the option `--work-dir <relative_path_to_the_Stack_root>` to specify the
path to Stack's work directory, within a local project or package directory. The
path must be a relative one, relative to the the root directory of the project
or package. The relative path cannot include a `..` (parent directory)
component.

## `--setup-info-yaml` command option

Default: `https://raw.githubusercontent.com/commercialhaskell/stackage-content/master/stack/stack-setup-2.yaml`

The `--setup-info-yaml <url>` command option specifies the location of a
`setup-info` dictionary. The option can be specified multiple times.

## `--snapshot-location-base` command option

Default: `https://raw.githubusercontent.com/commercialhaskell/stackage-snapshots/master`

The `--snapshot-location-base <url>` command option specifies the base location
of snapshots.

## `--help` command flag

If Stack is passed the `--help` command flag, it will output help for the
command.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/build_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack build` command and its synonyms

~~~text
stack build [TARGET] [--dry-run] [--pedantic] [--fast] [--ghc-options OPTIONS]
            [--flag PACKAGE:[-]FLAG] [--dependencies-only | --only-snapshot |
              --only-dependencies | --only-locals] [--file-watch |
              --file-watch-poll] [--watch-all] [--exec COMMAND [ARGUMENT(S)]]
            [--only-configure] [--trace] [--profile] [--no-strip]
            [--[no-]library-profiling] [--[no-]executable-profiling]
            [--[no-]library-stripping] [--[no-]executable-stripping]
            [--[no-]haddock] [--haddock-arguments HADDOCK_ARGS]
            [--[no-]open] [--[no-]haddock-deps] [--[no-]haddock-internal]
            [--[no-]haddock-hyperlink-source] [--[no-]haddock-for-hackage]
            [--[no-]copy-bins] [--[no-]copy-compiler-tool] [--[no-]prefetch]
            [--[no-]keep-going] [--[no-]keep-tmp-files] [--[no-]force-dirty]
            [--[no-]test] [--[no-]rerun-tests] [--ta|--test-arguments TEST_ARGS]
            [--coverage] [--no-run-tests] [--test-suite-timeout ARG]
            [--[no-]tests-allow-stdin] [--[no-]bench]
            [--ba|--benchmark-arguments BENCH_ARGS] [--no-run-benchmarks]
            [--[no-]reconfigure] [--cabal-verbosity VERBOSITY |
              --[no-]cabal-verbose] [--[no-]split-objs] [--skip ARG]
            [--[no-]interleaved-output] [--ddump-dir ARG]
~~~

`stack build` and its synonyms (`stack test`, `stack bench`, `stack haddock` and
`stack install`) are Stack's primany command. The command provides a simple
interface for simple tasks and flexibility for more complicated goals.

See the introductory part of Stack's
[user's guide](GUIDE.md#the-stack-build-command) for an introduction to the
command.

## Synonyms

The synonym commands for `stack build` are:

|Synonym command|Equivalent `stack build` command flag|
|---------------|-------------------------------------|
|`stack test`   |`stack build --test`                 |
|`stack bench`  |`stack build --bench`                |
|`stack haddock`|`stack build --haddock`              |
|`stack install`|`stack build --copy-bins`            |

The advantage of the synonym commands is that they are convenient and short. The
advantage of the flags is that they compose. See the examples below.

## Components

Every Cabal package is made up of one or more components. It can have an
optional public library component, one or more optional executable components,
one or more optional test suite components, and one or more optional benchmark
components.

Stack allows you to identify a specific component to be built. For example,
`stack build mypackage:test:mytests` will build (and run - see further below)
the `mytests` component of the `mypackage` package. `mytests` must be a test
suite component.

By default, if a test suite component is targeted, the component is built and
run. The running behaviour can be disabled with the `--no-run-tests` flag.
Similarly, if a benchmark component is targeted, it is built and run unless the
running behaviour is disabled with the `--no-run-benchmarks` flag.

This ability to specify a component applies only to a project package. With
dependencies, Stack will *always* build the library (if present) and all
executables (if any), and ignore test suites and benchmarks. If you want more
control over a package, you must add it to your `packages` setting in your
project-level configuration file (`stack.yaml`, by default).

## Target syntax

`stack build` takes a list of one or more optional *targets* to be built. The
supported syntaxes for targets are as follows:

* no targets specified
* *package*
* *package identifier*
* project package *component*
* *local directory*

### No targets specified

Example: `stack build`

`stack build` with no targets specified will build all project packages.

### Target: *package*

Example: `stack build foobar`

Stack will try to find the package in the following locations:

* project packages,
* extra-deps,
* the snapshot, and
* the package index (e.g. Hackage).

If the package is found in the package index, then the latest version of that
package from the index is implicitly added as an extra-dep.

If the package is a project package, the library and executable components are
selected to be built. If the `--test` and `--bench` flags are set, then all of
the test suite and benchmark components, respectively, are selected to be built.

If *package* is a GHC boot package (packages that come with GHC and are included
in GHC's global package database), the behaviour can be complex:

* If the boot package has not been 'replaced', then `stack build` will,
  effectively, do nothing.

* If the boot package has been 'replaced' then `stack build` will specify the
  latest version of that package in the package index, which may differ from the
  version provided by the version of GHC specified by the snapshot.

A boot package will be treated as 'replaced' if the package is included directly
in the Stackage snapshot or it depends on a package included directly in the
snapshot.

!!! note

    Stackage snapshots do not include directly most boot packages but some
    snapshots may include directly some boot packages. In particular, some
    snapshots include directly `Win32` (which is a boot package on Windows)
    while others do not.

    For example, if `Cabal` (a boot package) is not a project package or an
    extra-dep, then `stack build Cabal` with Stackage snapshot LTS Haskell 20.25
    will:

    *   on Windows, try to build the latest version of `Cabal` in the package
        index (because that snapshot includes `Win32` directly, and `Cabal`
        depends on `Win32` and so is treated as 'replaced'); and
    *   on non-Windows, effectively, do nothing (because `Cabal` is not
        'replaced').

### Target: *package identifier*

Example: `stack build foobar-1.2.3`

If the package name is that of a project package, then Stack fails with an
error.

If the package version is in the package index (e.g. Hackage) then Stack will
use the latest revision of that version from the package index.

If the package is an extra-dep or in the snapshot, Stack will behave as if only
the package name had been specified as the target (that is, ignoring the
specified version).

Otherwise, Stack will fail with an error, reporting that the package name is
unknown.

### Target: project package *component*

Examples:

* `stack build my-package:lib`
* `stack build my-package:exe:my-executable`
* `stack build my-package:test:my-test-suite`
* `stack build my-package:bench:my-benchmark`
* `stack build my-package:my-test-suite`
* `stack build :my-test-suite`

You can select individual components from inside a project package to be built.
This can be done for more fine-grained control over which test suites to run, or
to have a faster compilation cycle.

There are multiple ways to refer to a specific component:

*   `<package-name>:lib` or `<package-name>:<comp-type>:<comp-name>` (where the
    component type, `<comp-type>`, is one of `exe`, `test`, or `bench`) is the
    most explicit. The library component type (`lib`) does not have an
    associated component name, `<comp-name>`.

*   `<package-name>:<comp-name>` allows you to leave out the component type, as
    that will often be unique for a given component name.

*   `:<comp-name>` is a useful shortcut, saying "find the component`<comp-name>`
    in all of the project packages". This will result in an error if more than
    one package has a component with the specified name.

For further information about available targets, see the
[`stack ide targets` command](ide_command.md).

### Target: *local directory*

Examples:

* `stack build foo/bar`
* `stack build ./foo`
* `stack build .`

Stack will find all project packages that exist in the given directory hierarchy
and then follow the same procedure as passing in package names as mentioned
above.

`stack build .` will target project packages in the current working directory or
its subdirectories.

!!! note

    If the directory name is parsed as one of the other target types, it will
    be treated as that. Explicitly starting the target with `./` can avoid that.
    For example, `stack build ./foo`.

## Controlling what gets built

Stack will automatically build the necessary dependencies. See the introductory
part of Stack's [user's guide](GUIDE.md#the-stack-build-command) for information
about how these dependencies get specified.

In addition to specifying targets, you can also control what gets built, or
retained, with the flags and options listed below. You can also affect what gets
built by specifying Cabal (the library) options for the configure step
of the Cabal build process (for further information, see the documentation for
the [configure-options](yaml_configuration.md#configure-options) configuration
option).

### `--bench` flag

Pass the flag to add benchmark components to the targets, if specific components
are not identified. The `stack bench` synonym sets this flag.

### `--dependencies-only` flag

Pass the flag to skip building the targets. The flag `--only-dependencies` has
the same effect.

### `--[no-]dry-run` flag

Default: Disabled

Set the flag to build nothing and output information about the build plan.

### `--flag` option

`stack build --flag <package_name>:[-]<flag_name>` sets (or unsets) the
specified Cabal flag for the specified package.

This option can be specified multiple times to set (or unset) multiple Cabal
flags.

The same Cabal flag name can be set (or unset) for multiple packages (at the
command line only) with:

~~~text
stack build --flag *:[-]<flag_name>
~~~

In order to set a Cabal flag for a GHC boot package, the package must be
specified as an extra-dep.

### `--[no-]force-dirty` flag

Default: Disabled

Set the flag to force rebuild of packages even when it doesn't seem necessary
based on file dirtiness.

### `--[no-]haddock` flag

Default: Disabled

Set the flag to build Haddock documentation. This may cause a lot of packages to
get re-built, so that the documentation links work. The `stack haddock` synonym
sets this flag.

Stack applies Haddock's `--gen-contents` and `--gen-index` flags to generate a
single HTML contents and index for multiple sets of Haddock documentation.

!!! warning

    On Windows, the values for the `haddock-interfaces` and `haddock-html` keys
    in the `*.conf` files for boot packages provided with certain versions of
    GHC (in its `lib\package.conf.d` directory) can be corrupt and refer to
    non-existent files and directories. For example, in the case of GHC 9.0.1
    to GHC 9.8.1 the references are to
    `${pkgroot}/../../docs/html/libraries/...` or
    `${pkgroot}/../../doc/html/libraries/...` instead of
    `${pkgroot}/../docs/html/libraries/...` or
    `${pkgroot}/../doc/html/libraries/...`. Until those values are corrected,
    Haddock documentation will be missing links to what those packages expose.

### `--haddock-arguments` option

`stack haddock --haddock-arguments <haddock_argument(s)>` passes the specified
arguments to the Haddock tool.

Specified arguments are separated by spaces. Arguments can be unquoted (if they
do not contain space or `"` characters) or quoted (`""`). Quoted arguments can
include 'escaped' characters, escaped with an initial `\` character.

!!! note

    Haddock's `--latex` flag is incompatible with the Haddock flags used by
    Stack to generate a single HTML contents and index.

### `--[no-]haddock-deps` flag

Default: Enabled (if building Haddock documnentation)

Unset the flag to disable building Haddock documentation for dependencies.

### `--[no-]haddock-for-hackage` flag

:octicons-beaker-24: Experimental

[:octicons-tag-24: 2.15.1](https://github.com/commercialhaskell/stack/releases/tag/v2.15.1)

Default: Disabled

Set the flag to build project packages with flags to generate Haddock
documentation suitable for upload to Hackage. The form of the Haddock
documentation generated for other packages is unaffected.

For each project package, the generated Haddock documentation files are in
directory `doc\html\<package_version>-docs\`, relative to Stack's dist work
directory (see [`stack path --dist-dir`](path_command.md)).

Unless flags are set to exclude the building of project packages, for each
targetted project package with generated documentation, an archive of the
`<package_version>-docs` directory and its contents is in Stack's dist work
directory. (The flags that exclude project packages are
[`--only-dependencies`](#-only-dependencies-flag),
[`--dependencies-only`](#-dependencies-only-flag), or
[`--only-snapshot`](#-only-snapshot-flag).)

If the flag is set:

* the [`--[no-]haddock-hyperlink-source`](#-no-haddock-hyperlink-source-flag)
  flag is ignored and `--haddock-hyperlink-source` is implied;
* the [`--[no-]haddock-deps`](#-no-haddock-deps-flag) flag is ignored and the
  default value for the flag is implied;
* the [`--[no-]haddock-internal`](#-no-haddock-hyperlink-internal-flag) flag is
  ignored and `--no-haddock-internal` is implied;
* the [`--[no-]open`](#-no-open-flag) flag is ignored and `--no-open` is
  implied; and
* the [`--[no-]force-dirty`](#-no-force-dirty-flag) flag is ignored and
  `--force-dirty` is implied.

!!! info

    Stack does not distinguish the building of Haddock documentation for Hackage
    from the building of Haddock documentation generally, which is why the
    `--force-dirty` flag is implied.

!!! note

    If set, Haddock will warn that `-source-*` options are ignored when
    `--hyperlinked-source` is enabled. That is due to a known bug in Cabal
    (the libiary).

!!! note

    If set, Cabal (the library) will report that documentation has been created
    in `index.html` and `<package_name>.txt` files. Those files do not exist.
    That false report is due to a known bug in Cabal (the library).

### `--[no-]haddock-hyperlink-source` flag

Default: Enabled

Unset the flag to disable building building hyperlinked source for Haddock.

If the [`--haddock-for-hackage`](#-no-haddock-for-hackage-flag) flag is passed,
this flag is ignored.

### `--[no-]haddock-benchmarks` flag

Default: Disabled

Set the flag to enable building Haddock documentation for benchmark components
of packages.

If the [`--haddock-for-hackage`](#-no-haddock-for-hackage-flag) flag is passed,
this flag is ignored.

!!! note

    This feature is not supported by versions of Cabal (the library) provided
    with GHC 9.2.8 and earlier.

!!! warning

    Due to a bug in versions of Cabal (the library) provided with GHC 9.8.2 and
    earlier, if there is more than one executable (including test suites and
    benchmarks) in a project package or more than one project package with an
    executable, the Haddock documentation for the `Main` module of one
    executable will overwrite the Haddock documentation for others.

### `--[no-]haddock-executables` flag

Default: Disabled

Set the flag to enable building Haddock documentation for executable components
of packages.

If the [`--haddock-for-hackage`](#-no-haddock-for-hackage-flag) flag is passed,
this flag is ignored.

!!! note

    This feature is not supported by versions of Cabal (the library) provided
    with GHC 9.2.8 and earlier.

!!! warning

    Due to a bug in versions of Cabal (the library) provided with GHC 9.8.2 and
    earlier, if there is more than one executable (including test suites and
    benchmarks) in a project package or more than one project package with an
    executable, the Haddock documentation for the `Main` module of one
    executable will overwrite the Haddock documentation for others.

### `--[no-]haddock-internal` flag

Default: Disabled

Set the flag to enable building Haddock documentation for internal modules.

If the [`--haddock-for-hackage`](#-no-haddock-for-hackage-flag) flag is passed,
this flag is ignored.

### `--[no-]haddock-tests` flag

Default: Disabled

Set the flag to enable building Haddock documentation for test suite components
of packages.

If the [`--haddock-for-hackage`](#-no-haddock-for-hackage-flag) flag is passed,
this flag is ignored.

!!! note

    This feature is not supported by versions of Cabal (the library) provided
    with GHC 9.2.8 and earlier.

!!! warning

    Due to a bug in versions of Cabal (the library) provided with GHC 9.8.2 and
    earlier, if there is more than one executable (including test suites and
    benchmarks) in a project package or more than one project package with an
    executable, the Haddock documentation for the `Main` module of one
    executable will overwrite the Haddock documentation for others.

### `--[no-]keep-going` flag

Default (`stack build`): Disabled

Default (`stack test` or `stack bench`): Enabled

Set the flag to continue building packages even after some build step fails.
The packages which depend upon the failed build won't get built.

### `--[no-]keep-tmp-files` flag

Default: Disabled

Set the flag to keep intermediate files and build directories that would
otherwise be considered temporary and deleted. It may be useful to inspect
these, if a build fails. By default, they are not kept.

### `--only-configure` flag

[:octicons-tag-24: 0.1.4.0](https://github.com/commercialhaskell/stack/releases/tag/v0.1.4.0)

Pass the flag to perform only the configure step, not any builds. This is
intended for tool usage. It may break when used on multiple packages at once.

!!! note

    If there are downstream actions that require a package to be built then a
    full build will occur, even if the flag is passed.

### `--only-dependencies` flag

Pass the flag to skip building the targets. The flag `--dependencies-only` has
the same effect.

### `--only-locals` flag

Pass the flag to build only packages in the local database. Fails if the build
plan includes packages in the snapshot database.

### `--only-snapshot` flag

Pass the flag to build only snapshot dependencies, which are cached and shared
with other projects.

### `--[no-]reconfigure` flag

Default: Disabled

Set the flag to force reconfiguration even when it doesn't seem necessary based
on file dirtiness. This is sometimes useful with custom `Setup.hs` files, in
particular when they depend on external data files.

### `--skip` option

`stack build --skip <component>` skips building the specified components of a
project package. It allows you to skip test suites and benchmark without
specifying other components (e.g. `stack test --skip long-test-suite` will run
the tests without the `long-test-suite` test suite). Be aware that skipping
executables won't work the first time the package is built due to an issue in
[Cabal](https://github.com/commercialhaskell/stack/issues/3229).

This option can be specified multiple times to skip multiple components.

### `--test` flag

Pass the flag to add test suite components to the targets, if specific
components are not identified. The `stack test` synonym sets this flag.

## Controlling when building occurs

### `--file-watch` flag

Pass the flag to rebuild your project every time a file changes. By default it
will take into account all files belonging to the targets you specify. See also
the `--watch-all` flag.

### `--file-watch-poll` flag

Like the `--file-watch` flag, but based on polling the file system instead of
using events to determine if a file has changed.

### `--watch-all` flag

[:octicons-tag-24: 2.5.1](https://github.com/commercialhaskell/stack/releases/tag/v2.5.1)

Pass the flag to rebuild your project every time any local file changes (from
project packages or from dependencies located locally). See also the
`--file-watch` flag.

## Controlling what happens after building

### `--benchmark-arguments`, `--ba` option

`stack build --bench --benchmark-arguments=<argument(s)>` will pass the
specified argument, or arguments, to each benchmark when it is run.

Specified arguments are separated by spaces. Arguments can be unquoted (if they
do not contain space or `"` characters) or quoted (`""`). Quoted arguments can
include 'escaped' characters, escaped with an initial `\` character.

Account may need to be taken of the shell's approach to the processing of
command line arguments. For example, to pass `'a single quoted string'`:

=== "Unix-like (Bash or Zsh)"

    In Bash, or Zsh (if `RC_QUOTES` option not set):

    `stack bench --benchmark-arguments \"\''a single quoted string'\'\"`

    Outside of single quotes, `\"` escapes a double quote and `\'` escapes a
    single quote. The content of single quotes is taken literally, but cannot
    contain a single quote.

    In Zsh (if `RC_QUOTES` option set):

    `stack bench --benchmark-arguments '"''a single quoted string''"'`

    The content of single quotes is taken literally. Within single quotes, `''`
    escapes a single quote.

=== "Windows (PowerShell)"

    `stack bench --benchmark-arguments '"''a single quoted string''"'`

    The content of single quotes is taken literally. Within single quotes, `''`
    escapes a single quote.

### `--exec` option

`stack build --exec '<command> [<argument(s)>]'` will run the specified command
after a successful build.

Specified arguments are separated by spaces. Arguments can be unquoted (if they
do not contain space or `"` characters) or quoted (`""`). Quoted arguments can
include 'escaped' characters, escaped with an initial `\` character.

Account may need to be taken of the shell's approach to the processing of
command line arguments. For example, to pass `'a single quoted string'`:

=== "Unix-like (Bash or Zsh)"

    In Bash, or Zsh (if `RC_QUOTES` option not set):

    `stack build --exec '<command> '\"\''a single quoted string'\'\"`

    Outside of single quotes, `\"` escapes a double quote and `\'` escapes a
    single quote. The content of single quotes is taken literally, but cannot
    contain a single quote.

    In Zsh (if `RC_QUOTES` option set):

    `stack build --exec '<command> "''a single quoted string''"'`

    The content of single quotes is taken literally. Within single quotes, `''`
    escapes a single quote.

=== "Windows (PowerShell)"

    `stack build --exec '<command> "''a single quoted string''"'`

    The content of single quotes is taken literally. Within single quotes, `''`
    escapes a single quote.

### `--test-arguments`, `--ta` option

`stack build --test --test-arguments=<argument(s)>` will pass the specified
argument, or arguments, to each test when it is run. This option can be
specified multiple times.

Specified arguments are separated by spaces. Arguments can be unquoted (if they
do not contain space or `"` characters) or quoted (`""`). Quoted arguments can
include 'escaped' characters, escaped with an initial `\` character.

Account may need to be taken of the shell's approach to the processing of
command line arguments. For example, to pass `'a single quoted string'`:

=== "Unix-like (Bash or Zsh)"

    In Bash, or Zsh (if `RC_QUOTES` option not set):

    `stack test --test-arguments \"\''a single quoted string'\'\"`

    Outside of single quotes, `\"` escapes a double quote and `\'` escapes a
    single quote. The content of single quotes is taken literally, but cannot
    contain a single quote.

    In Zsh (if `RC_QUOTES` option set):

    `stack bench --benchmark-arguments '"''a single quoted string''"'`

    The content of single quotes is taken literally. Within single quotes, `''`
    escapes a single quote.

=== "Windows (PowerShell)"

    `stack test --test-arguments '"''a single quoted string''"'`

    The content of single quotes is taken literally. Within single quotes, `''`
    escapes a single quote.

## Flags affecting GHC's behaviour

### `--[no-]executable-profiling` flag

Default: Disabled

Set the flag to enable executable profiling for TARGETs and all its
dependencies.

The flag affects the location of the local project installation directory. See
the [`stack path --local-install-root`](path_command.md) command.

### `--[no-]executable-stripping` flag

Default: Enabled

Unset the flag to disable executable stripping for TARGETs and all its
dependencies.

The flag may affect the location of the local project installation directory.
See the [`stack path --local-install-root`](path_command.md) command.

### `--fast` flag

GHC has many flags that specify individual optimisations of the compiler. GHC
also uses its `-O*` flags to specify convenient 'packages' of GHC optimisation
flags. GHC's flags are evaluated from left to right and later flags can override
the effect of earlier ones.

If no GHC `-O*` type flag is specified, GHC takes that to mean "Please
compile quickly; I'm not over-bothered about compiled-code quality." GHC's `-O0`
flag reverts to the same settings as if no `-O*` flags had been specified.

Pass Stack's `--fast` flag to add `-O0` to the flags and options passed to GHC.
The effect of `--fast` can be overriden with Stack's
[`--ghc-options`](#-ghc-options-option) command line options.

!!! note

    With one exception, GHC's `-O` flag is always passed to GHC first (being
    Cabal's default behaviour). The exception is if Cabal's
    `--disable-optimization` flag or `--enable-optimization[=n]`, `-O[n]`
    options are used during the configure step of the Cabal build process; see
    Stack's [`configure-options`](yaml_configuration.md#configure-options) YAML
    configuration option.

### `--ghc-options` option

GHC command line options can be specified for a package in its Cabal file
(including one created from a `package.yaml` file). This option augments and, if
applicable (see below), overrides any such GHC command line options and those
specified in Stack's YAML configuration files - see the
[`ghc-options`](yaml_configuration.md#ghc-options) configuration option.

`stack build --ghc-options <ghc_options>` passes the specified command line
options to GHC, depending on Stack's
[`apply-ghc-options`](yaml_configuration.md#apply-ghc-options) YAML
configuration option. This option can be specified multiple times.

GHC's command line options are _order-dependent_ and evaluated from left to
right. Later options can override the effect of earlier ones. Any GHC command
line options for a package specified at Stack's command line are applied after
those specified in Stack's YAML configuration files.

### `--[no-]library-profiling` flag

Default: Disabled

Set the flag to enable library profiling for TARGETs and all its dependencies.

The flag affects the location of the local project installation directory. See
the [`stack path --local-install-root`](path_command.md) command.

### `--[no-]library-stripping` flag

Default: Enabled

Unset the flag to disable library stripping for TARGETs and all its
dependencies.

The flag may affect the location of the local project installation directory.
See the [`stack path --local-install-root`](path_command.md) command.

### `--pedantic` flag

Pass the flag to build your project with the GHC options `-Wall` and `-Werror`.
`-Wall` turns on all warning options that indicate potentially suspicious code.
`-Werror` makes any warning into a fatal error.

### `--profile` flag

Pass the flag to enable profiling in libraries, executables, etc. for all
expressions, and generate a profiling report in tests or benchmarks.

The flag affects the location of the local project installation directory. See
the [`stack path --local-install-root`](path_command.md) command.

### `--[no-]split-objs` flag

:octicons-beaker-24: Experimental

Default: Disabled

Set the flag to enable the GHC option `--split-objs`. This will reduce output
size (at the cost of build time).

!!! note

    The behaviour of this feature may be changed and improved. You will need to
    clean your project's Stack working directory before use. If you want to
    compile all dependencies with split-objs, you will need to delete the
    snapshot (and all snapshots that could reference that snapshot).

### `--no-strip` flag

Pass the flag to disable DWARF debugging symbol stripping in libraries,
executables, etc. for all expressions, producing larger executables but allowing
the use of standard debuggers/profiling tools/other utilities that use debugging
symbols.

The flag affects the location of the local project installation directory. See
the [`stack path --local-install-root`](path_command.md) command.

### `--trace` flag

Pass the flag to enable profiling in libraries, executables, etc. for all
expressions, and generate a backtrace on exception.

The flag affects the location of the local project installation directory. See
the [`stack path --local-install-root`](path_command.md) command.

## Flags affecting other tools' behaviour

### `--PROG-option` options

[:octicons-tag-24: 2.11.1](https://github.com/commercialhaskell/stack/releases/tag/v2.11.1)

`PROG` is a program recognised by Cabal (the library) and one of `alex`, `ar`,
`c2hs`, `cpphs`, `gcc`, `greencard`, `happy`, `hsc2hs`, `hscolour`, `ld`,
`pkg-config`, `strip` and `tar`.

`stack build --PROG-option <PROG_argument>` passes the specified command line
argument to `PROG`, if it used by Cabal during the configuration step. This
option can be specified multiple times. For example, if the program `happy` is
used by Cabal during the configuration step, you could command
`stack build --happy-option=--ghc` or `stack build --happy-option --ghc` to pass
to `happy` its `--ghc` flag.

By default, all and any `--PROG-option` options on Stack's command line are
applied to all project packages (targets or otherwise). This behaviour can be
changed. See the
[`apply-prog-options`](yaml_configuration.md#apply-prog-options) configuration
option.

Stack can also be configured to pass Cabal's `--PROG-option`, `--PROG-options`
or other options to Cabal during the configuration step. For further
information, see the documentation for the
[configure-options](yaml_configuration.md#configure-options) configuration
option.

## Flags relating to build outputs

### `--[no]-cabal-verbose` flag

Default: Disabled

Set the flag to enable verbose output from Cabal (the library). This flag is an
alternative to the `--cabal-verbosity` option.

### `--[no]-cabal-verbosity` option

`stack build --cabal-verbosity <verbosity_level>` sets the specified verbosity
level for output from Cabal (the library). It accepts Cabal's numerical and
extended syntax. This option is an alternative to setting the `--cabal-verbose`
flag.

### `--[no-]copy-bins` flag

[:octicons-tag-24: 0.1.3.0](https://github.com/commercialhaskell/stack/releases/tag/v0.1.3.0)

Default: Disabled

Set the flag to enable copying of built executable files (binaries) of targets
to Stack's local binary directory (see `stack path --local-bin`). The
`stack install` synonym sets this flag.

### `--[no-]copy-compiler-tool` flag

[:octicons-tag-24: 1.6.1](https://github.com/commercialhaskell/stack/releases/tag/v1.6.1)

Default: Disabled

Set the flag to enable copying of built executable files (binaries) of targets
to Stack's compiler tools binary directory (see
`stack path --compiler-tools-bin`).

### `--coverage` flag

Pass the flag to generate a code coverage report. For further information, see
the [code coverage](hpc_command.md) documentation.

### `--ddump-dir` option

GHC has a number of `ddump-*` flags and options to allow dumping out of
intermediate structures produced by the compiler. They include the
`-ddump-to-file` flag that causes the output from other flags to be dumped to a
file or files.

`stack build --ddump_dir <relative_directory>` causes Stack to copy `*.dump-*`
files to subdirectories of the specified directory, which is relative to Stack's
working directory for the project.

For example:

~~~text
stack build --ghc-options "-ddump-to-file -ddump-timings" --ddump-dir my-ddump-dir
~~~

### `--[no-]interleaved-output` flag

[:octicons-tag-24: 2.1.1](https://github.com/commercialhaskell/stack/releases/tag/v2.1.1)

Default: Enabled

Set the flag for interleaved output. With interleaved output, each line of
output from each package being built (targets and dependencies) is sent to the
console as it happens and output relating to different packages can be
interleaved. Each line will be prefixed with the name of the relevant package.
The spacing between the prefix and the output will be set based on the longest
relevant package name, so that the start of the output itself aligns. For
example (extract):

~~~text
hpack            > build
mustache         > configure
hpack            > Preprocessing library for hpack-0.35.0..
hpack            > Building library for hpack-0.35.0..
mustache         > Configuring mustache-2.4.1...
hpack            > [ 1 of 29] Compiling Data.Aeson.Config.Key
hpack            > [ 2 of 29] Compiling Data.Aeson.Config.KeyMap
mustache         > build
hpack            > [ 3 of 29] Compiling Data.Aeson.Config.Util
mustache         > Preprocessing library for mustache-2.4.1..
mustache         > Building library for mustache-2.4.1..
hpack            > [ 4 of 29] Compiling Hpack.Haskell
hpack            > [ 5 of 29] Compiling Hpack.Utf8
mustache         > [1 of 8] Compiling Paths_mustache
hpack            > [ 6 of 29] Compiling Imports
hpack            > [ 7 of 29] Compiling Hpack.Util
mustache         > [2 of 8] Compiling Text.Mustache.Internal
~~~

Unset the flag for non-interleaved output. With non-interleaved output, the
build output from GHC (as opposed to from Stack) in respect of dependencies is
ignored. The behaviour then depends whether there is one target package or more
than one. There can be one target if the project has a single package or if one
package is targetted in a multi-package project (for example, using
`stack build <package_name>`).

* **One target package:** The build output for the target package is sent to the
  standard error stream of the console as it happens.

* **More than one target package:** The build output from GHC (as opposed to
  from Stack) for each target package is sent to a log file for that package,
  unless an error occurs that prevents that. If color in output is in use, there
  will be two files, one with extension `.log` without color codes and one with
  extension `.log-color` with color codes. At the end of the build, the location
  of the directory containing the log files is reported. To also output the
  contents of the log files to the standard error output stream of the console
  at the end of the build, use Stack's `dump-logs` option. For further
  information about that option, see the
  [YAML configuration](yaml_configuration.md#dump-logs) documentation. The
  default `dump-logs` mode is to output the contents of any log files that
  include GHC warnings.

### `--[no]-open` flag

Default: Disabled

Set the flag to enable opening the local Haddock documentation in the browser.

## Other flags and options

### `--[no]-prefetch` flag

Default: Disabled

Set the flag to enable fetching packages necessary for the build immediately.
This can be useful with `stack build --dry-run`.

### `--progress-bar` option

[:octicons-tag-24: 2.13.1](https://github.com/commercialhaskell/stack/releases/tag/v2.13.1)

Default: `capped`

`stack build --progress-bar <format>` sets the format of the progress bar, where
`<format>` is one of `none` (no bar), `count-only` (only the package count is
displayed), `capped` (the bar showing package builds in progress is capped to a
length equal to the terminal width), and `full` (the bar is uncapped). On
terminals where 'backspace' has no effect if the cursor is in the first column,
bars longer than the terminal width will not be 'sticky' at the bottom of the
screen.

### `--tests-allow-stdin` flag

[:octicons-tag-24: 2.9.3](https://github.com/commercialhaskell/stack/releases/tag/v2.9.3)

Default: Enabled

Cabal defines a test suite interface
['exitcode-stdio-1.0'](https://hackage.haskell.org/package/Cabal-syntax-3.8.1.0/docs/Distribution-Types-TestSuiteInterface.html#v:TestSuiteExeV1.0)
where the test suite takes the form of an executable and the executable takes
nothing on the standard input stream (`stdin`). Pass this flag to override that
specification and allow the executable to receive input on that stream. If you
pass `--no-tests-allow-stdin` and the executable seeks input on the standard
input stream, an exception will be thown.

## Examples

All the following examples assume that:

*   if `stack build` is commanded outside of a project directory, there is no
    `stack.yaml` file in the current directory or ancestor directory and,
    consequently, the project-level configuration will be determined by a
    `stack.yaml` file in the `global-project` directory in the
    [Stack root](stack_root.md) (for further information, see the
    [YAML configuration](yaml_configuration.md) documentation); and

*   if `stack build` is commanded in a project directory, there is a
    `stack.yaml` file in that directory.

Examples:

*   In the project directory, `stack build --test --copy-bins` or, equivalently,
    `stack test --copy-bins` or `stack install --test`, will build libraries,
    executables, and test suites, run the test suites, and then copy the
    executables to Stack's local binary directory (see
    `stack path --local-bin`). This is an example of the flags composing.

*   The following example uses a clone of the
    `wai` [repository](https://github.com/yesodweb/wai/). The `wai` project
    comprises a number of packages, including `wai-extra` and `warp`. In the
    `wai` project directory, the command:

    ~~~text
    stack build --file-watch --test --copy-bins --haddock wai-extra :warp warp:doctest --exec 'echo Yay, it worked!'
    ~~~

    will start Stack up in file watch mode, waiting for files in your project to
    change. When first starting, and each time a file changes, it will do all of
    the following.

    *   Build the `wai-extra` package and its test suites
    *   Build the `warp` executable
    *   Build the `warp` package's `doctest` component (which is a test site)
    *   Run all of the `wai-extra` package's test suite components and the
        `doctest` test suite component
    *   If all of that succeeds:
          * Copy generated executables to Stack's local binary directory (see
            `stack path --local-bin`)
          * Run the command `echo Yay, it worked!`

*   The following example uses the `Adga` package and assumes that `Adga-2.6.3`
    is the latest version in the package index (e.g. Hackage) and is not a
    version in the snapshot specified by the `stack.yaml` in the
    `global-project` directory in the Stack root.

    Outside a project directory, `stack build Adga-2.6.3 --copy-bins` or,
    equivalently, `stack install Agda-2.6.3`, will attempt to build the
    libraries and executables of the identified version of the package in the
    package index (using the `stack.yaml` file in the `global-project`
    directory in the Stack root), and then copy the executables to Stack's local
    binary directory (see `stack path --local-bin`).

    If a different snapshot is required to build the identified version of the
    package, then that can be specified at the command line. For example, to use
    the most recent Stackage Nightly snapshot:

    ~~~text
    stack --snapshot nightly install Agda-2.6.3
    ~~~

    Alternatively, Stack can be used to unpack the package from the package
    index into a local project directory named after the package identifier (for
    further infomation, see the [`stack unpack` command](unpack_command.md)
    documentation) and, if the package does not provide its own Stack
    configuration file (`stack.yaml`, by default), to attempt to initialise that
    configuration (for further information, see the
    [`stack init` command](init_command.md) documentation). For example:

    ~~~text
    stack unpack Agda-2.6.3
    cd Agda-2.6.3  # Change to the project directory
    stack init     # Attempt to create a project stack.yaml file
    stack install  # Equivalent to stack build --copy-bins
    ~~~


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/clean_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack clean` command

Either

~~~text
stack clean [PACKAGE]
~~~

or

~~~text
stack clean --full
~~~

`stack clean` deletes build artefacts for one or more project packages specified
as arguments. If no project packages are specified, all project packages are
cleaned.

`stack clean --full` deletes the project's Stack working directory.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/config_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack config` commands

~~~text
stack config COMMAND

Available commands:
  env                      Print environment variables for use in a shell
  set                      Sets a key in YAML configuration file to value
~~~

The `stack config` commands provide assistance with accessing or modifying
Stack's configuration. See `stack config` for the available commands.

## The `stack config env` command

~~~text
stack config env [--[no-]locals] [--[no-]ghc-package-path] [--[no-]stack-exe]
                 [--[no-]locale-utf8] [--[no-]keep-ghc-rts]
~~~

`stack config env` outputs a script that sets or unsets environment variables
for a Stack environment. Flags modify the script that is output:

* `--[no-]locals` (enabled by default) include/exclude project package
  information
* `--[no-]ghc-package-path` (enabled by default) set `GHC_PACKAGE_PATH`
  environment variable or not
* `--[no-]stack-exe` (enabled by default) set `STACK_EXE` environment variable
  or not
* `--[no-]locale-utf8` (disabled by default) set the `GHC_CHARENC`
  environment variable to `UTF-8` or not
* `--[no-]keep-ghc-rts` (disabled by default) keep/discard any `GHCRTS`
  environment variable

The command also accepts flags and options of the
[`stack build`](build_command.md#flags-affecting-ghcs-behaviour) command that
affect the location of the local project installation directory, such as
`--profile` and `--no-strip`. For further information, see the documentation of
the [project Stack work directory](stack_work.md#project-stack-work-directory).

## The `stack config set` commands

~~~text
stack config set COMMAND

Available commands:
  install-ghc              Configure whether or not Stack should automatically
                           install GHC when necessary.
  package-index            Configure Stack's package index
  recommend-stack-upgrade  Configure whether or not Stack should notify the user
                           if it identifes a new version of Stack is available.
  resolver                 Change the snapshot of the current project, using the
                           resolver key.
  snapshot                 Change the snapshot of the current project.
  system-ghc               Configure whether or not Stack should use a system
                           GHC installation.
~~~

The `stack config set` commands allow the values of keys in YAML configuration
files to be set. See `stack config set` for the available keys.

## The `stack config set install-ghc` command

~~~text
stack config set install-ghc [--global] true|false
~~~

`stack config set install-ghc true` or `false` sets the
[`install-ghc`](yaml_configuration.md#install-ghc) key in a YAML configuration
file, accordingly. By default, the project-level configuration file
(`stack.yaml`, by default) is altered. The `--global` flag specifies the
user-specific global configuration file (`config.yaml`).

## The `stack config set package-index download-prefix` command

[:octicons-tag-24: 2.9.3](https://github.com/commercialhaskell/stack/releases/tag/v2.9.3)

~~~text
stack config set package-index download-prefix [--global] [URL]
~~~

`stack config set package-index download-prefix <url>` sets the
`download-prefix` key of the
[`package-index`](yaml_configuration.md#package-index) key in a YAML
configuration file, accordingly. By default, the project-level configuration
file (`stack.yaml`, by default) is altered. The `--global` flag specifies the
user-specific global configuration file (`config.yaml`).

## The `stack config set recommend-stack-upgrade` command

~~~text
stack config set recommend-stack-upgrade [--project] true|false
~~~

`stack config set recommend-stack-upgrade true` or `false` sets the
[`recommend-stack-upgrade`](yaml_configuration.md#recommend-stack-upgrade) key
in a YAML configuration file, accordingly. By default, the user-specific global
configuration file (`config.yaml`) is altered. The `--project` flag specifies
the project-level configuration file (`stack.yaml`, by default).

## The `stack config set resolver` command

~~~text
stack config set resolver SNAPSHOT
~~~

A command corresponding to the
[`stack config set snapshot` command](#the-stack-config-set-snapshot-command)
but using the `resolver` key instead of the `snapshot` key.

## The `stack config set snapshot` command

[:octicons-tag-24: 2.15.1](https://github.com/commercialhaskell/stack/releases/tag/v2.15.1)

~~~text
stack config set snapshot SNAPSHOT
~~~

`stack config set snapshot <snapshot>` sets the
[`snapshot`](yaml_configuration.md#snapshot) key in the project-level
configuration file (`stack.yaml`, by default) to the specified snapshot.

A snapshot of `lts` or `nightly` will be translated into the most recent
available. A snapshot of `lts-22` will be translated into the most recent
available in the `lts-22` sequence.

If a `resolver` key is present, it will be replaced by a `snapshot` key.

## The `stack config set system-ghc` command

~~~text
stack config set system-ghc [--global] true|false
~~~

`stack config set system-ghc true` or `false` sets the
[`system-ghc`](yaml_configuration.md#system-ghc) key in a YAML configuration
file, accordingly. By default, the project-level configuration file
(`stack.yaml`, by default) is altered. The `--global` flag specifies the
user-specific global configuration file (`config.yaml`).


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/docker_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack docker` commands

~~~text
stack docker COMMAND

Available commands:
  pull                     Pull latest version of Docker image from registry
  reset                    Reset the Docker sandbox
~~~

Stack is able to build your code inside a Docker image, which means even more
reproducibility to your builds, since you and the rest of your team will always
have the same system libraries.

For further information, see the [Docker integration](docker_integration.md)
documentation.

## The `stack docker pull` command

~~~text
stack docker pull
~~~

`stack docker pull` pulls the latest version of the Docker image from the
registry.

## The `stack docker reset` command

~~~text
stack docker reset [--keep-home]
~~~

`stack docker reset` resets the Docker sandbox.

Pass the flag `--keep-home` to preserve the sandbox's home directory.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/dot_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack dot` command

~~~text
stack dot [--[no-]external] [--[no-]include-base] [--depth DEPTH]
          [--prune PACKAGES] [TARGET] [--flag PACKAGE:[-]FLAG]
          [--test] [--bench] [--global-hints]
~~~

A package and its dependencies and the direct dependency relationships between
them form a directed graph. [Graphviz](https://www.graphviz.org/) is open source
software that visualises graphs. It provides the DOT language for defining
graphs and the `dot` executable for drawing directed graphs. Graphviz is
available to [download](https://www.graphviz.org/download/) for Linux, Windows,
macOS and FreeBSD.

`stack dot` produces output, to the standard output stream, in the DOT language
to represent the relationships between your packages and their dependencies.

By default:

* external dependencies are excluded from the output. Pass the flag
  `--external` to include external dependencies;
* the `base` package and its dependencies are included in the output. Pass the
  flag `--no-include-base` to exclude `base` and its dependencies;
* there is no limit to the depth of the resolution of dependencies. Pass the
  `--depth <depth>` option to limit the depth;
* all relevant packages are included in the output. Pass the
  `--prune <packages>` option to exclude the specified packages, where
  `<packages>` is a list of package names separated by commas;
* all packages in the project are included in the output. However, the target
  for the command can be specified as an argument. It uses the same format
  as the [`stack build` command](build_command.md);
* test components of the packages in the project are excluded from the output.
  Pass the flag `--test` to include test components; and
* benchmark components of the packages in the project are excluded from the
  output. Pass the flag `--bench` to include benchmark components.git p

Pass the option `--flag <package_name>:<flag_name>` or
`--flag <package_name>:-<flag_name>` to set or unset a Cabal flag. This
option can be specified multiple times.

Pass the flag `--global-hints` to use a hint file for global packages. If a hint
file is used, GHC does not need to be installed.

## Examples

The following examples are based on a version of the
[`wreq` package](https://hackage.haskell.org/package/wreq). In each case, the
output from `stack dot` is piped as an input into Graphviz's `dot` executable,
and `dot` produces output in the form of a PNG file named `wreq.png`.

*   A simple example:

    ~~~text
    stack dot | dot -Tpng -o wreq.png
    ~~~

    [![wreq](https://cloud.githubusercontent.com/assets/591567/8478591/ae10a418-20d2-11e5-8945-55246dcfac62.png)](https://cloud.githubusercontent.com/assets/591567/8478591/ae10a418-20d2-11e5-8945-55246dcfac62.png)

*   Include external dependencies:

    ~~~text
    stack dot --external | dot -Tpng -o wreq.png
    ~~~

    [![wreq_ext](https://cloud.githubusercontent.com/assets/591567/8478621/d247247e-20d2-11e5-993d-79096e382abd.png)](https://cloud.githubusercontent.com/assets/591567/8478621/d247247e-20d2-11e5-993d-79096e382abd.png)

*   Include external dependencies, limit the depth and save the output from
    `stack dot` as an intermediate file (`wreq.dot`).

    ~~~text
    stack dot --external --depth 1 > wreq.dot
    dot -Tpng -o wreq.png wreq.dot
    ~~~

*   Include external dependencies, exclude `base` and limit the depth:

    ~~~text
    stack dot --no-include-base --external --depth 1 | dot -Tpng -o wreq.png
    ~~~

    [![wreq_depth](https://cloud.githubusercontent.com/assets/591567/8484310/45b399a0-20f7-11e5-8068-031c2b352961.png)](https://cloud.githubusercontent.com/assets/591567/8484310/45b399a0-20f7-11e5-8068-031c2b352961.png)

*   Include external dependencies and prune `base` and other packages:

    ~~~text
    stack dot --external --prune base,lens,wreq-examples,http-client,aeson,tls,http-client-tls,exceptions | dot -Tpng -o wreq.png
    ~~~

    [![wreq_pruned](https://cloud.githubusercontent.com/assets/591567/8478768/adbad280-20d3-11e5-9992-914dc24fe569.png)](https://cloud.githubusercontent.com/assets/591567/8478768/adbad280-20d3-11e5-9992-914dc24fe569.png)

*   Include external dependencies, prune `base` and other packages, and use a
    different Graphviz executable to draw the graph:

    Graphviz's `twopi` executable draws graphs in a radial layout.

    ~~~text
    stack dot --external --prune base,lens,wreq-examples,http-client,aeson,tls,http-client-tls,exceptions | twopi -Groot=wreq -Goverlap=false -Tpng -o wreq.png
    ~~~

    [![wreq_pruned](https://cloud.githubusercontent.com/assets/591567/8495538/9fae1184-216e-11e5-9931-99e6147f8aed.png)](https://cloud.githubusercontent.com/assets/591567/8495538/9fae1184-216e-11e5-9931-99e6147f8aed.png)


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/eval_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack eval` command

~~~text
stack eval CODE [--[no-]ghc-package-path] [--[no-]stack-exe]
           [--package PACKAGE] [--rts-options RTSFLAG] [--cwd DIR]
~~~

GHC has an
[expression-evaluation mode](https://downloads.haskell.org/ghc/latest/docs/users_guide/using.html#eval-mode),
set by passing the GHC option
`-e <expression>`. Commanding `stack eval <code>` is equivalent to commanding:

~~~text
stack exec ghc -- -e <code>
~~~

For further information, see the [`stack exec` command](exec_command.md)
documentation.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/exec_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack exec` command

~~~text
stack exec COMMAND
           [-- ARGUMENT(S) (e.g. stack exec ghc-pkg -- describe base)]
           [--[no-]ghc-package-path] [--[no-]stack-exe] [--package PACKAGE]
           [--rts-options RTSFLAG] [--cwd DIR]
~~~

`stack exec` executes the specified executable as a command in the Stack
environment. If an executable is not specified, the first argument after `--` is
taken to be the executable. Otherwise, all arguments after `--` are taken to be
command line arguments for the specified executable.

By default:

* the `GHC_PACKAGE_PATH` environment variable is set for the command's process.
  Pass the flag `--no-ghc-package-path` to not set the environment variable;

* the `STACK_EXE` environment variable is set for the command's process. Pass
  the flag `--no-stack-exe` to not set the environment variable; and

* the specified executable is executed in the current directory. Pass the option
  `--cwd <directory>` to execute the executable in the specified directory.

The option `--package <package>` has no effect for the `stack exec` command. For
further information about its use, see the [`stack ghc` command](ghc_command.md)
documentation or the [`stack runghc` command](runghc_command.md) documentation.

Pass the option `--rts-option <rts_flag(s)>` to specify a GHC RTS flag or option.
The option can be specified multiple times. All specified GHC RTS flags and
options are added to the arguments for the specified executable between
arguments `+RTS` and `-RTS`.

Specified GHC RTS flags and options are separated by spaces. Items can be
unquoted (if they do not contain space or `"` characters) or quoted (`""`).
Quoted items can include 'escaped' characters, escaped with an initial `\`
character.

Account may need to be taken of the shell's approach to the processing of
command line arguments. For example, to pass `'a single quoted string'`:

=== "Unix-like (Bash or Zsh)"

    In Bash, or Zsh (if `RC_QUOTES` option not set):

    `stack exec <command> -- \''a single quoted string'\'`

    Outside of single quotes, `\'` escapes a single quote. The content of single
    quotes is taken literally, but cannot contain a single quote.

    In Zsh (if `RC_QUOTES` option set):

    `stack exec <command> -- '''a single quoted string'''`

    The content of single quotes is taken literally. Within single quotes, `''`
    escapes a single quote.

=== "Windows (PowerShell)"

    `stack exec <command> -- '''a single quoted string'''`

    The content of single quotes is taken literally. Within single quotes, `''`
    escapes a single quote.

The command also accepts flags and options of the
[`stack build`](build_command.md#flags-affecting-ghcs-behaviour) command that
affect the location of the local project installation directory, such as
`--profile` and `--no-strip`. For further information, see the documentation of
the [project Stack work directory](stack_work.md#project-stack-work-directory).


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/ghc_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack ghc` command

~~~text
stack ghc [-- ARGUMENT(S) (e.g. stack ghc -- X.hs -o x)]
          [--[no-]ghc-package-path] [--[no-]stack-exe] [--package PACKAGE]
          [--rts-options RTSFLAG] [--cwd DIR]
~~~

`stack ghc` has the same effect as, and is provided as a shorthand for,
[`stack exec ghc`](exec_command.md), with the exception of the `--package`
option.

Pass the option `--package <package(s)>` to add the initial GHC argument
`-package-id=<unit_id>`, where `<unit_id>` is the unit ID of the specified
package in the installed package database. The option can be a list of package
names or package identifiers separated by spaces. The option can also be
specified multiple times. The approach taken to these packages is the same as if
they were specified as targets to
[`stack build`](build_command.md#target-syntax).


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/hoogle_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack hoogle` command

~~~text
stack hoogle [-- ARGUMENT(S) (e.g. 'stack hoogle -- server --local')]
             [--[no-]setup] [--rebuild] [--server]
~~~

Hoogle is a Haskell API search engine. `stack hoogle` runs Hoogle. Stack needs
Hoogle version 5 or greater.

Stack will use a Hoogle database (`database.hoo`) specific to the project's
source map and the version of GHC, located in a subdirectory of subdirectory
`hoogle` of Stack's work directory for the project.

By default:

*   if a `hoogle` executable is found on the `PATH`, Stack will try to use it.
    Otherwise, Stack will try to identify an executable as a build target. If
    the Hoogle database does not exist, Stack will generate it with
    `hoogle generate --local`. `hoogle generate --local` queries `ghc-pkg` and
    generates links for all packages which have documentation and Hoogle input
    files (`*.txt`) generated. Pass the flag `--no-setup` to skip such setup;

*   the existing Hoogle database is used. Pass the flag `--rebuild` to trigger
    the generation of a new Hoogle database (generated as above); and

*   `hoogle` is passed the specified arguments (if any). The arguments are
    usually the subject of the search. Pass the flag `--server` to first pass
    `server --local --port 8080` before those arguments.
    `hoogle server --local --port 8080` starts a local Hoogle web server, using
    port 8080, that allows the following of `file://` links.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/hpc_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack hpc` commands

~~~text
stack hpc COMMAND

Available commands:
  report                   Generate unified HPC coverage report from tix files
                           and project targets
~~~

Code coverage is a measure of the degree to which the source code of a program
is executed when a test suite is run.
[Haskell Program Coverage (HPC)](https://ku-fpg.github.io/software/hpc/) is a
code coverage tool for Haskell that is provided with GHC. Code coverage is
enabled by passing the flag `--coverage` to `stack build`.

`stack hpc` provides commands specific to HPC. Command `stack hpc` for the
available commands.

The following refers to the local HPC root directory. Its location can be
obtained by command:

~~~text
stack path --local-hpc-root
~~~

## The `stack hpc report` command

~~~text
stack hpc report [TARGET_OR_TIX] [--all] [--destdir DIR] [--open]
~~~

The `stack hpc report` command generates a report for a selection of targets and
`.tix` files.

Pass the flag `--all` for a report that uses all stored results.

Pass the flag `--open` to open the HTML report in your browser.

## The `extra-tix-files` directory

During the execution of the build, you can place additional tix files in the
`extra-tix-files` subdirectory in the local HPC root directory, in order for
them to be included in the unified report. A couple caveats:

1.  These tix files must be generated by executables that are built against the
    exact same library versions. Also note that, on subsequent builds with
    coverage, the local HPC root directory will be recursively deleted. It
    just stores the most recent coverage data.

2.  These tix files will not be considered by `stack hpc report` unless listed
    explicitly by file name.

## Examples

If we have three different packages with test suites, packages `A`, `B`, and
`C`, the default unified report will have coverage from all three. If we want a
unified report with just two, we can instead command:

~~~text
stack hpc report A B
~~~

This will output to the standard output stream a summary report for the combined
coverage from `A` and `B`'s test suites. It will also log the path to the HTML
for the corresponding full report.

This command also supports taking extra `.tix` files.  If you've also built an
executable, against exactly the same library versions of `A`, `B`, and `C`, then
you could command the following:

~~~text
stack exec -- an-exe
stack hpc report A B C an-exe.tix
~~~

or, equivalently:

~~~text
stack exec -- an-exe
stack hpc report --all an-exe.tix
~~~

This report will consider all test results as well as the newly generated
`an-exe.tix` file.

## Usage

`stack test --coverage` is quite streamlined for the following use-case:

1.  You have test suites which exercise your project packages.

2.  These test suites link against your library, rather than building the
    library directly. Coverage information is only given for libraries, ignoring
    the modules which get compiled directly into your executable. A common case
    where this doesn't happen is when your test suite and library both have
    something like `hs-source-dirs: src/`. In this case, when building your test
    suite you may also be compiling your library, instead of just linking
    against it.

When your project has these properties, you will get the following:

1.  Summary coverage reports, sent to the standard output stream in the build
    output, and a log of the paths to the HTML for the corresponding full
    reports.

2.  A summary unified report, sent to the standard output stream, and a log of
    the path to the HTML for the corresponding full report. These reports
    consider the coverage on all local libraries, based on all of the tests that
    were run.

3.  An index of all generated HTML reports, in `index.html` in the local
    HPC root directory, and a log of the path to the HTML for that index.

## Implementation details

Most users can get away with just understanding the above documentation.
However, advanced users may want to understand exactly how `--coverage` works:

1. The GHC option `-fhpc` gets passed to all project packages. This tells GHC to
   output executables that track coverage information and output them to `.tix`
   files. `the-exe-name.tix` files will get written to the working directory of
   the executable.

   When switching on this flag, it will usually cause all project packages to be
   rebuilt (see issue
   [#1940](https://github.com/commercialhaskell/stack/issues/1940)).

2. Before the build runs with `--coverage`, the contents of the local HPC root
   directory gets deleted. This prevents old reports from getting mixed
   with new reports. If you want to preserve report information from multiple
   runs, copy the contents of this path to a new directory.

3. Before a test run, if a `test-name.tix` file exists in the package directory,
   it will be deleted.

4. After a test run, it will expect a `test-name.tix` file to exist. This file
   will then get loaded, modified, and outputted to
   `pkg-name/test-name/test-name.tix` in the local HPC root directory.

   The `.tix` file gets modified to remove coverage file that isn't associated
   with a library. So, this means that you won't get coverage information for
   the modules compiled in the `executable` or `test-suite` stanza of your Cabal
   file. This makes it possible to directly union multiple `*.tix` files from
   different executables (assuming they are using the exact same versions of the
   project packages).

   If there is enough popular demand, it may be possible in the future to give
   coverage information for modules that are compiled directly into the
   executable. See issue
   [#1359](https://github.com/commercialhaskell/stack/issues/1359).

5. Once we have a `.tix` file for a test, we also generate a summary report and
   a corresponding full report using HTML. The summary report is sent to the
   standard output stream. The index of the test-specific HTML report is
   available at `pkg-name/test-name/index.html` in the local HPC root directory.

6. After the build completes, if there are multiple output `*.tix` files, they
   get combined into a unified report. The index of this report will be
   available at `combined/all/index.html` in the local HPC root directory.

7. Finally, an index of the resulting coverage reports is generated. It links to
   the individual coverage reports (one for each test-suite), as well as the
   unified report. This index is available at `index.html` in the local HPC root
   directory.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/ide_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack ide` commands

~~~text
stack ide COMMAND

Available commands:
  packages                 List all available local loadable packages
  targets                  List all available Stack targets
~~~

The `stack ide` commands provide information that may be of use in an
integrated development environment (IDE). See `stack ide` for the available
commands.

## The `stack ide packages` command

~~~text
stack ide packages [--stdout] [--cabal-files]
~~~

`stack ide packages` lists all available project packages that are loadable.

By default:

* its output is sent to the standard error stream. Pass the flag `--stdout` to
  change to the standard output stream; and
* the output is the package name (without its version). Pass the flag
  `--cabal-files` to change to the full path to the package's Cabal file.

## The `stack ide targets` command

~~~text
stack ide targets [--exes] [--tests] [--benchmarks] [--stdout]
~~~

`stack ide targets` lists all available Stack targets. Alternatively, pass one
or more of the flags `--exes`, `--tests` and `--benchmarks` to list only targets
of those component types.

By default, its output is sent to the standard error stream. Pass the flag
`--stdout` to change to the standard output stream.

For example, for the Stack project itself, command:

~~~text
cd stack
stack ide targets
~~~

and the output from the second command is:

~~~text
stack:lib
stack:exe:stack
stack:exe:stack-integration-test
stack:test:stack-unit-test
~~~

or command:

~~~text
stack ide targets --exes
~~~

and the output is:

~~~text
stack:exe:stack
stack:exe:stack-integration-test
~~~


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/init_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack init` command

~~~text
stack init [DIR(S)] [--omit-packages] [--force] [--ignore-subdirs]
~~~

`stack init` initialises Stack's default project-level YAML configuration file
(`stack.yaml`) for an existing project, based on the Cabal file or
`package.yaml` file for each of its packages.

By default:

* Stack searches for Cabal and `package.yaml` files in the current directory.
  Specify one or more directories as arguments to cause Stack to search them;

* Stack also searches for Cabal and `package.yaml` files in subdirectories. Pass
  the flag `--ignore-subdirs` to ignore subdirectories;

* Stack will not overwrite an existing `stack.yaml` file. Pass the flag
  `--force` to allow overwriting; and

* Stack will not initialise if there are conflicting or incompatable user
  packages. Pass the flag `--omit-packages` to cause Stack to ignore such
  matters while initialising.

If a snapshot is specified at the command line, `stack init` will try to use it.
For further information, see the documentation for the
[`--snapshot`](global_flags.md#-snapshot-option) and
[`--resolver`](global_flags.md#-resolver-option) options.

Otherwise, `stack init` will try to use the following Stackage snapshots in
order of preference, using the first that is compatable: the most recent LTS
Haskell, the most recent Stackage Nightly, and other LTS Haskell (most recent
first).

!!! note

    If Cabal (the tool) has been used in the directory, consider commanding
    `cabal clean` before applying `stack init`, in case Cabal has created any
    unintended Cabal files.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/list_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack list` command

[:octicons-tag-24: 2.7.1](https://github.com/commercialhaskell/stack/releases/tag/v2.7.1)

~~~text
stack list [PACKAGE]
~~~

`stack list <package_name>` will send to the standard output stream the latest
version of the package from Hackage. If the package name cannot be found on
Hackage, even after updating the package index, suggestions (not  necessarily
good ones) will be made about the intended package name.

`stack --snapshot <snapshot> list <package_name>` will send to the standard
output stream the version of the package in the specified snapshot, unless the
package comes with GHC on Unix-like operating systems. If the package name
cannot be found in the snapshot, the command will fail, identifying only the
package(s) that did not appear in the snapshot.

More than one package name can be specified.

`stack --snapshot <snapshot> list` will send to the standard output stream a
list of all the packages in the specified snapshot, except those which come with
GHC on Unix-like operating systems.

For example:

~~~text
stack list base unix Win32 acme-missiles pantry
base-4.19.0.0
unix-2.8.5.0
Win32-2.13.4.0
acme-missiles-0.3
pantry-0.9.3.1

stack list paltry
Could not find package paltry, updating
...
Package index cache populated
Error: [S-4926]
       * Could not find package paltry on Hackage. Perhaps you meant one of:
         pantry, pretty, pasty, xattr, alloy, para, pappy, alure, polar and
         factory.

stack --snapshot lts-22.7 list base unix Win32 acme-missiles pantry
Error: [S-4926]
       * Package does not appear in snapshot: base.
       * Package does not appear in snapshot: unix.
       * Package does not appear in snapshot: Win32.
       * Package does not appear in snapshot: acme-missiles.

stack --snapshot lts-22.7 list pantry
pantry-0.9.3.1

stack --snapshot lts-22.7 list
AC-Angle-1.0
ALUT-2.4.0.3
...
zstd-0.1.3.0
zxcvbn-hs-0.3.6
~~~


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/ls_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack ls` commands

~~~text
stack ls COMMAND

Available commands:
  dependencies             View the dependencies
  snapshots                View snapshots (local by default)
  stack-colors             View Stack's output styles
  stack-colours            View Stack's output styles (alias for 'stack-colors')
  tools                    View Stack's installed tools
~~~

The `stack ls` commands list different types of information. Command `stack ls`
for the available commands.

## The `stack ls dependencies` command

Either

~~~text
stack ls dependencies COMMAND

Available commands:
  cabal                    Print dependencies as exact Cabal constraints
  json                     Print dependencies as JSON
  text                     Print dependencies as text (default)
  tree                     Print dependencies as tree
~~~

or

~~~text
stack ls dependencies [--separator SEP] [--[no-]license] [--filter ITEM]
                      [--[no-]external] [--[no-]include-base] [--depth DEPTH]
                      [--prune PACKAGES] [TARGET] [--flag PACKAGE:[-]FLAG]
                      [--test] [--bench] [--global-hints]
~~~

`stack ls dependencies` lists all of the packages and versions used for a
project. All project packages are considered by default, but a target can be
specified as an argument. For further information, see the
[target syntax](build_command.md#target-syntax) documentation.

Subcommands specify the format of the output, as follows:

*   `cabal` lists the packages in the format of exact Cabal constraints.

    ~~~text
    stack ls dependencies cabal [--[no-]external] [--[no-]include-base]
                                [--depth DEPTH] [--prune PACKAGES] [TARGET]
                                [--flag PACKAGE:[-]FLAG] [--test] [--bench]
                                [--global-hints]
    ~~~

    For example (extract):

    ~~~text
    constraints:
    , Cabal ==3.6.3.0
    , Cabal-syntax ==3.6.0.0
    , Glob ==0.10.2
    ~~~

*   `json` lists dependencies in JSON format (an array of objects).

    ~~~text
    stack ls dependencies json [--[no-]external] [--[no-]include-base]
                               [--depth DEPTH] [--prune PACKAGES] [TARGET]
                               [--flag PACKAGE:[-]FLAG] [--test] [--bench]
                               [--global-hints]
    ~~~

    For example (extract):

    ~~~text
    [{"dependencies":["base","bytestring"],"license":"BSD3","location":{"type":"hackage","url":"https://hackage.haskell.org/package/zlib-0.6.3.0"},"name":"zlib","version":"0.6.3.0"},
    ~~~

    Each object has the following keys:

    ~~~json
    name: zlib
    version: 0.6.3.0
    location:
      type: hackage
      url: https://hackage.haskell.org/package/zlib-0.6.3.0
    licence: BSD3
    dependencies:
    - base
    - bytestring
    ~~~

*   `text` (the default) lists the packages, each on a separate line.

    ~~~text
    stack ls dependencies text [--separator SEP] [--[no-]license] [--filter ITEM]
                               [--[no-]external] [--[no-]include-base]
                               [--depth DEPTH] [--prune PACKAGES] [TARGET]
                               [--flag PACKAGE:[-]FLAG] [--test] [--bench]
                               [--global-hints]
    ~~~

    For example (extract):

    ~~~text
    Cabal 3.6.3.0
    Cabal-syntax 3.6.0.0
    Glob 0.10.2
    ~~~

*   `tree` lists dependencies in the format of a tree.

    ~~~text
    stack ls dependencies tree [--separator SEP] [--[no-]license] [--[no-]external]
                               [--[no-]include-base] [--depth DEPTH]
                               [--prune PACKAGES] [TARGET] [--flag PACKAGE:[-]FLAG] [--test] [--bench] [--global-hints]
    ~~~

    For example (extract):

    ~~~text
    Packages
    └─┬ stack 2.10.0
      ├─┬ Cabal 3.6.3.0
      │ ├─┬ Win32 2.12.0.1
      │ │ ├─┬ base 4.16.3.0
      │ │ │ ├─┬ ghc-bignum 1.2
      │ │ │ │ └─┬ ghc-prim 0.8.0
      │ │ │ │   └── rts 1.0.2
      │ │ │ ├─┬ ghc-prim 0.8.0
    ~~~

The `--separator` option, with the `text` or `tree` subcommand, specifies the
separator between the package name and its version. The default is a space
character.

Set the `--license` flag, after the `text` or `tree` subcommand, to replace each
package's version with its licence. (Consistent with the Cabal package
description format specification, only the American English spelling (license)
is accepted.)

The `--filter` option, with the `text` subcommand, specifies an item to be
filtered out from the results, if present. An item can be `$locals` (for all
project packages) or a package name. It can be specified multiple times.

!!! note

    The special value `$locals` will need to be enclosed with single quotes to
    distinguish it from a shell variable.

Set the `--no-external` flag to exclude external dependencies.

Set the `--no-include-base` flag to exclude dependencies on the `base` package.

The `--depth` option limits the depth of dependency resolution.

The `--prune <packages>` option prunes the specified packages and their
dependencies from the tree of packages used to generate the output, where
`<packages>` is a comma separated list of package names.

The `--flag` option allows Cabal flags to be specified.

Pass the `--test` flag to consider the dependencies of test suite components.

Pass the `--bench` flag to consider the dependencies of benchmark components.

Pass the `--global-hints` flag to use a hints file for global packages. The
command then does not require an installed GHC.

## The `stack ls snapshots` command

~~~text
stack ls snapshots [COMMAND] [-l|--lts] [-n|--nightly]

Available commands:
  local                    View local snapshots
  remote                   View remote snapshots
~~~

`stack ls snapshots` will list all the local snapshots by default. You can also
view the remote snapshots using `stack ls snapshots remote`. It also supports
options for viewing only lts (`-l`) and nightly (`-n`) snapshots.

## The `stack ls stack-colors` command

~~~text
stack ls stack-colors [--[no-]basic] [--[no-]sgr] [--[no-]example]
~~~

The British English spelling is also accepted (`stack ls stack-colours`).

`stack ls stack-colors` will list all of Stack's output styles. A number of
different formats for the output are available, see
`stack ls stack-colors --help`.

The default is a full report, with the equivalent SGR instructions and an
example of the applied style. The latter can be disabled with flags `--no-sgr`
and `--no-example`.

The flag `--basic` specifies a more basic report, in the format that is accepted
by Stack's command line option `--stack-colors` and the YAML configuration key
`stack-colors`.

## The `stack ls tools` command

~~~text
stack ls tools [--filter TOOL_NAME]
~~~

`stack ls tools` will list Stack's installed tools. On Unix-like operating
systems, they will be one or more versions of GHC. On Windows, they will include
MSYS2. For example, on Windows the command:

~~~text
stack ls tools
~~~

yields output like:

~~~text
ghc-9.4.1
ghc-9.2.4
ghc-9.0.2
msys2-20210604
~~~

The `--filter <tool_name>` option will filter the output by a tool name (e.g.
'ghc', 'ghc-git' or 'msys2'). The tool name is case sensitive. For example the
command:

~~~text
stack ls tools --filter ghc
~~~

yields output like:

~~~text
ghc-9.4.1
ghc-9.2.4
ghc-9.0.2
~~~


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/new_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack new` command

~~~text
stack new PACKAGE_NAME [--bare] [--[no-]init] [TEMPLATE_NAME]
          [-p|--param KEY:VALUE] [DIR(S)] [--omit-packages] [--force]
          [--ignore-subdirs]
~~~

`stack new` creates a new project using a project template.

By default:

* the project is created in a new directory named after the package. Pass the
  `--bare` flag to create the project in the current directory;

* the project is initialised for use with Stack. Pass the `--no-init` flag to
  skip such initialisation; and

* the project template is the one specified by the
[default-template](yaml_configuration.md#default-template) option.

A package name acceptable to Cabal comprises an alphanumeric 'word'; or two or
more such words, with the words separated by a hyphen/minus character (`-`). A
word cannot be comprised only of the characters `0` to `9`.

An alphanumeric character is one in one of the Unicode Letter categories
(Lu (uppercase), Ll (lowercase), Lt (titlecase), Lm (modifier), or Lo (other))
or Number categories (Nd (decimal), Nl (letter), or No (other)).

!!! note

    In the case of Hackage and acceptable package names, an alphanumeric
    character is limited to one of `A` to `Z`, `a` to `z`, and `0` to `9`.

!!! note

    The name of a project is not constrained to be an acceptable package name. A
    single-package project can be renamed to differ from the name of its
    package.

The `--param <key>:<value>` option specifies a key-value pair to populate a key
in a template. The option can be specified multiple times.

The arguments specifying directories and the `--ignore-subdirs`, `--force` and
`--omit-packages` flags are as for the [`stack init` command](init_command.md).
These arguments are ignored if the `--no-init` flag is passed.

If a snapshot is specified at the command line and the project is initialised
for use with Stack, `stack new` will try to use it. For further information, see
the documentation for the [`--snapshot`](global_flags.md#-snapshot-option) and
[`--resolver`](global_flags.md#-resolver-option) options.

## Project templates

A project template file can be located in a repository named `stack-templates`
on GitHub, GitLab or Bitbucket; at a URL; or on the local file system.

Project template file names have the extension `.hsfiles`. The extension does
not need to be specified with `stack new`.

A project template file `my-template.hsfiles` in a repository
`username/stack-templates` on GitHub, GitLab or Bitbucket can be specified
with `stack new` as:

~~~test
<service>:username/my-template
~~~

where `<service>` is one of `github` for [GitHub](https://github.com/),
`gitlab` for [GitLab](https://gitlab.com), or `bitbucket` for
[Bitbucket](https://bitbucket.com).

The default service is GitHub, the default username is `commercialhaskell` and
the default project template name is `new-template`.

## Examples

Create a project for package `my-project` in new directory `my-project` with the
default project template file and initialise it for use with Stack:

~~~text
stack new my-project
~~~

Create a project for package `my-package` in the current directory with the
default project template file and initialise it for use with Stack:

~~~text
stack new my-package --bare
~~~

Create a project with the `rio` project template at the default repository and
initialise it for use with Stack:

~~~text
stack new my-project rio
~~~

Create a project with the `mysql` project template provided by the
`yesodweb/stack-templates` repository on GitHub and initialise it for use with
Stack:

~~~text
stack new my-project yesodweb/mysql
~~~

Create a project with the `my-template` project template provided by the
`username/stack-templates` repository on Bitbucket and initialise it for use
with Stack:

~~~text
stack new my-project bitbucket:username/my-template
~~~

Create a project with the `my-template.hsfiles` project template file at
`https://example.com` and initialise it for use with Stack:

~~~text
stack new my-project https://example.com/my-template
~~~

Create a project with the local project template file
`<path_to_template>/my-template.hsfiles` and initialise it for use with Stack:

~~~text
stack new my-project <path_to_template_file>/my-template
~~~

Create a project with the `simple` project template file at the default
repository (which does not use Hpack and a `package.yaml` file) and do not
initialise it for use with Stack (`stack init` could be used subsequently):

~~~text
stack new my-project --no-init simple
~~~


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/path_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack path` command

~~~text
stack path [--stack-root] [--global-config] [--programs] [--local-bin]
           [--project-root] [--config-location] [--bin-path] [--compiler-exe]
           [--compiler-bin] [--compiler-tools-bin] [--extra-include-dirs]
           [--extra-library-dirs] [--snapshot-pkg-db] [--local-pkg-db]
           [--global-pkg-db] [--ghc-package-path] [--snapshot-install-root]
           [--local-install-root] [--snapshot-doc-root] [--local-doc-root]
           [--local-hoogle-root] [--dist-dir] [--local-hpc-root]
~~~

`stack path` provides information about files and locations used by Stack.

Pass the following flags for information about specific files or locations:

|Flag                   |File or location                                      |
|-----------------------|------------------------------------------------------|
|--bin-path             |The PATH in the Stack environment.                    |
|--compiler-bin         |The directory containing the GHC executable.          |
|--compiler-exe         |The GHC executable.                                   |
|--compiler-tools-bin   |The directory containing binaries specific to a particular compiler.|
|--config-location      |Stack's project-level YAML configuration file (`stack.yaml`, by default).|
|--dist-dir             |The dist work directory, relative to the package directory.|
|--extra-include-dirs   |Extra include directories.                            |
|--extra-library-dirs   |Extra library directories.                            |
|--ghc-package-path     |The `GHC_PACKAGE_PATH` environment variable.          |
|--global-config        |Stack's user-specific global YAML configuration file (`config.yaml`).|
|--global-pkg-db        |The global package database.                          |
|--local-bin            |The directory in which Stack installs executables.    |
|--local-doc-root       |The root directory for local project documentation.   |
|--local-hoogle-root    |The root directory for local project documentation.   |
|--local-hpc-root       |The root directory for .tix files and HPC reports.    |
|--local-install-root   |The root directory for local project installation.    |
|--local-pkg-db         |The local package database.                           |
|--programs             |The root directory for GHC and other Stack-supplied tools.|
|--project-root         |The project root directory.|
|--snapshot-doc-root    |The root directory for snapshot documentation.        |
|--snapshot-install-root|The root directory for snapshot installation.         |
|--snapshot-pkg-db      |The snapshot package database.                        |
|--stack-root           |The Stack root.                                       |

The command also accepts flags and options of the
[`stack build`](build_command.md#flags-affecting-ghcs-behaviour) command that
affect the location of the local project installation directory, such as
`--profile` and `--no-strip`. For further information, see the documentation of
the [project Stack work directory](stack_work.md#project-stack-work-directory).


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/purge_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack purge` command

~~~text
stack purge
~~~

`stack purge` has the same effect as, and is provided as a shorthand for,
[`stack clean --full`](clean_command.md).


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/query_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack query` command

:octicons-beaker-24: Experimental

[:octicons-tag-24: 0.1.6.0](https://github.com/commercialhaskell/stack/releases/tag/v0.1.6.0)

~~~text
stack query [SELECTOR...]
~~~

`stack query` outputs certain build information. For example, for a
multi-package project `multi` specifying snapshot `lts-19.25` (GHC 9.0.2) and
with two project packages, `my-package-A` (version 0.1.0.0) and `my-package-B`
(version 0.2.0.0), command `stack query` outputs:

~~~text
compiler:
  actual: ghc-9.0.2
  wanted: ghc-9.0.2
locals:
  my-package-A:
    path: <absolute_path_to>\multi\my-package-A\
    version: 0.1.0.0
  my-package-B:
    path: <absolute_path_to>\multi\my-package-B\
    version: 0.2.0.0
~~~

The component parts of the information can be specified using 'selectors' with
the command. In the example above the selectors include `compiler`,
`compiler actual`, `locals`, `locals my-package-A`, and
`locals my-package-A version`. For example, commanding:

~~~text
stack query locals my-package-B path
~~~

results in output:

~~~text
<absolute_path_to>\multi\my-package-B\
~~~


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/runghc_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack runghc` and `stack runhaskell` commands

~~~text
stack runghc [-- ARGUMENT(S) (e.g. stack runghc -- X.hs)]
             [--[no-]ghc-package-path] [--[no-]stack-exe] [--package PACKAGE]
             [--rts-options RTSFLAG] [--cwd DIR]
~~~

`stack runhaskell` has the same effect as `stack runghc`. `stack runghc` has the
same effect as, and is provided as a shorthand for,
[`stack exec runghc`](exec_command.md), with the exception of the `--package`
option.

Pass the option `--package <package(s)>` to add the initial GHC argument
`-package-id=<unit_id>`, where `<unit_id>` is the unit ID of the specified
package in the installed package database. The option can be a list of package
names or package identifiers separated by spaces. The option can also be
specified multiple times. The approach taken to these packages is the same as if
they were specified as targets to
[`stack build`](build_command.md#target-syntax).


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/run_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack run` command

~~~text
stack run [-- ARGUMENT(S) (e.g. stack run -- file.txt)]
          [--[no-]ghc-package-path] [--[no-]stack-exe]
          [--package PACKAGE] [--rts-options RTSFLAG] [--cwd DIR]
~~~

`stack run` builds a project executable and runs it. If the command has a first
argument and it is recognised as the name of an executable component of a
project package then that is built. Otherwise, the project's first executable is
built. If the project has no executables Stack reports no executables found as
an error.

!!! note

    To identify a project's first executable, and search for the name of an
    executable component, Stack lists the executable components, in order, for
    each package, listed in order. For example:

    `packageA:a-exe` < `packageA:b-exe` < `packageB:a-exe` < `packageB:b-exe`

Everything after `--` on the command line is interpreted as a command line
argument to be passed to what is run, other than a first argument recognised as
the name of an executable component of a project package.

By default:

*   the `GHC_PACKAGE_PATH` environment variable is set for the subprocess. Pass
    the `--no-ghc-package-path` flag to not set the variable; and

*   the `STACK_EXE` environment variable is set with the path to Stack. Pass the
    `--no-stack-exe` flag to not set the variable.

The `--cwd` option can be used to set the working directory before the
executable is run.

The `--package` option (which can be specified multiple times) can be used to
add a package name to build targets.

The `--rts-options` option (which can be specified multiple times) can be used
to pass a list of GHC's
[runtime system (RTS) options](https://downloads.haskell.org/~ghc/latest/docs/users_guide/runtime_control.html#)
to the executable when it is run. (The `+RTS` and `-RTS` must not be included.)


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/script_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack script` command

~~~text
stack script [--package PACKAGE] FILE
             [-- ARGUMENT(S) (e.g. stack script X.hs -- argument(s) to program)]
             [--compile | --optimize] [--[no-]use-root] [--ghc-options OPTIONS]
             [--extra-dep PACKAGE-VERSION] [--no-run]
~~~

The `stack script` command either runs a specified Haskell source file (using
GHC's `runghc`) or, optionally, compiles such a file (using GHC) and, by
default, runs it.

Unlike `stack ghc` and `stack runghc`, the command ignores all Stack YAML
configuration files (global and project-level). A snapshot must be specified on
the command line (with the `--snapshot` option). For example:

~~~text
stack script --snapshot lts-22.7 MyScript.hs
~~~

The `stack script` command behaves as if the `--install-ghc` flag had been
passed at the command line.

Everything after `--` on the command line is interpreted as a command line
argument to be passed to what is run.

A package can be added to the snapshot on the command line with the
`--extra-dep` option (which can be specified multiple times).

Each required package can be specified by name on the command line with the
`--package` option (which can be specified multiple times). A single `--package`
option can also refer to a list of package names, separated by a space or comma
character. If the package is not in the snapshot, the most recent version in the
package index (e.g. Hackage) will be obtained.

If no packages are specified in that way, all the required packages that are in
the snapshot or are a GHC boot package (packages that come with GHC and are
included in GHC's global package database) will be deduced by reference to the
`import` statements in the source file. The `base` package associated with the
version of GHC specified by the snapshot is always available.

If a required package is a GHC boot package, the behaviour can be complex. If
the boot package has not been 'replaced', then it will be used in Stack's build
plan. However, if the boot package has been 'replaced', the latest version of
that package in the package index will be used in Stack's build plan, which may
differ from the version provided by the version of GHC specified by the
snapshot. A boot package will be treated as 'replaced' if the package i
included directly in the Stackage snapshot or it depends on a package included
directly in the snapshot. Stackage snapshots do not include directly most boot
packages but some snapshots may include directly some boot packages. In
particular, some snapshots include directly `Win32` (which is a boot package on
Windows) while others do not. For example, if `Cabal` (a boot package) is a
required package then, with Stackage snapshot LTS Haskell 20.25, Stack will:

* on Windows, try to construct a build plan based on the latest version of
  `Cabal` in the package index (because that snapshot includes `Win32` directly,
  and `Cabal` depends on `Win32` and so is treated as 'replaced'); and
* on non-Windows, use the boot package in the build plan (because `Cabal` is not
  'replaced').

Boot packages that have been 'replaced' can be specified as an `--extra-dep`.

The source file can be compiled by passing either the `--compile` flag (no
optimization) or the `--optimize` flag (compilation with optimization). If the
file is compiled, passing the `--no-run` flag will mean the compiled code is not
run.

By default, all the compilation outputs (including the executable) are written
to the directory of the source file. Pass the `--use-root` flag to write such
outputs to a script-specific location in the `scripts` directory of the Stack
root. The location reflects the absolute path to the source file, but ignoring
the drive. This can avoid clutter in the source file directory.

Additional options can be passed to GHC using the `--ghc-options` option.

## Examples

For example, Haskell source file `MyScript.hs` at location
`<drive>Users/jane/my-project` (where `<drive>` could be `/` on Unix-like
operating systems or `C:/` or similar on Windows):

~~~haskell
module Main (main) where

import Data.List (intercalate)
import System.Environment (getArgs)

import Acme.Missiles (launchMissiles)

main :: IO ()
main = do
  advices <- getArgs
  launchMissiles
  putStrLn $ intercalate "\n" advices
~~~

can be compiled and run, with arguments, with:

~~~text
stack --snapshot lts-22.7 script --package acme-missiles --compile MyScript.hs -- "Don't panic!" "Duck and cover!"
~~~

All the compilation outputs (like `Main.hi`, `Main.o`, and the executable
`MyScript`) will be written to the `my-project` directory.

If compiled and run with the additional flag `--use-root`, all the compilation
outputs will be written to a directory named `MyScript.hs` at
`Users/jane/my-project/` in the `scripts` directory of the Stack root.

For example, consider the following script extract, based on snapshot Stackage
LTS Haskell 20.25, where considerations on Windows differ from non-Windows. The
`stack script` command is specified using Stack's
[script interpreter](scripts.md).

=== "Windows"

    The snapshot includes `Win32` directly. As a consequence, GHC boot packages
    `directory`, `process` and `time` (which depend on `Win32`) are all treated
    as 'replaced'.

    ~~~haskell
    {- stack script
       --snapshot lts-20.25
       --extra-dep acme-missiles-0.3
       --extra-dep directory-1.3.6.2
       --extra-dep process-1.6.16.0
       --extra-dep time-1.11.1.1
    -}

    import Acme.Missiles -- from acme-missiles
    import Data.Time.Clock.System -- from time
    import System.Time.Extra -- from extra

    ...
    ~~~

    `acme-missiles` is not in the snapshot and so needs to be specified as an
    extra-dep.

    Stack can deduce that the module imports imply that the required packages
    are `acme-missiles`, `time` and `extra` (which is in the snapshot).

    `extra` depends on `directory` and `process`. If `directory` and `process`
    are not specified as extra-deps, Stack will complain that they have been
    'pruned'.

    `directory-1.3.6.2` depends on `time < 1.12`. If `time` is not specified as
    an extra-dep, Stack will try to construct a build plan based on the latest
    version in the package index (which will fail, as the latest version is
    `>= 1.12`)

=== "Unix-like"

    ~~~haskell
    {- stack script
       --snapshot lts-20.25
       --extra-dep acme-missiles-0.3
    -}

    import Acme.Missiles -- from acme-missiles
    import Data.Time.Clock.System -- from time
    import System.Time.Extra -- from extra

    ...
    ~~~

    `acme-missiles` is not in the snapshot and so needs to be specified as an
    extra-dep.

    Stack can deduce that the module imports imply that the required packages
    are `acme-missiles`, `time` and `extra` (which is in the snapshot).

    All the other dependencies required are either GHC boot packages (which have
    not been 'replaced') or in the snapshot.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/sdist_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack sdist` command

~~~text
stack sdist [DIR] [--pvp-bounds PVP-BOUNDS] [--ignore-check]
            [--[no-]test-tarball] [--tar-dir ARG]
~~~

Hackage only accepts packages for uploading in a standard form, a compressed
archive ('tarball') in the format produced by Cabal's `sdist` action.

`stack sdist` generates a file for your package, in the format accepted by
Hackage for uploads. The command will report the location of the generated file.

## `--ignore-check` flag

Pass the flag to disable checks of the package for common mistakes. By default,
the command will check the package for common mistakes.

## `--pvp-bounds` option

The `--pvp-bounds <pvp_bounds_mode>` option determines whether and, if so, how
PVP version bounds should be added to the Cabal file of the package. The
available modes for basic use are: `none`, `lower`, `upper`, and `both`. The
available modes for use with Cabal file revisions are `lower-revision`,
`upper-revision` and `both-revision`.

For futher information, see the
[YAML configuration](yaml_configuration.md#pvp-bounds) documentation.

## `--tar-dir` option

The `--tar-dir <path_to_directory>` option determines whether the package
archive should be copied to the specified directory.

## `--[no-]test-tarball` flag

Default: Disabled

Set the flag to cause Stack to test the resulting package archive, by attempting
to build it.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/setup_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack setup` command

~~~text
stack setup [GHC_VERSION] [--[no-]reinstall] [--ghc-bindist URL]
            [--ghcjs-boot-options GHCJS_BOOT] [--[no-]ghcjs-boot-clean]
~~~

`stack setup` attempts to install a version of GHC.

By default:

* the version of GHC is the one required by the project. Specify the version of
  GHC as an argument to attempt to install a different version of GHC. For
  example `stack setup 9.4.4` will attempt to install GHC 9.4.4; and

* an attempt to install is made only if the version of GHC is not already
  available to Stack. Pass the flag `--reinstall` (disabled by default) to
  attempt to install the version of GHC regardless of whether it is already
  available to Stack.

Pass the option `--ghc-bindist <url>` to specify the URL of the GHC to be
downloaded and installed. This option requires the use of the `--ghc-variant`
option specifying a custom GHC variant. For further information about the
`--ghc-variant` option, see the see the
[YAML configuration](yaml_configuration.md#ghc-variant) documentation.

If Stack is configured not to install GHC (`install-ghc: false` or passing the
`--no-install-ghc` flag) then `stack setup` will warn that the flag and the
command are inconsistent and take no action.

=== "Linux"

    A particular binary distribution of GHC will depend on certain libraries,
    which need to be available.

    There are many different Linux distributions and different versions of a
    particular Linux distribution. One Linux distribution/version may make
    available different libraries to another Linux distribution/version.

    In attempting to identify the particular binary distribution of GHC that is
    required on Linux, Stack will refer to the presence or absence of certain
    libraries or the versions of those libraries.

    For example, Stack 2.15.1 considers:

    *   If `libc.musl-x86_64.so.1` is present. This file is provided by the
        [musl libc](https://musl.libc.org/).

    *   The version of `libc6` (if musl libc is not applicable), the
        [GNU C Library](https://www.gnu.org/software/libc/) (glibc), that is
        present. The GNU C Library is designed to be backwards compatible.

    *   If `libgmp.so.3` or `libgmp.so.10` is present. These files are provided
        by different versions of the
        [GNU Multiple Precision Arithmetic Library](https://gmplib.org/).

    *   If `libncursesw.so.6` is present. This file is provided by a shared
        library for terminal handling with wide character support.

    *   If `libtinfo.so.5` or `libtinfo.so.6` is present. These files are
        provided by different versions of a shared low-level terminfo library
        for terminal handling.

    Stack 2.15.1 uses `ghc-build`:

    * `musl` to indicate `libc.musl-x86_64.so.1` is present and Stack should use
       the GHC binary distribution for Alpine Linux.
    * `tinfo6` to indicate `libgmp.so.10` and `libtinfo.so.6` are present and
      `libc6` is compatible with `libc6` 2.32.
    * `tinfo6-libc6-pre232` to indicate `libgmp.so.10` and `libtinfo.so.6` are
       present and `libc6` is not compatible with `libc6` 2.32.
    * `ncurses6` to indicate `libgmp.so.10` and `libncursesw.so.6` are present
    * `gmp4` to indicate `libgmp.so.3` is present

    By default, Stack associates:

    * the `tinfo6` build with the 'Fedora 33' binary distribution of GHC 9.4.1
      to 9.4.4. Those binary distributions require versions of `libc6` that are
      compatible with `libc6` 2.32; and

    * the `tinfo6-libc6-pre232` build with the 'Debian 10' binary distribution
      of GHC 9.4.1 to 9.4.4. Those binary distributions require versions of
      `libc6` that are compatible with `libc6` 2.28.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/templates_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack templates` command

~~~text
stack templates
~~~

`stack templates` provides information to the standard output stream about
project templates used with the [`stack new` command](new_command.md).

Project templates are specified in `.hsfiles` files. The format of those files
is documented at the
[`commercialhaskell/stack-templates`](https://github.com/commercialhaskell/stack-templates#project-template-format)
repository on GitHub.

Any GitHub, GitLab or Bitbucket repository named `stack-templates` can provide
project template files. For example, a template file
`username/stack-templates/my-template.hsfiles` on GitHub can be identified as
`username/my-template` when using `stack new`. The relevant service can be
specified by a prefix: `github:` for [GitHub](https://github.com/) (the default
service), `gitlab:` for [GitLab](https://gitlab.com), or `bitbucket:` for
[Bitbucket](https://bitbucket.com).

[`commercialhaskell/stack-templates`](https://github.com/commercialhaskell/stack-templates#project-template-format)
on GitHub is the default repository for project templates. Its username
(`commercialhaskell`) does not need to be specified when using `stack new`.

The project template that `stack new` uses by default is named `new-template`
and provided at the default repository.

The default repository provides 24 other project templates. Its Wiki provides
a description of some of those templates and information about the location of
other templates.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/uninstall_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack uninstall` command

~~~text
stack uninstall
~~~

`stack uninstall` provides information to the standard output stream about how
to uninstall Stack or a Stack-supplied tool (such as GHC or, on Windows, MSYS2).
It does not itself uninstall Stack or a Stack-supplied tool.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/unpack_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack unpack` command

~~~text
stack unpack TARGET [--candidate] [--to DIR]
~~~

`stack unpack` downloads an archive file for one or more specified target
packages from the package index (e.g. Hackage), or one or more specified target
package candidates, and unpacks each archive into a subdirectory named after the
package version.

In the case of packages from the package index, a target can be a package
name only. In that case, by default:

*   if Stack's `--snapshot` option is not specified, the download is for the
    most recent version of the package in the package index. Stack will first
    seek to update the index; and

*   if Stack's `--snapshot` option is specified, the download is for the version
    of the package included directly in the specified snapshot.

!!! note

    Stackage snapshots do not include directly most GHC boot packages (packages
    that come with GHC and are included in GHC's global package database) but
    some snapshots may include directly some boot packages. In particular, some
    snapshots include directly `Win32` (which is a boot package on Windows)
    while others do not.

Otherwise, a target should specify a package name and version (for example,
`acme-missiles-0.3`). In the case of package versions from the package index,
optionally, a revision in the package index can be specified by appending
`@rev:<number>` or `@sha256:<sha>` (for example, `acme-missiles-0.3@rev:0`).

By default:

*   the download is from the package index. Pass the flag `--candidate` to
    specify package candidates; and

    !!! note

        Stack assumes that a package candidate archive is a `.tar.gz` file named
        after the package version and located at endpoint
        `package\<package_version>\candidate\`. This is true of Hackage.

*   the target is unpacked into a subdirectory of the current directory. Pass
    the option `--to <directory>` to specify an alternative destination
    directory to the current directory. The destination directory can be an
    absolute one or relative to the current directory.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/update_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack update` command

~~~text
stack update
~~~

Generally, Stack automatically updates the package index when necessary.

`stack update` will download the most recent set of packages from your package
indices (e.g. Hackage).


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/upgrade_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack upgrade` command

Either:

~~~text
stack upgrade [--binary-only] [--binary-platform ARG] [--force-download]
              [--[no-]only-local-bin] [--binary-version ARG] [--github-org ARG]
              [--github-repo ARG]
~~~

or:

~~~text
stack upgrade [--source-only] [--git] [--git-repo ARG] [--git-branch ARG]
~~~

`stack upgrade` will get a new version of Stack. It can also get a version
before the current version (downgrade).

!!! warning

    If you use GHCup to install Stack, use only GHCup to upgrade Stack.

By default:

* the new version will be from an existing binary distribution. Pass the
  `--source-only` flag to specify compiling from source code. The
  `--binary-only` and `--source-only` flags are alternatives;

* the new version will not overwrite the existing version unless it is newer.
  Pass the `--force-download` flag to force a download;

* when an existing binary distribution is applicable, it will be put in Stack's
  local binary directory (see `stack path --local-bin`) and named `stack`
  (replacing any existing executable named `stack` there);

* if the current running Stack executable is named `stack` (or, on Windows,
  `stack.exe`) (this is case insensitive), an existing binary distribution will
  replace it. If the executable is located outside of Stack's local binary
  directory, pass the `--only-local-bin` flag to skip that step;

* if the current running Stack executable is named other than `stack` (and, on
  Windows, `stack.exe`), an existing binary distribution will only be put in
  Stack's local binary directory and named `stack`. Pass the
  `--no-only-local-bin` flag to replace also the current running executable;

* the new version will be the latest available. Pass the
  `--binary-version <version>` option to specify the version (this implies
  `--force-download`);

* the binary distribution will be sought from the GitHub organisation/user
  `commercialhaskell`. Pass the `--github-org <user>` option to specify a
  different GitHub user;

* the binary distribution will be sought from the GitHub repository `stack`.
  Pass the `--github-repo <repository>` option to specify a different
  repository; and

* the binary distribution will be sought for the current platform. Pass the
  `--binary-platform <platform>` option to specify a different platform
  (`<operating_system>-<architecture>-<suffix>`).

When compiling from source code, by default:

*   Stack will obtain the source code for the most recent version in the package
    index (eg Hackage). Pass the flag `--git` to specify the most recent version
    from the `master` branch of Stack's repository (pass the option
    `--git-branch <branch>` to specify a different branch and the option
    `--git-repo <repo_url>` to specify a different repository).

!!! note

    An earlier version of Stack could be inconsistent with some of the current
    contents of the Stack root. For further information about the contents of
    the Stack root and configuring its location, see the documentation about the
    [Stack root](stack_root.md).

## Examples

* `stack upgrade` seeks an upgrade to the latest version of Stack available as a
  binary distribution for the platform, if newer.

* `stack upgrade --force-download` seeks an upgrade to the latest version of
  Stack available as a binary distribution for the platform, even if not newer.

* If the Stack executable is named `my-stack`, `my-stack upgrade` seeks only to
  put the latest version of Stack available as a binary distribution for the
  platform, if newer, in Stack's local binary directory and name it `stack`.
  `my-stack upgrade --no-only-local-bin` seeks also to upgrade `my-stack` to the
  latest version of Stack available.

* `stack upgrade --binary-version 2.15.1` seeks an upgrade to Stack 2.15.1 if
  available as a binary distribution for the platform, even if not newer.

* `stack upgrade --source-only` seeks an upgrade by building Stack with
  Stack from the latest version of the source code in the package index
  (i.e. Hackage).

* `stack upgrade --source-only --git` seeks an upgrade by building Stack with
  Stack from the latest version of the source code in the `master` branch of
  Stack's repository.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/upload_command.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack upload` command

~~~text
stack upload [ITEM] [-d|--documentation] [--pvp-bounds PVP-BOUNDS]
             [--ignore-check] [--[no-]test-tarball] [--tar-dir ARG]
             [--candidate] [--[no-]save-hackage-creds] [--setup-info-yaml URL]
             [--snapshot-location-base URL]
~~~

By default:

* the command uploads one or more packages. Pass the flag `--documentation`
  (`-d` for short) to upload documentation for one or more packages;

* the upload is a package to be published or documentation for a published
  package. Pass the flag `--candidate` to upload a
  [package candidate](http://hackage.haskell.org/upload#candidates) or
  documentation for a package candidate; and

* the command prompts to save the user's Hackage username and password in a
  local file. Pass the flag `--no-save-hackage-creds` to avoid the prompt.

At least one `ITEM` must be specified. For example, if the current working
directory is a package directory:

~~~text
stack upload .
~~~

## Upload one or more packages

Hackage accepts packages for uploading in a standard form, a compressed archive
('tarball') in the format produced by Cabal's `sdist` action.

If `ITEM` is a relative path to an sdist tarball, `stack upload` uploads the
package to Hackage.

If `ITEM` is a relative path to a package directory, `stack upload` generates a
file for your package, in the format accepted by Hackage for uploads, and
uploads the package to Hackage.

By default:

* the command will check each package for common mistakes. Pass the flag
  `--ignore-check` to disable such checks;

* Stack will not test the resulting package archive. Pass the flag
  `--test-tarball` to cause Stack to test each resulting package archive, by
  attempting to build it.

The `--pvp-bounds <pvp_bounds_mode>` option determines whether and, if so, how
PVP version bounds should be added to the Cabal file of the package. The
available modes for basic use are: `none`, `lower`, `upper`, and `both`. The
available modes for use with Cabal file revisions are `lower-revision`,
`upper-revision` and `both-revision`.

For futher information, see the
[YAML configuration](yaml_configuration.md#pvp-bounds) documentation.

The `--tar-dir <path_to_directory>` option determines whether the package
archive should be copied to the specified directory.

## Upload documentation for a package

:octicons-beaker-24: Experimental

[:octicons-tag-24: 2.15.1](https://github.com/commercialhaskell/stack/releases/tag/v2.15.1)

Hackage accepts documentation for a package for uploading in a standard form and
in a compressed archive ('tarball') in the `.tar.gz` format.

For further information about how to create such an archive file, see the
documentation for the
[`stack haddock --haddock-for-hackage`](build_command.md#-no-haddock-for-hackage-flag)
command.

If `ITEM` is a relative path to a package directory,
`stack upload <package_directory> --documentation` uploads an existing archive
file of documentation for the specified package to Hackage.

If the `--documentation` flag is passed then flags specific to package upload
are ignored.

## The `HACKAGE_USERNAME` and `HACKAGE_PASSWORD` environment variables

[:octicons-tag-24: 2.3.1](https://github.com/commercialhaskell/stack/releases/tag/v2.3.1)

`stack upload` will request a Hackage username and password to authenticate.
This can be avoided by setting the `HACKAGE_USERNAME` and `HACKAGE_PASSWORD`
environment variables. For
example:

=== "Unix-like"

    ~~~text
    export $HACKAGE_USERNAME="<username>"
    export $HACKAGE_PASSWORD="<password>"
    stack upload .
    ~~~

=== "Windows (with PowerShell)"

    ~~~text
    $Env:HACKAGE_USERNAME='<username>'
    $Env:HACKAGE_PASSWORD='<password>'
    stack upload .
    ~~~

## The `HACKAGE_KEY` environment variable

[:octicons-tag-24: 2.7.5](https://github.com/commercialhaskell/stack/releases/tag/v2.7.5)

Hackage allows its members to register an API authentification token and to
authenticate using the token.

A Hackage API authentification token can be used with `stack upload` instead of
username and password, by setting the `HACKAGE_KEY` environment variable. For
example:

=== "Unix-like"

     ~~~text
     HACKAGE_KEY=<api_authentification_token>
     stack upload .
     ~~~

=== "Windows (with PowerShell)"

     ~~~text
     $Env:HACKAGE_KEY=<api_authentification_token>
     stack upload .
     ~~~
# /Specific topics



- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/stack_root.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Stack root

The Stack root is a directory where Stack stores important files.

On Unix-like operating systems and Windows, Stack can be configured to follow
the XDG Base Directory Specification if the environment variable `STACK_XDG` is
set to any non-empty value. However, Stack will ignore that configuration if the
Stack root location has been set on the command line or the `STACK_ROOT`
environment variable exists.

## Location

The location of the Stack root depends on the operating system, whether Stack is
configured to use the XDG Base Directory Specification, and/or whether an
alternative location to Stack's default 'programs' directory has been specified.

The location of the Stack root can be configured by setting the
[`STACK_ROOT`](environment_variables.md#stack_root) environment variable or
using Stack's [`--stack-root`](global_flags.md#stack-root-option) option on the
command line.

=== "Unix-like"

    The Stack root contains snapshot packages; (by default) tools such as GHC,
    in a `programs` directory; Stack's global
    [YAML configuration](yaml_configuration.md#yaml-configuration) file
    (`config.yaml`); and Stack's
    [`global-projects`](yaml_configuration.md#yaml-configuration) directory.

    The default Stack root is `~/.stack`.

=== "Windows"

    The default Stack root is `%APPDIR%\stack`.

    If the `LOCALAPPDATA` environment variable exists, the default location of
    tools is `%LOCALAPPDATA%\Programs\stack`. Otherwise, it is the `programs`
    directory in the Stack root.

    !!! warning

        If there is a space character in the `%LOCALAPPDATA%` path (which may be
        the case if the relevant user account name and its corresponding user
        profile path have a space) this may cause problems with building
        packages that make use of the GNU project's `autoconf` package and
        `configure` shell script files. That may be the case particularly if
        there is no corresponding short name ('8 dot 3' name) for the directory
        in the path with the space (which may be the case if '8 dot 3' names
        have been stripped or their creation not enabled by default). If there
        are problems building, it will be necessary to override the default
        location of Stack's 'programs' directory to specify an alternative path
        that does not contain space characters. Examples of packages on
        Hackage that make use of `configure` are `network` and `process`.

    On Windows, the length of filepaths may be limited (to
    [MAX_PATH](https://docs.microsoft.com/en-us/windows/win32/fileio/maximum-file-path-limitation?tabs=cmd)),
    and things can break when this limit is exceeded. Setting a Stack root with
    a short path to its location (for example, `C:\sr`) can help.

=== "XDG Base Directory Specification"

    The Stack root is `<XDG_DATA_HOME>/stack`. If the `XDG_DATA_HOME`
    environment variable does not exist, the default is `~/.local/share/stack`
    on Unix-like operating systems and `%APPDIR%\stack` on Windows.

    The location of `config.yaml` is `<XDG_CONFIG_HOME>/stack`. If the
    `XDG_CONFIG_HOME` environment variable does not exist, the default is
    `~/.config/stack` on Unix-like operating systems and `%APPDIR%\stack` on
    Windows.

    This approach treats:

    *   the project-level YAML configuration file that is common to all projects
        without another such file in their project directory or its ancestor
        directories as _data_ rather than as part of Stack's own
        _configuration_;

    *   the snapshots database as essential data rather than as non-essential
        data that would be part of a _cache_, notwithstanding that Stack will
        rebuild that database as its contents are needed; and

    *   the Pantry store as essential data rather than as non-essential data
        that would be part of a _cache_, notwithstanding that Stack will
        download the package index and rebuild the store if it is absent.

An alternative to the default location of tools such as GHC can be specified
with the [`local-programs-path`](yaml_configuration.md#local-programs-path)
configuration option.

The location of the Stack root is reported by command:

~~~text
stack path --stack-root
~~~

The full path of Stack's global YAML configuration file is reported by command:

~~~text
stack path --global-config
~~~

The location of tools such as GHC for the current platform is reported by
command:

~~~text
stack path --programs
~~~

## Contents

The contents of the Stack root depend on the operating system, whether Stack is
configured to use the XDG Base Directory Specification, and/or whether an
alternative location to Stack's default 'programs' directory has been specified.

=== "Unix-like"

    The Stack root contains snapshot packages; (by default) tools such as GHC,
    in a `programs` directory; Stack's global
    [YAML configuration](yaml_configuration.md#yaml-configuration) file
    (`config.yaml`); and Stack's
    [`global-projects`](yaml_configuration.md#yaml-configuration) directory.

=== "Windows"

    The Stack root contains snapshot packages; Stack's global
    [YAML configuration](yaml_configuration.md#yaml-configuration) file
    (`config.yaml`); and Stack's
    [`global-projects`](yaml_configuration.md#yaml-configuration) directory. The
    default location of tools such as GHC and MSYS2 is outside of the Stack
    root.

=== "XDG Base Directory Specification"

    If Stack is following the XDG Base Directory Specification, the Stack root
    contains what it would otherwise contain for the operating system, but
    Stack's global YAML configuration file (`config.yaml`) may be located
    elsewhere.

### `config.yaml`

This is Stack's global configuration file. For further information, see the
documentation for non-project specific
[configuration](yaml_configuration.md#non-project-specific-configuration).

If the file is deleted, and Stack needs to consult it, Stack will create a file
with default contents.

### `stack.sqlite3`

This is a 'user' database that Stack uses to cache certain information. The
associated lock file is `stack.sqlite3.pantry-write-lock`.

### `global-project` directory

This contains:

* an explanation of the directory (`README.txt`);
* the project-level configuration file (`stack.yaml`) for the global project
  and its associated lock file (`stack.yaml.lock`); and
* if created, Stack's working directory (`.stack-work`) for the global project.

If the project-level configuration file is deleted, and Stack needs to consult
it, Stack will recreate the contents of the directory.

### `pantry\hackage` directory

This contains a local cache of the package index. If the contents of the
directory are deleted, and Stack needs to consult the package index, Stack will
seek to download the latest package index.

!!! info

    Stack depends on package `pantry` which, in turn, depends on package
    `hackage-security`. The latter handles the local cache of the package index.
    The type `CacheLayout` represents the location of the files that are cached.
    `pantry` uses `cabalCacheLayout :: CacheLayout`, the layout that Cabal (the
    tool) uses. That is what specifies the names of the files used to cache the
    package index, including `00-index.tar` and `00-index.tar.gz`.

### `pantry` directory

This contains:

* the Pantry database used by Stack (`pantry.sqlite3`) and its associated lock
  file (`pantry.sqlite2.pantry-write-lock`). If the database is deleted, and
  Stack needs to consult it, Stack will seek to create and initialise it. The
  database is initialised with information from the package index; and
* a database of package versions that come with each version of GHC
  (`global-hints-cache.yaml`).

### `programs` directory

This contains a directory for the platform. That directory contains for each
installed Stack-supplied tool:

* the archive file for the tool. This can be deleted;
* a file indicating the tool is installed (`<tool_name>.installed`); and
* a directory for the tool.

To remove a Stack-supplied tool, delete all of the above. If Stack needs a
Stack-supplied tool and it is unavailable, Stack will seek to obtain it.

### `setup-exe-cache` directory

This contains a directory for the platform. That directory contains, for each
version of GHC (an associated version of Cabal (the library)) that Stack has
used, an executable that Stack uses to access Cabal (the library).

If the contents of the directory are deleted, and Stack needs the executable,
Stack will seek to rebuild it.

### `setup-exe-src` directory

See the documentation for the
[`setup-exe-cache` directory](#setup-exe-cache-directorysetup-exe-cache). This
contains the two source files (`setup-<hash>.hs` and `setup-shim-<hash>.hs`)
that Stack uses to build the executable.

If the contents of the directory are deleted, and Stack needs the executable,
Stack will recreate them.

The hash in the names of the source files is a hash of arguments passed to GHC
when building the executable and the contents of the two source files.

The content of the `setup-<hash>.hs` file is the familiar:

~~~haskell
import Distribution.Simple
main = defaultMain
~~~

The content of the `setup-shim-<hash>.hs` file uses `main` except when the
executable is called with arguments `repl` and `stack-initial-build-steps`. Then
Stack makes use of Cabal's `defaultMainWithHooks` and `replHook` field to create
the autogenerated files for every configured component; the `replHook` function
is provided with the information that `initialBuildSteps` needs. Stack's
`stack ghci` or `stack repl` commands call the executable with those arguments.

### `snapshots` directory

This contains a directory for each snapshot that Stack creates when building
immutable dependencies of projects.

If the contents of the directory are deleted, and the snapshot is not available
to Stack when it builds, Stack will recreate the snapshot.

### `templates` directory

This contains a `.hsfile` for each project template that Stack has used. For
further information, see the [`stack templates`](templates_command.md) command
documentation.

If the contents of the directory are deleted, an Stack needs a project template,
Stack will seek to download the template.

### `upload` directory

This may contain saved credentials for uploading packages to Hackage
(`credentials.json`).


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/pantry.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://rawgit.com/commercialhaskell/stack/master/doc/img/hidden-warning.svg"></a></div>

# Snapshot and package location

[:octicons-tag-24: 2.1.1](https://github.com/commercialhaskell/stack/releases/tag/v2.1.1)

This document describes:

* the specification of a snapshot location (in the
  [`snapshot`](yaml_configuration.md#snapshot) or
  [`resolver`](yaml_configuration.md#resolver) key)
* the specification of a package location (in the `extra-deps` key and in a
  snapshot)

!!! info

    Stack uses the [Pantry](https://hackage.haskell.org/package/pantry) to
    specify the location of snapshots and packages. Pantry is geared towards
    reproducible build plans with cryptographically secure specification of
    snapshots and packages.

## Snapshot location

There are essentially four different ways of specifying a snapshot location:

1.  Via a compiler version, which is a "compiler only" snapshot. This could be,
    for example:

    ~~~yaml
    snapshot: ghc-8.6.5
    ~~~

2.  Via a URL pointing to a snapshot configuration file, for example:

    ~~~yaml
    snapshot: https://raw.githubusercontent.com/commercialhaskell/stackage-snapshots/master/nightly/2018/8/21.yaml`
    ~~~

3.  Via a local file path pointing to a snapshot configuration file, for
    example:

    ~~~yaml
    snapshot: my-local-snapshot.yaml
    ~~~

4.  Via a _convenience synonym_, which provides a short form for some common
    URLs. These are:

    * GitHub: `github:user/repo:path` is treated as:

        ~~~text
        https://raw.githubusercontent.com/user/repo/master/path
        ~~~

    * LTS Haskell: `lts-X.Y` is treated (by default) as:

        ~~~text
        github:commercialhaskell/stackage-snapshots:lts/X/Y.yaml
        ~~~

    * Stackage Nightly: `nightly-YYYY-MM-DD` is treated (by default) as:

        ~~~text
        github:commercialhaskell/stackage-snapshots:nightly/YYYY/M/D.yaml
        ~~~

!!! info

    By default, LTS Haskell and Stackage Nightly snapshot configurations are
    retrieved from the `stackage-snapshots` GitHub repository of user
    `commercialhaskell`. The
    [snapshot-location-base](yaml_configuration.md#snapshot-location-base)
    option allows a custom location to be set.

For safer, more reproducible builds, you can optionally specify a URL
together with a cryptographic hash of its content. For example:

~~~yaml
snapshot:
  url: https://raw.githubusercontent.com/commercialhaskell/stackage-snapshots/master/lts/12/0.yaml
  size: 499143
  sha256: 781ea577595dff08b9c8794761ba1321020e3e1ec3297fb833fe951cce1bee11
~~~

`size` is the number of bytes in the file and `sha256` is the file's SHA256
hash. If not provided, the information will automatically be generated and
stored in a [lock file](lock_files.md).

## Package location

There are three types of package locations:

1.  Hackage packages
2.  Git and Mecurial repositories
3.  Local or remote archives (such as GitHub archives)

All three types support optional tree metadata to be added, which can be used
for reproducibility and faster downloads. This information can automatically be
generated in a [lock file](lock_files.md).

### Hackage packages

A package can be identified by its name, version and Cabal file revision
number, with revision `0` being the original Cabal file. For example:

~~~yaml
extra-deps:
- acme-missiles-0.3@rev:0
~~~

A package name and version only can be stated. Using this syntax, the most
recent Cabal file revision available in the package index will be used. For
example:

~~~yaml
extra-deps:
- acme-missiles-0.3
~~~

This syntax is often used in practice, but may result in one build differing
from another, if a new or further Cabal file revision is added to the package
index between the builds.

As an alternative to specifying the Cabal file revision number, you can specify
the package name and version with the SHA256 hash of the contents of its Cabal
file. Doing so is slightly more resilient than using the Cabal file revision
number, as it does not rely on the correct ordering in the package index.
For example:

~~~yaml
extra-deps:
- acme-missiles-0.3@sha256:2ba66a092a32593880a87fb00f3213762d7bca65a687d45965778deb8694c5d1
~~~

Optionally, you can specify also the size of the Cabal file in bytes. For
example (where the file size is `631` bytes):

~~~yaml
extra-deps:
- acme-missiles-0.3@sha256:2ba66a092a32593880a87fb00f3213762d7bca65a687d45965778deb8694c5d1,631
~~~

Optionally, you can specify also the Pantry tree information. For example:

~~~yaml
- hackage: acme-missiles-0.3@sha256:2ba66a092a32593880a87fb00f3213762d7bca65a687d45965778deb8694c5d1,613
  pantry-tree:
    size: 226
    sha256: 614bc0cca76937507ea0a5ccc17a504c997ce458d7f2f9e43b15a10c8eaeb033
~~~

A Pantry tree is a list of CAS (content-addressable storage)
'SHA256 hash'-'size in bytes' keys for each of the files in a package.

The SHA256 hash of the contents of the Cabal file and its size in bytes is
provided in Stack's lock file. For further information, see the
[lock files](lock_files.md) documentation. The SHA256 hash and file size
alternative is also what Stack uses when it makes suggestions about missing
packages.

### Git and Mercurial repositories

You can specify a Git or Mercurial repository at a specific commit, and Stack
will clone that repository and, if it has submodules (Git), update the
repository's submodules. For example:

~~~yaml
extra-deps:
- git: git@github.com:commercialhaskell/stack.git
  commit: '6a86ee32e5b869a877151f74064572225e1a0398'
- git: git@github.com:snoyberg/http-client.git
  commit: 'a5f4f3'
- hg: https://example.com/hg/repo
  commit: 'da39a3ee5e6b4b0d3255bfef95601890afd80709'
~~~

!!! note

    It is highly recommended that you only use SHA1 values for a Git or
    Mercurial commit. Other values may work, but they are not officially
    supported, and may result in unexpected behavior (namely, Stack will not
    automatically pull to update to new versions). Another problem with this is
    that your build will not be deterministic, because when someone else tries
    to build the project they can get a different checkout of the package.

!!! note

    The `commit:` key expects a YAML string. A commit hash, or partial hash,
    comprised only of digits represents a YAML number, unless it is enclosed in
    quotation marks.

!!! warning

    For the contents of a Git repository, Stack cannot handle filepaths or
    symbolic link names that are longer than those supported by the `ustar`
    (Unix Standard TAR) archive format defined by
    [POSIX.1-1988](https://nvlpubs.nist.gov/nistpubs/Legacy/FIPS/fipspub151-1.pdf).

    Stack uses `git archive` to convert the content of a Git repository to a
    TAR archive, which it then seeks to consume. Git produces `pax` format
    archives which use 'extended' headers for matters that the `ustar` format
    cannot handle. Unfortunately, Stack cannot consume an extended header and
    will silently discard the item.

A common practice in the Haskell world is to use "megarepos", or repositories
with multiple packages in various subdirectories. Some common examples include
[wai](https://github.com/yesodweb/wai/) and
[digestive-functors](https://github.com/jaspervdj/digestive-functors). To
support this, you may also specify `subdirs` for repositories. For example:

~~~yaml
extra-deps:
- git: git@github.com:yesodweb/wai
  commit: '2f8a8e1b771829f4a8a77c0111352ce45a14c30f'
  subdirs:
  - auto-update
  - wai
~~~

If unspecified, `subdirs` defaults to `['.']` meaning looking for a package in
the root of the repository. If you specify a value of `subdirs`, then `'.'` is
_not_ included by default and needs to be explicitly specified if a required
package is found in the top-level directory of the repository.

#### git-annex

[git-annex](https://git-annex.branchable.com) is not supported. This is because
`git archive` does not handle symbolic links outside the work tree. It is still
possible to use repositories which use git-annex but do not require the annex
files for the package to be built.

To do so, ensure that any files or directories stored by git-annex are marked
[export-ignore](https://git-scm.com/docs/git-archive#Documentation/git-archive.txt-export-ignore)
in the `.gitattributes` file in the repository. For further information, see
issue [#4579](https://github.com/commercialhaskell/stack/issues/4579).

For example, if the directory `fonts/` is controlled by git-annex, use the
following line:

~~~gitattributes
fonts export-ignore
~~~

### Local or remote archives (such as GitHub archives)

#### Filepaths or URLs to archive files

You can use filepaths referring to local archive files or HTTP or HTTPS URLs
referring to remote archive files, either tarballs or ZIP files.

!!! note

    An example of a remote archive file is a Hackage package candidate, usually
    located at (for example)
    https://hackage.haskell.org/package/my-package-1.0.0/candidate/my-package-1.0.0.tar.gz.

!!! warning

    Stack assumes that these archive files never change after downloading to
    avoid needing to make an HTTP request on each build.

For safer, more reproducible builds, you can optionally specify a cryptographic
hash of the archive file.

For example:

~~~yaml
extra-deps:
- https://example.com/foo/bar/baz-0.0.2.tar.gz
- archive: http://github.com/yesodweb/wai/archive/2f8a8e1b771829f4a8a77c0111352ce45a14c30f.zip
  subdirs:
  - wai
  - warp
- archive: ../acme-missiles-0.3.tar.gz
  sha256: e563d8b524017a06b32768c4db8eff1f822f3fb22a90320b7e414402647b735b
~~~

#### GitHub archive files

[:octicons-tag-24: 1.7.1](https://github.com/commercialhaskell/stack/releases/tag/v1.7.1)

You can specify a GitHub respository at a specific commit and Stack will obtain
from GitHub an archive file of the files in the repository at that point in its
history. For example:

~~~yaml
extra-deps:
- github: snoyberg/http-client
  commit: 'a5f4f30f01366738f913968163d856366d7e0342'
~~~

!!! note

    An archive file of the files in a GitHub repository at a point in its
    history is not the same as a clone of the repository (including its history)
    and the updating of any submodules. If you need the latter, use the syntax
    for a [Git repository](pantry.md#git-and-mercurial-repositories).

    If the package fails to build due to missing files, it may be that updated
    submodules are required.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/custom_snapshot.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

## Snapshot specification

[:octicons-tag-24: 2.1.1](https://github.com/commercialhaskell/stack/releases/tag/v2.1.1)

Snapshots provide a list of packages to use, along with flags, GHC options, and
a few other settings. Snapshots may extend any other snapshot that can be
specified in a [`snapshot`](yaml_configuration.md#snapshot) or
[`resolver`](yaml_configuration.md#resolver) key. The packages specified follow
the same syntax for dependencies in Stack's project-level configuration files.
Unlike the `extra-deps` key, however, no support for local directories is
available in snapshots to ensure reproducibility.

!!! info

    Stack uses the [Pantry](https://hackage.haskell.org/package/pantry) library
    for snapshot specification.

~~~yaml
snapshot: lts-22.7 # Inherits GHC version and package set
compiler: ghc-9.6.3 # Overwrites GHC version in the snapshot, optional

# Additional packages, follows extra-deps syntax
packages:
- unordered-containers-0.2.7.1
- hashable-1.2.4.0
- text-1.2.2.1

# Packages from the parent snapshot to ignore
drop-packages:
- wai-extra

# Packages which should be hidden
hidden:
  wai: true
  warp: false

# Set GHC options for specific packages
ghc-options:
  warp:
  - -O2

# Override flags, can also override flags in the parent snapshot
flags:
  unordered-containers:
    debug: true
~~~

If you put this in a `snapshot.yaml` file in the same directory as your project,
you can now use the snapshot like this:

~~~yaml
snapshot: snapshot.yaml
~~~

This is an example of a custom snapshot stored in the filesystem. They are
assumed to be mutable, so you are free to modify it. We detect that the snapshot
has changed by hashing the contents of the involved files, and using it to
identify the snapshot internally. It is often reasonably efficient to modify a
custom snapshot, due to Stack sharing snapshot packages whenever possible.

### Overriding the compiler

The following snapshot specification will be identical to `lts-22.7`, but
instead use `ghc-9.6.3` instead of `ghc-9.6.4`:

~~~yaml
snapshot: lts-22.7
compiler: ghc-9.6.3
~~~

### Dropping packages

The following snapshot specification will be identical to `lts-22.7`, but
without the `text` package in our snapshot. Removing this package will cause all
the packages that depend on `text` to be unbuildable, but they will still be
present in the snapshot.

~~~yaml
snapshot: lts-22.7
drop-packages:
- text
~~~

### Hiding packages

The following snapshot specification will be identical to `lts-22.7`, but the
`text` package will be hidden when registering. This will affect, for example,
the import parser in the script command.

~~~yaml
snapshot: lts-22.7
hidden:
- text
~~~

### Specifying GHC options

In order to specify GHC options for a package, you use the same syntax as the
[ghc-options](yaml_configuration.md#ghc-options) key for build configuration.

The following snapshot specification will be identical to `lts-22.7`, but
provides `-O1` as a ghc-option for `text`:

~~~yaml
snapshot: lts-22.7
packages:
- text-2.0.2
ghc-options:
  text: -O1
~~~

This works somewhat differently than the stack.yaml `ghc-options` field, in that
options can only be specified for packages that are mentioned in the custom
snapshot's `packages` list. It sets the ghc-options, rather than extending those
specified in the snapshot being extended.

Another difference is that the `*` entry for `ghc-options` applies to all
packages in the `packages` list, rather than all packages in the snapshot.

### Specifying Cabal flags

In order to specify Cabal flags for a package, you use the same syntax as the
[flags](yaml_configuration.md#flags) key for build configuration. The
following snapshot specification will be identical to `lts-22.7`, but
it enables the `developer` Cabal flag:

~~~yaml
snapshot: lts-22.7
packages:
- text-2.0.2
flags:
  text:
    developer: true
~~~


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/stack_yaml_vs_cabal_package_file.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# stack.yaml versus package.yaml versus a Cabal file

What is the difference between a `stack.yaml` file, a `package.yaml` file and a
Cabal file (named `<package_name>.cabal`)? This page aims to make that clear.

In short:

* `stack.yaml` contains project-level configuration for Stack, and may contain
  project-specific options and non-project-specific options.

* `package.yaml` contains a description of a package in the
  [Hpack](https://github.com/sol/hpack) format. Hpack, including Stack's
  built-in version, uses the file to create a Cabal file.

* a Cabal file also contains a description of a package, but in the format used
  by Cabal.

## package.yaml versus a Cabal file

Why two different formats to describe packages? Hpack is considered to have some
advantages over the underlying Cabal format, which are explained its project
repository. They include that the Hpack format supports YAML syntax and the
automatic generation of the lists of `exposed-modules` used in the Cabal format.

The remainder of this page will focus on the difference between a `stack.yaml`
file and a package description file.

## Package versus project

Stack is a build tool and it uses Cabal, a build system. Cabal defines the
concept of a _package_. A package has:

* A name and version
* optionally, one library
* optionally, one or more executables
* A Cabal file (or, as mentioned above, an [Hpack](https://github.com/sol/hpack)
  `package.yaml` file that generates a Cabal file)
* And a bunch more

There is a one-to-one correspondence between a package and a Cabal file.

Stack defines a new concept called a _project_. A project has:

* A snapshot _resolver_ (more on this later)
* Extra dependencies on top of the snapshot
* Optionally, one or more local Cabal packages
* Flag and GHC options configurations
* And a bunch more Stack configuration

Often you will have a project that defines only one local Cabal package that you
are working on. If you need to specify a dependency, a source of confusion can
be why you need to specify it both in the `stack.yaml` file _and_
in the Cabal file. To explain, let's take a quick detour to talk about snapshots
and how Stack resolves dependencies.

## Snapshots and resolvers

Stack follows a rule that says, for any project, there is precisely one version
of each package available. Obviously, for many packages there are _many_
versions available in the world. But when resolving a `stack.yaml` file, Stack
requires that you have chosen a specific version for each package available.

The most common means by which this set of packages is defined is via a
snapshot provided by Stackage. For example, if you go to the page
<https://www.stackage.org/lts-22.7>, you will see a list of 3,341 packages at
specific version numbers. When you then specify `snapshot: lts-22.7` or,
alternatively, `resolver: lts-22.7`, you're telling Stack to use those package
versions in resolving dependencies down to specific versions of packages.

Sometimes a snapshot doesn't have all of the packages that you want. Or you want
a different version of a package. Or you want to work on a local modification of
a package. In all of those cases, you can add more configuration data to your
`stack.yaml` file to override the values it received from your
[`snapshot`](yaml_configuration.md#snapshot) or
[`resolver`](yaml_configuration.md#resolver) setting. At the end of the day,
each of your projects will end up with some way of resolving a package name into
a specific version of that package.

## Why specify dependencies twice?

The package `acme-missiles` is not included in any Stackage snapshots. When you
add something like this to your `stack.yaml` file:

~~~yaml
extra-deps:
- acme-missiles-0.3
~~~

what you're saying to Stack is: "if at any point you find that you need to build
the `acme-missiles` package, please use version `0.3`". You are _not_ saying
"please build `acme-missiles` now." You are also not saying "my package depends
on `acme-missiles`." You are simply making it available should the need arise.

When you add to your `package.yaml` file:

~~~yaml
dependencies:
- acme-missiles
~~~

or, alternatively, you add directly to your Cabal file:

~~~yaml
build-depends: acme-missiles
~~~

you're saying "this package requires that `acme-missiles` be available." Since
`acme-missiles` doesn't appear in your snapshot, without also modifying your
`stack.yaml` to mention it via `extra-deps`, Stack will complain about the
dependency being unavailable.

You may challenge: but why go through all of that annoyance? Stack knows what
package I want, why not just go grab it? The answer is that, if Stack just
grabbed `acme-missiles` for you without it being specified in the `stack.yaml`
somehow, you'd lose reproducibility. How would Stack know which version to use?
It may elect to use the newest version, but if a new version is available in
the future, will it automatically switch to that?

Stack's core philosophy is that build plans are always reproducible. The
purpose of the `stack.yaml` file is to define an immutable set of packages. No
matter when in time you use it, and no matter how many new release happen in
the interim, the build plan generated should be the same.

(There is, however, at least one hole in this theory today, which is Hackage
revisions. When you specify `extra-deps: [acme-missiles-0.3]`, it doesn't
specify which revision of the Cabal file to use, and Stack will just choose the
latest. Stack has the ability to specify exact revisions of Cabal files, but
this isn't enforced as a requirement, because it is so different from the way
most people work with packages.)

And now, how about the other side: why doesn't Stack automatically add
`acme-missiles` to `build-depends` in your Cabal file if you add it as an
extra-dep? There are a surprising number reasons for this:

* The Cabal specification doesn't support anything like that
* There can be multiple packages in a project, and how do we know which package
  actually needs the dependency?
* There can be multiple components (libraries, executable, etc) in a package,
  and how do we know which of those actually needs the dependency?
* The dependency may only be conditionally needed, based on flags, operating
  system, or architecture. As an extreme example, we wouldn't want a Linux-only
  package to be built by force on Windows.

While for simple use cases it seems like automatically adding dependencies from
the Cabal file to the `stack.yaml` file or vice-versa would be a good thing, it
breaks down immediately for any semi-difficult case. Therefore, Stack requires
you to add it to both places.

And a final note, in case it wasn't clear. The example above used
`acme-missiles`, which is not in Stackage snapshots. If, however, you want to
depend on a package already present in the snapshot you've selected, there's no
need to add it explicitly to your `stack.yaml` file: it's already there
implicitly via the `snapshot` setting. This is what you do the majority of the
time, such as when you add `vector` or `mtl` as a `build-depends` value.

## Should I check-in automatically generated Cabal files?

Yes, you should. This recommendation was changed in
[issue #5210](https://github.com/commercialhaskell/stack/issues/5210). Please
see the discussion there.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/scripts.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Stack's script interpreter

Stack offers a very useful feature for running files: a script interpreter. For
too long have Haskellers felt shackled to bash or Python because it's just too
hard to create reusable source-only Haskell scripts. Stack attempts to solve
that.

You can use `stack <file_name>` to execute a Haskell source file. Usually, the
Stack command to be applied is specified using a special Haskell comment (the
Stack interpreter options comment) at the start of the source file. That command
is most often `stack script` but it can be, for example, `stack runghc`. If
there is no Stack interpreter options comment, Stack will warn that one was
expected.

An example will be easiest to understand. Consider the Haskell source file
`turtle-example.hs` with contents:

~~~haskell
#!/usr/bin/env stack
-- stack script --snapshot lts-22.7 --package turtle
{-# LANGUAGE OverloadedStrings #-}
import Turtle (echo)
main = echo "Hello World!"
~~~

=== "Unix-like"

    The first line beginning with the 'shebang' (`#!`) tells Unix to use Stack
    as a script interpreter, if the file's permissions mark it as executable. A
    shebang line is limited to a single argument, here `stack`.

    The file's permissions can be set with command `chmod` and then it can be
    run:

    ~~~text
    chmod +x turtle-example.hs
    ./turtle-example.hs
    ~~~

    !!! note

        On macOS:

        - Avoid `{-# LANGUAGE CPP #-}` in Stack scripts; it breaks the shebang
          line ([GHC #6132](https://gitlab.haskell.org/ghc/ghc/issues/6132))

        - Use a compiled executable, not another script, in the shebang line.
          Eg `#!/usr/bin/env runhaskell` will work but
          `#!/usr/local/bin/runhaskell` would not.

    Alternatively, the script can be run with command:

    ~~~text
    stack turtle-example.hs
    ~~~

=== "Windows (with PowerShell)"

    The first line beginning with the 'shebang' (`#!`) has a meaning on
    Unix-like operating systems but will be ignored by PowerShell. It can be
    omitted on Windows. The script can be run with command:

    ~~~text
    stack turtle-example.hs
    ~~~

In both cases, the command yields:

~~~text
Hello World!
~~~

the first time after a little delay (as GHC is downloaded, if necessary, and
dependencies are built) and subsequent times more promptly (as the runs are
able to reuse everything already built).

The second line of the source code is the Stack interpreter options comment. In
this example, it specifies the `stack script` command with the options of a
LTS Haskell 22.7 snapshot (`--snapshot lts-22.7`) and ensuring the
[`turtle` package](https://hackage.haskell.org/package/turtle) is available
(`--package turtle`). The version of the package will be that in the specified
snapshot (`lts-22.7` provides `turtle-1.6.2`).

## Arguments and interpreter options and arguments

Arguments for the script can be specified on the command line after the file
name: `stack <file_name> <arg1> <arg2> ...`.

The Stack interpreter options comment must specify what would be a single valid
Stack command at the command line if the file name were included as an argument,
starting with `stack`. It can include `--` followed by arguments. In particular,
the Stack command `stack <arg1> MyScript.hs <arg4>` with
Stack interpreter options comment:

~~~haskell
-- stack <arg2> <command> <arg3> -- <arg5>
~~~

is equivalent to the following command at the command line:

~~~text
stack <arg1> <arg2> <command> <arg3> -- MyScript.hs <arg4> <arg5>
~~~

The Stack interpreter options comment must be the first line of the file, unless
a shebang line is the first line, when the comment must be the second line. The
comment must start in the first column of the line.

When many options are needed, a block style comment that splits the command over
more than one line may be more convenient and easier to read.

For example, the command `stack MyScript.hs arg1 arg2` with `MyScript.hs`:

~~~haskell
#!/usr/bin/env stack
{- stack script
   --snapshot lts-22.7
   --
   +RTS -s -RTS
-}
import Data.List (intercalate)
import System.Environment (getArgs)
import Turtle (echo, fromString)

main = do
  args <- getArgs
  echo $ fromString $ intercalate ", " args
~~~

is equivalent to the following command at the command line:

~~~text
stack script --snapshot lts-22.7 -- MyScript.hs arg1 arg2 +RTS -s -RTS
~~~

where `+RTS -s -RTS` are some of GHC's
[runtime system (RTS) options](https://downloads.haskell.org/~ghc/latest/docs/users_guide/runtime_control.html).

## Just-in-time compilation

As with using `stack script` at the command line, you can pass the `--compile`
flag to make Stack compile the script, and then run the compiled executable.
Compilation is done quickly, without optimization. To compile with optimization,
pass the `--optimize` flag instead. Compilation is done only if needed; if the
executable already exists, and is newer than the script, Stack just runs the
executable directly.

This feature can be good for speed (your script runs faster) and also for
durability (the executable remains runnable even if the script is disturbed, eg
due to changes in your installed GHC/snapshots, changes to source files during
git bisect, etc.)

## Using multiple packages

As with using `stack script` at the command line, you can also specify multiple
packages, either with multiple `--package` options, or by providing a comma or
space separated list. For example:

~~~haskell
#!/usr/bin/env stack
{- stack script
   --snapshot lts-22.7
   --package turtle
   --package "stm async"
   --package http-client,http-conduit
-}
~~~

## Stack configuration for scripts

With the `stack script` command, all Stack YAML configuration files (global and
project-level) are ignored.

With the `stack runghc` command, if the current working directory is inside a
project then that project's Stack project-level YAML configuration is effective
when running the script. Otherwise the script uses the global project
configuration specified in `<Stack root>/global-project/stack.yaml`.

## Testing scripts

You can use the flag `--script-no-run-compile` on the command line to enable (it
is disabled by default) the use of the `--no-run` option with `stack script`
(and forcing the `--compile` option). The flag may help test that scripts
compile in CI (continuous integration).

For example, consider the following simple script, in a file named `Script.hs`,
which makes use of the joke package
[`acme-missiles`](https://hackage.haskell.org/package/acme-missiles):

~~~haskell
{- stack script
   --snapshot lts-22.7
   --package acme-missiles
-}
import Acme.Missiles (launchMissiles)

main :: IO ()
main = launchMissiles
~~~

The command `stack --script-no-run-compile Script.hs` then behaves as if the
command
`stack script --snapshot lts-22.7 --package acme-missiles --no-run --compile -- Script.hs`
had been given. `Script.hs` is compiled (without optimisation) and the resulting
executable is not run: no missiles are launched in the process!

## Writing independent and reliable scripts

The `stack script` command will automatically:

* Install GHC and libraries, if missing. `stack script` behaves as if the
  `--install-ghc` flag had been passed at the command line.
* Require that all packages used be explicitly stated on the command line.

This ensures that your scripts are _independent_ of any prior deployment
specific configuration, and are _reliable_ by using exactly the same version of
all packages every time it runs so that the script does not break by
accidentally using incompatible package versions.

In earlier versions of Stack, the `runghc` command was used for scripts and can
still be used in that way. In order to achieve the same effect with the `runghc`
command, you can do the following:

1. Use the `--install-ghc` option to install the compiler automatically
2. Explicitly specify all packages required by the script using the `--package`
   option. Use `-hide-all-packages` GHC option to force explicit specification
   of all packages.
3. Use the `--snapshot` Stack option to ensure a specific GHC version and
   package set is used.

It is possible for configuration files to affect `stack runghc`. For that
reason, `stack script` is strongly recommended. For those curious, here is an
example with `runghc`:

~~~haskell
#!/usr/bin/env stack
{- stack
  runghc
  --install-ghc
  --snapshot lts-22.7
  --package base
  --package turtle
  --
  -hide-all-packages
  -}
~~~

The `runghc` command is still very useful, especially when you're working on a
project and want to access the package databases and configurations used by that
project. See the next section for more information on configuration files.

## Loading scripts in GHCi

Sometimes you want to load your script in GHCi to play around with your program.
In those cases, you can use `exec ghci` option in the script to achieve
it. Here is an example:

~~~haskell
#!/usr/bin/env stack
{- stack
   exec ghci
   --install-ghc
   --snapshot lts-22.7
   --package turtle
-}
~~~


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/docker_integration.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

Docker integration
===============================================================================

Stack has support for automatically performing builds inside a Docker
container, using volume mounts and user ID switching to make it mostly seamless.
FP Complete provides images for use with stack that include GHC, tools, and
optionally have all of the Stackage LTS packages pre-installed in the global
package database.

The primary purpose for using stack/docker this way is for teams to ensure all
developers are building in an exactly consistent environment without team
members needing to deal with Docker themselves.

See the
[how stack can use Docker under the hood](https://www.fpcomplete.com/blog/2015/08/stack-docker)
blog post for more information about the motivation and implementation of stack's
Docker support.

If you'd like to build Docker images that contain your Haskell
executables, see [Building Haskell Apps with
Docker](https://www.fpcomplete.com/blog/2017/12/building-haskell-apps-with-docker).

Prerequisites
-------------------------------------------------------------------------------

### Supported operating systems

**Linux 64-bit**: Docker use requires machine (virtual or metal) running a Linux
distribution
[that Docker supports](https://docs.docker.com/installation/#installation), with
a 64-bit kernel. If you do not already have one, we suggest Ubuntu 14.04
("trusty") since this is what we test with.

**macOS**: [Docker for Mac](https://docs.docker.com/docker-for-mac/) is the
supported way to use Docker integration on macOS (the older Docker Machine
(boot2docker) approach to using Docker on macOS is not supported due to issues
with host volume mounting that make Stack nearly unusable for anything but the
most trivial projects).

Other Un*xen are not officially supported but there are ways to get them working.
See [#194](https://github.com/commercialhaskell/stack/issues/194) for details
and workarounds.

Note: you may want to use set the `mount-mode` option to `delegated`, since
this can dramatically improve performance on macOS (see
[configuration](#configuration) for more information).

**Windows does not work at all** (see
[#2421](https://github.com/commercialhaskell/stack/issues/2421)).

### Docker

Install the latest version of Docker by following the
[instructions for your operating system](http://docs.docker.com/installation/).

The Docker client should be able to connect to the Docker daemon as a non-root
user. For example (from
[here](http://docs.docker.com/installation/ubuntulinux/#ubuntu-raring-1304-and-saucy-1310-64-bit)):

    # Add the connected user "${USER}" to the docker group.
    # Change the user name to match your preferred user.
    sudo gpasswd -a ${USER} docker

    # Restart the Docker daemon.
    sudo service docker restart

You will now need to log out and log in again for the group addition
to take effect.

Note the above has security implications.  See [security](#security) for more.

Usage
-------------------------------------------------------------------------------

This section assumes that you already have Docker installed and working. If
not, see the [prerequisites](#prerequisites) section. If you run into any
trouble, see the [troubleshooting](#troubleshooting) section.

### Enable in stack.yaml

The most basic configuration is to add this to your project's `stack.yaml`:

    docker:
        enable: true

See [configuration](#configuration) for additional options. You can enable it on
the command-line using `stack --docker`.

Please note that in a docker-enabled configuration, stack uses the GHC installed
in the Docker container by default. To use a compiler installed by stack, add

    system-ghc: false

(see [`system-ghc`](yaml_configuration.md#system-ghc)).

### Use stack as normal

With Docker enabled, most stack sub-commands will automatically launch
themselves in an ephemeral Docker container (the container is deleted as soon as
the command completes). The project directory and `~/.stack` are volume-mounted
into the container, so any build artifacts are "permanent" (not deleted with the
container).

The first time you run a command with a new image, you will be prompted to run
`stack docker pull` to pull the image first. This will pull a Docker
image with a tag that matches your snapshot. Only LTS snapshots are supported
(we do not generate images for nightly snapshots).  Not every LTS version is
guaranteed to have an image existing, and new LTS images tend to lag behind
the LTS snapshot being published on stackage.org.  Be warned: these images are
rather large!

Docker sub-commands
-------------------------------------------------------------------------------

These `stack docker` sub-commands have Docker-specific functionality. Most other
`stack` commands will also use a Docker container under the surface if Docker is
enabled.

### pull - Pull latest version of image

`stack docker pull` pulls an image from the Docker registry for the first time,
or updates the image by pulling the latest version.

### reset - Reset the Docker "sandbox"

In order to preserve the contents of the in-container home directory between
runs, a special "sandbox" directory is volume-mounted into the container.
`stack docker reset` will reset that sandbox to its defaults.

Note: `~/.stack` is separately volume-mounted, and is left alone during reset.

Command-line options
-------------------------------------------------------------------------------

The default Docker configuration can be overridden on the command-line. See
`stack --docker-help` for a list of all Docker options, and consult
[configuration](#configuration) section below for more information about
their meanings. These are global options, and apply to all commands (not just
`stack docker` sub-commands).

Configuration
-------------------------------------------------------------------------------

`stack.yaml` contains a `docker:` section with Docker settings.  If this
section is omitted, Docker containers will not be used.  These settings can
be included in project, user, or global configuration.

Here is an annotated configuration file.  The default values are shown unless
otherwise noted.

    docker:

      # Set to false to disable using Docker.  In the project configuration,
      # the presence of a `docker:` section implies docker is enabled unless
      # `enable: false` is set.  In user and global configuration, this is not
      # the case.
      enable: true

      # The name of the repository to pull the image from.  See the "repositories"
      # section of this document for more information about available repositories.
      # If this includes a tag (e.g. "my/image:tag"), that tagged image will be
      # used.  Without a tag specified, the LTS version slug is added automatically.
      # Either `repo` or `image` may be specified, but not both.
      repo: "fpco/stack-build"

      # Exact Docker image name or ID.  Overrides `repo`. Either `repo` or `image`
      # may be specified, but not both.  (default none)
      image: "5c624ec1d63f"

      # Registry requires login.  A login will be requested before attempting to
      # pull.
      registry-login: false

      # Username to log into the registry.  (default none)
      registry-username: "myuser"

      # Password to log into the registry.  (default none)
      registry-password: "SETME"

      # If true, the image will be pulled from the registry automatically, without
      # needing to run `stack docker pull`.  See the "security" section of this
      # document for implications of enabling this.
      auto-pull: true

      # If true, the container will be run "detached" (in the background).  Refer
      # to the Docker users guide for information about how to manage containers.
      # This option would rarely make sense in the configuration file, but can be
      # useful on the command-line.  When true, implies `persist`.
      detach: false

      # If true, the container will not be deleted after it terminates.  Refer to
      # the Docker users guide for information about how to manage containers. This
      # option would rarely make sense in the configuration file, but can be
      # useful on the command-line.  `detach` implies `persist`.
      persist: false

      # What to name the Docker container.  Only useful with `detach` or
      # `persist` true.  (default none)
      container-name: "example-name"

      # Sets the network used by docker. Gets directly passed to dockers `net`
      # argument (default: host)
      network: host

      # Additional arguments to pass to `docker run`.  (default none)
      run-args: ["--net=bridge"]

      # Directories from the host to volume-mount into the container.  If it
      # contains a `:`, the part before the `:` is the directory on the host and
      # the part after the `:` is where it should be mounted in the container.
      # (default none, aside from the project and stack root directories which are
      # always mounted)
      mount:
        - "/foo/bar"
        - "/baz:/tmp/quux"

      # Sets the volume mount mode, passed directly to `docker`.
      # The default mode (consistent) is safest, but may suffer poor performance
      # on non-Linux platforms such as macOS, where the `delegated` mode will
      # be significantly faster.
      # See https://docs.docker.com/docker-for-mac/osxfs-caching/
      # for valid values and the implications of changing the default.
      mount-mode: delegated

      # Environment variables to set in the container.  Environment variables
      # are not automatically inherited from the host, so if you need any specific
      # variables, use the `--docker-env` command-line argument version of this to
      # pass them in.  (default none)
      env:
        - "FOO=BAR"
        - "BAR=BAZ QUUX"

      # Location of a Docker container-compatible 'stack' executable with the
      # matching version. This executable must be compatible with the Docker
      # image in terms of platform (linux-x86_64) and shared libraries
      # (statically linked is best, otherwise the image needs to have the
      # same shared libraries installed).
      # Valid values are:
      #   host: use the host's executable.  This is the default when the host's
      #     executable is known to work (e.g., from official linux-x86_64 bindist)
      #   download: download a compatible executable matching the host's version.
      #     This is the default when the host's executable is not known to work
      #   image: use the 'stack' executable baked into the image.  The version
      #     must match the host's version
      #   /path/to/stack: path on the host's local filesystem
      stack-exe: host

      # If true (the default when using the local Docker Engine), run processes
      # in the Docker container as the same UID/GID as the host.  The ensures
      # that files written by the container are owned by you on the host.
      # When the Docker Engine is remote (accessed by tcp), defaults to false.
      set-user: true

      # Require the version of the Docker client to be within the specified
      # Cabal-style version range (e.g., ">= 1.6.0 && < 1.9.0")
      require-docker-version: "any"

Image Repositories
-------------------------------------------------------------------------------

FP Complete provides the following public image repositories on Docker Hub:

- [fpco/stack-build](https://registry.hub.docker.com/r/fpco/stack-build/) (the
  default) - GHC (patched), tools (Stack, Cabal (the tool), happy, alex, etc.),
  and system developer libraries required to build all Stackage packages.

FP Complete also builds custom variants of these images for their clients.

These images can also be used directly with `docker run` and provide a complete
Haskell build environment.

In addition, most Docker images that contain the basics for running GHC can be
used with Stack's Docker integration. For example, the
[official Haskell image repository](https://hub.docker.com/_/haskell/) works.
See [Custom images](#custom-images) for more details.

Security
-------------------------------------------------------------------------------

Having `docker` usable as a non-root user is always a security risk, and will
allow root access to your system. It is also possible to craft a `stack.yaml`
that will run arbitrary commands in an arbitrary docker container through that
vector, thus a `stack.yaml` could cause stack to run arbitrary commands as root.
While this is a risk, it is not really a greater risk than is posed by the
docker permissions in the first place (for example, if you ever run an unknown
shell script or executable, or ever compile an unknown Haskell package that uses
Template Haskell, you are at equal risk). Nevertheless, there are
[plans to close the stack.yaml loophole](https://github.com/commercialhaskell/stack/issues/260).

One way to mitigate this risk is, instead of allowing `docker` to run as
non-root, replace `docker` with a wrapper script that uses `sudo` to run the
real Docker client as root. This way you will at least be prompted for your root
password. As [@gregwebs](https://github.com/gregwebs) pointed out, put this
script named `docker` in your PATH (and make sure you remove your user from the
`docker` group as well, if you added it earlier):

    #!/bin/bash -e
    # The goal of this script is to maintain the security privileges of sudo
    # Without having to constantly type "sudo"
    exec sudo /usr/bin/docker "$@"

Additional notes
-------------------------------------------------------------------------------

### Volume-mounts and ephemeral containers

Since filesystem changes outside of the volume-mounted project directory are not
persisted across runs, this means that if you `stack exec sudo apt-get install some-ubuntu-package`,
that package will be installed but then the container it's
installed in will disappear, thus causing it to have no effect. If you wish to
make this kind of change permanent, see later instructions for how to create a
[derivative Docker image](#derivative-image).

Inside the container, your home directory is a special location that volume-
mounted from within your project directory's `.stack-work` in such a
way as that installed GHC/cabal packages are not shared between different
Stackage snapshots.  In addition, `~/.stack` is volume-mounted from the host.

### Network

stack containers use the host's network stack within the container
by default, meaning a process running in the container can connect to
services running on the host, and a server process run within the container
can be accessed from the host without needing to explicitly publish its port.
To run the container with an isolated network, use `--docker-run-args` to pass
the `--net` argument to `docker-run`.  For example:

    stack --docker-run-args='--net=bridge --publish=3000:3000' \
          exec some-server

will run the container's network in "bridge" mode (which is Docker's default)
and publish port 3000.

### Persistent container

If you do want to do all your work, including editing, in the container, it
might be better to use a persistent container in which you can install Ubuntu
packages. You could get that by running something like
`stack --docker-container-name=NAME --docker-persist exec bash`. This
means when the container exits, it won't be deleted. You can then restart it
using `docker start -a -i NAME`. It's also possible to detach from a container
while it continues running in the background using by pressing Ctrl-P Ctrl-Q,
and then reattach to it using `docker attach NAME`.

Note that each time you run `stack --docker-persist`, a _new_ persistent
container is created (it will not automatically reuse the previous one).
See the [Docker user guide](https://docs.docker.com/userguide/) for more
information about managing Docker containers.

### Derivative image

Creating your own custom derivative image can be useful if you need to install
additional Ubuntu packages or make other changes to the operating system. Here
is an example (replace `stack-build:custom` if you prefer a different name for
your derived container, but it's best if the repo name matches what you're
deriving from, only with a different tag, to avoid recompilation):

    ;;; On host
    $ sudo stack  --docker-persist --docker-container-name=temp exec bash

    ;;; In container, make changes to OS
    # apt-get install r-cran-numderiv
    [...]
    # exit

    ;;; On host again
    $ docker commit temp stack-build:custom
    $ docker rm temp

Now you have a new Docker image named `stack-build:custom`. To use the new image, run
a command such as the following or update the corresponding values in your
`stack.yaml`:

    stack --docker-image=stack-build:custom <COMMAND>

Note, however, that any time a new image is used, you will have to re-do this
process. You could also use a Dockerfile to make this reusable. Consult the
[Docker user guide](https://docs.docker.com/userguide/) for more
on creating Docker images.

### Custom images

The easiest way to create your own custom image us by extending FP Complete's
images, but if you prefer to start from scratch, most images that include the
basics for building code with GHC will work. The image doesn't even, strictly
speaking, need to include GHC, but it does need to have libraries and tools that
GHC requires (e.g., libgmp, gcc, etc.).

There are also a few ways to set up images that tightens the integration:

* Create a user and group named `stack`, and create a `~/.stack` directory for
  it. Any build plans and caches from it will be copied from the image by Stack,
  meaning they don't need to be downloaded separately.
* Any packages in GHC's global package database will be available. This can be
  used to add private libraries to the image, or the make available a set of
  packages from an LTS release.

Troubleshooting
-------------------------------------------------------------------------------

### "No Space Left on Device", but 'df' shows plenty of disk space

This is likely due to the storage driver Docker is using, in combination with
the large size and number of files in these images. Use `docker info|grep 'Storage Driver'`
to determine the current storage driver.

We recommend using either the `overlay` or `aufs` storage driver for stack, as
they are least likely to give you trouble.  On Ubuntu, `aufs` is the default for
new installations, but older installations sometimes used `devicemapper`.

The `devicemapper` storage driver's doesn't work well with large filesystems,
and we have experienced other instabilities with it as well. We recommend
against its use.

The `btrfs` storage driver has problems running out of metadata space long
before running out of actual disk space, which requires rebalancing or adding
more metadata space. See
[CoreOS's btrfs troubleshooting page](https://coreos.com/docs/cluster-management/debugging/btrfs-troubleshooting/)
for details about how to do this.

Pass the `-s <driver>` argument to the Docker daemon to set the storage driver
(in `/etc/default/docker` on Ubuntu). See
[Docker daemon storage-driver option](https://docs.docker.com/reference/commandline/cli/#daemon-storage-driver-option)
for more details.

You may also be running out of inodes on your filesystem.  Use `df -i` to check
for this condition.  Unfortunately, the number of inodes is set when creating
the filesystem, so fixing this requires reformatting and passing the `-N`
argument to mkfs.ext4.

### Name resolution doesn't work from within container

On Ubuntu 12.04, by default `NetworkManager` runs `dnsmasq` service, which sets
`127.0.0.1` as your DNS server. Since Docker containers cannot access this
dnsmasq, Docker falls back to using Google DNS (8.8.8.8/8.8.4.4). This causes
problems if you are forced to use internal DNS server. This can be fixed by
executing:

    sudo sed 's@dns=dnsmasq@#dns=dnsmasq@' -i \
        /etc/NetworkManager/NetworkManager.conf && \
    sudo service network-manager restart

If you have already installed Docker, you must restart the daemon for this
change to take effect:

    sudo service docker restart

<small>
The above commands turn off `dnsmasq` usage in NetworkManager
configuration and restart network manager.  They can be reversed by executing
`sudo sed 's@#dns=dnsmasq@dns=dnsmasq@' -i /etc/NetworkManager/NetworkManager.conf && sudo service network-manager restart`.
These instructions are adapted from
[the Shipyard Project's QuickStart guide](https://github.com/shipyard/shipyard/wiki/QuickStart#127011-dns-server-problem-on-ubuntu).
</small>

### Cannot pull images from behind firewall that blocks TLS/SSL

If you are behind a firewall that blocks TLS/SSL and pulling images from a
private Docker registry, you must edit the system configuration so that the
`--insecure-registry <registry-hostname>` option is passed to the Docker daemon.
For example, on Ubuntu:

    echo 'DOCKER_OPTS="--insecure-registry registry.example.com"' \
        |sudo tee -a /etc/default/docker
    sudo service docker restart

This does require the private registry to be available over plaintext HTTP.

See
[Docker daemon insecure registries documentation](https://docs.docker.com/reference/commandline/cli/#insecure-registries)
for details.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/nix_integration.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Nix integration

[:octicons-tag-24: 0.1.10.0](https://github.com/commercialhaskell/stack/releases/tag/v0.1.10.0)

[Nix](https://nixos.org/) is a purely functional package manager. Stack can be
configured to integrate with Nix. Integration provides these benefits:

* more reproducible builds. This is because fixed versions of any system
  libraries and commands required to build the project are automatically built
  using Nix and managed locally for each project. These system packages never
  conflict with any existing versions of these libraries on your system. That
  they are managed locally to the project means that you don't need to alter
  your system in any way to build any odd project pulled from the Internet; and
* implicit sharing of system packages between projects. This means you don't
  have more copies on-disk than you need.

The Nix package manager is a pre-requisite for integration. On Linux (including
Windows Subsystem for Linux) and macOS, it can be downloaded and installed from
the [Nix download page](https://nixos.org/download.html).

When integrated with Nix, Stack handles Haskell dependencies as it usually does
and the Nix package manager handles the _non-Haskell_ dependencies needed by the
Haskell packages.

Stack downloads Haskell packages from [Stackage](https://www.stackage.org/lts)
and builds them locally. Stack uses Nix to download
[Nix packages][nix-search-packages]. These provide the GHC compiler and external
C libraries that you would normally install manually.

Nix's `nix-shell` starts an interactive shell based on a Nix expression. Stack
can automatically create a Nix build environment in the background using
`nix-shell`. There are two alternative options to create such a build
environment:

1. provide a list of [Nix packages][nix-search-packages]
2. provide a `shell.nix` file that gives you more control over the libraries and
   tools available inside the shell.

A `shell.nix` file requires writing code in Nix's
[custom language][nix-language]. Use this option only if you know Nix and have
special requirements, such as using custom Nix packages that override the
standard ones or using system libraries with special requirements.

### Checking the Nix installation

Once Nix is installed, the Nix commands (`nix-shell` etc) should be available.
If they are not, it could be because the file
`$HOME/.nix-profile/etc/profile.d/nix.sh` is not sourced by your shell.

You should either:

1. run `source ~/.nix-profile/etc/profile.d/nix.sh` each time you open a
   terminal and need Nix; or
2. add the command `source ~/.nix-profile/etc/profile.d/nix.sh` to your
   `~/.bashrc` or `~/.bash_profile` file.

A Nix path can be specified between angle brackets, e.g. `<nixpkgs>`, and the
directories listed in the `NIX_PATH` environment variable will be searched for
the given file or directory name. Stack makes use of path `<nixpkgs>`. From
Nix 2.4, `NIX_PATH` is not set by `nix.sh`. If `NIX_PATH` is not set, Nix will
fall back to (first) `$HOME/.nix-defexpr/channels` in impure and unrestricted
evaluation mode. However, Stack may use a pure Nix mode (see further
[below](#pure-and-impure-nix-shells)). That directory can be appended to
`NIX_PATH` with
`export NIX_PATH=${NIX_PATH:+$NIX_PATH:}$HOME/.nix-defexpr/channels`. For
information about how Stack itself can configure `NIX_PATH`, see further
[below](#nix-package-sources).

### Enable Nix integration

On NixOS, Nix integration is enabled by default; on other operating systems it
is disabled. To enable Nix integration, add the following section to your Stack
YAML configuration file (`stack.yaml` or `config.yaml`):

~~~yaml
nix:
  enable: true  # false by default, except on NixOS
~~~

The equivalent command line flag (which will prevail) is `--[no-]nix`. Passing
any `--nix-*` option on the command line will imply the `--nix` option.

If Nix integration is not enabled, Stack will notify the user if a `nix`
executable is on the PATH. If that notification is unwanted, it can be muted by
setting Stack's configuration option
[`notify-if-nix-on-path`](yaml_configuration.md#notify-if-nix-on-path) to
`false`.

With Nix integration enabled, `stack build` and `stack exec` will automatically
launch themselves in a local build environment (using `nix-shell` behind the
scenes). It is not necessary to run `stack setup`, unless you want to cache a
GHC installation before running a build.

**Known limitation on macOS:** currently, `stack --nix ghci` fails on macOS, due
to a bug in GHCi when working with external shared libraries.

### Supporting both Nix and non-Nix developers

With Nix integration enabled in Stack's YAML configuration file, every developer
of your project needs to have Nix installed, but the developer also gets all
external libraries automatically.

Julien Debon of Tweag has published a [blog post][tweag-blog-post] on
*Smooth, non-invasive Haskell Stack and Nix shell integration* (2 June 2022).
The post explains how to set things up so that both Nix and non-Nix developers
can work together on the same project. The `tweag/haskell-stack-nix-example`
[GitHub repository][tweag-example] provides an example of working Stack and Nix
shell integration to accompany the post.

Nix 2.4 (released 1 November 2021) introduced a new and experimental format to
package Nix-based projects, known as 'flakes'.

The example below adapts and extends the example accompanying the blog post
above to use Nix flakes. The `flake.nix` file is:

~~~nix
{
  description = "my project description";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};

        hPkgs =
          pkgs.haskell.packages."ghc8107"; # need to match Stackage LTS version
                                           # from stack.yaml snapshot

        myDevTools = [
          hPkgs.ghc # GHC compiler in the desired version (will be available on PATH)
          hPkgs.ghcid # Continuous terminal Haskell compile checker
          hPkgs.ormolu # Haskell formatter
          hPkgs.hlint # Haskell codestyle checker
          hPkgs.hoogle # Lookup Haskell documentation
          hPkgs.haskell-language-server # LSP server for editor
          hPkgs.implicit-hie # auto generate LSP hie.yaml file from cabal
          hPkgs.retrie # Haskell refactoring tool
          # hPkgs.cabal-install
          stack-wrapped
          pkgs.zlib # External C library needed by some Haskell packages
        ];

        # Wrap Stack to work with our Nix integration. We don't want to modify
        # stack.yaml so non-Nix users don't notice anything.
        # - no-nix: We don't want Stack's way of integrating Nix.
        # --system-ghc    # Use the existing GHC on PATH (will come from this Nix file)
        # --no-install-ghc  # Don't try to install GHC if no matching GHC found on PATH
        stack-wrapped = pkgs.symlinkJoin {
          name = "stack"; # will be available as the usual `stack` in terminal
          paths = [ pkgs.stack ];
          buildInputs = [ pkgs.makeWrapper ];
          postBuild = ''
            wrapProgram $out/bin/stack \
              --add-flags "\
                --no-nix \
                --system-ghc \
                --no-install-ghc \
              "
          '';
        };
      in {
        devShells.default = pkgs.mkShell {
          buildInputs = myDevTools;

          # Make external Nix c libraries like zlib known to GHC, like
          # pkgs.haskell.lib.buildStackProject does
          # https://github.com/NixOS/nixpkgs/blob/d64780ea0e22b5f61cd6012a456869c702a72f20/pkgs/development/haskell-modules/generic-stack-builder.nix#L38
          LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath myDevTools;
        };
      });
}
~~~

Check-in this `flake.nix` to your project's repository. Run the `nix develop`
command (it searches for `flake.nix` by default) and you'll find a new
`flake.lock` file. That file that pins the precise nixpkgs package set. Check-in
that `flake.lock` file as well, and every Nix developer of your project will use
precisely the same package set.

### GHC through Nix packages

Nix integration will instruct Stack to build inside a local build environment.
That environment will also download and use a
[GHC Nix package](https://search.nixos.org/packages?query=haskell.compiler.ghc)
matching the required version of the configured Stack
[snapshot](yaml_configuration.md#snapshot).

Enabling Nix integration means that packages will always be built using the
local GHC from Nix inside your shell, rather than your globally installed system
GHC (if any).

Stack can use only GHC versions that are in the Nix package repository. The
[Nixpkgs master branch](https://github.com/NixOS/nixpkgs/tree/master/pkgs/development/haskell-modules)
usually picks up new versions quickly, but it takes two or three days before
those updates arrive in the `unstable` channel. Release channels, like
`nixos-22.05`, receive those updates only occasionally -- say, every two or
three months --, so you should not expect them to have the latest compiler
available. Fresh NixOS installs use a release version by default.

To identify whether a given compiler is available, you can use the following Nix
command:

~~~sh
nix-env -f "<nixpkgs>" -qaP -A haskell.compiler.ghc924
haskell.compiler.ghc924  ghc-9.2.4
~~~

If Nix doesn't know that version of GHC, you'll see the following error message:

~~~sh
nix-env -f "<nixpkgs>" -qaP -A haskell.compiler.ghc999
error: attribute ‘ghc999’ in selection path ‘haskell.compiler.ghc999’ not found
~~~

You can list all known Haskell compilers in Nix with the following:

~~~sh
nix-instantiate --eval -E "with import <nixpkgs> {}; lib.attrNames haskell.compiler"
~~~

Alternatively, use `nix repl`, a convenient tool to explore nixpkgs:

~~~sh
nix repl
~~~

In the REPL, load nixpkgs and get the same information through autocomplete:

~~~sh
nix-repl> :l <nixpkgs>
nix-repl> haskell.compiler.ghc<Tab>
~~~

You can type and evaluate any Nix expression in the Nix REPL, such as the one we
gave to `nix-instantiate` earlier.

### External C libraries through Nix packages

To let Nix manage external C libraries, add (for example) the following section
to your Stack YAML configuration file:

~~~yaml
nix:
  enable: true
  packages: [zlib, glpk, pcre]
~~~

The equivalent command line option is `--nix-packages "zlib glpk pcre"`.

The `packages` key and the `shell-file` key (see further below) are
alternatives. Specifying both results in an error.

The example above will instruct Stack to build inside a local build environment
that will have the Nix packages
[zlib](https://search.nixos.org/packages?query=zlib),
[glpk](https://search.nixos.org/packages?query=glpk) and
[pcre](https://search.nixos.org/packages?query=pcre)
installed, which provide the C libraries of the same names.

**Note:** currently, Stack only discovers dynamic and static libraries in the
`lib/` folder of any Nix package, and likewise header files in the `include/`
folder. If you're dealing with a package that doesn't follow this standard
layout, you'll have to deal with that using a custom `shell.nix` file (see further below).

### External C libraries through a `shell.nix` file

In Nix, a 'derivation' is a description of a build action and its result is a
Nix store object. Nix's [custom language][nix-language] can provide a fully
customized derivation as an environment to use. To specify such a `shell.nix`
file, add the following section to your Stack YAML configuration file:

~~~yaml
nix:
  enable: true
  shell-file: shell.nix
~~~

The equivalent command line option (which will prevail) is
`--nix-shell-file shell.nix`.

The `packages` and `shell-file` keys are alternatives. Specifying both results
in an error.

Defining a `shell.nix` file allow you to override some Nix derivations, for
instance to change some build options of the libraries you use, or to set
additional environment variables. For further information, see the
[Nix manual][nix-manual-exprs].

The `shell.nix` file that is the equivalent of the
`packages: [zlib, glpk, pcre]` example above is:

~~~nix
{ghc}:
with (import <nixpkgs> {});

haskell.lib.buildStackProject {
  inherit ghc;
  name = "myEnv";
  buildInputs = [ zlib glpk pcre ];
}
~~~

The `buildStackProject` utility function is documented in the
[Nixpkgs manual][nixpkgs-manual-haskell].

Stack expects the `shell.nix` file to define a function of with one argument
called `ghc` (arguments are not positional), which you should give to
function `buildStackProject`. This argument is a GHC Nix package in the
version as defined in the snapshot you set in Stack's project-level
configuration file (`stack.yaml`, by default).

### Pure and impure Nix shells

By default, Stack will run the build in a *pure* Nix build environment (or
*shell*), which means two important things:

1. basically **no environment variable will be forwarded** from your user
   session to the nix-shell (variables like `HTTP_PROXY` or `PATH` notably will
   not be available); and
2. the build should fail if you haven't specified all the dependencies in the
   `packages:` section of the Stack YAML configuration file, even if these
   dependencies are installed elsewhere on your system. This behaviour enforces
   a complete description of the build environment to facilitate
   reproducibility.

To override this behaviour, add the following section to your Stack YAML
configuration file:

~~~yaml
nix:
  enable: true
  pure: false
~~~

The equivalent command line flag (which will prevail) is `--[no-]-nix-pure`.

**Note:** On macOS, shells are non-pure by default currently. This is due soon
to be resolved locale issues. So on macOS you'll need to be a bit more careful
to check that you really have listed all dependencies.

### Nix package sources

Nix organizes its packages in snapshots of packages (each snapshot being a
"package set") similar to how Stackage organizes Haskell packages.  By default,
`nix-shell` will look for the "nixpkgs" package set located by your `NIX_PATH`
environment variable. This package set can be different depending on when you
installed Nix and which nixpkgs channel you're using (similar to the LTS channel
for stable packages and the nightly channel for bleeding edge packages in
[Stackage](https://www.stackage.org/)). This is bad for reproducibility so that
nixpkgs should be pinned, i.e., set to the same package set for every developer
of your project.

To set or override the Nix package set, add the following section to your Stack
YAML configuration file:

~~~yaml
nix:
  path: [nixpkgs=<path_to_my_own_nixpkgs_clone>]
~~~

The equivalent command line option is
`--nix-path <path_to_my_own_nixpkgs_clone>`.

By this means, you can ask Nix to use your own local checkout of the nixpkgs
repository. You could in this way use a bleeding edge nixpkgs, cloned from the
`NixOS/nixpkgs` [repository](http://www.github.com/NixOS/nixpkgs) `master`
branch, or edit the Nix descriptions of some packages.

The Tweag example [repository][tweag-example] shows how you can pin a package
set.

## Non-project specific configuration

Below is a summary of the non-project specific configuration options and their
default values. The options can be set in Stack's project-level configuration
file (`stack.yaml`, by default) or its global configuration file
(`config.yaml`).

~~~yaml
nix:

  # false by default, except on NixOS. Is Nix integration enabled?
  enable: true

  # true by default. Should Nix run in a pure shell?
  pure: true

  # Empty by default. The list of packages you want to be available in the
  # nix-shell at build time (with `stack build`) and run time (with
  # `stack exec`).
  packages: []

  # Unset by default. You cannot set this option if `packages:`
  # is already present and not empty.
  shell-file: shell.nix

  # A list of strings, empty by default. Additional options that will be passed
  # verbatim to the `nix-shell` command.
  nix-shell-options: []

  # A list of strings, empty by default, such as
  # `[nixpkgs=/my/local/nixpkgs/clone]` that will be used to override
  # NIX_PATH.
  path: []

  # false by default. Whether to add your Nix dependencies as Nix garbage
  # collection roots. This way, calling nix-collect-garbage will not remove
  # those packages from the Nix store, saving you some time when running
  # stack build again with Nix support activated.
  #
  # This creates a `nix-gc-symlinks` directory in the project `.stack-work`.
  # To revert that, just delete this `nix-gc-symlinks` directory.
  add-gc-roots: false
~~~

`stack --nix-help` will list the equivalent command line flags and options.

## Stack and developer tools on NixOS

NixOS is a Linux distribution based on Nix, that is composed using modules and
packages defined in the Nixpkgs project.

When using Stack on NixOS, you must use Stack's Nix integration to install GHC.
That is because external C libraries in NixOS are not installed in the usual
distribution directories. GHC installed through Stack (without Nix) can't find
those libraries and, therefore, can't build most projects. However, GHC provided
through Nix can be modified to find the external C libraries provided through
Nix.

[nix-language]: https://nixos.wiki/wiki/Overview_of_the_Nix_Language
[nix-manual-exprs]: http://nixos.org/manual/nix/stable/expressions/writing-nix-expressions.html
[nix-search-packages]: https://search.nixos.org/packages
[nixpkgs-manual-haskell]: https://haskell4nix.readthedocs.io/nixpkgs-users-guide.html?highlight=buildStackProject#how-to-build-a-haskell-project-using-stack
[tweag-blog-post]: https://www.tweag.io/blog/2022-06-02-haskell-stack-nix-shell/
[tweag-example]: https://github.com/tweag/haskell-stack-nix-example/


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/editor_integration.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Editor integration

## Visual Studio Code

For further information, see the [Stack and Visual Code](Stack_and_VS_Code.md)
documentation.

## Shell auto-completion

Love tab-completion of commands? You're not alone. If you're on bash, just run
the following command (or add it to `.bashrc`):

~~~text
eval "$(stack --bash-completion-script stack)"
~~~

For more information and other shells, see the
[Shell auto-completion wiki page](https://docs.haskellstack.org/en/stable/shell_autocompletion)


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/debugging.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Debugging

To profile a component of the current project, pass the
[`--profile` flag](build_command.md#-profile-flag) to `stack build`.

The flag:

* for project packages, turns on the Cabal flag
  [`--enable-profiling`](https://cabal.readthedocs.io/en/stable/setup-commands.html#cmdoption-runhaskell-Setup.hs-configure-enable-profiling);
* turns on the Cabal flag
  [`--enable-library-profiling`](https://cabal.readthedocs.io/en/stable/setup-commands.html#cmdoption-runhaskell-Setup.hs-configure-enable-library-profiling); and
* passes GHC's
  [`+RTS -p` runtime options](https://downloads.haskell.org/ghc/latest/docs/users_guide/profiling.html#rts-flag--p)
  to any test suites and benchmarks.

For example the following command will build the `my-tests` testsuite with
profiling options and create a `my-tests.prof` file in the current directory
as a result of the test run.

~~~text
stack test --profile my-tests
~~~

The `my-tests.prof` file now contains time and allocation info for the test run.

To create a profiling report for an executable, e.g. `my-exe`, you can command:

~~~text
stack exec --profile -- my-exe +RTS -p
~~~

For more fine-grained control of compilation options there are the
[`--library-profiling` flag](build_command.md#-no-library-profiling-flag) and
[`--executable-profiling` flag](build_command.md#-no-executable-profiling-flag).

The `--library-profiling` flag:

* turns on the Cabal flag
  [`--enable-library-profiling`](https://cabal.readthedocs.io/en/stable/setup-commands.html#cmdoption-runhaskell-Setup.hs-configure-enable-library-profiling); and
* passes GHC's
  [`+RTS -p` runtime options](https://downloads.haskell.org/ghc/latest/docs/users_guide/profiling.html#rts-flag--p)
  to any test suites and benchmarks.

The `--executable-profiling` flag:

* for project packages, turns on the Cabal flag
  [`--enable-profiling`](https://cabal.readthedocs.io/en/stable/setup-commands.html#cmdoption-runhaskell-Setup.hs-configure-enable-profiling);
* turns on the Cabal flag
  [`--enable-library-profiling`](https://cabal.readthedocs.io/en/stable/setup-commands.html#cmdoption-runhaskell-Setup.hs-configure-enable-library-profiling); and
* passes GHC's
  [`+RTS -p` runtime options](https://downloads.haskell.org/ghc/latest/docs/users_guide/profiling.html#rts-flag--p)
  to any test suites and benchmarks.

To enable compilation with profiling options by default you can add the
following to a project-level or global YAML configuration file:

~~~yaml
build:
  library-profiling: true
  executable-profiling: true
~~~

## Further reading

For more commands and uses, see the
[official GHC chapter on profiling](https://downloads.haskell.org/~ghc/latest/docs/html/users_guide/profiling.html),
the [Haskell wiki](https://wiki.haskell.org/How_to_profile_a_Haskell_program),
and the
[chapter on profiling in Real World Haskell](http://book.realworldhaskell.org/read/profiling-and-optimization.html).

## Tracing

To generate a backtrace in case of exceptions during a test or benchmarks run,
use the `--trace` flag. Like `--profile` this compiles with profiling options,
but adds the `+RTS -xc` runtime option.

## Debugging symbols

Building with debugging symbols in the
[DWARF information](https://ghc.haskell.org/trac/ghc/wiki/DWARF) is supported by
Stack. This can be done by passing the flag `--ghc-options="-g"` and also to
override the default behaviour of stripping executables of debugging symbols by
passing either one of the following flags: `--no-strip`,
`--no-library-stripping` or `--no-executable-stripping`.

In Windows, GDB can be installed to debug an executable with
`stack exec -- pacman -S gdb`. Windows' Visual Studio compiler's debugging
format PDB is not supported at the moment. This might be possible by
[separating](https://stackoverflow.com/questions/866721/how-to-generate-gcc-debug-symbol-outside-the-build-target)
debugging symbols and
[converting](https://github.com/rainers/cv2pdb) their format. Or as an option
when
[using the LLVM backend](http://blog.llvm.org/2017/08/llvm-on-windows-now-supports-pdb-debug.html).


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/developing_on_windows.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Developing on Windows #

On Windows, Stack comes with an installation of [MSYS2](https://www.msys2.org/).
An environment of MSYS2 (by default, `MINGW64` on 64-bit Windows or `MINGW32` on
32-bit Windows) will be used by Stack to provide a Unix-like shell and
environment for Stack. This may be necessary for installing some Haskell
packages, such as those which use `configure` scripts, or if your project needs
some additional tools during the build phase.

No matter which terminal software you choose (Windows Terminal, Console Windows
Host, Command Prompt, PowerShell, Git bash or any other) you can use this
environment too by executing all programs through
`stack exec -- <program_name>`.

Executables and libraries can be installed with the MSYS2 package manager
`pacman`. All tools can be found in the [index](https://packages.msys2.org) to
MSYS2 packages. A [guide](https://www.msys2.org/docs/package-management/) to
package management with `pacman` is also available. `pacman` &mdash; like all
other tools in the Stack environment &mdash; should be started with
`stack exec -- pacman`. Help about `pacman` commands (operations) can be
obtained by `stack exec -- pacman --help`. Help about a specific `pacman`
operation can be obtained by using `--help` (or `-h`) with an operation. For
example, help about the operation `--sync` (or `-S`) can be obtained with
`stack exec -- pacman --sync --help` or, equivalently,
`stack exec -- pacman -Sh`.

Command `stack path --bin-path` to see the PATH in the Stack environment. If the
relevant MSYS2 environment is `MINGW64`, on Windows, it includes the
`\mingw64\bin`, `\usr\bin` and `\usr\local\bin` directories of the
Stack-supplied MSYS2. (It includes the corresponding directory if the relevant
MSYS2 environment is other than `MINGW64`.) If your executable depends on files
(for example, dynamic-link libraries) in those directories and you want to run
it outside of the Stack environment, you will need to ensure copies of those
files are on the PATH.

Command `stack path --extra-include-dirs` and `stack path --extra-library-dirs`
to see the extra directories searched for C header files or system libraries
files in the Stack environment. If the relevant MSYS2 environment is `MINGW64`,
on Windows, it includes the `\mingw64\include` (include) and the `\mingw64\lib`
and `\mingw64\bin` directories (library) of the Stack-supplied MSYS2. (It
includes the corresponding directories if the relevant MSYS2 environment is
other than `MINGW64`.)

For further information about configuring the relevant MSYS2 environment, see
Stack's [`msys-environment`](yaml_configuration.md#msys-environment)
configuration option.

## Updating the Stack-supplied MSYS2 ##

The Stack-supplied MSYS2 can itself be updated with the Stack-supplied `pacman`.
See the MSYS2 guide [Updating MSYS2](https://www.msys2.org/docs/updating/). If
the Stack-supplied `pacman` has a version that is 5.0.1.6403 or greater (see
`stack exec -- pacman --version`) then the command to update is simply:

    stack exec -- pacman -Suy

This command may need to be run more than once, until everything is reported by
`pacman` as 'up to date' and 'nothing to do'.

## Setup.hs ##

`Setup.hs` is automatically run inside the Stack environment. So when you need
to launch another tool you don't need to prefix the command with `stack exec --`
within the custom `Setup.hs` file.

## Pacman packages to install for common Haskell packages ##

The following lists MSYS2 packages known to allow the installation of some
common Haskell packages on Windows. Feel free to submit additional entries via a
pull request.

* For [text-icu](https://github.com/bos/text-icu) install
  `mingw64/mingw-w64-x86_64-icu`

## CMake ##

CMake has trouble finding other tools even if they are available on the PATH.
Likely this is not a CMake problem but one of the environment not fully
integrating. For example GHC comes with a copy of GCC which is not installed by
MSYS2 itself. If you want to use this GCC you can provide a full path to it, or
find it first with `System.Directory.findExecutable` if you want to launch GCC
from a Haskell file such as `Setup.hs`.

Experience tells that the `mingw-w64` versions of Make and CMake are most
likely to work. Though there are other versions available through `pacman`, so
have a look to see what works for you. Both tools can be installed with the
commands:

    stack exec -- pacman -S mingw-w64-x86_64-make
    stack exec -- pacman -S mingw-w64-x86_64-cmake

Even though Make and CMake are then both installed into the same environment,
CMake still seems to have trouble to find Make. To help CMake find GCC and Make
supply the following flags:

    -DCMAKE_C_COMPILER=path
    -DCMAKE_MAKE_PROGRAM=path


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/shell_autocompletion.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Shell auto-completion

The following adds support for the tab completion of standard Stack arguments to
the following shell programs: Bash, Zsh (the Z shell) and fish. Completion of
file names and executables within Stack is still lacking. For further
information, see issue
[#823](https://github.com/commercialhaskell/stack/issues/832).

!!! info

    Stack's completion library provides
    [hidden options](https://github.com/pcapriotti/optparse-applicative#bash-zsh-and-fish-completions)
    for Bash, Zsh, and fish which output commands used for shell
    auto-completion. For example:

    ~~~bash
    $ stack --bash-completion-script stack
    _stack()
    {
        local CMDLINE
        local IFS=$'\n'
        CMDLINE=(--bash-completion-index $COMP_CWORD)

        for arg in ${COMP_WORDS[@]}; do
            CMDLINE=(${CMDLINE[@]} --bash-completion-word $arg)
        done

        COMPREPLY=( $(stack "${CMDLINE[@]}") )
    }

    complete -o filenames -F _stack stack
    ~~~

=== "Bash"

    Add the output of the following command to your preferred completions file
    (e.g. `~/.config/bash_completions.d/stack`).

    ~~~bash
    stack --bash-completion-script $(which stack)
    ~~~

    You may need to `source` this.

=== "Zsh"

    Add the output of the following command to your preferred completions file
    (e.g. `~/.config/zsh/completions/_stack`).

    ~~~zsh
    stack --zsh-completion-script $(which stack)
    ~~~

    You won't need to `source` this, but do update your `fpath`:

    ~~~zsh
    fpath=($HOME/.config/zsh/completions $fpath)
    autoload -U compinit && compinit
    ~~~

=== "fish"

    Add the output of the following command to your preferred completions file
    (e.g. `~/.config/fish/completions/stack.fish`).

    ~~~fish
    stack --fish-completion-script $(which stack)
    ~~~


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/CI.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Continuous integration (CI)

## GitHub Actions

The Stack repository uses GitHub Actions for its own CI. For further
information, see the guide to
[contributing](CONTRIBUTING.md#continuous-integration-ci).

## Azure

For further information, see the [Azure CI](azure_ci.md) documentation.

## Travis

For further information, see the [Travis CI](travis_ci.md) documentation.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/travis_ci.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Travis CI

This page documents how to use Stack on
[Travis CI](https://travis-ci.org/). We assume you have basic
familiarity with Travis. We provide two fully baked example files
ready to be used on your projects:

* [The simple Travis configuration](https://raw.githubusercontent.com/commercialhaskell/stack/stable/doc/travis-simple.yml)
  is intended for applications that do not require multiple GHC
  support or cross-platform support. It builds and tests your project
  with just the settings present in your `stack.yaml` file.
* [The complex Travis configuration](https://raw.githubusercontent.com/commercialhaskell/stack/stable/doc/travis-complex.yml)
  is intended for projects that need to support multiple GHC versions
  and multiple OSes, such as open source libraries to be released to
  Hackage. It tests against cabal-install, as well as Stack on Linux
  and macOS. The configuration is significantly more involved to allow
  for all of this branching behavior.

    !!! note
        It is likely going to be necessary to modify this configuration to match
        the needs of your project, such as tweaking the build matrix to alter
        which GHC versions you test against, or to specify GHC-version-specific
        `stack.yaml` files if necessary. Don't be surprised if it doesn't work
        the first time around. See the multiple GHC section below for more
        information.

Each of these configurations is ready to be used immediately, just
copy-paste the content into the `.travis.yml` file in the root or your
repo, enable Travis on the repo, and you're good to go.

You may also be interested in using AppVeyor, which supports Windows
builds, for more cross-platform testing. There's a
[short blog post available on how to do this](http://www.snoyman.com/blog/2016/08/appveyor-haskell-windows-ci),
or just copy in
[the appveyor.yml file](https://raw.githubusercontent.com/commercialhaskell/stack/stable/doc/appveyor.yml)

The rest of this document explains the details of common Travis
configurations for those of you who want to tweak the above
configuration files or write your own.

*Note:* both Travis and Stack infrastructures are actively developed. We try to
 document best practices at the moment.

## Container infrastructure

For Stack on Travis to be practical, we must use caching. Otherwise build times
will take an incredibly long time, about 30 minutes versus 3-5. Caching is
currently available only for
[container-based Travis infrastructure](http://docs.travis-ci.com/user/workers/container-based-infrastructure/).
Shortly we have to add

~~~yaml
sudo: false

# Caching so the next build will be fast too.
cache:
  directories:
  - $HOME/.stack
~~~

To the `.travis.yml`. This however restricts how we can install GHC and Stack on
the Travis machines.

## Installing Stack

Currently there is only one reasonable way to install Stack: fetch precompiled
binary from the GitHub.

~~~yaml
before_install:
# Download and unpack the stack executable
- mkdir -p ~/.local/bin
- export PATH=$HOME/.local/bin:$PATH
- travis_retry curl -L https://get.haskellstack.org/stable/linux-x86_64.tar.gz | tar xz --wildcards --strip-components=1 -C ~/.local/bin '*/stack'
~~~

## Installing GHC

There are two ways to install GHC:

- Let Stack download GHC
- Install GHC using [apt plugin](http://docs.travis-ci.com/user/apt/)

See the above scripts for an example of the first option (letting Stack
download GHC). Here, we will explain the second option. With single GHC the
situation is simple:

~~~yaml
before_install:
  # Install stack as above
  # ...
  # Configure stack to use the system GHC installation
  - stack config set system-ghc --global true
  - export PATH=/opt/ghc/7.10.2/bin:$PATH

addons:
  apt:
    sources:
    - hvr-ghc
    packages:
    - ghc-7.10.2
~~~

### Multiple GHC - parametrised builds

Travis apt plugin doesn't yet support installing apt packages dynamically
(https://github.com/travis-ci/travis-ci/issues/4291). That for we need to write
a bit repetitive `.travis.yml`.

Also for different GHC versions, you probably want to use different `stack.yaml`
files.

~~~yaml
# N.B. No top-level env: declaration!

matrix:
  include:
  - env: GHCVER=7.8.4 STACK_YAML=stack.yaml
    addons:
      apt:
        sources:
        - hvr-ghc
        packages:
        - ghc-7.8.4
  - env: GHCVER=7.10.1 STACK_YAML=stack-7.10.yaml
    addons:
      apt:
        sources:
        - hvr-ghc
        packages:
        - ghc-7.10.1
  - env: GHCVER=head STACK_YAML=stack-head.yaml
    addons:
      apt:
        sources:
        - hvr-ghc
        packages:
        - ghc-head
  allow_failures:
    - env: GHCVER=head STACK_YAML=stack-head.yaml

before_install:
  # ghc
  - export PATH=/opt/ghc/$GHCVER/bin:$PATH
~~~

Especially to use ghc `HEAD` you need to pass `--skip-ghc-check` option to Stack.

## Running tests

After the environment setup, actual test running is simple:

~~~yaml
script:
  - stack --no-terminal --skip-ghc-check test
~~~

In case you're wondering: we need `--no-terminal` because stack does some fancy
sticky display on smart terminals to give nicer status and progress messages,
and the terminal detection is broken on Travis.

## Other details

Some Stack commands will run for long time (when cache is cold) without
producing any output. To avoid timeouts, use the built in [travis_wait](https://docs.travis-ci.com/user/common-build-problems/#Build-times-out-because-no-output-was-received).


~~~yaml
install:
  - travis_wait stack --no-terminal --skip-ghc-check setup
  - travis_wait stack --no-terminal --skip-ghc-check test --only-snapshot
~~~

## Examples

- [futurice/fum2github](https://github.com/futurice/fum2github/blob/master/.travis.yml)
- [haskell-distributed/cloud-haskell](https://github.com/haskell-distributed/cloud-haskell/blob/master/.travis.yml)
- [simonmichael/hledger](https://github.com/simonmichael/hledger/blob/master/.travis.yml)
- [fpco/wai-middleware-crowd](https://github.com/fpco/wai-middleware-crowd/blob/master/.travis.yml)
- [commercialhaskell/all-cabal-hashes-tool](https://github.com/commercialhaskell/all-cabal-hashes-tool/blob/master/.travis.yml)


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/azure_ci.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Azure CI

This page documents how to use Stack on [Azure CI](http://dev.azure.com/).

## Quick Start

Note that you have to create [azure pipelines](#creating-azure-pipelines) for
your project and then you need to put the relevant configuration files:

* For simple Azure configuration, copy-paste the
  [azure-simple](https://raw.githubusercontent.com/commercialhaskell/stack/stable/doc/azure/azure-simple.yml)
  file into `azure-pipelines.yml`.
* For complex Azure configuration, you need to take the below linked four files
  and put all of them into the `.azure` directory.

For a more detailed explanation, you can read further.

## Simple and Complex configuration

We provide two fully baked configuration ready to be used on your projects:

* [The simple Azure configuration](https://raw.githubusercontent.com/commercialhaskell/stack/stable/doc/azure/azure-simple.yml)
  is intended for applications that do not require multiple GHC support or
  cross-platform support. It builds and tests your project with just the
  settings present in your `stack.yaml` file.
* The complex Azure configuration is intended for projects that need to support
  multiple GHC versions and multiple operating systems, such as open source
  libraries to be released to Hackage. It tests against Stack for different
  snapshots on Linux, macOS and Windows. These are the files for the complex
  configuration:
  - [azure-pipelines.yml](https://raw.githubusercontent.com/commercialhaskell/stack/stable/doc/azure/azure-pipelines.yml)
    : This is the starter file used by the Azure CI.
  - [azure-linux-template.yml](https://raw.githubusercontent.com/commercialhaskell/stack/stable/doc/azure/azure-linux-template.yml)
    : Template for Azure Linux build
  - [azure-osx-template.yml](https://raw.githubusercontent.com/commercialhaskell/stack/stable/doc/azure/azure-osx-template.yml)
    : Template for Azure macOS build
  - [azure-windows-template.yml](https://raw.githubusercontent.com/commercialhaskell/stack/stable/doc/azure/azure-windows-template.yml)
    : Template for Azure Windows build

  !!! note

      It is likely going to be necessary to modify this configuration to match
      the needs of your project, such as tweaking the build matrix to alter
      which GHC versions you test against, or to specify GHC-version-specific
      `stack.yaml` files if necessary. Don't be surprised if it doesn't work the
      first time around. See the multiple GHC section below for more
      information.

## Creating Azure Pipelines

Each of these configurations is ready to be used immediately. But before we go
into where to put them, we have to create pipeline for your project in Azure
CI platform:

* Go to [dev.azure.com](https://dev.azure.com). You have to initially sign-in to
  your microsoft account there.
* Once you have logged in to your Microsoft account, you have to sign in to
  [Azure devops](https://user-images.githubusercontent.com/737477/52465678-70963080-2ba5-11e9-83d8-84112b140236.png)
  from there.
* You will be greeted with a
  [dashboard](https://user-images.githubusercontent.com/737477/52465677-70963080-2ba5-11e9-904a-c15c7c0524ef.png)
  where you can create your projects.
* Click the "Create Project" button and fill the relevant information in the
  [dialog](https://user-images.githubusercontent.com/737477/52465676-70963080-2ba5-11e9-82a4-093ee58f11c9.png) and then click the "Create" button.
* This will lead you to the project
  [dashboard](https://user-images.githubusercontent.com/737477/52465675-6ffd9a00-2ba5-11e9-917e-3dec251fcc87.png)
  page where you can create pipelines.
* Click on "Pipelines" in the left menu. This will load the
  [pipelines page](https://user-images.githubusercontent.com/737477/52465673-6ffd9a00-2ba5-11e9-97a4-04e703ae1fbc.png)
  on the right.
* Click on the button "New Pipeline" and you have to follow through the wizard
  there. You need to choose your github repository (or Azure repos) and follow
  the wizard. Note that in the
  [Configure step](https://user-images.githubusercontent.com/737477/52465670-6ffd9a00-2ba5-11e9-83a3-9fffdacbf249.png)
  you have to select the "Starter Pipeline". This will open up an
  [editor window](https://user-images.githubusercontent.com/737477/52465669-6f650380-2ba5-11e9-9662-e9c6fc2682b5.png).
  You can leave the existing YAML configuration there as it is and click the
  "Save and run" button. That will popup a
  [dialog](https://user-images.githubusercontent.com/737477/52465668-6f650380-2ba5-11e9-9203-6347a609e3c4.png).
  Select the relevant option and click "Save and run" button. (Note that this
  step would have created `azure-pipelines.yml` in your repository. You have to
  replace that with the appropriate configuration file.)

The rest of this document explains the details of common Azure configurations
for those of you who want to tweak the above configuration files or write your
own.

*Note:* both Azure and Stack infrastructures are actively developed. We try to
document best practices at the moment.

## Infrastructure

Note that you need at least one agent to build your code. You can specify which
virtual image you want to choose using this configuration:

~~~yaml
pool:
  vmImage: ubuntu-latest
~~~

The other popular options are `macOS-latest`, `windows-latest` for macOS and
Windows respectively. You can find the
[complete list](https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/hosted?view=vsts&tabs=yaml)
here. You also have the option to select a specific supported ubuntu version
like `ubuntu-18.08`.

## Installing Stack

Currently there is only one reasonable way to install Stack: fetch a precompiled
binary from GitHub.

~~~yaml
- script: |
    mkdir -p ~/.local/bin
    curl -L https://get.haskellstack.org/stable/linux-x86_64.tar.gz | tar xz --wildcards --strip-components=1 -C ~/.local/bin '*/stack'
  displayName: Install Stack
~~~

## Installing GHC

There are two ways to install GHC:

- Let Stack download GHC
- Install GHC using apt package manger. This method is only applicable for
  Debian based images.

But we only use the first method of using Stack to download GHC.

### Multiple GHC - parametrised builds

For different GHC versions, you probably want to use different project-level
configuration files (`stack.yaml`, by default). If you don't want to put a
specific `stack.yaml` for a particular snapshot and still want to test it, you
have specify your snapshot argument in `ARGS` environment variable (you will see
an example below).

~~~yaml
strategy:
  matrix:
    GHC 8.0:
      ARGS: "--snapshot lts-9"
    GHC 8.2:
      ARGS: "--snapshot lts-11"
    GHC 8.4:
      ARGS: "--snapshot lts-12"
    GHC 8.6:
      ARGS: "--snapshot lts-14"
    GHC 8.8:
      ARGS: "--snapsht lts-15"
    nightly:
      ARGS: "--snapshot nightly"
~~~

## Running tests

After the environment setup, actual test running is simple. Command:

~~~text
stack $ARGS test --bench --no-run-benchmarks --haddock --no-haddock-deps
~~~

## Other details

Some Stack commands will run for long time. To avoid timeouts, use the
[timeoutInMinutes](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/phases?tabs=yaml&view=azdevops#timeouts)
for jobs.

## Examples

- [commercialhaskell/stack](https://github.com/commercialhaskell/stack/blob/master/azure-pipelines.yml)
- [psibi/tldr-hs](http://github.com/psibi/tldr-hs)
- [psibi/wai-slack-middleware](https://github.com/psibi/wai-slack-middleware)


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/lock_files.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Lock Files

Stack attempts to provide reproducible build plans. This involves reproducibly
getting the exact same contents of source packages and configuration options
(like Cabal flags and GHC options) for a given set of input files. There are a
few problems with making this work:

* Entering all of the information to fully provide reproducibility is tedious.
  This would include things like Hackage revisions, hashes of remote tarballs,
  etc. Users don't want to enter this information.
* Many operations in Stack rely upon a "snapshot hash," which transitively
  includes the completed information for all of these dependencies. If any of
  that information is missing when parsing the `stack.yaml` file or snapshot
  files, it could be expensive for Stack to calculate it.

To address this, we follow the (fairly standard) approach of having a
_lock file_. The goal of the lock file is to cache completed locations of
project, snapshot packages and snapshots themselves so that:

* These files can be stored in source control
* Users on other machines can reuse these lock files and get identical build
  plans given that the used project packages and local snapshots are the same on
  those machines
* Rerunning `stack build` in the future is deterministic in the build plan, not
  depending on mutable state in the world like Hackage revisions

    !!! note

        If, for example, a tarball available remotely is deleted or the hash
        changes, it will not be possible for Stack to perform the build.
        However, by deterministic, we mean it either performs the same build or
        fails, never accidentally doing something different.

This document explains the contents of a lock file, how they are used, and how
they are created and updated.

## stack.yaml and snapshot files

Relevant to this discussion, Stack's project-level configuration file
(`stack.yaml`, by default) specifies:

* the parent snapshot (the [`snapshot`](yaml_configuration.md#snapshot) or
  [`resolver`](yaml_configuration.md#resolver) key)
* extra-deps

Some of this information can be incomplete. Consider this `stack.yaml` file:

~~~yaml
snapshot: lts-19.22
packages:
- .
extra-deps:
- acme-missiles-0.3
~~~

This information is _incomplete_. For example, the extra-deps may change in the
future. Instead, you could specify enough information in the `stack.yaml` file
to fully resolve that package. That looks like:

~~~yaml
extra-deps:
- hackage: acme-missiles-0.3@sha256:2ba66a092a32593880a87fb00f3213762d7bca65a687d45965778deb8694c5d1,613
  pantry-tree:
    size: 226
    sha256: 614bc0cca76937507ea0a5ccc17a504c997ce458d7f2f9e43b15a10c8eaeb033
~~~

The `lts-19.22` information is also incomplete. While we assume in general that
Haskell LTS snapshots never change, there's nothing that prohibits that from
happening. Instead, the complete version of that key is:

~~~yaml
snapshot:
- url: https://raw.githubusercontent.com/commercialhaskell/stackage-snapshots/master/lts/19/22.yaml
  size: 619399
  sha256: 5098594e71bdefe0c13e9e6236f12e3414ef91a2b89b029fd30e8fc8087f3a07
~~~

Users don't particularly feel like writing all of that. Therefore, it's common
to see _incomplete_ information in a `stack.yaml` file.

## Recursive snapshot layers

Snapshot files can be _recursive_, where `stack.yaml` refers to `foo.yaml`,
which refers to `bar.yaml`, which refers to `baz.yaml`. A local snapshot file
can refer to a remote snapshot file (available via an HTTP(S) URL).

We need to encode information from _all_ of these snapshot layers and the
`stack.yaml` file in the lock file, to ensure that we can detect if anything
changes.

## Performance

In addition to acting as a pure correctness mechanism, the design of a lock file
given here also works as a performance improvement. Instead of requiring that
all snapshot files be fully parsed on each Stack invocation, we can store
information in the lock file and bypass parsing of the additional files in the
common case of no changes.

## Lock file contents

The lock file contains the following information:

* Completed package locations for extra-deps and packages in snapshot files

    !!! note

        This only applies to _immutable_ packages. Mutable packages are not
        included in the lock file.

* Completed information for the snapshot locations

It looks like the following:

~~~yaml
# Lock file, some message about the file being auto-generated
snapshots:
  # Starts with the snapshot specified in stack.yaml,
  # then continues with the snapshot specified in each
  # subsequent snapshot file
  - original:
      foo.yaml # raw content specified in a snapshot file
    completed:
      file: foo.yaml
      sha256: XXXX
      size: XXXX
  - original:
      lts-13.9
    completed:
      size: 496662
      url: https://raw.githubusercontent.com/commercialhaskell/stackage-snapshots/master/lts/13/9.yaml
      sha256: 83de9017d911cf7795f19353dba4d04bd24cd40622b7567ff61fc3f7223aa3ea

packages:
- original: https://hackage.haskell.org/package/acme-missiles-0.3.tar.gz
  completed:
    size: 1442
    url: https://hackage.haskell.org/package/acme-missiles-0.3.tar.gz
    name: acme-missiles
    version: '0.3'
    sha256: e563d8b524017a06b32768c4db8eff1f822f3fb22a90320b7e414402647b735b
    pantry-tree:
      size: 226
      sha256: 614bc0cca76937507ea0a5ccc17a504c997ce458d7f2f9e43b15a10c8eaeb033
~~~

## Creation procedure

Whenever a project-level configuration file (`stack.yaml`, by default) is
loaded, Stack checks for a lock file in the same file path, with a `.lock`
extension added. For example, if you command:

~~~text
stack --stack-yaml my-stack.yaml build
~~~

or

~~~text
stack --stack-yaml my-stack.yaml build --dry-run
~~~

then Stack will use a lock file in the location `my-stack.yaml.lock`. For the
rest of this document, we'll assume that the files are simply `stack.yaml` and
`stack.yaml.lock`.

If the lock file does not exist, subject to Stack's
[`--lock-file`](global_flags.md#-lock-file-option) option, it will be
created by:

* Loading the `stack.yaml`
* Loading all snapshot files
* Completing all missing information
* Writing out the new `stack.yaml.lock` file to the disk

## Update procedure

Whenever a project-level configuration file (`stack.yaml`, by default) is
loaded, all completed package or snapshot locations (even those completed using
information from a lock file) get collected to form a new lock file in memory.
Subject to Stack's [`--lock-file`](global_flags.md#-lock-file-option) option,
that new lock file is compared against the one on disk and, if there are any
differences, written out to the disk.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/stack_work.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Stack work directories

Stack work directories are directories within a local project or package
directory in which Stack stores files created during the build process. Stack
can be used without an understanding of the content of those directories. In
particular, the [`stack exec`](exec_command.md) command sets up an environment
where relevant subdirectories of the project Stack work directory are on the
PATH.

## Naming

By default, Stack work directories are named `.stack-work`. The name can be
overidden by:

* the use of the
  [`STACK_WORK` environment variable](environment_variables.md#stack_work);
* the [`work-dir`](yaml_configuration.md#work-dir) non-project specific
  configuration option; or
* the [`--work-dir`](global_flags.md#-work-dir-option) command line option.

Given the location of Stack work directories, the name of the work directories
must be a relative path to a directory.

## Location

If the work directory does not already exist, it will be created by the
[`stack build`](build_command.md) command as a subdirectory of each project
package directory and, if different, the project directory.

## Project package Stack work directory

The Stack work directory for a project package will contain a `dist` directory.
This directory will contain a path to a directory containing:

* a `build` directory;
* a `package.conf.inplace` directory;
* a `stack-build-caches` directory;
* a `build-lock` file;
* a `setup-config` file;
* a `stack-cabal-mod` file. This file is used by Stack only for its modification
  time;
* a `stack-project-root` file. This file contains an absolute path to the
  project root directory; and
* a `stack-setup-config-mod` file. This file is used by Stack only for its
  modification time.

The directory, relative to the project package directory or the project
directory, is the one reported by [`stack path --dist-dir`](path_command.md).

=== "Unix-like"

    On Unix-like operating systems, the path to the directory is a directory
    named after the platform (including Stack's classification of variants of
    Linux distributions) followed by a directory named after the GHC version.

=== "Windows"

    On Windows, the path to the directory is an eight-character hash of the
    path that applies on Unix-like operating systems.

## Project Stack work directory

The Stack work directory for a project will contain a `install` directory.
This directory will contain a path to a directory containing:

* a `bin` directory, containing built executable files;
* a `doc` directory, containing a directory for each project package. This is
  the directory reported by [`stack path --local-doc-root`](path_command.md);
* if the [`stack hpc`](hpc_command.md) command is used, a `hpc` directory. This
  is the directory reported by [`stack path --local-hpc-root`](path_command.md);
* a `lib` directory, containing a directory named after the platform and the
  GHC version and, within that, a directory for each project package;
* a `pkgdb` directory. This is the directory reported by
  [`stack path --local-pkg-db`](path_command.md);
* a `stack.sqlite3` file; and
* a `stack.sqlite3.pantry-write-lock` file.

The directory is the one reported by
[`stack path --local-install-root`](path_command.md).

=== "Unix-like"

    On Unix-like operating systems, the path to the directory is a directory
    named after the platform (including Stack's classification of variants of
    Linux distributions) followed by a directory named after a SHA 256 hash
    (see further below) followed by a directory named after the version number
    of GHC.

    The SHA 256 hash is a hash of the following information:

    * the path to the specified compiler;
    * the information about the compiler provided by `ghc --info`;
    * the options that Stack passes to GHC for package that is not a project
      package; and
    * information about the immutable dependencies: their location, whether or
      not Haddock documentation is to be built, their flags, their GHC options,
      and their Cabal configuration options.

    The options that Stack passes to GHC for a package that is not a project
    package depend on:

    * the specification of
      [profiling](https://docs.haskellstack.org/en/stable/build_command/#flags-affecting-ghcs-behaviour);
    * the specification of
      [stripping](https://docs.haskellstack.org/en/stable/build_command/#flags-affecting-ghcs-behaviour); and
    * if
      [`apply-ghc-options: everything`](yaml_configuration.md#apply-ghc-options)
      is specified, any GHC command line options specified on the command line.

    !!! note

        As a consequence, the path reported by the following commands will
        differ (and similarly for the paths established by the
        [`stack exec`](exec_command.md) command):

        ~~~text
        stack path --local-install-root
        stack --profile path --local-install-root
        stack --no-strip path --local-install-root
        stack --profile --no-strip path --local-install-root
        ~~~

=== "Windows"

    On Windows, the path to the directory is an eight-character hash of the
    path that applies on Unix-like operating systems.

Following a `stack ghci` or `stack repl` command, the Stack work directory for
a project will contain a `ghci` directory. This directory will contain paths to
`cabal_macos.h` files that are generated automatically by Cabal.

!!! note

    Haskell Language Server makes use of the `stack ghci` command to obtain
    information.

If the [`stack hoogle`](hoogle_command.md) command is used, the Stack work
directory for a project will contain a `hoogle` directory. This directory will
contain a directory being the one reported by
[`stack path --local-hoogle-root`](path_command.md). The naming of the path to
the directory is same as for the path to the directory in the `install`
directory.
# /How Stack works (advanced)



- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/build_overview.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://rawgit.com/commercialhaskell/stack/master/doc/img/hidden-warning.svg"></a></div>

# Build overview

!!! warning

    This document should not be considered accurate until this warning is
    removed.

    This is a work-in-progress document covering the build process used by
    Stack. It was started following the Pantry rewrite work in Stack 2.1.1, and
    contains some significant changes/simplifications from how things used to
    work. This document will likely not fully be reflected in the behavior of
    Stack itself until late in the Stack 2.0 development cycle.

## Terminology

* Project package: anything listed in `packages` in stack.yaml
* Dependency: anything listed in extra-deps or a snapshot
* Target: package and/or component listed on the command line to be built. Can
  be either project package or dependency. If none specified, automatically
  targets all project packages
* Immutable package: a package which comes from Hackage, an archive, or a
  repository. In contrast to...
* Mutable package: a package which comes from a local file path. The contents
  of such a package are assumed to mutate over time.
* Write only database: a package database and set of executables for a given set
  of _immutable_ packages. Only packages from immutable sources and which
  depend exclusively on other immutable packages can be in this database.
  *NOTE* formerly this was the _snapshot database_.
* Mutable database: a package database and set of executables for packages which
  are either mutable or depend on such mutable packages. Importantly, packages
  in this database can be unregister, replaced, etc, depending on what happens
  with the source packages. *NOTE* formerly this was the *local database*.

Outdated terminology to be purged:

* Wanted
* Local
* Snapshot package

## Inputs

Stack pays attention to the following inputs:

* Current working directory, used for finding the default `stack.yaml` file and
  resolving relative paths
* The `STACK_YAML` environment variable
* Command line arguments (CLI args), as will be referenced below

Given these inputs, Stack attempts the following process when performing a build.

## Find the `stack.yaml` file

* Check for a `--stack-yaml` CLI arg, and use that
* Check for a `STACK_YAML` env var
* Look for a `stack.yaml` in this directory or ancestor directories
* Fall back to the default global project

This file is parsed to provide the following config values:

* `snapshot` (or, alternatively, `resolver`) (required field)
* `compiler` (optional field)
* `packages` (optional field, defaults to `["."]`)
* `extra-deps` (optional field, defaults to `[]`)
* `flags` (optional field, defaults to `{}`)
* `ghc-options` (optional field, defaults to `{}`)

`flags` and `ghc-options` break down into both _by name_ (applied to a
specific package) and _general_ (general option `*` for flags is only available
in CLI).

## Wanted compiler, dependencies, and project packages

* If the `--snapshot` CLI is present, ignore the `snapshot` (or `resolver`) and
  `compiler` config values
* Load up the indicated snapshot (either config value or CLI arg). This will
  provide:
    * A map from package name to package location, flags, GHC options,
      and if a package should be hidden. All package locations here
      are immutable.
    * A wanted compiler version, e.g. `ghc-8.6.5`
* If the `--compiler` CLI arg is set, or the `compiler` config value
  is set (and `--snapshot` CLI arg is not set), ignore the wanted
  compiler from the snapshot and use the specified wanted compiler
* Parse `extra-deps` into a `Map PackageName PackageLocation`,
  containing both mutable and immutable package locations. Parse
  `packages` into a `Map PackageName ProjectPackage`.
* Ensure there are no duplicates between these two sets of packages
* Delete any packages from the snapshot packages that appear in
  `packages` or `extra-deps`
* Perform a left biased union between the immutable `extra-deps`
  values and the snapshot packages. Ignore any settings in the
  snapshot packages that have been replaced.
* Apply the `flags` and `ghc-options` by name to these packages overwriting
  any previous values coming from a snapshot. If any values are specified
  but no matching package is found, it's an error. If a flag is not defined
  in the corresponding package cabal file, it's an error.
* We are now left with the following:
    * A wanted compiler version
    * A map from package name to immutable packages with package config (flags,
      GHC options, hidden)
    * A map from package name to mutable packages as dependencies with package
      config
    * A map from package name to mutable packages as project packages with
      package config

## Get actual compiler

Use the wanted compiler and various other Stack config values (not all
listed here) to find the actual compiler, potentially installing it in
the process.

## Global package sources

With the actual compiler discovered, list out the packages available
in its database and create a map from package name to
version/GhcPkgId. Remove any packages from this map which are present
in one of the other three maps mentioned above.

## Resolve targets

Take the CLI args for targets as raw text values and turn them into
actual targets.

* Do a basic parse of the values into one of the following:
    * Package name
    * Package identifier
    * Package name + component
    * Directory
* An empty target list is equivalent to listing the package names of
  all project packages
* For any directories specified, find all project packages in that
  directory or subdirectories therefore and convert to those package
  names
* For all package identifiers, ensure that either the package name
  does not exist in any of the three parsed maps from the "wanted
  compiler" step above, or that the package is present as an immutable
  dependency from Hackage. If so, create an immutable dependency entry
  with default flags, GHC options, and hidden status, and add this
  package to the set of immutable package dependencies.
* For all package names, ensure the package is in one of the four maps
  we have, and if so add to either the dependency or project package
  target set.
* For all package name + component, ensure that the package is a
  project package, and add that package + component to the set of
  project targets.
* Ensure that no target has been specified multiple times. (*FIXME*
  Mihai states: I think we will need an extra consistency step for
  internal libraries. Sometimes stack needs to use the mangled name
  (`z-package-internallibname-z..`), sometimes the
  `package:internallibname` one. But I think this will become obvious
  when doing the code changes.)

We now have an update four package maps, a new set of dependency
targets, and a new set of project package targets (potentially with
specific components).

## Apply named CLI flags

Named CLI flags are applied to specific packages by updating the
config in one of the four maps. If a flag is specified and no package
is found, it's an error. Note that flag settings are added _on top of_
previous settings in this case, and does not replace them. That is, if
previously we have `singleton (FlagName "foo") True` and now add
`singleton (FlagName "bar") True`, both `foo` and `bar` will now be
true. If any flags are specified but no matching package is found,
it's an error. If a flag is not defined in the corresponding package
cabal file, it's an error.

## Apply CLI GHC options

CLI GHC options are applied as general GHC options according to
`apply-ghc-options` setting.

## Apply general flags from CLI

`--flag *:flagname[:bool]` specified on the CLI are applied to any
project package which uses that flag name.

## Apply general GHC options

General options are divided into the following categories:

* `$locals` is deprecated, it's now a synonym for `$project`
* `$project` applies to all project packages, not to any dependencies
* `$targets` applies to all project packages that are targets, not to any
  dependencies or non-target project packages. This is the default option
  for `apply-ghc-options`
* `$everything` applies to all packages in the source map excluding
  global packages

These options get applied to any corresponding packages in
the source map. If some GHC options already exist for such a package then
they get prepended otherwise they get used as is.

## Determine snapshot hash

Use some deterministic binary serialization and SHA256 thereof to get
a hash of the following information:

* Actual compiler (GHC version, path, *FIXME* probably some other
  unique info from GHC, I've heard that `ghc --info` gives you
  something)
* Global database map
* Immutable dependency map

Motivation: Any package built from the immutable dependency map and
installed in this database will never need to be rebuilt.

!!! bug "To do"

    Caveat: do we need to take profiling settings into account here? How about
    Haddock status?

## Determine actual target components

* Dependencies: "default" components (all libraries and executables)
* Project packages:
    * If specific components named: only those, plus any libraries present
    * If no specific components, include the following:
        * All libraries, always
        * All executables, always
        * All test suites, _if_ `--test` specified on command line
        * All benchmarks, _if_ `--bench` specified on command line

## Construct build plan

* Applied to every target (project package or dependency)
* Apply flags, platform, and actual GHC version to resolve
  dependencies in any package analyzed
* Include all library dependencies for all enabled components
* Include all build tool dependencies for all enabled components
  (using the fun backwards compat logic for `build-tools`)
* Apply the logic recursively to come up with a full build plan
* If a task depends exclusively on immutable packages, mark it as
  immutable. Otherwise, it's mutable. The former go into the snapshot
  database, the latter into the local database.

We now have a set of tasks of packages/components to build, with full
config information for each package, and dependencies that must be
built first.

!!! bug "To do"

    There's some logic to deal with cyclic dependencies between test suites and
    benchmarks, where a task can be broken up into individual components versus
    be kept as a single task. Need to document this better. Currently it's the
    "all in one" logic.

## Unregister local modified packages

* For all mutable packages in the set of tasks, see if any files have
  changed since last successful build and, if so, unregister + delete
  their executables
* For anything which depends on them directly or transitively,
  unregister + delete their executables

## Perform the tasks

* Topological sort, find things which have no dependencies remaining
* Check if already installed in the relevant database
    * Check package database
    * Check Stack specific "is installed" flags, necessary for
      non-library packages
    * For project packages, need to also check which components were
      built, if tests were run, if we need to rerun tests, etc
* If all good: do nothing
* Otherwise, for immutable tasks: check the precompiled cache for an
  identical package installation (same GHC, dependencies, etc). If
  present: copy that over, and we're done.
* Otherwise, perform the build, register, write to the Stack specific
  "is installed" stuff, and (for immutable tasks) register to the
  precompiled cache

"Perform the build" consists of:

* Do a cabal configure, if needed
* Build the desired components
* For all test suites built, unless "no rerun tests" logic is on and
  we already ran the test, _or_ "no run tests" is on, run the test
* For all benchmarks built, unless "no run benchmarks" is on, run the
  benchmark


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/CONTRIBUTING.md


../CONTRIBUTING.md# /doc/ghci.md

<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# The `stack ghci` and `stack repl` commands

~~~text
stack ghci [TARGET/FILE] [--pedantic] [--ghci-options OPTIONS]
           [--ghc-options OPTIONS] [--flag PACKAGE:[-]FLAG] [--with-ghc GHC]
           [--[no-]load] [--package PACKAGE] [--main-is TARGET]
           [--load-local-deps] [--[no-]package-hiding] [--only-main] [--trace]
           [--profile] [--no-strip] [--[no-]test] [--[no-]bench]
~~~

A read–evaluate–print loop (REPL) environment takes single user inputs, executes
them, and returns the result to the user. GHCi is GHC's interactive environment.
The `stack ghci` or `stack repl` commands, which are equivalent, allow you to
load components and files of your project into GHCi.

The command accepts the same TARGET syntax as
[`stack build`](build_command.md#target-syntax). By default:

* Stack loads up GHCi with all the library and executable components of all the
  packages in the project. Pass the flag `--test` to include test suite
  components (unlike `stack build`, test suites will not be run). Pass the flag
  `--bench` to include benchmark components (unlike `stack build`, benchmarks
  will not be run).

It is also possible to specify a module source code file. For example:

~~~text
stack ghci src/MyFile.hs
~~~

Stack will identify which component the file is associated with, and use the
options from that component.

Pass the `--package` option to load GHCi with an additional package that is not
a direct dependency of your components. This option can be specified multiple
times.

Pass the option `--flag <package_name>:<flag_name>` or
`--flag <package_name:-<flag_name>` to set or unset a Cabal flag. This option
can be specified multiple times. The same Cabal flag name can be set (or unset)
for multiple packages with:

~~~text
--flag *:[-]<flag_name>
~~~

!!! note

    In order to set a Cabal flag for a GHC boot package, the package must either
    be an extra-dep or the package version must be specified with the
    `--package` option.

By default:

*   Stack uses the GHC specified in Stack's configuration. Pass the `--with-ghc`
    option with a file path to the executable to specify a different GHC
    executable;

*   Stack performs an inital build step. Pass the `--no-build` flag to skip the
    step. Pass the `--ghc-options` option to pass flags or options to GHC. Pass
    the `--profile`, `--no-strip`, `--trace` flags for the same behaviour as in
    the case of the `stack build` command.

    !!! info

        Not performing the initial build step speeds up the startup of GHCi. It
        only works if the dependencies of the loaded packages have already been
        built.

*   Stack runs GHCi via `ghc --interactive`. Pass the `--ghc-options` option to
    pass flags or options to GHC (during the initial build step) and to GHCi.
    Pass the `--pedantic` flag to pass the GHC options `-Wall` and `-Werror` to
    GHCi (only). Pass the `--ghci-options` option to pass flags or options to
    GHCi (only).

*   Stack configures GHCi to hide unnecessary packages, unless no packages are
    targetted and no additional packages are specified. Pass the
    `--package-hiding` flag to hide unnecessary packages or
    `--no-package-hiding` flag not to hide unnecessary packages.

*   Stack loads and imports all of the modules for each target. Pass the
    `--no-load` flag to skip the loading of modules. Pass the `--only-main` flag
    to skip the loading of modules other than the main module. Pass the
    `--load-local-deps` flag to include all local dependencies of targets.

    !!! info

        Not loading modules speeds up the startup of GHCi. Once in GHCi, you can
        use `:load myModule` to load a specific module in your project.

    !!! info

        The `--only-main` flag can be useful if:

        1.  You're loading the project in order to run it in GHCi (e.g. via
            `main`), and you intend to reload while developing. Without flag,
            you will need to quit and restart GHCi whenever a module gets
            deleted. With the flag, reloading should work fine in this case.

        2.  If many of your modules have exports named the same thing, then
            you'll need to refer to them using qualified names. To avoid this,
            use the `--only-main` flag to start with a blank slate and just
            import the modules you are interested in.

*   If there are multiple definitions for the `Main` module, Stack will ask you
    to select one from a list of options. Pass the `--main-is <target>` option
    to specific which `Main` module to load.

Stack combines all of the GHC options of components.

!!! note

    Combining GHC options should work out when packages share similar
    conventions. However, conflicts may arise, such as when one component
    defines default extensions which aren't assumed by another. For example,
    specifying `NoImplicitPrelude` in one component but not another is likely to
    cause failures. GHCi will be run with `-XNoImplicitPrelude`, but it is
    likely that modules in the other component assume that the `Prelude` is
    implicitly imported.

`stack ghci` configures GHCi by using a GHCi script file. Such files are located
in subdirectories of `<XDG_CACHE_HOME>/stack/ghci-script`, where
`<XDG_CACHE_HOME>` refers to the
[XDG Base Directory Specification](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html)
for user-specific non-essential (cached) data.

=== "Unix-like"

    The default for `<XDG_CACHE_HOME>` is `$HOME/.cache`.

=== "Windows"

     On Windows, the default for `<XDG_CACHE_HOME>` is `%LOCALAPPDATA%`.

## Running plain GHCi

`stack ghci` always runs GHCi configured to load code from packages in your
project. In particular, this means it passes in flags like `-hide-all-packages`
and `-package-id=` in order to configure which packages are visible to GHCi.

For doing experiments which just involve packages installed in your databases,
it may be useful to run GHCi plainly like:

~~~text
stack exec ghci
~~~

This will run a plain GHCi in an environment which includes `GHC_PACKAGE_PATH`,
and so will have access to your databases.

!!! note

    Running `stack ghci` on a pristine copy of the code doesn't currently build
    libraries
    (issue [#2790](https://github.com/commercialhaskell/stack/issues/2790)) or
    internal libraries
    (issue [#4148](https://github.com/commercialhaskell/stack/issues/4148)). It
    is recommended to always use `stack build` before using `stack ghci`, until
    these two issues are closed.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/nonstandard_project_init.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Non-standard project initialization

You may need to configure Stack to work with an existing project that has one or
more Cabal files but no Stack project-level configuration file (`stack.yaml`, by
default).

## The `stack init` command

The `stack init` command:

* finds all of the Cabal files in your current directory and subdirectories
  (unless you use `--ignore-subdirs`) and determines the packages and versions
  they require
* Finds the best combination of snapshot and package flags that allows
  everything to compile with minimum external dependencies
* Tries to look for the best matching snapshot from latest Haskell LTS, latest
  Stackage Nightly, and other Haskell LTS, in that order

If `stack init` finds a match, it will generate a `stack.yaml` file.

You can specify the directory, or directories to include in the search for
Cabal files.

### The `stack init --force` flag

Set the flag to force the over-writing of any existing `stack.yaml` file.

### The `stack init --ignore-subdirs` flag

Set the flag to not search for Cabal files in subdirectories.

### The `stack init --omit-packages` flag

Set the flag to exclude any conflicting or incompatible user packages.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/SIGNING_KEY.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Signing key

Each released Stack executable is signed with either:

* the GPG key with ID 0x575159689BEFB442; or
* the GPG key of a person that has been authorised by the GPG key with ID
  0x575159689BEFB442.

The signature is in an `*.asc` file. For example:

~~~text
stack-2.7.5-linux-x86_64-bin
stack-2.7.5-linux-x86_64-bin.asc
~~~

The signature can be verified with GPG, as follows:

~~~text
# Receive the public key from a keyserver
gpg --keyserver keyserver.ubuntu.com --recv-keys 0x575159689BEFB442
# Get information about the key
gpg --keyid-format long --list-keys 0x575159689BEFB442
pub   rsa2048/575159689BEFB442 2015-06-02 [SC]
      C5705533DA4F78D8664B5DC0575159689BEFB442
uid                 [ unknown] FPComplete <dev@fpcomplete.com>
sub   rsa2048/85A738994664AB89 2015-06-02 [E]

# Attempt to verify the file using the signature file. The public key has not
# yet been certified with a trusted signature.
gpg --verify stack-2.7.5-linux-x86_64-bin.asc stack-2.7.5-linux-x86_64-bin
gpg: Signature made 06/03/2022 15:15:21 GMT Standard Time
gpg:                using RSA key C5705533DA4F78D8664B5DC0575159689BEFB442
gpg: Good signature from "FPComplete <dev@fpcomplete.com>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: C570 5533 DA4F 78D8 664B  5DC0 5751 5968 9BEF B442
~~~

The GPG key with ID 0x575159689BEFB442, and keys it has signed, have been
uploaded to the
[Ubuntu Keyserver](https://keyserver.ubuntu.com/pks/lookup?search=0x575159689BEFB442&fingerprint=on&op=index).

This is the public key block for GPG key ID 0x575159689BEFB442:

~~~text
-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: GnuPG v1

mQENBFVs+cMBCAC5IsLWTikd1V70Ur1FPJMn14Sc/C2fbXc0zRcPuWX+JaXgrIJQ
74A3UGBpa07wJDZiQLLz4AasDQj++9gXdiM9MlK/xWt8BQpgQqSMgkktFVajSWX2
rSXPjqLtsl5dLsc8ziBkd/AARXoeITmXX+n6oRTy6QfdMv2Tacnq7r9M9J6bAz6/
7UsKkyZVwsbUPea4SuD/s7jkXAuly15APaYDmF5mMlpoRWp442lJFpA0h52mREX1
s5FDbuKRQW7OpZdLcmOgoknJBDSpKHuHEoUhdG7Y3WDUGYFZcTtta1qSVHrm3nYa
7q5yOzPW4/VpftkBs1KzIxx0nQ5INT5W5+oTABEBAAG0H0ZQQ29tcGxldGUgPGRl
dkBmcGNvbXBsZXRlLmNvbT6JATcEEwEKACEFAlVs+cMCGwMFCwkIBwMFFQoJCAsF
FgMCAQACHgECF4AACgkQV1FZaJvvtEIP8gf/S/k4C3lp/BFb0K9DHHSt6EaGQPwy
g+O8d+JvL7ghkvMjlQ+UxDw+LfRKANTpl8a4vHtEQLHEy1tPJfrnMA8DNci8HLVx
rK3lIqMfv5t85VST9rz3X8huSw7qwFyxsmIqFtJC/BBQfsOXC+Q5Z2nbResXHMeA
5ZvDopZnqKPdmMOngabPGZd89hOKn6r8k7+yvZ/mXmrGOB8q5ZGbOXUbCshst7lc
yZWmoK3VJdErQjGHCdF4MC9KFBQsYYUy9b1q0OUv9QLtq/TeKxfpvYk9zMWAoafk
M8QBE/qqOpqkBRoKbQHCDQgx7AXJMKnOA0jPx1At57hWl7PuEH4rK38UtLkBDQRV
bPnDAQgAx1+4ENyaMk8XznQQ4l+nl8qw4UedZhnR5Xxr6z2kcMO/0VdwmIDCpxaM
spurOF+yExfY/Chbex7fThWTwVgfsItUc/QLLv9jkvpveMUDuPyh/4QrAQBYoW09
jMJcOTFQU+f4CtKaN/1PNoTSU2YkVpbhvtV3Jn2LPFjUSPb7z2NZ9NKe10M0/yN+
l0CuPlqu6GZR5L3pA5i8PZ0Nh47j0Ux5KIjrjCGne4p+J8qqeRhUf04yHAYfDLgE
aLAG4v4pYbb1jNPUm1Kbk0lo2c3dxx0IU201uAQ6LNLdF/WW/ZF7w3iHn7kbbzXO
jhbq2rvZEn3K9xDr7homVnnj21/LSQARAQABiQEfBBgBCgAJBQJVbPnDAhsMAAoJ
EFdRWWib77RC3ukH/R9jQ4q6LpXynQPJJ9QKwstglKfoKNpGeAYVTEn0e7NB0HV5
BC+Da5SzBowboxC2YCD1wTAjBjLLQfAYNyR+tHpJBaBmruafj87nBCDhSWwWDXwx
OUDpNOwKUkrwZDRlM7n4byoMRl7Vh/7CXxaTqkyao1c5v3mHh/DremiTvOJ4OXgJ
77NHaPXezHkCFZC8/sX6aY0DJxF+LIE84CoLI1LYBatH+NKxoICKA+yeF3RIVw0/
F3mtEFEtmJ6ljSks5tECxfJFvQlkpILBbGvHfuljKMeaj+iN+bsHmV4em/ELB1ku
N9Obs/bFDBMmQklIdLP7dOunDjY4FwwcFcXdNyg=
=YUsC
-----END PGP PUBLIC KEY BLOCK-----
~~~


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/Stack_and_VS_Code.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Stack and Visual Studio Code

[Visual Studio Code](https://code.visualstudio.com/) (VS Code) is a popular
source code editor, and
['Haskell'](https://marketplace.visualstudio.com/items?itemName=haskell.haskell)
is an extension for VS Code that is popular with Haskell coders.

The 'Haskell' extension can be used with Stack but there are some things to be
aware of, set out below.

## Haskell Language Server

The VS Code extension makes use of the Haskell Language Server (HLS). To work,
HLS has to be built with the same version of GHC that it will support. That is,
a version of HLS is required for each version of GHC in use. It is possible that
the most recent versions of GHC are not supported by HLS.

By default, the VS Code extension uses tools that are in the PATH. However, the
extension's settings (under 'Haskell: Manage HLS') allow a user to specify
that the extension should use a separate application,
[GHCup](https://www.haskell.org/ghcup/), to download and install the versions of
HLS that it needs. GHCup can download and install things other than HLS,
including GHC, MSYS2 (on Windows), Cabal (a build tool), and Stack itself. GHCup
can also update itself. On Windows, GHCup has the capability of using the
Stack-supplied MSYS2 rather than installing a duplicate copy. Cabal (the build
tool), like Stack, depends on the Cabal (the library). Cabal (the tool), unlike
Stack, does not have the capability to automatically install necessary versions
of GHC, and (as well as supporting the extension) GHCup fills a important gap
for users of the Cabal tool.

If the VS Code extension is set not to use GHCup, its user needs to ensure that
each version of HLS that the extension needs is on the PATH.

For the most part, the versions of HLS provided by GHCup are built with the same
versions of GHC that Stack downloads from its default `setup-info` dictionary
(see [YAML configuration: setup-info](yaml_configuration.md)). Stack's default
is to mirror the 'official' binary distributions published by GHC. However, in
some cases, it is possible that a GHCup-supplied and GHCup-selected HLS has been
built with a different binary distribution of GHC than the one which Stack has
installed.

One example of that occurred with the release of GHC 9.0.2. For some Linux users
(Debian 9 and Fedora 27), the version of GHC 9.0.2 linked on GHC’s download
[web page](https://www.haskell.org/ghc/download_ghc_9_0_2.html) was broken. The
GHC developers made alternative ‘9.0.2a’ versions available. For a while, Stack
referred to the versions published by GHC on its download web page while the
GHCup-supplied versions of HLS were built using alternative versions. This
incompatibility led to problems. It was resolved by Stack's default also being
changed to refer to the '9.0.2a' versions. (Where Stack has already installed
GHC 9.0.2, it is necessary to delete GHC 9.0.2 from the `stack path --programs`
directory. This will cause Stack to reinstall the alternative version, when it
first needs GHC 9.0.2. Stack should distinguish what it builds with the
alternative from what it has built, and cached, with the original GHC 9.0.2.)

### GHCup and Stack >= 2.9.1

From Stack 2.9.1, GHCup can configure Stack so that if Stack needs a version of
GHC, GHCup takes over obtaining and installing that version. By default, the
script to install GHCup (which can be run more than once) configures Stack in
that way. For further information about how GHCup configures Stack, see the GHC
installation customisation
[documentation](yaml_configuration.md#ghc-installation-customisation).

### Workaround #1

If GHCup does not configure Stack in the way described above, one workaround is
to allow GHCup to install versions of GHC on the PATH and to cause Stack to use
those versions of GHC, by making use of Stack's `install-ghc` option (which
needs to be disabled) and Stack's `system-ghc` option (which needs to be
enabled). For further information about these options, see the `install-ghc`
[documentation](yaml_configuration.md#install-ghc) and the `system-ghc`
[documentation](yaml_configuration.md#system-ghc).

For this workaround to work, each time that a snapshot is used that references a
different version of GHC, then GHCup must be used to install it (if GHCup has
not already installed that version). For example, to use `snapshot: lts-22.7`
(GHC 9.6.4), the command `ghcup install ghc 9.6.4` must have been used to
install GHC 9.6.4. That may be a minor inconvenience for some people, as one the
primary benefits of Stack over other Haskell build tools has been that Stack
automatically ensures that the necessary version of GHC is available.

### Workaround #2

If GHCup does not configure Stack, another partial workaround is to install
GHCup so that it is 'empty' except for the current version of HLS, allow the
VS Code extension to use GHCup to manage HLS requirements only, and to ignore
any messages (if any) from the extension on start-up that installation of GHC,
Cabal (the tool) and/or Stack are also necessary (they are not, if only Stack is
being used).

For this workaround to work, however, there can be no differences between the
version of GHC that the GHCup-supplied HLS was built with and the version that
Stack has installed. A slight inconvenience here is also the possibility of
false messages from the start-up that need to be ignored. In principle, those
messages can be disabled by
[setting the following](https://github.com/haskell/vscode-haskell#setting-a-specific-toolchain)
for the VS Code extension:

~~~yaml
"haskell.toolchain": {
  "ghc": null,
  "cabal": null,
  "stack": null
}
~~~

To install a version of GHCup that is 'empty' is a little more complicated than
a default installation of GHCup.

On Unix-like operating systems, the following environment variable must be set
before GHCup's installation `sh` script is run: `BOOTSTRAP_HASKELL_MINIMAL`.

On Windows, the second argument to the PowerShell script must be set to
`$false`, namely:

    Set-ExecutionPolicy Bypass -Scope Process -Force;[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072;Invoke-Command -ScriptBlock ([ScriptBlock]::Create((Invoke-WebRequest https://www.haskell.org/ghcup/sh/bootstrap-haskell.ps1 -UseBasicParsing))) -ArgumentList $true,$false

### Cradle

HLS may need a 'cradle' - an
[`hie.yaml` file](https://hackage.haskell.org/package/hie-bios#stack) - in the
project's root directory in order to work well.

The [`gen-hie` tool](https://hackage.haskell.org/package/implicit-hie) can help
generate such a cradle.

### Tips

It has been suggested that a project must have been successfully built before
the VS code extension (and HLS) is first activated on the project, for HLS to
work reliably.
# /Stack's code (advanced)



- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/CONTRIBUTING.md


../CONTRIBUTING.md# /doc/dev_containers.md

<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Dev Containers

A *container* refers to an isolated area of memory where application software
and some drivers execute. A [Development Container](https://containers.dev) (or
Dev Container for short) allows a container to be used as a full‑featured
development environment.

Stack provides the following Dev Containers:

* a default Dev Container, intended for use with Stack's default project‑level
  configuration file (`stack.yaml`); and
* alternative Dev Containers, intended for use with Stack's experimental
  project‑level configurations (in anticipation of building Stack with more
  recent versions of GHC).

Stack's Dev Containers provide the following tools:

1.  The
    [Haskell Toolchain](https://www.haskell.org/ghcup/install/#supported-tools)
    ([GHC](https://www.haskell.org/ghc), Stack,
    [Cabal (the tool)](https://cabal.readthedocs.io) and
    [HLS](https://haskell-language-server.readthedocs.io))
2.  [Git](https://git-scm.com)
3.  [HLint](https://hackage.haskell.org/package/hlint)
4.  [yamllint](https://yamllint.readthedocs.io)
5.  [ShellCheck](https://www.shellcheck.net)
6.  [hadolint](https://github.com/hadolint/hadolint)

The tools in the Haskell Toolchain are installed at `/usr/local/bin`. HLS is
provided in the default Dev Container only.

!!! info

    The PATH is
    `$HOME/.cabal/bin:$HOME/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin`.
    Consequently, executables installed with Cabal (the tool) (at
    `$HOME/.cabal/bin` or `$HOME/.local/bin`) or Stack or Pip (at
    `$HOME/.local/bin`) take precedence over the same executable installed at
    `/usr/local/sbin`, `/usr/local/bin`, etc.

[VS Code](https://code.visualstudio.com) is used as IDE, with the following
extensions pre‑installed:

* [Haskell](https://marketplace.visualstudio.com/items?itemName=haskell.haskell)
  (Default Dev Container only)
* [GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)
* [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
    * Pinned to version 11.7.0 due to unsolicited AI content in recent versions
* [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
* [ShellCheck](https://marketplace.visualstudio.com/items?itemName=timonwong.shellcheck)
* [hadolint](https://marketplace.visualstudio.com/items?itemName=exiasr.hadolint)
* [Resource Monitor](https://marketplace.visualstudio.com/items?itemName=mutantdino.resourcemonitor)

## Parent images

Stack's Dev Containers are derived from Docker images that are used to build
the *statically linked* Linux/x86_64 and Linux/AArch64 binary distributions of
Stack.

These Docker images are multi‑architecture (`linux/amd64`, `linux/arm64/v8`)
<nobr>*GHC musl*</nobr> images. They are based on Alpine Linux (that is
[musl libc](https://musl.libc.org) and [BusyBox](https://www.busybox.net)).

The images contain *unofficial* binary distributions of GHC (that is, ones not
released by the GHC developers). That is because:

1.  the official GHC binary distributions for Alpine Linux/x86_64 have known
    bugs; and
2.  there are no official binary distributions for Alpine Linux/AArch64.

Stack's global configuration (`/etc/stack/config.yaml`) sets
<nobr>`system-ghc: true`</nobr> and <nobr>`install-ghc: false`</nobr>. That
ensures that only the GHC available in the Dev Containers is used.

## Usage

You can run Dev Containers locally/remotely with VS Code, or create a
[GitHub Codespace](https://github.com/features/codespaces) for a branch in a
repository to develop online.

=== "VS Code"

    Follow the instructions at
    [Developing inside a Container](https://code.visualstudio.com/docs/devcontainers/containers).

=== "GitHub Codespaces"

    For use with GitHub Codespaces, follow the instructions at
    [Creating a codespace for a repository](https://docs.github.com/en/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository).

## Build Stack

Stack can be built with Stack (which is recommended) or with Cabal (the tool).

=== "Stack"

    Command <nobr>`stack build`</nobr> to build the `stack` executable.

    Append <nobr>`--flag=stack:static`</nobr> to build a *statically linked*
    `stack` executable that can run on any Linux machine of the same
    architecture.

    Append <nobr>`--stack-yaml stack-ghc-$GHC_VERSION.yaml`</nobr> if you want
    to use an experimental project‑level configuration with the appropriate Dev
    Container.

=== "Cabal (the tool)"

    !!! info

        Default Dev Container only.

    Command <nobr>`cabal build`</nobr> to build the `stack` executable.

    Append <nobr>`--flag=static`</nobr> to build a *statically linked* `stack`
    executable that can run on any Linux machine of the same architecture.

## Haskell Language Server (HLS)

The
[Haskell Language Server](https://github.com/haskell/haskell-language-server)
and the
[Haskell extension](https://marketplace.visualstudio.com/items?itemName=haskell.haskell)
are only available in the default Dev Container. In order to use the Haskell
extension, you must first configure the project for the build tool of your
choice.

<!--
**Stack**

Place the cradle ([hie.yaml](assets/cradles/stack/hie.yaml)) for Stack in the
root of the workspace: `cp -f .devcontainer/assets/cradles/stack/hie.yaml .`

**Cabal**

Place the cradle ([hie.yaml](assets/cradles/cabal/hie.yaml)) for Cabal in the
root of the workspace: `cp -f .devcontainer/assets/cradles/cabal/hie.yaml .`
-->

See the documentation at
[Contributing: Haskell Language Server](CONTRIBUTING.md#haskell-language-server)
for cradles (`hie.yaml` files) that should suffice to configure the HLS
explicitly for `./Setup.hs` and each of the buildable components in Stack's
Cabal file.

### Haskell extension

Choose `Manually via PATH` when asked the following question:

<img width="520" alt="Manage HLS" src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack@master/doc/img/manageHLS.png">

## Issues

If there is a problem with a Dev Container, please
[open an issue](https://github.com/benz0li/ghc-musl/issues/new) at its
[parent images](#parent-images)' repository at
[https://github.com/benz0li/ghc-musl](https://github.com/benz0li/ghc-musl).


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/maintainers/7zip.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Upgrading 7-Zip

When installing GHC or MSYS2 on Windows, Stack will also install
[7-Zip](https://www.7-zip.org/). 7-Zip is a file archiver and is used by Stack
to extract files from archives. This section explains the steps required to
upgrade the 7-Zip version used by Stack. The 7-Zip functionality used by Stack
is mature and stable. It is anticipated that the Stack-supplied 7-Zip will not
need to be updated frequently. On 10 September 2022, it was updated from 7-Zip
9.20 (released on 18 November 2010) to 7-Zip 22.01 (released on 15 July 2022).

1.  Download the latest installer for 64-bit x64 Windows from 7-Zip's website.

2.  Run the installer and install to the default location
    (`C:\C:\Program Files\7-Zip`). The four relevant files from those installed
    will be:

    ~~~text
    7z.exe  # 7-Zip Console
    7z.dll  # 7-Zip Engine
    license.txt  # 7-Zip License
    readme.txt  # 7-Zip Overview
    ~~~

3.  In the
    [commercialhaskell/stackage-content](https://github.com/commercialhaskell/stackage-content)
    GitHub repository, create a new draft release tagged and named `7z-XX.YY`,
    where `XX.YY` is the 7-Zip version number.

4.  Upload the four relevant files in step 2 above into the draft release.

5.  Provide a description for the release. For example:

    ~~~text
    7-Zip 22.01 (2022-07-15) for Windows 64-bit x64.
    ~~~

6.  Publish the release.

7.  Changes need to be made to the
    [stackage-content/stack/stack-setup-2.yaml](https://github.com/commercialhaskell/stackage-content/blob/master/stack/stack-setup-2.yaml)
    file, to switch over to using the newly uploaded files. For example
    (extract):

    ~~~yaml
    sevenzexe-info:
        url: "https://github.com/commercialhaskell/stackage-content/releases/download/7z-22.01/7z.exe"
        content-length: 545280
        sha256: 254cf6411d38903b2440819f7e0a847f0cfee7f8096cfad9e90fea62f42b0c23

    sevenzdll-info:
        url: "https://github.com/commercialhaskell/stackage-content/releases/download/7z-22.01/7z.dll"
        content-length: 1814016
        sha256: 73578f14d50f747efa82527a503f1ad542f9db170e2901eddb54d6bce93fc00e
    ~~~

    The `content-length:` key's value is the size of the file in bytes. It can
    be obtained from the `Length` field of the `dir` command. The `sha256:`
    key's value can be obtained from the commands (in PowerShell):

    ~~~text
    (Get-FileHash 7z.exe -Algorithm SHA256).Hash.ToLower()
    (Get-FileHash 7z.dll -Algorithm SHA256).Hash.ToLower()
    ~~~

    The `sha256:` key only accepts lowercase hash results as values.

8.  The changed `stack-setup-2.yaml` file should be tested locally. This can be
    done by:

    * temporarily disabling the existing local copy of 7-Zip by changing the
      name of the `7z.exe` and `7z.dll` files in the `stack path --programs`
      directory;

    * identifying a version of GHC not already installed in the
      `stack path --programs` directory; and

    * executing the command:

        ~~~text
        stack --snapshot <snapshot> setup --setup-info-yaml <path to local copy of stack-setup-2.yaml>
        ~~~

      where `<snapshot>` requires the missing version of GHC.

    If all is well, the command should proceed to download the missing version
    of GHC, download the `7z.exe` and `7z.dll` files, and use the 7-Zip version
    to extract files from the GHC archive.

9.  Raise a pull request on `commercialhaskell/stackage-contents` for the
    changes to the locally-tested `stack-setup-2.yaml` file.



- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/maintainers/archive/README.md


# README

The `doc/maintainers/archive` directory contains documentation that appears to
have been superceded but is preserved in case it is, in fact, useful.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/maintainers/archive/releases.md


# Archive - from releases.md

## Build Linux static binary distribution with Nix

**NOTE: We have switched back to Alpine Linux for building static binaries, done by CI.  Leaving this section for future reference.**

These instructions are tested on Ubuntu 16.04, but theoretically should work on
any Linux distribution.

- Install nix (tested with v2.0.4 and v2.1.2, but should work with any)

  ~~~sh
  curl https://nixos.org/nix/install | sh
  ~~~

- Install and authenticate cachix (first two steps at https://cachix.org/ after
  signing up)


- Add nh2's cache:

    ~~~sh
    cachix use static-haskell-nix
    ~~~

  !!! note

      To clear cache index, use `rm $HOME/.cache/nix/binary-cache-v5.sqlite*`
      (useful if someone else uploads new stuff to the cache and you want to use
      it right away). The recent `narinfo-cache-positive`/`negative-ttl` options
      might also help.

- Check out Stack commit to be released to `~/stack-release` (or elsewhere, in
  which case adjust following instructions)

- `rm -f ~/stack-release/*.cabal`, to ensure it's regenerated

- clone https://github.com/nh2/static-haskell-nix recursively (last known to
  work with commit 725ceb2479637b3b3ab29298a1bc0e48c54984c9)

- in `static-stack` directory, run (from `static-stack/README.md`):

  ~~~sh
  $(nix-build --no-link -A run-stack2nix-and-static-build-script --argstr stackDir ~/stack-release)
  ~~~

- Run integration tests against the static binary [TODO: improve this process by
  adding full support in `release.hs` or the integration tests for testing a
  binary built elsewhere]

    - In `~/stack-release`, run
      `stack build --flag stack:integration-tests stack:stack-integration-test`
    - Copy binary built above to place where `stack build` normally puts the
      `stack binary` (e.g.
      `cp  /nix/store/7vl1xvlbbqjvf864inz5vw7z2z1k4nmw-stack-2.1.0.1/bin/stack /home/vagrant/stack-release/.stack-work/install/x86_64-linux/custom-snapshot-for-building-stack-with-ghc-8.2.2-PyNP5UoO8Ott/8.2.2/bin/stack`;
      figure it out using `stack exec which stack`)
    - Run `stack exec stack-integration-test`

- Copy the binary built above (in `/nix/store/XXX-stack-X.Y.Z/bin/stack`) to
  `~/stack-release/_release/bin/stack-X.Y.Z-linux-x86_64/stack` (replace `X.Y.Z`
  with the version, and the `/nix/store/*` path with that output at the end of
  the previous command)

- Package, sign, and upload to GitHub using Stack's release script in the stack
  directory:

  ~~~sh
  cd ~/stack-release
  stack etc/scripts/release.hs --no-test-haddocks --binary-variant=static --build-args=--dry-run upload
  ~~~

  (adding `--build-args=--dry-run` ensures the binary you copied will be used rather than building a new one)

- Download the bindist from GitHub and double check that the `stack` in it is
  actually static (use `ldd /path/to/stack`) and that `--version` reports
  correctly (and not dirty).

## Setting up a Windows VM for releases

These instructions are a bit rough, but has the steps to get the Windows machine
set up.

## Using Virtualbox

 1. Download Virtualbox VM image:
    https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/mac/

 2. Launch the VM using Virtualbox and the image downloaded

 3. Adjust settings:
    * Number of CPUs: at least half the host's
    * Memory: at least 3 GB
    * Video RAM: the minimum recommended by Virtualbox
    * Enable 3D and 2D accelerated mode (this makes programs with lots of
      console output much faster)
    * Enabled shared clipboard (in VM window, Devices->Shared
      Clipboard->Both Directions)

Now continue to the **General Windows setup** subsection below.

## Using ESXi

1. Download the **MSEdge on Win10** VM for **VMWare (Windows, Mac)**.
2. Unzip the file downloaded file
3. Upload the VMDK file to the ESXi datastore
4. SSH into ESXi CLI and run:
    - `vmkfstools -i /vmfs/volumes/datastore1/win10-msedge/MSEdge-Win10-VMWare-disk1-ORIG.vmdk /vmfs/volumes/datastore1/win10-msedge/MSEdge-Win10-VMWare-disk1.vmdk -d thin`.
      This converts the disk to a format that is compatible with ESXi. You may
      have to run `esxcli system module load -m multiextent` first (see
      https://www.virtuallyghetto.com/2012/09/2gbsparse-disk-format-no-longer-working.html).
    - `vmkfstools -X 80G /vmfs/volumes/datastore1/win10-msedge/MSEdge-Win10-VMWare-disk1.vmdk`.
      This makes the disk twice as large, which helps avoid running out of disk
      space.
5. In the ESXi web UI:
	- Create a new VM
		- Give is 8192 MB of memory
		- Give it 4 virtual CPUs
		- Remove the default hard disk
		- Add an **Existing hard disk**
			- Select `/datastore1/win10-msedge/MSEdge-Win10-VMWare-disk1.vmdk`
	- Power on the VM
	- In Windows settings:
		- Search for "disk management"
			- Extend the partition to take the whole disk.
		- In all likelihood, you will want to search for "remote desktop" and enable
      remote desktop. Then you can connect to the VM using Microsoft Remote
      Desktop instead of using it from within the ESXi web UI.

Now continue to the **General Windows setup** subsection below.

## General Windows setup

 5. In **Settings**->**Update & Security**->**Windows Update**->**Advanced options**:
     * Change **Choose how updates are installed** to **Notify to schedule restart**
     * Check **Defer upgrades** (this avoids rebooting in the middle of the stack
       build)

 6. In **Settings**->**System**->**Power & sleep**

    * Disable turning off the screen or going to sleep when plugged in

 7. Install msysgit: https://msysgit.github.io/

 8. Install TortoiseHG: https://tortoisehg.bitbucket.io/download/index.html

 9. Install nsis-2.46.5-Unicode-setup.exe from http://www.scratchpaper.com/

10. Install Stack using the Windows 64-bit installer

    a. Restart any command prompts to ensure they get new `%STACK_ROOT%` value.

11. Visit https://hackage.haskell.org/ in Edge to ensure system has correct CA
    certificates

13. Run in command prompt:

    ~~~text
    md C:\p
    md C:\tmp
    cd /d C:\p
    ~~~

14. Create `C:\p\env.bat`:

    ~~~text
    SET TEMP=C:\tmp
    SET TMP=C:\tmp
    SET PATH=C:\Users\IEUser\AppData\Roaming\local\bin;"c:\Program Files\Git\usr\bin";"C:\Program Files\Microsoft SDKs\Windows\v7.1\Bin";%PATH%
    ~~~

15. Run `C:\p\env.bat` (do this every time you open a new command prompt)

16. `stack exec -- gpg --import`, and paste in the your GPG secret key (must be
    done using `stack exec` because that uses the right keyring for the embedded
    MSYS2 GPG; you can get the key from another machine with
    `gpg --export-secret-keys --armor <KEY ID>`)

17. Run in command prompt (adjust the `user.email` and `user.name` settings):

    ~~~text
    git config --global user.email manny@fpcomplete.com
    git config --global user.name "Emanuel Borsboom"
    git config --global push.default simple
    git config --global core.autocrlf true
    git clone https://github.com/borsboom/stack-installer.git
    git clone -b stable --reference C:\p\stack-release https://github.com/commercialhaskell/stack.git stack-release
    cd stack-release
    stack install cabal-install
    ~~~

## Setting up an ARM VM for releases

1. Use Scaleway to start ARMv7 and ARM64 VMs.

2. Select Ubuntu Xenial as the operating system

3. Install the correct version of LLVM: `sudo apt-get install -y llvm-3.9`
   (appropriate for GHC 8.2, might need different version for other GHCs)

4. Symlink opt-3.X to `opt`: `sudo ln -s opt-3.9 /usr/bin/opt` (adjust the
   version if you installed a different one above)

5. Switch to gold linker:

    ~~~sh
    update-alternatives --install "/usr/bin/ld" "ld" "/usr/bin/ld.gold" 20
    update-alternatives --install "/usr/bin/ld" "ld" "/usr/bin/ld.bfd" 10
    update-alternatives --config ld
    ~~~

6. Add swap space:

    ~~~sh
    dd if=/dev/zero of=/swapfile1 bs=1024 count=4194304
    mkswap /swapfile1
    swapon /swapfile1
    echo '/swapfile1 none swap sw 0 0' >>/etc/fstab
    ~~~

7. Install additional tools:

    ~~~Sh
    apt-get update && apt-get install -y unzip gpg
    ~~~

8. Import your GPG key (`gpg --import` and paste the private key)

9. Git settings (adjust for your preferences/email/name)

   ~~~text
   git config --global push.default simple
   git config --global user.email "manny@fpcomplete.com"
   git config --global user.name "Emanuel Borsboom"
   ~~~

10. Install build tools and dependencies packages

    ~~~text
    sudo apt-get install -y g++ gcc libc6-dev libffi-dev libgmp-dev make xz-utils zlib1g-dev git gnupg
    ~~~

11. Install clang+llvm

    NOTE: the Debian jessie `llvm` package does not work (executables built with
    it just exit with "schedule: re-entered unsafely.").

    The version of LLVM needed depends on the version of GHC you need.

    * GHC 8.2.2 (the standard for building Stack)

      ~~~sh
      wget http://llvm.org/releases/3.9.1/clang+llvm-3.9.1-armv7a-linux-gnueabihf.tar.xz && \
      sudo tar xvf clang+llvm-3.9.1-armv7a-linux-gnueabihf.tar.xz -C /opt
      ~~~

      Run this now and add it to the `.profile`:

      ~~~sh
      export PATH="$HOME/.local/bin:/opt/clang+llvm-3.9.1-armv7a-linux-gnueabihf/bin:$PATH"
      ~~~

    * GHC 7.10.3

      ~~~sh
      wget http://llvm.org/releases/3.5.2/clang+llvm-3.5.2-armv7a-linux-gnueabihf.tar.xz && \
      sudo tar xvf clang+llvm-3.5.2-armv7a-linux-gnueabihf.tar.xz -C /opt
      ~~~

      Run this now and add it to the `.profile`:

      ~~~sh
      export PATH="$HOME/.local/bin:/opt/clang+llvm-3.5.2-armv7a-linux-gnueabihf/bin:$PATH"
      ~~~

12. Install Stack

    Binary: get an
    [existing `stack` binary](https://github.com/commercialhaskell/stack/releases)
    and put it in `~/.local/bin`.

    From source, using Cabal (the tool):

    ~~~sh
    wget http://downloads.haskell.org/~ghc/7.10.3/ghc-7.10.3-armv7-deb8-linux.tar.xz && \
    tar xvf ghc-7.10.3-armv7-deb8-linux.tar.xz && \
    cd ghc-7.10.3 && \
    ./configure --prefix=/opt/ghc-7.10.3 && \
    sudo make install && \
    cd ..
    export PATH="/opt/ghc-7.10.3/bin:$PATH"
    wget https://www.haskell.org/cabal/release/cabal-install-1.24.0.0/cabal-install-1.24.0.0.tar.gz &&&&& \
    tar xvf cabal-install-1.24.0.0.tar.gz && \
    cd cabal-install-1.24.0.0 && \
    EXTRA_CONFIGURE_OPTS="" ./bootstrap.sh && \
    cd .. && \
    export PATH="$HOME/.cabal/bin:$PATH" && \
    cabal update
    ~~~

    Edit `~/.cabal/config`, and set `executable-stripping: False` and
    `library-stripping: False`.

    ~~~sh
    cabal unpack stack && \
    cd stack-* && \
    cabal install && \
    mv ~/.cabal/bin/stack ~/.local/bin
    ~~~


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/maintainers/docker.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Docker images

Each Stackage LTS release has two corresponding docker images in the
[fpco/stack-build](https://hub.docker.com/r/fpco/stack-build/) and
[fpco/stack-build-small](https://hub.docker.com/r/fpco/stack-build-small/)
repositories. The former contains every system library needed to build any
package in the snapshot, while the latter only contains a minimal set of system
libraries for basic programs.

The Dockerfiles for building these images are in
[stackage/automated/dockerfiles](https://github.com/commercialhaskell/stackage/tree/master/automated/dockerfiles/).
There is also a
[build.sh](https://github.com/commercialhaskell/stackage/tree/master/automated/dockerfiles/build.sh)
script to help with building and pushing the images (see the
[README](https://github.com/commercialhaskell/stackage/tree/master/automated/dockerfiles/README.md)
for usage instructions).

## Build images for new minor LTS snapshot

In most cases, a new minor LTS snapshot just needs the previous LTS image to be
re-tagged and pushed. If the image needs a patch for the new minor LTS snapshot,
see the next section.

Below, replace `<N>.<M>` with the minor LTS snapshot version.

- Check out the `stable` branch of the
  [Stack repository](https://github.com/commercialhaskell/stack/).

- Build and push the images (both standard and `small` variants) using the
  [build.sh](https://github.com/commercialhaskell/stackage/tree/master/automated/dockerfiles/build.sh)
  script:

    ~~~text
    ./build.sh --push lts-<N>.<M>
    ./build.sh --push --small lts-<N>.<M>
    ~~~

## Patch images for new minor LTS snapshot

Below, replace `<N>.<M>` with the minor LTS snapshot version. and `<N>.<M-1>`
with the previous minor LTS snapshot version.

- Check out the `stable` branch of the
  [Stack repository](https://github.com/commercialhaskell/stack/).

- In `stackage/automated/dockerfiles`, create a new `lts-<N>.<M>` directory.

- Create `lts-<N>.<M>/Dockerfile`, starting with:

    ~~~dockerfile
    FROM $DOCKER_REPO:lts-<N>.<M-1>
    ~~~

- Add layers for any changes that need to be made to the image.

- Build the new image using the
  [build.sh](https://github.com/commercialhaskell/stackage/tree/master/automated/dockerfiles/build.sh)
  script:

    ~~~text
    ./build.sh lts-<N>.<M>
    ./build.sh --small lts-<N>.<M>
    ~~~

- Test the new image. For example, command:

    ~~~text
    stack --snapshot=lts-<N>.<M> new image-test
    cd image-test
    stack --docker build
    ~~~

  This should use the image you just built. Make sure you test that the new
  image actually contains the desired changes.

- Follow the process in the previous section to push the images.

## Build images for new major LTS snapshot release

### Test a Dockerfile prior to new major LTS snapshot release

Replace `<N>` with major version of new LTS snapshot, and `<N-1>` with previous
major LTS snapshot version.

- Check out the `stable` branch of the
  [Stack repository](https://github.com/commercialhaskell/stack/).

- In `stackage/automated/dockerfiles`, create a new `lts-<N>.0` directory.

- Copy `lts-<N-1>.0/Dockerfile` to `lts-<N>.0/Dockerfile`.

- Check the `FROM` statement, make sure the Ubuntu version matches the Ubuntu
  version used in the
  [Stackage Dockerfile](https://github.com/commercialhaskell/stackage/blob/master/Dockerfile).

- Update `GHC_VERSION` to match the version used by the
  [latest nightly snapshot](https://www.stackage.org/nightly).

- Set `LTS_SLUG` to the
  [latest nightly snapshot](https://www.stackage.org/nightly) (this will be
  temporary until the major LTS snapshot is actually released, at which point it
  will be updated to `lts-<N>.0`).

- Update `PID1_VERSION` and `STACK_VERSION` to the latest versions of those
  tools.

- Make sure `CUDA_VERSION` and `JVM_PATH` match what
  [debian-bootstrap.sh](https://github.com/commercialhaskell/stackage/blob/master/debian-bootstrap.sh)
  uses.

- Update `LLVM_PATH` to the version required for the GHC version. This will be
  shown on the download page for the GHC version, which you can reach from
  https://www.haskell.org/ghc/. It should match the base directory used in
  `CLANG_PURE_LLVM_INCLUDE_DIR` in
  [debian-bootstrap.sh](https://github.com/commercialhaskell/stackage/blob/master/debian-bootstrap.sh)
  (leaving off the `/include` suffix).

- Update `BOOTSTRAP_COMMIT` to the Git commit ID of the latest
  [debian-bootstrap.sh](https://github.com/commercialhaskell/stackage/blob/master/debian-bootstrap.sh).

- Check for any other `lts-<N>.*/Dockerfile`s and make sure
  `lts-<N>.0/Dockerfile` includes anything that was updated in those, if they're
  still relevant for LTS-15 (note that a newer
  [debian-bootstrap.sh](https://github.com/commercialhaskell/stackage/blob/master/debian-bootstrap.sh)
  may already include those changes, so check there first).

### Perform basic tests

- Build the image: `docker build -t local/stack-build lts-<N>.0/`.

- Ensure that all the directories listed in `PATH`, `CUDA_PATH`, and `CPATH` and
  any other path-like environment variables actually exist in the image.

- Try building a test package with the new image. Command:

    ~~~text
    stack --snapshot=nightly new image-test`
    cd image-test
    stack --docker --docker-image=local/stack-build build
    ~~~

  This should build without needing to install GHC.

- Build the "small" variant. Command:

    ~~~text
    docker build -t local/stack-build-small --build-arg "VARIANT=small" lts-<N>.0/
    ~~~

- Try building a test package with the new small image. Command:

    ~~~text
    stack --snapshot=nightly new small-image-test
    cd small-image-test
    stack --docker --docker-image=local/stack-build-small build
    ~~~

  This should build without needing to install GHC.

### Build real image once major LTS snapshot has been released

- Update `LTS_SLUG` to `lts-<N>.0`

- Update `BOOTSTRAP_COMMIT` to the git commit ID of the latest
  [debian-bootstrap.sh](https://github.com/commercialhaskell/stackage/blob/master/debian-bootstrap.sh).

- Repeat the tests above, except use `lts-<N>.0` instead of `nightly`.

- Build and push the real images (both standard and `small` variants) using the
  [build.sh](https://github.com/commercialhaskell/stackage/tree/master/automated/dockerfiles/build.sh)
  script:

    ~~~text
    ./build.sh --push lts-<N>.0
    ./build.sh --push --small lts-<N>.0
    ~~~

- Commit and push the new Dockerfile to the `stable` branch.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/maintainers/docker_images.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Docker images

Docker Hub includes Docker images under
[`fpco/stack-build'](https://hub.docker.com/r/fpco/stack-build).

To update those images with a new version of Stack:

1.  Under
    [commercialhaskell/stackage/automated/dockerfiles](https://github.com/commercialhaskell/stackage/tree/master/automated/dockerfiles/),
    add `lts-X.Y/Dockerfile` (where `X.Y` is the latest Stackage Haskell LTS
    version), containing (where `X.Z` is the previous Haskell LTS version,
    and `X.Y.Z` is the newly released Stack version):

    ~~~dockerfile
    FROM $DOCKER_REPO:lts-X.Z
    ARG STACK_VERSION=X.Y.Z
    RUN wget -qO- https://github.com/commercialhaskell/stack/releases/download/v$STACK_VERSION/stack-$STACK_VERSION-linux-x86_64.tar.gz | tar xz --wildcards --strip-components=1 -C /usr/local/bin '*/stack'
    ~~~

2.  Run `./build.sh lts-X.Y`. Then test that the new image has the new
    version of Stack. For example, command:

    ~~~text
    docker run --rm fpco/stack-build:lts stack --version
    ~~~

3.  Use the following commands to push the new image to the registry:

    ~~~text
    ./build.sh --push lts-X.Y
    ./build.sh --push --small lts-X.Y
    ~~~


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/maintainers/ghc.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Adding a new GHC version

* Push new tag to our fork. Command:

    ~~~text
    git clone git@github.com:commercialhaskell/ghc.git
    cd ghc
    git remote add upstream https://gitlab.haskell.org/ghc/ghc.git
    git fetch upstream
    git push origin ghc-X.Y.Z-release
    ~~~

* [Publish a new GitHub release](https://github.com/commercialhaskell/ghc/releases/new)
  with tag `ghc-X.Y.Z-release` and same name, with description noting where the
  binidsts are mirrored from. For example:

    ~~~text
    Unless otherwise indicated, bindists are mirrored from https://downloads.haskell.org/~ghc/
    * FreeBSD bindists are mirrored from http://distcache.FreeBSD.org/local-distfiles/arrowd/stack-bindists
    * musl bindists are mirrored from https://github.com/redneb/ghc-alt-libc/releases
    ~~~

* Download all the relevant GHC bindists from their sources, and upload them to
  the just-created GitHub release (see
  [stack-setup-2.yaml](https://github.com/fpco/stackage-content/blob/master/stack/stack-setup-2.yaml)
  for the ones we used in the last GHC release).

  In the case of macOS, repackage the `.xz` bindist as a `.bz2`, since macOS
  does not include `xz` by default or provide an easy way to install it.

  The script at `etc/scripts/mirror-ghc-bindists-to-github.sh` will help with
  this. See the comments within the script.

* [Edit stack-setup-2.yaml](https://github.com/fpco/stackage-content/edit/master/stack/stack-setup-2.yaml)
  and add the new bindists, pointing to the GitHub release version. Be sure to
  update the `content-length` and `sha1` values.

  Before committing, test using a command like:

    ~~~text
    stack --snapshot=ghc-X.Y.Z setup --setup-info-yaml=path/to/stackage-content/stack/stack-setup-2.yaml
    ~~~

* In [stackage-content](https://github.com/fpco/stackage-content), command:

    ~~~text
    cd stack
    ./update-global-hints.hs ghc-X.Y.Z
    ~~~

  and commit the changes.

## Building GHC

**NOTE: We are no longer building custom GHC bindists.  This section remains for future reference, but GHC's build system has changed substantially since it was written.**

TODO: look into using
https://github.com/bgamari/ghc-utils/blob/master/rel-eng/bin-release.sh, which
is the script used to official bindists.

On systems with a small `/tmp`, you should set TMP and TEMP to an alternate
location.

Setup the system based on these
[instructions](https://gitlab.haskell.org/ghc/ghc/wikis/building/preparation/linux).
On Ubuntu (`docker run -ti --rm ubuntu:16.04`):

~~~text
apt-get update
apt-get install -y ghc alex happy make autoconf g++ git vim xz-utils automake libtool gcc libgmp-dev ncurses-dev libtinfo-dev python3
~~~

On Void Linux (`docker run -ti --rm voidlinux/voidlinux bash`) command:

~~~text
xbps-install -S curl gcc make xz ghc autoconf git vim automake gmp-devel ncurses-devel python3 cabal-install
cabal update
cabal install alex happy
~~~

For GHC >= 7.10.2, set the `GHC_VERSION` environment variable to the version to
build:

* `export GHC_VERSION=8.2.2`
* `export GHC_VERSION=8.2.1`
* `export GHC_VERSION=8.0.2`
* `export GHC_VERSION=8.0.1`
* `export GHC_VERSION=7.10.3a`
* `export GHC_VERSION=7.10.2`

then, from
[here](https://gitlab.haskell.org/ghc/ghc/wikis/building/quick-start), command:

~~~text
git config --global url."git://github.com/ghc/packages-".insteadOf git://github.com/ghc/packages/
git clone -b ghc-${GHC_VERSION}-release --recursive https://gitlab.haskell.org/ghc/ghc.git ghc-${GHC_VERSION}
cd ghc-${GHC_VERSION}/
cp mk/build.mk.sample mk/build.mk
sed -i 's/^#BuildFlavour *= *perf$/BuildFlavour = perf/' mk/build.mk
./boot
./configure --enable-tarballs-autodownload
sed -i 's/^TAR_COMP *= *bzip2$/TAR_COMP = xz/' mk/config.mk
make -j$(cat /proc/cpuinfo|grep processor|wc -l)
make binary-dist
~~~

GHC 7.8.4 is slightly different. Command:

~~~text
export GHC_VERSION=7.8.4
git config --global url."git://github.com/ghc/packages-".insteadOf git://github.com/ghc/packages/
git clone -b ghc-${GHC_VERSION}-release --recursive https://gitlab.haskell.org/ghc/ghc.git ghc-${GHC_VERSION}
cd ghc-${GHC_VERSION}/
./sync-all --extra --nofib -r git://git.haskell.org get -b ghc-7.8
cp mk/build.mk.sample mk/build.mk
sed -i 's/^#BuildFlavour *= *perf$/BuildFlavour = perf/' mk/build.mk
perl boot
./configure
sed -i 's/^TAR_COMP *= *bzip2$/TAR_COMP = xz/' mk/config.mk
make -j$(cat /proc/cpuinfo|grep processor|wc -l)
make binary-dist
~~~


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/maintainers/haskellstack.org.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# HaskellStack.org

The domain https://docs.haskellstack.org hosts online documentation for the
Stack project, using [Read the Docs](https://readthedocs.org/) with
[MkDocs](https://www.mkdocs.org/) and the Material for MkDocs
[theme](https://squidfunk.github.io/mkdocs-material/).

The domain https://get.haskellstack.org provides URLs that redirect to URLs
used to install the Stack executable.

## Read the Docs

The Read the Docs project is named
['The Haskell Tool Stack'](https://readthedocs.org/projects/stack/).

The set up on the Read the Docs web site involves two page redirects when there
are HTTP 404 Not Found errors:

    / -> /README/
    /README/ -> /

The 'Home' MkDocs page is `doc/README.md`.

The `/ -> /README/` redirect ensures that
https://docs.haskellstack.org/en/stable/ (for example) will, if not found,
redirect to https://docs.haskellstack.org/en/stable/README/.

The `/README/ -> /` redirect ensures that
https://docs.haskellstack.org/en/latest/README/ (for example) will, if not
found, redirect to https://docs.haskellstack.org/en/latest/.

MkDocs rendering of `README.md` differed before and after MkDocs 1.0. Prior to
MkDocs 1.0, `README.md` rendered to `/README/index.html`. From MkDocs 1.0,
`README.md` rendered to `/index.html`. The two redirects above ensure that the
Read the Docs flyout works when moving between different versions of the home
page using the flyout.

Stack moved from MkDocs 0.17.3 to MkDocs 1.3.1 after publishing the
documentation for Stack 2.7.5.

A YAML configuration file, `.readthedocs.yaml` is included in the repository
root directory. See https://docs.readthedocs.io/en/stable/config-file/v2.html.
It specifies a Python requirements file in `doc/requirements.txt`.

## MkDocs

The `doc/requirements.txt` file pins the version of MkDocs. As at
2 September 2021 it is set to:

    mkdocs==1.3.1

A YAML configuration file, `mkdocs.yml` is included in the repository root
directory. See https://www.mkdocs.org/user-guide/configuration/.

`site_dir: _site` specifies the directory where the output HTML and other files
are created. This directory is added to the `.gitignore` file.

MkDocs 1.3.0 replaced the `pages:` key with the `nav:` key.

## Material for MkDocs

Stack moved from the default `readthedocs` theme to Material for MkDocs after
publishing the documentation for Stack 2.7.5. The new theme has extensive online
documentation and features that the default theme lacked.

The Material for MkDocs theme is loaded in the `doc/requirements.txt` file:

    mkdocs-material

The theme is specified in the `mkdocs.yml` file:

~~~yaml
theme:
  name: material
  palette:
    primary: 'deep purple'
    accent: 'deep purple'
  icon:
    logo: material/language-haskell
~~~

Read the Docs requires [JQuery](https://jquery.com/) for its JavaScript code to
inject the flyout menu. Material for MkDocs does not come with JQuery. So, the
following is required in the `mkdocs.yml` file:

~~~yaml
extra_javascript:
- 'https://code.jquery.com/jquery-3.6.1.min.js'
~~~

The Read the Docs flyout is formatted with a `font-size` that is 90% of the
`body` `font-size`. Material for MkDocs has a `body` `font-size` that is
`0.5rem`, which is small. A little additional CSS is added to the `extra.css`
file, to force the final `font-size` to be `0.7rem`. That size is consistent
with that of other elements in the theme.

~~~css
body {
    font-size: 0.777778rem;
}
~~~

Material for MkDocs default suggestions for syntax highlighting in code blocks
are applied. They are specified in the `mkdocs.yml` file as:

~~~yaml
markdown_extensions:
- pymdownx.highlight:
    anchor_linenums: true
- pymdownx.inlinehilite
- pymdownx.snippets
- pymdownx.superfences
~~~

Other extensions to the basic Markdown syntax used include:

* Admonitions

    !!! info

        This is an example of an 'info' admonition.

* Content tabs, which can be nested

    !!! info

        Content tabs are used so that users of different operating systems, or
        different distributions of Linux, can be presented with content specific
        to their needs.

* icons and emojis

    !!! info

        The `octicons-tag-24` icon (:octicons-tag-24:) is used to refer to
        versions of Stack. The `material-cloud-download-outline` icon
        (:material-cloud-download-outline:) is used to signify a download link.
        The `octicons-beaker-24` icon (:octicons-beaker-24:) is used with
        'Experimental' to signify that a feature is experimental.

## Testing online documentation

Online documentation can be tested by establishing a branch on the repository
that is then configured on the Read the Docs web site as 'Active' but
'Hidden' - for example branch `mkdocs-test`. As the branch is 'Hidden' it does
not appear in the Read the Docs flyout or search results.

## get.haskellstack.org redirects

The https://get.haskellstack.org redirects are implemented with
[CloudFlare Pages](https://developers.cloudflare.com/pages/platform/redirects/)
and a `_redirects` file in the root of the
`commercialhaskell/get-haskellstack-org` GitHub
[repository](https://github.com/commercialhaskell/get-haskellstack-org).

Each redirect is defined as a line in the file with format:

~~~text
[source] [destination]
~~~

'Splats' are used in redirects. On matching, a splat (asterisk, `*`) will greedily match all characters and the matched value can be used in the redirect location with `:splat`.

For example, for Stack 2.9.1:

~~~text
/stable/* https://github.com/commercialhaskell/stack/releases/download/v2.9.1/stack-2.9.1-:splat
/upgrade/linux-x86_64-static.tar.gz https://github.com/commercialhaskell/stack/releases/download/v2.9.1/stack-2.9.1-linux-x86_64.tar.gz
/upgrade/* https://github.com/commercialhaskell/stack/releases/download/v2.9.1/stack-2.9.1-:splat
/ https://raw.githubusercontent.com/commercialhaskell/stack/stable/etc/scripts/get-stack.sh
~~~


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/maintainers/msys.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Upgrading MSYS2

When installing GHC on Windows, Stack will also install
[MSYS2](http://www.msys2.org/). MSYS2 provides a Unix shell and environment, and
is necessary for such things as running configure scripts. This section explains
the steps required to upgrade the MSYS2 version used by Stack.

1.  Download latest installer(s) from MSYS2's website. Historically, there were
    separate installers for 32 bit (`i686`) and 64 bit (`x86_64`). On
    17 May 2020, the MSYS2 project announced it did not plan to release any
    further `i686` installers. An installer is an executable, versioned by a
    date in the format YYYYMMDD - for example, `msys2-x86_64-20220503.exe`.

2.  Run the installer and install to the default location (`C:\msys64` for the
    64 bit version; the location for the 32 bit version was `C:\msys32`). Do not
    use the installed version; it will create a `.bash_history` file if you do.

3.  Create an `.tar.xz` archive file for each relevant directory (eg
    `C:\msys64`). That is best done using the same `7z` executable in Stack's
    'programs' directory (`stack path --programs`) that will be used to extract
    files from the archive. That can be done in two steps: the first to create a
    `.tar` archive, and the second to create a `.tar.xz` archive. If the current
    working directory is Stack's 'programs' directory:

    ~~~text
    ./7z a msys2-YYYYMMDD-x86_64.tar C:\msys64
    ./7z a msys2-YYYYMMDD-x86_64.tar.xz msys2-YYYYMMDD-x86_64.tar
    rm msys2-YYYYMMDD-x86_64.tar # Tidy up
    ~~~

    !!! note

        Previously, the advice was that creating the archive file required a
        version of [`tar`](https://www.gnu.org/software/tar/tar.html) that
        supported the compression option `--xz`. The version of `tar` that is
        supplied with Windows (`C:\Windows\System32\tar.exe`) does not support
        that option, but MSYS2 can supply a
        [version](https://packages.msys2.org/package/tar) that does (using its
        `pacman` tool). Using the existing Stack-supplied MSYS2, in PowerShell
        and located in a folder with write permissions (so the `.tar.xz` file
        can be created), it was advised to command:

        ~~~text
        stack exec -- pacman -S tar
        stack exec -- tar cJf msys2-YYYYMMDD-x86_64.tar.xz C:\msys64
        ~~~

        However, in the case of `msys2-20220503` that resulted in an archive
        that could not extracted on a terminal that did not have elevated rights
        ('Run as administrator') due to errors
        `ERROR: Cannot create symbolic link : A required privilege is not held by the client`.

4.  Test that the Stack-supplied `7z` executable can extract the files in the
    archive that has been created without error:

    ~~~test
    ./7z x msys2-YYYYMMDD-x86_64.tar.xz
    ./7z x msys2-YYYYMMDD-x86_64.tar
    ~~~

5.  Create a new release tagged and named `msys2-YYYYMMDD` in the `master`
    branch of the
    [commercialhaskell/stackage-content](https://github.com/commercialhaskell/stackage-content)
    GitHub repository, uploading the tarball file(s) into that release.

6.  Changes need to be made to the
    [stackage-content/stack/stack-setup-2.yaml](https://github.com/commercialhaskell/stackage-content/blob/master/stack/stack-setup-2.yaml)
    file, to switch over to using the newly uploaded files. For example
    (extract):

    ~~~yaml
    # For upgrade instructions, see: https://github.com/commercialhaskell/stack/blob/stable/doc/maintainers/msys.md
    msys2:
      windows32:
        version: "20200517"
        url: "https://github.com/fpco/stackage-content/releases/download/20200517/msys2-20200517-i686.tar.xz"
        content-length: 79049224
        sha256: 9152ddf50c6bacfae33c1436338235f8db4b10d73aaea63adefd96731fb0bceb
      windows64:
        version: "20220503"
        url: "https://github.com/commercialhaskell/stackage-content/releases/download/msys2-20220503/msys2-20220503-x86_64.tar.xz"
        content-length: 93835868
        sha256: c918f66e984f70add313ee3a5c5b101132cd93d5a3f8e3555e129e2d3dcb3718
    ~~~

    The `content-length:` key's value is the size of the file in bytes. It can
    be obtained from the `Length` field of the `dir` command. The `sha256:`
    key's value can be obtained from the command (in PowerShell):

    ~~~text
    (Get-FileHash msys2-YYYYMMDD-x86_64.tar.xz -Algorithm SHA256).Hash.ToLower()
    ~~~

    The `sha256:` key only accepts lowercase hash results as values.

7.  The changed `stack-setup-2.yaml` file should be tested locally. This can be
    done by:

    * temporarily disabling the existing local copy of MSYS2 by changing the
      name of the `msys2-YYYYMMDD.installed` file in the `stack path --programs`
      directory; and

    * executing the command:

        ~~~text
        stack setup --setup-info-yaml <path to local copy of stack-setup-2.yaml>
        ~~~

    If all is well, the command should proceed to download the updated version
    of MSYS2 that has been specified.

8.  Raise a pull request on `commercialhaskell/stackage-contents` for the
    changes to the locally-tested `stack-setup-2.yaml` file.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/maintainers/releases.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Releases

!!! todo "To do - Simplify the branch or version structure"

    Just release from the `master` branch (but keep the `stable` branch
    tracking the latest stable release plus updates to documentation).

## Version scheme

A Stack package or executable may have a version with three or four components:
`X.Y.Z` or `X.Y.Z.A`.

### Development or stable versions

* Versions with an _even_ `Y` component are development versions (the `master`
  branch)
* Versions with an _odd_ `Y` component are stable versions (the `stable` branch,
  or in a `rc/vX.Y` release candidate branch for not-yet-released versions)

### Unreleased or released versions

* Versions with an _even_ `Z` component are unreleased versions (including
  release candidates)
* Versions with an _odd_ `Z` component are released versions
* Except for the `release` branch (which matches exactly the most recent
  release), all branches must have an even `Z` component
* Branches other than `stable`, `release`, and a `rc/vX.Y` release candidate
  will always have a `0` `Z` component

### Use of a fourth component

* Release candidate binaries will be released with an odd `A` component
* Hackage-only dependency compatibility patch releases add a `A` component
  (e.g. `v2.5.5.1`, in the `release` branch)
* Pre-release unstable binaries will be released with the date as the `A`
  component (e.g. `2.14.0.20240126`)

Examples:

* `2.15.0.0`: `v2.15.x` series pre-release branch (`rc/v2.15` branch)
* `2.15.0.1`: first release candidate for first release of `v2.15.x` series
  (`rc/v2.15` branch)
* `2.15.0.2`: continuing development on pre-release branch
* `2.15.0.3`: second release candidate for first release of `v2.15.x` series
  (`rc/v2.15` branch)
* `2.15.1`: first release of the `2.15.x` series (`release` branch)
* `2.15.2`: development for second release of `2.15.x` series
  (`stable` branch)
* `2.15.2.1`: first release candidate for second release of `2.15.x` series
  (`rc/v2.15` branch)
* `2.15.3`: second release of `2.15.x` series (`release` branch)
* `2.15.3.1`: first Hackage-only patch of `2.15.3` (`release` branch)
* `2.15.3.2`: second Hackage-only patch of `2.15.3` (`release` branch)
* `2.14.0`: unstable development code (`master` branch)
* `2.14.0.20240126`: pre-release snapshot of unstable version (`master` branch)

## Pre-release checks

1.  Check for any P0 and P1 issues that should be dealt with before release.

2.  Check for un-merged pull requests that should be merged before release.

3.  Ensure the `release` and `stable` branches are merged to the `master`
    branch.

4.  Check the copyright dates, and update if needed.

5.  Check the backwards compatability section of `CONTRIBUTING.md` is up to
    date.

6.  Ensure CI matrices in docs (travis-complex, appveyor, azure) have current
    stackage snapshots and GHC versions (e.g.
    https://github.com/commercialhaskell/stack/pull/4565/files)

7.  Update any `stack-*.yaml` that uses a `nightly` snapshot to the latest
    nightly (go over the extra-deps too) and ensure the project builds and tests
    pass. For example, command:

    ~~~text
    stack build --stack-yaml=… --haddock --test --bench --no-run-benchmarks
    ~~~

8.  The Windows installer is built using an
    [NSIS compiler](https://nsis.sourceforge.io/Main_Page). Check that the NSIS
    compiler that will be used is capable of handling
    [large strings](https://nsis.sourceforge.io/Special_Builds).

9.  Ensure the integration tests pass on Linux, macOS and Windows.

10. Some people prefer, or need, to build Stack with Cabal (the tool). Check
    that `cabal.project` is up to date (the specified `with-compiler:`). Check
    that `cabal.config` is up to date and is not missing dependencies relevant
    on Windows and non-Windows operating systems, following the instructions in
    `cabal.project`.

## Release preparation

### A: In the `master` branch

* `package.yaml`: bump to the next release candidate version (bump the second
  component to the next odd number, ensure the third component is `0`, and add
  patchlevel `0`; e.g. from `2.14.0` to `2.15.0.0`).

    !!! attention

        Be sure to update also `stack.cabal` (for example by using
        `stack build --dry-run`).

* `ChangeLog.md`: Check for any entries that snuck into the previous version's
  changes due to merges (`git diff origin/stable HEAD ChangeLog.md`)

### B: Create a new release candidate branch

Cut a new release candidate (RC) branch named `rc/vX.Y` from the `master`
branch.

### C: Return to the `master` branch

1.  `package.yaml`: bump version to the next unstable version (bump the second
    component to the next even number, ensure the third component is `0`; e.g.
    from `2.15.0` to `2.16.0`).

    !!! attention

        Be sure to update also `stack.cabal` (for example by using
        `stack build --dry-run`).

2.  `Changelog.md`:
    *   Change the title of the existing **Unreleased changes** section to what
        will be the next final (non-RC) release (e.g. `v2.15.1`).
    *   Add new "Unreleased changes" section:

        ~~~markdown
        ## Unreleased changes

        Release notes:

        **Changes since vX.Y.Z:**

        Major changes:

        Behavior changes:

        Other enhancements:

        Bug fixes:
        ~~~

3.  `cabal.config`: Ensure the `stack` constraint is set to the same version as
    in the `package.yaml`.

### D: In the release candidate branch

1.  Review documentation for any changes that need to be made:

    *   Ensure all the documentation pages are listed in the `mkdocs.yaml` file.
        Use `git diff --stat origin/stable..HEAD doc/` to look for new or
        deleted files.
    *   Any new documentation pages should have the "may not be correct for the
        released version of Stack" warning at the top.
    *   Search for old Stack version, unstable Stack version, and the next
        "obvious" possible versions in sequence, and `UNRELEASED` and replace
        with next release version (`X.Y.1`, where Y is odd).

        !!! attention

            Do **NOT** update the repository's issue and pull request templates
            (in the `.github` directory) to point at the new release version
            yet!

    *   Search for old snapshots, set to latest snapshot (e.g. in `doc/GUIDE.md`
        where it references the "currently the latest LTS")
    *   Look for any links to "latest" (`latest/`) documentation, replace with
        version tag

2.  Check for any platform entries that need to be added to (or removed from):

    * [releases.yaml](https://github.com/fpco/stackage-content/blob/master/stack/releases.yaml),
    * [install_and_upgrade.md](https://github.com/commercialhaskell/stack/blob/master/doc/install_and_upgrade.md),
    * [get-stack.sh](https://github.com/commercialhaskell/stack/blob/master/etc/scripts/get-stack.sh),
    * [doc/README.md](https://github.com/commercialhaskell/stack/blob/master/doc/README.md),
      and
    * `get.haskellstack.org` redirects.

3.  Re-do the pre-release checks (see the section above).

4.  Update `package.yaml` and `ChangeLog.md`. This step differs between a first,
    second etc release candidate and a final release.

    === "First RC"

        *   `package.yaml`: bump to first odd patchlevel version (e.g.
            `X.Y.0.1`).

        *   `ChangeLog.md`: Rename the “Unreleased changes” section to the same
            version as `package.yaml`, and mark it clearly as a release
            candidate (e.g. `vX.Y.0.1 (release candidate)`). Remove any empty
            sections.

    === "Second, third etc RC"

        *   `package.yaml`: bump to next odd patchlevel version (e.g.
            `X.Y.0.3`).

        *   `ChangeLog.md`: Rename the “Unreleased changes” section to the same
            version as `package.yaml`, and mark it clearly as a release
            candidate (e.g. `vX.Y.0.3 (release candidate)`). Remove any empty
            sections.

    === "Final Release"

        *   `package.yaml`: bump version to odd last component and no patchlevel
            (e.g. from `X.Y.0.2` to `X.Y.1`).

        *   `ChangeLog.md`: consolidate all the release candidate changes into a
            single section for the final release version.

    !!! attention

        After updating `package.yaml`, be sure to update also `stack.cabal` (for
        example by using `stack build --dry-run`).

5.  Ensure the `stack ==` constraint in `cabal.config` is set to be equal to the
    same version as `package.yaml`.

6.  Follow the steps in the *Release process* section below that apply.

## Release process

The release process differs between a first, second etc release candidate and a
final release.

=== "First, second etc RC"

    ### A: Integration tests workflow passes

    Ensure that the GitHub
    [Integration Tests workflow](https://github.com/commercialhaskell/stack/actions?query=workflow%3A%22Integration+tests%22)
    passes on the branch that you are releasing.

    This workflow will run automatically for the `rc/*` branch.

    ### B: Push a Git tag

    Push a Git tag. The tag should be `rc/vX.Y.Z.A`, with `X.Y.Z.A` matching the
    version in `package.yaml`.

    For example, command:

    ~~~text
    git tag -m rc/vX.Y.Z.A rc/vX.Y.Z.A
    git push origin rc/vX.Y.Z.A
    ~~~

    ### C: Edit the draft GitHub release, and publish it

    Wait for the GitHub
    [Integration Tests workflow](https://github.com/commercialhaskell/stack/actions?query=workflow%3A%22Integration+tests%22)
    to complete for the branch you just created. This will create a draft GitHub
    release and upload the bindists (plus signatures and hashes) to it.

    Edit the draft
    [GitHub release](https://github.com/commercialhaskell/stack/releases/):

    * Add `(release candidate)` to the name field and ensure that
      *This is a pre-release* is checked.
    * Add the ChangeLog to the description.

    Publish the GitHub release.

    ### D: Consider adding other platforms to the GitHub release

    The
    [Integration Tests workflow](https://github.com/commercialhaskell/stack/actions?query=workflow%3A%22Integration+tests%22)
    is limited to the platforms supported by the GitHub-hosted runners
    (currently, x86_64 and macOS/AArch64) and any self-hosted runners
    (currently, only Linux/AArch64). However, it is possible to edit the GitHub
    release to include binary distributions for other platforms. The
    prerequisites are:

    * a computer with that platform (operating system, machine architecture);
    * a sufficiently-recent existing version of Stack for that platform;
    * a tool to print SHA checksums, such as `shasum` on Linux and macOS; and
    * the GNU Privacy Guard tool (`gpg`), which has had imported the private key
      used to sign Stack executables (see further below).

    The steps are similar to those in the workflow:

    1.  Change to the root directory of the Stack project.

    2.  `stack etc/scripts/release.hs check`, to check before building.

    3.  `stack etc/scripts/release.hs build`, to build. The output 'assets'
        (`stack-<version>-<os>-<architecture> ...`) will be in
        the `_release` directory in the root directory of the Stack project.

    4.  For each of the output assets, create a corresponding SHA 256 file with
        a `.sha256` extension. For example (where `<asset>` is the name of the
        file):

        ~~~text
        shasum -a 256 <asset> > <asset>.sha256
        ~~~

    5.  For each of the output assets, create a corresponding ASCII-armored
        signature file with an `.asc` extension using `gpg`. For example (where
        `<asset>` is the name of the file):

        ~~~text
        gpg --digest-algo=sha512 --detach-sig --armor -u 0x575159689BEFB442 <asset>
        ~~~

    6.  Edit the GitHub release to include the output assets and their
        corresponding `.sha256` and `.asc` files.

    The private key used to sign Stack executables can be exported from a
    version of `gpg` to which it has previously been imported with:

    ~~~text
    gpg --armor --export-secret-key 0x575159689BEFB442
    ~~~

    The private key, so obtained, can be imported into `gpg` by:

    1.  Commanding `gpg --import`.

    2.  Pasting the private key.

    3.  Entering Ctrl+D and Enter.

    ### E: Update versions and `ChangeLog.md` for 'unreleased'

    In the `rc/vX.Y` branch:

    * `package.yaml`: bump the version number. Bump the fourth component to an
       even number (e.g. from `2.15.0.1` to `2.15.0.2`).

        !!! attention

            Be sure to update also `stack.cabal` (for example by using
            `stack build --dry-run`).

    * `ChangeLog.md`: Add an “Unreleased changes” section (update the “changes
      since” version):

        ~~~markdown
        ## Unreleased changes

        Release notes:

        **Changes since vX.Y.Z:**

        Major changes:

        Behavior changes:

        Other enhancements:

        Bug fixes:
        ~~~

    ### F: Request update of GHCup's metadata

    Raise a pull request at the
    [`haskell/ghcup-metadata`](https://github.com/haskell/ghcup-metadata) GitHub
    repository to request an addition to GHCup's latest metadata configuration
    file for prereleases, tagged as the latest prerelease. In the metadata,
    change the tags for any past Stack prereleases to indicate that they are no
    longer the latest prerelease.

    ### G: Announce the release candidate

    Announce the release candidate to the following mailing lists

    * haskell-cafe@haskell.org

        !!! note

            You have to be a member of the mailing list to post to it. See the
            list's
            [interface](https://mail.haskell.org/cgi-bin/mailman/listinfo/haskell-cafe)

    * haskell-stack@googlegroups.com

        !!! note

            Members of the group can post but posts from new members are held
            for moderation.

    * commercialhaskell@googlegroups.com

        !!! note

            Members of the group can post but posts from new members are held
            for moderation.

    Announce the release candidate on the
    [Haskell Community](https://discourse.haskell.org/c/announcements/10/l/latest).

    Announce the release candidate in the `#stack-users` channel of the Haskell
    Foundation's Slack workspace.

    Announce the release candidate in the
    [Haskell Stack room](https://matrix.to/#/#haskell-stack:matrix.org)
    (address `#haskell-stack:matrix.org`) on [Matrix](https://matrix.org/).

    Announce the release candidate in Reddit's
    [Haskell](https://www.reddit.com/r/haskell/) community.

    In each case, use the subject (change 'first' to 'second' etc for subsequent
    release candidates):

    * `ANN: first release candidate for stack-X.Y.Z`

    In the message, include:

    * a link to the release on GitHub
      (`https://github.com/commercialhaskell/stack/releases/tag/rc/vX.Y.Z.A`) to
      download it
    * the release description from Github.

=== "Final Release"

    ### A: Integration tests workflow passes

    Ensure that the GitHub
    [Integration Tests workflow](https://github.com/commercialhaskell/stack/actions?query=workflow%3A%22Integration+tests%22)
    passes on the branch that you are releasing.

    This workflow will run automatically for `rc/*` branches.

    ### B: Push a Git tag

    Push a Git tag. The tag should be `vX.Y.Z`, where `X.Y.Z` matches the
    version in `package.yaml`.

    For example, command:

    ~~~text
    git tag -m vX.Y.Z vX.Y.Z
    git push origin vX.Y.Z
    ~~~

    ### C: Edit the draft GitHub release, and publish it

    Wait for the GitHub
    [Integration Tests workflow](https://github.com/commercialhaskell/stack/actions?query=workflow%3A%22Integration+tests%22)
    to complete for the tag you just created. This will create a draft GitHub
    release and upload the bindists (plus signatures and hashes) to it.

    Edit the draft
    [GitHub release](https://github.com/commercialhaskell/stack/releases/):

    *   Add the ChangeLog to the description.
    *   Get the list of contributors to the release and add it to the
        description. For example, command:

        === "Unix-like"

            ~~~text
            git shortlog -s origin/release..HEAD|sed 's/^[0-9 \t]*/* /'|LC_ALL=C sort -f
            ~~~

        === "Windows (with PowerShell)"

            ~~~text
            (git shortlog -s origin/release..HEAD) -Replace '^[0-9 \t]*', '* ' | Sort-Object
            ~~~

    Publish the GitHub release.

    ### D: Consider adding other platforms to the GitHub release

    The
    [Integration Tests workflow](https://github.com/commercialhaskell/stack/actions?query=workflow%3A%22Integration+tests%22)
    is limited to the platforms supported by the GitHub-hosted runners
    (currently, x86_64 and macOS/AArch64) and any self-hosted runners
    (currently, only Linux/AArch64). However, it is possible to edit the GitHub
    release to include binary distributions for other platforms. The
    prerequisites are:

    * a computer with that platform (operating system, machine architecture);
    * a sufficiently-recent existing version of Stack for that platform;
    * a tool to print SHA checksums, such as `shasum` on Linux and macOS; and
    * the GNU Privacy Guard tool (`gpg`), which has had imported the private key
      used to sign Stack executables (see further below).

    The steps are similar to those in the workflow:

    1.  Change to the root directory of the Stack project.

    2.  `stack etc/scripts/release.hs check`, to check before building.

    3.  `stack etc/scripts/release.hs build`, to build. The output 'assets'
        (`stack-<version>-<os>-<architecture> ...`) will be in
        the `_release` directory in the root directory of the Stack project.

    4.  For each of the output assets, create a corresponding SHA 256 file with
        a `.sha256` extension. For example (where `<asset>` is the name of the
        file):

        ~~~text
        shasum -a 256 <asset> > <asset>.sha256
        ~~~

    5.  For each of the output assets, create a corresponding ASCII-armored
        signature file with an `.asc` extension using `gpg`. For example (where
        `<asset>` is the name of the file):

        ~~~text
        gpg --digest-algo=sha512 --detach-sig --armor -u 0x575159689BEFB442 <asset>
        ~~~

    6.  Edit the GitHub release to include the output assets and their
        corresponding `.sha256` and `.asc` files.

    The private key used to sign Stack executables can be exported from a
    version of `gpg` to which it has previously been imported with:

    ~~~text
    gpg --armor --export-secret-key 0x575159689BEFB442
    ~~~

    The private key, so obtained, can be imported into `gpg` by:

    1.  Commanding `gpg --import`.

    2.  Pasting the private key.

    3.  Entering Ctrl+D and Enter.

    ### E: Upload to Hackage and reset branches

    Upload the `stack` package to Hackage with the command:

    ~~~text
    stack upload . --pvp-bounds=lower
    ~~~

    Reset the `release` branch to the released commit. For example, with the
    commands:

    ~~~text
    git checkout release
    git merge --ff-only vX.Y.Z
    git push origin release
    ~~~

    Update the `stable` branch to the released commit. For example, with the
    commands:

    ~~~text
    git checkout stable
    git merge --ff-only vX.Y.Z
    git push origin stable
    ~~~

    Merge any changes made in the RC, `release` or `stable` branches to the
    `master` branch. Be careful about version and `ChangeLog.md`. It is best to
    do this by making a `ci/merge-stable-to-master` branch and waiting for CI to
    pass, then merging. If anything is complicated to merge, consider making it
    a pull request and getting it reviewed rather than merging immediately.

    Delete the RC branch, both locally and on the remote. For example with the
    commands:

    ~~~text
    git branch -d rc/vX.Y
    git push origin :rc/vX.Y
    ~~~

    ### F: Activate the version on Read The Docs

    Activate the version for new release tag, on
    [readthedocs.org](https://readthedocs.org/projects/stack/versions/).

    Ensure that the `stable` documentation has updated.

    ### G: Update get.haskellstack.org redirects

    Update the https://get.haskellstack.org redirects by updating the
    `_redirects` file in the root of the
    `commercialhaskell/get-haskellstack-org` GitHub
    [repository](https://github.com/commercialhaskell/get-haskellstack-org).

    For further information, see the
    [get.haskellstack.org redirects](haskellstack.org.md#gethaskellstackorg-redirects)
    documentation.

    Test with the commands:

    === "Unix-like"

        ~~~text
        curl -vL https://get.haskellstack.org/stable/linux-x86_64.tar.gz >/dev/null
        curl -vL https://get.haskellstack.org/upgrade/linux-x86_64.tar.gz >/dev/null
        ~~~

    === "Windows (with PowerShell)"

        ~~~text
        curl -vL https://get.haskellstack.org/stable/linux-x86_64.tar.gz >NUL
        curl -vL https://get.haskellstack.org/upgrade/linux-x86_64.tar.gz >NUL
        ~~~

    and make sure it redirects to the new version.

    ### H: Update versions and `ChangeLog.md` for 'unreleased'

    In the `stable` branch:

    * `package.yaml`: bump the version number. Bump the third component to an
      even number (e.g. from `2.15.1` to `2.15.2`).

        !!! attention

            Be sure to update also `stack.cabal` (for example by using
            `stack build --dry-run`).

    * `ChangeLog.md`: Add an “Unreleased changes” section (update the “changes
      since” version):

        ~~~markdown
        ## Unreleased changes

        Release notes:

        **Changes since vX.Y.Z:**

        Major changes:

        Behavior changes:

        Other enhancements:

        Bug fixes:
        ~~~

    ### I: Update the repository's issue and pull request templates

    The repository's issue and pull request templates are the `.github`
    directory. Update them to refer to the new release version (`X.Y.Z`).

    ### J: Request update of GHCup's metadata

    Raise a pull request at the
    [`haskell/ghcup-metadata`](https://github.com/haskell/ghcup-metadata) GitHub
    repository to request an addition to GHCup's latest metadata configuration
    files for releases and 'vanilla' releases, tagged as the latest release.
    (The GHCup project will decide whether, and when, to recommend the release.)
    In the metadata, change the tags for any past Stack releases to indicate
    that they are no longer the latest release.

    ### K: Announce the release

    Announce the release to the following mailing lists

    * haskell-cafe@haskell.org

        !!! note

            You have to be a member of the mailing list to post to it. See the
            list's
            [interface](https://mail.haskell.org/cgi-bin/mailman/listinfo/haskell-cafe)

    * haskell-stack@googlegroups.com

        !!! note

            Members of the group can post but posts from new members are held
            for moderation.

    * commercialhaskell@googlegroups.com

        !!! note

            Members of the group can post but posts from new members are held
            for moderation.

    Announce the release on the
    [Haskell Community](https://discourse.haskell.org/c/announcements/10/l/latest).

    Announce the release in the `#stack-users` channel of the Haskell
    Foundation's Slack workspace.

    Announce the release in the
    [Haskell Stack room](https://matrix.to/#/#haskell-stack:matrix.org)
    (address `#haskell-stack:matrix.org`) on [Matrix](https://matrix.org/).

    Announce the release in Reddit's
    [Haskell](https://www.reddit.com/r/haskell/) community.

    In each case, use the subject:
    * `ANN: stack-X.Y.Z`

    In the message, include:

    * the release description from Github.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/maintainers/self-hosted_runners.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Self-hosted runners

[GitHub Actions](https://docs.github.com/en/actions) is used to do CI on Stack.
The `linux-arm64` job of the `integration-tests.yml` workflow runs on a
self-hosted runner for Linux and ARM64.

The current basic setup is:

* FP Complete has an Oracle Cloud account that provides a free tier that
  includes a really powerful ARM64 machine;
* within Oracle Cloud, FP Complete are running an Ubuntu/ARM64 instance; and
* on that instance, FP Complete are running the GitHub Runner software.

The runner name is `stack-github-action3` and the machine name is
`stack-github-action3`.

Occasionally Oracle will turn off the machine because:

* Oracle thinks it is not being used (because of the free tier); and/or
* other things, like disk space filling up.

## Managing the `stack-github-action3` runner

With the appropriate authority installed on the server, the runner can be
managed remotely using SSH, with command `ssh ubuntu@arm-runner.stackage.org`.

The available disk space can be queried with command `df -h`; the relevant entry
is for filesystem `/dev/sda1`.

If the available space is low, that may be due to unncessary GHC versions
installed in Stack's `programs` directory.

## The `ghc-arm-5` runner

From 9 February 2024, the Haskell Foundation sought to provide an alternative
runner named `ghc-arm-5` but that was based on NixOS and proved to be
incompatible.

## Alternatives to the self-hosted runners

One alternative to the self-hosted runners is to build statically-linked Stack
executables for Linux/AArch64 on macOS/AArch64. This can be done thanks to
the multi-architecture Docker images built and published by Olivier Benz, at
https://gitlab.com/benz0li/ghc-musl.

GitHub provides a GitHub-hosted macOS/AArch64 runner (`macOS-14`).
Unfortunately, that is macOS/M1 and the M1 machine architecture does not support
nested virtualisation. This rules out using Docker, as the runner is itself a
virtual machine.

However, this solution can be applied locally and the build outputs for the
Linux/AArch64 platform added manually to the result of the GitHub workflow.

The experimental Haskell script `etc/scripts/release-linux-aarch64.hs` is
intended to facilitate the building of statically-linked Stack executables for
Linux/AArch64 on macOS/AArch64.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/maintainers/stack_errors.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

## Stack's errors

In connection with considering Stack's support of the
[Haskell Error Index](https://errors.haskell.org/) initiative, this page seeks
to take stock of the errors that Stack itself can raise, by reference to the
`master` branch of the Stack repository. Last updated: 2024-03-29.

*   `Stack.main`: catches exceptions from action `commandLineHandler`.

    -   `ExitCode`
    -   `throwIO`

*   `Stack.main`: catches exceptions from action `run`:

    -   `ExitCode` (`exitWith`)
    -   `PrettyException` (`exitFailure`)
    -   `SomeException` (`exitFailure`)

    The following types are instances of `Control.Exception.Exception` and
    `Show`. Some are instances of `Stack.Prelude.PrettyException`. Some data
    constructors have strict fields but that is not documented below:

    -   `Control.Concurrent.ExecuteException`

        ~~~haskell
        [S-2816] = InconsistentDependenciesBug
        ~~~

    -   `GHC.GHC.Utils.GhcPkg.Main.Compat`

        ~~~haskell
        [S-6512] = CannotParse String String String
        [S-3384] | CannotOpenDBForModification FilePath IOException
        [S-1430] | SingleFileDBUnsupported FilePath
        [S-5996] | ParsePackageInfoExceptions String
        [S-3189] | CannotFindPackage PackageArg (Maybe FilePath)
        [S-9323] | CannotParseRelFileBug String
        [S-7651] | CannotParseDirectoryWithDBug String
        ~~~

    -   `Options.Applicative.Builder.Extra.OptionsApplicativeExtraException`

        ~~~haskell
        [S-2797] = FlagNotFoundBug
        ~~~

    -   `Stack.Build.CabalVersionPrettyException`

        ~~~haskell
        [S-5973] = CabalVersionNotSupported Version
        ~~~

    -   `Stack.Build.ConstructPlan.NotOnlyLocal`

        ~~~haskell
        [S-1727] = NotOnlyLocal [PackageName] [Text]
        ~~~

    -   `Stack.BuildPlan.BuildPlanException`

        ~~~haskell
        [S-7571] = UnknownPackages (Path Abs File) (Map PackageName (Maybe Version, Set PackageName)) (Map PackageName (Set PackageIdentifier))
        [S-2045] | SnapshotNotFound SnapName
        [S-8559] | NeitherCompilerOrSnapshotSpecified Text
        [S-5743] | DuplicatePackagesBug
        ~~~

    -   `Stack.CLI.CliPrettyException`

        ~~~haskell
        [S-4639] = NoArgumentsBug
        ~~~

    -   `Stack.Clean.CleanException`

        ~~~haskell
        [S-9463] = NonLocalPackages [PackageName]
        [S-6321] | DeletionFailures [(Path Abs Dir, SomeException)]
        ~~~

    -   `Stack.Config.Docker.ConfigDockerException`

        ~~~haskell
        [S-8575] = SnapshotNotSupportedException (Maybe Project) (Maybe AbstractSnapshot)
        ~~~

    -   `Stack.Config.Nix.ConfigNixException`

        ~~~haskell
        [S-2726] = NixCannotUseShellFileAndPackagesException
        [S-9317] | GHCMajorVersionUnspecified
        [S-8605] | OnlyGHCSupported
        ~~~

    -   `Stack.ConfigCmd.ConfigCmdException`

        ~~~haskell
        [S-3136] = NoProjectConfigAvailable
        ~~~

    -   `Stack.Constants.ConstantsException`

        ~~~haskell
        [S-6057] = WiredInPackagesNotParsedBug
        ~~~

    -   `Stack.Coverage.CoveragePrettyException`

        ~~~haskell
        [S-6361] = NonTestSuiteTarget PackageName
        [S-2321] | NoTargetsOrTixSpecified
        [S-9975] | NotLocalPackage PackageName
        ~~~

    -   `Stack.DependencyGraph.DependencyGraphException`

        ~~~haskell
        [S-7071] = DependencyNotFoundBug GhcPkgId
        [S-7151] | PackageNotFoundBug PackageName
        ~~~

    -   `Stack.Exec.ExecException`

        ~~~haskell
        [S-1541] = InvalidPathForExec FilePath
        ~~~

    -   `Stack.Exec.ExecPrettyException`

        ~~~haskell
        [S-8251] = PackageIdNotFoundBug String
        [S-2483] | ExecutableToRunNotFound
        [S-8600] | NoPackageIdReportedBug
        [S-7371] | InvalidExecTargets [Text]
        ~~~

    -   `Stack.GhcPkg`

        `[S-6716]` used in `unregisterGhcPkgIds`

    -   `Stack.Ghci.GhciException`

        ~~~haskell
        [S-6716] = InvalidPackageOption String
        [S-9632] | LoadingDuplicateModules
        [S-3600] | MissingFileTarget String
        [S-9906] | Can'tSpecifyFilesAndTargets
        [S-5188] | Can'tSpecifyFilesAndMainIs
        ~~~

    -   `Stack.Ghci.GhciPrettyException`

        ~~~haskell
        [S-6948] = GhciTargetParseException [StyleDoc]
        [S-1939] | CandidatesIndexOutOfRangeBug
        ~~~

    -   `Stack.Hoogle.HoogleException`

        ~~~haskell
        [S-9669] = HoogleOnPathNotFoundBug
        ~~~

    -   `Stack.Hoogle.HooglePrettyException`

        ~~~haskell
        [S-1329] = HoogleNotFound StyleDoc
        [S-3025] | HoogleDatabaseNotFound
        ~~~

    -   `Stack.Init.InitException`

        ~~~haskell
        [S-2747] | NoPackagesToIgnoreBug
        ~~~

    -   `Stack.Init.InitPrettyException`

        ~~~haskell
        [S-8332] = SnapshotDownloadFailure SomeException
        [S-8009] | ConfigFileAlreadyExists FilePath
        [S-5267] | PackageNameInvalid [FilePath]
        [S-1833] | NoMatchingSnapshot (NonEmpty SnapName)
        [S-6395] | SnapshotMismatch RawSnapshotLocation String
        [S-2422] | SnapshotPartial RawSnapshotLocation String
        ~~~

    -   `Stack.List.ListPrettyException`

        ~~~haskell
        [S-4926] = CouldNotParsePackageSelectors [StyleDoc]
        ~~~

    -   `Stack.Lock.LockPrettyException`

        ~~~haskell
        [S-1353] = WritingLockFileError (Path Abs File) Locked
        ~~~

    -   `Stack.Ls.LsException` *

        ~~~haskell
        [S-3421] = ParseFailure [Value]
        ~~~

    -   `Stack.New.NewPrettyException`

        ~~~haskell
        [S-2135] = ProjectDirAlreadyExists String (Path Abs Dir)
        [S-1688] | DownloadTemplateFailed Text String VerifiedDownloadException
        [S-3650] | LoadTemplateFailed TemplateName FilePath
        [S-9582] | ExtractTemplateFailed TemplateName FilePath String
        [S-9490] | TemplateInvalid TemplateName StyleDoc
        [S-5682] | MagicPackageNameInvalid String
        [S-3113] | AttemptedOverwrites [Path Abs File]
        ~~~

    -   `Stack.Nix.NixException`

        ~~~haskell
        [S-7384] = CannotDetermineProjectRoot
        ~~~

    -   `Stack.PackageDump.PackageDumpException`

        ~~~haskell
        [S-4257] = MissingSingleField Text (Map Text [Line])
        [S-2016] | Couldn'tParseField Text [Line]
        ~~~

    -   `Stack.Query.QueryException`

        ~~~haskell
        [S-4419] = SelectorNotFound [Text]
        [S-8422] | IndexOutOfRange [Text]
        [S-4360] | NoNumericSelector [Text]
        [S-1711] | CannotApplySelector Value [Text]
        ~~~

    -   `Stack.Runners.RunnersException`

        ~~~haskell
        [S-7144] = CommandInvalid
        [S-8314] | DockerAndNixInvalid
        [S-8641] | NixWithinDockerInvalid
        [S-5107] | DockerWithinNixInvalid
        ~~~

    -   `Stack.SDist.SDistPrettyException`

        ~~~haskell
        [S-6439] = CheckException (NonEmpty PackageCheck)
        [S-9595] | CabalFilePathsInconsistentBug (Path Abs File) (Path Abs File)
        [S-7875] | ToTarPathException
        ~~~

    -   `Stack.Script.ScriptException`

        ~~~haskell
        [S-4994] = MutableDependenciesForScript [PackageName]
        [S-1691] | AmbiguousModuleName ModuleName [PackageName]
        [S-5067] | ArgumentsWithNoRunInvalid
        [S-9469] | NoRunWithoutCompilationInvalid
        [S-5055] | FailedToParseScriptFileAsDirBug (Path Rel File)
        [S-9464] | FailedToParseFileAsDirBug (Path Abs Dir)
        ~~~

    -   `Stack.Setup.PerformPathCheckingException`

        ~~~haskell
        [S-1991] = ProcessExited ExitCode String [String]
        ~~~

    -   `Stack.Setup.SetupException`

        ~~~haskell
        [S-2076] = WorkingDirectoryInvalidBug
        [S-3967] | StackBinaryArchiveZipUnsupportedBug
        ~~~

    -   `Stack.Setup.SetupPrettyException`

        ~~~haskell
        [S-7441] = GHCInstallFailed SomeException StyleDoc String [String] (Path Abs Dir) (Path Abs Dir) (Path Abs Dir)
        [S-2476] | InvalidGhcAt (Path Abs File) SomeException
        [S-4764] | ExecutableNotFound [Path Abs File]
        [S-9953] | SandboxedCompilerNotFound [String] [Path Abs Dir]
        [S-1852] | UnsupportedSetupCombo OS Arch
        [S-2126] | MissingDependencies [String]
        [S-9443] | UnknownCompilerVersion (Set Text) WantedCompiler (Set ActualCompiler)
        [S-6810] | UnknownOSKey Text
        [S-5159] | GHCSanityCheckCompileFailed SomeException (Path Abs File)
        [S-8948] | RequireCustomGHCVariant
        [S-2905] | ProblemWhileDecompressing (Path Abs File)
        [S-9561] | SetupInfoMissingSevenz
        [S-7748] | UnsupportedSetupConfiguration
        [S-5308] | MSYS2NotFound Text
        [S-5127] | UnwantedCompilerVersion
        [S-1540] | UnwantedArchitecture
        [S-8668] | GHCInfoNotValidUTF8 UnicodeException
        [S-4878] | GHCInfoNotListOfPairs
        [S-2965] | GHCInfoMissingGlobalPackageDB
        [S-5219] | GHCInfoMissingTargetPlatform
        [S-8299] | GHCInfoTargetPlatformInvalid String
        [S-2574] | CabalNotFound (Path Abs File)
        [S-8488] | GhcBootScriptNotFound
        [S-1128] | HadrianScriptNotFound
        [S-1906] | URLInvalid String
        [S-1648] | UnknownArchiveExtension String
        [S-4509] | Unsupported7z
        [S-3158] | TarballInvalid String
        [S-5252] | TarballFileInvalid String (Path Abs File)
        [S-1827] | UnknownArchiveStructure (Path Abs File)
        [S-9476] | StackReleaseInfoNotFound String
        [S-4461] | StackBinaryArchiveNotFound [String]
        [S-6617] | HadrianBindistNotFound
        [S-7227] | DownloadAndInstallCompilerError
        [S-6636] | StackBinaryArchiveUnsupported Text
        [S-7871] | StackBinaryNotInArchive String Text
        [S-5046] | FileTypeInArchiveInvalid Entry Text
        [S-4132] | BinaryUpgradeOnOSUnsupported OS
        [S-3249] | BinaryUpgradeOnArchUnsupported Arch
        [S-4230] | ExistingMSYS2NotDeleted (Path Abs Dir) IOException
        ~~~

    -   `Stack.StackException`

        ~~~haskell
        [S-2186] = InvalidReExecVersion String String
        ~~~

    -   `Stack.Storage.User.StorageUserException`

        ~~~haskell
        [S-8196] = CompilerFileMetadataMismatch
        [S-5378] | GlobalPackageCacheFileMetadataMismatch
        [S-2673] | GlobalDumpParseFailure
        [S-8441] | CompilerCacheArchitectureInvalid Text
        ~~~

    -   `Stack.Templates.TemplatesPrettyException`

        ~~~haskell
        [S-8143] = DownloadTemplatesHelpFailed HttpException
        [S-6670] | TemplatesHelpEncodingInvalid String UnicodeException
        ~~~

    -   `Stack.Types.Build.BuildException`

        ~~~haskell
        [S-7178] = Couldn'tFindPkgId PackageName
        [S-3127] | Couldn'tParseTargets [Text]
        [S-2154] | UnknownTargets (Set PackageName) (Map PackageName Version) (Path Abs File)
        [S-1995] | TestSuiteFailure PackageIdentifier (Map Text (Maybe ExitCode)) (Maybe (Path Abs File)) ByteString
        [S-3819] | TestSuiteTypeUnsupported TestSuiteInterface
        [S-5797] | LocalPackageDoesn'tMatchTarget PackageName Version Version
        [S-3118] | NoSetupHsFound (Path Abs Dir)
        [S-4925] | InvalidGhcOptionsSpecification [PackageName]
        [S-7987] | TestSuiteExeMissing Bool String String String
        [S-8027] | CabalCopyFailed Bool String
        [S-5510] | LocalPackagesPresent [PackageIdentifier]
        [S-7168] | CouldNotLockDistDir (Path Abs File)
        [S-7868] | TaskCycleBug PackageIdentifier
        [S-8923] | PackageIdMissingBug PackageIdentifier
        [S-7371] | AllInOneBuildBug
        [S-6739] | MultipleResultsBug PackageName [DumpPackage]
        [S-3121] | TemplateHaskellNotFoundBug
        [S-6901] | HaddockIndexNotFound
        [S-5452] | ShowBuildErrorBug
        [S-2696] | CallStackEmptyBug
        ~~~

    -   `Stack.Types.Build.BuildPrettyException`

        ~~~haskell
        [S-4804] = ConstructPlanFailed [ConstructPlanException] (Path Abs File) (Path Abs Dir) ParentMap (Set PackageName) (Map PackageName [PackageName])
        [S-7282] | ExecutionFailure [SomeException]
        [S-7011] | CabalExitedUnsuccessfully ExitCode PackageIdentifier (Path Abs File) [String] (Maybe (Path Abs File)) [Text]
        [S-6374] | SetupHsBuildFailure ExitCode (Maybe PackageIdentifier) (Path Abs File) [String] (Maybe (Path Abs File)) [Text]
        [S-8506] | TargetParseException [StyleDoc]
        [S-7086] | SomeTargetsNotBuildable [(PackageName, NamedComponent)]
        [S-8664] | InvalidFlagSpecification (Set UnusedFlags)
        [S-8100] | GHCProfOptionInvalid
        [S-1727] | NotOnlyLocal [PackageName] [Text]
        [S-6362] | CompilerVersionMismatch (Maybe (ActualCompiler, Arch)) (WantedCompiler, Arch) GHCVariant CompilerBuild VersionCheck (Maybe (Path Abs File)) Text
        ~~~

    -   `Stack.Types.Compiler.CompilerException`

        ~~~haskell
        [S-7903] = GhcjsNotSupported
        [S-7972] | PantryException PantryException
        ~~~

    -   `Stack.Types.Config.Exception.ConfigException`

        ~~~haskell
        [S-8981] | ParseCustomSnapshotException Text ParseException
        [S-2206] | NoProjectConfigFound (Path Abs Dir) (Maybe Text)
        [S-4964] | UnexpectedArchiveContents [Path Abs Dir] [Path Abs File]
        [S-2040] | UnableToExtractArchive Text (Path Abs File)
        [S-1641] | BadStackVersionException VersionRange
        [S-8773] | NoSuchDirectory FilePath
        [S-3938] | ParseGHCVariantException String
        [S-8530] | BadStackRoot (Path Abs Dir)
        [S-7613] | Won'tCreateStackRootInDirectoryOwnedByDifferentUser (Path Abs Dir) (Path Abs Dir)
        [S-8707] | UserDoesn'tOwnDirectory (Path Abs Dir)
        [S-3605] | ManualGHCVariantSettingsAreIncompatibleWithSystemGHC
        [S-6816] | NixRequiresSystemGhc
        [S-5027] | NoSnapshotWhenUsingNoProject
        [S-3803] | NoLTSWithMajorVersion Int
        [S-5472] | NoLTSFound
        ~~~

    -   `Stack.Types.Config.Exception.ConfigPrettyException`

        ~~~haskell
        [S-6602] = ParseConfigFileException (Path Abs File) ParseException
        [S-7462] | StackWorkEnvNotRelativeDir String
        [S-5470] | DuplicateLocalPackageNames [(PackageName, [PackageLocation])]
        [S-6854] | BadMsysEnvironment MsysEnvironment Arch
        [S-5006] | NoDefaultMsysEnvironmentBug
        ~~~

    -   `Stack.Types.Config.ParseAbsolutePathException`

        ~~~haskell
        [S-9437] = ParseAbsolutePathException String String
        ~~~

    -   `Stack.Types.Docker.DockerException`

        ~~~haskell
        [S-3223] = DockerMustBeEnabledException
        [S-9779] | OnlyOnHostException
        [S-9105] | InspectFailedException String
        [S-6626] | NotPulledException String
        [S-5841] | InvalidImagesOutputException String
        [S-9608] | InvalidPSOutputException String
        [S-2240] | InvalidInspectOutputException String
        [S-6092] | PullFailedException String
        [S-6218] | DockerTooOldException Version Version
        [S-8252] | DockerVersionProhibitedException [Version] Version
        [S-6170] | BadDockerVersionException VersionRange Version
        [S-5827] | InvalidVersionOutputException
        [S-7112] | HostStackTooOldException Version (Maybe Version)
        [S-5832] | ContainerStackTooOldException Version Version
        [S-4078] | CannotDetermineProjectRootException
        [S-7058] | DockerNotInstalledException
        [S-6894] | UnsupportedStackExeHostPlatformException
        [S-1512] | DockerStackExeParseException String
        ~~~

    -   `Stack.Types.GhcPkgId.GhcPkgIdParseFail`

        ~~~haskell
        [S-5359] = GhcPkgIdParseFail Text
        ~~~

    -   `Stack.Types.Package.PackageException`

        ~~~haskell
        [S-8072] = PackageInvalidCabalFile (Either PackageIdentifierRevision (Path Abs File)) (Maybe Version) [PError] [PWarning]
        [S-5394] | MismatchedCabalIdentifier PackageIdentifierRevision PackageIdentifier
        [S-2203] | CabalFileNameParseFail FilePath
        [S-8854] | CabalFileNameInvalidPackageName FilePath
        [S-4623] | ComponentNotParsedBug
        ~~~

    -   `Stack.Types.Snapshot.TypesSnapshotException`

        ~~~haskell
        [S-8787] = ParseSnapshotException Text
        [S-4865] | FilepathInDownloadedSnapshot Text
        ~~~

    -   `Stack.Types.Storage.StoragePrettyException`

        ~~~haskell
        [S-8835] = StorageMigrationFailure Text (Path Abs File) SomeException
        ~~~

    -   `Stack.Types.TemplateName.TypesTemplateNameException`

        ~~~haskell
        [S-7410] = DefaultTemplateNameNotParsedBug String
        ~~~

    -   `Stack.Unpack.UnpackPrettyException`

        ~~~haskell
        [S-3515] = UnpackDirectoryAlreadyExists (Set (Path Abs Dir))
        [S-2628] | CouldNotParsePackageSelectors [String]
        ~~~

    -   `Stack.Upgrade.UpgradePrettyException`

        ~~~haskell
        [S-8761] = SnapshotOptionInvalid
        [S-3642] | NeitherBinaryOrSourceSpecified
        [S-8716] | ExecutableFailure
        [S-7114] | CommitsNotFound String String
        [S-9668] | StackInPackageIndexNotFound
        [S-6648] | VersionWithNoRevision
        ~~~

    -   `Stack.Upload.UploadPrettyException`

        ~~~haskell
        [S-2256] = AuthenticationFailure
        [S-6108] | ArchiveUploadFailure Int [String] String
        [S-2837] | DocsTarballInvalid [(String, Path Abs File)]
        [S-3179] | ItemsInvalid [FilePath]
        [S-3030] | NoItemSpecified String
        [S-5908] | PackageDirectoryInvalid [FilePath]
        [S-7274] | PackageIdNotSpecifiedForDocsUploadBug
        [S-5860] | PackageIdSpecifiedForPackageUploadBug
        [S-5955] | TarGzFileNameInvalidBug String
        ~~~

    -   `System.Process.Pager.PagerException`

        ~~~haskell
        [S-9392] = PagerExitFailure CmdSpec Int
        ~~~

    \* The instance of `Show` is derived.

*   `Stack.Build.Execute.singleBuild`: catches exceptions in `cabal ...`

    `throwM`

*   `Stack.Build.Source.getFileDigestMaybe`: catches exceptions in
    `liftM Just . withSourceFile fp $ getDigest`

    `throwM`

*   `Stack.Config.configFromConfigMonoid`:

    ~~~text
    [S-8432] Stack's 'programs' path contains a space character and has no alternative
    short ('8 dot 3') name. This will cause problems with packages that use the
    GNU project's 'configure' shell script. Use the 'local-programs-path'
    configuration option to specify an alternative path. The current path is:
    <path>
    ~~~

*   `Stack.Coverage.generateHpcReport`: catches exceptions from
    `findPackageFieldForBuiltPackage`

    ~~~text
    <exception>
    ~~~

*   `Stack.Coverage.generateHpcReportInternal`:

    ~~~text
    [S-4634] Didn't find .tix for <report> - expected to find it at <path>.
    ~~~

*   `Stack.Coverage.generateHpcReportInternal`:

    ~~~text
    [S-8215] <exception>
    Error occurred while producing <report>"
    ~~~

*   `Stack.Coverage.generateHpcReportInternal`:

    ~~~text
    [S-6829] Error: The <report> did not consider any code. One possible cause of this is
    if your test-suite builds the library code (see Stack issue #1008). It may
    also indicate a bug in Stack or the hpc program. Please report this issue if
    you think your coverage report should have meaningful results.
    ~~~

*   `Stack.Coverage.readTixOrlog`:

    ~~~text
    [S-3521] Error while reading tix: <exeception>
    ~~~

*   `Stack.Coverage.readTixOrlog`:

    ~~~text
    [S-7786] Failed to read tix file <path>
    ~~~

*   `Stack.Coverage.updateTixFile`:

    ~~~text
    [S-2887] Failed to read <file>
    ~~~

*   `Stack.Ghci.buildDepsAndInitialSteps`: catches exeception from
    `buildLocalTargets`

    ~~~text
    <exception>
    ~~~

*   `Stack.GhcPkg.createDatabase`:

    ~~~text
    [S-9735] Unable to create package database at <path>
    ~~~

*   `Stack.Lock.loadYamlThrow`:

    `Data.Yaml.AesonException`

    `throwIO`

*   `Stack.Package.resolveGlobFiles`:

    `Control.Exception.Base.IOException`

    `throwIO`

*   `Stack.Runners.withConfig`:

    ~~~text
    [S-7353] Error when running shouldUpgradeCheck: <exception>
    ~~~

*   `Stack.Script.scriptCmd`:

    Error used because warnings are surpressed.

    ~~~text
    Ignoring override stack.yaml file for script command: <path>
    ~~~

*   `Stack.Script.scriptCmd`:

    Error used because warnings are surpressed.

    ~~~text
    Ignoring SYLGlobalProject for script command
    ~~~

*   `Stack.SDist.getSDistTarball`:

    ~~~text
    [S-8399] Error building custom-setup dependencies: <exception>
    ~~~

*   `Stack.Setup.downloadStackExe`: catches exceptions from `performPathChecking`

    ~~~text
    <exception>
    ~~~

*   `Stack.Upload.uploadBytes`:

    ~~~text
    [S-2804] forbidden upload
    Usually means: you've already uploaded this package/version combination
    Ignoring error and continuing, full message from Hackage below:
    <Hackage_message>
    ~~~

*   `Stack.Upload.uploadBytes`:

    ~~~text
    [S-4444] service unavailable
    This error some times gets sent even though the upload succeeded
    Check on Hackage to see if your package is present
    <Hackage_message>
    ~~~


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


# /doc/maintainers/team_process.md


<div class="hidden-warning"><a href="https://docs.haskellstack.org/"><img src="https://cdn.jsdelivr.net/gh/commercialhaskell/stack/doc/img/hidden-warning.svg"></a></div>

# Stack Maintainer Team Process

## Purpose of this document

This guide is intended to formalize the process by which the `Stack` maintainer
team operates. We expect it'll evolve over time as experience makes clearer
what works best in practice.

Having a well-documented set of processes and responsibilities has been
instrumental in effectively maintaining the `Stackage` project across a
distributed team
([see the `Stackage` curators' guide
](https://github.com/commercialhaskell/stackage/blob/master/CURATORS.md))
and we hope to replicate that success here.

## Goals

The goals of the `Stack` maintainer team are to:

- Ensure that incoming bug reports and feature requests are properly triaged,
  answered, and/or escalated.

- Provide timely review of, and feedback on, incoming pull requests.

- Set up clear channels of communication for users to make support requests.

- Keep Stack up-to-date with its upstream dependencies, including new GHC and
  Cabal releases, and libraries Stack depends on.

- Increase the [bus factor](https://en.wikipedia.org/wiki/Bus_factor) of the
  project, encouraging more people to contribute heavily to the codebase and
  take ownership of it.

- Make it easy to improve the documentation and test coverage of the project.

The sections below detail various activities by the `Stack` team to realize
these goals.

## Issue triage

The maintainer team provides ongoing review and responses to newly-filed GitHub
issues and pull requests. From experience, we find it's easiest to have a
single person "on call" at any given time. Therefore, the team rotates shifts
on a weekly basis. The "on call" triager is responsible for:

- Reviewing incoming issues and pull requests on GitHub.

- Answering questions he/she is able to.

- Merging PRs he/she feels comfortable reviewing.

- Closing out irrelevant/misplaced issues.

- Pulling in another maintainer to assist if necessary.

The goal of the triager role is to facilitate continual, smooth progress of
`Stack`'s development and to provide triagers an opportunity to become more
familiar with how the project runs.

This is one path to getting a lot of experience with the codebase, plus great
interaction with the rest of the maintainer team, without necessarily taking on
major coding tasks.

## Time commitment

Someone considering joining the issue triager team may be wondering:

> "How large of a time investment is necessary?"

That’s a great question for anyone considering taking on this role. It’s
frankly somewhat uncertain right now since we’re only getting started, but we
can venture a reasonable guess:

We currently average about one new issue per day. Assuming that each issue
entails roughly ten-to-fifteen minutes of total interaction on the part of the
triager (before passing it off to someone else, answering a support question,
etc) that amounts to about one or two hours spent per week being on-call.

Again, these estimates will evolve over time as we settle into an optimal
process, but for now we anticipate growing the team to about eight members
(which is the size of the `Stackage` team as well), each of whom is likely to
spend about two hours in total on upkeep work every eight weeks.

## Issue and pull request interaction guidelines

These guidelines apply to all members of the maintainer team.

- Be courteous.

- Avoid leaving issues and PRs in an ambiguous state. By default, when you
  respond to an issue/PR, you’re taking responsibility for shepherding it to
  completion. Be explicit if you’re passing it to someone else, or asking the
  submitter for more info/updates/etc.

- Use labels, assignees, and milestones wherever possible.

- If you know you’ll be unable to answer for a significant period of time, say
  so. Even better: ask someone else to take over from you.

## Assessing feature requests and enhancement PRs

**NB: this section is very likely to evolve over time as well.**

A frequent source of new GitHub issues is users who would like to propose some
enhancement and/or change to how `Stack` currently operates.

Some of these are both small and obviously beneficial, in which case the
triager should feel empowered to "green light" the idea if it makes sense to do
so.

If the proposal is already in the form of an actionable PR the triager may
review and merge at their discretion.

Oftentimes though, the request is larger and more far-reaching in nature.

Perhaps the requester is unaware of the extent to which his or her change would
impact other people's workflows or related components in the code. Conversely,
they may have a deep understanding of its implications and feel strongly that
it would be a valuable improvement, whereas it's not so clear to the triager.

Discerning which requests should be considered "small" and which warrant
broader collaboration is admittedly an inexact science. Use your best judgment
and don't sweat the occasional mistake if you approve something you thought was
small but ultimately wasn't.

In the case of medium-to-large sized feature requests, it's best to solicit
feedback from at least one or two of the core `Stack` developers. You may use
GitHub @mentions to draw the relevant contributors' attention to the issue in
question. If you're not sure who's best to consult you should ask on
`#stack-collaborators`.

Try to be clear to the requester that you're opening the discussion up to more
participants and that the proposal will require thoughtful consideration
(probably a majority vote) before any decision is made.

Also remember that busy schedules, lack of complete familiarity with a given
subject, strong-yet-opposing opinions held by equally rational people, and many
other factors often collude to halt forward progress in arriving at firm
conclusions in such situations... If at all possible, try to keep things
on-track and concrete.

*Regardless of feature size, bear in mind that sometimes the best answer is a
respectful "no".*

*If feasible, propose alternative solutions or educate the user in preference to
complicating `Stack` or accepting scope-creep.*

With respect to assessing a PR's code, @snoyberg has outlined some
[tips for successfully getting one's work merged
](https://www.snoyman.com/blog/2017/06/how-to-send-me-a-pull-request)
into his projects which may be helpful to `Stack` triagers when performing
reviews, as well.

## Real-time communications

At present, the maintainer team mostly communicates via a rather quiet channel
called [`#stack-collaborators`](../CONTRIBUTING/#slack-channel) in the
Haskell Foundation's Slack workspace, although we may migrate to some other
platform in the future.

## Dealing with support issues

We encourage users to submit support requests via GitHub issues and try to
consolidate our efforts in addressing questions there. Other platforms, such as
Reddit, StackOverflow, et al, may be helpful as well but the `Stack`
maintainers team makes no guarantees about regularly checking them.

*We may decide to offload support questions elsewhere in the future, but for
now the most important thing is to direct users to a single destination.*

## Issue vs pull request

Sometimes it is ambiguous whether something should be opened as an issue to
discuss a change, versus a pull request including the change. A guiding
principle here is: if it will take longer to open an issue than a PR, open the
PR. As an extreme example: if you have a small documentation typo correction,
open a PR, it will _definitely_ take less time than opening an issue and
describing the change you'd like to make. This logic can sometimes apply to
minor code changes. Use your best judgement.

## Issue closing policy

We need to strike a balance in issue handling between keeping a maintainable
set of issues&mdash;thereby making the lives of maintainers, contributors, and
users easier&mdash;and allowing legitimate issues to remain open. The end goal
of this is: any open issue indicates "this deserves attention in the near
future." Before this policy existed, issues actually meant "maybe someone will
deal with this someday."

The policy for closing an issue depends entirely on the type of issue we're
looking at.

When closing an issue, please provide a brief explanation for why the issue was
closed, such as a reference to a PR, a comment about lack of clarification,
etc.

!!! note

    The following sections establish rules under which a bug report will be
    closed by the maintainer team. The goal is to avoid a situation where issues
    linger in an indeterminate state. The maintainer team is allowed to
    disregard these "rules" at any point. In other words: the goal isn't to
    allow people to "lawyer" issues.

### Discussion

Some issues are for discussing the project. These issues should start with a
clear question, have an owner, and be closed when either:

* The original question has been answered
* There is no clear question or owner
* No progress has been made in 30 days

Discussions are typically opened by maintainers and contributors.

### Support

Support questions are requests for assistance in using Stack. They must have a
clear set of steps followed by the user and a desired outcome. Support requests
sometimes overlap with bug reports, handled next. Support requests are closed
when:

* The user decides their question is answered
* No clarification to questions from the Stack team is given for 30 days
* The question is determined out of scope by the Stack team

### Bug report

A bug report describes a misbehavior in Stack itself. There are some cases
where an issue may appear somewhere between a support request and a bug report.
The Stack team will determine which category an issue falls into. Bug reports
must include clear reproduction steps, an expected outcome, and an actual
outcome. Bug reports are closed when:

* The bug is fixed on the `master` or `stable` branch (NOTE: we do not wait for
  fixes to be released before closing issues)
* The Stack team is unable to reproduce the issue
* No clarification to questions from the Stack team is given for 30 days
* The bug is determined to be out of scope by the Stack team, such as being an
  upstream issue

### Feature request

Feature requests are usually clear, but sometimes have overlap with one of the
above topics. Determination of an issue being a feature request will be made by
the Stack team. Features are closed when:

* The feature is implemented on the `master` or `stable` branch
* The Stack team decides that the feature is not desired in the project
* If no one offers to implement the feature for 30 days

Note that, to account for the last bullet, we have a
[Wishlist](https://github.com/commercialhaskell/stack/wiki/Wishlist) wiki page. We
recommend closing issues with a message such as the following:

> Closing due to lack of implementation progress in the past 30 days. We
> attempt to keep the Stack issue tracker focused on active work items. If you
> are still interested in this feature and would like to see it implemented in
> the future, please add it to the
> [Wishlist](https://github.com/commercialhaskell/stack/wiki/Wishlist) Wiki page.
