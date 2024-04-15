#!/usr/bin/env bash

   #::

      url=https://book.realworldhaskell.org/read/
      url=https://book.realworldhaskell.org/read/defining-types-streamlining-functions.html
      #pandoc --list-table=true -r html "$url" -t rst >> $0
      python -m docutils "$0" "$0.html"
      if [[ $? == 0 ]]; then start "$0.html" fi
      exit

.. raw:: html

   <style type="text/css"><!--
      .screen { 
         min-height: 32px;
         padding: 1em 1em 1em 5em !important; 
         background: url(./pictures/haskell-screen.svg) no-repeat 16px 16px; 
      }
      .note, .tip {
         min-height: 32px;
          padding-left: 63px;
          background: url(./pictures/haskell-tip.svg) no-repeat 16px 16px;
      }

      .warning, .caution {
         min-height: 32px;
          padding-left: 63px;
          background: url(./pictures/haskell-warning.svg) no-repeat 16px 16px;
          background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiB2ZXJzaW9uPSIxLjEiIAogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxyZWN0IHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iZ3JheSIgcng9IjIiIC8+CiAgPHJlY3QgeD0iMiIgeT0iNiIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI0IiBmaWxsPSJsaWdodGdyYXkiIHJ4PSI0IiAvPgogIDxjaXJjbGUgY3g9IjI4IiBjeT0iMyIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJyZWQiIHI9IjIiIC8+CiAgPGNpcmNsZSBjeD0iMjIiIGN5PSIzIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9ImdyZWVuIiByPSIyIiAvPgogIDxjaXJjbGUgY3g9IjE2IiBjeT0iMyIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJibHVlIiByPSIyIiAvPgogIDx0ZXh0IHg9IjQiIHk9IjEyIiBmb250LXNpemU9IjIuMCIgPkdIQ2ksIHZlcnNpb24gOS44LjI6IDwvdGV4dD4KICA8dGV4dCB4PSI0IiB5PSIxNiIgZm9udC1zaXplPSIyLjAiID5odHRwczovL3d3dy5oYXNrZWxsLm9yZy9naGMvPC90ZXh0PgogIDx0ZXh0IHg9IjQiIHk9IjIwIiBmb250LXNpemU9IjIuMCIgPjo/IGZvciBoZWxwPC90ZXh0PgogIDx0ZXh0IHg9IjQiIHk9IjI0IiBmb250LXNpemU9IjIuMCIgPmdoY2kmZ3Q7PC90ZXh0PgogIDxwYXRoIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2ZmMDAwMCIgc3Ryb2tlPSIjMjgyODI4MjgiIAogICAgZD0iTSAxNSwyNSBDIDMsMTcgLTIsMTIgMiw3IDgsMyAxMSwxMSAxNSwyNSBaIiAvPiAKICA8Y2lyY2xlIGN4PSIxOCIgY3k9IjI4IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9IiNmZjAwMDAiIHI9IjMiLz4KPC9zdmc+) no-repeat 16px 16px;
      }
    --></style>

/Real World Haskell
===================

Real World Haskell 
by Bryan O'Sullivan, Don Stewart, and John Goerzen

   .. rubric:: Real World Haskell
      :name: real-world-haskell
      :class: booktitle

   .. container:: authors

      by Bryan O'Sullivan, Don Stewart, and John Goerzen

.. 
   .. _Defining types, streamlining functions: 
      https://book.realworldhaskell.org/read/defining-types-streamlining-functions.html
   .. _Functional programming: 
      https://book.realworldhaskell.org/read/functional-programming.html
   .. _Writing a library - working with JSON data: 
      https://book.realworldhaskell.org/read/writing-a-library-working-with-json-data.html
   .. _Using typeclasses: 
      https://book.realworldhaskell.org/read/using-typeclasses.html
   .. _Input and output: 
      https://book.realworldhaskell.org/read/io.html
   .. _Efficient file processing, regular expressions, and file name matching: 
      https://book.realworldhaskell.org/read/efficient-file-processing-regular-expressions-and-file-name-matching.html
   .. _I/O case study - a library for searching the filesystem: 
      https://book.realworldhaskell.org/read/io-case-study-a-library-for-searching-the-filesystem.html
   .. _Code case study - parsing a binary data format: 
      https://book.realworldhaskell.org/read/code-case-study-parsing-a-binary-data-format.html
   .. _Testing and quality assurance: 
      https://book.realworldhaskell.org/read/testing-and-quality-assurance.html
   .. _Barcode recognition: 
      https://book.realworldhaskell.org/read/barcode-recognition.html
   .. _Data structures: 
      https://book.realworldhaskell.org/read/data-structures.html
   .. _Monads: 
      https://book.realworldhaskell.org/read/monads.html
   .. _Programming with monads: 
      https://book.realworldhaskell.org/read/programming-with-monads.html
   .. _The Parsec parsing library: 
      https://book.realworldhaskell.org/read/using-parsec.html
   .. _The foreign function interface: 
      https://book.realworldhaskell.org/read/interfacing-with-c-the-ffi.html
   .. _Monad transformers: 
      https://book.realworldhaskell.org/read/monad-transformers.html
   .. _Error handling: 
      https://book.realworldhaskell.org/read/error-handling.html
   .. _Systems programming: 
      https://book.realworldhaskell.org/read/systems-programming-in-haskell.html
   .. _Working with databases: 
      https://book.realworldhaskell.org/read/using-databases.html
   .. _Web client programming: 
      https://book.realworldhaskell.org/read/extended-example-web-client-programming.html
   .. _GUI programming: 
      https://book.realworldhaskell.org/read/gui-programming-with-gtk-hs.html
   .. _Basic concurrent and parallel programming: 
      https://book.realworldhaskell.org/read/concurrent-and-multicore-programming.html
   .. _Profiling and tuning for performance: 
      https://book.realworldhaskell.org/read/profiling-and-optimization.html
   .. _Advanced library design - building a Bloom filter: 
      https://book.realworldhaskell.org/read/advanced-library-design-building-a-bloom-filter.html
   .. _Network programming: 
      https://book.realworldhaskell.org/read/sockets-and-syslog.html
   .. _Software transactional memory: 
      https://book.realworldhaskell.org/read/software-transactional-memory.html
   .. _Installing GHC and Haskell libraries: 
      https://book.realworldhaskell.org/read/installing-ghc-and-haskell-libraries.html
   .. _Characters, strings, and escaping rules: 
      https://book.realworldhaskell.org/read/characters-strings-and-escaping-rules.html
   .. _Web site and comment system usage and policies: 
      https://book.realworldhaskell.org/read/web-site-and-comment-system-usage-and-policies.html


.. _sec-4:

/Chapter 4. Functional programming `🔼 <#toc>`_
================================================

.. _sec-5:

/Chapter 5. Writing a library - working with JSON data `🔼 <#toc>`_
====================================================================

.. _sec-6:

/Chapter 6. Using typeclasses `🔼 <#toc>`_
===========================================

.. _sec-7:

/Chapter 7. Input and output `🔼 <#toc>`_
==========================================

.. _sec-8:

/Chapter 8. Efficient file processing, regular expressions, and file name matching `🔼 <#toc>`_
================================================================================================

.. _sec-9:

/Chapter 9. I/O case study - a library for searching the filesystem `🔼 <#toc>`_
=================================================================================

.. _sec-10:

/Chapter 10. Code case study - parsing a binary data format `🔼 <#toc>`_
=========================================================================

.. _sec-11:

/Chapter 11. Testing and quality assurance `🔼 <#toc>`_
========================================================

.. _sec-12:

/Chapter 12. Barcode recognition `🔼 <#toc>`_
==============================================

.. _sec-13:

/Chapter 13. Data structures `🔼 <#toc>`_
==========================================

.. _sec-14:

/Chapter 14. Monads `🔼 <#toc>`_
=================================

.. _sec-15:

/Chapter 15. Programming with monads `🔼 <#toc>`_
==================================================

.. _sec-16:

/Chapter 16. The Parsec parsing library `🔼 <#toc>`_
=====================================================

.. _sec-17:

/Chapter 17. The foreign function interface `🔼 <#toc>`_
=========================================================

.. _sec-18:

/Chapter 18. Monad transformers `🔼 <#toc>`_
=============================================

.. _sec-19:

/Chapter 19. Error handling `🔼 <#toc>`_
=========================================

.. _sec-20:

/Chapter 20. Systems programming `🔼 <#toc>`_
==============================================

.. _sec-21:

/Chapter 21. Working with databases `🔼 <#toc>`_
=================================================

.. _sec-22:

/Chapter 22. Web client programming `🔼 <#toc>`_
=================================================

.. _sec-23:

/Chapter 23. GUI programming `🔼 <#toc>`_
==========================================

.. _sec-24:

/Chapter 24. Basic concurrent and parallel programming `🔼 <#toc>`_
====================================================================

.. _sec-25:

/Chapter 25. Profiling and tuning for performance `🔼 <#toc>`_
===============================================================

.. _sec-26:

/Chapter 26. Advanced library design - building a Bloom filter `🔼 <#toc>`_
============================================================================

.. _sec-27:

/Chapter 27. Network programming `🔼 <#toc>`_
==============================================

.. _sec-28:

/Chapter 28. Software transactional memory `🔼 <#toc>`_
========================================================

.. _sec-A:

/Appendix A. Installing GHC and Haskell libraries `🔼 <#toc>`_
===============================================================

.. _sec-B:

/Appendix B. Characters, strings, and escaping rules `🔼 <#toc>`_
==================================================================

.. _sec-C:

/Appendix C. Web site and comment system usage and policies `🔼 <#toc>`_
=========================================================================

.. _toc:

.. container:: book

   -  `Why functional programming? Why Haskell? <#why-haskell>`_
   -  1. `Getting started <#sec-1>`_
   -  2. `Types and functions <#sec-2>`_
   -  3. `Defining types, streamlining functions <#sec-3>`_
   -  4. `Functional programming <#sec-4>`_
   -  5. `Writing a library - working with JSON data <#sec-5>`_
   -  6. `Using typeclasses <#sec-6>`_
   -  7. `Input and output <#sec-7>`_
   -  8. `Efficient file processing, regular expressions, and file name matching <#sec-8>`_
   -  9. `I/O case study - a library for searching the filesystem <#sec-9>`_
   -  10. `Code case study - parsing a binary data format <#sec-10>`_
   -  11. `Testing and quality assurance <#sec-11>`_
   -  12. `Barcode recognition <#sec-12>`_
   -  13. `Data structures <#sec-13>`_
   -  14. `Monads <#sec-14>`_
   -  15. `Programming with monads <#sec-15>`_
   -  16. `The Parsec parsing library <#sec-16>`_
   -  17. `The foreign function interface <#sec-17>`_
   -  18. `Monad transformers <#sec-18>`_
   -  19. `Error handling <#sec-19>`_
   -  20. `Systems programming <#sec-20>`_
   -  21. `Working with databases <#sec-21>`_
   -  22. `Web client programming <#sec-22>`_
   -  23. `GUI programming <#sec-23>`_
   -  24. `Basic concurrent and parallel programming <#sec-24>`_
   -  25. `Profiling and tuning for performance <#sec-25>`_
   -  26. `Advanced library design - building a Bloom filter <#sec-26>`_
   -  27. `Network programming <#sec-27>`_
   -  28. `Software transactional memory <#sec-28>`_
   -  A. `Installing GHC and Haskell libraries <#sec-A>`_
   -  B. `Characters, strings, and escaping rules <#sec-B>`_
   -  C. `Web site and comment system usage and policies <#sec-C>`_

.. container:: rwhfooter

   Want to stay up to date? Subscribe to comment feeds for any
   chapter, or the `entire book <https://book.realworldhaskell.org/feeds/comments/>`__.

   Copyright 2007, 2008 Bryan O'Sullivan, Don Stewart, and John Goerzen.
   This work is licensed under a 
   `Creative Commons Attribution-Noncommercial 3.0 License <http://creativecommons.org/licenses/by-nc/3.0/>`__. Icons by
   `Paul Davey <mailto:mattahan@gmail.com>`__ aka
   `Mattahan <http://mattahan.deviantart.com/>`__.



.. _why-haskell:


/Why functional programming? Why Haskell? `🔼 <#toc>`_
=======================================================

.. 
   .. rubric:: Why functional programming? Why Haskell?
      :name: why-functional-programming-why-haskell
      :class: title


**Table of Contents**

*  `Have we got a deal for you! <#id528893>`__

   *  `Novelty <#id528233>`__
   *  `Power <#id563635>`__
   *  `Enjoyment <#id529125>`__

*  `What to expect from this book <#id529185>`__

   *  `A little bit about you <#id528412>`__

*  `What to expect from Haskell <#id528460>`__

   *  `Compared to traditional static languages <#id528487>`__
   *  `Compared to modern dynamic languages <#id572991>`__
   *  `Haskell in industry and open source <#id573062>`__
   *  `Compilation, debugging, and performance analysis <#id573188>`__
   *  `Bundled and third party libraries <#id573275>`__

*  `A brief sketch of Haskell's history <#id573401>`__

   *  `Prehistory <#id573413>`__
   *  `Early antiquity <#id573451>`__
   *  `The modern era <#id573493>`__

*  `Helpful resources <#whyfp.resources>`__

   *  `Reference material <#whyfp.resources.reference>`__
   *  `Applications and libraries <#whyfp.resources.apps>`__
   *  `The Haskell community <#whyfp.resources.community>`__

*  `Acknowledgments <#id573806>`__

   *  `Bryan <#id573825>`__
   *  `John <#id573859>`__
   *  `Don <#id573887>`__
   *  `Thank you to our reviewers <#id573920>`__

.. container:: sect1

   .. rubric:: Have we got a deal for you!
      :name: id528893
      :class: title

Haskell is a deep language, and we think that learning it is a
hugely rewarding experience. We will focus on three elements as we
explain why. The first is *novelty*: we invite you to think about
programming from a different and valuable perspective. The second
is *power*: we'll show you how to create software that is short,
fast, and safe. Lastly, we offer you a lot of *fun*: the pleasure
of applying beautiful programming techniques to solve real
problems.

.. container:: sect2

   .. rubric:: Novelty
      :name: id528233
      :class: title

Haskell is most likely quite different from any language you've
ever used before. Compared to the usual set of concepts in a
programmer's mental toolbox, functional programming offers us a
profoundly different way to think about software.

In Haskell, we de-emphasise code that modifies data. Instead,
we focus on functions that take immutable values as input and
produce new values as output. Given the same inputs, these
functions always return the same results. This is a core idea
behind functional programming.

Along with not modifying data, our Haskell functions usually
don't talk to the external world; we call these functions
*pure*. We make a strong distinction between pure code and the
parts of our programs that read or write files, communicate
over network connections, or make robot arms move. This makes
it easier to organize, reason about, and test our programs.

We abandon some ideas that might seem fundamental, such as
having a ``for`` loop built into the language. We have other,
more flexible, ways to perform repetitive tasks.

Even the way in which we evaluate expressions is different in
Haskell. We defer every computation until its result is
actually needed: Haskell is a *lazy* language. Laziness is not
merely a matter of moving work around: it profoundly affects
how we write programs.

.. container:: sect2

   .. rubric:: Power
      :name: id563635
      :class: title

Throughout this book, we will show you how Haskell's 
alternatives to the features of traditional languages are
powerful, flexible, and lead to reliable code. Haskell is
positively crammed full of cutting edge ideas about how to
create great software.

Since pure code has no dealings with the outside world, and the
data it works with is never modified, the kinds of nasty
surprise in which one piece of code invisibly corrupts data
used by another are very rare. Whatever context we use a pure
function in, it will behave consistently.

Pure code is easier to test than code that deals with the
outside world. When a function only responds to its visible
inputs, we can easily state properties of its behavior that
should always be true. We can automatically test that those
properties hold for a huge body of random inputs, and when our
tests pass, we move on. We still use traditional techniques to
test code that must interact with files, networks, or exotic
hardware. Since there is much less of this impure code than we
would find in a traditional language, we gain much more
assurance that our software is solid.

Lazy evaluation has some spooky effects. Let's say we want to
find the *k* least-valued elements of an unsorted list. In a
traditional language, the obvious approach would be to sort the
list and take the first *k* elements, but this is expensive.
For efficiency, we would instead write a special function that
takes these values in one pass, and it would have to perform
some moderately complex book-keeping. In Haskell, the
sort-then-take approach actually performs well: laziness
ensures that the list will only be sorted enough to find the
*k* minimal elements.

Better yet, our Haskell code that operates so efficiently is
tiny, and uses standard library functions.

.. code:: haskell
   :class: screen

   -- file: ch00/KMinima.hs
   -- lines beginning with "--" are comments.

   minima k xs = take k (sort xs)

It can take a while to develop an intuitive feel for when lazy
evaluation is important, but when we exploit it, the resulting
code is often clean, brief, and efficient.

As the above example shows, an important aspect of Haskell's
power lies in the compactness of the code we write. Compared to
working in popular traditional languages, when we develop in
Haskell we often write much less code, in substantially less
time, and with fewer bugs.

.. container:: sect2

   .. rubric:: Enjoyment
      :name: id529125
      :class: title

We believe that it is easy to pick up the basics of Haskell
programming, and that you will be able to successfully write
small programs within a matter of hours or days.

Since effective programming in Haskell differs greatly from
other languages, you should expect that mastering both the
language itself and functional programming techniques will
require plenty of thought and practice.

Harking back to our own days of getting started with Haskell,
the good news is that the fun begins early: it's simply an
entertaining challenge to dig into a new language, in which so
many commonplace ideas are different or missing, and to figure
out how to write simple programs.

For us, the initial pleasure lasted as our experience grew and
our understanding deepened. In other languages, it's difficult
to see any connection between science and the nuts-and-bolts of
programming. In Haskell, we have imported some ideas from
abstract mathematics and put them to work. Even better, we find
that not only are these ideas easy to pick up, they have a
practical payoff in helping us to write more compact, reusable
code.

Furthermore, we won't be putting any “brick walls” in your way:
there are no especially difficult or gruesome techniques in
this book that you must master in order to be able to program
effectively.

That being said, Haskell is a rigorous language: it will make
you perform more of your thinking up front. It can take a
little while to adjust to debugging much of your code before
you ever run it, in response to the compiler telling you that
something about your program does not make sense. Even with
years of experience, we remain astonished and pleased by how
often our Haskell programs simply work on the first try, once
we fix those compilation errors.

.. container:: sect1

   .. rubric:: What to expect from this book
      :name: id529185
      :class: title

We started this project because a growing number of people are
using Haskell to solve everyday problems. Because Haskell has its
roots in academia, few of the Haskell books that currently exist
focus on the problems and techniques of everyday programming that
we're interested in.

With this book, we want to show you how to use functional
programming and Haskell to solve realistic problems. This is a
hands-on book: every chapter contains dozens of code samples, and
many contain complete applications. Here are a few examples of the
libraries, techniques and tools that we'll show you how to
develop.

.. container:: itemizedlist

   -  Create an application that downloads podcast episodes from
      the Internet, and stores its history in an SQL database.

   -  Test your code in an intuitive and powerful way. Describe
      properties that ought to be true, then let the QuickCheck
      library generate test cases automatically.

   -  Take a grainy phone camera snapshot of a barcode, and turn
      it into an identifier that you can use to query a library or
      bookseller's web site.

   -  Write code that thrives on the web. Exchange data with
      servers and clients written in other languages using JSON
      notation. Develop a concurrent link checker.

.. container:: sect2

   .. rubric:: A little bit about you
      :name: id528412
      :class: title

What will you need to know before reading this book? We expect
that you already know how to program, but if you've never used
a functional language, that's fine.

No matter what your level of experience is, we have tried to
anticipate your needs: we go out of our way to explain new and
potentially tricky ideas in depth, usually with examples and
images to drive our points home.

As a new Haskell programmer, you'll inevitably start out 
writing quite a bit of code by hand for which you could have
used a library function or programming technique, had you just
known of its existence. We've packed this book with information
to help you to come up to speed as quickly as possible.

Of course, there will always be a few bumps along the road. If
you start out anticipating an occasional surprise or difficulty
along with the fun stuff, you will have the best experience.
Any rough patches you might hit won't last long.

As you become a more seasoned Haskell programmer, the way that
you write code will change. Indeed, over the course of this
book, the way that we present code will evolve, as we move from
the basics of the language to increasingly powerful and
productive features and techniques.

.. container:: sect1

   .. rubric:: What to expect from Haskell
      :name: id528460
      :class: title

Haskell is a general purpose programming language. It was designed
without any application niche in mind. Although it takes a strong
stand on how programs should be written, it does not favour one
problem domain over others.

While at its core, the language encourages a pure, lazy style of
functional programming, this is the *default*, not the only
option. Haskell also supports the more traditional models of
procedural code and strict evaluation. Additionally, although the
focus of the language is squarely on writing statically typed
programs, it is possible (though rarely seen) to write Haskell
code in a dynamically typed manner.

.. container:: sect2

   .. rubric:: Compared to traditional static languages
      :name: id528487
      :class: title

Languages that use simple static type systems have been the
mainstay of the programming world for decades. Haskell is
statically typed, but its notion of what types are for, and
what we can do with them, is much more flexible and powerful
than traditional languages. Types make a major contribution to
the brevity, clarity, and efficiency of Haskell programs.

Although powerful, Haskell's type system is often also 
unobtrusive. If we omit explicit type information, a Haskell
compiler will automatically infer the type of an expression or
function. Compared to traditional static languages, to which we
must spoon-feed large amounts of type information, the
combination of power and inference in Haskell's type system
significantly reduces the clutter and redundancy of our code.

Several of Haskell's other features combine to further increase
the amount of work we can fit into a screenful of text. This
brings improvements in development time and agility: we can
create reliable code quickly, and easily refactor it in
response to changing requirements.

Sometimes, Haskell programs may run more slowly than similar
programs written in C or C++. For most of the code we write,
Haskell's large advantages in productivity and reliability
outweigh any small performance disadvantage.

Multicore processors are now ubiquitous, but they remain 
notoriously difficult to program using traditional techniques.
Haskell provides unique technologies to make multicore
programming more tractable. It supports parallel programming,
software transactional memory for reliable concurrency, and
scales to hundreds of thousands of concurrent threads.

.. container:: sect2

   .. rubric:: Compared to modern dynamic languages
      :name: id572991
      :class: title

Over the past decade, dynamically typed, interpreted languages
have become increasingly popular. They offer substantial
benefits in developer productivity. Although this often comes
at the cost of a huge performance hit, for many programming
tasks productivity trumps performance, or performance isn't a
significant factor in any case.

Brevity is one area in which Haskell and dynamically typed
languages perform similarly: in each case, we write much less
code to solve a problem than in a traditional language.
Programs are often around the same size in dynamically typed
languages and Haskell.

When we consider runtime performance, Haskell almost always has
a huge advantage. Code compiled by the Glasgow Haskell Compiler
(GHC) is typically between 20 and 60 times faster than code run
through a dynamic language's interpreter. GHC also provides an
interpreter, so you can run scripts without compiling them.

Another big difference between dynamically typed languages and
Haskell lies in their philosophies around types. A major reason
for the popularity of dynamically typed languages is that only
rarely do we need to explicitly mention types. Through
automatic type inference, Haskell offers the same advantage.

Beyond this surface similarity, the differences run deep. In a
dynamically typed language, we can create constructs that are
difficult to express in a statically typed language. However,
the same is true in reverse: with a type system as powerful as
Haskell's, we can structure a program in a way that would be
unmanageable or infeasible in a dynamically typed language.

It's important to recognise that each of these approaches
involves tradeoffs. Very briefly put, the Haskell perspective
emphasises safety, while the dynamically typed outlook favours
flexibility. If someone had already discovered one way of
thinking about types that was always best, we imagine that
everyone would know about it by now.

Of course, we have our own opinions about which tradeoffs are
more beneficial. Two of us have years of experience programming
in dynamically typed languages. We love working with them; we
still use them every day; but usually, we prefer Haskell.

.. container:: sect2

   .. rubric:: Haskell in industry and open source
      :name: id573062
      :class: title

Here are just a few examples of large software systems that
have been created in Haskell. Some of these are open source,
while others are proprietary products.

.. container:: itemizedlist

   -  ASIC and FPGA design software (Lava, products from
      Bluespec Inc.)

   -  Music composition software (Haskore)

   -  Compilers and compiler-related tools (most notably GHC)

   -  Distributed revision control (Darcs)

   -  Web middleware (HAppS, products from Galois Inc.)

is a sample of some of the companies using Haskell in late
2008, taken from the `Haskell wiki <http://www.haskell.org/haskellwiki/Haskell_in_industry>`__.

