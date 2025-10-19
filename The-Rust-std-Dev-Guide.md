# The Rust Standard Library Development Guide

Summary

- [About this Guide](#about)

- [Contributing to the standard libraries]()
    - [Building and debugging](#development_building_and_debugging)
    - [Performance optimizations and benchmarking](#development_perf_benchmarking)
    - [Writing documentation](#development_how_to_write_documentation)
    - [Feature lifecycle](#development_feature_lifecycle)
    - [Stabilizing a feature](#development_stabilization)

- [Breaking changes](#breaking_changes_summary)
    - [New trait implementations](#breaking_changes_new_trait_impls)
    - [Prelude](#breaking_changes_prelude)
    - [Doc changes](#breaking_changes_doc_changes)

- [Policies]()
    - [When to add `#[must_use]`](#policy_must_use)
    - [Specialization](#policy_specialization)
    - [When to `#[inline]`](#policy_inline)
    - [Doc alias policy](#policy_doc_alias)
    - [Safety comments policy](#policy_safety_comments)
    - [Reviewing target-specific code](#policy_target_code)
    - [Why the standard library uses extension traits](#policy_extension_traits)

- [Tricky situations]()
    - [Drop and `#[may_dangle]`](#tricky_may_dangle)
    - [Generics and unsafe](#tricky_generics_and_unsafe)

- [The library team](#team_summary)
    - [Meetings](#team_meetings)
    - [Membership](#team_membership)
    - [Reviewing](#team_reviewing)

# Readme

[![GitHub Actions Badge](https://github.com/rust-lang/std-dev-guide/workflows/Continuous%20Integration/badge.svg)](https://github.com/rust-lang/std-dev-guide/actions)

Welcome to the Standard Library Development Guide! This book is for anybody who is contributing to, or who is reviewing contributions to, the standard library. It aims to capture everything you need to know through the whole lifecycle of a standard library feature, from inception through to an initial unstable implementation, through to stabilization, and eventually maybe deprecation.

**The latest version of this guide is available on https://std-dev-guide.rust-lang.org/**

### Contributing to the guide

The guide is a very early work in progress. It still has big gaps. If there's a section you'd like to flesh out, please feel free to submit a PR or raise an issue!

### See also

- [The Rustc Dev Guide](https://github.com/rust-lang/rustc-dev-guide): A similar resource for the Rust compiler itself.
- [The Libs Team Repository](https://github.com/rust-lang/libs-team): The home of the Library Team, who maintain this book.


<a id=about></a>

# About this Guide

Welcome to the std dev guide.

This guide is maintained by the library team.

The guide is not very complete yet.
Contributions to this guide are very welcome.

Other useful documentation:

- <https://forge.rust-lang.org/>
- <https://rustc-dev-guide.rust-lang.org/>


<a id=development_building_and_debugging></a>


# Building and Debugging the library crates

Most of the [instructions from the rustc-dev-guide][rustc-guide] also apply to the standard library since
it is built with the same build system, so it is recommended to read it first.

[rustc-guide]: https://rustc-dev-guide.rust-lang.org/building/how-to-build-and-run.html

# Println-debugging alloc and core

Since logging and IO APIs are not available in `alloc` and `core` advice meant for the rest of the compiler
is not applicable here.

Instead one can either extract the code that should be tested to a normal crate and add debugging statements there or
on POSIX systems one can use the following hack:

```rust
extern "C" {
    fn dprintf(fd: i32, s: *const u8, ...);
}

macro_rules! dbg_printf {
    ($s:expr) => {
        unsafe { dprintf(2, "%s\0".as_ptr(), $s as *const u8); }
    }
}

fn function_to_debug() {
    let dbg_str = format!("debug: {}\n\0", "hello world");
    dbg_printf!(dbg_str.as_bytes().as_ptr());
}
```

Then one can run a test which exercises the code to debug and show the error output via

```shell,ignore
./x.py test library/alloc --test-args <test_name> --test-args --nocapture
```


<a id=development_perf_benchmarking></a>

# Library optimizations and benchmarking

Recommended reading: [The Rust performance book](https://nnethercote.github.io/perf-book/title-page.html)

## What to optimize

It's preferred to optimize code that shows up as significant in real-world code.
E.g. it's more beneficial to speed up `[T]::sort` than it is to shave off a small allocation in `Command::spawn`
because the latter is dominated by its syscall cost.

Issues about slow library code are labeled as [I-slow T-libs](https://github.com/rust-lang/rust/issues?q=is%3Aissue+is%3Aopen+label%3AI-slow+label%3AT-libs)
and those about code size as [I-heavy T-libs](https://github.com/rust-lang/rust/issues?q=is%3Aissue+is%3Aopen+label%3AI-heavy+label%3AT-libs)

## Vectorization

Currently only baseline target features (e.g. SSE2 on x86_64-unknown-linux-gnu) can be used in core and alloc because
runtime feature-detection is only available in std.
Where possible the preferred way to achieve vectorization is by shaping code in a way that the compiler
backend's auto-vectorization passes can understand. This benefits user crates compiled with additional target features
when they instantiate generic library functions, e.g. iterators.

## rustc-perf

For parts of the standard library that are heavily used by rustc itself it can be convenient to use
[the benchmark server](https://github.com/rust-lang/rustc-perf/tree/master/collector#benchmarking).

Since it only measures compile-time but not runtime performance of crates it can't be used to benchmark for features
that aren't used by the compiler, e.g. floating point code, linked lists, mpsc channels, etc.
For those explicit benchmarks must be written or extracted from real-world code.

## Built-in Microbenchmarks

The built-in benchmarks use [cargo bench](https://doc.rust-lang.org/nightly/unstable-book/library-features/test.html)
and can be found in the `benches` directory for `core` and `alloc` and in `test` modules in `std`.

The benchmarks are automatically executed run in a loop by `Bencher::iter` to average the runtime over many loop-iterations.
For CPU-bound microbenchmarks the runtime of a single iteration should be in the range of nano- to microseconds.

To run a specific  can be invoked without recompiling rustc
via `./x bench library/<lib> --stage 0 --test-args <benchmark name>`.

`cargo bench` measures wall-time. This often is good enough, but small changes such as saving a few instructions
in a bigger function can get drowned out by system noise. In such cases the following changes can make runs more
reproducible:

* disable incremental builds in `config.toml`
* build std and the benchmarks with `RUSTFLAGS_BOOTSTRAP="-Ccodegen-units=1"`
* ensure the system is as idle as possible
* [disable ASLR](https://man7.org/linux/man-pages/man8/setarch.8.html)
* [pinning](https://man7.org/linux/man-pages/man1/taskset.1.html) the benchmark process to a specific core
* change the CPU [scaling governor](https://wiki.archlinux.org/title/CPU_frequency_scaling#Scaling_governors)
  to a fixed-frequency one (`performance` or `powersave`)
* [disable clock boosts](https://wiki.archlinux.org/title/CPU_frequency_scaling#Configuring_frequency_boosting),
  especially on thermal-limited systems such as laptops

## Standalone tests

If `x` or the cargo benchmark harness get in the way it can be useful to extract the benchmark into a separate crate,
e.g. to run it under `perf stat` or cachegrind.

Build the standard library and link [stage0-sysroot](https://rustc-dev-guide.rust-lang.org/building/how-to-build-and-run.html#creating-a-rustup-toolchain)
as rustup toolchain and then use that to build the standalone benchmark with a modified standard library.

If the std rebuild times are too long for fast iteration it can be useful to not only extract the benchmark but also
the code under test into a separate crate.

## Running under perf-record

If extracting the code into a separate crate is impractical one can first build the benchmark and then run it again
under `perf record` and then drill down to the benchmark kernel with `perf report`.

```sh,ignore
# 1CGU to reduce inlining changes and code reorderings, debuginfo for source annotations
$ export RUSTFLAGS_BOOTSTRAP="-Ccodegen-units=1 -Cdebuginfo=2"

# build benchmark without running it
$ ./x bench --stage 0 library/core/ --test-args skipallbenches

# run the benchmark under perf
$ perf record --call-graph dwarf -e instructions ./x bench --stage 0 library/core/ --test-args <benchmark name>
$ perf report
```

By renaming `perf.data` to keep it from getting overwritten by subsequent runs it can be later compared to runs with
a modified library with `perf diff`.

## comparing assembly

While `perf report` shows assembly of the benchmark code it can sometimes be difficult to get a good overview of what
changed, especially when multiple benchmarks were affected. As an alternative one can extract and diff the assembly
directly from the benchmark suite.

```sh,ignore
# 1CGU to reduce inlining changes and code reorderings, debuginfo for source annotations
$ export RUSTFLAGS_BOOTSTRAP="-Ccodegen-units=1 -Cdebuginfo=2"

# build benchmark libs
$ ./x bench --stage 0 library/core/ --test-args skipallbenches

# this should print something like the following
Running benches/lib.rs (build/x86_64-unknown-linux-gnu/stage0-std/x86_64-unknown-linux-gnu/release/deps/corebenches-2199e9a22e7b1f4a)

# get the assembly for all the benchmarks
$ objdump --source --disassemble --wide --no-show-raw-insn --no-addresses \
  build/x86_64-unknown-linux-gnu/stage0-std/x86_64-unknown-linux-gnu/release/deps/corebenches-2199e9a22e7b1f4a \
  | rustfilt > baseline.asm

# switch to the branch with the changes
$ git switch feature-branch

# repeat the procedure above
$ ./x bench ...
$ objdump ... > changes.asm

# compare output
$ kdiff3 baseline.asm changes.asm
```

This can also be applied to standalone benchmarks.


<a id=development_how_to_write_documentation></a>

# How to write documentation

This document explains how to write documentation for the std/core public APIs.

Let's start with some general information:

### When to use inline code blocks

Whenever you are talking about a type or anything code related, it should be in a
inline code block. As a reminder, a inline code block is created with backticks
(\`). For example:


```text
This a `Vec` and it has a method `push` which you can call by doing `Vec::push`.
```

### When to use intra-doc links

Intra-doc links (you can see the full explanations for the feature
[here](https://doc.rust-lang.org/rustdoc/write-documentation/linking-to-items-by-name.html))
should be used as much as possible whenever a type is mentioned.

Little note: when you are documenting an item, there is no need to link to it.
So, if you write documentation for the `String::push_str` method, there is
no need to link to the `push_str` method or the `String` type.

### Code blocks

With rustdoc, code blocks are tested (because they are treated as Rust code
blocks by default). It allows us to know if the documentation is up to date. As
such, please avoid using `ignore` as much as possible on code blocks! If you
want as a language other than Rust, simply set it in the code block tags:

````text
```text
This is not rust code!
```
````

Some special cases:
 * If the code example cannot be run (when documenting a I/O item for example),
   use `no_run`.
 * If it is expected to fail, use `should_panic`.
 * If it is expected to fail compilation (which be quite rare!), use `compile_fail`.

You can find more information about code blocks
[here](https://doc.rust-lang.org/rustdoc/write-documentation/documentation-tests.html).

## How to write documentation for a module

A module is supposed to contain "similar" items. As such, its documentation is
supposed to give an overview and eventually **a base** to understand what the
items it contains are doing.

You can take a look at the
[f32 module](https://doc.rust-lang.org/nightly/std/f32/index.html) or at the
[fmt module](https://doc.rust-lang.org/nightly/std/fmt/index.html) to see
good examples.

## How to write documentation for functions/methods

The basic format of each documented methods/functions should roughly look like this:

```text
[explanations]

[example(s)]
```

### Explanations

By `explanations` we mean that the text should explain what the method and what
each of its arguments are for. Let's take this method for example:

```rust,ignore
pub fn concat_str(&self, s: &str) -> String {
    if s.is_empty() {
        panic!("empty concat string");
    }
    format!("{}{}", self.string, s)
}
```

The explanation should look like this:

```text
Returns a new [`String`] which contains `&self` content with `s` added at the end.
```

### Panic?

If the function/method can panic in certain circumstances, it must to be
mentioned! This explanation needs to be prepended by a `Panics` title:

```text
# Panics

`concat_str` panics if `s` is empty.
```

### Examples

As for the examples, they have to show the usage of the function/method. Just
like the `panic` section, they need to be prepended by a `Example` title (plural
if there is more than one).

It is better if you use `assert*!` macros at the end to ensure that the example
is working as expected. It also allows the readers to understand more easily
what the function is doing (or returning).

````text
# Example

```
let s = MyType::new("hello ");
assert_eq!("hello Georges", s.concat_str("Georges").as_str());
```
````

## How to write documentation for other items

It is mostly the same as for methods and functions except that the examples
are (strongly) recommended and not mandatory.

A good example often shows how to create the item.


<a id=development_feature_lifecycle></a>

# The feature lifecycle

## Identifying the problem

The first step before proposing any change to the standard library is to properly identify the problem that is trying to be solved. This helps to identify cases of the [XY problem] where a better solution exists without needing any changes to the standard library.

For this reason it is helpful to focus on real problems that people are encountering, rather than theoretical concerns about API design.

[XY problem]: https://en.wikipedia.org/wiki/XY_problem

## Suitability for the standard library

Unlike third party crates on crates.io, the Rust standard library is not versioned. This means that any stable API that is added can *never* be removed or modified in a backwards-incompatible way. For this reason, the standard library maintainers place a high bar on any change to the standard library API.

APIs that are well suited to the standard library are things that require language and/or compiler support, or that extend existing standard library types. Complex APIs that are expected to evolve over time (e.g. GUI frameworks) are a poor fit due to the lack of versioning.

The API Change Proposal process is intended to be a lightweight first step to
getting new APIs added to the standard library. The goal of this process is to
make sure proposed API changes have the best chance of success. The ACP process
accomplishes this by ensuring all changes are reviewed by the library API team,
who will evaluate the proposal and accept it if they are optimistic that the proposal will
be merged and pass its eventual FCP.

You can create an ACP in the `rust-lang/libs-team` repo using [this issue template](https://github.com/rust-lang/libs-team/issues/new?assignees=&labels=api-change-proposal%2C+T-libs-api&template=api-change-proposal.md&title=%28My+API+Change+Proposal%29). This should include a sketch of the proposed API, but does not have to be the final design that will be implemented.

Note that an ACP is not strictly required: you can just go ahead and submit a pull request with an implementation of your proposed API, with the risk of wasted effort if the library team ends up rejecting this feature. However do note that this risk is always present even if an ACP is accepted, as the library team can end up rejecting a feature in the later parts of the stabilization process.

## API design exploration

Once a feature is deemed suitable for inclusion in the standard library, the exact design should be iterated on to find the best way to express it as a Rust API. This iteration should happen in community forums such as [Rust internals](https://internals.rust-lang.org/) where all members of the community can comment and propose improvements.

Keep the following points in mind during the discussion:
- Try to achieve a balance between generality and specificity:
  - An overly general API tends to be difficult to use for common use cases, and has a complex API surface. This makes it difficult to review and maintain, and it may be a better fit for an external crate.
  - An overly specific API does not cover all common use cases, and may require further API changes in the future to accomodate these use cases.
- An alternative that should *always* be considered is simply adding this feature via a third party crate. This is even possible when adding new methods to standard library types by using extension traits.
- In the case of "convenience" functions which are simply shorthands for something that is already possible with existing APIs, the cost of extending the standard library surface should be weighed against the ergonomic impact of the new functions.
  - For example, too many convenience methods on a type makes navigating the documentation more difficult.
  - Additionally, consider whether this method is likely to be deprecated in the future if a language-level improvement makes it unnecessary.

The library team itself is not directly involved in this discussion, but individual members may comment to provide feedback. If significant changes have occurred since the ACP, another one may be proposed at this point to have the design validated by the library API team.

## Implementation

Once the API design space has been explored, an implementation based on the favored solution should be proposed as a pull request to the `rust-lang/rust` repository.

The pull request should include a summary of the alternatives that were considered. This is helpful for reviewers since it avoids duplicating this exploration work as part of the review. A PR submitted without this may be closed with a request to explore more alternatives.

If an ACP has not been filed for the proposed feature, the PR will need to be reviewed by the library API team to determine its suitability for the standard library.

## Tracking and stabilization

Before a PR is merged, you will be asked to open a tracking issue which will track the progress of the feature until its [stabilization](#development_stabilization).

There are two exceptions to this:
- Modifications of an existing unstable API can re-use the existing tracking issue for this API.
- Changes that are instantly stable (e.g. trait implementations on stable types) do not need a tracking issue. However, such changes need extra scrutiny as there will be no chance to adjust the API during an unstable period.


<a id=development_stabilization></a>

# Stabilizing features

* **Status:** Current
* **Last Updated:** 2022-05-27

Feature stabilization involves adding `#[stable]` attributes. They may be introduced alongside new trait impls or replace existing `#[unstable]` attributes.

Stabilization goes through the Libs FCP (Final Comment Period) process, which typically occurs on the tracking issue for the feature.

## When is an FCP appropriate?

Once an unstable feature's API design space (e.g. alternative APIs) has been fully explored with no outstanding concerns, anyone may push for its stabilization.

If you're unsure if a feature is ready for stabilization the first step should be to ask in the relevant tracking issue and get assistance from other participants in that discussion. In some cases the tracking issue may not have many other active participants, so if you're ever having trouble getting any feedback please ping one of the [libs team reviewers](https://github.com/rust-lang/rust/blob/master/triagebot.toml) directly to request assistance.

## Stabilization Report

Once a feature is ready for stabilization the first step of the FCP process is writing a stabilization report. Stabilization reports are not mandatory but they are heavily encouraged, and may be mandated by library API team members if they feel it necessary. The purpose of stabilization reports is to help reviewers more quickly make decisions and to simplify the process of documenting stabilized APIs in release notes. Stabilization reports consist of three primary sections, an implementation history, an API summary, and an experience report.

The **Implementation History** section should summarize the initial discussion during the implementation PR, every change that has been made to the feature since the initial implementation, all issues that were raised during the lifetime of the feature, and how they were resolved.

The **API Summary** section should include a precise description of what APIs are being introduced to the standard libraries. This can often be a simple link back to the top level comment if it's up to date, but in some situations it may not be possible to edit the original tracking issue to fix outdated information, such as when the author of the stabilization report is not the author of the tracking issue itself.

The libs team maintains a tool for this called [`cargo unstable-api`](https://github.com/rust-lang/libs-team/tree/main/tools/unstable-api) that can be used to generate these API summaries in some cases. *Note* the current implementation of this tool is fragile and does not work in all cases. We hope to have a more permanent version of this tool in the future that is built on top of either rustdoc or rustc's own APIs.

The **Experience Report** section should include concrete usecases of users who have wanted to use the feature and who have tested that it works for their needs. The experience report should include a brief summary of the experience of using that feature. Ideally this would include links to commits or branches where the feature was integrated with their project, but this is not a requirement. Alternatively, users can provide usage examples of crates that export an identical API to the one being stabilized.

You can see an example of a stabilization report in [#88581](https://github.com/rust-lang/rust/issues/88581#issuecomment-1054642118).

## Before writing a PR to stabilize a feature

Check to see if a FCP has completed first. If not, either ping `@rust-lang/libs-api` if you're a member of the `rust-lang` organization,
or leave a comment asking about the status of the feature.

This will save you from opening a stabilization PR and having it need regular rebasing while the FCP process runs its course.

## Partial Stabilizations

When you only wish to stabilize a subset of an existing feature you should skip creating a new tracking issue and instead create a partial stabilization PR for the subset of the feature being stabilized.

If you're unsure if a feature is ready for partial stabilization the first step should be to ask in the relevant tracking issue and get assistance from other participants in that discussion. In some cases the tracking issue may not have many other active participants, so if you're ever having trouble getting any feedback please ping one of the [libs team reviewers](https://github.com/rust-lang/rust/blob/master/triagebot.toml) directly to request assistance.

You can see an example of partially stabilizing a feature with tracking issue [#71146](https://github.com/rust-lang/rust/issues/71146) and partial stabilization PR [#94640](https://github.com/rust-lang/rust/pull/94640).

## When there's `const` involved

Const functions can be stabilized in a PR that replaces `#[rustc_const_unstable]` attributes with `#[rustc_const_stable]` ones. The [Constant Evaluation WG](https://github.com/rust-lang/const-eval) should be pinged for input on whether or not the `const`-ness is something we want to commit to. If it is an intrinsic being exposed that is const-stabilized then `@rust-lang/lang` should also be included in the FCP.

Check whether the function internally depends on other unstable `const` functions through `#[allow_internal_unstable]` attributes and consider how the function could be implemented if its internally unstable calls were removed. See the _Stability attributes_ page for more details on `#[allow_internal_unstable]`.

Where `unsafe` and `const` is involved, e.g., for operations which are "unconst", that the const safety argument for the usage also be documented. That is, a `const fn` has additional determinism (e.g. run-time/compile-time results must correspond and the function's output only depends on its inputs...) restrictions that must be preserved, and those should be argued when `unsafe` is used.

## Stabilization PR for Library Features

Once we have decided to stabilize a feature, we need to have a PR that actually makes that stabilization happen. These kinds of PRs are a great way to get involved in Rust, as they're typically small -- just updating attributes.

Here is a general guide to how to stabilize a feature -- every feature is different, of course, so some features may require steps beyond what this guide talks about.

### Update the stability attributes on the items

Library items are marked unstable via the `#[unstable]` attribute, like this:

```rust,ignore
#[unstable(feature = "total_cmp", issue = "72599")]
pub fn total_cmp(&self, other: &Self) -> crate::cmp::Ordering { ... }
```

You'll need to change that to a `#[stable]` attribute with the version set to the placeholder `CURRENT_RUSTC_VERSION`:

```rust,ignore
#[stable(feature = "total_cmp", since = "CURRENT_RUSTC_VERSION")]
```

Note that other `#[stable]` attributes may contain spelled out version numbers, but you should not spell out any version number as it might get outdated by the time your pull request merges.

### Remove feature gates from doctests

All the doctests on the items being stabilized will be enabling the unstable feature, so now that it's stable those attributes are no longer needed and should be removed.

`````diff
 /// # Examples
 ///
 /// ```
-/// #![feature(total_cmp)]
-///
 /// assert_eq!(0.0_f32.total_cmp(&-0.0), std::cmp::Ordering::Greater);
 /// ```
`````

The most obvious place to find these is on the item itself, but it's worth searching the whole library.  Often you'll find other unstable methods that were also using it in their tests.

### Remove feature gates from the compiler

The compiler builds with nightly features allowed, so you may find uses of the feature there as well.  These also need to be removed.

```diff
 #![feature(once_cell)]
 #![feature(never_type)]
-#![feature(total_cmp)]
 #![feature(trusted_step)]
 #![feature(try_blocks)]
```

## Stabilization PR Checklist

To stabilize a feature, follow these steps:

0. Create a stabilization report in the tracking issue for the feature being stabilized.
0. (Optional) For partial stabilizations, create a new partial stabilization PR for the subset of the issue being stabilized.
0. Ask a **@rust-lang/libs-api** member to start an FCP on the tracking issue and wait for the FCP to complete (with `disposition-merge`).
0. Change `#[unstable(...)]` to `#[stable(since = "CURRENT_RUSTC_VERSION")]`. `CURRENT_RUSTC_VERSION` here is meant in a literal sense and not to be replaced with the spelled out version number.
0. Remove `#![feature(...)]` from any test or doc-test for this API. If the feature is used in the compiler or tools, remove it from there as well.
0. If applicable, change `#[rustc_const_unstable(...)]` to `#[rustc_const_stable(since = "CURRENT_RUSTC_VERSION")]`.
0. Open a PR against `rust-lang/rust`.
   - Add the appropriate labels: `@rustbot modify labels: +T-libs-api`.
   - Link to the tracking issue by adding "Closes #XXXXX".

You can see an example of stabilizing a feature with [tracking issue #81656 with FCP](https://github.com/rust-lang/rust/issues/81656) and the associated [implementation PR #84642](https://github.com/rust-lang/rust/pull/84642).



<a id=breaking_changes_summary></a>

# Breaking changes

Breaking changes should be avoided when possible.
[RFC 1105](https://rust-lang.github.io/rfcs/1105-api-evolution.html) lays the foundations for what constitutes a breaking change.
Breakage may be deemed acceptable or not based on its actual impact,
which can be approximated with a [crater](https://github.com/rust-lang/crater/blob/master/docs/bot-usage.md) run.

If the impact isn't too high, looping in maintainers of broken crates and submitting PRs to fix them can be a valid strategy.


<a id=breaking_changes_new_trait_impls></a>

# Breakage from new trait impls

A lot of PRs to the standard library are adding new impls for already stable traits,
which can break consumers in many weird and wonderful ways.
Below are some examples of breakage from new trait impls that
may not be obvious just from the change made to the standard library.

## Inference breaks when a second generic impl is introduced

Rust will use the fact that there's only a single impl for a generic trait during inference.
This breaks once a second impl makes the type of that generic ambiguous.
Say we have:

```rust,ignore
// in `std`
impl From<&str> for Arc<str> { .. }
```

```rust,ignore
// in an external `lib`
let b = Arc::from("a");
```

then we add:

```diff
impl From<&str> for Arc<str> { .. }
+ impl From<&str> for Arc<String> { .. }
```

then

```rust,ignore
let b = Arc::from("a");
```

will no longer compile, because we've previously been relying on inference to figure out the `T` in `Box<T>`.

This kind of breakage can be ok, but a [crater](https://github.com/rust-lang/crater/blob/master/docs/bot-usage.md) run should estimate the scope.

## Deref coercion breaks when a new impl is introduced

Rust will use deref coercion to find a valid trait impl if the arguments don't type check directly.
This only seems to occur if there's a single impl so introducing a new one may break consumers relying on deref coercion.
Say we have:

```rust,ignore
// in `std`
impl Add<&str> for String { .. }

impl Deref for String { type Target = str; .. }
```

```rust,ignore
// in an external `lib`
let a = String::from("a");
let b = String::from("b");

let c = a + &b;
```

then we add:

```diff,ignore
  impl Add<&str> for String { .. }
+ impl Add<char> for String { .. }
```

then

```rust,ignore
let c = a + &b;
```

will no longer compile, because we won't attempt to use deref to coerce the `&String` into `&str`.

This kind of breakage can be ok, but a [crater](https://github.com/rust-lang/crater/blob/master/docs/bot-usage.md) run should estimate the scope.

## `#[fundamental]` types

Type annotated with the `#[fundamental]` attribute have different coherence rules.
See [RFC 1023](https://rust-lang.github.io/rfcs/1023-rebalancing-coherence.html) for details.
That includes:

- `&T`
- `&mut T`
- `Box<T>`
- `Pin<T>`

Typically, the scope of breakage in new trait impls is limited to inference and deref-coercion.
New trait impls on `#[fundamental]` types may overlap with downstream impls and cause other kinds of breakage.

[RFC 1023]: https://rust-lang.github.io/rfcs/1023-rebalancing-coherence.html


<a id=breaking_changes_prelude></a>

# Breaking changes to the prelude

Making changes to the prelude can easily cause breakage because it impacts all Rust code.
In most cases the impact is limited since prelude items have the lowest priority in name lookup (lower than glob imports), but there are two cases where this doesn't work.

## Traits

Adding a new trait to the prelude causes new methods to become available for existing types.
This can cause name resolution errors in user code if a method with the same name is also available from a different trait.

For this reason, [`TryFrom` and `TryInto`](https://github.com/rust-lang/rust/issues/33417) were only added to the prelude for the 2021 edition despite being stabilized in 2019.

## Macros

Unlike other item types, rustc's name resolution for macros does not support giving prelude macros a lower priority than other macros, even if the macro is unstable.
As a general rule, avoid adding macros to the prelude except at edition boundaries.

This issues was encoutered when trying to land the [`assert_matches!` macro](https://github.com/rust-lang/rust/issues/82913).


<a id=breaking_changes_doc_changes></a>

# Breaking documentation changes

First, short explanation about what a stability guarantee is: a statement in
the document which explains what the item is doing in a precise case. For
example:

 * Showing precisely how a function on floats handles `NaN`.
 * Saying that a sort method has a particular running-time bound.

So if a doc change updates/adds/removes a stability guarantee, it has to be
**very** carefully handled and needs to go through the
[libs API team FCP](https://rustc-dev-guide.rust-lang.org/stabilization_guide.html?highlight=fcp#fcp).

It can be circumvented by adding a `# Current Implementation` section
[like done here](https://github.com/rust-lang/rust/blob/4a8d2e3856c0c75c71998b6c85937203839b946d/library/alloc/src/slice.rs#L250).


<a id=policy_must_use></a>

# When to add `#[must_use]`

The `#[must_use]` attribute can be applied to types or functions when failing to explicitly consider them or their output is almost certainly a bug.

As an example, `Result` is `#[must_use]` because failing to consider it may indicate a caller didn't realise a method was fallible:

```rust,ignore
// Is `check_status` infallible? Or did we forget to look at its `Result`?
check_status();
```

Operators like `saturating_add` are also `#[must_use]` because failing to consider their output might indicate a caller didn't realise they don't mutate the left-hand-side:

```rust,ignore
// A caller might assume this method mutates `a`
a.saturating_add(b);
```

Combinators produced by the `Iterator` trait are `#[must_use]` because failing to use them might indicate a caller didn't realize `Iterator`s are lazy and won't actually do anything unless you drive them:

```rust,ignore
// A caller might not realise this code won't do anything
// unless they call `collect`, `count`, etc.
v.iter().map(|x| println!("{}", x));
```

On the other hand, `thread::JoinHandle` isn't `#[must_use]` because spawning fire-and-forget work is a legitimate pattern and forcing callers to explicitly ignore handles could be a nuisance rather than an indication of a bug:

```rust,ignore
thread::spawn(|| {
    // this background work isn't waited on
});
```

## For reviewers

Look for any legitimate use-cases where `#[must_use]` will cause callers to explicitly ignore values. If these are common then `#[must_use]` probably isn't appropriate.

The `#[must_use]` attribute only produces warnings, so it can technically be introduced at any time. To avoid accumulating nuisance warnings though ping `@rust-lang/libs` for input before adding new `#[must_use]` attributes to existing types and functions.


<a id=policy_specialization></a>

# Using specialization

Specialization is currently unstable. You can track its progress [here](https://github.com/rust-lang/rust/issues/31844).

We try to avoid leaning on specialization too heavily, limiting its use to optimizing specific implementations. These specialized optimizations use a private trait to find the correct implementation, rather than specializing the public method itself. Any use of specialization that changes how methods are dispatched for external callers should be carefully considered.

As an example of how to use specialization in the standard library, consider the case of creating an `Rc<[T]>` from a `&[T]`:

```rust,ignore
impl<T: Clone> From<&[T]> for Rc<[T]> {
    #[inline]
    fn from(v: &[T]) -> Rc<[T]> {
        unsafe { Self::from_iter_exact(v.iter().cloned(), v.len()) }
    }
}
```

It would be nice to have an optimized implementation for the case where `T: Copy`:

```rust,ignore
impl<T: Copy> From<&[T]> for Rc<[T]> {
    #[inline]
    fn from(v: &[T]) -> Rc<[T]> {
        unsafe { Self::copy_from_slice(v) }
    }
}
```

Unfortunately we couldn't have both of these impls normally, because they'd overlap. This is where private specialization can be used to choose the right implementation internally. In this case, we use a trait called `RcFromSlice` that switches the implementation:

```rust,ignore
impl<T: Clone> From<&[T]> for Rc<[T]> {
    #[inline]
    fn from(v: &[T]) -> Rc<[T]> {
        <Self as RcFromSlice<T>>::from_slice(v)
    }
}

/// Specialization trait used for `From<&[T]>`.
trait RcFromSlice<T> {
    fn from_slice(slice: &[T]) -> Self;
}

impl<T: Clone> RcFromSlice<T> for Rc<[T]> {
    #[inline]
    default fn from_slice(v: &[T]) -> Self {
        unsafe { Self::from_iter_exact(v.iter().cloned(), v.len()) }
    }
}

impl<T: Copy> RcFromSlice<T> for Rc<[T]> {
    #[inline]
    fn from_slice(v: &[T]) -> Self {
        unsafe { Self::copy_from_slice(v) }
    }
}
```

Only specialization using the `min_specialization` feature should be used. The full `specialization` feature is known to be unsound.

## Specialization attributes

There are two unstable attributes that can be used to allow a trait bound in a specializing implementation that does not appear in the default implementation.

`rustc_specialization_trait` restricts the implementations of a trait to be "always applicable". Implementing traits annotated with `rustc_specialization_trait` is unstable, so this should not be used on any stable traits exported from the standard library. `Sized` is an exception, and can have this attribute because it already cannot be implemented by an `impl` block.
**Note**: `rustc_specialization_trait` only prevents incorrect monomorphizations, it does not prevent a type from being coerced between specialized and unspecialized types which can be important when specialization must be applied consistently. See [rust-lang/rust#85863](https://github.com/rust-lang/rust/issues/85863) for more details.

`rustc_unsafe_specialization_marker` allows specializing on a trait with no associated items. The attribute is `unsafe` because lifetime constraints from the implementations of the trait are not considered when specializing. The following example demonstrates a limitation of `rustc_unsafe_specialization_marker`, the specialized implementation is used for *all* shared reference types, not just those with `'static` lifetime. Because of this, new uses of `rustc_unsafe_specialization_marker` should be avoided.

```rust,ignore
#[rustc_unsafe_specialization_marker]
trait StaticRef {}

impl<T> StaticRef for &'static T {}

trait DoThing: Sized {
    fn do_thing(self);
}

impl<T> DoThing for T {
    default fn do_thing(self) {
        // slow impl
    }
}

impl<T: StaticRef> DoThing for T {
    fn do_thing(self) {
        // fast impl
    }
}
```

`rustc_unsafe_specialization_marker` exists to allow existing specializations that are based on marker traits exported from `std`, such as `Copy`, `FusedIterator` or `Eq`.


<a id=policy_inline></a>

# When to `#[inline]`

Inlining is a trade-off between potential execution speed, compile time and code size. There's some discussion about it in [this PR to the `hashbrown` crate](https://github.com/rust-lang/hashbrown/pull/119). From the thread:

> `#[inline]` is very different than simply just an inline hint. As I mentioned before, there's no equivalent in C++ for what `#[inline]` does. In debug mode rustc basically ignores `#[inline]`, pretending you didn't even write it. In release mode the compiler will, by default, codegen an `#[inline]` function into every single referencing codegen unit, and then it will also add `inlinehint`. This means that if you have 16 CGUs and they all reference an item, every single one is getting the entire item's implementation inlined into it.

You can add `#[inline]`:

- To public, small, non-generic functions.

You shouldn't need `#[inline]`:

- On methods that have any generics in scope.
- On methods on traits that don't have a default implementation.

`#[inline]` can always be introduced later, so if you're in doubt they can just be removed.

## What about `#[inline(always)]`?

You should just about never need `#[inline(always)]`. It may be beneficial for private helper methods that are used in a limited number of places or for trivial operators. A micro benchmark should justify the attribute.

## For reviewers

`#[inline]` can always be added later, so if there's any debate about whether it's appropriate feel free to defer it by removing the annotations for a start.


<a id=policy_doc_alias></a>

doc alias policy
================

Rust's documentation supports adding aliases to any declaration (such as a
function, type, or constant), using the syntax `#[doc(alias = "name")]`. We
want to use doc aliases to help people find what they're looking for, while
keeping those aliases maintainable and high-value. This policy outlines the
cases where we add doc aliases, and the cases where we omit those aliases.

- We must have a reasonable expectation that people might search for the term
  in the documentation search. Rust's documentation provides a name search, not
  a full-text search; as such, we expect that people may search for plausible
  names, but that for more general documentation searches they'll turn to a web
  search engine.
  - Related: we don't expect that people are currently searching Rust
    documentation for language-specific names from arbitrary languages they're
    familiar with, and we don't want to add that as a new documentation search
    feature; please don't add aliases based on your favorite language. Those
    mappings should live in separate guides or references. We do expect that
    people might look for the Rust name of a function they reasonably expect to
    exist in Rust (e.g. a system function or a C library function), to try to
    figure out what Rust called that function.
- The proposed alias must be a name we would plausibly have used for the
  declaration. For instance, `mkdir` for `create_dir`, or `rmdir` for
  `remove_dir`, or `popcnt` and `popcount` for `count_ones`, or `umask` for
  `mode`. This feeds into the reasonable expectation that someone might search
  for the name and expect to find it ("what did Rust call `mkdir`").
- There must be an obvious single target for the alias that is an *exact*
  analogue of the aliased name. We will not add the same alias to multiple
  declarations. (`const` and non-`const` versions of the same function are
  fine.) We will also not add an alias for a function that's only somewhat
  similar or related.
- The alias must not conflict with the actual name of any existing declaration.
- As a special case for stdarch, aliases from exact assembly instruction names
  to the corresponding intrinsic function are welcome, as long as they don't
  conflict with other names.


<a id=policy_safety_comments></a>

# Safety comments

Using [`unsafe`] blocks is often required in the Rust compiler or standard
library, but this is not done without rules: each `unsafe` block should have
a `SAFETY:` comment explaining why the block is safe, which invariants are
used and must be respected. Below are some examples taken from the standard
library:

[`unsafe`]: https://doc.rust-lang.org/stable/std/keyword.unsafe.html

## Inside `unsafe` elements

This one shows how an `unsafe` function can pass the requirements through to its
caller with the use of documentation in a `# Safety` section while still having
more invariants needed that are not required from callers. `clippy` has a
lint for `# Safety` sections by the way.

[See the example on github][as_bytes_mut]

```rust,ignore
/// Converts a mutable string slice to a mutable byte slice.
///
/// # Safety
///
/// The caller must ensure that the content of the slice is valid UTF-8
/// before the borrow ends and the underlying `str` is used.
///
/// Use of a `str` whose contents are not valid UTF-8 is undefined behavior.
///
/// ...
pub unsafe fn as_bytes_mut(&mut self) -> &mut [u8] {
    // SAFETY: the cast from `&str` to `&[u8]` is safe since `str`
    // has the same layout as `&[u8]` (only libstd can make this guarantee).
    // The pointer dereference is safe since it comes from a mutable reference which
    // is guaranteed to be valid for writes.
    unsafe { &mut *(self as *mut str as *mut [u8]) }
}
```

This example is for a function but the same principle applies to `unsafe trait`s
like [`Send`] or [`Sync`] for example, though they have no `# Safety` section
since their entire documentation is about why they are `unsafe`.

Note that in the Rust standard library, [`unsafe_op_in_unsafe_fn`] is active
and so each `unsafe` operation in an `unsafe` function must be enclosed in an
`unsafe` block. This makes it easier to review such functions and to document
their `unsafe` parts.

[`Send`]: https://doc.rust-lang.org/stable/std/marker/trait.Send.html
[`Sync`]: https://doc.rust-lang.org/stable/std/marker/trait.Sync.html
[as_bytes_mut]: https://github.com/rust-lang/rust/blob/a08f25a7ef2800af5525762e981c24d96c14febe/library/core/src/str/mod.rs#L278
[`unsafe_op_in_unsafe_fn`]: https://doc.rust-lang.org/rustc/lints/listing/allowed-by-default.html#unsafe-op-in-unsafe-fn

## Inside *safe* elements

Inside safe elements, a `SAFETY:` comment must not depend on anything from the
caller beside properly constructed types and values (i.e, if your function
receives a reference that is unaligned or null, it is the caller fault if it
fails and not yours).

`SAFETY` comments in *safe* elements often rely on checks that are done before
the `unsafe` block or on type invariants, like a division by `NonZeroU8` would
not check for `0` before dividing.

[See the example on github][split_at]

```rust,ignore
pub fn split_at(&self, mid: usize) -> (&str, &str) {
    // is_char_boundary checks that the index is in [0, .len()]
    if self.is_char_boundary(mid) {
        // SAFETY: just checked that `mid` is on a char boundary.
        unsafe { (self.get_unchecked(0..mid), self.get_unchecked(mid..self.len())) }
    } else {
        slice_error_fail(self, 0, mid)
    }
}
```

[split_at]: https://github.com/rust-lang/rust/blob/a08f25a7ef2800af5525762e981c24d96c14febe/library/core/src/str/mod.rs#L570


<a id=policy_target_code></a>

# Reviewing target-specific code

When reviewing target-specific code, depending on the [tier] of the target in
question, different level of scrutiny is expected from reviewers.

For tier 1 targets, the reviewer should perform a full review of the code.
Essentially treat the code as *not* platform specific.

For tier 2 and tier 3 targets, the reviewer should confirm that the code:

* Only affects 1 or more of such targets (i.e., is truly target-specific)
* Does not introduce new licensing hazards (e.g., license headers or similar)
* Is either proposed by a target maintainer[^1] or has pinged and received +1s
  from at least one target maintainer. Where no maintainer is present, look for
  whether the author is reputable and/or affiliated with the target in some way
  (e.g., authored original code, works for a company maintaining the target, etc.).

Note that this review does *not* include checking for correctness or for code
quality. We lack the review bandwidth or expertise to perform detailed reviews
of tier 2 and tier 3 targets.

[^1]: Target maintainers are listed for most targets in the [platform support] documentation.

[tier]: https://doc.rust-lang.org/nightly/rustc/platform-support.html
[platform support]: https://doc.rust-lang.org/nightly/rustc/platform-support.html


<a id=policy_extension_traits></a>

# Why the standard library uses extension traits (and not `cfg`-guarded items)

A common pattern in the standard library is to put target-specific methods into
extension traits, rather than providing them as `cfg`-guarded methods directly
on objects themselves. For example, the many extension traits in
[`std::os::unix::prelude`](https://doc.rust-lang.org/std/os/unix/prelude/index.html)
provide UNIX-specific methods on standard types.

The standard library could, instead, provide these methods directly on the
standard types, guarded by `#[cfg(unix)]`. However, it does not do so, and PRs
adding `cfg`-guarded methods are often rejected.

Providing these methods via extension traits forces code to explicitly use
those extension traits in order to access the methods. This, effectively,
requires code to declare whether it depends on target-specific functionality,
either because the code is target-specific, or because it has appropriately
`cfg`-guarded code for different targets. Without these extension traits, code
could more easily use target-specific functionality "accidentally".

This policy may change in the future if Rust develops better mechanisms for
helping code explicitly declare its portability, or lack of portability, before
accessing target-specific functionality.


<a id=tricky_may_dangle></a>

# Drop and `#[may_dangle]`

A generic `Type<T>` that manually implements `Drop` should consider whether a `#[may_dangle]` attribute is appropriate on `T`. The [Nomicon](https://doc.rust-lang.org/nomicon/dropck.html) has some details on what `#[may_dangle]` is all about.

If a generic `Type<T>` has a manual drop implementation that may also involve dropping `T` then dropck needs to know about it. If `Type<T>`'s ownership of `T` is expressed through types that don't drop `T` themselves such as `ManuallyDrop<T>`, `*mut T`, or `MaybeUninit<T>` then `Type<T>` also [needs a `PhantomData<T>` field](https://rust-lang.github.io/rfcs/0769-sound-generic-drop.html#phantom-data) to tell dropck that `T` may be dropped. Types in the standard library that use the internal `Unique<T>` pointer type don't need a `PhantomData<T>` marker field. That's taken care of for them by `Unique<T>`.

As a real-world example of where this can go wrong, consider an `OptionCell<T>` that looks something like this:

```rust,ignore
struct OptionCell<T> {
    is_init: bool,
    value: MaybeUninit<T>,
}

impl<T> Drop for OptionCell<T> {
    fn drop(&mut self) {
        if self.is_init {
            // Safety: `value` is guaranteed to be fully initialized when `is_init` is true.
            // Safety: The cell is being dropped, so it can't be accessed again.
            unsafe { self.value.assume_init_drop() };
        }
    }
}
```

Adding a `#[may_dangle]` attribute to this `OptionCell<T>` that didn't have a `PhantomData<T>` marker field opened up [a soundness hole](https://github.com/rust-lang/rust/issues/76367) for `T`'s that didn't strictly outlive the `OptionCell<T>`, and so could be accessed after being dropped in their own `Drop` implementations. The correct application of `#[may_dangle]` also required a `PhantomData<T>` field:

```diff,ignore
struct OptionCell<T> {
    is_init: bool,
    value: MaybeUninit<T>,
+   _marker: PhantomData<T>,
}

- impl<T> Drop for OptionCell<T> {
+ unsafe impl<#[may_dangle] T> Drop for OptionCell<T> {
```

## For reviewers

If there's a manual `Drop` implementation, consider whether `#[may_dangle]` is appropriate. If it is, make sure there's a `PhantomData<T>` too either through `Unique<T>` or as a field directly.


<a id=tricky_generics_and_unsafe></a>

# Generics and unsafe

Be careful of generic types that interact with unsafe code. Unless the generic type is bounded by an unsafe trait that specifies its contract, we can't rely on the results of generic types being reliable or correct.

A place where this commonly comes up is with the `RangeBounds` trait. You might assume that the start and end bounds given by a `RangeBounds` implementation will remain the same since it works through shared references. That's not necessarily the case though, an adversarial implementation may change the bounds between calls:

```rust,ignore
struct EvilRange(Cell<bool>);

impl RangeBounds<usize> for EvilRange {
    fn start_bound(&self) -> Bound<&usize> {
        Bound::Included(if self.0.get() {
            &1
        } else {
            self.0.set(true);
            &0
        })
    }
    fn end_bound(&self) -> Bound<&usize> {
        Bound::Unbounded
    }
}
```

This has [caused problems in the past](https://github.com/rust-lang/rust/issues/81138) for code making safety assumptions based on bounds without asserting they stay the same.

Code using generic types to interact with unsafe should try convert them into known types first, then work with those instead of the generic. For our example with `RangeBounds`, this may mean converting into a concrete `Range`, or a tuple of `(Bound, Bound)`.

## For reviewers

Look out for generic functions that also contain unsafe blocks and consider how adversarial implementations of those generics could violate safety.


<a id=team_summary></a>

# The Library Team

The Rust standard library and the official `rust-lang` crates are
the responsibility of the Library Team.
The Library team makes sure the libraries are maintained,
PRs get reviewed, and issues get handled in time,
although that does not mean the team members are doing all the work themselves.
Many team members and other contributors are involved in this work,
and the team's main task is to guide and enable that work.

## The Library API Team

A very critical aspect of maintaining and evolving the standard library is its stability.
Unlike other crates, we can not release a new major version once in a while for backwards
incompatible changes. Every version of the standard library is semver-compatible
with all previous versions since Rust 1.0.

This means that we have to be very careful with additions and changes to the public interface.
We can deprecate things if necessary,
but removing items or changing signatures is almost never an option.
As a result, we are very careful with stabilizing additions to the standard library.
Once something is stable, we're basically stuck with it forever.

To guard the stability and prevent us from adding things we'll regret later,
we have a team that specifically focuses on the public API.
Every RFC and stabilization of a library addition/change goes through a FCP process
in which the members of the Library API Team are asked to sign off on the change.

The members of this team are not necessarily familiar with the implementation details
of the standard library, but are experienced with API design and understand the details
of breaking changes and how they are avoided.

## The Library Contributors

In addition to the two teams above, we also have the Library Contributors,
which is a somewhat more loosely defined team consisting of those who regularly contribute
or review changes to the standard libraries.

Many of these contributors have a specific area of expertise,
for example certain data structures or a specific operating system.

## Team Membership

The Library Team will privately discuss potential new members for itself and Library Contributors,
and extend an invitation after all members and the moderation team is on board with the potential addition.

See [Membership](./membership.md) for details.

### r+ permission

All members of the Library Team, the Library API Team, and the Library Contributors
have the permission to approve PRs, and are expected to handle this with care.
See [Reviewing](./reviewing.md) for details.

### high-five rotation

Some of the members of the team are part of the 'high-five rotation';
the list from which the high-five bot picks reviewers to assign new PRs to.

Being a member of one of the teams does not come with the expectation to be on this list.
However, members of this list should be on at least one of the three library teams.
See [Reviewing](./reviewing.md) for details.


<a id=team_meetings></a>

# Meetings

Currently, both the Library Team and the Library API Team have a weekly hour-long meeting.
Both meetings are open to non-members by default, although some might be (partially) private when agenda topics require that.

The meetings are held as video calls through [Jitsi](https://meet.jit.si/), but everyone is welcome to join without video or even audio.
If you want to participate in meeting discussions through text, you can do so through Jitsi's chat function.

Meetings and their agendas are announced in the [#t-libs/meetings](https://rust-lang.zulipchat.com/#narrow/stream/259402-t-libs.2Fmeetings) channel on Zulip.

Agendas are generated by the [`fully-automatic-rust-libs-team-triage-meeting-agenda-generator`](https://github.com/rust-lang/libs-team/tree/main/tools/agenda-generator),
which will include all relevant issues and PRs, such as those tagged with `I-nominated` or `S-waiting-on-team`.

If you have any specific topics you'd like to have discussed in a meeting, feel free to open an issue on the [`libs-team`](https://github.com/rust-lang/libs-team/) repository
and mark it as `I-nominated` and `T-libs` or `T-libs-api`. Or just leave a message in the Zulip channel.

All the meetings, including those of the library working groups, can be found on our Google Calendar:

<iframe width="100%" height="500px" src="https://calendar.google.com/calendar/embed?src=9kuu8evq4eh6uacm262k0phri8%40group.calendar.google.com"></iframe>

[ICS link](https://calendar.google.com/calendar/ical/9kuu8evq4eh6uacm262k0phri8%40group.calendar.google.com/public/basic.ics)


<a id=team_membership></a>

# Membership

## Library Contributors

Membership to Library Contributors can be offered by the Library Team once
a regular contributor has made a number of significant contributions over some period of time,
and has shown to have a good judgement on what changes are acceptable.

## The Library Team and Library API Team

The Library Team and Library API Team pick their own members,
although it's expected that new members come from the Library Contributors or another Rust team,
and have already been involved in relevant library work.

## The process

In all cases, the process of adding a new members goes as follows:

1. A member of the Library (API) Team proposes the addition of a contributor on our private Zulip channel.
   This proposal includes:
   - A short description of what this person has been working on; how they have been contributing.
   - A few specific examples of cases where this person clearly communicated their ideas.
   - A few specific examples that show this person understands what are and what aren't acceptable changes.\
     Someone who makes significant contributions but usually needs to make large adjustments to their PRs might be a wonderful external contributor,
     but might not yet be a good match for membership with review permissions expecting to judge other contributions.
2. Every single team member is asked for their input. No team member must have any objections.
   - Objections are ideally shared with the entire team, but may also be shared privately with the team lead or the moderation team.
   - Objections ideally include examples showing behavior not in line with the expectations described under step 1
     (or the code of conduct).
3. The team lead reaches out to the moderation team to ask if they are aware of any objections.
4. Only once the team members and the moderation team agree, the new contributor is invited to join.
5. If the new contributor agrees too, a PR is sent to the `team` repository to add them.
6. A blog post is published in the Internals Blog with a short introduction of the new contributor.
   The contents of this post can be based on some of the points brought up in the email from step 1.
   The contents are first checked with the new contributor before it is published.


<a id=team_reviewing></a>

# Reviewing

Every member of the Library Team, Library API Team, and Library Contributors has 'r+ rights'.
That is, the ability to approve a PR and instruct [`@bors`](https://bors.rust-lang.org/)
to test and merge it into Rust nightly.

If you decide to review a PR, thank you!
But please keep in mind:

- You are always welcome to review any PR, regardless of who it is assigned to.
  However, do not approve PRs unless:
    - You are confident that nobody else wants to review it first. If you think someone else on the team would be a better person to review it, feel free to reassign it to them.
    - You are confident in that part of the code.
    - You are confident it will not cause any breakage or regress performance.
    - It does not change the public API, including any stable promises we make in documentation, unless there's a finished FCP for the change.
      - For unstable API changes/additions, it can be acceptable to skip the RFC process if the design is small and the change is uncontroversial.
        Make sure to involve `@rust-lang/libs-api` on such changes.
- Always be polite when reviewing: you are a representative of the Rust project, so it is expected that you will go above and beyond when it comes to the Code of Conduct.

See <https://forge.rust-lang.org/compiler/reviews.html> for more information on reviewing.

## High-five rotation

Some of the members of the team are part of the 'high-five rotation';
the list from which the high-five bot picks reviewers to assign new PRs to.

Being a member of one of the teams does not come with the expectation to be on this list.
However, members of this list should be on at least one of the three library teams.

If the bot assigns you a PR for which you do not have the time or expertise to review it,
feel free to reassign it to someone else.
To assign it to another random person picked from the high-five rotation,
use `r? rust-lang/libs`.

If you find yourself unable to do any reviews for an extended period of time,
it might be a good idea to (temporarily) remove yourself from the list.
To add or remove yourself from the list, send a PR to change the
[triagebot configuration file](https://github.com/rust-lang/rust/blob/master/triagebot.toml).

## Rolling up

For library PRs, rolling up (`@bors r+ rollup`) is often fine,
in particular if it's only a new unstable addition or if it only touches docs.
PRs that impact performance should not be rolled up (`@bors rollup=never`),
PRs with subtle platform specific changes might also not be great candiates for rolling up.
See the [rollup guidelines](https://forge.rust-lang.org/compiler/reviews.html#rollups) for more
details on when to rollup.


