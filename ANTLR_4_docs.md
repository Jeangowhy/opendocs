<!-- 
while read -r it
do
    echo "/$it" >> $0
    cat "$it" >> $0
done <<EOF
README.md
ANTLR-HOUSE-RULES.md
EOF
exit -->

# Contents

[ANTLR4 Runtimes](https://vscode.dev/github/antlr/antlr4/blob/master/doc/index.md)

* [README.md](#/README.md)
* [ANTLR-HOUSE-RULES.md](#/ANTLR-HOUSE-RULES.md)

Sections

* [index.md](#/doc/index.md)
* [Getting Started with ANTLR v4](#/doc/getting-started.md)
* [IDEs.md](#/doc/IDEs.md)
* [Grammar Lexicon](#/doc/lexicon.md)
* [Grammar Structure](#/doc/grammars.md)
* [Parser Rules](#/doc/parser-rules.md)
* [Left-recursive rules](#/doc/left-recursion.md)
* [Actions and Attributes](#/doc/actions.md)
* [Lexer Rules](#/doc/lexer-rules.md)
* [Wildcard Operator and Nongreedy Subrules](#/doc/wildcard.md)
* [Parse Tree Listeners](#/doc/listeners.md)
* [Parse Tree Matching and XPath](#/doc/tree-matching.md)
* [Semantic Predicates](#/doc/predicates.md)
* [Options](#/doc/options.md)
* [ANTLR Tool Command Line Options](#/doc/tool-options.md)
* [Runtime Libraries and Code Generation Targets](#/doc/targets.md)

    + [java-target.md](#/doc/java-target.md)
    + [csharp-target.md](#/doc/csharp-target.md)
    + [python-target.md](#/doc/python-target.md)
    + [typescript-target.md](#/doc/typescript-target.md)
    + [javascript-target.md](#/doc/javascript-target.md)
    + [ace-javascript-target.md](#/doc/ace-javascript-target.md)
    + [go-target.md](#/doc/go-target.md)
    + [go-changes.md](#/doc/go-changes.md)
    + [cpp-target.md](#/doc/cpp-target.md)
    + [swift-target.md](#/doc/swift-target.md)
    + [php-target.md](#/doc/php-target.md)
    + [dart-target.md](#/doc/dart-target.md)

* [Unicode U+FFFF, U+10FFFF character streams](#/doc/unicode.md)
* [Parsing binary streams](#/doc/parsing-binary-files.md)
* [Parser and lexer interpreters](#/doc/interpreters.md)
* [Writing target-agnostic grammars](#/doc/target-agnostic-grammars.md)
* [Resources](#/doc/resources.md)

Building / releasing ANTLR itself

* [Building ANTLR itself](#/doc/antlr-project-testing.md)
* [Contributing to ANTLR](#/doc/building-antlr.md)
* [Cutting an ANTLR Release](#/doc/creating-a-language-target.md)
* [ANTLR project unit tests](#/doc/releasing-antlr.md)
* [Creating an ANTLR Language Target](#/CONTRIBUTING.md)

FAQs

* [getting-started.md](#/doc/faq/getting-started.md)
* [actions-preds.md](#/doc/faq/actions-preds.md)
* [error-handling.md](#/doc/faq/error-handling.md)
* [general.md](#/doc/faq/general.md)
* [index.md](#/doc/faq/index.md)
* [installation.md](#/doc/faq/installation.md)
* [lexical.md](#/doc/faq/lexical.md)
* [parse-trees.md](#/doc/faq/parse-trees.md)
* [translation.md](#/doc/faq/translation.md)

Others

* [Docker README.md](#/docker/README.md)
* [Antlr4Package.md](#/runtime/Cpp/cmake/Antlr4Package.md)
* [README.md](#/runtime/Cpp/cmake/README.md)
* [generate.cmd](#/runtime/Cpp/demo/generate.cmd)
* [README.md](#/runtime/Cpp/demo/README.md)
* [deploy-windows.cmd](#/runtime/Cpp/deploy-windows.cmd)
* [README.md](#/runtime/Cpp/README.md)
* [pack.cmd](#/runtime/Cpp/runtime/nuget/pack.cmd)
* [README.md](#/runtime/CSharp/src/README.md)
* [readme.md](#/runtime/CSharp/tests/issue-3079/readme.md)
* [README.md](#/runtime/Dart/README.md)
* [README.md](#/runtime/JavaScript/README.md)
* [README.md](#/runtime-testsuite/test/org/antlr/v4/test/runtime/README.md)
* [README.md](#/scripts/parse-extended-pictographic/README.md)

<a id="README.md"></a>
<a id="/README.md"></a>

# ANTLR v4

[![Java 11+](https://img.shields.io/badge/java-11+-4c7e9f.svg)](http://java.oracle.com)
[![License](https://img.shields.io/badge/license-BSD-blue.svg)](https://raw.githubusercontent.com/antlr/antlr4/master/LICENSE.txt)

**ANTLR** (ANother Tool for Language Recognition) is a powerful parser generator for reading, processing, executing, or translating structured text or binary files. It's widely used to build languages, tools, and frameworks. From a grammar, ANTLR generates a parser that can build parse trees and also generates a listener interface (or visitor) that makes it easy to respond to the recognition of phrases of interest.

**Dev branch build status**

[![MacOSX, Windows, Linux](https://github.com/antlr/antlr4/actions/workflows/hosted.yml/badge.svg)](https://github.com/antlr/antlr4/actions/workflows/hosted.yml) (github actions)

<!--
* [![Windows](https://github.com/antlr/antlr4/actions/workflows/windows.yml/badge.svg?branch=dev)](https://github.com/antlr/antlr4/actions/workflows/windows.yml) (github actions)

* [![Circle CI Build Status (Linux)](https://img.shields.io/circleci/build/gh/antlr/antlr4/master?label=Linux)](https://app.circleci.com/pipelines/github/antlr/antlr4) (CircleCI)

[![AppVeyor CI Build Status (Windows)](https://img.shields.io/appveyor/build/parrt/antlr4?label=Windows)](https://ci.appveyor.com/project/parrt/antlr4) 
[![Travis-CI Build Status (Swift-Linux)](https://img.shields.io/travis/antlr/antlr4.svg?label=Linux-Swift&branch=master)](https://travis-ci.com/github/antlr/antlr4)
-->


## Versioning

ANTLR 4 supports 10 target languages
(Cpp, CSharp, Dart, Java, JavaScript, PHP, Python3, Swift, TypeScript, Go),
and ensuring consistency across these targets is a unique and highly valuable feature.
To ensure proper support of this feature, each release of ANTLR is a complete release of the tool and the 10 runtimes, all with the same version.
As such, ANTLR versioning does not strictly follow semver semantics:

* a component may be released with the latest version number even though nothing has changed within that component since the previous release
* major version is bumped only when ANTLR is rewritten for a totally new "generation", such as ANTLR3 -> ANTLR4 (LL(\*) -> ALL(\*) parsing)
* minor version updates may include minor breaking changes, the policy is to regenerate parsers with every release (4.11 -> 4.12)
* backwards compatibility is only guaranteed for patch version bumps (4.11.1 -> 4.11.2)

If you use a semver verifier in your CI, you probably want to apply special rules for ANTLR, such as treating minor change as a major change.

## Repo branch structure

The default branch for this repo is [`master`](https://github.com/antlr/antlr4/tree/master), which is the latest stable release and has tags for the various releases; e.g., see release tag [4.9.3](https://github.com/antlr/antlr4/tree/4.9.3).  Branch [`dev`](https://github.com/antlr/antlr4/tree/dev) is where development occurs between releases and all pull requests should be derived from that branch. The `dev` branch is merged back into `master` to cut a release and the release state is tagged (e.g., with `4.10-rc1` or `4.10`.) Visually our process looks roughly like this:

<img src="doc/images/new-antlr-branches.png" width="500">

The Go target now has its own dedicated repo:

```bash
$ go get github.com/antlr4-go/antlr
```
**Note**
The dedicated Go repo is for `go get` and `import` only. Go runtime development is still performed in the main `antlr/antlr4` repo. 

## Authors and major contributors

* [Terence Parr](http://www.cs.usfca.edu/~parrt/), parrt@cs.usfca.edu
ANTLR project lead and supreme dictator for life
[University of San Francisco](http://www.usfca.edu/)
* [Sam Harwell](http://tunnelvisionlabs.com/) (Tool co-author, Java and original C# target)
* [Eric Vergnaud](https://github.com/ericvergnaud) (Javascript, TypeScript, Python2, Python3 targets and maintenance of C# target)
* [Peter Boyer](https://github.com/pboyer) (Go target)
* [Mike Lischke](http://www.soft-gems.net/) (C++ completed target)
* Dan McLaughlin (C++ initial target)
* David Sisson (C++ initial target and test)
* [Janyou](https://github.com/janyou) (Swift target)
* [Ewan Mellor](https://github.com/ewanmellor), [Hanzhou Shi](https://github.com/hanjoes) (Swift target merging)
* [Ben Hamilton](https://github.com/bhamiltoncx) (Full Unicode support in serialized ATN and all languages' runtimes for code points > U+FFFF)
* [Marcos Passos](https://github.com/marcospassos) (PHP target)
* [Lingyu Li](https://github.com/lingyv-li) (Dart target)
* [Ivan Kochurkin](https://github.com/KvanTTT) has made major contributions to overall quality, error handling, and Target performance.
* [Justin King](https://github.com/jcking) has done a huge amount of work across multiple targets, but especially for C++.
* [Ken Domino](https://github.com/kaby76) has a knack for finding bugs/issues and analysis; also a major contributor on the [grammars-v4 repo](https://github.com/antlr/grammars-v4).
* [Jim Idle](https://github.com/jimidle) has contributed to previous versions of ANTLR and recently jumped back in to solve a major problem with the Go target.


## Useful information

* [Release notes](https://github.com/antlr/antlr4/releases)
* [Getting started with v4](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md)
* [Official site](http://www.antlr.org/)
* [Documentation](https://github.com/antlr/antlr4/blob/master/doc/index.md)
* [FAQ](https://github.com/antlr/antlr4/blob/master/doc/faq/index.md)
* [ANTLR code generation targets](https://github.com/antlr/antlr4/blob/master/doc/targets.md)<br>(Currently: Java, C#, Python3, JavaScript, TypeScript, Go, C++, Swift, Dart, PHP)
* _Note: As of version 4.14, we are dropping support for Python 2. We love the Python
community, but Python 2 support was officially halted in Jan 2020. More recently,
GiHub also dropped support for Python 2, which has made it impossible for us to
maintain a consistent level of quality across targets (we use GitHub for our CI).
Long live Python 3!_
* [Java API](http://www.antlr.org/api/Java/index.html)
* [ANTLR v3](http://www.antlr3.org/)
* [v3 to v4 Migration, differences](https://github.com/antlr/antlr4/blob/master/doc/faq/general.md)

You might also find the following pages useful, particularly if you want to mess around with the various target languages.
 
* [How to build ANTLR itself](https://github.com/antlr/antlr4/blob/master/doc/building-antlr.md)
* [How we create and deploy an ANTLR release](https://github.com/antlr/antlr4/blob/master/doc/releasing-antlr.md)

## The Definitive ANTLR 4 Reference

Programmers run into parsing problems all the time. Whether it’s a data format like JSON, a network protocol like SMTP, a server configuration file for Apache, a PostScript/PDF file, or a simple spreadsheet macro language—ANTLR v4 and this book will demystify the process. ANTLR v4 has been rewritten from scratch to make it easier than ever to build parsers and the language applications built on top. This completely rewritten new edition of the bestselling Definitive ANTLR Reference shows you how to take advantage of these new features.

You can buy the book [The Definitive ANTLR 4 Reference](http://amzn.com/dp/1934356999) at amazon or an [electronic version at the publisher's site](https://pragprog.com/book/tpantlr2/the-definitive-antlr-4-reference).

You will find the [Book source code](http://pragprog.com/titles/tpantlr2/source_code) useful.

## Additional grammars
[This repository](https://github.com/antlr/grammars-v4) is a collection of grammars without actions where the
root directory name is the all-lowercase name of the language parsed
by the grammar. For example, java, cpp, csharp, c, etc...

<a id="ANTLR-HOUSE-RULES.md"></a>
<a id="/ANTLR-HOUSE-RULES.md"></a>

# ANTLR HOUSE RULES

*Last updated: Sept 10, 2022*

This brief document describes best practices for us to all get along and for the benefit of the project.  Collaborating on this project poses a number of difficulties:

* different native languages
* different time zones
* lack of common company or other organization as social glue
* we are just github userids without personal connection to most other contributors
* those developers able to contribute to such a complex project typically have a lot of experience and, consequently, strong opinions

Effective communication is difficult under the circumstances and civil discourse is a requirement to keep the project on track.  Over 35 years, in-fighting between contributors has made parrt's job as supreme dictator for life much more difficult.

Rules

1. Assume good intentions of the other party.
2. Try to be welcoming and respectful of differing viewpoints experiences.
2. No personal attacks, meaning ideas can be bad in your comments but not people.  Replace "You are ..." with "Your idea is ...".
3. Control your anger please. No hate speech, racism, sexism, or ethnocentrism. No trolling or insulting. See rule #1.
2. Be tolerant and understanding of non-native English speakers' word choice and phrasing.  This is a huge source of misunderstandings; see rule #1. For example, to a native English speaker "I cannot *approve* this" makes it sound like the writer has control over the readers contribution. Instead, the writer likely meant "I cannot *support* this." See rule #1.
3. Soften word choice to use conditional tenses and helper words. For example, use phrases such as "I'm not sure this is a good idea because ..." or "I wonder if you'd consider this other possibility: ..." etc...

Supreme dictator for life parrt has final say. His decisions will not always be correct nor to your liking, but he has a difficult cost-benefit equation to solve for every bug fix, feature, and PR.

Any text contrary to these house rules will likely be edited and replaced with an admonishment by parrt.

Send concerns to parrt@antlr.org.

<a id="index.md"></a>
<a id="/doc/index.md"></a>

# ANTLR 4 Documentation

Please check [Frequently asked questions (FAQ)](faq/index.md) before asking questions on stackoverflow or antlr-discussion list.

Notes:
<ul>
<li>To add to or improve this documentation, <a href=https://help.github.com/articles/fork-a-repo>fork</a> the <a href=https://github.com/antlr/antlr4>antlr/antlr4 repo</a> then update this `doc/index.md` or file(s) in that directory.  Submit a <a href=https://help.github.com/articles/creating-a-pull-request>pull request</a> to get your changes incorporated into the main repository. Do not mix code and documentation updates in the sample pull request. <b>You must sign the contributors.txt certificate of origin with your pull request if you've not done so before.</b></li>

<li>Copyright © 2012, The Pragmatic Bookshelf.  Pragmatic Bookshelf grants a nonexclusive, irrevocable, royalty-free, worldwide license to reproduce, distribute, prepare derivative works, and otherwise use this contribution as part of the ANTLR project and associated documentation.</li>

<li>Much of this text was copied with permission from the <a href=http://pragprog.com/book/tpantlr2/the-definitive-antlr-4-reference>The Definitive ANTLR 4 Reference</a>, though it is being morphed over time as the tool changes.</li>
</ul>

Links in the documentation refer to various sections of the book but have been redirected to the general book page on the publisher's site. There are two excerpts on the publisher's website that might be useful to you without having to purchase the book: [Let's get Meta](http://media.pragprog.com/titles/tpantlr2/picture.pdf) and [Building a Translator with a Listener](http://media.pragprog.com/titles/tpantlr2/listener.pdf). You should also consider reading the following books (the vid describes the reference book):

<a href=""><img src="https://github.com/antlr/antlr4/raw/master/doc/images/tpantlr2.png" width=120></a>
<a href=""><img src="https://github.com/antlr/antlr4/raw/master/doc/images/tpdsl.png" width=120></a>
<a href="https://www.youtube.com/watch?v=OAoA3E-cyug"><img src="https://github.com/antlr/antlr4/raw/master/doc/images/teronbook.png" width=250></a>

This documentation is a reference and summarizes grammar syntax and the key semantics of ANTLR grammars. The source code for all examples in the book, not just this chapter, are free at the publisher's website. The following video is a general tour of ANTLR 4 and includes a description of how to use parse tree listeners to process Java files easily:

<a href="https://vimeo.com/59285751"><img src="https://github.com/antlr/antlr4/raw/master/doc/images/tertalk.png" width=200></a>

For those using Java, here's a great [set of ANTLR in Intellij notes](https://docs.google.com/document/d/1gQ2lsidvN2cDUUsHEkT05L-wGbX5mROB7d70Aaj3R64/edit#heading=h.xr0jj8vcdsgc) by Andreas Stefik.

<a id="getting-started.md"></a>
<a id="/doc/getting-started.md"></a>

# Getting Started with ANTLR v4

Hi and welcome to the version 4 release of ANTLR! See [Why do we need ANTLR v4?](faq/general.md) and the [preface of the ANTLR v4 book](http://media.pragprog.com/titles/tpantlr2/preface.pdf).

## Getting started the easy way using antlr4-tools

To play around with ANTLR without having to worry about installing it and the Java needed to execute it, use [antlr4-tools](https://github.com/antlr/antlr4-tools). The only requirement is Python3, which is typically installed on all developer machines on all operating systems. (See below for Windows issue.)

```bash
$ pip install antlr4-tools
```

That command creates `antlr4` and `antlr4-parse` executables that, if necessary, will download and install Java 11 plus the latest ANTLR jar:

```bash
$ antlr4 
Downloading antlr4-4.13.2-complete.jar
ANTLR tool needs Java to run; install Java JRE 11 yes/no (default yes)? y
Installed Java in /Users/parrt/.jre/jdk-11.0.15+10-jre; remove that dir to uninstall
ANTLR Parser Generator  Version 4.13.2
 -o ___              specify output directory where all output is generated
 -lib ___            specify location of grammars, tokens files
...
```

Let's play with a simple grammar:

```
grammar Expr;		
prog:	expr EOF ;
expr:	expr ('*'|'/') expr
    |	expr ('+'|'-') expr
    |	INT
    |	'(' expr ')'
    ;
NEWLINE : [\r\n]+ -> skip;
INT     : [0-9]+ ;
```

### Windows-specific issues

On Windows, the `pip` command doesn't just work---you need to add the `...\local-packages\python38\scripts` dir to your `PATH`, which itself might require a fun reboot.  If you use WSL on Windows, then the pip install will also properly at the scripts directly (if you run from bash shell).


1. Go to the Microsoft Store
2. Search in Microsoft Store for Python
3. Select the newest version of Python (3.11).
4. Click the "Get" button. Store installs python and pip at "c:\Users...\AppData\Local\Microsoft\WindowsApps\python.exe" and "c:\Users...\AppData\Local\Microsoft\WindowsApps\pip.exe", respectively. And, it updates the search path immediately with the install.
5. Open a "cmd" terminal.
6. You can now type "python" and "pip", and "pip install antlr4-tools". 7. Unfortunately, it does not add that to the search path.
7. Update the search path to contain `c:\Users...\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p8\LocalCache\local-packages\Python310\Scripts`. You may need to install MSYS2, then do a `find /c/ -name antlr4.exe 2> /dev/null` and enter that path.
8. Or, you can set up an alias to antlr4.exe on that path.

The good news is that the ANTLR4 Python tool downloads the ANTLR jar in a standard location, and you don't need to do that manually. It's also possible to go in a browser, go to python.org, and download the python package. But, it's likely you will need to update the path for antlr4.exe as before.

### Try parsing with a sample grammar

To parse and get the parse tree in text form, use:

```bash
$ antlr4-parse Expr.g4 prog -tree
10+20*30
^D
(prog:1 (expr:2 (expr:3 10) + (expr:1 (expr:3 20) * (expr:3 30))) <EOF>)
```
(Note: `^D` means control-D and indicates "end of input" on Unix; use `^Z` on Windows.)

Here's how to get the tokens and trace through the parse:

```bash
$ antlr4-parse Expr.g4 prog -tokens -trace
10+20*30
^D
[@0,0:1='10',<INT>,1:0]
[@1,2:2='+',<'+'>,1:2]
[@2,3:4='20',<INT>,1:3]
[@3,5:5='*',<'*'>,1:5]
[@4,6:7='30',<INT>,1:6]
[@5,9:8='<EOF>',<EOF>,2:0]
enter   prog, LT(1)=10
enter   expr, LT(1)=10
consume [@0,0:1='10',<8>,1:0] rule expr
enter   expr, LT(1)=+
consume [@1,2:2='+',<3>,1:2] rule expr
enter   expr, LT(1)=20
consume [@2,3:4='20',<8>,1:3] rule expr
enter   expr, LT(1)=*
consume [@3,5:5='*',<1>,1:5] rule expr
enter   expr, LT(1)=30
consume [@4,6:7='30',<8>,1:6] rule expr
exit    expr, LT(1)=<EOF>
exit    expr, LT(1)=<EOF>
exit    expr, LT(1)=<EOF>
consume [@5,9:8='<EOF>',<-1>,2:0] rule prog
exit    prog, LT(1)=<EOF>
```

Here's how to get a visual tree view:

```bash
$ antlr4-parse Expr.g4 prog -gui
10+20*30
^D
```

The following will pop up in a Java-based GUI window:

<img src="https://github.com/antlr/antlr4-tools/blob/master/images/parse-tree.png?raw=true" width="300">

### Generating parser code

The previous section used a built-in ANTLR interpreter but typically you will ask ANTLR to generate code in the language used by your project (there are about 10 languages to choose from as of 4.11).  Here's how to generate Java code from a grammar:

```bash
$ antlr4 Expr.g4
$ ls Expr*.java
ExprBaseListener.java  ExprLexer.java         ExprListener.java      ExprParser.java
```

And, here's how to generate C++ code from the same grammar:

```bash
$ antlr4 -Dlanguage=Cpp Expr.g4
$ ls Expr*.cpp Expr*.h
ExprBaseListener.cpp  ExprLexer.cpp         ExprListener.cpp      ExprParser.cpp
ExprBaseListener.h    ExprLexer.h           ExprListener.h        ExprParser.h
```

## Installation

ANTLR is really two things: a tool written in Java that translates your grammar to a parser/lexer in Java (or other target language) and the runtime library needed by the generated parsers/lexers. Even if you are using the ANTLR Intellij plug-in or ANTLRWorks to run the ANTLR tool, the generated code will still need the runtime library. 

The first thing you should do is probably download and install a development tool plug-in. Even if you only use such tools for editing, they are great. Then, follow the instructions below to get the runtime environment available to your system to run generated parsers/lexers.  In what follows, I talk about antlr-4.13.2-complete.jar, which has the tool and the runtime and any other support libraries (e.g., ANTLR v4 is written in v3).

If you are going to integrate ANTLR into your existing build system using mvn, ant, or want to get ANTLR into your IDE such as eclipse or intellij, see [Integrating ANTLR into Development Systems](https://github.com/antlr/antlr4/blob/master/doc/IDEs.md).

### UNIX

0. Install Java (version 11 or higher)
1. Download
```
$ cd /usr/local/lib
$ curl -O https://www.antlr.org/download/antlr-4.13.2-complete.jar
```
Or just download in browser from website:
    [https://www.antlr.org/download.html](https://www.antlr.org/download.html)
and put it somewhere rational like `/usr/local/lib`.

if you are using lower version jdk, just download from [website download](https://github.com/antlr/website-antlr4/tree/gh-pages/download) for previous version, and antlr version before 4.13.2 support jdk 1.8  

2. Add `antlr-4.13.2-complete.jar` to your `CLASSPATH`:
```
$ export CLASSPATH=".:/usr/local/lib/antlr-4.13.2-complete.jar:$CLASSPATH"
```
It's also a good idea to put this in your `.bash_profile` or whatever your startup script is.

3. Create aliases for the ANTLR Tool, and `TestRig`.
```
$ alias antlr4='java -Xmx500M -cp "/usr/local/lib/antlr-4.13.2-complete.jar:$CLASSPATH" org.antlr.v4.Tool'
$ alias grun='java -Xmx500M -cp "/usr/local/lib/antlr-4.13.2-complete.jar:$CLASSPATH" org.antlr.v4.gui.TestRig'
```

### WINDOWS

(*Thanks to Graham Wideman*)

0. Install Java (version 1.7 or higher)
1. Download antlr-4.13.2-complete.jar (or whatever version) from [https://www.antlr.org/download.html](https://www.antlr.org/download.html)
Save to your directory for 3rd party Java libraries, say `C:\Javalib`
2. Add `antlr-4.13.2-complete.jar` to CLASSPATH, either:
  * Permanently: Using System Properties dialog > Environment variables > Create or append to `CLASSPATH` variable
  * Temporarily, at command line:
```
SET CLASSPATH=.;C:\Javalib\antlr-4.13.2-complete.jar;%CLASSPATH%
```
3. Create short convenient commands for the ANTLR Tool, and TestRig, using batch files or doskey commands:
  * Batch files (in directory in system PATH) antlr4.bat and grun.bat
```
java org.antlr.v4.Tool %*
```
```
@ECHO OFF
SET TEST_CURRENT_DIR=%CLASSPATH:.;=%
if "%TEST_CURRENT_DIR%" == "%CLASSPATH%" ( SET CLASSPATH=.;%CLASSPATH% )
@ECHO ON
java org.antlr.v4.gui.TestRig %*
```
  * Or, use doskey commands:
```
doskey antlr4=java org.antlr.v4.Tool $*
doskey grun =java org.antlr.v4.gui.TestRig $*
```

### Testing the installation

Either launch org.antlr.v4.Tool directly:

```
$ java org.antlr.v4.Tool
ANTLR Parser Generator Version 4.13.2
-o ___ specify output directory where all output is generated
-lib ___ specify location of .tokens files
...
```

or use -jar option on java:

```
$ java -jar /usr/local/lib/antlr-4.13.2-complete.jar
ANTLR Parser Generator Version 4.13.2
-o ___ specify output directory where all output is generated
-lib ___ specify location of .tokens files
...
```

## A First Example

In a temporary directory, put the following grammar inside file Hello.g4:
Hello.g4

```
// Define a grammar called Hello
grammar Hello;
r  : 'hello' ID ;         // match keyword hello followed by an identifier
ID : [a-z]+ ;             // match lower-case identifiers
WS : [ \t\r\n]+ -> skip ; // skip spaces, tabs, newlines
```

Then run ANTLR the tool on it:

```
$ cd /tmp
$ antlr4 Hello.g4
$ javac Hello*.java
```

Now test it:

```
$ grun Hello r -tree
(Now enter something like the string below)
hello parrt
(now,do:)
^D
(The output:)
(r hello parrt)
(That ^D means EOF on unix; it's ^Z in Windows.) The -tree option prints the parse tree in LISP notation.
It's nicer to look at parse trees visually.
$ grun Hello r -gui
hello parrt
^D
```

That pops up a dialog box showing that rule `r` matched keyword `hello` followed by identifier `parrt`.

![](images/hello-parrt.png)

## Book source code

The book has lots and lots of examples that should be useful too. You can download them here for free:

[ANTLR reference book examples in Java](https://media.pragprog.com/titles/tpantlr2/code/tpantlr2-code.zip)<br>
[ANTLR reference book examples in C#](https://github.com/Philippe-Laval/tpantlr2)


[Language implementation patterns book examples in Java](https://media.pragprog.com/titles/tpdsl/code/tpdsl-code.zip)<br>
[Language implementation patterns book examples in C#](https://github.com/Philippe-Laval/tpdsl)

Also, there is a large collection of grammars for v4 at github:

[https://github.com/antlr/grammars-v4](https://github.com/antlr/grammars-v4)

<a id="IDEs.md"></a>
<a id="/doc/IDEs.md"></a>

# Integrating ANTLR into Development Systems

The Java target is the reference implementation mirrored by other targets. The following pages help you integrate ANTLR into development environments and build systems appropriate for your target language.  As of December 2016, we have Java, C#, Python 3, JavaScript, Go, C++, and Swift targets.

The easiest thing is probably just to use an [ANTLR plug-in](http://www.antlr.org/tools.html) for your favorite development environment.

<a id="lexicon.md"></a>
<a id="/doc/lexicon.md"></a>

# Grammar Lexicon

The lexicon of ANTLR is familiar to most programmers because it follows the syntax of C and its derivatives with some extensions for grammatical descriptions.

## Comments

There are single-line, multiline, and Javadoc-style comments:

```
/** This grammar is an example illustrating the three kinds
 * of comments.
 */
grammar T;
/* a multi-line
  comment
*/

/** This rule matches a declarator for my language */
decl : ID ; // match a variable name
```

The Javadoc comments are hidden from the parser and are ignored at the moment.  They are intended to be used only at the start of the grammar and any rule.

## Identifiers

Token names always start with a capital letter and so do lexer rules as defined by Java’s `Character.isUpperCase` method. Parser rule names always start with a lowercase letter (those that fail `Character.isUpperCase`). The initial character can be followed by uppercase and lowercase letters, digits, and underscores. Here are some sample names:

```
ID, LPAREN, RIGHT_CURLY // token names/lexer rules
expr, simpleDeclarator, d2, header_file // parser rule names
```

Like Java, ANTLR accepts Unicode characters in ANTLR names:

<img src="https://github.com/antlr/antlr4/raw/master/doc/images/nonascii.png" width=100>

To support Unicode parser and lexer rule names, ANTLR uses the following rule:

```
ID : a=NameStartChar NameChar*
     {  
     if ( Character.isUpperCase(getText().charAt(0)) ) setType(TOKEN_REF);
     else setType(RULE_REF);
     }  
   ;
```

Rule `NameChar` identifies the valid identifier characters:

```
fragment
NameChar
   : NameStartChar
   | '0'..'9'
   | '_'
   | '\u00B7'
   | '\u0300'..'\u036F'
   | '\u203F'..'\u2040'
   ;
fragment
NameStartChar
   : 'A'..'Z' | 'a'..'z'
   | '\u00C0'..'\u00D6'
   | '\u00D8'..'\u00F6'
   | '\u00F8'..'\u02FF'
   | '\u0370'..'\u037D'
   | '\u037F'..'\u1FFF'
   | '\u200C'..'\u200D'
   | '\u2070'..'\u218F'
   | '\u2C00'..'\u2FEF'
   | '\u3001'..'\uD7FF'
   | '\uF900'..'\uFDCF'
   | '\uFDF0'..'\uFFFD'
   ;
```

Rule `NameStartChar` is the list of characters that can start an identifier (rule, token, or label name):
These more or less correspond to `isJavaIdentifierPart` and `isJavaIdentifierStart` in Java’s Character class. Make sure to use the `-encoding` option on the ANTLR tool if your grammar file is not in UTF-8 format, so that ANTLR reads characters properly.

## Literals

ANTLR does not distinguish between character and string literals as most languages do. All literal strings one or more characters in length are enclosed in single quotes such as `';'`, `'if'`, `'>='`, and `'\''` (refers to the one-character string containing the single quote character). Literals never contain regular expressions.

Literals can contain Unicode escape sequences of the form `'\uXXXX'` (for Unicode code points up to `'U+FFFF'`) or `'\u{XXXXXX}'` (for all Unicode code points), where `'XXXX'` is the hexadecimal Unicode code point value.

For example, `'\u00E8'` is the French letter with a grave accent: `'è'`, and `'\u{1F4A9}'` is the famous emoji: `'💩'`.

ANTLR also understands the usual special escape sequences: `'\n'` (newline), `'\r'` (carriage return), `'\t'` (tab), `'\b'` (backspace), and `'\f'` (form feed). You can use Unicode code points directly within literals or use the Unicode escape sequences:

```
grammar Foreign;
a : '外' ;
```

The recognizers that ANTLR generates assume a character vocabulary containing all Unicode characters. The input file encoding assumed by the runtime library depends on the target language. For the Java target, the runtime library assumes files are in UTF-8. Using the  factory methods in `CharStreams`, you can specify a different encoding.

## Actions

Actions are code blocks written in the target language. You can use actions in a number of places within a grammar, but the syntax is always the same: arbitrary text surrounded by curly braces. You don’t need to escape a closing curly character if it’s in a string or comment: `"}"` or `/*}*/`. If the curlies are balanced, you also don’t need to escape }: `{...}`. Otherwise, escape extra curlies with a backslash: `\{` or `\}`. The action text should conform to the target language as specified with the language option.

Embedded code can appear in: `@header` and `@members` named actions, parser and lexer rules, exception catching specifications, attribute sections for parser rules (return values, arguments, and locals), and some rule element options (currently predicates).

The only interpretation ANTLR does inside actions relates to grammar attributes; see [Token Attributes](http://pragprog.com/book/tpantlr2/the-definitive-antlr-4-reference) and Chapter 10, [Attributes and Actions](http://pragprog.com/book/tpantlr2/the-definitive-antlr-4-reference). Actions embedded within lexer rules are emitted without any interpretation or translation into generated lexers.

## Keywords

Here’s a list of the reserved words in ANTLR grammars:

```
import, fragment, lexer, parser, grammar, returns,
locals, throws, catch, finally, mode, options, tokens
```
  
Also, although it is not a keyword, do not use the word `rule` as a rule name. Further, do not use any keyword of the target language as a token, label, or rule name. For example, rule `if` would result in a generated function called `if`.  That would not compile obviously.

<a id="grammars.md"></a>
<a id="/doc/grammars.md"></a>

# Grammar Structure

A grammar is essentially a grammar declaration followed by a list of rules, but has the general form:

```
/** Optional javadoc style comment */
grammar Name; ①
options {...}
import ... ;
 	
tokens {...}
channels {...} // lexer only
@actionName {...}
 	 
rule1 // parser and lexer rules, possibly intermingled
...
ruleN
```

The file name containing grammar `X` must be called `X.g4`. You can specify options, imports, token specifications, and actions in any order. There can be at most one each of options, imports, and token specifications. All of those elements are optional except for the header ① and at least one rule. Rules take the basic form:

```
ruleName : alternative1 | ... | alternativeN ;
```

Parser rule names must start with a lowercase letter and lexer rules must start with a capital letter.

Grammars defined without a prefix on the `grammar` header are combined grammars that can contain both lexical and parser rules. To make a parser grammar that only allows parser rules, use the following header.

```
parser grammar Name;
...
```

And, naturally, a pure lexer grammar looks like this:

```
lexer grammar Name;
...
```

Only lexer grammars can contain `mode` specifications.

Only lexer grammars can contain custom channels specifications

```
channels {
  WHITESPACE_CHANNEL,
  COMMENTS_CHANNEL
}
```

Those channels can then be used like enums within lexer rules:

```
WS : [ \r\t\n]+ -> channel(WHITESPACE_CHANNEL) ;
```

Sections 15.5, [Lexer Rules](http://pragprog.com/book/tpantlr2/the-definitive-antlr-4-reference) and Section 15.3, [Parser Rules](http://pragprog.com/book/tpantlr2/the-definitive-antlr-4-reference) contain details on rule syntax. Section 15.8, Options describes grammar options and Section 15.4, Actions and Attributes has information on grammar-level actions.

## Grammar Imports

Grammar `imports` let you break up a grammar into logical and reusable chunks, as we saw in [Importing Grammars](http://pragprog.com/book/tpantlr2/the-definitive-antlr-4-reference). ANTLR treats imported grammars very much like object-oriented programming languages treat superclasses. A grammar inherits all of the rules, tokens specifications, and named actions from the imported grammar. Rules in the “main grammar” override rules from imported grammars to implement inheritance.

Think of `import` as more like a smart include statement (which does not include rules that are already defined). The result of all imports is a single combined grammar; the ANTLR code generator sees a complete grammar and has no idea there were imported grammars.

To process a main grammar, the ANTLR tool loads all of the imported grammars into subordinate grammar objects. It then merges the rules, token types, and named actions from the imported grammars into the main grammar. In the diagram below, the grammar on the right illustrates the effect of grammar `MyELang` importing grammar `ELang`.

<img src="https://github.com/antlr/antlr4/raw/master/doc/images/combined.png" width=400>

`MyELang` inherits rules `stat`, `WS`, and `ID`, but overrides rule `expr` and adds `INT`. Here’s a sample build and test run that shows `MyELang` can recognize integer expressions whereas the original `ELang` can’t. The third, erroneous input statement triggers an error message that also demonstrates the parser was looking for `MyELang`’s expr not `ELang`’s.

```
$ antlr4 MyELang.g4
$ javac MyELang*.java
$ grun MyELang stat
=> 	34;
=> 	a;
=> 	;
=> 	EOF
<= 	line 3:0 extraneous input ';' expecting {INT, ID}
```

If there are modes in the main grammar or any of the imported grammars then the import process will import those modes and merge their rules where they are not overridden. In the event any mode becomes empty as all its
rules have been overridden by rules outside the mode this mode will be discarded.

If there were any `tokens` specifications, the main grammar would merge the token sets. If there were any `channel` specifications, the main grammar would merge the channel sets. Any named actions such as `@members` would be merged. In general, you should avoid named actions and actions within rules in imported grammars since that limits their reuse. ANTLR also ignores any options in imported grammars.

Imported grammars can also import other grammars. ANTLR pursues all imported grammars in a depth-first fashion. If two or more imported grammars define rule `r`, ANTLR chooses the first version of `r` it finds. In the following diagram, ANTLR examines grammars in the following order `Nested`, `G1`, `G3`, `G2`.

<img src="https://github.com/antlr/antlr4/raw/master/doc/images/nested.png" width=350>

`Nested` includes the `r` rule from `G3` because it sees that version before the `r` in `G2`.

Not every kind of grammar can import every other kind of grammar:

* Lexer grammars can import lexers, including lexers containing modes.
* Parsers can import parsers.
* Combined grammars can import parsers or lexers without modes.

ANTLR adds imported rules to the end of the rule list in a main lexer grammar. That means lexer rules in the main grammar get precedence over imported rules. For example, if a main grammar defines rule `IF : 'if' ;` and an imported grammar defines rule `ID : [a-z]+ ;` (which also recognizes `if`), the imported `ID` won’t hide the main grammar’s `IF` token definition.

## Tokens Section

The purpose of the `tokens` section is to define token types needed by a grammar for which there is no associated lexical rule. The basic syntax is:

```
tokens { Token1, ..., TokenN }
```

Most of the time, the tokens section is used to define token types needed by actions in the grammar as shown in Section 10.3, [Recognizing Languages whose Keywords Aren’t Fixed](http://pragprog.com/book/tpantlr2/the-definitive-antlr-4-reference):

```
// explicitly define keyword token types to avoid implicit definition warnings
tokens { BEGIN, END, IF, THEN, WHILE }
 
@lexer::members { // keywords map used in lexer to assign token types
Map<String,Integer> keywords = new HashMap<String,Integer>() {{
	put("begin", KeywordsParser.BEGIN);
	put("end", KeywordsParser.END);
	...
}};
}
```

The `tokens` section really just defines a set of tokens to add to the overall set.

```
$ cat Tok.g4
grammar Tok;
tokens { A, B, C }
a : X ;
$ antlr4 Tok.g4
warning(125): Tok.g4:3:4: implicit definition of token X in parser
$ cat Tok.tokens
A=1
B=2
C=3
X=4
```

## Actions at the Grammar Level

Currently there are only two defined named actions (for the Java target) used outside of grammar rules: `header` and `members`. The former injects code into the generated recognizer class file, before the recognizer class definition, and the latter injects code into the recognizer class definition, as fields and methods.

For combined grammars, ANTLR injects the actions into both the parser and the lexer. To restrict an action to the generated parser or lexer, use `@parser::name` or `@lexer::name`.

Here’s an example where the grammar specifies a package for the generated code:

```
grammar Count;
 
@header {
package foo;
}
 
@members {
int count = 0;
}
 
list
@after {System.out.println(count+" ints");}
: INT {count++;} (',' INT {count++;} )*
;
 
INT : [0-9]+ ;
WS : [ \r\t\n]+ -> skip ;
```

The grammar itself then should be in directory `foo` so that ANTLR generates code in that same `foo` directory (at least when not using the `-o` ANTLR tool option):

```
$ cd foo
$ antlr4 Count.g4 # generates code in the current directory (foo)
$ ls
Count.g4		CountLexer.java	CountParser.java
Count.tokens	CountLexer.tokens
CountBaseListener.java CountListener.java
$ javac *.java
$ cd ..
$ grun foo.Count list
=> 	9, 10, 11
=> 	EOF
<= 	3 ints
```

The Java compiler expects classes in package `foo` to be in directory `foo`.

<a id="parser-rules.md"></a>
<a id="/doc/parser-rules.md"></a>

# Parser Rules

Parsers consist of a set of parser rules either in a parser or a combined grammar. A Java application launches a parser by invoking the rule function, generated by ANTLR, associated with the desired start rule. The most basic rule is just a rule name followed by a single alternative terminated with a semicolon:

```
 	/** Javadoc comment can precede rule */
 	retstat : 'return' expr ';' ;
```

Rules can also have alternatives separated by the | 

```
operator:
 	stat: retstat
 	| 'break' ';'
 	| 'continue' ';'
 	;
```

Alternatives are either a list of rule elements or empty. For example, here’s a rule with an empty alternative that makes the entire rule optional:

```
superClass
 	: 'extends' ID
 	| // empty means other alternative(s) are optional
 	;
```

## Alternative Labels

As we saw in Section 7.4, Labeling Rule Alternatives for Precise Event Methods, we can get more precise parse-tree listener events by labeling the outermost alternatives of a rule using the # operator. All alternatives within a rule must be labeled, or none of them. Here are two rules with labeled alternatives.

```
grammar T;
stat: 'return' e ';' # Return
 	| 'break' ';' # Break
 	;
e   : e '*' e # Mult
    | e '+' e # Add
    | INT # Int
    ;
```

Alternative labels do not have to be at the end of the line and there does not have to be a space after the # symbol.
ANTLR generates a rule context class definition for each label. For example, here is the listener that ANTLR generates:

```java
public interface AListener extends ParseTreeListener {
 	void enterReturn(AParser.ReturnContext ctx);
 	void exitReturn(AParser.ReturnContext ctx);
 	void enterBreak(AParser.BreakContext ctx);
 	void exitBreak(AParser.BreakContext ctx);
 	void enterMult(AParser.MultContext ctx);
 	void exitMult(AParser.MultContext ctx);
 	void enterAdd(AParser.AddContext ctx);
 	void exitAdd(AParser.AddContext ctx);
 	void enterInt(AParser.IntContext ctx);
 	void exitInt(AParser.IntContext ctx);
}
```

There are enter and exit methods associated with each labeled alternative. The parameters to those methods are specific to alternatives.

You can reuse the same label on multiple alternatives to indicate that the parse tree walker should trigger the same event for those alternatives. For example, here’s a variation on rule e from grammar A above:

```
 	e : e '*' e # BinaryOp
 	| e '+' e # BinaryOp
 	| INT # Int
 	;
```

ANTLR would generate the following listener methods for e:

```java
 	void enterBinaryOp(AParser.BinaryOpContext ctx);
 	void exitBinaryOp(AParser.BinaryOpContext ctx);
 	void enterInt(AParser.IntContext ctx);
 	void exitInt(AParser.IntContext ctx);
 ```

ANTLR gives errors if an alternative name conflicts with a rule name. Here’s another rewrite of rule e where two 
alternative labels conflict with rule names:

```
 	e : e '*' e # e
 	| e '+' e # Stat
 	| INT # Int
 	;
```

The context objects generated from rule names and labels get capitalized and so label Stat conflicts with rule stat:

```bash
 	$ antlr4 A.g4
 	error(124): A.g4:5:23: rule alt label e conflicts with rule e
 	error(124): A.g4:6:23: rule alt label Stat conflicts with rule stat
 	warning(125): A.g4:2:13: implicit definition of token INT in parser
```

## Rule Context Objects

ANTLR generates methods to access the rule context objects (parse tree nodes) associated with each rule reference. For rules with a single rule reference, ANTLR generates a method with no arguments. Consider the following rule.

```
 	inc : e '++' ;
```

ANTLR generates this context class:

```java
public static class IncContext extends ParserRuleContext {
 	public EContext e() { ... } // return context object associated with e
 	...
}
```

ANTLR also provide support to access context objects when there is more than a single reference to a rule:

```
field : e '.' e ;
```

ANTLR generates a method with an index to access the ith element as well as a method to get context for all references to that rule:

```java
public static class FieldContext extends ParserRuleContext {
 	public EContext e(int i) { ... } // get ith e context
 	public List<EContext> e() { ... } // return ALL e contexts
 	...
}
```

If we had another rule, s, that references field, an embedded action could access the list of e rule matches performed by field:

```
s : field
 	{
 	List<EContext> x = $field.ctx.e();
 	...
 	}
;
```

A listener or visitor could do the same thing. Given a pointer to a FieldContext object, f, f.e() would return List<EContext>.

## Rule Element Labels

You can label rule elements using the = operator to add fields to the rule context objects:

```
stat: 'return' value=e ';' # Return
 	| 'break' ';' # Break
 	;
```

Here value is the label for the return value of rule e, which is defined elsewhere.
Labels become fields in the appropriate parse tree node class. In this case, label value becomes a field in ReturnContext because of the Return alternative label:

```java
public static class ReturnContext extends StatContext {
 	public EContext value;
 	...
}
```

It’s often handy to track a number of tokens, which you can do with the += “list label” operator. For example, the following rule creates a list of the Token objects matched for a simple array construct:

```
 	array : '{' el+=INT (',' el+=INT)* '}' ;
```

ANTLR generates a List field in the appropriate rule context class:

```
 	public static class ArrayContext extends ParserRuleContext {
 	public List<Token> el = new ArrayList<Token>();
 	...
 	}
```

These list labels also work for rule references:

```
 	elist : exprs+=e (',' exprs+=e)* ;
```

ANTLR generates a field holding the list of context objects:

```
 	public static class ElistContext extends ParserRuleContext {
 	public List<EContext> exprs = new ArrayList<EContext>();
 	...
 	}
```

## Rule Elements

Rule elements specify what the parser should do at a given moment just like statements in a programming language. The elements can be rule, token, string literal like expression, ID, and 'return'. Here’s a complete list of the rule elements (we’ll look at actions and predicates in more detail later):

<table>
<tr>
<th>Syntax</th><th>Description</th>
</tr>
<tr>
<td>T</td><td>
Match token T at the current input position. Tokens always begin with a capital letter.</td>
</tr>
<tr>
<td>'literal'</td><td>
Match the string literal at the current input position. A string literal is simply a token with a fixed string.</td>
</tr>
<tr>
<td>r</td><td>
Match rule r at current input position, which amounts to invoking the rule just like a function call. Parser rule names always begin with a lowercase letter.</td>
</tr>
<tr>
<td>r [«args»]</td><td>
Match rule r at current input position, passing in a list of arguments just like a function call. The arguments inside the square brackets are in the syntax of the target language and are usually a comma-separated list of expressions.</td>
</tr>
<tr>
<td>{«action»}</td><td>
Execute an action immediately after the preceding alternative element and immediately before the following alternative element. The action conforms to the syntax of the target language. ANTLR copies the action code to the generated class verbatim, except for substituting attribute and token references such as $x and $x.y.</td>
</tr>
<tr>
<td>{«p»}?</td><td>
Evaluate semantic predicate «p». Do not continue parsing past a predicate if «p» evaluates to false at runtime. Predicates encountered during prediction, when ANTLR distinguishes between alternatives, enable or disable the alternative(s) surrounding the predicate(s).</td>
</tr>
<tr>
<td>.</td><td>
Match any single token except for the end of file token. The “dot” operator is called the wildcard.</td>
</tr>
</table>

When you want to match everything but a particular token or set of tokens, use the `~` “not” operator. This operator is rarely used in the parser but is available. `~INT` matches any token except the `INT` token. `~','` matches any token except the comma. `~(INT|ID)` matches any token except an INT or an ID.

Token, string literal, and semantic predicate rule elements can take options. See Rule Element Options.

## Subrules

A rule can contain alternative blocks called subrules (as allowed in Extended BNF Notation: EBNF). A subrule is like a rule that lacks a name and is enclosed in parentheses. Subrules can have one or more alternatives inside the parentheses. Subrules cannot define attributes with locals and returns like rules can. There are four kinds of subrules (x, y, and z represent grammar fragments):

<table>
<tr>
<th>Syntax</th><th>Description</th>
</tr>
<tr>
<td><img src="https://github.com/antlr/antlr4/raw/master/doc/images/xyz.png"></td><td>(x|y|z).
Match any alternative within the subrule exactly once. Example:
<br>
<tt>
returnType : (type | 'void') ;
</tt>
</td>
</tr>
<tr>
<td><img src="https://github.com/antlr/antlr4/raw/master/doc/images/xyz_opt.png"></td><td>(x|y|z)?
Match nothing or any alternative within subrule. Example:
<br>
<tt>	
classDeclaration
    : 'class' ID (typeParameters)? ('extends' type)?
      ('implements' typeList)?
 	   classBody
    ;
</tt>
<tr>
<td><img src="https://github.com/antlr/antlr4/raw/master/doc/images/xyz_star.png"></td><td>(x|y|z)*
Match an alternative within subrule zero or more times. Example:
<br>
<tt>
annotationName : ID ('.' ID)* ;
</tt>
</tr>
<tr>	
<td><img src="https://github.com/antlr/antlr4/raw/master/doc/images/xyz_plus.png"></td><td>(x|y|z)+
Match an alternative within subrule one or more times. Example:
<br>
<tt>
annotations : (annotation)+ ;
</tt>
</td>
</tr>
</table>

You can suffix the `?`, `*`, and `+` subrule operators with the nongreedy operator, which is also a question mark: `??`, `*?`, and `+?`. See Section 15.6, Wildcard Operator and Nongreedy Subrules.

As a shorthand, you can omit the parentheses for subrules composed of a single alternative with a single rule element reference. For example, `annotation+` is the same as `(annotation)+` and `ID+` is the same as `(ID)+`. Labels also work with the shorthand. `ids+=INT+` make a list of `INT` token objects.

## Catching Exceptions

When a syntax error occurs within a rule, ANTLR catches the exception, reports the error, attempts to recover (possibly by consuming more tokens), and then returns from the rule. Every rule is wrapped in a `try/catch/finally` statement:

```
void r() throws RecognitionException {
 	try {
 		rule-body
 	}
 	catch (RecognitionException re) {
	 	_errHandler.reportError(this, re);
	 	_errHandler.recover(this, re);
 	}
 	finally {
		exitRule();
 	}
}
```

In Section 9.5, Altering ANTLR’s Error Handling Strategy, we saw how to use a strategy object to alter ANTLR’s error handling. Replacing the strategy changes the strategy for all rules, however. To alter the exception handling for a single rule, specify an exception after the rule definition:

```
r : ...
  ;
  catch[RecognitionException e] { throw e; }
```

That example shows how to avoid default error reporting and recovery. r rethrows the exception, which is useful when it makes more sense for a higher-level rule to report the error. Specifying any exception clause, prevents ANTLR from generating a clause to handle `RecognitionException`.

You can specify other exceptions as well:

```
r : ...
  ;
  catch[FailedPredicateException fpe] { ... }
  catch[RecognitionException e] { ... }
```

The code snippets inside curly braces and the exception “argument” actions must be written in the target language; Java, in this case.
When you need to execute an action even if an exception occurs, put it into the `finally` clause:

```
r : ...
  ;
  // catch blocks go first
  finally { System.out.println("exit rule r"); }
```

The finally clause executes right before the rule triggers `exitRule` before returning. If you want to execute an action after the rule finishes matching the alternatives but before it does its cleanup work, use an `after` action.

Here’s a complete list of exceptions:

<table>
<tr>
<th>Exception name</th><th>Description</th>
</tr>
<tr>
<td>RecognitionException</td><td>
The superclass of all exceptions thrown by an ANTLR-generated recognizer. It’s a subclass of RuntimeException to avoid the hassles of checked exceptions. This exception records where the recognizer (lexer or parser) was in the input, where it was in the ATN (internal graph data structure representing the grammar), the rule invocation stack, and what kind of problem occurred.</td>
</tr>
<tr>
<td>NoViableAltException</td><td>
Indicates that the parser could not decide which of two or more paths to take by looking at the remaining input. This exception tracks the starting token of the offending input and also knows where the parser was in the various paths when the error occurred.</td>
</tr>
<tr>
<td>LexerNoViableAltException</td><td>
The equivalent of NoViableAltException but for lexers only.</td>
</tr>
<tr>
<td>InputMismatchException</td><td>
The current input Token does not match what the parser expected.</td>
</tr>
<tr>
<td>FailedPredicateException</td><td>
A semantic predicate that evaluates to false during prediction renders the surrounding alternative nonviable. Prediction occurs when a rule is predicting which alternative to take. If all viable paths disappear, parser will throw NoViableAltException. This predicate gets thrown by the parser when a semantic predicate evaluates to false outside of prediction, during the normal parsing process of matching tokens and calling rules.</td>
</tr>
</table>

## Rule Attribute Definitions

There are a number of action-related syntax elements associated with rules to be aware of. Rules can have arguments, return values, and local variables just like functions in a programming language. (Rules can have actions embedded among the rule elements, as we’ll see in Section 15.4, Actions and Attributes.) ANTLR collects all of the variables you define and stores them in the rule context object. These variables are usually called attributes. Here’s the general syntax showing all possible attribute definition locations:

```
rulename[args] returns [retvals] locals [localvars] : ... ;
```

The attributes defined within those [...] can be used like any other variable. Here is a sample rule that copies parameters to return values:

```
// Return the argument plus the integer value of the INT token
add[int x] returns [int result] : '+=' INT {$result = $x + $INT.int;} ;
```

The args, locals, and return `[...]` are generally in the target language but with some constraints. The `[...]` string is a comma-separated list of declarations either with prefix or postfix type notation or no-type notation. The elements can have initializer such as `[int x = 32, float y]` but don't go too crazy as we are parsing this generic text manually in [ScopeParser](https://github.com/antlr/antlr4/blob/master/tool/src/org/antlr/v4/parse/ScopeParser.java).  

* Java, CSharp, C++ use `int x` notation but C++ must use a slightly altered notation for array references, `int[] x`, to fit in the *type* *id* syntax.
* Go and Swift give the type after the variable name, but Swift requires a `:` in between. Go `i int`, Swift `i:int`.  For Go target, you must either use `int i` or `i:int`.
* Python and JavaScript don't specify static types so actions are just identifier lists such as `[i,j]`.

Technically any target could use either notation. For examples, see [TestScopeParsing](https://github.com/antlr/antlr4/blob/master/tool-testsuite/test/org/antlr/v4/test/tool/TestScopeParsing.java).

As with the grammar level, you can specify rule-level named actions. For rules, the valid names are `init` and `after`. As the names imply, parsers execute init actions immediately before trying to match the associated rule and execute after actions immediately after matching the rule. ANTLR after actions do not execute as part of the finally code block of the generated rule function. Use the ANTLR finally action to place code in the generated rule function finally code block.

The actions come after any argument, return value, or local attribute definition actions. The `row` rule preamble from Section 10.2, Accessing Token and Rule Attributes illustrates the syntax nicely:
actions/CSV.g4

```
/** Derived from rule "row : field (',' field)* '\r'? '\n' ;" */
row[String[] columns]
   returns [Map<String,String> values]
   locals [int col=0]
	@init {
	$values = new HashMap<String,String>();
	}
	@after {
	if ($values!=null && $values.size()>0) {
	System.out.println("values = "+$values);
	}
	}
	: ...
	;
```

Rule row takes argument columns, returns values, and defines local variable col. The “actions” in square brackets are copied directly into the generated code:

```java
public class CSVParser extends Parser {
	...
	public static class RowContext extends ParserRuleContext {
		public String [] columns;
		public Map<String,String> values;
		public int col=0;
		...
	}
	...
}
```

The generated rule functions also specify the rule arguments as function arguments, but they are quickly copied into the local RowContext object:

```java
public class CSVParser extends Parser {
 	...
 	public final RowContext row(String [] columns) throws RecognitionException {
	 	RowContext _localctx = new RowContext(_ctx, 4, columns);
	 	enterRule(_localctx, RULE_row);
	 	...
 	}
 	...
}
```

ANTLR tracks nested `[...]` within the action so that `String[]` columns is parsed properly. It also tracks angle brackets so that commas within generic type parameters do not signify the start of another attribute. `Map<String,String>` values is one attribute definition.

There can be multiple attributes in each action, even for return values. Use a comma to separate attributes within the same action:

```
a[Map<String,String> x, int y] : ... ;
```

ANTLR interprets that action to define two arguments, x and y:

```java
public final AContext a(Map<String,String> x, int y)
	throws RecognitionException
{
	AContext _localctx = new AContext(_ctx, 0, x, y);
	enterRule(_localctx, RULE_a);
	...
}
```

## Start Rules and EOF

A start rule is the rule engaged first by the parser; it’s the rule function called by the language application. For example, a language application that parsed to Java code might call `parser.compilationUnit()` for a `JavaParser` object called `parser`. Any rule in the grammar can act as a start rule.

Start rules don’t necessarily consume all of the input. They consume only as much input as needed to match an alternative of the rule. For example, consider the following rule that matches one, two, or three tokens, depending on the input.

```
s : ID
  | ID '+'
  | ID '+' INT
  ;
```

Upon `a+3`, rule `s` matches the third alternative. Upon `a+b`, it matches the second alternative and ignores the final `b` token. Upon `a b`, it matches the first alternative, ignoring the `b` token. The parser does not consume the complete input in the latter two cases because rule `s` doesn’t explicitly say that end of file must occur after matching an alternative of the rule.

This default functionality is very useful for building things like IDEs. Imagine the IDE wanting to parse a method somewhere in the middle of a big Java file. Calling rule `methodDeclaration` should try to match just a method and ignore whatever comes next.

On the other hand, rules that describe entire input files should reference special predefined-token `EOF`. If they don’t, you might scratch your head for a while wondering why the start rule doesn’t report errors for any input no matter what you give it. Here’s a rule that’s part of a grammar for reading configuration files:

```
config : element*; // can "match" even with invalid input.
```

Invalid input would cause `config` to return immediately without matching any input and without reporting an error. Here’s the proper specification:

```
file : element* EOF; // don't stop early. must match all input
```

<a id="left-recursion.md"></a>
<a id="/doc/left-recursion.md"></a>

# Left-recursive rules

The most natural expression of some common language constructs is left recursive. For example C declarators and arithmetic expressions. Unfortunately, left recursive specifications of arithmetic expressions are typically ambiguous but much easier to write out than the multiple levels required in a typical top-down grammar. Here is a sample ANTLR 4 grammar with a left recursive expression rule:

```
stat: expr '=' expr ';' // e.g., x=y; or x=f(x);
    | expr ';'          // e.g., f(x); or f(g(x));
    ;
expr: expr '*' expr
    | expr '+' expr
    | expr '(' expr ')' // f(x)
    | id
    ;
```

In straight context free grammars, such a rule is ambiguous because `1+2*3` it can interpret either operator as occurring first, but ANTLR rewrites that to be non-left recursive and unambiguous using semantic predicates:

```
expr[int pr] : id
               ( {4 >= $pr}? '*' expr[5]
               | {3 >= $pr}? '+' expr[4]
               | {2 >= $pr}? '(' expr[0] ')'
               )*
             ;
```

The predicates resolve ambiguities by comparing the precedence of the current operator against the precedence of the previous operator. An expansion of expr[pr] can match only those subexpressions whose precedence meets or exceeds pr.

## Formal rules

The formal 4.0, 4.1 ANTLR left-recursion elimination rules were changed (simplified) for 4.2 and are laid out in the [ALL(*) tech report](http://www.antlr.org/papers/allstar-techreport.pdf):

* Binary expressions are expressions which contain a recursive invocation of the rule as the first and last element of the alternative.
* Suffix expressions contain a recursive invocation of the rule as the first element of the alternative, but not as the last element.
* Prefix expressions contain a recursive invocation of the rule as the last element of the alternative, but not as the first element.

There is no such thing as a "ternary" expression--they are just binary expressions in disguise.

The right associativity specifiers used to be on the individual tokens but it's done on alternative basis anyway so the option is now on the individual alternative; e.g.,

```
e : e '*' e
  | e '+' e
  |<assoc=right> e '?' e ':' e
  |<assoc=right> e '=' e
  | INT
  ;
```

If your 4.0 or 4.1 grammar uses a right-associative ternary operator, you will need to update your grammar to include `<assoc=right>` on the alternative operator. To smooth the transition, `<assoc=right>` is still allowed on token references but it is ignored.

<a id="actions.md"></a>
<a id="/doc/actions.md"></a>

# Actions and Attributes

In Chapter 10, Attributes and Actions, we learned how to embed actions within grammars and looked at the most common token and rule attributes. This section summarizes the important syntax and semantics from that chapter and provides a complete list of all available attributes. (You can learn more about actions in the grammar from the free excerpt on listeners and actions.)

Actions are blocks of text written in the target language and enclosed in curly braces. The recognizer triggers them according to their locations within the grammar. For example, the following rule emits "found a decl" after the parser has seen a valid declaration:

```
decl: type ID ';' {System.out.println("found a decl");} ;
type: 'int' | 'float' ;
```

Most often, actions access the attributes of tokens and rule references:

```
decl: type ID ';'
      {System.out.println("var "+$ID.text+":"+$type.text+";");}
    | t=ID id=ID ';'
      {System.out.println("var "+$id.text+":"+$t.text+";");}
    ;
```

## Token Attributes

All tokens have a collection of predefined, read-only attributes. The attributes include useful token properties such as the token type and text matched for a token. Actions can access these attributes via `$label.attribute` where label labels a particular instance of a token reference (`a` and `b` in the example below are used in the action code as `$a` and `$b`). Often, a particular token is only referenced once in the rule, in which case the token name itself can be used unambiguously in the action code (token `INT` can be used as `$INT` in the action). The following example illustrates token attribute expression syntax:

```
r : INT {int x = $INT.line;}
    ( ID {if ($INT.line == $ID.line) ...;} )?
    a=FLOAT b=FLOAT {if ($a.line == $b.line) ...;}
  ;
```

The action within the `(...)?` subrule can see the `INT` token matched before it in the outer level.

Because there are two references to the `FLOAT` token, a reference to `$FLOAT` in an action is not unique; you must use labels to specify which token reference you’re interested in.

Token references within different alternatives are unique because only one of them can be matched for any invocation of the rule. For example, in the following rule, actions in both alternatives can reference `$ID` directly without using a label:

```
 	r : ... ID {System.out.println($ID.text);}
 	| ... ID {System.out.println($ID.text);}
 	;
```

To access the tokens matched for literals, you must use a label:

```
 	stat: r='return' expr ';' {System.out.println("line="+$r.line);} ;
```

Most of the time you access the attributes of the token, but sometimes it is useful to access the Token object itself because it aggregates all the attributes. Further, you can use it to test whether an optional subrule matched a token:

```
 	stat: 'if' expr 'then' stat (el='else' stat)?
 	{if ( $el!=null ) System.out.println("found an else");}
 	| ...
 	;
```

`$T` and `$L` evaluate to `Token` objects for token name `T` and token label `L`. `$ll` evaluates to `List<Token>` for list label `ll`. `$T.attr` evaluates to the type and value specified in the following table for attribute `attr`:


|Attribute|Type|Description|
|---------|----|-----------|
|text|String|The text matched for the token; translates to a call to getText. Example: $ID.text.|
|type|int|The token type (nonzero positive integer) of the token such as INT; translates to a call to getType. Example: $ID.type.|
|line|int|The line number on which the token occurs, counting from 1; translates to a call to getLine. Example: $ID.line.|
|pos|int|The character position within the line at which the token’s first character occurs counting from zero; translates to a call to getCharPositionInLine. Example: $ID.pos.|
|index|int|The overall index of this token in the token stream, counting from zero; translates to a call to getTokenIndex. Example: $ID.index.|
|channel|int|The token’s channel number. The parser tunes to only one channel, effectively ignoring off-channel tokens. The default channel is 0 (Token.DEFAULT_CHANNEL), and the default hidden channel is Token.HIDDEN_CHANNEL. Translates to a call to getChannel. Example: $ID.channel.|
|int|int|The integer value of the text held by this token; it assumes that the text is a valid numeric string. Handy for building calculators and so on. Translates to Integer.valueOf(text-of-token). Example: $INT.int.|

## Parser Rule Attributes

ANTLR predefines a number of read-only attributes associated with parser rule references that are available to actions. Actions can access rule attributes only for references that precede the action. The syntax is `$r.attr` for rule name `r` or a label assigned to a rule reference. For example, `$expr.text` returns the complete text matched by a preceding invocation of rule `expr`:

```
returnStat : 'return' expr {System.out.println("matched "+$expr.text);} ;
```

Using a rule label looks like this:

```
returnStat : 'return' e=expr {System.out.println("matched "+$e.text);} ;
```

You can also use `$` followed by the name of the attribute to access the value associated with the currently executing rule. For example, `$start` is the starting token of the current rule.

```
returnStat : 'return' expr {System.out.println("first token "+$start.getText());} ;
```

`$r` and `$rl` evaluate to `ParserRuleContext` objects of type `RContext` for rule name `r` and rule label `rl`. `$rll` evaluates to `List<RContext>` for rule list label `rll`. `$r.attr` evaluates to the type and value specified in the following table for attribute `attr`:

|Attribute|Type|Description|
|---------|----|-----------|
|text|String|The text matched for a rule or the text matched from the start of the rule up until the point of the `$text` expression evaluation. Note that this includes the text for all tokens including those on hidden channels, which is what you want because usually that has all the whitespace and comments. When referring to the current rule, this attribute is available in any action including any exception actions.|
|start|Token|The first token to be potentially matched by the rule that is on the main token channel; in other words, this attribute is never a hidden token. For rules that end up matching no tokens, this attribute points at the first token that could have been matched by this rule. When referring to the current rule, this attribute is available to any action within the rule.|
|stop|Token|The last nonhidden channel token to be matched by the rule. When referring to the current rule, this attribute is available only to the after and finally actions.|
|ctx|ParserRuleContext|The rule context object associated with a rule invocation. All of the other attributes are available through this attribute. For example, `$ctx.start` accesses the start field within the current rules context object. It’s the same as `$start`.|
|parser|Parser|The parser itself.  This attribute can be used, for example, to invoke a method defined in the parser's `@members` section from a semantic predicate.|

## Dynamically-Scoped Attributes

You can pass information to and from rules using parameters and return values, just like functions in a general-purpose programming language. Programming languages don’t allow functions to access the local variables or parameters of invoking functions, however. For example, the following reference to local variable `x` form a nested method call is illegal in Java:

```java
void f() {
	int x = 0;
	g();
}
void g() {
	h();
}
void h() {
	int y = x; // INVALID reference to f's local variable x
}
```

Variable `x` is available only within the scope of `f`, which is the text lexically delimited by curly brackets. For this reason, Java is said to use lexical scoping. Lexical scoping is the norm for most programming languages. Languages that allow methods further down in the call chain to access local variables defined earlier are said to use dynamic scoping. The term dynamic refers to the fact that a compiler cannot statically determine the set of visible variables. This is because the set of variables visible to a method changes depending on who calls that method.

It turns out that, in the grammar realm, distant rules sometimes need to communicate with each other, mostly to provide context information to rules matched below in the rule invocation chain. (Naturally, this assumes that you are using actions directly in the grammar instead of the parse-tree listener event mechanism.) ANTLR allows dynamic scoping in that actions can access attributes from invoking rules using syntax `$r::x` where `r` is a rule name and `x` is an attribute within that rule. It is up to the programmer to ensure that `r` is in fact an invoking rule of the current rule. A runtime exception occurs if `r` is not in the current call chain when you access `$r::x`.

To illustrate the use of dynamic scoping, consider the real problem of defining variables and ensuring that variables in expressions are defined. The following grammar defines the symbols attribute where it belongs in the block rule but adds variable names to it in rule `decl`. Rule `stat` then consults the list to see whether variables have been defined.

```
grammar DynScope;
 
prog: block ;
 
block
	/* List of symbols defined within this block */
	locals [
	List<String> symbols = new ArrayList<String>()
	]
	: '{' decl* stat+ '}'
	// print out all symbols found in block
	// $block::symbols evaluates to a List as defined in scope
	{System.out.println("symbols="+$symbols);}
	;
 
/** Match a declaration and add identifier name to list of symbols */
decl: 'int' ID {$block::symbols.add($ID.text);} ';' ;
 
/** Match an assignment then test list of symbols to verify
 * that it contains the variable on the left side of the assignment.
 * Method contains() is List.contains() because $block::symbols
 * is a List.
 */
stat: ID '=' INT ';'
	{
	if ( !$block::symbols.contains($ID.text) ) {
	System.err.println("undefined variable: "+$ID.text);
	}
	}
	| block
	;
 
ID : [a-z]+ ;
INT : [0-9]+ ;
WS : [ \t\r\n]+ -> skip ;
```

Here’s a simple build and test sequence:

```bash
$ antlr4 DynScope.g4
$ javac DynScope*.java
$ grun DynScope prog
=> 	{
=> 	int i;
=> 	i = 0;
=> 	j = 3;
=> 	}
=> 	EOF
<= 	undefined variable: j
 	symbols=[i]
```

There’s an important difference between a simple field declaration in a `@members` action and dynamic scoping. symbols is a local variable and so there is a copy for each invocation of rule `block`. That’s exactly what we want for nested blocks so that we can reuse the same input variable name in an inner block. For example, the following nested code block redefines `i` in the inner scope. This new definition must hide the definition in the outer scope.

```
{
	int i;
	int j;
	i = 0;
	{
		int i;
		int x;
		x = 5;
	}
	x = 3;
}
```

Here’s the output generated for that input by DynScope:

```bash
$ grun DynScope prog nested-input
symbols=[i, x]
undefined variable: x
symbols=[i, j]
```

Referencing `$block::symbols` accesses the `symbols` field of the most recently invoked `block`’s rule context object. If you need access to a symbols instance from a rule invocation farther up the call chain, you can walk backwards starting at the current context, `$ctx`. Use `getParent` to walk up the chain.

<a id="lexer-rules.md"></a>
<a id="/doc/lexer-rules.md"></a>

# Lexer Rules

A lexer grammar is composed of lexer rules, optionally broken into multiple modes. Lexical modes allow us to split a single lexer grammar into multiple sublexers. The lexer can only return tokens matched by rules from the current mode.

Lexer rules specify token definitions and more or less follow the syntax of parser rules except that lexer rules cannot have arguments, return values, or local variables. Lexer rule names must begin with an uppercase letter, which distinguishes them from parser rule names:

```
/** Optional document comment */
TokenName : alternative1 | ... | alternativeN ;
```

You can also define rules that are not tokens but rather aid in the recognition of tokens. These fragment rules do not result in tokens visible to the parser:

```
fragment
HelperTokenRule : alternative1 | ... | alternativeN ;
```

For example, `DIGIT` is a pretty common fragment rule:

```
INT : DIGIT+ ; // references the DIGIT helper rule
fragment DIGIT : [0-9] ; // not a token by itself
```

## Lexical Modes

Modes allow you to group lexical rules by context, such as inside and outside of XML tags. It’s like having multiple sublexers, one for each context. The lexer can only return tokens matched by entering a rule in the current mode. Lexers start out in the so-called default mode. All rules are considered to be within the default mode unless you specify a mode command. Modes are not allowed within combined grammars, just lexer grammars. (See grammar `XMLLexer` from [Tokenizing XML](http://pragprog.com/book/tpantlr2/the-definitive-antlr-4-reference).)

```
rules in default mode
...
mode MODE1;
rules in MODE1
...
mode MODEN;
rules in MODEN
...
```

## Lexer Rule Elements

Lexer rules allow two constructs that are unavailable to parser rules: the .. range operator and the character set notation enclosed in square brackets, [characters]. Don’t confuse character sets with arguments to parser rules. [characters] only means character set in a lexer. Here’s a summary of all lexer rule elements:

<table>
<tr>
<th>Syntax</th><th>Description</th>
</tr>
<tr>
<td>T</td><td>
Match token T at the current input position. Tokens always begin with a capital letter.</td>
</tr>

<tr>
<td>'literal'</td><td>
Match that character or sequence of characters. E.g., 'while' or '='.</td>
</tr>

<tr>
<td>[char set]</td><td>
<p>Match one of the characters specified in the character set. Interpret <tt>x-y</tt> as the set of characters between range <tt>x</tt> and <tt>y</tt>, inclusively. The following escaped characters are interpreted as single special characters: <tt>\n</tt>, <tt>\r</tt>, <tt>\b</tt>, <tt>\t</tt>, <tt>\f</tt>, <tt>\uXXXX</tt>, and <tt>\u{XXXXXX}</tt>. To get <tt>]</tt> or <tt>\</tt> you must escape them with <tt>\</tt>. To get <tt>-</tt> you must escape it with <tt>\</tt> too, except for the case when <tt>-</tt> is the first or last character in the set.</p>

<p>You can also include all characters matching Unicode properties (general category, boolean, or enumerated including scripts and blocks) with <tt>\p{PropertyName}</tt> or <tt>\p{EnumProperty=Value}</tt>. (You can invert the test with <tt>\P{PropertyName}</tt> or <tt>\P{EnumProperty=Value}</tt>).</p>

<p>For a list of valid Unicode property names, see <a href="http://unicode.org/reports/tr44/#Properties">Unicode Standard Annex #44</a>. (ANTLR also supports <a href="http://unicode.org/reports/tr44/#General_Category_Values">short and long Unicode general category names and values</a> like <tt>\p{Lu}</tt>, <tt>\p{Z}</tt>, <tt>\p{Symbol}</tt>, <tt>\p{Blk=Latin_1_Sup}</tt>, and <tt>\p{Block=Latin_1_Supplement}</tt>.)</p>

<p>As a shortcut for <tt>\p{Block=Latin_1_Supplement}</tt>, you can refer to blocks using <a href="http://www.unicode.org/Public/UCD/latest/ucd/Blocks.txt">Unicode block names</a> prefixed with <tt>In</tt> and with spaces changed to <tt>_</tt>. For example: <tt>\p{InLatin_1_Supplement}</tt>, <tt>\p{InYijing_Hexagram_Symbols}</tt>, and <tt>\p{InAncient_Greek_Numbers}</tt>.</p>

<p>A few extra properties are supported:</p>
<ul>
<li><tt>\p{Extended_Pictographic}</tt> (see <a href="http://unicode.org/reports/tr35/">UTS #35</a>)</li>
<li><tt>\p{EmojiPresentation=EmojiDefault}</tt> (code points which have colorful emoji-style presentation by default but which can also be displayed text-style)</li>
<li><tt>\p{EmojiPresentation=TextDefault}</tt> (code points which have black-and-white text-style presentation by default but which can also be displayed emoji-style)</li>
<li><tt>\p{EmojiPresentation=Text}</tt> (code points which have only black-and-white text-style and lack a colorful emoji-style presentation)</li>
</ul>

<p>Property names are <b>case-insensitive</b>, and <tt>_</tt> and <tt>-</tt> are treated identically</p>

<p>Here are a few examples:</p>

<pre>
WS : [ \n\u000D] -> skip ; // same as [ \n\r]

UNICODE_WS : [\p{White_Space}] -> skip; // match all Unicode whitespace

ID : [a-zA-Z] [a-zA-Z0-9]* ; // match usual identifier spec

UNICODE_ID : [\p{Alpha}\p{General_Category=Other_Letter}] [\p{Alnum}\p{General_Category=Other_Letter}]* ; // match full Unicode alphabetic ids

EMOJI : [\u{1F4A9}\u{1F926}] ; // note Unicode code points > U+FFFF

DASHBRACK : [\-\]]+ ; // match - or ] one or more times

DASH : [---] ; // match a single -, i.e., "any character" between - and - (note first and last - not escaped)
</pre>
</td>
</tr>

<tr>
<td>'x'..'y'</td><td>
Match any single character between range x and y, inclusively. E.g., 'a'..'z'. 'a'..'z' is identical to [a-z].</td>
</tr>

<tr>
<td>T</td><td>
Invoke lexer rule T; recursion is allowed in general, but not left recursion. T can be a regular token or fragment rule.
 	
<pre>
ID : LETTER (LETTER|'0'..'9')* ;
 	
fragment
LETTER : [a-zA-Z\u0080-\u00FF_] ;
</pre>
</td>
</tr>

<tr>
<td>.</td><td>
The dot is a single-character wildcard that matches any single character. Example:
<pre>
ESC : '\\' . ; // match any escaped \x character
</pre>
</td>
</tr>

<tr>
<td>{«action»}</td><td>
Lexer actions can appear anywhere as of 4.2, not just at the end of the outermost alternative. The lexer executes the actions at the appropriate input position, according to the placement of the action within the rule. To execute a single action for a rule that has multiple alternatives, you can enclose the alts in parentheses and put the action afterwards:
 	
<pre>
END : ('endif'|'end') {System.out.println("found an end");} ;
</pre>

<p>The action conforms to the syntax of the target language. ANTLR copies the action’s contents into the generated code verbatim; there is no translation of expressions like $x.y as there is in parser actions.</p>
<p>
Only actions within the outermost token rule are executed. In other words, if STRING calls ESC_CHAR and ESC_CHAR has an action, that action is not executed when the lexer starts matching in STRING.</p></td>
</tr>

<tr>
<td>{«p»}?</td><td>
Evaluate semantic predicate «p». If «p» evaluates to false at runtime, the surrounding rule becomes “invisible” (nonviable). Expression «p» conforms to the target language syntax. While semantic predicates can appear anywhere within a lexer rule, it is most efficient to have them at the end of the rule. The one caveat is that semantic predicates must precede lexer actions. See Predicates in Lexer Rules.</td>
</tr>

<tr>
<td>~x</td><td>
Match any single character not in the set described by x. Set x can be a single character literal, a range, or a subrule set like ~('x'|'y'|'z') or ~[xyz]. Here is a rule that uses ~ to match any character other than characters using ~[\r\n]*:
<pre> 	
COMMENT : '#' ~[\r\n]* '\r'? '\n' -> skip ;
</pre>
</td>
</tr>
</table>

Just as with parser rules, lexer rules allow subrules in parentheses and EBNF operators: `?`, `*`, `+`. The `COMMENT` rule illustrates the `*` and `?` operators. A common use of `+` is `[0-9]+` to match integers. Lexer subrules can also use the nongreedy `?` suffix on those EBNF operators.

## Recursive Lexer Rules

ANTLR lexer rules can be recursive, unlike most lexical grammar tools. This comes in really handy when you want to match nested tokens like nested action blocks: `{...{...}...}`.

```
lexer grammar Recur;
 
ACTION : '{' ( ACTION | ~[{}] )* '}' ;
 
WS : [ \r\t\n]+ -> skip ;
```

## Redundant String Literals

Be careful that you don’t specify the same string literal on the right-hand side of multiple lexer rules. Such literals are ambiguous and could match multiple token types. ANTLR makes this literal unavailable to the parser. The same is true for rules across modes. For example, the following lexer grammar defines two tokens with the same character sequence:

```
lexer grammar L;
AND : '&' ;
mode STR;
MASK : '&' ;
```

A parser grammar cannot reference literal '&', but it can reference the name of the tokens:

```
parser grammar P;
options { tokenVocab=L; }
a : '&' // results in a tool error: no such token
    AND // no problem
    MASK // no problem
  ;
```

Here’s a build and test sequence:

```bash
$ antlr4 L.g4 # yields L.tokens file needed by tokenVocab option in P.g4
$ antlr4 P.g4
error(126): P.g4:3:4: cannot create implicit token for string literal '&' in non-combined grammar
```

## Lexer Rule Actions

An ANTLR lexer creates a Token object after matching a lexical rule. Each request for a token starts in `Lexer.nextToken`, which calls `emit` once it has identified a token. `emit` collects information from the current state of the lexer to build the token. It accesses fields `_type`, `_text`, `_channel`, `_tokenStartCharIndex`, `_tokenStartLine`, and `_tokenStartCharPositionInLine`. You can set the state of these with the various setter methods such as `setType`. For example, the following rule turns `enum` into an identifier if `enumIsKeyword` is false.

```
ENUM : 'enum' {if (!enumIsKeyword) setType(Identifier);} ;
```

ANTLR does no special `$x` attribute translations in lexer actions (unlike v3).

There can be at most a single action for a lexical rule, regardless of how many alternatives there are in that rule.

## Lexer Commands

To avoid tying a grammar to a particular target language, ANTLR supports lexer commands. Unlike arbitrary embedded actions, these commands follow specific syntax and are limited to a few common commands. Lexer commands appear at the end of the outermost alternative of a lexer rule definition. Like arbitrary actions, there can only be one per token rule. A lexer command consists of the `->` operator followed by one or more command names that can optionally take parameters:

```
TokenName : «alternative» -> command-name
TokenName : «alternative» -> command-name («identifier or integer»)
```

An alternative can have more than one command separated by commas. Here are the valid command names:

* skip
* more
* popMode
* mode( x )
* pushMode( x )
* type( x )
* channel( x )

See the book source code for usage, some examples of which are shown here:

### skip

A 'skip' command tells the lexer to get another token and throw out the current text.

```
ID : [a-zA-Z]+ ; // match identifiers
INT : [0-9]+ ; // match integers
NEWLINE:'\r'? '\n' ; // return newlines to parser (is end-statement signal)
WS : [ \t]+ -> skip ; // toss out whitespace
```

### mode(), pushMode(), popMode, and more

The mode commands alter the mode stack and hence the mode of the lexer. The 'more' command forces the lexer to get another token but without throwing out the current text. The token type will be that of the "final" rule matched (i.e., the one without a more or skip command).

```
// Default "mode": Everything OUTSIDE of a tag
COMMENT : '<!--' .*? '-->' ;
CDATA   : '<![CDATA[' .*? ']]>' ;
OPEN : '<' -> pushMode(INSIDE) ;
 ...
XMLDeclOpen : '<?xml' S -> pushMode(INSIDE) ;
SPECIAL_OPEN: '<?' Name -> more, pushMode(PROC_INSTR) ;
// ----------------- Everything INSIDE of a tag ---------------------
mode INSIDE;
CLOSE        : '>' -> popMode ;
SPECIAL_CLOSE: '?>' -> popMode ; // close <?xml...?>
SLASH_CLOSE  : '/>' -> popMode ;
```

Also check out:

```
lexer grammar Strings;
LQUOTE : '"' -> more, mode(STR) ;
WS : [ \r\t\n]+ -> skip ;
mode STR;
STRING : '"' -> mode(DEFAULT_MODE) ; // token we want parser to see
TEXT : . -> more ; // collect more text for string
```

Popping the bottom layer of a mode stack will result in an exception. Switching modes with `mode` changes the current stack top.  More than one `more` is the same as just one and the position does not matter.

### type()

```
lexer grammar SetType;
tokens { STRING }
DOUBLE : '"' .*? '"'   -> type(STRING) ;
SINGLE : '\'' .*? '\'' -> type(STRING) ;
WS     : [ \r\t\n]+    -> skip ;
```

For multiple 'type()' commands, only the rightmost has an effect.

### channel()

```
BLOCK_COMMENT
	: '/*' .*? '*/' -> channel(HIDDEN)
	;
LINE_COMMENT
	: '//' ~[\r\n]* -> channel(HIDDEN)
	;
... 
// ----------
// Whitespace
//
// Characters and character constructs that are of no import
// to the parser and are used to make the grammar easier to read
// for humans.
//
WS : [ \t\r\n\f]+ -> channel(HIDDEN) ;
```

As of 4.5, you can also define channel names like enumerations with the following construct above the lexer rules:

```
channels { WSCHANNEL, MYHIDDEN }
```

## Lexer Rule Options

### caseInsensitive

Defines if the current lexer rule is case-insensitive.
The argument can be `true` or `false`.
The option rewrites `caseInsensitive` grammar option value if it's defined.

```g4
options { caseInsensitive=true; }
STRING options { caseInsensitive=false; } : 'N'? '\'' (~'\'' | '\'\'')* '\''; // lower n is not allowed
```

<a id="wildcard.md"></a>
<a id="/doc/wildcard.md"></a>

# Wildcard Operator and Nongreedy Subrules

EBNF subrules like `(...)?`, `(...)*` and `(...)+` are greedy—They consume as much input as possible, but sometimes that’s not what’s needed. Constructs like `.*` consume until the end of the input in the lexer and sometimes in the parser. We want that loop to be nongreedy so we need to use different syntax: `.*?` borrowed from regular expression notation. We can make any subrule that has a `?`, `*`, or `+` suffix nongreedy by adding another `?` suffix. Such nongreedy subrules are allowed in both the parser and the lexer, but they are used much more frequently in the lexer.

## Nongreedy Lexer Subrules

Here’s the very common C-style comment lexer rule that consumes any characters until it sees the trailing `*/`:

```
COMMENT : '/*' .*? '*/' -> skip ; // .*? matches anything until the first */
```

Here’s another example that matches strings that allow \" as an escaped quote character:

```
grammar Nongreedy;
s : STRING+ ;
STRING : '"' ( '\\"' | . )*? '"' ; // match "foo", "\"", "x\"\"y", ...
WS : [ \r\t\n]+ -> skip ;
```

```bash
$ antlr4 Nongreedy.g4
$ javac Nongreedy*.java
$ grun Nongreedy s -tokens
=> 	"quote:\""
=> 	EOF
<= 	[@0,0:9='"quote:\""',<1>,1:0]
 	[@1,11:10='<EOF>',<-1>,2:0]
```

Nongreedy subrules should be used sparingly because they complicate the recognition problem and sometimes make it tricky to decipher how the lexer will match text. Here is how the lexer chooses token rules:

<ol>
<li>The primary goal is to match the lexer rule that recognizes the most input characters.

```
INT : [0-9]+ ;
DOT : '.' ; // match period
FLOAT : [0-9]+ '.' ; // match FLOAT upon '34.' not INT then DOT
```
</li>
<li>
If more than one lexer rule matches the same input sequence, the priority goes to the rule occurring first in the grammar file.

```
DOC : '/**' .*? '*/' ; // both rules match /** foo */, resolve to DOC
CMT : '/*' .*? '*/' ;
```
</li>
<li>
Nongreedy subrules match the fewest number of characters that still allows the surrounding lexical rule to match.

```
/** Match anything except \n inside of double angle brackets */
STRING : '<<' ~'\n'*? '>>' ; // Input '<<foo>>>>' matches STRING then END
END    : '>>' ;
```
</li>
<li>
<p>After crossing through a nongreedy subrule within a lexical rule, all decision-making from then on is "first match wins."
</p>
<p>
For example, literal `ab` in rule right-hand side (grammar fragment) `.*? ('a'|'ab')` is dead code and can never be matched. If the input is ab, the first alternative, 'a', matches the first character and therefore succeeds. ('a'|'ab') by itself on the right-hand side of a rule properly matches the second alternative for input ab. This quirk arises from a nongreedy design decision that’s too complicated to go into here.</p>
<li>
</ol>

To illustrate the different ways to use loops within lexer rules, consider the following grammar, which has three different action-like tokens (using different delimiters so that they all fit within one example grammar).

```
ACTION1 : '{' ( STRING | . )*? '}' ; // Allows {"foo}
ACTION2 : '[' ( STRING | ~'"' )*? ']' ; // Doesn't allow ["foo]; nongreedy *?
ACTION3 : '<' ( STRING | ~[">] )* '>' ; // Doesn't allow <"foo>; greedy *
STRING : '"' ( '\\"' | . )*? '"' ;
```

Rule `ACTION1` allows unterminated strings, such as `"foo`, because input `"foo` matches to the wildcard part of the loop. It doesn’t have to go into rule `STRING` to match a quote. To fix that, rule `ACTION2` uses `~'"'` to match any character but the quote. Expression `~'"'` is still ambiguous with the `']'` that ends the rule, but the fact that the subrule is nongreedy means that the lexer will exit the loop upon a right square bracket. To avoid a nongreedy subrule, make the alternatives explicit. Expression `~[">]` matches anything but the quote and right angle bracket. Here’s a sample run:

```bash
$ antlr4 Actions.g4
$ javac Actions*.java
$ grun Actions tokens -tokens
=> 	{"foo}
=> 	EOF
<= 	[@0,0:5='{"foo}',<1>,1:0]
 	[@1,7:6='<EOF>',<-1>,2:0]
=> 	$ grun Actions tokens -tokens
=> 	["foo]
=> 	EOF
<= 	line 1:0 token recognition error at: '["foo]
 	'
 	[@0,7:6='<EOF>',<-1>,2:0]
=> 	$ grun Actions tokens -tokens
=> 	<"foo>
=> 	EOF
<= 	line 1:0 token recognition error at: '<"foo>
 	'
 	[@0,7:6='<EOF>',<-1>,2:0]
```

## Nongreedy Parser Subrules

Nongreedy subrules and wildcard are also useful within parsers to do *fuzzy parsing* where the goal is to extract information from an input file without having to specify the full grammar. In contrast to nongreedy lexer decision-making, parsers always make globally correct decisions. A parser never makes a decision that will ultimately cause valid input to fail later on during the parse. Here is the central idea: Nongreedy parser subrules match the shortest sequence of tokens that preserves a successful parse for a valid input sentence.

For example, here are the key rules that demonstrate how to pull integer constants out of an arbitrary Java file:

```
grammar FuzzyJava;
 
/** Match anything in between constant rule matches */
file : .*? (constant .*?)+ ;
 
/** Faster alternate version (Gets an ANTLR tool warning about
 * a subrule like .* in parser that you can ignore.)
 */
altfile : (constant | .)* ; // match a constant or any token, 0-or-more times

/** Match things like "public static final SIZE" followed by anything */
constant
    :   'public' 'static' 'final' 'int' Identifier
        {System.out.println("constant: "+$Identifier.text);}
    ;
 
Identifier : [a-zA-Z_$] [a-zA-Z_$0-9]* ; // simplified
```

The grammar contains a greatly simplified set of lexer rules from a real Java lexer; the whole file about 60 lines. The recognizer still needs to handle string and character constants as well as comments so it doesn’t get out of sync, trying to match a constant inside of the string for example. The only unusual lexer rule performs “match any character not matched by another lexer rule” functionality:

```
OTHER : . -> skip ;
```

This catchall lexer rule and the `.*?` subrule in the parser are the critical ingredients for fuzzy parsing.

Here’s a sample file that we can run into the fuzzy parser:

```java
import java.util.*;
public class C {
    public static final int A = 1;
    public static final int B = 1;
    public void foo() { }
    public static final int C = 1;
}
```

And here’s the build and test sequence:

```bash
$ antlr4 FuzzyJava.g4
$ javac FuzzyJava*.java
$ grun FuzzyJava file C.java
constant: A
constant: B
constant: C
```

Notice that it totally ignores everything except for the `public static final int` declarations. This all happens with only two parser rules.

Now let's try matching some simple class defs w/o having to build parser rules for the junk inside.  Here want to catch just `A` and `B`:

```
class A {
        String name = "parrt";
}

class B {
        int x;   
        int getDubX() {
                return 2*x;
        }
}
```

This grammar does it.

```
grammar Island;
file : clazz* ;
clazz : 'class' ID '{' ignore '}' ;
ignore : (method|.)*? ;
method : type ID '()' block ;
type : 'int' | 'void' ;
block : '{' (block | .)*? '}' ;
ID : [a-zA-Z] [a-zA-Z0-9]* ;
WS : [ \r\t\n]+ -> skip ;
ANY : . ;
```

You get:

<img src="https://github.com/antlr/antlr4/raw/master/doc/images/nonnested-fuzzy.png" width=450>

Now let's try some nested classes

```
class A {
        String name = "parrt";
        class Nested {
            any filthy shite we want in here { }}}}}}
        }
}

class B {
        int x;   
        int getDubX() {
                return 2*x;
        }
}

```

```
grammar Island;
file : clazz* ;
clazz : 'class' ID '{' ignore '}' ;
ignore : (method|clazz|.)*? ; // <- only change is to add clazz alt here
method : type ID '()' block ;
type : 'int' | 'void' ;
block : '{' (block | .)*? '}' ;
ID : [a-zA-Z] [a-zA-Z0-9]* ;
WS : [ \r\t\n]+ -> skip ;
ANY : . ;
```

You get:

<img src="https://github.com/antlr/antlr4/raw/master/doc/images/nested-fuzzy.png" width=600>

<a id="listeners.md"></a>
<a id="/doc/listeners.md"></a>

# Parse Tree Listeners

*Partially taken from publically visible [excerpt from ANTLR 4 book](http://media.pragprog.com/titles/tpantlr2/picture.pdf)*

By default, ANTLR-generated parsers build a data structure called a parse tree or syntax tree that records how the parser recognized the structure of the input sentence and component phrases.

<img src="https://github.com/antlr/antlr4/raw/master/doc/images/process.png">

The interior nodes of the parse tree are phrase names that group and identify their children. The root node is the most abstract phrase name, in this case `stat` (short for statement). The leaves of a parse tree are always the input tokens. Parse trees sit between a language recognizer and an interpreter or translator implementation. They are extremely effective data structures because they contain all of the input and complete knowledge of how the parser grouped the symbols into phrases. Better yet, they are easy to understand and the parser generates them automatically (unless you turn them off with `parser.setBuildParseTree(false)`).

Because we specify phrase structure with a set of rules, parse tree subtree roots correspond to grammar rule names. ANTLR has a ParseTreeWalker that knows how to walk these parse trees and trigger events in listener implementation objects that you can create. The ANTLR tool generates listener interfaces for you also, unless you turn that off with a commandline option. You can also have it generate visitors. For example from a Java.g4 grammar, ANTLR generates:

```java
public interface JavaListener extends ParseTreeListener<Token> {
  void enterClassDeclaration(JavaParser.ClassDeclarationContext ctx);
  void exitClassDeclaration(JavaParser.ClassDeclarationContext ctx);
  void enterMethodDeclaration(JavaParser.MethodDeclarationContext ctx);
 ...
}
```

where there is an enter and exit method for each rule in the parser grammar. ANTLR also generates a base listener with empty implementations of all listener interface methods, in this case called JavaBaseListener. You can build your listener by subclassing this base and overriding the methods of interest.

Assuming you've created a listener object called `MyListener`, here is how to call the Java parser and walk the parse tree:

```java
JavaLexer lexer = new JavaLexer(input);
CommonTokenStream tokens = new CommonTokenStream(lexer);
JavaParser parser = new JavaParser(tokens);
JavaParser.CompilationUnitContext tree = parser.compilationUnit(); // parse a compilationUnit

MyListener extractor = new MyListener(parser);
ParseTreeWalker.DEFAULT.walk(extractor, tree); // initiate walk of tree with listener in use of default walker
```

Listeners and visitors are great because they keep application-specific code out of grammars, making grammars easier to read and preventing them from getting entangled with a particular application.

See the book for more information on listeners and to learn how to use visitors. (The biggest difference between the listener and visitor mechanisms is that listener methods are called independently by an ANTLR-provided walker object, whereas visitor methods must walk their children with explicit visit calls.  Forgetting to invoke visitor methods on a node’s children, means those subtrees don’t get visited.)

## Listening during the parse

We can also use listeners to execute code during the parse instead of waiting for a tree walker walks the resulting parse tree. Let's say we have the following simple expression grammar.

```
grammar CalcNoLR;

s : expr EOF ;

expr:	add ((MUL | DIV) add)* ;

add :   atom ((ADD | SUB) atom)* ;

atom : INT ;

INT : [0-9]+;
MUL : '*';
DIV : '/';
ADD : '+';
SUB : '-';
WS : [ \t]+ -> channel(HIDDEN);
```

We can create a listener that executes during the parse by implementing the listener interface as before:


```java
class CountListener extends CalcNoLRBaseListener {
	public int nums = 0;
	public boolean execExitS = false;

	@Override
	public void exitS(CalcNoLRParser.SContext ctx) {
		execExitS = true;
	}

	@Override
	public void exitAtom(CalcNoLRParser.AtomContext ctx) {
		nums++;
	}
}
```

And then passing it to `addParseListener()`:

```java
String input = "2 + 8 / 2";
CalcNoLRLexer lexer = new CalcNoLRLexer(new ANTLRInputStream(input));
CalcNoLRParser parser = new CalcNoLRParser(new CommonTokenStream(lexer));
CountListener counter = new CountListener();
parser.addParseListener(counter);

// Check that the purses valid first
CalcNoLRParser.SContext context = parser.s();
String parseTreeS = context.toStringTree(parser);
assertEquals("(s (expr (add (atom 2) + (atom 8)) / (add (atom 2))) <EOF>)", parseTreeS);
assertEquals(3, counter.nums);
assertEquals(true, counter.execExitS);
```

One should not do very complicated work during the parse because the parser is throwing exception to handle syntax errors. If you're complicated code throws different kind of exception it will screw up the parsing and things will go nuts. If you want to catch and properly handle exceptions in your listener code during the parse, you should override this method from `Parser`:

```java
protected boolean listenerExceptionOccurred = false;

/**
 * Notify any parse listeners of an exit rule event.
 *
 * @see #addParseListener
 */
@override
protected void triggerExitRuleEvent() {
	if ( listenerExceptionOccurred ) return;
	try {
		// reverse order walk of listeners
		for (int i = _parseListeners.size() - 1; i >= 0; i--) {
			ParseTreeListener listener = _parseListeners.get(i);
			_ctx.exitRule(listener);
			listener.exitEveryRule(_ctx);
		}
	}
	catch (Throwable e) {
		// If an exception is thrown in the user's listener code, we need to bail out
		// completely out of the parser, without executing anymore user code. We
		// must also stop the parse otherwise other listener actions will attempt to execute
		// almost certainly with invalid results. So, record the fact an exception occurred
		listenerExceptionOccurred = true;
		throw e;
	}
}
```

Now, if you throw an exception inside one of the listener methods:

```java
// Now throw an exception in the listener
class ErrorListener extends CalcNoLRBaseListener {
	public boolean execExitS = false;
	public boolean execExitAtom = false;

	@Override
	public void exitS(CalcNoLRParser.SContext ctx) {
		execExitS = true;
	}

	@Override
	public void exitAtom(CalcNoLRParser.AtomContext ctx) {
		execExitAtom = true;
		throw new NullPointerException("bail out");
	}
}
```

then the exception will properly cause the parser to bailout and the exception will not be thrown out:

```
java.lang.NullPointerException: bail out

	at org.antlr.v4.test.runtime.java.api.TestParseListener$2ErrorListener.exitAtom(TestParseListener.java:102)
	at org.antlr.v4.test.runtime.java.api.CalcNoLRParser$AtomContext.exitRule(CalcNoLRParser.java:311)
	at org.antlr.v4.runtime.Parser.triggerExitRuleEvent(Parser.java:412)
	at org.antlr.v4.runtime.Parser.exitRule(Parser.java:654)
	at org.antlr.v4.test.runtime.java.api.CalcNoLRParser.atom(CalcNoLRParser.java:336)
	at org.antlr.v4.test.runtime.java.api.CalcNoLRParser.add(CalcNoLRParser.java:261)
	at org.antlr.v4.test.runtime.java.api.CalcNoLRParser.expr(CalcNoLRParser.java:181)
	at org.antlr.v4.test.runtime.java.api.CalcNoLRParser.s(CalcNoLRParser.java:123)
```

<a id="tree-matching.md"></a>
<a id="/doc/tree-matching.md"></a>

# Parse Tree Matching and XPath

*Since ANTLR 4.2*

ANTLR 4 introduced a visitor and listener mechanism that lets you implement DOM visiting or SAX-analogous event processing of tree nodes. This works great. For example, if all you care about is looking at Java method declarations, grab the `Java.g4` file and then override methodDeclaration in `JavaBaseListener`. From there, a `ParseTreeWalker` can trigger calls to your overridden method as it walks the tree. Easy things are easy.

This mechanism works more or less on a node-level basis. In other words, for every method declaration subtree root, your `methodDeclaration()` would get called. There are many situations where we care more about subtrees not just nodes. We might want to:

* Collect method declarations within a particular context (i.e., nested within another method) or methods with specific structure or specific types (e.g., `void <ID>() { }`). We'll combine `XPath` and tree pattern matching for this.
* Group translation operations by patterns in the tree rather than spreading operations across listener event methods.
* Get a list of all assignments anywhere in the tree. It's much easier to say *go find me all "... = ... ;" subtrees* rather than creating a class just to get a listener method for rule assignment and then passing the listener to the parse tree walker.

The other important idea here is that, since we're talking about parse trees not abstract syntax trees, we can use concrete patterns instead of tree syntax. For example, we can say `x = 0;` instead of AST `(= x 0)` where the `;` would probably stripped before it went into the AST.

## Parse tree patterns

To test a subtree to see if it has a particular structure, we use a tree pattern. We also often want to extract descendents from the subtree based upon the structure. A very simple example is checking to see if a subtree matches an assignment statement. The pattern might look like the following in your language:

```
<ID> = <expr>;
```

where "tags" in angle brackets represent either token or rule references in the associated grammar. ANTLR converts that string to a parse tree with special nodes that represent any token `ID` and rule `expr` subtree. To create this parse tree, the pattern matching compiler needs to know which rule in the grammar the pattern conforms to. In this case it might be statement. Here is how we could test a tree, `t`, to see if it matches that pattern:

```java
ParseTree t = ...; // assume t is a statement
ParseTreePattern p = parser.compileParseTreePattern("<ID> = <expr>;", MyParser.RULE_statement);
ParseTreeMatch m = p.match(t);
if ( m.succeeded() ) {...}
```

We can also test for specific expressions or token values. For example, the following checks to see if `t` is an expression consisting of an identifier added to 0:

```java
ParseTree t = ...; // assume t is an expression
ParseTreePattern p = parser.compileParseTreePattern("<ID>+0", MyParser.RULE_expr);
ParseTreeMatch m = p.match(t);
```

We can also ask the `ParseTreeMatch` result to pull out the token matched to the `<ID>` tag:

```java
String id = m.get("ID");
```

You can change the tag delimiters using a method on the pattern matcher:

```java
ParseTreePatternMatcher m = new ParseTreePatternMatcher();
m.setDelimiters("<<", ">>", "$"); // $ is the escape character
```

This would allow pattern `<<ID>> = <<expr>> ;$<< ick $>>` to be interpreted as elements: `ID`, ` = `, `expr`, and ` ;<< ick >>`.

### Pattern labels

The tree pattern matcher tracks the nodes in the tree at matches against the tags in a tree pattern. That way we can use the `get()` and `getAll()` methods to retrieve components of the matched subtree. For example, for pattern `<ID>`, `get("ID")` returns the node matched for that `ID`. If more than one node matched the specified token or rule tag, only the first match is returned. If there is no node associated with the label, this returns null.

You can also label the tags with identifiers. If the label is the name of a parser rule or token in the grammar, the resulting list from `getAll()` (or node from `get()`) will contain both the parse trees matching rule or tags explicitly labeled with the label and the complete set of parse trees matching the labeled and unlabeled tags in the pattern for the parser rule or token. For example, if label is `foo`, the result will contain all of the following.

* Parse tree nodes matching tags of the form `<foo:anyRuleName>` and `<foo:AnyTokenName>`.
* Parse tree nodes matching tags of the form `<anyLabel:foo>`.
* Parse tree nodes matching tags of the form `<foo>`.

### Creating parse trees with the pattern matcher

You can use the parse tree pattern compiler to create parse trees for partial input fragments. Just use method `ParseTreePattern.getPatternTree()`.

See [TestParseTreeMatch.java](https://github.com/antlr/antlr4/blob/master/tool-testsuite/test/org/antlr/v4/test/tool/TestParseTreeMatcher.java).

## Using XPath to identify parse tree node sets

XPath paths are strings representing nodes or subtrees you would like to select within a parse tree. It's useful to collect subsets of the parse tree to process. For example you might want to know where all assignments are in a method or all variable declarations that are initialized.

A path is a series of node names with the following separators.

| Expression |Description|
|---------|-----------|
|nodename|	Nodes with the token or rule name nodename
|/|	The root node but `/X` is the same as `X` since the tree you pass to xpath is assumed to be the root. Because it looks better, start all of your patterns with `/` (or `//` below).|
|//|	All nodes in the tree that match the next element in the path. E.g., `//ID` finds all `ID` token nodes in the tree.|
|!|	Any node except for the next element in the path. E.g., `/classdef/!field` should find all children of `classdef` root node that are not `field` subtrees.|

Examples:

```
/prog/func, -> all funcs under prog at root
/prog/*, -> all children of prog at root
/*/func, -> all func kids of any root node
prog, -> prog must be root node
/prog, -> prog must be root node
/*, -> any root
*, -> any root
//ID, -> any ID in tree
//expr/primary/ID, -> any ID child of a primary under any expr
//body//ID, -> any ID under a body
//'return', -> any 'return' literal in tree
//primary/*, -> all kids of any primary
//func/*/stat, -> all stat nodes grandkids of any func node
/prog/func/'def', -> all def literal kids of func kid of prog
//stat/';', -> all ';' under any stat node
//expr/primary/!ID, -> anything but ID under primary under any expr node
//expr/!primary, -> anything but primary under any expr node
//!*, -> nothing anywhere
/!*, -> nothing at root
```

Given a parse tree, the typical mechanism for visiting those nodes is the following loop:

```java
for (ParseTree t : XPath.findAll(tree, xpath, parser) ) {
    ... process t ...
}
```

E.g., here is a general formula for making a list of the text associated with every node identified by a path specification:

```java
List<String> nodes = new ArrayList<String>();
for (ParseTree t : XPath.findAll(tree, xpath, parser) ) {
    if ( t instanceof RuleContext) {
        RuleContext r = (RuleContext)t;
        nodes.add(parser.getRuleNames()[r.getRuleIndex()]);    }      
    else { 
        TerminalNode token = (TerminalNode)t;
        nodes.add(token.getText());
    }      
}
```

## Combining XPath and tree pattern matching

Naturally you can combine the use of XPath to find a set of root nodes and then use tree pattern matching to identify a certain subset of those and extract component nodes.

```java
// assume we are parsing Java
ParserRuleContext tree = parser.compilationUnit();
String xpath = "//blockStatement/*"; // get children of blockStatement
String treePattern = "int <Identifier> = <expression>;";
ParseTreePattern p =
    parser.compileParseTreePattern(treePattern,   
        ExprParser.RULE_localVariableDeclarationStatement);
List<ParseTreeMatch> matches = p.findAll(tree, xpath);
System.out.println(matches);
```

See [TestXPath.java](https://github.com/antlr/antlr4/blob/master/tool-testsuite/test/org/antlr/v4/test/tool/TestXPath.java).

<a id="predicates.md"></a>
<a id="/doc/predicates.md"></a>

# Semantic Predicates

Semantic predicates, `{...}?`, are boolean expressions written in the target language that indicate the validity of continuing the parse along the path "guarded" by the predicate. Predicates can appear anywhere within a parser rule just like actions can, but only those appearing on the left edge of alternatives can affect prediction (choosing between alternatives).  This section provides all of the fine print regarding the use of semantic predicates in parser and lexer rules. Let's start out by digging deeper into how the parser incorporates predicates into parsing decisions.

## Making Predicated Parsing Decisions

ANTLR's general decision-making strategy is to find all viable alternatives and then ignore the alternatives guarded with predicates that currently evaluate to false. (A viable alternative is one that matches the current input.) If more than one viable alternative remains, the parser chooses the alternative specified first in the decision.

Consider a variant of C++ where array references also use parentheses instead of square brackets. If we only predicate one of the alternatives, we still have an ambiguous decision in expr:

```
expr: ID '(' expr ')' // array reference (ANTLR picks this one)
 	| {istype()}? ID '(' expr ')' // ctor-style typecast
 	| ID '(' expr ')' // function call
 	;
```

In this case, all three alternatives are viable for input `x(i)`. When `x` is not a type name, the predicate evaluates to false, leaving only the first and third alternatives as possible matches for expr. ANTLR automatically chooses the first alternative matching the array reference to resolve the ambiguity. Leaving ANTLR with more than one viable alternative because of too few predicates is probably not a good idea. It's best to cover n viable alternatives with at least n-1 predicates. In other words, don't build rules like expr with too few predicates.

Sometimes, the parser finds multiple visible predicates associated with a single choice. No worries. ANTLR just combines the predicates with appropriate logical operators to conjure up a single meta-predicate on-the-fly.

For example, the decision in rule `stat` joins the predicates from both alternatives of expr with the `||` operator to guard the second stat alternative:

```
stat: decl | expr ;
decl: ID ID ;
expr: {istype()}? ID '(' expr ')' // ctor-style typecast
 	| {isfunc()}? ID '(' expr ')' // function call
 	;
```

The parser will only predict an expr from stat when `istype()||isfunc()` evaluates to true. This makes sense because the parser should only choose to match an expression if the upcoming `ID` is a type name or function name. It wouldn't make sense to just test one of the predicates in this case. Note that, when the parser gets to `expr` itself, the parsing decision tests the predicates individually, one for each alternative.

If multiple predicates occur in a sequence, the parser joins them with the `&&` operator. For example, consider changing `stat` to include a predicate before the call `toexpr`:

```
stat: decl | {java5}? expr ;
```

Now, the parser would only predict the second alternative if `java5&&(istype()||isfunc())` evaluated to true.

Turning to the code inside the predicates themselves now, keep in mind the following guidelines.

Even when the parser isn't making decisions, predicates can deactivate alternatives, causing rules to fail. This happens when a rule only has a single alternative. There is no choice to make, but ANTLR evaluates the predicate as part of the normal parsing process, just like it does for actions. That means that the following rule always fails to match.

```
prog: {false}? 'return' INT ; // throws FailedPredicateException
```

ANTLR converts `{false}?` in the grammar to a conditional in the generated parser:

```
if ( !false ) throw new FailedPredicateException(...);
```

So far, all of the predicates we've seen have been visible and available to the prediction process, but that's not always the case.

## Finding Visible Predicates

The parser will not evaluate predicates during prediction that occur after an action or token reference. Let's think about the relationship between actions and predicates first.

ANTLR has no idea what's inside the raw code of an action and so it must assume any predicate could depend on side effects of that action. Imagine an action that computed value `x` and a predicate that tested `x`. Evaluating that predicate before the action executed to create `x` would violate the implied order of operations within the grammar.

More importantly, the parser can't execute actions until it has decided which alternative to match. That's because actions have side effects and we can't undo things like print statements. For example, in the following rule, the parser can't execute the action in front of the `{java5}?` predicate before committing to that alternative.

```
@members {boolean allowgoto=false;}
stat: {System.out.println("goto"); allowgoto=true;} {java5}? 'goto' ID ';'
 	| ...
 	;
```

If we can't execute the action during prediction, we shouldn't evaluate the `{java5}?` predicate because it depends on that action.

The prediction process also can't see through token references. Token references have the side effect of advancing the input one symbol. A predicate that tested the current input symbol would find itself out of sync if the parser shifted it over the token reference. For example, in the following grammar, the predicates expect `getCurrentToken` to return an `ID` token.

```
stat: '{' decl '}'
 	| '{' stat '}'
 	;
decl: {istype(getCurrentToken().getText())}? ID ID ';' ;
expr: {isvar(getCurrentToken().getText())}? ID ;
```

The decision in stat can't test those predicates because, at the start of stat, the current token is a left curly. To preserve the semantics, ANTLR won't test the predicates in that decision.

Visible predicates are those that prediction encounters before encountering an action or token. The prediction process ignores nonvisible predicates, treating them as if they don't exist.

In rare cases, the parser won't be able to use a predicate, even if it's visible to a particular decision. That brings us to our next fine print topic.

## Using Context-Dependent Predicates

A predicate that depends on a parameter or local variable of the surrounding rule, is considered a context-dependent predicate. Clearly, we can only evaluate such predicates within the rules in which they're defined. For example, it makes no sense for the decision in prog below to test context-dependent predicate `{$i<=5}?`. That `$i` local variable is not even defined in `prog`.

```
prog: vec5
 	| ...
 	;
vec5
locals [int i=1]
 	: ( {$i<=5}? INT {$i++;} )* // match 5 INTs
 	;
```

ANTLR ignores context-dependent predicates that it can't evaluate in the proper context. Normally the proper context is simply the rule defining the predicate, but sometimes the parser can't even evaluate a context-dependent predicate from within the same rule! Detecting these cases is done on-the-fly at runtime during adaptive LL(*) prediction.

For example, prediction for the optional branch of the else subrule in stat below "falls off" the end of stat and continues looking for symbols in the invoking prog rule.

```
prog: stat+ ; // stat can follow stat
stat
locals [int i=0]
 	: {$i==0}? 'if' expr 'then' stat {$i=5;} ('else' stat)?
 	| 'break' ';'
 	;
```

The prediction process is trying to figure out what can follow an if statement other than an else clause. Since the input can have multiple stats in a row, the prediction for the optional branch of the else subrule reenters stat. This time, of course, it gets a new copy of `$i` with a value of 0, not 5. ANTLR ignores context-dependent predicate `{$i==0}?` because it knows that the parser isn't in the original stat call. The predicate would test a different version of `$i` so the parser can't evaluate it.

The fine print for predicates in the lexer more or less follow these same guidelines, except of course lexer rules can't have parameters and local variables. Let's look at all of the lexer-specific guidelines in the next section.

## Predicates in Lexer Rules

In parser rules, predicates must appear on the left edge of alternatives to aid in alternative prediction. Lexers, on the other hand, prefer predicates on the right edge of lexer rules because they choose rules after seeing a token's entire text. Predicates in lexer rules can technically be anywhere within the rule. Some positions might be more or less efficient than others; ANTLR makes no guarantees about the optimal spot. A predicate in a lexer rule might be executed multiple times even during a single token match. You can embed multiple predicates per lexer rule and they are evaluated as the lexer reaches them during matching.

Loosely speaking, the lexer's goal is to choose the rule that matches the most input characters. At each character, the lexer decides which rules are still viable. Eventually, only a single rule will be still viable. At that point, the lexer creates a token object according the rule's token type and matched text.

Sometimes the lexer is faced with more than a single viable matching rule. For example, input enum would match an `ENUM` rule and an `ID` rule. If the next character after enum is a space, neither rule can continue. The lexer resolves the ambiguity by choosing the viable rule specified first in the grammar. That's why we have to place keyword rules before an identifier rule like this:

```
ENUM : 'enum' ;
ID : [a-z]+ ;
```

If, on the other hand, the next character after input `enum` is a letter, then only `ID` is viable.

Predicates come into play by pruning the set of viable lexer rules. When the lexer encounters a false predicate, it deactivates that rule just like parsers deactivate alternatives with false predicates.

Like parser predicates, lexer predicates can't depend on side effects from lexer actions. That said, the predicate can depend on a side effect of an action that occured during the recognition of the previous token. That's because actions can only execute after the lexer positively identifies the rule to match. Since predicates are part of the rule selection process, they can't rely on action side effects created by actions in currently-prospective rules. Lexer actions must appear after predicates in lexer rules. As an example, here's another way to match enum as a keyword in the lexer:

```
ENUM: [a-z]+ {getText().equals("enum")}?
	   {System.out.println("enum!");}
    ;
ID  : [a-z]+ {System.out.println("ID "+getText());} ;
```

The print action in `ENUM` appears last and executes only if the current input matches `[a-z]+` and the predicate is true. Let's build and test `Enum3` to see if it distinguishes between enum and an identifier:

```bash
$ antlr4 Enum3.g4
$ javac Enum3.java
$ grun Enum3 tokens
=> 	enum abc
=> 	EOF
<= 	enum!
 	ID abc
```

That works great, but it's really just for instructional purposes. It's easier to understand and more efficient to match enum keywords with a simple rule like this:

```
ENUM : 'enum' ;
```

Here's another example of a predicate.  It's important to note that the predicate is evaluated before the action because actions are only executed if the lexer rule matches. The actions are not executed in line; they are collected and executed en mass later.

```
INDENT : [ \t]+ {System.out.println("INDENT")>} {this.getCharPositionInLine()==0}? ;
```

For more information on how actions and predicates operate in the lexer, see [Lexer actions and semantic predicates are executed out of order](https://github.com/antlr/antlr4/issues/3611) and [Lexer.getCharIndex() return value not behaving as expected](https://github.com/antlr/antlr4/issues/3606). The lexer rule that will not work as expected is:

```
Stuff : ( 'a'+ {count++;} | 'b') 'c' 'd' {count == 3}? ;
```

The `count++` code we'll not execute until after `Stuff` has been recognized (assuming count!=3).
<a id="options.md"></a>
<a id="/doc/options.md"></a>

# Options

There are a number of options that you can specify at the grammar and rule element level. (There are currently no rule options.) These change how ANTLR generates code from your grammar. The general syntax is:

```
options { name1=value1; ... nameN=valueN; } // ANTLR not target language syntax
```

where a value can be an identifier, a qualified identifier (for example, a.b.c), a string, a multi-line string in curly braces `{...}`, and an integer.

## Grammar Options

All grammars can use the following options. In combined grammars, all options except language pertain only to the generated parser. Options may be set either within the grammar file using the options syntax (described above) or when invoking ANTLR on the command line, using the `-D` option. (see Section 15.9, [ANTLR Tool Command Line Options](#/doc/tool-options.md).) The following examples demonstrate both mechanisms; note that `-D` overrides options within the grammar.

### `superClass`

Set the superclass of the generated parser or lexer. For combined grammars, it sets the superclass of the parser.

```bash
$ cat Hi.g4
grammar Hi;
a : 'hi' ;
$ antlr4 -DsuperClass=XX Hi.g4
$ grep 'public class' HiParser.java
public class HiParser extends XX {
$ grep 'public class' HiLexer.java
public class HiLexer extends Lexer {
```

### `language`

Generate code in the indicated language, if ANTLR is able to do so. Otherwise, you will see an error message like this:

```
$ antlr4 -Dlanguage=C MyGrammar.g4
error(31):  ANTLR cannot generate C code as of version 4.0
```

### `tokenVocab`

ANTLR assigns token type numbers to the tokens as it encounters them in a file. To use different token type values, such as with a separate lexer, use this option to have ANTLR pull in the <fileextension>tokens</fileextension> file. ANTLR generates a <fileextension>tokens</fileextension> file from each grammar.

```bash
$ cat SomeLexer.g4
lexer grammar SomeLexer;
ID : [a-z]+ ;
$ cat R.g4
parser grammar R;
options {tokenVocab=SomeLexer;}
tokens {A,B,C} // normally, these would be token types 1, 2, 3
a : ID ;
$ antlr4 SomeLexer.g4
$ cat SomeLexer.tokens 
ID=1
$ antlr4 R.g4
$ cat R.tokens
A=2
B=3
C=4
ID=1
```

### `TokenLabelType`

ANTLR normally uses type <class>Token</class> when it generates variables referencing tokens. If you have passed a <class>TokenFactory</class> to your parser and lexer so that they create custom tokens, you should set this option to your specific type. This ensures that the context objects know your type for fields and method return values.

```bash
$ cat T2.g4
grammar T2;
options {TokenLabelType=MyToken;}
a : x=ID ;
$ antlr4 T2.g4
$ grep MyToken T2Parser.java
    public MyToken x;
```

### `contextSuperClass`

Specify the super class of parse tree internal nodes. Default is `ParserRuleContext`. Should derive from ultimately `RuleContext` at minimum.
Java target can use `contextSuperClass=org.antlr.v4.runtime.RuleContextWithAltNum` for convenience. It adds a backing field for `altNumber`, the alt matched for the associated rule node.

### `caseInsensitive`

As of 4.10, ANTLR supports case-insensitive lexers using a grammar option. For example, the parser from the following grammar:

```g4
lexer grammar L;
options { caseInsensitive = true; }
ENGLISH_TOKEN:   [a-z]+;
GERMAN_TOKEN:    [äéöüß]+;
FRENCH_TOKEN:    [àâæ-ëîïôœùûüÿ]+;
CROATIAN_TOKEN:  [ćčđšž]+;
ITALIAN_TOKEN:   [àèéìòù]+;
SPANISH_TOKEN:   [áéíñóúü¡¿]+;
GREEK_TOKEN:     [α-ω]+;
RUSSIAN_TOKEN:   [а-я]+;
WS:              [ ]+ -> skip;
```

matches words such as the following:

```
abcXYZ äéöüßÄÉÖÜß àâæçÙÛÜŸ ćčđĐŠŽ àèéÌÒÙ áéÚÜ¡¿ αβγΧΨΩ абвЭЮЯ
```

ANTLR considers only one-length chars in all cases. For instance, german lower `ß` is not treated as upper `ss` and vice versa.

The mechanism works by automatically transforming grammar references to characters to there upper/lower case equivalent; e.g., `a` to `[aA]`. This means that you do not need to convert your input characters to uppercase--token text will be as it appears in the input stream.

## Rule Options

### caseInsensitive

The tool support `caseInsensitive` lexer rule option that is described in [lexer-rules.md](lexer-rules.md#caseinsensitive).

## Rule Element Options

Token options have the form `T<name=value>` as we saw in Section 5.4, [Dealing with Precedence, Left Recursion, and Associativity](http://pragprog.com/book/tpantlr2/the-definitive-antlr-4-reference). The only token option is `assoc`, and it accepts values `left` and `right`. Here’s a sample grammar with a left-recursive expression rule that specifies a token option on the `^` exponent operator token:

```bash
grammar ExprLR;
 	 
expr : expr '^'<assoc=right> expr
 	| expr '*' expr // match subexpressions joined with '*' operator
 	| expr '+' expr // match subexpressions joined with '+' operator
 	| INT // matches simple integer atom
 	;
 	 
INT : '0'..'9'+ ;
WS : [ \n]+ -> skip ;
```

Semantic predicates also accept an option, per [Catching failed semantic predicates](http://pragprog.com/book/tpantlr2/the-definitive-antlr-4-reference). The only valid option is the `fail` option, which takes either a string literal in double-quotes or an action that evaluates to a string. The string literal or string result from the action should be the message to emit upon predicate failure.

```bash
ints[int max]
 	locals [int i=1]
 	: INT ( ',' {$i++;} {$i<=$max}?<fail={"exceeded max "+$max}> INT )*
 	;
```

The action can execute a function as well as compute a string when a predicate fails: `{...}?<fail={doSomethingAndReturnAString()}>`

<a id="tool-options.md"></a>
<a id="/doc/tool-options.md"></a>

# ANTLR Tool Command Line Options

If you invoke the ANTLR tool without command line arguments, you’ll get a help message:

```bash
$ antlr4
ANTLR Parser Generator  Version 4.7.1
 -o ___              specify output directory where all output is generated
 -lib ___            specify location of grammars, tokens files
 -atn                generate rule augmented transition network diagrams
 -encoding ___       specify grammar file encoding; e.g., euc-jp
 -message-format ___ specify output style for messages in antlr, gnu, vs2005
 -long-messages      show exception details when available for errors and warnings
 -listener           generate parse tree listener (default)
 -no-listener        don't generate parse tree listener
 -visitor            generate parse tree visitor
 -no-visitor         don't generate parse tree visitor (default)
 -package ___        specify a package/namespace for the generated code
 -depend             generate file dependencies
 -D<option>=value    set/override a grammar-level option
 -Werror             treat warnings as errors
 -XdbgST             launch StringTemplate visualizer on generated code
 -XdbgSTWait         wait for STViz to close before continuing
 -Xforce-atn         use the ATN simulator for all predictions
 -Xlog               dump lots of logging info to antlr-timestamp.log
 -Xexact-output-dir  all output goes into -o dir regardless of paths/package
```

Here are more details on the options:

## `-o outdir`

ANTLR generates output files in the current directory by default. This option specifies the output directory where ANTLR should generate parsers, listeners, visitors, and tokens files.
 	
```bash
$ antlr4 -o /tmp T.g4
$ ls /tmp/T*
/tmp/T.tokens /tmp/TListener.java
/tmp/TBaseListener.java /tmp/TParser.java
```

## `-lib libdir`

When looking for tokens files and imported grammars, ANTLR normally looks in the current directory. This option specifies which directory to look in instead. It is only used for resolving grammar references for the import statement and the tokenVocab option. The path to the primary grammar must always be fully specified.

```bash
$ cat /tmp/B.g4
 	
parser grammar B;
 	
x : ID ;
 	
$ cat A.g4
 	
grammar A;
 	
import B;
 	
s : x ;
 	
ID : [a-z]+ ;
 	
$ antlr4 -lib /tmp A.g4
```

## `-atn`

Generate DOT graph files that represent the internal ATN (augmented transition network) data structures that ANTLR uses to represent grammars. The files come out as Grammar.rule .dot. If the grammar is a combined grammar, the lexer rules are named Grammar Lexer.rule .dot.

```bash
$ cat A.g4
 	
grammar A;
 	
s : b ;
 	
b : ID ;
 	
ID : [a-z]+ ;
 	
$ antlr4 -atn A.g4
 	
$ ls *.dot
 	
A.b.dot A.s.dot ALexer.ID.dot
```

## `-encoding encodingname`

By default ANTLR loads grammar files using the UTF-8 encoding, which is a very common character file encoding that degenerates to ASCII for characters that fit in one byte. There are many character file encodings from around the world. If that grammar file is not the default encoding for your locale, you need this option so that ANTLR can properly interpret grammar files. This does not affect the input to the generated parsers, just the encoding of the grammars themselves.

## `-message-format format`

ANTLR generates warning and error messages using templates from directory tool/resources/org/antlr/v4/tool/templates/messages/formats. By default, ANTLR uses the antlr.stg (StringTemplate group) file. You can change this to gnu or vs2005 to have ANTLR generate messages appropriate for Emacs or Visual Studio. To make your own called X, create resource org/antlr/v4/tool/templates/messages/formats/ X and place it in the CLASSPATH.

## `-listener`

This option tells ANTLR to generate a parse tree listener and is the default.

## `-no-listener`

This option tells ANTLR not to generate a parse tree listener.

## `-visitor`

ANTLR does not generate parse tree visitors by default. This option turns that feature on. ANTLR can generate both parse tree listeners and visitors; this option and -listener aren’t mutually exclusive.

## `-no-visitor`

Tell ANTLR not to generate a parse tree visitor; this is the default.

## `-package`

Use this option to specify a package or namespace for ANTLR-generated files. Alternatively, you can add a @header {...} action but that ties the grammar to a specific language. If you use this option and @header, make sure that the header action does not contain a package specification otherwise the generated code will have two of them.

## `-depend`

Instead of generating a parser and/or lexer, generate a list of file dependencies, one per line. The output shows what each grammar depends on and what it generates. This is useful for build tools that need to know ANTLR grammar dependencies. Here’s an example:
 	
```bash
$ antlr4 -depend T.g	
T.g: A.tokens
TParser.java : T.g
T.tokens : T.g
TLexer.java : T.g
TListener.java : T.g
TBaseListener.java : T.g
```

If you use -lib libdir with -depend and grammar option tokenVocab=A, then the dependencies include the library path as well: T.g: libdir/A.tokens. The output is also sensitive to the -o outdir option: outdir/TParser.java : T.g.

## `-D<option>=value`

Use this option to override or set a grammar-level option in the specified grammar or grammars. This option is useful for generating parsers in different languages without altering the grammar itself. (I expect to have other targets in the near future.)
 	
```bash
$ antlr4 -Dlanguage=Java T.g4 # default
$ antlr4 -Dlanguage=C T.g4
error(31): ANTLR cannot generate C code as of version 4.0b3
```

## `-Werror`

As part of a large build, ANTLR warning messages could go unnoticed. Turn on this option to have warnings treated as errors, causing the ANTLR tool to report failure back to the invoking commandline shell.
There are also some extended options that are useful mainly for debugging ANTLR itself:

## `-Xsave-lexer`

ANTLR generates both a parser and a lexer from a combined grammar. To create the lexer, ANTLR extracts a lexer grammar from the combined grammar. Sometimes it’s useful to see what that looks like if it’s not clear what token rules ANTLR is creating. This does not affect the generated parsers or lexers.

## `-XdbgST`

For those building a code generation target, this option brings up a window showing the generated code and the templates used to generate that code. It invokes the StringTemplate inspector window.

## `-Xforce-atn`

ANTLR normally builds traditional “switch on token type” decisions where possible (one token of lookahead is sufficient to distinguish between all alternatives in a decision). To force even these simple decisions into the adaptive LL(*) mechanism, use this option.

## `-Xlog`

This option creates a log file containing lots of information messages from ANTLR as it processes your grammar. If you would like to see how ANTLR translates your left-recursive rules, turn on this option and look in the resulting log file.
 	
```bash
$ antlr4 -Xlog T.g4 	
wrote ./antlr-2012-09-06-17.56.19.log
```

## `-Xexact-output-dir`

(*See the [discussion](https://github.com/antlr/antlr4/pull/2065)*).

All output goes into `-o` dir regardless of paths/package.

* Output `-o` directory specifier is the exact directory containing the output. Previously it would include the relative path specified on the grammar itself for the purposes of packages.

**new**: `-o /tmp subdir/T.g4` => `/tmp/subdir/T.java`
**old**: `-o /tmp subdir/T.g4` => `/tmp/T.java`

*  Previously we looked for the tokens vocab file in the `-lib` dir or in the output dir. **New**: also look in the directory containing the grammar, particularly if it it is specified with a path.

### Example for the output directory (4.7)

Here is the existing 4.7 functionality.

(For these examples, assume a4.7 and a4.7.1 are aliases to the right version of ANTLR's `org.antlr.v4.Tool`.)

```bash
$ cd /tmp/parrt
$ tree
.
├── B.g4
└── src
    └── pkg
        └── A.g4
$ a4.7 -o /tmp/build src/pkg/A.g4
$ tree /tmp/build
/tmp/build/
└── src
    └── pkg
        ├── A.tokens
        ├── ABaseListener.java
        ├── ALexer.java
        ├── ALexer.tokens
        ├── AListener.java
        └── AParser.java
```

Now, let's build a grammar that sits in the current directory:

```bash
$ a4.7 -o /tmp/build B.g4
$ tree /tmp/build
/tmp/build
├── B.tokens
├── BBaseListener.java
├── BLexer.java
├── BLexer.tokens
├── BListener.java
├── BParser.java
└── src
    └── pkg
        ├── A.tokens
        ├── ABaseListener.java
        ├── ALexer.java
        ├── ALexer.tokens
        ├── AListener.java
        └── AParser.java
```

Finally, if we don't specify the output directory, it paid attention to the relative path specified on the input grammar:

```bash
$ a4.7 src/pkg/A.g4
$ tree
.
├── B.g4
└── src
    └── pkg
        ├── A.g4
        ├── A.tokens
        ├── ABaseListener.java
        ├── ALexer.java
        ├── ALexer.tokens
        ├── AListener.java
        └── AParser.java
```

### Example for the output directory (4.7.1 with -Xexact-output-dir)

Now, the output directory is the exact directory where output is generated regardless of relative paths on the grammar

```bash
$ cd /tmp/parrt
$ a4.7.1 -Xexact-output-dir  -o /tmp/build src/pkg/A.g4
$ tree /tmp/build
/tmp/build
├── A.tokens
├── ABaseListener.java
├── ALexer.java
├── ALexer.tokens
├── AListener.java
└── AParser.java
```

If you use the package option, it still does not change where the output is generated if you use `-o`

```bash
$ a4.7.1 -Xexact-output-dir -package pkg -o /tmp/build src/pkg/A.g4
$ tree /tmp/build
/tmp/build
├── A.tokens
├── ABaseListener.java
├── ALexer.java
├── ALexer.tokens
├── AListener.java
└── AParser.java
```

4.7.1 does however add the package specification into the generated files:

```bash
$ grep package /tmp/build/A*.java
/tmp/build/ABaseListener.java:package pkg;
/tmp/build/ALexer.java:package pkg;
/tmp/build/AListener.java:package pkg;
/tmp/build/AParser.java:package pkg;
```

Compare this to 4.7:

```bash
$ a4.7 -package pkg -o /tmp/build src/pkg/A.g4
beast:/tmp/parrt $ tree /tmp/build
/tmp/build
└── src
    └── pkg
        ├── A.tokens
        ├── ABaseListener.java
        ├── ALexer.java
        ├── ALexer.tokens
        ├── AListener.java
        └── AParser.java
```

### Example of where it looks for tokens vocab

In 4.7, we got an error for an obvious case that should work:

```bash
$ cd /tmp/parrt
$ tree
.
└── src
    └── pkg
        ├── L.g4
        └── P.g4
$ a4.7 -o /tmp/build src/pkg/*.g4
error(160): P.g4:2:21: cannot find tokens file /tmp/build/L.tokens
warning(125): P.g4:3:4: implicit definition of token A in parser
```

In 4.7.1 it looks in the directory containing the grammars as well:

```bash
$ a4.7.1 -o /tmp/build src/pkg/*.g4
$ tree /tmp/build
/tmp/build
├── L.java
├── L.tokens
├── P.java
├── P.tokens
├── PBaseListener.java
├── PListener.java
└── src
    └── pkg
        ├── L.java
        └── L.tokens
```

<a id="targets.md"></a>
<a id="/doc/targets.md"></a>

# Runtime Libraries and Code Generation Targets

This page lists the available and upcoming ANTLR runtimes. Please note that you won't find here language specific code generators. This is because there is only one tool, written in Java, which is able to generate lexer and parser code for all targets, through command line options. The tool can be invoked from the command line, or any integration plugin to popular IDEs and build systems: Eclipse, IntelliJ, Visual Studio, Maven. So whatever your environment and target is, you should be able to run the tool and produce the code in the targeted language. As of writing, the available targets are the following:

* [Java](#/doc/java-target.md). The [ANTLR v4 book](http://pragprog.com/book/tpantlr2/the-definitive-antlr-4-reference) has a decent summary of the runtime library.  We have added a useful XPath feature since the book was printed that lets you select bits of parse trees. See [Runtime API](http://www.antlr.org/api/Java/index.html) and [Getting Started with ANTLR v4](#/doc/getting-started.md)
+ [java-target.md](#/doc/java-target.md)
+ [csharp-target.md](#/doc/csharp-target.md)
+ [python-target.md](#/doc/python-target.md)
+ [typescript-target.md](#/doc/typescript-target.md)
+ [javascript-target.md](#/doc/javascript-target.md)
+ [ace-javascript-target.md](#/doc/ace-javascript-target.md)
+ [go-target.md](#/doc/go-target.md)
+ [go-changes.md](#/doc/go-changes.md)
+ [cpp-target.md](#/doc/cpp-target.md)
+ [swift-target.md](#/doc/swift-target.md)
+ [php-target.md](#/doc/php-target.md)
+ [dart-target.md](#/doc/dart-target.md)

## Target feature parity

New features generally appear in the Java target and then migrate to the other targets, but these other targets don't always get updated in the same overall tool release. This section tries to identify features added to Java that have not been added to the other targets.

|Feature|Java|C&sharp;|Python3|JavaScript|Go|C++|Swift|PHP|Dart
|---|---|---|---|---|---|---|---|---|---|
|Ambiguous tree construction|4.5.1|-|-|-|-|-|-|-|-|


<a id="java-target.md"></a>
<a id="/doc/java-target.md"></a>

# Java

## Development environments

### Intellij

There is a very complete and useful plug-in for intellij 12-14, you can grab at the [download page](https://plugins.jetbrains.com/plugin/7358?pr=). Check the [plugin readme](https://github.com/antlr/intellij-plugin-v4) for feature set. Just go to the preferences and click on the "Install plug-in from disk..." button from this dialog box:

<img src="https://github.com/antlr/antlr4/raw/master/doc/images/idea-prefs.png">

Select the intellij-plugin-1.x.zip (or whatever version) file and hit okay or apply. It will ask you to restart the IDE. If you look at the plug-ins again, you will see:

<img src="https://github.com/antlr/antlr4/raw/master/doc/images/idea-prefs-after-install.png">

Also, I have prepared a [video](https://youtu.be/eW4WFgRtFeY) that will help you generate grammars and so on using ANTLR v4 in Intellij (w/o the plugin).

### Eclipse

Edgar Espina has created an [eclipse plugin for ANTLR v4](https://marketplace.eclipse.org/content/antlr-ide). Features: Advanced Syntax Highlighting, Automatic Code Generation (on save), Manual Code Generation (through External Tools menu), Code Formatter (Ctrl+Shift+F), Syntax Diagrams, Advanced Rule Navigation between files (F3), Quick fixes.

### NetBeans

Sam Harwell's [ANTLRWorks2](http://tunnelvisionlabs.com/products/demo/antlrworks) works also as a plug-in, not just a stand-alone tool built on top of NetBeans.

## Build systems

### ant

### mvn

*Maven Plugin Reference*

The reference pages for the latest version of the Maven plugin for ANTLR 4 can be found here:

[http://www.antlr.org/api/maven-plugin/latest/index.html](http://www.antlr.org/api/maven-plugin/latest/index.html)

*Walkthrough*

This section describes how to create a simple Antlr 4 project and build it using maven. We are going to use the ArrayInit.g4 example from chapter 3 of the book, and bring it under maven. We will need to rename files and modify them. We will conclude by building a portable stand alone application.

Generate the skeleton. To generate the maven skeleton, type these commands:

```bash
mkdir SimpleAntlrMavenProject
cd SimpleAntlrMavenProject
mvn archetype:generate -DgroupId=org.abcd.examples -DartifactId=array-example -Dpackage=org.abcd.examples.ArrayInit -Dversion=1.0
# Accept all the default values
cd array-example
```

Maven will ask a series of questions, simply accept the default answers by hitting enter.

Move into the directory created by maven:

```bash
cd array-example
```

We can use the find command to see the files created by maven:

```bash
$ find . -type f
./pom.xml
./src/test/java/org/abcd/examples/ArrayInit/AppTest.java
./src/main/java/org/abcd/examples/ArrayInit/App.java
```

We need to edit the pom.xml file extensively. The App.java will be renamed to ArrayInit.java and will contain the main ANTLR java program which we will download from the book examples. The AppTest.java file will be renamed ArrayInitTest.java but will remain the empty test as created by maven. We will also be adding the grammar file ArrayInit.g4 from the book examples in there.

Get the examples for the book and put them in the Downloads folder. To obtain the ArrayInit.g4 grammar from the book, simply download it:

```bash
pushd ~/Downloads
wget http://media.pragprog.com/titles/tpantlr2/code/tpantlr2-code.tgz
tar xvfz tpantlr2-code.tgz
popd
```

Copy the grammar to the maven project. The grammar file goes into a special folder under the src/ directory. The folder name must match the maven package name org.abcd.examples.ArrayInit.

```bash
mkdir -p src/main/antlr4/org/abcd/examples/ArrayInit
cp ~/Downloads/code/starter/ArrayInit.g4 src/main/antlr4/org/abcd/examples/ArrayInit
```

Copy the main program to the maven project. We replace the maven App.java file with the main java program from the book. In the book, that main program is called Test.java, we rename it to ArrayInit.java:

```bash
# Remove the maven file
rm ./src/main/java/org/abcd/examples/ArrayInit/App.java
# Copy and rename the example from the book
cp ~/Downloads/code/starter/Test.java ./src/main/java/org/abcd/examples/ArrayInit/ArrayInit.java
```

Spend a few minutes to read the main program. Notice that it reads the standard input stream. We need to remember this when we run the application.

Edit the ArrayInit.java file. We need to add a package declaration and to rename the class. Edit the file ./src/main/java/org/abcd/examples/ArrayInit/ArrayInit.java in your favorite editor. The head of the file should look like this when you are done:

```java
package org.abcd.examples.ArrayInit;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.*;
 
public class ArrayInit {
...
```

Edit the ArrayInitTest.java file. Maven creates a test file called AppTest.java, we need to rename it to match the name of our application:

```bash
pushd src/test/java/org/abcd/examples/ArrayInit
mv AppTest.java ArrayInitTest.java
sed 's/App/ArrayInit/g' ArrayInitTest.java >ArrayInitTest.java.tmp
mv ArrayInitTest.java.tmp ArrayInitTest.java
popd
```

Edit the pom.xml file. Now we need to extensively modify the pom.xml file. The final product looks like this:

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>org.abcd.examples</groupId>
  <artifactId>array-init</artifactId>
  <version>1.0</version>
  <packaging>jar</packaging>
  <name>array-init</name>
  <url>http://maven.apache.org</url>
  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
  </properties>
  <dependencies>
    <dependency>
      <groupId>org.antlr</groupId>
      <artifactId>antlr4-runtime</artifactId>
      <version>4.9.3</version>
    </dependency>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.13.1</version>
    </dependency>
  </dependencies>
  <build>
    <plugins>
      <!-- This plugin sets up maven to use Java 7 -->
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.1</version>
        <configuration>
          <source>1.8</source>
          <target>1.8</target>
        </configuration>
      </plugin>
      <!-- Plugin to compile the g4 files ahead of the java files
           See https://github.com/antlr/antlr4/blob/master/antlr4-maven-plugin/src/site/apt/examples/simple.apt.vm
           Except that the grammar does not need to contain the package declaration as stated in the documentation (I do not know why)
           To use this plugin, type:
             mvn antlr4:antlr4
           In any case, Maven will invoke this plugin before the Java source is compiled
        -->
      <plugin>
        <groupId>org.antlr</groupId>
        <artifactId>antlr4-maven-plugin</artifactId>
        <version>4.9.3</version>
        <executions>
          <execution>
            <goals>
              <goal>antlr4</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
      <!-- plugin to create a self-contained portable package
           This allows us to execute our application like this:
           java -cp target/array-init-1.0-jar-with-dependencies.jar org.abcd.examples.ArrayInit.ArrayInit
         -->
      <plugin>
        <artifactId>maven-assembly-plugin</artifactId>
        <configuration>
          <descriptorRefs>
            <descriptorRef>jar-with-dependencies</descriptorRef>
          </descriptorRefs>
        </configuration>
        <executions>
          <execution>
            <id>simple-command</id>
            <phase>package</phase>
            <goals>
              <goal>attached</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>
</project>
```

This concludes the changes we had to make. We can look at the list of files we have with the find command:

```bash
$ find . -type f
./pom.xml
./src/test/java/org/abcd/examples/ArrayInit/ArrayInitTest.java
./src/main/antlr4/org/abcd/examples/ArrayInit/ArrayInit.g4
./src/main/java/org/abcd/examples/ArrayInit/ArrayInit.java
```

Building a stand alone application. With all the files now in place, we can ask maven to create a standalone application. The following command does this:

```bash
mvn package
```

Maven creates a self-contained jar file called target/array-init-1.0-jar-with-dependencies.jar. We can execute the jar file, but remember that it expects some input on the command line, which means the command will hang on the command line until we feed it some input:

```bash
java -cp target/array-init-1.0-jar-with-dependencies.jar org.abcd.examples.ArrayInit.ArrayInit
```

And let's feed it the following input:

```bash
{1,2,3}
^D
```

The ^D signals the end of the input to the standard input stream and gets the rest of the application going. You should see the following output:

```bash
(init { (value 1) , (value 2) , (value 3) })
```

You can also build a jar file without the dependencies, and execute it with a maven command instead:

```bash
mvn install
mvn exec:java -Dexec.mainClass=org.abcd.examples.ArrayInit.ArrayInit
{1,2,3}
^D
```

<a id="csharp-target.md"></a>
<a id="/doc/csharp-target.md"></a>

# C&sharp;

## Which frameworks are supported?

The C# runtime is CLS compliant, and only requires a corresponding 3.5 .Net framework.

In practice, the runtime has been extensively tested against:

* Microsoft .Net 3.5 framework
* Mono .Net 3.5 framework

No issue was found, so you should find that the runtime works pretty much against any recent .Net framework.

## How do I get started?

You will find full instructions on the [Git repo page for ANTLR C# runtime](https://github.com/antlr/antlr4/tree/master/runtime/CSharp).
 
## How do I use the runtime from my project?

(i.e., How do I run the generated lexer and/or parser?)

Let's suppose that your grammar is named `MyGrammar`. The tool will generate for you the following files:

*   MyGrammarLexer.cs
*   MyGrammarParser.cs
*   MyGrammarListener.cs (if you have not activated the -no-listener option)
*   MyGrammarBaseListener.cs (if you have not activated the -no-listener option)
*   MyGrammarVisitor.cs (if you have activated the -visitor option)
*   MyGrammarBaseVisitor.cs (if you have activated the -visitor option)

Now a fully functioning code might look like the following for start rule `StartRule`:

```csharp
using Antlr4.Runtime;
using Antlr4.Runtime.Tree;
     
public void MyParseMethod() {
      String input = "your text to parse here";
      ICharStream stream = CharStreams.fromString(input);
      ITokenSource lexer = new MyGrammarLexer(stream);
      ITokenStream tokens = new CommonTokenStream(lexer);
      MyGrammarParser parser = new MyGrammarParser(tokens);
      IParseTree tree = parser.StartRule();
}
```

This program will work. But it won't be useful unless you do one of the following:

* you visit the parse tree using a custom listener
* you visit the parse tree using a custom visitor
* your grammar comprises production code (like AntLR3)

(please note that production code is target specific, so you can't have multi target grammars that include production code)
 
## How do I create and run a custom listener?

Let's suppose your MyGrammar grammar comprises 2 rules: "key" and "value".

The antlr4 tool will have generated the following listener (only partial code shown here): 

```csharp
interface IMyGrammarParserListener : IParseTreeListener {
      void EnterKey (MyGrammarParser.KeyContext context);
      void ExitKey (MyGrammarParser.KeyContext context);
      void EnterValue (MyGrammarParser.ValueContext context);
      void ExitValue (MyGrammarParser.ValueContext context);
}
```
 
In order to provide custom behavior, you might want to create the following class:
 
```csharp
class KeyPrinter : MyGrammarBaseListener {
    // override default listener behavior
    void ExitKey (MyGrammarParser.KeyContext context) {
        Console.WriteLine("Oh, a key!");
    }
}
```
   
In order to execute this listener, you would simply add the following lines to the above code:
 
 
```csharp
...
IParseTree tree = parser.StartRule() - only repeated here for reference
KeyPrinter printer = new KeyPrinter();
ParseTreeWalker.Default.Walk(printer, tree);
```
        
Further information can be found from The Definitive ANTLR Reference book.

The C# implementation of ANTLR is as close as possible to the Java one, so you shouldn't find it difficult to adapt the examples for C#. See also [Sam Harwell's alternative C# target](https://github.com/tunnelvisionlabs/antlr4cs)


<a id="python-target.md"></a>
<a id="/doc/python-target.md"></a>

# Python 3

## Requirements

You will need to install Python and Pip, version 3.6 or better.
See https://www.python.org/downloads/
and https://www.geeksforgeeks.org/how-to-install-pip-on-windows/.

## A simple example targeting Python3

An example of a parser for the Python3 target consists of the following files.
* An Antlr4 grammar, e.g., Expr.g4:
    ```antlr
    grammar Expr;
    start_ : expr (';' expr)* EOF;
    expr : atom | ('+' | '-') expr | expr '**' expr | expr ('*' | '/') expr | expr ('+' | '-') expr | '(' expr ')' | atom ;
    atom : INT ;
    INT : [0-9]+ ;
    WS : [ \t\n\r]+ -> skip ;
    ```
* Driver.py:
The driver code opens a file, creates a lexer, token stream,
and parser, then calls the parser.
    ```python
    import sys
    from antlr4 import *
    from ExprLexer import ExprLexer
    from ExprParser import ExprParser
    from VisitorInterp import VisitorInterp

    def main(argv):
        input_stream = FileStream(argv[1])
        lexer = ExprLexer(input_stream)
        stream = CommonTokenStream(lexer)
        parser = ExprParser(stream)
        tree = parser.start_()

    if __name__ == '__main__':
        main(sys.argv)
    ```
* requirements.txt:
This file contains a list of the
required packages for the program. Required
packages are downloaded by `pip`. The file
must include a reference to the Antlr Python3 runtime.
    ```
    antlr4-python3-runtime==4.13.0
    ```
* A build script, e.g., build.sh:
You should provide a script that builds the program.
    ```
    pip install -r requirements.txt
    antlr4 -Dlanguage=Python3 Expr.g4
    ```
_It is vital that the versions for the
Antlr tool used to generate the parser
and the Antlr Python3 runtime match.
E.g., 4.13.0. Using build files will help
eliminate common errors from happening._

_For a list of antlr4 tool options, please visit [ANTLR Tool Command Line Options](https://github.com/antlr/antlr4/blob/master/doc/tool-options.md)._
* Input, e.g., input.txt:
    ```
    -(1 + 2)/3;
    1;
    2+3;
    8*9
    ```
* A run script, which runs your program.
    ```
    python Driver.py input.txt
    ```

## Parse tree traversal

Tree traversal is used to implement
[static](https://en.wikipedia.org/wiki/Static_program_analysis) or [dynamic](https://en.wikipedia.org/wiki/Dynamic_program_analysis)
program analysis.
Antlr generates two types of tree traversals: visitors and listeners.

Understanding when to choose a visitor versus a listener is a good idea.
For further information, see https://tomassetti.me/listeners-and-visitors/.

A visitor is the best choice when computing only a single [synthesized attribute](https://en.wikipedia.org/wiki/Attribute_grammar#Synthesized_attributes)
or when you want to control the order of parse tree nodes visited.
Alternatively, a listener is the best choice when computing both synthesized
and [inherited attributes](https://en.wikipedia.org/wiki/Attribute_grammar#Inherited_attributes).

In many situations, they are interchangeable.

### Visitors

Antlr visitors generally implement a post-order tree walk. If you write
`visit...` methods, the method must contain code to visit the children
in the order you want. For a post-order tree walk, visit the children first.

To implement a visitor, add the `-visitor` option to the `antlr4` command.
Create a class that inherits from the generated visitor,
then add `visit` methods that implement the analysis. Your driver code
should call the `visit()` method for the root of the parse tree.

For example, the following code implements an expression evaluator for the Expr.g4 grammar using a visitor.

* Driver.py:
    ```python
    import sys
    from antlr4 import *
    from ExprLexer import ExprLexer
    from ExprParser import ExprParser
    from VisitorInterp import VisitorInterp

    def main(argv):
        input_stream = FileStream(argv[1])
        lexer = ExprLexer(input_stream)
        stream = CommonTokenStream(lexer)
        parser = ExprParser(stream)
        tree = parser.start_()
        if parser.getNumberOfSyntaxErrors() > 0:
            print("syntax errors")
        else:
            vinterp = VisitorInterp()
            vinterp.visit(tree)

    if __name__ == '__main__':
        main(sys.argv)
    ```
* VisitorInterp.py:
    ```python
    import sys
    from antlr4 import *
    from ExprParser import ExprParser
    from ExprVisitor import ExprVisitor

    class VisitorInterp(ExprVisitor):
        def visitAtom(self, ctx:ExprParser.AtomContext):
            return int(ctx.getText())

        def visitExpr(self, ctx:ExprParser.ExprContext):
            if ctx.getChildCount() == 3:
                if ctx.getChild(0).getText() == "(":
                    return self.visit(ctx.getChild(1))
                op = ctx.getChild(1).getText()
                v1 = self.visit(ctx.getChild(0))
                v2 = self.visit(ctx.getChild(2))
                if op == "+":
                    return v1 + v2
                if op == "-":
                    return v1 - v2
                if op == "*":
                    return v1 * v2
                if op == "/":
                    return v1 / v2
                return 0
            if ctx.getChildCount() == 2:
                opc = ctx.getChild(0).getText()
                if opc == "+":
                    return self.visit(ctx.getChild(1))
                if opc == "-":
                    return - self.visit(ctx.getChild(1))
                return 0
            if ctx.getChildCount() == 1:
                return self.visit(ctx.getChild(0))
            return 0

        def visitStart_(self, ctx:ExprParser.Start_Context):
            for i in range(0, ctx.getChildCount(), 2):
                print(self.visit(ctx.getChild(i)))
            return 0
    ```

### Listeners

Antlr listeners perform an LR tree traversal. `enter` and `exit` methods are
called during the tranversal. A parse tree node is visited twice, first for
the `enter` method, then the `exit` method after all children have been walked.

To implement a listener, add the `-listener` option to the `antlr4` command.
Add a class that inherits from the generated listener
with code that implements the analysis.

The following example implements an expression evaluator using a listener.

* Driver.py:
    ```python
    import sys
    from antlr4 import *
    from ExprLexer import ExprLexer
    from ExprParser import ExprParser
    from ListenerInterp import ListenerInterp

    def main(argv):
        input_stream = FileStream(argv[1])
        lexer = ExprLexer(input_stream)
        stream = CommonTokenStream(lexer)
        parser = ExprParser(stream)
        tree = parser.start_()
        if parser.getNumberOfSyntaxErrors() > 0:
            print("syntax errors")
        else:
            linterp = ListenerInterp()
            walker = ParseTreeWalker()
            walker.walk(linterp, tree)

    if __name__ == '__main__':
        main(sys.argv)
    ```
    * ListenerInterp.py:
    ```python
    import sys
    from antlr4 import *
    from ExprParser import ExprParser
    from ExprListener import ExprListener

    class ListenerInterp(ExprListener):
        def __init__(self):
            self.result = {}

        def exitAtom(self, ctx:ExprParser.AtomContext):
            self.result[ctx] = int(ctx.getText())

        def exitExpr(self, ctx:ExprParser.ExprContext):
            if ctx.getChildCount() == 3:
                if ctx.getChild(0).getText() == "(":
                    self.result[ctx] = self.result[ctx.getChild(1)]
                else:
                    opc = ctx.getChild(1).getText()
                    v1 = self.result[ctx.getChild(0)]
                    v2 = self.result[ctx.getChild(2)]
                    if opc == "+":
                        self.result[ctx] = v1 + v2
                    elif opc == "-":
                        self.result[ctx] = v1 - v2
                    elif opc == "*":
                        self.result[ctx] = v1 * v2
                    elif opc == "/":
                        self.result[ctx] = v1 / v2
                    else:
                        ctx.result[ctx] = 0
            elif ctx.getChildCount() == 2:
                opc = ctx.getChild(0).getText()
                if opc == "+":
                    v = self.result[ctx.getChild(1)]
                    self.result[ctx] = v
                elif opc == "-":
                    v = self.result[ctx.getChild(1)]
                    self.result[ctx] = - v
            elif ctx.getChildCount() == 1:
                self.result[ctx] = self.result[ctx.getChild(0)]

        def exitStart_(self, ctx:ExprParser.Start_Context):
            for i in range(0, ctx.getChildCount(), 2):
                print(self.result[ctx.getChild(i)])
    ```

Further information can be found from the ANTLR 4 definitive guide.

## Examples

The examples from the ANTLR 4 book converted to Python are [here](https://github.com/jszheng/py3antlr4book).

There are many examples of grammars that target the Python3 target in the
[grammars-v4 Github repository](https://github.com/antlr/grammars-v4).

<a id="typescript-target.md"></a>
<a id="/doc/typescript-target.md"></a>

# TypeScript

Antlr4 TypeScript runtime uses the JavaScript runtime and adds type files to it.
This guarantees the same behaviour and performance across both target languages.
Generated lexers, parsers, listeners and visitors are generated in TypeScript.

The runtime is built using TypeScript v4.8.3, node 16.17 and webpack 5.66.
It may work with older versions but they have not been tested and they will not be supported.


## How to create a TypeScript lexer or parser?

This is pretty much the same as creating a Java lexer or parser, except you need to specify the language target, for example:

```bash
$ antlr4 -Dlanguage=TypeScript MyGrammar.g4
```

For a full list of antlr4 tool options, please visit the [tool documentation page](#/doc/tool-options.md).

## Where can I get the runtime?

Once you've generated the lexer and/or parser code, you need to download the runtime from [npm](https://www.npmjs.com/package/antlr4).

We will not document here how to refer to the runtime from your project, since this would differ a lot depending on your project type and IDE. 

## How do I get the runtime in my browser?

The runtime is webpacked and sits in the dist folder. A .map file is also provided.

## How do I run the generated lexer and/or parser?

Let's suppose that your grammar is named, as above, "MyGrammar". Let's suppose this parser comprises a rule named "MyStartRule". The tool will have generated for you the following files:

*   MyGrammarLexer.ts
*   MyGrammarParser.ts
*   MyGrammarListener.ts (if you have not activated the -no-listener option)
*   MyGrammarVisitor.ts (if you have activated the -visitor option)
   
There is no listener or visitor interface generated, instead the generated listener and visitor class methods are implemented using lambdas.

Now a fully functioning script might look like the following:

```typescript
import { CharStream, CommonTokenStream }  from 'antlr4';
import MyGrammarLexer from './MyGrammarLexer';
import MyGrammarParser from './MyGrammarParser';

const input = "your text to parse here"
const chars = new CharStream(input); // replace this with a FileStream as required
const lexer = new MyGrammarLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new MyGrammarParser(tokens);
const tree = parser.MyStartRule();

```

Tha above program will work. But it won't be useful unless you do one of the following:

* you visit the parse tree using a custom listener
* you visit the parse tree using a custom visitor
* your grammar contains production code (like AntLR3)
 
(please note that production code is target specific, so you can't have multi target grammars that include production code)
 
## How do I create and run a visitor?

You need to create a custom visitor and use it to visit the parse tree, as follows:
```typescript

import { ParserRuleContext } from 'antlr4';
import MyGrammarVisitor from './MyGrammarVisitor';

class CustomVisitor extends MyGrammarVisitor {

  visitChildren(ctx: ParserRuleContext) {
    if (!ctx) {
      return;
    }
    if (ctx.children) {
      return ctx.children.map(child => {
        if (child.children && child.children.length != 0) {
          return child.accept(this);
        } else {
          return child.getText();
        }
      });
    }
  }
}

tree.accept(new CustomVisitor());
````

## How do I create and run a custom listener?

You need to create a custom listener and use it to visit the parse tree, as follows:

```typescript

import { ParseTreeWalker } from 'antlr4';
import MyGrammarListener from './MyGrammarListener';

class MyTreeWalker extends MyGrammarListener {

    exitMyStartRule = (ctx: MyStartRuleContext) => {
        console.log("In MyStartRule");
    };
    
}

const walker = new MyTreeWalker();
ParseTreeWalker.DEFAULT.walk(walker, tree);

```

## How do I integrate my parser with ACE editor?

This specific task is described in this [dedicated page](#ace-javascript-target.md).
 
## How can I learn more about ANTLR?

Further information can be found from  "The definitive ANTLR 4 reference" book.

The TypeScript implementation of ANTLR is based on the JavaScript implementation, which is as close as possible to the Java one, so you shouldn't find it difficult to adapt the book's examples to TypeScript.

<a id="javascript-target.md"></a>
<a id="/doc/javascript-target.md"></a>

# JavaScript

## Which browsers are supported?

In theory, all browsers supporting ECMAScript 5.1.

In practice, this target has been extensively tested against:

* Firefox 34.0.5
* Safari 8.0.2
* Chrome 39.0.2171
* Explorer 11.0.3
 
The above tests were conducted using Selenium. No issue was found, so you should find that the runtime works pretty much against any recent JavaScript engine.

## Is NodeJS supported?

The runtime has also been extensively tested against Node.js 14 LTS. No issue was found.
NodeJS together with a packaging tool is now the preferred development path, developers are encouraged to follow it.

## What about modules?

Starting with version 8.1, Antlr4 JavaScript runtime follows esm semantics (see https://tc39.es/ecma262/#sec-modules for details)
Generated lexers, parsers, listeners and visitors also follow this new standard.
If you have used previous versions of the runtime, you will need to migrate and make your parser a module.

## How to create a JavaScript lexer or parser?

This is pretty much the same as creating a Java lexer or parser, except you need to specify the language target, for example:

```bash
$ antlr4 -Dlanguage=JavaScript MyGrammar.g4
```

For a full list of antlr4 tool options, please visit the [tool documentation page](#/doc/tool-options.md).

## Where can I get the runtime?

Once you've generated the lexer and/or parser code, you need to download the runtime.

The JavaScript runtime is [available from npm](https://www.npmjs.com/package/antlr4).

We will not document here how to refer to the runtime from your project, since this would differ a lot depending on your project type and IDE. 

## How do I get the runtime in my browser?

The runtime is quite big and is currently maintained in the form of around 50 scripts, which follow the same structure as the runtimes for other targets (Java, C#, Python...).

This structure is key in keeping code maintainable and consistent across targets.

However, it would be a bit of a problem when it comes to get it into a browser. Nobody wants to write 50 times:

```
<script src='lib/myscript.js'>
```

To avoid having doing this, the preferred approach is to bundle antlr4 with your parser code, using webpack.

You can get [information on webpack here](https://webpack.github.io).

The steps to create your parsing code are the following:
 - generate your lexer, parser, listener and visitor using the antlr tool
 - write your parse tree handling code by providing your custom listener or visitor, and associated code, using 'require' to load antlr.
 - create an index.js file with the entry point to your parsing code (or several if required).
 - test your parsing logic thoroughly using node.js
 
You are now ready to bundle your parsing code as follows:
 - following webpack specs, create a webpack.config file
 - For Webpack version 5,
   - in the `webpack.config` file, exclude node.js only modules using: `resolve: { fallback: { fs: false } }`
 - For older versions of Webpack,
   - in the `webpack.config` file, exclude node.js only modules using: `node: { module: "empty", net: "empty", fs: "empty" }`
 - from the cmd line, navigate to the directory containing webpack.config and type: webpack
 
This will produce a single js file containing all your parsing code. Easy to include in your web pages!

## How do I run the generated lexer and/or parser?

Let's suppose that your grammar is named, as above, "MyGrammar". Let's suppose this parser comprises a rule named "MyStartRule". The tool will have generated for you the following files:

*   MyGrammarLexer.js
*   MyGrammarParser.js
*   MyGrammarListener.js (if you have not activated the -no-listener option)
*   MyGrammarVisitor.js (if you have activated the -visitor option)
   
(Developers used to Java/C# ANTLR will notice that there is no base listener or visitor generated, this is because JavaScript having no support for interfaces, the generated listener and visitor are fully fledged classes)

Now a fully functioning script might look like the following:

```javascript
import antlr4 from 'antlr4';
import MyGrammarLexer from './MyGrammarLexer.js';
import MyGrammarParser from './MyGrammarParser.js';
import MyGrammarListener from './MyGrammarListener.js';

const input = "your text to parse here"
const chars = new antlr4.InputStream(input);
const lexer = new MyGrammarLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MyGrammarParser(tokens);
const tree = parser.MyStartRule();
```

This program will work. But it won't be useful unless you do one of the following:

* you visit the parse tree using a custom listener
* you visit the parse tree using a custom visitor
* your grammar comprises production code (like AntLR3)
 
(please note that production code is target specific, so you can't have multi target grammars that include production code)
 
## How do I create and run a visitor?

Suppose your grammar is named "Query", the parser comprises a rule named "MyQuery", and the tool has generated the following files for you:

*   QueryLexer.js
*   QueryParser.js
*   QueryListener.js (if you have not activated the -no-listener option)

```javascript
// test.js
import antlr4 from 'antlr4';
import MyGrammarLexer from './QueryLexer.js';
import MyGrammarParser from './QueryParser.js';
import MyGrammarListener from './QueryListener.js';

const input = "field = 123 AND items in (1,2,3)"
const chars = new antlr4.InputStream(input);
const lexer = new MyGrammarLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MyGrammarParser(tokens);
const tree = parser.MyQuery();

class Visitor {
  visitChildren(ctx) {
    if (!ctx) {
      return;
    }

    if (ctx.children) {
      return ctx.children.map(child => {
        if (child.children && child.children.length != 0) {
          return child.accept(this);
        } else {
          return child.getText();
        }
      });
    }
  }
}

tree.accept(new Visitor());
````

## How do I create and run a custom listener?

Let's suppose your MyGrammar grammar comprises 2 rules: "key" and "value". The antlr4 tool will have generated the following listener: 

```javascript
class MyGrammarListener extends ParseTreeListener {
    constructor() {
        super();
    }
   
    enterKey(ctx) {}
    exitKey(ctx) {}
    enterValue(ctx) {}
    exitValue(ctx) {}
}
```

In order to provide custom behavior, you might want to create the following class:

```javascript
class KeyPrinter extends MyGrammarListener {
    // override default listener behavior
    exitKey(ctx) {
        console.log("Oh, a key!");
    }
}
```

In order to execute this listener, you would simply add the following lines to the above code:

```javascript
...
tree = parser.MyStartRule() // assumes grammar "MyGrammar" has rule "MyStartRule"
const printer = new KeyPrinter();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);
```

## What about TypeScript?

We have a [TypeScript target](#typescript-target.md), based on the JavaScript target.

## How do I integrate my parser with ACE editor?

This specific task is described in this [dedicated page](#ace-javascript-target.md).
 
## How can I learn more about ANTLR?

Further information can be found from  "The definitive ANTLR 4 reference" book.

The JavaScript implementation of ANTLR is as close as possible to the Java one, so you shouldn't find it difficult to adapt the book's examples to JavaScript.

<a id="ace-javascript-target.md"></a>
<a id="/doc/ace-javascript-target.md"></a>

# Integrating ANTLR JavaScript parsers with ACE editor

Having the ability to parse code other than JavaScript is great, but nowadays users expect to be able to edit code with nice edit features such as keyword highlighting, indentation and brace matching, and advanced ones such as syntax checking.

I have been through the process of integrating an ANTLR parser with ACE, the dominant code editor for web based code editing. Information about ACE can be found on their web site. 

This page describes my experience, and humbly aims to help you get started. It is not however a reference guide, and no support is provided.

## Architecture

The ACE editor is organized as follows

1. The editor itself is a <div> which once initialized comprises a number of elements. This UI element is responsible for the display, and the generation of edit events.
1. The editor relies on a Session, which manages events and configuration.
1. The code itself is stored in a Document. Any insertion or deletion of text is reflected in the Document.
1. Keyword highlighting, indentation and brace matching are delegated to a mode. There is no direct equivalent of an ACE mode in ANTLR. While keywords are the equivalent of ANTLR lexer tokens, indentation and brace matching are edit tasks, not parsing ones. A given ACE editor can only have one mode, which corresponds to the language being edited. There is no need for ANTLR integration to support keyword highlighting, indentation and brace matching.
1. Syntax checking is delegated to a worker. This is where ANTLR integration is needed. If syntax checking is enabled, ACE asks the mode to create a worker. In JavaScript, workers run in complete isolation i.e. they don't share code or variables with other workers, or with the HTML page itself.
1. The below diagram describes how the whole system works. In green are the components *you* need to provide. You'll notice that there is no need to load ANTLR in the HTML page itself. You'll also notice that ACE maintains a document in each thread. This is done through low level events sent by the ACE session to the worker which describe the delta. Once applied to the worker document, a high level event is triggered, which is easy to handle since at this point the worker document is a perfect copy of the UI document.  

```
    ┌─────────────────────────────────┐     ┌───────────────────────────┐
    │                                 │     │                           │
    │   UI Thread                     │     │    Worker Thread          │
    │                                 │     │                           │
    │ ┌─────────┐┌─────────┐ ┌──────┐ │     │ ┌──────────┐  ┌─────────┐ │
    │ │   ACE   ││   ACE   │ │ Your │ │     │ │   Your   │  │  Your   │ │
    │ │  Editor ││ Session │ │ mode │ │◄───►│ │  worker  │  │  parser │ │
    │ └─────────┘└─────────┘ └──────┘ │     │ └──────────┘  └─────────┘ │
    │ ┌─────────┐┌──────────┐         │     │ ┌──────────┐  ┌─────────┐ │
    │ │         ││   ACE    │         │     │ │   ACE    │  │         │ │
    │ │  HTML   ││ Document │         │     │ │ Document │  │  ANTLR  │ │
    │ └─────────┘└──────────┘         │     │ └──────────┘  └─────────┘ │
    │                                 │     │                           │
    └─────────────────────────────────┘     └───────────────────────────┘
```

<!-- <img src="https://github.com/antlr/antlr4/raw/master/doc/images/ACE-Architecture.001.png"> -->


## Step-by-step guide

The first thing to do is to create an editor in your html page. This is thoroughly described in the ACE documentation, so we'll just sum it up here:

```xml
<script src="../js/ace/ace.js" type="text/javascript" charset="utf-8"></script>
<script>
    var editor = ace.edit("editor");
</script>
```

This should give you a working editor. You may want to control its sizing using CSS. I personally load the editor in an iframe and set its style to position: absolute, top: 0, left: 0 etc... but I'm sure you know better than me how to achieve results. 

The second thing to do is to configure the ACE editor to use your mode i.e. language configuration. A good place to start is to inherit from the built-in TextMode. The following is a very simple example, which only caters for comments, literals, and a limited subset of separators and keywords :

```javascript
ace.define('ace/mode/my-mode',["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/text_highlight_rules", "ace/worker/worker_client" ], function(require, exports, module) {
    var oop = require("ace/lib/oop");
    var TextMode = require("ace/mode/text").Mode;
    var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;

    var MyHighlightRules = function() {
        var keywordMapper = this.createKeywordMapper({
            "keyword.control": "if|then|else",
            "keyword.operator": "and|or|not",
            "keyword.other": "class",
            "storage.type": "int|float|text",
            "storage.modifier": "private|public",
            "support.function": "print|sort",
            "constant.language": "true|false"
  }, "identifier");
        this.$rules = {
            "start": [
                { token : "comment", regex : "//" },
                { token : "string",  regex : '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]' },
                { token : "constant.numeric", regex : "0[xX][0-9a-fA-F]+\\b" },
                { token : "constant.numeric", regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b" },
                { token : "keyword.operator", regex : "!|%|\\\\|/|\\*|\\-|\\+|~=|==|<>|!=|<=|>=|=|<|>|&&|\\|\\|" },
                { token : "punctuation.operator", regex : "\\?|\\:|\\,|\\;|\\." },
                { token : "paren.lparen", regex : "[[({]" },
                { token : "paren.rparen", regex : "[\\])}]" },
                { token : "text", regex : "\\s+" },
                { token: keywordMapper, regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b" }
            ]
        };
    };
    oop.inherits(MyHighlightRules, TextHighlightRules);

    var MyMode = function() {
        this.HighlightRules = MyHighlightRules;
    };
    oop.inherits(MyMode, TextMode);

    (function() {

        this.$id = "ace/mode/my-mode";

    }).call(MyMode.prototype);

    exports.Mode = MyMode;
});
```

Now if you store the above in a file called "my-mode.js", setting the ACE Editor becomes straightforward:

```xml
<script src="../js/ace/ace.js" type="text/javascript" charset="utf-8"></script>
<script src="../js/my-mode.js" type="text/javascript" charset="utf-8"></script>
<script>
    var editor = ace.edit("editor");
    editor.getSession().setMode("ace/mode/my-mode");
</script>
```

At this point you should have a working editor, able to highlight keywords. You may wonder why you need to set the tokens when you have already done so in your ANTLR lexer grammar. First, ACE expects a classification (control, operator, type...) which does not exist in ANTLR. Second, there is no need for ANTLR to achieve this, since ACE comes with its own lexer.

Ok, now that we have a working editor comes the time where we need syntax validation. This is where the worker comes in the picture.

Creating the worker is the responsibility of the mode you provide. So you need to enhance it with something like the following:
 
```javascript
var WorkerClient = require("ace/worker/worker_client").WorkerClient;
this.createWorker = function(session) {
    this.$worker = new WorkerClient(["ace"], "ace/worker/my-worker", "MyWorker", "../js/my-worker.js");
    this.$worker.attachToDocument(session.getDocument());

    this.$worker.on("errors", function(e) {
        session.setAnnotations(e.data);
    });

    this.$worker.on("annotate", function(e) {
        session.setAnnotations(e.data);
    });

    this.$worker.on("terminate", function() {
        session.clearAnnotations();
    });

    return this.$worker;

};
```

The above code needs to be placed in the existing worker, after: 

```javascript
this.$id = "ace/mode/my-mode";
```

Please note that the mode code runs on the UI side, not the worker side. The event handlers here are for events sent by the worker, not to the worker.

Obviously the above won't work out of the box, because you need to provide the "my-worker.js" file.

Creating a worker from scratch is not something I've tried. Simply put, your worker needs to handle all messages sent by ACE using the WorkerClient created by the mode. This is not a simple task, and is better delegated to existing ACE code, so we can focus on tasks specific to our language.

What I did is I started from "mode-json.js", a rather simple worker which comes with ACE, stripped out all JSON validation related stuff out of it, and saved the remaining code in a file name "worker-base.js" which you can find [here](resources/worker-base.js). Once this done, I was able to create a simple worker, as follows:

```javascript
importScripts("worker-base.js");
ace.define('ace/worker/my-worker',["require","exports","module","ace/lib/oop","ace/worker/mirror"], function(require, exports, module) {
    "use strict";

    var oop = require("ace/lib/oop");
    var Mirror = require("ace/worker/mirror").Mirror;

    var MyWorker = function(sender) {
        Mirror.call(this, sender);
        this.setTimeout(200);
        this.$dialect = null;
    };

    oop.inherits(MyWorker, Mirror);

    (function() {

        this.onUpdate = function() {
            var value = this.doc.getValue();
            var annotations = validate(value);
            this.sender.emit("annotate", annotations);
        };

    }).call(MyWorker.prototype);

    exports.MyWorker = MyWorker;
});

var validate = function(input) {
    return [ { row: 0, column: 0, text: "MyMode says Hello!", type: "error" } ];
};
```

At this point, you should have an editor which displays an error icon next to the first line. When you hover over the error icon, it should display: MyMode says Hello!. Is that not a friendly worker? Yum.

What remains to be done is have our validate function actually validate the input. Finally ANTLR comes in the picture!

To start with, let's load ANTLR and your parser, listener etc.. 

The preferred approach for loading parser code is to bundle your parser, [as described here](#javascript-target.md).
You can then load it as part of the importScripts instruction at the start of your worker code.

Another approach is to load it using 'require'. Easy, since you could write:

```js
var antlr4 = require('antlr4/index');
```

This may work, but it's actually unreliable. The reason is that the 'require' function that comes with ACE uses a different syntax than the 'require' function used by ANTLR, which follows the NodeJS 'require' convention. 
So we need to bring in a NodeJS compatible 'require' function that conforms to the NodeJS syntax. I personally use one that comes from Torben Haase's Honey project, which you can find in li/require.js. 
But hey, now we're going to have 2 'require' functions not compatible with each other! Indeed, this is why you need to take special care, as follows:

```js
// load nodejs compatible require
var ace_require = require;
require = undefined;
var Honey = { 'requirePath': ['..'] }; // walk up to js folder, see Honey docs
importScripts("../lib/require.js");
var antlr4_require = require;
require = ace_require;
```
Now it's safe to load antlr and the parsers generated for your language. 
Assuming that your language files (generated or hand-built) are in a folder with an index.js file that calls require for each file, your parser loading code can be as simple as follows:
```js
// load antlr4 and myLanguage
var antlr4, mylanguage;
try {
    require = antlr4_require;
    antlr4 = require('antlr4/index');
    mylanguage = require('mylanguage/index');
} finally {
    require = ace_require;
}
```
Please note the try-finally construct. ANTLR uses 'require' synchronously so it's perfectly safe to ignore the ACE 'require' while running ANTLR code. ACE itself does not guarantee synchronous execution, so you are much safer always switching 'require' back to 'ace_require'.

Now detecting deep syntax errors in your code is a task for your ANTLR listener or visitor or whatever piece of code you've delegated this to. We're not going to describe this here, since it would require some knowledge of your language. However, detecting grammar syntax errors is something ANTLR does beautifully (isn't that why you went for ANTLR in the first place?). So what we will illustrate here is how to report grammar syntax errors. I have no doubt that from there, you will be able to extend the validator to suit your specific needs.
Whenever ANTLR encounters an unexpected token, it fires an error. By default, the error is routed to an error listener which simply writes to the console.
What we need to do is replace this listener by our own listener, se we can route errors to the ACE editor. First, let's create such a listener:
```js
// class for gathering errors and posting them to ACE editor
var AnnotatingErrorListener = function(annotations) {
    antlr4.error.ErrorListener.call(this);
    this.annotations = annotations;
    return this;
};

AnnotatingErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
AnnotatingErrorListener.prototype.constructor = AnnotatingErrorListener;

AnnotatingErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
    this.annotations.push({
        row: line - 1,
        column: column,
        text: msg,
        type: "error"
 });
};
```
With this, all that remains to be done is plug the listener in when we parse the code. Here is how I do it:
```js
var validate = function(input) {
    var stream = CharStreams.fromString(input);
    var lexer = new mylanguage.MyLexer(stream);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new mylanguage.MyParser(tokens);
    var annotations = [];
    var listener = new AnnotatingErrorListener(annotations)
    parser.removeErrorListeners();
    parser.addErrorListener(listener);
    parser.parseMyRule();
    return annotations;
};
```
You know what? That's it! You now have an ACE editor that does syntax validation using ANTLR! I hope you find this useful, and simple enough to get started.
Now wait, hey! How do you debug this? Well, as usual, using Chrome, since no other browser is able to debug worker code. What a shame...

<a id="go-target.md"></a>
<a id="/doc/go-target.md"></a>

# ANTLR4 Language Target, Runtime for Go

### Changes from ANTLR 4.12.0

Please see [Changes in ANTLR Go runtimes](#go-changes.md), but in summary:
  - The Go runtime is now stored in the repo `antlr4-go/antlr` - change your import, remove the old location from
    `go.mod` and use `go get github.com/antlr4-go/antlr`
  - There are some new `@actions` for adding to the generated import statements and recognizer structure
  - The recognizer rules are no longer called via an interface, for performance reasons
  - Memory usage improvements
  - Performance improvements
  - Documentation in true Go format
  - Git tags now work correctly with go tools

### Removal of non v4 code

Prior to the  release of the v4 tagged runtime, the source code for the Go runtime module existed at
`runtime/Go/antlr`, which is the pre-v4 version of the code, and also under `runtime/Go/antlr/v4`. If your project
was not using modules, you could merely sync to the latest hash in the master branch and use the code. This has changed.

As of the current release, the source code for the Go runtime module has been moved to its own repo in its own
GitHub organization. As of now, you can still use the code without modules, but you must use the code
in the repo at https://github.com/antlr4-go/antlr instead of the code in the main ANTLR repo.

This is for historic reasons as the code was originally written before modules were a
thing, and the go runtime source was - and the maintainer's version still is - a part of the monorepo 
that is `antlr/antlr4/...`.

Note that I am unable to properly deprecate the go.mod in the non-V4 directory, for hte same reason that I
cannot use tag the v4 module at this depth in the source tree. 

We strongly advise you to use modules, though it is not required. See below for more information.

ANTLR Go Maintainer: [Jim Idle](https://github.com/jimidle) - Email:  [jimi@idle.ws](mailto:jimi@idle.ws)

### First steps

#### 1. Install ANTLR4

See: [The getting started guide](#getting-started.md).

#### 2. Get the Go ANTLR runtime

Each target language for ANTLR has a runtime package for running a recognizer generated by ANTLR4. 
The runtime provides a common set of tools for using your parser/lexer. Note that if you have existing projects and have 
yet to replace the `v1.x.x` modules with the `v4` modules, then you can skip ahead to the section *Upgrading to v4
from earlier versions*

The Go runtime uses modules and has a version path of `/v4` to stay in sync with the runtime versions of all the other 
runtimes and the tool itself. 

Setup is the same as any other module based project:

```bash
$ cd mymodproject
$ go mod init mymodproject
```

After which, you can use go get, to get the latest release version of the ANTLR v4 runtime using:

```bash
go get github.com/antlr4-go/antlr
```

If your project was already using the v4 runtime from the main ANTLR repo, then you can upgrade to the latest release
by removing the `github.com/antlr/antlr4/runtime/Go/antlr/v4` reference in your module, and changing the associated
import in your project code. The following script may be useful in changing your imports:

```shell
find . -type f \
    -name '*.go' \
    -exec sed -i -e 's,github.com/antlr/antlr4/runtime/Go/antlr/v4,github.com/antlr4-go/antlr/v4,g' {} \;
```
Note that the import package still imports with the final path as `antlr`, so only the import statement itself needs to
change.

If you are already using the repo and import `github.com/antlr4-go/antlr/v4` then you can upgrade to the latest version
using the standard.

```shell
go get -u github.com/antlr4-go/antlr
```

If you have not yet upgraded existing projects to the `/v4` module path, consult the section *Upgrading to v4
from earlier versions*

The ANTLR runtime has only one external transient dependency, and that is part of the go system itself:

```
golang.org/x/exp
```

A complete list of releases can be found on [the release page](https://github.com/antlr/antlr4/releases). The Go 
runtime will be tagged using standard Go tags, so release 4.13.2 in the `antlr4-go/antlr` repo, will be tagged with 
`v4.13.2` and go get will pick that up from the ANTLR repo.

#### 3. Configuring `go generate` in your project

In order to promote the use of repeatable builds, it is often useful to add the latest tool jar to your project's
repo and configure a `generate.sh` and `generate.go` file. You can of course globally alias the java command required to run the
tool. Your own CI and dev environment will guide you.

Here is how you can configure `go generate` for your project, assuming that you follow the general recommendation to
place the ANTLR grammar files in their own package in your project structure. Here is a general template as a starting point:

```
	.
	├── myproject
	├── parser
	│     ├── mygrammar.g4
	│     ├── antlr-4.13.2-complete.jar
	│     ├── generate.go
	│     └── generate.sh
	├── parsing  # Generated code goes here
	│     └── error_listeners.go
	├── go.mod
	├── go.sum
	├── main.go
	└── main_test.go
```

Make sure that the package statement in your grammar file(s) reflects the go package the go code will be generated in.
The `generate.go` file then looks like this:

```golang
	package parser

	//go:generate ./generate.sh
```

And the `generate.sh` file will look similar to this:

```shell
	#!/bin/sh

	alias antlr4='java -Xmx500M -cp "./antlr-4.13.2-complete.jar:$CLASSPATH" org.antlr.v4.Tool'
	antlr4 -Dlanguage=Go -no-visitor -package parsing *.g4
```

From the command line at the root of your package - the location of the `go.mod` file -  you can then simply issue the command:

```shell
	go generate ./...
```

If you have not yet run a `go get`, you can now run `go mod tidy` and update your 

#### 4. Generate your parser manually

You use the ANTLR4 "tool" to generate a parser. These will reference the ANTLR runtime, installed above.

Suppose you're using a UNIX system and have set up an alias for the ANTLR4 tool as described in
[the getting started guide](#getting-started.md). 

To generate your go parser, you'll need to invoke:

```shell
    antlr4 -Dlanguage=Go MyGrammar.g4
```

For a full list of antlr4 tool options, please visit the [tool documentation page](#/doc/tool-options.md).

### Upgrading to `/v4` from the default path

*NB: While switching to new module path would normally imply that the public interface for the runtime has changed, this is
not actually the case - you will not need to change your existing code to upgrade. The main point of the repo change is so
that git tagging works with the ANTLR Go runtime and the go tools.*

Prior to release v4.11.0 the Go runtime shipped with a module but the module had no version path. This meant that
the tags in the ANTLR repo did not work, as any tag above `v1` must refer to a matching module path. 
So the command `go get github.com/antlr/antlr4/runtime/Go/antlr` would just bring in
whatever was the `HEAD` of the master branch. While this *kind of* worked, it is obviously subject to problems and does
not fit properly with the idiomatic ways of Go.

As of v4.13.0 the runtime code exists in its own repo, `github.com/antlr4-go/antlr`, and is correctly tagged. 
However, this means you need to perform a few simple actions in order to upgrade to the `/v4` path. 

 - Firstly, make sure that you are using an ANTLR tool jar with a version number of 4.13.0 or greater.
 - Next you replace any mention of the old (default) path to ANTLR in your go source files.
 - If using modules, remove any existing reference to the ANTLR Go runtime
 - Now regenerate your grammar files either manually or using `go generate ./...` (see above)
 - Consider whether you can move to using modules in your project

A quick way to replace the original module path references is to use this script from your module's base directory:

```shell
find . -type f \
    -name '*.go' \
    -exec sed -i -e 's,github.com/antlr/antlr4/runtime/Go/antlr,github.com/antlr4-go/antlr/v4,g' {} \;
```

After performing the steps above, and you are using modules issuing:

```shell
go mod tidy
```
Should fix up your `go.mod` file to reference only the `v4` version of the ANTLR Go runtime:

```shell
require github.com/antlr/antlr4/runtime/Go/antlr/v4 v4.13.0
```

From this point on, your go mod commands will work correctly with the ANTLR repo and upgrades and downgrades will work
as you expect. As will branch version such as @dev

### Referencing the Go ANTLR runtime

You can reference the go ANTLR runtime package like this:

```golang
import "github.com/antlr4-go/antlr/v4"
```

### Complete example

Suppose you're using the JSON grammar from https://github.com/antlr/grammars-v4/tree/master/json placed in the parser
directory and have initialized your `go mod` file.

Then, invoke `antlr4 -Dlanguage=Go JSON.g4`. The result of this is a collection of .go files in the `parser` directory including:
```
json_parser.go
json_base_listener.go
json_lexer.go
json_listener.go
```

Another common option to the ANTLR tool is `-visitor`, which generates a parse tree visitor, but we won't be doing that here. 
For a full list of antlr4 tool options, please visit the [tool documentation page](#/doc/tool-options.md).

We'll write a small main func to call the generated parser/lexer (assuming they are separate). This one writes out the 
encountered `ParseTreeContext`'s. Assuming the generated parser code is in the `parser` directory relative to this code:

```golang
package main

import (
	"github.com/antlr4-go/antlr/v4"
	"./parser"  // Note that with modules you may not be able to use a relative immport path
	"os"
	"fmt"
)

type TreeShapeListener struct {
	*parser.BaseJSONListener
}

func NewTreeShapeListener() *TreeShapeListener {
	return new(TreeShapeListener)
}

func (this *TreeShapeListener) EnterEveryRule(ctx antlr.ParserRuleContext) {
	fmt.Println(ctx.GetText())
}

func main() {
	input, _ := antlr.NewFileStream(os.Args[1])
	lexer := parser.NewJSONLexer(input)
	stream := antlr.NewCommonTokenStream(lexer,0)
	p := parser.NewJSONParser(stream)
	p.AddErrorListener(antlr.NewDiagnosticErrorListener(true))
	tree := p.Json()
	antlr.ParseTreeWalkerDefault.Walk(NewTreeShapeListener(), tree)
}
```

Fix up your `go.mod` file:

```shell
go mod tidy
```

This one expects the input to be passed on the command line:

```
go run test.go input
```

The output is:

```
{"a":1}
{"a":1}
"a":1
1
```

<a id="go-changes.md"></a>
<a id="/doc/go-changes.md"></a>

# Changes to the Go Runtime over time

## v4.12.0 to v4.13.0

Strictly speaking, if ANTLR was a go only project following [SemVer](https://semver.org/) release v4.13.0 would be
at least a minor version change and arguably a bump to v5. However, we must follow the ANTLR conventions here or the
release numbers would quickly become confusing. I apologize for being unable to follow the Go release rules absolutely 
to the letter.

There are a lot of changes and improvements in this release, but only the change of repo holding the runtime code,
and possibly the removal of interfaces will cause any code changes. There are no breaking changes to the runtime
interfaces.

ANTLR Go Maintainer: [Jim Idle](https://github.com/jimidle) - Email:  [jimi@idle.ws](mailto:jimi@idle.ws)

### Code Relocation

For complicated reasons, including not breaking the builds of some users who use a monorepo and eschew modules, as well
as not making substantial changes to the internal test suite, the Go runtime code will continue to be maintained in
the main ANTLR4 repo `antlr/antlr4`. If you wish to contribute changes to the Go runtime code, please continue to submit 
PRs to this main repo, against the `dev` branch.

The code located in the main repo at about the depth of the Mariana Trench, means that the go tools cannot reconcile
the module correctly. After some debate, it was decided that we would create a dedicated release repo for the Go runtime
so that it will behave exactly as the Go tooling expects. This repo is auto-maintained and keeps both the dev and master
branches up to date.

Henceforth, all future projects using the ANTLR Go runtime, should import as follows:

```go
import (
    "github.com/antlr4-go/antlr/v4"
    )
```

And use the command:

```shell
go get github.com/antlr4-go/antlr
```

To get the module - `go mod tidy` is probably the best way once imports have been changed. 

Please note that there is no longer any source code kept in the ANTLR repo under `github.com/antlr/antlr4/runtime/Go/antlr`.
If you are using the code without modules, then sync the code from the new release repo.

### Documentation

Prior to this release, the godocs were essentially unusable as the go doc code was essentially copied without
change, from teh Java runtime. The godocs are now properly formatted for Go and pkg.dev.

Please feel free to raise an issue if you find any remaining mistakes. Or submit a PR (remember - not to the new repo).
It is expected that it might take a few iterations to get the docs 100% squeaky clean.

### Removal of Unnecessary Interfaces

The Go runtime was originally produced as almost a copy of the Java runtime but with go syntax. This meant that everything 
had an interface. There is no need to use interfaces in Go if there is only ever going to be one implementation of
some struct and its methods. Interfaces cause an extra deference at runtime and are detrimental to performance if you
are trying to squeeze out every last nanosecond, which some users will be trying to do.

This is 99% an internal refactoring of the runtime with no outside effects to the user.

### Generated Recognizers Return *struct and not Interfaces

The generated recognizer code generated an interface for the parsers and lexers. As they can only be implemented by the
generated code, the interfaces were removed. This is possibly the only place you may need to make a code change to
your driver code.

If your code looked like this:

```go
var lexer = parser.NewMySqlLexer(nil)
var p = parser.NewMySqlParser(nil)
```

Or this:

```go
lexer := parser.NewMySqlLexer(nil)
p := parser.NewMySqlParser(nil)
```

Then no changes need to be made. However, fi you predeclared the parser and lexer variables with there type, such as like
this:

```go
var lexer parser.MySqlLexer
var p parser.MySqlParser
// ...
lexer = parser.NewMySqlLexer(nil)
p = parser.NewMySqlParser(nil)
```

You will need to change your variable declarations to pointers (note the introduction of the `*` below. 

```go
var lexer *parser.MySqlLexer
var p *parser.MySqlParser
// ...
lexer = parser.NewMySqlLexer(nil)
p = parser.NewMySqlParser(nil)
```

This is the only user facing change that I can see. This change though has a very beneficial side effect in that you
no longer need to cast the interface into a struct so that you can access methods and data within it. Any code you
had that needed to do that, will be cleaner and faster.

The performance improvement is worth the change and there was no tidy way for me to avoid it.

### Parser Error Recovery Does Not Use Panic

THe generated parser code was again essentially trying to be Java code in disguise. This meant that every parser rule
executed a `defer {}` and a `recover()`, even if there wer no outstanding parser errors. Parser errors were issued by
issuing a `panic()`! 

While some major work has been performed in the go compiler and runtime to make `defer {}` as fast as possible, 
`recover()` is (relatively) slow as it is not meant to be used as a general error mechanism, but to recover from say
an internal library problem if that problem can be recovered to a known state. 

The generated code now stores a recognition error and a flag in the main parser struct and use `goto` to exit the
rule instead of a `panic()`. As might be imagined, this is significantly faster through the happy path. It is also 
faster at generating errors.

The ANTLR runtime tests do check error raising and recovery, but if you find any differences in the error handling
behavior of your parsers, please raise an issue. 

### Reduction in use of Pointers

Certain internal structs, such as interval sets are small and immutable, but were being passed around as pointers
anyway. These have been change to use copies, and resulted in significant performance increases in some cases. 
There is more work to come in this regard.

### ATN Deserialization

When the ATN and associated structures are deserialized for the first time, there was a bug that caused a needed
optimization to fail to be executed. This could have a significant performance effect on recognizers that were written
in a suboptimal way (as in poorly formed grammars). This is now fixed.

### Prediction Context Caching was not Working

This has a massive effect when reusing a parser for a second and subsequent run. The PredictionContextCache merely
used memory but did not speed up subsequent executions. This is now fixed, and you should see a big difference in 
performance when reusing a parser. This single paragraph does not do this fix justice ;) 

### Cumulative Performance Improvements

Though too numerous to mention, there are a lot of small performance improvements, that add up in accumulation. Everything
from improvements in collection performance to slightly better algorithms or specific non-generic algorithms. 

### Cumulative Memory Improvements

The real improvements in memory usage, allocation and garbage collection are saved for the next major release. However,
if your grammar is well-formed and does not require almost infinite passes using ALL(*), then both memory and performance
will be improved with this release.

### Bug Fixes

Other small bug fixes have been addressed, such as potential panics in funcs that did not check input parameters. There
are a lot of bug fixes in this release that most people were probably not aware of. All known bugs are fixed at the 
time of release preparation.

### A Note on Poorly Constructed Grammars

Though I have made some significant strides on improving the performance of poorly formed grammars, those that are
particularly bad will see much less of an incremental improvement compared to those that are fairly well-formed.

This is deliberately so in this release as I felt that those people who have put in effort to optimize the form of their
grammar are looking for performance, where those that have grammars that parser in seconds, tens of seconds or even
minutes, are presumed to not care about performance. 

A particularly good (or bad) example is the MySQL grammar in the ANTLR grammar repository (apologies to the Author 
if you read this note - this isn't an attack). Although I have improved its runtime performance
drastically in the Go runtime, it still takes about a minute to parse complex select statements. As it is constructed, 
there are no magic answers. I will look in more detail at improvements for such parsers, such as not freeing any
memory until the parse is finished (improved 100x in experiments).

The best advice I can give is to put some effort in to the actual grammar itself. well-formed grammars will potentially
see some huge improvements with this release. Badly formed grammars, not so much. 

<a id="cpp-target.md"></a>
<a id="/doc/cpp-target.md"></a>

# C++

The C++ target supports all platforms that can either run MS Visual Studio 2017 (or newer), XCode 7 (or newer) or CMake (C++17 required). All build tools can either create static or dynamic libraries, both as 64bit or 32bit arch. Additionally, XCode can create an iOS library. Also see [Antlr4 for C++ with CMake: A practical example](http://blorente.me/beyond-the-loop/Antlr-cpp-cmake/).

## How to create a C++ lexer or parser?
This is pretty much the same as creating a Java lexer or parser, except you need to specify the language target, for example:

```
$ antlr4 -Dlanguage=Cpp MyGrammar.g4
```

You will see that there are a whole bunch of files generated by this call. If visitor or listener are not suppressed (which is the default) you'll get:

* MyGrammarLexer.h + MyGrammarLexer.cpp
* MyGrammarParser.h + MyGrammarParser.cpp
* MyGrammarVisitor.h + MyGrammarVisitor.cpp
* MyGrammarBaseVisitor.h + MyGrammarBaseVisitor.cpp
* MyGrammarListener.h + MyGrammarListener.cpp
* MyGrammarBaseListener.h + MyGrammarBaseListener.cpp

## Where can I get the runtime?

Once you've generated the lexer and/or parser code, you need to download or build the runtime. Prebuilt C++ runtime binaries for Windows (Visual Studio 2013/2015), OSX/macOS and iOS are available on the ANTLR web site:

* http://www.antlr.org

Use CMake to build a Linux library (works also on OSX, however not for the iOS library).

Instead of downloading a prebuilt binary you can also easily build your own library on OSX or Windows. Just use the provided projects for XCode or Visual Studio and build it. Should work out of the box without any additional dependency.


## How do I run the generated lexer and/or parser?

Putting it all together to get a working parser is really easy. Look in the [runtime/Cpp/demo](../runtime/Cpp/demo) folder for a simple example. The [README](../runtime/Cpp/demo/README.md) there describes shortly how to build and run the demo on OSX, Windows or Linux.

## How do I create and run a custom listener?

The generation step above created a listener and base listener class for you. The listener class is an abstract interface, which declares enter and exit methods for each of your parser rules. The base listener implements all those abstract methods with an empty body, so you don't have to do it yourself if you just want to implement a single function. Hence use this base listener as the base class for your custom listener:

```c++
#include <iostream>

#include "antlr4-runtime.h"
#include "MyGrammarLexer.h"
#include "MyGrammarParser.h"
#include "MyGrammarBaseListener.h"

using namespace antlr4;

class TreeShapeListener : public MyGrammarBaseListener {
public:
  void enterKey(ParserRuleContext *ctx) override {
	// Do something when entering the key rule.
  }
};


int main(int argc, const char* argv[]) {
  std::ifstream stream;
  stream.open(argv[1]);
  ANTLRInputStream input(stream);
  MyGrammarLexer lexer(&input);
  CommonTokenStream tokens(&lexer);
  MyGrammarParser parser(&tokens);

  tree::ParseTree *tree = parser.key();
  TreeShapeListener listener;
  tree::ParseTreeWalker::DEFAULT.walk(&listener, tree);

  return 0;
}

```
 
This example assumes your grammar contains a parser rule named `key` for which the `enterKey` function was generated.

## Special cases for this ANTLR target

There are a couple of things that only the C++ ANTLR target has to deal with. They are described here.

### Code Generation Aspects
The code generation (by running the ANTLR4 jar) allows to specify 2 values you might find useful for better integration of the generated files into your application (both are optional):

* A **namespace**: use the **`-package`** parameter to specify the namespace you want.
* An **export macro**: especially in VC++ extra work is required to export your classes from a DLL. This is usually accomplished by a macro that has different values depending on whether you are creating the DLL or import it. The ANTLR4 runtime itself also uses one for its classes:

```c++
  #ifdef ANTLR4CPP_EXPORTS
    #define ANTLR4CPP_PUBLIC __declspec(dllexport)
  #else
    #ifdef ANTLR4CPP_STATIC
      #define ANTLR4CPP_PUBLIC
    #else
      #define ANTLR4CPP_PUBLIC __declspec(dllimport)
    #endif
  #endif
```
Just like the `ANTLR4CPP_PUBLIC` macro here you can specify your own one for the generated classes using the **`-DexportMacro=...`** command-line parameter or
grammar option `options {exportMacro='...';}` in your grammar file.

In order to create a static lib in Visual Studio define the `ANTLR4CPP_STATIC` macro in addition to the project settings that must be set for a static library (if you compile the runtime yourself).

For gcc and clang it is possible to use the `-fvisibility=hidden` setting to hide all symbols except those that are made default-visible (which has been defined for all public classes in the runtime).

### Compile Aspects

When compiling generated files, you can configure a compile option according to your needs (also optional):

* A **thread local DFA macro**: Add `-DANTLR4_USE_THREAD_LOCAL_CACHE=1` to the compilation options
will enable using thread local DFA cache (disabled by default), after that, each thread uses its own DFA.
This will increase memory usage to store thread local DFAs and redundant computation to build thread local DFAs (not too much).
The benefit is that it can improve the concurrent performance running with multiple threads.
In other words, when you find your concurent throughput is not high enough, you should consider turning on this option.

### Memory Management
Since C++ has no built-in memory management we need to take extra care. For that we rely mostly on smart pointers, which however might cause time penalties or memory side effects (like cyclic references) if not used with care. Currently however the memory household looks very stable. Generally, when you see a raw pointer in code consider this as being managed elsewhere. You should never try to manage such a pointer (delete, assign to smart pointer etc.).

Accordingly a parse tree is only valid for the lifetime of its parser. The parser, in turn, is only valid for the lifetime of its token stream, and so on back to the original `ANTLRInputStream` (or equivalent). To retain a tree across function calls you'll need to create and store all of these and `delete` all but the tree when you no longer need it.

### Unicode Support
Encoding is mostly an input issue, i.e. when the lexer converts text input into lexer tokens. The parser is completely encoding unaware.

The C++ target always expects UTF-8 input (either in a string or stream) which is then converted to UTF-32 (a char32_t array) and fed to the lexer.

### Named Actions
In order to help customizing the generated files there are a number of additional so-called **named actions**. These actions are tight to specific areas in the generated code and allow to add custom (target specific) code. All targets support these actions

* @parser::header
* @parser::members
* @lexer::header
* @lexer::members

(and their scopeless alternatives `@header` and `@members`) where header doesn't mean a C/C++ header file, but the top of a code file. The content of the header action appears in all generated files at the first line. So it's good for things like license/copyright information.

The content of a *members* action is placed in the public section of lexer or parser class declarations. Hence it can be used for public variables or predicate functions used in a grammar predicate. Since all targets support *header* + *members* they are the best place for stuff that should be available also in generated files for other languages.

In addition to that the C++ target supports many more such named actions. Unfortunately, it's not possible to define new scopes (e.g. *listener* in addition to *parser*) so they had to be defined as part of the existing scopes (*lexer* or *parser*). The grammar in the demo application contains all of the named actions as well for reference. Here's the list:

* **@lexer::preinclude** - Placed right before the first #include (e.g. good for headers that must appear first, for system headers etc.). Appears in both lexer h and cpp file.
* **@lexer::postinclude** - Placed right after the last #include, but before any class code (e.g. for additional namespaces). Appears in both lexer h and cpp file.
* **@lexer::context** - Placed right before the lexer class declaration. Use for e.g. additional types, aliases, forward declarations and the like. Appears in the lexer h file.
* **@lexer::declarations** - Placed in the private section of the lexer declaration (generated sections in all classes strictly follow the pattern: public, protected, private, from top to bottom). Use this for private vars etc.
* **@lexer::definitions** - Placed before other implementations in the cpp file (but after *@postinclude*). Use this to implement e.g. private types.

For the parser there are the same actions as shown above for the lexer. In addition to that there are even more actions for visitor and listener classes:

* **@parser::listenerpreinclude**
* **@parser::listenerpostinclude**
* **@parser::listenerdeclarations**
* **@parser::listenermembers**
* **@parser::listenerdefinitions**
* 
* **@parser::baselistenerpreinclude**
* **@parser::baselistenerpostinclude**
* **@parser::baselistenerdeclarations**
* **@parser::baselistenermembers**
* **@parser::baselistenerdefinitions**
* 
* **@parser::visitorpreinclude**
* **@parser::visitorpostinclude**
* **@parser::visitordeclarations**
* **@parser::visitormembers**
* **@parser::visitordefinitions**
* 
* **@parser::basevisitorpreinclude**
* **@parser::basevisitorpostinclude**
* **@parser::basevisitordeclarations**
* **@parser::basevisitormembers**
* **@parser::basevisitordefinitions**

and should be self explanatory now. Note: there is no *context* action for listeners or visitors, simply because they would be even less used than the other actions and there are so many already.

<a id="swift-target.md"></a>
<a id="/doc/swift-target.md"></a>

# ANTLR4 Language Target, Runtime for Swift

## Performance Note

To use ANTLR4 Swift target in production environment, make sure to turn on compiler optimizations by following [these instructions](https://github.com/apple/swift-package-manager/blob/main/Documentation/Usage.md#setting-the-build-configuration) if you use SwiftPM to build your project. 

If you are using Xcode to build your project, it's unlikely you will not use `release` build for production build.

Conclusion is, you need to turn on `release` mode (which will have all the optimization pre configured for you) so the ANTLR4 Swift target can have reasonable parsing speed.

## Install ANTLR4

Make sure you have the ANTLR
installed. [The getting started guide](#getting-started.md) should get
you started.

## Create a Swift lexer or parser 
This is pretty much the same as creating a Java lexer or parser, 
except you need to specify the language target, for example:

``` 
$ antlr4 -Dlanguage=Swift MyGrammar.g4 
``` 

If you integrate this as a build step inside Xcode, then you should use the
"gnu" message format to have any error messages parsed by Xcode.  You may
also want to use the `-o` option to put the autogenerated files in a
separate subdirectory.

```
antlr4 -Dlanguage=Swift -message-format gnu -o Autogen MyGrammar.g4
```

For a full list of antlr4 tool options, please visit the
[tool documentation page](#/doc/tool-options.md).

## Build your Swift project with ANTLR runtime

### Note

We use __boot.py__ script located at the root of the Swift runtime folder
`antlr4/runtime/Swift` to provide additional support for both Xcode-based
projects and SPM-based projects. Below sections are organized for both of
the flavors. If you want to quickly get started, try:

```
python boot.py --help
```

for information about this script.

### Xcode Projects

Note that even if you are otherwise using ANTLR from a binary distribution,
you should compile the ANTLR Swift runtime from source, because the Swift
language does not yet have a stable ABI.

ANTLR uses Swift Package Manager to generate Xcode project files. 

#### Download source code for ANTLR

```
git clone https://github.com/antlr/antlr4
```

#### Generate Xcode project for ANTLR runtime

The `boot.py` script includes a wrapper around `swift package
generate-xcodeproj`. Use this to generate `Antlr4.xcodeproj` for the ANTLR
Swift runtime. (using _swift package generate-xcodeproj_ is not recommended)
since the project is dependent on some parser files generated by _boot.py_.

```
cd antlr4/runtime/Swift
python boot.py --gen-xcodeproj
```

#### Import ANTLR Swift runtime into your project

Open your own project in Xcode.

Open Finder in the `runtime/Swift` directory:

```
# From antlr4/runtime/Swift
open .
```

Drag `Antlr4.xcodeproj` into your project.

After this is done, your Xcode project navigator will be something like the
screenshot below. In this example, your own project is "Smalltalk", and you
will be able to see `Antlr4.xcodeproj` shown as a contained project.

<img src="https://github.com/antlr/antlr4/raw/master/doc/images/xcodenav.png" width="300">

#### Edit the build settings if necessary

Swift Package Manager currently does not support iOS, watchOS, or tvOS.  If
you wish to build for those platforms, you will need to alter the project
build settings manually.

#### Add generated parser and lexer to project

Make sure the parsers/lexers
generated in __step 2__ are added to the project. To do this, you can
drag the generated files from Finder to the Xcode IDE. Remember to
check __Copy items if needed__ to make sure the files are actually
moved into the project folder instead of symbolic links (see the
screenshot below). After moving you will be able to see your files in
the project navigator.  Make sure that the Target Membership settings
are correct for your project.

<img src="https://github.com/antlr/antlr4/raw/master/doc/images/dragfile.png" width="500">

#### Add the ANTLR Swift runtime as a dependency

Select your own project in Xcode and go to the Build Phases settings panel.
Add the ANTLR runtime under __Target Dependencies__ and __Link Binary With
Libraries__.

<img src="https://github.com/antlr/antlr4/raw/master/doc/images/xcodedep.png" width="800">

#### Build your project

The runtime and generated grammar should now build correctly.

### Swift Package Manager Projects

Add Antlr4 as a dependency to your `Package.swift` file. For more information, please see the [Swift Package Manager documentation](https://github.com/apple/swift-package-manager/tree/master/Documentation).


```swift
.package(url: "https://github.com/antlr/antlr4", from: "4.13.2")
```

## Swift access levels

You may use the `accessLevel` option to control the access levels on generated
code.  This option can either be specified with `-DaccessLevel=value` on
the `antlr4` command line, or inside your `.g4` file like this:

```
options {
    accessLevel = 'value';
}
```

By default (with the `accessLevel` option unspecified) the generated code
uses the following access levels:

* `open` for anything that you can feasibly extend with subclassing:
the generated parser, lexer, and context classes, the the listener and
visitor base classes, and all their accessor and setter functions.
* `public` for anything that should not be subclassed, but otherwise is
useful to client code: protocols, initializers, and static definitions such
as the lexer tokens, symbol names, and so on.
* `internal` or `private` for anything that should not be accessed directly.

If you specify `accessLevel = 'public'` then all items that are `open` by
default will use `public` instead.  Otherwise, the behavior is the same as
the default.

If you specify `accessLevel = ''` or `accessLevel='internal'` then all items
that are `open` or `public` by default will use Swift's default (internal)
access level instead.

Those are the only supported values for `accessLevel` when using the Swift
code-generator.

We recommend using `accessLevel = ''`.  Even if you are creating a parser
as part of a library, you would usually want to wrap it in an API of your
own and keep the ANTLR-generated parser internal to your module.  You
only need to use the less restrictive access levels if you need to expose
the parser directly as part of your own module's API.

<a id="php-target.md"></a>
<a id="/doc/php-target.md"></a>

# ANTLR4 Runtime for PHP

### First steps

#### 1. Install ANTLR4

[The getting started guide](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md) 
should get you started.

#### 2. Install the PHP ANTLR runtime

Each target language for ANTLR has a runtime package for running parser 
generated by ANTLR4. The runtime provides a common set of tools for using your parser.

Install the runtime with Composer:

```bash
composer require antlr/antlr4-php-runtime
```

#### 3. Generate your parser

You use the ANTLR4 "tool" to generate a parser. These will reference the ANTLR 
runtime, installed above.

Suppose you're using a UNIX system and have set up an alias for the ANTLR4 tool 
as described in [the getting started guide](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md). 
To generate your PHP parser, run the following command:

```bash
antlr4 -Dlanguage=PHP MyGrammar.g4
```

For a full list of antlr4 tool options, please visit the 
[tool documentation page](https://github.com/antlr/antlr4/blob/master/doc/tool-options.md).

### Complete example

Suppose you're using the JSON grammar from https://github.com/antlr/grammars-v4/tree/master/json.

Then, invoke `antlr4 -Dlanguage=PHP JSON.g4`. The result of this is a 
collection of `.php` files in the `parser` directory including:
```
JsonParser.php
JsonBaseListener.php
JsonLexer.php
JsonListener.php
```

Another common option to the ANTLR tool is `-visitor`, which generates a parse 
tree visitor, but we won't be doing that here. For a full list of antlr4 tool 
options, please visit the [tool documentation page](#/doc/tool-options.md).

We'll write a small main func to call the generated parser/lexer 
(assuming they are separate). This one writes out the encountered 
`ParseTreeContext`'s:

```php
<?php

namespace JsonParser;

use Antlr\Antlr4\Runtime\CommonTokenStream;
use Antlr\Antlr4\Runtime\Error\Listeners\DiagnosticErrorListener;
use Antlr\Antlr4\Runtime\InputStream;
use Antlr\Antlr4\Runtime\ParserRuleContext;
use Antlr\Antlr4\Runtime\Tree\ErrorNode;
use Antlr\Antlr4\Runtime\Tree\ParseTreeListener;
use Antlr\Antlr4\Runtime\Tree\ParseTreeWalker;
use Antlr\Antlr4\Runtime\Tree\TerminalNode;

final class TreeShapeListener implements ParseTreeListener {
    public function visitTerminal(TerminalNode $node) : void {}
    public function visitErrorNode(ErrorNode $node) : void {}
    public function exitEveryRule(ParserRuleContext $ctx) : void {}

    public function enterEveryRule(ParserRuleContext $ctx) : void {
        echo $ctx->getText();
    }
}

$input = InputStream::fromPath($argv[1]);
$lexer = new JSONLexer($input);
$tokens = new CommonTokenStream($lexer);
$parser = new JSONParser($tokens);
$parser->addErrorListener(new DiagnosticErrorListener());
$tree = $parser->json();

ParseTreeWalker::default()->walk(new TreeShapeListener(), $tree);
```

Create a `example.json` file:
```json
{"a":1}
```

Parse the input file:

```
php json.php example.json
```

The expected output is:

```
{"a":1}
{"a":1}
"a":1
1
```

<a id="dart-target.md"></a>
<a id="/doc/dart-target.md"></a>

# ANTLR4 Runtime for Dart

From version 4.9 onwards antlr's dart generated code is null sound safety compatible and sets the minimum dart sdk version to 2.12.0.

### First steps

#### 1. Install ANTLR4

[The getting started guide](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md) 
should get you started.

#### 2. Install the Dart ANTLR runtime

Each target language for ANTLR has a runtime package for running parser 
generated by ANTLR4. The runtime provides a common set of tools for using your parser.

Install the runtime with the same version as the main ANTLR tool:

Add this to your package's pubspec.yaml file:
```yaml
...
dependencies:
  antlr4: <ANTLR version>
...
```

#### 3. Generate your parser

You use the ANTLR4 "tool" to generate a parser. These will reference the ANTLR 
runtime, installed above.

Suppose you're using a UNIX system and have set up an alias for the ANTLR4 tool 
as described in [the getting started guide](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md). 
To generate your Dart parser, run the following command:

```shell script
antlr4 -Dlanguage=Dart MyGrammar.g4
```

For a full list of antlr4 tool options, please visit the 
[tool documentation page](https://github.com/antlr/antlr4/blob/master/doc/tool-options.md).

### Complete example

Suppose you're using the JSON grammar from https://github.com/antlr/grammars-v4/tree/master/json.

Then, invoke `antlr4 -Dlanguage=Dart JSON.g4`. The result of this is a 
collection of `.dart` including:

* JsonLexer.dart
* JsonParser.dart
* JsonBaseListener.dart
* JsonListener.dart (if you have not activated the -no-listener option)
* JsonVisitor.dart (if you have activated the -visitor option)

We'll write a small main func to call the generated parser/lexer 
(assuming they are separate). This one writes out the encountered 
`ParseTreeContext`'s:

```dart
import 'package:antlr4/antlr4.dart';
import 'package:my_project/JSONParser.dart';
import 'package:my_project/JSONLexer.dart';

class TreeShapeListener implements ParseTreeListener {
  @override
  void enterEveryRule(ParserRuleContext ctx) {
    print(ctx.text);
  }

  @override
  void exitEveryRule(ParserRuleContext node) {
  }

  @override
  void visitErrorNode(ErrorNode node) {
  }

  @override
  void visitTerminal(TerminalNode node) {
  }
}

void main(List<String> args) async {
  JSONLexer.checkVersion();
  JSONParser.checkVersion();
  final input = await InputStream.fromPath(args[0]);
  final lexer = JSONLexer(input);
  final tokens = CommonTokenStream(lexer);
  final parser = JSONParser(tokens);
  parser.addErrorListener(DiagnosticErrorListener());
  final tree = parser.json();
  ParseTreeWalker.DEFAULT.walk(TreeShapeListener(), tree);
}
```

Create a `example.json` file:
```json
{"a":1}
```

Parse the input file:

```shell script
dart bin/main.dart example.json
```

The expected output is:

```
{"a":1}
{"a":1}
{"a":1}
"a":1
1
```

### Debug

We have some logs in place that can ease the debugging process, in order to turn these logs on you can enable the following environment declarations:

- ANTLR_LEXER_DEBUG
- ANTLR_LEXER_DFA_DEBUG
- ANTLR_PARSER_DEBUG
- ANTLR_PARSER_LIST_ATN_DECISIONS_DEBUG
- ANTLR_PARSER_DFA_DEBUG
- ANTLR_PARSER_RETRY_DEBUG

If you're using flutter, you can define these variables by adding an `--dart-define` arguments, eg. `flutter run --dart-define LEXER_DEBUG=false`

<a id="unicode.md"></a>
<a id="/doc/unicode.md"></a>

# Lexers and Unicode text

Prior to ANTLR 4.7, generated lexers in most targets only supported part of the Unicode standard (code points up to `U+FFFF`). As of ANTLR 4.7, the lexers in all language runtimes support the full range of Unicode code points up to `U+10FFFF`. 

C++, Python, Go, and Swift APIs didn't need any API changes to support Unicode code points, so we decided to leave those class interfaces as-is. 

Java, C#, and JavaScript runtimes required changes and, rather than break the previous interface, we deprecated them. (The *Java-target* deprecated `ANTLRInputStream` and `ANTLRFileStream` APIs only support Unicode code points up to `U+FFFF`.) Now, those targets must create `CharStream`s from input using `CharStreams.fromPath()`, `CharStreams.fromFileName()`, etc... 

A big shout out to Ben Hamilton (github bhamiltoncx) for his superhuman
efforts across all targets to get true support for U+10FFFF code points.

## Example

The Java, C#, and JavaScript runtimes use the new factory style stream creation interface. For example, here is some sample Java code that uses `CharStreams.fromPath()`:

```java
public static void main(String[] args) {
  CharStream charStream = CharStreams.fromPath(Paths.get(args[0]));
  Lexer lexer = new UnicodeLexer(charStream);
  CommonTokenStream tokens = new CommonTokenStream(lexer);
  tokens.fill();
  for (Token token : tokens.getTokens()) {
    System.out.println("Got token: " + token.toString());
  }
}
```

# Unicode Code Points in Lexer Grammars

To refer to Unicode [code points](https://en.wikipedia.org/wiki/Code_point)
in lexer grammars, use the `\u` string escape plus up to 4 hex digits. For example, to create
a lexer rule for a single Cyrillic character by creating a range from
`U+0400` to `U+04FF`:

```ANTLR
CYRILLIC : '\u0400'..'\u04FF' ; // or [\u0400-\u04FF] without quotes
```

Unicode literals larger than U+FFFF must use the extended `\u{12345}` syntax. For example, to create a lexer rule for a selection of smiley faces
from the [Emoticons Unicode block](http://www.unicode.org/charts/PDF/U1F600.pdf):

```ANTLR
EMOTICONS : ('\u{1F600}' | '\u{1F602}' | '\u{1F615}') ; // or [\u{1F600}\u{1F602}\u{1F615}]
```

Finally, lexer char sets can include Unicode properties. Each Unicode code point has at least one property that describes the type group to which it belongs (e.g. alpha, number, punctuation). Other properties can be the language script or special binary properties and Unicode code blocks. That means however, that a property specifies a group of code points, hence they are only allowed in lexer char sets.

```ANTLR
EMOJI : [\p{Emoji}] ;
JAPANESE : [\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}] ;
NOT_CYRILLIC : [\P{Script=Cyrillic}] ;
```

See [lexer-rules.md](lexer-rules.md#lexer-rule-elements) for more detail on Unicode
escapes in lexer rules.

## Migration


Code for **4.6** looked like this:


```java
CharStream input = new ANTLRFileStream("myinputfile");
JavaLexer lexer = new JavaLexer(input);
CommonTokenStream tokens = new CommonTokenStream(lexer);
```

(It didn't use UTF-8 by default, despite the documentation saying so previously; it actually depended on the calling environments default.)

Code for **4.7** assumes UTF-8 by default and looks like this:

```java
CharStream input = CharStreams.fromFileName("inputfile");
JavaLexer lexer = new JavaLexer(input);
CommonTokenStream tokens = new CommonTokenStream(lexer);
```

Or, if you'd like to specify the file encoding:

```java
CharStream input = CharStreams.fromFileName("inputfile", Charset.forName("windows-1252"));
```

### Motivation

After a [lively discussion](https://github.com/antlr/antlr4/pull/1771), I (parrt) decided not to simply gut the 4.6 `ANTLRFileStream` and `ANTLRInputStream` to incorporate the new U+10FFFF functionality. I decided to *deprecate* the old interface and recommend use of the new interface to prevent confusion. My reasoning is summarized as:

* I didn't like the idea of breaking all 4.6 code. To get the previous streams to properly support > 16 bit Unicode would require a lot of changes to the method signatures.
* Using `int` buffer element types would double the size of memory required to hold streams in memory, given that we buffer everything (and I didn't want to change that aspect of the streams).
* The new factory-style interface supports creation of the smallest possible code point buffer element size according to the Unicode code points found in the input stream. This means using half as much memory
as the old {@link ANTLRFileStream}, which assumed 16-bit characters, for ASCII text.
* Through some [serious testing and performance tweaking](https://github.com/antlr/antlr4/pull/1781), the new streams perform as fast or faster than the 4.6 streams.

**WARNING**. *You should avoid using both the deprecated and the new streams* in the same application because you will see 
a nontrivial performance degradation. This speed hit is because the 
`Lexer`'s internal code goes from a monomorphic to megamorphic
dynamic dispatch to get characters from the input stream. Java's
on-the-fly compiler (JIT) is unable to perform the same optimizations
so stick with either the old or the new streams, if performance is
a primary concern. See the [extreme debugging and spelunking](https://github.com/antlr/antlr4/pull/1781) needed to identify this issue in our timing rig.

### Legacy grammar using surrogate code units

Legacy grammars that did their own UTF-16 surrogate code unit matching will need to continue to use `ANTLRInputStream` (Java target) until the parser-application code can upgrade to `CharStreams` interface. Then the surrogate code unit matching should be removed from the grammar in favor of letting the new streams do the decoding.  

Prior to 4.7, application code could directly pass `Token.getStartIndex()` and `Token.getStopIndex()` to Java and C# String APIs (because both used UTF-16 code units as the fundamental unit of length).  With the new streams, clients will have to convert from code point indices to UTF-16 code unit indices. Here is some (Java) code to show you the necessary logic:

```java
public final class CodePointCounter {
  private final String input;
  public int inputIndex = 0;
  public int codePointIndex = 0;
  
  public int advanceToIndex(int newCodePointIndex) {
    assert newCodePointIndex >= codePointIndex;
    while (codePointIndex < newCodePointOffset) {
        int codePoint = Character.codePointAt(input, inputIndex);
        inputIndex += Character.charCount(codePoint);
        codePointIndex++;
    }
    return inputIndex;
  }
}
```

### Character Buffering, Unbuffered streams

The ANTLR character streams still buffer all the input when you create
the stream, as they have done for ~20 years. 

If you need unbuffered
access, please note that it becomes challenging to create
parse trees. The parse tree has to point to tokens which will either
point into a stale location in an unbuffered stream or you have to copy
the characters out of the buffer into the token. That defeats the purpose
of unbuffered input. See the [ANTLR 4 book](https://www.amazon.com/Definitive-ANTLR-4-Reference/dp/1934356999) "13.8 Unbuffered Character and Token Streams". Unbuffered streams are primarily
useful for processing infinite streams *during the parse* and require that you manually buffer characters. Use `UnbufferedCharStream` and `UnbufferedTokenStream`.

```java
CharStream input = new UnbufferedCharStream(is);
CSVLexer lex = new CSVLexer(input); // copy text out of sliding buffer and store in tokens
lex.setTokenFactory(new CommonTokenFactory(true));
TokenStream tokens = new UnbufferedTokenStream<CommonToken>(lex);
CSVParser parser = new CSVParser(tokens);
parser.setBuildParseTree(false);
parser.file();
```

Your grammar that needs to have embedded actions that access the tokens as they are created, but before they disappear and are garbage collected. For example,

```
data : a=INT {int x = Integer.parseInt($a.text);} ;
```

From the code comments of `CommonTokenFactory`:

> That `true` in `new CommonTokenFactory(true)` indicates whether `CommonToken.setText` should be called after 
constructing tokens to explicitly set the text. This is useful for cases
where the input stream might not be able to provide arbitrary substrings
of text from the input after the lexer creates a token (e.g. the
implementation of `CharStream.getText` in
`UnbufferedCharStream` throws an
`UnsupportedOperationException`). Explicitly setting the token text
allows `Token.getText` to be called at any time regardless of the
input stream implementation.

*Currently, only Java, C++, and C# have these unbuffered streams implemented*.

<a id="parsing-binary-files.md"></a>
<a id="/doc/parsing-binary-files.md"></a>

# Parsing Binary Files

Parsing binary files is no different than parsing character-based files except that the "characters" are actually bytes not 16-bit unsigned short unicode characters.  From a lexer/parser point of view, there is no difference except that the characters are likely not printable.  If you want to match a special 2-byte marker 0xCA then 0xFE, the following rule is sufficient.

```
MARKER : '\u00CA' '\u00FE' ;
```

The parser of course would refer to that token like any other token.

Here is a sample grammar for use with the code snippets below.

```
grammar IP;

file : ip+ (MARKER ip)* ;

ip : BYTE BYTE BYTE BYTE ;

MARKER : '\u00CA' '\u00FE' ;
BYTE : '\u0000'..'\u00FF' ;
```

Notice that `BYTE` is using a range operator to match anything between 0 and 255. We can't use character classes like `[a-z]` naturally because we are not parsing character codes.  All character specifiers must have `00` as their upper byte. E.g., `\uCAFE` is not a valid character because that 16-bit value will never be created from the input stream (bytes only remember).

If there are actual characters like `$` or `!` encoded as bytes in the binary file, you can refer to them via literals like `'$'` as you normally would. See `'.'` in the grammar.
 
## Binary streams

There are many targets now so I'm not sure exactly how they process text files but most targets will pull in text per the machine's locale. Much of the time this will mean UTF-8 encoding of text converted to 16-bit Unicode. ANTLR's lexers operate on `int` so we can handle any kind of character you want to send in that fits in `int`.

Once the lexer gets an input stream, it doesn't care whether the characters come from / represent bytes or actual Unicode characters.

Let's get a binary file called `ips` and put it in our resources directory:

```java
public class WriteBinaryFile {
	public static final byte[] bytes = {
		(byte)172, 0, 0, 1, (byte)0xCA, (byte)0xFE,
		(byte)10, 10, 10, 1, (byte)0xCA, (byte)0xFE,
		(byte)10, 10, 10, 99
	};

	public static void main(String[] args) throws IOException {
		Files.write(new File("/tmp/ips").toPath(), bytes);
	}
}
```

Now we need to create a stream of bytes satisfactory to ANTLR, which is as simple as:

```java
CharStream bytesAsChar = CharStreams.fromFileName("/tmp/ips", StandardCharsets.ISO_8859_1);
```

The `ISO-8859-1` encoding is just the 8-bit char encoding for LATIN-1, which effectively tells the stream to treat each byte as a character. That's what we want. Then we have the usual test rig:


```java
//ANTLRFileStream bytesAsChar = new ANTLRFileStream("/tmp/ips", "ISO-8859-1"); DEPRECATED in 4.7
CharStream bytesAsChar = CharStreams.fromFileName("/tmp/ips", StandardCharsets.ISO_8859_1);
IPLexer lexer = new IPLexer(bytesAsChar);
CommonTokenStream tokens = new CommonTokenStream(lexer);
IPParser parser = new IPParser(tokens);
ParseTree tree = parser.file();
IPBaseListener listener = new MyIPListener();
ParseTreeWalker.DEFAULT.walk(listener, tree);
```

Here is the listener:

```java
class MyIPListener extends IPBaseListener {
	@Override
	public void exitIp(IPParser.IpContext ctx) {
		List<TerminalNode> octets = ctx.BYTE();
		short[] ip = new short[4];
		for (int i = 0; i<octets.size(); i++) {
			String oneCharStringHoldingOctet = octets.get(i).getText();
			ip[i] = (short)oneCharStringHoldingOctet.charAt(0);
		}
		System.out.println(Arrays.toString(ip));
	}
}
```

We can't just print out the text because we are not reading in text. We need to emit each byte as a decimal value. The output should be the following when you run the test code:

```
[172, 0, 0, 1]
[10, 10, 10, 1]
[10, 10, 10, 99]
```

## Custom stream

(*ANTLRFileStream was deprecated in 4.7*)

If you want to play around with the stream, you can. Here's an example that alters how "text" is computed from the byte stream (which changes how tokens print out their text as well):

```java
/** make a stream treating file as full of single unsigned byte characters */
class BinaryANTLRFileStream extends ANTLRFileStream {
	public BinaryANTLRFileStream(String fileName) throws IOException {
		super(fileName, "ISO-8859-1");
	}

	/** Print the decimal value rather than treat as char */
	@Override
	public String getText(Interval interval) {
		StringBuilder buf = new StringBuilder();
		int start = interval.a;
		int stop = interval.b;
		if(stop >= this.n) {
			stop = this.n - 1;
		}

		for (int i = start; i<=stop; i++) {
			int v = data[i];
			buf.append(v);
		}
		return buf.toString();
	}
}
```

The new test code starts out like this:

```java
ANTLRFileStream bytesAsChar = new BinaryANTLRFileStream("/tmp/ips");
IPLexer lexer = new IPLexer(bytesAsChar);
...
```

This simplifies our listener then:

```java
class MyIPListenerCustomStream extends IPBaseListener {
	@Override
	public void exitIp(IPParser.IpContext ctx) {
		List<TerminalNode> octets = ctx.BYTE();
		System.out.println(octets);
	}
}
```

You should get this enhanced output:

```
[172(0xAC), 0(0x0), 0(0x0), 1(0x1)]
[10(0xA), 10(0xA), 10(0xA), 1(0x1)]
[10(0xA), 10(0xA), 10(0xA), 99(0x63)]
```

## Error handling in binary files

Error handling proceeds exactly like any other parser. For example, let's alter the binary file so that it is missing one of the 0's in the first IP address:

```java
public static final byte[] bytes = {
	(byte)172, 0, 1, (byte)0xCA, (byte)0xFE, // OOOPS
	(byte)10, 10, 10, 1, (byte)0xCA, (byte)0xFE,
	(byte)10, 10, 10, 99
};
```

Running the original test case gives us:

```
line 1:4 extraneous input '.' expecting BYTE
line 1:6 mismatched input 'Êþ' expecting '.'
[172, 0, 1, 0]
[10, 10, 10, 1]
[10, 10, 10, 99]
```

That `'Êþ'` is just to the character representation of two bytes 0xCA and 0xFE. Using the enhanced binary stream, we see:

```
line 1:4 extraneous input '46(0x2E)' expecting BYTE
line 1:6 mismatched input '202(0xCA)254(0xFE)' expecting '.'
[172(0xAC), 0(0x0), 1(0x1)]
[10(0xA), 10(0xA), 10(0xA), 1(0x1)]
[10(0xA), 10(0xA), 10(0xA), 99(0x63)]
```
<a id="interpreters.md"></a>
<a id="/doc/interpreters.md"></a>

# Parser and Lexer Interpreters

*Since ANTLR 4.2*

For small parsing tasks it is sometimes convenient to use ANTLR in interpreted mode, rather than generating a parser in a particular target, compiling it and running it as part of your application. Here's some sample code that creates lexer and parser Grammar objects and then creates interpreters. Once we have a ParserInterpreter, we can use it to parse starting in any rule we like, given a rule index (which the grammar + the parser can provide).

## Action Code

Since interpreters don't use generated parsers + lexers they cannot execute any action code (including predicates). That means the interpreter runs as if there were no predicates at all. If your grammar requires action code in order to parse correctly you will not be able to test it using this approach.

## Java Target Interpreter Setup

```java
LexerGrammar lg = new LexerGrammar(
    "lexer grammar L;\n" +
    "A : 'a' ;\n" +
    "B : 'b' ;\n" +
    "C : 'c' ;\n");
Grammar g = new Grammar(
    "parser grammar T;\n" +
    "s : (A|B)* C ;\n",
    lg);   
LexerInterpreter lexEngine =
    lg.createLexerInterpreter(new ANTLRInputStream(input));
CommonTokenStream tokens = new CommonTokenStream(lexEngine);
ParserInterpreter parser = g.createParserInterpreter(tokens);
ParseTree t = parser.parse(g.rules.get(startRule).index);
```

You can also load combined grammars from a file:

```java
public static ParseTree parse(String fileName,
                              String combinedGrammarFileName,
                              String startRule)
    throws IOException
{
    final Grammar g = Grammar.load(combinedGrammarFileName);
    LexerInterpreter lexEngine = g.createLexerInterpreter(CharStreams.fromPath(Paths.get(fileName)));
    CommonTokenStream tokens = new CommonTokenStream(lexEngine);
    ParserInterpreter parser = g.createParserInterpreter(tokens);
    ParseTree t = parser.parse(g.getRule(startRule).index);
    System.out.println("parse tree: "+t.toStringTree(parser));
    return t;
}
```

Then:

```java
ParseTree t = parse("T.om",
                    MantraGrammar,
                    "compilationUnit");
```
 
To load separate lexer/parser grammars, do this:

```java
public static ParseTree parse(String fileNameToParse,
                              String lexerGrammarFileName,
                              String parserGrammarFileName,
                              String startRule)
    throws IOException
{
    final LexerGrammar lg = (LexerGrammar) Grammar.load(lexerGrammarFileName);
    final Grammar pg = Grammar.load(parserGrammarFileName, lg);
    CharStream input = CharStreams.fromPath(Paths.get(fileNameToParse));
    LexerInterpreter lexEngine = lg.createLexerInterpreter(input);
    CommonTokenStream tokens = new CommonTokenStream(lexEngine);
    ParserInterpreter parser = pg.createParserInterpreter(tokens);
    ParseTree t = parser.parse(pg.getRule(startRule).index);
    System.out.println("parse tree: " + t.toStringTree(parser));
    return t;
}
```

Then:

```java
ParseTree t = parse(fileName, XMLLexerGrammar, XMLParserGrammar, "document");
```

This is also how we will integrate instantaneous parsing into ANTLRWorks2 and development environment plug-ins.

See [TestParserInterpreter.java](../tool-testsuite/test/org/antlr/v4/test/tool/TestParserInterpreter.java).

## Non-Java Target Interpreter Setup
The ANTLR4 runtimes do not contain any grammar parsing classes (they are in the ANTLR4 tool  jar). Hence we cannot use `LexerGrammar` and `Grammar` to parse grammars for the interpreter. Instead we directly instantiate `LexerInterpreter` and `ParserInterpreter` objects. They require some data (namely symbol information and the ATNs) which only the ANTLR4 tool can give us. However, on each generation run ANTLR not only produces your parser + lexer files but also interpreter data files (*.interp) which contain all you need to feed the interpreters.

A support class (`InterpreterDataReader`) is used to load the data for your convenience, which makes this very easy to use. Btw. even the Java target go this route instead of using the non-runtime classes `Grammar` and `LexerGrammar`. Sometimes it might not be feasible to use the tool jar for whatever reason.

Here's how the setup looks like (C++ example):

```cpp
/**
 * sourceFileName - name of the file with content to parse
 * lexerName - the name of your lexer (arbitrary, that's what is used in error messages)
 * parserName - ditto for the parser
 * lexerDataFileName - the lexer interpeter data file name (e.g. `<path>/ExprLexer.interp`)
 * parserDataFileName - ditto for the parser (e.g. `<path>/Expr.interp`)
 * startRule - the name of the rule to start parsing at
 */
void parse(std::string const& sourceFileName,
  std::string const& lexerName, std::string const& parserName,
  std::string const& lexerDataFileName, std::string const& parserDataFileName,
  std::string const& startRule) {
  
    InterpreterData lexerData = InterpreterDataReader::parseFile(lexerDataFileName);
    InterpreterData parserData = InterpreterDataReader::parseFile(parserDataFileName);

    ANTLRFileStream input(sourceFileName);
    LexerInterpreter lexEngine(lexerName, lexerData.vocabulary, lexerData.ruleNames,
      lexerData.channels, lexerData.modes, lexerData.atn, &input);
    CommonTokenStream tokens(&lexEngine);

    /* Remove comment to print the tokens.
    tokens.fill();
    std::cout << "INPUT:" << std::endl;
    for (auto token : tokens.getTokens()) {
      std::cout << token->toString() << std::endl;
    }
    */

    ParserInterpreter parser(parserName, parserData.vocabulary, parserData.ruleNames,
      parserData.atn, &tokens);
    tree::ParseTree *tree = parser.parse(parser.getRuleIndex(startRule));

    std::cout << "parse tree: " << tree->toStringTree(&parser) << std::endl;
}
```

<a id="target-agnostic-grammars.md"></a>
<a id="/doc/target-agnostic-grammars.md"></a>

# Writing target-agnostic grammars

Some grammars require
[semantic predicates](https://github.com/antlr/antlr4/blob/dev/doc/predicates.md)
to add context-sensitive parsing to what would generally be a context-free grammar.

For example:
* In Fortran90, [lines that begin with a 'C' in column 1
are comments](https://github.com/antlr/grammars-v4/blob/43fbb16fec1d474d38a603cc6a6bcbe5edf07b1e/fortran/fortran90/slow/hw.f90#L1),
which should be placed on a token stream other than the default.
But, if the 'C' does not begin in
column 1, then the input is invalid and should be flagged as so.
	```fortran
	c Hello World.
	   c This is a syntax error because 'c' does not start in column 1
	program hello
		print *, 'Hello World!'
	end
	```

* In CSharp, two [greater-than signs](https://util.unicode.org/UnicodeJsps/character.jsp?a=003E)
`'>>'` can either mean
[a right shift expression](https://github.com/antlr/grammars-v4/blob/43fbb16fec1d474d38a603cc6a6bcbe5edf07b1e/csharp/examples/AllInOneNoPreprocessor.cs#L657C15-L657C17)
or [part of a type declaration with templates](https://github.com/antlr/grammars-v4/blob/master/csharp/examples/AllInOneNoPreprocessor.cs#L463C33-L463C35).
Since lexers in Antlr are not parser aware,
the lexer must tokenize the two greater-than signs as two separate tokens.
A semantic predicate should be added to disallow a space between the two greater-than signs in the context
of an expression, but allowed in the context of a type declaration. 
	```C#
	class Foo {
		void Func()
		{
			int x = 1000 > > 2;               // syntax error if a space exists in the double greater-than sign
		}
		Dictionary<int, List<int> > mapping;  // nested template declaration, valid
	}
	```

Antlr does not have a general-purpose language for predicates. These must be
written in the target language of the generated parser. The problem is that
a grammar would need to be forked for each target desired, which adds to the
burden of maintenance.

However, it is possible to write the grammar such that forking is not required,
using _target-agnostic format_.

## Rules in writing target-agnostic grammars

1) You will need to [split your grammar](https://github.com/antlr/antlr4/blob/dev/doc/grammars.md#grammar-structure)
into separate lexer and parser grammars. Then, add `options { tokenVocab=...; }` to the parser grammar.
2) Create target-specific source code files that contain methods in a base class for
the parser or lexer grammar. In these source code files, write the code for the semantic
predicate. For example, the files for the Cpp target would be `Python3LexerBase.{cpp,h}`, `Python3ParserBase.{cpp,h}`.
3) In the grammar(s), add `options { superClass=... }`. This will
[superclass the recognizer](https://github.com/antlr/antlr4/blob/dev/doc/options.md#superclass).
For example, `options { superclass=Python3ParserBase; }`.
4) In the grammar(s), write code to make a single
call to the base-class method. The call should have a `this.` string
before the name of the method, e.g., `OPEN_PAREN : '(' {this.openBrace();};`
The action code must not reference Antlr attributes,
variables, types, or have semi-colons as statement separators or
control-flow statements of any kind.
5) For some targets like Cpp and PHP, you may need to add code to include source
code files so that the generated code compiles.
For these, add a comment
such as `// Insert here @header for lexer include.` or `// Insert here @header for parser include.`
to the grammar, before the first rule.
5) Add a Python script called "transformGrammar.py" that rewrites the grammar(s) 
with some target-specific code syntax.
   a) For Cpp: replace `this.` strings with `this->`.
   b) For PHP: replace `this.` strings with `$this->`.
   c) For Python: replace `this.` strings with `self.`, `l.`, or `p.` depending on
where the action or predicate is in the grammar.
   d) For Cpp: replace `// Insert here @header for lexer include.` (or parser) with
`@header::lexer {#include ...}`.
   e) For PHP: replace `// Insert here @header for lexer include.` (or parser) with
`@header::lexer {require ...}`.
   e) Run `python transformGrammar.py *.g4` before generating the parser and lexer.

## Examples of target-agnostic grammars
* [fortran90](https://github.com/antlr/grammars-v4/tree/master/fortran/fortran90)
* [csharp](https://github.com/antlr/grammars-v4/tree/master/csharp)

<a id="resources.md"></a>
<a id="/doc/resources.md"></a>

# Articles and Resources

## Books

<a href=""><img src="https://github.com/antlr/antlr4/raw/master/doc/images/tpantlr2.png" width=120></a>
<a href=""><img src="https://github.com/antlr/antlr4/raw/master/doc/images/tpdsl.png" width=120></a>

<a href="https://www.youtube.com/watch?v=OAoA3E-cyug"><img src="https://github.com/antlr/antlr4/raw/master/doc/images/teronbook.png" width=250></a>

## Articles

* [Playing with ANTLR4, Primefaces extensions for Code Mirror and web-based DSLs](http://leonotepad.blogspot.com.br/2014/01/playing-with-antlr4-primefaces.html)
* [A Tale of Two Grammars](https://dexvis.wordpress.com/2012/11/22/a-tale-of-two-grammars/)
* [ANTLR 4: using the lexer, parser and listener with example grammar](http://www.theendian.com/blog/antlr-4-lexer-parser-and-listener-with-example-grammar/)
* [Creating External DSLs using ANTLR and Java](http://java.dzone.com/articles/creating-external-dsls-using)

## Presentations

* [Introduction to ANTLR 4 by Oliver Zeigermann](https://docs.google.com/presentation/d/1XS_VIdicCQVonPK6AGYkWTp-3VeHfGuD2l8yNMpAfuQ/edit#slide=id.p)

## Videos

<a href="https://vimeo.com/59285751"><img src="https://github.com/antlr/antlr4/raw/master/doc/images/tertalk.png" width=200></a>

## Resources

* [Stack overflow ANTLR4 tag](http://stackoverflow.com/questions/tagged/antlr4)
* [Antlr 4 with C# and Visual Studio 2012](http://programming-pages.com/2013/12/14/antlr-4-with-c-and-visual-studio-2012/)
* [ANTLR Language Support in VisualStudio](http://visualstudiogallery.msdn.microsoft.com/25b991db-befd-441b-b23b-bb5f8d07ee9f)
* [Upgrading to ANTLR 4 with C#](http://andrevdm.blogspot.com/2013/08/upgrading-to-antlr-4-with-c.html)
* [Generate parsers with Antlr4 via Maven](http://ljelonek.wordpress.com/2014/01/03/generate-parsers-with-antlr4-via-maven/)
* [Exploring ANTLR v4](http://johnsquibb.like97.com/blog/read/exploring-antlr-v4)
* [antlr4dart](http://pub.dartlang.org/packages/antlr4dart)
<a id="antlr-project-testing.md"></a>
<a id="/doc/antlr-project-testing.md"></a>

# ANTLR project unit tests

## Introduction

Because ANTLR supports multiple target languages, the unit tests are broken into two groups:
the unit tests that test the tool itself (in `tool-testsuite`) and the unit tests that test the parser runtimes (in `antlr4/runtime-testsuite`).
The tool tests are straightforward because they are Java code testing Java code; see the section at the bottom of this file.

The runtime tests must be specified in a generic fashion to work across language targets.
Furthermore, the various targets from Java must be tested.

This usually means Java launching processes to compile, say, C++ and run parsers.

As of 4.10, a Java descriptor file held as an [RuntimeTestDescriptor.java](../runtime-testsuite/test/org/antlr/v4/test/runtime/RuntimeTestDescriptor.java)
is used to represent each runtime test.

Each test is described with a text file with various sections and resides in a group directory;
see [directories under descriptors' dir](../runtime-testsuite/resources/org/antlr/v4/test/runtime/descriptors).
Here is a sample test descriptor:

```
[notes]
This is a regression test for blah blah blah...

[type]
Parser

[grammar]
grammar T;
a : ID* {
<writeln("$text")>
};
ID : 'a'..'z'+;
WS : (' '|'\n') -> skip;

[start]
a

[input]
a b c

[output]
"""abc
"""
```

The grammars are strings representing StringTemplates (`ST` objects) so `<writeln("$text")>` will get replace when the unit test file is generated (`Test.java`, `Test.cs`, ...).
The `writeln` template must be defined per target.
Here are all the 
[Target templates for runtime tests](../runtime-testsuite/resources/org/antlr/v4/test/runtime/templates).
Use triple-quotes `"""` when whitespace matters (usually input/output sections).

## Requirements

In order to perform the tests on all target languages, the following tools should be installed:

* dotnet
* Node.js
* Python 3
* Go
* Swift
* Clang (Linux, Mac) or MSBuild (Windows) for C++
* Dart
* PHP

To **install into local repository** `~/.m2/repository/org/antlr`, do this:

```bash
$ export MAVEN_OPTS="-Xmx1G"  # don't forget this on linux
$ mvn install -DskipTests     # make sure all artifacts are visible on this machine
```

## Running the runtime tests

A single test rig is sufficient to test all targets against all descriptors using the [junit dynamic tests](https://junit.org/junit5/docs/current/user-guide/#writing-tests-dynamic-tests) mechanism.
But it's often convenient to test just a single target or perhaps even just a single test within a single group of a single target.
IntelliJ automatically generates a bunch of
[Target runtime test rigs](../runtime-testsuite/test/org/antlr/v4/test/runtime) that allows developers such flexibility.
For example, here are the Python3 test rigs in IntelliJ:

![testrigs](images/testrigs.png)

And the result of testing the entire subdirectory:

![python3-tests](images/python3-tests.png)

All test are run in parallel both via maven and via IDE.

In IntelliJ, it's very easy to go to source by right-clicking on any test and pressing `Jump to source` (F4).

## Running test subsets

From the `runtime-testsuite` dir

### Run all tests for a single target

```bash
$ cd runtime-testsuite
$ export MAVEN_OPTS="-Xmx1G"     # don't forget this on linux
$ mvn -Dtest='java.**' test
-------------------------------------------------------
 T E S T S
-------------------------------------------------------
[INFO] Running org.antlr.v4.test.runtime.java.TestIntegerList
[INFO] Running org.antlr.v4.test.runtime.java.JavaRuntimeTests
...
[INFO] Tests run: 6, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.023 s - in org.antlr.v4.test.runtime.java.TestIntegerList
[INFO] Tests run: 348, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 19.269 s - in org.antlr.v4.test.runtime.java.JavaRuntimeTests
...
```

## Adding a runtime test

To add a new runtime test, first determine which [group (dir) of tests](../runtime-testsuite/resources/org/antlr/v4/test/runtime/descriptors) it belongs to.
Then, add a new descriptor file implementation by filling in one of these (omitting unused sections):

```
[notes]

[type]

[grammar]

[slaveGrammar]

[start]

[input]

[output]

[errors]

[flags]

[skip]
```

Your best bet is to find a similar test in the appropriate group and then copy and paste the descriptor file, creating a new file within the test group dir.
Modify the sections to suit your new problem.
 
### Ignoring tests

In order to turn off a test for a particular target, the `skip` section in the descriptor file should be used.
For example, the following skips PHP and Dart targets:

```
[skip]
PHP
Dart
```

### Target API/library testing

Some parts of the runtime API need to be tested with code written specifically in the target language.
For example, all the Java runtime API tests are placed here:

[runtime-testsuite/test/org/antlr/v4/test/runtime/java/api](../runtime-testsuite/test/org/antlr/v4/test/runtime/java/api)

Notice that it is under an `api` dir. The directory above is where all of the `*Test*` files go.

### Cross-language actions embedded within grammars

To get:

```
System.out.println($set.stop);
```

Use instead the language-neutral:

```
<writeln("$set.stop")>
```

Template file [Java.test.stg](../runtime-testsuite/resources/org/antlr/v4/test/runtime/templates/Java.test.stg) has templates like:

```
writeln(s) ::= <<System.out.println(<s>);>>
```

that translate generic operations to target-specific language statements or expressions.

## Adding an ANTLR tool unit test

Just go into the appropriate Java test class in dir [antlr4/tool-testsuite/test/org/antlr/v4/test/tool](../tool-testsuite/test/org/antlr/v4/test/tool) and add your unit test.



<a id="building-antlr.md"></a>
<a id="/doc/building-antlr.md"></a>

# Building ANTLR

Most programmers do not need the information on this page because they will simply download the appropriate jar(s) or use ANTLR through maven (via ANTLR's antlr4-maven-plugin). If you would like to fork the project and fix bugs or tweak the runtime code generation, then you will almost certainly need to build ANTLR itself. There are two components:

 1. the tool that compiles grammars down into parsers and lexers in one of the target languages
 1. the runtime used by those generated parsers and lexers.

I will assume that the root directory is `/tmp` for the purposes of explaining how to build ANTLR in this document.

*As of 4.6, ANTLR tool and Java-target runtime requires Java 7. As of 4.10, we have verified that the tool itself builds with Java 8 and 11.*

# Get the source

The first step is to get the Java source code from the ANTLR 4 repository at github. You can download the repository from github, but the easiest thing to do is simply clone the repository on your local disk:

```bash
$ cd /tmp
/tmp $ git clone https://github.com/antlr/antlr4.git
Cloning into 'antlr4'...
remote: Counting objects: 61480, done.
remote: Total 61480 (delta 0), reused 0 (delta 0), pack-reused 61480
Receiving objects: 100% (61480/61480), 31.24 MiB | 7.18 MiB/s, done.
Resolving deltas: 100% (32970/32970), done.
Checking connectivity... done.
Checking out files: 100% (1427/1427), done.
```

# Check your environment

If you are starting from a clean, minimum Ubuntu OS, check your environment.


```bash
$ sudo apt-get update
$ # Get Java
$ java > /dev/null 2>&1
$ if [[ "$?" != "0" ]]; then sudo apt install -y openjdk-11-jre-headless; fi
$ # Get Mvn
$ mvn > /dev/null 2>&1
$ if [[ "$?" != "0" ]]; then sudo apt install -y maven; fi

```

# Compile

The current maven build seems complicated to me because there is a dependency of the project on itself. The runtime tests naturally depend on the current version being available but it won't compile without the current version.  Once you have the generated/installed jar, mvn builds but otherwise there's a dependency on what you are going to build.  You will get this error when you try to clean but you can ignore it:

```
[INFO] ANTLR 4 Runtime Tests (4th generation) ............. FAILURE [  0.073 s]
...
[ERROR] Plugin org.antlr:antlr4-maven-plugin:4.10-SNAPSHOT or one of its dependencies could not be resolved: Could not find artifact org.antlr:antlr4-maven-plugin:jar:4.10-SNAPSHOT -> [Help 1]
```

To be super squeaky clean, you can wipe out the repository cache, then do the build:

```
$ export MAVEN_OPTS="-Xmx1G"   # don't forget this on linux
cd /tmp/antlr4 # or wherever you have the software
rm -rf ~/.m2/repository/org/antlr*
mvn clean
mvn -DskipTests install
```

**NOTE:** We do `install` not `compile` as tool tests and such refer to modules that must be pulled from the maven install local cache.

Once you have completed this process once and there is a jar hanging around in the repository cache.

# Installing libs to mvn cache locally

To skip the tests (which require all the target languages be installed) and **install into local repository** `~/.m2/repository/org/antlr`, do this:

```bash
$ export MAVEN_OPTS="-Xmx1G"     # don't forget this on linux
$ mvn install -DskipTests   # make sure all artifacts are visible on this machine
```

You should see these jars (when building 4.6-SNAPSHOT):

```bash
/Users/parrt/.m2/repository/org/antlr $ find antlr4* -name '*.jar'
antlr4-maven-plugin/4.6-SNAPSHOT/antlr4-maven-plugin-4.6-SNAPSHOT.jar
antlr4-runtime-testsuite/4.6-SNAPSHOT/antlr4-runtime-testsuite-4.6-SNAPSHOT-tests.jar
antlr4-runtime-testsuite/4.6-SNAPSHOT/antlr4-runtime-testsuite-4.6-SNAPSHOT.jar
antlr4-runtime/4.6-SNAPSHOT/antlr4-runtime-4.6-SNAPSHOT.jar
antlr4-tool-testsuite/4.6-SNAPSHOT/antlr4-tool-testsuite-4.6-SNAPSHOT.jar
antlr4/4.6-SNAPSHOT/antlr4-4.6-SNAPSHOT-tests.jar
antlr4/4.6-SNAPSHOT/antlr4-4.6-SNAPSHOT.jar
```

Note that ANTLR is written in itself, which is why maven downloads antlr4-4.5.jar for boostrapping 4.6-SNAPSHOT purposes.

# Testing tool and targets

See [ANTLR project unit tests](#antlr-project-testing.md).


# Building without testing

To build without running the tests (saves a lot of time), do this:

```bash
$ mvn -DskipTests install
```

## Building ANTLR in Intellij IDE

After download ANTLR source, just "import project from existing sources" and click on the "Maven Projects" tab in right gutter of IDE. It should build stuff in the background automatically and look like:

<img src="https://github.com/antlr/antlr4/raw/master/doc/images/intellij-maven.png" width=200>

<a id="creating-a-language-target.md"></a>
<a id="/doc/creating-a-language-target.md"></a>

# Creating an ANTLR Language Target

This document describes how to make ANTLR generate parsers in a new language, *X*.

## Overview

Creating a new target involves the following key elements:

1. For the tool, create class *X*Target as a subclass of class `Target` in package `org.antlr.v4.codegen.target`.
   This class describes language specific details about escape characters and strings and so on.
   There is very little to do here typically.
2. Create `*X*.stg` in directory `tool/resources/org/antlr/v4/tool/templates/codegen/*X*/*X*.stg`.
   This is a [StringTemplate](http://www.stringtemplate.org/) group file (`.stg`) that tells ANTLR how to express
   all the parsing elements needed to generate code.
   You will see templates called `ParserFile`, `Parser`, `Lexer`, `CodeBlockForAlt`, `AltBlock`, etc...
   Each of these must be described how to build the indicated chunk of code.
   Your best bet is to find the closest existing target, copy that template file, and tweak to suit.
3. Create a runtime library to support the parsers generated by ANTLR.
   Under directory `runtime/*X*`, you are in complete control of the directory structure as dictated by common usage of that target language.
   For example, Java has: `runtime/Java/lib` and `runtime/Java/src` directories.
   Under `src`, you will find a directory structure for package `org.antlr.v4.runtime` and below.
4. Create a template file for runtime tests.
   All you have to do is provide a few templates that indicate how to print values and declare variables.
   Our runtime test mechanism in dir `runtime-testsuite` will automatically generate code using these templates for each target and check the test results.
   It needs to know how to define various class fields, compare members and so on.
   You must create a `*X*.test.stg` file underneath [runtime-testsuite/resources/org/antlr/v4/test/runtime](../runtime-testsuite/resources/org/antlr/v4/test/runtime)
   and `Test.*x*.stg` underneath [runtime-testsuite/resources/org/antlr/v4/test/runtime/helpers](../runtime-testsuite/resources/org/antlr/v4/test/runtime/helpers).
   Again, your best bet is to copy the templates from the closest language to your target and tweak it to suit.
6. Create test files under [/runtime-testsuite/test/org/antlr/v4/test/runtime](../runtime-testsuite/test/org/antlr/v4/test/runtime).
   They will load defined test cases in each test descriptor.
   Also add the `/runtime-testsuite/test/org/antlr/v4/test/runtime/X/BaseXTest.java` which defines how test cases will execute and output.
7. Create/edit shell scripts in [/.github](../.github) to run tests in CI pipelines.

## Getting started

1. Fork the `antlr/antlr4` repository at GitHub to your own user so that you have repository `username/antlr4`.
2. Clone `username/antlr4`, the forked repository, to your local disk.
   Your remote `origin` will be the forked repository on GitHub.
   Add a remote `upstream` to the original `antlr/antlr4` repository (URL `https://github.com/antlr/antlr4.git`).
   Changes that you would like to contribute back to the project are done with [pull requests](https://help.github.com/articles/using-pull-requests/).
3. Try to build it before doing anything

```bash
$ mvn compile
```

That should proceed with success. See [Building ANTLR](#building-antlr.md) for more details.

## Comparing your target's parsing decisionmaking with Java's

ANTLR's power comes from it's dynamic parsing strategy, but that means each target
must implement that complicated algorithm. You should compare your target's debug
output for ParserATNSimulator with Java's.

Run this so we get right jars before trying this script:

```
cd ANTLR-ROOT-DIR
mvn install -DskipTests=true
cd runtime-tests 
mvn install -DskipTests=true # yes do it again
```

Run the script from `runtime-tests` dir with

```
../scripts/traceatn.sh /tmp/JSON.g4 json -target Go /tmp/foo.json
```

or whatever your test grammar, start rule, target, test input are.

### Debugging the PHP target

Because the PHP target is hosted in a separate repository, you will need to clone the [antlr/php-antlr-runtime](https://github.com/antlr/antlr-php-runtime)
repository into the `runtime/PHP` and install the dependencies with `composer install` before you can run the tests.

```
git clone -b dev https://github.com/antlr/antlr-php-runtime.git runtime/PHP
cd runtime/PHP
composer install
```

<a id="releasing-antlr.md"></a>
<a id="/doc/releasing-antlr.md"></a>

# Cutting an ANTLR Release

## Github

### Get dev merged into master

Do this or make a PR:

```bash
cd ~/antlr/code/antlr4
git checkout master
git merge dev
```

### Turn on DCO Enforcement

As of 4.10.1, we will be using the Linux DCO not the previous contributors license agreement that required signing the file. Now, we use the DCO and contributors must use `-s` on each commit to the branch associated with a pull request.

See [GitHub App DCO](https://github.com/apps/dco).

Make sure this feature is turned on for the `antlr4` repo upon release.

### Delete existing release tag

Wack any existing tag as mvn will create one and it fails if already there.

```
$ git tag -d 4.13.2
$ git push origin :refs/tags/4.13.2
$ git push upstream :refs/tags/4.13.2
```

### Go release tags

*I don't think this is necessary anymore as we have moved it release branch to https://github.com/antlr4-go/antlr*

It seems that [Go needs a `v` in the release git tag](https://go.dev/ref/mod#glos-version) so make sure that we double up with 4.13.2 and v4.13.2.

```
$ git tag -a runtime/Go/antlr/v4/v4.13.2 -m "Go runtime module only" 
$ git push upstream runtime/Go/antlr/v4/v4.13.2
$ git push origin runtime/Go/antlr/v4/v4.13.2
```


## Bump version in code and other files

There are a number of files that require inversion number be updated.


Here is a simple script to display any line from the critical files with, say, `4.11.1` in it.  Here's an example run of the script:

```bash
~/antlr/code/antlr4 $ python scripts/update_antlr_version.py 4.13.1 4.13.2
Updating ANTLR version from 4.13.1 to 4.13.2
Set ANTLR repo root (default ~/antlr/code/antlr4): 
Perform antlr4 `mvn clean` and wipe build dirs Y/N? (default no): 
Ok, not cleaning antlr4 dir
4.13.1 appears on 2 lines so _not_ updating /tmp/antlr4/runtime/JavaScript/package-lock.json
4.13.1 not in /tmp/antlr4/doc/releasing-antlr.md
```

Make sure this file doesn't have `-SNAPSHOT` when releasing!

```
runtime/Java/src/org/antlr/v4/runtime/RuntimeMetaData.java
```

It's also worth doing a quick check to see if you find any other references to a version:

```bash
mvn clean
find . -type f -exec grep -l '4\.12.0' {} \; | grep -v -E '\.o|\.a|\.jar|\.dylib|node_modules/|\.class|tests/|CHANGELOG|\.zip|\.gz|.iml|.svg'
```

Commit to repository.

### PHP runtime

We only have to copy the PHP runtime into the ANTLR repository to run the unittests. But, we still need to bump the version to 4.13.2 in `~/antlr/code/antlr-php-runtime/src/RuntimeMetaData.php` in the separate repository, commit, and push.

```
cd ~/antlr/code/antlr-php-runtime/src
git checkout dev # Should be the default
git pull origin dev
... vi RuntimeMetaData.php ...
git commit -a -m "Update PHP Runtime to latest version"
git push origin dev
git checkout master
git pull origin master
git merge dev
git push origin master
```

## Build XPath parsers

This section addresses a [circular dependency regarding XPath](https://github.com/antlr/antlr4/issues/3600). In the java target I avoided a circular dependency (gen 4.13.2 parser for XPath using 4.13.2 which needs it to build) by hand building the parser: runtime/Java/src/org/antlr/v4/runtime/tree/xpath/XPath.java.  Probably we won't have to rerun this for the patch releases, just major ones that alter the ATN serialization.

```bash
cd ~/antlr/code/antlr4/runtime/Cpp/runtime/src/tree/xpath
java -cp ":/Users/parrt/.m2/repository/org/antlr/antlr4/4.13.2-SNAPSHOT/antlr4-4.13.2-SNAPSHOT-complete.jar:$CLASSPATH" org.antlr.v4.Tool -Dlanguage=Cpp XPathLexer.g4

cd ~/antlr/code/antlr4/runtime/CSharp/src/Tree/Xpath
java -cp ":/Users/parrt/.m2/repository/org/antlr/antlr4/4.13.2-SNAPSHOT/antlr4-4.13.2-SNAPSHOT-complete.jar:$CLASSPATH" org.antlr.v4.Tool -Dlanguage=CSharp XPathLexer.g4

cd ~/antlr/code/antlr4/runtime/Python3/tests/expr
java -cp ":/Users/parrt/.m2/repository/org/antlr/antlr4/4.13.2-SNAPSHOT/antlr4-4.13.2-SNAPSHOT-complete.jar:$CLASSPATH" org.antlr.v4.Tool -Dlanguage=Python3 Expr.g4
cd ~/antlr/code/antlr4/runtime/Python3/src/antlr4/xpath
java -cp ":/Users/parrt/.m2/repository/org/antlr/antlr4/4.13.2-SNAPSHOT/antlr4-4.13.2-SNAPSHOT-complete.jar:$CLASSPATH" org.antlr.v4.Tool -Dlanguage=Python3 XPathLexer.g4
```

## Maven Repository Settings

First, make sure you have maven set up to communicate with staging servers etc...  Create file `~/.m2/settings.xml` with appropriate username/password for staging server and gpg.keyname/passphrase for signing. Make sure it has strict visibility privileges to just you. On unix, it looks like:

```bash
beast:~/.m2 $ ls -l settings.xml 
-rw-------  1 parrt  staff  914 Jul 15 14:42 settings.xml
```

Here is the file template

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!--
  User-specific configuration for maven. Includes things that should not
  be distributed with the pom.xml file, such as developer identity, along with
  local settings, like proxy information.
-->
<settings>
   <servers>
        <server>
          <id>sonatype-nexus-staging</id>
          <username>sonatype-username</username>
          <password>XXX</password>
        </server>
        <server>
          <id>sonatype-nexus-snapshots</id>
          <username>sonatype-username</username>
          <password>XXX</password>
        </server>
   </servers>
    <profiles>
            <profile>
              <activation>
                    <activeByDefault>false</activeByDefault>
              </activation>
              <properties>
                    <gpg.keyname>UUU</gpg.keyname>
                    <gpg.passphrase>XXX</gpg.passphrase>
              </properties>
            </profile>
    </profiles>
</settings>
```

## Maven deploy snapshot

The goal is to get a snapshot, such as `4.13.2-SNAPSHOT`, to the staging server: [antlr4 tool](https://oss.sonatype.org/content/repositories/snapshots/org/antlr/antlr4/4.13.2-SNAPSHOT/) and [antlr4 java runtime](https://oss.sonatype.org/content/repositories/snapshots/org/antlr/antlr4-runtime/4.13.2-SNAPSHOT/).

Do this:

```bash
$ mvn install -DskipTests  # seems required to get the jar files visible to maven
$ mvn deploy -DskipTests
...
Uploading: https://oss.sonatype.org/content/repositories/snapshots/org/antlr/antlr4-tool-testsuite/maven-metadata.xml
Uploaded: https://oss.sonatype.org/content/repositories/snapshots/org/antlr/antlr4-tool-testsuite/maven-metadata.xml (388 B at 0.9 KB/sec)
[INFO] ------------------------------------------------------------------------
[INFO] Reactor Summary:
[INFO] 
[INFO] ANTLR 4 ............................................ SUCCESS [  4.073 s]
[INFO] ANTLR 4 Runtime .................................... SUCCESS [ 13.828 s]
[INFO] ANTLR 4 Tool ....................................... SUCCESS [ 14.032 s]
[INFO] ANTLR 4 Maven plugin ............................... SUCCESS [  6.547 s]
[INFO] ANTLR 4 Runtime Test Annotations ................... SUCCESS [  2.519 s]
[INFO] ANTLR 4 Runtime Test Processors .................... SUCCESS [  2.385 s]
[INFO] ANTLR 4 Runtime Tests (4th generation) ............. SUCCESS [ 15.276 s]
[INFO] ANTLR 4 Tool Tests ................................. SUCCESS [  2.233 s]
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 01:01 min
[INFO] Finished at: 2016-12-11T09:37:54-08:00
[INFO] Final Memory: 44M/470M
[INFO] ------------------------------------------------------------------------
```

## Maven release

The maven deploy lifecycle phased deploys the artifacts and the poms for the ANTLR project to the [sonatype remote staging server](https://oss.sonatype.org/content/repositories/snapshots/).

```bash
mvn deploy -DskipTests
```

Make sure `gpg` is installed (`brew install gpg` on mac). Also must [create a key and publish it](https://blog.sonatype.com/2010/01/how-to-generate-pgp-signatures-with-maven/) then update `.m2/settings` to use that public key.

Then:

```bash
mvn release:prepare -Darguments="-DskipTests"
```

Hmm...per https://github.com/keybase/keybase-issues/issues/1712 we need this to make gpg work:

```bash
export GPG_TTY=$(tty)
```

You should see 0x37 in generated .class files after 0xCAFEBABE; see [Java SE 11 = 55 (0x37 hex)](https://en.wikipedia.org/wiki/Java_class_file):

```bash
~/antlr/code/antlr4 $ od -h tool/target/classes/org/antlr/v4/Tool.class |head -1
0000000      feca    beba    0000    3700    ed04    0207    0a9d    0100
                                     ^^
```

Also verify run time is 1.8:

```bash
od -h runtime/Java/target/classes/org/antlr/v4/runtime/Token.class | head -1
0000000      feca    beba    0000    3400    2500    0007    0722    2300
```

It will start out by asking you the version number:

```
...
What is the release version for "ANTLR 4"? (org.antlr:antlr4-master) 4.13.2: : 4.13.2
What is the release version for "ANTLR 4 Runtime"? (org.antlr:antlr4-runtime) 4.13.2: : 
What is the release version for "ANTLR 4 Tool"? (org.antlr:antlr4) 4.13.2: : 
What is the release version for "ANTLR 4 Maven plugin"? (org.antlr:antlr4-maven-plugin) 4.13.2: : 
What is the release version for "ANTLR 4 Runtime Test Generator"? (org.antlr:antlr4-runtime-testsuite) 4.13.2: : 
What is the release version for "ANTLR 4 Tool Tests"? (org.antlr:antlr4-tool-testsuite) 4.13.2: : 
What is SCM release tag or label for "ANTLR 4"? (org.antlr:antlr4-master) antlr4-master-4.13.2: : 4.13.2
What is the new development version for "ANTLR 4"? (org.antlr:antlr4-master) 4.13.3-SNAPSHOT:
...
```

Maven will go through your pom.xml files to update versions from 4.13.2-SNAPSHOT to 4.13.2 for release and then to 4.13.2-SNAPSHOT after release, which is done with:

```bash
mvn release:perform -Darguments="-DskipTests"
```

Maven will use git to push pom.xml changes.

Now, go here:

&nbsp;&nbsp;&nbsp;&nbsp;[https://oss.sonatype.org/#welcome](https://oss.sonatype.org/#welcome)

and on the left click "Staging Repositories". You click the staging repo and close it, then you refresh, click it and release it. It's done when you see it here:

&nbsp;&nbsp;&nbsp;&nbsp;[https://oss.sonatype.org/service/local/repositories/releases/content/org/antlr/antlr4-runtime/4.13.2/antlr4-runtime-4.13.2.jar](https://oss.sonatype.org/service/local/repositories/releases/content/org/antlr/antlr4-runtime/4.13.2/antlr4-runtime-4.13.2.jar)

All releases should be here: [https://repo1.maven.org/maven2/org/antlr/antlr4-runtime](https://repo1.maven.org/maven2/org/antlr/antlr4-runtime).

## Deploying Targets

### JavaScript

**Push to npm**

(I think this has to be run before the unit test can run locally as it installs the global lib)

```bash
cd ~/antlr/code/antlr4/runtime/JavaScript
rm -rf node_modules # seems we might need this later but try it here
npm update
npm install
npm run build 
npm login     # asks for username/password/2FA (npmjs.com)
npm publish   # don't put antlr4 on there or it will try to push the old version for some reason
```

Move (and zip) target to website:

```bash
cd src
zip -r ~/antlr/sites/website-antlr4/download/antlr-javascript-runtime-4.13.2.zip .
```

### CSharp

As of writing, you can only release from a Windows box, because Visual Studio for Mac can only build the netstandard2.0 version

**Install the pre-requisites**

You need 'msbuild' and `nuget` to be installed. 

**Creating the signed assembly**

cd ~/antlr/code/antlr4/runtime/CSharp/src
dotnet build -c Release Antlr4.csproj

check that the bin/Release folder contains both the netstandard2.0 and the net45 builds
the binaries are already signed, but it's worth double checking

sn -v bin/Release/netstandard2.0/Antlr4.Runtime.Standard.dll
sn -v bin/Release/net45/Antlr4.Runtime.Standard.dll

both should say the dll is valid

**Publishing to NuGet**

You need to be a NuGet owner for "ANTLR 4 Standard Runtime"
As a registered NuGet user, you can then manually upload the package here: [https://www.nuget.org/packages/manage/upload](https://www.nuget.org/packages/manage/upload)

Alternately, you can publish from the cmd line. You need to get your NuGet key from [https://www.nuget.org/account#](https://www.nuget.org/account#) and then from the cmd line, you can then type:

```cmd
cd bin/Release
nuget push Antlr4.Runtime.Standard.<version>.nupkg <your-key> -Source https://www.nuget.org/api/v2/package
```

### Python

The Python target gets deployed with `twine` for Python 3.

First, set up `~/.pypirc` with tight privileges:

```bash
beast:~ $ ls -l ~/.pypirc
-rw-------  1 parrt  staff  267 Jul 15 17:02 /Users/parrt/.pypirc
```

```
[distutils] # this tells distutils what package indexes you can push to
index-servers =
    pypi
    pypitest

[pypi]
username: parrt
password: xxx

[pypitest]
username: parrt
password: xxx
```

Then run the python build and upload:

```bash
cd ~/antlr/code/antlr4/runtime/Python3
python -m build
# assume you have ~/.pypirc set up
twine upload dist/antlr4_python3_runtime-4.13.2.tar.gz dist/antlr4_python3_runtime-4.13.2-py3-none-any.whl
```

There are links to the artifacts in [download.html](http://www.antlr.org/download.html) already.

### C++

The C++ target is the most complex one, because it addresses multiple platforms, which require individual handling. We have 4 scenarios to cover:

* **Windows**: static and dynamic libraries for the VC++ runtime 2017 or 2019 (corresponding to Visual Studio 2017 or 2019) + header files. All that in 32 and 64bit, debug + release.
* **MacOS**: static and dynamic release libraries + header files.
* **iOS**: no prebuilt binaries, but just a zip of the source, including the XCode project to build everything from source.
* **Linux**: no prebuilt binaries, but just a zip of the source code, including the cmake file to build everything from source there.

In theory we could also create a library for iOS, but that requires to sign it, which depends on an active iOS developer account. So we leave this up to the ANTLR user to build the iOS lib, like we do for Linux builds.

For each platform there's a deployment script which generates zip archives and copies them to the target folder. The Windows deployment script must be run on a machine with VS 2013 + VS 2015 installed. The Mac script must be run on a machine with XCode 7+ installed. The source script can be executed on any Linux or Mac box.

On a Mac (with XCode 7+ installed):

```bash
cd ~/antlr/code/antlr4/runtime/Cpp
rm CMakeCache.txt  # otherwise can't find some include files
./deploy-macos.sh
cp antlr4-cpp-runtime-macos.zip ~/antlr/sites/website-antlr4/download/antlr4-cpp-runtime-4.13.2-macos.zip
```

On any Mac or Linux machine:

```bash
cd ~/antlr/code/antlr4/runtime/Cpp
./deploy-source.sh
cp antlr4-cpp-runtime-source.zip ~/antlr/sites/website-antlr4/download/antlr4-cpp-runtime-4.13.2-source.zip
```

On a Windows machine the build scripts checks if VS 2017 and/or VS 2019 are installed and builds binaries for each, if found. This script requires 7z to be installed (http://7-zip.org then do `set PATH=%PATH%;C:\Program Files\7-Zip\` from DOS not powershell).

```bash
cd ~/antlr/code/antlr4/runtime/Cpp
deploy-windows.cmd Community
cp antlr4-cpp-runtime-vs2019.zip ~/antlr/sites/website-antlr4/download/antlr4-cpp-runtime-4.13.2-vs2019.zip
```

Move target to website (**_rename to a specific ANTLR version first if needed_**):

```bash
pushd ~/antlr/sites/website-antlr4/download
git add antlr4-cpp-runtime-4.13.2-macos.zip
git add antlr4-cpp-runtime-4.13.2-windows.zip
git add antlr4-cpp-runtime-4.13.2-source.zip
git commit -a -m 'update C++ runtime'
git push origin gh-pages
popd
```

### Dart

Install Dart SDK from https://dart.dev/get-dart

Push to pub.dev

```bash
cd ~/antlr/code/antlr4/runtime/Dart
dart pub publish
```

It will warn that no change log found for the new version.
Otherwise enter `N` to ignore the warning.

## Update website

### javadoc for runtime and tool

Jars are in:

```
~/.m2/repository/org/antlr/antlr4-runtime/4.13.2/antlr4-runtime-4.13.2
```

### Update version and copy jars / api

Copy javadoc and java jars to website using this script:

```bash
cd ~/antlr/code/antlr4
python scripts/deploy_to_website.py 4.13.1 4.13.2
```

Output:

```bash
Updating ANTLR version from 4.13.1 to 4.13.2
Set ANTLR website root (default /Users/parrt/antlr/sites/website-antlr4): 
Version string updated. Please commit/push:
Javadoc copied:
	api/Java updated from antlr4-runtime-4.13.2-javadoc.jar
	api/JavaTool updated from antlr4-4.13.2-javadoc.jar
Jars copied:
	antlr-4.13.2-complete.jar
	antlr-runtime-4.13.2.jar

Please look for and add new api files!!
Then MANUALLY commit/push:

git commit -a -m 'Update website, javadoc, jars to 4.13.2'
git push origin gh-pages
```

<!--
```bash
cp ~/.m2/repository/org/antlr/antlr4-runtime/4.13.2/antlr4-runtime-4.13.2.jar ~/antlr/sites/website-antlr4/download/antlr-runtime-4.13.2.jar
cp ~/.m2/repository/org/antlr/antlr4/4.13.2/antlr4-4.13.2-complete.jar ~/antlr/sites/website-antlr4/download/antlr-4.13.2-complete.jar
cd ~/antlr/sites/website-antlr4/download
git add antlr-4.13.2-complete.jar
git add antlr-runtime-4.13.2.jar 
```
-->

Once it's done, you must do the following manually:

```
cd ~/antlr/sites/website-antlr4
git commit -a -m 'Update website, javadoc, jars to 4.13.2'
git push origin gh-pages
```

<!--
Then copy to website:

```bash
cd ~/antlr/sites/website-antlr4/api
git checkout gh-pages
git pull origin gh-pages
cd Java
jar xvf ~/.m2/repository/org/antlr/antlr4-runtime/4.13.2/antlr4-runtime-4.13.2-javadoc.jar
cd ../JavaTool
jar xvf ~/.m2/repository/org/antlr/antlr4/4.13.2/antlr4-4.13.2-javadoc.jar
git commit -a -m 'freshen api doc'
git push origin gh-pages
```
-->

## Get fresh dev branch

```bash
git checkout master
git pull upstream master
git checkout dev
git pull upstream dev
git merge master
git push origin dev
git push upstream dev
```

## Other updates 

* Rebuild antlr Intellij plug-in with new antlr jar.
* Cut release notes in github
* Update lab.antlr.org

<a id="CONTRIBUTING.md"></a>
<a id="/CONTRIBUTING.md"></a>

# Contributing to ANTLR 4

1. [Fork](https://help.github.com/articles/fork-a-repo) the [antlr/antlr4 repo](https://github.com/antlr/antlr4), which will give you both key branches, `master` and `dev`
2. Make sure to `git checkout dev` in your fork so that you are working from the latest development branch
3. Create and work from a branch derived from `dev` such as `git checkout -b your-branch-name`
4. Install and configure [EditorConfig](http://editorconfig.org/) so your text editor or IDE uses the ANTLR 4 coding style
5. [Build ANTLR 4](doc/building-antlr.md)
6. [Run the ANTLR project unit tests](doc/antlr-project-testing.md)
7. Create a [pull request](https://help.github.com/articles/using-pull-requests/) with your changes and make sure you're comparing your `dev`-derived branch in your fork to the `dev` branch from the `antlr/antlr4` repo:

<img src="doc/images/PR-on-dev.png" width="600">

**Note:** Each commit requires a "signature", which is simple as using `-s` (not 
`-S`) to the git commit command:

```
git commit -s -m 'This is my commit message'
```

Github's pull request process enforces the sig and gives instructions on how to 
fix any commits that lack the sig. See [Github DCO app](https://github.com/apps/dco) 
for more info.

<a id="getting-started.md"></a>
<a id="/doc/faq/getting-started.md"></a>

# Getting started

## How to I install and run a simple grammar?

See [Getting Started with ANTLR v4](https://raw.githubusercontent.com/antlr/antlr4/master/doc/getting-started.md).

## Why does my parser test program hang?

Your test program is likely not hanging but simply waiting for you to type some input for standard input. Don't forget that you need to type the end of file character, generally on a line by itself, at the end of the input. On a Mac or Linux machine it is ctrl-D, as gawd intended, or ctrl-Z on a Windows machine.

See [Getting Started with ANTLR v4](https://raw.githubusercontent.com/antlr/antlr4/master/doc/getting-started.md).
<a id="actions-preds.md"></a>
<a id="/doc/faq/actions-preds.md"></a>

# Actions and semantic predicates

## How do I test if an optional rule was matched?

For optional rule references such as the initialization clause in the following

```
decl : 'var' ID (EQUALS expr)? ;
```

testing to see if that clause was matched can be done using `$EQUALS!=null` or `$expr.ctx!=null` where `$expr.ctx` points to the context or parse tree created for that reference to rule expr.
<a id="error-handling.md"></a>
<a id="/doc/faq/error-handling.md"></a>

# Error handling

## How do I perform semantic checking with ANTLR?

See [How to implement error handling in ANTLR4](http://stackoverflow.com/questions/21613421/how-to-implement-error-handling-in-antlr4/21615751#21615751).

<a id="general.md"></a>
<a id="/doc/faq/general.md"></a>

# General

## Why do we need ANTLR v4?

*Oliver Zeigermann asked me some questions about v4. Here is our conversation.*

*See the [preface from the book](http://media.pragprog.com/titles/tpantlr2/preface.pdf)*

**Q: Why is the new version of ANTLR also called “honey badger”?**

ANTLR v4 is called the honey badger release after the fearless hero of the YouTube sensation, The Crazy Nastyass Honey Badger.

**Q: Why did you create a new version of ANTLR?**

Well, I start creating a new version because v3 had gotten very messy on the inside and also relied on grammars written in ANTLR v2. Unfortunately, v2's open-source license was unclear and so projects such as Eclipse could not include v3 because of its dependency on v2. In the end, Sam Harwell converted all of the v2 grammars into v3 so that v3 was written in itself. Because v3 has a very clean BSD license, the Eclipse project okayed for inclusion in that project in the summer of 2011.

As I was rewriting ANTLR, I wanted to experiment with a new variation of the LL(\*) parsing algorithm. As luck would have it, I came up with a cool new version called adaptive LL(\*) that pushes all of the grammar analysis effort to runtime. The parser warms up like Java does with its JIT on-the-fly compiler; the code gets faster and faster the longer it runs. The benefit is that the adaptive algorithm is much stronger than the static LL(\*) grammar analysis algorithm in v3. Honey Badger takes any grammar that you give it; it just doesn't give a damn. (v4 accepts even left recursive grammars, except for indirectly left recursive grammars where x calls y which calls x).

v4 is the culmination of 25 years of research into parsers and parser generators. I think I finally know what I want to build. :)

**Q: What makes you excited about ANTLR4?**

The biggest thing is the new adaptive parsing strategy, which lets us accept any grammar we care to write. That gives us a huge productivity boost because we can now write much more natural expression rules (which occur in almost every grammar). For example, bottom-up parser generators such as yacc let you write very natural grammars like this:

```
e : e '*' e
  | e '+' e
  | INT
  ;
```

ANTLR v4 will also take that grammar now, translating it secretly to a non-left recursive version.

Another big thing with v4 is that my goal has shifted from performance to ease-of-use. For example, ANTLR automatically can build parse trees for you and generate listeners and visitors. This is not only a huge productivity win, but also an important step forward in building grammars that don't depend on embedded actions. Those embedded actions (raw Java code or whatever) locked the grammar into use with only one language. If we keep all of the actions out of the grammar and put them into external visitors, we can reuse the same grammar to generate code in any language for which we have an ANTLR target.

**Q: What do you think are the things people had problems with in ANTLR3?**

The biggest problem was figuring out why ANTLR did not like their grammar. The static analysis often could not figure out how to generate a parser for the grammar. This problem totally goes away with the honey badger because it will take just about anything you give it without a whimper.

**Q: And what with other compiler generator tools?**

The biggest problem for the average practitioner is that most parser generators do not produce code you can load into a debugger and step through. This immediately removes bottom-up parser generators and the really powerful GLR parser generators from consideration by the average programmer. There are a few other tools that generate source code like ANTLR does, but they don't have v4's adaptive LL(\*) parsers. You will be stuck with contorting your grammar to fit the needs of the tool's weaker, say, LL(k) parsing strategy. PEG-based tools have a number of weaknesses, but to mention one, they have essentially no error recovery because they cannot report an error and until they have parsed the entire input.

**Q: What are the main design decisions in ANTLR4?**

Ease-of-use over performance. I will worry about performance later. Simplicity over complexity. For example, I have taken out explicit/manual AST construction facilities and the tree grammar facilities. For 20 years I've been trying to get people to go that direction, but I've since decided that it was a mistake. It's much better to give people a parser generator that can automatically build trees and then let them use pure code to do whatever tree walking they want. People are extremely familiar and comfortable with visitors, for example.

**Q: What do you think people will like most on ANTLR4?**

The lack of errors when you run your grammar through ANTLR. The automatic tree construction and listener/visitor generation.

**What do you think are the problems people will try to solve with ANTLR4?**

In my experience, almost no one uses parser generators to build commercial compilers. So, people are using ANTLR for their everyday work, building everything from configuration files to little scripting languages.

In response to a question about this entry from stackoverflow.com: I believe that compiler developers are very concerned with parsing speed, error reporting, and error recovery. For that, they want absolute control over their parser. Also, some languages are so complicated, such as C++, that parser generators might build parsers slower than compiler developers want. The compiler developers also like the control of a recursive-descent parser for predicating the parse to handle context-sensitive constructs such as `T(i)` in C++.

There is also likely a sense that parsing is the easy part of building a compiler so they don't immediately jump automatically to parser generators. I think this is also a function of previous generation parser generators. McPeak's Elkhound GLR-based parser generator is powerful enough and fast enough, in the hands of someone that knows what they're doing, to be suitable for compilers. I can also attest to the fact that ANTLR v4 is now powerful enough and fast enough to compete well with handbuilt parsers. E.g., after warm-up, it's now taking just 1s to parse the entire JDK java/\* library.

## What is the difference between ANTLR 3 and 4?

The biggest difference between ANTLR 3 and 4 is that ANTLR 4 takes any grammar you give it unless the grammar had indirect left recursion. That means we don't need syntactic predicates or backtracking so ANTLR 4 does not support that syntax; you will get a warning for using it. ANTLR 4 allows direct left recursion so that expressing things like arithmetic expression syntax is very easy and natural:

```
expr : expr '*' expr
     | expr '+' expr
     | INT
     ;
```

ANTLR 4 automatically constructs parse trees for you and abstract syntax tree (AST) construction is no longer an option. See also [What if I need ASTs not parse trees for a compiler, for example?](https://github.com/antlr/antlr4/blob/master/doc/faq/parse-trees.md#what-if-i-need-asts-not-parse-trees-for-a-compiler-for-example).

Another big difference is that we discourage the use of actions directly within the grammar because ANTLR 4 automatically generates [listeners and visitors](https://github.com/antlr/antlr4/blob/master/doc/listeners.md) for you to use that trigger method calls when some phrases of interest are recognized during a tree walk after parsing. See also [Parse Tree Matching and XPath](https://github.com/antlr/antlr4/blob/master/doc/tree-matching.md).

Semantic predicates are still allowed in both the parser and lexer rules as our actions.  For efficiency sake keep semantic predicates to the right edge of lexical rules.

There are no tree grammars because we use listeners and visitors instead.

## Why is my expression parser slow?

Make sure to use two-stage parsing. See example in [bug report](https://github.com/antlr/antlr4/issues/374).

```Java

CharStream input = CharStreams.fromPath(Paths.get(args[0]));
ExprLexer lexer = new ExprLexer(input);
CommonTokenStream tokens = new CommonTokenStream(lexer);
ExprParser parser = new ExprParser(tokens);
parser.getInterpreter().setPredictionMode(PredictionMode.SLL);
try {
    parser.stat();  // STAGE 1
}
catch (Exception ex) {
    tokens.reset(); // rewind input stream
    parser.reset();
    parser.getInterpreter().setPredictionMode(PredictionMode.LL);
    parser.stat();  // STAGE 2
    // if we parse ok, it's LL not SLL
}
```

<a id="index.md"></a>
<a id="/doc/faq/index.md"></a>

# Frequently-Asked Questions (FAQ)

This is the main landing page for the ANTLR 4 FAQ. The links below will take you to the appropriate file containing all answers for that subcategory.

*To add to or improve this FAQ, [fork](https://help.github.com/articles/fork-a-repo/) the [antlr/antlr4 repo](https://github.com/antlr/antlr4) then update this `doc/faq/index.md` or file(s) in that directory.  Submit a [pull request](https://help.github.com/articles/creating-a-pull-request/) to get your changes incorporated into the main repository. Do not mix code and FAQ updates in the sample pull request.* **You must sign the contributors.txt certificate of origin with your pull request if you've not done so before.**

## Getting Started

* [How to I install and run a simple grammar?](#getting-started.md)
* [Why does my parser test program hang?](#getting-started.md)

## Installation

* [Why can't ANTLR (grun) find my lexer or parser?](#installation.md)
* [Why can't I run the ANTLR tool?](#installation.md)
* [Why doesn't my parser compile?](#installation.md)

## General

* [Why do we need ANTLR v4?](#general.md)
* [What is the difference between ANTLR 3 and 4?](#general.md)
* [Why is my expression parser slow?](#general.md)

## Grammar syntax

## Lexical analysis

* [How can I parse non-ASCII text and use characters in token rules?](#lexical.md)
* [How do I replace escape characters in string tokens?](#lexical.md)
* [Why are my keywords treated as identifiers?](#lexical.md)
* [Why are there no whitespace tokens in the token stream?](#lexical.md)

## Parse Trees

* [How do I get the input text for a parse-tree subtree?](#parse-trees.md)
* [What if I need ASTs not parse trees for a compiler, for example?](#parse-trees.md)
* [When do I use listener/visitor vs XPath vs Tree pattern matching?](#parse-trees.md)

## Translation

* [ASTs vs parse trees](#translation.md)
* [Decoupling input walking from output generation](#translation.md)

## Actions and semantic predicates

* [How do I test if an optional rule was matched?](#actions-preds.md)

## Error handling

* [How do I perform semantic checking with ANTLR?](#error-handling.md)

<a id="installation.md"></a>
<a id="/doc/faq/installation.md"></a>

# Installation

Please read carefully: [Getting Started with ANTLR v4](https://raw.githubusercontent.com/antlr/antlr4/master/doc/getting-started.md).

## Why can't ANTLR (grun) find my lexer or parser?

If you see "Can't load Hello as lexer or parser", it's because you don't have '.' (current directory) in your CLASSPATH.

```bash
$ alias antlr4='java -jar /usr/local/lib/antlr-4.2.2-complete.jar'
$ alias grun='java org.antlr.v4.runtime.misc.TestRig'
$ export CLASSPATH="/usr/local/lib/antlr-4.2.2-complete.jar"
$ antlr4 Hello.g4
$ javac Hello*.java
$ grun Hello r -tree
Can't load Hello as lexer or parser
$
```

For mac/linux, use:

```bash
export CLASSPATH=".:/usr/local/lib/antlr-4.2.2-complete.jar:$CLASSPATH"
```

or for Windows:

```
SET CLASSPATH=.;C:\Javalib\antlr4-complete.jar;%CLASSPATH%
```

**See the dot at the beginning?** It's critical.

## Why can't I run the ANTLR tool?

If you get a no class definition found error, you are missing the ANTLR jar in your `CLASSPATH` (or you might only have the runtime jar):

```bash
/tmp $ java org.antlr.v4.Tool Hello.g4
Exception in thread "main" java.lang.NoClassDefFoundError: org/antlr/v4/Tool
Caused by: java.lang.ClassNotFoundException: org.antlr.v4.Tool
    at java.net.URLClassLoader$1.run(URLClassLoader.java:202)
    at java.security.AccessController.doPrivileged(Native Method)
    at java.net.URLClassLoader.findClass(URLClassLoader.java:190)
    at java.lang.ClassLoader.loadClass(ClassLoader.java:306)
    at sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:301)
    at java.lang.ClassLoader.loadClass(ClassLoader.java:247)
```

## Why doesn't my parser compile?

If you see these kinds of errors, it's because you don't have the runtime or complete ANTLR library in your CLASSPATH.

```bash
/tmp $ javac Hello*.java
HelloBaseListener.java:3: package org.antlr.v4.runtime does not exist
import org.antlr.v4.runtime.ParserRuleContext;
                           ^
...
```

<a id="lexical.md"></a>
<a id="/doc/faq/lexical.md"></a>

# Lexical analysis

## How can I parse non-ASCII text and use characters in token rules?

See [Using non-ASCII characters in token rules](http://stackoverflow.com/questions/28126507/antlr4-using-non-ascii-characters-in-token-rules/28129510#28129510).

## How do I replace escape characters in string tokens?

Unfortunately, manipulating the text of the token matched by a lexical rule is cumbersome (as of 4.2).  You have to build up a buffer and then set the text at the end. Actions in the lexer execute at the associated position in the input just like they do in the parser. Here's an example that does escape character replacement in strings. It's not pretty but it works.

```
grammar Foo;
 
@members {
StringBuilder buf = new StringBuilder(); // can't make locals in lexer rules
}
 
STR :   '"'
        (   '\\'
            (   'r'     {buf.append('\r');}
            |   'n'     {buf.append('\n');}
            |   't'     {buf.append('\t');}
            |   '\\'    {buf.append('\\');}
            |   '\"'   {buf.append('"');}
            )
        |   ~('\\'|'"') {buf.append((char)_input.LA(-1));}
        )*
        '"'
        {setText(buf.toString()); buf.setLength(0); System.out.println(getText());}
    ;
```

It's easier and more efficient to return original input string and then use a small function to rewrite the string later during a parse tree walk or whatever. But, here's how to do it from within the lexer.

Lexer actions don't work in the interpreter, which includes xpath and tree patterns.

For more on the argument against doing complicated things in the lexer, see the [related lexer-action issue at github](https://github.com/antlr/antlr4/issues/483#issuecomment-37326067).

## Why are my keywords treated as identifiers?

Keywords such as `begin` are also valid identifiers lexically and so that input is ambiguous. To resolve ambiguities, ANTLR gives precedence to the lexical rules specified first. That implies that you must put the identifier rule after all of your keywords:

```
grammar T;
 
decl : DEF 'int' ID ';'
 
DEF : 'def' ;   // ambiguous with ID as is 'int'
ID  : [a-z]+ ;
```

Notice that literal `'int'` is also physically before the ID rule and will also get precedence.

## Why are there no whitespace tokens in the token stream?

The lexer is not sending white space to the parser, which means that the rewrite stream doesn't have access to the tokens either. It is because of the skip lexer command:

```
WS : [ \t\r\n\u000C]+ -> skip
   ;
```

You have to change all those to `-> channel(HIDDEN)` which will send them to the parser on a different channel, making them available in the token stream, but invisible to the parser.
<a id="parse-trees.md"></a>
<a id="/doc/faq/parse-trees.md"></a>

# Parse Trees

## How do I get the input text for a parse-tree subtree?

In ParseTree, you have this method:

```java
/** Return the combined text of all leaf nodes. Does not get any
 * off-channel tokens (if any) so won't return whitespace and
 * comments if they are sent to parser on hidden channel.
 */
String getText();
```

But, you probably want this method from TokenStream:

```java
/**
 * Return the text of all tokens in the source interval of the specified
 * context. This method behaves like the following code, including potential
 * exceptions from the call to {@link #getText(Interval)}, but may be
 * optimized by the specific implementation.
 *
 * <p>If {@code ctx.getSourceInterval()} does not return a valid interval of
 * tokens provided by this stream, the behavior is unspecified.</p>
 *
 * <pre>
 * TokenStream stream = ...;
 * String text = stream.getText(ctx.getSourceInterval());
 * </pre>
 *
 * @param ctx The context providing the source interval of tokens to get
 * text for.
 * @return The text of all tokens within the source interval of {@code ctx}.
 */
public String getText(RuleContext ctx);
```

That is, do this:

```
mytokens.getText(mySubTree);
```

## What if I need ASTs not parse trees for a compiler, for example?

For writing a compiler, either generate [LLVM-type static-single-assignment](http://llvm.org/docs/LangRef.html) form or construct an AST from the parse tree using a listener or visitor. Or, use actions in grammar, turning off auto-parse-tree construction.

## When do I use listener/visitor vs XPath vs Tree pattern matching?

### XPath

XPath works great when you need to find specific nodes, possibly in certain contexts. The context is limited to the parents on the way to the root of the tree. For example, if you want to find all ID nodes, use path `//ID`. If you want all variable declarations, you might use path `//vardecl`.  If you only want fields declarations, then you can use some context information via path `/classdef/vardecl`, which would only find vardecls that are children of class definitions. You can merge the results of multiple XPath `findAll()`s simulating a set union for XPath. The only caveat is that the order from the original tree is not preserved when you union multiple `findAll()` sets.

### Tree pattern matching

Use tree pattern matching when you want to find specific subtree structures such as all assignments to 0 using pattern `x = 0;`.  (Recall that these are very convenient because you specify the tree structure in the concrete syntax of the language described by the grammar.) If you want to find all assignments of any kind, you can use pattern `x = <expr>;` where `<expr>` will find any expression. This works great for matching particular substructures and therefore gives you a bit more ability to specify context. I.e., instead of just finding all identifiers, you can find all identifiers on the left hand side of an expression.

### Listeners/Visitors

Using the listener or visitor interfaces give you the most power but require implementing more methods. It might be more challenging to discover the emergent behavior of the listener than a simple tree pattern matcher that says *go find me X under node Y*.

Listeners are great when you want to visit many nodes in a tree.

Listeners allow you to compute and save context information necessary for processing at various nodes. For example, when building a symbol table manager for a compiler or translator, you need to compute symbol scopes such as globals, class, function, and code block. When you enter a class or function, you push a new scope and then pop it when you exit that class or function. When you see a symbol, you need to define it or look it up in the proper scope. By having enter/exit listener functions push and pop scopes, listener functions for defining variables simply say something like:

```java
scopeStack.peek().define(new VariableSymbol("foo"))
```

That way each listener function does not have to compute its appropriate scope.

Examples: [DefScopesAndSymbols.java](https://github.com/mantra/compiler/blob/master/src/java/mantra/semantics/DefScopesAndSymbols.java) and [SetScopeListener.java](https://github.com/mantra/compiler/blob/master/src/java/mantra/semantics/SetScopeListener.java) and [VerifyListener.java](https://github.com/mantra/compiler/blob/master/src/java/mantra/semantics/VerifyListener.java)

<a id="translation.md"></a>
<a id="/doc/faq/translation.md"></a>

# Translation

## ASTs vs parse trees

I used to do specialized AST (**abstract** syntax tree) nodes rather than (concrete) parse trees because I used to think more about compilation and generating bytecode/assembly code. When I started thinking more about translation, I started using parse trees. For v4, I realized that I did mostly translation.  I guess what I'm saying is that maybe parse trees are not as good as ASTs for generating bytecodes. Personally, I would rather see `(+ 3 4)` rather than `(expr 3 + 4)` for generating byte codes, but it's not the end of the world. (*Can someone fill this in?*)

## Decoupling input walking from output generation

I suggest creating an intermediate model that represents your output. You walk the parse tree to collect information and create your model. Then, you could almost certainly automatically walk this internal model to generate output based upon stringtemplates that match the class names of the internal model. In other words, define a special `IFStatement` object that has all of the fields you want and then create them as you walk the parse tree. This decoupling of the input from the output is very powerful. Just because we have a parse tree listener doesn't mean that the parse tree itself is necessarily the best data structure to hold all information necessary to generate code. Imagine a situation where the output is the exact reverse of the input. In that case, you really want to walk the input just to collect data. Generating output should be driven by the internal model not the way it was represented in the input.
<a id="README.md"></a>
<a id="/docker/README.md"></a>

# Docker Image for ANTLR4

This Docker image wraps current version of **ANTLR4** inclusive **Java runtime environment** so it can be executed as transparent command line tool even on machines without installed Java.

## Docker Image

The image uses the official [eclipse-temurin:11](https://hub.docker.com/_/eclipse-temurin/tags?page=1&name=11&ordering=-name) image
for building a distribution of ANTLR4 and [eclipse-temurin:11-jre](https://hub.docker.com/_/eclipse-temurin/tags?page=1&name=11-jre&ordering=-name) for runtime.

## Build

You can build docker image from source code locally. 

    git clone https://github.com/antlr/antlr4.git
    cd antlr4/docker
    docker build -t antlr/antlr4 --platform linux/amd64 .


## Run

For security reasons is **ANTLR4 Docker image** designed to run in the current folder only, so a container doesn't have any access to any other folders on a host system. Since this is a transparent call of Docker image from command line, where new files are generated, it is also a good idea to execute code inside a Docker as a non root user and match it to the host caller.

Calling a dockerized ANTLR4 image can look like this:

```shell
wget https://raw.githubusercontent.com/antlr/grammars-v4/master/json/JSON.g4
docker run --rm -u $(id -u ${USER}):$(id -g ${USER}) -v `pwd`:/work antlr/antlr4 -Dlanguage=Go JSON.g4
```

## Integration as alias

      alias antlr4='docker run -it -u $(id -u ${USER}):$(id -g ${USER}) -v $(pwd):/work antlr/antlr4 $@'



<a id="Antlr4Package.md"></a>
<a id="/runtime/Cpp/cmake/Antlr4Package.md"></a>

# CMake Antlr4 Package Usage

## The `antlr4-generator` Package

To use the Package you must insert a
```cmake
find_package(antlr4-generator REQUIRED)
```
line in your `CMakeList.txt` file.

The package exposes a function `antlr4_generate` that generates the required setup to call ANTLR for a
given input file during build.

The following table lists the parameters that can be used with the function:

Argument# | Required  | Default | Use
----------|-----------|---------|---
0 | Yes | n/a | Unique target name. It is used to generate CMake Variables to reference the various outputs of the generation
1 | Yes | n/a | Input file containing the lexer/parser definition
2 | Yes | n/a | Type of Rules contained in the input: LEXER, PARSER or BOTH
4 | No  | FALSE | Boolean to indicate if a listener interface should be generated
5 | No  | FALSE | Boolean to indicate if a visitor interface should be generated
6 | No  | none | C++ namespace in which the generated classes should be placed
7 | No  | none | Additional files on which the input depends
8 | No  | none | Library path to use during generation

The `ANTLR4_JAR_LOCATION` CMake variable must be set to the location where the `antlr-4*-complete.jar` generator is located. You can download the file from [here](http://www.antlr.org/download.html).

Additional options to the ANTLR4 generator can be passed in the `ANTLR4_GENERATED_OPTIONS` variable. Add the installation prefix of `antlr4-runtime` to `CMAKE_PREFIX_PATH` or set
 `antlr4-runtime_DIR` to a directory containing the files.

The following CMake variables are available following a call to `antlr4_generate`

Output variable  | Meaning
---|---
`ANTLR4_INCLUDE_DIR_<Target name>`       | Directory containing the generated header files
`ANTLR4_SRC_FILES_<Target name>`         | List of generated source files
`ANTLR4_TOKEN_FILES_<Target name>`       | List of generated token files
`ANTLR4_TOKEN_DIRECTORY_<Target name>`  | Directory containing the generated token files

#### Sample:
```cmake
 # generate parser with visitor classes.
 # put the classes in C++ namespace 'antlrcpptest::'
 antlr4_generate(
   antlrcpptest_parser
   ${CMAKE_CURRENT_SOURCE_DIR}/TLexer.g4
   LEXER
   FALSE
   TRUE
   "antlrcpptest"
   )
```

**Remember that the ANTLR generator requires a working Java installation on your machine!**

## The `antlr4-runtime` Package

To use the Package you must insert a
```cmake
find_package(antlr4-runtime REQUIRED)
```
line in your `CMakeList.txt` file.

The package exposes two different targets:

Target|Use
--|--
antlr4_shared|Shared library version of the runtime
antlr4_static|Static library version of the runtime

Both set the following CMake variables:

Output variable  | Meaning
---|---
`ANTLR4_INCLUDE_DIR` | Include directory containing the runtime header files
`ANTLR4_LIB_DIR`      | Library directory containing the runtime library files

#### Sample:
```cmake
# add runtime include directories on this project.
include_directories( ${ANTLR4_INCLUDE_DIR} )

# add runtime to project dependencies
add_dependencies( Parsertest antlr4_shared )

# add runtime to project link libraries
target_link_libraries( Parsertest PRIVATE
                       antlr4_shared)
```

### Full Example:
```cmake
 # Bring in the required packages
 find_package(antlr4-runtime REQUIRED)
 find_package(antlr4-generator REQUIRED)

 # Set path to generator
 set(ANTLR4_JAR_LOCATION ${PROJECT_SOURCE_DIR}/thirdparty/antlr/antlr-4.13.2-complete.jar)

 # generate lexer
 antlr4_generate(
   antlrcpptest_lexer
   ${CMAKE_CURRENT_SOURCE_DIR}/TLexer.g4
   LEXER
   FALSE
   FALSE
   "antlrcpptest"
   )

 # generate parser
 antlr4_generate(
   antlrcpptest_parser
   ${CMAKE_CURRENT_SOURCE_DIR}/TParser.g4
   PARSER
   FALSE
   TRUE
   "antlrcpptest"
   "${ANTLR4_TOKEN_FILES_antlrcpptest_lexer}"
   "${ANTLR4_TOKEN_DIRECTORY_antlrcpptest_lexer}"
   )

 # add directories for generated include files
 include_directories( ${PROJECT_BINARY_DIR} ${ANTLR4_INCLUDE_DIR} ${ANTLR4_INCLUDE_DIR_antlrcpptest_lexer} ${ANTLR4_INCLUDE_DIR_antlrcpptest_parser} )

 # add generated source files
 add_executable( Parsertest main.cpp ${ANTLR4_SRC_FILES_antlrcpptest_lexer} ${ANTLR4_SRC_FILES_antlrcpptest_parser} )

 # add required runtime library
 add_dependencies( Parsertest antlr4_shared )

 target_link_libraries( Parsertest PRIVATE
                        antlr4_shared)

```


<a id="README.md"></a>
<a id="/runtime/Cpp/cmake/README.md"></a>

## Getting started with Antlr4Cpp

Here is how you can use this external project to create the antlr4cpp demo to start your project off.

1. Create your project source folder somewhere. e.g. ~/srcfolder/
   1. Make a subfolder cmake
   2. Copy the files in this folder to srcfolder/cmake
   3. Cut below and use it to create srcfolder/CMakeLists.txt
   4. Copy main.cpp, TLexer.g4 and TParser.g4 to srcfolder/ from [here](https://github.com/antlr/antlr4/tree/master/runtime/Cpp/demo)
2. Make a build folder e.g. ~/buildfolder/
3. From the buildfolder, run `cmake ~/srcfolder; make`

```cmake
# minimum required CMAKE version
CMAKE_MINIMUM_REQUIRED(VERSION 3.7 FATAL_ERROR)

list(APPEND CMAKE_MODULE_PATH ${CMAKE_CURRENT_SOURCE_DIR}/cmake)

# compiler must be 17
set(CMAKE_CXX_STANDARD 17)

# required if linking to static library
add_definitions(-DANTLR4CPP_STATIC)

# using /MD flag for antlr4_runtime (for Visual C++ compilers only)
set(ANTLR4_WITH_STATIC_CRT OFF)

# Specify the version of the antlr4 library needed for this project.
# By default the latest version of antlr4 will be used.  You can specify a
# specific, stable version by setting a repository tag value or a link
# to a zip file containing the libary source.
# set(ANTLR4_TAG 4.13.2)
# set(ANTLR4_ZIP_REPOSITORY https://github.com/antlr/antlr4/archive/refs/tags/4.13.2.zip)

# add external build for antlrcpp
include(ExternalAntlr4Cpp)
# add antlr4cpp artifacts to project environment
include_directories(${ANTLR4_INCLUDE_DIRS})

# set variable pointing to the antlr tool that supports C++
# this is not required if the jar file can be found under PATH environment
set(ANTLR_EXECUTABLE /home/user/antlr-4.13.2-complete.jar)
# add macros to generate ANTLR Cpp code from grammar
find_package(ANTLR REQUIRED)

# Call macro to add lexer and grammar to your build dependencies.
antlr_target(SampleGrammarLexer TLexer.g4 LEXER
             PACKAGE antlrcpptest)
antlr_target(SampleGrammarParser TParser.g4 PARSER
             PACKAGE antlrcpptest
             DEPENDS_ANTLR SampleGrammarLexer
             COMPILE_FLAGS -lib ${ANTLR_SampleGrammarLexer_OUTPUT_DIR})

# include generated files in project environment
include_directories(${ANTLR_SampleGrammarLexer_OUTPUT_DIR})
include_directories(${ANTLR_SampleGrammarParser_OUTPUT_DIR})

# add generated grammar to demo binary target
add_executable(demo main.cpp
               ${ANTLR_SampleGrammarLexer_CXX_OUTPUTS}
               ${ANTLR_SampleGrammarParser_CXX_OUTPUTS})
target_link_libraries(demo antlr4_static)
```

## Documentation for FindANTLR

The module defines the following variables:

```
ANTLR_FOUND - true is ANTLR jar executable is found
ANTLR_EXECUTABLE - the path to the ANTLR jar executable
ANTLR_VERSION - the version of ANTLR
```

If ANTLR is found, the module will  provide the macros:

```
ANTLR_TARGET(<name> <input>
             [PACKAGE namespace]
             [OUTPUT_DIRECTORY dir]
             [DEPENDS_ANTLR <target>]
             [COMPILE_FLAGS [args...]]
             [DEPENDS [depends...]]
             [LEXER]
             [PARSER]
             [LISTENER]
             [VISITOR])
```

which creates a custom command to generate C++ files from `<input>`. Running the macro defines the following variables:

```
ANTLR_${name}_INPUT - the ANTLR input used for the macro
ANTLR_${name}_OUTPUTS - the outputs generated by ANTLR
ANTLR_${name}_CXX_OUTPUTS - the C++ outputs generated by ANTLR
ANTLR_${name}_OUTPUT_DIR - the output directory for ANTLR
```

The options are:

* `PACKAGE` - defines a namespace for the generated C++ files
* `OUTPUT_DIRECTORY` - the output directory for the generated files. By default it uses `${CMAKE_CURRENT_BINARY_DIR}`
* `DEPENDS_ANTLR` - the dependent target generated from antlr_target for the current call
* `COMPILE_FLAGS` - additional compile flags for ANTLR tool
* `DEPENDS` - specify the files on which the command depends. It works the same way `DEPENDS` in [`add_custom_command()`](https://cmake.org/cmake/help/v3.11/command/add_custom_command.html)
* `LEXER` - specify that the input file is a lexer grammar
* `PARSER` - specify that the input file is a parser grammar
* `LISTENER` - tell ANTLR tool to generate a parse tree listener
* `VISITOR` - tell ANTLR tool to generate a parse tree visitor

### Examples

To generate C++ files from an ANTLR input file T.g4, which defines both lexer and parser grammar one may call:

```cmake
find_package(ANTLR REQUIRED)
antlr_target(Sample T.g4)
```

Note that this command will do nothing unless the outputs of `Sample`, i.e. `ANTLR_Sample_CXX_OUTPUTS` gets used by some target.

## Documentation for ExternalAntlr4Cpp

Including ExternalAntlr4Cpp will add `antlr4_static` and `antlr4_shared` as an optional target. It will also define the following variables:

```
ANTLR4_INCLUDE_DIRS - the include directory that should be included when compiling C++ source file
ANTLR4_STATIC_LIBRARIES - path to antlr4 static library
ANTLR4_SHARED_LIBRARIES - path to antlr4 shared library
ANTLR4_RUNTIME_LIBRARIES - path to antlr4 shared runtime library (such as DLL, DYLIB and SO file)
ANTLR4_TAG - branch/tag used for building antlr4 library
```

`ANTLR4_TAG` is set to master branch by default to keep the antlr4 library up to date. However, this will require a rebuild after every `clean` is called. Set `ANTLR4_TAG` to a desired commit hash value to avoid rebuilding after every `clean` and keep the build stable, at the cost of not automatically updating to latest commit.

By defualt the ANTLR C++ runtime source is cloned from GitHub. However, users may specify `ANTLR4_ZIP_REPOSITORY` in order to download source as a zip file from [ANTLR downloads](http://www.antlr.org/download.html) (under *C++ Target*) or other locations. For example, this variable could list a zip file included in your the project directory.  This is useful for maintaining a canonical source tree for each new build.

Visual C++ compiler users may want to additionally define `ANTLR4_WITH_STATIC_CRT` before including the file. Set `ANTLR4_WITH_STATIC_CRT` to true if ANTLR4 C++ runtime library should be compiled with `/MT` flag, otherwise will be compiled with `/MD` flag. This variable has a default value of `OFF`. Changing `ANTLR4_WITH_STATIC_CRT` after building the library may require reinitialization of CMake or `clean` for the library to get rebuilt.

You may need to modify your local copy of ExternalAntlr4Cpp.cpp to modify some build settings. For example, to specify the C++ standard to use when building the runtime, add `-DCMAKE_CXX_STANDARD:STRING=17` to `CMAKE_CACHE_ARGS`.

### Examples

To build and link ANTLR4 static library to a target one may call:

```cmake
include(ExternalAntlr4Cpp)
include_directories(${ANTLR4_INCLUDE_DIRS})
add_executable(output main.cpp)
target_link_libraries(output antlr4_static)
```

It may also be a good idea to copy the runtime libraries (DLL, DYLIB or SO file) to the executable for it to run properly after build. i.e. To build and link antlr4 shared library to a target one may call:

```cmake
include(ExternalAntlr4Cpp)
include_directories(${ANTLR4_INCLUDE_DIRS})
add_executable(output main.cpp)
target_link_libraries(output antlr4_shared)
add_custom_command(TARGET output
                   POST_BUILD
                   COMMAND ${CMAKE_COMMAND}
                           -E copy ${ANTLR4_RUNTIME_LIBRARIES} .
                   WORKING_DIRECTORY ${CMAKE_CURRENT_BINARY_DIR})
```

<a id="generate.cmd"></a>
<a id="/runtime/Cpp/demo/generate.cmd"></a>



```bash
@echo off
:: Created 2016, Mike Lischke (public domain)

:: This script is used to generate source files from the test grammars in the same folder. The generated files are placed
:: into a subfolder "generated" which the demo project uses to compile a demo binary.

:: Download the ANLTR jar and place it in the same folder as this script (or adjust the LOCATION var accordingly).

set LOCATION=antlr-4.13.2-complete.jar
java -jar %LOCATION% -Dlanguage=Cpp -listener -visitor -o generated/ -package antlrcpptest TLexer.g4 TParser.g4
::java -jar %LOCATION% -Dlanguage=Cpp -listener -visitor -o generated/ -package antlrcpptest -XdbgST TLexer.g4 TParser.g4
::java -jar %LOCATION% -Dlanguage=Java -listener -visitor -o generated/ -package antlrcpptest TLexer.g4 TParser.g4
```


<a id="README.md"></a>
<a id="/runtime/Cpp/demo/README.md"></a>


# Demo application for the ANTLR 4 C++ target

This demo app shows how to build the ANTLR runtime both as dynamic and static library and how to use a parser generated from a simple demo grammar.

A few steps are necessary to get this to work:

- Download the current ANTLR jar and place it in this folder.
- Open the generation script for your platform (generate.cmd for Windows, generate.sh for *nix/OSX) and update the LOCATION var to the actual name of the jar you downloaded.
- Run the generation script. This will generate a test parser + lexer, along with listener + visitor classes in a subfolder named "generated". This is where the demo application looks for these files.
- Open the project in the folder that matches your system.
- Compile and run.

Compilation is done as described in the [runtime/cpp/readme.md](#README.md) file.

<a id="deploy-windows.cmd"></a>
<a id="/runtime/Cpp/deploy-windows.cmd"></a>


# runtime/Cpp/deploy-windows.cmd

```bash
@echo off
setlocal

if [%1] == [] goto Usage

rem Clean left overs from previous builds if there are any
if exist bin rmdir /S /Q runtime\bin
if exist obj rmdir /S /Q runtime\obj
if exist lib rmdir /S /Q lib
if exist antlr4-runtime rmdir /S /Q antlr4-runtime
if exist antlr4-cpp-runtime-vs2019.zip erase antlr4-cpp-runtime-vs2019.zip
if exist antlr4-cpp-runtime-vs2022.zip erase antlr4-cpp-runtime-vs2022.zip

rem Headers
echo Copying header files ...
xcopy runtime\src\*.h antlr4-runtime\ /s /q

rem Binaries
rem VS 2019 disabled by default. Change the X to a C to enable it.
if exist "X:\Program Files (x86)\Microsoft Visual Studio\2019\%1\Common7\Tools\VsDevCmd.bat" (
  echo.

  call "C:\Program Files (x86)\Microsoft Visual Studio\2019\%1\Common7\Tools\VsDevCmd.bat"

  pushd runtime
  msbuild antlr4cpp-vs2019.vcxproj /p:configuration="Release DLL" /p:platform=Win32
  msbuild antlr4cpp-vs2019.vcxproj /p:configuration="Release DLL" /p:platform=x64
  popd

  7z a antlr4-cpp-runtime-vs2019.zip antlr4-runtime
  xcopy runtime\bin\*.dll lib\ /s
  xcopy runtime\bin\*.lib lib\ /s
  7z a antlr4-cpp-runtime-vs2019.zip lib

  rmdir /S /Q lib
  rmdir /S /Q runtime\bin
  rmdir /S /Q runtime\obj

  rem if exist antlr4-cpp-runtime-vs2019.zip copy antlr4-cpp-runtime-vs2019.zip ~/antlr/sites/website-antlr4/download
)

set VCTargetsPath=C:\Program Files\Microsoft Visual Studio\2022\%1\MSBuild\Microsoft\VC\v170\
if exist "C:\Program Files\Microsoft Visual Studio\2022\%1\Common7\Tools\VsDevCmd.bat" (
  echo.

  call "C:\Program Files\Microsoft Visual Studio\2022\%1\Common7\Tools\VsDevCmd.bat"

  pushd runtime
  msbuild antlr4cpp-vs2022.vcxproj /p:configuration="Release DLL" /p:platform=Win32
  msbuild antlr4cpp-vs2022.vcxproj /p:configuration="Release DLL" /p:platform=x64
  popd

  7z a antlr4-cpp-runtime-vs2022.zip antlr4-runtime
  xcopy runtime\bin\*.dll lib\ /s
  xcopy runtime\bin\*.lib lib\ /s
  7z a antlr4-cpp-runtime-vs2022.zip lib

  rmdir /S /Q lib
  rmdir /S /Q runtime\bin
  rmdir /S /Q runtime\obj

  rem if exist antlr4-cpp-runtime-vs2022.zip copy antlr4-cpp-runtime-vs2022.zip ~/antlr/sites/website-antlr4/download
)

rmdir /S /Q antlr4-runtime
echo.
echo === Build done ===

goto end

:Usage

echo This script builds Visual Studio 2019 and/or 2022 libraries of the ANTLR4 runtime.
echo You have to specify the type of your VS installation (Community, Professional etc.) to construct
echo the correct build tools path.
echo.
echo Example:
echo   %0 Professional
echo.

:end
```

<a id="README.md"></a>
<a id="/runtime/Cpp/README.md"></a>

# C++ target for ANTLR 4

This folder contains the C++ runtime support for ANTLR.  See [the canonical antlr4 repository](https://github.com/antlr/antlr4) for in depth detail about how to use ANTLR 4.

## Authors and major contributors

ANTLR 4 is the result of substantial effort of the following people:

* [Terence Parr](http://www.cs.usfca.edu/~parrt/), parrt@cs.usfca.edu
  ANTLR project lead and supreme dictator for life
  [University of San Francisco](http://www.usfca.edu/)
* [Sam Harwell](http://tunnelvisionlabs.com/)
  Tool co-author, Java and C# target)

The C++ target has been the work of the following people:

* Dan McLaughlin, dan.mclaughlin@gmail.com (initial port, got code to compile)
* David Sisson, dsisson@google.com (initial port, made the runtime C++ tests runnable)
* [Mike Lischke](http://www.soft-gems.net), mike@lischke-online.de (brought the initial port to a working library, made most runtime tests passing)

## Other contributors

* Marcin Szalowicz, mszalowicz@mailplus.pl (cmake build setup)
* Tim O'Callaghan, timo@linux.com (additional superbuild cmake pattern script)

## Project Status

* Building on macOS, Windows, Android and Linux
* No errors and warnings
* Library linking
* Some unit tests in the macOS project, for important base classes with almost 100% code coverage.
* All memory allocations checked
* Simple command line demo application working on all supported platforms.
* All runtime tests pass.

### Build + Usage Notes

The minimum C++ version to compile the ANTLR C++ runtime with is C++17. The supplied projects can built the runtime either as static or dynamic library, as both 32bit and 64bit arch. The macOS project contains a target for iOS and can also be built using cmake (instead of XCode).

Include the antlr4-runtime.h umbrella header in your target application to get everything needed to use the library.

If you are compiling with cmake, the minimum version required is cmake 2.8.
By default, the libraries produced by the CMake build target C++17. If you want to target a different C++ standard, you can explicitly pass the standard - e.g. `-DCMAKE_CXX_STANDARD=17`.

#### Compiling on Windows with Visual Studio using he Visual Studio projects
Simply open the VS project from the runtime folder (VS 2019+) and build it.

#### Compiling on Windows using cmake with Visual Studio VS2019 and later
Use the "Open Folder" Feature from the File->Open->Folder menu to open the runtime/Cpp directory.
It will automatically use the CMake description to open up a Visual Studio Solution.

#### Compiling on macOS
Either open the included XCode project and build that or use the cmake compilation as described for linux.

#### Compiling on Android
Try run cmake -DCMAKE_ANDROID_NDK=/folder/of/android_ndkr17_and_above -DCMAKE_SYSTEM_NAME=Android -DCMAKE_ANDROID_API=14 -DCMAKE_ANDROID_ARCH_ABI=x86 -DCMAKE_ANDROID_STL_TYPE=c++_shared -DCMAKE_ANDROID_NDK_TOOLCHAIN_VERSION=clang -DCMAKE_BUILD_TYPE=Release /folder/antlr4_src_dir -G Ninja.

#### Compiling on Linux
- cd \<antlr4-dir\>/runtime/Cpp (this is where this readme is located)
- mkdir build && mkdir run && cd build
- cmake .. -DANTLR_JAR_LOCATION=full/path/to/antlr4-4.5.4-SNAPSHOT.jar -DWITH_DEMO=True
- make
- DESTDIR=\<antlr4-dir\>/runtime/Cpp/run make install

If you don't want to build the demo then replace the "cmake .. -DANTLR_JAR_LOCATION<...>" command in the above recipe with "cmake .." without any further parameters.
There is another cmake script available in the subfolder cmake/ for those who prefer the superbuild cmake pattern.

#### CMake Package support
If the CMake variable 'ANTLR4_INSTALL' is set, CMake Packages will be build and installed during the install step.
They expose two packages: antlr4_runtime and antlr4_generator which can be referenced to ease up the use of the
ANTLR Generator and runtime.
Use and Sample can be found [here](#Antlr4Package.md)

<a id="pack.cmd"></a>
<a id="/runtime/Cpp/runtime/nuget/pack.cmd"></a>


```bash
echo off
rem echo Usage:
rem echo ------
rem echo pack vsvers version [pre]      // pack 2019 4.9.1 -beta
rem echo ------
setlocal enableextensions enabledelayedexpansion

if "%1"=="" goto usage
if "%2"=="" goto usage
set PRE=%3
set PLATFORM=Win32

rem -version ^^[16.0^^,17.0^^)
set VS_VERSION=vs%1
rem  should be set "VSWHERE='%ProgramFiles(x86)%\Microsoft Visual Studio\Installer\vswhere.exe  -property installationPath -version ^[16.0^,17.0^)'"
if %VS_VERSION%==vs2019 (
  set "VSWHERE='C:\PROGRA~2\"Microsoft Visual Studio"\Installer\vswhere.exe  -latest -property installationPath -version ^[16.0^,17.0^)'"
) else (
if %VS_VERSION%==vs2022 (
  set "VSWHERE='C:\PROGRA~2\"Microsoft Visual Studio"\Installer\vswhere.exe  -latest -property installationPath -version ^[17.0^,18.0^)'"
)
)
for /f " delims=" %%a in (%VSWHERE%) do @set "VSCOMNTOOLS=%%a"

echo ============= %VSCOMNTOOLS% =============

if %VS_VERSION%==vs2019 (
  set VS_VARSALL=..\..\VC\Auxiliary\Build\vcvarsall.bat
  set "VS160COMNTOOLS=%VSCOMNTOOLS%\Common7\Tools\"
) else (
  if %VS_VERSION%==vs2022 (
    set VS_VARSALL=..\..\VC\Auxiliary\Build\vcvarsall.bat
    set "VS170COMNTOOLS=%VSCOMNTOOLS%\Common7\Tools\"
  ) else (
    set VS_VARSALL=..\..\VC\vcvarsall.bat
  )
)

if not defined VCINSTALLDIR (
  if %VS_VERSION%==vs2019 (
    if %PLATFORM%==x64 (
      call "%VS160COMNTOOLS%%VS_VARSALL%" x86_amd64 8.1
    ) else (
      call "%VS160COMNTOOLS%%VS_VARSALL%" x86 8.1
    )
  ) else (
    if %VS_VERSION%==vs2022 (
      if %PLATFORM%==x64 (
        call "%VS170COMNTOOLS%%VS_VARSALL%" x86_amd64 8.1
      ) else (
        call "%VS170COMNTOOLS%%VS_VARSALL%" x86 8.1
      )
    )
  )
)

if not defined VSINSTALLDIR (
  echo Error: No Visual cpp environment found.
  echo Please run this script from a Visual Studio Command Prompt
  echo or run "%%VSnnCOMNTOOLS%%\vsvars32.bat" first.
  goto :buildfailed
)


pushd ..\
call msbuild antlr4cpp-vs%1.vcxproj -t:rebuild -p:Platform=Win32 	-p:Configuration="Debug DLL"
call msbuild antlr4cpp-vs%1.vcxproj -t:rebuild -p:Platform=Win32 	-p:Configuration="Release DLL"
call msbuild antlr4cpp-vs%1.vcxproj -t:rebuild -p:Platform=Win32 	-p:Configuration="Debug Static"
call msbuild antlr4cpp-vs%1.vcxproj -t:rebuild -p:Platform=Win32 	-p:Configuration="Release Static"
call msbuild antlr4cpp-vs%1.vcxproj -t:rebuild -p:Platform=x64 		-p:Configuration="Debug DLL"
call msbuild antlr4cpp-vs%1.vcxproj -t:rebuild -p:Platform=x64 		-p:Configuration="Release DLL"
call msbuild antlr4cpp-vs%1.vcxproj -t:rebuild -p:Platform=x64 		-p:Configuration="Debug Static"
call msbuild antlr4cpp-vs%1.vcxproj -t:rebuild -p:Platform=x64 		-p:Configuration="Release Static"
popd

del *nupkg
echo nuget pack ANTLR4.Runtime.cpp.noarch.nuspec 				-p vs=%1 -p version=%2 -p pre=%pre%
call nuget pack ANTLR4.Runtime.cpp.noarch.nuspec 				-p vs=%1 -p version=%2 -p pre=%pre%
echo nuget pack ANTLR4.Runtime.cpp.shared.nuspec 	-symbols 	-p vs=%1 -p version=%2 -p pre=%pre%
call nuget pack ANTLR4.Runtime.cpp.shared.nuspec 	-symbols 	-p vs=%1 -p version=%2 -p pre=%pre%
echo nuget pack ANTLR4.Runtime.cpp.static.nuspec 	-symbols 	-p vs=%1 -p version=%2 -p pre=%pre%
call nuget pack ANTLR4.Runtime.cpp.static.nuspec 	-symbols 	-p vs=%1 -p version=%2 -p pre=%pre%

goto exit
:usage
echo Usage:
echo ------
echo "pack vsvers version [pre]"      // pack 2019 4.9.1 -beta
echo ------
:exit
:buildfailed
endlocal
rem echo on
```

<a id="README.md"></a>
<a id="/runtime/CSharp/src/README.md"></a>

# C# target for ANTLR 4

### Note to historical users

Versions of ANTLR 4.4.x and before managed the C#
target as part of a [separate tool provided by Sam Harwell](https://github.com/tunnelvisionlabs/antlr4cs/releases/tag/v4.6.6).
As of 4.5, we our releasing a (mono-compatible) C# target together
with the main tool.

The current version is written using netstandard2.0 and netstandard2.1, it's possible
to use it on different platforms (Windows, MacOS X, Linux, and other).

Releasing the runtime with the tool ensures that you can get the exact same behavior across many languages: Java, C#, Python, JavaScript, Go, Swift and C++.

## Getting Started

### Step 1: Install Java

The C# target for ANTLR 4 requires Java for *generating* C# code (but the applications compiled from this C# code will not require Java to be installed).
You can install *any* of the following versions of Java to use this target.

If you already have one of the following installed, you should check to make sure the installation is up-to-date.

* Java 8 runtime environment (x86 or x64)
* Java 8 development kit (x86 or x64, provided that the JRE option is also installed during the development kit installation)
* Java 7 runtime environment (x86 or x64)
* Java 7 development kit (x86 or x64, provided that the JRE option is also installed during the development kit installation)

### Step 2: Download the tool

You need to download the ANTLR tool from the ANTLR web site.
This is a Java archive (*.jar) used to generate the C# code from an ANTLR grammar.


### Step 3: Add or create a grammar file (*.g4) in your project

To avoid confusing your IDE, we suggest setting the build action to None for this file.
See the docs and the book to learn about writing lexer and parser grammars.


### Step 4: Generate the C# code

This can be done either from the cmd line, or by adding a custom pre-build command in your project.
At minimal, the cmd line should look as follows: ``java -jar antlr4-4.13.2.jar -Dlanguage=CSharp grammar.g4``
This will generate the files, which you can then integrate in your project.
This is just a quick start. The tool has many useful options to control generation, please refer to its documentation.

### Step 5: Add a reference to the ANTLR runtime in your project

The Antlr 4 standard runtime for C# is now available from NuGet.
We trust that you know how to do add NuGet references to your project :-).
The package id is [Antlr4.Runtime.Standard](https://www.nuget.org/packages/Antlr4.Runtime.Standard/). We do not support other packages.

Use the GUI or the following command in the Package Manager Console:

```
Install-Package Antlr4.Runtime.Standard
```

### Step 6: You're done!

Of course, the generated code is not going to meet your requirement by magic.
There are 3 ways to use the generated code:
 - by generating a parse tree, and traversing it using a listener. This is the most common method.
 - by generating a parse tree, and traversing it using a visitor. This requires the `-visitor` option, and is a bit more work.
 - by providing code within your grammar, which gets executed when your input files are parsed.
While the latter works, it is no longer the recommended approach, because it is not portable, and harder to maintain. More importantly, it breaks the parsing when your code breaks.

See the web site for examples of using the generated code.

To learn more about ANTLR 4, read [the book](http://a.co/2n4rJlb).

### Visual Studio integration

If you require tighter Visual Studio integration, you can use the tools from [Tunnel Vision Labs](http://tunnelvisionlabs.com/).
(please note however that they use a different tool and runtime)


<a id="readme.md"></a>
<a id="/runtime/CSharp/tests/issue-3079/readme.md"></a>

# How to test Issue 3079

1) Build the Antlr Tool first.
2) `bash test.sh` in this directory.

NB: The CSharp runtime source is modified by the test.sh script to
change "debug = true;" for ParserATNSimulator.cs. There is no way to
change the value of the static readonly variable using System.Reflection
after the static initializer for the class has loaded. This is why
it is change in the source here for this test and only this test.

<a id="README.md"></a>
<a id="/runtime/Dart/README.md"></a>

# Dart target for ANTLR 4

Dart runtime libraries for ANTLR 4

This runtime is available through [pub](https://pub.dev). The package name is 'antlr4'.

See www.antlr.org for more information on ANTLR.

See https://github.com/antlr/antlr4/blob/master/doc/dart-target.md for more information on using ANTLR in Dart.



<a id="README.md"></a>
<a id="/runtime/JavaScript/README.md"></a>

# JavaScript target for ANTLR 4

[![npm version](https://img.shields.io/npm/v/antlr4)](https://www.npmjs.com/package/antlr4)
[![Badge showing the supported LTS versions of Node.JS in the latest NPM release](https://img.shields.io/node/v-lts/antlr4)](https://www.npmjs.com/package/antlr4)
[![npm type definitions](https://img.shields.io/npm/types/antlr4)](https://www.npmjs.com/package/antlr4)

JavaScript runtime libraries for ANTLR 4

This runtime is available through npm. The package name is 'antlr4'.

This runtime has been tested in Node.js, Safari, Firefox, Chrome and IE.

See www.antlr.org for more information on ANTLR

See [Javascript Target](https://github.com/antlr/antlr4/blob/master/doc/javascript-target.md)
for more information on using ANTLR in JavaScript

This runtime requires node version >= 16.

ANTLR 4 runtime is available in 10 target languages, and favors consistency of versioning across targets.
As such it cannot follow recommended NPM semantic versioning.
If you install a specific version of antlr4, we strongly recommend you remove the corresponding ^ in your package.json.



<a id="README.md"></a>
<a id="/runtime-testsuite/test/org/antlr/v4/test/runtime/README.md"></a>

# Runtime test mechanism

The files in the various target subdirectories were automatically generated
and exist as a convenience so that we can test individual targets and also
groups of tests using the development environments like Intellij.

<a id="README.md"></a>
<a id="/scripts/parse-extended-pictographic/README.md"></a>

# README for scripts/extended-pictographic

This directory contains the Unicode UTS #35 `ExtendedPictographic.txt` data file,
intended to be parsed by the script `parse.py` to produce `ExtendedPictographic-Parsed.txt`.

This produces a series of `IntervalSet` entries to be consumed by
`UnicodeDataTemplateController`.