.. container:: itemizedlist

   -  ABN AMRO is an international bank. It uses Haskell in
      investment banking, to measure the counterparty risk on
      portfolios of financial derivatives.

   -  Anygma is a startup company. It develops multimedia
      content creation tools using Haskell.

   -  Amgen is a biotech company. It creates mathematical
      models and other complex applications in Haskell.

   -  Bluespec is an ASIC and FPGA design software vendor. Its
      products are developed in Haskell, and the chip design
      languages that its products provide are influenced by
      Haskell.

   -  Eaton uses Haskell for the design and verification of
      hydraulic hybrid vehicle systems.

.. container:: sect2

   .. rubric:: Compilation, debugging, and performance
      analysis
      :name: id573188
      :class: title

For practical work, almost as important as a language itself is
the ecosystem of libraries and tools around it. Haskell has a
strong showing in this area.

The most widely used compiler, GHC, has been actively developed
for over 15 years, and provides a mature and stable set of
features.

.. container:: itemizedlist

   -  Compiles to efficient native code on all major modern
      operating systems and CPU architectures

   -  Easy deployment of compiled binaries, unencumbered by
      licensing restrictions

   -  Code coverage analysis

   -  Detailed profiling of performance and memory usage

   -  Thorough documentation

   -  Massively scalable support for concurrent and multicore
      programming

   -  Interactive interpreter and debugger

.. container:: sect2

         .. rubric:: Bundled and third party libraries
            :name: id573275
            :class: title

The GHC compiler ships with a collection of useful libraries.
Here are a few of the common programming needs that these
libraries address.

.. container:: itemizedlist

   -  File I/O, and filesystem traversal and manipulation

   -  Network client and server programming

   -  Regular expressions and parsing

   -  Concurrent programming

   -  Automated testing

   -  Sound and graphics

The Hackage package database is the Haskell community's 
collection of open source libraries and applications. Most
libraries published on Hackage are licensed under liberal terms
that permit both commercial and open source use. Some of the
areas covered by open source libraries include the following.

.. container:: itemizedlist

   -  Interfaces to all major open source and commercial
      databases

   -  XML, HTML, and XQuery processing

   -  Network and web client and server development

   -  Desktop GUIs, including cross-platform toolkits

   -  Support for Unicode and other text encodings

.. container:: sect1

   .. rubric:: A brief sketch of Haskell's history
      :name: id573401
      :class: title

The development of Haskell is rooted in mathematics and computer
science research.

.. container:: sect2

   .. rubric:: Prehistory
      :name: id573413
      :class: title

A few decades before modern computers were invented, the 
mathematician Alonzo Church developed a language called the
lambda calculus. He intended it as a tool for investigating the
foundations of mathematics. The first person to realize the
practical connection between programming and the lambda
calculus was John McCarthy, who created Lisp in 1958.

During the 1960s, computer scientists began to recognise and
study the importance of the lambda calculus. Peter Landin and
Christopher Strachey developed ideas about the foundations of
programming languages: how to reason about what they do
(operational semantics) and how to understand what they mean
(denotational semantics).

In the early 1970s, Robin Milner created a more rigorous 
functional programming language named ML. While ML was
developed to help with automated proofs of mathematical
theorems, it gained a following for more general computing
tasks.

The 1970s saw the emergence of lazy evaluation as a novel
strategy. David Turner developed SASL and KRC, while Rod
Burstall and John Darlington developed NPL and Hope. NPL, KRC
and ML influenced the development of several more languages in
the 1980s, including Lazy ML, Clean, and Miranda.

.. container:: sect2

   .. rubric:: Early antiquity
      :name: id573451
      :class: title

By the late 1980s, the efforts of researchers working on lazy
functional languages were scattered across more than a dozen
languages. Concerned by this diffusion of effort, a number of
researchers decided to form a committee to design a common
language. After three years of work, the committee published
the Haskell 1.0 specification in 1990. It named the language
after Haskell Curry, an influential logician.

Many people are rightfully suspicious of “design by committee”,
but the work of the Haskell committee is a beautiful example of
the best work a committee can do. They produced an elegant,
considered language design, and succeeded in unifying the
fractured efforts of their research community. Of the thicket
of lazy functional languages that existed in 1990, only Haskell
is still actively used.

Since its publication in 1990, the Haskell language standard
has seen five revisions, most recently in 1998. A number of
Haskell implementations have been written, and several are
still actively developed.

During the 1990s, Haskell served two main purposes. On one
side, it gave language researchers a stable language in which
to experiment with making lazy functional programs run
efficiently. Other researchers explored how to construct
programs using lazy functional techniques. Still others used it
as a teaching language.

.. container:: sect2

   .. rubric:: The modern era
      :name: id573493
      :class: title

While these basic explorations of the 1990s proceeded, Haskell
remained firmly an academic affair. The informal slogan of
those inside the community was to “avoid success at all costs”.
Few outsiders had heard of the language at all. Indeed,
functional programming as a field was quite obscure.

During this time, the mainstream programming world experimented
with relatively small tweaks: from programming in C, to C++, to
Java. Meanwhile, on the fringes, programmers were beginning to
tinker with new, more dynamic languages. Guido van Rossum
designed Python; Larry Wall created Perl; and Yukihiro
Matsumoto developed Ruby.

As these newer languages began to seep into wider use, they
spread some crucial ideas. The first was that programmers are
not merely capable of working in expressive languages; in fact,
they flourish. The second was in part a byproduct of the rapid
growth in raw computing power of that era: it's often smart to
sacrifice some execution performance in exchange for a big
increase in programmer productivity. Finally, several of these
languages borrowed from functional programming.

Over the past half a decade, Haskell has successfully escaped
from academia, buoyed in part by the visibility of Python,
Ruby, and even Javascript. The language now has a vibrant and
fast-growing culture of open source and commercial users, and
researchers continue to use it to push the boundaries of
performance and expressiveness.

.. container:: sect1

   .. rubric:: Helpful resources
      :name: whyfp.resources
      :class: title

As you work with Haskell, you're sure to have questions and want
more information about things. Here are some Internet resources
where you can look up information and interact with other Haskell
programmers.

.. container:: sect2

   .. rubric:: Reference material
      :name: whyfp.resources.reference
      :class: title

.. container:: itemizedlist

   -  `The Haskell Hierarchical Libraries reference <http://www.haskell.org/ghc/docs/latest/html/libraries/index.html>`__
      provides the documentation for the standard library that
      comes with your compiler. This is one of the most
      valuable online assets for Haskell programmers.

   -  For questions about language syntax and features, the
      `Haskell 98 Report <http://haskell.org/onlinereport/>`__
      describes the Haskell 98 language standard.

   -  Various extensions to the language have become
      commonplace since the Haskell 98 Report was released. The
      `GHC Users's Guide <http://www.haskell.org/ghc/docs/latest/html/users_guide/index.html>`__
      contains detailed documentation on the extensions
      supported by GHC, as well as some GHC-specific features.

   -  `Hoogle <http://haskell.org/hoogle/>`__ and
      `Hayoo <http://holumbus.fh-wedel.de/hayoo/hayoo.html>`__
      are Haskell API search engines. They can search for
      functions by name or by type.

.. container:: sect2

   .. rubric:: Applications and libraries
      :name: whyfp.resources.apps
      :class: title

If you're looking for a Haskell library to use for a particular
task, or an application written in Haskell, check out the
following resources.

.. container:: itemizedlist

   -  The Haskell community maintains a central repository of
      open source Haskell libraries and applications. It's
      called `Hackage <http://hackage.haskell.org/>`__, and it
      lets you search for software to download, or browse its
      collection by category.

   -  The `Haskell Wiki <http://haskell.org/haskellwiki/Applications_and_libraries>`__
      contains a section dedicated to information about
      particular Haskell libraries.

.. container:: sect2

   .. rubric:: The Haskell community
      :name: whyfp.resources.community
      :class: title

There are a number of ways you can get in touch with other
Haskell programmers, to ask questions, learn what other people
are talking about, and simply do some social networking with
your peers.

.. container:: itemizedlist

   -  The first stop on your search for community resources
      should be the `Haskell web site <http://www.haskell.org/>`__. 
      This page contains the most current links to various communities and
      information, as well as a huge and actively maintained
      wiki.

   -  Haskellers use a number of 
      `mailing lists <http://haskell.org/haskellwiki/Mailing_lists>`__
      for topical discussions. Of these, the most generally
      interesting is named ``haskell-cafe``. It has a relaxed,
      friendly atmosphere, where professionals and academics
      rub shoulders with casual hackers and beginners.

   -  For real-time chat, the 
      `Haskell IRC channel <http://haskell.org/haskellwiki/IRC_channel>`__,
      named ``#haskell``, is large and lively. Like
      ``haskell-cafe``, the atmosphere stays friendly and
      helpful in spite of the huge number of concurrent users.

   -  There are many local user groups, meetups, academic
      workshops, and the like; here is a list of the known 
      `user groups and workshops <http://haskell.org/haskellwiki/User_groups>`__.

   -  The `Haskell Weekly News <http://sequence.complete.org/>`__ is a
      very-nearly-weekly summary of activities in the Haskell
      community. You can find pointers to interesting mailing
      list discussions, new software releases, and the like.

   -  The `Haskell Communities and Activities Report <http://haskell.org/communities/>`__ 
      collects information about people that use Haskell, and what they
      are doing with it. It has been running for years, so it
      provides a good way to peer into Haskell's past.

.. container:: sect1

      .. rubric:: Acknowledgments
         :name: id573806
         :class: title

This book would not exist without the Haskell community: an
anarchic, hopeful cabal of artists, theoreticians and engineers,
who for twenty years have worked to create a better, bug-free
programming world. The people of the Haskell community are unique
in their combination of friendliness and intellectual depth.

We wish to thank our editor, Mike Loukides, and the production
team at O'Reilly for all of their advice and assistance.

.. container:: sect2

         .. rubric:: Bryan
            :name: id573825
            :class: title

I had a great deal of fun working with John and Don. Their
independence, good nature, and formidable talent made the
writing process remarkably smooth.

Simon Peyton Jones took a chance on a college student who
emailed him out of the blue in early 1994. Interning for him
over that summer remains a highlight of my professional life.
With his generosity, boundless energy, and drive to
collaborate, he inspires the whole Haskell community.

My children, Cian and Ruairi, always stood ready to help me to
unwind with wonderful, madcap little-boy games.

Finally, of course, I owe a great debt to my wife, Shannon, for
her love, wisdom, and support during the long gestation of this
book.

.. container:: sect2

         .. rubric:: John
            :name: id573859
            :class: title

I am so glad to be able to work with Bryan and Don on this
project. The depth of their Haskell knowledge and experience is
amazing. I enjoyed finally being able to have the three of us
sit down in the same room -- over a year after we started
writing.

My 2-year-old Jacob, who decided that it would be fun to use a
keyboard too, and is always eager to have me take a break from
the computer and help him make some fun typing noises on a
50-year-old Underwood typewriter.

Most importantly, I wouldn't have ever been involved in this
project without the love, support, and encouragement from my
wife, Terah.

.. container:: sect2

         .. rubric:: Don
            :name: id573887
            :class: title

Before all else, I'd like to thank my amazing co-conspirators,
John and Bryan, for encouragment, advice and motivation.

My colleagues at Galois, Inc., who daily wield Haskell in the
real world, provided regular feedback and war stories, and
helped ensured a steady supply of espresso.

My PhD supervisor, Manuel Chakravarty, and the PLS research
group, who provided encouragement, vision and energy, and
showed me that a rigorous, foundational approach to programming
can make the impossible happen.

And, finally, thanks to Suzie, for her insight, patience and
love.

.. container:: sect2

         .. rubric:: Thank you to our reviewers
            :name: id573920
            :class: title

We developed this book in the open, posting drafts of chapters
to our web site as we completed them. Readers then submitted
feedback using a web application that we developed. By the time
we finished writing the book, about 800 people had submitted
over 7,500 comments, an astounding figure.

We deeply appreciate the time that so many people volunteered
to help us to improve our book. Their encouragement and
enthusiasm over the 15 months we spent writing made the process
a pleasure.

The breadth and depth of the comments we received have 
profoundly improved the quality of this book. Nevertheless, all
errors and omissions are, of course, ours.

The following people each contributed over 1% of the total
number of review comments that we received. We would like to
thank them for their care in providing us with so much detailed
feedback.

Alex Stangl, Andrew Bromage, Brent Yorgey, Bruce Turner, Calvin
Smith, David Teller, Henry Lenzi, Jay Scott, John Dorsey,
Justin Dressel, Lauri Pesonen, Lennart Augustsson, Luc
Duponcheel, Matt Hellige, Michael T. Richter, Peter McLain, Rob
deFriesse, Rüdiger Hanke, Tim Chevalier, Tim Stewart, William
N. Halchin.

We are also grateful to the people below, each of whom 
contributed at least 0.2% of all comments.

Achim Schneider, Adam Jones, Alexander Semenov, Andrew Wagner,
Arnar Birgisson, Arthur van Leeuwen, Bartek Ćwikłowski, Bas
Kok, Ben Franksen, Björn Buckwalter, Brian Brunswick, Bryn
Keller, Chris Holliday, Chris Smith, Dan Scott, Dan Weston,
Daniel Larsson, Davide Marchignoli, Derek Elkins, Dirk Ullrich,
Doug Kirk, Douglas Silas, Emmanuel Delaborde, Eric Lavigne,
Erik Haugen, Erik Jones, Fred Ross, Geoff King, George
Moschovitis, Hans van Thiel, Ionuț Arțăriși, Isaac Dupree,
Isaac Freeman, Jared Updike, Joe Thornber, Joeri van Eekelen,
Joey Hess, Johan Tibell, John Lenz, Josef Svenningsson, Joseph
Garvin, Josh Szepietowski, Justin Bailey, Kai Gellien, Kevin
Watters, Konrad Hinsen, Lally Singh, Lee Duhem, Luke Palmer,
Magnus Therning, Marc DeRosa, Marcus Eskilsson, Mark Lee Smith,
Matthew Danish, Matthew Manela, Michael Vanier, Mike
Brauwerman, Neil Mitchell, Nick Seow, Pat Rondon, Raynor
Vliegendhart, Richard Smith, Runar Bjarnason, Ryan W. Porter,
Salvatore Insalaco, Sean Brewer, Sebastian Sylvan, Sebastien
Bocq, Sengan Baring-Gould, Serge Le Huitouze, Shahbaz
Chaudhary, Shawn M Moore, Tom Tschetter, Valery V. Vorotyntsev,
Will Newton, Wolfgang Meyer, Wouter Swierstra.

We would like to acknowledge the following people, many of whom
submitted a number of comments.

Aaron Hall, Abhishek Dasgupta, Adam Copp, Adam Langley, Adam
Warrington, Adam Winiecki, Aditya Mahajan, Adolfo Builes, Al
Hoang, Alan Hawkins, Albert Brown, Alec Berryman, Alejandro
Dubrovsky, Alex Hirzel, Alex Rudnick, Alex Young, Alexander
Battisti, Alexander Macdonald, Alexander Strange, Alf Richter,
Alistair Bayley, Allan Clark, Allan Erskine, Allen Gooch, Andre
Nathan, Andreas Bernstein, Andreas Schropp, Andrei Formiga,
Andrew Butterfield, Andrew Calleja, Andrew Rimes, Andrew The,
Andy Carson, Andy Payne, Angelos Sphyris, Ankur Sethi, António
Pedro Cunha, Anthony Moralez, Antoine Hersen, Antoine Latter,
Antoine S., Antonio Cangiano, Antonio Piccolboni, Antonios
Antoniadis, Antonis Antoniadis, Aristotle Pagaltzis, Arjen van
Schie, Artyom Shalkhakov, Ash Logan, Austin Seipp, Avik Das,
Avinash Meetoo, BVK Chaitanya, Babu Srinivasan, Barry Gaunt,
Bas van Dijk, Ben Burdette, Ben Ellis, Ben Moseley, Ben
Sinclair, Benedikt Huber, Benjamin Terry, Benoit Jauvin-Girard,
Bernie Pope, Björn Edström, Bob Holness, Bobby Moretti, Boyd
Adamson, Brad Ediger, Bradley Unterrheiner, Brendan J.
Overdiep, Brendan Macmillan, Brett Morgan, Brian Bloniarz,
Brian Lewis, Brian Palmer, Brice Lin, C Russell, Cale Gibbard,
Carlos Aya, Chad Scherrer, Chaddaï Fouché, Chance Coble,
Charles Krohn, Charlie Paucard, Chen Yufei, Cheng Wei, Chip
Grandits, Chris Ball, Chris Brew, Chris Czub, Chris Gallagher,
Chris Jenkins, Chris Kuklewicz, Chris Wright, Christian
Lasarczyk, Christian Vest Hansen, Christophe Poucet,
Chung-chieh Shan, Conal Elliott, Conor McBride, Conrad Parker,
Cosmo Kastemaa, Creighton Hogg, Crutcher Dunnavant, Curtis
Warren, D Hardman, Dafydd Harries, Dale Jordan, Dan Doel, Dan
Dyer, Dan Grover, Dan Orias, Dan Schmidt, Dan Zwell, Daniel
Chicayban Bastos, Daniel Karch, Daniel Lyons, Daniel Patterson,
Daniel Wagner, Daniil Elovkov, Danny Yoo, Darren Mutz, Darrin
Thompson, Dave Bayer, Dave Hinton, Dave Leimbach, Dave
Peterson, Dave Ward, David Altenburg, David B. Wildgoose, David
Carter, David Einstein, David Ellis, David Fox, David Frey,
David Goodlad, David Mathers, David McBride, David Sabel, Dean
Pucsek, Denis Bueno, Denis Volk, Devin Mullins, Diego Moya,
Dino Morelli, Dirk Markert, Dmitry Astapov, Dougal Stanton, Dr
Bean, Drew Smathers, Duane Johnson, Durward McDonell, E. Jones,
Edwin DeNicholas, Emre Sevinc, Eric Aguiar, Eric Frey, Eric
Kidd, Eric Kow, Eric Schwartz, Erik Hesselink, Erling Alf, Eruc
Frey, Eugene Grigoriev, Eugene Kirpichov, Evan Farrer, Evan
Klitzke, Evan Martin, Fawzi Mohamed, Filippo Tampieri, Florent
Becker, Frank Berthold, Fred Rotbart, Frederick Ross, Friedrich
Dominicus, Gal Amram, Ganesh Sittampalam, Gen Zhang, Geoffrey
King, George Bunyan, George Rogers, German Vidal, Gilson
Silveira, Gleb Alexeyev, Glenn Ehrlich, Graham Fawcett, Graham
Lowe, Greg Bacon, Greg Chrystall, Greg Steuck, Grzegorz
Chrupała, Guillaume Marceau, Haggai Eran, Harald Armin Massa,
Henning Hasemann, Henry Laxen, Hitesh Jasani, Howard B. Golden,
Ilmari Vacklin, Imam Tashdid ul Alam, Ivan Lazar Miljenovic,
Ivan Miljenovic, J. Pablo Fernández, J.A. Zaratiegui, Jaap
Weel, Jacques Richer, Jake McArthur, Jake Poznanski, Jakub
Kotowski, Jakub Labath, James Cunningham, James Smith, Jamie
Brandon, Jan Sabbe, Jared Roberts, Jason Dusek, Jason F, Jason
Kikel, Jason Mobarak, Jason Morton, Jason Rogers, Jeff Balogh,
Jeff Caldwell, Jeff Petkau, Jeffrey Bolden, Jeremy Crosbie,
Jeremy Fitzhardinge, Jeremy O'Donoghue, Jeroen Pulles, Jim
Apple, Jim Crayne, Jim Snow, Joan Jiménez, Joe Fredette, Joe
Healy, Joel Lathrop, Joeri Samson, Johannes Laire, John Cowan,
John Doe, John Hamilton, John Hornbeck, John Lien, John
Stracke, Jonathan Guitton, Joseph Bruce, Joseph H. Buehler,
Josh Goldfoot, Josh Lee, Josh Stone, Judah Jacobson, Justin
George, Justin Goguen, Kamal Al-Marhubi, Kamil Dworakowski,
Keegan Carruthers-Smith, Keith Fahlgren, Keith Willoughby, Ken
Allen, Ken Shirriff, Kent Hunter, Kevin Hely, Kevin
Scaldeferri, Kingdon Barrett, Kristjan Kannike, Kurt Jung,
Lanny Ripple, Laurențiu Nicola, Laurie Cheers, Lennart
Kolmodin, Liam Groener, Lin Sun, Lionel Barret de Nazaris, Loup
Vaillant, Luke Plant, Lutz Donnerhacke, Maarten Hazewinkel,
Malcolm Reynolds, Marco Piccioni, Mark Hahnenberg, Mark
Woodward, Marko Tosic, Markus Schnell, Martijn van Egdom,
Martin Bayer, Martin DeMello, Martin Dybdal, Martin Geisler,
Martin Grabmueller, Matúš Tejiščák, Mathew Manela, Matt Brandt,
Matt Russell, Matt Trinneer, Matti Niemenmaa, Matti Nykänen,
Max Cantor, Maxime Henrion, Michael Albert, Michael Brauwerman,
Michael Campbell, Michael Chermside, Michael Cook, Michael
Dougherty, Michael Feathers, Michael Grinder, Michael
Kagalenko, Michael Kaplan, Michael Orlitzky, Michael Smith,
Michael Stone, Michael Walter, Michel Salim, Mikael Vejdemo
Johansson, Mike Coleman, Mike Depot, Mike Tremoulet, Mike
Vanier, Mirko Rahn, Miron Brezuleanu, Morten Andersen, Nathan
Bronson, Nathan Stien, Naveen Nathan, Neil Bartlett, Neil
Whitaker, Nick Gibson, Nick Messenger, Nick Okasinski, Nicola
Paolucci, Nicolas Frisby, Niels Aan de Brugh, Niels Holmgaard
Andersen, Nima Negahban, Olaf Leidinger, Oleg Anashkin, Oleg
Dopertchouk, Oleg Taykalo, Oliver Charles, Olivier Boudry, Omar
Antolín Camarena, Parnell Flynn, Patrick Carlisle, Paul Brown,
Paul Delhanty, Paul Johnson, Paul Lotti, Paul Moore, Paul
Stanley, Paulo Tanimoto, Per Vognsen, Pete Kazmier, Peter
Aarestad, Peter Ipacs, Peter Kovaliov, Peter Merel, Peter
Seibel, Peter Sumskas, Phil Armstrong, Philip Armstrong, Philip
Craig, Philip Neustrom, Philip Turnbull, Piers Harding, Piet
Delport, Pragya Agarwal, Raúl Gutiérrez, Rafael Alemida, Rajesh
Krishnan, Ralph Glass, Rauli Ruohonen, Ravi Nanavati, Raymond
Pasco, Reid Barton, Reto Kramer, Reza Ziaei, Rhys Ulerich,
Ricardo Herrmann, Richard Harris, Richard Warburton, Rick van
Hattem, Rob Grainger, Robbie Kop, Rogan Creswick, Roman
Gonzalez, Rory Winston, Ruediger Hanke, Rusty Mellinger, Ryan
Grant, Ryan Ingram, Ryan Janzen, Ryan Kaulakis, Ryan Stutsman,
Ryan T. Mulligan, S Pai, Sam Lee, Sandy Nicholson, Scott
Brickner, Scott Rankin, Scott Ribe, Sean Cross, Sean Leather,
Sergei Trofimovich, Sergio Urinovsky, Seth Gordon, Seth Tisue,
Shawn Boyette, Simon Brenner, Simon Farnsworth, Simon Marlow,
Simon Meier, Simon Morgan, Sriram Srinivasan, Sriram
Srinivasan, Stefan Aeschbacher, Stefan Muenzel, Stephan
Friedrichs, Stephan Nies, Stephan-A. Posselt, Stephyn Butcher,
Steven Ashley, Stuart Dootson, Terry Michaels, Thomas
Cellerier, Thomas Fuhrmann, Thomas Hunger, Thomas M. DuBuisson,
Thomas Moertel, Thomas Schilling, Thorsten Seitz, Tibor Simic,
Tilo Wiklund, Tim Clark, Tim Eves, Tim Massingham, Tim
Rakowski, Tim Wiess, Timo B. Hübel, Timothy Fitz, Tom Moertel,
Tomáš Janoušek, Tony Colston, Travis B. Hartwell, Tristan
Allwood, Tristan Seligmann, Tristram Brelstaff, Vesa
Kaihlavirta, Victor Nazarov, Ville Aine, Vincent Foley, Vipul
Ved Prakash, Vlad Skvortsov, Vojtěch Fried, Wei Cheng, Wei Hu,
Will Barrett, Will Farr, Will Leinweber, Will Robertson, Will
Thompson, Wirt Wolff, Wolfgang Jeltsch, Yuval Kogman, Zach
Kozatek, Zachary Smestad, Zohar Kelrich.

