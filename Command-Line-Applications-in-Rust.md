# Command Line Applications in Rust

<a id=Summary></a>

[Getting started](#README_REP)
[Getting started](#README)

- [A command line app in 15 minutes](#tutorial_README)
  - [Project setup](#tutorial_setup)
  - [Parsing command line arguments](#tutorial_cli_args)
  - [First implementation](#tutorial_impl_draft)
  - [Nicer error reporting](#tutorial_errors)
  - [Output for humans and machines](#tutorial_output)
  - [Testing](#tutorial_testing)
  - [Packaging and distributing a Rust tool](#tutorial_packaging)
- [In-depth topics](#in_depth_README)
  - [Signal handling](#in_depth_signals)
  - [Using config files](#in_depth_config_files)
  - [Exit codes](#in_depth_exit_code)
  - [Communicating with humans](#in_depth_human_communication)
  - [Communicating with machines](#in_depth_machine_communication)
  - [Rendering documentation for your CLI apps](#in_depth_docs)
- [Resources](#resources_README)


<a id=README_REP></a>

# Command Line Applications in Rust

This repo contains the CLAiR, the [Command Line Applications in Rust][clair] book.
It is written and updated by the [Rust CLI working group][wg].

## Building

Building the book requires [mdBook](https://github.com/rust-lang/mdBook).
To get it:


```bash
$ cargo install mdbook
```

To build the book, type:

```bash
$ mdbook build
```

The output will be in the `book` subdirectory.
To check it out, open `book/index.html` in your web browser.

To run the tests:

```bash
$ mdbook test
```

## Multi-language support
Unofficial translation:
- 中文(zh_CN)：[Rust 中的命令行应用][rust-cli-zh_CN] (2021-09-13)
- 한글(ko_KR)：[Rust 커맨드라인 애플리케이션][rust-cli-ko_KR] (2023-05-31)

[clair]: https://rust-cli.github.io/book/
[wg]: https://github.com/rust-cli/meta
[rust-cli-zh_CN]: https://suibianxiedianer.github.io/rust-cli-book-zh_CN/
[rust-cli-ko_KR]: https://parksb.github.io/work/17.html


<a id=README></a>

# Command line apps in Rust

Rust is a statically compiled, fast language with great tooling and a rapidly growing ecosystem.
That makes it a great fit for writing command line applications:
They should be small, portable, and quick to run.
Command line applications are also a great way to get started with learning Rust;
or to introduce Rust to your team!

Writing a program with a simple command line interface (CLI)
is a great exercise for a beginner
who is new to the language and wants to get a feel for it.
There are many aspects to this topic, though,
that often only reveal themselves later on.

This book is structured like this:
We start with a quick tutorial, after which you'll end up with a working CLI tool.
You'll be exposed to a few of the core concepts of Rust
as well as the main aspects of CLI applications.
What follows are chapters that go into more detail
on some of these aspects.

One last thing before we dive right into CLI applications:
If you find an error in this book or want to help us write more content for it,
you can find its source [in the CLI book repository][book-src].
We'd love to hear your feedback!
Thank you!

[book-src]: https://github.com/rust-cli/book


<a id=tutorial_README></a>

# Learning Rust by Writing a Command Line App in 15 Minutes

This tutorial will guide you through writing a CLI (command line interface) application in [Rust].
It will take you roughly fifteen minutes to get to a point where you have a running program (around chapter 1.3).
After that, we'll continue to tweak our program until we reach a point where we can ship our little tool.

[Rust]: https://rust-lang.org/

You’ll learn all the essentials about how to get going, and where to find more information.
Feel free to skip parts you don't need to know right now or jump in at any point.

<aside>

**Prerequisites:**
This tutorial does not replace a general introduction to programming,
and expects you to be familiar with a few common concepts.
You should be comfortable with using a command line/terminal.
If you already know a few other languages,
this can be a good first contact with Rust.

**Getting help:**
If you at any point feel overwhelmed or confused with the features used,
have a look at the extensive official documentation that comes with Rust,
first and foremost the book, The Rust Programming Language.
It comes with most Rust installations (`rustup doc`), and is available online on [doc.rust-lang.org].

[doc.rust-lang.org]: https://doc.rust-lang.org

You are also very welcome to ask questions – the Rust community is known to be friendly and helpful.
Have a look at the [community page] to see a list of places where people discuss Rust.

[community page]: https://www.rust-lang.org/community

</aside>

What kind of project do you want to write?
How about we start with something simple:
Let’s write a small `grep` clone.
That is a tool that we can give a string and a path
and it’ll print only the lines that contain the given string.
Let’s call it `grrs` (pronounced “grass”).

In the end,
we want to be able to run our tool like this:

```sh
$ cat test.txt
foo: 10
bar: 20
baz: 30
$ grrs foo test.txt
foo: 10
$ grrs --help
[some help text explaining the available options]
```

<aside class="note">

**Note:**
This book is written for [Rust 2018].
The code examples can also be used on Rust 2015,
but you might need to tweak them a bit;
add `extern crate foo;` invocations, for example.

Make sure you run Rust 1.31.0 (or later)
and that you have `edition = "2018"` set
in the `[package]` section of your `Cargo.toml` file.

[Rust 2018]: https://doc.rust-lang.org/edition-guide/index.html

</aside>


<a id=tutorial_setup></a>

# Project setup

If you haven’t already, [install Rust] on your computer
(it should only take a few minutes).
After that, open a terminal and navigate to the directory
you want to put your application code into.

[install Rust]: https://www.rust-lang.org/tools/install

Start by running
`cargo new grrs`
in the directory you store your programming projects in.
If you look at the newly created `grrs` directory,
you’ll find a typical setup for a Rust project:

- A `Cargo.toml` file that contains metadata for our project,
  incl. a list of dependencies/external libraries we use.
- A `src/main.rs` file that is the entry point for our (main) binary.

If you can execute `cargo run` in the `grrs` directory
and get a "Hello World", you’re all set up.

## What it might look like

```sh
$ cargo new grrs
     Created binary (application) `grrs` package
$ cd grrs/
$ cargo run
   Compiling grrs v0.1.0 (/Users/pascal/code/grrs)
    Finished dev [unoptimized + debuginfo] target(s) in 0.70s
     Running `target/debug/grrs`
Hello, world!
```


<a id=tutorial_cli_args></a>

# Parsing command-line arguments

A typical invocation of our CLI tool will look like this:

```sh
$ grrs foobar test.txt
```

We expect our program to look at `test.txt`
and print out the lines that contain `foobar`.
But how do we get these two values?

The text after the name of the program is often called
the "command-line arguments", or "command-line flags"
(especially when they look like `--this`).
Internally, the operating system usually represents them
as a list of strings. Generally, they get separated by spaces.

There are many ways to think about these arguments
and how to parse them into something easier to work with.
You will also need to tell the users of your program
which arguments they need to give
and in which format they are expected.

## Getting the arguments

The standard library contains the function
[`std::env::args()`] that gives you an [iterator] of the given arguments.
The first entry (at index `0`) will be the name used to invoke your program
(e.g. `grrs`). The ones that follow are what the user wrote afterwards.

[`std::env::args()`]: https://doc.rust-lang.org/1.39.0/std/env/fn.args.html
[iterator]: https://doc.rust-lang.org/1.39.0/std/iter/index.html

Getting the raw arguments this way is straightforward (in file `src/main.rs`):

```rust,ignore
{{#include cli-args-vars.rs}}
```

We can run it using `cargo run`,
passing arguments by writing them after `--`:

```sh
$ cargo run -- some-pattern some-file
    Finished dev [unoptimized + debuginfo] target(s) in 0.11s
     Running `target/debug/grrs some-pattern some-file`
pattern: "some-pattern", path: "some-file"
```

## CLI arguments as data types

Instead of thinking about them as a bunch of text,
it often pays off to think of CLI arguments as a custom data type
that represents the inputs to your program.

Looking at `grrs foobar test.txt`, there are two arguments:
first, the `pattern` (the string to look for),
and then, the `path` (the file to look in).

What more can we say about them? Well, for a start, both are required.
We haven't talked about any default values,
so we expect our users to always provide two values.
Furthermore, we can say a bit about their types:
The pattern is expected to be a string
while the second argument is expected to be a path to a file.

In Rust, it is common to structure programs around the data they handle, so this
way of looking at CLI arguments fits very well. Let's start with this (in file
`src/main.rs`, before `fn main() {`):

```rust,ignore
{{#include cli-args-struct.rs:1:4}}
```

This defines a new structure (a [`struct`])
that has two fields to store data in: `pattern` and `path`.

[`struct`]: https://doc.rust-lang.org/1.39.0/book/ch05-00-structs.html

<aside>

**Note:**
[`PathBuf`] is like a [`String`] but for file system paths that work cross-platform.

[`PathBuf`]: https://doc.rust-lang.org/1.39.0/std/path/struct.PathBuf.html
[`String`]: https://doc.rust-lang.org/1.39.0/std/string/struct.String.html

</aside>

Now, we still need to convert the actual arguments into this form.
One option would be to manually parse the list of strings we get from the operating system and build the structure ourselves.
It would look something like this:

```rust,ignore
{{#include cli-args-struct.rs:6:16}}
```

This works, but it's not very convenient.
How would you deal with the requirement to support
`--pattern="foo"` or `--pattern "foo"`?
How would you implement `--help`?

## Parsing CLI arguments with Clap

A more convenient way is to use one of the many available libraries.
The most popular library for parsing command-line arguments is called [`clap`].
It has all the functionality you'd expect, including support for sub-commands, [shell completions], and great help messages.

[`clap`]: https://docs.rs/clap/
[shell completions]: https://docs.rs/clap_complete/

Let's first import `clap` by adding
`clap = { version = "4.0", features = ["derive"] }` to the `[dependencies]` section
of our `Cargo.toml` file.

Now, we can write `use clap::Parser;` in our code
and add `#[derive(Parser)]` right above our `struct Cli`.
Let's also write some documentation comments along the way.

It’ll look like this (in file `src/main.rs`, before `fn main() {`):

```rust,ignore
{{#include cli-args-clap.rs:1:10}}
```

<aside class="node">

**Note:**
There are a lot of custom attributes you can add to fields.
For example,
to say you want to use this field for the argument after `-o` or `--output`,
you'd add `#[arg(short = 'o', long = "output")]`.
For more information,
see the [clap documentation][`clap`].

</aside>

Right below the `Cli` struct our template contains its `main` function.
When the program starts, it will call this function:

```rust,ignore
{{#include cli-args-clap.rs:12:16}}
```

This will try to parse the arguments into our `Cli` struct.

But what if that fails?
That's the beauty of this approach:
Clap knows which fields to expect and their expected format.
It can automatically generate a nice `--help` message as well as give some great errors to suggest you pass `--output` when you wrote `--putput`.

<aside class="note">

**Note:**
The `parse` method is meant to be used in your `main` function.
When it fails, it will print out an error or help message and immediately exit the program.
Don't use it in other places!

</aside>

## Wrapping up

Your code should now look like:

```rust,ignore
{{#include cli-args-clap.rs}}
```

Running it without any arguments:

```sh
$ cargo run
    Finished dev [unoptimized + debuginfo] target(s) in 10.16s
     Running `target/debug/grrs`
error: The following required arguments were not provided:
    <pattern>
    <path>

USAGE:
    grrs <pattern> <path>

For more information try --help
```

Running it passing arguments:

```sh
$ cargo run -- some-pattern some-file
    Finished dev [unoptimized + debuginfo] target(s) in 0.11s
     Running `target/debug/grrs some-pattern some-file`
pattern: "some-pattern", path: "some-file"
```

The output demonstrates that our program successfully
parsed the arguments into the `Cli` struct.


<a id=tutorial_impl_draft></a>

# First implementation of _grrs_

After the last chapter on command line arguments, we have our input data, and we can start to write our actual tool.
Our `main` function only contains this line right now:

```rust,ignore
{{#include impl-draft.rs:13:13}}
```

We can drop the `println` statement that we put there temporarily
to demonstrate that our program works as expected.

Let’s start by opening the file we got.

```rust,ignore
{{#include impl-draft.rs:14:14}}
```

<aside>

**Note:**
See that [`.expect`] method here?
This is a shortcut function that will make the program exit immediately when the value (in this case, the input file) could not be read.
It's not very pretty, and in the next chapter on [Nicer error reporting], we will look at how to improve this.

[`.expect`]: https://doc.rust-lang.org/1.39.0/std/result/enum.Result.html#method.expect
[Nicer error reporting]:./errors.html

</aside>

Now, let’s iterate over the lines
and print each one that contains our pattern:

```rust,ignore
{{#include impl-draft.rs:16:20}}
```

## Wrapping up

Your code should now look like:

```rust,ignore
{{#include impl-draft.rs}}
```

Give it a try: `cargo run -- main src/main.rs` should work now!

<aside class="exercise">

**Exercise for the reader:**
This is not the best implementation as it will read the whole file into memory, no matter how large the file may be.
Find a way to optimize it!
(One idea might be to use a [`BufReader`] instead of `read_to_string()`.)

[`BufReader`]: https://doc.rust-lang.org/1.39.0/std/io/struct.BufReader.html

</aside>


<a id=tutorial_errors></a>

# Nicer error reporting

We all can do nothing but accept the fact that errors will occur.
In contrast to many other languages,
it's very hard not to notice and deal with this reality
when using Rust because it doesn't have exceptions.
All possible error states are often encoded in the return types of functions.

## Results

A function like [`read_to_string`] doesn't return a string.
Instead, it returns a [`Result`] that contains either a `String` or an error of some type.
In this case, [`std::io::Error`].

[`read_to_string`]: https://doc.rust-lang.org/1.39.0/std/fs/fn.read_to_string.html
[`Result`]: https://doc.rust-lang.org/1.39.0/std/result/index.html
[`std::io::Error`]: https://doc.rust-lang.org/1.39.0/std/io/type.Result.html

How do you know which it is?
Since `Result` is an `enum`, you can use `match` to check which variant it is:

```rust,no_run
let result = std::fs::read_to_string("test.txt");
match result {
    Ok(content) => { println!("File content: {}", content); }
    Err(error) => { println!("Oh noes: {}", error); }
}
```

<aside>

**Note:**
Not sure what enums are or how they work in Rust?
[Check out this chapter of the Rust book](https://doc.rust-lang.org/1.39.0/book/ch06-00-enums.html)
to get up to speed.

</aside>

## Unwrapping

Now, we were able to access the content of the file, but we can't really do anything with it after the `match` block.
For this, we'll need to deal with the error case.
While it's a challenge that all arms of a `match` block need to return something of the same type, there's a neat trick to get around that:

```rust,no_run
let result = std::fs::read_to_string("test.txt");
let content = match result {
    Ok(content) => { content },
    Err(error) => { panic!("Can't deal with {}, just exit here", error); }
};
println!("file content: {}", content);
```

We can use the String in `content` after the match block, but if `result` were an error, the String wouldn't exist.
That's fine because the program would exit before it ever reached a point where we use `content`.

This may seem drastic, but it's very convenient.
If your program needs to read that file and can't do anything if the file doesn't exist, exiting is a valid strategy.
There's even a shortcut method on [`Result`] called `unwrap`:

```rust,no_run
let content = std::fs::read_to_string("test.txt").unwrap();
```

## No need to panic

Of course, aborting the program is not the only way to deal with errors.
Instead of using `panic!`, we can just use `return`:

```rust,no_run
# fn main() -> Result<(), Box<dyn std::error::Error>> {
let result = std::fs::read_to_string("test.txt");
let content = match result {
    Ok(content) => { content },
    Err(error) => { return Err(error.into()); }
};
# Ok(())
# }
```

However, this changes the return type in our function.
There was something hidden in our examples all this time:
The function signature this code lives in.
And in this last example with `return`, it becomes important.
Here's the _full_ example:

```rust,no_run
fn main() -> Result<(), Box<dyn std::error::Error>> {
    let result = std::fs::read_to_string("test.txt");
    let content = match result {
        Ok(content) => { content },
        Err(error) => { return Err(error.into()); }
    };
    println!("file content: {}", content);
    Ok(())
}
```

Our return type is a `Result`!
This is why we can write `return Err(error);` in the second match arm.
See how there is an `Ok(())` at the bottom?
It's the default return value of the function and means:
"Result is okay, and has no content".

<aside>

**Note:**
Why is this not written as `return Ok(());`?
It easily could be – this is totally valid as well.
The last expression of any block in Rust is its return value,
and it is customary to omit a needless `return`.

</aside>

## Question Mark

Just like calling `.unwrap()` is a shortcut
for the `match` with `panic!` in the error arm,
we have another shortcut for the `match` that `return`s in the error arm:
`?`.

That's right, a question mark.
You can append this operator to a value of type `Result`,
and Rust will internally expand this to something very similar to
the `match` we just wrote.

Give it a try:

```rust,no_run
fn main() -> Result<(), Box<dyn std::error::Error>> {
    let content = std::fs::read_to_string("test.txt")?;
    println!("file content: {}", content);
    Ok(())
}
```

Very concise!

<aside>

**Note:**
There are a few more things happening here
that are not required to understand to work with this.
For example,
the error type in our `main` function is `Box<dyn std::error::Error>`,
but we've seen above that `read_to_string` returns a [`std::io::Error`].
This works because `?` expands to code that  _converts_ error types.

`Box<dyn std::error::Error>` is also an interesting type.
It's a `Box` that can contain _any_ type
that implements the standard [`Error`][`std::error::Error`] trait.
This means that all errors can be put into this box,
and we can use `?` on all of the usual functions that return a `Result`.

[`std::error::Error`]: https://doc.rust-lang.org/1.39.0/std/error/trait.Error.html

</aside>

## Providing Context

The errors you get when using `?` in your `main` function are okay, but they are not great.
For example,
when you run `std::fs::read_to_string("test.txt")?` and the file `test.txt` doesn't exist, you get this output:

```text
Error: Os { code: 2, kind: NotFound, message: "No such file or directory" }
```

In cases where your code doesn't actually contain the file name,
it would be hard to tell which file was `NotFound`.
There are multiple ways to deal with this.

For one, we can create our own error type
and use that to build a custom error message:

```rust,ignore
{{#include errors-custom.rs}}
```

Running this, we'll get our custom error message:

```text
Error: CustomError("Error reading `test.txt`: No such file or directory (os error 2)")
```

Not very pretty, but we can adapt the debug output for our type later on.

This pattern is very common.
It has one problem though:
We don't store the original error, only its string representation.
The popular [`anyhow`] library has a neat solution for that:
Its [`Context`] trait can be used to add a description similar to our `CustomError` type.
Additionally, it keeps the original error, so we get a "chain" of error messages pointing to the root cause.

[`anyhow`]: https://docs.rs/anyhow
[`Context`]: https://docs.rs/anyhow/1.0/anyhow/trait.Context.html

Let's first import the `anyhow` crate by adding `anyhow = "1.0"` to the `[dependencies]` section of our `Cargo.toml` file.

The full example will look like this:

```rust,ignore
{{#include errors-exit.rs}}
```

This will print an error:

```text
Error: could not read file `test.txt`

Caused by:
    No such file or directory (os error 2)
```

## Wrapping up

Your code should now look like:

```rust,ignore
{{#include errors-impl.rs}}
```


<a id=tutorial_output></a>

# Output

## Printing "Hello World"

```rust
println!("Hello World");
```

Well, that was easy.
Great! Onto the next topic.

## Using `println!`

You can pretty much print all the things you like with the `println!` macro.
This macro has some pretty amazing capabilities, but also a special syntax.
It expects a string literal that contains placeholders as the first parameter. 
The string will be filled in by the values of the parameters that follow as further arguments.

For example:

```rust
let x = 42;
println!("My lucky number is {}.", x);
```

will print:

```sh
My lucky number is 42.
```

The curly braces (`{}`) in the string above is one of these placeholders.
This is the default placeholder type
that tries to print the given value in a human readable way.
For numbers and strings, this works very well,
but not all types can do that.
This is why there is also a "debug representation"
that you can get by filling the braces of the placeholder like this: `{:?}`.

For example:

```rust
let xs = vec![1, 2, 3];
println!("The list is: {:?}", xs);
```

will print:

```sh
The list is: [1, 2, 3]
```

If you want your own data types to be printable for debugging and logging,
you can typically add a `#[derive(Debug)]` above their definition.

<aside>

**Note:**
"User-friendly" printing is done using the [`Display`] trait and
debug output (human-readable but targeted at developers) uses the [`Debug`] trait.
You can find more information about the syntax you can use in `println!`
in the [documentation for the `std::fmt` module][std::fmt].

[`Display`]: https://doc.rust-lang.org/1.39.0/std/fmt/trait.Display.html
[`Debug`]: https://doc.rust-lang.org/1.39.0/std/fmt/trait.Debug.html
[std::fmt]: https://doc.rust-lang.org/1.39.0/std/fmt/index.html

</aside>

## Printing errors

Printing errors should be done via `stderr` to make it easier for users and other tools to pipe their outputs to files or more tools.

<aside>

**Note:**
On most operating systems, a program can write to two output streams: `stdout` and `stderr`.
`stdout` is for the program's actual output while `stderr` allows errors and other messages to be kept separate from `stdout`.
That way, output can be stored to a file or piped to another program while errors are shown to the user.

</aside>

In Rust, this is achieved with `println!` and `eprintln!`, the former printing to `stdout` and the latter to `stderr`.

```rust
println!("This is information");
eprintln!("This is an error! :(");
```

<aside>

**Beware**: Printing [escape codes] can be dangerous and
put the user's terminal into a weird state.
Always be careful when manually printing them!

[escape codes]: https://en.wikipedia.org/wiki/ANSI_escape_code

Ideally, you should be using a crate like `ansi_term`
when dealing with raw escape codes
to make your (and your user's) life easier.

</aside>

## A note on printing performance

Printing to the terminal is surprisingly slow!
If you call things like `println!` in a loop,
it can easily become a bottleneck in an otherwise fast program.
To speed this up, there are two things you can do.

First, you might want to reduce the number of writes
that actually "flush" to the terminal.
`println!` tells the system to flush to the terminal _every_ time
because it is common to print each new line.
If you don't need that, you can wrap your `stdout` handle in a [`BufWriter`],
which buffers up to 8 kB by default.
You can still call `.flush()` on this `BufWriter`
when you want to print immediately.

```rust
use std::io::{self, Write};

let stdout = io::stdout(); // get the global stdout entity
let mut handle = io::BufWriter::new(stdout); // optional: wrap that handle in a buffer
writeln!(handle, "foo: {}", 42); // add `?` if you care about errors here
```

Second, it helps to acquire a lock on `stdout` (or `stderr`)
and use `writeln!` to print to it directly.
This prevents the system from locking and unlocking `stdout` over and over again.

```rust
use std::io::{self, Write};

let stdout = io::stdout(); // get the global stdout entity
let mut handle = stdout.lock(); // acquire a lock on it
writeln!(handle, "foo: {}", 42); // add `?` if you care about errors here
```

You can also combine the two approaches.

[`BufWriter`]: https://doc.rust-lang.org/1.39.0/std/io/struct.BufWriter.html

## Showing a progress bar

Some CLI applications run less than a second while others take minutes or hours.
If you are writing one of the latter types of programs,
you might want to show the user that something is happening.
For this, you should try to print useful status updates,
ideally in a form that can be easily consumed.

Using the [indicatif] crate, you can add progress bars
and little spinners to your program.
Here's a quick example:

```rust,ignore
{{#include output-progressbar.rs:1:9}}
```

See the [documentation][indicatif docs] and [examples][indicatif examples] for more information.

[indicatif]: https://crates.io/crates/indicatif
[indicatif docs]: https://docs.rs/indicatif
[indicatif examples]: https://github.com/console-rs/indicatif/tree/main/examples

## Logging

To make it easier to understand what is happening in our program,
we might want to add some log statements.
This is usually easy while writing your application,
and it will become super helpful when running this program again in half a year.
In some ways, logging is the same as using `println!`
except that you can specify the importance of a message.
The levels you can usually use are _error_, _warn_, _info_, _debug_, and _trace_
(_error_ has the highest priority, _trace_ the lowest).

To add simple logging to your application, you'll need two things:
The [log] crate (this contains macros named after the log level)
and an _adapter_ that actually writes the log output somewhere useful.
Having the ability to use log adapters is very flexible:
You can, for example, use them to write logs not only to the terminal
but also to [syslog] or to a central log server.

[syslog]: https://en.wikipedia.org/wiki/Syslog

Since we are only concerned with writing a CLI application, an easy adapter to use is [env_logger].
It's called "env" logger because you can use an environment variable to specify which parts of your application you want to log and at which level you want to log them.
It will prefix your log messages with a timestamp and the module where the log messages come from. Since libraries can also use `log`, you easily configure their log output, too.

[log]: https://crates.io/crates/log
[env_logger]: https://crates.io/crates/env_logger

Here's a quick example:

```rust,ignore
{{#include output-log.rs}}
```

Assuming you have this file as `src/bin/output-log.rs`, on Linux and macOS, you can run it like this:
```sh
$ env RUST_LOG=info cargo run --bin output-log
    Finished dev [unoptimized + debuginfo] target(s) in 0.17s
     Running `target/debug/output-log`
[2018-11-30T20:25:52Z INFO  output_log] starting up
[2018-11-30T20:25:52Z WARN  output_log] oops, nothing implemented!
```

In Windows PowerShell, you can run it like this:
```sh
$ $env:RUST_LOG="info"
$ cargo run --bin output-log
    Finished dev [unoptimized + debuginfo] target(s) in 0.17s
     Running `target/debug/output-log.exe`
[2018-11-30T20:25:52Z INFO  output_log] starting up
[2018-11-30T20:25:52Z WARN  output_log] oops, nothing implemented!
```

In Windows CMD, you can run it like this:
```sh
$ set RUST_LOG=info
$ cargo run --bin output-log
    Finished dev [unoptimized + debuginfo] target(s) in 0.17s
     Running `target/debug/output-log.exe`
[2018-11-30T20:25:52Z INFO  output_log] starting up
[2018-11-30T20:25:52Z WARN  output_log] oops, nothing implemented!
```

`RUST_LOG` is the name of the environment variable
you can use to set your log settings.
`env_logger` also contains a builder
so you can programmatically adjust these settings
like showing _info_ level messages by default.

There are a lot of alternative logging adapters out there
as well as alternatives and extensions to `log`.
If you know your application will have a lot to log,
make sure to review them and make your users' lives easier.

<aside>

**Tip:**
Experience has shown that even mildly useful CLI programs can end up being used for years to come,
especially if they were meant as a temporary solution.
If your application doesn't work and someone (e.g., you, in the future) needs to figure out why,
being able to pass `--verbose` to get additional log output
can make the difference between minutes and hours of debugging.
The [clap-verbosity-flag] crate contains a quick way
to add a `--verbose` to a project using `clap`.

[clap-verbosity-flag]: https://crates.io/crates/clap-verbosity-flag

</aside>


<a id=tutorial_testing></a>

# Testing

Over decades of software development, people have discovered one truth:
Untested software rarely works.
Many people would go as far as saying that most tested software doesn't work either.
But we are all optimists here, right?
To ensure that your program does what you expect it to do, it is wise to test it.

A good starting point is to write a `README` file that describes what your program should do, and when you feel ready to make a new release, go through the `README` and ensure that the behavior is still as expected.
You can make this a more rigorous exercise by also writing down how your program should react to erroneous inputs.

Here's another fancy idea:
Write that `README` before you write the code.

<aside>

**Note:**
Have a look at [test-driven development] (TDD) if you haven't heard of it.

[test-driven development]: https://en.wikipedia.org/wiki/Test-driven_development


</aside>

## Automated testing

Now, this is all fine and dandy, but doing all of this manually?
That can take a lot of time.
At the same time, many people have come to enjoy telling computers to do things for them.
Let's talk about how to automate these tests.

Rust has a built-in test framework, so let's start by writing our first test:

```rust,ignore
# fn answer() -> i32 {
#   42
# }
#
#[test]
fn check_answer_validity() {
    assert_eq!(answer(), 42);
}
```

You can put this snippet of code in pretty much any source file in your package
and `cargo test` will find and run it.
The key here is the `#[test]` attribute.
It allows the build system to discover such functions and run them as tests, verifying that they don't panic.

<aside class="exercise">

**Exercise for the reader:**
Make this test work.

You should end up with output like the following:

```text
running 1 test
test check_answer_validity ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out
```

</aside>

Now that we've seen *how* we can write tests, we still need to figure out *what* to test.
As you've seen, it takes little code to write assertions for functions, but a CLI application is often more than one function!
Worse, it often deals with user input, reads files, and writes output.

## Making your code testable

There are two complementary approaches to testing functionality. One is
to test the small units that you use to build your complete application.
These are called "unit tests".
Another is to test the final application from the outside,
called black box tests or integration tests.
Let's begin with the first one.

To figure out what we should test, let's see what our program features are.
`grrs` is supposed to print out the lines that match a given pattern,
so let's write unit tests for _exactly this_.
We want to ensure that our most important piece of logic works,
and we want to do it in a way that is not dependent
on any of the setup code we have around it
like the CLI arguments.

Going back to our [first implementation](impl-draft.md) of `grrs`,
we added this block of code to the `main` function:

```rust,ignore
// ...
for line in content.lines() {
    if line.contains(&args.pattern) {
        println!("{}", line);
    }
}
```

Sadly, this is not very easy to test.
First of all, it's in the main function, so we can't easily call it.
This is fixed by moving this piece of code into a function:

```rust,no_run
fn find_matches(content: &str, pattern: &str) {
    for line in content.lines() {
        if line.contains(pattern) {
            println!("{}", line);
        }
    }
}
```

Now, we can call this function in our test
and see what its output is:

```rust,ignore
#[test]
fn find_a_match() {
    find_matches("lorem ipsum\ndolor sit amet", "lorem");
    assert_eq!( // uhhhh
```

Or… can we?
Right now, `find_matches` prints directly to `stdout`, i.e., the terminal.
We can't easily capture this in a test!
This is a problem that often comes up
when writing tests after the implementation:
We have written a function that is firmly integrated
in the context it is used in.

<aside class="note">

**Note:**
This is totally fine when writing small CLI applications.
There's no need to make everything testable!
It is important to think about
which parts of your code you might want to write unit tests for.
While we'll see that it's straightforward to change this function to be testable,
this is not always the case.

</aside>

Alright, how can we make this testable?
We'll need to capture the output somehow.
Rust's standard library has some neat abstractions
for dealing with I/O (input/output),
and we'll make use of one called [`std::io::Write`].
This is a [trait][trpl-traits] that abstracts over things we can write to,
which includes strings and `stdout`.

[trpl-traits]: https://doc.rust-lang.org/book/ch10-02-traits.html
[`std::io::Write`]: https://doc.rust-lang.org/1.39.0/std/io/trait.Write.html

If this is the first time you've heard "trait"
in the context of Rust, you are in for a treat.
Traits are one of the most powerful features of Rust.
You can think of them like interfaces in Java
or type classes in Haskell, whatever you are more familiar with.
They allow you to abstract over behavior
that can be shared by different types.
Code that uses traits can express ideas in very generic and flexible ways.
This means it can also get difficult to read.
Don't let that intimidate you.
Even people who have used Rust for years
don't always get what generic code does immediately.
In that case, it helps to think of concrete uses.
In our case, the behavior that we abstract over is "write to it".
Examples for the types that implement (`impl`) it
include the terminal's standard output, files,
a buffer in memory,
or TCP network connections.
Scroll down in the [documentation for `std::io::Write`][`std::io::Write`]
to see a list of "Implementors".

With that knowledge, let's change our function to accept a third parameter.
It can be any type that implements `Write`.
This way, we can supply a simple string in our tests
and make assertions on it.
Here is how we can write this version of `find_matches`:

```rust,ignore
{{#include testing/src/main.rs:23:29}}
```

The new parameter is `mut writer`, i.e., a mutable thing we call "writer".
Its type is `impl std::io::Write`, which you can read as
a placeholder for any type that implements the `Write` trait.
Note how we replaced the `println!(…)` we used earlier with `writeln!(writer, …)`.
`println!` works the same as `writeln!`, but it always uses standard output.

Now, we can test for the output:

```rust,ignore
{{#include testing/src/main.rs:31:36}}
```

To use this in our application code,
we have to change the call to `find_matches` in `main`
by adding [`&mut std::io::stdout()`][stdout] as the third parameter.
Here's an example of a main function
that builds on what we've seen in the previous chapters
and uses our extracted `find_matches` function:

```rust,ignore
{{#include testing/src/main.rs:13:21}}
```

[stdout]: https://doc.rust-lang.org/1.39.0/std/io/fn.stdout.html

<aside class="note">

**Note:**
Since `stdout` expects bytes (not strings),
we use `std::io::Write` instead of `std::fmt::Write`.
As a result, we give an empty vector as `writer` in our tests
(its type will be inferred to `Vec<u8>`),
and in the `assert_eq!`, we use `b"foo"`.
The `b` prefix makes this a _byte string literal_,
so its type is going to be `&[u8]` instead of `&str`.

</aside>

<aside class="note">

**Note:**
We could also make this function return a `String`,
but that would change its behavior.
Instead of writing to the terminal directly,
it would then collect everything into a string,
and dump all the results in one go at the end.

</aside>

<aside class="exercise">

**Exercise for the reader:**
[`writeln!`] returns an [`io::Result`] because writing can fail
(for example, when the buffer is full and cannot be expanded).
Add error handling to `find_matches`.

[`writeln!`]: https://doc.rust-lang.org/1.39.0/std/macro.writeln.html
[`io::Result`]: https://doc.rust-lang.org/1.39.0/std/io/type.Result.html

</aside>

We've just seen how to make this piece of code testable.
We have:

1. Identified one of the core pieces of our application.
2. Put it into its own function.
3. Made it more flexible.

Even though the goal was to make it testable, the result we ended up with
is actually a very idiomatic and reusable piece of Rust code.
That's awesome!

## Splitting your code into library and binary targets

We can do one more thing here.
So far, we've put everything we wrote into the `src/main.rs` file.
This means our current project produces a single binary,
but we can also make our code available as a library like this:

1. Put the `find_matches` function into a new `src/lib.rs`.
2. Add a `pub` in front of the `fn` to make it something that users of
   our library can access (i.e. `pub fn find_matches`).
3. Remove `find_matches` from `src/main.rs`.
4. In `fn main`, prepend the call to `find_matches` with `grrs::`
   so that it's now `grrs::find_matches(…)`.
   This means it uses the function from the library we just wrote!

The way Rust deals with projects is quite flexible,
and it's a good idea to think about
what to put into the library part of your crate early on.
You can, for example, think about writing a library
for your application-specific logic first
and then use it in your CLI just like any other library.
Or, if your project has multiple binaries,
you can put the common functionality into the library part of that crate.

<aside class="note">

**Note:**
Speaking of putting everything into a `src/main.rs`,
if we continue to do that,
it'll become difficult to read.
The [module system] can help you structure and organize your code.

[module system]: https://doc.rust-lang.org/1.39.0/book/ch07-00-managing-growing-projects-with-packages-crates-and-modules.html

</aside>


## Testing CLI applications by running them

Thus far, we've gone out of our way
to test the _business logic_ of our application,
which turned out to be the `find_matches` function.
This is very valuable and is a great first step
towards a well-tested code base.
Usually, these kinds of tests are called "unit tests".

There is a lot of code we aren't testing:
Everything that we wrote to deal with the outside world!
Imagine you wrote the main function
but accidentally left in a hard-coded string
instead of using the argument of the user-supplied path.
We should write tests for that, too!
This level of testing is often called
integration testing or system testing.

At its core, we are still writing functions
and annotating them with `#[test]`.
It's just a matter of what we do inside these functions.
For example, we'll want to use the main binary of our project
and run it like a regular program.
We will put these tests into a new file in a new directory:
`tests/cli.rs`.

<aside>

**Note:**
By convention, `cargo` will look for integration tests in the `tests/` directory.
Similarly, it will look for benchmarks in `benches/` and examples in `examples/`.
These conventions also extend to your main source code:
libraries have a `src/lib.rs` file, the main binary is `src/main.rs`,
and if there are multiple binaries, cargo expects them to be in `src/bin/<name>.rs`.
Following these conventions will make your code base more discoverable
by people used to reading Rust code.

</aside>

`grrs` is a small tool that searches for a string in a file.
We have already tested that we can find a match.
Let's think about what other functionality we can test.

Here is what I came up with:

- What happens when the file doesn't exist?
- What is the output when there is no match?
- Does our program exit with an error when we forget one (or both) arguments?

These are all valid test cases.
Additionally, we should include one test case for the happy path:
we found at least one match and we print it.

To make these kinds of tests easier, we're going to use the [`assert_cmd`] crate.
It has a bunch of neat helpers that allow us to run our main binary
and see how it behaves.
We'll also add the [`predicates`] crate, which helps us write assertions
that `assert_cmd` can test against and that have great error messages.
We won't add those dependencies to the main list,
but to a `dev dependencies` section in our `Cargo.toml`.
They are only required when developing the crate, not when using it.

```toml
{{#include testing/Cargo.toml:16:18}}
```

[`assert_cmd`]: https://docs.rs/assert_cmd
[`predicates`]: https://docs.rs/predicates

This sounds like a lot of setup.
Nevertheless, let's dive right in and create our `tests/cli.rs` file:

```rust,ignore
{{#include testing/tests/cli.rs:1:15}}
```

You can run this test with `cargo test`, just like the tests we wrote above.
It might take a little longer the first time
as `Command::cargo_bin("grrs")` needs to compile your main binary.

## Generating test files

The test we've just seen only checks that our program writes an error message
when the input file doesn't exist.
That's an important test to have, but maybe not the most important one.
Let's test that we will actually print the matches we found in a file!

We'll need to have a file whose content we know
so that we can know what our program _should_ return
and check this expectation in our code.
One idea might be to add a file to the project with custom content
and use that in our tests.
Another would be to create temporary files in our tests.
For this tutorial, we'll have a look at the latter approach.
It is more flexible and will work for other cases;
for example, when you are testing programs that change the files.

To create these temporary files, we'll be using the [`assert_fs`] crate.
Let's add it to the `dev-dependencies` in our `Cargo.toml`:

```toml
{{#include testing/Cargo.toml:19}}
```

[`assert_fs`]: https://docs.rs/assert_fs

Here is a new test case that creates a temp file (a "named" one so we can get its path),
fills it with some text, and then runs our program to see if we get the correct output.
You can write it below the other test case.
When the variable `file` goes out of scope at the end of the function,
the actual temporary file will automatically get deleted.

```rust,ignore
{{#include testing/tests/cli.rs:17:32}}
```

<aside class="exercise">

**Exercise for the reader:**
Add integration tests for passing an empty string as pattern.
Adjust the program as needed.

</aside>

## What to test?

While it can certainly be fun to write integration tests,
it will take some time to write them
as well as to update them when your application's behavior changes.
To make sure you use your time wisely,
you should ask yourself what you should test.

In general, it's a good idea to write integration tests
for all types of behavior that a user can observe.
This means that you don't need to cover all edge cases.
It usually suffices to have examples for the different types
and rely on unit tests to cover the edge cases.

It is also a good idea not to focus your tests on things you can't actively control.
It would be a bad idea to test the exact layout of `--help`
since it is generated for you.
Instead, you might just want to check that certain elements are present.

Depending on the nature of your program, you can also try to add more testing techniques.
For example, if you have extracted parts of your program
and find yourself writing a lot of example cases as unit tests
while trying to come up with all the edge cases,
you should look into [`proptest`].
If you have a program that consumes arbitrary files and parses them,
try to write a [fuzzer] to find bugs in edge cases.

[`proptest`]: https://docs.rs/proptest
[fuzzer]: https://rust-fuzz.github.io/book/introduction.html

<aside>

**Note:**
You can find the full, runnable source code used in this chapter
[in this book's repository][src].

[src]: https://github.com/rust-cli/book/tree/master/src/tutorial/testing

</aside>


<a id=tutorial_packaging></a>

# Packaging and distributing a Rust tool

If you feel confident that your program is ready for other people to use,
it is time to package and release it!

There are a few approaches, and we'll look at three of them
from quickest to set up to most convenient for users.

## Quickest: `cargo publish`

The easiest way to publish your app is with cargo.
Do you remember how we added external dependencies to our project?
Cargo downloaded them from its default crate registry: [crates.io].
With `cargo publish`, you can publish crates to [crates.io],
and this works for all crates, including those with binary targets.

Publishing a crate to [crates.io] can be done in a few steps.
First, if you haven't already, create an account on [crates.io],
which is done by authorizing you on GitHub,
so you'll need to have a GitHub account
and be logged in there.
Second, you log in using cargo on your local machine.
For that, go to your
[crates.io account page],
create a new token,
and run `cargo login <your-new-token>`.
You only need to do this once per computer.
You can learn more about this
in cargo's [publishing guide].

Now that cargo and crates.io know you,
you are ready to publish crates.
Before you hastily go ahead and publish a new crate version,
it's a good idea to open your `Cargo.toml` once more
and make sure you added the necessary metadata.
You can find all the possible fields you can set
in the documentation for [cargo's manifest format].
Here's a quick overview of some common entries:

```toml
[package]
name = "grrs"
version = "0.1.0"
authors = ["Your Name <your@email.com>"]
license = "MIT OR Apache-2.0"
description = "A tool to search files"
readme = "README.md"
homepage = "https://github.com/you/grrs"
repository = "https://github.com/you/grrs"
keywords = ["cli", "search", "demo"]
categories = ["command-line-utilities"]
```

<aside class="note">

**Note:**
This example includes the mandatory license field
with a common choice for Rust projects:
The same license that is used for the compiler itself.
It also refers to a `README.md` file.
It should include a quick description of what your project is about
and will be included not only on the crates.io page of your crate,
but GitHub shows it by default on repository pages.

</aside>

[crates.io]: https://crates.io/
[crates.io account page]: https://crates.io/me
[publishing guide]: https://doc.rust-lang.org/1.39.0/cargo/reference/publishing.html
[cargo's manifest format]: https://doc.rust-lang.org/1.39.0/cargo/reference/manifest.html

### How to install a binary from crates.io

We've seen how to publish a crate to crates.io,
and you might be wondering how to install it.
In contrast to libraries,
which cargo will download and compile for you
when you run `cargo build` or a similar command,
you'll need to tell it to explicitly install binaries.

This is done using
`cargo install <crate-name>`.
It will download the crate by default,
compile all the binary targets it contains
(in "release" mode, so it might take a while)
and copy them into the `~/.cargo/bin/` directory.
Make sure that your shell knows to look there for binaries!

It's also possible to
install crates from git repositories,
only install specific binaries of a crate,
and specify an alternative directory to install them to.
Have a look at `cargo install --help` for details.

### When to use it

`cargo install` is a simple way to install a binary crate.
It's very convenient for Rust developers to use
but has some significant downsides:
Since it will always compile your source from scratch,
users of your tool will need to have
Rust, cargo, and all other system dependencies that your project requires
installed on their machine.
Compiling large Rust codebases can take some time.

It's best to use this for distributing tools
that are targeted at other Rust developers.
For example,
a lot of cargo subcommands
like `cargo-tree` or `cargo-outdated`
can be installed with it.

## Distributing binaries

Rust is a language that compiles to native code
and statically links all dependencies by default.
When you run `cargo build`
on your project that contains a binary called `grrs`,
you'll end up with a binary file called `grrs`.
Try it out!
Using `cargo build`, it'll be `target/debug/grrs`,
and when you run `cargo build --release`, it'll be `target/release/grrs`.
Unless you use crates
that explicitly need external libraries installed on the target system
(like using the system's version of OpenSSL),
this binary will only depend on common system libraries.
That means, you take that one file,
send it to people running the same operating system as you,
and they'll be able to run it.

This is already very powerful!
It works around two of the downsides we just saw for `cargo install`:
There is no need to have Rust installed on the user's machine,
and instead of it taking a minute to compile,
they can instantly run the binary.

As we've seen, `cargo build` _already_ builds binaries for us.
The issue is that those are not guaranteed to work on all platforms.
If you run `cargo build` on your Windows machine,
you won't get a binary that works on a Mac by default.
Is there a way to generate these binaries
for all of the target platforms automatically?

### Building binary releases on CI

If your tool is open sourced and hosted on GitHub,
it's quite easy to set up a free CI (continuous integration) service
like [Travis CI].
There are other services that offer this functionality, but Travis is very popular.
This runs setup commands in a virtual machine
each time you push changes to your repository.
What those commands are, and the types of machines they run on,
is configurable.
For example, a good idea is to run `cargo test`
on a machine with Rust and some common build tools installed.
If this fails, you know there are issues in the most recent changes.

[Travis CI]: https://travis-ci.com/

We can also use this to build binaries and upload them to GitHub!
If we run `cargo build --release` and upload the binary somewhere,
we should be all set, right? Not quite.
We still need to make sure the binaries we build
are compatible with as many systems as possible.
For example, on Linux we can compile for the current system
or the `x86_64-unknown-linux-musl` target and
not depend on default system libraries.
On macOS, we can set `MACOSX_DEPLOYMENT_TARGET` to `10.7`
to only depend on system features present in versions 10.7 and older.

You can see one example of building binaries using this approach
[here][wasm-pack-travis] for Linux and macOS
and [here][wasm-pack-appveyor] for Windows using AppVeyor.

[wasm-pack-travis]: https://github.com/rustwasm/wasm-pack/blob/51e6351c28fbd40745719e6d4a7bf26dadd30c85/.travis.yml#L74-L91
[wasm-pack-appveyor]: https://github.com/rustwasm/wasm-pack/blob/51e6351c28fbd40745719e6d4a7bf26dadd30c85/.appveyor.yml

Another way is to use pre-built (i.e. Docker) images
that contain all the tools we need to build binaries.
This allows us to easily target more exotic platforms as well.
The [trust] project contains scripts that you can include in your project
and instructions on how to set this up.
It also includes support for Windows using AppVeyor.

If you'd rather set this up locally and generate the release files on your own machine,
have a look at [trust].
It uses [cross] internally, which works similar to cargo
but forwards commands to a cargo process inside a Docker container.
The definitions of the images are also available in
[cross' repository][cross].

[trust]: https://github.com/japaric/trust
[cross]: https://github.com/rust-embedded/cross

### How to install these binaries

You point your users to your release page
that might look something [like this one][wasm-pack-release],
and they can download the artifacts we've just created.
The release artifacts we've generated are nothing special.
They are just archive files that contain our binaries!
This means that users of your tool
can download them with their browser,
extract them (often automatically),
and copy the binaries to a place they like.

[wasm-pack-release]: https://github.com/rustwasm/wasm-pack/releases/tag/v0.5.1

This does require some experience with manually installing programs,
so you want to add a section to your README file
on how to install this program.

<aside class="note">

**Note:**
If you use [trust] to build your binaries and add them to GitHub releases,
you can also tell people to run
`curl -LSfs https://japaric.github.io/trust/install.sh | sh -s -- --git your-name/repo-name`
if you think that makes it easier.

</aside>

### When to use it

Having binary releases is a good idea in general.
There's hardly any downside to it.
It does not solve the problem of users having to manually
install and update your tools,
but they can quickly get the latest release's version
without the need to install Rust.

### What to package in addition to your binaries

Right now, when a user downloads our release builds,
they will get a `.tar.gz` file that only contains binary files.
In our example project,
they will just get a single `grrs` file they can run,
but there are more files we already have in our repository
that they might want to have.
The README file that tells them how to use this tool
and the license file(s), for example.
Since we already have them, they are easy to add.

There are more interesting files
that make sense, especially for command-line tools.
How about we ship a man page in addition to that README file
and config files that add completions of the possible flags to your shell?
You can write these by hand,
but _clap_, the argument parsing library we use
(which clap builds upon)
has a way to generate all these files for us.
See [this in-depth chapter][clap-man-pages]
for more details.


[clap-man-pages]: #in_depth_docs


## Getting your app into package repositories

Both approaches we've seen so far
are not how you typically install software on your machine,
especially for command-line tools that
you install using global package managers
on most operating systems.
The advantages for users are quite obvious:
There is no need to think about how to install your program
if it can be installed the same way as they install other tools.
These package managers also allow users to update their programs
when a new version is available.

Sadly, supporting different systems means
you'll have to look at how these different systems work.
For some,
it might be as easy as adding a file to your repository
(e.g. adding a Formula file like [this][rg-formula] for macOS's `brew`),
but for others, you'll often need to send in patches yourself
and add your tool to their repositories.
There are helpful tools like
[cargo-bundle](https://crates.io/crates/cargo-bundle),
[cargo-deb](https://crates.io/crates/cargo-deb), and
[cargo-aur](https://crates.io/crates/cargo-aur),
but describing how they work
and how to correctly package your tool
for those different systems is beyond the scope of this chapter.

[rg-formula]: https://github.com/BurntSushi/ripgrep/blob/31adff6f3c4bfefc9e77df40871f2989443e6827/pkg/brew/ripgrep-bin.rb

Instead,
let's have a look at a tool that is written in Rust
and that is available in many different package managers.

### An example: ripgrep

[ripgrep] is an alternative to `grep`/`ack`/`ag` and is written in Rust.
It's quite successful and is packaged for many operating systems:
Just look at [the "Installation" section][rg-install] of its README!

Note that it lists a few different options on how you can install it:
It starts with a link to the GitHub releases,
which contain the binaries so that you can download them directly,
it lists how to install it using a bunch of different package managers,
and you can also install it using `cargo install`.

This seems like a very good idea.
Don't pick and choose one of the approaches presented here.
Start with `cargo install`
and add binary releases
before finally distributing your tool using system package managers.

[ripgrep]: https://github.com/BurntSushi/ripgrep
[rg-install]: https://github.com/BurntSushi/ripgrep/tree/31adff6f3c4bfefc9e77df40871f2989443e6827#installation


<a id=in_depth_README></a>

# In-depth topics

A small collection of chapters covering some more details
that you might care about when writing your command line application.


<a id=in_depth_signals></a>

# Signal handling

Processes
like command line applications
need to react to signals sent by the operating system.
The most common example is probably <kbd>Ctrl</kbd>+<kbd>C</kbd>,
the signal that typically tells a process to terminate.
To handle signals in Rust programs
you need to consider how you can receive these signals
as well as how you can react to them.

<aside>

**Note:**
If your applications does not need to gracefully shutdown,
the default handling is fine
(i.e. exit immediately
and let the OS cleanup resources like open file handles).
In that case:
No need to do what this chapter tells you!

However,
for applications that need to clean up after themselves,
this chapter is very relevant!
For example,
if your application needs to
properly close network connections
(saying "good bye" to the processes at the other end),
remove temporary files,
or reset system settings,
read on.

</aside>

## Differences between operating systems

On Unix systems
(like Linux, macOS, and FreeBSD)
a process can receive [signals].
It can either react to them
in a default (OS-provided) way,
catch the signal and handle them in a program-defined way,
or ignore the signal entirely.

[signals]: https://manpages.ubuntu.com/manpages/bionic/en/man7/signal.7.html

Windows does not have signals.
You can use [Console Handlers]
to define callbacks that get executed when an event occurs.
There is also [structured exception handling]
which handles all the various types of system exceptions such as division by zero, invalid access exceptions, stack overflow, and so on

[Console Handlers]: https://docs.microsoft.com/en-us/windows/console/console-control-handlers
[structured exception handling]: https://docs.microsoft.com/en-us/windows/desktop/debug/structured-exception-handling

## First off: Handling Ctrl+C

The [ctrlc] crate does just what the name suggests:
It allows you to react to the user pressing <kbd>Ctrl</kbd>+<kbd>C</kbd>,
in a cross-platform way.
The main way to use the crate is this:

[ctrlc]: https://crates.io/crates/ctrlc

```rust,ignore
{{#include signals-ctrlc.rs}}
```

This is, of course, not that helpful:
It only prints a message but otherwise doesn't stop the program.

In a real-world program,
it's a good idea to instead set a variable in the signal handler
that you then check in various places in your program.
For example,
you can set an `Arc<AtomicBool>`
(a boolean shareable between threads)
in your signal handler,
and in hot loops,
or when waiting for a thread,
you periodically check its value
and break when it becomes true.

## Handling other types of signals

The [ctrlc] crate only handles <kbd>Ctrl</kbd>+<kbd>C</kbd>,
or, what on Unix systems would be called `SIGINT` (the "interrupt" signal).
To react to more Unix signals,
you should have a look at [signal-hook].
Its design is described in [this blog post][signal-hook-post],
and it is currently the library with the widest community support.

Here's a simple example:

```rust,ignore
{{#include signals-hooked.rs}}
```

[signal-hook-post]: https://vorner.github.io/2018/06/28/signal-hook.html

## Using channels

Instead of setting a variable
and having other parts of the program check it,
you can use channels:
You create a channel into which the signal handler emits a value
whenever the signal is received.
In your application code you use
this and other channels
as synchronization points between threads.
Using [crossbeam-channel] it would look something like this:

[crossbeam-channel]: https://crates.io/crates/crossbeam-channel

```rust,ignore
{{#include signals-channels.rs}}
```

## Using futures and streams

If you are using [tokio],
you are most likely already writing your application
with asynchronous patterns and an event-driven design.
Instead of using crossbeam's channels directly,
you can enable signal-hook's `tokio-support` feature.
This allows you to call [`.into_async()`]
on signal-hook's `Signals` types
to get a new type that implements `futures::Stream`.

[signal-hook]: https://crates.io/crates/signal-hook
[tokio]: https://tokio.rs/
[`.into_async()`]: https://docs.rs/signal-hook/0.1.6/signal_hook/iterator/struct.Signals.html#method.into_async

## What to do when you receive another Ctrl+C while you're handling the first Ctrl+C

Most users will press <kbd>Ctrl</kbd>+<kbd>C</kbd>,
and then give your program a few seconds to exit,
or tell them what's going on.
If that doesn't happen,
they will press <kbd>Ctrl</kbd>+<kbd>C</kbd> again.
The typical behavior is to have the application quit immediately.


<a id=in_depth_config_files></a>

# Using config files

Dealing with configurations can be annoying
especially if you support multiple operating systems
which all have their own places
for short- and long-term files.

There are multiple solutions to this,
some being more low-level than others.

The easiest crate to use for this is [`confy`].
It asks you for the name of your application
and requires you to specify the config layout
via a `struct` (that is `Serialize`, `Deserialize`)
and it will figure out the rest!

```rust,ignore
#[derive(Debug, Serialize, Deserialize)]
struct MyConfig {
    name: String,
    comfy: bool,
    foo: i64,
}

fn main() -> Result<(), io::Error> {
    let cfg: MyConfig = confy::load("my_app")?;
    println!("{:#?}", cfg);
    Ok(())
}
```

This is incredibly easy to use
for which you of course surrender configurability.
But if a simple config is all you want,
this crate might be for you!

[`confy`]: https://docs.rs/confy/0.3.1/confy/

## Configuration environments

<aside class="todo">

**TODO**

1. Evaluate crates that exist
2. Cli-args + multiple configs + env variables
3. Can [`configure`] do all this? Is there a nice wrapper around it?

</aside>

[`configure`]: https://docs.rs/configure/0.1.1/configure/


<a id=in_depth_exit_code></a>

# Exit codes

A program doesn't always succeed.
And when an error occurs,
you should make sure to emit the necessary information correctly.
In addition to
[telling the user about errors](human-communication.html),
on most systems,
when a process exits,
it also emits an exit code
(an integer between 0 and 255 is compatible with most platforms).
You should try to emit the correct code
for your program's state.
For example,
in the ideal case when your program succeeds,
it should exit with `0`.

When an error occurs, it gets a bit more complicated, though.
In the wild,
many tools exit with `1` when a common failure occurs.
Currently, Rust sets an exit code of `101` when the process panicked.
Beyond that, people have done many things in their programs.

So, what to do?
The BSD ecosystem has collected a common definition for their exit codes
(you can find them [here][`sysexits.h`]).
The Rust library [`exitcode`] provides these same codes,
ready to be used in your application.
Please see its API documentation for the possible values to use.

After you add the `exitcode` dependency to your `Cargo.toml`,
you can use it like this:

```rust,ignore
fn main() {
    // ...actual work...
    match result {
        Ok(_) => {
            println!("Done!");
            std::process::exit(exitcode::OK);
        }
        Err(CustomError::CantReadConfig(e)) => {
            eprintln!("Error: {}", e);
            std::process::exit(exitcode::CONFIG);
        }
        Err(e) => {
            eprintln!("Error: {}", e);
            std::process::exit(exitcode::DATAERR);
        }
    }
}
```


[`exitcode`]: https://crates.io/crates/exitcode
[`sysexits.h`]: https://www.freebsd.org/cgi/man.cgi?query=sysexits&apropos=0&sektion=0&manpath=FreeBSD+11.2-stable&arch=default&format=html


<a id=in_depth_human_communication></a>

# Communicating with humans

Make sure to read [the chapter on CLI output][output]
in the tutorial first.
It covers how to write output to the terminal,
while this chapter will talk about _what_ to output.

[output]: #tutorial_output

## When everything is fine

It is useful to report on the application's progress
even when everything is fine.
Try to be informative and concise in these messages.
Don't use overly technical terms in the logs.
Remember:
the application is not crashing
so there's no reason for users to look up errors.

Most importantly,
be consistent in the style of communication.
Use the same prefixes and sentence structure
to make the logs easily skimmable.

Try to let your application output tell a story
about what it's doing
and how it impacts the user.
This can involve showing a timeline of steps involved
or even a progress bar and indicator for long-running actions.
The user should at no point
get the feeling that the application is doing something mysterious
that they cannot follow.

## When it's hard to tell what's going on

When communicating non-nominal state it's important to be consistent.
A heavily logging application that doesn't follow strict logging levels
provides the same amount, or even less information
than a non-logging application.

Because of this,
it's important to define the severity of events
and messages that are related to it;
then use consistent log levels for them.
This way users can select the amount of logging themselves
via `--verbose` flags
or environment variables (like `RUST_LOG`).

The commonly used `log` crate
[defines][log-levels] the following levels
(ordered by increasing severity):

- trace
- debug
- info
- warning
- error

It's a good idea to think of _info_ as the default log level.
Use it for, well, informative output.
(Some applications that lean towards a more quiet output style
might only show warnings and errors by default.)

Additionally,
it's always a good idea to use similar prefixes
and sentence structure across log messages,
making it easy to use a tool like `grep` to filter for them.
A message should provide enough context by itself
to be useful in a filtered log
while not being *too* verbose at the same time.

[log-levels]: https://docs.rs/log/0.4.4/log/enum.Level.html

### Example log statements

```sh
error: could not find `Cargo.toml` in `/home/you/project/`
```

```sh
=> Downloading repository index
=> Downloading packages...
```

The following log output is taken from [wasm-pack]:

```sh
 [1/7] Adding WASM target...
 [2/7] Compiling to WASM...
 [3/7] Creating a pkg directory...
 [4/7] Writing a package.json...
 > [WARN]: Field `description` is missing from Cargo.toml. It is not necessary, but recommended
 > [WARN]: Field `repository` is missing from Cargo.toml. It is not necessary, but recommended
 > [WARN]: Field `license` is missing from Cargo.toml. It is not necessary, but recommended
 [5/7] Copying over your README...
 > [WARN]: origin crate has no README
 [6/7] Installing WASM-bindgen...
 > [INFO]: wasm-bindgen already installed
 [7/7] Running WASM-bindgen...
 Done in 1 second
```

## When panicking

One aspect often forgotten is that
your program also outputs something when it crashes.
In Rust, "crashes" are most often "panics"
(i.e., "controlled crashing"
in contrast to "the operating system killed the process").
By default,
when a panic occurs,
a "panic handler" will print some information to the console.

For example,
if you create a new binary project
with `cargo new --bin foo`
and replace the content of `fn main` with `panic!("Hello World")`,
you get this when you run your program:

```sh
thread 'main' panicked at 'Hello, world!', src/main.rs:2:5
note: Run with `RUST_BACKTRACE=1` for a backtrace.
```

This is useful information to you, the developer.
(Surprise: the program crashed because of line 2 in your `main.rs` file).
But for a user who doesn't even have access to the source code,
this is not very valuable.
In fact, it most likely is just confusing.
That's why it's a good idea to add a custom panic handler,
that provides a bit more end-user focused output.

One library that does just that is called [human-panic].
To add it to your CLI project,
you import it
and call the `setup_panic!()` macro
at the beginning of your `main` function:

```rust,ignore
use human_panic::setup_panic;

fn main() {
   setup_panic!();

   panic!("Hello world")
}
```

This will now show a very friendly message,
and tells the user what they can do:

```sh
Well, this is embarrassing.

foo had a problem and crashed. To help us diagnose the problem you can send us a crash report.

We have generated a report file at "/var/folders/n3/dkk459k908lcmkzwcmq0tcv00000gn/T/report-738e1bec-5585-47a4-8158-f1f7227f0168.toml". Submit an issue or email with the subject of "foo Crash Report" and include the report as an attachment.

- Authors: Your Name <your.name@example.com>

We take privacy seriously, and do not perform any automated error collection. In order to improve the software, we rely on people to submit reports.

Thank you kindly!
```

[human-panic]: https://crates.io/crates/human-panic
[wasm-pack]: https://crates.io/crates/wasm-pack


<a id=in_depth_machine_communication></a>

# Communicating with machines

The power of command-line tools really comes to shine
when you are able to combine them.
This is not a new idea:
In fact, this is a sentence from the [Unix philosophy]:

> Expect the output of every program to become the input to another, as yet unknown, program.

[Unix philosophy]: https://en.wikipedia.org/wiki/Unix_philosophy

If our programs fulfill this expectation,
our users will be happy.
To make sure this works well,
we should provide not just pretty output for humans,
but also a version tailored to what other programs need.
Let's see how we can do this.

<aside>

**Note:**
Make sure to read [the chapter on CLI output][output]
in the tutorial first.
It covers how to write output to the terminal.

[output]: #tutorial_output

</aside>

## Who's reading this?

The first question to ask is:
Is our output for a human in front of a colorful terminal,
or for another program?
To answer this,
we can use the [IsTerminal] trait:

[IsTerminal]: https://doc.rust-lang.org/stable/std/io/trait.IsTerminal.html

```rust,ignore
use std::io::IsTerminal;

if std::io::stdout().is_terminal() {
    println!("I'm a terminal");
} else {
    println!("I'm not");
}
```

Depending on who will read our output, we can then add extra information.
Humans tend to like colors, for example, if you run `ls` in a random Rust project,
you might see something like this:

```sh
$ ls
CODE_OF_CONDUCT.md   LICENSE-APACHE       examples
CONTRIBUTING.md      LICENSE-MIT          proptest-regressions
Cargo.lock           README.md            src
Cargo.toml           convey_derive        target
```

Because this style is made for humans, in most configurations
it'll even print some of the names (like `src`) in color
to show that they are directories.
If you instead pipe this to a file, or a program like `cat`,
`ls` will adapt its output.
Instead of using columns that fit my terminal window
it will print every entry on its own line.
It will also not emit any colors.

```sh
$ ls | cat
CODE_OF_CONDUCT.md
CONTRIBUTING.md
Cargo.lock
Cargo.toml
LICENSE-APACHE
LICENSE-MIT
README.md
convey_derive
examples
proptest-regressions
src
target
```

## Easy output formats for machines

Historically,
the only type of output command-line tools produced were strings.
This is usually fine for people in front of terminals,
who are able to read text and reason about its meaning.
Other programs usually don't have that ability, though:
The only way for them to understand the output of a tool
like `ls` is if the author of the program included a parser
that happens to work for whatever `ls` outputs.

This often means that output was limited to what is easy to parse.
Formats like TSV (tab-separated values),
where each record is on its own line,
and each line contains tab-separated content, are very popular.
These simple formats based on lines of text allow tools like `grep`
to be used on the output of tools like `ls`.
`| grep Cargo` doesn't care if your lines are from `ls` or file,
it will just filter line by line.

The downside of this is that you can't use an easy `grep` invocation 
to filter all the directories that `ls` gave you.
For that, each directory item would need to carry additional data.

## JSON output for machines

Tab-separated values is a simple way to output structured data
but it requires the other program to know which fields to expect
(and in which order)
and it's difficult to output messages of different types.
For example,
let's say our program wanted to message the consumer
that it is currently waiting for a download,
and afterwards output a message describing the data it got.
Those are very different kinds of messages
and trying to unify them in a TSV output
would require us to invent a way to differentiate them.
Same when we wanted to print a message that contains two lists
of items of varying lengths.

Still, it's a good idea to choose a format that is easily parsable
in most programming languages/environments.
Thus, over the last years a lot of applications gained the ability
to output their data in [JSON].
It's simple enough that parsers exist in practically every language
yet powerful enough to be useful in a lot of cases.
While its a text format that can be read by humans,
a lot of people have also worked on implementations that are very fast at
parsing JSON data and serializing data to JSON.

[JSON]: https://www.json.org/

In the description above, we've talked about "messages" being written by our program.
This is a good way of thinking about the output:
Your program doesn't necessarily only output one blob of data
but may in fact emit a lot of different information while it is running.
One easy way to support this approach when outputting JSON
is to write one JSON document per message and to put each JSON document on new line
(sometimes called [Line-delimited JSON][jsonlines]).
This can make implementations as simple as using a regular `println!`.

[jsonlines]: https://en.wikipedia.org/wiki/JSON_streaming#Line-delimited_JSON

Here's a simple example, using the `json!` macro from [serde_json]
to quickly write valid JSON in your Rust source code:

[serde_json]: https://crates.io/crates/serde_json

```rust,ignore
{{#include machine-communication.rs}}
```

And here is the output:

```sh
$ cargo run -q
Hello world
$ cargo run -q -- --json
{"content":"Hello world","type":"message"}
```

(Running `cargo` with `-q` suppresses its usual output.
The arguments after `--` are passed to our program.)

### Practical example: ripgrep

_[ripgrep]_ is a replacement for _grep_ or _ag_, written in Rust.
By default it will produce output like this:

[ripgrep]: https://github.com/BurntSushi/ripgrep

```sh
$ rg default
src/lib.rs
37:    Output::default()

src/components/span.rs
6:    Span::default()
```

But given `--json` it will print:

```sh
$ rg default --json
{"type":"begin","data":{"path":{"text":"src/lib.rs"}}}
{"type":"match","data":{"path":{"text":"src/lib.rs"},"lines":{"text":"    Output::default()\n"},"line_number":37,"absolute_offset":761,"submatches":[{"match":{"text":"default"},"start":12,"end":19}]}}
{"type":"end","data":{"path":{"text":"src/lib.rs"},"binary_offset":null,"stats":{"elapsed":{"secs":0,"nanos":137622,"human":"0.000138s"},"searches":1,"searches_with_match":1,"bytes_searched":6064,"bytes_printed":256,"matched_lines":1,"matches":1}}}
{"type":"begin","data":{"path":{"text":"src/components/span.rs"}}}
{"type":"match","data":{"path":{"text":"src/components/span.rs"},"lines":{"text":"    Span::default()\n"},"line_number":6,"absolute_offset":117,"submatches":[{"match":{"text":"default"},"start":10,"end":17}]}}
{"type":"end","data":{"path":{"text":"src/components/span.rs"},"binary_offset":null,"stats":{"elapsed":{"secs":0,"nanos":22025,"human":"0.000022s"},"searches":1,"searches_with_match":1,"bytes_searched":5221,"bytes_printed":277,"matched_lines":1,"matches":1}}}
{"data":{"elapsed_total":{"human":"0.006995s","nanos":6994920,"secs":0},"stats":{"bytes_printed":533,"bytes_searched":11285,"elapsed":{"human":"0.000160s","nanos":159647,"secs":0},"matched_lines":2,"matches":2,"searches":2,"searches_with_match":2}},"type":"summary"}
```

As you can see, each JSON document is an object (map) containing a `type` field.
This would allow us to write a simple frontend for `rg` that reads these documents
as they come in and show the matches (as well the files they are in)
even while _ripgrep_ is still searching.

<aside>

**Note:**
This is how Visual Studio Code uses _ripgrep_ for its code search.

</aside>

## How to deal with input piped into us

Let's say we have a program that reads the number of words in a file:

``` rust,ignore
{{#include machine-communication-wc.rs}}
```

It takes the path to a file, reads it line by line, and counts the number of
words separated by a space.

When you run it, it outputs the total words in the file:

``` console
$ cargo run README.md
Words in README.md: 47
```

But what if we wanted to count the number of words piped into the program?
Rust programs can read data passed in via stdin with the 
[Stdin struct](https://doc.rust-lang.org/std/io/struct.Stdin.html) which you can
obtain via [the stdin function](https://doc.rust-lang.org/std/io/fn.stdin.html)
from the standard library. Similar to reading the lines of a file, it can read
the lines from stdin.

Here's a program that counts the words of what's piped in via stdin

``` rust,ignore
{{#include machine-communication-stdin.rs}}
```

If you run that program with text piped in, with `-` representing the intent to
read from `stdin`, it'll output the word count:

``` console
$ echo "hi there friend" | cargo run -- -
Words from stdin: 3
```

It requires that stdin is not interactive because we're expecting input that's
piped through to the program, not text that's typed in at runtime. If stdin is
a tty, it outputs the help docs so that it's clear why it doesn't work.


<a id=in_depth_docs></a>

# Rendering documentation for your CLI apps

Documentation for CLIs usually consists of a `--help` section in the command
and a manual (`man`) page.

Both can be automatically generated when using [`clap`](https://crates.io/crates/clap),
via [`clap_mangen`](https://crates.io/crates/clap_mangen) crate.

```rust,ignore
#[derive(Parser)]
pub struct Head {
    /// file to load
    pub file: PathBuf,
    /// how many lines to print
    #[arg(short = "n", default_value = "5")]
    pub count: usize,
}
```

Secondly, you need to use a `build.rs` to generate the manual file at compile time
from the definition of your app in code.

There are a few things to keep in mind (such as how you want to package your binary)
but for now we simply put the `man` file next to our `src` folder.

```rust,ignore
use clap::CommandFactory;

#[path="src/cli.rs"]
mod cli;

fn main() -> std::io::Result<()> {
    let out_dir = std::path::PathBuf::from(std::env::var_os("OUT_DIR").ok_or_else(|| std::io::ErrorKind::NotFound)?);
    let cmd = cli::Head::command();

    let man = clap_mangen::Man::new(cmd);
    let mut buffer: Vec<u8> = Default::default();
    man.render(&mut buffer)?;

    std::fs::write(out_dir.join("head.1"), buffer)?;

    Ok(())
}
```

When you now compile your application there will be a `head.1` file
in your project directory.

If you open that in `man` you'll be able to admire your free documentation.


<a id=resources_README></a>

# Resources

Collaboration / help
- [cli-and-tui Discord Channel](https://discord.com/channels/273534239310479360/943315667430563862)

## Crates referenced in this book

- [anyhow](https://crates.io/crates/anyhow) - provides `anyhow::Error` for easy error handling
- [assert_cmd](https://crates.io/crates/assert_cmd) - simplifies integration testing of CLIs
- [assert_fs](https://crates.io/crates/assert_fs) - Setup input files and test output files
- [clap-verbosity-flag](https://crates.io/crates/clap-verbosity-flag) - adds a `--verbose` flag to clap CLIs
- [clap](https://crates.io/crates/clap) - command line argument parser
- [confy](https://crates.io/crates/confy) - boilerplate-free configuration management
- [crossbeam-channel](https://crates.io/crates/crossbeam-channel) - provides multi-producer multi-consumer channels for message passing
- [ctrlc](https://crates.io/crates/ctrlc) - easy ctrl-c handler
- [env_logger](https://crates.io/crates/env_logger) - implements a logger configurable via environment variables
- [exitcode](https://crates.io/crates/exitcode) - system exit code constants
- [human-panic](https://crates.io/crates/human-panic) - panic message handler
- [indicatif](https://crates.io/crates/indicatif) - progress bars and spinners
- [log](https://crates.io/crates/log) - provides logging abstracted over implementation
- [predicates](https://crates.io/crates/predicates) - implements boolean-valued predicate functions
- [proptest](https://crates.io/crates/proptest) - property testing framework
- [serde_json](https://crates.io/crates/serde_json) - serialize/deserialize to JSON
- [signal-hook](https://crates.io/crates/signal-hook) - handles UNIX signals
- [tokio](https://crates.io/crates/tokio) - asynchronous runtime
- [wasm-pack](https://crates.io/crates/wasm-pack) - tool for building WebAssembly

## Other crates

Due to the constantly-changing landscape of Rust crates, a good place to find
crates is the [lib.rs](https://lib.rs) crate index, including:
- [Command-line interface](https://lib.rs/command-line-interface)
- [Configuration](https://lib.rs/config)
- [Database interfaces](https://lib.rs/database)
- [Encoding](https://lib.rs/encoding)
- [Filesystem](https://lib.rs/filesystem)
- [HTTP Client](https://lib.rs/web-programming/http-client)
- [Operating systems](https://lib.rs/os)

Other resources:
- [Rust Cookbook](https://rust-lang-nursery.github.io/rust-cookbook/)
- [rosetta-rs](https://github.com/rosetta-rs)