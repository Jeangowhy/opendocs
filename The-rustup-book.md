# User Guide
<a id=SUMMARY></a>

- [Introduction](#user_guide_index)
- [Installation](#installation_index)
    - [Windows](#installation_windows)
        - [MSVC prerequisites](#installation_windows_msvc)
    - [Other installation methods](#installation_other)
    - [Already installed Rust?](#installation_already_installed_rust)
- [Concepts](#concepts_index)
    - [Channels](#concepts_channels)
    - [Toolchains](#concepts_toolchains)
    - [Components](#concepts_components)
    - [Profiles](#concepts_profiles)
    - [Proxies](#concepts_proxies)
- [Basic usage](#basics)
- [Overrides](#overrides)
- [Cross-compilation](#cross_compilation)
- [Environment variables](#environment_variables)
- [Configuration](#configuration)
- [Network proxies](#network_proxies)
- [Examples](#examples)
- [Security](#security)
- [FAQ](#faq)

# Development Guide

- [Readme](#dev_guide_README)
- [Introduction](#dev_guide_index)
    - [Linting](#linting)
- [Coding standards](#coding_standards)
- [Version numbers](#version_numbers)
- [Release process](#release_process)
- [Tips and tricks](#tips_and_tricks)
- [Tracing](#tracing)


<a id=dev_guide_README></a>

# rustup documentation

This directory contains rustup's developer / contributing documentation.

## Building the book

Building the book requires [mdBook](https://github.com/rust-lang/mdBook). To get it:

```sh
$ cargo install mdbook
```

To build the book:

```sh
$ mdbook build
```

`mdbook` provides a variety of different commands and options to help you work
on the book:

* `mdbook build --open`: Build the book and open it in a web browser.
* `mdbook serve`: Launches a web server on localhost. It also automatically
  rebuilds the book whenever any file changes and automatically reloads your
  web browser.

The book contents are driven by the [`SUMMARY.md`](#SUMMARY) file, and
every file must be linked there.

[The rustup Book Online](https://rust-lang.github.io/rustup/)
[(sources)](https://github.com/rust-lang/rustup/tree/master/doc/user-guide)


<a id=user_guide_index></a>

# Introduction

*rustup* installs [The Rust Programming Language][rustlang] from the official
release channels, enabling you to easily switch between stable, beta, and
nightly compilers and keep them updated. It makes cross-compiling simpler with
binary builds of the standard library for common platforms. And it runs on all
platforms Rust supports.

Check out the [Concepts] chapter for an overview of how rustup works and some
of the terminology it uses. The [Installation] chapter covers installing
rustup and getting started.

The source code of rustup and this manual may be found at
<https://github.com/rust-lang/rustup>. If you find a problem, check out the
[issue tracker].

Release notes for rustup may be found in the [CHANGELOG].

[CHANGELOG]: https://github.com/rust-lang/rustup/blob/master/CHANGELOG.md
[concepts]: #concepts_index
[installation]: #installation_index
[issue tracker]: https://github.com/rust-lang/rustup/issues
[rustlang]: https://www.rust-lang.org


<a id=installation_index></a>

# Installation

Follow the instructions at <https://www.rust-lang.org/tools/install>. If that
doesn't work for you there are [other installation methods].

`rustup` installs `rustc`, `cargo`, `rustup` and other standard tools to
Cargo's `bin` directory. On Unix it is located at `$HOME/.cargo/bin` and on
Windows at `%USERPROFILE%\.cargo\bin`. This is the same directory that `cargo
install` will install Rust programs and Cargo plugins.

This directory will be in your `$PATH` environment variable, which means you
can run them from the shell without further configuration. Open a *new* shell
and type the following:

```sh
rustc --version
```

If you see something like `rustc 1.19.0 (0ade33941 2017-07-17)` then you are
ready to Rust. If you decide Rust isn't your thing, you can completely remove
it from your system by running `rustup self uninstall`.

[other installation methods]: #other

## Choosing where to install

`rustup` allows you to customise your installation by setting the environment
variables `CARGO_HOME` and `RUSTUP_HOME` before running the `rustup-init`
executable. As mentioned in the [Environment Variables] section, `RUSTUP_HOME`
sets the root `rustup` folder, which is used for storing installed toolchains
and configuration options. `CARGO_HOME` contains cache files used by [cargo].

Note that you will need to ensure these environment variables are always set
and that `CARGO_HOME/bin` is in the `$PATH` environment variable when using
the toolchain.

[Environment Variables]: #environment_variables
[cargo]: https://doc.rust-lang.org/cargo/

## Installing nightly

If you specify the [nightly channel] when installing `rustup`, the
`rustup-init` script will do a "forced" installation by default. A "forced"
installation means it will install the nightly channel regardless of whether
it might be missing [components] that you want. If you want to install rustup
with the nightly channel, and ensure it has the components that you want, you
will need to do this in two phases. For example, if you want to make a fresh
installation of `rustup` and then install `nightly` along with `clippy` or
`miri`, first install `rustup` without a toolchain:

```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- --default-toolchain none -y
```

Next you can install `nightly` allowing `rustup` to downgrade until it finds
the components you need:

```sh
rustup toolchain install nightly --allow-downgrade --profile minimal --component clippy
```

This can be used to great effect in CI, to get you a toolchain rapidly which
meets your criteria.

[nightly channel]: #concepts_channels
[components]: #concepts_components

## Enable tab completion for Bash, Fish, Zsh, or PowerShell

`rustup` now supports generating completion scripts for Bash, Fish, Zsh, and
PowerShell. See `rustup help completions` for full details, but the gist is as
simple as using one of the following:

```sh
# Bash
$ rustup completions bash > ~/.local/share/bash-completion/completions/rustup

# Bash (macOS/Homebrew)
$ rustup completions bash > $(brew --prefix)/etc/bash_completion.d/rustup.bash-completion

# Fish
$ mkdir -p ~/.config/fish/completions
$ rustup completions fish > ~/.config/fish/completions/rustup.fish

# Zsh
$ rustup completions zsh > ~/.zfunc/_rustup

# PowerShell v5.0+
$ rustup completions powershell >> $PROFILE.CurrentUserCurrentHost
# or
$ rustup completions powershell | Out-String | Invoke-Expression
```

**Note**: you may need to restart your shell in order for the changes to take
effect.

For `zsh`, you must then add the following line in your `~/.zshrc` before
`compinit`:

```zsh
fpath+=~/.zfunc
```


<a id=installation_windows></a>

# Windows

`rustup` works the same on Windows as it does on Unix, but there are some
special considerations for Rust developers on Windows. As [mentioned on the
Rust download page][msvc-toolchain], there are two [ABIs] in use on Windows:
the native (MSVC) ABI used by [Visual Studio], and the GNU ABI used by the
[GCC toolchain]. Which version of Rust you need depends largely on what C/C++
libraries you want to interoperate with: for interop with software produced by
Visual Studio use the MSVC build of Rust; for interop with GNU software built
using the [MinGW/MSYS2 toolchain][MSYS2] use the GNU build.

When targeting the MSVC ABI, Rust additionally requires an [installation of
Visual Studio][msvc install] so `rustc` can use its linker and libraries.

When targeting the GNU ABI, no additional software is strictly required for basic use.
However, many library crates will not be able to compile until the full [MSYS2] with MinGW has been installed.

By default `rustup` on Windows configures Rust to target the MSVC ABI, that is
a target triple of either `i686-pc-windows-msvc`, `x86_64-pc-windows-msvc`, or `aarch64-pc-windows-msvc`
depending on the CPU architecture of the host Windows OS. The toolchains that
`rustup` chooses to install, unless told otherwise through the [toolchain
specification], will be compiled to run on that target triple host and will
target that triple by default.

You can change this behavior with `rustup set default-host` or during
installation.

For example, to explicitly select the 32-bit MSVC host:

```sh
$ rustup set default-host i686-pc-windows-msvc
```

Or to choose the 64 bit GNU toolchain:

```sh
$ rustup set default-host x86_64-pc-windows-gnu
```

Since the MSVC ABI provides the best interoperation with other Windows
software it is recommended for most purposes. The GNU toolchain is always
available, even if you don't use it by default. Just install it with `rustup
toolchain install`:

```sh
$ rustup toolchain install stable-gnu
```

You don't need to switch toolchains to support all windows targets though; a
single toolchain supports all four x86 windows targets:

```sh
$ rustup target add x86_64-pc-windows-msvc
$ rustup target add x86_64-pc-windows-gnu
$ rustup target add i686-pc-windows-msvc
$ rustup target add i686-pc-windows-gnu
```

See the [Cross-compilation] chapter for more details on specifying different
targets with the same compiler.

[ABIs]: https://en.wikipedia.org/wiki/Application_binary_interface
[cross-compilation]: #cross_compilation
[Visual Studio]: https://visualstudio.microsoft.com/
[GCC toolchain]: https://gcc.gnu.org/
[MSYS2]: https://www.msys2.org/
[msvc-toolchain]: https://www.rust-lang.org/tools/install?platform_override=win
[toolchain specification]: #toolchain-specification
[msvc install]: #windows_msvc


<a id=installation_windows_msvc></a>

# MSVC prerequisites

To compile programs into an exe file, Rust requires a linker, libraries and Windows API import libraries.
For `msvc` targets these can be acquired through Visual Studio.

## Automatic install

If you don't have Visual Studio already installed then [rustup-init] will offer to automatically install the prerequisites.
Doing so means you can skip the rest of this page.
However, it installs Visual Studio Community edition which may not be appropriate for all users.
It is free for individuals, academic and open source use, but not for other uses, such as in proprietary enterprise software.
Users should ask their organisation which edition is right for them.
See [licensing terms][vs licences] for more details.

## Manual install

[Download Visual Studio][vs downloads].
Rust supports Visual Studio 2017 and later but it is recommended that you use the latest version (currently 2022) for new projects.
You can opt to download only the Build Tools for Visual Studio, which does not include the IDE.
However this requires you already have a license to the Community, Professional or Enterprise edition.

Once you've downloaded and started the installer, the easiest way to get everything installed is to select "Desktop Development with C++".
This will include the necessary components.
On the "Language Packs" tab, make sure the English language pack is installed in addition to your preferred language.

If you want more details on the installation process or want to further customize the install then follow the walkthrough below.
Otherwise complete the Visual Studio install and continue with installing Rust.

## Walkthrough: Installing Visual Studio 2022

This walkthrough uses the Community edition of Visual Studio but the Professional, Enterprise and the Build Tools all work the same way.

The installer will start by linking to the [license][vs licences] and for your edition of Visual Studio and then preparing the installer.

![Accept the license](https://rust-lang.github.io/rustup/installation/images/step1.png)
![Installing the installer](https://rust-lang.github.io/rustup/installation/images/step2.png)

Once this finishes, you can then select the components to be installed.
Here we use the "Workload" tab to select the "Desktop Development with C++" workload.
This will includes all needed components for Rust:
![Select the C++ Workload](https://rust-lang.github.io/rustup/installation/images/step3.png)

### Installing only the required components (optional)

If you'd like a more minimal install (and won't be doing C++ development) then you can use the "Individual Components" tab to select just the essentials, which are:

* MSVC v143 - VS 2022 C++ x64/x86 build tools (Latest)
* Windows 11 SDK (10.0.22621.0)

Note that the specific version of the Windows SDK doesn't matter for pure Rust code but if using C++ as well you'll likely want either the latest or whichever version is required by the C++ project (or both).

![Select the latest MSVC component](https://rust-lang.github.io/rustup/installation/images/component-msvc.png)
![Select the Windows 11 SDK component](https://rust-lang.github.io/rustup/installation/images/component-sdk.png)

### Adding Language Packs (optional)

After choosing the components, you may also want to select the language packs to install.
Switch to the "Language Packs" tab and add the languages.
It is recommended that you add the English language pack in addition to your preferred language.
This will provide English language error messages, which may help when reporting errors.

![Add the English language](https://rust-lang.github.io/rustup/installation/images/step4.png)

### Completing the install

Finally click the install button and wait for everything to be installed.

![Wait for the install to complete](https://rust-lang.github.io/rustup/installation/images/step5.png)

Once finished, you can continue on to installing Rust.

[rustup-init]: https://rustup.rs
[vs downloads]: https://visualstudio.microsoft.com/downloads/
[vs licences]: https://visualstudio.microsoft.com/license-terms/


<a id=installation_other></a>

# Other installation methods

The primary installation method, as described at <https://rustup.rs>, differs
by platform:

* On Windows, download and run the `rustup-init.exe` built for the
  [`x86_64-pc-windows-msvc`] or [`aarch64-pc-windows-msvc`] target,
  depending on your OS architecture. In general, this is the build of
  `rustup` one should install on Windows. This will require the Visual C++
  Build Tools 2019 or equivalent (Visual Studio 2019, etc.) to already be
  installed. If you would prefer to install GNU toolchains or the i686
  toolchains by default this can be modified at install time, either
  interactively, with the `--default-host` flag, or after installation
  via `rustup set default-host`.
* On Unix, run `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh` in your shell. This
  downloads and runs [`rustup-init.sh`], which in turn downloads and runs the
  correct version of the `rustup-init` executable for your platform.

[`x86_64-pc-windows-msvc`]: https://static.rust-lang.org/rustup/dist/x86_64-pc-windows-msvc/rustup-init.exe
[`aarch64-pc-windows-msvc`]: https://static.rust-lang.org/rustup/dist/aarch64-pc-windows-msvc/rustup-init.exe
[`rustup-init.sh`]: https://static.rust-lang.org/rustup/rustup-init.sh

`rustup-init` accepts arguments, which can be passed through the shell script.
Some examples:

```sh
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- --help
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- --no-modify-path
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- --default-toolchain nightly
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- --default-toolchain none
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- --profile minimal --default-toolchain nightly
```


## Using a package manager

> Please note that the rustup project is not maintaining any package mentioned in this section.
> If you have encountered any problems installing `rustup` with a package manager,
> please contact the package maintainer(s) for further information.

### General tips

Different package managers take slightly different approaches towards managing rustup.
After installing rustup with your favorite package manager, there are usually two possibilities:

- If your package manager has made the `rustup` command available
  together with proxies for Rust tools such as `rustc` and `cargo`,
  picking a default toolchain (e.g. `stable`) would usually be enough:

  ```sh
  $ rustup default stable
  ```

  > As of 2024/12/23, this is the case for
  > [APT](https://packages.debian.org/search?searchon=names&keywords=rustup),
  > [homebrew](https://formulae.brew.sh/formula/rustup)
  > and [pacman](https://wiki.archlinux.org/title/Rust#Arch_Linux_package).

- If your package manager has only made the `rustup-init` command available, simply run:

  ```sh
  $ rustup-init
  ```

  This will allow you to perform the initial setup of `rustup`, populate all the proxies
  managed by rustup, and install a default toolchain.

  > As of 2024/12/23, this is the case for
  > [DNF](https://developer.fedoraproject.org/tech/languages/rust/further-reading.html).

When the installation is completed, please make sure that the rustup proxies
(usually under `$HOME/.cargo/bin`) are [correctly exposed] via your `$PATH`,
and you should be able to run `rustup`, `rustc`, `cargo`, etc. normally.

[correctly exposed]: #ensure-the-correct_path

### APT

Starting from Debian 13 (trixie) and Ubuntu 24.04 (noble),
you may use `apt` to install `rustup`:

```sh
$ sudo apt install rustup
```

### Homebrew

You can use `brew` to install `rustup`[^not-rust]:

```sh
$ brew install rustup
```

Please note that Rust tools like `rustc` and `cargo` are not available via `$PATH` by default
in this `rustup` distribution
(see [homebrew-core#177582](https://github.com/Homebrew/homebrew-core/pull/177582) for more details).
You might want to add `$(brew --prefix rustup)/bin` to `$PATH` to make them easier to access.

[^not-rust]: This is not to be confused with the `rust` package,
which is a `brew`-managed `rust` toolchain installation.

## Manual installation

You can manually download `rustup-init` for a given target from
`https://static.rust-lang.org/rustup/dist/{target-triple}/rustup-init[.exe]`[^msys2] [^msvc].

<details>
<summary>Direct links</summary>

- [aarch64-apple-darwin](https://static.rust-lang.org/rustup/dist/aarch64-apple-darwin/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/aarch64-apple-darwin/rustup-init.sha256)
- [aarch64-linux-android](https://static.rust-lang.org/rustup/dist/aarch64-linux-android/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/aarch64-linux-android/rustup-init.sha256)
- [aarch64-pc-windows-msvc](https://static.rust-lang.org/rustup/dist/aarch64-pc-windows-msvc/rustup-init.exe)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/aarch64-pc-windows-msvc/rustup-init.exe.sha256)
- [aarch64-unknown-linux-gnu](https://static.rust-lang.org/rustup/dist/aarch64-unknown-linux-gnu/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/aarch64-unknown-linux-gnu/rustup-init.sha256)
- [aarch64-unknown-linux-musl](https://static.rust-lang.org/rustup/dist/aarch64-unknown-linux-musl/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/aarch64-unknown-linux-musl/rustup-init.sha256)
- [arm-linux-androideabi](https://static.rust-lang.org/rustup/dist/arm-linux-androideabi/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/arm-linux-androideabi/rustup-init.sha256)
- [arm-unknown-linux-gnueabi](https://static.rust-lang.org/rustup/dist/arm-unknown-linux-gnueabi/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/arm-unknown-linux-gnueabi/rustup-init.sha256)
- [arm-unknown-linux-gnueabihf](https://static.rust-lang.org/rustup/dist/arm-unknown-linux-gnueabihf/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/arm-unknown-linux-gnueabihf/rustup-init.sha256)
- [armv7-linux-androideabi](https://static.rust-lang.org/rustup/dist/armv7-linux-androideabi/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/armv7-linux-androideabi/rustup-init.sha256)
- [armv7-unknown-linux-gnueabihf](https://static.rust-lang.org/rustup/dist/armv7-unknown-linux-gnueabihf/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/armv7-unknown-linux-gnueabihf/rustup-init.sha256)
- [i686-apple-darwin](https://static.rust-lang.org/rustup/dist/i686-apple-darwin/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/i686-apple-darwin/rustup-init.sha256)
- [i686-linux-android](https://static.rust-lang.org/rustup/dist/i686-linux-android/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/i686-linux-android/rustup-init.sha256)
- [i686-pc-windows-gnu](https://static.rust-lang.org/rustup/dist/i686-pc-windows-gnu/rustup-init.exe)[^msys2]
  - [sha256 file](https://static.rust-lang.org/rustup/dist/i686-pc-windows-gnu/rustup-init.exe.sha256)
- [i686-pc-windows-msvc](https://static.rust-lang.org/rustup/dist/i686-pc-windows-msvc/rustup-init.exe)[^msvc]
  - [sha256 file](https://static.rust-lang.org/rustup/dist/i686-pc-windows-msvc/rustup-init.exe.sha256)
- [i686-unknown-linux-gnu](https://static.rust-lang.org/rustup/dist/i686-unknown-linux-gnu/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/i686-unknown-linux-gnu/rustup-init.sha256)
- [loongarch64-unknown-linux-gnu](https://static.rust-lang.org/rustup/dist/loongarch64-unknown-linux-gnu/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/loongarch64-unknown-linux-gnu/rustup-init.sha256)
- [loongarch64-unknown-linux-musl](https://static.rust-lang.org/rustup/dist/loongarch64-unknown-linux-musl/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/loongarch64-unknown-linux-musl/rustup-init.sha256)
- [mips-unknown-linux-gnu](https://static.rust-lang.org/rustup/dist/mips-unknown-linux-gnu/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/mips-unknown-linux-gnu/rustup-init.sha256)
- [mips64-unknown-linux-gnuabi64](https://static.rust-lang.org/rustup/dist/mips64-unknown-linux-gnuabi64/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/mips64-unknown-linux-gnuabi64/rustup-init.sha256)
- [mips64el-unknown-linux-gnuabi64](https://static.rust-lang.org/rustup/dist/mips64el-unknown-linux-gnuabi64/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/mips64el-unknown-linux-gnuabi64/rustup-init.sha256)
- [mipsel-unknown-linux-gnu](https://static.rust-lang.org/rustup/dist/mipsel-unknown-linux-gnu/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/mipsel-unknown-linux-gnu/rustup-init.sha256)
- [powerpc-unknown-linux-gnu](https://static.rust-lang.org/rustup/dist/powerpc-unknown-linux-gnu/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/powerpc-unknown-linux-gnu/rustup-init.sha256)
- [powerpc64-unknown-linux-gnu](https://static.rust-lang.org/rustup/dist/powerpc64-unknown-linux-gnu/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/powerpc64-unknown-linux-gnu/rustup-init.sha256)
- [powerpc64le-unknown-linux-gnu](https://static.rust-lang.org/rustup/dist/powerpc64le-unknown-linux-gnu/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/powerpc64le-unknown-linux-gnu/rustup-init.sha256)
- [powerpc64le-unknown-linux-musl](https://static.rust-lang.org/rustup/dist/powerpc64le-unknown-linux-musl/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/powerpc64le-unknown-linux-musl/rustup-init.sha256)
- [s390x-unknown-linux-gnu](https://static.rust-lang.org/rustup/dist/s390x-unknown-linux-gnu/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/s390x-unknown-linux-gnu/rustup-init.sha256)
- [sparcv9-sun-solaris](https://static.rust-lang.org/rustup/dist/sparcv9-sun-solaris/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/sparcv9-sun-solaris/rustup-init.sha256)
- [x86_64-apple-darwin](https://static.rust-lang.org/rustup/dist/x86_64-apple-darwin/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/x86_64-apple-darwin/rustup-init.sha256)
- [x86_64-linux-android](https://static.rust-lang.org/rustup/dist/x86_64-linux-android/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/x86_64-linux-android/rustup-init.sha256)
- [x86_64-pc-solaris](https://static.rust-lang.org/rustup/dist/x86_64-pc-solaris/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/x86_64-pc-solaris/rustup-init.sha256)
- [x86_64-pc-windows-gnu](https://static.rust-lang.org/rustup/dist/x86_64-pc-windows-gnu/rustup-init.exe)[^msys2]
  - [sha256 file](https://static.rust-lang.org/rustup/dist/x86_64-pc-windows-gnu/rustup-init.exe.sha256)
- [x86_64-pc-windows-msvc](https://static.rust-lang.org/rustup/dist/x86_64-pc-windows-msvc/rustup-init.exe)[^msvc]
  - [sha256 file](https://static.rust-lang.org/rustup/dist/x86_64-pc-windows-msvc/rustup-init.exe.sha256)
- [x86_64-unknown-freebsd](https://static.rust-lang.org/rustup/dist/x86_64-unknown-freebsd/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/x86_64-unknown-freebsd/rustup-init.sha256)
- [x86_64-unknown-illumos](https://static.rust-lang.org/rustup/dist/x86_64-unknown-illumos/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/x86_64-unknown-illumos/rustup-init.sha256)
- [x86_64-unknown-linux-gnu](https://static.rust-lang.org/rustup/dist/x86_64-unknown-linux-gnu/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/x86_64-unknown-linux-gnu/rustup-init.sha256)
- [x86_64-unknown-linux-musl](https://static.rust-lang.org/rustup/dist/x86_64-unknown-linux-musl/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/x86_64-unknown-linux-musl/rustup-init.sha256)
- [x86_64-unknown-netbsd](https://static.rust-lang.org/rustup/dist/x86_64-unknown-netbsd/rustup-init)
  - [sha256 file](https://static.rust-lang.org/rustup/dist/x86_64-unknown-netbsd/rustup-init.sha256)

</details>

To get a previous version, use
`https://static.rust-lang.org/rustup/archive/{rustup-version}/{target-triple}/rustup-init[.exe]`.

SHA-256 checksums are also available by appending `.sha256` to the link.

[^msys2]: Windows GNU builds require no additional software for basic use.
    However, many library crates will not be able to compile until
    the full [MSYS2] with MinGW has been installed.

[MSYS2]: https://www.msys2.org/

[^msvc]: MSVC builds of `rustup` additionally require an [installation of
    Visual Studio 2019 or the Visual C++ Build Tools 2019][vs]. For Visual
    Studio, make sure to check the "C++ tools" and "Windows 10 SDK" option.

[vs]: https://visualstudio.microsoft.com/downloads/

## Self-compiled installation

To install `rustup` from source, check out the git repository from
<https://github.com/rust-lang/rustup> and run `cargo run --release`. Note that
after installation the `rustup` toolchains will supersede any pre-existing
toolchains by prepending `~/.cargo/bin` to the `PATH` environment variable.


<a id=installation_already_installed_rust></a>

# Already installed Rust?

Other package managers also ship Rust, and you may wish to use the packaged
toolchain, such as for distribution package development. You may also wish to
use a `rustup`-managed toolchain such as nightly or beta. Normally, `rustup`
will complain that you already have Rust installed in `/usr` and refuse to
install. However, you can install Rust via `rustup` and have it coexist with
your packaged Rust toolchain.

## Set up rustup with an existing Rust toolchain

When you initially install Rust with `rustup`, pass the `-y` option to make it
ignore the packaged Rust toolchain and install a `rustup`-managed toolchain
into `~/.cargo/bin`. Add that directory to your `$PATH` (or let `rustup` do it
for you by not passing `--no-modify-path`). Then, to tell `rustup` about your
system toolchain, run:

```sh
rustup toolchain link system /usr
```

You can then use "system" as a `rustup` toolchain, just like "nightly".
For example, using the [toolchain override shorthand], you can run `cargo +system build`
to build with the system toolchain, or `cargo +nightly build` to build with nightly.

If you wish to develop with the system toolchain (e.g. for distribution packages),
you may want to make it your [default toolchain]:

```sh
rustup default system
```

<a id=ensure-the-correct_path></a>

## Ensure the correct `$PATH` configuration

There are times when the above steps don't work, and you may see strange error
messages when running commands that should have been proxied by rustup.
For example, when running `cargo +stable --version`, you may encounter the
following error:

```text
error: no such command: `+stable`

        Cargo does not handle `+toolchain` directives.
        Did you mean to invoke `cargo` through `rustup` instead?
```

This means `cargo` is currently not a `rustup` proxy, and your `$PATH` needs
to be fixed.

In fact, on any machine with rustup installed, you would like to have **rustup
proxies showing up first in `$PATH`**, shadowing any other Rust installations.
Don't worry: these shadowed installations can then be adopted by rustup with the
`rustup toolchain link` command as mentioned above.

The exact steps to be taken to make rustup proxies come first may vary according
to your system environment, but usually it is about changing the evaluation
order of certain lines in your shell configuration file(s).

To make it clearer, let's look at the example of a Mac with both regular rustup
fetched from [rustup.rs] and homebrew-installed `rust`.
The **right way** to configure `.profile` in this environment would be:

```bash
eval $(/opt/homebrew/bin/brew shellenv)
. $HOME/.cargo/env
```

In this example, both of these lines _prepend_ to `$PATH`, so the last one
takes over, letting the rustup proxies shadow the homebrew-installed `rust`.
On the other hand, putting these lines the other way around will cause the
aforementioned error.

When in doubt, you can always debug your shell configuration by printing the
status of your current `$PATH` with `echo $PATH | xargs -n1` and paying
attention to the order of `$CARGO_HOME/bin` (which defaults to
`$HOME/.cargo/bin`) compared to your package manager's `bin` directory.

After the fix, the output of `cargo +stable --version` should be similar to one
of the following, depending on whether you have had the `stable` toolchain
installed:

- ```text
  cargo 1.85.1 (d73d2caf9 2024-12-31)
  ```

- ```text
  error: toolchain 'stable' is not installed
  ```

[rustup.rs]: https://rustup.rs
[toolchain override shorthand]: #toolchain-override-shorthand
[default toolchain]: #default-toolchain


<a id=concepts_index></a>

# Concepts

## How rustup works

`rustup` is a *toolchain multiplexer*. It installs and manages many Rust
toolchains and presents them all through a single set of tools installed to
`~/.cargo/bin`. The [`rustc`] and [`cargo`] executables installed in
`~/.cargo/bin` are *[proxies]* that delegate to the real toolchain. `rustup`
then provides mechanisms to easily change the active toolchain by
reconfiguring the behavior of the proxies.

So when `rustup` is first installed, running `rustc` will run the proxy in
`$HOME/.cargo/bin/rustc`, which in turn will run the stable compiler. If you
later *change the default toolchain* to nightly with `rustup default nightly`,
then that same proxy will run the `nightly` compiler instead.

This is similar to Ruby's [rbenv], Python's [pyenv], or Node's [nvm].

[rbenv]: https://github.com/rbenv/rbenv
[pyenv]: https://github.com/yyuu/pyenv
[nvm]: https://github.com/creationix/nvm
[`rustc`]: https://doc.rust-lang.org/rustc/
[`cargo`]: https://doc.rust-lang.org/cargo/
[proxies]: #proxies

## Terminology

* **channel** --- Rust is released to three different "channels": stable, beta,
  and nightly. See the [Channels] chapter for more details.

* **toolchain** --- A "toolchain" is a complete installation of the Rust
  compiler (`rustc`) and related tools (like `cargo`). A [toolchain
  specification] includes the release channel or version, and the host
  platform that the toolchain runs on.

* **target** --- `rustc` is capable of generating code for many platforms. The
  "target" specifies the platform that the code will be generated for. By
  default, `cargo` and `rustc` use the host toolchain's platform as the
  target. To build for a different target, usually the target's standard
  library needs to be installed first via the `rustup target` command. See the
  [Cross-compilation] chapter for more details.

* **component** --- Each release of Rust includes several "components", some of
  which are required (like `rustc`) and some that are optional (like
  [`clippy`]). See the [Components] chapter for more detail.

* **profile** --- In order to make it easier to work with components, a
  "profile" defines a grouping of components. See the [Profiles] chapter for
  more details.

* **proxy** ---  A wrapper for a common Rust component (like `rustc`), built to forward
  CLI invocations to the active Rust toolchain. See the [Proxies] chapter for more details.

[`clippy`]: https://github.com/rust-lang/rust-clippy
[components]: #components
[cross-compilation]: #cross_compilation
[profiles]: #profiles
[toolchain specification]: #toolchains
[channels]: #channels
[proxies]: #proxies


<a id=concepts_channels></a>

# Channels

Rust is released to three different "channels": stable, beta, and nightly. The
stable releases are made every 6 weeks (with occasional point releases). Beta
releases are the version that will appear in the next stable release. Nightly
releases are made every night. See [The Rust Book][channels] for more details
on Rust's train release model. The release schedule is posted to the [Rust
Forge]. `rustup` assists with installing different channels, keeping them
up-to-date, and easily switching between them.

After a release channel has been installed, `rustup` can be used to update the
installed version to the latest release on that channel. See the [Keeping rust
up to date] section for more information.

`rustup` can also install specific versions of Rust, such as `1.45.2` or
`nightly-2020-07-27`. See the [Toolchains] chapter for more information on
installing different channels and releases. See the [Overrides] chapter for
details on switching between toolchains and pinning your project to a specific
toolchain.

[channels]: https://doc.rust-lang.org/book/appendix-07-nightly-rust.html
[Keeping rust up to date]: #keeping-rust-up-to-date
[rust forge]: https://forge.rust-lang.org/
[toolchains]: #toolchains

## Working with nightly Rust

`rustup` gives you easy access to the nightly compiler and its [experimental
features]. To add it just run `rustup toolchain install nightly`:

[experimental features]: https://doc.rust-lang.org/unstable-book/

```sh
$ rustup toolchain install nightly
info: syncing channel updates for 'nightly'
info: downloading toolchain manifest
info: downloading component 'rustc'
info: downloading component 'rust-std'
info: downloading component 'rust-docs'
info: downloading component 'cargo'
info: installing component 'rustc'
info: installing component 'rust-std'
info: installing component 'rust-docs'
info: installing component 'cargo'

  nightly installed: rustc 1.9.0-nightly (02310fd31 2016-03-19)
```

Now Rust nightly is installed, but not activated. To test it out you can run a
command from the nightly toolchain like

```sh
$ rustup run nightly rustc --version
rustc 1.9.0-nightly (02310fd31 2016-03-19)
```

But more likely you want to use it for a while. To switch to nightly globally,
change [the default] with `rustup default nightly`:

```sh
$ rustup default nightly
info: using existing install for 'nightly'
info: default toolchain set to 'nightly'

  nightly unchanged: rustc 1.9.0-nightly (02310fd31 2016-03-19)
```

Now any time you run `cargo` or `rustc` you will be running the nightly
compiler.

With nightly installed any time you run `rustup update`, the nightly channel
will be updated in addition to stable:

```sh
$ rustup update
info: syncing channel updates for 'stable'
info: syncing channel updates for 'nightly'
info: checking for self-update
info: downloading self-update

   stable unchanged: rustc 1.7.0 (a5d1e7a59 2016-02-29)
  nightly unchanged: rustc 1.9.0-nightly (02310fd31 2016-03-19)
```

[the default]: #default-toolchain

## Nightly availability

Nightly toolchains may fail to build, so for any given date and target
platform there may not be a toolchain available. Furthermore, nightly builds
may be published with missing non-default [components] (such as [`clippy`]).
As such, it can be difficult to find fully-working nightlies. Use the
[rustup-components-history][rch] project to find the build status of recent
nightly toolchains and components.

When you attempt to install or update the `nightly` channel, `rustup` will
check if a required or previously installed component is missing. If it is
missing, `rustup` will automatically search for an older release that contains
the required components. There are several ways to change this behavior:

* Use the `--force` flag to `rustup toolchain install` to force it to install
  the most recent version even if there is a missing component.
* Use the `--profile` flag to `rustup toolchain install` to use a different
  profile that does not contain the missing component. For example,
  `--profile=minimal` should always work, as the minimal set is required to
  exist. See the [Profiles] chapter for more detail.
* Install a specific date that contains the components you need. For example,
  `rustup toolchain install nightly-2020-07-27`. You can then use [overrides]
  to pin to that specific release.

[`clippy`]: https://github.com/rust-lang/rust-clippy
[rch]: https://rust-lang.github.io/rustup-components-history/
[components]: #components
[profiles]: #profiles
[overrides]: #overrides


<a id=concepts_toolchains></a>

# Toolchains

Many `rustup` commands deal with *toolchains*, a single installation of the
Rust compiler. `rustup` supports multiple types of toolchains. The most basic
track the official release [channels]: *stable*, *beta* and *nightly*; but
`rustup` can also install toolchains from the official archives, for alternate
host platforms, and from local builds.

[channels]: #channels

## Toolchain specification

Standard release channel toolchain names have the following form:

```
<channel>[-<date>][-<host>]

<channel>       = stable|beta|nightly|<versioned>[-<prerelease>]
<versioned>     = <major.minor>|<major.minor.patch>
<prerelease>    = beta[.<number>]
<date>          = YYYY-MM-DD
<host>          = <target-triple>
```

'channel' is a named release channel, a major and minor version number such as
`1.42`, or a fully specified version number, such as `1.42.0`. Channel names
can be optionally appended with an archive date, as in `nightly-2014-12-18`, in
which case the toolchain is downloaded from the archive for that date.

Finally, the host may be specified as a target triple. This is most useful for
installing a 32-bit compiler on a 64-bit platform, or for installing the
[MSVC-based toolchain][msvc-toolchain] on Windows. For example:

```sh
$ rustup toolchain install stable-x86_64-pc-windows-msvc
```

For convenience, elements of the target triple that are omitted will be
inferred, so the above could be written:

```sh
$ rustup toolchain install stable-msvc
```

Toolchain names that don't name a channel instead can be used to name [custom
toolchains].

[msvc-toolchain]: https://www.rust-lang.org/tools/install?platform_override=win
[custom toolchains]: #custom-toolchains

## Custom toolchains

For convenience of developers working on Rust itself, `rustup` can manage
local builds of the Rust toolchain. To teach `rustup` about your build, run:

```sh
$ rustup toolchain link my-toolchain path/to/my/toolchain/sysroot
```

For example, on Ubuntu you might clone `rust-lang/rust` into `~/rust`, build
it, and then run:

```sh
$ rustup toolchain link my-toolchain ~/rust/build/x86_64-unknown-linux-gnu/stage2/
$ rustup default my-toolchain
```

Now you can name `my-toolchain` as any other `rustup` toolchain. Create a
`rustup` toolchain for each of your `rust-lang/rust` workspaces and test them
easily with `rustup run my-toolchain rustc`.

Because the `rust-lang/rust` tree does not include Cargo, *when `cargo` is
invoked for a custom toolchain and it is not available, `rustup` will attempt
to use `cargo` from one of the release channels*, preferring 'nightly', then
'beta' or 'stable'.


<a id=concepts_components></a>

# Components

Each [toolchain] has several "components", some of which are required (like
`rustc`) and some that are optional (like [`clippy`][clippy]). The `rustup
component` command is used to manage the installed components. For example,
run `rustup component list` to see a list of available and installed
components.

Components can be added when installing a toolchain with the `--component`
flag. For example:

```sh
rustup toolchain install nightly --component rust-docs
```

Components can be added to an already-installed toolchain with the `rustup
component` command:

```sh
rustup component add rust-docs
```

To make it easier to choose which components are installed, `rustup` has the
concept of "profiles" which provide named groupings of different components.
See the [Profiles] chapter for more detail.

Most components have a target-triple suffix, such as
`rustc-x86_64-apple-darwin`, to signify the platform the component is for.

The set of available components may vary with different releases and
toolchains. The following is an overview of the different components:

* `rustc` --- The Rust compiler and [Rustdoc].
* `cargo` --- [Cargo] is a package manager and build tool.
* `rustfmt` --- [Rustfmt] is a tool for automatically formatting code.
* `rust-std` --- This is the Rust [standard library]. There is a separate
  `rust-std` component for each target that `rustc` supports, such as
  `rust-std-x86_64-pc-windows-msvc`. See the [Cross-compilation] chapter for
  more detail.
* `rust-docs` --- This is a local copy of the [Rust documentation]. Use the
  `rustup doc` command to open the documentation in a web browser. Run `rustup
  doc --help` for more options.
* `rust-analyzer` --- [rust-analyzer] is a language server that provides support
  for editors and IDEs.
* `clippy` --- [Clippy] is a lint tool that provides extra checks for common
  mistakes and stylistic choices.
* `miri` --- [Miri] is an experimental Rust interpreter, which can be used for
  checking for undefined-behavior.
* `rust-src` --- This is a local copy of the source code of the Rust standard
  library. This can be used by some tools, such as [rust-analyzer], to provide
  auto-completion for functions within the standard library; [Miri] which is a
  Rust interpreter; and Cargo's experimental [build-std] feature, which allows
  you to rebuild the standard library locally.
* `rust-mingw` --- This contains a linker and platform libraries for building on
  the `x86_64-pc-windows-gnu` platform.
* `llvm-tools` --- This component contains a collection of [LLVM] tools.
  **This component has not been stabilized and may change in the future and is
  provided as-is.** Availability of individual LLVM tools may
  change over LLVM versions (including removal of specific LLVM tools), and
  **is not subject to compiler or toolchain stability guarantees**.
  See [#85658](https://github.com/rust-lang/rust/issues/85658).
* `rustc-dev` --- This component contains the compiler as a library. Most users
  will not need this; it is only needed for development *of* tools that link
  to the compiler, such as making modifications to [Clippy].

### Previous components

> See [here](https://rust-lang.github.io/rustup/devel/concepts/components.html#previous-components)
> for the latest version of this section.

These components have been deprecated and are not published in new Rust releases.

* `rls` --- [RLS] is a language server that is deprecated and has been replaced
  by rust-analyzer.
* `rust-analysis` --- Metadata about the standard library, used by [RLS].
* The `wasm32-wasi` target --- It has been
  [renamed](https://blog.rust-lang.org/2024/04/09/updates-to-rusts-wasi-targets.html)
  to `wasm32-wasip1`.

## Component availability

Not all components are available for all toolchains. Especially on the nightly
channel, some components may not be included if they are in a broken state.
The current status of all the components may be found on the [rustup
components history] page. See the [Nightly availability] section for more
details.

[toolchain]: #toolchains
[standard library]: https://doc.rust-lang.org/std/
[rust documentation]: https://doc.rust-lang.org/
[cross-compilation]: #cross_compilation
[build-std]: https://doc.rust-lang.org/nightly/cargo/reference/unstable.html#build-std
[miri]: https://github.com/rust-lang/miri/
[RLS]: https://github.com/rust-lang/rls
[rust-analyzer]: https://rust-analyzer.github.io/
[rustdoc]: https://doc.rust-lang.org/rustdoc/
[cargo]: https://doc.rust-lang.org/cargo/
[clippy]: https://github.com/rust-lang/rust-clippy
[LLVM]: https://llvm.org/
[rustfmt]: https://github.com/rust-lang/rustfmt
[rustup components history]: https://rust-lang.github.io/rustup-components-history/
[profiles]: #profiles
[nightly availability]: #nightly-availability


<a id=concepts_profiles></a>

# Profiles

`rustup` has the concept of "profiles". They are groups of [components] you
can choose to download while installing a new Rust toolchain. The profiles
available at this time are `minimal`, `default`, and `complete`:

* The **minimal** profile includes as few components as possible to get a
  working compiler (`rustc`, `rust-std`, and `cargo`). It's recommended to use
  this component on Windows systems if you don't use local documentation (the
  large number of files can cause issues with some Antivirus systems), and in
  CI.
* The **default** profile includes all of components in the **minimal**
  profile, and adds `rust-docs`, `rustfmt`, and `clippy`. This profile will be
  used by `rustup` by default, and it's the one recommended for general use.
* The **complete** profile includes all the components available through
  `rustup`. This should never be used, as it includes *every* component ever
  included in the metadata and thus will almost always fail. If you are
  looking for a way to install devtools such as `miri` or IDE integration
  tools (`rust-analyzer`), you should use the `default` profile and
  install the needed additional components manually, either by using `rustup
  component add` or by using `-c` when installing the toolchain.

To change the profile `rustup install` uses by default, you can use the
`rustup set profile` command.
For example, to select the minimal profile you can use:

```sh
rustup set profile minimal
```

You can also directly select the profile used when installing a toolchain with:

```sh
rustup install --profile <name>
```

It's also possible to choose the default profile when installing `rustup` for
the first time, either interactively by choosing the "Customize installation"
option or programmatically by passing the `--profile=<name>` flag. Profiles
will only affect newly installed toolchains: as usual it will be possible to
install individual components later with: `rustup component add`.

[components]: #components


<a id=concepts_proxies></a>

# Proxies

`rustup` provides a number of wrappers for common Rust tools.
These are called _proxies_ and represent commands which are
provided by the various [components].

The list of proxies is currently static in `rustup` and is as follows:

[components]: #components

- `rustc` is the compiler for the Rust programming language, provided by the project itself and comes from the `rustc` component.

- `rustdoc` is a tool distributed in the `rustc` component which helps you to generate documentation for Rust projects.

- `cargo` is the Rust package manager which downloads your Rust package’s dependencies, compiles your packages, makes distributable packages, and uploads them to crates.io (the Rust community’s package registry). It comes from the `cargo` component.

- `rust-lldb`, `rust-gdb`, and `rust-gdbgui` are simple wrappers around the `lldb`, `gdb`, and `gdbgui` debuggers respectively. The wrappers enable some pretty-printing of Rust values and add some convenience features to the debuggers by means of their scripting interfaces.

- `rust-analyzer` is part of the Rust IDE integration tooling. It implements the language-server protocol to permit IDEs and editors such as Visual Studio Code, Vim, or Emacs, access to the semantics of the Rust code you are editing. It comes from the `rust-analyzer` component.

- `cargo-clippy` and `clippy-driver` are related to the `clippy` linting tool which provides extra checks for common mistakes and stylistic choices and it comes from the `clippy` component.

- `cargo-miri` is an experimental interpreter for Rust's mid-level intermediate representation (MIR) and it comes from the `miri` component.

- `rls` is a deprecated IDE tool that has been replaced by `rust-analyzer`. It comes from the `rls` component.


<a id=basics></a>

# Basic usage

## Keeping Rust up to date

Rust is distributed on three different [release channels]: stable, beta, and
nightly. `rustup` uses the stable channel by default, which
represents the latest release of Rust. Stable publishes new releases every six weeks.

[release channels]: #concepts_channels

When a new version of Rust is released, simply type `rustup update` to update:

```sh
$ rustup update
info: syncing channel updates for 'stable'
info: downloading component 'rustc'
info: downloading component 'rust-std'
info: downloading component 'rust-docs'
info: downloading component 'cargo'
info: installing component 'rustc'
info: installing component 'rust-std'
info: installing component 'rust-docs'
info: installing component 'cargo'
info: checking for self-update
info: downloading self-update

  stable updated: rustc 1.7.0 (a5d1e7a59 2016-02-29)
```

## Keeping `rustup` up to date

If your `rustup` was built with the [no-self-update feature](https://github.com/rust-lang/rustup/blob/master/Cargo.toml#L25), it can not update
itself. This is not the default, and only versions of `rustup` built with
`--no-default-features`, or obtained from a third-party distributor who has
disabled it (such as NixOS).

Otherwise Rustup can update itself. It is possible to control Rustup's automatic
self update mechanism with the `auto-self-update` configuration variable. This
setting supports three values: `enable` and `disable` and `check-only`.

* `disable` will ensure that no automatic self updating actions are taken.
* `enable` will mean that `rustup update` and similar commands will also check for, and install, any update to Rustup.
* `check-only` will cause any automatic self update to check and report on any updates, but not to automatically install them.

Whether `auto-self-update` is `enable` or not, you can request that Rustup
update itself to the latest version of `rustup` by running `rustup self update`.
This will not download new toolchains:

```sh
$ rustup self update
info: checking for self-update
info: downloading self-update
```

### Disabling self updates on a per-invocation basis
> Self updates can also be suppressed on individual invocations of `rustup` by
> passing the argument `--no-self-update`  when running `rustup update` or
> `rustup toolchain install`.

## Help system

The `rustup` command-line has a built-in help system that provides more
information about each command. Run `rustup help` for an overview. Detailed
help for each subcommand is also available. For example, run `rustup toolchain
install --help` for specifics on installing [toolchains].

[toolchains]: #concepts_toolchains



<a id=overrides></a>

# Overrides

`rustup` automatically determines which [toolchain] to use when one of the
installed commands like `rustc` is executed. There are several ways to control
and override which toolchain is used:

1. A [toolchain override shorthand] used on the command-line, such as `cargo
   +beta`.
2. The `RUSTUP_TOOLCHAIN` environment variable.
3. A [directory override], set with the `rustup override` command.
4. The [`rust-toolchain.toml`] file.
5. The [default toolchain].

The toolchain is chosen in the order listed above, using the first one that is
specified. There is one exception though: directory overrides and the
`rust-toolchain.toml` file are also preferred by their proximity to the current
directory. That is, these two override methods are discovered by walking up
the directory tree toward the filesystem root, and a `rust-toolchain.toml` file
that is closer to the current directory will be preferred over a directory
override that is further away.

To verify which toolchain is active, you can use `rustup show`.

[toolchain]: #concepts_toolchains
[toolchain override shorthand]: #toolchain-override-shorthand
[directory override]: #directory-overrides
[`rust-toolchain.toml`]: #the-toolchain-file
[default toolchain]: #default-toolchain

## Toolchain override shorthand

The `rustup` toolchain proxies can be instructed directly to use a specific
toolchain, a convenience for developers who often test different toolchains.
If the first argument to `cargo`, `rustc` or other tools in the toolchain
begins with `+`, it will be interpreted as a `rustup` toolchain name, and that
toolchain will be preferred, as in

```sh
cargo +beta test
```

## Directory overrides

Directories can be assigned their own Rust toolchain with `rustup override`.
When a directory has an override then any time `rustc` or `cargo` is run
inside that directory, or one of its child directories, the override toolchain
will be invoked.

To use to a specific nightly for a directory:

```sh
rustup override set nightly-2014-12-18
```

Or a specific stable release:

```sh
rustup override set 1.0.0
```

To see the active toolchain use `rustup show`. To remove the override and use
the default toolchain again, `rustup override unset`.

The per-directory overrides are stored in [a configuration file] in `rustup`'s
home directory.

[a configuration file]: #configuration

## The toolchain file

Some projects find themselves 'pinned' to a specific release of Rust and want
this information reflected in their source repository. This is most often the
case for nightly-only software that pins to a revision from the release
archives.

In these cases the toolchain can be named in the project's directory in a file
called `rust-toolchain.toml` or `rust-toolchain`. If both files are present in
a directory, the latter is used for backwards compatibility. The files use the
[TOML] format and have the following layout:

[TOML]: https://toml.io/

``` toml
[toolchain]
channel = "nightly-2020-07-10"
components = [ "rustfmt", "rustc-dev" ]
targets = [ "wasm32-unknown-unknown", "thumbv2-none-eabi" ]
profile = "minimal"
```

The `[toolchain]` section is mandatory, and at least one property must be
specified. `channel` and `path` are mutually exclusive.

For backwards compatibility, `rust-toolchain` files also support a legacy
format that only contains a toolchain name without any TOML encoding, e.g.
just `nightly-2021-01-21`. The file has to be encoded in US-ASCII in this case
(if you are on Windows, check the encoding and that it does not start with a
BOM). The legacy format is not available in `rust-toolchain.toml` files.

If you see the following error (when running `rustc`, `cargo` or other command)
```
error: invalid channel name '[toolchain]' in '/PATH/TO/DIRECTORY/rust-toolchain'
```

it means you're running `rustup` pre-1.23.0 and trying to interact with a project
that uses the new TOML encoding in the `rust-toolchain` file. You need to upgrade
`rustup` to 1.23.0+.

The `rust-toolchain.toml`/`rust-toolchain` files are suitable to check in to
source control. If that's done, `Cargo.lock` should probably be tracked too if
the toolchain is pinned to a specific release, to avoid potential compatibility
issues with dependencies.

### Toolchain file settings

#### channel

The `channel` setting specifies which [toolchain] to use. The value is a
string in the following form:

```
(<channel>[-<date>])|<custom toolchain name>

<channel>       = stable|beta|nightly|<versioned>[-<prerelease>]
<versioned>     = <major.minor>|<major.minor.patch>
<prerelease>    = beta[.<number>]
<date>          = YYYY-MM-DD
```

[toolchain]: #concepts_toolchains

#### path

The `path` setting allows a custom toolchain to be used. The value is an
absolute path string.

Since a `path` directive directly names a local toolchain, other options
like `components`, `targets`, and `profile` have no effect.

`channel` and `path` are mutually exclusive, since a `path` already
points to a specific toolchain.

#### profile

The `profile` setting names a group of components to be installed. The
value is a string. The valid options are: `minimal`, `default`, and
`complete`. See [profiles] for details of each.

Note that if not specified, the `default` profile is not necessarily
used, as a different default profile might have been set with `rustup
set profile`.

[profiles]: #concepts_profiles

#### components

The `components` setting contains a list of additional components to
install. The value is a list of strings. See [components] for a list of
components. Note that different toolchains may have different components
available.

The components listed here are additive with the current profile.

[components]: #concepts_components

#### targets

The `targets` setting contains a list of platforms to install for
[cross-compilation]. The value is a list of strings.

The host platform is automatically included; the targets listed here are
additive.

[cross-compilation]: https://rust-lang.github.io/rustup/cross-compilation.html

## Default toolchain

If no other overrides are set, the global default toolchain will be used. This
default can be chosen when `rustup` is [installed]. The `rustup default`
command can be used to set and query the current default. Run `rustup default`
without any arguments to print the current default. Specify a toolchain as an
argument to change the default:

```sh
rustup default nightly-2020-07-27
```

[installed]: #installation_index
[#1397]: https://github.com/rust-lang/rustup/issues/1397


<a id=cross_compilation></a>

# Cross-compilation

Rust [supports a great number of platforms][p]. For many of these platforms
The Rust Project publishes binary releases of the standard library, and for
some the full compiler. `rustup` gives easy access to all of them.

[p]: https://doc.rust-lang.org/nightly/rustc/platform-support.html

When you first install a toolchain, `rustup` installs only the standard
library for your *host* platform - that is, the architecture and operating
system you are presently running. To compile to other platforms you must
install other *target* platforms. This is done with the `rustup target add`
command. For example, to add the Android target:

```sh
$ rustup target add arm-linux-androideabi
info: downloading component 'rust-std' for 'arm-linux-androideabi'
info: installing component 'rust-std' for 'arm-linux-androideabi'
```

With the `arm-linux-androideabi` target installed you can then build for
Android with Cargo by passing the `--target` flag, as in `cargo build
--target=arm-linux-androideabi`.

Note that `rustup target add` only installs the Rust standard library for a
given target. There are typically other tools necessary to cross-compile,
particularly a linker. For example, to cross compile to Android the [Android
NDK] must be installed. In the future, `rustup` will provide assistance
installing the NDK components as well. See the [target section] of the
`cargo` configuration for how to setup a linker to use for a certain target.

[Android NDK]: https://developer.android.com/tools/sdk/ndk/index.html
[target section]: https://doc.rust-lang.org/cargo/reference/config.html#target

To install a target for a toolchain that isn't the default toolchain use the
`--toolchain` argument of `rustup target add`, like so:

```sh
$ rustup target add --toolchain <toolchain> <target>...
```

To see a list of available targets, `rustup target list`. To remove a
previously-added target, `rustup target remove`.


<a id=environment_variables></a>

# Environment variables

- `RUSTUP_LOG` (default: none). Enables Rustup's "custom logging mode". In this mode,
  the verbosity of Rustup's log lines can be specified with `tracing_subscriber`'s
  [directive syntax]. For example, set `RUSTUP_LOG=rustup=DEBUG` to receive log lines
  from `rustup` itself with a maximal verbosity of `DEBUG`.

- `RUSTUP_HOME` (default: `~/.rustup` or `%USERPROFILE%/.rustup`). Sets the
  root `rustup` folder, used for storing installed toolchains and
  configuration options.

- `RUSTUP_TOOLCHAIN` (default: none). If set, will [override] the toolchain used
  for all rust tool invocations. A toolchain with this name should be installed,
  or invocations will fail. This can specify custom toolchains, installable
  toolchains, or the absolute path to a toolchain.

- `RUSTUP_DIST_SERVER` (default: `https://static.rust-lang.org`). Sets the root
  URL for downloading static resources related to Rust. You can change this to
  instead use a local mirror, or to test the binaries from the staging
  directory.

- ~~`RUSTUP_DIST_ROOT`~~ *deprecated* (default: `https://static.rust-lang.org/dist`).
  Use `RUSTUP_DIST_SERVER` instead.

- `RUSTUP_UPDATE_ROOT` (default `https://static.rust-lang.org/rustup`). Sets
  the root URL for downloading self-update.

- `RUSTUP_VERSION` (default: none). Overrides the rustup version (e.g. `1.27.1`)
  to be downloaded when executing `rustup-init.sh` or `rustup self update`.

- `RUSTUP_IO_THREADS` *unstable* (default: reported cpu count, max 8). Sets the
  number of threads to perform close IO in. Set to `1` to force
  single-threaded IO for troubleshooting, or an arbitrary number to override
  automatic detection.

- `RUSTUP_TRACE_DIR` *unstable* (default: no tracing). Enables tracing and
  determines the directory that traces will be written too. Traces are of the
  form PID.trace. Traces can be read by the Catapult project [tracing viewer].

- `RUSTUP_TERM_COLOR` (default: `auto`). Controls whether colored output is used in the terminal.
  Set to `auto` to use colors only in tty streams, to `always` to always enable colors,
  or to `never` to disable colors.

- `RUSTUP_UNPACK_RAM` *unstable* (default: free memory or 500MiB if unable to tell, min 210MiB). Caps the amount of
  RAM (in bytes) `rustup` will use for IO tasks while unpacking.

- `RUSTUP_NO_BACKTRACE`. Disables backtraces on non-panic errors even when
  `RUST_BACKTRACE` is set.

- `RUSTUP_PERMIT_COPY_RENAME` *unstable*. When set, allows rustup to fall-back
  to copying files if attempts to `rename` result in cross-device link
  errors. These errors occur on OverlayFS, which is used by [Docker][dc]. This
  feature sacrifices some transactions protections and may be removed at any
  point. Linux only.

- `RUSTUP_AUTO_INSTALL` (default: 1) When set to `1`, installs the active
  toolchain when it is absent. Set this value to `0` to disable automatic
  installation.

- `RUSTUP_HARDLINK_PROXIES` *unstable*. When set, rustup will not attempt to
  symlink proxies and instead always use hardlinks. If you find this fixes
  a problem, then please report the issue on the [rustup issue tracker].

- `RUSTUP_TERM_PROGRESS_WHEN` (default: `auto`). Controls whether progress bars are shown or not.
  Set to `always` to always enable progress bars, and to `never` to disable them.

- `RUSTUP_TERM_WIDTH` (default: none). Allows to override the terminal width for progress bars.

- `RUSTUP_DOWNLOAD_TIMEOUT` *unstable* (default: 180). Allows to override the default
  timeout (in seconds) for downloading components.

- `RUSTUP_CONCURRENT_DOWNLOADS` *unstable* (default: the number of components to download). Controls the number of
  downloads made concurrently.

[directive syntax]: https://docs.rs/tracing-subscriber/latest/tracing_subscriber/filter/struct.EnvFilter.html#directives
[dc]: https://docs.docker.com/storage/storagedriver/overlayfs-driver/#modifying-files-or-directories
[override]: #overrides
[tracing viewer]: https://github.com/catapult-project/catapult/blob/master/tracing/README.md
[rustup issue tracker]: https://github.com/rust-lang/rustup/issues


<a id=configuration></a>

# Configuration

Rustup has a [TOML](https://github.com/toml-lang/toml) settings file at
`${RUSTUP_HOME}/settings.toml` (which defaults to `~/.rustup` or
`%USERPROFILE%/.rustup`). The schema for this file is not part of the public
interface for rustup - the rustup CLI should be used to query and set settings.

On Unix operating systems a fallback settings file is consulted for some
settings. This fallback file is located at `/etc/rustup/settings.toml` and
currently can define only `default_toolchain`.


<a id=network_proxies></a>

# Network proxies

Enterprise networks often don't have direct outside HTTP access, but enforce
the use of proxies. If you're on such a network, you can request that `rustup`
uses a proxy by setting its URL in the environment. In most cases, setting
`https_proxy` should be sufficient. Commands may differ between different
systems and shells:

 - On a Unix-like system with a shell like __bash__ or __zsh__:  
   ```bash
   export https_proxy=socks5://proxy.example.com:1080
   ```
 - On Windows [__Command Prompt (cmd)__][cmd]:  
   ```cmd
   set https_proxy=socks5://proxy.example.com:1080
   ```
 - On Windows [__PowerShell__][ps] (or __PowerShell Core__):  
   ```cmd
   $env:https_proxy="socks5://proxy.example.com:1080"
   ```
 - Replace `socks5://proxy.example.com:1080` with 
  `http://proxy.example.com:8080` when an HTTP proxy is used instead.

If you need a more complex setup, `rustup` supports the convention used by the
__curl__ program, documented in the ENVIRONMENT section of [its manual
page][curlman].

The use of `curl` is presently **deprecated**, however it can still be used by
providing the `RUSTUP_USE_CURL` environment variable, for example:

```bash
RUSTUP_USE_CURL=1 rustup update
```

Note that some versions of `libcurl` apparently require you to drop the
`http://` or `https://` prefix in environment variables. For example, `export
http_proxy=proxy.example.com:1080` (and likewise for HTTPS). If you are
getting an SSL `unknown protocol` error from `rustup` via `libcurl` but the
command-line `curl` command works fine, this may be the problem.

[curlman]: https://curl.se/docs/manpage.html#:~:text=Environment,-The%20environment%20variables
[cmd]: https://en.wikipedia.org/wiki/Cmd.exe
[ps]: https://en.wikipedia.org/wiki/PowerShell


<a id=examples></a>

# Examples

Command                      | Description
---------------------------- | -------------------------------------------------
`rustup default nightly`     | Set the [default toolchain] to the latest nightly
`rustup set profile minimal` | Set the default [profile]
`rustup target list`         | List all available [targets] for the active toolchain
`rustup target add arm-linux-androideabi` | Install the Android target
`rustup target remove arm-linux-androideabi` | Remove the Android target
`rustup run nightly rustc foo.rs` | Run the nightly regardless of the active toolchain
`rustc +nightly foo.rs`      | [Shorthand] way to run a nightly compiler
`rustup run nightly bash`    | Run a shell configured for the nightly compiler
`rustup default stable-msvc` | On Windows, use the MSVC toolchain instead of GNU
`rustup override set nightly-2015-04-01`  | For the current directory, use a nightly from a specific date
`rustup toolchain link my-toolchain "C:\RustInstallation"`  | Install a custom toolchain by symlinking an existing installation
`rustup show`                        | Show which toolchain will be used in the current directory
`rustup toolchain uninstall nightly` | Uninstall a given toolchain
`rustup toolchain help`              | Show the `help` page for a subcommand (like `toolchain`)
`rustup man cargo`                   | \(*Unix only*\) View the man page for a given command (like `cargo`)

[default toolchain]: #default-toolchain
[profile]: #concepts_profiles
[shorthand]: #toolchain-override-shorthand
[targets]: #cross_compilation


<a id=security></a>

# Security

`rustup` is secure enough for most people, but it [still needs work][s].
`rustup` performs all downloads over HTTPS, but does not yet validate
signatures of downloads.

[s]: https://github.com/rust-lang/rustup/issues?q=is%3Aopen+is%3Aissue+label%3Asecurity

File modes on installation honor umask as of 1.18.4, use umask if very tight
controls are desired.

If you wish to report a security issue, please follow the [Rust security
policy].

[Rust security policy]: https://www.rust-lang.org/policies/security


<a id=faq></a>

# FAQ

### Is this an official Rust project?

Yes. rustup is an official Rust project. It is the recommended way to install
Rust at https://www.rust-lang.org.

### How is this related to multirust?

rustup is the successor to [multirust]. rustup began as multirust-rs, a
rewrite of multirust from shell script to Rust, by [Diggory Blake], and is now
maintained by The Rust Project.

[multirust]: https://github.com/brson/multirust
[Diggory Blake]: https://github.com/Diggsey

### Can rustup download the Rust source code?

The source for Rust's standard library can be obtained by running 
`rustup component add rust-src`. It will be downloaded to the 
`<toolchain root>/lib/rustlib/src/rust` directory of the current toolchain.

The source for the compiler and tools must be obtained from the [Rust
repository] or the standalone [source tarballs].

[rust repository]: https://github.com/rust-lang/rust/
[source tarballs]: https://forge.rust-lang.org/infra/other-installation-methods.html#source-code

### rustup fails with Windows error 32

If `rustup` fails with Windows error 32, it may be due to antivirus scanning
in the background. Disable antivirus scanner and try again.

### I get "error: could not remove 'rustup-bin' file: 'C:\Users\USER\.cargo\bin\rustup.exe'"

If `rustup` fails to self-update in this way it's usually because RLS is
running (your editor is open and running RLS). The solution is to stop RLS (by
closing your editor) and try again.

### rustup exited successfully but I can't run `rustc --version`

Restart your shell. This will reload your `PATH` environment
variable to include Cargo's bin directory (`$CARGO_HOME/bin`).


<a id=dev_guide_index></a>

# Contributing to rustup

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Test it: `cargo test --features=test`
4. [Lint it!](#linting)
5. Commit your changes: `git commit -am 'Add some feature'`
6. Push to the branch: `git push origin my-new-feature`
7. Submit a pull request :D

For developing on `rustup` itself, the easiest way is to run the development
build on your current installation. This approach is best used for minor fixes
or improvements. See the documentation for [`RUSTUP_FORCE_ARG0`] for more info.

[`RUSTUP_FORCE_ARG0`]: #rustup_force_arg0

A more formal solution involves installing rustup into a temporary directory as
your dedicated test environment.
To do so, you can run a series of commands similar to this:

```bash
cargo build
mkdir home
RUSTUP_HOME=home CARGO_HOME=home target/debug/rustup-init --no-modify-path -y
```

You can then try out `rustup` with your changes by running `home/bin/rustup`, without
affecting any existing installation. Remember to keep those two environment variables
set when running your compiled `rustup-init` or the toolchains it installs, but _unset_
when rebuilding `rustup` itself.

If you wish to install your new build to try out longer term in your home directory
then you can run `cargo dev-install` which is an alias in `.cargo/config` which
runs `cargo run -- --no-modify-path -y` to install your build into your homedir.

We use `rustfmt` to keep our codebase consistently formatted. Please ensure that
you have correctly formatted your code (most editors will do this automatically
when saving) or it may not pass the CI tests.

If you are moving, renaming or removing an existing mdBook page, please use mdBook's
[`output.html.redirect`] feature to ensure that the old URL gets redirected.

[`output.html.redirect`]: https://rust-lang.github.io/mdBook/format/configuration/renderers.html#outputhtmlredirect

Unless you explicitly state otherwise, any contribution intentionally
submitted for inclusion in the work by you, as defined in the
Apache-2.0 license, shall be dual licensed as in the README, without any
additional terms or conditions.


<a id=linting></a>

# Linting

We use `cargo clippy` to ensure high-quality code and to enforce a set of best practices for Rust programming.
However, not all lints provided by `cargo clippy` are relevant or applicable to our project.
We may choose to ignore some lints if they are unstable, experimental, or specific to our project.
If you are unsure about a lint, please ask us in the
[rustup Zulip channel](https://rust-lang.zulipchat.com/#narrow/channel/490103-t-rustup).

## Manual linting

When checking the codebase with [`clippy`](https://doc.rust-lang.org/stable/clippy/index.html),
it is recommended to use the following command:

```sh
$ cargo clippy --all --all-targets --all-features -- -D warnings
```

Please note the `--all-features` flag: it is used because we need to enable the `test` feature
to make lints fully work, for which `--all-features` happens to be a convenient shortcut.

The `test` feature is required because `rustup` uses
[cargo features](https://doc.rust-lang.org/cargo/reference/features.html) to
[conditionally compile](https://doc.rust-lang.org/reference/conditional-compilation.html)
support code for integration tests, as `#[cfg(test)]` is only available for unit tests.

If you encounter an issue or wish to speed up the initial analysis, you could also try
activating only the `test` feature by replacing `--all-features` with `--features=test`.

## Rust-Analyzer

When checking the codebase using `rust-analyzer`, the first thing to do remains unchanged:
enabling the features.

This is done by setting the `rust-analyzer.cargo.features` property to `"all"`.

For example, if you are using `rust-analyzer` within VSCode, you would want to
add the following to your project's `.vscode/settings.json`[^vscode-global-cfg]:

```jsonc
"rust-analyzer.cargo.features": "all",
```

[^vscode-global-cfg]:
    Alternatively, if you want to apply the configuration to all your Rust projects,
    you can add it to your global configuration at `~/.config/Code/User/settings.json` instead.

Alternatively, if you want to enable the `test` feature only, you should set the
following instead:

```jsonc
"rust-analyzer.cargo.features": ["test"]
```

Next, as `rust-analyzer` depends on `cargo check` by default, it is also recommended to
enable the `cargo clippy` integration by adding the following:

```jsonc
"rust-analyzer.check.command": "clippy",
```

You might also want to refer to the
[`rust-analyzer` manual](https://rust-analyzer.github.io/manual.html#configuration)
for more details on properly setting up `rust-analyzer` in your IDE of choice.


<a id=coding_standards></a>

# Coding standards

Generally we just follow good sensible Rust practices, clippy and so forth.
However there are some practices we've agreed on that are not machine-enforced;
meeting those requirements in a PR will make it easier to merge.

## Atomic commits

We use atomic commits across the repo. Each commit should represent a single unit of change.
You can read more about atomic commits [here](https://www.aleksandrhovhannisyan.com/blog/atomic-git-commits).

## Import grouping

In each file the imports should be grouped into at most 4 groups in the
following order:

1. stdlib
2. non-repository local crates
3. repository local other crates
4. this crate

Separate each group with a blank line, and rustfmt will sort into a canonical
order. Any file that is not grouped like this can be rearranged whenever the
file is touched - we're not precious about having it done in a separate commit,
though that is helpful.

## No direct use of process state outside rustup::process

The `rustup::process` module abstracts the global state that is
`std::env::args`, `std::env::vars`, `std::io::std*` and `std::env::current_dir`
permitting threaded tests of the CLI logic; use the relevant methods of the
`rustup::process::Process` type rather than those APIs directly.
Usually, a `process: &Process` variable will be available to you in the current context.
For example, it could be in the form of a parameter of the current function,
or a field of a `Cfg` instance, etc.

## Writing tests

Rustup provides a number of test helpers in the `rustup::test` module
which is conditionally enabled with the `test` feature.

The existing tests under `tests/suite` provide good examples of how to use these
helpers, but you might also find it useful to look at the documentation for
particular APIs in the `rustup::test` module.

For example, for more information regarding end-to-end tests with the `.expect()`
APIs, you can refer to the documentation of the [`Assert`] type.

[`Assert`]: https://github.com/search?q=repo%3Arust-lang%2Frustup+symbol%3A%2F%28%3F-i%29Assert%2F&type=code

## Clippy lints

At the time of writing, rustup's CI pipeline runs clippy on both Windows and
Linux, but contributors to particularly OS-specific code should also make
sure that their clippy checking is done on that particular platform, as
OS-conditional code is a common source of unused imports and other small lints,
which can build up over time.

## Writing platform-specific code

For developers using BSD/Linux/Mac OS, there are Windows VM's suitable for such
development tasks for use with virtualbox and other hypervisors are downloadable
from [Microsoft](https://developer.microsoft.com/en-us/windows/downloads/virtual-machines/).
Similarly, there are many Linux and Unix operating systems images available for
developers whose usual operating system is Windows. Currently Rustup has no Mac
OS specific code, so there should be no need to worry about Mac VM images.


<a id=version_numbers></a>

# Version numbers

If you ever see a released version of rustup which has `::` in its version string
then something went wrong with the CI and that needs to be addressed.

We use `git-testament` to construct our version strings. This records, as a
struct, details of the git commit, tag description, and also an indication
of modifications to the working tree present when the binary was compiled.

During normal development you may get information from invoking `rustup --version`
which looks like `rustup-init 1.18.3+15 (a54051502 2019-05-26)` or even
`rustup-init 1.18.3+15 (a54051502 2019-05-26) dirty 1 modification`.

The first part is always the binary name as per `clap`'s normal operation. The
version number is a combination of the most recent tag in the git repo, and the
number of commits since that tag. The parenthesised information is, naturally,
the SHA of the most recent commit and the date of that commit. If the indication
of a dirty tree is present, the number of changes is indicated. This combines
adds, deletes, modifies, and unknown entries.

You can request further information of a `rustup` binary with the
`rustup dump-testament` hidden command. It produces output of the form:

```shell
$ rustup dump-testament
Rustup version renders as: 1.18.3+15 (a54051502 2019-05-26) dirty 1 modification
Current crate version: 1.18.3
Built from branch: kinnison/version-strings
Commit info: 1.18.3+15 (a54051502 2019-05-26)
Modified: CONTRIBUTING.md
```

This can be handy when you are testing development versions on your PC
and cannot remember exactly which version you had installed, or if you have given
a development copy (or instruction to build such) to a user, and wish to have them
confirm _exactly_ what they are using.

Finally, we tell `git-testament` that we trust the `stable` branch to carry
releases. If the build is being performed when not on the `stable` branch, and
the tag and `CARGO_PKG_VERSION` differ, then the short version string will include
both, in the form `rustup-init 1.18.3 :: 1.18.2+99 (a54051502 2019-05-26)` which
indicates the crate version before the rest of the commit.
On the other hand, if the build was on the `stable` branch then regardless
of the tag information, providing the commit was clean, the version is
always replaced by the crate version. The `dump-testament` hidden command can
reveal the truth however.


<a id=release_process></a>

# Making a release

Before making a release, ensure that `rustup-init.sh` is behaving correctly,
and that you're satisfied that nothing in the ecosystem is breaking because
of the update. A useful set of things to check includes verifying that
real-world toolchains install okay, and that `rust-analyzer` isn't broken by
the release. While it's not our responsibility if they depend on non-stable
APIs, we should behave well if we can.

As a maintainer, you have two options to choose from when cutting a new
release: a beta release or an official release.
The main difference between the two is that they use different values for
the `RUSTUP_UPDATE_ROOT` environment variable:
- A beta release is deployed on `https://dev-static.rust-lang.org/rustup`.
- An official release is deployed on `https://static.rust-lang.org/rustup`.

By switching between those two values, Rustup effectively provides two "self
update channels", making beta testing possible with `rustup self update`.

Producing the final release artifacts is a bit involved because of the way
Rustup is distributed.
Below is a list of things to be done in order to cut a new [b]eta release
or an official [r]elease:

1. [b/r] In a separate PR:
   1. If the version strings in `Cargo.toml`s haven't been updated:
      - Decide what the new version number `$VER_NUM` should be.
        > **Note:** We always increment the *minor* number unless:
        > - A major incompatibility has been introduced in this release:
        >   increment the *major* number instead.
        > - This release is a hotfix because the last one had a defect:
        >   increment the *patch* number instead.
      - Update `Cargo.toml` and `download/Cargo.toml` to have that same new
        version number, then run `cargo build` and review `Cargo.lock` changes.
      If all looks well, make a commit.
   2. Update `CHANGELOG.md` accordingly if necessary.
2. [b/r] After merging the PR made in step 1, in a separate PR:
   1. Update the commit shasum in `rustup-init.sh` to match the latest commit
      on `master`.
3. [b/r] After merging the PR made in step 2, sync `master` to `stable` using
   `--ff-only`:
   - `git fetch origin master:master`
   - `git checkout stable && git merge --ff-only master`
   - `git push origin HEAD:stable`
4. [b/r] While you wait for green CI on `stable`, double-check the
   functionality of `rustup-init.sh` and `rustup-init` just in case.
5. [b/r] Ensure all of CI is green on the `stable` branch.
   Once it is, check through a representative proportion of the builds looking
   for the reported version statements to ensure that
   we definitely built something cleanly which reports as the right version
   number when run `--version`.
6. [r] Make a new PR to the [Rust Blog] adding a new release announcement post.
7. [b/r] Ping someone in the release team to perform the actual release.
   They can find instructions in `ci/sync-dist.py`.
   > **Note:** Some manual testing occurs here, so hopefully they'll catch
     anything egregious in which case abort the change and roll back.
8. [b] Once the beta release has happened, post a new topic named "Seeking beta
   testers for Rustup $VER_NUM" on the [Internals Forum].
9. [r] Once the official release has happened, prepare and push a tag on the
   latest `stable` commit.
   - `git tag -as $VER_NUM -m $VER_NUM` (optionally without `-s` if not GPG
     signing the tag)
   - `git push origin $VER_NUM`

[Rust Blog]: https://github.com/rust-lang/blog.rust-lang.org
[Internals Forum]: https://internals.rust-lang.org


<a id=tips_and_tricks></a>

# Developer tips and tricks

## `RUSTUP_FORCE_ARG0`

The environment variable `RUSTUP_FORCE_ARG0` can be used to get rustup to think
it's a particular binary, rather than e.g. copying it, symlinking it or other
tricks with exec. This is handy when testing particular code paths from cargo
run.

For example, if you want to run `rustup show` with `cargo run`, you may execute:

```sh
> cargo run --config env.RUSTUP_FORCE_ARG0=\'rustup\' -- show
```

This command passes the `RUSTUP_FORCE_ARG0` environment variable to the
`rustup-init` binary without influencing the `cargo run` command itself,
which is very important since `cargo` could also be a rustup proxy.

## `RUSTUP_BACKTRACK_LIMIT`

If it's necessary to alter the backtracking limit from the default of half
a release cycle for some reason, you can set the `RUSTUP_BACKTRACK_LIMIT`
environment variable. If this is unparsable as an `i32` or if it's absent
then the default of 21 days (half a cycle) is used. If it parses and is less
than 1, it is clamped to 1 at minimum.

This is not meant for use by users, but can be suggested in diagnosing an issue
should one arise with the backtrack limits.

## `RUSTUP_MAX_RETRIES`

When downloading a file, rustup will retry the download a number of times. The
default is 3 times, but if this variable is set to a valid usize then it is the
max retry count. A value of `0` means no retries, thus the default of `3` will
mean a download is tried a total of four times before failing out.

## `RUSTUP_BACKTRACE`

By default while running tests, we unset some environment variables that will
break our testing (like `RUSTUP_TOOLCHAIN`, `SHELL`, `ZDOTDIR`, `RUST_BACKTRACE`).
But if you want to debug locally, you may need backtrace. `RUSTUP_BACKTRACE`
is used like `RUST_BACKTRACE` to enable backtraces of failed tests.

**NOTE**: This is a backtrace for the test, not for any subprocess invocation of
rustup process running in the test

```bash
$ RUSTUP_BACKTRACE=1 cargo test --release --test cli-v1 -- remove_toolchain_then_add_again
    Finished release [optimized] target(s) in 0.38s
     Running target\release\deps\cli_v1-1f29f824792f6dc1.exe

running 1 test
test remove_toolchain_then_add_again ... FAILED

failures:

---- remove_toolchain_then_add_again stdout ----
thread 'remove_toolchain_then_add_again' panicked at 'called `Result::unwrap()` on an `Err` value: Os { code: 1142, kind: Other, message: "An attempt was made to create more links on a file than the file system supports." }', src\libcore\result.rs:999:5
stack backtrace:
   0: backtrace::backtrace::trace_unsynchronized
             at C:\Users\appveyor\.cargo\registry\src\github.com-1ecc6299db9ec823\backtrace-0.3.29\src\backtrace\mod.rs:66
   1: std::sys_common::backtrace::_print
             at /rustc/de02101e6d949c4a9040211e9ce8c488a997497e\/src\libstd\sys_common\backtrace.rs:47
   2: std::sys_common::backtrace::print
             at /rustc/de02101e6d949c4a9040211e9ce8c488a997497e\/src\libstd\sys_common\backtrace.rs:36
   3: std::panicking::default_hook::{{closure}}
             at /rustc/de02101e6d949c4a9040211e9ce8c488a997497e\/src\libstd\panicking.rs:198
   4: std::panicking::default_hook
             at /rustc/de02101e6d949c4a9040211e9ce8c488a997497e\/src\libstd\panicking.rs:209
   5: std::panicking::rust_panic_with_hook
             at /rustc/de02101e6d949c4a9040211e9ce8c488a997497e\/src\libstd\panicking.rs:475
   6: std::panicking::continue_panic_fmt
             at /rustc/de02101e6d949c4a9040211e9ce8c488a997497e\/src\libstd\panicking.rs:382
   7: std::panicking::rust_begin_panic
             at /rustc/de02101e6d949c4a9040211e9ce8c488a997497e\/src\libstd\panicking.rs:309
   8: core::panicking::panic_fmt
             at /rustc/de02101e6d949c4a9040211e9ce8c488a997497e\/src\libcore\panicking.rs:85
   9: core::result::unwrap_failed
  10: cli_v1::mock::clitools::test
  11: alloc::boxed::{{impl}}::call_once<(),FnOnce<()>>
             at /rustc/de02101e6d949c4a9040211e9ce8c488a997497e\src\liballoc\boxed.rs:746
  12: panic_unwind::__rust_maybe_catch_panic
             at /rustc/de02101e6d949c4a9040211e9ce8c488a997497e\/src\libpanic_unwind\lib.rs:82
  13: std::panicking::try
             at /rustc/de02101e6d949c4a9040211e9ce8c488a997497e\src\libstd\panicking.rs:273
  14: std::panic::catch_unwind
             at /rustc/de02101e6d949c4a9040211e9ce8c488a997497e\src\libstd\panic.rs:388
  15: test::run_test::run_test_inner::{{closure}}
             at /rustc/de02101e6d949c4a9040211e9ce8c488a997497e\/src\libtest\lib.rs:1466
note: Some details are omitted, run with `RUST_BACKTRACE=full` for a verbose backtrace.


failures:
    remove_toolchain_then_add_again

test result: FAILED. 0 passed; 1 failed; 0 ignored; 0 measured; 26 filtered out

error: test failed, to rerun pass '--test cli-v1'
```


<a id=tracing></a>

# Tracing

Similar to other tools in the Rust ecosystem like rustc and cargo,
rustup also provides observability/logging features via the `tracing` crate.

The verbosity of logs is controlled via the `RUSTUP_LOG` environment
variable using `tracing_subscriber`'s [directive syntax].

[directive syntax]: https://docs.rs/tracing-subscriber/latest/tracing_subscriber/filter/struct.EnvFilter.html#directives

## Console-based tracing

A `tracing_subscriber` that prints log lines directly to `stderr` is directly
available in the prebuilt version of rustup since v1.28.0.

For historical reasons, if `RUSTUP_LOG` is not set, this subscriber will print
the log lines in a format that mimics the "legacy" `stderr` output in older
versions of rustup:

```sh
> rustup default stable
info: using existing install for 'stable-aarch64-apple-darwin'
info: default toolchain set to 'stable-aarch64-apple-darwin'

  stable-aarch64-apple-darwin unchanged - rustc 1.79.0 (129f3b996 2024-06-10)
```

However, once `RUSTUP_LOG` is set to any value, rustup's "custom logging mode" will
be activated, and `tracing_subscriber`'s builtin output format will be used instead:

```sh
> RUSTUP_LOG=trace rustup default stable
2024-06-16T12:08:48.732894Z  INFO rustup::cli::common: using existing install for 'stable-aarch64-apple-darwin'
2024-06-16T12:08:48.739232Z  INFO rustup::cli::common: default toolchain set to 'stable-aarch64-apple-darwin'

  stable-aarch64-apple-darwin unchanged - rustc 1.79.0 (129f3b996 2024-06-10)
```

Please note that since `RUSTUP_LOG=trace` essentially accepts log lines from
all possible sources, you might sometimes see log lines coming from rustup's
dependencies, such as `hyper_util` in the following example:

```sh
> RUSTUP_LOG=trace rustup update
[..]
2024-06-16T12:12:45.569428Z TRACE hyper_util::client::legacy::client: http1 handshake complete, spawning background dispatcher task
2024-06-16T12:12:45.648682Z TRACE hyper_util::client::legacy::pool: pool dropped, dropping pooled (("https", static.rust-lang.org))

   stable-aarch64-apple-darwin unchanged - rustc 1.79.0 (129f3b996 2024-06-10)
  nightly-aarch64-apple-darwin unchanged - rustc 1.81.0-nightly (3cf924b93 2024-06-15)

2024-06-16T12:12:45.693350Z  INFO rustup::cli::rustup_mode: cleaning up downloads & tmp directories
```

It is also possible to limit the sources of the log lines and the desired
max level for each source. For example, set `RUSTUP_LOG=rustup=DEBUG` to
receive log lines only from `rustup` itself with a max verbosity of `DEBUG`.

## Opentelemetry tracing

> **Prerequisites:** Before following the instructions in this section,
> `protoc` must be installed, which can be downloaded from GitHub
> or installed via a package manager.

The feature `otel` can be used when building rustup to turn on Opentelemetry
tracing with an OLTP GRPC exporter.

This can be very useful for diagnosing performance or correctness issues in more
complicated scenarios.

The normal [OTLP environment
variables](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md)
can be used to customise its behaviour, but often the simplest thing is to just
run a Jaeger docker container on the same host:

```sh
docker run -d --name jaeger   -e COLLECTOR_ZIPKIN_HOST_PORT=:9411   -e COLLECTOR_OTLP_ENABLED=true   -p 6831:6831/udp   -p 6832:6832/udp   -p 5778:5778   -p 16686:16686   -p 4317:4317   -p 4318:4318   -p 14250:14250   -p 14268:14268   -p 14269:14269   -p 9411:9411   jaegertracing/all-in-one:latest
```

Then build `rustup-init` with tracing:

```sh
cargo build --features=otel
```

Run the operation you want to analyze. For example, we can now run `rustup show` with tracing:

```sh
RUSTUP_FORCE_ARG0="rustup" ./target/debug/rustup-init show
```

And [look in Jaeger for a trace](http://localhost:16686/search?service=rustup).

Tracing can also be used in tests to get a trace of the operations taken during the test.
To use this feature, build the project with `--features=otel,test`.

## Adding instrumentation

Instrumenting a currently uninstrumented function is mostly simply done like so:

```rust
#[tracing::instrument(level = "trace", err(level = "trace"), skip_all)]
```

Sometimes you might want to instrument a function only when the `otel` feature is enabled.
In this case, you will need to use conditional compilation with `cfg_attr`:

```rust
#[cfg_attr(feature="otel", tracing::instrument(level = "trace", err(level = "trace"), skip_all))]
```

`skip_all` is not required, but some core structs don't implement `Debug` yet, and
others have a lot of output in `Debug`: tracing adds some overheads, so keeping
spans lightweight can help avoid frequency bias in the results - where
parameters with large debug in frequently called functions show up as much
slower than they are.

Some good general heuristics:

- Do instrument slow blocking functions
- Do instrument functions with many callers or that call many different things,
  as these tend to help figure the puzzle of what-is-happening
- Default to not instrumenting thin shim functions (or at least, only instrument
  them temporarily while figuring out the shape of a problem)
- Be way of debug build timing - release optimisations make a huge difference,
  though debug is a lot faster to iterate on. If something isn't a problem in
  release don't pay it too much heed in debug.