Finally, we wish to thank those readers who submitted over 800
comments anonymously.


.. _sec-1:

/Chapter 1. Getting Started `🔼 <#toc>`_
===================================================

.. 
   .. rubric:: Chapter 1. Getting Started
      :name: chapter-1.-getting-started
      :class: title

.. container:: toc

      **Table of Contents**

      *  `Your Haskell environment <#starting.ghc>`__
      *  `Getting started with ghci, the interpreter <#starting.ghci>`__
      *  `Basic interaction: using ghci as a calculator <#starting.calc>`__
         *  `Simple arithmetic <#starting.calc.arithmetic>`__
         *  `An arithmetic quirk: writing negative numbers <#starting.calc.neg>`__
         *  `Boolean logic, operators, and value comparisons <#starting.calc.comparison>`__
         *  `Operator precedence and associativity <#starting.calc.precedence>`__
         *  `Undefined values, and introducing variables <#starting.calc.undef>`__
         *  `Dealing with precedence and associativity rules <#id575887>`__
      *  `Command line editing in ghci <#starting.ghci.edit>`__
      *  `Lists <#starting.list>`__
         *  `Operators on lists <#starting.list.op>`__
      *  `Strings and characters <#starting.string>`__
      *  `First steps with types <#starting.types>`__
      *  `A simple program <#id577314>`__
      *  `Exercises <#starting.types.exercises>`__

   As you read the early chapters of this book, keep in mind that we
   will sometimes introduce ideas in restricted, simplified form.
   Haskell is a deep language, and presenting every aspect of a given
   subject all at once is likely to prove overwhelming. As we build a
   solid foundation in Haskell, we will expand upon these initial
   explanations.

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Your Haskell environment
                  :name: starting.ghc
                  :class: title

      Haskell is a language with many implementations, of which two are
      in wide use. Hugs is an interpreter that is primarily used for
      teaching. For real applications, the Glasgow Haskell Compiler
      (GHC) is much more popular. Compared to Hugs, GHC is more suited
      to “real work”: it compiles to native code, supports parallel
      execution, and provides useful performance analysis and debugging
      tools. For these reasons, GHC is the Haskell implementation that
      we will be using throughout this book.

      GHC has three main components.

      .. container:: itemizedlist

         -  **ghc** is an optimizing compiler that generates fast native code.

         -  **ghci** is an interactive interpreter and debugger.

         -  **runghc** is a program for running Haskell programs as
            scripts, without needing to compile them first.

      .. Note:: How we refer to the components of GHC

         When we discuss the GHC system as a whole, we will
         refer to it as GHC. If we are talking about a specific
         command, we will mention **ghc**, **ghci**, or
         **runghc** by name.

      In this book, we assume that you're using at least version 6.8.2
      of GHC, which was released in 2007. Many of our examples will work
      unmodified with older versions. However, we *recommend* using the
      newest version available for your platform. If you're using
      Windows or Mac OS X, you can get started easily and quickly using
      a prebuilt installer. To obtain a copy of GHC for these platforms,
      visit `the GHC download page <http://www.haskell.org/ghc/download.html>`__, 
      and look for the list of binary packages and installers.

      Many Linux distributors, and providers of BSD and other Unix
      variants, make custom binary packages of GHC available. Because
      these are built specifically for each environment, they are much
      easier to install and use than the generic binary packages that
      are available from the GHC download page. You can find a list of
      distributions that custom-build GHC at the GHC 
      `distribution packages <http://www.haskell.org/ghc/distribution_packages.html>`__
      page.

      For more detailed information about how to install GHC on a
      variety of popular platforms, we've provided some instructions in
      `Appendix A, Installing GHC and Haskell libraries <installing-ghc-and-haskell-libraries.html>`__.

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Getting started with ghci, the interpreter
                  :name: starting.ghci
                  :class: title

      The interactive interpreter for GHC is a program named **ghci**.
      It lets us enter and evaluate Haskell expressions, explore
      modules, and debug our code. If you are familiar with Python or
      Ruby, **ghci** is somewhat similar to ``python`` and ``irb``, the
      interactive Python and Ruby interpreters.

      .. Note:: The ghci command has a narrow focus

         We typically cannot copy some code out of a Haskell
         source file and paste it into **ghci**. This does not
         have a significant effect on debugging pieces of code,
         but it can initially be surprising if you are used to,
         say, the interactive Python interpreter.

      On Unix-like systems, we run **ghci** as a command in a shell
      window. On Windows, it's available via the Start Menu. For
      example, if you installed using the GHC installer on Windows XP,
      you should go to “All Programs”, then “GHC”; you will then see
      **ghci** in the list. (See `the section called “Windows” <installing-ghc-and-haskell-libraries.html#install.win>`__
      for a screenshot.)

      When we run **ghci**, it displays a startup banner, followed by a
      ``Prelude>`` prompt. Here, we're showing version 6.8.3 on a Linux
      box.

      .. code:: haskell
         :class: screen

         $ ghci
         GHCi, version 6.8.3: http://www.haskell.org/ghc/  :? for help
         Loading package base ... linking ... done.
         Prelude>

      The word ``Prelude`` in the prompt indicates that ``Prelude``, a
      standard library of useful functions, is loaded and ready to use.
      When we load other modules or source files, they will show up in
      the prompt, too.

      .. Tip:: Getting help
         :class: tip

         If you enter ``:?`` at the **ghci** prompt, it will
          print a long help message.

      The ``Prelude`` module is sometimes referred to as “the standard
      prelude”, because its contents are defined by the Haskell 98
      standard. Usually, it's simply shortened to “the prelude”.

      .. Note:: About the ghci prompt

         The prompt displayed by **ghci** changes frequently
         depending on what modules we have loaded. It can often
         grow long enough to leave little visual room on a
         single line for our input.

         For brevity and consistency, we have replaced
         **ghci**'s default prompts throughout this book with
         the prompt string ``ghci>``.

         If you want to do this youself, use **ghci**'s
         ``:set prompt`` directive, as follows.

         .. code:: haskell
            :class: screen

            Prelude> :set prompt "ghci> "
            ghci>

      The prelude is always implicitly available; we don't need to take
      any actions to use the types, values, or functions it defines. To
      use definitions from other modules, we must load them into
      **ghci**, using the **:module** command.

      .. code:: haskell
         :class: screen

         ghci> :module + Data.Ratio

      We can now use the functionality of the ``Data.Ratio`` module,
      which lets us work with rational numbers (fractions).

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Basic interaction: using ghci as a calculator
                  :name: starting.calc
                  :class: title

      In addition to providing a convenient interface for testing code
      fragments, **ghci** can function as a readily accessible desktop
      calculator. We can easily express any calculator operation in
      **ghci** and, as an added bonus, we can add more complex
      operations as we become more familiar with Haskell. Even using the
      interpreter in this simple way can help us to become more
      comfortable with how Haskell works.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Simple arithmetic
                     :name: starting.calc.arithmetic
                     :class: title

         We can immediately start entering expressions, to see what
         **ghci** will do with them. Basic arithmetic works similarly to
         languages like C and Python: we write expressions in *infix*
         form, where an operator appears between its operands.

         .. code:: haskell
            :class: screen

            ghci> 2 + 2
            4
            ghci> 31337 * 101
            3165037
            ghci> 7.0 / 2.0
            3.5

         The infix style of writing an expression is just a convenience:
         we can also write an expression in *prefix* form, where the
         operator precedes its arguments. To do this, we must enclose
         the operator in parentheses.

         .. code:: haskell
            :class: screen

            ghci> 2 + 2
            4
            ghci> (+) 2 2
            4

         As the expressions above imply, Haskell has a notion of
         integers and floating point numbers. Integers can be
         arbitrarily large. Here, ``(^)`` provides integer
         exponentiation.

         .. code:: haskell
            :class: screen

            ghci> 313 ^ 15
            27112218957718876716220410905036741257

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: An arithmetic quirk: writing negative
                     numbers
                     :name: starting.calc.neg
                     :class: title

         Haskell presents us with one peculiarity in how we must write
         numbers: it's often necessary to enclose a negative number in
         parentheses. This affects us as soon as we move beyond the
         simplest expressions.

         We'll start by writing a negative number.

         .. code:: haskell
            :class: screen

            ghci> -3
            -3

         The ``-`` above is a unary operator. In other words, we didn't
         write the single number “-3”; we wrote the number “3”, and
         applied the operator ``-`` to it. The ``-`` operator is
         Haskell's only unary operator, and we cannot mix it with infix
         operators.

         .. code:: haskell
            :class: screen

            ghci> 2 + -3

            <interactive>:1:0:
                precedence parsing error
                    cannot mix `(+)' [infixl 6] and prefix `-' [infixl 6] in the same infix expression

         If we want to use the unary minus near an infix operator, we
         must wrap the expression it applies to in parentheses.

         .. code:: haskell
            :class: screen

            ghci> 2 + (-3)
            -1
            ghci> 3 + (-(13 * 37))
            -478

         This avoids a parsing ambiguity. When we apply a function in
         Haskell, we write the name of the function, followed by its
         argument, for example ``f 3``. If we did not need to wrap a
         negative number in parentheses, we would have two profoundly
         different ways to read ``f-3``: it could be either “apply the
         function ``f`` to the number ``-3``”, or “subtract the number
         ``3`` from the variable ``f``”.

         *Most* of the time, we can omit white space (“blank” characters
         such as space and tab) from expressions, and Haskell will parse
         them as we intended. But not always. Here is an expression that
         works:

         .. code:: haskell
            :class: screen

            ghci> 2*3
            6

         And here is one that seems similar to the problematic negative
         number example above, but results in a different error message.

         .. code:: haskell
            :class: screen

            ghci> 2*-3

            <interactive>:1:1: Not in scope: `*-'

         Here, the Haskell implementation is reading ``*-`` as a single
         operator. Haskell lets us define new operators (a subject that
         we will return to later), but we haven't defined ``*-``. Once
         again, a few parentheses get us and **ghci** looking at the
         expression in the same way.

         .. code:: haskell
            :class: screen

            ghci> 2*(-3)
            -6

         Compared to other languages, this unusual treatment of negative
         numbers might seem annoying, but it represents a reasoned
         trade-off. Haskell lets us define new operators at any time.
         This is not some kind of esoteric language feature; we will see
         quite a few user-defined operators in the chapters ahead. The
         language designers chose to accept a slightly cumbersome syntax
         for negative numbers in exchange for this expressive power.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Boolean logic, operators, and value
                     comparisons
                     :name: starting.calc.comparison
                     :class: title

         The values of Boolean logic in Haskell are ``True`` and
         ``False``. The capitalization of these names is important. The
         language uses C-influenced operators for working with Boolean
         values: ``(&&)`` is logical “and”, and ``(||)`` is logical
         “or”.

         .. code:: haskell
            :class: screen

            ghci> True && False
            False
            ghci> False || True
            True

         While some programming languages treat the number zero as
         synonymous with ``False``, Haskell does not, nor does it
         consider a non-zero value to be ``True``.

         .. code:: haskell
            :class: screen

            ghci> True && 1

            <interactive>:1:8:
                No instance for (Num Bool)
                  arising from the literal `1' at <interactive>:1:8
                Possible fix: add an instance declaration for (Num Bool)
                In the second argument of `(&&)', namely `1'
                In the expression: True && 1
                In the definition of `it': it = True && 1

         Once again, we are faced with a substantial-looking error
         message. In brief, it tells us that the Boolean type, Bool, is
         not a member of the family of numeric types, ``Num``. The error
         message is rather long because **ghci** is pointing out the
         location of the problem, and hinting at a possible change we
         could make that might fix the problem.

         Here is a more detailed breakdown of the error message.

         .. container:: itemizedlist

            -  “\ ``No instance for (Num Bool)``\ ” tells us that
               **ghci** is trying to treat the numeric value 1 as having
               a Bool type, but it cannot.

            -  “\ :literal:`arising from the literal \`1'`\ ” indicates
               that it was our use of the number ``1`` that caused the
               problem.

            -  “\ :literal:`In the definition of \`it'`\ ” refers to a
               **ghci** short cut that we will revisit in a few pages.

         .. Tip:: Remain fearless in the face of error messages
            :class: tip

            We have an important point to make here, which we
            will repeat throughout the early sections of this
            book. If you run into problems or error messages
            that you do not yet understand, *don't panic*.
            Early on, all you have to do is figure out enough
            to make progress on a problem. As you acquire
            experience, you will find it easier to understand
            parts of error messages that initially seem
            obscure.

            The numerous error messages have a purpose: they
            actually help us in writing correct code, by making
            us perform some amount of debugging “up front”,
            before we ever run a program. If you are coming
            from a background of working with more permissive
            languages, this way of working may come as
            something of a shock. Bear with us.

         Most of Haskell's comparison operators are similar to those
         used in C and the many languages it has influenced.

         .. code:: haskell
            :class: screen

            ghci> 1 == 1
            True
            ghci> 2 < 3
            True
            ghci> 4 >= 3.99
            True

         One operator that differs from its C counterpart is “is not
         equal to”. In C, this is written as ``!=``. In Haskell, we
         write ``(/=)``, which resembles the ≠ notation used in
         mathematics.

         .. code:: haskell
            :class: screen

            ghci> 2 /= 3
            True

         Also, where C-like languages often use ``!`` for logical
         negation, Haskell uses the ``not`` function.

         .. code:: haskell
            :class: screen

            ghci> not True
            False

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Operator precedence and associativity
                     :name: starting.calc.precedence
                     :class: title

         Like written algebra and other programming languages that use
         infix operators, Haskell has a notion of operator precedence.
         We can use parentheses to explicitly group parts of an
         expression, and precedence allows us to omit a few parentheses.
         For example, the multiplication operator has a higher
         precedence than the addition operator, so Haskell treats the
         following two expressions as equivalent.

         .. code:: haskell
            :class: screen

            ghci> 1 + (4 * 4)
            17
            ghci> 1 + 4 * 4
            17

         Haskell assigns numeric precedence values to operators, with 1
         being the lowest precedence and 9 the highest. A
         higher-precedence operator is applied before a lower-precedence
         operator. We can use **ghci** to inspect the precedence levels
         of individual operators, using its **:info** command.

         .. code:: haskell
            :class: screen

            ghci> :info (+)
            class (Eq a, Show a) => Num a where
              (+) :: a -> a -> a
              ...
                -- Defined in GHC.Num
            infixl 6 +
            ghci> :info (*)
            class (Eq a, Show a) => Num a where
              ...
              (*) :: a -> a -> a
              ...
                -- Defined in GHC.Num
            infixl 7 *

         The information we seek is in the line “\ ``infixl 6 +``\ ”,
         which indicates that the ``(+)`` operator has a precedence of
         6. (We will explain the other output in a later chapter.) The
         “\ ``infixl 7 *``\ ” tells us that the ``(*)`` operator has a
         precedence of 7. Since ``(*)`` has a higher precedence than
         ``(+)``, we can now see why ``1 + 4 * 4`` is evaluated as
         ``1 + (4 * 4)``, and not ``(1 + 4) * 4``.

         Haskell also defines *associativity* of operators. This
         determines whether an expression containing multiple uses of an
         operator is evaluated from left to right, or right to left. The
         ``(+)`` and ``(*)`` operators are left associative, which is
         represented as ``infixl`` in the **ghci** output above. A right
         associative operator is displayed with ``infixr``.

         .. code:: haskell
            :class: screen

            ghci> :info (^)
            (^) :: (Num a, Integral b) => a -> b -> a  -- Defined in GHC.Real
            infixr 8 ^

         The combination of precedence and associativity rules are
         usually referred to as *fixity* rules.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Undefined values, and introducing
                     variables
                     :name: starting.calc.undef
                     :class: title

         Haskell's prelude, the standard library we mentioned earlier,
         defines at least one well-known mathematical constant for us.

         .. code:: haskell
            :class: screen

            ghci> pi
            3.141592653589793

         But its coverage of mathematical constants is not
         comprehensive, as we can quickly see. Let us look for Euler's
         number, ``e``.

         .. code:: haskell
            :class: screen

            ghci> e

            <interactive>:1:0: Not in scope: `e'

         Oh well. We have to define it ourselves.

         .. Note:: Don't worry about the error message

            If the above “not in scope” error message seems a
            little daunting, do not worry. All it means is that
            there is no variable defined with the name ``e``.

         Using **ghci**'s ``let`` construct, we can make a temporary
         definition of ``e`` ourselves.

         .. code:: haskell
            :class: screen

            ghci> let e = exp 1

         This is an application of the exponential function, ``exp``,
         and our first example of applying a function in Haskell. While
         languages like Python require parentheses around the arguments
         to a function, Haskell does not.

         With ``e`` defined, we can now use it in arithmetic
         expressions. The ``(^)`` exponentiation operator that we
         introduced earlier can only raise a number to an integer power.
         To use a floating point number as the exponent, we use the
         ``(**)`` exponentiation operator.

         .. code:: haskell
            :class: screen

            ghci> (e ** pi) - pi
            19.99909997918947

         .. WARNING:: This syntax is ghci-specific

            The syntax for ``let`` that **ghci** accepts is not
            the same as we would use at the “top level” of a
            normal Haskell program. We will see the normal
            syntax in `the section called “Introducing local variables” <#deftypes.locals>`__.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Dealing with precedence and associativity
                     rules
                     :name: id575887
                     :class: title

         It is sometimes better to leave at least some parentheses in
         place, even when Haskell allows us to omit them. Their presence
         can help future readers (including ourselves) to understand
         what we intended.

         Even more importantly, complex expressions that rely completely
         on operator precedence are notorious sources of bugs. A
         compiler and a human can easily end up with different notions
         of what even a short, parenthesis-free expression is supposed
         to do.

         There is no need to remember all of the precedence and
         associativity rules numbers: it is simpler to add parentheses
         if you are unsure.

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Command line editing in ghci
                  :name: starting.ghci.edit
                  :class: title

      On most systems, **ghci** has some amount of command line editing
      ability. In case you are not familiar with command line editing,
      it's a huge time saver. The basics are common to both Unix-like
      and Windows systems. Pressing the **up** arrow key on your
      keyboard recalls the last line of input you entered; pressing
      **up** repeatedly cycles through earlier lines of input. You can
      use the **left** and **right** arrow keys to move around inside a
      line of input. On Unix (but not Windows, unfortunately), the
      **tab** key completes partially entered identifiers.

      .. Tip:: Where to look for more information
         :class: tip

         We've barely scratched the surface of command line
         editing here. Since you can work more effectively if
         you're more familiar with the capabilities of your
         command line editing system, you might find it useful
         to do some further reading.

         On Unix-like systems, **ghci** uses the 
         `GNU readline library <http://tiswww.case.edu/php/chet/readline/rltop.html#Documentation>`__,
         which is powerful and customisable. On Windows,
         **ghci**'s command line editing capabilities are provided by the
         `**doskey** command <http://www.microsoft.com/resources/documentation/windows/xp/all/proddocs/en-us/doskey.mspx>`__.

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Lists
                  :name: starting.list
                  :class: title

      A list is surrounded by square brackets; the elements are
      separated by commas.

      .. code:: haskell
         :class: screen

         ghci> [1, 2, 3]
         [1,2,3]

      .. Note:: Commas are separators, not terminators

         Some languages permit the last element in a list to be
         followed by an optional trailing comma before a
         closing bracket, but Haskell doesn't allow this. If
         you leave in a trailing comma (e.g. ``[1,2,]``),
         you'll get a parse error.

      A list can be of any length. The empty list is written ``[]``.

      .. code:: haskell
         :class: screen

         ghci> []
         []
         ghci> ["foo", "bar", "baz", "quux", "fnord", "xyzzy"]
         ["foo","bar","baz","quux","fnord","xyzzy"]

      All elements of a list must be of the same type. Here, we violate
      this rule: our list starts with two Bool values, but ends with a
      string.

      .. code:: haskell
         :class: screen

         ghci> [True, False, "testing"]

         <interactive>:1:14:
             Couldn't match expected type `Bool' against inferred type `[Char]'
               Expected type: Bool
               Inferred type: [Char]
             In the expression: "testing"
             In the expression: [True, False, "testing"]

      Once again, **ghci**'s error message is verbose, but it's simply
      telling us that there is no way to turn the string into a Boolean
      value, so the list expression isn't properly typed.

      If we write a series of elements using *enumeration notation*,
      Haskell will fill in the contents of the list for us.

      .. code:: haskell
         :class: screen

         ghci> [1..10]
         [1,2,3,4,5,6,7,8,9,10]

      Here, the ``..`` characters denote an *enumeration*. We can only
      use this notation for types whose elements we can enumerate. It
      makes no sense for text strings, for instance: there is not any
      sensible, general way to enumerate ``["foo".."quux"]``.

      By the way, notice that the above use of range notation gives us a
      *closed interval*; the list contains both endpoints.

      When we write an enumeration, we can optionally specify the size
      of the step to use by providing the first two elements, followed
      by the value at which to stop generating the enumeration.

      .. code:: haskell
         :class: screen

         ghci> [1.0,1.25..2.0]
         [1.0,1.25,1.5,1.75,2.0]
         ghci> [1,4..15]
         [1,4,7,10,13]
         ghci> [10,9..1]
         [10,9,8,7,6,5,4,3,2,1]

      In the latter case above, the list is quite sensibly missing the
      end point of the enumeration, because it isn't an element of the
      series we defined.

      We can omit the end point of an enumeration. If a type doesn't
      have a natural “upper bound”, this will produce values
      indefinitely. For example, if you type ``[1..]`` at the **ghci**
      prompt, you'll have to interrupt or kill **ghci** to stop it from
      printing an infinite succession of ever-larger numbers. If you are
      tempted to do this, type **C** to halt the enumeration. We will
      find later on that infinite lists are often useful in Haskell.

      .. WARNING:: Beware enumerating floating point numbers

         Here's a non-intuitive bit of behaviour.

         .. code:: haskell
            :class: screen

            ghci> [1.0..1.8]
            [1.0,2.0]

         Behind the scenes, to avoid floating point roundoff
         problems, the Haskell implementation enumerates from
         ``1.0`` to ``1.8+0.5``.

         Using enumeration notation over floating point numbers
         can pack more than a few surprises, so if you use it
         at all, be careful. Floating point behavior is quirky
         in all programming languages; there is nothing unique
         to Haskell here.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Operators on lists
                     :name: starting.list.op
                     :class: title

         There are two ubiquitous operators for working with lists. We
         concatenate two lists using the ``(++)`` operator.

         .. code:: haskell
            :class: screen

            ghci> [3,1,3] ++ [3,7]
            [3,1,3,3,7]
            ghci> [] ++ [False,True] ++ [True]
            [False,True,True]

         More basic is the ``(:)`` operator, which adds an element to
         the front of a list. This is pronounced “cons” (short for
         “construct”).

         .. code:: haskell
            :class: screen

            ghci> 1 : [2,3]
            [1,2,3]
            ghci> 1 : []
            [1]

         You might be tempted to try writing ``[1,2]:3`` to add an
         element to the end of a list, but **ghci** will reject this
         with an error message, because the first argument of ``(:)``
         must be an element, and the second must be a list.

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Strings and characters
                  :name: starting.string
                  :class: title

      If you know a language like Perl or C, you'll find Haskell's
      notations for strings familiar.

      A text string is surrounded by double quotes.

      .. code:: haskell
         :class: screen

         ghci> "This is a string."
         "This is a string."

      As in many languages, we can represent hard-to-see characters by
      “escaping” them. Haskell's escape characters and escaping rules
      follow the widely used conventions established by the C language.
      For example, ``'\n'`` denotes a newline character, and ``'\t'`` is
      a tab character. For complete details, see `Appendix B,
      Characters, strings, and escaping
      rules <characters-strings-and-escaping-rules.html>`__.

      .. code:: haskell
         :class: screen

         ghci> putStrLn "Here's a newline -->\n<-- See?"
         Here's a newline -->
         <-- See?

      The ``putStrLn`` function prints a string.

      Haskell makes a distinction between single characters and text
      strings. A single character is enclosed in single quotes.

      .. code:: haskell
         :class: screen

         ghci> 'a'
         'a'

      In fact, a text string is simply a list of individual characters.
      Here's a painful way to write a short string, which **ghci** gives
      back to us in a more familiar form.

      .. code:: haskell
         :class: screen

         ghci> let a = ['l', 'o', 't', 's', ' ', 'o', 'f', ' ', 'w', 'o', 'r', 'k']
         ghci> a
         "lots of work"
         ghci> a == "lots of work"
         True

      The empty string is written ``""``, and is a synonym for ``[]``.

      .. code:: haskell
         :class: screen

         ghci> "" == []
         True

      Since a string is a list of characters, we can use the regular
      list operators to construct new strings.

      .. code:: haskell
         :class: screen

         ghci> 'a':"bc"
         "abc"
         ghci> "foo" ++ "bar"
         "foobar"

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: First steps with types
                  :name: starting.types
                  :class: title

      While we've talked a little about types already, our interactions
      with **ghci** have so far been free of much type-related thinking.
      We haven't told **ghci** what types we've been using, and it's
      mostly been willing to accept our input.

      Haskell requires type names to start with an uppercase letter, and
      variable names must start with a lowercase letter. Bear this in
      mind as you read on; it makes it much easier to follow the names.

      The first thing we can do to start exploring the world of types is
      to get **ghci** to tell us more about what it's doing. **ghci**
      has a command, **:set**, that lets us change a few of its default
      behaviours. We can tell it to print more type information as
      follows.

      .. code:: haskell
         :class: screen

         ghci> :set +t
         ghci> 'c'
         'c'
         it :: Char
         ghci> "foo"
         "foo"
         it :: [Char]

      What the ``+t`` does is tell **ghci** to print the type of an
      expression after the expression. That cryptic ``it`` in the output
      can be very useful: it's actually the name of a special variable,
      in which **ghci** stores the result of the last expression we
      evaluated. (This isn't a Haskell language feature; it's specific
      to **ghci** alone.) Let's break down the meaning of the last line
      of **ghci** output.

      .. container:: itemizedlist

         -  It's telling us about the special variable ``it``.

         -  We can read text of the form ``x :: y`` as meaning “the
            expression ``x`` has the type ``y``”.

         -  Here, the expression “it” has the type [Char]. (The name
            String is often used instead of [Char]. It is simply a
            synonym for [Char].)

      .. Tip:: The joy of “it”
         :class: tip

         That ``it`` variable is a handy **ghci** shortcut. It
         lets us use the result of the expression we just
         evaluated in a new expression.

         .. code:: haskell
            :class: screen

            ghci> "foo"
            "foo"
            it :: [Char]
            ghci> it ++ "bar"
            "foobar"
            it :: [Char]

         When evaluating an expression, **ghci** won't change
         the value of ``it`` if the evaluation fails. This lets
         you write potentially bogus expressions with something
         of a safety net.

         .. code:: haskell
            :class: screen

            ghci> it
            "foobar"
            it :: [Char]
            ghci> it ++ 3

            <interactive>:1:6:
                  No instance for (Num [Char])
                  arising from the literal `3' at <interactive>:1:6
                  Possible fix: add an instance declaration for (Num [Char])
                  In the second argument of `(++)', namely `3'
                  In the expression: it ++ 3
                  In the definition of `it': it = it ++ 3
            ghci> it
            "foobar"
            it :: [Char]
            ghci> it ++ "baz"
            "foobarbaz"
            it :: [Char]

         When we couple ``it`` with liberal use of the arrow
         keys to recall and edit the last expression we typed,
         we gain a decent way to experiment interactively: the
         cost of mistakes is very low. Take advantage of the
         opportunity to make cheap, plentiful mistakes when
         you're exploring the language!

      Here are a few more of Haskell's names for types, from expressions
      of the sort we've already seen.

      .. code:: haskell
         :class: screen

         ghci> 7 ^ 80
         40536215597144386832065866109016673800875222251012083746192454448001
         it :: Integer

      Haskell's integer type is named Integer. The size of an Integer
      value is bounded only by your system's memory capacity.

      Rational numbers don't look quite the same as integers. To
      construct a rational number, we use the ``(%)`` operator. The
      numerator is on the left, the denominator on the right.

      .. code:: haskell
         :class: screen

         ghci> :m +Data.Ratio
         ghci> 11 % 29
         11%29
         it :: Ratio Integer

      For convenience, **ghci** lets us abbreviate many commands, so we
      can write **:m** instead of **:module** to load a module.

      Notice *two* words on the right hand side of the ``::`` above. We
      can read this as a “Ratio of Integer”. We might guess that a Ratio
      must have values of type Integer as both numerator and
      denominator. Sure enough, if we try to construct a Ratio where the
      numerator and denominator are of different types, or of the same
      non-integral type, **ghci** complains.

      .. code:: haskell
         :class: screen

         ghci> 3.14 % 8

         <interactive>:1:0:
             Ambiguous type variable `t' in the constraints:
               `Integral t' arising from a use of `%' at <interactive>:1:0-7
               `Fractional t'
                 arising from the literal `3.14' at <interactive>:1:0-3
             Probable fix: add a type signature that fixes these type variable(s)
         ghci> 1.2 % 3.4

         <interactive>:1:0:
             Ambiguous type variable `t' in the constraints:
               `Integral t' arising from a use of `%' at <interactive>:1:0-8
               `Fractional t'
                 arising from the literal `3.4' at <interactive>:1:6-8
             Probable fix: add a type signature that fixes these type variable(s)

      Although it is initially useful to have **``:set +t``** giving us
      type information for every expression we enter, this is a facility
      we will quickly outgrow. After a while, we will often know what
      type we expect an expression to have. We can turn off the extra
      type information at any time, using the **:unset** command.

      .. code:: haskell
         :class: screen

         ghci> :unset +t
         ghci> 2
         2

      Even with this facility turned off, we can still get that type
      information easily when we need it, using another **ghci**
      command.

      .. code:: haskell
         :class: screen

         ghci> :type 'a'
         'a' :: Char
         ghci> "foo"
         "foo"
         ghci> :type it
         it :: [Char]

      The **:type** command will print type information for any
      expression we give it (including ``it``, as we see above). It
      won't actually evaluate the expression; it only checks its type
      and prints that.

      Why are the types reported for these two expressions different?

      .. code:: haskell
         :class: screen

         ghci> 3 + 2
         5
         ghci> :type it
         it :: Integer
         ghci> :type 3 + 2
         3 + 2 :: (Num t) => t

      Haskell has several numeric types. For example, a literal number
      such as ``1`` could, depending on the context in which it appears,
      be an integer or a floating point value. When we force **ghci** to
      evaluate the expression ``3 + 2``, it has to choose a type so that
      it can print the value, and it defaults to Integer. In the second
      case, we ask **ghci** to print the type of the expression without
      actually evaluating it, so it does not have to be so specific. It
      answers, in effect, “its type is numeric”. We will see more of
      this style of type annotation in `Chapter 6, Using Typeclasses <using-typeclasses.html>`__.

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: A simple program
                  :name: id577314
                  :class: title

      Let's take a small leap ahead, and write a small program that
      counts the number of lines in its input. Don't expect to
      understand this yet; it's just fun to get our hands dirty. In a
      text editor, enter the following code into a file, and save it as
      ``WC.hs``.

      .. code:: haskell
         :class: screen

         -- file: ch01/WC.hs
         -- lines beginning with "--" are comments.

         main = interact wordCount
             where wordCount input = show (length (lines input)) ++ "\n"

      Find or create a text file; let's call it
      ``quux.txt``\ :sup:`[`\ `1 <#ftn.id577349>`__\ :sup:`]`.

      .. code:: haskell
         :class: screen

         $ cat quux.txt
         Teignmouth, England
         Paris, France
         Ulm, Germany
         Auxerre, France
         Brunswick, Germany
         Beaumont-en-Auge, France
         Ryazan, Russia

      From a shell or command prompt, run the following command.

      .. code:: haskell
         :class: screen

         $ runghc WC < quux.txt
         7

      We have successfully written a simple program that interacts with
      the real world! In the chapters that follow, we will successively
      fill the gaps in our understanding until we can write programs of
      our own.

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Exercises
                  :name: starting.types.exercises
                  :class: title

      .. container:: qandaset

         .. list-table::
            :widths: 1

            - 

               - **1.** 
                  Enter the following expressions into ghci. What are their types? 

                  - 5 + 8 
                  - 3 * 5 + 8 
                  - 2 + 4 
                  - (+) 2 4 
                  - sqrt 16 
                  - succ 6 
                  - succ 7 
                  - pred 9 
                  - pred 8 
                  - sin (pi / 2) 
                  - truncate pi 
                  - round 3.5 
                  - round 3.4 
                  - floor 3.7 
                  - ceiling 3.3 
            - 

               - **2.** 
                  From ghci, type :? to print some help. 
                  Define a variable, such as let x = 1, then type :show bindings. 
                  What do you see? 

            - 

               - **3.** 
                  The words function counts the number of words in a string. 
                  Modify the WC.hs example to count the number of words in a file. 
                  

            - 

               - **4.** 
                  Modify the WC.hs example again, to print the number of characters in a file. 
                  


   .. container:: footnotes

      .. container:: footnote

         :sup:`[`\ `1 <#id577349>`__\ :sup:`]` Incidentally, what do
         these cities have in common?


