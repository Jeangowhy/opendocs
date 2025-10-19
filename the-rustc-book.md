# The Rustc Book

- [What is rustc?](#)
- [Command-line Arguments](#)
    - [Print Options](#)
    - [Codegen Options](#)
- [Jobserver](#)
- [Lints](#)
    - [Lint Levels](#)
    - [Lint Groups](#)
    - [Lint Listing](#)
        - [Allowed-by-default Lints](#)
        - [Warn-by-default Lints](#)
        - [Deny-by-default Lints](#)
- [JSON Output](#)
- [Tests](#)
- [Targets](#)
    - [Built-in Targets](#)
    - [Custom Targets](#)
    - [Known Issues](#)
- [Profile-guided Optimization](#)
- [Instrumentation-based Code Coverage](#)
- [Linker-plugin-based LTO](#)
- [Checking Conditional Configurations](#)
    - [Cargo Specifics](#)
- [Remap source paths](#)
- [Exploit Mitigations](#)
- [Symbol Mangling](#)
    - [v0 Symbol Format](#)
- [Contributing to `rustc`](#)

--------

- [Platform Support](#)
    - [Target Tier Policy](#)
    - [Template for Target-specific Documentation](#)
    - [arm64ec-pc-windows-msvc](#)
    - [\*-apple-darwin](#)
        - [i686-apple-darwin](#)
        - [x86_64h-apple-darwin](#)
        - [arm64e-apple-darwin](#)
    - [\*-apple-ios](#)
        - [\*-apple-ios-macabi](#)
        - [arm64e-apple-ios](#)
    - [\*-apple-tvos](#)
        - [arm64e-apple-tvos](#)
    - [\*-apple-watchos](#)
    - [\*-apple-visionos](#)
    - [aarch64-nintendo-switch-freestanding](#)
    - [aarch64-unknown-linux-musl](#)
    - [aarch64_be-unknown-none-softfloat](#)
    - [aarch64_be-unknown-linux-musl](#)
    - [amdgcn-amd-amdhsa](#)
    - [armeb-unknown-linux-gnueabi](#)
    - [arm-none-eabi](#)
      - [armv4t-none-eabi](#)
      - [armv5te-none-eabi](#)
      - [armv7r-none-eabi](#)
      - [armv8r-none-eabihf](#)
      - [thumbv6m-none-eabi](#)
      - [thumbv7em-none-eabi\*](#)
      - [thumbv7m-none-eabi](#)
      - [thumbv8m.base-none-eabi](#)
      - [thumbv8m.main-none-eabi\*](#)
    - [armv5te-unknown-linux-gnueabi](#)
    - [armv6k-nintendo-3ds](#)
    - [armv7-rtems-eabihf](#)
    - [armv7-sony-vita-newlibeabihf](#)
    - [armv7-unknown-linux-uclibceabi](#)
    - [armv7-unknown-linux-uclibceabihf](#)
    - [armv7a-vex-v5](#)
    - [\*-android and \*-androideabi](#)
    - [\*-linux-ohos](#)
    - [\*-hurd-gnu](#)
    - [aarch64-unknown-teeos](#)
    - [avr-none](#)
    - [\*-espidf](#)
    - [\*-unknown-fuchsia](#)
    - [\*-unknown-trusty](#)
    - [\*-kmc-solid_\*](#)
    - [csky-unknown-linux-gnuabiv2\*](#)
    - [hexagon-unknown-linux-musl](#)
    - [hexagon-unknown-none-elf](#)
    - [illumos](#)
    - [loongarch\*-unknown-linux-\*](#)
    - [loongarch\*-unknown-none\*](#)
    - [\*-lynxos178-\*](#)
    - [m68k-unknown-linux-gnu](#)
    - [m68k-unknown-none-elf](#)
    - [mips64-openwrt-linux-musl](#)
    - [mips64-unknown-linux-muslabi64](#)
    - [mipsel-sony-psx](#)
    - [mipsel-unknown-linux-gnu](#)
    - [mips\*-mti-none-elf](#)
    - [mipsisa\*r6\*-unknown-linux-gnu\*](#)
    - [nvptx64-nvidia-cuda](#)
    - [powerpc-unknown-openbsd](#)
    - [powerpc-unknown-linux-gnuspe](#)
    - [powerpc-unknown-linux-muslspe](#)
    - [powerpc64-ibm-aix](#)
    - [powerpc64-unknown-linux-musl](#)
    - [powerpc64le-unknown-linux-gnu](#)
    - [powerpc64le-unknown-linux-musl](#)
    - [riscv32e\*-unknown-none-elf](#)
    - [riscv32i\*-unknown-none-elf](#)
    - [riscv32im-risc0-zkvm-elf](#)
    - [riscv32imac-unknown-xous-elf](#)
    - [riscv64gc-unknown-linux-gnu](#)
    - [riscv64gc-unknown-linux-musl](#)
    - [riscv64a23-unknown-linux-gnu](#)
    - [s390x-unknown-linux-gnu](#)
    - [s390x-unknown-linux-musl](#)
    - [sparc-unknown-none-elf](#)
    - [solaris](#)
    - [\*-nto-qnx-\*](#)
    - [\*-unikraft-linux-musl](#)
    - [\*-unknown-hermit](#)
    - [\*-unknown-freebsd](#)
    - [\*-unknown-managarm-mlibc](#)
    - [\*-unknown-netbsd\*](#)
    - [\*-unknown-openbsd](#)
    - [\*-unknown-redox](#)
    - [\*-unknown-uefi](#)
    - [\*-unknown-windows-msvc](#)
    - [\*-uwp-windows-msvc](#)
    - [\*-wrs-vxworks](#)
    - [wasm32-wasip1](#)
    - [wasm32-wasip1-threads](#)
    - [wasm32-wasip2](#)
    - [wasm32-wali-linux-musl](#)
    - [wasm32-unknown-emscripten](#)
    - [wasm32-unknown-unknown](#)
    - [wasm32v1-none](#)
    - [wasm64-unknown-unknown](#)
    - [windows-gnu](#)
    - [windows-gnullvm](#)
    - [\*-win7-windows-gnu](#)
    - [\*-win7-windows-msvc](#)
    - [x86_64-fortanix-unknown-sgx](#)
    - [x86_64-pc-cygwin](#)
    - [x86_64-unknown-linux-none](#)
    - [x86_64-unknown-none](#)
    - [xtensa-\*-none-elf](#)
    - [\*-nuttx-\*](#)


<a id=what_is_rustc></a>

# What is rustc?

Welcome to "The rustc book"! `rustc` is the compiler for the Rust programming
language, provided by the project itself. Compilers take your source code and
produce binary code, either as a library or executable.

Most Rust programmers don't invoke `rustc` directly, but instead do it through
[Cargo][Cargo]. It's all in service of `rustc` though! If you
want to see how Cargo calls `rustc`, you can

```bash
$ cargo build --verbose
```

And it will print out each `rustc` invocation. This book can help you
understand what each of these options does. Additionally, while most
Rustaceans use Cargo, not all do: sometimes they integrate `rustc` into other
build systems. This book should provide a guide to all of the options you'd
need to do so.

## Basic usage

Let's say you've got a little hello world program in a file `hello.rs`:

```rust
fn main() {
    println!("Hello, world!");
}
```

To turn this source code into an executable, you can use `rustc`:

```bash
$ rustc hello.rs
$ ./hello # on a *NIX
$ .\hello.exe # on Windows
```

Note that we only ever pass `rustc` the *crate root*, not every file we wish
to compile. For example, if we had a `main.rs` that looked like this:

```rust,ignore (needs-multiple-files)
mod foo;

fn main() {
    foo::hello();
}
```

And a `foo.rs` that had this:

```rust,no_run
pub fn hello() {
    println!("Hello, world!");
}
```

To compile this, we'd run this command:

```bash
$ rustc main.rs
```

No need to tell `rustc` about `foo.rs`; the `mod` statements give it
everything that it needs. This is different than how you would use a C
compiler, where you invoke the compiler on each file, and then link
everything together. In other words, the *crate* is a translation unit, not a
particular module.

<a id=command_line_arguments></a>

# Command-line Arguments

Here's a list of command-line arguments to `rustc` and what they do.

<a id="option-help"></a>

## `-h`/`--help`: get help

This flag will print out help information for `rustc`.

<a id="option-cfg"></a>

## `--cfg`: configure the compilation environment

This flag can turn on or off various `#[cfg]` settings for [conditional
compilation](https://doc.rust-lang.org//conditional-compilation.html).

The value can either be a single identifier or two identifiers separated by `=`.

For examples, `--cfg 'verbose'` or `--cfg 'feature="serde"'`. These correspond
to `#[cfg(verbose)]` and `#[cfg(feature = "serde")]` respectively.

<a id="option-check-cfg"></a>

## `--check-cfg`: configure compile-time checking of conditional compilation

This flag enables checking conditional configurations of the crate at compile-time,
specifically it helps configure the set of expected cfg names and values, in order
to check that every _reachable_ `#[cfg]` matches the expected config names and values.

This is different from the `--cfg` flag above which activates some config but do
not expect them. This is useful to prevent stalled conditions, typos, ...

Refer to the [Checking conditional configurations](#check_cfg) of this book
for further details and explanation.

For examples, `--check-cfg 'cfg(verbose)'` or `--check-cfg 'cfg(feature, values("serde"))'`.
These correspond to `#[cfg(verbose)]` and `#[cfg(feature = "serde")]` respectively.

<a id="option-l-search-path"></a>

## `-L`: add a directory to the library search path

The `-L` flag adds a path to search for external crates and libraries.

The kind of search path can optionally be specified with the form 
`-L KIND=PATH` where `KIND` may be one of:

- `dependency` — Only search for transitive dependencies in this directory.
- `crate` — Only search for this crate's direct dependencies in this
  directory.
- `native` — Only search for native libraries in this directory.
- `framework` — Only search for macOS frameworks in this directory.
- `all` — Search for all library kinds in this directory, except frameworks. This is the default
  if `KIND` is not specified.

<a id="option-l-link-lib"></a>

## `-l`: link the generated crate to a native library

Syntax: `-l [KIND[:MODIFIERS]=]NAME[:RENAME]`.

This flag allows you to specify linking to a specific native library when 
building a crate.

The kind of library can optionally be specified with the form `-l KIND=lib`
where `KIND` may be one of:

- `dylib` — A native dynamic library.
- `static` — A native static library (such as a `.a` archive).
- `framework` — A macOS framework.

If the kind is specified, then linking modifiers can be attached to it.
Modifiers are specified as a comma-delimited string with each modifier 
prefixed with either a `+` or `-` to indicate that the modifier is enabled 
or disabled, respectively.
Specifying multiple `modifiers` arguments in a single `link` attribute,
or multiple identical modifiers in the same `modifiers` argument is not 
currently supported. \
Example: `-l static:+whole-archive=mylib`.

The kind of library and the modifiers can also be specified in a 
[`#[link]` attribute][link-attribute]. If the kind is not specified in the `link`
attribute or on the command-line, it will link a dynamic library by default,
except when building a static executable. If the kind is specified on the
command-line, it will override the kind specified in a `link` attribute.

The name used in a `link` attribute may be overridden using the form `-l
ATTR_NAME:LINK_NAME` where `ATTR_NAME` is the name in the `link` attribute,
and `LINK_NAME` is the name of the actual library that will be linked.

[link-attribute]: https://doc.rust-lang.org/reference/items/external-blocks.html#the-link-attribute

### Linking modifiers: `whole-archive`

This modifier is only compatible with the `static` linking kind.
Using any other kind will result in a compiler error.

`+whole-archive` means that the static library is linked as a whole archive
without throwing any object files away.

This modifier translates to `--whole-archive` for `ld`-like linkers,
to `/WHOLEARCHIVE` for `link.exe`, and to `-force_load` for `ld64`.
The modifier does nothing for linkers that don't support it.

The default for this modifier is `-whole-archive`.

### Linking modifiers: `bundle`

This modifier is only compatible with the `static` linking kind.
Using any other kind will result in a compiler error.

When building a rlib or staticlib `+bundle` means that the native static 
library will be packed into the rlib or staticlib archive, and then retrieved 
from there during linking of the final binary.

When building a rlib `-bundle` means that the native static library is 
registered as a dependency of that rlib "by name", and object files from it 
are included only during linking of the final binary, the file search by that 
name is also performed during final linking.

When building a staticlib `-bundle` means that the native static library is 
simply not included into the archive and some higher level build system will 
need to add it later during linking of the final binary.

This modifier has no effect when building other targets like executables or dynamic libraries.

The default for this modifier is `+bundle`.

### Linking modifiers: `verbatim`

This modifier is compatible with all linking kinds.

`+verbatim` means that rustc itself won't add any target-specified library 
prefixes or suffixes (like `lib` or `.a`) to the library name, and will try 
its best to ask for the same thing from the linker.

For `ld`-like linkers supporting GNU extensions rustc will use the `-l:filename` syntax (note the
colon) when passing the library, so the linker won't add any prefixes or suffixes to it.
See [`-l namespec`](https://sourceware.org/binutils/docs/ld/Options.html) in ld documentation for
more details. \
For linkers not supporting any verbatim modifiers (e.g. `link.exe` or `ld64`) the library name will
be passed as is. So the most reliable cross-platform use scenarios for this option are when no
linker is involved, for example bundling native libraries into rlibs.

`-verbatim` means that rustc will either add a target-specific prefix and suffix to the library
name before passing it to linker, or won't prevent linker from implicitly adding it. \
In case of `raw-dylib` kind in particular `.dll` will be added to the library name on Windows.

The default for this modifier is `-verbatim`.

NOTE: Even with `+verbatim` and `-l:filename` syntax `ld`-like linkers do not typically support
passing absolute paths to libraries. Usually such paths need to be passed as input files without
using any options like `-l`, e.g. `ld /my/absolute/path`. \
`-Clink-arg=/my/absolute/path` can be used for doing this from stable `rustc`.

<a id="option-crate-type"></a>

## `--crate-type`: a list of types of crates for the compiler to emit

This instructs `rustc` on which crate type to build. This flag accepts a
comma-separated list of values, and may be specified multiple times. The valid
crate types are:

- `lib` — Generates a library kind preferred by the compiler, currently
  defaults to `rlib`.
- `rlib` — A Rust static library.
- `staticlib` — A native static library.
- `dylib` — A Rust dynamic library.
- `cdylib` — A native dynamic library.
- `bin` — A runnable executable program.
- `proc-macro` — Generates a format suitable for a procedural macro library
  that may be loaded by the compiler.

The crate type may be specified with the [`crate_type` attribute][crate_type].
The `--crate-type` command-line value will override the `crate_type`
attribute.

More details may be found in the [linkage chapter] of the reference.

[linkage chapter]: https://doc.rust-lang.org/reference/linkage.html
[crate_type]: https://doc.rust-lang.org/reference/linkage.html

<a id="option-crate-name"></a>

## `--crate-name`: specify the name of the crate being built

This informs `rustc` of the name of your crate.

<a id="option-edition"></a>

## `--edition`: specify the edition to use

This flag takes a value of `2015`, `2018`,`2021`, or `2024`. The default is `2015`. More
information about editions may be found in the [edition guide].

[edition guide]: https://doc.rust-lang.org/edition-guide/introduction.html

<a id="option-emit"></a>

## `--emit`: specifies the types of output files to generate

This flag controls the types of output files generated by the compiler. It
accepts a comma-separated list of values, and may be specified multiple times.
The valid emit kinds are:

- `asm` — Generates a file with the crate's assembly code. The default output
  filename is `CRATE_NAME.s`.
- `dep-info` — Generates a file with Makefile syntax that indicates all the
  source files that were loaded to generate the crate. The default output
  filename is `CRATE_NAME.d`.
- `link` — Generates the crates specified by `--crate-type`. The default
  output filenames depend on the crate type and platform. This is the default
  if `--emit` is not specified.
- `llvm-bc` — Generates a binary file containing the [LLVM bitcode]. The
  default output filename is `CRATE_NAME.bc`.
- `llvm-ir` — Generates a file containing [LLVM IR]. The default output
  filename is `CRATE_NAME.ll`.
- `metadata` — Generates a file containing metadata about the crate. The
  default output filename is `libCRATE_NAME.rmeta`.
- `mir` — Generates a file containing rustc's mid-level intermediate
  representation. The default output filename is `CRATE_NAME.mir`.
- `obj` — Generates a native object file. The default output filename is
  `CRATE_NAME.o`.

The output filename can be set with the [`-o` flag](#option-o-output). A
suffix may be added to the filename with the
[`-C extra-filename` flag](#extra-filename).

Output files are written to the current directory unless the
[`--out-dir` flag](#option-out-dir) is used.

[LLVM bitcode]: https://llvm.org/docs/BitCodeFormat.html
[LLVM IR]: https://llvm.org/docs/LangRef.html

### Custom paths for individual emit kinds

Each emit type can optionally be followed by `=` to specify an explicit output
path that only applies to the output of that type. For example:

- `--emit=link,dep-info=/path/to/dep-info.d`
  - Emit the crate itself as normal,
    and also emit dependency info to the specified path.
- `--emit=llvm-ir=-,mir`
  - Emit MIR to the default filename (based on crate name),
    and emit LLVM IR to stdout.

### Emitting to stdout

When using `--emit` or [`-o`](#option-o-output), output can be sent to stdout
by specifying `-` as the path (e.g. `-o -`).

Binary output types can only be written to stdout if it is not a tty.
Text output types (`asm`, `dep-info`, `llvm-ir` and `mir`) can be written to
stdout regardless of whether it is a tty or not.

Only one type of output can be written to stdout. Attempting to write multiple
types to stdout at the same time will result in an error.

<a id="option-print"></a>

## `--print`: print compiler information

This flag will allow you to set [print options](#command_line_arguments_print_options).

<a id="option-g-debug"></a>

## `-g`: include debug information

A synonym for [`-C debuginfo=2`](#debuginfo).

<a id="option-o-optimize"></a>

## `-O`: optimize your code

A synonym for [`-C opt-level=3`](#opt-level).

<a id="option-o-output"></a>

## `-o`: filename of the output

This flag controls the output filename.

<a id="option-out-dir"></a>

## `--out-dir`: directory to write the output in

The outputted crate will be written to this directory. This flag is ignored if
the [`-o` flag](#option-o-output) is used.

<a id="option-explain"></a>

## `--explain`: provide a detailed explanation of an error message

Each error of `rustc`'s comes with an error code; this will print
out a longer explanation of a given error.

<a id="option-test"></a>

## `--test`: build a test harness

When compiling this crate, `rustc` will ignore your `main` function
and instead produce a test harness. See the [Tests chapter](#tests_index)
for more information about tests.

<a id="option-target"></a>

## `--target`: select a target triple to build

This controls which [target](#targets_index) to produce.

<a id="option-w-warn"></a>

## `-W`: set lint warnings

This flag will set which lints should be set to the [warn level](#warn).

_Note:_ The order of these lint level arguments is taken into account, see [lint level via compiler flag](#via-compiler-flag) for more information.

<a id="option-force-warn"></a>

## `--force-warn`: force a lint to warn

This flag sets the given lint to the [forced warn level](#force-warn) and the level cannot be overridden, even ignoring the [lint caps](#capping-lints).

<a id="option-a-allow"></a>

## `-A`: set lint allowed

This flag will set which lints should be set to the [allow level](#allow).

_Note:_ The order of these lint level arguments is taken into account, see [lint level via compiler flag](#via-compiler-flag) for more information.

<a id="option-d-deny"></a>

## `-D`: set lint denied

This flag will set which lints should be set to the [deny level](#deny).

_Note:_ The order of these lint level arguments is taken into account, see [lint level via compiler flag](#via-compiler-flag) for more information.

<a id="option-f-forbid"></a>

## `-F`: set lint forbidden

This flag will set which lints should be set to the [forbid level](#forbid).

_Note:_ The order of these lint level arguments is taken into account, see [lint level via compiler flag](#via-compiler-flag) for more information.

<a id="option-z-unstable"></a>

## `-Z`: set unstable options

This flag will allow you to set unstable options of rustc. In order to set multiple options,
the -Z flag can be used multiple times. For example: `rustc -Z verbose-internals -Z time-passes`.
Specifying options with -Z is only available on nightly. To view all available options
run: `rustc -Z help`, or see [The Unstable Book](https://doc.rust-lang.org/unstable-book/index.html).

<a id="option-cap-lints"></a>

## `--cap-lints`: set the most restrictive lint level

This flag lets you 'cap' lints, for more, [see here](#capping-lints).

<a id="option-codegen"></a>

## `-C`/`--codegen`: code generation options

This flag will allow you to set [codegen options](#codegen_options_index).

<a id="option-version"></a>

## `-V`/`--version`: print a version

This flag will print out `rustc`'s version.

<a id="option-verbose"></a>

## `-v`/`--verbose`: use verbose output

This flag, when combined with other flags, makes them produce extra output.

<a id="option-extern"></a>

## `--extern`: specify where an external library is located

This flag allows you to pass the name and location for an external crate of a
direct dependency. Indirect dependencies (dependencies of dependencies) are
located using the [`-L` flag](#option-l-search-path). The given crate name is
added to the [extern prelude], similar to specifying `extern crate` within the
root module. The given crate name does not need to match the name
the library was built with.

Specifying `--extern` has one behavior difference from `extern crate`:
`--extern` merely makes the crate a _candidate_ for being linked; it does not
actually link it unless it's actively used. In rare occasions you may wish
to ensure a crate is linked even if you don't actively use it from your
code: for example, if it changes the global allocator or if it contains
`#[no_mangle]` symbols for use by other programming languages. In such
cases you'll need to use `extern crate`.

This flag may be specified multiple times. This flag takes an argument with
either of the following formats:

* `CRATENAME=PATH` — Indicates the given crate is found at the given path.
* `CRATENAME` — Indicates the given crate may be found in the search path,
  such as within the sysroot or via the `-L` flag.

The same crate name may be specified multiple times for different crate types.
If both an `rlib` and `dylib` are found, an internal algorithm is used to
decide which to use for linking. The [`-C prefer-dynamic` flag][prefer-dynamic]
may be used to influence which is used.

If the same crate name is specified with and without a path, the one with the
path is used and the pathless flag has no effect.

[extern prelude]: https://doc.rust-lang.org/reference/names/preludes.html#extern-prelude
[prefer-dynamic]: #prefer-dynamic

<a id="option-sysroot"></a>

## `--sysroot`: Override the system root

The "sysroot" is where `rustc` looks for the crates that come with the Rust
distribution; this flag allows that to be overridden.

<a id="option-error-format"></a>

## `--error-format`: control how errors are produced

This flag lets you control the format of messages. Messages are printed to
stderr. The valid options are:

- `human` — Human-readable output. This is the default.
- `json` — Structured JSON output. See [the JSON chapter] for more detail.
- `short` — Short, one-line messages.

<a id="option-color"></a>

## `--color`: configure coloring of output

This flag lets you control color settings of the output. The valid options
are:

- `auto` — Use colors if output goes to a tty. This is the default.
- `always` — Always use colors.
- `never` — Never colorize output.

<a id="option-diagnostic-width"></a>

## `--diagnostic-width`: specify the terminal width for diagnostics

This flag takes a number that specifies the width of the terminal in characters.
Formatting of diagnostics will take the width into consideration to make them better fit on the screen.

<a id="option-remap-path-prefix"></a>

## `--remap-path-prefix`: remap source paths in output

Remap source path prefixes in all output, including compiler diagnostics,
debug information, macro expansions, etc. It takes a value of the form `FROM=TO`
where a path prefix equal to `FROM` is rewritten to the value `TO`. This flag may be
specified multiple times.

Refer to the [Remap source paths](#remap_source_paths) section of this book for
further details and explanation.

<a id="option-json"></a>

## `--json`: configure json messages printed by the compiler

When the [`--error-format=json` option](#option-error-format) is passed to
rustc then all of the compiler's diagnostic output will be emitted in the form
of JSON blobs. The `--json` argument can be used in conjunction with
`--error-format=json` to configure what the JSON blobs contain as well as
which ones are emitted.

With `--error-format=json` the compiler will always emit any compiler errors as
a JSON blob, but the following options are also available to the `--json` flag
to customize the output:

- `diagnostic-short` - json blobs for diagnostic messages should use the "short"
  rendering instead of the normal "human" default. This means that the output of
  `--error-format=short` will be embedded into the JSON diagnostics instead of
  the default `--error-format=human`.

- `diagnostic-rendered-ansi` - by default JSON blobs in their `rendered` field
  will contain a plain text rendering of the diagnostic. This option instead
  indicates that the diagnostic should have embedded ANSI color codes intended
  to be used to colorize the message in the manner rustc typically already does
  for terminal outputs. Note that this is usefully combined with crates like
  [`fwdansi`](https://crates.io/crates/fwdansi) to translate these ANSI codes
  on Windows to console commands or
  [`strip-ansi-escapes`](https://crates.io/crates/strip-ansi-escapes) if you'd
  like to optionally remove the ansi colors afterwards.

- `artifacts` - this instructs rustc to emit a JSON blob for each artifact that
  is emitted. An artifact corresponds to a request from the [`--emit` CLI
  argument](#option-emit), and as soon as the artifact is available on the
  filesystem a notification will be emitted.

- `future-incompat` - includes a JSON message that contains a report if the
  crate contains any code that may fail to compile in the future.

- `timings` - output a JSON message when a certain compilation "section"
  (such as frontend analysis, code generation, linking) begins or ends.

Note that it is invalid to combine the `--json` argument with the
[`--color`](#option-color) argument, and it is required to combine `--json`
with `--error-format=json`.

See [the JSON chapter] for more detail.

<a id="at-path"></a>

## `@path`: load command-line flags from a path

If you specify `@path` on the command-line, then it will open `path` and read
command line options from it. These options are one per line; a blank line indicates
an empty option. The file can use Unix or Windows style line endings, and must be
encoded as UTF-8.

[the JSON chapter]: #json

<a id=command_line_arguments_print_options></a>

# Print Options

All of these options are passed to `rustc` via the `--print` flag.

Those options prints out various information about the compiler. Multiple options can be
specified, and the information is printed in the order the options are specified.

Specifying an option will usually disable the [`--emit`](#option-emit)
step and will only print the requested information.

A filepath may optionally be specified for each requested information kind, in the format
`--print KIND=PATH`, just like for `--emit`. When a path is specified, information will be
written there instead of to stdout.

## `crate-name`

The name of the crate.

Generally coming from either from the `#![crate_name = "..."]` attribute,
[`--crate-name` flag](#option-crate-name) or the filename.

Example:

```bash
$ rustc --print crate-name --crate-name my_crate a.rs
my_crate
```

## `file-names`

The names of the files created by the `link` emit kind.

## `sysroot`

Absolute path to the sysroot.

Example (with rustup and the stable toolchain):

```bash
$ rustc --print sysroot a.rs
/home/[REDACTED]/.rustup/toolchains/stable-x86_64-unknown-linux-gnu
```

## `target-libdir`

Path to the target libdir.

Example (with rustup and the stable toolchain):

```bash
$ rustc --print target-libdir a.rs
/home/[REDACTED]/.rustup/toolchains/beta-x86_64-unknown-linux-gnu/lib/rustlib/x86_64-unknown-linux-gnu/lib
```

## `host-tuple`

The target-tuple string of the host compiler.

Example:

```bash
$ rustc --print host-tuple a.rs
x86_64-unknown-linux-gnu
```

Example with the `--target` flag:

```bash
$ rustc --print host-tuple --target "armv7-unknown-linux-gnueabihf" a.rs
x86_64-unknown-linux-gnu
```

## `cfg`

List of cfg values. See [conditional compilation] for more information about cfg values.

Example (for `x86_64-unknown-linux-gnu`):

```bash
$ rustc --print cfg a.rs
debug_assertions
panic="unwind"
target_abi=""
target_arch="x86_64"
target_endian="little"
target_env="gnu"
target_family="unix"
target_feature="fxsr"
target_feature="sse"
target_feature="sse2"
target_has_atomic="16"
target_has_atomic="32"
target_has_atomic="64"
target_has_atomic="8"
target_has_atomic="ptr"
target_os="linux"
target_pointer_width="64"
target_vendor="unknown"
unix
```

## `target-list`

List of known targets. The target may be selected with the `--target` flag.

## `target-cpus`

List of available CPU values for the current target. The target CPU may be selected with
the [`-C target-cpu=val` flag](#target-cpu).

## `target-features`

List of available target features for the *current target*.

Target features may be enabled with the **unsafe**
[`-C target-feature=val` flag](#target-feature).

See [known issues](#targets_known_issues) for more details.

## `relocation-models`

List of relocation models. Relocation models may be selected with the
[`-C relocation-model=val` flag](#relocation-model).

Example:

```bash
$ rustc --print relocation-models a.rs
Available relocation models:
    static
    pic
    pie
    dynamic-no-pic
    ropi
    rwpi
    ropi-rwpi
    default
```

## `code-models`

List of code models. Code models may be selected with the
[`-C code-model=val` flag](#code-model).

Example:

```bash
$ rustc --print code-models a.rs
Available code models:
    tiny
    small
    kernel
    medium
    large
```

## `tls-models`

List of Thread Local Storage models supported. The model may be selected with the
`-Z tls-model=val` flag.

Example:

```bash
$ rustc --print tls-models a.rs
Available TLS models:
    global-dynamic
    local-dynamic
    initial-exec
    local-exec
    emulated
```

## `native-static-libs`

This may be used when creating a `staticlib` crate type.

If this is the only flag, it will perform a full compilation and include a diagnostic note
that indicates the linker flags to use when linking the resulting static library.

The note starts with the text `native-static-libs:` to make it easier to fetch the output.

Example:

```bash
$ rustc --print native-static-libs --crate-type staticlib a.rs
note: link against the following native artifacts when linking against this static library. The order and any duplication can be significant on some platforms.

note: native-static-libs: -lgcc_s -lutil [REDACTED] -lpthread -lm -ldl -lc
```

## `link-args`

This flag does not disable the `--emit` step. This can be useful when debugging linker options.

When linking, this flag causes `rustc` to print the full linker invocation in a human-readable
form. The exact format of this debugging output is not a stable guarantee, other than that it
will include the linker executable and the text of each command-line argument passed to the
linker.

## `deployment-target`

The currently selected [deployment target] (or minimum OS version) for the selected Apple
platform target.

This value can be used or passed along to other components alongside a Rust build that need
this information, such as C compilers. This returns rustc's minimum supported deployment target
if no `*_DEPLOYMENT_TARGET` variable is present in the environment, or otherwise returns the
variable's parsed value.

[conditional compilation]: https://doc.rust-lang.org/reference/conditional-compilation.html
[deployment target]: https://developer.apple.com/library/archive/documentation/DeveloperTools/Conceptual/cross_development/Configuring/configuring.html

<a id=codegen_options_index></a>

# Codegen Options

All of these options are passed to `rustc` via the `-C` flag, short for "codegen." You can see
a version of this list for your exact compiler by running `rustc -C help`.

## ar

This option is deprecated and does nothing.

## code-model

This option lets you choose which code model to use. \
Code models put constraints on address ranges that the program and its symbols may use. \
With smaller address ranges machine instructions
may be able to use more compact addressing modes.

The specific ranges depend on target architectures and addressing modes available to them. \
For x86 more detailed description of its code models can be found in
[System V Application Binary Interface](https://github.com/hjl-tools/x86-psABI/wiki/x86-64-psABI-1.0.pdf)
specification.

Supported values for this option are:

- `tiny` - Tiny code model.
- `small` - Small code model. This is the default model for majority of supported targets.
- `kernel` - Kernel code model.
- `medium` - Medium code model.
- `large` - Large code model.

Supported values can also be discovered by running `rustc --print code-models`.

## codegen-units

This flag controls the maximum number of code generation units the crate is
split into. It takes an integer greater than 0.

When a crate is split into multiple codegen units, LLVM is able to process
them in parallel. Increasing parallelism may speed up compile times, but may
also produce slower code. Setting this to 1 may improve the performance of
generated code, but may be slower to compile.

The default value, if not specified, is 16 for non-incremental builds. For
incremental builds the default is 256 which allows caching to be more granular.

## collapse-macro-debuginfo

This flag controls whether code locations from a macro definition are collapsed into a single
location associated with that macro's call site, when generating debuginfo for this crate.

This option, if passed, overrides both default collapsing behavior and `#[collapse_debuginfo]`
attributes in code.

* `y`, `yes`, `on`, `true`: collapse code locations in debuginfo.
* `n`, `no`, `off` or `false`: do not collapse code locations in debuginfo.
* `external`: collapse code locations in debuginfo only if the macro comes from a different crate.

## control-flow-guard

This flag controls whether LLVM enables the Windows [Control Flow
Guard](https://docs.microsoft.com/en-us/windows/win32/secbp/control-flow-guard)
platform security feature. This flag is currently ignored for non-Windows targets.
It takes one of the following values:

* `y`, `yes`, `on`, `true`, `checks`, or no value: enable Control Flow Guard.
* `nochecks`: emit Control Flow Guard metadata without runtime enforcement checks (this
should only be used for testing purposes as it does not provide security enforcement).
* `n`, `no`, `off`, `false`: do not enable Control Flow Guard (the default).

## debug-assertions

This flag lets you turn `cfg(debug_assertions)` [conditional
compilation](https://doc.rust-lang.org/reference/conditional-compilation.html#debug_assertions) on
or off. It takes one of the following values:

* `y`, `yes`, `on`, `true`, or no value: enable debug-assertions.
* `n`, `no`, `off` or `false`: disable debug-assertions.

If not specified, debug assertions are automatically enabled only if the
[opt-level](#opt-level) is 0.

## debuginfo

This flag controls the generation of debug information. It takes one of the
following values:

* `0` or `none`: no debug info at all (the default).
* `line-directives-only`: line info directives only. For the nvptx* targets this enables [profiling](https://reviews.llvm.org/D46061). For other use cases, `line-tables-only` is the better, more compatible choice.
* `line-tables-only`: line tables only. Generates the minimal amount of debug info for backtraces with filename/line number info, but not anything else, i.e. no variable or function parameter info.
* `1` or `limited`: debug info without type or variable-level information.
* `2` or `full`: full debug info.

Note: The [`-g` flag][option-g-debug] is an alias for `-C debuginfo=2`.

## default-linker-libraries

This flag controls whether or not the linker includes its default libraries.
It takes one of the following values:

* `y`, `yes`, `on`, `true`: include default libraries.
* `n`, `no`, `off` or `false` or no value: exclude default libraries (the default).

For example, for gcc flavor linkers, this issues the `-nodefaultlibs` flag to
the linker.

## dlltool

On `windows-gnu` targets, this flag controls which dlltool `rustc` invokes to
generate import libraries when using the [`raw-dylib` link kind](https://doc.rust-lang.org/reference/items/external-blocks.html#the-link-attribute).
It takes a path to [the dlltool executable](https://sourceware.org/binutils/docs/binutils/dlltool.html).
If this flag is not specified, a dlltool executable will be inferred based on
the host environment and target.

## dwarf-version

This option controls the version of DWARF that the compiler emits, on platforms
that use DWARF to encode debug information. It takes one of the following
values:

* `2`: DWARF version 2 (the default on certain platforms, like Android).
* `3`: DWARF version 3 (the default on certain platforms, like AIX).
* `4`: DWARF version 4 (the default on most platforms, like Linux & macOS).
* `5`: DWARF version 5.

DWARF version 1 is not supported.

## embed-bitcode

This flag controls whether or not the compiler embeds LLVM bitcode into object
files. It takes one of the following values:

* `y`, `yes`, `on`, `true` or no value: put bitcode in rlibs (the default).
* `n`, `no`, `off` or `false`: omit bitcode from rlibs.

LLVM bitcode is required when rustc is performing link-time optimization (LTO).
Embedded bitcode will appear in rustc-generated object files inside of a section
whose name is defined by the target platform. Most of the time this is `.llvmbc`.

The use of `-C embed-bitcode=no` can significantly improve compile times and
reduce generated file sizes if your compilation does not actually need bitcode
(e.g. if you're not performing LTO). For these reasons, Cargo uses `-C embed-bitcode=no`
whenever possible. Likewise, if you are building directly with `rustc` we recommend
using `-C embed-bitcode=no` whenever you are not using LTO.

If combined with `-C lto`, `-C embed-bitcode=no` will cause `rustc` to abort
at start-up, because the combination is invalid.

> **Note**: if you're building Rust code with LTO then you probably don't even
> need the `embed-bitcode` option turned on. You'll likely want to use
> `-Clinker-plugin-lto` instead which skips generating object files entirely and
> simply replaces object files with LLVM bitcode. The only purpose for
> `-Cembed-bitcode` is when you're generating an rlib that is both being used
> with and without LTO. For example Rust's standard library ships with embedded
> bitcode since users link to it both with and without LTO.
>
> This also may make you wonder why the default is `yes` for this option. The
> reason for that is that it's how it was for rustc 1.44 and prior. In 1.45 this
> option was added to turn off what had always been the default.

## extra-filename

This option allows you to put extra data in each output filename. It takes a
string to add as a suffix to the filename. See the [`--emit`
flag][option-emit] for more information.

## force-frame-pointers

This flag forces the use of frame pointers. It takes one of the following
values:

* `y`, `yes`, `on`, `true` or no value: force-enable frame pointers.
* `n`, `no`, `off` or `false`: do not force-enable frame pointers. This does
  not necessarily mean frame pointers will be removed.

The default behaviour, if frame pointers are not force-enabled, depends on the
target.

## force-unwind-tables

This flag forces the generation of unwind tables. It takes one of the following
values:

* `y`, `yes`, `on`, `true` or no value: Unwind tables are forced to be generated.
* `n`, `no`, `off` or `false`: Unwind tables are not forced to be generated. If unwind
  tables are required by the target an error will be emitted.

The default if not specified depends on the target.

## incremental

This flag allows you to enable incremental compilation, which allows `rustc`
to save information after compiling a crate to be reused when recompiling the
crate, improving re-compile times. This takes a path to a directory where
incremental files will be stored.

Using incremental compilation inhibits certain optimizations (for example by increasing the amount of codegen units) and is therefore not recommended for release builds.

## inline-threshold

This option is deprecated and does nothing.

Consider using `-Cllvm-args=--inline-threshold=...`.

## instrument-coverage

This option enables instrumentation-based code coverage support. See the
chapter on [instrumentation-based code coverage] for more information.

Note that while the `-C instrument-coverage` option is stable, the profile data
format produced by the resulting instrumentation may change, and may not work
with coverage tools other than those built and shipped with the compiler.

## link-arg

This flag lets you append a single extra argument to the linker invocation.

"Append" is significant; you can pass this flag multiple times to add multiple arguments.

On Unix-like targets that use `cc` as the linker driver, use `-Clink-arg=-Wl,$ARG` to pass an argument to the actual linker.

## link-args

This flag lets you append multiple extra arguments to the linker invocation. The
options should be separated by spaces.

## link-dead-code

Tries to generate and link dead code that would otherwise not be generated or
linked. It takes one of the following values:

* `y`, `yes`, `on`, `true` or no value: try to keep dead code.
* `n`, `no`, `off` or `false`: remove dead code (the default).

This flag was historically used to help improve some older forms of code
coverage measurement. Its use is not recommended.

## link-self-contained

This flag controls whether the linker will use libraries and objects shipped with Rust instead of
those in the system.  It also controls which binary is used for the linker itself. This allows
overriding cases when detection fails or the user wants to use shipped libraries.

You can enable or disable the usage of any self-contained components using one of the following values:

* no value: rustc will use heuristic to disable self-contained mode if system has necessary tools.
* `y`, `yes`, `on`, `true`: use only libraries/objects shipped with Rust.
* `n`, `no`, `off` or `false`: rely on the user or the linker to provide non-Rust libraries/objects.

It is also possible to enable or disable specific self-contained components in a more granular way.
You can pass a comma-separated list of self-contained components, individually enabled
(`+component`) or disabled (`-component`).

Currently, only the `linker` granular option is stabilized, and only on the `x86_64-unknown-linux-gnu` target:
- `linker`: toggle the usage of self-contained linker binaries (linker, dlltool, and their necessary libraries)

Note that only the `-linker` opt-out is stable on the `x86_64-unknown-linux-gnu` target: `+linker` is
already the default on this target.

#### Implementation notes

On the `x86_64-unknown-linux-gnu` target, when using the default linker flavor (using `cc` as the
linker driver) and linker features (to try using `lld`), `rustc` will try to use the self-contained
linker by passing a `-B /path/to/sysroot/` link argument to the driver to find `rust-lld` in the
sysroot. For backwards-compatibility, and to limit name and `PATH` collisions, this is done using a
shim executable (the `lld-wrapper` tool) that forwards execution to the `rust-lld` executable itself.

## linker

This flag controls which linker `rustc` invokes to link your code. It takes a
path to the linker executable. If this flag is not specified, the linker will
be inferred based on the target. See also the [linker-flavor](#linker-flavor)
flag for another way to specify the linker.

Note that on Unix-like targets (for example, `*-unknown-linux-gnu` or `*-unknown-freebsd`)
the C compiler (for example `cc` or `clang`) is used as the "linker" here, serving as a linker driver.
It will invoke the actual linker with all the necessary flags to be able to link against the system libraries like libc.

## linker-features

The `-Clinker-features` flag allows enabling or disabling specific features used during linking.

These feature flags are a flexible extension mechanism that is complementary to linker flavors,
designed to avoid the combinatorial explosion of having to create a new set of flavors for each
linker feature we'd want to use.

The flag accepts a comma-separated list of features, individually enabled (`+feature`) or disabled
(`-feature`).

Currently only one is stable, and only on the `x86_64-unknown-linux-gnu` target:
- `lld`: to toggle trying to use the lld linker, either the system-installed binary, or the self-contained
  `rust-lld` linker (via the [`-Clink-self-contained=+linker`](#link-self-contained) flag).

For example, use:
- `-Clinker-features=+lld` to opt into using the `lld` linker, when possible (see the Implementation notes below)
- `-Clinker-features=-lld` to opt out instead, for targets where it is configured as the default linker

Note that only the `-lld` opt-out is stable on the `x86_64-unknown-linux-gnu` target: `+lld` is
already the default on this target.

#### Implementation notes

On the `x86_64-unknown-linux-gnu` target, when using the default linker flavor (using `cc` as the
linker driver), `rustc` will try to use lld by passing a `-fuse-ld=lld` link argument to the driver.
`rustc` will also try to detect if that _causes_ an error during linking (for example, if GCC is too
old to understand the flag, and returns an error) and will then retry linking without this argument,
as a fallback.

If the user _also_ passes a `-Clink-arg=-fuse-ld=$value`, both will be given to the linker
driver but the user's will be passed last, and would generally have priority over `rustc`'s.

## linker-flavor

This flag controls the linker flavor used by `rustc`. If a linker is given with
the [`-C linker` flag](#linker), then the linker flavor is inferred from the
value provided. If no linker is given then the linker flavor is used to
determine the linker to use. Every `rustc` target defaults to some linker
flavor. Valid options are:

* `em`: use [Emscripten `emcc`](https://emscripten.org/docs/tools_reference/emcc.html).
* `gcc`: use the `cc` executable, which is typically gcc or clang on many systems.
* `ld`: use the `ld` executable.
* `msvc`: use the `link.exe` executable from Microsoft Visual Studio MSVC.
* `wasm-ld`: use the [`wasm-ld`](https://lld.llvm.org/WebAssembly.html)
  executable, a port of LLVM `lld` for WebAssembly.
* `ld64.lld`: use the LLVM `lld` executable with the [`-flavor darwin`
  flag][lld-flavor] for Apple's `ld`.
* `ld.lld`: use the LLVM `lld` executable with the [`-flavor gnu`
  flag][lld-flavor] for GNU binutils' `ld`.
* `lld-link`: use the LLVM `lld` executable with the [`-flavor link`
  flag][lld-flavor] for Microsoft's `link.exe`.

[lld-flavor]: https://releases.llvm.org/12.0.0/tools/lld/docs/Driver.html

## linker-plugin-lto

This flag defers LTO optimizations to the linker. See
[linker-plugin-LTO](#linker_plugin_lto) for more details. It takes one of
the following values:

* `y`, `yes`, `on`, `true` or no value: enable linker plugin LTO.
* `n`, `no`, `off` or `false`: disable linker plugin LTO (the default).
* A path to the linker plugin.

More specifically this flag will cause the compiler to replace its typical
object file output with LLVM bitcode files. For example an rlib produced with
`-Clinker-plugin-lto` will still have `*.o` files in it, but they'll all be LLVM
bitcode instead of actual machine code. It is expected that the native platform
linker is capable of loading these LLVM bitcode files and generating code at
link time (typically after performing optimizations).

Note that rustc can also read its own object files produced with
`-Clinker-plugin-lto`. If an rlib is only ever going to get used later with a
`-Clto` compilation then you can pass `-Clinker-plugin-lto` to speed up
compilation and avoid generating object files that aren't used.

## llvm-args

This flag can be used to pass a list of arguments directly to LLVM.

The list must be separated by spaces.

Pass `--help` to see a list of options.

<div class="warning">

Because this flag directly talks to LLVM, it is not subject to the usual stability guarantees of rustc's CLI interface.

</div>

## lto

This flag controls whether LLVM uses [link time
optimizations](https://llvm.org/docs/LinkTimeOptimization.html) to produce
better optimized code, using whole-program analysis, at the cost of longer
linking time. It takes one of the following values:

* `y`, `yes`, `on`, `true`, `fat`, or no value: perform "fat" LTO which attempts to
  perform optimizations across all crates within the dependency graph.
* `thin`: perform ["thin"
  LTO](http://blog.llvm.org/2016/06/thinlto-scalable-and-incremental-lto.html).
  This is similar to "fat", but takes substantially less time to run while
  still achieving performance gains similar to "fat".
  For larger projects like the Rust compiler, ThinLTO can even result in better performance than fat LTO.
* `n`, `no`, `off`, `false`: disables LTO.

If `-C lto` is not specified, then the compiler will attempt to perform "thin
local LTO" which performs "thin" LTO on the local crate only across its
[codegen units](#codegen-units). When `-C lto` is not specified, LTO is
disabled if codegen units is 1 or optimizations are disabled ([`-C
opt-level=0`](#opt-level)). That is:

* When `-C lto` is not specified:
  * `codegen-units=1`: disable LTO.
  * `opt-level=0`: disable LTO.
* When `-C lto` is specified:
  * `lto`: 16 codegen units, perform fat LTO across crates.
  * `codegen-units=1` + `lto`: 1 codegen unit, fat LTO across crates.

See also [linker-plugin-lto](#linker-plugin-lto) for cross-language LTO.

## metadata

This option allows you to control the metadata used for symbol mangling. This
takes a space-separated list of strings. Mangled symbols will incorporate a
hash of the metadata. This may be used, for example, to differentiate symbols
between two different versions of the same crate being linked.

## no-prepopulate-passes

This flag tells the pass manager to use an empty list of passes, instead of the
usual pre-populated list of passes.

When combined with `-O --emit llvm-ir`, it can be used to see the optimized LLVM IR emitted by rustc before any optimizations are applied by LLVM.

## no-redzone

This flag allows you to disable [the
red zone](https://en.wikipedia.org/wiki/Red_zone_\(computing\)). It takes one
of the following values:

* `y`, `yes`, `on`, `true` or no value: disable the red zone.
* `n`, `no`, `off` or `false`: enable the red zone.

The default behaviour, if the flag is not specified, depends on the target.

## no-stack-check

This option is deprecated and does nothing.

## no-vectorize-loops

This flag disables [loop
vectorization](https://llvm.org/docs/Vectorizers.html#the-loop-vectorizer).

## no-vectorize-slp

This flag disables vectorization using
[superword-level
parallelism](https://llvm.org/docs/Vectorizers.html#the-slp-vectorizer).

## opt-level

This flag controls the optimization level.

* `0`: no optimizations, also turns on
  [`cfg(debug_assertions)`](#debug-assertions) (the default).
* `1`: basic optimizations.
* `2`: some optimizations.
* `3`: all optimizations.
* `s`: optimize for binary size.
* `z`: optimize for binary size, but more aggressively. Often results in larger binaries than `s`

Note: The [`-O` flag][option-o-optimize] is an alias for `-C opt-level=3`.

The default is `0`.

## overflow-checks

This flag allows you to control the behavior of [runtime integer
overflow](https://doc.rust-lang.org/reference/expressions/operator-expr.html#overflow). When
overflow-checks are enabled, a panic will occur on overflow. This flag takes
one of the following values:

* `y`, `yes`, `on`, `true` or no value: enable overflow checks.
* `n`, `no`, `off` or `false`: disable overflow checks.

If not specified, overflow checks are enabled if
[debug-assertions](#debug-assertions) are enabled, disabled otherwise.

## panic

This option lets you control what happens when the code panics.

* `abort`: terminate the process upon panic
* `unwind`: unwind the stack upon panic

If not specified, the default depends on the target.

If any crate in the crate graph uses `abort`, the final binary (`bin`, `dylib`, `cdylib`, `staticlib`) must also use `abort`.
If `std` is used as a `dylib` with `unwind`, the final binary must also use `unwind`.

## passes

This flag can be used to add extra [LLVM
passes](http://llvm.org/docs/Passes.html) to the compilation.

The list must be separated by spaces.

See also the [`no-prepopulate-passes`](#no-prepopulate-passes) flag.

<div class="warning">

Because this flag directly talks to LLVM, it not subject to the usual stability guarantees of rustc's CLI interface.

</div>

## prefer-dynamic

By default, `rustc` prefers to statically link dependencies. This option will
indicate that dynamic linking should be used if possible if both a static and
dynamic versions of a library are available.

There is [an internal algorithm](https://github.com/rust-lang/rust/blob/master/compiler/rustc_metadata/src/dependency_format.rs)
for determining whether or not it is possible to statically or dynamically link
with a dependency.

This flag takes one of the following values:

* `y`, `yes`, `on`, `true` or no value: prefer dynamic linking.
* `n`, `no`, `off` or `false`: prefer static linking (the default).

## profile-generate

This flag allows for creating instrumented binaries that will collect
profiling data for use with profile-guided optimization (PGO). The flag takes
an optional argument which is the path to a directory into which the
instrumented binary will emit the collected data. See the chapter on
[profile-guided optimization] for more information.

## profile-use

This flag specifies the profiling data file to be used for profile-guided
optimization (PGO). The flag takes a mandatory argument which is the path
to a valid `.profdata` file. See the chapter on
[profile-guided optimization] for more information.

## relocation-model

This option controls generation of
[position-independent code (PIC)](https://en.wikipedia.org/wiki/Position-independent_code).

Supported values for this option are:

#### Primary relocation models

- `static` - non-relocatable code, machine instructions may use absolute addressing modes.

- `pic` - fully relocatable position independent code,
machine instructions need to use relative addressing modes.  \
Equivalent to the "uppercase" `-fPIC` or `-fPIE` options in other compilers,
depending on the produced crate types.  \
This is the default model for majority of supported targets.

- `pie` - position independent executable, relocatable code but without support for symbol
interpositioning (replacing symbols by name using `LD_PRELOAD` and similar). Equivalent to the "uppercase" `-fPIE` option in other compilers. `pie`
code cannot be linked into shared libraries (you'll get a linking error on attempt to do this).

#### Special relocation models

- `dynamic-no-pic` - relocatable external references, non-relocatable code.  \
Only makes sense on Darwin and is rarely used.  \
If StackOverflow tells you to use this as an opt-out of PIC or PIE, don't believe it,
use `-C relocation-model=static` instead.
- `ropi`, `rwpi` and `ropi-rwpi` - relocatable code and read-only data, relocatable read-write data,
and combination of both, respectively.  \
Only makes sense for certain embedded ARM targets.
- `default` - relocation model default to the current target.  \
Only makes sense as an override for some other explicitly specified relocation model
previously set on the command line.

Supported values can also be discovered by running `rustc --print relocation-models`.

#### Linking effects

In addition to codegen effects, `relocation-model` has effects during linking.

If the relocation model is `pic` and the current target supports position-independent executables
(PIE), the linker will be instructed (`-pie`) to produce one.  \
If the target doesn't support both position-independent and statically linked executables,
then `-C target-feature=+crt-static` "wins" over `-C relocation-model=pic`,
and the linker is instructed (`-static`) to produce a statically linked
but not position-independent executable.

## relro-level

This flag controls what level of RELRO (Relocation Read-Only) is enabled. RELRO is an exploit
mitigation which makes the Global Offset Table (GOT) read-only.

Supported values for this option are:

- `off`: Dynamically linked functions are resolved lazily and the GOT is writable.
- `partial`: Dynamically linked functions are resolved lazily and written into the Procedure
  Linking Table (PLT) part of the GOT (`.got.plt`). The non-PLT part of the GOT (`.got`) is made
  read-only and both are moved to prevent writing from buffer overflows.
- `full`: Dynamically linked functions are resolved at the start of program execution and the
  Global Offset Table (`.got`/`.got.plt`) is populated eagerly and then made read-only. The GOT is
  also moved to prevent writing from buffer overflows. Full RELRO uses more memory and increases
  process startup time.

This flag is ignored on platforms where RELRO is not supported (targets which do not use the ELF
binary format), such as Windows or macOS. Each rustc target has its own default for RELRO. rustc
enables Full RELRO by default on platforms where it is supported.

## remark

This flag lets you print remarks for optimization passes.

The list of passes should be separated by spaces.

`all` will remark on every pass.

## rpath

This flag controls whether rustc sets an [`rpath`](https://en.wikipedia.org/wiki/Rpath) for the binary.
It takes one of the following values:

* `y`, `yes`, `on`, `true` or no value: enable rpath.
* `n`, `no`, `off` or `false`: disable rpath (the default).

This flag only does something on Unix-like platforms (Mach-O and ELF), it is ignored on other platforms.

If enabled, rustc will add output-relative (using `@load_path` on Mach-O and `$ORIGIN` on ELF respectively) rpaths to all `dylib` dependencies.

For example, for the following directory structure, with `libdep.so` being a `dylib` crate compiled with `-Cprefer-dynamic`:

```text
dep
 |- libdep.so
a.rs
```

`rustc a.rs --extern dep=dep/libdep.so -Crpath` will, on x86-64 Linux, result in approximately the following `DT_RUNPATH`: `$ORIGIN/dep:$ORIGIN/$RELATIVE_PATH_TO_SYSROOT/lib/rustlib/x86_64-unknown-linux-gnu/lib` (where `RELATIVE_PATH_TO_SYSROOT` depends on the build directory location).

This is primarily useful for local development, to ensure that all the `dylib` dependencies can be found appropriately.

To set the rpath to a different value (which can be useful for distribution), `-Clink-arg` with a platform-specific linker argument can be used to set the rpath directly.

## save-temps

This flag controls whether temporary files generated during compilation are
deleted once compilation finishes. It takes one of the following values:

* `y`, `yes`, `on`, `true` or no value: save temporary files.
* `n`, `no`, `off` or `false`: delete temporary files (the default).

## soft-float

This option controls whether `rustc` generates code that emulates floating
point instructions in software. It takes one of the following values:

* `y`, `yes`, `on`, `true` or no value: use soft floats.
* `n`, `no`, `off` or `false`: use hardware floats (the default).

This flag only works on `*eabihf` targets and **is unsound and deprecated**.

## split-debuginfo

This option controls the emission of "split debuginfo" for debug information
that `rustc` generates. The default behavior of this option is
platform-specific, and not all possible values for this option work on all
platforms. Possible values are:

* `off` - This is the default for platforms with ELF binaries and windows-gnu
  (not Windows MSVC and not macOS). This typically means that DWARF debug
  information can be found in the final artifact in sections of the executable.
  This option is not supported on Windows MSVC. On macOS this options prevents
  the final execution of `dsymutil` to generate debuginfo.

* `packed` - This is the default for Windows MSVC and macOS. The term
  "packed" here means that all the debug information is packed into a separate
  file from the main executable. On Windows MSVC this is a `*.pdb` file, on
  macOS this is a `*.dSYM` folder, and on other platforms this is a `*.dwp`
  file.

* `unpacked` - This means that debug information will be found in separate
  files for each compilation unit (object file). This is not supported on
  Windows MSVC. On macOS this means the original object files will contain
  debug information. On other Unix platforms this means that `*.dwo` files will
  contain debug information.

Note that all three options are supported on Linux and Apple platforms,
`packed` is supported on Windows-MSVC, and all other platforms support `off`.
Attempting to use an unsupported option requires using the nightly channel
with the `-Z unstable-options` flag.

## strip

The option `-C strip=val` controls stripping of debuginfo and similar auxiliary
data from binaries during linking.

Supported values for this option are:

- `none` - debuginfo and symbols are not modified.
- `debuginfo` - debuginfo sections and debuginfo symbols from the symbol table
  section are stripped at link time and are not copied to the produced binary.
  This should leave backtraces mostly-intact but may make using a debugger like
  gdb or lldb ineffectual. Prior to 1.79, this unintentionally disabled the
  generation of `*.pdb` files on MSVC, resulting in the absence of symbols.
- `symbols` - same as `debuginfo`, but the rest of the symbol table section is
  stripped as well, depending on platform support. On platforms which depend on
  this symbol table for backtraces, profiling, and similar, this can affect
  them so negatively as to make the trace incomprehensible. Programs which may
  be combined with others, such as CLI pipelines and developer tooling, or even
  anything which wants crash-reporting, should usually avoid `-Cstrip=symbols`.

Note that, at any level, removing debuginfo only necessarily impacts "friendly"
introspection. `-Cstrip` cannot be relied on as a meaningful security or
obfuscation measure, as disassemblers and decompilers can extract considerable
information even in the absence of symbols.

<a id=v0></a>

## symbol-mangling-version

This option controls the [name mangling] format for encoding Rust item names
for the purpose of generating object code and linking.

Supported values for this option are:

* `v0` — The "v0" mangling scheme.

The default, if not specified, will use a compiler-chosen default which may
change in the future.

See the [Symbol Mangling] chapter for details on symbol mangling and the mangling format.

[name mangling]: https://en.wikipedia.org/wiki/Name_mangling
[Symbol Mangling]: #symbol_mangling_index

## target-cpu

This instructs `rustc` to generate code specifically for a particular processor.

You can run `rustc --print target-cpus` to see the valid options to pass
and the default target CPU for the current build target.
Each target has a default base CPU. Special values include:

* `native` can be passed to use the processor of the host machine.
* `generic` refers to an LLVM target with minimal features but modern tuning.

## target-feature

Individual targets will support different features; this flag lets you control
enabling or disabling a feature. Each feature should be prefixed with a `+` to
enable it or `-` to disable it.

Features from multiple `-C target-feature` options are combined. \
Multiple features can be specified in a single option by separating them
with commas - `-C target-feature=+x,-y`. \
If some feature is specified more than once with both `+` and `-`,
then values passed later override values passed earlier. \
For example, `-C target-feature=+x,-y,+z -Ctarget-feature=-x,+y`
is equivalent to `-C target-feature=-x,+y,+z`.

To see the valid options and an example of use, run `rustc --print
target-features`.

Using this flag is unsafe and might result in [undefined runtime
behavior](#targets_known_issues).

See also the [`target_feature`
attribute](https://doc.rust-lang.org/reference/attributes/codegen.html#the-target_feature-attribute)
for controlling features per-function.

This also supports the feature `+crt-static` and `-crt-static` to control
[static C runtime linkage](https://doc.rust-lang.org/reference/linkage.html#static-and-dynamic-c-runtimes).

Each target and [`target-cpu`](#target-cpu) has a default set of enabled
features.

## tune-cpu

This instructs `rustc` to schedule code specifically for a particular
processor. This does not affect the compatibility (instruction sets or ABI),
but should make your code slightly more efficient on the selected CPU.

The valid options are the same as those for [`target-cpu`](#target-cpu).
The default is `None`, which LLVM translates as the `target-cpu`.

This is an unstable option. Use `-Z tune-cpu=machine` to specify a value.

Due to limitations in LLVM (12.0.0-git9218f92), this option is currently
effective only for x86 targets.

[option-emit]: #option-emit
[option-o-optimize]: #option-o-optimize
[instrumentation-based code coverage]: #instrument_coverage
[profile-guided optimization]: #profile_guided_optimization
[option-g-debug]: #option-g-debug

<a id=jobserver></a>

# Jobserver

Internally, `rustc` may take advantage of parallelism. `rustc` will coordinate
with the build system calling it if a [GNU Make jobserver] is passed in the
`MAKEFLAGS` environment variable. Other flags may have an effect as well, such
as [`CARGO_MAKEFLAGS`]. If a jobserver is not passed, then `rustc` will choose
the number of jobs to use.

Starting with Rust 1.76.0, `rustc` will warn if a jobserver appears to be
available but is not accessible, e.g.:

```console
$ echo 'fn main() {}' | MAKEFLAGS=--jobserver-auth=3,4 rustc -
warning: failed to connect to jobserver from environment variable `MAKEFLAGS="--jobserver-auth=3,4"`: cannot open file descriptor 3 from the jobserver environment variable value: Bad file descriptor (os error 9)
  |
  = note: the build environment is likely misconfigured
```

## Integration with build systems

The following subsections contain recommendations on how to integrate `rustc`
with build systems so that the jobserver is handled appropriately.

### GNU Make

When calling `rustc` from GNU Make, it is recommended that all `rustc`
invocations are marked as recursive in the `Makefile` (by prefixing the command
line with the `+` indicator), so that GNU Make enables the jobserver for them.
For instance:

<!-- ignore-tidy-tab -->

```make
x:
	+@echo 'fn main() {}' | rustc -
```

In particular, GNU Make 4.3 (a widely used version as of 2024) passes a simple
pipe jobserver in `MAKEFLAGS` even when it was not made available for the child
process, which in turn means `rustc` will warn about it. For instance, if the
`+` indicator is removed from the example above and GNU Make is called with e.g.
`make -j2`, then the aforementioned warning will trigger.

For calls to `rustc` inside `$(shell ...)` inside a recursive Make, one can
disable the jobserver manually by clearing the `MAKEFLAGS` variable, e.g.:

```make
S := $(shell MAKEFLAGS= rustc --print sysroot)

x:
	@$(MAKE) y

y:
	@echo $(S)
```

### CMake

CMake 3.28 supports the `JOB_SERVER_AWARE` option in its [`add_custom_target`]
command, e.g.:

```cmake
cmake_minimum_required(VERSION 3.28)
project(x)
add_custom_target(x
    JOB_SERVER_AWARE TRUE
    COMMAND echo 'fn main() {}' | rustc -
)
```

For earlier versions, when using CMake with the Makefile generator, one
workaround is to have [`$(MAKE)`] somewhere in the command so that GNU Make
treats it as a recursive Make call, e.g.:

```cmake
cmake_minimum_required(VERSION 3.22)
project(x)
add_custom_target(x
    COMMAND DUMMY_VARIABLE=$(MAKE) echo 'fn main() {}' | rustc -
)
```

[GNU Make jobserver]: https://www.gnu.org/software/make/manual/html_node/POSIX-Jobserver.html
[`CARGO_MAKEFLAGS`]: https://doc.rust-lang.org/cargo/reference/environment-variables.html
[`add_custom_target`]: https://cmake.org/cmake/help/latest/command/add_custom_target.html
[`$(MAKE)`]: https://www.gnu.org/software/make/manual/html_node/MAKE-Variable.html

<a id=lints_index></a>

# Lints

In software, a "lint" is a tool used to help improve your source code. The
Rust compiler contains a number of lints, and when it compiles your code, it will
also run the lints. These lints may produce a warning, an error, or nothing at all,
depending on how you've configured things.

Here's a small example:

```bash
$ cat main.rs
fn main() {
    let x = 5;
}
$ rustc main.rs
warning: unused variable: `x`
 --> main.rs:2:9
  |
2 |     let x = 5;
  |         ^
  |
  = note: `#[warn(unused_variables)]` on by default
  = note: to avoid this warning, consider using `_x` instead
```

This is the `unused_variables` lint, and it tells you that you've introduced
a variable that you don't use in your code. That's not *wrong*, so it's not
an error, but it might be a bug, so you get a warning.

## Future-incompatible lints

Sometimes the compiler needs to be changed to fix an issue that can cause
existing code to stop compiling. "Future-incompatible" lints are issued in
these cases to give users of Rust a smooth transition to the new behavior.
Initially, the compiler will continue to accept the problematic code and issue
a warning. The warning has a description of the problem, a notice that this
will become an error in the future, and a link to a tracking issue that
provides detailed information and an opportunity for feedback. This gives
users some time to fix the code to accommodate the change. After some time,
the warning may become an error.

The following is an example of what a future-incompatible looks like:

```text
warning: borrow of packed field is unsafe and requires unsafe function or block (error E0133)
  --> lint_example.rs:11:13
   |
11 |     let y = &x.data.0;
   |             ^^^^^^^^^
   |
   = note: `#[warn(safe_packed_borrows)]` on by default
   = warning: this was previously accepted by the compiler but is being phased out; it will become a hard error in a future release!
   = note: for more information, see issue #46043 <https://github.com/rust-lang/rust/issues/46043>
   = note: fields of packed structs might be misaligned: dereferencing a misaligned pointer or even just creating a misaligned reference is undefined behavior
```

For more information about the process and policy of future-incompatible
changes, see [RFC 1589].

[RFC 1589]: https://github.com/rust-lang/rfcs/blob/master/text/1589-rustc-bug-fix-procedure.md

<a id=lints_levels></a>

# Lint Levels

In `rustc`, lints are divided into six *levels*:

1. allow
2. expect
3. warn
4. force-warn
5. deny
6. forbid

Each lint has a default level (explained in the lint listing later in this
chapter), and the compiler has a default warning level. First, let's explain
what these levels mean, and then we'll talk about configuration.

## allow

These lints exist, but by default, do nothing. For example, consider this
source:

```rust
pub fn foo() {}
```

Compiling this file produces no warnings:

```bash
$ rustc lib.rs --crate-type=lib
$
```

But this code violates the `missing_docs` lint.

These lints exist mostly to be manually turned on via configuration, as we'll
talk about later in this section.

## expect

Sometimes, it can be helpful to suppress lints, but at the same time ensure that
the code in question still emits them. The 'expect' level does exactly this. If
the lint in question is not emitted, the `unfulfilled_lint_expectation` lint
triggers on the `expect` attribute, notifying you that the expectation is no
longer fulfilled.

```rust
fn main() {
    #[expect(unused_variables)]
    let unused = "Everyone ignores me";

    #[expect(unused_variables)] // `unused_variables` lint is not emitted
    let used = "I'm useful";    // the expectation is therefore unfulfilled
    println!("The `used` value is equal to: {:?}", used);
}
```

This will produce the following warning:

```txt
warning: this lint expectation is unfulfilled
 --> src/main.rs:7:14
  |
7 |     #[expect(unused_variables)]
  |              ^^^^^^^^^^^^^^^^
  |
  = note: `#[warn(unfulfilled_lint_expectations)]` on by default
```

This level can only be defined via the `#[expect]` attribute, there is no equivalent
flag. Lints with the special 'force-warn' level will still be emitted as usual.

## warn

The 'warn' lint level will produce a warning if you violate the lint. For example,
this code runs afoul of the `unused_variables` lint:

```rust
pub fn foo() {
    let x = 5;
}
```

This will produce this warning:

```bash
$ rustc lib.rs --crate-type=lib
warning: unused variable: `x`
 --> lib.rs:2:9
  |
2 |     let x = 5;
  |         ^
  |
  = note: `#[warn(unused_variables)]` on by default
  = note: to avoid this warning, consider using `_x` instead
```

## force-warn

'force-warn' is a special lint level. It's the same as 'warn' in that a lint
at this level will produce a warning, but unlike the 'warn' level, the
'force-warn' level cannot be overridden. If a lint is set to 'force-warn', it
is guaranteed to warn: no more, no less. This is true even if the overall lint
level is capped via cap-lints.

## deny

A 'deny' lint produces an error if you violate it. For example, this code
runs into the `exceeding_bitshifts` lint.

```rust,no_run
fn main() {
    100u8 << 10;
}
```

```bash
$ rustc main.rs
error: bitshift exceeds the type's number of bits
 --> main.rs:2:13
  |
2 |     100u8 << 10;
  |     ^^^^^^^^^^^
  |
  = note: `#[deny(exceeding_bitshifts)]` on by default
```

What's the difference between an error from a lint and a regular old error?
Lints are configurable via levels, so in a similar way to 'allow' lints,
warnings that are 'deny' by default let you allow them. Similarly, you may
wish to set up a lint that is `warn` by default to produce an error instead.
This lint level gives you that.

## forbid

'forbid' is a special lint level that fills the same role for 'deny' that
'force-warn' does for 'warn'. It's the same as 'deny' in that a lint at this
level will produce an error, but unlike the 'deny' level, the 'forbid' level
can not be overridden to be anything lower than an error.  However, lint
levels may still be capped with `--cap-lints` (see below) so `rustc --cap-lints warn`
will make lints set to 'forbid' just warn.

## Configuring warning levels

Remember our `missing_docs` example from the 'allow' lint level?

```bash
$ cat lib.rs
pub fn foo() {}
$ rustc lib.rs --crate-type=lib
$
```

We can configure this lint to operate at a higher level, both with
compiler flags, as well as with an attribute in the source code.

You can also "cap" lints so that the compiler can choose to ignore
certain lint levels. We'll talk about that last.

### Via compiler flag

The `-A`, `-W`, `--force-warn` `-D`, and `-F` flags let you turn one or more lints
into allowed, warning, force-warn, deny, or forbid levels, like this:

```bash
$ rustc lib.rs --crate-type=lib -W missing-docs
warning: missing documentation for crate
 --> lib.rs:1:1
  |
1 | pub fn foo() {}
  | ^^^^^^^^^^^^
  |
  = note: requested on the command line with `-W missing-docs`

warning: missing documentation for a function
 --> lib.rs:1:1
  |
1 | pub fn foo() {}
  | ^^^^^^^^^^^^
```

```bash
$ rustc lib.rs --crate-type=lib -D missing-docs
error: missing documentation for crate
 --> lib.rs:1:1
  |
1 | pub fn foo() {}
  | ^^^^^^^^^^^^
  |
  = note: requested on the command line with `-D missing-docs`

error: missing documentation for a function
 --> lib.rs:1:1
  |
1 | pub fn foo() {}
  | ^^^^^^^^^^^^

error: aborting due to 2 previous errors
```

You can also pass each flag more than once for changing multiple lints:

```bash
$ rustc lib.rs --crate-type=lib -D missing-docs -D unused-variables
```

And of course, you can mix these five flags together:

```bash
$ rustc lib.rs --crate-type=lib -D missing-docs -A unused-variables
```

The order of these command line arguments is taken into account. The following allows the `unused-variables` lint, because it is the last argument for that lint:

```bash
$ rustc lib.rs --crate-type=lib -D unused-variables -A unused-variables
```

You can make use of this behavior by overriding the level of one specific lint out of a group of lints. The following example denies all the lints in the `unused` group, but explicitly allows the `unused-variables` lint in that group (forbid still trumps everything regardless of ordering):

```bash
$ rustc lib.rs --crate-type=lib -D unused -A unused-variables
```

Since `force-warn` and `forbid` cannot be overridden, setting
one of them will prevent any later level for the same lint from
taking effect.

### Via an attribute

You can also modify the lint level with a crate-wide attribute:

```bash
$ cat lib.rs
#![warn(missing_docs)]

pub fn foo() {}
$ rustc lib.rs --crate-type=lib
warning: missing documentation for crate
 --> lib.rs:1:1
  |
1 | / #![warn(missing_docs)]
2 | |
3 | | pub fn foo() {}
  | |_______________^
  |
note: lint level defined here
 --> lib.rs:1:9
  |
1 | #![warn(missing_docs)]
  |         ^^^^^^^^^^^^

warning: missing documentation for a function
 --> lib.rs:3:1
  |
3 | pub fn foo() {}
  | ^^^^^^^^^^^^
```

`warn`, `allow`, `deny`, and `forbid` all work this way. There is
no way to set a lint to `force-warn` using an attribute.

You can also pass in multiple lints per attribute:

```rust
#![warn(missing_docs, unused_variables)]

pub fn foo() {}
```

And use multiple attributes together:

```rust
#![warn(missing_docs)]
#![deny(unused_variables)]

pub fn foo() {}
```

All lint attributes support an additional `reason` parameter, to give context why
a certain attribute was added. This reason will be displayed as part of the lint
message, if the lint is emitted at the defined level.

```rust
use std::path::PathBuf;
pub fn get_path() -> PathBuf {
    #[allow(unused_mut, reason = "this is only modified on some platforms")]
    let mut file_name = PathBuf::from("git");
    #[cfg(target_os = "windows")]
    file_name.set_extension("exe");
    file_name
}
```

### Capping lints

`rustc` supports a flag, `--cap-lints LEVEL` that sets the "lint cap level."
This is the maximum level for all lints. So for example, if we take our
code sample from the "deny" lint level above:

```rust,no_run
fn main() {
    100u8 << 10;
}
```

And we compile it, capping lints to warn:

```bash
$ rustc lib.rs --cap-lints warn
warning: bitshift exceeds the type's number of bits
 --> lib.rs:2:5
  |
2 |     100u8 << 10;
  |     ^^^^^^^^^^^
  |
  = note: `#[warn(exceeding_bitshifts)]` on by default

warning: this expression will panic at run-time
 --> lib.rs:2:5
  |
2 |     100u8 << 10;
  |     ^^^^^^^^^^^ attempt to shift left with overflow
```

It now only warns, rather than errors. We can go further and allow all lints:

```bash
$ rustc lib.rs --cap-lints allow
$
```

This feature is used heavily by Cargo; it will pass `--cap-lints allow` when
compiling your dependencies, so that if they have any warnings, they do not
pollute the output of your build. However, note that `--cap-lints allow` does **not** override lints marked as `force-warn`.

## Priority of lint level sources

Rust allows setting lint levels (`allow`, `warn`, `deny`, `forbid`, `force-warn`) through various sources:

- **Attributes**: `#[allow(...)]`, `#![deny(...)]`, etc.
- **Command-line options**: `--cap-lints`, `--force-warn`, `-A`, `-W`, `-D`, `-F`

Here’s how these different lint controls interact:

1. [`--force-warn`](#force-warn) forces a lint to warning level, and takes precedence over attributes and all other CLI flags.

   ```rust,compile_fail
   #[forbid(unused_variables)]
   fn main() {
       let x = 42;
   }
   ```

   Compiled with:

   ```bash
    $ rustc --force-warn unused_variables lib.rs
    warning: unused variable: `x`
      --> lib.rs:3:9
      |
    3 |     let x = 42;
      |         ^ help: if this is intentional, prefix it with an underscore: `_x`
      |
      = note: requested on the command line with `--force-warn unused-variables`

    warning: 1 warning emitted
   ```

2. [`--cap-lints`](#capping-lints) sets the maximum level of a lint, and takes precedence over attributes as well as the `-D`, `-W`, and `-F` CLI flags.

   ```rust,compile_fail
   #[deny(unused_variables)]
   fn main() {
       let x = 42;
   }
   ```

   Compiled with:

   ```bash
    $ rustc --cap-lints=warn lib.rs
    warning: unused variable: `x`
    --> test1.rs:3:9
      |
    3 |     let x = 42;
      |         ^ help: if this is intentional, prefix it with an underscore: `_x`
      |
    note: the lint level is defined here
    --> test1.rs:1:8
      |
    1 | #[deny(unused_variables)]
      |        ^^^^^^^^^^^^^^^^

    warning: 1 warning emitted
   ```

3. [CLI level flags](#via-compiler-flag) take precedence over attributes.

   The order of the flags matter; flags on the right take precedence over earlier flags.

   ```rust
   fn main() {
       let x = 42;
   }
   ```

   Compiled with:

   ```bash
    $ rustc -A unused_variables -D unused_variables lib.rs
    error: unused variable: `x`
    --> test1.rs:2:9
      |
    2 |     let x = 42;
      |         ^ help: if this is intentional, prefix it with an underscore: `_x`
      |
      = note: requested on the command line with `-D unused-variables`

    error: aborting due to 1 previous error
   ```

4. Within the source, [attributes](#via-an-attribute) at a lower-level in the syntax tree take precedence over attributes at a higher level, or from a previous attribute on the same entity as listed in left-to-right source order.

   ```rust
   #![deny(unused_variables)]

   #[allow(unused_variables)]
   fn main() {
       let x = 42; // Allow wins
   }
   ```

   - The exception is once a lint is set to "forbid", it is an error to try to change its level except for `deny`, which is allowed inside a forbid context, but is ignored.

In terms of priority, [lint groups](#groups) are treated as-if they are expanded to a list of all of the lints they contain. The exception is the `warnings` group which ignores attribute and CLI order and applies to all lints that would otherwise warn within the entity.

<a id=lints_groups></a>

# Lint Groups

`rustc` has the concept of a "lint group", where you can toggle several warnings
through one name.

For example, the `nonstandard-style` lint sets `non-camel-case-types`,
`non-snake-case`, and `non-upper-case-globals` all at once. So these are
equivalent:

```bash
$ rustc -D nonstandard-style
$ rustc -D non-camel-case-types -D non-snake-case -D non-upper-case-globals
```

Here's a list of each lint group, and the lints that they are made up of:

{{groups-table}}

Additionally, there's a `bad-style` lint group that's a deprecated alias for `nonstandard-style`.

Finally, you can also see the table above by invoking `rustc -W help`. This will give you the exact values for the specific
compiler you have installed.

<a id=lints_listing_index></a>

# Lint Listing

This section lists out all of the lints, grouped by their default lint levels.

You can also see this list by running `rustc -W help`.

<a id=lints_listing_allowed_by_default></a>

# Allowed-by-default Lints

This file is auto-generated by the lint-docs script.

<a id=lints_listing_warn_by_default></a>

# Warn-by-default Lints

This file is auto-generated by the lint-docs script.

<a id=lints_listing_deny_by_default></a>

# Deny-by-default Lints

This file is auto-generated by the lint-docs script.

<a id=json></a>

# JSON Output

This chapter documents the JSON structures emitted by `rustc`. JSON may be
enabled with the [`--error-format=json` flag][option-error-format]. Additional
options may be specified with the [`--json` flag][option-json] which can
change which messages are generated, and the format of the messages.

JSON messages are emitted one per line to stderr.

If parsing the output with Rust, the
[`cargo_metadata`](https://crates.io/crates/cargo_metadata) crate provides
some support for parsing the messages.

Each type of message has a `$message_type` field which can be used to
distinguish the different formats. When parsing, care should be taken
to be forwards-compatible with future changes to the format. Optional
values may be `null`. New fields may be added. Enumerated fields like
"level" or "suggestion_applicability" may add new values.

## Diagnostics

Diagnostic messages provide errors or possible concerns generated during
compilation. `rustc` provides detailed information about where the diagnostic
originates, along with hints and suggestions.

Diagnostics are arranged in a parent/child relationship where the parent
diagnostic value is the core of the diagnostic, and the attached children
provide additional context, help, and information.

Diagnostics have the following format:

```javascript
{
    /* Type of this message */
    "$message_type": "diagnostic",
    /* The primary message. */
    "message": "unused variable: `x`",
    /* The diagnostic code.
       Some messages may set this value to null.
    */
    "code": {
        /* A unique string identifying which diagnostic triggered. */
        "code": "unused_variables",
        /* An optional string explaining more detail about the diagnostic code. */
        "explanation": null
    },
    /* The severity of the diagnostic.
       Values may be:
       - "error": A fatal error that prevents compilation.
       - "warning": A possible error or concern.
       - "note": Additional information or context about the diagnostic.
       - "help": A suggestion on how to resolve the diagnostic.
       - "failure-note": A note attached to the message for further information.
       - "error: internal compiler error": Indicates a bug within the compiler.
    */
    "level": "warning",
    /* An array of source code locations to point out specific details about
       where the diagnostic originates from. This may be empty, for example
       for some global messages, or child messages attached to a parent.

       Character offsets are offsets of Unicode Scalar Values.
    */
    "spans": [
        {
            /* The file where the span is located.
               Note that this path may not exist. For example, if the path
               points to the standard library, and the rust src is not
               available in the sysroot, then it may point to a nonexistent
               file. Beware that this may also point to the source of an
               external crate.
            */
            "file_name": "lib.rs",
            /* The byte offset where the span starts (0-based, inclusive). */
            "byte_start": 21,
            /* The byte offset where the span ends (0-based, exclusive). */
            "byte_end": 22,
            /* The first line number of the span (1-based, inclusive). */
            "line_start": 2,
            /* The last line number of the span (1-based, inclusive). */
            "line_end": 2,
            /* The first character offset of the line_start (1-based, inclusive). */
            "column_start": 9,
            /* The last character offset of the line_end (1-based, exclusive). */
            "column_end": 10,
            /* Whether or not this is the "primary" span.

               This indicates that this span is the focal point of the
               diagnostic.

               There are rare cases where multiple spans may be marked as
               primary. For example, "immutable borrow occurs here" and
               "mutable borrow ends here" can be two separate primary spans.

               The top (parent) message should always have at least one
               primary span, unless it has zero spans. Child messages may have
               zero or more primary spans.
            */
            "is_primary": true,
            /* An array of objects showing the original source code for this
               span. This shows the entire lines of text where the span is
               located. A span across multiple lines will have a separate
               value for each line.
            */
            "text": [
                {
                    /* The entire line of the original source code. */
                    "text": "    let x = 123;",
                    /* The first character offset of the line of
                       where the span covers this line (1-based, inclusive). */
                    "highlight_start": 9,
                    /* The last character offset of the line of
                       where the span covers this line (1-based, exclusive). */
                    "highlight_end": 10
                }
            ],
            /* An optional message to display at this span location.
               This is typically null for primary spans.
            */
            "label": null,
            /* An optional string of a suggested replacement for this span to
               solve the issue. Tools may try to replace the contents of the
               span with this text.
            */
            "suggested_replacement": null,
            /* An optional string that indicates the confidence of the
               "suggested_replacement". Tools may use this value to determine
               whether or not suggestions should be automatically applied.

               Possible values may be:
               - "MachineApplicable": The suggestion is definitely what the
                 user intended. This suggestion should be automatically
                 applied.
               - "MaybeIncorrect": The suggestion may be what the user
                 intended, but it is uncertain. The suggestion should result
                 in valid Rust code if it is applied.
               - "HasPlaceholders": The suggestion contains placeholders like
                 `(...)`. The suggestion cannot be applied automatically
                 because it will not result in valid Rust code. The user will
                 need to fill in the placeholders.
               - "Unspecified": The applicability of the suggestion is unknown.
            */
            "suggestion_applicability": null,
            /* An optional object indicating the expansion of a macro within
               this span.

               If a message occurs within a macro invocation, this object will
               provide details of where within the macro expansion the message
               is located.
            */
            "expansion": {
                /* The span of the macro invocation.
                   Uses the same span definition as the "spans" array.
                */
                "span": {/*...*/}
                /* Name of the macro, such as "foo!" or "#[derive(Eq)]". */
                "macro_decl_name": "some_macro!",
                /* Optional span where the relevant part of the macro is
                  defined. */
                "def_site_span": {/*...*/},
            }
        }
    ],
    /* Array of attached diagnostic messages.
       This is an array of objects using the same format as the parent
       message. Children are not nested (children do not themselves
       contain "children" definitions).
    */
    "children": [
        {
            "message": "`#[warn(unused_variables)]` on by default",
            "code": null,
            "level": "note",
            "spans": [],
            "children": [],
            "rendered": null
        },
        {
            "message": "if this is intentional, prefix it with an underscore",
            "code": null,
            "level": "help",
            "spans": [
                {
                    "file_name": "lib.rs",
                    "byte_start": 21,
                    "byte_end": 22,
                    "line_start": 2,
                    "line_end": 2,
                    "column_start": 9,
                    "column_end": 10,
                    "is_primary": true,
                    "text": [
                        {
                            "text": "    let x = 123;",
                            "highlight_start": 9,
                            "highlight_end": 10
                        }
                    ],
                    "label": null,
                    "suggested_replacement": "_x",
                    "suggestion_applicability": "MachineApplicable",
                    "expansion": null
                }
            ],
            "children": [],
            "rendered": null
        }
    ],
    /* Optional string of the rendered version of the diagnostic as displayed
       by rustc. Note that this may be influenced by the `--json` flag.
    */
    "rendered": "warning: unused variable: `x`\n --> lib.rs:2:9\n  |\n2 |     let x = 123;\n  |         ^ help: if this is intentional, prefix it with an underscore: `_x`\n  |\n  = note: `#[warn(unused_variables)]` on by default\n\n"
}
```

## Artifact notifications

Artifact notifications are emitted when the [`--json=artifacts`
flag][option-json] is used. They indicate that a file artifact has been saved
to disk. More information about emit kinds may be found in the [`--emit`
flag][option-emit] documentation. Notifications can contain more than one file
for each type, for example when using multiple codegen units.

```javascript
{
    /* Type of this message */
    "$message_type": "artifact",
    /* The filename that was generated. */
    "artifact": "libfoo.rlib",
    /* The kind of artifact that was generated. Possible values:
       - "link": The generated crate as specified by the crate-type.
       - "dep-info": The `.d` file with dependency information in a Makefile-like syntax.
       - "metadata": The Rust `.rmeta` file containing metadata about the crate.
       - "asm": The `.s` file with generated assembly
       - "llvm-ir": The `.ll` file with generated textual LLVM IR
       - "llvm-bc": The `.bc` file with generated LLVM bitcode
       - "mir": The `.mir` file with rustc's mid-level intermediate representation.
       - "obj": The `.o` file with generated native object code
    */
    "emit": "link"
}
```

## Future-incompatible reports

If the [`--json=future-incompat`][option-json] flag is used, then a separate
JSON structure will be emitted if the crate may stop compiling in the future.
This contains diagnostic information about the particular warnings that may be
turned into a hard error in the future. This will include the diagnostic
information, even if the diagnostics have been suppressed (such as with an
`#[allow]` attribute or the `--cap-lints` option).

```javascript
{
    /* Type of this message */
    "$message_type": "future_incompat",
    /* An array of objects describing a warning that will become a hard error
       in the future.
    */
    "future_incompat_report":
    [
        {
            /* A diagnostic structure as defined in
               https://doc.rust-lang.org/rustc/json.html#diagnostics
            */
            "diagnostic": {...},
        }
    ]
}
```

## Unused Dependency Notifications

The options `--json=unused-externs` and `--json=unused-externs-silent` in
conjunction with the `unused-crate-dependencies` lint will emit JSON structures
reporting any crate dependencies (specified with `--extern`) which never had any
symbols referenced. These are intended to be consumed by the build system which
can then emit diagnostics telling the user to remove the unused dependencies
from `Cargo.toml` (or whatever build-system file defines dependencies).

The JSON structure is:
```json
{
    "lint_level": "deny", /* Level of the warning */
    "unused_names": [
        "foo"  /* Names of unused crates, as specified with --extern foo=libfoo.rlib */
    ],
}
```

The warn/deny/forbid lint level (as defined either on the command line or in the
source) dictates the `lint_level` in the JSON. With `unused-externs`, a
`deny` or `forbid` level diagnostic will also cause `rustc` to exit with a
failure exit code.

`unused-externs-silent` will report the diagnostic the same way, but will not
cause `rustc` to exit with failure - it's up to the consumer to flag failure
appropriately. (This is needed by Cargo which shares the same dependencies
across multiple build targets, so it should only report an unused dependency if
its not used by any of the targets.)

## Timings

**This setting is currently unstable and requires usage of `-Zunstable-options`.**

The `--timings` option will tell `rustc` to emit messages when a certain compilation
section (such as code generation or linking) begins or ends. The messages currently have
the following format:

```json
{
    "$message_type": "section_timing", /* Type of this message */
    "event": "start", /* Marks the "start" or "end" of the compilation section */
    "name": "link",  /* The name of the compilation section */
    // Opaque timestamp when the message was emitted, in microseconds
    // The timestamp is currently relative to the beginning of the compilation session
    "time": 12345
}
```

Note that the JSON format of the `timings` messages is unstable and subject to change.

Compilation sections can be nested; for example, if you encounter the start of "foo",
then the start of "bar", then the end of "bar" and then the end of "bar", it means that the
"bar" section happened as a part of the "foo" section.

The timestamp should only be used for computing the duration of each section.

We currently do not guarantee any specific section names to be emitted.

[option-emit]: #option-emit
[option-error-format]: #option-error-format
[option-json]: #option-json

<a id=tests_index></a>

# Tests

`rustc` has a built-in facility for building and running tests for a crate.
More information about writing and running tests may be found in the [Testing
Chapter] of the Rust Programming Language book.

Tests are written as free functions with the [`#[test]`
attribute][attribute-test]. For example:

```rust
#[test]
fn it_works() {
    assert_eq!(2 + 2, 4);
}
```

Tests "pass" if they return without an error. They "fail" if they [panic], or
return a type such as [`Result`] that implements the [`Termination`] trait
with a non-zero value.

By passing the [`--test` option] to `rustc`, the compiler will build the crate
in a special mode to construct an executable that will run the tests in the
crate. The `--test` flag will make the following changes:

* The crate will be built as a `bin` [crate type], forcing it to be an
  executable.
* Links the executable with [`libtest`], the test harness that is part of the
  standard library, which handles running the tests.
* Synthesizes a [`main` function] which will process command-line arguments
  and run the tests. This new `main` function will replace any existing `main`
  function as the entry point of the executable, though the existing `main`
  will still be compiled.
* Enables the [`test` cfg option], which allows your code to use conditional
  compilation to detect if it is being built as a test.
* Enables building of functions annotated with the [`test`][attribute-test]
  and [`bench`](#benchmarks) attributes, which will be run by the test
  harness.

After the executable is created, you can run it to execute the tests and
receive a report on what passes and fails. If you are using [Cargo] to manage
your project, it has a built-in [`cargo test`] command which handles all of
this automatically. An example of the output looks like this:

```text
running 4 tests
test it_works ... ok
test check_valid_args ... ok
test invalid_characters ... ok
test walks_the_dog ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

> **Note**: Tests must be built with the [`unwind` panic
> strategy][panic-strategy]. This is because all tests run in the same
> process, and they are intended to catch panics, which is not possible with
> the `abort` strategy. See the unstable [`-Z panic-abort-tests`] option for
> experimental support of the `abort` strategy by spawning tests in separate
> processes.

## Test attributes

Tests are indicated using attributes on free functions. The following
attributes are used for testing, see the linked documentation for more
details:

* [`#[test]`][attribute-test] — Indicates a function is a test to be run.
* `#[bench]` — Indicates a function is a benchmark to be
  run. Benchmarks are currently unstable and only available in the nightly
  channel, see the [unstable docs][bench-docs] for more details.
* [`#[should_panic]`][attribute-should_panic] — Indicates that the test
  function will only pass if the function [panics][panic].
* [`#[ignore]`][attribute-ignore] — Indicates that the test function will be
  compiled, but not run by default. See the [`--ignored`](#--ignored) and
  [`--include-ignored`](#--include-ignored) options to run these tests.

## CLI arguments

The libtest harness has several command-line arguments to control its
behavior.

> Note: When running with [`cargo test`], the libtest CLI arguments must be
> passed after the `--` argument to differentiate between flags for Cargo and
> those for the harness. For example: `cargo test -- --no-capture`

### Filters

Positional arguments (those without a `-` prefix) are treated as filters which
will only run tests whose name matches one of those strings. The filter will
match any substring found in the full path of the test function. For example,
if the test function `it_works` is located in the module
`utils::paths::tests`, then any of the filters `works`, `path`, `utils::`, or
`utils::paths::tests::it_works` will match that test.

See [Selection options](#selection-options) for more options to control which
tests are run.

### Action options

The following options perform different actions other than running tests.

#### `--list`

Prints a list of all tests and benchmarks. Does not run any of the tests.
[Filters](#filters) can be used to list only matching tests.

#### `-h`, `--help`

Displays usage information and command-line options.

### Selection options

The following options change how tests are selected.

#### `--test`

This is the default mode where all tests will be run as well as running all
benchmarks with only a single iteration (to ensure the benchmark works,
without taking the time to actually perform benchmarking). This can be
combined with the `--bench` flag to run both tests and perform full
benchmarking.

#### `--bench`

This runs in a mode where tests are ignored, and only runs benchmarks. This
can be combined with `--test` to run both benchmarks and tests.

#### `--exact`

This forces [filters](#filters) to match the full path of the test exactly.
For example, if the test `it_works` is in the module `utils::paths::tests`,
then only the string `utils::paths::tests::it_works` will match that test.

#### `--skip` _FILTER_

Skips any tests whose name contains the given _FILTER_ string. This flag may
be passed multiple times.

#### `--ignored`

Runs only tests that are marked with the [`ignore`
attribute][attribute-ignore].

#### `--include-ignored`

Runs both [ignored](#--ignored) and non-ignored tests.

#### `--exclude-should-panic`

Excludes tests marked with the [`should_panic`
attribute][attribute-should_panic].

⚠️ 🚧 This option is [unstable](#unstable-options), and requires the `-Z
unstable-options` flag. See [tracking issue
#82348](https://github.com/rust-lang/rust/issues/82348) for more information.

### Execution options

The following options affect how tests are executed.

#### `--test-threads` _NUM_THREADS_

Sets the number of threads to use for running tests in parallel. By default,
uses the amount of concurrency available on the hardware as indicated by
[`available_parallelism`].

Deprecated: this can also be specified with the `RUST_TEST_THREADS` environment variable.

#### `--force-run-in-process`

Forces the tests to run in a single process when using the [`abort` panic
strategy][panic-strategy].

⚠️ 🚧 This only works with the unstable [`-Z panic-abort-tests`] option, and
requires the `-Z unstable-options` flag. See [tracking issue
#67650](https://github.com/rust-lang/rust/issues/67650) for more information.

#### `--ensure-time`

⚠️ 🚧 This option is [unstable](#unstable-options), and requires the `-Z
unstable-options` flag. See [tracking issue
#64888](https://github.com/rust-lang/rust/issues/64888) and the [unstable
docs](https://doc.rust-lang.org/unstable-book/compiler-flags/report-time.html) for more information.

#### `--shuffle`

Runs the tests in random order, as opposed to the default alphabetical order.

Deprecated: this may also be specified by setting the `RUST_TEST_SHUFFLE` environment
variable to anything but `0`.

The random number generator seed that is output can be passed to
[`--shuffle-seed`](#--shuffle-seed-seed) to run the tests in the same order
again.

Note that `--shuffle` does not affect whether the tests are run in parallel. To
run the tests in random order sequentially, use `--shuffle --test-threads 1`.

⚠️ 🚧 This option is [unstable](#unstable-options), and requires the `-Z
unstable-options` flag. See [tracking issue
#89583](https://github.com/rust-lang/rust/issues/89583) for more information.

#### `--shuffle-seed` _SEED_

Like [`--shuffle`](#--shuffle), but seeds the random number generator with
_SEED_. Thus, calling the test harness with `--shuffle-seed` _SEED_ twice runs
the tests in the same order both times.

_SEED_ is any 64-bit unsigned integer, for example, one produced by
[`--shuffle`](#--shuffle).

Deprecated: this can also be specified with the `RUST_TEST_SHUFFLE_SEED` environment
variable.

⚠️ 🚧 This option is [unstable](#unstable-options), and requires the `-Z
unstable-options` flag. See [tracking issue
#89583](https://github.com/rust-lang/rust/issues/89583) for more information.

### Output options

The following options affect the output behavior.

#### `-q`, `--quiet`

Displays one character per test instead of one line per test. This is an alias
for [`--format=terse`](#--format-format).

#### `--no-capture`

Does not capture the stdout and stderr of the test, and allows tests to print
to the console. Usually the output is captured, and only displayed if the test
fails.

Deprecated: this may also be specified by setting the `RUST_TEST_NOCAPTURE` environment
variable to anything but `0`.

`--nocapture` is a deprecated alias for `--no-capture`.

#### `--show-output`

Displays the stdout and stderr of successful tests after all tests have run.

Contrast this with [`--no-capture`](#--no-capture) which allows tests to print
*while they are running*, which can cause interleaved output if there are
multiple tests running in parallel, `--show-output` ensures the output is
contiguous, but requires waiting for all tests to finish.

#### `--color` _COLOR_

Control when colored terminal output is used. Valid options:

* `auto`: Colorize if stdout is a tty and [`--no-capture`](#--no-capture) is not
  used. This is the default.
* `always`: Always colorize the output.
* `never`: Never colorize the output.

#### `--format` _FORMAT_

Controls the format of the output. Valid options:

* `pretty`: This is the default format, with one line per test.
* `terse`: Displays only a single character per test. [`--quiet`](#-q---quiet)
  is an alias for this option.
* `json`: Emits JSON objects, one per line. ⚠️ 🚧 This option is
  [unstable](#unstable-options), and requires the `-Z unstable-options` flag.
  See [tracking issue #49359](https://github.com/rust-lang/rust/issues/49359)
  for more information.

#### `--logfile` _PATH_

Writes the results of the tests to the given file.

This option is deprecated.

#### `--report-time`

⚠️ 🚧 This option is [unstable](#unstable-options), and requires the `-Z
unstable-options` flag. See [tracking issue
#64888](https://github.com/rust-lang/rust/issues/64888) and the [unstable
docs](https://doc.rust-lang.org/unstable-book/compiler-flags/report-time.html) for more information.

### Unstable options

Some CLI options are added in an "unstable" state, where they are intended for
experimentation and testing to determine if the option works correctly, has
the right design, and is useful. The option may not work correctly, break, or
change at any time. To signal that you acknowledge that you are using an
unstable option, they require passing the `-Z unstable-options` command-line
flag.

## Benchmarks

The libtest harness supports running benchmarks for functions annotated with
the `#[bench]` attribute. Benchmarks are currently unstable, and only
available on the [nightly channel]. More information may be found in the
[unstable book][bench-docs].

## Custom test frameworks

Experimental support for using custom test harnesses is available on the
[nightly channel]. See [tracking issue
#50297](https://github.com/rust-lang/rust/issues/50297) and the
[custom_test_frameworks documentation] for more information.

[`--test` option]: #option-test
[`-Z panic-abort-tests`]: https://github.com/rust-lang/rust/issues/67650
[`available_parallelism`]: https://doc.rust-lang.org/std/thread/fn.available_parallelism.html
[`cargo test`]: https://doc.rust-lang.org/cargo/commands/cargo-test.html
[`libtest`]: https://doc.rust-lang.org/test/index.html
[`main` function]: https://doc.rust-lang.org/reference/crates-and-source-files.html#main-functions
[`Result`]: https://doc.rust-lang.org/std/result/index.html
[`Termination`]: https://doc.rust-lang.org/std/process/trait.Termination.html
[`test` cfg option]: https://doc.rust-lang.org/reference/conditional-compilation.html#test
[attribute-ignore]: https://doc.rust-lang.org/reference/attributes/testing.html#the-ignore-attribute
[attribute-should_panic]: https://doc.rust-lang.org/reference/attributes/testing.html#the-should_panic-attribute
[attribute-test]: https://doc.rust-lang.org/reference/attributes/testing.html#the-test-attribute
[bench-docs]: https://doc.rust-lang.org/unstable-book/library-features/test.html
[Cargo]: https://doc.rust-lang.org/cargo/index.html
[crate type]: https://doc.rust-lang.org/reference/linkage.html
[custom_test_frameworks documentation]: https://doc.rust-lang.org/unstable-book/language-features/custom-test-frameworks.html
[nightly channel]: https://doc.rust-lang.org/book/appendix-07-nightly-rust.html
[panic-strategy]: https://doc.rust-lang.org/book/ch09-01-unrecoverable-errors-with-panic.html
[panic]: https://doc.rust-lang.org/book/ch09-01-unrecoverable-errors-with-panic.html
[Testing Chapter]: https://doc.rust-lang.org/book/ch11-00-testing.html

<a id=targets_index></a>

# Targets

`rustc` is a cross-compiler by default. This means that you can use any compiler to build for any
architecture. The list of *targets* are the possible architectures that you can build for. See
the [Platform Support](#platform_support) page for a detailed list of targets, or
[Built-in Targets](#built_in) for instructions on how to view what is available for your version
of `rustc`.

To see all the options that you can set with a target, see the docs
[here](https://doc.rust-lang.org/nightly/nightly-rustc/rustc_target/spec/struct.Target.html).

To compile to a particular target, use the `--target` flag:

```bash
$ rustc src/main.rs --target=wasm32-unknown-unknown
```
## Target Features
`x86`,  and `ARMv8` are two popular CPU architectures. Their instruction sets form a common baseline across most CPUs. However, some CPUs extend these with custom instruction sets, e.g. vector (`AVX`), bitwise manipulation (`BMI`) or cryptographic (`AES`).

Developers, who know on which CPUs their compiled code is going to run can choose to add (or remove) CPU specific instruction sets via the `-C target-feature=val` flag.

Please note, that this flag is generally considered as unsafe. More details can be found in [this section](#known_issues).

<a id=targets_built_in></a>

# Built-in Targets

`rustc` ships with the ability to compile to many targets automatically, we
call these "built-in" targets, and they generally correspond to targets that
the team is supporting directly. To see the list of built-in targets, you can
run `rustc --print target-list`.

Typically, a target needs a compiled copy of the Rust standard library to
work. If using [rustup], then check out the documentation on
[Cross-compilation][rustup-cross] on how to download a pre-built standard
library built by the official Rust distributions. Most targets will need a
system linker, and possibly other things.

[rustup]: https://github.com/rust-lang/rustup
[rustup-cross]: https://rust-lang.github.io/rustup/cross-compilation.html

<a id=targets_custom></a>

# Custom Targets

If you'd like to build for a target that is not yet supported by `rustc`, you can use a
"custom target specification" to define a target. These target specification files
are JSON. To see the JSON for the host target, you can run:

```bash
rustc +nightly -Z unstable-options --print target-spec-json
```

To see it for a different target, add the `--target` flag:

```bash
rustc +nightly -Z unstable-options --target=wasm32-unknown-unknown --print target-spec-json
```

To use a custom target, see the (unstable) [`build-std` feature](https://doc.rust-lang.org/cargo/reference/unstable.html#build-std) of `cargo`.

<div class="warning">

The target JSON properties are not stable and subject to change.
Always pin your compiler version when using custom targets!

</div>

## JSON Schema

`rustc` provides a JSON schema for the custom target JSON specification.
Because the schema is subject to change, you should always use the schema from the version of rustc which you are passing the target to.

It can be found in `etc/target-spec-json-schema.json` in the sysroot (`rustc --print sysroot`) or printed with `rustc +nightly -Zunstable-options --print target-spec-json-schema`.
The existence and name of this schema is, just like the properties of the JSON specification, not stable and subject to change.

## Custom Target Lookup Path

When `rustc` is given an option `--target=TARGET` (where `TARGET` is any string), it uses the following logic:
1. if `TARGET` is the name of a built-in target, use that
2. if `TARGET` is a path to a file, read that file as a json target
3. otherwise, search the colon-separated list of directories found
   in the `RUST_TARGET_PATH` environment variable from left to right
   for a file named `TARGET.json`.

These steps are tried in order, so if there are multiple potentially valid
interpretations for a target, whichever is found first will take priority.
If none of these methods find a target, an error is thrown.

<a id=targets_known_issues></a>

# Known Issues
This section informs you about known "gotchas". Keep in mind, that this section is (and always will be) incomplete. For suggestions and amendments, feel free to [contribute](#contributing) to this guide.

## Target Features
Most target-feature problems arise, when mixing code that have the target-feature _enabled_ with code that have it _disabled_. If you want to avoid undefined behavior, it is recommended to build _all code_ (including the standard library and imported crates) with a common set of target-features.

By default, compiling your code with the `-C target-feature` flag will not recompile the entire standard library and/or imported crates with matching target features. Therefore, target features are generally considered as unsafe. Using `#[target_feature]` on individual functions makes the function unsafe.

Examples:

| Target-Feature | Issue | Seen on | Description | Details |
| -------------- | ----- | ------- | ----------- | ------- |
| `+soft-float` <br> and <br> `-sse` | Segfaults and ABI mismatches | `x86` and `x86-64` | The `x86` and `x86_64` architecture uses SSE registers (aka `xmm`) for floating point operations. Using software emulated floats ("soft-floats") disables usage of `xmm` registers, but parts of Rust's core libraries (e.g. `std::f32` or `std::f64`) are compiled without soft-floats and expect parameters to be passed in `xmm` registers. This leads to ABI mismatches. <br><br>  Attempting to compile with disabled SSE causes the same error, too. | [#63466](https://github.com/rust-lang/rust/issues/63466) |

<a id=profile_guided_optimization></a>

# Profile-guided Optimization

`rustc` supports doing profile-guided optimization (PGO).
This chapter describes what PGO is, what it is good for, and how it can be used.

## What Is Profile-Guided Optimization?

The basic concept of PGO is to collect data about the typical execution of
a program (e.g. which branches it is likely to take) and then use this data
to inform optimizations such as inlining, machine-code layout,
register allocation, etc.

There are different ways of collecting data about a program's execution.
One is to run the program inside a profiler (such as `perf`) and another
is to create an instrumented binary, that is, a binary that has data
collection built into it, and run that.
The latter usually provides more accurate data and it is also what is
supported by `rustc`.

## Usage

Generating a PGO-optimized program involves following a workflow with four steps:

1. Compile the program with instrumentation enabled
   (e.g. `rustc -Cprofile-generate=/tmp/pgo-data main.rs`)
2. Run the instrumented program (e.g. `./main`) which generates a
   `default_<id>.profraw` file
3. Convert the `.profraw` file into a `.profdata` file using
   LLVM's `llvm-profdata` tool
4. Compile the program again, this time making use of the profiling data
   (for example `rustc -Cprofile-use=merged.profdata main.rs`)

An instrumented program will create one or more `.profraw` files, one for each
instrumented binary. E.g. an instrumented executable that loads two instrumented
dynamic libraries at runtime will generate three `.profraw` files. Running an
instrumented binary multiple times, on the other hand, will re-use the
respective `.profraw` files, updating them in place.

These `.profraw` files have to be post-processed before they can be fed back
into the compiler. This is done by the `llvm-profdata` tool. This tool
is most easily installed via

```bash
rustup component add llvm-tools-preview
```

Note that installing the `llvm-tools-preview` component won't add
`llvm-profdata` to the `PATH`. Rather, the tool can be found in:

```bash
~/.rustup/toolchains/<toolchain>/lib/rustlib/<target-triple>/bin/
```

Alternatively, an `llvm-profdata` coming with a recent LLVM or Clang
version usually works too.

The `llvm-profdata` tool merges multiple `.profraw` files into a single
`.profdata` file that can then be fed back into the compiler via
`-Cprofile-use`:

```bash
# STEP 1: Compile the binary with instrumentation
rustc -Cprofile-generate=/tmp/pgo-data -O ./main.rs

# STEP 2: Run the binary a few times, maybe with common sets of args.
#         Each run will create or update `.profraw` files in /tmp/pgo-data
./main mydata1.csv
./main mydata2.csv
./main mydata3.csv

# STEP 3: Merge and post-process all the `.profraw` files in /tmp/pgo-data
llvm-profdata merge -o ./merged.profdata /tmp/pgo-data

# STEP 4: Use the merged `.profdata` file during optimization. All `rustc`
#         flags have to be the same.
rustc -Cprofile-use=./merged.profdata -O ./main.rs
```

### A Complete Cargo Workflow

Using this feature with Cargo works very similar to using it with `rustc`
directly. Again, we generate an instrumented binary, run it to produce data,
merge the data, and feed it back into the compiler. Some things of note:

- We use the `RUSTFLAGS` environment variable in order to pass the PGO compiler
  flags to the compilation of all crates in the program.

- We pass the `--target` flag to Cargo, which prevents the `RUSTFLAGS`
  arguments to be passed to Cargo build scripts. We don't want the build
  scripts to generate a bunch of `.profraw` files.

- We pass `--release` to Cargo because that's where PGO makes the most sense.
  In theory, PGO can also be done on debug builds but there is little reason
  to do so.

- It is recommended to use *absolute paths* for the argument of
  `-Cprofile-generate` and `-Cprofile-use`. Cargo can invoke `rustc` with
  varying working directories, meaning that `rustc` will not be able to find
  the supplied `.profdata` file. With absolute paths this is not an issue.

- It is good practice to make sure that there is no left-over profiling data
  from previous compilation sessions. Just deleting the directory is a simple
  way of doing so (see `STEP 0` below).

This is what the entire workflow looks like:

```bash
# STEP 0: Make sure there is no left-over profiling data from previous runs
rm -rf /tmp/pgo-data

# STEP 1: Build the instrumented binaries
RUSTFLAGS="-Cprofile-generate=/tmp/pgo-data" \
    cargo build --release --target=x86_64-unknown-linux-gnu

# STEP 2: Run the instrumented binaries with some typical data
./target/x86_64-unknown-linux-gnu/release/myprogram mydata1.csv
./target/x86_64-unknown-linux-gnu/release/myprogram mydata2.csv
./target/x86_64-unknown-linux-gnu/release/myprogram mydata3.csv

# STEP 3: Merge the `.profraw` files into a `.profdata` file
llvm-profdata merge -o /tmp/pgo-data/merged.profdata /tmp/pgo-data

# STEP 4: Use the `.profdata` file for guiding optimizations
RUSTFLAGS="-Cprofile-use=/tmp/pgo-data/merged.profdata" \
    cargo build --release --target=x86_64-unknown-linux-gnu
```

### Troubleshooting

- It is recommended to pass `-Cllvm-args=-pgo-warn-missing-function` during the
  `-Cprofile-use` phase. LLVM by default does not warn if it cannot find
  profiling data for a given function. Enabling this warning will make it
  easier to spot errors in your setup.

- There is a [known issue](https://github.com/rust-lang/cargo/issues/7416) in
  Cargo prior to version 1.39 that will prevent PGO from working correctly. Be
  sure to use Cargo 1.39 or newer when doing PGO.

## Further Reading

`rustc`'s PGO support relies entirely on LLVM's implementation of the feature
and is equivalent to what Clang offers via the `-fprofile-generate` /
`-fprofile-use` flags. The [Profile Guided Optimization][clang-pgo] section
in Clang's documentation is therefore an interesting read for anyone who wants
to use PGO with Rust.

[clang-pgo]: https://clang.llvm.org/docs/UsersManual.html#profile-guided-optimization

## Community Maintained Tools

As an alternative to directly using the compiler for Profile-Guided Optimization,
you may choose to go with `cargo-pgo`, which has an intuitive command-line API
and saves you the trouble of doing all the manual work. You can read more about
it in their repository accessible from this link: https://github.com/Kobzol/cargo-pgo

For the sake of completeness, here are the corresponding steps using `cargo-pgo`:

```bash
# Install if you haven't already
cargo install cargo-pgo

cargo pgo build
cargo pgo optimize
```

These steps will do the following just as before:

1. Build an instrumented binary from the source code.
2. Run the instrumented binary to gather PGO profiles.
3. Use the gathered PGO profiles from the last step to build an optimized binary.

<a id=instrument_coverage></a>

# Instrumentation-based Code Coverage

## Introduction

This document describes how to enable and use LLVM instrumentation-based coverage,
via the `-C instrument-coverage` compiler flag.

## How it works

When `-C instrument-coverage` is enabled, the Rust compiler enhances rust-based libraries and binaries by:

-   Automatically injecting calls to an LLVM intrinsic ([`llvm.instrprof.increment`]), at functions and branches in compiled code, to increment counters when conditional sections of code are executed.
-   Embedding additional information in the data section of each library and binary (using the [LLVM Code Coverage Mapping Format] _Version 5_, if compiling with LLVM 12, or _Version 6_, if compiling with LLVM 13 or higher), to define the code regions (start and end positions in the source code) being counted.

When running a coverage-instrumented program, the counter values are written to a `profraw` file at program termination. LLVM bundles tools that read the counter results, combine those results with the coverage map (embedded in the program binary), and generate coverage reports in multiple formats.

[`llvm.instrprof.increment`]: https://llvm.org/docs/LangRef.html#llvm-instrprof-increment-intrinsic
[llvm code coverage mapping format]: https://llvm.org/docs/CoverageMappingFormat.html

> **Note**: `-C instrument-coverage` also automatically enables `-C symbol-mangling-version=v0` (tracking issue [#60705]). The `v0` symbol mangler is strongly recommended. The `v0` demangler can be overridden by explicitly adding `-Z unstable-options -C symbol-mangling-version=legacy`.

[#60705]: https://github.com/rust-lang/rust/issues/60705

## Enable coverage profiling in the Rust compiler

Rust's source-based code coverage requires the Rust "profiler runtime". Without it, compiling with `-C instrument-coverage` generates an error that the profiler runtime is missing.

The Rust `nightly` distribution channel includes the profiler runtime, by default.

> **Important**: If you are building the Rust compiler from the source distribution, the profiler runtime is _not_ enabled in the default `bootstrap.example.toml`. Edit your `bootstrap.toml` file and ensure the `profiler` feature is set it to `true` (either under the `[build]` section, or under the settings for an individual `[target.<triple>]`):
>
> ```toml
> # Build the profiler runtime (required when compiling with options that depend
> # on this runtime, such as `-C profile-generate` or `-C instrument-coverage`).
> profiler = true
> ```

### Building the demangler

LLVM coverage reporting tools generate results that can include function names and other symbol references, and the raw coverage results report symbols using the compiler's "mangled" version of the symbol names, which can be difficult to interpret. To work around this issue, LLVM coverage tools also support a user-specified symbol name demangler.

One option for a Rust demangler is [`rustfilt`], which can be installed with:

```shell
cargo install rustfilt
```

[`rustfilt`]: https://crates.io/crates/rustfilt

## Compiling with coverage enabled

Set the `-C instrument-coverage` compiler flag in order to enable LLVM source-based code coverage profiling.

The default option generates coverage for all functions, including unused (never called) functions and generics. The compiler flag supports an optional value to tailor this behavior. (See [`-C instrument-coverage=<options>`](#-c-instrument-coverageoptions), below.)

With `cargo`, you can instrument your program binary _and_ dependencies at the same time.

For example (if your project's Cargo.toml builds a binary by default):

```shell
$ cd your-project
$ cargo clean
$ RUSTFLAGS="-C instrument-coverage" cargo build
```

If `cargo` is not configured to use your `profiler`-enabled version of `rustc`, set the path explicitly via the `RUSTC` environment variable. Here is another example, using a `stage1` build of `rustc` to compile an `example` binary (from the [`json5format`] crate):

```shell
$ RUSTC=$HOME/rust/build/x86_64-unknown-linux-gnu/stage1/bin/rustc \
    RUSTFLAGS="-C instrument-coverage" \
    cargo build --example formatjson5
```

> **Note**: that some compiler options, combined with `-C instrument-coverage`, can produce LLVM IR and/or linked binaries that are incompatible with LLVM coverage maps. For example, coverage requires references to actual functions in LLVM IR. If any covered function is optimized out, the coverage tools may not be able to process the coverage results. If you need to pass additional options, with coverage enabled, test them early, to confirm you will get the coverage results you expect.

## Running the instrumented binary to generate raw coverage profiling data

In the previous example, `cargo` generated the coverage-instrumented binary `formatjson5`:

```shell
$ echo "{some: 'thing'}" | target/debug/examples/formatjson5 -
```

```json5
{
    some: "thing",
}
```

After running this program, a new file named like `default_11699812450447639123_0_20944` should be in the current working directory.
A new, unique file name will be generated each time the program is run to avoid overwriting previous data.

```shell
$ echo "{some: 'thing'}" | target/debug/examples/formatjson5 -
...
$ ls default_*.profraw
default_11699812450447639123_0_20944.profraw
```

You can also set a specific file name or path for the generated `.profraw` files by using the environment variable `LLVM_PROFILE_FILE`:

```shell
$ echo "{some: 'thing'}" \
    | LLVM_PROFILE_FILE="formatjson5.profraw" target/debug/examples/formatjson5 -
...
$ ls formatjson5.profraw
formatjson5.profraw
```

If `LLVM_PROFILE_FILE` contains a path to a nonexistent directory, the missing directory structure will be created. Additionally, the following special pattern strings are rewritten:

-   `%p` - The process ID.
-   `%h` - The hostname of the machine running the program.
-   `%t` - The value of the TMPDIR environment variable.
-   `%Nm` - the instrumented binary’s signature: The runtime creates a pool of N raw profiles, used for on-line profile merging. The runtime takes care of selecting a raw profile from the pool, locking it, and updating it before the program exits. `N` must be between `1` and `9`, and defaults to `1` if omitted (with simply `%m`).
-   `%c` - Does not add anything to the filename, but enables a mode (on some platforms, including Darwin) in which profile counter updates are continuously synced to a file. This means that if the instrumented program crashes, or is killed by a signal, perfect coverage information can still be recovered.

In the first example above, the value `11699812450447639123_0` in the generated filename is the instrumented binary's signature,
which replaced the `%m` pattern and the value `20944` is the process ID of the binary being executed.

## Installing LLVM coverage tools

LLVM's supplies two tools—`llvm-profdata` and `llvm-cov`—that process coverage data and generate reports. There are several ways to find and/or install these tools, but note that the coverage mapping data generated by the Rust compiler requires LLVM version 12 or higher, and processing the *raw* data may require exactly the LLVM version used by the compiler. (`llvm-cov --version` typically shows the tool's LLVM version number, and `rustc --verbose --version` shows the version of LLVM used by the Rust compiler.)

-   You can install compatible versions of these tools via the `rustup` component `llvm-tools-preview`. This component is the recommended path, though the specific tools available and their interface is not currently subject to Rust's usual stability guarantees. In this case, you may also find `cargo-binutils` useful as a wrapper around these tools.
-   You can install a compatible version of LLVM tools from your operating system distribution, or from your distribution of LLVM.
-   If you are building the Rust compiler from source, you can optionally use the bundled LLVM tools, built from source. Those tool binaries can typically be found in your build platform directory at something like: `rust/build/x86_64-unknown-linux-gnu/llvm/bin/llvm-*`.

The examples in this document show how to use the llvm tools directly.

## Creating coverage reports

Raw profiles have to be indexed before they can be used to generate coverage reports. This is done using [`llvm-profdata merge`], which can combine multiple raw profiles and index them at the same time:

```shell
$ llvm-profdata merge -sparse formatjson5.profraw -o formatjson5.profdata
```

Finally, the `.profdata` file is used, in combination with the coverage map (from the program binary) to generate coverage reports using [`llvm-cov report`], for a coverage summaries; and [`llvm-cov show`], to see detailed coverage of lines and regions (character ranges) overlaid on the original source code.

These commands have several display and filtering options. For example:

```shell
$ llvm-cov show -Xdemangler=rustfilt target/debug/examples/formatjson5 \
    -instr-profile=formatjson5.profdata \
    -show-line-counts-or-regions \
    -show-instantiations \
    -name=add_quoted_string
```

<img alt="Screenshot of sample `llvm-cov show` result, for function add_quoted_string" src="images/llvm-cov-show-01.png" class="center"/>
<br/>
<br/>

Some of the more notable options in this example include:

-   `--Xdemangler=rustfilt` - the command name or path used to demangle Rust symbols (`rustfilt` in the example)
-   `target/debug/examples/formatjson5` - the instrumented binary (from which to extract the coverage map)
-   `--instr-profile=<path-to-file>.profdata` - the location of the `.profdata` file created by `llvm-profdata merge` (from the `.profraw` file generated by the instrumented binary)
-   `--name=<exact-function-name>` - to show coverage for a specific function (or, consider using another filter option, such as `--name-regex=<pattern>`)

[`llvm-profdata merge`]: https://llvm.org/docs/CommandGuide/llvm-profdata.html#profdata-merge
[`llvm-cov report`]: https://llvm.org/docs/CommandGuide/llvm-cov.html#llvm-cov-report
[`llvm-cov show`]: https://llvm.org/docs/CommandGuide/llvm-cov.html#llvm-cov-show

> **Note**: Coverage can also be disabled on an individual function by annotating the function with the [`coverage(off)` attribute] (which requires the feature flag `#![feature(coverage)]`).

[`coverage` attribute]: https://doc.rust-lang.org/unstable-book/language-features/coverage.html

## Interpreting reports

There are four statistics tracked in a coverage summary:

-   Function coverage is the percentage of functions that have been executed at least once. A function is considered to be executed if any of its instantiations are executed.
-   Instantiation coverage is the percentage of function instantiations that have been executed at least once. Generic functions and functions generated from macros are two kinds of functions that may have multiple instantiations.
-   Line coverage is the percentage of code lines that have been executed at least once. Only executable lines within function bodies are considered to be code lines.
-   Region coverage is the percentage of code regions that have been executed at least once. A code region may span multiple lines: for example, in a large function body with no control flow. In other cases, a single line can contain multiple code regions: `return x || (y && z)` has countable code regions for `x` (which may resolve the expression, if `x` is `true`), `|| (y && z)` (executed only if `x` was `false`), and `return` (executed in either situation).

Of these four statistics, function coverage is usually the least granular while region coverage is the most granular. The project-wide totals for each statistic are listed in the summary.

## Test coverage

A typical use case for coverage analysis is test coverage. Rust's source-based coverage tools can both measure your tests' code coverage as percentage, and pinpoint functions and branches not tested.

The following example (using the [`json5format`] crate, for demonstration purposes) show how to generate and analyze coverage results for all tests in a crate.

Since `cargo test` both builds and runs the tests, we set the additional `RUSTFLAGS`, to add the `-C instrument-coverage` flag.

```shell
$ RUSTFLAGS="-C instrument-coverage" \
    cargo test --tests
```

> **Note**: The default for `LLVM_PROFILE_FILE` is `default_%m_%p.profraw`. Versions prior to 1.65 had a default of `default.profraw`, so if using those earlier versions, it is recommended to explicitly set `LLVM_PROFILE_FILE="default_%m_%p.profraw"` to avoid having multiple tests overwrite the `.profraw` files.

Make note of the test binary file paths, displayed after the word "`Running`" in the test output:

```text
   ...
   Compiling json5format v0.1.3 ($HOME/json5format)
    Finished test [unoptimized + debuginfo] target(s) in 14.60s

     Running target/debug/deps/json5format-fececd4653271682
running 25 tests
...
test result: ok. 25 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out

     Running target/debug/deps/lib-30768f9c53506dc5
running 31 tests
...
test result: ok. 31 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out
```

You should have one or more `.profraw` files now, one for each test binary. Run the `profdata` tool to merge them:

```shell
$ llvm-profdata merge -sparse default_*.profraw -o json5format.profdata
```

Then run the `cov` tool, with the `profdata` file and all test binaries:

```shell
$ llvm-cov report \
    --use-color --ignore-filename-regex='/.cargo/registry' \
    --instr-profile=json5format.profdata \
    --object target/debug/deps/lib-30768f9c53506dc5 \
    --object target/debug/deps/json5format-fececd4653271682
$ llvm-cov show \
    --use-color --ignore-filename-regex='/.cargo/registry' \
    --instr-profile=json5format.profdata \
    --object target/debug/deps/lib-30768f9c53506dc5 \
    --object target/debug/deps/json5format-fececd4653271682 \
    --show-instantiations --show-line-counts-or-regions \
    --Xdemangler=rustfilt | less -R
```

> **Note**: If overriding the default `profraw` file name via the `LLVM_PROFILE_FILE` environment variable, it's highly recommended to use the `%m` and `%p` special pattern strings to generate unique file names in the case of more than a single test binary being executed.

> **Note**: The command line option `--ignore-filename-regex=/.cargo/registry`, which excludes the sources for dependencies from the coverage results.\_

### Tips for listing the binaries automatically

For `bash` users, one suggested way to automatically complete the `cov` command with the list of binaries is with a command like:

```bash
$ llvm-cov report \
    $( \
      for file in \
        $( \
          RUSTFLAGS="-C instrument-coverage" \
            cargo test --tests --no-run --message-format=json \
              | jq -r "select(.profile.test == true) | .filenames[]" \
              | grep -v dSYM - \
        ); \
      do \
        printf "%s %s " -object $file; \
      done \
    ) \
  --instr-profile=json5format.profdata --summary-only # and/or other options
```

Adding `--no-run --message-format=json` to the _same_ `cargo test` command used to run
the tests (including the same environment variables and flags) generates output in a JSON
format that `jq` can easily query.

The `printf` command takes this list and generates the `--object <binary>` arguments
for each listed test binary.

### Including doc tests

The previous examples run `cargo test` with `--tests`, which excludes doc tests.[^79417]

To include doc tests in the coverage results, drop the `--tests` flag, and apply the
`-C instrument-coverage` flag, and some doc-test-specific options in the
`RUSTDOCFLAGS` environment variable. (The `llvm-profdata` command does not change.)

```bash
$ RUSTFLAGS="-C instrument-coverage" \
  RUSTDOCFLAGS="-C instrument-coverage -Z unstable-options --persist-doctests target/debug/doctestbins" \
    cargo test
$ llvm-profdata merge -sparse default_*.profraw -o json5format.profdata
```

The `-Z unstable-options --persist-doctests` flag is required, to save the test binaries
(with their coverage maps) for `llvm-cov`.

```bash
$ llvm-cov report \
    $( \
      for file in \
        $( \
          RUSTFLAGS="-C instrument-coverage" \
          RUSTDOCFLAGS="-C instrument-coverage -Z unstable-options --persist-doctests target/debug/doctestbins" \
            cargo test --no-run --message-format=json \
              | jq -r "select(.profile.test == true) | .filenames[]" \
              | grep -v dSYM - \
        ) \
        target/debug/doctestbins/*/rust_out; \
      do \
        [[ -x $file ]] && printf "%s %s " -object $file; \
      done \
    ) \
  --instr-profile=json5format.profdata --summary-only # and/or other options
```

> **Note**: The differences in this `llvm-cov` invocation, compared with the
> version without doc tests, include:

-   The `cargo test ... --no-run` command is updated with the same environment variables
    and flags used to _build_ the tests, _including_ the doc tests.
-   The file glob pattern `target/debug/doctestbins/*/rust_out` adds the `rust_out`
    binaries generated for doc tests (note, however, that some `rust_out` files may not
    be executable binaries).
-   `[[ -x $file ]] &&` filters the files passed on to the `printf`, to include only
    executable binaries.

[^79417]:
    There is ongoing work to resolve a known issue
    [(#79417)](https://github.com/rust-lang/rust/issues/79417) that doc test coverage
    generates incorrect source line numbers in `llvm-cov show` results.

## `-C instrument-coverage=<options>`

- `-C instrument-coverage=no` (or `n`/`off`/`false`):
  Don't enable coverage instrumentation. No functions will be instrumented for coverage.
  - This is the same as not using the `-C instrument-coverage` flag at all.
- `-C instrument-coverage=yes` (or `y`/`on`/`true`):
  Enable coverage instrumentation with the default behaviour.
  Currently this instruments all functions, including unused functions and unused generics.
  - This is the same as `-C instrument-coverage` with no value.

### Other values

- `-C instrument-coverage=all`:
  Currently an alias for `yes`, but may behave differently in the future if
  more fine-grained coverage options are added.
  Using this value is currently not recommended.

## `-Z coverage-options=<options>`

[This unstable option is described in the Unstable Book.](https://doc.rust-lang.org/unstable-book/compiler-flags/coverage-options.html)

## Other references

Rust's implementation and workflow for source-based code coverage is based on the same library and tools used to implement [source-based code coverage in Clang]. (This document is partially based on the Clang guide.)

[source-based code coverage in clang]: https://clang.llvm.org/docs/SourceBasedCodeCoverage.html
[`json5format`]: https://crates.io/crates/json5format

<a id=linker_plugin_lto></a>

# Linker-plugin-based LTO

The `-C linker-plugin-lto` flag allows for deferring the LTO optimization
to the actual linking step, which in turn allows for performing
interprocedural optimizations across programming language boundaries if
all the object files being linked were created by LLVM based toolchains.
The prime example here would be linking Rust code together with
Clang-compiled C/C++ code.

## Usage

There are two main cases how linker plugin based LTO can be used:

 - compiling a Rust `staticlib` that is used as a C ABI dependency
 - compiling a Rust binary where `rustc` invokes the linker

In both cases the Rust code has to be compiled with `-C linker-plugin-lto` and
the C/C++ code with `-flto` or `-flto=thin` so that object files are emitted
as LLVM bitcode.

### Rust `staticlib` as dependency in C/C++ program

In this case the Rust compiler just has to make sure that the object files in
the `staticlib` are in the right format. For linking, a linker with the
LLVM plugin must be used (e.g. LLD).

Using `rustc` directly:

```bash
# Compile the Rust staticlib
rustc --crate-type=staticlib -Clinker-plugin-lto -Copt-level=2 ./lib.rs
# Compile the C code with `-flto=thin`
clang -c -O2 -flto=thin -o cmain.o ./cmain.c
# Link everything, making sure that we use an appropriate linker
clang -flto=thin -fuse-ld=lld -L . -l"name-of-your-rust-lib" -o main -O2 ./cmain.o
```

Using `cargo`:

```bash
# Compile the Rust staticlib
RUSTFLAGS="-Clinker-plugin-lto" cargo build --release
# Compile the C code with `-flto=thin`
clang -c -O2 -flto=thin -o cmain.o ./cmain.c
# Link everything, making sure that we use an appropriate linker
clang -flto=thin -fuse-ld=lld -L . -l"name-of-your-rust-lib" -o main -O2 ./cmain.o
```

### C/C++ code as a dependency in Rust

In this case the linker will be invoked by `rustc`. We again have to make sure
that an appropriate linker is used.

Using `rustc` directly:

```bash
# Compile C code with `-flto`
clang ./clib.c -flto=thin -c -o ./clib.o -O2
# Create a static library from the C code
ar crus ./libxyz.a ./clib.o

# Invoke `rustc` with the additional arguments
rustc -Clinker-plugin-lto -L. -Copt-level=2 -Clinker=clang -Clink-arg=-fuse-ld=lld ./main.rs
```

Using `cargo` directly:

```bash
# Compile C code with `-flto`
clang ./clib.c -flto=thin -c -o ./clib.o -O2
# Create a static library from the C code
ar crus ./libxyz.a ./clib.o

# Set the linking arguments via RUSTFLAGS
RUSTFLAGS="-Clinker-plugin-lto -Clinker=clang -Clink-arg=-fuse-ld=lld" cargo build --release
```

### Explicitly specifying the linker plugin to be used by `rustc`

If one wants to use a linker other than LLD, the LLVM linker plugin has to be
specified explicitly. Otherwise the linker cannot read the object files. The
path to the plugin is passed as an argument to the `-Clinker-plugin-lto`
option:

```bash
rustc -Clinker-plugin-lto="/path/to/LLVMgold.so" -L. -Copt-level=2 ./main.rs
```

### Usage with clang-cl and x86_64-pc-windows-msvc

Cross language LTO can be used with the x86_64-pc-windows-msvc target, but this requires using the
clang-cl compiler instead of the MSVC cl.exe included with Visual Studio Build Tools, and linking
with lld-link. Both clang-cl and lld-link can be downloaded from [LLVM's download page](https://releases.llvm.org/download.html).
Note that most crates in the ecosystem are likely to assume you are using cl.exe if using this target
and that some things, like for example vcpkg, [don't work very well with clang-cl](https://github.com/microsoft/vcpkg/issues/2087).

You will want to make sure your rust major LLVM version matches your installed LLVM tooling version,
otherwise it is likely you will get linker errors:

```bat
rustc -V --verbose
clang-cl --version
```

If you are compiling any proc-macros, you will get this error:

```bash
error: Linker plugin based LTO is not supported together with `-C prefer-dynamic` when
targeting Windows-like targets
```

This is fixed if you explicitly set the target, for example
`cargo build --target x86_64-pc-windows-msvc`
Without an explicit --target the flags will be passed to all compiler invocations (including build
scripts and proc macros), see [cargo docs on rustflags](https://doc.rust-lang.org/cargo/reference/config.html#buildrustflags)

If you have dependencies using the `cc` crate, you will need to set these
environment variables:
```bat
set CC=clang-cl
set CXX=clang-cl
set CFLAGS=/clang:-flto=thin /clang:-fuse-ld=lld-link
set CXXFLAGS=/clang:-flto=thin /clang:-fuse-ld=lld-link
REM Needed because msvc's lib.exe crashes on LLVM LTO .obj files
set AR=llvm-lib
```

If you are specifying lld-link as your linker by setting `linker = "lld-link.exe"` in your cargo config,
you may run into issues with some crates that compile code with separate cargo invocations. You should be
able to get around this problem by setting `-Clinker=lld-link` in RUSTFLAGS

## Toolchain Compatibility

<!-- NOTE: to update the below table, you can use this Python script:

```python
from collections import defaultdict
import subprocess
import sys

def minor_version(version):
    return int(version.split('.')[1])

INSTALL_TOOLCHAIN = ["rustup", "toolchain", "install", "--profile", "minimal"]
subprocess.run(INSTALL_TOOLCHAIN + ["nightly"])

LOWER_BOUND = 73
NIGHTLY_VERSION = minor_version(subprocess.run(
    ["rustc", "+nightly", "--version"],
    capture_output=True,
    text=True).stdout)

def llvm_version(toolchain):
    version_text = subprocess.run(
        ["rustc", "+{}".format(toolchain), "-Vv"],
        capture_output=True,
        text=True).stdout
    return int(version_text.split("LLVM")[1].split(':')[1].split('.')[0])

version_map = defaultdict(lambda: [])
for version in range(LOWER_BOUND, NIGHTLY_VERSION - 1):
    toolchain = "1.{}.0".format(version)
    print("Checking", toolchain, file=sys.stderr)
    subprocess.run(
        INSTALL_TOOLCHAIN + ["--no-self-update", toolchain],
        capture_output=True)
    version_map[llvm_version(toolchain)].append(version)

print("| Rust Version | Clang Version |")
print("|--------------|---------------|")
for clang, rust in sorted(version_map.items()):
    if len(rust) > 1:
        rust_range = "1.{} - 1.{}".format(rust[0], rust[-1])
    else:
        rust_range = "1.{}       ".format(rust[0])
    print("| {}  |      {}       |".format(rust_range, clang))
```

-->

In order for this kind of LTO to work, the LLVM linker plugin must be able to
handle the LLVM bitcode produced by both `rustc` and `clang`.

Best results are achieved by using a `rustc` and `clang` that are based on the
exact same version of LLVM. One can use `rustc -vV` in order to view the LLVM
used by a given `rustc` version. Note that the version number given
here is only an approximation as Rust sometimes uses unstable revisions of
LLVM. However, the approximation is usually reliable.

The following table shows known good combinations of toolchain versions.

| Rust Version | Clang Version |
|--------------|---------------|
| 1.34 - 1.37  |       8       |
| 1.38 - 1.44  |       9       |
| 1.45 - 1.46  |      10       |
| 1.47 - 1.51  |      11       |
| 1.52 - 1.55  |      12       |
| 1.56 - 1.59  |      13       |
| 1.60 - 1.64  |      14       |
| 1.65 - 1.69  |      15       |
| 1.70 - 1.72  |      16       |
| 1.73 - 1.77  |      17       |
| 1.78         |      18       |

Note that the compatibility policy for this feature might change in the future.

<a id=check_cfg></a>

# Checking conditional configurations

`rustc` supports checking that every _reachable_[^reachable] `#[cfg]` matches a list of the
expected config names and values.

This can help with verifying that the crate is correctly handling conditional compilation for
different target platforms or features. It ensures that the cfg settings are consistent between
what is intended and what is used, helping to catch potential bugs or errors early in the
development process.

In order to accomplish that goal, `rustc` accepts the `--check-cfg` flag, which specifies
whether to check conditions and how to check them.

> **Note:** For interacting with this through Cargo,
see [Cargo Specifics](#check_cfg_cargo_specifics) page.

[^reachable]: `rustc` promises to at least check reachable `#[cfg]`, and while non-reachable
`#[cfg]` are not currently checked, they may well be checked in the future without it being a
breaking change.

## Specifying expected names and values

To specify expected names and values, the _check cfg specification_ provides the `cfg(...)`
option which enables specifying for an expected config name and it's expected values.

> **Note:** No implicit expectation is added when using `--cfg`. Users are expected to
pass all expected names and values using the _check cfg specification_.

It has this basic form:

```bash
rustc --check-cfg 'cfg(name, values("value1", "value2", ... "valueN"))'
```

where `name` is a bare identifier (has no quotes) and each `"value"` term is a quoted literal
string. `name` specifies the name of the condition, such as `feature` or `my_cfg`.
`"value"` specify one of the value of that condition name.

When the `cfg(...)` option is specified, `rustc` will check every[^reachable]:
 - `#[cfg(name = "value")]` attribute
 - `#[cfg_attr(name = "value")]` attribute
 - `#[link(name = "a", cfg(name = "value"))]` attribute
 -  `cfg!(name = "value")` macro call

> *The command line `--cfg` arguments are currently NOT checked but may very well be checked
in the future.*

`rustc` will check that the `"value"` specified is present in the list of expected values.
If `"value"` is not in it, then `rustc` will report an `unexpected_cfgs` lint diagnostic.
The default diagnostic level for this lint is `Warn`.

To check for the _none_ value (ie `#[cfg(foo)]`) one can use the `none()` predicate inside
`values()`: `values(none())`. It can be followed or preceded by any number of `"value"`.

To enable checking of values, but to provide an *none*/empty set of expected values
(ie. expect `#[cfg(name)]`), use these forms:

```bash
rustc --check-cfg 'cfg(name)'
rustc --check-cfg 'cfg(name, values(none()))'
```

To enable checking of name but not values, use one of these forms:

  - No expected values (_will lint on every value of `name`_):
    ```bash
    rustc --check-cfg 'cfg(name, values())'
    ```

  - Unknown expected values (_will never lint on value of `name`_):
    ```bash
    rustc --check-cfg 'cfg(name, values(any()))'
    ```

To avoid repeating the same set of values, use this form:

```bash
rustc --check-cfg 'cfg(name1, ..., nameN, values("value1", "value2", ... "valueN"))'
```

To enable checking without specifying any names or values, use this form:

```bash
rustc --check-cfg 'cfg()'
```

The `--check-cfg cfg(...)` option can be repeated, both for the same condition name and for
different names. If it is repeated for the same condition name, then the sets of values for that
condition are merged together (precedence is given to `values(any())`).

> To help out an equivalence table between `--cfg` arguments and `--check-cfg` is available
[down below](#equivalence-table-with---cfg).

## Well known names and values

`rustc` maintains a list of well-known names and their corresponding values in order to avoid
the need to specify them manually.

Well known names and values are implicitly added as long as at least one `--check-cfg` argument
is present.

As of `2025-01-02T`, the list of known names is as follows:

<!--- See CheckCfg::fill_well_known in compiler/rustc_session/src/config.rs -->

 - `clippy`
 - `debug_assertions`
 - `doc`
 - `doctest`
 - `fmt_debug`
 - `miri`
 - `overflow_checks`
 - `panic`
 - `proc_macro`
 - `relocation_model`
 - `rustfmt`
 - `sanitize`
 - `sanitizer_cfi_generalize_pointers`
 - `sanitizer_cfi_normalize_integers`
 - `target_abi`
 - `target_arch`
 - `target_endian`
 - `target_env`
 - `target_family`
 - `target_feature`
 - `target_has_atomic`
 - `target_has_atomic_equal_alignment`
 - `target_has_atomic_load_store`
 - `target_os`
 - `target_pointer_width`
 - `target_thread_local`
 - `target_vendor`
 - `ub_checks`
 - `unix`
 - `windows`

> Starting with 1.85.0, the `test` cfg is consider to be a "userspace" config
> despite being also set by `rustc` and should be managed by the build system itself.

Like with `values(any())`, well known names checking can be disabled by passing `cfg(any())`
as argument to `--check-cfg`.

## Equivalence table with `--cfg`

This table describe the equivalence between a `--cfg` argument to a `--check-cfg` argument.

| `--cfg`                       | `--check-cfg`                                              |
|-------------------------------|------------------------------------------------------------|
| *nothing*                     | *nothing* or `--check-cfg=cfg()` (to enable the checking)  |
| `--cfg foo`                   | `--check-cfg=cfg(foo)` or `--check-cfg=cfg(foo, values(none()))` |
| `--cfg foo=""`                | `--check-cfg=cfg(foo, values(""))`                         |
| `--cfg foo="bar"`             | `--check-cfg=cfg(foo, values("bar"))`                      |
| `--cfg foo="1" --cfg foo="2"` | `--check-cfg=cfg(foo, values("1", "2"))`                   |
| `--cfg foo="1" --cfg bar="2"` | `--check-cfg=cfg(foo, values("1")) --check-cfg=cfg(bar, values("2"))` |
| `--cfg foo --cfg foo="bar"`   | `--check-cfg=cfg(foo, values(none(), "bar"))`              |

## Examples

### Example: Cargo-like `feature` example

Consider this command line:

```bash
rustc --check-cfg 'cfg(feature, values("lion", "zebra"))' \
      --cfg 'feature="lion"' example.rs
```

> This command line indicates that this crate has two features: `lion` and `zebra`. The `lion`
feature is enabled, while the `zebra` feature is disabled.

```rust
#[cfg(feature = "lion")]     // This condition is expected, as "lion" is an
                             // expected value of `feature`
fn tame_lion(lion: Lion) {}

#[cfg(feature = "zebra")]    // This condition is expected, as "zebra" is an expected
                             // value of `feature` but the condition will evaluate
                             // to false since only --cfg feature="lion" was passed
fn ride_zebra(z: Zebra) {}

#[cfg(feature = "platypus")] // This condition is UNEXPECTED, as "platypus" is NOT
                             // an expected value of `feature` and will cause a
                             // the compiler to emit the `unexpected_cfgs` lint
fn poke_platypus() {}

#[cfg(feechure = "lion")]    // This condition is UNEXPECTED, as 'feechure' is NOT
                             // a expected condition name, no `cfg(feechure, ...)`
                             // was passed in `--check-cfg`
fn tame_lion() {}

#[cfg(windows = "unix")]     // This condition is UNEXPECTED, as the well known
                             // 'windows' cfg doesn't expect any values
fn tame_windows() {}
```

### Example: Multiple names and values

```bash
rustc --check-cfg 'cfg(is_embedded, has_feathers)' \
      --check-cfg 'cfg(feature, values("zapping", "lasers"))' \
      --cfg has_feathers --cfg 'feature="zapping"'
```

```rust
#[cfg(is_embedded)]         // This condition is expected, as 'is_embedded' was
                            // provided in --check-cfg and doesn't take any value
fn do_embedded() {}

#[cfg(has_feathers)]        // This condition is expected, as 'has_feathers' was
                            // provided in --check-cfg and doesn't take any value
fn do_features() {}

#[cfg(has_mumble_frotz)]    // This condition is UNEXPECTED, as 'has_mumble_frotz'
                            // was NEVER provided in any --check-cfg arguments
fn do_mumble_frotz() {}

#[cfg(feature = "lasers")]  // This condition is expected, as "lasers" is an
                            // expected value of `feature`
fn shoot_lasers() {}

#[cfg(feature = "monkeys")] // This condition is UNEXPECTED, as "monkeys" is NOT
                            // an expected value of `feature`
fn write_shakespeare() {}
```

### Example: Condition names without values

```bash
rustc --check-cfg 'cfg(is_embedded, has_feathers, values(any()))' \
      --cfg has_feathers
```

```rust
#[cfg(is_embedded)]      // This condition is expected, as 'is_embedded' was
                         // provided in --check-cfg as condition name
fn do_embedded() {}

#[cfg(has_feathers)]     // This condition is expected, as "has_feathers" was
                         // provided in --check-cfg as condition name
fn do_features() {}

#[cfg(has_feathers = "zapping")] // This condition is expected, as "has_feathers"
                                 // was provided and because *any* values is
                                 // expected for 'has_feathers' no
                                 // warning is emitted for the value "zapping"
fn do_zapping() {}

#[cfg(has_mumble_frotz)] // This condition is UNEXPECTED, as 'has_mumble_frotz'
                         // was not provided in any --check-cfg arguments
fn do_mumble_frotz() {}
```

<a id=check_cfg_cargo_specifics></a>

# Cargo Specifics - Checking Conditional Configurations

<!--
This page is currently (as of May 2024) the canonical place for describing the interaction
between Cargo and --check-cfg. It is placed in the rustc book rather than the Cargo book
since check-cfg is primarily a Rust/rustc feature and is therefore considered by T-cargo to
be an implementation detail, at least --check-cfg and the unexpected_cfgs are owned by
rustc, not Cargo.
-->

This document is intended to summarize the principal ways Cargo interacts with
the `unexpected_cfgs` lint and `--check-cfg` flag.
For individual details, refer to the [`--check-cfg` documentation](#check_cfg) and
to the [Cargo book][Cargo].

> The full list of well known cfgs (aka builtins) can be found under [Checking conditional configurations / Well known names and values](#well-known-names-and-values).

## Cargo feature

*See the [`[features]` section in the Cargo book][cargo-features] for more details.*

With the `[features]` table, Cargo provides a mechanism to express conditional compilation and
optional dependencies. Cargo *automatically* declares corresponding cfgs for every feature as
expected.

`Cargo.toml`:
```toml
[features]
serde = ["dep:serde"]
my_feature = []
```

[cargo-features]: https://doc.rust-lang.org/cargo/reference/features.html

## `check-cfg` in `[lints.rust]` table

<!-- Note that T-Cargo considers `lints.rust.unexpected_cfgs.check-cfg` to be an
implementation detail and is therefore documented here and not in Cargo. -->

*See the [`[lints]` section in the Cargo book][cargo-lints-table] for more details.*

When using a statically known custom config (i.e., not dependent on a build-script), Cargo provides
the custom lint config `check-cfg` under `[lints.rust.unexpected_cfgs]`.

It can be used to set custom static [`--check-cfg`](#check_cfg) args, it is mainly useful when
the list of expected cfgs is known in advance.

`Cargo.toml`:
```toml
[lints.rust]
unexpected_cfgs = { level = "warn", check-cfg = ['cfg(has_foo)'] }
```

[cargo-lints-table]: https://doc.rust-lang.org/cargo/reference/manifest.html#the-lints-section

## `cargo::rustc-check-cfg` for `build.rs`/build-script

*See the [`cargo::rustc-check-cfg` section in the Cargo book][cargo-rustc-check-cfg] for more details.*

When setting a custom config with [`cargo::rustc-cfg`][cargo-rustc-cfg], Cargo provides the
corollary instruction: [`cargo::rustc-check-cfg`][cargo-rustc-check-cfg] to expect custom configs.

`build.rs`:
```rust,ignore (cannot-test-this-because-has_foo-isnt-declared)
fn main() {
    println!("cargo::rustc-check-cfg=cfg(has_foo)");
    //        ^^^^^^^^^^^^^^^^^^^^^^ new with Cargo 1.80
    if has_foo() {
        println!("cargo::rustc-cfg=has_foo");
    }
}
```

[cargo-rustc-cfg]: https://doc.rust-lang.org/cargo/reference/build-scripts.html#rustc-cfg
[cargo-rustc-check-cfg]: https://doc.rust-lang.org/cargo/reference/build-scripts.html#rustc-check-cfg

<a id=remap_source_paths></a>

# Remap source paths

`rustc` supports remapping source paths prefixes **as a best effort** in all compiler generated
output, including compiler diagnostics, debugging information, macro expansions, etc.

This is useful for normalizing build products, for example by removing the current directory
out of the paths emitted into object files.

The remapping is done via the `--remap-path-prefix` option.

## `--remap-path-prefix`

It takes a value of the form `FROM=TO` where a path prefix equal to `FROM` is rewritten
to the value `TO`. `FROM` may itself contain an `=` symbol, but `TO` value may not.

The replacement is purely textual, with no consideration of the current system's path separator.

When multiple remappings are given and several of them match, the **last** matching one is applied.

### Example

```bash
rustc --remap-path-prefix "/home/user/project=/redacted"
```

This example replaces all occurrences of `/home/user/project` in emitted paths with `/redacted`.

## Caveats and Limitations

### Linkers generated paths

On some platforms like `x86_64-pc-windows-msvc`, the linker may embed absolute host paths and compiler
arguments into debug info files (like `.pdb`) independently of `rustc`.

Additionally, on Apple platforms, linkers generate [OSO entries] which are not remapped by the compiler
and need to be manually remapped with `-oso_prefix`.

The `--remap-path-prefix` option does not affect these linker-generated paths.

### Textual replacement only

The remapping is strictly textual and does not account for different path separator conventions across
platforms. Care must be taken when specifying prefixes, especially on Windows where both `/` and `\` may
appear in paths.

### External tools

Paths introduced by external tools or environment variables may not be covered by `--remap-path-prefix`
unless explicitly accounted for.

For example, generated code introduced by Cargo's build script may still contain un-remapped paths.

[OSO entries]: https://wiki.dwarfstd.org/Apple%27s_%22Lazy%22_DWARF_Scheme.md

<a id=exploit_mitigations></a>

# Exploit Mitigations

This chapter documents the exploit mitigations supported by the Rust compiler,
and is by no means an extensive survey of the Rust programming language’s
security features.

This chapter is for software engineers working with the Rust programming
language, and assumes prior knowledge of the Rust programming language and its
toolchain.


## Introduction

The Rust programming language provides memory[1] and thread[2] safety
guarantees via its ownership[3], references and borrowing[4], and slice
types[5] features. However, Unsafe Rust[6] introduces unsafe blocks, unsafe
functions and methods, unsafe traits, and new types that are not subject to the
borrowing rules.

Parts of the Rust standard library are implemented as safe abstractions over
unsafe code (and historically have been vulnerable to memory corruption[7]).
Furthermore, the Rust code and documentation encourage creating safe
abstractions over unsafe code. This can cause a false sense of security if
unsafe code is not properly reviewed and tested.

Unsafe Rust introduces features that do not provide the same memory and thread
safety guarantees. This causes programs or libraries to be susceptible to
memory corruption (CWE-119)[8] and concurrency issues (CWE-557)[9]. Modern C
and C++ compilers provide exploit mitigations to increase the difficulty to
exploit vulnerabilities resulting from these issues. Therefore, the Rust
compiler must also support these exploit mitigations in order to mitigate
vulnerabilities resulting from the use of Unsafe Rust. This chapter documents
these exploit mitigations and how they apply to Rust.

This chapter does not discuss the effectiveness of these exploit mitigations as
they vary greatly depending on several factors besides their design and
implementation, but rather describe what they do, so their effectiveness can be
understood within a given context.


## Exploit mitigations

This section documents the exploit mitigations applicable to the Rust compiler
when building programs for the Linux operating system on the AMD64 architecture
and equivalent.[^all-targets] All examples in this section were built using
nightly builds of the Rust compiler on Debian testing.

The Rust Programming Language currently has no specification. The Rust compiler
(i.e., rustc) is the language reference implementation. All references to “the
Rust compiler” in this chapter refer to the language reference implementation.

Table I \
Summary of exploit mitigations supported by the Rust compiler when building
programs for the Linux operating system on the AMD64 architecture and
equivalent.

| Exploit mitigation | Supported | Enabled by default | Since |
| - | - | - | - |
| Position-independent executable | Yes | Yes | 0.12.0 (2014-10-09) |
| Integer overflow checks | Yes | (enabled when debug assertions are enabled, and disabled when debug assertions are disabled) | 1.1.0 (2015-06-25) |
| Non-executable memory regions | Yes | Yes | 1.8.0 (2016-04-14) |
| Stack clashing protection | Yes | Yes | 1.20.0 (2017-08-31) |
| Read-only relocations and immediate binding | Yes | Yes | 1.21.0 (2017-10-12) |
| Heap corruption protection | Yes | Yes | 1.32.0 (2019-01-17) (via operating system default or specified allocator) |
| Stack smashing protection | Yes | No, `-Z stack-protector` | Nightly |
| Forward-edge control flow protection | Yes | No, `-Z sanitizer=cfi` | Nightly |
| Backward-edge control flow protection (e.g., shadow and safe stack) | Yes | No, `-Z sanitizer=shadow-call-stack,safestack` | Nightly |

[^all-targets]: See <https://github.com/rust-lang/rust/tree/master/compiler/rustc_target/src/spec>
    for a list of targets and their default options.

### Position-independent executable

Position-independent executable increases the difficulty of the use of code
reuse exploitation techniques, such as return-oriented programming (ROP) and
variants, by generating position-independent code for the executable, and
instructing the dynamic linker to load it similarly to a shared object at a
random load address, thus also benefiting from address-space layout
randomization (ASLR). This is also referred to as “full ASLR”.

The Rust compiler supports position-independent executable, and enables it by
default since version 0.12.0 (2014-10-09)[10]–[13].

```text
$ readelf -h target/release/hello-rust | grep Type:
  Type:                              DYN (Shared object file)
```
Fig. 1. Checking if an executable is a position-independent executable.

An executable with an object type of `ET_DYN` (i.e., shared object) and not
`ET_EXEC` (i.e., executable) is a position-independent executable (see Fig. 1).


### Integer overflow checks

Integer overflow checks protects programs from undefined and unintended
behavior (which may cause vulnerabilities) by checking for results of signed
and unsigned integer computations that cannot be represented in their type,
resulting in an overflow or wraparound.

The Rust compiler supports integer overflow checks, and enables it when debug
assertions are enabled since version 1.0.0 (2015-05-15)[14]–[17], but support
for it was not completed until version 1.1.0 (2015-06-25)[16]. An option to
control integer overflow checks was later stabilized in version 1.17.0
(2017-04-27)[18]–[20].

```compile_fail
fn main() {
    let u: u8 = 255;
    println!("u: {}", u + 1);
}
```
Fig. 2. hello-rust-integer program.

```text
$ cargo run
   Compiling hello-rust-integer v0.1.0 (/home/rcvalle/hello-rust-integer)
    Finished dev [unoptimized + debuginfo] target(s) in 0.23s
     Running `target/debug/hello-rust-integer`
thread 'main' panicked at 'attempt to add with overflow', src/main.rs:3:23
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace.
```
Fig. 3. Build and execution of hello-rust-integer with debug assertions
enabled.

```text
$ cargo run --release
   Compiling hello-rust-integer v0.1.0 (/home/rcvalle/hello-rust-integer)
    Finished release [optimized] target(s) in 0.23s
     Running `target/release/hello-rust-integer`
u: 0
```
Fig. 4. Build and execution of hello-rust-integer with debug assertions
disabled.

Integer overflow checks are enabled when debug assertions are enabled (see Fig.
3), and disabled when debug assertions are disabled (see Fig. 4). To enable
integer overflow checks independently, use the option to control integer
overflow checks, scoped attributes, or explicit checking methods such as
`checked_add`[^checked-methods].

It is recommended that explicit wrapping methods such as `wrapping_add` be used
when wrapping semantics are intended, and that explicit checking and wrapping
methods always be used when using Unsafe Rust.

[^checked-methods]: https://doc.rust-lang.org/std/primitive.u32.html) for more
    information on the checked, overflowing, saturating, and wrapping methods
    (using u32 as an example).

### Non-executable memory regions

Non-executable memory regions increase the difficulty of exploitation by
limiting the memory regions that can be used to execute arbitrary code. Most
modern processors provide support for the operating system to mark memory
regions as non executable, but it was previously emulated by software, such as
in grsecurity/PaX’s [PAGEEXEC](https://pax.grsecurity.net/docs/pageexec.txt)
and [SEGMEXEC](https://pax.grsecurity.net/docs/segmexec.txt), on processors
that did not provide support for it. This is also known as “No Execute (NX)
Bit”, “Execute Disable (XD) Bit”, “Execute Never (XN) Bit”, and others.

The Rust compiler supports non-executable memory regions, and enables it by
default since its initial release, version 0.1 (2012-01-20)[21], [22], but has
regressed since then[23]–[25], and enforced by default since version 1.8.0
(2016-04-14)[25].

```text
$ readelf -l target/release/hello-rust | grep -A 1 GNU_STACK
  GNU_STACK      0x0000000000000000 0x0000000000000000 0x0000000000000000
                 0x0000000000000000 0x0000000000000000  RW     0x10
```
Fig. 5. Checking if non-executable memory regions are enabled for a given
binary.

The presence of an element of type `PT_GNU_STACK` in the program header table
with the `PF_X` (i.e., executable) flag unset indicates non-executable memory
regions[^other-regions] are enabled for a given binary (see Fig. 5).
Conversely, the presence of an element of type `PT_GNU_STACK` in the program
header table with the `PF_X` flag set or the absence of an element of type
`PT_GNU_STACK` in the program header table indicates non-executable memory
regions are not enabled for a given binary.

[^other-regions]: See the [Appendix section](#appendix) for more information
    on why it affects other memory regions besides the stack.

### Stack clashing protection

Stack clashing protection protects the stack from overlapping with another
memory region—allowing arbitrary data in both to be overwritten using each
other—by reading from the stack pages as the stack grows to cause a page fault
when attempting to read from the guard page/region. This is also referred to as
“stack probes” or “stack probing”.

The Rust compiler supports stack clashing protection via stack probing, and
enables it by default since version 1.20.0 (2017-08-31)[26]–[29].

```rust
fn main() {
    let v: [u8; 16384] = [1; 16384];
    let first = &v[0];
    println!("The first element is: {first}");
}
```
Fig. 6. hello-rust-stack-probe-1 program.

![Screenshot of IDA Pro listing the "unrolled loop" stack probe variant in modified hello-rust.](images/image1.png "The \"unrolled loop\" stack probe variant in modified hello-rust.")
Fig. 7. The "unrolled loop" stack probe variant in modified hello-rust.

```rust
fn main() {
    let v: [u8; 65536] = [1; 65536];
    let first = &v[0];
    println!("The first element is: {first}");
}
```
Fig. 8. hello-rust-stack-probe-2 program.

![Screenshot of IDA Pro listing the "standard loop" stack probe variant in modified hello-rust.](images/image2.png "The \"standard loop\" stack probe variant in modified hello-rust.")
Fig. 9. The "standard loop" stack probe variant in modified hello-rust.

To check if stack clashing protection is enabled for a given binary, look for
any of the two stack probe variants in the prologue of functions whose stack
size is larger than a page size (see Figs. 6–9).


### Read-only relocations and immediate binding

**Read-only relocations** protect segments containing relocations and
relocation information (i.e., `.init_array`, `.fini_array`, `.dynamic`, and
`.got`) from being overwritten by marking these segments read only. This is
also referred to as “partial RELRO”.

The Rust compiler supports read-only relocations, and enables it by default
since version 1.21.0 (2017-10-12)[30], [31].

```text
$ readelf -l target/release/hello-rust | grep GNU_RELRO
  GNU_RELRO      0x000000000002ee00 0x000000000002fe00 0x000000000002fe00
```
Fig. 9. Checking if read-only relocations is enabled for a given binary.

The presence of an element of type `PT_GNU_RELRO` in the program header table
indicates read-only relocations are enabled for a given binary (see Fig. 9).
Conversely, the absence of an element of type `PT_GNU_RELRO` in the program
header table indicates read-only relocations are not enabled for a given
binary.

**Immediate binding** protects additional segments containing relocations
(i.e., `.got.plt`) from being overwritten by instructing the dynamic linker to
perform all relocations before transferring control to the program during
startup, so all segments containing relocations can be marked read only (when
combined with read-only relocations). This is also referred to as “full RELRO”.

The Rust compiler supports immediate binding, and enables it by default since
version 1.21.0 (2017-10-12)[30], [31].

```text
$ readelf -d target/release/hello-rust | grep BIND_NOW
 0x000000000000001e (FLAGS)              BIND_NOW
```
Fig. 10. Checking if immediate binding is enabled for a given binary.

The presence of an element with the `DT_BIND_NOW` tag and the `DF_BIND_NOW`
flag[^bind-now] in the dynamic section indicates immediate binding
is enabled for a given binary (see Fig. 10). Conversely, the absence of an
element with the `DT_BIND_NOW` tag and the `DF_BIND_NOW` flag in the dynamic
section indicates immediate binding is not enabled for a given binary.

The presence of both an element of type `PT_GNU_RELRO` in the program header
table and of an element with the `DT_BIND_NOW` tag and the `DF_BIND_NOW` flag
in the dynamic section indicates full RELRO is enabled for a given binary (see
Figs. 9–10).

[^bind-now]: And the `DF_1_NOW` flag for some link editors.

### Heap corruption protection

Heap corruption protection protects memory allocated dynamically by performing
several checks, such as checks for corrupted links between list elements,
invalid pointers, invalid sizes, double/multiple “frees” of the same memory
allocated, and many corner cases of these. These checks are implementation
specific, and vary per allocator.

[ARM Memory Tagging Extension
(MTE)](https://community.arm.com/developer/ip-products/processors/b/processors-ip-blog/posts/enhancing-memory-safety),
when available, will provide hardware assistance for a probabilistic mitigation
to detect memory safety violations by tagging memory allocations, and
automatically checking that the correct tag is used on every memory access.

Rust’s default allocator has historically been
[jemalloc](http://jemalloc.net/), and it has long been the cause of issues and
the subject of much discussion[32]–[38]. Consequently, it has been removed as
the default allocator in favor of the operating system’s standard C library
default allocator[^linx-allocator] since version 1.32.0 (2019-01-17)[39].

```rust,no_run
fn main() {
    let mut x = Box::new([0; 1024]);

    for i in 0..1026 {
        unsafe {
            let elem = x.get_unchecked_mut(i);
            *elem = 0x4141414141414141u64;
        }
    }
}
```
Fig. 11. hello-rust-heap program.

```text
$ cargo run
   Compiling hello-rust-heap v0.1.0 (/home/rcvalle/hello-rust-heap)
    Finished dev [unoptimized + debuginfo] target(s) in 0.25s
     Running `target/debug/hello-rust-heap`
free(): invalid next size (normal)
Aborted
```
Fig. 12. Build and execution of hello-rust-heap with debug assertions enabled.

```text
$ cargo run --release
   Compiling hello-rust-heap v0.1.0 (/home/rcvalle/hello-rust-heap)
    Finished release [optimized] target(s) in 0.25s
     Running `target/release/hello-rust-heap`
free(): invalid next size (normal)
Aborted
```
Fig. 13. Build and execution of hello-rust-heap with debug assertions disabled.

Heap corruption checks are performed when using the default allocator (i.e.,
the GNU Allocator) (see Figs. 12–13).

[^linx-allocator]: Linux's standard C library default allocator is the GNU
    Allocator, which is derived from ptmalloc (pthreads malloc) by Wolfram Gloger,
    which in turn is derived from dlmalloc (Doug Lea malloc) by Doug Lea.

### Stack smashing protection

Stack smashing protection protects programs from stack-based buffer overflows
by inserting a random guard value between local variables and the saved return
instruction pointer, and checking if this value has changed when returning from
a function. This is also known as “Stack Protector” or “Stack Smashing
Protector (SSP)”.

The Rust compiler supports stack smashing protection on nightly builds[40].

![Screenshot of IDA Pro listing cross references to __stack_chk_fail in hello-rust.](images/image3.png "Cross references to __stack_chk_fail in hello-rust.")
Fig. 14. IDA Pro listing cross references to `__stack_chk_fail` in hello-rust.

To check if stack smashing protection is enabled for a given binary, search for
cross references to `__stack_chk_fail` (see Fig. 14).


### Forward-edge control flow protection

Forward-edge control flow protection protects programs from having its control
flow changed/hijacked by performing checks to ensure that destinations of
indirect branches are one of their valid destinations in the control flow
graph. The comprehensiveness of these checks vary per implementation. This is
also known as “forward-edge control flow integrity (CFI)”.

Newer processors provide hardware assistance for forward-edge control flow
protection, such as ARM Branch Target Identification (BTI), ARM Pointer
Authentication, and Intel Indirect Branch Tracking (IBT) as part of Intel
Control-flow Enforcement Technology (CET). However, ARM BTI and Intel IBT
-based implementations are less comprehensive than software-based
implementations such as [LLVM ControlFlowIntegrity
(CFI)](https://clang.llvm.org/docs/ControlFlowIntegrity.html), and the
commercially available [grsecurity/PaX Reuse Attack Protector
(RAP)](https://grsecurity.net/rap_faq).

The Rust compiler supports forward-edge control flow protection on nightly
builds[41]-[42] [^win-cfg].

```text
$ readelf -s -W target/release/hello-rust | grep "\.cfi"
     5: 0000000000006480   657 FUNC    LOCAL  DEFAULT   15 _ZN10hello_rust4main17h4e359f1dcd627c83E.cfi
```
Fig. 15. Checking if LLVM CFI is enabled for a given binary.

The presence of symbols suffixed with ".cfi" or the `__cfi_init` symbol (and
references to `__cfi_check`) indicates that LLVM CFI (i.e., forward-edge
control flow protection) is enabled for a given binary. Conversely, the absence
of symbols suffixed with ".cfi" or the `__cfi_init` symbol (and references to
`__cfi_check`) indicates that LLVM CFI is not enabled for a given binary (see
Fig. 15).

[^win-cfg]: It also supports Control Flow Guard (CFG) on Windows (see
    <https://github.com/rust-lang/rust/issues/68793>).

### Backward-edge control flow protection

**Shadow stack** protects saved return instruction pointers from being
overwritten by storing a copy of them on a separate (shadow) stack, and using
these copies as authoritative values when returning from functions. This is
also known as “ShadowCallStack” and “Return Flow Guard”, and is considered an
implementation of backward-edge control flow protection (or “backward-edge
CFI”).

**Safe stack** protects not only the saved return instruction pointers, but
also register spills and some local variables from being overwritten by storing
unsafe variables, such as large arrays, on a separate (unsafe) stack, and using
these unsafe variables on the separate stack instead. This is also known as
“SafeStack”, and is also considered an implementation of backward-edge control
flow protection.

Both shadow and safe stack are intended to be a more comprehensive alternatives
to stack smashing protection as they protect the saved return instruction
pointers (and other data in the case of safe stack) from arbitrary writes and
non-linear out-of-bounds writes.

Newer processors provide hardware assistance for backward-edge control flow
protection, such as ARM Pointer Authentication, and Intel Shadow Stack as part
of Intel CET.

The Rust compiler supports shadow stack for the AArch64 architecture[^amd64-shadow] on
nightly builds[43]-[44], and also supports safe stack on nightly
builds[45]-[46].

```text
$ readelf -s target/release/hello-rust | grep __safestack_init
   678: 0000000000008c80   426 FUNC    GLOBAL DEFAULT   15 __safestack_init
```
Fig. 16. Checking if LLVM SafeStack is enabled for a given binary.

The presence of the `__safestack_init` symbol indicates that LLVM SafeStack is
enabled for a given binary. Conversely, the absence of the `__safestack_init`
symbol indicates that LLVM SafeStack is not enabled for a given binary (see
Fig. 16).

[^amd64-shadow]: The shadow stack implementation for the AMD64 architecture
    and equivalent in LLVM was removed due to performance and security issues.


## Appendix

As of the latest version of the [Linux Standard Base (LSB) Core
Specification](https://refspecs.linuxfoundation.org/LSB_5.0.0/LSB-Core-generic/LSB-Core-generic/progheader.html),
the `PT_GNU_STACK` program header indicates whether the stack should be
executable, and the absence of this header indicates that the stack should be
executable. However, the Linux kernel currently sets the `READ_IMPLIES_EXEC`
personality upon loading any executable with the `PT_GNU_STACK` program header
and the `PF_X` flag set or with the absence of this header, resulting in not
only the stack, but also all readable virtual memory mappings being executable.

An attempt to fix this [was made in
2012](https://lore.kernel.org/lkml/f298f914-2239-44e4-8aa1-a51282e7fac0@zmail15.collab.prod.int.phx2.redhat.com/),
and another [was made in
2020](https://lore.kernel.org/kernel-hardening/20200327064820.12602-1-keescook@chromium.org/).
The former never landed, and the latter partially fixed it, but introduced
other issues—the absence of the `PT_GNU_STACK` program header still causes not
only the stack, but also all readable virtual memory mappings to be executable
in some architectures, such as IA-32 and equivalent (or causes the stack to be
non-executable in some architectures, such as AMD64 and equivalent,
contradicting the LSB).

The `READ_IMPLIES_EXEC` personality needs to be completely separated from the
`PT_GNU_STACK` program header by having a separate option for it (or setarch -X
could just be used whenever `READ_IMPLIES_EXEC` is needed), and the absence of
the `PT_GNU_STACK` program header needs to have more secure defaults (unrelated
to `READ_IMPLIES_EXEC`).


## References

1. D. Hosfelt. “Fearless security: memory safety.” Mozilla Hacks.
   <https://hacks.mozilla.org/2019/01/fearless-security-memory-safety/>.

2. D. Hosfelt. “Fearless security: thread safety.” Mozilla Hacks.
   <https://hacks.mozilla.org/2019/02/fearless-security-thread-safety/>.

3. S. Klabnik and C. Nichols. “What Is Ownership?.” The Rust Programming
   Language. [https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html).

4. S. Klabnik and C. Nichols. “References and Borrowing.” The Rust
   Programming Language.
   [https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html](https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html).

5. S. Klabnik and C. Nichols. “The Slice Type.” The Rust Programming
   Language. [https://doc.rust-lang.org/book/ch04-03-slices.html](https://doc.rust-lang.org/book/ch04-03-slices.html).

6. S. Klabnik and C. Nichols. “Unsafe Rust.” The Rust Programming Language.
   [https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html](https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html).

7. S. Davidoff. “How Rust’s standard library was vulnerable for years and
   nobody noticed.” Medium.
   <https://medium.com/@shnatsel/how-rusts-standard-library-was-vulnerable-for-years-and-nobody-noticed-aebf0503c3d6>.

8. “Improper restriction of operations within the bounds of a memory buffer
   (CWE-119).” MITRE CWE List.
   <https://cwe.mitre.org/data/definitions/119.html>.

9. “Concurrency issues (CWE-557).” MITRE CWE List.
   <https://cwe.mitre.org/data/definitions/557.html>.

10. K. McAllister. “Memory exploit mitigations #15179.” GitHub.
    <https://github.com/rust-lang/rust/issues/15179>.

11. K. McAllister. “RFC: Memory exploit mitigation #145.” GitHub.
    <https://github.com/rust-lang/rfcs/pull/145>.

12. K. McAllister. “RFC: Memory exploit mitigation.” GitHub.
    <https://github.com/kmcallister/rfcs/blob/hardening/active/0000-memory-exploit-mitigation.md>.

13. D. Micay. “Enable PIE by default on Linux for full ASLR #16340.” GitHub.
    <https://github.com/rust-lang/rust/pull/16340>.

14. N. Matsakis. “Integer overflow #560.” GitHub.
    <https://github.com/rust-lang/rfcs/pull/560>.

15. G. Lehel and N. Matsakis. “Integer overflow.” GitHub.
    <https://rust-lang.github.io/rfcs/0560-integer-overflow.html>.

16. A. Turon. “Tracking issue for integer overflow (RFC 560) #22020.”
    GitHub. <https://github.com/rust-lang/rust/issues/22020>.

17. H. Wilson. “Myths and legends about integer overflow in Rust.” Huon on
    the Internet.
    <http://huonw.github.io/blog/2016/04/myths-and-legends-about-integer-overflow-in-rust/>.

18. B. Anderson. “Stabilize -C overflow-checks #1535.” GitHub.
    <https://github.com/rust-lang/rfcs/pull/1535>.

19. B. Anderson. “Stable overflow checks.” GitHub.
    <https://github.com/brson/rfcs/blob/overflow/text/0000-stable-overflow-checks.md>.

20. N. Froyd. “Add -C overflow-checks option #40037.” GitHub.
    <https://github.com/rust-lang/rust/pull/40037>.

21. R. Á. de Espíndola. “rustc requires executable stack #798.” GitHub.
    <https://github.com/rust-lang/rust/issues/798>.

22. A. Seipp. “Make sure librustrt.so is linked with a non-executable stack.
    #1066.” GitHub. <https://github.com/rust-lang/rust/pull/1066>.

23. D. Micay. “Rust binaries should not have an executable stack #5643.”
    GitHub. <https://github.com/rust-lang/rust/issues/5643>.

24. D. Micay. “Mark the assembly object stacks as non-executable #5647.”
    GitHub. <https://github.com/rust-lang/rust/pull/5647>.

25. A. Clark. “Explicitly disable stack execution on linux and bsd #30859.”
    GitHub. <https://github.com/rust-lang/rust/pull/30859>.

26. Zoxc. “Replace stack overflow checking with stack probes #16012.” GitHub.
    <https://github.com/rust-lang/rust/issues/16012>.

27. A. Crichton. “rustc: Implement stack probes for x86 #42816.” GitHub.
    <https://github.com/rust-lang/rust/pull/42816>.

28. A. Crichton. “Add \_\_rust\_probestack intrinsic #175.” GitHub.
    <https://github.com/rust-lang/compiler-builtins/pull/175>.

29. S. Guelton, S. Ledru, J. Stone. “Bringing Stack Clash Protection to Clang /
    X86 — the Open Source Way.” The LLVM Project Blog.
    <https://blog.llvm.org/posts/2021-01-05-stack-clash-protection/>.

30. B. Anderson. “Consider applying -Wl,-z,relro or -Wl,-z,relro,-z,now by
    default #29877.” GitHub. <https://github.com/rust-lang/rust/issues/29877>.

31. J. Löthberg. “Add support for full RELRO #43170.” GitHub.
    <https://github.com/rust-lang/rust/pull/43170>.

32. N. Matsakis. “Allocators in Rust.” Baby Steps.
    <http://smallcultfollowing.com/babysteps/blog/2014/11/14/allocators-in-rust/>.

33. A. Crichton. “RFC: Allow changing the default allocator #1183.” GitHub.
    <https://github.com/rust-lang/rfcs/pull/1183>.

34. A. Crichton. “RFC: Swap out jemalloc.” GitHub.
    <https://rust-lang.github.io/rfcs/1183-swap-out-jemalloc.html>.

35. A. Crichton. “Tracking issue for changing the global, default allocator
    (RFC 1974) #27389.” GitHub.
    <https://github.com/rust-lang/rust/issues/27389>.

36. S. Fackler. “Prepare global allocators for stabilization #1974.” GitHub.
    <https://github.com/rust-lang/rfcs/pull/1974>.

37. A. Crichton. “RFC: Global allocators.” GitHub.
    <https://rust-lang.github.io/rfcs/1974-global-allocators.html>.

38. B. Anderson. “Switch the default global allocator to System, remove
    alloc\_jemalloc, use jemallocator in rustc #36963.” GitHub.
    <https://github.com/rust-lang/rust/issues/36963>.

39. A. Crichton. “Remove the alloc\_jemalloc crate #55238.” GitHub.
    <https://github.com/rust-lang/rust/pull/55238>.

40. bbjornse. “Add codegen option for using LLVM stack smash protection #84197.”
    GitHub. <https://github.com/rust-lang/rust/pull/84197>

41. R. de C. Valle. “Tracking Issue for LLVM Control Flow Integrity (CFI) Support
    for Rust #89653.” GitHub. <https://github.com/rust-lang/rust/issues/89653>.

42. “ControlFlowIntegrity.” The Rust Unstable Book.
    [https://doc.rust-lang.org/unstable-book/compiler-flags/sanitizer.html#controlflowintegrity](https://doc.rust-lang.org/unstable-book/compiler-flags/sanitizer.html#controlflowintegrity).

43. I. Lozano. “Add support for LLVM ShadowCallStack #98208.” GitHub.
    <https://github.com/rust-lang/rust/pull/98208>.

44. “ShadowCallStack.” The Rust Unstable Book.
    [https://doc.rust-lang.org/unstable-book/compiler-flags/sanitizer.html#shadowcallstack](https://doc.rust-lang.org/unstable-book/compiler-flags/sanitizer.html#shadowcallstack).

45. W. Wiser. “Add support for LLVM SafeStack #112000” GitHub.
    <https://github.com/rust-lang/rust/pull/112000>

46. “SafeStack.” The Rust Unstable Book.
    [https://doc.rust-lang/org/unstable-book/compiler-flags/sanitizer.html#safestack](https://doc.rust-lang.org/unstable-book/compiler-flags/sanitizer.html#safestack).

<a id=symbol_mangling_index></a>

# Symbol Mangling

[Symbol name mangling] is used by `rustc` to encode a unique name for symbols that are used during code generation.
The encoded names are used by the linker to associate the name with the thing it refers to.

The method for mangling the names can be controlled with the [`-C symbol-mangling-version`] option.

[Symbol name mangling]: https://en.wikipedia.org/wiki/Name_mangling
[`-C symbol-mangling-version`]: #symbol-mangling-version

## Per-item control

The [`#[no_mangle]` attribute][reference-no_mangle] can be used on items to disable name mangling on that item.

The [`#[export_name]`attribute][reference-export_name] can be used to specify the exact name that will be used for a function or static.

Items listed in an [`extern` block][reference-extern-block] use the identifier of the item without mangling to refer to the item.
The [`#[link_name]` attribute][reference-link_name] can be used to change that name.

<!--
FIXME: This is incomplete for wasm, per https://github.com/rust-lang/rust/blob/d4c364347ce65cf083d4419195b8232440928d4d/compiler/rustc_symbol_mangling/src/lib.rs#L191-L210
-->

[reference-no_mangle]: https://doc.rust-lang.org/reference/abi.html#the-no_mangle-attribute
[reference-export_name]: https://doc.rust-lang.org/reference/abi.html#the-export_name-attribute
[reference-link_name]: https://doc.rust-lang.org/reference/items/external-blocks.html#the-link_name-attribute
[reference-extern-block]: https://doc.rust-lang.org/reference/items/external-blocks.html

## Decoding

The encoded names may need to be decoded in some situations.
For example, debuggers and other tooling may need to demangle the name so that it is more readable to the user.
Recent versions of `gdb` and `lldb` have built-in support for demangling Rust identifiers.
In situations where you need to do your own demangling, the [`rustc-demangle`] crate can be used to programmatically demangle names.
[`rustfilt`] is a CLI tool which can demangle names.

An example of running rustfilt:

```text
$ rustfilt _RNvCskwGfYPst2Cb_3foo16example_function
foo::example_function
```

[`rustc-demangle`]: https://crates.io/crates/rustc-demangle
[`rustfilt`]: https://crates.io/crates/rustfilt

## Mangling versions

`rustc` supports different mangling versions which encode the names in different ways.
The legacy version (which is currently the default) is not described here.
The "v0" mangling scheme addresses several limitations of the legacy format,
and is described in the [v0 Symbol Format](#v0) chapter.

<a id=symbol_mangling_v0></a>

# v0 Symbol Format

The v0 mangling format was introduced in [RFC 2603].
It has the following properties:

- It provides an unambiguous string encoding for everything that can end up in a binary's symbol table.
- It encodes information about generic parameters in a reversible way.
- The mangled symbols are *decodable* such that the demangled form should be easily identifiable as some concrete instance of e.g. a polymorphic function.
- It has a consistent definition that does not rely on pretty-printing certain language constructs.
- Symbols can be restricted to only consist of the characters `A-Z`, `a-z`, `0-9`, and `_`.
  This helps ensure that it is platform-independent,
  where other characters might have special meaning in some context (e.g. `.` for MSVC `DEF` files).
  Unicode symbols are optionally supported.
- It tries to stay efficient, avoiding unnecessarily long names,
  and avoiding computationally expensive operations to demangle.

The v0 format is not intended to be compatible with other mangling schemes (such as C++).

The v0 format is not presented as a stable ABI for Rust.
This format is currently intended to be well-defined enough that a demangler can produce a reasonable human-readable form of the symbol.
There are several implementation-defined portions that result in it not being possible to entirely predict how a given Rust entity will be encoded.

The sections below define the encoding of a v0 symbol.
There is no standardized demangled form of the symbols,
though suggestions are provided for how to demangle a symbol.
Implementers may choose to demangle in different ways.

## Extensions

This format may be extended in the future to add new tags as Rust is extended with new language items.
To be forward compatible, demanglers should gracefully handle symbols that have encodings where it encounters a tag character not described in this document.
For example, they may fall back to displaying the mangled symbol.
The format may be extended anywhere there is a tag character, such as the [type] rule.
The meaning of existing tags and encodings will not be changed.

## Grammar notation

The format of an encoded symbol is illustrated as a context free grammar in an extended BNF-like syntax.
A consolidated summary can be found in the [Symbol grammar summary][summary].

| Name | Syntax | Example | Description |
|------|--------|---------|-------------|
| Rule | →      | <nobr>A → *B* *C*</nobr> | A production. |
| Concatenation | whitespace | <nobr>A → *B* *C* *D*</nobr> | Individual elements in sequence left-to-right. |
| Alternative | \| | <nobr>A → *B* \| *C*</nobr> | Matches either one or the other. |
| Grouping | () | <nobr>A → *B* (*C* \| *D*) *E*</nobr> | Groups multiple elements as one. |
| Repetition | {} | <nobr>A → {*B*}</nobr> | Repeats the enclosed zero or more times. |
| Option | <sub>opt</sub> | <nobr>A → *B*<sub>opt</sub> *C*</nobr> | An optional element. |
| Literal | `monospace` | <nobr>A → `G`</nobr> | A terminal matching the exact characters case-sensitive. |

## Symbol name
[symbol-name]: #symbol-name

> symbol-name → `_R` *[decimal-number]*<sub>opt</sub> *[path]* *[instantiating-crate]*<sub>opt</sub> *[vendor-specific-suffix]*<sub>opt</sub>

A mangled symbol starts with the two characters `_R` which is a prefix to identify the symbol as a Rust symbol.
The prefix can optionally be followed by a *[decimal-number]* which specifies the encoding version.
This number is currently not used, and is never present in the current encoding.
Following that is a *[path]* which encodes the path to an entity.
The path is followed by an optional *[instantiating-crate]* which helps to disambiguate entities which may be instantiated multiple times in separate crates.
The final part is an optional *[vendor-specific-suffix]*.

> **Recommended Demangling**
>
> A *symbol-name* should be displayed as the *[path]*.
> The *[instantiating-crate]* and the *[vendor-specific-suffix]* usually need not be displayed.

> Example:
> ```rust
> std::path::PathBuf::new();
> ```
>
> The symbol for `PathBuf::new` in crate `mycrate` is:
>
> ```text
> _RNvMsr_NtCs3ssYzQotkvD_3std4pathNtB5_7PathBuf3newCs15kBYyAo9fc_7mycrate
> ├┘└───────────────────────┬──────────────────────┘└──────────┬─────────┘
> │                         │                                  │
> │                         │                                  └── instantiating-crate path "mycrate"
> │                         └───────────────────────────────────── path to std::path::PathBuf::new
> └─────────────────────────────────────────────────────────────── `_R` symbol prefix
> ```
>
> Recommended demangling: `<std::path::PathBuf>::new`

## Symbol path
[path]: #symbol-path

> path → \
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *[crate-root]* \
> &nbsp;&nbsp; | *[inherent-impl]* \
> &nbsp;&nbsp; | *[trait-impl]* \
> &nbsp;&nbsp; | *[trait-definition]* \
> &nbsp;&nbsp; | *[nested-path]* \
> &nbsp;&nbsp; | *[generic-args]* \
> &nbsp;&nbsp; | *[backref]*

A *path* represents a variant of a [Rust path][reference-paths] to some entity.
In addition to typical Rust path segments using identifiers,
it uses extra elements to represent unnameable entities (like an `impl`) or generic arguments for monomorphized items.

The initial tag character can be used to determine which kind of path it represents:

| Tag | Rule | Description |
|-----|------|-------------|
| `C` | *[crate-root]* | The root of a crate path. |
| `M` | *[inherent-impl]* | An inherent implementation. |
| `X` | *[trait-impl]* | A trait implementation. |
| `Y` | *[trait-definition]* | A trait definition. |
| `N` | *[nested-path]* | A nested path. |
| `I` | *[generic-args]* | Generic arguments. |
| `B` | *[backref]* | A back reference. |

### Path: Crate root
[crate-root]: #path-crate-root

> crate-root → `C` *[identifier]*

A *crate-root* indicates a path referring to the root of a crate's module tree.
It consists of the character `C` followed by the crate name as an *[identifier]*.

The crate name is the name as seen from the defining crate.
Since Rust supports linking multiple crates with the same name,
the *[disambiguator]* is used to make the name unique across the crate graph.

> **Recommended Demangling**
>
> A *crate-root* can be displayed as the identifier such as `mycrate`.
>
> Usually the disambiguator in the identifier need not be displayed,
> but as an alternate form the disambiguator can be shown in hex such as
> `mycrate[ca63f166dbe9294]`.

> Example:
> ```rust
> fn example() {}
> ```
>
> The symbol for `example` in crate `mycrate` is:
>
> ```text
> _RNvCs15kBYyAo9fc_7mycrate7example
>     │└────┬─────┘││└──┬──┘
>     │     │      ││   │
>     │     │      ││   └── crate-root identifier "mycrate"
>     │     │      │└────── length 7 of "mycrate"
>     │     │      └─────── end of base-62-number
>     │     └────────────── disambiguator for crate-root "mycrate" 0xca63f166dbe9293 + 1
>     └──────────────────── crate-root
> ```
>
> Recommended demangling: `mycrate::example`
>
> Note: The compiler may re-use the *crate-root* form to express arbitrary
> unscoped, undisambiguated identifiers, such as for new basic types that have
> not been added to the grammar yet. To achieve that, it will emit a *crate-root*
> without an explicit disambiguator, relying on the fact that such an
> undisambiguated crate name cannot occur in practice. For example, the basic
> type `f128` would be encode as `C4f128`. For this to have the desired effect,
> demanglers are expected to never render zero disambiguators of crate roots.
> I.e. `C4f128` is expected to be displayed as `f128` and not `f128[0]`.

### Path: Inherent impl
[inherent-impl]: #path-inherent-impl

> inherent-impl → `M` *[impl-path]* *[type]*

An *inherent-impl* indicates a path to an [inherent implementation][reference-inherent-impl].
It consists of the character `M` followed by an *[impl-path]*, which uniquely identifies the impl block the item is defined in.
Following that is a *[type]* representing the `Self` type of the impl.

> **Recommended Demangling**
>
> An *inherent-impl* can be displayed as a qualified path segment to the *[type]* within angled brackets.
> The *[impl-path]* usually need not be displayed.

> Example:
> ```rust
> struct Example;
> impl Example {
>     fn foo() {}
> }
> ```
>
> The symbol for `foo` in the impl for `Example` is:
>
> ```text
> _RNvMs_Cs4Cv8Wi1oAIB_7mycrateNtB4_7Example3foo
>     │├┘└─────────┬──────────┘└────┬──────┘
>     ││           │                │
>     ││           │                └── Self type "Example"
>     ││           └─────────────────── path to the impl's parent "mycrate"
>     │└─────────────────────────────── disambiguator 1
>     └──────────────────────────────── inherent-impl
> ```
>
> Recommended demangling: `<mycrate::Example>::foo`

### Path: Trait impl
[trait-impl]: #path-trait-impl

> trait-impl → `X` *[impl-path]* *[type]* *[path]*

A *trait-impl* indicates a path to a [trait implementation][reference-trait-impl].
It consists of the character `X` followed by an *[impl-path]* to the impl's parent followed by the *[type]* representing the `Self` type of the impl followed by a *[path]* to the trait.

> **Recommended Demangling**
>
> A *trait-impl* can be displayed as a qualified path segment using the `<` *type* `as` *path* `>` syntax.
> The *[impl-path]* usually need not be displayed.

> Example:
> ```rust
> struct Example;
> trait Trait {
>     fn foo();
> }
> impl Trait for Example {
>     fn foo() {}
> }
> ```
>
> The symbol for `foo` in the trait impl for `Example` is:
>
> ```text
> _RNvXCs15kBYyAo9fc_7mycrateNtB2_7ExampleNtB2_5Trait3foo
>     │└─────────┬──────────┘└─────┬─────┘└────┬────┘
>     │          │                 │           │
>     │          │                 │           └── path to the trait "Trait"
>     │          │                 └────────────── Self type "Example"
>     │          └──────────────────────────────── path to the impl's parent "mycrate"
>     └─────────────────────────────────────────── trait-impl
> ```
>
> Recommended demangling: `<mycrate::Example as mycrate::Trait>::foo`

### Path: Impl
[impl-path]: #path-impl

> impl-path → *[disambiguator]*<sub>opt</sub> *[path]*

An *impl-path* is a path used for *[inherent-impl]* and *[trait-impl]* to indicate the path to parent of an [implementation][reference-implementations].
It consists of an optional *[disambiguator]* followed by a *[path]*.
The *[path]* is the path to the parent that contains the impl.
The *[disambiguator]* can be used to distinguish between multiple impls within the same parent.

> **Recommended Demangling**
>
> An *impl-path* usually need not be displayed (unless the location of the impl is desired).

> Example:
> ```rust
> struct Example;
> impl Example {
>     fn foo() {}
> }
> impl Example {
>     fn bar() {}
> }
> ```
>
> The symbol for `foo` in the impl for `Example` is:
>
> ```text
> _RNvMCs7qp2U7fqm6G_7mycrateNtB2_7Example3foo
>      └─────────┬──────────┘
>                │
>                └── path to the impl's parent crate-root "mycrate"
> ```
>
> The symbol for `bar` is similar, though it has a disambiguator to indicate it is in a different impl block.
>
> ```text
> _RNvMs_Cs7qp2U7fqm6G_7mycrateNtB4_7Example3bar
>      ├┘└─────────┬──────────┘
>      │           │
>      │           └── path to the impl's parent crate-root "mycrate"
>      └────────────── disambiguator 1
> ```
>
> Recommended demangling:
> * `foo`: `<mycrate::Example>::foo`
> * `bar`: `<mycrate::Example>::bar`

### Path: Trait definition
[trait-definition]: #path-trait-definition

> trait-definition → `Y` *[type]* *[path]*

A *trait-definition* is a path to a [trait definition][reference-traits].
It consists of the character `Y` followed by the *[type]* which is the `Self` type of the referrer, followed by the *[path]* to the trait definition.

> **Recommended Demangling**
>
> A *trait-definition* can be displayed as a qualified path segment using the `<` *type* `as` *path* `>` syntax.

> Example:
> ```rust
> trait Trait {
>     fn example() {}
> }
> struct Example;
> impl Trait for Example {}
> ```
>
> The symbol for `example` in the trait `Trait` implemented for `Example` is:
>
> ```text
> _RNvYNtCs15kBYyAo9fc_7mycrate7ExampleNtB4_5Trait7exampleB4_
>     │└──────────────┬───────────────┘└────┬────┘
>     │               │                     │
>     │               │                     └── path to the trait "Trait"
>     │               └──────────────────────── path to the implementing type "mycrate::Example"
>     └──────────────────────────────────────── trait-definition
> ```
>
> Recommended demangling: `<mycrate::Example as mycrate::Trait>::example`

### Path: Nested path
[nested-path]: #path-nested-path

> nested-path → `N` *[namespace]* *[path]* *[identifier]*

A *nested-path* is a path representing an optionally named entity.
It consists of the character `N` followed by a *[namespace]* indicating the namespace of the entity,
followed by a *[path]* which is a path representing the parent of the entity,
followed by an *[identifier]* of the entity.

The identifier of the entity may have a length of 0 when the entity is not named.
For example, entities like closures, tuple-like struct constructors, and anonymous constants may not have a name.
The identifier may still have a disambiguator unless the disambiguator is 0.

> **Recommended Demangling**
>
> A *nested-path* can be displayed by first displaying the *[path]* followed by a `::` separator followed by the *[identifier]*.
> If the *[identifier]* is empty, then the separating `::` should not be displayed.
>
> If a *[namespace]* is specified, then extra context may be added such as: \
> *[path]* `::{` *[namespace]* (`:` *[identifier]*)<sub>opt</sub> `#` *disambiguator*<sub>as base-10 number</sub> `}`
>
> Here the namespace `C` may be printed as `closure` and `S` as `shim`.
> Others may be printed by their character tag.
> The `:` *name* portion may be skipped if the name is empty.
>
> The *[disambiguator]* in the *[identifier]* may be displayed if a *[namespace]* is specified.
> In other situations, it is usually not necessary to display the *[disambiguator]*.
> If it is displayed, it is recommended to place it in brackets, for example `[284a76a8b41a7fd3]`.
> If the *[disambiguator]* is not present, then its value is 0 and it can always be omitted from display.

> Example:
> ```rust
> fn main() {
>     let x = || {};
>     let y = || {};
>     x();
>     y();
> }
> ```
>
> The symbol for the closure `x` in crate `mycrate` is:
>
> ```text
> _RNCNvCsgStHSCytQ6I_7mycrate4main0B3_
>   ││└─────────────┬─────────────┘│
>   ││              │              │
>   ││              │              └── identifier with length 0
>   ││              └───────────────── path to "mycrate::main"
>   │└──────────────────────────────── closure namespace
>   └───────────────────────────────── nested-path
> ```
>
> The symbol for the closure `y` is similar, with a disambiguator:
>
> ```text
> _RNCNvCsgStHSCytQ6I_7mycrate4mains_0B3_
>                                  ││
>                                  │└── base-62-number 0
>                                  └─── disambiguator 1 (base-62-number+1)
> ```
>
> Recommended demangling:
> * `x`: `mycrate::main::{closure#0}`
> * `y`: `mycrate::main::{closure#1}`

### Path: Generic arguments
[generic-args]: #path-generic-arguments
[generic-arg]: #path-generic-arguments

> generic-args → `I` *[path]* {*[generic-arg]*} `E`
>
> generic-arg → \
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *[lifetime]* \
> &nbsp;&nbsp; | *[type]* \
> &nbsp;&nbsp; | `K` *[const]*

A *generic-args* is a path representing a list of generic arguments.
It consists of the character `I` followed by a *[path]* to the defining entity, followed by zero or more <em>[generic-arg]</em>s terminated by the character `E`.

Each *[generic-arg]* is either a *[lifetime]* (starting with the character `L`), a *[type]*, or the character `K` followed by a *[const]* representing a const argument.

> **Recommended Demangling**
>
> A *generic-args* may be printed as: *[path]* `::`<sub>opt</sub> `<` comma-separated list of args `>`
> The `::` separator may be elided for type paths (similar to Rust's rules).

> > Example:
> ```rust
> fn main() {
>     example([123]);
> }
>
> fn example<T, const N: usize>(x: [T; N]) {}
> ```
>
> The symbol for the function `example` is:
>
> ```text
> _RINvCsgStHSCytQ6I_7mycrate7examplelKj1_EB2_
>   │└──────────────┬───────────────┘││││││
>   │               │                │││││└── end of generic-args
>   │               │                ││││└─── end of const-data
>   │               │                │││└──── const value `1`
>   │               │                ││└───── const type `usize`
>   │               │                │└────── const generic
>   │               │                └─────── generic type i32
>   │               └──────────────────────── path to "mycrate::example"
>   └──────────────────────────────────────── generic-args
> ```
>
> Recommended demangling: `mycrate::example::<i32, 1>`

### Namespace
[namespace]: #namespace

> namespace → *[lower]* | *[upper]*

A *namespace* is used to segregate names into separate logical groups, allowing identical names to otherwise avoid collisions.
It consists of a single character of an upper or lowercase ASCII letter.
Lowercase letters are reserved for implementation-internal disambiguation categories (and demanglers should never show them).
Uppercase letters are used for special namespaces which demanglers may display in a special way.

Uppercase namespaces are:

* `C` — A closure.
* `S` — A shim. Shims are added by the compiler in some situations where an intermediate is needed.
  For example, a `fn()` pointer to a function with the [`#[track_caller]` attribute][reference-track_caller] needs a shim to deal with the implicit caller location.

> **Recommended Demangling**
>
> See *[nested-path]* for recommended demangling.

## Identifier
[identifier]: #identifier
[undisambiguated-identifier]: #identifier
[bytes]: #identifier

> identifier → *[disambiguator]*<sub>opt</sub> *[undisambiguated-identifier]*
>
> undisambiguated-identifier → `u`<sub>opt</sub> *[decimal-number]* `_`<sub>opt</sub> *[bytes]*
>
> bytes → {*UTF-8 bytes*}

An *identifier* is a named label used in a *[path]* to refer to an entity.
It consists of an optional *[disambiguator]* followed by an *[undisambiguated-identifier]*.

The disambiguator is used to disambiguate identical identifiers that should not otherwise be considered the same.
For example, closures have no name, so the disambiguator is the only differentiating element between two different closures in the same parent path.

The undisambiguated-identifier starts with an optional `u` character,
which indicates that the identifier is encoded in [Punycode][Punycode identifiers].
The next part is a *[decimal-number]* which indicates the length of the *bytes*.

Following the identifier size is an optional `_` character which is used to separate the length value from the identifier itself.
The `_` is mandatory if the *bytes* starts with a decimal digit or `_` in order to keep it unambiguous where the *decimal-number* ends and the *bytes* starts.

*bytes* is the identifier itself encoded in UTF-8.

> **Recommended Demangling**
>
> The display of an *identifier* can depend on its context.
> If it is Punycode-encoded, then it may first be decoded before being displayed.
>
> The *[disambiguator]* may or may not be displayed; see recommendations for rules that use *identifier*.

### Punycode identifiers
[Punycode identifiers]: #punycode-identifiers

Because some environments are restricted to ASCII alphanumerics and `_`,
Rust's [Unicode identifiers][reference-identifiers] may be encoded using a modified version of [Punycode].

For example, the function:

```rust
mod gödel {
  mod escher {
    fn bach() {}
  }
}
```

would be mangled as:

```text
_RNvNtNtCsgOH4LzxkuMq_7mycrateu8gdel_5qa6escher4bach
                              ││└───┬──┘
                              ││    │
                              ││    └── gdel_5qa translates to gödel
                              │└─────── 8 is the length
                              └──────── `u` indicates it is a Unicode identifier
```

Standard Punycode generates strings of the form `([[:ascii:]]+-)?[[:alnum:]]+`.
This is problematic because the `-` character
(which is used to separate the ASCII part from the base-36 encoding)
is not in the supported character set for symbols.
For this reason, `-` characters in the Punycode encoding are replaced with `_`.

Here are some examples:

| Original        | Punycode        | Punycode + Encoding |
|-----------------|-----------------|---------------------|
| føø             | f-5gaa          | f_5gaa              |
| α_ω             | _-ylb7e         | __ylb7e             |
| 铁锈             | n84amf          | n84amf              |
| 🤦              | fq9h            | fq9h                |
| ρυστ            | 2xaedc          | 2xaedc              |

> Note: It is up to the compiler to decide whether or not to encode identifiers using Punycode or not.
> Some platforms may have native support for UTF-8 symbols,
> and the compiler may decide to use the UTF-8 encoding directly.
> Demanglers should be prepared to support either form.

[Punycode]: https://tools.ietf.org/html/rfc3492

## Disambiguator
[disambiguator]: #disambiguator

> disambiguator → `s` *[base-62-number]*

A *disambiguator* is used in various parts of a symbol *[path]* to uniquely identify path elements that would otherwise be identical but should not be considered the same.
It starts with the character `s` and is followed by a *[base-62-number]*.

If the *disambiguator* is not specified, then its value can be assumed to be zero.
Otherwise, when demangling, the value 1 should be added to the *[base-62-number]*
(thus a *base-62-number* of zero encoded as `_` has a value of 1).
This allows disambiguators that are encoded sequentially to use minimal bytes.

> **Recommended Demangling**
>
> The *disambiguator* may or may not be displayed; see recommendations for rules that use *disambiguator*.
> Generally, it is recommended that zero disambiguators are never displayed unless their accompanying
> identifier is empty (like is the case for unnamed items such as closures).
> When rendering a disambiguator, it can be shortened to a length reasonable for the context,
> similar to how git commit hashes are rarely displayed in full.

## Lifetime
[lifetime]: #lifetime

> lifetime → `L` *[base-62-number]*

A *lifetime* is used to encode an anonymous (numbered) lifetime, either erased or [higher-ranked](#binder).
It starts with the character `L` and is followed by a *[base-62-number]*.
Index 0 is always erased.
Indices starting from 1 refer (as de Bruijn indices) to a higher-ranked lifetime bound by one of the enclosing <em>[binder]</em>s.

> **Recommended Demangling**
>
> A *lifetime* may be displayed like a Rust lifetime using a single quote.
>
> Index 0 should be displayed as `'_`.
> Index 0 should not be displayed for lifetimes in a *[ref-type]*, *[mut-ref-type]*, or *[dyn-trait-type]*.
>
> A lifetime can be displayed by converting the De Bruijn index to a De Bruijn level
> (level = number of bound lifetimes - index) and selecting a unique name for each level.
> For example, starting with single lowercase letters such as `'a` for level 0.
> Levels over 25 may consider printing the numeric lifetime as in `'_123`.
> See *[binder]* for more on lifetime indexes and ordering.

> Example:
> ```rust
> fn main() {
>     example::<fn(&u8, &u16)>();
> }
>
> pub fn example<T>() {}
> ```
>
> The symbol for the function `example` is:
>
> ```text
> _RINvCs7qp2U7fqm6G_7mycrate7exampleFG0_RL1_hRL0_tEuEB2_
>                                    │└┬┘│└┬┘││└┬┘││
>                                    │ │ │ │ ││ │ │└── end of input types
>                                    │ │ │ │ ││ │ └─── type u16
>                                    │ │ │ │ ││ └───── lifetime #1 'b
>                                    │ │ │ │ │└─────── reference type
>                                    │ │ │ │ └──────── type u8
>                                    │ │ │ └────────── lifetime #2 'a
>                                    │ │ └──────────── reference type
>                                    │ └────────────── binder with 2 lifetimes
>                                    └──────────────── function type
> ```
>
> Recommended demangling: `mycrate::example::<for<'a, 'b> fn(&'a u8, &'b u16)>`

## Const
[const]: #const
[const-data]: #const
[hex-digit]: #const

> const → \
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *[type]* *[const-data]* \
> &nbsp;&nbsp; | `p` \
> &nbsp;&nbsp; | *[backref]*
>
> const-data → `n`<sub>opt</sub> {*[hex-digit]*} `_`
>
> [hex-digit] → *[digit]* | `a` | `b` | `c` | `d` | `e` | `f`

A *const* is used to encode a const value used in generics and types.
It has the following forms:

* A constant value encoded as a *[type]* which represents the type of the constant and *[const-data]* which is the constant value, followed by `_` to terminate the *const*.
* The character `p` which represents a [placeholder].
* A *[backref]* to a previously encoded *const* of the same value.

The encoding of the *const-data* depends on the type:

* `bool` — The value `false` is encoded as `0_`, the value true is encoded as `1_`.
* `char` — The Unicode scalar value of the character is encoded in hexadecimal.
* Unsigned integers — The value is encoded in hexadecimal.
* Signed integers — The character `n` is a prefix to indicate that it is negative,
  followed by the absolute value encoded in hexadecimal.

> **Recommended Demangling**
>
> A *const* may be displayed by the const value depending on the type.
>
> The `p` placeholder should be displayed as the `_` character.
>
> For specific types:
> * `b` (bool) — Display as `true` or `false`.
> * `c` (char) — Display the character in as a Rust character (such as `'A'` or `'\n'`).
> * integers — Display the integer (either in decimal or hex).

> Example:
> ```rust
> fn main() {
>     example::<0x12345678>();
> }
>
> pub fn example<const N: u64>() {}
> ```
>
> The symbol for function `example` is:
>
> ```text
> _RINvCs7qp2U7fqm6G_7mycrate7exampleKy12345678_EB2_
>                                    ││└───┬───┘
>                                    ││    │
>                                    ││    └── const-data 0x12345678
>                                    │└─────── const type u64
>                                    └──────── const generic arg
> ```
>
> Recommended demangling: `mycrate::example::<305419896>`

### Placeholders
[placeholder]: #placeholders

A *placeholder* may occur in circumstances where a type or const value is not relevant.

> Example:
> ```rust
> pub struct Example<T, const N: usize>([T; N]);
>
> impl<T, const N: usize> Example<T, N> {
>     pub fn foo() -> &'static () {
>         static EXAMPLE_STATIC: () = ();
>         &EXAMPLE_STATIC
>     }
> }
> ```
>
> In this example, the static `EXAMPLE_STATIC` would not be monomorphized by the type or const parameters `T` and `N`.
> Those will use the placeholder for those generic arguments.
> Its symbol is:
>
> ```text
> _RNvNvMCsd9PVOYlP1UU_7mycrateINtB4_7ExamplepKpE3foo14EXAMPLE_STATIC
>                              │             │││
>                              │             ││└── const placeholder
>                              │             │└─── const generic argument
>                              │             └──── type placeholder
>                              └────────────────── generic-args
> ```
>
> Recommended demangling: `<mycrate::Example<_, _>>::foo::EXAMPLE_STATIC`


## Type
[type]: #type
[basic-type]: #basic-type
[array-type]: #array-type
[slice-type]: #slice-type
[tuple-type]: #tuple-type
[ref-type]: #ref-type
[mut-ref-type]: #mut-ref-type
[const-ptr-type]: #const-ptr-type
[mut-ptr-type]: #mut-ptr-type
[fn-type]: #fn-type
[dyn-trait-type]: #dyn-trait-type

> type → \
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *[basic-type]* \
> &nbsp;&nbsp; | *[array-type]* \
> &nbsp;&nbsp; | *[slice-type]* \
> &nbsp;&nbsp; | *[tuple-type]* \
> &nbsp;&nbsp; | *[ref-type]* \
> &nbsp;&nbsp; | *[mut-ref-type]* \
> &nbsp;&nbsp; | *[const-ptr-type]* \
> &nbsp;&nbsp; | *[mut-ptr-type]* \
> &nbsp;&nbsp; | *[fn-type]* \
> &nbsp;&nbsp; | *[dyn-trait-type]* \
> &nbsp;&nbsp; | *[path]* \
> &nbsp;&nbsp; | *[backref]*

A *type* represents a Rust [type][reference-types].
The initial character can be used to distinguish which type is encoded.
The type encodings based on the initial tag character are:

* A <span id="basic-type">*basic-type*</span> is encoded as a single character:
  * `a` — `i8`
  * `b` — `bool`
  * `c` — `char`
  * `d` — `f64`
  * `e` — `str`
  * `f` — `f32`
  * `h` — `u8`
  * `i` — `isize`
  * `j` — `usize`
  * `l` — `i32`
  * `m` — `u32`
  * `n` — `i128`
  * `o` — `u128`
  * `s` — `i16`
  * `t` — `u16`
  * `u` — unit `()`
  * `v` — variadic `...`
  * `x` — `i64`
  * `y` — `u64`
  * `z` — `!`
  * `p` — [placeholder] `_`

Remaining primitives are encoded as a crate production, e.g. `C4f128`.

* `A` — An [array][reference-array] `[T; N]`.

  > <span id="array-type">array-type</span> → `A` *[type]* *[const]*

  The tag `A` is followed by the *[type]* of the array followed by a *[const]* for the array size.

* `S` — A [slice][reference-slice] `[T]`.

  > <span id="slice-type">slice-type</span> → `S` *[type]*

  The tag `S` is followed by the *[type]* of the slice.

* `T` — A [tuple][reference-tuple] `(T1, T2, T3, ...)`.

  > <span id="tuple-type">tuple-type</span> → `T` {*[type]*} `E`

  The tag `T` is followed by one or more <em>[type]</em>s indicating the type of each field, followed by a terminating `E` character.

  Note that a zero-length tuple (unit) is encoded with the `u` *[basic-type]*.

* `R` — A [reference][reference-shared-reference] `&T`.

  > <span id="ref-type">ref-type</span> →  `R` *[lifetime]*<sub>opt</sub> *[type]*

  The tag `R` is followed by an optional *[lifetime]* followed by the *[type]* of the reference.
  The lifetime is not included if it has been erased.

* `Q` — A [mutable reference][reference-mutable-reference] `&mut T`.

  > <span id="mut-ref-type">mut-ref-type</span> → `Q` *[lifetime]*<sub>opt</sub> *[type]*

  The tag `Q` is followed by an optional *[lifetime]* followed by the *[type]* of the mutable reference.
  The lifetime is not included if it has been erased.

* `P` — A [constant raw pointer][reference-raw-pointer] `*const T`.

  The tag `P` is followed by the *[type]* of the pointer.

  > <span id="const-ptr-type">const-ptr-type</span> → `P` *[type]*

* `O` — A [mutable raw pointer][reference-raw-pointer] `*mut T`.

  > <span id="mut-ptr-type">mut-ptr-type</span> → `O` *[type]*

  The tag `O` is followed by the *[type]* of the pointer.

* `F` — A [function pointer][reference-fn-pointer] `fn(…) -> …`.

  > <span id="fn-type">fn-type</span> → `F` *[fn-sig]*
  >
  > <span id="fn-sig">fn-sig</span> → *[binder]*<sub>opt</sub> `U`<sub>opt</sub> (`K` *[abi]*)<sub>opt</sub> {*[type]*} `E` *[type]*
  >
  > <span id="abi">abi</span> → \
  > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `C` \
  > &nbsp;&nbsp; | *[undisambiguated-identifier]*

  The tag `F` is followed by a *[fn-sig]* of the function signature.
  A *fn-sig* is the signature for a function pointer.

  It starts with an optional *[binder]* which represents the higher-ranked trait bounds (`for<…>`).

  Following that is an optional `U` character which is present for an `unsafe` function.

  Following that is an optional `K` character which indicates that an *[abi]* is specified.
  If the ABI is not specified, it is assumed to be the `"Rust"` ABI.

  The *[abi]* can be the letter `C` to indicate it is the `"C"` ABI.
  Otherwise it is an *[undisambiguated-identifier]* of the ABI string with dashes converted to underscores.

  Following that is zero or more <em>[type]</em>s which indicate the input parameters of the function.

  Following that is the character `E` and then the *[type]* of the return value.

[fn-sig]: #fn-sig
[abi]: #abi

* `D` — A [trait object][reference-trait-object] `dyn Trait<Assoc=X> + Send + 'a`.

  > <span id="dyn-trait-type">dyn-trait-type</span> → `D` *[dyn-bounds]* *[lifetime]*
  >
  > <span id="dyn-bounds">dyn-bounds</span> → *[binder]*<sub>opt</sub> {*[dyn-trait]*} `E`
  >
  > <span id="dyn-trait">dyn-trait</span> → *[path]* {*[dyn-trait-assoc-binding]*}
  >
  > <span id="dyn-trait-assoc-binding">dyn-trait-assoc-binding</span> → `p` *[undisambiguated-identifier]* *[type]*

  The tag `D` is followed by a *[dyn-bounds]* which encodes the trait bounds,
  followed by a *[lifetime]* of the trait object lifetime bound.

  A *dyn-bounds* starts with an optional *[binder]* which represents the higher-ranked trait bounds (`for<…>`).
  Following that is a sequence of *[dyn-trait]* terminated by the character `E`.

  Each *[dyn-trait]* represents a trait bound, which consists of a *[path]* to the trait followed by zero or more *[dyn-trait-assoc-binding]* which list the associated types.

  Each *[dyn-trait-assoc-binding]* consists of a character `p` followed a *[undisambiguated-identifier]* representing the associated binding name, and finally a *[type]*.

[dyn-bounds]: #dyn-bounds
[dyn-trait]: #dyn-trait
[dyn-trait-assoc-binding]: #dyn-trait-assoc-binding


* A *[path]* to a named type.

* A *[backref]* to refer to a previously encoded type.

> **Recommended Demangling**
>
> A *[type]* may be displayed as the type it represents, using typical Rust syntax to represent the type.

> Example:
> ```rust
> fn main() {
>     example::<[u16; 8]>();
> }
>
> pub fn example<T>() {}
> ```
>
> The symbol for function `example` is:
>
> ```text
> _RINvCs7qp2U7fqm6G_7mycrate7exampleAtj8_EB2_
>                                    │││├┘│
>                                    ││││ └─── end of generic args
>                                    │││└───── const data 8
>                                    ││└────── const type usize
>                                    │└─────── array element type u16
>                                    └──────── array type
> ```
>
> Recommended demangling: `mycrate::example::<[u16; 8]>`

## Binder
[binder]: #binder

> binder → `G` *[base-62-number]*

A *binder* represents the number of [higher-ranked trait bound][reference-hrtb] lifetimes to bind.
It consists of the character `G` followed by a *[base-62-number]*.
The value 1 should be added to the *[base-62-number]* when decoding
(such that the *base-62-number* encoding of `_` is interpreted as having 1 binder).

A *lifetime* rule can then refer to these numbered lifetimes.
The lowest indices represent the innermost lifetimes.
The number of bound lifetimes is the value of *[base-62-number]* plus one.

For example, in `for<'a, 'b> fn(for<'c> fn (...))`, any <em>[lifetime]</em>s in `...`
(but not inside more binders) will observe the indices 1, 2, and 3 to refer to `'c`, `'b`, and `'a`, respectively.

> **Recommended Demangling**
>
> A *binder* may be printed using `for<…>` syntax listing the lifetimes as recommended in *[lifetime]*.
> See *[lifetime]* for an example.

## Backref
[backref]: #backref

> backref → `B` *[base-62-number]*

A *backref* is used to refer to a previous part of the mangled symbol.
This provides a simple form of compression to reduce the length of the mangled symbol.
This can help reduce the amount of work and resources needed by the compiler, linker, and loader.

It consists of the character `B` followed by a *[base-62-number]*.
The number indicates the 0-based offset in bytes starting from just after the `_R` prefix of the symbol.
The *backref* represents the corresponding element starting at that position.

<em>backref</em>s always refer to a position before the *backref* itself.

The *backref* compression relies on the fact that all substitutable symbol elements have a self-terminating mangled form.
Given the start position of the encoded node, the grammar guarantees that it is always unambiguous where the node ends.
This is ensured by not allowing optional or repeating elements at the end of substitutable productions.

> **Recommended Demangling**
>
> A *backref* should be demangled by rendering the element that it points to.
> Care should be considered when handling deeply nested backrefs to avoid using too much stack.

> Example:
> ```rust
> fn main() {
>     example::<Example, Example>();
> }
>
> struct Example;
>
> pub fn example<T, U>() {}
> ```
>
> The symbol for function `example` is:
>
> ```text
> _RINvCs7qp2U7fqm6G_7mycrate7exampleNtB2_7ExampleBw_EB2_
>                                      │├┘        │├┘ │├┘
>                                      ││         ││  ││
>                                      ││         ││  │└── backref to offset 3 (crate-root)
>                                      ││         ││  └─── backref for instantiating-crate path
>                                      ││         │└────── backref to offset 33 (path to Example)
>                                      ││         └─────── backref for second generic-arg
>                                      │└───────────────── backref to offset 3 (crate-root)
>                                      └────────────────── backref for first generic-arg (first segment of Example path)
> ```
>
> Recommended demangling: `mycrate::example::<mycrate::Example, mycrate::Example>`

## Instantiating crate
[instantiating-crate]: #instantiating-crate

> instantiating-crate → *[path]*

The *instantiating-crate* is an optional element of the *[symbol-name]* which can be used to indicate which crate is instantiating the symbol.
It consists of a single *[path]*.

This helps differentiate symbols that would otherwise be identical,
for example the monomorphization of a function from an external crate may result in a duplicate if another crate is also instantiating the same generic function with the same types.

In practice, the instantiating crate is also often the crate where the symbol is defined,
so it is usually encoded as a *[backref]* to the *[crate-root]* encoded elsewhere in the symbol.

> **Recommended Demangling**
>
> The *instantiating-crate* usually need not be displayed.

> Example:
> ```rust
> std::path::Path::new("example");
> ```
>
> The symbol for `Path::new::<str>` instantiated from the `mycrate` crate is:
>
> ```text
> _RINvMsY_NtCseXNvpPnDBDp_3std4pathNtB6_4Path3neweECs7qp2U7fqm6G_7mycrate
>                                                                 └──┬───┘
>                                                                    │
>                                                                    └── instantiating crate identifier `mycrate`
> ```
>
> Recommended demangling: `<std::path::Path>::new::<str>`

## Vendor-specific suffix
[vendor-specific-suffix]: #vendor-specific-suffix
[suffix]: #vendor-specific-suffix

> vendor-specific-suffix → (`.` | `$`) *[suffix]*
>
> suffix → {*byte*}

The *vendor-specific-suffix* is an optional element at the end of the *[symbol-name]*.
It consists of either a `.` or `$` character followed by zero or more bytes.
There are no restrictions on the characters following the period or dollar sign.

This suffix is added as needed by the implementation.
One example where this can happen is when locally unique names need to become globally unique.
LLVM can append a `.llvm.<numbers>` suffix during LTO to ensure a unique name,
and `$` can be used for thread-local data on Mach-O.
In these situations it's generally fine to ignore the suffix;
the suffixed name has the same semantics as the original.

> **Recommended Demangling**
>
> The *vendor-specific-suffix* usually need not be displayed.

> Example:
> ```rust
> # use std::cell::RefCell;
> thread_local! {
>     pub static EXAMPLE: RefCell<u32> = RefCell::new(1);
> }
> ```
>
> The symbol for `EXAMPLE` on macOS may have the following for thread-local data:
>
> ```text
> _RNvNvNvCs7qp2U7fqm6G_7mycrate7EXAMPLE7___getit5___KEY$tlv$init
>                                                       └───┬───┘
>                                                           │
>                                                           └── vendor-specific-suffix
> ```
>
> Recommended demangling: `mycrate::EXAMPLE::__getit::__KEY`

## Common rules
[decimal-number]: #common-rules
[digit]: #common-rules
[non-zero-digit]: #common-rules
[lower]: #common-rules
[upper]: #common-rules

> [decimal-number] → \
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `0` \
> &nbsp;&nbsp; | *[non-zero-digit]* {*[digit]*}
>
> [non-zero-digit] → `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` | `9` \
> [digit] → `0` | *[non-zero-digit]*
>
> [lower] → `a` |`b` |`c` |`d` |`e` |`f` |`g` |`h` |`i` |`j` |`k` |`l` |`m` |`n` |`o` |`p` |`q` |`r` |`s` |`t` |`u` |`v` |`w` |`x` |`y` |`z`
>
> [upper] → `A` | `B` | `C` | `D` | `E` | `F` | `G` | `H` | `I` | `J` | `K` | `L` | `M` | `N` | `O` | `P` | `Q` | `R` | `S` | `T` | `U` | `V` | `W` | `X` | `Y` | `Z`

A *decimal-number* is encoded as one or more <em>[digit]</em>s indicating a numeric value in decimal.

The value zero is encoded as a single byte `0`.
Beware that there are situations where `0` may be followed by another digit that should not be decoded as part of the decimal-number.
For example, a zero-length *[identifier]* within a *[nested-path]* which is in turn inside another *[nested-path]* will result in two identifiers in a row, where the first one only has the encoding of `0`.

A *digit* is an ASCII number.

A *lower* and *upper* is an ASCII lower and uppercase letter respectively.

## base-62-number
[base-62-number]: #base-62-number

> [base-62-number] → { *[digit]* | *[lower]* | *[upper]* } `_`

A *base-62-number* is an encoding of a numeric value.
It uses ASCII numbers and lowercase and uppercase letters.
The value is terminated with the `_` character.
If the value is 0, then the encoding is the `_` character without any digits.
Otherwise, one is subtracted from the value, and it is encoded with the mapping:

* `0`-`9` maps to 0-9
* `a`-`z` maps to 10 to 35
* `A`-`Z` maps to 36 to 61

The number is repeatedly divided by 62 (with integer division round towards zero)
to choose the next character in the sequence.
The remainder of each division is used in the mapping to choose the next character.
This is repeated until the number is 0.
The final sequence of characters is then reversed.

Decoding is a similar process in reverse.

Examples:

| Value | Encoding |
|-------|----------|
| 0     | `_`      |
| 1     | `0_`     |
| 11    | `a_`     |
| 62    | `Z_`     |
| 63    | `10_`    |
| 1000  | `g7_`    |

## Symbol grammar summary
[summary]: #symbol-grammar-summary

The following is a summary of all of the productions of the symbol grammar.

> [symbol-name] → `_R` *[decimal-number]*<sub>opt</sub> *[path]* *[instantiating-crate]*<sub>opt</sub> *[vendor-specific-suffix]*<sub>opt</sub>
>
> [path] → \
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *[crate-root]* \
> &nbsp;&nbsp; | *[inherent-impl]* \
> &nbsp;&nbsp; | *[trait-impl]* \
> &nbsp;&nbsp; | *[trait-definition]* \
> &nbsp;&nbsp; | *[nested-path]* \
> &nbsp;&nbsp; | *[generic-args]* \
> &nbsp;&nbsp; | *[backref]*
>
> [crate-root] → `C` *[identifier]* \
> [inherent-impl] → `M` *[impl-path]* *[type]* \
> [trait-impl] → `X` *[impl-path]* *[type]* *[path]* \
> [trait-definition] → `Y` *[type]* *[path]* \
> [nested-path] → `N` *[namespace]* *[path]* *[identifier]* \
> [generic-args] → `I` *[path]* {*[generic-arg]*} `E`
>
> [identifier] → *[disambiguator]*<sub>opt</sub> *[undisambiguated-identifier]* \
> [undisambiguated-identifier] → `u`<sub>opt</sub> *[decimal-number]* `_`<sub>opt</sub> *[bytes]* \
> [bytes] → {*UTF-8 bytes*}
>
> [disambiguator] → `s` *[base-62-number]*
>
> [impl-path] → *[disambiguator]*<sub>opt</sub> *[path]*
>
> [type] → \
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *[basic-type]* \
> &nbsp;&nbsp; | *[array-type]* \
> &nbsp;&nbsp; | *[slice-type]* \
> &nbsp;&nbsp; | *[tuple-type]* \
> &nbsp;&nbsp; | *[ref-type]* \
> &nbsp;&nbsp; | *[mut-ref-type]* \
> &nbsp;&nbsp; | *[const-ptr-type]* \
> &nbsp;&nbsp; | *[mut-ptr-type]* \
> &nbsp;&nbsp; | *[fn-type]* \
> &nbsp;&nbsp; | *[dyn-trait-type]* \
> &nbsp;&nbsp; | *[path]* \
> &nbsp;&nbsp; | *[backref]*
>
> [basic-type] → *[lower]* \
> [array-type] → `A` *[type]* *[const]* \
> [slice-type] → `S` *[type]* \
> [tuple-type] → `T` {*[type]*} `E` \
> [ref-type] →  `R` *[lifetime]*<sub>opt</sub> *[type]* \
> [mut-ref-type] → `Q` *[lifetime]*<sub>opt</sub> *[type]* \
> [const-ptr-type] → `P` *[type]* \
> [mut-ptr-type] → `O` *[type]* \
> [fn-type] → `F` *[fn-sig]* \
> [dyn-trait-type] → `D` *[dyn-bounds]* *[lifetime]*
>
> [namespace] → *[lower]* | *[upper]*
>
> [generic-arg] → \
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *[lifetime]* \
> &nbsp;&nbsp; | *[type]* \
> &nbsp;&nbsp; | `K` *[const]*
>
> [lifetime] → `L` *[base-62-number]*
>
> [const] → \
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *[type]* *[const-data]* \
> &nbsp;&nbsp; | `p` \
> &nbsp;&nbsp; | *[backref]*
>
> [const-data] → `n`<sub>opt</sub> {*[hex-digit]*} `_`
>
> [hex-digit] → *[digit]* | `a` | `b` | `c` | `d` | `e` | `f`
>
> [fn-sig] → *[binder]*<sub>opt</sub> `U`<sub>opt</sub> (`K` *[abi]*)<sub>opt</sub> {*[type]*} `E` *[type]*
>
> [abi] → \
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `C` \
> &nbsp;&nbsp; | *[undisambiguated-identifier]*
>
> [dyn-bounds] → *[binder]*<sub>opt</sub> {*[dyn-trait]*} `E` \
> [dyn-trait] → *[path]* {*[dyn-trait-assoc-binding]*} \
> [dyn-trait-assoc-binding] → `p` *[undisambiguated-identifier]* *[type]*
>
> [binder] → `G` *[base-62-number]*
>
> [backref] → `B` *[base-62-number]*
>
> [instantiating-crate] → *[path]*
>
> [vendor-specific-suffix] → (`.` | `$`) *[suffix]* \
> [suffix] → {*byte*}
>
> [decimal-number] → \
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `0` \
> &nbsp;&nbsp; | *[non-zero-digit]* {*[digit]*}
>
> [base-62-number] → { *[digit]* | *[lower]* | *[upper]* } `_`
>
> [non-zero-digit] → `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` | `9` \
> [digit] → `0` | *[non-zero-digit]* \
> [lower] → `a` |`b` |`c` |`d` |`e` |`f` |`g` |`h` |`i` |`j` |`k` |`l` |`m` |`n` |`o` |`p` |`q` |`r` |`s` |`t` |`u` |`v` |`w` |`x` |`y` |`z` \
> [upper] → `A` | `B` | `C` | `D` | `E` | `F` | `G` | `H` | `I` | `J` | `K` | `L` | `M` | `N` | `O` | `P` | `Q` | `R` | `S` | `T` | `U` | `V` | `W` | `X` | `Y` | `Z`

## Encoding of Rust entities

The following are guidelines for how Rust entities are encoded in a symbol.
The compiler has some latitude in how an entity is encoded as long as the symbol is unambiguous.

* Named functions, methods, and statics shall be represented by a *[path]* production.

* Paths should be rooted at the innermost entity that can act as a path root.
  Roots can be crate-ids, inherent impls, trait impls, and (for items within default methods) trait definitions.

* The compiler is free to choose disambiguation indices and namespace tags from
  the reserved ranges as long as it ascertains identifier unambiguity.

* Generic arguments that are equal to the default should not be encoded in order to save space.


[RFC 2603]: https://rust-lang.github.io/rfcs/2603-rust-symbol-name-mangling-v0.html
[reference-array]: https://doc.rust-lang.org/reference/types/array.html
[reference-fn-pointer]: https://doc.rust-lang.org/reference/types/function-pointer.html
[reference-hrtb]: https://doc.rust-lang.org/reference/trait-bounds.html#higher-ranked-trait-bounds
[reference-identifiers]: https://doc.rust-lang.org/reference/identifiers.html
[reference-implementations]: https://doc.rust-lang.org/reference/items/implementations.html
[reference-inherent-impl]: https://doc.rust-lang.org/reference/items/implementations.html#inherent-implementations
[reference-mutable-reference]: https://doc.rust-lang.org/reference/types/pointer.html#mutable-references-mut
[reference-paths]: https://doc.rust-lang.org/reference/paths.html
[reference-raw-pointer]: https://doc.rust-lang.org/reference/types/pointer.html#raw-pointers-const-and-mut
[reference-shared-reference]: https://doc.rust-lang.org/reference/types/pointer.html#shared-references-
[reference-slice]: https://doc.rust-lang.org/reference/types/slice.html
[reference-track_caller]: https://doc.rust-lang.org/reference/attributes/codegen.html#the-track_caller-attribute
[reference-trait-impl]: https://doc.rust-lang.org/reference/items/implementations.html#trait-implementations
[reference-trait-object]: https://doc.rust-lang.org/reference/types/trait-object.html
[reference-traits]: https://doc.rust-lang.org/reference/items/traits.html
[reference-tuple]: https://doc.rust-lang.org/reference/types/tuple.html
[reference-types]: https://doc.rust-lang.org/reference/types.html

<a id=contributing></a>

# Contributing to rustc

We'd love to have your help improving `rustc`! To that end, we've written [a
whole book][rustc_dev_guide] on its
internals, how it works, and how to get started working on it. To learn
more, you'll want to check that out.

If you would like to contribute to _this_ book, you can find its source in the
rustc source at [src/doc/rustc][rustc_book].

[rustc_dev_guide]: https://rustc-dev-guide.rust-lang.org/
[rustc_book]: https://github.com/rust-lang/rust/tree/master/src/doc/rustc

<a id=platform_support></a>

# Platform Support

<style type="text/css">
    td code {
        white-space: nowrap;
    }
</style>

Support for different platforms ("targets") are organized into three tiers,
each with a different set of guarantees. For more information on the policies
for targets at each tier, see the [Target Tier Policy](#target_tier_policy).

Targets are identified by their "target triple" which is the string to inform
the compiler what kind of output should be produced.

Component availability is tracked [here](https://rust-lang.github.io/rustup-components-history/).

## Tier 1 with Host Tools

Tier 1 targets can be thought of as "guaranteed to work". The Rust project
builds official binary releases for each tier 1 target, and automated testing
ensures that each tier 1 target builds and passes tests after each change.

Tier 1 targets with host tools additionally support running tools like `rustc`
and `cargo` natively on the target, and automated testing ensures that tests
pass for the host tools as well. This allows the target to be used as a
development platform, not just a compilation target. For the full requirements,
see [Tier 1 with Host Tools](#tier-1-with-host-tools) in
the Target Tier Policy.

All tier 1 targets with host tools support the full standard library.

target | notes
-------|-------
[`aarch64-apple-darwin`](#platform_support_apple_darwin) | ARM64 macOS (11.0+, Big Sur+)
[`aarch64-pc-windows-msvc`](#platform_support_windows_msvc) | ARM64 Windows MSVC
`aarch64-unknown-linux-gnu` | ARM64 Linux (kernel 4.1+, glibc 2.17+)
[`i686-pc-windows-msvc`](#platform_support_windows_msvc) | 32-bit MSVC (Windows 10+, Windows Server 2016+, Pentium 4) [^x86_32-floats-return-ABI] [^win32-msvc-alignment]
`i686-unknown-linux-gnu` | 32-bit Linux (kernel 3.2+, glibc 2.17+, Pentium 4) [^x86_32-floats-return-ABI]
[`x86_64-pc-windows-gnu`](#platform_support_windows_gnu) | 64-bit MinGW (Windows 10+, Windows Server 2016+)
[`x86_64-pc-windows-msvc`](#platform_support_windows_msvc) | 64-bit MSVC (Windows 10+, Windows Server 2016+)
`x86_64-unknown-linux-gnu` | 64-bit Linux (kernel 3.2+, glibc 2.17+)

[^x86_32-floats-return-ABI]: Due to limitations of the C ABI, floating-point support on `i686` targets is non-compliant: floating-point return values are passed via an x87 register, so NaN payload bits can be lost. Functions with the default Rust ABI are not affected. See [issue #115567][x86-32-float-return-issue].

[^win32-msvc-alignment]: Due to non-standard behavior of MSVC, native C code on this target can cause types with an alignment of more than 4 bytes to be incorrectly aligned to only 4 bytes (this affects, e.g., `u64` and `i64`). Rust applies some mitigations to reduce the impact of this issue, but this can still cause unsoundness due to unsafe code that (correctly) assumes that references are always properly aligned. See [issue #112480](https://github.com/rust-lang/rust/issues/112480).

[77071]: https://github.com/rust-lang/rust/issues/77071
[x86-32-float-return-issue]: https://github.com/rust-lang/rust/issues/115567

## Tier 1

Tier 1 targets can be thought of as "guaranteed to work". The Rust project
builds official binary releases for each tier 1 target, and automated testing
ensures that each tier 1 target builds and passes tests after each change. For
the full requirements, see [Tier 1 target
policy](#tier-1-target-policy) in the Target Tier Policy.

At this time, all Tier 1 targets are [Tier 1 with Host
Tools](#tier-1-with-host-tools).

## Tier 2 with Host Tools

Tier 2 targets can be thought of as "guaranteed to build". The Rust project
builds official binary releases of the standard library (or, in some cases,
only the `core` library) for each tier 2 target, and automated builds
ensure that each tier 2 target can be used as build target after each change. Automated tests are
not always run so it's not guaranteed to produce a working build, but tier 2
targets often work to quite a good degree and patches are always welcome!

Tier 2 target-specific code is not closely scrutinized by Rust team(s) when
modifications are made. Bugs are possible in all code, but the level of quality
control for these targets is likely to be lower. See [library team
policy](https://std-dev-guide.rust-lang.org/policy/target-code.html) for
details on the review practices for standard library code.

Tier 2 targets with host tools additionally support running tools like `rustc`
and `cargo` natively on the target, and automated builds ensure that the host
tools build as well. This allows the target to be used as a development
platform, not just a compilation target. For the full requirements, see [Tier 2
with Host Tools](#tier-2-with-host-tools) in the Target
Tier Policy.

All tier 2 targets with host tools support the full standard library.

**NOTE:** The `rust-docs` component is not usually built for tier 2 targets,
so Rustup may install the documentation for a similar tier 1 target instead.

target | notes
-------|-------
[`aarch64-pc-windows-gnullvm`](#platform_support_windows_gnullvm) | ARM64 MinGW (Windows 10+), LLVM ABI
[`aarch64-unknown-linux-musl`](#platform_support_aarch64_unknown_linux_musl) | ARM64 Linux with musl 1.2.3
[`aarch64-unknown-linux-ohos`](#platform_support_openharmony) | ARM64 OpenHarmony
`arm-unknown-linux-gnueabi` | Armv6 Linux (kernel 3.2+, glibc 2.17)
`arm-unknown-linux-gnueabihf` | Armv6 Linux, hardfloat (kernel 3.2+, glibc 2.17)
`armv7-unknown-linux-gnueabihf` | Armv7-A Linux, hardfloat (kernel 3.2+, glibc 2.17)
[`armv7-unknown-linux-ohos`](#platform_support_openharmony) | Armv7-A OpenHarmony
[`loongarch64-unknown-linux-gnu`](#platform_support_loongarch_linux) | LoongArch64 Linux, LP64D ABI (kernel 5.19+, glibc 2.36), LSX required
[`loongarch64-unknown-linux-musl`](#platform_support_loongarch_linux) | LoongArch64 Linux, LP64D ABI (kernel 5.19+, musl 1.2.5), LSX required
[`i686-pc-windows-gnu`](#platform_support_windows_gnu) | 32-bit MinGW (Windows 10+, Windows Server 2016+, Pentium 4) [^x86_32-floats-return-ABI] [^win32-msvc-alignment]
`powerpc-unknown-linux-gnu` | PowerPC Linux (kernel 3.2+, glibc 2.17)
`powerpc64-unknown-linux-gnu` | PPC64 Linux (kernel 3.2+, glibc 2.17)
[`powerpc64le-unknown-linux-gnu`](#platform_support_powerpc64le_unknown_linux_gnu) | PPC64LE Linux (kernel 3.10+, glibc 2.17)
[`powerpc64le-unknown-linux-musl`](#platform_support_powerpc64le_unknown_linux_musl) | PPC64LE Linux (kernel 4.19+, musl 1.2.3)
[`riscv64gc-unknown-linux-gnu`](#platform_support_riscv64gc_unknown_linux_gnu) | RISC-V Linux (kernel 4.20+, glibc 2.29)
[`s390x-unknown-linux-gnu`](#platform_support_s390x_unknown_linux_gnu) | S390x Linux (kernel 3.2+, glibc 2.17)
[`x86_64-apple-darwin`](#platform_support_apple_darwin) | 64-bit macOS (10.12+, Sierra+)
[`x86_64-pc-windows-gnullvm`](#platform_support_windows_gnullvm) | 64-bit x86 MinGW (Windows 10+), LLVM ABI
[`x86_64-unknown-freebsd`](#platform_support_freebsd) | 64-bit x86 FreeBSD
[`x86_64-unknown-illumos`](#platform_support_illumos) | illumos
`x86_64-unknown-linux-musl` | 64-bit Linux with musl 1.2.3
[`x86_64-unknown-linux-ohos`](#platform_support_openharmony) | x86_64 OpenHarmony
[`x86_64-unknown-netbsd`](#platform_support_netbsd) | NetBSD/amd64
[`x86_64-pc-solaris`](#platform_support_solaris) | 64-bit x86 Solaris 11.4
[`sparcv9-sun-solaris`](#platform_support_solaris) | SPARC V9 Solaris 11.4

## Tier 2 without Host Tools

Tier 2 targets can be thought of as "guaranteed to build". The Rust project
builds official binary releases of the standard library (or, in some cases,
only the `core` library) for each tier 2 target, and automated builds
ensure that each tier 2 target can be used as build target after each change. Automated tests are
not always run so it's not guaranteed to produce a working build, but tier 2
targets often work to quite a good degree and patches are always welcome! For
the full requirements, see [Tier 2 target
policy](#tier-2-target-policy) in the Target Tier Policy.

The `std` column in the table below has the following meanings:

* ✓ indicates the full standard library is available.
* \* indicates the target only supports [`no_std`] development.
* ? indicates the standard library support is a work-in-progress.

[`no_std`]: https://rust-embedded.github.io/book/intro/no-std.html

Tier 2 target-specific code is not closely scrutinized by Rust team(s) when
modifications are made. Bugs are possible in all code, but the level of quality
control for these targets is likely to be lower. See [library team
policy](https://std-dev-guide.rust-lang.org/policy/target-code.html) for
details on the review practices for standard library code.

**NOTE:** The `rust-docs` component is not usually built for tier 2 targets,
so Rustup may install the documentation for a similar tier 1 target instead.

target | std | notes
-------|:---:|-------
[`aarch64-apple-ios`](#platform_support_apple_ios) | ✓ | ARM64 iOS
[`aarch64-apple-ios-macabi`](#platform_support_apple_ios_macabi) | ✓ | Mac Catalyst on ARM64
[`aarch64-apple-ios-sim`](#platform_support_apple_ios) | ✓ | Apple iOS Simulator on ARM64
[`aarch64-linux-android`](#platform_support_android) | ✓ | ARM64 Android
[`aarch64-unknown-fuchsia`](#platform_support_fuchsia) | ✓ | ARM64 Fuchsia
`aarch64-unknown-none` | * | Bare ARM64, hardfloat
`aarch64-unknown-none-softfloat` | * | Bare ARM64, softfloat
[`aarch64-unknown-uefi`](#platform_support_unknown_uefi) | ? | ARM64 UEFI
[`arm-linux-androideabi`](#platform_support_android) | ✓ | Armv6 Android
`arm-unknown-linux-musleabi` | ✓ | Armv6 Linux with musl 1.2.3
`arm-unknown-linux-musleabihf` | ✓ | Armv6 Linux with musl 1.2.3, hardfloat
[`arm64ec-pc-windows-msvc`](#platform_support_arm64ec_pc_windows_msvc) | ✓ | Arm64EC Windows MSVC
[`armebv7r-none-eabi`](#platform_support_armv7r_none_eabi) | * | Bare Armv7-R, Big Endian
[`armebv7r-none-eabihf`](#platform_support_armv7r_none_eabi) | * | Bare Armv7-R, Big Endian, hardfloat
[`armv5te-unknown-linux-gnueabi`](#platform_support_armv5te_unknown_linux_gnueabi) | ✓ | Armv5TE Linux (kernel 4.4+, glibc 2.23)
`armv5te-unknown-linux-musleabi` | ✓ | Armv5TE Linux with musl 1.2.3
[`armv7-linux-androideabi`](#platform_support_android) | ✓ | Armv7-A Android
`armv7-unknown-linux-gnueabi` | ✓ | Armv7-A Linux (kernel 4.15+, glibc 2.27)
`armv7-unknown-linux-musleabi` | ✓ | Armv7-A Linux with musl 1.2.3
`armv7-unknown-linux-musleabihf` | ✓ | Armv7-A Linux with musl 1.2.3, hardfloat
[`armv7a-none-eabi`](#platform_support_arm_none_eabi) | * | Bare Armv7-A
[`armv7r-none-eabi`](#platform_support_armv7r_none_eabi) | * | Bare Armv7-R
[`armv7r-none-eabihf`](#platform_support_armv7r_none_eabi) | * | Bare Armv7-R, hardfloat
`i586-unknown-linux-gnu` | ✓ | 32-bit Linux (kernel 3.2+, glibc 2.17, original Pentium) [^x86_32-floats-x87]
`i586-unknown-linux-musl` | ✓ | 32-bit Linux (musl 1.2.3, original Pentium) [^x86_32-floats-x87]
[`i686-linux-android`](#platform_support_android) | ✓ | 32-bit x86 Android ([Pentium 4 plus various extensions](https://developer.android.com/ndk/guides/abis.html#x86)) [^x86_32-floats-return-ABI]
[`i686-pc-windows-gnullvm`](#platform_support_windows_gnullvm) | ✓ | 32-bit x86 MinGW (Windows 10+, Pentium 4), LLVM ABI [^x86_32-floats-return-ABI]
[`i686-unknown-freebsd`](#platform_support_freebsd) | ✓ | 32-bit x86 FreeBSD (Pentium 4) [^x86_32-floats-return-ABI]
`i686-unknown-linux-musl` | ✓ | 32-bit Linux with musl 1.2.3 (Pentium 4) [^x86_32-floats-return-ABI]
[`i686-unknown-uefi`](#platform_support_unknown_uefi) | ? | 32-bit UEFI (Pentium 4, softfloat) [^win32-msvc-alignment]
[`loongarch64-unknown-none`](#platform_support_loongarch_none) | * | LoongArch64 Bare-metal (LP64D ABI)
[`loongarch64-unknown-none-softfloat`](#platform_support_loongarch_none) | * | LoongArch64 Bare-metal (LP64S ABI)
[`nvptx64-nvidia-cuda`](#platform_support_nvptx64_nvidia_cuda) | * | --emit=asm generates PTX code that [runs on NVIDIA GPUs]
[`riscv32i-unknown-none-elf`](#platform_support_riscv32_unknown_none_elf) | * | Bare RISC-V (RV32I ISA)
[`riscv32im-unknown-none-elf`](#platform_support_riscv32_unknown_none_elf) | * | Bare RISC-V (RV32IM ISA)
[`riscv32imac-unknown-none-elf`](#platform_support_riscv32_unknown_none_elf) | * | Bare RISC-V (RV32IMAC ISA)
[`riscv32imafc-unknown-none-elf`](#platform_support_riscv32_unknown_none_elf) | * | Bare RISC-V (RV32IMAFC ISA)
[`riscv32imc-unknown-none-elf`](#platform_support_riscv32_unknown_none_elf) | * | Bare RISC-V (RV32IMC ISA)
[`riscv64gc-unknown-linux-musl`](#platform_support_riscv64gc_unknown_linux_musl) | RISC-V Linux (kernel 4.20+, musl 1.2.3)
`riscv64gc-unknown-none-elf` | * | Bare RISC-V (RV64IMAFDC ISA)
`riscv64imac-unknown-none-elf` | * | Bare RISC-V (RV64IMAC ISA)
`sparc64-unknown-linux-gnu` | ✓ | SPARC Linux (kernel 4.4+, glibc 2.23)
[`thumbv6m-none-eabi`](#platform_support_thumbv6m_none_eabi) | * | Bare Armv6-M
[`thumbv7em-none-eabi`](#platform_support_thumbv7em_none_eabi) | * | Bare Armv7E-M
[`thumbv7em-none-eabihf`](#platform_support_thumbv7em_none_eabi) | * | Bare Armv7E-M, hardfloat
[`thumbv7m-none-eabi`](#platform_support_thumbv7m_none_eabi) | * | Bare Armv7-M
[`thumbv7neon-linux-androideabi`](#platform_support_android) | ✓ | Thumb2-mode Armv7-A Android with NEON
`thumbv7neon-unknown-linux-gnueabihf` | ✓ | Thumb2-mode Armv7-A Linux with NEON (kernel 4.4+, glibc 2.23)
[`thumbv8m.base-none-eabi`](#platform_support_thumbv8m.base_none_eabi) | * | Bare Armv8-M Baseline
[`thumbv8m.main-none-eabi`](#platform_support_thumbv8m.main_none_eabi) | * | Bare Armv8-M Mainline
[`thumbv8m.main-none-eabihf`](#platform_support_thumbv8m.main_none_eabi) | * | Bare Armv8-M Mainline, hardfloat
[`wasm32-unknown-emscripten`](#platform_support_wasm32_unknown_emscripten) | ✓ | WebAssembly via Emscripten
[`wasm32-unknown-unknown`](#platform_support_wasm32_unknown_unknown) | ✓ | WebAssembly
[`wasm32-wasip1`](#platform_support_wasm32_wasip1) | ✓ | WebAssembly with WASIp1
[`wasm32-wasip1-threads`](#platform_support_wasm32_wasip1_threads) | ✓ | WebAssembly with WASI Preview 1 and threads
[`wasm32-wasip2`](#platform_support_wasm32_wasip2) | ✓ | WebAssembly with WASIp2
[`wasm32v1-none`](#platform_support_wasm32v1_none) | * | WebAssembly limited to 1.0 features and no imports
[`x86_64-apple-ios`](#platform_support_apple_ios) | ✓ | 64-bit x86 iOS
[`x86_64-apple-ios-macabi`](#platform_support_apple_ios_macabi) | ✓ | Mac Catalyst on x86_64
[`x86_64-fortanix-unknown-sgx`](#platform_support_x86_64_fortanix_unknown_sgx) | ✓ | [Fortanix ABI] for 64-bit Intel SGX
[`x86_64-linux-android`](#platform_support_android) | ✓ | 64-bit x86 Android
[`x86_64-unknown-fuchsia`](#platform_support_fuchsia) | ✓ | 64-bit x86 Fuchsia
`x86_64-unknown-linux-gnux32` | ✓ | 64-bit Linux (x32 ABI) (kernel 4.15+, glibc 2.27)
[`x86_64-unknown-none`](#platform_support_x86_64_unknown_none) | * | Freestanding/bare-metal x86_64, softfloat
[`x86_64-unknown-redox`](#platform_support_redox) | ✓ | Redox OS
[`x86_64-unknown-uefi`](#platform_support_unknown_uefi) | ? | 64-bit UEFI

[^x86_32-floats-x87]: Floating-point support on `i586` targets is non-compliant: the `x87` registers and instructions used for these targets do not provide IEEE-754-compliant behavior, in particular when it comes to rounding and NaN payload bits. See [issue #114479][x86-32-float-issue].

[x86-32-float-issue]: https://github.com/rust-lang/rust/issues/114479

[wasi-rename]: https://github.com/rust-lang/compiler-team/issues/607

[Fortanix ABI]: https://edp.fortanix.com/

## Tier 3

Tier 3 targets are those which the Rust codebase has support for, but which the
Rust project does not build or test automatically, so they may or may not work.
Official builds are not available. For the full requirements, see [Tier 3
target policy](#tier-3-target-policy) in the Target Tier
Policy.

The `std` column in the table below has the following meanings:

* ✓ indicates the full standard library is available.
* \* indicates the target only supports [`no_std`] development.
* ? indicates the standard library support is unknown or a work-in-progress.

[`no_std`]: https://rust-embedded.github.io/book/intro/no-std.html

Tier 3 target-specific code is not closely scrutinized by Rust team(s) when
modifications are made. Bugs are possible in all code, but the level of quality
control for these targets is likely to be lower. See [library team
policy](https://std-dev-guide.rust-lang.org/policy/target-code.html) for
details on the review practices for standard library code.

The `host` column indicates whether the codebase includes support for building
host tools.

target | std | host | notes
-------|:---:|:----:|-------
[`aarch64-apple-tvos`](#platform_support_apple_tvos) | ✓ |  | ARM64 tvOS
[`aarch64-apple-tvos-sim`](#platform_support_apple_tvos) | ✓ |  | ARM64 tvOS Simulator
[`aarch64-apple-visionos`](#platform_support_apple_visionos) | ✓ |  | ARM64 Apple visionOS
[`aarch64-apple-visionos-sim`](#platform_support_apple_visionos) | ✓ |  | ARM64 Apple visionOS Simulator
[`aarch64-apple-watchos`](#platform_support_apple_watchos) | ✓ |  | ARM64 Apple WatchOS
[`aarch64-apple-watchos-sim`](#platform_support_apple_watchos) | ✓ |  | ARM64 Apple WatchOS Simulator
[`aarch64-kmc-solid_asp3`](#platform_support_kmc_solid) | ✓ |  | ARM64 SOLID with TOPPERS/ASP3
[`aarch64-nintendo-switch-freestanding`](#platform_support_aarch64_nintendo_switch_freestanding) | * |  | ARM64 Nintendo Switch, Horizon
[`aarch64-unknown-freebsd`](#platform_support_freebsd) | ✓ | ✓ | ARM64 FreeBSD
[`aarch64-unknown-hermit`](#platform_support_hermit) | ✓ |  | ARM64 Hermit
[`aarch64-unknown-illumos`](#platform_support_illumos) | ✓ | ✓ | ARM64 illumos
`aarch64-unknown-linux-gnu_ilp32` | ✓ | ✓ | ARM64 Linux (ILP32 ABI)
[`aarch64-unknown-managarm-mlibc`](#platform_support_managarm) | ? |   | ARM64 Managarm
[`aarch64-unknown-netbsd`](#platform_support_netbsd) | ✓ | ✓ | ARM64 NetBSD
[`aarch64-unknown-nto-qnx700`](#platform_support_nto_qnx) | ? |  | ARM64 QNX Neutrino 7.0 RTOS |
[`aarch64-unknown-nto-qnx710`](#platform_support_nto_qnx) | ✓ |  | ARM64 QNX Neutrino 7.1 RTOS with default network stack (io-pkt) |
[`aarch64-unknown-nto-qnx710_iosock`](#platform_support_nto_qnx) | ✓ |  | ARM64 QNX Neutrino 7.1 RTOS with new network stack (io-sock) |
[`aarch64-unknown-nto-qnx800`](#platform_support_nto_qnx) | ✓ |  | ARM64 QNX Neutrino 8.0 RTOS |
[`aarch64-unknown-nuttx`](#platform_support_nuttx) | ✓ |  | ARM64 with NuttX
[`aarch64-unknown-openbsd`](#platform_support_openbsd) | ✓ | ✓ | ARM64 OpenBSD
[`aarch64-unknown-redox`](#platform_support_redox) | ✓ |  | ARM64 Redox OS
[`aarch64-unknown-teeos`](#platform_support_aarch64_unknown_teeos) | ? |  | ARM64 TEEOS |
[`aarch64-unknown-trusty`](#platform_support_trusty) | ✓ |  |
[`aarch64-uwp-windows-msvc`](#platform_support_uwp_windows_msvc) | ✓ |  |
[`aarch64-wrs-vxworks`](#platform_support_vxworks) | ✓ |  | ARM64 VxWorks OS
[`aarch64_be-unknown-hermit`](#platform_support_hermit) | ✓ |  | ARM64 Hermit (big-endian)
`aarch64_be-unknown-linux-gnu` | ✓ | ✓ | ARM64 Linux (big-endian)
`aarch64_be-unknown-linux-gnu_ilp32` | ✓ | ✓ | ARM64 Linux (big-endian, ILP32 ABI)
[`aarch64_be-unknown-linux-musl`](#platform_support_aarch64_be_unknown_linux_musl) | ✓ | ✓ | ARM64 Linux (big-endian) with musl-libc 1.2.5
[`aarch64_be-unknown-netbsd`](#platform_support_netbsd) | ✓ | ✓ | ARM64 NetBSD (big-endian)
[`aarch64_be-unknown-none-softfloat`](#platform_support_aarch64_be_unknown_none_softfloat) | * |  | Bare big-endian ARM64, softfloat
[`amdgcn-amd-amdhsa`](#platform_support_amdgcn_amd_amdhsa) | * |  | `-Ctarget-cpu=gfx...` to specify [the AMD GPU] to compile for
[`arm64_32-apple-watchos`](#platform_support_apple_watchos) | ✓ |  | Arm Apple WatchOS 64-bit with 32-bit pointers
[`arm64e-apple-darwin`](#platform_support_arm64e_apple_darwin)  | ✓ | ✓ | ARM64e Apple Darwin
[`arm64e-apple-ios`](#platform_support_arm64e_apple_ios) | ✓ | | ARM64e Apple iOS
[`arm64e-apple-tvos`](#platform_support_arm64e_apple_tvos)  | ✓ | | ARM64e Apple tvOS
[`armeb-unknown-linux-gnueabi`](#platform_support_armeb_unknown_linux_gnueabi) | ✓ | ? | Arm BE8 the default Arm big-endian architecture since [Armv6](https://developer.arm.com/documentation/101754/0616/armlink-Reference/armlink-Command-line-Options/--be8?lang=en).
[`armv4t-none-eabi`](#platform_support_armv4t_none_eabi) | * |  | Bare Armv4T
`armv4t-unknown-linux-gnueabi` | ? |  | Armv4T Linux
[`armv5te-none-eabi`](#platform_support_armv5te_none_eabi) | * |  | Bare Armv5TE
`armv5te-unknown-linux-uclibceabi` | ? |  | Armv5TE Linux with uClibc
[`armv6-unknown-freebsd`](#platform_support_freebsd) | ✓ | ✓ | Armv6 FreeBSD
[`armv6-unknown-netbsd-eabihf`](#platform_support_netbsd) | ✓ | ✓ | Armv6 NetBSD w/hard-float
[`armv6k-nintendo-3ds`](#platform_support_armv6k_nintendo_3ds) | ? |  | Armv6k Nintendo 3DS, Horizon (Requires devkitARM toolchain)
[`armv7-rtems-eabihf`](#platform_support_armv7_rtems_eabihf) | ? |  | RTEMS OS for ARM BSPs
[`armv7-sony-vita-newlibeabihf`](#platform_support_armv7_sony_vita_newlibeabihf) | ✓ |  | Armv7-A Cortex-A9 Sony PlayStation Vita (requires VITASDK toolchain)
[`armv7-unknown-freebsd`](#platform_support_freebsd) | ✓ | ✓ | Armv7-A FreeBSD
[`armv7-unknown-linux-uclibceabi`](#platform_support_armv7_unknown_linux_uclibceabi) | ✓ | ✓ | Armv7-A Linux with uClibc, softfloat
[`armv7-unknown-linux-uclibceabihf`](#platform_support_armv7_unknown_linux_uclibceabihf) | ✓ | ? | Armv7-A Linux with uClibc, hardfloat
[`armv7-unknown-netbsd-eabihf`](#platform_support_netbsd) | ✓ | ✓ | Armv7-A NetBSD w/hard-float
[`armv7-unknown-trusty`](#platform_support_trusty) | ✓ |  |
[`armv7-wrs-vxworks-eabihf`](#platform_support_vxworks) | ✓ |  | Armv7-A for VxWorks
[`armv7a-kmc-solid_asp3-eabi`](#platform_support_kmc_solid) | ✓ |  | ARM SOLID with TOPPERS/ASP3
[`armv7a-kmc-solid_asp3-eabihf`](#platform_support_kmc_solid) | ✓ |  | ARM SOLID with TOPPERS/ASP3, hardfloat
[`armv7a-none-eabihf`](#platform_support_arm_none_eabi) | * |  | Bare Armv7-A, hardfloat
[`armv7a-vex-v5`](#platform_support_armv7a_vex_v5) | ? |  | Armv7-A Cortex-A9 VEX V5 Brain, VEXos
[`armv7k-apple-watchos`](#platform_support_apple_watchos) | ✓ |  | Armv7-A Apple WatchOS
[`armv7s-apple-ios`](#platform_support_apple_ios) | ✓ |  | Armv7-A Apple-A6 Apple iOS
[`armv8r-none-eabihf`](#platform_support_armv8r_none_eabihf) | * |  | Bare Armv8-R, hardfloat
[`armv7a-nuttx-eabi`](#platform_support_nuttx) | ✓ |  | ARMv7-A with NuttX
[`armv7a-nuttx-eabihf`](#platform_support_nuttx) | ✓ |  | ARMv7-A with NuttX, hardfloat
[`avr-none`](#platform_support_avr_none) | * |  | AVR; requires `-Zbuild-std=core` and `-Ctarget-cpu=...`
`bpfeb-unknown-none` | * |  | BPF (big endian)
`bpfel-unknown-none` | * |  | BPF (little endian)
`csky-unknown-linux-gnuabiv2` | ✓ |  | C-SKY abiv2 Linux (little endian)
`csky-unknown-linux-gnuabiv2hf` | ✓ |  | C-SKY abiv2 Linux, hardfloat (little endian)
[`hexagon-unknown-linux-musl`](#platform_support_hexagon_unknown_linux_musl) | ✓ | | Hexagon Linux with musl 1.2.3
[`hexagon-unknown-none-elf`](#platform_support_hexagon_unknown_none_elf)| * | | Bare Hexagon (v60+, HVX)
[`i386-apple-ios`](#platform_support_apple_ios) | ✓ |  | 32-bit x86 iOS (Penryn) [^x86_32-floats-return-ABI]
[`i586-unknown-netbsd`](#platform_support_netbsd) | ✓ |  | 32-bit x86 (original Pentium) [^x86_32-floats-x87]
[`i586-unknown-redox`](#platform_support_redox) | ✓ |  | 32-bit x86 Redox OS (PentiumPro) [^x86_32-floats-x87]
[`i686-apple-darwin`](#platform_support_apple_darwin) | ✓ | ✓ | 32-bit macOS (10.12+, Sierra+, Penryn) [^x86_32-floats-return-ABI]
[`i686-pc-nto-qnx700`](#platform_support_nto_qnx) | * |  | 32-bit x86 QNX Neutrino 7.0 RTOS (Pentium 4) [^x86_32-floats-return-ABI]
`i686-unknown-haiku` | ✓ | ✓ | 32-bit Haiku (Pentium 4) [^x86_32-floats-return-ABI]
[`i686-unknown-hurd-gnu`](#platform_support_hurd) | ✓ | ✓ | 32-bit GNU/Hurd (Pentium 4) [^x86_32-floats-return-ABI]
[`i686-unknown-netbsd`](#platform_support_netbsd) | ✓ | ✓ | NetBSD/i386 (Pentium 4) [^x86_32-floats-return-ABI]
[`i686-unknown-openbsd`](#platform_support_openbsd) | ✓ | ✓ | 32-bit OpenBSD (Pentium 4) [^x86_32-floats-return-ABI]
`i686-uwp-windows-gnu` | ✓ |  | [^x86_32-floats-return-ABI]
[`i686-uwp-windows-msvc`](#platform_support_uwp_windows_msvc) | ✓ |  | [^x86_32-floats-return-ABI] [^win32-msvc-alignment]
[`i686-win7-windows-gnu`](#platform_support_win7_windows_gnu) | ✓ |   | 32-bit Windows 7 support [^x86_32-floats-return-ABI]
[`i686-win7-windows-msvc`](#platform_support_win7_windows_msvc) | ✓ |   | 32-bit Windows 7 support [^x86_32-floats-return-ABI] [^win32-msvc-alignment]
[`i686-wrs-vxworks`](#platform_support_vxworks) | ✓ |  | [^x86_32-floats-return-ABI]
[`loongarch64-unknown-linux-ohos`](#platform_support_openharmony) | ✓ |   | LoongArch64 OpenHarmony
[`loongarch32-unknown-none`](#platform_support_loongarch_none) | * |   | LoongArch32 Bare-metal (ILP32D ABI)
[`loongarch32-unknown-none-softfloat`](#platform_support_loongarch_none) | * |   | LoongArch32 Bare-metal (ILP32S ABI)
[`m68k-unknown-linux-gnu`](#platform_support_m68k_unknown_linux_gnu) | ? |  | Motorola 680x0 Linux
[`m68k-unknown-none-elf`](#platform_support_m68k_unknown_none_elf) |  |  | Motorola 680x0
`mips-unknown-linux-gnu` | ✓ | ✓ | MIPS Linux (kernel 4.4, glibc 2.23)
`mips-unknown-linux-musl` | ✓ |  | MIPS Linux with musl 1.2.3
`mips-unknown-linux-uclibc` | ✓ |  | MIPS Linux with uClibc
[`mips64-openwrt-linux-musl`](#platform_support_mips64_openwrt_linux_musl) | ? |  | MIPS64 for OpenWrt Linux musl 1.2.3
`mips64-unknown-linux-gnuabi64` | ✓ | ✓ | MIPS64 Linux, N64 ABI (kernel 4.4, glibc 2.23)
[`mips64-unknown-linux-muslabi64`](#platform_support_mips64_unknown_linux_muslabi64) | ✓ | ✓ | MIPS64 Linux, N64 ABI, musl 1.2.3
`mips64el-unknown-linux-gnuabi64` | ✓ | ✓ | MIPS64 (little endian) Linux, N64 ABI (kernel 4.4, glibc 2.23)
`mips64el-unknown-linux-muslabi64` | ✓ |  | MIPS64 (little endian) Linux, N64 ABI, musl 1.2.3
`mipsel-sony-psp` | * |  | MIPS (LE) Sony PlayStation Portable (PSP)
[`mipsel-sony-psx`](#platform_support_mipsel_sony_psx) | * |  | MIPS (LE) Sony PlayStation 1 (PSX)
[`mipsel-unknown-linux-gnu`](#platform_support_mipsel_unknown_linux_gnu) | ✓ | ✓ | MIPS (little endian) Linux (kernel 4.4, glibc 2.23)
`mipsel-unknown-linux-musl` | ✓ |  | MIPS (little endian) Linux with musl 1.2.3
`mipsel-unknown-linux-uclibc` | ✓ |  | MIPS (LE) Linux with uClibc
[`mipsel-unknown-netbsd`](#platform_support_netbsd) | ✓ | ✓ | 32-bit MIPS (LE), requires mips32 cpu support
`mipsel-unknown-none` | * |  | Bare MIPS (LE) softfloat
[`mips-mti-none-elf`](#platform_support_mips_mti_none_elf) | * |  | Bare MIPS32r2 (BE) softfloat
[`mipsel-mti-none-elf`](#platform_support_mips_mti_none_elf) | * |  | Bare MIPS32r2 (LE) softfloat
[`mipsisa32r6-unknown-linux-gnu`](#platform_support_mips_release_6) | ? |  | 32-bit MIPS Release 6 Big Endian
[`mipsisa32r6el-unknown-linux-gnu`](#platform_support_mips_release_6) | ? |  | 32-bit MIPS Release 6 Little Endian
[`mipsisa64r6-unknown-linux-gnuabi64`](#platform_support_mips_release_6) | ? |  | 64-bit MIPS Release 6 Big Endian
[`mipsisa64r6el-unknown-linux-gnuabi64`](#platform_support_mips_release_6) | ✓ | ✓ | 64-bit MIPS Release 6 Little Endian
`msp430-none-elf` | * |  | 16-bit MSP430 microcontrollers
[`powerpc-unknown-freebsd`](#platform_support_freebsd) | ? |   | PowerPC FreeBSD
[`powerpc-unknown-linux-gnuspe`](#platform_support_powerpc_unknown_linux_gnuspe) | ✓ |  | PowerPC SPE Linux
`powerpc-unknown-linux-musl` | ? |  | PowerPC Linux with musl 1.2.3
[`powerpc-unknown-linux-muslspe`](#platform_support_powerpc_unknown_linux_muslspe) | ? |  | PowerPC SPE Linux with musl 1.2.3
[`powerpc-unknown-netbsd`](#platform_support_netbsd) | ✓ | ✓ | NetBSD 32-bit powerpc systems
[`powerpc-unknown-openbsd`](#platform_support_powerpc_unknown_openbsd) | * |  |
[`powerpc-wrs-vxworks`](#platform_support_vxworks) | ✓ |  |
[`powerpc-wrs-vxworks-spe`](#platform_support_vxworks) | ✓ |  |
[`powerpc64-ibm-aix`](#platform_support_aix) | ? |  | 64-bit AIX (7.2 and newer)
[`powerpc64-unknown-freebsd`](#platform_support_freebsd) | ✓ | ✓ | PPC64 FreeBSD (ELFv2)
[`powerpc64-unknown-linux-musl`](#platform_support_powerpc64_unknown_linux_musl) | ✓ | ✓ | PPC64 Linux (kernel 4.19, musl 1.2.3)
[`powerpc64-unknown-openbsd`](#platform_support_openbsd) | ✓ | ✓ | OpenBSD/powerpc64
[`powerpc64-wrs-vxworks`](#platform_support_vxworks) | ✓ |  |
[`powerpc64le-unknown-freebsd`](#platform_support_freebsd) | ✓ | ✓ | PPC64LE FreeBSD
[`riscv32-wrs-vxworks`](#platform_support_vxworks) | ✓ |  |
[`riscv32e-unknown-none-elf`](#platform_support_riscv32e_unknown_none_elf) | * |  | Bare RISC-V (RV32E ISA)
[`riscv32em-unknown-none-elf`](#platform_support_riscv32e_unknown_none_elf) | * |  | Bare RISC-V (RV32EM ISA)
[`riscv32emc-unknown-none-elf`](#platform_support_riscv32e_unknown_none_elf) | * |  | Bare RISC-V (RV32EMC ISA)
`riscv32gc-unknown-linux-gnu` | ✓ |   | RISC-V Linux (kernel 5.4, glibc 2.33)
`riscv32gc-unknown-linux-musl` | ? |   | RISC-V Linux (kernel 5.4, musl 1.2.3 + RISCV32 support patches)
[`riscv32im-risc0-zkvm-elf`](#platform_support_riscv32im_risc0_zkvm_elf) | ? |  | RISC Zero's zero-knowledge Virtual Machine (RV32IM ISA)
[`riscv32ima-unknown-none-elf`](#platform_support_riscv32_unknown_none_elf) | * |  | Bare RISC-V (RV32IMA ISA)
[`riscv32imac-esp-espidf`](#platform_support_esp_idf) | ✓ |  | RISC-V ESP-IDF
[`riscv32imac-unknown-nuttx-elf`](#platform_support_nuttx) | ✓ |  | RISC-V 32bit with NuttX
[`riscv32imac-unknown-xous-elf`](#platform_support_riscv32imac_unknown_xous_elf) | ? |  | RISC-V Xous (RV32IMAC ISA)
[`riscv32imafc-esp-espidf`](#platform_support_esp_idf) | ✓ |  | RISC-V ESP-IDF
[`riscv32imafc-unknown-nuttx-elf`](#platform_support_nuttx) | ✓ |  | RISC-V 32bit with NuttX
[`riscv32imc-esp-espidf`](#platform_support_esp_idf) | ✓ |  | RISC-V ESP-IDF
[`riscv32imc-unknown-nuttx-elf`](#platform_support_nuttx) | ✓ |  | RISC-V 32bit with NuttX
[`riscv64-linux-android`](#platform_support_android) | ? |   | RISC-V 64-bit Android
[`riscv64-wrs-vxworks`](#platform_support_vxworks) | ✓ |  |
`riscv64gc-unknown-freebsd` | ? |   | RISC-V FreeBSD
`riscv64gc-unknown-fuchsia` | ? |   | RISC-V Fuchsia
[`riscv64gc-unknown-hermit`](#platform_support_hermit) | ✓ |   | RISC-V Hermit
[`riscv64gc-unknown-managarm-mlibc`](#platform_support_managarm) | ? |   | RISC-V Managarm
[`riscv64gc-unknown-netbsd`](#platform_support_netbsd) | ✓ | ✓ | RISC-V NetBSD
[`riscv64gc-unknown-nuttx-elf`](#platform_support_nuttx) | ✓ |  | RISC-V 64bit with NuttX
[`riscv64gc-unknown-openbsd`](#platform_support_openbsd) | ✓ | ✓ | OpenBSD/riscv64
[`riscv64imac-unknown-nuttx-elf`](#platform_support_nuttx) | ✓ |  | RISC-V 64bit with NuttX
[`riscv64a23-unknown-linux-gnu`](#platform_support_riscv64a23_unknown_linux_gnu) | ✓ | ✓ | RISC-V Linux (kernel 6.8.0+, glibc 2.39)
[`s390x-unknown-linux-musl`](#platform_support_s390x_unknown_linux_musl) | ✓ |  | S390x Linux (kernel 3.2, musl 1.2.3)
`sparc-unknown-linux-gnu` | ✓ |  | 32-bit SPARC Linux
[`sparc-unknown-none-elf`](#platform_support_sparc_unknown_none_elf) | * |  | Bare 32-bit SPARC V7+
[`sparc64-unknown-netbsd`](#platform_support_netbsd) | ✓ | ✓ | NetBSD/sparc64
[`sparc64-unknown-openbsd`](#platform_support_openbsd) | ✓ | ✓ | OpenBSD/sparc64
[`thumbv4t-none-eabi`](#platform_support_armv4t_none_eabi) | * |  | Thumb-mode Bare Armv4T
[`thumbv5te-none-eabi`](#platform_support_armv5te_none_eabi) | * |  | Thumb-mode Bare Armv5TE
[`thumbv6m-nuttx-eabi`](#platform_support_nuttx) | ✓ |  | ARMv6M with NuttX
`thumbv7a-pc-windows-msvc` |  |  |
[`thumbv7a-uwp-windows-msvc`](#platform_support_uwp_windows_msvc) |  |  |
[`thumbv7a-nuttx-eabi`](#platform_support_nuttx) | ✓ |  | ARMv7-A with NuttX
[`thumbv7a-nuttx-eabihf`](#platform_support_nuttx) | ✓ |  | ARMv7-A with NuttX, hardfloat
[`thumbv7em-nuttx-eabi`](#platform_support_nuttx) | ✓ |  | ARMv7EM with NuttX
[`thumbv7em-nuttx-eabihf`](#platform_support_nuttx) | ✓ |  | ARMv7EM with NuttX, hardfloat
[`thumbv7m-nuttx-eabi`](#platform_support_nuttx) | ✓ |  | ARMv7M with NuttX
`thumbv7neon-unknown-linux-musleabihf` | ? |  | Thumb2-mode Armv7-A Linux with NEON, musl 1.2.3
[`thumbv8m.base-nuttx-eabi`](#platform_support_nuttx) | ✓ |  | ARMv8M Baseline with NuttX
[`thumbv8m.main-nuttx-eabi`](#platform_support_nuttx) | ✓ |  | ARMv8M Mainline with NuttX
[`thumbv8m.main-nuttx-eabihf`](#platform_support_nuttx) | ✓ |  | ARMv8M Mainline with NuttX, hardfloat
[`wasm64-unknown-unknown`](#platform_support_wasm64_unknown_unknown) | ? |  | WebAssembly
[`wasm32-wali-linux-musl`](#platform_support_wasm32_wali_linux) | ? |  | WebAssembly with [WALI](https://github.com/arjunr2/WALI)
[`x86_64-apple-tvos`](#platform_support_apple_tvos) | ✓ |  | x86 64-bit tvOS
[`x86_64-apple-watchos-sim`](#platform_support_apple_watchos) | ✓ |  | x86 64-bit Apple WatchOS simulator
[`x86_64-lynx-lynxos178`](#platform_support_lynxos178) |   |  | x86_64 LynxOS-178
[`x86_64-pc-cygwin`](#platform_support_x86_64_pc_cygwin) | ✓ |  | 64-bit x86 Cygwin |
[`x86_64-pc-nto-qnx710`](#platform_support_nto_qnx) | ✓ |  | x86 64-bit QNX Neutrino 7.1 RTOS with default network stack (io-pkt) |
[`x86_64-pc-nto-qnx710_iosock`](#platform_support_nto_qnx) | ✓ |  | x86 64-bit QNX Neutrino 7.1 RTOS with new network stack (io-sock) |
[`x86_64-pc-nto-qnx800`](#platform_support_nto_qnx) | ✓ |  | x86 64-bit QNX Neutrino 8.0 RTOS |
[`x86_64-unikraft-linux-musl`](#platform_support_unikraft_linux_musl) | ✓ |   | 64-bit Unikraft with musl 1.2.3
`x86_64-unknown-dragonfly` | ✓ | ✓ | 64-bit DragonFlyBSD
`x86_64-unknown-haiku` | ✓ | ✓ | 64-bit Haiku
[`x86_64-unknown-hermit`](#platform_support_hermit) | ✓ |  | x86_64 Hermit
[`x86_64-unknown-hurd-gnu`](#platform_support_hurd) | ✓ | ✓ | 64-bit GNU/Hurd
`x86_64-unknown-l4re-uclibc` | ? |  |
[`x86_64-unknown-linux-none`](#platform_support_x86_64_unknown_linux_none) | * |  | 64-bit Linux with no libc
[`x86_64-unknown-managarm-mlibc`](#platform_support_managarm) | ? |   | x86_64 Managarm
[`x86_64-unknown-openbsd`](#platform_support_openbsd) | ✓ | ✓ | 64-bit OpenBSD
[`x86_64-unknown-trusty`](#platform_support_trusty) | ✓ |  |
`x86_64-uwp-windows-gnu` | ✓ |  |
[`x86_64-uwp-windows-msvc`](#platform_support_uwp_windows_msvc) | ✓ |  |
[`x86_64-win7-windows-gnu`](#platform_support_win7_windows_gnu) | ✓ |   | 64-bit Windows 7 support
[`x86_64-win7-windows-msvc`](#platform_support_win7_windows_msvc) | ✓ |   | 64-bit Windows 7 support
[`x86_64-wrs-vxworks`](#platform_support_vxworks) | ✓ |  |
[`x86_64h-apple-darwin`](#platform_support_x86_64h_apple_darwin) | ✓ | ✓ | macOS with late-gen Intel (at least Haswell)
[`xtensa-esp32-espidf`](#platform_support_esp_idf) | ✓ |  | Xtensa ESP32
[`xtensa-esp32-none-elf`](#platform_support_xtensa) | * |  | Xtensa ESP32
[`xtensa-esp32s2-espidf`](#platform_support_esp_idf) | ✓ |  | Xtensa ESP32-S2
[`xtensa-esp32s2-none-elf`](#platform_support_xtensa) | * |  | Xtensa ESP32-S2
[`xtensa-esp32s3-espidf`](#platform_support_esp_idf) | ✓ |  | Xtensa ESP32-S3
[`xtensa-esp32s3-none-elf`](#platform_support_xtensa) | * |  | Xtensa ESP32-S3

[runs on NVIDIA GPUs]: https://github.com/japaric-archived/nvptx#targets
[the AMD GPU]: https://llvm.org/docs/AMDGPUUsage.html#processors

<a id=target_tier_policy></a>

# Target Tier Policy

## Table of Contents

* [General](#general)
* [Adding a new target](#adding-a-new-target)
* [Tier 3 target policy](#tier-3-target-policy)
* [Tier 2 target policy](#tier-2-target-policy)
  * [Tier 2 with host tools](#tier-2-with-host-tools)
* [Tier 1 target policy](#tier-1-target-policy)
  * [Tier 1 with host tools](#tier-1-with-host-tools)

## General

Rust provides three tiers of target support:

- Rust provides no guarantees about tier 3 targets; they exist in the codebase,
  but may or may not build.
- Rust's continuous integration checks that tier 2 targets will always build,
  but they may or may not pass tests.
- Rust's continuous integration checks that tier 1 targets will always build
  and pass tests.

Adding a new tier 3 target imposes minimal requirements; we focus primarily on
avoiding disruption to other ongoing Rust development.

Tier 2 and tier 1 targets place work on Rust project developers as a whole, to
avoid breaking the target. The broader Rust community may also feel more
inclined to support higher-tier targets in their crates (though they are not
obligated to do so). Thus, these tiers require commensurate and ongoing efforts
from the maintainers of the target, to demonstrate value and to minimize any
disruptions to ongoing Rust development.

This policy defines the requirements for accepting a proposed target at a given
level of support.

Each tier builds on all the requirements from the previous tier, unless
overridden by a stronger requirement. Targets at tier 2 and tier 1 may also
provide *host tools* (such as `rustc` and `cargo`); each of those tiers
includes a set of supplementary requirements that must be met if supplying host
tools for the target. A target at tier 2 or tier 1 is not required to supply
host tools, but if it does, it must meet the corresponding additional
requirements for host tools.

The policy for each tier also documents the Rust governance teams that must
approve the addition of any target at that tier. Those teams are responsible
for reviewing and evaluating the target, based on these requirements and their
own judgment. Those teams may apply additional requirements, including
subjective requirements, such as to deal with issues not foreseen by this
policy. (Such requirements may subsequently motivate additions to this policy.)

While these criteria attempt to document the policy, that policy still involves
human judgment. Targets must fulfill the spirit of the requirements as well, as
determined by the judgment of the approving teams. Reviewers and team members
evaluating targets and target-specific patches should always use their own best
judgment regarding the quality of work, and the suitability of a target for the
Rust project. Neither this policy nor any decisions made regarding targets
shall create any binding agreement or estoppel by any party.

Before filing an issue or pull request (PR) to introduce or promote a target,
the target should already meet the corresponding tier requirements. This does
not preclude an existing target's maintainers using issues (on the Rust
repository or otherwise) to track requirements that have not yet been met, as
appropriate; however, before officially proposing the introduction or promotion
of a target, it should meet all of the necessary requirements. A target
proposal must quote the corresponding requirements verbatim and respond to them
as part of explaining how the target meets those requirements. (For the
requirements that simply state that the target or the target developers must
not do something, it suffices to acknowledge the requirement.)

For a list of all supported targets and their corresponding tiers ("tier 3",
"tier 2", "tier 2 with host tools", "tier 1", or "tier 1 with host tools"), see
[platform support](#platform_support).

Several parts of this policy require providing target-specific documentation.
Such documentation should typically appear in a subdirectory of the
platform-support section of this rustc manual, with a link from the target's
entry in [platform support](#platform_support). Use
[TEMPLATE.md](#platform_support_TEMPLATE) as a base, and see other
documentation in that directory for examples.

Note that a target must have already received approval for the next lower tier,
and spent a reasonable amount of time at that tier, before making a proposal
for promotion to the next higher tier; this is true even if a target meets the
requirements for several tiers at once. This policy leaves the precise
interpretation of "reasonable amount of time" up to the approving teams; those
teams may scale the amount of time required based on their confidence in the
target and its demonstrated track record at its current tier. At a minimum,
multiple stable releases of Rust should typically occur between promotions of a
target.

The availability or tier of a target in stable Rust is not a hard stability
guarantee about the future availability or tier of that target. Higher-level
target tiers are an increasing commitment to the support of a target, and we
will take that commitment and potential disruptions into account when
evaluating the potential demotion or removal of a target that has been part of
a stable release. The promotion or demotion of a target will not generally
affect existing stable releases, only current development and future releases.

In this policy, the words "must" and "must not" specify absolute requirements
that a target must meet to qualify for a tier. The words "should" and "should
not" specify requirements that apply in almost all cases, but for which the
approving teams may grant an exception for good reason. The word "may"
indicates something entirely optional, and does not indicate guidance or
recommendations. This language is based on [IETF RFC
2119](https://tools.ietf.org/html/rfc2119).

## Adding a new target

New targets typically start as Tier 3 and then can be promoted later.
To propose addition of a new target, open a pull request on [`rust-lang/rust`]:

- Copy the [Tier 3 target policy](#tier-3-target-policy) to the description
  and fill it out, see [example][tier3example].
- Add a new description for the target in `src/doc/rustc/src/platform-support`
  using the [template][platform_template].
- Add the target to the [SUMMARY.md][summary] (allows wildcards) and
  [platform-support.md][platformsupport] (must name all targets verbatim).
  Link to the created description page.
- Ensure the pull request is assigned to a member of the [Rust compiler team][rust_compiler_team] by commenting:
  ```text
  r? compiler
  ```

See also the documentation in the `rustc-dev-guide` on [adding a new target to
`rustc`][rustc_dev_guide_add_target].

Note that adding a new target that wants to support `std` would transitively
require `cc` and `libc` support. However, these would like to know about the
target from `rustc` as well. To break this cycle, you are strongly encouraged
to add a _minimal_ `#![no_core]` target spec first to teach `rustc` about the
target's existence, and add `std` support as a follow-up once you've added
support for the target in `cc` and `libc`.

[tier3example]: https://github.com/rust-lang/rust/pull/94872
[platform_template]: https://github.com/rust-lang/rust/blob/master/src/doc/rustc/src/platform-support/TEMPLATE.md
[summary]: https://github.com/rust-lang/rust/blob/master/src/doc/rustc/src/SUMMARY.md
[platformsupport]: https://github.com/rust-lang/rust/blob/master/src/doc/rustc/src/platform-support.md
[rust_compiler_team]: https://www.rust-lang.org/governance/teams/compiler
[`rust-lang/rust`]: https://github.com/rust-lang/rust
[rustc_dev_guide_add_target]: https://rustc-dev-guide.rust-lang.org/building/new-target.html

## Tier 3 target policy

At this tier, the Rust project provides no official support for a target, so we
place minimal requirements on the introduction of targets.

A proposed new tier 3 target must be reviewed and approved by a member of the
compiler team based on these requirements. The reviewer may choose to gauge
broader compiler team consensus via a [Major Change Proposal (MCP)][MCP].

A proposed target or target-specific patch that substantially changes code
shared with other targets (not just target-specific code) must be reviewed and
approved by the appropriate team for that shared code before acceptance.

- A tier 3 target must have a designated developer or developers (the "target
  maintainers") on record to be CCed when issues arise regarding the target.
  (The mechanism to track and CC such developers may evolve over time.)
- Targets must use naming consistent with any existing targets; for instance, a
  target for the same CPU or OS as an existing Rust target should use the same
  name for that CPU or OS. Targets should normally use the same names and
  naming conventions as used elsewhere in the broader ecosystem beyond Rust
  (such as in other toolchains), unless they have a very good reason to
  diverge. Changing the name of a target can be highly disruptive, especially
  once the target reaches a higher tier, so getting the name right is important
  even for a tier 3 target.
  - Target names should not introduce undue confusion or ambiguity unless
    absolutely necessary to maintain ecosystem compatibility. For example, if
    the name of the target makes people extremely likely to form incorrect
    beliefs about what it targets, the name should be changed or augmented to
    disambiguate it.
  - If possible, use only letters, numbers, dashes and underscores for the name.
    Periods (`.`) are known to cause issues in Cargo.
- Tier 3 targets may have unusual requirements to build or use, but must not
  create legal issues or impose onerous legal terms for the Rust project or for
  Rust developers or users.
  - The target must not introduce license incompatibilities.
  - Anything added to the Rust repository must be under the standard Rust
    license (`MIT OR Apache-2.0`).
  - The target must not cause the Rust tools or libraries built for any other
    host (even when supporting cross-compilation to the target) to depend
    on any new dependency less permissive than the Rust licensing policy. This
    applies whether the dependency is a Rust crate that would require adding
    new license exceptions (as specified by the `tidy` tool in the
    rust-lang/rust repository), or whether the dependency is a native library
    or binary. In other words, the introduction of the target must not cause a
    user installing or running a version of Rust or the Rust tools to be
    subject to any new license requirements.
  - Compiling, linking, and emitting functional binaries, libraries, or other
    code for the target (whether hosted on the target itself or cross-compiling
    from another target) must not depend on proprietary (non-FOSS) libraries.
    Host tools built for the target itself may depend on the ordinary runtime
    libraries supplied by the platform and commonly used by other applications
    built for the target, but those libraries must not be required for code
    generation for the target; cross-compilation to the target must not require
    such libraries at all. For instance, `rustc` built for the target may
    depend on a common proprietary C runtime library or console output library,
    but must not depend on a proprietary code generation library or code
    optimization library. Rust's license permits such combinations, but the
    Rust project has no interest in maintaining such combinations within the
    scope of Rust itself, even at tier 3.
  - "onerous" here is an intentionally subjective term. At a minimum, "onerous"
    legal/licensing terms include but are *not* limited to: non-disclosure
    requirements, non-compete requirements, contributor license agreements
    (CLAs) or equivalent, "non-commercial"/"research-only"/etc terms,
    requirements conditional on the employer or employment of any particular
    Rust developers, revocable terms, any requirements that create liability
    for the Rust project or its developers or users, or any requirements that
    adversely affect the livelihood or prospects of the Rust project or its
    developers or users.
- Neither this policy nor any decisions made regarding targets shall create any
  binding agreement or estoppel by any party. If any member of an approving
  Rust team serves as one of the maintainers of a target, or has any legal or
  employment requirement (explicit or implicit) that might affect their
  decisions regarding a target, they must recuse themselves from any approval
  decisions regarding the target's tier status, though they may otherwise
  participate in discussions.
  - This requirement does not prevent part or all of this policy from being
    cited in an explicit contract or work agreement (e.g. to implement or
    maintain support for a target). This requirement exists to ensure that a
    developer or team responsible for reviewing and approving a target does not
    face any legal threats or obligations that would prevent them from freely
    exercising their judgment in such approval, even if such judgment involves
    subjective matters or goes beyond the letter of these requirements.
- Tier 3 targets should attempt to implement as much of the standard libraries
  as possible and appropriate (`core` for most targets, `alloc` for targets
  that can support dynamic memory allocation, `std` for targets with an
  operating system or equivalent layer of system-provided functionality), but
  may leave some code unimplemented (either unavailable or stubbed out as
  appropriate), whether because the target makes it impossible to implement or
  challenging to implement. The authors of pull requests are not obligated to
  avoid calling any portions of the standard library on the basis of a tier 3
  target not implementing those portions.
- The target must provide documentation for the Rust community explaining how
  to build for the target, using cross-compilation if possible. If the target
  supports running binaries, or running tests (even if they do not pass), the
  documentation must explain how to run such binaries or tests for the target,
  using emulation if possible or dedicated hardware if necessary.
- Tier 3 targets must not impose burden on the authors of pull requests, or
  other developers in the community, to maintain the target. In particular,
  do not post comments (automated or manual) on a PR that derail or suggest a
  block on the PR based on a tier 3 target. Do not send automated messages or
  notifications (via any medium, including via `@`) to a PR author or others
  involved with a PR regarding a tier 3 target, unless they have opted into
  such messages.
  - Backlinks such as those generated by the issue/PR tracker when linking to
    an issue or PR are not considered a violation of this policy, within
    reason. However, such messages (even on a separate repository) must not
    generate notifications to anyone involved with a PR who has not requested
    such notifications.
- Patches adding or updating tier 3 targets must not break any existing tier 2
  or tier 1 target, and must not knowingly break another tier 3 target without
  approval of either the compiler team or the maintainers of the other tier 3
  target.
  - In particular, this may come up when working on closely related targets,
    such as variations of the same architecture with different features. Avoid
    introducing unconditional uses of features that another variation of the
    target may not have; use conditional compilation or runtime detection, as
    appropriate, to let each target run code supported by that target.
- Tier 3 targets must be able to produce assembly using at least one of
  rustc's supported backends from any host target. (Having support in a fork
  of the backend is not sufficient, it must be upstream.)

If a tier 3 target stops meeting these requirements, or the target maintainers
no longer have interest or time, or the target shows no signs of activity and
has not built for some time, or removing the target would improve the quality
of the Rust codebase, we may post a PR to remove it; any such PR will be CCed
to the target maintainers (and potentially other people who have previously
worked on the target), to check potential interest in improving the situation.

## Tier 2 target policy

At this tier, the Rust project guarantees that a target builds, and will reject
patches that fail to build on a target. Thus, we place requirements that ensure
the target will not block forward progress of the Rust project.

A proposed new tier 2 target must be reviewed and approved by the compiler team
based on these requirements. Such review and approval may occur via a [Major
Change Proposal (MCP)][MCP].

In addition, the infrastructure team must approve the integration of the target
into Continuous Integration (CI), and the tier 2 CI-related requirements. This
review and approval may take place in a PR adding the target to CI, or simply
by an infrastructure team member reporting the outcome of a team discussion.

- A tier 2 target must have value to people other than its maintainers. (It may
  still be a niche target, but it must not be exclusively useful for an
  inherently closed group.)
- A tier 2 target must have a designated team of developers (the "target
  maintainers") available to consult on target-specific build-breaking issues,
  or if necessary to develop target-specific language or library implementation
  details. This team must have at least 2 developers.
  - The target maintainers should not only fix target-specific issues, but
    should use any such issue as an opportunity to educate the Rust community
    about portability to their target, and enhance documentation of the target.
- The target must not place undue burden on Rust developers not specifically
  concerned with that target. Rust developers are expected to not gratuitously
  break a tier 2 target, but are not expected to become experts in every tier 2
  target, and are not expected to provide target-specific implementations for
  every tier 2 target.
- The target must provide documentation for the Rust community explaining how
  to build for the target using cross-compilation, and explaining how to run
  tests for the target. If at all possible, this documentation should show how
  to run Rust programs and tests for the target using emulation, to allow
  anyone to do so. If the target cannot be feasibly emulated, the documentation
  should explain how to obtain and work with physical hardware, cloud systems,
  or equivalent.
- The target must document its baseline expectations for the features or
  versions of CPUs, operating systems, libraries, runtime environments, and
  similar.
- If introducing a new tier 2 or higher target that is identical to an existing
  Rust target except for the baseline expectations for the features or versions
  of CPUs, operating systems, libraries, runtime environments, and similar,
  then the proposed target must document to the satisfaction of the approving
  teams why the specific difference in baseline expectations provides
  sufficient value to justify a separate target.
  - Note that in some cases, based on the usage of existing targets within the
    Rust community, Rust developers or a target's maintainers may wish to
    modify the baseline expectations of a target, or split an existing target
    into multiple targets with different baseline expectations. A proposal to
    do so will be treated similarly to the analogous promotion, demotion, or
    removal of a target, according to this policy, with the same team approvals
    required.
    - For instance, if an OS version has become obsolete and unsupported, a
      target for that OS may raise its baseline expectations for OS version
      (treated as though removing a target corresponding to the older
      versions), or a target for that OS may split out support for older OS
      versions into a lower-tier target (treated as though demoting a target
      corresponding to the older versions, and requiring justification for a
      new target at a lower tier for the older OS versions).
- Tier 2 targets must not leave any significant portions of `core` or the
  standard library unimplemented or stubbed out, unless they cannot possibly be
  supported on the target.
  - The right approach to handling a missing feature from a target may depend
    on whether the target seems likely to develop the feature in the future. In
    some cases, a target may be co-developed along with Rust support, and Rust
    may gain new features on the target as that target gains the capabilities
    to support those features.
  - As an exception, a target identical to an existing tier 1 target except for
    lower baseline expectations for the OS, CPU, or similar, may propose to
    qualify as tier 2 (but not higher) without support for `std` if the target
    will primarily be used in `no_std` applications, to reduce the support
    burden for the standard library. In this case, evaluation of the proposed
    target's value will take this limitation into account.
- The code generation backend for the target should not have deficiencies that
  invalidate Rust safety properties, as evaluated by the Rust compiler team.
  (This requirement does not apply to arbitrary security enhancements or
  mitigations provided by code generation backends, only to those properties
  needed to ensure safe Rust code cannot cause undefined behavior or other
  unsoundness.) If this requirement does not hold, the target must clearly and
  prominently document any such limitations as part of the target's entry in
  the target tier list, and ideally also via a failing test in the testsuite.
  The Rust compiler team must be satisfied with the balance between these
  limitations and the difficulty of implementing the necessary features.
  - For example, if Rust relies on a specific code generation feature to ensure
    that safe code cannot overflow the stack, the code generation for the
    target should support that feature.
  - If the Rust compiler introduces new safety properties (such as via new
    capabilities of a compiler backend), the Rust compiler team will determine
    if they consider those new safety properties a best-effort improvement for
    specific targets, or a required property for all Rust targets. In the
    latter case, the compiler team may require the maintainers of existing
    targets to either implement and confirm support for the property or update
    the target tier list with documentation of the missing property.
- If the target supports C code, and the target has an interoperable calling
  convention for C code, the Rust target must support that C calling convention
  for the platform via `extern "C"`. The C calling convention does not need to
  be the default Rust calling convention for the target, however.
- The target must build reliably in CI, for all components that Rust's CI
  considers mandatory.
- The approving teams may additionally require that a subset of tests pass in
  CI, such as enough to build a functional "hello world" program, `./x.py test
  --no-run`, or equivalent "smoke tests". In particular, this requirement may
  apply if the target builds host tools, or if the tests in question provide
  substantial value via early detection of critical problems.
- Building the target in CI must not take substantially longer than the current
  slowest target in CI, and should not substantially raise the maintenance
  burden of the CI infrastructure. This requirement is subjective, to be
  evaluated by the infrastructure team, and will take the community importance
  of the target into account.
- Tier 2 targets should, if at all possible, support cross-compiling. Tier 2
  targets should not require using the target as the host for builds, even if
  the target supports host tools.
- In addition to the legal requirements for all targets (specified in the tier
  3 requirements), because a tier 2 target typically involves the Rust project
  building and supplying various compiled binaries, incorporating the target
  and redistributing any resulting compiled binaries (e.g. built libraries,
  host tools if any) must not impose any onerous license requirements on any
  members of the Rust project, including infrastructure team members and those
  operating CI systems. This is a subjective requirement, to be evaluated by
  the approving teams.
  - As an exception to this, if the target's primary purpose is to build
    components for a Free and Open Source Software (FOSS) project licensed
    under "copyleft" terms (terms which require licensing other code under
    compatible FOSS terms), such as kernel modules or plugins, then the
    standard libraries for the target may potentially be subject to copyleft
    terms, as long as such terms are satisfied by Rust's existing practices of
    providing full corresponding source code. Note that anything added to the
    Rust repository itself must still use Rust's standard license terms.
- Tier 2 targets must not impose burden on the authors of pull requests, or
  other developers in the community, to ensure that tests pass for the target.
  In particular, do not post comments (automated or manual) on a PR that derail
  or suggest a block on the PR based on tests failing for the target. Do not
  send automated messages or notifications (via any medium, including via `@`)
  to a PR author or others involved with a PR regarding the PR breaking tests
  on a tier 2 target, unless they have opted into such messages.
  - Backlinks such as those generated by the issue/PR tracker when linking to
    an issue or PR are not considered a violation of this policy, within
    reason. However, such messages (even on a separate repository) must not
    generate notifications to anyone involved with a PR who has not requested
    such notifications.
- The target maintainers should regularly run the testsuite for the target, and
  should fix any test failures in a reasonably timely fashion.
- All requirements for tier 3 apply.

A tier 2 target may be demoted or removed if it no longer meets these
requirements. Any proposal for demotion or removal will be CCed to the target
maintainers, and will be communicated widely to the Rust community before being
dropped from a stable release. (The amount of time between such communication
and the next stable release may depend on the nature and severity of the failed
requirement, the timing of its discovery, whether the target has been part of a
stable release yet, and whether the demotion or removal can be a planned and
scheduled action.)

In some circumstances, especially if the target maintainers do not respond in a
timely fashion, Rust teams may land pull requests that temporarily disable some
targets in the nightly compiler, in order to implement a feature not yet
supported by those targets. (As an example, this happened when introducing the
128-bit types `u128` and `i128`.) Such a pull request will include notification
and coordination with the maintainers of such targets, and will ideally happen
towards the beginning of a new development cycle to give maintainers time to
update their targets. The maintainers of such targets will then be expected to
implement the corresponding target-specific support in order to re-enable the
target. If the maintainers of such targets cannot provide such support in time
for the next stable release, this may result in demoting or removing the
targets.

### Tier 2 with host tools

Some tier 2 targets may additionally have binaries built to run on them as a
host (such as `rustc` and `cargo`). This allows the target to be used as a
development platform, not just a compilation target.

A proposed new tier 2 target with host tools must be reviewed and approved by
the compiler team based on these requirements. Such review and approval may
occur via a [Major Change Proposal (MCP)][MCP].

In addition, the infrastructure team must approve the integration of the
target's host tools into Continuous Integration (CI), and the CI-related
requirements for host tools. This review and approval may take place in a PR
adding the target's host tools to CI, or simply by an infrastructure team
member reporting the outcome of a team discussion.

- Depending on the target, its capabilities, its performance, and the
  likelihood of use for any given tool, the host tools provided for a tier 2
  target may include only `rustc` and `cargo`, or may include additional tools
  such as `clippy` and `rustfmt`.
- Approval of host tools will take into account the additional time required to
  build the host tools, and the substantial additional storage required for the
  host tools.
- The host tools must have direct value to people other than the target's
  maintainers. (It may still be a niche target, but the host tools must not be
  exclusively useful for an inherently closed group.) This requirement will be
  evaluated independently from the corresponding tier 2 requirement.
  - The requirement to provide "direct value" means that it does not suffice to
    argue that having host tools will help the target's maintainers more easily
    provide the target to others. The tools themselves must provide value to
    others.
- There must be a reasonable expectation that the host tools will be used, for
  purposes other than to prove that they can be used.
- The host tools must build and run reliably in CI (for all components that
  Rust's CI considers mandatory), though they may or may not pass tests.
- Building host tools for the target must not take substantially longer than
  building host tools for other targets, and should not substantially raise the
  maintenance burden of the CI infrastructure.
- The host tools must provide a substantively similar experience as on other
  targets, subject to reasonable target limitations.
  - Adding a substantively different interface to an existing tool, or a
    target-specific interface to the functionality of an existing tool,
    requires design and implementation approval (e.g. RFC/MCP) from the
    appropriate approving teams for that tool.
    - Such an interface should have a design that could potentially work for
      other targets with similar properties.
    - This should happen separately from the review and approval of the target,
      to simplify the target review and approval processes, and to simplify the
      review and approval processes for the proposed new interface.
  - By way of example, a target that runs within a sandbox may need to modify
    the handling of files, tool invocation, and similar to meet the
    expectations and conventions of the sandbox, but must not introduce a
    separate "sandboxed compilation" interface separate from the CLI interface
    without going through the normal approval process for such an interface.
    Such an interface should take into account potential other targets with
    similar sandboxes.
- If the host tools for the platform would normally be expected to be signed or
  equivalent (e.g. if running unsigned binaries or similar involves a
  "developer mode" or an additional prompt), it must be possible for the Rust
  project's automated builds to apply the appropriate signature process,
  without any manual intervention by either Rust developers, target
  maintainers, or a third party. This process must meet the approval of the
  infrastructure team.
  - This process may require one-time or semi-regular manual steps by the
    infrastructure team, such as registration or renewal of a signing key. Any
    such manual process must meet the approval of the infrastructure team.
  - This process may require the execution of a legal agreement with the
    signature provider. Such a legal agreement may be revocable, and may
    potentially require a nominal fee, but must not be otherwise onerous. Any
    such legal agreement must meet the approval of the infrastructure team.
    (The infrastructure team is not expected or required to sign binding legal
    agreements on behalf of the Rust project; this review and approval exists
    to ensure no terms are onerous or cause problems for infrastructure,
    especially if such terms may impose requirements or obligations on people
    who have access to target-specific infrastructure.)
  - Changes to this process, or to any legal agreements involved, may
    cause a target to stop meeting this requirement.
  - This process involved must be available under substantially similar
    non-onerous terms to the general public. Making it available exclusively to
    the Rust project does not suffice.
  - This requirement exists to ensure that Rust builds, including nightly
    builds, can meet the necessary requirements to allow users to smoothly run
    the host tools.
- Providing host tools does not exempt a target from requirements to support
  cross-compilation if at all possible.
- All requirements for tier 2 apply.

A target may be promoted directly from tier 3 to tier 2 with host tools if it
meets all the necessary requirements, but doing so may introduce substantial
additional complexity. If in doubt, the target should qualify for tier 2
without host tools first.

## Tier 1 target policy

At this tier, the Rust project guarantees that a target builds and passes all
tests, and will reject patches that fail to build or pass the testsuite on a
target. We hold tier 1 targets to our highest standard of requirements.

A proposed new tier 1 target must be reviewed and approved by the compiler team
based on these requirements. In addition, the infra team must approve the
viability of supporting the target. For a tier 1 target, this will
typically take place via a full RFC proposing the target, to be jointly
reviewed and approved by the compiler team and infra team.

In addition, the infrastructure team must approve the integration of the target
into Continuous Integration (CI), and the tier 1 CI-related requirements. This
review and approval may take place in a PR adding the target to CI, by an
infrastructure team member reporting the outcome of a team discussion, or by
including the infrastructure team in the RFC proposing the target.

- Tier 1 targets must have substantial, widespread interest within the
  developer community, and must serve the ongoing needs of multiple production
  users of Rust across multiple organizations or projects. These requirements
  are subjective, and determined by consensus of the approving teams. A tier 1
  target may be demoted or removed if it becomes obsolete or no longer meets
  this requirement.
- The target maintainer team must include at least 3 developers.
- The target must build and pass tests reliably in CI, for all components that
  Rust's CI considers mandatory.
  - The target must not disable an excessive number of tests or pieces of tests
    in the testsuite in order to do so. This is a subjective requirement.
  - If the target does not have host tools support, or if the target has low
    performance, the infrastructure team may choose to have CI cross-compile
    the testsuite from another platform, and then run the compiled tests
    either natively or via accurate emulation. However, the approving teams may
    take such performance considerations into account when determining the
    viability of the target or of its host tools.
- The target must provide as much of the Rust standard library as is feasible
  and appropriate to provide. For instance, if the target can support dynamic
  memory allocation, it must provide an implementation of `alloc` and the
  associated data structures.
- Building the target and running the testsuite for the target must not take
  substantially longer than other targets, and should not substantially raise
  the maintenance burden of the CI infrastructure.
  - In particular, if building the target takes a reasonable amount of time,
    but the target cannot run the testsuite in a timely fashion due to low
    performance of either native code or accurate emulation, that alone may
    prevent the target from qualifying as tier 1.
- If running the testsuite requires additional infrastructure (such as physical
  systems running the target), the target maintainers must arrange to provide
  such resources to the Rust project, to the satisfaction and approval of the
  Rust infrastructure team.
  - Such resources may be provided via cloud systems, via emulation, or via
    physical hardware.
  - If the target requires the use of emulation to meet any of the tier
    requirements, the approving teams for those requirements must have high
    confidence in the accuracy of the emulation, such that discrepancies
    between emulation and native operation that affect test results will
    constitute a high-priority bug in either the emulation or the
    implementation of the target.
  - If it is not possible to run the target via emulation, these resources must
    additionally be sufficient for the Rust infrastructure team to make them
    available for access by Rust team members, for the purposes of development
    and testing. (Note that the responsibility for doing target-specific
    development to keep the target well maintained remains with the target
    maintainers. This requirement ensures that it is possible for other
    Rust developers to test the target, but does not obligate other Rust
    developers to make target-specific fixes.)
  - Resources provided for CI and similar infrastructure must be available for
    continuous exclusive use by the Rust project. Resources provided
    for access by Rust team members for development and testing must be
    available on an exclusive basis when in use, but need not be available on a
    continuous basis when not in use.
- Tier 1 targets must not have a hard requirement for signed, verified, or
  otherwise "approved" binaries. Developers must be able to build, run, and
  test binaries for the target on systems they control, or provide such
  binaries for others to run. (Doing so may require enabling some appropriate
  "developer mode" on such systems, but must not require the payment of any
  additional fee or other consideration, or agreement to any onerous legal
  agreements.)
  - The Rust project may decide to supply appropriately signed binaries if
    doing so provides a smoother experience for developers using the target,
    and a tier 2 target with host tools already requires providing appropriate
    mechanisms that enable our infrastructure to provide such signed binaries.
    However, this additional tier 1 requirement ensures that Rust developers
    can develop and test Rust software for the target (including Rust itself),
    and that development or testing for the target is not limited.
- All requirements for tier 2 apply.

A tier 1 target may be demoted if it no longer meets these requirements but
still meets the requirements for a lower tier. Any proposal for demotion of a
tier 1 target requires a full RFC process, with approval by the compiler and
infra teams. Any such proposal will be communicated widely to the Rust
community, both when initially proposed and before being dropped from a stable
release. A tier 1 target is highly unlikely to be directly removed without
first being demoted to tier 2 or tier 3. (The amount of time between such
communication and the next stable release may depend on the nature and severity
of the failed requirement, the timing of its discovery, whether the target has
been part of a stable release yet, and whether the demotion or removal can be a
planned and scheduled action.)

Raising the baseline expectations of a tier 1 target (such as the minimum CPU
features or OS version required) requires the approval of the compiler and
infra teams, and should be widely communicated as well, but does not
necessarily require a full RFC.

### Tier 1 with host tools

Some tier 1 targets may additionally have binaries built to run on them as a
host (such as `rustc` and `cargo`). This allows the target to be used as a
development platform, not just a compilation target.

A proposed new tier 1 target with host tools must be reviewed and approved by
the compiler team based on these requirements. In addition, the infra team
must approve the viability of supporting host tools for the target.
For a tier 1 target, this will typically take place via a full RFC proposing
the target, to be jointly reviewed and approved by the compiler team and
infra team.

In addition, the infrastructure team must approve the integration of the
target's host tools into Continuous Integration (CI), and the CI-related
requirements for host tools. This review and approval may take place in a PR
adding the target's host tools to CI, by an infrastructure team member
reporting the outcome of a team discussion, or by including the infrastructure
team in the RFC proposing the target.

- Tier 1 targets with host tools should typically include all of the additional
  tools such as `clippy` and `rustfmt`, unless there is a target-specific
  reason why a tool cannot possibly make sense for the target.
  - Unlike with tier 2, for tier 1 we will not exclude specific tools on the
    sole basis of them being less likely to be used; rather, we'll take that
    into account when considering whether the target should be at tier 1 with
    host tools. In general, on any tier 1 target with host tools, people
    should be able to expect to find and install all the same components that
    they would for any other tier 1 target with host tools.
- Approval of host tools will take into account the additional time required to
  build the host tools, and the substantial additional storage required for the
  host tools.
- Host tools for the target must have substantial, widespread interest within
  the developer community, and must serve the ongoing needs of multiple
  production users of Rust across multiple organizations or projects. These
  requirements are subjective, and determined by consensus of the approving
  teams. This requirement will be evaluated independently from the
  corresponding tier 1 requirement; it is possible for a target to have
  sufficient interest for cross-compilation, but not have sufficient interest
  for native compilation. The host tools may be dropped if they no longer meet
  this requirement, even if the target otherwise qualifies as tier 1.
- The host tools must build, run, and pass tests reliably in CI, for all
  components that Rust's CI considers mandatory.
  - The target must not disable an excessive number of tests or pieces of tests
    in the testsuite in order to do so. This is a subjective requirement.
- Building the host tools and running the testsuite for the host tools must not
  take substantially longer than other targets, and should not substantially raise
  the maintenance burden of the CI infrastructure.
  - In particular, if building the target's host tools takes a reasonable
    amount of time, but the target cannot run the testsuite in a timely fashion
    due to low performance of either native code or accurate emulation, that
    alone may prevent the target from qualifying as tier 1 with host tools.
- Providing host tools does not exempt a target from requirements to support
  cross-compilation if at all possible.
- All requirements for tier 2 targets with host tools apply.
- All requirements for tier 1 apply.

A target seeking promotion to tier 1 with host tools should typically either be
tier 2 with host tools or tier 1 without host tools, to reduce the number of
requirements to simultaneously review and approve.

In addition to the general process for demoting a tier 1 target, a tier 1
target with host tools may be demoted (including having its host tools dropped,
or being demoted to tier 2 with host tools) if it no longer meets these
requirements but still meets the requirements for a lower tier. Any proposal
for demotion of a tier 1 target (with or without host tools) requires a full
RFC process, with approval by the compiler and infra teams. Any such proposal
will be communicated widely to the Rust community, both when initially proposed
and before being dropped from a stable release.

[MCP]: https://forge.rust-lang.org/compiler/mcp.html

<a id=platform_support_TEMPLATE></a>

# `target-name-here`

**Tier: 3**

One-sentence description of the target (e.g. CPU, OS)

## Target maintainers

[@Ghost](https://github.com/Ghost)
[@octocat](https://github.com/octocat)

## Requirements

Does the target support host tools, or only cross-compilation? Does the target
support std, or alloc (either with a default allocator, or if the user supplies
an allocator)?

Document the expectations of binaries built for the target. Do they assume
specific minimum features beyond the baseline of the CPU/environment/etc? What
version of the OS or environment do they expect?

Are there notable `#[target_feature(...)]` or `-C target-feature=` values that
programs may wish to use?

What calling convention does `extern "C"` use on the target?

What format do binaries use by default? ELF, PE, something else?

## Building the target

If Rust doesn't build the target by default, how can users build it? Can users
just add it to the `target` list in `bootstrap.toml`?

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for this target. To compile for
this target, you will either need to build Rust with the target enabled (see
"Building the target" above), or build your own copy of `core` by using
`build-std` or similar.

## Testing

Does the target support running binaries, or do binaries have varying
expectations that prevent having a standard way to run them? If users can run
binaries, can they do so in some common emulator, or do they need native
hardware? Does the target support running the Rust testsuite?

## Cross-compilation toolchains and C code

Does the target support C code? If so, what toolchain target should users use
to build compatible C code? (This may match the target triple, or it may be a
toolchain for a different target triple, potentially with specific options or
caveats.)

<a id=platform_support_arm64ec_pc_windows_msvc></a>

# `arm64ec-pc-windows-msvc`

**Tier: 2**

Arm64EC ("Emulation Compatible") for mixed architecture (AArch64 and x86_64)
applications on AArch64 Windows 11. See <https://learn.microsoft.com/en-us/windows/arm/arm64ec>.

## Target maintainers

[@dpaoliello](https://github.com/dpaoliello)

## Requirements

Builds Arm64EC static and dynamic libraries and executables which can be run on
AArch64 Windows 11 devices. Arm64EC static libraries can also be linked into
Arm64X dynamic libraries and executables.

Only supported backend is LLVM 18 or above:
* 18.1.0 added initial support for Arm64EC.
* 18.1.2 fixed import library generation (required for `raw-dylib` support).
* 18.1.4 fixed linking issue for some intrinsics implemented in
  `compiler_builtins`.

Visual Studio 2022 (or above) with the "ARM64/ARM64EC built tools" component 
and the Windows 11 SDK are required.

### Reusing code from other architectures - x86_64 or AArch64?

Arm64EC uses `arm64ec` as its `target_arch`, but it is possible to reuse
existing architecture-specific code in most cases. The best mental model for
deciding which architecture to reuse is to is to think of Arm64EC as an x86_64
process that happens to use the AArch64 instruction set (with some caveats) and
has a completely custom ABI.

To put this in practice:
* Arm64EC interacts with the operating system, other processes and other DLLs as
  x86_64.
  - For example, [in `backtrace`](https://github.com/rust-lang/backtrace-rs/commit/ef39a7d7da58b4cae8c8f3fc67a8300fd8d2d0d9)
    we use the x86_64 versions of `CONTEXT` and `RtlVirtualUnwind`.
  - If you are configuring a search path to find DLLs (e.g., to load plugins or
    addons into your application), you should use the same path as the x86_64
    version of your application, not the AArch64 path (since Arm64EC (i.e.,
    x86_64) processes cannot load native AArch64 DLLs).
* Arm64EC uses AArch64 intrinsics.
  - For example, <https://github.com/rust-lang/portable-simd/commit/ca4033f49b1f6019561b8b161b4097b4a07f2e1b>
    and <https://github.com/rust-lang/stdarch/commit/166ef7ba22b6a1d908d4b29a36e68ceca324808a>.
* Assembly for AArch64 might be reusable for Arm64EC, but there are many
  caveats. For full details see [Microsoft's documentation on the Arm64EC ABI](https://learn.microsoft.com/en-us/windows/arm/arm64ec-abi)
  but in brief:
  - Arm64EC uses a subset of AArch64 registers.
  - Arm64EC uses a different name mangling scheme than AArch64.
  - Arm64EC requires entry and exit thunks be generated for some functions.
  - Indirect calls must be done via a call checker.
  - Control Flow Guard and stack checks use different functions than AArch64.

## Building the target

You can build Rust with support for the targets by adding it to the `target`
list in `bootstrap.toml`:

```toml
[build]
target = ["arm64ec-pc-windows-msvc"]
```

## Building Rust programs

These targets are distributed through `rustup`, and otherwise require no
special configuration.

## Testing

Tests can be run on AArch64 Windows 11 devices.

## Cross-compilation toolchains and C code

C code can be built using the Arm64-targeting MSVC or Clang toolchain.

To compile:

```bash
cl /arm64EC /c ...
```

To link:

```bash
link /MACHINE:ARM64EC ...
```

Further reading: <https://learn.microsoft.com/en-us/windows/arm/arm64ec-build>

<a id=platform_support_apple_darwin></a>

# `*-apple-darwin`

Apple macOS targets.

**Tier: 1**

- `aarch64-apple-darwin`: macOS on ARM64 (M1-family or later Apple Silicon CPUs).

**Tier: 2**

- `x86_64-apple-darwin`: macOS on 64-bit x86.

## Target maintainers

[@thomcc](https://github.com/thomcc)
[@madsmtm](https://github.com/madsmtm)

## Requirements

### OS version

The minimum supported version is macOS 10.12 Sierra on x86, and macOS 11.0 Big
Sur on ARM64.

This version can be raised per-binary by changing the [deployment target],
which might yield more performance optimizations. `rustc` respects the common
environment variables used by Xcode to do so, in this case
`MACOSX_DEPLOYMENT_TARGET`.

The current default deployment target for `rustc` can be retrieved with
[`rustc --print=deployment-target`][rustc-print].

[deployment target]: https://developer.apple.com/library/archive/documentation/DeveloperTools/Conceptual/cross_development/Configuring/configuring.html
[rustc-print]: #option-print

### Host tooling

The minimum supported OS versions for the host tooling (`rustc`, `cargo`,
etc.) are currently the same as for applications, namely 10.12 on x86 and 11.0
on ARM64.
The minimum supported Xcode version is 9.2.

Building from source likely requires that you can build LLVM from source too,
which [currently][llvm-os] requires Xcode 10.0 and macOS 10.13 (for LLVM 19).

[llvm-os]: https://releases.llvm.org/19.1.0/docs/GettingStarted.html#host-c-toolchain-both-compiler-and-standard-library

### Binary format

The default binary format is Mach-O, the executable format used on Apple's
platforms.

## Building

These targets are distributed through `rustup`, and otherwise require no
special configuration.

## Testing

There are no special requirements for testing and running this target.

x86 binaries can be run on Apple Silicon by using Rosetta.

## Cross-compilation toolchains and C code

Cross-compilation of these targets are supported using Clang, but may require
Xcode or the macOS SDK (`MacOSX.sdk`) to be available to compile C code and
to link.

The Clang target is suffixed with `-macosx`. Clang's `-darwin` target refers
to Darwin platforms in general (macOS/iOS/tvOS/watchOS/visionOS), and requires
the `-mmacosx-version-min=...`, `-miphoneos-version-min=...` or similar flags
to disambiguate.

The path to the SDK can be passed to `rustc` using the common `SDKROOT`
environment variable, or will be inferred when compiling on host macOS using
roughly the same logic as `xcrun --sdk macosx --show-sdk-path`.

<a id=platform_support_i686_apple_darwin></a>

# `i686-apple-darwin`

Apple macOS on 32-bit x86.

## Target maintainers

[@thomcc](https://github.com/thomcc)
[@madsmtm](https://github.com/madsmtm)

## Requirements

See the docs on [`*-apple-darwin`](#apple_darwin) for general macOS requirements.

## Building the target

You'll need the macOS 10.13 SDK shipped with Xcode 9. The location of the SDK
can be passed to `rustc` using the common `SDKROOT` environment variable.

Once you have that, you can build Rust with support for the target by adding
it to the `target` list in `bootstrap.toml`:

```toml
[build]
target = ["i686-apple-darwin"]
```

Using the unstable `-Zbuild-std` with a nightly Cargo may also work.

## Building Rust programs

Rust [no longer] ships pre-compiled artifacts for this target. To compile for
this target, you will either need to build Rust with the target enabled (see
"Building the target" above), or build your own copy using `build-std` or
similar.

[no longer]: https://blog.rust-lang.org/2020/01/03/reducing-support-for-32-bit-apple-targets.html

## Testing

Running this target requires an Intel Macbook running macOS 10.14 or earlier,
as later versions removed support for running 32-bit binaries.

<a id=platform_support_x86_64h_apple_darwin></a>

# `x86_64h-apple-darwin`

**Tier: 3**

Target for macOS on late-generation `x86_64` Apple chips, usable as the
`x86_64h` entry in universal binaries, and equivalent to LLVM's
`x86_64h-apple-macosx*` targets.

## Target maintainers

[@thomcc](https://github.com/thomcc)

## Requirements

This target is an `x86_64` target that only supports Apple's late-gen
(Haswell-compatible) Intel chips. It enables a set of target features available
on these chips (AVX2 and similar), and MachO binaries built with this target may
be used as the `x86_64h` entry in universal binaries ("fat" MachO binaries), and
will fail to load on machines that do not support this.

It should support the full standard library (`std` and `alloc` either with
default or user-defined allocators). This target is probably most useful when
targeted via cross-compilation (including from `x86_64-apple-darwin`), but if
built manually, the host tools work.

It is similar to [`x86_64-apple-darwin`](#apple_darwin) in nearly all
respects.

## Building the target

Users on Apple targets can build this by adding it to the `target` list in
`bootstrap.toml`, or with `-Zbuild-std`.

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for this target. To compile for
this target, you will either need to build Rust with the target enabled (see
"Building the target" above), or build your own copy of `core` by using
`build-std` or similar.

## Testing

Code built with this target can be run on the set of Intel macOS machines that
support running `x86_64h` binaries (relatively recent Intel macs). The Rust test
suite seems to work.

## Cross-compilation toolchains and C code

Cross-compilation to this target from Apple hosts should generally work without
much configuration, so long as XCode and the CommandLineTools are installed.
Targeting it from non-Apple hosts is difficult, but no more so than targeting
`x86_64-apple-darwin`.

When compiling C code for this target, either the "`x86_64h-apple-macosx*`" LLVM
targets should be used, or an argument like `-arch x86_64h` should be passed to
the C compiler.

<a id=platform_support_arm64e_apple_darwin></a>

# `arm64e-apple-darwin`

**Tier: 3 (with Host Tools)**

ARM64e macOS (11.0+, Big Sur+)

## Target maintainers

[@arttet](https://github.com/arttet)

## Requirements

Target for `macOS` on late-generation `M` series Apple chips.

See the docs on [`*-apple-darwin`](#apple_darwin) for general macOS requirements.

## Building the target

You can build Rust with support for the targets by adding it to the `target` list in `bootstrap.toml`:

```toml
[build]
target = ["arm64e-apple-darwin"]
```

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for this target.
To compile for this target, you will need to build Rust with the target enabled (see [Building the target](#building-the-target) above).

## Testing

The target does support running binaries on macOS platforms with `arm64e` architecture.

## Cross-compilation toolchains and C code

The targets do support `C` code.
To build compatible `C` code, you have to use XCode with the same compiler and flags.

<a id=platform_support_apple_ios></a>

# `*-apple-ios`

Apple iOS / iPadOS targets.

**Tier: 2 (without Host Tools)**

- `aarch64-apple-ios`: Apple iOS on ARM64.
- `aarch64-apple-ios-sim`: Apple iOS Simulator on ARM64.
- `x86_64-apple-ios`: Apple iOS Simulator on 64-bit x86.

**Tier: 3**

- `armv7s-apple-ios`: Apple iOS on Armv7-A.
- `i386-apple-ios`: Apple iOS Simulator on 32-bit x86.

## Target maintainers

[@badboy](https://github.com/badboy)
[@deg4uss3r](https://github.com/deg4uss3r)
[@madsmtm](https://github.com/madsmtm)

## Requirements

These targets are cross-compiled, and require the corresponding iOS SDK
(`iPhoneOS.sdk` or `iPhoneSimulator.sdk`), as provided by Xcode. To build the
ARM64 targets, Xcode 12 or higher is required.

The path to the SDK can be passed to `rustc` using the common `SDKROOT`
environment variable, or will be inferred when compiling on host macOS using
roughly the same logic as `xcrun --sdk iphoneos --show-sdk-path`.

### OS version

The minimum supported version is iOS 10.0.

This can be raised per-binary by changing the deployment target. `rustc`
respects the common environment variables used by Xcode to do so, in this
case `IPHONEOS_DEPLOYMENT_TARGET`.

## Building the target

The tier 2 targets are distributed through `rustup`, and can be installed
using one of:
```console
$ rustup target add aarch64-apple-ios
$ rustup target add aarch64-apple-ios-sim
$ rustup target add x86_64-apple-ios
```

The tier 3 targets can be built by enabling them for a `rustc` build in
`bootstrap.toml`, by adding, for example:

```toml
[build]
target = ["armv7s-apple-ios", "i386-apple-ios"]
```

Using the unstable `-Zbuild-std` with a nightly Cargo may also work.

## Building Rust programs

Rust programs can be built for these targets by specifying `--target`, if
`rustc` has been built with support for them. For example:

```console
$ rustc --target aarch64-apple-ios your-code.rs
```

The simulator variants can be differentiated from the variants running
on-device with the `target_env = "sim"` cfg (or `target_abi = "sim"` before
Rust CURRENT_RUSTC_VERSION).

```rust
if cfg!(all(target_vendor = "apple", target_env = "sim")) {
    // Do something on the iOS/tvOS/visionOS/watchOS Simulator.
} {
    // Everything else, like Windows and non-Simulator iOS.
}
```

This is similar to the `TARGET_OS_SIMULATOR` define in C code.

## Testing

There is no support for running the Rust or standard library testsuite at the
moment. Testing has mostly been done manually with builds of static libraries
embedded into applications called from Xcode or a simulator.

It hopefully will be possible to improve this in the future.

<a id=platform_support_apple_ios_macabi></a>

# `*-apple-ios-macabi`

Apple Mac Catalyst targets.

**Tier: 2 (without Host Tools)**

- `aarch64-apple-ios-macabi`: Mac Catalyst on ARM64.
- `x86_64-apple-ios-macabi`: Mac Catalyst on 64-bit x86.

## Target maintainers

[@badboy](https://github.com/badboy)
[@BlackHoleFox](https://github.com/BlackHoleFox)
[@madsmtm](https://github.com/madsmtm)

## Requirements

These targets are cross-compiled, and require the corresponding macOS SDK
(`MacOSX.sdk`) which contain `./System/iOSSupport` headers to allow linking to
iOS-specific headers, as provided by Xcode 11 or higher.

The path to the SDK can be passed to `rustc` using the common `SDKROOT`
environment variable, or will be inferred when compiling on host macOS using
roughly the same logic as `xcrun --sdk macosx --show-sdk-path`.

### OS version

The minimum supported version is iOS 13.1 on x86 and 14.0 on Aarch64.

This can be raised per-binary by changing the deployment target. `rustc`
respects the common environment variables used by Xcode to do so, in this
case `IPHONEOS_DEPLOYMENT_TARGET`.

## Building the target

The targets are distributed through `rustup`, and can be installed using one
of:
```console
$ rustup target add aarch64-apple-ios-macabi
$ rustup target add x86_64-apple-ios-macabi
```

### Sanitizers

Due to CMake having poor support for Mac Catalyst, sanitizer runtimes are not
currently available, see [#129069].

[#129069]: https://github.com/rust-lang/rust/issues/129069

## Building Rust programs

Rust programs can be built for these targets by specifying `--target`, if
`rustc` has been built with support for them. For example:

```console
$ rustc --target aarch64-apple-ios-macabi your-code.rs
```

The target can be differentiated from the iOS targets with the
`target_env = "macabi"` cfg (or `target_abi = "macabi"` before Rust CURRENT_RUSTC_VERSION).

```rust
if cfg!(target_env = "macabi") {
    // Do something only on Mac Catalyst.
}
```

This is similar to the `TARGET_OS_MACCATALYST` define in C code.

## Testing

Mac Catalyst binaries can be run directly on macOS 10.15 Catalina or newer.

x86 binaries can be run on Apple Silicon by using Rosetta.

Note that using certain UIKit functionality requires the binary to be bundled.

<a id=platform_support_arm64e_apple_ios></a>

# `arm64e-apple-ios`

**Tier: 3**

ARM64e iOS (14.0+)

## Target maintainers

[@arttet](https://github.com/arttet)

## Requirements

See the docs on [`*-apple-ios`](#apple_ios) for general iOS requirements.

## Building the target

You can build Rust with support for the targets by adding it to the `target` list in `bootstrap.toml`:

```toml
[build]
target = ["arm64e-apple-ios"]
```

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for this target.
To compile for this target, you will need to build Rust with the target enabled (see [Building the target](#building-the-target) above).

## Testing

The target does support running binaries on iOS platforms with `arm64e` architecture.

## Cross-compilation toolchains and C code

The targets do support `C` code.
To build compatible `C` code, you have to use XCode with the same compiler and flags.

<a id=platform_support_apple_tvos></a>

# `*-apple-tvos`

Apple tvOS targets.

**Tier: 3**

- `aarch64-apple-tvos`: Apple tvOS on ARM64.
- `aarch64-apple-tvos-sim`: Apple tvOS Simulator on ARM64.
- `x86_64-apple-tvos`: Apple tvOS Simulator on x86_64.

## Target maintainers

[@thomcc](https://github.com/thomcc)
[@madsmtm](https://github.com/madsmtm)

## Requirements

These targets are cross-compiled, and require the corresponding tvOS SDK
(`AppleTVOS.sdk` or `AppleTVSimulator.sdk`), as provided by Xcode. To build the
ARM64 targets, Xcode 12 or higher is required.

The path to the SDK can be passed to `rustc` using the common `SDKROOT`
environment variable, or will be inferred when compiling on host macOS using
roughly the same logic as `xcrun --sdk appletvos --show-sdk-path`.

### OS version

The minimum supported version is tvOS 10.0, although the actual minimum version
you can target may be newer than this, for example due to the versions of Xcode
and your SDKs.

The version can be raised per-binary by changing the deployment target. `rustc`
respects the common environment variables used by Xcode to do so, in this
case `TVOS_DEPLOYMENT_TARGET`.

### Incompletely supported library functionality

The targets support most of the standard library including the allocator to the
best of my knowledge, however they are very new, not yet well-tested, and it is
possible that there are various bugs.

The following APIs are currently known to have missing or incomplete support:

- `std::process::Command`'s API will return an error if it is configured in a
  manner which cannot be performed using `posix_spawn` -- this is because the
  more flexible `fork`/`exec`-based approach is prohibited on these platforms in
  favor of `posix_spawn{,p}` (which still probably will get you rejected from
  app stores, so is likely sideloading-only). A concrete set of cases where this
  will occur is difficult to enumerate (and would quickly become stale), but in
  some cases it may be worked around by tweaking the manner in which `Command`
  is invoked.

## Building the target

The targets can be built by enabling them for a `rustc` build in
`bootstrap.toml`, by adding, for example:

```toml
[build]
build-stage = 1
target = ["aarch64-apple-tvos", "aarch64-apple-tvos-sim"]
```

Using the unstable `-Zbuild-std` with a nightly Cargo may also work.

## Building Rust programs

Rust programs can be built for these targets by specifying `--target`, if
`rustc` has been built with support for them. For example:

```console
$ rustc --target aarch64-apple-tvos your-code.rs
```

## Testing

There is no support for running the Rust or standard library testsuite at the
moment. Testing has mostly been done manually with builds of static libraries
embedded into applications called from Xcode or a simulator.

It hopefully will be possible to improve this in the future.

<a id=platform_support_arm64e_apple_tvos></a>

# `arm64e-apple-tvos`

**Tier: 3**

ARM64e tvOS (10.0+)

## Target maintainers

[@arttet](https://github.com/arttet)

## Requirements

This target is cross-compiled and supports `std`.
To build this target Xcode 12 or higher on macOS is required.

## Building the target

You can build Rust with support for the targets by adding it to the `target` list in `bootstrap.toml`:

```toml
[build]
target = ["arm64e-apple-tvos"]
```

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for this target.
To compile for this target, you will need to build Rust with the target enabled (see [Building the target](#building-the-target) above).

## Testing

The target does support running binaries on tvOS platforms with `arm64e` architecture.

## Cross-compilation toolchains and C code

The targets do support `C` code.
To build compatible `C` code, you have to use XCode with the same compiler and flags.

<a id=platform_support_apple_watchos></a>

# `*-apple-watchos`

Apple watchOS targets.

**Tier: 3**

- `aarch64-apple-watchos`: Apple WatchOS on ARM64.
- `aarch64-apple-watchos-sim`: Apple WatchOS Simulator on ARM64.
- `x86_64-apple-watchos-sim`: Apple WatchOS Simulator on 64-bit x86.
- `arm64_32-apple-watchos`: Apple WatchOS on Arm 64_32.
- `armv7k-apple-watchos`: Apple WatchOS on Armv7k.

## Target maintainers

[@deg4uss3r](https://github.com/deg4uss3r)
[@vladimir-ea](https://github.com/vladimir-ea)
[@leohowell](https://github.com/leohowell)
[@madsmtm](https://github.com/madsmtm)

## Requirements

These targets are cross-compiled, and require the corresponding watchOS SDK
(`WatchOS.sdk` or `WatchSimulator.sdk`), as provided by Xcode. To build the
ARM64 targets, Xcode 12 or higher is required.

The path to the SDK can be passed to `rustc` using the common `SDKROOT`
environment variable, or will be inferred when compiling on host macOS using
roughly the same logic as `xcrun --sdk watchos --show-sdk-path`.

### OS version

The minimum supported version is watchOS 5.0.

This can be raised per-binary by changing the deployment target. `rustc`
respects the common environment variables used by Xcode to do so, in this
case `WATCHOS_DEPLOYMENT_TARGET`.

## Building the target

The targets can be built by enabling them for a `rustc` build in
`bootstrap.toml`, by adding, for example:

```toml
[build]
build-stage = 1
target = ["aarch64-apple-watchos", "aarch64-apple-watchos-sim"]
```

Using the unstable `-Zbuild-std` with a nightly Cargo may also work.

## Building Rust programs

Rust programs can be built for these targets by specifying `--target`, if
`rustc` has been built with support for them. For example:

```console
$ rustc --target aarch64-apple-watchos-sim your-code.rs
```

## Testing

There is no support for running the Rust or standard library testsuite at the
moment. Testing has mostly been done manually with builds of static libraries
embedded into applications called from Xcode or a simulator.

It hopefully will be possible to improve this in the future.

<a id=platform_support_apple_visionos></a>

# `*-apple-visionos`

Apple visionOS / xrOS targets.

**Tier: 3**

- `aarch64-apple-visionos`: Apple visionOS on arm64.
- `aarch64-apple-visionos-sim`: Apple visionOS Simulator on arm64.

## Target maintainers

[@agg23](https://github.com/agg23)
[@madsmtm](https://github.com/madsmtm)

## Requirements

These targets are cross-compiled, and require the corresponding visionOS SDK
(`XROS.sdk` or `XRSimulator.sdk`), as provided by Xcode 15 or newer.

The path to the SDK can be passed to `rustc` using the common `SDKROOT`
environment variable, or will be inferred when compiling on host macOS using
roughly the same logic as `xcrun --sdk xros --show-sdk-path`.

### OS version

The minimum supported version is visionOS 1.0.

This can be raised per-binary by changing the deployment target. `rustc`
respects the common environment variables used by Xcode to do so, in this
case `XROS_DEPLOYMENT_TARGET`.

## Building the target

The targets can be built by enabling them for a `rustc` build in
`bootstrap.toml`, by adding, for example:

```toml
[build]
target = ["aarch64-apple-visionos", "aarch64-apple-visionos-sim"]
```

Using the unstable `-Zbuild-std` with a nightly Cargo may also work.

Note: Currently, a newer version of `libc` and `cc` may be required, this will
be fixed in [#124560](https://github.com/rust-lang/rust/pull/124560).

## Building Rust programs

Rust programs can be built for these targets by specifying `--target`, if
`rustc` has been built with support for them. For example:

```console
$ rustc --target aarch64-apple-visionos-sim your-code.rs
```

## Testing

There is no support for running the Rust or standard library testsuite at the
moment. Testing has mostly been done manually with builds of static libraries
embedded into applications called from Xcode or a simulator.

It hopefully will be possible to improve this in the future.

## Cross-compilation toolchains and C code

The Clang target is suffixed with `-xros` for historical reasons.

LLVM 18 or newer is required to build this target.

<a id=platform_support_aarch64_nintendo_switch_freestanding></a>

# aarch64-nintendo-switch-freestanding

**Tier: 3**

Nintendo Switch with pure-Rust toolchain.

## Target Maintainers

[@leo60228](https://github.com/leo60228)
[@jam1garner](https://github.com/jam1garner)

## Requirements

This target is cross-compiled.
It has no special requirements for the host.

## Building

The target can be built by enabling it for a `rustc` build:

```toml
[build]
build-stage = 1
target = ["aarch64-nintendo-switch-freestanding"]
```

## Cross-compilation

This target can be cross-compiled from any host.

## Testing

Currently there is no support to run the rustc test suite for this target.

## Building Rust programs

If `rustc` has support for that target and the library artifacts are available,
then Rust programs can be built for that target:

```text
rustc --target aarch64-nintendo-switch-freestanding your-code.rs
```

To generate binaries in the NRO format that can be easily run on-device, you
can use [cargo-nx](https://github.com/aarch64-switch-rs/cargo-nx):

```text
cargo nx --triple=aarch64-nintendo-switch-freestanding
```

<a id=platform_support_aarch64_unknown_linux_musl></a>

# aarch64-unknown-linux-musl

**Tier: 2**

Target for 64-bit little endian ARMv8-A Linux programs using musl libc.

## Target maintainers

[@Gelbpunkt](https://github.com/Gelbpunkt)
[@famfo](https://github.com/famfo)

## Requirements

Building the target itself requires a 64-bit little endian ARMv8-A compiler
that is supported by `cc-rs`.

## Building the target

The target can be built by enabling it for a `rustc` build.

```toml
[build]
target = ["aarch64-unknown-linux-musl"]
```

Make sure your C compiler is included in `$PATH`, then add it to the
`bootstrap.toml`:

```toml
[target.aarch64-unknown-linux-musl]
cc = "aarch64-linux-musl-gcc"
cxx = "aarch64-linux-musl-g++"
ar = "aarch64-linux-musl-ar"
linker = "aarch64-linux-musl-gcc"
```

## Building Rust programs

This target is distributed through `rustup`, and otherwise requires no
special configuration.

## Cross-compilation

This target can be cross-compiled from any host.

## Testing

This target can be tested as normal with `x.py` on a 64-bit little endian
ARMv8-A host or via QEMU emulation.

<a id=platform_support_aarch64_be_unknown_none_softfloat></a>

# aarch64_be-unknown-none-softfloat

**Tier: 3**

Target for freestanding/bare-metal big-endian ARM64 binaries in ELF format:
firmware, kernels, etc.

## Target maintainers

[@Gelbpunkt](https://github.com/Gelbpunkt)

## Requirements

This target is cross-compiled. There is no support for `std`. There is no
default allocator, but it's possible to use `alloc` by supplying an allocator.

The target does not assume existence of a FPU and does not make use of any
non-GPR register. This allows the generated code to run in environments, such
as kernels, which may need to avoid the use of such registers or which may have
special considerations about the use of such registers (e.g. saving and
restoring them to avoid breaking userspace code using the same registers). You
can change code generation to use additional CPU features via the
`-C target-feature=` codegen options to rustc, or via the `#[target_feature]`
mechanism within Rust code.

By default, code generated with the soft-float target should run on any
big-endian ARM64 hardware, enabling additional target features may raise this
baseline.

`extern "C"` uses the [architecture's standard calling convention][aapcs64].

[aapcs64]: https://github.com/ARM-software/abi-aa/blob/main/aapcs64/aapcs64.rst

The targets generate binaries in the ELF format. Any alternate formats or
special considerations for binary layout will require linker options or linker
scripts.

## Building the target

You can build Rust with support for the target by adding it to the `target`
list in `bootstrap.toml`:

```toml
[build]
target = ["aarch64_be-unknown-none-softfloat"]
```

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for this target. To compile for
this target, you will first need to build Rust with the target enabled (see
"Building the target" above).

## Cross-compilation

For cross builds, you will need an appropriate ARM64 C/C++ toolchain for
linking, or if you want to compile C code along with Rust (such as for Rust
crates with C dependencies).

Rust *may* be able to use an `aarch64_be-unknown-linux-{gnu,musl}-` toolchain
with appropriate standalone flags to build for this target (depending on the
assumptions of that toolchain, see below), or you may wish to use a separate
`aarch64_be-unknown-none-softfloat` toolchain.

On some ARM64 hosts that use ELF binaries, you *may* be able to use the host C
toolchain, if it does not introduce assumptions about the host environment that
don't match the expectations of a standalone environment. Otherwise, you may
need a separate toolchain for standalone/freestanding development, just as when
cross-compiling from a non-ARM64 platform.

## Testing

As the target supports a variety of different environments and does not support
`std`, it does not support running the Rust test suite.

<a id=platform_support_aarch64_be_unknown_linux_musl></a>

# aarch64_be-unknown-linux-musl

**Tier: 3**

ARM64 Linux (big-endian) with musl-libc.

## Target maintainers

[@neuschaefer](https://github.com/neuschaefer)
[@Gelbpunkt](https://github.com/Gelbpunkt)

## Requirements

The target requires a `aarch64_be-*-linux-musl` toolchain, which likely has to
be built from source because this is a rare combination.  [Buildroot] provides
a way of doing so:

- select _Target options_ → _Target Architecture_ → _AArch64 (big endian)_
- select _Toolchain_ → _C library_ → _musl_
- select _Toolchain_ → _Enable C++ support_

Host tools are supported.

[Buildroot]: https://buildroot.org/


## Building the target

The target can be enabled in bootstrap.toml:

```toml
[build]
target = ["aarch64_be-unknown-linux-musl"]

[target.aarch64_be-unknown-linux-musl]
cc          = "/path/to/buildroot/host/bin/aarch64_be-buildroot-linux-musl-cc"
cxx         = "/path/to/buildroot/host/bin/aarch64_be-buildroot-linux-musl-c++"
linker      = "/path/to/buildroot/host/bin/aarch64_be-buildroot-linux-musl-cc"
ar          = "/path/to/buildroot/host/bin/aarch64_be-buildroot-linux-musl-ar"
ranlib      = "/path/to/buildroot/host/bin/aarch64_be-buildroot-linux-musl-ranlib"
musl-root   = "/path/to/buildroot/staging"
runner      = "qemu-aarch64_be -L /path/to/buildroot/target"
crt-static  = "/path/to/buildroot/target"
```


## Testing

Binaries can be run under `qemu-aarch64_be` or under a big-endian Linux kernel.

<a id=platform_support_amdgcn_amd_amdhsa></a>

# `amdgcn-amd-amdhsa`

**Tier: 3**

AMD GPU target for compute/HSA (Heterogeneous System Architecture).

## Target maintainers

[@Flakebi](https://github.com/Flakebi)

## Requirements

AMD GPUs can be targeted via cross-compilation.
Supported GPUs depend on the LLVM version that is used by Rust.
In general, most GPUs starting from gfx7 (Sea Islands/CI) are supported as compilation targets, though older GPUs are not supported by the latest host runtime.
Details about supported GPUs can be found in [LLVM’s documentation] and [ROCm documentation].

Binaries can be loaded by [HIP] or by the HSA runtime implemented in [ROCR-Runtime].
The format of binaries is a linked ELF.

Binaries must be built with no-std.
They can use `core` and `alloc` (`alloc` only if an allocator is supplied).
At least one function needs to use the `"gpu-kernel"` calling convention and should be marked with `no_mangle` for simplicity.
Functions using the `"gpu-kernel"` calling convention are kernel entrypoints and can be used from the host runtime.

## Building the target

The target is included in rustc.

## Building Rust programs

The amdgpu target supports many hardware generations, which need different binaries.
The generations are exposed as different target-cpus in the backend.
As there are many, Rust does not ship pre-compiled libraries for this target.
Therefore, you have to build your own copy of `core` by using `cargo -Zbuild-std=core` or similar.

To build a binary, create a no-std library:
```rust,ignore (platform-specific)
// src/lib.rs
#![feature(abi_gpu_kernel)]
#![no_std]

#[panic_handler]
fn panic(_: &core::panic::PanicInfo) -> ! {
    loop {}
}

#[no_mangle]
pub extern "gpu-kernel" fn kernel(/* Arguments */) {
    // Code
}
```

Build the library as `cdylib`:
```toml
# Cargo.toml
[lib]
crate-type = ["cdylib"]

[profile.dev]
lto = true # LTO must be explicitly enabled for now
[profile.release]
lto = true
```

The target-cpu must be from the list [supported by LLVM] (or printed with `rustc --target amdgcn-amd-amdhsa --print target-cpus`).
The GPU version on the current system can be found e.g. with [`rocminfo`].

Example `.cargo/config.toml` file to set the target and GPU generation:
```toml
# .cargo/config.toml
[build]
target = "amdgcn-amd-amdhsa"
rustflags = ["-Ctarget-cpu=gfx1100"]

[unstable]
build-std = ["core"] # Optional: "alloc"
```

## Running Rust programs

To run a binary on an AMD GPU, a host runtime is needed.
On Linux and Windows, [HIP] can be used to load and run binaries.
Example code on how to load a compiled binary and run it is available in [ROCm examples].

On Linux, binaries can also run through the HSA runtime as implemented in [ROCR-Runtime].

<!-- Mention an allocator once a suitable one exists for amdgpu -->

<!--
## Testing

Does the target support running binaries, or do binaries have varying
expectations that prevent having a standard way to run them? If users can run
binaries, can they do so in some common emulator, or do they need native
hardware? Does the target support running the Rust testsuite?

-->

## Additional information

More information can be found on the [LLVM page for amdgpu].

[LLVM’s documentation]: https://llvm.org/docs/AMDGPUUsage.html#processors
[ROCm documentation]: https://rocmdocs.amd.com
[HIP]: https://rocm.docs.amd.com/projects/HIP/
[ROCR-Runtime]: https://github.com/ROCm/ROCR-Runtime
[supported by LLVM]: https://llvm.org/docs/AMDGPUUsage.html#processors
[LLVM page for amdgpu]: https://llvm.org/docs/AMDGPUUsage.html
[`rocminfo`]: https://github.com/ROCm/rocminfo
[ROCm examples]: https://github.com/ROCm/rocm-examples/tree/ca8ef5b6f1390176616cd1c18fbc98785cbc73f6/HIP-Basic/module_api

<a id=platform_support_armeb_unknown_linux_gnueabi></a>

# armeb-unknown-linux-gnueabi
**Tier: 3**

Target for cross-compiling Linux user-mode applications targeting the Arm BE8 architecture.

## Overview
BE8 architecture retains the same little-endian ordered code-stream used by conventional little endian Arm systems, however the data accesses are in big-endian. BE8 is used primarily in high-performance networking applications where the ability to read packets in their native "Network Byte Order" is important (many network protocols transmit data in big-endian byte order for their wire formats).

## History
BE8 architecture is the default big-endian architecture for Arm since [Armv6](https://developer.arm.com/documentation/101754/0616/armlink-Reference/armlink-Command-line-Options/--be8?lang=en). It's predecessor, used for Armv4 and Armv5 devices was [BE32](https://developer.arm.com/documentation/dui0474/j/linker-command-line-options/--be32). On Armv6 architecture, endianness can be configured via [system registers](https://developer.arm.com/documentation/ddi0290/g/unaligned-and-mixed-endian-data-access-support/mixed-endian-access-support/interaction-between-the-bus-protocol-and-the-core-endianness). However, BE32 was withdrawn for [Armv7](https://developer.arm.com/documentation/ddi0406/cb/Appendixes/Deprecated-and-Obsolete-Features/Obsolete-features/Support-for-BE-32-endianness-model) onwards.

## Target Maintainers

[@WorksButNotTested](https://github.com/WorksButNotTested)

## Requirements
The target is cross-compiled. This target supports `std` in the normal way (indeed only nominal changes are required from the standard Arm configuration).

## Target definition
The target definition can be seen [here](https://github.com/rust-lang/rust/blob/master/compiler/rustc_target/src/spec/targets/armeb_unknown_linux_gnueabi.rs). In particular, it should be noted that the `features` specify that this target is built for the Armv8 core. Though this can likely be modified as required.

## Building the target
Because it is Tier 3, rust does not yet ship pre-compiled artifacts for this target.

Therefore, you can build Rust with support for the target by adding it to the target list in bootstrap.toml, a sample configuration is shown below. It is expected that the user already have a working GNU compiler toolchain and update the paths accordingly.

```toml
[llvm]
download-ci-llvm = false
optimize = true
ninja = true
targets = "ARM;X86"
clang = false

[build]
target = ["x86_64-unknown-linux-gnu", "armeb-unknown-linux-gnueabi"]
docs = false
docs-minification = false
compiler-docs = false
[install]
prefix = "/home/user/x-tools/rust/"

[rust]
debug-logging=true
backtrace = true
incremental = true

[target.x86_64-unknown-linux-gnu]

[dist]

[target.armeb-unknown-linux-gnueabi]
cc = "/home/user/x-tools/armeb-unknown-linux-gnueabi/bin/armeb-unknown-linux-gnueabi-gcc"
cxx = "/home/user/x-tools/armeb-unknown-linux-gnueabi/bin/armeb-unknown-linux-gnueabi-g++"
ar = "/home/user/x-tools/armeb-unknown-linux-gnueabi/bin/armeb-unknown-linux-gnueabi-ar"
ranlib = "/home/user/x-tools/armeb-unknown-linux-gnueabi/bin/armeb-unknown-linux-gnueabi-ranlib"
linker = "/home/user/x-tools/armeb-unknown-linux-gnueabi/bin/armeb-unknown-linux-gnueabi-gcc"
llvm-config = "/home/user/x-tools/clang/bin/llvm-config"
llvm-filecheck = "/home/user/x-tools/clang/bin/FileCheck"
```

## Building Rust programs

The following `.cargo/config` is needed inside any project directory to build for the BE8 target:

```toml
[build]
target = "armeb-unknown-linux-gnueabi"

[target.armeb-unknown-linux-gnueabi]
linker = "armeb-unknown-linux-gnueabi-gcc"
```

Note that it is expected that the user has a suitable linker from the GNU toolchain.

<a id=platform_support_arm_none_eabi></a>

# `{arm,thumb}*-none-eabi(hf)?`

## Common Target Details

This documentation covers details that apply to a range of bare-metal targets
for 32-bit Arm CPUs. The `arm-none-eabi` flavor of the GNU compiler toolchain is
often used to assist compilation to these targets.

Details that apply only to only a specific target in this group are covered in
their own document.

### Tier 2 Target List

- Arm A-Profile Architectures
  - `armv7a-none-eabi`
- Arm R-Profile Architectures
  - [`armv7r-none-eabi` and `armv7r-none-eabihf`](#armv7r_none_eabi)
  - [`armebv7r-none-eabi` and `armebv7r-none-eabihf`](#armv7r_none_eabi)
- Arm M-Profile Architectures
  - [`thumbv6m-none-eabi`](#thumbv6m_none_eabi)
  - [`thumbv7m-none-eabi`](#thumbv7m_none_eabi)
  - [`thumbv7em-none-eabi` and `thumbv7em-none-eabihf`](#thumbv7em_none_eabi)
  - [`thumbv8m.base-none-eabi`](#thumbv8m.base_none_eabi)
  - [`thumbv8m.main-none-eabi` and `thumbv8m.main-none-eabihf`](#thumbv8m.main_none_eabi)
- *Legacy* Arm Architectures
  - None

### Tier 3 Target List

- Arm A-Profile Architectures
  - `armv7a-none-eabihf`
- Arm R-Profile Architectures
  - [`armv8r-none-eabihf`](#armv8r_none_eabihf)
- Arm M-Profile Architectures
  - None
- *Legacy* Arm Architectures
  - [`armv4t-none-eabi` and `thumbv4t-none-eabi`](#armv4t_none_eabi)
  - [`armv5te-none-eabi` and `thumbv5te-none-eabi`](#armv5te_none_eabi)

## Instruction Sets

There are two 32-bit instruction set architectures (ISAs) defined by Arm:

- The [*A32 ISA*][a32-isa], with fixed-width 32-bit instructions. Previously
  known as the *Arm* ISA, this originated with the original ARM1 of 1985 and has
  been updated by various revisions to the architecture specifications ever
  since.
- The [*T32 ISA*][t32-isa], with a mix of 16-bit and 32-bit width instructions.
  Note that this term includes both the original 16-bit width *Thumb* ISA
  introduced with the Armv4T architecture in 1994, and the later 16/32-bit sized
  *Thumb-2* ISA introduced with the Armv6T2 architecture in 2003. Again, these
  ISAs have been revised by subsequent revisions to the relevant Arm
  architecture specifications.

There is also a 64-bit ISA with fixed-width 32-bit instructions called the *A64
ISA*, but targets which implement that instruction set generally start with
`aarch64*` and are discussed elsewhere.

Rust targets starting with `arm*` generate Arm (A32) code by default, whilst
targets named `thumb*` generate Thumb (T32) code by default. Most Arm chips
support both Thumb mode and Arm mode, with the notable exception that M-profile
processors (`thumbv*m*-none-eabi*` targets) *only* support Thumb-mode.

Rust targets ending with `eabi` use the so-called *soft-float ABI*: functions
which take `f32` or `f64` as arguments will have those values packed into
integer registers. This means that an FPU is not required from an ABI
perspective, but within a function floating-point instructions may still be used
if the code is compiled with a `target-cpu` or `target-feature` option that
enables FPU support.

Rust targets ending in `eabihf` use the so-called *hard-float ABI*: functions
which take `f32` or `f64` as arguments will have them passed via FPU registers.
These targets therefore require the availability of an FPU and will assume some
baseline level of floating-point support is available (which can vary depending
on the target). More advanced floating-point instructions may be generated if
the code is compiled with a `target-cpu` or `target-feature` option that enables
such additional FPU support. For example, if a given hard-float target has
baseline *single-precision* (`f32`) support in hardware, there may be
`target-cpu` or `target-feature` options that tell LLVM to assume your processor
in fact also has *double-precision* (`f64`) support.

You may of course use the `f32` and `f64` types in your code, regardless of the
ABI being used, or the level of support your processor has for performing such
operations in hardware. Any floating-point operations that LLVM assumes your
processor cannot support will be lowered to library calls (like `__aeabi_dadd`)
which perform the floating-point operation in software using integer
instructions.

[t32-isa]: https://developer.arm.com/Architectures/T32%20Instruction%20Set%20Architecture
[a32-isa]: https://developer.arm.com/Architectures/A32%20Instruction%20Set%20Architecture

## Target CPU and Target Feature options

It is possible to tell Rust (or LLVM) that you have a specific model of Arm
processor, using the [`-C target-cpu`][target-cpu] option. You can also control
whether Rust (or LLVM) will include instructions that target optional hardware
features, e.g. hardware floating-point, or Advanced SIMD operations, using [`-C
target-feature`][target-feature].

It is important to note that selecting a *target-cpu* will typically enable
*all* the optional features available from Arm on that model of CPU and your
particular implementation of that CPU may not have those features available. In
that case, you can use `-C target-feature=-option` to turn off the specific CPU
features you do not have available, leaving you with the optimized instruction
scheduling and support for the features you do have. More details are available
in the detailed target-specific documentation.

<div class="warning">

Many target-features are currently unstable and subject to change, and
if you use them you should disassemble the compiler output and manually inspect
it to ensure only appropriate instructions for your CPU have been generated.

</div>

If you wish to use the *target-cpu* and *target-feature* options, you can add
them to your `.cargo/config.toml` file alongside any other flags your project
uses (likely linker related ones):

```toml
rustflags = [
  # Usual Arm bare-metal linker setup
  "-Clink-arg=-Tlink.x",
  "-Clink-arg=--nmagic",
  # tell Rust we have a Cortex-M55
  "-Ctarget-cpu=cortex-m55",
  # tell Rust our Cortex-M55 doesn't have Floating-Point M-Profile Vector
  # Extensions (but it does have everything else a Cortex-M55 could have).
  "-Ctarget-feature=-mve.fp"
]

[build]
target = "thumbv8m.main-none-eabihf"
```

[target-cpu]: https://doc.rust-lang.org/rustc/codegen-options/index.html#target-cpu
[target-feature]: https://doc.rust-lang.org/rustc/codegen-options/index.html#target-feature

## Requirements

These targets are cross-compiled and use static linking.

By default, the `lld` linker included with Rust will be used; however, you may
want to use the GNU linker instead. This can be obtained for Windows/Mac/Linux
from the [Arm Developer Website][arm-gnu-toolchain], or possibly from your OS's
package manager. To use it, add the following to your `.cargo/config.toml`:

```toml
[target.<your-target>]
linker = "arm-none-eabi-ld"
```

The GNU linker can also be used by specifying `arm-none-eabi-gcc` as the
linker. This is needed when using GCC's link time optimization.

[arm-gnu-toolchain]: https://developer.arm.com/Tools%20and%20Software/GNU%20Toolchain

These targets don't provide a linker script, so you'll need to bring your own
according to the specific device you are using. Pass
`-Clink-arg=-Tyour_script.ld` as a rustc argument to make the linker use
`your_script.ld` during linking.

For the `arm*` targets, Thumb-mode code generation can be enabled by using `-C
target-feature=+thumb-mode`. Using the unstable
`#![feature(arm_target_feature)]`, the attribute `#[target_feature(enable =
"thumb-mode")]` can be applied to individual `unsafe` functions to cause those
functions to be compiled to Thumb-mode code.

## Building Rust Programs

For the Tier 3 targets in this family, rust does not ship pre-compiled
artifacts.

Just use the `build-std` nightly cargo feature to build the `core` library. You
can pass this as a command line argument to cargo, or your `.cargo/config.toml`
file might include the following lines:

```toml
[unstable]
build-std = ["core"]
```

Most of `core` should work as expected, with the following notes:

* Floating-point operations are emulated in software unless LLVM is told to
  enable FPU support (either by using an `eabihf` target, specifying a
  `target-cpu` with FPU support, or using a `target-feature` to support for a
  specific kind of FPU)
* Integer division is also emulated in software on some targets, depending on
  the target, `target-cpu` and `target-feature`s.
* Older Arm architectures (e.g. Armv4, Armv5TE and Armv6-M) are limited to basic
  [`load`][atomic-load] and [`store`][atomic-store] operations, and not more
  advanced operations like [`fetch_add`][fetch-add] or
  [`compare_exchange`][compare-exchange].

`alloc` is also supported, as long as you provide your own global allocator.

Rust programs are output as ELF files.

[atomic-load]: https://doc.rust-lang.org/stable/core/sync/atomic/struct.AtomicU32.html#method.load
[atomic-store]: https://doc.rust-lang.org/stable/core/sync/atomic/struct.AtomicU32.html#method.store
[fetch-add]: https://doc.rust-lang.org/stable/core/sync/atomic/struct.AtomicU32.html#method.fetch_add
[compare-exchange]: https://doc.rust-lang.org/stable/core/sync/atomic/struct.AtomicU32.html#method.compare_exchange

## Testing

This is a cross-compiled target that you will need to emulate during testing.

The exact emulator that you'll need depends on the specific device you want to
run your code on.

## Cross-compilation toolchains and C code

The target supports C code compiled with the `arm-none-eabi` target triple and
a suitable `-march` or `-mcpu` flag.

`gcc` or `clang` can be used, but note that `gcc` uses `-fshort-enums` by
default for `arm-none*` targets, while `clang` does not. `rustc` matches the
`gcc` behavior, i.e., the size of a `#[repr(C)] enum` in Rust can be as little
as 1 byte, rather than 4, as they are on `arm-linux` targets.

<a id=platform_support_armv4t_none_eabi></a>

# armv4t-none-eabi / thumbv4t-none-eabi

Tier 3

These two targets are part of the [`arm-none-eabi`](#arm_none_eabi) target
group, and all the information there applies.

Both of these targets can be used on the Game Boy Advance (GBA), among other
things. On the GBA, one should usually use the `thumb` target to get the best
overall performance.

## Target Maintainers

[@Lokathor](https://github.com/lokathor)
[@corwinkuiper](https://github.com/corwinkuiper)

## Testing

This is a cross-compiled target that you will need to emulate during testing.

Because this is a device-agnostic target, and the exact emulator that you'll
need depends on the specific device you want to run your code on.

* When building for the GBA, [mgba-test-runner](https://github.com/agbrs/agb)
  can be used to make a normal set of rust tests be run within the `mgba`
  emulator.

<a id=platform_support_armv5te_none_eabi></a>

# `armv5te-none-eabi`

**Tier: 3**

Bare-metal target for any cpu in the Armv5TE architecture family, supporting
ARM/Thumb code interworking (aka `A32`/`T32`), with `A32` code as the default code
generation.

The `thumbv5te-none-eabi` target is the same as this one, but the instruction set defaults to `T32`.

See [`arm-none-eabi`](#arm_none_eabi) for information applicable to all
`arm-none-eabi` targets.

## Target Maintainers

[@QuinnPainter](https://github.com/QuinnPainter)

## Testing

This is a cross-compiled target that you will need to emulate during testing.

Because this is a device-agnostic target, and the exact emulator that you'll
need depends on the specific device you want to run your code on.

For example, when programming for the DS, you can use one of the several
available DS emulators, such as [melonDS](https://melonds.kuribo64.net/).

<a id=platform_support_armv7r_none_eabi></a>

# `arm(eb)?v7r-none-eabi(hf)?`

**Tier: 2**

Bare-metal target for CPUs in the Armv7-R architecture family, supporting
dual ARM/Thumb mode, with ARM mode as the default.

Processors in this family include the [Arm Cortex-R4, 5, 7, and 8][cortex-r].

The `eb` versions of this target generate code for big-endian processors.

See [`arm-none-eabi`](#arm_none_eabi) for information applicable to all
`arm-none-eabi` targets.

[cortex-r]: https://en.wikipedia.org/wiki/ARM_Cortex-R

## Target maintainers

[@chrisnc](https://github.com/chrisnc)

## Requirements

When using the big-endian version of this target, note that some variants of
the Cortex-R have both big-endian instructions and data. This configuration is
known as BE-32, while data-only big-endianness is known as BE-8. To build
programs for BE-32 processors, the GNU linker must be used with the `-mbe32`
option. See [ARM Cortex-R Series Programmer's Guide: Endianness][endianness]
for more details about different endian modes.

When using the hardfloat targets, the minimum floating-point features assumed
are those of the `vfpv3-d16`, which includes single- and double-precision, with
16 double-precision registers. This floating-point unit appears in Cortex-R4F
and Cortex-R5F processors. See [VFP in the Cortex-R processors][vfp]
for more details on the possible FPU variants.

If your processor supports a different set of floating-point features than the
default expectations of `vfpv3-d16`, then these should also be enabled or
disabled as needed with `-C target-feature=(+/-)`.

[endianness]: https://developer.arm.com/documentation/den0042/a/Coding-for-Cortex-R-Processors/Endianness

[vfp]: https://developer.arm.com/documentation/den0042/a/Floating-Point/Floating-point-basics-and-the-IEEE-754-standard/VFP-in-the-Cortex-R-processors

## Cross-compilation toolchains and C code

This target supports C code compiled with the `arm-none-eabi` target triple and
`-march=armv7-r` or a suitable `-mcpu` flag.

<a id=platform_support_armv8r_none_eabihf></a>

# `armv8r-none-eabihf`

**Tier: 3**

Bare-metal target for CPUs in the Armv8-R architecture family, supporting
dual ARM/Thumb mode, with ARM mode as the default.

Processors in this family include the Arm [Cortex-R52][cortex-r52]
and [Cortex-R52+][cortex-r52-plus].

See [`arm-none-eabi`](#arm_none_eabi) for information applicable to all
`arm-none-eabi` targets.

[cortex-r52]: https://www.arm.com/products/silicon-ip-cpu/cortex-r/cortex-r52
[cortex-r52-plus]: https://www.arm.com/products/silicon-ip-cpu/cortex-r/cortex-r52-plus

## Target maintainers

[@chrisnc](https://github.com/chrisnc)

## Requirements

The Cortex-R52 family always includes a floating-point unit, so there is no
non-`hf` version of this target. The floating-point features assumed by this
target are those of the single-precision-only config of the Cortex-R52, which
has 16 double-precision registers, accessible as 32 single-precision registers.
The other variant of Cortex-R52 includes double-precision, 32 double-precision
registers, and Advanced SIMD (Neon).

The manual refers to this as the "Full Advanced SIMD config". To compile code
for this variant, use: `-C target-feature=+fp64,+d32,+neon`. See the [Advanced
SIMD and floating-point support][fpu] section of the Cortex-R52 Processor
Technical Reference Manual for more details.

[fpu]: https://developer.arm.com/documentation/100026/0104/Advanced-SIMD-and-floating-point-support/About-the-Advanced-SIMD-and-floating-point-support

## Cross-compilation toolchains and C code

This target supports C code compiled with the `arm-none-eabi` target triple and
`-march=armv8-r` or a suitable `-mcpu` flag.

<a id=platform_support_thumbv6m_none_eabi></a>

# `thumbv6m-none-eabi`

**Tier: 2**

Bare-metal target for CPUs in the [Armv6-M] architecture family, supporting a
subset of the [T32 ISA][t32-isa].

Processors in this family include the:

* [Arm Cortex-M0][cortex-m0]
* [Arm Cortex-M0+][cortex-m0plus]
* [Arm Cortex-M1][cortex-m1]

See [`arm-none-eabi`](#arm_none_eabi) for information applicable to all
`arm-none-eabi` targets.

This target uses the soft-float ABI: functions which take `f32` or `f64` as
arguments will have those values packed into integer registers. This is the
only option because there is no FPU support in [Armv6-M].

[t32-isa]: https://developer.arm.com/Architectures/T32%20Instruction%20Set%20Architecture
[Armv6-M]: https://developer.arm.com/documentation/ddi0419/latest/
[cortex-m0]: https://developer.arm.com/Processors/Cortex-M0
[cortex-m0plus]: https://developer.arm.com/Processors/Cortex-M0+
[cortex-m1]: https://developer.arm.com/Processors/Cortex-M1

## Target maintainers

* [Rust Embedded Devices Working Group Arm Team](https://github.com/rust-embedded/wg?tab=readme-ov-file#the-arm-team)

## Target CPU and Target Feature options

See [the bare-metal Arm
docs](#target-cpu-and-target-feature-options) for details on how
to use these flags.

### Table of supported CPUs

| CPU        | FPU | Target CPU      | Target Features       |
| ---------- | --- | --------------- | --------------------- |
| Cortex-M0  | No  | `cortex-m0`     | None                  |
| Cortex-M0+ | No  | `cortex-m0plus` | None                  |
| Cortex-M1  | No  | `cortex-m1`     | None                  |

### Arm Cortex-M0

The target CPU option is `cortex-m0`.

There are no relevant feature flags, and the FPU is not available.

### Arm Cortex-M0+

The target CPU option is `cortex-m0plus`.

There are no relevant feature flags, and the FPU is not available.

### Arm Cortex-M1

The target CPU option is `cortex-m1`.

There are no relevant feature flags, and the FPU is not available.

<a id=platform_support_thumbv7em_none_eabi></a>

# `thumbv7em-none-eabi` and `thumbv7em-none-eabihf`

**Tier: 2**

Bare-metal target for CPUs in the [Armv7E-M] architecture family, supporting a
subset of the [T32 ISA][t32-isa].

Processors in this family include the:

* [Arm Cortex-M4][cortex-m4] and Arm Cortex-M4F
* [Arm Cortex-M7][cortex-m7] and Arm Cortex-M7F

See [`arm-none-eabi`](#arm_none_eabi) for information applicable to all
`arm-none-eabi` targets, in particular the difference between the `eabi` and
`eabihf` ABI.

[t32-isa]: https://developer.arm.com/Architectures/T32%20Instruction%20Set%20Architecture
[Armv7E-M]: https://developer.arm.com/documentation/ddi0403/latest/
[cortex-m4]: https://developer.arm.com/Processors/Cortex-M4
[cortex-m7]: https://developer.arm.com/Processors/Cortex-M7

## Target maintainers

* [Rust Embedded Devices Working Group Arm Team](https://github.com/rust-embedded/wg?tab=readme-ov-file#the-arm-team)

## Target CPU and Target Feature options

See [the bare-metal Arm
docs](#target-cpu-and-target-feature-options) for details on how
to use these flags.

### Table of supported CPUs for `thumbv7em-none-eabi`

| CPU        | FPU | DSP | Target CPU  | Target Features |
| ---------- | --- | --- | ----------- | --------------- |
| Any        | No  | Yes | None        | None            |
| Cortex-M4  | No  | Yes | `cortex-m4` | `-fpregs`       |
| Cortex-M4F | SP  | Yes | `cortex-m4` | None            |
| Cortex-M7  | No  | Yes | `cortex-m7` | `-fpregs`       |
| Cortex-M7F | SP  | Yes | `cortex-m7` | `-fp64`         |
| Cortex-M7F | DP  | Yes | `cortex-m7` | None            |

### Table of supported CPUs for `thumbv7em-none-eabihf`

| CPU        | FPU | DSP | Target CPU  | Target Features |
| ---------- | --- | --- | ----------- | --------------- |
| Any        | SP  | Yes | None        | None            |
| Cortex-M4F | SP  | Yes | `cortex-m4` | None            |
| Cortex-M7F | SP  | Yes | `cortex-m7` | `-fp64`         |
| Cortex-M7F | DP  | Yes | `cortex-m7` | None            |

<div class="warning">

Never use the `-fpregs` *target-feature* with the `thumbv7em-none-eabihf` target
as it will cause compilation units to have different ABIs, which is unsound.

</div>

### Arm Cortex-M4 and Arm Cortex-M4F

The target CPU is `cortex-m4`.

* All Cortex-M4 have DSP extensions
  * support is controlled by the `dsp` *target-feature*
  * enabled by default with this *target*
* Cortex-M4F has a single precision FPU
  * support is enabled by default with this *target-cpu*
  * disable support using the `-fpregs` *target-feature* (`eabi` only)

### Arm Cortex-M7 and Arm Cortex-M7F

The target CPU is `cortex-m7`.

* All Cortex-M7 have DSP extensions
  * support is controlled by the `dsp` *target-feature*
  * enabled by default with this *target*
* Cortex-M7F have either a single-precision or double-precision FPU
  * double-precision support is enabled by default with this *target-cpu*
    * opt-out by using the `-f64` *target-feature*
  * disable support entirely using the `-fpregs` *target-feature* (`eabi` only)

<a id=platform_support_thumbv7m_none_eabi></a>

# `thumbv7m-none-eabi`

**Tier: 2**

Bare-metal target for CPUs in the [Armv7-M] architecture family, supporting a
subset of the [T32 ISA][t32-isa].

Processors in this family include the:

* [Arm Cortex-M3][cortex-m3]

See [`arm-none-eabi`](#arm_none_eabi) for information applicable to all
`arm-none-eabi` targets.

This target uses the soft-float ABI: functions which take `f32` or `f64` as
arguments will have those values packed into integer registers. This is the
only option because there is no FPU support in [Armv7-M].

[t32-isa]: https://developer.arm.com/Architectures/T32%20Instruction%20Set%20Architecture
[Armv7-M]: https://developer.arm.com/documentation/ddi0403/latest/
[cortex-m3]: https://developer.arm.com/Processors/Cortex-M3

## Target maintainers

* [Rust Embedded Devices Working Group Arm Team](https://github.com/rust-embedded/wg?tab=readme-ov-file#the-arm-team)

## Target CPU and Target Feature options

See [the bare-metal Arm
docs](#target-cpu-and-target-feature-options) for details on how
to use these flags.

### Table of supported CPUs

| CPU        | FPU | Target CPU  | Target Features       |
| ---------- | --- | ----------- | --------------------- |
| Cortex-M3  | No  | `cortex-m3` | None                  |

### Arm Cortex-M3

The target CPU option is `cortex-m3`.

There are no relevant feature flags, and the FPU is not available.

<a id=platform_support_thumbv8m.base_none_eabi></a>

# `thumbv8m.base-none-eabi`

**Tier: 2**

Bare-metal target for CPUs in the Baseline [Armv8-M] architecture family,
supporting a subset of the [T32 ISA][t32-isa].

Processors in this family include the:

* [Arm Cortex-M23][cortex-m23]

See [`arm-none-eabi`](#arm_none_eabi) for information applicable to all
`arm-none-eabi` targets.

This target uses the soft-float ABI: functions which take `f32` or `f64` as
arguments will have those values packed into integer registers. This is the
only option because there is no FPU support in [Armv8-M] Baseline.

[t32-isa]: https://developer.arm.com/Architectures/T32%20Instruction%20Set%20Architecture
[Armv8-M]: https://developer.arm.com/documentation/ddi0553/latest/
[cortex-m23]: https://developer.arm.com/Processors/Cortex-M23

## Target maintainers

* [Rust Embedded Devices Working Group Arm Team](https://github.com/rust-embedded/wg?tab=readme-ov-file#the-arm-team)

## Target CPU and Target Feature options

See [the bare-metal Arm
docs](#target-cpu-and-target-feature-options) for details on how
to use these flags.

### Table of supported CPUs

| CPU         | FPU | Target CPU   | Target Features       |
| ----------- | --- | ------------ | --------------------- |
| Cortex-M23  | No  | `cortex-m23` | None                  |

### Arm Cortex-M23

The target CPU option is `cortex-m23`.

There are no relevant feature flags, and the FPU is not available.

<a id=platform_support_thumbv8m.main_none_eabi></a>

# `thumbv8m.main-none-eabi` and `thumbv8m.main-none-eabihf`

**Tier: 2**

Bare-metal target for CPUs in the Mainline [Armv8-M] architecture family,
supporting a subset of the [T32 ISA][t32-isa].

Processors in this family include the:

* [Arm Cortex-M33][cortex-m33]
* [Arm Cortex-M35P][cortex-m35p]
* [Arm Cortex-M55][cortex-m55]
* [Arm Cortex-M85][cortex-m85]

See [`arm-none-eabi`](#arm_none_eabi) for information applicable to all
`arm-none-eabi` targets, in particular the difference between the `eabi` and
`eabihf` ABI.

[t32-isa]: https://developer.arm.com/Architectures/T32%20Instruction%20Set%20Architecture
[Armv8-M]: https://developer.arm.com/documentation/ddi0553/latest/
[cortex-m33]: https://developer.arm.com/Processors/Cortex-M33
[cortex-m35p]: https://developer.arm.com/Processors/Cortex-M35P
[cortex-m55]: https://developer.arm.com/Processors/Cortex-M55
[cortex-m85]: https://developer.arm.com/Processors/Cortex-M85

## Target maintainers

* [Rust Embedded Devices Working Group Arm Team](https://github.com/rust-embedded/wg?tab=readme-ov-file#the-arm-team)

## Target CPU and Target Feature options

See [the bare-metal Arm
docs](#target-cpu-and-target-feature-options) for details on how
to use these flags.

### Table of supported CPUs for `thumbv8m.main-none-eabi`

| CPU         | FPU | DSP | MVE       | Target CPU    | Target Features       |
| ----------- | --- | --- | --------- | ------------- | --------------------- |
| Unspecified | No  | No  | No        | None          | None                  |
| Cortex-M33  | No  | No  | No        | `cortex-m33`  | `-fpregs,-dsp`        |
| Cortex-M33  | No  | Yes | No        | `cortex-m33`  | `-fpregs`             |
| Cortex-M33  | SP  | No  | No        | `cortex-m33`  | `-dsp`                |
| Cortex-M33  | SP  | Yes | No        | `cortex-m33`  | None                  |
| Cortex-M35P | No  | No  | No        | `cortex-m35p` | `-fpregs,-dsp`        |
| Cortex-M35P | No  | Yes | No        | `cortex-m35p` | `-fpregs`             |
| Cortex-M35P | SP  | No  | No        | `cortex-m35p` | `-dsp`                |
| Cortex-M35P | SP  | Yes | No        | `cortex-m35p` | None                  |
| Cortex-M55  | No  | Yes | No        | `cortex-m55`  | `-fpregs,-mve`        |
| Cortex-M55  | DP  | Yes | No        | `cortex-m55`  | `-mve`                |
| Cortex-M55  | No  | Yes | Int       | `cortex-m55`  | `-fpregs,-mve.fp,+mve`|
| Cortex-M55  | DP  | Yes | Int       | `cortex-m55`  | `-mve.fp`             |
| Cortex-M55  | DP  | Yes | Int+Float | `cortex-m55`  | None                  |
| Cortex-M85  | No  | Yes | No        | `cortex-m85`  | `-fpregs,-mve`        |
| Cortex-M85  | DP  | Yes | No        | `cortex-m85`  | `-mve`                |
| Cortex-M85  | No  | Yes | Int       | `cortex-m85`  | `-fpregs,-mve.fp,+mve`|
| Cortex-M85  | DP  | Yes | Int       | `cortex-m85`  | `-mve.fp`             |
| Cortex-M85  | DP  | Yes | Int+Float | `cortex-m85`  | None                  |

### Table of supported CPUs for `thumbv8m.main-none-eabihf`

| CPU         | FPU | DSP | MVE       | Target CPU    | Target Features       |
| ----------- | --- | --- | --------- | ------------- | --------------------- |
| Unspecified | SP  | No  | No        | None          | None                  |
| Cortex-M33  | SP  | No  | No        | `cortex-m33`  | `-dsp`                |
| Cortex-M33  | SP  | Yes | No        | `cortex-m33`  | None                  |
| Cortex-M33P | SP  | No  | No        | `cortex-m35p` | `-dsp`                |
| Cortex-M33P | SP  | Yes | No        | `cortex-m35p` | None                  |
| Cortex-M55  | DP  | Yes | No        | `cortex-m55`  | `-mve`                |
| Cortex-M55  | DP  | Yes | Int       | `cortex-m55`  | `-mve.fp`             |
| Cortex-M55  | DP  | Yes | Int+Float | `cortex-m55`  | None                  |
| Cortex-M85  | DP  | Yes | No        | `cortex-m85`  | `-mve`                |
| Cortex-M85  | DP  | Yes | Int       | `cortex-m85`  | `-mve.fp`             |
| Cortex-M85  | DP  | Yes | Int+Float | `cortex-m85`  | None                  |

*Technically* you can use this hard-float ABI on a CPU which has no FPU but does
have Integer MVE, because MVE provides the same set of registers as the FPU
(including `s0` and `d0`). The particular set of flags that might enable this
unusual scenario are currently not recorded here.

<div class="warning">

Never use the `-fpregs` *target-feature* with the `thumbv8m.main-none-eabihf`
target as it will cause compilation units to have different ABIs, which is
unsound.

</div>

### Arm Cortex-M33

The target CPU is `cortex-m33`.

* Has optional DSP extensions
  * support is controlled by the `dsp` *target-feature*
  * enabled by default with this *target-cpu*
* Has an optional single precision FPU
  * support is enabled by default with this *target-cpu*
  * disable support using the `-fpregs` *target-feature* (`eabi` only)

### Arm Cortex-M35P

The target CPU is `cortex-m35p`.

* Has optional DSP extensions
  * support is controlled by the `dsp` *target-feature*
  * enabled by default with this *target-cpu*
* Has an optional single precision FPU
  * support is enabled by default with this *target-cpu*
  * disable support using the `-fpregs` *target-feature* (`eabi` only)

### Arm Cortex-M55

The target CPU is `cortex-m55`.

* Has DSP extensions
  * support is controlled by the `dsp` *target-feature*
  * enabled by default with this *target-cpu*
* Has an optional double-precision FPU that also supports half-precision FP16
  values
  * support is enabled by default with this *target-cpu*
  * disable support using the `-fpregs` *target-feature* (`eabi` only)
* Has optional support for M-Profile Vector Extensions
  * Also known as *Helium Technology*
  * Available with only integer support, or both integer/float support
  * The appropriate feature for the MVE is either `mve` (integer) or `mve.fp`
    (float)
  * `mve.fp` is enabled by default on this target CPU
  * disable using `-mve.fp` (disable float MVE) or `-mve` (disable all MVE)

### Arm Cortex-M85

The target CPU is `cortex-m85`.

* Has DSP extensions
  * support is controlled by the `dsp` *target-feature*
  * enabled by default with this *target-cpu*
* Has an optional double-precision FPU that also supports half-precision FP16
  values
  * support is enabled by default with this *target-cpu*
  * disable support using the `-fpregs` *target-feature* (`eabi` only)
* Has optional support for M-Profile Vector Extensions
  * Also known as *Helium Technology*
  * Available with only integer support, or both integer/float support
  * The appropriate feature for the MVE is either `mve` (integer) or `mve.fp`
    (float)
  * `mve.fp` is enabled by default on this target CPU
  * disable using `-mve.fp` (disable float MVE) or `-mve` (disable all MVE)

<a id=platform_support_armv5te_unknown_linux_gnueabi></a>

# `armv5te-unknown-linux-gnueabi`

**Tier: 2**

This target supports Linux programs with glibc on ARMv5TE CPUs without
floating-point units.

## Target maintainers

There are currently no formally documented target maintainers.

## Requirements

The target is for cross-compilation only. Host tools are not supported.
std is fully supported.

## Building the target

Because this target is tier 2, artifacts are available from rustup.

## Building Rust programs

For building rust programs, you might want to specify GCC as linker in
`.cargo/config.toml` as follows:

```toml
[target.armv5te-unknown-linux-gnueabi]
linker = "arm-linux-gnueabi-gcc"
```

<a id=platform_support_armv6k_nintendo_3ds></a>

# `armv6k-nintendo-3ds`

**Tier: 3**

The Nintendo 3DS platform, which has an Armv6k processor, and its associated
operating system (`horizon`).

Rust support for this target is not affiliated with Nintendo, and is not derived
from nor used with any official Nintendo SDK.

## Target maintainers

This target is maintained by members of the [@rust3ds](https://github.com/rust3ds)
organization:

[@Meziu](https://github.com/Meziu)
[@AzureMarker](https://github.com/AzureMarker)
[@ian-h-chamberlain](https://github.com/ian-h-chamberlain)

## Requirements

This target is cross-compiled. Dynamic linking is not supported.

`#![no_std]` crates can be built using `build-std` to build `core` and optionally
`alloc`, and either `panic_abort` or `panic_unwind`.

`std` is partially supported, but mostly works. Some APIs are unimplemented
and will simply return an error, such as `std::process`. An allocator is provided
by default.

In order to support some APIs, binaries must be linked against `libc` written
for the target, using a linker for the target. These are provided by the
devkitARM toolchain. See
[Cross-compilation toolchains and C code](#cross-compilation-toolchains-and-c-code)
for more details.

Additionally, some helper crates provide implementations of some `libc` functions
use by `std` that may otherwise be missing. These, or an alternate implementation
of the relevant functions, are required to use `std`:

- [`pthread-3ds`](https://github.com/rust3ds/pthread-3ds) provides pthread APIs for `std::thread`.
- [`shim-3ds`](https://github.com/rust3ds/shim-3ds) fulfills some other missing libc APIs (e.g. `getrandom`).

Binaries built for this target should be compatible with all variants of the
3DS (and 2DS) hardware and firmware, but testing is limited and some versions may
not work correctly.

This target generates binaries in the ELF format.

## Building the target

You can build Rust with support for the target by adding it to the `target`
list in `bootstrap.toml` and providing paths to the devkitARM toolchain.

```toml
[build]
build-stage = 1
target = ["armv6k-nintendo-3ds"]

[target.armv6k-nintendo-3ds]
cc = "/opt/devkitpro/devkitARM/bin/arm-none-eabi-gcc"
cxx = "/opt/devkitpro/devkitARM/bin/arm-none-eabi-g++"
ar = "/opt/devkitpro/devkitARM/bin/arm-none-eabi-ar"
ranlib = "/opt/devkitpro/devkitARM/bin/arm-none-eabi-ranlib"
linker = "/opt/devkitpro/devkitARM/bin/arm-none-eabi-gcc"
```

Also, to build `compiler_builtins` for the target, export these flags before
building the Rust toolchain:

```sh
export CFLAGS_armv6k_nintendo_3ds="-mfloat-abi=hard -mtune=mpcore -mtp=soft -march=armv6k"
```

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for this target.

The recommended way to build binaries is by using the
[cargo-3ds](https://github.com/rust3ds/cargo-3ds) tool, which uses `build-std`
and provides commands that work like the usual `cargo run`, `cargo build`, etc.
The `cargo 3ds new` will automatically set up a new project with the dependencies
needed to build a simple binary.

You can also build Rust with the target enabled (see
[Building the target](#building-the-target) above).

As mentioned in [Requirements](#requirements), programs that use `std` must link
against both the devkitARM toolchain and libraries providing the `libc` APIs used
in `std`.  There is a general-purpose utility crate for working with nonstandard
APIs provided by the OS: [`ctru-rs`](https://github.com/rust3ds/ctru-rs).
Add it to Cargo.toml to use it in your program:

```toml
[dependencies]
ctru-rs = { git = "https://github.com/rust3ds/ctru-rs.git" }
```

Depending on `ctru-rs` ensures that all the necessary symbols are available at
link time.

## Testing

Binaries built for this target can be run in an emulator (most commonly
[Citra](https://citra-emu.org/)), or sent to a device through
the use of a tool like devkitARM's `3dslink`. They may also simply be copied
to an SD card to be inserted in the device.

The `cargo-3ds` tool mentioned in [Building Rust programs](#building-rust-programs)
supports the use of `3dslink` with `cargo 3ds run`. The default Rust test runner
is not supported, but
[custom test frameworks](https://doc.rust-lang.org/unstable-book/language-features/custom-test-frameworks.html)
can be used with `cargo 3ds test` to run unit tests on a device.

The Rust test suite for `library/std` is not yet supported.

## Cross-compilation toolchains and C code

C code can be built for this target using the
[devkitARM toolchain](https://devkitpro.org/wiki/Getting_Started).
This toolchain provides `arm-none-eabi-gcc` as the linker used to link Rust
programs as well.

The toolchain also provides a `libc` implementation, which is required by `std`
for many of its APIs, and a helper library `libctru` which is used by several
of the helper crates listed in [Requirements](#requirements).
This toolchain does not, however, include all of the APIs expected by `std`,
and the remaining APIs are implemented by `pthread-3ds` and `linker-fix-3ds`.

<a id=platform_support_armv7_rtems_eabihf></a>

# `armv7-rtems-eabihf`

**Tier: 3**

ARM targets for the [RTEMS realtime operating system](https://www.rtems.org)  using the RTEMS gcc cross-compiler for linking against the libraries of a specified Board Support Package (BSP).

## Target maintainers

[@thesummer](https://github.com/thesummer)

## Requirements

The target does not support host tools. Only cross-compilation is possible.
The cross-compiler toolchain can be obtained by following the installation instructions
of the [RTEMS Documentation](https://docs.rtems.org/docs/main/user/index.html). Additionally to the cross-compiler also a compiled BSP
for a board fitting the architecture needs to be available on the host.
Currently tested has been the BSP `xilinx_zynq_a9_qemu` of RTEMS 6.

`std` support is available, but not yet fully tested. Do NOT use in flight software!

The target follows the EABI calling convention for `extern "C"`.

The resulting binaries are in ELF format.

## Building the target

The target can be built by the standard compiler of Rust.

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for this target. To compile for
this target, you will either need to build Rust with the target enabled (see
"Building the target" above), or build your own copy of `core` by using
`build-std` or similar.

In order to build an RTEMS executable it is also necessary to have a basic RTEMS configuration (in C) compiled to link against as this configures the operating system.
An example can be found at this [`rtems-sys`](https://github.com/thesummer/rtems-sys) crate which could be added as an dependency to your application.

## Testing

The resulting binaries run fine on an emulated target (possibly also on a real Zedboard or similar).
For example, on qemu the following command can execute the binary:
```sh
qemu-system-arm -no-reboot -serial null -serial mon:stdio -net none -nographic -M xilinx-zynq-a9 -m 512M -kernel <binary file>
```

While basic execution of the unit test harness seems to work. However, running the Rust testsuite on the (emulated) hardware has not yet been tested.

## Cross-compilation toolchains and C code

Compatible C-code can be built with the RTEMS cross-compiler toolchain `arm-rtems6-gcc`.
For more information how to build the toolchain, RTEMS itself and RTEMS applications please have a look at the [RTEMS Documentation](https://docs.rtems.org/docs/main/user/index.html).

<a id=platform_support_armv7_sony_vita_newlibeabihf></a>

# armv7-sony-vita-newlibeabihf

**Tier: 3**

This tier supports the ARM Cortex A9 processor running on a PlayStation Vita console.

Rust support for this target is not affiliated with Sony, and is not derived
from nor used with any official Sony SDK.

## Target maintainers

[@nikarh](https://github.com/nikarh)
[@pheki](https://github.com/pheki)
[@zetanumbers](https://github.com/zetanumbers)

## Requirements

This target is cross-compiled, and requires installing [VITASDK](https://vitasdk.org/) toolchain on your system. Dynamic linking is not supported.

`#![no_std]` crates can be built using `build-std` to build `core`, and optionally
`alloc`, and `panic_abort`.

`std` is partially supported, but mostly works. Some APIs are unimplemented
and will simply return an error, such as `std::process`.

This target generates binaries in the ELF format with thumb ISA by default.

Binaries are linked with `arm-vita-eabi-gcc` provided by VITASDK toolchain.


## Building the target

Rust does not ship pre-compiled artifacts for this target. You can use `build-std` flag to build ELF binaries with `std`:

```sh
cargo build -Z build-std=std,panic_abort --target=armv7-sony-vita-newlibeabihf --release
```

## Building Rust programs

The recommended way to build artifacts that can be installed and run on PlayStation Vita is by using the [cargo-vita](https://github.com/vita-rust/cargo-vita) tool. This tool uses `build-std` and VITASDK toolchain to build artifacts runnable on Vita.

To install the tool run:

```sh
cargo install cargo-vita
```

[VITASDK](https://vitasdk.org/) toolchain must be installed, and the `VITASDK` environment variable must be set to its location, e.g.:

```sh
export VITASDK=/opt/vitasdk
```

Add the following section to your project's `Cargo.toml`:


```toml
[package.metadata.vita]
# A unique 9 character alphanumeric identifier of the app.
title_id = "RUSTAPP01"
# A title that will be used for the app. Optional, name will be used if not defined
title_name = "My application"
```

To build a VPK with ELF in the release profile, run:

```sh
cargo vita build vpk --release
```

After building a *.vpk file it can be uploaded to a PlayStation Vita and installed, or used with a [Vita3K](https://vita3k.org/) emulator.

## Testing

The default Rust test runner is supported, and tests can be compiled to an elf and packed to a *.vpk file using `cargo-vita` tool. Filtering tests is not currently supported since passing command-line arguments to the executable is not supported on Vita, so the runner will always execute all tests.

The Rust test suite for `library/std` is not yet supported.

## Cross-compilation

This target can be cross-compiled from `x86_64` on Windows, MacOS or Linux systems. Other hosts are not supported for cross-compilation.

<a id=platform_support_armv7_unknown_linux_uclibceabi></a>

# `armv7-unknown-linux-uclibceabi`

**Tier: 3**

This target supports Armv7-A softfloat CPUs and uses the uclibc-ng standard library. This is a common configuration on many consumer routers (e.g., Netgear R7000, Asus RT-AC68U).

## Target maintainers

[@lancethepants](https://github.com/lancethepants)

## Requirements

This target is cross compiled, and requires a cross toolchain.

This target supports host tools and std.

## Building the target

You will need to download or build a `'C'` cross toolchain that targets Armv7-A softfloat and that uses the uclibc-ng standard library. If your target hardware is something like a router or an embedded device, keep in mind that manufacturer supplied SDKs for this class of CPU could be outdated and potentially unsuitable for bootstrapping rust.

[Here](https://github.com/lancethepants/tomatoware-toolchain) is a sample toolchain that is built using [buildroot](https://buildroot.org/). It uses modern toolchain components, older thus universal kernel headers (2.6.36.4), and is used for a project called [Tomatoware](https://github.com/lancethepants/tomatoware). This toolchain is patched so that its sysroot is located at /mmc (e.g., /mmc/bin, /mmc/lib, /mmc/include). This is useful in scenarios where the root filesystem is read-only but you are able attach external storage loaded with user applications. Tomatoware is an example of this that even allows you to run various compilers and developer tools natively on the target device.

Utilizing the Tomatoware toolchain this target can be built for cross compilation and native compilation (host tools) with project

[rust-bootstrap-armv7-unknown-linux-uclibceabi](https://github.com/lancethepants/rust-bootstrap-armv7-unknown-linux-uclibceabi).


Here is a sample config if using your own toolchain.

```toml
[build]
build-stage = 2
target = ["armv7-unknown-linux-uclibceabi"]

[target.armv7-unknown-linux-uclibceabi]
cc = "/path/to/arm-unknown-linux-uclibcgnueabi-gcc"
cxx = "/path/to/arm-unknown-linux-uclibcgnueabi-g++"
ar = "path/to/arm-unknown-linux-uclibcgnueabi-ar"
ranlib = "path/to/arm-unknown-linux-uclibcgnueabi-ranlib"
linker = "/path/to/arm-unknown-linux-uclibcgnueabi-gcc"
```

## Building Rust programs

The following assumes you are using the Tomatoware toolchain and environment. Adapt if you are using your own toolchain.

### Native compilation

Since this target supports host tools, you can natively build rust applications directly on your target device. This can be convenient because it removes the complexities of cross compiling and you can immediately test and deploy your binaries. One downside is that compiling on your Armv7-A CPU will probably be much slower than cross compilation on your x86 machine.

To setup native compilation:

* Download Tomatoware to your device using the latest nightly release found [here](https://files.lancethepants.com/Tomatoware/Nightly/).
* Extract `tar zxvf arm-soft-mmc.tgz -C /mmc`
* Add `/mmc/bin:/mmc:sbin/` to your PATH, or `source /mmc/etc/profile`
* `apt update && apt install rust`

If you bootstrap rust on your own using the project above, it will create a .deb file that you then can install with
```text
dpkg -i rust_1.xx.x-x_arm.deb
```

After completing these steps you can use rust normally in a native environment.

### Cross Compilation

To cross compile, you'll need to:

* Build the rust cross toolchain using  [rust-bootstrap-armv7-unknown-linux-uclibceabi](https://github.com/lancethepants/rust-bootstrap-armv7-unknown-linux-uclibceabi) or your own built toolchain.
* Link your built toolchain with

    ```text
    rustup toolchain link stage2 \
    ${HOME}/rust-bootstrap-armv7-unknown-linux-uclibceabi/src/rust/rust/build/x86_64-unknown-linux-gnu/stage2
    ```
* Build with:
    ```text
    CC_armv7_unknown_linux_uclibceabi=/opt/tomatoware/arm-soft-mmc/bin/arm-linux-gcc \
    CXX_armv7_unknown_linux_uclibceabi=/opt/tomatoware/arm-soft-mmc/bin/arm-linux-g++ \
    AR_armv7_unknown_linux_uclibceabi=/opt/tomatoware/arm-soft-mmc/bin/arm-linux-ar \
    CFLAGS_armv7_unknown_linux_uclibceabi="-march=armv7-a -mtune=cortex-a9" \
    CXXFLAGS_armv7_unknown_linux_uclibceabi="-march=armv7-a -mtune=cortex-a9" \
    CARGO_TARGET_ARMV7_UNKNOWN_LINUX_UCLIBCEABI_LINKER=/opt/tomatoware/arm-soft-mmc/bin/arm-linux-gcc \
    CARGO_TARGET_ARMV7_UNKNOWN_LINUX_UCLIBCEABI_RUSTFLAGS='-Clink-arg=-s -Clink-arg=-Wl,--dynamic-linker=/mmc/lib/ld-uClibc.so.1 -Clink-arg=-Wl,-rpath,/mmc/lib' \
    cargo +stage2 \
    build \
    --target armv7-unknown-linux-uclibceabi \
    --release
    ```
* Copy the binary to your target device and run.

We specify `CC`, `CXX`, `AR`, `CFLAGS`, and `CXXFLAGS` environment variables because sometimes a project or a subproject requires the use of your `'C'` cross toolchain. Since Tomatoware has a modified sysroot we also pass via RUSTFLAGS the location of the dynamic-linker and rpath.

### Test with QEMU

To test a cross-compiled binary on your build system follow the instructions for `Cross Compilation`, install `qemu-arm-static`, and run with the following.
```text
CC_armv7_unknown_linux_uclibceabi=/opt/tomatoware/arm-soft-mmc/bin/arm-linux-gcc \
CXX_armv7_unknown_linux_uclibceabi=/opt/tomatoware/arm-soft-mmc/bin/arm-linux-g++ \
AR_armv7_unknown_linux_uclibceabi=/opt/tomatoware/arm-soft-mmc/bin/arm-linux-ar \
CFLAGS_armv7_unknown_linux_uclibceabi="-march=armv7-a -mtune=cortex-a9" \
CXXFLAGS_armv7_unknown_linux_uclibceabi="-march=armv7-a -mtune=cortex-a9" \
CARGO_TARGET_ARMV7_UNKNOWN_LINUX_UCLIBCEABI_LINKER=/opt/tomatoware/arm-soft-mmc/bin/arm-linux-gcc \
CARGO_TARGET_ARMV7_UNKNOWN_LINUX_UCLIBCEABI_RUNNER="qemu-arm-static -L /opt/tomatoware/arm-soft-mmc/arm-tomatoware-linux-uclibcgnueabi/sysroot/" \
cargo +stage2 \
run \
--target armv7-unknown-linux-uclibceabi \
--release
```
### Run in a chroot

It's also possible to build in a chroot environment. This is a convenient way to work without needing to access the target hardware.

To build the chroot:

* `sudo debootstrap --arch armel bullseye $HOME/debian`
* `sudo chroot $HOME/debian/ /bin/bash`
* `mount proc /proc -t proc`
* `mount -t sysfs /sys sys/`
* `export PATH=/mmc/bin:/mmc/sbin:$PATH`

From here you can setup your environment (e.g., add user, install wget).

* Download Tomatoware to the chroot environment using the latest nightly release found [here](https://files.lancethepants.com/Tomatoware/Nightly/).
* Extract `tar zxvf arm-soft-mmc.tgz -C /mmc`
* Add `/mmc/bin:/mmc:sbin/` to your PATH, or `source /mmc/etc/profile`
* `sudo /mmc/bin/apt update && sudo /mmc/bin/apt install rust`

After completing these steps you can use rust normally in a chroot environment.

Remember when using `sudo` the root user's PATH could differ from your user's PATH.

<a id=platform_support_armv7_unknown_linux_uclibceabihf></a>

# armv7-unknown-linux-uclibceabihf

**Tier: 3**

This tier supports the Armv7-A processor running a Linux kernel and uClibc-ng standard library.  It provides full support for rust and the rust standard library.

## Target Maintainers

[@skrap](https://github.com/skrap)

## Requirements

This target is cross compiled, and requires a cross toolchain.  You can find suitable pre-built toolchains at [bootlin](https://toolchains.bootlin.com/) or build one yourself via [buildroot](https://buildroot.org).

## Building

### Get a C toolchain

Compiling rust for this target has been tested on `x86_64` linux hosts.  Other host types have not been tested, but may work, if you can find a suitable cross compilation toolchain for them.

If you don't already have a suitable toolchain, download one [here](https://toolchains.bootlin.com/downloads/releases/toolchains/armv7-eabihf/tarballs/armv7-eabihf--uclibc--bleeding-edge-2021.11-1.tar.bz2), and unpack it into a directory.

### Configure rust

The target can be built by enabling it for a `rustc` build, by placing the following in `bootstrap.toml`:

```toml
[build]
target = ["armv7-unknown-linux-uclibceabihf"]
stage = 2

[target.armv7-unknown-linux-uclibceabihf]
# ADJUST THIS PATH TO POINT AT YOUR TOOLCHAIN
cc = "/TOOLCHAIN_PATH/bin/arm-buildroot-linux-uclibcgnueabihf-gcc"
```

### Build

```sh
# in rust dir
./x.py build --stage 2
```

## Building and Running Rust Programs

To test cross-compiled binaries on a `x86_64` system, you can use the `qemu-arm` [userspace emulation](https://qemu-project.gitlab.io/qemu/user/main.html) program.  This avoids having a full emulated ARM system by doing dynamic binary translation and dynamic system call translation.  It lets you run ARM programs directly on your `x86_64` kernel.  It's very convenient!

To use:

* Install `qemu-arm` according to your distro.
* Link your built toolchain via:
  * `rustup toolchain link stage2 ${RUST}/build/x86_64-unknown-linux-gnu/stage2`
* Create a test program

```sh
cargo new hello_world
cd hello_world
```

* Build and run

```sh
CARGO_TARGET_ARMV7_UNKNOWN_LINUX_UCLIBCEABIHF_RUNNER="qemu-arm -L ${TOOLCHAIN}/arm-buildroot-linux-uclibcgnueabihf/sysroot/" \
CARGO_TARGET_ARMV7_UNKNOWN_LINUX_UCLIBCEABIHF_LINKER=${TOOLCHAIN}/bin/arm-buildroot-linux-uclibcgnueabihf-gcc \
cargo +stage2 run --target armv7-unknown-linux-uclibceabihf
```

<a id=platform_support_armv7a_vex_v5></a>

# `armv7a-vex-v5`

**Tier: 3**

Allows compiling user programs for the [VEX V5 Brain](https://www.vexrobotics.com/276-4810.html), a microcontroller for educational and competitive robotics.

Rust support for this target is not affiliated with VEX Robotics or IFI.

## Target maintainers

This target is maintained by members of the [vexide](https://github.com/vexide) organization:

- [@lewisfm](https://github.com/lewisfm)
- [@Tropix126](https://github.com/Tropix126)
- [@Gavin-Niederman](https://github.com/Gavin-Niederman)
- [@max-niederman](https://github.com/max-niederman)

## Requirements

This target is cross-compiled and currently requires `#![no_std]`. Dynamic linking is unsupported.

When compiling for this target, the "C" calling convention maps to AAPCS with VFP registers (hard float ABI) and the "system" calling convention maps to AAPCS without VFP registers (soft float ABI).

This target generates binaries in the ELF format that may uploaded to the brain with external tools.

## Building the target

You can build Rust with support for this target by adding it to the `target` list in `bootstrap.toml`, and then running `./x build --target armv7a-vex-v5 compiler`.

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for this target. To compile for
this target, you will either need to build Rust with the target enabled (see
"Building the target" above), or build your own copy of `core` by using
`build-std` or similar.

When the compiler builds a binary, an ELF build artifact will be produced. Additional tools are required for this artifact to be recognizable to VEXos as a user program.

The [cargo-v5](https://github.com/vexide/cargo-v5) tool is capable of creating binaries that can be uploaded to the V5 brain. This tool wraps the `cargo build` command by supplying arguments necessary to build the target and produce an artifact recognizable to VEXos, while also providing functionality for uploading over USB to a V5 Controller or Brain.

To install the tool, run:

```sh
cargo install cargo-v5
```

The following fields in your project's `Cargo.toml` are read by `cargo-v5` to configure upload behavior:

```toml
[package.metadata.v5]
# Slot number to upload the user program to. This should be from 1-8.
slot = 1
# Program icon/thumbnail that will be displayed on the dashboard.
icon = "cool-x"
# Use gzip compression when uploading binaries.
compress = true
```

To build an uploadable BIN file using the release profile, run:

```sh
cargo v5 build --release
```

Programs can also be directly uploaded to the brain over a USB connection immediately after building:

```sh
cargo v5 upload --release
```

## Testing

Binaries built for this target can be run in an emulator (such as [vex-v5-qemu](https://github.com/vexide/vex-v5-qemu)), or uploaded to a physical device over a serial (USB) connection.

The default Rust test runner is not supported.

The Rust test suite for `library/std` is not yet supported.

## Cross-compilation toolchains and C code

This target can be cross-compiled from any host.

Linking to C libraries is not supported.

<a id=platform_support_android></a>

# *-linux-android and *-linux-androideabi

**Tier: 2**

[Android] is a mobile operating system built on top of the Linux kernel.

[Android]: https://source.android.com/

## Target maintainers

[@chriswailes](https://github.com/chriswailes)
[@maurer](https://github.com/maurer)
[@mgeisler](https://github.com/mgeisler)

## Requirements

This target is cross-compiled from a host environment. Development may be done
from the [source tree] or using the Android NDK.

[source tree]: https://source.android.com/docs/setup/build/downloading

Android targets support std. Generated binaries use the ELF file format.

## NDK/API Update Policy

Rust will support the most recent Long Term Support (LTS) Android Native
Development Kit (NDK).  By default Rust will support all API levels supported
by the NDK, but a higher minimum API level may be required if deemed necessary.

## Building the target

To build Rust binaries for Android you'll need a copy of the most recent LTS
edition of the [Android NDK].  Supported Android targets are:

* aarch64-linux-android
* arm-linux-androideabi
* armv7-linux-androideabi
* i686-linux-android
* thumbv7neon-linux-androideabi
* x86_64-linux-android

The riscv64-linux-android target is supported as a Tier 3 target.

[Android NDK]: https://developer.android.com/ndk/downloads

A list of all supported targets can be found
[here](#platform_support)

## Architecture Notes

### riscv64-linux-android

Currently the `riscv64-linux-android` target requires the following architecture features/extensions:

* `a` (atomics)
* `d` (double-precision floating-point)
* `c` (compressed instruction set)
* `f` (single-precision floating-point)
* `m` (multiplication and division)
* `v` (vector)
* `Zba` (address calculation instructions)
* `Zbb` (base instructions)
* `Zbs` (single-bit instructions)

### aarch64-linux-android on Nightly compilers

As soon as `-Zfixed-x18` compiler flag is supplied, the [`ShadowCallStack` sanitizer](https://releases.llvm.org/7.0.1/tools/clang/docs/ShadowCallStack.html)
instrumentation is also made available by supplying the second compiler flag `-Zsanitizer=shadow-call-stack`.

<a id=platform_support_openharmony></a>

# `*-unknown-linux-ohos`

**Tier: 2 (with Host Tools)**

* aarch64-unknown-linux-ohos
* armv7-unknown-linux-ohos
* x86_64-unknown-linux-ohos

**Tier: 3**

* loongarch64-unknown-linux-ohos

Targets for the [OpenHarmony](https://gitee.com/openharmony/docs/) operating
system.

## Target maintainers

[@Amanieu](https://github.com/Amanieu)
[@cceerczw](https://github.com/cceerczw)

## Requirements

All the ohos targets of Tier 2 with host tools support all extended rust tools.
(exclude `miri`, the support of `miri` will be added soon)

### Host toolchain

The targets require a reasonably up-to-date OpenHarmony SDK on the host.

The targets support `cargo`, which require [ohos-openssl](https://github.com/ohos-rs/ohos-openssl).

`miri` isn't supported yet, since its dependencies (`libffi` and `tikv-jemalloc-sys`) don't support
compiling for the OHOS targets.

## Setup

The OpenHarmony SDK doesn't currently support Rust compilation directly, so
some setup is required.

First, you must obtain the OpenHarmony SDK from [this page](https://gitee.com/openharmony/docs/tree/master/en/release-notes).
Select the version of OpenHarmony you are developing for and download the "Public SDK package for the standard system".

Create the following shell scripts that wrap Clang from the OpenHarmony SDK:

`aarch64-unknown-linux-ohos-clang.sh`

```sh
#!/bin/sh
exec /path/to/ohos-sdk/linux/native/llvm/bin/clang \
  -target aarch64-linux-ohos \
  --sysroot=/path/to/ohos-sdk/linux/native/sysroot \
  -D__MUSL__ \
  "$@"
```

`aarch64-unknown-linux-ohos-clang++.sh`

```sh
#!/bin/sh
exec /path/to/ohos-sdk/linux/native/llvm/bin/clang++ \
  -target aarch64-linux-ohos \
  --sysroot=/path/to/ohos-sdk/linux/native/sysroot \
  -D__MUSL__ \
  "$@"
```

`armv7-unknown-linux-ohos-clang.sh`

```sh
#!/bin/sh
exec /path/to/ohos-sdk/linux/native/llvm/bin/clang \
  -target arm-linux-ohos \
  --sysroot=/path/to/ohos-sdk/linux/native/sysroot \
  -D__MUSL__ \
  -march=armv7-a \
  -mfloat-abi=softfp \
  -mtune=generic-armv7-a \
  -mthumb \
  "$@"
```

`armv7-unknown-linux-ohos-clang++.sh`

```sh
#!/bin/sh
exec /path/to/ohos-sdk/linux/native/llvm/bin/clang++ \
  -target arm-linux-ohos \
  --sysroot=/path/to/ohos-sdk/linux/native/sysroot \
  -D__MUSL__ \
  -march=armv7-a \
  -mfloat-abi=softfp \
  -mtune=generic-armv7-a \
  -mthumb \
  "$@"
```

`x86_64-unknown-linux-ohos-clang.sh`

```sh
#!/bin/sh
exec /path/to/ohos-sdk/linux/native/llvm/bin/clang \
  -target x86_64-linux-ohos \
  --sysroot=/path/to/ohos-sdk/linux/native/sysroot \
  -D__MUSL__ \
  "$@"
```

`x86_64-unknown-linux-ohos-clang++.sh`

```sh
#!/bin/sh
exec /path/to/ohos-sdk/linux/native/llvm/bin/clang++ \
  -target x86_64-linux-ohos \
  --sysroot=/path/to/ohos-sdk/linux/native/sysroot \
  -D__MUSL__ \
  "$@"
```

Future versions of the OpenHarmony SDK will avoid the need for this process.

## Building Rust programs

Rustup ships pre-compiled artifacts for this target, which you can install with:
```sh
rustup target add aarch64-unknown-linux-ohos
rustup target add armv7-unknown-linux-ohos
rustup target add x86_64-unknown-linux-ohos
```

You will need to configure the linker to use in `~/.cargo/config.toml`:
```toml
[target.aarch64-unknown-linux-ohos]
ar = "/path/to/ohos-sdk/linux/native/llvm/bin/llvm-ar"
linker = "/path/to/aarch64-unknown-linux-ohos-clang.sh"

[target.armv7-unknown-linux-ohos]
ar = "/path/to/ohos-sdk/linux/native/llvm/bin/llvm-ar"
linker = "/path/to/armv7-unknown-linux-ohos-clang.sh"

[target.x86_64-unknown-linux-ohos]
ar = "/path/to/ohos-sdk/linux/native/llvm/bin/llvm-ar"
linker = "/path/to/x86_64-unknown-linux-ohos-clang.sh"
```

## Building the target from source

Instead of using `rustup`, you can instead build a rust toolchain from source.
Create a `bootstrap.toml` with the following contents:

```toml
profile = "compiler"
change-id = 115898

[build]
sanitizers = true
profiler = true

[target.aarch64-unknown-linux-ohos]
cc = "/path/to/aarch64-unknown-linux-ohos-clang.sh"
cxx = "/path/to/aarch64-unknown-linux-ohos-clang++.sh"
ar = "/path/to/ohos-sdk/linux/native/llvm/bin/llvm-ar"
ranlib = "/path/to/ohos-sdk/linux/native/llvm/bin/llvm-ranlib"
linker  = "/path/to/aarch64-unknown-linux-ohos-clang.sh"

[target.armv7-unknown-linux-ohos]
cc = "/path/to/armv7-unknown-linux-ohos-clang.sh"
cxx = "/path/to/armv7-unknown-linux-ohos-clang++.sh"
ar = "/path/to/ohos-sdk/linux/native/llvm/bin/llvm-ar"
ranlib = "/path/to/ohos-sdk/linux/native/llvm/bin/llvm-ranlib"
linker  = "/path/to/armv7-unknown-linux-ohos-clang.sh"

[target.x86_64-unknown-linux-ohos]
cc = "/path/to/x86_64-unknown-linux-ohos-clang.sh"
cxx = "/path/to/x86_64-unknown-linux-ohos-clang++.sh"
ar = "/path/to/ohos-sdk/linux/native/llvm/bin/llvm-ar"
ranlib = "/path/to/ohos-sdk/linux/native/llvm/bin/llvm-ranlib"
linker  = "/path/to/x86_64-unknown-linux-ohos-clang.sh"
```

## Testing

Running the Rust testsuite is possible, but currently difficult due to the way
the OpenHarmony emulator is set up (no networking).

## Cross-compilation toolchains and C code

You can use the shell scripts above to compile C code for the target.

<a id=platform_support_hurd></a>

# `i686-unknown-hurd-gnu` and `x86_64-unknown-hurd-gnu`

**Tier: 3**

[GNU/Hurd] is the GNU Hurd is the GNU project's replacement for the Unix kernel.

## Target maintainers

[@sthibaul](https://github.com/sthibaul)

## Requirements

The target supports host tools.

The GNU/Hurd target supports `std` and uses the standard ELF file format.

## Building the target

This target can be built by adding `i686-unknown-hurd-gnu` and
`x86_64-unknown-hurd-gnu` as targets in the rustc list.

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for this target. To compile for
this target, you will either need to build Rust with the target enabled (see
"Building the target" above), or build your own copy of `core` by using
`build-std` or similar.

## Testing

Tests can be run in the same way as a regular binary.

## Cross-compilation toolchains and C code

The target supports C code, the GNU toolchain calls the target
`i686-unknown-gnu` and `x86_64-unknown-gnu`.

<a id=platform_support_aarch64_unknown_teeos></a>

# `aarch64-unknown-teeos`

**Tier: 3**

Target for the TEEOS operating system.

TEEOS is a mini os run in TrustZone, for trusted/security apps. The kernel of TEEOS is HongMeng/ChCore micro kernel. The libc for TEEOS is a part of musl.
It's very small that there is no RwLock, no network, no stdin, and no file system for apps in TEEOS.

Some abbreviation:

| Abbreviation | The full text | Description |
|  ----  | ----  | ---- |
| TEE | Trusted Execution Environment | ARM TrustZone divides the system into two worlds/modes -- the secure world/mode and the normal world/mode. TEE is in the secure world/mode. |
| REE | Rich Execution Environment | The normal world. for example, Linux for Android phone is in REE side. |
| TA | Trusted Application | The app run in TEE side system. |
| CA | Client Application | The progress run in REE side system. |

TEEOS is open source in progress. [MORE about](https://gitee.com/opentrustee-group)

## Target maintainers

[@petrochenkov](https://github.com/petrochenkov)
[@Sword-Destiny](https://github.com/Sword-Destiny)

## Setup
We use OpenHarmony SDK for TEEOS.

The OpenHarmony SDK doesn't currently support Rust compilation directly, so
some setup is required.

First, you must obtain the OpenHarmony SDK from [this page](https://gitee.com/openharmony/docs/tree/master/en/release-notes).
Select the version of OpenHarmony you are developing for and download the "Public SDK package for the standard system".

Create the following shell scripts that wrap Clang from the OpenHarmony SDK:

`aarch64-unknown-teeos-clang.sh`

```sh
#!/bin/sh
exec /path/to/ohos-sdk/linux/native/llvm/bin/clang \
  -target aarch64-linux-gnu \
  "$@"
```

`aarch64-unknown-teeos-clang++.sh`

```sh
#!/bin/sh
exec /path/to/ohos-sdk/linux/native/llvm/bin/clang++ \
  -target aarch64-linux-gnu \
  "$@"
```

## Building the target

To build a rust toolchain, create a `bootstrap.toml` with the following contents:

```toml
profile = "compiler"
change-id = 115898

[build]
sanitizers = true
profiler = true
target = ["x86_64-unknown-linux-gnu", "aarch64-unknown-teeos"]
submodules = false
compiler-docs = false
extended = true

[install]
bindir = "bin"
libdir = "lib"

[target.aarch64-unknown-teeos]
cc = "/path/to/scripts/aarch64-unknown-teeos-clang.sh"
cxx = "/path/to/scripts/aarch64-unknown-teeos-clang.sh"
linker = "/path/to/scripts/aarch64-unknown-teeos-clang.sh"
ar = "/path/to/ohos-sdk/linux/native/llvm/bin/llvm-ar"
ranlib = "/path/to/ohos-sdk/linux/native/llvm/bin/llvm-ranlib"
llvm-config = "/path/to/ohos-sdk/linux/native/llvm/bin/llvm-config"
```

```text
note: You need to insert "/usr/include/x86_64-linux-gnu/" into environment variable: $C_INCLUDE_PATH
 if some header files like bits/xxx.h not found.
note: You can install gcc-aarch64-linux-gnu,g++-aarch64-linux-gnu if some files like crti.o not found.
note: You may need to install libc6-dev-i386 libc6-dev if "gnu/stubs-32.h" not found.
```

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for this target. To compile for
this target, you will either need to build Rust with the target enabled (see
"Building the target" above), or build your own copy of `core` by using
`build-std` or similar.

You will need to configure the linker to use in `~/.cargo/config`:
```toml
[target.aarch64-unknown-teeos]
linker = "/path/to/aarch64-unknown-teeos-clang.sh" # or aarch64-linux-gnu-ld
```

## Testing

Running the Rust testsuite is not possible now.

More information about how to test CA/TA. [See here](https://gitee.com/openharmony-sig/tee_tee_dev_kit/tree/master/docs)

<a id=platform_support_avr_none></a>

# `avr-none`

Series of microcontrollers from Atmel: ATmega8, ATmega328p etc.

**Tier: 3**

## Target maintainers

[@Patryk27](https://github.com/Patryk27)

## Requirements

This target is only cross-compiled; x86-64 Linux, x86-64 macOS and aarch64 macOS
hosts are confirmed to work, but in principle any machine able to run rustc and
avr-gcc should be good.

Compiling for this target requires `avr-gcc` installed, because a couple of
intrinsics (like 32-bit multiplication) rely on [`libgcc`](https://github.com/gcc-mirror/gcc/blob/3269a722b7a03613e9c4e2862bc5088c4a17cc11/libgcc/config/avr/lib1funcs.S)
and can't be provided through `compiler-builtins` yet. This is a limitation that
[we hope to lift in the future](https://github.com/rust-lang/compiler-builtins/issues/711).

You'll also need to setup the `.cargo/config` file - see below for details.

## Building the target

Rust comes with AVR support enabled, you don't have to rebuild the compiler.

## Building Rust programs

Install `avr-gcc`:

```console
# Ubuntu:
$ sudo apt-get install gcc-avr

# Mac:
$ brew tap osx-cross/avr && brew install avr-gcc

# NixOS (takes a couple of minutes, since it's not provided through Hydra):
$ nix shell nixpkgs#pkgsCross.avr.buildPackages.gcc11
```

... setup `.cargo/config` for your project:

```toml
[build]
target = "avr-none"
rustflags = ["-C", "target-cpu=atmega328p"]

[unstable]
build-std = ["core"]
```

... and then simply run:

```console
$ cargo build --release
```

The final binary will be placed into
`./target/avr-none/release/your-project.elf`.

Note that since AVRs have rather small amounts of registers, ROM and RAM, it's
recommended to always use `--release` to avoid running out of space.

Also, please note that specifying `-C target-cpu` is required - here's a list of
the possible variants:

https://github.com/llvm/llvm-project/blob/093d4db2f3c874d4683fb01194b00dbb20e5c713/clang/lib/Basic/Targets/AVR.cpp#L32

## Testing

You can use [`simavr`](https://github.com/buserror/simavr) to emulate the
resulting firmware on your machine:

```console
$ simavr -m atmega328p ./target/avr-none/release/your-project.elf
```

Alternatively, if you want to write a couple of actual `#[test]`s, you can use
[`avr-tester`](https://github.com/Patryk27/avr-tester).

<a id=platform_support_esp_idf></a>

# `*-espidf`

**Tier: 3**

Targets for the [ESP-IDF](https://github.com/espressif/esp-idf) development framework running on RISC-V and Xtensa CPUs.

## Target maintainers

[@ivmarkov](https://github.com/ivmarkov)
[@MabezDev](https://github.com/MabezDev)
[@SergioGasquez](https://github.com/SergioGasquez)

## Requirements

The target names follow this format: `$ARCH-esp-espidf`, where `$ARCH` specifies the target processor architecture. The following targets are currently defined:

| Target name               | Target CPU(s)                                                   | Minimum ESP-IDF version |
| ------------------------- | --------------------------------------------------------------- | ----------------------- |
| `riscv32imc-esp-espidf`   | [ESP32-C2](https://www.espressif.com/en/products/socs/esp32-c2) | `v5.0`                  |
| `riscv32imc-esp-espidf`   | [ESP32-C3](https://www.espressif.com/en/products/socs/esp32-c3) | `v4.4`                  |
| `riscv32imac-esp-espidf`  | [ESP32-C6](https://www.espressif.com/en/products/socs/esp32-c6) | `v5.1`                  |
| `riscv32imac-esp-espidf`  | [ESP32-H2](https://www.espressif.com/en/products/socs/esp32-h2) | `v5.1`                  |
| `riscv32imafc-esp-espidf` | [ESP32-P4](https://www.espressif.com/en/news/ESP32-P4)          | `v5.2`                  |
| `xtensa-esp32-espidf`     | [ESP32](https://www.espressif.com/en/products/socs/esp32)       | `v4.4`                  |
| `xtensa-esp32s2-espidf`   | [ESP32-S2](https://www.espressif.com/en/products/socs/esp32-s2) | `v4.4`                  |
| `xtensa-esp32s3-espidf`   | [ESP32-S3](https://www.espressif.com/en/products/socs/esp32-s3) | `v4.4`                  |

It is recommended to use the latest ESP-IDF stable release if possible.

## Building the target

The target can be built by enabling it for a `rustc` build. The `build-std` feature is required to build the standard library for ESP-IDF. `ldproxy` is also required for linking, it can be installed from crates.io.

```toml
[build]
target = ["$ARCH-esp-espidf"]

[target.$ARCH-esp-espidf]
linker = "ldproxy"

[unstable]
build-std = ["std", "panic_abort"]
```

The `esp-idf-sys` crate will handle the compilation of ESP-IDF, including downloading the relevant toolchains for the build.

## Cross-compilation toolchains and C code

`esp-idf-sys` exposes the toolchain used in the compilation of ESP-IDF, see the crate [documentation for build output propagation](https://github.com/esp-rs/esp-idf-sys#conditional-compilation) for more information.

<a id=platform_support_fuchsia></a>

# `aarch64-unknown-fuchsia` and `x86_64-unknown-fuchsia`

**Tier: 2**

[Fuchsia] is a modern open source operating system that's simple, secure,
updatable, and performant.

## Target maintainers

[@erickt](https://github.com/erickt)
[@Nashenas88](https://github.com/Nashenas88)

The up-to-date list can be also found via the
[fuchsia marker team](https://github.com/rust-lang/team/blob/master/teams/fuchsia.toml).

## Table of contents

1. [Requirements](#requirements)
1. [Walkthrough structure](#walkthrough-structure)
1. [Compiling a Rust binary targeting Fuchsia](#compiling-a-rust-binary-targeting-fuchsia)
    1. [Targeting Fuchsia with rustup and cargo](#targeting-fuchsia-with-rustup-and-cargo)
    1. [Targeting Fuchsia with a compiler built from source](#targeting-fuchsia-with-a-compiler-built-from-source)
1. [Creating a Fuchsia package](#creating-a-fuchsia-package)
    1. [Creating a Fuchsia component](#creating-a-fuchsia-component)
    1. [Building a Fuchsia package](#building-a-fuchsia-package)
1. [Publishing a Fuchsia package](#publishing-a-fuchsia-package)
    1. [Creating a Fuchsia package repository](#creating-a-fuchsia-package-repository)
    1. [Publishing Fuchsia package to repository](#publishing-fuchsia-package-to-repository)
1. [Running a Fuchsia component on an emulator](#running-a-fuchsia-component-on-an-emulator)
    1. [Starting the Fuchsia emulator](#starting-the-fuchsia-emulator)
    1. [Watching emulator logs](#watching-emulator-logs)
    1. [Serving a Fuchsia package](#serving-a-fuchsia-package)
    1. [Running a Fuchsia component](#running-a-fuchsia-component)
1. [`.gitignore` extensions](#gitignore-extensions)
1. [Testing](#testing)
    1. [Running unit tests](#running-unit-tests)
    1. [Running the compiler test suite](#running-the-compiler-test-suite)
1. [Debugging](#debugging)
    1. [`zxdb`](#zxdb)
    1. [Attaching `zxdb`](#attaching-zxdb)
    1. [Using `zxdb`](#using-zxdb)
    1. [Displaying source code in `zxdb`](#displaying-source-code-in-zxdb)

## Requirements

This target is cross-compiled from a host environment. You will need a recent
copy of the [Fuchsia SDK], which provides the tools, libraries, and binaries
required to build and link programs for Fuchsia.

Development may also be done from the [source tree].

Fuchsia targets support `std` and follow the `sysv64` calling convention on
x86_64. Fuchsia binaries use the ELF file format.

## Walkthrough structure

This walkthrough will cover:

1. Compiling a Rust binary targeting Fuchsia.
1. Building a Fuchsia package.
1. Publishing and running a Fuchsia package to a Fuchsia emulator.

For the purposes of this walkthrough, we will only target `x86_64-unknown-fuchsia`.

## Compiling a Rust binary targeting Fuchsia

Today, there are two main ways to build a Rust binary targeting Fuchsia
using the Fuchsia SDK:
1. Allow [rustup] to handle the installation of Fuchsia targets for you.
1. Build a toolchain locally that can target Fuchsia.

### Targeting Fuchsia with rustup and cargo

The easiest way to build a Rust binary targeting Fuchsia is by allowing [rustup]
to handle the installation of Fuchsia targets for you. This can be done by issuing
the following commands:

```sh
rustup target add x86_64-unknown-fuchsia
rustup target add aarch64-unknown-fuchsia
```

After installing our Fuchsia targets, we can now compile a Rust binary that targets
Fuchsia.

To create our Rust project, we can use [`cargo`][cargo] as follows:

**From base working directory**
```sh
cargo new hello_fuchsia
```

The rest of this walkthrough will take place from `hello_fuchsia`, so we can
change into that directory now:

```sh
cd hello_fuchsia
```

*Note: From this point onwards, all commands will be issued from the `hello_fuchsia/`
directory, and all `hello_fuchsia/` prefixes will be removed from references for sake of brevity.*

We can edit our `src/main.rs` to include a test as follows:

**`src/main.rs`**
```rust
fn main() {
    println!("Hello Fuchsia!");
}

#[test]
fn it_works() {
    assert_eq!(2 + 2, 4);
}
```

In addition to the standard workspace created, we will want to create a
`.cargo/config.toml` file to link necessary libraries
during compilation:

**`.cargo/config.toml`**
```txt
[target.x86_64-unknown-fuchsia]

rustflags = [
    "-Lnative=<SDK_PATH>/arch/x64/lib",
    "-Lnative=<SDK_PATH>/arch/x64/sysroot/lib"
]
```

*Note: Make sure to fill out `<SDK_PATH>` with the path to the downloaded [Fuchsia SDK].*

These options configure the following:

* `-Lnative=${SDK_PATH}/arch/${ARCH}/lib`: Link against Fuchsia libraries from
  the SDK
* `-Lnative=${SDK_PATH}/arch/${ARCH}/sysroot/lib`: Link against Fuchsia sysroot
  libraries from the SDK

In total, our new project will look like:

**Current directory structure**
```txt
hello_fuchsia/
┣━ src/
┃  ┗━ main.rs
┣━ Cargo.toml
┗━ .cargo/
   ┗━ config.toml
```

Finally, we can build our rust binary as:

```sh
cargo build --target x86_64-unknown-fuchsia
```

Now we have a Rust binary at `target/x86_64-unknown-fuchsia/debug/hello_fuchsia`,
targeting our desired Fuchsia target.

**Current directory structure**
```txt
hello_fuchsia/
┣━ src/
┃  ┗━ main.rs
┣━ target/
┃  ┗━ x86_64-unknown-fuchsia/
┃     ┗━ debug/
┃        ┗━ hello_fuchsia
┣━ Cargo.toml
┗━ .cargo/
   ┗━ config.toml
```

### Targeting Fuchsia with a compiler built from source

An alternative to the first workflow is to target Fuchsia by using
`rustc` built from source.

Before building Rust for Fuchsia, you'll need a clang toolchain that supports
Fuchsia as well. A recent version (14+) of clang should be sufficient to compile
Rust for Fuchsia.

x86-64 and AArch64 Fuchsia targets can be enabled using the following
configuration in `bootstrap.toml`:

```toml
[build]
target = ["<host_platform>", "aarch64-unknown-fuchsia", "x86_64-unknown-fuchsia"]

[rust]
lld = true

[llvm]
download-ci-llvm = false

[target.x86_64-unknown-fuchsia]
cc = "clang"
cxx = "clang++"

[target.aarch64-unknown-fuchsia]
cc = "clang"
cxx = "clang++"
```

Though not strictly required, you may also want to use `clang` for your host
target as well:

```toml
[target.<host_platform>]
cc = "clang"
cxx = "clang++"
```

By default, the Rust compiler installs itself to `/usr/local` on most UNIX
systems. You may want to install it to another location (e.g. a local `install`
directory) by setting a custom prefix in `bootstrap.toml`:

```toml
[install]
# Make sure to use the absolute path to your install directory
prefix = "<RUST_SRC_PATH>/install"
```

Next, the following environment variables must be configured. For example, using
a script we name `config-env.sh`:

```sh
# Configure this environment variable to be the path to the downloaded SDK
export SDK_PATH="<SDK path goes here>"

export CFLAGS_aarch64_unknown_fuchsia="--target=aarch64-unknown-fuchsia --sysroot=${SDK_PATH}/arch/arm64/sysroot -I${SDK_PATH}/pkg/fdio/include"
export CXXFLAGS_aarch64_unknown_fuchsia="--target=aarch64-unknown-fuchsia --sysroot=${SDK_PATH}/arch/arm64/sysroot -I${SDK_PATH}/pkg/fdio/include"
export LDFLAGS_aarch64_unknown_fuchsia="--target=aarch64-unknown-fuchsia --sysroot=${SDK_PATH}/arch/arm64/sysroot -L${SDK_PATH}/arch/arm64/lib"
export CARGO_TARGET_AARCH64_UNKNOWN_FUCHSIA_RUSTFLAGS="-C link-arg=--sysroot=${SDK_PATH}/arch/arm64/sysroot -Lnative=${SDK_PATH}/arch/arm64/sysroot/lib -Lnative=${SDK_PATH}/arch/arm64/lib"
export CFLAGS_x86_64_unknown_fuchsia="--target=x86_64-unknown-fuchsia --sysroot=${SDK_PATH}/arch/x64/sysroot -I${SDK_PATH}/pkg/fdio/include"
export CXXFLAGS_x86_64_unknown_fuchsia="--target=x86_64-unknown-fuchsia --sysroot=${SDK_PATH}/arch/x64/sysroot -I${SDK_PATH}/pkg/fdio/include"
export LDFLAGS_x86_64_unknown_fuchsia="--target=x86_64-unknown-fuchsia --sysroot=${SDK_PATH}/arch/x64/sysroot -L${SDK_PATH}/arch/x64/lib"
export CARGO_TARGET_X86_64_UNKNOWN_FUCHSIA_RUSTFLAGS="-C link-arg=--sysroot=${SDK_PATH}/arch/x64/sysroot -Lnative=${SDK_PATH}/arch/x64/sysroot/lib -Lnative=${SDK_PATH}/arch/x64/lib"
```

Finally, the Rust compiler can be built and installed:

```sh
(source config-env.sh && ./x.py install)
```

Once `rustc` is installed, we can create a new working directory to work from,
`hello_fuchsia` along with `hello_fuchsia/src`:

```sh
mkdir hello_fuchsia
cd hello_fuchsia
mkdir src
```

*Note: From this point onwards, all commands will be issued from the `hello_fuchsia/`
directory, and all `hello_fuchsia/` prefixes will be removed from references for sake of brevity.*

There, we can create a new file named `src/hello_fuchsia.rs`:

**`src/hello_fuchsia.rs`**
```rust
fn main() {
    println!("Hello Fuchsia!");
}

#[test]
fn it_works() {
    assert_eq!(2 + 2, 4);
}
```

**Current directory structure**
```txt
hello_fuchsia/
┗━ src/
    ┗━ hello_fuchsia.rs
```

Using your freshly installed `rustc`, you can compile a binary for Fuchsia using
the following options:

* `--target x86_64-unknown-fuchsia`/`--target aarch64-unknown-fuchsia`: Targets the Fuchsia
  platform of your choice
* `-Lnative ${SDK_PATH}/arch/${ARCH}/lib`: Link against Fuchsia libraries from
  the SDK
* `-Lnative ${SDK_PATH}/arch/${ARCH}/sysroot/lib`: Link against Fuchsia sysroot
  libraries from the SDK

Putting it all together:

```sh
# Configure these for the Fuchsia target of your choice
TARGET_ARCH="<x86_64-unknown-fuchsia|aarch64-unknown-fuchsia>"
ARCH="<x64|aarch64>"

rustc \
    --target ${TARGET_ARCH} \
    -Lnative=${SDK_PATH}/arch/${ARCH}/lib \
    -Lnative=${SDK_PATH}/arch/${ARCH}/sysroot/lib \
    --out-dir bin src/hello_fuchsia.rs
```

**Current directory structure**
```txt
hello_fuchsia/
┣━ src/
┃   ┗━ hello_fuchsia.rs
┗━ bin/
   ┗━ hello_fuchsia
```

## Creating a Fuchsia package

Before moving on, double check your directory structure:

**Current directory structure**
```txt
hello_fuchsia/
┣━ src/                         (if using rustc)
┃   ┗━ hello_fuchsia.rs         ...
┣━ bin/                         ...
┃  ┗━ hello_fuchsia             ...
┣━ src/                         (if using cargo)
┃  ┗━ main.rs                   ...
┗━ target/                      ...
   ┗━ x86_64-unknown-fuchsia/   ...
      ┗━ debug/                 ...
         ┗━ hello_fuchsia       ...
```

With our Rust binary built, we can move to creating a Fuchsia package.
On Fuchsia, a package is the unit of distribution for software. We'll need to
create a new package directory where we will place files like our finished
binary and any data it may need.

To start, make the `pkg`, and `pkg/meta` directories:

```sh
mkdir pkg
mkdir pkg/meta
```

**Current directory structure**
```txt
hello_fuchsia/
┗━ pkg/
   ┗━ meta/
```

Now, create the following files inside:

**`pkg/meta/package`**
```json
{
  "name": "hello_fuchsia",
  "version": "0"
}
```

The `package` file describes our package's name and version number. Every
package must contain one.

**`pkg/hello_fuchsia.manifest` if using cargo**
```txt
bin/hello_fuchsia=target/x86_64-unknown-fuchsia/debug/hello_fuchsia
lib/ld.so.1=<SDK_PATH>/arch/x64/sysroot/dist/lib/ld.so.1
lib/libfdio.so=<SDK_PATH>/arch/x64/dist/libfdio.so
meta/package=pkg/meta/package
meta/hello_fuchsia.cm=pkg/meta/hello_fuchsia.cm
```

**`pkg/hello_fuchsia.manifest` if using rustc**
```txt
bin/hello_fuchsia=bin/hello_fuchsia
lib/ld.so.1=<SDK_PATH>/arch/x64/sysroot/dist/lib/ld.so.1
lib/libfdio.so=<SDK_PATH>/arch/x64/dist/libfdio.so
meta/package=pkg/meta/package
meta/hello_fuchsia.cm=pkg/meta/hello_fuchsia.cm
```

*Note: Relative manifest paths are resolved starting from the working directory
of `ffx`. Make sure to fill out `<SDK_PATH>` with the path to the downloaded
SDK.*

The `.manifest` file will be used to describe the contents of the package by
relating their location when installed to their location on the file system. The
`bin/hello_fuchsia=` entry will be different depending on how your Rust binary
was built, so choose accordingly.

**Current directory structure**
```txt
hello_fuchsia/
┗━ pkg/
   ┣━ meta/
   ┃  ┗━ package
   ┗━ hello_fuchsia.manifest
```

### Creating a Fuchsia component

On Fuchsia, components require a component manifest written in Fuchsia's markup
language called CML. The Fuchsia devsite contains an [overview of CML] and a
[reference for the file format]. Here's a basic one that can run our single binary:

**`pkg/hello_fuchsia.cml`**
```txt
{
    include: [ "syslog/client.shard.cml" ],
    program: {
        runner: "elf",
        binary: "bin/hello_fuchsia",
    },
}
```

**Current directory structure**
```txt
hello_fuchsia/
┗━ pkg/
   ┣━ meta/
   ┃  ┗━ package
   ┣━ hello_fuchsia.manifest
   ┗━ hello_fuchsia.cml
```

Now we can compile that CML into a component manifest:

```sh
${SDK_PATH}/tools/${ARCH}/cmc compile \
    pkg/hello_fuchsia.cml \
    --includepath ${SDK_PATH}/pkg \
    -o pkg/meta/hello_fuchsia.cm
```

*Note: `--includepath` tells the compiler where to look for `include`s from our CML.
In our case, we're only using `syslog/client.shard.cml`.*

**Current directory structure**
```txt
hello_fuchsia/
┗━ pkg/
   ┣━ meta/
   ┃  ┣━ package
   ┃  ┗━ hello_fuchsia.cm
   ┣━ hello_fuchsia.manifest
   ┗━ hello_fuchsia.cml
```

### Building a Fuchsia package

Next, we'll build a package manifest as defined by our manifest:

```sh
${SDK_PATH}/tools/${ARCH}/ffx package build \
    --api-level $(${SDK_PATH}/tools/${ARCH}/ffx --machine json version | jq .tool_version.api_level) \
    --out pkg/hello_fuchsia_manifest \
    pkg/hello_fuchsia.manifest
```

This will produce `pkg/hello_fuchsia_manifest/` which is a package manifest we can
publish directly to a repository.

**Current directory structure**
```txt
hello_fuchsia/
┗━ pkg/
   ┣━ meta/
   ┃  ┣━ package
   ┃  ┗━ hello_fuchsia.cm
   ┣━ hello_fuchsia_manifest/
   ┃  ┗━ ...
   ┣━ hello_fuchsia.manifest
   ┣━ hello_fuchsia.cml
   ┗━ hello_fuchsia_package_manifest
```

We are now ready to publish the package.

## Publishing a Fuchsia package

With our package and component manifests setup,
we can now publish our package. The first step will
be to create a Fuchsia package repository to publish
to.

### Creating a Fuchsia package repository

We can set up our repository with:

```sh
${SDK_PATH}/tools/${ARCH}/ffx repository create pkg/repo
```

**Current directory structure**
```txt
hello_fuchsia/
┗━ pkg/
   ┣━ meta/
   ┃  ┣━ package
   ┃  ┗━ hello_fuchsia.cm
   ┣━ hello_fuchsia_manifest/
   ┃  ┗━ ...
   ┣━ repo/
   ┃  ┗━ ...
   ┣━ hello_fuchsia.manifest
   ┣━ hello_fuchsia.cml
   ┗━ hello_fuchsia_package_manifest
```

## Publishing Fuchsia package to repository

We can publish our new package to that repository with:

```sh
${SDK_PATH}/tools/${ARCH}/ffx repository publish \
    --package pkg/hello_fuchsia_package_manifest \
    pkg/repo
```

## Running a Fuchsia component on an emulator

At this point, we are ready to run our Fuchsia
component. For reference, our final directory
structure will look like:

**Final directory structure**
```txt
hello_fuchsia/
┣━ src/                         (if using rustc)
┃   ┗━ hello_fuchsia.rs         ...
┣━ bin/                         ...
┃  ┗━ hello_fuchsia             ...
┣━ src/                         (if using cargo)
┃  ┗━ main.rs                   ...
┣━ target/                      ...
┃  ┗━ x86_64-unknown-fuchsia/   ...
┃     ┗━ debug/                 ...
┃        ┗━ hello_fuchsia       ...
┗━ pkg/
   ┣━ meta/
   ┃  ┣━ package
   ┃  ┗━ hello_fuchsia.cm
   ┣━ hello_fuchsia_manifest/
   ┃  ┗━ ...
   ┣━ repo/
   ┃  ┗━ ...
   ┣━ hello_fuchsia.manifest
   ┣━ hello_fuchsia.cml
   ┗━ hello_fuchsia_package_manifest
```

### Starting the Fuchsia emulator

Start a Fuchsia emulator in a new terminal using:

```sh
${SDK_PATH}/tools/${ARCH}/ffx product-bundle get workstation_eng.qemu-${ARCH}
${SDK_PATH}/tools/${ARCH}/ffx emu start workstation_eng.qemu-${ARCH} --headless
```

### Watching emulator logs

Once the emulator is running, open a separate terminal to watch the emulator logs:

**In separate terminal**
```sh
${SDK_PATH}/tools/${ARCH}/ffx log \
    --since now
```

### Serving a Fuchsia package

Now, start a package repository server to serve our
package to the emulator:

```sh
${SDK_PATH}/tools/${ARCH}/ffx repository server start \
    --background --repository hello-fuchsia --repo-path pkg-repo
```

Once the repository server is up and running, register it with the target Fuchsia system running in the emulator:

```sh
${SDK_PATH}/tools/${ARCH}/ffx target repository register \
    --repository hello-fuchsia
```

### Running a Fuchsia component

Finally, run the component:

```sh
${SDK_PATH}/tools/${ARCH}/ffx component run \
    /core/ffx-laboratory:hello_fuchsia \
    fuchsia-pkg://hello-fuchsia/hello_fuchsia_manifest#meta/hello_fuchsia.cm
```

On reruns of the component, the `--recreate` argument may also need to be
passed.

```sh
${SDK_PATH}/tools/${ARCH}/ffx component run \
    --recreate \
    /core/ffx-laboratory:hello_fuchsia \
    fuchsia-pkg://hello-fuchsia/hello_fuchsia_manifest#meta/hello_fuchsia.cm
```

## `.gitignore` extensions

Optionally, we can create/extend our `.gitignore` file to ignore files and
directories that are not helpful to track:

```txt
pkg/repo
pkg/meta/hello_fuchsia.cm
pkg/hello_fuchsia_manifest
pkg/hello_fuchsia_package_manifest
```

## Testing

### Running unit tests

Tests can be run in the same way as a regular binary.

* If using `cargo`, you can simply pass `test --no-run`
to the `cargo` invocation and then repackage and rerun the Fuchsia package. From our previous example,
this would look like `cargo test --target x86_64-unknown-fuchsia --no-run`, and moving the executable
binary path found from the line `Executable unittests src/main.rs (target/x86_64-unknown-fuchsia/debug/deps/hello_fuchsia-<HASH>)`
into `pkg/hello_fuchsia.manifest`.

* If using the compiled `rustc`, you can simply pass `--test`
to the `rustc` invocation and then repackage and rerun the Fuchsia package.

The test harness will run the applicable unit tests.

Often when testing, you may want to pass additional command line arguments to
your binary. Additional arguments can be set in the component manifest:

**`pkg/hello_fuchsia.cml`**
```txt
{
    include: [ "syslog/client.shard.cml" ],
    program: {
        runner: "elf",
        binary: "bin/hello_fuchsia",
        args: ["it_works"],
    },
}
```

This will pass the argument `it_works` to the binary, filtering the tests to
only those tests that match the pattern. There are many more configuration
options available in CML including environment variables. More documentation is
available on the [Fuchsia devsite].

### Running the compiler test suite

The commands in this section assume that they are being run from inside your
local Rust source checkout:

```sh
cd ${RUST_SRC_PATH}
```

To run the Rust test suite on an emulated Fuchsia device, you'll also need to
download a copy of the Fuchsia SDK. The current minimum supported SDK version is
[20.20240412.3.1][minimum_supported_sdk_version].

[minimum_supported_sdk_version]: https://chrome-infra-packages.appspot.com/p/fuchsia/sdk/core/linux-amd64/+/version:20.20240412.3.1

Fuchsia's test runner interacts with the Fuchsia emulator and is located at
`src/ci/docker/scripts/fuchsia-test-runner.py`. First, add the following
variables to your existing `config-env.sh`:

```sh
# TEST_TOOLCHAIN_TMP_DIR can point anywhere, but it:
#  - must be less than 108 characters, otherwise qemu can't handle the path
#  - must be consistent across calls to this file (don't use `mktemp -d` here)
export TEST_TOOLCHAIN_TMP_DIR="/tmp/rust-tmp"

# Keep existing contents of `config-env.sh` from earlier, including SDK_PATH
```

We can then use the script to start our test environment with:

```sh
( \
    source config-env.sh &&                                                   \
    src/ci/docker/scripts/fuchsia-test-runner.py start                        \
    --rust-build ${RUST_SRC_PATH}/build                                       \
    --sdk ${SDK_PATH}                                                         \
    --target {x86_64-unknown-fuchsia|aarch64-unknown-fuchsia}                 \
    --verbose                                                                 \
)
```

Where `${RUST_SRC_PATH}/build` is the `build-dir` set in `bootstrap.toml`.

Once our environment is started, we can run our tests using `x.py` as usual. The
test runner script will run the compiled tests on an emulated Fuchsia device. To
run the full `tests/ui` test suite:

```sh
( \
    source config-env.sh &&                                                   \
    ./x.py                                                                    \
    --config bootstrap.toml                                                      \
    --stage=2                                                                 \
    test tests/ui                                                             \
    --target x86_64-unknown-fuchsia                                           \
    --run=always                                                              \
    --test-args --target-rustcflags                                           \
    --test-args -Lnative=${SDK_PATH}/arch/{x64|arm64}/sysroot/lib             \
    --test-args --target-rustcflags                                           \
    --test-args -Lnative=${SDK_PATH}/arch/{x64|arm64}/lib                     \
    --test-args --target-rustcflags                                           \
    --test-args -Clink-arg=--undefined-version                                \
    --test-args --remote-test-client                                          \
    --test-args src/ci/docker/scripts/fuchsia-test-runner.py                  \
)
```

By default, `x.py` compiles test binaries with `panic=unwind`. If you built your
Rust toolchain with `-Cpanic=abort`, you need to tell `x.py` to compile test
binaries with `panic=abort` as well:

```sh
    --test-args --target-rustcflags                                           \
    --test-args -Cpanic=abort                                                 \
    --test-args --target-rustcflags                                           \
    --test-args -Zpanic_abort_tests                                           \
```

When finished testing, the test runner can be used to stop the test environment:

```sh
src/ci/docker/scripts/fuchsia-test-runner.py stop
```

## Debugging

### `zxdb`

Debugging components running on a Fuchsia emulator can be done using the
console-mode debugger: [zxdb]. We will demonstrate attaching necessary symbol
paths to debug our `hello-fuchsia` component.

### Attaching `zxdb`

In a separate terminal, issue the following command from our `hello_fuchsia`
directory to launch `zxdb`:

**In separate terminal**
```sh
${SDK_PATH}/tools/${ARCH}/ffx debug connect -- \
    --symbol-path target/x86_64-unknown-fuchsia/debug
```

* `--symbol-path` gets required symbol paths, which are
necessary for stepping through your program.

The "[displaying source code in `zxdb`](#displaying-source-code-in-zxdb)"
section describes how you can display Rust and/or Fuchsia source code in your
debugging session.

### Using `zxdb`

Once launched, you will be presented with the window:

```sh
Connecting (use "disconnect" to cancel)...
Connected successfully.
👉 To get started, try "status" or "help".
[zxdb]
```

To attach to our program, we can run:

```sh
[zxdb] attach hello_fuchsia
```

**Expected output**
```sh
Waiting for process matching "hello_fuchsia".
Type "filter" to see the current filters.
```

Next, we can create a breakpoint at main using "b main":

```sh
[zxdb] b main
```

**Expected output**
```sh
Created Breakpoint 1 @ main
```

Finally, we can re-run the "hello_fuchsia" component from our original
terminal:

```sh
${SDK_PATH}/tools/${ARCH}/ffx component run \
    --recreate \
    fuchsia-pkg://hello-fuchsia/hello_fuchsia_manifest#meta/hello_fuchsia.cm
```

Once our component is running, our `zxdb` window will stop execution
in our main as desired:

**Expected output**
```txt
Breakpoint 1 now matching 1 addrs for main
🛑 on bp 1 hello_fuchsia::main() • main.rs:2
   1 fn main() {
 ▶ 2     println!("Hello Fuchsia!");
   3 }
   4
[zxdb]
```

`zxdb` has similar commands to other debuggers like [gdb].
To list the available commands, run "help" in the
`zxdb` window or visit [the zxdb documentation].

```sh
[zxdb] help
```

**Expected output**
```sh
Help!

  Type "help <command>" for command-specific help.

Other help topics (see "help <topic>")
...
```

### Displaying source code in `zxdb`

By default, the debugger will not be able to display
source code while debugging. For our user code, we displayed
source code by pointing our debugger to our debug binary via
the `--symbol-path` arg. To display library source code in
the debugger, you must provide paths to the source using
`--build-dir`. For example, to display the Rust and Fuchsia
source code:

```sh
${SDK_PATH}/tools/${ARCH}/ffx debug connect -- \
    --symbol-path target/x86_64-unknown-fuchsia/debug \
    --build-dir ${RUST_SRC_PATH}/rust \
    --build-dir ${FUCHSIA_SRC_PATH}/fuchsia/out/default
```

 * `--build-dir` links against source code paths, which
 are not strictly necessary for debugging, but is a nice-to-have
 for displaying source code in `zxdb`.

 Linking to a Fuchsia checkout can help with debugging Fuchsia libraries,
 such as [fdio].

### Debugging the compiler test suite

Debugging the compiler test suite requires some special configuration:

First, we have to properly configure zxdb so it will be able to find debug
symbols and source information for our test. The test runner can do this for us
with:

```sh
src/ci/docker/scripts/fuchsia-test-runner.py debug                            \
    --rust-src ${RUST_SRC_PATH}                                               \
    --fuchsia-src ${FUCHSIA_SRC_PATH}                                         \
    --test ${TEST}
```

where `${TEST}` is relative to Rust's `tests` directory (e.g. `ui/abi/...`).

This will start a zxdb session that is properly configured for the specific test
being run. All three arguments are optional, so you can omit `--fuchsia-src` if
you don't have it downloaded. Now is a good time to set any desired breakpoints,
like `b main`.

Next, we have to tell `x.py` not to optimize or strip debug symbols from our
test suite binaries. We can do this by passing some new arguments to `rustc`
through our `x.py` invocation. The full invocation is:

```sh
( \
    source config-env.sh &&                                                   \
    ./x.py                                                                    \
    --config bootstrap.toml                                                      \
    --stage=2                                                                 \
    test tests/${TEST}                                                        \
    --target x86_64-unknown-fuchsia                                           \
    --run=always                                                              \
    --test-args --target-rustcflags                                           \
    --test-args -Lnative=${SDK_PATH}/arch/{x64|arm64}/sysroot/lib             \
    --test-args --target-rustcflags                                           \
    --test-args -Lnative=${SDK_PATH}/arch/{x64|arm64}/lib                     \
    --test-args --target-rustcflags                                           \
    --test-args -Clink-arg=--undefined-version                                \
    --test-args --target-rustcflags                                           \
    --test-args -Cdebuginfo=2                                                 \
    --test-args --target-rustcflags                                           \
    --test-args -Copt-level=0                                                 \
    --test-args --target-rustcflags                                           \
    --test-args -Cstrip=none                                                  \
    --test-args --remote-test-client                                          \
    --test-args src/ci/docker/scripts/fuchsia-test-runner.py                  \
)
```

*If you built your Rust toolchain with `panic=abort`, make sure to include the
previous flags so your test binaries are also compiled with `panic=abort`.*

Upon running this command, the test suite binary will be run and zxdb will
attach and load any relevant debug symbols.

[Fuchsia team]: https://team-api.infra.rust-lang.org/v1/teams/fuchsia.json
[Fuchsia]: https://fuchsia.dev/
[source tree]: https://fuchsia.dev/fuchsia-src/get-started/learn/build
[rustup]: https://rustup.rs/
[cargo]: https://doc.rust-lang.org/cargo/index.html
[Fuchsia SDK]: https://chrome-infra-packages.appspot.com/p/fuchsia/sdk/core
[overview of CML]: https://fuchsia.dev/fuchsia-src/concepts/components/v2/component_manifests
[reference for the file format]: https://fuchsia.dev/reference/cml
[Fuchsia devsite]: https://fuchsia.dev/reference/cml
[not currently supported]: https://fxbug.dev/105393
[zxdb]: https://fuchsia.dev/fuchsia-src/development/debugger
[gdb]: https://www.sourceware.org/gdb/
[the zxdb documentation]: https://fuchsia.dev/fuchsia-src/development/debugger
[fdio]: https://cs.opensource.google/fuchsia/fuchsia/+/main:sdk/lib/fdio/

<a id=platform_support_trusty></a>

# `aarch64-unknown-trusty` and `armv7-unknown-trusty`

**Tier: 3**

[Trusty] is a secure Operating System that provides a Trusted Execution
Environment (TEE) for Android.

## Target maintainers

[@randomPoison](https://github.com/randomPoison)
[@ahomescu](https://github.com/ahomescu)

## Requirements

These targets are cross-compiled. They have no special requirements for the host.

Trusty targets have partial support for the standard library: `alloc` is fully
supported and `std` has limited support that excludes things like filesystem
access, network I/O, and spawning processes/threads. File descriptors are
supported for the purpose of IPC.

Trusty uses the ELF file format.

## Building the target

The targets can be built by enabling them for a `rustc` build, for example:

```toml
[build]
build-stage = 1
target = ["aarch64-unknown-trusty", "armv7-unknown-trusty"]
```

## Building Rust programs

There is currently no supported way to build a Trusty app with Cargo. You can
follow the [Trusty build instructions] to build the Trusty kernel along with any
Rust apps that are setup in the project.

## Testing

See the [Trusty build instructions] for information on how to build Rust code
within the main Trusty project. The main project also includes infrastructure
for testing Rust applications within a QEMU emulator.

## Cross-compilation toolchains and C code

See the [Trusty build instructions] for information on how C code is built
within Trusty.

[Trusty]: https://source.android.com/docs/security/features/trusty
[Trusty build instructions]: https://source.android.com/docs/security/features/trusty/download-and-build

<a id=platform_support_kmc_solid></a>

# \*-kmc-solid_\*

**Tier: 3**

[SOLID] embedded development platform by Kyoto Microcomputer Co., Ltd.

[SOLID]: https://www.kmckk.co.jp/eng/SOLID/

The target names follow this format: `$ARCH-kmc-solid_$KERNEL-$ABI`, where `$ARCH` specifies the target processor architecture, `$KERNEL` the base kernel, and `$ABI` the target ABI (optional). The following targets are currently defined:

|          Target name           | `target_arch` | `target_vendor` | `target_os`  |
|--------------------------------|---------------|-----------------|--------------|
| `aarch64-kmc-solid_asp3`       | `aarch64`     | `kmc`           | `solid_asp3` |
| `armv7a-kmc-solid_asp3-eabi`   | `arm`         | `kmc`           | `solid_asp3` |
| `armv7a-kmc-solid_asp3-eabihf` | `arm`         | `kmc`           | `solid_asp3` |

## Target Maintainers

[@kawadakk](https://github.com/kawadakk)

## Requirements

This target is cross-compiled.
A platform-provided C compiler toolchain is required, though it can be substituted by [GNU Arm Embedded Toolchain](https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm) for the purpose of building Rust and functional binaries.

## Building

The target can be built by enabling it for a `rustc` build.

```toml
[build]
target = ["aarch64-kmc-solid_asp3"]
```

Make sure `aarch64-kmc-elf-gcc` is included in `$PATH`. Alternatively, you can use GNU Arm Embedded Toolchain by adding the following to `bootstrap.toml`:

```toml
[target.aarch64-kmc-solid_asp3]
cc = "arm-none-eabi-gcc"
```

## Cross-compilation

This target can be cross-compiled from any hosts.

## Testing

Currently there is no support to run the rustc test suite for this target.

## Building Rust programs

Building executables is not supported yet.

If `rustc` has support for that target and the library artifacts are available, then Rust static libraries can be built for that target:

```shell
$ rustc --target aarch64-kmc-solid_asp3 your-code.rs --crate-type staticlib
$ ls libyour_code.a
```

On Rust Nightly it's possible to build without the target artifacts available:

```text
cargo build -Z build-std --target aarch64-kmc-solid_asp3
```

<a id=platform_support_csky_unknown_linux_gnuabiv2></a>

# `csky-unknown-linux-gnuabiv2`

**Tier: 3**

This target supports [C-SKY](https://github.com/c-sky) CPUs with `abi` v2 and `glibc`.

target | std | host | notes
-------|:---:|:----:|-------
`csky-unknown-linux-gnuabiv2` | ✓ |  | C-SKY abiv2 Linux (little endian)
`csky-unknown-linux-gnuabiv2hf` | ✓ |  | C-SKY abiv2 Linux, hardfloat (little endian)

Reference:

- [CSKY ABI Manual](https://occ-oss-prod.oss-cn-hangzhou.aliyuncs.com/resource//1695027452256/T-HEAD_800_Series_ABI_Standards_Manual.pdf)
- [csky-linux-gnuabiv2-toolchain](https://occ-oss-prod.oss-cn-hangzhou.aliyuncs.com/resource/1356021/1619528643136/csky-linux-gnuabiv2-tools-x86_64-glibc-linux-4.9.56-20210423.tar.gz)
- [csky-linux-gnuabiv2-qemu](https://occ-oss-prod.oss-cn-hangzhou.aliyuncs.com/resource//1689324918932/xuantie-qemu-x86_64-Ubuntu-18.04-20230714-0202.tar.gz)

other links:

- https://c-sky.github.io/
- https://gitlab.com/c-sky/

## Target maintainers

[@Dirreke](https://github.com/Dirreke)

## Requirements

## Building the target

### Get a C toolchain

Compiling rust for this target has been tested on `x86_64` linux hosts.  Other host types have not been tested, but may work, if you can find a suitable cross compilation toolchain for them.

If you don't already have a suitable toolchain, you can download from [here](https://occ-oss-prod.oss-cn-hangzhou.aliyuncs.com/resource/1356021/1619528643136/csky-linux-gnuabiv2-tools-x86_64-glibc-linux-4.9.56-20210423.tar.gz), and unpack it into a directory.

### Configure rust

The target can be built by enabling it for a `rustc` build, by placing the following in `bootstrap.toml`:

```toml
[build]
target = ["x86_64-unknown-linux-gnu", "csky-unknown-linux-gnuabiv2", "csky-unknown-linux-gnuabiv2hf"]
stage = 2

[target.csky-unknown-linux-gnuabiv2]
# ADJUST THIS PATH TO POINT AT YOUR TOOLCHAIN
cc = "${TOOLCHAIN_PATH}/bin/csky-linux-gnuabiv2-gcc"

[target.csky-unknown-linux-gnuabiv2hf]
# ADJUST THIS PATH TO POINT AT YOUR TOOLCHAIN
cc = "${TOOLCHAIN_PATH}/bin/csky-linux-gnuabiv2-gcc"
```

### Build

```sh
# in rust dir
./x.py build --stage 2
```

## Building and Running Rust programs

To test cross-compiled binaries on a `x86_64` system, you can use the `qemu-cskyv2`. This avoids having a full emulated ARM system by doing dynamic binary translation and dynamic system call translation.  It lets you run CSKY programs directly on your `x86_64` kernel.  It's very convenient!

To use:

* Install `qemu-cskyv2` (If you don't already have a qemu, you can download from [here](https://occ-oss-prod.oss-cn-hangzhou.aliyuncs.com/resource//1689324918932/xuantie-qemu-x86_64-Ubuntu-18.04-20230714-0202.tar.gz"), and unpack it into a directory.)
* Link your built toolchain via:
  * `rustup toolchain link stage2 ${RUST}/build/x86_64-unknown-linux-gnu/stage2`
* Create a test program

```sh
cargo new hello_world
cd hello_world
```

* Build and run

```sh
CARGO_TARGET_CSKY_UNKNOWN_LINUX_GNUABIV2_RUNNER=${QEMU_PATH}/bin/qemu-cskyv2 -L ${TOOLCHAIN_PATH}/csky-linux-gnuabiv2/libc \
CARGO_TARGET_CSKY_UNKNOWN_LINUX_GNUABIV2_LINKER=${TOOLCHAIN_PATH}/bin/csky-linux-gnuabiv2-gcc \
RUSTFLAGS="-C target-feature=+crt-static" \
cargo +stage2 run --target csky-unknown-linux-gnuabiv2
```

Attention: The dynamic-linked program may nor be run by `qemu-cskyv2` but can be run on the target.

<a id=platform_support_hexagon_unknown_linux_musl></a>

# `hexagon-unknown-linux-musl`

**Tier: 3**

Target for cross-compiling Linux user-mode applications targeting the Hexagon
DSP architecture.

| Target                   | Descriptions                              |
| ------------------------ | ----------------------------------------- |
| hexagon-unknown-linux-musl | Hexagon 32-bit Linux |

## Target maintainers

[@androm3da](https://github.com/androm3da)

## Requirements
The target is cross-compiled. This target supports `std`.  By default, code
generated with this target should run on Hexagon DSP hardware.

- `-Ctarget-cpu=hexagonv73` adds support for instructions defined up to Hexagon V73.

Binaries can be run using QEMU user emulation. On Debian-based systems, it should be
sufficient to install the package `qemu-user-static` to be able to run simple static
binaries:

```text
# apt install qemu-user-static
# qemu-hexagon-static ./hello
```

In order to build linux programs with Rust, you will require a linker capable
of targeting hexagon.  You can use `clang`/`lld` from the [hexagon toolchain
using exclusively public open source repos](https://github.com/quic/toolchain_for_hexagon/releases).

Also included in that toolchain is the C library that can be used when creating
dynamically linked executables.

```text
# /opt/clang+llvm-18.1.0-cross-hexagon-unknown-linux-musl/x86_64-linux-gnu/bin/qemu-hexagon -L /opt/clang+llvm-18.1.0-cross-hexagon-unknown-linux-musl/x86_64-linux-gnu/target/hexagon-unknown-linux-musl/usr/ ./hello
```

## Building the target
Because it is Tier 3, rust does not yet ship pre-compiled artifacts for this
target.

Therefore, you can build Rust with support for the target by adding it to the
target list in `bootstrap.toml`, a sample configuration is shown below.

```toml
[build]
target = ["hexagon-unknown-linux-musl"]

[target.hexagon-unknown-linux-musl]

cc = "hexagon-unknown-linux-musl-clang"
cxx = "hexagon-unknown-linux-musl-clang++"
linker = "hexagon-unknown-linux-musl-clang"
ar = "hexagon-unknown-linux-musl-ar"
ranlib = "hexagon-unknown-linux-musl-ranlib"
musl-root = "/opt/clang+llvm-18.1.0-cross-hexagon-unknown-linux-musl/x86_64-linux-gnu/target/hexagon-unknown-linux-musl/usr"
llvm-libunwind = 'in-tree'
qemu-rootfs = "/opt/clang+llvm-18.1.0-cross-hexagon-unknown-linux-musl/x86_64-linux-gnu/target/hexagon-unknown-linux-musl/usr"
```


## Testing

Currently there is no support to run the rustc test suite for this target.


## Building Rust programs

Download and install the hexagon open source toolchain from https://github.com/quic/toolchain_for_hexagon/releases

The following `.cargo/config` is needed inside any project directory to build
for the Hexagon Linux target:

```toml
[build]
target = "hexagon-unknown-linux-musl"

[target.hexagon-unknown-linux-musl]
linker = "hexagon-unknown-linux-musl-clang"
ar = "hexagon-unknown-linux-musl-ar"
runner = "qemu-hexagon -L /opt/clang+llvm-18.1.0-cross-hexagon-unknown-linux-musl/x86_64-linux-gnu/target/hexagon-unknown-linux-musl/usr"
```

Edit the "runner" in `.cargo/config` to point to the path to your toolchain's
C library.

```text
...
runner = "qemu-hexagon -L /path/to/my/inst/clang+llvm-18.1.0-cross-hexagon-unknown-linux-musl/x86_64-linux-gnu/target/hexagon-unknown-linux-musl/usr"
...
```

Build/run your rust program with `qemu-hexagon` in your `PATH`:

```text
export PATH=/path/to/my/inst/clang+llvm-18.1.0-cross-hexagon-unknown-linux-musl/x86_64-linux-gnu/bin/:$PATH
cargo run -Zbuild-std -Zbuild-std-features=llvm-libunwind
```

<a id=platform_support_hexagon_unknown_none_elf></a>

# `hexagon-unknown-none-elf`

**Tier: 3**

Rust for baremetal Hexagon DSPs.

| Target                   | Descriptions                              |
| ------------------------ | ----------------------------------------- |
| hexagon-unknown-none-elf | Hexagon 32-bit (freestanding, hardfloat)  |

## Target maintainers

[@androm3da](https://github.com/androm3da)

## Requirements

This target is cross-compiled.  There is no support for `std`. There is no
default allocator, but it's possible to use `alloc` by supplying an allocator.

By default, code generated with this target should run on Hexagon DSP hardware.

- `-Ctarget-cpu=hexagonv73` adds support for instructions defined up to Hexagon V73.

Functions marked `extern "C"` use the [Hexagon architecture calling convention](https://lists.llvm.org/pipermail/llvm-dev/attachments/20190916/21516a52/attachment-0001.pdf).

This target generates PIC ELF binaries.

## Building the target

You can build Rust with support for the target by adding it to the `target`
list in `bootstrap.toml`:

```toml
[build]
build-stage = 1
host = ["<target for your host>"]
target = ["<target for your host>", "hexagon-unknown-none-elf"]

[target.hexagon-unknown-none-elf]

cc = "hexagon-unknown-none-elf-clang"
cxx = "hexagon-unknown-none-elf-clang++"
linker = "hexagon-unknown-none-elf-clang"
ranlib = "hexagon-unknown-none-elf-ranlib"
ar = "hexagon-unknown-none-elf-ar"
llvm-libunwind = 'in-tree'
```

Replace `<target for your host>` with `x86_64-unknown-linux-gnu` or whatever
else is appropriate for your host machine.

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for this target. To compile for
this target, you will either need to build Rust with the target enabled (see
"Building the target" above), or build your own copy of `core` by using
`build-std` or similar.

## Testing

Since `hexagon-unknown-none-elf` supports a variety of different environments and
does not support `std`, this target does not support running the Rust test suite.

## Cross-compilation toolchains and C code

This target has been tested using `qemu-system-hexagon`.

A common use case for `hexagon-unknown-none-elf` is building libraries that
link against C code and can be used in emulation or on a device with a
Hexagon DSP.

The Hexagon SDK has libraries which are useful to link against when running
on a device.


# Standalone OS

The script below will build an executable against "hexagon standalone OS"
which is suitable for emulation or bare-metal on-device testing.

First, run `cargo new --bin demo1_hexagon` then add the source below as
`src/main.rs`.  This program demonstrates the console output via semihosting.

```rust,ignore (platform-specific,eh-personality-is-unstable)
#![no_std]
#![no_main]

extern "C" {
    fn putchar(ch: i32);
    fn _exit(code: i32) -> !;
}

#[no_mangle]
extern "C" fn main() -> i32 {
    let message = "Hello, this is Rust!";
    for b in message.bytes() {
        unsafe {
            putchar(b as i32);
        }
    }
    0
}

#[panic_handler]
fn panic(_panic: &core::panic::PanicInfo) -> ! {
    unsafe {
        _exit(1);
    }
}

```

Next, save the script below as `build.sh` and edit it to suit your
environment.

* `hex_toolchain` below refers to the [hexagon toolchain using exclusively
public open source repos](https://github.com/quic/toolchain_for_hexagon/releases).
* `cc` below refers to clang.  You can use `clang` from your distribution, as
long as it's at least `clang-17`.  Or you can use
`hexagon-unknown-none-elf-clang` from one of the [hexagon open source toolchain
releases](https://github.com/quic/toolchain_for_hexagon/releases).

```sh
# Hexagon SDK, required for target libraries:
hex_sdk_root=/local/mnt/workspace/Qualcomm/Hexagon_SDK/5.3.0.0
hex_sdk_toolchain=${hex_sdk_root}/tools/HEXAGON_Tools/8.6.06

sdk_libs=${hex_sdk_toolchain}/Tools/target/hexagon/lib
q6_arch=v65
g0_lib_path=${sdk_libs}/${q6_arch}/G0
pic_lib_path=${sdk_libs}/${q6_arch}/G0/pic

build_cfg=release
cargo build --target=hexagon-unknown-none-elf -Zbuild-std --release

# Builds an executable against "hexagon standalone OS" suitable for emulation:
${cc} --target=hexagon-unknown-none-elf -o testit \
    -fuse-ld=lld \
    -m${q6_arch} \
    -nodefaultlibs \
    -nostartfiles \
    ${g0_lib_path}/crt0_standalone.o \
    ${g0_lib_path}/crt0.o \
    ${g0_lib_path}/init.o \
    -L${sdk_libs}/${q6_arch}/ \
    -L${sdk_libs}/ \
    wrap.c \
    target/hexagon-unknown-none-elf/${build_cfg}/libdemo1_hexagon.rlib \
    target/hexagon-unknown-none-elf/${build_cfg}/deps/libcore-*.rlib \
    target/hexagon-unknown-none-elf/${build_cfg}/deps/libcompiler_builtins-*.rlib \
    -Wl,--start-group \
    -Wl,--defsym,_SDA_BASE_=0,--defsym,__sbss_start=0,--defsym,__sbss_end=0 \
    ${g0_lib_path}/libstandalone.a \
    ${g0_lib_path}/libc.a \
    -lgcc \
    -lc_eh \
    -Wl,--end-group \
    ${g0_lib_path}/fini.o \

${hex_toolchain}/x86_64-linux-gnu/bin/qemu-system-hexagon -monitor none -display none -kernel ./testit
```

# QuRT OS

First, run `cargo new --lib demo2_hexagon` then add the source below as
`src/lib.rs`.  This program demonstrates inline assembly and console output
via semihosting.

```rust,ignore (platform-specific,eh-personality-is-unstable)
#![no_std]
#![no_main]
#![feature(lang_items)]
#![feature(asm_experimental_arch)]

use core::arch::asm;

extern "C" {
    fn putchar(ch: i32);
    fn _exit(code: i32) -> !;
}

fn hexagon_specific() {
    let mut buffer = [0_u8; 128];

    unsafe {
        let mut x = &buffer;
        asm!(
                "{{\n\t",
                "  v0=vmem({addr}+#0)\n\t",
                "  {tmp} = and({tmp}, #1)\n\t",
                "}}\n\t",
                addr = in(reg) x,
                tmp = out(reg) _,
            );
    }
}

#[no_mangle]
extern "C" fn hello() -> i32 {
    let message = "Hello, this is Rust!\n";
    for b in message.bytes() {
        unsafe {
            putchar(b as i32);
        }
    }
    hexagon_specific();
    0
}

#[panic_handler]
fn panic(_panic: &core::panic::PanicInfo) -> ! {
    unsafe {
        _exit(1);
    }
}

#[lang = "eh_personality"]
fn rust_eh_personality() {}

```

Next, create a C program as an entry point, save the content below as
`wrap.c`:

```C
int hello();

int main() {
    hello();
}
```

Then, save the script below as `build.sh` and edit it to suit your
environment.  The script below will build a shared object against the QuRT
RTOS which is suitable for emulation or on-device testing when loaded via
the fastrpc-shell.


```sh
# Hexagon SDK, required for target libraries:
hex_sdk_root=/local/mnt/workspace/Qualcomm/Hexagon_SDK/5.3.0.0
hex_sdk_toolchain=${hex_sdk_root}/tools/HEXAGON_Tools/8.6.06

sdk_libs=${hex_sdk_toolchain}/Tools/target/hexagon/lib
q6_arch=v65
g0_lib_path=${sdk_libs}/${q6_arch}/G0
pic_lib_path=${sdk_libs}/${q6_arch}/G0/pic
runelf=${hex_sdk_root}/rtos/qurt/computev65/sdksim_bin/runelf.pbn
rmohs=${hex_sdk_root}/libs/run_main_on_hexagon/ship/hexagon_toolv86_${q6_arch}/run_main_on_hexagon_sim

# Builds a library suitable for loading into "run_main_on_hexagon_sim" for
# emulation or frpc shell on real target:
${cc} --target=hexagon-unknown-none-elf -o testit.so \
    -fuse-ld=lld \
    -fPIC -shared \
    -nostdlib \
    -Wl,-Bsymbolic \
      -Wl,--wrap=malloc \
      -Wl,--wrap=calloc \
      -Wl,--wrap=free \
      -Wl,--wrap=realloc \
      -Wl,--wrap=memalign \
    -m${q6_arch} \
    wrap.c \
    target/hexagon-unknown-none-elf/${build_cfg}/libdemo2_hexagon.rlib \
    target/hexagon-unknown-none-elf/${build_cfg}/deps/libcore-*.rlib \
    target/hexagon-unknown-none-elf/${build_cfg}/deps/libcompiler_builtins-*.rlib \
    -Wl,-soname=testit \
    ${pic_lib_path}/libc.so

# -Bsymbolic above for memory alloc funcs is necessary to access the heap on
# target, but otherwise not required.

# multi-stage loader: runelf => run_main_on_hexagon_sim => testit.so{`main`}
${hex_toolchain}/x86_64-linux-gnu/bin/qemu-system-hexagon \
    -monitor none \
    -display none \
    -kernel ${runelf} \
    -append "${rmohs} -- ./testit.so"
```

<a id=platform_support_illumos></a>

# `aarch64-unknown-illumos` and `x86_64-unknown-illumos`

**Tier: 2/3**

[illumos](https://www.illumos.org/), is a Unix operating system which provides next-generation features for downstream distributions,
including advanced system debugging, next generation filesystem, networking, and virtualization options.

## Target maintainers

[@jclulow](https://github.com/jclulow)
[@pfmooney](https://github.com/pfmooney)

## Requirements

The target supports host tools.

The illumos target supports `std` and uses the standard ELF file format.

`x86_64-unknown-illumos` is a tier 2 target with host tools.
`aarch64-unknown-illumos` is a tier 3 target.

## Building the target

These targets can be built by adding `aarch64-unknown-illumos` and
`x86_64-unknown-illumos` as targets in the rustc list.

## Building Rust programs

Rust ships pre-compiled artifacts for the `x86_64-unknown-illumos` target.
Rust does not ship pre-compiled artifacts for `aarch64-unknown-illumos`,
it requires building the target either as shown above or using `-Zbuild-std`.

## Testing

Tests can be run in the same way as a regular binary.

## Cross-compilation toolchains and C code

The target supports C code.

The illumos project makes available [prebuilt sysroot artefacts](https://github.com/illumos/sysroot) which can be used for cross compilation.
The official Rust binaries are cross-compiled using these artefacts.

<a id=platform_support_loongarch_linux></a>

# `loongarch*-unknown-linux-*`

**Tier: 2 (with Host Tools)**

[LoongArch][la-docs] Linux targets.
LoongArch is a RISC ISA developed by Loongson Technology Corporation Limited.

| Target | Description |
|--------|-------------|
| `loongarch64-unknown-linux-gnu` | LoongArch64 Linux, LP64D ABI (kernel 5.19, glibc 2.36), LSX required |
| `loongarch64-unknown-linux-musl` | LoongArch64 Linux, LP64D ABI (kernel 5.19, musl 1.2.5), LSX required |

These support both native and cross builds, and have full support for `std`.

Reference material:

* [LoongArch ISA manuals][la-docs]
* [Application Binary Interface for the LoongArch&trade; Architecture][la-abi-specs]

[la-abi-specs]: https://github.com/loongson/la-abi-specs
[la-docs]: https://loongson.github.io/LoongArch-Documentation/README-EN.html

## Target maintainers

[@heiher](https://github.com/heiher)
[@xen0n](https://github.com/xen0n)

## Requirements

### OS Version

The minimum supported Linux version is 5.19.

Some Linux distributions, mostly commercial ones, may provide forked Linux
kernels that has a version number less than 5.19 for their LoongArch ports.
Such kernels may still get patched to be compatible with the upstream Linux
5.19 UAPI, therefore supporting the targets described in this document, but
this is not always the case. The `rustup` installer contains a check for this,
and will abort if incompatibility is detected.

### Host toolchain

The targets require a reasonably up-to-date LoongArch toolchain on the host.
Currently the following components are used by the Rust CI to build the target,
and the versions can be seen as the minimum requirement:

* GNU Binutils 2.42
* GCC 14.x
* glibc 2.36
* linux-headers 5.19

Of these, glibc and linux-headers are at their respective earliest versions with
mainline LoongArch support, so it is impossible to use older versions of these.
Older versions of Binutils and GCC will not work either, due to lack of support
for newer LoongArch ELF relocation types, among other features.

Recent LLVM/Clang toolchains may be able to build the targets, but are not
currently being actively tested.

### CPU features

These targets require the double-precision floating-point and LSX (LoongArch
SIMD Extension) features.

## Building

These targets are distributed through `rustup`, and otherwise require no
special configuration.

If you need to build your own Rust for some reason though, the targets can be
simply enabled in `bootstrap.toml`. For example:

```toml
[build]
target = ["loongarch64-unknown-linux-gnu"]
```

Make sure the LoongArch toolchain binaries are reachable from `$PATH`.
Alternatively, you can explicitly configure the paths in `bootstrap.toml`:

```toml
[target.loongarch64-unknown-linux-gnu]
# Adjust the paths to point at your toolchain
# Suppose the toolchain is placed at /TOOLCHAIN_PATH, and the cross prefix is
# "loongarch64-unknown-linux-gnu-":
cc = "/TOOLCHAIN_PATH/bin/loongarch64-unknown-linux-gnu-gcc"
cxx = "/TOOLCHAIN_PATH/bin/loongarch64-unknown-linux-gnu-g++"
ar = "/TOOLCHAIN_PATH/bin/loongarch64-unknown-linux-gnu-ar"
ranlib = "/TOOLCHAIN_PATH/bin/loongarch64-unknown-linux-gnu-ranlib"
linker = "/TOOLCHAIN_PATH/bin/loongarch64-unknown-linux-gnu-gcc"
```

### Cross-compilation

This target can be cross-compiled on a `x86_64-unknown-linux-gnu` host.
Other hosts are also likely to work, but not actively tested.

You can test the cross build directly on the host, thanks to QEMU linux-user emulation.
An example is given below:

```sh
# Suppose the cross toolchain is placed at $TOOLCHAIN_PATH, with a cross prefix
# of "loongarch64-unknown-linux-gnu-".
export CC_loongarch64_unknown_linux_gnu="$TOOLCHAIN_PATH"/bin/loongarch64-unknown-linux-gnu-gcc
export CXX_loongarch64_unknown_linux_gnu="$TOOLCHAIN_PATH"/bin/loongarch64-unknown-linux-gnu-g++
export AR_loongarch64_unknown_linux_gnu="$TOOLCHAIN_PATH"/bin/loongarch64-unknown-linux-gnu-gcc-ar
export CARGO_TARGET_LOONGARCH64_UNKNOWN_LINUX_GNU_LINKER="$TOOLCHAIN_PATH"/bin/loongarch64-unknown-linux-gnu-gcc

# Point qemu-loongarch64 to the LoongArch sysroot.
# Suppose the sysroot is located at "sysroot" below the toolchain root:
export CARGO_TARGET_LOONGARCH64_UNKNOWN_LINUX_GNU_RUNNER="qemu-loongarch64 -L $TOOLCHAIN_PATH/sysroot"
# Or alternatively, if binfmt_misc is set up for running LoongArch binaries
# transparently:
export QEMU_LD_PREFIX="$TOOLCHAIN_PATH"/sysroot

cargo run --target loongarch64-unknown-linux-gnu --release
```

## Testing

There are no special requirements for testing and running the targets.
For testing cross builds on the host, please refer to the "Cross-compilation"
section above.

## Building Rust programs

As the targets are available through `rustup`, it is very easy to build Rust
programs for these targets: same as with other architectures.
Note that you will need a LoongArch C/C++ toolchain for linking, or if you want
to compile C code along with Rust (such as for Rust crates with C dependencies).

```sh
rustup target add loongarch64-unknown-linux-gnu
cargo build --target loongarch64-unknown-linux-gnu
```

Availability of pre-built artifacts through `rustup` are as follows:

* `loongarch64-unknown-linux-gnu`: since Rust 1.71;
* `loongarch64-unknown-linux-musl`: since Rust 1.81.

<a id=platform_support_loongarch_none></a>

# `loongarch*-unknown-none*`

Freestanding/bare-metal LoongArch binaries in ELF format: firmware, kernels, etc.

| Target | Description | Tier |
|--------|-------------|------|
| `loongarch32-unknown-none` | LoongArch 32-bit, ILP32D ABI (freestanding, hard-float) | Tier 3 |
| `loongarch32-unknown-none-softfloat` | LoongArch 32-bit, ILP32S ABI (freestanding, soft-float) | Tier 3 |
| `loongarch64-unknown-none` | LoongArch 64-bit, LP64D ABI (freestanding, hard-float) | Tier 2 |
| `loongarch64-unknown-none-softfloat` | LoongArch 64-bit, LP64S ABI (freestanding, soft-float) | Tier 2 |

## Target maintainers

[@heiher](https://github.com/heiher)
[@xen0n](https://github.com/xen0n)

## Requirements

This target is cross-compiled. There is no support for `std`. There is no
default allocator, but it's possible to use `alloc` by supplying an allocator.

The `*-softfloat` target does not assume existence of FPU or any other LoongArch
ISA extension, and does not make use of any non-GPR register.
This allows the generated code to run in environments, such as kernels, which
may need to avoid the use of such registers or which may have special considerations
about the use of such registers (e.g. saving and restoring them to avoid breaking
userspace code using the same registers). You can change code generation to use
additional CPU features via the `-C target-feature=` codegen options to rustc, or
via the `#[target_feature]` mechanism within Rust code.

By default, code generated with the soft-float target should run on any
LoongArch hardware, with the hard-float target additionally requiring an FPU;
enabling additional target features may raise this baseline.

Code generated with the targets will use the `medium` code model by default.
You can change this using the `-C code-model=` option to rustc.

On `loongarch*-unknown-none*`, `extern "C"` uses the [architecture's standard calling convention][lapcs].

[lapcs]: https://github.com/loongson/la-abi-specs/blob/release/lapcs.adoc

The targets generate binaries in the ELF format. Any alternate formats or
special considerations for binary layout will require linker options or linker
scripts.

## Building the target

You can build Rust with support for the targets by adding them to the `target`
list in `bootstrap.toml`:

```toml
[build]
build-stage = 1
target = [
  "loongarch32-unknown-none",
  "loongarch32-unknown-none-softfloat",
  "loongarch64-unknown-none",
  "loongarch64-unknown-none-softfloat",
]
```

## Testing

As the targets support a variety of different environments and do not support
`std`, they do not support running the Rust test suite.

## Building Rust programs

### loongarch32-unknown-none*

The `loongarch32-unknown-none*` targets are Tier 3, so you must build the Rust
compiler from source to use them.

```sh
# target flag may be used with any cargo or rustc command
cargo build --target loongarch32-unknown-none
cargo build --target loongarch32-unknown-none-softfloat
```

### loongarch64-unknown-none*

Starting with Rust 1.74, precompiled artifacts are provided via `rustup`:

```sh
# install cross-compile toolchain
rustup target add loongarch64-unknown-none
rustup target add loongarch64-unknown-none-softfloat
# target flag may be used with any cargo or rustc command
cargo build --target loongarch64-unknown-none
cargo build --target loongarch64-unknown-none-softfloat
```

## Cross-compilation toolchains and C code

For cross builds, you will need an appropriate LoongArch C/C++ toolchain for
linking, or if you want to compile C code along with Rust (such as for Rust
crates with C dependencies).

Rust *may* be able to use an `loongarch{32,64}-unknown-linux-{gnu,musl}-` toolchain with
appropriate standalone flags to build for this toolchain (depending on the assumptions
of that toolchain, see below), or you may wish to use a separate
`loongarch{32,64}-unknown-none` toolchain.

On some LoongArch hosts that use ELF binaries, you *may* be able to use the host
C toolchain, if it does not introduce assumptions about the host environment
that don't match the expectations of a standalone environment. Otherwise, you
may need a separate toolchain for standalone/freestanding development, just as
when cross-compiling from a non-LoongArch platform.

<a id=platform_support_lynxos178></a>

# `*-lynxos178-*`

**Tier: 3**

Targets for the LynxOS-178 operating system.

[LynxOS-178](https://www.lynx.com/products/lynxos-178-do-178c-certified-posix-rtos)
is a commercial RTOS designed for safety-critical real-time systems.  It is
developed by Lynx Software Technologies as part of the
[MOSA.ic](https://www.lynx.com/solutions/safe-and-secure-operating-environment)
product suite.

Target triples available:
- `x86_64-lynx-lynxos178`

## Target maintainers

[@rfatykhov-lynx](https://github.com/rfatykhov-lynx)

## Requirements

To build Rust programs for LynxOS-178, you must first have LYNX MOSA.ic
installed on the build machine.

This target supports only cross-compilation, from the same hosts supported by
the Lynx CDK.

Currently only `no_std` programs are supported. Work to support `std` is in
progress.

## Building the target

You can build Rust with support for x86_64-lynx-lynxos178 by adding that
to the `target` list in `config.toml`, and then running `./x build --target
x86_64-lynx-lynxos178 compiler`.

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for this target. To compile for
this target, you will need to build Rust with the target enabled (see "Building
the target" above).

Before executing `cargo`, you must configure the environment to build LynxOS-178
binaries by running `source setup.sh` from the los178 directory.

If your program/crates contain procedural macros, Rust must be able to build
binaries for the host as well. The host gcc is hidden by sourcing setup.sh.  To
deal with this, add the following to your project's `.cargo/config.toml`:
```toml
[target.x86_64-unknown-linux-gnu]
linker = "lynx-host-gcc"
```
(If necessary substitute your host target triple for x86_64-unknown-linux-gnu.)

To point `cargo` at the correct rustc binary, set the RUSTC environment
variable.

The core library should be usable. You can try by building it as part of your
project:
```bash
cargo +nightly build -Z build-std=core --target x86_64-lynx-lynxos178
```

## Testing

Binaries built with rust can be provided to a LynxOS-178 instance on its file
system, where they can be executed. Rust binaries tend to be large, so it may
be necessary to strip them first.

It is possible to run the Rust testsuite by providing a test runner that takes
the test binary and executes it under LynxOS-178. Most (all?) tests won't run
without std support though, which is not yet supported.

## Cross-compilation toolchains and C code

LYNX MOSA.ic comes with all the tools required to cross-compile C code for
LynxOS-178.

<a id=platform_support_m68k_unknown_linux_gnu></a>

# m68k-unknown-linux-gnu

**Tier: 3**

Motorola 680x0 Linux

## Target Maintainers

[@glaubitz](https://github.com/glaubitz)
[@ricky26](https://github.com/ricky26)

## Requirements

This target requires a Linux/m68k build environment for cross-compilation which
is available on Debian and Debian-based systems, openSUSE and other distributions.

On Debian, it should be sufficient to install a g++ cross-compiler for the m68k
architecture which will automatically pull in additional dependencies such as
the glibc cross development package:

```text
# apt install g++-m68k-linux-gnu
```

Binaries can be run using QEMU user emulation. On Debian-based systems, it should be
sufficient to install the package `qemu-user-static` to be able to run simple static
binaries:

```text
# apt install qemu-user-static
```

To run more complex programs, it will be necessary to set up a Debian/m68k chroot with
the help of the command `debootstrap`:

```text
# apt install debootstrap debian-ports-archive-keyring
# debootstrap --keyring=/usr/share/keyrings/debian-ports-archive-keyring.gpg --arch=m68k unstable debian-68k http://ftp.ports.debian.org/debian-ports
```

This chroot can then seamlessly entered using the normal `chroot` command thanks to
QEMU user emulation:

```text
# chroot /path/to/debian-68k
```

To get started with native builds, which are currently untested, a native Debian/m68k
system can be installed either on real hardware such as 68k-based Commodore Amiga or
Atari systems or emulated environments such as QEMU version 4.2 or newer or ARAnyM.

ISO images for installation are provided by the Debian Ports team and can be obtained
from the Debian CD image server available at:

[https://cdimage.debian.org/cdimage/ports/current](https://cdimage.debian.org/cdimage/ports/current/)

Documentation for Debian/m68k is available on the Debian Wiki at:

[https://wiki.debian.org/M68k](https://wiki.debian.org/M68k)

Support is available either through the `debian-68k` mailing list:

[https://lists.debian.org/debian-68k/](https://lists.debian.org/debian-68k/)

or the `#debian-68k` IRC channel on OFTC network.

## Building

The codegen for this target should be built by default. However, core and std
are currently missing but are being worked on and should become available in
the near future.

## Cross-compilation

This target can be cross-compiled from a standard Debian or Debian-based, openSUSE or any
other distribution which has a basic m68k cross-toolchain available.

## Testing

Currently there is no support to run the rustc test suite for this target.

## Building Rust programs

Rust programs can be built for that target:

```text
rustc --target m68k-unknown-linux-gnu your-code.rs
```

Very simple programs can be run using the `qemu-m68k-static` program:

```text
$ qemu-m68k-static your-code
```

For more complex applications, a chroot or native (emulated) Debian/m68k system are required
for testing.

<a id=platform_support_m68k_unknown_none_elf></a>

# m68k-unknown-none-elf

**Tier: 3**

Bare metal Motorola 680x0

## Target Maintainers

[@knickish](https://github.com/knickish)

## Requirements

This target requires an m68k build environment for cross-compilation which
is available on Debian, Debian-based systems, openSUSE, and other distributions.

On Debian-based systems, it should be sufficient to install a g++ cross-compiler for the m68k
architecture which will automatically pull in additional dependencies such as
the glibc cross development package:

```sh
apt install g++-m68k-linux-gnu
```

Binaries can be run using QEMU user emulation. On Debian-based systems, it should be
sufficient to install the package `qemu-user-static` to be able to run simple static
binaries:

```text
# apt install qemu-user-static
```

To run more complex programs, it will be necessary to set up a Debian/m68k chroot with
the help of the command `debootstrap`:

```text
# apt install debootstrap debian-ports-archive-keyring
# debootstrap --keyring=/usr/share/keyrings/debian-ports-archive-keyring.gpg --arch=m68k unstable debian-68k http://ftp.ports.debian.org/debian-ports
```

This chroot can then seamlessly entered using the normal `chroot` command thanks to
QEMU user emulation:

```text
# chroot /path/to/debian-68k
```

To get started with native builds, which are currently untested, a native Debian/m68k
system can be installed either on real hardware such as 68k-based Commodore Amiga or
Atari systems or emulated environments such as QEMU version 4.2 or newer or ARAnyM.

ISO images for installation are provided by the Debian Ports team and can be obtained
from the Debian CD image server available at:

[https://cdimage.debian.org/cdimage/ports/current](https://cdimage.debian.org/cdimage/ports/current/)

Documentation for Debian/m68k is available on the Debian Wiki at:

[https://wiki.debian.org/M68k](https://wiki.debian.org/M68k)

Support is available either through the `debian-68k` mailing list:

[https://lists.debian.org/debian-68k/](https://lists.debian.org/debian-68k/)

or the `#debian-68k` IRC channel on OFTC network.

## Building

At least llvm version `19.1.5` is required to build `core` and `alloc` for this target, and currently the gnu linker is required, as `lld` has no support for the `m68k` architecture

## Cross-compilation

This target can be cross-compiled from a standard Debian or Debian-based, openSUSE or any
other distribution which has a basic m68k cross-toolchain available.

## Testing

Currently there is no support to run the rustc test suite for this target.

## Building Rust programs

Recommended `.cargo/config.toml`:
```toml
[unstable]
build-std = ["panic_abort", "core", "alloc"]

[target.m68k-unknown-none-elf]
# as we're building for ELF, the m68k-linux linker should be adequate
linker = "m68k-linux-gnu-ld"

# the mold linker also supports m68k, remove the above line and uncomment the
# following ones to use that instead
# linker = "clang"
# rustflags = ["-C", "link-arg=-fuse-ld=/path/to/mold/binary"]
```

Rust programs can be built for this target using:

```sh
cargo build --target m68k-unknown-none-elf
```

Very simple programs can be run using the `qemu-m68k-static` program:

```sh
qemu-m68k-static your-code
```

For more complex applications, a chroot or native m68k system is required for testing.

<a id=platform_support_mips64_openwrt_linux_musl></a>

# `mips64-openwrt-linux-musl`
**Tier: 3**

## Target maintainers

[@Itus-Shield](https://github.com/Itus-Shield)

## Requirements
This target is cross-compiled. There is no support for `std`. There is no
default allocator, but it's possible to use `alloc` by supplying an allocator.

By default, Rust code generated for this target uses `-msoft-float` and is
dynamically linked.

This target generated binaries in the ELF format.

## Building the target
This target is built exclusively within the `OpenWrt` build system via
the `rust-lang` HOST package

## Building Rust programs
Rust does not yet ship pre-compiled artifacts for this target. To compile for
this target, you will either need to build Rust with the target enabled (see
"Building the target" above).

## Testing
As `mips64-openwrt-linux-musl` supports a variety of different environments and does
not support `std`, this target does not support running the Rust testsuite at this
time.

<a id=platform_support_mips64_unknown_linux_muslabi64></a>

# mips64-unknown-linux-muslabi64

**Tier: 3**

Target for 64-bit big endian MIPS Linux programs using musl libc and the N64 ABI.

## Target maintainers

[@Gelbpunkt](https://github.com/Gelbpunkt)

## Requirements

Building the target itself requires a 64-bit big endian MIPS compiler that is
supported by `cc-rs`.

## Building the target

The target can be built by enabling it for a `rustc` build.

```toml
[build]
target = ["mips64-unknown-linux-muslabi64"]
```

Make sure your C compiler is included in `$PATH`, then add it to the
`bootstrap.toml`:

```toml
[target.mips64-unknown-linux-muslabi64]
cc = "mips64-linux-musl-gcc"
cxx = "mips64-linux-musl-g++"
ar = "mips64-linux-musl-ar"
linker = "mips64-linux-musl-gcc"
```

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for this target. To compile for
this target, you will first need to build Rust with the target enabled (see
"Building the target" above).

## Cross-compilation

This target can be cross-compiled from any host.

## Testing

This target can be tested as normal with `x.py` on a 64-bit big endian MIPS
host or via QEMU emulation.

<a id=platform_support_mipsel_sony_psx></a>

# mipsel-sony-psx

**Tier: 3**

Sony PlayStation 1 (psx)

## Designated Developer

[@ayrtonm](https://github.com/ayrtonm)

## Requirements

This target is cross-compiled.
It has no special requirements for the host.

## Building

The target can be built by enabling it for a `rustc` build:

```toml
[build]
build-stage = 1
target = ["mipsel-sony-psx"]
```

## Cross-compilation

This target can be cross-compiled from any host.

## Testing

Currently there is no support to run the rustc test suite for this target.

## Building Rust programs

Since it is Tier 3, rust doesn't ship pre-compiled artifacts for this target.

Just use the `build-std` nightly cargo feature to build the `core` and `alloc` libraries:
```shell
cargo build -Zbuild-std=core,alloc --target mipsel-sony-psx
```

The command above generates an ELF. To generate binaries in the PSEXE format that emulators run, you can use [cargo-psx](https://github.com/ayrtonm/psx-sdk-rs#readme):

```shell
cargo psx build
```

or use `-Clink-arg=--oformat=binary` to produce a flat binary.

<a id=platform_support_mipsel_unknown_linux_gnu></a>

# `mipsel-unknown-linux-gnu`

**Tier: 3**

Little-endian 32 bit MIPS for Linux with `glibc.

## Target maintainers

[@LukasWoodtli](https://github.com/LukasWoodtli)

## Requirements

The target supports std on Linux. Host tools are supported but not tested.


## Building the target

For cross compilation the GNU C compiler for the mipsel architecture needs to
be installed. On Ubuntu install the packets: `gcc-mipsel-linux-gnu` and
`g++-mipsel-linux-gnu`.

Add `mipsel-unknown-linux-gnu` as `target` list in `config.toml`.

## Building Rust programs

Rust does not ship pre-compiled artifacts for this target. To compile for
this target, you will need to build Rust with the target enabled (see
"Building the target" above).

<a id=platform_support_mips_mti_none_elf></a>

# `mips*-mti-none-elf`

**Tier: 3**

MIPS32r2 baremetal softfloat, Big Endian or Little Endian.

- mips-mti-none-elf
- mipsel-mti-none-elf

## Target maintainers

[@wzssyqa](https://github.com/wzssyqa)

## Background

These 2 targets, aka mips-mti-none-elf and mipsel-mti-none-elf, are for
baremetal development of MIPS32r2. The lld is used instead of Gnu-ld.

## Requirements

The target only supports cross compilation and no host tools. The target
supports `alloc` with a default allocator while only support `no-std` development.

The vendor name `mti` follows the naming of gcc to indicate MIPS32r2.

## Cross-compilation toolchains and C code

Compatible C code can be built for this target on any compiler that has a MIPS32r2
target.  On clang and ld.lld linker, it can be generated using the
`-march=mips`/`-march=mipsel`, `-mabi=32` with llvm features flag
`features=+mips32r2,+soft-float,+noabicalls`.

<a id=platform_support_mips_release_6></a>

# mipsisa\*r6\*-unknown-linux-gnu\*

**Tier: 3**

[MIPS Release 6](https://s3-eu-west-1.amazonaws.com/downloads-mips/documents/MD00083-2B-MIPS64INT-AFP-06.01.pdf), or simply MIPS R6, is the latest iteration of the MIPS instruction set architecture (ISA).

MIPS R6 is experimental in nature, as there is not yet real hardware. However, Qemu emulation is available and we have two Linux distros maintained for development and evaluation purposes. This documentation describes the Rust support for MIPS R6 targets under `mipsisa*r6*-unknown-linux-gnu*`.

The target name follow this format: `<machine>-<vendor>-<os><abi_suffix>`, where `<machine>` specifies the CPU family/model, `<vendor>` specifies the vendor and `<os>` the operating system name. The `<abi_suffix>` denotes the base ABI (32/n32/64/o64).

| ABI suffix | Description                        |
|------------|------------------------------------|
| abi64      | Uses the 64-bit (64) ABI           |
| abin32     | Uses the n32 ABI                   |
| N/A        | Uses the (assumed) 32-bit (32) ABI |

## Target Maintainers

[@chenx97](https://github.com/chenx97)
[@709924470](https://github.com/709924470)
[@Cyanoxygen](https://github.com/Cyanoxygen)
[@Fearyncess](https://github.com/Fearyncess)

## Requirements

### C/C++ Toolchain

A GNU toolchain for one of the MIPS R6 target is required. [AOSC OS](https://aosc.io/) provides working native and cross-compiling build environments. You may also supply your own a toolchain consisting of recent versions of GCC and Binutils.

### Target libraries

A minimum set of libraries is required to perform dynamic linking:

- GNU glibc
- OpenSSL
- Zlib
- Linux API Headers

This set of libraries should be installed to make up minimal target sysroot.

For AOSC OS, You may install such a sysroot with the following commands:

```sh
cd /tmp

# linux+api, glibc, and file system structure are included in the toolchain.
sudo apt install gcc+cross-mips64r6el binutils+cross-mips64r6el

# Download and extract required libraries.
wget https://repo.aosc.io/debs/pool/stable/main/z/zlib_1.2.13-0_mips64r6el.deb -O zlib.deb
wget https://repo.aosc.io/debs/pool/stable/main/o/openssl_1.1.1q-1_mips64r6el.deb -O openssl.deb

# Extract them to your desired location.
for i in zlib openssl ; do
    sudo dpkg-deb -vx $i.deb /var/ab/cross-root/mips64r6el
done

# Workaround a possible ld bug when using -Wl,-Bdynamic.
sudo sed -i 's|/usr|=/usr|g' /var/ab/cross-root/mips64r6el/usr/lib/libc.so
```

For other distros, you may build them manually.

## Building

The following procedure outlines the build process for the MIPS64 R6 target with 64-bit (64) ABI (`mipsisa64r6el-unknown-linux-gnuabi64`).

### Prerequisite: Disable debuginfo

An LLVM bug makes rustc crash if debug or debug info generation is enabled. You need to edit `bootstrap.toml` to disable this:

```toml
[rust]
debug = false
debug-info-level = 0
```

### Prerequisite: Enable rustix's libc backend

The crate `rustix` may try to link itself against MIPS R2 assembly, resulting in linkage error. To avoid this, you may force `rustix` to use its fallback `libc` backend by setting relevant `RUSTFLAGS`:

```sh
export RUSTFLAGS="--cfg rustix_use_libc"
```

This will trigger warnings during build, as `-D warnings` is enabled by default. Disable `-D warnings` by editing `bootstrap.toml` to append the following:

```toml
[rust]
deny-warnings = false
```

### Prerequisite: Supplying OpenSSL

As a Tier 3 target, `openssl_sys` lacks the vendored OpenSSL library for this target. You will need to provide a prebuilt OpenSSL library to link `cargo`. Since we have a pre-configured sysroot, we can point to it directly:

```sh
export MIPSISA64R6EL_UNKNOWN_LINUX_GNUABI64_OPENSSL_NO_VENDOR=y
export MIPSISA64R6EL_UNKNOWN_LINUX_GNUABI64_OPENSSL_DIR="/var/ab/cross-root/mips64r6el/usr"
```

On Debian, you may need to provide library path and include path separately:

```sh
export MIPSISA64R6EL_UNKNOWN_LINUX_GNUABI64_OPENSSL_NO_VENDOR=y
export MIPSISA64R6EL_UNKNOWN_LINUX_GNUABI64_OPENSSL_LIB_DIR="/usr/lib/mipsisa64r6el-linux-gnuabi64/"
export MIPSISA64R6EL_UNKNOWN_LINUX_GNUABI64_OPENSSL_INCLUDE_DIR="/usr/include"
```

### Launching `x.py`

```toml
[build]
target = ["mipsisa64r6el-unknown-linux-gnuabi64"]
```

Make sure that `mipsisa64r6el-unknown-linux-gnuabi64-gcc` is available from your executable search path (`$PATH`).

Alternatively, you can specify the directories to all necessary toolchain executables in `bootstrap.toml`:

```toml
[target.mipsisa64r6el-unknown-linux-gnuabi64]
# Adjust the paths below to point to your toolchain installation prefix.
cc = "/toolchain_prefix/bin/mipsisa64r6el-unknown-linux-gnuabi64-gcc"
cxx = "/toolchain_prefix/bin/mipsisa64r6el-unknown-linux-gnuabi64-g++"
ar = "/toolchain_prefix/bin/mipsisa64r6el-unknown-linux-gnuabi64-gcc-ar"
ranlib = "/toolchain_prefix/bin/mipsisa64r6el-unknown-linux-gnuabi64-ranlib"
linker = "/toolchain_prefix/bin/mipsisa64r6el-unknown-linux-gnuabi64-gcc"
```

Or, you can specify your cross compiler toolchain with an environment variable:

```sh
export CROSS_COMPILE="/opt/abcross/mips64r6el/bin/mipsisa64r6el-aosc-linux-gnuabi64-"
```

Finally, launch the build script:

```sh
./x.py build
```

### Tips

- Avoid setting `cargo-native-static` to `false`, as this will result in a redundant artifact error while building clippy:
    ```text
    duplicate artifacts found when compiling a tool, this typically means that something was recompiled because a transitive dependency has different features activated than in a previous build:

    the following dependencies have different features:
        syn 2.0.8 (registry+https://github.com/rust-lang/crates.io-index)
    `clippy-driver` additionally enabled features {"full"} at ...
    `cargo` additionally enabled features {} at ...

    to fix this you will probably want to edit the local src/tools/rustc-workspace-hack/Cargo.toml crate, as that will update the dependency graph to ensure that these crates all share the same feature set
    thread 'main' panicked at 'tools should not compile multiple copies of the same crate', tool.rs:250:13
    note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
    ```

## Building Rust programs

To build Rust programs for MIPS R6 targets, for instance, the `mipsisa64r6el-unknown-linux-gnuabi64` target:

```bash
cargo build --target mipsisa64r6el-unknown-linux-gnuabi64
```

## Testing

To test a cross-compiled binary on your build system, install the Qemu user emulator that support the MIPS R6 architecture (`qemu-user-mipsel` or `qemu-user-mips64el`). GCC runtime libraries (`libgcc_s`) for the target architecture should be present in target sysroot to run the program.

```sh
env \
    CARGO_TARGET_MIPSISA64R6EL_UNKNOWN_LINUX_GNUABI64_LINKER="/opt/abcross/mips64r6el/bin/mipsisa64r6el-aosc-linux-gnuabi64-gcc" \
    CARGO_TARGET_MIPSISA64R6EL_UNKNOWN_LINUX_GNUABI64_RUNNER="qemu-mips64el-static -L /var/ab/cross-root/mips64r6el" \
    cargo run --release \
        --target mipsisa64r6el-unknown-linux-gnuabi64
```

## Tips for building Rust programs for MIPS R6

- Until we finalize a fix, please make sure the aforementioned workarounds for `rustix` crate and LLVM are always applied. This can be achieved by setting the relevant environment variables, and editing `Cargo.toml` before building.

<a id=platform_support_nvptx64_nvidia_cuda></a>

# `nvptx64-nvidia-cuda`

**Tier: 2**

This is the target meant for deploying code for Nvidia® accelerators based on their CUDA
platform.

## Target maintainers

[@RDambrosio016](https://github.com/RDambrosio016)
[@kjetilkjeka](https://github.com/kjetilkjeka)

## Requirements

This target is `no_std` and will typically be built with crate-type `cdylib` and `-C linker-flavor=llbc`, which generates PTX.
The necessary components for this workflow are:

- `rustup toolchain add nightly`
- `rustup component add llvm-tools --toolchain nightly`
- `rustup component add llvm-bitcode-linker --toolchain nightly`

There are two options for using the core library:

- `rustup component add rust-src --toolchain nightly` and build using `-Z build-std=core`.
- `rustup target add nvptx64-nvidia-cuda --toolchain nightly`

### Target and features

It is generally necessary to specify the target, such as `-C target-cpu=sm_89`, because the default is very old. This implies two target features: `sm_89` and `ptx78` (and all preceding features within `sm_*` and `ptx*`). Rust will default to using the oldest PTX version that supports the target processor (see [this table](https://docs.nvidia.com/cuda/parallel-thread-execution/index.html#release-notes-ptx-release-history)), which maximizes driver compatibility.
One can use `-C target-feature=+ptx80` to choose a later PTX version without changing the target (the default in this case, `ptx78`, requires CUDA driver version 11.8, while `ptx80` would require driver version 12.0).
Later PTX versions may allow more efficient code generation.

Although Rust follows LLVM in representing `ptx*` and `sm_*` as target features, they should be thought of as having crate granularity, set via (either via `-Ctarget-cpu` and optionally `-Ctarget-feature`).
While the compiler accepts `#[target_feature(enable = "ptx80", enable = "sm_89")]`, it is not supported, may not behave as intended, and may become erroneous in the future.

## Building Rust kernels

A `no_std` crate containing one or more functions with `extern "ptx-kernel"` can be compiled to PTX using a command like the following.

```console
$ RUSTFLAGS='-Ctarget-cpu=sm_89' cargo +nightly rustc --target=nvptx64-nvidia-cuda -Zbuild-std=core --crate-type=cdylib -- -Clinker-flavor=llbc -Zunstable-options
```

Intrinsics in `core::arch::nvptx` may use `#[cfg(target_feature = "...")]`, thus it's necessary to use `-Zbuild-std=core` with appropriate `RUSTFLAGS`. The following components are needed for this workflow:

```console
$ rustup component add rust-src --toolchain nightly
$ rustup component add llvm-tools --toolchain nightly
$ rustup component add llvm-bitcode-linker --toolchain nightly
```


<!-- FIXME: fill this out

## Requirements

Does the target support host tools, or only cross-compilation? Does the target
support std, or alloc (either with a default allocator, or if the user supplies
an allocator)?

Document the expectations of binaries built for the target. Do they assume
specific minimum features beyond the baseline of the CPU/environment/etc? What
version of the OS or environment do they expect?

Are there notable `#[target_feature(...)]` or `-C target-feature=` values that
programs may wish to use?

What calling convention does `extern "C"` use on the target?

What format do binaries use by default? ELF, PE, something else?

## Building the target

If Rust doesn't build the target by default, how can users build it? Can users
just add it to the `target` list in `bootstrap.toml`?

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for this target. To compile for
this target, you will either need to build Rust with the target enabled (see
"Building the target" above), or build your own copy of `core` by using
`build-std` or similar.

## Testing

Does the target support running binaries, or do binaries have varying
expectations that prevent having a standard way to run them? If users can run
binaries, can they do so in some common emulator, or do they need native
hardware? Does the target support running the Rust testsuite?

## Cross-compilation toolchains and C code

Does the target support C code? If so, what toolchain target should users use
to build compatible C code? (This may match the target triple, or it may be a
toolchain for a different target triple, potentially with specific options or
caveats.)

-->

<a id=platform_support_powerpc_unknown_openbsd></a>

## Designated maintainers

`powerpc-unknown-openbsd` is not maintained by OpenBSD developers and there are currently no active rustc maintainers.

<a id=platform_support_powerpc_unknown_linux_gnuspe></a>

# powerpc-unknown-linux-gnuspe

**Tier: 3**

`powerpc-unknown-linux-gnuspe` is a target for Linux on 32-bit PowerPC
processors that implement the Signal Processing Engine (SPE), such as e500, and
uses a different ABI than standard `powerpc-unknown-linux-gnu`.
When building for other 32-bit PowerPC processors, use
`powerpc-unknown-linux-gnu` instead.

See also [Debian Wiki](https://wiki.debian.org/PowerPCSPEPort) for details on
this platform, and [ABI reference](https://web.archive.org/web/20120608163804/https://www.power.org/resources/downloads/Power-Arch-32-bit-ABI-supp-1.0-Unified.pdf)
for details on SPE ABI.

Note that support for PowerPC SPE by GCC was [removed in GCC 9](https://gcc.gnu.org/gcc-8/changes.html),
so recent GCC cannot be used as linker/compiler for this target.

## Target maintainers

There are currently no formally documented target maintainers.

<a id=platform_support_powerpc_unknown_linux_muslspe></a>

# powerpc-unknown-linux-muslspe

**Tier: 3**

This target is very similar to already existing ones like `powerpc-unknown-linux-musl` and `powerpc-unknown-linux-gnuspe`.
This one has PowerPC SPE support for musl. Unfortunately, the last supported gcc version with PowerPC SPE is 8.4.0.

See also [platform support documentation of `powerpc-unknown-linux-gnuspe`](#powerpc_unknown_linux_gnuspe) for information about PowerPC SPE.

## Target maintainers

[@BKPepe](https://github.com/BKPepe)

## Requirements

This target is cross-compiled. There is no support for `std`. There is no
default allocator, but it's possible to use `alloc` by supplying an allocator.

This target generated binaries in the ELF format.

## Building the target

This target was tested and used within the `OpenWrt` build system for CZ.NIC Turris 1.x routers using Freescale P2020.

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for this target. To compile for
this target, you will either need to build Rust with the target enabled (see
"Building the target" above), or build your own copy of `core` by using
`build-std` or similar.

## Testing

This is a cross-compiled target and there is no support to run rustc test suite.

<a id=platform_support_aix></a>

# `powerpc64-ibm-aix`

**Tier: 3**

Rust for AIX operating system, currently only 64-bit PowerPC is supported.

## Target maintainers

[@daltenty](https://github.com/daltenty)
[@gilamn5tr](https://github.com/gilamn5tr)

## Requirements

This target supports host tools, std and alloc. This target cannot be cross-compiled as for now, mainly because of the unavailability of system linker on other platforms.

Binary built for this target is expected to run on Power7 or newer CPU, and AIX 7.2 or newer version.

Binary format of this platform is [XCOFF](https://www.ibm.com/docs/en/aix/7.2?topic=formats-xcoff-object-file-format). Archive file format is ['AIX big format'](https://www.ibm.com/docs/en/aix/7.2?topic=formats-ar-file-format-big).

## Testing

This target supports running test suites natively, but it's not available to cross-compile and execute in emulator.

## Interoperability with C code

This target supports C code. C code compiled by XL, Open XL and Clang are compatible with Rust. Typical triple of AIX on 64-bit PowerPC of these compilers are also `powerpc64-ibm-aix`.

<a id=platform_support_powerpc64_unknown_linux_musl></a>

# powerpc64-unknown-linux-musl

**Tier: 3**

Target for 64-bit big endian PowerPC Linux programs using musl libc.
This target uses the ELF v2 ABI.

## Target maintainers

[@Gelbpunkt](https://github.com/Gelbpunkt)
[@famfo](https://github.com/famfo)
[@neuschaefer](https://github.com/neuschaefer)

## Requirements

Building the target itself requires a 64-bit big endian PowerPC compiler that
is supported by `cc-rs`.

## Building the target

The target can be built by enabling it for a `rustc` build.

```toml
[build]
target = ["powerpc64-unknown-linux-musl"]
```

Make sure your C compiler is included in `$PATH`, then add it to the
`bootstrap.toml`:

```toml
[target.powerpc64-unknown-linux-musl]
cc = "powerpc64-linux-musl-gcc"
cxx = "powerpc64-linux-musl-g++"
ar = "powerpc64-linux-musl-ar"
linker = "powerpc64-linux-musl-gcc"
```

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for this target. To compile for
this target, you will first need to build Rust with the target enabled (see
"Building the target" above).

## Cross-compilation

This target can be cross-compiled from any host.

## Testing

This target can be tested as normal with `x.py` on a 64-bit big endian PowerPC
host or via QEMU emulation.

<a id=platform_support_powerpc64le_unknown_linux_gnu></a>

# `powerpc64le-unknown-linux-gnu`

**Tier: 2**

Target for 64-bit little endian PowerPC Linux programs

## Target maintainers

[@daltenty](https://github.com/daltenty)
[@gilamn5tr](https://github.com/gilamn5tr)

## Requirements

Building the target itself requires a 64-bit little endian PowerPC compiler that is supported by `cc-rs`.

## Building the target

The target can be built by enabling it for a `rustc` build.

```toml
[build]
target = ["powerpc64le-unknown-linux-gnu"]
```

Make sure your C compiler is included in `$PATH`, then add it to the `config.toml`:

```toml
[target.powerpc64le-unknown-linux-gnu]
cc = "powerpc64le-linux-gnu-gcc"
cxx = "powerpc64le-linux-gnu-g++"
ar = "powerpc64le-linux-gnu-ar"
linker = "powerpc64le-linux-gnu-gcc"
```

## Building Rust programs

This target is distributed through `rustup`, and requires no special
configuration.

## Cross-compilation

This target can be cross-compiled from any host.

## Testing

This target can be tested as normal with `x.py` on a 64-bit little endian
PowerPC host or via QEMU emulation.

<a id=platform_support_powerpc64le_unknown_linux_musl></a>

# powerpc64le-unknown-linux-musl

**Tier: 2**

Target for 64-bit little endian PowerPC Linux programs using musl libc.

## Target maintainers

[@Gelbpunkt](https://github.com/Gelbpunkt)
[@famfo](https://github.com/famfo)
[@neuschaefer](https://github.com/neuschaefer)

## Requirements

Building the target itself requires a 64-bit little endian PowerPC compiler that is supported by `cc-rs`.

## Building the target

The target can be built by enabling it for a `rustc` build.

```toml
[build]
target = ["powerpc64le-unknown-linux-musl"]
```

Make sure your C compiler is included in `$PATH`, then add it to the `bootstrap.toml`:

```toml
[target.powerpc64le-unknown-linux-musl]
cc = "powerpc64le-linux-musl-gcc"
cxx = "powerpc64le-linux-musl-g++"
ar = "powerpc64le-linux-musl-ar"
linker = "powerpc64le-linux-musl-gcc"
```

## Building Rust programs

This target are distributed through `rustup`, and otherwise require no
special configuration.

## Cross-compilation

This target can be cross-compiled from any host.

## Testing

This target can be tested as normal with `x.py` on a 64-bit little endian
PowerPC host or via QEMU emulation.

<a id=platform_support_riscv32e_unknown_none_elf></a>

# `riscv32{e,em,emc}-unknown-none-elf`

**Tier: 3**

Bare-metal target for RISC-V CPUs with the RV32E, RV32EM and RV32EMC ISAs.

## Target maintainers

[@hegza](https://github.com/hegza)

## Requirements

The target is cross-compiled, and uses static linking. No external toolchain is
required and the default `rust-lld` linker works, but you must specify a linker
script.

## Building the target

This target is included in Rust and can be installed via `rustup`.

## Testing

This is a cross-compiled `no-std` target, which must be run either in a
simulator or by programming them onto suitable hardware. It is not possible to
run the Rust test-suite on this target.

## Cross-compilation toolchains and C code

This target supports C code. If interlinking with C or C++, you may need to use
`riscv32-unknown-elf-gcc` as a linker instead of `rust-lld`.

<a id=platform_support_riscv32_unknown_none_elf></a>

# `riscv32{i,im,ima,imc,imac,imafc}-unknown-none-elf`

**Tier: 2**

Bare-metal target for RISC-V CPUs with the RV32I, RV32IM, RV32IMC, RV32IMAFC and RV32IMAC ISAs.

**Tier: 3**

Bare-metal target for RISC-V CPUs with the RV32IMA ISA.

## Target maintainers

* Rust Embedded Working Group, [RISC-V team](https://github.com/rust-embedded/wg#the-risc-v-team)

## Requirements

The target is cross-compiled, and uses static linking. No external toolchain
is required and the default `rust-lld` linker works, but you must specify
a linker script. The [`riscv-rt`] crate provides a suitable one. The
[`riscv-rust-quickstart`] repository gives an example of an RV32 project.

[`riscv-rt`]: https://crates.io/crates/riscv-rt
[`riscv-rust-quickstart`]: https://github.com/riscv-rust/riscv-rust-quickstart

## Building the target

This target is included in Rust and can be installed via `rustup`.

## Testing

This is a cross-compiled `no-std` target, which must be run either in a simulator
or by programming them onto suitable hardware. It is not possible to run the
Rust test-suite on this target.

## Cross-compilation toolchains and C code

This target supports C code. If interlinking with C or C++, you may need to use
`riscv32-unknown-elf-gcc` as a linker instead of `rust-lld`.

<a id=platform_support_riscv32im_risc0_zkvm_elf></a>

# `riscv32im-risc0-zkvm-elf`

**Tier: 3**

RISC Zero's Zero Knowledge Virtual Machine (zkVM) implementing the RV32IM instruction set.

## Target maintainers

[@flaub](https://github.com/flaub)
[@jbruestle](https://github.com/jbruestle)

## Background

This target is an execution environment to produce a proof of execution of
a RISC-V ELF binary and any output that the developer of the binary wishes to
display publicly. In order to do this, the target will execute the ELF to
generate a receipt containing the output of the computation along with a
cryptographic seal. This receipt can be verified to ensure the integrity of the
computation and its result. This target is implemented as software only; it has
no hardware implementation.

We have a cargo extension called [cargo-risczero] that allow users to generate
project templates, install tools for improved user experience, build the binary
using a docker environment and test programs.

## Requirements

The target only supports cross compilation and no host tools. The target
supports `alloc` with a default allocator and has experimental support for
`std`. The target expects the binaries to be in ELF.

The target's execution environment is single threaded, non-preemptive, and does
not support any privileged instructions, nor unaligned accesses. At the time of
writing the VM has 192 MB of memory and text/data, heap, and stack need to be
with in the address range `0x400` - `0x0C000000`. The binaries themselves expect
no operating system and can be thought of as running on bare-metal. The target
does not use `#[target_feature(...)]` or `-C target-feature=` values.

Calling `extern "C"` on the target uses the C calling convention outlined in the
[RISC-V specification].

## Building for the zkVM

Programs for the zkVM could be built by adding it to the `target` list in
`bootstrap.toml`. However, we recommend building programs in our starter template
generated by the [cargo-risczero] utility and the [risc0-build] crate. This
crate calls `rustc` with `-C "link-arg=-Ttext=` so that it maps the text in the
appropriate location as well as generating variables that represent the ELF and
a unique ID associated with the ELF. The starter template provides developers
with system calls that are useful to zero knowledge computing such as writing to
the public output, hashing using sha256, and multiply big integers.

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for this target. To compile for
this target, you will either need to build Rust with the target enabled (see
"Building the target" above). We do not recommend using `build-std` as we have
run into issues building core in the past on our starter template. An alternate
solution is to download the risc0 tool chain by running `cargo risczero install`.

## Testing

Note: the target is implemented as a software emulator called the zkVM and there
is no hardware implementation of the target.

The most practical way to test the target program is to use our starter template
that can be generated by using the `cargo risczero new` command. The template
generates a sample "host" and "guest" code. The guest code compiled to the
target (which is RV32IM) whereas the "host" code is compiled to run on the
programmer's machine running either a Linux distribution or macOS. The host
program is responsible for running the guest binary on the zkVM and retrieving
its public output.

The target currently does not support running the Rust test suite.

## Cross-compilation toolchains and C code

Compatible C code can be built for this target on any compiler that has a RV32IM
target.  On clang and ld.lld linker, it can be generated using the
`-march=rv32im`, `-mabi=ilp32` with llvm features flag `features=+m` and llvm
target `riscv32-unknown-none`.

[RISC-V specification]: https://riscv.org/wp-content/uploads/2015/01/riscv-calling.pdf
[cargo-risczero]: https://docs.rs/cargo-risczero/latest/cargo_risczero/
[risc0-build]: https://crates.io/crates/risc0-build

<a id=platform_support_riscv32imac_unknown_xous_elf></a>

# riscv32imac-unknown-xous-elf

**Tier: 3**

Xous microkernel, message-based operating system that powers devices such as Precursor and Betrusted. The operating system is written entirely in Rust, so no additional software is required to compile programs for Xous.

## Target maintainers

[@xobs](https://github.com/xobs)

## Requirements


Building the target itself requires a RISC-V compiler that is supported by `cc-rs`. For example, you can use the prebuilt [xPack](https://github.com/xpack-dev-tools/riscv-none-elf-gcc-xpack/releases/latest) toolchain.

Cross-compiling programs does not require any additional software beyond the toolchain. Prebuilt versions of the toolchain are available [from Betrusted](https://github.com/betrusted-io/rust/releases).

## Building the target

The target can be built by enabling it for a `rustc` build.

```toml
[build]
target = ["riscv32imac-unknown-xous-elf"]
```

Make sure your C compiler is included in `$PATH`, then add it to the `bootstrap.toml`:

```toml
[target.riscv32imac-unknown-xous-elf]
cc = "riscv-none-elf-gcc"
ar = "riscv-none-elf-ar"
```

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for this target. To compile for
this target, you will need to do one of the following:

* Build Rust with the target enabled (see "Building the target" above)
* Build your own copy of `core` by using `build-std` or similar
* Download a prebuilt toolchain [from Betrusted](https://github.com/betrusted-io/rust/releases)

## Cross-compilation

This target can be cross-compiled from any host.

## Testing

Currently there is no support to run the rustc test suite for this target.

<a id=platform_support_riscv64gc_unknown_linux_gnu></a>

# `riscv64gc-unknown-linux-gnu`

**Tier: 2 (with Host Tools)**

RISC-V targets using the *RV64I* base instruction set with the *G* collection of extensions, as well as the *C* extension.


## Target maintainers

[@kito-cheng](https://github.com/kito-cheng)
[@michaelmaitland](https://github.com/michaelmaitland)
[@robin-randhawa-sifive](https://github.com/robin-randhawa-sifive)
[@topperc](https://github.com/topperc)

## Requirements

This target requires:

* Linux Kernel version 4.20 or later
* glibc 2.17 or later


## Building the target

These targets are distributed through `rustup`, and otherwise require no
special configuration.

If you need to build your own Rust for some reason though, the targets can be
enabled in `bootstrap.toml`. For example:

```toml
[build]
target = ["riscv64gc-unknown-linux-gnu"]
```


## Building Rust programs


On a RISC-V host, the `riscv64gc-unknown-linux-gnu` target should be automatically
installed and used by default.

On a non-RISC-V host, add the target:

```bash
rustup target add riscv64gc-unknown-linux-gnu
```

Then cross compile crates with:

```bash
cargo build --target riscv64gc-unknown-linux-gnu
```


## Testing

There are no special requirements for testing and running the targets.
For testing cross builds on the host, please refer to the "Cross-compilation
toolchains and C code"
section below.


## Cross-compilation toolchains and C code

A RISC-V toolchain can be obtained for Windows/Mac/Linux from the
[`riscv-gnu-toolchain`](https://github.com/riscv-collab/riscv-gnu-toolchain)
repository. Binaries are available via
[embecosm](https://www.embecosm.com/resources/tool-chain-downloads/#riscv-linux),
and may also be available from your OS's package manager.

On Ubuntu, a RISC-V toolchain can be installed with:

```bash
apt install gcc-riscv64-linux-gnu g++-riscv64-linux-gnu libc6-dev-riscv64-cross
```

Depending on your system, you may need to configure the target to use the GNU
GCC linker. To use it, add the following to your `.cargo/config.toml`:

```toml
[target.riscv64gc-unknown-linux-gnu]
linker = "riscv64-linux-gnu-gcc"
```

If your `riscv64-linux-gnu-*` toolchain is not in your `PATH` you may need to
configure additional settings:

```toml
[target.riscv64gc-unknown-linux-gnu]
# Adjust the paths to point at your toolchain
cc = "/TOOLCHAIN_PATH/bin/riscv64-linux-gnu-gcc"
cxx = "/TOOLCHAIN_PATH/bin/riscv64-linux-gnu-g++"
ar = "/TOOLCHAIN_PATH/bin/riscv64-linux-gnu-ar"
ranlib = "/TOOLCHAIN_PATH/bin/riscv64-linux-gnu-ranlib"
linker = "/TOOLCHAIN_PATH/bin/riscv64-linux-gnu-gcc"
```

To test cross compiled binaries on a non-RISCV-V host, you can use
[`qemu`](https://www.qemu.org/docs/master/system/target-riscv.html).
On Ubuntu, a RISC-V emulator can be obtained with:

```bash
apt install qemu-system-riscv64
```

Then, in `.cargo/config.toml` set the `runner`:

```toml
[target.riscv64gc-unknown-linux-gnu]
runner = "qemu-riscv64-static -L /usr/riscv64-linux-gnu -cpu rv64"
```

On Mac and Linux, it's also possible to use
[`lima`](https://github.com/lima-vm/lima) to emulate RISC-V in a similar way to
how WSL2 works on Windows:

```bash
limactl start template://riscv
limactl shell riscv
```

Using [Docker (with BuildKit)](https://docs.docker.com/build/buildkit/) the
[`riscv64/ubuntu`](https://hub.docker.com/r/riscv64/ubuntu) image can be used
to build or run `riscv64gc-unknown-linux-gnu` binaries.

```bash
docker run --platform linux/riscv64 -ti --rm --mount "type=bind,src=$(pwd),dst=/checkout" riscv64/ubuntu bash
```

<a id=platform_support_riscv64gc_unknown_linux_musl></a>

# riscv64gc-unknown-linux-musl

**Tier: 2**

Target for RISC-V Linux programs using musl libc.

## Target maintainers

[@Amanieu](https://github.com/Amanieu)
[@kraj](https://github.com/kraj)

## Requirements

Building the target itself requires a RISC-V compiler that is supported by `cc-rs`.

## Building the target

The target can be built by enabling it for a `rustc` build.

```toml
[build]
target = ["riscv64gc-unknown-linux-musl"]
```

Make sure your C compiler is included in `$PATH`, then add it to the `bootstrap.toml`:

```toml
[target.riscv64gc-unknown-linux-musl]
cc = "riscv64-linux-gnu-gcc"
cxx = "riscv64-linux-gnu-g++"
ar = "riscv64-linux-gnu-ar"
linker = "riscv64-linux-gnu-gcc"
```

## Building Rust programs

This target are distributed through `rustup`, and otherwise require no
special configuration.

## Cross-compilation

This target can be cross-compiled from any host.

## Testing

This target can be tested as normal with `x.py` on a RISC-V host or via QEMU
emulation.

<a id=platform_support_riscv64a23_unknown_linux_gnu></a>

# `riscv64a23-unknown-linux-gnu`

**Tier: 3**

RISC-V target using the ratified [RVA23 Profile](https://github.com/riscv/riscv-profiles/blob/main/src/rva23-profile.adoc).
This target will enable all mandary features of rva23u64 by default.

## Target maintainers

[@ZhongyaoChen](https://github.com/ZhongyaoChen)
[@CaiWeiran](https://github.com/CaiWeiran)

## Requirements

This target can be sucessfully build on the following platform: ubuntu 24.04 (Linux Kernel version 6.8.0, glibc 2.39).

Other platforms may work, but are not tested. Please contanct if you encounter any issues.

## Building the target

Tier-3 target is not distributed through `rustup`.

You need to build your own Rust, the target can be build with:

```bash
./x build --target riscv64a23-unknown-linux-gnu
```

## Building Rust programs

Add the toolchain:

```bash
rustup toolchain link rva23-toolchain {path-to-rust}/build/host/stage2
```

Then cross compile crates with:

```bash
RUSTFLAGS="-C linker=riscv64-linux-gnu-gcc" cargo +rva23-toolchain build --target=riscv64a23-unknown-linux-gnu
```

<a id=platform_support_s390x_unknown_linux_gnu></a>

# `s390x-unknown-linux-gnu`

**Tier: 2 (with Host Tools)**

IBM z/Architecture (s390x) targets (including IBM Z and LinuxONE) running Linux.

## Target maintainers

[@uweigand](https://github.com/uweigand)
[@cuviper](https://github.com/cuviper)

## Requirements

This target requires:

* Linux Kernel version 3.2 or later
* glibc 2.17 or later

Code generated by the target uses the z/Architecture ISA assuming a minimum
architecture level of z10 (Eighth Edition of the z/Architecture Principles
of Operation), and is compliant with the s390x ELF ABI.

Reference material:

* [z/Architecture Principles of Operation][s390x-isa]
* [z/Architecture ELF Application Binary Interface][s390x-abi]

[s390x-isa]: https://publibfp.dhe.ibm.com/epubs/pdf/a227832d.pdf
[s390x-abi]: https://github.com/IBM/s390x-abi

## Building the target

This target is distributed through `rustup`, and otherwise requires no
special configuration.

If you need to build your own Rust for some reason though, the target can be
enabled in `bootstrap.toml`. For example:

```toml
[build]
target = ["s390x-unknown-linux-gnu"]
```

## Building Rust programs

On a s390x Linux host, the `s390x-unknown-linux-gnu` target should be
automatically installed and used by default.

On a non-s390x host, add the target:

```bash
rustup target add s390x-unknown-linux-gnu
```

Then cross compile crates with:

```bash
cargo build --target s390x-unknown-linux-gnu
```

## Testing

There are no special requirements for testing and running the target.
For testing cross builds on the host, please refer to the "Cross-compilation
toolchains and C code" section below.

If you want to do native testing but do not have your own s390x
machine, there are several options how to get access to one:

* The [IBM LinuxONE Community Cloud][cloud-community] provides a
  self-service portal where you can create s390x virtual machine
  instances.  These are intended for temporary use (limited to 120 days).

* The [IBM LinuxONE Open Source Cloud][cloud-opensource] provides
  permanent access to s390x machines.  This requires approval by IBM,
  which will normally be granted if you're planning to use the machine
  to work on an open-source project that is relevant to the IBM Z
  ecosystem - the Rust compiler would certainly qualify.

[cloud-community]: https://linuxone.cloud.marist.edu/
[cloud-opensource]: https://community.ibm.com/zsystems/form/l1cc-oss-vm-request/

## Cross-compilation toolchains and C code

Rust code built using the target is compatible with C code compiled with
GCC or Clang using the `s390x-unknown-linux-gnu` target triple (via either
native or cross-compilation).

On Ubuntu, a s390x cross-toolchain can be installed with:

```bash
apt install gcc-s390x-linux-gnu g++-s390x-linux-gnu libc6-dev-s390x-cross
```

Depending on your system, you may need to configure the target to use the GNU
GCC linker. To use it, add the following to your `.cargo/config.toml`:

```toml
[target.s390x-unknown-linux-gnu]
linker = "s390x-linux-gnu-gcc"
```

If your `s390x-linux-gnu-*` toolchain is not in your `PATH` you may need to
configure additional settings:

```toml
[target.s390x-unknown-linux-gnu]
# Adjust the paths to point at your toolchain
cc = "/TOOLCHAIN_PATH/bin/s390x-linux-gnu-gcc"
cxx = "/TOOLCHAIN_PATH/bin/s390x-linux-gnu-g++"
ar = "/TOOLCHAIN_PATH/bin/s390x-linux-gnu-ar"
ranlib = "/TOOLCHAIN_PATH/bin/s390x-linux-gnu-ranlib"
linker = "/TOOLCHAIN_PATH/bin/s390x-linux-gnu-gcc"
```

To test cross compiled binaries on a non-s390x host, you can use
[`qemu`](https://www.qemu.org/docs/master/system/target-s390x.html).
On Ubuntu, a s390x emulator can be obtained with:

```bash
apt install qemu-system-s390x
```

Then, in `.cargo/config.toml` set the `runner`:

```toml
[target.s390x-unknown-linux-gnu]
runner = "qemu-s390x-static -L /usr/s390x-linux-gnu"
```

<a id=platform_support_s390x_unknown_linux_musl></a>

# `s390x-unknown-linux-musl`

**Tier: 3**

IBM z/Architecture (s390x) targets (including IBM Z and LinuxONE) running Linux.

## Target maintainers

[@uweigand](https://github.com/uweigand)

## Requirements

This target requires:

* Linux Kernel version 3.2 or later
* musl 1.2.3 or later

Code generated by the target uses the z/Architecture ISA assuming a minimum
architecture level of z10 (Eighth Edition of the z/Architecture Principles
of Operation), and is compliant with the s390x ELF ABI.

Reference material:

* [z/Architecture Principles of Operation][s390x-isa]
* [z/Architecture ELF Application Binary Interface][s390x-abi]

[s390x-isa]: https://publibfp.dhe.ibm.com/epubs/pdf/a227832d.pdf
[s390x-abi]: https://github.com/IBM/s390x-abi

## Building the target

Because it is Tier 3, Rust does not yet ship pre-compiled artifacts for this
target.

Therefore, you can build Rust with support for the target by adding it to the
target list in `bootstrap.toml`, a sample configuration is shown below.

```toml
[build]
target = ["s390x-unknown-linux-musl"]
```

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for this target. To compile for
this target, you will first need to build Rust with the target enabled (see
"Building the target" above).

## Testing

There are no special requirements for testing and running the target.
For testing cross builds on the host, please refer to the "Cross-compilation
toolchains and C code" section below.

## Cross-compilation toolchains and C code

Rust code built using the target is compatible with C code compiled with
GCC or Clang using the `s390x-unknown-linux-musl` target triple (via either
native or cross-compilation).

Depending on your system, you may need to configure the target to use the GNU
GCC linker. To use it, add the following to your `.cargo/config.toml`:

```toml
[target.s390x-unknown-linux-musl]
linker = "s390x-linux-musl-gcc"
```

If your `s390x-linux-musl-*` toolchain is not in your `PATH` you may need to
configure additional settings:

```toml
[target.s390x-unknown-linux-musl]
# Adjust the paths to point at your toolchain
cc = "/TOOLCHAIN_PATH/bin/s390x-linux-musl-gcc"
cxx = "/TOOLCHAIN_PATH/bin/s390x-linux-musl-g++"
ar = "/TOOLCHAIN_PATH/bin/s390x-linux-musl-ar"
ranlib = "/TOOLCHAIN_PATH/bin/s390x-linux-musl-ranlib"
linker = "/TOOLCHAIN_PATH/bin/s390x-linux-musl-gcc"
```

To test cross compiled binaries on a non-s390x host, you can use
[`qemu`](https://www.qemu.org/docs/master/system/target-s390x.html).

<a id=platform_support_sparc_unknown_none_elf></a>

# `sparc-unknown-none-elf`

**Tier: 3**

Rust for bare-metal 32-bit SPARC V7 and V8 systems, e.g. the Gaisler LEON3.

| Target                 | Descriptions                              |
| ---------------------- | ----------------------------------------- |
| sparc-unknown-none-elf | SPARC V7 32-bit (freestanding, hardfloat) |

## Target maintainers

[@jonathanpallant](https://github.com/jonathanpallant)

## Requirements

This target is cross-compiled. There is no support for `std`. There is no
default allocator, but it's possible to use `alloc` by supplying an allocator.

By default, code generated with this target should run on any `SPARC` hardware;
enabling additional target features may raise this baseline.

- `-Ctarget-cpu=v8` adds the extra SPARC V8 instructions.

- `-Ctarget-cpu=leon3` adds the SPARC V8 instructions and sets up scheduling to
  suit the Gaisler Leon3.

Functions marked `extern "C"` use the [standard SPARC architecture calling
convention](https://sparc.org/technical-documents/).

This target generates ELF binaries. Any alternate formats or special
considerations for binary layout will require linker options or linker scripts.

## Building the target

You can build Rust with support for the target by adding it to the `target`
list in `bootstrap.toml`:

```toml
[build]
build-stage = 1
host = ["<target for your host>"]
target = ["<target for your host>", "sparc-unknown-none-elf"]
```

Replace `<target for your host>` with `x86_64-unknown-linux-gnu` or whatever
else is appropriate for your host machine.

## Building Rust programs

To build with this target, pass it to the `--target` argument, like:

```console
cargo build --target sparc-unknown-none-elf
```

This target uses GCC as a linker, and so you will need an appropriate GCC
compatible `sparc-unknown-none` toolchain. The default linker binary is
`sparc-elf-gcc`, but you can override this in your project configuration, as
follows:

`.cargo/config.toml`:
```toml
[target.sparc-unknown-none-elf]
linker = "sparc-custom-elf-gcc"
```

## Testing

As `sparc-unknown-none-elf` supports a variety of different environments and does
not support `std`, this target does not support running the Rust test suite.

## Cross-compilation toolchains and C code

This target was initially tested using [BCC2] from Gaisler, along with the TSIM
Leon3 processor simulator. Both [BCC2] GCC and [BCC2] Clang have been shown to
work. To work with these tools, your project configuration should contain
something like:

[BCC2]: https://www.gaisler.com/index.php/downloads/compilers

`.cargo/config.toml`:
```toml
[target.sparc-unknown-none-elf]
linker = "sparc-gaisler-elf-gcc"
runner = "tsim-leon3"

[build]
target = ["sparc-unknown-none-elf"]
rustflags = "-Ctarget-cpu=leon3"
```

With this configuration, running `cargo run` will compile your code for the
SPARC V8 compatible Gaisler Leon3 processor and then start the `tsim-leon3`
simulator. The `libcore` was pre-compiled as part of the `rustc` compilation
process using the SPARC V7 baseline, but if you are using a nightly toolchain
you can use the
[`-Z build-std=core`](https://doc.rust-lang.org/cargo/reference/unstable.html#build-std)
option to rebuild `libcore` from source. This may be useful if you want to
compile it for SPARC V8 and take advantage of the extra instructions.

`.cargo/config.toml`:
```toml
[target.sparc-unknown-none-elf]
linker = "sparc-gaisler-elf-gcc"
runner = "tsim-leon3"

[build]
target = ["sparc-unknown-none-elf"]
rustflags = "-Ctarget-cpu=leon3"

[unstable]
build-std = ["core"]
```

Either way, once the simulator is running, simply enter the command `run` to
start the code executing in the simulator.

The default C toolchain libraries are linked in, so with the Gaisler [BCC2]
toolchain, and using its default Leon3 BSP, you can use call the C `putchar`
function and friends to output to the simulator console. The default linker
script is also appropriate for the Leon3 simulator, so no linker script is
required.

Here's a complete example using the above config file:

```rust,ignore (cannot-test-this-because-it-assumes-special-libc-functions)
#![no_std]
#![no_main]

extern "C" {
    fn putchar(ch: i32);
    fn _exit(code: i32) -> !;
}

#[no_mangle]
extern "C" fn main() -> i32 {
    let message = "Hello, this is Rust!";
    for b in message.bytes() {
        unsafe {
            putchar(b as i32);
        }
    }
    0
}

#[panic_handler]
fn panic(_panic: &core::panic::PanicInfo) -> ! {
    unsafe {
        _exit(1);
    }
}
```

```console
$ cargo run --target=sparc-unknown-none-elf
   Compiling sparc-demo-rust v0.1.0 (/work/sparc-demo-rust)
    Finished dev [unoptimized + debuginfo] target(s) in 3.44s
     Running `tsim-leon3 target/sparc-unknown-none-elf/debug/sparc-demo-rust`

 TSIM3 LEON3 SPARC simulator, version 3.1.9 (evaluation version)

 Copyright (C) 2023, Frontgrade Gaisler - all rights reserved.
 This software may only be used with a valid license.
 For latest updates, go to https://www.gaisler.com/
 Comments or bug-reports to support@gaisler.com

 This TSIM evaluation version will expire 2023-11-28

Number of CPUs: 2
system frequency: 50.000 MHz
icache: 1 * 4 KiB, 16 bytes/line (4 KiB total)
dcache: 1 * 4 KiB, 16 bytes/line (4 KiB total)
Allocated 8192 KiB SRAM memory, in 1 bank at 0x40000000
Allocated 32 MiB SDRAM memory, in 1 bank at 0x60000000
Allocated 8192 KiB ROM memory at 0x00000000
section: .text, addr: 0x40000000, size: 20528 bytes
section: .rodata, addr: 0x40005030, size: 128 bytes
section: .data, addr: 0x400050b0, size: 1176 bytes
read 347 symbols

tsim> run
  Initializing and starting from 0x40000000
Hello, this is Rust!

  Program exited normally on CPU 0.
tsim>
```

<a id=platform_support_solaris></a>

# sparcv9-sun-solaris
# x86_64-pc-solaris

**Tier: 2**

Rust for Solaris operating system.

## Target maintainers

[@psumbera](https://github.com/psumbera)
[@kulikjak](https://github.com/kulikjak)

## Requirements

The `sparcv9-sun-solaris` and `x86_64-pc-solaris` targets are Tier 2 with host tools.

Binary built for these targets are expected to run on sparcv9 or x86_64, and Solaris 11.4.

## Testing

For testing you can download Oracle Solaris 11.4 CBE release from:

  https://www.oracle.com/uk/solaris/solaris11/downloads/solaris-downloads.html

Solaris CBE release is also available for GitHub CI:

  https://github.com/vmactions/solaris-vm

Latest Solaris 11.4 SRU can be tested at Compile farm project:

  https://portal.cfarm.net/machines/list/ (cfarm215, cfarm215)

There are no official Rust binaries for Solaris available for Rustup yet. But you can eventually download unofficial from:

  https://github.com/psumbera/solaris-rust

<a id=platform_support_nto_qnx></a>

# nto-qnx

**Tier: 3**

The [QNX®][qnx.com] Neutrino (nto) Real-time operating system. Known as QNX OS
from version 8 onwards.

This support has been implemented jointly by [Elektrobit Automotive GmbH][Elektrobit]
and [QNX][qnx.com].

[qnx.com]: https://blackberry.qnx.com
[Elektrobit]: https://www.elektrobit.com

## Target maintainers

[@flba-eb](https://github.com/flba-eb)
[@gh-tr](https://github.com/gh-tr)
[@jonathanpallant](https://github.com/jonathanpallant)
[@japaric](https://github.com/japaric)

## Requirements

Currently, the following QNX versions and compilation targets are supported:

| Target Tuple                        | QNX Version                   | Target Architecture | Full support | `no_std` support |
| ----------------------------------- | ----------------------------- | ------------------- | :----------: | :--------------: |
| `aarch64-unknown-nto-qnx800`        | QNX OS 8.0                    | AArch64             |      ?       |        ✓         |
| `x86_64-pc-nto-qnx800`              | QNX OS 8.0                    | x86_64              |      ?       |        ✓         |
| `aarch64-unknown-nto-qnx710`        | QNX Neutrino 7.1 with io-pkt  | AArch64             |      ✓       |        ✓         |
| `x86_64-pc-nto-qnx710`              | QNX Neutrino 7.1 with io-pkt  | x86_64              |      ✓       |        ✓         |
| `aarch64-unknown-nto-qnx710_iosock` | QNX Neutrino 7.1 with io-sock | AArch64             |      ?       |        ✓         |
| `x86_64-pc-nto-qnx710_iosock`       | QNX Neutrino 7.1 with io-sock | x86_64              |      ?       |        ✓         |
| `aarch64-unknown-nto-qnx700`        | QNX Neutrino 7.0              | AArch64             |      ?       |        ✓         |
| `i686-pc-nto-qnx700`                | QNX Neutrino 7.0              | x86                 |              |        ✓         |

On QNX Neutrino 7.0 and 7.1, `io-pkt` is used as network stack by default.
QNX Neutrino 7.1 includes the optional network stack `io-sock`.
QNX OS 8.0 always uses `io-sock`. QNX OS 8.0 support is currently work in progress.

Adding other architectures that are supported by QNX is possible.

In the table above, 'full support' indicates support for building Rust applications with the full standard library. A '?' means that support is in-progress.
'`no_std` support' is for building `#![no_std]` applications where only `core` and `alloc` are available.

For building or using the Rust toolchain for QNX, the
[QNX Software Development Platform (SDP)](https://blackberry.qnx.com/en/products/foundation-software/qnx-software-development-platform)
must be installed and initialized.
Initialization is usually done by sourcing `qnxsdp-env.sh` (this will be installed as part of the SDP, see also installation instruction provided with the SDP).
Afterwards [`qcc`](https://www.qnx.com/developers/docs/7.1/#com.qnx.doc.neutrino.utilities/topic/q/qcc.html) (QNX C/C++ compiler)
should be available (in the `$PATH` variable).
`qcc` will be called e.g. for linking executables.

When linking `no_std` applications, they must link against `libc.so` (see example). This is
required because applications always link against the `crt` library and `crt` depends on `libc.so`.
This is done automatically when using the standard library.

### Disabling RELocation Read-Only (RELRO)

While not recommended by default, some QNX kernel setups may require the `RELRO` to be disabled with `-C relro_level=off`, e.g. by adding it to the `.cargo/config.toml` file:

```toml
[target.aarch64-unknown-nto-qnx700]
rustflags = ["-C", "relro_level=off"]
```

If your QNX kernel does not allow it, and `relro` is not disabled, running compiled binary would fail with `syntax error: ... unexpected` or similar.  This is due to kernel trying to interpret compiled binary with `/bin/sh`, and obviously failing.  To verify that this is really the case, run your binary with the `DL_DEBUG=all` env var, and look for this output. If you see it, you should disable `relro` as described above.

```text
Resolution scope for Executable->/bin/sh:
        Executable->/bin/sh
        libc.so.4->/usr/lib/ldqnx-64.so.2
```

### Small example application

Small `no_std` example is shown below. Applications using the standard library work as well.

```rust,ignore (platform-specific)
#![no_std]
#![no_main]
#![feature(lang_items)]

// We must always link against libc, even if no external functions are used
// "extern C" - Block can be empty but must be present
#[link(name = "c")]
extern "C" {
    pub fn printf(format: *const core::ffi::c_char, ...) -> core::ffi::c_int;
}

#[no_mangle]
pub extern "C" fn main(_argc: core::ffi::c_int, _argv: *const *const u8) -> core::ffi::c_int {
    const HELLO: &'static str = "Hello World, the answer is %d\n\0";
    unsafe {
        printf(HELLO.as_ptr() as *const _, 42);
    }
    0
}

use core::panic::PanicInfo;

#[panic_handler]
fn panic(_panic: &PanicInfo<'_>) -> ! {
    loop {}
}

#[lang = "eh_personality"]
#[no_mangle]
pub extern "C" fn rust_eh_personality() {}
```

The QNX support in Rust has been tested with QNX Neutrino 7.0 and 7.1. Support for QNX OS 8.0 is a work in progress.

There are no further known requirements.

## Conditional compilation

For conditional compilation, following QNX specific attributes are defined:

- `target_os` = `"nto"`
- `target_env` = `"nto71"` (for QNX Neutrino 7.1 with "classic" network stack "io_pkt")
- `target_env` = `"nto71_iosock"` (for QNX Neutrino 7.1 with network stack "io_sock")
- `target_env` = `"nto70"` (for QNX Neutrino 7.0)
- `target_env` = `"nto80"` (for QNX OS 8.0)

## Building the target

1. Create a `bootstrap.toml`

    Example content:

    ```toml
    profile = "compiler"
    change-id = 999999
    ```

2. Compile the Rust toolchain for an `x86_64-unknown-linux-gnu` host

    Compiling the Rust toolchain requires the same environment variables used for compiling C binaries.
    Refer to the [QNX developer manual](https://www.qnx.com/developers/docs/7.1/#com.qnx.doc.neutrino.prog/topic/devel_OS_version.html).

    To compile for QNX, environment variables must be set to use the correct tools and compiler switches:

    - `CC_<target>=qcc`
    - `CFLAGS_<target>=<nto_cflag>`
    - `CXX_<target>=qcc`
    - `AR_<target>=<nto_ar>`

    With:

    - `<target>` target triplet using underscores instead of hyphens, e.g. `aarch64_unknown_nto_qnx710`
    - `<nto_cflag>`

      - `-Vgcc_ntox86_cxx` for x86 (32 bit)
      - `-Vgcc_ntox86_64_cxx` for x86_64 (64 bit)
      - `-Vgcc_ntoaarch64le_cxx` for Aarch64 (64 bit)

    - `<nto_ar>`

      - `ntox86-ar` for x86 (32 bit)
      - `ntox86_64-ar` for x86_64 (64 bit)
      - `ntoaarch64-ar` for Aarch64 (64 bit)

    Example to build the Rust toolchain including a standard library for x86_64-linux-gnu and Aarch64-QNX-7.1:

    ```bash
    export build_env='
        CC_aarch64_unknown_nto_qnx710=qcc
        CFLAGS_aarch64_unknown_nto_qnx710=-Vgcc_ntoaarch64le_cxx
        CXX_aarch64_unknown_nto_qnx710=qcc
        AR_aarch64_unknown_nto_qnx710=ntoaarch64-ar
        '

    env $build_env \
        ./x.py build \
            --target x86_64-unknown-linux-gnu,aarch64-unknown-nto-qnx710 \
            rustc library/core library/alloc library/std
    ```

## Running the Rust test suite

The test suites of the Rust compiler and standard library can be executed much like other Rust targets.
The environment for testing should match the one used during compiler compilation (refer to `build_env` and `qcc`/`PATH` above) with the
addition of the TEST_DEVICE_ADDR environment variable.
The TEST_DEVICE_ADDR variable controls the remote runner and should point to the target, despite localhost being shown in the following example.
Note that some tests are failing which is why they are currently excluded by the target maintainers which can be seen in the following example.

To run all tests on a x86_64 QNX Neutrino 7.1 target:

```bash
export TEST_DEVICE_ADDR="localhost:12345" # must address the test target, can be a SSH tunnel
export build_env=<see above>

# Disable tests that only work on the host or don't make sense for this target.
# See also:
# - src/ci/docker/host-x86_64/i686-gnu/Dockerfile
# - https://rust-lang.zulipchat.com/#narrow/stream/182449-t-compiler.2Fhelp/topic/Running.20tests.20on.20remote.20target
# - .github/workflows/ci.yml
export exclude_tests='
    --exclude src/bootstrap
    --exclude src/tools/error_index_generator
    --exclude src/tools/linkchecker
    --exclude tests/ui-fulldeps
    --exclude rustc
    --exclude rustdoc'

env $build_env \
    ./x.py test \
        $exclude_tests \
        --stage 1 \
        --target x86_64-pc-nto-qnx710
```

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for this target.
To compile for this target, you must either build Rust with the target enabled (see "Building the target" above),
or build your own copy of `core` by using `build-std` or similar.

## Testing

Compiled executables can run directly on QNX.

### Rust std library test suite

The target needs sufficient resources to execute all tests. The commands below assume that a QEMU image
is used.

* Ensure that the temporary directory used by `remote-test-server` has enough free space and inodes.
  5GB of free space and 40000 inodes are known to be sufficient (the test will create more than 32k files).
  To create a QEMU image in an empty directory, run this command inside the directory:

  ```bash
  mkqnximage --type=qemu --ssh-ident=$HOME/.ssh/id_ed25519.pub --data-size=5000 --data-inodes=40000
  ```

  `/data` should have enough free resources.
  Set the `TMPDIR` environment variable accordingly when running `remote-test-server`, e.g.:
  ```bash
  TMPDIR=/data/tmp/rust remote-test-server --bind 0.0.0.0:12345
  ```

* Ensure the TCP stack can handle enough parallel connections (default is 200, should be 300 or higher).
  After creating an image (see above), edit the file `output/build/startup.sh`:
  1. Search for `io-pkt-v6-hc`
  2. Add the parameter `-ptcpip threads_max=300`, e.g.:
     ```text
     io-pkt-v6-hc -U 33:33 -d e1000 -ptcpip threads_max=300
     ```
  3. Update the image by running `mkqnximage` again with the same parameters as above for creating it.

* Running and stopping the virtual machine

  To start the virtual machine, run inside the directory of the VM:

  ```bash
  mkqnximage --run=-h
  ```

  To stop the virtual machine, run inside the directory of the VM:

  ```bash
  mkqnximage --stop
  ```

* Ensure local networking

  Ensure that 'localhost' is getting resolved to 127.0.0.1. If you can't ping the localhost, some tests may fail.
  Ensure it's appended to /etc/hosts (if first `ping` command fails).
  Commands have to be executed inside the virtual machine!

  ```bash
  $ ping localhost
  ping: Cannot resolve "localhost" (Host name lookup failure)

  $ echo "127.0.0.1 localhost" >> /etc/hosts

  $ ping localhost
  PING localhost (127.0.0.1): 56 data bytes
  64 bytes from 127.0.0.1: icmp_seq=0 ttl=255 time=1 ms
  ```

## Cross-compilation toolchains and C code

Compiling C code requires the same environment variables to be set as compiling the Rust toolchain (see above),
to ensure `qcc` is used with proper arguments.
To ensure compatibility, do not specify any further arguments that for example change calling conventions or memory layout.

<a id=platform_support_unikraft_linux_musl></a>

# `*-unikraft-linux-musl`

**Tier: 3**

Targets for the [Unikraft] Unikernel Development Kit (with musl).

[Unikraft]: https://unikraft.org/

Target triplets available so far:

- `x86_64-unikraft-linux-musl`

## Target maintainers

[@mkroening](https://github.com/mkroening)

## Requirements

These targets only support cross-compilation.
The targets do support std.

Unikraft pretends to behave exactly like Linux.
How much of that functionality is available depends on the individual unikernel configuration.
For example, the basic Unikraft + musl config does not support `poll` or networking out of the box.
That functionality requires enabling [`LIBPOSIX_EVENT`] or [lwIP] respectively.

[`LIBPOSIX_EVENT`]: https://github.com/unikraft/unikraft/blob/RELEASE-0.13.1/lib/posix-event/Config.uk
[lwIP]: https://github.com/unikraft/lib-lwip

The Unikraft targets follow Linux's `extern "C"` calling convention.

For these targets, `rustc` does not perform the final linking step.
Instead, the Unikraft build system will produce the final Unikernel image for the selected platform (e.g., KVM, Linux user space, and Xen).

## Building the targets

You can build Rust with support for the targets by adding it to the `target` list in `bootstrap.toml`:

```toml
[build]
build-stage = 1
target = ["x86_64-unikraft-linux-musl"]
```

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for these targets.
To compile for these targets, you will either need to build Rust with the targets enabled
(see “Building the targets” above), or build your own copy of `core` by using `build-std` or similar.

Linking requires a [KraftKit] shim.
See [unikraft/kraftkit#612] for more information.

[KraftKit]: https://github.com/unikraft/kraftkit
[unikraft/kraftkit#612]: https://github.com/unikraft/kraftkit/issues/612

## Testing

The targets do support running binaries in the form of unikernel images.
How the unikernel image is run depends on the specific platform (e.g., KVM, Linux user space, and Xen).
The targets do not support running the Rust test suite.

## Cross-compilation toolchains and C code

The targets do support C code.
To build compatible C code, you have to use the same compiler and flags as does the Unikraft build system for your specific configuration.
The easiest way to achieve that, is to build the C code with the Unikraft build system when building your unikernel image.

<a id=platform_support_hermit></a>

# `*-unknown-hermit`

**Tier: 3**

The [Hermit] unikernel target allows compiling your applications into self-contained, specialized unikernel images that can be run in small virtual machines.

[Hermit]: https://github.com/hermit-os

Target triplets available so far:

- `x86_64-unknown-hermit`
- `aarch64-unknown-hermit`
- `aarch64_be-unknown-hermit`
- `riscv64gc-unknown-hermit`

## Target maintainers

[@stlankes](https://github.com/stlankes)
[@mkroening](https://github.com/mkroening)

## Requirements

These targets only support cross-compilation.
The targets do support std.

When building binaries for this target, the Hermit unikernel is built from scratch.
The application developer themselves specializes the target and sets corresponding expectations.

The Hermit targets follow Linux's `extern "C"` calling convention.

Hermit binaries have the ELF format.

## Building the target

You can build Rust with support for the targets by adding it to the `target` list in `bootstrap.toml`.
To run the Hermit build scripts, you also have to enable your host target.
The build scripts rely on `llvm-tools` and binaries are linked using `rust-lld`, so those have to be enabled as well.

```toml
[build]
build-stage = 1
target = [
    "<HOST_TARGET>",
    "x86_64-unknown-hermit",
    "aarch64-unknown-hermit",
    "aarch64_be-unknown-hermit",
    "riscv64gc-unknown-hermit",
]

[rust]
lld = true
llvm-tools = true
```

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for these targets.
To compile for these targets, you will either need to build Rust with the targets enabled
(see “Building the targets” above), or build your own copy of `core` by using `build-std` or similar.

As all Hermit programs are unikernels, building a Rust program also requires including the operating system code. A guide for doing so is provided in our starter [hermit-rs-template].

[hermit-rs-template]: https://github.com/hermit-os/hermit-rs-template

## Testing

The targets support running binaries in the form of self-contained unikernel images.
These images can be chainloaded by Hermit's [loader] or hypervisor ([Uhyve]).
QEMU can be used to boot Hermit binaries using the loader on any architecture.
The targets do not support running the Rust test suite.

[loader]: https://github.com/hermit-os/loader
[Uhyve]: https://github.com/hermit-os/uhyve

## Cross-compilation toolchains and C code

The targets do not yet support C code and Rust code at the same time.

<a id=platform_support_freebsd></a>

# \*-unknown-freebsd

**Tier: 2/3**

[FreeBSD] multi-platform 4.4BSD-based UNIX-like operating system.

## Target maintainers

[@asomers](https://github.com/asomers)
[@MikaelUrankar](https://github.com/MikaelUrankar)

## Requirements

The `x86_64-unknown-freebsd` target is Tier 2 with host tools.
`i686-unknown-freebsd` is Tier 2 without host tools.  Other targets are Tier 3.
See [platform-support.md](#platform_support) for the full list.

We commit that rustc will run on all currently supported releases of
[FreeBSD][supported-releases] .  EoL releases may be supported for a time, too.
The same guarantees apply for the standard library and the libc crate.

Specific release support matrix, as of Rust 1.82.0:

| FreeBSD Release | rustc    | std      | libc    |
| --------------- | -------- | -------- | ------- |
| 10              | < 1.78.0 | ?        | ?       |
| 11              | < 1.78.0 | < 1.78.0 | current |
| 12+             | current  | current  | current |

`extern "C"` uses the official calling convention of the respective
architectures.

FreeBSD OS binaries use the ELF file format.

## Building Rust programs

The `x86_64-unknown-freebsd` and `i686-unknown-freebsd` artifacts are
distributed by the rust project and may be installed with rustup.  Other
targets are built by the ports system and may be installed with
[pkg(7)][pkg] or [ports(7)][ports].

By default the `i686-unknown-freebsd` target uses SSE2 instructions.  To build
code that does not require SSE2, build lang/rust from [ports][ports] and
disable the `SSE2` option at build time.  That will produce non-compliant
behavior.  See [issue #114479][x86-32-float-issue].

## Testing

The Rust test suite can be run natively. It can also be run from the FreeBSD
ports tree with the `make test` command from within the lang/rust directory.

[FreeBSD]: https://www.FreeBSD.org/
[supported-releases]: https://www.freebsd.org/security/#sup
[ports]: https://man.freebsd.org/cgi/man.cgi?query=ports
[pkg]: https://man.freebsd.org/cgi/man.cgi?query=pkg
[x86-32-float-issue]: https://github.com/rust-lang/rust/issues/114479

<a id=platform_support_managarm></a>

# `*-unknown-managarm-mlibc`

**Tier: 3**

## Target Maintainers

- [@no92](https://github.com/no92)
- [@64](https://github.com/64)
- [@Dennisbonke](https://github.com/Dennisbonke)

## Requirements

This target is cross-compiled. There is currently no support for `std` yet. It generates binaries in the ELF format. Currently, we support the `x86_64`, `aarch64` and `riscv64gc` architectures. The examples below `$ARCH` should be substituted for one of the supported architectures.

## Building the target

Managarm has upstream support in LLVM since the release of 21.1.0.

Set up your `bootstrap.toml` like this:

```toml
change-id = 142379

[llvm]
targets = "X86;AArch64;RISCV"
download-ci-llvm = false

[build]
target = ["$ARCH-unknown-managarm-mlibc", "x86_64-unknown-linux-gnu"]

[target.x86_64-unknown-linux-gnu]
llvm-config = "/path/to/your/llvm/bin/llvm-config"

[target.$ARCH-unknown-managarm-mlibc]
llvm-config = "/path/to/your/llvm/bin/llvm-config"
```

## Building Rust programs

Build a `$ARCH-managarm-gcc` using our [gcc fork](https://github.com/managarm/gcc).

```toml
[build]
rustc = "/path/to/the/rust-prefix/bin/rustc"
target = "$ARCH-unknown-managarm-mlibc"

[target.$ARCH-unknown-managarm-mlibc]
linker = "/path/to/the/managarm-gcc/bin/$ARCH-managarm-gcc"
```

## Testing

This target does not support running the Rust testsuite yet.

<a id=platform_support_netbsd></a>

# \*-unknown-netbsd

[NetBSD] multi-platform 4.4BSD-based UNIX-like operating system.

[NetBSD]: https://www.NetBSD.org/

The target names follow this format: `$ARCH-unknown-netbsd{-$SUFFIX}`,
where `$ARCH` specifies the target processor architecture and
`-$SUFFIX` (optional) might indicate the ABI. The following targets
are currently defined running NetBSD:

| Target tier         | Target name                   | NetBSD Platform                                                                      |
|---------------------|-------------------------------|--------------------------------------------------------------------------------------|
| 2 (with host tools) | `x86_64-unknown-netbsd`       | [amd64 / x86_64 systems](https://wiki.netbsd.org/ports/amd64/)                       |
| 3                   | `armv7-unknown-netbsd-eabihf` | [32-bit ARMv7 systems with hard-float](https://wiki.netbsd.org/ports/evbarm/)        |
| 3                   | `armv6-unknown-netbsd-eabihf` | [32-bit ARMv6 systems with hard-float](https://wiki.netbsd.org/ports/evbarm/)        |
| 3                   | `aarch64-unknown-netbsd`      | [64-bit ARM systems, little-endian](https://wiki.netbsd.org/ports/evbarm/)           |
| 3                   | `aarch64_be-unknown-netbsd`   | [64-bit ARM systems, big-endian](https://wiki.netbsd.org/ports/evbarm/)              |
| 3                   | `i586-unknown-netbsd`         | [32-bit i386, restricted to Pentium](https://wiki.netbsd.org/ports/i386/)            |
| 3                   | `i686-unknown-netbsd`         | [32-bit i386 with SSE](https://wiki.netbsd.org/ports/i386/)                          |
| 3                   | `mipsel-unknown-netbsd`       | [32-bit mips, requires mips32 cpu support](https://wiki.netbsd.org/ports/evbmips/)   |
| 3                   | `powerpc-unknown-netbsd`      | [Various 32-bit PowerPC systems, e.g. MacPPC](https://wiki.netbsd.org/ports/macppc/) |
| 3                   | `riscv64gc-unknown-netbsd`    | [64-bit RISC-V](https://wiki.netbsd.org/ports/riscv/)                                |
| 3                   | `sparc64-unknown-netbsd`      | [Sun UltraSPARC systems](https://wiki.netbsd.org/ports/sparc64/)                     |

All use the "native" `stdc++` library which goes along with the natively
supplied GNU C++ compiler for the given OS version.  Many of the bootstraps
are built for NetBSD 9.x, although some exceptions exist (some
are built for NetBSD 8.x but also work on newer OS versions).


## Target Maintainers

[@he32](https://github.com/he32)
[@0323pin](https://github.com/0323pin)

Further contacts:

- [NetBSD/pkgsrc-wip's rust](https://github.com/NetBSD/pkgsrc-wip/blob/master/rust188/Makefile) maintainer (see MAINTAINER variable). This package is part of "pkgsrc work-in-progress" and is used for deployment and testing of new versions of rust.  Note that we have the convention of having multiple rust versions active in pkgsrc-wip at any one time, so the version number is part of the directory name, and from time to time old versions are culled so this is not a fully "stable" link.
- [NetBSD's pkgsrc lang/rust](https://github.com/NetBSD/pkgsrc/tree/trunk/lang/rust) for the "proper" package in pkgsrc.
- [NetBSD's pkgsrc lang/rust-bin](https://github.com/NetBSD/pkgsrc/tree/trunk/lang/rust-bin) which re-uses the bootstrap kit as a binary distribution and therefore avoids the rather protracted native build time of rust itself

Fallback to pkgsrc-users@NetBSD.org, or fault reporting via NetBSD's
bug reporting system.

## Requirements

The `x86_64-unknown-netbsd` artifacts is being distributed by the
rust project.

The other targets are built by the target maintainers (see above),
and the targets are initially cross-compiled, but many if not most
of them are also built natively as part of testing.


## Building

The default build mode for the packages is a native build.


## Cross-compilation

These targets can be cross-compiled, and we do that via the pkgsrc
package(s).

Cross-compilation typically requires the "tools" and "dest" trees
resulting from a normal cross-build of NetBSD itself, ref. our main
build script, `build.sh`.

See e.g. [do-cross.mk
Makefile](https://github.com/NetBSD/pkgsrc/tree/trunk/lang/rust/do-cross.mk)
for the Makefile used to cross-build all the above NetBSD targets
(except for the `amd64` target).

The major option for the rust build is whether to build rust with
the LLVM rust carries in its distribution, or use the LLVM package
installed from pkgsrc.  The `PKG_OPTIONS.rust` option is
`rust-internal-llvm`, ref.  [the rust package's options.mk make
fragment](https://github.com/NetBSD/pkgsrc/blob/trunk/lang/rust/options.mk).
It defaults to being set for a few of the above platforms, for
various reasons (see comments), but is otherwise unset and therefore
indicates use of the pkgsrc LLVM.


## Testing

The Rust testsuite could presumably be run natively.

For the systems where the maintainer can build natively, the rust
compiler itself is re-built natively.  This involves the rust compiler
being re-built with the newly self-built rust compiler, so exercises
the result quite extensively.

Additionally, for some systems we build `librsvg`, and for the more
capable systems we build and test `firefox` (amd64, i386, aarch64).


## Building Rust programs

Rust ships pre-compiled artifacts for the `x86_64-unknown-netbsd`
target.

For the other systems mentioned above, using the `pkgsrc` route is
probably the easiest, possibly via the `rust-bin` package to save
time, see the `RUST_TYPE` variable from the `rust.mk` Makefile
fragment.

The pkgsrc rust package has a few files to assist with building
pkgsrc packages written in rust, ref. the `rust.mk` and `cargo.mk`
Makefile fragments in the `lang/rust` package.

<a id=platform_support_openbsd></a>

# \*-unknown-openbsd

**Tier: 3**

[OpenBSD] multi-platform 4.4BSD-based UNIX-like operating system.

[OpenBSD]: https://www.openbsd.org/

The target names follow this format: `$ARCH-unknown-openbsd`, where `$ARCH` specifies the target processor architecture. The following targets are currently defined:

|          Target name           | C++ library | OpenBSD Platform |
|--------------------------------|-------------|------------------|
| `aarch64-unknown-openbsd`      | libc++      | [64-bit ARM systems](https://www.openbsd.org/arm64.html)  |
| `i686-unknown-openbsd`         | libc++      | [Standard PC and clones based on the Intel i386 architecture and compatible processors](https://www.openbsd.org/i386.html) |
| `powerpc64-unknown-openbsd`    | libc++      | [IBM POWER-based PowerNV systems](https://www.openbsd.org/powerpc64.html) |
| `riscv64gc-unknown-openbsd`    | libc++      | [64-bit RISC-V systems](https://www.openbsd.org/riscv64.html) |
| `sparc64-unknown-openbsd`      | estdc++     | [Sun UltraSPARC and Fujitsu SPARC64 systems](https://www.openbsd.org/sparc64.html) |
| `x86_64-unknown-openbsd`       | libc++      | [AMD64-based systems](https://www.openbsd.org/amd64.html) |

Note that all OS versions are *major* even if using X.Y notation (`6.8` and `6.9` are different major versions) and could be binary incompatibles (with breaking changes).


## Target Maintainers

[@semarie](https://github.com/semarie)

Further contacts:

- [lang/rust](https://cvsweb.openbsd.org/cgi-bin/cvsweb/ports/lang/rust/Makefile?rev=HEAD&content-type=text/x-cvsweb-markup) maintainer (see MAINTAINER variable)

Fallback to ports@openbsd.org, OpenBSD third parties public mailing-list (with openbsd developers readers)


## Requirements

These targets are natively compiled and could be cross-compiled.
C compiler toolchain is required for the purpose of building Rust and functional binaries.

## Building

The target can be built by enabling it for a `rustc` build.

```toml
[build]
target = ["$ARCH-unknown-openbsd"]

[target.$ARCH-unknown-openbsd]
cc = "$ARCH-openbsd-cc"
```

## Cross-compilation

These targets can be cross-compiled, but LLVM might not build out-of-box.

## Testing

The Rust testsuite could be run natively.

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for these targets.

<a id=platform_support_redox></a>

# `*-unknown-redox`

**Tier: 2/3**

Targets for the [Redox OS](https://redox-os.org/) operating
system.

Target triplets available so far:

- `x86_64-unknown-redox` (tier 2)
- `aarch64-unknown-redox` (tier 3)
- `i586-unknown-redox` (tier 3)

## Target maintainers

[@jackpot51](https://github.com/jackpot51)

## Requirements

These targets are natively compiled and can be cross-compiled. Std is fully supported.

The targets are only expected to work with the latest version of Redox OS as the ABI is not yet stable.

`extern "C"` uses the official calling convention of the respective architectures.

Redox OS binaries use ELF as file format.

## Building the target

You can build Rust with support for the targets by adding it to the `target` list in `bootstrap.toml`. In addition a copy of [relibc] needs to be present in the linker search path.

```toml
[build]
build-stage = 1
target = [
    "<HOST_TARGET>",
    "x86_64-unknown-redox",
    "aarch64-unknown-redox",
    "i586-unknown-redox",
]
```

[relibc]: https://gitlab.redox-os.org/redox-os/relibc

## Building Rust programs and testing

Rust does not yet ship pre-compiled artifacts for Redox OS except for x86_64-unknown-redox.

The easiest way to build and test programs for Redox OS is using [redoxer](https://gitlab.redox-os.org/redox-os/redoxer) which sets up the required compiler toolchain for building as well as runs programs inside a Redox OS VM using QEMU.

## Cross-compilation toolchains and C code

The target supports C code. Pre-compiled C toolchains can be found at <https://static.redox-os.org/toolchain/>.

<a id=platform_support_unknown_uefi></a>

# `*-unknown-uefi`

**Tier: 2**

Unified Extensible Firmware Interface (UEFI) targets for application, driver,
and core UEFI binaries.

Available targets:

- `aarch64-unknown-uefi`
- `i686-unknown-uefi`
- `x86_64-unknown-uefi`

## Target maintainers

[@dvdhrm](https://github.com/dvdhrm)
[@nicholasbishop](https://github.com/nicholasbishop)

## Requirements

All UEFI targets can be used as `no-std` environments via cross-compilation.
Support for `std` is present, but incomplete and extremely new. `alloc` is supported if
an allocator is provided by the user or if using std. No host tools are supported.

The UEFI environment resembles the environment for Microsoft Windows, with some
minor differences. Therefore, cross-compiling for UEFI works with the same
tools as cross-compiling for Windows. The target binaries are PE32+ encoded,
the calling convention is different for each architecture, but matches what
Windows uses (if the architecture is supported by Windows). The special
`efiapi` Rust calling-convention chooses the right ABI for the target platform
(`extern "C"` is incorrect on Intel targets at least). The specification has an
elaborate section on the different supported calling-conventions, if more
details are desired.

MMX, SSE, and other FP-units are disabled by default, to allow for compilation
of core UEFI code that runs before they are set up. This can be overridden for
individual compilations via rustc command-line flags. Not all firmwares
correctly configure those units, though, so careful inspection is required.

As native to PE32+, binaries are position-dependent, but can be relocated at
runtime if their desired location is unavailable. The code must be statically
linked. Dynamic linking is not supported. Code is shared via UEFI interfaces,
rather than dynamic linking. Additionally, UEFI forbids running code on
anything but the boot CPU/thread, nor is interrupt-usage allowed (apart from
the timer interrupt). Device drivers are required to use polling methods.

UEFI uses a single address-space to run all code in. Multiple applications can
be loaded simultaneously and are dispatched via cooperative multitasking on a
single stack.

By default, the UEFI targets use the `link`-flavor of the LLVM linker `lld` to
link binaries into the final PE32+ file suffixed with `*.efi`. The PE subsystem
is set to `EFI_APPLICATION`, but can be modified by passing `/subsystem:<...>`
to the linker. Similarly, the entry-point is set to `efi_main` but can be
changed via `/entry:<...>`. The panic-strategy is set to `abort`,

The UEFI specification is available online for free:
[UEFI Specification Directory](https://uefi.org/specifications)

## Building rust for UEFI targets

Rust can be built for the UEFI targets by enabling them in the `rustc` build
configuration. Note that you can only build the standard libraries. The
compiler and host tools currently cannot be compiled for UEFI targets. A sample
configuration would be:

```toml
[build]
build-stage = 1
target = ["x86_64-unknown-uefi"]
```

## Building Rust programs

Starting with Rust 1.67, precompiled artifacts are provided via
`rustup`. For example, to use `x86_64-unknown-uefi`:

```sh
# install cross-compile toolchain
rustup target add x86_64-unknown-uefi
# target flag may be used with any cargo or rustc command
cargo build --target x86_64-unknown-uefi
```

### Building a driver

There are three types of UEFI executables: application, boot service
driver, and runtime driver. All of Rust's UEFI targets default to
producing applications. To build a driver instead, pass a
[`subsystem`][linker-subsystem] linker flag with a value of
`efi_boot_service_driver` or `efi_runtime_driver`.

Example:

```toml
# In .cargo/config.toml:
[build]
rustflags = ["-C", "link-args=/subsystem:efi_runtime_driver"]
```

## Testing

UEFI applications can be copied into the ESP on any UEFI system and executed
via the firmware boot menu. The qemu suite allows emulating UEFI systems and
executing UEFI applications as well. See its documentation for details.

The [uefi-run] rust tool is a simple
wrapper around `qemu` that can spawn UEFI applications in qemu. You can install
it via `cargo install uefi-run` and execute qemu applications as
`uefi-run ./application.efi`.

## Cross-compilation toolchains and C code

There are 3 common ways to compile native C code for UEFI targets:

- Use the official SDK by Intel:
  [Tianocore/EDK2](https://github.com/tianocore/edk2). This supports a
  multitude of platforms, comes with the full specification transposed into C,
  lots of examples and build-system integrations. This is also the only
  officially supported platform by Intel, and is used by many major firmware
  implementations. Any code compiled via the SDK is compatible to rust binaries
  compiled for the UEFI targets. You can link them directly into your rust
  binaries, or call into each other via UEFI protocols.
- Use the **GNU-EFI** suite. This approach is used by many UEFI applications
  in the Linux/OSS ecosystem. The GCC compiler is used to compile ELF binaries,
  and linked with a pre-loader that converts the ELF binary to PE32+
  **at runtime**. You can combine such binaries with the rust UEFI targets only
  via UEFI protocols. Linking both into the same executable will fail, since
  one is an ELF executable, and one a PE32+. If linking to **GNU-EFI**
  executables is desired, you must compile your rust code natively for the same
  GNU target as **GNU-EFI** and use their pre-loader. This requires careful
  consideration about which calling-convention to use when calling into native
  UEFI protocols, or calling into linked **GNU-EFI** code (similar to how these
  differences need to be accounted for when writing **GNU-EFI** C code).
- Use native Windows targets. This means compiling your C code for the Windows
  platform as if it was the UEFI platform. This works for static libraries, but
  needs adjustments when linking into an UEFI executable. You can, however,
  link such static libraries seamlessly into rust code compiled for UEFI
  targets. Be wary of any includes that are not specifically suitable for UEFI
  targets (especially the C standard library includes are not always
  compatible). Freestanding compilations are recommended to avoid
  incompatibilities.

## Ecosystem

The rust language has a long history of supporting UEFI targets. Many crates
have been developed to provide access to UEFI protocols and make UEFI
programming more ergonomic in rust. The following list is a short overview (in
alphabetical ordering):

- **[efi][efi-crate]**: *Ergonomic Rust bindings for writing UEFI applications*. Provides
  _rustified_ access to UEFI protocols, implements allocators and a safe
  environment to write UEFI applications.
- **[r-efi]**: *UEFI Reference Specification Protocol Constants and Definitions*.
  A pure transpose of the UEFI specification into rust. This provides the raw
  definitions from the specification, without any extended helpers or
  _rustification_. It serves as baseline to implement any more elaborate rust
  UEFI layers.
- **[uefi-rs]**: *Safe and easy-to-use wrapper for building UEFI apps*. An
  elaborate library providing safe abstractions for UEFI protocols and
  features. It implements allocators and provides an execution environment to
  UEFI applications written in rust.
- **[uefi-run]**: *Run UEFI applications*. A small wrapper around _qemu_ to spawn
  UEFI applications in an emulated `x86_64` machine.

## Example: Freestanding

The following code is a valid UEFI application returning immediately upon
execution with an exit code of 0. A panic handler is provided. This is executed
by rust on panic. For simplicity, we simply end up in an infinite loop.

This example can be compiled as binary crate via `cargo`:

```sh
cargo build --target x86_64-unknown-uefi
```

```rust,ignore (platform-specific,eh-personality-is-unstable)
#![no_main]
#![no_std]

#[panic_handler]
fn panic_handler(_info: &core::panic::PanicInfo) -> ! {
    loop {}
}

#[export_name = "efi_main"]
pub extern "C" fn main(_h: *mut core::ffi::c_void, _st: *mut core::ffi::c_void) -> usize {
    0
}
```

## Example: Hello World

This is an example UEFI application that prints "Hello World!", then waits for
key input before it exits. It serves as base example how to write UEFI
applications without any helper modules other than the standalone UEFI protocol
definitions provided by the `r-efi` crate.

This extends the "Freestanding" example and builds upon its setup. See there
for instruction how to compile this as binary crate.

Note that UEFI uses UTF-16 strings. Since rust literals are UTF-8, we have to
use an open-coded, zero-terminated, UTF-16 array as argument to
`output_string()`. Similarly to the panic handler, real applications should
rather use UTF-16 modules.

```rust,ignore (platform-specific,eh-personality-is-unstable)
#![no_main]
#![no_std]

use r_efi::efi;

#[panic_handler]
fn panic_handler(_info: &core::panic::PanicInfo) -> ! {
    loop {}
}

#[export_name = "efi_main"]
pub extern "C" fn main(_h: efi::Handle, st: *mut efi::SystemTable) -> efi::Status {
    let s = [
        0x0048u16, 0x0065u16, 0x006cu16, 0x006cu16, 0x006fu16, // "Hello"
        0x0020u16, //                                             " "
        0x0057u16, 0x006fu16, 0x0072u16, 0x006cu16, 0x0064u16, // "World"
        0x0021u16, //                                             "!"
        0x000au16, //                                             "\n"
        0x0000u16, //                                             NUL
    ];

    // Print "Hello World!".
    let r =
        unsafe { ((*(*st).con_out).output_string)((*st).con_out, s.as_ptr() as *mut efi::Char16) };
    if r.is_error() {
        return r;
    }

    // Wait for key input, by waiting on the `wait_for_key` event hook.
    let r = unsafe {
        let mut x: usize = 0;
        ((*(*st).boot_services).wait_for_event)(1, &mut (*(*st).con_in).wait_for_key, &mut x)
    };
    if r.is_error() {
        return r;
    }

    efi::Status::SUCCESS
}
```

## Rust std for UEFI
This section contains information on how to use std on UEFI.

### Build std
The building std part is pretty much the same as the official [docs](https://rustc-dev-guide.rust-lang.org/getting-started.html).
The linker that should be used is `rust-lld`. Here is a sample `bootstrap.toml`:
```toml
[rust]
lld = true
```
Then just build using `x.py`:
```sh
./x.py build --target x86_64-unknown-uefi --stage 1
```
Alternatively, it is possible to use the `build-std` feature. However, you must use a toolchain which has the UEFI std patches.
Then just build the project using the following command:
```sh
cargo build --target x86_64-unknown-uefi -Zbuild-std=std,panic_abort
```

### Implemented features
#### alloc
- Implemented using `EFI_BOOT_SERVICES.AllocatePool()` and `EFI_BOOT_SERVICES.FreePool()`.
- Passes all the tests.
- Currently uses `EfiLoaderData` as the `EFI_ALLOCATE_POOL->PoolType`.
#### cmath
- Provided by compiler-builtins.
#### env
- Just some global constants.
#### locks
- The provided locks should work on all standard single-threaded UEFI implementations.
#### os_str
- While the strings in UEFI should be valid UCS-2, in practice, many implementations just do not care and use UTF-16 strings.
- Thus, the current implementation supports full UTF-16 strings.
#### stdio
- Uses `Simple Text Input Protocol` and `Simple Text Output Protocol`.
- Note: UEFI uses CRLF for new line. This means Enter key is registered as CR instead of LF.
#### args
- Uses `EFI_LOADED_IMAGE_PROTOCOL->LoadOptions`

## Example: Hello World With std
The following code features a valid UEFI application, including `stdio` and `alloc` (`OsString` and `Vec`):

This example can be compiled as binary crate via `cargo` using the toolchain
compiled from the above source (named custom):

```sh
cargo +custom build --target x86_64-unknown-uefi
```

```rust,ignore (platform-specific)
#![feature(uefi_std)]

use r_efi::{efi, protocols::simple_text_output};
use std::{
  ffi::OsString,
  os::uefi::{env, ffi::OsStrExt}
};

pub fn main() {
  println!("Starting Rust Application...");

  // Use System Table Directly
  let st = env::system_table().as_ptr() as *mut efi::SystemTable;
  let mut s: Vec<u16> = OsString::from("Hello World!\n").encode_wide().collect();
  s.push(0);
  let r =
      unsafe {
        let con_out: *mut simple_text_output::Protocol = (*st).con_out;
        let output_string: extern "efiapi" fn(_: *mut simple_text_output::Protocol, *mut u16) -> efi::Status = (*con_out).output_string;
        output_string(con_out, s.as_ptr() as *mut efi::Char16)
      };
  assert!(!r.is_error())
}
```

### BootServices
The current implementation of std makes `BootServices` unavailable once `ExitBootServices` is called. Refer to [Runtime Drivers](https://edk2-docs.gitbook.io/edk-ii-uefi-driver-writer-s-guide/7_driver_entry_point/711_runtime_drivers) for more information regarding how to handle switching from using physical addresses to using virtual addresses.

Note: It should be noted that it is up to the user to drop all allocated memory before `ExitBootServices` is called.

[efi-crate]: https://github.com/gurry/efi
[linker-subsystem]: https://learn.microsoft.com/en-us/cpp/build/reference/subsystem
[r-efi]: https://github.com/r-efi/r-efi
[uefi-rs]: https://github.com/rust-osdev/uefi-rs
[uefi-run]: https://github.com/Richard-W/uefi-run

<a id=platform_support_windows_msvc></a>

# `*-pc-windows-msvc`

Windows MSVC targets.

**Tier 1 with host tools:**

- `aarch64-pc-windows-msvc`: Windows on ARM64.
- `i686-pc-windows-msvc`: Windows on 32-bit x86.
- `x86_64-pc-windows-msvc`: Windows on 64-bit x86.

## Target maintainers

[@ChrisDenton](https://github.com/ChrisDenton)
[@dpaoliello](https://github.com/dpaoliello)
[@lambdageek](https://github.com/lambdageek)
[@sivadeilra](https://github.com/sivadeilra)
[@wesleywiser](https://github.com/wesleywiser)

## Requirements

### OS version

Windows 10 or higher is required for client installs, Windows Server 2016 or higher is required for server installs.

### Host tooling

The minimum supported Visual Studio version is 2017 but this support is not actively tested in CI.
It is **highly** recommended to use the latest version of VS (currently VS 2022).

### Platform details

These targets fully implement the Rust standard library.

The `extern "C"` calling convention conforms to Microsoft's default calling convention for the given architecture: [`__cdecl`] on `i686`, [`x64`] on `x86_64` and [`ARM64`] on `aarch64`.

The `*-windows-msvc` targets produce PE/COFF binaries with CodeView debuginfo, the native formats used on Windows.

[`__cdecl`]: https://learn.microsoft.com/en-us/cpp/cpp/cdecl?view=msvc-170
[`x64`]: https://learn.microsoft.com/en-us/cpp/build/x64-calling-convention?view=msvc-170
[`ARM64`]: https://learn.microsoft.com/en-us/cpp/build/arm64-windows-abi-conventions?view=msvc-170

## Building Rust programs

These targets are distributed via `rustup` and can be installed via `rustup component add [--toolchain {name}] {target}`.

For example, adding the 32-bit x86 target to the `nightly` toolchain:

```text
rustup component add --toolchain nightly i686-pc-windows-msvc
```

or adding the ARM64 target to the active toolchain:

```text
rustup component add aarch64-pc-windows-msvc
```

## Testing

There are no special requirements for testing and running this target.

## Cross-compilation toolchains and C code

Architectural cross-compilation from one Windows host to a different Windows platform is natively supported by the MSVC toolchain provided the appropriate components are selected when using the VS Installer.

Cross-compilation from a non-Windows host to a `*-windows-msvc` target _may_ be possible but is not supported.

<a id=platform_support_uwp_windows_msvc></a>

# `x86_64-uwp-windows-msvc`, `i686-uwp-windows-msvc`, `thumbv7a-uwp-windows-msvc` and `aarch64-uwp-windows-msvc`

**Tier: 3**

Windows targets for Universal Windows Platform (UWP) applications, using MSVC toolchain.

## Target maintainers

[@bdbai](https://github.com/bdbai)

## Requirements

These targets are cross-compiled with std support. The host requirement and
binary format are the same as the corresponding non-UWP targets (i.e.
`x86_64-pc-windows-msvc`, `i686-pc-windows-msvc`, `thumbv7a-pc-windows-msvc`
and `aarch64-pc-windows-msvc`).

## Building the targets

The targets can be built by enabling them for a `rustc` build, for example:

```toml
[build]
build-stage = 1
target = ["x86_64-uwp-windows-msvc", "aarch64-uwp-windows-msvc"]
```

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for these targets. To compile for
these targets, you will either need to build Rust with the targets enabled (see
"Building the targets" above), or build your own copy of `std` by using
`build-std` or similar.

Example of building a Rust project for x64 UWP using `build-std`:

```pwsh
cargo build -Z build-std=std,panic_abort --target x86_64-uwp-windows-msvc
```

## Testing

Currently there is no support to run the rustc test suite for this target.

## Cross-compilation toolchains and C code

In general, the toolchain target should match the corresponding non-UWP
targets. Beware that not all Win32 APIs behave the same way in UWP, and some
are restricted in [AppContainer](https://learn.microsoft.com/en-us/windows/win32/secauthz/appcontainer-for-legacy-applications-)
or even not available at all. If the C code being compiled happens to use any
of restricted or unavailable APIs, consider using allowed alternatives or
disable certain feature sets to avoid using them.

<a id=platform_support_vxworks></a>

# `*-wrs-vxworks`

**Tier: 3**

Targets for the VxWorks operating
system.

Target triplets available:

- `x86_64-wrs-vxworks`
- `aarch64-wrs-vxworks`
- `i686-wrs-vxworks`
- `armv7-wrs-vxworks-eabihf`
- `powerpc-wrs-vxworks`
- `powerpc64-wrs-vxworks`
- `powerpc-wrs-vxworks-spe`
- `riscv32-wrs-vxworks`
- `riscv64-wrs-vxworks`

## Target maintainers

[@biabbas](https://github.com/biabbas)
[@hax0kartik](https://github.com/hax0kartik)

## Requirements

### OS version

The minimum supported version is VxWorks 7.

## Building

Rust for each target can be cross-compiled with its specific target vsb configuration. Std support is added but not yet fully tested.

## Building the target

You can build Rust with support for the targets by adding it to the `target` list in `bootstrap.toml`. In addition the workbench and wr-cc have to configured and activated.

```toml
[build]
build-stage = 1
target = [
    "<HOST_TARGET>",
    "x86_64-wrs-vxworks",
    "aarch64-wrs-vxworks",
    "i686-wrs-vxworks",
    "armv7-wrs-vxworks-eabihf",
    "powerpc-wrs-vxworks",
    "powerpc64-wrs-vxworks",
    "powerpc-wrs-vxworks-spe",
]
```

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for VxWorks.

The easiest way to build and test programs for VxWorks is to use the shipped rustc and cargo in VxWorks workbench, following the official windriver guidelines.

## Cross-compilation toolchains and C code

The target supports C code. Pre-compiled C toolchains can be found in provided VxWorks workbench.

<a id=platform_support_wasm32_wasip1></a>

# `wasm32-wasip1`

**Tier: 2**

The `wasm32-wasip1` target is a WebAssembly compilation target which
assumes that the [WASIp1] (aka "WASI preview1") set of "syscalls" are available
for use in the standard library. This target explicitly supports interop with
non-Rust code such as C and C++.

The [WASIp1] set of syscalls is standard insofar as it was written down once by
a set of folks and has not changed since then. Additionally the [WASIp1]
syscalls have been adapted and adopted into a number of runtimes and embeddings.
It is not standard in the sense that there are no formal semantics for each
syscall and APIs are no longer receiving any maintenance (e.g. no new APIs, no
new documentation, etc). After [WASIp1] was originally developed in 2019 the
WASI standard effort has since been "rebased" on top of the [Component Model].
This was a large change to the WASI specification and was released as 0.2.0
("WASIp2" colloquially) in January 2024. Current standardization efforts are
focused on the Component Model-based definition of WASI. At this point the
`wasm32-wasip1` Rust target is intended for historical compatibility with
[WASIp1] set of syscalls.

[WASIp1]: https://github.com/WebAssembly/WASI/tree/main/legacy/preview1
[Component Model]: https://github.com/webassembly/component-model

Today the `wasm32-wasip1` target will generate core WebAssembly modules
which will import functions from the `wasi_snapshot_preview1` module for
OS-related functionality (e.g. printing).

> **Note**: Prior to March 2024 this target was known as `wasm32-wasi` with some
> historical context found in old MCPs:
>
> * [Rename wasm32-wasi target to wasm32-wasip1](https://github.com/rust-lang/compiler-team/issues/607)
> * [Smooth the renaming transition of wasm32-wasi](https://github.com/rust-lang/compiler-team/issues/695)

## Target maintainers

When this target was added to the compiler platform-specific documentation here
was not maintained at that time. This means that the list below is not
exhaustive and there are more interested parties in this target. That being
said since when this document was last updated those interested in maintaining
this target are:

[@alexcrichton](https://github.com/alexcrichton)
[@loganek](https://github.com/loganek)

## Requirements

This target is cross-compiled. The target includes support for `std` itself,
but not all of the standard library works. For example spawning a thread will
always return an error (see the `wasm32-wasip1-threads` target for
example). Another example is that spawning a process will always return an
error. Operations such as opening a file, however, will be implemented by
calling WASI-defined APIs.

The WASI targets for Rust are explicitly intended to interoperate with other
languages compiled to WebAssembly, for example C/C++. Any ABI differences or
mismatches are considered bugs that need to be fixed.

By default the WASI targets in Rust ship in rustup with a precompiled copy of
[`wasi-libc`] meaning that a WebAssembly-targeting-Clang is not required to
use the WASI targets from Rust.  If there is no actual interoperation with C
then `rustup target add wasm32-wasip1` is all that's needed to get
started with WASI.

Note that this behavior can be controlled with `-Clinker` and
`-Clink-self-contained`, however. By specifying `clang` as a linker and
disabling the `link-self-contained` option an external version of `libc.a` can
be used instead.

[`wasi-libc`]: https://github.com/WebAssembly/wasi-libc

## Building the target

To build this target first acquire a copy of
[`wasi-sdk`](https://github.com/WebAssembly/wasi-sdk/). At this time version 22
is the minimum needed.

Next configure the `WASI_SDK_PATH` environment variable to point to where this
is installed. For example:

```text
export WASI_SDK_PATH=/path/to/wasi-sdk-22.0
```

Next be sure to enable LLD when building Rust from source as LLVM's `wasm-ld`
driver for LLD is required when linking WebAssembly code together. Rust's build
system will automatically pick up any necessary binaries and programs from
`WASI_SDK_PATH`.

## Building Rust programs

The `wasm32-wasip1` target is shipped with rustup so users can install
the target with:

```text
rustup target add wasm32-wasip1
```

Rust programs can be built for that target:

```text
rustc --target wasm32-wasip1 your-code.rs
```

## Cross-compilation

This target can be cross-compiled from any hosts.

## Testing

This target is tested in rust-lang/rust CI on all merges. A subset of tests are
run in the `test-various` builder such as the UI tests and libcore tests. This
can be tested locally, for example, with:

```text
./x.py test --target wasm32-wasip1 tests/ui
```

## Conditionally compiling code

It's recommended to conditionally compile code for this target with:

```text
#[cfg(all(target_os = "wasi", target_env = "p1"))]
```

Note that the `target_env = "p1"` condition first appeared in Rust 1.80. Prior
to Rust 1.80 the `target_env` condition was not set.

## Enabled WebAssembly features

The default set of WebAssembly features enabled for compilation is currently the
same as [`wasm32-unknown-unknown`](#wasm32_unknown_unknown). See the
documentation there for more information.

<a id=platform_support_wasm32_wasip1_threads></a>

# `wasm32-wasip1-threads`

**Tier: 2**

The `wasm32-wasip1-threads` target is a new and still (as of July 2023) an
experimental target. This target is an extension to `wasm32-wasip1` target,
originally known as `wasm32-wasi`. It extends the original target with a
standardized set of syscalls that are intended to empower WebAssembly binaries
with native multi threading capabilities.

> **Note**: Prior to March 2024 this target was known as
> `wasm32-wasi-preview1-threads`, and even longer before that it was known as
> `wasm32-wasi-threads`.

[wasi-threads]: https://github.com/WebAssembly/wasi-threads
[threads]: https://github.com/WebAssembly/threads


## Target maintainers

[@g0djan](https://github.com/g0djan)
[@alexcrichton](https://github.com/alexcrichton)
[@abrown](https://github.com/abrown)
[@loganek](https://github.com/loganek)

## Requirements

This target is cross-compiled. The target supports `std` fully.

The Rust target definition here is interesting in a few ways. We want to
serve two use cases here with this target:
* First, we want Rust usage of the target to be as hassle-free as possible,
  ideally avoiding the need to configure and install a local wasm32-wasip1-threads
  toolchain.
* Second, one of the primary use cases of LLVM's new wasm backend and the
  wasm support in LLD is that any compiled language can interoperate with
  any other. The `wasm32-wasip1-threads` target is the first with a viable C
  standard library and sysroot common definition, so we want Rust and C/C++
  code to interoperate when compiled to `wasm32-unknown-unknown`.


You'll note, however, that the two goals above are somewhat at odds with one
another. To attempt to solve both use cases in one go we define a target
that (ab)uses the `crt-static` target feature to indicate which one you're
in.
### No interop with C required
By default the `crt-static` target feature is enabled, and when enabled
this means that the bundled version of `libc.a` found in `liblibc.rlib`
is used. This isn't intended really for interoperation with a C because it
may be the case that Rust's bundled C library is incompatible with a
foreign-compiled C library. In this use case, though, we use `rust-lld` and
some copied crt startup object files to ensure that you can download the
wasi target for Rust and you're off to the races, no further configuration
necessary.
All in all, by default, no external dependencies are required. You can
compile `wasm32-wasip1-threads` binaries straight out of the box. You can't, however,
reliably interoperate with C code in this mode (yet).
### Interop with C required
For the second goal we repurpose the `target-feature` flag, meaning that
you'll need to do a few things to have C/Rust code interoperate.
1. All Rust code needs to be compiled with `-C target-feature=-crt-static`,
   indicating that the bundled C standard library in the Rust sysroot will
   not be used.
2. If you're using rustc to build a linked artifact then you'll need to
   specify `-C linker` to a `clang` binary that supports
   `wasm32-wasip1-threads` and is configured with the `wasm32-wasip1-threads` sysroot. This
   will cause Rust code to be linked against the libc.a that the specified
   `clang` provides.
3. If you're building a staticlib and integrating Rust code elsewhere, then
   compiling with `-C target-feature=-crt-static` is all you need to do.

All in all, by default, no external dependencies are required. You can
compile `wasm32-wasip1-threads` binaries straight out of the box. You can't, however,
reliably interoperate with C code in this mode (yet).


Also note that at this time the `wasm32-wasip1-threads` target assumes the
presence of other merged wasm proposals such as (with their LLVM feature flags):

* [Bulk memory] - `+bulk-memory`
* Mutable imported globals - `+mutable-globals`
* Atomics - `+atomics`

[Bulk memory]: https://github.com/WebAssembly/spec/blob/main/proposals/bulk-memory-operations/Overview.md

LLVM 16 is required for this target. The reason is related to linker flags: prior to LLVM 16, --import-memory and --export-memory were not allowed together. The reason both are needed is an artifact of how WASI currently does things; see https://github.com/WebAssembly/WASI/issues/502 for more details.

The target intends to match the corresponding Clang target for its `"C"` ABI.

> **Note**: due to the relatively early-days nature of this target when working
> with this target you may encounter LLVM bugs. If an assertion hit or a bug is
> found it's recommended to open an issue either with rust-lang/rust or ideally
> with LLVM itself.

## Platform requirements

The runtime should support the same set of APIs as any other supported wasi target for interacting with the host environment through the WASI standard. The runtime also should have implementation of [wasi-threads proposal](https://github.com/WebAssembly/wasi-threads).

This target is not a stable target. This means that there are a few engines
which implement the `wasi-threads` feature and if they do they're likely behind a
flag, for example:

* Wasmtime - `--wasi threads`
* [WAMR](https://github.com/bytecodealliance/wasm-micro-runtime) - needs to be built with WAMR_BUILD_LIB_WASI_THREADS=1

## Building the target

Users need to install or built wasi-sdk since release 20.0
https://github.com/WebAssembly/wasi-sdk/releases/tag/wasi-sdk-20
and specify path to *wasi-root* `bootstrap.toml`

```toml
[target.wasm32-wasip1-threads]
wasi-root = ".../wasi-libc/sysroot"
```

After that users can build this by adding it to the `target` list in
`bootstrap.toml`, or with `-Zbuild-std`.

## Building Rust programs

From Rust Nightly 1.71.1 (2023-08-03) on the artifacts are shipped pre-compiled:

```text
rustup target add wasm32-wasip1-threads --toolchain nightly
```

Rust programs can be built for that target:

```text
rustc --target wasm32-wasip1-threads your-code.rs
```

## Cross-compilation

This target can be cross-compiled from any hosts.

## Testing

Currently testing is not well supported for `wasm32-wasip1-threads` and the
Rust project doesn't run any tests for this target. However the UI testsuite can be run
manually following this instructions:

0. Ensure [wamr](https://github.com/bytecodealliance/wasm-micro-runtime), [wasmtime](https://github.com/bytecodealliance/wasmtime)
or another engine that supports `wasi-threads` is installed and can be found in the `$PATH` env variable.
1. Clone master branch.
2. Apply such [a change](https://github.com/g0djan/rust/compare/godjan/wasi-threads...g0djan:rust:godjan/wasi-run-ui-tests?expand=1) with an engine from the step 1.
3. Run `./x.py test --target wasm32-wasip1-threads tests/ui` and save the list of failed tests.
4. Checkout branch with your changes.
5. Apply such [a change](https://github.com/g0djan/rust/compare/godjan/wasi-threads...g0djan:rust:godjan/wasi-run-ui-tests?expand=1) with an engine from the step 1.
6. Run `./x.py test --target wasm32-wasip1-threads tests/ui` and save the list of failed tests.
7. For both lists of failed tests run `cat list | sort > sorted_list` and compare it with `diff sorted_list1 sorted_list2`.

## Conditionally compiling code

It's recommended to conditionally compile code for this target with:

```text
#[cfg(all(target_os = "wasi", target_env = "p1", target_feature = "atomics"))]
```

Prior to Rust 1.80 the `target_env = "p1"` key was not set. Currently the
`target_feature = "atomics"` is Nightly-only. Note that the precise `#[cfg]`
necessary to detect this target may change as the target becomes more stable.

## Enabled WebAssembly features

The default set of WebAssembly features enabled for compilation includes two
more features in addition to that which
[`wasm32-unknown-unknown`](#wasm32_unknown_unknown) enables:

* `bulk-memory`
* `atomics`

For more information about features see the documentation for
[`wasm32-unknown-unknown`](#wasm32_unknown_unknown), but note that the
`mvp` CPU in LLVM does not support this target as it's required that
`bulk-memory`, `atomics`, and `mutable-globals` are all enabled.

<a id=platform_support_wasm32_wasip2></a>

# `wasm32-wasip2`

**Tier: 2**

The `wasm32-wasip2` target is a new and still (as of January 2024) an
experimental target. This target is an extension to `wasm32-wasip1` target,
originally known as `wasm32-wasi`. It is the next evolution in the development of
wasi (the [WebAssembly System Interface](https://wasi.dev)) that uses the WebAssembly
[component model] to allow for a standardized set of syscalls that are intended to empower
WebAssembly binaries with native host capabilities.

[component model]: https://github.com/WebAssembly/component-model

## Target maintainers

[@alexcrichton](https://github.com/alexcrichton)
[@rylev](https://github.com/rylev)

## Requirements

This target is cross-compiled. The target supports `std` fully.

## Platform requirements

The WebAssembly runtime should support the wasi preview 2 API set. Runtimes also
are required to support components since this target outputs a component as
opposed to a core wasm module. As of the time of this writing Wasmtime 17 and
above is able to run this target natively with no extra flags.

## Building the target

To build this target first acquire a copy of
[`wasi-sdk`](https://github.com/WebAssembly/wasi-sdk/). At this time version 22
is the minimum needed.

Next configure the `WASI_SDK_PATH` environment variable to point to where this
is installed. For example:

```text
export WASI_SDK_PATH=/path/to/wasi-sdk-22.0
```

Next be sure to enable LLD when building Rust from source as LLVM's `wasm-ld`
driver for LLD is required when linking WebAssembly code together. Rust's build
system will automatically pick up any necessary binaries and programs from
`WASI_SDK_PATH`.

## Testing

This target is not tested in CI at this time. Locally it can be tested with a
`wasmtime` binary in `PATH` like so:

```text
./x.py test --target wasm32-wasip2 tests/ui
```

## Conditionally compiling code

It's recommended to conditionally compile code for this target with:

```text
#[cfg(all(target_os = "wasi", target_env = "p2"))]
```

## Enabled WebAssembly features

The default set of WebAssembly features enabled for compilation is currently the
same as [`wasm32-unknown-unknown`](#wasm32_unknown_unknown). See the
documentation there for more information.

<a id=platform_support_wasm32_wali_linux></a>

# `wasm32-wali-linux-*`

**Tier: 3**

WebAssembly targets that use the [WebAssembly Linux Interface (WALI)](https://github.com/arjunr2/WALI) with 32-bit memory. The latest status of the WALI specification and support are documented within the repo.

WALI offers seamless targetability of traditional Linux applications to Wasm by exposing Linux syscalls strategically into the sandbox. Numerous applications and build system work unmodified over WALI, including complex low-level system libraries -- a list of applications are included in the research paper linked in the main repo.

From the wider Wasm ecosystem perspective, implementing WALI within engines allows layering of high-level security policies (e.g. WASI) above it, arming the latter's implementations with sandboxing and portability.

## Target maintainers

[@arjunr2](https://github.com/arjunr2)

## Requirements

### Compilation
This target is cross-compiled and requires an installation of the [WALI compiler/sysroot](https://github.com/arjunr2/WALI). This produces standard `wasm32` binaries with the WALI interface methods as module imports that need to be implemented by a supported engine (see the  "Execution" section below).

`wali` targets *minimally require* the following LLVM feature flags:

* [Bulk memory] - `+bulk-memory`
* Mutable imported globals - `+mutable-globals`
* [Sign-extending operations] - `+sign-ext`
* [Threading/Atomics] - `+atomics`

[Bulk memory]: https://github.com/WebAssembly/spec/blob/main/proposals/bulk-memory-operations/Overview.md
[Sign-extending operations]: https://github.com/WebAssembly/spec/blob/main/proposals/sign-extension-ops/Overview.md
[Threading/Atomics]: https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md

> **Note**: Users can expect that new enabled-by-default Wasm features for LLVM are transitively incorporatable into this target -- see [wasm32-unknown-unknown](#wasm32_unknown_unknown) for detailed information on WebAssembly features.


> **Note**: The WALI ABI is similar to default Clang wasm32 ABIs but *not identical*. The primary difference is 64-bit `long` types as opposed to 32-bit for wasm32. This is required to maintain minimum source code changes for 64-bit host platforms currently supported. This may change in the future as the spec evolves.

### Execution
Running generated WALI binaries also requires a supported compliant engine implementation -- a working implementation in the [WebAssembly Micro-Runtime (WAMR)](https://github.com/arjunr2/WALI) is included in the repo.

> **Note**: WALI is still somewhat experimental and bugs may exist in the Rust support, WALI toolchain, or the LLVM compiler. The former can be filed in Rust repos while the latter two in the WALI repo.

## Building the target

You can build Rust with support for the target by adding it to the `target`
list in `config.toml`, and pointing to the toolchain artifacts from the previous section ("Requirements->Compilation"). A sample `config.toml` for the `musl` environment will look like this, where `<WALI-root>` is the absolute path to the root directory of the [WALI repo](https://github.com/arjunr2/WALI):

```toml
[build]
target = ["wasm32-wali-linux-musl"]

[target.wasm32-wali-linux-musl]
musl-root = "<WALI>/wali-musl/sysroot"
llvm-config = "<WALI>/llvm-project/build/bin/llvm-config"
cc = "<WALI>/llvm-project/build/bin/clang-18"
cxx = "<WALI>/llvm-project/build/bin/clang-18"
ar = "<WALI>/llvm-project/build/bin/llvm-ar"
ranlib = "<WALI>/llvm-project/build/bin/llvm-ranlib"
llvm-libunwind = "system"
crt-static = true
```

> The `llvm-config` settings are only temporary, and the changes will eventually be upstreamed into LLVM

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for this target. To compile for
this target, you will either need to build Rust with the target enabled (see
"Building the target" above), or build your own copy of `core` by using
`build-std` or similar.

Rust program builds can use this target normally. Currently, linking WALI programs may require pointing the `linker` to the llvm build in the [Cargo config](https://doc.rust-lang.org/cargo/reference/config.html) (until LLVM is upstreamed). A `config.toml` for Cargo will look like the following:

```toml
[target.wasm32-wali-linux-musl]
linker = "<WALI>/llvm-project/build/bin/lld"
```

Note that the following `cfg` directives are set for `wasm32-wali-linux-*`:

* `cfg(target_arch = "wasm32")`
* `cfg(target_family = {"wasm", "unix"})`
* `cfg(target_r = "wasm")`
* `cfg(target_os = "linux")`
* `cfg(target_env = *)`

### Restrictions

Hardware or platform-specific support, besides `syscall` is mostly unsupported in WALI for ISA portability (these tend to be uncommon).

## Testing

Currently testing is not supported for `wali` targets and the Rust project doesn't run any tests for this target.

However, standard ISA-agnostic tests for Linux should be thereotically reusable for WALI targets and minor changes. Testing integration will be continually incorporated as support evolves.


## Cross-compilation toolchains and C code

Most fully featured C code is compilable with the WALI toolchain -- examples can be seen in the repo.

<a id=platform_support_wasm32_unknown_emscripten></a>

# `wasm32-unknown-emscripten`

**Tier: 2**

The `wasm32-unknown-emscripten` target is a WebAssembly compilation target which
uses the [Emscripten](https://emscripten.org/) compiler toolchain. Emscripten is
a C/C++ toolchain designed to make it as easy as possible to port C/C++ code
written for Linux to run on the web or in other JavaScript runtimes such as Node.
It thus provides POSIX-compatible (musl) `libc` and `libstd` implementations and
many Linux APIs, access to the OpenGL and SDL APIs, and the ability to run arbitrary
JavaScript code, all based on web APIs using JS glue code. With the
`wasm32-unknown-emscripten` target, Rust code can interoperate with Emscripten's
ecosystem, C/C++ and JS code, and web APIs.

One existing user of this target is the
[`pyodide` project](https://pyodide.org/) which provides a Python runtime in
WebAssembly using Emscripten and compiles Python extension modules written in Rust
to the `wasm32-unknown-emscripten` target.

If you want to generate a standalone WebAssembly binary that does not require
access to the web APIs or the Rust standard library, the
[`wasm32-unknown-unknown`](#wasm32_unknown_unknown) target may be better
suited for you. However, [`wasm32-unknown-unknown`](#wasm32_unknown_unknown)
does not (easily) support interop with C/C++ code. Please refer to the
[wasm-bindgen](https://crates.io/crates/wasm-bindgen) crate in case you want to
interoperate with JavaScript with this target.

Like Emscripten, the WASI targets [`wasm32-wasip1`](#wasm32_wasip1) and
[`wasm32-wasip2`](#wasm32_wasip2) also provide access to the host environment,
support interop with C/C++ (and other languages), and support most of the Rust
standard library. While the WASI targets are portable across different hosts
(web and non-web), WASI has no standard way of accessing web APIs, whereas
Emscripten has the ability to run arbitrary JS from WASM and access many web APIs.
If you are only targeting the web and need to access web APIs, the
`wasm32-unknown-emscripten` target may be preferable.

## Target maintainers

[@hoodmane](https://github.com/hoodmane)
[@juntyr](https://github.com/juntyr)

## Requirements

This target is cross-compiled. The Emscripten compiler toolchain `emcc` must be
installed to link WASM binaries for this target. You can install `emcc` using:

```sh
git clone https://github.com/emscripten-core/emsdk.git --depth 1
./emsdk/emsdk install 3.1.68
./emsdk/emsdk activate 3.1.68
source ./emsdk/emsdk_env.sh
```

Please refer to <https://emscripten.org/docs/getting_started/downloads.html> for
further details and instructions.

## Building the target

Building this target can be done by:

* Configure the `wasm32-unknown-emscripten` target to get built.
* Ensure the `WebAssembly` target backend is not disabled in LLVM.

These are all controlled through `bootstrap.toml` options. It should be possible
to build this target on any platform. A minimal example configuration would be:

```toml
[llvm]
targets = "WebAssembly"

[build]
build-stage = 1
target = ["wasm32-unknown-emscripten"]
```

## Building Rust programs

Rust programs can be compiled by adding this target via rustup:

```sh
$ rustup target add wasm32-unknown-emscripten
```

and then compiling with the target:

```sh
$ rustc foo.rs --target wasm32-unknown-emscripten
$ file foo.wasm
```

## Cross-compilation

This target can be cross-compiled from any host.

## Emscripten ABI Compatibility

The Emscripten compiler toolchain does not follow a semantic versioning scheme
that clearly indicates when breaking changes to the ABI can be made. Additionally,
Emscripten offers many different ABIs even for a single version of Emscripten
depending on the linker flags used, e.g. `-fexceptions` and `-sWASM_BIGINT`. If
the ABIs mismatch, your code may exhibit undefined behaviour.

To ensure that the ABIs of your Rust code, of the Rust standard library, and of
other code compiled for Emscripten all match, you should rebuild the Rust standard
library with your local Emscripten version and settings using:

```sh
cargo +nightly -Zbuild-std build
```

If you still want to use the pre-compiled `std` from rustup, you should ensure
that your local Emscripten matches the version used by Rust and be careful about
any `-C link-arg`s that you compiled your Rust code with.

## Testing

This target is not extensively tested in CI for the rust-lang/rust repository. It
can be tested locally, for example, with:

```sh
EMCC_CFLAGS="-s MAXIMUM_MEMORY=2GB" ./x.py test --target wasm32-unknown-emscripten --skip src/tools/linkchecker
```

To run these tests, both `emcc` and `node` need to be in your `$PATH`. You can
install `node`, for example, using `nvm` by following the instructions at
<https://github.com/nvm-sh/nvm#install--update-script>.

If you need to test WebAssembly compatibility *in general*, it is recommended
to test the [`wasm32-wasip1`](#wasm32_wasip1) target instead.

## Conditionally compiling code

It's recommended to conditionally compile code for this target with:

```text
#[cfg(target_os = "emscripten")]
```

It may sometimes be necessary to conditionally compile code for WASM targets
which do *not* use emscripten, which can be achieved with:

```text
#[cfg(all(target_family = "wasm", not(target_os = "emscripten)))]
```

## Enabled WebAssembly features

WebAssembly is an evolving standard which adds new features such as new
instructions over time. This target's default set of supported WebAssembly
features will additionally change over time. The `wasm32-unknown-emscripten` target
inherits the default settings of LLVM which typically, but not necessarily, matches
the default settings of Emscripten as well. At link time, `emcc` configures the
linker to use Emscripten's settings.

Please refer to the [`wasm32-unknown-unknown`](#wasm32_unknown_unknown)
target's documentation on which WebAssembly features Rust enables by default, how
features can be disabled, and how Rust code can be conditionally compiled based on
which features are enabled.

Note that Rust code compiled for `wasm32-unknown-emscripten` currently enables
`-fexceptions` (JS exceptions) by default unless the Rust code is compiled with
`-Cpanic=abort`. `-fwasm-exceptions` (WASM exceptions) is not yet currently supported,
see <https://github.com/rust-lang/rust/issues/112195>.

Please refer to the [Emscripten ABI compatibility](#emscripten-abi-compatibility)
section to ensure that the features that are enabled do not cause an ABI mismatch
between your Rust code, the pre-compiled Rust standard library, and other code compiled
for Emscripten.

<a id=platform_support_wasm32_unknown_unknown></a>

# `wasm32-unknown-unknown`

**Tier: 2**

The `wasm32-unknown-unknown` target is a WebAssembly compilation target which
does not import any functions from the host for the standard library. This is
the "minimal" WebAssembly in the sense of making the fewest assumptions about
the host environment. This target is often used when compiling to the web or
JavaScript environments as there is no standard for what functions can be
imported on the web. This target can also be useful for creating minimal or
bare-bones WebAssembly binaries.

The `wasm32-unknown-unknown` target has support for the Rust standard library
but many parts of the standard library do not work and return errors. For
example `println!` does nothing, `std::fs` always return errors, and
`std::thread::spawn` will panic. There is no means by which this can be
overridden. For a WebAssembly target that more fully supports the standard
library see the [`wasm32-wasip1`](#wasm32_wasip1) or
[`wasm32-wasip2`](#wasm32_wasip2) targets.

The `wasm32-unknown-unknown` target has full support for the `core` and `alloc`
crates. It additionally supports the `HashMap` type in the `std` crate, although
hash maps are not randomized like they are on other platforms.

One existing user of this target (please feel free to edit and expand this list
too) is the [`wasm-bindgen` project](https://github.com/rustwasm/wasm-bindgen)
which facilitates Rust code interoperating with JavaScript code. Note, though,
that not all uses of `wasm32-unknown-unknown` are using JavaScript and the web.

## Target maintainers

When this target was added to the compiler, platform-specific documentation here
was not maintained at that time. This means that the list below is not
exhaustive, and there are more interested parties in this target. That being
said, those interested in maintaining this target are:

[@alexcrichton](https://github.com/alexcrichton)

## Requirements

This target is cross-compiled. The target includes support for `std` itself,
but as mentioned above many pieces of functionality that require an operating
system do not work and will return errors.

This target currently has no equivalent in C/C++. There is no C/C++ toolchain
for this target. While interop is theoretically possible it's recommended to
instead use one of:

* [`wasm32-unknown-emscripten`](#wasm32_unknown_emscripten) - for web-based
  use cases the Emscripten toolchain is typically chosen for running C/C++.
* [`wasm32-wasip1`](#wasm32_wasip1) - the wasi-sdk toolchain is used to
  compile C/C++ on this target and can interop with Rust code. WASI works on
  the web so far as there's no blocker, but an implementation of WASI APIs
  must be either chosen or reimplemented.

This target has no build requirements beyond what's in-tree in the Rust
repository. Linking binaries requires LLD to be enabled for the `wasm-ld`
driver. This target uses the `dlmalloc` crate as the default global allocator.

## Building the target

Building this target can be done by:

* Configure the `wasm32-unknown-unknown` target to get built.
* Configure LLD to be built.
* Ensure the `WebAssembly` target backend is not disabled in LLVM.

These are all controlled through `bootstrap.toml` options. It should be possible
to build this target on any platform.

## Building Rust programs

Rust programs can be compiled by adding this target via rustup:

```sh
$ rustup target add wasm32-unknown-unknown
```

and then compiling with the target:

```sh
$ rustc foo.rs --target wasm32-unknown-unknown
$ file foo.wasm
```

## Cross-compilation

This target can be cross-compiled from any host.

## Testing

This target is not tested in CI for the rust-lang/rust repository. Many tests
must be disabled to run on this target and failures are non-obvious because
`println!` doesn't work in the standard library. It's recommended to test the
`wasm32-wasip1` target instead for WebAssembly compatibility.

## Conditionally compiling code

It's recommended to conditionally compile code for this target with:

```text
#[cfg(all(target_family = "wasm", target_os = "unknown"))]
```

Note that there is no way to tell via `#[cfg]` whether code will be running on
the web or not.

## Enabled WebAssembly features

WebAssembly is an evolving standard which adds new features such as new
instructions over time. This target's default set of supported WebAssembly
features will additionally change over time. The `wasm32-unknown-unknown` target
inherits the default settings of LLVM which typically matches the default
settings of Emscripten as well.

Changes to WebAssembly go through a [proposals process][proposals] but reaching
the final stage (stage 5) does not automatically mean that the feature will be
enabled in LLVM and Rust by default. At this time the general guidance is that
features must be present in most engines for a "good chunk of time" before
they're enabled in LLVM by default. There is currently no exact number of
months or engines that are required to enable features by default.

[proposals]: https://github.com/WebAssembly/proposals

As of the time of this writing the proposals that are enabled by default (the
`generic` CPU in LLVM terminology) are:

* `multivalue`
* `mutable-globals`
* `reference-types`
* `sign-ext`
* `nontrapping-fptoint` (Rust 1.87.0+, LLVM 20+)
* `bulk-memory` (Rust 1.87.0+, LLVM 20+)

If you're compiling WebAssembly code for an engine that does not support a
feature in LLVM's default feature set then the feature must be disabled at
compile time. There are two approaches to choose from:

  - If you are targeting a feature set no smaller than the W3C WebAssembly Core
    1.0 recommendation -- which is equivalent to the WebAssembly MVP plus the
    `mutable-globals` feature -- and you are building `no_std`, then you can
    simply use the [`wasm32v1-none` target](#wasm32v1_none) instead of
    `wasm32-unknown-unknown`, which uses only those minimal features and
    includes a core and alloc library built with only those minimal features.

  - Otherwise -- if you need std, or if you need to target the ultra-minimal
    "MVP" feature set, excluding `mutable-globals` -- you will need to manually
    specify `-Ctarget-cpu=mvp` and also rebuild the stdlib using that target to
    ensure no features are used in the stdlib. This in turn requires use of a
    nightly compiler.

Compiling all code for the initial release of WebAssembly looks like:

```sh
$ export RUSTFLAGS=-Ctarget-cpu=mvp
$ cargo +nightly build -Zbuild-std=panic_abort,std --target wasm32-unknown-unknown
```

Here the `mvp` "cpu" is a placeholder in LLVM for disabling all supported
features by default. Cargo's `-Zbuild-std` feature, a Nightly Rust feature, is
then used to recompile the standard library in addition to your own code. This
will produce a binary that uses only the original WebAssembly features by
default and no proposals since its inception.

To enable individual features on either this target or `wasm32v1-none`, pass
arguments of the form `-Ctarget-feature=+foo`.  Available features for Rust code
itself are documented in the [reference] and can also be found through:

```sh
$ rustc -Ctarget-feature=help --target wasm32-unknown-unknown
```

You'll need to consult your WebAssembly engine's documentation to learn more
about the supported WebAssembly features the engine has.

[reference]: https://doc.rust-lang.org/reference/attributes/codegen.html#wasm32-or-wasm64

Note that it is still possible for Rust crates and libraries to enable
WebAssembly features on a per-function level. This means that the build
command above may not be sufficient to disable all WebAssembly features. If the
final binary still has SIMD instructions, for example, the function in question
will need to be found and the crate in question will likely contain something
like:

```rust,ignore (not-always-compiled-to-wasm)
#[target_feature(enable = "simd128")]
fn foo() {
    // ...
}
```

In this situation there is no compiler flag to disable emission of SIMD
instructions and the crate must instead be modified to not include this function
at compile time either by default or through a Cargo feature. For crate authors
it's recommended to avoid `#[target_feature(enable = "...")]` except where
necessary and instead use:

```rust,ignore (not-always-compiled-to-wasm)
#[cfg(target_feature = "simd128")]
fn foo() {
    // ...
}
```

That is to say instead of enabling target features it's recommended to
conditionally compile code instead. This is notably different to the way native
platforms such as x86\_64 work, and this is due to the fact that WebAssembly
binaries must only contain code the engine understands. Native binaries work so
long as the CPU doesn't execute unknown code dynamically at runtime.

<a id=platform_support_wasm32v1_none></a>

# `wasm32v1-none`

**Tier: 2**

The `wasm32v1-none` target is a WebAssembly compilation target that:

- Imports nothing from its host environment
- Enables no proposals / features past the [W3C WebAssembly Core 1.0 spec]

[W3C WebAssembly Core 1.0 spec]: https://www.w3.org/TR/wasm-core-1/

The target is very similar to [`wasm32-unknown-unknown`](#wasm32_unknown_unknown) and similarly uses LLVM's `wasm32-unknown-unknown` backend target. It contains only three minor differences:

* Setting the `target-cpu` to `mvp` rather than the default `generic`. Requesting `mvp` disables _all_ WebAssembly proposals / LLVM target feature flags.
* Enabling the [Import/Export of Mutable Globals] proposal (i.e. the `+mutable-globals` LLVM target feature flag)
* Not compiling the `std` library at all, rather than compiling it with stubs.

[Import/Export of Mutable Globals]: https://github.com/WebAssembly/mutable-global

## Target maintainers

[@alexcrichton](https://github.com/alexcrichton)
[@graydon](https://github.com/graydon)

## Requirements

This target is cross-compiled. It does not support `std`, only `core` and `alloc`. Since it imports nothing from its environment, any `std` parts that use OS facilities would be stubbed out with functions-that-fail anyways, and the experience of working with the stub `std` in the `wasm32-unknown-unknown` target was deemed not something worth repeating here.

Everything else about this target's requirements, building, usage and testing is the same as what's described in the [`wasm32-unknown-unknown` document](#wasm32_unknown_unknown), just using the target string `wasm32v1-none` in place of `wasm32-unknown-unknown`.

## Conditionally compiling code

It's recommended to conditionally compile code for this target with:

```text
#[cfg(all(target_family = "wasm", target_os = "none"))]
```

Note that there is no way to tell via `#[cfg]` whether code will be running on
the web or not.

## Enabled WebAssembly features

As noted above, _no WebAssembly proposals past 1.0_ are enabled on this target by default. Indeed, the entire point of this target is to have a way to compile for a stable "no post-1.0 proposals" subset of WebAssembly _on stable Rust_.

The [W3C WebAssembly Core 1.0 spec] was adopted as a W3C recommendation in December 2019, and includes exactly one "post-MVP" proposal: the [Import/Export of Mutable Globals] proposal.

All subsequent proposals are _disabled_ on this target by default, though they can be individually enabled by passing LLVM target-feature flags.

For reference sake, the set of proposals that LLVM supports at the time of writing, that this target _does not enable by default_, are listed here along with their LLVM target-feature flags:

* Post-1.0 proposals (integrated into the WebAssembly core 2.0 spec):
    * [Bulk memory] - `+bulk-memory`
    * [Sign-extending operations] - `+sign-ext`
    * [Non-trapping fp-to-int operations] - `+nontrapping-fptoint`
    * [Multi-value] - `+multivalue`
    * [Reference Types] - `+reference-types`
    * [Fixed-width SIMD] - `+simd128`
* Post-2.0 proposals:
    * [Threads] (supported by atomics) - `+atomics`
    * [Exception handling]  - `+exception-handling`
    * [Extended Constant Expressions]  - `+extended-const`
    * [Half Precision]  - `+half-precision`
    * [Multiple memories]- `+multimemory`
    * [Relaxed SIMD] - `+relaxed-simd`
    * [Tail call] - `+tail-call`

[Bulk memory]: https://github.com/WebAssembly/spec/blob/main/proposals/bulk-memory-operations/Overview.md
[Sign-extending operations]: https://github.com/WebAssembly/spec/blob/main/proposals/sign-extension-ops/Overview.md
[Non-trapping fp-to-int operations]: https://github.com/WebAssembly/spec/blob/main/proposals/nontrapping-float-to-int-conversion/Overview.md
[Multi-value]: https://github.com/WebAssembly/spec/blob/main/proposals/multi-value/Overview.md
[Reference Types]: https://github.com/WebAssembly/spec/blob/main/proposals/reference-types/Overview.md
[Fixed-width SIMD]: https://github.com/WebAssembly/spec/blob/main/proposals/simd/SIMD.md
[Threads]: https://github.com/webassembly/threads
[Exception handling]: https://github.com/WebAssembly/exception-handling
[Extended Constant Expressions]: https://github.com/WebAssembly/extended-const
[Half Precision]: https://github.com/WebAssembly/half-precision
[Multiple memories]: https://github.com/WebAssembly/multi-memory
[Relaxed SIMD]: https://github.com/WebAssembly/relaxed-simd
[Tail call]: https://github.com/WebAssembly/tail-call

Additional proposals in the future are, of course, also not enabled by default.

## Rationale relative to wasm32-unknown-unknown

As noted in the [`wasm32-unknown-unknown` document](#wasm32_unknown_unknown), it is possible to compile with `--target wasm32-unknown-unknown` and disable all WebAssembly proposals "by hand", by passing `-Ctarget-cpu=mvp`. Furthermore one can enable proposals one by one by passing LLVM target feature flags, such as `-Ctarget-feature=+mutable-globals`.

Is it therefore reasonable to wonder what the difference is between building with this:

```sh
$ rustc --target wasm32-unknown-unknown -Ctarget-cpu=mvp -Ctarget-feature=+mutable-globals
```

and building with this:

```sh
$ rustc --target wasm32v1-none
```

The difference is in how the `core` and `alloc` crates are compiled for distribution with the toolchain, and whether it works on _stable_ Rust toolchains or requires _nightly_ ones. Again referring back to the [`wasm32-unknown-unknown` document](#wasm32_unknown_unknown), note that to disable all post-MVP proposals on that target one _actually_ has to compile with this:

```sh
$ export RUSTFLAGS="-Ctarget-cpu=mvp -Ctarget-feature=+mutable-globals"
$ cargo +nightly build -Zbuild-std=panic_abort,std --target wasm32-unknown-unknown
```

Which not only rebuilds `std`, `core` and `alloc` (which is somewhat costly and annoying) but more importantly requires the use of nightly Rust toolchains (for the `-Zbuild-std` flag). This is very undesirable for the target audience, which consists of people targeting WebAssembly implementations that prioritize stability, simplicity and/or security over feature support.

This `wasm32v1-none` target exists as an alternative option that works on stable Rust toolchains, without rebuilding the stdlib.

<a id=platform_support_wasm64_unknown_unknown></a>

# `wasm64-unknown-unknown`

**Tier: 3**

WebAssembly target which uses 64-bit memories, relying on the [memory64]
WebAssembly proposal.

[memory64]: https://github.com/webassembly/memory64

## Target maintainers

[@alexcrichton](https://github.com/alexcrichton)

## Requirements

This target is cross-compiled. The target supports `std` in the same manner as
the `wasm32-unknown-unknown` target which is to say that it comes with the
standard library but many I/O functions such as `std::fs` and `std::net` will
simply return error. Additionally I/O operations like `println!` don't actually
do anything and the prints aren't routed anywhere. This is the same as the
`wasm32-unknown-unknown` target. This target comes by default with an allocator,
currently [dlmalloc] which is [ported to rust][dlmalloc-rs].

[dlmalloc]: http://gee.cs.oswego.edu/dl/html/malloc.html
[dlmalloc-rs]: https://github.com/alexcrichton/dlmalloc-rs

The difference of this target with `wasm32-unknown-unknown` is that it's
compiled for 64-bit memories instead of 32-bit memories. This means that `usize`
is 8-bytes large as well as pointers. The tradeoff, though, is that the maximum
memory size is now the full 64-bit address space instead of the 4GB as limited
by the 32-bit address space for `wasm32-unknown-unknown`.

This target is not a stable target. The [memory64] WebAssembly proposal is still
in-progress and not standardized. This means that there are not many engines
which implement the `memory64` feature and if they do they're likely behind a
flag, for example:

* Nodejs - `--experimental-wasm-memory64`
* Wasmtime - `--wasm memory64`

Also note that at this time the `wasm64-unknown-unknown` target assumes the
presence of other merged wasm proposals such as (with their LLVM feature flags):

* [Bulk memory] - `+bulk-memory`
* Mutable imported globals - `+mutable-globals`
* [Sign-extending operations] - `+sign-ext`
* [Non-trapping fp-to-int operations] - `+nontrapping-fptoint`

[Bulk memory]: https://github.com/WebAssembly/spec/blob/main/proposals/bulk-memory-operations/Overview.md
[Sign-extending operations]: https://github.com/WebAssembly/spec/blob/main/proposals/sign-extension-ops/Overview.md
[Non-trapping fp-to-int operations]: https://github.com/WebAssembly/spec/blob/main/proposals/nontrapping-float-to-int-conversion/Overview.md

The `wasm64-unknown-unknown` target intends to match the default Clang targets
for its `"C"` ABI, which is likely to be the same as Clang's
`wasm32-unknown-unknown` largely.

> **Note**: due to the relatively early-days nature of this target when working
> with this target you may encounter LLVM bugs. If an assertion hit or a bug is
> found it's recommended to open an issue either with rust-lang/rust or ideally
> with LLVM itself.

This target does not support `panic=unwind` at this time.

## Building the target

You can build Rust with support for the target by adding it to the `target`
list in `bootstrap.toml`, and the target also requires `lld` to be built to work.

```toml
[build]
target = ["wasm64-unknown-unknown"]

[rust]
lld = true
```

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for this target. To compile for
this target, you will either need to build Rust with the target enabled (see
"Building the target" above), or build your own copy of `std` by using
`build-std` or similar.

Note that the following `cfg` directives are set for `wasm64-unknown-unknown`:

* `cfg(target_arch = "wasm64")`
* `cfg(target_family = "wasm")`

## Testing

Currently testing is not well supported for `wasm64-unknown-unknown` and the
Rust project doesn't run any tests for this target. Testing support sort of
works but without `println!` it's not the most exciting tests to run.

## Cross-compilation toolchains and C code

Compiling Rust code with C code for `wasm64-unknown-unknown` is theoretically
possible, but there are no known toolchains to do this at this time. At the time
of this writing there is no known "libc" for wasm that works with
`wasm64-unknown-unknown`, which means that mixing C & Rust with this target
effectively cannot be done.

<a id=platform_support_windows_gnu></a>

# \*-windows-gnu

**⚠️ This documentation page is a stub, you can help improving it by sending a PR. ⚠️**

**Tier: 1/2 (with host tools)**

Target triples available:
- `i686-pc-windows-gnu`: Tier 2
- `x86_64-pc-windows-gnu`: Tier 1

## Target maintainers

**⚠️ These targets do not have any maintainers and are not properly maintained. ⚠️**

If you are using this target, consider signing up to become a target maintainer.
See the target tier policy for details.
Without maintainers, these targets may be demoted in the future.

## Requirements

These targets support std and host tools.

Unlike their MSVC counterparts, windows-gnu targets support cross-compilation and are free of all MSVC licensing implications.

They follow Windows calling convention for `extern "C"`.

Like with any other Windows target, created binaries are in PE format.

## Building Rust programs

Rust does ship a pre-compiled std library for those targets.
That means one can easily compile and cross-compile for those targets from other hosts if C proper toolchain is installed.

<a id=platform_support_windows_gnullvm></a>

# \*-windows-gnullvm

**Tier: 2 (with host tools)**

Windows targets similar to `*-windows-gnu` but using UCRT as the runtime and various LLVM tools/libraries instead of GCC/Binutils.

Target triples available so far:
- `aarch64-pc-windows-gnullvm`
- `i686-pc-windows-gnullvm`
- `x86_64-pc-windows-gnullvm`

## Target maintainers

[@mati865](https://github.com/mati865)
[@thomcc](https://github.com/thomcc)

## Requirements

The easiest way to obtain these targets is cross-compilation, but native build from `x86_64-pc-windows-gnu` is possible with few hacks which I don't recommend.
Std support is expected to be on par with `*-windows-gnu`.

Binaries for this target should be at least on par with `*-windows-gnu` in terms of requirements and functionality.

Those targets follow Windows calling convention for `extern "C"`.

Like with any other Windows target, created binaries are in PE format.

## Building the target

These targets can be easily cross-compiled
using [llvm-mingw](https://github.com/mstorsjo/llvm-mingw) toolchain or [MSYS2 CLANG*](https://www.msys2.org/docs/environments/) environments.
Just fill `[target.*]` sections for both build and resulting compiler and set installation prefix in `bootstrap.toml`.
Then run `./x.py install`.
In my case I had ran `./x.py install --host x86_64-pc-windows-gnullvm --target x86_64-pc-windows-gnullvm` inside MSYS2 MINGW64 shell
so `x86_64-pc-windows-gnu` was my build toolchain.

Native bootstrapping is doable in two ways:
- cross-compile gnullvm host toolchain and use it as build toolchain for the next build,
- copy libunwind libraries and rename them to mimic libgcc like here: https://github.com/msys2/MINGW-packages/blob/68e640756df2df6df6afa60f025e3f936e7b977c/mingw-w64-rust/PKGBUILD#L108-L109, stage0 compiler will be mostly broken but good enough to build the next stage.

The second option might stop working anytime, so it's not recommended.

## Building Rust programs

Rust does ship a pre-compiled std library for those targets.
That means one can easily cross-compile for those targets from other hosts if C proper toolchain is installed.

Alternatively full toolchain can be built as described in the previous section.

## Testing

Created binaries work fine on Windows or Wine using native hardware. Testing AArch64 on x86_64 is problematic though and requires spending some time with QEMU.
Most of x86_64 testsuite does pass when cross-compiling,
with exception for `rustdoc` and `ui-fulldeps` that fail with and error regarding a missing library,
they do pass in native builds though.
The only failing test is std's `process::tests::test_proc_thread_attributes` for unknown reason.

## Cross-compilation toolchains and C code

Compatible C code can be built with Clang's `aarch64-pc-windows-gnu`, `i686-pc-windows-gnullvm` and `x86_64-pc-windows-gnu` targets as long as LLVM-based C toolchains are used.
Those include:
- [llvm-mingw](https://github.com/mstorsjo/llvm-mingw)
- [MSYS2 with CLANG* environment](https://www.msys2.org/docs/environments)

<a id=platform_support_win7_windows_gnu></a>

# \*-win7-windows-gnu

**Tier: 3**

Windows targets continuing support of Windows 7.

Target triples:
- `i686-win7-windows-gnu`
- `x86_64-win7-windows-gnu`

## Target maintainers

[@tbu-](https://github.com/tbu-)

## Requirements

This target supports all of core, alloc, std and test. Host
tools may also work, though those are not currently tested.

Those targets follow Windows calling convention for extern "C".

Like any other Windows target, the created binaries are in PE format.

## Building the target

You can build Rust with support for the targets by adding it to the target list in bootstrap.toml:

```toml
[build]
build-stage = 1
target = ["x86_64-win7-windows-gnu"]
```

## Building Rust programs

Rust does not ship pre-compiled artifacts for this target. To compile for this
target, you will either need to build Rust with the target enabled (see
"Building the target" above), or build your own copy by using `build-std` or
similar.

## Testing

Created binaries work fine on Windows or Wine using native hardware. Remote
testing is possible using the `remote-test-server` described [here](https://rustc-dev-guide.rust-lang.org/tests/running.html#running-tests-on-a-remote-machine).

## Cross-compilation toolchains and C code

Compatible C code can be built with gcc's `{i686,x86_64}-w64-mingw32-gcc`.

<a id=platform_support_win7_windows_msvc></a>

# \*-win7-windows-msvc

**Tier: 3**

Windows targets continuing support of Windows 7.

Target triples:
- `i686-win7-windows-msvc`
- `x86_64-win7-windows-msvc`

## Target maintainers

[@roblabla](https://github.com/roblabla)

## Requirements

This target supports all of core, alloc, std and test. This is automatically
tested every night on private infrastructure hosted by the maintainer. Host
tools may also work, though those are not currently tested.

Those targets follow Windows calling convention for extern "C".

Like any other Windows target, the created binaries are in PE format.

## Building the target

You can build Rust with support for the targets by adding it to the target list in bootstrap.toml:

```toml
[build]
build-stage = 1
target = ["x86_64-win7-windows-msvc"]
```

## Building Rust programs

Rust does not ship pre-compiled artifacts for this target. To compile for this
target, you will either need to build Rust with the target enabled (see
"Building the target" above), or build your own copy by using `build-std` or
similar.

## Testing

Created binaries work fine on Windows or Wine using native hardware. Remote
testing is possible using the `remote-test-server` described [here](https://rustc-dev-guide.rust-lang.org/tests/running.html#running-tests-on-a-remote-machine).

## Cross-compilation toolchains and C code

Compatible C code can be built with either MSVC's `cl.exe` or LLVM's clang-cl.

Cross-compilation is possible using clang-cl/lld-link. It also requires the
Windows SDK, which can be acquired using [`xwin`](https://github.com/Jake-Shadle/xwin).

- Install `clang-cl` and `lld-link` on your machine, and make sure they are in
  your $PATH.
- Install `xwin`: `cargo install xwin`
- Use `xwin` to install the Windows SDK: `xwin splat --output winsdk`
- Create an `xwin-lld-link` script with the following content:

  ```bash
  #!/usr/bin/env bash
  set -e
  XWIN=/path/to/winsdk
  lld-link "$@" /libpath:$XWIN/crt/lib/x86_64 /libpath:$XWIN/sdk/lib/um/x86_64 /libpath:$XWIN/sdk/lib/ucrt/x86_64
  ```

- Create an `xwin-clang-cl` script with the following content:

  ```bash
  #!/usr/bin/env bash
  set -e
  XWIN=/path/to/winsdk
  clang-cl /imsvc "$XWIN/crt/include" /imsvc "$XWIN/sdk/include/ucrt" /imsvc "$XWIN/sdk/include/um" /imsvc "$XWIN/sdk/include/shared" --target="x86_64-pc-windows-msvc" "$@"
  ```

- In your bootstrap.toml, add the following lines:

  ```toml
  [target.x86_64-win7-windows-msvc]
  linker = "path/to/xwin-lld-link"
  cc = "path/to/xwin-clang-cl"
  ```

You should now be able to cross-compile the Rust std, and any rust program.

<a id=platform_support_x86_64_fortanix_unknown_sgx></a>

# `x86_64-fortanix-unknown-sgx`

**Tier: 2**

Secure enclaves using [Intel Software Guard Extensions
(SGX)](https://www.intel.com/content/www/us/en/developer/tools/software-guard-extensions/overview.html)
based on the ABI defined by Fortanix for the [Enclave Development Platform
(EDP)](https://edp.fortanix.com/).

## Target maintainers

[@jethrogb](https://github.com/jethrogb)
[@raoulstrackx](https://github.com/raoulstrackx)
[@aditijannu](https://github.com/aditijannu)

Further contacts:

The [EDP team](mailto:edp.maintainers@fortanix.com) at Fortanix.

## Requirements

The target supports `std` with a default allocator. Only cross compilation is
supported.

Binaries support all CPUs that include Intel SGX. Only 64-bit mode is supported.

Not all `std` features are supported, see [Using Rust's
std](https://edp.fortanix.com/docs/concepts/rust-std/) for details.

The `extern "C"` calling convention is the System V AMD64 ABI.

The supported ABI is the
[fortanix-sgx-abi](https://edp.fortanix.com/docs/api/fortanix_sgx_abi/index.html).

The compiler output is ELF, but the native format for the platform is the SGX
stream (SGXS) format. A converter like
[ftxsgx-elf2sgxs](https://crates.io/crates/fortanix-sgx-tools) is needed.

Programs in SGXS format adhering to the Fortanix SGX ABI can be run with any
compatible runner, such as
[ftxsgx-runner](https://crates.io/crates/fortanix-sgx-tools).

See the [EDP installation
guide](https://edp.fortanix.com/docs/installation/guide/) for recommendations
on how to setup a development and runtime environment.

## Building the target

As a tier 2 target, the target is built by the Rust project.

You can configure bootstrap like so:

```toml
[build]
build-stage = 1
target = ["x86_64-fortanix-unknown-sgx"]
```

## Building Rust programs

Standard build flows using `cargo` or `rustc` should work.

## Testing

The Rust test suite as well as custom unit and integration tests will run on
hardware that has Intel SGX enabled if a cargo runner is configured correctly,
see the requirements section.

## Cross-compilation toolchains and C code

C code is not generally supported, as there is no libc. C code compiled for
x86-64 in freestanding mode using the System V AMD64 ABI may work. The
[rs-libc](https://crates.io/crates/rs-libc) crate contains a subset of libc
that's known to work with this target.

<a id=platform_support_x86_64_pc_cygwin></a>

# `x86_64-pc-cygwin`

**Tier: 3**

Windows targets supporting Cygwin.
The `*-cygwin` targets are **not** intended as native target for applications,
a developer writing Windows applications should use the `*-pc-windows-*` targets instead, which are *native* Windows.

Cygwin is only intended as an emulation layer for Unix-only programs which do not support the native Windows targets.

## Target maintainers

[@Berrysoft](https://github.com/Berrysoft)

## Requirements

This target is cross compiled. It needs `x86_64-pc-cygwin-gcc` as linker.

The `target_os` of the target is `cygwin`, and it is `unix`.

## Building the target

For cross-compilation you want LLVM at least 20.1.0-rc1.
No native builds on Cygwin now.
The tracking issue for host tools on Cygwin is [#137819](https://github.com/rust-lang/rust/issues/137819).

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for this target. To compile for
this target, you will either need to build Rust with the target enabled (see
"Building the target" above), or build your own copy of `core` by using
`build-std` or similar.

## Testing

Created binaries work fine on Windows with Cygwin.

## Cross-compilation toolchains and C code

Compatible C code can be built with GCC shipped with Cygwin. Clang is untested.

<a id=platform_support_x86_64_unknown_linux_none></a>

# `x86_64-unknown-linux-none`

**Tier: 3**

Freestanding x86-64 linux binary with no dependency on libc.

## Target maintainers

[@morr0ne](https://github.com/morr0ne)

## Requirements

This target is cross compiled and can be built from any host.

This target has no support for host tools, std, or alloc.

One of the primary motivations of the target is to write a dynamic linker and libc in Rust.
For that, the target defaults to position-independent code and position-independent executables (PIE) by default.
PIE binaries need relocation at runtime. This is usually done by the dynamic linker or libc.
You can use `-Crelocation-model=static` to create a position-dependent binary that does not need relocation at runtime.

## Building the target

The target can be built by enabling it for a `rustc` build:

```toml
[build]
build-stage = 1
target = ["x86_64-unknown-linux-none"]
```

## Building Rust programs

Rust does not yet ship pre-compiled artifacts for this target. To compile for
this target, you will either need to build Rust with the target enabled (see
"Building the target" above), or build your own copy of `core` by using
`build-std` or similar.

## Testing

Created binaries will run on linux without any external requirements

## Cross-compilation toolchains and C code

Support for C code is currently untested

<a id=platform_support_x86_64_unknown_none></a>

# `x86_64-unknown-none`

**Tier: 2**

Freestanding/bare-metal x86-64 binaries in ELF format: firmware, kernels, etc.

## Target maintainers

[@haraldh](https://github.com/haraldh)
[@mikeleany](https://github.com/mikeleany)

## Requirements

This target is cross-compiled. There is no support for `std`. There is no
default allocator, but it's possible to use `alloc` by supplying an allocator.

By default, Rust code generated for this target does not use any vector or
floating-point registers (e.g. SSE, AVX). This allows the generated code to run
in environments, such as kernels, which may need to avoid the use of such
registers or which may have special considerations about the use of such
registers (e.g. saving and restoring them to avoid breaking userspace code
using the same registers). You can change code generation to use additional CPU
features via the `-C target-feature=` codegen options to rustc, or via the
`#[target_feature]` mechanism within Rust code.

By default, code generated with this target should run on any `x86_64`
hardware; enabling additional target features may raise this baseline.

Code generated with this target will use the `kernel` code model by default.
You can change this using the `-C code-model=` option to rustc.

On `x86_64-unknown-none`, `extern "C"` uses the [standard System V calling
convention](https://gitlab.com/x86-psABIs/x86-64-ABI), without red zones.

This target generates binaries in the ELF format. Any alternate formats or
special considerations for binary layout will require linker options or linker
scripts.

## Building the target

You can build Rust with support for the target by adding it to the `target`
list in `bootstrap.toml`:

```toml
[build]
build-stage = 1
target = ["x86_64-unknown-none"]
```

## Building Rust programs

Starting with Rust 1.62, precompiled artifacts are provided via `rustup`:

```text
# install cross-compile toolchain
rustup target add x86_64-unknown-none
# target flag may be used with any cargo or rustc command
cargo build --target x86_64-unknown-none
```

## Testing

As `x86_64-unknown-none` supports a variety of different environments and does
not support `std`, this target does not support running the Rust test suite.

## Cross-compilation toolchains and C code

If you want to compile C code along with Rust (such as for Rust crates with C
dependencies), you will need an appropriate `x86_64` toolchain.

Rust *may* be able to use an `x86_64-linux-gnu-` toolchain with appropriate
standalone flags to build for this toolchain (depending on the assumptions of
that toolchain, see below), or you may wish to use a separate
`x86_64-unknown-none` (or `x86_64-elf-`) toolchain.

On some `x86_64` hosts that use ELF binaries, you *may* be able to use the host
C toolchain, if it does not introduce assumptions about the host environment
that don't match the expectations of a standalone environment. Otherwise, you
may need a separate toolchain for standalone/freestanding development, just as
when cross-compiling from a non-`x86_64` platform.

<a id=platform_support_xtensa></a>

# `xtensa-*-none-elf`

**Tier: 3**

Targets for Xtensa CPUs.

## Target maintainers

[@MabezDev](https://github.com/MabezDev)
[@SergioGasquez](https://github.com/SergioGasquez)

## Requirements

The target names follow this format: `xtensa-$CPU`, where `$CPU` specifies the target chip. The following targets are currently defined:

| Target name               | Target CPU(s)                                                   |
| ------------------------- | --------------------------------------------------------------- |
| `xtensa-esp32-none-elf`   | [ESP32](https://www.espressif.com/en/products/socs/esp32)       |
| `xtensa-esp32s2-none-elf` | [ESP32-S2](https://www.espressif.com/en/products/socs/esp32-s2) |
| `xtensa-esp32s3-none-elf` | [ESP32-S3](https://www.espressif.com/en/products/socs/esp32-s3) |


Xtensa targets that support `std` are documented in the [ESP-IDF platform support document](#esp_idf)

## Building the targets

The targets can be built by installing the [Xtensa enabled Rust channel](https://github.com/esp-rs/rust/). See instructions in the [RISC-V and Xtensa Targets section of The Rust on ESP Book](https://docs.espressif.com/projects/rust/book/installation/index.html).

<a id=platform_support_nuttx></a>

# `*-nuttx-elf`

**Tier: 3**

Targets for the [Apache NuttX](https://github.com/apache/nuttx).

Apache NuttX is a real-time operating system (RTOS) with an emphasis on standards compliance and small footprint. It is scalable from 8-bit to 64-bit microcontroller environments. The primary governing standards in NuttX are POSIX and ANSI standards.

NuttX adopts additional standard APIs from Unix and other common RTOSs, such as VxWorks. These APIs are used for functionality not available under the POSIX and ANSI standards. However, some APIs, like fork(), are not appropriate for deeply-embedded environments and are not implemented in NuttX.

For brevity, many parts of the documentation will refer to Apache NuttX as simply NuttX.

## Target maintainers

[@no1wudi](https://github.com/no1wudi)

## Requirements

The target name follow this format: `ARCH[-VENDOR]-nuttx-ABI`, where `ARCH` is the target architecture, `VENDOR` is the vendor name, and `ABI` is the ABI used.

The following target names are defined:

- `aarch64-unknown-nuttx`
- `armv7a-nuttx-eabi`
- `armv7a-nuttx-eabihf`
- `thumbv6m-nuttx-eabi`
- `thumbv7a-nuttx-eabi`
- `thumbv7a-nuttx-eabihf`
- `thumbv7m-nuttx-eabi`
- `thumbv7em-nuttx-eabi`
- `thumbv7em-nuttx-eabihf`
- `thumbv8m.base-nuttx-eabi`
- `thumbv8m.main-nuttx-eabi`
- `thumbv8m.main-nuttx-eabihf`
- `riscv32imc-unknown-nuttx-elf`
- `riscv32imac-unknown-nuttx-elf`
- `riscv32imafc-unknown-nuttx-elf`
- `riscv64imac-unknown-nuttx-elf`
- `riscv64gc-unknown-nuttx-elf`

## Building the target

The target can be built by enabling it in the `rustc` build:

```toml
[build]
target = "riscv32imc-unknown-nuttx-elf"

[target.'riscv32imc-unknown-nuttx-elf']
linker = "riscv-none-elf-gcc"
```

The toolchain for the target can be found in [NuttX's quick start guide](https://nuttx.apache.org/docs/latest/quickstart/install.html).


## Testing

This is a cross-compiled `no-std` target, which must be run either in a simulator
or by programming them onto suitable hardware. It is not possible to run the
Rust test-suite on this target.

## Cross-compilation toolchains and C code

This target supports C code. If interlinking with C or C++, you may need to use
`riscv-none-elf-gcc` or `arm-none-eabi-gcc` as a linker instead of `rust-lld`.