# Contents ๐๐

 ๐ก๐  Getting Started
 โก Installation
 โก Cargo Tool
 โก Windows Resource(ICO) 
 โก mdBook ็ตๅญไนฆๆกๆถ
 โก Packages Crates Modules
 โก HelloWorld
 โก Printing ๆๅฐไฟกๆฏ
 โก Guessing Game
 โก Basic Concepts & Data Types
 ๐ข๐ต Comments & Doc
 ๐ข๐ต Variables and Mutability ๅ้ไธๅฏๅๆง
 ๐ข๐ต Data Types ๅบๆฌๆฐๆฎ็ฑปๅ
 ๐ข๐ต Type Conversions ็ฑปๅ่ฝฌๆข
 ๐ข๐ต Control Flow ๆต็จๆงๅถ
 โก Features ็น่ฒๆฆๅฟต
 ๐ข๐ต Zero-cost Abstraction ้ถๆๆฌๆฝ่ฑก
 ๐ข๐ต Ownership ๆๆๆ
 ๐ข๐ต Borrowing ๅ็จๆๆๆ
 ๐ข๐ต Slices ๅ็็ฑปๅไธๆๆๆ
 โก Lifetime ็ๅฝๅจๆ
 ๐ข๐ต Function & Lifetimes
 ๐ข๐ต Temporary & Lifetimes elision
 ๐ข๐ต Lifetime Bound Syntax
 ๐ข๐ต Static ้ๆ็ๅฝๅจๆ
 ๐ข๐ต Struct ไธ็ๅฝๅจๆ
 ๐ข๐ต Trait ไธ็ๅฝๅจๆ
 โก Functional OOP ๅฝๆฐๅผ้ขๅๅฏน่ฑก็ผ็จ
 ๐ข๐ต Functions ๅฝๆฐ
 ๐ข๐ต FOOP ๅฝๆฐๅผ้ขๅๅฏน่ฑก็ผ็จ
 ๐ข๐ต Traits & Polymorphism
 ๐ข๐ต Dynamic vs Static Dispatch
 ๐ข๐ต Blog Demo
 ๐ข๐ต Traits ็น่ดจๆฉๅฑ
 ๐ข๐ต Drop & Copy Trait
 ๐ข๐ต Operator Overloading
 ๐ข๐ต Iterator ่ฟญไปฃๅจ
 ๐ข๐ต Generic Types
 โก Patterns & Match ๆจกๅผๅน้
 โก Enums ๆไธพ็ฑปๅ
 โก Structures ็ปๆไฝ
 โก Union ่ๅไฝ
 โก Error Handling ้่ฏฏๅค็
 ๐ข๐ต Panics Option Result
 ๐ข๐ต Unpacking & Propagating Errors with ?
 ๐ข๐ต Panic Hook
 ๐ข๐ต Error Message
 โก Collections ้ๅ
 ๐ข๐ต Vec ๅ้ๅ่กจ
 ๐ข๐ต String ๅญ็ฌฆไธฒๅ่กจ
 ๐ข๐ต VecDeque
 ๐ข๐ต LinkedList
 ๐ข๐ต HashMap
 ๐ข๐ต BTreeMap
 ๐ข๐ต HashSet BTreeSet
 ๐ข๐ต BinaryHeap
 โก Smart Pointers
 โก Box - heap allocation
 โก owning_ref ๅ ็จๅผ็จ
 โก I/O & Command Line
 ๐ข๐ต CLI Arguments
 ๐ข๐ต Shell ๅฝไปคๆง่ก
 ๐ข๐ต CLAP ๅฝไปค่กๅๆฐ่งฃๆๅจ
 ๐ข๐ต Files ๆไปถ่ฏปๅ
 ๐ก๐  Memory Layout ๅๅญๆจกๅ
 ๐ก๐  Advanced Features
 โก Unsafe Rust 
 โก FFI - Foreign Function Interface
 โก Type Layout
 โก Advanced traits
 โก Advanced types
 โก Closures ้ญๅ
 ๐ข๐ต Closures Lifetime
 ๐ข๐ต Closures Type Anonymity
 โก Macros ๅฎ
 ๐ก๐  Reflection
 ๐ก๐  Test ่ชๅจๆต่ฏ
 ๐ก๐  Asynchronous ๅผๆญฅ็ผ็จ
 ๐ก๐  Fearless Concurrency
 โก ๅบๆฌๅค็บฟ็จ็จๅบ
 โก Synchronization ๅๆญฅๅฏน่ฑก
 โก Message Passing ๆถๆฏไผ ้
 โก Shared State ๅฑไบซ็ถๆ 
 โก Send & Sync traits
 ๐ก๐  Multithreaded Web Server
 โก Thread Pool ็บฟ็จๆฑ ๅฎ็ฐ
 ๐ก๐  Game
 ๐ก๐  OpenCV in Rust
 ๐ก๐  rustc-serialize
 ๐ก๐  webview_sys
 ๐ก๐  Ruffle SWF Player
 ๐ก๐  Rust Reference
 โก Primitive Types
 โก Modules
 โก Macros
 โก Keywords
 โก Operators and Symbols
 โก Struct TypeId & Trait Any
 โก Struct Cell
 โก Struct Vec
 โก Trait Iterator
 โก std::fs
 โก Range Expressions



ๅฆๆ่ฆๆฅ็ๆฌ่บซ HTML ๆๆกฃ๏ผไฝฟ็จ rustup docs ๅฝไปคๆๅผ็ธๅบ็ๆๆกฃ้กต้ข๏ผ

```sh
    > rustup doc std::fmt::Display
    > rustup doc --book

    > rustup docs --help
    rustup.exe-doc
    Open the documentation for the current toolchain

    USAGE:
        rustup.exe doc [FLAGS] [OPTIONS] [topic]

    FLAGS:
            --alloc              The Rust core allocation and collections library
            --book               The Rust Programming Language book
            --cargo              The Cargo Book
            --core               The Rust Core Library
            --edition-guide      The Rust Edition Guide
            --embedded-book      The Embedded Rust Book
        -h, --help               Prints help information
            --nomicon            The Dark Arts of Advanced and Unsafe Rust Programming
            --path               Only print the path to the documentation
            --proc_macro         A support library for macro authors when defining new macros
            --reference          The Rust Reference
            --rust-by-example    A collection of runnable examples that illustrate various Rust concepts and standard
                                 libraries
            --rustc              The compiler for the Rust programming language
            --rustdoc            Generate documentation for Rust projects
            --std                Standard library API documentation
            --test               Support code for rustc's built in unit-test and micro-benchmarking framework
            --unstable-book      The Unstable Book 
```

ไธบไบๆนไพฟๅจๆๆกฃไน้ดๅฟซ้่ทณ่ฝฌ๏ผๆจ่ๅจ Sublime Text ็ฏๅขไธ้่ฏปๆๆกฃ๏ผๅช้่ฆๅฎ่ฃ run-snippet ๆไปถ๏ผ
ไฝฟ็จ F9 ๅฟซๆท้ฎ่ทณ่ฝฌๅฐๅๆ ไธ็ๆไปถๆ้พๆฅใ

ๅฟซ้ๅฎ่ฃ RunSnippet ๆไปถ๏ผ

- Ctrl+Shift+P ๆๅผ Sublime Text ๅฝไปค่ฐๆฟ๏ผ
- ๆง่ก Add Repository ๆทปๅ ๆฌๆไปถไปฃ็ ไปๅบๅฐๅ: https://github.com/jimboyeah/run-snippet
- ็ถๅๆง่ก Install Package ๅนถ่พๅฅ RunSnippt ่ฟ่ก็กฎ่ฎคๅฎ่ฃ๏ผ

ๆๅจๆทปๅ  Repository๏ผๆง่ก่ๅ๏ผ Perferences ๐ก Package Settings ๐ก Package Control ๐ก Settings

    "repositories":
    [
        "https://github.com/jimboyeah/run-snippet",
    ],

ๅฏไปฅๅจ Packages ็ฎๅฝๆง่กไปฅไธๅฝไปคๅฎ่ฃ RunSnippet ๆไปถ๏ผ

    git clone git@github.com/jimboyeah/run-snippet.git

ๆทปๅ ้็ฝฎๆไปถ๏ผ้ป่ฎคๅฏ็จๅ็ป่ทณ่ฝฌ๏ผๅฆๆ Sublime Text ๆฒกๆ่ฎพ็ฝฎๅ็ป๏ผๅๅจๅฝๅ View ๅผนๅบๆไปถ่ทณ่ฝฌ็ชๅฃ๏ผ
่ฟ็ง่กไธบๆ็นๆๆญๆ่ทฏใๆดๅ็็ๅๆณๆฏ GUI ่ฎพ็ฝฎ 2 ไธช Group๏ผๅนถไธๅจๅฆไธไธช Group ๅผนๅบๆไปถ Panelใ
Load settings from /Packages/Users/RunSnippet.sublime-settings

```json
    {
        "jump_between_group": true,
    }
```

ๆฌๆๆกฃๅๅฎนไธป่ฆๅ่ไปฅไธๅฎๆน่ตๆบๅฑๅผ๏ผๅฎ่ฃ Rust ๅ๏ผ็ดๆฅๅฏไปฅไฝฟ็จ rustup doc ๅฝไปคๆๅผๆฌๅฐๆๆกฃ๏ผ

- The Rust Programming Language
- Asynchronous Programming in Rust
- Rust By Example
- The Rust Reference
- The Reference
- The Rustonomicon
- The Unstable Book
- The rustc Contribution Guide
- The Edition Guide
- The Rustc Book
- The Cargo Book
- The Rustdoc Book
- The Embedded Rust Book
- Guide to Rustc Development
- The Rust RFC Book

Rust ๅฎๆนๆๆกฃๅๅซๅจๆ ๅๅบๆบไปฃ็ ไปๅบไธญ๏ผๅนถไฝไธบๅญๆจกๅๅผ็จ๏ผๅฏไปฅๅ็ฌๅ้ไธ่ฝฝ๏ผ

```sh
    git clone --depth=1 git@github.com:rust-lang/rust
    git submodule update --init --depth=1 --recursive

    git clone --depth=1 git@github.com:rust-lang/nomicon         src/doc/nomicon
    git clone --depth=1 git@github.com:rust-lang/reference       src/doc/reference
    git clone --depth=1 git@github.com:rust-lang/book            src/doc/book
    git clone --depth=1 git@github.com:rust-lang/rust-by-example src/doc/rust-by-example
    git clone --depth=1 git@github.com:rust-lang/rustc-dev-guide src/doc/rustc-dev-guide
    git clone --depth=1 git@github.com:rust-lang/edition-guide   src/doc/edition-guide
    git clone --depth=1 git@github.com:rust-embedded/book        src/doc/embedded-book

    git clone --depth=1 git@github.com:rust-lang/rfcs            src/doc/rfcs
    git clone --depth=1 git@github.com:rust-lang/cargo           src/tools/cargo
    git clone --depth=1 git@github.com:rust-lang/async-book      src/doc/async-book
    git clone --depth=1 git@github.com:rustwasm/wasm-bindgen     src/doc/wasm-bindgen
    git clone --depth=1 git@github.com:bytecodealliance/wasmtime src/doc/wasmtime

    # The Little Book of Rust Macros
    git clone --depth=1 git@github.com:DanielKeep/tlborm         src/doc/macros_little
    git clone --depth=1 git@github.com:veykril/tlborm            src/doc/macros_little2

    git clone --depth=1 git@github.com:rust-lang-nursery/rust-cookbook src/doc/rust-cookbook
```

## ๐ข๐ต The Rust Programming Language
- [The Rust Programming Language](https://doc.rust-lang.org/book/)

[Foreword](book/src/foreword.md)
[Introduction](ch00-00-introduction.md)

## Getting started

- [Getting Started](ch01-00-getting-started.md)
    - [Installation](ch01-01-installation.md)
    - [Hello, World!](ch01-02-hello-world.md)
    - [Hello, Cargo!](ch01-03-hello-cargo.md)

- [Programming a Guessing Game](ch02-00-guessing-game-tutorial.md)

- [Common Programming Concepts](ch03-00-common-programming-concepts.md)
    - [Variables and Mutability](ch03-01-variables-and-mutability.md)
    - [Data Types](ch03-02-data-types.md)
    - [How Functions Work](ch03-03-how-functions-work.md)
    - [Comments](ch03-04-comments.md)
    - [Control Flow](ch03-05-control-flow.md)

- [Understanding Ownership](ch04-00-understanding-ownership.md)
    - [What is Ownership?](ch04-01-what-is-ownership.md)
    - [References & Borrowing](ch04-02-references-and-borrowing.md)
    - [Slices](ch04-03-slices.md)

- [Using Structs to Structure Related Data](ch05-00-structs.md)
    - [Defining and Instantiating Structs](ch05-01-defining-structs.md)
    - [An Example Program Using Structs](ch05-02-example-structs.md)
    - [Method Syntax](ch05-03-method-syntax.md)

- [Enums and Pattern Matching](ch06-00-enums.md)
    - [Defining an Enum](ch06-01-defining-an-enum.md)
    - [The `match` Control Flow Operator](ch06-02-match.md)
    - [Concise Control Flow with `if let`](ch06-03-if-let.md)

## Basic Rust Literacy

- [Packages, Crates, and Modules](ch07-00-packages-crates-and-modules.md)
    - [Packages and crates for making libraries and executables](ch07-01-packages-and-crates-for-making-libraries-and-executables.md)
    - [Modules and `use` to control scope and privacy](ch07-02-modules-and-use-to-control-scope-and-privacy.md)

- [Common Collections](ch08-00-common-collections.md)
    - [Vectors](ch08-01-vectors.md)
    - [Strings](ch08-02-strings.md)
    - [Hash Maps](ch08-03-hash-maps.md)

- [Error Handling](ch09-00-error-handling.md)
    - [Unrecoverable Errors with `panic!`](ch09-01-unrecoverable-errors-with-panic.md)
    - [Recoverable Errors with `Result`](ch09-02-recoverable-errors-with-result.md)
    - [To `panic!` or Not to `panic!`](ch09-03-to-panic-or-not-to-panic.md)

- [Generic Types, Traits, and Lifetimes](ch10-00-generics.md)
    - [Generic Data Types](ch10-01-syntax.md)
    - [Traits: Defining Shared Behavior](ch10-02-traits.md)
    - [Validating References with Lifetimes](ch10-03-lifetime-syntax.md)

- [Testing](ch11-00-testing.md)
    - [Writing tests](ch11-01-writing-tests.md)
    - [Running tests](ch11-02-running-tests.md)
    - [Test Organization](ch11-03-test-organization.md)

- [An I/O Project: Building a Command Line Program](ch12-00-an-io-project.md)
    - [Accepting Command Line Arguments](ch12-01-accepting-command-line-arguments.md)
    - [Reading a File](ch12-02-reading-a-file.md)
    - [Refactoring to Improve Modularity and Error Handling](ch12-03-improving-error-handling-and-modularity.md)
    - [Developing the Libraryโs Functionality with Test Driven Development](ch12-04-testing-the-librarys-functionality.md)
    - [Working with Environment Variables](ch12-05-working-with-environment-variables.md)
    - [Writing Error Messages to Standard Error Instead of Standard Output](ch12-06-writing-to-stderr-instead-of-stdout.md)

## Thinking in Rust

- [Functional Language Features: Iterators and Closures](ch13-00-functional-features.md)
    - [Closures: Anonymous Functions that Can Capture Their Environment](ch13-01-closures.md)
    - [Processing a Series of Items with Iterators](ch13-02-iterators.md)
    - [Improving Our I/O Project](ch13-03-improving-our-io-project.md)
    - [Comparing Performance: Loops vs. Iterators](ch13-04-performance.md)

- [More about Cargo and Crates.io](ch14-00-more-about-cargo.md)
    - [Customizing Builds with Release Profiles](ch14-01-release-profiles.md)
    - [Publishing a Crate to Crates.io](ch14-02-publishing-to-crates-io.md)
    - [Cargo Workspaces](ch14-03-cargo-workspaces.md)
    - [Installing Binaries from Crates.io with `cargo install`](ch14-04-installing-binaries.md)
    - [Extending Cargo with Custom Commands](ch14-05-extending-cargo.md)

- [Smart Pointers](ch15-00-smart-pointers.md)
    - [`Box<T>` Points to Data on the Heap and Has a Known Size](ch15-01-box.md)
    - [The `Deref` Trait Allows Access to the Data Through a Reference](ch15-02-deref.md)
    - [The `Drop` Trait Runs Code on Cleanup](ch15-03-drop.md)
    - [`Rc<T>`, the Reference Counted Smart Pointer](ch15-04-rc.md)
    - [`RefCell<T>` and the Interior Mutability Pattern](ch15-05-interior-mutability.md)
    - [Creating Reference Cycles and Leaking Memory is Safe](ch15-06-reference-cycles.md)

- [Fearless Concurrency](ch16-00-concurrency.md)
    - [Threads](ch16-01-threads.md)
    - [Message Passing](ch16-02-message-passing.md)
    - [Shared State](ch16-03-shared-state.md)
    - [Extensible Concurrency: `Sync` and `Send`](ch16-04-extensible-concurrency-sync-and-send.md)

- [Object Oriented Programming Features of Rust](ch17-00-oop.md)
    - [Characteristics of Object-Oriented Languages](ch17-01-what-is-oo.md)
    - [Using Trait Objects that Allow for Values of Different Types](ch17-02-trait-objects.md)
    - [Implementing an Object-Oriented Design Pattern](ch17-03-oo-design-patterns.md)

## Advanced Topics

- [Patterns Match the Structure of Values](ch18-00-patterns.md)
    - [All the Places Patterns May be Used](ch18-01-all-the-places-for-patterns.md)
    - [Refutability: Whether a Pattern Might Fail to Match](ch18-02-refutability.md)
    - [All the Pattern Syntax](ch18-03-pattern-syntax.md)

- [Advanced Features](ch19-00-advanced-features.md)
    - [Unsafe Rust](ch19-01-unsafe-rust.md)
    - [Advanced Lifetimes](ch19-02-advanced-lifetimes.md)
    - [Advanced Traits](ch19-03-advanced-traits.md)
    - [Advanced Types](ch19-04-advanced-types.md)
    - [Advanced Functions & Closures](ch19-05-advanced-functions-and-closures.md)
    - [Macros](ch19-06-macros.md)

- [Final Project: Building a Multithreaded Web Server](ch20-00-final-project-a-web-server.md)
    - [A Single Threaded Web Server](ch20-01-single-threaded.md)
    - [Turning our Single Threaded Server into a Multithreaded Server](ch20-02-multithreaded.md)
    - [Graceful Shutdown and Cleanup](ch20-03-graceful-shutdown-and-cleanup.md)

- [Appendix](appendix-00.md)
    - [A - Keywords](appendix-01-keywords.md)
    - [B - Operators and Symbols](appendix-02-operators.md)
    - [C - Derivable Traits](appendix-03-derivable-traits.md)
    - [D - Useful Development Tools](appendix-04-useful-development-tools.md)
    - [E - Editions](appendix-05-editions.md)
    - [F - Translations](appendix-06-translation.md)
    - [G - How Rust is Made and โNightly Rustโ](appendix-07-nightly-rust.md)


## ๐ข๐ต The Rustdoc Book
- [The rustc book](https://doc.rust-lang.org/rustc/what-is-rustc.html)

- [What is rustdoc?](rustdoc/src/what-is-rustdoc.md)
- [How to write documentation](rustdoc/src/how-to-write-documentation.md)
- [What to include (and exclude)](rustdoc/src/what-to-include.md)
- [Command-line arguments](rustdoc/src/command-line-arguments.md)
- [The `#[doc]` attribute](rustdoc/src/the-doc-attribute.md)
- [Documentation tests](rustdoc/src/documentation-tests.md)
- [Linking to items by name](rustdoc/src/linking-to-items-by-name.md)
- [Lints](rustdoc/src/lints.md)
- [Passes](rustdoc/src/passes.md)
- [Advanced features](rustdoc/src/advanced-features.md)
- [Unstable features](rustdoc/src/unstable-features.md)
- [References](rustdoc/src/references.md)


## ๐ข๐ต Rust By Example
- [Rust by Example](https://doc.rust-lang.org/rust-by-example/index.html)

[Introduction](rust-by-example/src/index.md)

- [Hello World](rust-by-example/src/hello.md)
    - [Comments](rust-by-example/src/hello/comment.md)
    - [Formatted print](rust-by-example/src/hello/print.md)
        - [Debug](rust-by-example/src/hello/print/print_debug.md)
        - [Display](rust-by-example/src/hello/print/print_display.md)
            - [Testcase: List](rust-by-example/src/hello/print/print_display/testcase_list.md)
        - [Formatting](rust-by-example/src/hello/print/fmt.md)

- [Primitives](rust-by-example/src/primitives.md)
    - [Literals and operators](rust-by-example/src/primitives/literals.md)
    - [Tuples](rust-by-example/src/primitives/tuples.md)
    - [Arrays and Slices](rust-by-example/src/primitives/array.md)

- [Custom Types](rust-by-example/src/custom_types.md)
    - [Structures](rust-by-example/src/custom_types/structs.md)
    - [Enums](rust-by-example/src/custom_types/enum.md)
        - [use](rust-by-example/src/custom_types/enum/enum_use.md)
        - [C-like](rust-by-example/src/custom_types/enum/c_like.md)
        - [Testcase: linked-list](rust-by-example/src/custom_types/enum/testcase_linked_list.md)
    - [constants](rust-by-example/src/custom_types/constants.md)

- [Variable Bindings](rust-by-example/src/variable_bindings.md)
    - [Mutability](rust-by-example/src/variable_bindings/mut.md)
    - [Scope and Shadowing](rust-by-example/src/variable_bindings/scope.md)
    - [Declare first](rust-by-example/src/variable_bindings/declare.md)
    - [Freezing](rust-by-example/src/variable_bindings/freeze.md)

- [Types](rust-by-example/src/types.md)
    - [Casting](rust-by-example/src/types/cast.md)
    - [Literals](rust-by-example/src/types/literals.md)
    - [Inference](rust-by-example/src/types/inference.md)
    - [Aliasing](rust-by-example/src/types/alias.md)

- [Conversion](rust-by-example/src/conversion.md)
    - [`From` and `Into`](rust-by-example/src/conversion/from_into.md)
    - [`TryFrom` and `TryInto`](rust-by-example/src/conversion/try_from_try_into.md)
    - [To and from `String`s](rust-by-example/src/conversion/string.md)

- [Expressions](rust-by-example/src/expression.md)

- [Flow of Control](rust-by-example/src/flow_control.md)
    - [if/else](rust-by-example/src/flow_control/if_else.md)
    - [loop](rust-by-example/src/flow_control/loop.md)
        - [Nesting and labels](rust-by-example/src/flow_control/loop/nested.md)
        - [Returning from loops](rust-by-example/src/flow_control/loop/return.md)
    - [while](rust-by-example/src/flow_control/while.md)
    - [for and range](rust-by-example/src/flow_control/for.md)
    - [match](rust-by-example/src/flow_control/match.md)
        - [Destructuring](rust-by-example/src/flow_control/match/destructuring.md)
            - [tuples](rust-by-example/src/flow_control/match/destructuring/destructure_tuple.md)
            - [arrays/slices](rust-by-example/src/flow_control/match/destructuring/destructure_slice.md)
            - [enums](rust-by-example/src/flow_control/match/destructuring/destructure_enum.md)
            - [pointers/ref](rust-by-example/src/flow_control/match/destructuring/destructure_pointers.md)
            - [structs](rust-by-example/src/flow_control/match/destructuring/destructure_structures.md)
        - [Guards](rust-by-example/src/flow_control/match/guard.md)
        - [Binding](rust-by-example/src/flow_control/match/binding.md)
    - [if let](rust-by-example/src/flow_control/if_let.md)
    - [let-else](rust-by-example/src/flow_control/let_else.md)
    - [while let](rust-by-example/src/flow_control/while_let.md)

- [Functions](rust-by-example/src/fn.md)
    - [Methods](rust-by-example/src/fn/methods.md)
    - [Closures](rust-by-example/src/fn/closures.md)
        - [Capturing](rust-by-example/src/fn/closures/capture.md)
        - [As input parameters](rust-by-example/src/fn/closures/input_parameters.md)
        - [Type anonymity](rust-by-example/src/fn/closures/anonymity.md)
        - [Input functions](rust-by-example/src/fn/closures/input_functions.md)
        - [As output parameters](rust-by-example/src/fn/closures/output_parameters.md)
        - [Examples in `std`](rust-by-example/src/fn/closures/closure_examples.md)
            - [Iterator::any](rust-by-example/src/fn/closures/closure_examples/iter_any.md)
            - [Searching through iterators](rust-by-example/src/fn/closures/closure_examples/iter_find.md)
    - [Higher Order Functions](rust-by-example/src/fn/hof.md)
    - [Diverging functions](rust-by-example/src/fn/diverging.md)

- [Modules](rust-by-example/src/mod.md)
    - [Visibility](rust-by-example/src/mod/visibility.md)
    - [Struct visibility](rust-by-example/src/mod/struct_visibility.md)
    - [The `use` declaration](rust-by-example/src/mod/use.md)
    - [`super` and `self`](rust-by-example/src/mod/super.md)
    - [File hierarchy](rust-by-example/src/mod/split.md)

- [Crates](rust-by-example/src/crates.md)
    - [Creating a Library](rust-by-example/src/crates/lib.md)
    - [Using a Library](rust-by-example/src/crates/using_lib.md)

- [Cargo](rust-by-example/src/cargo.md)
    - [Dependencies](rust-by-example/src/cargo/deps.md)
    - [Conventions](rust-by-example/src/cargo/conventions.md)
    - [Tests](rust-by-example/src/cargo/test.md)
    - [Build Scripts](rust-by-example/src/cargo/build_scripts.md)

- [Attributes](rust-by-example/src/attribute.md)
    - [`dead_code`](rust-by-example/src/attribute/unused.md)
    - [Crates](rust-by-example/src/attribute/crate.md)
    - [`cfg`](rust-by-example/src/attribute/cfg.md)
        - [Custom](rust-by-example/src/attribute/cfg/custom.md)

- [Generics](rust-by-example/src/generics.md)
    - [Functions](rust-by-example/src/generics/gen_fn.md)
    - [Implementation](rust-by-example/src/generics/impl.md)
    - [Traits](rust-by-example/src/generics/gen_trait.md)
    - [Bounds](rust-by-example/src/generics/bounds.md)
        - [Testcase: empty bounds](rust-by-example/src/generics/bounds/testcase_empty.md)
    - [Multiple bounds](rust-by-example/src/generics/multi_bounds.md)
    - [Where clauses](rust-by-example/src/generics/where.md)
    - [New Type Idiom](rust-by-example/src/generics/new_types.md)
    - [Associated items](rust-by-example/src/generics/assoc_items.md)
        - [The Problem](rust-by-example/src/generics/assoc_items/the_problem.md)
        - [Associated types](rust-by-example/src/generics/assoc_items/types.md)
    - [Phantom type parameters](rust-by-example/src/generics/phantom.md)
        - [Testcase: unit clarification](rust-by-example/src/generics/phantom/testcase_units.md)

- [Scoping rules](rust-by-example/src/scope.md)
    - [RAII](rust-by-example/src/scope/raii.md)
    - [Ownership and moves](rust-by-example/src/scope/move.md)
        - [Mutability](rust-by-example/src/scope/move/mut.md)
        - [Partial moves](rust-by-example/src/scope/move/partial_move.md)
    - [Borrowing](rust-by-example/src/scope/borrow.md)
        - [Mutability](rust-by-example/src/scope/borrow/mut.md)
        - [Aliasing](rust-by-example/src/scope/borrow/alias.md)
        - [The ref pattern](rust-by-example/src/scope/borrow/ref.md)
    - [Lifetimes](rust-by-example/src/scope/lifetime.md)
        - [Explicit annotation](rust-by-example/src/scope/lifetime/explicit.md)
        - [Functions](rust-by-example/src/scope/lifetime/fn.md)
        - [Methods](rust-by-example/src/scope/lifetime/methods.md)
        - [Structs](rust-by-example/src/scope/lifetime/struct.md)
        - [Traits](rust-by-example/src/scope/lifetime/trait.md)
        - [Bounds](rust-by-example/src/scope/lifetime/lifetime_bounds.md)
        - [Coercion](rust-by-example/src/scope/lifetime/lifetime_coercion.md)
        - [Static](rust-by-example/src/scope/lifetime/static_lifetime.md)
        - [Elision](rust-by-example/src/scope/lifetime/elision.md)

- [Traits](rust-by-example/src/trait.md)
    - [Derive](rust-by-example/src/trait/derive.md)
    - [Returning Traits with `dyn`](rust-by-example/src/trait/dyn.md)
    - [Operator Overloading](rust-by-example/src/trait/ops.md)
    - [Drop](rust-by-example/src/trait/drop.md)
    - [Iterators](rust-by-example/src/trait/iter.md)
    - [`impl Trait`](rust-by-example/src/trait/impl_trait.md)
    - [Clone](rust-by-example/src/trait/clone.md)
    - [Supertraits](rust-by-example/src/trait/supertraits.md)
    - [Disambiguating overlapping traits](rust-by-example/src/trait/disambiguating.md)

- [macro_rules!](rust-by-example/src/macros.md)
    - [Syntax](rust-by-example/src/macros/syntax.md)
        - [Designators](rust-by-example/src/macros/designators.md)
        - [Overload](rust-by-example/src/macros/overload.md)
        - [Repeat](rust-by-example/src/macros/repeat.md)
    - [DRY (Don't Repeat Yourself)](rust-by-example/src/macros/dry.md)
    - [DSL (Domain Specific Languages)](rust-by-example/src/macros/dsl.md)
    - [Variadics](rust-by-example/src/macros/variadics.md)

- [Error handling](rust-by-example/src/error.md)
    - [`panic`](rust-by-example/src/error/panic.md)
    - [`abort` & `unwind`](rust-by-example/src/error/abort_unwind.md)
    - [`Option` & `unwrap`](rust-by-example/src/error/option_unwrap.md)
        - [Unpacking options with `?`](rust-by-example/src/error/option_unwrap/question_mark.md)
        - [Combinators: `map`](rust-by-example/src/error/option_unwrap/map.md)
        - [Combinators: `and_then`](rust-by-example/src/error/option_unwrap/and_then.md)
        - [Defaults: `or`, `or_else`, `get_or_insert`, `get_or_insert_with`](rust-by-example/src/error/option_unwrap/defaults.md)
    - [`Result`](rust-by-example/src/error/result.md)
        - [`map` for `Result`](rust-by-example/src/error/result/result_map.md)
        - [aliases for `Result`](rust-by-example/src/error/result/result_alias.md)
        - [Early returns](rust-by-example/src/error/result/early_returns.md)
        - [Introducing `?`](rust-by-example/src/error/result/enter_question_mark.md)
    - [Multiple error types](rust-by-example/src/error/multiple_error_types.md)
        - [Pulling `Result`s out of `Option`s](rust-by-example/src/error/multiple_error_types/option_result.md)
        - [Defining an error type](rust-by-example/src/error/multiple_error_types/define_error_type.md)
        - [`Box`ing errors](rust-by-example/src/error/multiple_error_types/boxing_errors.md)
        - [Other uses of `?`](rust-by-example/src/error/multiple_error_types/reenter_question_mark.md)
        - [Wrapping errors](rust-by-example/src/error/multiple_error_types/wrap_error.md)
    - [Iterating over `Result`s](rust-by-example/src/error/iter_result.md)

- [Std library types](rust-by-example/src/std.md)
    - [Box, stack and heap](rust-by-example/src/std/box.md)
    - [Vectors](rust-by-example/src/std/vec.md)
    - [Strings](rust-by-example/src/std/str.md)
    - [`Option`](rust-by-example/src/std/option.md)
    - [`Result`](rust-by-example/src/std/result.md)
        - [`?`](rust-by-example/src/std/result/question_mark.md)
    - [`panic!`](rust-by-example/src/std/panic.md)
    - [HashMap](rust-by-example/src/std/hash.md)
        - [Alternate/custom key types](rust-by-example/src/std/hash/alt_key_types.md)
        - [HashSet](rust-by-example/src/std/hash/hashset.md)
    - [`Rc`](rust-by-example/src/std/rc.md)
    - [`Arc`](rust-by-example/src/std/arc.md)

- [Std misc](rust-by-example/src/std_misc.md)
    - [Threads](rust-by-example/src/std_misc/threads.md)
        - [Testcase: map-reduce](rust-by-example/src/std_misc/threads/testcase_mapreduce.md)
    - [Channels](rust-by-example/src/std_misc/channels.md)
    - [Path](rust-by-example/src/std_misc/path.md)
    - [File I/O](rust-by-example/src/std_misc/file.md)
        - [`open`](rust-by-example/src/std_misc/file/open.md)
        - [`create`](rust-by-example/src/std_misc/file/create.md)
        - [`read lines`](rust-by-example/src/std_misc/file/read_lines.md)
    - [Child processes](rust-by-example/src/std_misc/process.md)
        - [Pipes](rust-by-example/src/std_misc/process/pipe.md)
        - [Wait](rust-by-example/src/std_misc/process/wait.md)
    - [Filesystem Operations](rust-by-example/src/std_misc/fs.md)
    - [Program arguments](rust-by-example/src/std_misc/arg.md)
        - [Argument parsing](rust-by-example/src/std_misc/arg/matching.md)
    - [Foreign Function Interface](rust-by-example/src/std_misc/ffi.md)

- [Testing](rust-by-example/src/testing.md)
    - [Unit testing](rust-by-example/src/testing/unit_testing.md)
    - [Documentation testing](rust-by-example/src/testing/doc_testing.md)
    - [Integration testing](rust-by-example/src/testing/integration_testing.md)
    - [Dev-dependencies](rust-by-example/src/testing/dev_dependencies.md)

- [Unsafe Operations](rust-by-example/src/unsafe.md)
    - [Inline assembly](rust-by-example/src/unsafe/asm.md)

- [Compatibility](rust-by-example/src/compatibility.md)
    - [Raw identifiers](rust-by-example/src/compatibility/raw_identifiers.md)

- [Meta](rust-by-example/src/meta.md)
    - [Documentation](rust-by-example/src/meta/doc.md)
    - [Playground](rust-by-example/src/meta/playground.md)


## ๐ข๐ต Rust Cookbook
[Rust Cookbook](https://rust-lang-nursery.github.io/rust-cookbook/intro.html)

[Table of Contents](rust-cookbook/src/intro.md)
[About](rust-cookbook/src/about.md)
- [Algorithms](rust-cookbook/src/algorithms.md)
  - [Generate Random Values](rust-cookbook/src/algorithms/randomness.md)
  - [Sort a Vector](rust-cookbook/src/algorithms/sorting.md)
- [Command Line](rust-cookbook/src/cli.md)
  - [Argument Parsing](rust-cookbook/src/cli/arguments.md)
  - [ANSI Terminal](rust-cookbook/src/cli/ansi_terminal.md)
- [Compression](rust-cookbook/src/compression.md)
  - [Working with Tarballs](rust-cookbook/src/compression/tar.md)
- [Concurrency](rust-cookbook/src/concurrency.md)
  - [Explicit Threads](rust-cookbook/src/concurrency/threads.md)
  - [Data Parallelism](rust-cookbook/src/concurrency/parallel.md)
- [Cryptography](rust-cookbook/src/cryptography.md)
  - [Hashing](rust-cookbook/src/cryptography/hashing.md)
  - [Encryption](rust-cookbook/src/cryptography/encryption.md)
- [Data Structures](rust-cookbook/src/data_structures.md)
  - [Bitfield](rust-cookbook/src/data_structures/bitfield.md)
- [Database](rust-cookbook/src/database.md)
  - [SQLite](rust-cookbook/src/database/sqlite.md)
  - [Postgres](rust-cookbook/src/database/postgres.md)
- [Date and Time](rust-cookbook/src/datetime.md)
  - [Duration and Calculation](rust-cookbook/src/datetime/duration.md)
  - [Parsing and Displaying](rust-cookbook/src/datetime/parse.md)
- [Development Tools](rust-cookbook/src/development_tools.md)
  - [Debugging](rust-cookbook/src/development_tools/debugging.md)
    - [Log Messages](rust-cookbook/src/development_tools/debugging/log.md)
    - [Configure Logging](rust-cookbook/src/development_tools/debugging/config_log.md)
  - [Versioning](rust-cookbook/src/development_tools/versioning.md)
  - [Build Time Tooling](rust-cookbook/src/development_tools/build_tools.md)
- [Encoding](rust-cookbook/src/encoding.md)
  - [Character Sets](rust-cookbook/src/encoding/strings.md)
  - [CSV processing](rust-cookbook/src/encoding/csv.md)
  - [Structured Data](rust-cookbook/src/encoding/complex.md)
- [Error Handling](rust-cookbook/src/errors.md)
  - [Handle Error Variants](rust-cookbook/src/errors/handle.md)
- [File System](rust-cookbook/src/file.md)
  - [Read & Write](rust-cookbook/src/file/read-write.md)
  - [Directory Traversal](rust-cookbook/src/file/dir.md)
- [Hardware Support](rust-cookbook/src/hardware.md)
  - [Processor](rust-cookbook/src/hardware/processor.md)
- [Memory Management](rust-cookbook/src/mem.md)
  - [Global Static](rust-cookbook/src/mem/global_static.md)
- [Network](rust-cookbook/src/net.md)
  - [Server](rust-cookbook/src/net/server.md)
- [Operating System](rust-cookbook/src/os.md)
  - [External Command](rust-cookbook/src/os/external.md)
- [Science](rust-cookbook/src/science.md)
  - [Mathematics](rust-cookbook/src/science/mathematics.md)
    - [Linear Algebra](rust-cookbook/src/science/mathematics/linear_algebra.md)
    - [Trigonometry](rust-cookbook/src/science/mathematics/trigonometry.md)
    - [Complex Numbers](rust-cookbook/src/science/mathematics/complex_numbers.md)
    - [Statistics](rust-cookbook/src/science/mathematics/statistics.md)
    - [Miscellaneous](rust-cookbook/src/science/mathematics/miscellaneous.md)
- [Text Processing](rust-cookbook/src/text.md)
  - [Regular Expressions](rust-cookbook/src/text/regex.md)
  - [String Parsing](rust-cookbook/src/text/string_parsing.md)
- [Web Programming](rust-cookbook/src/web.md)
  - [Extracting Links](rust-cookbook/src/web/scraping.md)
  - [URL](rust-cookbook/src/web/url.md)
  - [Media Types](rust-cookbook/src/web/mime.md)
  - [Clients](rust-cookbook/src/web/clients.md)
    - [Making Requests](rust-cookbook/src/web/clients/requests.md)
    - [Calling a Web API](rust-cookbook/src/web/clients/apis.md)
    - [Downloads](rust-cookbook/src/web/clients/download.md)
    - [Web Authentication](rust-cookbook/src/web/clients/authentication.md)


## ๐ข๐ต Asynchronous Programming in Rust

- [Getting Started](async-book/src/01_getting_started/01_chapter.md)
  - [Why Async?](async-book/src/01_getting_started/02_why_async.md)
  - [The State of Asynchronous Rust](async-book/src/01_getting_started/03_state_of_async_rust.md)
  - [`async`/`.await` Primer](async-book/src/01_getting_started/04_async_await_primer.md)
- [Under the Hood: Executing `Future`s and Tasks](async-book/src/02_execution/01_chapter.md)
  - [The `Future` Trait](async-book/src/02_execution/02_future.md)
  - [Task Wakeups with `Waker`](async-book/src/02_execution/03_wakeups.md)
  - [Applied: Build an Executor](async-book/src/02_execution/04_executor.md)
  - [Executors and System IO](async-book/src/02_execution/05_io.md)
- [`async`/`await`](async-book/src/03_async_await/01_chapter.md)
- [Pinning](async-book/src/04_pinning/01_chapter.md)
- [Streams](async-book/src/05_streams/01_chapter.md)
  - [Iteration and Concurrency](async-book/src/05_streams/02_iteration_and_concurrency.md)
- [Executing Multiple Futures at a Time](async-book/src/06_multiple_futures/01_chapter.md)
  - [`join!`](async-book/src/06_multiple_futures/02_join.md)
  - [`select!`](async-book/src/06_multiple_futures/03_select.md)
  - [TODO: Spawning](async-book/src/)
  - [TODO: Cancellation and Timeouts](async-book/src/)
  - [TODO: `FuturesUnordered`](async-book/src/)
- [Workarounds to Know and Love](async-book/src/07_workarounds/01_chapter.md)
  - [`?` in `async` Blocks](async-book/src/07_workarounds/02_err_in_async_blocks.md)
  - [`Send` Approximation](async-book/src/07_workarounds/03_send_approximation.md)
  - [Recursion](async-book/src/07_workarounds/04_recursion.md)
  - [`async` in Traits](async-book/src/07_workarounds/05_async_in_traits.md)
- [The Async Ecosystem](async-book/src/08_ecosystem/00_chapter.md)
- [Final Project: HTTP Server](async-book/src/09_example/00_intro.md)
  - [Running Asynchronous Code](async-book/src/09_example/01_running_async_code.md)
  - [Handling Connections Concurrently](async-book/src/09_example/02_handling_connections_concurrently.md)
  - [Testing the Server](async-book/src/09_example/03_tests.md)
- [TODO: I/O](async-book/src/)
  - [TODO: `AsyncRead` and `AsyncWrite`](async-book/src/)
- [TODO: Asynchronous Design Patterns: Solutions and Suggestions](async-book/src/)
  - [TODO: Modeling Servers and the Request/Response Pattern](async-book/src/)
  - [TODO: Managing Shared State](async-book/src/)
- [Appendix: Translations of the Book](async-book/src/12_appendix/01_translations.md)



## ๐ข๐ต The Little Book of Rust Macros


* [Macros, A Methodical Introduction](macros_little/text/mbe-README.md)
    * [Syntax Extensions](macros_little/text/mbe-syn-README.md)
        * [Source Analysis](macros_little/text/mbe-syn-source-analysis.md)
        * [Macros in the AST](macros_little/text/mbe-syn-macros-in-the-ast.md)
        * [Expansion](macros_little/text/mbe-syn-expansion.md)
    * [macro_rules!](macros_little/text/mbe-macro-rules.md)
    * [Minutiae](macros_little/text/mbe-min-README.md)
        * [Captures and Expansion Redux](macros_little/text/mbe-min-captures-and-expansion-redux.md)
        * [Hygiene](macros_little/text/mbe-min-hygiene.md)
        * [Non-Identifier Identifiers](macros_little/text/mbe-min-non-identifier-identifiers.md)
        * [Debugging](macros_little/text/mbe-min-debugging.md)
        * [Scoping](macros_little/text/mbe-min-scoping.md)
        * [Import/Export](macros_little/text/mbe-min-import-export.md)
* [Macros, A Practical Introduction](macros_little/text/pim-README.md)
* [Patterns](macros_little/text/pat-README.md)
    * [Callbacks](macros_little/text/pat-callbacks.md)
    * [Incremental TT Munchers](macros_little/text/pat-incremental-tt-munchers.md)
    * [Internal Rules](macros_little/text/pat-internal-rules.md)
    * [Push-Down Accumulation](macros_little/text/pat-push-down-accumulation.md)
    * [Repetition Replacement](macros_little/text/pat-repetition-replacement.md)
    * [Trailing Separators](macros_little/text/pat-trailing-separators.md)
    * [TT Bundling](macros_little/text/pat-tt-bundling.md)
    * [Visibility](macros_little/text/pat-visibility.md)
    * [Provisional](macros_little/text/pat-provisional.md)
* [Building Blocks](macros_little/text/blk-README.md)
    * [AST Coercion](macros_little/text/blk-ast-coercion.md)
    * [Counting](macros_little/text/blk-counting.md)
    * [Enum Parsing](macros_little/text/blk-enum-parsing.md)
* [Annotated Examples](macros_little/text/aeg-README.md)
    * [Ook!](macros_little/text/aeg-ook.md)


## ๐ข๐ต The Little Book of Rust Macros 2

[Introduction](macros_little2/src/introduction.md)

- [Syntax Extensions](macros_little2/src/syntax-extensions.md)
    - [Source Analysis](macros_little2/src/syntax-extensions/source-analysis.md)
    - [Macros in the Ast](macros_little2/src/syntax-extensions/ast.md)
    - [Expansion](macros_little2/src/syntax-extensions/expansion.md)
    - [Hygiene](macros_little2/src/syntax-extensions/hygiene.md)
    - [Debugging](macros_little2/src/syntax-extensions/debugging.md)
- [Declarative Macros](macros_little2/src/decl-macros.md)
    - [A Methodical Introduction](macros_little2/src/decl-macros/macros-methodical.md)
    - [A Practical Introduction](macros_little2/src/decl-macros/macros-practical.md)
    - [Minutiae](macros_little2/src/decl-macros/minutiae.md)
        - [Fragment Specifiers](macros_little2/src/decl-macros/minutiae/fragment-specifiers.md)
        - [Metavariables and Expansion Redux](macros_little2/src/decl-macros/minutiae/metavar-and-expansion.md)
        - [Metavariable Expressions](macros_little2/src/decl-macros/minutiae/metavar-expr.md)
        - [Hygiene](macros_little2/src/decl-macros/minutiae/hygiene.md)
        - [Non-Identifier Identifiers](macros_little2/src/decl-macros/minutiae/identifiers.md)
        - [Debugging](macros_little2/src/decl-macros/minutiae/debugging.md)
        - [Scoping](macros_little2/src/decl-macros/minutiae/scoping.md)
        - [Import and Export](macros_little2/src/decl-macros/minutiae/import-export.md)
    - [Patterns](macros_little2/src/decl-macros/patterns.md)
        - [Callbacks](macros_little2/src/decl-macros/patterns/callbacks.md)
        - [Incremental TT Munchers](macros_little2/src/decl-macros/patterns/tt-muncher.md)
        - [Internal Rules](macros_little2/src/decl-macros/patterns/internal-rules.md)
        - [Push-down Accumulation](macros_little2/src/decl-macros/patterns/push-down-acc.md)
        - [Repetition Replacement](macros_little2/src/decl-macros/patterns/repetition-replacement.md)
        - [TT Bundling](macros_little2/src/decl-macros/patterns/tt-bundling.md)
    - [Building Blocks](macros_little2/src/decl-macros/building-blocks.md)
        - [AST Coercion](macros_little2/src/decl-macros/building-blocks/ast-coercion.md)
        - [Counting](macros_little2/src/decl-macros/building-blocks/counting.md)
            - [Abacus Counting](macros_little2/src/decl-macros/building-blocks/abacus-counting.md)
        - [Parsing Rust](macros_little2/src/decl-macros/building-blocks/parsing.md)
    - [Macros 2.0](macros_little2/src/decl-macros/macros2.md)
 - [Procedural Macros](macros_little2/src/proc-macros.md)
    - [A Methodical Introduction](macros_little2/src/proc-macros/methodical.md)
        - [Function-like](macros_little2/src/proc-macros/methodical/function-like.md)
        - [Attribute](macros_little2/src/proc-macros/methodical/attr.md)
        - [Derive](macros_little2/src/proc-macros/methodical/derive.md)
    - [A Practical Introduction](macros_little2/src/proc-macros/practical.md)
        - [Function-like](macros_little2/src/proc-macros/practical/function-like.md)
        - [Attribute](macros_little2/src/proc-macros/practical/attr.md)
        - [Derive](macros_little2/src/proc-macros/practical/derive.md)
    - [Third-Party Crates](macros_little2/src/proc-macros/third-party-crates.md)
    - [Hygiene and Spans](macros_little2/src/proc-macros/hygiene.md)
    - [Techniques](macros_little2/src/proc-macros/techniques.md)
        - [Testing](macros_little2/src/proc-macros/techniques/testing.md)

 [Glossary](macros_little2/src/glossary.md)



## ๐ข๐ต The Rust Edition Guide

[Introduction](edition-guide/src/introduction.md)

## What are editions?

- [What are editions?](edition-guide/src/editions/index.md)
  - [Creating a new project](edition-guide/src/editions/creating-a-new-project.md)
  - [Transitioning an existing project to a new edition](edition-guide/src/editions/transitioning-an-existing-project-to-a-new-edition.md)
  - [Advanced migrations](edition-guide/src/editions/advanced-migrations.md)

## Rust 2015

- [Rust 2015](edition-guide/src/rust-2015/index.md)

## Rust 2018

- [Rust 2018](edition-guide/src/rust-2018/index.md)
  - [Path and module system changes](edition-guide/src/rust-2018/path-changes.md)
  - [Anonymous trait function parameters deprecated](edition-guide/src/rust-2018/trait-fn-parameters.md)
  - [New keywords](edition-guide/src/rust-2018/new-keywords.md)
  - [Method dispatch for raw pointers to inference variables](edition-guide/src/rust-2018/tyvar-behind-raw-pointer.md)
  - [Cargo changes](edition-guide/src/rust-2018/cargo.md)

## Rust 2021

- [Rust 2021](edition-guide/src/rust-2021/index.md)
  - [Additions to the prelude](edition-guide/src/rust-2021/prelude.md)
  - [Default Cargo feature resolver](edition-guide/src/rust-2021/default-cargo-resolver.md)
  - [IntoIterator for arrays](edition-guide/src/rust-2021/IntoIterator-for-arrays.md)
  - [Disjoint capture in closures](edition-guide/src/rust-2021/disjoint-capture-in-closures.md)
  - [Panic macro consistency](edition-guide/src/rust-2021/panic-macro-consistency.md)
  - [Reserving syntax](edition-guide/src/rust-2021/reserving-syntax.md)
  - [Warnings promoted to errors](edition-guide/src/rust-2021/warnings-promoted-to-error.md)
  - [Or patterns in macro-rules](edition-guide/src/rust-2021/or-patterns-macro-rules.md)



## ๐ข๐ต The Cargo Book

[Introduction](cargo/src/index.md)

* [Getting Started](cargo/src/getting-started/index.md)
    * [Installation](cargo/src/getting-started/installation.md)
    * [First Steps with Cargo](cargo/src/getting-started/first-steps.md)

* [Cargo Guide](cargo/src/guide/index.md)
    * [Why Cargo Exists](cargo/src/guide/why-cargo-exists.md)
    * [Creating a New Package](cargo/src/guide/creating-a-new-project.md)
    * [Working on an Existing Package](cargo/src/guide/working-on-an-existing-project.md)
    * [Dependencies](cargo/src/guide/dependencies.md)
    * [Package Layout](cargo/src/guide/project-layout.md)
    * [Cargo.toml vs Cargo.lock](cargo/src/guide/cargo-toml-vs-cargo-lock.md)
    * [Tests](cargo/src/guide/tests.md)
    * [Continuous Integration](cargo/src/guide/continuous-integration.md)
    * [Cargo Home](cargo/src/guide/cargo-home.md)
    * [Build Cache](cargo/src/guide/build-cache.md)

* [Cargo Reference](cargo/src/reference/index.md)
    * [Specifying Dependencies](cargo/src/reference/specifying-dependencies.md)
        * [Overriding Dependencies](cargo/src/reference/overriding-dependencies.md)
    * [The Manifest Format](cargo/src/reference/manifest.md)
        * [Cargo Targets](cargo/src/reference/cargo-targets.md)
    * [Workspaces](cargo/src/reference/workspaces.md)
    * [Features](cargo/src/reference/features.md)
        * [Features Examples](cargo/src/reference/features-examples.md)
    * [Profiles](cargo/src/reference/profiles.md)
    * [Configuration](cargo/src/reference/config.md)
    * [Environment Variables](cargo/src/reference/environment-variables.md)
    * [Build Scripts](cargo/src/reference/build-scripts.md)
        * [Build Script Examples](cargo/src/reference/build-script-examples.md)
    * [Publishing on crates.io](cargo/src/reference/publishing.md)
    * [Package ID Specifications](cargo/src/reference/pkgid-spec.md)
    * [Source Replacement](cargo/src/reference/source-replacement.md)
    * [External Tools](cargo/src/reference/external-tools.md)
    * [Registries](cargo/src/reference/registries.md)
    * [Dependency Resolution](cargo/src/reference/resolver.md)
    * [SemVer Compatibility](cargo/src/reference/semver.md)
    * [Future incompat report](cargo/src/reference/future-incompat-report.md)
    * [Reporting build timings](cargo/src/reference/timings.md)
    * [Unstable Features](cargo/src/reference/unstable.md)

* [Cargo Commands](cargo/src/commands/index.md)
    * [General Commands](cargo/src/commands/general-commands.md)
        * [cargo](cargo/src/commands/cargo.md)
        * [cargo help](cargo/src/commands/cargo-help.md)
        * [cargo version](cargo/src/commands/cargo-version.md)
    * [Build Commands](cargo/src/commands/build-commands.md)
        * [cargo bench](cargo/src/commands/cargo-bench.md)
        * [cargo build](cargo/src/commands/cargo-build.md)
        * [cargo check](cargo/src/commands/cargo-check.md)
        * [cargo clean](cargo/src/commands/cargo-clean.md)
        * [cargo doc](cargo/src/commands/cargo-doc.md)
        * [cargo fetch](cargo/src/commands/cargo-fetch.md)
        * [cargo fix](cargo/src/commands/cargo-fix.md)
        * [cargo run](cargo/src/commands/cargo-run.md)
        * [cargo rustc](cargo/src/commands/cargo-rustc.md)
        * [cargo rustdoc](cargo/src/commands/cargo-rustdoc.md)
        * [cargo test](cargo/src/commands/cargo-test.md)
        * [cargo report](cargo/src/commands/cargo-report.md)
    * [Manifest Commands](cargo/src/commands/manifest-commands.md)
        * [cargo add](cargo/src/commands/cargo-add.md)
        * [cargo generate-lockfile](cargo/src/commands/cargo-generate-lockfile.md)
        * [cargo locate-project](cargo/src/commands/cargo-locate-project.md)
        * [cargo metadata](cargo/src/commands/cargo-metadata.md)
        * [cargo pkgid](cargo/src/commands/cargo-pkgid.md)
        * [cargo remove](cargo/src/commands/cargo-remove.md)
        * [cargo tree](cargo/src/commands/cargo-tree.md)
        * [cargo update](cargo/src/commands/cargo-update.md)
        * [cargo vendor](cargo/src/commands/cargo-vendor.md)
        * [cargo verify-project](cargo/src/commands/cargo-verify-project.md)
    * [Package Commands](cargo/src/commands/package-commands.md)
        * [cargo init](cargo/src/commands/cargo-init.md)
        * [cargo install](cargo/src/commands/cargo-install.md)
        * [cargo new](cargo/src/commands/cargo-new.md)
        * [cargo search](cargo/src/commands/cargo-search.md)
        * [cargo uninstall](cargo/src/commands/cargo-uninstall.md)
    * [Publishing Commands](cargo/src/commands/publishing-commands.md)
        * [cargo login](cargo/src/commands/cargo-login.md)
        * [cargo owner](cargo/src/commands/cargo-owner.md)
        * [cargo package](cargo/src/commands/cargo-package.md)
        * [cargo publish](cargo/src/commands/cargo-publish.md)
        * [cargo yank](cargo/src/commands/cargo-yank.md)

* [FAQ](cargo/src/faq.md)
* [Appendix: Glossary](cargo/src/appendix/glossary.md)
* [Appendix: Git Authentication](cargo/src/appendix/git-authentication.md)




## ๐ข๐ต The Rustc Book
- [The Rustc Book](https://doc.rust-lang.org/rustc/index.html)

- [What is rustc?](rustc/src/what-is-rustc.md)
- [Command-line arguments](rustc/src/command-line-arguments.md)
- [Lints](rustc/src/lints/index.md)
    - [Lint levels](rustc/src/lints/levels.md)
    - [Lint Groups](rustc/src/lints/groups.md)
    - [Lint listing](rustc/src/lints/listing/index.md)
        - [Allowed-by-default lints](rustc/src/lints/listing/allowed-by-default.md)
        - [Warn-by-default lints](rustc/src/lints/listing/warn-by-default.md)
        - [Deny-by-default lints](rustc/src/lints/listing/deny-by-default.md)
- [Codegen options](rustc/src/codegen-options/index.md)
- [JSON Output](rustc/src/json.md)
- [Platform Support](rustc/src/platform-support.md)
- [Targets](rustc/src/targets/index.md)
    - [Built-in Targets](rustc/src/targets/built-in.md)
    - [Custom Targets](rustc/src/targets/custom.md)
    - [Known Issues](rustc/src/targets/known-issues.md)
- [Profile-guided Optimization](rustc/src/profile-guided-optimization.md)
- [Linker-plugin based LTO](rustc/src/linker-plugin-lto.md)
- [Exploit Mitigations](rustc/src/exploit-mitigations.md)
- [Contributing to `rustc`](rustc/src/contributing.md)


## ๐ข๐ต Guide to Rustc Development
- [Guide to Rustc Development](https://rustc-dev-guide.rust-lang.org/about-this-guide.html)

[About this guide](rustc-dev-guide/src/about-this-guide.md)

[Getting Started](rustc-dev-guide/src/getting-started.md)

---

## Building and debugging `rustc`

- [How to Build and Run the Compiler](rustc-dev-guide/src/building/how-to-build-and-run.md)
    - [Prerequisites](rustc-dev-guide/src/building/prerequisites.md)
    - [Suggested Workflows](rustc-dev-guide/src/building/suggested.md)
    - [Distribution artifacts](rustc-dev-guide/src/building/build-install-distribution-artifacts.md)
    - [Building Documentation](rustc-dev-guide/src/building/compiler-documenting.md)
    - [Rustdoc overview](rustc-dev-guide/src/rustdoc.md)
    - [Adding a new target](rustc-dev-guide/src/building/new-target.md)
- [Testing the compiler](rustc-dev-guide/src/tests/intro.md)
    - [Running tests](rustc-dev-guide/src/tests/running.md)
        - [Testing with Docker](rustc-dev-guide/src/tests/docker.md)
        - [Testing with CI](rustc-dev-guide/src/tests/ci.md)
    - [Adding new tests](rustc-dev-guide/src/tests/adding.md)
    - [Compiletest](rustc-dev-guide/src/tests/compiletest.md)
        - [UI tests](rustc-dev-guide/src/tests/ui.md)
        - [Test headers](rustc-dev-guide/src/tests/headers.md)
    - [Performance testing](rustc-dev-guide/src/tests/perf.md)
    - [Crater](rustc-dev-guide/src/tests/crater.md)
- [Debugging the Compiler](rustc-dev-guide/src/compiler-debugging.md)
    - [Using the tracing/logging instrumentation](rustc-dev-guide/src/tracing.md)
- [Profiling the compiler](rustc-dev-guide/src/profiling.md)
    - [with the linux perf tool](rustc-dev-guide/src/profiling/with_perf.md)
    - [with Windows Performance Analyzer](rustc-dev-guide/src/profiling/wpa_profiling.md)
- [crates.io Dependencies](rustc-dev-guide/src/crates-io.md)


## Contributing to Rust

- [Introduction](rustc-dev-guide/src/contributing.md)
- [About the compiler team](rustc-dev-guide/src/compiler-team.md)
- [Using Git](rustc-dev-guide/src/git.md)
- [Mastering @rustbot](rustc-dev-guide/src/rustbot.md)
- [Walkthrough: a typical contribution](rustc-dev-guide/src/walkthrough.md)
- [Bug Fix Procedure](rustc-dev-guide/src/bug-fix-procedure.md)
- [Implementing new features](rustc-dev-guide/src/implementing_new_features.md)
- [Stability attributes](rustc-dev-guide/src/stability.md)
- [Stabilizing Features](rustc-dev-guide/src/stabilization_guide.md)
- [Feature Gates](rustc-dev-guide/src/feature-gates.md)
- [Coding conventions](rustc-dev-guide/src/conventions.md)
- [Notification groups](notification-groups/about.md)
    - [ARM](notification-groups/arm.md)
    - [Cleanup Crew](notification-groups/cleanup-crew.md)
    - [LLVM](notification-groups/llvm.md)
    - [RISC-V](notification-groups/risc-v.md)
    - [Windows](notification-groups/windows.md)
- [Licenses](rustc-dev-guide/src/licenses.md)

## High-level Compiler Architecture

- [Prologue](rustc-dev-guide/src/part-2-intro.md)
- [Overview of the Compiler](rustc-dev-guide/src/overview.md)
- [The compiler source code](rustc-dev-guide/src/compiler-src.md)
- [Bootstrapping](rustc-dev-guide/src/building/bootstrapping.md)
- [Queries: demand-driven compilation](rustc-dev-guide/src/query.md)
    - [The Query Evaluation Model in Detail](rustc-dev-guide/src/queries/query-evaluation-model-in-detail.md)
    - [Incremental compilation](rustc-dev-guide/src/queries/incremental-compilation.md)
    - [Incremental compilation In Detail](rustc-dev-guide/src/queries/incremental-compilation-in-detail.md)
    - [Debugging and Testing](rustc-dev-guide/src/incrcomp-debugging.md)
    - [Salsa](rustc-dev-guide/src/salsa.md)
- [Memory Management in Rustc](rustc-dev-guide/src/memory.md)
- [Serialization in Rustc](rustc-dev-guide/src/serialization.md)
- [Parallel Compilation](rustc-dev-guide/src/parallel-rustc.md)
- [Rustdoc internals](rustc-dev-guide/src/rustdoc-internals.md)

## Source Code Representation

- [Prologue](rustc-dev-guide/src/part-3-intro.md)
- [Command-line arguments](rustc-dev-guide/src/cli.md)
- [The Rustc Driver and Interface](rustc-dev-guide/src/rustc-driver.md)
    - [Example: Type checking](rustc-dev-guide/src/rustc-driver-interacting-with-the-ast.md)
    - [Example: Getting diagnostics](rustc-dev-guide/src/rustc-driver-getting-diagnostics.md)
- [Syntax and the AST](rustc-dev-guide/src/syntax-intro.md)
    - [Lexing and Parsing](rustc-dev-guide/src/the-parser.md)
    - [Macro expansion](rustc-dev-guide/src/macro-expansion.md)
    - [Name resolution](rustc-dev-guide/src/name-resolution.md)
    - [`#[test]` Implementation](rustc-dev-guide/src/test-implementation.md)
    - [Panic Implementation](rustc-dev-guide/src/panic-implementation.md)
    - [AST Validation](rustc-dev-guide/src/ast-validation.md)
    - [Feature Gate Checking](rustc-dev-guide/src/feature-gate-ck.md)
    - [Lang Items](rustc-dev-guide/src/lang-items.md)
- [The HIR (High-level IR)](rustc-dev-guide/src/hir.md)
    - [Lowering AST to HIR](rustc-dev-guide/src/lowering.md)
    - [Debugging](rustc-dev-guide/src/hir-debugging.md)
- [The THIR (Typed High-level IR)](rustc-dev-guide/src/thir.md)
- [The MIR (Mid-level IR)](rustc-dev-guide/src/mir/index.md)
    - [MIR construction](rustc-dev-guide/src/mir/construction.md)
    - [MIR visitor and traversal](rustc-dev-guide/src/mir/visitor.md)
    - [MIR passes: getting the MIR for a function](rustc-dev-guide/src/mir/passes.md)
- [Identifiers in the Compiler](rustc-dev-guide/src/identifiers.md)
- [Closure expansion](rustc-dev-guide/src/closure.md)
- [Inline assembly](rustc-dev-guide/src/asm.md)

## Analysis

- [Prologue](rustc-dev-guide/src/part-4-intro.md)
- [The `ty` module: representing types](rustc-dev-guide/src/ty.md)
    - [Generics and substitutions](rustc-dev-guide/src/generics.md)
    - [`TypeFolder` and `TypeFoldable`](rustc-dev-guide/src/ty-fold.md)
    - [Generic arguments](rustc-dev-guide/src/generic_arguments.md)
    - [Constants in the type system](rustc-dev-guide/src/constants.md)
- [Type inference](rustc-dev-guide/src/type-inference.md)
- [Trait solving](rustc-dev-guide/src/traits/resolution.md)
    - [Early and Late Bound Parameters](rustc-dev-guide/src/early-late-bound.md)
    - [Higher-ranked trait bounds](rustc-dev-guide/src/traits/hrtb.md)
    - [Caching subtleties](rustc-dev-guide/src/traits/caching.md)
    - [Specialization](rustc-dev-guide/src/traits/specialization.md)
    - [Chalk-based trait solving](rustc-dev-guide/src/traits/chalk.md)
        - [Lowering to logic](rustc-dev-guide/src/traits/lowering-to-logic.md)
        - [Goals and clauses](rustc-dev-guide/src/traits/goals-and-clauses.md)
        - [Canonical queries](rustc-dev-guide/src/traits/canonical-queries.md)
- [Type checking](rustc-dev-guide/src/type-checking.md)
    - [Method Lookup](rustc-dev-guide/src/method-lookup.md)
    - [Variance](rustc-dev-guide/src/variance.md)
    - [Opaque Types](rustc-dev-guide/src/opaque-types-type-alias-impl-trait.md)
        - [Inference details](rustc-dev-guide/src/opaque-types-impl-trait-inference.md)
- [Pattern and Exhaustiveness Checking](rustc-dev-guide/src/pat-exhaustive-checking.md)
- [MIR dataflow](rustc-dev-guide/src/mir/dataflow.md)
- [Drop elaboration](rustc-dev-guide/src/mir/drop-elaboration.md)
- [The borrow checker](rustc-dev-guide/src/borrow_check.md)
    - [Tracking moves and initialization](rustc-dev-guide/src/borrow_check/moves_and_initialization.md)
        - [Move paths](rustc-dev-guide/src/borrow_check/moves_and_initialization/move_paths.md)
    - [MIR type checker](rustc-dev-guide/src/borrow_check/type_check.md)
    - [Region inference](rustc-dev-guide/src/borrow_check/region_inference.md)
        - [Constraint propagation](rustc-dev-guide/src/borrow_check/region_inference/constraint_propagation.md)
        - [Lifetime parameters](rustc-dev-guide/src/borrow_check/region_inference/lifetime_parameters.md)
        - [Member constraints](rustc-dev-guide/src/borrow_check/region_inference/member_constraints.md)
        - [Placeholders and universes](borrow_check/region_inference/placeholders_and_universes.md)
        - [Closure constraints](rustc-dev-guide/src/borrow_check/region_inference/closure_constraints.md)
        - [Error reporting](rustc-dev-guide/src/borrow_check/region_inference/error_reporting.md)
    - [Two-phase-borrows](rustc-dev-guide/src/borrow_check/two_phase_borrows.md)
- [Parameter Environments](rustc-dev-guide/src/param_env.md)
- [Errors and Lints](rustc-dev-guide/src/diagnostics/diagnostics.md)
    - [Diagnostic and subdiagnostic structs](rustc-dev-guide/src/diagnostics/diagnostic-structs.md)
    - [Translation](rustc-dev-guide/src/diagnostics/translation.md)
    - [`LintStore`](rustc-dev-guide/src/diagnostics/lintstore.md)
    - [Diagnostic codes](rustc-dev-guide/src/diagnostics/diagnostic-codes.md)
    - [Diagnostic items](rustc-dev-guide/src/diagnostics/diagnostic-items.md)
    - [`ErrorGuaranteed`](rustc-dev-guide/src/diagnostics/error-guaranteed.md)

## MIR to Binaries

- [Prologue](rustc-dev-guide/src/part-5-intro.md)
- [MIR optimizations](rustc-dev-guide/src/mir/optimizations.md)
- [Debugging](rustc-dev-guide/src/mir/debugging.md)
- [Constant evaluation](rustc-dev-guide/src/const-eval.md)
    - [Interpreter](rustc-dev-guide/src/const-eval/interpret.md)
- [Monomorphization](rustc-dev-guide/src/backend/monomorph.md)
- [Lowering MIR](rustc-dev-guide/src/backend/lowering-mir.md)
- [Code Generation](rustc-dev-guide/src/backend/codegen.md)
    - [Updating LLVM](rustc-dev-guide/src/backend/updating-llvm.md)
    - [Debugging LLVM](rustc-dev-guide/src/backend/debugging.md)
    - [Backend Agnostic Codegen](rustc-dev-guide/src/backend/backend-agnostic.md)
    - [Implicit Caller Location](rustc-dev-guide/src/backend/implicit-caller-location.md)
- [Libraries and Metadata](rustc-dev-guide/src/backend/libs-and-metadata.md)
- [Profile-guided Optimization](rustc-dev-guide/src/profile-guided-optimization.md)
- [LLVM Source-Based Code Coverage](rustc-dev-guide/src/llvm-coverage-instrumentation.md)
- [Sanitizers Support](rustc-dev-guide/src/sanitizers.md)
- [Debugging Support in the Rust Compiler](rustc-dev-guide/src/debugging-support-in-rustc.md)

---

[Appendix A: Background topics](rustc-dev-guide/src/appendix/background.md)
[Appendix B: Glossary](rustc-dev-guide/src/appendix/glossary.md)
[Appendix C: Code Index](rustc-dev-guide/src/appendix/code-index.md)
[Appendix D: Compiler Lecture Series](rustc-dev-guide/src/appendix/compiler-lecture.md)
[Appendix E: Bibliography](rustc-dev-guide/src/appendix/bibliography.md)

[Appendix Z: HumorRust](rustc-dev-guide/src/appendix/humorust.md)

---



## ๐ข๐ต The Embedded Rust Book
- [Embedded Rust documentation](https://docs.rust-embedded.org/)
- [The Embedded Rust Book](https://docs.rust-embedded.org/book/intro/index.html)
- [The Embedonomicon](https://docs.rust-embedded.org/embedonomicon/)

<!--

Definition of the organization of this book is still a work in process.

Refer to https://github.com/rust-embedded/book/issues for
more information and coordination

-->

- [Introduction](embeded-book/src/intro/index.md)
    - [Hardware](embeded-book/src/intro/hardware.md)
    - [`no_std`](embeded-book/src/intro/no-std.md)
    - [Tooling](embeded-book/src/intro/tooling.md)
    - [Installation](embeded-book/src/intro/install.md)
        - [Linux](embeded-book/src/intro/install/linux.md)
        - [MacOS](embeded-book/src/intro/install/macos.md)
        - [Windows](embeded-book/src/intro/install/windows.md)
        - [Verify Installation](embeded-book/src/intro/install/verify.md)
- [Getting started](embeded-book/src/start/index.md)
  - [QEMU](embeded-book/src/start/qemu.md)
  - [Hardware](embeded-book/src/start/hardware.md)
  - [Memory-mapped Registers](embeded-book/src/start/registers.md)
  - [Semihosting](embeded-book/src/start/semihosting.md)
  - [Panicking](embeded-book/src/start/panicking.md)
  - [Exceptions](embeded-book/src/start/exceptions.md)
  - [Interrupts](embeded-book/src/start/interrupts.md)
  - [IO](embeded-book/src/start/io.md)
- [Peripherals](embeded-book/src/peripherals/index.md)
    - [A first attempt in Rust](embeded-book/src/peripherals/a-first-attempt.md)
    - [The Borrow Checker](embeded-book/src/peripherals/borrowck.md)
    - [Singletons](embeded-book/src/peripherals/singletons.md)
- [Static Guarantees](embeded-book/src/static-guarantees/index.md)
    - [Typestate Programming](embeded-book/src/static-guarantees/typestate-programming.md)
    - [Peripherals as State Machines](embeded-book/src/static-guarantees/state-machines.md)
    - [Design Contracts](embeded-book/src/static-guarantees/design-contracts.md)
    - [Zero Cost Abstractions](embeded-book/src/static-guarantees/zero-cost-abstractions.md)
- [Portability](embeded-book/src/portability/index.md)
- [Concurrency](embeded-book/src/concurrency/index.md)
- [Collections](embeded-book/src/collections/index.md)
- [Design Patterns](embeded-book/src/design-patterns/index.md)
    - [HALs](embeded-book/src/design-patterns/hal/index.md)
        - [Checklist](embeded-book/src/design-patterns/hal/checklist.md)
        - [Naming](embeded-book/src/design-patterns/hal/naming.md)
        - [Interoperability](embeded-book/src/design-patterns/hal/interoperability.md)
        - [Predictability](embeded-book/src/design-patterns/hal/predictability.md)
        - [GPIO](embeded-book/src/design-patterns/hal/gpio.md)
- [Tips for embedded C developers](embeded-book/src/c-tips/index.md)
    <!-- TODO: Define Sections -->
- [Interoperability](embeded-book/src/interoperability/index.md)
    - [A little C with your Rust](embeded-book/src/interoperability/c-with-rust.md)
    - [A little Rust with your C](embeded-book/src/interoperability/rust-with-c.md)
- [Unsorted topics](embeded-book/src/unsorted/index.md)
  - [Optimizations: The speed size tradeoff](embeded-book/src/unsorted/speed-vs-size.md)
  - [Performing Math Functionality](embeded-book/src/unsorted/math.md)

---

[Appendix A: Glossary](embeded-book/src/appendix/glossary.md)


## ๐ข๐ต The Rust Reference
- [The Rust Reference](https://doc.rust-lang.org/reference/)

[Introduction](reference/src/introduction.md)

- [Notation](reference/src/notation.md)

- [Lexical structure](reference/src/lexical-structure.md)
    - [Input format](reference/src/input-format.md)
    - [Keywords](reference/src/keywords.md)
    - [Identifiers](reference/src/identifiers.md)
    - [Comments](reference/src/comments.md)
    - [Whitespace](reference/src/whitespace.md)
    - [Tokens](reference/src/tokens.md)

- [Macros](reference/src/macros.md)
    - [Macros By Example](reference/src/macros-by-example.md)
    - [Procedural Macros](reference/src/procedural-macros.md)

- [Crates and source files](reference/src/crates-and-source-files.md)

- [Conditional compilation](reference/src/conditional-compilation.md)

- [Items](reference/src/items.md)
    - [Modules](reference/src/items/modules.md)
    - [Extern crates](reference/src/items/extern-crates.md)
    - [Use declarations](reference/src/items/use-declarations.md)
    - [Functions](reference/src/items/functions.md)
    - [Type aliases](reference/src/items/type-aliases.md)
    - [Structs](reference/src/items/structs.md)
    - [Enumerations](reference/src/items/enumerations.md)
    - [Unions](reference/src/items/unions.md)
    - [Constant items](reference/src/items/constant-items.md)
    - [Static items](reference/src/items/static-items.md)
    - [Traits](reference/src/items/traits.md)
    - [Implementations](reference/src/items/implementations.md)
    - [External blocks](reference/src/items/external-blocks.md)
    - [Generic parameters](reference/src/items/generics.md)
    - [Associated Items](reference/src/items/associated-items.md)

- [Attributes](reference/src/attributes.md)
    - [Testing](reference/src/attributes/testing.md)
    - [Derive](reference/src/attributes/derive.md)
    - [Diagnostics](reference/src/attributes/diagnostics.md)
    - [Code generation](reference/src/attributes/codegen.md)
    - [Limits](reference/src/attributes/limits.md)
    - [Type System](reference/src/attributes/type_system.md)

- [Statements and expressions](reference/src/statements-and-expressions.md)
    - [Statements](reference/src/statements.md)
    - [Expressions](reference/src/expressions.md)
        - [Literal expressions](reference/src/expressions/literal-expr.md)
        - [Path expressions](reference/src/expressions/path-expr.md)
        - [Block expressions](reference/src/expressions/block-expr.md)
        - [Operator expressions](reference/src/expressions/operator-expr.md)
        - [Grouped expressions](reference/src/expressions/grouped-expr.md)
        - [Array and index expressions](reference/src/expressions/array-expr.md)
        - [Tuple and index expressions](reference/src/expressions/tuple-expr.md)
        - [Struct expressions](reference/src/expressions/struct-expr.md)
        - [Call expressions](reference/src/expressions/call-expr.md)
        - [Method call expressions](reference/src/expressions/method-call-expr.md)
        - [Field access expressions](reference/src/expressions/field-expr.md)
        - [Closure expressions](reference/src/expressions/closure-expr.md)
        - [Loop expressions](reference/src/expressions/loop-expr.md)
        - [Range expressions](reference/src/expressions/range-expr.md)
        - [If and if let expressions](reference/src/expressions/if-expr.md)
        - [Match expressions](reference/src/expressions/match-expr.md)
        - [Return expressions](reference/src/expressions/return-expr.md)
        - [Await expressions](reference/src/expressions/await-expr.md)
        - [Underscore expressions](reference/src/expressions/underscore-expr.md)

- [Patterns](reference/src/patterns.md)

- [Type system](reference/src/type-system.md)
    - [Types](reference/src/types.md)
        - [Boolean type](reference/src/types/boolean.md)
        - [Numeric types](reference/src/types/numeric.md)
        - [Textual types](reference/src/types/textual.md)
        - [Never type](reference/src/types/never.md)
        - [Tuple types](reference/src/types/tuple.md)
        - [Array types](reference/src/types/array.md)
        - [Slice types](reference/src/types/slice.md)
        - [Struct types](reference/src/types/struct.md)
        - [Enumerated types](reference/src/types/enum.md)
        - [Union types](reference/src/types/union.md)
        - [Function item types](reference/src/types/function-item.md)
        - [Closure types](reference/src/types/closure.md)
        - [Pointer types](reference/src/types/pointer.md)
        - [Function pointer types](reference/src/types/function-pointer.md)
        - [Trait object types](reference/src/types/trait-object.md)
        - [Impl trait type](reference/src/types/impl-trait.md)
        - [Type parameters](reference/src/types/parameters.md)
        - [Inferred type](reference/src/types/inferred.md)
    - [Dynamically Sized Types](reference/src/dynamically-sized-types.md)
    - [Type layout](reference/src/type-layout.md)
    - [Interior mutability](reference/src/interior-mutability.md)
    - [Subtyping and Variance](reference/src/subtyping.md)
    - [Trait and lifetime bounds](reference/src/trait-bounds.md)
    - [Type coercions](reference/src/type-coercions.md)
    - [Destructors](reference/src/destructors.md)
    - [Lifetime elision](reference/src/lifetime-elision.md)

- [Special types and traits](reference/src/special-types-and-traits.md)

- [Names](reference/src/names.md)
    - [Namespaces](reference/src/names/namespaces.md)
    - [Scopes](reference/src/names/scopes.md)
    - [Preludes](reference/src/names/preludes.md)
    - [Paths](reference/src/paths.md)
    - [Name resolution](reference/src/names/name-resolution.md)
    - [Visibility and privacy](reference/src/visibility-and-privacy.md)

- [Memory model](reference/src/memory-model.md)
    - [Memory allocation and lifetime](reference/src/memory-allocation-and-lifetime.md)
    - [Variables](reference/src/variables.md)

- [Linkage](reference/src/linkage.md)

- [Inline assembly](reference/src/inline-assembly.md)

- [Unsafety](reference/src/unsafety.md)
    - [The `unsafe` keyword](reference/src/unsafe-keyword.md)
    - [Behavior considered undefined](reference/src/behavior-considered-undefined.md)
    - [Behavior not considered unsafe](reference/src/behavior-not-considered-unsafe.md)

- [Constant Evaluation](reference/src/const_eval.md)

- [Application Binary Interface](reference/src/abi.md)

- [The Rust runtime](reference/src/runtime.md)

- [Appendices](reference/src/appendices.md)
    - [Macro Follow-Set Ambiguity Formal Specification](reference/src/macro-ambiguity.md)
    - [Influences](reference/src/influences.md)
    - [Glossary](reference/src/glossary.md)


## ๐ข๐ต The Rustonomicon
- [The Rustonomicon - The Dark Arts of Unsafe Rust](https://doc.rust-lang.org/nomicon/)
- [The Rustonomicon - The Dark Arts of Unsafe Rust](https://doc.rust-lang.org/nightly/nomicon/index.html)

[Introduction](nomicon/src/intro.md)

* [Meet Safe and Unsafe](nomicon/src/meet-safe-and-unsafe.md)
  * [How Safe and Unsafe Interact](nomicon/src/safe-unsafe-meaning.md)
  * [What Unsafe Can Do](nomicon/src/what-unsafe-does.md)
  * [Working with Unsafe](nomicon/src/working-with-unsafe.md)
* [Data Layout](nomicon/src/data.md)
  * [repr(Rust)](nomicon/src/repr-rust.md)
  * [Exotically Sized Types](nomicon/src/exotic-sizes.md)
  * [Other reprs](nomicon/src/other-reprs.md)
* [Ownership](nomicon/src/ownership.md)
  * [References](nomicon/src/references.md)
  * [Aliasing](nomicon/src/aliasing.md)
  * [Lifetimes](nomicon/src/lifetimes.md)
  * [Limits of Lifetimes](nomicon/src/lifetime-mismatch.md)
  * [Lifetime Elision](nomicon/src/lifetime-elision.md)
  * [Unbounded Lifetimes](nomicon/src/unbounded-lifetimes.md)
  * [Higher-Rank Trait Bounds](nomicon/src/hrtb.md)
  * [Subtyping and Variance](nomicon/src/subtyping.md)
  * [Drop Check](nomicon/src/dropck.md)
  * [PhantomData](nomicon/src/phantom-data.md)
  * [Splitting Borrows](nomicon/src/borrow-splitting.md)
* [Type Conversions](nomicon/src/conversions.md)
  * [Coercions](nomicon/src/coercions.md)
  * [The Dot Operator](nomicon/src/dot-operator.md)
  * [Casts](nomicon/src/casts.md)
  * [Transmutes](nomicon/src/transmutes.md)
* [Uninitialized Memory](nomicon/src/uninitialized.md)
  * [Checked](nomicon/src/checked-uninit.md)
  * [Drop Flags](nomicon/src/drop-flags.md)
  * [Unchecked](nomicon/src/unchecked-uninit.md)
* [Ownership Based Resource Management](nomicon/src/obrm.md)
  * [Constructors](nomicon/src/constructors.md)
  * [Destructors](nomicon/src/destructors.md)
  * [Leaking](nomicon/src/leaking.md)
* [Unwinding](nomicon/src/unwinding.md)
  * [Exception Safety](nomicon/src/exception-safety.md)
  * [Poisoning](nomicon/src/poisoning.md)
* [Concurrency](nomicon/src/concurrency.md)
  * [Races](nomicon/src/races.md)
  * [Send and Sync](nomicon/src/send-and-sync.md)
  * [Atomics](nomicon/src/atomics.md)
* [Implementing Vec](nomicon/src/./vec/vec.md)
  * [Layout](nomicon/src/./vec/vec-layout.md)
  * [Allocating](nomicon/src/./vec/vec-alloc.md)
  * [Push and Pop](nomicon/src/./vec/vec-push-pop.md)
  * [Deallocating](nomicon/src/./vec/vec-dealloc.md)
  * [Deref](nomicon/src/./vec/vec-deref.md)
  * [Insert and Remove](nomicon/src/./vec/vec-insert-remove.md)
  * [IntoIter](nomicon/src/./vec/vec-into-iter.md)
  * [RawVec](nomicon/src/./vec/vec-raw.md)
  * [Drain](nomicon/src/./vec/vec-drain.md)
  * [Handling Zero-Sized Types](nomicon/src/./vec/vec-zsts.md)
  * [Final Code](nomicon/src/./vec/vec-final.md)
* [Implementing Arc and Mutex](nomicon/src/./arc-mutex/arc-and-mutex.md)
  * [Arc](nomicon/src/./arc-mutex/arc.md)
    * [Layout](nomicon/src/./arc-mutex/arc-layout.md)
    * [Base Code](nomicon/src/./arc-mutex/arc-base.md)
    * [Cloning](nomicon/src/./arc-mutex/arc-clone.md)
    * [Dropping](nomicon/src/./arc-mutex/arc-drop.md)
    * [Final Code](nomicon/src/./arc-mutex/arc-final.md)
* [FFI](nomicon/src/ffi.md)
* [Beneath `std`](nomicon/src/beneath-std.md)
  * [#[panic_handler]](nomicon/src/panic-handler.md)


## ๐ข๐ต The Unstable Book
- [The Unstable Book](https://doc.rust-lang.org/unstable-book)

## 1. Compiler flags

- [1. Compiler flags](https://doc.rust-lang.org/unstable-book/compiler-flags.html)
    - [1.1. branch_protection](https://doc.rust-lang.org/unstable-book/compiler-flags/branch-protection.html)
    - [1.2. cf_protection](https://doc.rust-lang.org/unstable-book/compiler-flags/cf-protection.html)
    - [1.3. check_cfg](https://doc.rust-lang.org/unstable-book/compiler-flags/check-cfg.html)
    - [1.4. codegen_backend](https://doc.rust-lang.org/unstable-book/compiler-flags/codegen-backend.html)
    - [1.5. control_flow_guard](https://doc.rust-lang.org/unstable-book/compiler-flags/control-flow-guard.html)
    - [1.6. debug_info_for_profiling](https://doc.rust-lang.org/unstable-book/compiler-flags/debug_info_for_profiling.html)
    - [1.7. dwarf_version](https://doc.rust-lang.org/unstable-book/compiler-flags/dwarf-version.html)
    - [1.8. emit_stack_sizes](https://doc.rust-lang.org/unstable-book/compiler-flags/emit-stack-sizes.html)
    - [1.9. extern_options](https://doc.rust-lang.org/unstable-book/compiler-flags/extern-options.html)
    - [1.10. location_detail](https://doc.rust-lang.org/unstable-book/compiler-flags/location-detail.html)
    - [1.11. move_size_limit](https://doc.rust-lang.org/unstable-book/compiler-flags/move-size-limit.html)
    - [1.12. no_unique_section_names](https://doc.rust-lang.org/unstable-book/compiler-flags/no-unique-section-names.html)
    - [1.13. profile](https://doc.rust-lang.org/unstable-book/compiler-flags/profile.html)
    - [1.14. profile_sample_use](https://doc.rust-lang.org/unstable-book/compiler-flags/profile_sample_use.html)
    - [1.15. remap_cwd_prefix](https://doc.rust-lang.org/unstable-book/compiler-flags/remap-cwd-prefix.html)
    - [1.16. report_time](https://doc.rust-lang.org/unstable-book/compiler-flags/report-time.html)
    - [1.17. sanitizer](https://doc.rust-lang.org/unstable-book/compiler-flags/sanitizer.html)
    - [1.18. self_profile](https://doc.rust-lang.org/unstable-book/compiler-flags/self-profile.html)
    - [1.19. self_profile_events](https://doc.rust-lang.org/unstable-book/compiler-flags/self-profile-events.html)
    - [1.20. src_hash_algorithm](https://doc.rust-lang.org/unstable-book/compiler-flags/src-hash-algorithm.html)
    - [1.21. temps_dir](https://doc.rust-lang.org/unstable-book/compiler-flags/temps-dir.html)
    - [1.22. tls_model](https://doc.rust-lang.org/unstable-book/compiler-flags/tls-model.html)
    - [1.23. unsound_mir_opts](https://doc.rust-lang.org/unstable-book/compiler-flags/unsound-mir-opts.html)
    - [1.24. virtual_function_elimination](https://doc.rust-lang.org/unstable-book/compiler-flags/virtual-function-elimination.html)

## 2. Language features

- [2. Language features](https://doc.rust-lang.org/unstable-book/language-features.html)
    - [2.1. aarch64_ver_target_feature](https://doc.rust-lang.org/unstable-book/language-features/aarch64-ver-target-feature.html)
    - [2.2. abi_amdgpu_kernel](https://doc.rust-lang.org/unstable-book/language-features/abi-amdgpu-kernel.html)
    - [2.3. abi_avr_interrupt](https://doc.rust-lang.org/unstable-book/language-features/abi-avr-interrupt.html)
    - [2.4. abi_c_cmse_nonsecure_call](https://doc.rust-lang.org/unstable-book/language-features/abi-c-cmse-nonsecure-call.html)
    - [2.5. abi_efiapi](https://doc.rust-lang.org/unstable-book/language-features/abi-efiapi.html)
    - [2.6. abi_msp430_interrupt](https://doc.rust-lang.org/unstable-book/language-features/abi-msp430-interrupt.html)
    - [2.7. abi_ptx](https://doc.rust-lang.org/unstable-book/language-features/abi-ptx.html)
    - [2.8. abi_thiscall](https://doc.rust-lang.org/unstable-book/language-features/abi-thiscall.html)
    - [2.9. abi_unadjusted](https://doc.rust-lang.org/unstable-book/language-features/abi-unadjusted.html)
    - [2.10. abi_vectorcall](https://doc.rust-lang.org/unstable-book/language-features/abi-vectorcall.html)
    - [2.11. abi_x86_interrupt](https://doc.rust-lang.org/unstable-book/language-features/abi-x86-interrupt.html)
    - [2.12. adt_const_params](https://doc.rust-lang.org/unstable-book/language-features/adt-const-params.html)
    - [2.13. alloc_error_handler](https://doc.rust-lang.org/unstable-book/language-features/alloc-error-handler.html)
    - [2.14. allocator_internals](https://doc.rust-lang.org/unstable-book/language-features/allocator-internals.html)
    - [2.15. allow_internal_unsafe](https://doc.rust-lang.org/unstable-book/language-features/allow-internal-unsafe.html)
    - [2.16. allow_internal_unstable](https://doc.rust-lang.org/unstable-book/language-features/allow-internal-unstable.html)
    - [2.17. anonymous_lifetime_in_impl_trait](https://doc.rust-lang.org/unstable-book/language-features/anonymous-lifetime-in-impl-trait.html)
    - [2.18. arbitrary_enum_discriminant](https://doc.rust-lang.org/unstable-book/language-features/arbitrary-enum-discriminant.html)
    - [2.19. arbitrary_self_types](https://doc.rust-lang.org/unstable-book/language-features/arbitrary-self-types.html)
    - [2.20. arm_target_feature](https://doc.rust-lang.org/unstable-book/language-features/arm-target-feature.html)
    - [2.21. asm_const](https://doc.rust-lang.org/unstable-book/language-features/asm-const.html)
    - [2.22. asm_experimental_arch](https://doc.rust-lang.org/unstable-book/language-features/asm-experimental-arch.html)
    - [2.23. asm_sym](https://doc.rust-lang.org/unstable-book/language-features/asm-sym.html)
    - [2.24. asm_unwind](https://doc.rust-lang.org/unstable-book/language-features/asm-unwind.html)
    - [2.25. associated_const_equality](https://doc.rust-lang.org/unstable-book/language-features/associated-const-equality.html)
    - [2.26. associated_type_bounds](https://doc.rust-lang.org/unstable-book/language-features/associated-type-bounds.html)
    - [2.27. associated_type_defaults](https://doc.rust-lang.org/unstable-book/language-features/associated-type-defaults.html)
    - [2.28. async_closure](https://doc.rust-lang.org/unstable-book/language-features/async-closure.html)
    - [2.29. auto_traits](https://doc.rust-lang.org/unstable-book/language-features/auto-traits.html)
    - [2.30. avx512_target_feature](https://doc.rust-lang.org/unstable-book/language-features/avx512-target-feature.html)
    - [2.31. box_patterns](https://doc.rust-lang.org/unstable-book/language-features/box-patterns.html)
    - [2.32. box_syntax](https://doc.rust-lang.org/unstable-book/language-features/box-syntax.html)
    - [2.33. bpf_target_feature](https://doc.rust-lang.org/unstable-book/language-features/bpf-target-feature.html)
    - [2.34. c_unwind](https://doc.rust-lang.org/unstable-book/language-features/c-unwind.html)
    - [2.35. c_variadic](https://doc.rust-lang.org/unstable-book/language-features/c-variadic.html)
    - [2.36. capture_disjoint_fields](https://doc.rust-lang.org/unstable-book/language-features/capture-disjoint-fields.html)
    - [2.37. cfg_sanitize](https://doc.rust-lang.org/unstable-book/language-features/cfg-sanitize.html)
    - [2.38. cfg_target_abi](https://doc.rust-lang.org/unstable-book/language-features/cfg-target-abi.html)
    - [2.39. cfg_target_compact](https://doc.rust-lang.org/unstable-book/language-features/cfg-target-compact.html)
    - [2.40. cfg_target_has_atomic](https://doc.rust-lang.org/unstable-book/language-features/cfg-target-has-atomic.html)
    - [2.41. cfg_target_has_atomic_equal_alignment](https://doc.rust-lang.org/unstable-book/language-features/cfg-target-has-atomic-equal-alignment.html)
    - [2.42. cfg_target_thread_local](https://doc.rust-lang.org/unstable-book/language-features/cfg-target-thread-local.html)
    - [2.43. cfg_version](https://doc.rust-lang.org/unstable-book/language-features/cfg-version.html)
    - [2.44. closure_lifetime_binder](https://doc.rust-lang.org/unstable-book/language-features/closure-lifetime-binder.html)
    - [2.45. closure_track_caller](https://doc.rust-lang.org/unstable-book/language-features/closure-track-caller.html)
    - [2.46. cmpxchg16b_target_feature](https://doc.rust-lang.org/unstable-book/language-features/cmpxchg16b-target-feature.html)
    - [2.47. cmse_nonsecure_entry](https://doc.rust-lang.org/unstable-book/language-features/cmse-nonsecure-entry.html)
    - [2.48. collapse_debuginfo](https://doc.rust-lang.org/unstable-book/language-features/collapse-debuginfo.html)
    - [2.49. compiler_builtins](https://doc.rust-lang.org/unstable-book/language-features/compiler-builtins.html)
    - [2.50. const_async_blocks](https://doc.rust-lang.org/unstable-book/language-features/const-async-blocks.html)
    - [2.51. const_eval_limit](https://doc.rust-lang.org/unstable-book/language-features/const-eval-limit.html)
    - [2.52. const_extern_fn](https://doc.rust-lang.org/unstable-book/language-features/const-extern-fn.html)
    - [2.53. const_fn_floating_point_arithmetic](https://doc.rust-lang.org/unstable-book/language-features/const-fn-floating-point-arithmetic.html)
    - [2.54. const_for](https://doc.rust-lang.org/unstable-book/language-features/const-for.html)
    - [2.55. const_mut_refs](https://doc.rust-lang.org/unstable-book/language-features/const-mut-refs.html)
    - [2.56. const_precise_live_drops](https://doc.rust-lang.org/unstable-book/language-features/const-precise-live-drops.html)
    - [2.57. const_refs_to_cell](https://doc.rust-lang.org/unstable-book/language-features/const-refs-to-cell.html)
    - [2.58. const_trait_impl](https://doc.rust-lang.org/unstable-book/language-features/const-trait-impl.html)
    - [2.59. const_try](https://doc.rust-lang.org/unstable-book/language-features/const-try.html)
    - [2.60. custom_inner_attributes](https://doc.rust-lang.org/unstable-book/language-features/custom-inner-attributes.html)
    - [2.61. custom_test_frameworks](https://doc.rust-lang.org/unstable-book/language-features/custom-test-frameworks.html)
    - [2.62. debugger_visualizer](https://doc.rust-lang.org/unstable-book/language-features/debugger-visualizer.html)
    - [2.63. decl_macro](https://doc.rust-lang.org/unstable-book/language-features/decl-macro.html)
    - [2.64. default_alloc_error_handler](https://doc.rust-lang.org/unstable-book/language-features/default-alloc-error-handler.html)
    - [2.65. default_type_parameter_fallback](https://doc.rust-lang.org/unstable-book/language-features/default-type-parameter-fallback.html)
    - [2.66. deprecated_safe](https://doc.rust-lang.org/unstable-book/language-features/deprecated-safe.html)
    - [2.67. deprecated_suggestion](https://doc.rust-lang.org/unstable-book/language-features/deprecated-suggestion.html)
    - [2.68. doc_auto_cfg](https://doc.rust-lang.org/unstable-book/language-features/doc-auto-cfg.html)
    - [2.69. doc_cfg](https://doc.rust-lang.org/unstable-book/language-features/doc-cfg.html)
    - [2.70. doc_cfg_hide](https://doc.rust-lang.org/unstable-book/language-features/doc-cfg-hide.html)
    - [2.71. doc_masked](https://doc.rust-lang.org/unstable-book/language-features/doc-masked.html)
    - [2.72. doc_notable_trait](https://doc.rust-lang.org/unstable-book/language-features/doc-notable-trait.html)
    - [2.73. dropck_eyepatch](https://doc.rust-lang.org/unstable-book/language-features/dropck-eyepatch.html)
    - [2.74. dyn_star](https://doc.rust-lang.org/unstable-book/language-features/dyn-star.html)
    - [2.75. ermsb_target_feature](https://doc.rust-lang.org/unstable-book/language-features/ermsb-target-feature.html)
    - [2.76. exclusive_range_pattern](https://doc.rust-lang.org/unstable-book/language-features/exclusive-range-pattern.html)
    - [2.77. exhaustive_patterns](https://doc.rust-lang.org/unstable-book/language-features/exhaustive-patterns.html)
    - [2.78. extern_types](https://doc.rust-lang.org/unstable-book/language-features/extern-types.html)
    - [2.79. f16c_target_feature](https://doc.rust-lang.org/unstable-book/language-features/f16c-target-feature.html)
    - [2.80. ffi_const](https://doc.rust-lang.org/unstable-book/language-features/ffi-const.html)
    - [2.81. ffi_pure](https://doc.rust-lang.org/unstable-book/language-features/ffi-pure.html)
    - [2.82. ffi_returns_twice](https://doc.rust-lang.org/unstable-book/language-features/ffi-returns-twice.html)
    - [2.83. fn_align](https://doc.rust-lang.org/unstable-book/language-features/fn-align.html)
    - [2.84. fundamental](https://doc.rust-lang.org/unstable-book/language-features/fundamental.html)
    - [2.85. generator_clone](https://doc.rust-lang.org/unstable-book/language-features/generator-clone.html)
    - [2.86. generators](https://doc.rust-lang.org/unstable-book/language-features/generators.html)
    - [2.87. generic_arg_infer](https://doc.rust-lang.org/unstable-book/language-features/generic-arg-infer.html)
    - [2.88. generic_assert](https://doc.rust-lang.org/unstable-book/language-features/generic-assert.html)
    - [2.89. generic_associated_types_extended](https://doc.rust-lang.org/unstable-book/language-features/generic-associated-types-extended.html)
    - [2.90. generic_const_exprs](https://doc.rust-lang.org/unstable-book/language-features/generic-const-exprs.html)
    - [2.91. half_open_range_patterns](https://doc.rust-lang.org/unstable-book/language-features/half-open-range-patterns.html)
    - [2.92. hexagon_target_feature](https://doc.rust-lang.org/unstable-book/language-features/hexagon-target-feature.html)
    - [2.93. if_let_guard](https://doc.rust-lang.org/unstable-book/language-features/if-let-guard.html)
    - [2.94. imported_main](https://doc.rust-lang.org/unstable-book/language-features/imported-main.html)
    - [2.95. inherent_associated_types](https://doc.rust-lang.org/unstable-book/language-features/inherent-associated-types.html)
    - [2.96. inline_const](https://doc.rust-lang.org/unstable-book/language-features/inline-const.html)
    - [2.97. inline_const_pat](https://doc.rust-lang.org/unstable-book/language-features/inline-const-pat.html)
    - [2.98. intra_doc_pointers](https://doc.rust-lang.org/unstable-book/language-features/intra-doc-pointers.html)
    - [2.99. intrinsics](https://doc.rust-lang.org/unstable-book/language-features/intrinsics.html)
    - [2.100. isa_attribute](https://doc.rust-lang.org/unstable-book/language-features/isa-attribute.html)
    - [2.101. lang_items](https://doc.rust-lang.org/unstable-book/language-features/lang-items.html)
    - [2.102. large_assignments](https://doc.rust-lang.org/unstable-book/language-features/large-assignments.html)
    - [2.103. let_chains](https://doc.rust-lang.org/unstable-book/language-features/let-chains.html)
    - [2.104. link_cfg](https://doc.rust-lang.org/unstable-book/language-features/link-cfg.html)
    - [2.105. link_llvm_intrinsics](https://doc.rust-lang.org/unstable-book/language-features/link-llvm-intrinsics.html)
    - [2.106. linkage](https://doc.rust-lang.org/unstable-book/language-features/linkage.html)
    - [2.107. lint_reasons](https://doc.rust-lang.org/unstable-book/language-features/lint-reasons.html)
    - [2.108. macro_metavar_expr](https://doc.rust-lang.org/unstable-book/language-features/macro-metavar-expr.html)
    - [2.109. marker_trait_attr](https://doc.rust-lang.org/unstable-book/language-features/marker-trait-attr.html)
    - [2.110. min_specialization](https://doc.rust-lang.org/unstable-book/language-features/min-specialization.html)
    - [2.111. mips_target_feature](https://doc.rust-lang.org/unstable-book/language-features/mips-target-feature.html)
    - [2.112. more_qualified_paths](https://doc.rust-lang.org/unstable-book/language-features/more-qualified-paths.html)
    - [2.113. movbe_target_feature](https://doc.rust-lang.org/unstable-book/language-features/movbe-target-feature.html)
    - [2.114. must_not_suspend](https://doc.rust-lang.org/unstable-book/language-features/must-not-suspend.html)
    - [2.115. naked_functions](https://doc.rust-lang.org/unstable-book/language-features/naked-functions.html)
    - [2.116. native_link_modifiers_as_needed](https://doc.rust-lang.org/unstable-book/language-features/native-link-modifiers-as-needed.html)
    - [2.117. native_link_modifiers_verbatim](https://doc.rust-lang.org/unstable-book/language-features/native-link-modifiers-verbatim.html)
    - [2.118. needs_panic_runtime](https://doc.rust-lang.org/unstable-book/language-features/needs-panic-runtime.html)
    - [2.119. negative_impls](https://doc.rust-lang.org/unstable-book/language-features/negative-impls.html)
    - [2.120. never_type](https://doc.rust-lang.org/unstable-book/language-features/never-type.html)
    - [2.121. never_type_fallback](https://doc.rust-lang.org/unstable-book/language-features/never-type-fallback.html)
    - [2.122. no_core](https://doc.rust-lang.org/unstable-book/language-features/no-core.html)
    - [2.123. no_coverage](https://doc.rust-lang.org/unstable-book/language-features/no-coverage.html)
    - [2.124. no_sanitize](https://doc.rust-lang.org/unstable-book/language-features/no-sanitize.html)
    - [2.125. non_exhaustive_omitted_patterns_lint](https://doc.rust-lang.org/unstable-book/language-features/non-exhaustive-omitted-patterns-lint.html)
    - [2.126. object_safe_for_dispatch](https://doc.rust-lang.org/unstable-book/language-features/object-safe-for-dispatch.html)
    - [2.127. omit_gdb_pretty_printer_section](https://doc.rust-lang.org/unstable-book/language-features/omit-gdb-pretty-printer-section.html)
    - [2.128. optimize_attribute](https://doc.rust-lang.org/unstable-book/language-features/optimize-attribute.html)
    - [2.129. panic_runtime](https://doc.rust-lang.org/unstable-book/language-features/panic-runtime.html)
    - [2.130. platform_intrinsics](https://doc.rust-lang.org/unstable-book/language-features/platform-intrinsics.html)
    - [2.131. plugin](https://doc.rust-lang.org/unstable-book/language-features/plugin.html)
    - [2.132. powerpc_target_feature](https://doc.rust-lang.org/unstable-book/language-features/powerpc-target-feature.html)
    - [2.133. precise_pointer_size_matching](https://doc.rust-lang.org/unstable-book/language-features/precise-pointer-size-matching.html)
    - [2.134. prelude_import](https://doc.rust-lang.org/unstable-book/language-features/prelude-import.html)
    - [2.135. proc_macro_hygiene](https://doc.rust-lang.org/unstable-book/language-features/proc-macro-hygiene.html)
    - [2.136. profiler_runtime](https://doc.rust-lang.org/unstable-book/language-features/profiler-runtime.html)
    - [2.137. raw_dylib](https://doc.rust-lang.org/unstable-book/language-features/raw-dylib.html)
    - [2.138. raw_ref_op](https://doc.rust-lang.org/unstable-book/language-features/raw-ref-op.html)
    - [2.139. register_tool](https://doc.rust-lang.org/unstable-book/language-features/register-tool.html)
    - [2.140. repr_simd](https://doc.rust-lang.org/unstable-book/language-features/repr-simd.html)
    - [2.141. repr128](https://doc.rust-lang.org/unstable-book/language-features/repr128.html)
    - [2.142. return_position_impl_trait_in_trait](https://doc.rust-lang.org/unstable-book/language-features/return-position-impl-trait-in-trait.html)
    - [2.143. riscv_target_feature](https://doc.rust-lang.org/unstable-book/language-features/riscv-target-feature.html)
    - [2.144. rtm_target_feature](https://doc.rust-lang.org/unstable-book/language-features/rtm-target-feature.html)
    - [2.145. rust_cold_cc](https://doc.rust-lang.org/unstable-book/language-features/rust-cold-cc.html)
    - [2.146. rustc_allow_const_fn_unstable](https://doc.rust-lang.org/unstable-book/language-features/rustc-allow-const-fn-unstable.html)
    - [2.147. rustc_attrs](https://doc.rust-lang.org/unstable-book/language-features/rustc-attrs.html)
    - [2.148. rustc_private](https://doc.rust-lang.org/unstable-book/language-features/rustc-private.html)
    - [2.149. rustdoc_internals](https://doc.rust-lang.org/unstable-book/language-features/rustdoc-internals.html)
    - [2.150. rustdoc_missing_doc_code_examples](https://doc.rust-lang.org/unstable-book/language-features/rustdoc-missing-doc-code-examples.html)
    - [2.151. simd_ffi](https://doc.rust-lang.org/unstable-book/language-features/simd-ffi.html)
    - [2.152. specialization](https://doc.rust-lang.org/unstable-book/language-features/specialization.html)
    - [2.153. sse4a_target_feature](https://doc.rust-lang.org/unstable-book/language-features/sse4a-target-feature.html)
    - [2.154. staged_api](https://doc.rust-lang.org/unstable-book/language-features/staged-api.html)
    - [2.155. start](https://doc.rust-lang.org/unstable-book/language-features/start.html)
    - [2.156. stmt_expr_attributes](https://doc.rust-lang.org/unstable-book/language-features/stmt-expr-attributes.html)
    - [2.157. strict_provenance](https://doc.rust-lang.org/unstable-book/language-features/strict-provenance.html)
    - [2.158. structural_match](https://doc.rust-lang.org/unstable-book/language-features/structural-match.html)
    - [2.159. target_feature_11](https://doc.rust-lang.org/unstable-book/language-features/target-feature-11.html)
    - [2.160. tbm_target_feature](https://doc.rust-lang.org/unstable-book/language-features/tbm-target-feature.html)
    - [2.161. test_2018_feature](https://doc.rust-lang.org/unstable-book/language-features/test-2018-feature.html)
    - [2.162. test_unstable_lint](https://doc.rust-lang.org/unstable-book/language-features/test-unstable-lint.html)
    - [2.163. thread_local](https://doc.rust-lang.org/unstable-book/language-features/thread-local.html)
    - [2.164. trait_alias](https://doc.rust-lang.org/unstable-book/language-features/trait-alias.html)
    - [2.165. trait_upcasting](https://doc.rust-lang.org/unstable-book/language-features/trait-upcasting.html)
    - [2.166. transparent_unions](https://doc.rust-lang.org/unstable-book/language-features/transparent-unions.html)
    - [2.167. trivial_bounds](https://doc.rust-lang.org/unstable-book/language-features/trivial-bounds.html)
    - [2.168. try_blocks](https://doc.rust-lang.org/unstable-book/language-features/try-blocks.html)
    - [2.169. type_alias_impl_trait](https://doc.rust-lang.org/unstable-book/language-features/type-alias-impl-trait.html)
    - [2.170. type_ascription](https://doc.rust-lang.org/unstable-book/language-features/type-ascription.html)
    - [2.171. type_changing_struct_update](https://doc.rust-lang.org/unstable-book/language-features/type-changing-struct-update.html)
    - [2.172. unboxed_closures](https://doc.rust-lang.org/unstable-book/language-features/unboxed-closures.html)
    - [2.173. unix_sigpipe](https://doc.rust-lang.org/unstable-book/language-features/unix-sigpipe.html)
    - [2.174. unsafe_pin_internals](https://doc.rust-lang.org/unstable-book/language-features/unsafe-pin-internals.html)
    - [2.175. unsized_fn_params](https://doc.rust-lang.org/unstable-book/language-features/unsized-fn-params.html)
    - [2.176. unsized_locals](https://doc.rust-lang.org/unstable-book/language-features/unsized-locals.html)
    - [2.177. unsized_tuple_coercion](https://doc.rust-lang.org/unstable-book/language-features/unsized-tuple-coercion.html)
    - [2.178. used_with_arg](https://doc.rust-lang.org/unstable-book/language-features/used-with-arg.html)
    - [2.179. wasm_abi](https://doc.rust-lang.org/unstable-book/language-features/wasm-abi.html)
    - [2.180. wasm_target_feature](https://doc.rust-lang.org/unstable-book/language-features/wasm-target-feature.html)
    - [2.181. with_negative_coherence](https://doc.rust-lang.org/unstable-book/language-features/with-negative-coherence.html)
    - [2.182. yeet_expr](https://doc.rust-lang.org/unstable-book/language-features/yeet-expr.html)

## 3. Library Features

- [3. Library Features](https://doc.rust-lang.org/unstable-book/library-features.html)
    - [3.1. absolute_path](https://doc.rust-lang.org/unstable-book/library-features/absolute-path.html)
    - [3.2. addr_parse_ascii](https://doc.rust-lang.org/unstable-book/library-features/addr-parse-ascii.html)
    - [3.3. alloc_error_hook](https://doc.rust-lang.org/unstable-book/library-features/alloc-error-hook.html)
    - [3.4. alloc_internals](https://doc.rust-lang.org/unstable-book/library-features/alloc-internals.html)
    - [3.5. alloc_layout_extra](https://doc.rust-lang.org/unstable-book/library-features/alloc-layout-extra.html)
    - [3.6. allocator_api](https://doc.rust-lang.org/unstable-book/library-features/allocator-api.html)
    - [3.7. arc_unwrap_or_clone](https://doc.rust-lang.org/unstable-book/library-features/arc-unwrap-or-clone.html)
    - [3.8. array_chunks](https://doc.rust-lang.org/unstable-book/library-features/array-chunks.html)
    - [3.9. array_error_internals](https://doc.rust-lang.org/unstable-book/library-features/array-error-internals.html)
    - [3.10. array_into_iter_constructors](https://doc.rust-lang.org/unstable-book/library-features/array-into-iter-constructors.html)
    - [3.11. array_methods](https://doc.rust-lang.org/unstable-book/library-features/array-methods.html)
    - [3.12. array_try_from_fn](https://doc.rust-lang.org/unstable-book/library-features/array-try-from-fn.html)
    - [3.13. array_try_map](https://doc.rust-lang.org/unstable-book/library-features/array-try-map.html)
    - [3.14. array_windows](https://doc.rust-lang.org/unstable-book/library-features/array-windows.html)
    - [3.15. array_zip](https://doc.rust-lang.org/unstable-book/library-features/array-zip.html)
    - [3.16. as_array_of_cells](https://doc.rust-lang.org/unstable-book/library-features/as-array-of-cells.html)
    - [3.17. assert_matches](https://doc.rust-lang.org/unstable-book/library-features/assert-matches.html)
    - [3.18. async_iter_from_iter](https://doc.rust-lang.org/unstable-book/library-features/async-iter-from-iter.html)
    - [3.19. async_iterator](https://doc.rust-lang.org/unstable-book/library-features/async-iterator.html)
    - [3.20. atomic_bool_fetch_not](https://doc.rust-lang.org/unstable-book/library-features/atomic-bool-fetch-not.html)
    - [3.21. atomic_from_mut](https://doc.rust-lang.org/unstable-book/library-features/atomic-from-mut.html)
    - [3.22. atomic_mut_ptr](https://doc.rust-lang.org/unstable-book/library-features/atomic-mut-ptr.html)
    - [3.23. backtrace_frames](https://doc.rust-lang.org/unstable-book/library-features/backtrace-frames.html)
    - [3.24. bench_black_box](https://doc.rust-lang.org/unstable-book/library-features/bench-black-box.html)
    - [3.25. bigint_helper_methods](https://doc.rust-lang.org/unstable-book/library-features/bigint-helper-methods.html)
    - [3.26. binary_heap_as_slice](https://doc.rust-lang.org/unstable-book/library-features/binary-heap-as-slice.html)
    - [3.27. binary_heap_drain_sorted](https://doc.rust-lang.org/unstable-book/library-features/binary-heap-drain-sorted.html)
    - [3.28. binary_heap_into_iter_sorted](https://doc.rust-lang.org/unstable-book/library-features/binary-heap-into-iter-sorted.html)
    - [3.29. binary_heap_retain](https://doc.rust-lang.org/unstable-book/library-features/binary-heap-retain.html)
    - [3.30. bound_as_ref](https://doc.rust-lang.org/unstable-book/library-features/bound-as-ref.html)
    - [3.31. bound_map](https://doc.rust-lang.org/unstable-book/library-features/bound-map.html)
    - [3.32. box_into_boxed_slice](https://doc.rust-lang.org/unstable-book/library-features/box-into-boxed-slice.html)
    - [3.33. box_into_inner](https://doc.rust-lang.org/unstable-book/library-features/box-into-inner.html)
    - [3.34. btree_drain_filter](https://doc.rust-lang.org/unstable-book/library-features/btree-drain-filter.html)
    - [3.35. btreemap_alloc](https://doc.rust-lang.org/unstable-book/library-features/btreemap-alloc.html)
    - [3.36. buf_read_has_data_left](https://doc.rust-lang.org/unstable-book/library-features/buf-read-has-data-left.html)
    - [3.37. build_hasher_simple_hash_one](https://doc.rust-lang.org/unstable-book/library-features/build-hasher-simple-hash-one.html)
    - [3.38. byte_slice_trim_ascii](https://doc.rust-lang.org/unstable-book/library-features/byte-slice-trim-ascii.html)
    - [3.39. c_size_t](https://doc.rust-lang.org/unstable-book/library-features/c-size-t.html)
    - [3.40. c_void_variant](https://doc.rust-lang.org/unstable-book/library-features/c-void-variant.html)
    - [3.41. can_vector](https://doc.rust-lang.org/unstable-book/library-features/can-vector.html)
    - [3.42. cell_leak](https://doc.rust-lang.org/unstable-book/library-features/cell-leak.html)
    - [3.43. cell_update](https://doc.rust-lang.org/unstable-book/library-features/cell-update.html)
    - [3.44. cfg_accessible](https://doc.rust-lang.org/unstable-book/library-features/cfg-accessible.html)
    - [3.45. cfg_eval](https://doc.rust-lang.org/unstable-book/library-features/cfg-eval.html)
    - [3.46. char_error_internals](https://doc.rust-lang.org/unstable-book/library-features/char-error-internals.html)
    - [3.47. char_indices_offset](https://doc.rust-lang.org/unstable-book/library-features/char-indices-offset.html)
    - [3.48. char_internals](https://doc.rust-lang.org/unstable-book/library-features/char-internals.html)
    - [3.49. coerce_unsized](https://doc.rust-lang.org/unstable-book/library-features/coerce-unsized.html)
    - [3.50. concat_bytes](https://doc.rust-lang.org/unstable-book/library-features/concat-bytes.html)
    - [3.51. concat_idents](https://doc.rust-lang.org/unstable-book/library-features/concat-idents.html)
    - [3.52. const_align_of_val](https://doc.rust-lang.org/unstable-book/library-features/const-align-of-val.html)
    - [3.53. const_align_of_val_raw](https://doc.rust-lang.org/unstable-book/library-features/const-align-of-val-raw.html)
    - [3.54. const_align_offset](https://doc.rust-lang.org/unstable-book/library-features/const-align-offset.html)
    - [3.55. const_alloc_error](https://doc.rust-lang.org/unstable-book/library-features/const-alloc-error.html)
    - [3.56. const_alloc_layout](https://doc.rust-lang.org/unstable-book/library-features/const-alloc-layout.html)
    - [3.57. const_arguments_as_str](https://doc.rust-lang.org/unstable-book/library-features/const-arguments-as-str.html)
    - [3.58. const_array_from_ref](https://doc.rust-lang.org/unstable-book/library-features/const-array-from-ref.html)
    - [3.59. const_array_into_iter_constructors](https://doc.rust-lang.org/unstable-book/library-features/const-array-into-iter-constructors.html)
    - [3.60. const_assert_type2](https://doc.rust-lang.org/unstable-book/library-features/const-assert-type2.html)
    - [3.61. const_assume](https://doc.rust-lang.org/unstable-book/library-features/const-assume.html)
    - [3.62. const_bigint_helper_methods](https://doc.rust-lang.org/unstable-book/library-features/const-bigint-helper-methods.html)
    - [3.63. const_black_box](https://doc.rust-lang.org/unstable-book/library-features/const-black-box.html)
    - [3.64. const_bool_to_option](https://doc.rust-lang.org/unstable-book/library-features/const-bool-to-option.html)
    - [3.65. const_borrow](https://doc.rust-lang.org/unstable-book/library-features/const-borrow.html)
    - [3.66. const_box](https://doc.rust-lang.org/unstable-book/library-features/const-box.html)
    - [3.67. const_btree_new](https://doc.rust-lang.org/unstable-book/library-features/const-btree-new.html)
    - [3.68. const_caller_location](https://doc.rust-lang.org/unstable-book/library-features/const-caller-location.html)
    - [3.69. const_cell_into_inner](https://doc.rust-lang.org/unstable-book/library-features/const-cell-into-inner.html)
    - [3.70. const_char_convert](https://doc.rust-lang.org/unstable-book/library-features/const-char-convert.html)
    - [3.71. const_clone](https://doc.rust-lang.org/unstable-book/library-features/const-clone.html)
    - [3.72. const_cmp](https://doc.rust-lang.org/unstable-book/library-features/const-cmp.html)
    - [3.73. const_convert](https://doc.rust-lang.org/unstable-book/library-features/const-convert.html)
    - [3.74. const_cow_is_borrowed](https://doc.rust-lang.org/unstable-book/library-features/const-cow-is-borrowed.html)
    - [3.75. const_cstr_methods](https://doc.rust-lang.org/unstable-book/library-features/const-cstr-methods.html)
    - [3.76. const_default_impls](https://doc.rust-lang.org/unstable-book/library-features/const-default-impls.html)
    - [3.77. const_deref](https://doc.rust-lang.org/unstable-book/library-features/const-deref.html)
    - [3.78. const_discriminant](https://doc.rust-lang.org/unstable-book/library-features/const-discriminant.html)
    - [3.79. const_eval_select](https://doc.rust-lang.org/unstable-book/library-features/const-eval-select.html)
    - [3.80. const_float_bits_conv](https://doc.rust-lang.org/unstable-book/library-features/const-float-bits-conv.html)
    - [3.81. const_float_classify](https://doc.rust-lang.org/unstable-book/library-features/const-float-classify.html)
    - [3.82. const_fmt_arguments_new](https://doc.rust-lang.org/unstable-book/library-features/const-fmt-arguments-new.html)
    - [3.83. const_fn_trait_ref_impls](https://doc.rust-lang.org/unstable-book/library-features/const-fn-trait-ref-impls.html)
    - [3.84. const_format_args](https://doc.rust-lang.org/unstable-book/library-features/const-format-args.html)
    - [3.85. const_heap](https://doc.rust-lang.org/unstable-book/library-features/const-heap.html)
    - [3.86. const_inherent_unchecked_arith](https://doc.rust-lang.org/unstable-book/library-features/const-inherent-unchecked-arith.html)
    - [3.87. const_int_unchecked_arith](https://doc.rust-lang.org/unstable-book/library-features/const-int-unchecked-arith.html)
    - [3.88. const_intoiterator_identity](https://doc.rust-lang.org/unstable-book/library-features/const-intoiterator-identity.html)
    - [3.89. const_intrinsic_forget](https://doc.rust-lang.org/unstable-book/library-features/const-intrinsic-forget.html)
    - [3.90. const_intrinsic_raw_eq](https://doc.rust-lang.org/unstable-book/library-features/const-intrinsic-raw-eq.html)
    - [3.91. const_io_structs](https://doc.rust-lang.org/unstable-book/library-features/const-io-structs.html)
    - [3.92. const_ip](https://doc.rust-lang.org/unstable-book/library-features/const-ip.html)
    - [3.93. const_ipv4](https://doc.rust-lang.org/unstable-book/library-features/const-ipv4.html)
    - [3.94. const_ipv6](https://doc.rust-lang.org/unstable-book/library-features/const-ipv6.html)
    - [3.95. const_is_char_boundary](https://doc.rust-lang.org/unstable-book/library-features/const-is-char-boundary.html)
    - [3.96. const_likely](https://doc.rust-lang.org/unstable-book/library-features/const-likely.html)
    - [3.97. const_maybe_uninit_array_assume_init](https://doc.rust-lang.org/unstable-book/library-features/const-maybe-uninit-array-assume-init.html)
    - [3.98. const_maybe_uninit_as_mut_ptr](https://doc.rust-lang.org/unstable-book/library-features/const-maybe-uninit-as-mut-ptr.html)
    - [3.99. const_maybe_uninit_assume_init](https://doc.rust-lang.org/unstable-book/library-features/const-maybe-uninit-assume-init.html)
    - [3.100. const_maybe_uninit_assume_init_read](https://doc.rust-lang.org/unstable-book/library-features/const-maybe-uninit-assume-init-read.html)
    - [3.101. const_maybe_uninit_uninit_array](https://doc.rust-lang.org/unstable-book/library-features/const-maybe-uninit-uninit-array.html)
    - [3.102. const_maybe_uninit_write](https://doc.rust-lang.org/unstable-book/library-features/const-maybe-uninit-write.html)
    - [3.103. const_maybe_uninit_zeroed](https://doc.rust-lang.org/unstable-book/library-features/const-maybe-uninit-zeroed.html)
    - [3.104. const_nonnull_new](https://doc.rust-lang.org/unstable-book/library-features/const-nonnull-new.html)
    - [3.105. const_nonnull_slice_from_raw_parts](https://doc.rust-lang.org/unstable-book/library-features/const-nonnull-slice-from-raw-parts.html)
    - [3.106. const_num_from_num](https://doc.rust-lang.org/unstable-book/library-features/const-num-from-num.html)
    - [3.107. const_ops](https://doc.rust-lang.org/unstable-book/library-features/const-ops.html)
    - [3.108. const_option](https://doc.rust-lang.org/unstable-book/library-features/const-option.html)
    - [3.109. const_option_cloned](https://doc.rust-lang.org/unstable-book/library-features/const-option-cloned.html)
    - [3.110. const_option_ext](https://doc.rust-lang.org/unstable-book/library-features/const-option-ext.html)
    - [3.111. const_pin](https://doc.rust-lang.org/unstable-book/library-features/const-pin.html)
    - [3.112. const_pointer_byte_offsets](https://doc.rust-lang.org/unstable-book/library-features/const-pointer-byte-offsets.html)
    - [3.113. const_pref_align_of](https://doc.rust-lang.org/unstable-book/library-features/const-pref-align-of.html)
    - [3.114. const_ptr_as_ref](https://doc.rust-lang.org/unstable-book/library-features/const-ptr-as-ref.html)
    - [3.115. const_ptr_is_null](https://doc.rust-lang.org/unstable-book/library-features/const-ptr-is-null.html)
    - [3.116. const_ptr_read](https://doc.rust-lang.org/unstable-book/library-features/const-ptr-read.html)
    - [3.117. const_ptr_sub_ptr](https://doc.rust-lang.org/unstable-book/library-features/const-ptr-sub-ptr.html)
    - [3.118. const_ptr_write](https://doc.rust-lang.org/unstable-book/library-features/const-ptr-write.html)
    - [3.119. const_raw_ptr_comparison](https://doc.rust-lang.org/unstable-book/library-features/const-raw-ptr-comparison.html)
    - [3.120. const_replace](https://doc.rust-lang.org/unstable-book/library-features/const-replace.html)
    - [3.121. const_result](https://doc.rust-lang.org/unstable-book/library-features/const-result.html)
    - [3.122. const_result_drop](https://doc.rust-lang.org/unstable-book/library-features/const-result-drop.html)
    - [3.123. const_reverse](https://doc.rust-lang.org/unstable-book/library-features/const-reverse.html)
    - [3.124. const_size_of_val](https://doc.rust-lang.org/unstable-book/library-features/const-size-of-val.html)
    - [3.125. const_size_of_val_raw](https://doc.rust-lang.org/unstable-book/library-features/const-size-of-val-raw.html)
    - [3.126. const_slice_first_last](https://doc.rust-lang.org/unstable-book/library-features/const-slice-first-last.html)
    - [3.127. const_slice_from_mut_ptr_range](https://doc.rust-lang.org/unstable-book/library-features/const-slice-from-mut-ptr-range.html)
    - [3.128. const_slice_from_ptr_range](https://doc.rust-lang.org/unstable-book/library-features/const-slice-from-ptr-range.html)
    - [3.129. const_slice_from_raw_parts_mut](https://doc.rust-lang.org/unstable-book/library-features/const-slice-from-raw-parts-mut.html)
    - [3.130. const_slice_from_ref](https://doc.rust-lang.org/unstable-book/library-features/const-slice-from-ref.html)
    - [3.131. const_slice_index](https://doc.rust-lang.org/unstable-book/library-features/const-slice-index.html)
    - [3.132. const_slice_ptr_len](https://doc.rust-lang.org/unstable-book/library-features/const-slice-ptr-len.html)
    - [3.133. const_slice_split_at_not_mut](https://doc.rust-lang.org/unstable-book/library-features/const-slice-split-at-not-mut.html)
    - [3.134. const_socketaddr](https://doc.rust-lang.org/unstable-book/library-features/const-socketaddr.html)
    - [3.135. const_str_from_utf8](https://doc.rust-lang.org/unstable-book/library-features/const-str-from-utf8.html)
    - [3.136. const_str_from_utf8_unchecked_mut](https://doc.rust-lang.org/unstable-book/library-features/const-str-from-utf8-unchecked-mut.html)
    - [3.137. const_swap](https://doc.rust-lang.org/unstable-book/library-features/const-swap.html)
    - [3.138. const_transmute_copy](https://doc.rust-lang.org/unstable-book/library-features/const-transmute-copy.html)
    - [3.139. const_type_id](https://doc.rust-lang.org/unstable-book/library-features/const-type-id.html)
    - [3.140. const_type_name](https://doc.rust-lang.org/unstable-book/library-features/const-type-name.html)
    - [3.141. const_unicode_case_lookup](https://doc.rust-lang.org/unstable-book/library-features/const-unicode-case-lookup.html)
    - [3.142. const_unsafecell_get_mut](https://doc.rust-lang.org/unstable-book/library-features/const-unsafecell-get-mut.html)
    - [3.143. const_weak_new](https://doc.rust-lang.org/unstable-book/library-features/const-weak-new.html)
    - [3.144. container_error_extra](https://doc.rust-lang.org/unstable-book/library-features/container-error-extra.html)
    - [3.145. control_flow_enum](https://doc.rust-lang.org/unstable-book/library-features/control-flow-enum.html)
    - [3.146. convert_float_to_int](https://doc.rust-lang.org/unstable-book/library-features/convert-float-to-int.html)
    - [3.147. core_intrinsics](https://doc.rust-lang.org/unstable-book/library-features/core-intrinsics.html)
    - [3.148. core_panic](https://doc.rust-lang.org/unstable-book/library-features/core-panic.html)
    - [3.149. core_private_bignum](https://doc.rust-lang.org/unstable-book/library-features/core-private-bignum.html)
    - [3.150. core_private_diy_float](https://doc.rust-lang.org/unstable-book/library-features/core-private-diy-float.html)
    - [3.151. cow_is_borrowed](https://doc.rust-lang.org/unstable-book/library-features/cow-is-borrowed.html)
    - [3.152. cstr_from_bytes_until_nul](https://doc.rust-lang.org/unstable-book/library-features/cstr-from-bytes-until-nul.html)
    - [3.153. cstr_internals](https://doc.rust-lang.org/unstable-book/library-features/cstr-internals.html)
    - [3.154. cursor_remaining](https://doc.rust-lang.org/unstable-book/library-features/cursor-remaining.html)
    - [3.155. deadline_api](https://doc.rust-lang.org/unstable-book/library-features/deadline-api.html)
    - [3.156. dec2flt](https://doc.rust-lang.org/unstable-book/library-features/dec2flt.html)
    - [3.157. default_free_fn](https://doc.rust-lang.org/unstable-book/library-features/default-free-fn.html)
    - [3.158. derive_clone_copy](https://doc.rust-lang.org/unstable-book/library-features/derive-clone-copy.html)
    - [3.159. derive_eq](https://doc.rust-lang.org/unstable-book/library-features/derive-eq.html)
    - [3.160. dir_entry_ext2](https://doc.rust-lang.org/unstable-book/library-features/dir-entry-ext2.html)
    - [3.161. discriminant_kind](https://doc.rust-lang.org/unstable-book/library-features/discriminant-kind.html)
    - [3.162. dispatch_from_dyn](https://doc.rust-lang.org/unstable-book/library-features/dispatch-from-dyn.html)
    - [3.163. div_duration](https://doc.rust-lang.org/unstable-book/library-features/div-duration.html)
    - [3.164. downcast_unchecked](https://doc.rust-lang.org/unstable-book/library-features/downcast-unchecked.html)
    - [3.165. drain_filter](https://doc.rust-lang.org/unstable-book/library-features/drain-filter.html)
    - [3.166. drain_keep_rest](https://doc.rust-lang.org/unstable-book/library-features/drain-keep-rest.html)
    - [3.167. duration_checked_float](https://doc.rust-lang.org/unstable-book/library-features/duration-checked-float.html)
    - [3.168. duration_constants](https://doc.rust-lang.org/unstable-book/library-features/duration-constants.html)
    - [3.169. duration_consts_float](https://doc.rust-lang.org/unstable-book/library-features/duration-consts-float.html)
    - [3.170. edition_panic](https://doc.rust-lang.org/unstable-book/library-features/edition-panic.html)
    - [3.171. entry_insert](https://doc.rust-lang.org/unstable-book/library-features/entry-insert.html)
    - [3.172. error_generic_member_access](https://doc.rust-lang.org/unstable-book/library-features/error-generic-member-access.html)
    - [3.173. error_in_core](https://doc.rust-lang.org/unstable-book/library-features/error-in-core.html)
    - [3.174. error_iter](https://doc.rust-lang.org/unstable-book/library-features/error-iter.html)
    - [3.175. error_reporter](https://doc.rust-lang.org/unstable-book/library-features/error-reporter.html)
    - [3.176. error_type_id](https://doc.rust-lang.org/unstable-book/library-features/error-type-id.html)
    - [3.177. exact_size_is_empty](https://doc.rust-lang.org/unstable-book/library-features/exact-size-is-empty.html)
    - [3.178. exclusive_wrapper](https://doc.rust-lang.org/unstable-book/library-features/exclusive-wrapper.html)
    - [3.179. exit_status_error](https://doc.rust-lang.org/unstable-book/library-features/exit-status-error.html)
    - [3.180. exitcode_exit_method](https://doc.rust-lang.org/unstable-book/library-features/exitcode-exit-method.html)
    - [3.181. extend_one](https://doc.rust-lang.org/unstable-book/library-features/extend-one.html)
    - [3.182. fd](https://doc.rust-lang.org/unstable-book/library-features/fd.html)
    - [3.183. fd_read](https://doc.rust-lang.org/unstable-book/library-features/fd-read.html)
    - [3.184. file_create_new](https://doc.rust-lang.org/unstable-book/library-features/file-create-new.html)
    - [3.185. file_set_times](https://doc.rust-lang.org/unstable-book/library-features/file-set-times.html)
    - [3.186. float_minimum_maximum](https://doc.rust-lang.org/unstable-book/library-features/float-minimum-maximum.html)
    - [3.187. float_next_up_down](https://doc.rust-lang.org/unstable-book/library-features/float-next-up-down.html)
    - [3.188. flt2dec](https://doc.rust-lang.org/unstable-book/library-features/flt2dec.html)
    - [3.189. fmt_helpers_for_derive](https://doc.rust-lang.org/unstable-book/library-features/fmt-helpers-for-derive.html)
    - [3.190. fmt_internals](https://doc.rust-lang.org/unstable-book/library-features/fmt-internals.html)
    - [3.191. fn_traits](https://doc.rust-lang.org/unstable-book/library-features/fn-traits.html)
    - [3.192. forget_unsized](https://doc.rust-lang.org/unstable-book/library-features/forget-unsized.html)
    - [3.193. format_args_nl](https://doc.rust-lang.org/unstable-book/library-features/format-args-nl.html)
    - [3.194. fs_try_exists](https://doc.rust-lang.org/unstable-book/library-features/fs-try-exists.html)
    - [3.195. future_join](https://doc.rust-lang.org/unstable-book/library-features/future-join.html)
    - [3.196. gen_future](https://doc.rust-lang.org/unstable-book/library-features/gen-future.html)
    - [3.197. generator_trait](https://doc.rust-lang.org/unstable-book/library-features/generator-trait.html)
    - [3.198. generic_assert_internals](https://doc.rust-lang.org/unstable-book/library-features/generic-assert-internals.html)
    - [3.199. get_mut_unchecked](https://doc.rust-lang.org/unstable-book/library-features/get-mut-unchecked.html)
    - [3.200. hash_drain_filter](https://doc.rust-lang.org/unstable-book/library-features/hash-drain-filter.html)
    - [3.201. hash_raw_entry](https://doc.rust-lang.org/unstable-book/library-features/hash-raw-entry.html)
    - [3.202. hash_set_entry](https://doc.rust-lang.org/unstable-book/library-features/hash-set-entry.html)
    - [3.203. hasher_prefixfree_extras](https://doc.rust-lang.org/unstable-book/library-features/hasher-prefixfree-extras.html)
    - [3.204. hashmap_internals](https://doc.rust-lang.org/unstable-book/library-features/hashmap-internals.html)
    - [3.205. hint_must_use](https://doc.rust-lang.org/unstable-book/library-features/hint-must-use.html)
    - [3.206. inplace_iteration](https://doc.rust-lang.org/unstable-book/library-features/inplace-iteration.html)
    - [3.207. int_error_internals](https://doc.rust-lang.org/unstable-book/library-features/int-error-internals.html)
    - [3.208. int_log](https://doc.rust-lang.org/unstable-book/library-features/int-log.html)
    - [3.209. int_roundings](https://doc.rust-lang.org/unstable-book/library-features/int-roundings.html)
    - [3.210. integer_atomics](https://doc.rust-lang.org/unstable-book/library-features/integer-atomics.html)
    - [3.211. internal_output_capture](https://doc.rust-lang.org/unstable-book/library-features/internal-output-capture.html)
    - [3.212. io_error_downcast](https://doc.rust-lang.org/unstable-book/library-features/io-error-downcast.html)
    - [3.213. io_error_more](https://doc.rust-lang.org/unstable-book/library-features/io-error-more.html)
    - [3.214. io_error_other](https://doc.rust-lang.org/unstable-book/library-features/io-error-other.html)
    - [3.215. io_error_uncategorized](https://doc.rust-lang.org/unstable-book/library-features/io-error-uncategorized.html)
    - [3.216. io_slice_advance](https://doc.rust-lang.org/unstable-book/library-features/io-slice-advance.html)
    - [3.217. ip](https://doc.rust-lang.org/unstable-book/library-features/ip.html)
    - [3.218. is_some_with](https://doc.rust-lang.org/unstable-book/library-features/is-some-with.html)
    - [3.219. is_sorted](https://doc.rust-lang.org/unstable-book/library-features/is-sorted.html)
    - [3.220. iter_advance_by](https://doc.rust-lang.org/unstable-book/library-features/iter-advance-by.html)
    - [3.221. iter_array_chunks](https://doc.rust-lang.org/unstable-book/library-features/iter-array-chunks.html)
    - [3.222. iter_collect_into](https://doc.rust-lang.org/unstable-book/library-features/iter-collect-into.html)
    - [3.223. iter_from_generator](https://doc.rust-lang.org/unstable-book/library-features/iter-from-generator.html)
    - [3.224. iter_intersperse](https://doc.rust-lang.org/unstable-book/library-features/iter-intersperse.html)
    - [3.225. iter_is_partitioned](https://doc.rust-lang.org/unstable-book/library-features/iter-is-partitioned.html)
    - [3.226. iter_next_chunk](https://doc.rust-lang.org/unstable-book/library-features/iter-next-chunk.html)
    - [3.227. iter_order_by](https://doc.rust-lang.org/unstable-book/library-features/iter-order-by.html)
    - [3.228. iter_partition_in_place](https://doc.rust-lang.org/unstable-book/library-features/iter-partition-in-place.html)
    - [3.229. iterator_try_collect](https://doc.rust-lang.org/unstable-book/library-features/iterator-try-collect.html)
    - [3.230. iterator_try_reduce](https://doc.rust-lang.org/unstable-book/library-features/iterator-try-reduce.html)
    - [3.231. layout_for_ptr](https://doc.rust-lang.org/unstable-book/library-features/layout-for-ptr.html)
    - [3.232. liballoc_internals](https://doc.rust-lang.org/unstable-book/library-features/liballoc-internals.html)
    - [3.233. libstd_sys_internals](https://doc.rust-lang.org/unstable-book/library-features/libstd-sys-internals.html)
    - [3.234. libstd_thread_internals](https://doc.rust-lang.org/unstable-book/library-features/libstd-thread-internals.html)
    - [3.235. linked_list_cursors](https://doc.rust-lang.org/unstable-book/library-features/linked-list-cursors.html)
    - [3.236. linked_list_remove](https://doc.rust-lang.org/unstable-book/library-features/linked-list-remove.html)
    - [3.237. linux_pidfd](https://doc.rust-lang.org/unstable-book/library-features/linux-pidfd.html)
    - [3.238. local_key_cell_methods](https://doc.rust-lang.org/unstable-book/library-features/local-key-cell-methods.html)
    - [3.239. log_syntax](https://doc.rust-lang.org/unstable-book/library-features/log-syntax.html)
    - [3.240. main_separator_str](https://doc.rust-lang.org/unstable-book/library-features/main-separator-str.html)
    - [3.241. map_entry_replace](https://doc.rust-lang.org/unstable-book/library-features/map-entry-replace.html)
    - [3.242. map_first_last](https://doc.rust-lang.org/unstable-book/library-features/map-first-last.html)
    - [3.243. map_many_mut](https://doc.rust-lang.org/unstable-book/library-features/map-many-mut.html)
    - [3.244. map_try_insert](https://doc.rust-lang.org/unstable-book/library-features/map-try-insert.html)
    - [3.245. maybe_uninit_array_assume_init](https://doc.rust-lang.org/unstable-book/library-features/maybe-uninit-array-assume-init.html)
    - [3.246. maybe_uninit_as_bytes](https://doc.rust-lang.org/unstable-book/library-features/maybe-uninit-as-bytes.html)
    - [3.247. maybe_uninit_slice](https://doc.rust-lang.org/unstable-book/library-features/maybe-uninit-slice.html)
    - [3.248. maybe_uninit_uninit_array](https://doc.rust-lang.org/unstable-book/library-features/maybe-uninit-uninit-array.html)
    - [3.249. maybe_uninit_write_slice](https://doc.rust-lang.org/unstable-book/library-features/maybe-uninit-write-slice.html)
    - [3.250. mem_copy_fn](https://doc.rust-lang.org/unstable-book/library-features/mem-copy-fn.html)
    - [3.251. mixed_integer_ops](https://doc.rust-lang.org/unstable-book/library-features/mixed-integer-ops.html)
    - [3.252. mutex_unlock](https://doc.rust-lang.org/unstable-book/library-features/mutex-unlock.html)
    - [3.253. mutex_unpoison](https://doc.rust-lang.org/unstable-book/library-features/mutex-unpoison.html)
    - [3.254. new_uninit](https://doc.rust-lang.org/unstable-book/library-features/new-uninit.html)
    - [3.255. nonnull_slice_from_raw_parts](https://doc.rust-lang.org/unstable-book/library-features/nonnull-slice-from-raw-parts.html)
    - [3.256. nonzero_bits](https://doc.rust-lang.org/unstable-book/library-features/nonzero-bits.html)
    - [3.257. nonzero_min_max](https://doc.rust-lang.org/unstable-book/library-features/nonzero-min-max.html)
    - [3.258. nonzero_ops](https://doc.rust-lang.org/unstable-book/library-features/nonzero-ops.html)
    - [3.259. numfmt](https://doc.rust-lang.org/unstable-book/library-features/numfmt.html)
    - [3.260. once_cell](https://doc.rust-lang.org/unstable-book/library-features/once-cell.html)
    - [3.261. one_sided_range](https://doc.rust-lang.org/unstable-book/library-features/one-sided-range.html)
    - [3.262. option_get_or_insert_default](https://doc.rust-lang.org/unstable-book/library-features/option-get-or-insert-default.html)
    - [3.263. option_result_contains](https://doc.rust-lang.org/unstable-book/library-features/option-result-contains.html)
    - [3.264. option_zip](https://doc.rust-lang.org/unstable-book/library-features/option-zip.html)
    - [3.265. panic_abort](https://doc.rust-lang.org/unstable-book/library-features/panic-abort.html)
    - [3.266. panic_always_abort](https://doc.rust-lang.org/unstable-book/library-features/panic-always-abort.html)
    - [3.267. panic_backtrace_config](https://doc.rust-lang.org/unstable-book/library-features/panic-backtrace-config.html)
    - [3.268. panic_can_unwind](https://doc.rust-lang.org/unstable-book/library-features/panic-can-unwind.html)
    - [3.269. panic_info_message](https://doc.rust-lang.org/unstable-book/library-features/panic-info-message.html)
    - [3.270. panic_internals](https://doc.rust-lang.org/unstable-book/library-features/panic-internals.html)
    - [3.271. panic_unwind](https://doc.rust-lang.org/unstable-book/library-features/panic-unwind.html)
    - [3.272. panic_update_hook](https://doc.rust-lang.org/unstable-book/library-features/panic-update-hook.html)
    - [3.273. path_file_prefix](https://doc.rust-lang.org/unstable-book/library-features/path-file-prefix.html)
    - [3.274. pattern](https://doc.rust-lang.org/unstable-book/library-features/pattern.html)
    - [3.275. peer_credentials_unix_socket](https://doc.rust-lang.org/unstable-book/library-features/peer-credentials-unix-socket.html)
    - [3.276. pin_deref_mut](https://doc.rust-lang.org/unstable-book/library-features/pin-deref-mut.html)
    - [3.277. pin_macro](https://doc.rust-lang.org/unstable-book/library-features/pin-macro.html)
    - [3.278. pointer_byte_offsets](https://doc.rust-lang.org/unstable-book/library-features/pointer-byte-offsets.html)
    - [3.279. pointer_is_aligned](https://doc.rust-lang.org/unstable-book/library-features/pointer-is-aligned.html)
    - [3.280. poll_ready](https://doc.rust-lang.org/unstable-book/library-features/poll-ready.html)
    - [3.281. portable_simd](https://doc.rust-lang.org/unstable-book/library-features/portable-simd.html)
    - [3.282. prelude_2024](https://doc.rust-lang.org/unstable-book/library-features/prelude-2024.html)
    - [3.283. print_internals](https://doc.rust-lang.org/unstable-book/library-features/print-internals.html)
    - [3.284. proc_macro_def_site](https://doc.rust-lang.org/unstable-book/library-features/proc-macro-def-site.html)
    - [3.285. proc_macro_diagnostic](https://doc.rust-lang.org/unstable-book/library-features/proc-macro-diagnostic.html)
    - [3.286. proc_macro_expand](https://doc.rust-lang.org/unstable-book/library-features/proc-macro-expand.html)
    - [3.287. proc_macro_internals](https://doc.rust-lang.org/unstable-book/library-features/proc-macro-internals.html)
    - [3.288. proc_macro_quote](https://doc.rust-lang.org/unstable-book/library-features/proc-macro-quote.html)
    - [3.289. proc_macro_span](https://doc.rust-lang.org/unstable-book/library-features/proc-macro-span.html)
    - [3.290. proc_macro_span_shrink](https://doc.rust-lang.org/unstable-book/library-features/proc-macro-span-shrink.html)
    - [3.291. proc_macro_tracked_env](https://doc.rust-lang.org/unstable-book/library-features/proc-macro-tracked-env.html)
    - [3.292. process_exitcode_internals](https://doc.rust-lang.org/unstable-book/library-features/process-exitcode-internals.html)
    - [3.293. process_internals](https://doc.rust-lang.org/unstable-book/library-features/process-internals.html)
    - [3.294. profiler_runtime_lib](https://doc.rust-lang.org/unstable-book/library-features/profiler-runtime-lib.html)
    - [3.295. provide_any](https://doc.rust-lang.org/unstable-book/library-features/provide-any.html)
    - [3.296. ptr_as_uninit](https://doc.rust-lang.org/unstable-book/library-features/ptr-as-uninit.html)
    - [3.297. ptr_internals](https://doc.rust-lang.org/unstable-book/library-features/ptr-internals.html)
    - [3.298. ptr_mask](https://doc.rust-lang.org/unstable-book/library-features/ptr-mask.html)
    - [3.299. ptr_metadata](https://doc.rust-lang.org/unstable-book/library-features/ptr-metadata.html)
    - [3.300. ptr_sub_ptr](https://doc.rust-lang.org/unstable-book/library-features/ptr-sub-ptr.html)
    - [3.301. ptr_to_from_bits](https://doc.rust-lang.org/unstable-book/library-features/ptr-to-from-bits.html)
    - [3.302. pub_crate_should_not_need_unstable_attr](https://doc.rust-lang.org/unstable-book/library-features/pub-crate-should-not-need-unstable-attr.html)
    - [3.303. raw_os_nonzero](https://doc.rust-lang.org/unstable-book/library-features/raw-os-nonzero.html)
    - [3.304. raw_slice_split](https://doc.rust-lang.org/unstable-book/library-features/raw-slice-split.html)
    - [3.305. raw_vec_internals](https://doc.rust-lang.org/unstable-book/library-features/raw-vec-internals.html)
    - [3.306. read_buf](https://doc.rust-lang.org/unstable-book/library-features/read-buf.html)
    - [3.307. receiver_trait](https://doc.rust-lang.org/unstable-book/library-features/receiver-trait.html)
    - [3.308. restricted_std](https://doc.rust-lang.org/unstable-book/library-features/restricted-std.html)
    - [3.309. result_contains_err](https://doc.rust-lang.org/unstable-book/library-features/result-contains-err.html)
    - [3.310. result_flattening](https://doc.rust-lang.org/unstable-book/library-features/result-flattening.html)
    - [3.311. result_option_inspect](https://doc.rust-lang.org/unstable-book/library-features/result-option-inspect.html)
    - [3.312. round_char_boundary](https://doc.rust-lang.org/unstable-book/library-features/round-char-boundary.html)
    - [3.313. rt](https://doc.rust-lang.org/unstable-book/library-features/rt.html)
    - [3.314. saturating_int_assign_impl](https://doc.rust-lang.org/unstable-book/library-features/saturating-int-assign-impl.html)
    - [3.315. saturating_int_impl](https://doc.rust-lang.org/unstable-book/library-features/saturating-int-impl.html)
    - [3.316. sealed](https://doc.rust-lang.org/unstable-book/library-features/sealed.html)
    - [3.317. seek_stream_len](https://doc.rust-lang.org/unstable-book/library-features/seek-stream-len.html)
    - [3.318. set_ptr_value](https://doc.rust-lang.org/unstable-book/library-features/set-ptr-value.html)
    - [3.319. setgroups](https://doc.rust-lang.org/unstable-book/library-features/setgroups.html)
    - [3.320. sgx_platform](https://doc.rust-lang.org/unstable-book/library-features/sgx-platform.html)
    - [3.321. slice_as_chunks](https://doc.rust-lang.org/unstable-book/library-features/slice-as-chunks.html)
    - [3.322. slice_concat_ext](https://doc.rust-lang.org/unstable-book/library-features/slice-concat-ext.html)
    - [3.323. slice_concat_trait](https://doc.rust-lang.org/unstable-book/library-features/slice-concat-trait.html)
    - [3.324. slice_flatten](https://doc.rust-lang.org/unstable-book/library-features/slice-flatten.html)
    - [3.325. slice_from_ptr_range](https://doc.rust-lang.org/unstable-book/library-features/slice-from-ptr-range.html)
    - [3.326. slice_group_by](https://doc.rust-lang.org/unstable-book/library-features/slice-group-by.html)
    - [3.327. slice_index_methods](https://doc.rust-lang.org/unstable-book/library-features/slice-index-methods.html)
    - [3.328. slice_internals](https://doc.rust-lang.org/unstable-book/library-features/slice-internals.html)
    - [3.329. slice_iter_mut_as_mut_slice](https://doc.rust-lang.org/unstable-book/library-features/slice-iter-mut-as-mut-slice.html)
    - [3.330. slice_partition_dedup](https://doc.rust-lang.org/unstable-book/library-features/slice-partition-dedup.html)
    - [3.331. slice_pattern](https://doc.rust-lang.org/unstable-book/library-features/slice-pattern.html)
    - [3.332. slice_ptr_get](https://doc.rust-lang.org/unstable-book/library-features/slice-ptr-get.html)
    - [3.333. slice_ptr_len](https://doc.rust-lang.org/unstable-book/library-features/slice-ptr-len.html)
    - [3.334. slice_range](https://doc.rust-lang.org/unstable-book/library-features/slice-range.html)
    - [3.335. slice_split_at_unchecked](https://doc.rust-lang.org/unstable-book/library-features/slice-split-at-unchecked.html)
    - [3.336. slice_swap_unchecked](https://doc.rust-lang.org/unstable-book/library-features/slice-swap-unchecked.html)
    - [3.337. slice_take](https://doc.rust-lang.org/unstable-book/library-features/slice-take.html)
    - [3.338. solid_ext](https://doc.rust-lang.org/unstable-book/library-features/solid-ext.html)
    - [3.339. sort_floats](https://doc.rust-lang.org/unstable-book/library-features/sort-floats.html)
    - [3.340. sort_internals](https://doc.rust-lang.org/unstable-book/library-features/sort-internals.html)
    - [3.341. split_array](https://doc.rust-lang.org/unstable-book/library-features/split-array.html)
    - [3.342. split_as_slice](https://doc.rust-lang.org/unstable-book/library-features/split-as-slice.html)
    - [3.343. std_internals](https://doc.rust-lang.org/unstable-book/library-features/std-internals.html)
    - [3.344. stdio_makes_pipe](https://doc.rust-lang.org/unstable-book/library-features/stdio-makes-pipe.html)
    - [3.345. stdsimd](https://doc.rust-lang.org/unstable-book/library-features/stdsimd.html)
    - [3.346. step_trait](https://doc.rust-lang.org/unstable-book/library-features/step-trait.html)
    - [3.347. str_internals](https://doc.rust-lang.org/unstable-book/library-features/str-internals.html)
    - [3.348. str_split_as_str](https://doc.rust-lang.org/unstable-book/library-features/str-split-as-str.html)
    - [3.349. str_split_inclusive_as_str](https://doc.rust-lang.org/unstable-book/library-features/str-split-inclusive-as-str.html)
    - [3.350. str_split_whitespace_as_str](https://doc.rust-lang.org/unstable-book/library-features/str-split-whitespace-as-str.html)
    - [3.351. strict_provenance_atomic_ptr](https://doc.rust-lang.org/unstable-book/library-features/strict-provenance-atomic-ptr.html)
    - [3.352. string_extend_from_within](https://doc.rust-lang.org/unstable-book/library-features/string-extend-from-within.html)
    - [3.353. string_remove_matches](https://doc.rust-lang.org/unstable-book/library-features/string-remove-matches.html)
    - [3.354. sync_unsafe_cell](https://doc.rust-lang.org/unstable-book/library-features/sync-unsafe-cell.html)
    - [3.355. tcp_linger](https://doc.rust-lang.org/unstable-book/library-features/tcp-linger.html)
    - [3.356. tcp_quickack](https://doc.rust-lang.org/unstable-book/library-features/tcp-quickack.html)
    - [3.357. tcplistener_into_incoming](https://doc.rust-lang.org/unstable-book/library-features/tcplistener-into-incoming.html)
    - [3.358. test](https://doc.rust-lang.org/unstable-book/library-features/test.html)
    - [3.359. thin_box](https://doc.rust-lang.org/unstable-book/library-features/thin-box.html)
    - [3.360. thread_id_value](https://doc.rust-lang.org/unstable-book/library-features/thread-id-value.html)
    - [3.361. thread_local_internals](https://doc.rust-lang.org/unstable-book/library-features/thread-local-internals.html)
    - [3.362. thread_spawn_unchecked](https://doc.rust-lang.org/unstable-book/library-features/thread-spawn-unchecked.html)
    - [3.363. trace_macros](https://doc.rust-lang.org/unstable-book/library-features/trace-macros.html)
    - [3.364. track_path](https://doc.rust-lang.org/unstable-book/library-features/track-path.html)
    - [3.365. transmutability](https://doc.rust-lang.org/unstable-book/library-features/transmutability.html)
    - [3.366. trusted_len](https://doc.rust-lang.org/unstable-book/library-features/trusted-len.html)
    - [3.367. trusted_random_access](https://doc.rust-lang.org/unstable-book/library-features/trusted-random-access.html)
    - [3.368. trusted_step](https://doc.rust-lang.org/unstable-book/library-features/trusted-step.html)
    - [3.369. try_find](https://doc.rust-lang.org/unstable-book/library-features/try-find.html)
    - [3.370. try_reserve_kind](https://doc.rust-lang.org/unstable-book/library-features/try-reserve-kind.html)
    - [3.371. try_trait_v2](https://doc.rust-lang.org/unstable-book/library-features/try-trait-v2.html)
    - [3.372. try_trait_v2_residual](https://doc.rust-lang.org/unstable-book/library-features/try-trait-v2-residual.html)
    - [3.373. try_trait_v2_yeet](https://doc.rust-lang.org/unstable-book/library-features/try-trait-v2-yeet.html)
    - [3.374. tuple_trait](https://doc.rust-lang.org/unstable-book/library-features/tuple-trait.html)
    - [3.375. type_name_of_val](https://doc.rust-lang.org/unstable-book/library-features/type-name-of-val.html)
    - [3.376. unchecked_math](https://doc.rust-lang.org/unstable-book/library-features/unchecked-math.html)
    - [3.377. unicode_internals](https://doc.rust-lang.org/unstable-book/library-features/unicode-internals.html)
    - [3.378. unix_chown](https://doc.rust-lang.org/unstable-book/library-features/unix-chown.html)
    - [3.379. unix_set_mark](https://doc.rust-lang.org/unstable-book/library-features/unix-set-mark.html)
    - [3.380. unix_socket_abstract](https://doc.rust-lang.org/unstable-book/library-features/unix-socket-abstract.html)
    - [3.381. unix_socket_ancillary_data](https://doc.rust-lang.org/unstable-book/library-features/unix-socket-ancillary-data.html)
    - [3.382. unix_socket_peek](https://doc.rust-lang.org/unstable-book/library-features/unix-socket-peek.html)
    - [3.383. unsize](https://doc.rust-lang.org/unstable-book/library-features/unsize.html)
    - [3.384. unwrap_infallible](https://doc.rust-lang.org/unstable-book/library-features/unwrap-infallible.html)
    - [3.385. unzip_option](https://doc.rust-lang.org/unstable-book/library-features/unzip-option.html)
    - [3.386. update_panic_count](https://doc.rust-lang.org/unstable-book/library-features/update-panic-count.html)
    - [3.387. utf16_extra](https://doc.rust-lang.org/unstable-book/library-features/utf16-extra.html)
    - [3.388. utf16_extra_const](https://doc.rust-lang.org/unstable-book/library-features/utf16-extra-const.html)
    - [3.389. utf8_chunks](https://doc.rust-lang.org/unstable-book/library-features/utf8-chunks.html)
    - [3.390. variant_count](https://doc.rust-lang.org/unstable-book/library-features/variant-count.html)
    - [3.391. vec_into_raw_parts](https://doc.rust-lang.org/unstable-book/library-features/vec-into-raw-parts.html)
    - [3.392. vec_split_at_spare](https://doc.rust-lang.org/unstable-book/library-features/vec-split-at-spare.html)
    - [3.393. waker_getters](https://doc.rust-lang.org/unstable-book/library-features/waker-getters.html)
    - [3.394. wasi_ext](https://doc.rust-lang.org/unstable-book/library-features/wasi-ext.html)
    - [3.395. windows_by_handle](https://doc.rust-lang.org/unstable-book/library-features/windows-by-handle.html)
    - [3.396. windows_c](https://doc.rust-lang.org/unstable-book/library-features/windows-c.html)
    - [3.397. windows_handle](https://doc.rust-lang.org/unstable-book/library-features/windows-handle.html)
    - [3.398. windows_net](https://doc.rust-lang.org/unstable-book/library-features/windows-net.html)
    - [3.399. windows_process_exit_code_from](https://doc.rust-lang.org/unstable-book/library-features/windows-process-exit-code-from.html)
    - [3.400. windows_process_extensions_async_pipes](https://doc.rust-lang.org/unstable-book/library-features/windows-process-extensions-async-pipes.html)
    - [3.401. windows_process_extensions_force_quotes](https://doc.rust-lang.org/unstable-book/library-features/windows-process-extensions-force-quotes.html)
    - [3.402. windows_process_extensions_main_thread_handle](https://doc.rust-lang.org/unstable-book/library-features/windows-process-extensions-main-thread-handle.html)
    - [3.403. windows_stdio](https://doc.rust-lang.org/unstable-book/library-features/windows-stdio.html)
    - [3.404. wrapping_int_impl](https://doc.rust-lang.org/unstable-book/library-features/wrapping-int-impl.html)
    - [3.405. wrapping_next_power_of_two](https://doc.rust-lang.org/unstable-book/library-features/wrapping-next-power-of-two.html)
    - [3.406. write_all_vectored](https://doc.rust-lang.org/unstable-book/library-features/write-all-vectored.html)
    - [3.407. yeet_desugar_details](https://doc.rust-lang.org/unstable-book/library-features/yeet-desugar-details.html)


## ๐ข๐ต The WebAssembly System Interface (WASI)
- [The WebAssembly System Interface (WASI)](https://wasi.dev/)

- [Introduction](wasmtime/docs/introduction.md)
- [Tutorial](wasmtime/docs/tutorial.md)
  - [Creating `hello-world.wasm`](wasmtime/docs/tutorial-create-hello-world.md)
  - [Running `hello-world.wasm`](wasmtime/docs/tutorial-run-hello-world.md)
- [Examples](wasmtime/docs/examples.md)
  - [Markdown Parser](wasmtime/docs/examples-markdown.md)
  - [Debugging WebAssembly](wasmtime/docs/examples-debugging.md)
  - [Profiling WebAssembly](wasmtime/docs/examples-profiling.md)
    - [Profiling with Perf](wasmtime/docs/examples-profiling-perf.md)
    - [Profiling with VTune](wasmtime/docs/examples-profiling-vtune.md)
  - [Embedding in Rust](wasmtime/docs/examples-rust-embed.md)
    - [Hello, world!](wasmtime/docs/examples-rust-hello-world.md)
    - [Calculating the GCD](wasmtime/docs/examples-rust-gcd.md)
    - [Using Linear Memory](wasmtime/docs/examples-rust-memory.md)
    - [WASI](wasmtime/docs/examples-rust-wasi.md)
    - [Linking Modules](wasmtime/docs/examples-rust-linking.md)
    - [Debugging](wasmtime/docs/examples-rust-debugging.md)
    - [Using Multi-Value](wasmtime/docs/examples-rust-multi-value.md)
  - [Embedding in C](wasmtime/docs/examples-c-embed.md)
    - [Hello, World!](wasmtime/docs/examples-c-hello-world.md)
    - [Calculating the GCD](wasmtime/docs/examples-c-gcd.md)
    - [Using Linear Memory](wasmtime/docs/examples-c-memory.md)
    - [WASI](wasmtime/docs/examples-c-wasi.md)
    - [Linking Modules](wasmtime/docs/examples-c-linking.md)
    - [Debugging](wasmtime/docs/examples-c-debugging.md)
    - [Using Multi-Value](wasmtime/docs/examples-c-multi-value.md)
- [Using WebAssembly from your language](wasmtime/docs/lang.md)
  - [Rust](wasmtime/docs/lang-rust.md)
  - [C](wasmtime/docs/lang-c.md)
  - [Python](wasmtime/docs/lang-python.md)
  - [.NET](wasmtime/docs/lang-dotnet.md)
  - [Go](wasmtime/docs/lang-go.md)
  - [Bash](wasmtime/docs/lang-bash.md)
- [Using the `wasmtime` CLI](wasmtime/docs/cli.md)
  - [Installation](wasmtime/docs/cli-install.md)
  - [CLI Options](wasmtime/docs/cli-options.md)
  - [Cache Configuration](wasmtime/docs/cli-cache.md)
- [Writing WebAssembly](wasmtime/docs/wasm.md)
  - [Rust](wasmtime/docs/wasm-rust.md)
  - [C/C++](wasmtime/docs/wasm-c.md)
  - [AssemblyScript](wasmtime/docs/wasm-assemblyscript.md)
  - [WebAssembly Text Format (`*.wat`)](wasmtime/docs/wasm-wat.md)
- [Stability](stability.md)
  - [Release Process](wasmtime/docs/stability-release.md)
  - [Tiers of support](wasmtime/docs/stability-tiers.md)
  - [Platform Support](wasmtime/docs/stability-platform-support.md)
  - [Wasm Proposals Support](wasmtime/docs/stability-wasm-proposals-support.md)
- [Security](security.md)
  - [Disclosure Policy](wasmtime/docs/security-disclosure.md)
- [Contributing](contributing.md)
  - [Architecture](wasmtime/docs/contributing-architecture.md)
  - [Building](wasmtime/docs/contributing-building.md)
  - [Testing](wasmtime/docs/contributing-testing.md)
  - [Fuzzing](wasmtime/docs/contributing-fuzzing.md)
  - [CI](wasmtime/docs/contributing-ci.md)
  - [Cross Compiling](wasmtime/docs/contributing-cross-compiling.md)
  - [Coding Guidelines](wasmtime/docs/contributing-coding-guidelines.md)
  - [Development Process](wasmtime/docs/contributing-development-process.md)
  - [Release Process](wasmtime/docs/contributing-release-process.md)
  - [Implementing Wasm Proposals](wasmtime/docs/contributing-implementing-wasm-proposals.md)
  - [Governance](wasmtime/docs/contributing-governance.md)
  - [Code of Conduct](wasmtime/docs/contributing-coc.md)


## ๐ข๐ต The `wasm-bindgen` Guide
- [Rust Wasm](https://rustwasm.github.io/docs/wasm-pack/introduction.html)
- [Rust ๐ฆ and WebAssembly ๐ธ](https://rustwasm.github.io/docs/book/)
- [The `wasm-bindgen` Guide](https://rustwasm.github.io/wasm-bindgen/)


[Introduction](wasm-bindgen/guide/src/introduction.md)

--------------------------------------------------------------------------------

- [Examples](wasm-bindgen/guide/src/examples/index.md)
  - [Hello, World!](wasm-bindgen/guide/src/examples/hello-world.md)
  - [Using `console.log`](wasm-bindgen/guide/src/examples/console-log.md)
  - [Small wasm files](wasm-bindgen/guide/src/examples/add.md)
  - [Without a Bundler](wasm-bindgen/guide/src/examples/without-a-bundler.md)
  - [Converting WebAssembly to JS](wasm-bindgen/guide/src/examples/wasm2js.md)
  - [Importing functions from JS](wasm-bindgen/guide/src/examples/import-js.md)
  - [Working with `char`](wasm-bindgen/guide/src/examples/char.md)
  - [js-sys: WebAssembly in WebAssembly](wasm-bindgen/guide/src/examples/wasm-in-wasm.md)
  - [web-sys: DOM hello world](wasm-bindgen/guide/src/examples/dom.md)
  - [web-sys: Closures](wasm-bindgen/guide/src/examples/closures.md)
  - [web-sys: `performance.now`](wasm-bindgen/guide/src/examples/performance.md)
  - [web-sys: using `fetch`](wasm-bindgen/guide/src/examples/fetch.md)
  - [web-sys: `canvas` hello world](wasm-bindgen/guide/src/examples/2d-canvas.md)
  - [web-sys: `canvas` Julia set](wasm-bindgen/guide/src/examples/julia.md)
  - [web-sys: WebAudio](wasm-bindgen/guide/src/examples/web-audio.md)
  - [web-sys: WebGL](wasm-bindgen/guide/src/examples/webgl.md)
  - [web-sys: WebSockets](wasm-bindgen/guide/src/examples/websockets.md)
  - [web-sys: WebRTC DataChannel](wasm-bindgen/guide/src/examples/webrtc_datachannel.md)
  - [web-sys: `requestAnimationFrame`](wasm-bindgen/guide/src/examples/request-animation-frame.md)
  - [web-sys: A Simple Paint Program](wasm-bindgen/guide/src/examples/paint.md)
  - [web-sys: WASM in Web Worker](wasm-bindgen/guide/src/examples/wasm-in-web-worker.md)
  - [Parallel Raytracing](wasm-bindgen/guide/src/examples/raytrace.md)
  - [WASM Audio Worklet](wasm-bindgen/guide/src/examples/wasm-audio-worklet.md)
  - [web-sys: A TODO MVC App](wasm-bindgen/guide/src/examples/todomvc.md)
- [Reference](wasm-bindgen/guide/src/reference/index.md)
  - [Deployment](wasm-bindgen/guide/src/reference/deployment.md)
  - [JS snippets](wasm-bindgen/guide/src/reference/js-snippets.md)
  - [Static JS Objects](wasm-bindgen/guide/src/reference/static-js-objects.md)
  - [Passing Rust Closures to JS](wasm-bindgen/guide/src/reference/passing-rust-closures-to-js.md)
  - [Receiving JS Closures in Rust](wasm-bindgen/guide/src/reference/receiving-js-closures-in-rust.md)
  - [`Promise`s and `Future`s](wasm-bindgen/guide/src/reference/js-promises-and-rust-futures.md)
  - [Iterating over JS Values](wasm-bindgen/guide/src/reference/iterating-over-js-values.md)
  - [Arbitrary Data with Serde](wasm-bindgen/guide/src/reference/arbitrary-data-with-serde.md)
  - [Accessing Properties of Untyped JS Values](wasm-bindgen/guide/src/reference/accessing-properties-of-untyped-js-values.md)
  - [Working with Duck-Typed Interfaces](wasm-bindgen/guide/src/reference/working-with-duck-typed-interfaces.md)
  - [Command Line Interface](wasm-bindgen/guide/src/reference/cli.md)
  - [Optimizing for Size](wasm-bindgen/guide/src/reference/optimize-size.md)
  - [Supported Rust Targets](wasm-bindgen/guide/src/reference/rust-targets.md)
  - [Supported Browsers](wasm-bindgen/guide/src/reference/browser-support.md)
  - [Support for Weak References](wasm-bindgen/guide/src/reference/weak-references.md)
  - [Support for Reference Types](wasm-bindgen/guide/src/reference/reference-types.md)
  - [Supported Types](wasm-bindgen/guide/src/reference/types.md)
    - [Imported JavaScript Types](wasm-bindgen/guide/src/reference/types/imported-js-types.md)
    - [Exported Rust Types](wasm-bindgen/guide/src/reference/types/exported-rust-types.md)
    - [`JsValue`](wasm-bindgen/guide/src/reference/types/jsvalue.md)
    - [`Box<[JsValue]>`](wasm-bindgen/guide/src/reference/types/boxed-jsvalue-slice.md)
    - [`*const T` and `*mut T`](wasm-bindgen/guide/src/reference/types/pointers.md)
    - [Numbers](wasm-bindgen/guide/src/reference/types/numbers.md)
    - [`bool`](wasm-bindgen/guide/src/reference/types/bool.md)
    - [`char`](wasm-bindgen/guide/src/reference/types/char.md)
    - [`str`](wasm-bindgen/guide/src/reference/types/str.md)
    - [`String`](wasm-bindgen/guide/src/reference/types/string.md)
    - [Number Slices](wasm-bindgen/guide/src/reference/types/number-slices.md)
    - [Boxed Number Slices](wasm-bindgen/guide/src/reference/types/boxed-number-slices.md)
    - [`Result<T, E>`](wasm-bindgen/guide/src/reference/types/result.md)
  - [`#[wasm_bindgen]` Attributes](wasm-bindgen/guide/src/reference/attributes/index.md)
    - [On JavaScript Imports](wasm-bindgen/guide/src/reference/attributes/on-js-imports/index.md)
      - [`catch`](wasm-bindgen/guide/src/reference/attributes/on-js-imports/catch.md)
      - [`constructor`](wasm-bindgen/guide/src/reference/attributes/on-js-imports/constructor.md)
      - [`extends`](wasm-bindgen/guide/src/reference/attributes/on-js-imports/extends.md)
      - [`getter` and `setter`](wasm-bindgen/guide/src/reference/attributes/on-js-imports/getter-and-setter.md)
      - [`final`](wasm-bindgen/guide/src/reference/attributes/on-js-imports/final.md)
      - [`indexing_getter`, `indexing_setter`, and `indexing_deleter`](wasm-bindgen/guide/src/reference/attributes/on-js-imports/indexing-getter-setter-deleter.md)
      - [`js_class = "Blah"`](wasm-bindgen/guide/src/reference/attributes/on-js-imports/js_class.md)
      - [`js_name`](wasm-bindgen/guide/src/reference/attributes/on-js-imports/js_name.md)
      - [`js_namespace`](wasm-bindgen/guide/src/reference/attributes/on-js-imports/js_namespace.md)
      - [`method`](wasm-bindgen/guide/src/reference/attributes/on-js-imports/method.md)
      - [`module = "blah"`](wasm-bindgen/guide/src/reference/attributes/on-js-imports/module.md)
      - [`raw_module = "blah"`](wasm-bindgen/guide/src/reference/attributes/on-js-imports/raw_module.md)
      - [`static_method_of = Blah`](wasm-bindgen/guide/src/reference/attributes/on-js-imports/static_method_of.md)
      - [`structural`](wasm-bindgen/guide/src/reference/attributes/on-js-imports/structural.md)
      - [`variadic`](wasm-bindgen/guide/src/reference/attributes/on-js-imports/variadic.md)
      - [`vendor_prefix`](wasm-bindgen/guide/src/reference/attributes/on-js-imports/vendor_prefix.md)
    - [On Rust Exports](wasm-bindgen/guide/src/reference/attributes/on-rust-exports/index.md)
      - [`constructor`](wasm-bindgen/guide/src/reference/attributes/on-rust-exports/constructor.md)
      - [`js_name = Blah`](wasm-bindgen/guide/src/reference/attributes/on-rust-exports/js_name.md)
      - [`readonly`](wasm-bindgen/guide/src/reference/attributes/on-rust-exports/readonly.md)
      - [`skip`](wasm-bindgen/guide/src/reference/attributes/on-rust-exports/skip.md)
      - [`start`](wasm-bindgen/guide/src/reference/attributes/on-rust-exports/start.md)
      - [`typescript_custom_section`](wasm-bindgen/guide/src/reference/attributes/on-rust-exports/typescript_custom_section.md)
      - [`getter` and `setter`](wasm-bindgen/guide/src/reference/attributes/on-rust-exports/getter-and-setter.md)
      - [`inspectable`](wasm-bindgen/guide/src/reference/attributes/on-rust-exports/inspectable.md)
      - [`skip_typescript`](wasm-bindgen/guide/src/reference/attributes/on-rust-exports/skip_typescript.md)
      - [`typescript_type`](wasm-bindgen/guide/src/reference/attributes/on-rust-exports/typescript_type.md)
      - [`getter_with_clone`](wasm-bindgen/guide/src/reference/attributes/on-rust-exports/getter_with_clone.md)

- [`web-sys`](wasm-bindgen/guide/src/web-sys/index.md)
  - [Using `web-sys`](wasm-bindgen/guide/src/web-sys/using-web-sys.md)
  - [Cargo Features](wasm-bindgen/guide/src/web-sys/cargo-features.md)
  - [Function Overloads](wasm-bindgen/guide/src/web-sys/function-overloads.md)
  - [Type Translations](wasm-bindgen/guide/src/web-sys/type-translations.md)
  - [Inheritance](wasm-bindgen/guide/src/web-sys/inheritance.md)
  - [Unstable APIs](wasm-bindgen/guide/src/web-sys/unstable-apis.md)

- [Testing with `wasm-bindgen-test`](wasm-bindgen/guide/src/wasm-bindgen-test/index.md)
  - [Usage](wasm-bindgen/guide/src/wasm-bindgen-test/usage.md)
  - [Writing Asynchronous Tests](wasm-bindgen/guide/src/wasm-bindgen-test/asynchronous-tests.md)
  - [Testing in Headless Browsers](wasm-bindgen/guide/src/wasm-bindgen-test/browsers.md)
  - [Continuous Integration](wasm-bindgen/guide/src/wasm-bindgen-test/continuous-integration.md)

- [Contributing to `wasm-bindgen`](wasm-bindgen/guide/src/contributing/index.md)
  - [Testing](wasm-bindgen/guide/src/contributing/testing.md)
  - [Internal Design](wasm-bindgen/guide/src/contributing/design/index.md)
    - [JS Objects in Rust](wasm-bindgen/guide/src/contributing/design/js-objects-in-rust.md)
    - [Exporting a function to JS](wasm-bindgen/guide/src/contributing/design/exporting-rust.md)
    - [Exporting a struct to JS](wasm-bindgen/guide/src/contributing/design/exporting-rust-struct.md)
    - [Importing a function from JS](wasm-bindgen/guide/src/contributing/design/importing-js.md)
    - [Importing a class from JS](wasm-bindgen/guide/src/contributing/design/importing-js-struct.md)
    - [Rust Type conversions](wasm-bindgen/guide/src/contributing/design/rust-type-conversions.md)
    - [Types in `wasm-bindgen`](wasm-bindgen/guide/src/contributing/design/describe.md)
  - [`js-sys`](wasm-bindgen/guide/src/contributing/js-sys/index.md)
    - [Testing](wasm-bindgen/guide/src/contributing/js-sys/testing.md)
    - [Adding More APIs](wasm-bindgen/guide/src/contributing/js-sys/adding-more-apis.md)
  - [`web-sys`](wasm-bindgen/guide/src/contributing/web-sys/index.md)
    - [Overview](wasm-bindgen/guide/src/contributing/web-sys/overview.md)
    - [Testing](wasm-bindgen/guide/src/contributing/web-sys/testing.md)
    - [Logging](wasm-bindgen/guide/src/contributing/web-sys/logging.md)
    - [Supporting More Web APIs](wasm-bindgen/guide/src/contributing/web-sys/supporting-more-web-apis.md)
  - [Publishing](wasm-bindgen/guide/src/contributing/publishing.md)
  - [Team](wasm-bindgen/guide/src/contributing/team.md)


## ๐ข๐ต Compilers Principles
- Crafting Interpreters - A handbook for making programming languages http://www.craftinginter-preters.com/contents.html
- Compilers: Principles, Techniques, and Tools 2nd - Dragon book ็ผ่ฏๅ็้พไนฆ
- ็ผ่ฏๅ็๏ผๅๅทฅๅคง๏ผ https://www.bilibili.com/video/av17649289

- Table of Contents

- 1 Introduction
- 2 A Simple Syntax-Directed Translator
- 3 Lexical Analysis
- 4 Syntax Analysis
- 5 Syntax-Directed Translation
- 7 Run-Time Environments 427
- 8 Code Generation
- 9 Machine-Independent Optimizations
- 10 Instruction-Level Parallelism
- 11 Optimizing for Parallelism and Locality
- 12 Interprocedural Analysis
- A A Complete Front End
- B Finding Linearly Independent Solutions


- 1 Introduction
    - 1.1 Language Processors
        - 1.1.1 Exercises for Section 1.1
    - 1.2 The Structure of a Compiler
        - 1.2.1 Lexical Analysis
        - 1.2.2 Syntax Analysis
        - 1.2.3 Semantic Analysis
        - 1.2.4 Intermediate Code Generation
        - 1.2.5 Code Optimization
        - 1.2.6 Code Generation
        - 1.2.7 Symbol-Table Management
        - 1.2.8 The Grouping of Phases into Passes
        - 1.2.9 Compiler-Construction Tools
    - 1.3 The Evolution of Programming Languages
        - 1.3.1 The Move to Higher-level Languages
        - 1.3.2 Impacts on Compilers
        - 1.3.3 Exercises for Section 1.3
    - 1.4 The Science of Building a Compiler
        - 1.4.1 Modeling in Compiler Design and Implementation
        - 1.4.2 The Science of Code Optimization
    - 1.5 Applications of Compiler Technology
        - 1.5.1 Implementation of High-Level Programming Languages
        - 1.5.2 Optimizations for Computer Architectures
        - 1.5.3 Design of New Computer Architectures
        - 1.5.4 Program Translations
        - 1.5.5 Software Productivity Tools
    - 1.6 Programming Language Basics
        - 1.6.1 The Static/Dynamic Distinction
        - 1.6.2 Environments and States
        - 1.6.3 Static Scope and Block Structure
        - 1.6.4 Explicit Access Control
        - 1.6.5 Dynamic Scope
        - 1.6.6 Parameter Passing Mechanisms
        - 1.6.7 Aliasing
        - 1.6.8 Exercises for Section 1.6
    - 1.7 Summary of Chapter 1
    - 1.8 References for Chapter 1
- 2 A Simple Syntax-Directed Translator
    - 2.1 Introduction
    - 2.2 Syntax Definition
        - 2.2.1 Definition of Grammars
        - 2.2.2 Derivations
        - 2.2.3 Parse Trees
        - 2.2.4 Ambiguity
        - 2.2.5 Associativity of Operators
        - 2.2.6 Precedence of Operators
        - 2.2.7 Exercises for Section 2.2
    - 2.3 Syntax-Directed Translation
        - 2.3.1 Postfix Notation
        - 2.3.2 Synthesized Attributes
        - 2.3.3 Simple Syntax-Directed Definitions
        - 2.3.4 Tree Traversals
        - 2.3.5 Translation Schemes
        - 2.3.6 Exercises for Section 2.3
    - 2.4 Parsing
        - 2.4.1 Top-Down Parsing
        - 2.4.2 Predictive Parsing
        - 2.4.3 When to Use c-Productions
        - 2.4.4 Designing a Predictive Parser
        - 2.4.5 Left Recursion
        - 2.4.6 Exercises for Section 2.4
    - 2.5 A Translator for Simple Expressions
        - 2.5.1 Abstract and Concrete Syntax
        - 2.5.2 Adapting the Translation Scheme
        - 2.5.3 Procedures for the Nonterminals
        - 2.5.4 Simplifying the Translator
        - 2.5.5 The Complete Program
    - 2.6 Lexical Analysis
        - 2.6.1 Removal of White Space and Comments
        - 2.6.2 Reading Ahead
        - 2.6.3 Constants
        - 2.6.4 Recognizing Keywords and Identifiers
        - 2.6.5 A Lexical Analyzer
        - 2.6.6 Exercises for Section 2.6
    - 2.7 Symbol Tables
        - 2.7.1 Symbol Table Per Scope
        - 2.7.2 The Use of Symbol Tables
    - 2.8 Intermediate Code Generation
        - 2.8.1 Two Kinds of Intermediate Representations
        - 2.8.2 Construction of Syntax Trees
        - 2.8.3 Static Checking
        - 2.8.4 Three-Address Code
        - 2.8.5 Exercises for Section 2.8
    - 2.9 Summary of Chapter 2
- 3 Lexical Analysis
    - 3.1 The Role of the Lexical Analyzer
        - 3.1.1 Lexical Analysis Versus Parsing
        - 3.1.2 Tokens, Patterns, and Lexemes
        - 3.1.3 Attributes for Tokens
        - 3.1.4 Lexical Errors
        - 3.1.5 Exercises for Section 3.1
    - 3.2 Input Buffering
        - 3.2.1 Buffer Pairs
        - 3.2.2 Sentinels
    - 3.3 Specification of Tokens
    - 3.4 Recognition of Tokens
    - 3.5 The Lexical - Analyzer Generator Lex
        - 3.3.1 Strings and Languages
        - 3.3.2 Operations on Languages
        - 3.3.3 Regular Expressions
        - 3.3.4 Regular Definitions
        - 3.3.5 Extensions of Regular Expressions
        - 3.3.6 Exercises for Section 3.3
        - 3.4.1 Transition Diagrams
        - 3.4.2 Recognition of Reserved Words and Identifiers
        - 3.4.3 Completion of the Running Example
        - 3.4.4 Architecture of a Transition-Diagram-Based Lexical Analyzer
        - 3.4.5 Exercises for Section 3.4
        - 3.5.1 Use of Lex
        - 3.5.2 Structure of Lex Programs
        - 3.5.3 Conflict Resolution in Lex
        - 3.5.4 The Lookahead Operator
        - 3.5.5 Exercises for Section 3.5
    - 3.6 Finite Automata
        - 3.6.1 Nondeterministic Finite Automata
        - 3.6.2 Transition Tables
        - 3.6.3 Acceptance of Input Strings by Automata
        - 3.6.4 Deterministic Finite Automata
        - 3.6.5 Exercises for Section 3.6
    - 3.7 From Regular Expressions to Automata
        - 3.7.1 Conversion of an NFA to a DFA
        - 3.7.2 Simulation of an NFA
        - 3.7.3 Efficiency of NFA Simulation
        - 3.7.4 Construction of an NFA from a Regular Expression
        - 3.7.5 Efficiency of String- Processing Algorithms
        - 3.7.6 Exercises for Section 3.7
    - 3.8 Design of a Lexical-Analyzer Generator
        - 3.8.1 The Structure of the Generated Analyzer
        - 3.8.2 Pattern Matching Based on NFA's
        - 3.8.3 DFA's for Lexical Analyzers
        - 3.8.4 Implementing the Lookahead Operator
        - 3.8.5 Exercises for Section 3.8
    - 3.9 Optimization of DFA-Based Pattern Matchers
        - 3.9.1 Important States of an NFA
        - 3.9.2 Functions Computed From the Syntax Tree
        - 3.9.3 Computing nullable, jirstpos, and lastpos
        - 3.9.4 Computing Jollowpos
        - 3.9.5 Converting a Regular Expression Directly to a DFA
        - 3.9.6 Minimizing the Number of States of a DFA
        - 3.9.7 State Minimization in Lexical Analyzers
        - 3.9.8 Trading Time for Space in DFA Simulation
        - 3.9.9 Exercises for Section 3.9
    - 3.10 Summary of Chapter 3
    - 3.11 References for Chapter 3
- 4 Syntax Analysis
    - 4.1 Introduction
        - 4.1.1 The Role of the Parser
        - 4.1.2 Representative Grammars
        - 4.1.3 Syntax Error Handling
        - 4.1.4 Error-Recovery Strategies
    - 4.2 Context-Free Grammars
        - 4.2.1 The Formal Definition of a Context-Free Grammar
        - 4.2.2 Notational Conventions
        - 4.2.3 Derivations
        - 4.2.4 Parse Trees and Derivations
        - 4.2.5 Ambiguity
        - 4.2.6 Verifying the Language Generated by a Grammar
        - 4.2.7 Context-Free Grammars Versus Regular Expressions
        - 4.2.8 Exercises for Section 4.2
    - 4.3 Writing a Grammar
        - 4.3.1 Lexical Vers us Syntactic Analysis
        - 4.3.2 Eliminating Ambiguity
        - 4.3.3 Elimination of Left Recursion
        - 4.3.4 Left Factoring
        - 4.3.5 Non-Context-Free Language Constructs
        - 4.3.6 Exercises for Section 4.3
    - 4.4 Top-Down Parsing
        - 4.4.1 Recursive-Descent Parsing
        - 4.4.2 FIRST and FOLLOW
        - 4.4.3 LL(l) Grammars
        - 4.4.4 Nonrecursive Predictive Parsing
        - 4.4.5 Error Recovery in Predictive Parsing
        - 4.4.6 Exercises for Section 4.4
    - 4.5 Bottom-Up Parsing
        - 4.5.1 Reductions
        - 4.5.2 Handle Pruning
        - 4.5.3 Shift-Reduce Parsing
        - 4.5.4 Conflicts During Shift-Reduce Parsing
        - 4.5.5 Exercises for Section 4.5
    - 4.6 Introduction to LR Parsing: Simple LR
        - 4.6.1 Why LR Parsers?
        - 4.6.2 Items and the LR(O) Automaton
        - 4.6.3 The LR-Parsing Algorithm
        - 4.6.4 Constructing SLR-Parsing Tables
        - 4.6.5 Viable Prefixes
        - 4.6.6 Exercises for Section 4.6
    - 4.7 More Powerful LR Parsers
        - 4.7.1 Canonical LR(l) Items
        - 4.7.2 Constructing LR(l) Sets of Items
        - 4.7.3 Canonical LR(l) Parsing Tables
        - 4.7.4 Constructing LALR Parsing Tables
        - 4.7.5 Efficient Construction of LALR Parsing Tables
        - 4.7.6 Compaction of LR Parsing Tables
        - 4.7.7 Exercises for Section 4.7
    - 4.8 U sing Ambiguous Grammars
        - 4.8.1 Precedence and Associativity to Resolve Conflicts
        - 4.8.2 The "Dangling-Else" Ambiguity
        - 4.8.3 Error Recovery in LR Parsing
        - 4.8.4 Exercises for Section 4.8
    - 4.9 Parser Generators
        - 4.9.1 The Parser Generator Yacc
        - 4.9.2 Using Yacc with Ambiguous Grammars
        - 4.9.3 Creating Yacc Lexical Analyzers with Lex
        - 4.9.4 Error Recovery in Yacc
        - 4.9.5 Exercises for Section 4.9
    - 4.10 Summary of Chapter 4
    - 4.11 References for Chapter 4
- 5 Syntax-Directed Translation
    - 5.1 Syntax-Directed Definitions
        - 5.1.1 Inherited and Synthesized Attributes
        - 5.1.2 Evaluating an SDD at the Nodes of a Parse Tree
        - 5.1.3 Exercises for Section 5.1
    - 5.2 Evaluation Orders for SDD's
        - 5.2.1 Dependency Graphs
        - 5.2.2 Ordering the Evaluation of Attributes
        - 5.2.3 S-Attributed Definitions
        - 5.2.4 L-Attributed Definitions
        - 5.2.5 Semantic Rules with Controlled Side Effects
        - 5.2.6 Exercises for Section 5.2
    - 5.3 Applications of Syntax-Directed Translation
        - 5.3.1 Construction of Syntax Trees
        - 5.3.2 The Structure of a Type
        - 5.3.3 Exercises for Section 5.3
    - 5.4 Syntax-Directed Translation Schemes
        - 5.4.1 Postfix Translation Schemes
        - 5.4.2 Parser-Stack Implementation of Postfix SDT's
        - 5.4.3 SDT's With Actions Inside Productions
        - 5.4.4 Eliminating Left Recursion From SDT's
        - 5.4.5 SDT's for L-Attributed Definitions
        - 5.4.6 Exercises for Section 5.4
    - 5.5 Implementing L-Attributed SDD's
        - 5.5.1 Translation During Recursive-Descent Parsing
        - 5.5.2 On-The-Fly Code Generation
        - 5.5.3 L-Attributed SDD's and LL Parsing
        - 5.5.4 Bottom-Up Parsing of L-Attributed SDD's
        - 5.5.5 Exercises for Section 5.5
    - 5.6 Summary of Chapter 5
    - 5.7 References for Chapter 5
    - 6 Intermediate-Code Generation
    - 6.1 Variants of Syntax Trees
        - 6.1.1 Directed Acyclic Graphs for Expressions
        - 6.1.2 The Value-Number Method for Constructing DAG's
        - 6.1.3 Exercises for Section 6.1
    - 6.2 Three-Address Code
        - 6.2.1 Addresses and Instructions
        - 6.2.2 Quadruples
        - 6.2.3 Triples
        - 6.2.4 Static Single-Assignment Form
        - 6.2.5 Exercises for Section 6.2
    - 6.3 Types and Declarations
        - 6.3.1 Type Expressions
        - 6.3.2 Type Equivalence
        - 6.3.3 Declarations
        - 6.3.4 Storage Layout for Local Names
        - 6.3.5 Sequences of Declarations
        - 6.3.6 Fields in Records and Classes
        - 6.3.7 Exercises for Section 6.3
    - 6.4 Translation of Expressions
        - 6.4.1 Operations Within Expressions
        - 6.4.2 Incremental Thanslation
        - 6.4.3 Addressing Array Elements
        - 6.4.4 Thanslation of Array References
        - 6.4.5 Exercises for Section 6.4
    - 6.5 Type Checking
        - 6.5.1 Rules for Type Checking
        - 6.5.2 Type Conversions
        - 6.5.3 Overloading of Functions and Operators
        - 6.5.4 Type Inference and Polymorphic Functions
        - 6.5.5 An Algorithm for Unification
        - 6.5.6 Exercises for Section 6.5
    - 6.6 Control Flow
        - 6.6.1 Boolean Expressions
        - 6.6.2 Short-Circuit Code
        - 6.6.3 Flow-of-Control Statements
        - 6.6.4 Control-Flow Translation of Boolean Expressions
        - 6.6.5 A voiding Redundant Gotos
        - 6.6.6 Boolean Values and Jumping Code
        - 6.6.7 Exercises for Section 6.6
    - 6.7 Backpatching
        - 6.7.1 One-Pass Code Generation Using Backpatching
        - 6.7.2 Backpatching for Boolean Expressions
        - 6.7.3 Flow-of-Control Statements
        - 6.7.4 Break-, Continue-, and Goto-Statements
        - 6.7.5 Exercises for Section 6.7
    - 6.8 Switch-Statements
        - 6.8.1 Translation of Switch-Statements
        - 6.8.2 Syntax-Directed T h anslation of Switch-Statements
        - 6.8.3 Exercises for Section 6.8
    - 6.9 Intermediate Code for Procedures
    - 6.10 Summary of Chapter 6
    - 6.11 References for Chapter 6
- 7 Run-Time Environments 427
    - 7.1 Storage Organization
        - 7.1.1 Static Versus Dynamic Storage Allocation
    - 7.2 Stack Allocation of Space
        - 7.2.1 Activation Trees
        - 7.2.2 Activation Records
        - 7.2.3 Calling Sequences
        - 7.2.4 Variable-Length Data on the Stack
        - 7.2.5 Exercises for Section 7.2
    - 7.3 Access to Nonlocal Data on the Stack
        - 7.3.1 Data Access \Vithout Nested Procedures
        - 7.3.2 Issues With Nested Procedures
        - 7.3.3 A Language With Nested Procedure Declarations
        - 7.3.4 Nesting Depth
        - 7.3.5 Access Links
        - 7.3.6 Manipulating Access Links
        - 7.3.7 Access Links for Procedure Parameters
        - 7.3.8 Displays
        - 7.3.9 Exercises for Section 7.3
    - 7.4 Heap Management
        - 7.4.1 The Memory Manager
        - 7.4.2 The lVIemory Hierarchy of a Computer
        - 7.4.3 Locality in Programs
        - 7.4.4 Reducing Fragmentation
        - 7.4.5 Manual Deallocation Requests
        - 7.4.6 Exercises for Section 7.4
    - 7.5 Introduction to Garbage Collection
        - 7.5.1 Design Goals for Garbage Collectors
        - 7.5.2 Reachability
        - 7.5.3 Reference Counting Garbage Collectors
        - 7.5.4 Exercises for Section 7.5
    - 7.6 Introduction to Trace-Based Collection
        - 7.6.1 A Basic Mark-and-Sweep Collector
        - 7.6.2 Basic Abstraction
        - 7.6.3 Optimizing Mark-and-Sweep
        - 7.6.4 Mark-and-Compact Garbage Collectors
        - 7.6.5 Copying collectors
        - 7.6.6 Comparing Costs
        - 7.6.7 Exercises for Section 7.6
    - 7.7 Short-Pause Garbage Collection
        - 7.7.1 Incremental Garbage Collection
        - 7.7.2 Incremental Reachability Analysis
        - 7.7.3 Partial-Collection Basics
        - 7.7.4 Generational Garbage Collection
        - 7.7.5 The Train Algorithm
        - 7.7.6 Exercises for Section 7.7
    - 7.8 Advanced Topics in Garbage Collection
        - 7.8.1 Parallel and Concurrent Garbage Collection
        - 7.8.2 Partial Object Relocation
        - 7.8.3 Conservative Collection for Unsafe Languages
        - 7.8.4 Weak References
        - 7.8.5 Exercises for Section 7.8
    - 7.9 Summary of Chapter 7
    - 7.10 References for Chapter 7
- 8 Code Generation
    - 8.1 Issues in the Design of a Code Generator
        - 8.1.1 Input to the Code Generator
        - 8.1.2 The Target Program
        - 8.1.3 Instruction Selection
        - 8.1.4 Register Allocation
        - 8.1.5 Evaluation Order
    - 8.2 The Target Language
        - 8.2.1 A Simple Target Machine Model
        - 8.2.2 Program and Instruction Costs
        - 8.2.3 Exercises for Section 8.2
    - 8.3 Addresses in the Target Code
        - 8.3.1 Static Allocation
        - 8.3.2 Stack Allocation
        - 8.3.3 Run-Time Addresses for Names
        - 8.3.4 Exercises for Section 8.3
    - 8.4 Basic Blocks and Flow Graphs
        - 8.4.1 Basic Blocks
        - 8.4.2 Next-Use Information
        - 8.4.3 Flow Graphs
        - 8.4.4 Representation of Flow Graphs
        - 8.4.5 Loops
        - 8.4.6 Exercises for Section 8.4
    - 8.5 Optimization of Basic Blocks
        - 8.5.1 The DAG Representation of Basic Blocks
        - 8.5.2 Finding Local Common Subexpressions
        - 8.5.3 Dead Code Elimination
        - 8.5.4 The Use of Algebraic Identities
        - 8.5.5 Representation of Array References
        - 8.5.6 Pointer Assignments and Procedure Calls
        - 8.5.7 Reassembling Basic Blocks From DAG's
        - 8.5.8 Exercises for Section 8.5
    - 8.6 A Simple Code Generator
        - 8.6.1 Register and Address Descriptors
        - 8.6.2 The Code-Generation Algorithm
        - 8.6.3 Design of the Function getReg
        - 8.6.4 Exercises for Section 8.6
    - 8.7 Peephole Optimization
        - 8.7.2 Eliminating Unreachable Code
        - 8.7.3 Flow-of-Control Optimizations
        - 8.7.4 Algebraic Simplification and Reduction in Strength
        - 8.7.5 Use of Machine Idioms
    - 8.8 Register Allocation and Assignment
        - 8.8.1 Global Register Allocation
        - 8.8.3 Register Assignment for Outer Loops
        - 8.8.4 Register Allocation by Graph Coloring
        - 8.8.5 Exercises for Section 8.8
    - 8.9 Instruction Selection by Tree Rewriting
        - 8.9.1 Tree-Translation Schemes
        - 8.9.2 Code Ge n eration by Tiling an Input Tree
        - 8.9.3 Pattern Matching by Parsing
        - 8.9.4 Routines for Semantic Checking
        - 8.9.5 General Tree Matching
    - 8 Exercises for Section 8.9
    - 8.10 Optimal Code Generatipn for Expressions
        - 8.10.1 Ershov Numbers
        - 8.10.2 Generating Code From Labeled Expression Trees
        - 8.10.3 Evaluating Expressions with an Insufficient Supply of Registers
        - 8.10.4 Exercises for Section 8.10
    - 8.11 Dynamic Programming Code-Generation
        - 8.11.1 Contiguous Evaluation
        - 8.11.2 The Dynamic Programming Algorithm
        - 8.11.3 Exercises for Section 8.11
    - 8.12 Summary of Chapter 8
    - 8.13 References for Chapter 8
- 9 Machine-Independent Optimizations
    - 9.1 The Principal Sources of Optimization
        - 9.1.1 Causes of Redundancy
        - 9.1.2 A R unning Example: Quicksort
        - 9.1.3 Semantics-Preserving Transformations
        - 9.1.4 Global Common Sub expressions
        - 9.1.5 Copy Propagation
        - 9.1.6 Dead-Code Elimination
        - 9.1.7 Code Motion
        - 9.1.8 Induction Variables and Reduction in Strength
        - 9.1.9 Exercises for Section 9.1
    - 9.2 Introduction to Data-Flow Analysis
        - 9.2.1 The Data-Flow Abstraction
        - 9.2.2 The Data-Flow Analysis Schema
        - 9.2.3 Data-Flow Schemas on Basic Blocks
        - 9.2.4 Reaching Definitions
        - 9.2.5 Live-Variable Analysis
        - 9.2.6 Available Expressions
        - 9.2.7 Summary
        - 9.2.8 Exercises for Section 9.2
    - 9.3 Foundations of Data-Flow Analysis
        - 9.3.1 Semilattices
        - 9.3.2 Transfer Functions
        - 9.3.3 The Iterative Algorithm for General Frameworks
        - 9.3.4 Meaning of a Data-Flow Solution
        - 9.3.5 Exercises for Section 9.3
    - 9.4 Constant Propagation
        - 9.4.1 Data-Flow Values for the Constant-Propagation Framework
        - 9.4.2 The Meet for the Constant - Propagation Framework
        - 9.4.3 Transfer Functions for the Constant-Propagation Framework
        - 9.4.4 Monotonicity of the Constant-Propagation Framework
        - 9.4.5 Nondistributivity of the Constant-Propagation Framework 635
        - 9.4.6 Interpretation of the Results
        - 9.4.7 Exercises for Section 9.4
    - 9.5 Partial-Redundancy Elimination
        - 9.5.1 The Sources of Redundancy
        - 9.5.2 Can All Redundancy Be Eliminated?
        - 9.5.3 The Lazy-Code-Motion Problem
        - 9.5.4 Anticipation of Expressions
        - 9.5.5 The Lazy-Code-Motion Algorithm
        - 9.5.6 Exercises for Section 9.5
    - 9.6 Loops in Flow Graphs
        - 9.6.1 Dominators
        - 9.6.2 Depth-First Ordering
        - 9.6.3 Edges in a Depth-First Spanning Tree
        - 9.6.4 Back Edges and Reducibility
        - 9.6.5 Depth of a Flow Graph
        - 9.6.6 Natural Loops
        - 9.6.7 Speed of Convergence of Iterative Data-Flow Algorithms
        - 9.6.8 Exercises for Section 9.6
    - 9.7 Region-Based Analysis
        - 9.7.1 Regions
        - 9.7.2 Region Hierarchies for Reducible Flow Graphs
        - 9.7.3 Overview of a Region-Based Analysis
        - 9.7.4 Necessary Assumptions About Transfer Functions
        - 9.7.5 An Algorithm for Region-Based Analysis
        - 9.7.6 Handling Nonreducible Flow Graphs
        - 9.7.7 Exercises for Section 9.7
    - 9.8 Symbolic Analysis
        - 9.8.1 Affine Expressions of Reference Variables
        - 9.8.2 Data-Flow Problem Formulation
        - 9.8.3 Region-Based Symbolic Analysis
        - 9.8.4 Exercises for Section 9.8
    - 9.9 Summary of Chapter 9
    - 9.10 References for Chapter 9
- 10 Instruction-Level Parallelism
    - 10.1 Processor Architectures
        - 10.1.1 Instruction Pipelines and Branch Delays
        - 10.1.2 Pipelined Execution
        - 10.1.3 :Multiple Instruction Issue
    - 10.2 Code-Scheduling Constraints
        - 10.2.1 Data Dependence
        - 10.2.2 Finding Dependences Among Memory Accesses
        - 10.2.3 Tradeoff Between Register Usage and Parallelism
        - 10.2.4 Phase Ordering Between Register Allocation and Code Scheduling
        - 10.2.5 Control Dependence
        - 10.2.6 Speculative Execution Support
        - 10.2.7 A Basic Machine Model
        - 10.2.8 Exercises for Section 10.2
    - 10.3 Basic-Block Scheduling
        - 10.3.1 Data-Dependence Graphs
        - 10.3.2 List Scheduling of Basic Blocks
        - 10.3.3 Prioritized Topological Orders
        - 10.3.4 Exercises for Section 10.3
    - 10.4 Global Code Scheduling
        - 10.4.1 Primitive Code Motion
        - 10.4.2 Upward Code Motion
        - 10.4.3 Downward Code Motion
        - 10.4.4 Updating Data Dependences
        - 10.4.5 Global Scheduling Algorithms
        - 10.4.6 Advanced Code lVlotion Techniques
        - 10.4.7 Interaction with Dynamic Schedulers
    - 1004.8 Exercises for Section lOA
    - 10.5 Software Pipelining
        - 10.5.1 Introduction
        - 10.5.2 Software Pipelining of Loops
        - 10.5.3 Register Allocation and Code Generation
        - 10.5.4 Do-Across Loops
        - 10.5.5 Goals and Constraints of Software Pipelining
        - 10.5.6 A Software-Pipelining Algorithm
        - 10.5.7 Scheduling Acyclic Data-Dependence Graphs
        - 10.5.8 Scheduling Cyclic Dependence Graphs
        - 10.5.9 Improvements to the Pipelining Algorithms
        - 10.5.10 Modular Variable Expansion
        - 10.5.11 Conditional Statements
        - 10.5.12 Hardware Support for Software Pipelining
        - 10.5.13 Exercises for Section 10.5
    - 10.6 Summary of Chapter 10
    - 10.7 References for Chapter 10
- 11 Optimizing for Parallelism and Locality
    - 11.1 Basic Concepts
        - 11.1.1 Multiprocessors
        - 11.1.2 Parallelism in Applications
        - 11.1.3 Loop-Level Parallelism
        - 11.1.4 Data Locality
        - 11.1.5 Introduction to Affine Transform Theory
    - 11.2 Matrix Multiply: An In-Depth Example
        - 11.2.1 The Matrix-Multiplication Algorithm
        - 11.2.2 Optimizations
        - 11.2.3 Cache Interference
        - 11.2.4 Exercises for Section 11.2
    - 11.3 Iteration Spaces
        - 11.3.1 Constructing Iteration Spaces from Loop Nests
        - 11.3.2 Execution Order for Loop Nests
        - 11.3.3 Matrix Formulation of Inequalities
        - 11.3.4 Incorporating Symbolic Constants
        - 11.3.5 Controlling the Order of Execution
        - 11.3.6 Changing Axes
        - 11.3.7 Exercises for Section 11.3
    - 11.4 Affine Array Indexes
        - 11.4.1 Affine Accesses
        - 11.4.2 Affine and Nonaffine Accesses in Practice
        - 11.4.3 Exercises for Sec tion 11.4
    - 11.5 Data Reuse
        - 11.5.1 Types of Reuse
        - 11.5.3 Self-Spatial Reuse
        - 11.5.4 Group Reuse
        - 11.5.5 Exercises for Section 11.5
    - 11.6 Array Data-Dependence Analysis
        - 11.6.1 Definition of Data Dependence of Array Accesses
        - 11.6.2 Integer Linear Programming
        - 11.6.3 The GCD Test
        - 11.6.4 Heuristics for Solving Integer Linear Programs
        - 11.6.5 Solving General Integer Linear Programs
        - 11.6.6 Summary
        - 11.6.7 Exercises for Section 11.6
    - 11.7 Finding Synchronization-Free Parallelism
        - 11.7.1 An Introductory Example
        - 11.7.2 Affine Space Partitions
        - 11.7.6 Eliminating Empty Iterations
    - 11.8 Synchronization Between Parallel Loops
        - 11.8.1 A Constant Number of Synchronizations
        - 11.8.2 Program-Dependence Graphs
        - 11.8.3 Hierarchical Time
        - 11.8.4 The Parallelization Algorithm
        - 11.8.5 Exercises for Section 11.8
    - 11.9 Pipelining
        - 11.9.1 What is Pipelining?
        - 11.9.2 Successive Over-Relaxation ( SOR ) : An Example
        - 11.9.3 Fully Permutable Loops
        - 11.9.4 Pipelining Fully Permutable Loops
        - 11.9.5 General Theory
        - 11.9.6 Time-Partition Constraints
        - 11.9.7 Solving Time-Partition Constraints by Farkas' Lemma
        - 11.9.8 Code Transformations
        - 11.9.9 Parallelism With Minimum Synchronization
    - 11.10 Locality Optimizations
        - 11.10.1 Temporal Locality of Computed Data
        - 11.10.2 Array Contraction
        - 11.10.3 Partition Interleaving
        - 11.10.4 Putting it All Together
        - 11.10.5 Exercises for Secti on 11.10
    - 11.11 Other Uses of Affine Transforms
        - 11.11.1 Distributed memory machines
        - 11.11.2 M ulti-Instruction-Issue Processors
        - 11.11.3Vector and SIMD Instructions
        - 11.11.4 Prefetching
    - 11.12 Summary of Chapter 11
    - 11.13 References for Chapter 11
- 12 Interprocedural Analysis
    - 12.1 Basic Concepts
        - 12.1.1 Call Graphs
        - 12.1.2 Context Sensitivity
        - 12.1.3 Call Strings
        - 12.1.4 Cloning-Based Context-Sensitive Analysis
        - 12.1.5 Summary-Based Context-Sensitive Analysis
        - 12.1.6 Exercises for Section 12.1
    - 12.2 Why Interprocedural Analysis?
        - 12.2.1 Virtual Method Invocation
        - 12.2.2 Pointer Alias Analysis
        - 12.2.3 Parallelization
        - 12.2.4 Detection of Software Errors and Vulnerabilities
        - 12.2.5 SQL Injection
        - 12.2.6 Buffer Overflow
    - 12.3 A Logical Representation of Data Flow
        - 12.3.1 Introduction to Datalog
        - 12.3.2 Datalog Rules
        - 12.3.3 Intensional and Extensional Predicates
        - 12.3.4 Execution of Datalog Programs
        - 12.3.5 Incremental Evaluation of Datalog Programs
        - 12.3.6 Problematic Datalog Rules
        - 12.3.7 Exercises for Section 12.3
    - 12.4 A Simple Pointer - Analysis Algorithm
        - 12.4.1 Why is Pointer Analysis Difficult
        - 12.4.2 A Model for Pointers and References
        - 12.4.3 Flow Insensitivity
        - 12.4.4 The Formulation in Datalog
        - 12.4.5 Using Type Information
        - 12.4.6 Exercises for Section 12.4
    - 12.5 Context-Insensitive Interprocedural Analysis
        - 12.5.1 Effects of a Method Invocation
        - 12.5.2 Call Graph Discovery in Datalog
        - 12.5.3 Dynamic Loading and Reflection
        - 12.5.4 Exercises for Section 12.5
    - 12.6 Context-Sensitive Pointer Analysis
        - 12.6.1 Contexts and Call Strings
        - 12.6.2 Adding Context to Datalog Rules
        - 12.6.3 Additional Observations About Sensitivity
        - 12.6.4 Exercises for Section 12.6
    - 12.7 Datalog Implementation by BDD's
        - 12.7.1 Binary Decision Diagrams
        - 12.7.2 Transformations on BDD's
        - 12.7.3 Representing Relations by BDD's
        - 12.7.4 Relational Operations as BDD Operations
        - 12.7.5 Using BDD's for Points-to Analysis
        - 12.7.6 Exercises for Section 12.7
    - 12.8 Summary of Chapter 12
    - 12.9 References for Chapter 12
- A A Complete Front End
    - A.l The Source Language
    - A.2 Main
    - A.3 Lexical Analyzer
    - A.4 Symbol Tables and Types
    - A.5 Intermediate Code for Expressions
    - A.6 Jumping Code for Boolean Expressions
    - A.7 Intermediate Code for Statements
    - A.8 Parser
    - A.9 Creating the Front End
- B Finding Linearly Independent Solutions



## ๐ข๐ต Structure and Interpretation of Computer Programs (SICP)
- Structure and Interpretation of Computer Programs 2nd, SICP https://mitpress.mit.edu/sites/default/files/sicp/index.html
- https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book-Z-H-4.html

Contents

    Foreword
    Preface to the Second Edition
    Preface to the First Edition
    Acknowledgments
    1  Building Abstractions with Procedures
        1.1  The Elements of Programming
            1.1.1  Expressions
            1.1.2  Naming and the Environment
            1.1.3  Evaluating Combinations
            1.1.4  Compound Procedures
            1.1.5  The Substitution Model for Procedure Application
            1.1.6  Conditional Expressions and Predicates
            1.1.7  Example: Square Roots by Newton's Method
            1.1.8  Procedures as Black-Box Abstractions
        1.2  Procedures and the Processes They Generate
            1.2.1  Linear Recursion and Iteration
            1.2.2  Tree Recursion
            1.2.3  Orders of Growth
            1.2.4  Exponentiation
            1.2.5  Greatest Common Divisors
            1.2.6  Example: Testing for Primality
        1.3  Formulating Abstractions with Higher-Order Procedures
            1.3.1  Procedures as Arguments
            1.3.2  Constructing Procedures Using Lambda
            1.3.3  Procedures as General Methods
            1.3.4  Procedures as Returned Values
    2  Building Abstractions with Data
        2.1  Introduction to Data Abstraction
            2.1.1  Example: Arithmetic Operations for Rational Numbers
            2.1.2  Abstraction Barriers
            2.1.3  What Is Meant by Data?
            2.1.4  Extended Exercise: Interval Arithmetic
        2.2  Hierarchical Data and the Closure Property
            2.2.1  Representing Sequences
            2.2.2  Hierarchical Structures
            2.2.3  Sequences as Conventional Interfaces
            2.2.4  Example: A Picture Language
        2.3  Symbolic Data
            2.3.1  Quotation
            2.3.2  Example: Symbolic Differentiation
            2.3.3  Example: Representing Sets
            2.3.4  Example: Huffman Encoding Trees
        2.4  Multiple Representations for Abstract Data
            2.4.1  Representations for Complex Numbers
            2.4.2  Tagged data
            2.4.3  Data-Directed Programming and Additivity
        2.5  Systems with Generic Operations
            2.5.1  Generic Arithmetic Operations
            2.5.2  Combining Data of Different Types
            2.5.3  Example: Symbolic Algebra
    3  Modularity, Objects, and State
        3.1  Assignment and Local State
            3.1.1  Local State Variables
            3.1.2  The Benefits of Introducing Assignment
            3.1.3  The Costs of Introducing Assignment
        3.2  The Environment Model of Evaluation
            3.2.1  The Rules for Evaluation
            3.2.2  Applying Simple Procedures
            3.2.3  Frames as the Repository of Local State
            3.2.4  Internal Definitions
        3.3  Modeling with Mutable Data
            3.3.1  Mutable List Structure
            3.3.2  Representing Queues
            3.3.3  Representing Tables
            3.3.4  A Simulator for Digital Circuits
            3.3.5  Propagation of Constraints
        3.4  Concurrency: Time Is of the Essence
            3.4.1  The Nature of Time in Concurrent Systems
            3.4.2  Mechanisms for Controlling Concurrency
        3.5  Streams
            3.5.1  Streams Are Delayed Lists
            3.5.2  Infinite Streams
            3.5.3  Exploiting the Stream Paradigm
            3.5.4  Streams and Delayed Evaluation
            3.5.5  Modularity of Functional Programs and Modularity of Objects
    4  Metalinguistic Abstraction
        4.1  The Metacircular Evaluator
            4.1.1  The Core of the Evaluator
            4.1.2  Representing Expressions
            4.1.3  Evaluator Data Structures
            4.1.4  Running the Evaluator as a Program
            4.1.5  Data as Programs
            4.1.6  Internal Definitions
            4.1.7  Separating Syntactic Analysis from Execution
        4.2  Variations on a Scheme -- Lazy Evaluation
            4.2.1  Normal Order and Applicative Order
            4.2.2  An Interpreter with Lazy Evaluation
            4.2.3  Streams as Lazy Lists
        4.3  Variations on a Scheme -- Nondeterministic Computing
            4.3.1  Amb and Search
            4.3.2  Examples of Nondeterministic Programs
            4.3.3  Implementing the Amb Evaluator
        4.4  Logic Programming
            4.4.1  Deductive Information Retrieval
            4.4.2  How the Query System Works
            4.4.3  Is Logic Programming Mathematical Logic?
            4.4.4  Implementing the Query System
    5  Computing with Register Machines
        5.1  Designing Register Machines
            5.1.1  A Language for Describing Register Machines
            5.1.2  Abstraction in Machine Design
            5.1.3  Subroutines
            5.1.4  Using a Stack to Implement Recursion
            5.1.5  Instruction Summary
        5.2  A Register-Machine Simulator
            5.2.1  The Machine Model
            5.2.2  The Assembler
            5.2.3  Generating Execution Procedures for Instructions
            5.2.4  Monitoring Machine Performance
        5.3  Storage Allocation and Garbage Collection
            5.3.1  Memory as Vectors
            5.3.2  Maintaining the Illusion of Infinite Memory
        5.4  The Explicit-Control Evaluator
            5.4.1  The Core of the Explicit-Control Evaluator
            5.4.2  Sequence Evaluation and Tail Recursion
            5.4.3  Conditionals, Assignments, and Definitions
            5.4.4  Running the Evaluator
        5.5  Compilation
            5.5.1  Structure of the Compiler
            5.5.2  Compiling Expressions
            5.5.3  Compiling Combinations
            5.5.4  Combining Instruction Sequences
            5.5.5  An Example of Compiled Code
            5.5.6  Lexical Addressing
            5.5.7  Interfacing Compiled Code to the Evaluator
    References
    List of Exercises
    Index



# ๐ก๐  Getting Started
- [The Rust Programming Language](https://doc.rust-lang.org/book/)
- [Rust by Example](https://doc.rust-lang.org/rust-by-example/index.html)
- [The rustc book](https://doc.rust-lang.org/rustc/what-is-rustc.html)
- [Guide to Rustc Development](https://rustc-dev-guide.rust-lang.org/about-this-guide.html)
- [The Rustonomicon - The Dark Arts of Unsafe Rust](https://doc.rust-lang.org/nightly/nomicon/index.html)
- [Futures Explained in 200 Lines of Rust](https://cfsamson.github.io/books-futures-explained/)
- [Rust Language Cheat Sheet](https://cheats.rs)
- [Golang vs. Rust: Which Programming Language To Choose in 2021?](https://trio.dev/blog/golang-vs-rust)
- [Rust & Go & C++ ๆฏ่พ](https://duzhi5368.github.io/2019/05/rustgoc--%E6%AF%94%E8%BE%83/)
- [Why Go Is Not Good](http://yager.io/programming/go.html)
- [The Rust Compilation Model Calamity](https://en.pingcap.com/blog/rust-compilation-model-calamity)
- [Rust ็ผ่ฏๆจกๅไนๆฎ](https://cloud.tencent.com/developer/article/1592954)
- [Rust ไธญ็ๅผๆญฅ็ผ็จ](https://huangjj27.github.io/async-book/01_getting_started/01_chapter.html)
- [Rust ๅผๆญฅ็ผ็จ](https://learnku.com/docs/async-book/2018/translation-notes/4798)
- [็ปๅๅญฆ่็Rustไธญๆๆ็จ](https://rustcc.gitbooks.io/rustprimer/content/)
- [The Embedonomicon](https://docs.rust-embedded.org/embedonomicon/)
- [The Embedded Rust Book](https://docs.rust-embedded.org/book/intro/index.html)
- [The Discovery book](https://docs.rust-embedded.org/discovery/index.html)
- [Why using Rust in the Linux kernel](https://lkml.org/lkml/2021/4/14/1023)

Rust ๆๆฉๆฏ Mozilla ้ๅ Graydon Hoare ็ไธชไบบ้กน็ฎ๏ผไป 2009 ๅนดๅผๅง๏ผๅพๅฐไบ Mozilla ็ ็ฉถ้ข็่ตๅฉ๏ผ2010 ๅนด้กน็ฎๅฏนๅคๅฌๅธใ

2010 ๏ฝ2011 ๅนด้ดๅฎ็ฐ็่ชไธพ๏ผไปๆญคไปฅๅ๏ผRust ็ปๅไบๅทจๅคง็่ฎพ่ฎกๅๅๅๅๅค๏ผๅ็จๆๅถ่ฐ่พ๏ผ๏ผ็ปไบๅจ 2015 ๅนด 5 ๆ 15ๆฅๅๅธไบ 1.0 ็ใ

ๅจ่ฟไธช็ ๅ่ฟ็จไธญ๏ผRust ๅปบ็ซไบไธไธชๅผบๅคงๆดป่ท็็คพๅบ๏ผๅฝขๆไบไธๆดๅฅๅฎๅ็จณๅฎ็้กน็ฎ่ดก็ฎๆบๅถ๏ผ็ฐๅจ็ฑ Rust ้กน็ฎๅผๅ่็คพๅบ็ปดๆค๏ผ่ฟๆฏ็ๆญฃ็ๅผบๅคงไนๅคใ

่ช 2015 ๅนด 5 ๆ 15 ๆฅ Rust ็ผ็จ่ฏญ่จๆ ธๅฟๅข้ๆญฃๅผๅฎฃๅธๅๅธ Rust 1.0 ็ๆฌไปฅๆฅ๏ผๅฎไผ้็่งฃๅณ้ซๅนถๅๅ้ซๅฎๅจๆง็ณป็ป้ฎ้ข็่ฝๅ๏ผๅๅฐไบ่ถๆฅ่ถๅคๅผๅ่็ๅ็ฑใ

Rust ๅจๅทฅไฝไธญ็ๅ ๆฏๅด่ถๆฅ่ถ้ซ๏ผRust ๅจๅไธๅบ็จไธๆ็ไปคไบบๆ่ฎถ็ๆ้ฟ๏ผๅๆฌไธไบไบบไปฌ่ณ็่ฝ่ฏฆ็ๅฌๅธ๏ผ

- ไบ้ฉฌ้๏ผ็จ Rust ๆๅปบๅทฅๅท๏ผ
- Facebook๏ผๆบไปฃ็ ๆงๅถๅทฅๅท๏ผLibra ๆฐๅญ่ดงๅธ้กน็ฎ๏ผๆดๅไธบ Diem๏ผ็บฏ Rust ๅฎ็ฐ๏ผ
- Google๏ผไฝไธบ Fuchsia ๆไฝ็ณป็ป้กน็ฎ็ไธ้จๅ๏ผ
- ๅพฎ่ฝฏ๏ผๅจๆฐ็ Azure ็ฉ่็ฝๆกๆถไธญ้จๅไฝฟ็จ Rust๏ผ
- Twitter๏ผ็จ Rust ไฝไธบๆๅปบๅข้ๆฏๆ็ไธ้จๅใ

ๅถๅฎไธไบ Rust ๅผๅ็็ฅๅ้กน็ฎ๏ผ

- TiKV ๏ผRust ๅฎ็ฐ็ๅๅธๅผKVๅญๅจ๏ผๆฏTiDB็ๅบ็กใ
- Redox ๏ผRust ๅฎ็ฐ็ๆไฝ็ณป็ป๏ผ่ๅๆฏSystem76ๅฌๅธใ
- tockOS๏ผRust ๅฎ็ฐ็ๅบไบ Cortex-M ็ๅพฎๆงๅถๅจ็ๅฎๅจๅตๅฅๅผๆไฝ็ณป็ปใ
- Parity ๅ CITA ๅบๅ้พๆกๆถ๏ผGavin Wood ๆ Rust ๅธฆ่ฟๅบๅ้พ๏ผๆจๅบไปฅๅคชๅๅฎขๆท็ซฏ Parity๏ผๆๅๅ ้ขไปฅๅคชๅ็คพๅบ็ๅๅฃๆฑๅฑฑใ
- Firecracker๏ผไบ้ฉฌ้ๅบๅ็ไธไธชๅบไบ KVM ็่ฝป้็บง VMM๏ผๅฏไปฅๅจๅ ๅไนไธ็งๅๅฏๅจ่ๆๆบ๏ผๅๅญๅ ็จๅฐ๏ผๅฏไปฅๅฎ็ฐ้ซๅฏๅบฆไบ็ฏๅขใ
- Mesalink TLS ๆฏ็พๅบฆๅฎๅจๅฎ้ชๅฎค็ ๅ็ไธไธไปฃไผ ่พๅฑๅฎๅจๅบ๏ผๆญฃๅผๆฏๆ TLS 1.3 ๅ IPv6๏ผๆฏๆ CMake ็ผ่ฏ๏ผๆฏๆ Windows๏ผๅฎ็ฐ็ไบง็ฏๅขๅฏ็จใ
- alacritty๏ผRust ๅฎ็ฐ็่ทจๅนณๅฐไธ GPU ๅ ้็็ป็ซฏๅทฅๅทใ
- citybound๏ผไธไธช Rust ๅฎ็ฐ็ๅค่ง่ฒๅๅธๆจกๆๆธธๆใ
- Amethyst๏ผRust ๅฎ็ฐ็ๆธธๆๅผๆ๏ผ้็จไบ ECS ๆถๆใ
- Rustsim ็ป็ป๏ผ่็ฆไบๆไพๅ็งๆฐๅผๆจกๆ็ๅบ๏ผ็จไบ็งๅญฆ่ฎก็ฎใๅๆฌ alga๏ผๆฝ่ฑกไปฃๆฐๅบ๏ผ/nalgebra๏ผ ็บฟๆงไปฃๆฐๅบ๏ผ/ncollide๏ผ2Dๅ3D็็ขฐๆๆฃๆตๅบ๏ผ/nphysics๏ผ2Dๅ3D็็ฉ็ๆจกๆๅบ๏ผใ
- actix-web๏ผ ๅบไบ Actor ๅบ Actix ็ Web ๆกๆถ๏ผ่ฟๆ rocket๏ผRust ๅฎ็ฐ็ MVC ๆกๆถใ
- Deno๏ผNode.js ไน็ถ็ๆฐๅ๏ผTypeScript ่ฟ่กๆถ๏ผๅฎๅจๅผๅฎนๆต่งๅจ APIใ
- Xi-editor๏ผRust ๅ็ฐไปฃ่ฝฏไปถๅทฅ็จๆๅปบ็้ซ่ดจ้ๆๆฌ็ผ่พๅจใๆๆ็ๆไฝ้ฝๅจ 16ms ๅๆไบคๅ็ปๅถ๏ผๆฐธ่ฟไธไผ่ฎฉไฝ ็ญๅพไปปไฝไบๆใ
- Servo - independent, modular, embeddable web engine https://servo.org/

ๆฏ่พ C++ Rust Golang ็ไผๅฟไธๅฃๅฟ pros and cons๏ผ็็ๆ็ฅจ๏ผ

    |            Pros of C++            |                Pros of Go               |                Pros of Rust               |
    |-----------------------------------|-----------------------------------------|-------------------------------------------|
    | 171 Performance                   | 513 High-performance                    | 122 Guaranteed memory safety              |
    | 91 Control over memory allocation | 376 Simple, minimal syntax              | 109 Fast                                  |
    | 87 Cross-platform                 | 343 Fun to write                        | 72 Open source                            |
    | 82 Fast                           | 289 Easy concurrency with goroutines    | 66 Minimal runtime                        |
    | 73 Object oriented                | 261 Fast compilation times              | 57 Pattern matching                       |
    | 53 Industry standard              | 183 Goroutines                          | 53 Type inference                         |
    | 41 Smart pointers                 | 173 Statically linked, simple to deploy | 51 Algebraic data types                   |
    | 32 Templates                      | 144 Simple compile build/run procedures | 46 Concurrent                             |
    | 16 Gui toolkits                   | 129 Backed by google                    | 43 Efficient C bindings                   |
    | 15 Raii                           | 125 Great community                     | 38 Practical                              |
    | 12 Generic programming            | 46 Garbage collection built-in          | 30 Best advances in languages in 20 years |
    | 11 Flexibility                    | 40 Built-in Testing                     | 22 Safe, fast, easy + friendly community  |
    | 10 Control                        | 36 Excellent tools - gofmt, godoc etc   | 22 Fix for C/C++                          |

ๅจ้กน็ฎๅฏ็ปดๆคๆงไธ๏ผGolang ๆฏ Rust ่ฆๅๅพๅฅฝ๏ผๅฏไปฅ่ฏดๆฏๅบไบๆฅๅฃ็ปๅๅผๆๆณ๏ผๅฟซ้้ซๆๅๅฅฝ็ฉ็ Cใ่ Rust ๆๅคง็ไผ็นๆฏ้ซๆ็ๅผๅ่ฟๆญ้ไธ้ซๅฎๅจๆง๏ผ่ฟไธ็น้ๅธธๅฅฝ๏ผๅฏไปฅ่ฏด Rust ๆฏ้ซๆๅฎๅจ็็ C++ใ

ๅฆๆ่ฟ้ๅฐ็ผ่ฏไธๆฏ Rust ็ๆ ธๅฟ่ฎพ่ฎกๅๅ๏ผ้ฃไน Rust ็ๆ ธๅฟ่ฎพ่ฎกๅๅๆฏไปไนๅข๏ผ

้คไบ Rust ็็ผ่ฏๆ็ๆน้ข็ไธ่ถณ๏ผRust ๅธฆๆฅ็ๆฏๆดๅค็ไผ็ง็ๆ ธๅฟ่ฎพ่ฎกๅๅ๏ผ

- Practicality ๅฎ็จๆง ๏ผๅฎๅบ่ฏฅๆฏไธ็งๅฏไปฅๅจ็ฐๅฎไธ็ไธญไฝฟ็จ็่ฏญ่จ๏ผ
- Pragmatism ๅกๅฎ๏ผๅฎๅบ่ฏฅๆฏ็ฌฆๅไบบๆงๅไฝ้ช๏ผๅนถไธ่ฝไธ็ฐๆ็ณป็ปๆนไพฟ้ๆ็่ฏญ่จ๏ผ
- Memory safety ๅๅญๅฎๅจๆง๏ผๅฎๅฟ้กปๅ ๅผบๅๅญๅฎๅจ๏ผไธๅ่ฎธๅบ็ฐๆฎต้่ฏฏๅๅถไป็ฑปไผผ็ๅๅญ่ฎฟ้ฎ่ฟ่งๆไฝ๏ผ
- Performance ้ซๆง่ฝ ๏ผๅฎๅฟ้กปๆฅๆ่ฝๅ C++ ๆฏ่ฉ็ๆง่ฝ๏ผ
- Concurrency ้ซๅนถๅ ๏ผๅฎๅฟ้กปไธบ็ผๅๅนถๅไปฃ็ ๆไพ็ฐไปฃๅ็่งฃๅณๆนๆกใ

ๅฆๅค๏ผGo ็่ฎพ่ฎก็ฎ็ๆฏไธบไบ่ฎฉๅผๅ่่ฝๅค่ฝปๆพๅฐๅถไฝๅฟซ้ใๅฎๅจใไปฅ็ฝ็ปไธบไธญๅฟ็ไปฃ็ ๏ผๅนถๅจๅฝไป็ๅคๆ ธ CPU ไธ่ท็ใ่ฟไฝฟๅพ่ฏฅ่ฏญ่จๅพๅฐไบๆๅคง็ๅบ็จ๏ผๅฐคๅถๆฏๅจไบ็ฏๅขไธญใGo ๆไพๅผบๅคง็่ทจๅนณๅฐไบคๅ็ผ่ฏใไผ็ง็็ฝ็ปๅฎ็ฐๅๅ ๅฏๅบไปฅๅๅ็็ๆไปถๅตๅฅๅ่ฝ๏ผๅ่ฎฉๅถ้ขๅๆถๆ่ฝฏไปถๅผๅ่็้็๏ผๅจ่ฟๅปๅ ๅนดไธญ๏ผๅจๅธ้ขไธๅ็ฐ็็จ Go ็ผๅ็ๆฐๆถๆ่ฝฏไปถๅ ไนๅขๅ ไบ 2000%ใ่ฟไบๆถๆ่ฝฏไปถไธญๆ่ฎธๅคๆฏ้ๅฏน Linux ๅ็ฉ่็ฝ่ฎพๅค็ๅตๅฐธ็ฝ็ป๏ผไปฅๅฎ่ฃๅ ๅฏ็ฟๆบๆๅฐๅๆๆ็ๆบๅจๆณจๅๅฐ DDoS ๅตๅฐธ็ฝ็ปไธญใๆญคๅค๏ผ็จ Go ็ผๅ็ๅ็ดข่ฝฏไปถไผผไนไนๅๅพๆดๅ ๆฎ้ใไธไบ็จ Go ็ผๅ็่ๅๅ็ดข่ฝฏไปถๆฏ NefilimใEKANS ๅ RobbinHood๏ผ่ฟไบๅ็ดข่ฝฏไปถ็จไบๆ่ฐ็ๅคงๅ็็ฉๆปๅปใ


## โก Installation
- https://www.rust-lang.org/learn/get-started
- The Rust Programming Language https://doc.rust-lang.org/book/
- The Rust Programming Language [CN] https://kaisery.github.io/trpl-zh-cn/ch01-01-installation.html
- Rust Playground https://play.rust-lang.org/
- https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2019
- https://www.forrestthewoods.com/blog/how-to-debug-rust-with-visual-studio-code/
- Bringing a great IDE experience to the Rust https://rust-analyzer.github.io
- Editor Features for VS Code https://rust-analyzer.github.io/manual.html#vs-code-2
- Rust Analyzer Releases https://github.com/rust-analyzer/rust-analyzer/releases

ๅจ Linux ๆ macOS ไธๅฎ่ฃ rustup๏ผๆๅผ็ป็ซฏๅนถ่พๅฅๅฆไธๅฝไปค๏ผ

    $ curl https://sh.rustup.rs -sSf | sh

ๆญคๅฝไปคไธ่ฝฝไธไธช่ๆฌๅนถๅผๅงๅฎ่ฃ rustup ๅทฅๅท๏ผๅฎๆฏ Rust ็ๆฌ็ฎก็ๅทฅๅท๏ผ่ฟไผๅฎ่ฃๆๆฐ็จณๅฎ็ Rust๏ผ่ฟ็จไธญๅฏ่ฝไผๆ็คบไฝ ่พๅฅๅฏ็ ใ

ๆญคๅฎ่ฃ่ๆฌ่ชๅจๅฐ Rust ๅ ๅฅ็ณป็ป PATH ็ฏๅขๅ้ไธญ๏ผๅจไธไธๆฌก็ปๅฝๆถ็ๆใๅฆๆไฝ ๅธๆ็ซๅปๅฐฑๅผๅงไฝฟ็จ Rust ่ไธ้ๅฏ็ป็ซฏ๏ผๅจ shell ไธญ่ฟ่กๅฆไธๅฝไปค๏ผๆๅจๅฐ Rust ๅ ๅฅ็ณป็ป PATH ๅ้ไธญ๏ผ

    $ source $HOME/.cargo/env

ๆ่๏ผๅฏไปฅๅจ `~/.bash_profile` ๆไปถไธญๅขๅ ๅฆไธ่ก๏ผ

    $ export PATH="$HOME/.cargo/bin:$PATH"

ๅฆๅค๏ผไฝ ้่ฆไธไธชๆ็ง็ฑปๅ็้พๆฅๅจ๏ผlinker๏ผใๅพๆๅฏ่ฝๅทฒ็ปๅฎ่ฃ๏ผไธ่ฟๅฝไฝ ๅฐ่ฏ็ผ่ฏ Rust ็จๅบๆถ๏ผๅดๆ้่ฏฏๆๅบๆ ๆณๆง่ก้พๆฅๅจ๏ผ่ฟๆๅณ็ไฝ ็็ณป็ปไธๆฒกๆๅฎ่ฃ้พๆฅๅจ๏ผไฝ ้่ฆ่ช่กๅฎ่ฃไธไธชใC ็ผ่ฏๅจ้ๅธธๅธฆๆๆญฃ็กฎ็้พๆฅๅจใ่ฏทๆฅ็ไฝ ไฝฟ็จๅนณๅฐ็ๆๆกฃ๏ผไบ่งฃๅฆไฝๅฎ่ฃ C ็ผ่ฏๅจใๅนถไธ๏ผไธไบๅธธ็จ็ Rust ๅไพ่ต C ไปฃ็ ๏ผไน้่ฆๅฎ่ฃ C ็ผ่ฏๅจใๅ ๆญค็ฐๅจๅฎ่ฃไธไธชๆฏๅผๅพ็ใ


Windows ็ณป็ปไฝฟ็จ rustup ๅทฅๅทๅฎ่ฃ๏ผๅๅพๅฎ็ฝๅนถๆ็ง่ฏดๆๅฎ่ฃ Rustใ

```sh
# https://www.rust-lang.org/install.html
# Windows, download RUSTUP-INIT.EXE (32-BIT or 64-BIT)
curl -O https://static.rust-lang.org/rustup/dist/i686-pc-windows-msvc/rustup-init.exe
curl -O https://static.rust-lang.org/rustup/dist/x86_64-pc-windows-msvc/rustup-init.exe
# Windows Subsystem for Linux
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

ๅจๅฎ่ฃ่ฟ็จ็ๆไธชๆญฅ้ชค๏ผไฝ ไผๆถๅฐไธไธชไฟกๆฏ่ฏดๆไธบไปไน้่ฆๅฎ่ฃ Visual Studio 2013 ๆๆดๆฐ็ๆฌ็ C++ build toolsใ

Visual Studio ๆ C++  build tools ๅฟๅฎๅฎ่ฃๅถไธ๏ผๅฆๅไธ่ฝ้พๆฅ Rust ็จๅบ๏ผๅปบ่ฎฎๅฎ่ฃ Visual Studio 2019 ็คพๅบ็ใๅๆถ๏ผWindows 10 ็ณป็ป้่ฆๅฎ่ฃ Windows 10 SDK (10.0.18362.0) ่งฃๅณ advapi32.lib ่ฟไธช้ฎ้ข็ใ


ๅฐไปฅไธ็ฎๅฝๅ ๅฅ PATH ็ฏๅขๅ้๏ผ

    %USERPROFILE%\.cargo\bin

    C:\Program Files (x86)\Microsoft Visual Studio 14.0\VC\bin\amd64

    C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\VC\Tools\MSVC\14.26.28801\bin\Hostx86\x86

rust1.16.0 ๅจ VS2017 ไธไธ่ฝๆญฃ็กฎ่ฏๅซ็ธๅณ็ LIB๏ผๆๅจๆทปๅ  LIB๏ผ

    C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\VC\Tools\MSVC\14.10.25017\lib\x64;C:\Program Files (x86)\Windows Kits\10\Lib\10.0.14393.0\um\x64;C:\Program Files (x86)\Windows Kits\10\Lib\10.0.14393.0\ucrt\x64

ไฝไธ้จๅไผไฝฟ็จ่ฝๅๆถ่ฟ่กไบ cmd.exe ๅ PowerShell ็ๅฝไปคใๅฆๆๅญๅจ็นๅฎๅทฎๅผ๏ผๆไปฌไผ่งฃ้ไฝฟ็จๅชไธไธชใ

้่ฟ็ๆฌ็ฎก็ๅทฅๅท rustup ๅฎ่ฃไบ Rust ไนๅ๏ผๅพๅฎนๆๆดๆฐๅฐๆๆฐ็ๆฌใๅจ shell ไธญ่ฟ่กๅฆไธๆดๆฐ่ๆฌ๏ผ

    $ rustup update

ไธบไบๅธ่ฝฝ Rust ๅ rustup๏ผๅจ shell ไธญ่ฟ่กๅฆไธๅธ่ฝฝ่ๆฌ:

    $ rustup self uninstall

่ฆๆฃๆฅๆฏๅฆๆญฃ็กฎๅฎ่ฃไบ Rust๏ผๆๅผ shell ๅนถ่ฟ่ก็ผ่ฏๅจ๏ผๅฆไธ่ก๏ผ

    $ rustc --version

ไฝ ๅบ่ฝ็ๅฐๅทฒๅๅธ็ๆๆฐ็จณๅฎ็็็ๆฌๅทใๆไบคๅๅธๅๆไบคๆฅๆ๏ผๆพ็คบไธบๅฆไธๆ ผๅผ๏ผ

    rustc x.y.z (abcabcabc yyyy-mm-dd)

่ฆๅฎ่ฃใๅธ่ฝฝๆ่ฎพ็ฝฎ้ป่ฎค Rust ็ๆฌ๏ผๅฆๆๆฌๅฐไธๅญๅจๅฐ่ชๅจไธ่ฝฝๅฎ่ฃ๏ผ

    rustup default stable
    rustup default nightly

    rustup toolchain list
    rustup toolchain uninstall nightly


ๅฆๆๅบ็ฐ่ฟไบๅๅฎน๏ผRust ๅฐฑๅฎ่ฃๆๅไบ๏ผๅฆๆๅนถๆฒกๆ็ๅฐ่ฟไบไฟกๆฏ๏ผๅนถไธไฝฟ็จ็ๆฏ Windows๏ผ่ฏทๆฃๆฅ Rust ๆฏๅฆไฝไบ %PATH% ็ณป็ปๅ้ไธญใๅฆๆไธๅๆญฃ็กฎไฝ Rust ไปไธ่ฝไฝฟ็จ๏ผๆ่ฎธๅคๅฐๆนๅฏไปฅๆฑๅฉใๆ็ฎๅ็ๆฏ ไฝไบ Rust ๅฎๆน Discord ไธ็ #beginners ้ข้ใๅจ่ฟ้ไฝ ๅฏไปฅๅๅถไป Rustacean๏ผRust ็จๆท็็งฐๅท๏ผๆ่ชๅฒๆๅณ๏ผ่ๅคฉๅนถๅฏปๆฑๅธฎๅฉใๅถๅฎ็ปๅ็่ตๆบๅๆฌ็จๆท่ฎบๅๅ Stack Overflowใ

|    Programs   |         Note         |
|---------------|----------------------|
| cargo-clippy  |                      |
| cargo-fmt     |                      |
| cargo-miri    |                      |
| cargo         | Project Manager      |
| clippy-driver |                      |
| ddoc          |                      |
| mdbook        |                      |
| rls           | Rust language server |
| rust-gdb      |                      |
| rust-lldb     |                      |
| rustc         | Rust Compiler        |
| rustdoc       | Rust Documentation   |
| rustfmt       | Source formatter     |
| rustup        | Toolchain installer  |
| wasm-pack     | WebAssebly packager  |

ๅฎ่ฃ็จๅบไน่ชๅธฆไธไปฝๆๆกฃ็ๆฌๅฐๆท่ด๏ผๅฏไปฅ็ฆป็บฟ้่ฏปใ่ฟ่ก `rustup doc` ๅจๆต่งๅจไธญๆฅ็ๆฌๅฐๆๆกฃใ

ไปปไฝๆถๅ๏ผๅฆๆไฝ ๆฟไธๅๆ ๅๅบไธญ็็ฑปๅๆๅฝๆฐ็็จ้ๅ็จๆณ๏ผ่ฏทๆฅ้ๅบ็จ็จๅบๆฅๅฃ๏ผapplication programming interface๏ผAPI๏ผๆๆกฃ๏ผ


ๆ่ฐขๅพฎ่ฝฏๅผๆบๅข้ๆๅ็่ดก็ฎ๏ผWindows WSL ๅฏไปฅ้ซๆไฝฟ็จ Linux ็ณป็ป๏ผๅผๅ่ๅฏไปฅไฝฟ็จ VSCode ่ธๅนณๅฐๅผๅๅทฅๅทใ

ๅๆถ๏ผServer Language Protocol ๆๅคงๅฐๆๅไบ็ผ่พๅจ็ๅผๅไฝ้ช๏ผRust ไน็ดง่ทๆญฅไผ๏ผๆไพไบ RLS - Rust Language Server๏ผๅฎไฝฟ็จ Cargo ๅ Rust compiler (rustc) ็ดๆฅ็ป็ผ่พๅจๆไพๅๆฐไฟกๆฏใ

ๅฆๅค๏ผๆดๅผบๅคง็ๆฏ Rust Analyzer๏ผ็ฎๅๆฏๆๅฅฝ็ๆฉๅฑ๏ผๅฎๅฐ็ผ่ฏๅจๅ็ซฏไธ Rust ่ฏญ่จๅ็ฆป๏ผไธ้่ฆ้่ฟ Rust compiler (rustc) ็ดๆฅ้ซๆๅฐไธบ็ผ่พๅจๆไพ้ๅ็่ฏญๆณๅๆไฟกๆฏใๆณจๆ๏ผๅฎไธๅฎๆน็ Rust extension ๆๅฒ็ช๏ผๅปบ่ฎฎ็ฆ็จใ

Rust Analyzer ๆไพไธฐๅฏ็ๅ่ฝ๏ผๆฏๅฆๅจ็ฎๅไปฃ็ ่พๅฅๆนๆณ๏ผๅฏไปฅ้่ฟๅ็ผ่งฆๅๅณ้ฎๅญ็่ชๅจๅฎๆ๏ผfoo().if ๅฅ็นๅ้ข็ๅณ้ฎๅญ็กฎๅฎไบๅฆไฝ่ชๅจๅฎๆ๏ผๅ่ๅฝขๅผๅฆไธ๏ผ

    expr.if โ if expr {} or if let โฆ {} for Option or Result
    expr.match โ match expr {}
    expr.while โ while expr {} or while let โฆ {} for Option or Result
    expr.ref โ &expr
    expr.refm โ &mut expr
    expr.let โ let $0 = expr;
    expr.letm โ let mut $0 = expr;
    expr.not โ !expr
    expr.dbg โ dbg!(expr)
    expr.dbgr โ dbg!(&expr)
    expr.call โ (expr)

    pd โ eprintln!(" = {:?}", );
    ppd โ eprintln!(" = {:#?}", );


ๆ นๆฎๅทฅไฝ็ณป็ปๅฎ่ฃ่ฐ่ฏๅจๆฉๅฑ๏ผ

- C/C++ (Windows)
- CodeLLDB (OS X / Linux)

Rust ็ฎๅ่ฟๆไพไบ rust-lldb ๅ rust-gdb ไธคไธช่ฐ่ฏๅทฅๅท๏ผๅฏไปฅไธ่ฝๅจ Windows ๅๆฏไฝฟ็จใ

ๆๅผ VScode ้็ฝฎ๏ผๆ็ดข Breakpoints๏ผๅพ้ไปฅไธๆก็ฎๅณๅฏไปฅๅจไปฃ็ ไธญไธๆญ็น๏ผ

    Debug: Allow Breakpoints Eventywhere

้็ฝฎ VSCode launch.json ็จไบ่ฐ่ฏ๏ผๅฟซๆท้ฎ F5 ่ฟ่ก๏ผ

```json
{
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
          "name": "Cargo Run!",
          "type": "cppvsdbg",
          "request": "launch",
          "stopAtEntry": true,
          "preLaunchTask": "cargo build",
          "program": "target\\debug\\output.exe",
          "args": ["run"],
          "cwd": "${workspaceFolder}",
          "environment": [],
          "console": "internalConsole"
        },
        {
            "name": "(OSX) Launch",
            "type": "lldb",
            "request": "launch",
            "program": "${workspaceRoot}/target/debug/foo",
            "args": [],
            "cwd": "${workspaceRoot}",
        }
    ]
}
```

้็ฝฎ VSCode tasks.json๏ผๅฟซๆท้ฎ Ctrl-Shift-B ๆง่ก๏ผ่ชๅจ่ฟ่กๆๅฎ isDefault ๅฝไปค้็ฝฎ๏ผ

```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "type": "cargo",
            "subcommand": "build",
            "problemMatcher": [
                "$rustc"
            ],
            "group": "build",
            "label": "cargo build"
        },
        {
            "type": "cargo",
            "subcommand": "run",
            "problemMatcher": [
                "$rustc"
            ],
            "label": "cargo run",
            "group": {
                "kind": "build",
                "isDefault": true
            }
        }
    ]
}
```

ๅฏไปฅไฝฟ็จ Sublime Text ๅนถๅฎ่ฃ LSP ๆไปถใๅฎ่ฃๆไปถๅ๏ผไฝฟ็จๅฝไปค้ขๆฟไธญ็ LSP ๅฝไปคๆฅๆฃๆต Rust ่ฏญ่จ
ๆๅกๆฏๅฆๆญฃๅธธใๅๅฎ่ฃ Sublime LSP ๆไปถ๏ผ็ถๅๆ นๆฎๆๆกฃๅฎ่ฃๅถๅฎ่ฏญ่จๆไปถๆฏๆ๏ผๆง่ก Troubleshoot Server
ๆฃๆฅ้็ฝฎใๅฝไปคไฝ็ฝฎใ้กน็ฎไฟกๆฏ็ญ๏ผๅๆถไนไผๆง่กๆไปถๅนถ่งฆๅๅถๅฎ่ฃๅฟ่ฆ็ๅค้จๆฏๆๆไปถ๏ผ

- https://github.com/rust-lang/rust-enhanced
- https://packagecontrol.io/packages/LSP
- https://lsp.sublimetext.io/language_servers

## โก Cargo Tool
- [The Cargo Book](https://doc.rust-lang.org/cargo/)
- [Cargo cache](https://crates.io/crates/cargo-cache)
- [More about cargo](https://doc.rust-lang.org/book/ch14-00-more-about-cargo.html)
- [ๆๅฎไพ่ตๅ็ๆฌ](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html)
- [The Manifest Format](https://doc.rust-lang.org/cargo/reference/manifest.html)
- [Workspaces](https://doc.rust-lang.org/cargo/reference/workspaces.html)
- [Environment Variables](https://doc.rust-lang.org/cargo/reference/environment-variables.html)
- [Build scripts](https://doc.rust-lang.org/cargo/reference/build-scripts.html)
- [VSCode launch.json Reference](https://code.visualstudio.com/docs/cpp/launch-json-reference)
- [rustc Command-line arguments](https://doc.rust-lang.org/rustc/command-line-arguments.html)
- [mdBook - Creates a book from markdown files](https://crates.io/crates/mdbook)

Cargo ๆฏ Rust ็ๆๅปบ็ณป็ปๅๅ็ฎก็ๅจ๏ผ่ฝๅค่ชๅจๅค็ไพ่ต๏ผๆนไพฟ้กน็ฎ็้ๆฐๆๅปบใ

Cargo ๅฝไปคๅฟซ้ๅ่๏ผ

    | Build Commands |    Manifest Commands    | Package Commands | Publishing Commands |
    |----------------|-------------------------|------------------|---------------------|
    | cargo bench    | cargo generate-lockfile | cargo init       | cargo login         |
    | cargo build    | cargo locate-project    | cargo install    | cargo owner         |
    | cargo check    | cargo metadata          | cargo new        | cargo package       |
    | cargo clean    | cargo pkgid             | cargo search     | cargo publish       |
    | cargo doc      | cargo tree              | cargo uninstall  | cargo yank          |
    | cargo fetch    | cargo update            |                  |                     |
    | cargo fix      | cargo vendor            |                  |                     |
    | cargo run      | cargo verify-project    |                  |                     |
    | cargo rustc    |                         |                  |                     |
    | cargo rustdoc  |                         |                  |                     |
    | cargo test     |                         |                  |                     |

ๅฆๆ้่ฆๅจๆฌๅฐๆฅ้ๆๆกฃ๏ผๅฏไปฅๆง่กไปฅไธๅฝไปค๏ผ

    rustup doc

ๅฎ่ฃ Rust ๅ๏ผๅฎ่ฃ็ฎๅฝไธ็ๆๆๅทฅๅท็จๅบ็ๅ่ฝ้ฝๅฏไปฅ้่ฟ Cargo ๅฝไปคๆฅไฝฟ็จ๏ผไนๅฏไปฅๅฎ่ฃๆฐ็ๅทฅๅท๏ผๅฆ
cargo-cache ๅฎๅฏไปฅๅธฎๅฉ็ฎก็ $CARGO_HOME ็ฎๅฝ็ผๅญใ่ฟๆ racer ๅทฅๅท๏ผCode completion for Rust๏ผ

    cargo install cargo-cache
    cargo install racer

Cargo ๆฏๅฅฝ็จ็ Rust ้กน็ฎ็ฎก็ๅทฅๅท๏ผๅฎๅฏไปฅๅค็ๅพๅคไปปๅก๏ผๆฏๅฆๆๅปบไปฃ็ ใไธ่ฝฝไพ่ตๅบๅนถ็ผ่ฏ่ฟไบๅบใไปฃ็ 
ๆ้่ฆ็ๅบๅซๅไพ่ต dependencies๏ผCargo ๅฏไปฅๅพๅฅฝๅฐ็ฎก็ๅฎไปฌใไพๅฆ๏ผๆทปๅ ไพ่ตๆจกๅ๏ผ

    cargo add --features console,CanvasRenderingContext2d,Document,Element,HtmlCanvasElement,Window web-sys

Cargo ๆฏๆ็็นๆง๏ผ

- conditional compilation options (usable through cfg attributes);
- optional dependencies, which enhance a package, but are not required; and
- clusters of optional dependencies, such as postgres-all, that would include 
  the postgres package, the postgres-macros package, and possibly other packages 
  (such as development-time mocking libraries, debugging tools, etc.).

Cargo ๆไพๅ็ง็ผ่ฏ้็ฝฎ dev, release, test, bench ๅๅซไธๅ็ไผๅใ่ฐ่ฏ็ฌฆๅท่ฎพ็ฝฎ๏ผ็จไบไธๅ็ฎ็ใ

ไธไบ็จๅบๆๅๅฏ่ฝ่ฆไฝฟ็จ้ Rust ไปฃ็ ๏ผๅฆ C ่ฏญ่จๅบ๏ผ้ฃไนๅจ็ผ่ฏๆถไผ้่ฆ็ผ่ฏ็ธๅบ็ๆบไปฃ็ ๏ผCargo ไธๆ็ฎ
ๆฟๆข้ฃไบๅทฒ็ปไผๅๅฅฝ็็ผ่ฏๅทฅๅท๏ผ่ๆฏๆไพๆๅปบ่ๆฌ build.rs ๆฅ่พๅฉๆง่ก็ผ่ฏ๏ผๅช่ฆๅฐๅฎๆพๅฐ้กน็ฎ็ฎๅฝไธ๏ผ
ๅจๆๅปบๆถๅณๅฏไปฅๆง่ก๏ผ

    // Example custom build.rs script.
    fn main() {
        // Tell Cargo that if the given file changes, to rerun this build script.
        println!("cargo:rerun-if-changed=src/hello.c");
        // Use the `cc` crate to build a C file and statically link it.
        cc::Build::new()
            .file("src/hello.c")
            .compile("hello");
    }

ไฝฟ็จๆๅปบ่ๆฌ็็จๅฎ็ฐ็ๅ่ฝๅๆฌ๏ผ

- Building a bundled C library.
- Finding a C library on the host system.
- Generating a Rust module from a specification.
- Performing any platform-specific configuration needed for the crate.

Cargo ็จ Workspaces ็ๆฆๅฟต็ฎก็็้กน็ฎ็ Packages๏ผๅจ้กน็ฎ้็ฝฎๆไปถ Cargo.toml ๆๅจ็ฎๅฝๅฎไนไบ
Root package๏ผๅณ้็ฝฎๆไปถไธญ็ `[package]` ๅบๅฎไน็้กถ็บงๅใ

ๅจ้็ฝฎๆไปถไธญ๏ผ่ฟๅฏไปฅๆทปๅ  `[workspace]` ๅฎไนๆดๅค็ๅ๏ผๅฎไปฌ้ฝๅฏไปฅ็ไฝ็ฌ็ซ็ๅทฅ็จ๏ผ

    [workspace]
    members = ["member1", "path/to/member2", "crates/*"]
    exclude = ["crates/foo", "path/to/other"]
    default-members = ["path/to/member2", "path/to/member3/foo"]

ๆ็ฎๅ็ Rust ็จๅบ๏ผๆฒกๆไปปไฝไพ่ตใๆไปฅๅฆๆไฝฟ็จ Cargo ๆฅๆๅปบ โHello, world!โ ้กน็ฎ๏ผๅฐๅชไผ็จๅฐ
Cargo ๆๅปบไปฃ็ ็้ฃ้จๅๅ่ฝใๆดๅคๆ็ Rust ็จๅบ๏ผ้่ฆๆทปๅ ไพ่ต้กน๏ผไฝฟ็จ Cargo ๅๆทปๅ ไพ่ต้กนๅฐๆดๅฎนๆใ

็ฑไบ็ปๅคงๅคๆฐ Rust ้กน็ฎไฝฟ็จ Cargo๏ผๆฅไธๆฅ็ๆไฝๅ่ฎพไฝ ไนไฝฟ็จ Cargoใๅฎๆนๅฎ่ฃๅ่ชๅธฆไบ Cargo๏ผๅฆๆ
้่ฟๅถไปๆนๅผๅฎ่ฃ็่ฏ๏ผๅฏไปฅๅจ็ป็ซฏ่พๅฅๅฆไธๅฝไปคๆฃๆฅๆฏๅฆๅฎ่ฃไบ Cargo๏ผ

    $ cargo --version

ๅฆๆไฝ ็ๅฐไบ็ๆฌๅท๏ผ่ฏดๆๅทฒๅฎ่ฃ๏ผๅฆๅ๏ผๅบ่ฏฅๆฅ็็ธๅบๅฎ่ฃๆๆกฃไปฅ็กฎๅฎๅฆไฝๅ็ฌๅฎ่ฃ Cargoใ

้่ฟไปฅไธๅฝไปคๅฏไปฅๅๅปบๅฏๆง่ก็จๅบใๅบ้กน็ฎ๏ผ

    cargo new hello_world --bin
    cargo new hello_world --lib

ไฝฟ็จ Cargo ๅๅปบๆฐ้กน็ฎ๏ผๅฏๅจไปปไฝๆไฝ็ณป็ปไธ่ฟ่กไปฅไธๅฝไปคๆฐๅปบๅไธบ hello_cargo ็้กน็ฎ๏ผ

    $ cargo new hello_cargo
    $ cd hello_cargo
    $ tree .
    .
    โโโ Cargo.toml
    โโโ src
        โโโ main.rs

    1 directory, 2 files

่ฟๅฅ hello_cargo ็ฎๅฝๅนถๅๅบๆไปถ๏ผ็ฎๅฝ็ปๆไธญๅๅซ Cargo ็ๆ็ไธคไธชๆไปถๅไธไธช็ฎๅฝ๏ผ

- ไธไธช Cargo.toml ๆไปถ๏ผ
- ไธไธช src ็ฎๅฝ๏ผไปฅๅไฝไบ src ็ฎๅฝไธญ็ main.rs ๆไปถใ
- ๆ น็ฎๅฝไนๅๅงๅไบไธไธช git ไปๅบ๏ผไปฅๅไธไธช .gitignore ๆไปถใ

ๆณจๆ๏ผGit ๆฏไธไธชๅธธ็จ็็ๆฌๆงๅถ็ณป็ป version control system (VCS)ใๆง่ก cargo new ๅฝไปคๅฏไปฅ
้่ฟ --vcs ๅๆฐๅๆขๅฐๅถๅฎ็ๆฌๆงๅถ็ณป็ป๏ผๆ่ไธไฝฟ็จ VCSใ่ฟ่ก cargo new --help ๅ็ๅฏ็จ็้้กนใ

้กน็ฎ้็ฝฎๆไปถ Cargo.toml

    [package]
    name = "hello_cargo"
    version = "0.1.0"
    authors = ["Your Name <you@example.com>"]
    edition = "2018"

    [dependencies]

่ฟไธชๆไปถไฝฟ็จ TOML (Tom's Obvious, Minimal Language) ๆ ผๅผ๏ผ่ฟๆฏ Cargo ้็ฝฎๆไปถ็ๆ ผๅผใ

็ฌฌไธ่ก๏ผ[package]๏ผๆฏไธไธช็ๆฎต๏ผsection๏ผๆ ้ข๏ผ่กจๆไธ้ข็่ฏญๅฅ็จๆฅ้็ฝฎไธไธชๅใ้็ๆไปฌๅจ่ฟไธชๆไปถ
ๅขๅ ๆดๅค็ไฟกๆฏ๏ผ่ฟๅฐๅขๅ ๅถไป็ๆฎต๏ผsection๏ผใ

ๆฅไธๆฅ็ๅ่ก่ฎพ็ฝฎไบ Cargo ็ผ่ฏ็จๅบๆ้็้็ฝฎ๏ผ้กน็ฎ็ๅ็งฐใ็ๆฌใไฝ่ไปฅๅ่ฆไฝฟ็จ็ Rust ็ๆฌใCargo 
ไป็ฏๅขๅ้ไธญ่ทๅไฝ ็ๅๅญๅ email ไฟกๆฏ๏ผๆไปฅๅฆๆ่ฟไบไฟกๆฏไธๆญฃ็กฎ๏ผ่ฏทไฟฎๆนๅนถไฟๅญๆญคๆไปถใ

ๆๅไธ่ก [dependencies] ๆฏ็ฝๅ้กน็ฎไพ่ต็็ๆฎตๅผๅงใๅจ Rust ไธญ๏ผไปฃ็ ๅ่ขซ็งฐไธบ cratesใ่ฟไธช้กน็ฎ
ๅนถไธ้่ฆๅถไป็ crate๏ผไธ่ฟๅจๅ้ขไผ็จๅฐไพ่ต๏ผ้ฃๆถไผ็จๅพไธ่ฟไธช็ๆฎตใ

ๆ นๆฎไพ่ตๆๅญๅจ็ไฝ็ฝฎ๏ผๅฏไปฅ็จไธๅ็ๆนๅผๆๅฎ๏ผๅ่ [Cargo Reference - Specifying Dependencies](cargo/src/reference/specifying-dependencies.md)๏ผ

    [dependencies]
    hello_utils = { path = "hello_utils" }
    hello_utils = { path = "hello_utils", version = "0.1.0" }
    rand = { git = "https://github.com/rust-lang-nursery/rand" }
    rand = { git = "https://github.com/rust-lang-nursery/rand", branch = "next" }

่ฟๅฏไปฅๆ นๆฎๅนณๅฐ่ฎพ็ฝฎไพ่ต๏ผ

    [target.'cfg(windows)'.dependencies]
    winhttp = "0.4.0"

    [target.'cfg(unix)'.dependencies]
    openssl = "1.0.1"

    [target.'cfg(target_arch = "x86")'.dependencies]
    native = { path = "native/i686" }

    [target.'cfg(target_arch = "x86_64")'.dependencies]
    native = { path = "native/x86_64" }

็ฐๅจๆๅผ src/main.rs ็็๏ผ

ๆไปถๅ: src/main.rs

    fn main() {
        println!("Hello, world!");
    }

Cargo ไธบไฝ ็ๆไบไธไธช โHello, world!โ ็จๅบ๏ผๆญฃๅฆๆไปฌไนๅ็ผๅ็็คบไพ๏ผ็ฎๅไธบๆญข๏ผไนๅ้กน็ฎไธ Cargo
็ๆ้กน็ฎ็ๅบๅซๆฏ Cargo ๅฐไปฃ็ ๆพๅจ src ็ฎๅฝ๏ผๅๆถ้กน็ฎๆ น็ฎๅฝๅๅซไธไธช Cargo.toml ้็ฝฎๆไปถใ

Cargo ๆๆๆบๆไปถๅญๆพๅจ src ็ฎๅฝไธญใ้กน็ฎๆ น็ฎๅฝๅชๅญๆพ READMEใlicense ไฟกๆฏใ้็ฝฎๆไปถๅๅถไป่ทไปฃ็ 
ๆ ๅณ็ๆไปถใไฝฟ็จ Cargo ๅธฎๅฉไฝ ไฟๆ้กน็ฎๅนฒๅๆดๆด๏ผไธๅไบไบๆๆกใ

ไฝฟ็จ Cargo ๆๅปบ้กน็ฎ๏ผๅฏไปฅ้ๅ env ๅฎๆฅ่ฏปๅ Cargo ๅทฅๅทๆไพ็็ฏๅขๅ้๏ผไพ็ผ่ฏๆไฝฟ็จ๏ผ

```rust,ignore
let version = env!("CARGO_PKG_VERSION");
```

* `CARGO` โ Path to the `cargo` binary performing the build.
* `CARGO_MANIFEST_DIR` โ The directory containing the manifest of your package.
* `CARGO_PKG_VERSION` โ The full version of your package.

* `CARGO_PKG_AUTHORS` โ Colon separated list of authors from the manifest of your package.
* `CARGO_PKG_NAME` โ The name of your package.
* `CARGO_PKG_DESCRIPTION` โ The description from the manifest of your package.
* `CARGO_PKG_HOMEPAGE` โ The home page from the manifest of your package.
* `CARGO_PKG_REPOSITORY` โ The repository from the manifest of your package.

* `CARGO_CRATE_NAME` โ The name of the crate that is currently being compiled.
* `CARGO_BIN_NAME` โ The name of the binary that is currently being compiled.
* `OUT_DIR` โ If the package has a build script, this is set to the folder where the build script should place its output.


ๅฏนไบๅทฒๆ้กน็ฎ๏ผๅฏไปฅๅฐๅถ่ฝฌๅไธบไธไธช Cargo ้กน็ฎใๅช้ๅฐไปฃ็ ๆพๅฅ src ็ฎๅฝ๏ผๅนถๅๅปบ Cargo.toml ๆไปถใ
้่ฟ Cargo ๆๅปบๅ่ฟ่ก้กน็ฎ็จๅบๅพๆนไพฟ๏ผๅจ้กน็ฎ็ฎๅฝไธ๏ผ่พๅฅไธ้ข็ๅฝไปคๆฅๆๅปบ้กน็ฎ๏ผ

    $ cargo build
    $ cargo build --release

ๅฝไปคไผๅๅปบไธไธชๅฏๆง่กๆไปถ๏ผๅจ Windows ไธๆฏ target\debug\hello_cargo.exe๏ผไธๆฏๆพๅจ็ฎๅ็ฎๅฝไธใ
ๅฏไปฅ้่ฟ่ฟไธชๅฝไปค่ฟ่กๅฏๆง่กๆไปถ๏ผ

    $ ./target/debug/hello_cargo 
    Hello, world!
    
ๅฆๆไธๅ้กบๅฉ๏ผ็ป็ซฏไธๅบ่ฏฅไผๆๅฐๅบ Hello, world!ใ้ฆๆฌก่ฟ่ก cargo build ๆถ๏ผไนไผไฝฟ Cargo ๅจ้กน็ฎ
ๆ น็ฎๅฝๅๅปบไธไธชๆฐๆไปถ๏ผCargo.lockใ่ฟไธชๆไปถ่ฎฐๅฝ้กน็ฎไพ่ต็ๅฎ้็ๆฌ๏ผ้กน็ฎๆฒกๆไพ่ต๏ผๅถๅๅฎนๆฏ่พๅฐใๆฐธ่ฟไน
ไธ้่ฆ็ขฐ่ฟไธชๆไปถ๏ผ่ฎฉ Cargo ๅค็ๅฎๅฐฑ่กไบใ

ๅๅไฝฟ็จ cargo build ๆๅปบไบ้กน็ฎ๏ผๅนถ่ฟ่กไบ็จๅบ๏ผไฝฟ็จ cargo run ๅฝไปคๅฏไปฅๅๆถ็ผ่ฏๅนถ่ฟ่ก๏ผ

    $ cargo run
        Finished dev [unoptimized + debuginfo] target(s) in 0.0 secs
         Running `target/debug/hello_cargo`
    Hello, world!

ๆณจๆ่ฟไธๆฌกๅนถๆฒกๆๅบ็ฐ่กจๆ Cargo ๆญฃๅจ็ผ่ฏ hello_cargo ็่พๅบใCargo ๅ็ฐๆไปถๅนถๆฒกๆ่ขซๆนๅ๏ผๅฐฑ็ดๆฅ
่ฟ่กไบไบ่ฟๅถๆไปถใๅฆๆไฟฎๆนไบๆบๆไปถ็่ฏ๏ผCargo ไผๅจ่ฟ่กไนๅ้ๆฐๆๅปบ้กน็ฎ๏ผๅนถไผๅบ็ฐๅ่ฟๆ ท็่พๅบ๏ผ

    $ cargo run
       Compiling hello_cargo v0.1.0 (file:///projects/hello_cargo)
        Finished dev [unoptimized + debuginfo] target(s) in 0.33 secs
         Running `target/debug/hello_cargo`
    Hello, world!

่ฟๆไพไบไธไธชๅซ cargo check ๅฝไปค๏ผ็จๆฅๅฟซ้ๆฃๆฅไปฃ็ ็กฎไฟๅถๅฏไปฅ็ผ่ฏ๏ผไฝๅนถไธไบง็ๅฏๆง่กๆไปถ๏ผ

    $ cargo check
       Checking hello_cargo v0.1.0 (file:///projects/hello_cargo)
        Finished dev [unoptimized + debuginfo] target(s) in 0.32 secs

้ๅธธ cargo check ่ฆๆฏ cargo build ๅฟซๅพๅค๏ผๅฎ็็ฅไบ็ๆๅฏๆง่กๆไปถ็ๆญฅ้ชค๏ผๅชๆไพไปฃ็ ๆฃๆฅๅ่ฝ๏ผ
็จๅฎๆ็ปญๆฃๆฅ็กฎไฟไปฃ็ ๅฏไปฅ้่ฟ็ผ่ฏ๏ผๅฏไปฅๅ ้ๅผๅ๏ผๅช้่ฆๅฏๆง่กๆไปถๆถๆ่ฟ่ก cargo buildใ

ๅๅคๅฅฝๅๅธๆถ๏ผไฝฟ็จ `cargo build --release` ๆฅไผๅ็ผ่ฏ้กน็ฎใ่ฟไผๅจ target/release ่ไธๆฏๅจ
target/debug ็ฎๅฝไธ็ๆๅฏๆง่กๆไปถใ่ฟไบไผๅๅฏไปฅ่ฎฉ Rust ไปฃ็ ่ฟ่ก็ๆดๅฟซ๏ผไธ่ฟๅฏ็จ่ฟไบไผๅไน้่ฆ
ๆถ่ๆด้ฟ็็ผ่ฏๆถ้ดใ

่ฟไนๅฐฑๆฏไธบไปไนไผๆไธค็งไธๅ็้็ฝฎ๏ผไธ็งๆฏไธบไบๅผๅ๏ผไฝ ้่ฆ็ปๅธธๅฟซ้้ๆฐๆๅปบ๏ผๅฆไธ็งๆฏไธบ็จๆทๆๅปบๆ็ป็จๅบ๏ผ
ๅฎไปฌไธไผ็ปๅธธ้ๆฐๆๅปบ๏ผๅนถไธๅธๆ็จๅบ่ฟ่กๅพ่ถๅฟซ่ถๅฅฝใ

ๅฆๆไฝ ๅจๆต่ฏไปฃ็ ็่ฟ่กๆถ้ด๏ผ่ฏท็กฎไฟไฝฟ็จ target/release ไธ็ๅฏๆง่กๆไปถ่ฟ่กๆต่ฏใ


ๅฏนไบ็ฎๅ้กน็ฎ๏ผ Cargo ๅนถไธๆฏ rustc ๆไพไบๆดๅค็ไผๅฟ๏ผไธ่ฟ้็ๅผๅ็ๆทฑๅฅ๏ผ็ปๅฐ่ฏๆๅถไปทๅผใๅฏนไบๆฅๆ
ๅคไธช crate ็ๅคๆ้กน็ฎ๏ผไบค็ป Cargo ๆฅๅ่ฐๆๅปบๅฐ็ฎๅ็ๅคใ

ๅณไพฟ hello_cargo ้กน็ฎๅๅ็ฎๅ๏ผๅฎ็ฐๅจไนไฝฟ็จไบๅพๅคๅจไฝ ไนๅ็ Rust ็ๆถฏๅฐไผ็จๅฐ็ๅฎ็จๅทฅๅทใๅถๅฎ๏ผ
่ฆๅจไปปไฝๅทฒๅญๅจ็้กน็ฎไธๅทฅไฝๆถ๏ผๅฏไปฅไฝฟ็จๅฆไธๅฝไปค้่ฟ Git ๆฃๅบไปฃ็ ๏ผ็งปๅจๅฐ่ฏฅ้กน็ฎ็ฎๅฝๅนถๆๅปบ๏ผ

    $ git clone someurl.com/someproject
    $ cd someproject
    $ cargo build

Cargo ้ป่ฎค crates.io ้ๅไฝฟ็จๅฝๅคๆบๆๅกๅจ๏ผไธ่ฝฝ้ๅบฆๆข๏ผๅฏไปฅๆขๆบๅฐๅฝๅ้ๅๆๅกๅจใไฟฎๆนๅฝๅ็จๆท็ฎๅฝ
ไธ็้็ฝฎๆไปถ๏ผๅจ้็ฝฎๆไปถ .cargo/config ๆทปๅ ๅคไธช้ๅๆๅกๅจ๏ผๅนถไฝฟ็จ replace-with ๆไปค่ฟ่กๅๆข๏ผ

```sh
    [source.crates-io]
    registry = "https://github.com/rust-lang/crates.io-index"
    replace-with = 'ustc'

    [source.ustc]
    registry = "https://mirrors.ustc.edu.cn/crates.io-index"
    # or use git protocol
    #registry = "git://mirrors.ustc.edu.cn/crates.io-index"

    [source.tuna]
    registry = "https://mirrors.tuna.tsinghua.edu.cn/git/crates.io-index.git"

    [source.rustcc]
    registry = "git://crates.rustcc.cn/crates.io-index"

    [source.rustcc0]
    registry = "https://code.aliyun.com/rustcc/crates.io-index.git"

    [source.sjtu]
    registry = "https://mirrors.sjtug.sjtu.edu.cn/git/crates.io-index"

    [source.rsproxy]
    registry = "https://rsproxy.cn/crates.io-index"
    [source.rsproxy-sparse]
    registry = "sparse+https://rsproxy.cn/index/"
    [registries.rsproxy]
    index = "https://rsproxy.cn/crates.io-index"


    [net]
    git-fetch-with-cli = true
```

ๆขๆบๅ ้ๆดๆฐ Rustup ๅทฅๅท้พไธ่ฝฝ๏ผ้ป่ฎคๆบๆๅไธคไธชไธญๅฝๅคง้ๅขๅค็ฝ็ซ๏ผๅ ๆญคๅจไธญๅฝๅคง้่ฎฟ้ฎไผๅพๆข๏ผ

```sh
# Default settings
RUSTUP_DIST_SERVER=https://static.rust-lang.org
RUSTUP_UPDATE_ROOT=https://static.rust-lang.org/rustup๏ผ๏ผ

# ไธญๅฝ็งๅญฆๆๆฏๅคงๅญฆ
RUSTUP_DIST_SERVER=https://mirrors.ustc.edu.cn/rust-static
RUSTUP_UPDATE_ROOT=https://mirrors.ustc.edu.cn/rust-static/rustup

# ๆธๅๅคงๅญฆ
RUSTUP_DIST_SERVER=https://mirrors.tuna.tsinghua.edu.cn/rustup

# ไธๆตทไบค้ๅคงๅญฆ
RUSTUP_DIST_SERVER=https://mirrors.sjtug.sjtu.edu.cn/rust-static/
```

RsProxy.cn Rustup ้ๅ็จๆณ๏ผ

```sh
# ~/.zshrc or ~/.bashrc:
export RUSTUP_DIST_SERVER="https://rsproxy.cn"
export RUSTUP_UPDATE_ROOT="https://rsproxy.cn/rustup"
```


## โก Packages Crates Modules
- https://doc.rust-lang.org/book/ch14-00-more-about-cargo.html
- https://doc.rust-lang.org/book/ch14-03-cargo-workspaces.html
- https://doc.rust-lang.org/book/ch07-00-managing-growing-projects-with-packages-crates-and-modules.html
- https://doc.rust-lang.org/rust-by-example/mod.html
- https://doc.rust-lang.org/rust-by-example/crates.html
- https://users.rust-lang.org/t/what-is-the-difference-between-dylib-and-cdylib/28847
- [Publishing a Crate to Crates.io](https://doc.rust-lang.org/book/ch14-02-publishing-to-crates-io.html)
- [Travis CI Rust documentation](https://docs.travis-ci.com/user/languages/rust/)
- [Paths in Expressions](https://doc.rust-lang.org/stable/reference/paths.html#paths-in-expressions)
- [Linkage](https://doc.rust-lang.org/reference/linkage.html)
- [Modules](https://doc.rust-lang.org/stable/reference/items/modules.html)
- [rustc Command-line arguments](https://doc.rust-lang.org/rustc/command-line-arguments.html)
- [The Manifest Format](https://doc.rust-lang.org/cargo/reference/manifest.html)
- [Extern crate declarations](https://doc.rust-lang.org/reference/items/extern-crates.html)
- [The Rust Edition Guide - Path and module system changes](edition-guide/src/rust-2018/path-changes.md)

ๅฝๅทฅ็จๅข้ฟๅๅคง๏ผๅฏไปฅๅๆๆๅฐ็ๆจกๅ่ฟ่ก็ฎก็๏ผRust ๆไพไบๅฎๅ็ Cargo Workspaces ๅทฅ็จ็ฎก็ๅ่ฝ๏ผ
ๆต่ฏใๆ็ปญ้ๆๅ่ฝ๏ผ้ๅ Crates.io ๆ็ฎกๅนณๅฐๅฏไปฅๆนไพฟๅฐไธไปไบบๅไบซ่ชๅทฑ็ๆๆ๏ผๆๅฑไบซไปไบบ็ๆๆใ

Rust ไปฃ็ ็ป็ปๆนๅผ๏ผไปๅคงๅฐๅฐ็ๅ็งไปฃ็ ็ป็ปๆนๅผๅฆไธ๏ผ

- `Packages`: A Cargo feature that lets you build, test, and share crates
- `Crates`: A tree of modules that produces a `library` or `executable`
- `Modules` and `use`: Let you control the organization, scope, and privacy of paths
- `Paths`: A way of naming an item, such as a struct, function, or module

Cargo new ๅฝไปคๅฐฑไธบๅทฅ็จ็ๆไธไธช้กถๅฑๅ๏ผๅจ้็ฝฎๆไปถ Cargo.toml `[package]` ้จๅๅฎไนใๅทฅ็จๅฏไปฅ
ๅๆถๆฅๆไปฅไธไธคไธชไธป่ฆ็ไปฃ็ ๆไปถ๏ผcrate root files๏ผๅณไปฃ่กจไธคไธช crate๏ผไธไธชๅบๅไธไธชๅฏๆง่ก็จๅบ๏ผ

- src/main.rs  --   cargo new hello_world --bin
- src/lib.rs   --   cargo new hello_world --lib

ไปฅไธๆฏ Rust ไธญ็ไธค็งๅบๆฌ็จๅบ๏ผไบ่ฟๅถๅฏๆง่กๆไปถ bin ๅ็ฑปๅบ lib๏ผ้ป่ฎคไธบ rlib ๆฉๅฑๅ่กจ็คบใ

Cargo ็จ Workspaces ็ๆฆๅฟต็ฎก็็้กน็ฎ็ Packages๏ผๅจ้กน็ฎ้็ฝฎๆไปถ Cargo.toml ๆๅจ็ฎๅฝๅฎไนไบ
Root package๏ผๅณ้็ฝฎๆไปถไธญ็ `[package]` ๅบๅฎไน็้กถ็บงๅใ

ๅจ้็ฝฎๆไปถไธญ๏ผ่ฟๅฏไปฅๆทปๅ  `[workspace]` ๅฎไนๆดๅค็ๅ๏ผๅฎไปฌ้ฝๅฏไปฅ็ไฝ็ฌ็ซ็ๅทฅ็จ๏ผ

    [workspace]
    members = ["member1", "path/to/member2", "crates/*"]
    exclude = ["crates/foo", "path/to/other"]
    default-members = ["path/to/member2", "path/to/member3/foo"]


ๅจ Cargo.toml ไธญๅฏไปฅ้็ฝฎๅฏๆง่ก็จๅบๅๅบ๏ผ

    [lib]
    name = "foobar"
    crate-type = ["rlib"]

    [[bin]]
    name = "demo"
    path = "src/bin/demo.rs"

    [[example]]
    name = "demo"
    path = "example/demo.rs"

Rust ็ผ่ฏ็ๆ็ๅบๆไปถ็ฑปๅๆไปฅไธ่ฟไบ๏ผ

- **lib** โ Generates a library kind preferred by the compiler, currently defaults to rlib.
- **rlib** โ A Rust static library.
- **dylib** โ A Rust dynamic library.
- **cdylib** โ A native dynamic library.
- **staticlib** โ A native static library.
- **bin** โ A runnable executable program.
- **proc-macro** โ Generates a format suitable for a procedural macro library that may be loaded by the compiler.

Rust static library ๆฏๅนณๅฐๆ ๅณ็็นๅฎ้ๆไธญ้ดๅบๆ ผๅผ๏ผๅฏไปฅไพ็บฏ Rust ไปฃ็ ้กน็ฎไน้ด็ไพ่ตๅ่ฐ็จใ
ๅฎๆฏไธไธชๅฝๆกฃๆไปถ๏ผๅๅซๅพๅค metadata ไฟกๆฏ๏ผๆฏๅฆๅฏ่ฝ็ไธๆธธไพ่ตไฟกๆฏ๏ผ๏ผ็จๆฅๅๅ้ข็ linkageใ

ๅจๆ่ฟๆฅๅบๆฏๅนณๅฐ็ธๅณ็ๅบ๏ผๆ นๆฎๅนณๅฐไฝฟ็จไธๅๆฉๅฑๅ๏ผLinux ไธไธบ .so, MacOS ไธไธบ .dylib, Windows 
ไธไธบ .dllใๅจๆๅบไธไผ่ขซ้พๆฅๅฐ็ฎๆ ๆไปถไธญ๏ผๅชๆฏ่ขซ็จๅบๅจๆ่ฐ็จใ

่ฟ็จๅฎๆฏๅผบๅคง็็ผ็จๅทฅๅท๏ผๅฎ้่ฟๆไพๆฝ่ฑก่ฏญๆณๆ ็ๆฐๆฎ็ปๆๆฅๅฎ็ฐๅ็งๅ่ฝ๏ผ็ฎๅ้็ฝฎ proc-macro = true๏ผ
่ฟ็ง crate ้้ขๅฐฑ่ฝๅฏผๅบ่ฟ็จๅฎ๏ผ่ขซๅฏผๅบ็่ฟ็จๅฎๅฏไปฅ่ขซๅถๅฎ crate ๅผ็จใ


ๅนณๅฐๅ็ๅบไธ่ฌๆ C ่ง่ๅจๆๅบ๏ผ่ฟ็งๅจๆๅบๅฏไปฅ่ขซๅถๅฎ่ฏญ่จ่ฐ็จ๏ผไนๅฐฑๆฏ่ทจ่ฏญ่จ FFI ไฝฟ็จ๏ผๅ ไธบๅ ไนๆๆ
่ฏญ่จ้ฝๆ้ตๅพช C ่ง่็ FFI ๅฎ็ฐใ่ฟๅๆฌ `staticlib` ้ๆๅบ๏ผLinux ๅ MacOS ไธ็ผ่ฏไผ็ๆ .a 
ๆไปถ๏ผๆๅจ Windows ไธ็ๆ .lib ๆไปถใ็ผ่ฏๅจไผๆๆๆๅฎ็ฐ็ Rust ๅบไปฃ็ ไปฅๅไพ่ต็ๅบไปฃ็ ๅจ้จ็ผ่ฏ
ๅฐไธไธช้ๆๅบๆไปถไธญ๏ผไนๅฐฑๆฏๅฏนๅค็ไธไบง็ไปปไฝไพ่ตไบใ่ฟ็นๅซ้ๅๅฐ Rust ๅฎ็ฐ็ๅ่ฝๅฐ่ฃๅฅฝ็ป็ฌฌไธๆนๅบ็จไฝฟ็จใ

ๅจๅทฅ็จ็ฎๅฝไธๆไธคไธช้ป่ฎค็็ฎๅฝ๏ผ

- `/src/bin` ้ป่ฎค็จๅบ็ฎๅฝใ
- `/src/examples` ็คบ่็จๅบ้ป่ฎคๅญๆพ็ฎๅฝใ

่ฟไบ็จๅบๅฏไปฅ้่ฟๆๅฎ --bin ๆ --example ้้กนๆฅ่ฟ่ก๏ผ่ไธ็จๅจ Cargo.toml ไธญ้็ฝฎ๏ผๅฆๆๆฏๅถๅฎ
็ฎๅฝไธ็็จๅบ๏ผๅฐฑ้่ฆ้็ฝฎๆ่ฝๆญฃ็กฎๆง่กใ

    cargo run --bin demo
    cargo run --example demo

่ฟไบ็ฎๅฝไปฃ็ ไฝฟ็จๅไธๅฅๅทฅ็จ้็ฝฎ๏ผๅณๅทฅ็จๆ น็ฎๅฝไธ็ Cargo.toml ็้็ฝฎๅฏน่ฟไบ็จๅบๅๆ ทๆๆใ

ๅถๅฎ่ฎพ็ฝฎๅ่ The Manifest Formatใ


Crates ็ป็ป็ๆฏ็ธๅณ็ๅฝๆฐ๏ผๅณๅฏไปฅๅฝไฝๅฝๆฐๅบ็ๅพใๅฆๅฅ้จ็ๆฐๅญๆธธๆ๏ผ้่ฟ `use rand::Rng;` ๅฐ
rand::Rng ๅฏผๅฅๅฐๅฝๅ็ไฝ็จๅๅฐฑๅฏไปฅไฝฟ็จ๏ผไฝๅฎๆฌ่บซไปๅคไบๅๆ็ไฝ็จๅไธใ

Crates ไธญ็ไปฃ็ ๅฏไปฅๅๆจกๅ็ฎก็๏ผไปฅไพฟไบๅฏ่ฏปๆงๅ้็จ๏ผ้่ฟ `mod` ๅณ้ฎๅญๅฎไน๏ผๅณ้ฎๅญ `pub` ๆงๅถ่ฎฟ้ฎใ
ๆ นๆฎ่ฏญๆณๅฎไน๏ผๆไธค็งๆจกๅๅฎไนๅฝขๅผ๏ผ`mod IDENTIFIER;` ่ฟ็งๆดๅธธ็จ๏ผๅฎๅฐๆจกๅๅ่งฃๅฐๅไธชๆไปถ่ฟ่ก็ฎก็๏ผ

      unsafe? mod IDENTIFIER ;
    | unsafe? mod IDENTIFIER {
        InnerAttribute*
        Item*
      }

ไพๅฆ๏ผไธไธชๅบ็คบ่๏ผๅจๆไปถๅๅฎไนๆจกๅ๏ผ่ฟ้ๆจกๅๆฒกๆๅ  `pub` ๅ็ผ๏ผ่กจ็คบ็งๆไธๅค้จ่ฎฟ้ฎ๏ผๅชไพ็ถ็บง่ฎฟ้ฎ๏ผ

```rust,ignore
// Filename: src/lib.rs
#[allow(unused)]
#[allow(dead_code)]
mod front_of_house {
    mod hosting {
        fn add_to_waitlist() {}

        fn seat_at_table() {}
    }

    mod serving {
        fn take_order() {}

        fn serve_order() {}

        fn take_payment() {}
    }
}
```

ๆณจๆ๏ผๆจกๅๅฝๅไฝฟ็จ่ๅฝข่งๅ๏ผ่ไธๆฏ้ฉผๅณฐๅฝๅ่งๅ๏ผไธค่่ฏดๆๅฆไธ๏ผ

- Snake case name ๅณๅจ็จๅฐๅๅญๆฏ๏ผๅๅญๅ้็จไธๅ็บฟ๏ผfile_nameใline_numberใ
- Camel case name ๅ้่ตทๅๅญ้ฆๅญๆฏๅฐๅ๏ผๅ้ขๅ่ฏ้ฆๅญๆฏๅคงๅ๏ผไพๅฆ๏ผfileNameใlineNumberใ

่ฟไธชๆจกๅ็ป็ปไธ็ Crates Tree ็ปๆๅฆไธ๏ผ้ป่ฎค้ๅผๆไพไบ crate root ๆจกๅ๏ผ

    crate
     โโโ front_of_house
         โโโ hosting
         โ   โโโ add_to_waitlist
         โ   โโโ seat_at_table
         โโโ serving
             โโโ take_order
             โโโ serve_order
             โโโ take_payment

ๆไบ่ฟไธช Crates Tree๏ผๅฐฑๅฏไปฅ้่ฟ่ทฏๅพๆฅๅผ็จๅฏนๅบ็ๅฝๆฐไบ๏ผๅฏไฝฟ็จ็ปๅฏนๆ็ธๅฏน่ทฏๅพ๏ผๅฆๆๅจ็ธๅๆจกๅไธญ
่ฟๅฏไปฅไฝฟ็จ `super::` ่ฎฟ้ฎ็ถๆจกๅๆ `self::` ่ฎฟ้ฎๅฝๅๆจกๅ๏ผ

```rust,ignore
pub fn eat_at_restaurant() {
    // Absolute path
    crate::front_of_house::hosting::add_to_waitlist();

    // Relative path
    front_of_house::hosting::add_to_waitlist();
}
```

ๆณจๆ๏ผๅฌๅผ่ฎฟ้ฎ็ๅฝๆฐๆ็ฑปๅ้่ฆๅ็ผ `pub` ๅณ้ฎๅญ๏ผ็ปๆไฝๆๅไน็ฑปไน่ฆๅ็ผ `pub` ๆๅฏไปฅๅฌๅผ่ฎฟ้ฎใ
ๅจๅค้จๅผ็จๆจกๅๆถ๏ผ้่ฟ `use` ๅณ็ณปๅญๅฏผๅฅๅฐๅฝๅไฝ็จๅ๏ผๅฏไฝฟ็จ `as` ่ตทๅซๅ๏ผ

```rust,ignore
use crate::front_of_house::hosting;
use std::io::Result as IoResult;

// Re-exporting Names with pub use
pub use crate::front_of_house::hosting;

// use std::cmp::Ordering;
// use std::io;
use std::{cmp::Ordering, io};

// bring all by *, the glob operator
use std::collections::*;
```

้่ฆไฝฟ็จๅค้จๆจกๅ๏ผๅฐฑ้็ฝฎ Cargo.toml `[dependencies]`๏ผ็ถๅ้่ฟ Cargo ๅฝไปคๅฎ่ฃไพ่ตใ 

ๅฆๆๆๆๅฝๆฐ้ฝๅฎไนๅจๅไธไธชๆไปถไธญ๏ผๅฝไปฃ็ ๅๅคๅ๏ผ็ดๆฅๆๆจกๅๅ็็ปๆๆฐๅปบไปฃ็ ๆไปถ๏ผๅณๅฏๅฎๆๆจกๅๅๆ๏ผ

    src/front_of_house/hosting.rs


ไปฅไธๆฏไธค็งๆจกๅ้ฃๆ ผ็็ฎๅฝๆ ๏ผ

    src/
    +-- lib.rs
    +-- util.rs
    +-- util/
        +-- config.rs

    src/
    +-- lib.rs
    +-- util/
        +-- mod.rs
        +-- config.rs

|     Module Path     | Filesystem Path | File Contents |
|---------------------|-----------------|---------------|
| crate               | lib.rs          | mod util;     |
| crate::util         | util.rs         | mod config;   |
| crate::util::config | util/config.rs  |               |

ๆจกๅ่ทฏๅพไธๆไปถ่ทฏๅพ็ๅณ็ณป่ฏดๆๅฆไธ๏ผ

- lib.rs ๆไปถๅฎไน็งๆๆจกๅ `mod util;` ๅฏนๅบ uitl.rs๏ผ้่ฟ `util::` ๆ่ `crate::util::` ๅฝๅ็ฉบ้ดๅป่ฎฟ้ฎๆจกๅๅๅฎน๏ผ
- util.rs ๆไปถๅฎไน็งๆๆจกๅ `mod config;` ๅฏนๅบ util/config.rs๏ผๆไปฅๅจ lib.rs ไธญไธๅฏไปฅ่ฎฟ้ฎ `util::config` ๆจกๅ๏ผ้ค้ๅฎๅฎไนไธบ `pub`ใ

ๅฝๆจกๅ็ฎๅฝไธๅๅซ `mod.rs` ๆถ๏ผ็ฎๅฝๅๅณ็ญไปทไบๆจกๅๅ๏ผๅฏนไบไธ้ข็ `crate::util` ๆจกๅ๏ผๅฏไปฅๅๅปบ
ไธไธช `util/mod.rs` ๆไปถ๏ผไฝไธ่ฝๅๆถๅญๅจๅ็ฎๅฝๅๅ็ `util.rs`ใ


ๅบ้กน็ฎ็ผ่ฏๅๅฐฑๅฏไปฅ่ขซๅถๅฎ้กน็ฎๅผ็จ๏ผ

    cargo build --release
       Compiling hello_world v0.1.0 (path\to\rust\lib)
        Finished release [optimized] target(s) in 0.64s

ๅช้่ฆ้็ฝฎไธไธไพ่ต๏ผ

    [dependencies]
    hello_world = { path = "../hello_world" }

่ฟไบๆจกๅ็ผ่ฏๅ็ๆ็ lib ่พๅบๅฐฑ็งฐไนไธบ Crates๏ผไน ๆฏไธ้ฟๅๅผๅฅ่ฟๅค็ๅ่ฏ๏ผๅฏไปฅๅซๅๆจกๅ๏ผๆฏๅฑไบซๅๅธ
็ๆจกๅใๅฏไปฅ้่ฟ crates.io ็คพๅบ๏ผๅฏไปฅไธไธ็ๅไบซไฝ ็ Crates๏ผไฝฟ็จ Cargo ๆๅใๅๅธๅฝไปคไธ่ฝฝๆ็ฎกใ

ๅๅธ Crates ๆถ่ฆๆณจๆ๏ผๅๅธๆฏๅธธ้ฉป๏ผๅณๆฐธ่ฟไธ่ฝ่ฆ็ๅ็ๆฌ๏ผๅนถไธๆ ๆณๅ ้คไปฃ็ ๏ผไฝๆฏ๏ผๅฏไปฅๅๅธ็็ๆฌๆฐ้
ๆฒกๆ้ๅถใ่ๅๅญๅ้ๅๅ็จๅๅพๅๅ๏ผไฝ ไธ่ฝไฝฟ็จๅซไบบๅทฒ็ป็จ่ฟ็ๅๅญใ

ไฝ ้่ฆๅจ crates.io ๆณจๅไธไธชๅธๆท๏ผ่ทๅ API Token๏ผๅนถ่ฟ่ก cargo login ๅฝไปค่้่ดฆๅทๅณๅฏใ

ๅฆๅค๏ผRust ่ฟๆ Extern crate ๅฃฐๆ็่ฏญๆณ๏ผ

    extern crate std as ruststd;

ๅฏไปฅ็จๆฅๅฐๆๅฎ็ Crate ้พๆฅๅฐๅฝๅ็ๅบไธญ๏ผๅๆถ๏ผๅฎๅฏผๅฅๆจกๅไธ็ๆๆ้กนๅฐๅฝๅๅบใ


Cargo ไธ่ฝฝๆบๅฏไปฅๆ้่ฆ่ฟ่ก้็ฝฎ๏ผไนๅฏไปฅ้็ฝฎๆฌๅฐๆบใๅคง้็จๆทๅฏ่ฝๅ ไธบ็ฝ็ปๅๅ ๅฏผ่ดๅฝไปคๅกๆญป๏ผ

    Blocking waiting for file lock on package cache

่ฟไธช้ฎ้ขไนๅฏ่ฝๆฏ Cargo.lock ่ขซๅถไป็จๅบ็ฌๅ ๆๅผ๏ผไธ่ฌๅณๆ้ฃไธช็จๅบๅฐฑ่กใ่ฟๆไธไธชๅฏ่ฝๆฏ็ผๅญ็ฎๅฝไธ็ 
`~/.cargo/.package_cache` ่ขซๅ ้้ปๅก๏ผๅ ้คๅฎๅฏไปฅ่งฃๅณใ

ๆณจๅๆบๆฌ่บซๆไพ git ็ดขๅผ๏ผ่ฏฅๅญๅจๅบๅน้ crates.io ็ดขๅผๆ ผๅผ๏ผๅฏไปฅๆ็คบ Cargo ไปๅช้ไธ่ฝฝไพ่ตๅใ
Cargo ๆบๆไธค็ง้็ฝฎๆนๅผ๏ผๅจๅฑ้็ฝฎ้่ฆๅๅปบ $HOME/.cargo/config ๆไปถ๏ผTOML ๆ ผๅผ๏ผ็ถๅๅจ้็ฝฎๆไปถ
ๅๅๅฅ้็ฝฎๅๅฎนใๅจ้กน็ฎไธญ๏ผ้่ฆๅจ Cargo.toml ๅ็บง็ฎๅฝๅๅปบ `.cargo/config` ๆไปถใ

ไปฅไธๅฝๅๆบ้็ฝฎ้ๅ้็ฝฎไธไธชๅณๅฏ๏ผๆ ้ๅจ้จ๏ผ

    [source.crates-io]
    registry = "https://github.com/rust-lang/crates.io-index"

    # ไธญๅฝ็งๅญฆๆๆฏๅคงๅญฆ
    [source.ustc]
    registry = "https://mirrors.ustc.edu.cn/crates.io-index"
    # or use git protocol
    # registry = "git://mirrors.ustc.edu.cn/crates.io-index"

    # ไธๆตทไบค้ๅคงๅญฆ
    [source.sjtu]
    registry = "https://mirrors.sjtug.sjtu.edu.cn/git/crates.io-index/"

    # ๆธๅๅคงๅญฆ
    [source.tuna]
    registry = "https://mirrors.tuna.tsinghua.edu.cn/git/crates.io-index.git"

    # rustcc็คพๅบ
    [source.rustcc]
    registry = "https://code.aliyun.com/rustcc/crates.io-index.git"

ๅ่ฎฎๆจ่ไฝฟ็จ git๏ผไฝๅฏนไบ HTTPS ๅ git ๅ่ฎฎ๏ผไธ่ฌๅ้ๅๆบ้ฝๆฏๆ๏ผๅนถไธๆฏๅฏไปฅไบๆข็ใ

Cargo ่ฟ่กๅ package cache ๆไปถ้ๅฎๅฝฑๅ๏ผๅฏไปฅๅฐ่ฏๅ ้ค `~/.cargo/.package-cache` ๆไปถใ
Cargo ๅฏไปฅๅ Travis CI ๆ GitLab CI ็ญๆ็ปญ้ๆๅทฅๅทไธ่ตทๅทฅไฝใ

ๆต่ฏๅบไธ Travis CI ็้็ฝฎๆไปถ .travis.yml๏ผ

    language: rust
    rust:
      - stable
      - beta
      - nightly
    matrix:
      allow_failures:
        - rust: nightly

ๆต่ฏๅบไธ GitLab CI ็้็ฝฎๆไปถ .gitlab-ci.yml๏ผ

    stages:
      - build

    rust-latest:
      stage: build
      image: rust:latest
      script:
        - cargo build --verbose
        - cargo test --verbose

    rust-nightly:
      stage: build
      image: rustlang/rust:nightly
      script:
        - cargo build --verbose
        - cargo test --verbose
      allow_failure: true


## โก HelloWorld๐๐
- [The Rust Programming Language](https://doc.rust-lang.org/book/ch01-00-getting-started.html)
- [The Rust Programming Language zh_CN](https://kaisery.github.io/trpl-zh-cn/ch01-02-hello-world.html)
- [ๅ่ฏ Rust](https://wudaijun.com/2020/02/rust-basic/)
- [2.101. lang_items](https://doc.rust-lang.org/unstable-book/language-features/lang-items.html)
- [The Rust Programming Language - Basic Rust Literacy - Accepting Command Line Arguments](ch12-01-accepting-command-line-arguments.md)
- [Rust-specific fork of LLVM](https://github.com/rust-lang/llvm-project)
- [A More Detailed Tour of the Rust Compiler](https://tomlee.co/2014/04/a-more-detailed-tour-of-the-rust-compiler/)
- [Rust Design Patterns](https://rust-unofficial.github.io/patterns/intro.html)

Rust ๆฏไธ็ง่ชๅธฆ่ๅผ่ฝฌ็งป Paradigm Shift ็ๆฐๅผ็ผ็จ่ฏญ่จ๏ผๅฎ็ๅญฆไน ้พๅบฆๆฒ็บฟๅ ไนๆฏๅ C++ ็ธๅฝ็๏ผ
ๅนถไธๅฅ้จๆฏ C++ ่ฟ้พไธ็นใไฝๆฏ่ฟๅธฆๆฅไธไธชๅฅฝๅค๏ผไฝฟ็จ Rust ็ผ็จ๏ผไฝ ๅฐฑไธๅคชๅฏ่ฝ็ฏ้ใRust ็ผ็จๆๆณไธ
C++ ็ป็ถไธๅ๏ผRust ไธญๅชๆ่ฝ่ขซ่ฏๆๆฏๆญฃ็กฎไปฃ็ ็ๆ่ขซๅ่ฎธ๏ผ่ C++ ๅๆฏๅ่ฎธไปปไฝไธ่ฝ่ฏๆๆฏ้่ฏฏ็ไปฃ็ ใ

็พๅฝๅฒๅญฆๅๅๅฒๅญฆๅฎถ Thomas S. Kuhn ๅจไป 1962 ๅนดๅบ็็ใ็งๅญฆ้ฉๅฝ็็ปๆใไธไนฆไธญๆๅบ๏ผ็งๅญฆ็ๅๅฑไธๆฏ
้่ฟ่ฟ็ปญๅ็บฟๆง็ๆนๅผ๏ผ่ๆฏ็ปๅไธ็ณปๅโ่ๅผ่ฝฌๆขโๆฅๅๅฑ็ใ่ๅผ่ฝฌๆข/่ๅผ่ฝฌ็งป Paradigm Shift ๆฏไธๅบ
ไธ็ง่ๅผๅไปฃไบๅฆไธ็ง่ๅผ็็งๅญฆ้ฉๅฝใ่ๅผ่ฝฌๅๅฏผ่ดไบไธไธช้ฉๅฝๆง็งๅญฆๆถๆ็ๅบ็ฐ๏ผ่ฟไธๆถๆ๏ผๆฐ็่ง่ง่ขซๆๅผ๏ผ
ๆฐ็ๆข็ดข่ทฏ็บฟๅบ็ฐ๏ผๅนถๅฏนๆง็ๆฐๆฎๅๆง็ๅ่ฎพๆๅบๆฐ็้ฎ้ขใ

ๆ่ฐข Low Level Virtual Machine (LLVM) ็ผ่ฏๅจๆๆถๅจ่ฎก็ฎๆบ็ผ่ฏๅจ้ขๅไธ็ๆฐๅบ่ดก็ฎ๏ผ่ฟๆฏไธไธชๆบ่ช
the University of Illinois ็ไธไธช็ ็ฉถ้กน็ฎ๏ผ่ฏฅ้กน็ฎๆจๅจๆไพไธไธช็ฐไปฃๅ็็ผ่ฏๆบๅถ๏ผไฝฟๅพๅฏนไปปไฝ็ผ็จ
่ฏญ่จๆขๅฏไปฅๅๅฐ้ๆ็ผ่ฏไนๅฏไปฅๅจๆ็ผ่ฏ๏ผ่ไธ้ๅธธ้ซๆใ

ๅ่ CPEG 421/621 Compiler Design ๆไพ็ LLVM ๅทฅๅท้พ็คบๆๅพ๏ผ

    +=========+    |
    | C       | ==>+
    +=========+    |                                  +=================+             |
                   |                                  | Target ASM Code | ===========>+
    +=========+    |                                  +=================+             |
    | Haskell | ==>+                                                                  |
    +=========+    |                                  +=================+             |
                   |                                  | Target ASM Code | ===========>+
    +=========+    |                                  +=======^=========+             |
    | C++     | ==>+     +===========+                        |                       |
    +=========+    |     |   Front   |     +=========+     +======+             +=====v=====+
                   | ==> |    end    | ==> | LLVM IR | ==> | llvm |             | Assembler |
    +=========+    |     | Compilers |     +=========+     +======+             +===========+
    | Obj-C   | ==>+     +===========+                        |                       |
    +=========+    |                                  +=======v=========+    +========v========+
                   |                                  | Target Obj Code |    | Target Obj Code |
    +=========+    |                                  +=================+    +=================+
    | Python  | ==>+                                          |                       |
    +=========+    |                                          |   +===============+   |
                   |                                          +==>|    Linker     |<==+
    +=========+    |     ==============================          +===============+
    | Ruby    | ==>+     LLVM Toolchain at a High-Level                  |
    +=========+    |     ==============================      +===========v===========+
                   |                                         | Executable or Library |
        ...     ==>+                                         +=======================+

้่ฟๅฎ็ฐ็ผ่ฏๅจๅ็ซฏไธๅ็ซฏ็ๅ็ฆปๆๆถ๏ผLLVM ๅฐฑๅฏไปฅไฝฟ็จ IR ็ตๆดปๅฐๅค็ๅ็ง่จ่ฏญๅๆๅนถ็ๆ็ไธญ้ดไปฃ็ ๏ผ
ไธญ้ด่กจ็คบไน็งฐไธบ LLVM ASM๏ผ็ถๅ้่ฟๅ็ซฏ็ๆๅ็ง็กฌไปถๅนณๅฐไพ่ต็ๆบๅจ็ ๏ผๆ ่ฎบๆฏ ARMใx86ใPowerPC 
ๆถๆ้ฝๅฏไปฅ๏ผๅช้่ฆๆ นๆฎไธๅ็่ฏญ่จๅฎ็ฐ็ธๅบ็ๅ็ซฏ็ผ่ฏๅจๅณๅฏใ

LLVM IR ๆฏไธ็งๅบไบ*้ๆๅไธ่ตๅผ*็่กจ็คบๆณ๏ผStatic Single Assignment (SSA) ็นๆงๆไพ็ฑปๅๅฎๅจๆงใ
ๅบๅฑๆไฝใ็ตๆดปๆง๏ผไปฅๅๆธๆฐๅฐ่กจ็คบๆๆ้ซ็บง่ฏญ่จ็่ฝๅใ

LLVM ็ผ่ฏๆกๆถๆฏไธไธชไธๅฑ็ปๆ๏ผ็ผ่ฏๅจไผๅฐๆบ่ฏญ่จ็ฟป่ฏไธบไธญ้ด่ฏญ่จ่กจ่พพ Intermediate Representations (IR)๏ผ
ไนๅๅๅฐ IR ็ป่ฟ็ผ่ฏๅ็ซฏๅค็็จๅบ๏ผ็ฟป่ฏไธบ็ฎๆ ๅนณๅฐ็ๆฑ็ผ่ฏญ่จ๏ผๆ็ปๆๅพๅฐ่ฎพๅค็ธๅณ็ๆบๅจๆไปคใIR ้ไธญ
ไฝ็ฐไบ็ผ่ฏๅจ็ไธป่ฆ็นๅพโโ็ฎๆณ๏ผไผๅๆนๅผ๏ผๆฑ็ผๆต็จ็ญ็ญใ

LLVM ๆฏ้ๅธธๆฃ็ๅนณๅฐ, ๅพๅค่ฏญ่จ้ฝๆฏๆๅฐๆบ็ ็ผ่ฏไธบ LLVM ไธญ้ด่ฏญ่จ๏ผๆฏๅฆ่ฏด CใC++ใRustใGoใSwiftใJulia
็ญ็ญ๏ผ่ฟไบ่ฏญ่จ้ ็ LLVM ็ๅผบๅคง่ๅฎ็ฐไบๅพๅคๅผบๅคง็่ฏญ่จๅ่ฝใ

Rust ไฝไธบ้ๆ็ผ่ฏๅ่ฏญ่จ๏ผrustc ็ผ่ฏๅจๆฌ่บซ็ฑ Rust ่ฏญ่จๅฎ็ฐ๏ผๅณๅฎ็ฐไบ่ชไธพ๏ผๅ็ซฏ้จๅๅๅบไบ็ฐๆ็ LLVMใ

Rust ็ผ่ฏๅจ็ฎ่ฆๅทฅไฝๆต็จๅฆไธ๏ผ

- ้ฆๅ๏ผ่ฏปๅๆบไปฃ็ ๅ Tokens ๆซๆ๏ผๅพๅฐ Token stream ๆฐๆฎ๏ผ่ฟ้จๅ็จๅบไนๅซๅ Syntax Analyzer๏ผ
- ็ถๅๅฏนๆบ็ ่ฟ่ก่ฏๆณๅๆๅพๅฐ Abstract Syntax Tree (AST) ๆฝๅ่ฏญๆณๆ ๏ผ่ฟ้จๅ็จๅบๅซๅ Parser๏ผ
- ๅๅฐ AST ่ฝฌๆขไธบ High-Level IR (HIR) ไปฅไพฟๅ็ฑปๅๆจๆญใtrait ๆฅๅฃๅค็ไปฅๅ้ๆ็ฑปๅๅฎๅจๆงๆฃๆฅ๏ผ
- ๅ่ฝฌๆขไธบ Mid-level IR (MIR) ไปฅไพฟๅๆๆๆๅ็จๆฃๆฅๅไปฃ็ ไผๅ๏ผMIR ไนๆฏ Control-Flow Graph (CFG)๏ผ
- ็ป่ฟไปฅไธๅ็ซฏๅทฅไฝๅ๏ผไปฃ็ ไผ่ฝฌ่ฏไธบ LLVM IR๏ผๆไปถๅ็ผไธ่ฌๆฏ .ll๏ผๆฏๆๆฌๆ ผๅผ๏ผๅญ่็ ๆไปถๅ็ผๆฏ .bc๏ผ
- ๅพๅฐไธญ้ดไปฃ็ ่กจ่พพ๏ผไธไธๆญฅๅฐฑๆฏ็ๆ็ธๅบ็ๆบๅจ็ ๏ผ่ฟๅฐฑๆฏ LLVM ่ฆๅ็ๅทฅไฝใ

ๅฏไปฅๅจ Rust Playground ไธ็ๆ HIR ไธญ้ดไปฃ็ ๏ผๆ่ไฝฟ็จๅฝไปค็ๆ LLVM-IR (.ll) ๆ่ MIR (.mir)๏ผ

    cargo rustc -- -Z unpretty=hir-tree
    cargo rustc -- --emit llvm-ir
    cargo rustc -- --emit mir

Rust ๅนถไธๅณๅฟไปฃ็ ็ๅญๆพไฝ็ฝฎ๏ผไธ่ฟๅปบ่ฎฎๅจๅทฅไฝ็ฎๅฝไธญ๏ผไฝฟ็จ cargo ๅทฅๅทๅๅปบๅทฅ็จ็ฎๅฝ๏ผๅญๆพๆๆ้กน็ฎใ

ๆๅผ็ป็ซฏๅนถ่พๅฅ cargo new ๅฝไปคๅๅปบไธไธชๅทฅ็จ๏ผๅฎไผ่ชๅจๆ็ปๅฎ็ๅทฅ็จๅๅๅปบ็ฎๅฝ๏ผๅนถๅๅซไธๆฎต็คบ่ไปฃ็ ใ

    cargo new demo

    cd demo
    cargo build
    cargo run
    cargo check

ๆบๆไปถๅฝๅไธบ `main.rs`๏ผRust ๆบๆไปถๆปๆฏไปฅ .rs ๆฉๅฑๅ็ปๅฐพใๆไปถๅๅๅซๅคไธชๅ่ฏ๏ผไฝฟ็จไธๅ็บฟๅ้ใ
ไพๅฆๅฝๅไธบ hello_world.rs๏ผ่ไธๆฏ helloworld.rsใCargo ๅฝไปคๅฏไปฅ็ๆๅทฅ็จใ็ผ่ฏๆ่ๆง่ก็จๅบใ

ๅทฅ็จๅๅซ้็ฝฎๆไปถ Cargo.toml๏ผ

    [package]
    name = "hello_cargo"
    version = "0.1.0"
    authors = ["Your Name <you@example.com>"]
    edition = "2018"

    [dependencies]

็ฐๅจๆๅผๅๅๅปบ็็คบไพ๏ผๆไปถๅ: main.rs

    fn main() {
        println!("Hello, world!");
    }

ไฟๅญๆไปถ๏ผๅนถๅๅฐ็ป็ซฏ็ชๅฃใๅจ Linux ๆ macOS ไธ๏ผ่พๅฅ rustc ็ผ่ฏๅฝไปค๏ผ็ผ่ฏๅนถ่ฟ่กๆไปถ๏ผ

    $ rustc main.rs
    $ ./main
    Hello, world!

ๅจ Windows ไธ๏ผ่พๅฅๅฝไปค .\main.exe๏ผ่ไธๆฏ ./main๏ผ

    > rustc main.rs
    > .\main.exe
    Hello, world!

ไธ็ฎกไฝฟ็จไฝ็งๆไฝ็ณป็ป๏ผ็ป็ซฏๅบ่ฏฅๆๅฐๅญ็ฌฆไธฒ Hello, world!ใ

็ฎๅ็จๅบ้กน็ฎ็ผ่ฏไฝฟ็จ rustc ๆฏๆฒก้ฎ้ข็๏ผไฝๆฏ cargo ่ฟไธชๅทฅๅท็ฎก็้กน็ฎๆดๆนไพฟ๏ผๅนถ่ฎฉไปฃ็ ๆไบๅไบซใๅฆๆ
ไฝ ๆ C/C++ ่ๆฏ๏ผๅฏไปฅๅ็ฐ่ฟไธ gcc ๅ clang ็ฑปไผผใ็ผ่ฏๆๅๅ๏ผRust ไผ่พๅบไธไธชไบ่ฟๅถ็ๅฏๆง่กๆไปถใ


็จๅบไธญ main() ๆฏไธไธช็จๅบๅฅๅฃๅฝๆฐ๏ผๅจๅฏๆง่ก็ Rust ็จๅบไธญ๏ผๅฎๆปๆฏๆๅ่ฟ่ก็ไปฃ็ ใๆณจๆ main ๅฝๆฐ
ๆฒกๆๅๆฐไนๆฒกๆ่ฟๅๅผใๅฆๆๆๅๆฐ็่ฏ๏ผๅฎไปฌ็ๅ็งฐๅบ่ฏฅๅบ็ฐๅจ () ๆฌๅทไธญใ

่ฟ้กปๆณจๆ๏ผๅฝๆฐไฝ่ขซๅ่ฃนๅจ {} ่ฑๆฌๅทไธญ๏ผๆๆๅฝๆฐไฝ้ฝ่ฆ็จ่ฑๆฌๅทๅ่ฃน่ตทๆฅใไธ่ฌๆฅ่ฏด๏ผๅฐๅทฆ่ฑๆฌๅทไธๅฝๆฐๅฃฐๆ
็ฝฎไบๅไธ่กๅนถไปฅ็ฉบๆ ผๅ้๏ผๆฏ่ฏๅฅฝ็ไปฃ็ ้ฃๆ ผใ

ๅฆๆไฝ ๅธๆๅจ Rust ้กน็ฎไธญไฟๆไธ็งๆ ๅ้ฃๆ ผ๏ผrustfmt ไผๅฐไปฃ็ ๆ ผๅผๅไธบ็นๅฎ็้ฃๆ ผใRust ๅข้่ฎกๅๆ็ป
ๅฐ่ฏฅๅทฅๅทๅๅซๅจๆ ๅ Rust ๅ่ก็ไธญ๏ผๅฐฑๅ rustcใ

ๅจ main() ๅฝๆฐไธญไปฃ็ ๅฎๆ่ฟไธช็ฎๅ็จๅบ็ๆๆๅทฅไฝ๏ผๅจๅฑๅนไธๆๅฐๆๆฌใ

่ฟ้ๆๅไธช้่ฆ็็ป่้่ฆๆณจๆ๏ผ

- ้ฆๅ Rust ็็ผฉ่ฟ้ฃๆ ผไฝฟ็จ 4 ไธช็ฉบๆ ผ๏ผ่ไธๆฏ 1 ไธชๅถ่กจ็ฌฆ๏ผtab๏ผใ
- ็ฌฌไบ๏ผprintln! ่ฐ็จไบไธไธช Rust ๅฎ๏ผmacro๏ผ,็ฐๅจๅช้่ฎฐไฝ๏ผ็ฌฆๅทๅๅบ็ฐ ! ๅฐฑๆๅณ็่ฐ็จ็ๆฏๅฎ่ไธๆฏๆฎ้ๅฝๆฐใ
- ็ฌฌไธ๏ผ"Hello, world!" ๆฏไธไธชๅญ็ฌฆไธฒใ่ฟไธชๅญ็ฌฆไธฒไฝไธบไธไธชๅๆฐไผ ้็ป println!๏ผๅญ็ฌฆไธฒๅฐ่ขซๆๅฐๅฐๅฑๅนไธใ
- ็ฌฌๅ๏ผไปฃ็ ่กไปฅๅๅท็ปๅฐพ๏ผ;๏ผ๏ผ่ฟไปฃ่กจไธไธช่กจ่พพๅผ็็ปๆๅไธไธไธช่กจ่พพๅผ็ๅผๅงใๅคง้จๅ Rust ไปฃ็ ่กไปฅๅๅท็ปๅฐพใ

Rust ๅๅถไป่ฏญ่จ็ main ๅฝๆฐไธๅ๏ผๆฒกๆๅฅๅๆ่ฟๅๅผ๏ผ้่ฆไฝฟ็จไธ้จ็ๅฝๆฐๅค็ๅฅๅๅ่ฟๅๅผใ

    fn main() {
        for arg in std::env::args()
        {
            println!(arg);
        }

        std::process::exit(0);
    }

้่ฟ่ฟ็จ้ๅบๅฝๆฐ exit ็ป็ณป็ปไธไธช่ฟๅๅผใ


่ฆ็น๏ผargs() ่ฟๅ็ Args ๆฏ่ฟญไปฃๅจ๏ผๅฏไปฅไฝฟ็จ collect() ๆนๆณ่ฝฌๆขไธบๅญ็ฌฆไธฒ้ๅ๏ผ

    let args: Vec<String> = env::args().collect();

- `Vec<String>` ๅญ็ฌฆไธฒๅ้๏ผๅผ็จ args() ่ฟๅ็ Args ็ปๆไฝ้ๅ๏ผ
- `&args[0]` ๅ็จๅๆฐๅผ็จ๏ผๆไฝ็ณป็ปๅค้จไผ ๅฅ็ Vec<String> ไธ่ฝ็ดๆฅ็งปๅจๆๆๆใๆไฟฎๆน๏ผ
- `{:?}` ๆๅฐๆจกๆฟไฝฟ็จ้้็ฌฆๅทๆๅฐๅคไธชๅผ๏ผ



้คๆญคไนๅค๏ผๆ ๅๅบไธญ็ๆไบ typeใtraitใfunctionใmacro ็ญ็ญๅฎๅจๅคชๅธธ็จ๏ผๅ ๆญคๆ ๅๅบๆไพ้ป่ฎคๆจกๅ
std::prelude๏ผๅจ่ฟไธชๆจกๅไธญๅฏผๅบไบไธไบๆๅธธ่ง็็ฑปๅใtrait ็ญ๏ผ็ผ่ฏๅจไผ่ชๅจไธบ็จๆทๅฏ็จ๏ผ็ธๅฝไบ๏ผ

    use std::prelude::*;

่ฟๆ ท๏ผๆ ๅๅบ้้ข็่ฟไบๆ้่ฆ็็ฑปๅใtrait ็ญๅๅญๅฐฑๅฏไปฅ็ดๆฅไฝฟ็จ๏ผ่ๆ ้กปๆฏๆฌก้ฝๅๅจ็งฐๆ่ use ่ฏญๅฅใ

ๅฆๆไฝ ็ๆๅจๆ่ฏญ่จ๏ผๅฆ RubyใPython ๆ JavaScript๏ผๅๅฏ่ฝไธไน ๆฏๅฐ็ผ่ฏๅ่ฟ่กๅไธบไธคไธชๅ็ฌ็ๆญฅ้ชคใ
Rust ๆฏไธ็ง้ข็ผ่ฏ้ๆ็ฑปๅ๏ผahead-of-time compiled๏ผ่ฏญ่จ๏ผ่ฟๆๅณ็ไฝ ๅฏไปฅ็ผ่ฏ็จๅบ๏ผๅนถๅฐๅฏๆง่ก
ๆไปถ้็ปๅถไปไบบ๏ผไปไปฌ็่ณไธ้่ฆๅฎ่ฃ Rust ๅฐฑๅฏไปฅ่ฟ่กใ


ๆฅไธๆฅ๏ผไบ่งฃไธไบ Rust ๆๆ็น่ฒ็ๅ่ฝ๏ผ

- Mutable & immutable ๆฐๆฎ็ๅฏไฟฎๆนไธไธๅฏไฟฎๆน๏ผๅฏนๅบ &mut T ๅ &T ไธคไธชๅผ็จๆนๅผ๏ผ
- Ownership ๆฐๆฎ็ๆๆๆ็ฎก็๏ผๅฏนๅบๆๆๆ็ๅบๅๅ่ฝฌ็งปไธค็งๆๅต๏ผ
- Memory allocation and lifetime ๅ้็ๅๅญๅ้ไธ็ๅฝๅจๆ๏ผ
- Traits & Polymorphism ้ขๅๅฏน่ฑก็ผ็จ็ๆฅๅฃใ็ปงๆฟไธๅคๆ๏ผ
- Procedural Macros ๅผบๅคง็ๅฎ็จๅบ็ผ็จ๏ผๅฏไปฅๅฏน Rust ไปฃ็ ๅ่ฏญๆณๆ ๅค็๏ผ
- Asynchronous ๅผๆญฅ็ผ็จ;
- Fearless Concurrency ๆ ็็ๅนถๅ๏ผ

ๅๆฅๅฏนๆฏไธไธๅ็ง่ฏญ่จ็ๅนถๅๅค็ๅฎๅจๆจกๅ๏ผ

- JavaScript - **ๅ็บฟ็จ**๏ผๆๅฎๅจ็ๅนถๅๅค็๏ผ้่ฆ้ขๅคๅๅญๆท่ดๅๅ ๅๅญๅ้๏ผ
- Python/Ruby - **Global Interpreter Lock (GIL)** ๅจๅฑ้้ๅถ๏ผ็บฟ็จไธ่ฝๅนถ่ก๏ผ็บ็ฒๆง่ฝๆขๆฅๅฎๅจ๏ผ
- Erlang/Akka - **Actor model** ้่ฟๆถๆฏๅๆญฅๅไธช Actor๏ผ็ฑปไผผ Golang ็ croutineใchannel๏ผ
- Golang - **Communicating Squential Processes (CSP)**๏ผๅ็จไน้ด้่ฟๆถๆฏๅๆญฅ๏ผ้ขๅคๅๅญๆท่ดๅๅ ๅๅญๅ้๏ผ
- Rust - **Ownership + Type System** ็จ็ฑปๅๅๆๆๆไฟ่ฏๅนถๅๅฎๅจ๏ผไผ้้ซๆง่ฝ๏ผๅๅถๅฎๆนๆกๆ ็ผๅผๅฎน๏ผ

Go ๆๅคง็็น่ฒๅฐฑๆฏไป่ฏญ่จๅฑ้ขๅฎ็ฐ Goroutine ๅ็จๆฏๆๅนถๅ๏ผๅ็จๅฐฑๆฏ Go ็จๅบไธญๆๅบๆฌ็ๆง่กๅๅใ
ๅฎไธๆฏๆไฝ็ณป็ปๅฑ้ขไธ็็บฟ็จ๏ผ่ๆฏ็บฟ็จๅๅฎ็ฐ็ๆด่ฝป้ๅ็ๅ็จ๏ผๆไปฅๅจไธ็บฟ็จไธญ็ๅ็จๆ ๆณ้ซๆๅฉ็จๅคๆ ธๅฟใ
ไฝๆฏ๏ผๅ ไธบๅ็จๆด่ฝป้ๅ๏ผๆไปฅๅๆขๅ็จๆด้ซๆใไบๅฎไธๆฏไธไธช Go ็จๅบ่ณๅฐๆไธไธช Master goroutine๏ผ
็จๅบๅฏๅจๆถ๏ผๅฎไผ่ชๅจๅๅปบๅนถ่ฟ่กใGo 1.5 ็ๆฌๅผๅงๅฏไปฅ้ป่ฎค้็จๅคๆ ธๆง่ก๏ผ้ป่ฎคๅผ็บฟ็จๆฏ CPU ๆ ธๅฟๆฐใ


Rust ๆไพไบไธ็งๆฅๅฃ็ฑปๅ Traits๏ผๆๆไธบๅฏน่ฑก็็น่ดจ๏ผ็ธๅฝไบๅถๅฎ่ฏญ่จไธญ็ interface ๆฅๅฃ็ฑปๅใๅๅฎไน
Trait ๆฅๅฃๆๅทๆ็ๅธธ้ใๆนๆณไปฅๅ็ฑปๅ๏ผ็ถๅ๏ผไธบ้่ฆ่ฟ็งๆฅๅฃๅ่ฝ็็ฑปๅๅฎ็ฐๅฎ๏ผไฝฟๅพ่ฏฅ็ฑปๅๅทๅค่ฏฅ Trait
็ๅ่ฝ๏ผๆฏ็ปๅ(composite)็ๆนๅผใ

ๆฅๅฃ้ๅธธๅๅคๆ่็ณป๏ผ้่ฟๆฅๅฃ็็ปงๆฟ(inheritance)๏ผไฝฟๅพๅฎ็ฐๅไธไธช Trait ๆฅๅฃ็็ฑปๅ้ฝๆๅ็งๆง่ดจ๏ผ
่่ฟไบ็ฑปๅๅ้่ฟๆฅๅฃ็็ถๅญๅณ็ณปๅทๆไบๅคๆๆง๏ผๅฏไปฅ่ฟ่ก is a ๅคๆญๅถๆๆ็ฑปๅใ

Rust ็ฑปๅ็ณป็ปไฝฟ็จ็ๆฏ้ธญๅญๆจกๅ(Duck Typing)๏ผๅณๅช่ฆๅซ่ตทๆฅๅ้ธญๅญ๏ผๅฎๅฐฑๅฏไปฅๅฝๆ้ธญๅญๆฅไฝฟ็จใไนๅฐฑๆฏ่ฏด๏ผ
็ๆญฃ้่ฆ็ไธๆฏ้ธญๅญ๏ผ่ๆฏๅ้ธญๅญไธๆ ท็ไธ่ฅฟใ

Rust ็็ฑปๅ็ณป็ปๅบไบ็ปๅๆ็ปด๏ผไธๅ C++/Java ้่ฟ็ฑปไปฅๅ็ปงๆฟๅฑๆฌก็ปๆๆฅๅ่ฃ๏ผ็ปๅๆนๅผๆฏๅฝๆฐๅผ็ผ็จไธญ
ๅฎ็ฐ้ขๅๅฏน่ฑก็ผ็จ็ไธ็งๆๆๆๆฎตใๅนถไธ๏ผ็ปๅๆนๅผๆฏ็ฑปๅฐ่ฃ็ปงๆฟๆนๅผๆด่ฝ่กจ่พพ็ๅฎไธ็ใ

ๆฏๅฆ๏ผ็ๅฎไธ็ไธญ็้ธ็ฑป๏ผๅฎไผ้ฃ๏ผ้ฃไนๅฎไน็ฑป Bird ๅๅซไบไธไธช fly ๆนๆณ๏ผ็ช็ถๆไธๅคฉ้่ฆๆทปๅ ้ธต้ธ่ฟไธช
็ฑปๅ๏ผ็ซ็ถๅ็ฐ๏ผ่กจ่พพ้ธต้ธ่ฟ็งไธไผ้ฃ็้ธๆถ๏ผๅฐฑ้่ฆๅฅฝๅฅฝ้ๆฐ่ฎพ่ฎก็ฑป็็ปงๆฟๅณ็ณปใ่็ปๅ traits ็น่ดจๆฅๅฃ
ๅฐฑไธๅญๅจ่ฟ็้ฎ้ขใRust ็็ปๆไฝไนไฝฟ็จ็ฑปไผผ็ๆนๅผ๏ผ้่ฆไปไนๆนๆณๅฐฑไฝฟ็จ impl ๅณ้ฎๅญๆฉๅฑ็ธๅบ็ๆนๆณใ


ๆฅไธๆฅ่งฃๆไธไธ**ๆๆๆ**ๆฆๅฟต๏ผๅๅ็งๅค็ๆนๅผ๏ผ

- `shared reference` ๅฑไบซๅบๅๆๆๆ &T๏ผๅฆ `let a = &b;`๏ผๅฐ b ๅบๅๅฐ a๏ผ
- `mutable reference` ๅฏๅๅบๅๆๆๆ &mut T๏ผๅฆ `let a = &mut b;`๏ผ้่ฟ a ๅฏไปฅไฟฎๆน b ็ๆฐๆฎ๏ผ
- `ownership move` ่ฝฌ็งปๆๆๆ๏ผๅฆ `let a = b;`๏ผๆๆๆ็ฑ b ่ฝฌ็งป็ป a๏ผ

ๆณจๆ๏ผๆ ้ๆฐๆฎ็ฑปๅ๏ผๅฆๆฐๅผใๅญ็ฌฆใๅธๅฐ็ญ้ป่ฎคๆ Copy trait ่กไธบ๏ผไนๅฐฑไธไผๆๆๆๆ่ฝฌ็งปใ

ๆๆๆ `Ownership` ๆฆๅฟตๆฏ่พๆฐๅฅ็่งๅฟต๏ผๆฏ Rust ้ถๆๆฌๆฝ่ฑกไธญๅพ้่ฆ็ไธไธช็ปๆ๏ผ้ถๆๆฌๆฝ่ฑกๅณๆฏๆฒกๆ
ไฝฟ็จ็ๅ่ฝๅฐฑไธไผๅธฆๆฅ็กฌไปถ่ตๆบๆถ่ใๆๆๆๆๅบๆฏไธไธชๅผ๏ผๅๅญๆฐๆฎ่ตๆบ๏ผๆไธๆถๅปๅช่ฝ่ขซไธไธชๅ้ๆฅๆ๏ผๅ้
ๅณไธบ owner๏ผ่ถๅบไฝ็จๅๅ๏ผๅผไผ่ขซ้ๆฏ๏ผๅณๆฏไธช่ตๆบๅผ็จ้ฝๆ็ธๅบ็็ๅฝๅจๆ๏ผๅจ็ผ่ฏๆๅณๅฎๆ้ๆ่ตๆบ็ฎก็๏ผ
ไธๅฟๅจ็จๅบ่ฟ่กๆถๅจๆๅๆถ่ตๆบใ

ๆๆๆ Ownership ๆฏ Rust ็็น่ฒ๏ผ้่ฟๅฐๅ้ไธๅๅญๆฐๆฎ็ๆๆๆ็ปๅฎ๏ผๅฏไปฅๅฎ็ฐ้ๆๅๅพๅๆถๆบๅถ๏ผไป่
้ฟๅไบ่ฟ่กๆถ็ๅๅพๅๆถๅทฅไฝใๅฃฐๆๅ้ๆถ๏ผไฝฟ็จ let ๅฃฐๆๅช่ฏปๅ้๏ผ่กจ็คบไธๅฏไปฅ้่ฟๅฎไฟฎๆนๅๅญๆฐๆฎใ้่ฆไฟฎๆน
ๅๅญ็ๅ้ๅฃฐๆไธบ let mut๏ผ่ฟๅฏไปฅ่ฎฉๅ้ๆฅๆ็ธๅบๅๅญ็ๆๆๆ๏ผๅนถไธๅ็ปญๅฏไปฅๅบๅๅถๆฅๆ็ๆๆๆ๏ผๆ่ๅฐ
ๆๆๆ่ฝฌไบค๏ผmove๏ผ็ปๅถๅฎๅ้ใ

็งปๅจๆๆๆ๏ผๆๅณ็้ซๆ๏ผๅ ไธบไธๆถๅๆฐๆฎๅคๅถ๏ผไนๅ ไธบๅฆๆญค๏ผๅชๆๆ ้ๆๆ้ป่ฎค็ Copy trait ่กไธบใๅๆฐๆฎ
ๅคๅถ็ธๅณ็ๆฅๅฃ้คไบ **Copy** ่ฟๆ **Clone**๏ผๅ่็ปงๆฟ่ชๅ่ใๅ ไธบ Copy ๆฏ้ๅผ็๏ผ่ไธๆ bit ๅคๅถ
ๆฐๆฎ๏ผๆไปฅๅฏนไบๅคง้ๆฐๆฎ่่จๆฏไฝๆ่ฝ็๏ผๅฏนไบๅคๆ็ๆฐๆฎ็ฑปๅ่่จ๏ผๅฎๅๆฏๆตๆท่ด๏ผไธๅๆพๅผ็ Clone ้็จใ


ไธ่กจๅๅบ Rust vs. C++ ่ฏญ่จไธ็งไผ ๅๆนๅผๅฃฐๆๆนๅผ๏ผๆณจๆ Rust ๅชๆๆ ้ๆๆฏไผ ๅผๆนๅผ๏ผ

| ไผ ๅๆนๅผ |     Rust ๅฃฐๆ     |      C/C++ ๅฃฐๆ      |
|----------|-------------------|----------------------|
| ไผ ๅผ     | fn foo(x: T)      | void foo(T x)        |
| ๅช่ฏปๅผ็จ | fn foo(x: &T)     | void foo(const T &x) |
| ่ฏปๅๅผ็จ | fn foo(x: &mut T) | void foo(T &x)       |

ไธ่กจ็ปๅบไบไธ็งไผ ๅๆนๅผ็ๅฝๆฐ่ฐ็จๆนๅผ๏ผ

| ไผ ๅๆนๅผ |  rust ่ฐ็จ  | c++ ่ฐ็จ |
|----------|-------------|----------|
| ไผ ๅผ     | foo(x)      | foo(x)   |
| ๅช่ฏปๅผ็จ | foo(&x)     | foo(&x)  |
| ่ฏปๅๅผ็จ | foo(&mut x) | foo(&x)  |

ๅฏไปฅ็ๅบ๏ผๅ ไธบ const ๅณ้ฎๅญ็ไฝฟ็จๅฏไปฅๅบ็ฐๅจๅฝๆฐๅคๅค๏ผC++ ่ฐ็จๅฝขๅผๆ ๆณ็ฎๆด่กจ่พพไผ ๅ็ฑปๅ๏ผ่กจ่พพๅผๆททไนฑใ
่ๅ่บซ C ่ฏญ่จ่กจ่พพ่ฝๅๆดๆฏไธ่ถณ๏ผRust ๅๆน่ฟไบ่ฟไบ่ฏญๆณ้ฎ้ข๏ผๅฃฐๆๅ่ฐ็จๅฝขๅผๅฎๅจๅฏนๅบ๏ผ่ฏญๆณใ่ฏญไนๆด็ฎๆใ


ๆไปฅ๏ผๅจ Rust ็จๅบไปฃ็ ไธญ๏ผๅ้ไน้ด็่ตๅผไธๅๆฏ็ฎๅ็ = ่ฟ็ฎ็ฌฆๆไฝ๏ผๅณ้ฎๆฏๆถๅไบๆๆๆ็ๅค็ๆนๅผใ
ๅนถไธ๏ผ่ฟๆ mutable & immutable ๅฑๆง๏ผๅชๆๅฏๅ็ๅฃฐๆๆนๅผไธ๏ผๅ้ๆๅฏไปฅ่ฟ่กๅคๆฌก่ตๅผ๏ผๆ่ไฝฟ็จ
ๅฏๅๅผ็จ๏ผ

```rust
    // Immutable variable
    let a;
    a = 1;
    // a = 2;
    // ^^^^^ cannot assign twice to immutable variable
    
    // Mutable variable
    let mut b: i32 = 2;
    b = 3;
    println!("a + b = {}", a + b);
```

ๆไฝ็ณป็ปไธบๅบ็จ็จๅบๆไพไธไธช่ฟ่ก็ฏๅข๏ผๅๅญ็ฏๅขๆฏๆๆ ธๅฟ็่ตๆบ๏ผๅบ็จ็จๅบ่ทๅๅฐ็ๅๅญ็ฉบ้ดไผๅๅๆไธๅ็
ๅ่ฝๅบๅ๏ผๅถไธญๅ ๏ผHeap๏ผไธๆ ๏ผStack๏ผๆฏๆ้่ฆ็ไธคๅใHeap ๅๅญๅฏไปฅ็ฑ็จๅบๅผๅ่ๅจๆๅ้๏ผC/C++
่ฏญ่จไธญ๏ผmalloc ๅ free ๅฝๆฐๅฏนๅฐฑๆฏๅฏน่ฟ้จๅๅๅญ็ๅจๆๅ้ๆไฝใ่ Stack ้จๅ็ฑ็ผ่ฏๅจ่ฟ่ก็ฎก็๏ผๆฏ
ไธไธช First In Last Out (FILO) ๆฐๆฎ็ปๆ๏ผCPU ๅๆ ESP ไธ็จๅฏๅญๅจๆๅๆ ้กถ๏ผๆๅถๅฎ้็ฝฎๆไปค็ฎก็๏ผ
ๅฆ PUSH/POP ๆไปคใStack ไฝไธบๅฝๆฐ่ฐ็จๆ ไฝฟ็จ๏ผๆฏ่ฐ็จไธไธชๅฝๆฐ๏ผStack ๅฐฑๅขๅ ไธไธช frame ๆฐๆฎ็ปๆ็จไบ
่ฎฐๅฝๅฝๅๅฝๆฐ็่ฟ่กไธไธๆใStack ่ฟ้จๅๅๅญ้ๅธธๆฏ Heap ่ฟ้จๅ็ฉบ้ดๆดๅฐ๏ผๆไปฅ็จๅบไธไธๅฐๅฟ็ผๅ้่ฏฏไปฃ็ ๏ผ
ๅฐฑๅฏ่ฝๅฏผ่ดๆ ๅๅญๆบขๅบ๏ผๅฏผ่ด็จๅบๅดฉๆบ๏ผๆดไธฅ้็ๆฏๆผๆดๅฏ่ฝ็ป็ณป็ปๅธฆๆฅๅฎๅจ้ฎ้ขใ

ๅ้ไธๆๆๆ็็ปๅ๏ผ่ฟไฝฟๅพๅ้็็ๅฝๅจๆๆดๅฎนๆ็ฎก็๏ผๅจไธๅๅๅญๅบ็ๅ้๏ผๅ ๏ผHeap๏ผไธๆ ๏ผStack๏ผ๏ผ
ๅ้็็ๅญๆๅฐฑไธ็ธๅใไฝ็ฝฎๆ ไธ็ๅ้๏ผๅช่ฆๅฝๆฐ่ฐ็จ่ฟๅ๏ผไพฟไผ้ๆพๆๆ ๅๅญ๏ผๅนถ้ๆฏๅถไธญ็ๅ้๏ผ่ฟไบๅ้
ๅฐฑๆ ๆณ่ฟๅๅฐๅฝๆฐๅค้จ๏ผๅนถ่ขซไธๅๆณๅฐไฝฟ็จใ่่ฟ็ง้ฎ้ขๅจ C/C++ ่ฏญ่จไธ๏ผ้ๅธธๅฎนๆๅบ็ฐ๏ผๅนถไธๆฐๆๆ นๆฌไธไผ
ๆณจๆๅฐ่ฟ็ง้ฎ้ขๆไปไนๅๆใ

    fn main() {
      let i = 3; // Lifetime for `i` starts. โโโโโโโโโโโโโโโโโ
      { //                                                   โ
          let borrow1 = &i; // `borrow1` lifetime starts. โโโโ
          println!("borrow1: {}", borrow1); //              โโ
      } // `borrow1 ends. โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ
      { //                                                   โ
          let borrow2 = &i; // `borrow2` lifetime starts. โโโโ
          println!("borrow2: {}", borrow2); //              โโ
      } // `borrow2` ends. โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ
    } // Lifetime ends. โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ


ๆๆๆๅชๅจๅ้ๅญๆดปๆถๆๆ๏ผๅฝๅ้่ถๅบไฝ็จๅๅ๏ผๅฆๅฑๆฌๅทไฝ็จๅใๅฝๆฐไฝ็จๅ็ญ็ญ๏ผๅ้ๅฐฑๅคฑๆไบ๏ผๆๆๆไน
ไธๅนถๆถๅคฑใๅฝๅ้ๆฅๆๆๆๆๆถ๏ผๅฏไปฅ้่ฟๆๅฎ่ฏญๆณ็งปๅจๅๅบๅ(Moves and Borrowing)็ปๅถๅฎๅ้ไฝฟ็จใ

ๆๆๆ่งๅฎ๏ผๅจไฝฟ็จๅผ็จๆถ๏ผๆไธคๆก็บฆๆ๏ผ

- ไธ่ฝๅๆถไฝฟ็จ mutable & immutable ๅผ็จ๏ผ้ฟๅๆฐๆฎ่ฏปๅๅนถๅๆง่ก๏ผ
- ไธ่ฝๅญๅจๅคไธช mutable ๅผ็จ๏ผ้ฟๅๆฐๆฎ็ซไบ๏ผ

่ฟไธคๆก็บฆๆๅฏไปฅ็ป Rust ็จๅบ็ผ่ฏไผๅๅธฆๆฅๆๅคง็ๅฅฝๅค๏ผๅฎไปฌ้ฟๅไบ็ผ่ฏๆๅฐฑๅบ็ฐ `data races`๏ผ่ฟ็ง็ฑปไผผ
ๅค็บฟ็จ็ `race condition` ็ถๅต๏ผๅ็ๅจไปฅไธๆๅฝข๏ผ่ Rust ๅฏไปฅๅจ็ผ่ฏๆๅฐฑๅ็ฐ่ฟ็ง้ฎ้ข๏ผ

- ๅๆถๆๅคไธชๆ้่ฎฟ้ฎ็ธๅๆฐๆฎใ
- ่ณๅฐๆไธไธชๆ้ๅจ่ฟ่กๅๅฅๆไฝใ
- ๆฒกๆๅๆญฅๆบๅถๆฅ็บฆๆๆฐๆฎ่ฎฟ้ฎใ

ๅ้ข่ฏดๅ้่ถๅบไฝ็จๅๅฐฑไผๅคฑๆ๏ผๅๆถ Rust ไผๆง่กไธไธช `drop()` ๅฝๆฐๆฅๅๆธ็ๅทฅไฝใๅ่ฎพๆฒกๆๅฎ็ฐๆๆๆ
ๆฝ่ฑกๆบๅถ๏ผๅจๅ้็ธไบ่ตๅผๅ๏ผๅฐฑไผๆๅๅไธๅๅๅญ๏ผๅฎไปฌๅคฑๆๆถๅฐไผๆไธคไธช `drop()` ๅฝๆฐ่ขซ่ฐ็จ๏ผ่ฟๅฐฑไผ
ๅฏนๅไธๅๅญๅฐๅๆง่กไธคๆฌก `free()` ๆไฝ๏ผ็ ดๅๅๅญ็ปๆใ

้่ฟๆๆๆๆบๅถ๏ผๆถๅปๅชๆไธไธชๅ้ๅผ็จๅไธๅๅญๅฐๅ๏ผๆฐธ่ฟไธไผๅบ็ฐ้ๅค้ๆพๅไธๅๅญ็้่ฏฏใ

ๅฆๆไธไธช็ฑปๅ็ไปปไฝ้จๅๅฎ็ฐไบ Drop trait๏ผๅๆ ๆณไฝฟ็จ Copy traitใ

ๆๆๆ ้็ฑปๅ้ฝ่ฝไฝฟ็จ Copy trait๏ผ็ฑปๅๆๅฆไธ่ฟไบ๏ผๅๅซๆๆๅๅงๅผ็ฑปๅฝข๏ผ้คไบๅญ็ฌฆไธฒ๏ผ

- All the integer types, such as `u32`.
- The Boolean type, `bool`, with values true and false.
- All the floating point types, such as `f64`.
- The character type, `char`.
- ่ฟๆๅๅซไปฅไธ็ฑปๅ็ๅ็ป Tuples๏ผไพๅฆ (i32, i32)

็นๅซๅฐ๏ผๅฏนไบๆ ้ๆฐๆฎ็ฑปๅๅณ้คไบๅญ็ฌฆไธฒไปฅๅค็ๅๅง็ฑปๅ๏ผๅฆๆฐๅผใๅญ็ฌฆใๅธๅฐ็ญๅจๅฝๆฐไน้ดไผ ้ๆถ๏ผไผๆๅผไผ ้๏ผ
ไผ่ฟ่ก Copy trait ๆไฝ๏ผไนๅฐฑไธไผๆๆๆๆ่ฝฌ็งปใ่ฝ็ถ๏ผไฝฟ็จๅผ็จๆ่ๅฏๅๅผ็จ็ๆนๅผไผ ้ๅๆฐๆไธไผไผ ๅผ๏ผ
ไฝ่ฟไธค็งๆๅตไธๆๆๆๅชๆๅบๅ๏ผๆฒกๆ็งปๅจใ้ค้ไฝฟ็จๅถๅฎๆนๅผ๏ผ็ฎก็ๆ ้็ๆๆๆ๏ผไพๅฆ Box ๆ้๏ผ

```rust
    let a = Box::new(123);
    let c = a; // a moved
    println!("a move into c {}", c);
    // println!("move {}", a);
    //                      ^ value borrowed here after move
```

println! ๅฎๅชๅ็จๆๆๆ๏ผไธไผ่ฝฌ็งปๅๆฐ็ๆๆๆใ

Rust ็ๆ้ๅคง่ดๅฏไปฅๅไธบไธ็ง๏ผ

- ๅ็ๆ้๏ผ่ฃธๆ้๏ผ๏ผ`*const T` ๅ `*mut T`๏ผ
- ๅผ็จ๏ผๅช่ฏปๅผ็จ `&T` ๅๅฏๅๅผ็จ `&mut T`๏ผ
- ๆบ่ฝๆ้๏ผๅฆ BoxใRcใArc ็ญ็ญ๏ผ

Rust ไธไปๆไพ unsafe ็นๆง๏ผ่ฟ้่ฟๆบ่ฝๆ้๏ผSmart Pointers๏ผ็ฎๅไบๅฏน Heap ๅๅญ็ไฝฟ็จใๅๅญ่ฃ็ฎฑ
ไฝฟ็จ std::boxed::Box ๆ่ alloc::boxed::Box ๆบ่ฝๆ้๏ผ

```rust
    let five = 5;           // 5 in Stack memory
    let five = Box::new(5); // 5 in Heap memory
```

่ฟๆ Rc<T>๏ผWeak<T> ๅฏไปฅไฝฟ็จๅๅญๅญๅจๅคไธชๆๆๆ๏ผๅจไธๅ็ไฝ็ฝฎไฝฟ็จใ้ๅธธๆๅตไธ๏ผๅฏไปฅๅพๅ็กฎ็็ฅ้ๅ้
ๆฅๆๆไธชๅผ๏ผ้ป่ฎค็ๆๆๆๆบๅถๅฏไปฅๅพๅฅฝๅฐ็ฎก็ใไฝๆฏๅจๆไบๆๅตไธ๏ผไธไธชๅ้ๅฏ่ฝไผ้่ฆๆๅคไธชๆๆ่ใไพๅฆ๏ผ
Graphs ๆฐๆฎ็ปๆไธญ๏ผๅคไธช่พนๅฏ่ฝๆๅ็ธๅ็็ป็น๏ผ่็นไปๆฆๅฟตไธ่ฎฒไธบๆๅๅฎ็ๅๆก่พนๆๆฅๆใ่ๅผ็จ่ฎกๆฐๅจๅณๅฏไปฅ
็ฑปๅๆฅๆปก่ถณๅคๆๆๆ็้่ฆ๏ผๅผ็จ่ฎกๆฐ Reference counting (RC) ไนๆฏไผ ็ป็ๅๅญๅๆถๆๆฏ๏ผๅฆ Python ๅฐฑ
ไฝฟ็จๅผ็จ่ฎกๆฐๅจๆฅ็ฎก็ๅๅญ็ๅๆถใ

Rust ้่ฟๆๆๆๆบๅถๅๅ็จๅฎๅจๆฃๆฅ๏ผๅฎๅจ่ง้ฟไบไปฅไธๅธธ่ง็ๅๅญๅฎๅจ๏ผMemory Safety๏ผ้ฎ้ข:

- ไฝฟ็จๆชๅฎไนๅๅญ๏ผ็ผ่ฏๅจๅฎๅจๆฃๆฅ็ฆๆญขๆญค็ง่กไธบใ
- ็ฉบๆ้๏ผๆฒกๆ็ฉบๆ้๏ผไฝฟ็จ Option ๆไธพๅผ None ่กจ่พพใ
- ๆฌๅๆ้๏ผ้่ฟๆๆๆๅ็ๅฝๅจๆ็ฎก็่ง้ฟใ
- ็ผๅฒๅบๆบขๅบ๏ผ็ผ่ฏๅจๆไพๆฐ็ป่ถ็ๆฃๆฅ๏ผ้ฒๆญข็ผๅฒๅบไธพๅบไบง็็้ฎ้ขใ
- ้ๆณ้ๆพๆชๅ้็ๆ้ๆ้ๅค้ๆพๅไธๆ้๏ผ็ผ่ฏๅจ็ฆๆญขๆญค็ง่กไธบ๏ผๆๆๆๆไพๆบๅถๆไพไฟ้ใ

ๅฐฝ็ฎก Rust ๅทฒ็ป่ถณๅคๅฎๅจๅฏ้ ๏ผไฝๆฏ่ฟๆฏๅฏ่ฝๅ ไธบๅผๅ่ๅผๅฅๅๅญๆณๆผ๏ผMemory Leak๏ผ้ฎ้ข๏ผๅคงๆฆๆๅตๆ๏ผ

- ็บฟ็จๅดฉๆบ๏ผๆๆๅฝๆฐๆ ๆณ่ฐ็จใ
- ไฝฟ็จๅผ็จ่ฎกๆฐๆถ้ ๆไบๅพช็ฏๅผ็จใ
- ่ฐ็จๆ ๅๅบ็ forget ๅฝๆฐไธปๅจๆณๆผใ

ๅฏนไบ็บฟ็จๅดฉๆบ๏ผๆฒกๆไปไนๅฅฝ็ๅๆณๆฅ้ปๆญขๅฎ๏ผๅช่ฝ้่ฟๆๅ็จๅบ็จณๅฎๆงๆฅ้ฟๅใ

ๆๆๅฝๆฐๅฏไปฅ้คไบ้ๆพๅๅญ๏ผ่ฟๅฏไปฅ้ๆพๅถไป่ตๆบใ็ธๆฏๅๅญๅฎๅจ้ฎ้ข๏ผ่ตๆบๆณๆผๅถๅฎๅนถๆฒกๆ้ฃไนไธฅ้ใไธๆฌกๅๅญ
ๆณๆผไธไผๆๅคๅคงๅฝฑๅ๏ผไธไผ่ๅๅๅญ่ตๆบใไฝๆฏไธๆฌกๅๅญไธๅฎๅจๆไฝๅฏ่ฝไผๅฏผ่ด็พ้พๆง็ๅๆใ

ๅๅญๆณๆผๆฏๆๆฒกๆ้ๆพๆฌๆฅๅบ่ฏฅ้ๆพ็ๅๅญ๏ผไฝๆๆถๅ่ฟ้่ฆ่ฟ่กไธปๅจๆณๆผ๏ผไพๅฆๅจ้่ฟ FFI ไธๅค้จๅฝๆฐๆไบค้๏ผ
้่ฆๆๅผไบค็ฑ C ไปฃ็ ๅปๅค็ๆถ๏ผๅฐฑ้่ฆ Rust ่ฟ่พน่ฆไฝฟ็จ forget ๅฝๆฐๆฅไธปๅจๆพๅผๅฏนๆๅฎๅๅญ็ๆๆๆใ


ๅ้็็ๅฝๅจๆ่ฟๅฏไปฅ่ฟ่กๆพๅผๆ ๆณจ๏ผExplicit annotation๏ผ้่ฟๆ ๆณจๅฏไปฅๆนๅ้ป่ฎค็็ๅญๅจๆ๏ผไฝฟๅพ่ขซ
ไพ่ต็ๅ้ๅฏไปฅ็ๅญๆด้ฟ็ๆถ้ดใไพๅฆ๏ผๅฏฟๅฝ่กจ็คบๆณ๏ผๆณจ๏ผ'a: 'b๏ผ่กจ็คบๆๆๆ a > b๏ผ๏ผๅๅฆ 'static ้ๆ
ๅ้ๆ ๆณจ๏ผ่กจ็คบ้ๆๆๆๆ๏ผๅณไธไพ่ตไปปไฝ้ใ

็ๅฝๅจๆๆณจ่งฃ็่ฏญๆณๆ ผๅผๅฆไธ๏ผๅ็ผไธไธช apostrophe๏ผ

- `&i32` ๅธธ่ง่ฏญๆณ่กจ็คบๅผ็จ๏ผ
- `&'a i32` ๅธฆๆๆพๅผ็ๅฝๅจๆ่กจ็คบ็ๅผ็จ๏ผ
- `&'a mut i32` ๅธฆๆๆพๅผ็ๅฝๅจๆ็ๅฏๅๅผ็จ๏ผ

้ๅธธ๏ผๅไธช็็ๅฝๅจๆๆ ๆณจๆฌ่บซๆฏๆฒกไปไนๆไน็๏ผๅ ไธบ Rust ๅช้่ฆ้่ฟๅฎๆฅไบ่งฃๅคไธชๅผ็จไน้ด็็ๅฝๅจๆๅณ็ณปใ

ๆฏๅฆ๏ผไปฅไธ็คบ่ไธญๆไธคไธช `longest()` ๅฝๆฐ๏ผๅถไธญไธไธชๅธฆๆ็ๅฝๅจๆๆ ๆณจไฟกๆฏ็็ๆฌๆๅฏไปฅๆญฃๅธธๅทฅไฝ๏ผ

```rust,ignore
// normal reference version
// error[E0106]: missing lifetime specifier
// = help: this function's return type contains a borrowed value, but the signature does not say whether it is borrowed from `x` or `y`
//                              โ expected named lifetime parameter
fn longest(x: &str, y: &str) -> &str {
    if x.len() > y.len() { x } else { y }
}

// lifetime annotated version
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}

fn main() {
    let string1 = String::from("abcd");
    let string2 = "xyz";

    let result = longest(string1.as_str(), string2);
    println!("The longest string is {}", result);
}
```

ๅผๅๅทฅๅทๅฆๆ้็ฝฎไบ Rust Analyzer ๅ  Language Server Protocol (LSP)๏ผ้ฃไนๅฏไปฅๅจๅฝๆฐใ็ปๆไฝ
ๅๅคดไฝฟ็จไธไบๆ ๆณจๆฅ็ฆๆญขๆพ็คบ่ญฆๅไฟกๆฏ๏ผ้ฟๅๅจ็ผ่ฏๆถๅบ็ฐ่ฟๅค็ๅๅฎน๏ผไพๅฆ๏ผ

- #[allow(dead_code)] ่กจ็คบๅ่ฎธๆญปไปฃ็ ๏ผๅณไฝฟ็จไปฃ็ ๅญๅจๆฒกๆไฝฟ็จ็ๅญๆฎตใๅ้ใๅฝๆฐไนไธไผ่งฆๅ่ญฆๅไฟกๆฏใ
- #[allow(unused_variables)] ่กจ็คบๅ่ฎธๅญๅจๆฒกๆไฝฟ็จ็ๅ้๏ผไนๅฏไปฅ็ดๆฅๅฐๅ้ๆนๅไธบ _ ๅผๅคดใ

ๅทไฝๅ่ Guide to Rustc Development - Analysis - Errors and Lints

Rust ๆไธๅฅ็ฌ็น็ๅค็ๅผๅธธๆๅต็ๆบๅถ๏ผๅฎๅนถไธๅๅถๅฎ่ฏญ่จไธญ็ try ๆบๅถ๏ผๆ Exception ็ฑปๆฅ่กจ็คบ้่ฏฏใ
ๅฝๆฐไธญ็่ฟๅๅผๅๅฝๆฐ็่ฟ่ก็ถๆ็ธๅณ๏ผ้ๅธธๅ้่ฏฏๅค็็ธ็ปๅใ

Rust ็ๅๅฑ้่ฏฏๅค็ๆจกๅผ๏ผๅฆไธ๏ผ๏ผ

- ๅฆๆๅ็ๆๆ็ผบๅคฑ๏ผๅไฝฟ็จ `Option<T>`ใ
- ๅฆๆ้่ฏฏๅฏไปฅๅ็ๅฐๅค็๏ผๅไฝฟ็จ `Result<T, E>`ใ
- ๅฆๆ้่ฏฏๆ ๆณๅ็ๅฐๅค็๏ผ็บฟ็จ panicsใ
- ๅฆๆๅ็็พ้พๆง็้่ฏฏ๏ผ็จๅบๅฐฑไผไธญๆญขใ

Rust ็จๅบไธญไธ่ฌไผๅบ็ฐไธค็ง้่ฏฏ๏ผ

- ๅฏๆขๅค้่ฏฏ๏ผๅฏนๅบ่ฟๅ Result<T, E>ใ
- ไธๅฏๆขๅค้่ฏฏ๏ผๅฏนๅบ panic! ๅฎ๏ผๅฎไผ่ฐ็จ็ผ่ฏๅจๆไพ็ไปฃ็ ็ปๆญข็จๅบ่ฟ่กใ

ๆไปฅ๏ผๅฝๆฐๆไธคไธชๅธธ่ง็่ฟๅ็ฑปๅ๏ผ

    pub enum Option<T> {
        None,
        Some(T),
    }

    pub enum Result<T, E> {
       Ok(T),
       Err(E),
    }

ๆๆๅฏ่ฝๅ็้่ฏฏ็ๅฝๆฐ้ฝไผ่ฟๅไธไธชๆ ๅ็ `Result<T, E>` ๆไธพ็ฑปๅ๏ผๅฎๆไธคไธชๆณๅๅๆฐ๏ผๅๅซ็จไบไธคไธชๅๅผ๏ผ

- `Ok(value)` ่กจ็คบๆไฝๆๅ็ๆๅ๏ผๅ่ฃไบไธไธช `T` ๅๅผ๏ผ
- `Err(why)` ่กจ็คบๆไฝๅคฑ่ดฅ็ๆๅ๏ผ้ๅธธๅ panic ๅณ่๏ผๅ่ฃไบไธไธช `E` ๅๅผ๏ผ่ฟไธชๅผ้ๅธธๅๅซๅบ้็ๅ่ไฟกๆฏ๏ผ

็ปๅๆจกๅผๅน้๏ผๅฏไปฅๅฏนๅฝๆฐๅฏ่ฝๅบ็ฐ็ๅผ่ฟ่กๅคๆญ๏ผ

    if let Ok(some_value) = fun() {
        // do something with some_value
    }

่ฐ็จไธไธช่ฟๅๅผไธบ Result ็ฑปๅ็ๅฝๆฐ๏ผ้ฃไนๅฐฑ้่ฆๅค็ๅฏ่ฝ็ไธค็ง็ถๆ๏ผOk ๆ่ Err๏ผๅฆๆๅฏไปฅๅๅฎๅฝๆฐ
ๆฐธ่ฟไธไผๅบ้๏ผ้ฃไนๅฐฑๅฏไปฅ็ดๆฅ่ฐ็จ unwrap() ๆนๆณๆถ่ดนๆ่ฟๅๅผ๏ผๆ่ไฝไธบๅฝๅๅฝๆฐ็่ฟๅๅผใResult ๅฟ้
่ฆไฝๅบๅค็๏ผ็นๅซๆฏๅฏ่ฝๅบ้็ๆๅต๏ผๅฆๅ Rust ๅฐฑไธไผๅ่ฎธ็จๅบ้้ปๅฐ้่ฟ็ผ่ฏ๏ผๅนถ็ปๅบไธไธช่ญฆๅ๏ผ

    warning: unused `Result` that must be used

ไธ่ฌๅฝๆฐ็่ฟๅๅผๅจๆๅไธ่ก๏ผๅฏไปฅไธๅ return ๅ็ปๅฐพ็ๅๅท๏ผๅ ไธบๅ้ขๆฒกๆๆดๅค็่ฏญๅฅไบใ

ไปฅไธ่ฟไธชๅ็งๆผ็คบไบ Rust ็ๅค็ง็นๆง๏ผ

- Trait ๆฅๅฃ็ไฝฟ็จ๏ผ
- ็ปๆไฝ Vector3 ็ๅฎไนไธๆๅๆนๆณ็ๅฎ็ฐ๏ผ
- ไธบ Vector3 ๅฎ็ฐ่ฟ็ฎ็ฌฆ้่ฝฝ AddAssign๏ผ+=๏ผ๏ผ
- ๆๆๆ็็งปๅจไธๅบๅ๏ผๆ ้็ฑปๅ๏ผ้คไบๅญ็ฌฆไธฒๅค็ๅๅง็ฑปๅ๏ผไธ้ๆ ้ๆฐๆฎ็ฑปๅ็ๆๆๆๅค็ๅทฎๅผ๏ผ
- Vector3 ็ฑปๅไผ่ฝฌ่ฝฌ็งปๆๆๆๅฐ take_ownership() ๅฝๆฐๅ้จ๏ผ
- ๆ ้็ฑปๅ๏ผๅฆๆฐๅผใๅธๅฐๅผใๅญ็ฌฆ๏ผไปฅๅๅซ่ฟ็ฑปๅ็ๅ็ป Tuples๏ผ้ป่ฎคไผๆง่ก Copy trait ไผ ๅผ๏ผ

็จๅบ่ฟ่ก็ฏๅขไผ ้่ฟๆฅ็ๅๆฐ Args ๆฏไธไธช่ฟญไปฃๅจ๏ผไฝฟ็จ **nth()** ๆนๆณๅฏไปฅ่ทๅๅๆฐ็ &mut ๅผ็จ๏ผๆไปฅ
้่ฆไฝฟ็จ let mut ๅฃฐๆ `_args` ๅ้๏ผไนๅฏไปฅไฝฟ็จ **collect()** ๆนๆณๅฐๅถ่ฝฌๆขไธบ Vec<String> ้ๅ
็ฑปๅ๏ผๆนไพฟ้่ฟไธๆ ๆไฝใ

```rust,ignore
    use std::env::{args, Args};
    use std::{fmt::Display};

    #[allow(dead_code)]
    #[allow(unused_variables)]
    fn take_ownership<T>(v:T) { }

    fn print_scalar(i:i32) { 
        println!("Number is {}", i); 
    }


    fn main() {
        let mut _args: Args = args();
        let _arg0: String = _args.nth(0).unwrap();
        let _argc: usize = _args.len();
        println!("Hello Rust, argc {}, args[0] is {}", _argc, &_arg0);

        let b  = true;
        take_ownership(&b);  // Scalar type has a Copy trait, borrowing immutable ownership
        println!("This line is ok, boolean is {}", b);

        let i = 256;
        print_scalar(i);     // Scalar type has a Copy trait, pass by value into print_scalar()
        println!("This line is ok, number is {}", i);

        let v = Vector3{x:0.0, y:1.0, z:3.0};
        println!("This line is ok, vector is {}", v);
        take_ownership(&v);  // Non-scalar type has no Copy trait by default, ownership moved.
        // println!("This line cause error {}", v);
        //                                      ^ value borrowed here after move
    }

    struct Vector3 { 
        x: f32, 
        y: f32, 
        z:f32 
    }

    /// Inherent implementations for Vector3
    impl Vector3 {
        // call it by vector3.z()
        fn z(&self) -> f32 { self.z }

        pub fn to_string(&self) -> String {
            format!("<Vector {},{},{}>", self.x, self.y, self.z)
        }
    }

    /// Trait implementation of Display interface for Vector3
    impl Display for Vector3 {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            f.write_str(&self.to_string())
        }
    }

    /// Overloading += operator for Vector3
    impl std::ops::AddAssign<f32> for Vector3 {
        fn add_assign(&mut self, rhs: f32) {
            self.x += rhs;
            self.y += rhs;
            self.z += rhs;
        }
    }
```


## โก Printing ๆๅฐไฟกๆฏ
- https://doc.rust-lang.org/rust-by-example/hello/print.html
- https://doc.rust-lang.org/std/fmt/

ๆๅฐไฟกๆฏไฝฟ็จ็ๆฏๅจ std::fmt ๆจกๅๅฎไน็ๅฎ๏ผ

- `format!`: write formatted text to String
- `print!`: same as `format!` but the text is printed to the console (`io::stdout`).
- `println!`: same as `print!` but a newline is appended.
- `eprint!`: same as `format!` but the text is printed to the standard error (`io::stderr`).
- `eprintln!`: same as `eprint!` but a newline is appended.

ไปฅ println!() ไธบไพ๏ผๅฎ่ฐ็จ็ๆฏ io ็ๆๅฐๅฝๆฐ๏ผ

    /// # Examples
    ///
    /// ```
    /// println!(); // prints just a newline
    /// println!("hello there!");
    /// println!("format {} arguments", "some");
    /// let local_variable = "some";
    /// println!("format {local_variable} arguments");
    /// ```
    #[macro_export]
    #[stable(feature = "rust1", since = "1.0.0")]
    #[cfg_attr(not(test), rustc_diagnostic_item = "println_macro")]
    #[allow_internal_unstable(print_internals, format_args_nl)]
    macro_rules! println {
        () => {
            $crate::print!("\n")
        };
        ($($arg:tt)*) => {{
            $crate::io::_print($crate::format_args_nl!($($arg)*));
        }};
    }

ๆ ผๅผๅๆจกๆฟๅ่๏ผ

- `{}` ็ดๆฅๆๅฐๅญ็ฌฆไธฒ
- `{0}` ๆๅฎๅๆฐ็ผๅท
- `{name}` ๆๅฎๅฝๅๅๆฐ
- `{:#?}` ็พๅ่ฐ่ฏไฟกๆฏ๏ผๅๅทๅ้ข็่กจ็คบๆ ผๅผๅๅๆฐ
    - `#?` - pretty-print the Debug formatting
    - `#x` - precedes the argument with a 0x
    - `#X` - precedes the argument with a 0x
    - `#b` - precedes the argument with a 0b
    - `#o` - precedes the argument with a 0o
    - ? โ Debug
    - x? โ Debug with lower-case hexadecimal integers
    - X? โ Debug with upper-case hexadecimal integers
    - b โ Binary
    - o โ Octal
    - p โ Pointer ๆๅฐๆ้ๆๅๅฐๅ
    - x โ LowerHex
    - X โ UpperHex
    - e โ LowerExp
    - E โ UpperExp

ไฝฟ็จ็คบ่๏ผ

- println!("the PI is {:.2}", 3.141);
- println!("{:?} months in a year.", 12);
- println!("{1:?} {0:?} is the {actor:?} name.", "Slater", "Christian", actor="actor's");
- format!("{}", foo) -> "3735928559"
- format!("0x{:X}", foo) -> "0xDEADBEEF"
- format!("0o{:o}", foo) -> "0o33653337357"
- assert_eq!(format!("Hello {{}}"), "Hello {}");

ๅ้ไนๆไปฅไผๆๆ ผๅผๆๅฐๅบๆฅ๏ผๆฏๅ ไธบๅฎ็ฐไบ็ธๅบ็ Traits ๅฏน่ฑกๆนๆณ๏ผๅ่ 10. Generic Types, Traits, and Lifetimes ็ซ ่็ๅๅฎน๏ผ

- `fmt::Debug`: Uses the `{:?}` marker. Format text for debugging purposes.
- `fmt::Display`: Uses the `{}` marker. Format text in a more elegant, user friendly fashion.
- `fmt::Binary`: Uses the `{:b}` marker. Format text in binary form.
- `LowerExp`    e formatting.
- `LowerHex`    x formatting.
- `Octal`   o formatting.
- `Pointer` p formatting.
- `UpperExp`    E formatting.
- `UpperHex`    X formatting.
- `Write`   A trait for writing or formatting into Unicode-accepting buffers or streams.

็คบ่๏ผๅฎ็ฐ `fmt::Display` Trait ๅฏน่ฑก็ `fmt()` ๆนๆณ๏ผ่ฟๆ้่ฟๅ็ผ็จ็ปงๆฟๅฎ็ฐ `Debug`๏ผ

```rust,ignore
#![allow(unused)]
use std::fmt::Display;
use std::fmt::Formatter;
use std::fmt::Result;

fn announce(value: impl Display) {
    println!("Behold! {}!", value);
}

#[derive(Debug)]
struct List(i32, i32, i32);

impl Display for List {
    fn fmt(&self, f: &mut Formatter<'_>) -> Result {
        write!(f, "{{ 1st: {}, 2nd: {}, 3rd: {} }}", self.0, self.1, self.2)
    }
}

fn main() {
   let nums = List(40, 41, 42);
   announce(nums);
}
```


ไธบๆณๅๅฎ็ฐ Display ็ฑปๅ่ฐ่ฏๆนๆณ๏ผ

```rust,ignore
use std::fmt;
use std::fmt::Display;
use std::fmt::Formatter;

struct Pair<T> {
    x: T,
    y: T,
}

impl<T> Pair<T> {
    fn new(x: T, y: T) -> Self {
        Self { x, y }
    }
}

impl<T: Display + PartialOrd> Pair<T> {
    fn cmp_display(&self) {
        if self.x >= self.y {
            println!("The largest member is x = {}", self.x);
        } else {
            println!("The largest member is y = {}", self.y);
        }
    }
    fn fmt(&self, f: &mut Formatter<'_>) -> fmt::Result {
        write!(f, "({}, {})", self.x, self.y)
    }
}
fn main() {
    // let pair = Pair{ x:1, y:2};
    let pair = Pair::new( 1, 2 );
    println!("The largest char is {}", pair);
}
```

ไปฅไธ็คบ่๏ผไธ่ฝ่ฐ็จๅฎ็ฐ็ Display `fmt()` ๆนๆณ๏ผๆช็ฅๅ็ฑใ

    2  |     println!("The largest char is {}", pair);
       |                                        ^^^^ `Pair<{integer}>` cannot be formatted with the default formatter



## โก Guessing Game
- https://doc.rust-lang.org/book/ch02-00-guessing-game-tutorial.html
- https://doc.rust-lang.org/book/ch06-00-enums.html
- https://docs.rs/rand/0.7.3/rand/index.html#traits
- C++ ๅทฅ็จๅธ็ Rust ่ฟ็งปไน่ทฏ https://zhuanlan.zhihu.com/p/75385189

ๆฅไธๆฅ็็ๆฐๅญ็คบ่ไบๆดๅค็ๅๅฎน๏ผๆไปถๅ: src/main.rs

```rust,ignore
use rand::Rng;
use std::cmp::Ordering;
use std::io;

fn main() {
  println!("Guess the number!");

  let secret_number = rand::thread_rng().gen_range(1, 100);

  loop {
    println!("Please input your guess.");
    let mut guess = String::new();

    io::stdin()
      .read_line(&mut guess)
      .expect("Failed to read line");
    
    let guess: u32 = match guess.trim().parse() {
      Ok(num) => num,
      Err(_) => continue,
    };

    println!("You guessed: {}", guess);

    match guess.cmp(&secret_number) {
      Ordering::Less => println!("To small!"),
      Ordering::Greater => println!("Too large!"),
      Ordering::Equal => {
        println!("That is it!");
        break;
      }
    }
  }
}
```

็ฐๅจ็จๅบๅผๅงๅๅพๆๆๆไบ๏ผ่ฟไธๅฐ่กไปฃ็ ๅ็ไบๅพๅคไบใ

่ฆ็น๏ผ

- `prelude` ๆจกๅ๏ผ้ป่ฎคๅฏผๅฅ็ๆจกๅ๏ผ
- `rand::Rng` ไพ่ตไบๆฐๆจกๅ๏ผ้่ฆๅจ Cargo.toml ้็ฝฎ็ธๅบไพ่ต๏ผ
- `std::io` ่พๅฅ่พๅบๆจกๅ๏ผ่ฟ้็จๆฅ่ฏปๅ็จๆท่พๅฅ็ๅญ็ฌฆไธฒ๏ผ
- `std::cmp::Ordering` ๆฏ่พๆจกๅ๏ผๅผๅฅๆฏ่พๆไธพ้๏ผ็ปๅ match ๆจกๅผๅน้่ฟๅๆๆง่กๆๅฎๅๅฎน๏ผ
- ๅญ็ฌฆไธฒๅฏน่ฑกๅฎไพๅ๏ผ`String::new();`๏ผๅนถ่ฐ็จๅญ็ฌฆ็ฑปๅๆนๆณ `trim()` `parse()` ่ฟ่กๆธ็ๅ่ฝฌๆข็ฑปๅ๏ผ
- ไฟกๆฏๆๅฐๆจกๆฟไฝฟ็จไบ `{}` ไฝไธบๅ้ๅ ไฝ็ฌฆ๏ผๅจ่พๅบๅญ็ฌฆไธฒๆถ่ขซ็ๆญฃ็ๅๅฎนๆฟๆข๏ผๅถไธญๆๅนๅท่กจ็คบๆฏไธไธชๅฎ๏ผ่ไธๆฏๅฝๆฐ๏ผ
- `&` ๆไฝ็ฌฆๅทๅๅฏน่ฑกๅผ็จ๏ผ
- `match` ๆไฝๆง่กๆจกๅผๅน้๏ผๅนถ่ฟๅ็ธๅบ็ๅผ๏ผ

Cargo.toml

    [dependencies]
    rand = "0.5.5"

้ป่ฎคๆๅตไธ๏ผRust ๅฐ `prelude` ๆจกๅไธญๅฐ้็็ฑปๅๅผๅฅๅฐๆฏไธช็จๅบ็ไฝ็จๅไธญใๅฆๆ้่ฆ็็ฑปๅไธๅจ prelude ไธญ๏ผไฝ ๅฟ้กปไฝฟ็จ `use` ่ฏญๅฅๆพๅผๅฐๅฐๅถๅผๅฅไฝ็จๅใ`std::io` ๅบๆไพๅพๅคๆ็จ็ๅ่ฝ๏ผๅๆฌๆฅๆถ็จๆท่พๅฅ็ๅ่ฝใ

ๅฏๅ้ไธไธๅฏๅ้ๅฎไนๆนๅผ๏ผ

Rust

    let foo = 5; // immutable
    let mut bar = 5; // mutable
    bar = foo

C++

    int number = 0;
    const int const_number = -100;
    number = const_number;

่ฟ้ๅฏไปฅ็ๅฐ๏ผๅจ Rust ไธญ๏ผๅ้้ป่ฎคๆฏไธๅฏๅ็๏ผ้ค้ๅ ไบ `mut` ๅณ้ฎๅญ๏ผไฝๆฏๅฎไปฌ้ฝๅฑไบๅ้ใ

Rust ็ๅธธ้ๅฎไนไฝฟ็จๅณ้ฎๅญ `const`๏ผๅนถไธ้่ฆๆๅฎๆฐๆฎ็ฑปๅใๅธธ้ๅฏไปฅๅจไปปไฝ่ๅดๅๅฎไน๏ผๅนถไธๅฏไปฅๅจๅคไธชไปฃ็ ๅไธญไฝฟ็จ๏ผ็ปๅธธ้่ตๅผๆถๅฝ็ถ่ฆไฝฟ็จๅธธ้่กจ่พพๅผ๏ผไธ่ฝไฝฟ็จๅฝๆฐ็่ฟๅๅผๆ่ๆฏ่ฎก็ฎๅผใ

ๆณจๆ่ฟๆฏไธไธช let ่ฏญๅฅ๏ผ็จๆฅๅๅปบ ๅ้๏ผvariable๏ผ๏ผๅนถๆๅฎ็ปๅฎๅฐ็ญๅทๅณไพง็ๅผไธใๅจๅ้ๅๅไฝฟ็จ mut ๆฅไฝฟไธไธชๅ้ๅฏๅ๏ผๅณ `mutable`๏ผๅจ Rust ไธญ๏ผๅ้้ป่ฎคๆฏไธๅฏๅ็ `immutable`๏ผๅ้ไธๅฏๅๆง้จๅ่ฏฆ็ป่ฎจ่ฎบ่ฟไธชๆฆๅฟตใ

String::new ่ฟไธชๅฝๆฐไผ่ฟๅไธไธช String ็ๆฐๅฎไพใString ๆฏไธไธชๆ ๅๅบๆไพ็ๅญ็ฌฆไธฒ็ฑปๅ๏ผๅฎๆฏ UTF-8 ็ผ็ ็ๅฏๅข้ฟๆๆฌๅใ `::` ่ฏญๆณ่กจๆ new ๆฏ String ็ฑปๅ็ไธไธช`ๅณ่ๅฝๆฐ` associated functionใๅณ่ๅฝๆฐๆฏ้ๅฏน็ฑปๅๅฎ็ฐ็๏ผๅจ่ฟไธชไพๅญไธญๆฏ String๏ผ่ไธๆฏ String ็ๆไธช็นๅฎๅฎไพใไธไบ่ฏญ่จไธญๆๅฎ็งฐไธบ ้ๆๆนๆณ static methodใ

`read_line` ่ทๅ็จๆทๅจๆ ๅ่พๅฅไธญ้ฎๅฅๅๅฎน๏ผๅฐๅถๅญๅฅไธไธชๅญ็ฌฆไธฒไธญ๏ผๅ ๆญคๅฎ้่ฆๅญ็ฌฆไธฒไฝไธบๅๆฐใ่ฟไธชๅญ็ฌฆไธฒๅๆฐๅบ่ฏฅๆฏๅฏๅ็๏ผไปฅไพฟ read_line ๅฐ็จๆท่พๅฅ้ๅ ไธๅปใ

`&` ่กจ็คบ่ฟไธชๅๆฐๆฏไธไธช ๅผ็จ๏ผreference๏ผ๏ผๅฎๅ่ฎธๅคๅคไปฃ็ ่ฎฟ้ฎๅไธๅคๆฐๆฎ๏ผ่ๆ ้ๅจๅๅญไธญๅคๆฌกๆท่ดใๅผ็จๆฏไธไธชๅคๆ็็นๆง๏ผRust ็ไธไธชไธป่ฆไผๅฟๅฐฑๆฏๅฎๅจ่็ฎๅ็ๆ็บตๅผ็จใๅฎๆๅฝๅ็จๅบๅนถไธ้่ฆไบ่งฃๅฆๆญคๅค็ป่ใ

็ปๅ match ๆต็จๆงๅถ๏ผๆ นๆฎๅฝๆฐ็่ฟๅ `Result<T, E>` ๆไธพๅผ Ok or Err ๅค็ๆฝๅจ็้่ฏฏ๏ผ

    .expect("Failed to read line");

ๆไธพไธ match ๆจกๅผๅน้่ฏญๆณๆฏไธชๆฐๅฅ็นๆง๏ผๅพๅ Erlang ็ๆจกๅผๅน้ใ

## โก GUI Applications
- https://blog.logrocket.com/state-of-rust-gui-libraries/
- https://docs.rs/egui/latest/egui/
- https://docs.rs/iced/0.7.0/iced/
- https://docs.piston.rs/piston_window/piston_window/

|         | Production Ready |     Compatibility      |
|---------|------------------|------------------------|
| gtk-rs  | Yes              | Cross-Platform         |
| fltk-rs | Yes              | Cross-Platform         |
| iced    | No               | Cross-Platform and Web |
| relm    | No               | Cross-Platform         |
| Azul    | Yes              | Cross-Platform         |
| egui    | Older Releases   | Cross-Platform         |

ๅผๅ GUI ๅพๅฝข็้ข็จๅบๅฏไปฅ็ดๆฅไฝฟ็จ็ฐๆ็ๆธธๆๆกๆถ๏ผไพๅฆ piston_window๏ผ

```rust
extern crate piston_window;

use piston_window::*;

fn main() {
    let mut window: PistonWindow =
        WindowSettings::new("Hello World!", [512; 2])
            .build().unwrap();
    while let Some(e) = window.next() {
        window.draw_2d(&e, |c, g, _| {
            clear([0.5, 0.5, 0.5, 1.0], g);
            rectangle([1.0, 0.0, 0.0, 1.0], // red
                      [0.0, 0.0, 100.0, 100.0], // rectangle
                      c.transform, g);
        });
    }
}
```

## โก Windows Resource(ICO) 
- https://crates.io/crates/winres
- https://docs.rs/winres/0.1.11/winres/

ๅจ Windows ๅนณๅฐ๏ผไฝฟ็จ winres ๆจกๅๆฅๅค็่ตๆบๆฐๆฎ๏ผ็ๆ Windows resource (.rc) ๆไปถ็จไบ Microsoft rc.exe ็ผ่ฏๅจๆ่ GNU windres.exeใ

้่ฆ้ขๅๅฎ่ฃไปฅไธไปปไธๅทฅๅท๏ผ

- rc.exe from the Windows SDK
- windres.exe and ar.exe from minGW64

ๅจๆๅปบ่ๆฌ build.rs ไธญไฝฟ็จ `WindowsResorce::compile()` ๆนๆณ๏ผๅฎไผ็ผ่ฏ่ตๆบ๏ผๅนถๆๅฏผ Cargo ้พๆฅ่ตๆบๅฐ็จๅบๆไปถใ

```rust,ignore
// Example
if cfg!(target_os = "windows") {
    let mut res = winres::WindowsResource::new();
    res.set_icon("test.ico")
       .set("InternalName", "TEST.EXE")
       // manually set version 1.0.0.0
       .set_version_info(winres::VersionInfo::PRODUCTVERSION, 0x0001000000000000);
    res.compile()?;
}
```

ๅจ่ชๅจๆๅปบ่ๆฌ build.rs ไธญ็ป็จๅบ่ฎพ็ฝฎไธไธชๅพๆ ๏ผๅ่ deno cli ๅทฅ็จ๏ผ

```rust,ignore
  #[cfg(target_os = "windows")]
  {
    let mut res = winres::WindowsResource::new();
    res.set_icon("deno.ico");
    res.set_language(winapi::um::winnt::MAKELANGID(
      winapi::um::winnt::LANG_ENGLISH,
      winapi::um::winnt::SUBLANG_ENGLISH_US,
    ));
    res.compile().unwrap();
  }
```

ๅฏไปฅๅจ Cargo.toml ้็ฝฎๅไธชๅนณๅฐ็ไพ่ต๏ผไปฅไธๆๅๅณไบ Windows ่ตๆบ็ธๅณ้จๅ๏ผ

```rust,ignore
[target.'cfg(windows)'.build-dependencies]
winapi = "0.3.9"
winres = "0.1.11"

[target.'cfg(windows)'.dependencies]
fwdansi = "1.1.0"
winapi = { version = "0.3.9", features = ["knownfolders", "mswsock", "objbase", "shlobj", "tlhelp32", "winbase", "winerror", "winsock2"] }

[target.'cfg(unix)'.dependencies]
nix = "0.19.1"

[target.'cfg(unix)'.dev-dependencies]
exec = "0.3.1" # Used in test_raw_tty

[package.metadata.winres]
# This section defines the metadata that appears in the deno.exe PE header.
OriginalFilename = "deno.exe"
LegalCopyright = "ยฉ Deno contributors & Deno Land Inc. MIT licensed."
ProductName = "Deno"
FileDescription = "A secure runtime for JavaScript and TypeScript."
```


## โก mdBook ็ตๅญไนฆๆกๆถ
- [mdbook - Creates a book from markdown](https://crates.io/crates/mdbook)
- [Crate mdbook](https://docs.rs/mdbook/0.4.7/mdbook/)
- [mdbook User Guide](https://rust-lang.github.io/mdBook/)
- [mdBook Documentation](https://rust-lang.github.io/mdBook/)
- [mdbook-katex ๆฐๅญฆๅฌๅผๆไปถ](https://github.com/lzanini/mdbook-katex)
- [LaTex functions](https://katex.org/docs/supported.html)
- [MathJax](https://www.mathjax.org/)
- [EPUB generator](https://crates.io/crates/mdbook-epub)
- [Syntax Highlighting](https://highlightjs.org/)
- [Handlebars - a simple templating language](https://handlebarsjs.com/guide/)

The Rust Programming Language ๅฎๆน่ฟๆฌ็ตๅญไนฆๆฌ่บซๅฐฑๆฏไธไธช Cargo ๅทฅ็จ๏ผๅจ listings ็ฎๅฝไธๆไพ็้ๅฅไปฃ็ ใ

ๅฆๅค๏ผsrc ็ฎๅฝๆฏ็ตๅญไนฆๆๆกฃ๏ผไฝฟ็จ็ฑปไผผ Gitbook ็ mdBook ๆกๆถ๏ผ็ฎๅ็ๆฌ mdbook-0.4.7ใ

ๆฏๆๅ่ฝ๏ผ

- ๅฟซๆท้ฎๆฏๆ
- ๅณ้ฎๅญๆ็ดข
- ไธป้ขๆ ทๅผ
- ้ๆ่ฏญๆณ้ซไบฎ Highlight.js
- ้ๆๆฐๅญฆๅฌๅผ MathJax
- ๆจกๆฟ้ๆ Handlebars

ๅฎ่ฃไฝฟ็จ๏ผ

    git clone git@github.com:rust-lang/mdBook
    git clone git@github.com:rust-lang/book

    cargo install mdbook [--vers version-num]
    mdbook build

ๅฎ่ฃๅไผ็ผ่ฏ็ๆ mdbook ๅฝไปค๏ผๆง่ก mdbook build ็ผ่ฏ้กน็ฎๅฐฑๅฏไปฅๅจ book ็ฎๅฝ็ๆ็ตๅญไนฆใ

ๅถๅฎๅฝไปค๏ผ

- mdbook watch ็่ง markdown ๆไปถ๏ผ่ชๅจ้ๆฐ็ๆใ
- mdbook serve ๅฏๅจๆฌๅฐๅผๅๆๅกๅจ๏ผๅนถ็่งๆไปถๆนๅจ๏ผWeb ๆๅก้ป่ฎคๅฐๅ http://localhost:3000๏ผไธปๆบใ็ซฏๅฃๅฏไปฅ้็ฝฎ `--port <port>`ใ
- mdbook clean ๆธ็็ๆๆไปถใ
- mdbook init --theme ๅๅงๅๆจกๆฟๆไปถใ

ๅจ Cargo ๅทฅ็จๆ น็ฎๅฝไธญ๏ผๅฏไปฅๅๅปบไธไธช rust-toolchain ๆไปถๆฅๆๅฎๅทฅ็จไฝฟ็จ็ Rust ๅทฅๅท้พ็ๆฌ๏ผๅฆ๏ผ

    1.50.0

่ฟๆ ท๏ผๅฐฑ้่ฆๅฎ่ฃ็ธๅบ็ๅทฅๅท้พๆ่ฝ็ปง็ปญๆไฝ๏ผๅฆๅๆ็คบ้่ฏฏๆถๆฏ๏ผ

    >rustup default stable
    info: using existing install for 'stable-x86_64-pc-windows-msvc'
    info: default toolchain set to 'stable-x86_64-pc-windows-msvc'

      stable-x86_64-pc-windows-msvc unchanged - rustc 1.44.0 (49cae5576 2020-06-01)

    error: invalid channel name '1.50' in '\\?\home\book-master\rust-toolchain'
    error: caused by: invalid toolchain name: '1.50'

้กน็ฎ็ปๆ็ๆ๏ผ

    mdbook init <directory>

    book-test/
    โโโ book
    โโโ src
        โโโ title-page.md
        โโโ foreword.md
        โโโ chapter_01.md
        โโโ appendix-00.md
        โโโ SUMMARY.md

็ๆๆถ๏ผmd ๆไปถไผๅค็ๆ HTML ๅตๅฅๅฐ handlebars ๆจกๆฟๆไปถ index.hbs๏ผไฝ ๅฏไปฅๅจๅทฅ็จ็ฎๅฝไธญๅๅปบ่ชๅทฑ็ๆจกๆฟๆไปถๆฅๆฟๆขๅฎ๏ผ่ไธๆฏไฝฟ็จ mdBook ่ชๅธฆ็ใ

ๅจๅทฅ็จๆ น็ฎๅฝไธๅๅปบ theme ็ฎๅฝ๏ผๅนถไธๅฏไปฅๅๅปบไปฅไธๆไปถๆฟๆข้ป่ฎค็ๆจกๆฟๆไปถ๏ผ

- `index.hbs` is the handlebars template.
- `head.hbs` is appended to the HTML `<head>` section.
- `header.hbs` content is appended on top of every book page.
- `css/` contains the CSS files for styling the book.
    - `css/chrome`.css is for UI elements.
    - `css/general`.css is the base styles.
    - `css/print`.css is the style for printer output.
    - `css/variables`.css contains variables used in other CSS files.
- `book.js` is mostly used to add client side functionality, like hiding / un-hiding the sidebar, changing the theme, ...
- `highlight.js` is the JavaScript that is used to highlight code snippets, you should not need to modify this.
- `highlight.css` is the theme used for the code highlighting.
- `favicon.svg` and favicon.png the favicon that will be used. The SVG version is used by newer browsers.

ๆจกๆฟไธญๅฝๅไธไธๆๅฏน่ฑกๆไพ็ๆฐๆฎ๏ผ

- `<html lang="{{ language }}">` ่ฏญ่จ๏ผ้ป่ฎคๅผไธบ enใ
- `title` ๆ ้ข๏ผ็ญไปท `{{ chapter_title }} - {{ book_title }}`ใ
- `book_title` Title of the book, as specified in book.toml
- `chapter_title` Title of the current chapter, as listed in SUMMARY.md
- `path` Relative path to the original markdown file from the source directory
- `content` This is the rendered markdown.
- `path_to_root` ๅฝๅๆไปถๅฐ้กน็ฎๆ น็ฎๅฝ็็ธๅฏน่ทฏๅพใ
- `chapters` ไธไธชๅญๅธๆฐๆฎๆฐ็ป๏ผ{{chapters.[0].name}} ่ฎฟ้ฎๆฐๆฎ๏ผ{"section": "...", "name": "...", "path": "dir/markdown.md"}
- `{{#toc}}{{/toc}}` ้่ฟ toc ๆด้ฒ็ฎๅฝใ
- ้่ฟ previous ๅ next helpers ๆด้ฒไธไธ็ซ ่้พๆฅ link ๅ nameใ

SUMMARY.md ๆไปถ็จๆฅๅ่ฏ mdBook ๅฝไปค้่ฆๅๅซไฝฟ็จ็ซ ่ๅๅฎนๆไปถ๏ผๅฎๆฌ่บซๅฐฑ็ธๅฝไบ้กต้ขไธ็็ฎๅฝใ

ๅฎๆๅบๅฎ็็ฎๅฝ้พๆฅ็ปๆ๏ผ

- `# Title` ๅณ markdown ไธ็บงๆ ้ข # ๅฎไน๏ผ่ฟ้จๅไธไผๅบ็ฐๅจ็ๆ้กต้ขไธญ๏ผๅชๆฏ่ฎฉไฝ ็่ตทๆฅๆดๆๆก็ใ
- `# Part Title` ๅๅทๆ ้ข๏ผๅฏ้๏ผๅณๅจๆญฃๅผ็ซ ่ไธญๅบ็ฐ็ไธ็บงๆ ้ข๏ผไผๅจ็ฎๅฝไธญๆพ็คบ๏ผไฝๆฒกๆ่ถ็บง้พๆฅๅ่ฝใ
- Prefix Chapter ๆญฃๅผๅๅฎน็ซ ่ๅผๅงๅ็้จๅ๏ผๅฆ forewords, preface, introductions ็ญ๏ผไธ่ฝๅตๅฅ๏ผๅนถไธๅช่ฝๅจๆฐๅญ็ผๅท็ซ ่ๅๅฎนไนๅใ
- Numbered Chapter ๆญฃๅผ็ซ ่๏ผไฝฟ็จๆฐๅญ็ผๅท๏ผๅฏๅค็บงๅตๅฅ๏ผๅฏไปฅไฝฟ็จ `-` ๆ `*` ่กจ็คบไธไธชๆฐๅญ็ผๅทใ
- Suffix Chapter ้ๅฝๅๅฎน๏ผๅจๆญฃๅผ็ซ ่ๅ้ขใ
- `---` Separators ๅฏ้็ๅ้็ฌฆๅทใ
- `[Draft chapters]()` ่็จฟ็ซ ่๏ผๆณจๆ็ฉบๅๆฌๅท่กจ็คบ่ฟไธชๆก็ฎๆฒกๆๅๅฎน๏ผๅณ่็จฟ็ถๆ๏ผๅจ้กต้ขๆพ็คบ๏ผไฝๆฒกๆ้พๆฅๅ่ฝใ

SUMMARY.md ๅๅฎนๅ่๏ผ

    # Title

    [Title of the Chapter](relative/path/to/forewords.md)
    [Title of another Chapter](relative/path/to/preface.md)

    # Getting started

    - [Getting Started](getting-started.md)
        - [Installation](installation.md)
        - [Hello, World!](hello-world.md)
        - [Hello, Cargo!](hello-cargo.md)

    - [Programming a Guessing Game](guessing-game-tutorial.md)

    # Basic Concepts

    - [Common Programming Concepts](common-programming-concepts.md)
        - [Variables and Mutability](variables-and-mutability.md)
        - [Data Types](data-types.md)
        - [Functions](how-functions-work.md)
        - [Comments](comments.md)
        - [Control Flow](control-flow.md)

    - [Understanding Ownership](understanding-ownership.md)
        - [What is Ownership?](what-is-ownership.md)
        - [References and Borrowing](references-and-borrowing.md)
        - [The Slice Type](slices.md)

    - [Using Structs to Structure Related Data](structs.md)
        - [Defining and Instantiating Structs](defining-structs.md)
        - [An Example Program Using Structs](example-structs.md)
        - [Method Syntax](method-syntax.md)

    - [Enums and Pattern Matching](enums.md)
        - [Defining an Enum](defining-an-enum.md)
        - [The `match` Control Flow Operator](match.md)
        - [Concise Control Flow with `if let`](if-let.md)

    ## Separators
    ---

    ## Draft chapters are chapters without a file and thus content
    - [Draft chapter]()

    ## Appendix (appendix-00.md)

    [A - Keywords](appendix-01-keywords.md)
    [B - Operators and Symbols](appendix-02-operators.md)
    [C - Derivable Traits](appendix-03-derivable-traits.md)
    [D - Useful Development Tools](appendix-04-useful-development-tools.md)
    [E - Editions](appendix-05-editions.md)
    [F - Translations of the Book](appendix-06-translation.md)
    [G - How Rust is Made and โNightly Rustโ](appendix-07-nightly-rust.md)

ๅ่้็ฝฎ book.toml๏ผ

    [book]
    title = "The Rust Programming Language"
    author = "Steve Klabnik and Carol Nichols, with Contributions from the Rust Community"
    description = "The example book covers examples."
    src = "src"
    language = "en"

    [output.html]
    additional-css = ["ferris.css", "theme/2018-edition.css"]
    additional-js = ["ferris.js"]
    git-repository-url = "https://github.com/rust-lang/book"
    theme = "my-theme"
    default-theme = "light"
    preferred-dark-theme = "navy"
    mathjax-support = true

    [output.linkcheck]  # enable the "mdbook-linkcheck" renderer

    [build]
    build-dir = "book"
    create-missing = false

    # plugins
    [preprocessor.katex]

ๅถไธญ๏ผ[output.html] ๆไพ็้็ฝฎ้กน็ฎ่ฟๆๅพๅค๏ผๅทไฝๅ่ๆๆกฃใ

ๅฏไปฅๅจ markdown ๆไปถไธญๅๅซไปฃ็ ๆไปถๅๅฎน๏ผANCHOR: here ๆฏๅฏ้ๅ้ๆ ่ฎฐ๏ผๆ ่ฎฐๅฏไปฅๅตๅฅ๏ผ

    ```rust,noplayground
    {{#rustdoc_include ../listings/ch17-oop/listing-17-02/src/lib.rs:here}}
    {{#include ../listings/ch17-oop/listing-17-02/src/lib.rs}}
    ```

ๅฆๅค่ฟๅฏไปฅไฝฟ็จ่กๅท๏ผ้่ฆๆพ็คบๅชไบ่กๅฐฑๆๅฎ๏ผ่ rustdoc_include ๆนๅผๆๅฎ็่กๅทๆฏไปฅๆๅ ๆนๅผๆพ็คบ็๏ผ

    ```rust,noplayground
    {{#rustdoc_include ../listings/ch17-oop/listing-17-02/src/lib.rs:1}}
    {{#include ../listings/ch17-oop/listing-17-02/src/lib.rs:1}}
    // ...
    {{#include ../listings/ch17-oop/listing-17-02/src/lib.rs:5}}
    ```

ๅฉ็จ play.rust-lang.org ๆไพ็ๅจ็บฟ็ผ่ฏ่ฝๅ๏ผๅฏไปฅๅจ้กต้ข้็ฝฎ playground ไปฅ่ทๅพๅจ้กต้ขไธญๆง่กไปฃ็ ็ๅ่ฝใ

ๆ่็ดๆฅๅจ้กต้ขไธญๅตๅฅไปฃ็ ไนไธๆ ท๏ผ่ฎพ็ฝฎ ignore ไธๆไพ่ฟ่กๅ่ฝ๏ผ

    ```rust
    fn main() {
        println!("Hello, world!");
    }
    ```

    {{#playground file.rs}}

    ```rust,ignore
        println!("Hello, world!");
    ```

้็ฝฎๅฏๆง่กไปฃ็ ไธบๅฏ็ผ่พ็ถๆ๏ผ้ป่ฎคไฝฟ็จ Ace editor๏ผๅฏไปฅ้่ฟ editor ๆๅฎ๏ผ

    [output.html.playground]
    editable = true
    editor = "/path/to/editor"

็ถๅๅจไปฃ็ ๅไธญ่ฎพ็ฝฎ editable๏ผ

    ```rust,editable
    fn main() {
        let number = 5;
        print!("{}", number);
    }
    ```

ๅ่ไปฃ็ ๆไปถ๏ผ

```rust,ignore
    pub struct AveragedCollection {
        list: Vec<i32>,
        average: f64,
    }

    // ANCHOR: here
    fn main() {
        println!("Hello, world!");
    }
    // ANCHOR_END: here
```

mdBook ๅ็ฝฎไบ LaTeXT๏ผๅช้่ฆ้็ฝฎ mathjax-support ๅฐฑๅฏไปฅๆๅผๆฐๅญฆๅฌๅผๆฏๆ๏ผ

    [output.html]
    mathjax-support = true

Inline equations `\\(` and `\\)`๏ผ

    \\( \int x dx = \frac{x^2}{2} + C \\)

Block equations `\\[` and `\\]`๏ผ

    \\[ \mu = \frac{1}{N} \sum_{i=0} x_i \\]





## โก Basic Concepts & Data Types
- https://doc.rust-lang.org/book/ch03-00-common-programming-concepts.html
- Lexical structure https://doc.rust-lang.org/stable/reference/lexical-structure.html
- Rust Language Cheat Sheet https://cheats.rs

ๅบ็กๆฆๅฟต้จๅ่งฃๆไปฅไธๅๅฎน๏ผ

- Variables and Mutability ๅ้ไธๅฏๅๆง
- Data Types ๅบๆฌๆฐๆฎ็ฑปๅ
- Functions ๅฝๆฐ
- Comments ๆณจ่งฃ
- Control Flow ๆต็จๆงๅถ


### ๐ข๐ต Comments & Doc
- Documentation https://cheats.rs/#documentation
- Making Useful Documentation Comments https://doc.rust-lang.org/book/ch14-02-publishing-to-crates-io.html
- https://doc.rust-lang.org/stable/rust-by-example/meta/doc.html
- https://doc.rust-lang.org/stable/reference/comments.html


Rust ไฝฟ็จ C++ ไธๆ ท็ๆณจ่งฃ่ฏญๆณ๏ผๅๅฅๆณจ่งฃๅๅๆณจ่งฃไธค็ง๏ผ

```rust,ignore
/**
 * Some comments...
 */
fn main() {
    let lucky_number = 7; // Iโm feeling lucky today
}
```

ๅฏไปฅไฝฟ็จ /// ๆฅ่ฎพ็ฝฎๆณจ่งฃๆๆกฃ๏ผ็ปๅ cargo doc ๅฝไปค็ๆๆๆกฃ๏ผ

```rust,ignore
/// Adds one to the number given.
///
/// # Examples
///
/// ```
/// let arg = 5;
/// let answer = my_crate::add_one(arg);
///
/// assert_eq!(6, answer);
/// ```
pub fn add_one(x: i32) -> i32 {
    x + 1
}
```

้คไบๆฏๆ Markdowm ็่ฏญๆณ๏ผไปฅไธ่ฎพ็ฝฎไบไธๆกๆ ้ข `# Examples`๏ผ่ฟๆไปฅไธๅ ไธชๅๅบๅ่ฝ๏ผ

- `Panics`: ้ขๆต่ฐ็จๅฝๆฐไผๅผ่ตท panic๏ผ่ฐ็จ่ๅบ่ฏฅ็กฎ่ฎค็จๅบไธ่ฏฅ่ฐ็จๅฆๆไธๆณ็จๅบ panicใ
- `Errors`: ๆ่ฟฐๅฝๆฐ็่ฟๅ็้่ฏฏไฟกๆฏ๏ผไปฅๅๅฏ่ฝๅฏผ่ด่ฟไบ้่ฏฏ่ฟๅ็ๆกไปถ๏ผ่ฟๆ ทๅฏน่ฐ็จๆนๅพๆๅธฎๅฉใ
- `Safety`: ๅฆๆๅฝๆฐ่ฐ็จไธๅฎๅจ๏ผ้ฃไนๅบ่ฏฅ่งฃ้ไธบไปไนๅฝๆฐไธๅฎๅจ๏ผๅนถๆถต็ๅฝๆฐๆๆ่ฐ็จ่ๆฏๆ็ไธๅ้ใ

Rust ไธญ็ Outer comment ๅณๆฏๅจ cargo doc ็ผ่ฏๅไผๅบ็ฐๅจๆๆกฃไธญ็ๆณจ่งฃ๏ผInner doc comments ๅๆฏไธ้่ฆ่ขซๆๅๅฐๆๆกฃ็ๆณจ่งฃ๏ผๅๆฌ `///`ใ `//!` ๅ `/**` ๅ ็งๅฝขๅผใ

```rust,ignore
#![allow(unused)]
//! A doc comment that applies to the implicit anonymous module of this crate

pub mod outer_module {

    //!  - Inner line doc
    //!! - Still an inner line doc (but with a bang at the beginning)

    /*!  - Inner block doc */
    /*!! - Still an inner block doc (but with a bang at the beginning) */

    //   - Only a comment
    ///  - Outer line doc (exactly 3 slashes)
    //// - Only a comment

    /*   - Only a comment */
    /**  - Outer block doc (exactly) 2 asterisks */
    /*** - Only a comment */

    pub mod inner_module {}

    pub mod nested_comments {
        /* In Rust /* we can /* nest comments */ */ */

        // All three types of block comments can contain or be nested inside
        // any other type:

        /*   /* */  /** */  /*! */  */
        /*!  /* */  /** */  /*! */  */
        /**  /* */  /** */  /*! */  */
        pub mod dummy_item {}
    }

    pub mod degenerate_cases {
        // empty inner line doc
        //!

        // empty inner block doc
        /*!*/

        // empty line comment
        //

        // empty outer line doc
        ///

        // empty block comment
        /**/

        pub mod dummy_item {}

        // empty 2-asterisk block isn't a doc block, it is a block comment
        /***/

    }

    /* The next one isn't allowed because outer doc comments
       require an item that will receive the doc */

    /// Where is my item?
}
```

Within Doc Comments Explanation

    ```...```       Include a doc test (doc code running on cargo test).
    ```X,Y ...```   Same, and include optional configurations; with X, Y being ...
        rust        Make it explicit test is written in Rust; implied by Rust tooling.
        -           Compile test. Run test. Fail if panic. Default behavior.
        should_panic    Compile test. Run test. Execution should panic. If not, fail test.
        no_run          Compile test. Fail test if code can't be compiled, Don't run test.
        compile_fail    Compile test but fail test if code can be compiled.
        ignore          Do not compile. Do not run. Prefer option above instead.
        edition2018     Execute code as Rust '18; default is '15.
    #               Hide line from documentation (``` # use x::hidden; ```).
    [`S`]           Create a link to struct, enum, trait, function, โฆ S.
    [`S`](crate::S) Paths can also be used, in the form of markdown links.


### ๐ข๐ต Variables and Mutability ๅ้ไธๅฏๅๆง
- https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html
- https://doc.rust-lang.org/std/keyword.const.html

ๅ้ขๅทฒ็ป่งฃๆ่ฟ Variables and Mutability ๆฆๅฟต๏ผๅฎไปฌ้ฝๆฏๅ้๏ผ่ๅธธ้ไฝฟ็จ const ๅฎไนใ

```rust,ignore
fn main() {
    let foo = "x"; // immutable
    let foo = "y"; // override or shadowing
    // cannot assign twice to immutable variable `foo`
    // foo = "y";

    let bar;       // mutable
    bar = foo;

    println!("foo: {}", foo);
    
    const C: u32 = 100_000;
    const MAX_POINTS: u32 = 100_000;
    const HELLO: &str = "Hello, world!";
    static WORLD: &str = "Hello, world!";
    // let c: String = "it is a constant".to_owned();

    println!("foo: {} bar: {}, constant: {}", foo, bar, C);
}
```

ๆณจๆ๏ผไปฅไธไปฃ็ ็ foo ๅ้่ตๅผๅฐ bar ๆถ๏ผๆฏไผ ้ๆนๅผ๏ผๆฒกๆๅ็ๆๆๆ่ฝฌ็งป๏ผไธๅ String ๅฏน่ฑกใ

ๅจ Rust ไธญ๏ผๅ้้ป่ฎคๆฏไธๅฏๅ็๏ผ้ค้ๅ ไบ `mut` ๅณ้ฎๅญไฝฟๅ้ๅทๆๅฏๅๆง๏ผไฝๆฏๅฎไปฌ้ฝๅฑไบๅ้ใ

ๅจๅ้ๅๅไฝฟ็จ mut ๆฅไฝฟไธไธชๅ้ๅฏๅ๏ผๅณ `mutable`๏ผๅจ Rust ไธญ๏ผๅ้้ป่ฎคๆฏไธๅฏๅ็ `immutable`ใ

Rust ็จ `let` ่ฏญๅฅๆฅๅๅปบๅ้๏ผๅนถ็ปๅฎๅฐ็ญๅทๅณไพง็ๅผไธ๏ผๆณจๆ็ปๅฎ่ฟไธชๅจไฝ๏ผๅ่็ๅฝๅจๆ้จๅๅๅฎนใ

ๅ้ๅฏไปฅ่ขซ่ฆ็๏ผๅณ shadowing๏ผๅฎไธๅไบๅฐๅ้่ฎพไธบๅฏๅๅ้ใๅฆๆไธไฝฟ็จ `let` ไธบๅ้้ๆฐ่ตๅผ๏ผไผๅพๅฐ็ผ่ฏ้่ฏฏ๏ผไฝๆฏไฝฟ็จ `let` ไธบๅไธๅ้้ๆฐ่ตๅผๅฏไปฅ่ฆ็ไนๅ็ๅ้๏ผ่ฆ็็นๆง่ฎฉๅ้ๅฏไปฅๆนๅใ

่ฆ็็ๅฅฝๅคๆฏๅฏไปฅ่ฎฉๆไปฌ้ฟๅไบ่ตทไธๅ็ๅ้ๅ๏ผๅฏไปฅ็ดๆฅๅค็จไนๅ็ๅ้ๅ๏ผๅๆถไธๅฟๅณๅฟๅ้็ฑปๅ็ๆดๆน๏ผไนๆด้ซๆๅไพฟไบ็่งฃใ


Rust ็ๅธธ้ๅฎไนไฝฟ็จๅณ้ฎๅญ `const`๏ผๅนถไธ้่ฆๆๅฎๆฐๆฎ็ฑปๅใๅธธ้ๅฏไปฅๅจไปปไฝ่ๅดๅๅฎไน๏ผๅนถไธๅฏไปฅๅจๅคไธชไปฃ็ ๅไธญไฝฟ็จ๏ผ็ปๅธธ้่ตๅผๆถๅฝ็ถ่ฆไฝฟ็จๅธธ้่กจ่พพๅผ๏ผไธ่ฝไฝฟ็จๅฝๆฐ็่ฟๅๅผๆ่ๆฏ่ฎก็ฎๅผใ

Rust ๅธธ้ๅฝๅ่ง่ๆฏ๏ผๅจๅญๆฏๅคงๅ๏ผๅ่ฏ้ดไปฅไธๅ็บฟๅ้๏ผๆฐๅญ็ฑปๅไธบไบๆนไพฟ้่ฏปไนๅฏไปฅไฝฟ็จไธๅ็บฟๅๅฒใ

ไธบๆดไธช็จๅบไธญไฝฟ็จ็ๅผ่ฎพไธบๅธธ้๏ผๆๅฉไบไผ ้่ฏฅๅผ็ๅซไน็ปๆชๆฅ็ไปฃ็ ็ปดๆคไบบๅใไฝฟ็จๅธธ้ไพฟไบไฟฎๆน๏ผๅช้ไฟฎๆนไธไธชๅธธ้๏ผไพฟๅฏๆดๆฐ็จๅบไธญๆๆไฝฟ็จ่ฏฅๅธธ้็ๅผใ

ๅ้ไธๅธธ้็ๅผๅๆฏ่พ๏ผ

- ็ธๅ็น๏ผ้ฝไธๅฏๅ
- ไธๅ็น๏ผ
    - ๅธธ้ไธๆฏ้ป่ฎคไธๅฏๅ๏ผ่ๆฏไธ็ดไธไผๆนๅใ
    - ๅ้ไฝฟ็จ `let` ๅฃฐๆ๏ผๅธธ้ไฝฟ็จ `const` ๅฃฐๆ๏ผไธๅฟ้กปๆๅฎๅธธ้็็ฑปๅใ
    - ๅธธ้ๅฏไปฅๅจไปปๆไฝ็จๅ้ๅฃฐๆใ
    - ๅธธ้ๅช่ฝ่ฎพ็ฝฎไธบๅธธ้่กจ่พพๅผ๏ผ่ไธ่ฝ่ฎพ็ฝฎไธบๅฝๆฐ่ฐ็จ็็ปๆๆๅช่ฝๅจ่ฟ่กๆถ่ฎก็ฎ็ไปปไฝๅถไปๅผใ


### ๐ข๐ต Data Types ๅบๆฌๆฐๆฎ็ฑปๅ
- https://doc.rust-lang.org/book/ch03-02-data-types.html
- https://doc.rust-lang.org/stable/reference/types.html
- https://doc.rust-lang.org/stable/reference/types/tuple.html
- https://doc.rust-lang.org/stable/reference/types/array.html
- https://doc.rust-lang.org/rust-by-example/types.html
- https://doc.rust-lang.org/std/iter/trait.IntoIterator.html#impl-IntoIterator-23
- https://doc.rust-lang.org/stable/std/primitive.unit.html
- [Rust Language Cheat Sheet](https://cheats.rs/#strings-chars)
- [Tokens](https://doc.rust-lang.org/stable/reference/tokens.html)
- [The Rust Programming Language - Data Types](ch03-02-data-types.md)

Rust ็จๅบๆฏไธชๅ้ใ้กนๅๅผ้ฝๆไธไธช็ฑปๅ๏ผ็ฑปๅๅฎไนไบไฟๅญ่ฏฅๅผ็ๅๅญๅฆไฝ่งฃ้๏ผไปฅๅๅฏไปฅๅฏน่ฏฅๅผๆง่กไปไนๆไฝใ

ไปฅไธๆฏๆๆกฃ็ปๅบ็็ฑปๅๅ่กจ๏ผ

-  types:
    - `Boolean` โ `true` or `false`
    - `Numeric` โ integer and float
    - `Textual` โ `char` and `str`
    - `Never` โ `!` โ a type with no values
- Sequence types:
    - `Tuple`
    - `Array`
    - `Slice`
- User-defined types:
    - `Struct`
    - `Enum`
    - `Union`
- Function types:
    - `Functions`
    - `Closures`
- Pointer types:
    - `References`
    - `Raw pointers`
    - `Function pointers`
- Trait types:
    - `Trait objects`
    - `Impl trait`


ไปปไฝ่ฏญ่จ้ฝๆๅบๆฌๆฐๆฎ็ฑปๅๅๅคๅๆฐๆฎ็ฑปๅ๏ผRust ไนไธไพๅค๏ผ

- `bool` ๅธๅฐๅผ๏ผtrue or falseใ
- `[u/i][8/16/32/64/128]` ๆ ็ฌฆๅทใ็ฌฆๅทๆดๆฐใ
- `usize` `isize` ๅคงๅฐๅๅณไบ็จๅบ่ฟ่กๆถๆบๅจ็ๅญ้ฟ็ๆดๅ๏ผๆๅฏ่ฝไธบ 4 ๅญ่ๆ 8 ๅญ่ใ
- `f[32/64]` ๆตฎ็นๆฐ๏ผ้ป่ฎค็ๆตฎ็น็ฑปๅๆฏ `f64`๏ผๅฎไปฌ้ตๅพช IEEE-754 ่ง่ใ
- `char` ๅญ็ฌฆ๏ผRust ็ณป็ปไฝฟ็จ Unicode๏ผๆไปฅไธไธชๅญ็ฌฆๅ  4 ๅญ่๏ผ้่ฟ `std::mem::size_of::<char>()` ็กฎ่ฎคใ
- `str` ๅญ็ฌฆไธฒๆฏไธ็งๅ็็ฑปๅ๏ผๅ็็ฑปๅๅจ็ผ่ฏๆ้ดๅฟ้กปๆฏๅผ็จ็ฑปๅ๏ผๅฏ็กฎๅฎๅคงๅฐ็ใ

ๆฏ็งๆดๅๅช่ฝ่ฃไธๅบๅฎๅคงๅฐ็ๆฐๅญ๏ผ่ถๅบไบๆดๅ็่ๅดๅไผๅ็ๆบขๅบ๏ผ็ผ่ฏๆ Rust ๆๅบไธไธช้่ฏฏๆ็คบๆฐๆฎๆบขๅบใ


Rust ๆฏๆๆ็ฌฆๅทๆดๆฐๅๆ ็ฌฆๅทๆดๆฐ๏ผ

    |  Length | Signed | Unsigned |
    |---------|--------|----------|
    | 8-bit   | i8     | u8       |
    | 16-bit  | i16    | u16      |
    | 32-bit  | i32    | u32      |
    | 64-bit  | i64    | u64      |
    | 128-bit | i128   | u128     |
    | arch    | isize  | usize    |

ๅฆๆๆฒกๆๆๅฎๆฐๆฎ็ฑปๅ๏ผRust ้ป่ฎคไฝฟ็จ i32๏ผ่ฟไธช็ฑปๅ้ๅธธๆฏๆง่ฝๆๅฅฝ็ใ


Rust ็ณป็ปไธญๅฐๅไธ็ๅผ็งฐไธบ Scalar Types ๆๅๅง็ฑปๅ๏ผๅฆ integers, floating-point numbers,
Booleans, characters ็ญๅบ็กๆฐๆฎ็ฑปๅใ

ๆฏ่พไธไธๅบๆฌๆฐๆฎ็ฑปๅ็ไธ C++ ่ฏญๆณๅทฎๅผ๏ผ

C++

    bool boolean = true;
    std::uint8_t u8 = 0;
    std::int16_t i16 = 0;
    std::size_t size = 0;
    float real = 0;
    double precise_real = 0;
    char character = 'A';
    const char* c_string = "Hello, world";
    std::string string = "Hello, world";

Rust

    let boolean: bool = true;
    let uint8: u8 = 0;
    let int16: i16 = 0;
    let size: usize = 0;
    let real: f32 = 0;
    let precise_real: f64 = 0;
    let character: char = '๐ป';
    let str_ref: &str = "Hello, world";
    let string: String = "Hello, world".to_owned();

    // Suffixed literals
    let mut _mutable_integer = 7i32;

    // `NanoSecond` is a new name for `u64`.
    type NanoSecond = u64;

    // Use an attribute to silence warning.
    #[allow(non_camel_case_types)]
    type u64_t = u64;

Rust ็ฎๅไบ็ฑปๅๅๅญ่กจ่พพ๏ผๅนถไธไฝฟ็จ็ฑปไผผ TypeScript ไธๆ ท็็ฑปๅๅฃฐๆ่ฏญๆณๆ ผๅผ๏ผๅจๅๅทๅ้ขๅฎๆฐๆฎ็ฑปๅใ

Numbers ็ๅญ้ข้ๆไปฅไธๅ ็ง่กจ็คบ๏ผ

    | Number literals* |   Example   |
    |------------------|-------------|
    | Decimal integer  | 98_222      |
    | Hex integer      | 0xff        |
    | Octal integer    | 0o77        |
    | Binary integer   | 0b1111_0000 |
    | Byte(u8)         | bโAโ        |
    | Floating-point   | 123.0E+77   |

ๅ่ฟๅถไธญ _ ไธ่ฌ่ขซๅฝไฝๅๅ็ฌฆใ

Tuple ๅ็ป็ฑปๅๅฐฑๆฏไธไธชๅ็ป็ฑปๅ๏ผๅฏไปฅๅฐๅคไธชไธๅ็ฑปๅ็ๅผๅฝ็ฑปๅฐไธไธช็ปๅ็ฎก็๏ผไธๆฆๅฎไนๅฅฝๅ็ป๏ผๅฎ็ๅคงๅฐ
ๅฐฑไธ่ฝๅๆนๅใๆฒกๆไปปไฝๅผ็ๅ็ปๅซๅๅไฝ็ฑปๅ๏ผ่กจ็คบๆนๅผๆฏ่พ็นๆฎ๏ผ`()` ็ฑปๅ๏ผไนไปๆไธไธชๅผ `()`ใๅธธๅธธ
ๅจๅฝๆฐไธญ็จๆฅ่กจ็คบๆฒกๆๅถๅฎๆๆไน็่ฟๅๅผ๏ผ้ๅธธๆฏๅฝๆฐ็้ๅผ่ฟๅๅผ๏ผๅณๆฒกๆๆๅฎ่ฟๅๅผ `-> ...` ็ๅฝๆฐ
ไผ่ชๅจ่ฟๅ็ๅผใ

็นๆฎ็ๆฐๅผ่กจ่พพ่ฟๆ 1i32 ๆ 2usize ่ฟๆ ท็ๅฝขๅผใ

ๅ่ๅฆไธ๏ผ

```rust,ignore
fn return_unit_long() -> () {}
fn return_unit_short() {}

fn returns_i64() -> i64 {
    1i64
}
fn returns_unit() {
    1i64;
}

let is_i64 = {
    returns_i64()
};
let is_unit = {
    returns_i64();
};
```

Rust ๆไธค็งๅๅงๅคๅ็ฑปๅ๏ผTuples ๅ Array๏ผ

```rust,ignore
fn main() {
    // let a = [3; 5];
    // let a = [3, 3, 3, 3, 3];
    // let a: [i32; 5] = [1, 2, 3, 4, 5 ];
    let months = [
        "January", "February", "March", // Spring
        "April", "May", "June",         // Summer
        "July", "August", "September",  // Fall & Winter
        "October", "November", "December"];

    let x: (i32, f64, u8) = (500, 6.4, 1);

    let five_hundred = x.0;
    let six_point_four = x.1;
    let one = x.2;

    println!("a is: {:?} {:?}", months, (five_hundred, six_point_four, one));
}
```

ๆฐ็ปไฝฟ็จ `[T; _]` ๆ `[T]` ๅฎไน๏ผไธๅ็บฟๅฏไปฅๆๅฎไธไธช้ฟๅบฆ๏ผๅถไธญๆฐ็ป่กจ่พพ `[Value; len]` ๆฏ้่ฟ
ๅฎๅฎไนๅฎ็ฐไธไธชๅฎ้ฟๆฐ็ป๏ผๅฟ้กปๅจๅฃฐๆๆถๆๅฎ็ฑปๅๅๅคงๅฐใ

ๆฐ็ป็ๅผ็จๅฏไปฅ็ดๆฅ for ๆไธพ๏ผ่ฟ็งๆนๅผ้ฟๅบฆ้ๅถไธบ std::array::LengthAtMost32 ๏ผๅ ไธบ `&[T; N]`
็ฑปๅ้ป่ฎคๅฎ็ฐ็ IntoIterator ๅชๆไพไบ่ฟไธช้ฟๅบฆ็ๅฎ็ฐ๏ผไฝฟ็จ `iter()` ๆนๆณ่ทๅๆฐ็ปๅฏน่ฑกไธ็่ฟญไปฃๅจ
่ฟ่กๆไธพๅไธๅๆฐ็ป้ฟๅบฆ้ๅถใ

```rust,ignore
let arr = [1; 33];
// println!("LengthAtMost32: {:?}", arr);
// for i in &arr {
//     print!("{}", i);
// }
for (index, value) in arr.iter().enumerate() {
    print!("{}-{}", index, value);
}
```

ๆฅ็่ฟญไปฃๅจๆๆกฃๅถไธญไธคๆกๅฎ็ฐ๏ผ

    impl<'a, T, const N: usize> IntoIterator for &'a [T; N]
    impl<'a, T, const N: usize> IntoIterator for &'a mut [T; N]


ๆฐ็ปๅฏไปฅ้่ฟไธๆ ่ฎฟ้ฎๅ็ด ๏ผ่ฟ็่ฎฟ้ฎไธ่ฝๅจ็ผ่ฏๆๆฃๆฅๅบๆฅ๏ผไฝ่ฟ่กๆถไผๅบ้ `index out of bounds`ใ

Rust ็็ฑปๅ็ณป็ปๆฏๅคๆ็๏ผ้คไบ่ฟไบๅบๆฌ็ฑปๅ๏ผ่ฟๆๅถๅฎ้ซ็บง็ฑปๅ๏ผๅ่ Advanced Featuresใๅณไฝฟไธไบ
ๆ นๆฌๆ ่ฟๅๅผ็ๆๅต๏ผๆฏๅฆ็บฟ็จๅดฉๆบใbreak ๆ continue ็ญ่กไธบ๏ผไน็บณๅฅ็ฑปๅ็ณป็ป๏ผๅซๅ never ็ฑปๅใ 


Rust ๆฒกๆ่ฟ่กๆถ็ GC ่กไธบ๏ผๅๅญ้ฆๅ็ฑ็ผ่ฏๅจๆฅๅ้๏ผRust ไปฃ็ ่ขซ็ผ่ฏไธบ LLVM IR๏ผๅถไธญๆบๅธฆๆฅๅๅญ
ๅ้็ไฟกๆฏใ็ผ่ฏๅถ้่ฆไบๅ็ดๅฐ็ฑปๅ็ๅคงๅฐ๏ผๆ่ฝๅ้ๅ็็ๅๅญ๏ผ

Rust ไธญ็ปๅคง้จๅ็ฑปๅ้ฝๆฏๅจ็ผ่ฏๆๅฏ็กฎๅฎๅคงๅฐ็็ฑปๅ๏ผๅฆๅ็็ฑปๅๆดๆฐ็ฑปๅ u32 ๅบๅฎๆฏ 4 ไธชๅญ่๏ผๅฏไปฅๅจ
็ผ่ฏๆ็กฎๅฎๅคงๅฐ็็ฑปๅใ

Rust ไธญไนๆ DST - Dynamic Sized type ๆฏๅฆ๏ผๅญ็ฌฆไธฒๅญ้ข้็ฑปๅ str๏ผๆณจๆไธๆฏ &strใ็ผ่ฏๅจไธ่ฝ
ไบๅ็ฅ้็จๅบไธญไผๅบ็ฐไปไนๆ ท็ๅญ็ฌฆไธฒ๏ผๆไปฅๅฏนไบ็ผ่ฏๅจๆฅ่ฏด๏ผstr ็ฑปๅ็ๅคงๅฐๆฏๆ ๆณ็กฎๅฎ็๏ผไนๆ ๆณ่ฟ่กๆดๆน๏ผ
ๅฐฑๅๅธธ้ไธๆ ทใisize ๅ usize ไนๆฏๆ นๆฎ็จๅบ่ฟ่กๅนณๅฐๅทฎๅผๅคงๅฐไธๅ๏ผไธ็ผ่ฏๆ่ฟ่ก็ๆบๅจๆ ๅณใ



### ๐ข๐ต Type Conversions ็ฑปๅ่ฝฌๆข
- https://doc.rust-lang.org/rust-by-example/conversion/try_from_try_into.html
- https://doc.rust-lang.org/rust-by-example/conversion/string.html
- The Rustonomicon - Type Conversions https://doc.rust-lang.org/nightly/nomicon/conversions.html

Primitives Casting

```rust,ignore
let decimal = 65.4321_f32;

// Error! No implicit conversion
// let integer: u8 = decimal;

// Explicit conversion
let integer = decimal as u8;
let character = integer as char;

// Error! There are limitations in conversion rules. A float cannot be directly converted to a char.
// let character = decimal as char;

// 1000 already fits in a u16
println!("1000 as a u16 is: {}", 1000 as u16);

// literal out of range for `u8`
// println!("1000 as a u8 is : {}", 1000 as u8);

// -1 + 256 = 255
println!("  -1 as a u8 is : {}", (-1i8) as u8);

// Unless it already fits, of course.
println!(" 128 as a i16 is: {}", 128 as i16);

// Since Rust 1.45, the `as` keyword performs a *saturating cast* when casting from float to int.  
// If the floating point value exceeds the upper bound or is less than the lower bound, the returned value will be equal to the bound crossed.

// 300.0 is 255
println!("300.0 is {}", 300.0_f32 as u8);
// -100.0 as u8 is 0
println!("-100.0 as u8 is {}", -100.0_f32 as u8);
// nan as u8 is 0
println!("nan as u8 is {}", f32::NAN as u8);

// This behavior incures a small runtime cost and can be avoided with unsafe methods, however the results might overflow and return **unsound values**. Use these methods wisely:
unsafe {
    // 300.0 is 44
    println!("300.0 is {}", 300.0_f32.to_int_unchecked::<u8>());
    // -100.0 as u8 is 156
    println!("-100.0 as u8 is {}", (-100.0_f32).to_int_unchecked::<u8>());
    // nan as u8 is 0
    println!("nan as u8 is {}", f32::NAN.to_int_unchecked::<u8>());
}
```

ๆๆๅๅงๆฐๆฎ็ฑปๅ้ฝๅฎ็ฐไบ `ToString` ๆฅๅฃๆนๆณ๏ผ่ฟๆฏ้่ฟ Blanket Implementations ๅฎ็ฐ็๏ผ

```rust,ignore
#[stable(feature = "rust1", since = "1.0.0")]
impl<T: fmt::Display + ?Sized> ToString for T {
    // A common guideline is to not inline generic functions. However,
    // removing `#[inline]` from this method causes non-negligible regressions.
    // See <https://github.com/rust-lang/rust/pull/74852>, the last attempt
    // to try to remove it.
    #[inline]
    default fn to_string(&self) -> String {
        use fmt::Write;
        let mut buf = String::new();
        buf.write_fmt(format_args!("{}", self))
            .expect("a Display implementation returned an error unexpectedly");
        buf
    }
}
```

ไปๅญ็ฌฆ่ฝฌๆขๆฐๅผ๏ผไฝฟ็จ `FromStr` ๆฅๅฃๆไพ็ `from_str(src: &str)` ๆนๆณ๏ผๆฏๆๅญ็ฌฆไธฒๆ ผๅผ๏ผ

- '3.14'
- '-3.14'
- '2.5E10', or equivalently, '2.5e10'
- '2.5E-10'
- '5.'
- '.5', or, equivalently, '0.5'
- 'inf', '-inf', 'NaN'

```rust,ignore
use std::str::FromStr;

let s = "5";
let x = i32::from_str(s).unwrap();

assert_eq!(5, x);
```

ไป str ่งฃๆๆฐๅผ๏ผ

```rust,ignore
let four: u32 = "4".parse().unwrap();
assert_eq!(4, four);

// Using the 'turbofish' instead of annotating four:
let four = "4".parse::<u32>();
assert_eq!(Ok(4), four);

let nope = "j".parse::<u32>();
assert!(nope.is_err());
```

Conversion between `str` and  `String`

```rust,ignore
let s = String::from("foo");
assert_eq!("foo", s.as_str());

let my_str = "bar";
let my_string = String::from(my_str);
```

้่ฟ Trait ๆฉๅฑ๏ผๅพๅฎนๆๅฎ็ฐ่ชๅฎไน็ฑปๅ็่ฝฌๆข๏ผๅช้่ฆๅฎ็ฐ `std::convert::From`: 

```rust,ignore
use std::convert::From;

#[derive(Debug)]
struct Number {
    value: i32,
}

impl From<i32> for Number {
    fn from(item: i32) -> Self {
        Number { value: item }
    }
}

fn main() {
    let num = Number::from(30);
    println!("My number is {:?}", num);
}
```

ๅฎ็ฐ่ฝฌๆขๆฅๅฃ  `std::convert`๏ผ

```rust,ignore
pub trait Into<T> {
    pub fn into(self) -> T;
}
pub trait From<T> {
    pub fn from(T) -> Self;
}
```

็คบ่ Number ็ฑปๅ็่ฝฌๆขๆนๆณๅฎ็ฐ๏ผ

```rust,ignore
use std::convert::From;

#[derive(Debug)]
struct Number {
    value: i32,
}

impl Into<i32> for Number {
    fn into(self) -> i32 {
        self.value
    }
}
impl From<i32> for Number {
    fn from(value: i32) -> Self {
        Number { value }
    }
}
// impl Into<Number> for i32 {
//     fn into(self) -> Number {
//         Number{value:self}
//     }
// }

fn main() {
    let int = 5;
    // Try removing the type declaration
    let num: Number = int.into(); // exec Form<i32> for Number
    let val: i32 = num.into();    // exec Into<i32> for Number
    let num= Number::from(int);   // exec Form<i32> for Number
    
    // no conversion
    let num= Number::from(Number{value:int});
}
```

ๅฎไปฌไบไธบ้่ฝฌๆข๏ผๅฐฝ้้ฟๅๅปๅฎ็ฐ Into ่ๆฏๅฎ็ฐ From๏ผๅ ไธบๅฎ็ฐ From ๅฐฑ่ชๅจไธๆฝๅญๅฎ็ฐ Into๏ผ่ฟๅพ็ไบๆ ๅๅบ็ blanket implementationใ

ๅจๆณๅๅฝๆฐไธ็ปๅฎๆถ๏ผๆด้ๅไฝฟ็จ Into ่ไธๆฏ From๏ผๅช่ฆ็กฎไฟๅฎ็ฐ Into ็็ฑปๅๅฐฑๅฏไปฅไฝฟ็จใ

็คบ่ไปฃ็ ่ฐ็จ i32.into() ๆนๆณๆง่ก่ฝฌๆข๏ผ่ฟ้ไธบ Number ็ฑปๅๅฎ็ฐไบ `From<i32>` ่ฝฌๆขๆฅๅฃ๏ผๆไปฅไผๆง่ก from() ๆนๆณๅฐ i32 ่ฝฌๆขไธบ Number ็ฑปๅใ

็ฑปไผผ็็ฑปๅ่ฝฌๆขๆฉๅฑๆนๆณ๏ผ

- std::convert::TryFrom try_from();
- std::convert::TryInto try_into();

TryInto ๅ TryForm ็ๅทฎๅซๅจไบๅฎไปฌๅฏไปฅๅ่ฎธ่ฝฌๆขๅคฑ่ดฅ๏ผ่ From ๅ Into ไธๅ่ฎธใ




### ๐ข๐ต Control Flow ๆต็จๆงๅถ
- https://doc.rust-lang.org/book/ch03-05-control-flow.html
- https://doc.rust-lang.org/stable/reference/expressions/if-expr.html
- https://doc.rust-lang.org/stable/reference/expressions/loop-expr.html
- https://doc.rust-lang.org/reference/expressions/if-expr.html
- Range Expressions https://doc.rust-lang.org/stable/reference/expressions/range-expr.html
- Rust by Example - Flow of Control https://doc.rust-lang.org/stable/rust-by-example/flow_control.html

Rust ็ๆต็จๆงๅถๅๆฌ๏ผ

- if ๆกไปถๆงๅถ๏ผๅๆฌ if let๏ผ
- loop ๅพช็ฏ๏ผ
- while ๅพช็ฏ๏ผๅๆฌ while let๏ผ
- for ๅพช็ฏ๏ผๅๆฌ for range๏ผ
- match ๆจกๅผๅน้๏ผ

็ปๅธ if-else ่ฏญๆณ๏ผๆณจๆๆกไปถ้จๅไธไฝฟ็จๆฌๅท๏ผ

```rust,ignore
fn main() {
    let number = 6;

    if number % 4 == 0 {
        println!("number is divisible by 4");
    } else if number % 3 == 0 {
        println!("number is divisible by 3");
    } else if number % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }
}
```

ไฝฟ็จ if let ่ฏญๆณ็ๆกไปถไธญๅฏไปฅไฝฟ็จ่ตๅผ่ฏญๆณ๏ผ

```rust,ignore
let mut count = 0;
if let state = coin {
    println!("State quarter from {:?}!", state);
} else {
    count += 1;
}
```

้คไบ็ปๅธ if-else ่ฏญๆณ๏ผ่ฟๅฏไปฅๅไธๅ่ฟ็ฎ็ฌฆไธๆ ทไฝฟ็จ if ่ฏญๅฅ๏ผ

```rust,ignore
fn main() {
    let number = 0;
    let number = if number>0 { 5 } else { 6 };
    println!("The value of number is: {}", number);
}
```

่ฟ็ง if ่ฏญๆณๅฎ็ฐๆกไปถๆจกๅผๅน้่ตๅผ๏ผ่ฏญๅฅๅๅฏไปฅ่ฟๅๅผๆฏ Lisp ่ฏญ่จ้ฆๅๅผๅฅ็็นๆง๏ผ

```rust,ignore
let (status_line, filename) = if buffer.starts_with(get) {
    ("HTTP/1.1 200 OK\r\n\r\n", "hello.html")
} else {
    ("HTTP/1.1 404 NOT FOUND\r\n\r\n", "404.html")
};
```

ๆณจๆ๏ผRust ไธๅฏนๆกไปถ้จๅ่ฟ่ก็ฑปๅ่ฝฌๆข๏ผๅ ๆญค่กจ่พพไธญ้่ฆไธไธช bool ๅผไฝไธบๅคๆญๆกไปถ๏ผไฝฟ็จๅถๅฎๅผๆฏไธ็ง้่ฏฏใ

Rust ็ๆฐ็ปๅฏน่ฑกๆฏๅฏ่ฟญไปฃ็๏ผๅช้่ฆ้่ฟ `itor()` ๆนๆณ่ทๅ็ธๅบ็่ฟญไปฃๅจๅณๅฏ๏ผ

```rust,ignore
fn main() {
    let a = [10, 20, 30, 40, 50];

    for element in a.iter() {
        println!("the value is: {}", element);
    }
}
```

Rust ๆฏๆ Range ่ฏญๆณ๏ผๅฏนๅบๆจกๅ std::ops::Range๏ผ

    let s = String::from("hello world");
    let hello = &s[0..5];   // std::ops::Range<{integer}>
    let world = &s[6..=10]; // std::ops::RangeInclusive<{integer}>
    let slice = &s[..2];    // std::ops::RangeTo<{integer}>
    let slice = &s[3..];    // std::ops::RangeFrom<{integer}>

ๅฏไปฅไฝฟ็จไปฅไธๆนๅผ็ๆๆฐ็ป๏ผ`rev()` ๅฝๆฐๅ่ฝฌ่ฟญไปฃ้กบๅบ๏ผ

```rust,ignore
fn main() {
    for number in (1..4).rev() {
        println!("{}!", number);
    }
    println!("LIFTOFF!!!");
}
```

Range ็ๆ ผๅผๆฏ `a..[b]`๏ผไธ้ขไพๅญๅ ๆฌๅทๆฏๅ ไธบ่ฆไฝฟ็จ่ฟญไปฃๅจ็ๅ่ฝฌๆนๆณ๏ผb ๆฏๅฏไปฅ็็ฅ็ใ

```rust,ignore
fn main() {
    for element in 1.. {
        println!("the value is: {}",  element);
    }
}

ไฝฟ็จ loop ๅพช็ฏ๏ผๅฏไปฅ้่ฟ `break` ่ฏญๅฅ่ฟๅไธไธชๅผ๏ผๅนถไฝไธบ่ฏญๅฅ่กจ่พพๅผ่ตๅผ็ปๅ้๏ผ

```rust,ignore
fn main() {
    loop {
        println!("loop once!");
        break;
    }
            
    let mut counter = 0;

    let result = loop {
        counter += 1;

        if counter == 10 {
            break counter * 2;
        }
    };

    println!("The result is {}", result);
}
```

ๅพช็ฏไฝไธญ็ดๆฅ break ่กๆ ไฝ็ฝฎๆๅฎ็ๅคๅฑๅพช็ฏ๏ผ

```rust,ignre
#![allow(unreachable_code)]

fn main() {
    'outer: loop {
        'inner: loop {
            println!("Entered the inner loop");

            // This breaks the outer loop
            break 'outer;
        }

        println!("This point will never be reached");
    }
}
```

ไฝฟ็จ while ๆกไปถๅพช็ฏ๏ผ

```rust,ignore
fn main() {
    let mut number = 3;
    while number != 0 {
        println!("{}!", number);
        number -= 1;
    }
    println!("LIFTOFF!!!");
}
```



## โก Features ็น่ฒๆฆๅฟต
- crate tree https://zhuanlan.zhihu.com/p/105181947
- Introducing MIR https://blog.rust-lang.org/2016/04/19/MIR.html
- ใๅฏ่งๅใRust่ฏญ่จ็ผ่ฏๅจๅๅนดๅ่ฟ https://www.bilibili.com/video/av43956267/

Rust internal compiler pipeline๏ผ

- Rust Sources
    - Parsing & Desugaring
- HIR - High-level intermediate representation
    - Type checking
- MIR - Middle-level intermediate representation
    - Borrow checking
    - Optimization
- LLVM IR - Low-level Machine intermediate representation
    - Optimization
- Machine Code

Rust ๆฏไธ้จ็ผ่ฏๅ่ฏญ่จ๏ผๅจ Rust ็ไธ็้๏ผ็ฌ็ซๅฎๆ็ผ่ฏ็ๆๅฐๅๅๅซๅ crate๏ผๅฎๆฏ cargo ็ฎก็็ๆๅฐ็ปๆ๏ผไนๆฏ rustc ็ฎก็็ๆๅคง็็ปๆใ

ๆฏ crate ๅคง็็ปๆไพๆฌกๆฏ package ๅ workspace๏ผ่ฟไบๆฏ cargo ๅค็็ใ

Rustc ๅฝไปคๆฏๆฌกๆง่กไปไธไธช crate ็ๆๅคๅฑ็ๆบๆไปถ็ๆ็ฎๆ ๆไปถ๏ผcrate ็ฑ่ณๅฐไธไธชๆบๆไปถ็ปๆ๏ผ้ๅธธๆบๆไปถๆฉๅฑๅไธบ rsใ

crate ๆๆ ็ถ็ปๆ็ฎก็๏ผๆ ไธ็่็น็งฐไธบ item๏ผ็ฑปๅๆๅค็งใ็ผ่ฏๅจ่ฏปๆไฝ ๆไพ็่ฟๆฃตๆ ๏ผ็ถๅๆๅฎ็ๆ crate ็ฑปๅๆๆๅฎ็ๆ ผๅผ็็ฎๆ ๆไปถใๆๅธธ็จ็ๆฏ rlib ๅ bin ไธค็ง๏ผๅๅซๆฏๅฏ้็จ็ Rust ้ๆๅบๆไปถๅๅฏๆง่ก็จๅบใ

็ฌฌไธ็ฑปๆก็ฎๅฐฑๆฏๆจกๅๆก็ฎ๏ผๅฎๆฏๅฎๆฏ็จๆฅ็ป็ปๅถไปๆก็ฎ็๏ผ็ฑปไผผๆไปถๅคนๅฑ็บงใไธ็งๅๆณๆฏๅๅฎน็ดๆฅๅๅจ่ฑๆฌๅทๅใๅฆไธ็งๅๆณๆฏ็ฑๅฎๆ นๆฎไธๅฅ่งๅๆๅ็ฃ็ไธ็ๅฆไธไธชๆไปถ๏ผไฝไธบๅฎ็ๅๅฎนใ

็ฌฌไบ็ฑปๆก็ฎ็จๆฅๅฎไนไธไบ็จๆทๅฎไน็ฑปๅ๏ผไธป่ฆๆ็ปๆไฝๅฎไนใๆไธพไฝๅฎไนใ่ๅไฝๅฎไน่ฟๅ ็งใ็ปๆไฝใๆไธพไฝใ่ๅไฝๆฏRust้็ไธ็ง็จๆทๅฎไน็ฑปๅใ่ฆๆณจๆ๏ผ็ฑไบRust้ๅฏนๆณๅ็ๅนฟๆณไฝฟ็จ๏ผไธๅฅไธ็ฆปๆณๅ๏ผ๏ผ็ปๆไฝๅฎไนใๆไธพไฝๅฎไนใ่ๅไฝๅฎไน่ฟไบๅฎไนๅบๆฅ็็ฑปๅๅจ้ๆณๅ็ๆๅตไธๆฏไธไธชๅทไฝ็ฑปๅ๏ผๆฏๅฆString๏ผๅจๆณๅ็ๆๅตไธๅๆฏไธๆๅทไฝ็ฑปๅ๏ผ็ฑปไผผVec<T>่ฟๆ ท๏ผๅถไธญTๆฏๆณๅๅๆฐ๏ผไปฃๅฅไธๅ็ๆณๅๅๆฐ็โๅๅผโๅฐฑไผๅพๅฐไธๅ็ๅทไฝ็ฑปๅใไธ็ฎกๆฏๅช็ง๏ผๆดไธชๅฎไน้ฝๆฏไธไธชๆก็ฎ๏ผๆฏไธไธชๆดไฝใ

็ฌฌไธ็ฑปๆก็ฎไนๆๅฎไน็ฑปๅ็ๆๆ๏ผไฝๆฏๅฎไนๅบๆฅ็ๅฐฑไธ็ฎๆฏ็จๆทๅฎไน็ฑปๅไบใ้ฆๅๆฏ็ฑปๅๅซๅๅฎไนๆก็ฎ๏ผๅฎๅฎไนไธไธช็ฑปๅๅซๅ๏ผไนๆฏๆๆณๅ๏ผๆๅๅถไปๅทไฝ็ฑปๅใๅฆๅคๅฐฑๆฏๅฝๆฐๅฎไนๆก็ฎ๏ผไพ็ถๆฏๆๆณๅ๏ผ๏ผๅฎไผ่ชๅจไบง็ไธไธช็ฌ็น็ๅฝๆฐๆก็ฎๅ็ฝฎ็ฑปๅ๏ผๅจ่กจ่พพๅผไธญๅ่ฟไธชๅฝๆฐ็ๅ็งฐๅฐฑๅฏไปฅๆฟๅฐ่ฟไธช็ฑปๅ็ๅผใ

็ฌฌๅ็ฑปๆก็ฎไผๅฃฐๆไฝ็จๅไธบๅจๅฑ็ๅผ๏ผไธๅฝๆฐๅฎไนๆก็ฎๆไบ็ฑปไผผไนๅคใ้ฆๅๆฏๅธธๆฐๅฎไนๆก็ฎ๏ผๆๅฎๅ็งฐใ็ฑปๅๅไธไธชๅธธๆฐ่กจ่พพๅผๅ๏ผไฝ ๅฐฑๅฏไปฅๅจ่กจ่พพๅผไธญ็จ่ฟไธชๅ็งฐๅผ็จ่ฟไธชๅผไบใ็ถๅๆฏ้ๆๅฎไนๆก็ฎ๏ผๅฎไธๅธธๆฐๅฎไนๆก็ฎ็ๅบๅซๆฏๅฎ็ๅผๅทๆไธไธชๅจๅฑ็ๅญๅจไฝ็ฝฎ๏ผไป่่ฝๅค่กจ่พพ็ถๆๅๅ๏ผๅฏไปฅ็ฑปๆฏๅถไป่ฏญ่จไธญ็ๅจๅฑๅ้ใ

็ฌฌไบ็ฑปๆก็ฎไธ็น่ดจ(trait)็ณป็ป็ธๅณใ็น่ดจๆก็ฎ็จๆฅๅฎไนไธไธช็น่ดจ๏ผ็น่ดจไธๆฏ็ฑปๅ๏ผๆฏไธ็งๅฏไปฅไธ็ฑปๅๅปบ็ซ่็ณป็ๆฝ่ฑกๆฅๅฃ๏ผๆฝ่ฑกๆฅๅฃๅซๆๅณ่ๆก็ฎ๏ผ็ฎๅๅฑไธ็ง๏ผๅณ่ๅธธๆฐๆก็ฎๅฐฑ็ฑปไผผๅธธๆฐๅฎไนๆก็ฎ๏ผๅณ่็ฑปๅๅซๅๆก็ฎๅฐฑ็ฑปไผผ็ฑปๅๅซๅๅฎไนๆก็ฎ๏ผๅณ่ๆนๆณๆก็ฎๆ็นๅๅฝๆฐๅฎไนๆก็ฎ๏ผไฝ็จๅพฎๆ็นๅบๅซใ

็ฌฌๅญ็ฑปๆก็ฎ็งฐไธบๅฎ็ฐๆก็ฎใๅฎ็ฐๅไธบๅบๆๅฎ็ฐๅ็น่ดจๅฎ็ฐไธค็งใๅฎ็ฐๆก็ฎๅ่ตทๆฅ็ๆ ผๅผๅพ็นๅซ๏ผๆ็นๅๆไบๆฅ่ฏข่ฏญ่จ๏ผๅบๆฌไธๆฏโๅฏนไบๆปก่ถณๆๆๆกไปถ็ๆๆ็ฑปๅ(ๅๆๆ็น่ดจ)๏ผๆไพๅฆไธ็ๅณ่ๆก็ฎๅฎไนโ็็ปๆใ่ฟไธชๆฏ่พๅคๆ๏ผๅ้ขๆไปฌไผ่ฏฆ็ป่ฎฒใ

็ฌฌไธ็ฑปๆก็ฎ็จๆฅๅฎ็ฐๅฏผๅฅๅ่ฝใๅฏผๅฅๆไธ็ง๏ผไธ็งๆฏๅฏผๅฅๅถไป็็(crate)ๅฐๅจๅฑ็ฉบ้ดไธญ๏ผ็งฐไธบๅค้จ็(extern crate)ๆก็ฎใไธ็งๆฏๅปบ็ซไธไธชโ้พๆฅโ๏ผ็งฐไธบๅผ็จๅฃฐๆๆก็ฎ๏ผ็ฑปไผผ็ฃ็ไธ็็ฌฆๅท้พๆฅๆ่ๅฟซๆทๆไปถ๏ผๅฝขๆโๅฎ่ฝ็ถๅถๅฎๅฎไนไธๆฏๅจ่ฟ็๏ผไฝๆฏไปฟไฝๅฐฑๅจ่ฟ้โ็ๆๆใ่ฟไธชๆๆๅจrust้ๅพ้่ฆ๏ผๅ้ข่ฟไผๅๅค่ฏดๅฐใๅฆไธ็งๆฏๅค้จๅฎไนๅๆก็ฎ๏ผๅฎ็จๆฅๅๅซๅถไป่ฏญ่จ๏ผ็ฎๅๆฏC่ฏญ่จ๏ผๅจๅค้จๆไพ็ๅฎไน๏ผ็ฎๅๆไธค็ง๏ผๅค้จ้ๆๆก็ฎๅฐฑ็ฑปไผผ้ๆๆก็ฎ๏ผๅค้จๅฝๆฐๆก็ฎๅฐฑ็ฑปไผผๅฝๆฐๅฎไนๆก็ฎใ


### ๐ข๐ต Zero-cost Abstraction ้ถๆๆฌๆฝ่ฑก
- Diesel - Safe, Extensible ORM https://diesel.rs
- Zero-cost abstractions in Rust https://carette.xyz/posts/zero_cost_abstraction/
- Rustไธญ็้ถๆๆฌๆฝ่ฑก๏ผไธ๏ผ https://zhuanlan.zhihu.com/p/109517672
- Rustไธญ็้ถๆๆฌๆฝ่ฑก๏ผไบ๏ผ https://zhuanlan.zhihu.com/p/109189186

ๅฝไฝ ็ผ็จ็ๆถๅ๏ผ้กน็ฎ่ถๆฅ่ถๅคๆ๏ผ้ๅธธไฝ ไผๅขๅ ๆฝ่ฑกๆฅ่ฎฉ้กน็ฎๅฎนๆ็ปดๆคๅนถๅขๅ ๅ่ฝใ

ไฝไธบๅผๅ่๏ผไฝ ่ฏๅฎๅธๆไฝ ็ๆฝ่ฑกไธ่ฆๅจ่ฟ่กๆถๅขๅ ๆๆฌ๏ผๆไปฅ๏ผๆไธคไธชๅๅๆฏ๏ผ

- ้กน็ฎ็ๅฏ่ฏปๆงๅๆ็ฎก็ๆงๆฏๅคๆ็ๆๅไผๅๆด้่ฆ๏ผ
- ไฝ่ณๅฐ่ฝๅจ่ฟ่กๆถๅๆฅ้ๅธธ่ฏๅฅฝ็ๆง่ฝ๏ผ

็กฎๅฎ๏ผๆน่ฟไปฃ็ ๅฏ่ฏปๆงไผ้ๅถไผๅๅๅๅญๅผ้๏ผๅนถ้ดๆฅ่ฟๆป่ฟ่กๆถ็ๆง่ฝใ

้ถๆๆฌๆฝ่ฑกๆฅ่ช C++๏ผ็ฑๅถๅๅงไบบ Bjarne Stroustrup ๅฎไน๏ผๅณ C++ ็ๅฎ็ฐ้ตๅพช้ถๅผ้ๅๅ๏ผไฝ ไธไฝฟ็จ็๏ผไฝ ไธ่ดๆๆๆฌใๆด่ฟไธๆญฅ๏ผไฝ ไฝฟ็จ็๏ผไฝ ไนๆฒกๆณๆดไผๅใ

ๆป็ปไป่ฏด็๏ผ

- ไฝ ไธไฝฟ็จ็ๅ่ฝ๏ผไฝ ไธๆฟๆ้ขๅคๅผ้๏ผ
- ้ซๅฑ็ๆฝ่ฑกไผ่ขซ็ผ่ฏๆๆบๅจไปฃ็ ๏ผ่ฟไบไปฃ็ ๅพ้พๆด่ฟไธๆญฅไผๅ๏ผ

Rust ๆไธป่ฆ็ๆฝ่ฑก๏ผๆ่่ฏดๆ ๅๅบ๏ผไธไผๅขๅ ่ฟ่กๆถๆๆฌ๏ผ่ฟๆฏ Rust ้ถๆๆฌๆฝ่ฑกๆ ธๅฟๅๅ๏ผๅฐคๅถๅฏนไธ้ข็่ฟไบ็นๆง๏ผ

- ็ผ่ฏๆถๅๅญๆฃๆฅ๏ผๅบไบ borrowing and ownership ๅฎ็ฐ้ๆๅๅพๅๆถๆบๅถใRust ไธๅจ่ฟ่กๆถ้่ฟๅผ็จ่ฎกๆฐๆฃๆฅ็ๆนๅผๅๆถๅๅญ๏ผ่ๆฏๅจ็ผ่ฏๆถ่ฟฝ่ธชๆฃๆฅ็ๅฝๅจๆ๏ผ่ฟไฝฟๅพ็จๅบ่ฟ่ก้ๅธธ้ซๆใ
- Ownership and borrowing
- traits ๆฏ้ๅธธ่ฎฉไบบๅฐ่ฑกๆทฑๅป็ๅ่ฝ๏ผ็จๆฅๆๅฑไฝ ็็ฑปๅใ
- generics ๆณๅ
- Iterator and closure APIs
- Async/await and Futures
- Unsafe and the module boundary
- ่ฟๆๅถๅฎ

้ถๆๆฌๆฝ่ฑกๅพๅฅฝๅฐ่งฃ้ไบ Diesel ่ฟไธช้ปๅ็ Rust ORM ๆกๆถๆง่ฝ่ฆๆฏ raw postgress ๅฟซ 30%ใ

็จไธคไธชไพๅญๆฅ่งฃ้ Rust ไธญ็้ถๆๆฌๆฝ่ฑก๏ผๆฑๆๆๅฐไบ n ็ๅฅๆฐ่ช็ถๆฐๅใ

ไธคไธช็ๆฌ็ไปฃ็ ๏ผ็ฌฌไธไธชๆฏ้ๅธธ็ๆฝ่ฑก็ๆฌ๏ผ็ฌฌไบไธชๆฏๆๅไผๅ็ๆฌ๏ผ

```rust,ignore
fn sum_odd_numbers(n: u64) -> u64 {
    let mut acc = 0;
    for element in 0.. {
        if element >= n {
            break;
        }
        if element.is_odd() {
            acc += element;
        }
    }
    acc
}

fn sum_odd_numbers(n: u64) -> u64 {
    (0..)
        .take_while(|element| element < &n)
        .filter(|n| n.is_odd())
        .fold(0, |sum, element| sum + element)
}
```

ไธ้ขไธๆฎต่งฃ้ไบ็ฌฌไบไธชๅฝๆฐๅผ็ผ็จ๏ผๅฎไผผไนๆดๅฎนๆ่ฏปๆ๏ผๅ่งฃๅฎๅฏ่ฝไฝๅบ้่ฏฏ็ๅๅฎ๏ผ

- ๅๅปบ็ฑ 0 ๅผๅง็่ฟญไปฃๅจ๏ผ
- ๅๅบๆๆๅฐไบ n ็ๅ็ด ๏ผๅฆๆๆพๅผ็ปๅบ n ๅผ๏ผ็ผ่ฏๅจๅฏไปฅๅจ็ผ่ฏๆ็ปๅบๆ็ป็ๆฐๅญ๏ผๅนถไฟๅญๅจๅฏๆง่กๆไปถไธญ๏ผ
- ๅพช็ฏๆๆๅ็ด ๏ผๅๅบๅฅๆฐ๏ผๅญๆพๅฐๅฆไธไธชๆฐ็ปไธญ๏ผ
- ๅพช็ฏๆๆๅ็ด ๏ผ่ฎก็ฎๅฅๆฐ็ๆปๅ๏ผ่ฟๅๆ็ปๅผ๏ผ
- ็ปๆๆฏ๏ผไธบไบๆฑๅ่ฎก็ฎ๏ผๅ้ไบๅฅฝๅ ไธชๆฐ็ปใ

ๅฅฝๅจ Rust ไธไผ่ฟๆ ทๅ๏ผ็ผ่ฏๅจไผๅ็ฌฌไธไธช็ๆฌ้ฃๆ ทๅใ

ไธ่กจๆฏๅจ Intel Core i5 (3 GHz, 6 cores * 2 threads / core) ็่ทๅ็ปๆ๏ผๆพ็คบไบ 10 ๆฌกไธๅ n ๅผๆง่กๆถ้ด็ไธญๅผ๏ผ

Benchmarks

    | Version |     n      | Hand-optimized execution time | Abstracted version execution time |
    |---------|------------|-------------------------------|-----------------------------------|
    | Debug   | 100        | 0,02s                         | 0,01s                             |
    | Debug   | 100000     | 0,02s                         | 0,03s                             |
    | Debug   | 100000000  | 2,97s                         | 6,59s (x2.22)                     |
    | Debug   | 1000000000 | 29,61s                        | 65,16s (x2.20)                    |
    | โโโ     | โโโโ       | โโโ                           | โโโ                               |
    | Release | 100        | 0,00s                         | 0,00s                             |
    | Release | 100000     | 0,00s                         | 0,00s                             |
    | Release | 100000000  | 0,03s                         | 0,03s                             |
    | Release | 1000000000 | 0,26s                         | 0,26s                             |

Compile time consequences

    | Version | Hand-written optimized |   Abstracted  |
    |---------|------------------------|---------------|
    | Debug   | 0,01s                  | 0,01s         |
    | โโโ     | โโโโโโโโ               | โโโโ          |
    | Release | 5,80s                  | 8,19s (x1.41) |

้่ฟๆฐๆฎๅฏไปฅๅพๅบ็ป่ฎบ๏ผ็ป่ฟ release ไผๅ้็ฝฎ็ผ่ฏ็ๆ็ป็จๅบ่ฟ่กๆฏๆ ๅทฎๅซ็๏ผๅชๆฏๅจ็ผ่ฏ็จๅบๆถ๏ผๆฝ่ฑก็ๆฌ่ฑ้ๆดๅค็ไผๅๆถ้ด๏ผๅณไฝฟๆฏๅฆๆญค็ฎๅ็็จๅบใ

็ถ่๏ผๅฝไฝ ้่ฆๆฝ่ฑก็ๆถๅ๏ผไธ่ฆ็น่ฑซใๅจ Rust ไธญไฝ ๆฐธ่ฟไธ้่ฆๅ่ฟ่กๆๅไผๅ๏ผ่ๅบ่ฏฅ่่ๆฝ่ฑกๆงใๆถๆๅ่ฎพ่ฎกใไปฃ็ ๅฏ่ฏปๆง๏ผๅณไฝฟไฝ ๅๅๅจๆ่ฟ่กๆถๆง่ฝใ



### ๐ข๐ต Ownership ๆๆๆ
- ๅผ็จ็็ๅฝๅจๆ https://www.bilibili.com/video/BV1hp4y1k7SV?p=49
- Understanding Ownership https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html
- Guide to Rustc Development 44. The borrow checker https://rustc-dev-guide.rust-lang.org/borrow_check.html
- The Rustonomicon - The Dark Arts of Unsafe Rust https://doc.rust-lang.org/nomicon/meet-safe-and-unsafe.html
- https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html
- https://doc.rust-lang.org/stable/alloc/boxed/struct.Box.html
- https://doc.rust-lang.org/stable/std/boxed/struct.Box.html
- Smart Pointers https://doc.rust-lang.org/book/ch15-00-smart-pointers.html
- https://doc.rust-lang.org/nomicon/ownership.html

ๆๆๆๆฏ Rust ๆ็ฌ็น็็นๆง๏ผๅฎๅฎ็ฐไบไธ้่ฆๅๅพๆถ้ๅจ็ๆๅตไธไฟ่ฏๅๅญๅฎๅจใๅ ๆญค๏ผไบ่งฃๆๆๆๅจ Rust ไธญ็ไฝ็จๆฏๅพ้่ฆ็ใ

่ฏญๆณไธ๏ผRust ๅ่ไบ C++๏ผไฝไธไธๅ Go or C++๏ผๅนถๆฒกๆ garbage collection๏ผ็ธๅ Rust ็ๅๅญๅฎๅจ็ฎก็้่ฟๆๆๆไธ borrow checker ็ๆ ธๅฟๆฆๅฟต๏ผๅฎ็ฐไบๅจ้ๆ็ผ่ฏๆๅฏนๅผ็จ็็ๅฝๅจๆ็่ฟฝ่ธช๏ผ่ไธ้่ฆๅจ่ฟ่กๆถ่ฟ่ก้ขๅค็ๅๅพๅๆถ๏ผ่ฟ็ธๅฝไบ็ดๆฅๆๅไบ่ฟ่กๆ็ใ

Rust `Ownership` ๆฆๅฟตๆฏ่พๆฐๅฅ็่งๅฟต๏ผๆฏ Rust ้ถๆๆฌๆฝ่ฑกไธญๅพ้่ฆ็ไธไธช็ปๆ๏ผๅฎๆๅบๆฏไธไธชๅผๆไธๆถๅปๅช่ฝ่ขซไธไธชๅ้ๆฅๆ๏ผๅณ owner๏ผ่ถๅบไฝ็จๅๅ๏ผๅผไผ่ขซ้ๆฏ๏ผๅณๆฏไธชๅผ็จ้ฝๆ็ธๅบ็็ๅฝๅจๆใ


ๅจ C/C++ ่ฏญ่จไธญ๏ผStack ๅ Heap ๆฏๅพๅธธ็จ็ๆฆๅฟต๏ผๅฎไปฌ้ฝๆฏ็จๅบ่ฟ่กๆถๅฏไปฅไฝฟ็จ็ๅๅญ็ฉบ้ดใ

้ๅธธ่ฏด็่ฐ็จๅ ๆ ๆ็ๅฐฑๆฏ Stack๏ผๅฎๆฏๅจ็กฌไปถๅฑๅฎ็ฐ็ไธไธช LIFO - Last in, first out ๆฐๆฎ็ปๆ๏ผ้่ฟ CPU ็ `pop` `push` ๆไปคๆไฝใ่ฟไบๆไปคๆงๅถ็ CPU ๅ้จ็ไธไธชๅ ๆ ๆ้ๅฏๅญๅจ SP - Stack Pointer๏ผๅจ็จๅบ่ฟ่กๆถ๏ผๅง็ปๆๅ Stack ้กถ้จ๏ผไผ้็ๅฝๆฐ่ฐ็จใ่ฟๅ่ฝฌ็งปใ

ๅฏนๆฏ Stack ๅ Heap ๅๅญ๏ผ 

- Stack ๅๅญ่ฎฟ้ฎๆดๅฟซ๏ผๆๅฏๅญๅจ็ดๆฅๅฏ่พพ๏ผ้ๅธธๅจ็จๅบ็ผ่ฏๅๅฐฑ็ฅ้่ฆไฝฟ็จๅคๅคง็ Stack ๅๅญ๏ผ
- ่ๅ ๅๅญ๏ผๆดๅคๆฏ็ฑๅผๅ่ไธปๅจ็ณ่ฏท่ฐ้๏ผ้่ฟ `malloc()` `free()` ็ญๅฝๆฐๅจๆๅๅญๅ้็ๆ้็ฎก็๏ผๅธๅ็ๅฐฑๆฏไฝฟ็จ `new` ๅณ้ฎๅญๆฅไธบๅฎไพ็ณ่ฏทๅๅญใ

ๅจ Rust ไธญ๏ผ่ท่ธชไปฃ็ ็ๅชไบ้จๅๆญฃๅจไฝฟ็จๅ ๅๅญ๏ผๆๅฐๅๅ ไธ้ๅคๆฐๆฎ็ๆฐ้๏ผๆธ็ๅ ไธๆชไฝฟ็จ็ๆฐๆฎไปฅ้ฟๅ็ฉบ้ด่ๅฐฝ๏ผ่ฟไบ้ฝๆฏๆๆๆๆ่ฆ่งฃๅณ็้ฎ้ขใ

ไธๆฆๆจไบ่งฃไบๆๆๆ๏ผๅฐฑไธ้่ฆ็ปๅธธ่่ๅ ๆ ๅๅ ๏ผไฝๆฏ็ฅ้็ฎก็ๅ ๆฐๆฎๆฏๆๆๆๅญๅจ็ๅๅ ๆๅฉไบ่งฃ้ๅฎไธบไปไนไปฅ่ฟ็งๆนๅผๅทฅไฝใ

ๅฝ็ถ๏ผRust ๆไพไบ unsafe ็นๆง๏ผ่ฟๆ std::boxed::Box alloc::boxed::Box ๅณ Smart Pointers ่ฟไบๆจกๅๆไพ็ๅฏน่ฑก๏ผ็ฎๅๅฏน Heap ๅๅญ็ไฝฟ็จใ

    let five = 5;           // 5 in Stack memory
    let five = Box::new(5); // 5 in Heap memory

่ฟ้ๅฐฑๆฅ่งฃๆๆๆๆ็ๅ ็งๅค็ๆนๅผ๏ผ

- `shared reference` &T ๅฑไบซๅบๅ๏ผๅฆ `let a = &b;`๏ผๅฐ b ๅบๅๅฐ a๏ผ
- `mutable reference` &mut T ๅฏๅๅบๅ๏ผๅฆ `let a = &mut b;`๏ผๅฐ b ๅฏๅๅผ็จๅบๅๅฐ a๏ผๅณ้่ฟ a ๅฐฑๅฏไปฅไฟฎๆน b ็ๆฐๆฎ๏ผ
- `ownership move` ่ฝฌ็งปๆๆๆ๏ผๅฆ `let a = b;`๏ผๆๆๆ็ฑ b ่ฝฌ็งป็ป a๏ผ

่ฑๆฌๅทๅจ Rust ไธญ้ๅธธๆฏๅ้ไฝ็จๅ้็ฆป็ๆ ๅฟ๏ผ้คไบ่ฑๆฌๅทไปฅๅค๏ผ่ฟๆๅถไป็ไธไบๆๅตไผไฝฟ Ownership ๅ็ๅๅใ

ๅๆฅไธไธช็ฎๅ็็คบ่๏ผๅพๆๆพ `a` `b` ้ฝๅจไฝฟ็จ Stack ๅๅญ๏ผ

```rust,ignore
fn main() {
    let a; 
    {
        let b = 1;
        a = &b;
    }
    println!("a: {}", a);
}
```

็ผ่ฏๅบ้ๆ็คบๅ้ `b` ไธๅค้ฟๅฏฟ๏ผ

    error[E0597]: `b` does not live long enough
     --> src\main.rs:5:13
      |
    5 |         a = &b;
      |             ^^ borrowed value does not live long enough
    6 |     }
      |     - `b` dropped here while still borrowed
    7 |     println!("a: {}", a);
      |                       - borrow later used here

ๅ ไธบ `a` ๅๅผ `b` ็จไบ่ฑๆฌๅทไฝ็จๅๅค็ๆๅฐ่พๅบ่ฏญๅฅ๏ผไฝ `b` ่ถๅบไฝ็จๅๅๅฐฑ็ปๆ็ๅฝไบ๏ผ่ฟๆถ borrow checker ่ตทไฝ็จๆฃๆฅๅฐ้่ฏฏ็ๅญๅจใ

ๆณจๆ๏ผๅคๅ่ฟไธชๆฆๅฟต๏ผๅฐฑๆฏ `a` ๅผ็จ `b` ็ๅผใ

่ฝ็ถ๏ผ่ฏญๅฅๅไธญ็ป `a` ่ตๅผ็ๆฏไธไธชๅผ็จ๏ผไฝๆฏ๏ผๅผ็จ็ๅฏน่ฑกๅจ่ถๅบ่ฏญๅฅๅๅๅฐฑๅคฑๆไบ๏ผๅผ็จๅคไบๆฌ็ฉบ็ถๆ Dangling Referencesใ


ๆฐๅผๅ้็่ตๅผๆฏๅผๆท่ด๏ผๅฆๆๆฏๅญ็ฌฆไธฒๅ้่ตๅผ๏ผๆๅตๅฐฑ็ป็ถไธๅใ่ฟๆฏๅ่ฏดๅๅ ๏ผๅฏนไบ่พๅคง็ๅฏน่ฑกๆฅ่ฏด๏ผ็ดๆฅๅคๅถๆฏ้ๅธธๆตช่ดน็ฉบ้ดๅๆถ้ด็๏ผๅ ๆญค่ฆ็ดๆฅๅผ็จ่ไธๆฏๅคๅถใ

ๅฏนไบ็ฎๅๆฐๆฎ็ฑปๅ๏ผๅฆๆฐๅผ็ๆฐๆฎ้ฝๆฏๅญๅจๅจๆ ๅๅญไธญ๏ผ่ชๅจ็ฎก็ใ่ๅ String ๆไธไบ่ชๅฎไน็ๅคๆๆฐๆฎ็ปๆ๏ผๅถๆฐๆฎๅๅญๅจๅจๅ ๅๅญไธญใ ่ฝ็ถ๏ผๅ ๆ ็่ฏดๆณๆฏ่ฟ่ตทๆฅๅซ๏ผไฝๆฏไปไปฌๅบๅซๅพๅคงใๅจ C++ ็็ผ็จๆฆๅฟตไธญ๏ผHeap ๅ Stack ๅๅญๅ้ๆบๅถไธๅ๏ผStack ๅๅญ็ฑ็ผ่ฏๅจ่ชๅจๅ้็ฎก็๏ผ่ Heap ๅๅญๅ่ฆๆๅจ็ณ่ฏท๏ผๅธๅ็ๅฐฑๆฏ้่ฟ `new` ๅณ้ฎๅญๆฅๅ้ใ

ๅญ็ฌฆไธฒ็ๅผๆฏๅ้ๅจๅ ็ฉบ้ด็๏ผๅญ็ฌฆไธฒๅ้ๆฏๆญค็ฉบ้ด็ไธไธชๅผ็จ๏ผๅๆฌไธไธชๆๅๅ ็ฉบ้ด็ๆ้ใๅฝไธไธชๅญ็ฌฆไธฒ่ตๅผ็ปๅฆไธไธชๅญ็ฌฆไธฒ๏ผๅ ็ฉบ้ด็ๅผๅนถๆฒกๆ่ขซๅคๅถ๏ผๅชๆฏ่ฝฌ็งปไบๆๆๆ๏ผๅ้็ owner ๅไธบๆฅๆถ่ตๅผ็ๅ้๏ผๅๅ้ๅฐๅคฑๅปๅฏนๆญคๅๅญ็ฉบ้ด็ๆๆๆ๏ผ็ฆปๅผไฝ็จๅๆถ๏ผๅๅ้ไนไผ่ขซ่ชๅจๆธ็ใ

่ฟๅฐฑๆฏ Ownership ๅจๅๅ๏ผOwnership ไปไธไธชๅ้็งปๅจๅฐๅฆไธไธชๅ้ใ

ๅฆไธ้ขไธคๆฎตไปฃ็ ๏ผ

    let x = 5;
    let y = x;
    println!("x: {}", x);

    let s1 = String::from("hello");
    let s2 = s1;
    println!("s1: {}", s1);

็ฌฌไธๆฎตไปฃ็ ๆฏๆญฃ็กฎ็๏ผๅฏนไบ็ฌฌไบๆฎตไปฃ็ ๏ผๆ C++/C ่ฏญ่จ็้ป่พๅบ่ฏฅไนๆฏๆญฃ็กฎ๏ผไฝๅฎ้ไธ Rust ๅนถไธๆฏ่ฟๆ ทๅ็ใ

    error[E0382]: borrow of moved value: `s1`
     --> src\main.rs:8:31
      |
    6 |     let s1 = String::from("hello");
      |         -- move occurs because `s1` has type `std::string::String`, which does not implement the `Copy` trait
    7 |     let s2 = s1;
      |              -- value moved here
    8 |     println!("s1: {} s2: {}", s1, s2);
      |                               ^^ value borrowed here after move

้่ฏฏๆ็คบ๏ผ`s1` ๅ ไธบๆฒกๆๅฎ็ฐ Copy trait ไผๅผ่ตทๆๆๆ็งปๅจ๏ผๅณๆๆๆ็งปๅจๅ็ๅจ็ป `s2` ่ตๅผ็่ฏญๅฅไธ๏ผ่ฝฌ็งปไบๆๆๆๅ `s1` ๅฐฑๅคฑๆดปไธ่ฝๅไฝฟ็จไบใ

`String::from()` ๆนๆณๅ้ขๅฎ็ฐไบ Heap ๅๅญ็็ณ่ฏทๅ้ๆพ๏ผๅจๅญ็ฌฆไธฒ้ด่ฟ่ก่ตๅผๆถ๏ผๅฐฑไผๅฐๆ้ๅฐๅ่ฝฌไบคๅบๅป๏ผ่ไธๆฏๅคๅถๅๆ ท็ๅญ็ฌฆๅๅฎนใ

็ฎๅไธ้ข String ๅฏน่ฑก็ๅฑๆงๅฆไธ๏ผ

    |   Prop  |  value  |                 heap memory
    |---------|---------|                 ---------------------
    | pointer | address | ========> index | 0 | 1 | 2 | 3 | 4 |
    | length  | 5       |           value | h | e | l | l | o |
    | capcity | 5       |

ๅจๆง่ก `s12 = s1` ่ตๅผๆถ๏ผๅฐฑๆฏๅจๆท่ด String ๅฏน่ฑก็ๅฑๆง๏ผๅณ pointer ๆ้ๅๅญ็ฌฆไธฒ้ฟๅบฆ็ญ็ญๅฑๆง๏ผไฝๆฏๅๅฎน่ฟๆฏๆๅๅไธๅๅๅญๅฐๅ๏ผๅนถๆฒกๆๅฏนๅญ็ฌฆไธฒๅๅญ่ฟ่กๅคๅถ๏ผ่ฟๅฐฑๆฏ shallow copy๏ผ็ธๅฏนไบ deep copyใ

Rust ๆฐธ่ฟไธไผ่ฟ่ก้ป่ฎค็ๆทฑๆท่ด๏ผ้ค้ๆไพไธไธช Copy trait๏ผๅฆๆไธไธช็ฑปๅๆๅฎ็ฐ Copy trait๏ผๅๅฏไปฅ็ดๆฅ้่ฟ่ตๅผๆฅไผ ้ๅผใ็ฑปไผผๆฐๅผๅ้็ไผ ้ๆนๅผ๏ผๆฌ่ดจๅฐฑๆฏๅจ Stack ไธญๅคๅถๅ้ๆ็ปๅฎ็ๅผใ

ๅฏนไบๅญ็ฌฆไธฒๅฏน่ฑก๏ผๅฏไปฅไฝฟ็จๅถ `clone()` ๆนๆณๆฅ็ฐๅฎๅคๅถ๏ผ

    let s1 = String::from("hello");
    let s2 = s1.clone();

ๅ้ข่ฏดไบๅ้่ถๅบไฝ็จๅๅฐฑๅคฑๆ๏ผๅๆถ Rust ไผๆง่กไธไธช `drop()` ๅฝๆฐๆฅๅๆธ็ๅทฅไฝ๏ผๅฆๆๆฒกๆๆๆๆๆฝ่ฑกๆบๅถ๏ผๅจๅญ็ฌฆไธฒ่ตๅผๅ๏ผ`s1` ๅ `s2` ๆๅๅไธๅๅๅญ๏ผๅจๅฎไปฌๅคฑๆๆถๅฐไผๆไธคไธช `drop()` ๅฝๆฐ่ขซ่ฐ็จ๏ผ่ฟๅฐฑไผๅฏนๅไธๅๅญๅฐๅๆง่กไธคๆฌก `free()` ๆไฝ๏ผ็ ดๅๅๅญ็ปๆใ

้่ฟๆๆๆๆบๅถ๏ผๆถๅปๅชๆไธไธชๅ้ๅผ็จๅไธๅๅญๅฐๅ๏ผๆฐธ่ฟไธไผๅบ็ฐ้ๅค้ๆพๅไธๅๅญ็้่ฏฏใ

ๅฆๆไธไธช็ฑปๅ็ไปปไฝ้จๅๅฎ็ฐไบ Drop trait๏ผๅๆ ๆณไฝฟ็จ Copy traitใ่ฝไฝฟ็จ Copy trait ็็ฑปๅๆ๏ผ

- All the integer types, such as `u32`.
- The Boolean type, `bool`, with values true and false.
- All the floating point types, such as `f64`.
- The character type, `char`.
- ่ฟๆๅๅซไปฅไธ็ฑปๅ็ๅ็ป Tuples๏ผไพๅฆ (i32, i32) implements Copy, but (i32, String) does not.


### ๐ข๐ต Borrowing ๅ็จๆๆๆ
- https://doc.rust-lang.org/beta/rust-by-example/scope/borrow.html
- https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html
- Guide to Rustc Development 44. The borrow checker https://rustc-dev-guide.rust-lang.org/borrow_check.html
- A Practical Intro to Macros in Rust 1.0 https://danielkeep.github.io/practical-intro-to-macros.html

ๆๆกๅบๆฌๆฆๅฟตๅ๏ผๅๆฅ็็ๅฝๆฐไธๆๆๆ็่็ณปใ

ๅฎๆน็ตๅญไนฆๅจ Understanding Ownership ็ซ ่็ปๅบ็่ฟๆฎต็คบ่ๅพๆธๆฐ็่งฃๆไบ Ownership and Functions ็ๅณ็ณป๏ผ 

```rust,ignore
fn main() {
    let s = String::from("hello");  // s comes into scope
    takes_ownership(s);             // s's value moves into the function...
                                    // ... and so is no longer valid here

    let x = 5;                      // x comes into scope
    makes_copy(x);                  // x would move into the function,
                                    // but i32 is Copy, so itโs okay to still
                                    // use x afterward

} // Here, x goes out of scope, then s. But because s's value was moved, nothing
  // special happens.

fn takes_ownership(some_string: String) { // some_string comes into scope
    println!("{}", some_string);
} // Here, some_string goes out of scope and `drop` is called. The backing
  // memory is freed.

fn makes_copy(some_integer: i32) { // some_integer comes into scope
    println!("{}", some_integer);
} // Here, some_integer goes out of scope. Nothing special happens.
```

ๅฏนไบๅฏน่ฑก็ฑปๅ๏ผ่ฟๅฅๅฝๆฐ็่ฟ็จๆ็น็ฑปไผผๅฏน่ฑก็่ตๅผ่ฟ็จ๏ผๆๆๆ่ฝฌ็งปไบใๆๆๆ็งปไบค็ปไบๅฝๆฐๅ้จ็ๅฏนๅบๅ้๏ผๅฝๅฝๆฐ่ฟๅ๏ผๅถๅ้จๅ้่ถๅบไฝ็จๅๅฐฑๅคฑๆ๏ผๅนถไธ `drop()` ๆง่กไบๅๅญๆธ็ใ

ๅฏนไบๅๅงๅผ็ฑป็ฑปๅ๏ผ่ฟๅฅๅฝๆฐ็่ฟ็จไนๅฐฑๆฏๅจ Stack ๅคๅถๆฐๆฎ็่ฟ็จ๏ผ่ฟๅๆถๅชๆฏ่ฐ็จๅ ๆ ็ๆขๅค๏ผไธ็จๆถๅ Heap ๅๅญ็ๆธ็ใ

ไธบไบ้ฟๅๆๆๆ็่ฝฌ็งป๏ผๅฏไปฅๅผ็จไผ ้ๅๆฐ๏ผๅณๅจๅๆฐๅ่กจไธญๅ ๅผ็จๆไฝ็ฌฆๅท `&String`๏ผ็ถๅ่ฐ็จๆถไนๆดๆนไธบไผไผ ๅฅๅผ็จ `&s`๏ผๅผ็จๅฏน่ฑกๅ่ฎธไฝฟ็จๅฏน่ฑก็ๅผ๏ผไฝไธ่ทๅๆๆๆใ

่ฟ็ง่ทๅๅผ็จไฝไธบๅฝๆฐๅๆฐๅซๅๅ็จ๏ผReferences and Borrowing๏ผ่ฟไธช็งฐ่ฐๅพๆฐๅฝ๏ผไพๅฆไธไธชไบบๅ็จไบๆๆ ทไธ่ฅฟ๏ผไปๅช้ๅๆฅ่ฟ้่ฆ่ฟๅๅปใ

ๅๆฅ็ไธ่ฅฟๅฏไปฅไฝฟ็จ๏ผไฝๆฏไธ่ฝๆๅๆไฟฎๆนใๅฆๆๆณๅฐ่ฏไฟฎๆนๅ็จๅ้๏ผไผๆ ๆณ็ผ่ฏใๅฆๆ้่ฆไฟฎๆนไธไธชๅผ็จ็ๅผ๏ผ้่ฆไผ ้ไธไธชๅฏๅๅผ็จ๏ผ`&mut s`

ๆๅ็จๆๆๆๆนๅผๆฅ้ๅๅ้ข็ไปฃ็ ๏ผๆณจๆไฟฎๆนๅฏๅๅผ็จๆถ๏ผไนๅ C++ ไธๆ ทไฝฟ็จๆๅท่ฟ่ก่งฃๅผ็จ๏ผ

```rust,ignore
fn main() {
    let mut s = String::from("hello");
    takes_ownership(&mut s);
    println!("{}", s);
}

fn takes_ownership(some_string: &mut String) {
    println!("{}", some_string);
    *some_string = String::from("news");
}
```

ๅจไฝฟ็จๅผ็จๆถ๏ผๆณจๆไธคๆก็บฆๆ๏ผ

- ไธ่ฝๅๆถไฝฟ็จ mutable & immutable ๅผ็จ๏ผ้ฟๅๆฐๆฎ่ฏปๅๅนถๅๆง่ก๏ผ
- ไธ่ฝๅญๅจๅคไธช mutable ๅผ็จ๏ผ้ฟๅๆฐๆฎ็ซไบ๏ผ

่ฟไธคๆก็บฆๆๅฏไปฅ็ป Rust ็จๅบ็ผ่ฏไผๅๅธฆๆฅๆๅคง็ๅฅฝๅค๏ผๅฎไปฌ้ฟๅไบ็ผ่ฏๆๅฐฑๅบ็ฐ `data races`๏ผ่ฟ็ง็ฑปไผผๅค็บฟ็จ็ `race condition` ็ถๅต๏ผๅ็ๅจไปฅไธๆๅฝข๏ผ

- ๅๆถๆๅคไธชๆ้่ฎฟ้ฎ็ธๅๆฐๆฎใ
- ่ณๅฐๆไธไธชๆ้ๅจ่ฟ่กๅๅฅๆไฝใ
- ๆฒกๆๅๆญฅๆบๅถๆฅ็บฆๆๆฐๆฎ่ฎฟ้ฎใ

```rust,ignore
let mut s = String::from("hello");

let r1 = &s; // no problem
let r2 = &s; // no problem
let r3 = &mut s; // BIG PROBLEM
// error[E0502]: cannot borrow `s` as mutable because it is also borrowed as immutable

println!("{}, {}, and {}", r1, r2, r3);
```

```rust,ignore
let mut s = String::from("hello");

let r1 = &mut s; // first mutable borrow occurs here
let r2 = &mut s; // second mutable borrow occurs here
// error[E0499]: cannot borrow `s` as mutable more than once at a time

println!("{}, {}", r1, r2);
```

ๆ่ถฃ็ๆฏ๏ผRust ็ผ่ฏๅจๅฏไปฅๅพๆบ่ฝๅฐๅคๆญๅบ๏ผไฝ ็ไปฃ็ ๆๆฒกๆๅจๅๆถไฝฟ็จ mutable & immutable ๅผ็จใ

ไปฅไธไปฃ็ ๆฏๆญฃ็กฎ็๏ผๅ ไธบไธค็งๆนๅผๆฒกๆๅๆถไฝฟ็จ๏ผ

```rust,ignore
let mut s = String::from("hello");

let r1 = &s; // no problem
let r2 = &s; // no problem
println!("{} and {}", r1, r2);
// r1 and r2 are no longer used after this point

let r3 = &mut s; // no problem
println!("{}", r3);
```

ๆฌ็ฉบๅผ็จ Dangling References ๅ้ขๅทฒ็ป่งฃๆ่ฟ๏ผๅฝๅผ็จ่ถๅบไฝ็จๅๅ๏ผๅฏนๅบ็ๅผๅฐฑๅคฑๆไธ่ฝ่ขซไฝฟ็จไบ๏ผ

```rust,ignore
fn main() {
    let reference_to_nothing = dangle();
}

fn dangle() -> &String {
    let s = String::from("hello");
    &s
}
```

ๅจๅฝๆฐไธญ่ฟๅไธไธชๅฑ้จๅ้็ๅผ็จๆฏไธๅฏ่ก็๏ผ้ฃไน่ฆ่ฟๅๅฑ้จๅ้๏ผ่ฆไน่ฟ่ก Copy๏ผ่ฆไน็งปๅจๆๆๆใ่ๅฏนไบ String๏ผๅฎๆฏๆฒกๆๅฎ็ฐ Copy ็นๆง็๏ผๅฐฑ้่ฆ่ชๅทฑๅค็ใ

่งฃๅณๆนๆณๅฐฑๆฏไธไฝฟ็จๅผ็จ่ฟๅ๏ผ

```rust,ignore
fn main() {
    let reference_to_nothing = no_dangle();
}

fn no_dangle() -> String {
    let s = String::from("hello");
    s
}
```

ๅ่ฟๅๅผ็จๆนๅผ็ๅทฎๅซๅจไบ๏ผๆฒกๆไฝฟ็จๅผ็จ็่ฟๅๆนๅผๅจๅฝๆฐ็ปๆๆถ๏ผๅคฑๆ็ๅชๆฏ `s` ๅ้๏ผ่ๆๆๆๅทฒ็ป่ฝฌ็งป๏ผๅถๆๆๅ็ๅญ็ฌฆไธฒๅๅฎนไพ็ถๆๆใ

่่ไธไธๅผ็จไธๆๆๆ็ๅณ็ณป๏ผ่ฟไน่ฎธไผๆฏ้พไปฅ็่งฃ็ใ

ๅจ Rust ็ณป็ป็ๆๆๆๆฝ่ฑกๆฆๅฟตไธญ๏ผๆๆๆๆฏ้ๅฏนๅๅญไธญไฟๅญ็ๆฐๆฎ๏ผไนๅฐฑๆฏ values ๆๅบๆฅ็ใๅ้ไนๆฏไธไธชๆฝ่ฑกๆฆๅฟต๏ผๅฎ้่ฆ็ปๅฎไธไธชๅผ๏ผๅณๅ ๆๅผ็ Ownership๏ผ่ฟๆ ท็ๅ้ๅฐฑๆฏไธไธช Ownerใ

่ๅผ็จ่ฟไธๆฆๅฟต๏ผๅฏไปฅๅฐๅถ็่งฃไธบๅฏนๅๅญๆฐๆฎ็็ดๆฅๆไฝ๏ผๅฅ็ฆปไบๅ้ใๆๆๆ่ฟไบๆฆๅฟต๏ผไนๅฐฑไธๆถๅๆๆๆๅฑ้ขไธ็ๆไฝใ


### ๐ข๐ต Slices ๅ็็ฑปๅไธๆๆๆ
- https://doc.rust-lang.org/book/ch04-03-slices.html
- Range Expressions https://doc.rust-lang.org/stable/reference/expressions/range-expr.html
- Storing UTF-8 Encoded Text with Strings https://doc.rust-lang.org/book/ch08-02-strings.html
- https://doc.rust-lang.org/stable/std/primitive.slice.html
- https://doc.rust-lang.org/stable/std/slice/index.html

้ฆๅ๏ผๅ็ๆฏๆฒกๆๆๆๆๆฆๅฟต็๏ผ่ฟไธ็นไฝฟๅพๅฎไธๅถๅฎๆฐๆฎ็ฑปๅๅบๅซๅผๆฅใ

Rust ๆฏๆ Range ่กจ่พพๅผ๏ผ่ฟๆฏๆฏๆๅ็็่ฏญๆณๅบ็ก๏ผ

    1..2;   // std::ops::Range
    3..;    // std::ops::RangeFrom
    ..4;    // std::ops::RangeTo
    ..;     // std::ops::RangeFull
    5..=6;  // std::ops::RangeInclusive
    ..=7;   // std::ops::RangeToInclusive

ๅญ็ฌฆไธฒๅญ้ข้่กจ่พพๅฐฑๆฏๅ็็ฑปๅ๏ผString Literals Are Slices๏ผๅฎไปฌๅฐฑๆฏๅๅญไธญ็ไบ่ฟๅถๆฐๆฎ๏ผ็ฑปๅไธบ `&str`๏ผๅณๅญ้ข้ๅญ็ฌฆไธฒๆฏไธๅฏๅ็๏ผ

    let s = "Hello, world!";
    let s: &str = "Hello, world!";

ๅฐ่ฏๅฎ็ฐไธไธชๅฝๆฐ๏ผๅฎ่ฟๅ่พๅฅๅญ็ฌฆไธฒ็็ฌฌไธไธช่ฏ๏ผ

```rust,ignore
fn main() {
    let mut s = String::from("hello world");

    let hello = first_word(&s); // immutable borrow occurs here
                                // s.clear(); mutable borrow occurs here
    println!("the 1st word is {}", hello);
    s.clear();
}

fn first_word(s: &String) -> &str {
    let bytes = s.as_bytes();

    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[..=i];
        }
    }

    &s[..]
}
```

็ฅ้ๅญ็ฌฆไธฒๅ็ๅ๏ผๅฏไปฅๅฐๅๆฐ็ฑปๅๆนๅไฝฟ็จๅญ็ฌฆไธฒ็ฑปๅๅ็๏ผ่ฟๆ ทๅฐฑๆด้็จไบ๏ผ

```rust,ignore
let mut s = String::from("hello world");
println!("the 1st word is {}", &s[..5]);
// println!("the 1st word is {}", s[..5]);
// error[E0277]: the size for values of type `str` cannot be known at compilation time
```

้คไบๅญ็ฌฆไธฒๅฏไปฅๅ็๏ผๆฐ็ปไนๅฏไปฅๅ็๏ผ

```rust,ignore
let a = [1, 2, 3, 4, 5];
let slice = &a[1..3];
```

ไปฅไธๆฐ็ปๅ็็็ฑปๅๅฐฑๆฏ `&[i32]`ใ

ไฝฟ็จ Rust ่ฃ็ๆจกๅ๏ผๅฏไปฅๅฐๆฐๆฎไฟๅญๅฐ Heap ๅๅญไธญ๏ผ

```rust,ignore
// A heap-allocated array, coerced to a slice
let boxed_array: Box<[i32]> = Box::new([1, 2, 3]);

// A (shared) slice into an array
let slice: &[i32] = &boxed_array[..];
```

ๅ Trait ๆ้ไธๆ ท๏ผๅจๆๅ็ๆฏ DST - dynamically sized types๏ผๅฏไปฅ้่ฟไปฅไธไปฃ็ ๆฅ็ไธๆฎ้ๆ้็ๅบๅซ๏ผ

```rust,ignore
use std::mem::size_of;

dbg!(size_of::<&u32>());        // 8
dbg!(size_of::<&[u32; 2]>());   // 8
dbg!(size_of::<&[u32]>());      // 16
```

ๅฏนๆๆ็ฑปๅๆฅ่ฏด๏ผๅถๅจๆๅ็็ๆ้้ฝๆฏไธๆ ทๅคงๅฐ็๏ผๆไปฅๅธธ่ง `&[T]` or `&mut [T]` ไธค็งๅฝขๅผใ

ๅ ไธบๆฏๆฎ้ๆ้็ไธๅๅคง๏ผๆไปฅไนๅซไฝ fat pointer๏ผๅคๅบๆฅ็็ฉบ้ดๆฏ็จๆฅไฟๅญ้ฟๅบฆไฟกๆฏ๏ผๅฏไปฅ็จ็ฑปไผผไปฅไธ็็ปๆๆฅ่กจ่พพ่ๆ้๏ผ

```rust,ignore
struct SliceRef { 
    ptr: *const u32, 
    len: usize,
}
```

ๆฐ็ป็ฑปๆนๆณๅฎ็ฐ๏ผ

    impl<T> [T]
    pub fn sort(&mut self) where T: Ord,
    pub fn sort_by<F>(&mut self, compare: F) where F: FnMut(&T, &T) -> Ordering,
    pub fn sort_by_key<K, F>(&mut self, f: F) where F: FnMut(&T) -> K, K: Ord,
    pub fn sort_by_cached_key<K, F>(&mut self, f: F) where F: FnMut(&T) -> K, K: Ord,
    pub fn to_vec(&self) -> Vec<T, Global> where T: Clone,
    pub fn to_vec_in<A>(&self, alloc: A) -> Vec<T, A> where T: Clone, A: Allocator,
    pub fn into_vec<A>(self: Box<[T], A>) -> Vec<T, A> where A: Allocator,
    pub fn repeat(&self, n: usize) -> Vec<T, Global> where T: Copy,
    pub fn concat<Item>(&self) -> <[T] as Concat<Item>>::Output where Item: ?Sized, [T]: Concat<Item>,
    pub fn join<Separator>(&self, sep: Separator) -> <[T] as Join<Separator>>::Output where [T]: Join<Separator>,

็คบ่๏ผ

```rust,ignore
let mut v = vec![1, 2, 3, 4, 5, 6];
v.sort_by_key(|&num| num<4);
assert_eq!(v, [4,5,6, 1,2,3]);
println!("{:?}", v);
```



## โก Lifetime ็ๅฝๅจๆ
- https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html
- https://doc.rust-lang.org/std/keyword.const.html
- https://doc.rust-lang.org/rust-by-example/custom_types/constants.html
- https://doc.rust-lang.org/rust-by-example/scope/lifetime.html
- https://doc.rust-lang.org/rust-by-example/variable_bindings/scope.html
- https://doc.rust-lang.org/rust-by-example/variable_bindings/freeze.html
- Trait and lifetime bounds https://doc.rust-lang.org/stable/reference/trait-bounds.html
- Lifetime elision https://doc.rust-lang.org/stable/reference/lifetime-elision.html
- Memory allocation and lifetime https://doc.rust-lang.org/stable/reference/memory-allocation-and-lifetime.html
- Common Rust Lifetime Misconceptions https://github.com/pretzelhammer/rust-blog/blob/master/posts/common-rust-lifetime-misconceptions.md

ๅ้ข่งฃๆ็ๅผ็จๆๆๆ็ๅบๅๆฆๅฟต๏ผๅถๅฎๅฐฑๆฏๅจ่ฎจ่ฎบๅผ็จ็็ๅฝๅจๆ๏ผRust ็ๅผ็จ้ฝๆ็ๅฝๅจๆ๏ผ็ๅฝๅจๆไนๅชๆฏๅฏนๅผ็จ็บฆๆใ

่ไฝ็จๅๅฏนๅ้็็ๅญๅจๆ็ไฝ็จ๏ผๅๅธธๅธธไธๅผ็จ็็ๅฝๅจๆ็ธๆททๆทใ้่ฆๆ็กฎ๏ผRust ้พ็นๅจไบๅผ็จ็็ๅฝๅจๆ๏ผ
ๅผ็จๆฏไธบไบ้ฟๅๅคๅถๆฐๆฎ่ๆๅ่ฟ่กๆ็๏ผๆฒกๆๅผ็จ๏ผไนๅฐฑๆฒกๆ Rust ๅคๆ็ lifetimeใ

ๅฎๆนๆๆกฃ rust-by-example ็ปๅบ็ๆฆๅฟตๆผ็คบไปฃ็ ๏ผๆณจๆ i ๅ้ๅไธคไธชๅผ็จ็็ๅฝๅจๆไฝ็จ่ๅด๏ผ

```rust,ignore
fn main() {
  let i = 3; // Lifetime for `i` starts. โโโโโโโโโโโโโโโโโ
  { //                                                   โ
      let borrow1 = &i; // `borrow1` lifetime starts. โโโโ
      println!("borrow1: {}", borrow1); //              โโ
  } // `borrow1 ends. โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ
  { //                                                   โ
      let borrow2 = &i; // `borrow2` lifetime starts. โโโโ
      println!("borrow2: {}", borrow2); //              โโ
  } // `borrow2` ends. โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ
} // Lifetime ends. โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ
```

Rust ็ไปฃ็ ๅไน็ฎๆฏไธไธชไฝ็จๅ๏ผ้่ฟ `let` ่ฏญๅฅๅฐๅผ็จ็ปๅฎๅฐ borrow1 ๆ borrow2 ็ๅผ็จ๏ผๅจ่ถๅบ
ไปฃ็ ๅๅๅฐฑ็ปๆไบใ่ๅ้ i ็็ๅฝๅจๆๆพ็ถๆฏๅฎไปฌๆด้ฟ๏ผๅฆๅๅผ็จๅฐฑๆฏๆฌ็ฉบ็ถๆใ

้ๅธธ๏ผRust ๅผ็จ็็ๅฝๅจๆไธๆฏๆๅจๆๅฎ็๏ผๅ็ฑปๅ่ชๅจๆจๆญไธๆ ท๏ผ็ผ่ฏๅจไผๆ นๆฎไผ ๅฅ็ๅๆฐ่ฟ่ก็ๅฝๅจๆๆจๆญใ
็ผ่ฏๅจไผๆ็ปญๆ นๆฎ่ฏญๅฅไธไธๆๆจๆญๅบ็ๅฝๅจๆๅๆฐ๏ผๅนถ้ๆฉๆๅฐ็้ฃไธชใๅฝ็ผ่ฏๅจๅจๅค็งไธๅ็็ๅฝๅจๆไธญๆ ๆณ็กฎๅฎ๏ผ
ๅฐฑ้่ฆ annotate lifetimes ๆฅๆ็คบ็ผ่ฏๅจๆดๅฅฝๅฐๅค็๏ผ็ๅฝๅจๆๆ ๆณจ็็ฎ็ๆฏไธบไบๆถ้คๆญงไนใ

Rust ๆฒกๆ่ฟ่กๆถ็ GC ่กไธบ๏ผๅฎ้่ฟ็ผ่ฏๆถๅๅญๆฃๆฅๅๅผ็จ๏ผๅบไบ borrowing and ownership ๅฎ็ฐ้ๆ
ๅๅพๅๆถๆบๅถใRust ไธๅจ่ฟ่กๆถ้่ฟๅผ็จ่ฎกๆฐๆฃๆฅ็ๆนๅผๅๆถๅๅญ๏ผ่ๆฏๅจ็ผ่ฏๆถ่ฟฝ่ธชๆฃๆฅ็ๅฝๅจๆ๏ผ่ฟไฝฟๅพ็จๅบ่ฟ่ก้ๅธธ้ซๆใ

Rust ้ฒ่ๅๅญไธๅฎๅจไปฃ็ ็ๅๅๆๅถๆธๆฐๆ๏ผๅฑไบซไธๅฏๅ๏ผๅฏๅไธๅฑไบซใๅไธๅๅๅญๅญๅจๅคไธชๅผ็จ๏ผๅฐฑไธ่ฆ่ฏๅพ
ๅฏน่ฟๅๅๅญๅไฟฎๆน๏ผ่ฆๅฏนไธๅๅๅญๅไฟฎๆน๏ผๅฐฑไธ่ฆๅๆถไฟ็ๅคไธชๅผ็จใ

Rust ็ๅฝๅจๆๆไธค็งๅฝขๅผ๏ผ

- Lexical Lifetime
- Non Lexical Lifetime

ๆๆ็ๅ้ใๅ็จ็็ๅฝๅจๆๅฐฑๆฏไปๅฎ็ๅฃฐๆๅผๅง๏ผๅฐๅฝๅๆดไธช่ฏญๅฅๅ็ปๆใ่ฟไธช่ฎพ่ฎก่ขซ็งฐไธบ Lexical Lifetime๏ผ
็ๅฝๅจๆไธฅๆ ผ็ปๅฎๅฐ่ฏๆณไธญ็ไฝ็จๅ่ๅดใ่ฟไธช็ญ็ฅๅฎ็ฐ่ตทๆฅ้ๅธธ็ฎๅ๏ผไฝๅ็จ็่ๅด่ขซ่ฟๅบฆๆ้ฟไบ๏ผไปฅ่ณไบๆไบ
ๅฎ่ดจไธๆฏๅฎๅจ็ไปฃ็ ไน่ขซ้ปๆญขไบ๏ผไน้ๅถไบ็จๅบๅ็ๅๆฅใ

ๅ ๆญค๏ผRust ๆ ธๅฟ็ปๅๅณๅฎๅผๅฅ Non Lexical Lifetime (NLL)๏ผ็จๆด็ฒพ็ป็ๆๆฎต่ฐ่ๅ็จ็ๆญฃ่ตทไฝ็จ็่ๅดใ

Lexical lifetime ๅฎ็ฐๆนๅผๆๅณ็ๆฏไธชๅผ็จ็็ๅฝๅจๆ้ฝๆฏ่ทไปฃ็ ๅ๏ผscope๏ผ็ธๅณ่็๏ผๅฎๆปๆฏไปๅฃฐๆ็
ๆถๅ่ขซๅๅปบ๏ผๅจ้ๅบ่ฟไธชไปฃ็ ๅ็ๆถๅ่ขซ้ๆฏใNon-Lexical lifetime ๆๆๅฐฑๆฏๅๆถ่ฟไธชๅณ่ๆง๏ผ็ๅฝๅจๆ
็จๅฆๅค็ใๆดๆบ่ฝ็ๆนๅผๅๆใ

ไปฅไธไปฃ็ ไธญ๏ผslice ๆฏๅฏๅๅผ็จ๏ผๅจๆชๅฎ็ฐ NLL ็็ผ่ฏๅจไธไธ่ฝ้่ฟ็ผ่ฏ๏ผๅ ไธบๅๆถๅญๅจไธคไธช &mut ๅผ็จ๏ผ

```rust,ignore
// use std::ascii::AsciiExt;

fn main() {
    let v = foo();
    println!("{:?}", v);
}

fn foo() -> Vec<char> {
    let mut data = vec!['a', 'b', 'c'];
    let slice = &mut data[..]; //---+ NLL lifetime begin
    capitalize(slice);         //---+ NLL lifetime end
    data.push('d');

    data
}

fn capitalize(data: &mut [char]) {
    for c in data {
        c.make_ascii_uppercase();
    }
}
```

ไปฅไธไพๅญๆผ็คบไบ Scope & Shadowing ็ไฝ็จ๏ผ

```rust,ignore
fn main() {
    let shadowed_binding = 1;

    {
        // before being shadowed
        assert_eq!(1, shadowed_binding);

        // This binding *shadows* the outer one
        let shadowed_binding = "abc";
        assert_eq!("abc", shadowed_binding);
    }
    // shadows clear!
    assert_eq!(1, shadowed_binding);

    // This binding *shadows* the previous binding
    let shadowed_binding = 2;
    assert_eq!(2, shadowed_binding);
}
```

ไปฅไธ็คบ่ๅจไธๅไฝ็จๅไธๅฝฑๅญ็ฐ่ฑกๅผ่ตท็ Frozen data ็ไฝ็จ๏ผ

```rust,ignore
fn main() {
   let mut _mutable_integer = 7i32;

    {
        // Shadowing by immutable `_mutable_integer`
        let _mutable_integer = _mutable_integer;

        // Error! `_mutable_integer` is frozen in this scope
        // _mutable_integer = 50;
    }

    // Ok! `_mutable_integer` is not frozen in this scope
    _mutable_integer = 3;
}
```

Rust ็ move semantics, borrowing, lifetime ไน็ฑป็ๆฆๅฟตๅ ๅจไธ่ตท๏ผ็กฎๅฎ่ฎฉ่ฏญ่จๅๅพๅคๆไธๅ ชใ
Rust ๆๆกฃ้ฝ่ฏด๏ผไฝ ๅฏ่ฝ้่ฆโfight with the borrow checkerโใไธบไบ้่ฟ่ฟไบๆฃๆฅ๏ผไฝ ๅฟ้กป็จๅพๆชๅผ
็ๆนๅผๆฅๅ็จๅบ๏ผ้็้ฎ้ขๅคๆๅบฆ็ๅขๅ ๏ผๅฐฑ่ฆๆฑๆๆดๆชๅผ็ๅๆณใ

ๅจๆทฑๅฅ็่งฃ็ๅฝๅจๆไนๅ๏ผๆไปฌ้่ฆๅฐๅธธ่งๆไน็ไฝ็จๅๆฆๅฟตไฝไธไธ่ฐๆด๏ผRust ็ๅฝๅจๆ่ฟไธชๆฏ่ฏญๅไฝ็จๅๅฏๅ่็ณป๏ผไฝๅไธๆฏ็ญไปทๅณ็ณปใ

็ๅฝๅจๆๆณจ่งฃ็่ฏญๆณๆ ผๅผๅฆไธ๏ผๅ็ผไธไธช apostrophe๏ผ

- `&i32` ๅธธ่ง่ฏญๆณ่กจ็คบๅผ็จ๏ผ
- `&'a i32` ๅธฆๆๆพๅผ็ๅฝๅจๆ่กจ็คบ็ๅผ็จ๏ผ
- `&'a mut i32` ๅธฆๆๆพๅผ็ๅฝๅจๆ็ๅฏๅๅผ็จ๏ผ

้ๅธธ๏ผๅไธช็็ๅฝๅจๆๆ ๆณจๆฌ่บซๆฏๆฒกไปไนๆไน็๏ผๅ ไธบ Rust ๅช้่ฆ้่ฟๅฎๆฅไบ่งฃๅคไธชๅผ็จไน้ด็็ๅฝๅจๆๅณ็ณปใ



### ๐ข๐ต Function & Lifetimes

ๆฅ็็ๆด้็จ็็ๅฝๅจๆๆ ๆณจ่ฏญๆณ๏ผ

    foo<'a, 'b: 'a>
    // `foo` has lifetime parameters `'a` and `'b`

ๅ ไธบๅๆณๅ่ฏญๆณ่กจ่พพ็ธไผผ๏ผRust ๅฐ่ฟ็งไฝฟ็จๅฐๆฌๅท็่ฏญๆณ้ฃๆ ผ็งฐไธบ Generic Lifetimes ๆณๅ็ๅฝๅจๆใๅฐๆฌๅทๆๅฎ็ๆฏๆณๅๅๆฐ๏ผ่ฟ้็จๆฅๅฃฐๆ็ๅฝๅจๆ๏ผ็จๅฎๆฅๅณ่ๅฝๆฐ่พๅฅๅๆฐไธ่ฟๅๅผ็็ๅฝๅจๆๅณ็ณปใๅๆฐ้จๅๅซๅ่พๅฅๅฃฐๆๅจๆ๏ผ่ฟๅๅผ้จๅๅซๅ่พๅบ็ๅฝๅจๆใ

่ฟไธช็คบ่ไปฃ็ ่กจ็คบ๏ผfoo ๅๆถๆฅๆไธคไธช็ๅฝๅจๆๅฎไน๏ผๅนถไธ foo ไธๅฏไปฅๆฏ `'a` ๆ่ `'b` ๆด้ฟไนใๅๆถ `'a` ่ณๅฐๅ `'b` ็ๅญๅจๆไธๆ ท้ฟ๏ผๅ่ๅๅซๅ่ใ

ไพๅฆ๏ผไปฅไธไธคไธชๅฝๆฐๆฏ็ญไปท็๏ผ

    fn elided_pass(x: &i32) -> &i32 { x }

    fn annotated_pass<'a>(x: &'a i32) -> &'a i32 { x }

็ๅฝๅจๆๆณจ่งฃๅฏไปฅ็็ฅ๏ผๅ ไธบๅณไฝฟๆฒกๆ็ๅฝๅจๆๆณจ่งฃ๏ผ็ผ่ฏๅจไนๅฏไปฅๆจๆญๅบๆฅ๏ผ่พๅฅใ่พๅบๆ็ธๅ็็ๅฝๅจๆใ

ๆนๆณๆพๅผๅฎไนไบ `'a` ็ๅฝๅจๆ๏ผ็ๅฝๅจๆๆ ๆณจ็ๆไนๅฆไธ๏ผ

- ๅๆฐ `x` ๅทๆ `'a` ็ๅฝๅจๆ๏ผๅฎ่ณๅฐๅๅฝๆฐไธๆ ท้ฟไนใ
- ่ฟๅๅผ็จไนๅ `'a` ็ๅฝๅจๆไธๆ ท้ฟไน๏ผๅฎ่ทตไธญ๏ผๅ่ๅ่กจไผๆๅคไธช็ๅฝๅจๆ๏ผ่ฟๅๅผๅบ่ฏฅๅ็ๅฝๅจๆๆ็ญ็ไธ่ดใ
- ่ฟๅๅผ็จๅฟ้ไธ่พๅฅๅๆฐๆ็ธๅ็็ๅฝๅจๆ๏ผๆ่ๆฏ `'static` ็ๅฝๅจๆ๏ผไฝไธ่ฝ้ฟไบ่พๅฅ็็ๅฝๅจๆใ
- `main()` ๅฝๆฐไธ่ฝๆๆณๅ็ๅฝๅจๆๅๆฐใ

่ฟๆๅณ็ไปๅฝๆฐๅ้จ่ฟๅ็่ฟไธชๅผ็จ๏ผๅๅฝๆฐๅค็ `x` ๅจๅๆ ท็ไฝ็จๅไธญๅทๆๅๆ ท็ๅฏๅผ็จๆง๏ผ่ไธไผๅบ็ฐไธไธชๅผ็จๆฏๅฆไธๆดๅ็ปๆ็ๅญ๏ผๅณไธไผๅ ไธบๆธ็๏ผ่ๅฏผ่ดๅผ็จๅคฑๆใ

ๆพๅผๆ ๆณจ็ๅฝๅจๆๅ๏ผRust ๅฐฑไผๅ่ฟ่กๆจๆญไบ๏ผๅนถไธไผๆๆๅฎ่ฆๆฑ่ฟ่กๅ็จๆฃๆฅ๏ผๅนถไธๅบ่ฏฅๆ็ปไปปไฝไธ็ฌฆๅ่ฟไบ็บฆๆ็ๅผใๆ ๆณจ้ๅธธๅช้่ฆๅจๅฝๆฐ็ญพๅไธญๅบ็ฐ๏ผ็ผ่ฏๅจไผ่ชๅจๅๆๅฝๆฐไฝ๏ผๅชๅจๅผ็จๅฝๆฐๅค้จไปฃ็ ไธๅฏ่ฝๅๆๆถ๏ผๆ้่ฆ่ฟ่กๆๅจๆ ๆณจใ

่ฏทๆณจๆ๏ผๅฝๆฐไธ้่ฆ็กฎๅๅฐ็ฅ้ๅๆฐ็ๅฏฟๅฝ๏ผๅช้่ฆไธไบไฝ็จๅๅฏไปฅๆฟๆขไธบๆปก่ถณๆญค็ญพๅ็ 'a ็ๅฝๅจๆใ

็ๅฝๅจๆๆ ๆณจๅฐฑๆฏ็จๆฅๅ่ฏ็ผ่ฏๅจ๏ผ่ขซๆ ๆณจ็ๅฏน่ฑก็็ๅญๆถ้ด่ฆไปฅๆ ๆณจ็็ๅฝๅจๆไธบ็บฆๆ๏ผไธๅฏไปฅ่ถๅบ่ฟไธช็บฆๆๆถ้ด๏ผๅฆๅๅฐฑๆฏไธไธชๆ้ๆฌๅ้ฎ้ข Dangle Referencesใ

็ๅฝๅจๆ็ฎก็็ไธไธชไธป่ฆ็ฎ็ๅฐฑๆฏ้ฒๆญขๆฌ็ฉบๅผ็จ Dangling References๏ผๅ้ขๅทฒ็ป่งฃๆ่ฟ๏ผๅฝๅ้จไฝ็จๅ็ๅผ็จ่ถๅบไฝ็จๅๅคฑๆๅ๏ผๅผๅฐฑๅคฑๆไธ่ฝ่ขซไฝฟ็จไบ๏ผๅค้จๅฏนๅบ็ๅผ็จๅฐฑๅค็ๆฌๅ็ถๆ๏ผ

```rust,ignore
fn main() {
    let reference_to_nothing = dangle();

    let reference_to_nothing; 
    {
        let b = 1;
        reference_to_nothing = &b;
    }
}

fn dangle() -> &String {
            // ^ expected named lifetime parameter
            // error[E0106]: missing lifetime specifier
    let s = String::from("hello");
    &s
}
```

ไปฅไธ็คบ่ไธญ๏ผๆ ่ฎบๆฏ `dangle()` ๅฝๆฐๅ็ `&s` ่ฟๆฏ่ฏญๅฅๅไธญ็ `&b` ้ฝๆฏๅจๅบๅๆๆๆ๏ผๅจ่ถๅบไฝ็จๅๅๅผ็จๅคฑๆ๏ผๅณ็ๅฝๅจๆ็ปๆ๏ผๅคๅ็ๅผ็จไนๅฝ็ถๅคฑๆ๏ผRust ็ผ่ฏๅจไผ้่ฟ borrow checker ๆฃๆฅๅชไบๅ็จๆฏ็จๆ็ใ


ๆฏๅฆ๏ผไปฅไธ็คบ่ไธญๆไธคไธช `longest()` ๅฝๆฐ๏ผๅถไธญไธไธชๅธฆๆ็ๅฝๅจๆๆ ๆณจไฟกๆฏ็็ๆฌๆๅฏไปฅๆญฃๅธธๅทฅไฝ๏ผ

```rust,ignore
// normal reference version
// error[E0106]: missing lifetime specifier
// = help: this function's return type contains a borrowed value, but the signature does not say whether it is borrowed from `x` or `y`
//                              โ expected named lifetime parameter
fn longest(x: &str, y: &str) -> &str {
    if x.len() > y.len() { x } else { y }
}
// lifetime annotated version
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}

fn main() {
    let string1 = String::from("abcd");
    let string2 = "xyz";

    let result = longest(string1.as_str(), string2);
    println!("The longest string is {}", result);
}
```

้ฆๅ๏ผ่ฟๅๅฝๆฐไฝๅ็ๅผ็จ่ฟไธๅๆณๆฏไธ่ขซๅ่ฎธ็๏ผๅ ไธบๅฝๆฐๅ้จ็ๆฐๆฎไผๅจๅฝๆฐ็ปๆๆถ่ขซๆธ็ฉบ๏ผๅถๆๆๆไนไธๅนถๆถ้ค๏ผ่ฟๅฟ็ถไผๅฏผ่ดๆฌ็ฉบๅผ็จ Dangling Referencesใ

ไฝๆฏ่ฟๅๅค้จไผ ๅฅๅฝๆฐ็ๅผ็จๆฏๅฏ่ก็๏ผ่็ๆฌไธ็้่ฏฏๅจไบ๏ผไฝฟ็จๅผ็จไผ ๅใๅนถ่ฟๅๅผ็จ๏ผ่ๆฒกๆๅฃฐๆๅผ็จ่ชไฝๅคใๆฏๅ ไธบ Rust ็ผ่ฏๅจๅจๅค็ๅฝๆฐไฝไธญ็ๆกไปถ่ฏญๅฅๆถ๏ผๆไธคไธชๅฏ่ฝ่ฟๅๅผ `x` ๆ `y`๏ผๅจ็ผ่ฏๆไธๅฏ้ข็ฅใๅฆๆๅๆฐๅชๆไธไธช๏ผ้ฃไนๅฐฑๅฏไปฅ็็ฅ็ๅฝๅจๆๆ ๆณจใๅฎไนๅฅฝๅฝๆฐๅ๏ผๅทไฝไผ ไปไนๅผ่ฟๅฅไนๆฏไธๅฏ้ข็ฅ๏ผborrow checker ไนไธ่ฝ็กฎๅฎไธคไธชๅๅค่ฟๅๅผไธๆ็ปๅ่ฟๅผ็็ๅฝๅจๆๅณ็ณปใ

็ฎๅๅฐ่ฏด๏ผDust ็ผ่ฏๅจไธ่ฝๆญฃ็กฎๅฐ่ฟฝ่ธชๅผ็จ๏ผๅฐฑไธ่ฝๆญฃ็กฎๅฐ็ฎก็ๅณ่็ๅๅญ่ตๆบ๏ผไนๆ ๆณๅจ็ผ่ฏๆๅฎๅจ้่ฆๅค็ๅฅฝ็่ตๆบ็ฎก็ๅทฅไฝใ

่็ๆฌไบ๏ผๆพๅผๆ ๆณจ็ๅฝๅจๆ๏ผไผ ๅฅๅๆฐๆๆ็กฎ็็ๅฝๅจๆๅฎไนใ่ฟๆ ทๅค็็็ปๆๅฐฑๆฏ๏ผRust ็ผ่ฏ็ฅ้่ฟๅๅผๅ่พๅฅๅๆฐๆๅๆ ท็็ๅฝๅจๆ๏ผๆไปฅ๏ผๆ ่ฎบ่ฟๅ `x` ๆ `y` ๅฎไปฌ้ฝๅฏไปฅๅจ `main()` ๅฝๆฐไธญๆญฃ็กฎๅฐไฝฟ็จๅๅบ็ๆๆๆใ

ๅๆฅ็ๅฆไธไธชๅๅญ๏ผ

```rust,ignore
fn failed_borrow<'a>() {
  let _x = 12;

  // ERROR: `_x` does not live long enough
  let y: &'a i32 = &_x;
}
```

ๅฝๆฐๅ้จ็ๅฑ้จๅ้ `_x`๏ผไธๅ็บฟ่กจ็คบๅ้จไฝฟ็จ๏ผๅฝๆฐๆฌ่บซๆฒกๆๅๆฐไนๆฒกๆ่ฟๅๅผ๏ผๆพๅผไฝฟ็จ `'a` ็ๅฝๅจๆ๏ผ่ฟไผๅธฆๆฅไธไบๅฝฑๅใ

ๅฐ่ฏๅจๅ้จๅ็จๅ้จ `&_x` ๅ้๏ผๅนถไธๆๆ็ๅฝๅจๆ `'a`๏ผๅณๅ็จๅทๆๅๅฝๆฐ็ธๅ็็ๅฝๅจๆใ

ไฝๆฏ๏ผๅฏนไบๅ้ `_x` ๆฌ่บซไผๅจๅฝๆฐ็ปๆๆถ้ๆพ๏ผไป็ผ่ฏๅจ่งๅบฆๆฅ็๏ผๅฝๆฐ่ฆ่ด่ฝฝๅฑ้จๅ้็ๆธ็๏ผๅ ๆญค็ๅฝๅจๆ็ๅบๆฏๅฑ้จๅ้ๆด้ฟไธ็นใ่ฟๅฐฑๅฏผ่ดไบ๏ผ่ขซๅๅฏน่ฑก็็ๅญๆถ้ดๆฏๅ็จ่ฟ็ญ๏ผๅผ็จๆฌ็ฉบใๆไปฅไธ่ฝ้่ฟๆๆๆๆฃๆฅๆบๅถ๏ผ็ผ่ฏๅจไน็ปๅบๆ็คบๆกไปถไธๆปก่ถณ๏ผ`_x` ่ขซๅ็จไบ `'a` ็ๅญๅจๆใ

    error[E0597]: `_x` does not live long enough
    fn failed_borrow<'a>() {
                     -- lifetime `'a` defined here
      let y: &'a i32 = &_x;
             -------   ^^^ borrowed value does not live long enough
             |
             type annotation requires that `_x` is borrowed for `'a`
    }
    - `_x` dropped here while still borrowed


### ๐ข๐ต Temporary & Lifetimes elision
- Validating References with Lifetimes - Lifetime elision https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#lifetime-elision

Rust ็จ `let` ่ฏญๅฅๆฅๅๅปบๅ้๏ผๅนถ็ปๅฎๅฐ็ญๅทๅณไพง็ๅผไธ๏ผ็ปๅฎ่ฟไธชๅจไฝไนๆถๅไบไธไบ็ๅญๅจๆ็ๅๅฎนใ

ๅจ Rust ไธญ๏ผไธดๆถๅผ็็ๅฝๅจๆๆฏๅถ่ฏญๅฅ็็ปๅฐพ๏ผ้ค้ไฝฟ็จ let ๅฐไธไธชไธดๆถๅผ็ปๅฎๅฐๅ็งฐ๏ผ่ฟๆ ทๅฏไปฅ่ทๅพๆด้ฟ็็ๅฝๅจๆใ

ไพๅฆ๏ผๅฆไธไธคไธชๅฝๆฐไธญ๏ผ่ฟๅ็ไธดๆถๅผ๏ผๅฐฑๆฒกๆไฝฟ็จ let ็ปๅฎๅฐๅ้ใ

```rust,ignore
fn take_down() -> &str {
    "tempory"
}

fn take_ref(it: &String) -> &str {
    "tempory"
}
```

ๅฏนไบ tack_ref๏ผๅฏไปฅๆญฃ็กฎ่ฟๅ็ไธดๆถๅผ๏ผ่ take_down ๅดไธ่ฝๆญฃ็กฎ่ฟๅไธดๆถๅผใ

    error[E0106]: missing lifetime specifier
       --> src\main.rs:130:19
        |
    130 | fn take_down() -> &str {
        |                   ^ help: consider giving it a 'static lifetime: `&'static`
        |
        = help: this function's return type contains a borrowed value, but there is no value for it to be borrowed from

่ฟๆฏๅ ไธบ๏ผ็ผ่ฏๅจๅฏไปฅไปๅฝๆฐๅๆฐไธญๆจๆต็ๅฝๅจๆไฟกๆฏ๏ผ่ take_down ๅฝๆฐๆฒกๆๅๆฐๅฏไพๅ่๏ผๆไปฅ็ผ่ฏไธ่ฝ้่ฟใ

ๅจ Rust ๆฉๆๅๅฒ็ๆฌไธญ๏ผๆฏไธชๅผ็จ้ฝ้่ฆๆพๅผๆ ๆณจ็ๅฝๅจๆ๏ผๅฆๅไธ่ฝ้่ฟ็ผ่ฏใ่ Rust ่ฏญ่จ็ๅๅฑๅๆดๅฐ็็ๅฝๅจๆๆ ๆณจๆนๅๅๅฑ๏ผๅ ไธบ็ๅฝๅจๆๆ ๆณจ็กฎๅฎๆฏ็ฆไบบใ

ๅฏนไบ็ฎๅ๏ผtake_down ็ๅฝๅจๆๆ ๆณจๆไธค็งๅฝขๅผ๏ผ

    fn take_down<'a>() -> &'a str {
    fn take_down() -> &'static str {


ๆไบไธดๆถๅผ่กจ็ฐๆฏ่พ้่ฝ๏ผๅฆไธไปฃ็ ไธญๅฐฑๆไธดๆถๅผ๏ผ

```rust,ignore
fn main() {
    let mut foo = &mut "hello".to_string();
    // temporary value dropped while borrowed
    foo = &mut String::from("world");
    //         ^^^^^^^^^^^^^^^^^^^- temporary value is freed at the end of this statement
    //         |
    //         creates a temporary which is freed while still in use
    take_mut_ref(foo);
    //           --- borrow later used here
}

fn take_mut_ref(it: &mut String) {
    // ...
}
```

Rust ็ณป็ป็ๆๆๅผ้ฝๆ็ฑปๅ๏ผไปฃ็ ไธญๆฒกๆๆๅฎ foo ็ๅ้็ฑปๅ๏ผๅ ไธบๅฏไปฅไป็ญๅทๅณไพง็ๅผๆจๆตๅบๆฅๆฏ `&mut String`๏ผๅฎ่กจ็คบไธไธชๅผ็จ๏ผๅนถไธ่ฟไธชๅผ็จๅฏไปฅ็จๆฅๆนๅๆๅ็ๆฐๆฎใ

่ foo ๅ้ๅฃฐๆไธบ mut๏ผๆไปฅๅฎๆฏไธไธชๅฏๅๅ้๏ผๆไปฅๅ้ขๅฏไปฅๅฏน foo ่ฟ่กๅๆฌก่ตๅผใ

ๅจๅฏน foo ๅ้่ฟ่ก็ฌฌไบๆฌก่ตๅผๆถ๏ผ

- `String::from("world")` ๆฏไธไธช `String` ็ฑปๅ็ๅผ๏ผ
- ๆดไธช็ญๅทๅณไพงๆฏไธไธช `&mut String` ็ฑปๅ็ๅผ๏ผ

่ฟ้ๅฐฑ้่ไบไธไธชไธดๆถๅผ๏ผๅณ Strng ็ฑปๅ็ๅผๆฏไฝไธบไธไธชไธดๆถๅผๅญๅจ็ใ

ๅๆ ท็็ฑ๏ผๅๅฆ foo ็็ฑปๅๅฎไนไธบ `&String`๏ผ็ฌฌไบๆฌก่ตๅผ่กจ่พพๅผๅฆไธ๏ผ

    foo = &String::from("world");

ๅๆ ทไนๅญๅจไธไธช `String` ็ฑปๅ็ไธดๆถๅผ๏ผๅฆๆไธๅจๅ้ขไฝฟ็จ foo ๅ้๏ผ้ฃไน่ฟไธชไธดๆถๅผๆฏๆฒกๆไปปไฝๅฏไฝ็จ็ใ

่ไธๆฆๅ้ข็จๅฐไบ foo ๅ้๏ผ้ฃไน๏ผfoo ๅผ็จๅฐไบไธไธชไธดๆถๅ้๏ผ่่ฟไธชไธดๆถๅ้ๆฉๅฐฑๅจ่ตๅผ่ฏญๅฅ็ปๆๆถๅฐฑ้ๆพไบ๏ผ่ฟๅฐฑๅฏผ่ดๅๅญๆ ๆๅผ็จ๏ผ็ผ่ฏไธ่ฝ้่ฟใ

ๆไปฅ๏ผๆญฃ่งฃ็ๅๆณๆฏไฝฟ็จ let ๅฐไธดๆถๅผ็ปๅฎๅฐๅ้ไธ๏ผ

    let foo = &String::from("world");
    let foo = &mut String::from("world");


### ๐ข๐ต Lifetime Bound Syntax
- https://doc.rust-lang.org/rust-by-example/scope/lifetime/lifetime_bounds.html
- https://doc.rust-lang.org/stable/reference/trait-bounds.html

ๅๆณๅๅฏไปฅไฝฟ็จ Trait Bound ่ฏญๆณไธๆ ท๏ผ็ๅฝๅจๆไนๅฏไปฅ็ปๅฎใ

- `<'_>` lifetime elision ็ๅฝๅจๆ็็ฅใ
- `<'a: 'b, 'b>` reads as lifetime `'a` is at least as long as `'b`.
- `T: 'a` ่กจ็คบ T ็ฑปๅไธญ็ไปปไฝๅผ็จ้ฝ่ฆๆดปๅพๅ `'a` ไธๆ ท้ฟ
- `T๏ผTrait + 'a` ่กจ็คบ T ็ฑปๅๅฟ้กปๅฎ็ฐ Trait ๆฉๅฑๆนๆณ๏ผๅนถไธไปปไฝ T ็ฑปๅๅผ็จ้ฝ่ฆๆดป่ฟ `'a` ไธๆ ท้ฟ

```rust,ignore
#[derive(Debug)]
struct Ref<'a, T: 'a>(&'a T);
// `Ref` contains a reference to a generic type `T` that has
// an unknown lifetime `'a`. `T` is bounded such that any
// references in `T` must outlive `'a`. Additionally, the lifetime
// of `Ref` may not exceed `'a`.

// A generic function which prints using the `Debug` trait.
fn print<T>(t: T) where
    T: Debug {
    println!("`print`: t is {:?}", t);
}

// Here a reference to `T` is taken where `T` implements
// `Debug` and all *references* in `T` outlive `'a`. In
// addition, `'a` must outlive the function.
fn print_ref<'a, T>(t: &'a T) where
    T: Debug + 'a {
    println!("`print_ref`: t is {:?}", t);
}

fn main() {
    let x = 7;
    let ref_x = Ref(&x);

    print_ref(&ref_x);
    print(ref_x);
}
```

Generic Type Parameters, Trait Bounds, and Lifetimes Together

```rust,ignore
use std::fmt::Display;

fn longest_with_an_announcement<'a, T>(
    x: &'a str,
    y: &'a str,
    ann: T,
) -> &'a str
where
    T: Display,
{
    println!("Announcement! {}", ann);
    if x.len() > y.len() {
        x
    } else {
        y
    }
}
```


### ๐ข๐ต Static ้ๆ็ๅฝๅจๆ
- https://doc.rust-lang.org/rust-by-example/scope/lifetime/static_lifetime.html
- https://doc.rust-lang.org/rust-by-example/custom_types/constants.html

ๅธธ้ไธญๅฏไธๅ่ฎธ็็ๅญๆๆฏ `'static`๏ผๅฎๆฏ Rust ็จๅบๅธธ้้ป่ฎคๅๅซ็็ๅญๆใไธไธชๅผ็จๅทๆ `'static`
็ๅญๆ่กจ็คบๆฐๆฎไผๅจๆดไธช็จๅบ็่ฟ่กๆ้ดๆๆ๏ผไฝๅฏไปฅ่ขซ่ฟซ็ผฉ็ญๅฏฟๅฝใ

ๆไธค็งๅฎไน `'static` lifetime ็ๆนๅผ๏ผไธค้ฝ็ๆฐๆฎ้ฝไฟๅญๅจๅๅญ็ๅช่ฏปๅบ๏ผ

* Make a constant with the `static` declaration.
* Make a `string` literal which has type: `&'static str`.



ไพๅฆ๏ผๅฎไนไธไธชๅญ็ฌฆไธฒๅธธ้๏ผๅฏไปฅ็็ฅ่ฟไธช็ๅญๆ๏ผๅญ็ฌฆไธฒๅญ้ข้ๆฌ่บซๅฐฑๆฏ `&'static str` ๅช่ฏป็็ฑปๅ๏ผ

    const WORDS: &'static str = "hello rust!";
    const WORDS: &str = "hello convenience!";
    static WORDS: &str = "hello convenience!";

ๅธธ้ๅฎไน๏ผ

    const MAX_POINTS: u32 = 100_000;
    const HELLO: &str = "Hello, world!";

ๅญ็ฌฆไธฒๅฏน่ฑก็ฑปๅๆฏไธ็งไธ่ฝๅจ็ผ่ฏๆ็กฎๅฎ็็็ฑปๅ๏ผๆไปฅไธ่ฝๅฎไน่ฟๆ ทไธ็งๅธธ้๏ผ

    const DATABASE: String = String::from("something");

Rust ๆไพ็ๅฎ่ฟ็ง้ซ็บง็นๆงๅฏไปฅๅๅพๅคไบ๏ผไพๅฆ๏ผๅฐๆไปถๅๅฎน่ฏปๅฅไฝไธบไธไธช้ๆๅ้๏ผ

    const SRC: &'static str = include_str!("main.rs");
    const STR: &'static str = concat!("abc", "abc");

ๅญ้ข้ๅญ็ฌฆไธฒๆฏ็กฌ็ผ็ ๅจ็ผ่ฏๅบ็ไบ่ฟๅถๆไปถ้็๏ผๅจ่ฟ่กๆถ่ขซๅ ่ฝฝๅฐๅช่ฏปๅๅญไธญใๅ ๆญค๏ผๅฎๆฏไธๅฏๅ็๏ผๅนถไธๅจๆดไธช็จๅบ่ฟ่กๆถๆๆ๏ผๅ ๆญคๅฎๆฏ `'static` ็ใ

้ๅธธ้ๆ็ๅญๆๆฏๆจๆญๅบๆฅ็๏ผไธๅฟๆๅฎ๏ผไฟฎๆนๅฏๅ้ๆๅ้ๆฏไธๅฎๅจ็ใ

ๆ นๆฎ่ฟไธชๅ็๏ผๅฐฑๅฏไปฅๅฐๅ้ข Dangling References ็คบ่ไธญ็ไปฃ็ ๅๆน้ ไธบๆญฃ็กฎ็ๅผ็จ๏ผ

```rust,ignore
fn main() {
    let a; 
    {
        static B: &i32 = &(123);
        a = &B;
    }
    println!("lifetime ok? {}", a);
}
```

ๅฆๅจๅฝๆฐไธญไฝฟ็จๆณๅ where ไปๅฅๆนๅผๅฎไน๏ผ

    // 'static as part of a trait bound:
    fn generic<T>(x: T) where T: 'static {}

ไฝๆฏ๏ผไธไธช็ฑปๅไนๅฏไปฅ็จ้ๆ็ๅญๆไฟฎ้ฅฐ๏ผๅบๅไปฅไธไธค็งๅฝขๅผ๏ผ

- `&'static T` ๆฏๅฎไนไธไธช่ฝๅค่ขซๅฎๅจๅฐๆๆๆ ้ไน็ T ็ฑปๅ๏ผ็ดๅฐๆดไธช็จๅบ็ปๆญขใ
- `T: 'static` ่กจ็คบ T ็ฑปๅๅทๆ `'static` ็ๅฝๅจๆ๏ผ่ฝๅจ่ฟ่กๆถๅๅปบ๏ผ่ฝ่ขซๅฎๅจๅ้ๆๅฐๆนๅ๏ผ่ฝ่ขซ drop๏ผ่ฝๆดปๅฐๆดไธช็จๅบ็ปๆญขใ

ๅจ่ฟ่กๆถ็ๆๅจๆๅ้็้ๆบๆฐๆฎ๏ผ็ถๅ่ฟๅไธไธช `'static` ๅผ็จๆฏๅฏ่ก็๏ผๅช้่ฆไปๅบๅๅญๆณๆผ็ไปฃไปท๏ผไพๅฆ๏ผ

```rust,ignore
use rand;

// generate random 'static str refs at run-time
fn rand_str_generator() -> &'static str {
    let rand_string = rand::random::<u64>().to_string();
    Box::leak(rand_string.into_boxed_str())
}
```

ๆบ่ฝๆ้ Box ๆไพ็ leak ๆนๆณๆ็คบไบๆๅๅญๆณๆผ้ฃ้ฉ๏ผๅฎไผ่ฟๅไธไธช `&mut T`๏ผๅฆๆๆฒกๆไธบๅฎๆๅฎไธไธช
็ๅญๅจๆ๏ผ้ฃไนๆไธบ `'static` ็ๅญๅจๆๅนถ้ฟไนๅฐๅ ๆฎ็ๆๅๅๅญ๏ผ่ไธไธ่ฝ้่ฟ Drop ไธปๅจ่ฟ่ก้ๆพใ

ไปฅไธ็คบ่๏ผๅญ็ฌฆไธฒๅฏน่ฑกๅฆไฝไผ ๅฅ drop_static ๅฝๆฐไธญ็ปๅฎ `'static` ็ๅฝๅจๆ๏ผๅนถไปๅๅญไธญ้ๆพ๏ผ

```rust,ignore
#![allow(unused)]
use std::string::String;
use std::thread;
use std::time::Duration;
use rand;

fn drop_static<T: 'static>(t: T) {
    std::mem::drop(t);
}

fn main(){
    let mut strings: Vec<String> = Vec::new();
    for _ in 0..10_000_000 {
        if rand::random() {
            // all the strings are randomly generated
            // and dynamically allocated at run-time
            let string = rand::random::<u64>().to_string();
            strings.push(string);
        }
    }

    thread::sleep(Duration::from_secs(6));
    // strings are owned types so they're bounded by 'static
    for mut string in strings {
        // all the strings are mutable
        string.push_str("a mutation");
        // all the strings are droppable
        drop_static(string); // compiles
    }
    
    thread::sleep(Duration::from_secs(6));
    // all the strings have been invalidated before the end of the program
    println!("i am the end of the program");
}
```

ๅ้ strings ๆฏไธไธชๅ้ๅ่กจ `Vec<String>`๏ผๅถๅ็ด  `String` ๅฏน่ฑกๅ ๆฎๅๅญๅคงๅฐๅคงๆฆไธบ๏ผ

- String ๆฏ่ๆ้๏ผๆ้ 8 ๅญ่๏ผlen ๆๅ usize 8 ๅญ่๏ผ
- 8 ๅญ่ๅๅฎน้ฟๅบฆ๏ผ็ฑ u64 ่ฝฌๅญ็ฌฆ็ๆ็ 8 ๅญ่ๅๅฎน๏ผ

ๆ 1 ๅไธไธชๅ็ด ่ฎก็ฎ๏ผๆปๅๅญๅ ็จ 240MBใ

```rust,ignore
let o = vec![String::from("A"), String::from("B"), String::from("C")];
println!("{:p}", &o);    // 0x3bd8d7fa08
println!("{:p}", &o[0]); // 0x1f806a828d0
println!("{:p}", &o[1]); // 0x1f806a828e8
println!("{:p}", &o[2]); // 0x1f806a82900
```

### ๐ข๐ต Struct ไธ็ๅฝๅจๆ

ไปฅไธ็คบ่็ปๆไฝ๏ผๅๅ็ปๅ็ปๆไฝๅณๆฒกๆๆๅๅ็งฐ็็ปๆไฝ๏ผๅฆไฝไฝฟ็จ็ๅฝๅจๆๅฎไน๏ผๅพๅฝๆฐไธญไฝฟ็จ็ๅฝๅจๆๅฎไน๏ผ

```rust,ignore
// A type `Borrowed` which houses a reference to an
// `i32`. The reference to `i32` must outlive `Borrowed`.
#[derive(Debug)]
struct Borrowed<'a>(&'a i32);

// Similarly, both references here must outlive this structure.
#[derive(Debug)]
struct NamedBorrowed<'a> {
    x: &'a i32,
    y: &'a i32,
}

// An enum which is either an `i32` or a reference to one.
#[derive(Debug)]
enum Either<'a> {
    Num(i32),
    Ref(&'a i32),
}

fn main() {
    let x = 18;
    let y = 15;

    let single = Borrowed(&x);
    let double = NamedBorrowed { x: &x, y: &y };
    let reference = Either::Ref(&x);
    let number    = Either::Num(y);

    println!("x is borrowed in {:?}", single);
    println!("x and y are borrowed in {:?}", double);
    println!("x is borrowed in {:?}", reference);
    println!("y is *not* borrowed in {:?}", number);
}
```

ๅจ็ปๆไฝไธญไฝฟ็จ็ๅฝๅจๆๅฎไน๏ผ็ฎ็ๆฏไธบไบไฟ่ฏ็ปๆไฝๅฎไพ็็ๅฝๅจๆๅบ่ฏฅๅไปปๆไธไธชๆๅ็็ๅฝๅจๆๅฑๅญ๏ผๅฆๅๆๅ็ๅฝ็ป็ป่็ปๆไฝ่ฟๅจๆฏๆฒกๆๆไน็ใ

ๅฏน่ฑกๆนๆณ็็ๅฝๅจๆๆ ๆณจ๏ผ

```rust,ignore
struct ImportantExcerpt<'a> {
    part: &'a str,
}

impl<'a> ImportantExcerpt<'a> {
    fn level(&self) -> i32 {
        3
    }
}
```

ๅฏน่ฑกๆนๆณไธญไฝฟ็จ็ๅฝๅจๆๅฎไน็ๆ ผๅผไนไธๆ ท๏ผไปฅไธไพๅญไธบไบๆผ็คบๆๆ๏ผๅจๅ็ปๅ็ปๆไฝ็ๆนๆณไธญๆทปๅ ็ๅฝๅจๆๆณจ่งฃ๏ผๅปๆไนๆฏๆญฃๅธธ็๏ผ

```rust,ignore
struct StructedTuple(i32);

impl StructedTuple {
    // Annotate lifetimes as in a standalone function.
    fn add_one<'a>(&'a mut self) { 
        self.0 += 1;
    }
    fn print<'a>(&'a self) {
        println!("`print`: {}", self.0);
    }
}

fn main() {
    let mut owner = StructedTuple(18);

    owner.add_one();
    owner.print();
}
```


### ๐ข๐ต Trait ไธ็ๅฝๅจๆ
- https://doc.rust-lang.org/rust-by-example/scope/lifetime/trait.html

Trait ๆฏ Rust ๆๆ็น่ฒ็็ฑปๅๆฉๅฑๆฝ่ฑก็ณป็ป๏ผๅ Golang interface ็ฑปไผผ๏ผๅบไบ็ปๅ็ๆนๅผไธบๅ็ง็ฑปๅ็ๆไพๆฉๅฑๆนๆณใ

ๅจ็ฑปๅ็ณป็ปไธญ๏ผไปฅไธไธไธชๅบ่ฏฅๅฝไธ็งไธๅ็็ฑปๅๆฅ็ๅพ๏ผ

- `T` ่กจ็คบๆฅๆไธปๆ็็ฑปๅ๏ผ
- `&T` ่กจ็คบๅฑไบซๅผ็จ็ฑปๅ๏ผ
- `&mut T` ่กจ็คบ็ฌๆๅฏๅๅผ็จ็ฑปๅ๏ผ

ๅฎไปฌ้ฝๆฏๆ ้้๏ผๅ ไธบๅฏไปฅๅ็จไธไธช็ฑปๅๆ ้ๆฌกใ`T` ๆฏๅถๅฎไธคไธช๏ผ`&T` ๅ `&mut T` ็่ถ้๏ผไฝๆฏ `&T` ๅ `&mut T` ๆฒกๆไบค้ใ

็จไปฅไธไปฃ็ ็ๆฎตๅฏไปฅ่ฏๆ๏ผ

```rust,ignore
trait Trait {}

impl<T> Trait for T {}

// impl<T> Trait for &T {}
// ^^^^^^^^^^^^^^^^^^^^ conflicting implementation for `& _`
// impl<T> Trait for &mut T {}
// ^^^^^^^^^^^^^^^^^^^^^^^^ conflicting implementation for `&mut _`
```

ๅช่ฆไธบ `T` ๅฎ็ฐไบ Trait๏ผๅฐฑๆ ๆณๅไธบ `&T` ๅ `&mut T` ๅฎ็ฐ Trait๏ผๅฎไปฌๆฏ็ญไปท็ๅฎ็ฐใ



ไพๅฆ๏ผไปฅไธ็คบ่ไธญๅฎไนไบไธไธช Borrowed ็ปๆไฝ๏ผๅนถ็ปๅ็ๅฝๅจๆๅฎไน๏ผไปฅๆญฃ็กฎๅค็ `x` ๆๅ็ๅผ็จ็ๅฝๅจๆใ

```rust,ignore
// A struct with annotation of lifetimes.
#[derive(Debug)]
struct Borrowed<'a> {
    x: &'a i32,
}

// Annotate lifetimes to impl.
impl<'a> Default for Borrowed<'a> {
    fn default() -> Self {
        Self {
            x: &10,
        }
    }
}

fn main() {
    let b: Borrowed = Default::default();
    println!("b is {:?}", b);
}
```

`#[derive(Debug)]` ๅๆฐๆฎไฝ็จๆฏไธบ Borrowed ๅฎ็ฐๆๅฐ่ฐ่ฏไฟกๆฏ๏ผๅณไธบๆ ผๅผๆจกๆฟ `{:?}` ๅกซๅๆฐๆฎใ

ๅฆๆไธๅฎไน็ๅฝๅจๆๅๆฏๆไนๅไบ๏ผๅ ไธบๅ้จๆๅ `a` ๆฏๅจ Borrowed ๅ้จไฝ็จๅๅฎไน็ๅผ็จ๏ผๅฆๆๆฒกๆ
ๅฎไนไธไธช็ๅฝๅจๆ๏ผ็ผ่ฏๅจๆ นๆฎๆ ๆณ็ฎก็ๅฎ๏ผ็ธๅฝไบๆฌ็ฉบๆ้ใ

ๅจ Trait ๅฏไปฅไฝฟ็จ้ๆ็ๅฝๅจๆๅฎไน๏ผไฝๆฏๆณจๆ๏ผTrait bound ๅฎๆๅณ็็ปๅฎ็ฑปๅไธๅๅซไปปไฝ้้ๆๅผ็จใ
ๆนๆณๅณ่็ receiver ๅฏไปฅๆณๆฟๅคไนๅฐฑๆฟๅคไน๏ผ็ดๅฐๆง่ก `drop()` ๆๅฎๆพไธ๏ผๅฎๆๅคฑๆใ

่ฟๆฏๅพ้่ฆ็ๆฆๅฟต๏ผๅณๆๆๆๆป็ฑปๅๆฏ้่ฟ `'static` ็ๅฝๅจๆ็ปๅฎ็๏ผไฝๆฏๅผ็จ้ๅธธๅดไธๆฏใ

```rust,ignore
use std::fmt::Debug;

fn print_it( input: impl Debug + 'static ) {
    println!( "'static value passed in is: {:?}", input );
}

fn main() {
    // i is owned and contains no references, thus it's 'static:
    let i: i32 = 2;
    print_it(i);

    // oops, &i only has the lifetime defined by the scope of main(), 
    // so it's not 'static:
    // print_it(&i);
    // ---------^^-
    // |        |
    // |        borrowed value does not live long enough
    // argument requires that `i` is borrowed for `'static`

    static I: i32 = 1;
    print_it(&I)
  
} // `i` dropped here while still borrowed
```



## โก OOP ้ขๅๅฏน่ฑก็ผ็จ
- Functors, Applicatives, And Monads In Pictures https://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html
- ๅฝๆฐๅผ็ผ็จๅซ็ฆๆผ https://juejin.cn/post/6844903621507678216
- ไธบไปไนLisp่ฏญ่จๅฆๆญคๅ่ฟ๏ผ http://www.ruanyifeng.com/blog/2010/10/why_lisp_is_superior.html
- Object Oriented Programming Features of Rust https://doc.rust-lang.org/book/ch17-00-oop.html

็ผ็จ่ๅผ Programming paradigm ไธ่ฏๆๆฉๆฅ่ช Robert Floyd ๅจ 1979 ๅนดๅพ็ตๅฅ็้ขๅฅๆผ่ฏด๏ผๆฏๆ
่ฎก็ฎๆบไธญ็ผ็จ็ๅธ่ๆจกๅผๆๆนๆณใๆฏ็จๅบๅ็ๅพ็จๅบๅบ่ฏฅๅทๆ็่ง็น๏ผไปฃ่กจไบ็จๅบ่ฎพ่ฎก่่ฎคไธบ็จๅบๅบ่ฏฅๅฆไฝ่ขซๆๅปบ
ๅๆง่ก็็ๆณ๏ผไธ่ฝฏไปถๅปบๆจกๆนๅผๅๆถๆ้ฃๆ ผๆ็ดงๅฏๅณ็ณปใ

็ฐๅจไธปๆต็็ผ็จ่ๅผ๏ผ

- `็ปๆๅ็ผ็จ` Structured programming
- `้ขๅๅฏน่ฑก็ผ็จ` Object-oriented programming ๅธๅ็ Java ๅฐฑๆฏ้ขๅๅฏน่ฑก็ผ็จใ
- `ๅฝๆฐๅผ็ผ็จ` Functional programming ๅธๅ็ Lisp ่ฏญ่จๅฐฑๆฏๅฝๆฐๅผ็ผ็จใ
- `ๅฝไปคๅผ็ผ็จ` Imperative ไธป่ฆๆๆณๆฏๅณๆณจ่ฎก็ฎๆบๆง่ก็ๆญฅ้ชค๏ผๅณไธๆญฅไธๆญฅๅ่ฏ่ฎก็ฎๆบๅๅไปไนๅๅไปไนใ
- `ๅฃฐๆๅผ็ผ็จ` Declarative ๅฎ็ไธป่ฆๆๆณๆฏๅ่ฏ่ฎก็ฎๆบๅบ่ฏฅๅไปไน๏ผไฝไธๆๅฎๅทไฝ่ฆๆไนๅใ็ปๅธ็ SQL ็ผ็จๅฐฑๆฏไพๅญ๏ผไปฅๆฐๆฎ็ปๆ็ๅฝขๅผๆฅ่กจ่พพ็จๅบๆง่ก็้ป่พใ

Rust ๆฏๅค่ๅผ็็ณป็ป็ผ็จ่ฏญ่จ๏ผๆขๅฏไปฅๆฏ OOP ไนๅฏไปฅๆฏ FPใRust ๅบไบๅฝๆฐๅผๅๆฝ่ฑกๆฅๅฃ็ปๅ็้ขๅๅฏน่ฑก็ผ็จ๏ผ
้่ฟ traits ๅฎไนๆฅๅฃใ

้ขๅฏนๅฏน่ฑก๏ผOOP๏ผๅฏไปฅ็่งฃไธบๆฏๅฏนๆฐๆฎ็ๆฝ่ฑก๏ผๆฏๅฆๆไธไธชไบบๆฝ่ฑกๆไธไธช Object๏ผๅณๆณจ็ๆฏๆฐๆฎไธ่กไธบใ

ๅฝๆฐๅผ็ผ็จๆฏไธ็ง่ฟ็จๆฝ่ฑก็ๆ็ปด๏ผๅฐฑๆฏๅฏนๅฝๅ็ๅจไฝๅป่ฟ่กๆฝ่ฑก๏ผๅณๆณจ็ๆฏๅจไฝใLisp ๆฏๆๆๅฝๆฐๅผ่ฏญ่จ็ๅง็ฅ๏ผ
ไฝ Lisp ๅนถไธๅ็บฏๆฏๅฝๆฐๅผ็ผ็จ่ฏญ่จ๏ผ่ๆฏๅค่ๅ็ผ็จ่ฏญ่จใๅฎๅฏไปฅ่ฟ่กๅฝๆฐๅผ็ผ็จใ่ฟ็จๅผ็ผ็จใ้ขๅๅฏน่ฑก็ผ็จใ

Lisp ่ฏญ่จ่ฏ็ๅธฆๆฅ 9 ็งๆฐๆๆณ๏ผ

- if-else ๆกไปถ็ปๆ๏ผ่ฟๅจๅฝๆถๆต่ก็ Fortran I ๆฒกๆ่ฟไธช็ปๆ๏ผๅฎๅชๆๅบไบๆบๅจๆไปค็ goto ็ปๆใ
- ๅฝๆฐๆฏๆฐๆฎ็ฑปๅ๏ผๆ่ชๅทฑ็ๅญ้ข่กจ็คบๅฝขๅผ๏ผliteral representation๏ผ๏ผ่ฝๅคๅจๅญๅจๅ้ไธญ๏ผไน่ฝๅฝไฝๅๆฐไผ ้ใ
- ้ๅฝ๏ผLisp ๆฏ็ฌฌไธ็งๆฏๆ้ๅฝๅฝๆฐ็้ซ็บง่ฏญ่จใ
- ๅ้็ๅจๆ็ฑปๅ๏ผๅ้ๆฏๆ้๏ผๅถๆๅ็ๅผๆๆ็ฑปๅไนๅ๏ผๅคๅถๅ้็ธๅฝๅคๅถๆ้๏ผ่ไธๆฏๅถๆๅ็ๆฐๆฎใ
- ๅๅพๅๆถๆบๅถใ
- ็จๅบ็ฑ่กจ่พพๅผ็ปๆ๏ผๆฏไธช่กจ่พพๅผ้ฝ่ฟๅไธไธชๅผ๏ผ่ฟไธๅคงๅคๆฐ่ฏญ่จไธๅ๏ผๅฎไปฌ็็จๅบ็ฑ่กจ่พพๅผๅ่ฏญๅฅ็ปๆใ

    ๅบๅ่กจ่พพๅผๅ่ฏญๅฅ๏ผๅจ Fortran I ไธญๆฏๅพ่ช็ถ็๏ผๅ ไธบๅฎไธๆฏๆ่ฏญๅฅๅตๅฅใๆไปฅ๏ผๅฆๆไฝ ้่ฆ็จๆฐๅญฆๅผๅญ่ฎก็ฎไธไธชๅผ๏ผ้ฃๅฐฑๅชๆ็จ่กจ่พพๅผ่ฟๅ่ฟไธชๅผ๏ผๆฒกๆๅถไป่ฏญๆณ็ปๆๅฏ็จ๏ผๅ ไธบๅฆๅๅฐฑๆ ๆณๅค็่ฟไธชๅผใ

    ๅๆฅ๏ผๆฐ็็ผ็จ่ฏญ่จๆฏๆๅบๅ็ปๆ๏ผblock๏ผ๏ผ่ฟ็ง้ๅถๅฝ็ถไนๅฐฑไธๅญๅจไบใไฝๆฏไธบๆถๅทฒๆ๏ผ่กจ่พพๅผๅ่ฏญๅฅ็ๅบๅๅทฒ็ปๆ นๆทฑ่ๅบใๅฎไป Fortran ๆฉๆฃๅฐ Algol ่ฏญ่จ๏ผๆฅ็ๅๆฉๆฃๅฐๅฎไปฌไธค่็ๅ็ปง่ฏญ่จใ

- ็ฌฆๅท็ฑปๅ symbol ๅฎๅฎ้ไธๆฏไธ็งๆ้๏ผๆๅๅจๅญๅจๅๅธ่กจไธญ็ๅญ็ฌฆไธฒ๏ผๆ้ๅฐๅๅฏไปฅๆฏ่พไธคไธช็ฌฆๅทๆฏๅฆ็ธ็ญใ
- ไปฃ็ ไฝฟ็จ็ฌฆๅทๅๅธธ้็ปๆ็ๆ ๅฝข่กจ็คบๆณ๏ผnotation๏ผใ
- ๆ ่ฎบไปไนๆถๅ๏ผๆดไธช่ฏญ่จ้ฝๆฏๅฏ็จ็ใLisp ๅนถไธ็ๆญฃๅบๅ่ฏปๅๆใ็ผ่ฏๆๅ่ฟ่กๆใ

    ๅจ่ฏปๅๆ่ฟ่กไปฃ็ ๏ผไฝฟๅพ็จๆทๅฏไปฅ้ๆฐ่ฐๆด Lisp ็่ฏญๆณ๏ผ
    ๅจ็ผ่ฏๆ่ฟ่กไปฃ็ ๏ผๅๆฏ Lisp ๅฎ็ๅทฅไฝๅบ็ก๏ผ
    ๅจ่ฟ่กๆ็ผ่ฏไปฃ็ ๏ผไฝฟๅพ Lisp ๅฏไปฅๅจ Emacs ่ฟๆ ท็็จๅบไธญ๏ผๅๅฝๆฉๅฑ่ฏญ่จ๏ผ
    ๅจ่ฟ่กๆ่ฏปๅไปฃ็ ๏ผไฝฟๅพ็จๅบไน้ดๅฏไปฅ็จ S-expression ้ไฟก๏ผ่ฟๆฅ XML ๆ ผๅผ็ๅบ็ฐไฝฟๅพ่ฟไธชๆฆๅฟต่ขซ้ๆฐ"ๅๆ"ๅบๆฅไบใ

็บฏๅฝๆฐๆฏไธไธช้่ฆ็ๆฆๅฟต๏ผ

- ๅฎไน๏ผไธไธชๅฝๆฐๅฆๆ่พๅฅๅๆฐ็กฎๅฎ๏ผ่พๅบ็ปๆๆฏๅฏไธ็กฎๅฎ็๏ผไธๅฏนๅค้ ๆๅฝฑๅ๏ผ้ฃไนไปๅฐฑๆฏ็บฏๅฝๆฐใ
- ็น็น๏ผๆ ็ถๆ๏ผๆ ๅฏไฝ็จ๏ผๆ ๅณๆถๅบ๏ผๅน็ญ๏ผๆ ่ฎบ่ฐ็จๅคๅฐๆฌก๏ผ็ปๆ็ธๅ๏ผใ

ๅ่๏ผ

    function pureAdd(x, y){
       return x + y
    }

    let sum = 0;
    function notPureAdd(){
        sum++
    }

ๅฝๆฐๆฏ้ๅ curry ๆฏๅฝๆฐๆ็บฏ็ไธ็งๆนๆณ๏ผๅฎๅฐ่ฃๅๅฝๆฐ๏ผๅฎ็ฐๅช็ปๅฎไผ ้ไธ้จๅๅๆฐๆฅ่ฐ็จๅฎ๏ผ่ฟๅไธไธชๅฝๆฐๅปๅค็ๅฉไธ็ๅๆฐใ

ไพๅฆ๏ผๅฐไธ้ข็ pureAdd ๅฝๆฐๆฏ้ๅ๏ผ

    function adder(y) {
       return function (x) { 
        return x + y;
       }; 
    }
    var addMore =  adder(2)(1)  

ๅคๆไธ็น็ๅฝๆฐๆ็บฏ็คบ่๏ผ

    function change (fn , els , color){
        Array.from(els).map((item)=>(fn(item, color)))
    }

    function changeCurry(fn){
        return function(els, color){
            Array.from(els).map((item)=>(fn(item,color)))
        }
    }

็ปๅธๅฝๆฐๅผ็ผ็จ้ๅธธๆฏไธ้ข่ฟๆ ท๏ผ

    function double(x) {
      return x * 2
    }
    function add5(x) {
      return x + 5
    }

    var a = double(add5(1))

่ฝฏไปถๆๅบๆฌ็ๆฐๆฎ๏ผๅฐฑๆฏๅ็งๅผ value๏ผๅฆๆไปฅๆฐๆฎไธบๆ ธๅฟ๏ผไธไธชๅจไฝไธไธชๅจไฝๅปๆง่ก๏ผ

    (5).add5().double()

ๆพ็ถ๏ผๅฆๆ่ฝ่ฟๆ ทๆง่กๅฝๆฐ็่ฏ๏ผๅฐฑ่ๆๅคๅฆใ

ไธบไบๅฎ็ฐ่ฟๆ ท็่ฏญๆณ็ปๆ๏ผ้ฆๅ่ฆๅฐๆฐๆฎๅฝไฝไธไธชๅฏน่ฑกๆฅๅค็๏ผๅ ไธบ่ฆๆ่ฝฝๆนๆณใ

่ฟ้็ดๆฅๅฝๅญ Functor ็ๅฎ็ฐ๏ผ

    class Functor{
        constructor (value) {
           this.value = value ;
        }
        map (fn) {
          return Functor.of(fn(this.value))
        }
    }
    Functor.of = function (val) {
        return new Functor(val);
    }

    Functor.of(5).map(add5).map(double);

Functor ้่ฟ map ๆนๆณๅฎ็ฐๆนๆณ็ฎก็ๅฎนๅจ๏ผๆฏไธไธชๅผๅค็ๆฃๅๆ ๅฐๅฐๅฆไธไธชๅฎนๅจใ

ๅฝๆฐๅผ็ผ็จ้้ข็่ฟ็ฎ๏ผ้ฝๆฏ้่ฟๅฝๅญๅฎๆ๏ผๅณ่ฟ็ฎไธ็ดๆฅ้ๅฏนๅผ๏ผ่ๆฏ้ๅฏน็ฎก็่ฟไธชๅผ็ๅฎนๅจ๏ผ่ฟไธชๅฎนๅจไนๅฏไปฅ็งฐไธบไธไธๆนใ

Haskell ่ฏญ่จไธญ็ Functors, Applicatives, Monads, Arrows ็ญ็ญ้ฝๅบไบๆญคๅ็ใ

    class Maybe{
           constructor (value) {
              this.value = value ;
           }      
           map (fn) {
              return this.value ? Maybe.of(fn(this.value)) : Maybe.of(null);
           }
        }
    Maybe.of = function (val) {
         return new Maybe(val);
    }

    var a = Maybe.of(null).map(function (s) {
      return s.toUpperCase();
    });

ๅช้่ฆๆๅจไธญ่ฎพ็ฝฎไธไธช็ฉบๅผ่ฟๆปค๏ผๅฐฑๅฏไปฅๅฎๆ่ฟๆ ทไธไธช Maybe ๅฝๅญใๆไปฅๅ็งไธๅ็ฑปๅ็ๅฝๅญ๏ผไผๅฎๆไธๅ็ๅ่ฝใ

ๆฏไธชๅฝๅญๅนถๆฒกๆ็ดๆฅๅปๆไฝ้่ฆๅค็็ๆฐๆฎ๏ผไนๆฒกๆๅไธๅฐๅค็ๆฐๆฎ็ๅฝๆฐไธญๆฅ๏ผ่ๆฏๅจ่ฟไธญ้ดๅไบไธไบๆฆๆชๅ่ฟๆปค๏ผ่ฟๅ้ซ้ถๅฝๆฐๆ็นๅใ

็ฐๅจๆไปฌๅฐฑ็จๅฝๆฐๅผ็ผ็จๅไธไธชๅฐ็ปไน ๏ผ ๆไปฌๆไธไธชๅญ็ฌฆไธฒ๏ผๅธๆๅค็ๆๅคงๅ็ๅญ็ฌฆไธฒ๏ผ็ถๅๅ ่ฝฝๅฐๆๅฎ id ็ HTML ่็นไธใ

    let $ = id => Maybe.of(document.getElementById(id));
    class Maybe{
       constructor(value){
            this.value = value;   
       }
       map(fn){
        return this.value ? Maybe.of(fn(this.value)) : Maybe.of(null);
       }
       static of(value){
          return new Maybe(value);
       }
    }
    let toUpperCase = str => str.toUpperCase();
    let html = id => content => {
       $(id).map(dom => {
          return (dom.innerHTML = content);
       });
    };

    Maybe.of(str).map(toUpperCase).map(html('text'));

ๆณจๆ `html()` ๅฝๆฐๅตๅฅ็ปๆ๏ผ

- ๅฆๆๅชๅจ้้ขๅ  return content๏ผๅค้ขๅฝๆฐๅนถๆฒกๆ่ฟๅๅผ๏ผ
- ๅฆๆๅชๅจๅค้ขๅ  return๏ผไนๅไธๅฐ content๏ผ
- ๅตๅฅๅฝๆฐ้ฝๅ  return ่ฟๅฐฑๅบ็ฐไบ Maybe.of( Maybe.of(str) ) ๅตๅฅ็ปๆ๏ผ

Monad ๅฝๅญ็ๅ่ฝๆฏ่พ้่ฆ๏ผๅฝ้่ฆๅค็็ๆฐๆฎๆฏ Maybe{value: Maybe} ่ฟๆ ท็ๅตๅฅ็ปๆ๏ผๅฏไปฅๅ ไธไธช `join()` ๆนๆณๆฅ่ฟๅ value๏ผๆ่็ดๆฅๆไพ `chain()` ๆนๆณๅจๆง่กๆถ็ดๆฅๆง่ก `map()` + `join()` ไธคไธชๆญฅ้ชคใ

    class Maybe{
       constructor (value) {
          this.value = value ;
       }      
       map (fn) {
          return this.value ? Maybe.of(fn(this.value)) : Maybe.of(null);
       }
       join ( ){
          return this.value;
       }
       chain(fn) {
          return this.map(fn).join();
       }
       static of(value){
          return new Maybe(value);
       }
    }

    Maybe.of(str).map(toUpperCase).chain(html('text'));

่ฟๆ ทๅปๆไธๅฑๅตๅฅ็ๅฝๅญ๏ผ่ฟๅ็ๅฐฑๆฏๅชๆไธๅฑๅตๅฅ็ๅฝๅญๅฆใ


### ๐ข๐ต Functions ๅฝๆฐ
- https://doc.rust-lang.org/book/ch03-03-how-functions-work.html
- https://doc.rust-lang.org/book/ch12-01-accepting-command-line-arguments.html
- Rust by Example - Functions https://doc.rust-lang.org/stable/rust-by-example/fn.html
- https://cheats.rs/#functions-behavior
- Functional Language Features: Iterators & Closures https://doc.rust-lang.org/book/ch13-00-functional-features.html

Rust ็ๅฝๆฐๅ C++ ็ๅบๆฌ็ปๆๅพ็ธไผผ๏ผ่ฏญๆณไธ่ฟๆฏๆไบๅทฎๅซ็ใ

ๅฝๆฐไฝฟ็จๆนๅผๅฆไธ๏ผ

- Function ็ฌ็ซๅฝๆฐ๏ผ
- Methods ไฝไธบๅฏน่ฑกๆนๆณ๏ผๅณ้ๅ ๅฐๅฏน่ฑก็ๅฝๆฐ๏ผ
- Closures ไฝไธบ้ญๅไฝฟ็จ๏ผ่ฟๆฏ Rust ไธญ่พๅคๆ็ๅ่ฝ๏ผ
- Higher Order Functions ้ซ้ถๅฝๆฐ๏ผๅฝๆฐไฝไธบๅๆฐๅนถ่ฟๅไธไธชๅฝๆฐ๏ผไปไปๅ ไธชๅฃณ๏ผ
- Diverging functions ๅๆฃๅฝๆฐ๏ผๅณๆฒกๆ่ฟๅ็ๅฝๆฐ๏ผไนๅซ Never ! ็ฑปๅ๏ผๅฆไธไธชๅฝๆฐๆง่ก้่ฏฏ panic๏ผ

้ฆๅ๏ผๆฏๅฝๆฐๅฃฐๆไธญ๏ผไฝฟ็จ `->` ็ฌฆๅท่กจ็คบๆ่ฟๅๅผ๏ผๆฒกๆ่ฟๅๅผ็ๅฝๆฐไธ็จ่ฟไธช็ฌฆๅทใ

ๅถๆฌก๏ผ่ฟๅๅผ็ๆนๅผไธๅใไพๅฆ๏ผ่ฟๅๅผๅฏไปฅไฝฟ็จ `return` ่ฏญๅฅ๏ผไนๅฏไปฅไฝฟ็จ `tail return` ่ฟๅๅผ๏ผๅณๅฝๆฐไฝๆๅไธ่ก๏ผๆฒกๆ่กๆซๅๅทใ

ๅฆๅค๏ผRust ่ฑๆฌๅท่ฏญๅฅๅไนๅฏไปฅๆ่ฟๅๅผ๏ผๅฎๆฏไธไธชๅฎๆด็ไฝ็จๅ๏ผ้่ฟ `tail return` ่ฟๅไธไธชๅผ๏ผๆณจๆไธ่ฝๅ ๆซๅฐพ็ๅๅทใ

```rust,ignore
 fn main() {
    let x = plus_one(5);

    let y = {
        let x = 3;
        x + 1
    };
    println!("The value of x is: {} and y is: {}", x, y);

    let guess: u32 = "42".parse().expect("Not a number!");
    println!("guess {}", guess);
}

fn plus_one(x: i32) -> i32 {
    return x + 1;
    // x + 1
}
```

ๅฆๅค๏ผ`println!()` ๆฏไธไธชๅฎ๏ผ่ไธๆฏๅฝๆฐ๏ผๅบๅๅฝๆฐๅๅฎ็ๅฏไธๅๆณ๏ผๅฐฑๆฏ็ๅ็งฐๆๅๆๆฒกๆๆๅนๅทใ

ๅจๆฐๅญฆๅ่ฎก็ฎๆบ็งๅญฆไธญ๏ผ้ซ้ถๅฝๆฐๆฏ่ณๅฐๅทๆไธๅๅ่ฝไนไธ็ๅฝๆฐ๏ผๅถไปๆๆๅฝๆฐ้ฝๆฏไธ้ถๅฝๆฐ๏ผ

- ๅฐไธไธชๆๅคไธชๅฝๆฐไฝไธบๅๆฐใ
- ่ฟๅไธไธชๅฝๆฐไฝไธบ็ปๆใ

้ซ้ถๅฝๆฐๆไผ ๅฅ็ๅฝๆฐๅไธไธชๅฐ่ฃ๏ผ็ถๅ่ฟๅ่ฟไธชๅฐ่ฃๅฝๆฐ๏ผ่พพๅฐๆด้ซ็จๅบฆ็ๆฝ่ฑกใ

ๅจๆฐๅญฆไธญ๏ผ้ซ้ถๅฝๆฐไน็งฐไธบ`็ฎๅญ`ๆ`ๆณๅฝ`ใๅพฎ็งฏๅไธญ็ๅพฎๅ็ฎๅญๆฏไธไธชๅพๅธธ่ง็ไพๅญ๏ผๅ ไธบๅฎๆไธไธชๅฝๆฐๆ ๅฐๅฐๅฎ็ๅฏผๆฐ๏ผไนๆฏไธไธชๅฝๆฐใ

ๆฎ้็้ซ้ถๅฝๆฐๅบ็จไพๅญ๏ผ

- map ๅฝๆฐๅจ่ฎธๅคๅฝๆฐๅผ็ผ็จ่ฏญ่จไธญ้ฝๆ๏ผๅฎๆฏ้ซ้ถๅฝๆฐ็ไธไธชไพๅญใๅฎๆฅๅไธไธชๅฝๆฐ f ๅไธไธชๅ็ด ๅ่กจไฝไธบๅๆฐ๏ผ็ปๆ่ฟๅไธไธชๆฐๅ่กจ๏ผๅถไธญfๅบ็จไบๅ่กจไธญ็ๆฏไธชๅ็ด ใ
- ๆๅบๅฝๆฐ๏ผๅฎๅฐๆฏ่พๅฝๆฐไฝไธบๅๆฐ๏ผๅ่ฎธ็จๅบๅๅฐๆๅบ็ฎๆณไธๆญฃๅจๆๅบ็้กน็ๆฏ่พๅๅผใCๆ ๅๅฝๆฐqsortๅฐฑๆฏไธไธชไพๅญใ
- fold ๆ reduce
- Function composition
- Integration
- Callback
- Tree traversal

ไปฅไธ็จไธค็งๆนๅผ็ผ็จๅฎ็ฐ 1000 ไปฅๅ็ๅถๆฐๅนณๆนๅ๏ผ

```rust,ignore
fn is_odd(n: u32) -> bool {
    n % 2 == 1
}

println!("Find the sum of all the squared odd numbers under 1000");
let upper = 1000;

// Imperative approach
let mut acc = 0;
// Iterate: 0, 1, 2, ... to infinity
for n in 0.. {
    let n_squared = n * n;

    if n_squared >= upper {
        break;
    } else if is_odd(n_squared) {
        acc += n_squared;
    }
}
println!("imperative style: {}", acc);

// Functional approach
let sum_of_squared_odd_numbers: u32 =
    (0..).map(|n| n * n)                             // All natural numbers squared
         .take_while(|&n_squared| n_squared < upper) // Below upper limit
         .filter(|&n_squared| is_odd(n_squared))     // That are odd
         .fold(0, |acc, n_squared| acc + n_squared); // Sum them
println!("functional style: {}", sum_of_squared_odd_numbers);
```

ๅพ็ไบ lazy iterators๏ผไธ้ขๅฝๆฐๅผๅฎ็ฐไธญ๏ผ่ฝ็ถ็ป `map()` `take_while()` `filter()` ่ฟ็ฑปๆนๆณ้ฝไผ ๅฅไบไธไธช้ญๅ๏ผไฝๆฏๅฎๅนถๆฒกๆๅฏนๆๆ่ช็ถๆฐ้ฝๆง่กไธ้๏ผ่ๆฏๅจๆง่ก `fold()` ๆฑๅผๆถๆๅผๅงๅค็ใ

ๅจ Rust ไธญๆฐธ่ฟไธ่ฟๅ็ๅฝๆฐไนๆ็ฑปๅ๏ผNever ็ฑปๅ็จๆๅนๅท่กจ็คบ๏ผๅฆๅๅซๆ ้ๅพช็ฏ `loop {}`๏ผๆ่ panic๏ผ

```rust,ignore
#![feature(never_type)]
fn panic() -> ! {
    panic!("This call never returns.");
}

fn main() {
    let a = panic();
    println!("Programme panic and you canโt see this line.");
    let x: ! = panic!("This call never returns.");
    println!("You will never see this line!");
}
```



### ๐ข๐ต FOOP ๅฝๆฐๅผ้ขๅๅฏน่ฑก็ผ็จ
- https://cheats.rs/#functions-behavior
- Design Patterns: Elements of Reusable Object-Oriented Software by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides
- [Object Oriented Programming Features of Rust](https://doc.rust-lang.org/book/ch17-00-oop.html)
- [What Was the Gang of Four in China?](https://www.thoughtco.com/the-gang-of-four-195613)
- [Rust by Example - Traits](https://doc.rust-lang.org/rust-by-example/trait.html)
- [Abstraction without overhead: traits in Rust](https://blog.rust-lang.org/2015/05/11/traits.html)
- [Dynamically Sized Types and the Sized Trait](https://doc.rust-lang.org/book/ch19-04-advanced-types.html)

Design Patterns: Elements of Reusable Object-Oriented Software ไธไนฆ็ฑ Erich Gammaใ
Richard HelmใRalph Johnson ๅ John Vlissides ๅ่๏ผAddison-Wesley๏ผ1995๏ผใ่ฟๅ ไฝไฝ่
ๅธธ่ขซ็งฐไธบๅไบบ็ป๏ผ่่ฎพ่ฎกๆจกๅผ่ฟๆฌไนฆไนๅฐฑ่ขซ็งฐไธบ the Gang of Four Book ๆ GoFใ

็คบ่ๅฐๅฝๆฐ้ๅ ๅฐๅฏน่ฑกไธไฝไธบๆนๆณไฝฟ็จ๏ผ

```rust,ignore
struct Point { x: f64, y: f64, }

// Implementation block, all `Point` methods go in here
impl Point {
    // This is a static method used as constructors
    fn origin() -> Point {
        Point { x: 0.0, y: 0.0 }
    }

    fn new(x: f64, y: f64) -> Point {
        Point { x: x, y: y }
    }
}

struct Rectangle { p1: Point, p2: Point, }

impl Rectangle {
    // This is an instance method
    // `&self` is sugar for `self: &Self`, where `Self` is the type of the
    // caller object. In this case `Self` = `Rectangle`
    fn area(&self) -> f64 {
        let Point { x: x1, y: y1 } = self.p1;
        let Point { x: x2, y: y2 } = self.p2;

        ((x1 - x2) * (y1 - y2)).abs()
    }

    fn perimeter(&self) -> f64 {
        let Point { x: x1, y: y1 } = self.p1;
        let Point { x: x2, y: y2 } = self.p2;

        2.0 * ((x1 - x2).abs() + (y1 - y2).abs())
    }

    // This method requires the caller object to be mutable
    // `&mut self` desugars to `self: &mut Self`
    fn translate(&mut self, x: f64, y: f64) {
        self.p1.x += x;
        self.p2.x += x;

        self.p1.y += y;
        self.p2.y += y;
    }
}

// `Pair` owns resources: two heap allocated integers
struct Pair(Box<i32>, Box<i32>);

impl Pair {
    // This method "consumes" the resources of the caller object
    // `self` desugars to `self: Self`
    fn destroy(self) {
        // Destructure `self`
        let Pair(first, second) = self;

        println!("Destroying Pair({}, {})", first, second);

        // `first` and `second` go out of scope and get freed
    }
}

fn main() {
    let rectangle = Rectangle {
        p1: Point::origin(),
        p2: Point::new(3.0, 4.0),
    };

    // Instance methods are called using the dot operator
    // Note that the first argument `&self` is implicitly passed, i.e.
    // `rectangle.perimeter()` === `Rectangle::perimeter(&rectangle)`
    println!("Rectangle perimeter: {}", rectangle.perimeter());
    println!("Rectangle area: {}", rectangle.area());

    let mut square = Rectangle {
        p1: Point::origin(),
        p2: Point::new(1.0, 1.0),
    };

    // Error! `rectangle` is immutable
    //rectangle.translate(1.0, 0.0);

    // Okay! Mutable objects can call mutable methods
    square.translate(1.0, 1.0);

    let pair = Pair(Box::new(1), Box::new(2));
    pair.destroy();

    // Error! Previous `destroy` call "consumed" `pair`
    // pair.destroy();
    // TODO ^ Try uncommenting this line
}
```

่ฆ็น๏ผ

- ไฝฟ็จ `struct` ๅฎไน็ปๆไฝ๏ผ
- ไฝฟ็จ `impl` ไธบ็ปๆไฝๅฎ็ฐๆนๆณ๏ผ
- ๆนๆณๅๆฐไธญ็ฌฌไธไธชๅฏไปฅๅฎไน Self ็ฑปๅ๏ผๅนถไธๅฝๅไธบ self ่กจ็คบไธไธชๆๅๆนๆณ๏ผๅฆๅ่กจ็คบไธไธช static ๆนๆณ๏ผ
- ๅฆๅค๏ผ่ฟ่ฝ้่ฟ `Box<i32>` ๆฅๆผ็คบๅฆไฝไฝฟ็จ Heap ๅๅญๆฅ็ผ็จ๏ผ

Rust ไธบๆๅๆนๆณๅฎไน self ๆไพไบ็ฎๅ่กจ่พพ๏ผ

- `self` desugars to `self: Self`
- `&mut self` desugars to `self: &mut Self`
- `&self` is sugar for `self: &Self`


### ๐ข๐ต Traits & Polymorphism

Rust ็็ฑปๅ็ณป็ปๅบไบ็ปๅๆ็ปด๏ผไธๅ C++/Java ้่ฟ็ฑปๆฅๅ่ฃ๏ผ็ปๅๆนๅผๆฏๅฝๆฐๅผ็ผ็จไธญๅฎ็ฐ้ขๅๅฏน่ฑก็ผ็จ
็ไธ็งๆๆๆๆฎตใๅนถไธ๏ผ็ปๅๆนๅผๆฏ็ฑปๅฐ่ฃ็ปงๆฟๆนๅผๆด่ฝ่กจ่พพ็ๅฎไธ็ใ

ๆฏๅฆ๏ผ็ๅฎไธ็ไธญ็้ธ็ฑป๏ผๅฎไผ้ฃ๏ผ้ฃไนๅฎไน็ฑป๏ผ

    class Bird {
        void fly(){}
    }
    class BlankSwan extends Bird {
        void fly(){ ... }
    }

ๅฝ้่ฆ่กจ่พพ้ธต้ธ่ฟ็งไธไผ้ฃ็้ธๆถ๏ผๅฐฑ้่ฆๅฅฝๅฅฝ่ฎพ่ฎกไธไธ็ฑป็็ปงๆฟๅณ็ณปไบใ

ไฝๆฏ๏ผไฝฟ็จ็ปๅๆนๅผ๏ผๅฐฑไธๅญๅจ่ฟ็ง็ปงๆฟ็บฆๆ๏ผไธ็ป้ธต้ธๅฎ็ฐ `fly()` ๆนๆณๅฐฑ่กไบ๏ผๆ่ไฝฟ็จ Flyable Trait ๆฅ่กจ่พพไผ้ฃ็้ธ๏ผๆช่ณๆฏไธๆฏ้ธ็ฑป็่่ ใ

่ฟ็งๅบไบ็ปๅๆ็ปด็้ขๅๅฏน่ฑก็ผ็จ FOOP - Functional Object-Oriented Programming ๆฏ้ๅธธ็ตๆดป็ๅฎ็ฐ๏ผๅนถไธๆฒกๆ C++ ้ฃๆ ทๅคๆๅๅญๆจกๅใ

้่ฟ็ปๅไธๅฝๆฐๅผ็ผ็จ๏ผRust ๅพๅฅฝๅฐๅฎ่ทตไบ้ขๅๅฏน่ฑก็ไธๅคงๅๅ๏ผCharacteristics of Object-Oriented Languages๏ผ

- Encapsulation that Hides Implementation Details, Objects Contain Data and Behavior
- Inheritance as a Type System and as Code Sharing
- Polymorphism ๅคๆๆงๅฏน่ฎธๅคไบบๆฅ่ฏดๆฏ้ไผ ็ๅไน่ฏ๏ผไฝๅฎๅฎ้ไธๆฏไธไธชๆดไธ่ฌ็ๆฆๅฟต๏ผๆ็ๆฏๅฏไปฅๅค็ๅค็ง็ฑปๅๆฐๆฎ็ไปฃ็ ใๅฏนไบ็ปงๆฟ๏ผ่ฟไบๅคๆ็ฑปๅ้ๅธธๆฏๅญ็ฑปใ

Rust ไฝฟ็จๆณๅๆฅๆฝ่ฑกไธๅ็ๅฏ่ฝ็ฑปๅๅๅฎๆฝ trait bounds๏ผไป่ๅฏน่ฟไบ็ฑปๅๅฎ็ฐๆฉๅฑ๏ผ่ฟๆๆถ่ขซ็งฐไธบๆ็ๅๆฐๅคๆๆง Bounded Parametric Polymorphismใ

็จๅฎๆนๅๅฎขๆ็ซ ็ๆป็ปๆฅๆ่ฟฐ Trait๏ผ

- Traits are Rust's sole notion of interface.
- Traits can be statically dispatched. Like C++ templates.
- Traits can be dynamically dispatched.
- Traits solve a variety of additional problems beyond simple abstraction.

ๅฆๆไธไธช็ฑปๅ็ณป็ปๅ่ฎธไธๆฎตไปฃ็ ๅจไธๅ็ไธไธๆไธญๅทๆไธๅ็็ฑปๅ๏ผ่ฟๆ ท็็ฑปๅ็ณป็ปๅฐฑๅซๅๅคๆ็ฑปๅ็ณป็ปใๅฏนไบ้ๆ็ฑปๅ็ณป็ป่ฏญ่จๆฅ่ฏด๏ผๅคๆๆง็ๅฅฝๅคๆฏๅฏไปฅๅจไธๅฝฑๅ็ฑปๅไธฐๅฏ็ๅๆไธ๏ผไธบไธๅ็็ฑปๅ็ผๅ้็จ็ไปฃ็ ใ

็ฐไปฃ็ผ็จ่ฏญ่จๅๅซ็ๅคๆๅฝขๅผ๏ผ

- Parametric Polymorphism ๅฏไปฅๅฎ็ฐๆณๅๅฎไพๅไฝไธบๅๆฐๆถๆๅป็กฎๅฎ็ฑปๅใ
- Ad-hoc Polymorphism ็ธๅฝไบๅฝๆฐ้่ฝฝ๏ผๅฝๆฐ่ฝๅคไพๆฎๅๆฐ็ฑปๅๆๅฎไธๅ็ๅฎ็ฐใ
- Subtype Polymorphism ๅๅญๆๅฎๅฌ็จ่ถ็ฑป็ไธๅๅญ็ฑป็ๅฎไพใ
- Row Polymorphism/Duck Typing ็ฎๅๅฐ่ฏด๏ผๅฆๆๆไธชไธ่ฅฟๅซๅพๅ้ธญๅญ๏ผ่ตฐ่ทฏๅๅ้ธญๅญไธๆ ท๏ผ้ฃไนๅฐฑๅฏไปฅ่ฎคไธบๆฏ้ธญๅญใ

ๅฆๆๆๅคๆๅ็็ๆถ้ดๆฅๅๅ๏ผๅๅฏไปฅๅไธบ๏ผ

- Static Polymorphism ้ๅคๆๅ็ๅจ็ผ่ฏๆ๏ผ้ๅคๆ็บ็ฒ็ตๆดปๆง่ทๅๆง่ฝ๏ผๅๆฐๅๅคๆๅ Ad-hoc ไธ่ฌๆฏ้ๅคๆใ
- Dynamic Polymorphism ๅจๅคๆๅ็ๅจ่ฟ่กๆถ๏ผๅจๅคๆ็บ็ฒๆง่ฝ่ทๅ็ตๆดปๆง๏ผๅญ็ฑปๅๅคๆไธ่ฌๆฏๅจๅคๆใ

Rust ่ฏญ่จ็็ฑปๅ็ณป็ป็ฑปไผผ Duck Typing๏ผๅๆถๆฏๆ้ๅคๆๅๅจๅคๆ๏ผ้ๅคๆๅฐฑๆฏไธ็ง้ถๆๆฌๆฝ่ฑกใ

Rust ๅผไปฅไธบๅฒ็ๆฏๅคๅ็ฑปๅ็้ถๆๆฌๆฝ่ฑก๏ผไพๅฆ struct A๏ผ็ผ่ฏๅฎไนๅ่ฟ่กๆถไธๅ ็จไปปไฝๅๅญ๏ผไธ่ฟๆฏๅจ็ผ่ฏๆ้ดๅไบ็นๆฎๅค็่ๅทฒใ

Rust ็็ฑปๅ็ณป็ปๅบๆฌๅๆฌไบ็ผ็จไธญไผ้ๅฐ็ๅ็งๆๅต๏ผไธ่ฌๆๅตไธไธไผๆๆชๅฎไน็่กไธบๅบ็ฐ๏ผๆไปฅ่ฏด๏ผRsut ๆฏ็ฑปๅๅฎๅจ็่ฏญ่จใ


้คไบๅ้ขๅฑ็คบ็ดๆฅ็ป็ปๆไฝๅฎ็ฐๆฉๅฑๆนๆณ๏ผRust ่ฟๆไพไบ Trait ๆฉๅฑๆบๅถไธบๅ็ฑปๅๅฎไนๅฌๅฑ่กไธบๆนๆณ๏ผๅนถไธๅฏไปฅไธบๅฏน่ฑกๅฎ็ฐๅคไธช Traits๏ผๆไปฅ Trait ๆดๅๆฏไธไธชๆฅๅฃใ

ๅ ไธบ่ฟๆ ท็็ฑปๅๆบๅถ๏ผRust API ๅ่ๆๆกฃไนๆฏๆไปฅไธๅ ็งๅบๆฌ็ปๆ็ป็ป็๏ผ

- `Implementations` ็ฑปๅ็ดๆฅๅฎ็ฐ็ๆนๆณใ
- `Traits Implementations` ๆฏๆ ธๅฟ้จๅ๏ผๅฎไนไบ็ฑปๅ็ๅฌๅฑ่กไธบๆนๆณ๏ผ่ฟไบๆนๆณๅผๅพๆๅฅไธไบ้ขๅค็ๅญฆไน ๆถ้ดใ
- `Blanket Implementations` ๆฏๅบ็ก้จๅ๏ผ็ฑ Rust ๅบ็กๅบๆน้่ฆ็ๅฎ็ฐ็ Traits ๆนๆณใ
- `Auto Trait Implementations` ๆฏๅบ็ก้จๅ๏ผ็ฑ Rust ๅบ็กๅบๆน้่ฆ็ๅฎ็ฐ็ Traits ๆนๆณใ

ไฝฟ็จ Traits ๆฉๅฑ็ฑปๅ็ๆนๆณๅช้่ฆไธคไธชๆญฅ้ชค๏ผ

- Define Trait Objects
- Implements Trait fro Types

Trait ๅฏไปฅ็ปงๆฟ๏ผๅฆไธ๏ผFooBar ็ๅฎ็ฐ่ไน่ฆๅๆถๅฎ็ฐ Foo ๅ Bar๏ผ

```rust,ignore
trait Foo {
    fn foo(&self);
}

trait Bar {
    fn bar(&self);
}

trait FooBar : Foo + Bar {
    fn foobar(&self);
}

struct Fb;

impl Foo for Fb {
    fn foo(&self) { println!("foo"); }
}

impl Bar for Fb {
    fn bar(&self) { println!("bar"); }
}

impl FooBar for Fb {
    fn foobar(&self) { println!("foobar"); }
}

let fb = Fb{};
fb.foo();
fb.bar();
fb.foobar();
```

ไปฅไธไปฃ็ ๏ผไนๆผ็คบไบๅฆไฝไฝฟ็จ Trait ๆ Dock Typing ๆนๅผๆฅๅฎ็ฐ็ฑปๅๆฉๅฑ๏ผๅฎ็ฐ FooBar ็ Fb ๆขๆฏ Foo ็ฑปๅๅๆฏ Bar ็ฑปๅใ

่ฟ้ๆๆ็็ปงๆฟไธๆฏๅพๆฐๅฝ๏ผๅบ่ฏฅๆฏไธ็ง่กไธบๅฑไบซๆ่็บฆๆ๏ผๅณๅฎ็ฐไบๆไธช trait ไนๆ็งๅฑๅ็่กไธบใ


### ๐ข๐ต Generic Types
- https://doc.rust-lang.org/book/ch10-00-generics.html
- https://doc.rust-lang.org/book/ch10-02-traits.html
- https://rustc-dev-guide.rust-lang.org/backend/monomorph.html
- https://doc.rust-lang.org/rust-by-example/generics.html

ๆไปฅ้ซ็บง่ฏญ่จ้ฝๆ็จๆฅ่งฃๅณ้ๅคไปฃ็ ็ๅทฅๅท๏ผๆณๅๆฏๅธธ็จ็ๅทฅๅทใ

ๆป็ปไธไธๆณๅ็ไฝฟ็จๆนๅผ๏ผ

- ๆณๅๆฅๅฃ `trait GenericeTrait<T>{...}`
- ๆณๅๅฝๆฐ `fn genericFun<T>(arg: SomeType<T>) {}`
- ๆณๅๆนๆณ `impl<T>` ๆๆณๅๅฎ็ฐๅฏน่ฑก็ๆนๆณๆฉๅฑใ
- ๆณๅ็ปๆ In Struct Definitions
- ๆณๅๆไธพ In Enum Definitions

ไพๅฆ๏ผๅฎไนไธไธชๆณๅ็็ปๆไฝ๏ผ

```rust,ignore
struct Point<T> {
    x: T,
    y: T,
}

fn main() {
    let integer = Point { x: 5, y: 10 };
    let float = Point { x: 1.0, y: 4.0 };
}
```

ๅฆๆ๏ผ้่ฆๅคไธชๆณๅๅๆฐ๏ผๅจๅฐๆฌๅทไธญๆทปๅ ๅณๅฏ๏ผๅฆไธ๏ผ

```rust,ignore
struct Point<T, U> {
    x: T,
    y: U,
}

let also_work = Point { x: 5, y: 4.0 };
```

ๆณๅ็ๆไธพ็ฑปๅๅฎไน๏ผไนๅฏไปฅๅคไธชๆณๅๅๆฐ๏ผ

```rust,ignore
enum Option<T> {
    Some(T),
    None,
}

enum Result<T, E> {
    Ok(T),
    Err(E),
}
```

็ฐๅจ๏ผๅ่ฎพ่ฆๅฎ็ฐไธไธชๅฝๆฐ๏ผๅฎๅฏไปฅ่ฟๅไธ็ปๆฐ็ๆๅคง้ฃไธช๏ผๅช้่ฆๅฎ็ฐไธไธชๅฝๆฐๅฐฑๅฏไปฅ่งฃๅณ่ฟไธช้ฎ้ขใ

ๅฝ้่ฆๅไบ๏ผ้่ฆๅฏนๆดๆฐๅ่กจใๆตฎ็นๆฐๅ่กจ่ฟๆๅญ็ฌฆไธฒๅ่กจ่ฟ่กๅค็๏ผ่ฟๅๅถไธญๆๅคง็ไธไธชใๅฆๆๆไผ ็ปๆนๅผ๏ผๅฏ่ฝ้่ฆๅฎไนไธไธช้ป่พๅบๆฌไธ่ด็ๅฝๆฐ๏ผ่ฟๅฐฑๅบ็ฐไบๅคง้็ไปฃ็ ้ๅคใ

้่ฟๆณๅๅทฅๅทๅฏไปฅๆๆๅฐ่งฃๅณ่ฟๆ ท็ๅ่ฝ้ๅคไปฃ็ ๏ผๅช้่ฆๅฎ็ฐไธไธชๆณๅๅฝๆฐ๏ผๆฅๆถไธไธชๆณๅๅ่กจ๏ผๅ็จ็ธๅ็ๅ่ฝ้ป่พไปฃ็ ่ฟ่กๅค็่ฟๅ็ปๆใ

ๆณๅๅทฅๅท็่ฏญๆณไธๅชๆฏๅจๅๆ็ๅ็งฐๅ้ขๅขๅ ็ฎญๆฌๅท๏ผ็จไบไผ ๅฅๆณๅๅทฅๅทๆ้่ฆ็ๅๆฐ๏ผๅจ่ฟ้ๅฏไปฅๅฐๆณๅๅฝๆฐ็ไฝๆฏไธไธชๅฝๆฐๅทฅๅ๏ผๅฎไผๆ นๆฎ่ฐ็จ็ๅๆฐ็ฑปๅ็ไบงๅบ็ธๅบ็ๅฝๆฐใ

```rust,ignore
fn largest<T>(list: &[T]) -> &T {
    let mut largest = &list[0];
    for elem in list {
        // error[E0369]: binary operation `>` cannot be applied to type `&T`
        if elem > largest {
            largest = elem;
        }
    }
    largest
}

fn main() {
    let number_list = vec![34, 50, 25, 100, 65];
    let result = largest(&number_list);
    println!("The largest number is {}", result);

    let char_list = vec!['y', 'm', 'a', 'q'];
    let result = largest(&char_list);
    println!("The largest char is {}", result);
}
```

ๅฏๆฏ๏ผไปฅไธ็ๅฝๆฐไธญ๏ผๆฏ่พๅคงๅฐ็็ฌฆๅทไธ่ฝ้่ฟ็ผ่ฏใ

ๆณๅๆฅๆถไบๅค็ง็ฑปๅ๏ผ้ฃไนๅฐฑ้่ฆๅฏนๅๆไปฃ็ ไฝ้ๅฝ่ฐๆด๏ผๆฏ็ซไธๆฏๆๆ็ฑปๅ้ฝๅฏไปฅๅๅๆ ท็ๆไฝใๅฏนไบ่ฟไธชไพๅญ่่จ๏ผ
ๆถๅไบไธคไธชๅผ็ๆฏ่พ๏ผๅฐฑๅฏ่ฝ้่ฆ่ฟ่กไธไบๆฉๅฑ๏ผPartialOrd ๅๅบๆฏ่พๆฅๅฃๅฐฑๆฏๅ่ฟไธชๅทฅไฝ็ใ

ๅฐ่ฟ้๏ผ้่ฆๅๅญฆไน  10. Generic Types, Traits, and Lifetimes ็ซ ่็ๅๅฎน๏ผๅ ๆญคไฟฎๅคไปฅไธ้่ฏฏๅช้่ฆไธ็น็น Traits ็ๅบ็กใ

้ฃๅฐฑๆฏไธบๆณๅๅฝๆฐๅๆฐๆไพ std::cmp::PartialOrd ๅ Copy

```rust,ignore
fn largest<T: PartialOrd + Copy>(list: &[T]) -> T {
    let mut largest = list[0];

    for &item in list {
        if item > largest {
            largest = item;
        }
    }

    largest
}
```

Rust ๆณๅๅนถไธไผไฝฟ็จๅบ่ฟ่กๅๆข๏ผ้่ฟ็ผ่ฏๆ็ๅไฝๅ๏ผMonomorphization๏ผๅฐๆณๅ่ฝฌๅไธบๅทไฝ็ฑปๅ๏ผไนๆฏๆณๅๅ็้ๅๆไฝใ่ฟ็งๅจ็ผ่ฏๆๅฐฑๅฏไปฅ็กฎๅฎ็่ฐ็จ๏ผ็งฐไธบ static dispatchใไธไน็ธๅฏน็ๆฏ dynamic dispatch๏ผๅณไธ่ฝๅจ็ผ่ฏๆ็กฎๅฎ็่ฐ็จ๏ผ้่ฆๅจ่ฟ่กๆถ็กฎๅฎใ

ไปฅไธ็คบ่ `impl<T>` ๆณๅๅฎ็ฐ๏ผ

```rust,ignore
struct GenVal<T> {
    gen_val: T,
}

impl<T> GenVal<T> {
    fn value(&self) -> &T {
        &self.gen_val
    }
}

fn main() {
    let x = GenVal { gen_val: 3i32 };
    let y = GenVal { gen_val: "3i32" };

    println!("{}, {}", x.value(), y.value());
}
```

ๅฝ็ถ๏ผไนๅฏไปฅๆๅฎๅๆฐๅฎ็ฐไปฅไธ็็ปๆไฝ๏ผๅชๅฎ็ฐๅไฝๅ็ๆฌ๏ผๅฆ `impl GenVal<&str> {}`ใ


็คบ่ๅฎ็ฐไธไธชๅทๆๆธ็ๅ่ฝ็ `Empty`๏ผ

```rust,ignore
struct Empty;
struct Null;

// A trait generic over `T`.
trait DoubleDrop<T> {
    fn drop(self, _: T);
}

// Implement `DoubleDrop<T>` for any generic parameter `T` and caller `U`.
impl<T, U> DoubleDrop<T> for U {
    // This method takes ownership of both passed arguments,
    // deallocating both.
    fn drop(self, _: T) {}
}

fn main() {
    let empty = Empty;
    let null  = Null;

    // Deallocate `empty` and `null`.
    empty.drop(null);

    //empty;
    //null;
    // ^ TODO: Try uncommenting these lines.
}
```

ๆณจๆ๏ผ`drop()` ๆนๆณ๏ผๅๆฐๆฒกๆไฝฟ็จๅผ็จ๏ผๅฎไปฌไผๅจ่ฐ็จๆถๅ็ๆๆๆ่ฝฌ็งปๅฐๅฝๆฐๅ้จ๏ผๅนถ้็ๅฝๆฐ็บฟๆ่่ขซๆธ็ใ


ไฝฟ็จ Trait Bounds ่ฏญๆณๅฏไปฅๆๆกไปถๅฐๅฎ็ฐๆณๅๆนๆณ๏ผๅจไปฅไธ `impl` ๅไธญ๏ผPair<T> ๅชๆๅจๅถๅ้จ็ฑปๅ
T ๅฎ็ฐ PartialOrd ๅ Display ๆฅๅฃ็นๆงๆถๆๅฎ็ฐ cmp_display ๆนๆณใ

```rust,ignore
// listings/ch10-generic-types-traits-and-lifetimes/listing-10-15/src/lib.rs
use std::fmt::Display;

struct Pair<T> {
    x: T,
    y: T,
}

impl<T> Pair<T> {
    fn new(x: T, y: T) -> Self {
        Self { x, y }
    }
}

impl<T: Display + PartialOrd> Pair<T> {
    fn cmp_display(&self) {
        if self.x >= self.y {
            println!("The largest member is x = {}", self.x);
        } else {
            println!("The largest member is y = {}", self.y);
        }
    }
}
```


### ๐ข๐ต Dynamic sized type (DST) ๅจๆๅคงๅฐ็ฑปๅ
- https://doc.rust-lang.org/book/ch17-02-trait-objects.html
- https://doc.rust-lang.org/book/ch19-04-advanced-types.html#dynamically-sized-types-and-the-sized-trait

Rust ็ฑปๅ็ณป็ป๏ผ้่ฆๆ็กฎไธไธช็ฑปๅๆๅ ็จ็ๅญๅจ็ฉบ้ด็ญ็ป่๏ผไฝๅๅญๅจๅคๆ็ๆๅต๏ผๆ ๆณๅจ่ฟ่กๆถ็กฎๅฎๆฐๆฎๅคงๅฐ๏ผ
่ฟ็ง็ฑปๅ็งฐไธบ dynamically sized types (DST) ๆๆ ๅคงๅฐ็ฑปๅ๏ผ่ฟไบ็ฑปๅๅ่ฎธๆไปฌไฝฟ็จๅช่ฝๅจ่ฟ่กๆถ็ฅ้
ๅคงๅฐ็ๅผๆฅ็ผๅไปฃ็ ใ

ไพๅฆ๏ผๅญ็ฌฆไธฒ็ฑปๅ `str` ๅฐฑๆฏไธ็ง DST ็ฑปๅ๏ผๆ ๆณ็ดๆฅๅจไปฃ็ ไธญๅฃฐๆ str ่ฟ็ง็ฑปๅ๏ผ่ๅบ่ฏฅไฝฟ็จ &str๏ผ

    let s1: str = "Hello there!";
    let s2: str = "How's it going?";

Rust ้่ฆ็ฅ้ๅถๅคงๅฐไปฅๅ้ๅๅญ็ฉบ้ด๏ผๆไปฅๅญ็ฌฆไธฒไผ่ขซๆๅๅฐไบ่ฟๅถ็จๅบๆไปถไธญๅญๆพ๏ผ่ฟ่ก็จๅบๆถๅ่ฃๅฅๅๅญ๏ผ
ๅนถ้่ฟ &str ๅผ็จๅฎ๏ผ่ฟไธชๅผ็จๅๅซไบไธคไธชๅผ๏ผๅญ็ฌฆๅ็ๅฐๅๅๅญ็ฌฆไธฒ้ฟๅบฆใ

ๅฏไปฅๅฐไธไธชๆฅๅฃๅฝไฝ trait objects ๆฅไฝฟ็จ๏ผไฝ้่ฆไฝฟ็จๆ้ๅ่ฃๆฅๅฃ๏ผไพๅฆไปฅไธ่ฟไบๅฝขๅผ้ฝๅฏไปฅ๏ผ

- &dyn Trait 
- Box<dyn Trait> 
- Rc<dyn Trait>

Rust ๆไพไบไธไธช `Sized` ๆฅๅฃ้ๅ DST๏ผ็จไบ็กฎๅฎไธไธช็ฑปๅๆฏๅฆๅฏไปฅๅจ็ผ่ฏๆ็กฎๅฎๅคงๅฐ๏ผๆๆ้ DST ้ฝ่ชๅจ
ๅฎ็ฐไบ่ฟไธชๆฅๅฃใ

ๆญคๅค๏ผRust ้ๅผๅฐไธบๆฏไธชๆณๅๅฝๆฐๆทปๅ ไบไธไธช `Sized` ็ปๅฎ๏ผไนๅฐฑๆฏ่ฏด๏ผไปฅไธๆฏ็ญไปท็ๆณๅๅฝๆฐๅฎไน๏ผ

```rust,ignore
fn generic<T>(t: T) {
    // --snip--
}

fn generic<T: Sized>(t: T) {
    // --snip--
}
```

้ป่ฎคๆๅตไธ๏ผๆณๅๅฝๆฐๅช่ฝๅจ็ผ่ฏๆถๅฏนๅทๆๅทฒ็ฅๅคงๅฐ็็ฑปๅ่ตทไฝ็จ๏ผไฝๆฏ๏ผๅฏไปฅไฝฟ็จไปฅไธ็นๆฎ่ฏญๆณๆฅๆพๅฎฝๆญค้ๅถ๏ผ

```rust,ignore
fn generic<T: ?Sized>(t: &T) {
    // --snip--
}
```

็ปๅฎ็ `?Sized` ่กจ็คบ T ๆ่ฎธๆฏ Sized ็๏ผ่ฟ็ง็ปๅฎไผ่ฆ็้ป่ฎค็ `Sized` ็ปๅฎ๏ผ`?Trait` ่ฟไธช่ฏญๆณ
ไป้็จไบ Sized๏ผ่ไธ้็จไบไปปไฝๅถไปๆฅๅฃใ

่ฟ่ฆๆณจๆๅฐ `t` ๅๆฐ็็ฑปๅไป `T` ๅๆขไธบ `&T`ใๅ ไธบ็ฑปๅๅฏ่ฝๆฒกๆๅคงๅฐ๏ผ้่ฆๅจๆ็งๆ้ๅ้ขไฝฟ็จๅฎใ


ๅ่ฎพไธไธช GUI ๅบ็จๅบๆฏ้่ฆๅฎ็ฐ draw ่กไธบ๏ผๅฆๆๆฏๅบไบ็ปงๆฟ็็ผ็จ่ฏญ่จไธญ๏ผๅฏ่ฝไผๅๅฎไนไธไธชๅทๆๅๆ ท่กไธบ
็็ปไปถๆฅๅฃ๏ผๅ้่ฟๅฎ็ฐ่ฟไธชๆฅๅฃๆฉๅฑๅบๅ็งๅทไฝ็็ปไปถ๏ผๆฏๅฆ Button, Image, SelectBox ็ญ็ญใ

Rust ไธญๅๆฏๅฎไนไธไธชๅไธบ Draw ็ๆฅๅฃ๏ผ่ฏฅ็นๆงๅฐๅทๆไธไธชๅไธบ draw ็ๆนๆณใ็ถๅ๏ผๅฎไนไธไธชๅ้ๆฅ่ทๅ
*trait object*๏ผๅฎๆๅไธไธชๅฎ็ฐไบ Draw ๆฅๅฃ็ๅฎไพ๏ผๅ็จไบๅจ่ฟ่กๆถๆฅๆพ่ฏฅ็ฑปๅไธ็ๆฅๅฃๆนๆณ็ๆฅ่ฏข่กจใ
ๆไปฌ้่ฟๆๅฎๆ็งๆ้ๆฅๅๅปบไธไธช trait ๅฏน่ฑก๏ผไพๅฆ `&` ๅผ็จๆ่ไธไธช `Box<T>` ๆบ่ฝๆ้๏ผๅนถๆๅฎ dyn
ๅณ้ฎๅญๅ็ธๅณ็ๆฅๅฃใ

ไฝฟ็จๆฅๅฃๅฏน่ฑกๅฏไปฅไปฃๆฟๆณๅๆๅทไฝ็ฑปๅ๏ผๆ ่ฎบๅจๅช้ไฝฟ็จ trait ๅฏน่ฑก๏ผRust ็็ฑปๅ็ณป็ป้ฝไผๅจ็ผ่ฏๆถ็กฎไฟๅจ
่ฏฅไธไธๆไธญไฝฟ็จ็ไปปไฝๅผ้ฝไผๅฎ็ฐ็ธๅบ็ๆฅๅฃใๅ ๆญค๏ผๆไปฌไธ้่ฆๅจ็ผ่ฏๆถ็ฅ้ๆๆๅฏ่ฝ็็ฑปๅใ

Rust ่ฏญ่จไธญ้ฟๅๅฐ็ปๆๅๆไธพ็งฐไธบโๅฏน่ฑกโ๏ผไปฅๅฐๅฎไปฌไธๅถไป่ฏญ่จ็ๅฏน่ฑกๅบๅๅผๆฅใ็ปๆๆๆไธพ็ฑปๅไธญ๏ผ็ปๆๅญๆฎต
ไธญ็ๆฐๆฎๅ impl ๅไธญ็่กไธบๆฏๅๅผ็๏ผ่ๅจๅถไป่ฏญ่จไธญ๏ผ็ปๅๆไธไธชๆฆๅฟต็ๆฐๆฎๅ่กไธบ้ๅธธ่ขซๆ ่ฎฐไธบๅฏน่ฑกใ็ถ่๏ผ
Trait ๅฏน่ฑกๆดๅๅถไป่ฏญ่จไธญ็ๅฏน่ฑก๏ผๅ ไธบๅฎไปฌ็ปๅไบๆฐๆฎๅ่กไธบ๏ผไฝไธไผ ็ปๅฏน่ฑกๅๆๅบๅซ๏ผๆไปฌไธ่ฝๅๆฅๅฃๅฏน่ฑก
ๆทปๅ ๆฐๆฎใๆฅๅฃๅฏน่ฑกไธๅๅถไป่ฏญ่จไธญ็ๅฏน่ฑก้ฃๆ ทๆฎ้ๆ็จ๏ผๅฎไปฌ็็นๅฎ็ฎ็ๆฏๅ่ฎธ่ทจๅฌๅฑ่กไธบ่ฟ่กๆฝ่ฑกใ

```rust,ignore
// Define a Trait Object
pub trait Draw {
    fn draw(&self);
}

#[derive(Debug)]
pub struct Button {
    pub width: u32,
    pub height: u32,
    pub label: String,
}

// Implementing the Trait
impl Draw for Button {
    fn draw(&self) {
        // code to actually draw a button
        println!("{:?}", btn);
    }
}

struct SelectBox {
    width: u32,
    height: u32,
    options: Vec<String>,
}

impl Draw for SelectBox {
    fn draw(&self) {
        // code to actually draw a select box
        println!("{:?}", btn);
    }
}

fn main() {
    // use trait methods
    let btn = Button{ 
        width: 10, 
        height:8, 
        label: String::from("Go") 
    };
    btn.draw();
}
```


### ๐ข๐ต Dynamic vs Static Dispatch
- https://doc.rust-lang.org/stable/book/ch10-01-syntax.html#performance-of-code-using-generics
- https://doc.rust-lang.org/stable/book/ch17-02-trait-objects.html#trait-objects-perform-dynamic-dispatch
- https://doc.rust-lang.org/stable/std/keyword.dyn.html
- https://wiki.jikexueyuan.com/project/rust-1.7/trait-objects.html
- https://doc.rust-lang.org/reference/types/trait-object.html
- [trait object](https://zhuanlan.zhihu.com/p/23791817)

ๅจๆณๅไธไฝฟ็จ trait bound ๅๆฐๆถ๏ผ็ผ่ฏๅจไผๆง่กๅๅฝขๅๅค็๏ผmonomorphization๏ผ็ผ่ฏๅจไธบๆฏไธชๅทไฝ็ฑปๅ
็ๆๅฝๆฐๅๆนๆณ็้ๆณๅๅฎ็ฐ๏ผไปฅไปฃๆฟๆณๅ็ฑปๅๅๆฐใๅๅฝขๅไบง็็ไปฃ็ ๆฏ่ฟ่ก้ๆๅๆดพ็๏ผๅณ็ผ่ฏๅจ็ฅ้ๅจ็ผ่ฏๆถ
่ฐ็จ็ๆฏไปไนๆนๆณใ่ฟไธๅจๆๅๆดพ็ธๅ๏ผๅจๆๅๆดพๆฏๆ็ผ่ฏๅจๅจ็ผ่ฏๆถๆ ๆณๅคๆญๅจ่ฐ็จๅชไธชๆนๆณ๏ผ็ผ่ฏๅจๅๅบ็ไปฃ็ 
ๅฐๅจ่ฟ่กๆถ็กฎๅฎ่ฆ่ฐ็จๅชไธชๆนๆณใ

ๅฝๆไปฌไฝฟ็จ trait ๆฅๅฃๅฏน่ฑกๆถ๏ผRust ๅฟ้กปไฝฟ็จๅจๆๅๆดพใ็ผ่ฏๅจไธ็ฅ้ไฝฟ็จ trait ๅฏน่ฑก็ไปฃ็ ๅฏ่ฝไฝฟ็จ็
ๆๆ็ฑปๅ๏ผๅ ๆญคๅฎไธ็ฅ้ๅจๅชไธช็ฑปๅไธๅฎ็ฐไบๅชไธชๆนๆณใ็ธๅ๏ผๅจ่ฟ่กๆถ๏ผRust ไฝฟ็จ trait ๅฏน่ฑกๅ็ๆ้ๆฅ
็ฅ้่ฆ่ฐ็จๅชไธชๆนๆณใ็ธๆฏ้ๆ่ฐๅบฆ๏ผ่ฟ็งๅจๆๆฅๆพไผไบง็้ขๅค็่ฟ่กๆถๆๆฌ๏ผๅนถไธๅจๆๅๆดพ่ฟ้ปๆญข็ผ่ฏๅจ้ๆฉ
ๅ่ๆนๆณ็ไปฃ็ ๏ผ่ฟๅ่ฟๆฅๅ้ปๆญขไบไธไบไผๅใไผ็นๅฐฑๆฏ็ผๅ็ไปฃ็ ไธญๅฏไปฅ่ทๅพไบ้ขๅค็็ตๆดปๆง๏ผ้่ฆ่่ๆ่กกใ

ๆ่ฐ trait ๅฏน่ฑก๏ผๅฏไปฅ็่งฃไธบๅถๅฎ้ขๅๅฏน่ฑก่ฏญ่จไธญๆๅๆฅๅฃๆๅบ็ฑป็ๆ้ๆๅผ็จ๏ผๅบๆ้ๅจ่ฟ่กๆถๅฏไปฅ็กฎๅฎๅถ
ๅฎ้็ฑปๅใRust ๆฒกๆ็ฑป็ปงๆฟ๏ผ้่ฟ trait ๅฏน่ฑกไฟๅญ็ๆ้ๆๅผ็จ่ตทๅฐ็ฑปไผผ็ๆๆ๏ผ่ฟ่กๆถ่ขซ็กฎๅฎๅทไฝ็ฑปๅใ

ๅบ็จไธญ๏ผๅฏไปฅ่ฟๆ ท็่งฃ๏ผๆๅ trait ็ๆ้ๅฐฑๆฏ Trait Object๏ผๅๅฆ Bird ๆฏไธไธช trait ็ๅ็งฐ๏ผ
้ฃไนๆบ่ฝๆ้ `Box<Bird>` ๅ `&dyn Bird`๏ผๆง่ฏญๆณ่กจ่พพไธบ `&Bird`๏ผๅฎไปฌ้ฝๆฏไธ็ง Trait Objectใ

ๅ ไธบ Trait ๅฏน่ฑกๆฏ DST ็ฑปๅ๏ผ้่ฆ็จ่ๆ้ๆฅ่ฎฐๅฝๅฐๅๅ้ฟๅบฆไฟกๆฏ๏ผๅฏไปฅ้่ฟไปฅไธไปฃ็ ๆฅ็ไธๆฎ้ๆ้็ๅบๅซ๏ผ

```rust ,ignore
    use std::mem::size_of;
    dbg!(size_of::<&Duck>());       // 8
    dbg!(size_of::<&dyn Bird>());   // 16
```

ๅฝไฝฟ็จ Trait Object๏ผRust ๅฐฑๅฟ้ไฝฟ็จ `dynamic dispatch`๏ผๅ ไธบ็ผ่ฏๅจๆ ๆณๅจ็ผ่ฏๆๅพ็ฅ็ฉถ็ซไธบ
ๅชไธช็ฑปๅไฝฟ็จไบๆฅๅฃใ่ฟๆ ท๏ผRust ๅจ Trait Object ๅไฟๅญไธไธชๆ้๏ผๅจ่ฟ่กๆถ็จๅฎๆฅๆๅ่ฆ่ฐ็จ็ๆนๆณใ
ๅจๅจๆๆดพๅๆนๅผไธญ๏ผ็ผ่ฏๅจ็ๆ็ไปฃ็ ไผๅจ่ฟ่กๆถ่งฃๅณๅบ่ฏฅ่ฐ็จๅชไธชๆนๆณ๏ผๆฏ้ๆๆดพๅๅคไบไธไธช่ฟ่กๆถ็ๆฅ่กจๆถ่ใ

ๅๅจๆๆดพๅๅฏน็ซ็ๅฐฑๆฏ `static dispatch`๏ผๅจๆณๅ็ซ ่ๅๅฎนไธญ๏ผ่งฃๆไบ็ผ่ฏๅจไผๅจ็ผ่ฏๆ่ฟ่กๅๆๅๅค็ใ
ๅณ้ฃไบ็ปๅฎ Traits ๆณๅๅๆฐ็ๆนๆณไผๅจ็ผ่ฏๆๅไฝๅไธบๅทไฝ็ฑปๅ๏ผๅๆณๅ็ธๅๆนๅ็ๅค็่ฟ็จใ็ผ่ฏ็ปๆๅฐฑๆฏ
่ฐ็จๆนๆณๆฏ้ๆๆดพๅ็๏ผๅจ็ผ่ฏๆๅฐฑๅณๅฎไบใๅฆ้ๆๆดพๅไธญไผๅฐไธไบๅฝๆฐ่ฟ่กๅ่ inline ่็็ฅๅฝๆฐ่ฐ็จ็ๆถ่ใ

Rust ๆๆฐ่ง่ไธญ๏ผimpl Trait ๅ dyn Trait ๅๅซๅฏนๅบ้ๆๅๅๅๅจๆๅๅๆบๅถ็ๅฎ็ฐ่ฏญๆณใ

ๆฅ่พจๆไธไธ่ฟไธคไธชๅณ้ฎๅญ๏ผ

- `impl` ็จไบไธบ็ฑปๅๅฎ็ฐๅ่ฝๅฝๆฐ๏ผไนๅฏไปฅ็จไบๅฃฐๆๅๆฐใ่ฟๅๅผไธบๅฎ็ฐๆ Trait ็็ฑปๅ๏ผ
- `dyn` ็จไบ็ชๅบๅฃฐๆๅฏนไบๅณ่็ Trait ็ๆนๆณ่ฐ็จๆฏ Dynamic Dispatch๏ผ่ฆไฝฟ็จ `dyn some_trait` ่ฟ็งๆนๅผ๏ผ่ฆๆฑ some_trait ๅฟ้ๆฏๅฏน่ฑกๅฎๅจ็๏ผ

ไธๆณๅๅๆฐๆ `impl some_trait` ไธๅ๏ผ็ผ่ฏๅจไธ็ฅ้ `dyn some_trait` ่ฆไผ ้็ๅทไฝ็ฑปๅ๏ผไนๅฐฑๆฏ่ฏด๏ผ
็ฑปๅๅทฒ่ขซๆธ้คใๅ ๆญค๏ผ`dyn some_trait`ๅผ็จๅๅซไธคไธชๆ้๏ผไธไธชๆๅๆฐๆฎ๏ผไพๅฆ๏ผ็ปๆ็ๅฎไพ๏ผ๏ผๅฆไธไธชๆๅ
ไธไธชไฟๅญๆนๆณ่ฐ็จๅ็ๆ ๅฐ๏ผๅณ็งฐไธบ่ๆๆนๆณ่กจๆ vtable ็ๅฏน่ฑกใ

ๅจ่ฟ่กๆถ๏ผๅฝ้่ฆๅฏน `dyn some_trait` ่ฐ็จไธไธชๆนๆณๆถ๏ผๆฅ่ฏข vtable ไปฅ่ทๅๅฝๆฐๆ้ๅ่ฐ็จ่ฏฅๅฝๆฐใ
่ฟไนๅฐฑๆฏ่ฏด `dyn some_trait` ๆนๅผ้่ฆๆถ่่ฟ่กๆถ็่ตๆบๆฅๅฎๆไธไบๅจๆ่ฐ็จๅทฅไฝใ็ธๆฏ `impl some_trait` ไธๆณๅๅๆฐๆนๅผ๏ผๅฏไปฅๅจ็ผ่ฏๆ็กฎๅฎ๏ผ็ๆๅฏนๅบ็ๅ็ง่ฐ็จ็ๆฌ๏ผๅนถๅฏไปฅไฝไธบๅ่ๅฝขๅผ็ผ่ฏ๏ผๅ ๆญคๅทๆๆดๅฅฝ็ๆง่ฝใ

ไฝๆฏ๏ผ`dyn some_trait` ๅ ไธบไธๅจ็ผ่ฏๆ็ๆๅ็ง่ฐ็จ็้ๆไปฃ็ ๏ผๆไปฅๅฎไบง็ๆดๅฐ็็ผ่ฏไปฃ็ ใ 


ๅฆๆไธไธช Trait ๅฏน่ฑกๆฏๅฏน่ฑกๅฎๅจ็๏ผ้่ฆๆปก่ถณไธไบๆกไปถ๏ผๅฎ่ทตไธญๅฎ็ๆๆๆนๆณๅฎไนๅช้่ฆๆปก่ถณไปฅไธไธคไธชๆง่ดจ๏ผ

- The return type isn't `Self`.
- There are no generic type parameters.

ๆ่ฟไธคๆกๆง่ดจ๏ผ้ฃไนๅๅซๅธธ็จ็ clone() ๆนๆณ็ Trait ๅฐฑไธๆฏๅฏน่ฑกๅฎๅจ็๏ผ

```rust,ignore
pub trait Clone {
    fn clone(&self) -> Self;
}
```

ๅฏนไบ็ปๅฎ็ไธไธช Trait ๅฏน่ฑก๏ผๅๅญๅๅฎไธบ SomeTrait๏ผ้ฃไนไปฅไธ่กจ่พพๅผ้ฝๆฏ Trait ๅฏน่ฑก๏ผ

- dyn SomeTrait
- dyn SomeTrait + Send
- dyn SomeTrait + Send + Sync
- dyn SomeTrait + 'static
- dyn SomeTrait + Send + 'static
- dyn SomeTrait +
- dyn 'static + SomeTrait.
- dyn (SomeTrait)

ๅณ้ฎๅญ `dyn` ๆฏๅฏ้็๏ผๅชๆฏ่กจ็คบ Dynamic dispatch๏ผๅณๅจ่ฟ่กๆถ่ฟ่กๆนๆณๆดพๅ่ฐ็จ๏ผๅฏนๅบ็้ๆๆดพๅๆนๅผๆฏ `impl`ใ 

- ImplTraitType : impl TypeParamBounds
- ImplTraitTypeOneBound : impl TraitBound

่ trait ๆฌ่บซไธๆฏๅบๅฎๅคงๅฐ็็ฑปๅ๏ผไธ่ฝๅจ็ผ่ฏ้ถๆฎต็กฎๅฎๅคงๅฐใไธๅ็็ฑปๅ้ฝๅฏไปฅๅฎ็ฐๅไธไธช trait๏ผๆปก่ถณๅไธไธช trait ็็ฑปๅๅฏ่ฝๅทๆไธๅ็ๅคงๅฐใๅ ๆญค๏ผไธ่ฝ็ดๆฅไฝฟ็จ trait ๅฝไฝๅฎไพๅ้ใๅๆฐใ่ฟๅๅผใ

ๅ่ฎพๆไปฅไธ็ trait Bird๏ผ่ฟๅฆๅคๆไธคไธช็ฑปๅ้ฝๅฎ็ฐไบ่ฟไธช trait๏ผ

```rust,ignore
trait Bird {
  fn fly(&self);
}

struct Duck;
struct Swan;

impl Bird for Duck {
  fn fly(&self) { println!("duck fly..."); }
}

impl Bird for Swan {
  fn fly(&self) { println!("swan fly...");}
}
```

ๆปไน Trait Object ๆฏไธ็ง DST ็ฑปๅ๏ผๅนถไธๆฏไธ็งๅทไฝ็ฑปๅ๏ผๅฎ็ๅคงๅฐๅจ็ผ่ฏ้ถๆฎตไธๅบๅฎ๏ผ่ฟไนๆฏ trait ่ทๅถๅฎ่ฏญ่จไธญ็ interface ็ไธไธชๅบๅซใ

่ฟๆๅณ็ไธ่ฝ็จๅจๅๆฐ็ฑปๅใๆ่ฟๅๅผ็ฑปๅ็ๅฃฐๆไธญ๏ผๅไธ้ข็ไปฃ็ ๆฏไธ่ฝ้่ฟ็ผ่ฏ็๏ผ

```rust,ignore
fn test(arg: Bird) {}
fn test() -> Bird  {}
```

ๅฏไปฅๆขไธ็งๆนๅผ๏ผๅฃฐๆไธบๅฎ็ฐไบ Bird ็็ฑปๅ๏ผ

```rust,ignore
fn test(arg: &dyn Bird) {}
fn test(arg: impl Bird) {}
fn test() -> impl Bird  { Duck{} }
```

ๆ่ไฝฟ็จๆณๅๅๆฐ่พพๅฐ็ฑปไผผ็ๆๆ๏ผ

```rust,ignore
fn test<T: Bird>(arg: T) {
    arg.fly();
}
test(Duck{});
```

ไปฅไธๅฎ็ฐๅฎ้ไธ๏ผ็ผ่ฏๅจไผ่ฟ่ก monomorphization ๅค็๏ผๆ นๆฎๅฎ้่ฐ็จๅๆฐ็็ฑปๅๅไฝๅ๏ผ็ดๆฅ็ๆไธๅ็ๅฝๆฐ็ๆฌ๏ผ็ฑปไผผ C++ ็ template ไธๆ ท๏ผ

    // ไผชไปฃ็ ็คบๆ
    fn test_Duck(arg: Duck) { arg.fly(); }
    fn test_Swan(arg: Swan) { arg.fly(); }




### ๐ข๐ต Blog Demo
- https://doc.rust-lang.org/book/ch17-03-oo-design-patterns.html

ๅจๅฎๆนๆๆกฃ Implementing an Object-Oriented Design Pattern ไธญ๏ผๅๅซๅช็จ็ปๆไฝใ็ปๆไฝ็ปๅ Trait ไธค็งๆนๅผๅฎ็ฐ State Pattern ็ผ็จๆจกๅผ๏ผๅพๅฅฝๆผ็คบไบ Rust ็็ฑปๅ็ณป็ปๅทฅไฝๅ็ใ

็ถๆๆจกๅผ State Pattern ๆฏไธ็ง้ขๅๅฏน่ฑก็่ฎพ่ฎกๆจกๅผ๏ผๆจกๅผ็ๅณ้ฎๆฏๆๅ้จ็ถๆ็ๅผ๏ผ่ฟไบ็ถๆ็ฑไธ็ป็ถๆๅฏน่ฑก่กจ็คบ๏ผๅนถไธๅผ็่กไธบๆ นๆฎๅ้จ็ถๆ่ๆนๅใState ๅฏน่ฑกๅฐไธไบ่กไธบๅ่ฝๅฑไบซๅบๆฅ๏ผๆฏไธช็ถๆๅฏน่ฑก่ด่ดฃ่ชๅทฑ็่กไธบ๏ผๅนถ่ด่ดฃๆงๅถไฝๆถๅบๆดๆนไธบๅฆไธไธช็ถๆใ่ไฟๅญ็ถๆๅฏน่ฑก็ๅผๆฌ่บซไธ็ฅ้็ถๆๅฏน่ฑก็ไธๅ่กไธบ๏ผๆไฝๆถๅจ็ถๆไน้ด่ฝฌๆขใ

ๅจ Rust ไธญไฝฟ็จ Struct ๅ Trait ๅฎ็ฐ๏ผ่ไธๆฏ C++ ่ฏญ่จ้ฃๆ ทไฝฟ็จ็ฑปๅฏน่ฑกๅ็ปงๆฟๆบๅถใ

ไธค็ง State Pattern ๅฎ็ฐ็่ฆ็น๏ผ

- Encoding States and Behavior as Trait
- Encoding States and Behavior as Types

ๆผ็คบ็ Blog ๆกไพๅ่ฝๅช่ฆๆฑไปฅไธๅ ็น๏ผ

- A blog post starts as an empty draft.
- When the draft is done, a review of the post is requested.
- When the post is approved, it gets published.
- Only published blog posts return content to print, so unapproved posts canโt accidentally be published.

ๅณ่ดดๅญไปๅผๅง็่็จฟ็ถๆ๏ผ็ป่ฟๅฎกๆ ธ็ถๆๅๅฐๅๅธ็ถๆ๏ผ่ฟไธช่ฟ็จไธญ๏ผๅชๆๅจๆๅๅๅธ็ถๆๆๅฏไปฅ้่ฟ `content()` ๆนๆณ่ทๅๅๅฎนใ

็ๆฌไธ้็จ็ปๆไฝ็ปๅ State Trait ็ๆนๆกๅฎ็ฐ๏ผ่ฟไธช็ๆฌไธญ่ฆ็น๏ผ

- `struct Post` ๅฎ็ฐๅธๅญๅๅฎน่ฎพ็ฝฎใ`request_review()` `approve()` ็ถๆ่ฝฌๆขใ`content()` ๅๅฎน่ทๅๆนๆณ๏ผ่ฟๅๅๅฎนๅๅณไบ็ถๆๅฏน่ฑก็ๅฎ็ฐใ
- `trait State` ไฝไธบ็ถๆๆฅๅฃ๏ผๆไพ้ป่ฎค็ `content()` ๆนๆณ่ฟๅ็ฉบๅญ็ฌฆไธฒ๏ผ้่ฟ `request_review()` `approve()` ๆนๆณไปฅไธ็ถๆๅฏน่ฑกใ
    - `struct Draft` ๅฎ็ฐ็ถๆๆฅๅฃ๏ผๅนถไธไธๅทๅค็ดๆฅ้่ฟ `approve()` ๅฐๅธๅญ่ฎพ็ฝฎไธบๅๅธ็ถๆใ
    - `struct PendingReview` ๅฎ็ฐ็ถๆๆฅๅฃ๏ผๅทๅค็ดๆฅ้่ฟ `approve()` ๅฐๅธๅญ่ฎพ็ฝฎไธบๅๅธ็ถๆใ
    - `struct Published` ๅฎ็ฐ็ถๆๆฅๅฃ๏ผๅนถ่ฆ็ๅฎ็ฐ `content()` ๆนๆณ่ฟๅๅธๅญๅๅฎนใ

่ฟ็ง่ฎพ่ฎกๆไธๅฎ็็ตๆดปๆง๏ผๆฏๅฆๆฐๅขไธไบๅ่ฝ๏ผ

- ๆทปๅ  `reject()` ๆนๆณๆฅๆ็ป็ถๆ่ฝฌๆข๏ผๅฐ็ถๆไป `PendingReview` ๅๆปไธบ `Draft`๏ผ
- ้่ฆ็ป่ฟไธคๆฌก approve ๆ่ฟๅฅ `Published` ็ถๆ๏ผ
- ๅชๅจ `Draft` ็ถๆไธๆๅ่ฎธ็จๆทไฟฎๆนๅๅฎน๏ผ

ไฝๆฏ๏ผ่ฟไธชๆนๆกไธญ๏ผState ๅฏน่ฑกๅ่กไธบ่ฝๅๆฏ็ปไธๅญๆพ็๏ผไปๆฆๅฟตไธ่ฎฒ๏ผ่ฟๅนถไธๆฏ็นๅซๅฅฝ็้ป่พๅค็๏ผไนๅญๅจไธไบ้ๅค็ไปฃ็ ใๅๅฆ้่ฆๆฐๅขไธไธช็ถๆ๏ผๅฆ `Scheduled` ๅฐฑๅฏ่ฝ่ฆไฟฎๆน็ฐๆ็ไธๆไธคไธช็ถๆๅฏน่ฑก๏ผ่ฟๆฏไธ็งๅคๆ็ๅทฅไฝใ


็ๆฌไบไปไฝฟ็จ็ปๆไฝ็ฎก็็ถๆ็ๆนๆกๅฎ็ฐ๏ผไฝฟ็จ 3 ไธช็ปๆไฝๆฅๅฏนๅบไธ็ง็ถๆ๏ผ่ฟไบ็ปๆ้ฝๆ `content` ๆฐๆฎๆๅ๏ผ่ฟไธช็ๆฌไธญ่ฆ็น๏ผ

- `struct Post` ๅฎ็ฐ `content()` ๆนๆณ่ฟๅๅธๅญๅๅฎน๏ผๅฎ็ฐ `new()` ๆนๆณ่ฟๅไธไธช `DraftPost` ๅฏน่ฑก๏ผ
- `struct DraftPost` ๅฎ็ฐ `request_review()` ๆนๆณ่ฟๅไธไธช `PendingReviewPost` ๅฏน่ฑก๏ผ
- `struct PendingReviewPost` ๅฎ็ฐ `approve()` ๆนๆณ่ฟๅไธไธช `Post` ๅฏน่ฑก๏ผ

ๅฏไปฅ็ๅฐ่ฟไธ็ๆฌไธญ๏ผ็จไธๅ็็ปๆไฝๆฅ็บฆๆ็จๆท็่กไธบ๏ผๅชๆ็ธๅบ็็ปๆไฝๅฏน่ฑกๆๅทๆๆๅฎ็่กไธบ่ฝๅ๏ผไปฃ็ ๅ่ๅฆไธ๏ผ

```rust,ignore
pub struct Post {
    content: String,
}

pub struct DraftPost {
    content: String,
}

pub struct PendingReviewPost {
    content: String,
}

impl Post {
    pub fn new() -> DraftPost {
        DraftPost {
            content: String::new(),
        }
    }

    pub fn content(&self) -> &str {
        &self.content
    }
}

impl DraftPost {
    pub fn add_text(&mut self, text: &str) {
        self.content.push_str(text);
    }

    pub fn request_review(self) -> PendingReviewPost {
        PendingReviewPost {
            content: self.content,
        }
    }
}

impl PendingReviewPost {
    pub fn approve(self) -> Post {
        Post {
            content: self.content,
        }
    }
}
```

ๅฆไธ็ๆฌไปฃ็ ๅ่๏ผtrait State + struct ๅฎ็ฐ็ๆฌ๏ผ

```rust,ignore
pub struct Post {
    state: Option<Box<dyn State>>,
    content: String,
}

impl Post {
    pub fn new() -> Post {
        Post {
            state: Some(Box::new(Draft {})),
            content: String::new(),
        }
    }

    pub fn add_text(&mut self, text: &str) {
        self.content.push_str(text);
    }

    pub fn content(&self) -> &str {
        self.state.as_ref().unwrap().content(self)
    }

    pub fn request_review(&mut self) {
        if let Some(s) = self.state.take() {
            self.state = Some(s.request_review())
        }
    }

    pub fn approve(&mut self) {
        if let Some(s) = self.state.take() {
            self.state = Some(s.approve())
        }
    }
}

trait State {
    fn request_review(self: Box<Self>) -> Box<dyn State>;
    fn approve(self: Box<Self>) -> Box<dyn State>;

    fn content<'a>(&self, post: &'a Post) -> &'a str {
        ""
    }
}

struct Draft {}

impl State for Draft {
    fn request_review(self: Box<Self>) -> Box<dyn State> {
        Box::new(PendingReview {})
    }

    fn approve(self: Box<Self>) -> Box<dyn State> {
        self
    }
}

struct PendingReview {}

impl State for PendingReview {
    fn request_review(self: Box<Self>) -> Box<dyn State> {
        self
    }

    fn approve(self: Box<Self>) -> Box<dyn State> {
        Box::new(Published {})
    }
}

struct Published {}

impl State for Published {
    fn request_review(self: Box<Self>) -> Box<dyn State> {
        self
    }

    fn approve(self: Box<Self>) -> Box<dyn State> {
        self
    }

    fn content<'a>(&self, post: &'a Post) -> &'a str {
        &post.content
    }
}
```

่ฟไธ็ๆฌไธญไฝฟ็จไบ `Option` ็ฑปๅ่ฟๆ `Box` ๆบ่ฝๆ้ๆฅไฟๅญ็ถๆๅฏน่ฑกใไธบไบไป `Option` ๅ้ไธญๅๅบ็ถๆๅฏน่ฑก๏ผไฝฟ็จ `unwrap()` ๆนๆณใๅฆๅค๏ผๅ ไธบ `Option` ๆไธพ็ฑปๅๆ Some ๅ None ไธค็งๅผ๏ผไฝๅชๆ Some ๅณ่ไฟๅญไบ็ถๆๅฏน่ฑก๏ผ้่ฆไฝฟ็จ `take()` ๆนๆณไป `state` ๆๅไธญๅๅบ Some(state)ใ

    pub fn content(&self) -> &str {
        self.state.as_ref().unwrap().content(self)
    }

ๅถไธญ `as_ref()` ๆนๆณๆฏ Trait std::convert::AsRef ๆไพ็้็จๆนๆณ๏ผ่ฟ้่กจ็คบ่ทๅ Option ๅ้จๅผ็ๅผ็จ๏ผ่ไธๆฏๅถๆๆๆใๅจ `Option<Box<dyn State>>` ็ฑปๅไธ่ฐ็จ่ฟๅ็ๅผๅฐฑๆฏ `Option<&Box<dyn State>>`ใๅฆๆไธ้่ฟ่ฟไธชๆนๆณ่็ดๆฅไฝฟ็จ่ฟไธชๅ้จๅผ๏ผๅฐฑไผๅฏผ่ดๆๆๆ่ฝฌ็งป๏ผ่ๅถๆฅๆบๆฏ `&self` ๅณไธๅฏๅๅ็จ๏ผๆไปฅ็ผ่ฏๅจไธๅ่ฎธ่ฟๆ ทๅใ




### ๐ข๐ต Traits ็น่ดจๆฉๅฑ
- https://doc.rust-lang.org/stable/std/keyword.trait.html
- https://doc.rust-lang.org/stable/reference/types/trait-object.html
- https://doc.rust-lang.org/stable/reference/types/impl-trait.html
- [Rust by Example - Traits](https://doc.rust-lang.org/rust-by-example/trait.html)
- [Traits: Defining Shared Behavior](https://doc.rust-lang.org/book/ch10-02-traits.html)

ๅฎๆนๆๆกฃไธญ็จไธไธชๆ ้ขไฝไบๆ็คบ Traits: Defining Shared Behavior๏ผๅณๆฅๅฃๆฉๅฑใ

Traits ่ฟไธชๆฆๅฟตๅจ PHP ไธญไนๆ๏ผๅฎ่ขซ็จๆฅๅฏนๅ็ง็ฑปๅ่ฟ่กๅ่ฝๆฉๅฑใRust ไธญ็ trait ไนๆฏๅ่ฟ็งๅทฅไฝ็๏ผ
่ฟๆฏ็ผ็จๆฅๅฃ็ไธ็งๅฝขๅผ๏ผๅๆณๅไธๆ ทๆฏ้ๅธธ้่ฆ็ๆฆๅฟต๏ผtrait ๅฏไปฅ็ฟป่ฏไธบ็นๆงใ็น่ดจ็ญ๏ผๅๅถๅฎ่ฏญ่จไธญ็
interface ๆฆๅฟตๆฏไธ่ด็ใ

ๅๅถๅฎ่ฏญ่จไธญ็ Interface ๆฝ่ฑก็ฑปๅ็ธๆฏ๏ผtrait ่ฟไธชๆฆๅฟตๆๅพๅคงไธๅ๏ผๆดๆฅ่ฟ Golang interface ้็จ็็ปๅๆนๅผใ

Rust ่ฎพ่ฎก็ไธๅคงๆฏๆฑ็นๆง๏ผ

- ๆ ๅๅพๅๆถ็ๅฎๅจๅๅญ็ฎก็ No GC
- ๆ ๆฐๆฎ็ซไบ้ฃ้ฉ็ๅนถๅ - Data Race
- ้ถๅผ้็ๆฝ่ฑก - Zero-cost Abstraction

Trait ๆบๅถๆฏ Rust ๅฎ็ฐ้ถๅผ้็ๆฝ่ฑก่ฟไธๅๅ็ๅบ็ณ๏ผๆฏ Rust ๅฏไธ็ๆฅๅฃๆฝ่ฑกๆนๅผใ 

- ไธๆน้ข๏ผไธๅ็ง็ฑปๅๅฏไปฅๅฎ็ฐๅไธ Trait ็ฑปๅ๏ผไนๅฏไปฅไธบๅทฒๆ็็ฑปๅๆทปๅ ๆฐ็ Trait ็ฑปๅใ
- ๅฆไธๆน้ข๏ผๅฝไฝ ๆณ่ฆๅฏนๆๆช็ฅ็ฑปๅ่ฟ่กๆฝ่ฑก็ๆถๅ๏ผTrait ๅฏไปฅๅธฎๅฉไฝ ็กฎๅฎ่ฏฅ็ฑปๅๅฏไปฅ่ฟ่ก็ๆไฝใ
- Trait ๅฏไปฅ้ๆ็ๆ๏ผ่ฟไธ C++ ๆจกๆฟไธ่ด๏ผๅฏนไธๅ็ง็ฑปๅ็ๆฝ่ฑก้ๆๅฐ็ๆไธๅ็ไปฃ็ ๏ผ่ๆฝ่ฑกๆฌ่บซๆฒกๆๅขๅ ่ด้ขๅฝฑๅ๏ผๅ ่ไนไธไผๅธฆๆฅไปปไฝ่ฟ่กๅผ้ใ
- Trait ๅฏไปฅๅจๆ่ฐ็จ๏ผๆๆถไฝ ็กฎๅฎ้่ฆๅจ่ฟ่กๆถ่ฐ็จๆ็ง้ดๆฅๆฝ่ฑก๏ผ่ฟๆถๅฐฑไธ่ฝ้ๆๅฎไพๅ่ฏฅๆฝ่ฑกไบ๏ผๅ ๆญคๆไพไบๅจๆ่ฐ็จ๏ผDynamic Dispatch๏ผ็ๆบๅถใ
- Trait ่ฟ็ง็ฎๅๆฝ่ฑก่ฝๅค่งฃๅณๅคง้็้ขๅค้ฎ้ข๏ผๅฏไปฅ่ขซ็จไบๅฎไนๆฉๅฑๆนๆณ๏ผๅฏนๅทฒๆ็ฑปๅๆทปๅ ๅถไปๆนๆณ๏ผๅ ๆญคไผ ็ป็ๆนๆณ้่ฝฝไธๅๅฟ่ฆใ
- Trait ๆบๅถไนไฝฟๅพ่ฟ็ฎ็ฌฆ้่ฝฝๆดๅ ็ฎๅใ

Rust ๆฏไธ็ง็จๆทๅฏไปฅๅฏนๅๅญๆ็ฒพ็กฎๆงๅถ่ฝๅ็ๅผบ็ฑปๅ่ฏญ่จ๏ผๅฏไปฅ่ช็ฑๆๅฎไธไธชๅ้ๆฏๅจๆ ้้ข๏ผ่ฟๆฏๅจๅ ้้ขใๅจๅฑ้จๅ้ๅฃฐๆใๅฝๆฐๅๆฐไผ ้ใ่ฟๅๅผไผ ้็ญ็ญๅฐๆน๏ผ้ฝ่ฆๆฑ่ฟไธช็ฑปๅๅจ็ผ่ฏ้ถๆฎตๆ็กฎๅฎ็ๅคงๅฐ๏ผๅฆๅ็่ฏ๏ผ็ผ่ฏๅจๅฐฑไธ็ฅ้่ฏฅๅฆไฝ็ๆไปฃ็ ใ

ๅฎไน Traits ๅฏไปฅๅๅซไปฅไธไธ็งๆๅ๏ผไฝๅฐฑๆฏไธ่ฝๆทปๅ ๅถๅฎๆฐๆฎๆๅ๏ผ

- functions and methods
- types
- constants

Traits ็็ธๅณ่ฏญๆณ่ฆ็น๏ผ

- `impl SomeTrait for SomeStruct {}` ไธบ็ปๆไฝๅฎ็ฐ SomeTrait๏ผ
- `fn foo() -> impl SomeTrait {}` ไธบๅฝๆฐๅฃฐๆๅถๅๆฐใ่ฟๅๅผไธบๅฎ็ฐไบ SomeTrait ็็ฑปๅ๏ผ
- `fn foo<T: Debug + Clone>(s: T) {}` ่กจ็คบๆณๅ T ไธบๅๆถๅฎ็ฐ Debug + Clone๏ผๅ ๅท็จๆฅ่ฟๆฅๅคไธช Traitใ
- `fn foo<T, K> where T:Debug + Clone, K: Copy (s: T) {}` ๆณๅ Traits ็ฎๅ็ฑปๅ่กจ่พพ็ where ไปๅฅ่ฏญๆณ๏ผ
- `impl<T: SomeTrait> ToString for T {}` ่ฆ็ๅฎ็ฐ๏ผblanket implementations๏ผไธบๆๆๅฎ็ฐ SomeTrait ็็ฑปๅๆไพ ToString ๅฎ็ฐ๏ผ
- `impl<T> SomeTrait for T { }` ๆณๅๅฎ็ฐ๏ผไธบๆๆ็ฑปๅๅฎ็ฐ SomeTrait๏ผ

ๅ `T: SomeTrait` ่ฟๆ ท็่ฏญๆณ็ปๆๆฏๆง็ๆฌ็็็ฅๅๆณ๏ผๅฏนๅบๅฎๆด็่กจ่พพๅบ่ฏฅๆฏ `(dyn Trait + 'static)`๏ผๅ ไธบ Trait ๅชๅฎไนไธไธชๆฅๅฃ็บฆๆ๏ผไธๆฏๅทไฝ็ฑปๅ๏ผ

ไฝฟ็จ Trait ้่ฆไธคไธชๆญฅ้ชค๏ผ

- Defining a Trait
- Implementing a Trait on a Type

ๆ็ฎๅ็ๆนๆณๅฐฑๆฏไฝฟ็จๅๆฐๆฎ็ผ็จ๏ผ็ดๆฅๆฟ็ปง็ณป็ปๆไพ็ Derivable Trait ๅฏน่ฑก:

- Comparison traits: `Eq`, `PartialEq`, `Ord`, `PartialOrd`.
- `Clone`, to create T from &T via a copy.
- `Copy`, to give a type 'copy semantics' instead of 'move semantics'.
- `Hash`, to compute a hash from &T.
- `Default`, to create an empty instance of a data type.
- `Debug`, to format a value using the `{:?}` formatter.

็จไบๆฏ่พ็ๆฅๅฃ๏ผEq ๅ PartialEq๏ผๆฆๅฟตๆฅ่ชไบๆฝ่ฑกไปฃๆฐไธญ็็ญไปทๅณ็ณปๅๅฑ้จ็ญไปทๅณ็ณป๏ผไธค่ๅบๅซๅฏไปฅ็จ
็ฆปๆฃๆฐๅญฆไธไธชๆง่ดจๆฅๅบๅ๏ผ`T: Eq` ๆ่ `T: PartialEq` ๅฎไพๅจ็ธ็ญๆฏ่พไธญๆฏๅฆๆปก่ถณๅ่บซๆง๏ผReflexivity๏ผใ

็จๆตฎ็นๆฐไพๅญๅฐฑๅฏไปฅ่ฏดๆ๏ผT = f32, f32::NAN == f32::NAN ไธๆ็ซใๅๅ ๆฏ IEEE754 ๅช่งๅฎ NAN ็
้ถ็ ้จๅๅจไธบ 1 ๅณๅฏ๏ผๆฒกๆ่งๅฎ็ฌฆๅทไฝๅๅฐพๆฐ้จๅใ

    1 111111111 0000....001 != 0 111111111 0000...111

่ณไบ NaN๏ผไธไธชๅฅฝ็่งฃ้ๆฏ NaN ไปฃ่กจโไธ็กฎๅฎใ้พไปฅ่จ่ฏด็ๆฐๅญโ๏ผๅ ๆญคๅฏนไบ็ธ็ญ่ฟไธๆไฝ๏ผไธ่ฝ่ฏดไธคไธชไธ็กฎๅฎ
็ๆฐๆฏ็ธ็ญ็ใ่ฟ็ ดๅไบ่ชๅๆง๏ผไนๅฐฑ็งฐไธไธ็ฆปๆฃๆฐๅญฆไธญ็โ็ญไปทๅณ็ณปโ๏ผๆๅช่ฝๆฏ PartialEq๏ผ่ไธ่ฝๆฏ Eq๏ผ

ๅฆๅค๏ผOrd ๅ PartialOrd ๅจๅบๅๅๅบๆฏๅบ็่ฎบไธญๆฆๅฟต๏ผๅๅบ้ๅๆฏๆฐๅญฆไธญ๏ผ็นๅซๆฏๅบ็่ฎบไธญ๏ผๆ้ๅคไบ้จๅ
ๆๅบๅณ็ณป็้ๅใ่ฟไธช็่ฎบๅฐๆๅบใ้กบๅบๆๆๅ่ฟไธช้ๅ็ๅ็ด ็็ด่งๆฆๅฟตๆฝ่ฑกๅใ่ฟ็งๆๅบไธๅฟ็ถ้่ฆๆฏๅจ้จ็๏ผ
ๅฐฑๆฏ่ฏดไธๅฟ่ฆไฟ่ฏๆญค้ๅๅ็ๆๆๅฏน่ฑก็็ธไบๅฏๆฏ่พๆงใๅจๅบ็ธๅฏนๅๅบ้ขๅค่ฆๆฑๅฎๅจๆง๏ผๅณไปปๆไธคๅ็ด ้ฝๅฏไปฅๆฏ่พใ
ๆฏๅฆ้ๅไน้ด็ๅๅซๅณ็ณป๏ผๅฐฑๆฏไธไธชๅๅบๅณ็ณปใ

ๅๅบๅณ็ณป(Partial order)๏ผๅฎไนๅจ A ไธ็้ๅ R ๆฏๅๅบๅณ็ณป iff (ๅฝไธไปๅฝ)ๅถๅทๆไปฅไธๆง่ดจ:

- ่ชๅๆง(reflexive)
- ๅๅฏน็งฐๆง(antisymmetric)
- ไผ ้ๆง(transtive)

NOTE: R ่ฎฐไฝ โผ๏ผๆณจๆ่ฟ้็ โผ ไธๆฏๅคงๅฐๆฏ่พ๏ผ่ฅๆ xโผy๏ผๅ่ฏด x ๆๅจ y ๅ้ข๏ผx precedes y)ใ


ไฝฟ็จ็คบ่๏ผ

```rust,ignore
// `Centimeters`, a tuple struct that can be compared
#[derive(PartialEq, PartialOrd)]
struct Centimeters(f64);

// `Inches`, a tuple struct that can be printed
#[derive(Debug)]
struct Inches(i32);

println!("Derivable Debug {:?}", Inches(12));
```

่ชๅฎไน Trait ๅฏน่ฑกๅฏไปฅๅๅฎไนๆฅๅฃไธๆ ทๅช็ปๅบๅฝๆฐๅคด๏ผๅฏไปฅๅฎไนๅคไธชๆนๆณ๏ผๅฝ็ถไนๅฏไปฅๆฒกๆไปปไฝๆนๆณใๅธธ้ๆ็ฑปๅๅฎไนใ

ไนๅฏไปฅ็ปๅบๅฝๆฐๅฎ็ฐ๏ผ่ฟๅซๅ้ป่ฎคๅฎ็ฐ๏ผๆณจๆ่ฑๆฌๅทๅ้ขๆฒกๆๅๅท๏ผ

```rust,ignore
pub trait Summary {
    fn summarize_author(&self) -> String;

    fn summarize(&self) -> String {
        format!("(Read more from {}...)", self.summarize_author())
    }
}
```

็ถๅ๏ผไธบ้่ฆไฝฟ็จ Trait ็ๅฏน่ฑก้่ฟ `impl` ๅณ้ฎๅญๆฅๅฎ็ฐๅฎ๏ผๅฏนไบ้ป่ฎคๅฎ็ฐ็ Trait๏ผๅช้่ฆไธๅฏน่ฑๆฌๅท๏ผๅฆ `impl Summary for T {}`ใๆ่ๆไพๅถๅฎๆชๅฎ็ฐ็ๆนๆณ๏ผ่็็ฅ้ป่ฎคๅฎ็ฐ็ๆนๆณใ

```rust,ignore
pub struct Tweet {
    pub username: String,
    pub content: String,
    pub reply: bool,
    pub retweet: bool,
}

// use Default Implementation
// impl Summary for Tweet { }

impl Summary for Tweet {
    fn summarize(&self) -> String {
        format!("{}: {}", self.username, self.content)
    }
}

fn main() {
    let tweet = Tweet {
        username: String::from("horse_ebooks"),
        content: String::from(
            "of course, as you probably already know, people",
        ),
        reply: false,
        retweet: false,
    };

    println!("1 new tweet: {}", tweet.summarize());
}
```

ๆๆ็ trait ้ฝๆไธไธช้่็็ฑปๅ `Self`๏ผไปฃ่กจๅฝๅ่ฟไธชๅฎ็ฐไบๆญคๆฅๅฃ็ๅทไฝ็ฑปๅ๏ผไนๅฐฑๆฏ่ฟไธช็ฑปๅ็ๅซๅ่ๅทฒใtrait ไธญๅฎไน็ๅฝๆฐ๏ผไน็งฐไฝๅณ่ๅฝๆฐ(associated function)ใๅฝๆฐ็็ฌฌไธไธชๅๆฐๅฆๆๆฏ Self ็ธๅณ็็ฑปๅ๏ผไธๅฝๅไธบ `self`๏ผ่ฟไธชๅๆฐๅฏ่ขซ็งฐๅๆฅๆถ่๏ผๅณๅฝๆฐ่ฐ็จๅจไฝ็ๆฅๆถ่๏ผๅฝๆฐ่ฐ็จไบง็็ๅฝฑๅ็ฑ receiver ๆฅๆถใ่ฟๆ ท็ๅฝๆฐๅฏไปฅ็งฐไฝๆนๆณ method๏ผๅฏไปฅๅฝ็ถๅ้ๅฎไพ็ๆๅๆนๆณไฝฟ็จ๏ผๅณ้่ฟๅฐๆฐ็นๆฅ่ฎฟ้ฎ่ฟไธชๆนๆณใๆฒกๆ receiver ๅๆฐ็ๅฝๆฐ๏ผๆไปฌๅฏไปฅ็งฐไฝ้ๆๅฝๆฐ static function๏ผๅฏไปฅ้่ฟ็ฑปๅๅ ๅๅๅท :: ็ๆนๅผๆฅ่ฐ็จใๅจ Rust ไธญ๏ผๅฝๆฐๅๆนๆณๆฒกๆๆฌ่ดจๅบๅซใ

trait ไธญ็ๆนๆณไธๆฎ้ๅฝๆฐไธๆ ท๏ผๅฏไปฅๆๅฎๆๆๅๆฐๆฏๅผไผ ้ใๅผ็จไผ ้๏ผๅๆฌ self ๅๆฐไนไธ็นๆฎใๅฏนไบ self ๅๆฐๅช่ฝ็จๅจ็ฌฌไธไธชๅๆฐ็ไฝ็ฝฎ๏ผๅฏไปฅๆฏ๏ผ

- self : Self       ็ฎๅๅๆณ self
- self : mut Self   ็ฎๅๅๆณ mut self
- self : &Self      ็ฎๅๅๆณ &self
- self : &mut Self  ็ฎๅๅๆณ &mut self

ๅฏไปฅๅฐ Trait ็ฑปๅไฝไธบๅๆฐไผ ้๏ผๅฏไปฅไฝฟ็จ impl Trait ่ฏญๆณ๏ผไนๅฏไปฅไฝฟ็จ Trait ็ปๅฎ่ฏญๆณ๏ผๅฎไปฌๆฏ็ญไปท็๏ผ

```rust,ignore
// Traits as Parameters - syntax sugar of bound syntax
// impl Trait syntax
pub fn notify(item: &impl Summary) {
    println!("Breaking news! {}", item.summarize());
}

// Trait Bound Syntax
pub fn notify<T: Summary>(item: &T) {
    println!("Breaking news! {}", item.summarize());
}

// Specifying Multiple Trait Bounds with the + Syntax
pub fn notify(item: &(impl Summary + Display)) { ... }
```

Bound ่ฟไธช็งฐ่ฐๅฏไปฅ็ฟป่ฏไฝไธบๆ็ปๆ็ปๅฎ้ฝๅฏไปฅ๏ผ่ฟๅพ่ดดๅ่ฏญๆณ็ๅซไน๏ผ็ฟป่ฏๆบๅจ็ดๆฅ่งฃๆไธบ็บฆๆ๏ผ่ฟไธชๅฎๅจไธๆฐๅฝใ

ๅฆๆๅฎ็ฐๅคไธช Trait๏ผๅฏไปฅไฝฟ็จ + ่ฟๆฅ๏ผๅนถไธๅฏไปฅไฝฟ็จๆดๆธๆฐ็ where Clauses๏ผ

```rust,ignore
// Multiple Trait Bounds with the + Syntax
pub fn notify(item: &(impl Summary + Display)) { ... }
pub fn notify<T: Summary + Display>(item: &T) { ... }

// Clearer Trait Bounds with where Clauses
fn some_function<T, U>(t: &T, u: &U) -> i32
    where T: Display + Clone,
          U: Clone + Debug
{ ... }
```

ๅฝๆฐไนๅฏไปฅ่ฟๅ Trait ็ฑปๅ๏ผReturning Types that Implement Traits๏ผๆณจๆ๏ผๅฝๆฐๅช่ฝ่ฟๅๅไธไธช็ฑปๅ๏ผ่ไธๅฏไปฅ่ฟๅๅคไธช็ฑปๅ๏ผ

```rust,ignore
fn returns_summarizable() -> impl Summary {
    Tweet {
        username: String::from("horse_ebooks"),
        content: String::from(
            "of course, as you probably already know, people",
        ),
        reply: false,
        retweet: false,
    }
}
```

Traits ่ฟๆไธ็ง่ฆ็ๅฎ็ฐ๏ผๅณไธๆฝๅญๅฎ็ฐ blanket implementations๏ผๅฐฑไธบๅทฒ็ปๅฎ็ฐๆ็ง Trait ็็ฑปๅๅฎ็ฐๅฆไธ็ง Trait๏ผ่ฟๅจ Rust ๆ ๅๅบไธญๅนฟๆณไฝฟ็จใ

ไพๅฆ๏ผๆ ๅๅบไธญๅบๆฌ้ฝๅฎ็ฐไบ Display Trait๏ผๅนถไธ้่ฟไปฅไธๆนๅผไธบๆๆๅฎ็ฐ Display ็็ฑปๅๅฎ็ฐ ToStringใๅฐฑ่ฟๆ ท๏ผๆๆๅฏไปฅๆง่ก Display ๆๅฐไฟกๆฏ็็ฑปๅ้ฝๆ `to_string()` ๆนๆณใ

```rust,ignore
#![allow(unused)]
impl<T: Display> ToString for T {
    // --snip--
}

fn main() {
    let s = 3.to_string();
}
```

ไธบ็ปๆไฝๆไพๆๆกไปถๅฎ็ฐ๏ผRust ็ณป็ปไธญ็ Traits ๆไพ็่ฟ็ง่ฝๅ๏ผ็็ๅพ AOP - Aspect-oriented programmingใ


### ๐ข๐ต Drop & Copy Trait
- https://doc.rust-lang.org/std/ops/trait.Drop.html
- https://doc.rust-lang.org/std/marker/trait.Copy.html
- https://doc.rust-lang.org/stable/std/boxed/struct.Box.html
- Smart Pointers https://doc.rust-lang.org/book/ch15-00-smart-pointers.html

ๅจ Ownership ็ซ ่็ๅๅฎนไธญ๏ผ่ฎจ่ฎบไบ Rust ็จๅบไธญ็ๅฏน่ฑกๆไธค็งๅพๅบๆฌ็่กไธบ๏ผ

- Drop ๅผ็จๆๅ้็ฆปๅผไฝ็จๅๆถ๏ผๅณ็ๅฝๅจๆ็ปๆๆถๆง่ก `drop()` ่ฟ่กๆธ็๏ผ
- Copy ๅฏน่ฑก่ตๅผๆถไบง็็ๆทฑๅบฆๅคๅถ่กไธบใ

ๅ่ๅฆไธไปฃ็ ๏ผ

```rust,ignore
let s1 = String::from("hello");
let s2 = s1;
println!("s1: {}", s1);
```

ๅ ไธบ String ็ฑปๅๆฒกๆๅฎ็ฐ Copy Trait ๆนๆณ๏ผๆไปฅ่ตๅผๅณๆๅณ็ๆๆๆ็็งปๅจ๏ผๅ็ๅจ็ป `s2` ่ตๅผ็่ฏญๅฅไธ๏ผ่ฝฌ็งปไบๆๆๆๅ `s1` ๅฐฑๅคฑๆดปไธ่ฝๅไฝฟ็จไบใ

ๆไปฅ็ผ่ฏๆถ้่ฏฏๆ็คบ๏ผ`s1` ่ตๅผ่ฟ็จไธญๅ ไธบๆฒกๆ Copy trait ไผๅผ่ตทๆๆๆ็งปๅจ๏ผๆไปฅๅฎ็ธๅ็ๅฝๅจๆ็ปๆ๏ผไธ่ฝ็จไบๆๅฐไฟกๆฏใ

Copy and Drop are exclusive ไธค่ไธๅฏๅๆถๅฎ็ฐ๏ผๅฆๆๅฎ็ฐไบ Drop ๅฐฑ่กจ็คบๅฎๅจ่ตๅผๆถๅฟ้่ฝฌ็งปๆๆๆๆๅบๅๆๆๆใ

Copy ไธ Clone ๆฏๆๅบๅซ็๏ผ

- Copy ๆฏ่ตๅผ็ฌฆๅทไธญๅบ็ฐ็้ๅผๆไฝ๏ผๆปๆฏๆง่ก็ฎๅ็ bit-wise ๆท่ด๏ผๅนถไธไธๅฏไปฅ้่ฝฝ๏ผๅฏไปฅ็ๅฐๅ้ขๅฎ็ฐ Copy ๆถไฝฟ็จ็ๆฏ { }ใ
- Clone ๆฏๆพๅผๆง่กๆฐๆฎ็ๅคๅถๆไฝ๏ผๅฏไปฅๆ นๆฎ้่ฆ้่ฝฝ `clone()` ่ฟไธช่ฟ็จใ

ๅฏไปฅๅฎ็ฐ Copy ็็ฑปๅ่ฆๆฑๆๅญๆๅไนๅฟ้ๅฎ็ฐ Copyใ

ๆไบ็ฑปๅๆฏไธๅฏไปฅๅฎ็ฐ็ Copy ็๏ผๅฆ `&mut T` ๆง่กๆท่ดๅๅฐฑๆไธคไธชๅฏๅๅผ็จ๏ผ่ฟๆฏ Rust ็ผ่ฏๅจไธๅ่ฎธ็่กไธบใ`String` ็ฑปๅไน็ฑปไผผ๏ผๅ ไธบๆท่ดๅฎๅฐฑ่กจ็คบๆไธคไธชๆๅๅไธๅญ็ฌฆไธฒ buffer ็ๅผ็จ๏ผๅจ้ๆพ่ตๆบๆถๅฐฑไผๅบ็ฐ double free ้ฎ้ขใๆไปฅ๏ผ้ฃไนๅฎ็ฐไบ Drop ็็ฑปๅๆฌ่บซๅฐฑ่กจ็คบๆๅณ่็ๆฐๆฎ้่ฆๅจ็ปๆๆถๆธ็๏ผ็ดๆฅๆง่ก Copy ๆฏๅฑ้ฉ่กไธบ๏ผๅบ่ฏฅๆ นๆฎ้่ฆ้่ฝฝ `clone()` ๆนๆณใ

ๅฎ็ฐ Copy Trait ๆ็ฎๅ็ๆนๅผๆฏไฝฟ็จๅๆฐๆฎ็ผ็จ๏ผ็ดๆฅ derive ็ณป็ปๆไพ็้ป่ฎคๅฎ็ฐ๏ผไนๅฏไปฅๆๅๅฎ็ฐใ

็ฐๅจ๏ผ้่ฟๅฎ็ฐ Copy Trait ๆฅไฟฎๆญฃๅ้ขไปฃ็ ็ๆฎตไธญ้ๅฐ็้ฎ้ข๏ผ

```rust,ignore
// #[derive(Debug, Copy, Clone)]
// struct S<'a>(&'a str);

#[derive(Debug)]
struct S(&'static str);

impl Copy for S { }

impl Clone for S {
    fn clone(&self) -> S {
        *self
    }
}

fn main() {
    let s1 = S("hello");
    let s2 = s1;
    println!("s1: {:?}", s1);
}
```

ๅ ไธบ `pub trait Copy: Clone` ๆไปฅ้่ฆไธๅนถๅฎ็ฐ Cloneใ

ๅถๅฎๅทฒ็ปๅฎ็ฐ Copy ็็ฑปๅๅฆไธ๏ผ

- Function item types (i.e., the distinct types defined for each function)
- Function pointer types (e.g., fn() -> i32)
- Array types, for all sizes, if the item type also implements Copy (e.g., [i32; 123456])
- Tuple types, if each component also implements Copy (e.g., (), (i32, bool))
- Closure ๅฆๆๆฒกๆไป็ฏๅขไธญๆ่ทไปปไฝๅผ๏ผๆ่ๆๆ่ฟไบๆ่ท็ๅผ้ฝๅฎ็ฐไบ Copy ๆฌ่บซใ

่ฏทๆณจๆ๏ผๅฑไบซๅผ็จๆ่ท็ๅ้ๅง็ปๅฎ็ฐ Copy ๅณไฝฟ่ขซๅผ็จๆนๆฒกๆ๏ผ่ๅฏๅๅผ็จๆ่ท็ๅ้ไปไธๅฎ็ฐ Copyใ


ๆไปฅไธๅๅๅฎ็ฐ std::ops::Drop Trait ๅฏไปฅๅจๅฏน่ฑก็ๅฝๅจๆ็ปๆๆถๆง่ก่ตๆบๆธ็ๅทฅไฝใ

    pub trait Drop {
        pub fn drop(&mut self);
    }

Drop::drop ๆฏไธๅ่ฎธๆๅจ่ฐ็จ๏ผ้่ฆๆๅ้ๆพ่ตๆบ๏ผๆฏๅฆๅๅฅๆไปถๅฎๆๅ๏ผ้่ฆ็ซ้ฉฌ close ๅฏไปฅ้่ฟ `std::mem::drop()` ๅฝๆฐๆฅ้ๆพใ

็ปๅ Box ๆบ่ฝๆ้็คบ่ Drop ๅฎ็ฐ๏ผ

```rust,ignore
use std::mem::drop;

struct Foo(Box<i32>);

impl Foo {
    fn destroy(self){
        drop(self);
    }
}
impl Drop for Foo {
    fn drop(&mut self) {
        let Foo(v) = self;
        println!("Leave scope and object destroyed!")
    } // leave scope
}

// unit struct
struct Bar;

impl Drop for Bar {
    fn drop(&mut self) {
        println!("Dropping Bar!")
    }
}

fn main() {
    {
        let _foo = Foo(Box::new(1));
        let _bar = Bar;
    }
    println!("after lifetime 'a.")

}
```

่พๅบ๏ผๅฏไปฅ็ๅฐ drop() ่ฐ็จ็้กบๅบๆฏไปๆๅไธไธชๅคฑๆ็ๅฏน่ฑกๅผๅงๆง่ก็๏ผ

    Dropping Bar!
    Leave scope and object destroyed!
    after lifetime 'a.




### ๐ข๐ต Operator Overloading
- https://doc.rust-lang.org/rust-by-example/trait/ops.html
- https://doc.rust-lang.org/stable/core/ops/trait.Add.html
- https://doc.rust-lang.org/stable/std/ops/index.html#traits

ไปฅไธ็คบ่้่ฟๅฎ็ฐ `std::ops::Add` ๆฅ้่ฝฝ + ่ฟ็ฎ็ฌฆ๏ผๅถๅฎ่ฟ็ฎ็ฌฆๅทๅ่ๆ ๅๅบๆๆกฃ๏ผ

```rust,ignore
use std::ops;

struct Foo;
struct Bar;

#[derive(Debug)]
struct FooBar;

#[derive(Debug)]
struct BarFoo;

// The `std::ops::Add` trait is used to specify the functionality of `+`.
// Here, we make `Add<Bar>` - the trait for addition with a RHS of type `Bar`.
// The following block implements the operation: Foo + Bar = FooBar
impl ops::Add<Bar> for Foo {
    type Output = FooBar;

    fn add(self, _rhs: Bar) -> FooBar {
        println!("> Foo.add(Bar) was called");

        FooBar
    }
}

// By reversing the types, we end up implementing non-commutative addition.
// Here, we make `Add<Foo>` - the trait for addition with a RHS of type `Foo`.
// This block implements the operation: Bar + Foo = BarFoo
impl ops::Add<Foo> for Bar {
    type Output = BarFoo;

    fn add(self, _rhs: Foo) -> BarFoo {
        println!("> Bar.add(Foo) was called");

        BarFoo
    }
}

fn main() {
    println!("Foo + Bar = {:?}", Foo + Bar);
    println!("Bar + Foo = {:?}", Bar + Foo);
}
```

ๆณๅ้่ฝฝ็ๅฎ็ฐ๏ผ

```rust,ignore
use std::ops::Add;

#[derive(Debug, Copy, Clone, PartialEq)]
struct Point<T> {
    x: T,
    y: T,
}

// Notice that the implementation uses the associated type `Output`.
impl<T: Add<Output = T>> Add for Point<T> {
    type Output = Self;

    fn add(self, other: Self) -> Self::Output {
        Self {
            x: self.x + other.x,
            y: self.y + other.y,
        }
    }
}

assert_eq!(Point { x: 1, y: 0 } + Point { x: 2, y: 3 },
           Point { x: 3, y: 3 });
```

ๅฝไฝ ไธบๆ็ฑปๅๅฎ็ฐๆ trait ็ๆถๅ๏ผๅฟ้กป่ฆๆฑ็ฑปๅๆ่ trait ่ณๅฐๆไธไธชๆฏๅจๅไธ crate ไธญๅฎไน็๏ผๅณไธ่ฝไธบ็ฌฌไธๆน็็ฑปๅๅฎ็ฐ็ฌฌไธๆน็ traitใ 

่ฟไธ็นๆฏๅพ็ด่ง็๏ผ่ฟ้ฟๅๅฅไพตๅผไปฃ็ ๅฏน็ฌฌไธๆนๆจกๅ็็ ดๅ๏ผๆไบ่ตๆๆ่ฟไธช็บฆๆ็งฐไธบๅญคๅฟ่งๅ Orphan ruleใ

```rust,ignore
use std::ops::Add;
// only traits defined in the current crate can be implemented for arbitrary types
// impl doesn't use only types from inside the current crate
impl Add<i32> for bool {
    type Output = bool;
    fn add(self, other: i32) -> Self::Output {
        other
    }
}
```

ไปฅไธไปฃ็ ็ผ่ฏไผๅบ้๏ผ็ผ่ฏๅจๆ็คบ๏ผ

    error[E0117]: only traits defined in the current crate can be implemented for arbitrary types  
     --> src\main.rs:4:1
      |
    4 | impl Add<i32> for bool {
      | ^^^^^--------^^^^^----
      | |    |            |
      | |    |            `bool` is not defined in the current crate
      | |    `i32` is not defined in the current crate
      | impl doesn't use only types from inside the current crate
      |
      = note: define and implement a trait or new type instead

ไพๅฆ๏ผไธบๅๅง็ฑปๅๅฎ็ฐไธไธชๆฑ้ข็งฏ็ๆนๆณ๏ผ

```rust,ignore
trait HasArea {
    fn area(&self) -> f64;
}

impl HasArea for i32 {
    fn area(&self) -> f64 {
        *self as f64
    }
}

println!("{}",5.area());
```

ๅฆไธไธชไพๅญ๏ผ

```rust,ignore
trait Add<Rhs=Self> {
    type Output;

    fn add(self, rhs: Rhs) -> &'static str;
}

impl Add<Self> for bool {
    type Output = bool;
    fn add(self, other: Self) -> &'static str {
        if self && other { "TT" } else { "FF" } 
    }
}
println!("Boolean + {}", true.add( true));
```



### ๐ข๐ต Iterator ่ฟญไปฃๅจ
- https://doc.rust-lang.org/std/iter/index.html
- https://doc.rust-lang.org/rust-by-example/trait/iter.html
- Processing a Series of Items with Iterators https://doc.rust-lang.org/book/ch13-02-iterators.html
- Comparing Performance: Loops vs. Iterators https://doc.rust-lang.org/book/ch13-04-performance.html

Iterator ๅฎไนๆฌ่บซๆฏ็ฎๅ็๏ผๅชๆไธไธช `next()` ๆนๆณ๏ผ

```rust,ignore
trait Iterator {
    type Item;
    fn next(&mut self) -> Option<Self::Item>;
}
```

่ฐ็จ `next()` ๆนๆณ่ฟๅไธไธช `Option<Item>` ็ฑปๅๅผ๏ผๅช่ฆๆๆฐๆฎๅฐฑ่ฟๅ `Some(Item)`๏ผๅฆๅ่ฟๅ `None` ่กจ็คบๅทฒ็ป่ฟญไปฃๅฎๆใ

ไปฅไธๆฏๅ้ๅ้ๅไฝฟ็จ็ไธไบๅธธ็จ็ๆนๆณ๏ผ

- `map()` ๆ ๅฐไธบไธไธชๆฐ็่ฟญไปฃๅจ๏ผๅฆ `iter.map(|x| x*2)`๏ผ
- `fold()` ็ฑปไผผ reduce ๆนๆณ๏ผๅฆ `iter.fold(0, |a, b| a+b)`๏ผ
- `skip(n)` ่ทณ่ฟๆๅฎๆฐ้็ๅ็ด ๏ผ
- `take(n)` ๆฟๆๆๅฎๆฐ้็ๅ็ด ๏ผ
- `rev()` ๅ่ฝฌ่ฟญไปฃๅจ้กบๅบ๏ผ


ๅฎ็ฐไธไธช่ฎกๆฐ็จ็่ฟญไปฃๅจ๏ผ

```rust,ignore
struct Counter { count: usize, }

impl Counter {
    fn new() -> Counter {
        Counter { count: 0 }
    }
}

impl Iterator for Counter {
    type Item = usize;

    // next() is the only required method
    fn next(&mut self) -> Option<Self::Item> {
        self.count += 1;

        if self.count < 6 {
            Some(self.count)
        } else {
            None
        }
    }
}

let mut counter = Counter::new();

assert_eq!(counter.next(), Some(1));
assert_eq!(counter.next(), Some(2));
assert_eq!(counter.next(), Some(3));
assert_eq!(counter.next(), Some(4));
assert_eq!(counter.next(), Some(5));
assert_eq!(counter.next(), None);
for (index, value) in counter.enumerate() {
    println!("#{}: {}", index, value);
}
```

The three forms of iteration

- `iter()`, which iterates over `&T`.
- `iter_mut()`, which iterates over `&mut T`.
- `into_iter()`, which iterates over `T`.

ไปฅไธ็คบ่้่ฟๅผ็จใๅฏๅๅผ็จ็ๆนๅผ่ฟญไปฃ๏ผ

```rust,ignore
let mut values = vec![41];
for x in values.iter_mut() {
    *x += 1;
}
for x in values.iter() {
    assert_eq!(*x, 42);
}
assert_eq!(values.len(), 1);
```

ไปฅไธๆฏ `into_iter()` ๆนๅผ็็ฎๅไฝฟ็จๆนๅผ๏ผ

```rust,ignore
let values = vec![1, 2, 3, 4, 5];

for x in values {
    println!("{}", x);
}
```
ๅถไธญ `vec!` ่ฟไธชๅฎๅฏๅไฝฟ็จๆฐ็ปไธๆ ทๅๅปบไธไธช Vec ๅ้ๅ่กจใ

็ญไปท็ๅป่ฏญๆณ็ณ็ๆฌๅฆไธ๏ผ็ปๅไบ match ๆจกๅผๅน้๏ผ

```rust,ignore
let values = vec![1, 2, 3, 4, 5];
{
    match IntoIterator::into_iter(values) {
        mut iter => loop {
            let val;
            match iter.next() {
                Some(next) => val = next,
                None => break,
            };
            let () = { println!("{}", val); };
        },
    };
}
```

้็จไธๅ่ฟๅ `Iterator` ็ๅฝๆฐ็งฐไธบ่ฟญ่ตทๅจ้้ๅจ๏ผiterator adapters๏ผๅธธ็จ็ๆ `map()`, `take()`, `filter()`ใ

```rust,ignore
let vec1 = vec![1, 2, 3];
let vec2 = vec![4, 5, 6];

// `iter()` for vecs yields `&i32`. Destructure to `i32`.
println!("2 in vec1: {}", vec1.iter().any(|&x| x == 2));
// `into_iter()` for vecs yields `i32`. No destructuring required.
println!("2 in vec2: {}", vec2.into_iter().any(| x| x == 2));

// println!("Find 2 in vec1: {:?}", vec1.iter()     .find(|&&x| x == 2));
// println!("Find 2 in vec2: {:?}", vec2.into_iter().find(| &x| x == 2));
```

่ฟญไปฃๅจๆฏ lazy ็๏ผๅณๅๅปบไธไธช่ฟญไปฃๅจๅนถไธไผๆง่กไปไน๏ผ้ค้ไฝ ๆง่ก `next()` ่ฟๆ ท็ๆฐๆฎๆถ่ดนๆนๆณ๏ผๆ่ `sum()` `fold()` ่ฟไบ่ฐ็จไบ `next()` ็ๆนๆณใ

ไปฅไธไปฃ็ ่ฐ็จไบไธๆฌก `next()` ๆไปฅ map ไผ ๅฅ็ closure ๅฝๆฐๅชๆง่กไธๆฌก๏ผ

```rust,ignore
let v = vec![1, 2, 3, 4, 5];
v.iter().map(|x| println!("{}", x)).next();
for x in &v {
    println!("=>{}", x);
}
```

ๅฏน Range ่ฟ่ก่ฟญไปฃ๏ผ

```rust,ignore
let numbers = 0..;
let five_numbers = numbers.take(5);
// let five_numbers = 0..=4;
for number in five_numbers {
    println!("{}", number);
}
```

## โก Patterns & Match ๆจกๅผๅน้
- https://doc.rust-lang.org/book/ch06-02-match.html
- Pattern Matching https://cheats.rs/#pattern-matching
- https://doc.rust-lang.org/rust-by-example/flow_control/match.html
- https://doc.rust-lang.org/stable/reference/expressions/match-expr.html
- https://doc.rust-lang.org/stable/rust-by-example/flow_control/match.html
- Patterns and Matching https://doc.rust-lang.org/book/ch18-00-patterns.html
- https://doc.rust-lang.org/stable/std/keyword.ref.html

ๆจกๅผๅน้ๆฏๆฏ่พๆฐๅฅ็่ฏญๆณ็ปๆ๏ผErlang ่ฟๆ ท็่ฏญ่จไธญๅคง้้็จใ

ๆจกๅผๅน้ๅฏไปฅ็ปๅ match ๆฅ่ฟ่กๆต็จๆงๅถ๏ผไนๅฏไปฅ็ปๅ let ่ฏญๅฅๅฎๆๅ้็่งฃๆใ

ๆป็ๆฅ่ฏด๏ผๆไธ็ฑปๆจกๅผๅน้๏ผ

- Destructuring ๅฏน็ปๆไฝใๅ็ปใๆไธพ็ญๅพ็ปๅ็ฑปๅ่งฃๆ๏ผไปฅ่ทๅพๅถไธญ็ๆๅๆๅ็ด ๅผ๏ผ
- Guards ไฝฟ็จ if ๆกไปถๅน้๏ผ
- Binding ไฝฟ็จ `@` ็ปๅฎๅทไฝๅผ๏ผ

Pattern Matching ไฝฟ็จๅฟซ้ๅ่๏ผ

- `a | b` ๅคๆก็ฎๅน้ๆไฝ็ฌฆ๏ผ
- `_` ๆ `..` ็็ฅๅน้๏ผๅน้ๆๆๆชๆๅฎ็ๆก็ฎ๏ผ
- `ref some` ไฝฟ็จ `ref` ๅณ้ฎๅญๅน้ๅๅปบไธไธชๅผ็จ๏ผ`ref mut` ๅๅปบไธไธชๅฏๅๅผ็จ๏ผๅ `&` ๅผ็จๆไฝ็ฌฆๅทๅบๅซๅผๆฅ๏ผ
- `(z @ 1, _)` ไปฅ็ปๅฎๆจกๅผๅน้ไธไธชๅ็ปๅ๏ผๅนถไธ็ฌฌไธๅผไธบ 1๏ผๅฟฝ็ฅ็ฌฌไบไธชๅผใ`@` ๅญ็ฌฆๅฏไปฅ็จๆฅๆๅฎไธไธชๅผ๏ผไธไธช Range ็ญ๏ผ
- `Struct(z @ 1, _)` ไปฅ็ปๅฎๆจกๅผๅน้ไธไธชๅ็ปๅ็ปๆไฝ๏ผๅนถไธ็ฌฌไธๅผไธบ 1๏ผๅฟฝ็ฅ็ฌฌไบไธชๅผ๏ผ
- `Some(x) if x < 10 => ...` Match guards ๅณไฝฟ็จๆกไปถ็ๅน้๏ผ

& vs ref

- `&` ่กจ็คบ้่ฆไธไธชๅผ็จ๏ผ
- `ref` ่กจ็คบๅจๆจกๅผๅน้ไธญๅฐๅผ็จ่งฃๅๅบๆฅ๏ผ

```rust,ignore
fn main() {
    let number = 13;
    println!("Tell me about {}", number);
    match number {
        // Match a single value
        1 => println!("One!"),
        // Match several values
        2 | 3 | 5 | 7 | 13 => println!("This is a prime"),
        // Match an inclusive range
        13..=19 => println!("A teen"),
        // Handle the rest of cases
        _ => println!("Ain't special"),
        // TODO ^ Try commenting out this catch-all arm
    }

    let boolean = true;
    // Match is an expression too
    let binary = match boolean {
        // The arms of a match must cover all the possible values
        false => 0,
        true => 1,
        // TODO ^ Try commenting out one of these arms
    };
    println!("{} -> {}", boolean, binary);
}
```

Match guards ๅณ็ปๆจกๅผๅน้ๆทปๅ ๆกไปถ๏ผ

```rust,ignore
let message = match maybe_digit {
    Some(x) if x < 10 => process_digit(x),
    Some(x) => process_other(x),
    None => panic!(),
};
```

ๆณจๆไธๅ็บฟ็ไฝฟ็จ๏ผ`_x` ่ฟๆ ท็ๅ้ๅฝๅ่ฎฉไบบ็่ตทๆฅๅฅฝๅไผๅฟฝ็ฅ็ปๅฎ๏ผๅถๅฎไธๆฏ๏ผ

```rust,ignore
let s = Some(String::from("Hello!"));

if let Some(_s) = s {
        //   -- value moved here
    println!("found a string");
}

// println!("{:?}", s);
//                  ^ value borrowed here after partial move
```

ๆดๅค็ๆจกๅผๅน้็คบ่๏ผๅฆ Range ๅน้๏ผ

```rust,ignore
let x = 9;
let message = match x {
    0 | 1  => "not many",
    2 ..= 9 => "a few",
    _      => "lots"
};

let x = 'c';

match x {
    'a'..='j' => println!("early ASCII letter"),
    'k'..='z' => println!("late ASCII letter"),
    _ => println!("something else"),
}

assert_eq!(message, "a few");

// Demonstration of pattern match order.
struct S(i32, i32);

match S(1, 2) {
    S(z @ 1, _) | S(_, z @ 2) => assert_eq!(z, 1),
    _ => panic!(),
}
```

ๅจๅพช็ฏไธญไฝฟ็จๆจกๅผๅน้๏ผ

```rust,ignore
let v = vec!['a', 'b', 'c'];

for (index, value) in v.iter().enumerate() {
    println!("{} is at index {}", value, index);
}
```

ๆดๅคๅณไบ็ปๆไฝๅน้็ๅ่๏ผ

```rust,ignore
struct Foo {
    x: (u32, u32),
    y: u32,
}

// Try changing the values in the struct to see what happens
let foo = Foo { x: (1, 2), y: 3 };

match foo {
    Foo { x: (1, b), y } => println!("First of x is 1, b = {},  y = {} ", b, y),

    // you can destructure structs and rename the variables,
    // the order is not important
    Foo { y: 2, x: i } => println!("y is 2, i = {:?}", i),

    // and you can also ignore some variables:
    Foo { y, .. } => println!("y = {}, we don't care about x", y),
    // this will give an error: pattern does not mention field `x`
    //Foo { y } => println!("y = {}", y),
}
```


้คไบไฝฟ็จ `match` ๅณ้ฎๅญไฝฟ็จๆจกๅผๅน้ๆงๅถๆต็จๅค๏ผ่ฟๆ let ่ฏญๅฅ็ๆจกๅผๅน้๏ผๅ่ๅฆไธ๏ผ

- `match m {}`  Initiate pattern matching, then use match arms, c. next list.
- `let S(x) = get();`   Notably, let also destructures similar to the table below.
    - `let S { x } = s;`    Only x will be bound to value s.x.
    - `let (_, b, _) = abc;`    Only b will be bound to value abc.1.
    - `let (a, ..) = abc;`  Ignoring 'the rest' also works.
    - `let (.., a, b) = (1, 2);`    Specific bindings take precedence over 'the rest', here a is 1, b is 2.
    - `let Some(x) = get();`    Won't work ๐ if pattern can be refuted, use if let instead.
- `if let Some(x) = get() {}`   Branch if pattern can be assigned (e.g., enum variant), syntactic sugar. *
    - Desugars to `match get() { Some(x) => {}, _ => () }`
- `fn f(S { x }: S)`    Function parameters also work like let, here x bound to s.x of f(s).


ไปฅไธ่งฃๆ `match m {}` ็ๅน้ๅๆฏ๏ผๅฎไปฌๅๆ ทๅฏไปฅ็จไบ let ่ฏญๅฅ็ๆจกๅผๅน้๏ผ

- `E::A => {}`  Match enum variant A, c. pattern matching.
- `E::B ( .. ) => {}`   Match enum tuple variant B, wildcard any index.
- `E::C { .. } => {}`   Match enum struct variant C, wildcard any field.
- `S { x: 0, y: 1 } => {}`  Match struct with specific values (only accepts s with s.x of 0 and s.y of 1).
- `S { x: a, y: b } => {}`  Match struct with any(!) values and bind s.x to a and s.y to b.
    - `S { x, y } => {}`    Same, but shorthand with s.x and s.y bound as x and y respectively.
- `S { .. } => {}`  Match struct with any values.
- `D => {}` Match enum variant E::D if D in use.
- `D => {}` Match anything, bind D; possibly false friend ๐ of E::D if D not in use.
- `_ => {}` Proper wildcard that matches anything / "all the rest".
- `(a, 0) => {}`    Match tuple with any value for a and 0 for second.
- `[a, 0] => {}`    Slice pattern, match array with any value for a and 0 for second.
    - `[1, ..] => {}`   Match array starting with 1, any value for rest; subslice pattern. ?
    - `[1, .., 5] => {}`    Match array starting with 1, ending with 5.
    - `[1, x @ .., 5] => {}`    Same, but also bind x to slice representing middle (c. next entry).
- `x @ 1..=5 => {}` Bind matched to x; pattern binding, here x would be 1, 2, โฆ or 5.
- `0 | 1 => {}` Pattern alternatives (or-patterns).
    - `E::A | E::Z` Same, but on enum variants.
    - `E::C {x} | E::D {x}` Same, but bind x if all variants have it.
- `S { x } if x > 10 => {}` Pattern match guards, condition must be true as well to match.

็ๅฐๆไบบ้ฎ่ฟๆ ท็่กจ่พพ `match <|>a`๏ผๆฒก่ง่ฟใ


ๆจกๅผๅน้ไนไผๆไธๅฏ็จ็ๆๅต๏ผ

```rust,ignore
enum Void {}

let res: Result<u32, Void> = Ok(0);

// Err doesn't exist anymore, so Ok is actually irrefutable.
let Ok(num) = res;
```

ๅ ไธบ Ok(num) ๅนถไธๅๅซ `Result<u32, Void>` ็ฑปๅ็ๅฆไธไธชๅผ Err๏ผๆฒกๆๅฎๆด่ฆ็ๅฏ่ฝ็ๅผ๏ผ่ฟ็งๆๅต็งฐไธบ refutable pattern๏ผ่ let ่ฏญๅฅไธๆฅๅ่ฟๆ ท็ๆจกๅผๅน้ใ

่งฃๅณๆนๆณๆฏไฝฟ็จ if let ่ฏญๅฅ๏ผ

```rust,ignore
if let Ok(x) = res {
    println!("{}", x);
}
```


## โก Enums ๆไธพ็ฑปๅ
- https://doc.rust-lang.org/book/ch06-00-enums.html
- https://rust-lang.github.io/unsafe-code-guidelines/layout/enums.html

ๅ็ปๆไฝไธๆ ท๏ผๆไธพ็ฑปๅไนๆฏๅคๅ็ฑปๅ๏ผๆฏ็จๆทๅฎไน็ฑปๅใ

ๆไธพ็ฑปๅๅฎไนไธไฝฟ็จ๏ผไพๅฆๅฎไน็ฝ็ปๅฐๅ็ฑปๅ๏ผ

```rust,ignore
#[derive(Debug)]
enum IpAddrKind {
    V4,
    V6,
}

#[derive(Debug)]
struct IpAddr {
    kind: IpAddrKind,
    address: String,
}
fn main() {
    
    let home = IpAddr {
        kind: IpAddrKind::V4,
        address: String::from("127.0.0.1"),
    };
    
    let loopback = IpAddr {
        kind: IpAddrKind::V6,
        address: String::from("::1"),
    };
    println!("{:?} -> {:?}", home, IpAddrKind::V4);
}
```

ไปฅไธ IpAddrKind ๆไธพ็ฑปๅ็ๆๅๆฒกๆๆๅฎ็ฑปๅ๏ผๅฏไปฅๆๅฎๆๅ็็ฑปๅ๏ผๅนถไธๅฏไปฅๆๅฎไธๅ็ๆฐๆฎ็ฑปๅใ


```rust,ignore
enum IpAddr {
    V4(String),
    V6(String),
}

let home = IpAddr::V4(String::from("127.0.0.1"));

let loopback = IpAddr::V6(String::from("::1"));
```

```rust,ignore
enum IpAddr {
    V4(u8, u8, u8, u8),
    V6(String),
}

let home = IpAddr::V4(127, 0, 0, 1);

let loopback = IpAddr::V6(String::from("::1"));
```

```rust,ignore
enum Message {
    Quit,                       // Quit has no data associated with it at all.
    Move { x: i32, y: i32 },    // Move includes an anonymous struct inside it.
    Write(String),              // Write includes a single String.
    ChangeColor(i32, i32, i32), // ChangeColor includes three i32 values.
}
```

ไปฅไธ่ฟไบ้ฝ่กจๆๆไธพ็ฑปๅๅ็ปๆไฝๅพ็ธไผผ๏ผๅๅซๅฎไนๆนๆณ๏ผไนๆฏ๏ผ

```rust,ignore
impl Message {
    fn call(&self) {
        // method body would be defined here
    }
}
```

ไฝฟ็จไธไธช Option Enum ๅฅฝ่ฟไฝฟ็จ Null Values๏ผRust ็ณป็ปไธญ๏ผไฝฟ็จ Option ๆฅๆฟไปฃ็ดๆฅไฝฟ็จ Null ๆ้ใ

```rust,ignore
#[derive(Debug)]
enum Option<T> {
    Some(T),
    None,
}

let y: Option<i8> = Option::Some(5);
let absent_number: Option<i32> = Option::None;
if let Option::Some(x) = y {
    println!("Sum val is : {}" , x);
}else{
    println!("absent_number can not equal None")
}
```

ๆไธพ็ฑปๅ้็ฝฎ match ๆต็จๆงๅถ็็จๆณๅจ Rust ไธญๅพๅธธ่ง๏ผ

```rust,ignore
fn plus_one(x: Option<i32>) -> Option<i32> {
    match x {
        Some(i) => Some(i + 1),
    }
}
```

ไธไธชๆไธพๆๅๅฐฑๅๆฏไธไธช็ปๆไฝๅฏน่ฑก๏ผ้คไบๆไธพๅผ็ไฝฟ็จๆนๅผๅ็ปๆไฝๅทฎๅผ่พๅคง๏ผๅถๅฎๆน้ข็็ธไผผๆงๆดๅคใ

ๆไธพ็ฑปๅๅ็ปๆไฝ้ฝๅฏไปฅๅตๅฅๅฎไน๏ผไฝไธ่ฝๅพช็ฏๅตๅฅ่ช่บซใ


## โก Structures ็ปๆไฝ
- https://doc.rust-lang.org/book/ch05-00-structs.html
- https://doc.rust-lang.org/stable/book/ch10-01-syntax.html
- https://doc.rust-lang.org/stable/std/keyword.struct.html
- https://doc.rust-lang.org/stable/reference/expressions/struct-expr.html
- https://doc.rust-lang.org/reference/items/structs.html

ๅ Tuples ็ฑปไผผ๏ผ็ปๆไฝไนๅฏไปฅ็ปๅไธๅ็ฑปๅ็ๆฐๆฎ๏ผไฝๆฏ็ปๆไฝๅฏไปฅ็ปๆๅๅฝๅใ

Rust ๆไพไธ็ง็ปๆไฝ๏ผ

- Unit-Like Struct๏ผๅฆ `struct Point`๏ผ
- Tuple-Like Struct๏ผๅฆ `struct Point(i32, i32)`๏ผ
- Named-Field Struct๏ผๅฆ `struct Point(x: i32, y: i32)`๏ผ

ไปฅไธ Cookie ๅไฝ็ปๆไฝ็็ญไปท่กจ่พพ๏ผ

```rust,ignore
struct Cookie;
let c = [Cookie, Cookie {}, Cookie, Cookie {}];

struct Cookie {}
const Cookie: Cookie = Cookie {};
let c = [Cookie, Cookie {}, Cookie, Cookie {}];
```

Tuple-Like Struct ็ๆๅ่ฎฟ้ฎ๏ผ

```rust,ignore
struct Point(i32, i32);
let mut p = Point(10, 11);
let px: i32 = match p { Point(x, _) => x };
p.0 = 11;
```

Named-Field ็ปๆไฝไฝฟ็จ็คบ่๏ผ

```rust,ignore
struct User {
    pub username: String,
    pub email: String,
    pub sign_in_count: u64,
    pub active: bool,
}

let mut user1 = User {
    email: String::from("someone@example.com"),
    username: String::from("someusername123"),
    active: true,
    sign_in_count: 1,
};

user1.email = String::from("anotheremail@example.com");
```

pub ๅณ public ๅฌๅฑ่ฎฟ้ฎ๏ผๅฏไปฅ็็ฅ๏ผๅฏนไบ็ปๆไฝ๏ผ้ป่ฎคๅฐฑๆฏๅฌๅฑ่ฎฟ้ฎใ

ๅฏไปฅไธๅฎไน่ไฝฟ็จๅฟๅ็ปๆไฝ๏ผanonymous struct๏ผๅฐฑๅ JSON ๅฏน่ฑกไธๆ ท๏ผ็จ่ฑๆฌๅท็ผๅๆๅใ

Rust ๅฏน็ปๆไฝ็ๅค็ไธ๏ผๆ็น้ซ็บง่ฏญ่จ็็นๆง๏ผๅฝๆๅไฝฟ็จ็ๅ้ๅผๅๅๆถ๏ผๅฏไปฅไฝฟ็จ Struct Update Syntax ็ฎๅ๏ผ

```rust,ignore
fn build_user(email: String, username: String) -> User {
    User {
        email,
        username,
        active: true,
        sign_in_count: 1,
    }
}
```

ไนๅฏไปฅ็ปๅ Tuples ๅฎไนๆฒกๆๆๅๅๅญ็็ปๆไฝ๏ผ

```rust,ignore
#![allow(unused)]
use std::fmt::Debug; // Trait to bound with.

#[derive(Debug)]
struct Color(i32, i32, i32);

struct QuitMessage; // unit struct
struct WriteMessage(String); // tuple struct
struct ChangeColorMessage(i32, i32, i32); // tuple struct

fn main() {
    let black = Color(0, 0, 0);
    println!("Color {:?}", black);
}
```

่ฟๅฏไปฅๅฎไนๅไฝๅ็ปๆไฝ๏ผUnit-Like Structs Without Any Fields๏ผๅณๆฒกๆไปปไฝๆๅ็็ปๆไฝ๏ผๅฆ `struct SomeUnit {}` ๆ `struct Unit`ใ

ไปฅไธ็ปๆไฝไธญๅชไฝฟ็จไบๅๅงๆฐๆฎ็ฑปๅ๏ผๅนถๆฒกๆไฝฟ็จๅฐๅคๆ็ฑปๅ๏ผไนๆฒกๆไฝฟ็จๅผ็จ๏ผ่ฟไบๅๅฎนๅจๆถๅ็ๅฝๅจๆ่ฟไธๆฆๅฟต็ๆๆกฃ่ฟ่ก่งฃๆใ

ๆณๅ็ปๆไฝ๏ผ

```rust,ignore
struct Point<T> {
    x: T,
    y: T,
}

impl<T> Point<T> {
    fn x(&self) -> &T {
        &self.x
    }
}

fn main() {
    let p = Point { x: 5, y: 10 };

    println!("p.x = {}", p.x());
}
```
ๆณจๆ๏ผRust ็ปๆไฝๅฎไนๆฐๆฎๆๅ๏ผ่ๆนๆณๅฎ็ฐ็ฑ impl ๅณ้ฎๅญๅปๅฎ็ฐ๏ผๅ C/C++ ๅจ็ปๆไฝๅ้จๅฃฐๆๆนๆณไธๅใ

ๆณๅๅฎ็ฐ่ฟ็ง่ฏญๆณ๏ผ่ฟๅฏไปฅๆๆกไปถๅฎ็ฐ๏ผไธบ้ฃไบ็ปๅฎๆไบ Trait ็็ปๆไฝๆไพๅฎ็ฐ๏ผๅฆไธ๏ผ

```rust,ignore
// Listing 10-16: Conditionally implement methods on a generic type depending on trait bounds
impl<T: Display + PartialOrd> Point {
    fn cmp_display(&self) {
        if self.x >= self.y {
            println!("The largest member is x = {}", self.x);
        } else {
            println!("The largest member is y = {}", self.y);
        }
    }
}
```


ๅฆๅค๏ผๅ่ Trait ็ฑปไผผ็ไธๆฝๅญๅฎ็ฐ blanket implementationsใ



## โก Union ่ๅไฝ
- https://doc.rust-lang.org/reference/items/unions.html
- Rust's Unsafe Code Guidelines Reference - Unions https://rust-lang.github.io/unsafe-code-guidelines/layout/unions.html
- Rust's Unsafe Code Guidelines Reference - Enums https://rust-lang.github.io/unsafe-code-guidelines/layout/enums.html

็ปๆไฝ `Struct` ๅ่ๅไฝ `Union` ็จๆณๅพๅ๏ผไฝๆฏ Rust ็่ๅไฝๅ C ่ฏญ่จ็ไธ่ด๏ผๅชๆ นๆฎๆๅคงๅญๆฎตๆฅๅ้ๅๅญ๏ผ่ฎฟ้ฎ่ๅไฝ้่ฆไฝฟ็จ unsafe๏ผ

```rust,ignore
use std::mem::{size_of, align_of_val};

#[repr(C)]
union MyUnion {
    f1: i8,
    f2: f32,
}

let u = MyUnion { f2: 2. };
println!("{:p}", unsafe{&u.f1});
println!("{:p}", unsafe{&u.f2});
assert_eq!(std::mem::size_of::<MyUnion>(), size_of::<f32>());
```

Rust ็ Enums ๅถๅฎๆฏ Tagged Union๏ผ่ Union ๆฒกๆ็ธๅบ็ Tag ไธๅทๆๅฎๅจๆง๏ผๆไปฅ้่ฆ้่ฟ unsafe ่ฟ่ก่ฎฟ้ฎใ

ไปฅไธๆไธพ็ฑปๅ MyEnum ๅฏไปฅ็ญไปทๅฐไฝฟ็จ Union ๅ Struct ๅฎ็ฐ๏ผ

```rust,ignore
#[repr(C, Int)]
enum MyEnum {
    A(u32),
    B(f32, u64),
    C { x: u32, y: u8 },
    D,
}
```

็ญไปทๅฎ็ฐ๏ผ

```rust,ignore
#[repr(C)]
struct MyEnumRepr {
    tag: MyEnumTag,
    payload: MyEnumPayload,
}

#[repr(Int)]
enum MyEnumTag { A, B, C, D }

#[repr(C)]
union MyEnumPayload {
   A: u32,
   B: MyEnumPayloadB,
   C: MyEnumPayloadC,
   D: (),
}

#[repr(C)]
struct MyEnumPayloadB(f32, u64);

#[repr(C)]
struct MyEnumPayloadC { x: u32, y: u8 }
```



## โก Error Handling ้่ฏฏๅค็
- https://doc.rust-lang.org/rust-by-example/error.html
- https://doc.rust-lang.org/stable/std/result/index.html
- https://doc.rust-lang.org/stable/std/option/index.html
- https://doc.rust-lang.org/std/panic/fn.catch_unwind.html
- https://doc.rust-lang.org/nomicon/panic-handler.html
- [Writing an OS in Rust - Handling Exceptions](https://os.phil-opp.com/handling-exceptions/)

### ๐ข๐ต Panics Option Result

Rust ๆไธๅฅ็ฌ็น็ๅค็ๅผๅธธๆๅต็ๆบๅถ๏ผๅฎๅนถไธๅๅถๅฎ่ฏญ่จไธญ็ try ๆบๅถ๏ผๆ Exception ็ฑปๆฅ่กจ็คบ้่ฏฏใ

Rust ็จๅบไธญไธ่ฌไผๅบ็ฐไธค็ง้่ฏฏ๏ผ

- ๅฏๆขๅค้่ฏฏ๏ผๅฏนๅบ่ฟๅ Result<T, E>ใ
- ไธๅฏๆขๅค้่ฏฏ๏ผๅฏนๅบ panic! ๅฎ๏ผๅฎไผ่ฐ็จ็ผ่ฏๅจๆไพ็ไปฃ็ ็ปๆญข็จๅบ่ฟ่กใ

ๅฏๆขๅค้่ฏฏ็ๅธๅๆกไพๆฏๆไปถ่ฎฟ้ฎ้่ฏฏ๏ผๅฆๆ่ฎฟ้ฎไธไธชๆไปถๅคฑ่ดฅ๏ผๆๅฏ่ฝๆฏๅ ไธบๅฎๆญฃๅจ่ขซๅ ็จ๏ผๆฏๆญฃๅธธ็๏ผๆไปฌๅฏไปฅ้่ฟ็ญๅพๆฅ่งฃๅณใ

ไธๅฏๆขๅค้่ฏฏๆฏ็ฑ็ผ็จไธญๆ ๆณ่งฃๅณ็้ป่พ้่ฏฏๅฏผ่ด็๏ผไพๅฆ่ฎฟ้ฎๆฐ็ปๆซๅฐพไปฅๅค็ไฝ็ฝฎใ

Rust ็ๅๅฑ้่ฏฏๅค็ๆจกๅผ๏ผ

- ๅฆๆๅ็ๆๆ็ผบๅคฑ๏ผๅไฝฟ็จ `Option<T>`ใ
- ๅฆๆ้่ฏฏๅฏไปฅๅ็ๅฐๅค็๏ผๅไฝฟ็จ `Result<T, E>`ใ
- ๅฆๆ้่ฏฏๆ ๆณๅ็ๅฐๅค็๏ผ็บฟ็จ panicsใ
- ๅฆๆๅ็็พ้พๆง็้่ฏฏ๏ผ็จๅบๅฐฑไผไธญๆญขใ

ไปฅไธๆฏไธคไธชๅธธ่ง็่ฟๅ็ฑปๅ๏ผ

    pub enum Option<T> {
        None,
        Some(T),
    }

    pub enum Result<T, E> {
       Ok(T),
       Err(E),
    }

ๆๆๅฏ่ฝๅ็้่ฏฏ็ๅฝๆฐ้ฝไผ่ฟๅไธไธชๆ ๅ็ `Result<T, E>` ๆไธพ็ฑปๅ๏ผๅฎๆไธคไธชๆณๅๅๆฐ๏ผๅๅซ็จไบไธคไธชๅๅผ๏ผ

- `Ok(value)` ่กจ็คบๆไฝๆๅ็ๆๅ๏ผๅ่ฃไบไธไธช `T` ๅๅผ๏ผ
- `Err(why)` ่กจ็คบๆไฝๅคฑ่ดฅ็ๆๅ๏ผ้ๅธธๅ panic ๅณ่๏ผๅ่ฃไบไธไธช `E` ๅๅผ๏ผ่ฟไธชๅผ้ๅธธๅๅซๅบ้็ๅ่ไฟกๆฏ๏ผ

็ปๅๆจกๅผๅน้๏ผๅฏไปฅๅฏนๅฝๆฐๅฏ่ฝๅบ็ฐ็ๅผ่ฟ่กๅคๆญ๏ผ

    if let Ok(some_value) = fun() {
        // do something with some_value
    }

็คบ่ `Result<T, E>` ๆไธพ็ฑปๅ็ไฝฟ็จ๏ผ

```rust,ignore
#[derive(Debug)]
enum Version { Version1, Version2 }

fn parse_version(header: &[u8]) -> Result<Version, &'static str> {
    match header.get(0) {
        None => Err("invalid header length"),
        Some(&1) => Ok(Version::Version1),
        Some(&2) => Ok(Version::Version2),
        Some(_) => Err("invalid version"),
    }
}

let version = parse_version(&[1, 2, 3, 4]);
match version {
    Ok(v) => println!("working with version: {:?}", v),
    Err(e) => println!("error parsing header: {:?}", e),
}
```

ไปฅไธไพๅญ parse_version ๅฝๆฐ็ปๅไบ match ๆจกๅผๅน้ๆฅ่ฟๅๆฐๅผๅฏนๅบ็ Version ๆไธพๅผ๏ผ็ถๅๅ็จไธๆก
match ๆจกๅผๅน้ Ok or Err ๅผๆฅๆๅฐไธๅ็ไฟกๆฏใ

```rust,ignore
let optional = None;
check_optional(optional);

let optional = Some(Box::new(9000));
check_optional(optional);

fn check_optional(optional: Option<Box<i32>>) {
    match optional {
        Some(p) => println!("has value {}", p),
        None => println!("has no value"),
    }
}
```

้่ฟ `unwrap()` ๆนๆณๅฏไปฅๅๅบ `Ok(value)` ๅ่ฃ็ๅผ๏ผ`unwrap_err()` ่ฟ็งๆนๆณๆ่ฝๅฏน `Err(why)`
ๆไฝ๏ผๅฆๅ panicใ

ๆไปฅๅจไฝฟ็จ `unwrap()` ๆนๆณไผๅจๆ้ๆถๆง่ก panic๏ผ ๅนถไธ็ปๆญข็จๅบใๆด็ฎๅ็ๅๆณๆฏไฝฟ็จ ? ๆไฝ็ฌฆๆฟไปฃ๏ผ
ๅฎๅฏไปฅ้พๅผไฝฟ็จ๏ผๅฆ x?๏ผๅฆๆ x ๆฏ None ๆ Err๏ผ้ฃไน ? ๆไฝ็ฌฆๅฐฑๆฏๅไธไผ ๆญ panic!๏ผๆงๅผไปฃ็ ่ฟ
ๅฏไปฅไฝฟ็จๅทๆ็ธๅๅ่ฝ็ try! ๅฎใ

ไนๅฏไปฅไฝฟ็จ `expect()` ๆนๆณ๏ผๅฎๅฏไปฅๆๅฎๅบ็ฐ้่ฏฏๆถ็ๆ็คบไฟกๆฏ๏ผๅนถไธๅจๆญฃๅธธๆๅตไธ่ฟๅ OK ๅฐ่ฃ็ๅผ๏ผ

    expect("Some message...");

ๅนถไธ๏ผRust ้ป่ฎคไฝฟ็จไบ `#[warn(unused_must_use)]`๏ผๅณๅฟ้ไฝฟ็จ่ฟๅๅผ `Result<T, E>`๏ผๅฏไปฅ
็ดๆฅไฝฟ็จ `unwrap()`๏ผๅฆๆๆไปฌ็ฅ้้่ฏฏๆๆไฝๅคฑ่ดฅไธไผๅ็๏ผไฝๆฏ็ผ่ฏๅจไธ็ฅ้่ฟไธ็นใ

ๆ นๆฎไธๅ็ไฝฟ็จๅบๆฏ๏ผResult ๆ Option ้ฝๆไพไบไปฅไธ็ฑปไผผๆนๆณๆนไพฟๅค็ๅ็งๅฏ่ฝ็ๆๅต๏ผ

- `unwrap` ็ดๆฅๆถ่ดนๆๆๆฐๆฎ๏ผไธ็ฎก้่ฏฏๆๅตใ
- `unwrap_unchecked` ๆถ่ดนๆฐๆฎ๏ผไธๆฃๆฅ่ฟๅๅผๆฏๅฆไธบ Err ๅผใ
- `unwrap_err` ๆ `unwrap_none` ็ดๆฅๆถ่ดนๆฐๆฎใ
- `unwrap_err_unchecked` ๆถ่ดนๆฐๆฎ๏ผไธๆฃๆฅ่ฟๅๅผๆฏๅฆไธบ Ok ๅผใ
- `unwrap_or` ่ฟๅ Ok ๅผ๏ผๅฆๆๆฏ Err ๅ่ฟๅๆๅฎ็้ป่ฎคๅผใ
- `unwrap_or_default` ่ฟๅ Ok ๅผ๏ผๅฆๆๆฏ Err ๅ่ฟๅ T ็ฑปๅ็้ป่ฎคๅผ๏ผๅฆๆฐๅผ็ฑปๅ็้ป่ฎคๅผไธบ 0๏ผๅญ็ฌฆไธฒ็ฑปๅ้ป่ฎคๅผไธบ ""ใ
- `unwrap_or_else` ่ฟๅ Ok ๅผ๏ผๅฆๆๆฏ Err ๅไปไธไธช้ญๅไธญ่ฎก็ฎไธไธชๅผใ

```rust,ignore
#![allow(unused)]
#![feature(option_result_unwrap_unchecked)]
fn main() {
    let x: Result<u32, &str> = Err("2");
    assert_eq!(unsafe { x.unwrap_unchecked() }, 2);
}
```

ๅถๅฎ้ป่พๆไฝๆนๆณ๏ผ

- `and` ่ฟๅ None/Err ๅผ๏ผๅฆๆๆฏ Some/Ok ๅ่ฟๅไธไธชๆๅฎๅผใ
- `and_then` ่ฟๅ None/Err ๅผ๏ผๅฆๆๆฏ Some/Ok ๅไปไธไธช้ญๅไธญ่ฎก็ฎไธไธชๅผใ
- `or` ่ฟๅ Some/Ok ๅผ๏ผๅฆๆๆฏ None/Err ๅ่ฟๅไธไธชๆๅฎๅผใ
- `or_else` ่ฟๅ Some/Ok ๅผ๏ผๅฆๆๆฏ None/Err ๅไปไธไธช้ญๅไธญ่ฎก็ฎไธไธชๅผใ

ๅฆๅค๏ผๅฏไปฅไฝฟ็จๅฏน่ฟๅๅผ่ฟ่กๆ ๅฐๅๆขๆๅฆไธ็งๅผ๏ผๅจๅฝๆฐ่ฟๅๅค็ง้่ฏฏ็ฑปๅๆถ๏ผ่ฟไบๆนๆณๅฏไปฅ็จๆฅ็ปไธ้่ฏฏ็ฑปๅใ

- `map( |T|->T )` ๅฐ OptionใResult ็ๆฐๆฎ็ฑปๅๆ ๅฐไธบ้ญๅ่ฟๅ็ๆฐ็ฑปๅ๏ผๅณๆดๆฐ Some/Ok ๅ่ฃ็ๆฐๆฎ็ฑปๅ๏ผ่ไธ็ฎก None/Errใ
- `map_or( T, |T|->T )` ๅฐ Some/Ok ้่ฟ่ก้ญๅๅฝๆฐๆ ๅฐ่ฝฌๆขไธบ T ็ฑปๅ๏ผๅฆๆๆฏ None/Err ๅ่ฟๅๆๅฎ็้ป่ฎคๅผ๏ผ็ฌฌไธไธชๅๆฐๆๅฎ้ป่ฎคๅผใ
- `map_or_else( |T|->T, |T|->T )` ๆๅฎไธคไธช้ญๅ๏ผๅๅซ็จไบ้ๆฐๆ ๅฐ None/Err ๅ Some/Ok ๅ่ฃ็ๅผ็ฑปๅใ

็ๆบไปฃ็ ๅฎไนๆดๆธๆฐ๏ผ

```rust,ignore
pub fn map<U, F: FnOnce(T) -> U>(self, f: F) -> Option<U> {
    match self {
        Some(x) => Some(f(x)),
        None => None,
    }
}
pub fn map_or<U, F: FnOnce(T) -> U>(self, default: U, f: F) -> U {
    match self {
        Some(t) => f(t),
        None => default,
    }
}
pub fn map_or_else<U, D: FnOnce() -> U, F: FnOnce(T) -> U>(self, default: D, f: F) -> U {
    match self {
        Some(t) => f(t),
        None => default(),
    }
}
```

ๅฆๅค๏ผไผ ๅฅ map_or ็ๅๆฐๆฏๅๆ่ฏไผฐ๏ผ่ map_or_else ๅๆฏๅปถ่ฟ่ฏไผฐใ

ไพๅฆ๏ผไปฅไธไพๅญ๏ผ

```rust,ignore
fn double_first_v1(vec: Vec<&str>) -> Option<Result<i32, ParseIntError>> {
    vec.first().map(|first| {
        first.parse::<i32>().map(|n| 2 * n)
    })
}
fn double_first_v2(vec: Vec<&str>) -> Result<Option<i32>, ParseIntError> {
    let opt = vec.first().map(|first| {
        first.parse::<i32>().map(|n| 2 * n)
    });

    opt.map_or(Ok(None), |r| r.map(Some))
}
fn double_first_v3(vec: Vec<&str>) -> Option<i32> {
    let opt = vec.first().map(|first| {
        first.parse::<i32>().map(|n| 2 * n)
    });
    opt.map_or(None, |s| {
        match s {
            Ok(v) => Some(v),
            Err(i) => None,
        }
    })
}
let numbers = vec!["42", "93", "18"];
let empty = vec![];
let strings = vec!["tofu", "93", "18"];

println!("The first doubled is {:?}", double_first_v1(numbers));
println!("The first doubled is {:?}", double_first_v1(empty));
println!("The first doubled is {:?}", double_first_v1(strings));
```

ๅญ็ฌฆไธฒ็ๆฐๅผ่งฃๆๆนๆณ parse ่ฟๅ็ฑปๅไธบ `Result<i32, ParseIntError>`ใ

ๆ นๆฎ่พๅฅๆฐๆฎ๏ผๅฏนไบ numbers ๆ strings ่ฟ่ก่งฃๆ๏ผvec.first() ้ฝๅฏไปฅๅพๅฐไธไธชๆฐๆฎ่ฟ่กๅค็ใ่ๅค็ empty ็็ฉบๅ้ๅ่กจๆถ๏ผๅฐฑๆฒกๆๆฐๆฎไบใ่ฟไผๅฏผ่ด double_first_v1 ๅบ็ฐๆททไนฑ็่ฟๅๅผ๏ผๅณไฝฟ่งฃๆๆฐๅผๅบ้ไนไผๅพๅฐไธไธช Some ๅผใ

้่ฟ map ๆนๆณ้ๆฐๆ ๅฐ๏ผๅฏไปฅๆนๅ่ฟๆ ทๆททไนฑ็ๅฑ้ข๏ผ

    # double_first_v1
    The first doubled is Some(Ok(84))
    The first doubled is None
    The first doubled is Some(Err(ParseIntError { kind: InvalidDigit }))

    # double_first_v2
    The first doubled is Ok(Some(84))
    The first doubled is Ok(None)
    The first doubled is Err(ParseIntError { kind: InvalidDigit })

    # double_first_v3
    The first doubled is Some(84)
    The first doubled is None
    The first doubled is None

ไนๅฏไปฅ้่ฟ ok ๆนๆณ่ฝฌๆข `Option<T>` ๅ `Result<T, E>` ไธค็ง็ฑปๅ๏ผ

```rust,ignore
let x = Some("foo");
assert_eq!(x.ok_or(0), Ok("foo"));

let x: Option<&str> = None;
assert_eq!(x.ok_or(0), Err(0));

let x = Some("foo");
assert_eq!(x.ok_or_else(|| 0), Ok("foo"));

let x: Option<&str> = None;
assert_eq!(x.ok_or_else(|| 0), Err(0));

let x: Result<u32, &str> = Ok(2);
assert_eq!(x.ok(), Some(2));

let x: Result<u32, &str> = Err("Nothing here");
assert_eq!(x.ok(), None);
```

### ๐ข๐ต Unpacking & Propagating Errors with ?
- https://brson.github.io/2016/11/30/starting-with-error-chain

ๅฆๆไฝ ็ไปฃ็ ๆๅคง้็ๅฝๆฐ่ฐ็จไผ่ฟๅ Result๏ผ้ฃไน้่ฏฏๅค็ๅฐไผๆฏ้ๅธธๅไฝๆฏ็ฅ็ใ

Rust ๆไพไบ ? ๆไฝ็ฌฆๆฅ็ฎๅ้่ฏฏๅผๅพไผ ๆญ๏ผ็ธๅฝไบ throws ๆไฝ๏ผๅนถไธๅฏไปฅ่ฟ่ก้พๅผ่กจ่พพ๏ผ

```rust,ignore
use std::fs::File;
use std::io;
use std::io::Read;

fn read_username_from_file() -> Result<String, io::Error> {
    let mut s = String::new();

    File::open("hello.txt")?.read_to_string(&mut s)?;

    Ok(s)
}
```

่ฟไธชๆไฝ็ฌฆๅทๅฏนไบ `Result` or `Option` ๆๅถๅฎๅฎ็ฐไบ std::ops::Try ็็ฑปๅๆๆใ

ๅฆๆๅฝๆฐ่ฟๅ `Result` or `Option`๏ผ้ฃไนๅฏไปฅไฝฟ็จ ? ๆไฝ็ฌฆใ

```rust,ignore
use std::error::Error;
use std::fs::File;

fn main() -> Result<(), Box<dyn Error>> {
    let f = File::open("hello.txt")?;

    Ok(())
}
```



### ๐ข๐ต Panic Hook

Rust ๅจ std::panic ๆจกๅๆไพไบๅ ไธช้่ฏฏๅค็็็ธๅณๅฝๆฐ๏ผ

- `catch_unwind`    ่ฐ็จ้ญๅๅนถๆๆ unwinding panicใ
- `panic_any`   ็ฑปไผผ panic ๅฎ๏ผไฝๅฏไปฅๆไพไธไธชๅผไฝไธบ panic payloadใ
- `resume_unwind`   ่งฆๅ panic ไฝไธ่ฐ็จ panic hookใ
- `set_hook`    ๆณจๅไธไธช panic hook ๅฝๆฐ๏ผไผๆฟๆขๅทฒ็ปๆณจๅ็ๅฝๆฐใ
- `take_hook`   ่งฃ้ค panic hook๏ผๅนถ่ฟๅ่ฟไธชๅฝๆฐใ

่ฟๆไธคไธช้่ฏฏไฟกๆฏๅฏน่ฑก๏ผ

```rust,ignore
#[lang = "panic_info"]
#[stable(feature = "panic_hooks", since = "1.10.0")]
#[derive(Debug)]
pub struct PanicInfo<'a> {
    payload: &'a (dyn Any + Send),
    message: Option<&'a fmt::Arguments<'a>>,
    location: &'a Location<'a>,
}

#[lang = "panic_location"]
#[derive(Copy, Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
#[stable(feature = "panic_hooks", since = "1.10.0")]
pub struct Location<'a> {
    file: &'a str,
    line: u32,
    col: u32,
}
```

Rust ็ Unwinding ็ญ็ฅๅฏไปฅๅฐ panic ็ถๆๆขๅค่ฟๆฅ๏ผ

```rust,ignore
use std::panic;

let result = panic::catch_unwind(|| {
    println!("hello!");
});
assert!(result.is_ok());

let result = panic::catch_unwind(|| {
    panic!("oh no!");
});
assert!(result.is_err());
```

ไฝฟ็จ `set_hook`ใ`take_hook` ๅฏไปฅๆณจๅใ่งฃ้คไธไธช panic hook ๅฝๆฐ๏ผ

```rust,ignore
use std::panic;

panic::set_hook(Box::new(|panic_info| {
    if let Some(s) = panic_info.payload().downcast_ref::<&str>() {
        println!("panic occurred: {:?}", s);
    } else {
        println!("panic occurred");
    }
    if let Some(location) = panic_info.location() {
        println!("panic occurred in file '{}' at line {}", location.file(), location.line());
    } else {
        println!("panic occurred but can't get location information...");
    }
}));

// let _ = panic::take_hook();

panic!("Normal panic");
```

ไฝฟ็จ `resume_unwind` ่งฆๅ panic ๅนถไธ้ฟๅๆง่ก panic hook๏ผ

```rust,ignore
use std::panic;

let result = panic::catch_unwind(|| {
    panic!("oh no!");
});

if let Err(err) = result {
    panic::resume_unwind(err);
}
```

ๅ่ใๆทฑๅฅๆตๅบ Rustใ๏ผๅฆๆๆไปฌๅฐ่ฏไฝฟ็จ `-C panic=abort` ้้กน็ผ่ฏไปฃ็ ๏ผๅฏไปฅ็ๅฐ๏ผ่ฟไธช std::panic::catch_unwind ่ตทไธไบไปไนไฝ็จใ

    rustc -C panic=unwind test.rs
    rustc -C panic=abort test.rs

ไฝๆฏ๏ผ่ฏทๅคงๅฎถๆณจๆ๏ผ่ฟไธช catch_unwind ๆบๅถ็ปๅฏนไธๆฏ่ฎพ่ฎก็จไบๆจกๆ โtry catchโ ๆบๅถ็ใ่ฏทๅคงๅฎถๆฐธ่ฟไธ่ฆๅฉ็จ่ฟไธชๆบๅถ๏ผๆฅๅๆญฃๅธธ็ๆต็จๆงๅถใๅฎ็ไธป่ฆ็จๅคๅจๅช้ๅข๏ผๆฏๅฆไธ้ข็่ฟไบๆๅต๏ผ

ๅจ FFI ๅบๆฏไธ็ๆถๅ๏ผC ่ฏญ่จ่ฐ็จ Rust ๅฝๆฐ๏ผๅจ Rust ๅ้จๅบ็ฐไบ panic๏ผ็ดๆฅๆๅฐ C ไปฃ็ ไธญไผๅฏผ่ดๆชๅฎไน่กไธบ๏ผundefined behavior๏ผใ

ๆไบ้ซ็บงๆฝ่ฑกๆบๅถ๏ผ้่ฆ้ปๆญขๆ ๅฑๅผ๏ผๆฏๅฆ็บฟ็จๆฑ ๏ผๅฆๆไธไธช็บฟ็จไธญๅบ็ฐไบ panic๏ผๆไปฌๅธๆๅชๆ่ฟไธช็บฟ็จๅณ้ญ๏ผ่ไธ่ณไบๅฐๆดไธช็บฟ็จๆฑ ไธ่ตท่ขซๆไธๆฐดใ


### ๐ข๐ต Error Message
- http://stevedonovan.github.io/rust-gentle-intro/6-error-handling.html
- [Rust Cookbook - Making Requests](https://rust-lang-nursery.github.io/rust-cookbook/web/clients/requests.html)

้่ฏฏๅ็ๆถ๏ผ้ๅธธๅฏไปฅ่ฎฐๅฝ็ๆฏไธไธช้่ฏฏ็ ๏ผ่ๅฐ้่ฏฏ็ ไธ็ธๅณ็ไฟกๆฏๅณ่่ตทๆฅ๏ผๆ่ฝ็ป็จๆทๅๅฅฝ็ๆ็คบใ

ๅ่ std::io ๅบไธญๅฎไน็้่ฏฏไฟกๆฏๅฏน่ฑก๏ผ่ฟไธชๅบๅฎไบ็ฐไธไธช Error ็ปๆๆฅๅค็้่ฏฏไฟกๆฏ๏ผๆฅๅฃ่ฆๆฑ๏ผ

- May implement **Debug**
- Must implement **Display**
- Must implement **Error**


```rust,ignore
pub struct Error {
    repr: Repr,
}

#[stable(feature = "rust1", since = "1.0.0")]
impl fmt::Debug for Error {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        fmt::Debug::fmt(&self.repr, f)
    }
}

#[stable(feature = "rust1", since = "1.0.0")]
impl fmt::Display for Error {
    fn fmt(&self, fmt: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self.repr {
            Repr::Os(code) => {
                let detail = sys::os::error_string(code);
                write!(fmt, "{} (os error {})", detail, code)
            }
            Repr::Custom(ref c) => c.error.fmt(fmt),
            Repr::Simple(kind) => write!(fmt, "{}", kind.as_str()),
        }
    }
}

enum Repr {
    Os(i32),
    Simple(ErrorKind),
    Custom(Box<Custom>),
}

impl fmt::Debug for Repr {
    fn fmt(&self, fmt: &mut fmt::Formatter<'_>) -> fmt::Result {
        match *self {
            Repr::Os(code) => fmt
                .debug_struct("Os")
                .field("code", &code)
                .field("kind", &sys::decode_error_kind(code))
                .field("message", &sys::os::error_string(code))
                .finish(),
            Repr::Custom(ref c) => fmt::Debug::fmt(&c, fmt),
            Repr::Simple(kind) => fmt.debug_tuple("Kind").field(&kind).finish(),
        }
    }
}
```

็คบ่ไฝฟ็จ๏ผ

```rust,ignore
use std::io::{Error, ErrorKind};

fn raises_an_error(yes: bool) -> Result<(), Error> {
    if yes {
        Err(Error::from(ErrorKind::NotFound))
    } else {
        Ok(())
    }
}

fn main(){
    let result = raises_an_error(true);
    // assert_eq!("Kind(NotFound)",  format!("{:?}", result.unwrap_err()));
    // assert_eq!("entity not found)",  format!("{}", result.unwrap_err()));
    
    let out: String = match result {
        Ok(()) => "return unit tuple".to_string(),
        Err(error) => match error.kind() {
            ErrorKind::NotFound => { "Error: Not Found!".to_string()},
            other_error => { panic!("Unknown error: {:?}", other_error); }
        },
    };
    println!("Output Message: {}", out);
}
```

ไธไธช็จๅบไธญ็้่ฏฏ็ฑปๅๆฏๅๅผๅๆ ท็๏ผไธบไบๆนไพฟๅค็้่ฏฏ๏ผ้ๅธธ้่ฆๅๅฝไธๅ้่ฏฏๅค็๏ผ่ชๅจๆง่ก้่ฏฏ็ฑปๅ็่ฝฌๆข๏ผ
็จๅบ็ฑปๅ Error ่กจ่พพๅถๅฎ้่ฏฏไฟกๆฏ็ฑปๅ๏ผๆฏๅฆๅฏไปฅไธบ่ชๅฎไน้่ฏฏ็ฑปๅ YourError ๅฎ็ฐ From<Error> ่ฝฌๆข
ๆฅๅฃ๏ผๆ่ๆฏๆ่ชๅจไปๅถๅฎ้่ฏฏ็ฑปๅ่ฝฌๆข๏ผ้ฃไนๅจๅฝๆฐ่ฟๅ Result((), YourError) ๆถๅฐฑ
ไผ่ชๅจ่ฐ็จ่ฟไธชๆฅๅฃ่ฟ่ก่ฝฌๆข๏ผ

- ๅฎ็ฐ `From<T> for U` ้ๅซไบ `Into<U> for T`๏ผ
- From ๆฅๅฃๆฏ่ชๅ็๏ผreflexive๏ผๅณ `From<T> for T` ไนๅๆถๅฎ็ฐ๏ผ

็ปๅ Box ๆบ่ฝๆ้๏ผ้่ฟ็ฑปๅๅซๅๅฎไนไธไธชๆฐ็็ฑปๅ๏ผๅฐฑๅฏไปฅ่ชๅจๅฐ้่ฏฏไฟกๆฏไบค่ฝฌๆขไธบ Box ๆ้็ฎก็๏ผ

    type BoxResult<T> = Result<T,Box<Error>>;

็คพๅบไธๆไธไธช error-chain ็จไบๅค็่ชๅฎไน้่ฏฏ็ฑปๅ๏ผไฝ็ฎๅๅทฒ็ปไธๆดๆฐ๏ผๅฎๅฏไปฅ่ชๅจๅค็้่ฏฏ็ธๅณๆฅๅฃ๏ผ
Display, Debug ๅ Error ็ปๆ็ญ๏ผไปฅๅ `From` ๆฅๅฃ๏ผไปฅๅฎ็ฐๅฝไธๅ็้่ฏฏ็ฑปๅ็่ฝฌๆขใ

```rust,ignore
error_chain! {
    // Types generated by the macro. If empty or absent, it defaults to
    //     Error, ErrorKind, Result;
    types {
        // With custom names:
        MyError, MyErrorKind, MyResult;
        // Without the `Result` wrapper:
        //     Error, ErrorKind;
    }

    // Automatic bindings to other error types generated by `error_chain!`.
    links {
        Inner(inner::Error, inner::ErrorKind);
        // Attributes can be added at the end of the declaration.
        Feature(feature::Error, feature::ErrorKind) #[cfg(feature = "a_feature")];
    }

    // Bindings to types implementing std::error::Error.
    foreign_links {
        Io(::std::io::Error);
    }
}
```

`foreign_links` ไธญๅฎไนไบ ErrorKind ้่ฏฏๆไธพๅฏ่ฝ็ๅๅผ๏ผๅทไฝไปฃ็ ๅฏไปฅใๅฏไปฅๅจ Rust Playground
ไธ็ๆ HIR ไธญ้ดไปฃ็ ๏ผไนๅฏไปฅไฝฟ็จๅฝไปค็ๆ LLVM-IR (.ll) ๆ่ MIR (.mir)๏ผ

    cargo rustc -- -Z unpretty=hir-tree
    cargo rustc -- --emit llvm-ir
    cargo rustc -- --emit mir

ๅ่ๅฆไธไปฃ็ ๏ผ`error_chain` ็ฎๅไบ้่ฏฏๅค็ไปฃ็ ๏ผ่ชๅจๅฎ็ฐ็้่ฏฏ็ฑปๅ errors::Error ๅฏไปฅ่ชๅจ็ฑ
std::io::Error ่ฝฌๆขๅพๅฐ๏ผ่ชๅจไปฃ็ ๅๅซ From<std::io::Error> ๆฅๅฃ็ๅฎ็ฐ๏ผๆไปฅ ? ็ฌฆๅทๅฏไปฅๅค็
่ชๅฎไน็้่ฏฏ็ฑปๅใ

```rust ,ignore
use std::io::Read;

mod errors {
    use error_chain::error_chain;
    error_chain! {
        foreign_links {
            Io(std::io::Error);
            HttpRequest(reqwest::Error);
        }
    }
}
use errors::*;

fn main() -> Result<()> {
    let mut res = reqwest::blocking::get("http://httpbin.org/get")?;
    let mut body = String::new();
    res.read_to_string(&mut body)?;

    println!("Status: {}", res.status());
    println!("Headers:\n{:#?}", res.headers());
    println!("Body:\n{}", body);

    Ok(())
}
```




## โก Collections ้ๅ
- https://doc.rust-lang.org/book/ch08-00-common-collections.html
- https://doc.rust-lang.org/std/collections/index.html
- https://doc.rust-lang.org/stable/std/collections/index.html
- https://doc.rust-lang.org/rust-by-example/std.html
- Learn Rust With Entirely Too Many Linked Lists https://rust-unofficial.github.io/too-many-lists/

้ๅๅ ไนๆฏๆๆ้ซ็บง่ฏญ่จๅฟ้็ๆฐๆฎ็ปๆ็ฑปๅ๏ผๅถๅฎๆฐๆฎ็ฑปๅไธ่ฌ่กจ่พพไธไธชๅผ๏ผ่้ๅ่กจ่พพไธ็ณปๅ็ๅผ๏ผๅนถไธ่ฟๆญคๅผๅญๆพไบ Heap ๅๅญๅบ๏ผๅณ็ผ่ฏๅจไธ่ฝ็กฎๅฎๅฎ็ๅคงๅฐใๆไปฅ๏ผ้ๅ็ฑปๅ้่ฆๅจ่ฟ่กๆถๆ็ฅ้้่ฆๅคๅคงๅฎน้ๅปๅญๅจๆฐๆฎ๏ผๅนถไธๅฎน้ๅฏไปฅ้ๆถ่ฐๆดใไธๅ็้ๅ็ฑปๅๅทๆไธๅ็ๆง่ฝ๏ผ่ฟ้่ฆๆ นๆฎ้่ฆๅป้ๆฉๅๅผ็้ๅ็ฑปๅใ

้ๅ็ๅบๅฑๅฎ็ฐๆถๅไบๅๆ ๆฐๆฎ็ปๆ็ๅฎ็ฐ๏ผ้่ฆๅฏน็บข้ปๆ ๆไธๅฎ็ไบ่งฃใ

ไปฅไธๆฏๆๅธธ็จ็ไธไบ้ๅ็ฑปๅ๏ผ

- A `vector` allows you to store a variable number of values next to each other.
- A `string` is a collection of `characters`. Weโve mentioned the `String` type previously, but in this chapter weโll talk about it in depth.
- A `hash map` allows you to associate a value with a particular key. 

ๆ ๅๅบ std::collections std::vec ๆไพไบไปฅไธๅ ็ง้ๅ็ฑปๅ๏ผไธป่ฆๆฏๅ้ๅๅๅธๆ ๅฐ็ฑปๅ๏ผ

- Sequences: 
    - `Vec` ๅ้ๅ่กจ๏ผๆฏไธชๅผ็ดงๆฅๅไธไธชๅผ๏ผ็ฑปไผผๆฐ็ป๏ผๅทฎๅซๅจไบไฝฟ็จ Heap ๅๅญไธๅฏๅจๆๅข้ฟ๏ผ้่ฟ vec ๅฎๅฏไปฅๅๆฐ็ปไธๆ ทๅๅปบๅ้ๅ่กจใ
    - `VecDeque` ๅบไบๅฏๅข้ฟ็็ฏๅฝข็ผๅฒๅบ็ฎๆณ RingBuffer ๅฎ็ฐ็ๅ็ซฏ้ๅ๏ผๅฏไปฅๅพไธค็ซฏ pushใpop ๆฐๆฎ๏ผ่ฟๅฏไปฅ่ฟ่ก rotate ๆไฝใ
    - `LinkedList` ๅๅ้พ่กจ๏ผๆง่ฝๆฏ VecDeque ๅทฎ๏ผๆฏ Vec ๆดๅทฎใ
- Maps: 
    - `HashMap` ๆ ๅบๅๅธๆ ๅฐใ
    - `BTreeMap` ๆๅบไบๅๆ ๆ ๅฐใ
- Sets:  
    - `HashSet` ๆ ๅบๅๅธ้ๅ๏ผๅผไธบ็ฉบๅ็ป็็นๅฎ็ฑปๅใ
    - `BTreeSet` ๆๅบ็ไบๅๆ ้ๅ๏ผๅผไธบ็ฉบๅ็ป็็นๅฎ็ฑปๅใ
- Misc: 
    - `BinaryHeap` ๅบไบไบๅๆๅคงๅ (Binary Heap)ๅฎ็ฐ็ไผๅ้ๅใ

Sets ๅ Collections ้ฝๅซ้ๅ๏ผ้ๅธธๅ่็จไบๆฆๆฌๆง็็งฐ่ฐใ

ไป็ฑปๅๅๅญๅฏไปฅ็ๅฐ๏ผไบๅๆ  B-Tree ่ฟ็งๆฐๆฎ็ปๆ็ๅบ็จๆฏ้ๅธธๅนฟๆณ็๏ผ่ๅฎ้ไธญ่ฟๆๅ็งๆฉๅฑ็ๆฌ๏ผๅฆ็บข้ปๆ ใ

ไฝฟ็จ้ไฝๆถ๏ผ้่ฆ่่้ๆ็ไธป่ฆๅผ้๏ผๆถๅไปฅไธๅ ไธชๆน้ข๏ผ

- ้็ๆฐๆฎๅข้ฟ๏ผ้ๅ้่ฆ่ฐๆดๅฎน้ๆถ็ๅผ้๏ผ
- 
- ๅฏนไบ้พ่กจ๏ผๆฐๆฎๆๅบ

Sequences

    |            |     get(i)     |    insert(i)    |   remove(i)    | append |  split_off(i)  |
    |------------|----------------|-----------------|----------------|--------|----------------|
    | Vec        | O(1)           | O(n-i)*         | O(n-i)         | O(m)*  | O(n-i)         |
    | VecDeque   | O(1)           | O(min(i, n-i))* | O(min(i, n-i)) | O(m)*  | O(min(i, n-i)) |
    | LinkedList | O(min(i, n-i)) | O(min(i, n-i))  | O(min(i, n-i)) | O(1)   | O(min(i, n-i)) |

ๆๅทๆ ๆณจ็ๆนๆณ๏ผๅฆๆๆฏ่พ่ตทๆฅ๏ผ้ๅธธ `Vec` ๆฏๆๅฟซ็๏ผๅถๅฎๆฏ `VecDeque`๏ผๆๅๆฏ `LinkedList`ใ

Maps ๅ Sets ็ๆไฝๅผ้ไธ่ด

    |          |    get    |   insert  |   remove  | predecessor | append |
    |----------|-----------|-----------|-----------|-------------|--------|
    | HashMap  | O(1)~     | O(1)~*    | O(1)~     | N/A         | N/A    |
    | BTreeMap | O(log(n)) | O(log(n)) | O(log(n)) | O(log(n))   | O(n+m) |


ๆๆๆกฃๆไพ็ๅปบ่ฎฎ้ๅ็ฑปๅ็้ๆฉ๏ผ

- Use a `Vec` when:
    - ๆณ่ฆๆถ้ไธ็ณปๅๆก็ฎๅฆๅคๅ่ฟ่กๅค็ใ
    - ๆณ่ฆไธไธช็นๅฎ้กบๅบ็ๅ็ด ๅบๅ๏ผๅนถไธๅช้ๅ ๅฐๆ้ ่ฟๆซ็ซฏใ
    - ๆณ่ฆไธไธช Stack ๆฐๆฎ็ปๆใ
    - ๆณ่ฆไธไธชๅฏไปฅ่ฐๆดๅคงๅฐ็ๆฐ็ปใ
    - ๆณ่ฆไธไธชไฝฟ็จ Heap ๅๅญ็ๆฐ็ปใ
- Use a `VecDeque` when:
    - ๆณ่ฆๆณ่ฆไธไธชๆฏๆๅจๅบๅไธค็ซฏๆๆๆๅฅๆฐๆฎ็ Vecใ
    - ๆณ่ฆๆณ่ฆไธไธช้ๅใ
    - ๆณ่ฆๆณ่ฆไธไธชๅ็ซฏ้ๅ queue or dequeใ
- Use a `LinkedList` when:
    - ๆณ่ฆไธไธชๅคงๅฐๆช็ฅ็ Vec or VecDeque๏ผไฝๆฏไธๅฎนๅฟๆๆดพ๏ผtolerate amortization๏ผใ
    - ๆณ่ฆ้ซๆ splitใappend ็ๅ่กจใ
    - ็็็กฎๅฎ้่ฆไธไธชๅๅ้พ่กจ๏ผ่ฟ็ปญ็็กฎ่ฎค่กจ็คบ่ฟไธชๆฐๆฎ็ปๆๆฏๆถ่ๆฏ่พๅคง็ใ
- Use a `HashMap` when:
    - ๆณ่ฆ้่ฟๅณ่ keys ่ฎฟ้ฎไปปๆ็ไปใ
    - ๆณ่ฆไธไธช็ผๅญใ
    - ๆณ่ฆไธไธชๅฝฑๅฐ๏ผๅฐฑๅชๆฏ่ฟไธช้ๆฑใ
- Use a `BTreeMap` when:
    - ๆณ่ฆไธไธช key ๆฏๆๅบ็ๅฝฑๅฐใ
    - ๆณ่ฆๆ้่ทๅไธไธช่ๅด็ๆก็ฎใ
    - ๅฏนๆๅฐๆๆๅคง็้ฎๅผๅฏนๆๅด่ถฃใ
    - ๆณ่ฆๆฅๆพ็ธไผผๆๆดๅคง็ๅๅฎนๅณ่็ๆๅคงๆๆๅฐ็ keyใ
- Use the `Set` variant of any of these Maps when:
    - ๅช้่ฆ่ฎฐๅพๅชไบ้ฎๆฏ็ๅฐ่ฟ็ใ
    - ่ฆๅค็็ๅผๅนถๆฒกๆๅณ่็ keysใ
    - ๅช้่ฆไธไธช set ้ๅใ
- Use a `BinaryHeap` when:
    - ๆณ่ฆๅญๅจไธๅ ๅ็ด ๏ผ้่ฆๅจไปปไฝ็ปๅฎๆถ้ดๅชๅค็ๆๅคงๆๆ้่ฆ็ๅ็ด ใ
    - ๆณ่ฆไธไธชไผๅ็บง้ๅใ

ๆๆ็ๆ้ๆๆฌๆฏๆๅฝๅฎน้็จๅฐฝๆถๅฏ่ฝ้่ฆ้ๆฐ่ฐๆดๅคงๅฐใๅฆๆๅ็่ฐๆดๅคงๅฐ๏ผ้่ฆO(n)ๆถ้ดใๆไปฌ็้ๅไปๆฅไธไผ่ชๅจ็ผฉๅฐ๏ผๆไปฅ็งป้คๆไฝไธไผๆ้ใๅจ่ถณๅคๅคง็ไธ็ณปๅๆไฝไธญ๏ผๆฏๆฌกๆไฝ็ๅนณๅๆๆฌๅฐ็กฎๅฎๅฐ็ญไบ็ปๅฎๆๆฌใ

ๅฎน้็ฎก็ๆฏ้ๅไธญ้่ฆ็ๅๅฎน๏ผ้ๅๆฐๆฎๅญๅจๆฏๅบไบๆฐ็ป็๏ผๅฆๆ่ๅ็ๆฐ็ปๅคงๅฐๅๆฐๆฎๅคงๅฐไธ่ด๏ผ่ฟๅนถไธๆฏๅพๆๆ็็ญ็ฅใๅ ไธบๆฏๆฌกๆฐๆฎๅๅจ้ฝไผๅฏผ่ดๅฎน้็่ฐๆด๏ผ่ฟๆๅณ็้่ฆ้ๆฐๅ้ๅๅญ๏ผ่ฟๆฏๅคงๅคๆฐ่ฎก็ฎๆบไธๅ้ๅ็ฎก็ๅๅญ็ๆนๅผใๅ้ไธไธชๅจๆฐ็ๆฐ็ปๅ๏ผๅๅฐๆงๆฐ็ปไธญ็ๆฏไธชๅ็ด ๅคๅถๅฐๆฐๆฐ็ปไธญ๏ผ่ฟๅนถไธๆฏๆๆ็ๆไฝใ

ๅ ๆญค๏ผๅคงๅคๆฐ้ๅไฝฟ็จๅๆ็ญ็ฅ๏ผๅๅ้็ธๅฝๅค็็ฉบ้ฒ็ฉบ้ด๏ผๆฏๅฆๅคไบๆฐๆฎไธๅ็็ฉบ้ด๏ผ่ฟๆ ทๅชไผๅถๅฐ่งฆๅๅฎน้่ฐๆดใๅฝๆฐๆฎ็กฎๅฎๅข้ฟ่ฟๅคงๆถ๏ผๆไผ้ๆฐๅ้ไธไธชๅคงๅพๅค็ๆฐ็ปๆฅ็งปๅจๅ็ด ๏ผไปฅไพฟ้่ฆไธๆฎตๆถ้ดๆไผ่ฟ่กๅฆไธไธชๅข้ฟใ่ฝ็ถ่ฟ็ง็ญ็ฅๆปไฝไธๅพๅฅฝ๏ผไฝๅฆๆ้ๅไธๅฟ่ฐๆดๅถๅๅคๆฐ็ปๅคงๅฐ๏ผๆๆไผๆดๅฅฝใๆไปฅ๏ผๅผๅ่ไฝฟ็จ้ๅๆถ้่ฆ็ปไธไบๆ็คบไฟกๆฏใ

้ๅๅฏน่ฑกๆไพไบๅค็งๆ้ ๅฝๆฐ๏ผ`with_capacity(capacity: usize)` ๆๅฎ้่ฆ็ๅฎน้ๅฐฑๅฏไปฅ้ฟๅไธๅฟ่ฆ็้ๅคๅๅญๆไฝ๏ผๅฆๆ็ฅ้ๆฐๆฎๅคงๅฐๅฐฑๅฐฝๅฏ่ฝไฝฟ็จ่ฟ็ฑปๆนๆณใ

ๅฆๆๅฏไปฅ้ขๆๅฐไผๆๅคง้ๅ็ด ๏ผ`reserve(&mut self, additional: usize)` ๆนๆณๅฏไปฅๆ็คบ้ๅๅๅคไธบๅณๅฐๅฐๆฅ็ๆฐๆฎ็ๅบๅคๅฐ็ฉบ้ดใ

ๅฆๆ็กฎๅฎไธๅๆๅถๅฎๆฐๆฎ๏ผๅๅฏไปฅไฝฟ็จ `shrink_to_fit()` ๆนๆณๅฐๅคไฝ็ๅๅค็ฉบ้ดๆธ็ๆใๅฆไฝ่ฐ่ฏ้่ฆๆ็กฎ็ฅ้ไฝฟ็จๅคๅคงๅฎน้๏ผๅฏไปฅ้่ฟ `capacity()` ๆนๆณ่ทๅใ

้ๅ็ๅ็ด ๅฏไปฅ้่ฟๆไธพๆนๅผๆๆ็่ฎฟ้ฎ๏ผ้่ฟ `iter()` ๆนๆณ่ทๅ่ฟญไปฃๅจ๏ผ

```rust,ignore
let vec = vec![1, 2, 3, 4];
for x in vec.iter() {
   println!("vec contained {}", x);
}

let mut vec = vec![1, 2, 3, 4];
for x in vec.iter_mut() {
   *x += 1;
}
```

ไฝฟ็จ `into_iter()` ๆนๆณๅฏไปฅๅฐ้ๅ่ฝฌๆขไธบๆๅผ้ๅ็่ฟญไปฃๅจ๏ผๆณจๆๅ `iter()` ่ทๅ่ฟญไปฃๅจ็ๅทฎๅซ๏ผไธไธชๆๅผ่ฟญไปฃ๏ผไธไธชๆๅผ็จ่ฟญไปฃใๅฝไธๅ้่ฆ้ๅๆฌ่บซ๏ผ่ๅถไปๅฐๆน้่ฆๅผๆถ๏ผ่ฟๆฏ้ๅธธๅฅฝ็ใ่ฟๆ `extend()` ๆนๆณๆฏไธป่ฆ็็จๆฅๅฐไธไธช้ๅ็ๆฐๆฎ็งปๅฐๅฆไธไธช้ๅไธญ๏ผๅฎไผ่ชๅจ่ฐ็จ `into_iter()` ๆนๆณใ

```rust,ignore
use std::collections::VecDeque;

let mut vec1 = vec![1, 2, 3, 4];
let vec2 = vec![10, 20, 30, 40];

// move values from vec2 to vec1, and vec1 to buf
vec1.extend(vec2);
let buf: VecDeque<_> = vec1.into_iter().collect();
```

ๅ้ๅ้ๅไฝฟ็จ็่ฟญไปฃๅจๅฏน่ฑกๆนๆณ่ฟๆ๏ผ

- `map()` ๆ ๅฐไธบไธไธชๆฐ็่ฟญไปฃๅจ๏ผๅฆ `iter.map(|x| x*2)`๏ผ
- `fold()` ็ฑปไผผ reduce ๆนๆณ๏ผๅฆ `iter.fold(0, |a, b| a+b)`๏ผ
- `skip(n)` ่ทณ่ฟๆๅฎๆฐ้็ๅ็ด ๏ผ
- `take(n)` ๆฟๆๆๅฎๆฐ้็ๅ็ด ๏ผ
- `rev()` ๅ่ฝฌ่ฟญไปฃๅจ้กบๅบ๏ผ


ๅฆๅค๏ผๅฏนไบๆ ๅฐ็ฑปๅ๏ผ่ฟๆ็ธๅบ็ entry ๆไฝ็็ธๅณๅฝๆฐ๏ผไปฅๆไพไธ็งๆๆ็ๆบๅถ๏ผ็จไบๆๆกไปถๅฐๆ็บต key ๆ ๅฐ็ๅๅฎน๏ผ่ฟๆน้ข็ไธป่ฆๅจๆบๆฏๆไพๆๆ็็ดฏๅ ๅจๆ ๅฐใ

ๆฏๅฆ๏ผ่ฆๅฏน key ๅบ็ฐ็่ฟ็ๆฌกๆฐ่ฎกๆฐ๏ผไผ้่ฆๆ นๆฎ key ๆฏๅฆๆฏ้ฆๆฌกๅบ็ฐ่ฟ่กๆกไปถๅคๆญ๏ผๆง่ก find ๅๅๆง่ก insert ๆไฝ๏ผๅนถไธๅจๆฏๆฌกๆไฝไธญๆๆ็ๅฐ้ๅคๆง่ก่ฟไธ่ฟ็จใ

```rust,ignore
use std::collections::btree_map::BTreeMap;

let mut count = BTreeMap::new();
let message = "she sells sea shells by the sea shore";

for c in message.chars() {
    *count.entry(c).or_default() += 1;
}

assert_eq!(count.get(&'s'), Some(&8));

println!("Number of occurrences of each character");
for (char, count) in &count {
    println!("{}: {}", char, count);
}
```

ๅฝๆง่ก `map.entry(&key)` ๆนๆณ๏ผๆ ๅฐไผๆ็ดข key ๅนถๅพๅฐไธไธช `Entry` ๆไธพๅ้ใ

ๅฆๆๆฏไธไธช็ฉบๆก็ฎ `Vacant(entry)`๏ผๅ่กจ็คบ key ไธๅญๅจใๅจ่ฟ็งๆๅตไธ๏ผๅฏไธๆๆ็ๆไฝๆฏๅจๆก็ฎไธญๆๅฅไธไธชๅผใๅฎๆๆๅฅๆก็ฎๅ๏ผๅฐ็ฉบๆก็ฎ่ฝฌๆขไธบไธบๆๅฅ็ๅผ็ๅฏๅๅผ็จ mutable referenceใ่ฟๅ่ฎธๅจๆ็ดขๆฌ่บซ็็ๅญๆไนๅคๅฏนๅผ่ฟ่ก่ฟไธๆญฅ็ๆไฝ๏ผ้่ฆๅฏนๅผๆง่กๅคๆ็้ป่พ่ไธ็ฎก่ฏฅๅผๆฏๅฆๅๅๆๅฅ๏ผ่ฟๅฐ้ๅธธๆ็จใ

ๅฆๆๆฏไธไธชๅทฒๅ ็จๆก็ฎ `Occupied(entry)` ๅ่กจ็คบๆพๅฐ key๏ผๅจ่ฟ็งๆๅตไธ๏ผๅฏไปฅ่ทๅใๆๅฅๆๅ ้คๅฏนๅบ็ๅผใๆญคๅค๏ผ่ฟๅฏไปฅๅฐๅ ็จ็ๆก็ฎ่ฝฌๆขไธบๅฏนๅถๅผ็ๅฏๅๅผ็จ๏ผไป่ๆไพๅฏน็งฐ็ๆๅฅๆไฝใ



### ๐ข๐ต Vec ๅ้ๅ่กจ
- https://doc.rust-lang.org/stable/std/vec/struct.Vec.html
- The Rustonomicon - Implementing Vec https://doc.rust-lang.org/nomicon/vec.html
- Rust ้ซ็บงไธ้ๅฎๅจ็จๅบ่ฎพ่ฎก - ๅฎ็ฐ Vec https://learnku.com/docs/nomicon/2018/90-implementing-vec/4743

ๅญ็ฌฆไธฒ็ฑปๅ String ๅฐฑๆฏๆๅธธ่ง็ๅ้ๅ่กจ๏ผไฝฟ็จ `vec!` ๅฎๆฏๆ็ฎๅ็ๅ้ๅ่กจๅๅปบๆนๅผ๏ผๆ่ไฝฟ็จ `Vec::new()` 
ๆนๆณๆ้ ๏ผๅฏไปฅๅๅปบไธไธชๅๆฐ็ปไธๆ ทๅ้ๅ่กจใ

ๅฏไปฅไฝฟ็จ Vec ๅญๅจไธๅ็ฑปๅ็ๅผ๏ผ

```rust,ignore
#[derive(Debug)]
enum SpreadsheetCell {
    Int(i32),
    Float(f64),
    Text(String),
}

let row = vec![
    SpreadsheetCell::Int(3),
    SpreadsheetCell::Text(String::from("blue")),
    SpreadsheetCell::Float(10.12),
];
println!("{:?}", row);
```

ๅธธ็จ Vec ๆไฝๅ่๏ผ

```rust,ignore
// Iterators can be collected into vectors
let vec_list: Vec<i32> = (1..4).collect();
let vec_list = vec![1, 2, 3];

// Define a mutable vectors so it can grow
let mut vec_list: Vec<i32> = Vec::new();
vec_list.push(1);
vec_list.push(2);
vec_list.push(3);

// borrow `vec_list` as mutable
let third = vec_list.pop().take();

assert_eq!(vec_list, vec![1,2]);
assert_eq!(third, Some(3));

let first = &vec_list[0];
let second = &vec_list[1];
assert_eq!(first, &(1));

println!("First element: {:?}", first);
println!("Second element: {:?}", second);
println!("Third element popped: {:?}", third);
println!("vector list: {:?}", vec_list);
println!("vector list len: {:?}", vec_list.len());
println!("vector list cap: {:?}", vec_list.capacity());

// Out of bounds indexing yields a panic
// println!("Fourth element: {}", vec_list[3]);
// FIXME ^ Comment out this line

// `Vector`s can be easily iterated over
println!("Contents of vec_list:");
for x in vec_list.iter() {
    println!("> {}", x);
}

// A `Vector` can also be iterated over while the iteration
// count is enumerated in a separate variable (`i`)
for (i, x) in vec_list.iter().enumerate() {
    println!("In position {} we have value {}", i, x);
}

// Thanks to `iter_mut`, mutable `Vector`s can also be iterated
// over in a way that allows modifying each value
for x in vec_list.iter_mut() {
    *x *= 3;
}
println!("Updated vector: {:?}", vec_list);
```

ๆ นๆฎ่พๅฅๅๅปบๆๅฎๅฎน้ๅ้ๅ่กจ๏ผ

```rust,ignore
use std::env;
use std::str::FromStr;

let args: Vec<String> = env::args().collect();

if args.len()==1 {
    println!("usage: {} num", args[0]);
    return;
}
let number = match usize::from_str(&args[1]){
    Ok(val) => {
        let vec:Vec<usize> = Vec::with_capacity(val);
        dbg!(vec.len(), vec.capacity());
        val
    }
    Err(info) => {
        dbg!(info);
        0
    }
};
```

Vec::new() ๆนๆณๆ้ ๅบๆฅ็ๆฏไธไธชๅ้ๅๅญ็ฉบ้ด็ๅจๆๆฐ็ป๏ผcapacity=0ใๅฏไปฅไฝฟ็จ with_capacity()
ๆๅฎไธไธชๅๅง็ฉบ้ดๅคงๅฐๆฅๆ้ ๆฐ็ Vecใๅจๅๅฎนๅจๅ้จๆๅฅๆฐๆฎ็ๆถๅ๏ผๅฆๆๅฝๅๅฎน้ไธๅค็จ๏ผๅฎไผ่ชๅจ็ณ่ฏท็ฉบ้ดใ
ๅฝๅ้็ๅฝๅจๆ็ปๆ็ๆถๅ๏ผๅฎไผ่ชๅจ้ๆพๅฎ็ฎก็็ๅๅญ็ฉบ้ดใ

ๅจๆๆฐ็ป็ฑปๅ็ๅบๆฌๆๆณๆฏ๏ผๅจๅ ไธๅผ่พไธๅ็ฉบ้ดๆฅไฟๅญๆฐๆฎ๏ผๅฎไธๅๅ็ฝฎๆฐ็ปไธๆ ท็ดๆฅๆๆฐๆฎไฟๅญๅฐๆ ไธใๆๅฅ
ๆฐๆฎ็ๆถ๏ผๅฆๆๅฝๅ็ฉบ้ดไธๅค็จ๏ผๅฎไผ้ๆฐๅ้ๆดๅคง็ๅๅญ็ฉบ้ด๏ผๆๅๆ็ๆฐๆฎๅคๅถ่ฟๅป๏ผ็ถๅ็ปง็ปญๆง่กๆๅฅๆไฝใ

ๅ้จไฝฟ็จ RawVec::NEW ไฝไธบ้ป่ฎค็็ผๅฒๅบๅ้ๆนๆณ๏ผ

    pub struct Vec<T, A: Allocator = Global> {
        buf: RawVec<T, A>,
        len: usize,
    }

    pub const fn new() -> Self {
        Vec { buf: RawVec::NEW, len: 0 }
    }

ๅจๆทปๅ ๆฐๆฐๆฎๆถ๏ผๅฆๆ็ฉบ้ดไธ่ถณ๏ผๅไผ่ฐ็จๅๅญๅ้ๅจๆฅๅฃๆนๆณ grow_amortized() ๆไธๅๅคงๅฐ่ฟ่กๆฉๅฎน๏ผ

```rust,ignore

    pub fn push(&mut self, value: T) {
        // This will panic or abort if we would allocate > isize::MAX bytes
        // or if the length increment would overflow for zero-sized types.
        if self.len == self.buf.capacity() {
            self.buf.reserve_for_push(self.len);
        }
        unsafe {
            let end = self.as_mut_ptr().add(self.len);
            ptr::write(end, value);
            self.len += 1;
        }
    }

    pub fn reserve_for_push(&mut self, len: usize) {
        handle_reserve(self.grow_amortized(len, 1));
    }

    fn grow_amortized(&mut self, len: usize, additional: usize) -> Result<(), TryReserveError> {
        // This is ensured by the calling contexts.
        debug_assert!(additional > 0);

        if mem::size_of::<T>() == 0 {
            // Since we return a capacity of `usize::MAX` when `elem_size` is
            // 0, getting to here necessarily means the `RawVec` is overfull.
            return Err(CapacityOverflow.into());
        }

        // Nothing we can really do about these checks, sadly.
        let required_cap = len.checked_add(additional).ok_or(CapacityOverflow)?;

        // This guarantees exponential growth. The doubling cannot overflow
        // because `cap <= isize::MAX` and the type of `cap` is `usize`.
        let cap = cmp::max(self.cap * 2, required_cap);
        let cap = cmp::max(Self::MIN_NON_ZERO_CAP, cap);

        let new_layout = Layout::array::<T>(cap);

        // `finish_grow` is non-generic over `T`.
        let ptr = finish_grow(new_layout, self.current_memory(), &mut self.alloc)?;
        self.set_ptr_and_cap(ptr, cap);
        Ok(())
    }
```


### ๐ข๐ต String ๅญ็ฌฆไธฒๅ่กจ
- https://doc.rust-lang.org/std/str/
- https://doc.rust-lang.org/std/string/
- https://doc.rust-lang.org/stable/std/ffi/struct.CString.html
- https://doc.rust-lang.org/stable/std/ffi/struct.OsString.html
- Rust Language Cheat Sheet https://cheats.rs/#strings-chars
- Storing UTF-8 Encoded Text with Strings  https://doc.rust-lang.org/book/ch08-02-strings.html
- regex 1.4.5 https://crates.io/crates/regex


Rust ๆไธค็ฑปๅธธ็จๅญ็ฌฆไธฒ๏ผ`String` ็ฑปๅๅบไบๅ้ๅ่กจ `Vec<u8>`๏ผ่ๅญ็ฌฆไธฒ `&str` ๆฏๅ็็ฑปๅ `&[u8]`ใ
ๅจไปฃ็ ๆไปถไธญ็ๅญ้ข้๏ผๅณๅๅผๅท็ๅญ็ฌฆไธฒๅญ้ข้ๆฏ `&str` ็ฑปๅ๏ผto_string() ๆนๆณๅฏ่ทๅ String ็ฑปๅใ
ๅฆๅค๏ผ`str` ๆฏๅฏไธๅฎไนๅจ Rust ่ฏญ่จ็นๆงไธญ๏ผไฝไนๆฏๆไปฌๅ ไนไธไผ็จๅฐ็ๅญ็ฌฆไธฒ็ฑปๅ๏ผไธบไฝ๏ผ

ๅๅ ๆฏ๏ผ`str` ๅญ็ฌฆไธฒๆฏ Dynamically Sized Types (DST) ๅจๆๅคงๅฐ็ฑปๅ๏ผๆๅณ็็ผ่ฏๅจๆ ๆณๅจ็ผ่ฏๆ
็ฅ้ str ็ฑปๅ็ๅคงๅฐ๏ผๅชๆๅฐไบ่ฟ่กๆๆ่ฝๅจๆ่ท็ฅ๏ผ่ฟๅฏนไบๅผบ็ฑปๅใๅผบๅฎๅจ็ Rust ่ฏญ่จๆฅ่ฏดๆฏไธๅฏๆฅๅ็ใ
ไธ้ข่ฟๆฎตไปฃ็ ๅๅปบไธไธช str ็ฑปๅ็ๅญ็ฌฆไธฒ๏ผ็่ตทๆฅๅพๆญฃๅธธ๏ผไฝๆฏ็ผ่ฏๅฐฑไธไผ้่ฟ็ผ่ฏ๏ผ

    let string: str = "banana";
        ^^^^^^ doesn't have a size known at compile-time

ๆทฑๅฑๅๅ ๅฏไปฅๆป็ปไธบ๏ผๆๆ็ๅ็้ฝๆฏๅจๆ็ฑปๅ๏ผๅฎไปฌ้ฝๆ ๆณ็ดๆฅ่ขซไฝฟ็จ๏ผ่ str ๅฐฑๆฏ [u8] ๅญ็ฌฆไธฒๆฐ็ปๅ็ใ
ๅนถไธ str ็ฑปๅไผไปฅ็กฌ็ผ็ ๅฝขๅผๅ่ฟๅฏๆง่กๆไปถ๏ผๆ ๆณไฟฎๆนใ

ๅๅ ๅพ็ฎๅ๏ผๅ ไธบๆ ๅๅญ็ๅคงๅฐๅฟ้กปๆฏ็กฎๅฎ็
ๆไปฌๆฏๆฌก่ฐ็จๅฝๆฐ็ๆถๅ๏ผ้ฝไผๅๆ ๅๅๅฅ่ฟๅๅฐๅๅๅฝๆฐๅๆฐใ่ฟไบ้ฝๅฟ้กปๅจ่ฐ็จๅฝๆฐไนๅๅฐฑ็กฎๅฎใไนๅฐฑๆฏ็ผ่ฏๆถๅฐฑ็กฎๅฎใ

่ String ๅๆฏไธไธชๅฏๅข้ฟใๅฏๆนๅไธๅทๆๆๆๆ็ UTF-8 ็ผ็ ๅญ็ฌฆไธฒ๏ผๅฝ Rust ็จๆทๆๅฐๅญ็ฌฆไธฒๆถ๏ผ
ๅพๅพๆ็ๅฐฑๆฏ `String` ๅ `&str` ๅญ็ฌฆไธฒๅ็็ฑปๅ๏ผๅฎไปฌ้ฝๆฏ UTF-8 ็ผ็ ๅๅฎนใ

Stirng ๅฐ &str ๅฏไปฅ็ดๆฅ as_str() ๅฐ่ฝฌๆขๅพๅฐ๏ผๆฒกๆไปไน่ฎก็ฎ่ฟ็จใ

String ๅ้ๅจๅ ๅๅญ้้ข๏ผๅฎ่ฝๅคๅ Vec ้ๅไธๆ ทๅจๆๆนๅๅคงๅฐ๏ผๅฝๅๅญไธๅคๅฐฑ้ๆฐๅผ่พไธไธช 2 ๅๅคง็็ฉบ้ด๏ผ
ๅนถ้ๆฐๅฎ็ฝฎๅฝๅ็ๅๅฎนใๅพๆพ็ถ๏ผๆ ่ฎบๆฏๅผ่พๅ ๅๅญ๏ผ่ฟๆฏ่ฟ็งๅจๆๆท่ด้ฝๆๅพๅคง็ๆง่ฝๆ่๏ผไธ็ฌฆๅ้ถๆๆฌๆฝ่ฑกๅๅใ

str ๅฎๅชๆฏไธไธชๅ็๏ผๅฏไปฅๆๅๅ ๅๅญ๏ผๅฏไปฅๆๅๆ ๅๅญ๏ผไนๅฏไปฅๆๅ้ๆๅ้ใ่ฟไธชๅ็ๅญๅจๆ ๅไน่ฎฉไฝฟ็จ้ๅบฆ
่ฟ่ฟ้ซไบ String๏ผๆ ๅๅญ็ๅ้้ๅบฆๆฏๅ ๅๅญ่ฆๆไธไธชๆฐ้็บงใRust ่ฏญ่จๅฏไปฅ็จๅจๅตๅฅๅผ็ณป็ปๅ้จ๏ผไฝๆฏ๏ผๅพๅค
ๅตๅฅๅผ็ณป็ปๆฒกๆๅ ๅๅญใๅฆๆๆ String ๅ็ฝฎๅฐ Rust ่ฏญ่จๅ๏ผ้ฃไนๅฐฑไธ่ฝๅจ่ฟ็งๅบๆฏไฝฟ็จไบใ


ๅฆๅค๏ผๅ ไธบไปฅไธ็็ฑ๏ผRust ๆไพไบ็ฑปไผผ็ OsString ๅ &OsStr ไธค็งๅญ็ฌฆไธฒ๏ผ

- ๅจ Unix ็ณป็ป๏ผๅญ็ฌฆไธฒๅฏไปฅๆฏไปปๆ้ 0 ๅผๅญ่ๅบๅ๏ผ้ๅธธ่งฃๆไธบ UTF-8ใ
- ๅจ Windows ็ณป็ป๏ผๅญ็ฌฆไธฒ่งฃๆไธบ้ 0 ๅผ 16-bit ๅผ๏ผ่งฃๆไธบ UTF-16ใ
- Rust ็ๅญ็ฌฆๆปๆฏๆๆ็ UTF-8 ๅญ็ฌฆ้๏ผๅๆฌ 0 ๅผใ

Rust ไฝฟ็จ OsString & OsStr ๅฏนๆฅๅนณๅฐๅ็ๅญ็ฌฆไธฒๅผ๏ผๅฎไปฌๅฏไปฅ้ซๆๅฐไบ็ธ่ฝฌๆข๏ผๅ ไนๆฒกๆไปปไฝๆถ่ใ

ๅฆๅค๏ผไธบไบๆไพ C/C++ FFI ่ฏญ่จๆฅๅฃ๏ผๅๆไพไบ &CStr ๅ CString ไธค็ฑปๅญ็ฌฆไธฒ๏ผๅฎไปฌไปฅ NUL ๅญ็ฌฆไฝไธบ
็ปๆๆ ่ฎฐ๏ผๅฎไปฌไนๆฏไธๅซ 0 ๅผ็ๅญ็ฌฆไธฒใๅจ Unix ็ณป็ป่ฐ็จไธญ๏ผๅบ่ฏฅไฝฟ็จ CStrใ

C++ ็จๅบๆผๆฅๅญ็ฌฆไธฒ๏ผ

```rust,ignore
string s1 = "Hello,";
const string s2 = "world";
s1 += s2;
```

Rust ็จๅบๆผๆฅๅญ็ฌฆไธฒ๏ผ

```rust,ignore
let mut s1 = "Hello,".to_string();
let s2 = "world".to_string();
s1 += &s2;
```

Rust ๅญ็ฌฆไธฒ็ๆผๆฅ๏ผๆ นๆฌๅฐฑๆฏๆๅ ๆณๆไฝ็ฌฆๅณไพง็ๅญ็ฌฆไธฒ๏ผๆท่ดไธไปฝ๏ผๅนถ้ๅฐๅทฆไพงๅญ็ฌฆไธฒไนๅ๏ผๅๆถๅณไพง็
ๅญ็ฌฆไธฒ็ๆๆๆไธๅๅฝฑๅใRust ่ฏญ่จ็่ฎพ่ฎก้่ฆๅฐใๅ็จใๆพๅผๅๅบ๏ผๆไปฅๅฐฑๆฏ C++ ๅคไบไธไธชๅ็จๆไฝ็ฌฆใ

ไธคไธช `&str` ไนไธ่ฝ็ดๆฅ็ธๅ ๏ผไฝๅฏไปฅๅฐ `&str` ๅ ๅฐ String ไธ๏ผๅนถไธ๏ผไธคไธช String ็ธๅ ๏ผ่ฆๅฐ + ๅณไพง็่ฝฌๆขไธบๅ็จๅฝขๅผ๏ผ

    let s = "Hello," + "world"; // Can't use + with two &str
    let s = s1 + &s2; // Move s1 to s, and concats s2 to s

ๅฏนไบ + ๅณไพง็ String ๅฎๅฟ้่ฝฌๆขๆ `&str` ๆ่ฝ่ขซ่ฟๆฅๅฐๅฆไธไธชๅญ็ฌฆไธฒไธ๏ผๅ ไธบๅญ็ฌฆไธฒๅฏน่ฑกๆฒกๆ Copy ็นๆงใ

ๆดๅฅฝ็ๆนๅผๆฏไฝฟ็จ format! ๅฎ๏ผ

```rust,ignore
let s1 = String::from("Hello");
let s2 = String::from("world.");

let s = format!("{}, {}", s1, s2);
```

ๅญ็ฌฆไธฒไฝฟ็จ๏ผ

```rust,ignore
// (all the type annotations are superfluous)
// A reference to a string allocated in read only memory
let pangram: &'static str = "the quick brown fox jumps over the lazy dog";
println!("Pangram: {}", pangram);

// Iterate over words in reverse, no new string is allocated
println!("Words in reverse");
for word in pangram.split_whitespace().rev() {
    println!("> {}", word);
}

// Copy chars into a vector, sort and remove duplicates
let mut chars: Vec<char> = pangram.chars().collect();
chars.sort();
chars.dedup();

// Create an empty and growable `String`
let mut string = String::new();
for c in chars {
    // Insert a char at the end of string
    string.push(c);
    // Insert a string at the end of string
    string.push_str(", ");
}

// The trimmed string is a slice to the original string, hence no new
// allocation is performed
let chars_to_trim: &[char] = &[' ', ','];
let trimmed_str: &str = string.trim_matches(chars_to_trim);
println!("Used characters: {}", trimmed_str);

// Heap allocate a string
let alice = String::from("I like dogs");
// Allocate new memory and store the modified string there
let bob: String = alice.replace("dog", "cat");

println!("Alice says: {}", alice);
println!("Bob says: {}", bob);
```

ๅจ็จๅบไธญไฝฟ็จ็ๅญ็ฌฆไธฒๅญ้ข้ๆฏ `&'static str` ็ฑปๅ๏ผ้ๆๅ้ไธๅฏไฟฎๆนใ

    let hello_world = "Hello, World!";
    let hello_world: &'static str = "Hello, world!";

ๅญ้ข้ๅญ็ฌฆไธฒ่ฝฌไนๅ่๏ผ

```rust,ignore
// You can use escapes to write bytes by their hexadecimal values...
let byte_escape = "I'm writing \x52\x75\x73\x74!";
println!("What are you doing\x3F (\\x3F means ?) {}", byte_escape);

// ...or Unicode code points.
let unicode_codepoint = "\u{211D}";
let character_name = "\"DOUBLE-STRUCK CAPITAL R\"";

println!("Unicode character {} (U+211D) is called {}",
            unicode_codepoint, character_name );


let long_string = "String literals
                    can span multiple lines.
                    The linebreak and indentation here ->\
                    <- can be escaped too!";
println!("{}", long_string);
```

ไธ C/C++ ็ๅถๅฎไธๅ็น๏ผ

- Rust ไฝฟ็จ UTF-8 ไฝไธบๅบๅฑ็็ผ็ ๏ผ่ไธๆฏๅธธ่ง็ ASCIIใไนๅฐฑๆฏ่ฏด๏ผRust ไธญ็ๅญ็ฌฆๆฐๆฎ็ฑปๅๅฏไปฅๅๅซ Unicode ๅๅถๅฎ็นๆฎๅญ็ฌฆใ
- Rust ไธญ็ๆฐๅญ็ฑปๅ็ๆฏ Rust ่ฏญ่จไธๅ่ฎธ็ฑปๅ่ชๅจ่ฝฌๆขใ

ๅจไฝฟ็จๅญ็ฌฆไธฒๅ็ๆถ๏ผๆณจๆ่ทๅๅฐ้ๅญ็ฌฆ่พน็ๅฐๆๅบๅผๅธธ๏ผไพๅฆๅฝๅญ็ UTF8 ็ผ็ ๆฏ 3 ไธชๅญ่๏ผไปฅไธๅ็ๅฐฑๆฒกๆ่ทๅๅฐๅญ็ฌฆ่พน็๏ผ

    println!("{}", &("ๅฝ่ฏญ")[0..2]);
    // thread 'main' panicked at 'byte index 2 is not a char boundary; it is inside 'ๅฝ' (bytes 0..3) of `ๅฝ่ฏญ`'

Strings & Chars ๅญ้ข้่กจ่พพๅ่๏ผ

- `"..."`   String literal, UTF-8, will interpret `\n` as line break 0xA, โฆ
- `r"..."`  Raw string literal. UTF-8, won't interpret `\n`, โฆ
- `r#"..."#`    Raw string literal, UTF-8, but can also contain `"`. Number of `#` can vary.
- `b"..."`  Byte string literal; constructs ASCII [u8], not a string.
- `br"..."`, `br#"..."#`    Raw byte string literal, ASCII [u8], combination of the above.
- `'๐ฆ'` Character literal, fixed 4 byte unicode 'char'.
- `b'x'`    ASCII byte literal.

ASCII escapes

- `\x41`    7-bit character code (exactly 2 digits, up to 0x7F)
- `\n`  Newline
- `\r`  Carriage return
- `\t`  Tab
- `\\`  Backslash
- `\0`  Null


ๅญ็ฌฆไธฒๅๅฒ๏ผ

    Concatenate strings (any Displayโ that is). 1   format!("{}{}", x, y)
    Split by separator pattern. STD ๐   s.split(pattern)
         ... with &str  s.split("abc")
         ... with char  s.split('/')
         ... with closure   s.split(char::is_numeric)
    Split by whitespace.    s.split_whitespace()
    Split by newlines.  s.lines()
    Split by regular expression.2   Regex::new(r"\s")?.split("one two three")

ไฝฟ็จๆญฃๅ่กจ่พพๅผ๏ผ

```rust,ignore
use regex::Regex;

fn main() {
    let re = Regex::new(r"(?x)
(?P<year>\d{4})  # the year
-
(?P<month>\d{2}) # the month
-
(?P<day>\d{2})   # the day
").unwrap();
    let caps = re.captures("2010-03-14").unwrap();

    assert_eq!("2010", &caps["year"]);
    assert_eq!("03", &caps["month"]);
    assert_eq!("14", &caps["day"]);
}
```

```rust,ignore
use regex::Regex;

const TO_SEARCH: &'static str = "
On 2010-03-14, foo happened. On 2014-10-14, bar happened.
";

fn main() {
    let re = Regex::new(r"(\d{4})-(\d{2})-(\d{2})").unwrap();

    for caps in re.captures_iter(TO_SEARCH) {
        // Note that all of the unwraps are actually OK for this regex
        // because the only way for the regex to match is if all of the
        // capture groups match. This is not true in general though!
        println!("year: {}, month: {}, day: {}",
                 caps.get(1).unwrap().as_str(),
                 caps.get(2).unwrap().as_str(),
                 caps.get(3).unwrap().as_str());
    }
}
```

### ๐ข๐ต VecDeque
### ๐ข๐ต LinkedList
- https://github.com/Warrenren/inside-rust-std-library/blob/main/11-ๆบ่ฝๆ้็ฑปๅ(ๅ).md

### ๐ข๐ต HashMap
### ๐ข๐ต BTreeMap
### ๐ข๐ต HashSet BTreeSet
- https://doc.rust-lang.org/stable/std/collections/struct.BTreeSet.html

้ๅ Sets ็ๆนๆณๅ Map ็ฑปไผผ๏ผๅ ไธบๆฏๅบไบ HashMap BTreeMap ๅฎ็ฐ็ใ



### ๐ข๐ต BinaryHeap
- https://doc.rust-lang.org/stable/std/collections/struct.BinaryHeap.html
- https://doc.rust-lang.org/stable/std/cmp/struct.Reverse.html

ๅ ๆ ไบฆ็งฐไธบไผๅ้ๅ priority queue๏ผ้ๅธธๆฏไธไธชๅฏไปฅ่ขซ็ๅไธๆฃตๆ ็ๆฐ็ปๅฏน่ฑก๏ผๅฆ Rust ็ BinaryHeap ๅฎ็ฐใๅจ้ๅไธญ๏ผ่ฐๅบฆ็จๅบๅๅคๆๅ้ๅไธญ็ฌฌไธไธชไฝไธๅนถ่ฟ่ก๏ผๅ ่ๅฎ้ๆๅตไธญๆไบๆถ้ด่พ็ญ็ไปปๅกๅฐ็ญๅพๅพ้ฟๆถ้ดๆ่ฝ็ปๆ๏ผๆ่ๆไบไธ็ญๅฐ๏ผไฝๅทๆ้่ฆๆง็ไฝไธ๏ผๅๆ ทๅบๅฝๅทๆไผๅๆ๏ผๅ ๅณไธบ่งฃๅณๆญค็ฑป้ฎ้ข่ฎพ่ฎก็ไธ็งๆฐๆฎ็ปๆใ

ๅบไบ `Heap Tree` ๅ ็งฏๆ ๏ผๅจๅ ๆๅบไธญๆๅบ็จ๏ผๆฏไธ็งๅฎๅจไบๅๆ ๏ผmin-heap ๅฐๆ นๅ ่ฆๆฑ่็นๅฐไบๆ็ญไบๅญ่็นๅผ๏ผmax-heap ๅคงๆ นๅ ่ฆๆฑ่็นๅคงไบๆ็ญไบๅญ่็นๅผใ

          max-heap          min-heap
             9                 3      
         โโโโโดโโโโ         โโโโโดโโโโ  
         8       7         4       5  
       โโโดโโ   โโโดโโ     โโโดโโ   โโโดโโ
       6   5   4   3     6   7   8   9
     โโโดโโ             โโโด
     6   5             7

ๅฐๆฎ้ไบๅๆ ่ฝฌๆขๆๅ ๆ ็่ฟ็จๅฐฑๆฏๅ ๅ heapifyใ

BinaryHeap ไฝฟ็จ่ฆ็น๏ผ

- push ๆ ๅบๅฅๆ ๏ผ
- pop ๆๅบๅบๆ ๏ผๅฏนไบ Max-heap ๆปๆฏๅๅคงๅๅฐ็ๅผๅบๆ ๏ผ
- ๅฏนไบ Min-heap๏ผๅฏไปฅๅผๅฅ `Reverse` ่ฟ่ก้ๅๆๅบ๏ผpop ๅๅฐๅๅคง๏ผๅ่ฃๅ็ธๅบๅผไธบ `Some(Reverse(x))`๏ผ

ๅฆๆ้่ฆๅ่ฃ่ชๅฎไนๅฏน่ฑก๏ผ้่ฆๅฎ็ฐ `Ord` `Eq` `PartialOrd` `PartialEq`ใ

ไฝฟ็จ็คบ่๏ผ้ป่ฎคๆฏ Max-heap๏ผ

```rust,ignore
use std::collections::BinaryHeap;

// Type inference lets us omit an explicit type signature (which
// would be `BinaryHeap<i32>` in this example).
let mut heap = BinaryHeap::<i8>::new();

// We can use peek to look at the next item in the heap. In this case,
// there's no items in there yet so we get None.
assert_eq!(heap.peek(), None);

// Let's add some scores...
heap.push(1);
heap.push(5);
heap.push(127);

// Now peek shows the most important item in the heap.
assert_eq!(heap.peek(), Some(&127));

// We can check the length of a heap.
assert_eq!(heap.len(), 5);

// Iterate over the items in the heap in a random order.
for x in &heap {
    println!("{}", x);
}

// If we instead pop these scores, they should come back in order.
assert_eq!(heap.pop(), Some(127));
assert_eq!(heap.pop(), Some(5));
assert_eq!(heap.pop(), Some(1));
assert_eq!(heap.pop(), None);

// We can clear the heap of any remaining items.
heap.clear();

// The heap should now be empty.
assert!(heap.is_empty());
```

```rust,ignore
use std::collections::BinaryHeap;
use std::cmp::Reverse;
use std::cmp::Ord;
use std::cmp::PartialOrd;
use std::cmp::PartialEq;
use std::cmp::Ordering;

#[derive(Debug, Eq)]
struct Task {
    name: &'static str
}

// #[derive(Eq)]
// impl Eq for Foo {}

impl Ord for Task {
    fn cmp(&self, other: &Self) -> Ordering {
        self.name.cmp(&other.name)
    }
}
impl PartialOrd for Task {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        Some(self.name.cmp(other.name))
    }
}

impl PartialEq for Task {
    fn eq(&self, other:&Self) -> bool {
        self.name == other.name
    }
}

let mut heap = BinaryHeap::new();

heap.push(Reverse(Task{name:"t1"}));
heap.push(Reverse(Task{name:"t5"}));
heap.push(Reverse(Task{name:"t2"}));

println!("{:?} - {:?}", heap.pop(), Some(Reverse(Task{name:"t1"})));
println!("{:?} - {:?}", heap.pop(), Some(Reverse(Task{name:"t2"})));
println!("{:?} - {:?}", heap.pop(), Some(Reverse(Task{name:"t5"})));
println!("{:?} - {:?}", heap.pop(), "None");
```




## โก Smart Pointers
- Dynamically Sized Types and the Sized Trait https://doc.rust-lang.org/book/ch19-04-advanced-types.html
- Smart Pointers https://doc.rust-lang.org/book/ch15-00-smart-pointers.html
- Rc - Reference Counted https://doc.rust-lang.org/stable/std/rc/index.html
- Box - heap allocation https://doc.rust-lang.org/stable/std/boxed/index.html
- https://doc.rust-lang.org/stable/std/boxed/struct.Box.html
- https://doc.rust-lang.org/stable/std/borrow/enum.Cow.html
- https://doc.rust-lang.org/stable/std/sync/struct.Arc.html
- https://doc.rust-lang.org/stable/std/sync/struct.Mutex.html
- https://doc.rust-lang.org/stable/std/sync/struct.RwLock.html
- https://doc.rust-lang.org/stable/std/ptr/index.html

ไธๅ Java ่ฟ็ฑป้ซ็บง่ฏญ่จ๏ผๅฎไปฌๅธฆๆ่ฟ่กๆถ็ๅๅพๅๆถๅจๆบๅถ๏ผไผๅจ็จๅบ่ฟ่ก่ฟ็จไธญๆ นๆฎๅๅญไฝฟ็จ็ถๆ่ชๅจ้ๆพ
ไธๅไฝฟ็จ็ๅๅญ็ฉบ้ด๏ผ่ C/C++/Rust ๅๆฒกๆๅๅพๅๆถๅจ๏ผไฝๆฏ Rust ้่ฟๆๆๆๅฎ็ฐไบ้ๆ็ๅๅพๅๆถใ

้ๅธธ่ฏด็่ฐ็จๅ ๆ ๆ็ๅฐฑๆฏ Stack๏ผๅฎๆฏๅจ็กฌไปถๅฑๅฎ็ฐ็ไธไธช LIFO - Last in, first out ๆฐๆฎ็ปๆ๏ผ
้่ฟ CPU ็ `pop` `push` ๆไปคๆไฝใ่ฟไบๆไปคๆงๅถ็ CPU ๅ้จ็ไธไธชๅ ๆ ๆ้ๅฏๅญๅจ SP - Stack Pointer๏ผ
ๅจ็จๅบ่ฟ่กๆถ๏ผๅง็ปๆๅ Stack ้กถ้จ๏ผไผ้็ๅฝๆฐ่ฐ็จใ่ฟๅ่ฝฌ็งปใ

ๅฏนๆฏ Stack ๅ Heap ๅๅญ๏ผ 

- Stack ๅๅญ่ฎฟ้ฎๆดๅฟซ๏ผๆๅฏๅญๅจ็ดๆฅๅฏ่พพ๏ผๆ ไธๅๅญๅ้ๆฏ่ฟ็ปญ็๏ผ่ฆๅจ็ผ่ฏๆๆ็กฎไฝฟ็จๅคๅคง็ Stack ๅๅญ๏ผ
- ่ๅ ๅๅญ๏ผๆดๅคๆฏ็ฑๅผๅ่ไธปๅจ็ณ่ฏท่ฐ้๏ผ้่ฟ `malloc()` `free()` ็ญๅฝๆฐๅจๆ้ๆบๅ้ๅๅญ๏ผๅธๅ็ๅฐฑๆฏไฝฟ็จ `new` ๅณ้ฎๅญๆฅไธบๅฎไพ็ณ่ฏทๅๅญใ

Stack ่ฐ็จๆ ๅๅญไป้ซไฝๅฐๅๅไธๅข้ฟ๏ผไธๆ ๅๅญๅ้ๆฏ่ฟ็ปญ็๏ผไธ่ฌๆไฝ็ณป็ปๅฏนๆ ๅๅญๅคงๅฐๆฏๆ้ๅถ็๏ผ
Linux/Unix ็ฑป็ณป็ปไธ้ขๅฏไปฅ้่ฟ ulimit ๅฝไปค่ฎพ็ฝฎๆๅคงๆ ๅๅญ็ฉบ้ดๅคงๅฐใ่ฐ็จ Rust ๅฝๆฐๆถไผๅๅปบไธไธช
ไธดๆถๆ ็ฉบ้ด๏ผ่ฐ็จ็ปๆๅ Rust ไผ่ฎฉ่ฟไธชๆ ็ฉบ้ด้็ๅฏน่ฑก่ชๅจ่ฟๅฅ Drop ๆต็จ๏ผๆๅๆ ้กถๆ้่ชๅจ็งปๅจๅฐไธ
ไธไธช่ฐ็จๆ ้กถ๏ผๆ ้็จๅบๅๆๅจๅนฒ้ข๏ผๅ ่ๆ ๅๅญ็ณ่ฏทๅ้ๆพๆฏ้ๅธธ้ซๆ็ใ

Heap ๅ ๅๅญๅๆฏไปไฝไฝๅฐๅๅไธๅข้ฟ๏ผๅ ๅๅญ้ๅธธๅชๅ็ฉ็ๅๅญ้ๅถใ

Rust ๅจ็ผ่ฏๆถไผ่ท่ธชไปฃ็ ็ๅชไบ้จๅๆญฃๅจไฝฟ็จๅ ๅๅญ๏ผๆๅฐๅๅ ไธ้ๅคๆฐๆฎ็ๆฐ้๏ผๆธ็ๅ ไธๆชไฝฟ็จ็ๆฐๆฎไปฅ
้ฟๅ็ฉบ้ด่ๅฐฝ๏ผ่ฟไบ้ฝๆฏๆๆๆๆ่ฆ่งฃๅณ็้ฎ้ขใไธๆฆ็่งฃไบๆๆๆ๏ผๅฐฑไธ้่ฆ็ปๅธธ่่ๅ ๆ ๅๅ ๏ผไฝๆฏ็ฅ้็ฎก็
ๅ ๆฐๆฎๆฏๆๆๆๅญๅจ็ๅๅ ๆๅฉไบ่งฃ้ๅฎไธบไปไนไปฅ่ฟ็งๆนๅผๅทฅไฝใ

ๅฝ็ถ๏ผRust ๆไพไบๆบ่ฝๆ้็ฎๅๅฏน Heap ๅๅญ็ไฝฟ็จ๏ผๅๅญๅ้้่ฟ core::mem::MaybeUninit ๆไฝใ

ๆบ่ฝๆ้็ไธไบ็จ้๏ผ

- ้่ฟๆบ่ฝๆ้ๅฏไปฅๅฎ็ฐๅคๆๆๆใ
- ๅฎ็ฐๅ้จๅฏๅๆง interior mutabilityใ
- ้่ฟ Box ๅฎ็ฐ้ๅฝ็ฑปๅ Recursive Types๏ผ้ฃไบๅจๆๅไธญๅๅซ่ชๅทฑ็็ฑปๅๆ ๆณๅจ็ผ่ฏๆ็กฎๅฎๅคงๅฐ๏ผ่ๆบ่ฝๆ้ๅฏไปฅ่ฎฉๅฎๅจ่ฟ่กๆถๆ็ซใ

ไปฅไธๆฏ 3 ไธชๅธธ็จๆบ่ฝๆ้๏ผ

- `Box<T>`ๆบ่ฝๆ้ๅ้จๆๅๅ ๅๅญ๏ผๆฐๆฎ็ฑปๅไธบ Tใ
    - ้่ฟ`Box::new(v)`ๅๅปบ๏ผ็งปๅจ่ฏญไน๏ผ็ฌๅ ๆๆๆ - move๏ผๅ่ฎธไฝฟ็จ * ่ฝฌ็งปๆฌไฝๆๆๆใ
    - ๆฏไธ็ง็ฌไบซๆๆๆๆบ่ฝๆ้๏ผ็ฑปไผผ C++ ็ unique_ptrใ
- `Rc<T>` ๅผ็จ่ฎกๆฐๆบ่ฝๆ้ Reference Counting๏ผ่ฎฐๅฝๅ ๅๅญไธ็ๆฐๆฎ่ขซๅผ็จ็ๆฌกๆฐใ
    - ้่ฟ`Rc::new(v)`ๅๅปบ๏ผ็งปๅจ่ฏญไน๏ผๅฑไบซๆๆๆ - clone๏ผ็ฆๆญขไฝฟ็จ * ่ฝฌ็งปๆฌไฝๆๆๆใ
    - ๆฏไธ็งๅฑไบซๆๆๆๆบ่ฝๆ้๏ผ็ฑปไผผ C++ ็ shared_ptrใ
- `Arc<T>` ๆฏ Rc ็็บฟ็จๅฎๅจ็ๆฌ๏ผAtomic reference counter๏ผๅผบ่ฐๅๅญๆงใ

Rust ็ๆๆๆๆบๅถไธ๏ผ้ๅธธไธ่ฝ้่ฟๅผ็จๆๅ้็ดๆฅไฟฎๆนๆฐๆฎ๏ผไฝๆฏๅจๆบ่ฝๆ้็ไฝ็จไธ๏ผๅผๅฅไบไธไธชๆฐๆฆๅฟต๏ผ
ๅ้จๅฏๅๆง interior mutabilityใ`Ref<T>`ใ`RefMut<T>`ๅผ็จ็ๆฐๆฎๅฏไปฅ้่ฟๅทๆๅ้จๅฏๅๆง็ๆ้
็ดๆฅ่ฟ่กไฟฎๆนใๅธธ่ง็ๅทๅคๅ้จๅฏๅๆง็น็น็็ฑปๅๆ CellใRefCellใMutexใUnsafeCellใRwLockใAtomic
็ญ็ญใๅถไธญ Cell ๅ RefCell ๆฏๅช่ฝ็จๅจๅ็บฟ็จ็ฏๅขไธ็ๅทๅคๅ้จๅฏๅๆง็็ฑปๅใ

```rust
use std::cell::Cell;

fn main() {
    let data : Cell<i32> = Cell::new(100);
    let p = &data;
    data.set(10);
    println!("{}", p.get());
    p.set(20);
    println!("{:?}", data);
}
```

้่ฟ`RefCell<T>`ๆบ่ฝๆ้๏ผๅฎ็ฐๅจ่ฟ่กๆถๅผบๅถๅ็จ่งๅ็็ฑปๅ๏ผ่ไธๆฏ้ๅธธ็็ผ่ฏๆถๅ็จ่งๅใๅ้จๅฏๅๆจกๅผไธ๏ผ
็ปไธๅฏๅ็ฑปๅๅฌๅผไบไธไธช API ๆฅๆนๅๅ้จๅผใ่่ฟ็งๅๆณๅธฆๆฅๆนไพฟ็ๅๆถ๏ผไน่ฎฉๅๅญๆณๆผๅๆๅฏ่ฝ๏ผ้่ฆ้ฒๆญขๅฎๅ็ใ

- `Cell<T>` ๆบ่ฝๆ้ๅ่ฎธๅ็จๅฏๅๅผ็จ๏ผๅณไฝฟๆฐๆฎๆฏไธๅฏๅ็๏ผ่ฟไธช่ฟ็จ่ขซ็งฐไธบๅ้จๅฏๅๆงใ
    - ้ๅๅฎ็ฐไบCopy็็ฑปๅ๏ผๆ่ไฝ็งฏๅฐ็struct๏ผๅ ไธบgetๆนๆณๆฏ็ดๆฅๆไฝๅคๅถ็ใ
    - ๆ ่ฟ่กๆถๅผ้๏ผ่ฟ่กๆถๅฎๅจใ
    - `Cell::new(v)` ๅๅปบ๏ผ็งปๅจ่ฏญไน
    - ่ทๅๆฌไฝ v๏ผCell::get()
    - ่ทๅๆฌไฝๅ็จ &v๏ผCell::get_mut()
    - ไฟฎๆนๆฌไฝ v๏ผCell::set(vv)
- `RefCell<T>` ๆบ่ฝๆ้ๅ่ฎธๅ็จๅฏๅๅผ็จ๏ผๅณไฝฟๆฐๆฎๆฏไธๅฏๅ็๏ผ่ฟไธช่ฟ็จ่ขซ็งฐไธบๅ้จๅฏๅๆงใ

    ้ๅๆชๅฎ็ฐไบ Copy ็็ฑปๅ๏ผๆ่ไฝ็งฏๅคง็ struct๏ผCell ไธๅฅฝไฝฟ็้ฝๆฏ็จ่ฟไธชใ
    ่ฟ่กๆถๆๅผ้๏ผไผๆง่กๅ็จๆฃๆฅ๏ผ่ฟ่กๆถไธๅฎๅจใ

    - RefCell::new(v) ๏ผ ๅๅปบ๏ผ็งปๅจ่ฏญไน
    - ไธๅฏๅๅ็จ๏ผRefCell::borrow()ใ็ฑปไผผCell::get
    - ๅฏๅๅ็จ๏ผRefCell::borrow_mut()ใ็ฑปไผผCell::set

้ๅฏนๅค็บฟ็จ๏ผRust ๆไพไบไปฅไธๅๅญๆบ่ฝๆ้ๅ้ๆบๅถ๏ผ

- `Arc<T>` ๅๅญๅผ็จ่ฎกๆฐๆบ่ฝๆ้ Atomic Reference Counting๏ผๆฏๆๅๅญๆไฝ๏ผๅค็บฟ็จๅฎๅจๅฑไบซ๏ผ้่ฟ `Arc::new(v)` ๅๅปบ๏ผ็งปๅจ่ฏญไน๏ผๅฑไบซๆๆๆ - clone๏ผ็ฆๆญขไฝฟ็จ * ่ฝฌ็งปๆฌไฝๆๆๆใๆฏไธ็ง็บฟ็จๅฎๅจ็ๅฑไบซๆๆๆๆบ่ฝๆ้๏ผ็ฑปไผผ C++ ็ shared_ptr + mutexใ
- `Mutex<T>` ไบๆฅ้็จๆฅไฟๆคๅฑไบซๆฐๆฎ๏ผ้่ฟ `lock()` ๅ `try_lock()` ๆนๆณ่ฟๅ็ๆฏไธไธช `MutexGuard<T>` ๆบ่ฝๅฝๆฐ๏ผ็ฑ `LockResult` ๅ่ฃ๏ผ`unwrap()` ่งฃๅ๏ผ้ๅฎๅๅฐฑๅฏไปฅ้่ฟๆบ่ฝๆ้่ฎฟ้ฎไบๆฅ้ๅ้จ็ๆฐๆฎใ
- `RwLock<T>` ่ฏปๅ้๏ผๅๆถๅ่ฎธๅคไธช่ฏป๏ผไฝๅช่ฝๆไธไธชๅ๏ผๅนถไธ่ฏปๅๅไธ่ฝๅๆถๅญๅจใ้่ฟ `read()` `try_read()` `write()` `try_write()`ๆนๆณ่ฟๅ `RwLockReadGuard<T>` ๆ `RwLockWriteGuard<T>` ๆบ่ฝๆ้ใ


ๅฆๅค `Cow<T>` ๆฏไธ็งๅๆถๅคๅถ็ๆไธพไฝ็ๆบ่ฝๆ้๏ผclone-on-write๏ผ็ฎ็ๆฏๅๅฐๅคๅถๆไฝ๏ผๆ้ซๆง่ฝ๏ผๅค็จไบ่ฏปๅคๅๅฐ็ๅบๆฏ๏ผ

1. Cow::Borrowed(v) | Cow::Owned(v) ๏ผ ๅๅปบ๏ผ็งปๅจ่ฏญไน
2. ไธๅฏๅๅ็จ๏ผCow::deref()๏ผOwned ไผ่ฐ็จ borrow()๏ผBorrowed ็ดๆฅ่ฟๅ
3. ๅฏๅๅ็จ๏ผCow::to_mut()๏ผBorrowed ไผ่ฐ็จ clone() ๆฟๆข่ชๅทฑไธบ Owned๏ผ็ถๅ Owned ไผๅน้ ref mut ้ๆพๅ็จใ
4. ่ทๅพๆฌไฝ๏ผCow::into_owned()๏ผBorrowed ไผ่ฐ็จ clone() ๅ่ฟๅ๏ผOwned ไผๆ่ชๅทฑ่ฟๅใ


ๆบ่ฝๆ้ๆไธคไธชๅบๆฌ็่กไธบ๏ผ

- `Deref<T>` ไธบๆบ่ฝๆ้ๆไพ่งฃ้คๅผ็จ่ฟ็ฎ็ฌฆ `*ref`๏ผ่ฟๆ `DerefMut<T><T>` ๆฏๅฏๅ่งฃๅผ็จ๏ผๆๅฎๆๅฏไปฅไฟฎๆนๅผ็จ็ๆฐๆฎใ
- `Drop<T>` ไธบๆบ่ฝๆ้ๆไพ่ชๅจ้ๆพ็ฉบ้ด่กไธบๅฎ็ฐ๏ผๅจๆบ่ฝๆ้่ถๅบไฝ็จๅๆถ่ชๅจๆง่กใ

ๆบ่ฝๆ้ๅบๆฌๆไพไบไธๅฏๅๅ็จๅๅฏๅๅ็จๆนๆณ๏ผๅฎ็ฐไบไปฅไธ้จๅๆฅๅฃ็้ๆๆนๆณ๏ผ

- AsMut<T> - `as_ref()`
- AsRef<T> - `as_mut()`
- Borrow<T> - `borrow()`
- BorrowMut<T> - `borrow_mut()`

Rc ๅ Arc ้ฝๆ Weak ๅฝขๅผ๏ผRc Weak ๅ Arc Weak๏ผ

Rc ๆฏไธไธชๅผ็จ่ฎกๆฐๆ้๏ผไผๅฏนๅผ็จ่ฟ่ก่ฎกๆฐ๏ผๆฏๆง่กไธๆฌก `clone()` ๅผ็จ่ฎกๆฐๅ ไธ๏ผ

- `Rc<T>` ๅ่ฃ็ๆฐๆฎๅฏน่ฑกๆฏ immutable ไธๅฏๅ็๏ผๅณๆ ๆณไฟฎๆน T ๆฐๆฎๅฏน่ฑก๏ผๅช่ฝ่ฏป๏ผ
- `Rc<T>` ๅช่ฝ็จไบๅไธ็บฟ็จๅ้จ๏ผไธ่ฝ็จไบ็บฟ็จไน้ด็ๅฏน่ฑกๅฑไบซ๏ผ่ทจ็บฟ็จไผ ้ๅฏไปฅไฝฟ็จ `Arc<T>`๏ผ
- `Rc<T>` ๅฎ้ไธๆฏไธไธชๆ้๏ผๅฎไธๅฝฑๅๅ่ฃนๅฏน่ฑก็ๆนๆณ่ฐ็จๅฝขๅผ๏ผๅณไธๅญๅจๅ่งฃๅผๅ่ฃนๅ่ฐ็จๅผ่ฟไธ่ฏดใ
- ไธๆฆๆๅไธไธชๆฅๆ่ๆถๅคฑ๏ผๅ่ตๆบไผ่ขซ่ชๅจๅๆถ๏ผ่ฟไธช็ๅฝๅจๆๆฏๅจ็ผ่ฏๆๅฐฑ็กฎๅฎไธๆฅ็๏ผ

Rc weak ็ไธไผๅขๅ ๅผ็จ่ฎกๆฐ๏ผๆไปฅไธๅ ไธช็น็น๏ผ

- ๅฏ่ฎฟ้ฎ๏ผไฝไธๆฅๆใไธๅขๅ ๅผ็จ่ฎกๆฐ๏ผๅ ๆญค๏ผไธไผๅฏน่ตๆบๅๆถ็ฎก็้ ๆๅฝฑๅ๏ผ
- `Weak<T>` ๅฏ้่ฟ่ฐ็จ `Rc::downgrade()` ๆนๆณ่่ฝฌๆขๅพๅฐ๏ผ
- `Weak<T>` ้่ฟ `upgrade()` ๆนๆณ่ฝฌๆขๆ `Option<Rc<T>>`๏ผๅฆๆ่ตๆบๅทฒ็ป่ขซ้ๆพ๏ผๅ Option ๅผไธบ None๏ผ
- ๅธธ็จไบ่งฃๅณๅพช็ฏๅผ็จ็้ฎ้ขใ

```rust,ignore
use std::rc::Rc;

let five = Rc::new(5);

let weak_five = Rc::downgrade(&five);

let strong_five: Option<Rc<_>> = weak_five.upgrade();
assert!(strong_five.is_some());

// Destroy all strong pointers.
drop(strong_five);
drop(five);

assert!(weak_five.upgrade().is_none());
```



## โก Box - heap allocation

ๆ็ฎๅ็ๆบ่ฝๆ้ๅฐฑๆฏ std::boxed::Box๏ผ

    let five = 5;           // 5 in Stack memory
    let five = Box::new(5); // 5 in Heap memory

    let mut boxed = box 5;
    *boxed += 5;

ไบๅฎไธ๏ผ`String` ๅ `Vec<T>` ้ฝๆฏๆบ่ฝๆ้๏ผไฝ้ๅธธไธ่ฟๆ ท็งฐๅผๅฎไปฌใๅฎไปฌๅ่ชๆฅๆๅฏ็ฎก็็ๅๅญ๏ผไน้ฝๅฎ็ฐไบ Drop ๅ Deref ไธคไธช็นๆงใ

ๅ ไธบๆๆๆ็็บฆๆ๏ผไธ่ฝ็ดๆฅ่ฟๅๅฝๆฐๆฌๅฐๅผ็ๅผ็จ &T๏ผๅ ไธบๅฎ็ๆๆๆไฝ็จๅๅจๅฝๆฐๅ้จ๏ผๅฝๆฐ็ปๆๆถๅฐฑๆถๅๅๅญ๏ผ่ฟๅๅผ็จๅฐฑๅฏผ่ดๆ้ๆฌ็ฉบ Dangling Referencesใ

้ค้ๅผ็จๆฏๅฝๆฐๅฅๅ๏ผ่ฟ็งๆๅตไธๅฝๆฐๆๅฏไปฅ่ฟๅๅผ็จ๏ผ&str ๆ &String๏ผๅ ไธบๅฎไฝ้ฝๆฏๅฝๆฐๅค้จไผ ๅฅ็๏ผ็ธๅฝไบๅฝ่ฟๆๆๆ๏ผๆไปฅ็ๅฝๅจๆไน็ฌฆๅ็บฆๆใ

ๆไปฅ๏ผ้ๅธธ็จ่ฟๅ String ่ไธๆฏ &str, ่ฟๅ Vec<T> ่ไธๆฏ &[T]๏ผๅณๅฝๆฐๅบ่ฏฅ่ฟๅ T ่ไธๆฏๅผ็จ &T๏ผไนๅฐฑๆฏๅฐๆๆๆ็งปๅบๅฝๆฐๅ้จใ

ๅถๅฎ String ็ฑปๅไฝฟ็จๅ ๆฅๅญๅจๆฐๆฎ๏ผๆไปฅๅฏไปฅ็ดๆฅ่ฟๅ๏ผๅจๅฝๆฐ่ฟๅๆถๅฝๆฐๆ ้ๆฏๅไพ็ถๅญๅจใ

```rust,ignore
fn main() {
    let foo = &mut "world!".to_string();
    let s1 = return_as_is_v2(foo);
    let s2 = return_owned_v1("world!");
    assert_eq!("Hello, world!", format!("{}", s1));
    assert_eq!("Hello, world!", format!("{}", s2));
}

fn return_as_is_v1(x:&str)->&str {
    // let a:String = "Hello, ".to_string()+ x;
    // cannot return value referencing local variable `a`
    // returns a value referencing data owned by the current function
    // &a[..]
    
    // cannot return reference to temporary value
    // &("Hello, ".to_string() + x)
    
    &x[..]
    // or return x
}

fn return_as_is_v2(x:&mut String)->&str {
    x.insert_str(0, "Hello, ");
    &x[..]
    // or return x
}

fn return_owned_v1(x:&str)->String {
    let a:String = "Hello, ".to_string()+ x;
    a
}
```

ๅฆๅค๏ผRust ็คพๅบๆไธไธช owning_ref ๆจกๅๅฎ็ฐไบๅจๅฝๆฐ่ฟๅๅผ็จ๏ผไฝๅฎ่ฟๆฏๅบไบๆๆๆ็งปๅจ็ๅบ็กไธ็ใ

ๅฆๅค๏ผๅฏนไบไธ่ฝๅจ็ผ่ฏๆ็กฎๅฎๅคงๅฐ็็ฑปๅ DST๏ผๅฆๅธธ่ง็ str๏ผๅฏไปฅ็ปๅ Box ๅฐๅถๅญๅจๅจๅ ๅๅญไธญ๏ผๅนถไธ้่ฟๆบ่ฝๆ้่ฟ่กๆไฝใ

Rust ๅผๅฅ็ `box` ๅณ้ฎ่ฏ๏ผๅฏไปฅ็จๆฅๅไปฃ Box::new() ็ณ่ฏทไธไธชๅ ็ฉบ้ด๏ผไนๅฏไปฅ็จๅจๆจกๅผๅน้๏ผ

```rust,ignore
#![feature(box_syntax, box_patterns)]
fn main() {
    let boxed = Some(box 5);
    match boxed {
        Some(box unboxed) => println!("Some {}", unboxed),
        None => println!("None"),
    }
}
```

ๅฎไธๆฏ stable ๅ่ฝ๏ผไธ่ฝๅจ Rust stable ็ๆฌไฝฟ็จใ

ๆณจๆ๏ผ`Box<str>` ไนไธ่ฝ็ดๆฅ้่ฟ `Box::new()` ่ฟๆ ท็ๆนๅผๅๅปบ๏ผ่ๆฏ้่ฟ String ่ฝฌๆขๅพๅฐใ

```rust,ignore
use std::boxed::Box;

fn main() {
    let s3 = return_boxed_str("world!");
    assert_eq!("Hello, world!", format!("{}", s3));
}

// fn foo(x:&str)->Box<&str> {
//     let s:String = "Hello, ".to_string()+ x;
//     // cannot return Box<&str>, value referencing local variable `s`
//     // Box::new(&s[..]) 
    
//     // cannot return Box<&str>, value referencing temporary value
//     // Box::new(&s.to_owned()[..])

//     // expected `Box<str>`, found `Box<&str>`
//     // let boxed_str_ref: Box<str> = Box::new("string");

//     // the size for values of type `str` cannot be known at compilation time
//     // let boxed_str_ref = Box::new(s[..]);
// }

fn return_boxed_str(x:&str)->Box<str> {
    let s:String = "Hello, ".to_string()+ x;
    let boxed_str: Box<str> = s.to_owned().into_boxed_str();
    // let boxed_bytes: Box<[u8]> = boxed_str.into_boxed_bytes();
    // assert_eq!(*boxed_bytes, *s.as_bytes());
    boxed_str
}
```

## โก owning_ref ๅ ็จๅผ็จ
- Owning Ref https://crates.io/crates/owning_ref
- http://kimundi.github.io/owning-ref-rs/owning_ref/index.html

็ฑไบๆๆๆๆบๅถ็ๅญๅจ๏ผRust ็ณป็ป้ๅธธไธๅ่ฎธๅฝๆฐ่ฟๅๅ้จๅผ็ๅผ็จใ

ไฝๆฏๅฏไปฅๅจๅบๅฑๅฎ็ฐ่ฟไธ้ๆฑ๏ผowning_ref ๆจกๅๅฐฑๆฏๅบไบ stable_deref_trait ๅฎ็ฐ่ฟไธๅ่ฝใๅๅ้ไธๆ ท๏ผๅผ็จไนๆๆๆ่๏ผowning_ref ไผๅฐๅผ็จ็ๆๆๆไปๅๆฅๆๆๆน็งปๅจๅฐไธไธชๆบ่ฝๆ้ไธใ

ๆ นๆฎๆจกๅๅฎไน๏ผๆไพไปฅไธๆบ่ฝๆ้็ๅ่ฃ็ฑปๅ๏ผ

- `ArcRef`  ไฝฟ็จไธไธช `Arc` ไฝไธบๅผ็จ็ๆๆ่ใ
- `BoxRef`  ไฝฟ็จไธไธช `Box` ไฝไธบๅผ็จ็ๆๆ่ใ
- `BoxRefMut`   ไฝฟ็จไธไธช `Box` ไฝไธบๅฏๅๅผ็จ็ๆๆ่ใ
- `ErasedArcRef`    ไฝฟ็จไธไธช `Erased` ไฝไธบๅผ็จ็ๆๆ่ใ
- `ErasedBoxRef`    ไฝฟ็จไธไธช `Erased` ไฝไธบๅผ็จ็ๆๆ่ใ
- `ErasedBoxRefMut` ไฝฟ็จไธไธช `Erased` ไฝไธบๅฏๅๅผ็จ็ๆๆ่ใ
- `ErasedRcRef` ไฝฟ็จไธไธช `Erased` ไฝไธบๅผ็จ็ๆๆ่ใ
- `MutexGuardRef`   ไฝฟ็จไธไธช `MutexGuard` ไฝไธบๅผ็จ็ๆๆ่ใ
- `MutexGuardRefMut`    ไฝฟ็จไธไธช `MutexGuard` ไฝไธบๅฏๅๅผ็จ็ๆๆ่ใ
- `RcRef`   ไฝฟ็จไธไธช `Rc` ไฝไธบๅผ็จ็ๆๆ่ใ
- `RefMutRef`   ไฝฟ็จไธไธช `RefMut` ไฝไธบๅผ็จ็ๆๆ่ใ
- `RefMutRefMut`    ไฝฟ็จไธไธช `RefMut` ไฝไธบๅฏๅๅผ็จ็ๆๆ่ใ
- `RefRef`  ไฝฟ็จไธไธช `Ref` ไฝไธบๅผ็จ็ๆๆ่ใ
- `RwLockReadGuardRef`  ไฝฟ็จไธไธช `RwLockReadGuard` ไฝไธบๅผ็จ็ๆๆ่ใ
- `RwLockWriteGuardRef` ไฝฟ็จไธไธช `RwLockWriteGuard` ไฝไธบๅผ็จ็ๆๆ่ใ
- `RwLockWriteGuardRefMut`  ไฝฟ็จไธไธช `RwLockWriteGuard` ไฝไธบๅฏๅๅผ็จ็ๆๆ่ใ
- `StringRef`   ไฝฟ็จไธไธช `String` ไฝไธบๅผ็จ็ๆๆ่ใ
- `StringRefMut`    ไฝฟ็จไธไธช `String` ไฝไธบๅฏๅๅผ็จ็ๆๆ่ใ
- `VecRef`  ไฝฟ็จไธไธช `Vec` ไฝไธบๅผ็จ็ๆๆ่ใ
- `VecRefMut`   ไฝฟ็จไธไธช `Vec` ไฝไธบๅผ็จ็ๆๆ่ใ

ๆจกๅไธญ็ `StableDeref` ๅชๆฏไธไธช unsafe marker trait๏ผๅฎๆฒกๅทไฝ็ๆนๆณๅฎไน๏ผๅชๆฏๆ ่ฎฐ unsafe ่กไธบ๏ผ็กฎไฟ่งฃๅผ็จๅฏไปฅๅพๅฐไธไธช็จณๅฎ็ๅฐๅ๏ผๅณๅฎ็ๆๆๆๅทฒ็ป็งปๅจใๆฏๅฆ๏ผBox, Vec, Rc, Arc ๅ String ็ญ็ญๆบ่ฝๆ้้ฝๅฎ็ฐไบ่ฟไธ็นๆง๏ผๅฝไธไธช Box ็งปๅจๅ๏ผๅฎๅ้จๆฐๆฎ็ไฟๅญๅฐๅไป็ถๆฏๅบๅฎ็ใ

ๆดๅทไฝๅฐ่ฏด๏ผๅฎ็ฐ่ๅฟ้กป็กฎไฟ่ฐ็จ deref() ๆนๆณ่ฟๅ็็ปๆๅจๅฏน่ฑก็็ๅญๆๅๆๆ๏ผ่ไธไปไปๆฏๅจๅ็จ็็ๅญๆๅๆๆ๏ผๅนถไธๅณไฝฟๅฏน่ฑก่ขซ็งปๅจ๏ผderef ไนๆฏๆๆ็ใ

ๆจกๅไธป่ฆๆไพไปฅไธไธคไธชๅฏน่ฑกๆฅๅ ๆๅผ็จๆๆๆ๏ผๅฎไปฌๅชๆไธคไธชๆๅ๏ผowner ๅ reference๏ผ

```rust,ignore
pub struct OwningRef<O, T: ?Sized> {
    owner: O,
    reference: *const T,
}

pub struct OwningRefMut<O, T: ?Sized> {
    owner: O,
    reference: *mut T,
}

pub struct OwningHandle<O, H>
    where O: StableAddress, H: Deref,
{
    handle: H,
    _owner: O,
}
```

ๅฎ็ๅทฅไฝๅ็ๆฏ่ฆๆฑๆๆ่็ฑปๅ่งฃๅผ็จๅพๅฐไธไธช็จณๅฎๅๅญๅฐๅ๏ผ่ฟๅฎ้ไธ้่ฆๆ `Box<T>`ใ`Rc<T>` ็ญๆบ่ฝๆ้ๆไพ็ๅ ๅ้ใ

`OwningHandle` ็ฑปๅๆฏไธไธช่กฅๅ็ฑปๅ๏ผOwningRef ๅ่ฎธไฝฟ็จ่ไผ ้ไธไธช owned ๅฏน่ฑก๏ผๅไธไธชๅผ็จ referenceใ่ OwningHandle ๅๅซไธไธช owned ๅฏน่ฑก๏ผๅไธไธชไพ่ตๅฏน่ฑกใ

OwningHandle ๅฏไปฅ้่ฟ `RefMut` ๅๅณ่็ `RefCell` ๅ่ฃ๏ผๆ่้่ฟ `RwLockReadGuard` ๅๅณ่็ `RwLock` ๅ่ฃ๏ผๅฎไปฌ็ API ้ฝๆฏ็ปไธ็๏ผๅฏนๅฏไปฅไฝฟ็จๅชไบ็ฑปๅ็ owned ๅฏน่ฑกๅไพ่ตๅฏน่ฑกๆฒกๆ้ๅถใ

OwningHandle ๅๅปบๆถ๏ผไฝฟ็จ `new` ๆนๆณไผ ๅฅไธไธชๅฎ็ฐไบ `ToHandle` ๆ `ToHandleMut` ็ owner ๅฏน่ฑก๏ผ่ฐ็จๅถๆไพ็่ฝฌๆขๆนๆณ๏ผๅฏนๅถ่งฃๅผ็จๅพๅฐ็จณๅฎ็ๅฐๅใๆ่ๅฏนไบๆฒกๆๅฎ็ฐ  `ToHandle` ๆ `ToHandleMut` ็ๅฏน่ฑก๏ผๅๅปบไฝฟ็จ `new_with_fn` ๆนๆณๅนถไธๆไพไธไธชๅ่ฐ๏ผๅ่ฐไผๆฅๆถๅฐๅฏน่ฑก็ๅผ็จ๏ผๅฎ่ฆไฟ่ฏ่ฟๅ็ๅฏน่ฑกไธไผไปฅๆฏๆฅๆถๅฐ็ๅผ็จๆด้ฟๅฝใ

็ฑไบไผ ๅฅ็ๅ่ฐ้่ฆ่งฃๅผ็จไธไธช่ฃธๆ้ raw pointer๏ผๅณ้่ฆไฝฟ็จ unsafe๏ผไธบไบ้ฟๅๅจๅคงๅคๆฐ่ฐ็จๆนไธๅผบๅถๆง่ก่ฟ็งไธๅฎๅจๆง๏ผ`ToHandle` ็นๆงไฝไธบๅฌๅฑๆฐๆฎ็ปๆ่ขซๅฎ็ฐไธบ unsafe ๆนๆณใๅฎ็ฐ ToHandle ็็ฑปๅๅฏไปฅ็จ OwningHandle ๅ่ฃ๏ผ่ๆ ้ไผ ้ๅ่ฐใ


ๆญคๆจกๅๆไพไบ `Erased` trait ๅฏน่ฑก็จๆฅๆฆ้คๆๆ่็ๅทไฝๅบ็ฑปๅ๏ผ่ฟๅ่ฎธๅฐๆๆฅๆ็ๅผ็จไธไธๅ็ๆๆ่ๅบ็ฑปๅๆททๅใ

่ฟไธคไธชๅบๆฌ็ปๆไฝๆไพไปฅไธๅฑๅ็ๆนๆณ๏ผๅๆฐไผๆไบๅทฎๅซ๏ผไฝๅ่ฝๅบๆฌไธ่ด๏ผ่ฟๆๅ ไธช็นๆๆนๆณ๏ผ

- `as_owner` ่ฟๅ owner ็ๅผ็จใ
- `erase_owner` ๅณ `self.owner.into_erased()`๏ผๅฐ owner ็็ฑปๅๆฆ้คใ
- `into_owner` ่ฟๅ owner ๅนถๆพๅผๆๆๆใ
- `map` ๅฐ reference ๆๅๆ ๅฐไธบ้ญๅ่ฟๅๅผ็จๆๅ็ๆฐๆฎๅ็ฑปๅ๏ผๅ่ฐ็ฑปๅ `FnOnce(&T) -> &U` ๆ่ `FnOnce(&mut T) -> &U`ใ
- `try_map` ๅ่ฎธๅคฑ่ดฅ็ `map`๏ผ่ฟๅ `Result` ๆไธพ็ฑปๅๅ่ฃ็ `OwningRef`ใ
- `map_owner` ๅฐ owner ๆๅๆ ๅฐไธบ้ญๅ่ฟๅ็ๆฐๆฎๅ็ฑปๅ๏ผunsafe ๆนๆณใ
- `map_owner_box` ๅณ `Box::new(self.owner)`๏ผ็จ Box ๆ้ๅ่ฃ ownerใ
- `new` ๅๅปบๅฎไพใ
- `new_assert_stable_address` ็ฑปไผผ `new` ไฝไธ่ฆๆฑๅๆฐ็ฑปๅๅฎ็ฐ `StableAddress`ใ

- OwningRefMut

    - `as_owner_mut` ๅฏๅๅผ็จ็ๆฌ็ `as_owner`๏ผ่ฟๅ owner ็ๅฏๅๅผ็จใ
    - `map_mut` ๅฏๅ็็ `map`๏ผๅ่ฐ็ฑปๅ `FnOnce(&mut T) -> &mut U`
    - `try_map_mut` ๅฏๅ็ๆฌ็ `try_map`๏ผๅ่ฐ็ฑปๅ `FnOnce(&mut T) -> Result<&mut U, E>`ใ

- OwningRef

    - `map_with_owner` ็ฑปไผผ `map` ๆนๆณ๏ผๅชๆฏๅ่ฐไธญๅคไบไธไธชๅๆฐ `f(&self.owner, &self)`ใ
    - `try_map_with_owner`  ็ฑปไผผ `map_with_owner` ๆนๆณ๏ผๅชๆฏๅ่ฐ่ฟๅ `Result` ็ฑปๅๅ่ฃ็ `OwningRef`ใ

ไธคไธชๅฏน่ฑก new ๆนๆณๅฎไน๏ผ่ฟๅๅผ้ฝๅฎ็ฐ StableAddress๏ผๅทฎๅซๅจไบ Deref ๅ DerefMut๏ผ

```rust,ignore
pub fn new(o: O) -> Self where O: StableAddress + Deref<Target = T>,
{
    OwningRef {
        reference: &*o,
        owner: o,
    }
}

pub fn new(o: O) -> Self where O: StableAddress + DerefMut<Target = T>,
{
    OwningRefMut {
        reference: &mut *o,
        owner: o,
    }
}
```

่่ไปฅไธ็ไปฃ็ ๏ผ

```rust,ignore
fn return_owned_and_referenced<'a>() -> (Vec<u8>, &'a [u8]) {
    let v = vec![1, 2, 3, 4];
    let s = &v[1..3];
    (v, s)
}
```

ๅฐฝ็ฎก๏ผไปฅไธไปฃ็ ๆฏไธ่ฝ้่ฟ็ผ่ฏ็๏ผๅ ไธบ่ฟๅไบๆฌๅฐๅ้็ๅผ็จ๏ผๆๆๆๆบๅถไธ่ฎธๅฏใไฝไปๅๅญๅธๅฑๆฅ็๏ผๅฆๆ Vector ๅญๆดปๅจๆ่ถ่ฟๅผ็จ็ๅญๆดปๆ 'a๏ผ้ฃไน่ฟๅ็ๅผ็จๅฐฑๆฏๅฎๅจ็๏ผๅ ไธบๅ้็ๆฐๆฎๅ้ๅฐๅๆฒกๆๆนๅใ 

ๆญคๅบ็ OwningRefใOwningRefMut ้่ฟไธคไธชๆๅ๏ผๅฐๆๆ่ๅๅผ็จๆ็ปๅจไธไธชๅ่ฃๅจ็ฑปๅไธญๆฅๅฎ็ฐๆญคๅฎๅจไฝฟ็จ๏ผ่ฏฅๅ่ฃๅจ็ฑปๅ็กฎไฟ็ๅญๆ็บฆๆใ

```rust,ignore
extern crate owning_ref;

use owning_ref::{BoxRef, OwningRef};

fn return_owned_and_referenced() -> OwningRef<Vec<u8>, [u8]> {
    let v = vec![1, 2, 3, 4];
    // {owner: vec![1,2,3,4], reference[1,2,3,4]}
    let or = OwningRef::new(v);
    // {owner: vec![1,2,3,4], reference[2,3]}
    let or = or.map(|v| &v[1..3]);
    or
}

fn owned_referenced_v1() -> OwningRef<String, str> {
    let mut s = String::from("Hello world!");
    let or = OwningRef::new(s);
    let or = or.map(|v| &v[0..5]);
    or
}

fn owned_referenced_v2() -> Result<OwningRef<Box<[i32;4]>, i32>, ()> {
    let owning_ref = OwningRef::new(Box::new([1, 2, 3, 4]));
    let owning_ref = owning_ref.map(|array| &array[2]);

    let owning_ref = owning_ref.try_map_with_owner(|array, _prev| {
        if array[1] == 2 { Ok(&array[1]) } else { Err(()) }
    });
    // assert_eq!(*owning_ref.unwrap(), 2);
    owning_ref
}
```

ๆ นๆฎ new ๆนๆณๅฎไน๏ผไผ ๅฅ็ๆฏ `Vec[u8]`๏ผๆไปฅ reference ๆๅๆฏ `&*Vec[u8]` ๅณ `[u8]`๏ผๅฆๆไผ ๅฅ็ๆฏ String๏ผ้ฃไน `&*String` ๅพๅฐ็็ฑปๅๅฐฑๆฏ `str`ใ

ๅฝ็ถ๏ผๅฆๆไผ ๅฅ็ๆฏไธไธชๅผ็จ๏ผ้ฃไนๅฐฑๅๅๅฐๅ้ข็้ฎ้ขไบ๏ผๆๆๆไธๅ่ฎธ่ฟๅไธไธชๅผ็จใ



## โก I/O & Command Line
- https://doc.rust-lang.org/book/ch12-00-an-io-project.html
- https://doc.rust-lang.org/book/ch12-06-writing-to-stderr-instead-of-stdout.html

ๅๅถๅฎ่ฏญ่จไธๆ ท๏ผRust ไนๆ Standard Output ๅ Standard Error ไธค็ง่พๅบๆ ๅ๏ผ้ป่ฎค่พๅบๆฏๆงๅถๅฐ๏ผ้ๅธธๅฏไปฅไฝฟ็จ้ๅฎๅๅฐ้ป่ฎค่พๅบๅฎๅๅฐๆไปถ๏ผ

    cargo run > output.txt

่ฟๆ ท๏ผprintln ่ฟ็ฑปๆๅฐไฟกๆฏๅฐฑไผๅๅฅๅฐๆไปถ๏ผไฝไธไผๅๅบ้่ฏฏไฟกๆฏใ

    eprintln!("Application error: {}", e);


### ๐ข๐ต CLI Arguments
- https://doc.rust-lang.org/stable/std/env/index.html
- https://doc.rust-lang.org/book/ch12-01-accepting-command-line-arguments.html
- https://doc.rust-lang.org/book/ch12-05-working-with-environment-variables.html
- https://doc.rust-lang.org/reference/crates-and-source-files.html

ๅ C++ ่ฏญ่จไธๅ๏ผRust ็ main() ๅฝๆฐไธ้่ฟๅๆฐๅ่กจๆฅๆถ็จๅบ่ฟ่กๆถไผ ๅฅ็ๅๆฐ๏ผ่ๆฏ้่ฟ็ฏๅขๅ้็ๆนๅผ่ฏปๅ๏ผๅฏไปฅไฝฟ็จ env ่ฏปๅๅถๅฎ็ฏๅขๅ้๏ผ

```rust,ignore
use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();
    let version = env!("CARGO_PKG_VERSION");

    let query = &args[1];
    let filename = &args[2];

    println!("Command Line arguments: {:?}", args);
    println!("Package version: {}", version);

    println!("Searching for {}", query);
    println!("In file {}", filename);
}
```

่ฆ็น๏ผ

- `Vec<String>` ๅญ็ฌฆไธฒๅ้๏ผๅผ็จ args() ่ฟๅ็ Args ็ปๆไฝ้ๅ๏ผ
- `&args[0]` ๅ็จๅๆฐๅผ็จ๏ผๅ ไธบๅค้จไผ ๅฅ็ String ๆๆๆไธ่ฝ่ฝฌ็งป๏ผ
- `{:?}` ๆๅฐๆจกๆฟไฝฟ็จ้้็ฌฆๅทๆๅฐๅคไธชๅผ๏ผ

Main Functions

A crate that contains a main function can be compiled to an executable. If a main 
function is present, it must take no arguments, must not declare any trait or lifetime bounds, 
must not have any where clauses, and its return type must implement the Termination trait.

```rust,ignore
fn main() {}
fn main() -> ! {
    std::process::exit(0);
}
fn main() -> impl std::process::Termination {
    std::process::ExitCode::SUCCESS
}
```

Note: Types with implementations of Termination in the standard library include:

001. ()
002. !
003. Infallible
004. ExitCode
005. Result<T, E> where T: Termination, E: Debug

็คบ่ไฝฟ็จ std::fs ๆ ๅๆจกๅๆฅ่ฏปๅๆไปถ๏ผ้่ฟ `read_to_string()` ้ๆๆนๆณ๏ผ

```rust,ignore
use std::env;
use std::fs;

fn main() {
    let args: Vec<String> = env::args().collect();
    let filename = &args[1];
    println!("In file {}", filename);

    let contents = fs::read_to_string(filename)
        .expect("Something went wrong reading the file");

    println!("With text:\n{}", contents);
}
```

ๆจกๅ env ๅฏผๅบๅฝๆฐ๏ผ

- `args`    ่ฟๅๆๆๅฝไปค่กๅๆฐ๏ผๅญ็ฌฆไธฒ็ฑปๅไธบ Stringใ
- `args_os` ่ฟๅๆๆๅฝไปค่กๅๆฐ๏ผๅญ็ฌฆไธฒ็ฑปๅไธบ std::ffi::OsStringใ
- `current_dir` Returns the current working directory as a PathBuf.
- `current_exe` Returns the full filesystem path of the current running executable.
- `home_dir`    DeprecatedReturns the path of the current user's home directory if known.
- `join_paths`  Joins a collection of Paths appropriately for the PATH environment variable.
- `remove_var`  Removes an environment variable from the environment of the currently running process.
- `set_current_dir` Changes the current working directory to the specified path.
- `set_var` Sets the environment variable k to the value v for the currently running process.
- `split_paths` Parses input according to platform conventions for the PATH environment variable.
- `temp_dir`    Returns the path of a temporary directory.
- `var` ๆ นๆฎ key ่ทๅๅฏนๅบ็็ฏๅขๅ้๏ผ่ฟๅ `Result<String, VarError>`ใ
- `var_os`  ๆ นๆฎ key ่ทๅๅฏนๅบ็็ฏๅขๅ้๏ผ่ฟๅ `Option<OsString>`ใ
- `vars`    ่ทๅ็ๆๆ็็ฏๅขๅ้๏ผ่ฟๅไธไธช่ฟญไปฃๅจ๏ผๅ็ด ๆฏ (variable, value) ๅญ็ฌฆไธฒ็ฑปๅไธบ Stringใ
- `vars_os` ่ทๅ็ๆๆ็็ฏๅขๅ้๏ผ่ฟๅไธไธช่ฟญไปฃๅจ๏ผๅ็ด ๆฏ (variable, value) ๅญ็ฌฆไธฒ็ฑปๅไธบ std::ffi::OsStringใ


### ๐ข๐ต Shell ๅฝไปคๆง่ก
- https://doc.rust-lang.org/stable/std/process/struct.Command.html
- https://docs.microsoft.com/en-US/troubleshoot/cpp/redirecting-error-command-prompt
- BASH Shell Redirect stderr To stdout https://www.cyberciti.biz/faq/redirecting-stderr-to-stdout/
- Clap - Command Line Argument Parser for Rust https://crates.io/crates/clap

Rust ่ฟ็จๆ ๅๅบๆไพไบไธๆไฝ็ณป็ป่ฟ็จ็บงๅซ็ไบคไบ่ฝๅ๏ผๆไพไบ Command ๆจกๅๆฅๆง่กๅค้จๅฝไปคใ

ๆ ๅๅบๆไพไธไธชๆไปถๆฅๆไฝ่ฟ็จ๏ผ

- `process::abort()` ๆ ๆกไปถ็ปๆ่ฟ็จ๏ผ
- `process::exit(code: i32)` ้ๅบ่ฟ็จ๏ผ
- `process::id()` ่ทๅ่ฟ็จ ID๏ผ

ๅฝไปคๅฏน่ฑก `Command` ๅๅญ่ฟ็จ `Child` ๆฏไธป่ฆๅฏน่ฑก๏ผ่ฟ็จๆ ๅๅบ้ฝๆฏๅด็ๅฎ่ฟ่ฝฌ็ใ

ๅฝไปคๅฏน่ฑกๆไพ็ไธฐๅฏ็ๆนๆณ๏ผ

    pub fn new<S: AsRef<OsStr>>(program: S) -> Command
    pub fn arg<S: AsRef<OsStr>>(&mut self, arg: S) -> &mut Command
    pub fn args<I, S>(&mut self, args: I) -> &mut Command
    where
        I: IntoIterator<Item = S>,
        S: AsRef<OsStr>, 
    pub fn env<K, V>(&mut self, key: K, val: V) -> &mut Command
    where
        K: AsRef<OsStr>,
        V: AsRef<OsStr>, 
    pub fn envs<I, K, V>(&mut self, vars: I) -> &mut Command
    where
        I: IntoIterator<Item = (K, V)>,
        K: AsRef<OsStr>,
        V: AsRef<OsStr>, 
    pub fn env_remove<K: AsRef<OsStr>>(&mut self, key: K) -> &mut Command
    pub fn env_clear(&mut self) -> &mut Command
    pub fn current_dir<P: AsRef<Path>>(&mut self, dir: P) -> &mut Command
    pub fn stdin<T: Into<Stdio>>(&mut self, cfg: T) -> &mut Command
    pub fn stdout<T: Into<Stdio>>(&mut self, cfg: T) -> &mut Command
    pub fn stderr<T: Into<Stdio>>(&mut self, cfg: T) -> &mut Command
    pub fn spawn(&mut self) -> Result<Child>
    pub fn output(&mut self) -> Result<Output>
    pub fn status(&mut self) -> Result<ExitStatus>

    ๐ฌ nightly-only experimental API
    pub fn get_program(&self) -> &OsStr
    pub fn get_args(&self) -> CommandArgs<'_>
    pub fn get_envs(&self) -> CommandEnvs<'_>
    pub fn get_current_dir(&self) -> Option<&Path>

ๅธธ็จๆนๆณ๏ผ

- new ๅๅปบๅฝไปคๅฏน่ฑก๏ผ
- arg/args ่ฎพ็ฝฎๅฝไปคๅๆฐ๏ผ
- env/envs ่ฎพ็ฝฎๅฝไปค็ฏๅขๅ้๏ผ
- spawn ๅฝไฝๅญ่ฟ็จๆง่กๅฝไปค๏ผ่ฟๅไธไธชๅญ่ฟ่กๅฅๆ๏ผ
- output ๅฝไฝๅญ่ฟ็จๆง่กๅฝไปค๏ผ็ญๅพๅฎๆๅนถๆๆ่พๅบๆฐๆฎๅฏน่ฑก๏ผ
- status ๅฝไฝๅญ่ฟ็จๆง่กๅฝไปค๏ผ็ญๅพๅฎๆๅนถ่ทๅ็ถๆ๏ผ

่ๅญ่ฟ็จๅฏน่ฑกๆฌ่บซๅชๆไพไบ 4 ไธชๆนๆณใ

    pub fn kill(&mut self) -> Result<()>
    pub fn id(&self) -> u32
    pub fn try_wait(&mut self) -> Result<Option<ExitStatus>>
    pub fn wait_with_output(self) -> Result<Output>

ไธๅญ่ฟ็จไบคไบ๏ผๅไธๅบ้่ฆ่ฆๅค็ stdout, stdin, stderr ็ญ IO ๅฏน่ฑก๏ผ่ฟไบ้ฝๆฏๅญ่ฟ็จ็ๆๅใ

```rust,ignore
pub struct Child {
    pub stdin:  Option<ChildStdin>,
    pub stdout: Option<ChildStdout>,
    pub stderr: Option<ChildStderr>,
    // some fields omitted
}
```

ๆณจๆๅบๅซ๏ผๅฝไปคๆๅญ่ฟ็จๆง่กๅฎๆฏ๏ผ่พๅบ็ๆฐๆฎไฟๅญๅจ Output ๅฏน่ฑกใ

ไพๅฆ๏ผๆง่กไธไธช echo ๅฝไปค๏ผๆณจๆ๏ผWindows ๅ Linux ็ณป็ป็ๆข่ก็ฌฆๅทๅๅซไธบ `\r\n`ใ`\n`ใ

```rust,ignore
use std::process::Command;

let output = Command::new("echo")
                     .arg("Hello world")
                     .output()
                     .expect("Failed to execute command");

assert_eq!(b"Hello world\n", output.stdout.as_slice());
```

ไปฅไธ็คบ่่ฐ็จ Linux ็ณป็ป็ grep ๅฝไปค๏ผๅฎ่ฝๅฏน็ฎๆ ๆไปถ่ฟ่กๅๆๅนถๆฅๆพ็ธๅบๅญ็ฌฆไธฒ๏ผๅนถ่ฏฅๅญ็ฌฆไธฒๆๅจ่ก่พๅบใ

```rust,ignore
use std::process::*;
use std::env::args;

fn main() {
    let mut arg_iter = args();
    // panic if there is no one
    arg_iter.next();
    let pattern = arg_iter.next().unwrap_or("main".to_string());
    let pt =  arg_iter.next().unwrap_or("./".to_string());
    let child = Command::new("grep")
        .arg("-n")
        .arg("-r")
        .arg(&pattern)
        .arg(&pt)
        // pipeline to parent
        // .stdout(Stdio::null())
        .stdout(Stdio::piped())
        .spawn().unwrap();

    // wait child to finish
    let out = child.wait_with_output().unwrap();
    let out_str = String::from_utf8_lossy(&out.stdout);
    for line in out_str.split("\n") {
        println!("{}", line);
    }
}
```

ไธ้ขไปฃ็ ไธญ๏ผ่ฝ็ถไฝฟ็จไบ wait_with_output ๆนๆณ็ญๅพๅญ่ฟ็จ๏ผไฝๆฏ่พๅบๅๅฎนๅนถไธ่ฝ็ดๆฅ่ขซๆๆๅฐใๅ ไธบๅญ็บฟ็จไผ็ปงๆฟ็ถ่ฟ็จ็ๆๆๅฅๆ๏ผๅญ่ฟ็จไนๅฐฑไผ็ปงๆฟ็ถ่ฟ็จ็ๆ ๅ่พๅบใ

ๅช้่ฆไฝฟ็จ pipe ้ๅฎๅๅญ็บฟ็จ็ๆ ๅ่พๅบๅฐๅฆๅคไธไธช่พๅบ็ผๅฒๅบ๏ผ่ไธๆฏ็ถ่ฟ็จ็ stdout๏ผ่ฟๆ ทๅฐฑๅฏไปฅๆๆๅญ่ฟ็จ็่พๅบๅๅฎนใ

Unix/Linux ๆ ๅ I/O ๆต่กๆไปถไธๅฏนๅบ็ ID๏ผ

    | Handle |  Name  |   Description   |
    |--------|--------|-----------------|
    |      0 | stdin  | Standard input  |
    |      1 | stdout | Standard output |
    |      2 | stderr | Standard error  |

ๅจๅฝไปค่กไธญ๏ผๅฏไปฅไฝฟ็จ่ฟไบๆไปถ ID ๆฅๅ้ๅฎๅ๏ผไพๅฆ ls ๅฝไปค็ๆ ๅ่พๅบๅฐๆไปถ๏ผ

    # redirect stdout to list.txt
    ls > list.txt
    ls 1> list.txt

    # append stdout to list.txt
    ls -l >> list.txt

ไพๅฆ๏ผๅฐ grep ๅฝไปค็ stderr ้ๅฎๅๅฐๆไปถ๏ผ

    grep -R 'MASTER' $HOME 2> err.txt

ๅๆถๅฐ stdout ๅ stderr ้ๅฎๅๅฐๆไปถ๏ผๆณจๆ๏ผๅ้ข็`2>&1`่กจ็คบๅฐ stderr ้ๅฎๅๅฐ stdout๏ผ

    $ ls > list.txt 2>&1

    ## bash only ##
    $ ls &> list.txt

Windows ็ณป็ป่ฟๆฏๆไปฅไธ่ฟๆ ท็่ฏญๆณ๏ผ

    dir 2>&1 > out.txt
    dir 2> nul
    dir > output.msg 2> output.err
    dir 1> output.msg 2>&1

### ๐ข๐ต CLAP ๅฝไปค่กๅๆฐ่งฃๆๅจ
- CLAP - Command Line Argument Parser for Rust https://crates.io/crates/clap
- https://github.com/clap-rs/clap/blob/HEAD/examples/

CLAP ๅฝไปค่ก่งฃๆๅทฅๅท้ๅธธๆ็จ๏ผๅนถไธ็จๆทไนๅค๏ผๅฎๆไพไธฐๅฏ็ๅ่ฝ๏ผ

* Generate a CLI simply by defining a struct!
* **Auto-generated Help, Version, and Usage information**
* **Auto-generated completion scripts (Bash, Zsh, Fish, Elvish and PowerShell)**
* **Flags / Switches** (i.e. bool fields)
* **Positional Arguments** (i.e. those which are based off an index from the program name)
* **Option Arguments** (i.e. those that take values)
* **Sub-Commands** (i.e. `git add <file>` where `add` is a sub-command of `git`)
* **Support for building CLIs from YAML**
* **Requirement Rules**: Arguments can define the following types of requirement rules
* **Confliction Rules**: Arguments can optionally define the following types of exclusion rules
* **Groups**: Arguments can be made part of a group
* **Specific Value Sets**: (i.e. a `--mode` option may has two values, such as `--mode fast` or `--mode slow`)
* **Default Values**
* **Automatic Version from Cargo.toml**: use Rust's `env!()` macro to read the version in your Cargo.toml. 
* **Typed Values**: some macros provided by `clap` to get typed values (i.e. `i32`, `u8`, etc.) 
* **Suggestions**: Suggests corrections when the user enters a typo.
* **Colorized Errors (Non Windows OS only)**
* **Global Arguments**: Arguments can optionally be defined once, and be available to all child subcommands.
* **Custom Validations**: You can define a function to use as a validator of argument values.
* **POSIX Compatible Conflicts/Overrides**

้็ฝฎไพ่ต๏ผ

    [dependencies]
    clap = "2.33"

    [dependencies]
    clap = {version = "2.33", features = ["yaml"]}

    [dependencies.clap]
    features = ["yaml"]

ๅไธค็ง้็ฝฎๅฏไปฅ่งฃๆ yaml ้็ฝฎๆไปถใ

็คบ่ๅๅปบไธไธชๅๆฐๆ้ ๅจ Builder Pattern๏ผ

```rust,ignore
// (Full example with detailed comments in examples/01b_quick_example.rs)
//
// This example demonstrates clap's full 'builder pattern' style of creating arguments which is
// more verbose, but allows easier editing, and at times more advanced options, or the possibility
// to generate arguments dynamically.
extern crate clap;
use clap::{Arg, App, SubCommand};

fn main() {
    let matches = App::new("My Super Program")
                  .version("1.0")
                  .author("Kevin K. <kbknapp@gmail.com>")
                  .about("Does awesome things")
                  .arg(Arg::with_name("config")
                       .short("c")
                       .long("config")
                       .value_name("FILE")
                       .help("Sets a custom config file")
                       .takes_value(true))
                  .arg(Arg::with_name("INPUT")
                       .help("Sets the input file to use")
                       .required(true)
                       .index(1))
                  .arg(Arg::with_name("v")
                       .short("v")
                       .multiple(true)
                       .help("Sets the level of verbosity"))
                  .subcommand(SubCommand::with_name("test")
                              .about("controls testing features")
                              .version("1.3")
                              .author("Someone E. <someone_else@other.com>")
                              .arg(Arg::with_name("debug")
                                  .short("d")
                                  .help("print debug information verbosely")))
                  .get_matches();

    // Gets a value for config if supplied by user, or defaults to "default.conf"
    let config = matches.value_of("config").unwrap_or("default.conf");
    println!("Value for config: {}", config);

    // Calling .unwrap() is safe here because "INPUT" is required (if "INPUT" wasn't
    // required we could have used an 'if let' to conditionally get the value)
    println!("Using input file: {}", matches.value_of("INPUT").unwrap());

    // Vary the output based on how many times the user used the "verbose" flag
    // (i.e. 'myprog -v -v -v' or 'myprog -vvv' vs 'myprog -v'
    match matches.occurrences_of("v") {
        0 => println!("No verbose info"),
        1 => println!("Some verbose info"),
        2 => println!("Tons of verbose info"),
        3 | _ => println!("Don't be crazy"),
    }

    // You can handle information about subcommands by requesting their matches by name
    // (as below), requesting just the name used, or both at the same time
    if let Some(matches) = matches.subcommand_matches("test") {
        if matches.is_present("debug") {
            println!("Printing debug info...");
        } else {
            println!("Printing normally...");
        }
    }

    // more program logic goes here...
}
```

ๅๅปบ่งฃๆ yaml ้็ฝฎๆไปถ็็คบ่็จๅบ๏ผ

```rust,ignore
// (Full example with detailed comments in examples/17_yaml.rs)
//
// This example demonstrates clap's building from YAML style of creating arguments which is far
// more clean, but takes a very small performance hit compared to the other two methods.
#[macro_use]
extern crate clap;
use clap::App;

fn main() {
    // The YAML file is found relative to the current file, similar to how modules are found
    let yaml = load_yaml!("cli.yml");
    let matches = App::from_yaml(yaml).get_matches();

    // Same as previous examples...
}
```

ๅๅๅปบ cli.yml ้็ฝฎๆไปถ๏ผ็ถๅไฝฟ็จ `--help` or `-h` ๅๆฐ่ฟ่กไปฅไธ็จๅบๅณๅฏ่งฃๆ้็ฝฎๆไปถ๏ผ่งฃๆ็ปๆๅญๆพไบ matches ไธญ๏ผ

```yaml
name: myapp
version: "1.0"
author: Kevin K. <kbknapp@gmail.com>
about: Does awesome things
args:
    - config:
        short: c
        long: config
        value_name: FILE
        help: Sets a custom config file
        takes_value: true
    - INPUT:
        help: Sets the input file to use
        required: true
        index: 1
    - verbose:
        short: v
        multiple: true
        help: Sets the level of verbosity
subcommands:
    - test:
        about: controls testing features
        version: "1.3"
        author: Someone E. <someone_else@other.com>
        args:
            - debug:
                short: d
                help: print debug information
```


### ๐ข๐ต Files ๆไปถ่ฏปๅ
- https://doc.rust-lang.org/book/ch12-02-reading-a-file.html
- https://doc.rust-lang.org/book/ch13-03-improving-our-io-project.html

Rust ๆไพ็ fs::read_to_string ๆนๆณๅชๆฅๆถไธไธชๆไปถๅ๏ผๅฎๅฏไปฅๅฐๆๅฎๆไปถ่ฏปๅฅๅฐๅๅญไธญใ

```rust,ignore
#[stable(feature = "fs_read_write", since = "1.26.0")]
pub fn read_to_string<P: AsRef<Path>>(path: P) -> io::Result<String> {
    fn inner(path: &Path) -> io::Result<String> {
        let mut file = File::open(path)?;
        let mut string = String::with_capacity(initial_buffer_size(&file));
        file.read_to_string(&mut string)?;
        Ok(string)
    }
    inner(path.as_ref())
}
```

ไฝฟ็จ็คบ่๏ผ

```rust,ignore
use std::env;
use std::fs;

fn main() {
    let args: Vec<String> = env::args().collect();
  
    if let Ok(config) = parse_config(&args) {
        println!("Searching for {}", config.query);
        println!("In file {}", config.filename);
    
        let contents = fs::read_to_string(config.filename)
            .expect("Something went wrong reading the file");
        println!("{}", contents);
    }
}

struct Config {
    query: String,
    filename: String,
}

fn parse_config(args: &[String]) -> Result<Config, &str> {
    if args.len() != 3 {
        // panic!("Usage: {} query filename", args[0]);
        // cannot return value referencing local variable `s` 
        // let s = format!("Usage: {} query filename", args[0]);
        // return Err(s.as_str());
        return Err("Require query and filename.");
    }
    let query = args[1].clone();
    let filename = args[2].clone();
    return Ok(Config{ query, filename })
}
```

่ฆ็น๏ผ

- ไฝฟ็จๆจกๅผๅน้ if let ่ฟ่ก้่ฏฏๅค็๏ผๅชๆ parse_config ่ฟๅ Ok ๅผๆ็ปง็ปญๆง่กใ
- parse_config ๅฝๆฐไฝฟ็จ Result<T, E> ็ฑปๅ๏ผ็ป่ฐ็จๆนๆไพ้่ฏฏๅค็็ๆบไผใ

ๅๅฎ poem.txt ๆไปถๅๅซ่พ็ฑณ่ยท็้ๆฃฎ็ไธ้ฆ่ฏ่ฏๅๅฎน๏ผ

    Emily Dickinson

    Iโm Nobody! Who are you?
    Are you โ Nobody โ too?
    Then thereโs a pair of us!
    Donโt tell! theyโd advertise โ you know!

    How dreary โ to be โ Somebody!
    How public โ like a Frog โ  
    To tell oneโs name โ the livelong June โ  
    To an admiring Bog!

ๆง่กๅฝไปคๅฐฑๅฏไปฅ่ฏปๅๆไปถๅๅฎน๏ผ

    cargo run the poem.txt

ๆณจๆไปฃ็ ไธญ็ clone ๆนๆณ๏ผ่ฟๅฏไปฅ่ฏดๆฏไธ็งไฝๆ็็ๅๆณ๏ผๅฝ็ถ๏ผๅฏนไบๅๆฌกๆง่กๆๆฐๆฎ้ๅฐ็ๆๅตไธๅฏไปฅๅฟฝ็ฅ๏ผไฝๆฏๆฒกๅฟ่ฆ็ๅคๅถๆฐๆฎ็กฎๅฎๆฏๆตช่ดน๏ผๆดๆๆ็ๅๆณๆฏ็ดๆฅไฝฟ็จ่ฟญไปฃๅจ๏ผenv::args ๅฝๆฐ่ฟๅ็ std::env::Args ๅฏไปฅ่ฟญไปฃๅฐ่ทๅๅไธชๅฝไปค่กๅๆฐใ

```rust,ignore
let args = env::args();
args.next();

let query = match args.next() {
    Some(arg) => arg,
    None => return Err("Didn't get a query string"),
};

let filename = match args.next() {
    Some(arg) => arg,
    None => return Err("Didn't get a file name"),
};
```



# ๐ก๐  Memory Layout ๅๅญๆจกๅ
- Rust ๅๅญๆจกๅ https://zhuanlan.zhihu.com/p/189694498
- https://github.com/usagi/rust-memory-container-cs

Rust ็ๅๅญๆจกๅๆฏไธบไบไธไธช้ขๅทๆๆ็็ฎๆ ๆๅก็๏ผ

- ๅๅญๅฎๅจ๏ผ่ฝๅคๆไฝ็ๅๅญๅฟ้กปไฟ่ฏๆๆ๏ผๆญฃๅธธๆๅตไธ๏ผไธๅฏ่ฝ่งฆๅๆฎต้่ฏฏๆ่ๅ็ๅๅญๆณๆผใ
- ๆง่ฝ๏ผ้ซๆง่ฝ็ไฝ็บงไปฃ็ ๅฟ้กป่ฝๅคไฝฟ็จไธไบไธๅ็ๅๅญๅ้็ญ็ฅใๅๅพๅๆถๅฟ้กปๆฏ้ๅผบๅถ็๏ผๅฏไปฅไฝฟ็จๅ็ฌ็ใๅบไบ GC ็ใๅ ๅๅญๅ้็ญ็ฅใ
- ๅนถๅ๏ผๅฟ้กปๅไบๅๅญๆฐๆฎ็ซไบ๏ผๅถไปๅฝขๅผ็็ซไบไพ็ถๅฏ่ฝๅญๅจใ

c++ ่ฏญ่จๅๅญๆจกๅไธญๅไธบๅไธชๅบ๏ผๅ ๏ผๆ ๏ผ้ๆๅจๅฑๅ้ๅป๏ผๅธธ้ๅบใ 

ๆ นๆฎ C++ ๅฏน่ฑก็ๅฝๅจๆไธๅ๏ผๅๅญๆจกๅๆ่ช็ฑๅญๅจๅบ๏ผๅจๆๅบใ้ๆๅบไธ็งไธๅ็ๅๅญๅบๅใ

- ่ช็ฑๅญๅจๅบ๏ผๅฑ้จ้้ๆๅ้็ๅญๅจๅบๅ๏ผๅณๅนณๅธธๆ่ฏด็ๆ ๏ผ
- ๅจๆๅบ๏ผ็จ operator new ๏ผmalloc ๅ้็ๅๅญ๏ผๅณๅนณๅธธๆ่ฏด็ๅ ๏ผ
- ้ๆๅบ๏ผๅจๅฑๅ้ ้ๆๅ้ ๅญ็ฌฆไธฒๅธธ้ๅญๅจไฝ็ฝฎ๏ผ

่ไปฃ็ ่ฝ็ถๅ ๅๅญ๏ผไฝไธๅฑไบ C++ ๅๅญๆจกๅ็ไธ้จๅใ



# ๐ก๐  Advanced Features
- Rust็็ฑปๅ็ณป็ป https://www.cnblogs.com/Davirain/p/13455953.html

่ฟ้จๅ้ซ็บงๅๅฎนๅๆฌ๏ผ

- Unsafe Rust: how to opt out of some of Rustโs guarantees and take responsibility for manually upholding those guarantees
- Advanced traits: associated types, default type parameters, fully qualified syntax, supertraits, and the newtype pattern in relation to traits
- Advanced types: more about the newtype pattern, type aliases, the never type, and dynamically sized types
- Advanced functions and closures: function pointers and returning closures
- Macros: ways to define code that defines more code at compile time


## โก Unsafe Rust 
- https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html
- The Rustonomicon - The Dark Arts of Unsafe Rust https://doc.rust-lang.org/nightly/nomicon/index.html
- Rust's Unsafe Code Guidelines Reference https://rust-lang.github.io/unsafe-code-guidelines/introduction.html

Rust ๅๅญๅฎๅจไพ่ตไบๅผบๅคง็็ฑปๅ็ณป็ปๅ็ผ่ฏๆถ่ฟฝ่ธชๆฃๆต๏ผไธ่ฟๅฎๅนถไธ่ฝ้ๅบๆๆ็ๅบๆฏใ

- ้ฆๅ๏ผๆๆ็็ผ็จ่ฏญ่จ้ฝ้่ฆ่ทๅค้จ็ไธๅฎๅจๆฅๅฃๆไบค้๏ผ่ฐ็จๅค้จๅบ็ญ๏ผๅจๅฎๅจ็ Rust ็นๆงไธๆฏๆ ๆณๅฎ็ฐ็๏ผ
- ๅถๆฌก๏ผๅฎๅจ็ Rust ็นๆงๆ ๆณ้ซๆ่กจ็คบๅคๆ็ๆฐๆฎ็ปๆ๏ผ็นๅซๆฏๆฐๆฎ็ปๆๅ้จๆๅ็งๆ้ไบ็ธๅผ็จ็ๆถๅ๏ผ
- ๅๆฌก๏ผไบๅฎไธ่ฟๅญๅจ็ไธไบๆไฝ๏ผ่ฟไบๆไฝๆฏๅฎๅจ็๏ผไฝไธ่ฝ้่ฟ็ผ่ฏๅจ็้ช่ฏใ

ๅ ๆญคๅจๅฎๅจ็ Rust ่ๅ๏ผ่ฟ้่ฆ unsafe ็ๆฏๆ๏ผไธๅฎๅจๆ ็คบๅฆๆๆง่กๅฎๅฏ่ฝไผ่ฟๅ Rust ็ๅๅญๅฎๅจ่ฏญๆ๏ผsafe != no bugใ

Unsafe ๆจกๅผไธไธ่ฟ่กๅฎๅจๆงๆฃๆฅ๏ผๆๅณๆไธๅฎ็ๆง่ฝๆๅ๏ผๅนถไธๅๅญ็ๅฎๅจๅฐ็ฑๅผๅ่่ด่ดฃใ

Unsafe ่ฏญๅฅๅ่ฝๅ่ฎธ็จๅบๅๅ็้ขๅคไบๆๆ๏ผ

- Dereference a raw pointer `&var as *const i32`
- Call an unsafe function or method
- Access or modify a mutable `static` variable
- Implement an unsafe trait
- Access fields of unions

ไฝฟ็จ่ฟไบ่ฝๅ๏ผๅฏไปฅ่ฎฉ Rust ๅๅค้จ่ฏญ่จ่ฟ่กไบคไบใ

```rust,ignore
let x = 5;
let raw = &x as *const i32;
let points_at = unsafe { *raw };
println!("raw points at {}", points_at);

static mut N: i32 = 5;
unsafe {
    N += 1;
    println!("N: {}", N);
}
```

```rust,ignore
unsafe fn danger_will_robinson() {
    // unsafe function
}

unsafe {
    // unsafe block
}

unsafe trait DangerTrait { }
unsafe impl DangerTrait for i32 {}
```

Rust 1.51.0 ๅผๅฅไบไธคไธชๅฎ๏ผ`addr_of` ๅ `addr_of_mut` ็จๆฅ่ทๅๅ้็ๅธธ่ฃธๆ้ const raw pointerใ

```rust,ignore
use std::ptr;

#[repr(packed)]
struct Packed {
    f1: u8,
    f2: u16,
}

let packed = Packed { f1: 1, f2: 2 };
// `&packed.f2` would create an unaligned reference, and thus be Undefined Behavior!
let raw_f2 = ptr::addr_of!(packed.f2);
assert_eq!(unsafe { raw_f2.read_unaligned() }, 2);
```


## โก FFI - Foreign Function Interface
- The (unofficial) Rust FFI Guide https://michael-f-bryan.github.io/rust-ffi-guide/overview.html
- Dynamically Sized Types https://doc.rust-lang.org/reference/dynamically-sized-types.html
- Build Scripts https://doc.rust-lang.org/cargo/reference/build-scripts.html
- rustc Command-line arguments https://doc.rust-lang.org/rustc/command-line-arguments.html
- Rust By Example - FFI https://doc.rust-lang.org/rust-by-example/std_misc/ffi.html
- Rust FFI Examples https://github.com/alexcrichton/rust-ffi-examples
- The Rustonomicon - FFI https://doc.rust-lang.org/nomicon/ffi.html
- https://doc.rust-lang.org/stable/std/ffi/index.html
- https://doc.rust-lang.org/stable/std/os/raw/index.html
- https://www.bookstack.cn/read/RustPrimer/ffi-calling-ffi-function.md
- Rust FFI ็ผ็จ - FFI ๆฆ่ฟฐ https://rustcc.cn/article?id=3b8241d0-c4ca-4f49-8e07-0a5142b00f59
- The `bindgen` User Guide https://rust-lang.github.io/rust-bindgen/introduction.html

ไฝไธบ็ณป็ป็บง็ผ็จ่ฏญ่จ๏ผไธๅถๅฎ่ฏญ่จ่ฟ่กไบคๆตๆฏๅพๅบๆฌ็่ฝๅ๏ผRust FFI ๅฐฑๆฏๅ่ฟไธชๅทฅไฝ็ใ

FFI ่ฟไธชๆฏ่ฏญๆๆฉๆฅ่ช Common Lisp ็่ง่๏ผไธๅ่ฏญ่จ็งฐๅผ่ฟ็ง่ฏญ่จ้ด่ฐ็จ็ๅ่ฝๅๅญๅฏ่ฝไธๅใCommon Lispใ
HaskellใPythonใRust ่ฟไบๅซ FFI๏ผJava ๅซ JNI ๆ JNA๏ผ่ฟๆไธไบๅถๅฎ่ฏญ่จๅซ็ปๅฎ Bindingใ
ไธฅๆ ผๆฅ่ฏด๏ผFFI ไธ ็ปๅฎ๏ผๆไนๅนถไธ็ธๅ๏ผ็ปๅฎๅฏไปฅ็่งฃไธบ FFI ไธญ็ไธ็งๅฎ็ฐใ

ๆๆ็่ฏญ่จๅจ็ผ่ฏๅ๏ผ้ฝไผไปฅไบ่ฟๅถ็ๅฝขๅผๅปๆง่ก๏ผๅณไฝฟๆฏๅจ่ๆๆบ่ฟ่ก็ๅญ่็ ใๅฆๆ็ดๆฅ้่ฟไบ่ฟๅถ่ฟ่ก FFI๏ผๆฏ็ซๅคชๅบๅฑ๏ผๅฎ็ฐ่ตทๆฅๅฐฑไผๅพๅคๆใ

ๅ ่๏ผABI - application binary interface ๅบ็จ็จๅบไบ่ฟๅถๆฅๅฃ็บฆๅฎๅฐฑๆฏไธไธช่งฃๅณๆนๆก๏ผๅฎไนไบ่ฐ็จ็บฆๅฎใ็ฑปๅ่กจ็คบๅๅ็งฐไฟฎ้ฅฐใ

ๅฐฝ็ฎกๆไบ ABI๏ผไฝๆฏ่ฟไธชไธ็ไธๅฏ็จ็่ฏญ่จๅพๅค๏ผๅฎไปฌๅนถไธๆฏ็ปไธไฝฟ็จๅไธๅฅ ABI ่ง่๏ผๅธธ่ง็่ง่ๆไปฅไธ่ฟไบ๏ผ

- cdecl
- syscall
- optlink
- pascal
- register
- stdcall
- fastcall
- thiscall
- winapi
- Intel ABI
- System V

ๅฅฝๅจ๏ผ่ฎก็ฎๆบไธญ C ่ฏญ่จๆฏๅบ็ณ๏ผๅฎๆไพไบๅคง้็ไปฃ็ ้ไบง๏ผRust ๅฏไปฅๅจ่ฟๆฅๅบ็ๅฑๆฌกไธ C ่ฏญ่จ็ธไบ่ฐ็จใ

ไพๅฆ๏ผ่ฐ็จ C ๆ ๅๅฝๆฐ๏ผRust ๆไพไบ็ธๅบ็ๅฎ็ฐ๏ผ้ป่ฎคไผ้พๆฅ libc ๅ libm ๆ ๅๅบ๏ผ

```rust,ignore
extern "C" {
    fn abs(input: i32) -> i32;
}

fn main() {
    unsafe {
        println!("Absolute value of -3 according to C: {}", abs(-3));
    }
}
```

่ฟ้็ extern "C" ไปฃ็ ๅๅฎไนไบๅค้จ่ฏญ่จ็ๅฝๆฐๅ่กจ๏ผ่ฟไบๅฝๆฐๆปๆฏ unsafe๏ผๅถไธญ "C" ่กจ็คบๅค้จ็จๅบ
ไฝฟ็จ็ ABI๏ผ่ฟ้่กจ็คบ็ๆฏ C ่ฏญ่จ่ง่ใ

ๅฆๆ๏ผ้่ฆไป C/C++ ่ฏญ่จไธญ่ฐ็จ Rust ๅฝๆฐ๏ผๅ้่ฆๆ ๆณจ `#[no_mangle]`๏ผไปฅ้ฟๅๅฝๆฐ่ขซๆนๅใMangling
ๆฏๅฏนๅๅฏน่ฑก่ฏญ่จ็ไธ็ง็ฌฆๅท้ๅฝๅ็นๆง๏ผๅ C++ ่ฟๆ ท็่ฏญ่จ๏ผ็ผ่ฏๆถไผๅฐๅฏน่ฑก็ๆนๆณๅ็งฐ่ฟ่ก่งๅ็็ๅฝๅใ
้ๅฝๅๅ๏ผๆ นๆฎๅฝๆฐๅ็งฐๅฐฑๅฏไปฅ็ฅ้่ฟไธชๅฝๆฐ็ญพๅไฟกๆฏ๏ผๅฆๆๅ ไธชๅๆฐ๏ผไปไนๅๆฐ็ฑปๅ็ญใ

```rust,ignore
#[no_mangle]
pub extern "C" fn call_from_c() {
    println!("Just called a Rust function from C!");
}
```

่ฐ็จๆ ๅ C ๅบๅฝๆฐ๏ผ้่ฆไฝฟ็จ `#[link(name = "libname")]` ๅตๅฅๅบๆไปถใ

- `#[link(name = "libname")]` Dynamic Library
- `#[link(name = "libname", kind = "static")]` Static Library
- `#[link(name = "libname", kind = "framework")]` MacOS Framework

ๅจ Rust ๅทฅ็จไธญๅๅปบ hello/hello.c ็ผๅ C ไปฃ็ ๏ผ็ผ่ฏ็ๆ้พๆฅๅบ hello.lib ๆ libhello๏ผ

```rust,ignore
#include <stdio.h> 

typedef struct {
    unsigned char a;
    int b;
} Object;

Object add(Object it){
    it.a++;
    it.b++;
    return it;
}

int greet(int it){
    // error LNK2019: unresolved external symbol printf
    // printf("Hello %d!\n", 2);
    printf("Hello from C!\n");
    return it + 1;
}
```

ๆณจๆ๏ผๅคดๆไปถไฝฟ็จ C++ ๅฝๅ่งๅๅฏ่ฝๅฏผ่ด Rust ๆ ๆณ้พๆฅ็จๅบ๏ผ

    #include <cstdio> 

    fatal error LNK1107: invalid or corrupt file: cannot read at 0x8

ๆต่ฏไปฃ็ ไฝฟ็จๅธฆๅๆฐ็ printf ไผๅฏผ่ด็ฌฆๅทๅคฑ่ธช๏ผไฝฟ็จ็ๆฏ MinGW GCC ็ผ่ฏๅจ๏ผๆช็ฅๅทไฝๅๅ ใ 

็ถๅๅจ Rust ไธป็จๅบ src/main.rs ๅผ็จไปฅไธ็ C ๅฝๆฐ๏ผ็ผ่ฏๆถไผๅผ็จ hello.lib ๅบไธญ็็ฌฆๅท๏ผ

```rust,ignore
use std::os::raw::c_int;

#[link(name = "hello")]
extern {
    fn add(it: RustObject) -> RustObject;
    fn greet(it: i32) -> c_int;
}

#[repr(C)]
#[derive(Debug, Clone)]
pub struct RustObject{
    a: u8,
    b: i32,
}

fn main() {
    unsafe {
        let mut it:RustObject = RustObject{a:255, b:1};
        let b = it.clone();
        println!("{:?} => {:?}", b, add(it));
        assert_eq!(2, greet(1));
    }
}
```

ไธบไบๆด่ชๅจๅไธ็น๏ผๅฏไปฅๅจๅทฅ็จ็ฎๅฝไธๅๅปบ build.rs ่ๆฌ่ฐ็จ C/C++ ็ผ่ฏๅฝไปค๏ผCargo ไผๆง่กๅฎ๏ผ

```rust,ignore
use std::env;
use std::process::Command;
use std::path::Path;

fn main() {
    let out_dir = env::var("OUT_DIR").unwrap();
    println!("cargo:rustc-link-search=native={}", out_dir);
    println!("cargo:rustc-link-lib=static=hello");
 
    Command::new("cc").args(&["hello/hello.c", "-O3","-c", "-fPIC", "-o"])
        .arg(&format!("{}/hello.o", out_dir))
        .status().unwrap();
 
    Command::new("ar").args(&["crus", "libhello.a", "hello.o"])
        .current_dir(&Path::new(&out_dir))
        .status().unwrap();
}
```

ๅถไธญ๏ผ`OUT_DIR` ๆฏ Rust ็ผ่ฏ่ชๅจ้็ฝฎ็็ฏๅขๅ้๏ผ่กจ็คบๅฝๅ็ผ่ฏ่พๅบ็ฎๅฝ๏ผๅจ Windows ๅนณๅฐไธ๏ผๅฏไปฅ
ๅฎ่ฃ MinGW GCC ็ผ่ฏๅทฅๅท๏ผไฝฟ็จ `gcc` ๅฝไปคๆฟๆข `cc` ๅฝไปค๏ผๅบๆไปถ่พๅบ `libhello.a` ๆ `hello.lib`ใ
ไนๅฏไปฅไฝฟ็จ cc crate ๆไพ็็ผ่ฏ่ฝๅ๏ผๅฎๅฏไปฅ็ผ่ฏ C/C++/assembly ็ๆๅบๆไปถไพ Rust ็จๅบไฝฟ็จใ

้่ฟๆๅฐๆ ๅ่พๅบ๏ผBuild scripts ๅฏไปฅไธ Cargo ้ไฟก๏ผๆๅฐ่พๅบๆ ผๅผ่ฆๆฑ `cargo:` ๅผๅคด๏ผ

- `cargo:rerun-if-changed=PATH` โ Tells Cargo when to re-run the script.
- `cargo:rerun-if-env-changed=VAR` โ Tells Cargo when to re-run the script.
- `cargo:rustc-link-lib=[KIND=]NAME` โ Adds a library to link, KIND can be `dylib`, `static`, or `framework`.
- `cargo:rustc-link-search=[KIND=]PATH` โ Adds to the library search path, KIND can be `dependency`, `crate`, `native`, `framework`, `all`.
- `cargo:rustc-flags=FLAGS` โ Passes certain flags to the compiler.
- `cargo:rustc-cfg=KEY[="VALUE"]` โ Enables compile-time cfg settings.
- `cargo:rustc-env=VAR=VALUE` โ Sets an environment variable.
- `cargo:rustc-cdylib-link-arg=FLAG` โ Passes custom flags to a linker for cdylib crates.
- `cargo:warning=MESSAGE` โ Displays a warning on the terminal.
- `cargo:KEY=VALUE` โ Metadata, used by links scripts.

Rust ๅจ OS ๆ ๅๅบ std::os::raw ๆไพไบ C ่ฏญ่จ็ๅ็งไธ็ฑปๅๅฎไน๏ผๅฏไปฅๅจๅฃฐๆ extern ๆฅๅฃๆถไฝฟ็จ๏ผ

- `c_char`  ็ญไปท `char`
- `c_double`    ็ญไปท `double`
- `c_float` ็ญไปท `float`
- `c_int`   ็ญไปท `signed int` (`int`)
- `c_long`  ็ญไปท `signed long `(`long`)
- `c_longlong`  ็ญไปท `signed long long` (`long long`)
- `c_schar` ็ญไปท `signed char`
- `c_short` ็ญไปท `signed short` (`short`)
- `c_uchar` ็ญไปท `unsigned char`
- `c_uint`  ็ญไปท `unsigned int`
- `c_ulong` ็ญไปท `unsigned long`
- `c_ulonglong` ็ญไปท `unsigned long long`
- `c_ushort`    ็ญไปท `unsigned short`

่ฟ Linux/Unix/Windows ๅนณๅฐๅทฎๅผ็นๆงๆจกๅใ

Rust ไธๆฏๆ C++ FFI ๆ ๆณ่ฐ็จ็ฑปๆ้ ๏ผ้่ฆ็ผๅ C ๆฅๅฃ็่ฝฌๆขๅฑ๏ผ็ถๅ็ปๅฎใ


Rust ๆฏไธ็ง็ฅๅฅ็่ฏญ่จ๏ผๆ็ๆดๅฅฝ็็ๆ็ณป็ปใ่ฎธๅค Rust ็่ฎพ่ฎกๅณ็ญ้ฝ้ๅธธ้ๅๅ็ฐๆ็ C/C++ ็ณป็ปๆทปๅ ๆฐๅ่ฝ๏ผๆ่้ๆญฅๆฟๆข่ฟไบ็ณป็ป็้จๅใ

่็ฐๆ็ไธไบไปฃ็ ไนๅฏไปฅ่ฟ่ก Binding ไปฅไปฃ Rust ่ฐ็จ๏ผๅฆ OpenGL ่ฟ็ฑป็ C/C++ APIใ

ๆไธไบไธ้็ๅทฅๅท๏ผๅฎไปฌๆๅฉไบๅๅฐๆ ทๆฟ๏ผๅนถ่ชๅจๅๅฎนๆๅบ้็็ฑปๅๅๅฝๆฐ็ปๅฎ๏ผๆฏๅฆ๏ผ

- `bindgen` automatically generates Rust FFI bindings to C (and some C++) libraries.
- `cbindgen` creates C/C++11 headers for Rust libraries which expose a public C API.
- `cpp` rust-cpp - Embed C++ code directly in Rust.

Rust ไธญไฝฟ็จ `cpp` crate ๅฎไน็ `cpp!` ๅฎๆฅๅตๅฅ C++ ไปฃ็ ๏ผๅฎ้่ฟ่ทๅๆๆ็ๅ่ C++ ไปฃ็ ๅนถๅฐๅถ
ๅๅฅไธไธชๅ็ฌ็ cpp ๆไปถๆฅๅฎ็ฐ่ฟไธ็น๏ผ่ฏฅๆไปถๅฐ่ขซ็ผ่ฏไธบ Rust crate ็ๆ็ป็ฎๆ ไปฃ็ ใ

ๅฝๅฐ Rust ๅบ็ปๅฎๅฐ C/C++ ๆถ๏ผๆ ธๅฟ้ป่พๅฑๅ FFI ๅฑไน้ดๅบ่ฏฅๅญๅจๆๆพ็ๅ็ฆปใๅจๅๅฅฝ็ๆๅตไธ๏ผFFI ไปฃ็ 
ๅบ่ฏฅไฝไบไธไธชๅ็ฌ็ crate ไธญ๏ผๅ ๆญค่ฎพ่ฎก Rust API ไธไผๅๅฐ FFI ็ๅคชๅคๅฝฑๅ๏ผๅนถไธ้ๆฉๅฏๅๆงไฟฎ้ฅฐ็ฌฆๅๅพๆดๅ ๅฎนๆใ


## โก Type Layout
- Type Layout https://doc.rust-lang.org/reference/type-layout.html
- Data Representation in Rust https://doc.rust-lang.org/nomicon/data.html
- The Rustonomicon - Data Layout https://doc.rust-lang.org/nomicon/repr-rust.html
- Rust's Unsafe Code Guidelines Reference https://rust-lang.github.io/unsafe-code-guidelines/introduction.html

็ฑปๅๅธๅฑ Type layout ๆฏๆ็ฑปๅๅจๅๅญๅญๅจ็็ธๅณไฟกๆฏ๏ผๅๆฌไปฅไธไธ้จๅๅๅฎน๏ผ

- size ๅคงๅฐ๏ผ่กจ็คบๅ ็จๅๅญๅญ่ๆฐใ
- alignment ๅฏน้ฝ๏ผ็จๅญ่ๆฐ่ฎก้๏ผๆๅฐๅผไธบ 1๏ผๆ 2 ๆฌกๆนๅขๅ ๏ผ่กจ็คบๅจๅๅญๅฐๅ็ๅผๅงไฝ็ฝฎ่ฆๆฑ๏ผๅฆ u32 ไธบ 4 bytes ๅฏน้ฝ๏ผๅถๅๅญๅฐๅๅฐฑ่ฆๆปก่ถณๆด้คไปฅ 4ใ
- relative offsets of fields ๅญๆฎตๅ็งป๏ผ็จๆทๅฎไน็ฑปๅ็ๅญๆฎต๏ผๅฆๆ่ฟ็ปญไฟๅญๆปก่ถณไธไบๅฏน้ฝ้ๆฑ๏ผๅ้่ฆไธไธชๅ็งปใ

ๆๆๅๅงๅผ็ฑปๅ้ฝๆฏ `Sized` ็ฑปๅ๏ผๅณๅบๅฎๅคงๅฐ๏ผไฝฟ็จ std::mem::size_of/size_of_val ๆนๆณๅฏไปฅ่ทๅๅถๅญ่ๆฐ๏ผ

    |     Type    | size_of::<Type>() |
    |-------------|-------------------|
    | bool        |                 1 |
    | u8 / i8     |                 1 |
    | u16 / i16   |                 2 |
    | u32 / i32   |                 4 |
    | u64 / i64   |                 8 |
    | u128 / i128 |                16 |
    | f32         |                 4 |
    | f64         |                 8 |
    | char        |                 4 |

่ `usize` and `isize` ่ฟไธคไธช็นๆฎไธ็น๏ผๅ็จๅบ่ฟ่กๆบๅจ็ๆๅคงๅฏปๅ่ฝๅ็ธๅณ๏ผๅฆ 32 bit ็ณป็ปๅฐฑๆฏ 4 bytes๏ผ่ๅจ 64 bit ็ณป็ปไธๅฐฑๆฏ 8 bytesใ

Rust ๆไพไบไปฅไธ็ปๅ็ฑปๅ๏ผ

- structs (named product types)
- tuples (anonymous product types)
- arrays (homogeneous product types)
- enums (named sum types -- tagged unions)
- unions (untagged unions)

ๅบๅฎ็ฑปๅไธญ๏ผๆไธ็ง็นๆฎๆๅฝข๏ผๅฐฑๆฏ้ถๅคงๅฐ็ฑปๅ ZST - Zero Sized Types๏ผ

```rust,ignore
enum Void {} // Empty Type

struct Nothing; // No fields = no size

// All fields have no size = no size
struct LotsOfNothing {
    foo: Nothing,
    qux: (),      // empty tuple has no size
    baz: [u8; 0], // empty array has no size
}
```

ๆๆ้ `Sized` ็ฑปๅ้ฝๆฏ DST - Dynamically Sized Types๏ผๅฏไปฅไฝฟ็จ `?Sized` ่กจ็คบใ

Rust ๆไพไปฅไธไธค็ง DST ็ฑปๅ๏ผ

- Trait Objects๏ผๅฆ `dyn MyTrait`ใ
- ๅ็็ฑปๅ๏ผๅฆ `[T]`, `str` ็ญใ

ไฝฟ็จ std::mem::align_of/align_of_val ๆนๆณๅฏไปฅ่ทๅๅ็ง็ฑปๅ็ๅฏน้ฝๅญ่ๆฐ๏ผๅคงๅคๆฐๅๅงๅผ็ฑปๅ้ฝๆๅฎไปฌ็ๅคงๅฐๅฏน้ฝ๏ผ่ฟๆฏ็ณป็ป่กไธบใ็นๅซๅฐ๏ผๅจ x86 ็ณป็ป๏ผu64 ๅ f64 ๆ 32 bits ๅณ 4 ๅญ่ๅฏน้ฝใ

็ฐไปฃ่ฎก็ฎๆบๅๅญ็ฉบ้ดไปฅๅญ่ไธบๅบๆฌๅไฝ๏ผ็่ฎบไธๅฏไปฅไปไปปไฝๅฐๅๅผๅง่ฎฟ้ฎๆฐๆฎ๏ผไฝๅฎ้่่่ฏปๅๆ็๏ผๅจ่ฎฟ้ฎ็นๅฎ็ฑปๅๅ้็ๆถๅ็ปๅธธๅจ็นๅฎ็ๅๅญๅฐๅ่ฎฟ้ฎ๏ผ่ฟๅฐฑ้่ฆๅ็ง็ฑปๅๆฐๆฎๆ็งไธๅฎ็่งๅๅจ็ฉบ้ดไธๆๅ๏ผ่ไธๆฏ้กบๅบ็ไธไธชๆฅไธไธช็ๆๆพ๏ผ่ฟๅฐฑๆฏๅฏน้ฝใ

ๅถๅฎไธไบ็ฑปๅๅธๅฑ๏ผ

- ๆ้ๅๅผ็จๆ็ธๅ็ๅธๅฑ๏ผๅผ็จๅบๅฎๅคงๅฐ็ฑปๅ๏ผๅๅธๅฑ็ญๅไบ usizeใๅผ็จ DST ็ฑปๅ๏ผๅๅธๅฑๆฏ usize ็ๅๅๅคงๅฐ๏ผๅณ่ๆ้ใ
- Array Layout ๆฐ็ปๅ็ด ๅทๆ็ธๅ็ฑปๅ๏ผๅฏนไบๆฐ็ป [T; n] ๅคงๅฐไธบ size_of::<T>() * n๏ผๅฏน้ฝ็ญๅ Tใ
- Slice Layout ๅ็็ฑปๅๅธๅฑ็ญๅๆฐ็ปๅ็้จๅ๏ผๆณจๆๆฏๅผ็ฑปๅ [T] ไธๆฏๅผ็จ &[T], Box<[T]>...
- str Layout ๅญ็ฌฆไธฒๅ็ๆฏ UTF-8 ๅญ็ฌฆไธฒ๏ผๆฐๆฎ็ฑปๅๆฏ [u8]๏ผๆฏไธชๅ็ด ็ๆฐๆฎ็ฑปๅไธบ u8๏ผๆไปฅ็ฑปๅๅธๅฑไน็ญๅ u8ใ
- Tuple Layout ๆ ็ป็ฑปๅๆฒกๆๅธๅฑ่งๅไฟ่ฏ๏ผ้คๅไฝๅ็ป `()` ๅค๏ผๅฎๆฏ Zero-sized ็ฑปๅ๏ผๅฏน้ฝไธบ 1 ๅญ่ใ
- Trait Object Layout ็ญๅ Trait ๅฏน่ฑกๅผๆฌ่บซ๏ผๆณจๆๆฏๅฏน่ฑกไธๆฏๅผ็จ (`&dyn Trait`, `Box<dyn Trait>`, etc.)ใ
- Closure Layout ้ญๅๆฒกๆๅธๅฑ่งๅไฟ่ฏใ

ๆๆ็จๆทๅฎไน็ฑปๅ structs, enums, unions ๅฏไปฅ้่ฟ Data Representation ๆฐๆฎ่กจ่พพๆฅๆๅฎ็ฑปๅๅธๅฑ๏ผๆๅ็ฑปๅธๅฑ่กจ่พพ๏ผ

- ้ป่ฎค็ Rust ๆฐๆฎ่กจ่พพ๏ผไธไฝฟ็จ repr ๆ ๆณจใ
- ๅผๅฎน C ่ฏญ่จ็ๆฐๆฎ่กจ่พพ `#[repr(C)]`
- ๅๅง็ฑปๅ่กจ่พพ๏ผๅฆ `#[repr(usize)]`ใ
- ้ๆ่กจ่พพ `#[repr(transparent)]` ๅชๆๅไธช้้ถๅคงๅฐๅญๆฎต็ struct ๆ enum ไฝฟ็จ๏ผๆ่ๅฏน้ฝไธบ 1 ๅญ่็ Zero-sized ๅญๆฎต๏ผๅฆ PhantomData<T>ใ

ๅถไธญ๏ผC ๆฐๆฎ่กจ่พพๅผๅฅ็็ฎ็ๆไธคไธช๏ผไธๆฏไธบไบๅ C ่ฏญ่จไบคไบ๏ผไบๆฏๅๅปบ็ฑปๅ๏ผไปฅๅจ่ฟไบ็ฑปๅไธๅฏ้ ๅฐๆง่กไพ่ตไบๆฐๆฎๅธๅฑ็ๆไฝ๏ผไพๅฆๅฐๅผ้ๆฐ่งฃ้ไธบไธๅ็็ฑปๅใ

้่ฟๆๅฎ alignใpacked ๆฅๆฌๅใ้ไฝ structs ๅ unions ็ๅฏน้ฝ๏ผpacked ่ฟๅฏไปฅๅๆดๅญๆฎต้ด็ๅกซๅใๅฏนไบไธไธช็จๆทๅฎไน็ฑปๅ๏ผๅฏน้ฝๅๅผไบๅ ็จๅญ่ๆๅคง็ๅญๆฎต๏ผๅฆๆ align ๆๅฎไบไธไธชๅฐไบๅฎๅฎ้ๅฏน้ฝ็ๅผ๏ผๅๆ ๆใๅฆๆ packed ๆๅฎ็ๅผๅคงไบๅฎ้ๅฏน้ฝๅผ๏ผๅๆ ๆใalign ๅ packed ๅชๅฏไปฅ็จไบ้ป่ฎค็ Rust ๆฐๆฎ่กจ่พพๅ C ่ฏญ่จๆฐๆฎ่กจ่พพใ

้่ฟ `#[repr(align(x))]` or `#[repr(packed(x))]` ๆๅฎๅทไฝๅผ๏ผไธๅๅผ่ๅด [1, 2^29]ใๅฏนไบ packed ๆๅฎๆนๅผ๏ผๅฏไปฅ็็ฅๆฐๅผ่กจ็คบ 1 ๅญ่ๅฏน้ฝ `#[repr(packed)]`ใ


ๆๅฎ union ็ฑปๅ็ๆฐๆฎ่กจ่พพ๏ผ

```rust,ignore
#[repr(C)]
union Union {
    f1: u16,
    f2: [u8; 4],
}

assert_eq!(std::mem::size_of::<Union>(), 4);  // From f2
assert_eq!(std::mem::align_of::<Union>(), 2); // From f1

#[repr(C)]
union SizeRoundedUp {
   a: u32,
   b: [u16; 3],
}

assert_eq!(std::mem::size_of::<SizeRoundedUp>(), 8);  // Size of 6 from b,
                                                      // rounded up to 8 from
                                                      // alignment of a.
assert_eq!(std::mem::align_of::<SizeRoundedUp>(), 4); // From a
```

ๅฏไปฅ็ปๅ C ๅๅๅง็ฑปๅๆฐๆฎ่กจ่พพ๏ผ

```rust,ignore
enum EnumDefault {
    Variant0(u8),
    Variant1,
}

#[repr(C)]
enum EnumC {
    Variant0(u8),
    Variant1,
}

#[repr(C, u8)]
enum Enum8 {
    Variant0(u8),
    Variant1,
}

#[repr(C, u16)]
enum Enum16 {
    Variant0(u8),
    Variant1,
}

// One byte for Variant0 and one byte for Variant1
assert_eq!(std::mem::size_of::<EnumDefault>(), 2);
// The size of the C representation is platform dependant
assert_eq!(std::mem::size_of::<EnumC>(), 8);
// One byte for the discriminant and one byte for the value in Enum8::Variant0
assert_eq!(std::mem::size_of::<Enum8>(), 2);
// Two bytes for the discriminant and one byte for the value in Enum16::Variant0
// plus one byte of padding.
assert_eq!(std::mem::size_of::<Enum16>(), 4);
```

ๅฏนไบๅไธไธช็ปๆไฝ๏ผC ๆฐๆฎ่กจ่พพๅ Rust ้ป่ฎคๆฐๆฎ่กจ่พพๅทฎๅซๅจไบ๏ผๅ่็ฑปๅๅธๅฑๆฏๆๅญๆฎต้กบๅบไฟๅญ็๏ผๅ่ๅไผ่ฐๆดๅญๆฎต้กบๅบ่ฟ่กไผๅๅๅฐๅๅญ๏ผ

```rust,ignore
#[repr(C)]
pub struct RustObject{
    a: i8,
    b: i8,
    c: i32,
    d: i32,
}

let o = RustObject{a:1, b:2, c:3, d:4}; 
assert!(12, std::mem::size_of_val(&o));
//                         #[repr(C)]       Default
println!("{:p}", &o);   // 0x8d8358f6d8     0x70a66ff8c8
println!("{:p}", &o.a); // 0x8d8358f6d8     0x70a66ff8d0
println!("{:p}", &o.b); // 0x8d8358f6d9     0x70a66ff8d1
println!("{:p}", &o.c); // 0x8d8358f6dc     0x70a66ff8c8
println!("{:p}", &o.d); // 0x8d8358f6e0     0x70a66ff8cc
```

ๅฏนไบๅๆ ท็็ฑปๅ๏ผๅถๅคงๅฐๅๅฏน้ฝ้ฝๆฏไธๆ ท็๏ผไปฅไธ็็ปๆไฝๆๆๅคง็ๅญๆฎต i32 ๅณ 4 ๅญ่ๅฏน้ฝ๏ผไธคไธช i8 ็ฑปๅๅญๆฎต roundup ไธบไธไธช i32๏ผๆไปฅๆดไธช็ปๆไฝๅคงๅฐไธบ 12 bytes๏ผไฝๆฏ i8 ๆฐๆฎ็ฑปๅๆฌ่บซๆ 1 ๅญ่่ฟ่กๅฏน้ฝใ

ๅฏไปฅ่งๅฏๅฐ๏ผๅจ `#[repr(C)]` ๆนๅผไธญ๏ผๅญๆฎต b ๅฐ c ็้ด้ๆฏ 3 ไธชๅญ่๏ผi8 ๆฌ่บซๅ  1 ไธไธชๅญ่๏ผ่ๅฆๅค 2 ไธชๅญ่ๅฐฑๆฏๅญๆฎต c ็ๅ็งป๏ผ่ฟๆฏไธบไบ็กฎไฟ i32 ็ฑปๅๅญๆฎตๅฏน้ฝๅฐ 4 ๅญ่็ๅๅญๅฐๅไธใ

ๅ็งป่ฎก็ฎ่งๅๆฏๆๅญๆฎต้กบๅบ่ฎก็ฎ็๏ผ้ฆๅ๏ผๅๅงๅ็งปไธบ 0๏ผๅ็กฎๅฎๅฝๅๅญๆฎต็ๅคงๅฐๅๅฏน้ฝ๏ผๅฆๆๅฝๅๅ็งปไธๆฏๅฝๅๅญๆฎตๅฏน้ฝ็ๆดๆฐๅ๏ผๅๅกซๅๅญ่ไฝฟๅถไธบๆดๆฐๅใๅกซๅๅญ่ๆฐๆฎ็ดฏๅ ๅฐๅ็งปๅผไธ๏ผ้ฃไนๅฝๅ็ๅ็งปๅผๅฐฑๆฏๅฝๅๅญๆฎต็ๅ็งปๅผ๏ผ็ถๅๅฐๅฝๅๅญๆฎต็ๅคงๅฐ็ดฏๅ ๅฐๅ็งปๅผไธ๏ผๅถๅฎๅญๆฎตไพๆ ทๅค็ใ


## โก Advanced traits
- Traits Defining Shared Behavior https://doc.rust-lang.org/book/ch10-02-traits.html
- Advanced Traits https://doc.rust-lang.org/book/ch19-03-advanced-traits.html
- The Iterator Trait and The Next Method https://doc.rust-lang.org/book/ch13-02-iterators.html

้ๆฅ็่ฟญไปฃๅจ Trait ็ๅฎไน๏ผ

```rust,ignore
pub trait Iterator {
    type Item;

    fn next(&mut self) -> Option<Self::Item>;
}
```

่ฟ้็ Item ๆฏไปไน็ฑปๅๅข๏ผไธ็ฅ้๏ผๅ ไธบๆฒกๆๅๆณๆฏไปไน็ฑปๅๅจไฝฟ็จ่ฟญไปฃๅจ๏ผ่ฟไธช็ฑปๅๅฐฑๅซไฝ Associated types๏ผๅบ็ฐๅจ่ฟไธชไฝ็ฝฎๅฐฑๅซๅๅ ไฝ๏ผไนๅชๅฏไปฅๅซไฝ placeholder typeใๅฐฑๆฏๅๅ ไธช็ฑปๅไฝ็ฝฎ๏ผ็ญๅฐๅทไฝ็ฑปๅ่ฐ็จๆถๅฐฑ็จๅฎ็ฐ็็ฑปๅๅกซ่ฟๆฅใๆไปฅ็ฐๅจไธ้่ฆๅณๅฟๅฎๅทไฝๆฏไปไน็ฑปๅ๏ผ่ฐ็จ `next()` ๆนๆณๅ๏ผ้่ฟ Option ๆไธพ็ฑปๅๅ่ฃๅทไฝ็ๅผใ

ไฝฟ็จๆณๅๅๆฐ๏ผๅฏไปฅ็ป่ฟไธชๆณๅ่ฎพ็ฝฎ้ป่ฎค็ฑปๅ๏ผๅ่ๅฆๅ็ฝฎ็ + ๆไฝ่ฟ่ก็ฌฆๅทๅฎไน๏ผ

```rust,ignore
trait Add<Rhs=Self> {
    type Output;

    fn add(self, rhs: Rhs) -> Self::Output;
}
```
Rhs ่กจ็คบ Right hand side๏ผๅณๅณๅผ็ฑปๅ๏ผ่ฟไธชๆ ผๅผ `<T=SomeType>` ไนๅซๅ default type parametersใ

ไปฅไธ็คบ่ๅฎ็ฐ Millimeters + Meters ่ฟ็ฎ๏ผ

```rust,ignore
use std::ops::Add;

struct Millimeters(u32);
struct Meters(u32);

impl Add<Meters> for Millimeters {
    type Output = Millimeters;

    fn add(self, other: Meters) -> Millimeters {
        Millimeters(self.0 + (other.0 * 1000))
    }
}
assert_eq!((Millimeters(1000) + Meters(1001)).0, 1002000);
dbg!((Millimeters(1000) + Meters(1001)).0);
```

้ป่ฎค็ฑปๅๅๆฐไธป่ฆ็็จ้๏ผ

- ๆฉๅฑ็ฑปๅ่ๆ ้็ ดๅ็ฐๆไปฃ็ ๏ผ
- ๅฎๅถ้ๅธธ็จ็็นๆฎๅ่ฝ๏ผ

```rust,ignore
trait Add<Rhs=Self> {
    type Output;

    fn add(self, rhs: Rhs) -> &'static str;
}

impl Add<Self> for bool {
    type Output = bool;
    fn add(self, other: Self) -> &'static str {
        if self && other { "TT" } else { "FF" } 
    }
}
println!("Boolean + {}", true.add( true));
```

Rust ๅ่ฎธๅฏน่ฑกๅฎ็ฐๅคไธช Trait ไธๅฎไปฌๆ็ธๅ็ๆนๆณๅฎไน๏ผๅๆถไนๆไพไบๆถ้คๆญงไน็่ฐ็จ่ฏญๆณ๏ผๅๆถๅคๆๆบๅถไนๅฎๅจไฝ็ฐๅจ็ฑปๅๅฃฐๆไธญ๏ผ

```rust,ignore
trait Pilot {
    fn fly(&self);
}

trait Wizard {
    fn fly(&self);
}

struct Human;

impl Pilot for Human {
    fn fly(&self) {
        println!("This is your captain speaking.");
    }
}

impl Wizard for Human {
    fn fly(&self) {
        println!("Up!");
    }
}

impl Human {
    fn fly(&self) {
        println!("*waving arms furiously*");
    }
}

let person = Human;
person.fly();           // Human fly()
Pilot::fly(&person);    // Pilot fly()
Wizard::fly(&person);   // Wizard fly()

wizard_fly(&person);
pilot_fly(&person);

fn wizard_fly(it: &impl Wizard) {
    it.fly();
}
fn pilot_fly(it: &dyn Pilot) {
    it.fly();
}
```

ๅๆฅ็ไธ้ข็ไพๅญๆฉๅฑ๏ผ

```rust,ignore
trait Super: Pilot + Wizard { }

impl Super for Human {}

fn super_fly(it: &dyn Super) {
    // multiple applicable items in scope
    // it.fly(); it can't fly
}
```
ๅฆๆไธบ Human ๅฎ็ฐไธไธช Super Trait ๅฎๅๆถ็ปงๆฟ Pilot + Wizard๏ผ้ฃไนๅ้่ฟ Super ่ฐ็จ `fly()` ๆนๆณๅฐฑไธ่กไบ๏ผๅ ไธบๆญงไนๆถ้คไธไบ๏ผ็ผ่ฏๅจไธ็ฅ้่ฆๆง่กๅชไธชๆนๆณใ

ๅฆๆ๏ผๅคๆๅๆญงๅ็ๅจ้ๆๆนๆณไธญ๏ผ้ฃไนๅฐฑ้่ฆๅฏน็ฑปๅไฝๆณๅ่ฝฌๆขๆณจ่งฃ๏ผ

```rust,ignore
trait Animal {
    fn baby_name() -> String;
}

struct Dog;

impl Dog {
    fn baby_name() -> String {
        String::from("Spot")
    }
}

impl Animal for Dog {
    fn baby_name() -> String {
        String::from("puppy")
    }
}

println!("A baby dog is called a {}", Dog::baby_name());
println!("A baby dog is called a {}", <Dog as Animal>::baby_name());
```

ๅ ไธบ Trait ๆฏไธ่ฝไฝไธบๅทไฝ็ฑปๅๆฅๆง่กๆนๆณ็๏ผๅฆ `Animal::baby_name()` ่ฟ็ง่กไธบๆฏไธ่ฝๅฎ็ฐ็๏ผๅฎ็ฐ Animal ็็ฑปๅๅฏไปฅๆไธๅคงๅ ๏ผ่ฟ็ง่ฏญๆณ็ปๆๆ ๆณ่ฎฉ็ผ่ฏๅจ็ฅ้ๅจ่ฐ็จๆนๆณใ

็ฑปๅๆณจ่งฃ่ฏญๆณๆ ผๅผๅฆไธ๏ผ

    <Type as Trait>::function(receiver_if_method, next_arg, ...);

Trait ็็ปงๆฟๅณ็ณปๅฏไปฅๅฐๅถๅฎ Trait ่กไธบๅผ็จ่ฟๆฅ๏ผๅๅซๅถๅฎ Trait ๅ่ฝ็ไนๅซๅ Supertraitsใ

ๅจๅฎๆนๆๆกฃไธญๅนถๆฒกๆ็จ็ปงๆฟ่ฟไธช่ฏๅปๆ่ฟฐ๏ผ่ฟไธช่ฏไนไธๆฐๅฝ๏ผๅ ไธบ Trait ็่ฟ็งๅณ่ๆฏไธ็ง็ปๅ็บฆๆ๏ผๅนถไธๅ C++ ้ฃๆ ท็็ฑปๅไน้ด็็ปงๆฟ๏ผ

```rust,ignore
use std::fmt;

struct Point {
    x: i32,
    y: i32,
}

impl fmt::Display for Point {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "({}, {})", self.x, self.y)
    }
}

impl OutlinePrint for Point {}

trait OutlinePrint: fmt::Display {
    fn outline_print(&self) {
        let output = self.to_string();
        let len = output.len();
        println!("{}", "*".repeat(len + 4));
        println!("*{}*", " ".repeat(len + 2));
        println!("* {} *", output);
        println!("*{}*", " ".repeat(len + 2));
        println!("{}", "*".repeat(len + 4));
    }
}

Point{ x:0, y:0 }.outline_print();
```

ๅ้ข่งฃๆ้่ฝฝๆถ๏ผๆๅฐไธๅฏไปฅไธบ็ฌฌไธๆน Crate ๅฎ็ฐ็ฌฌไธๆน็ Trait๏ผ่ฟ้ฟๅไบไพตๅฅๅผไปฃ็ ๆฅ็ ดๅ็ฐๆ็ไปฃ็ ใ

ไฝๆฏ๏ผๆๆถๅ็ฌฌไธๆนๆไพ็ๅฏน่ฑกๅ่ฝ็กฎๅฎ้่ฆ่ฟ่กไฟฎๆนไปฅ้ๅบ้่ฆ๏ผไพๅฆ Rust ๅนถๆฒกๆๆไพ Vec[T] ็ฑปๅ็ Display ๅ่ฝใ

่ฟๅฐฑ้่ฆๅ้็ๆนๆณๆฅ็ฎๆฏ๏ผๅฏไปฅๅผๅฅ Newtype ่ฟ็ง็ฑปๅๅ่ฃๆๆฏ๏ผๅฎๆบไบ Haskell ็ผ็จ่ฏญ่จ๏ผไฝฟ็จๆญคๆจกๅผไธไผๅฏน่ฟ่กๆถๆง่ฝ้ ๆไปปไฝๆๅคฑ๏ผๅนถไธๅจ็ผ่ฏๆถๅฐ็็ฅๅ่ฃๅจ็ฑปๅใ

```rust,ignore
use std::fmt;

struct Wrapper(Vec<String>);

impl fmt::Display for Wrapper {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "[{}]", self.0.join(", "))
    }
}

let w = Wrapper(vec![String::from("hello"), String::from("world")]);
println!("w = {}", w);
```


## โก Advanced types
- Dynamically Sized Types and the Sized Trait https://doc.rust-lang.org/book/ch19-04-advanced-types.html
- Rc - Reference Counted https://doc.rust-lang.org/stable/std/rc/index.html
- Box - heap allocation https://doc.rust-lang.org/stable/std/boxed/index.html

The Never Type that Never Returns ๆฐธ่ฟไธ่ฟๅ็็ฑปๅ๏ผ

Rust ๆ็นๆฎ็็ฑปๅๅคงๆฆๆฏ Never `!` ่ฎฐไธ่ฟๅ็ฑปๅ๏ผ่ฟไธช่ฆๆฆๅฟตๆบ่ช lingo ็ฑปๅ็่ฎบ๏ผๅฎๆฏไธไธชๆฒกๆๅผ็็ฑปๅ๏ผๅจ TypeScript ่ฟไบ็ฐไปฃ่ฏญ่จไธญไนๆใ

ไธไธช่ฟๅ Never ็ฑปๅ็ๅฝๆฐๅฎไน็คบ่๏ผ

```rust,ignore
fn bar() -> ! {
    // --snip--
}
```

่ฟไธชไปฃ็ ็ๆๆๅฐฑๆฏไธไธช่ฟๅ Never ็ `bar()` ๅฝๆฐ๏ผๆฐธไธ่ฟๅ็ๅฝๆฐๅซๅๅๆฃๅฝๆฐ diverging functions๏ผ็จๆๅนๅท่กจ็คบๅ ไธบๅฎๆฒกๆๅผใ

ๆ ้ๅพช็ฏ็ๅฝๆฐไฝไนๆ ๆณ่ฟๅๅผ๏ผๅณ่ฟๅ neverใ

ๅๅฐๅๅผๅง็็ๆฐๅญๆธธๆ๏ผๅถไธญ้่ฟ `math` ๅน้่พๅฅๅผ็่ฏญๅฅไธญๅฐฑๆถๅไบ Never ็ฑปๅ๏ผ

```rust,ignore
let guess: u32 = match guess.trim().parse() {
  Ok(num) => num,
  Err(_) => continue,
};
```

ๅถไธญ๏ผcontinue ็ดๆฅๆงๅถไบๆต็จ่ทณ่ฝฌ๏ผๆไปฅ้่ฟ `parse()` ๅฝๆฐ่งฃๆ็ๅผๅนถๆฒกๆ่ฟๅ็ป guess ๅ้๏ผ่ฟๅฐฑๆฏ Never ็ฑปๅใๅฆๆๅฐ continue ๆฟๆขๆๅถๅฎๆฐๆฎ็ฑปๅ่ฟๅๅไธ่ก๏ผๅ ไธบ guess ๅฎไน็ๆฏ u32 ๆฐๅผ็ฑปๅใๅณ `match` ๅฟ้่ฟๅๅไธ็ฑปๅ๏ผๅนถไธ `impl trait` ่ฟๆ ท็่ฏญๆณๆ ๆณๅจ่ฟ็ง่ฏญๅขไธญไฝฟ็จใ

Never ็ฑปๅ้ๅธธๅ `panic!` ๅฎไธ่ตทไฝฟ็จ๏ผOption<T> ็ `unwrap()` ๆนๆณๅฐฑไฝฟ็จไบๅฎไปฌ๏ผ

```rust,ignore
impl<T> Option<T> {
    pub fn unwrap(self) -> T {
        match self {
            Some(val) => val,
            None => panic!("called `Option::unwrap()` on a `None` value"),
        }
    }
}
```
ๅฆๆๅฏนไธไธช None ๅผๆง่ก `unwrap()` ๅฐฑไผๅฏผ่ด็จๅบไธ็ฅ้่ฏฅๆไน่ตฐไธไธๆญฅ็็ถๅตใ


Creating Type Synonyms with Type Aliases

ไฝฟ็จ็ฑปๅๅซๅไปฅๅๅฐ้ๅคไปฃ็ ๏ผ่ฟๆฏ็ฑปๅๅซๅ็ไธป่ฆ็จ้๏ผ

```rust,ignore
type Kilometers = i32;

let x: i32 = 5;
let y: Kilometers = 5;

println!("x + y = {}", x + y);
```

ไปฅไธๅชๆฏๆผ็คบๅฆไฝไฝฟ็จๅซๅ๏ผ่่ไปฅไธ่ฟๆ ท็็ฑปๅ๏ผ

    Box<dyn Fn() + Send + 'static>

ๅฆๆๆฏไธ่กไปฃ็ ้ฝ้่ฆ่ฟไธช็ฑปๅ๏ผ้ฃไนๅฎไนๅซๅๅฐฑๆฏไธชๅฅฝไธปๆ๏ผ

```rust,ignore
type Thunk = Box<dyn Fn() + Send + 'static>;

let f: Thunk = Box::new(|| println!("hi"));

fn takes_long_type(f: Thunk) {
    // --snip--
}

fn returns_long_type() -> Thunk {
    // --snip--
}
```

ๅจ Rust ๅ้จ๏ผๅฝๆฐ่ฟๅๅผไฝฟ็จ็ๆฏ `Result<T, E>` ๆไธพ็ฑปๅ๏ผๅจ std::io ๆจกๅไธญ๏ผๆณๅๅๆฐ E ๆฏๆ std::io::Error๏ผ้ฃไนๅจไฝฟ็จ io ๅฝๆฐๆถๅฐฑๅฏไปฅๅฎไน็ฑปๅๅซๅๆฅ็ฎๅไปฃ็ ๏ผ

```rust,ignore
type Result<T> = std::result::Result<T, std::io::Error>;

pub trait Write {
    fn write(&mut self, buf: &[u8]) -> Result<usize>;
    fn flush(&mut self) -> Result<()>;

    fn write_all(&mut self, buf: &[u8]) -> Result<()>;
    fn write_fmt(&mut self, fmt: fmt::Arguments) -> Result<()>;
}
```

ๅจๆๅคงๅฐ็ฑปๅ DST - Dynamically Sized Types๏ผๅฆๅญ็ฌฆไธฒๅ็็ฑปๅ `str`๏ผๅฎๆฌ่บซๆฏ `[u8]`ใ็ฑปไผผ็่ฟๆๅถๅฎ็ `[T]` ๅ็็ฑปๅไนๆฏ DST ็ฑปๅ๏ผๅๆฌ Trait ้ฝๆฏ๏ผ

```rust,ignore
dbg!(size_of::<&u32>());        // 8
dbg!(size_of::<&[u32; 2]>());   // 8
dbg!(size_of::<&[u32]>());      // 16
dbg!(size_of::<&str>());        // 16
```

DST ็ฑปๅไธ่ฝ็ดๆฅไฝไธบๅๆฐไฝฟ็จ๏ผไปฅไธ่ฟ็งๅฐฑไธ่ฝ้่ฟ็ผ่ฏ๏ผ

```rust,ignore
// doesn't have a size known at compile-time
let s1: str = "Hello there!";
let s2: str = "How's it going?";
```

ๆณจๆ `&str` ๅผ็จๆฏๅบๅฎๅคงๅฐ็๏ผๅฎๆฏ่ๆ้ไธไธช๏ผRust ๅญ็ฌฆไธฒๅญ้ข้ๆฏ `&str` ็ฑปๅ๏ผๅ็กฎๅฐ่ฎฒๆฏ `&'static str`ใ

ๅฆๆ `str` ๆฏๅบๅฎๅคงๅฐ็็ฑปๅ๏ผ้ฃไน s1 ๅฐฑไผๅ s2 ๆฅๆๅๆ ทๅคงๅฐ็ๅๅญ็ฉบ้ด๏ผ่ฟๆพ็ถๆฏไธ่ฝๆ็ซ็ใ่ `&str` ๅผ็จ็ฑปๅๅไธๅ๏ผๅฎไฝไธบไธไธช่ๆ้๏ผไธไปๆๆฐๆฎๅญๅจๅๅญ็ฉบ้ด็ๆ้๏ผ่ฟๆๆฐๆฎ็ๅคงๅฐไฟกๆฏใ

็ฑปไผผ็ๅณ็ณป่ฟๅบ็ฐๅจๅ็็ฑปๅ `Stirng` ่บซไธ๏ผๅญ็ฌฆไธฒ็ฑปๅ็ๆฐๆฎๅจๅๅญไธญไปฅ  `[u8]` ๅ็็ฑปๅๅฝขๅผๅญๅจ๏ผๅฐฑๅ str ็ฑปๅไธๆ ท๏ผๅ็็ฑปๅๆฌ่บซไธ่ฝๅจ็ผ่ฏๆ็กฎๅฎๅคงๅฐใ

```rust,ignore
let a:String = "Hello";
// doesn't have a size known at compile-time
let slice = a[..];
```

่ฟไบ็ผ่ฏๆๆ ็กฎๅฎๅคงๅฐ็็ฑปๅ้่ฆไฝฟ็จๆ้ๆถ๏ผๅฐฑไธ่ฝ็จๅธธ่งๆ้๏ผๅ ไธบๅฎไปฌ่ฟๆถๅ้ขๅค็ๅคงๅฐไฟกๆฏ๏ผๅฏไปฅ็จ็ฑปไผผไปฅไธ็็ปๆ่กจ่พพ๏ผ

```rust,ignore
struct FatPointer { 
    ptr: *const u32, 
    len: usize,
}
```

ๅ ไธบๆฏๆฎ้ๆ้็ไธๅๅคง๏ผๆไปฅไนๅซไฝ fat pointer๏ผๅคๅบๆฅ็็ฉบ้ดๆฏ็จๆฅไฟๅญ้ฟๅบฆไฟกๆฏใ

ๅฆไธ็งๅธธ่ง็ๅจๆ็ฑปๅๅฐฑๆฏ Trait Object๏ผ็ฑปๅๅฃฐๆๅฝขๅผไธบ `dyn Trait`๏ผ้ๅญฆ้่ฆไฝฟ็จๅผ็จ `&dyn Trait` ๆ่ๆบ่ฝๆ้่ฟ่กๅ่ฃ `Box<dyn Trait>`ใ`Rc<dyn Trait>`ใ

ไปฅไธๆฏ่ฟไบๅธธ่ง DST ็ฑปๅ็ๆบ่ฝๆ้่กจ่พพ๏ผ

- `Box<str>`
- `Rc<str>`
- `Box<dyn Trait>`
- `Rc<dyn Trait>`

ๅฎไปฌ้ฝๆฏๅญๅจๅจ Heap ๅๅญไธญ็๏ผRc - Reference Counted ๆฏๅผ็จ่ฎกๆฐ๏ผ็จๆท่ชๅฎไน็่ตๆบๅๆถๆธ็ใ

ไธบไบๆดๅฅฝๅฐๅบๅซ DST ็ฑปๅ๏ผRust ไผ้ป่ฎคๅฐๅๆณๅๅฝๆฐๆทปๅ ้ๅซ็ `Sized` trait ็ปๅฎ๏ผๆฅๅฃฐๆๆณๅๅๆฐๆฏ็ผ่ฏๆๆ็กฎๅคงๅฐ็๏ผๅฏนไบไปฅไธ่ฟไธชๆณๅๅฝๆฐ๏ผ

```rust,ignore
fn generic<T>(t: T) {
    // --snip--
}
```

ๅฎ็ๅฎ้ๅฝขๅผๅฆไธ๏ผ

```rust,ignore
fn generic<T: Sized>(t: T) {
    // --snip--
}
```

ๅฏนไบ DST ๆณๅๅๆฐ็ฑปๅ๏ผไฝฟ็จ `?Sized` ่กจ็คบ๏ผ

```rust,ignore
fn generic<T: ?Sized>(t: &T) {
    // --snip--
}
```

Trait ็ปๅฎ `?Sized` ๅ๏ผๅฐฑ่กจ็คบไธไธช DST ็ฑปๅ๏ผๅณๆณๅๅๆฐ T ๅฏไปฅๆฏใไนๅฏไปฅไธๆฏ Sized ็ฑปๅ๏ผ่ฟ็ง่ฏญๆณๅชๅฏนไบ Sized Trait ็ปๅฎๆๆใ


<!-- ๅบๅฎๅคงๅฐ็ Sized Trait๏ผ -->


## โก Closures ้ญๅ
- https://doc.rust-lang.org/rust-by-example/fn/closures.html
- https://doc.rust-lang.org/stable/std/ops/trait.Fn.html
- https://doc.rust-lang.org/stable/reference/types/closure.html
- [Finding Closure in Rust](https://huonw.github.io/blog/2015/05/finding-closure-in-rust/)
- [Functional Language Features: Iterators & Closures](https://doc.rust-lang.org/book/ch13-00-functional-features.html)
- [Closures: Anonymous Functions that Can Capture Their Environment](https://doc.rust-lang.org/book/ch13-01-closures.html)
- [Advanced Functions and Closures](https://doc.rust-lang.org/book/ch19-05-advanced-functions-and-closures.html)
- [Why Rust Closures are Hard](https://stevedonovan.github.io/rustifications/2018/08/18/rust-closures-are-hard.html)
- [Higher-Rank Trait Bounds (HRTBs)](https://doc.rust-lang.org/nomicon/hrtb.html)

ๅฝๆฐๅฏไปฅ็จๆ้่ฐ็จ๏ผๅณๅฝๆฐๅฏไปฅๅๆฎ้ๅ้ไธๆ ทไผ ้๏ผ

```rust,ignore
fn add_one(v: i32) -> i32 {
    v + 1
}

fn do_twice(f: fn(i32) -> i32, v: i32) -> i32 {
    f(v) + f(v)
}

fn main() {
    let answer = do_twice(add_one, 5);
    print!("answer is {}", answer);
}
```

ไธ้ญๅไธๅ๏ผๅณ้ฎๅญ `fn` ๆฏๅฎไนไธไธชๅฝๆฐ็ฑปๅ่ไธๆฏ Fn ๆฅๅฃ๏ผ็จ fn ๆๅฎๅๆฐ็ฑปๅ๏ผ่ไธๆฏๅฃฐๆไธไธชๆณๅๅๆฐๅป็ปๅฎๆฅๅฃใ
้ญๅๅฐฑๆฏไธไธช็ปๆ่ฎฐๅฝ๏ผๅฎไฟๅญไธไธชๅฝๆฐไธๅฝๅ็ฏๅขๅณ่ใ่ฏญๆณไธ็ธๅฝๆฏไธไธชๅฟๅๅฝๆฐ๏ผๆๆถๅไน็งฐไฝ lambda ่กจ่พพๅผใ
ไปๅ่ฝๆงไธ่ฏด lambda ๅ closure ๆฏไธไธชๅฟๅๅฝๆฐ๏ผ่ฅๅฟๅๅฝๆฐๆ่ทไบไธไธชๅค้จๅ้๏ผ้ฃไนๅฎๅฐฑๆฏไธไธช้ญๅใ


่ฏญๆณๆ ผๅผ `|val| exps`๏ผๅธๅๆ ๅฟๆฏไธคๆก็ซ็บฟ๏ผๅถ็นๅพๅฆไธ๏ผ

- ไฝฟ็จ `||` ๅๆฌๅๆฐๅ่กจ๏ผ่ไธๆฏ `()`๏ผ
- ๅฝๆฐไฝๅฏ้็่ฑๆฌๅท `{}`๏ผๅฏนไบๅไธช่กจ่พพ็้ญๅ้ๅธธๆ็จ๏ผๆฏๅฆๅชๅๅไธไธชๆฐๅผ็้ญๅ `|i: i32| -> i32 { i + 1 };`๏ผ
- ๆๆไฝ็จๅ็ฏๅข็่ฝๅ๏ผๅฏไปฅ่ชๅจๅค็ๆๆๆ็็งปๅจใๅ็จ๏ผๆ นๆฎๆๆๆๅค็ๆนๅผไธๅ่ๅฎ็ฐ็๏ผ
    - `Fn`: ้ญๅๆๆๅผ็จ `&T`๏ผ
    - `FnMut`: ้ญๅๆๆๅฏๅๅผ็จ `&mut T`๏ผ
    - `FnOnce`: ้ญๅๆๆๆๆๆ `T`๏ผๅฏนๅบ็ฎๅๅฝขๅผ `move ||`๏ผ

FnOnce ้็จไบๅฏไปฅ่ฐ็จไธๆฌก็้ญๅ๏ผๆๆ้ญๅ้ฝ่ณๅฐๅฎ็ฐไบ่ฟไธช็นๆง๏ผๅ ไธบๆๆ้ญๅ้ฝๅฏไปฅ่ขซ่ฐ็จใๅฐๆ่ท็ๅผ
็งปๅบๅถไธปไฝ็้ญๅๅชไผๅฎ็ฐ FnOnce๏ผ่ไธไผๅฎ็ฐๅถไป Fn๏ผๅ ไธบๅฎๅช่ฝ่ฐ็จไธๆฌกใ

่้ป่ฎค็ๆ่ท้ๆฉ้กบๅบ๏ผ

- ๅฆๆๅฏไปฅ๏ผๅๅฐฝ้็จ & ๅ็จ๏ผ
- ๅฆๅ๏ผๅฆๆๅฏไปฅ๏ผๅๆปๆฏ &mut ๅ็จ๏ผ
- ๆๅ๏ผๆ ่ฎกๅฏๆฝๅฟ้กป่ฆ ownership ็่ฏ๏ผๆไผ move๏ผ

ๅฆๅค๏ผ้ญๅไนๅฏไปฅๅๅถๅฎๅ้ไธๆ ท๏ผๆๅฑไบซๅผ็จใๅฏๅๅผ็จ็่กจ่พพๅฝขๅผ๏ผ

- ้ญๅๅฑไบซๅผ็จๅฝขๅผ `& ||`๏ผ
- ้ญๅๅฏๅๅผ็จๅฝขๅผ `&mut ||`๏ผ

Rust ๅๅญๆจกๅไธญ็ๆฐๆฎๆไธๅคๅญๅจ็ฑปๅ๏ผๅฏนๅบๆไธ็ง้ญๅ๏ผ

- ๆ ไธ stack closure
- ๆ็ฎกๅ ไธ managed closure
- ไปฅๅไบคๆขๅ ไธ owned closure

ๅ้ข็คบ่ไปฃ็ ไธญ `do_twice()` ๆนๆณๅฏไปฅ็ญไปทๅฎ็ฐไธบ Fn ๆนๅผ๏ผ

```rust,ignore
fn do_twice<F>(f: F, v: i32) -> i32 
where F: Fn(i32) -> i32
{
    f(v) + f(v)
}
```

ๅฝๆฐๆ้็ฑปๅๅฎ็ฐไบ `Fn` `FnMut` `FnOnce` ่ฟไธไธชๆฅๅฃ๏ผๆไปฅๅช้้่ฆไผ ๅฅ้ญๅ๏ผๅฐฑๅฏไปฅไผ ๅฅๅฝๆฐๆ้๏ผๅฆๅ้ๅ่กจๅฏน่ฑก็ map() ๆนๆณใ

```rust,ignore
let nums = vec![1, 2, 3];
let closure = |i: &i32| i.to_string();
let closure = ToString::to_string;
let strings: Vec<String> = nums.iter().map(closure).collect();
println!("The largest {:?}", strings);
```

ๅฏไปฅๅฐ tuple structs ๆ tuple-struct enum ไธญ็ๆๅๅๅงๅๅฝๆฐไฝไธบๅฝๆฐๆ้ๆฅไฝฟ็จ๏ผ

```rust,ignore
#[derive(Debug)]
enum Status {
    Value(u32),
    Stop,
}
let statuses: Vec<Status> = (0u32..5).map(Status::Value).collect();
println!("The largest {:?}", statuses);
```

ไธ้ข็็คบ่ไธญ๏ผๆไธพ็ฑปๅ็ `Value()` ๅฐฑๆฏไธไธชๅๅงๅๅฝๆฐ๏ผๅฎ่ฟๅ็ๆฏไธไธชๅชๆไธไธช u32 ๅผ็ๅ็ปใ


ๅจ้ญๅๅฎไนไธญไฝฟ็จ move ๅณ้ฎๅญ๏ผๅฏไปฅๅผบๅถไธบ้ญๅๆ่ทๆๆๆ๏ผ

    let num = 5;
    let owns_num = move |x: i32| x + num;

ๅฐฑ็ฎ็จ move ๅผบๅถๆ่ทๅ้็ๆๆๆ๏ผๅช่ฆไธ็งป่ตฐๆๆๆ่ไปไปๆฏไฟฎๆนๆ่ฏปๅๅ้๏ผ่ฟ็งๆๅตไพ็ถไผๅฎ็ฐ FnMut ๆ Fnใ

ๅผ็จ็ฝๅ็็คบ่ไปฃ็ ๏ผ็งปๅจๆๆๆๅๅฐฑๆ ๆณๅ main ๅฝๆฐไฝฟ็จ homu ๆ mado๏ผ

```rust,ignore
#![allow(unused_variables)]
struct Madoka;
struct Homura;

fn main() {
    let homu = Homura;
    let mado = Madoka;
    let marry = move || {
        (&homu, &mado);
    };
    marry();
    // values used here after move
    let moved = (homu, mado);
}
```

ไปฅไธ็คบ่้ญๅๆฏๅฆไฝๆๆๅค้จ็ฏๅข็๏ผ

```rust,ignore
use std::mem;

let mut color = String::from("green");

let print = || println!("`color`: {}", color);

// let  _reborrow = &mut color;
// cannot borrow `color` as mutable because it is also borrowed as immutable

// Call the closure using the borrow, one or more time.
print();

// A move or reborrow is allowed after the final use of `print`
let mut _color_moved = color;
let  _reborrow = &mut _color_moved;

// A non-copy type.
let movable = Box::new(2);

// `mem::drop` requires `T` so this must take by value. A copy type
// would copy into the closure leaving the original untouched.
// A non-copy must move and so `movable` immediately moves into
// the closure.
let consume = || {
    println!("`movable`: {:?}", movable);
    mem::drop(movable);
};

// `consume` consumes the variable so this can only be called once.
consume();
```

้ญๅไธๆฆๅฎไน๏ผๅถไฝฟ็จ็ๅ้ๅฐฑไผๆไฝฟ็จๆนๅผ่ฝฌ็งปๆๆๆใๆๅ็จๆๆๆ๏ผๅนถไฟๅญๅฐ print ๅ้ไธญ๏ผๅ ไธบ `println!` ๅฎๅช้่ฆๅ็จ imutable ็ๅ้๏ผๆไปฅ color ๅชๆฏๅ็จๆๆๆ็ป้ญๅ๏ผๅณไฝฟๅฎๆฏ Spring ็ฑปๅไนๆฒกๆๅ็ๆๆๆ่ฝฌ็งปใ

ๅฆๆๆฏๅๅงๅผ๏ผๅฆๆฐๅผ่ขซ้ญๅไฝฟ็จๆถ๏ผไผ ๅผไผไบง็ Copy ่กไธบ๏ผ่ `mem::drop()` ่ฆๆฑไผ ๅผ๏ผๆไปฅไพๅญไฝฟ็จไบๆบ่ฝๆ้ๆฅๆๅๆฐๅผ๏ผไฝฟๅถไฟๅญๅจ Heap ๅๅญไธญ๏ผ่ฟๆ ทๅฏไปฅ้ฟๅ Copyใๆณจๆ๏ผไธ้ข็คบ่็ `movable` ๅ้๏ผไผ่ขซๅ็จๅไผๅ  `drop()` ่ฐ็จไบง็ๆๆๆ่ฝฌ็งปใ

ๆไปฅ๏ผๅ้ข `consume` ่ฟไธช้ญๅๅฐฑ็ธๅฝๆฏ `Fn` ๅ  `FnOnce` ไธค็งๆๅต๏ผๅฆๆๅฎไนๅฝๆฐ้่ฆไฝฟ็จ่ฟๆ ท็้ญๅๆถ๏ผๅฐฑ้่ฆ็ธๅบๆๆๅๆฐ็ฑปๅไธบ `Fn` ๅ `FnOnce`ใ

```rust,ignore
// let call = |mut f: FnOnce()| { f() };
fn call<F>(mut func: F)
where F: FnOnce()
{
    func();
}
call(consume);
```

ๅฆๆ่ฆๅฐ้ญๅไฝไธบๅฝๆฐ่ฟๅๅผ๏ผ้ฃไนๅฐฑ้่ฆ่่ๅฐไธไธช้ฎ้ข๏ผ้ญๅ็ๅคงๅฐไธ่ฝ็กฎๅฎ๏ผๆไปฅไธ่ฝ็ดๆฅ่ฟๅไธไธช้ญๅ๏ผ
่ๆฏ้่ฆ็จๆ้ๅ่ฃๅๅ่ฟๅ่ฟไธชๆ้๏ผ

```rust,ignore
fn returns_closure() -> Box<dyn Fn(i32) -> i32> {
    Box::new(|x| x + 1)
}
```



### ๐ข๐ต Closures Lifetime

ๅณไบ้ญๅ็ๅฝๅจๆ๏ผ่ฏท็ Stackoverflow ไธ็ไธไธช้ฎ้ข๏ผ

```rust,ignore
// The Rust Programming Language - Thinking in Rust
// - [Functional Language Features: Iterators and Closures](ch13-00-functional-features.md)
// - [temporary value dropped while borrowed](https://stackoverflow.com/questions/65985081)

struct Animal<'a> {
  print: &'a dyn Fn() -> (),
}
impl<'a> Animal<'a> {
  pub fn set_print(&mut self, _fun: &'a dyn Fn() -> ()) -> () {
    self.print = _fun;
  }
  pub fn bark(&self) { 
    (self.print)();
  }
}

fn main() {
  let x = 999;
  let mut dog: Animal = Animal { print: &|| { 
      println!("dog print {}", x) 
      } };

  let bind = || { println!("dog barking: {}", x)};
  dog.set_print(&bind);
  dog.bark();
  dbg!(x);

  // dog.set_print(&|| {
  //     println!("{}", x)
  //     //             ^ borrowed value does not live long enough
  // });
  // temporary value (lambda) is freed at the end of this statement, at } symbol.
  // dog.bark();
  // ---------- borrow later used here
}
```

ไป็ผ่ฏๅจๆ็คบ็้่ฏฏไฟกๆฏๅฏไปฅๅพ็ฅ๏ผset ๆนๆณๆง่ก่ฟไธ่กไบง็ไบไธไธชไธดๆถๅ้ใ

่ฆ็นๅๆ๏ผ

- `&||()` ๅฎไนไบไธไธชๆ ่ฟๅๅผ็้ญๅ๏ผๅๆถๅๅผ็จไผ ๅฅไบๅฝๆฐไฝไธบๅ่ฐใ
- `&||()` ๅฎไน็่ฟไธช้ญๅๅผ็จๆฏ `'static` ็ๅฝๅจๆใ
- ไฝๆฏ๏ผๅจ set ๆนๆณๆง่กๅ๏ผ่ฟไธช้ญๅๅฐฑ free ๆไบ๏ผๅ ๆญคๅ็ปญไธ่ฝๅ่ฎฟ้ฎๅฐๅฎใ

้่ฆไฟ่ฏ้ญๅๆๆ็ๅ้็ๅฝๅจๆไธ็ญไบ้ญๅ็ๅฝๅจๆ๏ผๅนถไธๅฎไน้ญๅๆฌ่บซๆถไน้่ฆไฟ่ฏๅฎ็ๆๆๆใ



### ๐ข๐ต Closures Type Anonymity

้ญๅๅทๆ`็ฑปๅๅฟๅๆง`๏ผๆฏไธช้ญๅ็ธๅฝไบๅๅปบไธไธชๅฟๅ็็ปๆไฝ๏ผ็ผ่ฏๅจไผไธบๅฎๆ่ทไฝฟ็จๅฐ็ๅฝๅไธไธๆๅค้จ็ๅ้็ถๅๅก่ฟ่ฟไธช็ปๆไฝ้้ขใ

่ฟไนๆฏ Rust ้ญๅ้พ็จ็ๆ นๆบ๏ผ

- Rust ไธญ็ปๆไฝ็ๅฏๅๆงไปฅๅ lifetime ๆฌ่บซๅฐฑๆฏๅคๆ็ๆบๅถใ
- Closure ็่งๅ้ฝๆฏ้ๅผ็๏ผ้ญๅๆ่ทๅผ็ๆนๅผ๏ผไปฅๅๆ็ๆ็้ญๅ็ฑปๅ้ฝๆฏๆ็ง้ๅผ็่งๅๅณๅฎ็ใ
- Closure ไผๆ่ทๆดไธชๅคๅ็ฑปๅ๏ผๅฆ struct, tuple ๅ enum๏ผ่ไธๅชๆฏๅไธชๅญๆฎตใ

ไพๅฆ๏ผไปฅไธ็้ญๅ็คบ่๏ผ

```rust,ignore
let example_closure = |x| x;

let s = example_closure(String::from("hello"));
let n = example_closure(5);
// expected struct `std::string::String`, found integer
```

ๅจ็ฌฌไธไธช้ญๅ่ฐ็จ่กจ่พพๅผๆง่กๆถ๏ผexample_closure ็็ฑปๅๅฐฑ็กฎๅฎไธๆฅไบ๏ผๅฝ็ฌฌไบๆฌก็จไธๅ็ๅๆฐๅป่ฐ็จๆถ๏ผๅฐฑๅบ็ฐ็ป้ญๅ่พๅฅ็ๅๆฐ็ฑปๅไธๅน้ใ

่ฟ่งฃ้ไบไธบไปไน Rust ไธญไธคไธชๅๆฐๅ่ฟๅๅผไธๆ ท็้ญๅๆฏไธๅ็็ฑปๅ๏ผๅ ไธบๅฎไปฌ่ๅ็ๅฟๅ็ปๆไฝไธๅ๏ผๆ็ไธๅ็ๅคงๅฐใๅญๆฎตๅ lifetimeใ

ไปฅไธ๏ผ็จ็ญไปท็็ปๆไฝๆฅๆจกๅ้ญๅ๏ผๅ ไธบๅค้จๅ้ `c` ๆ็ๅฝๅจๆ้ๅถ๏ผๆไปฅ้ญๅไธ่ฝ้ฟๅฏฟ่ฟๅฎ๏ผ

```rust,ignore
let c = 2.0;

let closure = |x: f64| x + c;

struct AnonymClosureType<'a> {
    c: &'a f64
}

impl<'a> AnonymClosureType<'a> {
    fn call(&self, x: f64) -> f64 {
        x + self.c
    }
}
```

ๅ้ขๅฐ่็็คบ่ไปฃ็ ไธญ๏ผ`do_twice()` ๆนๆณๅฏไปฅ็ญไปทๅฎ็ฐไธบ Fn ๆนๅผ๏ผไฝๆฏๅฟ้้่ฟๆณๅๆนๅผๅฃฐๆ็๏ผ

```rust,ignore
fn do_twice<F>(f: F, v: i32) -> i32 
where F: Fn(i32) -> i32
{
    f(v) + f(v)
}
```

ๅฐ่ฏ็จ้ๆณๅๆนๅผๆนๅไผ่ทๅๆ็คบ๏ผ

    fn do_twice(f: dyn Fn(i32) -> i32, v: i32) -> i32 { ... }

    the size for values of type `(dyn std::ops::Fn(i32) -> i32 + 'static)` cannot be known at compilation time

ๅฐฑๆฏๅ ไธบๅฝๆฐๆฅๆถ็้ญๅ็ฑปๅๆ ๆณๅจ็ผ่ฏๆ็กฎๅฎๅคงๅฐ๏ผๅ ๆญคไธๅฏ้ขๆตๅฝๆฐๅจ่ฟ่กๆถไผๆฅๆถไปไน็ฑปๅ็้ญๅใ้่ฆ้่ฟๆณๅๆฅๅฎ็ฐๅจๆ่ฐ็จ๏ผDynamic Dispatch๏ผ็ๆบๅถ๏ผไปฅๅจ่ฟ่กๆถ็กฎๅฎ้ญๅ็ฑปๅๅคงๅฐใ

```rust,ignore
// `F` must be generic.
fn apply<F>(f: F) where
    F: FnOnce() {
    f();
}
```

่ไฝฟ็จ `Fn` `FnMut` `FnOnce` ็ฑปๅ็้ญๅ่ฝ้ๅผๅฐไปๅฐ้ญไฝ็จๅๆ่ทๅ้๏ผ่ฟไนๅธฆๆฅไบ็ธๅฝๅค็็ๆๆงใ


้ญๅๅฏไปฅๅฝๆฐ็ๅ่พๅฅๅๆฐ๏ผๆ่่พๅบๅผใๅฝๆฐๅฏไปฅ่ฟๅ้ญๅ๏ผไฝๆฏไธ่ฝ็ดๆฅ่ฟๅ้ญๅ๏ผ

    fn returns_closure() -> dyn Fn(i32) -> i32 {
                            ^^^^^^^^^^^^^^^^^^ doesn't have a size known at compile-time
        |x| x + 1
    }

่ฟๆฏๅ ไธบ้ญๅ็ฑปๅๆฏๅฟๅ็๏ผ็ฑ Traits ่กจ็คบ๏ผ่ฟๆๅณ็ไธ่ฝ็ดๆฅ่ฟๅ้ญๅ๏ผๆ่่ฏด่ฟๅ็่ฃ้ฅญ็ฑปๅไธๅฃฐๆ็่ฟๅๅผ็ฑปๅไธๆฏๅไธ็ฑปๅใๅฏไปฅไฝฟ็จๅฎ็ฐ็ธๅบ Trait ็ๅทไฝ็ฑปๅไฝไธบๅฝๆฐ็่ฟๅๅผ๏ผ้ญๅไฝไธบๅฟๅ็ฑปๅไธ่ฝ่ฟๆ ทๅใ

ๆๆฐ Rust 2018 ๆไพไบไธค็ง่ฏญๆณๅฎ็ฐ impl Trait ๅ dyn Trait๏ผไปฅไธไธค็งๆนๅผ้ฝๅฏไปฅๅฎ็ฐ้ญๅ็่ฟๅ๏ผ

```rust,ignore
fn returns_closure() -> Box<dyn Fn(i32) -> i32> {
    Box::new(|x| x + 1)
}

fn returns_closure() -> Box<impl Fn(i32) -> i32> {
    Box::new(|x| x + 1)
}
```

impl Trait ๅ dyn Trait ๅๅซๅฏนๅบ้ๆๅๅๅๅจๆๅๅๆบๅถ๏ผ็จๅจ่ฟๅๅผ็ฑปๅๅฎไนไธญ๏ผ่กจ็คบ่ฟๅๅผๆฏๅฎ็ฐไบ Fn ็็ฑปๅใ


ๅฏไปฅๅฐ้ญๅไฟๅญๅฐ็ปๆไฝไธญ๏ผไปฅไธๅฎ็ฐไธไธช้ถไน็ฎๆณ็้ญๅ๏ผ

```rust,ignore
struct Fact<'s> { 
    f: &'s dyn Fn(&Fact, u32) -> u32 
}
let fact = Fact {
    f: &|fact, x| if x == 0 {1} else {x * (fact.f)(fact, x - 1)}
};

println!("{}", (fact.f)(&fact, 5));
```

ๅ ไธบ้ญๅๅพๅฅฝ็จ๏ผไฝๆฏๆไปฌไธๆณไปๅบ่ฟ่กๆถไปฃไปทใ

Rust ้ๆฉใ้ถ้ขๅคๅผ้ใ๏ผZero Overhead๏ผๆไปฅๅฟ้กป็จ่ฟ็งๆนๅผๆฅๅฎ็ฐ closureใไฝฟ็จ้ซ็บงๆฝ่ฑก็ๅๆถไฟๆไบๆง่ฝๆ ๆใๆฏๅฆ่ฏดๆไปฌ่ฝ็จๅพๅฝๆฐๅผ็ๆนๆณๅค็่ฟญไปฃๅจ๏ผไฝๆๅ็ๆ็ๆฑ็ผๅๆๅๅพช็ฏๆฒกไปไนๅบๅซใ

Rust ๆไพไบ `Box<Fn() -> T>` ๅ `Rc` ่ฎฉไฝ ๅฏไปฅๆๅจๅๅฐๅซ็่ฏญ่จ่ชๅจๅๅฐ็ไบๆใไฝ ้่ฆๆพๅผไฝฟ็จ่ฟไบ่ฎพๆฝ๏ผๅ ไธบ่ฟไปฃ่กจ้ขๅค็ๅผ้ใ

่้ๆฉ้ๅผ็ๆ่ท่งๅๆฏๅ ไธบ้ญๅๆฌ่บซ่ขซ่ฎพ่ฎกๅบๆฅ็็ฎ็ๅฐฑๆฏไธบๅจๆไธช็นๅฎไธไธๆๅไปฅ็ญๅฐใ็ฎๆด่้ข็น็ๆนๅผไนฆๅใๅ ๆญค้็จไบ่ฟ็ง้ๅผไธๆไฟๅฎ็ๆ่ทๆนๅผ๏ผไปฃไปทๅฐฑๆฏๅฎนๆ่ฎฉไบบๆธไธ็ๅคด่ใ


ไปฅไธ็จ move Closures ้ญๅๅฎ็ฐไธไธชๅฝๆฐ้ป่พ๏ผ

```rust,ignore
// const sum = (f, g) => x => f(x) + g(x);
fn sum<F, G>(f: F, g: G) -> Box<(impl Fn(i32) -> i32)>
where F: Fn(i32) -> i32,
G: Fn(i32) -> i32
{
    Box::new(move |x: i32| f(x) + g(x))
}

fn main() {
    let f1 = |x: i32| x * x;
    let f2 = |x: i32| x * 2 + 1;
    let a = sum(f1, f2);
    println!("{}", a(1i32));
    println!("{}", a(2i32));
    println!("{}", a(3i32));
}
```

ไฝฟ็จ Box ไนๆฏๅฏไปฅ็๏ผๅถๅฎ่ฟไนๅๆบ่็ผ็๏ผๅฟ้กป่ฆ็จ trait object๏ผๅ ไธบ้ญๅ็็ฑปๅๆฏๅฟๅ็ใๅฆๆ้ญๅๆฏไผ ๅฅ็๏ผ้ฃไนไผ ๅฅ็็ฑปๅๆฏๅฏไปฅๆจๅๅบๆฅ็๏ผๅฆๆๆฒกๆไผ ๅฅ๏ผๅฐฑๅพ้บป็ฆไบใ


## โก Macros ๅฎ็ผ็จ
- [The Little Book of Rust Macros](https://veykril.github.io/tlborm/)
- [The Little Book of Rust Macros](https://danielkeep.github.io/tlborm/book/index.html)
- [Introduction to Procedural Macros in Rust](https://tinkering.xyz/introduction-to-proc-macros/)
- [Procedural Macros in Rust 2018](https://blog.rust-lang.org/2018/12/21/Procedural-Macros-in-Rust-2018.html)
- [3.2. Procedural Macros](https://doc.rust-lang.org/reference/procedural-macros.html)
- https://doc.rust-lang.org/rust-by-example/macros.html
- https://doc.rust-lang.org/book/ch19-06-macros.html
- https://doc.rust-lang.org/stable/reference/attributes.html#active-and-inert-attributes
- https://docs.rs/json/0.12.4/json/


้ฆๅ๏ผไธๅ C/C++ ็ๅฎๅฎไน๏ผๅชๆฏ็ฎๅ็ไปฃ็ ้ขๅค็็จๅบ๏ผ็จๅฎไปฃ็ ๆฟๆขไธไธ้จๅๆบไปฃ็ ใRust ็ๅฎๅทๆ็ธๅฝๅคๆ็ๅ่ฝ๏ผๆด่ดด่ฟ็ผ่ฏๅจ็่ฏญๆณๆ ๅค็ใ

็ฎๅๅฐ่ฏด๏ผRust ๅฎๅฐฑๆฏๅๅต็ DSL - Domain Specific Languages ๅฏไปฅ่ฎฉไฝ ๅฏไปฅๅๆ่ชๅทฑ็่ฏญๆณ๏ผ็ผๅๅบๅฏไปฅ่ช่กๅฑๅผ็ไปฃ็ ๏ผๅนถไธ่ฟๅฏไปฅๅฎ็ฐ้ๆๅๅฐๅ่ฝใ

ๅฎ็ๅบ็จๆฏ็ฌฆๅ DRY (Don't Repeat Yourself) ่ฝฏไปถๅทฅ็จๅ็็๏ผๆ่ฝฎๅญ็่ฝฆๅฐฑ่ฎฉๅฎ่ท๏ผๆฒกๆๅฟ่ฆ้ๆฐ้ ่ฝฎๅญ๏ผDon't write DRY code!

้่ฟ `macro_rules` ๅณ้ฎๅญๅฎไน็ไธ็ณปๅ่งๅ๏ผๅจ่ฐ็จๅฎๆถ๏ผ็ผ่ฏๅจไผๅๅน้่งๅ๏ผๅน้ไธญ็ $expansion ๆ่ขซๅฑๅผใ

้คไบไฝฟ็จ `macro_rules` ๅณ้ฎๅญๅฎไนๅฎ่งๅ๏ผRust ๆไธ็งๅฎ็จๅบ๏ผ

- Function-like macros - `custom!(...)` ไฝฟ็จ `#[proc_macro]` ๅฎไน๏ผ
- Derive macros - `#[derive(CustomDerive)]` ไฝฟ็จ `#[proc_macro_derive]` ๅฎไน๏ผ
- Attribute macros - `#[CustomAttribute]` ไฝฟ็จ `#[proc_macro_attribute]` ๅฎไน๏ผ

ๅฎ็จๅบไฝฟ็จ Cargo new --lib ๅฝไปคๅๅปบไธไธชๅบ๏ผๅนถไธๆๅฎ proc-macro ็ฑปๅ๏ผ่ฟๆ ทๆ่ฝๅคไฝฟ็จ่ฟ็จๅฎ๏ผ

    [lib]
    proc-macro = true

    [dependencies]
    quote = "1.0"
    syn = "1.0"
    proc-macro2 = "1.0"


ๅฎ็จๅบไธๅฝๆฐ็ๅบๅซๅจไบๅ็ผ็ๆๅนๅท๏ผ

```rust,ignore
macro_rules! $name {
    ($pattern) => {$expansion}; // $rule0 ;
    ($pattern) => {$expansion}; // $rule1 ;
    ($pattern) => {$expansion}; // ...
    ($pattern) => {$expansion}; // $ruleN ;
}
```

ๅฎ่ณๅฐๅฎไนไธๆก่งๅ๏ผๆๅไธๆก่งๅ็ๅๅทๅฏ็็ฅใ

ไพๅฆ๏ผๆไปฅไธ่ฟๆ ทไธไธชๅฎๅฎไน๏ผ

    macro_rules! four {
        () => {1 + 3};
    }

่ฐ็จๅฎๆถ๏ผ็ผ่ฏๅจไผๅน้ๅฐ่พๅฅไธบ็ฉบ็ๆกไปถ๏ผๅๆฌ `four!()`, `four![]` or `four!{}` ่ฟๅ ็ง่ฐ็จๅฝขๅผใ

Patterns ๅฏไปฅ็ฒพ็กฎๅน้ literal token trees๏ผไพๅฆ `4 fn ['spang "whammo"] @_@` ๅฏน่งๅๅบๅฆไธ๏ผ

    macro_rules! gibberish {
        (4 fn ['spang "whammo"] @_@) => {...};
    }

็คบ่๏ผ่พๅฅๅๅซ 3 ไธช่กจ่พพๅผ็ๅน้ๆจกๆฟ๏ผ

    macro_rules! multiply_add {
        ($a:expr, $b:expr, $c:expr) => {$a * ($b + $c)};
    }


ไพๅฆ๏ผ็ณป็ป่ชๅธฆ็ vec! ๅฎ๏ผ

```rust,ignore
    macro_rules! vec {
        ( $( $x:expr ),* ) => {
            {
                let mut temp_vec = Vec::new();
                $(
                    temp_vec.push($x);
                )*
                temp_vec
            }
        };
    }
```

่ฟไธชๅฎ่ฝๆไปฅไธ่ฝฌๆขๆณจ่งฃ่ฟไธ่ก็ไปฃ็ :

```rust
// let v: Vec<u32> = vec![1, 2, 3]; 
let mut temp_vec = Vec::new();
temp_vec.push(1);
temp_vec.push(2);
temp_vec.push(3);
temp_vec
```

ๅน้ๆจกๆฟๆฏๆ Captures ๅ่ฝ๏ผ่ฏญๆณๆ ผๅผ `$identifier:capture`๏ผcapture ่กจ่พพๅฆไธ๏ผ

- `item`: an item, like a function, struct, module, etc.
- `block`: a block (i.e. a block of statements and/or an expression, surrounded by braces)
- `stmt`: a statement
- `pat`: a pattern
- `expr`: an expression
- `ty`: a type
- `ident`: an identifier is used for variable/function names
- `path`: a path (e.g. `foo`, `::std::mem::replace`, `transmute::<_, int>`, โฆ)
- `meta`: a meta item; the things that go inside `#[...]` and `#![...]` attributes
- `tt`: a single token tree


ๅน้ๆจกๆฟ่ฟๆฏๆ้ๅค๏ผ่ฏญๆณๆ ผๅผ `$ ( ... ) sep rep`๏ผ่ฟ็งๅๆฐๅฏๅ็ๅฝขๅผ็งฐไธบ Variadic Interfaces๏ผ

- `$` is a literal dollar token.
- `( ... )` is the paren-grouped pattern being repeated.
- `sep` is an optional separator token. Common examples are `,`, and `;`.
- `rep` is the required repeat control. 
    - `*` (indicating zero or more repeats)
    - `+` (indicating one or more repeats).

Rust ็ผ่ฏๅจๅจๅฑๅผๅฎๆถ๏ผไผๆไธๅ็ไฝฟ็จๅฝขๅผ๏ผ

- `# [ $arg ];` attributes style, e.g. `#[derive(Clone)]`, `#[no_mangle]`, โฆ
- `#![ $arg ];` e.g. `#![allow(dead_code)]`, `#![crate_name="blang"]`, โฆ
- `$name! $arg;` e.g. `println!("Hi!")`, `concat!("a", "b")`, โฆ
- `$name! $arg0 $arg1;` e.g. `macro_rules! dummy { () => {}; }`.

ๅฏนไบ็ฌฌไธ็งๅฝขๅผ `$name! $arg`๏ผ้ฎ้ขๆฏ Rust ่งฃๆๅจๅฆไฝ็ฅ้ๆฏไธช $arg ๅฏ่ฝ็่ฏญๆณๆฉๅฑ็ๆฏไปไนๆ ทๅญ็๏ผ
็ญๆกๆฏไธๅฟใ็ธๅ๏ผ่ฏญๆณๆฉๅฑ่ฐ็จ็ๅๆฐๆฏๅไธชไปค็ๆ ใๆดๅทไฝๅฐ่ฏด๏ผๅฎๆฏไธไธชๅไธ็๏ผๆ ๅญๅถ Token Tree๏ผ


ไพๅฆ๏ผไปฅไธๅฎไนไธไธชๅฎ็จๆฅๅฏนๅๆฐ่ฟ่ก่ฎกๆฐ๏ผ

```rust,ignore
macro_rules! count_tts {
    () => {0usize};
    ($_head:tt $($tail:tt)*) => {1usize + count_tts!($($tail)*)};
}
```

ๅ่ fromat ๅฎๅฎไน๏ผ

```rust,ignore
    /// # Examples
    ///
    /// ```
    /// format!("test");
    /// format!("hello {}", "world!");
    /// format!("x = {}, y = {y}", 10, y = 30);
    /// ```
    #[macro_export]
    #[stable(feature = "rust1", since = "1.0.0")]
    #[cfg_attr(not(test), rustc_diagnostic_item = "format_macro")]
    macro_rules! format {
        ($($arg:tt)*) => {{
            let res = $crate::fmt::format($crate::__export::format_args!($($arg)*));
            res
        }}
    }
```

็คบ่๏ผ่พๅฅๅๅซ 0 ๆๅคๆก่กจ่พพๅผ็ๅน้ๆจกๆฟ๏ผ

```rust,ignore
    #![allow(unused)]

    #[macro_export]
    macro_rules! vec_strs {
        ( 
            // Start a repetition:
            $( $element:expr ), * 
        ) => {
            // Enclose the expansion in a block so that we can use
            // multiple statements.
            {
                let mut v = Vec::new();

                // Start a repetition:
                $(
                    // Each repeat will contain the following statement, with
                    // $element replaced with the corresponding expression.
                    v.push(format!("{}", $element));
                )*

                v
            }
        };
    }

    fn main() {
        println!("The vector is {}", vec_strs!(1, 2, 3, 4).join(" "));
    }
```

ไฝฟ็จ `#[macro_export]` ๅๆฐๆฎๆ ๆณจ่กจ็คบๆ ่ฎบไฝๆถ๏ผ่ฟไธชๅฎๅฏน่ฑกๅฏน crate ไฝ็จๅ้ฝๆๆใ 


### ๐ข๐ต proc_macro ่ฟ็จๅฎ็จๅบ

้คไบไฝฟ็จ `macro_rules` ๅณ้ฎๅญๅฎไนๅฎ่งๅ๏ผRust ๆไธ็งๅฎ็จๅบ๏ผ

- Function-like macros - `custom!(...)` ไฝฟ็จ `#[proc_macro]` ๅฎไน๏ผ
- Derive macros - `#[derive(CustomDerive)]` ไฝฟ็จ `#[proc_macro_derive]` ๅฎไน๏ผ
- Attribute macros - `#[CustomAttribute]` ไฝฟ็จ `#[proc_macro_attribute]` ๅฎไน๏ผ

ไฝฟ็จ `#[proc_macro]` ๅฎไนไธไธชๅฌๅผๅฝๆฐไฝไธบๅฎ็จๅบ๏ผๅฝๆฐ็ปๆ (TokenStream) -> TokenStreamใ
ๅฝๆฐ่พๅฅ็ TokenStream ๅฐฑๆฏๅฎ่ฐ็จๆถ่พๅฅ็ๅๅฎน๏ผๅฝๆฐๅๆ ท่ฟๅๆฝ่ฑก่ฏญๆณๆ ไปฅๆฟไปฃๅฎ่ฐ็จ็ๅๅฎนใ

ไพๅฆ๏ผไปฅไธๅๅปบไธไธช proc_macro_examples lib ๅฎ็ฐไธไธช `answer()` ๅฝๆฐๆๅฅ็ๅฎ็จๅบ๏ผ

```rust,ignore
extern crate proc_macro;
use proc_macro::TokenStream;

#[proc_macro]
pub fn make_answer(_item: TokenStream) -> TokenStream {
    "fn answer() -> u32 { 42 }".parse().unwrap()
}
```

ๅฎไนๅฅฝ่ฟ็จๅฎ็จๅบๅ๏ผๅฐฑๅฏไปฅๅถๅฎๅทฅ็จไธไฝฟ็จ๏ผๅๅปบไธไธช Binary Crate ๅทฅ็จๆต่ฏ่ฟไธชๅฎ็จๅบ๏ผ

```rust,ignore
extern crate proc_macro_examples;
use proc_macro_examples::make_answer;

make_answer!();

fn main() {
    println!("{}", answer());
}
```

็ฑปไผผๅฐ๏ผๅฎไนไธไธชๅฏไปฅ Derive macros๏ผๅฏไปฅไฝฟ็จ **proc_macro_derive** ๆฅๅฎไน๏ผ

```rust,ignore
extern crate proc_macro;
use proc_macro::TokenStream;

#[proc_macro_derive(AnswerFn)]
pub fn derive_answer_fn(_item: TokenStream) -> TokenStream {
    "fn answer() -> u32 { 42 }".parse().unwrap()
}
```

ไฝฟ็จ Derive macros ๆนๅผๆ็นๅทฎๅซ๏ผ

```rust,ignore
extern crate proc_macro_examples;
use proc_macro_examples::AnswerFn;

#[derive(AnswerFn)]
struct Struct;

fn main() {
    assert_eq!(42, answer());
}
```

Derive macro ่ฟๅฏไปฅ็ปๅฏน่ฑกๆทปๅ ่พๅฉๅฑๆง๏ผderive macro inert helper attributes๏ผ่ฟไบๅฑๆงๆฏ
ๆฐๆง็๏ผๅฎไปฌ็ๅฏไธ็ฎ็ๆฏ่ขซ่พๅฅๅฐๅฎไนๅฎไปฌ็ๆดพ็ๅฎไธญ๏ผไนๅฐฑๆฏ่ฏด๏ผๅฎไปฌๅฏไปฅ่ขซๆๆๅฎ็ๅฐใ

ไพๅฆ๏ผไปฅไธๅฎไนไบไธไธชไปไนไนไธๅ็่พๅฉๅฑๆง๏ผ

```rust,ignore
#[proc_macro_derive(HelperAttr, attributes(helper))]
pub fn derive_helper_attr(_item: TokenStream) -> TokenStream {
    TokenStream::new()
}
```

ไฝฟ็จๆผ็คบ๏ผ

```rust,ignore
#[derive(HelperAttr)]
struct Struct {
    #[helper] field: ()
}
```

Attribute macros ๆไธคไธช TokenStream ่พๅฅ๏ผ็ฌฌไธไธชไธบๅฑๆงๅฎ็ๅฑๆง้จๅ๏ผ็ฌฌไบไธชไธบๅฎๅบ็จๅฏน่ฑก้จๅใ

```rust,ignore
#[proc_macro_attribute]
pub fn show_streams(attr: TokenStream, item: TokenStream) -> TokenStream {
    println!("attr: \"{}\"", attr.to_string());
    println!("item: \"{}\"", item.to_string());
    item
}

// src/lib.rs
extern crate my_macro;

use my_macro::show_streams;

// Example: Basic function
#[show_streams]
fn invoke1() {}
// out: attr: ""
// out: item: "fn invoke1() { }"

// Example: Attribute with input
#[show_streams(bar)]
fn invoke2() {}
// out: attr: "bar"
// out: item: "fn invoke2() {}"

// Example: Multiple tokens in the input
#[show_streams(multiple => tokens)]
fn invoke3() {}
// out: attr: "multiple => tokens"
// out: item: "fn invoke3() {}"

// Example:
#[show_streams { delimiters }]
fn invoke4() {}
// out: attr: "delimiters"
// out: item: "fn invoke4() {}"
```

ๆฅไธๆฅ๏ผไฝฟ็จ็ฌฌไธๆนๆจกๅ็ผๅ่ฟ็จๅฎ๏ผ

001. syn ๆจกๅ็จๆฅ่งฃๆ่ฏญๆณๆ (AST)็ๅ็ง่ฏญๆณๆๆ๏ผๅณๆฏ Syntax Analyzerใ
002. quote ่งฃๆ่ฏญๆณๆ ๏ผ็ๆ Rust ไปฃ็ ๏ผไป่ๅฎ็ฐๆณ่ฆ็ๅ่ฝใ
003. proc_macro(std) ๅ proc_macro2(3rd-party)

ๅๅปบไธไธชๅบ hello_macro_derive๏ผๅนถ้็ฝฎไพ่ต๏ผ่ฟๆ่ฎพ็ฝฎๅบ็ฑปๅไธบ proc-macro๏ผๅณไธไธชๅฎๅบ๏ผ

    [lib]
    proc-macro = true

    [dependencies]
    syn = "0.14.4"
    quote = "0.6.3"

็ถๅๅจ hello_macro_derive/lib.rs ๆไปถไธญ่ชๅฎไนๅฎ็ๅ่ฝๅฎ็ฐใ

```rust,ignore
extern crate proc_macro;

use crate::proc_macro::TokenStream;
use quote::quote;
use syn;

#[proc_macro_derive(HelloMacro)]
pub fn hello_macro_derive(input: TokenStream) -> TokenStream {
    // Construct a representation of Rust code as a syntax tree
    // that we can manipulate
    let ast = syn::parse(input).unwrap();

    // Build the trait implementation
    impl_hello_macro(&ast)
}

fn impl_hello_macro(ast: &syn::DeriveInput) -> TokenStream {
    let name = &ast.ident;
    let gen = quote! {
        impl HelloMacro for #name {
            fn hello_macro() {
                println!("Hello, Macro! My name is {}", stringify!(#name));
            }
        }
    };
    gen.into()
}
```

็ผๅๅฏ็ปงๆฟๅฎไฝฟ็จ็ๆณจ่งฃๆฏ `#[proc_macro_derive(HelloMacro)]`๏ผๅถไธญ HelloMacro ๆฏๅฎ็ๅ็งฐ๏ผ
ๅจไฝฟ็จๆถ๏ผๅช้่ฆไฝฟ็จๆณจ่งฃ `#[derive(HelloMacro)]` ๅณๅฏใ

ไฝฟ็จๅฏ็ปงๆฟๅฎๆถๆไปฌๅบ่ฏฅๅๅผๅฅ่ฟไธชไพ่ต

    hello_macro_derive = { path = "../hello_macro_derive" }

็ถๅๅๆฅไฝฟ็จ๏ผ่ฟ้ๅฎไนไธไธช trait ๅๅญ HelloMacro ๅๆนๆณๅๅฏนๅบไธ้ข quote! ๅฎๅฎไน็ๅๅฎน็ธๅน้๏ผ

```rust,ignore
use hello_macro::HelloMacro;
use hello_macro_derive::HelloMacro;

pub trait HelloMacro {
    fn hello_macro();
}

#[derive(HelloMacro)]
struct Pancakes;

fn main() {
    Pancakes::hello_macro();
}
```

้่ฟ HelloMacro ๅฏ็ปงๆฟๅฎ๏ผPancakes ่ฟไธช็ปๆไฝไพฟ่ชๅจๅฎ็ฐไบ hello_macro() ่ฟไธชๆฅๅฃๆนๆณใ



### ๐ข๐ต TokenStream ่ฏญๆณๆ ๆฐๆฎๆตๅค็
- https://docs.rs/syn/1.0.1/syn/
- https://docs.rs/quote/1.0.0/quote/
- https://doc.rust-lang.org/proc_macro/
- https://docs.rs/proc-macro2/1.0.0/proc_macro2/
- [Tokio tutorial](https://tokio.rs/tokio/tutorial/)
- [Tokio - Event-driven NBIO asynchronous I/O](https://crates.io/crates/tokio)

ๅจ่ฟ้๏ผๅพๆๅฟ่ฆไป็ผ่ฏๅจ่ฏญๆณๆ ๆๅปบๅ็็่งๅบฆๆฅ่งฃๆๅฎ็ๆฆๅฟตใ

Rust ็ณป็ปไธญๆ่ฎธๅค็ฑปๅ็ Tokens๏ผ

- Identifiers: foo, Bambous, self, we_can_dance, LaCaravane, โฆ
- Integers: 42, 72u32, 0_______0, โฆ
- Keywords: _, fn, self, match, yield, macro, โฆ
- Lifetimes: 'a, 'b, 'a_rare_long_lifetime_name, โฆ
- Strings: "", "Leicester", r##"venezuelan beaver"##, โฆ
- Symbols: [, :, ::, ->, @, <-, โฆ

่ฟไบไผๅบ็ฐๅจไปฃ็ ไธญ็ Tokens ็ป่ฟ็ผ่ฏๅจๅๆญฅๅค็๏ผๅฐฑไผ่ฝฌๆขๆ AST - Abstract Syntax Tree๏ผ
Token trees ๅๆฏไปไบ Tokens ไธ AST ไน้ด็ไธ่ฅฟใไปฅๆ ็ถๆฐๆฎ็ปๆๆนๅผๅญๆพ๏ผๆไปฅๅซๅ่ฏญๆณๆ ใ

ๅฐๆบไปฃ็ ็ๅญ็ฌฆๆต่ฝฌๆขๆ Token ๆฏ็ผ่ฏๅ็ๆๅผๅง็้จๅ๏ผๅ่ฟไธๆญฅๅทฅไฝ็็จๅบๅซๅ Lexical Analyzer
่ฏๆณๅๆๅจ๏ผ็ถๅๅฐๆบไปฃ็ ไธญๅญ็ฌฆไธฒไธญ็ Tokens ่ฝฌๆขไธบ AST๏ผ่ฟไธๆญฅๅฏนๅบ็็จๅบๅซๅ Syntax Analyzer๏ผ
ๅณ่ฏๆณ่งฃๆๅจ Parserใ

Rust ไฝไธบ้ๆ็ผ่ฏๅ่ฏญ่จ๏ผrustc ็ผ่ฏๅจๆฌ่บซ็ฑ Rust ่ฏญ่จๅฎ็ฐ๏ผๅณๅฎ็ฐไบ่ชไธพ๏ผๅ็ซฏ้จๅๅๅบไบ็ฐๆ็ LLVMใ

Rust ็ผ่ฏๅจ็ฎ่ฆๅทฅไฝๆต็จๅฆไธ๏ผ

- ้ฆๅ๏ผ่ฏปๅๆบไปฃ็ ๅ Tokens ๆซๆ๏ผๅพๅฐ Token stream ๆฐๆฎ๏ผ่ฟ้จๅ็จๅบไนๅซๅ Syntax Analyzer๏ผ
- ็ถๅๅฏนๆบ็ ่ฟ่ก่ฏๆณๅๆๅพๅฐ Abstract Syntax Tree (AST) ๆฝๅ่ฏญๆณๆ ๏ผ่ฟ้จๅ็จๅบๅซๅ Parser๏ผ
- ๅๅฐ AST ่ฝฌๆขไธบ High-Level IR (HIR) ไปฅไพฟๅ็ฑปๅๆจๆญใtrait ๆฅๅฃๅค็ไปฅๅ้ๆ็ฑปๅๅฎๅจๆงๆฃๆฅ๏ผ
- ๅ่ฝฌๆขไธบ Mid-level IR (MIR) ไปฅไพฟๅๆๆๆๅ็จๆฃๆฅๅไปฃ็ ไผๅ๏ผMIR ไนๆฏ Control-Flow Graph (CFG)๏ผ
- ็ป่ฟไปฅไธๅ็ซฏๅทฅไฝๅ๏ผไปฃ็ ไผ่ฝฌ่ฏไธบ LLVM IR๏ผๆไปถๅ็ผไธ่ฌๆฏ .ll๏ผๆฏๆๆฌๆ ผๅผ๏ผๅญ่็ ๆไปถๅ็ผๆฏ .bc๏ผ
- ๅพๅฐไธญ้ดไปฃ็ ่กจ่พพ๏ผไธไธๆญฅๅฐฑๆฏ็ๆ็ธๅบ็ๆบๅจ็ ๏ผ่ฟๅฐฑๆฏ LLVM ่ฆๅ็ๅทฅไฝใ

็ผๅ่ฟ็จๅฎ๏ผ้ๅธธ้่ฆๅๅฉไธไธช crate ๆฅ่งฃๆ่ฏญๆณๆ ไธญ็่็นๆฐๆฎ:

001. syn ๆจกๅ็จๆฅ่งฃๆ่ฏญๆณๆ (AST)็ๅ็ง่ฏญๆณๆๆ๏ผๅณๆฏ Syntax Analyzerใ
002. quote ่งฃๆ่ฏญๆณๆ ๏ผ็ๆ Rust ไปฃ็ ๏ผไป่ๅฎ็ฐๆณ่ฆ็ๅ่ฝใ
003. proc_macro(std) ๅ proc_macro2(3rd-party)

ๅถไธญ proc_macro ๆไพ 3 ็ง่ฟ็จๅฎ็ๅฎไน๏ผ

- function-like macros #[proc_macro], 
- macro attributes #[proc_macro_attribute] 
- and custom derive attributes #[proc_macro_derive].

่ proc_macro2 ๅๅบไบไปฅไธไธคไธช็ฎ็ๅ่ฃ proc_macro๏ผ

- Bring proc-macro-like functionality to other contexts like build.rs and main.rs.
- Make procedural macros unit testable.

Rust ็่ฟ็จๅฎๅทฅ็จ proc_macro ๅฎๅจ็จไบ็ผๅ็นๅฎไบ็จๅบๅฎ๏ผTokenStream ไธ่ฝๅญๅจไบ็จๅบๅฎไนๅค็ไปฃ็ ไธญใ
่ proc_macro2 ็ฑปๅๅฏ่ฝๅญๅจไบไปปไฝๅฐๆน๏ผๅๆฌ้ๅฎไปฃ็ ใ

็ฑไบ็นๅฎไบ็จๅบๅฎ๏ผๅ ๆญคไฝฟ็จ proc_macro ็ไปปไฝๅๅฎน้ฝไธ่ฝไปๅๅๆต่ฏไธญๆง่กใไธบไบไฝฟๅฉๆๅบๆๅฎ็็ปไปถๅฏไปฅ
ๅ็ฌๆต่ฏ๏ผๅฟ้กปไฝฟ็จ proc_macro2 ๅฎ็ฐๅฎไปฌใ


ๅฏไปฅๅ่ Tokio ๅผๆญฅ I/O ๅค็ๅทฅๅท๏ผๅฎๅฐฑ้่ฟๅฑๆง่ฟ็จๅฎ `#[tokio::main]` ๅ่ฃๅฅๅฃๅฝๆฐไธบๅผๆญฅๅฝๆฐใ

Tokio is an event-driven, non-blocking I/O platform for writing asynchronous applications 
with the Rust programming language.

ไพๅฆ๏ผไปฅไธๆฏไฝฟ็จ `println!("{input:#?}");` ๆๅฐ `2, 2` ่ฟไธช่กจ่พพๅผๅฏนๅบ็ TokenStream ๅฏน่ฑก๏ผ

    TokenStream [
        Literal {
            kind: Integer,
            symbol: "2",
            suffix: None,
            span: #0 bytes(615..616),
        },
        Punct {
            ch: ',',
            spacing: Alone,
            span: #0 bytes(616..617),
        },
        Literal {
            kind: Integer,
            symbol: "2",
            suffix: None,
            span: #0 bytes(618..619),
        },
    ]

ไปฅไธ่ฟไธช็ฎๅ่กจ่พพๅผไธบไพ๏ผ

    a + b + (c + d[0]) + e

่กจ่พพๅผ็ป่ฟ็ผ่ฏๅจ Parser ่ฟ็จๅ๏ผ่ฝฌๅไธบไปฅไธ่ฟๆ ท็ AST๏ผๅฝ็ถๅฎๅจๅๅญไธญ็ๆฐๆฎๅนถไธๆฏ้ฟ่ฟๆ ท๏ผ่ฟ้ๅชๆฏๅพๅฝขๅฐๆฐๆฎๅณ็ณป่กจ่พพๅบๆฅ่ๅทฒ๏ผ

                  โโโโโโโโโโโ
                  โ BinOp   โ
                  โ op: Add โ
                โโดโ lhs: โ  โ
    โโโโโโโโโโโ โ โ rhs: โ  โโถโ โโโโโโโโโโโ
    โ Var     โโถโ โโโโโโโโโโโ โโดโ BinOp   โ
    โ name: a โ                 โ op: Add โ
    โโโโโโโโโโโ               โโดโ lhs: โ  โ
                  โโโโโโโโโโโ โ โ rhs: โ  โโถโ โโโโโโโโโโโ
                  โ Var     โโถโ โโโโโโโโโโโ โโดโ BinOp   โ
                  โ name: b โ                 โ op: Add โ
                  โโโโโโโโโโโ               โโดโ lhs: โ  โ
                                โโโโโโโโโโโ โ โ rhs: โ  โโถโ โโโโโโโโโโโ
                                โ BinOp   โโถโ โโโโโโโโโโโ โโดโ Var     โ
                                โ op: Add โ                 โ name: e โ
                              โโดโ lhs: โ  โ                 โโโโโโโโโโโ
                  โโโโโโโโโโโ โ โ rhs: โ  โโถโ โโโโโโโโโโโ
                  โ Var     โโถโ โโโโโโโโโโโ โโดโ Index   โ
                  โ name: c โ               โโดโ arr: โ  โ
                  โโโโโโโโโโโ   โโโโโโโโโโโ โ โ ind: โ  โโถโ โโโโโโโโโโโ
                                โ Var     โโถโ โโโโโโโโโโโ โโดโ LitInt  โ
                                โ name: d โ                 โ val: 0  โ
                                โโโโโโโโโโโ                 โโโโโโโโโโโ

ๆฏไธชๆนๅ้ฝ่กจ็คบ AST ็ไธไธช่็น๏ผๅฏนๅบ็ๆฏไธ็งๆไฝ๏ผๅฎๅซๆไธคไธช่พๅฅ๏ผ่ฟๆ ท็็ปๆ้ๅธธๆๅฉไบไบๅๆ ่ฟ็งๆฐๆฎ็ปๆ็ๅฎ็ฐใ

ๅ่ฟๆฅ๏ผๆ นๆฎ AST ๅฏไปฅๆ้ ๅบไปปๆ่ฏญๆณ็็ปๆ็ๆบไปฃ็ ๏ผ

    โโโโโโโโโโโโโโโ
    โ Let         โ
    โ name: eight โ   โโโโโโโโโโโ
    โ init: โ     โโถโโดโ BinOp   โ
    โโโโโโโโโโโโโโโ   โ op: Mul โ
                    โโดโ lhs: โ  โ                    -----------> let eight = 2 * four!();
         โโโโโโโโโโ โ โ rhs: โ  โโถโ โโโโโโโโโโโโโโ
         โ LitInt โโถโ โโโโโโโโโโโ โโดโ Macro      โ
         โ val: 2 โ                 โ name: four โ
         โโโโโโโโโโ                 โ body: ()   โ
                                    โโโโโโโโโโโโโโ

โ Crate Syn

Syn is a parsing library for parsing a stream of Rust tokens into a syntax tree of Rust source code.

Currently this library is geared toward use in Rust procedural macros, but contains 
some APIs that may be useful more generally.

- **Data structures** โ Syn provides a complete syntax tree that can represent 
    any valid Rust source code. The syntax tree is rooted at **syn::File** which 
    represents a full source file, but there are other entry points that may be 
    useful to procedural macros including **syn::Item**, **syn::Expr** and **syn::Type**.

- **Derives** โ Of particular interest to derive macros is **syn::DeriveInput** which
    is any of the three legal input items to a derive macro. An example below shows 
    using this type in a library that can derive implementations of a user-defined trait.

- **Parsing** โ Parsing in Syn is built around parser functions with the signature 
    `fn(ParseStream) -> Result<T>`. Every syntax tree node defined by Syn is individually 
    parsable and may be used as a building block for custom syntaxes, or you may 
    dream up your own brand new syntax without involving any of our syntax tree types.

- **Location information** โ Every token parsed by Syn is associated with a Span 
    that tracks line and column information back to the source of that token. 
    These spans allow a procedural macro to display detailed error messages 
    pointing to all the right places in the user's code. There is an example of this below.

- **Feature flags** โ Functionality is aggressively feature gated so your procedural 
    macros enable only what they need, and do not pay in compile time for all the rest.


Example of a derive macro

The canonical derive macro using Syn looks like this. We write an ordinary Rust 
function tagged with a **proc_macro_derive** attribute and the name of the trait 
we are deriving. Any time that derive appears in the user's code, the Rust compiler 
passes their data structure as tokens into our macro. We get to execute arbitrary 
Rust code to figure out what to do with those tokens, then hand some tokens back 
to the compiler to compile into the user's crate.


```rust,ignore
extern crate proc_macro;

use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, DeriveInput};

#[proc_macro_derive(MyMacro)]
pub fn my_macro(input: TokenStream) -> TokenStream {
    // Parse the input tokens into a syntax tree
    let input = parse_macro_input!(input as DeriveInput);

    // Build the output, possibly using quasi-quotation
    let expanded = quote! {
        // ...
    };

    // Hand the output tokens back to the compiler
    TokenStream::from(expanded)
}
```

โ Crate quote

The following quasi-quoted block of code is something you might find in a procedural 
macro having to do with data structure serialization. The #var syntax performs 
interpolation of runtime variables into the quoted tokens. 

Check out the documentation of the **quote!** macro for more detail about the syntax.

See also the **quote_spanned!** macro which is important for implementing hygienic procedural macros.


```rust,ignore
let tokens = quote! {
    struct SerializeWith #generics #where_clause {
        value: &'a #field_ty,
        phantom: core::marker::PhantomData<#item_ty>,
    }

    impl #generics serde::Serialize for SerializeWith #generics #where_clause {
        fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
        where
            S: serde::Serializer,
        {
            #path(self.value, serializer)
        }
    }

    SerializeWith {
        value: #value,
        phantom: core::marker::PhantomData::<#item_ty>,
    }
};
```


โ Crate proc_macro2

A wrapper around the procedural macro API of the compiler's proc_macro crate. 
This library serves two purposes:

- Bring proc-macro-like functionality to other contexts like build.rs and main.rs. 

Types from proc_macro are entirely specific to procedural macros and cannot ever 
exist in code outside of a procedural macro. Meanwhile proc_macro2 types may exist 
anywhere including non-macro code. By developing foundational libraries like syn 
and quote against proc_macro2 rather than proc_macro, the procedural macro ecosystem 
becomes easily applicable to many other use cases and we avoid reimplementing 
non-macro equivalents of those libraries.

- Make procedural macros unit testable. 

As a consequence of being specific to procedural macros, nothing that uses proc_macro 
can be executed from a unit test. In order for helper libraries or components of 
a macro to be testable in isolation, they must be implemented using proc_macro2.


Usage
The skeleton of a typical procedural macro typically looks like this:

```rust,ignore
extern crate proc_macro;

#[proc_macro_derive(MyDerive)]
pub fn my_derive(input: proc_macro::TokenStream) -> proc_macro::TokenStream {
    let input = proc_macro2::TokenStream::from(input);

    let output: proc_macro2::TokenStream = {
        /* transform input */
    };

    proc_macro::TokenStream::from(output)
}
```

If parsing with Syn, you'll use parse_macro_input! instead to propagate parse errors correctly back to the compiler when parsing fails.




# ๐ก๐  Reflection
- https://doc.rust-lang.org/stable/std/any
- https://doc.rust-lang.org/stable/std/any/struct.TypeId.html
- https://doc.rust-lang.org/stable/std/intrinsics/fn.type_id.html

Rust ๆฏ้ๆ็ฑปๅ่ฏญ่จ๏ผไธๅ Java ่ฟ็ฑปไฝฟ็จ่ๆๆบ็่ฏญ่จ๏ผๆฒกๆๅผบๅคง็ๅๅฐๆบๅถใRust ๆไพ็ๅๅฐไธ็ง็ผ่ฏๆถๅๅฐ๏ผๅช่ฝๅฏน `'static` ็ๅฝๅจๆ็ๅ้๏ผๅธธ้๏ผ่ฟ่กๅๅฐ๏ผ

Ruat ๆไพ trait Any ๆฅๆจกๆไธไธชๅจๆ็ฑปๅ๏ผๅฎๆฌ่บซๅฐฑๆฏ `'static`๏ผ็ปๅ TypeId ๆไพไบ็ฎๅ็่ฟ่กๆถๅๅฐ็่ฝๅใไฝฟ็จๅฎไปฌ๏ผๅฐฑๅฏไปฅ็จๆฅๅฎ็ฐไพ่ตๅ่ฝฌๆจกๅผ๏ผๅฎ็ฐไปปๆ็ฑปๅๅฎนๅจใ

```rust,ignore
#![feature(type_name_of_val)]
use std::any::{Any, TypeId, type_name_of_val};

let boxed: Box<dyn Any> = Box::new(3_i32);

// You're more likely to want this:
let actual_id = (&*boxed).type_id();
// ... than this:
let boxed_id = boxed.type_id();

assert_eq!(actual_id, TypeId::of::<i32>());
assert_eq!(boxed_id, TypeId::of::<Box<dyn Any>>());
assert_eq!("core::any::TypeId", type_name_of_val(&actual_id));
```

้คไบ trait Any ๅฎไน็ type_id ๆนๆณ๏ผๅจ std::any ๆจกๅ่ฟไธบไปฅไธไธ็ง `dyn Any` ็ฑปๅๅฎ็ฐไบๅฆๅคไธไธชๆนๆณ๏ผ

```rust,ignore
pub trait Any: 'static {
    pub fn type_id(&self) -> TypeId;
}

impl dyn Any + 'static
impl dyn Any + 'static + Send
impl dyn Any + 'static + Send + Sync

pub fn is<T: Any>(&self) -> bool
pub fn downcast_ref<T: Any>(&self) -> Option<&T>
pub fn downcast_mut<T: Any>(&mut self) -> Option<&mut T>
```

TypeId ๅๅซ็ฑปๅๆ ่ฏ๏ผๅไธ็ง็ฑปๅๅฝ็ถๅทๆ็ธๅ็็ฑปๅๆ ่ฏใ

```rust,ignore
#[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Debug, Hash)]
#[stable(feature = "rust1", since = "1.0.0")]
pub struct TypeId {
    t: u64,
}

impl TypeId {
    #[stable(feature = "rust1", since = "1.0.0")]
    #[rustc_const_unstable(feature = "const_type_id", issue = "77125")]
    pub const fn of<T: ?Sized + 'static>() -> TypeId {
        TypeId { t: intrinsics::type_id::<T>() }
    }
}
```



# ๐ก๐  Test ่ชๅจๆต่ฏ
- https://doc.rust-lang.org/book/ch11-00-testing.html
- https://doc.rust-lang.org/book/ch14-02-publishing-to-crates-io.html#documentation-comments-as-tests
- https://doc.rust-lang.org/book/ch12-04-testing-the-librarys-functionality.html

่ชๅจๅๆต่ฏๆฏ็ฐไปฃๅ็ผ็จๅฟไธๅฏๅฐ็ๅทฅๅท๏ผๅฎ่ฝๆๆๆๅฐๆ้ซ็จๅบๅผๅๆ็๏ผๅๆถๆดๆๆๅฐๆ้ซ่ฝฏไปถ็ๅฏ็จๆงใ
ไป่ฟ็นๅบๅ๏ผๆไธ็งๅผๅๆจกๅผๅฐฑๅซๅๆต่ฏ้ฉฑๅจๅผๅ TDD - Test-Driven Developmentใ

- ็ผๅๆๆๅพๅฐ fails ็ๆต่ฏใ
- ็ผๅๆไฟฎๆนไปฃ็ ไปฅไฝฟๆฐ็ๆต่ฏ้่ฟใ
- ้ๆๅๅๆทปๅ ๆๆดๆน็ไปฃ็ ๏ผไฟๆๆต่ฏ้่ฟใ
- ้ๅค step 1!

Edsger W. Dijkstra ๅจไป 1972 ๅนด็่ฎบๆใ่ฐฆๅ็็จๅบๅใไธญ่ฏด๏ผโๆต่ฏไปฅไธ็ง้ๅธธๆๆ็ๆนๆณๆฅๆพ็คบ bug 
็ๅญๅจ๏ผไฝๆฏๅฎๅฏนไบๆพ็คบ bug ็ไธๅญๅจๆฏๆ ๆณๅฎ็ฐ็ใโ

Rust ๆไพไบไธไบๅฎๅธฎๅฉ็ผๅๆต่ฏ่ๆฌ๏ผๅฆๅฐ `#[test]` ๅๅจๅฝๆฐๅ่กจ็คบไธไธชๆง่กๆต่ฏๆถ cargo test ่ฟ่ก็ๅฝๆฐ๏ผ

```rust,ignore
#[test]
fn it_works() {
    assert_eq!(2 + 2, 4);
}
```

่ฟไธช`#[test]`ๅฎๆ ่ฎฐ่ฟ็ๅฝๆฐไผ่ขซ cargo build ็ผ่ฏๅฝไปคๅฟฝ็ฅ๏ผ่่ขซ cargo test ๅฝไปค่ฟ่กใ

่ฟๅฏไปฅๆๅฎๅค็บฟ็จ่ฟ่กๆต่ฏ๏ผๆ่ไฝฟ็จ`show-output`ๆพ็คบ `println!()` ๆๅฐ็ไฟกๆฏ๏ผ

    cargo test -- --test-threads=2
    cargo test -- --show-output

ๅๆ่ๆๅฎๆง่กๆไธชๆต่ฏๅฝๆฐ๏ผไนๅฏไปฅๅชๆๅฎๅ็ผ๏ผ่ฟๆ ทๅฏไปฅ่ฟ่กๆไบๆต่ฏๅฝๆฐ๏ผ

    cargo test it_works


ๅฉ็จไปฅไธๅฎๅฏไปฅ่ฟ่กๆญ่จ๏ผๅฏน้่ฆ่ฟ่กๆต่ฏ็ไปฃ็ ่ฟๅๅผ่ฟ่กๆฏ่พ๏ผ

- `assert!(boolean)` ไฟ่ฏๆกไปถๆ็ซใ
- `assert_eq!(a, b)` ไฟ่ฏไธคไธชๅผ็ญไปทใ
- `assert_ne!(a, b)` ไฟ่ฏไธคไธชๅผไธ็ญไปทใ

```rust,ignore
let a = 3; let b = 27;
assert!(a + b == 30, "a = {}, b = {}", a, b);
assert_eq!(a, b, "we are testing addition with {} and {}", a, b);
```

ๅฆๆ่ขซๆต่ฏ็ไปฃ็ ๅจๆๅฎๆกไปถๆง่กๆถไผ panic๏ผ้ฃไนๅฐฑๅฏไปฅๅจๆต่ฏๆนๆณไธญไฝฟ็จ `#[should_panic]` ๆ็คบ Rustใ

```rust,ignore
#[test]
#[should_panic(expected = "Guess value must be less than or equal to 100")]
fn greater_than_100() {
    Guess::new(200);
}
```

ๅฏนไบๅคๆ็ๆกไปถ๏ผๅฏไปฅๅจๆต่ฏๅฝๆฐไธญไฝฟ็จ`Result<T, E>`๏ผ่ฟๅ Ok ๅผ่กจ็คบ้่ฟๆต่ฏ๏ผ

```rust,ignore
#[test]
fn it_works_2() -> Result<(), String> {
    if 2 + 2 == 4 {
        Ok(())
    } else {
        Err(String::from("two plus two does not equal four"))
    }
}
```

ๅฆๆๆไธชๆต่ฏๅฝๆฐ้ๅธธ่ๆถ๏ผๆๆๆถๆฒกๆดๆฐ๏ผๅฏไปฅไฝฟ็จ`#[ignore]`ๅฎๆ ่ฎฐๅฎ๏ผไธ่ฎฉๅฎๅไธๆต่ฏ๏ผ

```rust,ignore
#[test]
#[ignore]
fn expensive_test() {
    // code that takes an hour to run
}
```

Rust ็ๆต่ฏ็นๆงๆ็ฒพ็ปๅบฆๅๅ๏ผๅไธบๅฝๆฐ็บงใๆจกๅ็บงใๅทฅ็จ็บง 3 ไธชๅฑๆฌก๏ผๆง่กๆต่ฏไนๅฏนๅบๆ 3 ไธชๆต่ฏ่พๅบใๆๅ๏ผ่ฟๆ Doc-tests ่พๅบ็ๆฏๆณจ่งฃๆๆกฃ้จๅ็ๆต่ฏใ

ๅทฅ็จ็บง็ๆต่ฏ่ๆฌๅจๆ นๆฎ่ฎฟ่ฐๅฝไธ็ tests ๆไปถๅคนๅฎไน๏ผไปฃ็ ๆไปถๅไปปๆใ

ๅฏนไบ้่ฆๅจๅคไธชๆต่ฏๅฝๆฐไฝฟ็จ็้็ฝฎ๏ผๅฏไปฅๅจ tests/common.rs ๅฎไน๏ผๅฆไธ๏ผ

```rust,ignore
pub fn setup() {
    // setup code specific to your library's tests would go here
}
```

ๅจๅถๅฎๆต่ฏๅฝๆฐ้่ฆไฝฟ็จๆถ๏ผๅผ็จไปฅไธๅฎไน็ๅฝๆฐ๏ผ

```rust,ignore
use adder;

mod common;

#[test]
fn it_adds_two() {
    common::setup();
    assert_eq!(4, adder::add_two(2));
}
```


ไฝฟ็จ `#[cfg(test)]` ้็ฝฎไธไธชไฝไธบๆต่ฏไธ็จๆจกๅๆฏๅพๅฅฝ็ไน ๆฏ๏ผ่ฟๆ ท็ป็ป็ไปฃ็ ๆดๆๆก็๏ผๅฏไปฅๅๅจไปฃ็ 
ๆไปถ็ๅผๅคด๏ผ่กจ็คบ่ฟไธชๆไปถๅฐฑๆฏไธไธชๆต่ฏๆจกๅ๏ผ

```rust,ignore
pub fn add_two(a: i32) -> i32 {
    internal_adder(a, 2)
}

fn internal_adder(a: i32, b: i32) -> i32 {
    a + b
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn internal() {
        assert_eq!(4, internal_adder(2, 2));
    }
}
```

Rust ๆณจ่งฃๆๆกฃๆฏๅทๆๅ่ฝ็๏ผๅฎๅฏไปฅ้่ฟๆณจ่งฃ็ๆๆๆกฃ๏ผ่ไธๆฏๅ็ฌ็ผๅๆๆกฃใไธๆฏไปฃ็ ๆฌ่บซๆฏๆๆกฃ๏ผไบๆฏไปฃ็ ็ๆณจ้ๅฐฑๆฏๆๆกฃใRust ไธไฝๅฏไปฅ่ชๅจๆฝๅไปฃ็ ไธญ็ๆๆกฃ๏ผๅฝขๆๆ ๅๅฝขๅผ็ๆๆกฃ้ๅ๏ผ่ฟๅฏไปฅๅฏนๆๆกฃไธญ็็คบไพไปฃ็ ่ฟ่กๆต่ฏใ

ๆฏๅฆ๏ผๆไปฌ็ปไธ้ขๅบๅ ็นๆๆกฃ๏ผ

```rust,ignore
//! The `adder` crate provides functions that add numbers to other numbers.
//!
//! # Examples
//!
//! ```
//! assert_eq!(4, adder::add_two(2));
//! ```

/// This function adds two to its argument.
///
/// # Examples
///
/// ```
/// use adder::add_two;
///
/// assert_eq!(4, add_two(2));
/// ```

pub fn add_two(a: i32) -> i32 {
   a + 2
}

#[cfg(test)]
mod tests {
   use super::*;

   #[test]
   fn it_works() {
      assert_eq!(4, add_two(2));
   }
}
```



# ๐ก๐  Asynchronous ๅผๆญฅ็ผ็จ
- [Asynchronous Programming in Rust](https://rust-lang.github.io/async-book/01_getting_started/01_chapter.html)
- [Rustโs Journey to Async/Await - Steve Klabnik](https://qconnewyork.com/ny2019/presentation/rust)
- [Rust's Journey to Async/await - Steve Klabnik](https://www.infoq.com/presentations/rust-2019/)
- [Zero-cost futures in Rust - Aaron Turon](http://aturon.github.io/blog/2016/08/11/futures/)
- [Speed Up Your Python Program With Concurrency by Jim Anderson](https://realpython.com/python-concurrency/)
- [Rust ไธญ็ๅผๆญฅ็ผ็จ](https://huangjj27.github.io/async-book/01_getting_started/01_chapter.html)
- [Rust ๅผๆญฅ็ผ็จ](https://learnku.com/docs/async-book/2018/translation-notes/4798)
- [The Node Experiment - Exploring Async Basics with Rust](https://cfsamson.github.io/book-exploring-async-basics/introduction.html)
- [Epoll, Kqueue and IOCP Explained with Rust](https://cfsamsonbooks.gitbook.io/epoll-kqueue-iocp-explained/)
- [Linux็I/Oๅค่ทฏๅค็จๆบๅถ](https://journey-c.github.io/io-multiplexing/)
- [Async: What is blocking?](https://ryhl.io/blog/async-what-is-blocking/)
- [Rust Asynchronous Programming - ๅๅฏจๅฐๅญ](https://kangxiaoning.github.io/post/2021/03/rust-asynchronous-programming/)
- [[MIT] 6.828: Operating System Engineering](https://pdos.csail.mit.edu/6.828/2018/schedule.html)
- [Lab 4: Preemptive Multitasking](https://pdos.csail.mit.edu/6.828/2018/labs/lab4/)

็ฎๅๅฐ่ฏด๏ผๅผๆญฅ็ผ็จๆฏไธ็งๅนถๅ็ผ็จๆจกๅ๏ผconcurrent programming model๏ผๅ JavaScript ็ญ่ฏญ่จ้ฝ
ๆไพไบ `async/await` ๅผๆญฅ็ผ็จ่ฏญๆณๆฏๆใ

ๅนถๅๅๅนถ่ก๏ผConcurrency vs. Parallelism๏ผไธคไธช็ธๅณ็ๆฆๅฟต๏ผๅธธๅบ็ฐๅจๅคไปปๅกๅค็ไธญใๆถ้ดไธๅนณ่ก็ไบไปถ
ๅฐฑๅซๅๅนถ่ก๏ผๅๆถไนๆฏๅนถๅไธ็งๅฝขๅผใไฝๅ่ฟๆฅๅฐฑไธๆ็ซ๏ผๅจไธคไธชไบไปถไน้ดไบคๆฟ่ฟ่ก๏ผ่ฟๅฐฑๆฏๅนถๅ๏ผไฝไธๆฏๅนถ่กใ

ไธ่ฌๅฐ๏ผๅคไปปๅกๅค็ๆไธค็งๅบๆฌๆนๅผ๏ผ

- Preemptive multitasking ๆขๅ ๅผๅคไปปๅกๅค็ๅค็๏ผ
- Non-preemptive multitasking (or cooperative multitasking) ๅไฝๅผๅคไปปๅกๅค็๏ผ

้ๅธธ๏ผๆไฝ็ณป็ปไธไผ้็จๆขๅ ๅผๅคไปปๅกๅค็๏ผ่ๅผๆญฅ็ผ็จไธญไฝฟ็จๅไฝๅผๅคไปปๅกๅค็ใ

ๆขๅ ๅผๅคไปปๅก็น็นๆฏ๏ผ่ฐๅบฆ็จๅบๅณๅฎไบไปปๅก็่ฟ่กๆๅๆญข๏ผไปปๅกๆฌ่บซๆฒกๆไปไน่ฏ่ฏญๆ๏ผๅณ็ญๆฏ็ฑ่ฐๅบฆๅจๅๅบ็ใ
ๅไฝๅผๅคไปปๅก็น็นๆฏ๏ผไปปๅก่ช่กๅณๅฎ CPU ไฝๆถๅๅถไปไบๆ๏ผๆฏ็ญๅพๅฝๅไปปๅกๆดๅฅฝ็้ๆฉๆฏ๏ผyield๏ผๆพๅผ็ญๅพใ
ๅฝไธไธชๅผๆญฅไปปๅกๆพๅผไธปๅจๆๆถ๏ผyield๏ผ๏ผไธปๅจๆๅฐฑไผไบค่ฟ็ปไปปๅก่ฐๅบฆๅจ๏ผ็ฑ่ฐๅบฆๅจๅณๅฎๅถๅฎไปปๅก็ๆง่กใๅจๅบๅฑ
ๅฎ็ฐไธ๏ผๆพๅผ yield ่ฟไธชๆไฝๅฐฑ็ธๅฝไบๆง่กไปปๅกไธไธๆ็ๅๆข๏ผๅๆฌๅ ๆ ็ไฟๆคไธๅคๅใ

ๅๅฐๅนถๅ็ผ็จ่ฟไธช้ฎ้ขไธๆฅ๏ผๆไฝ็ณป็ปๅฏไปฅๅนถ่กๅฐ่ฟ่กๅคไธช็จๅบ๏ผๅนถ่ก็็บฟ็จๅฏไปฅๅจๅไธๆถ้ดๅไธๅ็ไบๆ๏ผ่
ๅนถๅไธไธๅฎ้่ฆ็จๅบๆๅคไธชๅนถ่ก็็บฟ็จ๏ผๅช่ฆ่ฝๅจไธๅฎๆถ้ดๅ็จๅคไธช็บฟ็จใๅ็จๆๅผๆญฅๅฐๅค็ไธๅฎ้็ไปปๅกๅฐฑ็ฎๆฏ
ๅนถๅไปปๅกๅค็ใ

่ฟๆไปฅ้่ฆๅนถๅ็ผ็จๆจกๅ๏ผๆฏๅ ไธบ่ฎก็ฎๆบ็จๅบ้ขๅฏน็้ฎ้ขๆไธค็ง๏ผ

- CPU-bound ็บฏ่ฎก็ฎ่ตๆบๅฏ้ๅ้ฎ้ข๏ผ
- I/O-bound ่พๅฅ่พๅบๆไฝๅฏ้ๅ้ฎ้ข๏ผ

ๅฎไปฌ็ๅบๅซๅจไบ๏ผๅ่้่ฆๅคง้็ CPU ็ฎๅ๏ผๅ่้่ฆๅคง้็ I/O ๆไฝ๏ผไธไผๆๅคง้็็ญๅพๆฐๆฎ็ๅปถๆถใๅฉ็จ
ๅคๆ ธๅฟ่ฟ่กๅค็บฟ็จ็ๅนถๅๅฏไปฅๆๆๆๅฐๅฉ็จ็ฐไปฃๅคๆ ธๅฟ CPU ็็ฎๅ๏ผ่ๅผๆญฅ็ผ็จๅๅฏไปฅๅจๅ็บฟ็จ็ๆกไปถไธ๏ผๅพๅฅฝ
ๅฐๅค็ I/O ๅฏ้ๅ็ๅนถๅไปปๅกๅค็ใ

ไธ่ฌ่่จ๏ผๆไฝ็ณป็ป็บฟ็จ้ๅๅฐ้็ไปปๅกๅค็๏ผๅ ไธบ้ข็นๅๆข็บฟ็จ็ๆถ้ดๆๆฌๅพ้ซใ่ๅ็จๆๅผๆญฅ็ผ็จๅ้ๅๅคง้
ไปปๅก็ๅค็๏ผๅ ไธบๅฎไปฌ่ฝป้๏ผๅๆขไปปๅก็ๆถ้ดๆๆฌ่ฟ่ฟไฝไบๆไฝ็ณป็ป็็บฟ็จ่ฐๅบฆใ

ๅฐฑไธค็งๅบๆฌ้ฎ้ข่่จ๏ผๅฏไปฅไฝฟ็จ็็ผ็จๆจกๅๆ 4 ็ง๏ผ

- Synchronous ๅๆญฅ็ผ็จๆจกๅ๏ผๆ ๆณๆๆๅฉ็จๅคๆ ธ่ตๆบ๏ผๅฆ JavaScript๏ผ
- multithreading ๅค็บฟ็จๆจกๅ๏ผๅฏไปฅๆๆๅฉ็จๅคๆ ธๅฟ๏ผไฝๅฏนไบๅคง้ไปปๅกๆถ๏ผๅๆข็บฟ็จๆถ้ดๆๆฌ่พ้ซ๏ผ
- asyncio ๅผๆญฅ็ผ็จๆจกๅ๏ผๅๆฌๅ็จ๏ผๅจๅ็บฟ็จไธๆ ๆณๆๆๅฉ็จๅคๆ ธ่ตๆบ๏ผไฝๅฏน I/O ไปปๅกๅค็่พๅฅฝ๏ผ
- multiprocessing ๅค่ฟ็จๆจกๅ๏ผๅฏไปฅๆๆๅฉ็จๅคๆ ธๅฟ๏ผๅ่ฟ็จ็ธไบ็ฌ็ซ๏ผๆฏๅค็บฟ็จๆจกๅๆด็จณๅฎ๏ผ

ๅค็บฟ็จใๅค่ฟ็จๅๆถๅญๅจ็้ฎ้ขๆฏ่ตๆบๅฑไบซ็ซไบ้ฎ้ข๏ผไธ่ฌ้่ฆ้่ฟ่ตๆบ้ๆฅ่งฃๅณ็บฟ็จๅๆญฅใๅฆๅค๏ผ่ฟ็จไน้ดๅจ
ๆไฝ็ณป็ปๅฑ้ขไธไฝฟ็จ็ๆฏ็ธไบ็ฌ็ซ็ๅๅญ็ฉบ้ด๏ผๆไปฅๅฝผๆญคไธ่ฝ็ดๆฅๅฑไบซๅๅญ๏ผ้่ฆ้่ฟ IPC ๆๆฏๅฎ็ฐ้ไฟกใ

ๅ Python ่ฟๆ ท็่ฏญ่จ๏ผ่ฝ็ถๅฏไปฅไฝฟ็จๅค็บฟ็จ๏ผไฝๆฏ็ฑไบ CPython ๅฎ็ฐไธญไฝฟ็จไบ GIL ๅจๅฑ้๏ผๅค็บฟ็จไธ่ฝ
ๅนถ่กๆง่ก๏ผๅๆถๅช่ฝๆไธไธช็บฟ็จๅจๆง่ก๏ผ็ธๅฝไบๅ็บฟ็จๆจกๅใ

้่ฆไฝ ๅฏน่ฎก็ฎๆบไฝ็ณปๆถๆๆไธๅฎ่ฎค่ฏ๏ผๅณ่ฎก็ฎๆบ็็ปๆ๏ผ

- CPU ่ด่ดฃๆไปคๆง่กไธๆงๅถ๏ผ
- MCH - Memory Controller Hub ่ฏ็่ฟๆฅ้ซ้้จไปถ๏ผๅฆๅๅญใๆพๅก๏ผ
- Memory ๅๅญ้่ฟๅฐๅๆป็บฟ็ดๆฅไธ CPU ็ธ่ฟ๏ผๅนถๅๆงไบๅฎ๏ผ้่ฟๆฐๆฎๆป็บฟไธๅถไผ ่พๆฐๆฎ๏ผ
- ICH - I/O Controller Hub ่ฏ็่ฟๆฅๅ็งๅค้จไฝ้่พๅฅ่พๅบ่ฎพๅค๏ผๅฆ้ผ ๆ ใ้ฎ็ใ็กฌ็ใ PCI ๅค้จไบ่ฟๆป็บฟๆฉๅฑ่ฎพๅคใ

ๆดไธช็ณป็ปไธญ๏ผCPU ๆฏ่ฟ่ก้ๅบฆๆๅฟซ็๏ผ็ฐไปฃ็ CPU ไธป้ข้ไพฟ้ฝ GHz ไธบๅไฝ๏ผๅถๆฌก๏ผๆฏไธ CPU ็ดๆฅ็ธ่ฟ็
ๅๅญๅๆพๅก๏ผๅ็กฎๆฅ่ฎฒ๏ผไธญ้ด้่ฟๅๅญๆงๅถ่ฏ็ใๆๅ๏ผๆ้่ฟ ICH ่ฏ็ไธๅ็งไฝ้่ฎพๅค่ฟๆฅ๏ผ่ฟไบไฝ้่ฎพๅค
ๅไฝฟ็จๅ็ๆฅๅฃ่ง่๏ผๅฆ็กฌ็ไธ็้่ฟ ATA ๆ่พๆฐ็ Serial Advanced Technology Attachment (SATA)๏ผ
้ฎ็้ผ ๆ ้่ฟ Universal Serial Bus (USB)๏ผๆ่ๅฃฐๅก่ฟๆฅ้่ฟ Peripheral Component Interconnect (PIC)ใ

ๅ ไธบ๏ผ้ๅธธ็ๅจ่ฎก็ฎๆบๆถๆๅพไธญ๏ผCPU ๅจๆไธ้ข๏ผๅถๆฌกๆฏ MCH ่ฏ็๏ผๆไธ้ขๆฏ ICH ่ฏ็ๅๅ็งไฝ้ I/O ่ฎพๅค๏ผ
ๆไปฅไธคไธชไธป่ฆ่ฏ็ๅไฟ็งฐไธบๅๆกฅ่ฏ็ใๅๆกฅ่ฏ็ใๅฏนไบ CPU ๆฅ่ฏด๏ผๆๆๆฅ่ฟ็้ฝๅฑไบ I/O ่ฎพๅค๏ผๆไปค้่ฆไปๅๅญไธญ
่พๅฅ๏ผๅค็ๅพๅฐ็ๆฐๆฎๅฏไปฅๅๅฅๅๅญใ็กฌ็๏ผๆ่่พๅบๅฐๆพๅก๏ผๆ็ปๅจ่พๅบๅฐๆพ็คบๅจ๏ผๅๆ่ๆฏๅถๅฎ่ฎพๅคใ

                           +------------------+
                           | ======CPU======= |
                           +--------+---------+
                                    |
                       +------------+--------------+
        +-----+        |                           |    +------+
        | AGP +--------+ MCH(Memory Controller Hub)+----+Memory|
        +--+--+        |                           |    +------+
           |           +------------+--------------+
    +------+-------+                |
    |              |   +------------+--------------+     +-----+
    |   Display    |   |                           |     |     |
    |              |   | ICH(I/O Controller Hub)   +-----+   -->
    +--------------+   |                           |     | PCI |
                       +---+--------+-------+----+-+     |   -->
                           |        |       |    |       |     |
              +----------+ |   +----+---+   |  +-+-----+ |   -->
          +---+   USB    +-+   |  ATA   |   |  |Network| |     |
          |   +-------+--+     +----+---+   |  +-------+ |   -->
          |           |             |       |            |     |
      +---+---+  +----+---+  +------+--+ +--+--------+   |   -->
      | Mouse |  |Keyboard|  |Hard Disk| | Flash BIOS|   |     |
      +-------+  +--------+  +---------+ +-----------+   +-----+

้ปๅกๅ้้ปๅก๏ผBlocking vs. Non-blocking๏ผๆฏไธๅฏนๅณ่ๆฆๅฟต๏ผ้ปๅก้ๅคๅฏ่ง๏ผๆฏๅจไธคๆนๅค็้ๅบฆไธๅบ็ฐ
ๅทฎๅผๆถไฝ็ฐๅบๆฅ็ๅค็ๆนๅผ๏ผๅณไฝฟๆฏๅฟซ้็ๅๅญ่ฎฟ้ฎไนๅฏ่ฝ้ปๅกใๆฏๅฆ๏ผ็บฟ็จ็ณ่ฏท่ฎฟ้ฎ็ๅๅญไฝไบไบคๆขๅๅบ๏ผๅ่ฏฅ
็บฟ็จๅฐไธ็ด้ปๅก็ดๅฐ้กตๆฐๆฎไป็ฉ็็ฃ็ๆๅๅฐๅๅญใ

- Blocking ๆฏๆไปปๅกๅจๆง่กๆถ๏ผ่ฏทๆฑๆไฝๆกไปถไธๆปก่ถณ๏ผ้ฃไน็บฟ็จๅฐฑไผไธ็ด็ญๅพ๏ผ็ดๅฐๆกไปถๆปก่ถณๅๆ็ปง็ปญๆง่กใ
- Non-Blocking ๆฏๆไปปๅกๅจๆง่กๆถ๏ผ่ฏทๆฑๆไฝๆกไปถไธๆปก่ถณ๏ผไผ็ซๅณๅพๅฐไธไธช็ญๅค๏ผ่ไธไผไธ็ดๅจ็ญๅพไธๅปใ

ๅๆญฅไธๅผๆญฅ๏ผSynchronous vs. Asynchronous ๆฏไธๅฏนๅณ่ๆฆๅฟต๏ผๆ่ฟฐ็ๆฏไบๆๅค็็ๆๅบๆง๏ผๆๆ ๅบๆงใ
ๅ้ปๅก็ๅบๅซๅพๅคง๏ผไฝๅไธๅคชๆๆพ๏ผ้ปๅกๆๅณ็**็ญๅพ**๏ผ่ๅๆญฅๆๅณ็**ๆๅบ**๏ผๅฎไปฌ็ๅๆถตๅฎๅจไธๅใ

ๆฏๅฆ่ฏด๏ผๅๆญฅไปฃ็ ไธๅผๆญฅไปฃ็ ๏ผๅๆญฅไปฃ็ ๅณๆ็ผๅ็้กบๅบๆง่กไธๅป๏ผๅณไฝฟ้ๅฐ้ปๅก็ๆๅต๏ผไนไธ็ด็ญๅพ็ดๅฐ็ปๆ๏ผ
่ๅผๆญฅไปฃ็ ๅไธๅ๏ผๅฎไธไผๆ้กบๅบๆง่ก๏ผๅณๅ้ข็ไปฃ็ ๅฏ่ฝไผๆฏๅ้ข็ไปฃ็ ๆดๅไบๆง่กใ

ๅๆฏๅฆ๏ผI/O ไธ็ๅๆญฅไธๅผๆญฅๅค็๏ผ

- Synchronous I/O ๆฏๆไธไธช็บฟ็จๅจๆง่ก IO ๆไฝๆถ๏ผ่ฏฅ็บฟ็จๅจๆไฝๅฎๆๅไผ่ขซ้ปๅกใ
- Asynchronous I/O ๆฏๆไธไธช็บฟ็จๅจๆง่ก IO ๆไฝๆถ๏ผ่ฏฅ็บฟ็จๅนถไธไผ่ขซ้ปๅกใ

Steve Klabnik - Rustโs Journey to Async/Await ๆผ็คบๆ็จฟไธญ็ไธๅผ ่กจ่ฏดๆไบไธค็ง็ปๅ็ไฝ็จ๏ผ

|              |        Synchronous         |    Asynchronous    |
|--------------|----------------------------|--------------------|
| Blocking     | Old-school implementations | Doesnโt make sense |
| Non-blocking | Go, Ruby                   | Node.js            |

ไปฅไธๆผ็คบ็จๅบๆจกๆไบ I/O ็ญๅพๆๅฝขไธ็ Blocking vs. Non-Blocking ็ไธค็งๅค็ๆนๅผ็ๅทฎๅซ๏ผๅจ้ปๅก
ๆนๅผไธ๏ผๆป็ๆถ้ดๆถ่็ญไบๅไธชๅญไปปๅก็ๆถ้ดๆถ่ๆปๅ 1 + 2 = 3 ็ง๏ผ่้้ปๅก็ๆนๅผไธ๏ผ็ญๅพๆถ้ด่ขซ้ๆฐ
ๅฎๆ๏ผ`await` ไผไบง็ไธไธชๅผๆญฅไปปๅก๏ผๅนถ็ปงๆฟๆง่กๅ้ข็ไปฃ็ ๏ผ่ไธๆฏๅ้ปๅกๆนๅผ้ฃๆ ทๅนฒ็ญใๅจๆถ้ดไธ๏ผๆๆ
ไปปๅกๅ ไนๅๆถ่ฟๅฅ็ญๅพ๏ผๆ็ปๆถ้ดๆถ่ๅฐฑไปฅๆๅคง็ญๅพๆถ้ด็ไปปๅกไธบๅ๏ผ่ฟๅฐฑๆฏไธบไฝๅผๆญฅ็ผ็จๆจกๅๅฏไปฅๆๅ I/O 
ไปปๅก็ๅนถๅ่ฝๅ๏ผ

    Time elapsed [non-blocking]: 2.0326444s
    Time elapsed [blocking]: 5.0523886s

ๅฅๅฃๅฝๆฐ main() ๆฏๅๆญฅๆง่ก็ไปฃ็ ๏ผๅจๅๆญฅไปฃ็ ไธญ่ฟๅฅๅผๆญฅ็ไธ็๏ผๅฏไปฅ้่ฟ่ฐ็จ block_on() ๅฝๆฐใๆ
ๅค็ง้ๆฉ๏ผfutures::executor::block_on ๆ่ async_std::task::block_on ็ญ็ญใ

ไฝฟ็จ **async** ๅณ้ฎๅญๅฎไนไธไธชๅผๆญฅๅฝๆฐ๏ผๅจไธไธชๅผๆญฅๅฝๆฐๅ้จ๏ผๅๅฏไปฅไฝฟ็จ **await** ๅณ้ฎๅญๆฅ็ญๅพๅฆ
ไธไธชๅผๆญฅๅฝๆฐ็่พๅบใไปๅผๆญฅ่ฐ็จๅๆญฅไปฃ็ ๅไธ้่ฆๅไปปไฝ้ขๅค็ไบๆ๏ผๅช้่ฆ็ดๆฅ่ฐ็จๅๆญฅๅฝๆฐ๏ผไปๆญค่ๅทฒ๏ผ
ไฝๆฏ๏ผๅฐๅฟ้ฃไบ้่ฆๆง่กๆฏ่พ้ฟๆถ้ดๆๅฎๆ็ๅๆญฅๅฝๆฐ๏ผๅนถไธ่ฝๅจๅผๆญฅ็ไธ็้๏ผไธๅๆ็ดข็ๅป่ฐ็จๅๆญฅไปฃ็ ใ

ๅนถไธ๏ผๅผๆญฅไปฃ็ ไธ็้ปๅก๏ผๆฏๅฆ std::thread::sleep() ไบง็็็บฟ็จ้ปๅก๏ผ่ฟๅฐฑไผๅฏผ่ดๅผๆญฅไปฃ็ ๅผบๅถ่ฟๅฅ็ญๅพใ
่ๅถๅฎๅผๆญฅๆจก็ปๆไพ็ sleep() ๆนๆณๅๆฏไธไธชๅผๆญฅๅฝๆฐ๏ผๅฏไปฅไบง็ๅฏนๅบ็ๅผๆญฅไปปๅกๅปๅค็๏ผ้ฟๅ็บฟ็จ็้ปๅก๏ผ


```rust,ignore
use std::time::{Duration, Instant};
use futures::{/* executor::block_on, */ join};
use async_std::task::block_on;
use async_std::task::sleep;

async fn mock_io(d: u64) -> u64 {
    println!("Wait a async task to commplete...");
    sleep(Duration::from_secs(d)).await;
    println!("async done! [{}]", d);
    thread_blocking(d, false)
}

async fn mock_io_test() {
    let future_1st = mock_io(1);
    let future_2nd = mock_io(2);

    // Run both futures to completion at the same time.
    let result = join!(future_1st, future_2nd);
    assert_eq!(result, (1, 2));
    println!("{:?}", result);
}

fn main() {
    let inst = Instant::now();
    block_on(mock_io_test());
    println!("Elapsed time: {:?}", inst.elapsed());
}

fn thread_blocking(d:u64, block:bool) -> u64 {
    if block {
        // this sleep will blocking current thread
        std::thread::sleep(Duration::from_secs(d));
    }
    d
}
```

ไป่ฎก็ฎๆบ็กฌไปถไฝ็ณป็ปๆ็่งฃ๏ผCPU ็ไธญๆญ็ณป็ปๆไพไบไธไธช่ฝๅ๏ผ็จๅบๅจ็ญๅพ I/O ๆฐๆฎ่ฟๅฅ้ปๅก็ถๆ๏ผๅฝๆฐๆฎๅฐ
ๆฅๆถ่งฆๅไธไธช I/O ไธญๆญๅ่ฏ CPU ๅฏไปฅ็ปง็ปญๆง่กๅคไบ้ปๅก็ถๆ็็จๅบใ้ปๅกๆ้ด๏ผไธๆง่ก็บฟ็จ็ไปฃ็ ๏ผ่ฟไนๅฐฑๆฏ
ไธบไฝ้ปๅก็ถ่็ไบ CPU ่ตๆบใ

่ฎพๆณๅฆไธ็งๅบๆฏ๏ผCPU ่ฏทๆฑๅคๅด่ฎพๅค็ไธไบๆฐๆฎ๏ผๆฅ็ CPU ่ฟๅฅไธไธชๆ ้ๅพช็ฏ๏ผไธ็ดๅจๆฃๆฅๆฐๆฎๆฏๅฆๅฏ็จ็ดๅฐ
่ทๅพๆฐๆฎไธบๆญข๏ผ่ฟ็งๆนๆณ็งฐไธบ่ฝฎ่ฏข(polling)๏ผๆฏไธ็งๆถ่ CPU ๆถ้ด็่กไธบ๏ผไฝๆฏๆขๆฅ็ๆฏไธๅฎๆง่ฝๆๅใ

ไพๅฆ๏ผไปฅไธๅๅปบไธไธช็จๅบ็จๅผๆญฅใๅค็บฟ็จไธค็งๆนๅผไธ่ฝฝ Web ้กต้ข๏ผ

```sh
[dev-dependencies]
futures = "0.3"
tokio = { version = "1", features = ["full"] }
reqwest = { version = "0.11", features = ["json"] }
```

```rust,ignore
// #![cfg(test)]

use futures::{executor::block_on, join};
use std::thread;
use reqwest;


fn main() {
    get_two_sites_test();
    get_two_sites_async_test();
}

fn download(url: &str) {
    let body = reqwest::blocking::get(url).unwrap().text().unwrap();
    println!("download: {} {}", url, body.splitn(1, ' ').nth(0).unwrap());
}

// #[test]
fn get_two_sites_test() {
    // Spawn two threads to do work.
    let thread_one = thread::spawn(|| download("https://catfact.ninja/fact"));
    let thread_two = thread::spawn(|| download("http://httpbin.org/get"));

    // Wait for both threads to complete.
    thread_one.join().expect("thread one panicked");
    thread_two.join().expect("thread two panicked");
}

async fn download_async(url: &str) {
    let body = reqwest::get(url).await.unwrap().text().await.unwrap();
    println!("download async: {} {}", url, body.splitn(1, ' ').nth(0).unwrap());
}

async fn get_two_sites_async() {
    // Create two different "futures" which, when run to completion,
    // will asynchronously download the webpages.
    let future_one = download_async("https://catfact.ninja/fact");
    let future_two = download_async("http://httpbin.org/get");

    // Run both futures to completion at the same time.
    join!(future_one, future_two);
}

// #[test]
#[tokio::main]
async fn get_two_sites_async_test() {
    block_on(get_two_sites_async());
}
```

ๅ ไธบไธ่ฝฝๅ ไธช้กต้ขๅชๆฏๅพๅฐ็ไปปๅก๏ผๅนถไธไธๆฏ CPU ่ฎก็ฎไปปๅก๏ผๅๅปบๅค็บฟ็จๆพๅพ็ๅๆ้ธก๏ผๅพไธๅฟๅคฑใ็ธๅฏนไฝฟ็จๅผๆญฅ
ๅนถๅๅค็ๅฐฑๆพๅพๅ็ๅพๅค๏ผๅ ไธบ Web ้กต้ขๆฏๅธๅ็ I/O ๅฏ้ๅ้ฎ้ขใ

่ฏดๅฐๅผๆญฅ็ผ็จ๏ผๅฐฑไธๅพไธๆๅฐ Tokio ่ฟไธไธช Rust ่ฏญ่จๅฎ็ฐ็้ซๅฏ้ ใๅผๆญฅใ้้ปๅกใไบไปถ้ฉฑๅจ็ๅฐๅทง็่ฟ่กๅบ๏ผ
ๅฎๅจไธๅฝฑๅ้ๅบฆ็ๆๅตไธๆๅปบๅฏ้ ็็ฝ็ปๅบ็จ๏ผ็ตๆดปๅฐ้ๅฏนๅ็ง็ณป็ป๏ผไปๆฐๅไธชๆ ธๅฟ็ๅคงๅๆๅกๅจๅฐๅฐๅๅตๅฅๅผ่ฎพๅคใ
่ฎธๅคๅบ็จ้ฝไผไพ่ต่ฟไธชๅผๆญฅ I/O ๅทฅๅทใ

ๅจไธ้ข็ไพๅญไธญ๏ผๅ ไธบ HTTP ๅ่ฎฎๆจกๅ reqwest ้่ฆ Tokio ็ๅผๆญฅๆกๆถๆฏๆ๏ผๆไปฅ้่ฆ`#[tokio::main]`
ๆ ่ฎฐ็ธๅณ็ๅฅๅฃๅฝๆฐใๅฆๅ๏ผๅฐฑไผ่งฆๅ้่ฏฏ๏ผ

    there is no reactor running, must be called from the context of a Tokio 1.x runtime


ๆ นๆฎไธๅ็ๅบ็จๅบๅ๏ผๅๆญฅๆงๅ้ปๅกๆงๅฏไปฅ็ปๅๅฐไธ่ตทใใUnix ็ฝ็ป็ผ็จใๆๆไบ็ง I/O ๆจกๅ๏ผ

- **้ปๅก I/O ๆจกๅ**๏ผๆๅธธ่ง็ไธ็ง๏ผไธไธช read ๆไฝๅไธคไธช้ถๆฎต๏ผๅ็ญๅพๆฐๆฎๅๅคๅฐฑ็ปช๏ผๅๅฐๆฐๆฎๆท่ดๅฐ่ฐ็จ็็บฟ็จไธญใ้ปๅกๆฏๅ็ๅจ็ฌฌไธไธช้ถๆฎต็๏ผๆฐๆฎๅๅคๅฅฝไนๅไผไธ็ด้ปๅก็จๆท็บฟ็จ๏ผๅฝๆฐๆฎๅฐฑ็ปชๅๅๅฐๆฐๆฎๆท่ดๅฐ็บฟ็จไธญ๏ผๅนถ่ฟๅ็ปๆ็ป็จๆท็บฟ็จใ
- **้้ปๅก I/O ๆจกๅ**๏ผๅฝๅบ็จ็จๅบๅ่ตทไธไธช read ๆไฝๆถ๏ผๅนถไธไผ้ปๅก๏ผ่ๆฏ็ซๅปไผๆถๅฐไธไธช็ปๆ๏ผๆ็คบๆฐๆฎๆฏๅๅคๅฅฝไบๆฒกๆใๅคๆญ่ฟๅ็ปๆๆฏไธไธช้่ฏฏ็ถๆ๏ผๅฐฑ็ฅ้ๆฐๆฎ่ฟๆฒกๆๅๅคๅฅฝ๏ผๅฏไปฅๅๆฌกๆง่ก read ๆไฝ็ดๅฐ็ณป็ปๅฐๆฐๆฎๆท่ดๅฐไบ็บฟ็จ็ๅๅญไธญ๏ผ่ฏปๅๅบๆฅใ
- **ไฟกๅท้ฉฑๅจ I/O ๆจกๅ**๏ผ่ฎฉๅๆ ธๅจๆฐๆฎๆฅๅๅคๅฐฑ็ปชๆถๅ้ SIGIO ไฟกๅท้็ฅ็จๆท็บฟ็จใ้ฆๅๅผๅฏๅฅๆฅๅญ็ไฟกๅท้ฉฑๅจๅผ I/O ๅ่ฝ๏ผๅนถ้่ฟ sigaction ็ณป็ป่ฐ็จๅฎ่ฃไธไธชไฟกๅทๅค็ๅฝๆฐใ่ฏฅ็ณป็ป่ฐ็จๅฐ็ซๅณ่ฟๅ๏ผ่ฟ็จ็ปง็ปญๅทฅไฝ๏ผไนๅฐฑๆฏ่ฏดๆฒกๆ่ขซ้ปๅกใๅฝๆฐๆฎๆฅๅๅคๅฅฝ่ฏปๅๆถ๏ผๅๆ ธๅฐฑไธบ่ฏฅ่ฟ็จไบง็ไธไธช SIGIO ไฟกๅทใๆไปฌ้ๅๅฐฑๅฏไปฅๅจไฟกๅทๅค็ๅฝๆฐไธญ่ฐ็จ recvfrom ่ฏปๅๆฐๆฎๆฅ๏ผๅนถ้็ฅ็จๆท่ฟ็จๆฐๆฎๅทฒ็ปๅๅคๅฅฝ๏ผๅฏไปฅ่ฏปๅไบใ
- **ๅผๆญฅ I/O ๆจกๅ**๏ผๅฝ็จๆท็บฟ็จๅ่ตท read ๆไฝๆถ๏ผๅ็ฅๅๆ ธๅฏๅจ่ฏปๅๆฐๆฎๆไฝ๏ผๅนถ่ฎฉๅๆ ธๅจๆดไธชๆไฝๅฎๆๅ้็ฅ็จๅบ๏ผๅๆฌๅฐๆฐๆฎไปๅๆ ธๅคๅถๅฐ็จๅบ่ชๅทฑ็็ผๅฒๅบใ่ฟๆ ทๅจๅๆ ธๆง่ก่ฏปๅๆฐๆฎๆไฝๆถ๏ผ็จๆท็บฟ็จๅฏไปฅ็ปง็ปญๆง่ก๏ผๅฝๆฅๆถๅฐๅๆ ธๅจๆดไธชๆไฝ้ฝๅฎๆ็ไฟกๅทๆถ๏ผๅฐฑๅฏไปฅ็ดๆฅๅปไฝฟ็จๆฐๆฎไบใ
- **I/O multiplexing**๏ผI/O ๅค่ทฏๅค็จๆจกๅ๏ผJava NIO ๅฐฑๆฏไฝฟ็จ่ฟ็งๆจกๅใ

I/O ๅค่ทฏๅค็จๆฏๆ๏ผ้่ฟไธ็งๆบๅถๅฎ็ฐๅจๅไธช็บฟ็จไธญๅฏไปฅ็่งๅคไธชๆไปถ๏ผไพๅฆๅคไธช socket๏ผๅฝๆไปถ่ฏป/ๅๅฐฑ็ปชๆถ๏ผ
็จๆท่ฟ็จๅฐฑๅฏไปฅ่ทๅๅฐฑ็ปช็ๆไปถๅฅๆใ้่ฟๅไธช็บฟ็จๅๆถ็ฎก็ๅคไธช I/O ๆต๏ผๆ้ซไบๆๅกๅจ็ๅๅ่ฝๅใๆฉๆ็ I/O
ๅค่ทฏๅค็จๆๆฏๅฎ็ฐๅๆฌ selectใpoll๏ผ่ฟๆๆๆฐ็ epoll ็ญ็ญ๏ผ่ฟไบ้ฝๆฏ Linux ็ณป็ปไธ็ๅฎ็ฐใselect 
ไฝไธบๆๆฉ็ๅฎ็ฐ๏ผ่ฟ่ฟไธๆฏ็บฟ็จๅฎๅจ็๏ผไนๅช่ฝ็่ง 1024 ไธช้พๆฅ๏ผpoll ๆไธไบๆน่ฟ๏ผไฝไพ็ถไธๆฏ็บฟ็จๅฎๅจ็ใ

ๅฆๅค๏ผpoll ๅ select ๆๅคง็้ฎ้ขๅจไบ๏ผ้ฝๆฏไฝฟ็จใ็บฟๆง้พ่กจใๅญๅจ่ฟ็จๅณๆณจ็ Socket ้ๅ๏ผๅ ๆญค๏ผ้ฝ้่ฆ
้ๅๆไปถๆ่ฟฐ็ฌฆ้ๅๆฅๆพๅฐๅฏ่ฏปๆๅฏๅ็ Socket๏ผๆถ้ดๅคๆๅบฆไธบ O(n)๏ผ่ไธไน้่ฆๅจ็จๆทๆไธๅๆ ธๆไน้ดๆท่ด
ๆไปถๆ่ฟฐ็ฌฆ้ๅ๏ผ่ฟ็งๆนๅผ้็ๅนถๅๆฐไธๆฅ๏ผๆง่ฝ็ๆ่ไผๅๆๆฐ็บงๅข้ฟใ

epoll ๅจๅๆ ธ้ไฝฟ็จ**็บข้ปๆ **ๆฅ่ท่ธช่ฟ็จๆๆๅพๆฃๆต็ๆไปถๆ่ฟฐๅญ๏ผ้่ฟ epoll_ctl() ๅฝๆฐๅฐ้่ฆ็ๆง็
socket ๅ ๅฅๅๆ ธไธญ็็บข้ปๆ ่ฟ่ก็ฎก็ใ็บข้ปๆ  Red-black tree ๆฏ็บฟๆง็ปๆๆดๅ ้ซๆ๏ผๅขๅ ๆฅๆถ้ดๅคๆๅบฆๆฏ
O(logn)๏ผๆๅฅๆฐ่็นๆถๅช่ฐๆดๆๆ ่ฎฐ็่็น๏ผ่ฟ็งไผๅ็ๆ ็ถ็ปๆไธ้่ฆๅ select/poll ๆฏๆฌกๆไฝๆถ๏ผ้ฝ
่ฆๅฏนๆดไธช socket ้ๅๆไฝใไฝฟ็จ็บข้ปๆ ็ฎก็่็น๏ผๅณไฝฟ็ๅฌๅๅค็ Socket๏ผๆ็ไธไผๅคงๅนๅบฆ้ไฝ๏ผไธ้ๅฐฑไธบ
็ณป็ปๅฎไน็่ฟ็จๆๅผ็ๆๅคงๆไปถๆ่ฟฐ็ฌฆไธชๆฐ๏ผๅ ่๏ผepoll ่ขซ็งฐไธบ่งฃๅณ C10K ้ฎ้ข็ๅฉๅจใ


ๅค่ทฏๅค็จ I/O ๆจกๅๅ้้ปๅก I/O ๆ็ฑปไผผไนๅค๏ผไฝๆฏๅ่็ๆ็่ฆ้ซใๅ ไธบๅจ้้ปๅก I/O ไธญ๏ผscoket ็ถๆ
ๆฏ้่ฟ็จๆท็บฟ็จๅป่ฝฎ่ฏข็ใ่ๅค่ทฏๅค็จ I/O ๆจกๅ๏ผ่ฝฎ่ฏขๆฏไธช scoket ็ถๆๆฏๅๆ ธ่ฟ่กๅค็็๏ผ็ปๅ็กฌไปถๅบๅฑ
ๅฎ็ฐๆ็่ฟๆฏ็จๆท็บฟ็จๅฎ็ฐ่ฆ้ซๅพๅค็๏ผๅ ๆญคๅค่ทฏๅค็จ I/O ๆจกๅๆฏ่พ้ๅ้ซๅนถๅๅบ็จไธญไฝฟ็จใ

็ฑไบๅค่ทฏๅค็จ I/O ๆจกๅๆฏ้่ฟ่ฝฎ่ฏข็ๆนๅผๆฅๆฃๆตๆฏๅฆๆไบไปถๅฐ่พพ๏ผๅนถๅฏนๅฐ่พพ็ไบไปถ้ไธๅๅบ๏ผไธๆฆไบไปถๅๅบไฝ
ๅพๅคงๆๆฏๅๅบไบไปถๆฐ้่ฟๅค๏ผๅฐฑไผๆถ่ๅคง้็ๆถ้ดๅปๅค็ไบไปถ๏ผไป่ๅฝฑๅๆดไธช่ฟ็จ็ๅๆถๆงใLinux ็ณป็ปไธบๅบๅฏน
่ฟ็งๆๅตๆไพไบ epoll ๆฅๅฃ๏ผไฝๆฏๅถไปๆไฝ็ณป็ปๅฏน่ฟไธชๆฅๅฃ็ๆฏๆๆๅพๅคๅทฎๅผ๏ผๆไปฅ่ฝ็ถ epoll ่งฃๅณไบไบไปถ
ๆฃๆต็ๆถๆๆง้ฎ้ข๏ผไฝๆฏๅจ่ทจๅนณๅฐ่ฝๅไธๅดๅนถไธ่ฝๅพๅฐๅพๅฅฝ็ๆฏๆใ

- Epoll ๆฏ Linux ็ณป็ปไธ็ๅผๆญฅ I/O ๆจกๅ๏ผ็ธๆฏ selectใpoll ๆจกๅ๏ผๅฎไผๅฟๅจๆด้ซๆๅฐๅค็ๅคง้ไบไปถใ
- Kqueue ๆฏ Mac ็ณป็ปไธ็ๅผๆญฅ I/O ๆจกๅ๏ผไธ Epoll ๆ็น็ธไผผ๏ผไฝๆฏๅฎ้ไฝฟ็จๆถๆๆไธๅใ
- I/O Completion Ports (IOCP) ๆฏ Windows ๅนณๅฐไธ็ๅคๆ ธ็ณป็ป็ๅผๆญฅ I/O ๆจกๅ๏ผไผๅจไบไปถๅฎๆๆถ้็ฅใ

้็็ฝ็ป่ฎพ่ฎกๆจกๅผ็ๅด่ตท๏ผ่ฏ็ไบไธค็ง้ซๆง่ฝ I/O ไบไปถๅค็่ฎพ่ฎกๆจกๅผ Reactor ๅ Proactor๏ผ

- Reactor ๅๅบๅผๆจกๅผ

    - ๅบ็จ็จๅบๅ Reactor ๆณจๅ Ready for Read ่ฏปๅ**ๅฐฑ็ปชไบไปถ**ๅ็ธๅณ่็ไบไปถๅค็ๅฝๆฐ๏ผ
    - Reactor ้ปๅก็ญๅพๅๆ ธไบไปถ้็ฅ๏ผ
    - Reactor ๆถๅฐ้็ฅ๏ผ็ถๅๅๅๅฏ่ฏปๅไบไปถๅฐ็จๆทไบไปถๅค็ๅฝๆฐ๏ผ
    - ็จๆท่ฏปๅ**็ณป็ป็ผๅฒๅบ**ไธญ็ๆฐๆฎ๏ผๅนถๅค็ๆฐๆฎ๏ผ
    - ไบไปถๅค็ๅจๅฎๆๅฎ้็่ฏปๆไฝ๏ผๅค็่ฏปๅฐ็ๆฐๆฎ๏ผๆณจๅๆฐ็ไบไปถ๏ผ็ถๅ่ฟ่ฟๆงๅถๆ๏ผ

- Proactor ไธปๅจๆจกๅผ

    - ๅบ็จ็จๅบๅๅงๅไธไธชๅผๆญฅ่ฏปๅๆไฝ๏ผ็ถๅๆณจๅ็ธๅบ็ไบไปถๅค็ๅฝๆฐ๏ผ่ฏปๅ**ๅฎๆไบไปถ**๏ผ่ฟๆฏๅบๅซไบ Reactor ็ๅณ้ฎใ
    - ไบไปถๅ็ฆปๅจ็ญๅพ่ฏปๅๆไฝๅฎๆไบไปถใ
    - ๆไฝ็ณป็ป่ฐ็จๅๆ ธ็บฟ็จๅฎๆ่ฏปๅๆไฝ๏ผๅนถๅฐๅๅฎนๅๅฅ**็จๆท็ผๅญๅบ**๏ผๅณๅบ็จ็จๅบ้่ฆไผ ้็ผๅญๅบ๏ผๅบๅซไบ Reactorใ
    - ไบไปถๅ็ฆปๅจๆ่ทๅฐ่ฏปๅๅฎๆไบไปถๅ๏ผๆฟๆดปๅบ็จ็จๅบๆณจๅ็ไบไปถๅค็ๅจ๏ผไบไปถๅค็ๅจ็ดๆฅไป็ผๅญๅบ่ฏปๅๆฐๆฎใ

Reactor ๆจกๅผ่ฆๆฑไธป็บฟ็จๅชไฝไธบ I/O ๅค็ๅๅ๏ผๅช่ด่ดฃ็ๅฌๆไปถๆ่ฟฐ็ฌฆไธๆฏๅฆๆไบไปถๅ็๏ผๆ็่ฏๅฐฑ็ซๅณๅฐ
่ฏฅไบไปถ้็ฅๅทฅไฝ็บฟ็จใ้คๆญคไนๅค๏ผไธป็บฟ็จไธๅไปปไฝๅถไปๅฎ่ดจๆง็ๅทฅไฝใ ่ฏปๅๆฐๆฎ๏ผๆฅๅๆฐ็่ฟๆฅ๏ผไปฅๅๅค็ๅฎขๆท
่ฏทๆฑๅๅจๅทฅไฝ็บฟ็จไธญๅฎๆใ

่ Proactor ๆจกๅผๅฐๆๆ I/O ๆไฝ้ฝไบค็ปไธป็บฟ็จๅๅๆ ธๆฅๅค็๏ผๅทฅไฝ็บฟ็จไปไป่ด่ดฃไธๅก้ป่พใ

ๅผๆญฅ I/O ๆจกๅๅฐฑๆฏไฝฟ็จ็ Proactor ๆจกๅผ๏ผJava NIO ๅค่ทฏ I/O ๅค็จๆจกๅไธญไฝฟ็จ Reactor ๆจกๅผใ

Rust ไฝไธบ "system programming language"๏ผๅ C ไบ็ธ่ฐ็จไธ่ฝๆ overheadใๆไปฅ Rust ๅฟ้กปไฝฟ็จ
็ณป็ป Native ็ Thread๏ผๆ่ฝๅ C ็่ฝฌๆขๆฒกๆ้ขๅค็ IO ๆ่๏ผๆไปฅ Rust ้็จ็ๆฏ OS Native ็บฟ็จใ
ๅนถไธ๏ผRust ็ๅผๆญฅๆจกๅไนๆฏๅบไบ Native Thread ๅฎ็ฐ็ Synchronous non-blocking network I/O
ๅๆญฅ้้ปๅก I/O๏ผไฝฟ็จ็ๆฏ Reactor ๅๅบๅผๆจกๅผใ

Native Thread ๅญๅจ้ฎ้ขๆฏ๏ผๅฎๆถ่็่ตๆบๆดๅค๏ผ็นๅซๆฏ้ขๅฏนๅคงๆฐ้็ไปปๅกๆถ๏ผ่ฟ่ก็บฟ็จๅๆขๆไฝไผ้ๅธธไฝๆใ
Go ๅ Erlang ้ฝๅจ็บฟๆงๅๅๅปบ Green Thread ๆฅ่งฃๅณ่ฟไธช้ฎ้ขใ่ Rust ไฝไธบ็ณป็ป็บง่ฏญ่จ๏ผไธ่ฝๅ C ไน้ด
ๆๆดๅค็้้๏ผไธๆณ้็จ Green Thread ๆจกๅผใ

ไธๅ่ฏญ่จๆไธๅ็ๅค็บฟ็จๅฎ็ฐๆนๅผ๏ผๅคงๅคๆฐไฝฟ็จๆไฝ็ณป็ป API ๆฅๅๅปบ็บฟ็จ๏ผ่ฟ็ง็บฟ็จ็งฐไธบ 1:1 ็บฟ็จๆจกๅ๏ผๅฏไปฅ
็งฐไธบ native-threadingใๅจ่ฏญ่จๅฑ้ขไธ็ๅฎ็ฐ็ green-threading ๆจกๅ๏ผๅณ N:M ็บฟ็จๆจกๅ๏ผๅณๅฐ N ไธช
็บฟ็จๆ ๅฐๅฐ M ไธชๆไฝ็ณป็ป็บฟ็จไธ่ฟ่ก๏ผๅ ไธบๆด่่ฝ๏ผๆไปฅๅฐฑๅซๅ็ปฟ่ฒ็บฟ็จใ่ฟ็ง็บฟ็จๆจกๅไผ็นๆฏ๏ผๅๆไบๅคๅฏนไธ
ๆจกๅๅนถๅๅบฆไธ้ซ็็ผบ็น๏ผๅๅฏๆไบไธๅฏนไธๆจกๅไธญไธไธช็จๆท่ฟ็จๅ ็จๅคชๅคๅๆ ธ็บง็บฟ็จ๏ผๅผ้ๅคชๅคง็็ผบ็นใ


ไปฅไธๆฏๆต่ก็ๅนถๅ็ผ็จๆจกๅ๏ผ

- **OS threads** don't require any changes to the programming model,
  which makes it very easy to express concurrency. However, synchronizing
  between threads can be difficult, and the performance overhead is large.
  Thread pools can mitigate some of these costs, but not enough to support
  massive IO-bound workloads.
- **Event-driven programming**, in conjunction with _callbacks_, can be very
  performant, but tends to result in a verbose, "non-linear" control flow.
  Data flow and error propagation is often hard to follow.
- **Coroutines**, like threads, don't require changes to the programming model,
  which makes them easy to use. Like async, they can also support a large
  number of tasks. However, they abstract away low-level details that
  are important for systems programming and custom runtime implementors.
- **The actor model** divides all concurrent computation into units called
  actors, which communicate through fallible message passing, much like
  in distributed systems. The actor model can be efficiently implemented, but it leaves
  many practical issues unanswered, such as flow control and retry logic.

Rust ็ๅผๆญฅ็ผ็จๅฎ็ฐไธๅถๅฎ่ฏญ่จๆไบไธๅ๏ผ

- **Futures are inert** in Rust and make progress only when polled. Dropping a
  future stops it from making further progress.
- **Async is zero-cost** in Rust, which means that you only pay for what you use.
  Specifically, you can use async without heap allocations and dynamic dispatch,
  which is great for performance!
  This also lets you use async in constrained environments, such as embedded systems.
- **No built-in runtime** is provided by Rust. Instead, runtimes are provided by
  community maintained crates.
- **Both single- and multithreaded** runtimes are available in Rust, which have
  different strengths and weaknesses.

Rust ๅฝๅๅชๆไพไบๅบ็ก็ๅผๆญฅไปฃ็ ๆฏๆ๏ผๆฒกๆๆไพๆดไธชๅผๆญฅ็ฏๅขๆ้่ฆ็ๅฎๆดๅ่ฝ๏ผไพๅฆ executors, tasks,
reactors, combinators, low-level I/O futures ็ญ็ญ๏ผ่ฟไบๅชๆ็คพๅบๆไพ็ธๅบ็ๆฏๆใ

- ็ฎๅๆ ๅๅบๅชๆไพไบๆๅบ็ก็ๅผๆญฅๆฅๅฃใ็ฑปๅใๅฝๆฐ๏ผๅฆ Future๏ผ
- Rust ็ผ่ฏๅจๆไพไบ async/await ่ฏญๆณๆฏๆ๏ผ
- ๅคง้็ๅทฅๅท็ฑปๅใๅฝๆฐ้ฝ็ฑ็คพๅบ็ **futures** ๆจก็ปๆไพ๏ผ
- ๅผๆญฅไปฃ็ ็ๆง่กใIO ๅ ไปปๅก็ spawning ๅไบค็ป็คพๅบๆไพ็ๅผๆญฅ่ฟ่กๆถๅฎ็ฐ๏ผ

ไธไธชๅฎๆด Rust ๅผๆญฅ็ผ็จ็ฏๅขๅบ่ฏฅๅๆฌ๏ผ

- Async Runtimes ็จไบ่ฟ่กๅผๆญฅ็จๅบ๏ผ้ๅธธ่ชๅธฆ reactor๏ผๅฎๆไธไธชๆๅคไธช executors๏ผ
- Reactor ๅๅบๅจไธบๅค้จไบไปถๆไพ่ฎข้ๆบๅถ๏ผๅฆๅผๆญฅI/Oใ่ฟ็จ้ด้ไฟกๅ่ฎกๆถๅจ๏ผ
- Executors ๅค็ไปปๅก็่ฐๅบฆๅๆง่ก๏ผๅ็บฟ็จๅๅค็บฟ็จไธค็ง๏ผๅฎไปฌ้่ฟ่ฝฎ่ฏข Futures ๆฅ่ท่ธชไปปๅก็่ฟ่ก็ถๆ๏ผๅนถๅจๆ่ฟๅฑๆถๅค้ไปปๅกใ

ๅจๅผๆญฅ่ฟ่กๆถไธญ๏ผ่ฎข้่้ๅธธๆฏไปฃ่กจไฝ็บง I/O ๆไฝ็ Futruesใ

ๅจRust้ Future ๆฏไธไธช trait ๏ผๅฎไนๅฆไธใ

```rust
// Trait core::future::Future
pub trait Future {
    type Output;

    fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output>;
}
```

ไฝฟ็จ async ๅณ้ฎๅญๅฐฑๅฏไปฅๅๅปบไธไธช Future ็ฑปๅ๏ผๅฎ็ฐ Future ๆฅๅฃ็ๆนๅผไนๅฏไปฅๅๅปบไธไธช Future ็ฑปๅ๏ผ
้ฃไน่ฟไธคไธช Future ๆไปไนๅบๅซๅข๏ผ้่ฟ่ชๅฎไน็ฑปๅๅฎ็ฐ Future ๆฅๅฃ็ๆนๅผ็งฐไธบ Leaf Futureใ็ดๆฅไฝฟ็จ
async ๅณ้ฎๅญๅๅปบ็็งฐไธบ Non-leaf Future๏ผๅฎไผ็ฑ async runtime ๆฅ่ฐๅบฆ่ฟ่กใ

ๅจ await ไธไธช Leaf Future ๆถ๏ผๅฆๆ่ฟๅ็ๆฏ Pending๏ผ้ฃไน Non-Leaf Future ๅฐฑไผ่ฎฉๅบๅฏนๅฝๅ
็บฟ็จ็ๆงๅถๆ๏ผๆญคๆถ async runtime ๅฐฑ่ฝๅค่ฐๅบฆๆง่กๅถไป็ Non-Leaf Futureใๅฝ็ญๅพไธญ็ IO ๆไฝ
ๅฐฑ็ปชๆถ๏ผasync runtime ๅฐฑไผ้ๆฐๆฟๆดปๆ่ตท็ Future๏ผๅจไธๆฌก็ฆปๅผ็ๅฐๆน็ปง็ปญ่ฟ่กใ

Future ๆฅๅฃๅฏไปฅ็ไฝๆฏไธไธชๅผๆญฅๆไฝ็ๅฎนๅจ๏ผๆถ็บณๅฆ็ฝ็ปใRPCใ่ถๆถใๆ่็ฃ็ I/O ็ญ็ญๆไฝใๆฅๅฃๅฎไนไบ
ไธไธช poll ๆนๆณ๏ผ็จไบๆจๅจๅผๆญฅไปปๅก่ตฐๅๅฎๆ็็ฎๆ ๏ผๆฏๆฌกๆง่ก่ฟไธชๆนๆณ้ฝไผ่ฟๅ `Poll` ๆไธพ็ฑปๅ๏ผ่ฟไธช 
enum ็ฑปๅๆไธคไธชๅผ๏ผไปฃ่กจๅผๆญฅไปปๅก็ไธๅ็ถๆ๏ผ

- `Poll::Pending` if the future is not ready yet
- `Poll::Ready(val)` with the result val of this future if it finished successfully.

Ready(T) ่กจ็คบๅทฒ็ปๅผๆญฅไปปๅกๅทฒ็ปๅฎๆ่ฎก็ฎ๏ผๆฏไธชๅผๆญฅไปปๅก็่ฎก็ฎ็ปๆ้ฝๅฏ่ฝๆฏไธไธชๅผ๏ผไนๅฏไปฅไปไนไนๆฒกๆใ

Async runtime ๅ executor ไธค่็ปๅธธไบๆขไฝฟ็จ๏ผ็คพๅบไธ็ฎๅๆต่ก็่ฟ่กๆถๆ๏ผ

- **Tokio**: A popular async ecosystem with HTTP, gRPC, and tracing frameworks.
- **async-std**: A crate that provides asynchronous counterparts to standard library components.
- **smol**: A small, simplified async runtime. Provides the Async trait that can be used to wrap structs like UnixStream or TcpListener.
- **fuchsia-async**: An executor for use in the Fuchsia OS.

็คพๅบ็ **futures** ๆจก็ปๅๅซไบไธ็ณป็ปๆฅๅฃๅ็ผๅๅผๆญฅ็จๅบ็ๅฝๆฐ๏ผๅๆฌๆ็ปๅฏ่ฝๆดๅๅฐๆ ๅๅบ็ๆฅๅฃ๏ผ
ๅฎๆไพไบ่ชๅทฑ็ๆง่กๅจ๏ผไฝๆฏๆฒกๆๆไพ ractor๏ผๆไปฅไธ่ฝๆง่กๅผๆญฅ I/O ๆ่ timer futures๏ผๆไปฅไนไธๆฏ
ๅฎๆด็ๅผๆญฅ่ฟ่กๆถ๏ผ้่ฆๅๅถๅฎๆจก็ป้ๅไฝฟ็จ๏ผ

- **Futures** are single eventual values produced by asynchronous computations. JavaScript call this concept โpromiseโ.
- **Streams** represent a series of values produced asynchronously.
- **Sinks** provide support for asynchronous writing of data.
- **Executors** are responsible for running asynchronous tasks.



## โก Pinning ๅๅญ้
- https://rust-lang.github.io/async-book/04_pinning/01_chapter.html
- https://doc.rust-lang.org/std/pin/index.html#projections-and-structural-pinning
- https://github.com/taiki-e/pin-project
- https://github.com/taiki-e/pin-project-lite
- [Rust-Pinๆๅบ็ๅฟ่ฆๆง-ไปฅๅๆๅฏนPin็่ฎค่ฏ](https://chaochaogege.com/2021/06/08/54/)
- 04_pinning/01_chapter.md

Async ไปปๅก็ๅฎ็ฐ่ฟ็จไธญ๏ผๅฝๆฐไผๅๆฎตๆง่ก๏ผไพๅฆๅจไธ้ข็ไปฃ็ ้้ข๏ผ

```rust,ignore
    async fn foo() -> u8 { 5 }

    async fn bar() -> impl Future<Output = u8> {
      let i = 1;
      let x: u8 = foo().await;
      let y = &i;
      *y + x
    }
```

ๅจ่ฐ็จ foo().await ็ญๅพๅผๆญฅ็ปๆๆถ๏ผๅผๆญฅไปปๅกๅฐฑๆฏ่ฟ้ๅๆๆไธค้จๅๆง่ก๏ผawait ๅๅ็ไปฃ็ ๅฏ่ฝไธไผๅจ
ๅไธไธช็บฟ็จไธๆง่ก๏ผ้ฃไน๏ผๅ้ข็ๅฑ้จๅ้็็ถๆๅฐฑ้่ฆไฟ็ใๅฆๆ่ฆไฟ็็็ถๆไธๆฏ็ฎๅ็็ฑปๅ๏ผๅฐฑๆๆฝๅจ็้ฎ้ข๏ผ
ไนๅฐฑๆฏไปปๅกๅๆข่ฟ็จไธญ่ฆ่่็้ฎ้ขใ

Pinnig ๅณ้ไฝๅๅญๅฐๅ็ๆๆ๏ผไธบไบ่งฃๆ่ฟไธช่ฏ็ๅๆถต๏ผ้่ฆๅผๅฅ่ชๅผ็จ็ฑปๅๆฅ่งฃ้ๆตๆท่ดไธญๅบ็ฐ็ไธๅฎๅจ็ฐ่ฑกใ

ไปฅไธไปฃ็ ไธญ Test ็ฑปๅๅๅซไบไธไธช b ๆ้ๆฅๅผ็จ่ช่บซ self-referential๏ผๅๅปบไธคไธช Test ๅฎไพ๏ผๅนถ่ฐ็จ
ๅๅญไบคๆขๅฝๆฐๅฐๅฝผๆญค็ๆฐๆฎ็ดๆฅไบคๆข๏ผ็ถๅๅฏไปฅ่งๅฏๅฐ็งปๅจๆ้็ปๅฏน่ฑกๅธฆๆฅ็็ ดๅ๏ผ

```rust,ignore
fn main() {
    let mut test1 = Test::new("test1");
    test1.init();
    let mut test2 = Test::new("test2");
    test2.init();

    println!("a: {}, b: {}", test1.a(), test1.b());
    println!("a: {}, b: {}", test2.a(), test2.b());

    std::mem::swap(&mut test1, &mut test2);
    test1.a = "I've totally changed now!".to_string();

    println!("a: {}, b: {}", test1.a(), test1.b());
    println!("a: {}, b: {}", test2.a(), test2.b());
}

#[derive(Debug)]
struct Test {
    a: String,
    b: *const String,
}

 impl Test {
    fn new(txt: &str) -> Self {
        Test {
            a: String::from(txt),
            b: std::ptr::null(),
        }
    }
    fn init(&mut self) {
        let self_ref: *const String = &self.a;
        self.b = self_ref;
    }
    fn a(&self) -> &str {
        &self.a
    }
    fn b(&self) -> &String {
        assert!(!self.b.is_null(), "Test::b called without Test::init being called first");
        unsafe { &*(self.b) }
    }
}
```

ๆง่ก็จๅบๅพๅฐไปฅไธ่พๅบ๏ผ

```rust, ignore
a: test1, b: test1
a: test2, b: test2
a: I've totally changed now!, b: test1
a: test1, b: I've totally changed now!
```

้่ฟๅพๅๆผ็คบ๏ผๅพ็ด่งๅฐ่ฏดๆไบไบๆข test1 ๅ test2 ไธค่็ๆฐๆฎๅ๏ผๅญๆฎต b ่ฟๆฏๆๅๅๆฅ็ๅๅญๅฐๅ๏ผๅณ
ๆตๆท่ดไธไผๆนๅๆ้็ๆๅ๏ผๅๆฌ็ปไธ็ๆฐๆฎ็ปๆ่ขซ็ ดๅ๏ผ่ฟๆ ท็ๆท่ดไนๅซ shadow copyใ

**Fig 1: Before and after swap**
![swap_problem](https://rust-lang.github.io/async-book/assets/swap_problem.jpg)


ๅๅญ้ `Pin` ่ฟ็ง็ฑปๅๅฏไปฅ่งฃๅณๆตๆท่ดๅฏ่ฝไบง็็้ฎ้ข๏ผ่งฃๅณไธไธช้ฎ้ข็ๆ็ฎๅๆนๆณๅฐฑๆฏไธ่ฆๅผ่ตท่ฟไธช้ฎ้ขใ
ไธ่ฆ็งปๅจๅธฆๆๆ้็็ฑปๅ๏ผๅฐฑไธไผไบง็ๆตๆท่ดๅธฆๆฅ็้ฎ้ข๏ผ่ฟไนๅฐฑๆฏ `Pin` ็ฑปๅ็ไฝ็จ๏ผๅฎๅ่ฃไบไธไธชๆ้๏ผ
ๅนถไธไฟ่ฏๅจๆฒกๅฎ็ฐ `Unpin` ๆฅๅฃ็ๆๅตไธไธไผ็งปๅจๆ้ๆๆๅ็ๆฐๆฎใ

ๅณ `Pin<&mut T>`, `Pin<&T>`, `Pin<Box<T>>` ไฟ่ฏ `T` ไธไผๅจ `T: !Unpin` ่ฟ็งๆๅตไธ่ขซ็งปๅจใ
ๅ่ฟๆฅ่ฏด๏ผๅฎ็ฐ `Unpin` ่ฟไธชๆฅๅฃ๏ผๆไผ็งปๅจๆ้ๆๆๅ็ๆฐๆฎใ

ๅคๆฐ็ฑปๅ้ฝไธไผๅ ไธบ็งปๅจ่ไบง็้ฎ้ข๏ผๅฆๅๅงๆฐๆฎ็ฑปๅ๏ผ่ฟไบ็ฑปๅๅฐฑๆฏๅฎ็ฐไบ `Unpin` ๆฅๅฃ๏ผๅฎไปฌๅฏไปฅ่ช็ฑๅฐ
ไป `Pin` ไธญๅญๆพใๆฏๅฆ๏ผ`u8` ๅฑไบ `Unpin` ็ฑปๅ๏ผ`Pin<&mut u8>` ๅฐฑๅฏไปฅๅ `&mut u8` ๅฎๅจ็งปๅจใ

`Unpin` ่กจ็คบไธ้่ฆ้ไฝๅๅญ๏ผๅฏๅฎๅจๅฐ็งปๅจ๏ผๅฝ็ฑปๅๆ ่ฎฐไธบ `!Unpin` ๅณไธๅฏไปฅๅฎๅจๅฐ็งปๅจ๏ผ! ๅณๆฒกๆๅฎ็ฐๆฅๅฃใ

ๅจๅผๆญฅๆบๅถไธญ๏ผFuture ็ฑปๅ่ขซ poll() ๆจๅจ่ตฐๅ Task ็ๅฎๆ็ฎๆ ๏ผๅ ไธบๅคไธช Future ๆฐๆฎไผ่ขซ้ๆถๅๆข๏ผ
่ฟๆ้ดๅบ็ฐๆตๆท่ดๅธฆๆฅ็ไธๅฎๅจ้ฎ้ข้ๅธธ่ดๅฝ๏ผ`Pin` ็ฑปๅๅฐฑๅพๅฅฝๅฐ่งฃๅณไบ่ฟไธช้ฎ้ข๏ผไธ็งปๅจๅฐฑๆฒกๆ้ฎ้ข๏ผ

ไฝฟ็จ `Pin` ๅฏไปฅๅฐ็ไธค็งไธๅๅๅญไฝ็ฝฎ็ๅฏน่ฑก้ไฝ๏ผ

- Pinning to the Stack
- Pinning to the Heap

ไฝฟ็จ Stack ๅๅญไธ้่ฟ Box ๆ้ไฝฟ็จ Heap ๅๅญๆนๅผไธๅ๏ผๅฝๆฐๅ้จ็ๅ้้ฝๅจ Stack ๅๅญๅบ๏ผไธ่ฝ่ฟๅ
ๅฐๅฝๆฐๅค้จ๏ผ่ Heap ๅๅญๅๆฏ็จๆทๅจๆๅ้็๏ผ้่ฟ Box ๆ้ๅฏไปฅ่ฟๅ็ปๅค้จไฝฟ็จใStack ๅๅญๆฌ่บซๅชๆฏ
ไธๅ่ฟ็ปญ็ๅๅญ็ฉบ้ด๏ผๅนถๆฒกๆไปไน็นๅซ๏ผๅชๆฏๅๅฅฝๅฎ็จ้ๅพ็นๅซ๏ผไฝไธบๅฝๆฐ่ฐ็จๆ ็โไนฆ่ฎฐโใ

ๆป็ปไธไธ `Pin` ็ฑปๅ็ไฝฟ็จ๏ผ

1. If `T: Unpin` (which is the default), then `Pin<'a, T>` is entirely
equivalent to `&'a mut T`. in other words: `Unpin` means it's OK for this type
to be moved even when pinned, so `Pin` will have no effect on such a type.

2. Getting a `&mut T` to a pinned T requires unsafe if `T: !Unpin`.

3. Most standard library types implement `Unpin`. The same goes for most
"normal" types you encounter in Rust. A `Future` generated by async/await is an exception to this rule.

4. You can add a `!Unpin` bound on a type on nightly with a feature flag, or
by adding `std::marker::PhantomPinned` to your type on stable.

5. You can either pin data to the stack or to the heap.

6. Pinning a `!Unpin` object to the stack requires `unsafe`

7. Pinning a `!Unpin` object to the heap does not require `unsafe`. There is a shortcut for doing this using `Box::pin`.

8. For pinned data where `T: !Unpin` you have to maintain the invariant that its memory will not
get invalidated or repurposed _from the moment it gets pinned until when drop_ is called. This is
an important part of the _pin contract_.

Pinning to the Stack ๅ่ไปฃ็ ๏ผ

```rust,ignore
use std::{pin::Pin, marker::PhantomPinned};

fn main() {
    let mut test1 = Test::new("test1");
    let mut test2 = Test::new("test2");

    // Pinning an object to the stack will always be unsafe if our type implements !Unpin.
    // Pinning a `!Unpin` object to the stack requires `unsafe`
    let mut test1 = unsafe{ Pin::new_unchecked(&mut test1) };
    test1.as_mut().init();
    let mut test2 = unsafe{ Pin::new_unchecked(&mut test2) };
    test2.as_mut().init();

    println!("a: {}, b: {}", test1.as_ref().a(), test1.as_ref().b());
    println!("a: {}, b: {}", test2.as_ref().a(), test2.as_ref().b());

    std::mem::swap(&mut test1, &mut test2);
    // `PhantomPinned` cannot be unpinned
    // test1.get_mut().a = "I've totally changed now!".to_string();

    println!("a: {}, b: {}", test1.as_ref().a(), test1.as_ref().b());
    println!("a: {}, b: {}", test2.as_ref().a(), test2.as_ref().b());
}

#[derive(Debug)]
struct Test {
    a: String,
    b: *const String,
    _marker: PhantomPinned,
}

 impl Test {
    fn new(txt: &str) -> Self {
        Test {
            a: String::from(txt),
            b: std::ptr::null(),
            _marker: PhantomPinned
        }
    }

    fn init(self: Pin<&mut Self>) {
        let this = unsafe { self.get_unchecked_mut() };
        let self_ptr: *const String = &this.a;
        this.b = self_ptr;
    }

    fn a(self: Pin<&Self>) -> &str {
        &self.get_ref().a
    }

    fn b(self: Pin<&Self>) -> &String {
        assert!(!self.b.is_null());
        unsafe { &*(self.b) }
    }
}
```

Pinning to the Heap ๅ่ไปฃ็ ๏ผ

```rust,ignore
use std::{pin::Pin, marker::PhantomPinned};

#[derive(Debug)]
struct Test {
    a: String,
    b: *const String,
    _m: PhantomPinned,
}

impl Test {
    fn new(txt: &str) -> Pin<Box<Self>> {
        let t = Test {
            a: String::from(txt),
            b: std::ptr::null(),
            _m: PhantomPinned,
        };
        let mut boxed = Box::pin(t);
        let self_ptr: *const String = &boxed.a;
        unsafe {
            boxed.as_mut().get_unchecked_mut().b = self_ptr
        };

        boxed
    }

    fn a(self: Pin<&Self>) -> &str {
        // Gets a shared reference out of a pin.
        &self.get_ref().a
    }

    fn b(self: Pin<&Self>) -> &String {
        unsafe{ &*(self.b) }
    }
}

pub fn main() {
    let mut test1 = Test::new("test1");
    let mut test2 = Test::new("test2");

    println!("a: {}, b: {}", test1.as_ref().a(), test1.as_ref().b());
    println!("a: {}, b: {}", test2.as_ref().a(), test2.as_ref().b());
    std::mem::swap(&mut test1, &mut test2);
    unsafe {
        test1.as_mut().get_unchecked_mut().a = "Changed!".to_string();
    }
    println!("a: {}, b: {}", test1.as_ref().a(), test1.as_ref().b());
    println!("a: {}, b: {}", test2.as_ref().a(), test2.as_ref().b());
}
```

Projections and Structural Pinning ๅณๆณจ็ๆฏ `Pin<&mut Struct>` ็ฑปๅไธญๅญๆฎต็ๅค็้ฎ้ข๏ผ
่ฟไธช Pin ็บฆๆๅฏนๅชไธชๅญๆฎต่ตทไฝ็จ๏ผๅฆๆ๏ผๆไธชๅญๆฎต่ขซ move ไผๅผ่ตท้ฎ้ข๏ผ่ฟไธชๅญๆฎตๅฟ้กป่ขซ Pinned๏ผPin 
ๅฐฑๆฏ็บฆๆไป็๏ผ่้ๅถไปๅญๆฎตใ

pin_project ๅฐฑๆฏ้่ฟๅๅปบ่พๅฉๆนๆณไธบ็ฑปๅๅๅปบๆๅฝฑๅญๆฎต๏ผ้่ฟๅจๅญๆฎตไธๆ ๆณจ #[pin] ่ฟ่กๅฑ้จ Pin ็บฆๆใ
Pin ไฝ็ๅญๆฎตๆไธบ Pin<&mut Field>๏ผๅฐฑไธๅบ่ฏฅ็งปๅจใ่ฝ็ถ็งปๅบๅปไธไธๅฎ้๏ผPin ไป่ฎพ่ฎกไธ่ฏดไธ่ฝ moveใ
ๅช่ฆๅฐไปๅ่ฎพไธบ๏ผ่ฝ็ถ่ขซ Pin ไฝ๏ผไฝ่ฟๆฏๅฏไปฅ่ขซ moveใ


```rust,ignore
use std::pin::Pin;

use pin_project_lite::pin_project;

pin_project! {
    struct Struct<T, U> {
        #[pin]
        pinned: T,
        unpinned: U,
    }
}

impl<T, U> Struct<T, U> {
    fn method(self: Pin<&mut Self>) {
        let this = self.project();
        let _: Pin<&mut T> = this.pinned; // Pinned reference to the field
        let _: &mut U = this.unpinned; // Normal reference to the field
    }
}
```



## โก Tokio ไบไปถ้ฉฑๅจ้้ปๅกๅผๆญฅ I/O
- [async_std - Async version of the Rust standard library](https://docs.rs/async-std/latest/async_std/)
- [Tokio tutorial](https://tokio.rs/tokio/tutorial/)
- [Tokio - Event-driven NBIO asynchronous I/O](https://crates.io/crates/tokio)

Tokio is an event-driven, non-blocking I/O platform for writing asynchronous 
applications with the Rust programming language. 

    git clone --depth=1 git@github.com:tokio-rs/tokio

    git clone --depth=1 git@github.com:tokio-rs/mio
    git clone --depth=1 git@github.com:hyperium/hyper
    git clone --depth=1 git@github.com:hyperium/tonic
    git clone --depth=1 git@github.com:tower-rs/tower
    git clone --depth=1 git@github.com:tokio-rs/tracing
    git clone --depth=1 git@github.com:tokio-rs/bytes

Tokio ๆฏไธไธช Rust ่ฏญ่จๅฎ็ฐ็้ซๅฏ้ ใๅผๆญฅใ้้ปๅกใไบไปถ้ฉฑๅจ็ๅฐๅทง็่ฟ่กๅบ๏ผๅนถไธๅจไธๅฝฑๅ้ๅบฆ็ๆๅตไธ
ๆๅปบๅฏ้ ็็ฝ็ปๅบ็จใๅฎๅฏไปฅ็ตๆดปๅฐ้ๅฏนๅ็ง็ณป็ป๏ผไปๅทๆๆฐๅไธชๆ ธๅฟ็ๅคงๅๆๅกๅจๅฐๅฐๅๅตๅฅๅผ่ฎพๅคใ

ๅบๆฌ็นๆง๏ผ

- ๅฟซ้๏ผTokio ็้ถๆๆฌๆฝ่ฑก็ปไฝ ่ฃธๆบๆง่ฝใ
- ๅฏ้ ๏ผTokio ๅฉ็จ Rust ็ๆๆๆใ็ฑปๅ็ณป็ป๏ผๅๅนถๅๆจกๅๆฅๅๅฐ bug ๅนถ็กฎไฟ็บฟ็จๅฎๅจใ
- ๅฏไผธ็ผฉๆง๏ผTokio ๆไธไธชๆๅฐ็่ถณ่ฟน๏ผๅนถ่ช็ถๅฐๅค็ๅๅใๆคๆถ๏ผbackpressure and cancellationใ

ๆฆๆฌๅฐ่ฎฒ๏ผTokio ๅๆ 3 ไธชไธป่ฆ้จๅ๏ผ

- A multithreaded, work-stealing based task scheduler.
- A reactor backed by the operating system's event queue (epoll, kqueue, IOCP, etc...).
- Asynchronous TCP and UDP sockets.

Tokio ๆๆถๅพ๏ผ

![The Tokio stack](https://tokio.rs/img/stack-lines.svg)

- Tokio runtime ๆฏๅผๆญฅๅบ็จ็ๅบ็ก๏ผๅๅซ I/Oใๅฎๆถๅจใๆไปถ็ณป็ปใๅๆญฅไธไปปๅก่ฐๅบฆ่ฎพๆฝ๏ผ
- **Hyper** ๆฏไธไธชๆฏๆ HTTP1.0 ๅ HTTP2.0 ็ๅฎขๆท็ซฏไธๆๅก็ซฏ็ๅฎ็ฐ๏ผ
- **Tonic** ๆฏไธไธช boilerplate-free gRPC ๅฎขๆท็ซฏๅๆๅกๅจๅบ๏ผ้่ฟ็ฝ็ปๅฌๅผๅ่ฐ็จ API ็ๆ็ฎๅๆนๆณใ
- **Tower** ็จไบๆๅปบๅฏ้ ๅฎขๆท็ซฏๅๆๅกๅจ็ๆจกๅๅ็ปไปถ๏ผๅๆฌ retryใ่ด่ฝฝๅนณ่กกใ่ฟๆปคใ่ฏทๆฑ้ๅถๅ่ฝ็ญใ
- **Mio** ๆฏๅบไบๆไฝ็ณป็ปไบไปถ I/O API ็ๆๅฐๅ็ๅฏ็งปๆคๆฅๅฃใ
- **Tracing** ๆไพ็ปๆๅใๅบไบไบไปถ็ๆฐๆฎๆถ้ๅๆฅๅฟ่ฎฐๅฝ๏ผๅธฎๅฉๅบ็จ็จๅบๅๅบ็็ปไธๅๆใ
- **Bytes** ๆฏ็ฝ็ปๅญ่ๆฐๆฎๆตๆไฝๆจกๅ๏ผๆไพไบไธฐๅฏ็ๅญ่ๆฐ็ปๆไฝๆนๆณใ


ๅถไธญ็ฝ็ปๆจกๅๆฏ่ฟ้ไฝฟ็จๅฐ็ไธป่ฆๅ่ฝ๏ผ

- **TcpListener** and **TcpStream** provide functionality for communication over TCP
- **UdpSocket** provides functionality for communication over UDP
- **UnixListener** and **UnixStream** provide functionality for communication over a Unix Domain Stream Socket (available on Unix only)
- **UnixDatagram** provides functionality for communication over Unix Domain Datagram Socket (available on Unix only)

ๅฐๆช่ฝฌๆขไธบ TcpStream ๆ TcpListener ็ TCP ๅฅๆฅๅญ่ฟๆฏไฝฟ็จ **TcpSocket** ่กจ็คบใTCP ๅฅๆฅๅญ
็ๆฐๆฎ่ฏปๅไธๅ้้่ฟ **AsyncReadExt** ๅ **AsyncWriteExt** ๅฎ็ฐ็ๆฅๅฃๆนๆณๆไฝ TcpStreamใ

่ **UdpSocket** ๅ็ดๆฅๅฎ็ฐไบๆฐๆฎๆถๅๆนๆณ๏ผไพๅฆ๏ผๆฅๆถๆฐๆฎ็ๆนๆณ๏ผ

    pub async fn recv(&self, buf: &mut [u8]) -> Result<usize>
    pub async fn recv_from(&self, buf: &mut [u8]) -> Result<(usize, SocketAddr)>


Tokio ๆไธคไธชไธป่ฆๆฆๅฟต๏ผๅผๆญฅ่ฟ่กๆถ runtime ๅๅผๆญฅไปปๅก task๏ผๅผๆญฅ่ฟ่กๆถ็ฏๅข(Runtime)็จไบ่ฟ่กๅผๆญฅไปปๅกใ
Tokio runtime ๆไธค็งๅทฅไฝๆจกๅผ๏ผ

1. ๅไธ็บฟ็จ๏ผcurrent thread runtime
2. ๅค็บฟ็จ๏ผmulti thread runtime

ๆณจ: ่ฟ้็ๆ่ฏด็็บฟ็จๆฏ Rust ็บฟ็จ๏ผ่ๆฏไธไธช Rust ็บฟ็จ้ฝๆฏไธไธช OS ็บฟ็จใTokio::task ๅๆฏ็ปฟ่ฒ็บฟ็จ
Asynchronous green-threads ๅผๆญฅ็็ปฟ่ฒ็บฟ็จใ


Tokio ๅฎๆน็คบ่ๅบ็จ๏ผ

- tokio\examples\hello_world.rs
- tokio\examples\chat.rs
- tokio\examples\connect.rs
- tokio\examples\custom-executor-tokio-context.rs
- tokio\examples\custom-executor.rs      
- tokio\examples\echo-udp.rs
- tokio\examples\echo.rs
- tokio\examples\hello_world.rs
- tokio\examples\named-pipe-multi-client.rs
- tokio\examples\named-pipe-ready.rs     
- tokio\examples\named-pipe.rs
- tokio\examples\print_each_packet.rs    
- tokio\examples\proxy.rs
- tokio\examples\tinydb.rs
- tokio\examples\tinyhttp.rs
- tokio\examples\udp-client.rs
- tokio\examples\udp-codec.rs


Tokio ๅฎ็ฐไบไธคไธชๅฑๆง่ฟ็จ็จๅฎ๏ผๅถไธญไธไธช `#[tokio::main]` ๏ผๅฎๅฏไปฅๅ่ฃ **main()** ไธบไธไธชๅผๆญฅๅฝๆฐ๏ผ
ๅ ไธบ Rust ็ๅฅๅฃๅฝๆฐๆฏไธๅฏ่ฝๅผๆญฅๆง่ก็๏ผ่่ฟ็จๅฎ้่ฟๅผบๅคง็็ผ็จ่ฝๅ๏ผๅฐ async main() ๅฝๆฐ้ๆฐๅ่ฃ
ๅฐ Tokio ๆไพ็ๅฅๅฃๅฝๆฐไธญ๏ผๅนถไธๅจๅถๅ้จ้่ฟ tokio::runtime ๅผๆญฅ่ฟ่ก็จๆทๅฎไน็โๅฅๅฃๅฝๆฐโใ่ฟๆ ท๏ผ
้ๆฐๅ่ฃ็ async main() ๅฝๆฐ็่ตทๆฅๅฐฑๅ็็ๆฏๅผๆญฅ็ๅฅๅฃๅฝๆฐไธๆ ทใ

```rust
#[tokio::main]
async fn main() {
  println!("Hello world");
}

/// Equivalent code not using `#[tokio::main]`

fn main() {
  tokio::runtime::Builder::new_multi_thread()
     .enable_all()
     .build()
     .unwrap()
     .block_on(async {
         println!("Hello world");
     })
}
/// tokio\tokio-macros\src\lib.rs
```

Tokio main ้ป่ฎคไธบๅค็บฟ็จ่ฟ่ก๏ผๅฏไปฅ้่ฟ flavor ๅๆฐๆนไธบๅฝๅ็บฟ็จ่ฟ่ก๏ผ

    #[tokio::main]
    #[tokio::main(worker_threads = 2)]
    #[tokio::main(flavor = "multi_thread", worker_threads = 10)]
    #[tokio::main(flavor = "current_thread")]
    #[tokio::main(flavor = "current_thread", start_paused = true)]


ไปฅไธๆฏ Tokio ๅฅ้จ็คบ่๏ผไฝฟ็จ Ncat ๅทฅๅทไฝไธบๆๅก็ซฏๆต่ฏๅทฅๅท๏ผๅฎๆฏไธไธชๅ่ฝไธฐๅฏ็็ฝ็ปๅฎ็จ็จๅบ๏ผๅฏไปฅไป
ๅฝไปค่ก่ทจ็ฝ็ป่ฏปๅๅๅๅฅๆฐๆฎใNcat ๆฏไธบ Nmap ้กน็ฎ็ผๅ็๏ผๅฎๆฏๅฏนๅคๅๅฐๆฌ็ Netcat ๆน่ฟใๅฎๅๆถไฝฟ็จ
TCP ๅ UDP ่ฟ่ก้ไฟก๏ผๅนถ่ขซ่ฎพ่ฎกไธบไธไธชๅฏ้ ็ๅ็ซฏๅทฅๅท๏ผๅฏไปฅ็ซๅณๅๅถไปๅบ็จ็จๅบๅ็จๆทๆไพ็ฝ็ป่ฟๆฅใ
Ncat ไธไป้็จไบ IPv4 ๅ IPv6๏ผ่ไธไธบ็จๆทๆไพไบๅ ไนๆ ้็ๆฝๅจ็จ้ใ

Nmap ๅทฅๅทๅๆๆฐ็ๆฌ 7.93๏ผๅฎ่ฃๅๅพๅฐไธไธช Nmap - Zenmap GUI ๆซๆๅทฅๅท๏ผ็จไบ็ฝ็ปๆขๆตไธๅฎๅจๅฎก่ฎก๏ผ
ไพๅฆ๏ผไปฅไธๅฝไปค็จไบๆซๆๅฎๆนๆๅกๅจไธ็็ฝ็ปๆๅก๏ผT4 ๅ ้ๆซๆๆถ้ดๆจกๆฟ๏ผ-A ๅฏ็จๆๆ้ซ็บง้้กนใไปปไฝไธไธช
ๅฝไปค้้กน๏ผ้ฝๅฏไปฅ้่ฟ GUI ็้ข่ฟ่ก้็ฝฎ๏ผ

    nmap -T4 -A -v nmap.org


```rust,ignore
//! A simple client that opens a TCP stream, writes "hello world\n", and closes
//! the connection.
//!
//! To start a server that this client can talk to on port 6142, you can use this command:
//!
//!     ncat -l 6142
//!
//! And then in another terminal run:
//!
//!     cargo run --example hello_world

#![warn(rust_2018_idioms)]

use tokio::io::AsyncWriteExt;
use tokio::net::TcpStream;

use std::error::Error;

#[tokio::main]
pub async fn main() -> Result<(), Box<dyn Error>> {
    // Open a TCP stream to the socket address.
    //
    // Note that this is the Tokio TcpStream, which is fully async.
    let mut stream = TcpStream::connect("127.0.0.1:6142").await?;
    println!("created stream");

    let result = stream.write_all(b"hello world\n").await;
    println!("wrote to stream; success={:?}", result.is_ok());

    Ok(())
}
```

Tokio ๅผๆญฅๅๅๆญฅไธ่ฝๆททๅไฝฟ็จ๏ผๅฆๅๅฐฑไผๅฏผ่ดๆ ๆณๅจ blocking ไธไธๆไธญๅ ้ค่ฟ่กๆถใๅฏไปฅๅจ้ๅผๆญฅๅฝๆฐ
ไธญไปฅๅๆญฅๆนๅผ่ฐ็จ Tokio::main ๅฅๅฃๅฝๆฐ๏ผๅ ไธบๅฎไผๅๅปบๅผๆญฅ่ฟ่กๆถๅ่ฃๅผๆญฅไปปๅกใ

```rust,ignore
#[tokio::main]
async fn fake_main() {
    let fact = get_cat_fact_async().await;
    println!("[async] fact = {:#?}", fact);
}

/// blocking and async runtime can't  coexisting operation or cause error:
/// Cannot drop a runtime in a context where blocking is not allowed. 
/// This happens when a runtime is dropped from within an asynchronous context.
fn main() {
    let fact = get_cat_fact();
    println!("[sync ] fact = {:#?}", fact);
    fake_main();
}

async fn get_cat_fact_async() -> Result<String, Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    let body = client.get("https://catfact.ninja/fact").send()
        .await?
        .text()
        .await?;

    Ok(body)
}

fn get_cat_fact() -> Result<String, Box<dyn std::error::Error>> {
    let body = reqwest::blocking::get("https://catfact.ninja/fact")?.text()?;

    Ok(body)
}
```

## โก UDP & TCP/IP Protocols ็ฝ็ปๅ่ฎฎ
- [User Datagram Protocol (UDP)](https://www.khanacademy.org/a/transmission-control-protocol--tcp)
- [Transmission Control Protocol (TCP)](https://www.khanacademy.org/a/user-datagram-protocol-udp)
- [RFC 791 - IP(Internet Protocol)](https://www.rfc-editor.org/info/rfc791)
- [RFC 793 - TCP(Transmission Control Protocol)](https://www.rfc-editor.org/info/rfc793)
- [ไธๆ่ฏปๆ HTTP/2 ๅ HTTP/3 ็นๆง](https://blog.fundebug.com/2019/03/07/understand-http2-and-http3/)
- [TCP ๅพ่งฃๅ็พ้ฎ](https://mp.weixin.qq.com/s/tH8RFmjrveOmgLvk9hmrkw)
- TCP/IP Illustrated Vol. 3: TCP for Transactions, HTTP, NNTP, and the Unix Domain Protocols - Addison-Wesley
- TCP/IP Illustrated vol. 2: The Implementation Gary R. Wright, W. Richard Stevens
- TCP/IP Illustrated Vol. 1: The Protocols Kevin R. Fall, W. Richard Stevens
- Illustrated TCPIP: A Graphic Guide to the Protocol Suite by Matthew Naugle


็ฝ็ป็ผ็จไธญ๏ผๅ่ฎฎๆ ไธญ UDP & TCP/IP ๅฟ้ๆๆก็ไธค็งๅ่ฎฎ๏ผๅฎไปฌๆฏๆๅบ็ก็ไธค็งๅ่ฎฎ๏ผ

- User Datagram Protocol (UDP) ไธไฟ่ฏ่ฟๆฅ็ๅฏ้ ๏ผ
- Transmission Control Protocol (TCP) ็จไบๅฏ้ ็่ฟๆฅ๏ผ

ไธค็งๅ่ฎฎ้ฝๆฏๅบไบ IP ๅ่ฎฎไนไธ็ไผ ่พๅฑๅ่ฎฎ๏ผๅพ็ๆฅ่ช Khan Academyใ

![UDP segment over IP packet](https://cdn.kastatic.org/ka-perseus-images/9d185d3d44c7ef1e2cd61655e47befb4d383e907.svg)
![TCP segment over IP packet](https://cdn.kastatic.org/ka-perseus-images/e5fdf560fdb40a1c0b3c3ce96f570e5f00fff161.svg)

Internet Protocol (IP) ๆ่ฟฐๅฆไฝๅฐๆถๆฏๅๅไปฅ IP packets ๆ route packets ๅจ่ทฏ็ฑ็ฝ็ปไธไผ ่พ๏ผ
ไฝไธไฟ่ฏ้กบๅบใๆฐๆฎๅๅฏ่ฝไผ็ฑไบๆ็งๅๅ ๆๅ๏ผๆฅๆถ็ๆฐๆฎไธๅไธๆๅๅ้็ๆฐๆฎๅน้ใ

็ฑไบ็ฉ็ๅฑๆ่ทฏ็ฑๅจ่ฝฌๅ่กจไธญ็้ฎ้ข๏ผๆฐๆฎๅๅฏ่ฝไผไธขๅคฑใๅฆๆไธๆกๆถๆฏ็ไธไธชๆฐๆฎๅไธขๅคฑไบ๏ผ้ฃไนๅฏ่ฝๅฐฑไธๅฏ่ฝ
ไปฅๆๆไน็ๆนๅผๅฐๆถๆฏ้ๆฐ็ปๅ่ตทๆฅใ็ฑปไผผๅฐ๏ผ็ฑไบๅไธๆฐๆฎๅ็ๆๅค้ไผ ๏ผๆฐๆฎๅๅฏ่ฝไผ่ขซๅคๅถใ

่ๅบไบ IP ๅ่ฎฎไนไธ็ไผ ่พๅฑๅ่ฎฎๅฐฑๅฏไปฅๅนถไธไน้่ฆ่งฃๅณ IP ๅ่ฎฎไธญๅญๅจ็้ฎ้ขใ


ๅ ไธบ่ฟๆฅไธ็กฎไฟๅฏ้ ๏ผUDP ๅ่ฎฎไน็งฐไธบ Unreliable Data Protocolใไฝๆฏ UDP ไธ็จๅ TCP ้ฃๆ ท้ๅคๅคๆฌก
็ฝ็ปไฟกๆฏไผ ่พๆ่ฝๅปบ็ซๅฏ้ ่ฟๆฅ๏ผ่่ฟไธช่ฟ็จๅจ UDP ้ไฟกไธญ๏ผๅฏ่ฝๅทฒ็ปๅฎๆๆฐๆฎไผ ่พไบ๏ผๅจๅฐ้ๆฐๆฎ็ๆๅตไธๅฐฑ
ๆฏ่ฟๆ ท๏ผๆไปฅ UDP ๆฏ TCP ๅทๆๆดๅฟซ้็ไผๅฟ๏ผHTTP3.0 ๅ่ฎฎไนๅบไบ UDP ๅฎ็ฐใHTTP2.0 ๅ่ฎฎ่ฝ็ถ้่ฟ่ฟๆฅ
ๆไนๅใๅค่ทฏๅค็จๆฅ่งฃๅณ HTTP1.0 ็่ฟๆฅๆข้ฎ้ข๏ผไฝๆฏ Web ็ฝ็ป้ๅบฆ่ฟๆฏไธๅคๅฟซ้ใ

UDP ๆฏๆ ่ฟๆฅ็๏ผ้ไฟกไธ้่ฆๅปบ็ซๅๆญๅผ่ฟๆฅ๏ผๆณ่ฆ็ปไธๆนๅ้ๆฐๆฎๅฐฑ้ๆถๅฏไปฅๅๆๅฎๅฐๅๅ้ๆฐๆฎ๏ผ่ไธ้่ฆๅ
ๅปบ็ซ่ฟๆฅใไฝๆฏๅฏนๆน่ฝไธ่ฝๆถๅฐๆฏๆฒกๆไฟ้็๏ผ็ฑไบ่ฟๆ ท็ฒพ็ฎ็้ไฟกๆนๅผ๏ผUDP ๅฐฑไธไผๆๆฅๅกๆงๅถ๏ผๅฏไปฅๆๅบๅฎ
้ๅบฆๅ้ๆฐๆฎใๅณไฝฟ็ฝ็ปๆกไปถไธๅฅฝ๏ผไนไธ้่ฆๅฏนๅ้้็่ฟ่ก่ฐๆดใๅผ็ซฏๆฏๅจ็ฝ็ปๆกไปถไธๅฅฝ็ๆๅตไธๅฏผ่ด้ซไธขๅ็๏ผ
ไฝๆฏไผ็นไนๅพๆๆพ๏ผๅจๆไบๅฎๆถๆง่ฆๆฑ้ซ็ๅบๆฏ๏ผๆฏๅฆ็ต่ฏไผ่ฎฎ๏ผๅฐฑ้่ฆไฝฟ็จ UDP ่ไธๆฏ TCPใ

ๅจไฝฟ็จ Tokio ็ผๅ UDP ้่ฎฏ็จๅบๆถ๏ผๅช้่ฆๆง่ก UdpSocket::bind(&bind_addr) ็ปๅฎๆฌๆบ็ IP ๅฐๅ
ๅ็ซฏๅฃ๏ผ็ถๅๅ้่ฟ socket.connect(addr) ๅป่ฟๆฅ่ฟ็จไธปๆบ๏ผๅฝ็ถ่ฟไธช่ฟๆฅไธ TCP socket ็่ฟๆฅๆฏๅฎๅจ
ไธคไธชๆๆ๏ผUDP ็่ฟๆฅๅชๅจ้่ฆๅ้ๆฐๆฎๆถๆไผๆ IP ๆฐๆฎๅๆตๅ่ฟ็จไธปๆบใ


ไธบไบไฟ่ฏๅฏ้ ๆง๏ผTCP ่ฟๆฅๅไธๆญฅ๏ผ้ฆๅ้่ฆ three-way handshake ไธๆฌกๆกๆ็กฎ่ฎคๅๆไผๅปบ็ซๅๆน็้ไฟก่ฟๆฅ๏ผ
ไผ ่พๅฎๆฐๆฎๅ๏ผๅ้่ฆ 4-way handshake ๅๆฌกๆฅๆ็กฎ่ฎคๆฐๆฎไผ ่พๅฎๆๆๆญฃๅผๆญๅผ่ฟๆฅ๏ผ 

![three-way handshake](https://cdn.kastatic.org/ka-perseus-images/d09f9d37ff2a2deb21a8822f8c99ba6b86319f0b.svg)
![4-Way Wave handshake](https://cdn.kastatic.org/ka-perseus-images/f158ea181534ee675d0928fa657897cefc04359e.svg)

- Step 1: Establish connection
- Step 2: Send packets of data
- Step 3: Close the connection

ๅปบ็ซ่ฟๆฅๆถ๏ผๅๆนไบๅๅฏนๅบๅๅบ SYN๏ผๅฏนๆนๆฅๆถๅฐๅๅๅค ACK๏ผ็ฑ้ไฟก็ๅ่ตทๆนๅๅๅบ SYN ไฟกๅท๏ผๅฏนๆนๆฅๆถๅฐ
ๅๅฐฑๅฏไปฅ่ฟๅธฆ SYN + ACK ไธ่ตทๅ้ๅ่ฟๆฅ่ฏทๆฑๆนใ

ๆถๅๆฐๆฎๆถ๏ผไธๆนๅ้ๅธฆๆๅบๅๅท็ๆฐๆฎๅ๏ผๅฆ Sequence #1๏ผๅ ไธบๆฐๆฎๅๆฅๆถๆถๆฏๆ ๅบ็๏ผ้่ฆ่ฟไธชๅบๅท
ๆฅ้็ปๆญฃ็กฎ็ๆฐๆฎ้กบๅบใๆฅๆถๆนๆถๅฐไธไธชๅ๏ผๅฐฑๅๅบไธไธช ACK ็กฎ่ฎคไฟกๅท๏ผ่ฎฉๅ้ๆน็ฅ้ๅทฒ็ปๆฅๆถๅฐไบ็ธๅบๅบๅท
็ๆฐๆฎ๏ผ่ฟๆ ทๅฐฑไธ้่ฆๅๆฌก้ๅใ

ไนๆไปฅ้่ฆ 4 ๆฌกๆฅๆๆ็ปๆ่ฟๆฅ๏ผๆฏๅ ไธบๆฐๆฎๅ้ๆนๅฏ่ฝๅญๅจๆฐๆฎ่ฟๆชไผ ่พๅฎ็ๆๅตไธ๏ผๅฏนๆนๅๆๅบไบ็ปๆ่ฟๆฅ๏ผ
่ฟๅฐฑ้่ฆๅๆนๆ็กฎ FIN <--> ACK ่ฟ่กๅฏน็ญๅ๏ผๆ่ฝๅฎๅจ็ปๆ่ฟๆฅใ

TCP ๅ่ฎฎๅคดไธญๆไพไบ 6-bit ๆงๅถไฝ๏ผๅฏไปฅ็จๆฅๆๅฎๅญ็งไธๅ็จ้็ TCP ๆฐๆฎๅ๏ผไพ bit ้กบๅบๅ่ฝๅฆไธ๏ผ

01. URG - Urgent Pointer field significant ็ดงๆฅๆ ๅฟ๏ผ็จไบ้่ฆๅบ็จๅฑ็ดงๆฅๅค็็ๆฐๆฎๅ๏ผ
02. ACK - Acknowledgment field significant ๅบ็ญ็กฎ่ฎค๏ผ
03. PSH - Push Function ๆจ้ๆ ๅฟ๏ผ็จไบๆจ้ๆฐๆฎ่ไธๆฏไฝฟ็จๆฐๆฎ้ๅๅค็๏ผ่กจ็คบๆฐๆฎๅ่ฆๅฐฝๅฟซไบค็ปๅบ็จๅฑๅค็๏ผ
04. RST - Reset the connection ่ฟๆฅ้็ฝฎ๏ผ
05. SYN - Synchronize sequence numbers ๅๆญฅๅบๅ๏ผ็จๅจๅปบ็ซ่ฟๆฅ๏ผๆฏไธช SYN segment ๆถ่ไธไธชๅบๅๅท๏ผๅณไฝฟๅ็ปญๅบๅๅทๅ ไธ๏ผ
06. FIN - No more data from sender ็จๅจ็ปๆ่ฟๆฅ๏ผ

![TCP ็็ถๆๆบ](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxOC81LzEvMTYzMWJlZjllM2M2MDAzNQ)


Step 1: Establish connection

- The first computer sends a packet with the SYN bit set to 111 (SYN = "synchronize?"). 
- The second computer sends back a packet with the ACK bit set to 111 (ACK = "acknowledge!") plus the SYN bit set to 111. 
- The first computer replies back with an ACK.

The SYN and ACK bits are both part of the TCP header:

![Diagram of two computers with arrows between.](https://cdn.kastatic.org/ka-perseus-images/9a4a79816965be53e1071cf6b0e2991cb4d170ca.svg)

The ACK and SYN bits are highlighted on the fourth row of the header.

1. A diagram of the TCP header with rows of fields. Each row is 32 bits long. 
2. The first row contains a 16-bit source port number and 16-bit destination port number. 
3. The second row contains a 32-bit sequence number. 
4. The third row contains a 32-bit acknowledgement number. 
5. The fourth row contains a 
    - 4-bit data offset number, 
    - 6 bits that are marked as reserved, 
    - 6 control bits (URG, ACK, PSH, RST, SYN, and FIN), and a 
    - 16-bit window size number. 
6. The fifth row contains a 16-bit checksum and 16-bit urgent pointer. 
7. The header ends with options and padding which can be of variable length.

In fact, the three packets involved in the three-way handshake do not typically 
include any data. Once the computers are done with the handshake, they're ready 
to receive packets containing actual data.


Step 2: Send packets of data

When a packet of data is sent over TCP, the recipient must always acknowledge what they received.

![Diagram of two computers with arrows between.](https://cdn.kastatic.org/ka-perseus-images/2cfc6b88b3b5c3a27386503d347524c2065a57d9.svg)

The first computer sends a packet with data and a sequence number. The second 
computer acknowledges it by setting the ACK bit and increasing the acknowledgement 
number by the length of the received data.

The sequence and acknowledgement numbers are part of the TCP header:

![A diagram of the TCP header with rows of fields.](https://cdn.kastatic.org/ka-perseus-images/ec71832edb1f2ff1d2ad12da494033ce2b25aafa.svg)

The 32-bit sequence and acknowledgement numbers are highlighted.

Each row is 32 bits long. 

1. The first row contains a 16-bit source port number and 16-bit destination port number. 
2. The second row contains a 32-bit sequence number. 
3. The third row contains a 32-bit acknowledgement number. 
4. The fourth row contains a 
    - 4-bit data offset number, 
    - 6 bits that are marked as reserved, 
    - 6 control bits (URG, ACK, PSH, RST, SYN, and FIN), and a 
    - 16-bit window size number. 
5. The fifth row contains a 16-bit checksum and 16-bit urgent pointer. 
6. The header ends with options and padding which can be of variable length.

Those two numbers help the computers to keep track of which data was successfully 
received, which data was lost, and which data was accidentally sent twice.


Step 3: Close the connection

Either computer can close the connection when they no longer want to send or receive data.

![4-Way Wave handshake](https://cdn.kastatic.org/ka-perseus-images/f158ea181534ee675d0928fa657897cefc04359e.svg)

A computer initiates closing the connection by sending a packet with the FIN bit 
set to 1 (FIN = finish). The other computer replies with an ACK and another FIN. 
After one more ACK from the initiating computer, the connection is closed.


Detecting lost packets
TCP connections can detect lost packets using a timeout.

![Diagram demonstrating re-transmission of a packet from one computer to another computer.](https://cdn.kastatic.org/ka-perseus-images/b1017461d232cd46fa5b445f80e75568bf31c57c.svg)

After sending off a packet, the sender starts a timer and puts the packet in a 
retransmission queue. If the timer runs out and the sender has not yet received 
an ACK from the recipient, it sends the packet again.

The retransmission may lead to the recipient receiving duplicate packets, if a 
packet was not actually lost but just very slow to arrive or be acknowledged. 
If so, the recipient can simply discard duplicate packets. It's better to have 
the data twice than not at all!



## โก UDP & TCP/IP Connector
- https://docs.rs/bytes/1.3.0/bytes/index.html
- Learning Reactive Programming With Java 8 Nickolay Tsvetinov
- [Explore all RxJS operators](https://reactive.how/rxjs/)
- [Interactive diagrams of Rx Observables](https://rxmarbles.com)
- [FRP - Functional Reactive Programming](https://www.cnblogs.com/apolis/p/11437688.html)
- [Taming snakes with reactive streams](https://blog.thoughtram.io/rxjs/2017/08/24/taming-snakes-with-reactive-streams.html)

่ฟ้ๅฎ็ฐไธไธช UDPใTCP ่ฟๆฅๆต่ฏ็จๅบ๏ผๅ ไธบ UDP ๆ ้่ฆ้ขๅๅปบ็ซ่ฟๆฅๅ้ไฟก๏ผๆฌ่บซๅฏไปฅไฝไธบ UDP ไพฆๅฌๆๅก๏ผ
ๅช้่ฆๆๅฎไพฆๅฌๅฐๅใ็ซฏๅฃๅณๅฏ๏ผไปฃ็ ไฟฎๆน่ช tokio\examples\connect.rs ็คบ่ไปฃ็ ่ๆฅใ

่ฟ้ไฝฟ็จไบไธ็ณปๅ็็ฑปๅไธๆฅๅฃ๏ผ

    use bytes::Bytes;
    use futures::{future, Sink, SinkExt, Stream, StreamExt};
    use tokio_util::codec::{BytesCodec, FramedRead, FramedWrite};

**bytes** ๆไพ็ๆฏ้ซๆๅญ่็ผๅฒๅบ็ๆฝ่ฑก๏ผไธๅฏน็ผๅฒๅบ็ฑปๅๅไธๅฏน้ๅฅๆฅๅฃ๏ผๆฅๅฃๆไพๅๆฐๆฎ็ฑปๅ็่ฏปๅๆนๆณ๏ผ
็ผๅฒๅบๅฏไปฅๆ นๆฎๆฐๆฎ็ฑปๅๅๅๅฒใ

- **Bytes**   A cheaply cloneable and sliceable chunk of contiguous memory.
- **BytesMut**    A unique reference to a contiguous slice of memory.
- **Buf** Read bytes from a buffer.
- **BufMut**  A trait for values that provide sequential write access to bytes.

**Bytes** ๅๅซไธไธช vtable ๅฎไนๅฑไบซใๅ้่งๅ๏ผ่ฐ็จ Bytes::clone() ๅฐฑๆง่ก vtable function
่ฟ่ก็ธๅบๆไฝ๏ผไปฅๅจๅคไธช Bytes ๅฎไพไน้ดๅฑไบซ็ผๅฒๅบๆฐๆฎใ

- ๅฏนๅผ็จ constant memory ็ Bytes๏ผๅ้่กไธบๅฎไนไธบ no-op๏ผๅณ Bytes::from_static() ่ฟๆ ท็ๅฎไพไธไผๆๅ้่กไธบ๏ผ
- ๅฏนไบๅผ็จ่ฎกๆฐๅฑไบซๅญๅจ็ฉบ้ด็ Bytes๏ผๅฆๅฑไบซ `Arc<[u8]>` ๅไผ็ธๅบๅขๅ ่ฎกๆฐๅจๅผ๏ผๆไปฅๅฏไปฅๆๅคไธชๅฎไพๅฑไบซๅไธๅๅญ็ฉบ้ด๏ผๆ ๅฐไธๅๅบๅ๏ผ

ไปฅไธๅพ่กจๆผ็คบไบไธคไธช Bytes ๅฎไพๅฆไฝไฝฟ็จๅไธๅ่ฎกๆฐๅฑไบซๅๅญ็ไธๅๅบๅ๏ผ

       Arc ptrs                   โโโโโโโโโโโ
       ________________________ / โ Bytes 2 โ
      /                           โโโโโโโโโโโ
     /          โโโโโโโโโโโโโ     |         |
    |_________/ โ  Bytes 1  โ     |         |
    |           โโโโโโโโโโโโโ     |         |
    |           |           | ___/ data     | tail
    |      data |      tail |/              |
    v           v           v               v
    โโโโโโโฌโโโโโโฌโโโโโโโโโโโโฌโโโโโโโโโโโโโโโโฌโโโโโโ
    โ Arc โ     โ           โ               โ     โ
    โโโโโโโดโโโโโโดโโโโโโโโโโโโดโโโโโโโโโโโโโโโโดโโโโโโ

**BytesMut** ่กจ็คบๆฝๅจๅฑไบซๅๅญๅบๅ็็ฌ็น่งๅพ๏ผๆๅฏไธๆงไฟ่ฏ๏ผBytesMut ๅฅๆ็ๆๆ่ๅฏไปฅๆนๅๅๅญใ
ๅฏไปฅ็ไฝๆฏ `buf:Arc<Vec<u8>>`๏ผไธไธชๅฐ buf ็ๅ็งป้ใไธไธชๅ็้ฟๅบฆ๏ผไฟ่ฏไธไผๆๅ็็ธไบ้ๅ ๏ผ่ฟ
ๆๅณ็ไธ้**ๅ้ไฟๆค**ใ

BytesMut ๅฏนๅบ็ BufMut ๆฅๅฃๅฎ็ฐไผๅจ้่ฆๆถ๏ผ้ๅผๅฐๅขๅ ็ผๅฒๅบ็ฉบ้ด๏ผๅฝ็ถ๏ผๅจๆง่กไธ็ณปๅๆฐๆฎๆๅฅๆไฝ
ไนๅ๏ผๆ็กฎไฟ็ๆ้็็ฉบ้ดๅฐๆดๆๆ็ใ


็ฝ็ปๅบ็จ้ๅธธ้ฝๆถๅ Flow Control ้ฎ้ข๏ผไนๆฏๅๅบๅผ็ผ็จ Reactive Programming ๅธธๅธธๅบ็ฐ็ๆฆๅฟตใ

ๆฏๅฆไธไธชๆฐดๆฑ ๏ผๆไธไธช่ฟๆฐด็ฎกๅไธไธชๅบๆฐด็ฎกใๅฆๆ่ฟๆฐด็ฎกๆฐดๆตๆดๅคง๏ผ่ฟไธๆฎตๆถ้ดๆฐดๆฑ ๅฐฑไผๆปกๆบขใ่ฟๅฐฑๆฏๆฒกๆ่ฟ่กๆต้ๆงๅถๅฏผ่ด็็ปๆใ

่ Flow Control ๆๅ ็งๆ่ทฏ๏ผ

- Backpressure ๆนๅผๅฐฑๆฏ่ชๅฉ้ค๏ผ้่ฆๅคๅฐๅๅคๅฐใๆถ่ดน่้่ฆๅคๅฐ๏ผ็ไบง่ๅฐฑ็ไบงๅคๅฐ๏ผๆถ่ดนๅพๅฐไบ๏ผๅฐฑ่ฎฉ็ไบงๆนๅไบงใ
- Throttling ่ๆตๆนๅผ๏ผ่ฏด็ฝไบๅฐฑๆฏไธขๅผใๆถ่ดนไธ่ฟๆฅ๏ผๅฐฑๅค็ๅถไธญไธ้จๅ๏ผๅฉไธ็ไธขๅผใ
- buffer ๅ window๏ผๅฎไปฌๆฏๆไธๆธธๅคไธชๅฐๅ่ฃนๆๆๅคงๅ่ฃน๏ผๅๅๅฐไธๆธธ๏ผ่ฟๆ ทไธๆธธ้่ฆๅค็็ๅ่ฃน็ไธชๆฐๅฐฑๅๅฐไบใ
- Callstack blocking ๆฏไธ็ง็นๆฎๆๅต๏ผ้ปๅกไฝๆดไธช่ฐ็จ้พใ

ๅถๅฎ๏ผBackpressure ๆบ่ชๅทฅ็จไธ็ไธไธชๆฆๅฟต๏ผๅจ็ฎก้่ฟ่พไธญ๏ผๆฐๆตๆๆถฒๆต็ฑไบ็ฎก้็ช็ถๅ็ปใๆฅๅผฏ็ญๅๅ ๅฏผ่ด
็ฑๆๅคๅบ็ฐไบไธๆธธๅไธๆธธ็้ๅๅๅ๏ผ่ฟ็งๆๅต็งฐไฝใback pressureใใๆพ็ๆฐด็็ฎก้๏ผๅฆๆ็ช็ถๅณ้ญ๏ผไนไผ
ไบง็ๅผบๅคง็ๅๅ๏ผๆฐด้คๆณตๅฐฑๆฏๅฉ็จ่ฟไธชๅ็ไบง็็ใ่ฟๆฏไธไธชๅพ็ด่ง็่ฏ๏ผback pressure ๅๅ็ใๅพๅ็ๅๅใ

ๅจๆฐๆฎๆตไผ ่พ่ฟ็จไธญ๏ผไธๆธธ็ไบง้ๅบฆๅคงไบไธๆธธๆถ่ดน้ๅบฆ๏ผๅฏผ่ดไธๆธธ็ Buffer ๆบขๅบ๏ผไป่ไบง็ Backpressureใ
้่ฆๅผบ่ฐ็ๆฏ๏ผ้็นไธๅจไบ้ๅบฆๅทฎ๏ผ่ๅจไบ Buffer ๆบขๅบใBackpressure ๅ Buffer ๆฏไธๅฏน็ธ็ๅฑๅญ็ๆฆๅฟต๏ผ
ๅชๆ่ฎพ็ฝฎไบ Buffer๏ผๆๆ Backpressure ๅบ็ฐใ

Backpressure ๅค็ๆนๆกๅชๅฏน Cold Observable๏ผๅ่ฎธ้ไฝ้็็ๅ้ๆบใ่ฟๆ็น็ฑปไผผไบ TCP ้็ๆต้ๆงๅถ๏ผ
ๆฅๆถๆนๆ นๆฎ่ชๅทฑ็ๆฅๆถ็ชๅฃ็่ฎพ็ฝฎๆฅๆงๅถๆฅๆถ้็๏ผๅนถ้่ฟ ACK ๅๅคๅๆฅๆงๅถๅ้ๆน็ๅ้้็ใๆฏๅฆ๏ผไธคๅฐๆบๅจ
ไผ ไธไธชๆไปถ๏ผ้็ๅฏๅคงๅฏๅฐ๏ผๅณไฝฟ้ไฝๅฐๆฏ็งๅ ไธชๅญ่๏ผๅช่ฆๆถ้ด่ถณๅค้ฟ๏ผ่ฟๆฏ่ฝๅคๅฎๆ็ใๅไพๆฏ็ดๆญ๏ผ้็ไฝไบ
ๆไธชๅผๆดไธชๅ่ฝๅฐฑๆฒกๆณ็จไบ๏ผ่ฟ็ง็ฑปไผผไบ Hot Observableใ

Learning Reactive Programming With Java 8 ็ไฝ่ Nickolay Tsvetinov ไธพ่ฟ็ฑปไผผ่ฟๆ ท็ไพๅญ๏ผ
่ฎพๆณๅคงๅฎถ้ฝๅจๆถ็ๅไธๅฅ็ต่ง่็ฎ๏ผ่ฟๅฐฑๆฏ Hot Observableใ่ๅ่ชๅฌ็ฃๅธฆ้ณๅ๏ผ่ฟๅฐฑๆฏ Cold Observableใ

> We can say that cold Observables generate notifications for each subscriber and hot
> Observables are always running, broadcasting notifications to all of their subscribers.
> Think of a hot Observable as a radio station. All of the listeners that are listening to
> it at this moment listen to the same song. A cold Observable is a music CD. Many
> people can buy it and listen to it independently.

่ณไบๅค็ๅชไบๅไธขๅผๅชไบ๏ผๅฐฑๆไธๅ็็ญ็ฅ๏ผไนๅฐฑๆฏ sample (or throttleLast)ใthrottleFirstใdebounce 
(or throttleWithTimeout) ่ฟไธ็งใ่ฟๆฏไธพ้ณ่ง้ข็ดๆญ็ไพๅญ๏ผๅจไธๆธธๅค็ไธ่ฟๆฅ็ๆถๅ๏ผๅฐฑ้่ฆไธขๅผๆฐๆฎๅใ


**futures** ๆจก็ปๆฏๅถๅฎๅคไธชๆจก็ป็้ๆฐๅฏผๅบ๏ผๅถไธญ **Streams** ๆฅๅฃไปฃ่กจ็ๆฏๆฐๆฎๅบๅ็ๅผๆญฅไบง็๏ผ
ๅฏนๅบไบๅๆญฅๅ่ฏญไธญ็ Iterator ๆฆๅฟต๏ผ

- **poll_next()** ๆฏๆฌกๆไธไธชๅผไบง็ไพฟๅฏไปฅ่ฐ็จไธๆฌก่ฟไธชๆนๆณ๏ผๅฝๅผไบง็ๅฎๆฏๅๆญคๆนๆณไผ่ฟๅ Noneใ
- **size_hint()** ไธป่ฆ็จไบไผๅ๏ผไพๅฆไธบๆต็ๅ็ด ไฟ็็ฉบ้ด๏ผไฝไธ่ฝ่ขซไฟกไปป๏ผ้ป่ฎคๅฎ็ฐ่ฟๅ๏ผ0๏ผNone๏ผ๏ผ่ฟๅฏนไบไปปไฝๆต้ฝๆฏๆญฃ็กฎ็ใ

่ **Sinks** ๆฅๅฃๅๆไพไบๅผๆญฅๅๅฅ็ๆนๆณ๏ผๅฏไปฅๆฅๆฝ่ฑก็ฝ็ป่ฟๆฅ็ๅๅฅ็ซฏ๏ผๆถๆฏ้ๅไธญ็ Producerใๅผๆญฅ
ๆฐๆฎๆถๅๅฐฑ้่ฆ็ปๅ็ผๅฒๅบ็็ถๆๆฅๅค็ๆฐๆฎ๏ผSink ๅฐฑๆฏๆต้ๆงๅถๆจกๅ็ๅฎ็ฐๆฅๅฃ๏ผ้่ฟๅคๆญ **poll_ready()**
่ฟๅ็็ถๆๆฅ็กฎๅฎ่ฝๅฆๆง่กๆฐๆฎๅ้ๅจไฝ๏ผ้่ฟ่ฟๅ็ถๆๅฎ็ฐๅๅๆฐดๅนณ่ชๅจๆฒ้๏ผ

- **poll_ready()** ๅคๆญๆฏๅฆๅๅคๅฅฝๆฅๆถ๏ผ่ฟๅ`Poll::Ready(Ok(()))`ๆ่ฝ่ฐ็จ`start_send`ๅ้ๆฐๆฎ๏ผ
- **start_send()** ๅผๅงๅ้ๆฐๆฎ๏ผๅฆๆไฝฟ็จไบ็ผๅฒ๏ผๆฐๆฎๅๅๅฐ่พพ็ผๅฒๅบ๏ผ่ฆ่ฐ็จ flush ๆ close ็กฎไฟๅ้ๅฎๆ๏ผ
- **poll_flush()** ๆจ้็ผๅฒๆฐๆฎ๏ผ่ฟๅ`Poll::Pending`่กจ็คบ่ฟๆๆดๅคๅทฅไฝ่ฆๅ๏ผๅฝๅไปปๅก่ขซๆๆถๆ่ตท๏ผๅนถ็ญๅพ่ขซๅค้ๅ็ปง็ปญ๏ผ
- **poll_close()** ๆจ้็ผๅฒๆฐๆฎๅนถๅณ้ญ Sink๏ผๆๆๆฐๆฎๅค็ๅฅฝๅ่ฟๅ`Poll::Ready(Ok(()))`๏ผๅฆๅๆ่ตท็ญๅพๅๅค้็ปง็ปญ๏ผ

ๅผๆญฅๆต้็ไผ ้็ไธไผ็นๅฐฑๆฏๅฏไปฅ้่ฟ็ถๆๅจๆๅฐ่ฐๆดๆฐๆฎ็ๅ้๏ผๅจ Sink ็ผๅฒๅบๅทฒๆปกๆถ๏ผๅฐฑๆ่ตท็ญๅพๅ้ๆถๆบใ

**tokio_util** ๆจก็ปๆไพไบไธ็ณปๅ็ๅทฅๅท็ฑปๅๅธฎๅฉๅค็ๅผๆญฅๆฐๆฎๆต๏ผไธป่ฆๆฏๅญ่ๆต็ผ็ ใ่งฃ็ ๏ผๅ่ฏปๅๆฅๅฃ๏ผ

- **BytesCodec**  ๅฎ็ฐไบ Decoder ๅ Encoder ไธคไธชๆฅๅฃ๏ผ็จไบๅญ่ๆฐๆฎไผ ่พ๏ผ
- **Framed**  A unified Stream and Sink interface to an underlying I/O object, using the Encoder and Decoder traits to encode and decode frames.
- **FramedParts** FramedParts contains an export of the data of a Framed transport. It can be used to construct a new Framed with a different codec. It contains all current buffers and the inner transport.
- **FramedRead**  A Stream of messages decoded from an AsyncRead.
- **FramedWrite** A Sink of frames encoded to an AsyncWrite.

Frame ไธๅบๅฑ I/O ๅฏน่ฑก็็ปไธๆตๅๆฑๆฅๅฃ๏ผไฝฟ็จ็ผ็ ๅจๅ่งฃ็ ๅจ็นๆงๅฏนๅธง่ฟ่ก็ผ็ ๅ่งฃ็ ใ

FramedParts ๅๅซ Framed ไผ ่พ็ๆฐๆฎๅบๅฃ๏ผๅฎๅฏ็จไบๅทๆไธๅ็ผ่งฃ็ ๅจๆๅปบ็ Framed ๆฐๅฎไพ๏ผๅฎๅๅซๆๆๅฝๅ็ผๅฒๅบๅๅ้จไผ ่พใ

Tokio ๅผๆญฅ่ฏปๅๆฅๅฃ AsyncReadใAsyncWrite ๅฎไน็ๆฏๅๆญฅๆนๆณ๏ผ่ฟไธคไธชๆฅๅฃ้่ฆๆ นๆฎๆฐๆฎ็ถๆ็ไธๅ
ๆไพไธ็ง Poll ๆไธพ็ถๆๅผ๏ผ

- Poll::Ready(Ok(())) ่กจ็คบๆฐๆฎ็ฐๅจๅฐฑๅๅคๅฅฝ๏ผๅฏไปฅไป็ผๅฒๅบ่ฏปๅใReadBuf::filled ๆ็คบๆฐๆฎ้ใๅฆๆๅทฎๅผไธบ 0๏ผๅๅทฒ่พพๅฐ EOFใ
- Poll::Pending ่กจ็คบๆฐๆฎ่ฟๆฒกๆๅฐ่พพ๏ผI/O ๅฏน่ฑกไธๅฏ่ฏปๅใ
- Poll::Ready(Err(e)) ่กจ็คบๅบๅฑๅบ็ฐ I/O ้่ฏฏ๏ผ



```rust,ignore
/// An example of hooking up stdin/stdout to either a TCP or UDP stream.
/// 
/// to connect a TCP server:
/// 
///     cargo run --example 03_connect -- 127.0.0.1:8080
/// 
/// to connect a UDP server:
/// 
///     cargo run --example 03_connect -- --udp 127.0.0.1:8080
/// 
/// or bind to a address as udp server
/// 
///     cargo run --example 03_connect -- --udp 127.0.0.1:8081 127.0.0.1:8080
///     cargo run --example 03_connect -- --udp 127.0.0.1:8080 127.0.0.1:8081

use std::{error::Error, net::SocketAddr};
use async_std::stream::StreamExt;
use tokio_util::codec::{BytesCodec, FramedRead, FramedWrite};
use tokio::io;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
  let mut args = std::env::args().skip(1).collect::<Vec<String>>();
  let mut tcp = true;

  let bind_addr = match args.iter().position(|a| a == "--udp") {
    Some(i) => {
      args.remove(i);
      tcp = false;
      args.first().unwrap()
    },
    None => "",
  };

  
  let addr = args.last().ok_or("address is required")?;
  // let addr: SocketAddr = addr.parse()?;
  let addr = addr.parse::<SocketAddr>().expect("require TCP/IP address.");

  // let the OS pick udp IP address and port if not specify.
  let bind_addr = if !bind_addr.is_empty() && && args.len() > 1 {
    bind_addr
  } else if addr.is_ipv4() {
    "0.0.0.0:0"
  } else {
    "[::]:0"
  };
  let bind_addr = bind_addr.parse::<SocketAddr>().expect("require UPD/IP address.");
  
  
  let stdin = FramedRead::new(io::stdin(), BytesCodec::new());
  let stdin = stdin.map(|i| i.map(|bytes| bytes.freeze()));
  let stdout = FramedWrite::new(io::stdout(), BytesCodec::new());

  if tcp {
    tcp::connect(&addr, stdin, stdout).await?;
  }else{
    udp::connect(&addr, &bind_addr, stdin, stdout).await?;
  }

  Ok(())
}

mod tcp {
  use bytes::Bytes;
  use tokio::net::TcpStream;
  use futures::{future, Sink, SinkExt, Stream, StreamExt};
  use tokio_util::codec::{BytesCodec, FramedRead, FramedWrite};
  use std::{io, net::SocketAddr, error::Error};


  pub async fn connect(
      addr: &SocketAddr, 
      mut stdin: impl Stream<Item = Result<Bytes, io::Error>> + Unpin,
      mut stdout: impl Sink<Bytes, Error = io::Error> + Unpin,
  ) -> Result<(), Box<dyn Error>> {
    let mut stream = TcpStream::connect(addr).await?;
    let (r, w) = stream.split();
    let mut sink = FramedWrite::new(w, BytesCodec::new());

    let mut stream = FramedRead::new(r, BytesCodec::new())
        // filter map Result<BytesMut, Error> stream into just a Bytes stream to match stdout Sink
        // on the event of an Error, log the error and end the stream
        .filter_map(|i| match i {
            //BytesMut into Bytes
            Ok(i) => future::ready(Some(i.freeze())),
            Err(e) => {
              println!("failed to read from socket: {}", e);
              future::ready(None)
            }
        }).map(Ok);

    match future::join(sink.send_all(&mut stdin), stdout.send_all(&mut stream)).await {
      (Err(e), _) | (_, Err(e)) => Err(e.into()),
      _ => Ok(())
    }
  }
}

mod udp {
  use bytes::Bytes;
  use tokio::net::UdpSocket;
  use futures::{Sink, SinkExt, Stream, StreamExt};
  use std::{io, net::SocketAddr, error::Error};

  pub async fn connect(
    remote_addr: &SocketAddr,
    bind_addr: &SocketAddr,
    stdin: impl Stream<Item = Result<Bytes, io::Error>> + Unpin,
    stdout: impl Sink<Bytes, Error = io::Error> + Unpin,
  ) -> Result<(), Box<dyn Error>> {
    let socket = UdpSocket::bind(&bind_addr).await.expect("Failed to bind UDP socket.");
    socket.connect(remote_addr).await?;
    println!("UDP listenning on: {:?}", socket.local_addr());

    tokio::try_join!(send(stdin, &socket), recv(stdout, &socket))?;

    Ok(())
  }

  /// Read out stdin and write it to UdpSocket
  async fn send(
      mut stdin: impl Stream<Item = Result<Bytes, io::Error>> + Unpin,
      writer: &UdpSocket,
  ) -> Result<(), io::Error> {
    while let Some(item) = stdin.next().await {
      let buf = item?;
      writer.send(&buf[..]).await?;
    }

    Ok(())
  }

  /// Read out UdpSocket and write it to stdout
  async fn recv(
      mut stdout: impl Sink<Bytes, Error = io::Error> + Unpin,
      reader: &UdpSocket,
  ) -> Result<(), io::Error> {
    loop {
      let mut buf = vec!(0; 1024);
      let n = reader.recv(&mut buf[..]).await?;
      if n > 0 {
        stdout.send(Bytes::from(buf)).await?;
      }
    }
  }
}
```


## โก Shared-state & sync ็ถๆๅฑไบซไธๅๆญฅ
- https://tokio.rs/tokio/tutorial/shared-state
- https://tokio.rs/tokio/tutorial/channels
- https://docs.rs/tokio/1.24.1/tokio/sync/index.html

Tokio ๆ็จไปฃ็ ไปๅบ๏ผ

    git clone --depth=1 git@github.com:tokio-rs/website

- tutorial-code/hello-tokio/src/main.rs
- tutorial-code/mini-tokio/src/main.rs
- tutorial-code/spawning/src/main.rs
- tutorial-code/shared-state/src/main.rs
- tutorial-code/channels/src/main.rs
- tutorial-code/io/src/main.rs
- tutorial-code/streams/src/main.rs


ๅจไธไธชๅผๆญฅๅคไปปๅกๅบ็จไธญ๏ผ้่ฟ tokio::spawn() ็ไบง็ๅนถๅไปปๅก๏ผๆฏไธชไปปๅก็ธๅฝไบไธไธชๅ็จ๏ผๅฎไปฌไน้ด๏ผ
ๆ่ไปปๅกไธไธป็บฟ็จไน้ด๏ผไธไปๅฏ่ฝๆ้ไฟก้่ฆ๏ผๅฏ่ฝ่ฟ้่ฆๅฑไบซ็ถๆๆฐๆฎใ

ๅฆๅค๏ผRust ไธฅๆ ผ็ๆๆๆ็ฎก็่งๅไธ๏ผไธป็บฟ็จ็ๆฐๆฎ่ฆ่ฝฌ็งปๆๆๆๅฐๅผๆญฅไปปๅกไธ๏ผไน้่ฆๅฏนๅผๆญฅไปฃ็ ๅไฝฟ็จ็นๅซ
็่ฏญๆณๆ ่ฏ๏ผๅณ้ฎๅญ `move` ไผๅบ็ฐๅจๅค็ง้่ฆ่ฝฌ็งปๆๆๆ็ๅบๅ๏ผๅผๆญฅไปปๅกไธญ็้ญๅๅฐฑๆฏๅถไธญไธไธช๏ผ้่ฟไฝฟ็จ
่ฟไธชๅณ้ฎๅญ๏ผๆๆ่ขซ้ญๅๆๆๅฐ็ๅ้๏ผๅถๆๆๆ้ฝไผ่ฝฌ็งปๅฐ้ญๅๅ้จ๏ผๅนถไธๅพๅฐไธไธช 'static ็ๅฝๅจๆใ

    async move { ... }

Tokio ไธญๆไธค็งๅฑไบซ็ถๆ็ๆนๅผ๏ผ

- Guard the shared state with a `Mutex`.
- Spawn a task to manage the state and use message passing to operate on it.


Rust ๆไพ้้(Channel)ไฝไธบ็บฟ็จ็ๅๆญฅๅทฅๅท๏ผๅ่ฎธไปฃ็ ไน้ด้่ฟๅ้ๆถๆฏ่ฟ่ก้ไฟก๏ผ้้็ฑปๅฝขไธบ **mpsc**๏ผ
Multi-producer, single-consumer๏ผๆฏๅๅฅๅๅบ้ๅ FIFOใ

ๅฆๆไฝ ้่ฆไธไธชๅค็ไบง่ๅคๆถ่ดน่็้้๏ผๆฏไธชๆถๆฏๅชๆไธไธชๆถ่ดน่็ๅฐ๏ผไฝ ๅฏไปฅไฝฟ็จ async-channelใ

Rust ่ฟๆไพๅผๆญฅ้้ std::sync::mpsc๏ผๅผๆญฅ้้้่ฟ้ปๅก็บฟ็จๆฅ็ญๅพๆถๆฏ๏ผ่ฟๅจๅผๆญฅไปฃ็ ไธญๆฏไธๅ่ฎธ็ใ

Tokio ็ๅผๆญฅไปปๅกไน้ดไธป่ฆ้็จๆถๆฏ้ไฟกๆนๅผ๏ผๅณๆไธชๅผๆญฅไปปๅก่ด่ดฃๅๆถๆฏ๏ผๅฆไธไธชๅผๆญฅไปปๅกๆถๆถๆฏใ่ฟ็ง้ไฟก
ๆนๅผ็ๆๅคงไผ็นๆฏ้ฟๅๅนถๅไปปๅกไน้ด็ๆฐๆฎๅฑไบซ๏ผๆถ้คๆฐๆฎ็ซไบ๏ผไฝฟๅพไปฃ็ ๆดๅ ๅฎๅจ๏ผๆดๅ ๅฎนๆ็ปดๆคใ

ๆถๆฏๅจ้้(channel)ไธไผ ้๏ผtokio ๆไพๅ ็งไธๅๅ่ฝ็้้๏ผไธๅ็ฑปๅ็้้๏ผ็จไบ่งฃๅณไธๅๅบๆฏ็้ๆฑ๏ผ

1. **mpsc** ้้: ๅคๅฏนไธๅ้๏ผๅณ่ฏฅ้้ๅฏไปฅๅๆถๆๅคไธชๅ้่ๅ่ฏฅ้้ๅๆฐๆฎ๏ผไฝๅชๆไธไธชๆฅๆถ่ๆฅๆถๆฐๆฎ
2. **oneshot** ้้: ไธๅฏนไธๅ้็ไธๆฌกๆง้้๏ผๅณ่ฏฅ้้ๅช่ฝ็ฑไธไธชๅ้่(Sender)ๅ้ๆๅคไธไธชๆฐๆฎ๏ผไธๅชๆไธไธชๆฅๆถ่(Receiver)ๆฅๆถๆฐๆฎ
3. **broadcast** ้้: ๅคๅฏนๅคๅ้๏ผๅณ่ฏฅ้้ๅฏไปฅๅๆถๆๅคไธชๅ้่ๅ่ฏฅ้้ๅ้ๆฐๆฎ๏ผไนๅฏไปฅๆๅคไธชๆฅๆถ่ๆฅๆถๆฐๆฎ
4. **watch** ้้: ไธๅฏนๅคๅ้๏ผๅณ่ฏฅ้้ๅช่ฝๆไธไธชๅ้่ๅ่ฏฅ้้ๅ้ๆฐๆฎ๏ผไฝๅฏไปฅๆๅคไธชๆฅๆถ่ๆฅๆถๆฐๆฎ

ๆผ็คบ watch ้้ไฝฟ็จ๏ผ

```rust,ignore
use tokio::sync::watch;

let (tx, mut rx) = watch::channel("hello");

tokio::spawn(async move {
    while rx.changed().await.is_ok() {
        println!("received = {:?}", *rx.borrow());
    }
});

tx.send("world")?;
```

ๆผ็คบ watch ้้ไฝฟ็จ๏ผ

```rust,ignore
use tokio::sync::broadcast;

#[tokio::main]
async fn main() {
    let (tx, mut rx1) = broadcast::channel(16);
    let mut rx2 = tx.subscribe();

    tokio::spawn(async move {
        assert_eq!(rx1.recv().await.unwrap(), 10);
        assert_eq!(rx1.recv().await.unwrap(), 20);
    });

    tokio::spawn(async move {
        assert_eq!(rx2.recv().await.unwrap(), 10);
        assert_eq!(rx2.recv().await.unwrap(), 20);
    });

    tx.send(10).unwrap();
    tx.send(20).unwrap();
}
```


ๅผๆญฅไปปๅก็ๅนถๅ็ปๅธธ้่ฆๆฃๆตไปปๅกไน้ด็็ถๆ๏ผๅๅง็่งฃๅณๆนๅผๆฏ็ดๆฅ็จไปฃ็ ๅป่ฝฎ่ฏขๅคๆญ็ถๆๆฏๅฆ่พพๆใไฝๅจๅผๆญฅ
็ผ็จ่ฟ็จไธญ๏ผ่ฟ็ฑป็ถๆๆฃๆต็้ๆฑ้ๅธธๆฎ้๏ผๅ ๆญคๅผๆญฅๆกๆถไผๆไพไธไบๅ็ฝฎๅจๆกๆถไธญ็ๅๆญฅๅ่ฏญใๅๆญฅๅ่ฏญๅฐ่ฃไบ
ๅ็ง็ถๆๅคๆญใ็ถๆ็ญๅพ็่ฝฎ่ฏขๆไฝ๏ผ่ฟไฝฟๅพ็ผๅไปปๅก็ถๆๅๆญฅ็ไปฃ็ ๅๅพๆดๅ ็ฎๅ็ดๆฅใ

้ๅธธๆฅ่ฏด๏ผๆไปฅไธๅ ็งๅบๆฌ็ๅๆญฅๅ่ฏญ๏ผ่ฟไบ้ฝๆฏ tokio ๅฐ่ฃ Rust ๅๆญฅๅทฅๅทๆๆไพ็๏ผ

1. **Mutex**: ไบๆฅ้๏ผไปปๅก่ฆๆง่กๆไบๆไฝๆถ๏ผๅฟ้กปๅ็ณ่ฏท้๏ผๅชๆ็ณ่ฏทๅฐ้ไนๅๆ่ฝๆง่กๆไฝ๏ผๅฆๅๅฐฑ็ญๅพ
2. **RwLock**: ่ฏปๅ้๏ผ็ฑปไผผไบไบๆฅ้๏ผไฝ็ฒๅบฆๆด็ป๏ผๅบๅ่ฏปๆไฝๅๅๆไฝ๏ผๅฏไปฅๅๆถๅญๅจๅคไธช่ฏปๆไฝ๏ผไฝๅๆไฝๅฟ้กป็ฌๅ ้่ตๆบ
3. **Notify**: ไปปๅก้็ฅ๏ผ็จไบๅค้ๆญฃๅจ็ญๅพ็ไปปๅก๏ผไฝฟๅถ่ฟๅฅๅฐฑ็ปชๆ็ญๅพ่ฐๅบฆ
4. **Barrier**: ๅฑ้๏ผๅคไธชไปปๅกๅจๆไธชๅฑ้ๅคไบ็ธ็ญๅพ๏ผๅชๆ่ฟไบไปปๅก้ฝ่พพๅฐไบ้ฃไธชๅฑ้็น๏ผ่ฟไบไปปๅกๆ้ฝ็ปง็ปญๅไธๆง่ก
5. **Semaphore**: ไฟกๅท้(ไฟกๅท็ฏ)๏ผ้ๅถๅๆถๆง่ก็ไปปๅกๆฐ้๏ผไพๅฆ้ๅถๆๅคๅชๆ20ไธช็บฟ็จ(ๆtokio็ๅผๆญฅไปปๅก)ๅๆถๆง่ก



## โก Tasks Scheduler ไปปๅก่ฐๅบฆ
- [Asynchronous Programming in Rust - Zack Jorquera](https://www.section.io/engineering-education/asynchronous-programming-in-rust/)
- [่ตฐ่ฟ Tokio ็ๅผๆญฅไธ็ - Lipi](https://zhuanlan.zhihu.com/p/346707572)
- [Async in Rust](https://night-cruise.github.io/async-rust/)
- [Writing an OS in Rust - Async/Await](https://os.phil-opp.com/async-await/)
- [Green Threads Explained in 200 Lines of Rust](https://cfsamson.gitbook.io/green-threads-explained-in-200-lines-of-rust/)
- [The Node Experiment - Exploring Async Basics with Rust](https://cfsamson.github.io/book-exploring-async-basics/introduction.html)


่ฐๅบฆๆฏๅผๆญฅๅคไปปๅกๅค็ๆๆ ธๅฟ็ๅๅฎน๏ผTokio ้่ฟ TaskใCellใWakerใSchedulerใJoinHandler ็ญ็ปไปถ
ๆฅๅฎ็ฐ็ฌ็น็ๅผๆญฅ่ฐๅบฆใ

ไปฅไธ Diagram of Async Architectures ๆไบๆง๏ผasync-std ็ฐๅจๅทฒ็ปๅบไบ smol๏ผๅพ็ๆฅ่ช redditใ

![reddit: Diagram of Async Architectures](https://p5.itc.cn/q_70/images03/20210329/870bc20fd065466e95180738bbaaddd7.png)

Rust Tokio ๅผๆญฅ่ฐ็จ็ไธไธช็คบๆๅพ๏ผๅๅพๆฅ่ชไบ Irynaใ

![https://twitter.com/_lrlna/status/1164605542897090561?s=20](https://pic1.zhimg.com/80/v2-97d9924fbb3d8629c06854020f53a394_1440w.webp)

ๅผๆญฅไปปๅกๅค็ๆต็จๆ ธๅฟๆไธคไธช๏ผ

- ็บฟ็จๆฑ ๅ่ฝฎ่ฏขๅ้ๆบๅถ
- ไบไปถๆ ๅ่ฝฎ่ฏขๆบๅถ

ๅฏไปฅ็ฎๅ็่งฃไธบ๏ผๅ้ขๆไธๅ ็บฟ็จ๏ผๆไบคไธไธช Future ๅฐ้ๅๅ๏ผ่ฐๅบฆๅจๅ้็บฟ็จๆฑ ไธญ็็บฟ็จๆฅๆง่กใๅ้็บฟ็จ
ๅชๅๅ้ๅทฅไฝ๏ผๅๆถ่ฝฎ่ฏข Future๏ผๆฃๆฅ็้ๅ็็บฟ็จๆง่กๅฎๆๆฒกๆใ

- (1) ้ฆๅ๏ผๅฐ Future ๆไบคๅฐไปปๅกๆง่ก้ๅใๆง่กๅๅฐๆฏไธไธช event loop ๅ็บฟ็จๆฑ ใ
- (2) Future ๆไบคไนๅ๏ผไผๅ้็บฟ็จๆฅ่ฝฎ่ฏขๆง่ก poll ไปฅๆจๅจไปปๅกๅๅฑ๏ผไฝฟ็จไปปๅกๆง่ก้ๅไธๆญ่ขซๆง่ก๏ผ
- (3) ๅฆๆ poll() ่ฟๅ็็ถๆๆฏ Ready๏ผๅฐฑๆ่ฟๅๅผ่ฟๅ็ปๅจ await ไฝ็ฝฎ็ญๅพ็็บฟ็จใ
- (4) ๅฆๆ poll() ่ฟๅ็็ถๆๆฏ Pending๏ผๅๅจไบไปถๅพช็ฏ้้ข็ไบไปถๆ ไธๅ่ฎฐๅฝ๏ผ็บฟ็จ็ปง็ปญๆง่ก Future๏ผไธป poll ็บฟ็จ็ฆปๅผใ
- (5) ็บฟ็จๅจๆง่ก Future ไนๅ๏ผๆง่กๅฎๆใๅฐฑ้่ฟ waker ๆไบคๅฐไบไปถๆ ๏ผๅ่ฏๆฌ็บฟ็จๆง่กๅฎๆใ
- (6) ไบไปถๅพช็ฏๅฐ่ฟไธชไบไปถ็ๆถๅ๏ผๅ็ฐ Future ๆง่กๅฎๆ๏ผๅฐฑๅ่ฐ Waker๏ผๆ Future ้ๆฐๆจ้ๅฐๆง่ก้ๅใ

็ปๅ็กฌไปถไฝ็ณปใๆไฝ็ณป็ปๆฅ็ไธไธชๆฐๆฎ่ฏปๅ็ๆไฝ๏ผไปฅไธๆฏ็ฎๅๅๅ็ๆต็จๅพ๏ผ

![Interrupts, Firmware and I/O](https://cfsamson.github.io/book-exploring-async-basics/images/AsyncBasicsSimplified.png)

ๅพ็ๆฅๆบ๏ผThe Node Experiment - Exploring Async Basics with Rust

- ้ฆๅ๏ผๆไฝ็ณป็ป่ฟ่ก็จๅบ๏ผๅๅปบไธไธช่ฟ็จ๏ผๅนถไธ่ณๅฐๅๅปบไธไธช็บฟ็จ่ฟ่ก Rust ไปฃ็ ๏ผ
- Rust ไปฃ็ ไบง็่ฏปๅ็ฝๅกๆฐๆฎ็ๆไฝ่ฏทๆฑ๏ผๅนถๆไบค็ปๆไฝ็ณป็ป๏ผ
- ๆไฝ็ณป็ปๆ นๆฎ่ฏทๆฑ๏ผๆพๅฐ็ฝๅก้ฉฑๅจ็จๅบ๏ผ้ฉฑๅจ็จๅบๆ็คบ CPU ่ฏปๅ็ฝๅกๅพฎๆงๅถๅจไธญ็ๅๅญๆฐๆฎ๏ผ
- ็ฐไปฃ่ฎก็ฎๆบไธญไฝฟ็จ็ดๆฅๅๅญ่ฎฟ้ฎๆงๅถๅจ DMAC๏ผๅฎๅฏไปฅไธ้่ฟ CPU ็ดๆฅๅจๅค้จ่ฎพๅค้ดไผ ้ๅๅญไธญ็ๆฐๆฎ๏ผ
- ๅฝๅๅญๆฐๆฎๅๅคๅฅฝๅ๏ผ็ฝๅก่งฆๅไธไธชไธญๆญไฟกๅท๏ผๅ่ฏ CPU ไธๅๅทฒ็ปๅฐฑ็ปช๏ผ
- ๆไฝ็ณป็ปๆถๅฐ CPU ็ไธญๆญไฟกๆฏ๏ผๅนถ็ปง็ปญๆง่ก้ฉฑๅจ็จๅบๅ็ปง็ปญๆต็จ๏ผๅนถ็ปง็ปญๆง่ก Rust ็จๅบ่ฏปๅๆฐๆฎ๏ผ

่ฟๆดไธชๆฏ็ธๅฝๅคๆ่ฟ็จ๏ผไปฅไธๅชๆฏไธบไบ็ๆธ็จๅบ็่ฟ่ก้ป่พ่ๅคงๅคง็ฎๅๅ็ๆญฅ้ชคใ

Rust ๅผๆญฅๆบๅถๅฎ็ฐๅบไบ่ฝฎ่ฏข๏ผPolling๏ผไธไธชๅผๆญฅไปปๅกไผๆไธ็ง้ถๆฎตๆง็ถๆ๏ผ

- **The Poll phase** ่ฝฎ่ฏข้ถๆฎตไผๆฅ่ฏข Future ๅฏน่ฑก็็ถๆ๏ผๆฃๆฅๅฎๆฏๅฆๅทฒ็ปๅคไบๅฎๆ็ถๆ๏ผๆฅๅณๅฎไธไธๆญฅๆไฝใ
- **The Wait phase** ไบไปถๆฅๆบ้ถๆฎต๏ผ่ฎฐๅฝไธไธช Future ๅจ็ญๅพ็ไบไปถๅ็๏ผๅนถ็กฎไฟๅฝไบไปถๅๅคๅฐฑ็ปชๆถ๏ผๅค้ๅฎใ
- **The Wake phase** ๅค้้ถๆฎต๏ผไบไปถๅ็ๅ๏ผๅค้ๅฏนๅบ Future ่ฟ่กๅๅบๅค็๏ผๅนถไธๆง่กๅจ่ฟ้่ฆ็ปงๆฟ่ฝฎ่ฏข็ดๅฐๅฎๅฎๆไปปๅกใ

่ฟไธไธช้ถๆฎตๅฏไปฅๅฏนๅบ็ๅทฅไฝๅฏไปฅๆฝ่ฑกไธบไธไธชๅฏน่ฑก๏ผExecutorใReactor ๅ Walkerใ

Future ๅธธ็ไฝๆฏๆง่กๅจ็ไธ้จๅ๏ผๅฎๅ่ฃ้่ฆๅผๆญฅๅค็็ๆไฝ๏ผ้่ฟ async ๅณ้ฎๅญๅฎไน็ๅผๆญฅไปฃ็ ๅๆๆฅๅฃ
ๅฎไน็ๆนๆณ่ฝฌๆขไธบๅธฆๆๅณ่็่พๅบ็ฑปๅ็ `Future<Output = T>`๏ผๅณๆฏ IntoFuture ๆฅๅฃ็ฑปๅ๏ผ็ถๅๆง่กๅจ
ๅๅฐๅฎๅ่ฃๆ Taskใ่ฝฎ่ฏข Future ๆถ่ฟๅ็ไธค็ง็ถๆๅฐฑๆฏๅค็ๆต็จ็ๅๆตๆกไปถใ

- **Poll::Pending** if the future is not ready yet
- **Poll::Ready(val)** with the result val of this future if it finished successfully.

```rust,ignore
pub trait Future {
    type Output;

    fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output>;
}

pub trait IntoFuture {
    type Output;
    type IntoFuture: Future<Output = Self::Output>;

    fn into_future(self) -> Self::IntoFuture;
}
```




# ๐ก๐  Fearless Concurrency
- https://doc.rust-lang.org/book/ch16-00-concurrency.html
- https://blog.rust-lang.org/2015/04/10/Fearless-Concurrency.html
- https://doc.rust-lang.org/stable/std/sync/index.html
- https://doc.rust-lang.org/stable/std/thread/index.html
- ใ่ฏใRust๏ผๆ ็ๅนถๅ https://www.cnblogs.com/praying/p/13912955.html
- C++ Concurrency in Action by Anthony Williams https://2lib.org/book/3688262/d57395?id=3688262
- Rust ็ผ็จไน้ ๅผ ๆฑไธ https://2lib.org/book/5539891/6f3df0
- ๆทฑๅฅๆตๅบ Rust ่้ฟๆฅ https://2lib.org/book/5063683/cb5839
- Programming Rust: Fast, Safe Systems Development https://2lib.org/book/3400043/791885

ๆญคๅฐ่ไธป่ฆๅๅฎน๏ผ

- Using Threads to Run Code Simultaneously
- Using Message Passing to Transfer Data Between Threads
- Shared-State Concurrency
- Extensible Concurrency with the Sync and Send Traits

Rust ๅท็งฐๆ ๆ็ๆง็ๅนถๅ Fearless Concurrency๏ผ็ฉถ็ซๆๅฉๅฎณๅข๏ผ

Rust ้กน็ฎๆจๅจ่งฃๅณ่ฟไธคไธชๆฃๆ็้ฎ้ข๏ผ

- ๅฆไฝ่ฟ่กๅฎๅจ็็ณป็ป็ผ็จ๏ผ
- ๅฆไฝไฝฟๅพๅนถๅๆดๅฎนๆ๏ผ

ๆๅค็ๆฏๅฎไปฌ่งฃๅณๆนๆกๆฏไธ่ด็๏ผๅๅญๅฎๅจๆผๆดๅๅนถๅๆผๆด้ๅธธ้ฝๅฏไปฅๅฝ็ปไบ่ฎฟ้ฎไบไธๅบ่ฏฅ่ฎฟ้ฎ็ๆฐๆฎใRust ็
็งๅฏๆญฆๅจๆฏๆๆๆๆบๅถ๏ผ่ฟๆฏ็ณป็ป็จๅบๅ่ฏๅพ้ตๅพช็ไธ็ง่ฎฟ้ฎๆงๅถๅๅ๏ผ่ Rust ็ผ่ฏๅจๅฐไธบไฝ ้ๆๆฃๆฅใ

ๅฏนไบๅๅญๅฎๅจๆง๏ผ่ฟๆๅณ็ไฝ ๅฏไปฅๅจๆฒกๆๅๅพๆถ้ๅจ็ๆๅตไธ็ผ็จ๏ผ่ไธไธ้่ฆๅฎณๆๆฎต้่ฏฏ๏ผๅ ไธบ Rust ๅฐไผๆๆไฝ ็้่ฏฏใ

ๅฏนไบๅนถๅ๏ผ่ฟๆๅณ็ไฝ ๅฏไปฅ้ๆฉๅ็งๅๆ ท็่ๅผ๏ผๆถๆฏไผ ้๏ผๅฑไบซ็ถๆ๏ผๆ ้๏ผ็บฏๅฝๆฐๅผ๏ผ๏ผ่ Rust ๅฐไผๅธฎๅฉไฝ ้ฟๅๅธธ่ง็้่ฏฏใ

ๅค็บฟ็จ้ดๅฑไบซๆฐๆฎๆถๅฏ่ฝไผๅบๅพๅค้ฎ้ข๏ผๆๅธธ่ง็ไธค็งไธป่ฆ้ฎ้ขๆฏ๏ผ

- `Race Conditions` ็ซๆๆกไปถ๏ผๅธธๅ็ไบๅคไธช็บฟ็จไปฅไธไธ่ด็้กบๅบ่ฎฟ้ฎ/ไฟฎๆนๅฑไบซๆฐๆฎ๏ผ่ฟไผ็ ดๅๆฐๆฎไธ่ดๆงใ
- `Deadlocks` ๆญป้ๅ็ไบๅคไธช็บฟ็จไบ็ธ็ญๅพๅฏนๆน้ๆพ่ตๆบๅฏผ่ดๆ ้ๆ่ตทใๆดป้ livelock ็ฑปไผผ๏ผไฝๆไธๅฎๅ ็่งฃๅผ๏ผ่ๆญป้ๆ ่งฃใ

ๆญป้ไบง็็ๅฟ่ฆๆกไปถ๏ผ

- **ไบๆฅ** mutual exclusion๏ผ็ณป็ปๅญๅจ็ไธด็่ตๆบ๏ผ
- **ๅ ๆๅนถ็ญๅพ** hold and wait๏ผๅทฒ็ปๅพๅฐๆไบ่ตๆบ็่ฟ็จ่ฟๅฏไปฅ็ณ่ฏทๅถไปๆฐ่ตๆบ๏ผ
- **ไธๅฏๅฅๅคบ** no preemption๏ผๅทฒ็ปๅ้็่ตๆบๅจๅถๅฎฟไธปๆฒกๆ้ๆพไนๅไธๅ่ฎธ่ขซๅฅๅคบ๏ผ
- **ๅพช็ฏ็ญๅพ** circular waiting๏ผ็ณป็ปไธญๅญๅจๅคไธช่ฟ็จๅฝขๆ็ๅฐ้ญ็่ฟ็จ็ญๅพ้พ๏ผๆฏไธช่ฟ็จ้ฝๅจ็ญๅพๅฎ็ไธไธไธช่ฟ็จๆๅ ๆ็่ตๆบ๏ผ

Rust ็ๆๆๆๆบๅถๅฏไปฅๅจ็ผ่ฏๆๅฐฑๅค็ๅฅฝ็ฎๅ็็บฟ็จๅฎๅจ้ฎ้ข๏ผๅฆๆ้ญๅๅ้่ฆๅ็จๅค้จไฝ็จไฝ็จๅ็ๅ้๏ผ
ๅฏไปฅ้ๅไฝฟ็จ `move` ๅณ้ฎๅญ๏ผๅฐๅ้ๆๆๆ็งปๅจๅฐ้ญๅๅ๏ผ่ๅ้ไนๅฐฑไธๅๅ่ฎธๅจๅๆฅ็ไฝ็จๅไธ่ฎฟ้ฎใ


ๅนถๅใๅนถ่ก๏ผไธๅผๆญฅๆฏๅฎนๆๆททๆท็ๆฆๅฟตใ

ๅผๆญฅ Asynchronous ไธๅๆญฅ Synchronous ๆฏๅฏน็ซๆฆๅฟต๏ผๆฏๆ่ฟฐไปฃ็ ๆง่ก็ๆนๅผใๅผๆญฅๅฏไปฅ่ฎฉ้่ฆ็ญๅพ็ไปฃ็ 
่ฟๅฅๆๅ็ถๆ๏ผ็ญๅพไธญๆญไฟกๅทๆฅๅค้ใๅๆถ็ปง็ปญๆง่กๅ็ปญ็ไปฃ็ ๏ผ่ๅๆญฅๅไธไผ่ฟๆ ท๏ผๅๆญฅไผไธ่ตท็ญๅพๆถ้ดๆถ่ๅคง
็ไปปๅกๅฎๆ่ฟๅๅๆ็ปง็ปญๆง่กใ

ๅผๆญฅ๏ผๅจๅ็บฟ็จไธๅฐฑๅฏไปฅๅฎ็ฐ๏ผ่ๅนถ่ก Parallel ๅ้่ฆๅค็บฟ็จ๏ผๅณๅจๅคๆ ธ่ฏ CPU ไธๆๆๆๅใ่ฟ็จๆฏๆไฝ
็ณป็ป่ฟ่กๅๅญๆ็กฌไปถ่ตๆบๅ้็ๅบๆฌๅไฝ๏ผ็บฟ็จๅๆฏๆไฝ็ณป็ป็่ฐๅบฆ็จๅบๆง่ก็ๅบๆฌๅไฝใ

ๅนถ่กๆฏๅๆถ่ฟ่กไปฃ็  Run Code Simultaneously๏ผๅนถๅ็ฑปไผผๅนถ่ก๏ผๅนถๅๅณ้ฎๆฏไฝ ๆๅค็ๅคไธชไปปๅก็่ฝๅ๏ผ
ไธไธๅฎ่ฆๅๆถใๅนถ่ก็ๅณ้ฎๆฏไฝ ๆๅๆถๅค็ๅคไธชไปปๅก็่ฝๅใๆไปฅๆ่ฎคไธบๅฎไปฌๆๅณ้ฎ็็นๅฐฑๆฏ๏ผๆฏๅฆๆฏใๅๆถใใ

็บฟ็จๅๆญฅ Thread Synchronization ่ฟไธๆฆๅฟตๅฐๅๆญฅๆฉๅฑๅฐๅค็บฟ็จ็จๅบไธญๆฅ๏ผๅฎ็ฐ็บฟ็จๅๆญฅ็ไปฃ็ ๅฐฑๅทๆ
ๅฏนๅไธๆฐๆฎ่ฎฟ้ฎ็ๅๆญฅ่ฎฟ้ฎ๏ผๅทๆๅค็บฟ็จๅฎๅจๆงใ

ไธไธชๅฝข่ฑก็ๆฏๅป๏ผ

- ไฝ ๅ้ฅญๅๅฐไธๅ๏ผ็ต่ฏๆฅไบ๏ผไฝ ไธ็ดๅฐๅๅฎไบไปฅๅๆๅปๆฅ๏ผ่ฟๅฐฑ่ฏดๆไฝ ไธๆฏๆๅนถๅไนไธๆฏๆๅนถ่กใ
- ไฝ ๅ้ฅญๅๅฐไธๅ๏ผ็ต่ฏๆฅไบ๏ผไฝ ๅไบไธๆฅๆฅไบ็ต่ฏ๏ผๆฅๅฎๅ็ปง็ปญๅ้ฅญ๏ผ่ฟ่ฏดๆไฝ ๆฏๆๅนถๅใ
- ไฝ ๅ้ฅญๅๅฐไธๅ๏ผ็ต่ฏๆฅไบ๏ผไฝ ไธ่พนๆ็ต่ฏไธ่พนๅ้ฅญ๏ผ่ฟ่ฏดๆไฝ ๆฏๆๅนถ่กใ

Erlang ไน็ถ Joe Armstrong ็จไธๅผ  5 ๅฒๅฐๅญฉ้ฝ่ฝ็ๆ็ๅๅกๆบๅทฅไฝๅพ่งฃ้ไบๅนถๅไธๅนถ่ก็ๅบๅซ๏ผ

![Erlang](https://pic4.zhimg.com/80/v2-674f0d37fca4fac1bd2df28a2b78e633_1440w.jpg)

- ๅนถๅ๏ผไธคไธช้ๅไบคๆฟไฝฟ็จไธๅฐๅๅกๆบ๏ผๅณไธไธช็บฟ็จๅค็ๅคไธชไปปๅก๏ผๅฝ็ถๅฎ็ฐๆนๅผไธไป้ไบๅค็บฟ็จใๅค่ฟ็จๆนๅผ๏ผ
- ๅนถ่ก๏ผไธคไธช้ๅๅๆถไฝฟ็จไธคๅฐๅๅกๆบ๏ผๅณๅคไธช็บฟ็จๅค็ๅคไธชไปปๅก๏ผ
- ไธฒ่ก๏ผไธไธชไปปๅก้ๅไฝฟ็จไธๅฐๅๅกๆบ๏ผๅคไธชไปปๅก้ๅๅฐฑ้่ฆๆ้ค๏ผๅณไธไธช็บฟ็จๅค็ไธไธชไปปๅก๏ผ

ๅจๅนถๅๆจกๅไธ้ข๏ผRust ๅฏไปฅๅ Go ไธๆ ทไฝฟ็จ Communicating Sequential Processes (CSP) ๆจกๅใ
่ฏญๆณไธ Rust ๅ Go ้ๅธธ็ฑปไผผ๏ผ้ฝๆฏ้่ฟ Channel ๆฅๅฎ็ฐ่ชๅทฑ็ๆจกๅ๏ผไฝๆฏๅทไฝ็่กไธบๅดๆไบ็ปๅพฎ็ๅทฎๅซใ

ๅจ Erlang ไธญ็ Actor Model (AM) ๅนถๅๆจกๅ๏ผๆฏไธช่ฟ็จ้ฝๆฏไธไธช็ฌ็ซ็่ง่ฒ๏ผๆฏไธช่ง่ฒๆฅๆไธไธช็ฌๅฑ็
ๅฝๅ้ฎ็ฎฑใActors ไน้ด้่ฟๅผๆญฅ็ๅพๅฏนๆน้ฎ็ฎฑๆ้ไฟกๆฏๆฅ่ฟ่ก้ไฟกใ

ๅจ CSP ๅนถๅๆจกๅ๏ผ่ฟ็จไธ่ฟ็จไน้ด้่ฟไธไธช็ฎก้ๆฅ่ฟ่ก้ไฟกใๆถๆฏๅฏไปฅ้กบๅบ็ๅกซๅฅ่ฟไธช็ฎก้๏ผไนๅฏไปฅ่ขซ้ๆฌก็
ไป็ฎก้ๅๅบ๏ผๆณจๆ่ฟไธช็ฎก้ๅนถไธๅฝๅฑไบๆไธช่ฟ็จใไผ ็ปไธ๏ผCSP ็ฎก้ๆฒกๆ็ผๅญ๏ผๅกซๅฅไธๅๅบๆฏๅๆญฅ็๏ผ็ฑๆญคไนๅฐฑ
ไฟ่ฏไบๆถๆฏไธไผๅจ้ไฟก็่ฟ็จไธญไธขๅคฑใGo ้ขๅค็ๆฏๆไบๅธฆ buffer ็็ฎก้๏ผ็จไบๆไพไธ AM ๆจกๅ็ฑปไผผ็ๅผๆญฅ้ไฟกใ

Rust ๅค็บฟ็จ็ผ็จ้่ฆๅญฆไน ไธคไธชๆ ๅๅบ๏ผthread ๅ sync ๅๆญฅๆ ๅๅบ๏ผๆไพไบๅคง้ๅจ็บฟ็จๅๆญฅไธญ้่ฆไฝฟ็จ็ๅฏน่ฑก๏ผ
ๅนถไธๅๅซไปฅไธไธคไธชๅญๆจกๅ๏ผ

- atomic ๅๅญ็ฑปๆจกๅใ
- mpsc  ้ๅ้ไฟกๆจกๅ๏ผMulti-producer, single-consumer๏ผๆฏๅๅฅๅๅบ้ๅ FIFOใ


Rust ๅ่ฎธๅญๅจๅจๅฑๅ้๏ผไฝฟ็จ static ๅณ้ฎๅญไฟฎ้ฅฐ็ๅ้ๅฐฑๆฏๅจๅฑๅ้ใๅจๅฑๅ้ๆไธไธช็น็น๏ผๅฆๆ่ฆไฟฎๆน
ๅจๅฑๅ้๏ผๅฟ้กปไฝฟ็จ unsafe ๅณ้ฎๅญใ

่ฟไธช่งๅฎๆพ็ถๆฏๆๅฉไบ็บฟ็จๅฎๅจ็ใๅฆๆๅ่ฎธไปปไฝๅฝๆฐๅฏไปฅ้ไพฟ่ฏปๅๅจๅฑๅ้็่ฏ๏ผ็บฟ็จๅฎๅจๅฐฑๆ ไป่ฐ่ตทไบใๅชๆ
ไธ็จ mut ไฟฎ้ฅฐ็ๅจๅฑๅ้ๆๆฏๅฎๅจ็๏ผๅ ไธบๅฎๅช่ฝ่ขซ่ฏปๅ๏ผไธ่ฝ่ขซไฟฎๆนใ

็บฟ็จๅฑ้จ๏ผThread Local๏ผ็ๆๆๆฏ๏ผไปฃ็ ไธญๅฃฐๆ็ไธไธชๅ้ๅจๆฏไธไธช็บฟ็จไธญๅๅซๆ่ชๅทฑ็ฌ็ซ็ๅญๅจๅฐๅ๏ผๅจ
ไธๅ็็บฟ็จไธญๆฏไธๅ็ๅ้๏ผไบไธๅนฒๆฐ๏ผๆฏ็บฟ็จ้็ฆป็๏ผๅ ๆญคๅฏนๅฎ็่ฏปๅๆ ้กป่่็บฟ็จๅฎๅจ้ฎ้ขใ

Rust ็บฟ็จ็ฌ็ซๅญๅจๆไธค็งไฝฟ็จๆนๅผ๏ผ

- #[thread_local] ่ฟ็จๅฎ๏ผๅฎ้ชๅ่ฝ๏ผnightly ็ๆฌไธญๅผๅฏ #![feature๏ผthread_local]ใ
- thread_local! ๅฎๆฅๅฎ็ฐใ


```rust
use std::cell::RefCell;
thread_local! {
    pub static FOO: RefCell<u32> = RefCell::new(1);

    #[allow(unused)]
    static BAR: RefCell<f32> = RefCell::new(1.0);
}
```


## โก ๅบๆฌๅค็บฟ็จ็จๅบ
- https://doc.rust-lang.org/book/ch16-01-threads.html
- https://doc.rust-lang.org/book/ch20-00-final-project-a-web-server.html
- https://doc.rust-lang.org/stable/std/thread/fn.park.html
- https://doc.rust-lang.org/stable/std/thread/struct.Builder.html

ๅๅถไบ็กฌไปถๆๆฏ๏ผ่ฏ็็ต่ทฏๅฐบๅฏธๅจ 10nm ๆฐดๅนณๆฅ่ฟๅๅญๅฐบๅฏธ๏ผๅๆ ธๆง่ฝ่ถๆฅ่ถๆฅ่ฟ็ถ้ข๏ผ็ฐไปฃ CPU ๆฎ้ๆฏๅคๆ ธๅฟ๏ผๅจ็กฌไปถไธๅบๆฌๅจๆฏๅค็บฟ็จ่ฟ่ก็ฏๅขใ

็บฟ็จ `Thread` ๆฏๆไฝ็ณป็ป่ฝๅค่ฟ่ก่ฐๅบฆ็ๆๅฐๅไฝ๏ผๅฎๆฏ่ฟ็จ `Process` ไธญ็ๅฎ้่ฟไฝๅไฝ๏ผๆฏไธช่ฟ็จ่ณๅฐๅๅซไธไธช็บฟ็จใ้ไฟๅฐ็่งฃ๏ผ่ฟ็จๅฐฑๆฏๆไฝ็ณป็ป่ฟ่ก็็จๅบ๏ผๅทไฝไปฃ็ ็่ฟ่กๅๆฏ็บฟ็จๆง่ก็ใ

ไธๅ่ฏญ่จๅฎ็ฐ็ๅค็บฟ็จๆนๅผไธๅ๏ผๅคงๅคๆฐๆไฝ็ณป็ปๆไพ API ๆฅๅๅปบ็บฟ็จ๏ผ้่ฟ API ๆนๅผๅๅปบ็็งฐไธบ 1:1 ็บฟ็จๆจกๅ๏ผๅฏไปฅ็งฐไธบ native-threadingใ

่ Rust ๅ่ฎธๅค่ฏญ่จไธๆ ท๏ผไนๅฎ็ฐไบ่ชๅทฑ็็บฟ็จๆจกๅ๏ผ่ฏญ่จๅฑ้ขไธ็ๅฎ็ฐ็งฐไธบ green-threading ๆจกๅ๏ผๅณ M:N ็บฟ็จๆจกๅ๏ผM ๅ N ไธไธๅฎ็ธ็ญ๏ผๅณๅจ N ไธชๆไฝ็ณป็ป็บฟ็จไธ่ฟ่ก M ไธช็ปฟ่ฒ็บฟ็จใ

ไธบไบ้ฟๅๅผๅฅ็ฌฌไธๆน็็บฟ็จๅบ๏ผๆไบ็ผ็จ่ฏญ่จๅผๅฅไบๅ็จ Coroutine ็ๆฆๅฟต๏ผๅจ่ฏญๆณๅฑ้ขๅฎ็ฐไบ็บค็จ Fiber ็ๅ่ฝใ็บค็จๅๅ็จๆ่ฟฐไบ็ธๅ็ๆฆๅฟต๏ผไปไปฌ้ฝไธๆฏ็ๆญฃๆไนไธ็ๅนถ่กใไฝๆฏ๏ผๅฎไปฌ่ฝ่ฎฉไฝ ๆดๅฎนๆๅฐๅค็ๅผๆญฅI/O็้ฎ้ขใ

Erlang ้็จ M:N ๆจกๅๅพๅฅฝ็่งฃๅณไบ Green Thread ๅญๅจ็้ฎ้ข๏ผๆฏไธช native thread ้ฝๆไธไธช่ชๅทฑ็่ฐๅบฆๅจใ่ไธ๏ผErlang ้็จ shared nothing concurrency๏ผๅฏไปฅๆ Native Thread ๅญๅจ็้ฎ้ข้ฝๆไน่ๅใ

ๅทไฝไฝฟ็จไปไนๆจกๅๆฏไธชๅนณ่กกๅ่้ฎ้ขใ

ไธไธช็ฌ่ฏ๏ผ

    ้ข่ฏๅฎ๏ผไฝ ็ฅ้ๅ็จๅ๏ผ
    ไฝ ๏ผ่ฎขๆบ็ฅจ็้ฃไธชๅ๏ผๆๅธธ็จใ
    ้ข่ฏๅฎ๏ผ่ก๏ผไฝ ๅๅๅปๅง๏ผ็ญ็ต่ฏ้็ฅใ


ไปฅไธ็ปๅ้ญๅๆผ็คบๅค็บฟ็จ๏ผ

```rust,ignore
#![allow(unused)]

use std::thread;
use std::time::Duration;

fn main() {
    let handle = thread::spawn(|| {
        for i in 1..10 {
            println!("spawned thread: number {}!", i);
            thread::sleep(Duration::from_millis(100));
        }
    });

    for i in 1..5 {
        println!("main thread: number {}!", i);
        thread::sleep(Duration::from_millis(10));
    }
    
    // wait thread to finishe
    // handle.join().unwrap();
}
```

็จๅบ่พๅบๅฏไปฅ็ๅฐ๏ผspawn ไบง็็็บฟ็จๅนถๆฒกๆๅฎๅจ่ฟ่ก๏ผๅ ไธบๅญ็บฟ็จ็ sleep ๆถ้ดๆด้ฟ๏ผไธป็บฟ็จ sleep ๆถ้ดๆด็ญ่ๆๅๅฎๆ็ปๆ่ฟ่ก๏ผ

    main thread: number 1!
    spawned thread: number 1!
    main thread: number 2!
    main thread: number 3!
    main thread: number 4!

ๅๅปบ็บฟ็จๆถ๏ผthread::spawn ไผ่ฟๅไธไธช `JoinHandle<()>` ๅฏน่ฑก๏ผๅๆฌๅท่กจ็คบไธไธชๆ ๅๆฐ็ๅฝๆฐ็ฑปๅใๅช้่ฆๆง่ก่ฟไธชๅฅๆๅฏน่ฑก็ `join()` ๆนๆณ้ปๅกไธป็บฟ็จๅฐฑๅฏไปฅ็ญๅพๅญ็บฟ็จๅฎๆๆ็ปๆ็จๅบใ 

ๅฆๆ้ญๅๅ้่ฆๅ็จๅค้จไฝ็จไฝ็จๅ็ๅ้๏ผๅฏไปฅ็ดๆฅไฝฟ็จ move Closures ็งปๅจๆๆๆ๏ผ

```rust,ignore
use std::thread;

fn main() {
    let v = vec![1, 2, 3];

    let handle = thread::spawn(move || {
        println!("Here's a vector: {:?}", v);
    });

    handle.join().unwrap();
    // drop(v); // oh no!
}
```

ไธ้ข็ไปฃ็ ไธญ๏ผๅ้ v ไผ่ขซ้ญๅๅ็จ๏ผไฝๆฏ็จๅบไธญๅญ็บฟ็จไธญๅฏน v ็ๅ็จๅฏ่ฝไผๆๆด้ฟ็็ๅฝๅจๆใ่ไธป็บฟ็จไธญ๏ผๅฎไผๅจไธปๅฝๆฐ็ปๆๆถ่ขซๅๆถ๏ผ่ฟๅฐฑไบง็ๅฒ็ชไบ๏ผๆไปฅ้่ฆไฝฟ็จ move ๅณ้ฎๅญๆฅๅผบๅถๆๆๆๆๆใ

ไนๅฏไปฅไฝฟ็จ `Builder` ็บฟ็จๅทฅๅๅฏน่ฑกๅๅปบ็บฟ็จ๏ผ่ฟๆ ทๅฏไปฅไธบๅญ็บฟ็จๆๅฎ่ฟ็จๅ็งฐใ่ฐ็จๆ ๅคงๅฐ๏ผ

```rust,ignore
use std::thread;

let builder = thread::Builder::new()
                              .name("foo".into())
                              .stack_size(32 * 1024);
let mut x = 1;
let handler = builder.spawn( move || {
    x += 1;
}).unwrap();

handler.join().unwrap();
assert_eq!(1, x);
```

ๅฆๅค๏ผไฝฟ็จ Builder ๅๅปบ็บฟ็จๅฏไปฅไปๅฏๅจ็บฟ็จ็ๅคฑ่ดฅไธญๆขๅค๏ผๅฎ้ไธ`thread::spawn`ๅฝๆฐๅจ Builder ๆนๆณ่ฟๅ io::Result ็ๅฐๆนๆญปๆบ๏ผๅ ไธบๅฎ็ดๆฅไฝฟ็จ unwrap ่ๆฒกๆๅค็้่ฏฏใ


็บฟ็จๆ ๅๅบไธญๅฎไน็ๅฝๆฐ๏ผ

- `available_concurrency` 
- `current` 
- `panicking` 
- `park` ้ปๅก็บฟ็จ๏ผ้ค้ๆ็ดๅฐๅฝๅ็บฟ็จ็ไปค็ๅฏ็จ๏ผๆณจๆ๏ผ่ฐ็จ `park()` ๆนๆณไธ่ฝไฟ่ฏ็บฟ็จๅฐๆฐธ่ฟๅคไบ้ฉป่ฝฆ็ถๆใ
- `park_timeout` 
- `park_timeout_ms` 
- `sleep` ็บฟ็จ็ญๅพไธๆฎตๆถ้ดๅ๏ผๅๆฅ็็ปง็ปญๆง่กใ
- `sleep_ms` 
- `spawn` ๅญตๅไธไธช่ฟ็จๅนถ่ฟๅไธไธช JoinHandle ๅฏน่ฑกใ
- `yield_now` ๆพๅผๅฝๅ็บฟ็จ็ๆถ้ด็๏ผ่ฎฉ็ป็ณป็ป่ฐๅบฆๅจ้ๆฉๅถๅฎ็บฟ็จๆง่กใ

็บฟ็จๆๅๆง่ก็ๆนๆณๆๅค็งๆนๅผ๏ผyield_now ๅ sleep ไผ่ชๅจๆขๅคๆง่ก๏ผ่ park ๆนๅผ้่ฆๆง่ก unpark ๆ็ญๅพ็็บฟ็จๅซ้ใ

็ฑปไผผ็่ฟๅฏไปฅไฝฟ็จๅๆญฅๅฏน่ฑก `Condvar` ๆกไปถๅ้ๆ `Barrier` ็ญใ


## โก Synchronization ็บฟ็จๅๆญฅ
- https://doc.rust-lang.org/stable/std/sync/index.html
- https://doc.rust-lang.org/stable/std/sync/atomic/index.html
- https://doc.rust-lang.org/stable/std/sync/mpsc/index.html

ๅค็บฟ็จๅๆญฅๆบๅถๅๆฌ๏ผ

- Critical Section ไธด็ๅบ๏ผ็จๆฅๅฎ็ฐโๆไปๆงๅ ๆโ๏ผ
- Semaphore ไฟกๅท้๏ผ็จๆฅ่ฟฝ่ธชๆ้็่ตๆบ๏ผ
- Mutex ไบๆฅ้๏ผๆฏๆ ธๅฟๅฏน่ฑก๏ผๅฏไปฅๅจไธๅ็็บฟ็จไน้ดๅฎ็ฐโๆไปๆงๅ ๆโ๏ผ
- Event ้ๅธธไฝฟ็จไบ่ฎพ่ฎกๆไบ่ชๅฎไน็ๅๆญฅๅฏน่ฑกใ

ๅๅญ็ฑปๅๆฏๆ็ฎๅ็ๆงๅถๅฑไบซ่ตๆบ่ฎฟ้ฎ็ไธ็งๆบๅถ๏ผ็ธๆฏ่พไบไบๆฅ้่่จ๏ผๅๅญ็ฑปๅไธ้่ฆๅผๅ่ๅค็ๅ ้ๅ
้ๆพ้็ๆไฝ๏ผๅๆถๆฏๆ่ฏปๅๆไฝ๏ผ่ฟๅทๅค่พ้ซ็ๅนถๅๆง่ฝ๏ผไป็กฌไปถๅฐๆไฝ็ณป็ปๅฐ่ฏญ่จ๏ผ้ฝๆๆฏๆใ

ๆ ๅๅบ std::sync::atomic ๅๅซ Rust ็ฐๆ็ๅๅญ็ฑปๅ๏ผๅบๆฌ่ฝๆปก่ถณๆๆๅฑไบซ่ตๆบ็บฟ็จๅฎๅจ่ฎฟ้ฎ็้่ฆใ

- AtomicBool
- AtomicI16 AtomicU16
- AtomicI32 AtomicU32
- AtomicI64 AtomicU64
- AtomicI8 AtomicU8
- AtomicIsize
- AtomicPtr
- AtomicUsize

่ฟไบๅๅญ็ฑปๅไผๆไพไปฅไธๆไฝ๏ผ

- compare and swap (CAS) ๆฏ่พๅนถไบคๆขๆไฝ๏ผ**compare_and_swap()**
- Fetch add/sub/and/or ๅๅญ็ฑปๅ็ๅ็ง่ฟ็ฎ๏ผ**fetch_add()**ใ**fetch_sub()** ...
- Load ไปๅๅญ็ฑปๅ่ฏปๅๅผ๏ผ **load()**
- Store ๅๅฅไธไธชๅผๅฐๅๅญ็ฑปๅ๏ผ **store()**
- Swap ไบคๆข๏ผ **swap()**

ๅๅญ็ฑปๅๆจกๅไธญๆไธไธช Ordering ็บฆๆๆไธพ็ฑปๅ๏ผๅฎ็ไฝ็จๆฏๅฐๅๅญ้กบๅบ็ๆงๅถๆไบค็ปๅผๅ่๏ผๅซไนๅฆไธ๏ผ

    |  ๆไธพๅผ   |           ๅซไน             |      ๅฏนๅบ C++20      |
    |-----------|--------------------------|----------------------|
    | `Relaxed` | ๆ ๆๅบ็บฆๆ๏ผๅชๆฏๅๅญๆไฝใ    | memory_order_relaxed |
    | `Release` |                          | memory_order_release |
    | `Acquire` |                          | memory_order_acquire |
    | `AcqRel`  |                          | memory_order_acq_rel |
    | `SeqCst`  |                          | memory_order_seq_cst |

- **Relaxed**๏ผ่กจ็คบใๆฒกๆ้กบๅบใ๏ผไนๅฐฑๆฏๅผๅ่ไธไผๅนฒ้ข็บฟ็จ้กบๅบ๏ผ็บฟ็จๅช่ฟ่กๅๅญๆไฝ
- **Release**๏ผๅฏนไบไฝฟ็จ Release ็ store ๆไฝ๏ผๅจๅฎไนๅๆๆไฝฟ็จ Acquire ็ load ๆไฝ้ฝๆฏๅฏ่ง็
- **Acquire**๏ผๅฏนไบไฝฟ็จ Acquire ็ load ๆไฝ๏ผๅจๅฎไนๅ็ๆๆไฝฟ็จ Release ็ store ๆไฝไน้ฝๆฏๅฏ่ง็
- **AcqRel**๏ผๅฎไปฃ่กจ่ฏปๆถไฝฟ็จ Acquire ้กบๅบ็ load ๆไฝ๏ผๅๆถไฝฟ็จ Release ้กบๅบ็ store ๆไฝ
- **SeqCst**๏ผไฝฟ็จไบSeqCst็ๅๅญๆไฝ้ฝๅฟ้กปๅๅญๅจ๏ผๅๅ ่ฝฝใ

็คบ่ๅๅญ็ฑปๅไฝฟ็จ๏ผ๏ผ

```rust,ignore
use std::sync::atomic::{AtomicUsize, Ordering};

let mut some_var = AtomicUsize::new(10);
assert_eq!(*some_var.get_mut(), 10);
*some_var.get_mut() = 5;
assert_eq!(some_var.load(Ordering::SeqCst), 5);
```

ๅบไบๅๅญ็ฑปๅๅฎ็ฐไธไธช่ชๆ้๏ผ

```rust,ignore
use std::sync::Arc;
use std::sync::atomic::{AtomicUsize, Ordering};
use std::thread;

fn main() {
    let spinlock = Arc::new(AtomicUsize::new(1));

    let spinlock_clone = Arc::clone(&spinlock);
    let thread = thread::spawn(move|| {
        spinlock_clone.store(0, Ordering::SeqCst);
    });

    // Wait for the other thread to release the lock
    while spinlock.load(Ordering::SeqCst) != 0 {}

    if let Err(panic) = thread.join() {
        println!("Thread had an error: {:?}", panic);
    }
}
```

ๅคงๅคๆฐไฝ็บงๅๆญฅๅ่ฏญ้ฝ้ๅธธๅฎนๆๅบ้๏ผไฝฟ็จ่ตทๆฅไนไธๆนไพฟ๏ผๆไปฅๆ ๅๅบๆไพไบไธไบ้ซ็บงๅๆญฅๅฏน่ฑกใๅฎไปฌๅฏไปฅ็ฑ่พ
ไฝ็บงๅซ็ๅ่ฏญๆๅปบ๏ผไธบไบๆ้ซๆ็๏ผๆ ๅๅบไธญ็ๅๆญฅๅฏน่ฑก้ๅธธๆฏๅบไบๆไฝ็ณป็ปๅๆ ธๅฎ็ฐ็๏ผๅๆ ธๅฏไปฅๅจ็บฟ็จๅจ
่ทๅ้ๆถ่ขซ้ปๅกๆถ้ๆฐ่ฐๅบฆ็บฟ็จใ

ไปฅไธ่ฟไบ้ฝๆฏ std::sync ๆไพ็้ซ็บงๅๆญฅๅทฅๅท๏ผ

- `Arc`: Atomically Reference-Counted pointer ๅๅญ่ฎกๆฐๆ้๏ผๆฏ Rc ๆ้็ๅค็บฟ็จๅฎๅจ็ๆฌใๅฎๅฏไปฅๅปถ้ฟๆไบๆฐๆฎ็็ๅญๆ๏ผ็ดๅฐๆๆ็บฟ็จ้ฝไธๅไฝฟ็จๅฎใ
- `Barrier`: ็กฎไฟๅค็บฟ็จๅจๆง่กๅฐไธ็นๆถ๏ผไผ็ญๅพๅถๅฎ็บฟ็จๅๅฐ่พพ่ฟไธ็นๅไธ่ตท็ปง็ปญๆง่กใ
- `Condvar`: ๆกไปถๅ้๏ผๆไพ้ปๅก็บฟ็จๅนถไธ็ญๅพไบไปถ้็ฅๆขๅคๆง่ก็่ฝๅใ
- `mpsc`: MPSC ้ไฟก้ๅ Multi-producer, single-consumer queues ๆไพ็ป้็ป่ฟ็จ้ด็ฎก้ๅๆญฅ้ไฟกๆบๅถใ
- `Mutex`: ไบๆฅๆบๅถ Mutual Exclusion๏ผ็กฎไฟๆไธๆถๅปๆๅคๅชๆไธไธช็บฟ็จๅฏไปฅ่ฎฟ้ฎๅไธไธชๆฐๆฎใ
- `Once`: ็จไบ็บฟ็จๅฎๅจใไธๆฌกๆงๅฐๆง่กๅจๅฑๅ้ๅๅงๅใ
- `RwLock`: ๅบไบไบๆฅๆบๅถๅฎ็ฐ็่ฏปๅ้๏ผๅๆถๅ่ฎธๅคไธช่ฏป๏ผไฝๅช่ฝๆไธไธชๅ๏ผๅนถไธ่ฏปๅๅไธ่ฝๅๆถๅญๅจใ

RwLock ๅฐฑๆฏ่ฏปๅ้๏ผ็ฑปไผผ Mutex๏ผไธป่ฆๅบๅซๆฏๅฏนๅคๆด้ฒ็ API ไธไธๆ ทใMutex ไฟๆค็ๆฐๆฎ้่ฆ้่ฟ lock
ๅ unlock ๆนๆณ่ฟ่ก่ฎฟ้ฎ๏ผRwLock ๆไพ read/write ่ฟๅฏนๆๅๆนๆณๆฅๅ่ฟไธชไบๆใ

ไบๆฅ้ไฝฟ็จ็คบ่๏ผ

```rust,ignore
use std::thread;
use std::sync::{mpsc, Arc, Mutex};
use std::time::Duration;

fn main() {
    let (tx, rx) = mpsc::sync_channel::<u32>(1);
    let tx = Arc::new(tx);

    let factorial = 10;
    let foo = Arc::new(Mutex::new(factorial));

    // The two syntaxes below are equivalent.
    // a, b, and foo are all Arcs that point to the same memory location
    // let a = foo.clone();
    // let b = Arc::clone(&foo);

    for _ in 0..2 {
        let txc = tx.clone();
        let bar = foo.clone();
        thread::spawn( move || loop {
        { // lock
            let mut bar = bar.lock().unwrap();
            if *bar < 1 {
                // drop(txc);
                break;
            }
            println!("spawned thread: {}", *bar);
            txc.send(*bar).unwrap();
            *bar -= 1;
        } // unlock
        thread::sleep(Duration::from_millis(100));
        });
    }

    let mut sum = 1;
    while let Ok(i) = rx.recv() {
        if i == 1 {
            break;
        }
        sum *= i;
    }
    println!("factorial {factorial} is {}", sum);
}
```

Barrier ่ฏไธบๅฑ้ๆๅฃๅ๏ผๅฎๅฏไปฅไฝฟๅพๅคไธช็บฟ็จๅจๆไธช่ฎก็ฎ่ตท็นไธไธ่ตท็ญๅพ๏ผ็ถๅๅ็ปง็ปญๆง่กใไปฅไธ็คบไพไธญ๏ผ
่ฆๅๅปบ 10 ไธชๅญ็บฟ็จ๏ผBarrier ๅๅงๅผๆฏ 10๏ผๆฏไธชๅญ็บฟ็จ้ฝๆไธไธช Arc ๆ้ๆๅไบ่ฟไธช Barrierใ
ๅจๅญ็บฟ็จไธญ่ฐ็จ Barrier::wait() ไฝฟ็บฟ็จ่ฟๅฅ็ญๅพ็ถๆ๏ผไธ็ดๅฐ wait ๆนๆณ่ขซ่ฐ็จ 10 ๆฌก๏ผ10 ไธชๅญ
็บฟ็จ้ฝ่ฟๅฅ็ญๅพ็ถๆ๏ผๆญคๆถ Barrier ๅฐฑ้็ฅ่ฟไบ็บฟ็จๅฏไปฅ็ปง็ปญไบใ

ๆไปฅ๏ผๆ็ป็ๆง่ก็ปๆๆฏ๏ผๅๆๅฐๅบ 10 ๆก before wait๏ผๅๆๅฐๅบ 10 ๆก after wait๏ผ็ปไธไผ้ไนฑใ

```rust,ignore
use std::sync::{Arc, Barrier};
use std::thread;

let mut handles = Vec::with_capacity(10);
let barrier = Arc::new(Barrier::new(10));
for _ in 0..10 {
    let c = Arc::clone(&barrier);
    // The same messages will be printed together.
    // You will NOT see any interleaving.
    handles.push(thread::spawn(move|| {
        println!("before wait");
        c.wait();
        println!("after wait");
    }));
}
// Wait for other threads to finish.
for handle in handles {
    handle.join().unwrap();
}
```

ๆผ็คบไฝฟ็จ park ๆๅไธๆขๅค็บฟ็จๆง่ก๏ผ

```rust,ignore
use std::thread;
use std::time::Duration;

let parked_thread = thread::Builder::new()
    .spawn(|| {
        println!("Parking thread");
        thread::park();
        println!("Thread unparked");
    })
    .unwrap();

// Let some time pass for the thread to be spawned.
thread::sleep(Duration::from_millis(10));

println!("Unpark the thread");
parked_thread.thread().unpark();

parked_thread.join().unwrap();
```

็คบ่ `Once` ไฝฟ็จ๏ผ

```rust,ignore
use std::sync::Once;

static START: Once = Once::new();

START.call_once(|| {
    // run initialization here
});
```

ๅจๆไฝ็ณป็ปๅ็ผ็จ่ฏญ่จไธญ๏ผๅผๅฅ**ๆกไปถๅ้**๏ผ่ฟๆฏไธ็ง็ญๅพ-ๅค้ๆจกๅใๅฏไปฅๆจกๆ็ฐๅฎ็ๆดปไธญ็้น้็่กไธบ๏ผ
ๆกไปถ่พพๆๅฐฑ้็ฅ็ญๅพๆกไปถ็็บฟ็จไปฅๆขๅคๆง่กใ็บฟ็จ้ด้่ฟ่งฆๅ๏ผ้็ฅ๏ผ็ๆนๅผ่ฟ่ก้่ฎฏ๏ผ่ไธๆฏ่ฝฎ่ฏข็ๆนๅผ๏ผๅคงๅคง
ๆ้ซ CPU ไฝฟ็จ็ใ

Rust ็ๆกไปถๅ้ๆฏ Condvar๏ผไฝฟ็จ้็ฅๆบๅถๆฏๅ ไธบๆ็ญๅพ๏ผๆไปฅ้็ฅๅ็ญๅพๅ ไน้ฝๆฏๆๅฏนๅบ็ฐ็ใ็ญๅพๆไฝฟ็จ
็ๅฏน่ฑก๏ผไธ้็ฅๆไฝฟ็จ็ๅฏน่ฑก๏ผๆฏๅไธไธชๅฏน่ฑก๏ผ่่ฏฅๅฏน่ฑก้่ฆๅจๅคไธช็บฟ็จไน้ดๅฑไบซใ

้คไบ Condvar ไนๅค๏ผ้ไนๅทๆ่ชๅจ้็ฅๅ่ฝ๏ผๅฝๆๆ้็็บฟ็จ้ๆพ้็ๆถๅ๏ผ็ญๅพ้็็บฟ็จๅฐฑไผ่ชๅจ่ขซๅค้๏ผ
ไปฅๆขๅ ้ใ้่ฟๆกไปถๅ้ๅ้๏ผ่ฟๅฏไปฅๆๅปบๆดๅ ๅคๆ็่ชๅจ้็ฅๆนๅผ๏ผๆฏๅฆ Barrierใ

้็ฅๅฏไปฅๆฏ 1:1 ๆ 1:N ็๏ผๅณ Condvar ๅฏไปฅๆงๅถ้็ฅ 1 ไธชๆ N ไธช็บฟ็จ็ๅค้ใ่้ๅไธ่ฝๆงๅถ๏ผๅช่ฆ
้ๆพ้๏ผๆๆ็ญๅพ้็ๅถไป็บฟ็จ้ฝไผๅๆถ้ๆฅ๏ผ่ไธๆฏๅชๆๆๅ็ญๅพ็็บฟ็จใ

็คบ่ไฝฟ็จ `Condvar`๏ผๅจไธป็บฟ็จไธญ็ญๅพๅญ็บฟ็จ็้็ฅ๏ผ

```rust,ignore
use std::sync::{Arc, Mutex, Condvar};
use std::thread;

let pair = Arc::new((Mutex::new(false), Condvar::new()));
let pair2 = Arc::clone(&pair);

// Inside of our lock, spawn a new thread, and then wait for it to start.
thread::spawn(move|| {
    let (lock, cvar) = &*pair2;
    let mut started = lock.lock().unwrap();
    *started = true;
    // We notify the condvar that the value has changed.
    cvar.notify_one();
});

// Wait for the thread to start up.
let (lock, cvar) = &*pair;
let mut started = lock.lock().unwrap();
while !*started {
    started = cvar.wait(started).unwrap();
}
```



## โก Message channel ๆถๆฏไผ ้
- https://doc.rust-lang.org/book/ch16-02-message-passing.html
- https://learnku.com/docs/effective-go/2020/concurrent/6249
- https://doc.rust-lang.org/stable/std/sync/mpsc/index.html
-[Rust้mpscไธบไปไนไธ่ฝๅจ็บฟ็จ้ดๅฑไบซsenderๅผ็จ๏ผ](https://้ธๅ.com/?p=389)

ๅจ Go ่ฏญ่จ็ๆๆกฃไธญๆไธๅฅๅฃๅท๏ผไธ่ฆ้่ฟๅฑไบซๅๅญๆฅ้ไฟก๏ผ่ๅบ้่ฟ้ไฟกๆฅๅฑไบซๅๅญใ

โDo not communicate by sharing memory; instead, share memory by communicating.โ

Rust ไน็ฑปไผผไฝฟ็จ channel ๆฅไผ ้ๆถๆฏ๏ผๅฏไปฅๅฐๅฎๆณ่ฑกๆๆฐด็ฎก๏ผๆถๆฏๅฐฑๅๆฐดๆตไธๆ ทไปไธ็ซฏๆตๅๅฆไธ็ซฏใ

Rust ๆ ๅๅบๆไพๅผๆญฅ้้ๅๅๆญฅ้้ไธค็ง๏ผ

    pub fn channel<T>() -> (Sender<T>, Receiver<T>)
    pub fn sync_channel<T>(bound: usize) -> (SyncSender<T>, Receiver<T>)

- ๅผๆญฅ้้ channel๏ผๆ ้็ผๅฒ็ฎก้๏ผไธ็ฎกๆฅๆถ่ๆฏๅฆๆญฃๅจๆฅๆถๆถๆฏ๏ผๆถๆฏๅ้่ๅจๅ้ๆถๆฏๆถ้ฝไธไผ้ปๅกใ
- ๅๆญฅ้้ sync_channel๏ผๆ้็ผๅฒ็ฎก้๏ผ้่ฆๆๅฎ็ผๅญๆถๆฏๆฐ้๏ผๆๅฐๅฏไปฅๆฏ 0 ไธช๏ผ่กจ็คบๆฒกๆ็ผๅญใๅ้ๆถๆฏไผ่ขซ้ปๅก็ดๅฐ่ขซๆฅๆถ็ซฏ่ฏปๅ๏ผๅ้็ซฏ็ผๅญ้ๅๅกซๆปกๆถๆฏๅนถๅๆฌกๅ้ๆถๆฏๆถ๏ผๅฐฑไผ่ฟๅฅ้ปๅกใ

Golang ็็ฎก้ๆฏ multiple producer, multiple consumer (mpmc)๏ผ่ Rust ็็ฎก้ๆฏ mpsc๏ผ
ๅฏ่ฝๆฏๅบไบๆง่ฝ็่่่ฟๆ ท่ฎพ่ฎก็ใmpsc ้็จๅค็งๅบๅ๏ผๅๆฌ้่ฆๅๆญฅ้ๅๅฑไบซๅๅญๅบๅ๏ผไน้ๅธธ้ๅ็จ mpsc
ๆฅๅปบๆจก๏ผๆฏๅฆ async-std ็่ฟไธชไพๅญ [Connecting Readers and Writers](https://book.async.rs/tutorial/connecting_readers_and_writers.html)ใ

Rust ๅๅปบ็ฎก้ๅ๏ผ้ป่ฎค็ฎก้็ถๆๅคไบ single producer๏ผsingle consumer (spsc)๏ผไธฅๆ ผๆฅ่ฎฒๆฏๅคไบ
oneshot ่ฟ็ง่ฝป้็บง็ไธๆฌกๆง็ถๆ๏ผ่ฟ็ง่ฎพ่ฎกๆฏไธบไบๆง่ฝใchannel ๅ ็ง็ถๆ๏ผ

```rust
    enum Flavor<T> {
        // ไธๆฌกๆง็ฎก้๏ผๅช่ฝๅ้ไธๆกๆฐๆฎ
        Oneshot(Arc<oneshot::Packet<T>>),
        // SPSC๏ผๅช่ฝๅไธช็บฟ็จๅ้๏ผๅ้ๆกๆฐๆ ้ๅถ
        Stream(Arc<stream::Packet<T>>),
        // MPSC๏ผๅฏไปฅๅคไธช็บฟ็จๅ้๏ผๅ้ๆกๆฐๆ ้ๅถ
        Shared(Arc<shared::Packet<T>>),
        // sync_channel() ๅๅปบ็็ฎก้ๆไผๅคไบ่ฟไธช็ถๆ๏ผๅ้ๆกๆฐๆ้ๅถ๏ผ่ถ่ฟๆถๆฐ้ๆถ๏ผsend ๆไฝๅฐฑไผ้ปๅก
        Sync(Arc<sync::Packet<T>>),
    }
```

่ฐ็จ send() ๅฝๆฐ่งฆๅ Oneshot ๅฐ Stream ็ๅ็บงใclone() ๅฝๆฐๅฎๆ OneshotใStream ๅ็บงๅฐ Sharedใ
่ฐ็จ clone() ๅฏไปฅ็ดๆฅไป Oneshot ็ถๆๆถๅ็บงไธบ Shared ็ถๆใ

Oneshot(spsc) ๅ็บงๅฐ Stream(spsc)๏ผๅจๅ้็ๆฐๆฎๆกๆฐๅคงไบ 1 ๆถ่ฟ่กๅ็บง๏ผๅช้่ฆๅจ็ฌฌไธๆฌก่ฐ็จ send()
ๆถๅจ Oneshot ้่ฎฐๅฝไธไธ็ถๆ๏ผ็ฌฌไบๆฌก่ฐ็จ send() ๅฝๆฐ็ๆถๅๆฃๆตไธไธ่ฟไธช็ถๆ็ถๅ่งฆๅๅ็บงๆไฝใ

Oneshot(spsc) ๆ Stream(spsc) ๅ็บงๅฐ Shared(mpsc)๏ผๅจๅคไธช็บฟ็จไธญๅ้ๆฐๆฎๆถ่ฟ่กๅ็บง๏ผๅจ็ฌฌไธๆฌก
่ฐ็จ send() ๅฝๆฐๆถ่ฎฐๅฝไธ็บฟ็จ ID๏ผ็ถๅ็ฌฌไบๆฌก่ฐ็จ send() ๆถๅฏนๆฏ็บฟ็จ ID๏ผๅฆๆไธๅๅฐฑ่งฆๅๅ็บงๆไฝใ
ไฝ่ฟ็งๅฎ็ฐๆนๅผ้่ฆๆฏๆฌก่ฐ็จ send() ๅ้ๆฐๆฎๆถ้ฝ่ฟ่ก่ฟๆ ท็ๆฃๆต๏ผๆไธ็นๅฐไปฃไปท๏ผ่ไธ่ฟ้่ฆๅค็ๅคไธช็บฟ็จ
ๅๆถ่งฆๅๅ็บงๆไฝ็ๆๅตใ


ๆผ็คบๅฆไธ๏ผ

```rust,ignore
use std::sync::mpsc;
use std::thread;
use std::time::Duration;

fn main() {
    let (tx, rx) = mpsc::channel();
    thread::spawn( move || {
        thread::sleep(Duration::from_millis(1000));
        let val = String::from("hi!");
        tx.send(val).unwrap();
        // println!("{}", val); <-- borrow of moved value: `val`
    });

    let received = rx.recv().unwrap();
    println!("Got message: {}", received);
}
```

ๆฐๆฎๅ้ๅจ็ฎก้ไธญไผ ้ๆถ๏ผๆๆๆไนๆฏไธ่ตท็งปๅจไผ ้็๏ผ่ฟๅฐฑ่งฃๅณไบๆฐๆฎ็ซไบ้ฎ้ขใ

ๆฅๆถ็ซฏๆฏ rx๏ผๆง่ก `recv()` ๆนๆณไผ่ฟๅฅ้ปๅก็ดๅฐ tx ็ซฏๆๆฐๆฎไผ ่พ่ฟๆฅ๏ผ่ๅ้็ซฏๅฏไปฅ่ฟ็ปญ่พๅฅๆฐๆฎ่ไธไผ้ปๅกใ

ๆฅๆถ็ซฏๆฏไธไธช่ฟญไปฃๅจ๏ผๅฏไปฅ็ดๆฅไฝฟ็จ for in ่ฟ่กๆไธพ๏ผ

```rust,ignore
use std::sync::mpsc;
use std::thread;
use std::time::Duration;

fn main() {
    let (tx, rx) = mpsc::channel();

    thread::spawn(move || {
        let vals = vec![
            String::from("hi"),
            String::from("from"),
            String::from("the"),
            String::from("thread"),
        ];

        for val in vals {
            tx.send(val).unwrap();
            thread::sleep(Duration::from_secs(1));
        }
    });

    for received in rx {
        println!("Got: {}", received);
    }
}
```

่ฟญไปฃๅจไปฅ Sender ็ๅฝๅจๆ็ปๆไธบ็ปๆญข๏ผ่ฐ็จ drop() ๆนๆณๅฏไปฅๆๅ็ปๆ๏ผๆณจๆ๏ผๅฆๆๅฏน Sender ่ฟ่กไบ
ๅ้๏ผๅ้่ฆๅฎๅจ drop ๆๆๅผ็จใ


็ฎก้ๆฏไธไธช Multi-producer, single-consumer FIFO ้่ฎฏ้ๅ๏ผๅณๅฏไปฅๅฏน็ฎก้็ๅ้็ซฏ่ฟ่กๅ้๏ผ
ๅฏไปฅๅจๅคไธช็บฟ็จไธญไฝฟ็จๅไธไธชๆฅๆถ็ซฏ่ทๅๆถๆฏ๏ผ 

    let tx = tx.clone();
    let tx = mpsc::Sender::clone(&tx);

ๅจๅค็บฟ็จไธญ๏ผๅฏไปฅไฝฟ็จๅ้ๆฅๆถ็ซฏ๏ผ่ฟๆ ทๅฐฑๅฏไปฅๅจๅไธช็บฟ็จไธญๆฅๆถ็ฎก้ไผ ้็ๆถๆฏใ


## โก Shared State ๅฑไบซ็ถๆ 
- https://doc.rust-lang.org/book/ch16-03-shared-state.html

Rust ็ static ้ๆๅ้๏ผ็ๅฝๅจๆๅจๆดไธชๅบ็จ็จๅบๆๆ๏ผๅนถไธๅจๅๅญไธญๆไธชๅบๅฎๅฐๅๅคๅชๅญๅจไธไปฝๅฎไพใๆๆ็บฟ็จ้ฝ่ฝๅค่ฎฟ้ฎๅฐๅฎ๏ผ้่ฟๅฎๅฏไปฅๅฎ็ฐๆ็ฎๅ็็บฟ็จ้ดๅๅญๅฑไบซใ

```rust,ignore
use std::thread;
static C32: i32 = 5;
fn main() {
    let new_thread = thread::spawn(move|| {
        println!("static value in new thread: {:p}", &C32);
    });
    new_thread.join().unwrap();
    println!("static value in main thread: {:p}", &C32);
}
```

ๆญฃๅฆๅ้ขๆ่ฏด๏ผไธ่ฆ้่ฟๅฑไบซๅๅญๆฅ้ไฟก๏ผ่ๅบ้่ฟ้ไฟกๆฅๅฑไบซๅๅญใ

What would communicating by sharing memory look like? In addition, why would message-passing enthusiasts not use it and do the opposite instead?

้ฃไน๏ผๅฑไบซๅๅญๆนๅผ็้่ฎฏไผๆไปไน้ฎ้ขๅข๏ผๅถๅฎๅฑไบซๅๅญๆนๅผๅฐฑๅฆๅๅคไธชๆๆๆ๏ผไธๅ็บฟ็จๅฏๅจๅไธๆถๅป่ฎฟ้ฎๅไธๆฐๆฎ๏ผ่ฟๅฐฑไผไบง็ๆฐๆฎ็ซไบ้ฎ้ขใ

ๅจๅ้ข้จๅๅๅฎนๅฏไปฅ็ๅฐ๏ผ้่ฟ Box Rc RefCell ็ญๆบ่ฝๆ้ๅฏไปฅๅฎ็ฐๅคไธชๆๆๆใ

ไฝฟ็จไบๆฅ้ Mutexes ๅณ Mutual Exclusion ๅฏไปฅ็กฎไฟๅไธๆถ่ฏฅๅชๆไธไธช็บฟ็จๅฏไปฅ่ฎฟ้ฎๅไธไธชๅๅญๆฐๆฎ๏ผ่ฟๅฐฑๆฏ้ๅฐๆบๅถ็ๅฎ็ฐใ

ไบๆฅ้ไปฅ้พไปฅไฝฟ็จ่้ปๅ๏ผๅฟ้กป่ฎฐไฝไธคๆก่งๅ๏ผ

- ๅฟ้ๅจไฝฟ็จๆฐๆฎไนๅๅฐ่ฏ่ทๅ้ใ
- ๅฎๆๆไฝไบๆฅ้ไฟๆค็ๆฐๆฎๅ๏ผๅฟ้กป่งฃ้ๆฐๆฎ๏ผไปฅไพฟๅถไป็บฟ็จๅฏไปฅ่ทๅ้ใ

ไบๆฅ้็็ฎก็้ๅธธๆฃๆ๏ผ่ฟๅฐฑๆฏไธบไปไน้ฃไนๅคไบบ็ญ่กทไบไฝฟ็จ้ไฟก็ฎก้ใ

ไปฅไธๆผ็คบไบๆฅ้ `Mutex<T>` ็ไฝฟ็จ๏ผ

```rust,ignore
use std::sync::Mutex;

fn main() {
    let m = Mutex::new(5);

    {
        let mut num = m.lock().unwrap();
        *num = 6;
    }

    println!("m = {:?}", m);
}
```

ๅ็กฎๅฐ่ฏด๏ผ`Mutex<T>` ็ `lock()` ๆนๆณ่ฟๅ็ๆฏไธไธช `MutexGuard` ๆบ่ฝๅฝๆฐ๏ผ็ฑ `LockResult` ๅ่ฃ๏ผ`unwrap()` ่งฃๅ๏ผ้ๅฎๅๅฐฑๅฏไปฅ้่ฟๆบ่ฝๆ้่ฎฟ้ฎไบๆฅ้ๅ้จ็ๆฐๆฎใ

ๆบ่ฝๆ้ `MutexGuard` ๅฎ็ฐไบ `Deref` ๆฅ่ฎฟ้ฎๅ้จๆๅ็ๆฐๆฎ๏ผ่ฟๅฎ็ฐไบ `Drop`๏ผ่ฟๆ ทๅจ MutexGuard ่ฑ็ฆปไฝ็จๅๅๅฐฑไผ่ช่ก่งฃ้ใ

็ฐๅจ็้ฎ้ขๆฏๅฆไฝๅจๅค็บฟ็จไธญไฝฟ็จไบๆฅ้๏ผไนๅฐฑๆฏไฝฟ็จๆบ่ฝๆ้ๅค็ Multiple Ownership ้ฎ้ขใ

ไฝๆฏไธ่ฝ็ดๆฅไฝฟ็จ `Rc<Mutex<i32>>` ่ฟๆ ท็ๆบ่ฝๆ้๏ผๅ ไธบๆฒกๆๅฎ็ฐ trait `Send`๏ผไธ่ฝๅจๅค็บฟ็จไธญๅฎๅจๅฑไบซใ 

    let counter = Rc::new(Mutex::new(0));
    let counter = Rc::clone(&counter);

ๅ่ไปฃไน็ๆฏ Atomic Reference Counting๏ผๅณ `Arc<T>`๏ผๅฎๅ `Rc<T>` ๆบ่ฝๆ้ๅพๅ๏ผไฝๆฏๆฏๆๅๅญๆไฝใ

ไปฅไธๆผ็คบไฝฟ็จ `Arc<T>` ๅ่ฃไบๆฅ้ไปฅๅฎ็ฐๅค็บฟ็จๅฎๅจๅฑไบซ๏ผ

```rust,ignore
use std::thread;
use std::sync::{Arc, Mutex};

fn main() {
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];
    for _ in 1..10 { 
        let counter = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            let mut num = counter.lock().unwrap();
            *num += 1;
        });
        handles.push(handle);
    }
    for handle in handles {
        handle.join().unwrap();
    }

    println!("Result: {}", *counter.lock().unwrap());
}
```

่ฟ้ๆๅฟ่ฆๆฏ่พไธไธ `RefCell<T>`/`Rc<T>` ไธ `Mutex<T>`/`Arc<T>`ใ

็คบ่ไปฃ็ ไธญ `counter` ๆฏไธๅฏๅ้๏ผไฝๆฏ้่ฟ `Mutex<T>` ๆไพ็ๅ้จๅฏๅๆงๅฎ็ฐไบๅฏน `Arc<T>` ๅ้จๆฐๆฎ็ไฟฎๆน๏ผๅ `Cell` ๆๆ้ๅฏไปฅๅ็ไธๆ ทใๅจๆบ่ฝๆ้้จๅ็ๅๅฎนไธญ๏ผไฝฟ็จ `RefCell<T>` ๅฏนไบ `Rc<T>` ๅ่ฃ็ไธๅฏๅ้ๅไบไธๆ ท็ไบใ 

ไฝๆฏๆณจๆ๏ผไฝฟ็จ `Mutex<T>` ๅฐฑๆๅณ Rust ไธ่ฝๅๆไพๅฎๆด็้ป่พ้่ฏฏๆฃๆฅใๆบ่ฝๆ้้จๅ๏ผๆผ็คบไบไธคไธช `Rc<T>` ๅพช็ฏๅผ็จๅฏผ่ดๅๅญๆณๆผ๏ผ่ `Mutex<T>` ๅๅฏ่ฝๅธฆๆฅๆญป้้ฎ้ข๏ผๅฝไธคไธช่ตๆบ้ไธไธคไธชๆๆๅถไธ็็บฟ็จ๏ผๅนถไธไธค็บฟ็จ้ฝๅจ็ญๅพๅฆไธไธช่ตๆบ๏ผ่ฟๅฐฑๆฏๆญป้ใ

Arc ๆ้ๅฏนๆญคไนไธ่ฝๅนธๅ๏ผๅฎไปฌ้ฝๅฏ่ฝๅผๅฅๆญป้้ฎ้ข๏ผไฝๆฏ็ฑปไผผ็๏ผๅฎๅฏไปฅ้่ฟ Atomic Weak ๆ้ๅๅฐ่ฟ็งๆๅตใ

ๅจไฝฟ็จ็ฎก้ไผ ้ๆถๆฏๆถไนไผๅ็ๆญป้๏ผๅฆไธ้ขไปฃ็ ๆ็คบ๏ผ

```rust,ignore
use std::sync::mpsc;
use std::thread;

fn main() {
    let (tx1, rx1) = mpsc::channel();
    let (tx2, rx2) = mpsc::channel();

    thread::spawn(move || {
        rx1.recv().unwrap();
        tx2.send(()).unwrap();
    });

    rx2.recv().unwrap();
    tx1.send(()).unwrap();
    println!("Never Done!");
}
```

ๆฏไธช็บฟ็จ้่ฆๅไป channel ๆฅๆถไธไธชๆถๆฏๅๅๅฆไธ็ซฏๅ้ๆถๆฏ๏ผๆไปฅไธคไธช็บฟ็จ้ฝไผไธ็ด็ญๅพไธๅปใ



## โก Send & Sync traits
- https://doc.rust-lang.org/book/ch16-04-extensible-concurrency-sync-and-send.html

Rust ่ฏญ่จไธญ็ๅนถๅๆฆๅฟตไธญ๏ผๅๅซ Sync ๅ Send ่ฟไธคไธชๅฎไนๅจ std::marker ๆจกๅไธญ็ๆฅๅฃใๅฎไปฌๆฏไธ็ง
Marker trait๏ผๅฎ้ๅฐฑๆฏไธ็ง็บฆๅฎ๏ผๆฒกๆๆนๆณ็ๅฎไน๏ผไนๆฒกๆๅณ่ๅ็ด ๏ผๅฎ็ฐๅฎๅฐฑๅฟ้กปๆปก่ถณ่ฟ็ง็บฆๅฎใไธ็ง็ฑปๅ
ๆฏๅฆๅ ไธ่ฟ็ง็บฆๅฎ๏ผ่ฆไนๆฏ็ผ่ฏๅจ็่กไธบ๏ผ่ฆไนๆฏไบบๅทฅๆๅจ็่กไธบใ

- Allowing Transference of Ownership Between Threads with `Send`
- Allowing Access from Multiple Threads with `Sync`

Send ๅ Sync ๅจๅคง้จๅๆๅตไธไผ็ฑ็ผ่ฏๅจ่ชๅจๆจๅฏผๅบๆฅ๏ผ้ๅฏน Rust ็ๅบ็ก็ฑปๅๅ std ไธญ็ๅคง้จๅ็ฑปๅใ
ๅฏนไบไธ่ฝ็ฑ็ผ่ฏๅจ่ชๅจๆจๅฏผๅบๆฅ็็ฑปๅ๏ผ่ฆไฝฟๅฎไปฌๅทๆ Send ๆ Sync ็็บฆๅฎ๏ผๅฏไปฅ็ฑไบบๆๅจๅฎ็ฐใๅฎ็ฐ็ๆถๅ๏ผ
ๅฟ้กปไฝฟ็จ `unsafe` ๆนๅผ๏ผๅ ไธบ Rust ไธญ็ฑ็จๅบๅ่ชๅทฑๆงๅถ็ไธ่ฅฟ๏ผ็ป็ปๆ ่ฎฐไธบ unsafe๏ผๅบไบ้ฎ้ข็ฑ็จๅบๅ
่ช่ก่ด่ดฃใๆฏๅฆ๏ผ็ปไธๆฏ็บฟ็จๅฎๅจ็ๅฏน่ฑกๅ ไธ Sync ็บฆๅฎใ

```rust ,ignore
pub fn spawn<F, T>(f: F) -> JoinHandle<T>
where
    F: FnOnce() -> T,
    F: Send + 'static,
    T: Send + 'static,
{
    Builder::new().spawn(f).expect("failed to spawn thread")
}
```

่ฟไธคไธช็บฆๅฎ็ๅซไนๅฆไธ๏ผ

- ๅฏนไบ T: Send๏ผๅฐ T ไผ ๅฐๅฆไธไธช็บฟ็จ๏ผๆๆๆไนไธๅนถไผ ้๏ผไธไผๅฏผ่ดๆฐๆฎ็ซไบๆๅถๅฎไธๅฎๅจๆๅต๏ผๅฆๆๅผไผ ้ใ
    - Send ่กจ็คบๅฏน่ฑกๅฏไปฅๅฎๅจๅ้ๅฐๅฆไธไธชๆง่กไฝไธญ๏ผๅคๆๆๆ็ `Rc<T>` ๅไธๅฏใ
    - Send ไฝฟ่ขซๅ้ๅฏน่ฑกๅฏไปฅๅไบง็ๅฎ็็บฟ็จ่งฃ่ฆ๏ผ้ฒๆญขๅ็บฟ็จๅฐๆญค่ตๆบ้ๆพๅ๏ผๅจ็ฎๆ ็บฟ็จไธญไฝฟ็จๅบ้๏ผuse after free๏ผใ
- ๅฏนไบ T: Sync๏ผๅฐ &T ไผ ๅฐๅฆไธไธช็บฟ็จไธญๆถ๏ผไธไผๅฏผ่ดๆฐๆฎ็ซไบๆๅถๅฎไธๅฎๅจๆๅต๏ผ`Rc<T>` ไนไธๅฏไปฅใ
    - Sync ๆฏๅฏไปฅ่ขซๅๆถๅคไธชๆง่กไฝ่ฎฟ้ฎ่ไธๅบ้๏ผ
    - Sync ้ฒๆญข็ๆฏ็ซไบ๏ผ

็ธๅฏนไบ Send ่กจ็คบๅฏไปฅๅจ็บฟ็จ้ดๅฎๅจไผ ้ๆๆๆ็็ฑปๅ๏ผSync ็ๅซไนๆพๅพๆด้พ็่งฃใๅฏนไบ็ฑปๅ T: Sync๏ผ่กจ็คบ
ๅฏไปฅๅจไธๅ็็บฟ็จไธญๅฎๅจๅฐไฝฟ็จ &T ่ฎฟ้ฎๅไธไธชๅ้ใ

ๆพ็ถ๏ผๅบๆฌๆฐๅผ็ฑปๅ่ฏๅฎๆฏ Syncใไพๅฆ๏ผไธๅ็บฟ็จ้ฝๆฅๆๆๅๅไธไธชๅ้็ๅช่ฏปๅผ็จ &i32๏ผๅ ไธบๅช่ฏปไธ่ฝๅ๏ผ
ไธๅญๅจๆฐๆฎๅๆด้ฎ้ข๏ผๅคไธช็บฟ็จๅฏไปฅๅฎๅจๅฐ่ฏปๅๅไธไธชๆฐๅผใ

ๅคง้จๅๅทๆๆณๅๅๆฐ็็ฑปๅๆฏๅฆๆปก่ถณ Sync๏ผๅพๅค้ฝๆฏๅๅณไบๅๆฐ็ฑปๅๆฏๅฆๆปก่ถณ Syncใไพๅฆ๏ผๅช่ฆๆณๅๅๆฐ T
ๆปก่ถณ Sync๏ผๅ Box<T>ใVec<T>ใOption<T> ่ฟไบ็ฑปๅ้ฝๆปก่ถณ Syncใ

Mutex<T> ่ฟ็ฑปๅ้่ฟๅฐไธๆปก่ถณ Sync ็็ฑปๅๅฐ่ฃ่ตทๆฅ๏ผไฝฟๅถๆปก่ถณ Sync๏ผ่ไธ่ฎบๆณๅๅๆฐๆฏๅฆๆปก่ถณ Syncใ
ๅพๅฐ็็ปๆ้ฝๆปก่ถณ Sync๏ผ่ฟๆ ทๅคไธช็บฟ็จๅๆถๆฅๆ &Mutex<T> ๅๅผ็จใ็ฑปไผผ็๏ผๆ ๅๅบไธญ่ฟๆ RwLock<T>ใ
AtomicBoolใAtomicIsizeใAtomicUsizeใAtomicPtr ็ญ็ฑปๅฝขใ

ๆ นๆฎ Rust ็โๅฑไบซไธๅฏๅ๏ผๅฏๅไธๅฑไบซโๅๅ๏ผArc ๆข็ถๆไพไบๅฑไบซๅผ็จ๏ผๅฐฑไธๅฎไธ่ฝๆไพๅฏๅๆงใๆไปฅ๏ผArc
ไนๆฏๅช่ฏป็๏ผๅฎๅฏนๅค API ๅ Rc ๆฏไธ่ด็ใ้ๅธธ๏ผๅจ้่ฆ่ฏปๅ็ๅบๅไธญ๏ผArc ไผๅ Mutex ๆญ้ไฝฟ็จใ

Shared references in Rust disallow mutation by default, and Arc is no exception: 
you cannot generally obtain a mutable reference to something inside an Arc. If 
you need to mutate through an Arc, use Mutex, RwLock, or one of the Atomic types.

ๆจ่ฎบ๏ผ

- T: Sync ๆๅณ็ &T: Send๏ผ
- Sync + Copy = Send๏ผ
- ๅฝ T: Send ๆถ๏ผๅฏๆจๅฏผๅบ &mut T: Send๏ผ
- ๅฝ T: Sync ๆถ๏ผๅฏๆจๅฏผๅบ &mut T: Sync๏ผ
- ๅฝ &mut T: Send ๆถ๏ผไธ่ฝๆจๅฏผๅบ T: Send๏ผ

ๅทไฝ็็ฑปๅ๏ผ

- ๅๅง็ฑปๅ๏ผๆฏๅฆ๏ผ u8, f64๏ผ๏ผ้ฝๆฏ Sync๏ผ้ฝๆฏ Copy๏ผๅ ๆญค้ฝๆฏ Send๏ผ
- ๅชๅๅซๅๅง็ฑปๅ็ๅคๅ็ฑปๅ๏ผ้ฝๆฏ Sync๏ผ้ฝๆฏ Copy๏ผๅ ๆญค้ฝๆฏ Send๏ผ
- ๅฝ T: Sync๏ผBox<T>, Vec<T> ็ญ้ๅ็ฑปๅๆฏ Sync๏ผ
- Arc<T> ็ฌฆๅ Send๏ผๅ ไธบ Arc ๆฏๅๅญ่ฎกๆฐ๏ผๅฏนๅฎ่ฟ่กๅผ็จ่ฎกๆฐๅขๅๆไฝ๏ผไธไผๅบ็ฐๅค็บฟ็จๆฐๆฎ็ซไบ๏ผ
- ่ขซ Mutex ๅ RWLock ้ไฝ็็ฑปๅ T: Send ็ฌฆๅ Sync๏ผ
- ๅๅงๆ้๏ผ`*mut`, `*const`๏ผๆขไธ็ฌฆๅ Send ไนไธ็ฌฆๅ Sync๏ผ
- ๅทๆๅ้จๅฏๅๆง็ๆ้๏ผไธๆฏ Sync ็๏ผๆฏๅฆ Cell, RefCell, UnsafeCell๏ผ
- Rc ไธๆฏ Syncใๅ ไธบ &Rc<T> ๅ้ไธไธชๆฐๅผ็จ๏ผไผไปฅ้ๅๅญๆง็ๆนๅผไฟฎๆนๅผ็จ่ฎกๆฐ๏ผๆไปฅไธๆฏ็บฟ็จๅฎๅจ็๏ผ

Rust ๆญฃๆฏ้่ฟๆๆๆๅ็ๅฝๅจๆ + Send ๅ Sync๏ผๆฌ่ดจไธไธบ็ฑปๅ็ณป็ป๏ผๆฅไธบๅนถๅ็ผ็จๆไพไบๅฎๅจๅฏ้ ็
ๅบ็ก่ฎพๆฝ๏ผไฝฟๅพ็จๅบๅๅฏไปฅๆพๅฟๅจๅถไธๆๅปบ็จณๅฅ็ๅนถๅๆจกๅใ่ฟไนๆญฃๆฏ Rust ็ๆ ธๅฟ่ฎพ่ฎก่ง็ไฝ็ฐ๏ผๅๆ ธๅชๆไพ
ๆๅบ็ก็ๅ่ฏญ๏ผ็ๆญฃ็ๅฎ็ฐ่ฝๅ็ฆปๅบๅปๅฐฑๅ็ฆปๅบๅปใ



## โก Multithreaded Web Server
- https://doc.rust-lang.org/book/ch20-00-final-project-a-web-server.html
- https://doc.rust-lang.org/book/ch20-02-multithreaded.html
- https://doc.rust-lang.org/stable/std/net/struct.TcpStream.html
- The I/O Prelude https://doc.rust-lang.org/stable/std/io/prelude/index.html
- Filesystem manipulation operations https://doc.rust-lang.org/stable/std/fs/index.html
- Hypertext Transfer Protocol -- HTTP/1.1 https://tools.ietf.org/html/rfc2616
- Tokio - Event-driven NBIO asynchronous I/O https://crates.io/crates/tokio
- hyper - A fast and correct HTTP library https://crates.io/crates/Hyper
- Actix Web framework https://crates.io/crates/actix-web
- Rocket Web framework https://crates.io/crates/rocket
- Rocket web framework Community contributed https://crates.io/crates/rocket_contrib
- Iron is a high level web framework https://docs.rs/iron/0.6.1/iron/
- A standard library for the client-side Web https://crates.io/crates/stdweb
- Gotham - A flexible web framework https://github.com/gotham-rs/gotham

่ฟ้จๅไธป่ฆๅๅฎน๏ผ

- Building a Single-Threaded Web Server
- Turning Our Single-Threaded Server into a Multithreaded Server
- Graceful Shutdown and Cleanup

ๅๆๅบ็ก๏ผ้่ฆไบ่งฃ TCP/IP ๅ่ฎฎ๏ผไธป่ฆๆฏ HTTP ๅ่ฎฎใ

HTTP ่ฏทๆฑๆฐๆฎๅๆ ผๅผ็ปๆๅคงๆฆๅฆไธ๏ผ

    Method Request-URI HTTP-Version CRLF
    header CRLF
    ...
    CRLF
    message-body

HTTP ๅๅบๆฐๆฎๅๆ ผๅผ็ปๆๅคงๆฆๅฆไธ๏ผ

    HTTP-Version Status-Code Reason-Phrase CRLF
    header CRLF
    ...
    CRLF
    message-body

้ฆๅๅๅปบๅทฅ็จ๏ผ

    cargo new webserver

ๅฎ็ฐไธไธชๅ็บฟ็จ็ๆๅกๅจ๏ผ

```rust,ignore
use std::net::TcpListener;
use std::net::TcpStream;
use std::io::prelude::*;
use std::fs;

fn main(){
    let listener = TcpListener::bind("127.0.0.1:80").unwrap();
    for stream in listener.incoming(){
        // let ts: TcpStream = stream.unwrap();
        // handle(ts);
        match stream {
            Ok(ts) => {
                println!("Connection established! {:?}", ts);
                handle(ts);
            }
            Err(e) => {
                println!("Error {:?}", e)
            }
        }
    }
}

fn handle(mut ts: TcpStream){
    let mut buf = [0; 1024];
    let size = ts.read(&mut buf).unwrap();
    println!("Request: {:?}", String::from_utf8_lossy(&buf[..=size]));
    
    let home = b"GET / HTTP/1.1\r\n";
    let fav = b"GET /favicon.ico HTTP/1.1\r\n";
    
    let (status_line, contents) = if buf.starts_with(home) {
        let contents = fs::read_to_string("Cargo.toml").expect("FileNotFound");
        ("HTTP/1.1 200 OK\r\n", contents)
    } else if buf.starts_with(fav) {
        ("HTTP/1.1 404 NOT FOUND\r\n", String::from(""))
    } else {
        let msg = "
        <h1>Message</h1>
        <p>Hello World!</p>
        ";
        ("HTTP/1.1 200 OK\r\n", String::from(msg))
    };
    let status = format!("{}Content-Type: html\r\nContent-Length: {}\r\n\r\n", status_line, contents.len());
    ts.write(status.as_bytes()).unwrap();
    ts.write(contents.as_bytes()).unwrap();
    ts.flush().unwrap();
}
```

่ฆ็น๏ผ

- `bind(addr)` ๆนๆณ่ฟๅ `Result<T, E>` ๆไธพ็ฑปๅ๏ผ็ปๅฎๆๅๅฐฑๅฏไปฅๅพๅฐ TcpListener ๅฎไพ๏ผ
- `incoming()` ๆนๆณ่ฟๅไธไธชๆฐธไธ่ฟๅ None ็่ฟญไปฃๅจ๏ผๅๅฎขๆท็ซฏๅปบ็ซ่ฟๆฅๅฐฑ่ฟๅไธไธชๆตๅฏน่ฑก๏ผ
- std::fs ๆไปถ็ณป็ปๆจกๅๆไพๅฝๆฐๆไฝๆไปถ๏ผ
- std::io::prelude The I/O Prelude ๆไพๆไปถๆไฝๆนๆณ็ๅฎ็ฐ๏ผ
- `read(&mut buffer)` ่ฏปๅ่ฏทๆฑๆตๆฐๆฎ๏ผ
- `write(&mut buffer)` ๅๅฅๅๅบๆตๆฐๆฎ๏ผ

ไฝฟ็จ String::from_utf8_lossy ๆนๆณๅฏไปฅๅฎฝๆพๅค็้ UTF8 ็ผ็ ๅๅฎน๏ผไผไฝฟ็จ U+FFFD REPLACEMENT CHARACTER ๅณ ๏ฟฝ ็ฌฆๅทๅปๆฟๆข้ๆณๅญ็ฌฆใ

ไฝฟ็จ autocannon ่ฟ่กๆต่ฏ๏ผ

    $ autocannon -c 100 -d 5 -p 2 http://localhost/i
    Running 5s test @ http://localhost/i
    100 connections with 2 pipelining factor

    โโโโโโโโโโโฌโโโโโโโโโฌโโโโโโโโโโฌโโโโโโโโโโฌโโโโโโโโโโฌโโโโโโโโโโโโโฌโโโโโโโโโโโโฌโโโโโโโโโโ
    โ Stat    โ 2.5%   โ 50%     โ 97.5%   โ 99%     โ Avg        โ Stdev     โ Max     โ
    โโโโโโโโโโโผโโโโโโโโโผโโโโโโโโโโผโโโโโโโโโโผโโโโโโโโโโผโโโโโโโโโโโโโผโโโโโโโโโโโโผโโโโโโโโโโค
    โ Latency โ 269 ms โ 1762 ms โ 3091 ms โ 3144 ms โ 1745.47 ms โ 829.25 ms โ 3220 ms โ
    โโโโโโโโโโโดโโโโโโโโโดโโโโโโโโโโดโโโโโโโโโโดโโโโโโโโโโดโโโโโโโโโโโโโดโโโโโโโโโโโโดโโโโโโโโโโ
    โโโโโโโโโโโโโฌโโโโโโโโโฌโโโโโโโโโฌโโโโโโโโโฌโโโโโโโโโฌโโโโโโโโโฌโโโโโโโโโโฌโโโโโโโโโ
    โ Stat      โ 1%     โ 2.5%   โ 50%    โ 97.5%  โ Avg    โ Stdev   โ Min    โ
    โโโโโโโโโโโโโผโโโโโโโโโผโโโโโโโโโผโโโโโโโโโผโโโโโโโโโผโโโโโโโโโผโโโโโโโโโโผโโโโโโโโโค
    โ Req/Sec   โ 1631   โ 1631   โ 2585   โ 2813   โ 2413   โ 419.27  โ 1631   โ
    โโโโโโโโโโโโโผโโโโโโโโโผโโโโโโโโโผโโโโโโโโโผโโโโโโโโโผโโโโโโโโโผโโโโโโโโโโผโโโโโโโโโค
    โ Bytes/Sec โ 197 kB โ 197 kB โ 313 kB โ 340 kB โ 292 kB โ 50.7 kB โ 197 kB โ
    โโโโโโโโโโโโโดโโโโโโโโโดโโโโโโโโโดโโโโโโโโโดโโโโโโโโโดโโโโโโโโโดโโโโโโโโโโดโโโโโโโโโ

    Req/Bytes counts sampled once per second.

    12k requests in 5.07s, 1.46 MB read
    13k errors (0 timeouts)

่ฟไธชๅ็บฟ็จๅฎ็ฐ็ Web ๆๅกๅจ็ๅๅบๆ็ๅนถไธ้ซ๏ผๅ ไธบๆฏไธชๅฎขๆท็ซฏ่ฟๆฅ้ฝ้่ฆ็ญๅพๅไธไธช่ฟๆฅๅค็ๅฎๆๅๅ่ท่ฟๅค็๏ผ้่ฆไฝฟ็จๅค็บฟ็จๅฏนๅถ่ฟ่กๆน้ ใ

้ๅธธ๏ผไฝฟ็จ็บฟ็จๆฑ  thread pool ๆฏไธไธชไธ้็ๆนๆก๏ผ่ฎพ็ฝฎไธๅฎๆฐ้็็บฟ็จๆฅๅค็ๅฎขๆท็ซฏ่ฟๆฅ๏ผๆฏไธช็บฟ็จๅจๅค็ๅฎ
ไธไธช่ฟๆฅๅๅฐฑ่ฟๅฅ็ฉบ้ฒ็ถๆ๏ผ็ญๅพๆฐ็่ฟๆฅ่ฟๅฅใ่ฟ็งๆนๆกๆฏๅ็ฌไธไธช็บฟ็จๅฏนๅบไธไธช่ฟๆฅ็ๆนๆกๆด่็่ตๆบ๏ผ็ปๅ 
single-threaded async I/O ๅฏไปฅๅฎ็ฐๆง่ฝ้ๅธธ้ซ็ๆๅกๅจใๅนถไธ๏ผ็ฑไบ็บฟ็จๆฐ้ๅฏๆง๏ผ่ฟ็งๆนๆกๆดๅฎนๆๅบไป
DoS - Denial of Service ๆปๅป๏ผไธไผๅ ไธบๅคง้ๆถๅฅ็ๆปๅป่ฏทๆฑ่ๅฏผ่ดๆๅกๅจๅฎๆบใ

ไฝฟ็จ`unwrap`ๆนๆณ็ๅๅ ๆฏๆไปฌ็ฅ้ๅคฑ่ดฅๆๅฝขไธไผๅ็๏ผไฝๆฏ็ผ่ฏๅจไธ็ฅ้่ฟไธ็นใ

ๅฆๅค๏ผๆๅกๅจไนๆฒกๆๅฏนๅฏไปฅๅจๅค็่ฟ็จไธญๅบ็ฐไธญๆญ่ฟๆฅ็ๆๅฝข่ฟ่กๅค็๏ผๅฏนไปปไฝๅทฒ็ปไธญๆญ่ฟๆฅ็`TcpStream`ๅฏน่ฑก่ฟ่กๆไฝ้ฝไผๅฏผ่ดๅค็็บฟ็จ panicใ

ๅจๅค็ๅฝๆฐไธญ๏ผ่ฏปๅๆฐๆฎๆถ้่ฆๅคๆญไธไธ๏ผ

```rust,ignore
if let Ok(size) = ts.read(&mut buf) {
    println!("Read TcpStream bytes {}.", size);
}else{
    println!("Fail to read TcpStream.");
    return ;
}
```

่ฆๅนถๅๅค็่ฏทๆฑ๏ผๅฏไปฅๆๅค็งๅนถๅ็ผ็จๆจกๅ๏ผ

- fork/join model
- single-threaded async I/O model
- multi-threaded async I/O model

ๆ็ฎๅ็ดๆฅ็ๅนถๅ็ผ็จๆจกๅๅฐฑๆฏ fork/join ๆจกๅ๏ผๅฎไธบๆฏไธช่ฏทๆฑ็ๆไธไธชไธ็จ็บฟ็จๅปๅค็่ฟๆฅใๅ ไธบ่ฟ็งๆจกๅ
็็บฟ็จๅๆข้ข็น๏ผๅฎ่ฆๆฑ็็ณป็ป็่ตๆบๆดๅค๏ผ

```rust,ignore
use std::{
    fs,
    io::{prelude::*, BufReader},
    net::{TcpListener, TcpStream},
    thread,
    time::Duration,
};

fn main() {
    let listener = TcpListener::bind("127.0.0.1:7878").unwrap();

    for stream in listener.incoming() {
        let stream = stream.unwrap();

        thread::spawn(|| {
            handle_connection(stream);
        });
    }
}

fn handle_connection(mut stream: TcpStream) {
    let buf_reader = BufReader::new(&mut stream);
    let request_line = buf_reader.lines().next().unwrap().unwrap();

    let (status_line, filename) = match &request_line[..] {
        "GET / HTTP/1.1" => ("HTTP/1.1 200 OK", "hello.html"),
        "GET /sleep HTTP/1.1" => {
            thread::sleep(Duration::from_secs(5));
            ("HTTP/1.1 200 OK", "hello.html")
        }
        _ => ("HTTP/1.1 404 NOT FOUND", "404.html"),
    };

    let contents = fs::read_to_string(filename).unwrap();
    let length = contents.len();

    let response =
        format!("{status_line}\r\nContent-Length: {length}\r\n\r\n{contents}");

    stream.write_all(response.as_bytes()).unwrap();
}
```


## โก Thread Pool ็บฟ็จๆฑ ๅฎ็ฐ
- https://crates.io/crates/scheduled-thread-pool
- https://doc.rust-lang.org/book/ch20-02-multithreaded.html
- https://doc.rust-lang.org/book/ch20-03-graceful-shutdown-and-cleanup.html

ๆฑ ๅๆๆฏ (Pool) ๆฏไธ็งๅพๅธธ่ง็็ผ็จๆๅทงๅ็ผ็จๆจกๅผ๏ผๅธธ่ง็ๆฑ ๅๆๆฏ็ๅบ็จๆ๏ผ็บฟ็จๆฑ ใๅๅญๆฑ ใๆฐๆฎๅบ่ฟๆฅๆฑ ็ญใ
ๅจๅค็บฟ็จ็ผ็จไธญ๏ผไฝฟ็จ็บฟ็จๆฑ ๆๆฏ๏ผๅฏไปฅๅจไปปๅกๅๆข้ๅคงๆถๆๆพไผๅๅบ็จๆง่ฝ๏ผ้ไฝๅ ๆไฝ็ณป็ป้ข็นๅๆข็บฟ็จๅผ่ตท็ๅผ้ใ
็บฟ็จๆฑ ๅฏไปฅไฝฟ็จ็บฟ็จๅฎนๅจๅฐๅทฒ็ปๅๅปบๅฅฝ็็บฟ็จ็ฎก็่ตทๆฅ๏ผ็บฟ็จๆง่กๅฎๆไปปๅกๅ่ฟๅฅ็ฉบ้ฒ็ถๆ๏ผๅนถไธไผ่ขซ้ๆฏ๏ผ่ๆฏ
็ฎก็่ตทๆฅ๏ผๅจไธๆฌก้่ฆๆง่กไปปๅกๆถ้ๅคไฝฟ็จ๏ผๅๅฐไบไธๆไฝ็ณป็ปๅฑ้ขไธ็ๆไฝ๏ผๆๅไบๆ็ใ

็ฐๅจๆฅ่ฎพ่ฎก็บฟ็จๆฑ ๆฅๅฃ๏ผ้่ฆ ThreadPool ๅฏไปฅ้็ฝฎ็บฟ็จๆฐ้ๅณๅฏ๏ผๆไพไธไธช `execute()` ๆนๆณๆฅๅค็ๅฎขๆท็ซฏ่ฏทๆฑ๏ผ

```rust,ignore
use hello::ThreadPool;
use std::fs;
use std::io::prelude::*;
use std::net::TcpListener;
use std::net::TcpStream;
use std::thread;
use std::time::Duration;

fn main() {
    let listener = TcpListener::bind("127.0.0.1:7878").unwrap();
    let pool = ThreadPool::new(4);

    for stream in listener.incoming().take(2) {
        let stream = stream.unwrap();

        pool.execute(|| {
            handle_connection(stream);
        });
    }

    println!("Shutting down.");
}

fn handle_connection(mut stream: TcpStream) {
    let mut buffer = [0; 1024];
    stream.read(&mut buffer).unwrap();

    let get = b"GET / HTTP/1.1\r\n";
    let sleep = b"GET /sleep HTTP/1.1\r\n";

    let (status_line, filename) = if buffer.starts_with(get) {
        ("HTTP/1.1 200 OK", "hello.html")
    } else if buffer.starts_with(sleep) {
        thread::sleep(Duration::from_secs(5));
        ("HTTP/1.1 200 OK", "hello.html")
    } else {
        ("HTTP/1.1 404 NOT FOUND", "404.html")
    };

    let contents = fs::read_to_string(filename).unwrap();

    let response = format!(
        "{}\r\nContent-Length: {}\r\n\r\n{}",
        status_line,
        contents.len(),
        contents
    );

    stream.write_all(response.as_bytes()).unwrap();
    stream.flush().unwrap();
}
```

็ฎๅ `ThreadPool` ่ฟๆฒกๆๅฎ็ฐ๏ผไนๆฒกๆๅฎ็ฐ `execute()` ๆนๆณ๏ผไธไธๆญฅๅฐฑ้่ฆๅปๅฎ็ฐๅฎไปฌใๅฆๆๅฐ่ฏ็ผ่ฏๅฎ๏ผ
็ผ่ฏๅจไผๆ็คบๆฒกๆ็ธๅบๆนๆณ็ๅฎ็ฐ๏ผ่ฟ็งๆ นๆฎ็ผ่ฏๅจๆ็คบ่ฟ่ก็ๅผๅๆต็จ็งฐไธบ Compiler Driven Developmentใ

ๅฆๅค๏ผ่ฟ้่ฆๆฝ่ฑกไธไธชๅทฅไฝ็บฟ็จ `Worker` ๅฏน่ฑกๆฅ็ฎก็็บฟ็จ็่ฟ่ก๏ผๅนถไฟๅญๅจ็บฟ็จๆฑ ไฟๅ็้ๅไธญ๏ผๆฏไธชๅทฅไฝ็บฟ็จ
ๅจๆง่กไปฃ็ ๆถๅฐฑๅๅปบๆฐ็็บฟ็จ๏ผๅฎๆๅๅฐฑ่ฟๅฅ็ฉบ้ฒ็ถๆใ

ๅทฅไฝ็บฟ็จไฝฟ็จ็ฎก้่ฟ่ก้ไฟก๏ผๅช้ๆฅๆถไป็บฟ็จๆฑ ไผ ้่ฟๆฅ็ๅฐๅฎขๆท่ฟๆฅไปปๅก๏ผไปฅๅ็ปๆๆถๆฏ็ๅค็ๅณๅฏใๆไปฅ๏ผ้่ฆ
ๅจ็บฟ็จๆฑ ๅฏน่ฑกไธญๅๅปบ็ฎก้๏ผๅนถๅฐๆฅๆถ็ซฏไบค็ป Worker ไปฅๆฅๆถ็บฟ็จๆฑ ไธญ้่ฟๅ้็ซฏไผ ้ๆฅ่ฟ็ๆถๆฏใ

็บฟ็จๆฑ ๅจๅฎไพๅๆถๅฐฑๅๅปบๅทฅไฝ็บฟ็จ๏ผๅนถ็ฑๅทฅไฝ็บฟ็จๆง่ก็บฟ็จ็ๅญตๅๅฝๆฐ๏ผๅๅฉ็ฎก้็ `recv()` ๆนๆณ็้ปๅกๅ่ฝ๏ผ
ๅฏไปฅ็ปๅ `loop` ๅพช็ฏ็ปๆๆฅๆ็ปญไธๆญๅฐๆง่ก๏ผ่ฟๆฅๅค็ -> ๅฎๆๅค็ -> ่ฟๅฅ็ฉบ้ฒ -> ๅค็ๆฐ่ฟๆฅใ

็บฟ็จๆฑ ้่ฆๅจ `execute()` ๆนๆณๅฐๅฎขๆท่ฟๆฅ็ๅค็ๅฝๆฐ้่ฟ็ฎก้ๆถๆฏ่ฝฌๅ็ปๅทฅไฝ็บฟ็จ๏ผ็ฑๅทฅไฝ็บฟ็จๆง่กๅค็ๅฝๆฐ๏ผ

```rust,ignore
    pub fn spawn<F, T>(f: F) -> JoinHandle<T> 
    where
        // F: FnOnce() -> T + Send + 'static,
        F: FnOnce() -> T,
        F: Send + 'static,
        T: Send + 'static, 
```

ๆ นๆฎ Traits ๆฉๅฑ็ๅ้จๅฏ็ฅ๏ผ้ญๅๆ Fn, FnMut, FnOnce ็ญๅบๆฌๆนๅผ๏ผ่ `spawn` ๆนๆณ่ฆๆฑ FnOnce๏ผ
ๅณ้่ฆ็งปๅจๅผ็จ็ๅค้จๆฐๆฎๆๆๆใๅ ๆญคๅฎ็ฐ็บฟ็จๆฑ ็ `execute()` ๆนๆณไน้่ฆๆฅๆถไธไธช F ็ฑปๅ็ๅๆฐ๏ผ
ๆณจๆ๏ผไผ ๅฅ็ Fn ่ฟๅฎ็ฐไบ Send ่กจ็คบๅจ็บฟ็จ้ด็งปๅจๆๆๆๅทๆ็บฟ็จๅฎๅจ็นๆง๏ผ่ฟๆ `'static` ็ๅฝๅจๆใ

ไธบไบๆดๅฅฝๅฐ็ป็ปไปฃ็ ๆไปถ๏ผๅฐ็บฟ็จๆฑ ้จๅไปฃ็ ๅๅฐ lib.rs ๆไปถ๏ผไฝไธบๅบๆไปถใ

ไธป็จๅบ server.rs ๅ client.rs ๅๅซไฝ็จๆๅกๅจๅๅฎขๆท็ซฏ็จๅบ๏ผๅฏไปฅๆพๅฅ bin ็ฎๅฝไธญ๏ผ็ปๆๅฆไธ๏ผ

    src
     +-- bin
     |    +-- server.rs
     |    +-- client.rs
     +-- lib.rs

ๆณจๆ๏ผๅๅปบๅทฅ็จๆถไฝฟ็จ็ๆฏ webserver ไฝไธบๅ็งฐ๏ผๅผ็จๅบ้่ฆๆๅฎๅฝๅๅทฅ็จๅฝๅ็ฉบ้ด๏ผ

    use webserver::ThreadPool;

ๆง่ก็จๅบๅฏไปฅไฝฟ็จไปฅไธๅฝไปค๏ผ

    cargo run --release --bin server
    cargo run --release --bin client

ๅฎขๆท็ซฏ็จๅบๅชๆฏ็ฎๅ็ Echo Client๏ผ

```rust,ignore
use std::io::{self, Read};
use std::net::TcpStream;
use std::io::prelude::*;
// use std::io::Write;
use std::env;

fn main() {
  let args:Vec<String> = env::args().collect();
  if args.len()==1 {
    println!("Usage: {} 127.0.0.1:80", args[0]);
    return ;
  }
  let mut stream = TcpStream::connect(&args[1])
      .expect("Couldn't connect to the server...");
  stream.set_nonblocking(true).expect("set_nonblocking call failed");

  stream.write("GET / HTTP/1.1\r\n".as_bytes());

  let mut buf = vec![];
  loop {
      match stream.read_to_end(&mut buf) {
          Ok(_) => break,
          Err(ref e) if e.kind() == io::ErrorKind::WouldBlock => {
            // wait until network socket is ready, typically implemented
            // via platform-specific APIs such as epoll or IOCP
            // wait_for_fd();
          }
          Err(e) => panic!("encountered IO error: {}", e),
      };
  };
  println!("{}", String::from_utf8_lossy(&buf[..]));
}
```

ไปฅไธๆฏๆๅกๅจ็ซฏ้่ฆ็ๅบๆฌ็ฑปๅๅฎไน๏ผ

```rust,ignore
use std::{
    sync::{mpsc, Arc, Mutex},
    thread,
};

pub struct ThreadPool {
    workers: Vec<Worker>,
    sender: mpsc::Sender<Message>,
}

struct Worker {
    id: usize,
    thread: Option<thread::JoinHandle<()>>,
}

type Job = Box<dyn FnOnce() + Send + 'static>;

enum Message {
    NewJob(Job),
    Terminate,
}
```

้คไบๅบๆฌ็็บฟ็จๆฑ ใๅทฅไฝ็บฟ็จๅฏน่ฑก๏ผ่ฟๅฎไนไบ๏ผ

- `Job` ็ฑปๅ๏ผไฝฟ็จๆบ่ฝๆ้ๅ่ฃ่ฟๆฅๅค็ๅฝๆฐๅฐ่ฃๅ็้ญๅ๏ผๅนถ้่ฟๆถๆฏๅจ็ฎก้ไธญไผ ้๏ผ็ฑ็บฟ็จๆฑ ๅ้็ปๅทฅไฝ็บฟ็จใ
- `Message` ๆถๆฏๆไธพ็ฑปๅ๏ผไธป่ฆๆ `NewJob(Job)` ๅ `Terminate` ไธค็งๅๅผ๏ผๅ่็จไบๅณ้ญ็บฟ็จไปปๅกๅพช็ฏใ


ๆฅไธๆฅๅฐฑ้่ฆๅฎ็ฐ็บฟ็จๆฑ ๅๅทฅไฝ็บฟ็จ๏ผๅ่ไปฃ็ ๏ผ

- ch20-web-server/no-listing-07-final-code/src/main.rs
- ch20-web-server/no-listing-07-final-code/src/lib.rs

```rust,ignore
impl ThreadPool {
    pub fn new(size: usize) -> ThreadPool {
        
        assert!(size > 0);

        let (sender, receiver) = mpsc::channel();
        let receiver = Arc::new(Mutex::new(receiver));
        let mut workers = Vec::with_capacity(size);

        for id in 0..size {
            workers.push(Worker::new(id, Arc::clone(&receiver)));
        }

        ThreadPool { workers, sender }
    }

    pub fn execute<F>(&self, f: F)
    where
        F: FnOnce() + Send + 'static,
    {
        let job = Box::new(f);
        self.sender.send(Message::NewJob(job)).unwrap();
    }
}

impl Drop for ThreadPool {
    fn drop(&mut self) {

        for _ in &mut self.workers {
            if let Err(val) = self.sender.send(Message::Terminate){
                println!("Fail to send Terminate to worker: {}.", val);
            }
        }

        for worker in &mut self.workers {
            if let Some(thread) = worker.thread.take() {
                if let Err(inf) = thread.join(){
                    println!("Fail to join thread: {:?}", inf);
                }
            }
        }
    }
}

impl Worker {
    fn new(id: usize, receiver: Arc<Mutex<mpsc::Receiver<Message>>>) -> Worker {
        let name = "Worker-".to_string() + &id.to_string();
        let builder = thread::Builder::new().name(name.into());
        // let thread = thread::spawn(move || loop {
        let thread = builder.spawn(move || loop {
            let message = receiver.lock().unwrap().recv().unwrap();

            match message {
                Message::NewJob(job) => {
                    job();
                }
                Message::Terminate => {
                    break;
                }
            }
        }).unwrap();

        Worker { id, thread: Some(thread), }
    }
}
```

่ฆ็น๏ผ

- ไฝฟ็จๆญ่จ็กฎไฟๆกไปถๆ็ซ `assert!(size > 0);`๏ผๅ้ๅ้ไฝๅบๆไพ็ `with_capacity` ๅๅปบๆๅฎๅฎน้็ๅ้ๅ่กจใ
- ไฝฟ็จไธๆๆ ๆณจ่งฃไปฅ็ป็จๆทๆไพๅธฎๅฉไฟกๆฏ `/// markdown`๏ผ็จๆทๅจไฝฟ็จ่ฟไธชๅบๆถไผๅพๅฐๆ็คบไฟกๆฏใ
- ไฝฟ็จ้ญๅๅฐๅฎขๆท่ฟๆฅ็ๅค็ๅฝๆฐๅไธไธๆ็ป็ปๅจไธ่ตท๏ผ่ๅไบค็ป็บฟ็จๆฑ ็ๅชๆฏไธไธชๆ ๅๆฐ็้ญๅๅฝๆฐใ
- ๅจๅทฅไฝ็บฟ็จไธญ๏ผๅๅฉ็ฎก้็ `recv()` ๆนๆณ็้ปๅกๅ่ฝๅ `loop` ๅพช็ฏ็ปๆๆฅๆ็ปญไธๆญๅฐๆง่กๅฎขๆท่ฟๆฅๅค็ใ
- ไฝฟ็จ `Vec<Worker>` ๅ้ๅ่กจไฟๅญๅทฅไฝ็บฟ็จๅฏน่ฑกใ
- ไธบ็บฟ็จๆฑ ๅฎ็ฐ `Drop` ไปฅๅจ็ปๆ็จๅบๆถๆธ็็บฟ็จ๏ผ่ฟๆ ทๅฐฑๅฏไปฅๅจ็บฟ็จๆฑ ๅฎไพ็ปๆ็ๅฝๅจๆๆถๆธ็ๆๅทฅไฝ็บฟ็จใ
- ไธบไบๅจๅทฅไฝ็บฟ็จไธญๅฎ็ฐ็บฟ็จๅฎๅจๅฑไบซ็ฎก้ๅฏน่ฑก๏ผไฝฟ็จ `Mutex` ๅฏน็ฎก็ๅฏน่ฑก่ฟ่กๅ่ฃใ
- ๅนถไธไฝฟ็จ `Arc` ไธบๅ่ฃไบ็ฎก้ๅฏน่ฑก็ไบๆฅ้ๅๅปบๅคๆๆๆ๏ผไฝฟๅพๆฅๆถ็ซฏๅฏไปฅ่ขซๅคไธชๅทฅไฝ็บฟ็จไฝฟ็จ๏ผไปฅๆฅๆถ็บฟ็จๆฑ ไธญไผ ้็ๆถๆฏใ

ๆณจๆ๏ผWorker ไธญ็ thread ไธๆฏ็ดๆฅไฟๅญ `JoinHandle<()>` ่ๆฏๅฐ็บฟ็จๅฅๆๅฐ่ฃๅจ Option ็ฑปๅๅใ
ๅ ไธบ้่ฆๅจๅคไธช็บฟ็จ็งๆง่กๅ็บฟ็จ็`join`๏ผๅณ้่ฆๅคไธชๅฏๅๅผ็จใ่ๅฎไปฌๆฒกๆๅฎ็ฐ `Copy` trait๏ผๅณๆฒกๆ
ๅคๆๆๆ็ๅฏน่ฑกไธ่ฝๅจๅคไธช็บฟ็จไธญ็งปๅจๅไธ็ๆๆๆใ

็ฎก้็ Receiver ๅฏน่ฑกไธ่ฝ็ดๆฅๅจๅคไธช็บฟ็จ้ด่ฝฌ็งป๏ผๅฎๆฒกๆๅฎ็ฐ Copy Trait๏ผๆ ๆณๅจ่ฝฌ็งปๆๆๆ่ฟ็จไธญ่ฟ่ก
ๆท่ด๏ผๅฐฑๆ ๆณๅจๅฐๅถๆๆๆๅจๅคไธช็บฟ็จ้ด็งปๅจใๆ็ฎๅ็ๆนๆณๅฐฑๆฏไฝฟ็จ `Arc<Mutex<T>>` ่ฟ่กๅฐ่ฃ๏ผๅฎ็ฐ็บฟ็จ
ๅฎๅจ็ๅคๆๆๆใ

Mutex ๅฏน่ฑกๆฒกๆ `unlock` ๆนๆณ๏ผ่ทๅ้ๅ่ฟๅไธไธช `MutexGuard<T>` ๅฏน่ฑก๏ผๅฐ่ฃๅจ `LockResult` ๅ๏ผ
ๅฎๅจ็ๅฝๅจๆ็ปๆๆถ๏ผไผ่ชๅจๅฏน้ๅฎๅฏน่ฑก่ฟ่ก่งฃ้ใ 

ๅฆๆ๏ผๆๆๅญ็บฟ็จๅจ้จ็ปๆๅ๏ผๅๆฌก้่ฟ็ฎก้ๅ้ๆถๆฏ๏ผ็ฑไบๆฒกๆๆฅๆถๆน๏ผๆไปฅ `send` ๆนๆณไผ่ฟๅไธไธช `SendError`ใ

ๆต่ฏๅค็บฟ็จ็ๆฌ็ WebServer๏ผ

    loadtest -n 1000 -c 100 --rps 100 http://localhost/i
    autocannon -c 100 -d 5 -p 2 http://localhost/i

ๅจๅค็บฟ็จ่ฟ่กๆกไปถไธ๏ผautocannon ๆต่ฏไผๅบ็ฐๅคง้ไธญๆญ่ฟๆฅ็ๆๅต๏ผ

    $ autocannon -c 100 -d 5 -p 2 http://localhost/i
    Running 5s test @ http://localhost/i
    100 connections with 2 pipelining factor

    โโโโโโโโโโโฌโโโโโโโโโโฌโโโโโโโโโโฌโโโโโโโโโโฌโโโโโโโโโโฌโโโโโโโโโโโโโฌโโโโโโโโโโโโโฌโโโโโโโโโโ
    โ Stat    โ 2.5%    โ 50%     โ 97.5%   โ 99%     โ Avg        โ Stdev      โ Max     โ
    โโโโโโโโโโโผโโโโโโโโโโผโโโโโโโโโโผโโโโโโโโโโผโโโโโโโโโโผโโโโโโโโโโโโโผโโโโโโโโโโโโโผโโโโโโโโโโค
    โ Latency โ 1766 ms โ 2620 ms โ 4923 ms โ 4985 ms โ 3229.41 ms โ 1002.56 ms โ 4985 ms โ
    โโโโโโโโโโโดโโโโโโโโโโดโโโโโโโโโโดโโโโโโโโโโดโโโโโโโโโโดโโโโโโโโโโโโโดโโโโโโโโโโโโโดโโโโโโโโโโ
    โโโโโโโโโโโโโฌโโโโโโฌโโโโโโโฌโโโโโโโโโโฌโโโโโโโโโโฌโโโโโโโโโฌโโโโโโโโโโฌโโโโโโโโโโ
    โ Stat      โ 1%  โ 2.5% โ 50%     โ 97.5%   โ Avg    โ Stdev   โ Min     โ
    โโโโโโโโโโโโโผโโโโโโผโโโโโโโผโโโโโโโโโโผโโโโโโโโโโผโโโโโโโโโผโโโโโโโโโโผโโโโโโโโโโค
    โ Req/Sec   โ 0   โ 0    โ 13      โ 42      โ 18.2   โ 14.75   โ 9       โ
    โโโโโโโโโโโโโผโโโโโโผโโโโโโโผโโโโโโโโโโผโโโโโโโโโโผโโโโโโโโโผโโโโโโโโโโผโโโโโโโโโโค
    โ Bytes/Sec โ 0 B โ 0 B  โ 1.57 kB โ 5.08 kB โ 2.2 kB โ 1.78 kB โ 1.09 kB โ
    โโโโโโโโโโโโโดโโโโโโดโโโโโโโดโโโโโโโโโโดโโโโโโโโโโดโโโโโโโโโดโโโโโโโโโโดโโโโโโโโโโ

    Req/Bytes counts sampled once per second.

    91 requests in 5.08s, 11 kB read
    16k errors (0 timeouts)



# ๐ก๐  Game
- Bevy data-driven game engine built in Rust https://bevyengine.org
- Bevy Getting Started https://bevyengine.org/learn/book/getting-started/
- Amethyst Game Engine https://github.com/amethyst/amethyst
- Amethyst Documentation https://book.amethyst.rs/book/stable/
- cargo-apk https://lib.rs/crates/cargo-apk
- Rust-SDL2 https://crates.io/crates/sdl2
- Safe Rust wrapper around the Vulkan API http://vulkano.rs
- Elegant and safe OpenGL wrapper https://crates.io/crates/glium
- glutin - OpenGL, UTilities and INput https://crates.io/crates/glutin
- Code generators for creating bindings to the Khronos OpenGL APIs https://crates.io/crates/gl_generator

SDL ๅผๅ้่ฆๅฐๅฎๆน็ฝ็ซไธ่ฝฝ้ข็ผ่ฏ็ๅบๆไปถ๏ผๅฆ Windows ๅนณๅฐๅฐฑไธ่ฝฝ SDL2-devel-2.0.x-VC.zip๏ผ่งฃๅๅฐ Cargo toolchain ็ผๅญ็ฎๅฝไธญ๏ผๅนถไธๅฐ SDL2.dll ๆท่ดๅฐ็จๅบ่ฟ่ก็ฎๅฝ๏ผๆๅฏไปฅ้่ฟ็ฏๅขๅ้ๆ็ดขๅฐ็็ฎๅฝใ

ไนๅฏไปฅไฝฟ็จ Vcpkg ๅทฅๅทๅฎ่ฃ๏ผ

    vcpkg install sdl2:x64-windows
    vcpkg install sdl2-gfx:x64-windows
    vcpkg install sdl2-mixer:x64-windows
    vcpkg install sdl2-mixer[mpg123]:x64-windows
    vcpkg install sdl2-mixer[libvorbis]:x64-windows
    vcpkg install sdl2-net:x64-windows
    vcpkg install sdl2-ttf:x64-windows


# ๐ก๐  WebAssembly
- [Rust Wasm](https://rustwasm.github.io/docs/wasm-pack/introduction.html)
- [Rust ๐ฆ and WebAssembly ๐ธ](https://rustwasm.github.io/docs/book/)
- [Developer's Guide](https://webassembly.org/getting-started/developers-guide/)
- [Rust and WebAssembly Working Group](https://github.com/rustwasm/team)
- [Using WebAssembly](https://deno.land/manual@v1.29.0/runtime/webassembly)
- [The `wasm-bindgen` Guide](https://rustwasm.github.io/wasm-bindgen/)
- [WebAssembly MDN](https://developer.mozilla.org/en-US/docs/WebAssembly)
- [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Compiling from Rust to WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm)
- [The WebAssembly System Interface (WASI)](https://wasi.dev/)
- [The AssemblyScript Book](https://www.assemblyscript.org/introduction.html)

WebAssembly ๅๆฑ็ผ่ฏญ่จๆฏๆไธไบไธๅ็๏ผๅฎๆฏไธไธชๆฆๅฟตๆบไธ็ๆบๅจ่ฏญ่จ๏ผไฝฟ็จ็ๅญ่็ ไธบ่ๆๆไปคใๅฎๆฏ็ดๆฅ
่ฟ่ก JavaScript ไปฃ็ ๆดๅฟซๆด็ดๆฅ็่ฝฌๆขๆๆบๅจไปฃ็ ๏ผไฝๅฎไปฌไธ็ดๆฅๅ็นๅฎ็กฌไปถ็็นๅฎๆบๅจไปฃ็ ๅฏนๅบใWeb ๅบ็จ
ๅคงๅคๆฐๆง่ฝ้ฎ้ข้ฝๅจๅผบๅถๅธๅฑๅ่ฟๅค็็ปๅถ๏ผๅถๅฐไน้่ฆๆง่กไธไบ่ๆถ็่ฎก็ฎๅฏ้ไปปๅก๏ผ่ฟๆญฃๆฏๅญ่็ ็็จๅคใ

Note: For this to work, .wasm files should be returned with an **application/wasm** MIME type by the server.

WebAssembly ๅญ่็ ๆไปถๆๆๆฌๆ ผๅผ .wat ๅไบ่ฟๅถๆ ผๅผ .wasm ไธค็ง๏ผๅฏ็จ wat2wasm ๅทฅๅท่ฟ่ก่ฝฌๆขใ

WebAssembly key concepts

- **Module**: Represents a WebAssembly binary that has been compiled by the browser 
    into executable machine code. A Module is stateless and thus, like a Blob, 
    can be explicitly shared between windows and workers (via postMessage()). 
    A Module declares imports and exports just like an ES module.
- **Memory**: A resizable ArrayBuffer that contains the linear array of bytes 
    read and written by WebAssembly's low-level memory access instructions.
- **Table**: A resizable typed array of references (e.g. to functions) that could 
    not otherwise be stored as raw bytes in Memory (for safety and portability reasons).
- **Instance**: A Module paired with all the state it uses at runtime including 
    a Memory, Table, and set of imported values. An Instance is like an ES module 
    that has been loaded into a particular global with a particular set of imports.

ๅคงๅคๆฐ WebAssembly ๆจกๅๅผๅ่ไฝฟ็จ C ๅ Rust ็ผๅไปฃ็ ๏ผ็ถๅ็ผ่ฏๆ WebAssembly๏ผไนๆๅถไป้ๅพใ

    git clone --depth=1 git@github.com:rustwasm/wasm-bindgen.git
    git clone --depth=1 git@github.com:bytecodealliance/wasmtime

็ฎๅ WASM ๅฎ้ๆๅค็งๅทฅไฝๆจกๅผ๏ผEmscriptenใWASIๅๆ ไปปไฝไพ่ต็็บฏ็ฒนๆจกๅผ๏ผๅๅซๅฏนๅบ Rust ็ผ่ฏ็ฎๆ ๏ผ

002. wasm32_unknown_emscripten ๐
003. wasm32_unknown_unknown ๐ ่ฃธ็ฎๆ ๏ผ่ฏฅ่พๅบๅฏนๅถ็ฏๅขๆฒกๆไปปไฝๅ่ฎพใ
001. wasm64_unknown_unknown ๐ ่ฃธ็ฎๆ ๏ผ่ฏฅ่พๅบๅฏนๅถ็ฏๅขๆฒกๆไปปไฝๅ่ฎพใ
004. wasm32_wasi ๐ 2019ๅนดๅ่ตท็ไธไธชๅฎ้ช็ฎๆ ๏ผๅฐๅจๅๅฑไธญ๏ผไธๅบ่ฟไบไพ่ตใ

The WebAssembly System Interface (WASI) ๆฏไธไธชๆฉๅฑ็ WASM ็ฏๅข่ง่๏ผๅฎ่ฏๅพๆจกๆไธไธชๅฎๆด็
ๆไฝ็ณป็ป๏ผๅๆฌไธๆไปถ็ณป็ปใ็ฝ็ป็ญ็ณป็ป่ฐ็จ
ๅ่ฝ๏ผไปฅๆไพไธไธช Web ไนๅค็่ฟ่ก็ฏๅขใ

Standardizing WASI: A system interface to run WebAssembly outside the web

If you've got the Rust compiler installed then you can take some Rust source code:

    fn main() {
        println!("Hello, world!");
    }

and compile/run it with:

```sh
    $ rustup target add wasm32-wasi
    $ rustc hello.rs --target wasm32-wasi
    $ wasmtime hello.wasm
    Hello, world!
```

็ธๆฏไนไธ๏ผwasm32 ๆช็ฅ็ฑปๅ็ฎๆ ๆฏไธไธช bare metal-like target๏ผๅ ๆญค็ฎๆ ไธๅ็ปไธญ็ๆช็ฅ้จๅๆชๆๅฎ
ๆไฝ็ณป็ป๏ผๅฎๅจ็บฏ่ฎก็ฎไนๅคๆฒกๆๆไพๅคชๅคๅ่ฝใunknown ๅณ่กจ็คบๆฒกๆๅค้จๆไฝ็ณป็ป็ฏๅขไพ่ตใ

ๅฎ่ฃๅฅฝ Rust ็ฏๅขไนๅไป็ถ้่ฆไธไธช wasm-pack ๅทฅๅทๅ๏ผๅฎ้่ฆ Node.js ็ npm ๆจกๅ็ฎก็ๅทฅๅทใๅๆถ
ๅฎ่ฃไธไธช cargo-generate ๅทฅๅท๏ผๆนไพฟ็จไบไป git ไปๅบไธญๅ้ๅทฅ็จๆจกๆฟ๏ผ็ถๅๅ้ wasm ๆจกๆฟ้กน็ฎ๏ผ

    cargo install wasm-pack
    cargo install cargo-generate
    cargo generate --git https://github.com/rustwasm/wasm-pack-template

    wasm-pack build

    wasm-pack test --headless --firefox
    wasm-pack test --headless --chrome
    wasm-pack test --node

You can create a new Rust-WebAssembly webpack project by using the rustwasm webpack-template.

    npm init rust-webpack my-app

ๆๅจๅๅปบ WebAssembly ้กน็ฎๅช้่ฆไฝฟ็จ `cargo init --lib .` ๅฝไปคๅๅปบไธไธชๅบ้กน็ฎ๏ผๅนถไฟฎๆน Cargo.toml
้็ฝฎๅผ็จไพ่ต wasm-bindgen๏ผๅนถไธ่ฆๆๅฎๅบ็ฑปๅไธบ cdylib๏ผ

    [package]
    name = "rusty-react"
    version = "1.0.0"
    edition = "2021"

    [lib]
    crate-type = ["cdylib"]

    [dependencies]
    wasm-bindgen = "0.2"

ๅถๅไฝฟ็จ wasm_bindgen ็ผๅไปฃ็ ๏ผ
Import JavaScript things into Rust and export Rust things to JavaScript.


```rust,ignore
    use wasm_bindgen::prelude::*;

    // Import the `window.alert` function from the Web.
    #[wasm_bindgen]
    extern "C" {
        fn alert(s: &str);
    }

    // Export a `greet` function from Rust to JavaScript, that alerts a
    // hello message.
    #[wasm_bindgen]
    pub fn greet(name: &str) {
        alert(&format!("Hello, {}!", name));
    }
```

ๆณจๆ๏ผwasm-pack ้ป่ฎคๆๅปบๆนๅผๆฏ bundler๏ผๆฏ npm ๅฏผๅฅ็ๅใๅฆๆไฝฟ็จ web ๆๅปบๅๅฏไปฅๅจๆฏๆ module 
่ๆฌ็ๆๆฐๆต่งๅจไธ็ดๆฅๅ ่ฝฝ๏ผๅช้่ฆๅฐ็ๆ็ๅฅๅฃ่ๆฌ้่ฟ import ่ฏญๅฅๅฏผๅฅๅณๅฏไฝฟ็จ๏ผ

    wasm-pack build --target bundler    --out-name wasm_bundler
    wasm-pack build --target nodejs     --out-name wasm_nodejs
    wasm-pack build --target web        --out-name wasm_web
    wasm-pack build --target no-modules --out-name wasm_nm

ๅฅๅฃ่ๆฌ้ป่ฎคๅ็งฐไธบ project_name.js๏ผๅฏไปฅๆๅฎ็ผ่ฏ่พๅบๆไปถๅ็งฐใ

Web ้กต้ขๅๅฎนๅ่ๆฌๅฏไปฅๅ่ไปฅไธไปฃ็ ็ๆฎต๏ผ

```html,ignore
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>WebAssembly test</title>
</head>
<body>
<!-- <script type="module" src="wasm.js"></script> -->
<script type="module">
  import init, { greet } from "./wasm.js";
  init().then( module => {
    module.greet(); // or greet();
  })
</script>
</body>
</html>
```

่ฟ่ก Web ๆๅกๅจๆๅผไปฅไธ้กต้ขๅณๅฏไปฅๆต่ฏ WebAssembly ็จๅบ๏ผๅฏไปฅไฝฟ็จไธ็จ็ Web ๆๅกๅจ๏ผๅฆ Nginx๏ผ
ๆ่ไฝฟ็จ PHPใPython ็ๅผๅ็จ็ Web ๆต่ฏๆๅกๅจ๏ผ

    php -S localhost:80 -t .
    python3 -m http.server --bind 127.0.0.1 80 --directory .

่ฆๅจ Rust ไธญ่ฐ็จ Web API ๆ JavaScript ๅฏน่ฑก๏ผๅฐฑ้่ฆ้่ฟ web_sys ๅ js_sys ๆจกๅ๏ผไฝฟ็จๅฝไปค
cargo add ๆทปๅ ็ธๅบ็ๆจกๅใไพๅฆ๏ผไปฅไธๅ่ฝ้็ฝฎไฝฟ็จๅฏผๅฅ็ console ๆงๅถๅฐไฟกๆฏๆฅๅฟๆนๆณใ

    [dependencies.web-sys]
    version = "0.3.60"
    features = [
      'console',
      'Document',
      'Element',
      'HtmlElement',
      'Node',
      'Window',
    ]

ๆๅจๅฏผๅฅ Web API ๅ่๏ผ

```rust,ignore
// lifted from the `console_log` example
#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(a: &str);
}

macro_rules! console_log {
    ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
}


// extern crate web_sys;

// A macro to provide `println!(..)`-style syntax for `console.log` logging.
macro_rules! log {
    ( $( $t:tt )* ) => {
        web_sys::console::log_1(&format!( $( $t )* ).into());
    }
}
```

WebAssembly modules declare a sequence of imports, each with a module name and an 
import name. The module name for an extern { ... } block can be specified using 
#[link(wasm_import_module)], currently it defaults to "env".

Exports have only a single name. In addition to any extern functions the WebAssembly 
instance's default linear memory is exported as "memory".


```rust,ignore
// import a JS function called `foo` from the module `mod`
#[link(wasm_import_module = "mod")]
extern { fn foo(); }

// export a Rust function called `bar`
#[no_mangle]
pub extern fn bar() { /* ... */ }
```

Because of wasm's limited value types, these functions must operate only on primitive numeric types.

ไปฅไธๅๅปบไธไธช้กน็ฎ๏ผ็ดๆฅๅจ Rust ไปฃ็ ไธญๆไฝ Web Canvas ็ปๅพ๏ผๅๅปบไธไธช lib ๅทฅ็จ๏ผๅนถๅฐ crate-type
่ฎพ็ฝฎไธบ cdylib ็ฑปๅ๏ผ็ถๅๆทปๅ  web-sys ๅ wasm-bindgen ไธคไธชไพ่ต๏ผๆณจๆ features ่ฎพ็ฝฎไบ็ธๅณ็
Web Canvas API ็นๆง๏ผ

```sh
    > cargo new --lib wasm-canvas
    > cargo add --features console,CanvasRenderingContext2d,Document,Element,HtmlCanvasElement,Window web-sys
    > cargo add wasm-bindgen
```

```sh
    [package]
    name = "wasm-canvas"
    version = "0.1.0"
    edition = "2021"

    # See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

    [lib]
    crate-type = ["cdylib"]

    [dependencies]
    wasm-bindgen = "0.2.83"
    web-sys = { version = "0.3.60", features = ["console", "CanvasRenderingContext2d", "Document", "Element", "HtmlCanvasElement", "Window"] }

    [dev-dependencies]
    wasm-bindgen-test = "0.2"
```

็ผๅ lib.rs ไปฃ็ ๏ผ

```rust,ignore
use std::f64;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;

#[wasm_bindgen(start)]
pub fn start() {
    let document = web_sys::window().unwrap().document().unwrap();
    let canvas = document.get_element_by_id("canvas").unwrap();
    let canvas: web_sys::HtmlCanvasElement = canvas
        .dyn_into::<web_sys::HtmlCanvasElement>()
        .map_err(|_|())
        .unwrap();

    let context = canvas
        .get_context("2d").unwrap().unwrap()
        .dyn_into::<web_sys::CanvasRenderingContext2d>().unwrap();

    context.begin_path();

    // Draw the outer circle.
    context.arc(75.0, 75.0, 50.0, 0.0, f64::consts::PI * 2.0).unwrap();

    // Darw the mouth.
    context.move_to(110.0, 75.0);
    context.arc(75.0, 75.0, 35.0, 0.0, f64::consts::PI).unwrap();

    // Darw eyes
    context.move_to(65.0, 65.0);
    context.arc(60.0, 65.0, 5.0, 0.0, f64::consts::PI * 2.0).unwrap();
    context.move_to(90.0, 65.0);
    context.arc(90.0, 65.0, 5.0, 0.0, f64::consts::PI * 2.0).unwrap();

    context.stroke();
}
```

็ผ่ฏ้กน็ฎ๏ผ็ๆๅฅๅฃ่ๆฌ wasm2d.js ๅนถๅจ้กต้ขไธญๅ ่ฝฝๅฎ๏ผๅ ไธบไฝฟ็จไบๅฅๅฃๆ ๆณจ #[wasm_bindgen(start)]๏ผ
ๅๅงๅๆนๆณๆง่กๅๅฐฑไผ่ชๅจ็ป็ป๏ผ

```sh
    wasm-pack build --target web --out-name wasm2d
```

HTML ้กต้ขๆจกๆฟๅ่๏ผ

```html,ignore
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>WebAssembly Canvas2D</title>
    </head>
    <body>
      <canvas id="canvas" height="150" width="150"></canvas>
      <script type="module">
        import init from "./wasm2d.js";
        init().then( module => {
          console.log(module, init);
        })
      </script>
    </body>
    </html>
```

ๆๆกฃๅ่๏ผ

- [wasm-bindgen canvas online](https://rustwasm.github.io/wasm-bindgen/exbuild/canvas/)
- [wasm-bindgen canvas code](https://github.com/rustwasm/wasm-bindgen/tree/master/examples/canvas)
- [MDN Canvas API tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)


How to Add WebAssembly Support to a General-Purpose Crate

This build in-itself did not do much for us, weโll need to add a useful taraget 
for our builds. To add a new target for Rust, we can run the following command:

    $ rustup target add wasm32-unknown-unknown

    $ cargo build --target wasm32-unknown-unknown

Letโs install the wasm-bindgen-cli command-line application so we can leverage the WebAssembly code we created:

    $ cargo install -f wasm-bindgen-cli

Once installed, we can take our WebAssembly code generated by Rust and create a wrapping around it for our React code:

    $ wasm-bindgen target/wasm32-unknown-unknown/debug/simple.wasm --out-dir build

This will dump the Javascript wrapping and optimized Wasm code into our build directory ready to be used by React. And thatโs what weโll do next!


The quickest, most efficient way to fetch a wasm module is using the newer 
WebAssembly.instantiateStreaming() method, which can take a fetch() call as its 
first argument, and will handle fetching, compiling, and instantiating the module 
in one step, accessing the raw byte code as it streams from the server:

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (results) => {
    // Do something with the results!
  }
);
```

If we used the older WebAssembly.instantiate() method, which doesn't work on the
direct stream, we'd need an extra step of converting the fetched byte code to an 
ArrayBuffer, like so:

```js
fetch("module.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((results) => {
    // Do something with the results!
  });
```

ๆณจๆ๏ผimportObject ๅฏน่ฑกๅๅซ่ฆๅฏผๅฅๅฐๆฐๅๅปบ็ๅฎไพไธญ็ๅผ๏ผไพๅฆๅฝๆฐๆ WebAssembly.Memory ๅๅญๅฏน่ฑกใ
็ผ่ฏๆจกๅๆ WebAssembly ็ๆฏไธชๅฃฐๆๅฏผๅฅๅฟ้กปๆไธไธชๅน้ๅฑๆง๏ผๅฆๅๅผๅ LinkErrorใไธ่ฌ๏ผๅฏผๅฅๆไปถ่ชๅจ็ๆใ



# ๐ก๐  OpenCV in Rust
- https://docs.rs/opencv/0.49.1/opencv/
- https://github.com/twistedfall/opencv-rust
- Rust OpenCV bindings https://crates.io/crates/opencv

ไพ่ต้กน๏ผ

    [dependencies]
    opencv = "0.49.*"




# ๐ก๐  rustc-serialize & Serde
- https://docs.rs/rustc-serialize/0.3.24/rustc_serialize/
- https://crates.io/crates/serde
- https://serde.rs/#data-formats
- https://lib.rs/crates/serde_json

ๆ่ฐไธฒ่กๅๅฐฑๆฏๅฐ็จๅบฆๅจๅๅญไธญ็ๆฐๆฎ็ปๆ่ฝฌๅไธบๅญ็ฌฆไธฒใๆไบ่ฟๅถๆฐๆฎไฟๅญ่ตทๆฅ๏ผ้ๅธธ็จไบ็ฝ็ป้ดไผ ้ๆฐๆฎๆ่
็จๅบ็ๅญๆกฃ่ฏปๆกฃๅ่ฝ็ญ็ญใๆฏๅฆๅฐ Struct ๅฏน่ฑก่ฝฌๆขไธบ JSON ๅญ็ฌฆไธฒไฟๅญๅฐๆไปถ๏ผ่ฏปๆกฃๆถๅไปๆไปถไธญๅ ่ฝฝๅๅฎน๏ผ
ๅนถ่ฟๅๅๅๆ ท็ Struct ๅฏน่ฑกๅณไธบๅไธฒ่กๅใ

Serialization ๅ Deserialization ๅฏ่ฏไฝไธฒ่กๅใๅไธฒ่กๅ๏ผไนๅฏไปฅ่ฏไฝๅบๅๅๆๅๅบๅๅใ

rustc-serialize ไธฒ่กๅๅทฅๅทๆไพ 3 ไธชๆจกๅ๏ผ็ฎๅๅคไบๅๆด็ถๆ๏ผๆจ่ๅ่ฝๅๆง่ฝๆดๅฅฝ็ Serde๏ผ

- base64    Base64 binary-to-text encoding
- hex   Hex binary-to-text encoding
- json  JSON parsing and serialization

Serde ๅทฅๅทๅๅญๅณ serializing ๅ deserializing ไธคไธชๅ่ฏ็ๅ็ปๅ็ฎๅใ

Serde ๅทฅๅทๅฏไปฅๅฐๆฐๆฎ็ปๆๆๅทฒ็ฅ็ๆฐๆฎๆ ผๅผ่ฟ่กๅบๅๅๆๅๅบๅๅ๏ผSerde ๆไพไธคๅฅๅฏนๅบ็ๆฅๅฃ๏ผๅๅซๆฏ
ไธฒ่กๅๆจกๅ ser ๅๅไธฒ่กๅๆจกๅ de๏ผไธคไธชๆจกๅ้ฝๅๅซไธๅฏน้่ฆๆฅๅฃ๏ผ

- SerializeใDeserialize ไปฃ่กจไบๆฐๆฎ็ปๆ๏ผๅฏไปฅๅฏนไปปไฝ Serde ๅทฅๅทๆฏๆ็ๆฐๆฎๆ ผๅผ่ฟ่ก่ฝฌๅ๏ผ
- SerializerใDeserializer ไปฃ่กจๆฐๆฎๆ ผๅผ๏ผๅฏไปฅๅฏนไปปไฝ Serde ๅทฅๅทๆฏๆ็ๆฐๆฎ็ปๆ่ฟ่ก่ฝฌๅ๏ผ

ๆฏๆ็ๆฐๆฎๆ ผๅผๅฏไปฅๅๅบๅๅๆๆฏๆ็ๆฐๆฎ็ปๆ๏ผๆฏๆ็ๆฐๆฎ็ปๆไนๅฏไปฅๅบๅๅๆๆฏๆ็ๆฐๆฎๆ ผๅผ๏ผ็ฌฌไธๆน้่ฟ
ๆทปๅ ๆฅๅฃๆฏๆๅฐฑๅฏไปฅๆฉๅฑ Serde ็ๆ ผๅผๆฏๆใ

Serde ไธบ SerializerใDeserializer ๅฎ็ฐไบ Rust 29 ็งๆฐๆฎ็ฑปๅ็ๆฏๆ๏ผๅทฅไฝๆต็จๅพๅฆไธ๏ผ

    ================ -->  Serialize   -->  Serializer --> ===========
    Serde Data Model                                      Data Format
    ================ <-- Deserializer <-- Deserialize <-- ===========


้็ฝฎ Cargo.toml ไฝฟ็จ๏ผ

    [dependencies]
    rustc-serialize = "0.3"

and this to your crate root:

    extern crate rustc_serialize;

JSON ๅญ็ฌฆไธฒไธ็ปๆไฝไน้ด็่ฝฌๆข็คบไพ๏ผ

```rust,ignore
extern crate rustc_serialize;
use rustc_serialize::json;

// Automatically generate `RustcDecodable` and `RustcEncodable` trait
// implementations
#[derive(RustcDecodable, RustcEncodable)]
pub struct TestStruct  {
    data_int: u8,
    data_str: String,
    data_vector: Vec<u8>,
}

fn main() {
    let object = TestStruct {
        data_int: 1,
        data_str: "homura".to_string(),
        data_vector: vec![2,3,4,5],
    };

    // Serialize using `json::encode`
    let encoded = json::encode(&object).unwrap();

    // Deserialize using `json::decode`
    let decoded: TestStruct = json::decode(&encoded).unwrap();
}
```

Verbose example of ToJson usage

```rust,ignore
extern crate rustc_serialize;
use std::collections::BTreeMap;
use rustc_serialize::json::{self, Json, ToJson};

// Only generate `Decodable` trait implementation
#[derive(RustcDecodable)]
pub struct TestStruct {
    data_int: u8,
    data_str: String,
    data_vector: Vec<u8>,
}

// Specify encoding method manually
impl ToJson for TestStruct {
    fn to_json(&self) -> Json {
        let mut d = BTreeMap::new();
        // All standard types implement `to_json()`, so use it
        d.insert("data_int".to_string(), self.data_int.to_json());
        d.insert("data_str".to_string(), self.data_str.to_json());
        d.insert("data_vector".to_string(), self.data_vector.to_json());
        Json::Object(d)
    }
}

fn main() {
    // Serialize using `ToJson`
    let input_data = TestStruct {
        data_int: 1,
        data_str: "madoka".to_string(),
        data_vector: vec![2,3,4,5],
    };
    let json_obj: Json = input_data.to_json();
    let json_str: String = json_obj.to_string();

    // Deserialize like before
    let decoded: TestStruct = json::decode(&json_str).unwrap();
}
```

Serde in action

```rust,ignore
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
struct Point {
    x: i32,
    y: i32,
}

fn main() {
    let point = Point { x: 1, y: 2 };

    // Convert the Point to a JSON string.
    let serialized = serde_json::to_string(&point).unwrap();

    // Prints serialized = {"x":1,"y":2}
    println!("serialized = {}", serialized);

    // Convert the JSON string back to a Point.
    let deserialized: Point = serde_json::from_str(&serialized).unwrap();

    // Prints deserialized = Point { x: 1, y: 2 }
    println!("deserialized = {:?}", deserialized);
}
```

้ๅ include_str ๅฎ๏ผๅฏไปฅ็ดๆฅๅฐ json ๆไปถ่ฝฌๆขไธบๅญ็ฌฆไธฒ็ฑปๅ๏ผๅ่งฃ้ๆๅฏน่ฑกใRust ่ฟๅฏไปฅไฝฟ็จ็ณป็ป็ฏๅข
ๅ้๏ผไปฅไธไปฃ็ ็ๆฎตๅฐไป็ฏๅขๅ้ๆๅฎ็่ทฏๅพไธญๅผๅฅ Rust ไปฃ็ ๏ผ

    include!(concat!(env!("OUT_DIR"), "/icalls.rs"));

ๅ่ฎพ point.json ๅๅซไปฅไธๅๅฎน๏ผ่งฃๆไธบ Point ๅฏน่ฑกๆถ๏ผไผๅฟฝ็ฅๅคไฝ็ๅญๆฎต๏ผ

    {"x":1, "y":2, "z": 3}

```py
    // Deserialize from json file
    let path = "../data/point.json";
    let json = include_str!("../data/point.json");
    println!("deserialized {} = {:#?}", path, serde_json::from_str::<Point>(&json).unwrap());
```


# ๐ก๐  webview_sys
- https://docs.rs/web-view/0.6.3/web_view/
- https://lib.rs/crates/webview-sys
- https://github.com/webview/webview
- https://github.com/Boscop/web-view/tree/master/webview-examples/examples
- https://tauri.app/v1/guides/getting-started/setup/
- https://docs.rs/tauri/1.2.3/tauri/

Webview ๅฏไปฅ็จๆฅๅผๅๅบไบ Web ็ๆก้ขๅบ็จ๏ผTauri ๆฏไธไธช็ฑปไผผ electron ็่ทจๅนณๅฐๅบไบ Web ็
ๆก้ขๅบ็จๆกๆถ๏ผไฝๆด่ฝป้ๅใ

ไฟฎๆน้็ฝฎๆไปถ Cargo.toml ๆ นๆฎ้่ฆๆทปๅ ไพ่ต๏ผ

```rust,ignore
[dependencies]
web-view = { version = "0.7" }
web-view = { version = "0.7", features = ["edge"] }
web-view = { git = "https://github.com/Boscop/web-view", rev = "0d92ed6" }
```

ๆๅฎ Edge ๆต่งๅจๅๆ ธ้่ฆ Windows 10 SDK๏ผๅฏไปฅๅจ Visual Studio ๅฎ่ฃ็จๅบไธญๅขๅ ใ

็ถๅ็ผๅๆต่ฏ็จๅบ๏ผ

```rust,ignore
use web_view::*;

fn main() {
    let html_content = "<html><body><h1>Hello, World!</h1></body></html>";
    let url = "file:///C:/coding/md-code/deno/demos/src/douyin/videos.html";

    web_view::builder()
        .title("My Project")
        .content(Content::Url(url))
        // .content(Content::Html(html_content))
        .size(320, 480)
        .resizable(false)
        .debug(true)
        .user_data(())
        .invoke_handler(|_webview, _arg| Ok(()))
        .run()
        .unwrap();
}
```

้กต้ขไบคไบ๏ผ

```rust,ignore
// ... Simplified for the sake of brevity.
web_view::builder()    
    .invoke_handler(|webview, arg| {
        match arg {
            "test_one" => {
                // Do something in Rust!
            }
            "test_two" => {
                // Invoke a JavaScript function!
                webview.eval(&format!("myFunction({}, {})", 123, 456))
            }
            _ => unimplemented!(),
        };
    })
```

```rust,ignore
// Executes our "invoke_handler" - passing the value "test_one" as the second parameter.
external.invoke('test_one');

// Executes our "invoke_handler", which in turn calls "myFunction" below.
external.invoke('test_two');

function myFunction(paramOne, paramTwo) {
    console.log(paramOne);
    console.log(paramTwo);
}
```


Boscop web-view ้กน็ฎ็ฎก็ๅ่๏ผ้กน็ฎ็ปๆๅฆไธ๏ผ

- ไธป้กน็ฎๅๅซไธคไธชๅญ้กน็ฎ webview-sys ๅ webview-examples๏ผ
- ไธป้กน็ฎไพ่ตๅญ้กน็ฎ webview-sys๏ผ่ฟไธชๅญ้กน็ฎ่ด่ดฃ็ปๅฎ Webview C++ API๏ผ
- ๅญ้กน็ฎ webview-examples ไพ่ตไธป้กน็ฎ๏ผ่ฟไธชๅญ้กน็ฎๅชๆไพ็คบ่็จๅบ๏ผ

ไธป้กน็ฎ้็ฝฎๆไปถ๏ผ

```sh
    [package]
    name = "web-view"
    version = "0.7.3"
    authors = ["Boscop", "zxey <r.hozak@seznam.cz>", "Sam Green <sam.green81@gmail.com>"]
    readme = "README.md"
    license = "MIT"
    repository = "https://github.com/Boscop/web-view"
    description = "Rust bindings for webview, a tiny cross-platform library to render web-based GUIs for desktop applications"
    keywords = ["web", "gui", "desktop", "electron", "webkit"]
    categories = ["gui", "web-programming", "api-bindings", "rendering", "visualization"]
    exclude = ["webview-sys/**", "webview-examples/**", ".github/**", "Cargo.lock"]

    [dependencies]
    urlencoding = "1.1"
    webview-sys = { path = "webview-sys", version = "0.6.2" }
    boxfnonce = "0.1"
    tinyfiledialogs = "3.3"

    [features]
    edge = ["webview-sys/edge"]

    [workspace]
    members = [
        "webview-sys",
        "webview-examples",
    ]
```

webview-sys ้็ฝฎๆไปถ๏ผ

```sh
    [package]
    name = "webview-sys"
    version = "0.6.2"
    authors = ["Boscop", "zxey <r.hozak@seznam.cz>"]
    license = "MIT"
    repository = "https://github.com/Boscop/web-view"
    description = "Rust native ffi bindings for webview"
    keywords = ["web", "gui", "desktop", "electron", "webkit"]
    categories = ["gui", "web-programming", "api-bindings", "rendering", "visualization"]
    build = "build.rs"
    links = "webview"
    edition = "2018"
    exclude = ["Cargo.lock"]

    [lib]
    name = "webview_sys"
    path = "lib.rs"

    [features]
    edge = []

    [target.'cfg(all(target_family = "unix", not(target_os = "macos")))'.dependencies]
    javascriptcore-rs-sys = "0.2"
    gtk-sys = "0.10"
    glib-sys = "0.10"
    gobject-sys = "0.10"
    webkit2gtk-sys = { version = "0.12.0", features = ["v2_8"] }
    gdk-sys = "0.10"
    gio-sys = "0.10"
    libc = "0.2"

    [build-dependencies]
    cc = "1"
    pkg-config = "0.3"
```

webview-examples ้็ฝฎๆไปถ๏ผ

```sh
    [package]
    name = "webview-examples"
    version = "0.1.0"
    authors = ["Boscop", "zxey <r.hozak@seznam.cz>", "Sam Green <sam.green81@gmail.com>"]
    license = "MIT"
    repository = "https://github.com/Boscop/web-view"
    description = "Examples of using Web frontend technologies in desktop apps using the web-view crate"
    keywords = ["web", "gui", "desktop", "electron", "webkit"]
    categories = ["gui", "web-programming", "api-bindings", "rendering", "visualization"]
    exclude = ["examples/todo-ps/dist/**/*", "examples/elm-counter/index.html"]
    publish = false

    [dependencies]
    web-view = { path = "..", version = "0.7.3" }

    [features]
    edge = ["web-view/edge"]

    [dev-dependencies]
    tinyfiledialogs = "3.3"
    serde = "1.0"
    serde_derive = "1.0"
    serde_json = "1.0"
    actix-web = "1.0"
    actix-rt = "0.2"
    rust-embed = "5.1.0"
    mime_guess = "2.0.1"
    futures = "0.1"
    grep = "0.2.4"
    walkdir = "2.3.1"
```


# ๐ก๐  Ruffle SWF Player
- https://ruffle.rs/#usage

ๅ้ไปฃ็ ๏ผ

    git clone git@github.com:ruffle-rs/ruffle.git

API ๅผๅฎนๆง

- ActionScript 1 & 2 Language 85%
- ActionScript 1 & 2 API 50%
- ActionScript 3 Language 10%
- ActionScript 3 API 5%

ActionScript is the language which Flash uses to make interactive content. It is primarily split into two groups: "AVM 1" (ActionScript 1 & 2) and "AVM 2" (ActionScript 3).

AVM 1 is ActionScript 1 and ActionScript 2. All movies made before Flash Player 9 (June 2006) will be made with AVM 1, and it remained supported & available to authors until the release of Flash Professional CC (2013).

AVM2 is ActionScript 3, which was introduced with Flash Player 9 (June 2006). After the release of Flash Professional CC (2013), authors are required to use ActionScript 3 - making any movie made after that date very likely to fall under this category.

Ruffle is still working on the foundational support for AVM 2, and does not yet support any content that requires it. A warning will be placed in the log when you attempt to play AVM 2 content, for this reason. We do plan on supporting this soon!




# ๐ก๐  Rust Reference
- The Rust Standard Library https://doc.rust-lang.org/stable/std/index.html
- The Rust Reference https://doc.rust-lang.org/reference/introduction.html
- Rust Language Cheat Sheet https://cheats.rs

## โก Primitive Types

- `never`   โค The `!` type, also called "never".
- `array`   A fixed-size array, denoted [T; N], for the element type, T, and the non-negative compile-time constant size, N.
- `bool`    The boolean type.
- `char`    A character type.
- `f32` A 32-bit floating point type (specifically, the "binary32" type defined in IEEE 754-2008).
- `f64` A 64-bit floating point type (specifically, the "binary64" type defined in IEEE 754-2008).
- `fn`  Function pointers, like fn(usize) -> bool.
- `i8`  The 8-bit signed integer type.
- `i16` The 16-bit signed integer type.
- `i32` The 32-bit signed integer type.
- `i64` The 64-bit signed integer type.
- `i128`    The 128-bit signed integer type.
- `isize`   The pointer-sized signed integer type.
- `pointer` Raw, unsafe pointers, *const T, and *mut T.
- `reference`   References, both shared and mutable.
- `slice`   A dynamically-sized view into a contiguous sequence, [T]. Contiguous ๆๆๆฏๅๅ็ด ้ดไฟๆ็ธๅ็้ด้ใ
- `str` String slices.
- `tuple`   A finite heterogeneous sequence, (T, U, ..).
- `u8`  The 8-bit unsigned integer type.
- `u16` The 16-bit unsigned integer type.
- `u32` The 32-bit unsigned integer type.
- `u64` The 64-bit unsigned integer type.
- `u128`    The 128-bit unsigned integer type.
- `unit`    The `()` type, also called "unit".
- `usize`   The pointer-sized unsigned integer type.

## โก Modules

- `backtrace`   โค Support for capturing a stack backtrace of an OS thread
- `intrinsics`  โค Compiler intrinsics.
- `lazy`    โค Lazy values and one-time initialization of static data.
- `raw` โค Contains struct definitions for the layout of compiler built-in types.
- `alloc`   Memory allocation APIs.
- `any` This module implements the Any trait, which enables dynamic typing of any 'static type through runtime reflection.
- `array`   ๅฎ็ฐๅ Eq ไธๆ ท็ๅฎ้ฟๆฐ็ปใ
- `ascii`   Operations on ASCII strings and characters.
- `borrow`  A module for working with borrowed data.
- `boxed`   A pointer type for heap allocation.
- `cell`    Shareable mutable containers.
- `char`    A character type.
- `clone`   The Clone trait for types that cannot be 'implicitly copied'.
- `cmp` Functionality for ordering and comparison.
- `collections` Collection types.
- `convert` Traits for conversions between types.
- `default` The Default trait for types which may have meaningful default values.
- `env` Inspection and manipulation of the process's environment.
- `error`   Traits for working with Errors.
- `f32` This module provides constants which are specific to the implementation of the f32 floating point data type.
- `f64` This module provides constants which are specific to the implementation of the f64 floating point data type.
- `ffi` Utilities related to FFI bindings.
- `fmt` Utilities for formatting and printing Strings.
- `fs`  Filesystem manipulation operations.
- `future`  Asynchronous values.
- `hash`    Generic hashing support.
- `hint`    Hints to compiler that affects how code should be emitted or optimized. Hints may be compile time or runtime.
- `i8`  The 8-bit signed integer type.
- `i16` The 16-bit signed integer type.
- `i32` The 32-bit signed integer type.
- `i64` The 64-bit signed integer type.
- `i128`    The 128-bit signed integer type.
- `io`  Traits, helpers, and type definitions for core I/O functionality.
- `isize`   The pointer-sized signed integer type.
- `iter`    Composable external iteration.
- `marker`  Primitive traits and types representing basic properties of types.
- `mem` Basic functions for dealing with memory.
- `net` Networking primitives for TCP/UDP communication.
- `num` Additional functionality for numerics.
- `ops` Overloadable operators.
- `option`  Optional values.
- `os`  OS-specific functionality.
- `panic`   Panic support in the standard library.
- `path`    Cross-platform path manipulation.
- `pin` Types that pin data to its location in memory.
- `prelude` The Rust Prelude.
- `primitive`   This module reexports the primitive types to allow usage that is not possibly shadowed by other declared types.
- `process` A module for working with processes.
- `ptr` Manually manage memory through raw pointers.
- `rc`  Single-threaded reference-counting pointers. 'Rc' stands for 'Reference Counted'.
- `result`  Error handling with the Result type.
- `slice`   A dynamically-sized view into a contiguous sequence, [T].
- `str` Unicode string slices.
- `string`  A UTF-8โencoded, growable string.
- `sync`    Useful synchronization primitives.
- `task`    Types and Traits for working with asynchronous tasks.
- `thread`  Native threads.
- `time`    Temporal quantification.
- `u8`  The 8-bit unsigned integer type.
- `u16` The 16-bit unsigned integer type.
- `u32` The 32-bit unsigned integer type.
- `u64` The 64-bit unsigned integer type.
- `u128`    The 128-bit unsigned integer type.
- `usize`   The pointer-sized unsigned integer type.
- `vec` A contiguous growable array type with heap-allocated contents, written Vec<T>.

## โก Macros

- `asm` โค Inline assembly.
- `concat_idents`   โค Concatenates identifiers into one identifier.
- `format_args_nl`  โค Same as format_args, but adds a newline in the end.
- `global_asm`  โค Module-level inline assembly.
- `is_aarch64_feature_detected` โค ๅฆๆๅจ้ aarch64 ๅนณๅฐไฝฟ็จๅ้ปๆญข็ผ่ฏใ
- `is_arm_feature_detected` โค ๅฆๆๅจ้ ARM ๅนณๅฐไฝฟ็จๅ้ปๆญข็ผ่ฏใ
- `is_mips64_feature_detected`  โค ๅฆๆๅจ้ MIPS64 ๅนณๅฐไฝฟ็จๅ้ปๆญข็ผ่ฏใ
- `is_mips_feature_detected`    โค ๅฆๆๅจ้ MIPS ๅนณๅฐไฝฟ็จๅ้ปๆญข็ผ่ฏใ
- `is_powerpc64_feature_detected`   โค ๅฆๆๅจ้ PowerPC64 ๅนณๅฐไฝฟ็จๅ้ปๆญข็ผ่ฏใ
- `is_powerpc_feature_detected` โค ๅฆๆๅจ้ PowerPC ๅนณๅฐไฝฟ็จๅ้ปๆญข็ผ่ฏใ
- `llvm_asm`    โค LLVM-style inline assembly.
- `log_syntax`  โค Prints passed tokens into the standard output.
- `trace_macros`    โค Enables or disables tracing functionality used for debugging other macros.
- `assert`  Asserts that a boolean expression is true at runtime.
- `assert_eq`   Asserts that two expressions are equal to each other (using PartialEq).
- `assert_ne`   Asserts that two expressions are not equal to each other (using PartialEq).
- `cfg` Evaluates boolean combinations of configuration flags at compile-time.
- `column`  Expands to the column number at which it was invoked.
- `compile_error`   Causes compilation to fail with the given error message when encountered.
- `concat`  Concatenates literals into a static string slice.
- `dbg` Prints and returns the value of a given expression for quick and dirty debugging.
- `debug_assert`    Asserts that a boolean expression is true at runtime.
- `debug_assert_eq` Asserts that two expressions are equal to each other.
- `debug_assert_ne` Asserts that two expressions are not equal to each other.
- `env` Inspects an environment variable at compile time.
- `eprint`  Prints to the standard error.
- `eprintln`    Prints to the standard error, with a newline.
- `file`    Expands to the file name in which it was invoked.
- `format`  Creates a String using interpolation of runtime expressions.
- `format_args` Constructs parameters for the other string-formatting macros.
- `include` Parses a file as an expression or an item according to the context.
- `include_bytes`   Includes a file as a reference to a byte array.
- `include_str` Includes a UTF-8 encoded file as a string.
- `is_x86_feature_detected` A macro to test at runtime whether a CPU feature is available on x86/x86-64 platforms.
- `line`    Expands to the line number on which it was invoked.
- `matches` Returns whether the given expression matches any of the given patterns.
- `module_path` Expands to a string that represents the current module path.
- `option_env`  Optionally inspects an environment variable at compile time.
- `panic`   Panics the current thread.
- `print`   Prints to the standard output.
- `println` Prints to the standard output, with a newline.
- `stringify`   Stringifies its arguments.
- `thread_local`    Declare a new thread local storage key of type std::thread::LocalKey.
- `todo`    Indicates unfinished code.
- `try` DeprecatedUnwraps a result or propagates its error.
- `unimplemented`   Indicates unimplemented code by panicking with a message of "not implemented".
- `unreachable` Indicates unreachable code.
- `vec` Creates a Vec containing the arguments.
- `write`   Writes formatted data into a buffer.
- `writeln` Write formatted data into a buffer, with a newline appended.


## โก Keywords

The following keywords currently have the functionality described.

* `as` - perform primitive casting, disambiguate the specific trait containing
  an item, or rename items in `use` and `extern crate` statements
* `async` -  return a `Future` instead of blocking the current thread
* `await` - suspend execution until the result of a `Future` is ready
* `break` - exit a loop immediately
* `const` - define constant items or constant raw pointers
* `continue` - continue to the next loop iteration
* `crate` - link an external crate or a macro variable representing the crate in
  which the macro is defined
* `dyn` - dynamic dispatch to a trait object
* `else` - fallback for `if` and `if let` control flow constructs
* `enum` - define an enumeration
* `extern` - link an external crate, function, or variable
* `false` - Boolean false literal
* `fn` - define a function or the function pointer type
* `for` - loop over items from an iterator, implement a trait, or specify a
  higher-ranked lifetime
* `if` - branch based on the result of a conditional expression
* `impl` - implement inherent or trait functionality
* `in` - part of `for` loop syntax
* `let` - bind a variable
* `loop` - loop unconditionally
* `match` - match a value to patterns
* `mod` - define a module
* `move` - make a closure take ownership of all its captures
* `mut` - denote mutability in references, raw pointers, or pattern bindings
* `pub` - denote public visibility in struct fields, `impl` blocks, or modules
* `ref` - bind by reference
* `return` - return from function
* `Self` - a type alias for the type we are defining or implementing
* `self` - method subject or current module
* `static` - global variable or lifetime lasting the entire program execution
* `struct` - define a structure
* `super` - parent module of the current module
* `trait` - define a trait
* `true` - Boolean true literal
* `type` - define a type alias or associated type
* `union` - define a [union] and is only a keyword when used in a union declaration
* `unsafe` - denote unsafe code, functions, traits, or implementations
* `use` - bring symbols into scope
* `where` - denote clauses that constrain a type
* `while` - loop conditionally based on the result of an expression

Keywords Reserved for Future Use

* `abstract`
* `become`
* `box`
* `do`
* `final`
* `macro`
* `override`
* `priv`
* `try`
* `typeof`
* `unsized`
* `virtual`
* `yield`


## โก Operators and Symbols

This appendix contains a glossary of Rustโs syntax, including operators and
other symbols that appear by themselves or in the context of paths, generics,
trait bounds, macros, attributes, comments, tuples, and brackets.

Table B-1: Operators

| Operator | Example | Explanation | Overloadable? |
|----------|---------|-------------|---------------|
| `!`   | `ident!(...)`, `ident!{...}`, `ident![...]` | Macro expansion | |
| `!`   | `!expr` | Bitwise or logical complement | `Not` |
| `!=`  | `var != expr` | Nonequality comparison | `PartialEq` |
| `%`   | `expr % expr` | Arithmetic remainder | `Rem` |
| `%=`  | `var %= expr` | Arithmetic remainder and assignment | `RemAssign` |
| `&`   | `&expr`, `&mut expr` | Borrow | |
| `&`   | `&type`, `&mut type`, `&'a type`, `&'a mut type` | Borrowed pointer type | |
| `&`   | `expr & expr` | Bitwise AND | `BitAnd` |
| `&=`  | `var &= expr` | Bitwise AND and assignment | `BitAndAssign` |
| `&&`  | `expr && expr` | Short-circuiting logical AND | |
| `*`   | `expr * expr` | Arithmetic multiplication | `Mul` |
| `*=`  | `var *= expr` | Arithmetic multiplication and assignment | `MulAssign` |
| `*`   | `*expr` | Dereference | |
| `*`   | `*const type`, `*mut type` | Raw pointer | |
| `+`   | `trait + trait`, `'a + trait` | Compound type constraint | |
| `+`   | `expr + expr` | Arithmetic addition | `Add` |
| `+=`  | `var += expr` | Arithmetic addition and assignment | `AddAssign` |
| `,`   | `expr, expr` | Argument and element separator | |
| `-`   | `- expr` | Arithmetic negation | `Neg` |
| `-`   | `expr - expr` | Arithmetic subtraction | `Sub` |
| `-=`  | `var -= expr` | Arithmetic subtraction and assignment | `SubAssign` |
| `->`  | `fn(...) -> type`, `|...| -> type|` | Function and closure return type | |
| `.`   | `expr.ident` | Member access | |
| `..`  | `..`, `expr..`, `..expr`, `expr..expr` | Right-exclusive range literal | |
| `..=` | `..=expr`, `expr..=expr` | Right-inclusive range literal | |
| `..`  | `..expr` | Struct literal update syntax | |
| `..`  | `variant(x, ..)`, `struct_type { x, .. }` | โAnd the restโ pattern binding | |
| `...` | `expr...expr` | In a pattern: inclusive range pattern | |
| `/`   | `expr / expr` | Arithmetic division | `Div` |
| `/=`  | `var /= expr` | Arithmetic division and assignment | `DivAssign` |
| `:`   | `pat: type`, `ident: type` | Constraints | |
| `:`   | `ident: expr` | Struct field initializer | |
| `:`   | `'a: loop {...}` | Loop label | |
| `;`   | `expr;`      | Statement and item terminator | |
| `;`   | `[...; len]` | Part of fixed-size array syntax | |
| `<<`  | `expr << expr` | Left-shift | `Shl` |
| `<<=` | `var <<= expr` | Left-shift and assignment | `ShlAssign` |
| `<`   | `expr < expr` | Less than comparison | `PartialOrd` |
| `<=`  | `expr <= expr` | Less than or equal to comparison | `PartialOrd` |
| `=`   | `var = expr`, `ident = type` | Assignment/equivalence | |
| `==`  | `expr == expr` | Equality comparison | `PartialEq` |
| `=>`  | `pat => expr` | Part of match arm syntax | |
| `>`   | `expr > expr` | Greater than comparison | `PartialOrd` |
| `>=`  | `expr >= expr` | Greater than or equal to comparison | `PartialOrd` |
| `>>`  | `expr >> expr` | Right-shift | `Shr` |
| `>>=` | `var >>= expr` | Right-shift and assignment | `ShrAssign` |
| `@`   | `ident @ pat` | Pattern binding | |
| `^`   | `expr ^ expr` | Bitwise exclusive OR | `BitXor` |
| `^=`  | `var ^= expr` | Bitwise exclusive OR and assignment | `BitXorAssign` |
| `|`   | `pat | pat`   | Pattern alternatives | |
| `|`   | `expr | expr` | Bitwise OR | `BitOr` |
| `|=`  | `var |= expr` | Bitwise OR and assignment | `BitOrAssign` |
| `||`  | `expr || expr` | Short-circuiting logical OR | |
| `?`   | `expr?`       | Error propagation | |


Table B-2: Stand-Alone Syntax

| Symbol | Explanation |
|--------|-------------|
| `'ident` | Named lifetime or loop label |
| `...u8`, `...i32`, `...f64`, `...usize`, etc. | Numeric literal of specific type |
| `"..."` | String literal |
| `r"..."`, `r#"..."#`, `r##"..."##`, etc. | Raw string literal, escape characters not processed |
| `b"..."` | Byte string literal; constructs a `[u8]` instead of a string |
| `br"..."`, `br#"..."#`, `br##"..."##`, etc. | Raw byte string literal, combination of raw and byte string literal |
| `'...'` | Character literal |
| `b'...'` | ASCII byte literal |
| `|...| expr` | Closure |
| `!` | Always empty bottom type for diverging functions |
| `_` | โIgnoredโ pattern binding; also used to make integer literals readable |


Table B-3: Path-Related Syntax

| Symbol | Explanation |
|--------|-------------|
| `ident::ident` | Namespace path |
| `::path` | Path relative to the crate root (i.e., an explicitly absolute path) |
| `self::path` | Path relative to the current module (i.e., an explicitly relative path).
| `super::path` | Path relative to the parent of the current module |
| `type::ident`, `<type as trait>::ident` | Associated constants, functions, and types |
| `<type>::...` | Associated item for a type that cannot be directly named (e.g., `<&T>::...`, `<[T]>::...`, etc.) |
| `trait::method(...)` | Disambiguating a method call by naming the trait that defines it |
| `type::method(...)` | Disambiguating a method call by naming the type for which itโs defined |
| `<type as trait>::method(...)` | Disambiguating a method call by naming the trait and type |


Table B-4: Generics

| Symbol | Explanation |
|--------|-------------|
| `path<...>` | Specifies parameters to generic type in a type (e.g., `Vec<u8>`) |
| `path::<...>`, `method::<...>` | Specifies parameters to generic type, function, or method in an expression; often referred to as turbofish (e.g., `"42".parse::<i32>()`) |
| `fn ident<...> ...` | Define generic function |
| `struct ident<...> ...` | Define generic structure |
| `enum ident<...> ...` | Define generic enumeration |
| `impl<...> ...` | Define generic implementation |
| `for<...> type` | Higher-ranked lifetime bounds |
| `type<ident=type>` | A generic type where one or more associated types have specific assignments (e.g., `Iterator<Item=T>`) |

Table B-5: Trait Bound Constraints

| Symbol | Explanation |
|--------|-------------|
| `T: U` | Generic parameter `T` constrained to types that implement `U` |
| `T: 'a` | Generic type `T` must outlive lifetime `'a` (meaning the type cannot transitively contain any references with lifetimes shorter than `'a`) |
| `T : 'static` | Generic type `T` contains no borrowed references other than `'static` ones |
| `'b: 'a` | Generic lifetime `'b` must outlive lifetime `'a` |
| `T: ?Sized` | Allow generic type parameter to be a dynamically sized type |
| `'a + trait`, `trait + trait` | Compound type constraint |

Table B-6: Macros and Attributes

| Symbol | Explanation |
|--------|-------------|
| `#[meta]` | Outer attribute |
| `#![meta]` | Inner attribute |
| `$ident` | Macro substitution |
| `$ident:kind` | Macro capture |
| `$(โฆ)โฆ` | Macro repetition |
| `ident!(...)`, `ident!{...}`, `ident![...]` | Macro invocation |


Table B-7: Comments

| Symbol | Explanation |
|--------|-------------|
| `//` | Line comment |
| `//!` | Inner line doc comment |
| `///` | Outer line doc comment |
| `/*...*/` | Block comment |
| `/*!...*/` | Inner block doc comment |
| `/**...*/` | Outer block doc comment |


Table B-8: Tuples

| Symbol | Explanation |
|--------|-------------|
| `()` | Empty tuple (aka unit), both literal and type |
| `(expr)` | Parenthesized expression |
| `(expr,)` | Single-element tuple expression |
| `(type,)` | Single-element tuple type |
| `(expr, ...)` | Tuple expression |
| `(type, ...)` | Tuple type |
| `expr(expr, ...)` | Function call expression; also used to initialize tuple `struct`s and tuple `enum` variants |
| `expr.0`, `expr.1`, etc. | Tuple indexing |


Table B-9: Curly Brackets

| Context | Explanation |
|---------|-------------|
| `{...}` | Block expression |
| `Type {...}` | `struct` literal |


Table B-10: Square Brackets

| Context | Explanation |
|---------|-------------|
| `[...]` | Array literal |
| `[expr; len]` | Array literal containing `len` copies of `expr` |
| `[type; len]` | Array type containing `len` instances of `type` |
| `expr[expr]` | Collection indexing. Overloadable (`Index`, `IndexMut`) |
| `expr[..]`, `expr[a..]`, `expr[..b]`, `expr[a..b]` | Collection indexing pretending to be collection slicing, using `Range`, `RangeFrom`, `RangeTo`, or `RangeFull` as the โindexโ |


## โก Struct TypeId & Trait Any
- A type to emulate dynamic typing https://static.rust-lang.org/doc/master/std/any/trait.Any.html
- TypeId https://static.rust-lang.org/doc/master/std/any/struct.TypeId.html
- quote! https://docs.rs/quote/1.0.9/quote/
- parser https://docs.rs/syn/1.0.64/syn/
- Rustๅฅๅๆๅ๏ผไธ็ฉๅๅง https://www.jianshu.com/p/f26591569b98
- Introduction to Procedural Macros in Rust https://tinkering.xyz/introduction-to-proc-macros/
- Procedural Macros in Rust 2018 https://blog.rust-lang.org/2018/12/21/Procedural-Macros-in-Rust-2018.html
- 3.2. Procedural Macros https://doc.rust-lang.org/reference/procedural-macros.html

ๅๅฐ reflection ๆๅณ็ๅฏไปฅๅจ่ฟ่กๆถ่ทๅพ็ฑปๅ็ๆๆ่ฏฆ็ปไฟกๆฏ๏ผๅๆฌๅญๆฎตๆนๆณ็ญ๏ผๅนถๅฏไปฅ่ฟ่กๆฟๆขใ

Rust ๅชๆโcompile-time reflectionโ๏ผๅชๆ any ๅฏไปฅ็ฎๆฏ่ตทๅฐไบ้จๅๅๅฐ็ๅ่ฝ๏ผไธ่ฟ็คพๅบๆไบบๅฎ็ฐไบๅฉ็จ่ฟ็จๅฎ reflect ๅฎ็ฐ็็ผ่ฏๆถๅๅฐๅ่ฝ๏ผไปฅๅฎ็ฐไพ่ตๆณจๅฅ็ญๅๅฐๅ่ฝใ

std:any ่ตทๅฐไปฅไธๅ ไธชไฝ็จ๏ผ

- ่ทๅ็ฑปๅ็ๅๅญ
- ่ทๅพๅ้็็ฑปๅ TypeId
- ๅคๆญๅ้ๆฏๅฆๆฏๆๅฎ็ฑปๅ
- ๆ any ่ฝฌๆขๆๆๅฎ็ฑปๅ

- downcast_ref::<T>() ๅฐ็ฑปๅ่ฝฌๅไธบ T๏ผๅถ่ฟๅ็็ฑปๅๆฏ `Option<&T>`
- downcast_mut::<T>() ๅฐ็ฑปๅ่ฝฌๅไธบ T๏ผๅถ่ฟๅ็็ฑปๅๆฏ `Option<&mut T>`
- TypeId::of::<T>() ่ทๅ T ็ฑปๅ TypeId ็ปๆไฝใ
- is::<T>() ๆนๆณๅ็จๆฅๅคๆญๆฏๅฆๆฏๆไธช็ฑปๅใ

```rust,ignore
use std::any::{Any, TypeId};

fn is_string<T: ?Sized + Any>(_s: &T) -> bool {
    TypeId::of::<String>() == TypeId::of::<T>()
}

fn main() {
    assert_eq!(is_string(&0), false);
    assert_eq!(is_string(&"cookie monster".to_string()), true);
}
```

```rust,ignore
use std::any::Any;

fn is_string(s: &(Any + Send)) {
    if s.is::<String>() {
        println!("It's a string!");
    } else {
        println!("Not a string...");
    }
}

fn main() {
    is_string(&0);
    is_string(&"cookie monster".to_string());
}
```

```rust,ignore
use std::fmt::Debug;
use std::any::Any;

// Logger function for any type that implements Debug.
fn do_log<T: Any + Debug>(value: &T) {
    let value_any = value as &Any;

    // try to convert our value to a String.  If successful, we want to
    // output the String's length as well as its value.  If not, it's a
    // different type: just print it out unadorned.
    match value_any.downcast_ref::<String>() {
        Some(as_string) => {
            println!("String ({}): {}", as_string.len(), as_string);
        }
        None => {
            println!("{:?}", value);
        }
    }
}

fn main() {
    let my_string = "Hello World".to_string();
    do_log(&my_string);

    let my_i8: i8 = 100;
    do_log(&my_i8);
}
```



## โก Struct Cell
- Shareable mutable containers https://doc.rust-lang.org/std/cell/index.html
- https://doc.rust-lang.org/std/cell/struct.Cell.html

Rust ๅๅญๅฎๅจๅบไบ่ฟๆ ท็่งๅ๏ผ็ปๅฎๅฏน่ฑก T๏ผๆปก่ถณไธไปๆปก่ถณไปฅไธไธไธชๆกไปถ๏ผ

- ๅๅซๅคไธชไธๅฏๅๅผ็จ `&T`๏ผๅณๅๅฅๅฏไปฅๆๅคไธช๏ผ
- ๅชๆไธไธชๅฏๅๅผ็จ `&mut T`๏ผ

็ผ่ฏๅผบๅถๆฃๆฅ๏ผ็กฎ่ฎคไธไผๅญๅจๅคไธชๅฏๅๅผ็จ๏ผๆ้ฝๅฏๅๅผ็จไธไธๅฏๅๅผ็จๅๆถๅญๅจใ

ๆๆถๅ๏ผๆไปฌ้่ฆไธๅฏๅๅผ็จ็ๅ้จๆๅๅฏๅ๏ผๅจ Rust ๅซๅๅ้จๅฏๅๆง Internal mutabilityใ้ฃไน๏ผๆๅฆไธ้ๆฉ๏ผ

- ๅ็บฟ็จ
    - ๅฆๆ็ฑปๅ T ๅฎ็ฐไบ trait Copy๏ผ้ฃไนๅฏไปฅไฝฟ็จ Cell<T>
    - ๅฆๅ๏ผๅฏไปฅไฝฟ็จ RefCell<T>
- ๅค็บฟ็จ
    - ไฝฟ็จไบๆฅ้๏ผMutex<T>
    - ไฝฟ็จ่ฏปๅ้๏ผRwLock<T>

ๅฎไปฌๅ้จ้ฝไพ่ตๅบๅฑ็ UnsafeCell ๅฎ็ฐ๏ผ้กพๅๆไน่ฟไนๅไธบ unsafe๏ผไฝๆฏ็ผ่ฏๅจ็ฅ้่ฟไบ่ฐ็จ็ๅฐๆน้่ฆ็นๆฎๅค็ใ

ๅฏนไบๅฎ็ฐไบ Copy ็็ฑปๅ๏ผๅฏไปฅไฝฟ็จ `Cell<T>`๏ผ

- ่ทๅ๏ผๅฆๆ T ๅฎ็ฐไบ Copy๏ผๅๅฏไปฅ่ฐ็จ `get()` ๆนๆณ๏ผ่ทๅพ T ็ไธไปฝ้ bit ๆท่ด
- ่ฎพ็ฝฎ๏ผไฝฟ็จ `set()` ๆนๆณ
- ๆดๆฐ๏ผไฝฟ็จ `update()` ่ฎพ็ฝฎๅนถ่ฟๅๆฐๅผ
- ๆฟๆข๏ผไฝฟ็จ `replace()` ๆนๆณ
- ๅฏๅๅผ็จ๏ผ`get_mut()` ๆนๆณ่ทๅพ Cell ๅ้็ๅฏๅๅผ็จ๏ผ่ฏฅๆนๆณ็ปง็ปญ้ตๅพชๅๅญๅฎๅจๅๅใ

```rust,ignore
use std::cell::Cell;

struct SomeStruct {
    regular_field: u8,
    special_field: Cell<u8>,
}

let my_struct = SomeStruct {
    regular_field: 0,
    special_field: Cell::new(1),
};

let new_value = 100;

// ERROR: `my_struct` is immutable
// my_struct.regular_field = new_value;

// WORKS: although `my_struct` is immutable, `special_field` is a `Cell`,
// which can always be mutated
my_struct.special_field.set(new_value);
assert_eq!(my_struct.special_field.get(), new_value);
```

ๅฏนไบๆฒกๆๅฎ็ฐ Copy ็็ฑปๅ๏ผไพๅฆ `String` ๅ `Vec<T>` ่ฆๅฎ็ฐๅคไธชไธๅฏๅๅ็จๅ้จๆๅ็ๅฏๅๆง๏ผๅฐฑ้่ฆไฝฟ็จ `RefCell<T>`๏ผ

- ๅ้จ T ไธๅฏๅๅ็จ๏ผไฝฟ็จ `borrow()` ๆนๆณ
- ๅ้จ T ๅฏๅๅ็จ๏ผไฝฟ็จ `borrow_mut()` ๆนๆณ

ไปฅไธไธคไธชๆนๆณไพ็ถ้ตๅฎๅๅญๅฎๅจๅๅ๏ผๅณ `borrow()` `borrow_mut()` ไธๅฏไปฅๅจๅไธไฝ็จๅๆง่ก๏ผ่ฟๆ ทไผๅญๅจ `&T` `&mut T`ใๆณจๆ `RefCell` ็ๅ็จ่งๅๅจ็ผ่ฏๆไธไผๆฃๆฅ๏ผไฝๆฏ่ฟ่กๆ่ฟๅไผๅฏผ่ด panicใ

```rust,ignore
use std::cell::{RefCell, RefMut};
use std::collections::HashMap;
use std::rc::Rc;

fn main() {
    let shared_map: Rc<RefCell<_>> = Rc::new(RefCell::new(HashMap::new()));
    // Create a new block to limit the scope of the dynamic borrow
    {
        let mut map: RefMut<_> = shared_map.borrow_mut();
        map.insert("africa", 92388);
        map.insert("kyoto", 11837);
        map.insert("piccadilly", 11826);
        map.insert("marbles", 38);
    }

    // Note that if we had not let the previous borrow of the cache fall out
    // of scope then the subsequent borrow would cause a dynamic thread panic.
    // This is the major hazard of using `RefCell`.
    let total: i32 = shared_map.borrow().values().sum();
    println!("{}", total);
}
```




## โก Struct Vec
- https://doc.rust-lang.org/stable/std/vec/struct.Vec.html

Examples

    let mut vec = Vec::new();
    vec.push(1);
    vec.push(2);

    assert_eq!(vec.len(), 2);
    assert_eq!(vec[0], 1);

    assert_eq!(vec.pop(), Some(2));
    assert_eq!(vec.len(), 1);

    vec[0] = 7;
    assert_eq!(vec[0], 7);

    vec.extend([1, 2, 3].iter().copied());

    for x in &vec {
        println!("{}", x);
    }
    assert_eq!(vec, [7, 1, 2, 3]);

The vec! macro is provided to make initialization more convenient:

    let mut vec = vec![1, 2, 3];
    vec.push(4);
    assert_eq!(vec, [1, 2, 3, 4]);

It can also initialize each element of a Vec<T> with a given value. This may be more efficient than performing allocation and initialization in separate steps, especially when initializing a vector of zeros:

    let vec = vec![0; 5];
    assert_eq!(vec, [0, 0, 0, 0, 0]);

    // The following is equivalent, but potentially slower:
    let mut vec = Vec::with_capacity(5);
    vec.resize(5, 0);
    assert_eq!(vec, [0, 0, 0, 0, 0]);

For more information, see Capacity and Reallocation.

Use a Vec<T> as an efficient stack:

    let mut stack = Vec::new();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    while let Some(top) = stack.pop() {
        // Prints 3, 2, 1
        println!("{}", top);
    }

Indexing
The Vec type allows to access values by index, because it implements the Index trait. An example will be more explicit:

    let v = vec![0, 2, 4, 6];
    println!("{}", v[1]); // it will display '2'

However be careful: if you try to access an index which isn't in the Vec, your software will panic! You cannot do this:

    let v = vec![0, 2, 4, 6];
    println!("{}", v[6]); // it will panic!

Use get and get_mut if you want to check whether the index is in the Vec.

Slicing
A Vec can be mutable. Slices, on the other hand, are read-only objects. To get a slice, use &. Example:

    fn read_slice(slice: &[usize]) {
        // ...
    }

    let v = vec![0, 1];
    read_slice(&v);

    // ... and that's all!
    // you can also do it like this:
    let u: &[usize] = &v;
    // or like this:
    let u: &[_] = &v;

## โก Trait Iterator
- https://doc.rust-lang.org/stable/std/iter/index.html

่ฟญไปฃๅจๆจกๅๆไพไบไธๅคงๅๅๅฎน๏ผ

- Structs
- Traits
- Functions

่ฟญไปฃๅจๅฎไนๆฌ่บซๅพ็ฎๅ๏ผๅชๆไธไธช `next()` ๆนๆณ๏ผ

```rust,ignore
trait Iterator {
    type Item;
    fn next(&mut self) -> Option<Self::Item>;
}
```

ไฝๆฏ๏ผRust ๆไพ็ Traits ่ฆ็ๅฎ็ฐๆบๅถ๏ผๅฏไปฅไธบๆๆ่ฟญไปฃๅจ็ฑปๅๆไพๅ็งๆนๆณๅฎ็ฐ๏ผๅณ blanket implementationsใ

ไพๅฆ๏ผๅฏน่ฟญไปฃๅจๆฑๅ็ `sum()` ๆนๆณ๏ผ้่ฟ trait Sum ๆฅๅฃๆไพ๏ผ

```rust,ignore
pub trait Sum<A = Self> {
    pub fn sum<I>(iter: I) -> Self
    where
        I: Iterator<Item = A>;
}
```

    pub trait Iterator {
    type Item;
    pub fn next(&mut self) -> Option<Self::Item>;

    pub fn size_hint(&self) -> (usize, Option<usize>) { ... }
    pub fn count(self) -> usize { ... }
    pub fn last(self) -> Option<Self::Item> { ... }
    pub fn advance_by(&mut self, n: usize) -> Result<(), usize> { ... }
    pub fn nth(&mut self, n: usize) -> Option<Self::Item> { ... }
    pub fn step_by(self, step: usize) -> StepBy<Self>โ { ... }
    pub fn chain<U>(self, other: U ) -> Chain<Self, <U as IntoIterator>::IntoIter>โ where U: IntoIterator<Item = Self::Item>, { ... }
    pub fn zip<U>(self, other: U) -> Zip<Self, <U as IntoIterator>::IntoIter>โ where U: IntoIterator, { ... }
    pub fn map<B, F>(self, f: F) -> Map<Self, F>โ where F: FnMut(Self::Item) -> B, { ... }
    pub fn for_each<F>(self, f: F) where F: FnMut(Self::Item), { ... }
    pub fn filter<P>(self, predicate: P) -> Filter<Self, P>โ where P: FnMut(&Self::Item) -> bool, { ... }
    pub fn filter_map<B, F>(self, f: F) -> FilterMap<Self, F>โ where F: FnMut(Self::Item) -> Option<B>, { ... }
    pub fn enumerate(self) -> Enumerate<Self>โ { ... }
    pub fn peekable(self) -> Peekable<Self>โ { ... }
    pub fn skip_while<P>(self, predicate: P) -> SkipWhile<Self, P>โ where P: FnMut(&Self::Item) -> bool, { ... }
    pub fn take_while<P>(self, predicate: P) -> TakeWhile<Self, P>โ where P: FnMut(&Self::Item) -> bool, { ... }
    pub fn map_while<B, P>(self, predicate: P) -> MapWhile<Self, P>โ where P: FnMut(Self::Item) -> Option<B>, { ... }
    pub fn skip(self, n: usize) -> Skip<Self>โ { ... }
    pub fn take(self, n: usize) -> Take<Self>โ { ... }
    pub fn scan<St, B, F>(self, initial_state: St, f: F) -> Scan<Self, St, F>โ where F: FnMut(&mut St, Self::Item) -> Option<B>, { ... }
    pub fn flat_map<U, F>(self, f: F) -> FlatMap<Self, U, F>โ where F: FnMut(Self::Item) -> U, U: IntoIterator, { ... }
    pub fn flatten(self) -> Flatten<Self>โ where Self::Item: IntoIterator, { ... }
    pub fn fuse(self) -> Fuse<Self>โ { ... }
    pub fn inspect<F>(self, f: F) -> Inspect<Self, F>โ where F: FnMut(&Self::Item), { ... }
    pub fn by_ref(&mut self) -> &mut Selfโ { ... }

    pub fn collect<B>(self) -> B where B: FromIterator<Self::Item>, { ... }
    pub fn partition<B, F>(self, f: F) -> (B, B) where F: FnMut(&Self::Item) -> bool, B: Default + Extend<Self::Item>, { ... }
    pub fn partition_in_place<'a, T, P>(self, predicate: P) -> usize where Self: DoubleEndedIterator<Item = &'a mut T>, T: 'a, P: FnMut(&T) -> bool, { ... }
    pub fn is_partitioned<P>(self, predicate: P) -> bool where P: FnMut(Self::Item) -> bool, { ... }
    pub fn try_fold<B, F, R>(&mut self, init: B, f: F) -> R where F: FnMut(B, Self::Item) -> R, R: Try<Ok = B>, { ... }
    pub fn try_for_each<F, R>(&mut self, f: F) -> R where F: FnMut(Self::Item) -> R, R: Try<Ok = ()>, { ... }
    pub fn fold<B, F>(self, init: B, f: F) -> B where F: FnMut(B, Self::Item) -> B, { ... }
    pub fn fold_first<F>(self, f: F) -> Option<Self::Item> where F: FnMut(Self::Item, Self::Item) -> Self::Item, { ... }
    pub fn all<F>(&mut self, f: F) -> bool where F: FnMut(Self::Item) -> bool, { ... }
    pub fn any<F>(&mut self, f: F) -> bool where F: FnMut(Self::Item) -> bool, { ... }
    pub fn find<P>(&mut self, predicate: P) -> Option<Self::Item> where P: FnMut(&Self::Item) -> bool, { ... }
    pub fn find_map<B, F>(&mut self, f: F) -> Option<B> where F: FnMut(Self::Item) -> Option<B>, { ... }
    pub fn try_find<F, R>(&mut self, f: F ) -> Result<Option<Self::Item>, <R as Try>::Error> where F: FnMut(&Self::Item) -> R, R: Try<Ok = bool>, { ... }
    pub fn position<P>(&mut self, predicate: P) -> Option<usize> where P: FnMut(Self::Item) -> bool, { ... }
    pub fn rposition<P>(&mut self, predicate: P) -> Option<usize> where Self: ExactSizeIterator + DoubleEndedIterator, P: FnMut(Self::Item) -> bool, { ... }
    pub fn max(self) -> Option<Self::Item> where Self::Item: Ord, { ... }
    pub fn min(self) -> Option<Self::Item> where Self::Item: Ord, { ... }
    pub fn max_by_key<B, F>(self, f: F) -> Option<Self::Item> where F: FnMut(&Self::Item) -> B, B: Ord, { ... }
    pub fn max_by<F>(self, compare: F) -> Option<Self::Item> where F: FnMut(&Self::Item, &Self::Item) -> Ordering, { ... }
    pub fn min_by_key<B, F>(self, f: F) -> Option<Self::Item> where F: FnMut(&Self::Item) -> B, B: Ord, { ... }
    pub fn min_by<F>(self, compare: F) -> Option<Self::Item> where F: FnMut(&Self::Item, &Self::Item) -> Ordering, { ... }
    pub fn rev(self) -> Rev<Self>โ where Self: DoubleEndedIterator, { ... }
    pub fn unzip<A, B, FromA, FromB>(self) -> (FromA, FromB) where Self: Iterator<Item = (A, B)>, FromA: Default + Extend<A>, FromB: Default + Extend<B>, { ... }
    pub fn copied<'a, T>(self) -> Copied<Self>โ where Self: Iterator<Item = &'a T>, T: 'a + Copy, { ... }
    pub fn cloned<'a, T>(self) -> Cloned<Self>โ where Self: Iterator<Item = &'a T>, T: 'a + Clone, { ... }
    pub fn cycle(self) -> Cycle<Self>โ where Self: Clone, { ... }
    pub fn sum<S>(self) -> S where S: Sum<Self::Item>, { ... }
    pub fn product<P>(self) -> P where P: Product<Self::Item>, { ... }
    pub fn cmp<I>(self, other: I) -> Ordering where I: IntoIterator<Item = Self::Item>, Self::Item: Ord, { ... }
    pub fn cmp_by<I, F>(self, other: I, cmp: F) -> Ordering where F: FnMut(Self::Item, <I as IntoIterator>::Item) -> Ordering, I: IntoIterator, { ... }
    pub fn partial_cmp<I>(self, other: I) -> Option<Ordering> where I: IntoIterator, Self::Item: PartialOrd<<I as IntoIterator>::Item>, { ... }
    pub fn partial_cmp_by<I, F>(self, other: I, partial_cmp: F ) -> Option<Ordering> where F: FnMut(Self::Item, <I as IntoIterator>::Item) -> Option<Ordering>, I: IntoIterator, { ... }
    pub fn eq<I>(self, other: I) -> bool where I: IntoIterator, Self::Item: PartialEq<<I as IntoIterator>::Item>, { ... }
    pub fn eq_by<I, F>(self, other: I, eq: F) -> bool where F: FnMut(Self::Item, <I as IntoIterator>::Item) -> bool, I: IntoIterator, { ... }
    pub fn ne<I>(self, other: I) -> bool where I: IntoIterator, Self::Item: PartialEq<<I as IntoIterator>::Item>, { ... }
    pub fn lt<I>(self, other: I) -> bool where I: IntoIterator, Self::Item: PartialOrd<<I as IntoIterator>::Item>, { ... }
    pub fn le<I>(self, other: I) -> bool where I: IntoIterator, Self::Item: PartialOrd<<I as IntoIterator>::Item>, { ... }
    pub fn gt<I>(self, other: I) -> bool where I: IntoIterator, Self::Item: PartialOrd<<I as IntoIterator>::Item>, { ... }
    pub fn ge<I>(self, other: I) -> bool where I: IntoIterator, Self::Item: PartialOrd<<I as IntoIterator>::Item>, { ... }
    pub fn is_sorted(self) -> bool where Self::Item: PartialOrd<Self::Item>, { ... }
    pub fn is_sorted_by<F>(self, compare: F) -> bool where F: FnMut(&Self::Item, &Self::Item) -> Option<Ordering>, { ... }
    pub fn is_sorted_by_key<F, K>(self, f: F) -> bool where F: FnMut(Self::Item) -> K, K: PartialOrd<K>, { ... }
    }


Structs

- `MapWhile`    ExperimentalAn iterator that only accepts elements while predicate returns Some(_).
- `Chain`   An iterator that links two iterators together, in a chain.
- `Cloned`  An iterator that clones the elements of an underlying iterator.
- `Copied`  An iterator that copies the elements of an underlying iterator.
- `Cycle`   An iterator that repeats endlessly.
- `Empty`   An iterator that yields nothing.
- `Enumerate`   An iterator that yields the current count and the element during iteration.
- `Filter`  An iterator that filters the elements of iter with predicate.
- `FilterMap`   An iterator that uses f to both filter and map elements from iter.
- `FlatMap` An iterator that maps each element to an iterator, and yields the elements of the produced iterators.
- `Flatten` An iterator that flattens one level of nesting in an iterator of things that can be turned into iterators.
- `FromFn`  An iterator where each iteration calls the provided closure F: FnMut() -> Option<T>.
- `Fuse`    An iterator that yields None forever after the underlying iterator yields None once.
- `Inspect` An iterator that calls a function with a reference to each element before yielding it.
- `Map` An iterator that maps the values of iter with f.
- `Once`    An iterator that yields an element exactly once.
- `OnceWith`    An iterator that yields a single element of type A by applying the provided closure F: FnOnce() -> A.
- `Peekable`    An iterator with a peek() that returns an optional reference to the next element.
- `Repeat`  An iterator that repeats an element endlessly.
- `RepeatWith`  An iterator that repeats elements of type A endlessly by applying the provided closure F: FnMut() -> A.
- `Rev` A double-ended iterator with the direction inverted.
- `Scan`    An iterator to maintain state while iterating another iterator.
- `Skip`    An iterator that skips over n elements of iter.
- `SkipWhile`   An iterator that rejects elements while predicate returns true.
- `StepBy`  An iterator for stepping iterators by a custom amount.
- `Successors`  An new iterator where each successive item is computed based on the preceding one.
- `Take`    An iterator that only iterates over the first n iterations of iter.
- `TakeWhile`   An iterator that only accepts elements while predicate returns true.
- `Zip` An iterator that iterates two other iterators simultaneously.

Traits

- `InPlaceIterable` ExperimentalAn iterator that when yielding an item will have taken at least one element from its underlying SourceIter.
- `SourceIter`  ExperimentalThis trait provides transitive access to source-stage in an interator-adapter pipeline under the conditions that
- `Step`    ExperimentalObjects that have a notion of successor and predecessor operations.
- `TrustedLen`  ExperimentalAn iterator that reports an accurate length using size_hint.
- `DoubleEndedIterator` An iterator able to yield elements from both ends.
- `ExactSizeIterator`   An iterator that knows its exact length.
- `Extend`  Extend a collection with the contents of an iterator.
- `FromIterator`    Conversion from an Iterator.
- `FusedIterator`   An iterator that always continues to yield None when exhausted.
- `IntoIterator`    Conversion into an Iterator.
- `Iterator`    An interface for dealing with iterators.
- `Product` Trait to represent types that can be created by multiplying elements of an iterator.
- `Sum` Trait to represent types that can be created by summing up an iterator.

Functions

- `empty`   Creates an iterator that yields nothing.
- `from_fn` Creates a new iterator where each iteration calls the provided closure F: FnMut() -> Option<T>.
- `once`    Creates an iterator that yields an element exactly once.
- `once_with`   Creates an iterator that lazily generates a value exactly once by invoking the provided closure.
- `repeat`  Creates a new iterator that endlessly repeats a single element.
- `repeat_with` Creates a new iterator that repeats elements of type A endlessly by applying the provided closure, the repeater, F: FnMut() -> A.
- `successors`  Creates a new iterator where each successive item is computed based on the preceding one.


## โก std::fs
- The I/O Prelude https://doc.rust-lang.org/stable/std/io/prelude/index.html
- Filesystem manipulation operations https://doc.rust-lang.org/stable/std/fs/index.html

Filesystem manipulation operations.

This module contains basic methods to manipulate the contents of the local filesystem. All methods in this module represent cross-platform filesystem operations. Extra platform-specific functionality can be found in the extension traits of std::os::$platform.

Structs

- `DirBuilder`  A builder used to create directories in various manners.
- `DirEntry`    Entries returned by the ReadDir iterator.
- `File`    A reference to an open file on the filesystem.
- `FileType`    A structure representing a type of file with accessors for each file type. It is returned by Metadata::file_type method.
- `Metadata`    Metadata information about a file.
- `OpenOptions` Options and flags which can be used to configure how a file is opened.
- `Permissions` Representation of the various permissions on a file.
- `ReadDir` Iterator over the entries in a directory.

Examples

```rust,ignore
use std::fs;

fn main() -> std::io::Result<()> {
    for entry in fs::read_dir(".")? {
        let dir = entry?;
        println!("{:?}", dir.path());
    }
    Ok(())
}
```


Functions

- `canonicalize( path )`    ่ฟๅ่ง่็ปๅฏนๅฝขๅผ่ทฏๅพ๏ผๆๆไธญ้ด็ปไปถ้ฝๅทฒ่ง่ๅๅนถ่งฃๆ็ฌฆๅท้พๆฅใ
- `copy( from, to )`    ๅฐไธไธชๆไปถ็ๅๅฎนๅคๅถๅฐๅฆไธไธชๆไปถ๏ผๅนถไธ๏ผๆญคๅฝๆฐ่ฟๅฐๅๅงๆไปถ็ๆ้ไฝๅคๅถๅฐ็ฎๆ ๆไปถใ
- `create_dir( path )`  Creates a new, empty directory at the provided path
- `create_dir_all( path )`  Recursively create a directory and all of its parent components if they are missing.
- `hard_link(original, link)`   Creates a new hard link on the filesystem.
- `metadata( path )`    Given a path, query the file system to get information about a file, directory, etc.
- `read( path )`    Read the entire contents of a file into a bytes vector.
- `read_dir( path )`    Returns an iterator over the entries within a directory.
- `read_link( path )`   Reads a symbolic link, returning the file that the link points to.
- `read_to_string( path )`  Read the entire contents of a file into a string.
- `remove_dir( path )`  Removes an empty directory.
- `remove_dir_all( path )`  Removes a directory at this path, after removing all its contents. Use carefully!
- `remove_file( path )` Removes a file from the filesystem.
- `rename(from, to)`    Rename a file or directory to a new name, replacing the original file if to already exists.
- `set_permissions( path, perm)`    Changes the permissions found on a file or a directory.
- `soft_link( original, link )` DeprecatedCreates a new symbolic link on the filesystem.
- `symlink_metadata( path )`    Query the metadata about a file without following symlinks.
- `write( path, contents )` Write a slice as the entire contents of a file.

Examples

```rust,ignore
use std::fs;

fn main() -> std::io::Result<()> {
    let path = fs::canonicalize("../a/../foo.txt")?;
    let mut perms = fs::metadata(path)?.permissions();
    perms.set_readonly(true);
    fs::set_permissions(path, perms)?;
    Ok(())
}
```

## โก Range Expressions
- https://doc.rust-lang.org/stable/reference/expressions/range-expr.html
- https://doc.rust-lang.org/stable/std/ops/struct.Range.html

Range expressions

    Syntax
    RangeExpression :
          RangeExpr
       | RangeFromExpr
       | RangeToExpr
       | RangeFullExpr
       | RangeInclusiveExpr
       | RangeToInclusiveExpr

    RangeExpr :
       Expression .. Expression

    RangeFromExpr :
       Expression ..

    RangeToExpr :
       .. Expression

    RangeFullExpr :
       ..

    RangeInclusiveExpr :
       Expression ..= Expression

    RangeToInclusiveExpr :
       ..= Expression

The `..` and `..=` operators will construct an object of one of the `std::ops::Range` (or `core::ops::Range`) variants, according to the following table:

|      Production      |    Syntax   |            Type            |      Range      |
|----------------------|-------------|----------------------------|-----------------|
| RangeExpr            | start..end  | std::ops::Range            | start โค x < end |
| RangeFromExpr        | start..     | std::ops::RangeFrom        | start โค x       |
| RangeToExpr          | ..end       | std::ops::RangeTo          | x < end         |
| RangeFullExpr        | ..          | std::ops::RangeFull        | -               |
| RangeInclusiveExpr   | start..=end | std::ops::RangeInclusive   | start โค x โค end |
| RangeToInclusiveExpr | ..=end      | std::ops::RangeToInclusive | x โค end         |

Examples:

```rust,ignore
let arr = [0, 1, 2, 3, 4];
assert_eq!(arr[ ..  ], [0, 1, 2, 3, 4]);
assert_eq!(arr[ .. 3], [0, 1, 2      ]);
assert_eq!(arr[ ..=3], [0, 1, 2, 3   ]);
assert_eq!(arr[1..  ], [   1, 2, 3, 4]);
assert_eq!(arr[1.. 3], [   1, 2      ]); // This is a `Range`
assert_eq!(arr[1..=3], [   1, 2, 3   ]);

1..2;   // std::ops::Range
3..;    // std::ops::RangeFrom
..4;    // std::ops::RangeTo
..;     // std::ops::RangeFull
5..=6;  // std::ops::RangeInclusive
..=7;   // std::ops::RangeToInclusive
```
The following expressions are equivalent.



```rust,ignore
let x = std::ops::Range {start: 0, end: 10};
let y = 0..10;

assert_eq!(x, y);
```

Ranges can be used in for loops:

```rust,ignore
for i in 1..11 {
    println!("{}", i);
}
```