.. _sec-2:

/Chapter 2. Types and Functions `🔼 <#toc>`_
============================================

.. container:: chapter
   :name: funcstypes

   .. container:: titlepage

      .. container::

         .. container::

            .. rubric:: Chapter 2. Types and Functions
               :name: chapter-2.-types-and-functions
               :class: title

   .. container:: toc

      **Table of Contents**

      *  `Why care about types? <#id577672>`__
      *  `Haskell's type system <#funcstypes.types>`__

         *  `Strong types <#id577786>`__
         *  `Static types <#id577931>`__
         *  `Type inference <#id578066>`__

      *  `What to expect from the type system <#id578095>`__
      *  `Some common basic types <#funcstypes.basic>`__
      *  `Function application <#funcstypes.calling>`__
      *  `Useful composite data types: lists and tuples <#funcstypes.composite>`__

         *  `Exercises <#funcstypes.composite.exercises>`__

      *  `Functions over lists and tuples <#id579120>`__

         *  `Passing an expression to a function <#funcstypes.calling.expr>`__

      *  `Function types and purity <#funcstypes.sigs>`__

      *  `Haskell source files, and writing simple functions <#funcstypes.srcfile>`__

         *  `Just what is a variable, anyway? <#funcstypes.variable>`__
         *  `Conditional evaluation <#funcstypes.if>`__

      *  `Understanding evaluation by example <#id580425>`__

         *  `Lazy evaluation <#id580456>`__
         *  `A more involved example <#id580594>`__
         *  `Recursion <#id580915>`__
         *  `Ending the recursion <#id581112>`__
         *  `Returning from the recursion <#id581267>`__
         *  `What have we learned? <#id581397>`__

      *  `Polymorphism in Haskell <#funcstypes.polymorphism>`__

         *  `Reasoning about polymorphic functions <#id581696>`__
         *  `Further reading <#id581793>`__

      *  `The type of a function of more than one argument <#id581829>`__
      *  `Exercises <#funcstypes.sigs.exercises>`__
      *  `Why the fuss over purity? <#id582031>`__
      *  `Conclusion <#funcstypes.end>`__

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Why care about types?
                  :name: id577672
                  :class: title

      Every expression and function in Haskell has a *type*. For
      example, the value ``True`` has the type Bool, while the value
      ``"foo"`` has the type String. The type of a value indicates that
      it shares certain properties with other values of the same type.
      For example, we can add numbers, and we can concatenate lists;
      these are properties of those types. We say an expression “has
      type ``X``”, or “is of type ``X``”.

      Before we launch into a deeper discussion of Haskell's type
      system, let's talk about why we should care about types at all:
      what are they even *for*? At the lowest level, a computer is
      concerned with bytes, with barely any additional structure. What a
      type system gives us is *abstraction*. A type adds meaning to
      plain bytes: it lets us say “these bytes are text”, “those bytes
      are an airline reservation”, and so on. Usually, a type system
      goes beyond this to prevent us from accidentally mixing types up:
      for example, a type system usually won't let us treat a hotel
      reservation as a car rental receipt.

      The benefit of introducing abstraction is that it lets us forget
      or ignore low-level details. If I know that a value in my program
      is a string, I don't have to know the intimate details of how
      strings are implemented: I can just assume that my string is going
      to behave like all the other strings I've worked with. 

      What makes type systems interesting is that they're not all equal.
      In fact, different type systems are often not even concerned with
      the same kinds of problems. A programming language's type system
      deeply colours the way we think, and write code, in that language.

      Haskell's type system allows us to think at a very abstract level:
      it permits us to write concise, powerful programs.

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Haskell's type system
                  :name: funcstypes.types
                  :class: title

      There are three interesting aspects to types in Haskell: they are
      *strong*, they are *static*, and they can be automatically
      *inferred*. Let's talk in more detail about each of these ideas.
      When possible, we'll present similarities between concepts from
      Haskell's type system and related ideas in other languages. We'll
      also touch on the respective strengths and weaknesses of each of
      these properties.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Strong types
                     :name: id577786
                     :class: title

         When we say that Haskell has a *strong* type system, we mean
         that the type system guarantees that a program cannot contain
         certain kinds of errors. These errors come from trying to write
         expressions that don't make sense, such as using an integer as
         a function. For instance, if a function expects to work with
         integers, and we pass it a string, a Haskell compiler will
         reject this.

         We call an expression that obeys a language's type rules *well
         typed*. An expression that disobeys the type rules is *ill
         typed*, and will cause a *type error*.

         Another aspect of Haskell's view of strong typing is that it
         will not automatically coerce values from one type to another.
         (Coercion is also known as casting or conversion.) For example,
         a C compiler will automatically and silently coerce a value of
         type int into a float on our behalf if a function expects a
         parameter of type float, but a Haskell compiler will raise a
         compilation error in a similar situation. We must explicitly
         coerce types by applying coercion functions.

         Strong typing does occasionally make it more difficult to write
         certain kinds of code. For example, a classic way to write
         low-level code in the C language is to be given a byte array,
         and cast it to treat the bytes as if they're really a
         complicated data structure. This is very efficient, since it
         doesn't require us to copy the bytes around. Haskell's type
         system does not allow this sort of coercion. In order to get
         the same structured view of the data, we would need to do some
         copying, which would cost a little in performance.

         The huge benefit of strong typing is that it catches real bugs
         in our code before they can cause problems. For example, in a
         strongly typed language, we can't accidentally use a string
         where an integer is expected.

         .. Note:: Weaker and stronger types

            It is useful to be aware that many language
            communities have their own definitions of a “strong
            type”. Nevertheless, we will speak briefly and in
            broad terms about the notion of strength in type
            systems.

            In academic computer science, the meanings of
            “strong” and “weak” have a narrowly technical
            meaning: strength refers to *how permissive* a type
            system is. A weaker type system treats more
            expressions as valid than a stronger type system.

            For example, in Perl, the expression ``"foo" + 2``
            evaluates to the number 2, but the expression
            ``"13foo" + 2`` evaluates to the number 15. Haskell
            rejects both expressions as invalid, because the
            ``(+)`` operator requires both of its operands to
            be numeric. Because Perl's type system is more
            permissive than Haskell's, we say that it is weaker
            under this narrow technical interpretation.

            The fireworks around type systems have their roots
            in ordinary English, where people attach notions of
            *value* to the words “weak” and “strong”: we
            usually think of strength as better than weakness.
            Many more programmers speak plain English than
            academic jargon, and quite often academics *really
            are* throwing brickbats at whatever type system
            doesn't suit their fancy. The result is often that
            popular Internet pastime, a flame war.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Static types
                     :name: id577931
                     :class: title

         Having a *static* type system means that the compiler knows the
         type of every value and expression at compile time, before any
         code is executed. A Haskell compiler or interpreter will detect
         when we try to use expressions whose types don't match, and
         reject our code with an error message before we run it.

         .. code:: haskell
            :class: screen

            ghci> True && "false"

            <interactive>:1:8:
                Couldn't match expected type `Bool' against inferred type `[Char]'
                In the second argument of `(&&)', namely `"false"'
                In the expression: True && "false"
                In the definition of `it': it = True && "false"

         This error message is of a kind we've seen before. The compiler
         has inferred that the type of the expression ``"false"`` is
         [Char]. The ``(&&)`` operator requires each of its operands to
         be of type Bool, and its left operand indeed has this type.
         Since the actual type of ``"false"`` does not match the
         required type, the compiler rejects this expression as ill
         typed.

         Static typing can occasionally make it difficult to write some
         useful kinds of code. In languages like Python, “duck typing”
         is common, where an object acts enough like another to be used
         as a substitute for it\ :sup:`[`\ `2 <#ftn.id578004>`__\ :sup:`]`. Fortunately,
         Haskell's system of *typeclasses*, which we will cover in
         `Chapter 6, Using Typeclasses <using-typeclasses.html>`__,
         provides almost all of the benefits of dynamic typing, in a
         safe and convenient form. Haskell has some support for
         programming with truly dynamic types, though it is not quite as
         easy as in a language that wholeheartedly embraces the notion.

         Haskell's combination of strong and static typing makes it
         impossible for type errors to occur at runtime. While this
         means that we need to do a little more thinking “up front”, it
         also eliminates many simple errors that can otherwise be
         devilishly hard to find. It's a truism within the Haskell
         community that once code compiles, it's more likely to work
         correctly than in other languages. (Perhaps a more realistic
         way of putting this is that Haskell code often has fewer
         trivial bugs.)

         Programs written in dynamically typed languages require large
         suites of tests to give some assurance that simple type errors
         cannot occur. Test suites cannot offer complete coverage: some
         common tasks, such as refactoring a program to make it more
         modular, can introduce new type errors that a test suite may
         not expose.

         In Haskell, the compiler proves the absence of type errors for
         us: a Haskell program that compiles will not suffer from type
         errors when it runs. Refactoring is usually a matter of moving
         code around, then recompiling and tidying up a few times until
         the compiler gives us the “all clear”.

         A helpful analogy to understand the value of static typing is
         to look at it as putting pieces into a jigsaw puzzle. In
         Haskell, if a piece has the wrong shape, it simply won't fit.
         In a dynamically typed language, all the pieces are 1x1 squares
         and always fit, so you have to constantly examine the resulting
         picture and check (through testing) whether it's correct.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Type inference
                     :name: id578066
                     :class: title

         Finally, a Haskell compiler can automatically deduce the types
         of almost\ :sup:`[`\ `3 <#ftn.id578076>`__\ :sup:`]` all
         expressions in a program. This process is known as *type
         inference*. Haskell allows us to explicitly declare the type of
         any value, but the presence of type inference means that this
         is almost always optional, not something we are required to do.

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: What to expect from the type system
                  :name: id578095
                  :class: title

      Our exploration of the major capabilities and benefits of
      Haskell's type system will span a number of chapters. Early on,
      you may find Haskell's types to be a chore to deal with.

      For example, instead of simply writing some code and running it to
      see if it works as you might expect in Python or Ruby, you'll
      first need to make sure that your program passes the scrutiny of
      the type checker. Why stick with the learning curve?

      While strong, static typing makes Haskell safe, type inference
      makes it concise. The result is potent: we end up with a language
      that's both safer than popular statically typed languages, and
      often more expressive than dynamically typed languages. This is a
      strong claim to make, and we will back it up with evidence
      throughout the book.

      Fixing type errors may initially feel like more work than if you
      were using a dynamic language. It might help to look at this as
      moving much of your debugging *up front*. The compiler shows you
      many of the logical flaws in your code, instead of leaving you to
      stumble across problems at runtime.

      Furthermore, because Haskell can infer the types of your
      expressions and functions, you gain the benefits of static typing
      *without* the added burden of “finger typing” imposed by less
      powerful statically typed languages. In other languages, the type
      system serves the needs of the compiler. In Haskell, it serves
      *you*. The tradeoff is that you have to learn to work within the
      framework it provides.

      We will introduce new uses of Haskell's types throughout this
      book, to help us to write and test practical code. As a result,
      the complete picture of why the type system is worthwhile will
      emerge gradually. While each step should justify itself, the whole
      will end up greater than the sum of its parts.

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Some common basic types
                  :name: funcstypes.basic
                  :class: title

      In `the section called “First steps with types” <getting-started.html#starting.types>`__, 
      we introduced a
      few types. Here are several more of the most common base types.

      .. container:: itemizedlist

         -  A Char value represents a Unicode character.

         -  A Bool value represents a value in Boolean logic. The
            possible values of type Bool are ``True`` and ``False``.

         -  The Int type is used for signed, fixed-width integer values.
            The exact range of values representable as Int depends on
            the system's longest “native” integer: on a 32-bit machine,
            an Int is usually 32 bits wide, while on a 64-bit machine,
            it is usually 64 bits wide. The Haskell standard only
            guarantees that an Int is wider than 28 bits. (There exist
            numeric types that are exactly 8, 16, and so on bits wide,
            in signed and unsigned flavours; we'll get to those later.)

         -  An Integer value is a signed integer of unbounded size.
            Integers are not used as often as Ints, because they are
            more expensive both in performance and space consumption. On
            the other hand, Integer computations do not silently
            overflow, so they give more reliably correct answers.

         -  Values of type Double are used for floating point numbers. A
            Double value is typically 64 bits wide, and uses the
            system's native floating point representation. (A narrower
            type, Float, also exists, but its use is discouraged;
            Haskell compiler writers concentrate more on making Double
            efficient, so Float is much slower.)

      We have already briefly seen Haskell's notation for types in 
      `the section called “First steps with types” <getting-started.html#starting.types>`__. 
      When we write a
      type explicitly, we use the notation ``expression ::``\ ``MyType``
      to say that ``expression`` has the type MyType. If we omit the
      ``::`` and the type that follows, a Haskell compiler will infer
      the type of the expression.

      .. code:: haskell
         :class: screen

         ghci> :type 'a'
         'a' :: Char
         ghci> 'a' :: Char
         'a'
         ghci> [1,2,3] :: Int

         <interactive>:1:0:
             Couldn't match expected type `Int' against inferred type `[a]'
             In the expression: [1, 2, 3] :: Int
             In the definition of `it': it = [1, 2, 3] :: Int

      The combination of ``::`` and the type after it is called a *type
      signature*.

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Function application
                  :name: funcstypes.calling
                  :class: title

      Now that we've had our fill of data types for a while, let's turn
      our attention to *working* with some of the types we've seen,
      using functions.

      To apply a function in Haskell, we write the name of the function
      followed by its arguments.

      .. code:: haskell
         :class: screen

         ghci> odd 3
         True
         ghci> odd 6
         False

      We don't use parentheses or commas to group or separate the
      arguments to a function; merely writing the name of the function,
      followed by each argument in turn, is enough. As an example, let's
      apply the ``compare`` function, which takes two arguments.

      .. code:: haskell
         :class: screen

         ghci> compare 2 3
         LT
         ghci> compare 3 3
         EQ
         ghci> compare 3 2
         GT

      If you're used to function call syntax in other languages, this
      notation can take a little getting used to, but it's simple and
      uniform.

      Function application has higher precedence than using operators,
      so the following two expressions have the same meaning.

      .. code:: haskell
         :class: screen

         ghci> (compare 2 3) == LT
         True
         ghci> compare 2 3 == LT
         True

      The above parentheses don't do any harm, but they add some visual
      noise. Sometimes, however, we *must* use parentheses to indicate
      how we want a complicated expression to be parsed.

      .. code:: haskell
         :class: screen

         ghci> compare (sqrt 3) (sqrt 6)
         LT

      This applies ``compare`` to the results of applying ``sqrt 3`` and
      ``sqrt 6``, respectively. If we omit the parentheses, it looks
      like we are trying to pass four arguments to ``compare``, instead
      of the two it accepts.

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Useful composite data types: lists and tuples
                  :name: funcstypes.composite
                  :class: title

      A composite data type is constructed from other types. The most
      common composite data types in Haskell are lists and tuples.

      We've already seen the list type mentioned in 
      `the section called “Strings and characters” <getting-started.html#starting.string>`__, 
      where we found that Haskell represents a text string as a list of Char
      values, and that the type “list of Char” is written [Char].

      The ``head`` function returns the first element of a list.

      .. code:: haskell
         :class: screen

         ghci> head [1,2,3,4]
         1
         ghci> head ['a','b','c']
         'a'

      Its counterpart, ``tail``, returns all *but* the head of a list.

      .. code:: haskell
         :class: screen

         ghci> tail [1,2,3,4]
         [2,3,4]
         ghci> tail [2,3,4]
         [3,4]
         ghci> tail [True,False]
         [False]
         ghci> tail "list"
         "ist"
         ghci> tail []
         \*\*\* Exception: Prelude.tail: empty list

      As you can see, we can apply ``head`` and ``tail`` to lists of
      different types. Applying ``head`` to a [Char] value returns a
      Char value, while applying it to a [Bool] value returns a Bool
      value. The ``head`` function doesn't care what type of list it
      deals with.

      Because the values in a list can have any type, we call the list
      type *polymorphic*\ :sup:`[`\ `4 <#ftn.id578737>`__\ :sup:`]`.
      When we want to write a polymorphic type, we use a *type
      variable*, which must begin with a lowercase letter. A type
      variable is a placeholder, where eventually we'll substitute a
      real type.

      We can write the type “list of ``a``” by enclosing the type
      variable in square brackets: [a]. This amounts to saying “I don't
      care what type I have; I can make a list with it”.

      .. Note:: Distinguishing type names and type variables

         We can now see why a type name must start with an
         uppercase letter: this makes it distinct from a type
         variable, which must start with a lowercase letter.

      When we talk about a list with values of a specific type, we
      substitute that type for our type variable. So, for example, the
      type [Int] is a list of values of type Int, because we substituted
      Int for ``a``. Similarly, the type [MyPersonalType] is a list of
      values of type MyPersonalType. We can perform this substitution
      recursively, too: [[Int]] is a list of values of type [Int], i.e.
      a list of lists of Int.

      .. code:: haskell
         :class: screen

         ghci> :type [[True],[False,False]]
         [[True],[False,False]] :: [[Bool]]

      The type of this expression is a list of lists of Bool.

      .. Note:: Lists are special

         Lists are the “bread and butter” of Haskell
         collections. In an imperative language, we might
         perform a task many items by iterating through a loop.
         This is something that we often do in Haskell by
         traversing a list, either by recursing or using a
         function that recurses for us. Lists are the easiest
         stepping stone into the idea that we can use data to
         structure our program and its control flow. We'll be
         spending a lot more time discussing lists in
         `Chapter 4, Functional programming <functional-programming.html>`__.

      A tuple is a fixed-size collection of values, where each value can
      have a different type. This distinguishes them from a list, which
      can have any length, but whose elements must all have the same
      type.

      To help to understand the difference, let's say we want to track
      two pieces of information about a book. It has a year of
      publication, which is a number, and a title, which is a string. We
      can't keep both of these pieces of information in a list, because
      they have different types. Instead, we use a tuple.

      .. code:: haskell
         :class: screen

         ghci> (1964, "Labyrinths")
         (1964,"Labyrinths")

      We write a tuple by enclosing its elements in parentheses and
      separating them with commas. We use the same notation for writing
      its type.

      .. code:: haskell
         :class: screen

         ghci> :type (True, "hello")
         (True, "hello") :: (Bool, [Char])
         ghci> (4, ['a', 'm'], (16, True))
         (4,"am",(16,True))

      There's a special type, (), that acts as a tuple of zero elements.
      This type has only one value, also written ``()``. Both the type
      and the value are usually pronounced “unit”. If you are familiar
      with C, () is somewhat similar to void.

      Haskell doesn't have a notion of a one-element tuple. Tuples are
      often referred to using the number of elements as a prefix. A
      2-tuple has two elements, and is usually called a *pair*. A
      “3-tuple” (sometimes called a *triple*) has three elements; a
      5-tuple has five; and so on. In practice, working with tuples that
      contain more than a handful of elements makes code unwieldy, so
      tuples of more than a few elements are rarely used.

      A tuple's type represents the number, positions, and types of its
      elements. This means that tuples containing different numbers or
      types of elements have distinct types, as do tuples whose types
      appear in different orders.

      .. code:: haskell
         :class: screen

         ghci> :type (False, 'a')
         (False, 'a') :: (Bool, Char)
         ghci> :type ('a', False)
         ('a', False) :: (Char, Bool)

      In this example, the expression ``(False, 'a')`` has the type
      (Bool, Char), which is distinct from the type of ``('a', False)``.
      Even though the number of elements and their types are the same,
      these two types are distinct because the positions of the element
      types are different.

      .. code:: haskell
         :class: screen

         ghci> :type (False, 'a', 'b')
         (False, 'a', 'b') :: (Bool, Char, Char)

      This type, (Bool, Char, Char), is distinct from (Bool, Char)
      because it contains three elements, not two.

      We often use tuples to return multiple values from a function. We
      can also use them any time we need a fixed-size collection of
      values, if the circumstances don't require a custom container
      type.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Exercises
                     :name: funcstypes.composite.exercises
                     :class: title

         .. container:: qandaset

            .. list-table::
               :widths: 1

               - 

                  - **1.** What are the types of the following expressions?

                     False

                     (["foo", "bar"], 'a')

                     [(True, []), (False, [['a']])]

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Functions over lists and tuples
                  :name: id579120
                  :class: title

      Our discussion of lists and tuples mentioned how we can construct
      them, but little about how we do anything with them afterwards. We
      have only been introduced to two list functions so far, ``head``
      and ``tail``.

      A related pair of list functions, ``take`` and ``drop``, take two
      arguments. Given a number ``n`` and a list, ``take`` returns the
      first ``n`` elements of the list, while ``drop`` returns all *but*
      the first ``n`` elements of the list. (As these functions take two
      arguments, notice that we separate each function and its arguments
      using white space.)

      .. code:: haskell
         :class: screen

         ghci> take 2 [1,2,3,4,5]
         [1,2]
         ghci> drop 3 [1,2,3,4,5]
         [4,5]

      For tuples, the ``fst`` and ``snd`` functions return the first and
      second element of a pair, respectively.

      .. code:: haskell
         :class: screen

         ghci> fst (1,'a')
         1
         ghci> snd (1,'a')
         'a'

      If your background is in any of a number of other languages, each
      of these may look like an application of a function to two
      arguments. Under Haskell's convention for function application,
      each one is an application of a function to a single pair.

      .. Note:: Haskell tuples aren't immutable lists

         If you are coming from the Python world, you'll
         probably be used to lists and tuples being almost
         interchangeable. Although the elements of a Python
         tuple are immutable, it can be indexed and iterated
         over using the same methods as a list. This isn't the
         case in Haskell, so don't try to carry that idea with
         you into unfamiliar linguistic territory.

         As an illustration, take a look at the type signatures
         of ``fst`` and ``snd``: they're defined *only* for
         pairs, and can't be used with tuples of other sizes.
         Haskell's type system makes it tricky to write a
         generalised “get the second element from any tuple, no
         matter how wide” function.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Passing an expression to a function
                     :name: funcstypes.calling.expr
                     :class: title

         In Haskell, function application is left associative. This is
         best illustrated by example: the expression ``a b c d`` is
         equivalent to ``(((a b) c) d)``. If we want to use one
         expression as an argument to another, we have to use explicit
         parentheses to tell the parser what we really mean. Here's an
         example.

         .. code:: haskell
            :class: screen

            ghci> head (drop 4 "azerty")
            't'

         We can read this as “pass the expression ``drop 4 "azerty"`` as
         the argument to ``head``”. If we were to leave out the
         parentheses, the offending expression would be similar to
         passing three arguments to ``head``. Compilation would fail
         with a type error, as ``head`` requires a single argument, a
         list.

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Function types and purity
                  :name: funcstypes.sigs
                  :class: title

      Let's take a look at a function's type.

      .. code:: haskell
         :class: screen

         ghci> :type lines
         lines :: String -> [String]

      We can read the ``->`` above as “to”, which loosely translates to
      “returns”. The signature as a whole thus reads as “\ ``lines`` has
      the type String to list-of-String\ ”. Let's try applying the
      function.

      .. code:: haskell
         :class: screen

         ghci> lines "the quick\nbrown fox\njumps"
         ["the quick","brown fox","jumps"]

      The ``lines`` function splits a string on line boundaries. Notice
      that its type signature gave us a hint as to what the function
      might actually do: it takes one String, and returns many. This is
      an incredibly valuable property of types in a functional language.

      A *side effect* introduces a dependency between the global state
      of the system and the behaviour of a function. For example, let's
      step away from Haskell for a moment and think about an imperative
      programming language. Consider a function that reads and returns
      the value of a global variable. If some other code can modify that
      global variable, then the result of a particular application of
      our function depends on the current value of the global variable.
      The function has a side effect, even though it never modifies the
      variable itself.

      Side effects are essentially invisible inputs to, or outputs from,
      functions. In Haskell, the default is for functions to *not* have
      side effects: the result of a function depends only on the inputs
      that we explicitly provide. We call these functions *pure*;
      functions with side effects are *impure*.

      If a function has side effects, we can tell by reading its type
      signature: the type of the function's result will begin with IO.

      .. code:: haskell
         :class: screen

         ghci> :type readFile
         readFile :: FilePath -> IO String

      Haskell's type system prevents us from accidentally mixing pure
      and impure code.

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Haskell source files, and writing simple
                  functions
                  :name: funcstypes.srcfile
                  :class: title

      Now that we know how to apply functions, it's time we turned our
      attention to writing them. While we can write functions in
      **ghci**, it's not a good environment for this. It only accepts a
      highly restricted subset of Haskell: most importantly, the syntax
      it uses for defining functions is not the same as we use in a
      Haskell source file\ :sup:`[`\ `5 <#ftn.id579534>`__\ :sup:`]`.
      Instead, we'll finally break down and create a source file.

      Haskell source files are usually identified with a suffix of
      ``.hs``. Here's a simple function definition: open up a file named
      ``add.hs``, and add these contents to it.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/add.hs
         add a b = a + b

      On the left hand side of the ``=`` is the name of the function,
      followed by the arguments to the function. On the right hand side
      is the body of the function. With our source file saved, we can
      load it into **ghci**, and use our new ``add`` function straight
      away. (The prompt that **ghci** displays will change after you
      load your file.)

      .. code:: haskell
         :class: screen

         ghci> :load add.hs
         [1 of 1] Compiling Main             ( add.hs, interpreted )
         Ok, modules loaded: Main.
         ghci> add 1 2
         3

      .. Note:: What if ghci cannot find your source file?

         When you run **ghci** it may not be able to find your
         source file. It will search for source files in
         whatever directory it was run. If this is not the
         directory that your source file is actually in, you
         can use **ghci**'s ``:cd`` command to change its
         working directory.

         .. code:: haskell
            :class: screen

            ghci> :cd /tmp

         Alternatively, you can provide the path to your
         Haskell source file as the argument to ``:load``. This
         path can be either absolute or relative to **ghci**'s
         current directory.

      When we apply ``add`` to the values ``1`` and ``2``, the variables
      ``a`` and ``b`` on the left hand side of our definition are given
      (or “bound to”) the values ``1`` and ``2``, so the result is the
      expression ``1 + 2``.

      Haskell doesn't have a **return** keyword, as a function is a
      single expression, not a sequence of statements. The value of the
      expression is the result of the function. (Haskell does have a
      function called ``return``, but we won't discuss it for a while;
      it has a different meaning than in imperative languages.)

      When you see an ``=`` symbol in Haskell code, it represents
      “meaning”: the name on the left is defined to be the expression on
      the right.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Just what is a variable, anyway?
                     :name: funcstypes.variable
                     :class: title

         In Haskell, a variable provides a way to give a name to an
         expression. Once a variable is *bound to* (i.e. associated
         with) a particular expression, its value does not change: we
         can always use the name of the variable instead of writing out
         the expression, and get the same result either way.

         If you're used to imperative programming languages, you're
         likely to think of a variable as a way of identifying a *memory
         location* (or some equivalent) that can hold different values
         at different times. In an imperative language we can change a
         variable's value at any time, so that examining the memory
         location repeatedly can potentially give different results each
         time.

         The critical difference between these two notions of a variable
         is that in Haskell, once we've bound a variable to an
         expression, we know that we can always substitute it for that
         expression, because it will not change. In an imperative
         language, this notion of substitutability does not hold.

         For example, if we run the following tiny Python script, it
         will print the number 11.

         .. code:: haskell
            :class: programlisting

            x = 10
            x = 11
            # value of x is now 11
            print x

         In contrast, trying the equivalent in Haskell results in an
         error.

         .. code:: haskell
            :class: programlisting

            -- file: ch02/Assign.hs
            x = 10
            x = 11

         We cannot assign a value to ``x`` twice.

         .. code:: haskell
            :class: screen

            ghci> :load Assign
            [1 of 1] Compiling Main             ( Assign.hs, interpreted )

            Assign.hs:4:0:
                Multiple declarations of `Main.x'
                Declared at: Assign.hs:3:0
                             Assign.hs:4:0
            Failed, modules loaded: none.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Conditional evaluation
                     :name: funcstypes.if
                     :class: title

         Like many other languages, Haskell has an ``if`` expression.
         Let's see it in action, then we'll explain what's going on. As
         an example, we'll write our own version of the standard
         ``drop`` function. Before we begin, let's probe a little into
         how ``drop`` behaves, so we can replicate its behaviour.

         .. code:: haskell
            :class: screen

            ghci> drop 2 "foobar"
            "obar"
            ghci> drop 4 "foobar"
            "ar"
            ghci> drop 4 [1,2]
            []
            ghci> drop 0 [1,2]
            [1,2]
            ghci> drop 7 []
            []
            ghci> drop (-2) "foo"
            "foo"

         From the above, it seems that ``drop`` returns the original
         list if the number to remove is less than or equal to zero.
         Otherwise, it removes elements until either it runs out or
         reaches the given number. Here's a ``myDrop`` function that has
         the same behaviour, and uses Haskell's ``if`` expression to
         decide what to do. The ``null`` function below checks whether a
         list is empty.

         .. code:: haskell
            :class: programlisting

            -- file: ch02/myDrop.hs
            myDrop n xs = if n <= 0 || null xs
                          then xs
                          else myDrop (n - 1) (tail xs)

         In Haskell, indentation is important: it *continues* an
         existing definition, instead of starting a new one. Don't omit
         the indentation!

         You might wonder where the variable name ``xs`` comes from in
         the Haskell function. This is a common naming pattern for
         lists: you can read the ``s`` as a suffix, so the name is
         essentially “plural of ``x``”.

         Let's save our Haskell function in a file named ``myDrop.hs``,
         then load it into **ghci**.

         .. code:: haskell
            :class: screen

            ghci> :load myDrop.hs
            [1 of 1] Compiling Main             ( myDrop.hs, interpreted )
            Ok, modules loaded: Main.
            ghci> myDrop 2 "foobar"
            "obar"
            ghci> myDrop 4 "foobar"
            "ar"
            ghci> myDrop 4 [1,2]
            []
            ghci> myDrop 0 [1,2]
            [1,2]
            ghci> myDrop 7 []
            []
            ghci> myDrop (-2) "foo"
            "foo"

         Now that we've seen ``myDrop`` in action, let's return to the
         source code and look at all the novelties we've introduced.

         First of all, we have introduced ``--``, the beginning of a
         single-line comment. This comment extends to the end of the
         line.

         Next is the ``if`` keyword itself. It introduces an expression
         that has three components.

         .. container:: itemizedlist

            -  An expression of type Bool, immediately following the
               ``if``. We refer to this as a *predicate*.

            -  A ``then`` keyword, followed by another expression. This
               expression will be used as the value of the ``if``
               expression if the predicate evaluates to ``True``.

            -  An ``else`` keyword, followed by another expression. This
               expression will be used as the value of the ``if``
               expression if the predicate evaluates to ``False``.

         We'll refer to the expressions after the ``then`` and ``else``
         keywords as “branches”. The branches must have the same types;
         the ``if`` expression will also have this type. An expression
         such as ``if True then 1 else "foo"`` has different types for
         its branches, so it is ill typed and will be rejected by a
         compiler or interpreter.

         Recall that Haskell is an expression-oriented language. In an
         imperative language, it can make sense to omit the ``else``
         branch from an ``if``, because we're working with *statements*,
         not expressions. However, when we're working with expressions,
         an ``if`` that was missing an ``else`` wouldn't have a result
         or type if the predicate evaluated to ``False``, so it would be
         nonsensical.

         Our predicate contains a few more novelties. The ``null``
         function indicates whether a list is empty, while the ``(||)``
         operator performs a logical “or” of its Bool-typed arguments.

         .. code:: haskell
            :class: screen

            ghci> :type null
            null :: [a] -> Bool
            ghci> :type (||)
            (||) :: Bool -> Bool -> Bool

         .. Tip:: Operators are not special
            :class: tip

            Notice that we were able to find the type of
            ``(||)`` by wrapping it in parentheses. The
            ``(||)`` operator isn't “built into” the language:
            it's an ordinary function.

            The ``(||)`` operator “short circuits”: if its left
            operand evaluates to ``True``, it doesn't evaluate
            its right operand. In most languages, short-circuit
            evaluation requires special support, but not in
            Haskell. We'll see why shortly.

         Next, our function applies itself recursively. This is our
         first example of recursion, which we'll talk about in some
         detail shortly.

         Finally, our ``if`` expression spans several lines. We align
         the ``then`` and ``else`` branches under the ``if`` for
         neatness. So long as we use some indentation, the exact amount
         is not important. If we wish, we can write the entire
         expression on a single line.

         .. code:: haskell
            :class: programlisting

            -- file: ch02/myDrop.hs
            myDropX n xs = if n <= 0 || null xs then xs else myDropX (n - 1) (tail xs)

         The length of this version makes it more difficult to read. We
         will usually break an ``if`` expression across several lines to
         keep the predicate and each of the branches easier to follow.

         For comparison, here is a Python equivalent of the Haskell
         ``myDrop``. The two are structured similarly: each decrements a
         counter while removing an element from the head of the list.

         .. code:: haskell
            :class: programlisting

            def myDrop(n, elts):
                while n > 0 and elts:
                    n = n - 1
                    elts = elts[1:]
                return elts

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Understanding evaluation by example
                  :name: id580425
                  :class: title

      In our description of ``myDrop``, we have so far focused on
      surface features. We need to go deeper, and develop a useful
      mental model of how function application works. To do this, we'll
      first work through a few simple examples, until we can walk
      through the evaluation of the expression ``myDrop 2 "abcd"``.

      We've talked several times about substituting an expression for a
      variable, and we'll make use of this capability here. Our
      procedure will involve rewriting expressions over and over,
      substituting expressions for variables until we reach a final
      result. This would be a good time to fetch a pencil and paper, so
      that you can follow our descriptions by trying them yourself.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Lazy evaluation
                     :name: id580456
                     :class: title

         We will begin by looking at the definition of a simple,
         nonrecursive function.

         .. code:: haskell
            :class: programlisting

            -- file: ch02/RoundToEven.hs
            isOdd n = mod n 2 == 1

         Here, ``mod`` is the standard modulo function. The first big
         step to understanding how evaluation works in Haskell is
         figuring out what the result of evaluating the expression
         ``isOdd (1 + 2)`` is.

         Before we explain how evaluation proceeds in Haskell, let us
         recap the sort of evaluation strategy used by more familiar
         languages. First, evaluate the subexpression ``1 + 2``, to give
         ``3``. Then apply the ``odd`` function with ``n`` bound to
         ``3``. Finally, evaluate ``mod 3 2`` to give ``1``, and
         ``1 == 1`` to give ``True``.

         In a language that uses *strict* evaluation, the arguments to a
         function are evaluated before the function is applied. Haskell
         chooses another path: *non-strict* evaluation.

         In Haskell, the subexpression ``1 + 2`` is *not* reduced to the
         value ``3``. Instead, we create a “promise” that when the value
         of the expression ``isOdd (1 + 2)`` is needed, we'll be able to
         compute it. The record that we use to track an unevaluated
         expression is referred to as a *thunk*. This is *all* that
         happens: we create a thunk, and defer the actual evaluation
         until it's really needed. If the result of this expression is
         never subsequently used, we will not compute its value at all.

         Non-strict evaluation is often referred to as *lazy
         evaluation*\ :sup:`[`\ `6 <#ftn.id580576>`__\ :sup:`]`.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: A more involved example
                     :name: id580594
                     :class: title

         Let us now look at the evaluation of the expression
         ``myDrop 2 "abcd"``, where we use ``print`` to ensure that it
         will be evaluated.

         .. code:: haskell
            :class: screen

            ghci> print (myDrop 2 "abcd")
            "cd"

         Our first step is to attempt to apply ``print``, which needs
         its argument to be evaluated. To do that, we apply the function
         ``myDrop`` to the values ``2`` and ``"abcd"``. We bind the
         variable ``n`` to the value ``2``, and ``xs`` to ``"abcd"``. If
         we substitute these values into ``myDrop``'s predicate, we get
         the following expression.

         .. code:: haskell
            :class: screen

            ghci> :type  2 <= 0 || null "abcd"
            2 <= 0 || null "abcd" :: Bool

         We then evaluate enough of the predicate to find out what its
         value is. This requires that we evaluate the ``(||)``
         expression. To determine its value, the ``(||)`` operator needs
         to examine the value of its left operand first.

         .. code:: haskell
            :class: screen

            ghci> 2 <= 0
            False

         Substituting that value into the ``(||)`` expression leads to
         the following expression.

         .. code:: haskell
            :class: screen

            ghci> :type  False || null "abcd"
            False || null "abcd" :: Bool

         If the left operand had evaluated to ``True``, ``(||)`` would
         not need to evaluate its right operand, since it could not
         affect the result of the expression. Since it evaluates to
         ``False``, ``(||)`` must evaluate the right operand.

         .. code:: haskell
            :class: screen

            ghci> null "abcd"
            False

         We now substitute this value back into the ``(||)`` expression.
         Since both operands evaluate to ``False``, the ``(||)``
         expression does too, and thus the predicate evaluates to
         ``False``.

         .. code:: haskell
            :class: screen

            ghci> False || False
            False

         This causes the ``if`` expression's ``else`` branch to be
         evaluated. This branch contains a recursive application of
         ``myDrop``.

         .. Note:: Short circuiting for free

            Many languages need to treat the logical-or operator
            specially so that it short circuits if its left
            operand evaluates to ``True``. In Haskell, ``(||)``
            is an ordinary function: non-strict evaluation
            builds this capability into the language.

            In Haskell, we can easily define a new function
            that short circuits.

            .. code:: haskell
               :class: programlisting

               -- file: ch02/shortCircuit.hs
               newOr a b = if a then a else b

            If we write an expression like
            ``newOr True (length [1..] > 0)``, it will not
            evaluate its second argument. (This is just as
            well: that expression tries to compute the length
            of an infinite list. If it were evaluated, it would
            hang **ghci**, looping infinitely until we killed
            it.)

            Were we to write a comparable function in, say,
            Python, strict evaluation would bite us: both
            arguments would be evaluated before being passed to
            ``newOr``, and we would not be able to avoid the
            infinite loop on the second argument.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Recursion
                     :name: id580915
                     :class: title

         When we apply ``myDrop`` recursively, ``n`` is bound to the
         thunk ``2 - 1``, and ``xs`` to ``tail "abcd"``.

         We're now evaluating ``myDrop`` from the beginning again. We
         substitute the new values of ``n`` and ``xs`` into the
         predicate.

         .. code:: haskell
            :class: screen

            ghci> :type (2 - 1) <= 0 || null (tail "abcd")
            (2 - 1) <= 0 || null (tail "abcd") :: Bool

         Here's a condensed version of the evaluation of the left
         operand.

         .. code:: haskell
            :class: screen

            ghci> :type (2 - 1) <= 0
            (2 - 1) <= 0 :: Bool
            ghci> 2 - 1
            1
            ghci> 1 <= 0
            False

         As we should now expect, we didn't evaluate the expression
         ``2 - 1`` until we needed its value. We also evaluate the right
         operand lazily, deferring ``tail "abcd"`` until we need its
         value.

         .. code:: haskell
            :class: screen

            ghci> :type null (tail "abcd")
            null (tail "abcd") :: Bool
            ghci> tail "abcd"
            "bcd"
            ghci> null "bcd"
            False

         The predicate again evaluates to ``False``, causing the
         ``else`` branch to be evaluated once more.

         Because we've had to evaluate the expressions for ``n`` and
         ``xs`` to evaluate the predicate, we now know that in this
         application of ``myDrop``, ``n`` has the value ``1`` and ``xs``
         has the value ``"bcd"``.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Ending the recursion
                     :name: id581112
                     :class: title

         In the next recursive application of ``myDrop``, we bind ``n``
         to ``1 - 1`` and ``xs`` to ``tail "bcd"``.

         .. code:: haskell
            :class: screen

            ghci> :type (1 - 1) <= 0 || null (tail "bcd")
            (1 - 1) <= 0 || null (tail "bcd") :: Bool

         Once again, ``(||)`` needs to evaluate its left operand first.

         .. code:: haskell
            :class: screen

            ghci> :type (1 - 1) <= 0
            (1 - 1) <= 0 :: Bool
            ghci> 1 - 1
            0
            ghci> 0 <= 0
            True

         Finally, this expression has evaluated to ``True``!

         .. code:: haskell
            :class: screen

            ghci> True || null (tail "bcd")
            True

         Because the right operand cannot affect the result of ``(||)``,
         it is not evaluated, and the result of the predicate is
         ``True``. This causes us to evaluate the ``then`` branch.

         .. code:: haskell
            :class: screen

            ghci> :type tail "bcd"
            tail "bcd" :: [Char]

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Returning from the recursion
                     :name: id581267
                     :class: title

         Remember, we're now inside our second recursive application of
         ``myDrop``. This application evaluates to ``tail "bcd"``. We
         return from the application of the function, substituting this
         expression for ``myDrop (1 - 1) (tail "bcd")``, to become the
         result of this application.

         .. code:: haskell
            :class: screen

            ghci> myDrop (1 - 1) (tail "bcd") == tail "bcd"
            True

         We then return from the first recursive application,
         substituting the result of the second recursive application for
         ``myDrop (2 - 1) (tail "abcd")``, to become the result of this
         application.

         .. code:: haskell
            :class: screen

            ghci> myDrop (2 - 1) (tail "abcd") == tail "bcd"
            True

         Finally, we return from our original application, substituting
         the result of the first recursive application.

         .. code:: haskell
            :class: screen

            ghci> myDrop 2 "abcd" == tail "bcd"
            True

         Notice that as we return from each successive recursive
         application, none of them needs to evaluate the expression
         ``tail "bcd"``: the final result of evaluating the original
         expression is a *thunk*. The thunk is only finally evaluated
         when **ghci** needs to print it.

         .. code:: haskell
            :class: screen

            ghci> myDrop 2 "abcd"
            "cd"
            ghci> tail "bcd"
            "cd"

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: What have we learned?
                     :name: id581397
                     :class: title

         We have established several important points here.

         .. container:: itemizedlist

            -  It makes sense to use substitution and rewriting to
               understand the evaluation of a Haskell expression.

            -  Laziness leads us to defer evaluation until we need a
               value, and to evaluate just enough of an expression to
               establish its value.

            -  The result of applying a function may be a thunk (a
               deferred expression).

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Polymorphism in Haskell
                  :name: funcstypes.polymorphism
                  :class: title

      When we introduced lists, we mentioned that the list type is
      polymorphic. We'll talk about Haskell's polymorphism in more
      detail here.

      If we want to fetch the last element of a list, we use the
      ``last`` function. The value that it returns must have the same
      type as the elements of the list, but ``last`` operates in the
      same way no matter what type those elements actually are.

      .. code:: haskell
         :class: screen

         ghci> last [1,2,3,4,5]
         5
         ghci> last "baz"
         'z'

      To capture this idea, its type signature contains a *type
      variable*.

      .. code:: haskell
         :class: screen

         ghci> :type last
         last :: [a] -> a

      Here, ``a`` is the type variable. We can read the signature as
      “takes a list, all of whose elements have some type ``a``, and
      returns a value of the same type ``a``”.

      .. Tip:: Identifying a type variable
         :class: tip

         Type variables always start with a lowercase letter.
         You can always tell a type variable from a normal
         variable by context, because the languages of types
         and functions are separate: type variables live in
         type signatures, and regular variables live in normal
         expressions.

         It's common Haskell practice to keep the names of type
         variables very short. One letter is overwhelmingly
         common; longer names show up infrequently. Type
         signatures are usually brief; we gain more in
         readability by keeping names short than we would by
         making them descriptive.

      When a function has type variables in its signature, indicating
      that some of its arguments can be of any type, we call the
      function polymorphic.

      When we want to apply ``last`` to, say, a list of Char, the
      compiler substitutes Char for each ``a`` throughout the type
      signature, which gives us the type of ``last`` with an input of
      [Char] as [Char] -> Char.

      This kind of polymorphism is called *parametric* polymorphism. The
      choice of naming is easy to understand by analogy: just as a
      function can have parameters that we can later bind to real
      values, a Haskell type can have parameters that we can later bind
      to other types.

      .. Tip:: A little nomenclature
         :class: tip

         If a type contains type parameters, we say that it is a
         parameterised type, or a polymorphic type. If a
         function or value's type contains type parameters, we
         call it polymorphic.

      When we see a parameterised type, we've already noted that the
      code doesn't care what the actual type is. However, we can make a
      stronger statement: *it has no way to find out what the real type
      is*, or to manipulate a value of that type. It can't create a
      value; neither can it inspect one. All it can do is treat it as a
      fully abstract “black box”. We'll cover one reason that this is
      important soon.

      Parametric polymorphism is the most visible kind of polymorphism
      that Haskell supports. Haskell's parametric polymorphism directly
      influenced the design of the generic facilities of the Java and C#
      languages. A parameterised type in Haskell is similar to a type
      variable in Java generics. C++ templates also bear a resemblance
      to parametric polymorphism.

      To make it clearer how Haskell's polymorphism differs from other
      languages, here are a few forms of polymorphism that are common in
      other languages, but not present in Haskell.

      In mainstream object oriented languages, *subtype* polymorphism is
      more widespread than parametric polymorphism. The subclassing
      mechanisms of C++ and Java give them subtype polymorphism. A base
      class defines a set of behaviours that its subclasses can modify
      and extend. Since Haskell isn't an object oriented language, it
      doesn't provide subtype polymorphism.

      Also common is *coercion* polymorphism, which allows a value of
      one type to be implicitly converted into a value of another type.
      Many languages provide some form of coercion polymorphism: one
      example is automatic conversion between integers and floating
      point numbers. Haskell deliberately avoids even this kind of
      simple automatic coercion.

      This is not the whole story of polymorphism in Haskell: we'll
      return to the subject in `Chapter 6, Using
      Typeclasses <using-typeclasses.html>`__.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Reasoning about polymorphic functions
                     :name: id581696
                     :class: title

         In `the section called “Function types and
         purity” <#funcstypes.sigs>`__, we
         talked about figuring out the behaviour of a function based on
         its type signature. We can apply the same kind of reasoning to
         polymorphic functions. Let's look again at ``fst``.

         .. code:: haskell
            :class: screen

            ghci> :type fst
            fst :: (a, b) -> a

         First of all, notice that its argument contains two type
         variables, ``a`` and ``b``, signifying that the elements of the
         tuple can be of different types.

         The result type of ``fst`` is ``a``. We've already mentioned
         that parametric polymorphism makes the real type inaccessible:
         ``fst`` doesn't have enough information to construct a value of
         type ``a``, nor can it turn an ``a`` into a ``b``. So the
         *only* possible valid behaviour (omitting infinite loops or
         crashes) it can have is to return the first element of the
         pair.

         .. container:: sect3

            .. container:: titlepage

               .. container::

                  .. container::

                     .. rubric:: Further reading
                        :name: id581793
                        :class: title

            There is a deep mathematical sense in which any
            non-pathological function of type (a,b) -> a must do exactly
            what ``fst`` does. Moreover, this line of reasoning extends
            to more complicated polymorphic functions. The paper
            [`Wadler89 <bibliography.html#bib.wadler89>`__] covers this
            procedure in depth.

            *It's been suggested that we should create a “theory box”
            for discussions of the deep stuff, and references to
            academic papers.*

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: The type of a function of more than one
                  argument
                  :name: id581829
                  :class: title

      So far, we haven't looked much at signatures for functions that
      take more than one argument. We've already used a few such
      functions; let's look at the signature of one, ``take``.

      .. code:: haskell
         :class: screen

         ghci> :type take
         take :: Int -> [a] -> [a]

      It's pretty clear that there's something going on with an Int and
      some lists, but why are there two ``->`` symbols in the signature?
      Haskell groups this chain of arrows from right to left; that is,
      ``->`` is right-associative. If we introduce parentheses, we can
      make it clearer how this type signature is interpreted.

      .. code:: haskell
         :class: programlisting

         -- file: ch02/Take.hs
         take :: Int -> ([a] -> [a])

      From this, it looks like we ought to read the type signature as a
      function that takes one argument, an Int, and returns another
      function. That other function also takes one argument, a list, and
      returns a list of the same type as its result.

      This is correct, but it's not easy to see what its consequences
      might be. We'll return to this topic in 
      `the section called “Partial function application and currying” <functional-programming.html#fp.partialapp>`__, 
      once we've spent a bit of time writing functions. For now, we can treat
      the type following the last ``->`` as being the function's return
      type, and the preceding types to be those of the function's
      arguments.

      We can now write a type signature for the ``myDrop`` function that
      we defined earlier.

      .. code:: haskell
         :class: programlisting

         -- file: ch02/myDrop.hs
         myDrop :: Int -> [a] -> [a]

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Exercises
                  :name: funcstypes.sigs.exercises
                  :class: title

      .. container:: qandaset

         .. list-table::
            :widths: 1

            - 

               - **1.** 
                  Haskell provides a standard function, last :: [a] -> a, 
                  that returns the last element of a list. From reading the 
                  type alone, what are the possible valid behaviours 
                  (omitting crashes and infinite loops) that this function 
                  could have? What are a few things that this function clearly cannot do? 

            - 

               - **2.**
                  Write a function lastButOne, that returns the element before the last. 
            - 

               - **3.**
                  Load your lastButOne function into ghci, and try it out on 
                  lists of different lengths. What happens when you pass it 
                  a list that's too short? 

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Why the fuss over purity?
                  :name: id582031
                  :class: title

      Few programming languages go as far as Haskell in insisting that
      purity should be the default. This choice has profound and
      valuable consequences.

      Because the result of applying a pure function can only depend on
      its arguments, we can often get a strong hint of what a pure
      function does by simply reading its name and understanding its
      type signature. As an example, let's look at ``not``.

      .. code:: haskell
         :name: code block id
         :class: screen

         ghci> :type not
         not :: Bool -> Bool

      Even if we didn't know the name of this function, its signature
      alone limits the possible valid behaviours it could have.

      .. container:: itemizedlist

         -  Ignore its argument, and always return either ``True`` or
            ``False``.

         -  Return its argument unmodified.

         -  Negate its argument.

      We also know that this function can *not* do some things: it
      cannot access files; it cannot talk to the network; it cannot tell
      what time it is.

      Purity makes the job of understanding code easier. The behaviour
      of a pure function does not depend on the value of a global
      variable, or the contents of a database, or the state of a network
      connection. Pure code is inherently modular: every function is
      self-contained, and has a well-defined interface.

      A non-obvious consequence of purity being the default is that
      working with *impure* code becomes easier. Haskell encourages a
      style of programming in which we separate code that *must* have
      side effects from code that doesn't need them. In this style,
      impure code tends to be simple, with the “heavy lifting” performed
      in pure code.

      Much of the risk in software lies in talking to the outside world,
      be it coping with bad or missing data, or handling malicious
      attacks. Because Haskell's type system tells us exactly which
      parts of our code have side effects, we can be appropriately on
      our guard. Because our favoured coding style keeps impure code
      isolated and simple, our “attack surface” is small.

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Conclusion
                  :name: funcstypes.end
                  :class: title

      In this chapter, we've had a whirlwind overview of Haskell's type
      system and much of its syntax. We've read about the most common
      types, and discovered how to write simple functions. We've been
      introduced to polymorphism, conditional expressions, purity, and
      about lazy evaluation.

      This all amounts to a lot of information to absorb. In 
      `Chapter 3, Defining Types, Streamlining Functions <defining-types-streamlining-functions.html>`__, 
      we'll build on this basic knowledge to further enhance our understanding
      of Haskell.

   .. container:: footnotes

      .. container:: footnote

         :sup:`[`\ `2 <#id578004>`__\ :sup:`]` “If it walks like a duck,
         and quacks like a duck, then let's call it a duck.”

      .. container:: footnote

         :sup:`[`\ `3 <#id578076>`__\ :sup:`]` Occasionally, we need to
         give the compiler a little information to help it to make a
         choice in understanding our code.

      .. container:: footnote

         :sup:`[`\ `4 <#id578737>`__\ :sup:`]` We'll talk more about
         polymorphism in `the section called “Polymorphism in
         Haskell” <#funcstypes.polymorphism>`__.

      .. container:: footnote

         :sup:`[`\ `5 <#id579534>`__\ :sup:`]` The environment in which
         **ghci** operates is called the IO monad. In `Chapter 7,
         I/O <io.html>`__, we will cover the IO monad in depth, and the
         seemingly arbitrary restrictions that **ghci** places on us
         will make more sense.

      .. container:: footnote

         :sup:`[`\ `6 <#id580576>`__\ :sup:`]` The terms “non-strict”
         and “lazy” have slightly different technical meanings, but we
         won't go into the details of the distinction here.


.. _sec-3:

/Chapter 3. Defining types, streamlining functions `🔼 <#toc>`_
================================================================

   .. 
            .. rubric:: Chapter 3. Defining Types, Streamlining
               Functions
               :name: chapter-3.-defining-types-streamlining-functions
               :class: title

   .. container:: toc

      **Table of Contents**

      *  `Defining a new data type <#deftypes.data>`__

         *  `Naming types and values <#id582783>`__

      *  `Type synonyms <#deftypes.alias>`__

         *  `Algebraic data types <#deftypes.adt>`__
         *  `Tuples, algebraic data types, and when to use each <#id583233>`__
         *  `Analogues to algebraic data types in other languages <#deftypes.adt.comp>`__
         *  `The structure <#id583523>`__
         *  `The enumeration <#id583611>`__
         *  `The discriminated union <#id583781>`__

      *  `Pattern matching <#deftypes.pattern>`__

         *  `Construction and deconstruction <#id584277>`__
         *  `Further adventures <#id584453>`__
         *  `Variable naming in patterns <#id584746>`__
         *  `The wild card pattern <#deftypes.wildcard>`__
         *  `Exhaustive patterns and wild cards <#deftypes.patterns.nonexhaustive>`__

      *  `Record syntax <#deftypes.record>`__
      *  `Parameterised types <#deftypes.paramtypes>`__
      *  `Recursive types <#deftypes.recursive>`__

         *  `Exercises <#id585938>`__

      *  `Reporting errors <#deftypes.error>`__

         *  `A more controlled approach <#deftypes.morecontrolled>`__

      *  `Introducing local variables <#deftypes.locals>`__

         *  `Shadowing <#id586544>`__
         *  `The where clause <#id586728>`__
         *  `Local functions, global variables <#deftypes.locals.functions>`__

      *  `The offside rule and white space in an expression <#deftypes.offside>`__

         *  `A note about tabs versus spaces <#deftypes.tabs>`__
         *  `The offside rule is not mandatory <#deftypes.block>`__

      *  `The case expression <#deftypes.case>`__
      *  `Common beginner mistakes with patterns <#deftypes.pattern.limits>`__

         *  `Incorrectly matching against a variable <#id587485>`__
         *  `Incorrectly trying to compare for equality <#id587613>`__

      *  `Conditional evaluation with guards <#deftypes.guard>`__
      *  `Exercises <#id587860>`__

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Defining a new data type
                  :name: deftypes.data
                  :class: title

      Although lists and tuples are useful, we'll often want to
      construct new data types of our own. This allows us to add
      structure to the values in our programs. Instead of using an
      anonymous tuple, we can give a collection of related values a name
      and a distinct type. Defining our own types also improves the type
      safety of our code: Haskell will not allow us to accidentally mix
      values of two types that are structurally similar but have
      different names.

      For motivation, we'll consider a few kinds of data that a small
      online bookstore might need to manage. We won't make any attempt
      at complete or realistic data definitions, but at least we're
      tying them to the real world.

      We define a new data type using the ``data`` keyword.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/BookStore.hs
         data BookInfo = Book Int String [String]
                         deriving (Show)

      The BookInfo after the ``data`` keyword is the name of our new
      type. We call BookInfo a *type constructor*. Once we have defined
      a type, we will use its type constructor to refer to it. As we've
      already mentioned, a type name, and hence a type constructor, must
      start with a capital letter.

      The ``Book`` that follows is the name of the *value constructor*
      (sometimes called a data constructor). We use this to create a
      value of the BookInfo type. A value constructor's name must also
      start with a capital letter.

      After ``Book``, the Int, String, and [String] that follow are the
      *components* of the type. A component serves the same purpose in
      Haskell as a field in a structure or class would in another
      language: it's a “slot” where we keep a value. (We'll often refer
      to components as fields.)

      In this example, the Int represents a book's identifier (e.g. in a
      stock database), String its title, and [String] the names of its
      authors.

      To make the link to a concept we've already seen, the BookInfo
      type contains the same components as a 3-tuple of type (Int,
      String, [String]), but it has a distinct type. We can't
      accidentally (or deliberately) use one in a context where the
      other is expected. For instance, a bookstore is also likely to
      carry magazines.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/BookStore.hs
         data MagazineInfo = Magazine Int String [String]
                             deriving (Show)

      Even though this MagazineInfo type has the same structure as our
      BookInfo type, Haskell treats the types as distinct because their
      type and value constructors have different names.

      .. Note:: Deriving what?

         We'll explain the full meaning of ``deriving (Show)``
         later, in `the section called “Show” <using-typeclasses.html#typeclasses.wellknown.show>`__.
         For now, it's enough to know that we need to tack this
         onto a type declaration so that **ghci** will
         automatically know how to print a value of this type.

      We can create a new value of type BookInfo by treating ``Book`` as
      a function, and applying it with arguments of types Int, String,
      and [String].

      .. code:: haskell
         :class: programlisting

         -- file: ch03/BookStore.hs
         myInfo = Book 9780135072455 "Algebra of Programming"
                  ["Richard Bird", "Oege de Moor"]

      Once we have defined a type, we can experiment with it in
      **ghci**. We begin by using the **:load** command to load our
      source file.

      .. code:: haskell
         :class: screen

         ghci> :load BookStore
         [1 of 1] Compiling Main             ( BookStore.hs, interpreted )
         Ok, modules loaded: Main.

      Remember the ``myInfo`` variable we defined in our source file?
      Here it is.

      .. code:: haskell
         :class: screen

         ghci> myInfo
         Book 9780135072455 "Algebra of Programming" ["Richard Bird","Oege de Moor"]
         ghci> :type myInfo
         myInfo :: BookInfo

      We can construct new values interactively in **ghci**, too.

      .. code:: haskell
         :class: screen

         ghci> Book 0 "The Book of Imaginary Beings" ["Jorge Luis Borges"]
         Book 0 "The Book of Imaginary Beings" ["Jorge Luis Borges"]

      The **ghci** command **:type** lets us see what the type of an
      expression is.

      .. code:: haskell
         :class: screen

         ghci> :type Book 1 "Cosmicomics" ["Italo Calvino"]
         Book 1 "Cosmicomics" ["Italo Calvino"] :: BookInfo

      Remember that if we want to define a new variable inside **ghci**,
      the syntax is slightly different from that of a Haskell source
      file: we need to put a ``let`` in front.

      .. code:: haskell
         :class: screen

         ghci> let cities = Book 173 "Use of Weapons" ["Iain M. Banks"]

      To find out more about a type, we can use some of **ghci**'s
      browsing capabilities. The **:info** command gets **ghci** to tell
      us everything it knows about a name.

      .. code:: haskell
         :class: screen

         ghci> :info BookInfo
         data BookInfo = Book Int String [String]
             -- Defined at BookStore.hs:4:5-12
         instance Show BookInfo -- Defined at BookStore.hs:4:5-12

      We can also find out why we use ``Book`` to construct a new value
      of type BookStore.

      .. code:: haskell
         :class: screen

         ghci> :type Book
         Book :: Int -> String -> [String] -> BookInfo

      We can treat a value constructor as just another function, one
      that happens to create and return a new value of the type we
      desire.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Naming types and values
                     :name: id582783
                     :class: title

         When we introduced the type BookStore, we deliberately chose to
         give the type constructor BookStore a different name from the
         value constructor ``Book``, purely to make it obvious which was
         which.

         However, in Haskell, the names of types and values are
         independent of each other. We only use a type constructor (i.e.
         the type's name) in a type declaration or a type signature. We
         only use a value constructor in actual code. Because these uses
         are distinct, there is no ambiguity if we give a type
         constructor and a value constructor the same name. If we are
         writing a type signature, we must be referring to a type
         constructor. If we are writing an expression, we must be using
         the value constructor.

         .. code:: haskell
            :class: programlisting

            -- file: ch03/BookStore.hs
            -- We will introduce the CustomerID type shortly.

            data BookReview = BookReview BookInfo CustomerID String

         This definition says that the type named BookReview has a value
         constructor that is also named ``BookReview``.

         Not only is it *legal* for a value constructor to have the same
         name as its type constructor, it's *normal*: you'll see this
         all the time in regular Haskell code.

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Type synonyms
                  :name: deftypes.alias
                  :class: title

      We can introduce a *synonym* for an existing type at any time, to
      give a type a more descriptive name. For example, the String in
      our BookReview type doesn't tell us what the string is for, but we
      can clarify this.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/BookStore.hs
         type CustomerID = Int
         type ReviewBody = String

         data BetterReview = BetterReview BookInfo CustomerID ReviewBody

      The ``type`` keyword introduces a type synonym. The new name is on
      the left of the ``=``, with the existing name on the right. The
      two names identify the same type, so type synonyms are *purely*
      for making code more readable.

      We can also use a type synonym to create a shorter name for a
      verbose type.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/BookStore.hs
         type BookRecord = (BookInfo, BookReview)

      This states that we can use BookRecord as a synonym for the tuple
      (BookInfo, BookReview). A type synonym only creates a new name
      that refers to an existing
      type\ :sup:`[`\ `7 <#ftn.id582956>`__\ :sup:`]`. We still use the
      same value constructors to create a value of the type.

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Algebraic data types
                  :name: deftypes.adt
                  :class: title

      The familiar Bool is the simplest common example of a category of
      type called an *algebraic data type*. An algebraic data type can
      have more than one value constructor.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/Bool.hs
         data Bool = False | True

      The Bool type has two value constructors, ``True`` and ``False``.
      Each value constructor is separated in the definition by a ``|``
      character, which we can read as “or”: we can construct a Bool that
      has the value ``True``, or the value ``False``. When a type has
      more than one value constructor, they are usually referred to as
      *alternatives* or *cases*. We can use any one of the alternatives
      to create a value of that type.

      .. Note:: A note about naming
            - 

               - 
               - Although the phrase “algebraic data type” is long,
                  we're being careful to avoid using the acronym “ADT”.
                  That acronym is already widely understood to stand for
                  “\ *abstract* data type\ ”. Since Haskell supports
                  both algebraic and abstract data types, we'll be
                  explicit and avoid the acronym entirely.

      Each of an algebraic data type's value constructors can take zero
      or more arguments. As an example, here's one way we might
      represent billing information.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/BookStore.hs
         type CardHolder = String
         type CardNumber = String
         type Address = [String]

         data BillingInfo = CreditCard CardNumber CardHolder Address
                          | CashOnDelivery
                          | Invoice CustomerID
                            deriving (Show)

      Here, we're saying that we support three ways to bill our
      customers. If they want to pay by credit card, they must supply a
      card number, the holder's name, and the holder's billing address
      as arguments to the ``CreditCard`` value constructor.
      Alternatively, they can pay the person who delivers their
      shipment. Since we don't need to store any extra information about
      this, we specify no arguments for the ``CashOnDelivery``
      constructor. Finally, we can send an invoice to the specified
      customer, in which case we need their CustomerID as an argument to
      the ``Invoice`` constructor.

      When we use a value constructor to create a value of type
      BillingInfo, we must supply the arguments that it requires.

      .. code:: haskell
         :class: screen

         ghci> :type CreditCard
         CreditCard :: CardNumber -> CardHolder -> Address -> BillingInfo
         ghci> CreditCard "2901650221064486" "Thomas Gradgrind" ["Dickens", "England"]
         CreditCard "2901650221064486" "Thomas Gradgrind" ["Dickens","England"]
         ghci> :type it
         it :: BillingInfo
         ghci> Invoice

         <interactive>:1:0:
             No instance for (Show (CustomerID -> BillingInfo))
               arising from a use of `print' at <interactive>:1:0-6
             Possible fix:
               add an instance declaration for (Show (CustomerID -> BillingInfo))
             In the expression: print it
             In a 'do' expression: print it
         ghci> :type it
         it :: BillingInfo

      The ``No instance`` error message arose because we did not supply
      an argument to the ``Invoice`` constructor. As a result, we were
      trying to print the ``Invoice`` constructor itself. That
      constructor requires an argument and returns a value, so it is a
      function. We cannot print functions in Haskell, which is
      ultimately why the interpreter complained.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Tuples, algebraic data types, and when to
                     use each
                     :name: id583233
                     :class: title

         There is some overlap between tuples and user-defined algebraic
         data types. If we wanted to, we could represent our BookInfo
         type from earlier as an (Int, String, [String]) tuple.

         .. code:: haskell
            :class: screen

            ghci> Book 2 "The Wealth of Networks" ["Yochai Benkler"]
            Book 2 "The Wealth of Networks" ["Yochai Benkler"]
            ghci> (2, "The Wealth of Networks", ["Yochai Benkler"])
            (2,"The Wealth of Networks",["Yochai Benkler"])

         Algebraic data types allow us to distinguish between otherwise
         identical pieces of information. Two tuples with elements of
         the same type are structurally identical, so they have the same
         type.

         .. code:: haskell
            :class: programlisting

            -- file: ch03/Distinction.hs
            a = ("Porpoise", "Grey")
            b = ("Table", "Oak")

         Since they have different names, two algebraic data types have
         distinct types, even if they are otherwise structurally
         equivalent.

         .. code:: haskell
            :class: programlisting

            -- file: ch03/Distinction.hs
            data Cetacean = Cetacean String String
            data Furniture = Furniture String String

            c = Cetacean "Porpoise" "Grey"
            d = Furniture "Table" "Oak"

         This lets us bring the type system to bear in writing programs
         with fewer bugs. With the tuples we defined above, we could
         conveivably pass a description of a whale to a function
         expecting a chair, and the type system could not help us. With
         the algebraic data types, there is no such possibility of
         confusion.

         Here is a more subtle example. Consider the following
         representations of a two-dimensional vector.

         .. code:: haskell
            :class: programlisting

            -- file: ch03/AlgebraicVector.hs
            -- x and y coordinates or lengths.
            data Cartesian2D = Cartesian2D Double Double
                               deriving (Eq, Show)

            -- Angle and distance (magnitude).
            data Polar2D = Polar2D Double Double
                           deriving (Eq, Show)

         The Cartesian and polar forms use the same types for their two
         elements. However, the *meanings* of the elements are
         different. Because Cartesian2D and Polar2D are distinct types,
         the type system will not let us accidentally use a Cartesian2D
         value where a Polar2D is expected, or vice versa.

         .. code:: haskell
            :class: screen

            ghci> Cartesian2D (sqrt 2) (sqrt 2) == Polar2D (pi / 4) 2

            <interactive>:1:33:
                Couldn't match expected type `Cartesian2D'
                       against inferred type `Polar2D'
                In the second argument of `(==)', namely `Polar2D (pi / 4) 2'
                In the expression:
                      Cartesian2D (sqrt 2) (sqrt 2) == Polar2D (pi / 4) 2
                In the definition of `it':
                    it = Cartesian2D (sqrt 2) (sqrt 2) == Polar2D (pi / 4) 2

         The ``(==)`` operator requires its arguments to have the same
         type.

         .. tip::

            .. list-table::

               - 

                  - |[Tip]|
                  - Comparing for equality
               - 

                  - 
                  - Notice that in the ``deriving`` clause for our
                     vector types, we added another word, ``Eq``. This
                     causes the Haskell implementation to generate code
                     that lets us compare the values for equality.

         If we used tuples to represent these values, we could quickly
         land ourselves in hot water by mixing the two representations
         inappropriately.

         .. code:: haskell
            :class: screen

            ghci> (1, 2) == (1, 2)
            True

         The type system can't rescue us here: as far as it's concerned,
         we're comparing two (Double, Double) pairs, which is a
         perfectly valid thing to do. Indeed, we cannot tell by
         inspection which of these values is supposed to be polar or
         Cartesian, but ``(1,2)`` has a different meaning in each
         representation.

         There is no hard and fast rule for deciding when it's better to
         use a tuple or a distinct data type, but here's a rule of thumb
         to follow. If you're using compound values widely in your code
         (as almost all non-trivial programs do), adding ``data``
         declarations will benefit you in both type safety and
         readability. For smaller, localised uses, a tuple is usually
         fine.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Analogues to algebraic data types in other
                     languages
                     :name: deftypes.adt.comp
                     :class: title

         Algebraic data types provide a single powerful way to describe
         data types. Other languages often need several different
         features to achieve the same degree of expressiveness. Here are
         some analogues from C and C++, which might make it clearer what
         we can do with algebraic data types, and how they relate to
         concepts that might be more familiar.

         .. container:: sect3

            .. container:: titlepage

               .. container::

                  .. container::

                     .. rubric:: The structure
                        :name: id583523
                        :class: title

            With just one constructor, an algebraic data type is similar
            to a tuple: it groups related values together into a
            compound value. It corresponds to a ``struct`` in C or C++,
            and its components correspond to the fields of a ``struct``.
            Here's a C equivalent of the BookInfo type that we defined
            earlier.

            .. code:: haskell
               :class: programlisting

               struct book_info {
                   int id;
                   char *name;
                   char **authors;
               };

            The main difference between the two is that the fields in
            the Haskell type are anonymous and positional.

            .. code:: haskell
               :class: programlisting

               -- file: ch03/BookStore.hs
               data BookInfo = Book Int String [String]
                               deriving (Show)

            By *positional*, we mean that the section number is in the
            first field of the Haskell type, and the title is in the
            second. We refer to them by location, not by name.

            In `the section called “Pattern
            matching” <#deftypes.pattern>`__,
            we'll see how to access the fields of a BookStore value. In
            `the section called “Record
            syntax” <#deftypes.record>`__,
            we'll introduce an alternate syntax for defining data types
            that looks a little more C-like.

         .. container:: sect3

            .. container:: titlepage

               .. container::

                  .. container::

                     .. rubric:: The enumeration
                        :name: id583611
                        :class: title

            Algebraic data types also serve where we'd use an ``enum``
            in C or C++, to represent a range of symbolic values. Such
            algebraic data types are sometimes referred to as
            enumeration types. Here's an example from C.

            .. code:: haskell
               :class: programlisting

               enum roygbiv {
                   red,
                   orange,
                   yellow,
                   green,
                   blue,
                   indigo,
                   violet,
               };

            And here's a Haskell equivalent.

            .. code:: haskell
               :class: programlisting

               -- file: ch03/Roygbiv.hs

               data Roygbiv = Red
                            | Orange
                            | Yellow
                            | Green
                            | Blue
                            | Indigo
                            | Violet
                              deriving (Eq, Show)

            We can try these out in **ghci**.

            .. code:: haskell
               :class: screen

               ghci> :type Yellow
               Yellow :: Roygbiv
               ghci> :type Red
               Red :: Roygbiv
               ghci> Red == Yellow
               False
               ghci> Green == Green
               True

            In C, the elements of an ``enum`` are integers. We can use
            an integer in a context where an ``enum`` is expected, and
            vice versa: a C compiler will automatically convert values
            between the two types. This can be a source of nasty bugs.
            In Haskell, this kind of problem does not occur. For
            example, we cannot use a Roygbiv value where an ``Int`` is
            expected.

            .. code:: haskell
               :class: screen

               ghci> take 3 "foobar"
               "foo"
               ghci> take Red "foobar"

               <interactive>:1:5:
                   Couldn't match expected type `Int' against inferred type `Roygbiv'
                   In the first argument of `take', namely `Red'
                   In the expression: take Red "foobar"
                   In the definition of `it': it = take Red "foobar"

         .. container:: sect3

            .. container:: titlepage

               .. container::

                  .. container::

                     .. rubric:: The discriminated union
                        :name: id583781
                        :class: title

            If an algebraic data type has multiple alternatives, we can
            think of it as similar to a ``union`` in C or C++. A big
            difference between the two is that a union doesn't tell us
            which alternative is actually present; we have to explicitly
            and manually track which alternative we're using, usually in
            another field of an enclosing struct. This means that unions
            can be sources of nasty bugs, where our notion of which
            alternative we should be using is incorrect.

            .. code:: haskell
               :class: programlisting

               enum shape_type {
                   shape_circle,
                   shape_poly,
               };

               struct circle {
                   struct vector centre;
                   float radius;
               };

               struct poly {
                   size_t num_vertices;
                   struct vector *vertices;
               };

               struct shape 
               {
                   enum shape_type type;
                   union {
                   struct circle circle;
                   struct poly poly;
                   } shape;
               };

            In the example above, the ``union`` can contain valid data
            for either a ``struct circle`` or a ``struct poly``. We have
            to use the ``enum shape_type`` by hand to indicate which
            kind of value is currently stored in the ``union``.

            The Haskell version of this code is both dramatically
            shorter and safer than the C equivalent.

            .. code:: haskell
               :class: programlisting

               -- file: ch03/ShapeUnion.hs
               type Vector = (Double, Double)

               data Shape = Circle Vector Double
                          | Poly [Vector]

            If we create a Shape value using the ``Circle`` constructor,
            the fact that we created a ``Circle`` is stored. When we
            later use a ``Circle``, we can't accidentally treat it as a
            ``Square``. We will see why in `the section called “Pattern
            matching” <#deftypes.pattern>`__

            .. tip::

               .. list-table::

                  - 

                     - |[Tip]|
                     - A few notes
                  - 

                     - 
                     - From reading the preceding sections, it should
                        now be clear that *all* of the data types that
                        we define with the ``data`` keyword are
                        algebraic data types. Some may have just one
                        alternative, while others have several, but
                        they're all using the same machinery.

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Pattern matching
                  :name: deftypes.pattern
                  :class: title

      Now that we've seen how to construct values with algebraic data
      types, let's discuss how we work with these values. If we have a
      value of some type, there are two things we would like to be able
      to do.

      .. container:: itemizedlist

         -  If the type has more than one value constructor, we need to
            be able to tell which value constructor was used to create
            the value.

         -  If the value constructor has data components, we need to be
            able to extract those values.

      Haskell has a simple, but tremendously useful, *pattern matching*
      facility that lets us do both of these things.

      A pattern lets us look inside a value and bind variables to the
      data it contains. Here's an example of pattern matching in action
      on a Bool value: we're going to reproduce the ``not`` function.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/add.hs
         myNot True  = False
         myNot False = True

      It might seem that we have two functions named ``myNot`` here, but
      Haskell lets us define a function as a *series of equations*:
      these two clauses are defining the behavior of the same function
      for different patterns of input. On each line, the patterns are
      the items following the function name, up until the ``=`` sign.

      To understand how pattern matching works, let's step through an
      example, say ``myNot False``.

      When we apply ``myNot``, the Haskell runtime checks the value we
      supply against the value constructor in the first pattern. This
      does not match, so it tries against the second pattern. That match
      succeeds, so it uses the right hand side of that equation as the
      result of the function application.

      Here is a slightly more extended example. This function adds
      together the elements of a list.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/add.hs
         sumList (x:xs) = x + sumList xs
         sumList []     = 0

      Let us step through the evaluation of ``sumList [1,2]``. The list
      notation ``[1,2]`` is shorthand for the expression ``(1:(2:[]))``.
      We begin by trying to match the pattern in the first equation of
      the definition of ``sumList``. In the ``(x:xs)`` pattern, the
      “\ ``:``\ ” is the familiar list constructor, ``(:)``. We are now
      using it to match against a value, not to construct one. The value
      ``(1:(2:[]))`` was constructed with ``(:)``, so the constructor in
      the value matches the constructor in the pattern. We say that the
      pattern *matches*, or that the match *succeeds*.

      The variables ``x`` and ``xs`` are now “bound to” the
      constructor's arguments, so ``x`` is given the value ``1``, and
      ``xs`` the value ``2:[]``.

      The expression we are now evaluating is ``1 + sumList (2:[])``. We
      must now recursively apply ``sumList`` to the value ``2:[]``. Once
      again, this was constructed using ``(:)``, so the match succeeds.
      In our recursive application of ``sumList``, ``x`` is now bound to
      ``2``, and ``xs`` to ``[]``.

      We are now evaluating ``1 + (2 + sumList [])``. In this recursive
      application of ``sumList``, the value we are matching against is
      ``[]``. The value's constructor does not match the constructor in
      the first pattern, so we skip this equation. Instead, we “fall
      through” to the next pattern, which matches. The right hand side
      of this equation is thus chosen as the result of this application.

      The result of ``sumList [1,2]`` is thus ``1 + (2 + (0))``, or
      ``3``.

      .. Note:: Ordering is important
            - 

               - 
               - As we have already mentioned, a Haskell implementation
                  checks patterns for matches in the order in which we
                  specify them in our equations. Matching proceeds from
                  top to bottom, and stops at the first success.
                  Equations below a successful match have no effect.

      As a final note, there already exists a standard function,
      ``sum``, that performs this sum-of-a-list for us. Our ``sumList``
      is purely for illustration.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Construction and deconstruction
                     :name: id584277
                     :class: title

         Let's step back and take a look at the relationship between
         constructing a value and pattern matching on it.

         We apply a value constructor to build a value. The expression
         ``Book 9 "Close Calls" ["John Long"]`` applies the ``Book``
         constructor to the values ``9``, ``"Close Calls"``, and
         ``["John Long"]`` to produce a new value of type BookInfo.

         When we pattern match against the ``Book`` constructor, we
         *reverse* the construction process. First of all, we check to
         see if the value was created using that constructor. If it was,
         we inspect it to obtain the individual values that we
         originally supplied to the constructor when we created the
         value.

         Let's consider what happens if we match the pattern
         ``(Book id name authors)`` against our example expression.

         .. container:: itemizedlist

            -  The match will succeed, because the constructor in the
               value matches the one in our pattern.

            -  The variable ``id`` will be bound to ``9``.

            -  The variable ``name`` will be bound to ``"Close Calls"``.

            -  The variable ``authors`` will be bound to
               ``["John Long"]``.

         Because pattern matching acts as the inverse of construction,
         it's sometimes referred to as *de*\ construction.

         .. Note:: Deconstruction doesn't destroy anything
               - 

                  - 
                  - If you're steeped in object oriented programming
                     jargon, don't confuse deconstruction with
                     destruction! Matching a pattern has no effect on
                     the value we're examining: it just lets us “look
                     inside” it.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Further adventures
                     :name: id584453
                     :class: title

         The syntax for pattern matching on a tuple is similar to the
         syntax for constructing a tuple. Here's a function that returns
         the last element of a 3-tuple.

         .. code:: haskell
            :class: programlisting

            -- file: ch03/Tuple.hs
            third (a, b, c) = c

         There's no limit on how “deep” within a value a pattern can
         look. This definition looks both inside a tuple and inside a
         list within that tuple.

         .. code:: haskell
            :class: programlisting

            -- file: ch03/Tuple.hs
            complicated (True, a, x:xs, 5) = (a, xs)

         We can try this out interactively.

         .. code:: haskell
            :class: screen

            ghci> :load Tuple.hs
            [1 of 1] Compiling Main             ( Tuple.hs, interpreted )
            Ok, modules loaded: Main.
            ghci> complicated (True, 1, [1,2,3], 5)
            (1,[2,3])

         Wherever a literal value is present in a pattern (``True`` and
         ``5`` in the tuple pattern above), that value must match
         exactly for the pattern match to succeed. If every pattern
         within a series of equations fails to match, we get a runtime
         error.

         .. code:: haskell
            :class: screen

            ghci> complicated (False, 1, [1,2,3], 5)
            *** Exception: Tuple.hs:10:0-39: Non-exhaustive patterns in function complicated

         For an explanation of this error message, skip forward a
         little, to `the section called “Exhaustive patterns and wild
         cards” <#deftypes.patterns.nonexhaustive>`__.

         We can pattern match on an algebraic data type using its value
         constructors. Recall the BookInfo type we defined earlier: we
         can extract the values from a BookInfo as follows.

         .. code:: haskell
            :class: programlisting

            -- file: ch03/BookStore.hs
            bookID      (Book id title authors) = id
            bookTitle   (Book id title authors) = title
            bookAuthors (Book id title authors) = authors

         Let's see it in action.

         .. code:: haskell
            :class: screen

            ghci> bookID (Book 3 "Probability Theory" ["E.T.H. Jaynes"])
            3
            ghci> bookTitle (Book 3 "Probability Theory" ["E.T.H. Jaynes"])
            "Probability Theory"
            ghci> bookAuthors (Book 3 "Probability Theory" ["E.T.H. Jaynes"])
            ["E.T.H. Jaynes"]

         The compiler can infer the types of the accessor functions
         based on the constructor we're using in our pattern.

         .. code:: haskell
            :class: screen

            ghci> :type bookID
            bookID :: BookInfo -> Int
            ghci> :type bookTitle
            bookTitle :: BookInfo -> String
            ghci> :type bookAuthors
            bookAuthors :: BookInfo -> [String]

         If we use a literal value in a pattern, the corresponding part
         of the value we're matching against must contain an identical
         value. For instance, the pattern ``(3:xs)`` first of all checks
         that a value is a non-empty list, by matching against the
         ``(:)`` constructor. It also ensures that the head of the list
         has the exact value ``3``. If both of these conditions hold,
         the tail of the list will be bound to the variable ``xs``.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Variable naming in patterns
                     :name: id584746
                     :class: title

         As you read functions that match on lists, you'll frequently
         find that the names of the variables inside a pattern resemble
         ``(x:xs)`` or ``(d:ds)``. This is a popular naming convention.
         The idea is that the name ``xs`` has an “\ ``s``\ ” on the end
         of its name as if it's the “plural” of ``x``, because ``x``
         contains the head of the list, and ``xs`` the remaining
         elements.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: The wild card pattern
                     :name: deftypes.wildcard
                     :class: title

         We can indicate that we don't care what is present in part of a
         pattern. The notation for this is the underscore character
         “\ ``_``\ ”, which we call a *wild card*. We use it as follows.

         .. code:: haskell
            :class: programlisting

            -- file: ch03/BookStore.hs
            nicerID      (Book id _     _      ) = id
            nicerTitle   (Book _  title _      ) = title
            nicerAuthors (Book _  _     authors) = authors

         Here, we have tidier versions of the accessor functions we
         introduced earlier. Now, there's no question about which
         element we're using in each function.

         In a pattern, a wild card acts similarly to a variable, but it
         doesn't bind a new variable. As the examples above indicate, we
         can use more than one wild card in a single pattern.

         Another advantage of wild cards is that a Haskell compiler can
         warn us if we introduce a variable name in a pattern, but do
         not use it in a function's body. Defining a variable, but
         forgetting to use it, can often indicate the presence of a bug,
         so this is a helpful feature. If we use a wild card instead of
         a variable that we do not intend to use, the compiler won't
         complain.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Exhaustive patterns and wild cards
                     :name: deftypes.patterns.nonexhaustive
                     :class: title

         When writing a series of patterns, it's important to cover all
         of a type's constructors. For example, if we're inspecting a
         list, we should have one equation that matches the non-empty
         constructor ``(:)``, and one that matches the empty-list
         constructor ``[]``.

         Let's see what happens if we fail to cover all the cases. Here,
         we deliberately omit a check for the ``[]`` constructor.

         .. code:: haskell
            :class: programlisting

            -- file: ch03/BadPattern.hs
            badExample (x:xs) = x + badExample xs

         If we apply this to a value that it cannot match, we'll get an
         error at runtime: our software has a bug!

         .. code:: haskell
            :class: screen

            ghci> badExample []
            *** Exception: BadPattern.hs:4:0-36: Non-exhaustive patterns in function badExample

         In this example, no equation in the function's definition
         matches the value ``[]``.

         .. tip::

            .. list-table::

               - 

                  - |[Tip]|
                  - Warning about incomplete patterns
               - 

                  - 
                  - GHC provides a helpful compilation option,
                     ``-fwarn-incomplete-patterns``, that will cause it
                     to print a warning during compilation if a sequence
                     of patterns don't match all of a type's value
                     constructors.

         If we need to provide a default behavior in cases where we
         don't care about specific constructors, we can use a wild card
         pattern.

         .. code:: haskell
            :class: programlisting

            -- file: ch03/BadPattern.hs
            goodExample (x:xs) = x + goodExample xs
            goodExample _      = 0

         The wild card above will match the ``[]`` constructor, so
         applying this function does not lead to a crash.

         .. code:: haskell
            :class: screen

            ghci> goodExample []
            0
            ghci> goodExample [1,2]
            3

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Record syntax
                  :name: deftypes.record
                  :class: title

      Writing accessor functions for each of a data type's components
      can be repetitive and tedious.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/BookStore.hs
         nicerID      (Book id _     _      ) = id
         nicerTitle   (Book _  title _      ) = title
         nicerAuthors (Book _  _     authors) = authors

      We call this kind of code *boilerplate*: necessary, but bulky and
      irksome. Haskell programmers don't like boilerplate. Fortunately,
      the language addresses this particular boilerplate problem: we can
      define a data type, and accessors for each of its components,
      simultaneously. (The positions of the commas here is a matter of
      preference. If you like, put them at the end of a line instead of
      the beginning.)

      .. code:: haskell
         :class: programlisting

         -- file: ch03/BookStore.hs
         data Customer = Customer {
               customerID      :: CustomerID
             , customerName    :: String
             , customerAddress :: Address
             } deriving (Show)

      This is almost exactly identical in meaning to the following, more
      familiar form.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/AltCustomer.hs
         data Customer = Customer Int String [String]
                         deriving (Show)

         customerID :: Customer -> Int
         customerID (Customer id _ _) = id

         customerName :: Customer -> String
         customerName (Customer _ name _) = name

         customerAddress :: Customer -> [String]
         customerAddress (Customer _ _ address) = address

      For each of the fields that we name in our type definition,
      Haskell creates an accessor function of that name.

      .. code:: haskell
         :class: screen

         ghci> :type customerID
         customerID :: Customer -> CustomerID

      We can still use the usual application syntax to create a value of
      this type.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/BookStore.hs
         customer1 = Customer 271828 "J.R. Hacker"
                     ["255 Syntax Ct",
                      "Milpitas, CA 95134",
                      "USA"]

      Record syntax adds a more verbose notation for creating a value.
      This can sometimes make code more readable.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/BookStore.hs
         customer2 = Customer {
                       customerID = 271828
                     , customerAddress = ["1048576 Disk Drive",
                                          "Milpitas, CA 95134",
                                          "USA"]
                     , customerName = "Jane Q. Citizen"
                     }

      If we use this form, we can vary the order in which we list
      fields. Here, we have moved the name and address fields from their
      positions in the declaration of the type.

      When we define a type using record syntax, it also changes the way
      the type's values are printed.

      .. code:: haskell
         :class: screen

         ghci> customer1
         Customer {customerID = 271828, customerName = "J.R. Hacker", customerAddress = ["255 Syntax Ct","Milpitas, CA 95134","USA"]}

      For comparison, let's look at a BookInfo value; we defined this
      type without record syntax.

      .. code:: haskell
         :class: screen

         ghci> cities
         Book 173 "Use of Weapons" ["Iain M. Banks"]

      The accessor functions that we get “for free” when we use record
      syntax really are normal Haskell functions.

      .. code:: haskell
         :class: screen

         ghci> :type customerName
         customerName :: Customer -> String
         ghci> customerName customer1
         "J.R. Hacker"

      The standard ``System.Time`` module makes good use of record
      syntax. Here's a type defined in that module:

      .. code:: haskell
         :class: programlisting

         data CalendarTime = CalendarTime {
           ctYear                      :: Int,
           ctMonth                     :: Month,
           ctDay, ctHour, ctMin, ctSec :: Int,
           ctPicosec                   :: Integer,
           ctWDay                      :: Day,
           ctYDay                      :: Int,
           ctTZName                    :: String,
           ctTZ                        :: Int,
           ctIsDST                     :: Bool
         }
             

      In the absence of record syntax, it would be painful to extract
      specific fields from a type like this. The notation makes it
      easier to work with large structures.

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Parameterised types
                  :name: deftypes.paramtypes
                  :class: title

      We've repeatedly mentioned that the list type is polymorphic: the
      elements of a list can be of any type. We can also add
      polymorphism to our own types. To do this, we introduce type
      variables into a type declaration. The Prelude defines a type
      named Maybe: we can use this to represent a value that could be
      either present or missing, e.g. a field in a database row that
      could be null.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/Nullable.hs
         data Maybe a = Just a
                      | Nothing

      Here, the variable ``a`` is not a regular variable: it's a type
      variable. It indicates that the Maybe type takes another type as
      its parameter. This lets us use Maybe on values of any type.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/Nullable.hs
         someBool = Just True

         someString = Just "something"

      As usual, we can experiment with this type in **ghci**.

      .. code:: haskell
         :class: screen

         ghci> Just 1.5
         Just 1.5
         ghci> Nothing
         Nothing
         ghci> :type Just "invisible bike"
         Just "invisible bike" :: Maybe [Char]

      Maybe is a polymorphic, or generic, type. We give the Maybe type
      constructor a parameter to create a specific type, such as Maybe
      Int or Maybe [Bool]. As we might expect, these types are distinct.

      We can nest uses of parameterised types inside each other, but
      when we do, we may need to use parentheses to tell the Haskell
      compiler how to parse our expression.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/Nullable.hs
         wrapped = Just (Just "wrapped")

      To once again extend an analogy to more familiar languages,
      parameterised types bear some resemblance to templates in C++, and
      to generics in Java. Just be aware that this is a shallow analogy.
      Templates and generics were added to their respective languages
      long after the languages were initially defined, and have an
      awkward feel. Haskell's parameterised types are simpler and easier
      to use, as the language was designed with them from the beginning.

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Recursive types
                  :name: deftypes.recursive
                  :class: title

      The familiar list type is *recursive*: it's defined in terms of
      itself. To understand this, let's create our own list-like type.
      We'll use ``Cons`` in place of the ``(:)`` constructor, and
      ``Nil`` in place of ``[]``.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/ListADT.hs
         data List a = Cons a (List a)
                     | Nil
                       deriving (Show)

      Because List a appears on both the left and the right of the ``=``
      sign, the type's definition refers to itself. If we want to use
      the ``Cons`` constructor to create a new value, we must supply one
      value of type ``a``, and another of type ``List a``. Let's see
      where this leads us in practice.

      The simplest value of type List a that we can create is ``Nil``.
      Save the type definition in a file, then load it into **ghci**.

      .. code:: haskell
         :class: screen

         ghci> Nil
         Nil

      Because ``Nil`` has a List type, we can use it as a parameter to
      ``Cons``.

      .. code:: haskell
         :class: screen

         ghci> Cons 0 Nil
         Cons 0 Nil

      And because ``Cons 0 Nil`` has the type List a, we can use this as
      a parameter to ``Cons``.

      .. code:: haskell
         :class: screen

         ghci> Cons 1 it
         Cons 1 (Cons 0 Nil)
         ghci> Cons 2 it
         Cons 2 (Cons 1 (Cons 0 Nil))
         ghci> Cons 3 it
         Cons 3 (Cons 2 (Cons 1 (Cons 0 Nil)))

      We could continue in this fashion indefinitely, creating ever
      longer ``Cons`` chains, each with a single ``Nil`` at the end.

      .. tip::

         .. list-table::
            :widths: 36 36

            - 

               - |[Tip]|
               - Is List an acceptable list?
            - 

               - 
               - We can easily prove to ourselves that our List a type
                  has the same shape as the built-in list type [a]. To
                  do this, we write a function that takes any value of
                  type [a], and produces a value of type List a.

                  .. code:: haskell
                     :class: programlisting

                     -- file: ch03/ListADT.hs
                     fromList (x:xs) = Cons x (fromList xs)
                     fromList []     = Nil

                  By inspection, this clearly substitutes a ``Cons`` for
                  every ``(:)``, and a ``Nil`` for each ``[]``. This
                  covers both of the built-in list type's constructors.
                  The two types are *isomorphic*; they have the same
                  shape.

                  .. code:: haskell
                     :class: screen

                     ghci> fromList "durian"
                     Cons 'd' (Cons 'u' (Cons 'r' (Cons 'i' (Cons 'a' (Cons 'n' Nil)))))
                     ghci> fromList [Just True, Nothing, Just False]
                     Cons (Just True) (Cons Nothing (Cons (Just False) Nil))

      For a third example of what a recursive type is, here is a
      definition of a binary tree type.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/Tree.hs
         data Tree a = Node a (Tree a) (Tree a)
                     | Empty
                       deriving (Show)

      A binary tree is either a node with two children, which are
      themselves binary trees, or an empty value.

      This time, let's search for insight by comparing our definition
      with one from a more familiar language. Here's a similar class
      definition in Java.

      .. code:: haskell
         :class: programlisting

         class Tree<A>
         {
             A value;
             Tree<A> left;
             Tree<A> right;

             public Tree(A v, Tree<A> l, Tree<A> r)
             {
             value = v;
             left = l;
             right = r;
             }
         }

      The one significant difference is that Java lets us use the
      special value ``null`` anywhere to indicate “nothing”, so we can
      use ``null`` to indicate that a node is missing a left or right
      child. Here's a small function that constructs a tree with two
      leaves (a leaf, by convention, has no children).

      .. code:: haskell
         :class: programlisting

         class Example 
         {
             static Tree<String> simpleTree()
             {
             return new Tree<String>(
                     "parent",
                 new Tree<String>("left leaf", null, null),
                 new Tree<String>("right leaf", null, null));
             }
         }

      In Haskell, we don't have an equivalent of ``null``. We could use
      the Maybe type to provide a similar effect, but that bloats the
      pattern matching. Instead, we've decided to use a no-argument
      ``Empty`` constructor. Where the Java example provides ``null`` to
      the Tree constructor, we supply ``Empty`` in Haskell.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/Tree.hs
         simpleTree = Node "parent" (Node "left child" Empty Empty)
                                    (Node "right child" Empty Empty)

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Exercises
                     :name: id585938
                     :class: title

         .. container:: qandaset

            .. list-table::
               :widths: 1

               - 

                  - **1.**
               - 

                  - **2.**

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Reporting errors
                  :name: deftypes.error
                  :class: title

      Haskell provides a standard function, ``error :: String -> a``,
      that we can call when something has gone terribly wrong in our
      code. We give it a string parameter, which is the error message to
      display. Its type signature looks peculiar: how can it produce a
      value of any type ``a`` given only a string?

      It has a result type of ``a`` so that we can call it anywhere and
      it will always have the right type. However, it does not return a
      value like a normal function: instead, it *immediately aborts
      evaluation*, and prints the error message we give it.

      The ``mySecond`` function returns the second element of its input
      list, but fails if its input list isn't long enough.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/MySecond.hs
         mySecond :: [a] -> a

         mySecond xs = if null (tail xs)
                       then error "list too short"
                       else head (tail xs)

      As usual, we can see how this works in practice in **ghci**.

      .. code:: haskell
         :class: screen

         ghci> mySecond "xi"
         'i'
         ghci> mySecond [2]
         *** Exception: list too short
         ghci> head (mySecond [[9]])
         *** Exception: list too short

      Notice the third case above, where we try to use the result of the
      call to ``mySecond`` as the argument to another function.
      Evaluation still terminates and drops us back to the **ghci**
      prompt. This is the major weakness of using ``error``: it doesn't
      let our caller distinguish between a recoverable error and a
      problem so severe that it really should terminate our program.

      As we have already seen, a pattern matching failure causes a
      similar unrecoverable error.

      .. code:: haskell
         :class: screen

         ghci> mySecond []
         *** Exception: Prelude.tail: empty list

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: A more controlled approach
                     :name: deftypes.morecontrolled
                     :class: title

         We can use the Maybe type to represent the possibility of an
         error.

         If we want to indicate that an operation has failed, we can use
         the ``Nothing`` constructor. Otherwise, we wrap our value with
         the ``Just`` constructor.

         Let's see how our ``mySecond`` function changes if we return a
         Maybe value instead of calling ``error``.

         .. code:: haskell
            :class: programlisting

            -- file: ch03/MySecond.hs
            safeSecond :: [a] -> Maybe a

            safeSecond [] = Nothing
            safeSecond xs = if null (tail xs)
                            then Nothing
                            else Just (head (tail xs))

         If the list we're passed is too short, we return ``Nothing`` to
         our caller. This lets them decide what to do, where a call to
         ``error`` would force a crash.

         .. code:: haskell
            :class: screen

            ghci> safeSecond []
            Nothing
            ghci> safeSecond [1]
            Nothing
            ghci> safeSecond [1,2]
            Just 2
            ghci> safeSecond [1,2,3]
            Just 2

         To return to an earlier topic, we can further improve the
         readability of this function with pattern matching.

         .. code:: haskell
            :class: programlisting

            -- file: ch03/MySecond.hs
            tidySecond :: [a] -> Maybe a

            tidySecond (_:x:_) = Just x
            tidySecond _       = Nothing

         The first pattern only matches if the list is at least two
         elements long (it contains two list constructors), and it binds
         the variable ``x`` to the list's second element. The second
         pattern is matched if the first fails.

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Introducing local variables
                  :name: deftypes.locals
                  :class: title

      Within the body of a function, we can introduce new local
      variables whenever we need them, using a ``let`` expression. Here
      is a simple function that determines whether we should lend some
      money to a customer. We meet a money reserve of at least 100, we
      return our new balance after subtracting the amount we have
      loaned.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/Lending.hs
         lend amount balance = let reserve    = 100
                                   newBalance = balance - amount
                               in if balance < reserve
                                  then Nothing
                                  else Just newBalance

      The keywords to look out for here are ``let``, which starts a
      block of variable declarations, and ``in``, which ends it. Each
      line introduces a new variable. The name is on the left of the
      ``=``, and the expression to which it is bound is on the right.

      .. Note:: |[Note]|
               - Special notes
            - 

               - 
               - Let us re-emphasise our wording: a name in a ``let``
                  block is bound to an *expression*, not to a *value*.
                  Because Haskell is a lazy language, the expression
                  associated with a name won't actually be evaluated
                  until it's needed. In the above example, we will not
                  compute the value of ``newBalance`` if we do not meet
                  our reserve.

                  When we define a variable in a ``let`` block, we refer
                  to it as a *``let``-bound* variable. This simply means
                  what it says: we have bound the variable in a ``let``
                  block.

                  Also, our use of white space here is important. We'll
                  talk in more detail about the layout rules in `the
                  section called “The offside rule and white space in an
                  expression” <#deftypes.offside>`__.

      We can use the names of a variable in a ``let`` block both within
      the block of declarations and in the expression that follows the
      ``in`` keyword.

      In general, we'll refer to the places within our code where we can
      use a name as the name's *scope*. If we can use a name, it's *in
      scope*, otherwise it's *out of scope*. If a name is visible
      throughout a source file, we say it's at the *top level*.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Shadowing
                     :name: id586544
                     :class: title

         We can “nest” multiple ``let`` blocks inside each other in an
         expression.

         .. code:: haskell
            :class: programlisting

            -- file: ch03/NestedLets.hs
            foo = let a = 1
                  in let b = 2
                     in a + b

         It's perfectly legal, but not exactly wise, to repeat a
         variable name in a nested ``let`` expression.

         .. code:: haskell
            :class: programlisting

            -- file: ch03/NestedLets.hs
            bar = let x = 1
                  in ((let x = "foo" in x), x)

         Here, the inner ``x`` is hiding, or *shadowing*, the outer
         ``x``. It has the same name, but a different type and value.

         .. code:: haskell
            :class: screen

            ghci> bar
            ("foo",1)

         We can also shadow a function's parameters, leading to even
         stranger results. What is the type of this function?

         .. code:: haskell
            :class: programlisting

            -- file: ch03/NestedLets.hs
            quux a = let a = "foo"
                     in a ++ "eek!"

         Because the function's argument ``a`` is never used in the body
         of the function, due to being shadowed by the ``let``-bound
         ``a``, the argument can have any type at all.

         .. code:: haskell
            :class: screen

            ghci> :type quux
            quux :: t -> [Char]

         .. tip::

            .. list-table::

               - 

                  - |[Tip]|
                  - Compiler warnings are your friends
               - 

                  - 
                  - Shadowing can obviously lead to confusion and nasty
                     bugs, so GHC has a helpful
                     ``-fwarn-name-shadowing`` option. When enabled, GHC
                     will print a warning message any time we shadow a
                     name.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: The where clause
                     :name: id586728
                     :class: title

         We can use another mechanism to introduce local variables: the
         ``where`` clause. The definitions in a ``where`` clause apply
         to the code that *precedes* it. Here's a similar function to
         ``lend``, using ``where`` instead of ``let``.

         .. code:: haskell
            :class: programlisting

            -- file: ch03/Lending.hs
            lend2 amount balance = if amount < reserve * 0.5
                                   then Just newBalance
                                   else Nothing
                where reserve    = 100
                      newBalance = balance - amount

         While a ``where`` clause may initially seem weird, it offers a
         wonderful aid to readability. It lets us direct our reader's
         focus to the important details of an expression, with the
         supporting definitions following afterwards. After a while, you
         may find yourself missing ``where`` clauses in languages that
         lack them.

         As with ``let`` expressions, white space is significant in
         ``where`` clauses. We will talk more about the layout rules
         shortly, in `the section called “The offside rule and white
         space in an
         expression” <#deftypes.offside>`__.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Local functions, global variables
                     :name: deftypes.locals.functions
                     :class: title

         You'll have noticed that Haskell's syntax for defining a
         variable looks very similar to its syntax for defining a
         function. This symmetry is preserved in ``let`` and ``where``
         blocks: we can define local *functions* just as easily as local
         *variables*.

         .. code:: haskell
            :class: programlisting

            -- file: ch03/LocalFunction.hs
            pluralise :: String -> [Int] -> [String]
            pluralise word counts = map plural counts
                where plural 0 = "no " ++ word ++ "s"
                      plural 1 = "one " ++ word
                      plural n = show n ++ " " ++ word ++ "s"

         We have defined a local function, ``plural``, that consists of
         several equations. Local functions can freely use variables
         from the scopes that enclose them: here, we use ``word`` from
         the definition of the outer function ``pluralise``. In the
         definition of ``pluralise``, the ``map`` function (which we'll
         be revisiting in the next chapter) applies the local function
         ``plural`` to every element of the ``counts`` list.

         We can also define variables, as well as functions, at the top
         level of a source file.

         .. code:: haskell
            :class: programlisting

            -- file: ch03/GlobalVariable.hs
            itemName = "Weighted Companion Cube"

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: The offside rule and white space in an
                  expression
                  :name: deftypes.offside
                  :class: title

      In our definitions of ``lend`` and ``lend2``, the left margin of
      our text wandered around quite a bit. This was not an accident: in
      Haskell, white space has meaning.

      Haskell uses indentation as a cue to parse sections of code. This
      use of layout to convey structure is sometimes called the *offside
      rule*. At the beginning of a source file, the first top level
      declaration or definition can start in any column, and the Haskell
      compiler or interpreter remembers that indentation level. Every
      subsequent top level declaration must have the same indentation.

      Here's an illustration of the top level indentation rule. Our
      first file, ``GoodIndent.hs``, is well behaved.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/GoodIndent.hs
         -- This is the leftmost column.

           -- It's fine for top-level declarations to start in any column...
           firstGoodIndentation = 1

           -- ...provided all subsequent declarations do, too!
           secondGoodIndentation = 2

      Our second, ``BadIndent.hs``, doesn't play by the rules.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/BadIndent.hs
         -- This is the leftmost column.

             -- Our first declaration is in column 4.
             firstBadIndentation = 1

           -- Our second is left of the first, which is illegal!
           secondBadIndentation = 2

      Here's what happens when we try to load the two files into
      **ghci**.

      .. code:: haskell
         :class: screen

         ghci> :load GoodIndent.hs
         [1 of 1] Compiling Main             ( GoodIndent.hs, interpreted )
         Ok, modules loaded: Main.
         ghci> :load BadIndent.hs
         [1 of 1] Compiling Main             ( BadIndent.hs, interpreted )

         BadIndent.hs:8:2: parse error on input `secondBadIndentation'
         Failed, modules loaded: none.

      An empty following line is treated as a continuation of the
      current item, as is a following line indented further to the
      right.

      The rules for ``let`` expressions and ``where`` clauses are
      similar. After a ``let`` or ``where`` keyword, the Haskell
      compiler or interpreter remembers the indentation of the next
      token it sees. If the line that follows is empty, or its
      indentation is further to the right, it is considered to continue
      the previous line. If the indentation is the same as the start of
      the preceding item, this is treated as beginning a new item in the
      same block.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/Indentation.hs
         foo = let firstDefinition = blah blah
                   -- a comment-only line is treated as empty
                                       continuation blah

                   -- we reduce the indentation, so this is a new definition
                   secondDefinition = yada yada

                                      continuation yada
               in whatever

      Here are nested uses of ``let`` and ``where``.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/letwhere.hs
         bar = let b = 2
                   c = True
               in let a = b
                  in (a, c)

      The name ``a`` is only visible within the inner ``let``
      expression. It's not visible in the outer ``let``. If we try to
      use the name ``a`` there, we'll get a compilation error. The
      indentation gives both us and the compiler a visual cue as to what
      is currently in scope.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/letwhere.hs
         foo = x
             where x = y
                       where y = 2

      Similarly, the scope of the first ``where`` clause is the
      definition of ``foo``, but the scope of the second is just the
      first ``where`` clause.

      The indentation we use for the ``let`` and ``where`` clauses makes
      our intentions easy to figure out.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: A note about tabs versus spaces
                     :name: deftypes.tabs
                     :class: title

         If you use a Haskell-aware text editor (e.g. Emacs), it is
         probably already configured to use space characters for all
         white space when you edit Haskell source files. If your editor
         is *not* Haskell-aware, you should configure it to only use
         space characters.

         The reason for this is portability. In an editor that uses a
         fixed-width font, tab stops are by convention placed at
         different intervals on Unix-like systems (every eight
         characters) than on Windows (every four characters). This means
         that no matter what your personal beliefs are about where tabs
         belong, you can't rely on someone else's editor honouring your
         preferences. Any indentation that uses tabs is going to look
         broken under *someone's* configuration. In fact, this could
         lead to compilation problems, as the Haskell language standard
         requires implementations to use the Unix tab width convention.
         Using space characters avoids this problem entirely.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: The offside rule is not mandatory
                     :name: deftypes.block
                     :class: title

         We can use explicit structuring instead of layout to indicate
         what we mean. To do so, we start a block of equations with an
         opening curly brace; separate each item with a semicolon; and
         finish the block with a closing curly brace. The following two
         uses of ``let`` have the same meanings.

         .. code:: haskell
            :class: programlisting

            -- file: ch03/Braces.hs
            bar = let a = 1
                      b = 2
                      c = 3
                  in a + b + c

            foo = let { a = 1;  b = 2;
                    c = 3 }
                  in a + b + c

         When we use explicit structuring, the normal layout rules don't
         apply, which is why we can get away with unusual indentation in
         the second ``let`` expression.

         We can use explicit structuring anywhere that we'd normally use
         layout. It's valid for ``where`` clauses, and even top-level
         declarations. Just remember that although the facility exists,
         explicit structuring is hardly ever actually *used* in Haskell
         programs.

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: The case expression
                  :name: deftypes.case
                  :class: title

      Function definitions are not the only place where we can use
      pattern matching. The ``case`` construct lets us match patterns
      within an expression. Here's what it looks like. This function
      (defined for us in ``Data.Maybe``) unwraps a Maybe value, using a
      default if the value is ``Nothing``.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/Guard.hs
         fromMaybe defval wrapped =
             case wrapped of
               Nothing     -> defval
               Just value  -> value

      The ``case`` keyword is followed by an arbitrary expression: the
      pattern match is performed against the result of this expression.
      The ``of`` keyword signifies the end of the expression and the
      beginning of the block of patterns and expressions.

      Each item in the block consists of a pattern, followed by an arrow
      ``->``, followed by an expression to evaluate if that pattern
      matches. These expressions must all have the same type. The result
      of the ``case`` expression is the result of the expression
      associated with the first pattern to match. Matches are attempted
      from top to bottom.

      To express “here's the expression to evaluate if none of the other
      patterns match”, we just use the wild card pattern ``_`` as the
      last in our list of patterns. If a pattern match fails, we will
      get the same kind of runtime error as we saw earlier.

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Common beginner mistakes with patterns
                  :name: deftypes.pattern.limits
                  :class: title

      There are a few ways in which new Haskell programmers can
      misunderstand or misuse patterns. Here are some attempts at
      pattern matching gone awry. Depending on what you expect one of
      these examples to do, it might contain a surprise.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Incorrectly matching against a variable
                     :name: id587485
                     :class: title

         .. code:: haskell
            :class: programlisting

            -- file: ch03/BogusPattern.hs
            data Fruit = Apple | Orange

            apple = "apple"

            orange = "orange"        

            whichFruit :: String -> Fruit

            whichFruit f = case f of
                             apple  -> Apple
                             orange -> Orange

         A naive glance suggests that this code is trying to check the
         value ``f`` to see whether it matches the value ``apple`` or
         ``orange``.

         It is easier to spot the mistake if we rewrite the code in an
         equational style.

         .. code:: haskell
            :class: programlisting

            -- file: ch03/BogusPattern.hs
            equational apple = Apple
            equational orange = Orange

         Now can you see the problem? Here, it is more obvious ``apple``
         does not refer to the top level value named ``apple``: it is a
         local pattern variable.

         .. Note:: Irrefutable patterns
               - 

                  - 
                  - We refer to a pattern that always succeeds as
                     *irrefutable*. Plain variable names and the wild
                     card ``_`` are examples of irrefutable patterns.

         Here's a corrected version of this function.

         .. code:: haskell
            :class: programlisting

            -- file: ch03/BogusPattern.hs
            betterFruit f = case f of
                              "apple"  -> Apple
                              "orange" -> Orange

         We fixed the problem by matching against the literal values
         ``"apple"`` and ``"orange"``.

      .. container:: sect2

         .. container:: titlepage

            .. container::

               .. container::

                  .. rubric:: Incorrectly trying to compare for equality
                     :name: id587613
                     :class: title

         What if we want to compare the values stored in two nodes of
         type Tree, and return one of them if they're equal? Here's an
         attempt.

         .. code:: haskell
            :class: programlisting

            -- file: ch03/BadTree.hs
            bad_nodesAreSame (Node a _ _) (Node a _ _) = Just a
            bad_nodesAreSame _            _            = Nothing

         A name can only appear once in a set of pattern bindings. We
         cannot place a variable in multiple positions to express the
         notion “this value and that should be identical”. Instead,
         we'll solve this problem using *guards*, another invaluable
         Haskell feature.

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Conditional evaluation with guards
                  :name: deftypes.guard
                  :class: title

      Pattern matching limites us to performing fixed tests of a value's
      shape. Although this is useful, we will often want to make a more
      expressive check before evaluating a function's body. Haskell
      provides a feature, *guards*, that give us this ability. We'll
      introduce the idea with a modification of the function we wrote to
      compare two nodes of a tree.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/BadTree.hs
         nodesAreSame (Node a _ _) (Node b _ _)
             | a == b     = Just a
         nodesAreSame _ _ = Nothing

      In this example, we use pattern matching to ensure that we are
      looking at values of the right shape, and a guard to compare
      pieces of them.

      A pattern can be followed by zero or more guards, each an
      expression of type Bool. A guard is introduced by a ``|`` symbol.
      This is followed by the guard expression, then an ``=`` symbol (or
      ``->`` if we're in a ``case`` expression), then the body to use if
      the guard expression evaluates to ``True``. If a pattern matches,
      each guard associated with that pattern is evaluated, in the order
      in which they are written. If a guard succeeds, the body
      affiliated with it is used as the result of the function. If no
      guard succeeds, pattern matching moves on to the next pattern.

      When a guard expression is evaluated, all of the variables
      mentioned in the pattern with which it is associated are bound and
      can be used.

      Here is a reworked version of our ``lend`` function that uses
      guards.

      .. code:: haskell
         :class: programlisting

         -- file: ch03/Lending.hs
         lend3 amount balance
              | amount <= 0            = Nothing
              | amount > reserve * 0.5 = Nothing
              | otherwise              = Just newBalance
             where reserve    = 100
                   newBalance = balance - amount

      The special-looking guard expression ``otherwise`` is simply a
      variable bound to the value ``True``, to aid readability.

      We can use guards anywhere that we can use patterns. Writing a
      function as a series of equations using pattern matching and
      guards can make it much clearer. Remember the ``myDrop`` function
      we defined in `the section called “Conditional
      evaluation” <types-and-functions.html#funcstypes.if>`__?

      .. code:: haskell
         :class: programlisting

         -- file: ch02/myDrop.hs
         myDrop n xs = if n <= 0 || null xs
                       then xs
                       else myDrop (n - 1) (tail xs)

      Here is a reformulation that uses patterns and guards.

      .. code:: haskell
         :class: programlisting

         -- file: ch02/myDrop.hs
         niceDrop n xs | n <= 0 = xs
         niceDrop _ []          = []
         niceDrop n (_:xs)      = niceDrop (n - 1) xs

      This change in style lets us enumerate *up front* the cases in
      which we expect a function to behave differently. If we bury the
      decisions inside a function as ``if`` expressions, the code
      becomes harder to read.

   .. container:: sect1

      .. container:: titlepage

         .. container::

            .. container::

               .. rubric:: Exercises
                  :name: id587860
                  :class: title

      .. container:: qandaset

         .. list-table::
            :widths: 1

            - 

               - **1.**
            - 

               - **2.**
            - 

               - **3.**
            - 

               - **4.**
            - 

               - **5.**
            - 

               - **6.**
            - 

               - **7.**
            - 

               - **8.**
            - 

               - **9.**
            - 

               - **10.**
            - 

               - **11.**
            - 

               - **12.**

   .. container:: footnotes

      --------------

      .. container:: footnote

         :sup:`[`\ `7 <#id582956>`__\ :sup:`]` If you are familiar with
         C or C++, it is analogous to a ``typedef``.

