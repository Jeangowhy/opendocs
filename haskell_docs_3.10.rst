

===================================================
/. 🚀 Docs combine script
===================================================

文档合并脚本中使用了 sed 流式编辑器、awk 结构化数据编辑器，使用教程参考 OpenDocs： 

1. [Sed in 5 Minutes](https://github.com/Jeangowhy/opendocs/blob/main/sed.info)
2. [AWK in 5 Minutes](https://github.com/Jeangowhy/opendocs/blob/main/sed.info)

.. code-block:: bash

    #! /usr/bin/env bash
    
    print_title () 
    {
        printf '\n%.0s' {1..2};
        printf '=%.0s' {1..51};
        printf "\n/. 🚀 $1\n"
        printf '=%.0s' {1..51};
        printf '\n%.0s' {1..2};
    }
    
    function filter 
    {
        local parent=`echo $1 | sed -n 's/[^/\]\+$//p'`
        echo $1
        while read it
        do
            if [[ -z "$it" ]]; then break; fi
            doc="$parent${it/.rst/}.rst"
            if ( [ -a $doc ] || [ -a "$doc.rst" ] ) && [ -z ${doc/*index.rst/} ]
            then
                echo "➊==>$doc" >&2
                filter "$doc"
            else
                echo "➋$doc" >&2
                echo "$doc"
            fi
        done <<< $( sed -n "/^.. toctree::/,/^\S/{ s/^ \+[^:]\+$/\0/p }" $1 \
          | sed -n 's|.*<\(.*\)>|\1|;p' \
          )
    }
    
    function include()
    {
        while read -r it
        do 
            if [[ -z "$it" ]]; then break; fi
            echo "➌+++$1" >&2
            print_title "$it"
            printf ".. code-block:: \n\n"
            cat $it | sed -n 's/.*/    \0/p'
        done <<< $(cat "$1" | sed -n 's/.. include:://p')
    }
    
    function toc() 
    {
        # echo ../README.md
        filter ./index.rst
    }
    
    function doc()
    {
        cat << EOF
    文档合并脚本中使用了 sed 流式编辑器、awk 结构化数据编辑器，使用教程参考 OpenDocs： 
    
    1. [Sed in 5 Minutes](https://github.com/Jeangowhy/opendocs/blob/main/sed.info)
    2. [AWK in 5 Minutes](https://github.com/Jeangowhy/opendocs/blob/main/sed.info)
    
    EOF
    }
    
    function self_include()
    {
        print_title "Docs combine script"
        doc
        echo '.. code-block:: bash'
    
        echo ''
        cat "$0" | sed -n 's/^/    /p'
    
        echo ''
        echo "Docs files count: `find ./ -name "*.rst" | wc -l` ::"
        echo ''
        find ./ -name "*.rst" | sed -n 's/.*/    \0/p' | grep -v library
    }
    
    function combine() 
    {
        self_include
        while read -r it
        do 
            print_title "$it"
            cat "$it"
            include "$it"
        done << EOF
    `toc`
    EOF
    }
    
    
    out=/c/opendocs/haskell_docs.rst
    combine > $out
    subl $out

Docs files count: 19 ::

    ➋./getting-started.rst
    ➋./how-to-package-haskell-code.rst
    ➋./how-to-build-like-nix.rst
    ./nix-local-build.rst
    ➋./how-to-use-backpack.rst
    ➋./how-to-report-bugs.rst
    ➋./cabal-package-description-file.rst
    ./cabal-commands.rst
    ./config.rst
    ➋./cabal-project-description-file.rst
    ➋./cabal-config-and-commands.rst
    ➋./external-commands.rst
    ➋./setup-commands.rst
    ➋./file-format-changelog.rst
    ➋./buildinfo-fields-reference.rst
    ➋./cabal-context.rst
    ➋./package-concepts.rst
    ➋./cabal-interface-stability.rst
    ➌+++./cabal-package-description-file.rst
    ➌+++./cabal-project-description-file.rst
    ➌+++./setup-commands.rst
    ➌+++./file-format-changelog.rst
    ➌+++./cabal-context.rst
    ➌+++./cabal-interface-stability.rst

===================================================
/. 🚀 ./index.rst
===================================================

Welcome to the Cabal User Guide
===============================
:
.. toctree::
   :caption: Getting Started
   :numbered:
   :maxdepth: 2

   getting-started
:
.. toctree::
   :caption: Cabal Guide
   :numbered:
   :maxdepth: 2

   how-to-package-haskell-code
   how-to-build-like-nix
   how-to-use-backpack
   how-to-report-bugs
:
.. toctree::
   :caption: Cabal Reference
   :numbered:
   :maxdepth: 2

   cabal-package-description-file
   cabal-project-description-file
   cabal-config-and-commands
   external-commands
   setup-commands
   file-format-changelog
   buildinfo-fields-reference
:
.. toctree::
   :caption: Cabal Explanation
   :numbered:
   :maxdepth: 2

   cabal-context
   package-concepts
   cabal-interface-stability


===================================================
/. 🚀 ./getting-started.rst
===================================================

Getting Started
===============

Installing Cabal
----------------

The easiest and recommended way to install the ``cabal`` command-line tool
on Linux, macOS, FreeBSD or Windows is through `ghcup <https://www.haskell.org/ghcup/>`__.
It installs the “Haskell toolchain”, which includes Cabal,
the Haskell compiler `GHC <https://www.haskell.org/ghc/>`__
and optionally other useful Haskell tools.

Creating a new application
--------------------------

We create a minimal Haskell application to get a quick overview
of the ``cabal`` command-line tool:

1. How to initialize a Haskell package.
2. How files are organized inside a package.
3. How to compile Haskell files and run a resulting executable.
4. How to manage external dependencies.

Initializing an application
^^^^^^^^^^^^^^^^^^^^^^^^^^^

To initialize a new Haskell application, run

.. code-block:: console

    $ cabal init myapp --non-interactive

in a terminal. This generates the following files in a new ``myapp`` directory:

.. code-block:: console

    $ tree
    .
    └── myapp
        ├── app
        │   └── Main.hs
        ├── CHANGELOG.md
        └── myapp.cabal

The ``myapp.cabal`` file is a package description file, commonly referred to as a “Cabal file”:

.. code-block:: cabal

    cabal-version:      3.0
    name:               myapp
    version:            0.1.0.0
    -- ...

    executable myapp
        import:           warnings
        main-is:          Main.hs
        build-depends:    base ^>=4.19.0.0
        hs-source-dirs:   app
        default-language: Haskell2010

It contains metadata (package name and version, author name, license, etc.) and sections
to define package components. Components can be used to split large codebases into smaller,
more managable building blocks.
A component can be of one of several types (executable, library, etc.) and describes,
among other things, the location of source files and its dependencies.
The ``myapp.cabal`` file above defines a single component named ``myapp`` of the executable type.
Inside the ``executable`` section, the ``build-depends`` field lists the dependencies of this component.


The ``app/Main.hs`` file is where your executable's code lives:

.. code-block:: haskell

    module Main where

    main :: IO ()
    main = putStrLn "Hello, Haskell!"


To run the executable, switch into the application directory with ``cd myapp`` and run

.. code-block:: console

     $ cabal run myapp
     ...
     Hello, Haskell!

This command automatically determines if the executable needs to be (re)built
before running the executable. With only one executable component in the package,
``cabal run`` (without a component name) is smart enough to infer it, so the name can be omitted.

If you just want to build the executable without running it, run:

.. code-block:: console

    $ cabal build
    Resolving dependencies...
    ...
    Building executable 'myapp' for myapp-0.1.0.0..
    [1 of 1] Compiling Main             ( app/Main.hs, /home/.../myapp/dist-newstyle/build/.../myapp-tmp/Main.o )
    Linking /home/.../myapp/dist-newstyle/build/.../myapp


Adding dependencies
^^^^^^^^^^^^^^^^^^^

Next we'll add an external dependency to our application. 
`Hackage <https://hackage.haskell.org/>`__ is the Haskell community's central 
`package` archive of open source software.

In our application, we'll use a package called 
`haskell-say <https://hackage.haskell.org/package/haskell-say>`__
to print text to the terminal with some embellishment.

.. TIP::
   If you installed ``cabal`` a while ago but haven't used it recently you may
   need to update the package index, you can do this by running ``cabal
   update``.

In our ``myapp.cabal`` file, we will update the ``build-depends`` field of
the executable section to include ``haskell-say``:

.. code-block:: cabal

   executable myapp
       import: warnings
       main-is: Main.hs
       build-depends:
           base ^>=4.19.0.0,
           haskell-say ^>=1.0.0.0
       hs-source-dirs: app
       default-language: Haskell2010


.. NOTE::
   ``^>=1.0.0.0`` means use version 1.0.0.0 of the library or any more recent
   minor release with the same major version. To put it simply, this means
   use the latest version of the library that starts with ``1.0``.

Next we'll update ``app/Main.hs`` to use the ``HaskellSay`` library:

.. code-block:: haskell

   module Main where

   import HaskellSay (haskellSay)

   main :: IO ()
   main = haskellSay "Hello, Haskell!"

``import HaskellSay (haskellSay)`` brings the ``haskellSay`` function from the
module named ``HaskellSay`` into scope. The ``HaskellSay`` module is defined in
the ``haskell-say`` package that we added as a dependency above.

Now you can build and re-run your code to see the new output:

.. code-block:: console

   $ cabal run myapp
       ________________________________________________________
      /                                                        \
     | Hello, Haskell!                                          |
      \____       _____________________________________________/
           \    /
            \  /
             \/
       _____   _____
       \    \  \    \
        \    \  \    \
         \    \  \    \
          \    \  \    \  \-----------|
           \    \  \    \  \          |
            \    \  \    \  \---------|
            /    /  /     \
           /    /  /       \  \-------|
          /    /  /    ^    \  \      |
         /    /  /    / \    \  \ ----|
        /    /  /    /   \    \
       /____/  /____/     \____\

Running a single-file Haskell script
------------------------------------

Cabal also supports running single-file Haskell scripts like
the following file named ``myscript``:

.. code-block:: haskell

    #!/usr/bin/env cabal
    {- cabal:
    build-depends:
      base ^>=4.19.0.0,
      haskell-say ^>=1.0.0.0
    -}

    import HaskellSay (haskellSay)

    main :: IO ()
    main = haskellSay "Hello, Haskell!"

The necessary sections of a ``.cabal`` file are placed 
directly into the script as a comment.

Use the familiar ``cabal run`` command to execute this script:

.. code-block:: console

    $ cabal run myscript

On Unix-like systems, a Haskell script starting with ``#!/usr/bin/env cabal``, like the one above,
can be run directly after setting the execute permission (+x):

.. code-block:: console

    $ chmod +x myscript
    $ ./myscript
       ________________________________________________________
      /                                                        \
     | Hello, Haskell!                                          |
      \____        ____________________________________________/
           \ ... /

See more in the documentation for :ref:`cabal run`.

What Next?
----------

Now that you know how to set up a simple Haskell package using Cabal, check out
some of the resources on the Haskell website's `documentation page
<https://www.haskell.org/documentation/>`__ or read more about packages and
Cabal on the :doc:`What Cabal does <cabal-context>` page.


===================================================
/. 🚀 ./how-to-package-haskell-code.rst
===================================================

How to package Haskell code
===========================

.. TIP::
    If this is your first time using `cabal` you should check out the :doc:`Getting Started guide <getting-started>`.

Starting from scratch, we're going to walk you through creating a simple
Haskell application.

**TL;DR;** ``mkdir proglet && cd proglet && cabal init --simple --exe && cabal run proglet``


Introduction
------------

Every application needs a name, we'll call ours "proglet" and start by
creating an empty directory.

.. highlight:: console

::

    $ mkdir proglet
    $ cd proglet/


.. _init quickstart:

Using ``cabal init``
--------------------

The ``cabal init`` command creates the necessary files for a Cabal package,
it has both an ``--interactive`` (default) and ``--non-interactive``
mode. The interactive mode will walk you through many of the package
options and metadata, the non-interactive mode will simply pick reasonable
defaults which is sufficient if you're just trying something out.

.. highlight:: console

::

    $ cabal init --non-interactive
    # You can also use -n which is the short version of --non-interactive

If you want, you can also try out the interactive mode, for now chose
"Executable" when asked what type of package you want to build.

.. highlight:: console

::

    $ cabal init
    ...
    What does the package build:
       1) Executable
       2) Library
       3) Library and Executable
       4) Test suite
    Your choice?

One of the important questions is whether the package contains a library
and/or an executable. Libraries are collections of Haskell modules that
can be re-used by other Haskell libraries and programs, while executables
are standalone programs. Test suites can both depend on a library or be
standalone.

For the moment these are the only choices. For more complex packages
(e.g. a library and multiple executables) the ``.cabal``
file can be edited afterwards.

After you make your selection (executable; library; library
and executable; or: test suite) cabal asks us a number of questions starting with
which version of the cabal specification to use, our package's name
(for example, "proglet"), and our package's version.

::

    Generating CHANGELOG.md...
    Generating Main.hs...
    Generating proglet.cabal...

Use the ``ls`` command to see the created files:

::

   $ ls
   CHANGELOG.md  Main.hs  proglet.cabal


Running the program
-------------------

Now that we have our Haskell code and the extra files that Cabal needs, we
can build and run our application.

::

   $ cabal build
   Resolving dependencies...
   ...
   Linking /path/to/proglet ...

   $ cabal run proglet
   ...
   Hello, Haskell!

Since we have an executable we can use ``cabal run proglet`` which will build
our executable (and re-build it if we've made any changes) and then run the
binary. The ``cabal run`` command works for any ``component-name`` (tests for
example), not just the main executable.


About the Cabal package structure
---------------------------------

It is assumed that all the files that make up a package live under a common
root directory (apart from external dependencies). This simple example has
all the package files in one directory, but most packages use one or more
subdirectories.

Cabal needs one extra file in the package's root directory:

-  ``proglet.cabal``: contains package metadata and build information.


Editing the .cabal file
-----------------------

.. highlight:: cabal

Load up the ``.cabal`` file in a text editor. The first part of the
``.cabal`` file has the package metadata and towards the end of the file
you will find the :pkg-section:`executable` or :pkg-section:`library`
section.

You will see that the fields that have yet to be filled in are commented
out. Cabal files use "``--``" Haskell-style comment syntax.

.. NOTE::
   Comments are only allowed on lines on their own. Trailing comments on
   other lines are not allowed because they could be confused with program
   options.


::

    executable proglet
      main-is: Main.hs
      -- other-modules:
      -- other-extensions:
      build-depends: base >=4.11 && <4.12
      -- hs-source-dirs:
      default-language: Haskell2010


If you selected earlier to create a library package then your ``.cabal``
file will have a section that looks like this:

::

    library
      exposed-modules: MyLib
      -- other-modules:
      -- build-depends:
      build-depends: base >=4.11 && <4.12
      -- hs-source-dirs:
      default-language: Haskell2010


The build information fields listed (but commented out) are just the few
most important and common fields. There are many others that are covered
later in this chapter.

Most of the build information fields are the same between libraries and
executables. The difference is that libraries have a number of "exposed"
modules that make up the public interface of the library, while
executables have a file containing a ``Main`` module.

The name of a library always matches the name of the package, so it is
not specified in the library section. Executables often follow the name
of the package too, but this is not required and the name is given
explicitly.


Modules included in the package
-------------------------------

For an executable, ``cabal init`` creates the ``Main.hs`` file which
contains your program's ``Main`` module. It will also fill in the
:pkg-field:`executable:main-is` field with the file name of your program's
``Main`` module, including the ``.hs`` (or ``.lhs``) extension. Other
modules included in the executable should be listed in the
:pkg-field:`other-modules` field.

For a library, ``cabal init`` looks in the project directory for files
that look like Haskell modules and adds all the modules to the
:pkg-field:`library:exposed-modules` field. For modules that do not form part
of your package's public interface, you can move those modules to the
:pkg-field:`other-modules` field. Either way, all modules in the library need
to be listed.


Modules imported from other packages
------------------------------------

While your library or executable may include a number of modules, it
almost certainly also imports a number of external modules from the
standard libraries or other pre-packaged libraries. (These other
libraries are of course just Cabal packages that contain one or more libraries.)

You have to list all of the library packages that your library or
executable imports modules from. Or to put it another way: you have to
list all the other packages that your package depends on.

For example, suppose the example ``Proglet`` module imports the module
``Data.Map``. The ``Data.Map`` module comes from the ``containers``
package, so we must list it:

::

    library
      exposed-modules:     Proglet
      other-modules:
      build-depends:       containers, base >=4.11 && <4.12

In addition, almost every package also depends on the ``base`` library
package because it exports the standard ``Prelude`` module plus other
basic modules like ``Data.List``.

You will notice that we have listed ``base >=4.11 && <4.12``. This gives a
constraint on the version of the base package that our package will work
with. The most common kinds of constraints are:

-  ``pkgname >=n``
-  ``pkgname ^>=n``
-  ``pkgname >=n && <m``
-  ``pkgname ==n.*``

The last is just shorthand, for example ``base ==4.*`` means exactly
the same thing as ``base >=4 && <5``. Please refer to the documentation
on the :pkg-field:`build-depends` field for more information.

Also, you can factor out shared ``build-depends`` (and other fields such
as ``ghc-options``) into a ``common`` stanza which you can ``import`` in
your libraries and executable sections. For example:

::

    common shared-properties
      default-language: Haskell2010
      build-depends:
        base == 4.*
      ghc-options:
        -Wall

    library
      import: shared-properties
      exposed-modules:
        Proglet

Note that the ``import`` **must** be the first thing in the stanza. For more
information see the :ref:`common-stanzas` section.

.. _building-packages:

Building the package
--------------------

For simple packages that's it! We can now try building the package,
which also downloads and builds all required dependencies:

.. code-block:: console

    $ cabal build

If the package contains an executable, you can run it with:

.. code-block:: console

   $ cabal run

and the executable can also be installed for convenience:

.. code-block:: console

    $ cabal install

When installed, the executable program lands in a special directory
for binaries that may or may not already be on your system's ``PATH``.
If it is, the executable can be run by typing its filename on commandline.
For installing libraries see the :ref:`adding-libraries` section.


===================================================
/. 🚀 ./how-to-build-like-nix.rst
===================================================

.. _nix-style-builds:

How to build locally like in Nix
================================

Nix-style local builds are a new build system implementation inspired by Nix.
The Nix-style local build system is commonly called "v2-build" for short
after the ``cabal v2-*`` family of commands that control it. However, those
names are only temporary now that Nix-style local builds have become the
default. For those who do not wish to use the new
functionality, the classic project style will not be removed immediately,
but these legacy commands will require the usage of the ``v1-`` prefix as of
Cabal 3.0 and will be removed in a future release. For a future-proof
way to use these commands in a script or tutorial that anticipates the
possibility of another UI paradigm being devised in the future, there
are also ``v2-`` prefixed versions that will reference the same functionality
until such a point as it is completely removed from Cabal.

Nix-style local builds combine the best of non-sandboxed and sandboxed Cabal:

1. Like sandboxed Cabal previously, we build sets of independent local
   packages deterministically and independent of any global state.
   v2-build will never tell you that it can't build your package
   because it would result in a "dangerous reinstall." Given a
   particular state of the Hackage index, your build is completely
   reproducible. For example, you no longer need to compile packages
   with profiling ahead of time; just request profiling and v2-build
   will rebuild all its dependencies with profiling automatically.

2. Like non-sandboxed Cabal today, builds of external packages are
   cached in a global store, so that a package can be built once,
   and then reused anywhere else it is also used. No need to continually
   rebuild dependencies whenever you make a new sandbox: dependencies
   which can be shared, are shared.

Nix-style local builds were first released as beta in cabal-install 1.24.
They currently work with all versions of GHC supported by that release: GHC 7.0 and later.

Some features described in this manual are not implemented. If you need
them, please give us a shout and we'll prioritize accordingly.



.. toctree::
   nix-local-build


===================================================
/. 🚀 ./nix-local-build.rst
===================================================

.. highlight:: console

Quickstart
==========

Suppose that you are in a directory containing a single Cabal package
which you wish to build (if you haven't set up a package yet check
out :doc:`How to package Haskell code <how-to-package-haskell-code>` for
instructions). You can configure and build it using Nix-style
local builds with this command (configuring is not necessary):

::

    $ cabal build

To open a GHCi shell with this package, use this command:

::

    $ cabal repl

To run an executable defined in this package, use this command:

::

    $ cabal run <executable name> [executable args]

Developing multiple packages
----------------------------

Many Cabal projects involve multiple packages which need to be built
together. To build multiple Cabal packages, you need to first create a
``cabal.project`` file which declares where all the local package
directories live. For example, in the Cabal repository, there is a root
directory with a folder per package, e.g., the folders ``Cabal`` and
``cabal-install``. The ``cabal.project`` file specifies each folder as
part of the project:

.. code-block:: cabal

    packages: Cabal/
              cabal-install/

The expectation is that a ``cabal.project`` is checked into your source
control, to be used by all developers of a project. If you need to make
local changes, they can be placed in ``cabal.project.local`` (which
should not be checked in.)

Then, to build every component of every package, from the top-level
directory, run the command: (using cabal-install-2.0 or greater.)

::

    $ cabal build all

To build a specific package, you can either run ``build`` from the
directory of the package in question:

::

    $ cd cabal-install
    $ cabal build

or you can pass the name of the package as an argument to
``cabal build`` (this works in any subdirectory of the project):

::

    $ cabal build cabal-install

You can also specify a specific component of the package to build. For
example, to build a test suite named ``package-tests``, use the command:

::

    $ cabal build package-tests

Targets can be qualified with package names. So to request
``package-tests`` *from* the ``Cabal`` package, use
``Cabal-tests:package-tests``.

Unlike sandboxes, there is no need to setup a sandbox or ``add-source``
projects; just check in ``cabal.project`` to your repository and
``build`` will just work.

Cookbook
========

How can I profile my library/application?
-----------------------------------------

Create or edit your ``cabal.project.local``, adding the following
line::

    profiling: True

Now, ``cabal build`` will automatically build all libraries and
executables with profiling.  You can fine-tune the profiling settings
for each package using :cfg-field:`profiling-detail`::

    package p
        profiling-detail: toplevel-functions

Alternately, you can call ``cabal build --enable-profiling`` to
temporarily build with profiling.

How can I have a reproducible set of versions for my dependencies?
------------------------------------------------------------------

You can use ``cabal freeze`` to save the solver results to a file.

Since Cabal 3.8, an alternative approach is to use a :ref:`remote project
configuration file<conditionals and imports>`: to specify a set of versions for
packages.

One provider of such package sets is Stackage_, and its package sets are called
snapshots. The Stackage snapshots contain a set of packages from Hackage that
have all been verified to build with a given version of GHC.

For example, the snapshot named lts-19.2 contains versioned packages which all
compile on GHC 9.0.2. You can conveniently review the `versions of packages in
lts-19.2`_. Using the following ``cabal.project`` file, Cabal will use the
versions of packages that the this snapshot specifies:

::

    packages: .
    import: https://www.stackage.org/lts-19.2/cabal.config

Please note that project files do not get bundled in Cabal package tarballs,
made using e.g. ``cabal sdist``. Project files are intended for use in local
development environments.

.. _Stackage: https://stackage.org/
.. _versions of packages in lts-19.2: https://www.stackage.org/lts-19.2

How it works
============

Local versus external packages
------------------------------

One of the primary innovations of Nix-style local builds is the
distinction between local packages, which users edit and recompile and
must be built per-project, versus external packages, which can be cached
across projects. To be more precise:

1. A **local package** is one that is listed explicitly in the
   ``packages``, ``optional-packages`` or ``extra-packages`` fields of a
   project. Packages in the former two fields will usually have their
   source code stored in a folder in your project, while ``extra-packages`` lists
   packages residing on Hackage that are treated as being local anyway.

Local packages, as well as the external packages (below) which depend on
them, are built **inplace**, meaning that they are always built
specifically for the project and are not installed globally. Inplace
packages are not cached and not given unique hashes, which makes them
suitable for packages which you want to edit and recompile.

2. An **external package** is any package which is not listed in the
   ``packages``, ``optional-packages`` and ``extra-packages`` fields.
   The source code for external packages is usually retrieved from Hackage.

When an external package does not depend on an inplace package, it can
be built and installed to a **global** store, which can be shared across
projects. These build products are identified by a hash based on all of
the inputs which influence the compilation of a package (flags,
dependency selection, etc.). Just as in Nix, these hashes uniquely
identify the result of a build; if we compute this identifier and we
find that we already have this ID built, we can just use the already
built version.

Use ``cabal path --store-dir`` to show where your global package store is located.
This is configurable via the global ``store-dir`` option.
If you need to clear your store for
whatever reason (e.g., to reclaim disk space or because the global
store is corrupted), deleting this directory is safe (``build``
will just rebuild everything it needs on its next invocation).

This split motivates some of the UI choices for Nix-style local build
commands. For example, flags passed to ``cabal build`` are only
applied to *local* packages, so that adding a flag to
``cabal build`` doesn't necessitate a rebuild of *every* transitive
dependency in the global package store.

In cabal-install 2.0 and above, Nix-style local builds also take advantage of a
new Cabal library feature, 
`per-component builds <https://github.com/ezyang/ghc-proposals/blob/master/proposals/0000-componentized-cabal.rst>`__,
where each component of a package is configured and built separately.
This can massively speed up rebuilds of packages with lots of components
(e.g., a package that defines multiple executables), as only one
executable needs to be rebuilt. Packages that use Custom setup scripts
are not currently built on a per-component basis.

Where are my build products?
----------------------------

A major deficiency in the current implementation of ``cabal build`` is that
there is no programmatic way to access the location of build products.
The location of the build products is intended to be an internal
implementation detail of ``cabal build``, but we also understand that many
unimplemented features can only be reasonably worked around by
accessing build products directly.

The location where build products can be found varies depending on the
version of cabal-install:

-  In cabal-install-1.24, the dist directory for a package ``p-0.1`` is
   stored in ``dist-newstyle/build/p-0.1``. For example, if you built an
   executable or test suite named ``pexe``, it would be located at
   ``dist-newstyle/build/p-0.1/build/pexe/pexe``.

-  In cabal-install-2.0, the dist directory for a package ``p-0.1``
   defining a library built with GHC 8.0.1 on 64-bit Linux is
   ``dist-newstyle/build/x86_64-linux/ghc-8.0.1/p-0.1``. When
   per-component builds are enabled (any non-Custom package), a
   subcomponent like an executable or test suite named ``pexe`` will be
   stored at
   ``dist-newstyle/build/x86_64-linux/ghc-8.0.1/p-0.1/c/pexe``; thus,
   the full path of the executable is
   ``dist-newstyle/build/x86_64-linux/ghc-8.0.1/p-0.1/c/pexe/build/pexe/pexe``
   (you can see why we want this to be an implementation detail!)

-  In cabal-install-2.2 and above, the ``/c/`` part of the above path
   is replaced with one of ``/l/``, ``/x/``, ``/f/``, ``/t/``, or
   ``/b/``, depending on the type of component (sublibrary,
   executable, foreign library, test suite, or benchmark
   respectively). So the full path to an executable named ``pexe``
   compiled with GHC 8.0.1 on a 64-bit Linux is now
   ``dist-newstyle/build/x86_64-linux/ghc-8.0.1/p-0.1/x/pexe/build/pexe/pexe``;
   for a benchmark named ``pbench`` it now is
   ``dist-newstyle/build/x86_64-linux/ghc-8.0.1/p-0.1/b/pbench/build/pbench/pbench``;


The paths are a bit longer in 2.0 and above but the benefit is that you can
transparently have multiple builds with different versions of GHC. We
plan to add the ability to create aliases for certain build
configurations, and more convenient paths to access particularly useful
build products like executables.

Caching
-------

Nix-style local builds support a robust caching system which helps to reduce
the time it takes to execute a rebuild cycle. While the details of how
``cabal-install`` does caching are an implementation detail and may
change in the future, knowing what gets cached is helpful for
understanding the performance characteristics of invocations to
``build``. The cached intermediate results are stored in
``dist-newstyle/cache``; this folder can be safely deleted to clear the
cache.

The following intermediate results are cached in the following files in
this folder (the most important two are first):

``solver-plan`` (binary)
    The result of calling the dependency solver, assuming that the
    Hackage index, local ``cabal.project`` file, and local ``cabal``
    files are unmodified. (Notably, we do NOT have to dependency solve
    again if new build products are stored in the global store; the
    invocation of the dependency solver is independent of what is
    already available in the store.)
``source-hashes`` (binary)
    The hashes of all local source files. When all local source files of
    a local package are unchanged, ``cabal build`` will skip
    invoking ``setup build`` entirely (saving us from a possibly
    expensive call to ``ghc --make``). The full list of source files
    participating in compilation is determined using
    ``cabal sdist --list-only``. Thus if you do not list all your
    source files in a Cabal file, Cabal may fail to recompile when you
    edit them.
``config`` (binary)
    The full project configuration, merged from ``cabal.project`` (and
    friends) as well as the command line arguments.
``compiler`` (binary)
    The configuration of the compiler being used to build the project.
``improved-plan`` (binary)
    Like ``solver-plan``, but with all non-inplace packages improved
    into pre-existing copies from the store.
``plan.json`` (JSON)
    A JSON serialization of the computed install plan intended
    for integrating ``cabal`` with external tooling.
    The `cabal-plan <http://hackage.haskell.org/package/cabal-plan>`__
    package provides a library for parsing ``plan.json`` files into a
    Haskell data structure as well as an example tool showing possible
    applications.

    .. todo::

        Document JSON schema (including version history of schema)


Note that every package also has a local cache managed by the Cabal
build system, e.g., in ``$distdir/cache``.


===================================================
/. 🚀 ./how-to-use-backpack.rst
===================================================

.. _Backpack:

How to use Backpack modules
===========================

Cabal and GHC jointly support Backpack, an extension to Haskell's module
system which makes it possible to parametrize a package over some
modules, which can be instantiated later arbitrarily by a user.  This
means you can write a library to be agnostic over some data
representation, and then instantiate it several times with different
data representations.  Like C++ templates, instantiated packages are
recompiled for each instantiation, which means you do not pay any
runtime cost for parametrizing packages in this way.  Backpack modules
are somewhat experimental; while fully supported by cabal-install, they are currently
`not supported by Stack <https://github.com/commercialhaskell/stack/issues/2540>`__.

A Backpack package is defined by use of the :pkg-field:`library:signatures` field, 
or by (transitive) dependency on
a package that defines some requirements.  To define a parametrized
package, define a signature file (file extension ``hsig``) that
specifies the signature of the module you want to parametrize over, and
add it to your Cabal file in the :pkg-field:`library:signatures` field.

.. code-block:: haskell
    :caption: .hsig

    signature Str where

    data Str

    concat :: [Str] -> Str

.. code-block:: cabal
    :caption: parametrized.cabal

    cabal-version: 2.2
    name: parametrized

    library
      build-depends: base
      signatures: Str
      exposed-modules: MyModule

You can define any number of regular modules (e.g., ``MyModule``) that
import signatures and use them as regular modules.

If you are familiar with ML modules, you might now expect there to be
some way to apply the parametrized package with an implementation of
the ``Str`` module to get a concrete instantiation of the package.
Backpack operates slightly differently with a concept of *mix-in
linking*, where you provide an implementation of ``Str`` simply by
bringing another module into scope with the same name as the
requirement.  For example, if you had a package ``str-impl`` that provided a
module named ``Str``, instantiating ``parametrized`` is as simple as
just depending on both ``str-impl`` and ``parametrized``:

.. code-block:: cabal
    :caption: combined.cabal

    cabal-version: 2.2
    name: combined

    library
      build-depends: base, str-impl, parametrized

Note that due to technical limitations, you cannot directly define
``Str`` in the ``combined`` library; it must be placed in its own
library (you can use :ref:`Sublibraries <sublibs>` to conveniently
define a sub-library).

However, a more common situation is that your names don't match up
exactly.  The :pkg-field:`library:mixins` field can be used to rename
signatures and modules to line up names as necessary.  If you have
a requirement ``Str`` and an implementation ``Data.Text``, you can
line up the names in one of two ways:

* Rename the requirement to match the implementation:
  ``mixins: parametrized requires (Str as Data.Text)``
* Rename the implementation to match the requirement:
  ``mixins: text (Data.Text as Str)``

The :pkg-field:`library:mixins` field can also be used to disambiguate
between multiple instantiations of the same package; for each
instantiation of the package, give it a separate entry in mixins with
the requirements and provided modules renamed to be distinct.

.. code-block:: cabal
    :caption: .cabal

    cabal-version: 2.2
    name: double-combined

    library
      build-depends: base, text, bytestring, parametrized
      mixins:
        parametrized (MyModule as MyModule.Text) requires (Str as Data.Text),
        parametrized (MyModule as MyModule.BS) requires (Str as Data.ByteString)

Intensive use of Backpack sometimes involves creating lots of small
parametrized libraries; :ref:`Sublibraries <sublibs>` can be used
to define all of these libraries in a single package without having to
create many separate Cabal packages.  You may also find it useful to use
:pkg-field:`library:reexported-modules` to reexport instantiated
libraries to Backpack-unware users (e.g., Backpack can be used entirely
as an implementation detail.)

Backpack imposes a limitation on Template Haskell that goes beyond the usual TH
stage restriction: it's not possible to splice TH code imported from a
compilation unit that is still "indefinite", that is, a unit for which some
module signatures still haven't been matched with implementations. The reason
is that indefinite units are typechecked, but not compiled, so there's no
actual TH code to run while splicing. Splicing TH code from a definite
compilation unit into an indefinite one works normally.

For more information about Backpack, check out the 
`GHC wiki page <https://gitlab.haskell.org/ghc/ghc/-/wikis/backpack>`__.



===================================================
/. 🚀 ./how-to-report-bugs.rst
===================================================

How to report Cabal bugs and feature requests
=============================================

Please report any flaws or feature requests in the 
`bug tracker <https://github.com/haskell/cabal/issues>`__.

For general discussion or queries email the libraries mailing list
libraries@haskell.org. There is also a development mailing list
cabal-devel@haskell.org.


===================================================
/. 🚀 ./cabal-package-description-file.rst
===================================================

Package Description — <package>.cabal File
==========================================

The package description file, commonly known as "the Cabal file", describes the
contents of a package. The Cabal package is the unit of distribution. When
installed, its purpose is to make available one or more:

-  Haskell programs (executables); and/or

-  libraries, exposing a number of Haskell modules.

Public library components can be depended upon by other Cabal packages and all
library components (both public and private) can be depended upon by other
components of the same package.

Internally, the package may consist of much more than a bunch of Haskell
modules: it may also have C source code and header files, source code
meant for preprocessing, documentation, test cases, auxiliary tools etc.

A package is identified by a globally-unique *package name*, which
consists of one or more alphanumeric words separated by hyphens. To
avoid ambiguity, each of these words should contain at least one letter.
Chaos will result if two distinct packages with the same name are
installed on the same system. A particular version of the package is
distinguished by a *version number*, consisting of a sequence of one or
more integers separated by dots. These can be combined to form a single
text string called the *package ID*, using a hyphen to separate the name
from the version, e.g. "``HUnit-1.1``".

.. Note::

   Packages are not part of the Haskell language; they simply
   populate the hierarchical space of module names. In GHC 6.6 and later a
   program may contain multiple modules with the same name if they come
   from separate packages; in all other current Haskell systems packages
   may not overlap in the modules they provide, including hidden modules.

Creating a package
------------------

Suppose you have a directory hierarchy containing the source files that
make up your package. You will need to add two more files to the root
directory of the package:

:file:`{package-name}.cabal`
    a Unicode UTF-8 text file containing a package description. For
    details of the syntax of this file, see the section on
    `package descriptions`_.

:file:`Setup.hs`
    a single-module Haskell program to perform various setup tasks (with
    the interface described in the section on :ref:`setup-commands`).
    This module should import only modules that will be present in all Haskell
    implementations, including modules of the Cabal library. The content of
    this file is determined by the :pkg-field:`build-type` setting in the
    ``.cabal`` file. In most cases it will be trivial, calling on the Cabal
    library to do most of the work.

Once you have these, you can create a source bundle of this directory
for distribution. Building of the package is demonstrated in the section
:ref:`building-packages`.

One of the purposes of Cabal is to make it easier to build a package
with different Haskell implementations. So it provides abstractions of
features present in different Haskell implementations and wherever
possible it is best to take advantage of these to increase portability.
Where necessary however it is possible to use specific features of
specific implementations. For example one of the pieces of information a
package author can put in the package's ``.cabal`` file is what language
extensions the code uses. This is far preferable to specifying flags for
a specific compiler as it allows Cabal to pick the right flags for the
Haskell implementation that the user picks. It also allows Cabal to
figure out if the language extension is even supported by the Haskell
implementation that the user picks. Where compiler-specific options are
needed however, there is an "escape hatch" available. The developer can
specify implementation-specific options and more generally there is a
configuration mechanism to customise many aspects of how a package is
built depending on the Haskell implementation, the Operating system,
computer architecture and user-specified configuration flags.

::

    name:     Foo
    version:  1.0

    library
      default-language: Haskell2010
      build-depends:    base >= 4 && < 5
      exposed-modules:  Foo
      extensions:       ForeignFunctionInterface
      ghc-options:      -Wall
      if os(windows)
        build-depends: Win32 >= 2.1 && < 2.6

Example: A package containing a simple library
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The HUnit package contains a file ``HUnit.cabal`` containing:

::

    cabal-version:  3.0
    name:           HUnit
    version:        1.1.1
    synopsis:       A unit testing framework for Haskell
    homepage:       http://hunit.sourceforge.net/
    category:       Testing
    author:         Dean Herington
    license:        BSD-3-Clause
    license-file:   LICENSE
    build-type:     Simple

    library
      build-depends:      base >= 2 && < 4
      exposed-modules:    Test.HUnit.Base, Test.HUnit.Lang,
                          Test.HUnit.Terminal, Test.HUnit.Text, Test.HUnit
      default-extensions: CPP
      default-language:   Haskell2010

and the following ``Setup.hs``: 

.. code-block:: haskell

    import Distribution.Simple
    main = defaultMain

Example: A package containing executable programs
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

::

    cabal-version:  3.0
    name:           TestPackage
    version:        0.0
    synopsis:       Small package with two programs
    author:         Angela Author
    license:        BSD-3-Clause
    build-type:     Simple

    executable program1
      build-depends:    HUnit >= 1.1.1 && < 1.2
      main-is:          main.hs
      hs-source-dirs:   prog1
      default-language: Haskell2010

    executable program2
      -- A different main.hs because of hs-source-dirs.
      main-is:          main.hs
      build-depends:    HUnit >= 1.1.1 && < 1.2
      hs-source-dirs:   prog2
      other-modules:    Utils
      default-language: Haskell2010

with ``Setup.hs`` the same as above.

Example: A package containing a library and executable programs
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

::

    cabal-version:   3.0
    name:            TestPackage
    version:         0.0
    synopsis:        Package with library and two programs
    license:         BSD-3-Clause
    author:          Angela Author
    build-type:      Simple

    library
      build-depends:    HUnit >= 1.1.1 && < 1.2
      hs-source-dirs:   lib
      exposed-modules:  A, B, C
      default-language: Haskell2010

    executable program1
      main-is:          main.hs
      hs-source-dirs:   prog1
      other-modules:    D, E
      default-language: Haskell2010

    executable program2
      -- A different main.hs because of hs-source-dirs.
      main-is:          main.hs
      -- No bound on a library provided by the same package.
      build-depends:    TestPackage
      hs-source-dirs:   prog2
      other-modules:    Utils
      default-language: Haskell2010

with ``Setup.hs`` the same as above. Note that any library modules
required (directly or indirectly) by an executable must be listed again.

The trivial setup script used in these examples uses the *simple build
infrastructure* provided by the Cabal library (see
`Distribution.Simple <https://hackage.haskell.org/package/Cabal/docs/Distribution-Simple.html>`__).
The simplicity lies in its interface rather that its implementation. It
automatically handles preprocessing with standard preprocessors, and
builds packages for all the Haskell implementations.

The simple build infrastructure can also handle packages where building
is governed by system-dependent parameters, if you specify a little more
(see the section on `system-dependent parameters`_).
A few packages require `more elaborate solutions <#more-complex-packages>`_.

.. _pkg-desc:

Package descriptions
--------------------

The package description file must have a name ending in "``.cabal``". It
must be a Unicode text file encoded using valid UTF-8. There must be
exactly one such file in the directory. The first part of the name is
usually the package name, and some of the tools that operate on Cabal
packages require this; specifically, Hackage rejects packages which
don't follow this rule.

In the package description file, lines whose first non-whitespace
characters are "``--``" are treated as comments and ignored.

This file should contain a number global property descriptions and
several sections.

-  The `package properties`_ describe the package
   as a whole, such as name, license, author, etc.

-  Optionally, a number of *configuration flags* can be declared. These
   can be used to enable or disable certain features of a package. (see
   the section on `configurations`_).

-  The (optional) library section specifies the `library`_ properties and
   relevant `build information`_.

-  Following is an arbitrary number of executable sections which describe
   an executable program and relevant `build information`_.

Each section consists of a number of property descriptions in the form
of field/value pairs, with a syntax roughly like mail message headers.

-  Case is not significant in field names, but is significant in field
   values.

-  To continue a field value, indent the next line relative to the field
   name.

-  Field names may be indented, but all field values in the same section
   must use the same indentation.

-  Tabs are *not* allowed as indentation characters due to a missing
   standard interpretation of tab width.

-  Before Cabal 3.0, to get a blank line in a field value, use an indented "``.``"

The syntax of the value depends on the field. Field types include:

*token*, *filename*, *directory*
    Either a sequence of one or more non-space non-comma characters, or
    a quoted string in Haskell 98 lexical syntax. The latter can be used
    for escaping whitespace, for example:
    ``ghc-options: -Wall "-with-rtsopts=-T -I1"``. Unless otherwise
    stated, relative filenames and directories are interpreted from the
    package root directory.
*freeform*, *URL*, *address*
    An arbitrary, uninterpreted string.
*identifier*
    A letter followed by zero or more alphanumerics or underscores.
*compiler*
    A compiler flavor (one of: ``GHC``, ``UHC`` or ``LHC``)
    followed by a version range. For example, ``GHC ==6.10.3``, or
    ``LHC >=0.6 && <0.8``.

Modules and preprocessors
^^^^^^^^^^^^^^^^^^^^^^^^^

Haskell module names listed in the :pkg-field:`library:exposed-modules` and
:pkg-field:`library:other-modules` fields may correspond to Haskell source
files, i.e. with names ending in "``.hs``" or "``.lhs``", or to inputs for
various Haskell preprocessors. The simple build infrastructure understands the
extensions:

-  ``.gc`` (:hackage-pkg:`greencard`)
-  ``.chs`` (:hackage-pkg:`c2hs`)
-  ``.hsc`` (:hackage-pkg:`hsc2hs`)
-  ``.y`` and ``.ly`` (happy_)
-  ``.x`` (alex_)
-  ``.cpphs`` (cpphs_)

When building, Cabal will automatically run the appropriate preprocessor
and compile the Haskell module it produces. For the ``c2hs`` and
``hsc2hs`` preprocessors, Cabal will also automatically add, compile and
link any C sources generated by the preprocessor (produced by
``hsc2hs``'s ``#def`` feature or ``c2hs``'s auto-generated wrapper
functions). Dependencies on pre-processors are specified via the
:pkg-field:`build-tools` or :pkg-field:`build-tool-depends` fields.

Some fields take lists of values, which are optionally separated by
commas, except for the :pkg-field:`build-depends` field, where the commas are
mandatory.

Some fields are marked as required. All others are optional, and unless
otherwise specified have empty default values.

Package properties
^^^^^^^^^^^^^^^^^^

These fields may occur in the first top-level properties section and
describe the package as a whole:

.. pkg-field:: name: package-name (required)

    The unique name of the package, without the version number.

    As pointed out in the section on `package descriptions`_, some
    tools require the package-name specified for this field to match
    the package description's file-name :file:`{package-name}.cabal`.

    Package names are case-sensitive and must match the regular expression
    (i.e. alphanumeric "words" separated by dashes; each alphanumeric
    word must contain at least one letter):
    ``[[:digit:]]*[[:alpha:]][[:alnum:]]*(-[[:digit:]]*[[:alpha:]][[:alnum:]]*)*``.

    Or, expressed in ABNF_:

    .. code-block:: abnf

        package-name      = package-name-part *("-" package-name-part)
        package-name-part = *DIGIT UALPHA *UALNUM

        UALNUM = UALPHA / DIGIT
        UALPHA = ... ; set of alphabetic Unicode code-points

    .. note::

        Hackage restricts package names to the ASCII subset.

.. pkg-field:: version: numbers (required)

    The package version number, usually consisting of a sequence of
    natural numbers separated by dots, i.e. as the regular
    expression ``[0-9]+([.][0-9]+)*`` or expressed in ABNF_:

    .. code-block:: abnf

        package-version = 1*DIGIT *("." 1*DIGIT)

.. pkg-field:: cabal-version: x.y[.z]

    The version of the Cabal specification that this package
    description uses. The Cabal specification does slowly evolve (see
    also :ref:`spec-history`), introducing new features and
    occasionally changing the meaning of existing features.
    Specifying which version of the specification you are using
    enables programs which process the package description to know
    what syntax to expect and what each part means.

    The version number you specify will affect both compatibility and
    behaviour. Most tools (including the Cabal library and the ``cabal``
    program) understand a range of versions of the Cabal specification.
    Older tools will of course only work with older versions of the
    Cabal specification that was known at the time. Most of the time,
    tools that are too old will recognise this fact and produce a
    suitable error message. Likewise, ``cabal check`` will tell you
    whether the version number is sufficiently high for the features
    you use in the package description.

    As for behaviour, new versions of the Cabal specification can change the
    meaning of existing syntax. This means if you want to take advantage
    of the new meaning or behaviour then you must specify the newer
    Cabal version. Tools are expected to use the meaning and behaviour
    appropriate to the version given in the package description.

    In particular, the syntax of package descriptions changed
    significantly with Cabal version 1.2 and the :pkg-field:`cabal-version`
    field is now required. Files written in the old syntax are still
    recognized, so if you require compatibility with very old Cabal
    versions then you may write your package description file using the
    old syntax. Please consult the user's guide of an older Cabal
    version for a description of that syntax.

    Starting with ``cabal-version: 2.2`` this field is only valid if
    fully contained in the very first line of a package description
    and ought to adhere to the ABNF_ grammar

    .. code-block:: abnf

        newstyle-spec-version-decl = "cabal-version" *WS ":" *WS newstyle-spec-version *WS

        newstyle-spec-version      = NUM "." NUM [ "." NUM ]

        NUM    = DIGIT0 / DIGITP 1*DIGIT0
        DIGIT0 = %x30-39
        DIGITP = %x31-39
        WS     = %20


    .. note::

        For package descriptions using a format prior to
        ``cabal-version: 1.12`` the legacy syntax resembling a version
        range syntax

        .. code-block:: cabal

            cabal-version: >= 1.10

        needs to be used.

        This legacy syntax is supported up until ``cabal-version: >=
        2.0`` it is however strongly recommended to avoid using the
        legacy syntax. See also :issue:`4899`.



.. pkg-field:: build-type: identifier

    :default: ``Custom`` or ``Simple``

    The type of build used by this package. Build types are the
    constructors of the
    `BuildType <https://hackage.haskell.org/package/Cabal-syntax/docs/Distribution-Types-BuildType.html#t:BuildType>`__
    type. This field is optional and when missing, its default value
    is inferred according to the following rules:

     - When :pkg-field:`cabal-version` is set to ``2.2`` or higher,
       the default is ``Simple`` unless a :pkg-section:`custom-setup`
       exists, in which case the inferred default is ``Custom``.

     - For lower :pkg-field:`cabal-version` values, the default is
       ``Custom`` unconditionally.

    If the build type is anything other than ``Custom``, then the
    ``Setup.hs`` file *must* be exactly the standardized content
    discussed below. This is because in these cases, ``cabal`` will
    ignore the ``Setup.hs`` file completely, whereas other methods of
    package management, such as ``runhaskell Setup.hs [CMD]``, still
    rely on the ``Setup.hs`` file.

    For build type ``Simple``, the contents of ``Setup.hs`` must be:

    .. code-block:: haskell

        import Distribution.Simple
        main = defaultMain

    For build type ``Configure`` (see the section on `system-dependent
    parameters`_ below), the contents of
    ``Setup.hs`` must be:

    .. code-block:: haskell

        import Distribution.Simple
        main = defaultMainWithHooks autoconfUserHooks

    For build type ``Make`` (see the section on `more complex packages`_ below),
    the contents of ``Setup.hs`` must be:

    .. code-block:: haskell

        import Distribution.Make
        main = defaultMain

    For build type ``Custom``, the file ``Setup.hs`` can be customized,
    and will be used both by ``cabal`` and other tools.

    For most packages, the build type ``Simple`` is sufficient.

.. pkg-field:: license: SPDX expression

    :default: ``NONE``

    The type of license under which this package is distributed.

    Starting with ``cabal-version: 2.2`` the ``license`` field takes a
    (case-sensitive) SPDX expression such as

    .. code-block:: cabal

        license: Apache-2.0 AND (MIT OR GPL-2.0-or-later)

    See `SPDX IDs: How to use <https://spdx.org/ids-how>`__ for more
    examples of SPDX expressions.

    The version of the
    `list of SPDX license identifiers <https://spdx.org/licenses/>`__
    is a function of the :pkg-field:`cabal-version` value as defined
    in the following table:

    +--------------------------+--------------------+
    | Cabal specification      | SPDX license list  |
    | version                  | version            |
    |                          |                    |
    +==========================+====================+
    | ``cabal-version: 2.2``   | ``3.0 2017-12-28`` |
    +--------------------------+--------------------+
    | ``cabal-version: 2.4``   | ``3.2 2018-07-10`` |
    +--------------------------+--------------------+

    **Pre-SPDX Legacy Identifiers**

    The license identifier in the table below are defined for
    ``cabal-version: 2.0`` and previous versions of the Cabal
    specification.

    +--------------------------+-----------------+
    | :pkg-field:`license`     | Note            |
    | identifier               |                 |
    |                          |                 |
    +==========================+=================+
    | ``GPL``                  |                 |
    | ``GPL-2``                |                 |
    | ``GPL-3``                |                 |
    +--------------------------+-----------------+
    | ``LGPL``                 |                 |
    | ``LGPL-2.1``             |                 |
    | ``LGPL-3``               |                 |
    +--------------------------+-----------------+
    | ``AGPL``                 | since 1.18      |
    | ``AGPL-3``               |                 |
    +--------------------------+-----------------+
    | ``BSD2``                 | since 1.20      |
    +--------------------------+-----------------+
    | ``BSD3``                 |                 |
    +--------------------------+-----------------+
    | ``MIT``                  |                 |
    +--------------------------+-----------------+
    | ``ISC``                  | since 1.22      |
    +--------------------------+-----------------+
    | ``MPL-2.0``              | since 1.20      |
    +--------------------------+-----------------+
    | ``Apache``               |                 |
    | ``Apache-2.0``           |                 |
    +--------------------------+-----------------+
    | ``PublicDomain``         |                 |
    +--------------------------+-----------------+
    | ``AllRightsReserved``    |                 |
    +--------------------------+-----------------+
    | ``OtherLicense``         |                 |
    +--------------------------+-----------------+


.. pkg-field:: license-file: filename

    See :pkg-field:`license-files`.

.. pkg-field:: license-files: filename list
    :since: 1.20

    The name of a file(s) containing the precise copyright license for
    this package. The license file(s) will be installed with the
    package.

    If you have multiple license files then use the :pkg-field:`license-files`
    field instead of (or in addition to) the :pkg-field:`license-file` field.

.. pkg-field:: copyright: freeform

    The content of a copyright notice, typically the name of the holder
    of the copyright on the package and the year(s) from which copyright
    is claimed. For example::

      copyright: (c) 2006-2007 Joe Bloggs

.. pkg-field:: author: freeform

    The original author of the package.

    Remember that ``.cabal`` files are Unicode, using the UTF-8
    encoding.

.. pkg-field:: maintainer: address

    The current maintainer or maintainers of the package. This is an
    e-mail address to which users should send bug reports, feature
    requests and patches.

.. pkg-field:: stability: freeform

    The stability level of the package, e.g. ``alpha``,
    ``experimental``, ``provisional``, ``stable``.

.. pkg-field:: homepage: URL

    The package homepage.

.. pkg-field:: bug-reports: URL

    The URL where users should direct bug reports. This would normally
    be either:

    -  A ``mailto:`` URL, e.g. for a person or a mailing list.

    -  An ``http:`` (or ``https:``) URL for an online bug tracking
       system.

    For example Cabal itself uses a web-based bug tracking system

    ::

        bug-reports: https://github.com/haskell/cabal/issues

.. pkg-field:: package-url: URL

    The location of a source bundle for the package. The distribution
    should be a Cabal package.

.. pkg-field:: synopsis: freeform

    A very short description of the package, for use in a table of
    packages. This is your headline, so keep it short (one line) but as
    informative as possible. Save space by not including the package
    name or saying it's written in Haskell.

.. pkg-field:: description: freeform

    Description of the package. This may be several paragraphs, and
    should be aimed at a Haskell programmer who has never heard of your
    package before.

    For library packages, this field is used as prologue text by
    :ref:`setup-haddock` and thus may contain the same markup as Haddock_
    documentation comments.

.. pkg-field:: category: freeform

    A classification category for future use by the package catalogue
    Hackage_. These categories have not
    yet been specified, but the upper levels of the module hierarchy
    make a good start.

.. pkg-field:: tested-with: compiler list

    A list of compilers and versions against which the package has been
    tested (or at least built). The value of this field is not used by Cabal
    and is rather intended as extra metadata for use by third party
    tooling, such as e.g. CI tooling.

    Here's a typical usage example:

    ::

        tested-with: GHC == 9.0.1, GHC == 8.10.4, GHC == 8.8.4,
                     GHC == 8.6.5, GHC == 8.4.4, GHC == 8.2.2, GHC == 8.0.2,
                     GHC == 7.10.3, GHC == 7.8.4, GHC == 7.6.3, GHC == 7.4.2

    The same can be spread over several lines, for instance:

    ::

        tested-with: GHC == 9.0.1
                   , GHC == 8.10.4
                   , GHC == 8.8.4
                   , GHC == 8.6.5
                   , GHC == 8.4.4
                   , GHC == 8.2.2
                   , GHC == 8.0.2
                   , GHC == 7.10.3
                   , GHC == 7.8.4
                   , GHC == 7.6.3
                   , GHC == 7.4.2

    The separating comma can also be dropped altogether:

    ::

        tested-with:
          GHC == 9.0.1
          GHC == 8.10.4
          GHC == 8.8.4
          GHC == 8.6.5
          GHC == 8.4.4
          GHC == 8.2.2
          GHC == 8.0.2
          GHC == 7.10.3
          GHC == 7.8.4
          GHC == 7.6.3
          GHC == 7.4.2

    However, this alternative might
    `disappear <https://github.com/haskell/cabal/issues/4894#issuecomment-909008657>`__
    in the future.

    Starting with :pkg-field:`cabal-version` 3.0,
    there are further conveniences.

    1. A preceding ``,`` is allowed, so a bullet-list style
       is possible (recommended):

        ::

            tested-with:
              , GHC == 9.0.1
              , GHC == 8.10.4
              , GHC == 8.8.4
              , GHC == 8.6.5
              , GHC == 8.4.4
              , GHC == 8.2.2
              , GHC == 8.0.2
              , GHC == 7.10.3
              , GHC == 7.8.4
              , GHC == 7.6.3
              , GHC == 7.4.2


    2. A concise set notation syntax is available:

       ::

           tested-with: GHC == { 9.0.1, 8.10.4, 8.8.4, 8.6.5, 8.4.4, 8.2.2, 8.0.2, 7.10.3, 7.8.4, 7.6.3, 7.4.2 }

.. pkg-field:: data-files: filename list

    A list of files to be installed for run-time use by the package.
    This is useful for packages that use a large amount of static data,
    such as tables of values or code templates. Cabal provides a way to
    `find these files at run-time <#accessing-data-files-from-package-code>`_.

    A limited form of ``*`` wildcards in file names, for example
    ``data-files: images/*.png`` matches all the ``.png`` files in the
    ``images`` directory. ``data-files: audio/**/*.mp3`` matches all
    the ``.mp3`` files in the ``audio`` directory, including
    subdirectories.

    The specific limitations of this wildcard syntax are

    - ``*`` wildcards are only allowed in place of the file name, not
      in the directory name or file extension. It must replace the
      whole file name (e.g., ``*.html`` is allowed, but
      ``chapter-*.html`` is not). If a wildcard is used, it must be
      used with an extension, so ``data-files: data/*`` is not
      allowed.

    - Prior to Cabal 2.4, when matching a wildcard plus extension, a
      file's full extension must match exactly, so ``*.gz`` matches
      ``foo.gz`` but not ``foo.tar.gz``. This restriction has been
      lifted when ``cabal-version: 2.4`` or greater so that ``*.gz``
      does match ``foo.tar.gz``

    - ``*`` wildcards will not match if the file name is empty (e.g.,
      ``*.html`` will not match ``foo/.html``).

    - ``**`` wildcards can only appear as the final path component
      before the file name (e.g., ``data/**/images/*.jpg`` is not
      allowed).

    - Prior to Cabal 3.8, if a ``**`` wildcard is used, then
      the file name must include a ``*`` wildcard (e.g.,
      ``data/**/README.rst`` was not allowed). As of ``cabal-version:
      3.8`` or greater, this restriction is lifted.

    - A wildcard that does not match any files is an error.

    The reason for providing only a very limited form of wildcard is to
    concisely express the common case of a large number of related files
    of the same file type without making it too easy to accidentally
    include unwanted files.

    On efficiency: if you use ``**`` patterns, the directory tree will
    be walked starting with the parent directory of the ``**``. If
    that's the root of the project, this might include ``.git/``,
    ``dist-newstyle/``, or other large directories! To avoid this
    behaviour, put the files that wildcards will match against in
    their own folder.

    ``**`` wildcards are available starting in Cabal 2.4
    and `bug-free since Cabal 3.0 <https://github.com/haskell/cabal/issues/6125#issuecomment-1379878419>`_.

.. pkg-field:: data-dir: directory

    The directory where Cabal looks for data files to install, relative
    to the source directory. By default, Cabal will look in the source
    directory itself.

.. pkg-field:: extra-source-files: filename list

    A list of additional files to be included in source distributions built with :ref:`setup-sdist`.
    As with :pkg-field:`data-files` it can use a limited form of ``*`` wildcards in file names.
    Files listed here are tracked by ``cabal build``; changes in these files cause (partial) rebuilds.

.. pkg-field:: extra-doc-files: filename list
    :since: 1.18

    A list of additional files to be included in source distributions,
    and also copied to the html directory when Haddock documentation is
    generated. As with :pkg-field:`data-files` it can use a limited form of
    ``*`` wildcards in file names.

.. pkg-field:: extra-tmp-files: filename list

    A list of additional files or directories to be removed by
    :ref:`setup-clean`. These  would typically be additional files created by
    additional hooks, such as the scheme described in the section on
    `system-dependent parameters`_.

Library
^^^^^^^

.. pkg-section:: library name
    :synopsis: Library build information.

    Build information for libraries.

    A package can include zero or more library components. A library can be
    unnamed or named (using the ``name`` argument). It can also be depended upon
    only by components in the same package (private) or by those components and
    components in other packages (public). A package can have no more than one
    unnamed library.

    .. Note::

       The 'cabal' executable provided by the 'cabal-install' package will not
       accept dependencies on sublibraries of packages with no unnamed library.

    This guide refers to an unnamed library as the main library and a named
    library as a sublibrary (such components may be considered as subidiary, or
    ancillary, to the main library). It refers to a private sublibrary as an
    internal library.

    A sublibrary cannot have the same name as its package.

    .. Note::

       Before version 3.4 of the Cabal specification, a private sublibrary could
       shadow a dependency on the main library of another package, if their
       names clashed.

    A main library is always public and a sublibrary is private by default.
    See the :pkg-field:`library:visibility` field for setting a sublibrary as
    public.

    Being able to include more than one public library in a package allows the
    separation of the unit of distribution (the package) from the unit of
    buildable code (the library). This is useful for Haskell projects with many
    libraries that are distributed together as it avoids duplication and
    potential inconsistencies.

    .. Note::

       Before version 3.0 of the Cabal specification, all sublibraries were
       internal libraries. Before version 2.0, a package could not include
       sublibraries.

    See :ref:`Sublibraries - Examples <sublibs>` for examples.

A library section should contain the following fields: 

.. pkg-field:: visibility: visibility specifiers

    :since: 3.0

    :default:
        ``private`` for sublibraries. Cannot be set for the main library, which
        is always public.

    Can be set to ``private`` or ``public``. A ``private`` library component can
    only be depended on by other components of the same package. A ``public``
    component can be depended on by those components and by components of other
    packages.

    See the :pkg-field:`build-depends` field for the syntax to specify a
    dependency on a library component.

.. pkg-field:: exposed-modules: identifier list

    :required: if this package contains a library

    A list of modules added by this package.

.. pkg-field:: virtual-modules: identifier list
    :since: 2.2

    A list of virtual modules provided by this package.  Virtual modules
    are modules without a source file.  See for example the ``GHC.Prim``
    module from the ``ghc-prim`` package.  Modules listed here will not be
    built, but still end up in the list of ``exposed-modules`` in the
    installed package info when the package is registered in the package
    database.

.. pkg-field:: exposed: boolean

    :default: ``True``

    Some Haskell compilers (notably GHC) support the notion of packages
    being "exposed" or "hidden" which means the modules they provide can
    be easily imported without always having to specify which package
    they come from. However this only works effectively if the modules
    provided by all exposed packages do not overlap (otherwise a module
    import would be ambiguous).

    Almost all new libraries use hierarchical module names that do not
    clash, so it is very uncommon to have to use this field. However it
    may be necessary to set ``exposed: False`` for some old libraries
    that use a flat module namespace or where it is known that the
    exposed modules would clash with other common modules.

.. pkg-field:: reexported-modules: exportlist
    :since: 1.22

    Supported only in GHC 7.10 and later. A list of modules to
    *reexport* from this package. The syntax of this field is
    ``orig-pkg:Name as NewName`` to reexport module ``Name`` from
    ``orig-pkg`` with the new name ``NewName``. We also support
    abbreviated versions of the syntax: if you omit ``as NewName``,
    we'll reexport without renaming; if you omit ``orig-pkg``, then we
    will automatically figure out which package to reexport from, if
    it's unambiguous.

    Reexported modules are useful for compatibility shims when a package
    has been split into multiple packages, and they have the useful
    property that if a package provides a module, and another package
    reexports it under the same name, these are not considered a
    conflict (as would be the case with a stub module.) They can also be
    used to resolve name conflicts.

.. pkg-field:: signatures: signature list
    :since: 2.0

    Supported only in GHC 8.2 and later. A list of `module signatures <https://downloads.haskell.org/~ghc/master/users-guide/separate_compilation.html#module-signatures>`__ required by this package.

    Module signatures are part of the :ref:`Backpack` extension to
    the Haskell module system.

    Packages that do not export any modules and only export required signatures
    are called "signature-only packages", and their signatures are subjected to
    `signature thinning
    <https://wiki.haskell.org/Module_signature#How_to_use_a_signature_package>`__.



The library section may also contain build information fields (see the
section on `build information`_).

.. _sublibs:

**Sublibraries - Examples**

An example of the use of a private sublibrary (an internal library) is a test
suite that needs access to some internal modules in the package's main library,
which you do not otherwise want to expose. You could put those modules in an
internal library, which the main library and the test suite
:pkg-field:`build-depends` upon. Your Cabal file might then look something like
this:

::

    cabal-version:  3.4
    name:           foo
    version:        0.1.0.0
    license:        BSD-3-Clause
    license-file:   LICENSE
    build-type:     Simple

    library foo-internal
        exposed-modules:  Foo.Internal
        -- NOTE: no explicit constraints on base needed
        --       as they're inherited from the 'library' stanza
        build-depends:    base
        default-language: Haskell2010

    library
        exposed-modules:  Foo.Public
        build-depends:    foo:foo-internal, base >= 4.3 && < 5
        default-language: Haskell2010

    test-suite test-foo
        type:             exitcode-stdio-1.0
        main-is:          test-foo.hs
        -- NOTE: no constraints on 'foo-internal' as same-package
        --       dependencies implicitly refer to the same package instance
        build-depends:    foo:foo-internal, base
        default-language: Haskell2010

Another example of the use of internal libraries is a package that includes one
or more executables but does not include a public library.

Internal libraries can be used to incorporate (vendor or bundle) an external
dependency into a package, effectively simulating *private dependencies*. Below
is an example:

::

    cabal-version: 3.4
    name: haddock-library
    version: 1.6.0
    license: BSD-3-Clause

    library
      build-depends:
        , base         ^>= 4.11.1.0
        , bytestring   ^>= 0.10.2.0
        , containers   ^>= 0.4.2.1 || ^>= 0.5.0.0
        , transformers ^>= 0.5.0.0

      hs-source-dirs:       src

      -- internal sub-lib
      build-depends:        haddock-library:attoparsec

      exposed-modules:
        Documentation.Haddock

      default-language: Haskell2010

    library attoparsec
      build-depends:
        , base         ^>= 4.11.1.0
        , bytestring   ^>= 0.10.2.0
        , deepseq      ^>= 1.4.0.0

      hs-source-dirs:       vendor/attoparsec-0.13.1.0

      -- NB: haddock-library needs only small part of lib:attoparsec
      --     internally, so we only bundle that subset here
      exposed-modules:
        Data.Attoparsec.ByteString
        Data.Attoparsec.Combinator

      other-modules:
        Data.Attoparsec.Internal

      ghc-options: -funbox-strict-fields -Wall -fwarn-tabs -O2

      default-language: Haskell2010

Executables
^^^^^^^^^^^

A package description can contain multiple executable sections.
The documentation of the `cabal run <cabal-commands.html#cabal-run>`__ command
contains detailed information on how to run an executable.

.. pkg-section:: executable name
    :synopsis: Executable build info section.

    Executable sections (if present) describe executable programs contained
    in the package and must have an argument after the section label, which
    defines the name of the executable. This is a freeform argument but may
    not contain spaces.

The executable may be described using the following fields, as well as
build information fields (see the section on `build information`_).

.. pkg-field:: main-is: filename (required)

    The name of the ``.hs`` or ``.lhs`` file containing the ``Main``
    module. Note that it is the ``.hs`` filename that must be listed,
    even if that file is generated using a preprocessor. The source file
    must be relative to one of the directories listed in
    :pkg-field:`hs-source-dirs`. Further, while the name of the file may
    vary, the module itself must be named ``Main``.

    Starting with ``cabal-version: 1.18`` this field supports
    specifying a C, C++, or objC source file as the main entry point.

.. pkg-field:: scope: token
    :since: 2.0

    Whether the executable is ``public`` (default) or ``private``, i.e. meant to
    be run by other programs rather than the user. Private executables are
    installed into `$libexecdir/$libexecsubdir`.


Test suites
^^^^^^^^^^^

A package description can contain multiple test suite sections.
The documentation of the `cabal test <cabal-commands.html#cabal-test>`__ command
contains detailed information on how to run test suites.

.. pkg-section:: test-suite name
    :synopsis: Test suite build information.

    Test suite sections (if present) describe package test suites and must
    have an argument after the section label, which defines the name of the
    test suite. This is a freeform argument, but may not contain spaces. It
    should be unique among the names of the package's other test suites, the
    package's executables, and the package itself. Using test suite sections
    requires at least Cabal version 1.9.2.

The test suite may be described using the following fields, as well as
build information fields (see the section on `build information`_).

.. pkg-field:: type: interface (required until ``cabal-version`` 3.8)

    The interface type and version of the test suite. Cabal supports two
    test suite interfaces, called ``exitcode-stdio-1.0`` (default since ``cabal-version`` 3.8) and
    ``detailed-0.9``. Each of these types may require or disallow other
    fields as described below.

Test suites using the ``exitcode-stdio-1.0`` (default since ``cabal-version`` 3.8) interface are executables
that indicate test failure with a non-zero exit code when run; they may
provide human-readable log information through the standard output and
error channels. The ``exitcode-stdio-1.0`` type requires the ``main-is``
field.

.. pkg-field:: main-is: filename
    :synopsis: Module containing tests main function.

    :required: ``exitcode-stdio-1.0``
    :disallowed: ``detailed-0.9``

    The name of the ``.hs`` or ``.lhs`` file containing the ``Main``
    module. Note that it is the ``.hs`` filename that must be listed,
    even if that file is generated using a preprocessor. The source file
    must be relative to one of the directories listed in
    :pkg-field:`hs-source-dirs`. This field is analogous to the ``main-is`` field
    of an executable section.

Test suites using the ``detailed-0.9`` interface are modules exporting
the symbol ``tests :: IO [Test]``. The ``Test`` type is exported by the
module ``Distribution.TestSuite`` provided by Cabal. For more details,
see the example below.

The ``detailed-0.9`` interface allows Cabal and other test agents to
inspect a test suite's results case by case, producing detailed human-
and machine-readable log files. The ``detailed-0.9`` interface requires
the :pkg-field:`test-module` field.

.. pkg-field:: test-module: identifier

    :required: ``detailed-0.9``
    :disallowed: ``exitcode-stdio-1.0``

    The module exporting the ``tests`` symbol.

.. pkg-field:: code-generators

    An optional list of preprocessors which can generate new modules
    for use in the test-suite.

 A list of executabes (possibly brought into scope by
 :pkg-field:`build-tool-depends`) that are run after all other
 preprocessors. These executables are invoked as so: ``exe-name
 TARGETDIR [SOURCEDIRS] -- [GHCOPTIONS]``. The arguments are, in order a target dir for
 output, a sequence of all source directories with source files of
 local lib components that the given test stanza depends on, and
 following a double dash, all options cabal would pass to ghc for a
 build. They are expected to output a newline-seperated list of
 generated modules which have been written to the targetdir
 (excepting, if written, the main module). This can
 be used for driving doctests and other discover-style tests generated
 from source code.


Example: Package using ``exitcode-stdio-1.0`` interface
"""""""""""""""""""""""""""""""""""""""""""""""""""""""

The example package description and executable source file below
demonstrate the use of the ``exitcode-stdio-1.0`` interface.

.. code-block:: cabal
    :caption: foo.cabal

    Cabal-Version:  3.0
    Name:           foo
    Version:        1.0
    License:        BSD-3-Clause
    Build-Type:     Simple

    Test-Suite test-foo
        type:             exitcode-stdio-1.0
        main-is:          test-foo.hs
        build-depends:    base >= 4 && < 5
        default-language: Haskell2010

.. code-block:: haskell
    :caption: test-foo.hs

    module Main where

    import System.Exit (exitFailure)

    main = do
        putStrLn "This test always fails!"
        exitFailure

Example: Package using ``detailed-0.9`` interface
"""""""""""""""""""""""""""""""""""""""""""""""""

The example package description and test module source file below
demonstrate the use of the ``detailed-0.9`` interface. The test module
also develops a simple implementation of the interface set by
``Distribution.TestSuite``, but in actual usage the implementation would
be provided by the library that provides the testing facility.

.. code-block:: cabal
    :caption: bar.cabal

    Cabal-Version:  3.0
    Name:           bar
    Version:        1.0
    License:        BSD-3-Clause
    Build-Type:     Simple

    Test-Suite test-bar
        type:             detailed-0.9
        test-module:      Bar
        build-depends:    base >= 4 && < 5, Cabal >= 1.9.2 && < 2
        default-language: Haskell2010


.. code-block:: haskell
    :caption: Bar.hs

    module Bar ( tests ) where

    import Distribution.TestSuite

    tests :: IO [Test]
    tests = return [ Test succeeds, Test fails ]
      where
        succeeds = TestInstance
            { run = return $ Finished Pass
            , name = "succeeds"
            , tags = []
            , options = []
            , setOption = \_ _ -> Right succeeds
            }
        fails = TestInstance
            { run = return $ Finished $ Fail "Always fails!"
            , name = "fails"
            , tags = []
            , options = []
            , setOption = \_ _ -> Right fails
            }

Benchmarks
^^^^^^^^^^

A package description can contain multiple benchmark sections.
The documentation of the `cabal bench <cabal-commands.html#cabal-bench>`__ command
contains detailed information on how to run benchmarks.

.. pkg-section:: benchmark name
    :since: 1.9.2
    :synopsis: Benchmark build information.

    Benchmark sections (if present) describe benchmarks contained in the
    package and must have an argument after the section label, which defines
    the name of the benchmark. This is a freeform argument, but may not
    contain spaces. It should be unique among the names of the package's
    other benchmarks, the package's test suites, the package's executables,
    and the package itself. Using benchmark sections requires at least Cabal
    version 1.9.2.

The benchmark may be described using the following fields, as well as
build information fields (see the section on `build information`_).

.. pkg-field:: type: interface (required until ``cabal-version`` 3.8)

    The interface type and version of the benchmark. At the moment Cabal
    only support one benchmark interface, called ``exitcode-stdio-1.0``.

Benchmarks using the ``exitcode-stdio-1.0`` (default since ``cabal-version`` 3.8) interface are executables
that indicate failure to run the benchmark with a non-zero exit code
when run; they may provide human-readable information through the
standard output and error channels.

.. pkg-field:: main-is: filename

    The name of the ``.hs`` or ``.lhs`` file containing the ``Main``
    module. Note that it is the ``.hs`` filename that must be listed,
    even if that file is generated using a preprocessor. The source file
    must be relative to one of the directories listed in
    :pkg-field:`hs-source-dirs`. This field is analogous to the ``main-is``
    field of an executable section. Further, while the name of the file may
    vary, the module itself must be named ``Main``.

Example:
"""""""""""""""""""""""""""""""""""""""""""""""""""""""

.. code-block:: cabal
    :caption: foo.cabal
    :name: foo-bench.cabal

    Cabal-Version:  3.0
    Name:           foo
    Version:        1.0
    License:        BSD-3-Clause
    Build-Type:     Simple

    Benchmark bench-foo
        type:             exitcode-stdio-1.0
        main-is:          bench-foo.hs
        build-depends:    base >= 4 && < 5, time >= 1.1 && < 1.7
        default-language: Haskell2010

.. code-block:: haskell
    :caption: bench-foo.hs

    {-# LANGUAGE BangPatterns #-}
    module Main where

    import Data.Time.Clock

    fib 0 = 1
    fib 1 = 1
    fib n = fib (n-1) + fib (n-2)

    main = do
        start <- getCurrentTime
        let !r = fib 20
        end <- getCurrentTime
        putStrLn $ "fib 20 took " ++ show (diffUTCTime end start)


Foreign libraries
^^^^^^^^^^^^^^^^^

Foreign libraries are system libraries intended to be linked against
programs written in C or other "foreign" languages. They
come in two primary flavours: dynamic libraries (``.so`` files on Linux,
``.dylib`` files on OSX, ``.dll`` files on Windows, etc.) are linked against
executables when the executable is run (or even lazily during
execution), while static libraries (``.a`` files on Linux/OSX, ``.lib``
files on Windows) get linked against the executable at compile time.

Foreign libraries only work with GHC 7.8 and later.

A typical stanza for a foreign library looks like

::

    foreign-library myforeignlib
      type:                native-shared
      lib-version-info:    6:3:2

      if os(Windows)
        options: standalone
        mod-def-file: MyForeignLib.def

      other-modules:       MyForeignLib.SomeModule
                           MyForeignLib.SomeOtherModule
      build-depends:       base >=4.7 && <4.9
      hs-source-dirs:      src
      c-sources:           csrc/MyForeignLibWrapper.c
      default-language:    Haskell2010


.. pkg-section:: foreign-library name
    :since: 2.0
    :synopsis: Foreign library build information.

    Build information for `foreign libraries`_.

.. pkg-field:: type: foreign library type

   Cabal recognizes ``native-static`` and ``native-shared`` here, although
   we currently only support building `native-shared` libraries.

.. pkg-field:: options: foreign library option list

   Options for building the foreign library, typically specific to the
   specified type of foreign library. Currently we only support
   ``standalone`` here. A standalone dynamic library is one that does not
   have any dependencies on other (Haskell) shared libraries; without
   the ``standalone`` option the generated library would have dependencies
   on the Haskell runtime library (``libHSrts``), the base library
   (``libHSbase``), etc. Currently, ``standalone`` *must* be used on Windows
   and *must not* be used on any other platform.

.. pkg-field:: mod-def-file: filename

   This option can only be used when creating dynamic Windows libraries
   (that is, when using ``native-shared`` and the ``os`` is ``Windows``). If
   used, it must be a path to a *module definition file*. The details of
   module definition files are beyond the scope of this document; see the
   `GHC <https://downloads.haskell.org/~ghc/latest/docs/html/users_guide/win32-dlls.html>`_
   manual for some details and some further pointers.

.. pkg-field:: lib-version-info: current:revision:age

   This field is currently only used on Linux.

   This field specifies a Libtool-style version-info field that sets
   an appropriate ABI version for the foreign library. Note that the
   three numbers specified in this field do not directly specify the
   actual ABI version: ``6:3:2`` results in library version ``4.2.3``.

   With this field set, the SONAME of the library is set, and symlinks
   are installed.

   How you should bump this field on an ABI change depends on the
   breakage you introduce:

   -  Programs using the previous version may use the new version as
      drop-in replacement, and programs using the new version can also
      work with the previous one. In other words, no recompiling nor
      relinking is needed. In this case, bump ``revision`` only, don't
      touch current nor age.
   -  Programs using the previous version may use the new version as
      drop-in replacement, but programs using the new version may use
      APIs not present in the previous one. In other words, a program
      linking against the new version may fail with "unresolved
      symbols" if linking against the old version at runtime: set
      revision to 0, bump current and age.
   -  Programs may need to be changed, recompiled, and relinked in
      order to use the new version. Bump current, set revision and age
      to 0.

   Also refer to the Libtool documentation on the version-info field.

.. pkg-field:: lib-version-linux: version

   This field is only used on Linux.

   Specifies the library ABI version directly for foreign libraries
   built on Linux: so specifying ``4.2.3`` causes a library
   ``libfoo.so.4.2.3`` to be built with SONAME ``libfoo.so.4``, and
   appropriate symlinks ``libfoo.so.4`` and ``libfoo.so`` to be
   installed.

Note that typically foreign libraries should export a way to initialize
and shutdown the Haskell runtime. In the example above, this is done by
the ``csrc/MyForeignLibWrapper.c`` file, which might look something like

.. code-block:: c

    #include <stdlib.h>
    #include "HsFFI.h"

    HsBool myForeignLibInit(void){
      int argc = 2;
      char *argv[] = { "+RTS", "-A32m", NULL };
      char **pargv = argv;

      // Initialize Haskell runtime
      hs_init(&argc, &pargv);

      // do any other initialization here and
      // return false if there was a problem
      return HS_BOOL_TRUE;
    }

    void myForeignLibExit(void){
      hs_exit();
    }

With modern ghc regular libraries are installed in directories that contain
package keys. This isn't usually a problem because the package gets registered
in ghc's package DB and so we can figure out what the location of the library
is. Foreign libraries however don't get registered, which means that we'd have
to have a way of finding out where a platform library got installed (other than by
searching the ``lib/`` directory). Instead, we install foreign libraries in
``~/.local/lib``.

Build information
^^^^^^^^^^^^^^^^^
.. pkg-section:: None

The following fields may be optionally present in a library, executable,
test suite or benchmark section, and give information for the building
of the corresponding library or executable. See also the sections on
`system-dependent parameters`_ and `configurations`_ for a way to supply
system-dependent values for these fields.

.. pkg-field:: build-depends: library list

    Declares the dependencies on *library* components required to build the
    current package component. See :pkg-field:`build-tool-depends` for declaring
    dependencies on build-time *tools*. Dependencies on libraries from another
    package should be annotated with a version constraint.

    **Library Names**

    A library is identified by the name of its package, optionally followed by a
    colon and the library's name (for example, ``my-package:my-library``). If a
    library name is omitted, the package's main library will be used. To refer
    expressly to a package's main library, use the name of the package as the
    library name (for example, ``my-package:my-package``). More than one library
    from the same package can be specified with the shorthand syntax
    ``my-package:{my-library1,my-library2}``.

    .. Note::

       Before version 3.4 of the Cabal specification, from version 2.0, a
       private sublibrary (an internal library) was identified by only the name
       of the sublibrary. An internal library could shadow a dependency on the
       main library of another package, if the names clashed.

    See the section on :pkg-section:`library` for information about how a
    package can specify library components.

    **Version Constraints**

    Version constraints use the operators ``==, >=, >, <, <=`` and a
    version number. Multiple constraints can be combined using ``&&`` or
    ``||``.

    .. Note::

       Even though there is no ``/=`` operator, by combining operators we can
       skip over one or more versions, to skip a deprecated version or to skip
       versions that narrow the constraint solving more than we'd like.

       For example, the ``time =1.12.*`` series depends on ``base >=4.13 && <5``
       but ``time-1.12.3`` bumps the lower bound on base to ``>=4.14``.  If we
       still want to compile with a ``ghc-8.8.*`` version of GHC that ships with
       ``base-4.13`` and with later GHC versions, then we can use ``time >=1.12
       && (time <1.12.3 || time >1.12.3)``.

       Hackage shows deprecated and preferred versions for packages, such as for
       `containers <https://hackage.haskell.org/package/containers/preferred>`_
       and `aeson <https://hackage.haskell.org/package/aeson/preferred>`_ for
       example. Deprecating package versions is not the same deprecating a
       package as a whole, for which hackage keeps a `deprecated packages list
       <https://hackage.haskell.org/packages/deprecated>`_.

    If no version constraint is specified, any version is assumed to be
    acceptable. For example:

    ::

        library
          build-depends:
            base >= 2,
            foo >= 1.2.3 && < 1.3,
            bar

    Dependencies like ``foo >= 1.2.3 && < 1.3`` turn out to be very
    common because it is recommended practice for package versions to
    correspond to API versions (see PVP_).

    Since Cabal 1.6, there is a special wildcard syntax to help with
    such ranges

    ::

        build-depends: foo ==1.2.*

    It is only syntactic sugar. It is exactly equivalent to
    ``foo >= 1.2 && < 1.3``.

    .. Warning::

       A potential pitfall of the wildcard syntax is that the
       constraint ``nats == 1.0.*`` doesn't match the release
       ``nats-1`` because the version ``1`` is lexicographically less
       than ``1.0``. This is not an issue with the caret-operator
       ``^>=`` described below.

    Starting with Cabal 2.0, there's a new version operator to express
    PVP_-style major upper bounds conveniently, and is inspired by similar
    syntactic sugar found in other language ecosystems where it's often
    called the "Caret" operator:

    ::

        build-depends:
          foo ^>= 1.2.3.4,
          bar ^>= 1

    This allows to assert the positive knowledge that this package is
    *known* to be semantically compatible with the releases
    ``foo-1.2.3.4`` and ``bar-1`` respectively. The information
    encoded via such ``^>=``-assertions is used by the cabal solver to
    infer version constraints describing semantically compatible
    version ranges according to the PVP_ contract (see below).

    Another way to say this is that ``foo < 1.3`` expresses *negative*
    information, i.e. "``foo-1.3`` or ``foo-1.4.2`` will *not* be
    compatible"; whereas ``foo ^>= 1.2.3.4`` asserts the *positive*
    information that "``foo-1.2.3.4`` is *known* to be compatible" and (in
    the absence of additional information) according to the PVP_
    contract we can (positively) infer right away that all versions
    satisfying ``foo >= 1.2.3.4 && < 1.3`` will be compatible as well.

    .. Note::

       More generally, the PVP_ contract implies that we can safely
       relax the lower bound to ``>= 1.2``, because if we know that
       ``foo-1.2.3.4`` is semantically compatible, then so is
       ``foo-1.2`` (if it typechecks). But we'd need to perform
       additional static analysis (i.e. perform typechecking) in order
       to know if our package in the role of an API consumer will
       successfully typecheck against the dependency ``foo-1.2``.  But
       since we cannot do this analysis during constraint solving and
       to keep things simple, we pragmatically use ``foo >= 1.2.3.4``
       as the initially inferred approximation for the lower bound
       resulting from the assertion ``foo ^>= 1.2.3.4``. If further
       evidence becomes available that e.g. ``foo-1.2`` typechecks,
       one can simply revise the dependency specification to include
       the assertion ``foo ^>= 1.2``.

    The subtle but important difference in signaling allows tooling to
    treat explicitly expressed ``<``-style constraints and inferred
    (``^>=``-style) upper bounds differently.  For instance,
    :cfg-field:`allow-newer`'s ``^``-modifier allows to relax only
    ``^>=``-style bounds while leaving explicitly stated
    ``<``-constraints unaffected.

    Ignoring the signaling intent, the default syntactic desugaring rules are

    - ``^>= x`` == ``>= x && < x.1``
    - ``^>= x.y`` == ``>= x.y && < x.(y+1)``
    - ``^>= x.y.z`` == ``>= x.y.z && < x.(y+1)``
    - ``^>= x.y.z.u`` == ``>= x.y.z.u && < x.(y+1)``
    - etc.

    .. Note::

       One might expect the desugaring to truncate all version
       components below (and including) the patch-level, i.e.
       ``^>= x.y.z.u`` == ``>= x.y.z && < x.(y+1)``,
       as the major and minor version components alone are supposed to
       uniquely identify the API according to the PVP_.  However, by
       designing ``^>=`` to be closer to the ``>=`` operator, we avoid
       the potentially confusing effect of ``^>=`` being more liberal
       than ``>=`` in the presence of patch-level versions.

    Consequently, the example declaration above is equivalent to

    ::

        build-depends:
          foo >= 1.2.3.4 && < 1.3,
          bar >= 1 && < 1.1

    .. Note::

       Prior to Cabal 1.8, ``build-depends`` specified in each
       section were global to all sections. This was unintentional, but
       some packages were written to depend on it, so if you need your
       :pkg-field:`build-depends` to be local to each section, you must specify
       at least ``Cabal-Version: >= 1.8`` in your ``.cabal`` file.

    .. Note::

       Cabal 1.20 experimentally supported module thinning and
       renaming in ``build-depends``; however, this support has since been
       removed and should not be used.

    Starting with Cabal 3.0, a set notation for the ``==`` and ``^>=`` operator
    is available. For instance,

    ::

        tested-with: GHC == 8.6.3, GHC == 8.4.4, GHC == 8.2.2, GHC == 8.0.2,
                     GHC == 7.10.3, GHC == 7.8.4, GHC == 7.6.3, GHC == 7.4.2

        build-depends: network ^>= 2.6.3.6 || ^>= 2.7.0.2 || ^>= 2.8.0.0 || ^>= 3.0.1.0

    can be then written in a more convenient and concise form

    ::

        tested-with: GHC == { 8.6.3, 8.4.4, 8.2.2, 8.0.2, 7.10.3, 7.8.4, 7.6.3, 7.4.2 }

        build-depends: network ^>= { 2.6.3.6, 2.7.0.2, 2.8.0.0, 3.0.1.0 }


.. pkg-field:: other-modules: identifier list

    A list of modules used by the component but not exposed to users.
    For a library component, these would be hidden modules of the
    library. For an executable, these would be auxiliary modules to be
    linked with the file named in the ``main-is`` field.

    .. Note::

       Every module in the package *must* be listed in one of
       :pkg-field:`other-modules`, :pkg-field:`library:exposed-modules` or
       :pkg-field:`executable:main-is` fields.

.. pkg-field:: hs-source-dir: directory list
    :deprecated: 2.0
    :removed: 3.0

    :default: ``.``

    Root directories for the module hierarchy.

    Deprecated in favor of :pkg-field:`hs-source-dirs`.

.. pkg-field:: hs-source-dirs: directory list

    :default: ``.``

    Root directories for the module hierarchy.

    .. note::

      Components can share source directories but modules found there will be
      recompiled even if other components already built them, i.e., if a
      library and an executable share a source directory and the executable
      depends on the library and imports its ``Foo`` module, ``Foo`` will be
      compiled twice, once as part of the library and again for the executable.

.. pkg-field:: default-extensions: identifier list
   :since: 1.12

    A list of Haskell extensions used by every module. These determine
    corresponding compiler options enabled for all files. Extension
    names are the constructors of the
    `Extension <https://hackage.haskell.org/package/Cabal-syntax/docs/Language-Haskell-Extension.html#t:Extension>`__
    type. For example, ``CPP`` specifies that Haskell source files are
    to be preprocessed with a C preprocessor.

.. pkg-field:: other-extensions: identifier list
   :since: 1.12

    A list of Haskell extensions used by some (but not necessarily all)
    modules. From GHC version 6.6 onward, these may be specified by
    placing a ``LANGUAGE`` pragma in the source files affected e.g.

    .. code-block:: haskell

        {-# LANGUAGE CPP, MultiParamTypeClasses #-}

    In Cabal-1.24 the dependency solver will use this and
    :pkg-field:`default-extensions` information. Cabal prior to 1.24 will abort
    compilation if the current compiler doesn't provide the extensions.

    If you use some extensions conditionally, using CPP or conditional
    module lists, it is good to replicate the condition in
    :pkg-field:`other-extensions` declarations:

    ::

        other-extensions: CPP
        if impl(ghc >= 7.5)
          other-extensions: PolyKinds

    You could also omit the conditionally used extensions, as they are
    for information only, but it is recommended to replicate them in
    :pkg-field:`other-extensions` declarations.

.. pkg-field:: default-language: identifier
   :since: 1.12

    Specifies a language standard or a group of language extensions to be activated for the project. In the case of GHC, `see here for details <https://downloads.haskell.org/ghc/latest/docs/users_guide/exts/control.html#controlling-extensions>`__.

    The possible values are:

    -  ``GHC2024`` (only available for GHC version ``9.10`` or later)
    -  ``GHC2021`` (only available for GHC version ``9.2`` or later)
    -  ``Haskell2010``
    -  ``Haskell98``

.. pkg-field:: other-languages: identifier
   :since: 1.12

   TBW

.. pkg-field:: extensions: identifier list
   :deprecated: 1.12
   :removed: 3.0

   Deprecated in favor of :pkg-field:`default-extensions`.

.. pkg-field:: build-tool-depends: package:executable list
    :since: 2.0

    A list of Haskell executables needed to build this component. Executables are provided
    during the whole duration of the component, so this field can be used for executables
    needed during :pkg-section:`test-suite` as well.

    Each is specified by the package containing the executable and the name of the
    executable itself, separated by a colon, and optionally followed by a version bound.

    All executables defined in the given Cabal file are termed as *internal* dependencies
    as opposed to the rest which are *external* dependencies.

    Each of the two is handled differently:

    1. External dependencies can (and should) contain a version bound like conventional
       :pkg-field:`build-depends` dependencies.
    2. Internal dependencies should not contain a version bound, as they will be always
       resolved within the same configuration of the package in the build plan.
       Specifically, version bounds that include the package's version will be warned for
       being extraneous, and version bounds that exclude the package's version will raise
       an error for being impossible to follow.

    For example (1) using a test-suite to make sure README.md Haskell snippets are tested using
    `markdown-unlit <http://hackage.haskell.org/package/markdown-unlit>`__:

    ::

        build-tool-depends: markdown-unlit:markdown-unlit >= 0.5.0 && < 0.6

    For example (2) using a test-suite to test executable behaviour in the same package:

    ::

        build-tool-depends: mypackage:executable

    Cabal tries to make sure that all specified programs are atomically built and prepended
    on the ``PATH`` shell variable before building the component in question, but can only do
    so for Nix-style builds. Specifically:

    a) For Nix-style local builds, both internal and external dependencies.
    b) For old-style builds, only for internal dependencies [#old-style-build-tool-depends]_.
       It's up to the user to provide needed executables in this case under ``PATH``.


    .. note::

      :pkg-field:`build-tool-depends` was added in Cabal 2.0, and it will
      be ignored (with a warning) with old versions of Cabal.  See
      :pkg-field:`build-tools` for more information about backwards
      compatibility.

.. pkg-field:: build-tools: program list
    :deprecated: 2.0
    :removed: 3.0

    Deprecated in favor of :pkg-field:`build-tool-depends`, but :ref:`see below for backwards compatibility information <buildtoolsbc>`.

    A list of Haskell programs needed to build this component.
    Each may be followed by an optional version bound.
    Confusingly, each program in the list either refer to one of three things:

      1. Another executables in the same package (supported since Cabal 1.12)

      2. Tool name contained in Cabal's :ref:`hard-coded set of common tools <buildtoolsmap>`

      3. A pre-built executable that should already be on the ``PATH``
         (supported since Cabal 2.0)

    These cases are listed in order of priority:
    an executable in the package will override any of the hard-coded packages with the same name,
    and a hard-coded package will override any executable on the ``PATH``.

    In the first two cases, the list entry is desugared into a :pkg-field:`build-tool-depends` entry.
    In the first case, the entry is desugared into a :pkg-field:`build-tool-depends` entry by prefixing with ``$pkg:``.
    In the second case, it is desugared by looking up the package and executable name in a hard-coded table.
    In either case, the optional version bound is passed through unchanged.
    Refer to the documentation for :pkg-field:`build-tool-depends` to understand the desugared field's meaning, along with restrictions on version bounds.

    .. _buildtoolsbc:

    **Backward Compatibility**

    Although this field is deprecated in favor of :pkg-field:`build-tool-depends`, there are some situations where you may prefer to use :pkg-field:`build-tools` in cases (1) and (2), as it is supported by more versions of Cabal.
    In case (3), :pkg-field:`build-tool-depends` is better for backwards-compatibility, as it will be ignored by old versions of Cabal; if you add the executable to :pkg-field:`build-tools`, a setup script built against old Cabal will choke.
    If an old version of Cabal is used, an end-user will have to manually arrange for the requested executable to be in your ``PATH``.

    .. _buildtoolsmap:

    **Set of Known Tool Names**

    Identifiers specified in :pkg-field:`build-tools` are desugared into their respective equivalent :pkg-field:`build-tool-depends` form according to the table below. Consequently, a legacy specification such as::

        build-tools: alex >= 3.2.1 && < 3.3, happy >= 1.19.5 && < 1.20

    is simply desugared into the equivalent specification::

        build-tool-depends: alex:alex >= 3.2.1 && < 3.3, happy:happy >= 1.19.5 && < 1.20

    +--------------------------+-----------------------------------+-----------------+
    | :pkg-field:`build-tools` | desugared                         | Note            |
    | identifier               | :pkg-field:`build-tool-depends`   |                 |
    |                          | identifier                        |                 |
    +==========================+===================================+=================+
    | ``alex``                 | ``alex:alex``                     |                 |
    +--------------------------+-----------------------------------+-----------------+
    | ``c2hs``                 | ``c2hs:c2hs``                     |                 |
    +--------------------------+-----------------------------------+-----------------+
    | ``cpphs``                | ``cpphs:cpphs``                   |                 |
    +--------------------------+-----------------------------------+-----------------+
    | ``greencard``            | ``greencard:greencard``           |                 |
    +--------------------------+-----------------------------------+-----------------+
    | ``haddock``              | ``haddock:haddock``               |                 |
    +--------------------------+-----------------------------------+-----------------+
    | ``happy``                | ``happy:happy``                   |                 |
    +--------------------------+-----------------------------------+-----------------+
    | ``hsc2hs``               | ``hsc2hs:hsc2hs``                 |                 |
    +--------------------------+-----------------------------------+-----------------+
    | ``hscolour``             | ``hscolour:hscolour``             |                 |
    +--------------------------+-----------------------------------+-----------------+
    | ``hspec-discover``       | ``hspec-discover:hspec-discover`` | since Cabal 2.0 |
    +--------------------------+-----------------------------------+-----------------+

    This built-in set can be programmatically extended via ``Custom`` setup scripts; this, however, is of limited use since the Cabal solver cannot access information injected by ``Custom`` setup scripts.

.. pkg-field:: buildable: boolean

    :default: ``True``

    Is the component buildable? Like some of the other fields below,
    this field is more useful with the slightly more elaborate form of
    the simple build infrastructure described in the section on
    `system-dependent parameters`_.

.. pkg-field:: ghc-options: token list

    Additional options for GHC. You can often achieve the same effect
    using the :pkg-field:`default-extensions` field, which is preferred.

    Options required only by one module may be specified by placing an
    ``OPTIONS_GHC`` pragma in the source file affected.

    As with many other fields, whitespace can be escaped by using
    Haskell string syntax. Example:
    ``ghc-options: -Wcompat "-with-rtsopts=-T -I1" -Wall``.

.. pkg-field:: ghc-prof-options: token list

    Additional options for GHC when the package is built with profiling
    enabled.

    Note that as of Cabal-1.24, the default profiling detail level
    defaults to ``exported-functions`` for libraries and
    ``toplevel-functions`` for executables. For GHC these correspond to
    the flags ``-fprof-auto-exported`` and ``-fprof-auto-top``. Prior to
    Cabal-1.24 the level defaulted to ``none``. These levels can be
    adjusted by the person building the package with the
    ``--profiling-detail`` and ``--library-profiling-detail`` flags.

    It is typically better for the person building the package to pick
    the profiling detail level rather than for the package author. So
    unless you have special needs it is probably better not to specify
    any of the GHC ``-fprof-auto*`` flags here. However if you wish to
    override the profiling detail level, you can do so using the
    :pkg-field:`ghc-prof-options` field: use ``-fno-prof-auto`` or one of the
    other ``-fprof-auto*`` flags.

.. pkg-field:: ghc-shared-options: token list

    Additional options for GHC when the package is built as shared
    library. The options specified via this field are combined with the
    ones specified via :pkg-field:`ghc-options`, and are passed to GHC during
    both the compile and link phases.

.. pkg-field:: ghcjs-options: token list

   Like :pkg-field:`ghc-options` but applies to GHCJS

.. pkg-field:: ghcjs-prof-options: token list

   Like :pkg-field:`ghc-prof-options` but applies to GHCJS

.. pkg-field:: ghcjs-shared-options: token list

   Like :pkg-field:`ghc-shared-options` but applies to GHCJS

.. pkg-field:: includes: filename list

    A list of header files to be included in any compilations via C.
    This field applies to both header files that are already installed
    on the system and to those coming with the package to be installed.
    The former files should be found in absolute paths, while the latter
    files should be found in paths relative to the top of the source
    tree or relative to one of the directories listed in
    :pkg-field:`include-dirs`.

    These files typically contain function prototypes for foreign
    imports used by the package. This is in contrast to
    :pkg-field:`install-includes`, which lists header files that are intended
    to be exposed to other packages that transitively depend on this
    library.

.. pkg-field:: install-includes: filename list

    A list of header files from this package to be installed into
    ``$libdir/includes`` when the package is installed. Files listed in
    :pkg-field:`install-includes` should be found in relative to the top of the
    source tree or relative to one of the directories listed in
    :pkg-field:`include-dirs`.

    :pkg-field:`install-includes` is typically used to name header files that
    contain prototypes for foreign imports used in Haskell code in this
    package, for which the C implementations are also provided with the
    package. For example, here is a ``.cabal`` file for a hypothetical
    ``bindings-clib`` package that bundles the C source code for ``clib``::

        include-dirs:     cbits
        c-sources:        clib.c
        install-includes: clib.h

    Now any package that depends (directly or transitively) on the
    ``bindings-clib`` library can use ``clib.h``.

    Note that in order for files listed in :pkg-field:`install-includes` to be
    usable when compiling the package itself, they need to be listed in
    the :pkg-field:`includes` field as well.

.. pkg-field:: include-dirs: directory list

    A list of directories to search for header files, when preprocessing
    with ``c2hs``, ``hsc2hs``, ``cpphs`` or the C preprocessor, and also
    when compiling via C. Directories can be absolute paths (e.g., for
    system directories) or paths that are relative to the top of the
    source tree. Cabal looks in these directories when attempting to
    locate files listed in :pkg-field:`includes` and
    :pkg-field:`install-includes`.

.. pkg-field:: c-sources: filename list

    A list of C source files to be compiled and linked with the Haskell
    files.

.. pkg-field:: cxx-sources: filename list
    :since: 2.2

    A list of C++ source files to be compiled and linked with the Haskell
    files. Useful for segregating C and C++ sources when supplying different
    command-line arguments to the compiler via the :pkg-field:`cc-options`
    and the :pkg-field:`cxx-options` fields. The files listed in the
    :pkg-field:`cxx-sources` can reference files listed in the
    :pkg-field:`c-sources` field and vice-versa. The object files will be linked
    appropriately.

.. pkg-field:: asm-sources: filename list
    :since: 3.0

    A list of assembly source files to be compiled and linked with the
    Haskell files.

.. pkg-field:: cmm-sources: filename list
    :since: 3.0

    A list of C-- source files to be compiled and linked with the Haskell
    files.

.. pkg-field:: js-sources: filename list

    A list of JavaScript source files to be linked with the Haskell
    files (only for JavaScript targets).

.. pkg-field:: extra-libraries: token list

    A list of extra libraries to link with (when not linking fully static
    executables).

.. pkg-field:: extra-libraries-static: token list

    A list of extra libraries to link with (when linking fully static
    executables).

.. pkg-field:: extra-ghci-libraries: token list

    A list of extra libraries to be used instead of 'extra-libraries'
    when the package is loaded with GHCi.

.. pkg-field:: extra-bundled-libraries: token list
   :since: 2.2

   A list of libraries that are supposed to be copied from the build
   directory alongside the produced Haskell libraries.  Note that you
   are under the obligation to produce those libraries in the build
   directory (e.g. via a custom setup).  Libraries listed here will
   be included when ``copy``-ing packages and be listed in the
   ``hs-libraries`` of the package configuration in the package database.
   Library names must either be prefixed with "HS" or "C" and corresponding
   library file names must match:

      - Libraries with name "HS<library-name>":
         - `libHS<library-name>.a`
         - `libHS<library-name>-ghc<ghc-flavour><ghc-version>.<dyn-library-extension>*`
      - Libraries with name "C<library-name>":
         - `libC<library-name>.a`
         - `lib<library-name>.<dyn-library-extension>*`

.. pkg-field:: extra-lib-dirs: directory list

    A list of directories to search for libraries (when not linking fully static
    executables).

.. pkg-field:: extra-lib-dirs-static: directory list

    A list of directories to search for libraries (when linking fully static
    executables).

.. pkg-field:: extra-library-flavours: notsure

    TBW

.. pkg-field:: extra-dynamic-library-flavours: notsure

    TBW

.. pkg-field:: cc-options: token list

    Command-line arguments to be passed to the C compiler. Since the
    arguments are compiler-dependent, this field is more useful with the
    setup described in the section on `system-dependent parameters`_.

.. pkg-field:: cpp-options: token list

    Command-line arguments for pre-processing Haskell code. Applies to
    Haskell source and other pre-processed Haskell source like .hsc
    .chs. Does not apply to C code, that's what cc-options is for.

.. pkg-field:: cxx-options: token list
    :since: 2.2

    Command-line arguments to be passed to the compiler when compiling
    C++ code. The C++ sources to which these command-line arguments
    should be applied can be specified with the :pkg-field:`cxx-sources`
    field. Command-line options for C and C++ can be passed separately to
    the compiler when compiling both C and C++ sources by segregating the C
    and C++ sources with the :pkg-field:`c-sources` and
    :pkg-field:`cxx-sources` fields respectively, and providing different
    command-line arguments with the :pkg-field:`cc-options` and the
    :pkg-field:`cxx-options` fields.

.. pkg-field:: cmm-options: token list
    :since: 3.0

    Command-line arguments to be passed to the compiler when compiling
    C-- code. See also :pkg-field:`cmm-sources`.

.. pkg-field:: asm-options: token list
    :since: 3.0

    Command-line arguments to be passed to the assembler when compiling
    assembler code. See also :pkg-field:`asm-sources`.

.. pkg-field:: ld-options: token list

    Command-line arguments to be passed to the linker. Since the
    arguments are compiler-dependent, this field is more useful with the
    setup described in the section on `system-dependent parameters`_.

.. pkg-field:: hsc2hs-options: token list
    :since: 3.6

    Command-line arguments to be passed to ``hsc2hs``.

.. pkg-field:: pkgconfig-depends: package list

    A list of
    `pkg-config <http://www.freedesktop.org/wiki/Software/pkg-config/>`__
    packages, needed to build this package. They can be annotated with
    versions, e.g. ``gtk+-2.0 >= 2.10, cairo >= 1.0``. If no version
    constraint is specified, any version is assumed to be acceptable.
    Cabal uses ``pkg-config`` to find if the packages are available on
    the system and to find the extra compilation and linker options
    needed to use the packages.

    If you need to bind to a C library that supports ``pkg-config`` then
    it is much preferable to use this field rather than hard code options
    into the other fields. ``pkg-config --list-all`` will show you all
    supported libraries. Depending on your system you may need to adjust
    ``PKG_CONFIG_PATH``.

.. pkg-field:: frameworks: token list

    On Darwin/MacOS X, a list of frameworks to link to. See Apple's
    developer documentation for more details on frameworks. This entry
    is ignored on all other platforms.

.. pkg-field:: extra-framework-dirs: directory list
    :since: 1.24

    On Darwin/MacOS X, a list of directories to search for frameworks.
    This entry is ignored on all other platforms.

.. pkg-field:: mixins: mixin list
    :since: 2.0

    Supported only in GHC 8.2 and later. A list of packages mentioned in the
    :pkg-field:`build-depends` field, each optionally accompanied by a list of
    module and module signature renamings.  A valid mixin obeys the
    following syntax:

    ::

        Mixin ::= PackageName IncludeRenaming
        IncludeRenaming ::= ModuleRenaming { "requires" ModuleRenaming }
        ModuleRenaming ::=
            {- empty -}
          | "(" Renaming "," ... "," Renaming ")"
          | "hiding" "(" ModuleName "," ... "," ModuleName ")"
        Renaming ::=
            ModuleName
          | ModuleName "as" ModuleName

    The simplest mixin syntax is simply the name of a package mentioned in the
    :pkg-field:`build-depends` field. For example:

    ::

        library
          build-depends:
            foo ^>= 1.2.3
          mixins:
            foo

    But this doesn't have any effect. More interesting is to use the mixin
    entry to rename one or more modules from the package, like this:

    ::

        library
          mixins:
            foo (Foo.Bar as AnotherFoo.Bar, Foo.Baz as AnotherFoo.Baz)

    Note that renaming a module like this will hide all the modules
    that are not explicitly named.

    Modules can also be hidden:

    ::

        library:
          mixins:
            foo hiding (Foo.Bar)

    Hiding modules exposes everything that is not explicitly hidden.

    .. Note::

       Cabal files with :pkg-field:`cabal-version` < 3.0 suffer from an
       infelicity in how the entries of :pkg-field:`mixins` are parsed: an
       entry will fail to parse if the provided renaming clause has whitespace
       after the opening parenthesis.

       See issues :issue:`5150`, :issue:`4864`, and :issue:`5293`.

    There can be multiple mixin entries for a given package, in effect creating
    multiple copies of the dependency:

    ::

        library
          mixins:
            foo (Foo.Bar as AnotherFoo.Bar, Foo.Baz as AnotherFoo.Baz),
            foo (Foo.Bar as YetAnotherFoo.Bar)

    The ``requires`` clause is used to rename the module signatures required by
    a package:

    ::

        library
          mixins:
            foo (Foo.Bar as AnotherFoo.Bar) requires (Foo.SomeSig as AnotherFoo.SomeSig)

    Signature-only packages don't have any modules, so only the signatures can
    be renamed, with the following syntax:

    ::

        library
          mixins:
            sigonly requires (SigOnly.SomeSig as AnotherSigOnly.SomeSig)

    See the :pkg-field:`library:signatures` field for more details.

    Mixin packages are part of the :ref:`Backpack` extension to the
    Haskell module system.

    The matching of the module signatures required by a
    :pkg-field:`build-depends` dependency with the implementation modules
    present in another dependency is triggered by a coincidence of names. When
    the names of the signature and of the implementation are already the same,
    the matching is automatic. But when the names don't coincide, or we want to
    instantiate a signature in two different ways, adding mixin entries that
    perform renamings becomes necessary.

    .. Warning::

       :ref:`Backpack` has the limitation that implementation modules that instantiate
       signatures required by a :pkg-field:`build-depends` dependency can't
       reside in the same component that has the dependency. They must reside
       in a different package dependency, or at least in a separate internal
       library.

Configurations
^^^^^^^^^^^^^^

Library and executable sections may include conditional blocks, which
test for various system parameters and configuration flags. The flags
mechanism is rather generic, but most of the time a flag represents
certain feature, that can be switched on or off by the package user.
Here is an example package description file using configurations:

Example: A package containing a library and executable programs
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

::

    Cabal-Version: 3.0
    Name: Test1
    Version: 0.0.1
    License: BSD-3-Clause
    Author:  Jane Doe
    Synopsis: Test package to test configurations
    Category: Example
    Build-Type: Simple

    Flag Debug
      Description: Enable debug support
      Default:     False
      Manual:      True

    Flag WebFrontend
      Description: Include API for web frontend.
      Default:     False
      Manual:      True

    Flag NewDirectory
      description: Whether to build against @directory >= 1.2@
      -- This is an automatic flag which the solver will
      -- assign automatically while searching for a solution

    Library
      Build-Depends:      base >= 4.2 && < 4.9
      Exposed-Modules:    Testing.Test1
      Default-Extensions: CPP
      Default-Language:   Haskell2010

      GHC-Options: -Wall
      if flag(Debug)
        CPP-Options: -DDEBUG
        if !os(windows)
          CC-Options: "-DDEBUG"
        else
          CC-Options: "-DNDEBUG"

      if flag(WebFrontend)
        Build-Depends: cgi >= 0.42 && < 0.44
        Other-Modules: Testing.WebStuff
        CPP-Options: -DWEBFRONTEND

        if flag(NewDirectory)
            build-depends: directory >= 1.2 && < 1.4
            Build-Depends: time >= 1.0 && < 1.9
        else
            build-depends: directory == 1.1.*
            Build-Depends: old-time >= 1.0 && < 1.2

    Executable test1
      Main-is:          T1.hs
      Other-Modules:    Testing.Test1
      Build-Depends:    base >= 4.2 && < 4.9
      Default-Language: Haskell2010

      if flag(debug)
        CC-Options: "-DDEBUG"
        CPP-Options: -DDEBUG

Layout
""""""

Flags, conditionals, library and executable sections use layout to
indicate structure. This is very similar to the Haskell layout rule.
Entries in a section have to all be indented to the same level which
must be more than the section header. Tabs are not allowed to be used
for indentation.

As an alternative to using layout you can also use explicit braces
``{}``. In this case the indentation of entries in a section does not
matter, though different fields within a block must be on different
lines. Here is a bit of the above example again, using braces:

Example: Using explicit braces rather than indentation for layout
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

::

    Cabal-Version: 3.0
    Name: Test1
    Version: 0.0.1
    License: BSD-3-Clause
    Author:  Jane Doe
    Synopsis: Test package to test configurations
    Category: Example
    Build-Type: Simple

    Flag Debug {
      Description: Enable debug support
      Default:     False
      Manual:      True
    }

    Library {
      Build-Depends:       base >= 4.2 && < 4.9
      Exposed-Modules:     Testing.Test1
      Default-Extensions:  CPP
      Default-language:    Haskell2010
      if flag(debug) {
        CPP-Options: -DDEBUG
        if !os(windows) {
          CC-Options: "-DDEBUG"
        } else {
          CC-Options: "-DNDEBUG"
        }
      }
    }

Configuration Flags
"""""""""""""""""""

.. pkg-section:: flag name
    :synopsis: Flag declaration.

    Flag section declares a flag which can be used in `conditional blocks`_.

    Flag names are case-insensitive and must match ``[[:alnum:]_][[:alnum:]_-]*``
    regular expression, or expressed as ABNF_:

    .. code-block:: abnf

       flag-name = (UALNUM / "_") *(UALNUM / "_" / "-")

       UALNUM = UALPHA / DIGIT
       UALPHA = ... ; set of alphabetic Unicode code-points

    .. note::

        Hackage accepts ASCII-only flags, ``[a-zA-Z0-9_][a-zA-Z0-9_-]*`` regexp.

.. pkg-field:: description: freeform

    The description of this flag.

.. pkg-field:: default: boolean

    :default: ``True``

    The default value of this flag.

    .. note::

      This value may be :ref:`overridden in several
      ways <controlling flag assignments>`. The
      rationale for having flags default to True is that users usually
      want new features as soon as they are available. Flags representing
      features that are not (yet) recommended for most users (such as
      experimental features or debugging support) should therefore
      explicitly override the default to False.

.. pkg-field:: manual: boolean

    :default: ``False``
    :since: 1.6

    By default, Cabal will first try to satisfy dependencies with the
    default flag value and then, if that is not possible, with the
    negated value. However, if the flag is manual, then the default
    value (which can be overridden by commandline flags) will be used.

.. _conditional-blocks:

Conditional Blocks
^^^^^^^^^^^^^^^^^^

Conditional blocks may appear anywhere inside a component or common
section. They have to follow rather strict formatting rules. Conditional
blocks must always be of the shape

::

      if condition
         property-descriptions-or-conditionals

or

::

      if condition
           property-descriptions-or-conditionals
      else
           property-descriptions-or-conditionals

Note that the ``if`` and the condition have to be all on the same line.

Since Cabal 2.2 conditional blocks support ``elif`` construct.

::

      if condition1
           property-descriptions-or-conditionals
      elif condition2
           property-descriptions-or-conditionals
      else
           property-descriptions-or-conditionals

.. _conditions:

Conditions
""""""""""

Conditions can be formed using boolean tests and the boolean operators
``||`` (disjunction / logical "or"), ``&&`` (conjunction / logical
"and"), or ``!`` (negation / logical "not"). The unary ``!`` takes
highest precedence, ``||`` takes lowest. Precedence levels may be
overridden through the use of parentheses. For example,
``os(darwin) && !arch(i386) || os(freebsd)`` is equivalent to
``(os(darwin) && !(arch(i386))) || os(freebsd)``.

The following tests are currently supported.

:samp:`os({name})`
    Tests if the current operating system is *name*. The argument is
    tested against ``System.Info.os`` on the target system. There is
    unfortunately some disagreement between Haskell implementations
    about the standard values of ``System.Info.os``. Cabal canonicalises
    it so that in particular ``os(windows)`` works on all
    implementations. If the canonicalised os names match, this test
    evaluates to true, otherwise false. The match is case-insensitive.
:samp:`arch({name})`
    Tests if the current architecture is *name*. *name* should be the name of
    one of the nullary constructors of ``Distribution.System.Arch`` (e.g.
    ``x86_64``, ``aarch64`` or ``i386``), otherwise it will be treated as an
    'other architecture' of the given *name*. It will be compared with
    ``Distribution.System.buildArch``, which is derived from
    ``System.Info.arch`` (certain architectures are treated as synonymous; e.g.
    ``aarch64`` / ``arm64`` or ``powerpc64`` / ``powerpc64le`` are not
    distinguished). For a match, this test evaluates to true, otherwise false.
    The match is case-insensitive.
:samp:`impl({compiler})`
    Tests for the configured Haskell implementation. An optional version
    constraint may be specified (for example ``impl(ghc >= 6.6.1)``). If
    the configured implementation is of the right type and matches the
    version constraint, then this evaluates to true, otherwise false.
    The match is case-insensitive.

    Note that including a version constraint in an ``impl`` test causes
    it to check for two properties:

    -  The current compiler has the specified name, and

    -  The compiler's version satisfied the specified version constraint

    As a result, ``!impl(ghc >= x.y.z)`` is not entirely equivalent to
    ``impl(ghc < x.y.z)``. The test ``!impl(ghc >= x.y.z)`` checks that:

    -  The current compiler is not GHC, or

    -  The version of GHC is earlier than version x.y.z.

:samp:`flag({name})`
    Evaluates to the current assignment of the flag of the given name.
    Flag names are case insensitive. Testing for flags that have not
    been introduced with a flag section is an error.
``true``
    Constant value true.
``false``
    Constant value false.

.. _resolution-of-conditions-and-flags:

Resolution of Conditions and Flags
""""""""""""""""""""""""""""""""""

If a package descriptions specifies configuration flags the package user
can :ref:`control these in several ways <controlling flag assignments>`. If the
user does not fix the value of a flag, Cabal will try to find a flag
assignment in the following way.

-  For each flag specified, it will assign its default value, evaluate
   all conditions with this flag assignment, and check if all
   dependencies can be satisfied. If this check succeeded, the package
   will be configured with those flag assignments.

-  If dependencies were missing, the last flag (as by the order in which
   the flags were introduced in the package description) is tried with
   its alternative value and so on. This continues until either an
   assignment is found where all dependencies can be satisfied, or all
   possible flag assignments have been tried.

To put it another way, Cabal does a complete backtracking search to find
a satisfiable package configuration. It is only the dependencies
specified in the :pkg-field:`build-depends` field in conditional blocks that
determine if a particular flag assignment is satisfiable
(:pkg-field:`build-tools` are not considered). The order of the declaration and
the default value of the flags determines the search order. Flags
overridden on the command line fix the assignment of that flag, so no
backtracking will be tried for that flag.

If no suitable flag assignment could be found, the configuration phase
will fail and a list of missing dependencies will be printed. Note that
this resolution process is exponential in the worst case (i.e., in the
case where dependencies cannot be satisfied). There are some
optimizations applied internally, but the overall complexity remains
unchanged.

Meaning of field values when using conditionals
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

During the configuration phase, a flag assignment is chosen, all
conditionals are evaluated, and the package description is combined into
a flat package descriptions. If the same field is declared both inside
a conditional and outside then they are combined using the following rules.

-  Boolean fields are combined using conjunction (logical "and").

-  List fields are combined by appending the inner items to the outer
   items, for example

   ::

       other-extensions: CPP
       if impl(ghc)
         other-extensions: MultiParamTypeClasses

   when compiled using GHC will be combined to

   ::

       other-extensions: CPP, MultiParamTypeClasses

   Similarly, if two conditional sections appear at the same nesting
   level, properties specified in the latter will come after properties
   specified in the former.

-  All other fields must not be specified in ambiguous ways. For example

   ::

       Main-is: Main.hs
       if flag(useothermain)
         Main-is: OtherMain.hs

   will lead to an error. Instead use

   ::

       if flag(useothermain)
         Main-is: OtherMain.hs
       else
         Main-is: Main.hs

.. _common-stanzas:

Common stanzas
^^^^^^^^^^^^^^

.. pkg-section:: common name
    :since: 2.2
    :synopsis: Common build info section

Starting with Cabal-2.2 it's possible to use common build info stanzas.

::

      common deps
        build-depends: base ^>= 4.11
        ghc-options: -Wall

      common test-deps
        build-depends: tasty ^>= 0.12.0.1

      library
        import:           deps
        exposed-modules:  Foo
        default-language: Haskell2010

      test-suite tests
        import:           deps, test-deps
        type:             exitcode-stdio-1.0
        main-is:          Tests.hs
        build-depends:    foo
        default-language: Haskell2010

-  You can use `build information`_ fields in common stanzas.

-  Common stanzas must be defined before use.

-  Common stanzas can import other common stanzas.

-  You can import multiple stanzas at once. Stanza names must be separated by commas.

-  ``import`` must be the first field in a section. Since Cabal 3.0 imports
   are also allowed inside conditionals.

.. Note::

    The name `import` was chosen, because there is ``includes`` field.

.. pkg-section:: None

.. pkg-field:: import: token-list

    TBW

Source Repositories
^^^^^^^^^^^^^^^^^^^

.. pkg-section:: source-repository
    :since: 1.6

It is often useful to be able to specify a source revision control
repository for a package. Cabal lets you specify this information in
a relatively structured form which enables other tools to interpret and
make effective use of the information. For example the information
should be sufficient for an automatic tool to checkout the sources.

Cabal supports specifying different information for various common
source control systems. Obviously not all automated tools will support
all source control systems.

Cabal supports specifying repositories for different use cases. By
declaring which case we mean automated tools can be more useful. There
are currently two kinds defined:

-  The ``head`` kind refers to the latest development branch of the
   package. This may be used for example to track activity of a project
   or as an indication to outside developers what sources to get for
   making new contributions.

-  The ``this`` kind refers to the branch and tag of a repository that
   contains the sources for this version or release of a package. For
   most source control systems this involves specifying a tag, id or
   hash of some form and perhaps a branch. The purpose is to be able to
   reconstruct the sources corresponding to a particular package
   version. This might be used to indicate what sources to get if
   someone needs to fix a bug in an older branch that is no longer an
   active head branch.

You can specify one kind or the other or both. As an example here are
the repositories for the Cabal library. Note that the ``this`` kind of
repository specifies a tag.

::

    source-repository head
      type:     git
      location: https://github.com/haskell/cabal

    source-repository this
      type:     git
      location: https://github.com/haskell/cabal
      tag:      1.6.1

The exact fields are as follows:

.. pkg-field:: type: token

    The name of the source control system used for this repository. The
    currently recognised types are:

    -  ``darcs``
    -  ``git``
    -  ``svn``
    -  ``cvs``
    -  ``mercurial`` (or alias ``hg``)
    -  ``bazaar`` (or alias ``bzr``)
    -  ``arch``
    -  ``monotone``

    This field is required.

.. pkg-field:: location: URL

    The location of the repository. The exact form of this field depends
    on the repository type. For example:

    -  for darcs: ``http://code.haskell.org/foo/``
    -  for git: ``git://github.com/foo/bar.git``
    -  for CVS: ``anoncvs@cvs.foo.org:/cvs``

    This field is required.

.. pkg-field:: module: token

    CVS requires a named module, as each CVS server can host multiple
    named repositories.

    This field is required for the CVS repository type and should not be
    used otherwise.

.. pkg-field:: branch: token

    Many source control systems support the notion of a branch, as a
    distinct concept from having repositories in separate locations. For
    example CVS, SVN and git use branches while darcs uses different
    locations for different branches. If you need to specify a branch to
    identify a your repository then specify it in this field.

    This field is optional.

.. pkg-field:: tag: token

    A tag identifies a particular state of a source repository. The tag
    can be used with a ``this`` repository kind to identify the state of
    a repository corresponding to a particular package version or
    release. The exact form of the tag depends on the repository type.

    This field is required for the ``this`` repository kind.

.. pkg-field:: subdir: directory

    Some projects put the sources for multiple packages under a single
    source repository. This field lets you specify the relative path
    from the root of the repository to the top directory for the
    package, i.e. the directory containing the package's ``.cabal``
    file.

    This field is optional. It defaults to empty which corresponds to the
    root directory of the repository.


Custom setup scripts
--------------------

Since Cabal 1.24, custom ``Setup.hs`` are required to accurately track
their dependencies by declaring them in the ``.cabal`` file rather than
rely on dependencies being implicitly in scope.  Please refer to
`this article <https://www.well-typed.com/blog/2015/07/cabal-setup-deps/>`__
for more details.

As of Cabal library version 3.0, ``defaultMain*`` variants implement support
for response files. Custom ``Setup.hs`` files that do not use one of these
main functions are required to implement their own support, such as by using
``GHC.ResponseFile.getArgsWithResponseFiles``.

Declaring a ``custom-setup`` stanza also enables the generation of
``MIN_VERSION_package_(A,B,C)`` CPP macros for the Setup component.

.. pkg-section:: custom-setup
   :synopsis: Custom Setup.hs build information.
   :since: 1.24

   The optional :pkg-section:`custom-setup` stanza contains information needed
   for the compilation of custom ``Setup.hs`` scripts,

::

    custom-setup
      setup-depends:
        base  >= 4.5 && < 4.11,
        Cabal >= 1.14 && < 1.25

.. pkg-field:: setup-depends: package list
    :since: 1.24

    The dependencies needed to compile ``Setup.hs``. See the
    :pkg-field:`build-depends` field for a description of the syntax expected by
    this field.

    If the field is not specified the implicit package set will be used.
    The package set contains packages bundled with GHC (i.e. ``base``,
    ``bytestring``) and specifically ``Cabal``.
    The specific bounds are put on ``Cabal`` dependency:
    lower-bound is inferred from :pkg-field:`cabal-version`,
    and the upper-bound is ``< 1.25``.

    ``Cabal`` version is additionally restricted by GHC,
    with absolute minimum being ``1.20``, and for example ``Custom``
    builds with GHC-8.10 require at least ``Cabal-3.2``.


Backward compatibility and ``custom-setup``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Versions prior to Cabal 1.24 don't recognise ``custom-setup`` stanzas,
and will behave agnostic to them (except for warning about an unknown
section). Consequently, versions prior to Cabal 1.24 can't ensure the
declared dependencies ``setup-depends`` are in scope, and instead
whatever is registered in the current package database environment
will become eligible (and resolved by the compiler) for the
``Setup.hs`` module.

The availability of the ``MIN_VERSION_package_(A,B,C)`` CPP macros
inside ``Setup.hs`` scripts depends on the condition that either

- a ``custom-setup`` section has been declared (or ``cabal build`` is being
  used which injects an implicit hard-coded ``custom-setup`` stanza if it's missing), or
- GHC 8.0 or later is used (which natively injects package version CPP macros)

Consequently, if you need to write backward compatible ``Setup.hs``
scripts using CPP, you should declare a ``custom-setup`` stanza and
use the pattern below:

.. code-block:: haskell

    {-# LANGUAGE CPP #-}
    import Distribution.Simple

    #if defined(MIN_VERSION_Cabal)
    -- version macros are available and can be used as usual
    # if MIN_VERSION_Cabal(a,b,c)
    -- code specific to lib:Cabal >= a.b.c
    # else
    -- code specific to lib:Cabal < a.b.c
    # endif
    #else
    # warning Enabling heuristic fall-back. Please upgrade cabal-install to 1.24 or later if Setup.hs fails to compile.

    -- package version macros not available; except for exotic environments,
    -- you can heuristically assume that lib:Cabal's version is correlated
    -- with __GLASGOW_HASKELL__, and specifically since we can assume that
    -- GHC < 8.0, we can assume that lib:Cabal is version 1.22 or older.
    #endif

    main = ...

The simplified (heuristic) CPP pattern shown below is useful if all you need
is to distinguish ``Cabal < 2.0`` from ``Cabal >= 2.0``.

.. code-block:: haskell

    {-# LANGUAGE CPP #-}
    import Distribution.Simple

    #if !defined(MIN_VERSION_Cabal)
    # define MIN_VERSION_Cabal(a,b,c) 0
    #endif

    #if MIN_VERSION_Cabal(2,0,0)
    -- code for lib:Cabal >= 2.0
    #else
    -- code for lib:Cabal < 2.0
    #endif

    main = ...



Autogenerated modules and includes
----------------------------------

.. pkg-section:: None

Modules that are built automatically at setup, created with a custom
setup script, must appear on :pkg-field:`other-modules` for the library,
executable, test-suite or benchmark stanzas or also on
:pkg-field:`library:exposed-modules` for libraries to be used, but are not
really on the package when distributed. This makes commands like sdist fail
because the file is not found.

These special modules must appear again on the :pkg-field:`autogen-modules`
field of the stanza that is using them, besides :pkg-field:`other-modules` or
:pkg-field:`library:exposed-modules`. With this there is no need to create
complex build hooks for this poweruser case.

.. pkg-field:: autogen-modules: module list
   :since: 2.0

   .. todo:: document autogen-modules field

Right now :pkg-field:`executable:main-is` modules are not supported on
:pkg-field:`autogen-modules`.

::

    Library
        default-language: Haskell2010
        build-depends: base
        exposed-modules:
            MyLibrary
            MyLibHelperModule
        other-modules:
            MyLibModule
        autogen-modules:
            MyLibHelperModule

    Executable Exe
        default-language: Haskell2010
        main-is: Dummy.hs
        build-depends: base
        other-modules:
            MyExeModule
            MyExeHelperModule
        autogen-modules:
            MyExeHelperModule

.. pkg-field:: autogen-includes: filename list
   :since: 3.0

   A list of header files from this package which are autogenerated
   (e.g. by a ``configure`` script). Autogenerated header files are not
   packaged by ``sdist`` command.


.. _accessing-data-files:

Accessing data files from package code
--------------------------------------

The placement on the target system of files listed in 
the :pkg-field:`data-files` field varies between systems, and in some cases
one can even move packages around after installation
(see :ref:`prefix independence`). To
enable packages to find these files in a portable way, Cabal generates a
module called :file:`Paths_{pkgname}` (with any hyphens in *pkgname*
replaced by underscores) during building, so that it may be imported by
modules of the package. This module defines a function

.. code-block:: haskell

    getDataFileName :: FilePath -> IO FilePath

If the argument is a filename listed in the :pkg-field:`data-files` field, the
result is the name of the corresponding file on the system on which the
program is running.

.. Note::

   If you decide to import the :file:`Paths_{pkgname}` module then it
   *must* be listed in the :pkg-field:`other-modules` field just like any other
   module in your package and on :pkg-field:`autogen-modules` as the file is
   autogenerated.

The :file:`Paths_{pkgname}` module is not platform independent, as any
other autogenerated module, so it does not get included in the source
tarballs generated by ``sdist``.

The :file:`Paths_{pkgname}` module also includes some other useful
functions and values, which record the version of the package and some
other directories which the package has been configured to be installed
into (e.g. data files live in ``getDataDir``):

.. code-block:: haskell

    version :: Version

    getBinDir :: IO FilePath
    getLibDir :: IO FilePath
    getDynLibDir :: IO FilePath
    getDataDir :: IO FilePath
    getLibexecDir :: IO FilePath
    getSysconfDir :: IO FilePath

The actual location of all these directories can be individually
overridden at runtime using environment variables of the form
``pkg_name_var``, where ``pkg_name`` is the name of the package with all
hyphens converted into underscores, and ``var`` is either ``bindir``,
``libdir``, ``dynlibdir``, ``datadir``, ``libexedir`` or ``sysconfdir``. For example,
the configured data directory for ``pretty-show`` is controlled with the
``pretty_show_datadir`` environment variable.

Accessing the package version
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The auto generated :file:`PackageInfo_{pkgname}` module exports the constant
``version ::`` `Version <http://hackage.haskell.org/package/base/docs/Data-Version.html>`__
which is defined as the version of your package as specified in the
``version`` field.

Accessing package-related informations
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The auto generated :file:`PackageInfo_{pkgname}` module exports the following
package-related constants:

.. code-block:: haskell

    name :: String
    version :: Version
    synopsis :: String
    copyright :: String
    homepage :: String

Unlike :file:`Paths_{pkgname}` (see <#accessing-data-files-from-package-code>),
:file:`PackageInfo_{pkgname}` is system- and path-independent. It aims to be
easier to work with for hash-based tools such as Nix.

.. _system-dependent parameters:

System-dependent parameters
---------------------------

For some packages, especially those interfacing with C libraries,
implementation details and the build procedure depend on the build
environment. The ``build-type`` ``Configure`` can be used to handle many
such situations. In this case, ``Setup.hs`` should be:

.. code-block:: haskell

    import Distribution.Simple
    main = defaultMainWithHooks autoconfUserHooks

Most packages, however, would probably do better using the ``Simple``
build type and `configurations`_.

The :pkg-field:`build-type` ``Configure`` differs from ``Simple`` in two ways:

-  The package root directory must contain a shell script called
   ``configure``. The configure step will run the script. This
   ``configure`` script may be produced by
   `autoconf <http://www.gnu.org/software/autoconf/>`__ or may be
   hand-written. The ``configure`` script typically discovers
   information about the system and records it for later steps, e.g. by
   generating system-dependent header files for inclusion in C source
   files and preprocessed Haskell source files. (Clearly this won't work
   for Windows without MSYS or Cygwin: other ideas are needed.)

-  If the package root directory contains a file called
   *package*\ ``.buildinfo`` after the configuration step, subsequent
   steps will read it to obtain additional settings for `build
   information`_ fields,to be merged with the ones
   given in the ``.cabal`` file. In particular, this file may be
   generated by the ``configure`` script mentioned above, allowing these
   settings to vary depending on the build environment.

Note that the package's ``extra-source-files`` are available to the
``configure`` script when it is executed. In typical ``autoconf`` fashion,
``--host`` flag will be passed to the ``configure`` script to indicate the host
platform when cross-compiling. Moreover, various bits of build configuration
will be passed via environment variables:

 - ``CC`` will reflect the path to the C compiler
 - ``CFLAGS`` will reflect the path to the C compiler
 - ``CABAL_FLAGS`` will contain the Cabal flag assignment of the current
   package using traditional Cabal flag syntax (e.g. ``+flagA -flagB``)
 - ``CABAL_FLAG_<flag>`` will be set to either ``0`` or ``1`` depending upon
   whether flag ``<flag>`` is enabled. Note that any any non-alpha-numeric
   characters in the flag name are replaced with ``_``.

The build information file should have the following structure:

    *buildinfo*

    ``executable:`` *name* *buildinfo*

    ``executable:`` *name* *buildinfo* ...

where each *buildinfo* consists of settings of fields listed in the
section on `build information`_. The first one (if
present) relates to the library, while each of the others relate to the
named executable. (The names must match the package description, but you
don't have to have entries for all of them.)

Neither of these files is required. If they are absent, this setup
script is equivalent to ``defaultMain``.

Example: Using autoconf
^^^^^^^^^^^^^^^^^^^^^^^

This example is for people familiar with the 
`autoconf <http://www.gnu.org/software/autoconf/>`__ tools.

In the X11 package, the file ``configure.ac`` contains: 

.. code-block:: shell

    AC_INIT([Haskell X11 package], [1.1], [libraries@haskell.org], [X11])

    # Safety check: Ensure that we are in the correct source directory.
    AC_CONFIG_SRCDIR([X11.cabal])

    # Header file to place defines in
    AC_CONFIG_HEADERS([include/HsX11Config.h])

    # Check for X11 include paths and libraries
    AC_PATH_XTRA
    AC_TRY_CPP([#include <X11/Xlib.h>],,[no_x=yes])

    # Build the package if we found X11 stuff
    if test "$no_x" = yes
    then BUILD_PACKAGE_BOOL=False
    else BUILD_PACKAGE_BOOL=True
    fi
    AC_SUBST([BUILD_PACKAGE_BOOL])

    AC_CONFIG_FILES([X11.buildinfo])
    AC_OUTPUT

Then the setup script will run the ``configure`` script, which checks
for the presence of the X11 libraries and substitutes for variables in
the file ``X11.buildinfo.in``:

::

    buildable: @BUILD_PACKAGE_BOOL@
    cc-options: @X_CFLAGS@
    ld-options: @X_LIBS@

This generates a file ``X11.buildinfo`` supplying the parameters needed
by later stages:

::

    buildable: True
    cc-options:  -I/usr/X11R6/include
    ld-options:  -L/usr/X11R6/lib

The ``configure`` script also generates a header file 
``include/HsX11Config.h`` containing C preprocessor defines recording
the results of various tests. This file may be included by C source
files and preprocessed Haskell source files in the package.

.. Note::

   Packages using these features will also need to list additional
   files such as ``configure``, templates for ``.buildinfo`` files, files
   named only in ``.buildinfo`` files, header files and so on in the
   :pkg-field:`extra-source-files` field to ensure that they are included in
   source distributions. They should also list files and directories generated
   by ``configure`` in the :pkg-field:`extra-tmp-files` field to ensure that
   they are removed by ``setup clean``.

Quite often the files generated by ``configure`` need to be listed
somewhere in the package description (for example, in the
:pkg-field:`install-includes` field). However, we usually don't want generated
files to be included in the source tarball. The solution is again
provided by the ``.buildinfo`` file. In the above example, the following
line should be added to ``X11.buildinfo``:

::

    install-includes: HsX11Config.h

In this way, the generated ``HsX11Config.h`` file won't be included in
the source tarball in addition to ``HsX11Config.h.in``, but it will be
copied to the right location during the install process. Packages that
use custom ``Setup.hs`` scripts can update the necessary fields
programmatically instead of using the ``.buildinfo`` file.

Conditional compilation
-----------------------

Sometimes you want to write code that works with more than one version
of a dependency. You can specify a range of versions for the dependency
in the :pkg-field:`build-depends`, but how do you then write the code that can
use different versions of the API?

Haskell lets you preprocess your code using the C preprocessor (either
the real C preprocessor, or ``cpphs``). To enable this, add
``extensions: CPP`` to your package description. When using CPP, Cabal
provides some pre-defined macros to let you test the version of
dependent packages; for example, suppose your package works with either
version 3 or version 4 of the ``base`` package, you could select the
available version in your Haskell modules like this:

.. code-block:: cpp

    #if MIN_VERSION_base(4,0,0)
    ... code that works with base-4 ...
    #else
    ... code that works with base-3 ...
    #endif

In general, Cabal supplies a macro 
``MIN_VERSION_``\ *``package``*\ ``_(A,B,C)`` for each package depended
on via :pkg-field:`build-depends`. This macro is true if the actual version of
the package in use is greater than or equal to ``A.B.C`` (using the
conventional ordering on version numbers, which is lexicographic on the
sequence, but numeric on each component, so for example 1.2.0 is greater
than 1.0.3).

Since version 1.20, the ``MIN_TOOL_VERSION_``\ *``tool``*
family of macros lets you condition on the version of build tools used to
build the program (e.g. ``hsc2hs``).

Since version 1.24, the macro ``CURRENT_COMPONENT_ID``, which
expands to the string of the component identifier that uniquely
identifies this component.  Furthermore, if the package is a library,
the macro ``CURRENT_PACKAGE_KEY`` records the identifier that was passed
to GHC for use in symbols and for type equality.

Since version 2.0, the macro ``CURRENT_PACKAGE_VERSION`` expands
to the string version number of the current package.

Cabal places the definitions of these macros into an 
automatically-generated header file, which is included when
preprocessing Haskell source code by passing options to the C
preprocessor.

Cabal also allows to detect when the source code is being used for
generating documentation. The ``__HADDOCK_VERSION__`` macro is defined
only when compiling via Haddock_
instead of a normal Haskell compiler. The value of the
``__HADDOCK_VERSION__`` macro is defined as ``A*1000 + B*10 + C``, where
``A.B.C`` is the Haddock version. This can be useful for working around
bugs in Haddock or generating prettier documentation in some special
cases.

.. _more-complex-packages:

More complex packages
---------------------

For packages that don't fit the simple schemes described above, you have
a few options:

-  By using the :pkg-field:`build-type` ``Custom``, you can supply your own
   ``Setup.hs`` file, and customize the simple build infrastructure
   using *hooks*. These allow you to perform additional actions before
   and after each command is run, and also to specify additional
   preprocessors. A typical ``Setup.hs`` may look like this:

   .. code-block:: haskell

       import Distribution.Simple
       main = defaultMainWithHooks simpleUserHooks { postHaddock = posthaddock }

       posthaddock args flags desc info = ....

   See ``UserHooks`` in
   `Distribution.Simple <https://hackage.haskell.org/package/Cabal/docs/Distribution-Simple.html>`__
   for the details, but note that this interface is experimental, and
   likely to change in future releases.

   If you use a custom ``Setup.hs`` file you should strongly consider
   adding a :pkg-section:`custom-setup` stanza with a
   :pkg-field:`custom-setup:setup-depends` field to ensure that your setup
   script does not break with future dependency versions.

-  You could delegate all the work to ``make``, though this is unlikely
   to be very portable. Cabal supports this with the :pkg-field:`build-type`
   ``Make`` and a trivial setup library
   `Distribution.Make <https://hackage.haskell.org/package/Cabal/docs/Distribution-Make.html>`__,
   which simply parses the command line arguments and invokes ``make``.
   Here ``Setup.hs`` should look like this:

   .. code-block:: haskell

       import Distribution.Make
       main = defaultMain

   The root directory of the package should contain a ``configure``
   script, and, after that has run, a ``Makefile`` with a default target
   that builds the package, plus targets ``install``, ``register``,
   ``unregister``, ``clean``, ``dist`` and ``docs``. Some options to
   commands are passed through as follows:

   -  The ``--with-hc-pkg``, ``--prefix``, ``--bindir``, ``--libdir``,
      ``--dynlibdir``, ``--datadir``, ``--libexecdir`` and ``--sysconfdir`` options to
      the ``configure`` command are passed on to the ``configure``
      script. In addition the value of the ``--with-compiler`` option is
      passed in a ``--with-hc`` option and all options specified with
      ``--configure-option=`` are passed on.

   -  The ``--destdir`` option to the ``copy`` command becomes a setting
      of a ``destdir`` variable on the invocation of ``make copy``. The
      supplied ``Makefile`` should provide a ``copy`` target, which will
      probably look like this:

      .. code-block:: make

          copy :
                  $(MAKE) install prefix=$(destdir)/$(prefix) \
                                  bindir=$(destdir)/$(bindir) \
                                  libdir=$(destdir)/$(libdir) \
                                  dynlibdir=$(destdir)/$(dynlibdir) \
                                  datadir=$(destdir)/$(datadir) \
                                  libexecdir=$(destdir)/$(libexecdir) \
                                  sysconfdir=$(destdir)/$(sysconfdir) \

-  Finally, with the :pkg-field:`build-type` ``Custom``, you can also write your
   own setup script from scratch, and you may use the Cabal
   library for all or part of the work. One option is to copy the source
   of ``Distribution.Simple``, and alter it for your needs. Good luck.

.. include:: references.inc


.. rubric:: Footnotes

.. [#old-style-build-tool-depends]

  Some packages (ab)use :pkg-field:`build-depends` on old-style builds, but this has a few major drawbacks:

    - using Nix-style builds it's considered an error if you depend on a exe-only package via build-depends: the solver will refuse it.
    - it may or may not place the executable on ``PATH``.
    - it does not ensure the correct version of the package is installed, so you might end up overwriting versions with each other.

===================================================
/. 🚀 ./cabal-project-description-file.rst
===================================================

Project Description — cabal.project File
========================================

``cabal.project`` files support a variety of options which configure the
details of your build. The general syntax of a ``cabal.project`` file is
similar to that of a Cabal file: there are a number of fields, some of
which live inside stanzas (groups of fields that apply to only part of a
project or can be referenced as a unit):

::

    packages: */*.cabal
    with-compiler: /opt/ghc/8.0.1/bin/ghc

    package cryptohash
      optimization: False

In general, the accepted field names coincide with the accepted command
line flags that ``cabal install`` and other commands take. For example,
``cabal configure --enable-profiling`` will write out a project
file with ``profiling: True``.

The full configuration of a project is determined by combining the
following sources (later entries override earlier ones, except for appendable
options):

1. :ref:`The user-wide global configuration <config-file-discovery>` (default: ``~/.config/cabal/config``)

2. ``cabal.project`` (the project configuration)

3. ``cabal.project.freeze`` (the output of ``cabal freeze``)

4. ``cabal.project.local`` (the output of ``cabal configure``)

Any call to ``cabal build`` will consider ``cabal.project*`` files from parent
directories when there is none in the current directory.

.. _conditionals and imports:

Conditionals and imports
------------------------

As of ``cabal-install`` version 3.8, cabal supports conditional logic and
imports in ``cabal.project`` files.

    .. warning::

      While :ref:`conditional blocks<conditional-blocks>` can appear anywhere
      within component or common sections of a package, their placement within a
      project is restricted.  Conditions may only be introduced at the top level
      of a project.

      Of the :ref:`condition tests<conditions>`, only packages can test for
      flags. Projects can test for operating system, architecture, compiler and
      the boolean constants.

      - :samp:`os({name})`
      - :samp:`arch({name})`
      - :samp:`impl({compiler})`
      - ``true``
      - ``false``

Imports may specify local filepaths or remote urls, and may reference either
cabal.project files or v1-style cabal.config freeze files. As a usage example:

::

    if(os(darwin))
      optimization: False
    elif(os(freebsd))
      packages: freebsd/*.cabal
    else
      optimization: True

    import: https://some.remote.source/subdir/cabal.config

    import: relativepath/extra-project.project

    import: /absolutepath/some-project.project

Using conditionals will force cabal to find a ghc to derive
architecture and version information from, which will force some
commands (update, sdist) to require ghc present where otherwise it
would not be necessitated.

Specifying the local packages
-----------------------------

The following top-level options specify what the local packages of a
project are:

.. cfg-field:: packages: package location list (space or comma separated)
    :synopsis: Project packages.

    :default: ``./*.cabal``

    .. warning::

      The default value ``./*.cabal`` only takes effect if there is no explicit
      ``cabal.project`` file.
      If you use such explicit file you *must* fill the field.

    Specifies the list of package locations which contain the local
    packages to be built by this project. Package locations can take the
    following forms:

    1. They can specify a Cabal file, or a directory containing a Cabal
       file, e.g., ``packages: Cabal cabal-install/cabal-install.cabal``.

    2. They can specify glob-style wildcards, which must match one or
       more (a) directories containing a (single) Cabal file, (b) Cabal
       files (extension ``.cabal``), or (c) tarballs which contain Cabal
       packages (extension ``.tar.gz``).
       For example, to match all Cabal files in all
       subdirectories, as well as the Cabal projects in the parent
       directories ``foo`` and ``bar``, use
       ``packages: */*.cabal ../{foo,bar}/``

    3. They can specify an ``http``, ``https`` or ``file``
       URL, representing the path to a remote tarball to be downloaded
       and built.

    There is no command line variant of this field; see :issue:`3585`.
    Note that the default value is only included if there is no
    ``cabal.project`` file. The field is appendable which means there would be
    no way to drop the default value if it was included.

.. cfg-field:: optional-packages: package location list (space or comma-separated)
    :synopsis: Optional project packages.

    :default: empty

    Like :cfg-field:`packages`, specifies a list of package locations
    containing local packages to be built. Unlike :cfg-field:`packages`,
    if we glob for a package, it is permissible for the glob to match against
    zero packages. The intended use-case for :cfg-field:`optional-packages`
    is to make it so that vendored packages can be automatically picked up if
    they are placed in a subdirectory, but not error if there aren't any.

    There is no command line variant of this field.

.. cfg-field:: extra-packages: package list with version bounds (comma separated)
    :synopsis: Adds external packages as local

    Specifies a list of external packages from Hackage, which
    should be considered local packages. The motivation for
    :cfg-field:`extra-packages` is making libraries that are not
    dependencies of any package in the project available for use in ghci.

    There is no command line variant of this field.



All local packages are *vendored*, in the sense that if other packages
(including external ones from Hackage) depend on a package with the name
of a local package, the local package is preferentially used.
For subdirectories to be considered local packages, the following setting
can be used::

    packages: ./*.cabal
    optional-packages: ./*/*.cabal

...then any package can be vendored simply by making a checkout in the
top-level project directory, as might be seen in this hypothetical
directory layout::

    foo.cabal
    foo-helper/     # local package
    unix/           # vendored external package

All of these options support globs. ``cabal build`` has its own glob
format:

-  Anywhere in a path, as many times as you like, you can specify an
   asterisk ``*`` wildcard. E.g., ``*/*.cabal`` matches all ``.cabal``
   files in all immediate subdirectories. Like in glob(7), asterisks do
   not match hidden files unless there is an explicit period, e.g.,
   ``.*/foo.cabal`` will match ``.private/foo.cabal`` (but
   ``*/foo.cabal`` will not).

-  You can use braces to specify specific directories; e.g.,
   ``{vendor,pkgs}/*.cabal`` matches all Cabal files in the ``vendor``
   and ``pkgs`` subdirectories.

Formally, the format is described by the following BNF:

.. todo::
    convert globbing grammar to proper ABNF_ syntax

.. code-block:: abnf

    RootedGlob    ::= FilePathRoot Glob
    FilePathRoot    ::= {- empty -}        # relative to cabal.project
                      | "/"                # Unix root
                      | [a-zA-Z] ":" [/\\] # Windows root
                      | "~"                # home directory
    Glob ::= GlobPieces [/\\] Glob   # Unix or Windows directory
           | "..[**/\\]"  GlobPieces # Recursive directory glob
           | GlobPieces              # file
           | [/\\]                   # trailing slash
    GlobPieces ::= GlobPiece *
    GlobPiece ::= "*"            # wildcard
                | [^*{},/\\] *   # literal string
                | "\\" [*{},]    # escaped reserved character
                | "{" Glob "," ... "," Glob "}" # union (match any of these)


Specifying Packages from Remote Version Control Locations
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Since version 2.4, the ``source-repository-package`` stanza allows for
specifying packages in a remote version control system that cabal should
consider during package retrieval. This allows use of a package from a
remote version control system, rather than looking for that package in
Hackage.

.. code-block:: cabal

    packages: .

    source-repository-package
        type: git
        location: https://github.com/hvr/HsYAML.git
        tag: e70cf0c171c9a586b62b3f75d72f1591e4e6aaa1

    source-repository-package
        type: git
        location: https://github.com/well-typed/cborg
        tag: 3d274c14ca3077c3a081ba7ad57c5182da65c8c1
        subdir: cborg

    source-repository-package
        type: git
        location: https://github.com/haskell/network.git
        tag: e76fdc753e660dfa615af6c8b6a2ad9ddf6afe70
        post-checkout-command: autoreconf -i

Since version 3.4, cabal-install creates tarballs for each package coming
from a ``source-repository-package`` stanza (effectively applying cabal
sdists to such packages). It gathers the names of the packages from the
appropriate .cabal file in the version control repository, and allows
their use just like Hackage or locally defined packages.

.. cfg-field:: type: VCS kind

.. cfg-field:: location: VCS location (usually URL)

.. cfg-field:: tag: VCS tag

.. cfg-field:: subdir: subdirectory list

    Look in one or more subdirectories of the repository for cabal files, rather than the root.

.. cfg-field:: post-checkout-command: command

    Run command in the checked out repository, prior sdisting.

Global configuration options
----------------------------

The following top-level configuration options are not specific to any
package, and thus apply globally:


.. cfg-field:: verbose: nat
               -v[n], --verbose[=n]
    :synopsis: Build verbosity level.

    :default: 1

    Control the verbosity of ``cabal`` commands, valid values are from 0
    to 3.

    The command line variant of this field is ``--verbose=2``; a short
    form ``-v2`` is also supported.

.. cfg-field:: jobs: nat or $ncpus
               -j[NUM], --jobs[=NUM], --jobs=$ncpus
    :synopsis: Number of builds running in parallel.

    :default: 1

    Run *nat* jobs simultaneously when building. If ``$ncpus`` is
    specified, run the number of jobs equal to the number of CPUs.
    Package building is often quite parallel, so turning on parallelism
    can speed up build times quite a bit!

    The command line variant of this field is ``--jobs=2``; a short form
    ``-j2`` is also supported; a bare ``--jobs`` or ``-j`` is equivalent
    to ``--jobs=$ncpus``.

.. cfg-field::  semaphore: boolean
                --semaphore
                --no-semaphore
    :synopsis: Use GHC's support for semaphore based parallelism.

    :default: False

    This option instructs cabal to control parallelism by creating a new system semaphore,
    whose number of tokens is specified by ``--jobs`` (or ``-j``).
    This semaphore is passed to GHC, which allows it to use any leftover parallelism
    that ``cabal-install`` is not using.

    Requires ``ghc >= 9.8``.

    The command line variant of this field is ``--semaphore``.

.. cfg-field::  keep-going: boolean
                --keep-going
    :synopsis: Try to continue building on failure.

    :default: False

    If true, after a build failure, continue to build other unaffected
    packages.

    The command line variant of this field is ``--keep-going``.

.. option:: --builddir=DIR

    Specifies the name of the directory where build products for
    build will be stored; defaults to ``dist-newstyle``.  If a
    relative name is specified, this directory is resolved relative
    to the root of the project (i.e., where the ``cabal.project``
    file lives.)

    This option can only be specified from the command line.

.. _cmdoption-project-dir:
.. option:: --project-dir=DIR

    Specifies the path of the project directory. If a relative
    :ref:`project-file<cmdoption-project-file>` path is also specified,
    it will be resolved relative to this directory.

    The project directory does not need to contain a ``cabal.project`` file.

    This option can only be specified from the command line.

.. _cmdoption-project-file:
.. option:: --project-file=FILE

    Specifies the path and name of the project file used to specify the
    rest of the top-level configuration; defaults to ``cabal.project``.
    This name not only specifies the name of the main project file,
    but also the auxiliary project files ``cabal.project.freeze``
    and ``cabal.project.local``; for example, if you specify
    ``--project-file=my.project``, then the other files that will
    be probed are ``my.project.freeze`` and ``my.project.local``.

    If :ref:`project-dir<cmdoption-project-dir>` is not specified,
    and the path is relative, we will
    look for the file relative to the current working directory,
    and then for the parent directory, until the project file is
    found or we have hit the top of the user's home directory.

    This option can only be specified from the command line.

.. option:: -z, --ignore-project

    Ignores the local ``cabal.project`` file and uses the default
    configuration with the local ``foo.cabal`` file. Note that
    this flag will be ignored if either of the ``--project-dir`` or
    ``--project-file`` flags are also set.

.. option:: --store-dir=DIR

    Specifies the name of the directory of the global package store.

.. cfg-field:: package-dbs: package DB stack (comma separated)
               --package-db=[clear, global, user, PATH]
    :synopsis: PackageDB stack manipulation
    :since: 3.7

    By modifying ``package-dbs`` you can modify the default package environment
    which ``cabal`` will see. The package databases you add using ``package-dbs``
    will not be written into and only used as immutable package stores to initialise
    the environment with additional packages that ``cabal`` can choose to use.

    There are three package databases involved with most builds:

    global
        Compiler installation of rts, base, etc.
    store
        Nix-style local build cache
    in-place
        Project-specific build directory

    By default, the initial package stack prefix you will have with v2 commands is:

    ::

        -- prefix = [global]

    So the initial set of packages which is used by cabal is just the packages
    installed in the global package database which comes with ``ghc``.

    When cabal builds a package it will start populating the ``store`` package database,
    whose packages will then be subsequently be available to be used in future runs.

    ::

        -- prefix ++ [store]

    When cabal builds your local projects, packages are registered into the local
    in-place package database.

    ::

        -- prefix ++ [store, in-place]

    This flag manipulates the default prefix: ``[global]`` and accepts
    paths, the special value ``global`` referring to the global package db, and
    ``clear`` which removes all prior entries. For example,

    ::

        -- prefix = [global, foo]
        package-dbs: foo

        -- prefix = [foo]
        package-dbs: clear, foo

        -- prefix = [bar, baz]
        package-dbs: clear, foo, clear, bar, baz

    The command line variant of this flag is ``--package-db=DB`` which can be
    specified multiple times.

Phase control
-------------

The following settings apply to commands that result in build actions
(``build``, ``run``, ``repl``, ``test``...), and control which phases of the
build are executed.

.. option:: --dry-run

    Do not download, build, or install anything, only print what would happen.

.. option:: --only-configure

    Instead of performing a full build just run the configure step.
    Only accepted by the ``build`` command.

.. option:: --only-download

    Do not build anything, only fetch the packages.

.. option:: --only-dependencies

    Install only the dependencies necessary to build the given packages.
    Not accepted by the ``repl`` command.

Solver configuration options
----------------------------

The following settings control the behavior of the dependency solver:

.. cfg-field:: constraints: CONSTRAINT (comma separated list)
               -c CONSTRAINT or -cCONSTRAINT, --constraint=CONSTRAINT
               --constraint="pkg >= 2.0", -c "pkg >= 2.0"
    :synopsis: Extra dependencies constraints.

    Add extra constraints to the version bounds, flag settings,
    and other properties a solver can pick for a
    package. For example:

    ::

        constraints: bar == 2.1

    A package can be specified multiple times in ``constraints``, in
    which case the specified constraints are intersected. This is
    useful, since the syntax does not allow you to specify multiple
    constraints at once. For example, to specify both version bounds and
    flag assignments, you would write:

    ::

        constraints:
            bar == 2.1
          , bar +foo -baz

    This is equivalent to writing constraints and :cfg-field:`flags` separately:

    ::

        constraints: bar == 2.1
        package bar
          flags: +foo -baz

    Valid constraints take the same form as for the
    :option:`runhaskell Setup.hs configure --constraint`
    command line option.

.. cfg-field:: preferences: CONSTRAINT (comma separated list)
               --preference=CONSTRAINT
               --preference="pkg >= 2.0"
    :synopsis: Preferred dependency versions.

    Like :cfg-field:`constraints`, but the solver will attempt to satisfy
    these preferences on a best-effort basis. The resulting install is locally
    optimal with respect to preferences; specifically, no single package
    could be replaced with a more preferred version that still satisfies
    the hard constraints.

    Operationally, preferences can cause the solver to attempt certain
    version choices of a package before others, which can improve
    dependency solver runtime.

    One way to use :cfg-field:`preferences` is to take a known working set of
    constraints (e.g., via ``cabal freeze``) and record them as
    preferences. In this case, the solver will first attempt to use this
    configuration, and if this violates hard constraints, it will try to
    find the minimal number of upgrades to satisfy the hard constraints
    again.

    The command line variant of this field is
    ``--preference="pkg >= 2.0"``; to specify multiple preferences, pass
    the flag multiple times.

.. cfg-field:: allow-newer: none, all or list of scoped package names (space or comma separated)
               --allow-newer, --allow-newer=[none,all,[scope:][^]pkg]
    :synopsis: Lift dependencies upper bound constraints.

    :default: ``none``

    Allow the solver to pick more recent version of some packages than
    would normally be permitted by the :pkg-field:`build-depends` bounds
    of packages in the install plan. This option may be useful if the
    dependency solver cannot otherwise find a valid install plan.

    For example, to relax ``pkg``\ s :pkg-field:`build-depends` upper bound on
    ``dep-pkg``, write a scoped package name of the form:

    ::

        allow-newer: pkg:dep-pkg

    If the scope shall be limited to specific releases of ``pkg``, the
    extended form as in

    ::

        allow-newer: pkg-1.2.3:dep-pkg, pkg-1.1.2:dep-pkg

    can be used to limit the relaxation of dependencies on
    ``dep-pkg`` by the ``pkg-1.2.3`` and ``pkg-1.1.2`` releases only.

    The scoped syntax is recommended, as it is often only a single package
    whose upper bound is misbehaving. In this case, the upper bounds of
    other packages should still be respected; indeed, relaxing the bound
    can break some packages which test the selected version of packages.

    The syntax also allows to prefix the dependee package with a
    modifier symbol to modify the scope/semantic of the relaxation
    transformation in a additional ways. Currently only one modifier
    symbol is defined, i.e. ``^`` (i.e. caret) which causes the
    relaxation to be applied only to ``^>=`` operators and leave all other
    version operators untouched.

    However, in some situations (e.g., when attempting to build packages
    on a new version of GHC), it is useful to disregard *all*
    upper-bounds, with respect to a package or all packages. This can be
    done by specifying just a package name, or using the keyword ``all``
    to specify all packages:

    ::

        -- Disregard upper bounds involving the dependencies on
        -- packages bar, baz. For quux only, relax
        -- 'quux ^>= ...'-style constraints only.
        allow-newer: bar, baz, ^quux

        -- Disregard all upper bounds when dependency solving
        allow-newer: all

        -- Disregard all `^>=`-style upper bounds when dependency solving
        allow-newer: ^all


    For consistency, there is also the explicit wildcard scope syntax
    ``*`` (or its alphabetic synonym ``all``). Consequently, the
    examples above are equivalent to the explicitly scoped variants:

    ::

        allow-newer: all:bar, *:baz, *:^quux

        allow-newer: *:*
        allow-newer: all:all

        allow-newer: *:^*
        allow-newer: all:^all

    In order to ignore all bounds specified by a package ``pkg-1.2.3``
    you can combine scoping with a right-hand-side wildcard like so

    ::

        -- Disregard any upper bounds specified by pkg-1.2.3
        allow-newer: pkg-1.2.3:*

        -- Disregard only `^>=`-style upper bounds in pkg-1.2.3
        allow-newer: pkg-1.2.3:^*


    :cfg-field:`allow-newer` is often used in conjunction with a constraint
    (in the :cfg-field:`constraints` field) forcing the usage of a specific,
    newer version of a package.

    The command line variant of this field is e.g. ``--allow-newer=bar``. A
    bare ``--allow-newer`` is equivalent to ``--allow-newer=all``.

.. cfg-field:: allow-older: none, all, list of scoped package names (space or comma separated)
               --allow-older, --allow-older=[none,all,[scope:][^]pkg]
    :synopsis: Lift dependency lower bound constraints.
    :since: 2.0

    :default: ``none``

    Like :cfg-field:`allow-newer`, but applied to lower bounds rather than
    upper bounds.

    The command line variant of this field is ``--allow-older=all``. A
    bare ``--allow-older`` is equivalent to ``--allow-older=all``.


.. cfg-field:: index-state: HEAD, unix-timestamp, ISO8601 UTC timestamp.
   :synopsis: Use source package index state as it existed at a previous time.
   :since: 2.0

   :default: ``HEAD``

   This allows to change the source package index state the solver uses
   to compute install-plans. This is particularly useful in
   combination with freeze-files in order to also freeze the state the
   package index was in at the time the install-plan was frozen.

   ::

      -- UNIX timestamp format example
      index-state: @1474739268

      -- ISO8601 UTC timestamp format example
      -- This format is used by 'cabal configure'
      -- for storing `--index-state` values.
      index-state: 2016-09-24T17:47:48Z

      -- Specify different index-states per package repository
      -- Supported since 3.4
      index-state:
        , hackage.haskell.org 2020-05-06T22:33:27Z
        , head.hackage 2020-04-29T04:11:05Z

.. cfg-field:: active-repositories: reponame1, reponame2

    :synopsis: Specify active package repositories
    :since: 3.4

    :default: ``:rest``

    Specifies which of the package repositories defined in the configuration
    should be active. It's also useful for specifying the order and the way
    active repositories are merged.

    When searching for a certain version of a certain package name, the list of
    active repositories is searched last-to-first.

    For example, suppose hackage.haskell.org has versions 1.0 and 2.0 of
    package X, and my-repository has version 2.0 of a similarly named package.
    Then, with the following configuration:

    ::

      -- Force my-repository to be the first repository considered
      active-repositories:
        , hackage.haskell.org
        , my-repository

    version 2.0 of X will come from my-repository, and version 1.0 will come
    from hackage.haskell.org.

    If we want to make a repository the sole provider of certain packages, we
    can put it last in the active repositories list, and add the :override
    modifier.

    For example, if we modify the previous example like this:

    ::

      active-repositories:
        , hackage.haskell.org
        , my-repository:override

    then version 1.0 of package X won't be found in any case, because X is
    present in my-repository only in version 2.0, and the :override forbids
    searching for other versions of X further up the list.

    :override has no effect for package names that aren't present in the
    overriding repository.

    The special repository reference :rest stands for "all the other repositories"
    and can be useful to avoid lengthy lists of repository names:

    ::

      -- Force my-repository to be the first repository considered
      active-repositories: :rest, my-repository

    The special repository reference :none disables all repositories, effectively
    putting cabal in "offline" mode:

    ::

      active-repositories: :none


.. cfg-field:: reject-unconstrained-dependencies: all, none
               --reject-unconstrained-dependencies=[all|none]
   :synopsis: Restrict the solver to packages that have constraints on them.

   :default: none
   :since: 2.6

   By default, the dependency solver can include any package that it's
   aware of in a build plan. If you wish to restrict the build plan to
   a closed set of packages (e.g., from a freeze file), use this flag.

   When set to `all`, all non-local packages that aren't goals must be
   explicitly constrained. When set to `none`, the solver will
   consider all packages.


Package configuration options
-----------------------------

Package options affect the building of specific packages. There are three
ways a package option can be specified:

-  They can be specified at the top-level, in which case they apply only
   to **local package**, or

-  They can be specified inside a ``package`` stanza, in which case they
   apply to the build of the package, whether or not it is local or
   external.

-  They can be specified inside an ``package *`` stanza, in which case they
   apply to all packages, local ones from the project and also external
   dependencies.


For example, the following options specify that :cfg-field:`optimization`
should be turned off for all local packages, and that ``bytestring`` (possibly
an external dependency) should be built with ``-fno-state-hack``::

    optimization: False

    package bytestring
        ghc-options: -fno-state-hack

``ghc-options`` is not specifically described in this documentation, but is one
of many fields for configuring programs.  They take the form
``progname-options`` and ``progname-location``, and can be set for all local
packages in a ``program-options`` stanza or under a package stanza.

On the command line, these options are applied to all local packages.
There is no per-package command line interface.

Some flags were added by more recent versions of the Cabal library. This
means that they are NOT supported by packages which use Custom setup
scripts that require a version of the Cabal library older than when the
feature was added.

.. cfg-field:: flags: list of +flagname or -flagname (space separated)
               -f FLAGS or -fFLAGS, --flags=FLAGS
               --flags="+foo -bar", -ffoo, -f-bar
    :synopsis: Enable or disable package flags.

    Force all flags specified as ``+flagname`` to be true, and all flags
    specified as ``-flagname`` to be false. For example, to enable the
    flag ``foo`` and disable ``bar``, set:

    ::

        flags: +foo -bar

    Exactly one of + or - is required before each flag.

    Flags are *per-package*, so it doesn't make much sense to specify
    flags at the top-level, unless you happen to know that *all* of your
    local packages support the same named flags. If a flag is not
    supported by a package, it is ignored.

    The command line variant of this flag is ``--flags``. There is also
    a shortened form ``-ffoo -f-bar``.

    A common mistake is to say ``cabal build -fhans``, where
    ``hans`` is a flag for a transitive dependency that is not in the
    local package; in this case, the flag will be silently ignored. If
    ``haskell-tor`` is the package you want this flag to apply to, try
    ``--constraint="haskell-tor +hans"`` instead. Flags can be specified as
    package :cfg-field:`constraints`.

.. cfg-field:: with-compiler: PATH
               -w PATH or -wPATH, --with-compiler=PATH
    :synopsis: Path to compiler executable.

    Specify the path to a particular compiler to be used. If not an
    absolute path, it will be resolved according to the ``PATH``
    environment. The type of the compiler (GHC, GHCJS, etc) must be
    consistent with the setting of the :cfg-field:`compiler` field.

    The most common use of this option is to specify a different version
    of your compiler to be used; e.g., if you have ``ghc-7.8`` in your
    path, you can specify ``with-compiler: ghc-7.8`` to use it.

    This flag also sets the default value of :cfg-field:`with-hc-pkg`, using
    the heuristic that it is named ``ghc-pkg-7.8`` (if your executable name
    is suffixed with a version number), or is the executable named
    ``ghc-pkg`` in the same directory as the ``ghc`` directory. If this
    heuristic does not work, set :cfg-field:`with-hc-pkg` explicitly.

    For inplace packages, ``cabal build`` maintains a separate build
    directory for each version of GHC, so you can maintain multiple
    build trees for different versions of GHC without clobbering each
    other.

    It's not possible to set :cfg-field:`with-compiler` on a
    per-package basis.

    The command line variant of this flag is
    ``--with-compiler=ghc-7.8``; there is also a short version
    ``-w ghc-7.8``.

.. cfg-field:: with-hc-pkg: PATH
               --with-hc-pkg=PATH
    :synopsis: Path to package tool.

    Specify the path to the package tool, e.g., ``ghc-pkg``. This
    package tool must be compatible with the compiler specified by
    :cfg-field:`with-compiler` (generally speaking, it should be precisely
    the tool that was distributed with the compiler). If this option is
    omitted, the default value is determined from :cfg-field:`with-compiler`.

    The command line variant of this flag is
    ``--with-hc-pkg=ghc-pkg-7.8``.

.. cfg-field:: optimization: nat
               -O[n], --enable-optimization[=n]
               --disable-optimization
    :synopsis: Build with optimization.

    :default: ``1``

    Build with optimization. This is appropriate for production use,
    taking more time to build faster libraries and programs.

    The optional *nat* value is the optimisation level. Some compilers
    support multiple optimisation levels. The range is 0 to 2. Level 0
    disables optimization, level 1 is the default. Level 2 is higher
    optimisation if the compiler supports it. Level 2 is likely to lead
    to longer compile times and bigger generated code. If you are not
    planning to run code, turning off optimization will lead to better
    build times and less code to be rebuilt when a module changes.

    When optimizations are enabled, Cabal passes ``-O2`` to the C compiler.

    We also accept ``True`` (equivalent to 1) and ``False`` (equivalent
    to 0).

    Note that as of GHC 8.0, GHC does not recompile when optimization
    levels change (see :ghc-ticket:`10923`), so if
    you change the optimization level for a local package you may need
    to blow away your old build products in order to rebuild with the
    new optimization level.

    The command line variant of this flag is ``-O2`` (with ``-O1``
    equivalent to ``-O``). There are also long-form variants
    ``--enable-optimization`` and ``--disable-optimization``.

.. cfg-field:: configure-options: OPT (space separated list)
               --configure-option=OPT
    :synopsis: Options to pass to configure script.

    A list of extra arguments to pass to the external ``./configure``
    script, if one is used. This is only useful for packages which have
    the ``Configure`` build type. See also the section on
    :ref:`system-dependent parameters`.

    The command line variant of this flag is ``--configure-option=arg``,
    which can be specified multiple times to pass multiple options.

.. cfg-field:: compiler: ghc, ghcjs, jhc, lhc, uhc or haskell-suite
               --compiler=compiler
    :synopsis: Compiler to build with.

    :default: ``ghc``

    Specify the compiler toolchain to be used. This is independent of
    ``with-compiler``, because the choice of toolchain affects Cabal's
    build logic.

    The command line variant of this flag is ``--compiler=ghc``.

    It's not possible to set :cfg-field:`compiler` on a
    per-package basis.

.. cfg-field:: tests: boolean
               --enable-tests
               --disable-tests
    :synopsis: Build tests.

    :default: ``False``

    Force test suites to be enabled. For most users this should not be
    needed, as we always attempt to solve for test suite dependencies,
    even when this value is ``False``; furthermore, test suites are
    automatically enabled if they are requested as a built target.

    The command line variant of this flag is ``--enable-tests`` and
    ``--disable-tests``.

.. cfg-field:: benchmarks: boolean
               --enable-benchmarks
               --disable-benchmarks
    :synopsis: Build benchmarks.

    :default: ``False``

    Force benchmarks to be enabled. For most users this should not be
    needed, as we always attempt to solve for benchmark dependencies,
    even when this value is ``False``; furthermore, benchmarks are
    automatically enabled if they are requested as a built target.

    The command line variant of this flag is ``--enable-benchmarks`` and
    ``--disable-benchmarks``.

.. _cmdoption-extra-prog-path:
.. cfg-field:: extra-prog-path: PATH (newline or comma separated list)
               --extra-prog-path=PATH
    :synopsis: Add directories to program search path.
    :since: 1.18

    A list of directories to search for extra required programs. Most
    users should not need this, as programs like ``happy`` and ``alex``
    will automatically be installed and added to the path. This can be
    useful if a ``Custom`` setup script relies on an exotic extra
    program.

    The command line variant of this flag is ``--extra-prog-path=PATH``,
    which can be specified multiple times.

    When specifying :ref:`--http-transport<cmdoption-http-transport>` from the
    command line, only extra-prog-path from the command line are added to the
    program search path.

.. cfg-field:: run-tests: boolean
               --run-tests
    :synopsis: Run package test suite during installation.

    :default: ``False``

    Run the package test suite during installation. This is useful for
    saying "When this package is installed, check that the test suite
    passes, terminating the rest of the build if it is broken."

    .. warning::

      One deficiency: the :cfg-field:`run-tests` setting of a package is NOT
      recorded as part of the hash, so if you install something without
      :cfg-field:`run-tests` and then turn on ``run-tests``, we won't
      subsequently test the package. If this is causing you problems, give
      us a shout.

    The command line variant of this flag is ``--run-tests``.

Object code options
^^^^^^^^^^^^^^^^^^^

.. cfg-field:: debug-info: integer
               --enable-debug-info[=n]
               --disable-debug-info
    :synopsis: Build with debug info enabled.
    :since: 1.22

    :default: False

    If the compiler (e.g., GHC 7.10 and later) supports outputting OS
    native debug info (e.g., DWARF), setting ``debug-info: True`` will
    instruct it to do so. See the GHC wiki page on :ghc-wiki:`DWARF`
    for more information about this feature.

    (This field also accepts numeric syntax, but until GHC 8.2 this didn't
    do anything.)

    The command line variant of this flag is ``--enable-debug-info`` and
    ``--disable-debug-info``.

.. cfg-field:: split-sections: boolean
               --enable-split-sections
               --disable-split-sections
    :synopsis: Use GHC's split sections feature.
    :since: 2.2

    :default: False

    Use the GHC ``-split-sections`` feature when building the library. This
    reduces the final size of the executables that use the library by
    allowing them to link with only the bits that they use rather than
    the entire library. The downside is that building the library takes
    longer and uses a bit more memory.

    This feature is supported by GHC 8.0 and later.

    The command line variant of this flag is ``--enable-split-sections`` and
    ``--disable-split-sections``.

.. cfg-field:: split-objs: boolean
               --enable-split-objs
               --disable-split-objs
    :synopsis: Use GHC's split objects feature.

    :default: False

    Use the GHC ``-split-objs`` feature when building the library. This
    reduces the final size of the executables that use the library by
    allowing them to link with only the bits that they use rather than
    the entire library. The downside is that building the library takes
    longer and uses considerably more memory.

    It is generally recommend that you use ``split-sections`` instead
    of ``split-objs`` where possible.

    The command line variant of this flag is ``--enable-split-objs`` and
    ``--disable-split-objs``.

.. cfg-field:: executable-stripping: boolean
               --enable-executable-stripping
               --disable-executable-stripping
    :synopsis: Strip installed programs.

    :default: True

    When installing binary executable programs, run the ``strip``
    program on the binary. This can considerably reduce the size of the
    executable binary file. It does this by removing debugging
    information and symbols.

    Not all Haskell implementations generate native binaries. For such
    implementations this option has no effect.

    If ``debug-info`` is set explicitly then ``executable-stripping`` is set
    to ``False`` as otherwise all the debug symbols will be stripped.

    The command line variant of this flag is
    ``--enable-executable-stripping`` and
    ``--disable-executable-stripping``.

.. cfg-field:: library-stripping: boolean
               --enable-library-stripping
               --disable-library-stripping
    :synopsis: Strip installed libraries.
    :since: 1.20

    When installing binary libraries, run the ``strip`` program on the
    binary, saving space on the file system. See also
    ``executable-stripping``.

    If ``debug-info`` is set explicitly then ``library-stripping`` is set
    to ``False`` as otherwise all the debug symbols will be stripped.

    The command line variant of this flag is
    ``--enable-library-stripping`` and ``--disable-library-stripping``.

Executable options
^^^^^^^^^^^^^^^^^^

.. cfg-field:: program-prefix: PREFIX
               --program-prefix=PREFIX
    :synopsis: Prepend prefix to program names.

    :strike:`Prepend *prefix* to installed program names.` (Currently
    implemented in a silly and not useful way. If you need this to work
    give us a shout.)

    *prefix* may contain the following path variables: ``$pkgid``,
    ``$pkg``, ``$version``, ``$compiler``, ``$os``, ``$arch``, ``$abi``,
    ``$abitag``

    The command line variant of this flag is ``--program-prefix=foo-``.

.. cfg-field:: program-suffix: SUFFIX
               --program-suffix=SUFFIX
    :synopsis: Append refix to program names.

    :strike:`Append *suffix* to installed program names.` (Currently
    implemented in a silly and not useful way. If you need this to work
    give us a shout.)

    The most obvious use for this is to append the program's version
    number to make it possible to install several versions of a program
    at once: ``program-suffix: $version``.

    *suffix* may contain the following path variables: ``$pkgid``,
    ``$pkg``, ``$version``, ``$compiler``, ``$os``, ``$arch``, ``$abi``,
    ``$abitag``

    The command line variant of this flag is
    ``--program-suffix='$version'``.

Dynamic linking options
^^^^^^^^^^^^^^^^^^^^^^^

.. cfg-field:: shared: boolean
               --enable-shared
               --disable-shared
    :synopsis: Build shared library.

    :default: False

    Build shared library. This implies a separate compiler run to
    generate position independent code as required on most platforms.

    The command line variant of this flag is ``--enable-shared`` and
    ``--disable-shared``.

.. cfg-field:: executable-dynamic: boolean
               --enable-executable-dynamic
               --disable-executable-dynamic
    :synopsis: Link executables dynamically.

    :default: False

    Link executables dynamically. The executable's library dependencies
    should be built as shared objects. This implies ``shared: True``
    unless ``shared: False`` is explicitly specified.

    The command line variant of this flag is
    ``--enable-executable-dynamic`` and
    ``--disable-executable-dynamic``.

.. cfg-field:: library-for-ghci: boolean
               --enable-library-for-ghci
               --disable-library-for-ghci
    :synopsis: Build libraries suitable for use with GHCi.

    :default: True

    Build libraries suitable for use with GHCi. This involves an extra
    linking step after the build.

    Not all platforms support GHCi and indeed on some platforms, trying
    to build GHCi libs fails. In such cases, consider setting
    ``library-for-ghci: False``.

    The command line variant of this flag is
    ``--enable-library-for-ghci`` and ``--disable-library-for-ghci``.

.. cfg-field:: relocatable:
               --relocatable
    :synopsis: Build relocatable package.
    :since: 1.22

    :default: False

    :strike:`Build a package which is relocatable.` (TODO: It is not
    clear what this actually does, or if it works at all.)

    The command line variant of this flag is ``--relocatable``.

Static linking options
^^^^^^^^^^^^^^^^^^^^^^

.. cfg-field:: static: boolean
               --enable-static
               --disable-static
    :synopsis: Build static library.


    :default: False

    Roll this and all dependent libraries into a combined ``.a`` archive.
    This uses GHCs ``-staticlib`` flag, which is available for iOS and with
    GHC 8.4 and later for other platforms as well.

.. cfg-field:: executable-static: boolean
               --enable-executable-static
               --disable-executable-static
    :synopsis: Build fully static executables.


    :default: False

    Build fully static executables.
    This links all dependent libraries into executables statically,
    including libc.
    This passes ``-static`` and ``-optl=-static`` to GHC.

Foreign function interface options
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. cfg-field:: extra-include-dirs: directories (comma or newline separated list)
               --extra-include-dirs=DIR
    :synopsis: Adds C header search path.

    An extra directory to search for C header files. You can use this
    flag multiple times to get a list of directories.

    You might need to use this flag if you have standard system header
    files in a non-standard location that is not mentioned in the
    package's ``.cabal`` file. Using this option has the same affect as
    appending the directory *dir* to the :pkg-field:`include-dirs` field in each
    library and executable in the package's ``.cabal`` file. The
    advantage of course is that you do not have to modify the package at
    all. These extra directories will be used while building the package
    and for libraries it is also saved in the package registration
    information and used when compiling modules that use the library.

    The command line variant of this flag is
    ``--extra-include-dirs=DIR``, which can be specified multiple times.

.. cfg-field:: extra-lib-dirs: directories (comma or newline separated list)
               --extra-lib-dirs=DIR
    :synopsis: Adds library search directory.

    An extra directory to search for system libraries files.

    The command line variant of this flag is ``--extra-lib-dirs=DIR``,
    which can be specified multiple times.

.. cfg-field:: extra-framework-dirs: directories (comma or newline separated list)
               --extra-framework-dirs=DIR
    :synopsis: Adds framework search directory (OS X only).

    An extra directory to search for frameworks (OS X only).

    You might need to use this flag if you have standard system
    libraries in a non-standard location that is not mentioned in the
    package's ``.cabal`` file. Using this option has the same affect as
    appending the directory *dir* to the :cfg-field:`extra-lib-dirs` field in
    each library and executable in the package's ``.cabal`` file. The
    advantage of course is that you do not have to modify the package at
    all. These extra directories will be used while building the package
    and for libraries it is also saved in the package registration
    information and used when compiling modules that use the library.

    The command line variant of this flag is
    ``--extra-framework-dirs=DIR``, which can be specified multiple
    times.

Profiling options
^^^^^^^^^^^^^^^^^

.. cfg-field:: profiling: boolean
               --enable-profiling
               --disable-profiling
    :synopsis: Enable profiling builds.
    :since: 1.22

    :default: False

    Build libraries and executables with profiling enabled (for
    compilers that support profiling as a separate mode). It is only
    necessary to specify :cfg-field:`profiling` for the specific package you
    want to profile; ``cabal build`` will ensure that all of its
    transitive dependencies are built with profiling enabled.

    To enable profiling for only libraries or executables, see
    :cfg-field:`library-profiling` and :cfg-field:`executable-profiling`.

    For useful profiling, it can be important to control precisely what
    cost centers are allocated; see :cfg-field:`profiling-detail`.

    The command line variant of this flag is ``--enable-profiling`` and
    ``--disable-profiling``.

.. cfg-field:: profiling-detail: level
               --profiling-detail=level
    :synopsis: Profiling detail level.
    :since: 1.24

    Some compilers that support profiling, notably GHC, can allocate
    costs to different parts of the program and there are different
    levels of granularity or detail with which this can be done. In
    particular for GHC this concept is called "cost centers", and GHC
    can automatically add cost centers, and can do so in different ways.

    This flag covers both libraries and executables, but can be
    overridden by the ``library-profiling-detail`` field.

    Currently this setting is ignored for compilers other than GHC. The
    levels that cabal currently supports are:

    default
        For GHC this uses ``exported-functions`` for libraries and
        ``toplevel-functions`` for executables.
    none
        No costs will be assigned to any code within this component.
    exported-functions
        Costs will be assigned at the granularity of all top level
        functions exported from each module. In GHC, this
        is for non-inline functions.  Corresponds to ``-fprof-auto-exported``.
    toplevel-functions
        Costs will be assigned at the granularity of all top level
        functions in each module, whether they are exported from the
        module or not. In GHC specifically, this is for non-inline
        functions.  Corresponds to ``-fprof-auto-top``.
    all-functions
        Costs will be assigned at the granularity of all functions in
        each module, whether top level or local. In GHC specifically,
        this is for non-inline toplevel or where-bound functions or
        values.  Corresponds to ``-fprof-auto``.
    late-toplevel
        Like top-level but costs will be assigned to top level definitions after
        optimization. This lowers profiling overhead massively while giving similar
        levels of detail as toplevle-functions. However it means functions introduced
        by GHC during optimization will show up in profiles as well.
        Corresponds to ``-fprof-late`` if supported and ``-fprof-auto-top`` otherwise.
    late
        Currently an alias for late-toplevel

    The command line variant of this flag is
    ``--profiling-detail=none``.

.. cfg-field:: library-profiling-detail: level
               --library-profiling-detail=level
    :synopsis: Libraries profiling detail level.
    :since: 1.24

    Like :cfg-field:`profiling-detail`, but applied only to libraries

    The command line variant of this flag is
    ``--library-profiling-detail=none``.

.. cfg-field:: library-vanilla: boolean
               --enable-library-vanilla
               --disable-library-vanilla
    :synopsis: Build libraries without profiling.

    :default: True

    Build ordinary libraries (as opposed to profiling libraries).
    Mostly, you can set this to False to avoid building ordinary
    libraries when you are profiling.

    The command line variant of this flag is
    ``--enable-library-vanilla`` and ``--disable-library-vanilla``.

.. cfg-field:: library-profiling: boolean
               --enable-library-profiling
               --disable-library-profiling
    :synopsis: Build libraries with profiling enabled.
    :since: 1.22

    :default: False

    Build libraries with profiling enabled.  You probably want
    to use :cfg-field:`profiling` instead.

    The command line variant of this flag is
    ``--enable-library-profiling`` and ``--disable-library-profiling``.

.. cfg-field:: executable-profiling: boolean
               --enable-executable-profiling
               --disable-executable-profiling
    :synopsis: Build executables with profiling enabled.
    :since: 1.22

    :default: False

    Build executables with profiling enabled. You probably want
    to use :cfg-field:`profiling` instead.

    The command line variant of this flag is
    ``--enable-executable-profiling`` and
    ``--disable-executable-profiling``.

Coverage options
^^^^^^^^^^^^^^^^

.. cfg-field:: coverage: boolean
               --enable-coverage
               --disable-coverage
    :synopsis: Build with coverage enabled.
    :since: 1.22

    :default: False

    Build libraries and executables (including test suites) with Haskell
    Program Coverage enabled. Running the test suites will automatically
    generate coverage reports with HPC.

    The command line variant of this flag is ``--enable-coverage`` and
    ``--disable-coverage``.

.. cfg-field:: library-coverage: boolean
               --enable-library-coverage
               --disable-library-coverage
    :since: 1.22
    :deprecated:

    :default: False

    Deprecated, use :cfg-field:`coverage`.

    The command line variant of this flag is
    ``--enable-library-coverage`` and ``--disable-library-coverage``.

Haddock options
^^^^^^^^^^^^^^^

.. cfg-field:: documentation: boolean
               --enable-documentation
               --disable-documentation
    :synopsis: Enable building of documentation.

    :default: False

    Enables building of Haddock documentation.
    Implied when calling ``cabal haddock``.

    The command line variant of this flag is ``--enable-documentation``
    and ``--disable-documentation``.

    ``documentation: true`` does not imply
    :cfg-field:`haddock-all`,
    :cfg-field:`haddock-benchmarks`,
    :cfg-field:`haddock-executables`,
    :cfg-field:`haddock-internal` or
    :cfg-field:`haddock-tests`.
    These need to be enabled separately if desired.

.. cfg-field:: doc-index-file: templated path
               --doc-index-file=TEMPLATE
    :synopsis: Path to haddock templates.

    A central index of Haddock API documentation (template cannot use
    ``$pkgid``), which should be updated as documentation is built.

The following commands are equivalent to ones that would be passed when
running ``setup haddock``.

.. cfg-field:: haddock-hoogle: boolean
               --haddock-hoogle
    :synopsis: Generate Hoogle file.

    :default: False

    Generate a text file which can be converted by Hoogle_
    into a database for searching.
    This is equivalent to running ``haddock`` with the ``--hoogle`` flag.

.. cfg-field:: haddock-html: boolean
               --haddock-html
    :synopsis: Build HTML documentation.

    :default: True

    Build HTML documentation.

.. cfg-field:: haddock-quickjump: boolean
               --haddock-quickjump
    :synopsis: Generate Quickjump file.

    :default: False

    Generate an index for interactive documentation navigation.
    This is equivalent to running ``haddock`` with the ``--quickjump`` flag.

.. cfg-field:: haddock-html-location: URL (templated path)
               --haddock-html-location=URL
    :synopsis: Location of HTML documentation for prerequisite packages.

    Specify a template for the location of HTML documentation for
    prerequisite packages. The substitutions are applied to the template
    to obtain a location for each package, which will be used by
    hyperlinks in the generated documentation. For example, the
    following command generates links pointing at Hackage pages:

    ::

        html-location: http://hackage.haskell.org/packages/archive/$pkg/latest/doc/html

    If passed on the command line,
    the argument may be quoted to prevent substitution by the shell.

    ::

    --html-location='http://hackage.haskell.org/packages/archive/$pkg/latest/doc/html'

    If this option is omitted, the location for each package is obtained
    using the package tool (e.g. ``ghc-pkg``).

.. cfg-field:: haddock-executables: boolean
               --haddock-executables
    :synopsis: Generate documentation for executables.

    :default: False

    Run haddock on all executable programs.

.. cfg-field:: haddock-tests: boolean
               --haddock-tests
    :synopsis: Generate documentation for tests.

    :default: False

    Run haddock on all test suites.

.. cfg-field:: haddock-benchmarks: boolean
               --haddock-benchmarks
    :synopsis: Generate documentation for benchmarks.

    :default: False

    Run haddock on all benchmarks.

.. cfg-field:: haddock-internal: boolean
               --haddock-internal
    :synopsis: Generate documentation for internal modules

    :default: False

    Build haddock documentation which includes unexposed modules and
    symbols.

.. cfg-field:: haddock-all: boolean
               --haddock-all
    :synopsis: Generate documentation for everything

    :default: False

    Run haddock on all components.

.. cfg-field:: haddock-css: PATH
               --haddock-css=PATH
    :synopsis: Location of Haddock CSS file.

    The CSS file that should be used to style the generated
    documentation (overriding haddock's default).

.. cfg-field:: haddock-hyperlink-source: boolean
               --haddock-hyperlink-source
    :synopsis: Generate hyperlinked source code for documentation

    :default: False

    Generated hyperlinked source code using `HsColour`_, and have
    Haddock documentation link to it.
    This is equivalent to running ``haddock`` with the ``--hyperlinked-source`` flag.

.. cfg-field:: haddock-hscolour-css: PATH
               --haddock-hscolour-css=PATH
    :synopsis: Location of CSS file for HsColour

    The CSS file that should be used to style the generated hyperlinked
    source code (from `HsColour`_).

.. cfg-field:: haddock-contents-location: URL
               --haddock-contents-location=URL
    :synopsis: URL for contents page.

    A baked-in URL to be used as the location for the contents page.

.. cfg-field:: haddock-keep-temp-files: boolean
    :synopsis: Keep temporary Haddock files.

    Keep temporary files.

    There is no command line variant of this flag.

.. cfg-field:: haddock-output-dir: DIR
               --haddock-output-dir=DIR
    :synopsis: Generate haddock documentation into this directory.

    Generate haddock documentation into this directory instead of the default
    location next to other build products.

    This flag is provided as a technology preview and is subject to change in the
    next releases.

.. cfg-field:: open: boolean
               --open
    :synopsis: Open generated documentation in-browser.

    When generating HTML documentation, attempt to open it in a browser
    when complete. This will use ``xdg-open`` on Linux and BSD systems,
    ``open`` on macOS, and ``start`` on Windows.

Advanced global configuration options
-------------------------------------

.. cfg-field:: write-ghc-environment-files: always, never, or ghc8.4.4+
               --write-ghc-environment-files=always\|never\|ghc8.4.4+
    :synopsis: Whether a ``.ghc.environment`` should be created after a successful build.

    :default: ``never``

    Whether a `GHC package environment file <https://downloads.haskell.org/~ghc/master/users-guide/packages.html#package-environments>`_
    should be created after a successful build.

    Since Cabal 3.0, defaults to ``never``. Before that, defaulted to
    creating them only when compiling with GHC 8.4.4 and older (GHC
    8.4.4 `is the first version
    <https://gitlab.haskell.org/ghc/ghc/-/issues/13753>`_ that supports
    the ``-package-env -`` option that allows ignoring the package
    environment files).

.. cfg-field:: build-info: True, False
               --enable-build-info
               --disable-build-info
    :synopsis: Whether build information for each individual component should be
               written in a machine readable format.

    :default: ``False``

    Enable generation of build information for Cabal components. Contains very
    detailed information on how to build an individual component, such as
    compiler version, modules of a component and how to compile the component.

    The output format is in json, and the exact location can be discovered from
    ``plan.json``, where it is identified by ``build-info`` within the items in
    the ``install-plan``.
    Note, that this field in ``plan.json`` can be ``null``, if and only if
    ``build-type: Custom`` is set, and the ``Cabal`` version is too
    old (i.e. ``< 3.7``).
    If the field is missing entirely, the component is not a local one, thus,
    no ``build-info`` exists for that particular component within the
    ``install-plan``.

    .. note::
        The format and fields of the generated build information is currently experimental,
        in the future we might add or remove fields, depending on the needs of other tooling.

.. _cmdoption-http-transport:
.. cfg-field:: http-transport: curl, wget, powershell, or plain-http
               --http-transport=transport
    :synopsis: Transport to use with http(s) requests.

    :default: ``curl``

    Set a transport to be used when making http(s) requests.

    The command line variant of this field is ``--http-transport=curl``.

    If the project configuration imports remote urls, the user can only specify
    the http-transport option from the command line.

    When specifying the http-transport from the command line, the program
    search path can only be influenced using :ref:`--extra-prog-path<cmdoption-extra-prog-path>`.

.. cfg-field:: ignore-expiry: boolean
               --ignore-expiry
    :synopsis: Ignore Hackage expiration dates.

    :default: False

    If ``True``, we will ignore expiry dates on metadata from Hackage.

    In general, you should not set this to ``True`` as it will leave you
    vulnerable to stale cache attacks. However, it may be temporarily
    useful if the main Hackage server is down, and we need to rely on
    mirrors which have not been updated for longer than the expiry
    period on the timestamp.

    The command line variant of this field is ``--ignore-expiry``.

.. cfg-field:: remote-repo-cache: directory
               --remote-repo-cache=DIR
    :synopsis: Location of packages cache.

    :default: ``~/.cabal/packages``

    The location where packages downloaded from remote repositories will be
    cached.

    The command line variant of this flag is
    ``--remote-repo-cache=DIR``.

.. cfg-field:: logs-dir: directory
               --logs-dir=DIR
    :synopsis: Directory to store build logs.

    :default: ``~/.cabal/logs``

    :strike:`The location where build logs for packages are stored.`
    Not implemented yet.

    The command line variant of this flag is ``--logs-dir=DIR``.

.. cfg-field:: build-summary: template filepath
               --build-summary=TEMPLATE
    :synopsis: Build summaries location.

    :default: ``~/.cabal/logs/build.log``

    :strike:`The file to save build summaries.` Not implemented yet.

    Valid variables which can be used in the path are ``$pkgid``,
    ``$compiler``, ``$os`` and ``$arch``.

    The command line variant of this flag is
    ``--build-summary=TEMPLATE``.

Undocumented fields: ``root-cmd``, ``symlink-bindir``, ``build-log``,
``remote-build-reporting``, ``report-planned-failure``, ``offline``.

Advanced solver options
^^^^^^^^^^^^^^^^^^^^^^^

Most users generally won't need these.

.. cfg-field:: solver: SOLVER
               --solver=SOLVER
    :synopsis: Which solver to use.

    This field is reserved to allow the specification of alternative
    dependency solvers. At the moment, the only accepted option is
    ``modular``.

    The command line variant of this field is ``--solver=modular``.

.. cfg-field:: max-backjumps: nat
               --max-backjumps=N
    :synopsis: Maximum number of solver backjumps.

    :default: 4000

    Maximum number of backjumps (backtracking multiple steps) allowed
    while solving. Set -1 to allow unlimited backtracking, and 0 to
    disable backtracking completely.

    The command line variant of this field is ``--max-backjumps=4000``.

.. cfg-field:: reorder-goals: boolean
               --reorder-goals
               --no-reorder-goals
    :synopsis: Allow solver to reorder goals.

    :default: False

    When enabled, the solver will reorder goals according to certain
    heuristics. Slows things down on average, but may make backtracking
    faster for some packages. It's unlikely to help for small projects,
    but for big install plans it may help you find a plan when otherwise
    this is not possible. See :issue:`1780` for more commentary.

    The command line variant of this field is ``--(no-)reorder-goals``.

.. cfg-field:: count-conflicts: boolean
               --count-conflicts
               --no-count-conflicts
    :synopsis: Solver prefers versions with less conflicts.

    :default: True

    Try to speed up solving by preferring goals that are involved in a
    lot of conflicts.

    The command line variant of this field is
    ``--(no-)count-conflicts``.

.. cfg-field:: fine-grained-conflicts: boolean
               --fine-grained-conflicts
               --no-fine-grained-conflicts
    :synopsis: Skip a version of a package if it does not resolve any conflicts
               encountered in the last version (solver optimization).

    :default: True

    When enabled, the solver will skip a version of a package if it does not
    resolve any of the conflicts encountered in the last version of that
    package. For example, if ``foo-1.2`` depended on ``bar``, and the solver
    couldn't find consistent versions for ``bar``'s dependencies, then the
    solver would skip ``foo-1.1`` if it also depended on ``bar``.

    The command line variant of this field is
    ``--(no-)fine-grained-conflicts``.

.. cfg-field:: minimize-conflict-set: boolean
               --minimize-conflict-set
               --no-minimize-conflict-set
    :synopsis: Try to improve the solver error message when there is no
               solution.

    :default: False

    When there is no solution, try to improve the solver error message
    by finding a minimal conflict set. This option may increase run
    time significantly, so it is off by default.

    The command line variant of this field is
    ``--(no-)minimize-conflict-set``.

.. cfg-field:: strong-flags: boolean
               --strong-flags
               --no-strong-flags
    :synopsis: Do not defer flag choices when solving.

    :default: False

    Do not defer flag choices. (TODO: Better documentation.)

    The command line variant of this field is ``--(no-)strong-flags``.

.. cfg-field:: allow-boot-library-installs: boolean
               --allow-boot-library-installs
               --no-allow-boot-library-installs
    :synopsis: Allow cabal to install or upgrade any package.

    :default: False

    By default, the dependency solver doesn't allow ``base``,
    ``ghc-prim``, ``integer-simple``, ``integer-gmp``, and
    ``template-haskell`` to be installed or upgraded. This flag
    removes the restriction.

    The command line variant of this field is
    ``--(no-)allow-boot-library-installs``.

.. cfg-field:: cabal-lib-version: VERSION
               --cabal-lib-version=VERSION
    :synopsis: Version of Cabal library used to build package.

    This field selects the version of the Cabal library which should be
    used to build packages. This option is intended primarily for
    internal development use (e.g., forcing a package to build with a
    newer version of Cabal, to test a new version of Cabal.) (TODO:
    Specify its semantics more clearly.)

    The command line variant of this field is
    ``--cabal-lib-version=1.24.0.1``.

.. cfg-field:: prefer-oldest: boolean
               --prefer-oldest
               --no-prefer-oldest
    :synopsis: Prefer the oldest versions of packages available.
    :since:    3.10

    :default:  False

    By default, when solver has a choice of multiple versions of the same
    package, it will first try to derive a build plan with the latest
    version. This flag switches the behaviour, making the solver
    to prefer the oldest packages available.

    The primary use case is to help users in establishing lower bounds
    of upstream dependencies.

    The command line variant of this field is ``--(no-)prefer-oldest``.

.. include:: references.inc



===================================================
/. 🚀 ./cabal-config-and-commands.rst
===================================================

cabal-install Configuration and Commands
****************************************

.. toctree::
   config
   cabal-commands


===================================================
/. 🚀 ./config.rst
===================================================

Configuration
=============

.. highlight:: cabal

Overview
--------

The global configuration file for ``cabal-install`` is by default
``$XDG_CONFIG_HOME/cabal/config``. If you do not have this file, ``cabal`` will create
it for you on the first call to ``cabal update``
(details see `configuration file discovery`_).
Alternatively, you can explicitly ask ``cabal`` to create it for you using

.. code-block:: console

    $ cabal user-config update

You can change the location of the global configuration file by specifying
either ``--config-file=FILE`` on the command line or by setting the
``CABAL_CONFIG`` or ``CABAL_DIR`` environment variable.

Most of the options in this configuration file are also available as
command line arguments, and the corresponding documentation can be used
to lookup their meaning. The created configuration file only specifies
values for a handful of options. Most options are left at their default
value, which it documents; for instance,

::

    -- executable-stripping: True

means that the configuration file currently does not specify a value for
the ``executable-stripping`` option (the line is commented out), and
that the default is ``True``; if you wanted to disable stripping of
executables by default, you would change this line to

::

    executable-stripping: False

You can also use ``cabal user-config update`` to migrate configuration
files created by older versions of ``cabal``.

Environment variables
---------------------

Various environment variables affect ``cabal-install``.

``CABAL_CONFIG``
   The variable to find global configuration file.

``CABAL_DIR``

   If set, *all* ``cabal-install`` content files will be stored as
   subdirectories of this directory, including the configuration file
   if ``CABAL_CONFIG`` is unset.  If ``CABAL_DIR`` is unset, Cabal
   will store data files according to the XDG Base Directory
   Specification (see `directories`_).

   .. note::

       For backwards compatibility, if the directory ``~/.cabal`` on
       Unix or ``%APPDATA%\cabal`` on Windows exists, and
       ``$XDG_CONFIG_HOME/cabal/config`` does not exist, and
       ``CABAL_DIR`` is unset, ``cabal-install`` will behave as if
       ``CABAL_DIR`` was set to point at this directory.

``CABAL_BUILDDIR``

    The override for default ``dist`` build directory.
    Note, the nix-style builds build directory (``dist-newstyle``)
    is not affected by this environment variable.

.. _config-file-discovery:

Configuration file discovery
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The configuration file location is determined as follows:

1. If option ``--config-file`` is given, use it;
2. otherwise, if ``$CABAL_CONFIG`` is set use it;
3. otherwise, if ``$CABAL_DIR`` is set use ``$CABAL_DIR/config``;
4. otherwise use ``config`` in ``$XDG_CONFIG_HOME/cabal``, which
   defaults to ``~/.config/cabal`` on Unix.

If the configuration file does not exist, and it was not given
explicitly via ``--config-file`` or ``$CABAL_CONFIG``, then
``cabal-install`` will generate the default one, with directories
based on ``$CABAL_DIR`` (if set) or according to the XDG Base
Directory Specification, as listed below.

.. _directories:

Directories
-----------

Unless the ``CABAL_DIR`` environment variable is set or a ``~/.cabal``
directory exists, Cabal will by default store data in directories
according to the XDG Base Directory Specification.  The following
directories are used unless otherwise specified in the configuration
file:

* ``$XDG_CONFIG_HOME/cabal`` for the main configuration file.
  Defaults to ``~/.config/cabal`` on Unix, and ``%APPDATA%/cabal`` on
  Windows.  Overridden by the ``CABAL_CONFIG`` environment variable if
  set.

* ``$XDG_CACHE_HOME/cabal`` for downloaded packages and script
  executables.  Defaults to ``~/.cache/cabal`` on Unix, and
  ``%LOCALAPPDATA%/cabal`` on Windows.  You can delete this directory
  and expect that its contents will be reconstructed as needed.

* ``$XDG_STATE_HOME/cabal`` for compiled libraries and other stateful
  artifacts, including the Cabal store.  Defaults to
  ``~/.local/state/cabal`` on Unix and ``%LOCALAPPDATA%/cabal`` on
  Windows.  Deleting this directory might cause installed programs to
  stop working.

* ``~/.local/bin`` for executables installed with ``cabal install``.

You can run ``cabal path`` to see a list of the directories that
``cabal`` will use with the active configuration.

Repository specification
------------------------

An important part of the configuration is the specification of the
repository. When ``cabal`` creates a default config file, it configures
the repository to be the central Hackage server:

::

    repository hackage.haskell.org
      url: http://hackage.haskell.org/

The name of the repository is given on the first line, and can be
anything; packages downloaded from this repository will be cached under
``$XDG_CACHE_HOME/cabal/packages/hackage.haskell.org`` (or whatever name you specify;
you can change the prefix by changing the value of
:cfg-field:`remote-repo-cache`). If you want, you can configure multiple
repositories, and ``cabal`` will combine them and be able to download
packages from any of them.

Using secure repositories
^^^^^^^^^^^^^^^^^^^^^^^^^

When interacting with ``hackage.haskell.org``, Cabal always runs in secure mode
with standard root keys, so it is not necessary to specify ``secure`` or
``root-keys``. If no repositories are listed, Cabal will default to
``hackage.haskell.org``.

For non-Hackage repositories that support the TUF security infrastructure you
can enable secure access to the repository by specifying:

::

    repository packages.example.org
      url: http://packages.example.org/
      secure: True
      root-keys: <root-key-IDs>
      key-threshold: <key-threshold>

The ``<root-key-IDs>`` and ``<key-threshold>`` values are used for
bootstrapping. As part of the TUF infrastructure the repository will
contain a file ``root.json`` (for instance,
http://hackage.haskell.org/root.json) which the client needs to do
verification. However, how can ``cabal`` verify the ``root.json`` file
*itself*? This is known as bootstrapping: if you specify a list of root
key IDs and a corresponding threshold, ``cabal`` will verify that the
downloaded ``root.json`` file has been signed with at least
``<key-threshold>`` keys from your set of ``<root-key-IDs>``.

You can, but are not recommended to, omit these two fields. In that case
``cabal`` will download the ``root.json`` field and use it without
verification. Although this bootstrapping step is then unsafe, all
subsequent access is secure (provided that the downloaded ``root.json``
was not tampered with). Of course, adding ``root-keys`` and
``key-threshold`` to your repository specification only shifts the
problem, because now you somehow need to make sure that the key IDs you
received were the right ones. How that is done is however outside the
scope of ``cabal`` proper.

More information about the security infrastructure can be found at
https://github.com/haskell/hackage-security.

Local no-index repositories
^^^^^^^^^^^^^^^^^^^^^^^^^^^

It's possible to use a directory of `.tar.gz` package files as a local package
repository.

::

    repository my-local-repository
      url: file+noindex:///absolute/path/to/directory

``cabal`` will construct the index automatically from the
``package-name-version.tar.gz`` files in the directory, and will use optional
corresponding ``package-name-version.cabal`` files as new revisions.

For example, if ``/absolute/path/to/directory`` looks like
::

    /absolute/path/to/directory/
        foo-0.1.0.0.tar.gz
        bar-0.2.0.0.tar.gz
        bar-0.2.0.0.cabal

then ``cabal`` will create an index with two packages: 

- ``foo-0.1.0.0`` using the source and ``.cabal`` file inside
  ``foo-0.1.0.0.tar.gz``
- ``bar-0.2.0.0`` using the source inside ``bar-0.2.0.0.tar.gz``
  and ``bar-0.2.0.0.cabal``

The index is cached inside the given directory. If the directory is not
writable, you can append ``#shared-cache`` fragment to the URI,
then the cache will be stored inside the :cfg-field:`remote-repo-cache` directory.
The part of the path will be used to determine the cache key part.

.. note::
    ``cabal-install`` creates a ``.cache`` file, and will aggressively use
    its contents if it exists. Therefore if you change the contents of
    the directory, remember to wipe the cache too.

.. note::
    The URI scheme ``file:`` is interpreted as a remote repository,
    as described in the previous sections, thus requiring manual construction
    of ``01-index.tar`` file.

It is possible to define ``preferred-versions``, containing additional version constraints
for deprecating or preferring certain package versions, in the given directory.

For example, if ``/absolute/path/to/directory`` looks like
::

    /absolute/path/to/directory/
        foo-0.1.0.0.tar.gz
        bar-0.2.0.0.tar.gz
        preferred-versions

then package deprecations and preferences will be taken into account by the solver.

The contents of ``preferred-versions`` is a list of package version constraints, e.g.
::

    binary < 0.8.0.0 || > 0.8.0.0
    text == 1.2.0.0

thus, looks similar to a ``package-name.cabal``'s ``build-depends`` section.

.. note::
    The ``preferred-versions`` file can be used to restrict the package set from Hackage, by preferring
    certain versions or marking a specific version as deprecated. To achieve this, add a
    local no-index repository to your :ref:`configuration file <config-file-discovery>`,
    where the directory contains your custom
    ``preferred-versions``. After running ``cabal update``, all ``cabal`` operations will honour the
    configuration.

Legacy repositories
^^^^^^^^^^^^^^^^^^^

Currently ``cabal`` supports single kind of “legacy” repositories.
It is specified using

::

    remote-repo: hackage.haskell.org:http://hackage.haskell.org/packages/archive

This is just syntactic sugar for 

::

    repository hackage.haskell.org
      url: http://hackage.haskell.org/packages/archive

although, in (and only in) the specific case of Hackage, the URL
``http://hackage.haskell.org/packages/archive`` will be silently
translated to ``http://hackage.haskell.org/``.

Secure local repositories
^^^^^^^^^^^^^^^^^^^^^^^^^

If you want to use repositories on your local file system, it is
recommended instead to use a *secure* local repository:

::

    repository my-local-repo
      url: file:/path/to/local/repo
      secure: True
      root-keys: <root-key-IDs>
      key-threshold: <key-threshold>

The layout of these secure local repos matches the layout of remote
repositories exactly; the :hackage-pkg:`hackage-repo-tool`
can be used to create and manage such repositories.

===================================================
/. 🚀 ./cabal-commands.rst
===================================================

Commands
========

``cabal help`` groups commands into :ref:`global<command-group-global>`,
:ref:`database<command-group-database>`, :ref:`init<command-group-init>`,
:ref:`configure<command-group-config>`, :ref:`build<command-group-build>`,
:ref:`run<command-group-run>` and :ref:`ship<command-group-ship>` sections.

::

    $ cabal help
    Command line interface to the Haskell Cabal infrastructure.

    See http://www.haskell.org/cabal/ for more information.

    Usage: cabal [GLOBAL FLAGS] [COMMAND [FLAGS]]

    Commands:
     [global]
      user-config            Display and update the user's global cabal configuration.
      help                   Help about commands.
      path                   Display paths used by cabal.

     [package database]
      update                 Updates list of known packages.
      list                   List packages matching a search string.
      info                   Display detailed information about a particular package.

     [initialization and download]
      init                   Create a new cabal package.
      fetch                  Downloads packages for later installation.
      get                    Download/Extract a package's source code (repository).

     [project configuration]
      configure              Add extra project configuration.
      freeze                 Freeze dependencies.
      gen-bounds             Generate dependency bounds.
      outdated               Check for outdated dependencies.

     [project building and installing]
      build                  Compile targets within the project.
      install                Install packages.
      haddock                Build Haddock documentation.
      haddock-project        Generate Haddocks HTML documentation for the cabal project.
      clean                  Clean the package store and remove temporary files.

     [running and testing]
      list-bin               List the path to a single executable.
      repl                   Open an interactive session for the given component.
      run                    Run an executable.
      bench                  Run benchmarks.
      test                   Run test-suites.
      exec                   Give a command access to the store.

     [sanity checks and shipping]
      check                  Check the package for common mistakes.
      sdist                  Generate a source distribution file (.tar.gz).
      upload                 Uploads source packages or documentation to Hackage.
      report                 Upload build reports to a remote server.

     [deprecated]
      unpack                 Deprecated alias for 'get'.
      hscolour               Generate HsColour colourised code, in HTML format.

     [new-style projects (forwards-compatible aliases)]
      Since cabal-install-3.0.0.0, all 'v2-' prefixed names of commands are just
      aliases for the simple unprefixed names.  So v2-build is an alias for
      build, v2-install for install and so on.

     [legacy command aliases]
      No legacy commands are described.

Common Arguments and Flags
--------------------------

Arguments and flags common to some or all commands are:


.. option:: --default-user-config=file

    Allows a "default" ``cabal.config`` freeze file to be passed in
    manually. This file will only be used if one does not exist in the
    project directory already. Typically, this can be set from the
    global cabal ``config`` file so as to provide a default set of
    partial constraints to be used by projects, providing a way for
    users to peg themselves to stable package collections.


.. option:: --allow-newer[=DEPS], --allow-older[=DEPS]

    Selectively relax upper or lower bounds in dependencies without
    editing the package description respectively.

    The following description focuses on upper bounds and the
    :option:`--allow-newer` flag, but applies analogously to
    :option:`--allow-older` and lower bounds. :option:`--allow-newer`
    and :option:`--allow-older` can be used at the same time.

    If you want to install a package A that depends on B >= 1.0 && <
    2.0, but you have the version 2.0 of B installed, you can compile A
    against B 2.0 by using ``cabal install --allow-newer=B A``. This
    works for the whole package index: if A also depends on C that in
    turn depends on B < 2.0, C's dependency on B will be also relaxed.

    Example:

    ::

        $ cd foo
        $ cabal configure
        Resolving dependencies...
        cabal: Could not resolve dependencies:
        [...]
        $ cabal configure --allow-newer
        Resolving dependencies...
        Configuring foo...

    Additional examples:

    ::

        # Relax upper bounds in all dependencies.
        $ cabal install --allow-newer foo

        # Relax upper bounds only in dependencies on bar, baz and quux.
        $ cabal install --allow-newer=bar,baz,quux foo

        # Relax the upper bound on bar and force bar==2.1.
        $ cabal install --allow-newer=bar --constraint="bar==2.1" foo

    It's also possible to limit the scope of :option:`--allow-newer` to single
    packages with the ``--allow-newer=scope:dep`` syntax. This means
    that the dependency on ``dep`` will be relaxed only for the package
    ``scope``.

    Example:

    ::

        # Relax upper bound in foo's dependency on base; also relax upper bound in
        # every package's dependency on lens.
        $ cabal install --allow-newer=foo:base,lens

        # Relax upper bounds in foo's dependency on base and bar's dependency
        # on time; also relax the upper bound in the dependency on lens specified by
        # any package.
        $ cabal install --allow-newer=foo:base,lens --allow-newer=bar:time

    Finally, one can enable :option:`--allow-newer` permanently by setting
    ``allow-newer: True`` in the :ref:`config file <config-file-discovery>`. Enabling
    'allow-newer' selectively is also supported in the config file
    (``allow-newer: foo, bar, baz:base``).

.. option:: --preference=CONSTRAINT

    Specify a soft constraint on versions of a package. The solver will
    attempt to satisfy these preferences on a "best-effort" basis.

.. option:: --enable-build-info

    Generate accurate build information for build components.

    Information contains meta information, such as component type, compiler type, and
    Cabal library version used during the build, but also fine grained information,
    such as dependencies, what modules are part of the component, etc...

    On build, a file ``build-info.json`` (in the ``json`` format) will be written to
    the root of the build directory.

    .. note::
        The format and fields of the generated build information is currently
        experimental. In the future we might add or remove fields, depending
        on the needs of other tooling.

    .. code-block:: json

        {
            "cabal-lib-version": "<cabal lib version>",
            "compiler": {
                "flavour": "<compiler name>",
                "compiler-id": "<compiler id>",
                "path": "<absolute path of the compiler>"
            },
            "components": [
                {
                "type": "<component type, e.g. lib | bench | exe | flib | test>",
                "name": "<component name>",
                "unit-id": "<unitid>",
                "compiler-args": [
                    "<compiler args necessary for compilation>"
                ],
                "modules": [
                    "<modules in this component>"
                ],
                "src-files": [
                    "<source files relative to hs-src-dirs>"
                ],
                "hs-src-dirs": [
                    "<source directories of this component>"
                ],
                "src-dir": "<root directory of this component>",
                "cabal-file": "<cabal file location>"
                }
            ]
        }

    .. jsonschema:: ./json-schemas/build-info.schema.json

.. option:: --disable-build-info

    (default) Do not generate detailed build information for built components.

    Already generated `build-info.json` files will be removed since they would be stale otherwise.

Target Forms
------------

A cabal command target can take any of the following forms:

-  A package target: ``[pkg:]package``, which specifies that all enabled
   components of a package to be built. By default, test suites and
   benchmarks are *not* enabled, unless they are explicitly requested
   (e.g., via ``--enable-tests``.)

-  A component target: ``[package:][ctype:]component``, which specifies
   a specific component (e.g., a library, executable, test suite or
   benchmark) to be built.

-  All packages: ``all``, which specifies all packages within the project.

-  Components of a particular type: ``package:ctypes``, ``all:ctypes``:
   which specifies all components of the given type. Where valid
   ``ctypes`` are:

     - ``libs``, ``libraries``,
     - ``flibs``, ``foreign-libraries``,
     - ``exes``, ``executables``,
     - ``tests``,
     - ``benches``, ``benchmarks``.

-  A module target: ``[package:][ctype:]module``, which specifies that the
   component of which the given module is a part of will be built.

-  A filepath target: ``[package:][ctype:]filepath``, which specifies that the
   component of which the given filepath is a part of will be built.

-  A script target: ``path/to/script``, which specifies the path to a script
   file. This is supported by ``build``, ``repl``, ``run``, and ``clean``.
   Script targets are not part of a package.

.. _command-group-global:

Global commands
---------------

cabal user-config
^^^^^^^^^^^^^^^^^

``cabal user-config [init|diff|update]`` prints and updates user's global
cabal preferences. It is very useful when you are e.g. first configuring
``cabal`` on a new machine.

- ``cabal user-config init`` creates a new configuration file.

  .. option:: --config-file=PATH

      Specify config file path. (default: ``~/.cabal/config``).

  .. option:: -f, --force

    Force configuration file overwriting if already exists.

- ``cabal user-config diff`` prints a diff of the user's config file and the
  default one.

- ``cabal user-config update`` updates the user's config file with additional
  lines.

  .. option:: -a CONFIGLINE or -aCONFIGLINE, --augment=CONFIGLINE

      Pass additional configuration lines to be incorporated in the
      config file. e.g.
      ``cabal user-config update --augment="offline: True"``.

      Note how ``--augment`` syntax follows ``cabal user-config diff``
      output.

cabal path
^^^^^^^^^^

``cabal path`` prints the file system paths used by ``cabal`` for
cache, store, installed binaries, and so on. When run without any
options, it will show all paths, labeled with how they are namen in
the configuration file:

::
   $ cabal path
   cache-dir: /home/haskell/.cache/cabal/packages
   logs-dir: /home/haskell/.cache/cabal/logs
   store-dir: /home/haskell/.local/state/cabal/store
   config-file: /home/haskell/.config/cabal/config
   installdir: /home/haskell/.local/bin
   ...

If ``cabal path`` is passed a single option naming a path, then that
path will be printed *without* any label:

::

   $ cabal path --installdir
   /home/haskell/.local/bin

This is a stable interface and is intended to be used for scripting.
For example:

::
   $ ls $(cabal path --installdir)
   ...

.. _command-group-database:

Package database commands
-------------------------

cabal update
^^^^^^^^^^^^

``cabal update`` updates the state of the package index. If the
project contains multiple remote package repositories it will update
the index of all of them (e.g. when using overlays).

Some examples: 

::

    $ cabal update                  # update all remote repos
    $ cabal update head.hackage     # update only head.hackage

cabal list
^^^^^^^^^^

``cabal list [FLAGS] STRINGS`` lists all packages matching a search string.

.. option::  --installed

    Only output installed packages.

.. option::  --simple-output

    Print matching packages in a one-package-one-line format.

.. option::  -i, --ignore-case

.. option::  -I, --strict-case

.. option:: --package-db=DB

    Append the given package database to the list of used package
    databases. See `cabal info`_ for a thorough explanation.

.. option:: -w PATH or -wPATH, --with-compiler=PATH

    Path to specific compiler.

cabal info
^^^^^^^^^^

``cabal info [FLAGS] PACKAGES`` displays useful informations about remote
packages.

.. option:: --package-db=DB

    Append the given package database to the list of package databases
    used (to satisfy dependencies and register into). May be a specific
    file, ``global`` or ``user``. The initial list is ``['global'], ['global',
    'user']``, depending on context. Use ``clear`` to reset the list to empty.

.. _command-group-init:

Initialization and download
---------------------------

cabal init
^^^^^^^^^^

``cabal init [FLAGS]`` initialises a Cabal package, picking
reasonable defaults. Run it in your project folder.

.. option:: -i, --interactive

    Enable interactive mode.

.. option:: -m, --minimal

    Generate a short .cabal file, without extra empty fields or
    explanatory comments.

See :ref:`init quickstart` for an overview on the command, and
``cabal init --help`` for the complete list of options.

cabal fetch
^^^^^^^^^^^

*☞ N.B.:* ``cabal fetch`` only works for legacy ``v1-`` commands and only
for single package projects. If you are not maintaining an old project,
`cabal build`_ with ``--only-download`` has similar effects to ``fetch``
and benefits from compatibility with newer build methods.

``cabal fetch [FLAGS] PACKAGES`` downloads packages for later installation.
It fetches the project plus its dependencies, very useful when
e.g. you plan to work on a project with unreliable or no internet access.

.. option:: --no-dependencies

    Ignore dependencies.

.. option:: --disable-tests

    Disable dependency checking and compilation
    for test suites listed in the package
    description file.

.. option::  --disable-benchmarks

    Disable dependency checking and compilation
    for benchmarks listed in the package
    description file.

Check ``cabal fetch --help`` for a complete list of options.

cabal get
^^^^^^^^^

``cabal get [FLAGS] [PACKAGES]`` (synonym: ``cabal unpack``) downloads and unpacks
the source code of ``PACKAGES`` locally. By default the content of the
packages is unpacked in the current working directory, in named subfolders
(e.g.  ``./filepath-1.2.0.8/``), use ``--destdir=PATH`` to specify another
folder. By default the latest version of the package is downloaded, you can
ask for a spefic one by adding version numbers
(``cabal get random-1.0.0.1``).

The ``cabal get`` command supports the following options:

.. option:: -s[[head|this|...]], --source-repository[=[head|this|...]]

    Clone the package's source repository (Darcs, Git, etc.)
    instead of downloading the tarball. Only works if the
    package specifies a ``source-repository``.

.. option:: --index-state=STATE

    Pin your request to a specific Hackage index state. Available
    ``STATE`` formats: Unix timestamps (e.g. ``@1474732068``),
    ISO8601 UTC timestamps (e.g. ``2016-09-24T17:47:48Z``), or ``HEAD``
    (default).
    This determines which package versions are available as well as which
    ``.cabal`` file revision is selected (unless ``--pristine`` is used).

.. option:: --pristine

    Unpacks the pristine tarball, i.e. disregarding any Hackage revision.

.. option:: -d, --destdir=PATH

    Where to place the package source, defaults to (a subdirectory of)
    the current directory.

.. option:: --only-package-description, --package-description-only

    Unpack the original pristine tarball, rather than updating the
    ``.cabal`` file with the latest revision from the package archive.


.. _command-group-config:

Project configuration
---------------------

cabal configure
^^^^^^^^^^^^^^^

``cabal configure`` takes a set of arguments and writes a
``cabal.project.local`` file based on the flags passed to this command.
``cabal configure FLAGS; cabal build`` is roughly equivalent to
``cabal build FLAGS``, except that with ``configure`` the flags
are persisted to all subsequent calls to ``build``.

``cabal configure`` is intended to be a convenient way to write out
a ``cabal.project.local`` for simple configurations; e.g.,
``cabal configure -w ghc-7.8`` would ensure that all subsequent
builds with ``cabal build`` are performed with the compiler
``ghc-7.8``. For more complex configuration, we recommend writing the
``cabal.project.local`` file directly (or placing it in
``cabal.project``!)

``cabal configure`` inherits options from ``Cabal``. semantics:

-  Any flag accepted by ``./Setup configure``.

-  Any flag accepted by ``cabal configure`` beyond
   ``./Setup configure``, namely ``--cabal-lib-version``,
   ``--constraint``, ``--preference`` and ``--solver.``

-  Any flag accepted by ``cabal install`` beyond ``./Setup configure``.

-  Any flag accepted by ``./Setup haddock``.

The options of all of these flags apply only to *local* packages in a
project; this behavior is different than that of ``cabal install``,
which applies flags to every package that would be built. The motivation
for this is to avoid an innocuous addition to the flags of a package
resulting in a rebuild of every package in the store (which might need
to happen if a flag actually applied to every transitive dependency). To
apply options to an external package, use a ``package`` stanza in a
``cabal.project`` file.

There are two ways of modifying the ``cabal.project.local`` file through
``cabal configure``, either by appending new configurations to it, or
by simply overwriting it all. Overwriting is the default behaviour, as
such, there's a flag ``--enable-append`` to append the new configurations
instead. Since overwriting is rather destructive in nature, a backup system
is in place, which moves the old configuration to a ``cabal.project.local~``
file, this feature can also be disabled by using the ``--disable-backup``
flag.

cabal freeze
^^^^^^^^^^^^

If a package is built in several different environments, such as a
development environment, a staging environment and a production
environment, it may be necessary or desirable to ensure that the same
dependency versions are selected in each environment. This can be done
with the ``freeze`` command:

``cabal freeze`` writes out a **freeze file** which records all of
the versions and flags that are picked by the solver under the
current index and flags.  Default name of this file is
``cabal.project.freeze`` but in combination with a
``--project-file=my.project`` flag (see :ref:`project-file
<cmdoption-project-file>`)
the name will be ``my.project.freeze``.
A freeze file has the same syntax as ``cabal.project`` and looks
something like this:

.. highlight:: cabal

::

    constraints: HTTP ==4000.3.3,
                 HTTP +warp-tests -warn-as-error -network23 +network-uri -mtl1 -conduit10,
                 QuickCheck ==2.9.1,
                 QuickCheck +templatehaskell,
                 -- etc...


For end-user executables, it is recommended that you distribute the
``cabal.project.freeze`` file in your source repository so that all
users see a consistent set of dependencies. For libraries, this is not
recommended: users often need to build against different versions of
libraries than what you developed against.

cabal gen-bounds
^^^^^^^^^^^^^^^^

``cabal gen-bounds [FLAGS]`` generates bounds for all dependencies that do not
currently have them.  Generated bounds are printed to stdout. You can then
paste them into your .cabal file.
The generated bounds conform to the `Package Versioning Policy`_, which is
a recommended versioning system for publicly released Cabal packages.

.. code-block:: console

    $ cabal gen-bounds

For example, given the following dependencies without bounds specified in
:pkg-field:`build-depends`:

::

    build-depends:
      base,
      mtl,
      transformers,

``gen-bounds`` might suggest changing them to the following:

::

    build-depends:
      base          >= 4.15.0 && < 4.16,
      mtl           >= 2.2.2 && < 2.3,
      transformers  >= 0.5.6 && < 0.6,


cabal outdated
^^^^^^^^^^^^^^

``cabal outdated [FLAGS]`` checks for outdated dependencies in the package
description file or freeze file.

Manually updating dependency version bounds in a ``.cabal`` file or a
freeze file can be tedious, especially when there's a lot of
dependencies. The ``cabal outdated`` command is designed to help with
that. It will print a list of packages for which there is a new
version on Hackage that is outside the version bound specified in the
``build-depends`` field. The ``outdated`` command can also be
configured to act on the freeze file and
ignore major (or all) version bumps on Hackage for a subset of
dependencies.

Examples:

.. code-block:: console

    $ cd /some/package
    $ cabal outdated
    Outdated dependencies:
    haskell-src-exts <1.17 (latest: 1.19.1)
    language-javascript <0.6 (latest: 0.6.0.9)
    unix ==2.7.2.0 (latest: 2.7.2.1)

    $ cabal outdated --simple-output
    haskell-src-exts
    language-javascript
    unix

    $ cabal outdated --ignore=haskell-src-exts
    Outdated dependencies:
    language-javascript <0.6 (latest: 0.6.0.9)
    unix ==2.7.2.0 (latest: 2.7.2.1)

    $ cabal outdated --ignore=haskell-src-exts,language-javascript,unix
    All dependencies are up to date.

    $ cabal outdated --ignore=haskell-src-exts,language-javascript,unix -q
    $ echo $?
    0

    $ cd /some/other/package
    $ cabal outdated --freeze-file
    Outdated dependencies:
    HTTP ==4000.3.3 (latest: 4000.3.4)
    HUnit ==1.3.1.1 (latest: 1.5.0.0)

    $ cabal outdated --freeze-file --ignore=HTTP --minor=HUnit
    Outdated dependencies:
    HUnit ==1.3.1.1 (latest: 1.3.1.2)


``cabal outdated`` supports the following flags:

.. option:: --freeze-file

    Read dependency version bounds from the freeze file.

    (``cabal.config``) instead of the package description file
    (``$PACKAGENAME.cabal``).

.. option:: --v2-freeze-file

    :since: 2.4

    Read dependency version bounds from the v2-style freeze file
    (by default, ``cabal.project.freeze``) instead of the package
    description file. ``--new-freeze-file`` is an alias for this flag
    that can be used with pre-2.4 ``cabal``.

.. option:: --project-file=FILE

    :since: 2.4

    Read dependency version bounds from the v2-style freeze file
    related to the named project file (i.e., ``$PROJECTFILE.freeze``)
    instead of the package description file. If multiple ``--project-file``
    flags are provided, only the final one is considered. This flag
    must only be passed in when ``--new-freeze-file`` is present.

.. option:: --simple-output

    Print only the names of outdated dependencies, one per line.

.. option:: --exit-code

    Exit with a non-zero exit code when there are outdated dependencies.

.. option:: -q, --quiet

    Don't print any output. Implies ``-v0`` and ``--exit-code``.

.. option:: --ignore=PKGS

    Don't warn about outdated dependency version bounds for the packages in this list.

.. option:: --minor[PKGS]

    Ignore major version bumps for these packages.

    E.g. if there's a version 2.0 of a package ``pkg`` on Hackage and the freeze
    file specifies the constraint ``pkg == 1.9``, ``cabal outdated --freeze
    --minor=pkg`` will only consider the ``pkg`` outdated when there's a version
    of ``pkg`` on Hackage satisfying ``pkg > 1.9 && < 2.0``. ``--minor`` can also
    be used without arguments, in that case major version bumps are ignored for
    all packages.

.. _command-group-build:

Project building and installing
-------------------------------

cabal build
^^^^^^^^^^^

``cabal build`` takes a set of targets and builds them. It
automatically handles building and installing any dependencies of these
targets.

In component targets, ``package:`` and ``ctype:`` (valid component types
are ``lib``, ``flib``, ``exe``, ``test`` and ``bench``) can be used to
disambiguate when multiple packages define the same component, or the
same component name is used in a package (e.g., a package ``foo``
defines both an executable and library named ``foo``). We always prefer
interpreting a target as a package name rather than as a component name.

Some example targets: 

::

    $ cabal build lib:foo-pkg       # build the library named foo-pkg
    $ cabal build foo-pkg:foo-tests # build foo-tests in foo-pkg
    $ cabal build src/Lib.s         # build the library component to
                                       # which "src/Lib.hs" belongs
    $ cabal build app/Main.hs       # build the executable component of
                                       # "app/Main.hs"
    $ cabal build Lib               # build the library component to
                                       # which the module "Lib" belongs
    $ cabal build path/to/script    # build the script as an executable

Beyond a list of targets, ``cabal build`` accepts all the flags that
``cabal configure`` takes. Most of these flags are only taken into
consideration when building local packages; however, some flags may
cause extra store packages to be built (for example,
``--enable-profiling`` will automatically make sure profiling libraries
for all transitive dependencies are built and installed.)

When building a script, the executable is cached under the cabal directory.
See ``cabal run`` for more information on scripts.

In addition ``cabal build`` accepts these flags: 

.. option:: --only-configure

    When given we will forego performing a full build and abort after running
    the configure phase of each target package.

cabal install
^^^^^^^^^^^^^

``cabal install [FLAGS] [TARGETS]`` builds the specified target packages and
symlinks/copies their executables in ``installdir`` (usually ``~/.local/bin``).

.. warning::

  If not every package has an executable to install, use ``all:exes`` rather
  than ``all`` as the target. To overwrite an installation, use
  ``--overwrite-policy=always`` as the default policy is ``never``.

For example this command will build the latest ``cabal-install`` and symlink
its ``cabal`` executable:

::

    $ cabal install cabal-install

In addition, it's possible to use ``cabal install`` to install components
of a local project. For example, with an up-to-date Git clone of the Cabal
repository, this command will build cabal-install HEAD and symlink the
``cabal`` executable:

::

    $ cabal install exe:cabal

Where symlinking is not possible (eg. on some Windows versions) the ``copy``
method is used by default. You can specify the install method
by using ``--install-method`` flag:

::

    $ cabal install exe:cabal --install-method=copy --installdir=$HOME/bin

Note that copied executables are not self-contained, since they might use
data-files from the store.

.. _adding-libraries:

Adding libraries to GHC package environments
""""""""""""""""""""""""""""""""""""""""""""

It is also possible to "install" libraries using the ``--lib`` flag. For
example, this command will build the latest Cabal library and install it:

::

    $ cabal install --lib Cabal

This works by managing GHC package environment files. By default, it is writing
to the global environment in ``~/.ghc/$ARCH-$OS-$GHCVER/environments/default``.
``install`` provides the ``--package-env`` flag to control which of these
environments is modified.

This command will modify the environment file in the current directory:

::

    $ cabal install --lib Cabal --package-env .

This command will modify the environment file in the ``~/foo`` directory:

::

    $ cabal install --lib Cabal --package-env foo/

Do note that the results of the previous two commands will be overwritten by
the use of other style commands, so it is not recommended to use them inside
a project directory.

This command will modify the environment in the ``local.env`` file in the
current directory:

::

    $ cabal install --lib Cabal --package-env local.env

This command will modify the ``myenv`` named global environment:

::

    $ cabal install --lib Cabal --package-env myenv

If you wish to create a named environment file in the current directory where
the name does not contain an extension, you must reference it as ``./myenv``.

You can learn more about how to use these environments in `this section of the
GHC manual <https://downloads.haskell.org/~ghc/latest/docs/html/users_guide/packages.html#package-environments>`_.

cabal haddock
^^^^^^^^^^^^^

``cabal haddock [FLAGS] [TARGET]`` builds Haddock documentation for
the specified packages within the project.

If a target is not a library :cfg-field:`haddock-benchmarks`,
:cfg-field:`haddock-executables`, :cfg-field:`haddock-internal`,
:cfg-field:`haddock-tests` will be implied as necessary.

cabal haddock-project
^^^^^^^^^^^^^^^^^^^^^

``cabal haddock-project [FLAGS]`` builds Haddock documentation for all local
packages specified in the project.

By default the documentation will be put in ``./haddocks`` folder, this can be
modified with the ``--output`` flag.

This command supports two primary modes: building a self contained directory
(which is the default mode) or documentation that links to hackage (with
``--hackage`` flag).

In both cases the html index as well as quickjump index will include all terms
and types defined in any of the local packages, but not ones that are included
in any of the dependencies.  But note that if you navigate to a dependency,
you will have access to its quickjump index.

The generated landing page will contain one tree of all modules per local
package.

cabal clean
^^^^^^^^^^^

``cabal clean [FLAGS]`` cleans up the temporary files and build artifacts
stored in the ``dist-newstyle`` folder.

By default, it removes the entire folder, but it can also spare the configuration
and caches if the ``--save-config`` option is given, in which case it only removes
the build artefacts (``.hi``, ``.o`` along with any other temporary files generated
by the compiler, along with the build output).

``cabal clean [FLAGS] path/to/script`` cleans up the temporary files and build
artifacts for the script, which are stored under the .cabal/script-builds directory.

In addition when clean is invoked it will remove all script build artifacts for
which the corresponding script no longer exists.

.. _command-group-run:

Running and testing
-------------------

cabal list-bin
^^^^^^^^^^^^^^

``cabal list-bin`` will either (a) display the path for a single executable or (b)
complain that the target doesn't resolve to a single binary. In the latter case,
it will name the binary products contained in the package. These products can
be used to narrow the search and get an actual path to a particular executable.

Example showing a failure to resolve to a single executable.

::

    $ cabal list-bin cabal-install
    cabal: The list-bin command is for finding a single binary at once. The
    target 'cabal-install' refers to the package cabal-install-#.#.#.# which
    includes the executable 'cabal', the test suite 'unit-tests', the test suite
    'mem-use-tests', the test suite 'long-tests' and the test suite
    'integration-tests2'.

For a scope that results in only one item we'll get a path.

::

    $ cabal list-bin cabal-install:exes
    /.../dist-newstyle/build/.../cabal/cabal

    $ cabal list-bin cabal-install:cabal
    /.../dist-newstyle/build/.../cabal/cabal

We can also scope to test suite targets as they produce binaries.

::

    $ cabal list-bin cabal-install:tests
    cabal: The list-bin command is for finding a single binary at once. The
    target 'cabal-install:tests' refers to the test suites in the package
    cabal-install-#.#.#.# which includes the test suite 'unit-tests', the test
    suite 'mem-use-tests', the test suite 'long-tests' and the test suite
    'integration-tests2'.

    $ cabal list-bin cabal-install:unit-tests
    /.../dist-newstyle/.../unit-tests/unit-tests

Note that ``cabal list-bin`` will print the executables' location, but
will not make sure that these executables actually exist (i.e., have
been successfully built).  In order to determine the correct location,
it may invoke the configuration step (see ``cabal configure``).

cabal repl
^^^^^^^^^^

``cabal repl TARGET [FLAGS]``
opens an interactive session for the target component within the project and
loads all of the modules of the target into GHCi as interpreted bytecode.
The available targets are the same as for the ``build`` command: individual components
within packages in the project, including libraries, executables, test-suites
and benchmarks (see `the build section <#cabal-build>`__ for the target syntax).
Local packages can also be specified, in which case the library
component in the package will be used, or the (first listed) executable in the
package if there is no library. Dependencies are built or rebuilt as necessary.

Examples:

::

    $ cabal repl                # default component in the package in the current directory
    $ cabal repl pkgname        # default component in the package named 'pkgname'
    $ cabal repl ./pkgfoo       # default component in the package in the ./pkgfoo directory
    $ cabal repl cname          # component named 'cname'
    $ cabal repl pkgname:cname  # component 'cname' in the package 'pkgname'

Configuration flags can be specified on the command line and these extend the project
configuration from the 'cabal.project', 'cabal.project.local' and other files.

.. option:: --repl-options=FLAG

    To avoid ``ghci``-specific flags from triggering unneeded global rebuilds, these
    flags are stripped from the internal configuration. As a result,
    ``--ghc-options`` will no longer (reliably) work to pass flags to ``ghci`` (or
    other REPLs). Instead, you should use the ``--repl-options`` flag to
    specify these options to the invoked REPL.

.. option:: --repl-no-load

    Disables the loading of target modules at startup.

.. option:: -b DEPENDENCIES or -bDEPENDENCIES, --build-depends=DEPENDENCIES

    A way to experiment with libraries without needing to download
    them manually or to install them globally.

    This command opens a REPL with the current default target loaded, and a version
    of the ``vector`` package matching that specification exposed.

    ::

        $ cabal repl --build-depends="vector >= 0.12 && < 0.13"

    Both of these commands do the same thing as the above, but only expose ``base``,
    ``vector``, and the ``vector`` package's transitive dependencies even if the user
    is in a project context.

    ::

        $ cabal repl --ignore-project --build-depends="vector >= 0.12 && < 0.13"
        $ cabal repl --project='' --build-depends="vector >= 0.12 && < 0.13"

    This command would add ``vector``, but not (for example) ``primitive``, because
    it only includes the packages specified on the command line (and ``base``, which
    cannot be excluded for technical reasons).

    ::

        $ cabal repl --build-depends=vector --no-transitive-deps

``cabal repl`` can open scripts by passing the path to the script as the target.

::

    $ cabal repl path/to/script

The configuration information for the script is cached under the cabal directory
and can be pre-built with ``cabal build path/to/script``.
See ``cabal run`` for more information on scripts.

.. option:: --enable-multi-repl

    Allow starting GHCi with multiple targets.
    This requires GHC with multiple home unit support (GHC-9.4+)

    The closure of required components will be loaded.

.. option:: --disable-multi-repl

    Disallow starting GHCi with multiple targets. This reverts back to the behaviour
    in version 3.10 and earlier where only a single component can be loaded at
    once.

.. _cabal run:

cabal run
^^^^^^^^^

``cabal run [TARGET] [FLAGS] [-- EXECUTABLE_FLAGS]`` runs the executable
specified by the target, which can be a component, a package or can be left
blank, as long as it can uniquely identify an executable within the project.
Tests and benchmarks are also treated as executables.

See `the build section <#cabal-build>`__ for the target syntax.

When ``TARGET`` is one of the following: 

- A component target: execute the specified executable, benchmark or test suite.

- A package target:
   1. If the package has exactly one executable component, it will be selected.
   2. If the package has multiple executable components, an error is raised.
   3. If the package has exactly one test or benchmark component, it will be selected.
   4. Otherwise an issue is raised.

- The path to a script: execute the script at the path.

- Empty target: Same as package target, implicitly using the package from the current
  working directory.

Except in the case of the empty target, the strings after it will be
passed to the executable as arguments.

If one of the arguments starts with ``-`` it will be interpreted as
a cabal flag, so if you need to pass flags to the executable you
have to separate them with ``--``.

::

    $ cabal run target -- -a -bcd --argument

``run`` supports running script files that use a certain format.
Scripts look like:

::

    #!/usr/bin/env cabal
    {- cabal:
    build-depends: base ^>= 4.14
                , shelly ^>= 1.10
    -}
    {- project:
    with-compiler: ghc-8.10.7
    -}

    main :: IO ()
    main = do
        ...

Where there cabal metadata block is mandatory and contains fields from a
package executable block, and the project metadata block is optional and
contains fields that would be in the cabal.project file in a regular project.

Only some fields are supported in the metadata blocks, and these fields are
currently not validated. See
`#8024 <https://github.com/haskell/cabal/issues/8024>`__ for details.

A script can either be executed directly using `cabal` as an interpreter or
with the command:

::

    $ cabal run path/to/script

The executable is cached under the cabal directory, and can be pre-built with
``cabal build path/to/script`` and the cache can be removed with
``cabal clean path/to/script``.

A note on targets: Whenever a command takes a script target and it matches the
name of another target, the other target is preferred. To load the script
instead pass it as an explicit path: ./script

By default, scripts are run at silent verbosity (``--verbose=0``). To show the
build output for a script either use the command

::

    $ cabal run --verbose=n path/to/script

or the interpreter line 

::

    #!/usr/bin/env -S cabal run --verbose=n

For more information see :cfg-field:`verbose` 

cabal bench
^^^^^^^^^^^

``cabal bench [TARGETS] [FLAGS]`` runs the specified benchmarks
(all the benchmarks in the current package by default), first ensuring
they are up to date.

``cabal bench`` inherits flags of the ``bench`` subcommand of ``Setup.hs``,
:ref:`see the corresponding section <setup-bench>`.

cabal test
^^^^^^^^^^

``cabal test [TARGETS] [FLAGS]`` runs the specified test suites
(all the test suites in the current package by default), first ensuring
they are up to date.

``cabal test`` inherits flags of the ``test`` subcommand of ``Setup.hs``
(:ref:`see the corresponding section <setup-test>`) with one caveat: every
``Setup.hs test`` flag receives the ``test-`` prefix if it already does
not have one; e.g. ``--show-details`` becomes ``--test-show-details`` but
``--test-wrapper`` remains the same.

cabal exec
^^^^^^^^^^

``cabal exec [FLAGS] [--] COMMAND [--] [ARGS]`` runs the specified command
using the project's environment. That is, passing the right flags to compiler
invocations and bringing the project's executables into scope.

.. _command-group-ship:

Sanity checks and shipping
--------------------------

cabal check
^^^^^^^^^^^

``cabal check [FLAGS]`` checks the package for common mistakes (e.g.: if
it is missing important fields like ``synopsis``, if it is using
tricky GHC options, etc.).

Run ``cabal check`` in the folder where your ``.cabal`` package file is.

.. option:: -i, --ignore=WARNING

    Ignore a specific type of warning (e.g. ``--ignore=missing-upper-bounds``).
    Check the list of warnings for which constructor to use.

.. option:: -v[n], --verbose[=n]

    Control verbosity (n is 0--3, default verbosity level is 1).

Issues are classified as ``Warning``\s and ``Error``\s. The latter correspond
to Hackage requirements for uploaded packages: if no error is reported,
Hackage should accept your package. If errors are present ``cabal check``
exits with ``1`` and Hackage will refuse the package.

A list of all warnings with their constructor: 

- ``parser-warning``: inherited from parser.
- ``no-name-field``: missing ``name`` field.
- ``no-version-field``: missing ``version`` field.
- ``no-target``: missing target in ``.cabal``.
- ``unnamed-internal-library``: unnamed internal library.
- ``duplicate-sections``: duplicate name in target.
- ``illegal-library-name``: internal library with same name as package.
- ``no-modules-exposed``: no module exposed in library.
- ``signatures``: ``signatures`` used with ``cabal-version`` < 2.0.
- ``autogen-not-exposed``: ``autogen-module`` neither in ``exposed-modules`` nor ``other-modules``.
- ``autogen-not-included``: ``autogen-include`` neither in ``include`` nor ``install-includes``.
- ``no-main-is``: missing ``main-is``.
- ``unknown-extension-main``: ``main-is`` is not ``.hs`` nor ``.lhs``.
- ``c-like-main``: C-like source file in ``main-is`` with ``cabal-version`` < 1.18.
- ``autogen-other-modules``: ``autogen-module`` not in ``other-modules``.
- ``autogen-exe``: ``autogen-include`` not in ``includes``.
- ``unknown-testsuite-type``: unknown test-suite type.
- ``unsupported-testsuite``: unsupported test-suite type.
- ``unknown-bench``: unknown benchmark type.
- ``unsupported-bench``: unsupported benchmark type.
- ``bench-unknown-extension``: ``main-is`` for benchmark is neither ``.hs`` nor ``.lhs``.
- ``invalid-name-win``: invalid package name on Windows.
- ``reserved-z-prefix``: package with ``z-`` prexif (reseved for Cabal.
- ``no-build-type``: missing ``build-type``.
- ``undeclared-custom-setup``: ``custom-setup`` section without ``build-type: Custom``
- ``unknown-compiler-tested``: unknown compiler in ``tested-with``.
- ``unknown-languages``: unknown languages.
- ``unknown-extension``: unknown extensions.
- ``languages-as-extensions``: languages listed as extensions.
- ``deprecated-extensions``: deprecated extensions.
- ``no-category``: missing ``category`` field.
- ``no-maintainer``: missing ``maintainer`` field.
- ``no-synopsis``: missing ``synopsis`` field.
- ``no-description``: missing ``description`` field.
- ``no-syn-desc``: missing ``synopsis`` or ``description`` field.
- ``long-synopsis``: ``synopsis`` longer than 80 characters.
- ``short-description``: ``description`` shorter than ``synopsis``.
- ``invalid-range-tested``: invalid ``tested-with`` version range.
- ``impossible-dep``: impossible internal library version range dependency.
- ``impossible-dep-exe``: impossible internal executable version range dependency.
- ``no-internal-exe``: missing internal executable.
- ``license-none``: ``NONE`` in ``license`` field.
- ``no-license``: no ``license`` field.
- ``all-rights-reserved``: “All rights reserved” license.
- ``license-parse``: license not to be used with ``cabal-version`` < 1.4.
- ``unknown-license``: unknown license.
- ``bsd4-license``: uncommon BSD (BSD4) license.
- ``unknown-license-version``: unknown license version.
- ``no-license-file``: missing license file.
- ``unrecognised-repo-type``: unrecognised kind of source-repository.
- ``repo-no-type``: missing ``type`` in ``source-repository``.
- ``repo-no-location``: missing ``location`` in ``source-repository``.
- ``repo-no-module``: missing ``module`` in ``source-repository``.
- ``repo-no-tag``: missing ``tag`` in ``source-repository``.
- ``repo-relative-dir``: ``subdir`` in ``source-repository`` must be relative.
- ``repo-malformed-subdir``: malformed ``subdir`` in ``source-repository``.
- ``option-fasm``: unnecessary ``-fasm``.
- ``option-fhpc``: unnecessary ``-fhpc``.
- ``option-prof``: unnecessary ``-prof``.
- ``option-o``: unnecessary ``-o``.
- ``option-hide-package``: unnecessary ``-hide-package``.
- ``option-make``: unnecessary ``--make``.
- ``option-optimize``: unnecessary disable optimization flag.
- ``option-o1``: unnecessary optimisation flag (``-O1``).
- ``option-o2``: unnecessary optimisation flag (``-O2``).
- ``option-split-section``: unnecessary ``-split-section``.
- ``option-split-objs``: unnecessary ``-split-objs``.
- ``option-optl-wl``:unnecessary ``-optl-Wl,-s``.
- ``use-extension``: use ``extension`` field instead of ``-fglasgow-exts``.
- ``option-rtsopts``: unnecessary ``-rtsopts``.
- ``option-with-rtsopts``: unnecessary ``-with-rtsopts``.
- ``option-opt-c``: unnecessary ``-O[n]`` in C code.
- ``cpp-options``: unportable ``-cpp-options`` flag.
- ``misplaced-c-opt``: C-like options in wrong cabal field.
- ``relative-path-outside``: relative path outside of source tree.
- ``absolute-path``: absolute path where not allowed.
- ``malformed-relative-path``: malformed relative path.
- ``unreliable-dist-path``: unreliable path pointing inside ``dist``.
- ``glob-syntax-error``: glob syntax error.
- ``recursive-glob``: recursive glob including source control folders.
- ``invalid-path-win``: invalid path on Windows.
- ``long-path``: path too long (POSIX, 255 ASCII chars).
- ``long-name``: path *name* too long (POSIX, 100 ASCII chars).
- ``name-not-portable``: path non portable (POSIX, split requirements).
- ``empty-path``: empty path.
- ``test-cabal-ver``: ``test-suite`` used with ``cabal-version`` < 1.10.
- ``default-language``: ``default-language`` used with ``cabal-version`` < 1.10.
- ``no-default-language``: missing ``default-language``.
- ``add-default-language``: suggested ``default-language``.
- ``extra-doc-files``: ``extra-doc-files`` used with ``cabal-version`` < 1.18.
- ``multilib``: multiple ``library`` sections with ``cabal-version`` < 2.0.
- ``reexported-modules``: ``reexported-modules`` with ``cabal-version`` < 1.22.
- ``mixins``: ``mixins`` with ``cabal-version`` < 2.0.
- ``extra-framework-dirs``: ``extra-framework-dirs`` with ``cabal-version`` < 1.24.
- ``default-extensions``: ``default-extensions`` with ``cabal-version`` < 1.10.
- ``extensions-field``: deprecated ``extensions`` field used with ``cabal-version`` ≥ 1.10
- ``unsupported-sources``: ``asm-sources``, ``cmm-sources``, ``extra-bundled-libraries`` or ``extra-library-flavours`` used with ``cabal-version`` < 3.0.
- ``extra-dynamic``: ``extra-dynamic-library-flavours`` used with cabal-version < 3.0.
- ``virtual-modules``: ``virtual-modules`` used with cabal-version < 2.2.
- ``source-repository``: ``source-repository`` used with ``cabal-version`` 1.6.
- ``incompatible-extension``: incompatible language extension with ``cabal-version``.
- ``no-setup-depends``: missing ``setup-depends`` field in ``custom-setup`` with ``cabal-version`` ≥ 1.24.
- ``dependencies-setup``: missing dependencies in ``custom-setup`` with ``cabal-version`` ≥ 1.24.
- ``no-autogen-paths``: missing autogen ``Paths_*`` modules in ``autogen-modules`` (``cabal-version`` ≥ 2.0).
- ``no-autogen-pinfo``: missing autogen ``PackageInfo_*`` modules in ``autogen-modules`` *and* ``exposed-modules``/``other-modules`` (``cabal-version`` ≥ 2.0).
- ``no-glob-match``: glob pattern not matching any file.
- ``glob-no-extension``: glob pattern not matching any file becuase of lack of extension matching (`cabal-version` < 2.4).
- ``glob-missing-dir``: glob pattern trying to match a missing directory.
- ``unknown-os``: unknown operating system name in condition.
- ``unknown-arch``: unknown architecture in condition.
- ``unknown-compiler``: unknown compiler in condition.
- ``missing-bounds-important``: missing upper bounds for important dependencies (``base``, and for ``custom-setup`` ``Cabal`` too).
- ``missing-upper-bounds``: missing upper bound in dependency (excluding test-suites and benchmarks).
- ``suspicious-flag``: troublesome flag name (e.g. starting with a dash).
- ``unused-flag``: unused user flags.
- ``non-ascii``: non-ASCII characters in custom field.
- ``rebindable-clash-paths``: ``Rebindable Syntax`` with ``OverloadedStrings``/``OverloadedStrings`` plus autogenerated ``Paths_*`` modules with ``cabal-version`` < 2.2.
- ``rebindable-clash-info``: ``Rebindable Syntax`` with ``OverloadedStrings``/``OverloadedStrings`` plus autogenerated ``PackageInfo_*`` modules with ``cabal-version`` < 2.2.
- ``werror``: ``-WError`` not under a user flag.
- ``unneeded-j``: suspicious ``-j[n]`` usage.
- ``fdefer-type-errors``: suspicious ``-fdefer-type-errors``.
- ``debug-flag``: suspicious ``-d*`` debug flag for distributed package.
- ``fprof-flag``: suspicious ``-fprof-*`` flag.
- ``missing-bounds-setup``: missing upper bounds in ``setup-depends``.
- ``duplicate-modules``: duplicate modules in target.
- ``maybe-duplicate-modules``: potential duplicate module in target (subject to conditionals).
- ``bom``: unicode byte order mark (BOM) character at start of file.
- ``name-no-match``: filename not matching ``name``.
- ``no-cabal-file``: no ``.cabal`` file found in folder.
- ``multiple-cabal-file``: multiple ``.cabal`` files found in folder.
- ``unknown-file``: path refers to a file which does not exist.
- ``missing-setup``: missing ``Setup.hs`` or ``Setup.lsh``.
- ``missing-conf-script``: missing ``configure`` script with ``build-type: Configure``.
- ``unknown-directory``: paths refer to a directory which does not exist.
- ``no-repository``: missing ``source-repository`` section.
- ``no-docs``: missing expected documentation files (changelog).
- ``doc-place``: documentation files listed in ``extra-source-files`` instead of ``extra-doc-files``.


cabal sdist
^^^^^^^^^^^

``cabal sdist [FLAGS] [PACKAGES]`` takes the crucial files needed to build ``PACKAGES``
and puts them into an archive format ready for upload to Hackage. These archives are stable
and two archives of the same format built from the same source will hash to the same value.

``cabal sdist`` takes the following flags:

.. option:: -l, --list-only

    Rather than creating an archive, lists files that would be included.

    Output is to ``stdout`` by default. The file paths are relative to the project's root
    directory.

.. option:: -o PATH or -oPATH, --output-directory=PATH

    Sets the output dir, if a non-default one is desired. The default is
    ``dist-newstyle/sdist/``. ``--output-directory -`` will send output to ``stdout``
    unless multiple archives are being created.

.. option:: --null-sep

    Only used with ``--list-only``. Separates filenames with a NUL
    byte instead of newlines.

``sdist`` is inherently incompatible with sdist hooks (which were removed in `Cabal-3.0`),
not due to implementation but due to fundamental core invariants
(same source code should result in the same tarball, byte for byte)
that must be satisfied for it to function correctly in the larger build ecosystem.
``autogen-modules`` is able to replace uses of the hooks to add generated modules, along with
the custom publishing of Haddock documentation to Hackage.

cabal upload
^^^^^^^^^^^^

``cabal upload [FLAGS] TARFILES`` uploads source packages or documentation
to Hackage.

.. option:: --publish

    Publish the package immediately instead of uploading it as a
    `package candidate <https://hackage.haskell.org/upload#candidates>`__
    (make sure everything is fine, you cannot delete published packages
    on Hackage!).

.. option:: -d, --documentation

    Upload documentation instead of a source package. To upload
    documentation for a published package (and not a candidate), add
    ``--publish``.

.. option:: -t TOKEN or -tTOKEN, --token=TOKEN

    Your Hackage authentication token. You can create and delete
    authentication tokens on Hackage's `account management page
    <https://hackage.haskell.org/users/account-management>`__.

.. option:: -u USERNAME or -uUSERNAME, --username=USERNAME

    Your Hackage username.

.. option:: -p PASSWORD or -pPASSWORD, --password=PASSWORD

    Your Hackage password.

.. option:: -P COMMAND or -PCOMMAND, --password-command=COMMAND

    Command to get your Hackage password.  Arguments with whitespace
    must be quoted (double-quotes only).  For example:

    ::

        --password-command='sh -c "grep hackage ~/secrets | cut -d : -f 2"'

    Or in the config file:

    ::

        password-command: sh -c "grep hackage ~/secrets | cut -d : -f 2"


cabal report
^^^^^^^^^^^^

``cabal report [FLAGS]`` uploads build reports to Hackage.

.. option:: -t TOKEN or -tTOKEN, --token=TOKEN

    Your Hackage authentication token. You can create and delete
    authentication tokens on Hackage's `account management page
    <https://hackage.haskell.org/users/account-management>`__.

.. option:: -u USERNAME or -uUSERNAME, --username=USERNAME

    Your Hackage username.

.. option:: -p PASSWORD or -pPASSWORD, --password=PASSWORD

    Your Hackage password.

.. include:: references.inc


===================================================
/. 🚀 ./external-commands.rst
===================================================

External Commands
=================

``cabal-install`` provides a system for external commands, akin to the ones used by tools like ``git`` or ``cargo``.

If you execute ``cabal <cmd>``, ``cabal-install`` will search the path for an executable named ``cabal-<cmd>`` and execute it. The name of the command is passed as the first argument and
the remaining arguments are passed afterwards. An error will be thrown in case the custom command is not found.

The ``$CABAL`` environment variable is set to the path of the ``cabal-install`` executable
which invoked the subcommand.

It is strongly recommended that you implement your custom commands by calling the
CLI via the ``$CABAL`` variable rather than linking against the ``Cabal`` library.
There is no guarantee that the subcommand will link against the same version of the
``Cabal`` library as ``cabal-install`` so it would lead to unexpected results and
incompatibilities.

``cabal-install`` can also display the help message of the external command.
When ``cabal help <cmd>`` is invoked, then ``cabal-<cmd> <cmd> --help`` will be called so
your external command can display a help message.

For ideas or existing external commands, visit `this Discourse thread <https://discourse.haskell.org/t/an-external-command-system-for-cabal-what-would-you-do-with-it/7114>`_.


===================================================
/. 🚀 ./setup-commands.rst
===================================================

.. _setup-commands:

Setup.hs Commands
=================

.. highlight:: console

GHC provides the commands ``runhaskell`` and ``runghc`` (they are equivalent)
to allow you to run Haskell programs without first having to compile them
(scripts). The low-level Cabal interface is implemented using ``Setup.hs``
scripts. You should prefer using higher level interface provided by nix-style
builds. However, the documentation of the low level interface below may be helpful
to high level interface users as well, because it delves into internal details
common to both and omitted elsewhere.

::

    $ runhaskell Setup.hs [command] [option...]

For the summary of the ``Setup.hs`` script's command syntax, run:

::

    $ runhaskell Setup.hs --help

Building and installing a system package
----------------------------------------

::

    $ runhaskell Setup.hs configure --ghc
    $ runhaskell Setup.hs build
    $ runhaskell Setup.hs install

The first line readies the system to build the tool using GHC; for
example, it checks that GHC exists on the system. The second line
performs the actual building, while the last both copies the build
results to some permanent place and registers the package with GHC.

.. note ::

    Global installing of packages is not recommended.
    The :ref:`nix-style-builds` is the preferred way of building and installing
    packages.

Creating a binary package
-------------------------

When creating binary packages (e.g. for Red Hat or Debian) one needs to
create a tarball that can be sent to another system for unpacking in the
root directory:

::

    $ runhaskell Setup.hs configure --prefix=/usr
    $ runhaskell Setup.hs build
    $ runhaskell Setup.hs copy --destdir=/tmp/mypkg
    $ tar -czf mypkg.tar.gz /tmp/mypkg/

If the package contains a library, you need two additional steps:

::

    $ runhaskell Setup.hs register --gen-script
    $ runhaskell Setup.hs unregister --gen-script

This creates shell scripts ``register.sh`` and ``unregister.sh``, which
must also be sent to the target system. After unpacking there, the
package must be registered by running the ``register.sh`` script. The
``unregister.sh`` script would be used in the uninstall procedure of the
package. Similar steps may be used for creating binary packages for
Windows.

The following options are understood by all commands:

.. program:: setup

.. option:: --help, -h or -?

    List the available options for the command.

.. option:: --verbose=n or -v n

    Set the verbosity level (0-3). The normal level is 1; a missing *n*
    defaults to 2.

    There is also an extended version of this command which can be
    used to fine-tune the verbosity of output.  It takes the
    form ``[silent|normal|verbose|debug]``\ *flags*, where *flags*
    is a list of ``+`` flags which toggle various aspects of
    output.  At the moment, only ``+callsite`` and ``+callstack``
    are supported, which respectively toggle call site and call
    stack printing (these are only supported if Cabal
    is built with a sufficiently recent GHC.)

The various commands and the additional options they support are
described below. In the simple build infrastructure, any other options
will be reported as errors.

.. _setup-configure:

runhaskell Setup.hs configure
-----------------------------

.. program:: runhaskell Setup.hs configure

Prepare to build the package. Typically, this step checks that the
target platform is capable of building the package, and discovers
platform-specific features that are needed during the build.

The user may also adjust the behaviour of later stages using the options
listed in the following subsections. In the simple build infrastructure,
the values supplied via these options are recorded in a private file
read by later stages.

If a user-supplied ``configure`` script is run (see the section on
:ref:`system-dependent parameters` or
on :ref:`more-complex-packages`), it is
passed the :option:`--with-hc-pkg`, :option:`--prefix`, :option:`--bindir`,
:option:`--libdir`, :option:`--dynlibdir`, :option:`--datadir`, :option:`--libexecdir` and
:option:`--sysconfdir` options. In addition the value of the
:option:`--with-compiler` option is passed in a :option:`--with-hc-pkg` option
and all options specified with :option:`--configure-option` are passed on.

.. note::
   `GNU autoconf places restrictions on paths, including the directory
   that the package is built from.
   <https://www.gnu.org/software/autoconf/manual/autoconf.html#File-System-Conventions>`_
   The errors produced when this happens can be obscure; Cabal attempts to
   detect and warn in this situation, but it is not perfect.

In Cabal 2.0, support for a single positional argument was added to
``runhaskell Setup.hs configure`` This makes Cabal configure the specific component to
be configured. Specified names can be qualified with ``lib:`` or
``exe:`` in case just a name is ambiguous (as would be the case for a
package named ``p`` which has a library and an executable named ``p``.)
This has the following effects:

-  Subsequent invocations of ``cabal build``, ``register``, etc. operate only
   on the configured component.

-  Cabal requires all "internal" dependencies (e.g., an executable
   depending on a library defined in the same package) must be found in
   the set of databases via :option:`--package-db` (and related flags): these
   dependencies are assumed to be up-to-date. A dependency can be
   explicitly specified using :option:`--dependency` simply by giving the name
   of the sublibrary; e.g., the dependency for a sublibrary
   named ``foo`` is given as
   ``--dependency=Lib:foo=foo-0.1-abc``.

-  Only the dependencies needed for the requested component are
   required. Similarly, when :option:`--exact-configuration` is specified,
   it's only necessary to specify :option:`--dependency` for the component.
   (As mentioned previously, you *must* specify internal dependencies as
   well.)

-  Internal ``build-tool-depends`` and ``build-tools`` dependencies are expected
   to be in the ``PATH`` upon subsequent invocations of ``setup``.

Full details can be found in the 
`Componentized Cabal proposal <https://github.com/ezyang/ghc-proposals/blob/master/proposals/0000-componentized-cabal.rst>`__.

Programs used for building
^^^^^^^^^^^^^^^^^^^^^^^^^^

The following options govern the programs used to process the source
files of a package:

.. option:: -g, --ghc
            --ghcjs
            --uhc
            --haskell-suite

    Specify which Haskell implementation to use to build the package. At
    most one of these flags may be given. If none is given, the
    implementation under which the setup script was compiled or
    interpreted is used.

.. option:: -w PATH or -wPATH, --with-compiler=PATH

    Specify the path to a particular compiler. If given, this must match
    the implementation selected above. The default is to search for the
    usual name of the selected implementation.

    This flag also sets the default value of the :option:`--with-hc-pkg`
    option to the package tool for this compiler. Check the output of
    ``runhaskell Setup.hs configure -v`` to ensure that it finds the right package
    tool (or use :option:`--with-hc-pkg` explicitly).

.. option:: --with-hc-pkg=PATH

    Specify the path to the package tool, e.g. ``ghc-pkg``. The package
    tool must be compatible with the compiler specified by
    :option:`--with-compiler`. If this option is omitted, the default value is
    determined from the compiler selected.

.. option:: --with-PROG=PATH

    Specify the path to the program *prog*. Any program known to Cabal
    can be used in place of *prog*. It can either be a fully path or the
    name of a program that can be found on the program search path. For
    example: ``--with-ghc=ghc-6.6.1`` or
    ``--with-cpphs=/usr/local/bin/cpphs``. The full list of accepted
    programs is not enumerated in this user guide. Rather, run
    ``cabal install --help`` to view the list.

.. option:: --PROG-options=OPTS

    Specify additional options to the program *prog*. Any program known
    to Cabal can be used in place of *prog*. For example:
    ``--alex-options="--template=mytemplatedir/"``. The *options* is
    split into program options based on spaces. Any options containing
    embedded spaced need to be quoted, for example
    ``--foo-options='--bar="C:\Program File\Bar"'``. As an alternative
    that takes only one option at a time but avoids the need to quote,
    use :option:`--PROG-option` instead.

.. option:: --PROG-option=OPT

    Specify a single additional option to the program *prog*. For
    passing an option that contains embedded spaces, such as a file name
    with embedded spaces, using this rather than :option:`--PROG-options`
    means you do not need an additional level of quoting. Of course if you
    are using a command shell you may still need to quote, for example
    ``--foo-options="--bar=C:\Program File\Bar"``.

All of the options passed with either :option:`--PROG-options`
or :option:`--PROG-option` are passed in the order they were
specified on the configure command line.

Installation paths
^^^^^^^^^^^^^^^^^^

The following options govern the location of installed files from a
package:

.. option:: --prefix=DIR

    The root of the installation. For example for a global install you
    might use ``/usr/local`` on a Unix system, or ``C:\Program Files``
    on a Windows system. The other installation paths are usually
    subdirectories of *prefix*, but they don't have to be.

    In the simple build system, *dir* may contain the following path
    variables: ``$pkgid``, ``$pkg``, ``$version``, ``$compiler``,
    ``$os``, ``$arch``, ``$abi``, ``$abitag``

.. option:: --bindir=DIR

    Executables that the user might invoke are installed here.

    In the simple build system, *dir* may contain the following path
    variables: ``$prefix``, ``$pkgid``, ``$pkg``, ``$version``,
    ``$compiler``, ``$os``, ``$arch``, ``$abi``, ``$abitag``

.. option:: --libdir=DIR

    Object-code libraries are installed here.

    In the simple build system, *dir* may contain the following path
    variables: ``$prefix``, ``$bindir``, ``$pkgid``, ``$pkg``,
    ``$version``, ``$compiler``, ``$os``, ``$arch``, ``$abi``,
    ``$abitag``

.. option:: --dynlibdir=DIR

    Dynamic libraries are installed here.

    By default, this is set to `$libdir/$abi`, which is usually not equal to
    `$libdir/$libsubdir`.

    In the simple build system, *dir* may contain the following path
    variables: ``$prefix``, ``$bindir``, ``$libdir``, ``$pkgid``, ``$pkg``,
    ``$version``, ``$compiler``, ``$os``, ``$arch``, ``$abi``,
    ``$abitag``

.. option:: --libexecdir=DIR

    Executables that are not expected to be invoked directly by the user
    are installed here.

    In the simple build system, *dir* may contain the following path
    variables: ``$prefix``, ``$bindir``, ``$libdir``, ``$libsubdir``,
    ``$pkgid``, ``$pkg``, ``$version``, ``$compiler``, ``$os``,
    ``$arch``, ``$abi``, ``$abitag``

.. option:: --datadir=DIR

    Architecture-independent data files are installed here.

    In the simple build system, *dir* may contain the following path
    variables: ``$prefix``, ``$bindir``, ``$libdir``, ``$libsubdir``,
    ``$pkgid``, ``$pkg``, ``$version``, ``$compiler``, ``$os``,
    ``$arch``, ``$abi``, ``$abitag``

.. option:: --sysconfdir=DIR

    Installation directory for the configuration files.

    In the simple build system, *dir* may contain the following path
    variables: ``$prefix``, ``$bindir``, ``$libdir``, ``$libsubdir``,
    ``$pkgid``, ``$pkg``, ``$version``, ``$compiler``, ``$os``,
    ``$arch``, ``$abi``, ``$abitag``

In addition the simple build system supports the following installation
path options:

.. option:: --libsubdir=DIR

    A subdirectory of *libdir* in which libraries are actually installed. For
    example, in the simple build system on Unix, the default *libdir* is
    ``/usr/local/lib``, and *libsubdir* contains the compiler ABI and package
    identifier,
    e.g. ``x86_64-linux-ghc-8.0.2/mypkg-0.1.0-IxQNmCA7qrSEQNkoHSF7A``, so
    libraries would be installed in
    ``/usr/local/lib/x86_64-linux-ghc-8.0.2/mypkg-0.1.0-IxQNmCA7qrSEQNkoHSF7A/``.

    *dir* may contain the following path variables: ``$pkgid``,
    ``$pkg``, ``$version``, ``$compiler``, ``$os``, ``$arch``, ``$abi``,
    ``$abitag``

.. option:: --libexecsubdir=DIR

    A subdirectory of *libexecdir* in which private executables are
    installed. For example, in the simple build system on Unix, the default
    *libexecdir* is ``/usr/local/libexec``, and *libsubdir* is
    ``x86_64-linux-ghc-8.0.2/mypkg-0.1.0``, so private executables would be
    installed in ``/usr/local/libexec/x86_64-linux-ghc-8.0.2/mypkg-0.1.0/``

    *dir* may contain the following path variables: ``$pkgid``,
    ``$pkg``, ``$version``, ``$compiler``, ``$os``, ``$arch``, ``$abi``,
    ``$abitag``

.. option:: --datasubdir=DIR

    A subdirectory of *datadir* in which data files are actually
    installed.

    *dir* may contain the following path variables: ``$pkgid``,
    ``$pkg``, ``$version``, ``$compiler``, ``$os``, ``$arch``, ``$abi``,
    ``$abitag``

.. option:: --docdir=DIR

    Documentation files are installed relative to this directory.

    *dir* may contain the following path variables: ``$prefix``,
    ``$bindir``, ``$libdir``, ``$libsubdir``, ``$datadir``,
    ``$datasubdir``, ``$pkgid``, ``$pkg``, ``$version``, ``$compiler``,
    ``$os``, ``$arch``, ``$abi``, ``$abitag``

.. option:: --htmldir=DIR

    HTML documentation files are installed relative to this directory.

    *dir* may contain the following path variables: ``$prefix``,
    ``$bindir``, ``$libdir``, ``$libsubdir``, ``$datadir``,
    ``$datasubdir``, ``$docdir``, ``$pkgid``, ``$pkg``, ``$version``,
    ``$compiler``, ``$os``, ``$arch``, ``$abi``, ``$abitag``

.. option:: --program-prefix=PREFIX

    Prepend *prefix* to installed program names.

    *prefix* may contain the following path variables: ``$pkgid``,
    ``$pkg``, ``$version``, ``$compiler``, ``$os``, ``$arch``, ``$abi``,
    ``$abitag``

.. option:: --program-suffix=SUFFIX

    Append *suffix* to installed program names. The most obvious use for
    this is to append the program's version number to make it possible
    to install several versions of a program at once:
    ``--program-suffix='$version'``.

    *suffix* may contain the following path variables: ``$pkgid``,
    ``$pkg``, ``$version``, ``$compiler``, ``$os``, ``$arch``, ``$abi``,
    ``$abitag``

Path variables in the simple build system
"""""""""""""""""""""""""""""""""""""""""

For the simple build system, there are a number of variables that can be
used when specifying installation paths. The defaults are also specified
in terms of these variables. A number of the variables are actually for
other paths, like ``$prefix``. This allows paths to be specified
relative to each other rather than as absolute paths, which is important
for building relocatable packages (see :ref:`prefix independence`).

$prefix
    The path variable that stands for the root of the installation. For
    an installation to be relocatable, all other installation paths must
    be relative to the ``$prefix`` variable.
$bindir
    The path variable that expands to the path given by the :option:`--bindir`
    configure option (or the default).
$libdir
    As above but for :option:`--libdir`
$libsubdir
    As above but for :option:`--libsubdir`
$dynlibdir
    As above but for :option:`--dynlibdir`
$datadir
    As above but for :option:`--datadir`
$datasubdir
    As above but for :option:`--datasubdir`
$docdir
    As above but for :option:`--docdir`
$pkgid
    The name and version of the package, e.g. ``mypkg-0.2``
$pkg
    The name of the package, e.g. ``mypkg``
$version
    The version of the package, e.g. ``0.2``
$compiler
    The compiler being used to build the package, e.g. ``ghc-6.6.1``
$os
    The operating system of the computer being used to build the
    package, e.g. ``linux``, ``windows``, ``osx``, ``freebsd`` or
    ``solaris``
$arch
    The architecture of the computer being used to build the package,
    e.g. ``i386``, ``x86_64``, ``ppc`` or ``sparc``
$abitag
    An optional tag that a compiler can use for telling incompatible
    ABI's on the same architecture apart. GHCJS encodes the underlying
    GHC version in the ABI tag.
$abi
    A shortcut for getting a path that completely identifies the
    platform in terms of binary compatibility. Expands to the same value
    as ``$arch-$os-compiler-$abitag`` if the compiler uses an abi tag,
    ``$arch-$os-$compiler`` if it doesn't.

Paths in the simple build system
""""""""""""""""""""""""""""""""

For the simple build system, the following defaults apply:

.. list-table:: Default installation paths

    * - Option
      - Unix Default
      - Windows Default
    * - :option:`--prefix` (global)
      - ``/usr/local``
      - ``%PROGRAMFILES%\Haskell``
    * - :option:`--prefix` (per-user)
      - ``$HOME/.cabal``
      - ``%APPDATA%\cabal``
    * - :option:`--bindir`
      - ``$prefix/bin``
      - ``$prefix\bin``
    * - :option:`--libdir`
      - ``$prefix/lib``
      - ``$prefix``
    * - :option:`--libsubdir` (others)
      - ``$pkgid/$compiler``
      - ``$pkgid\$compiler``
    * - :option:`--dynlibdir`
      - ``$libdir/$abi``
      - ``$libdir\$abi``
    * - :option:`--libexecdir`
      - ``$prefix/libexec``
      - ``$prefix\$pkgid``
    * - :option:`--datadir` (executable)
      - ``$prefix/share``
      - ``$prefix``
    * - :option:`--datadir` (library)
      - ``$prefix/share``
      - ``%PROGRAMFILES%\Haskell``
    * - :option:`--datasubdir`
      - ``$pkgid``
      - ``$pkgid``
    * - :option:`--docdir`
      - ``$datadir/doc/$pkgid``
      - ``$prefix\doc\$pkgid``
    * - :option:`--sysconfdir`
      - ``$prefix/etc``
      - ``$prefix\etc``
    * - :option:`--htmldir`
      - ``$docdir/html``
      - ``$docdir\html``
    * - :option:`--program-prefix`
      - (empty)
      - (empty)
    * - :option:`--program-suffix`
      - (empty)
      - (empty)

.. _prefix independence:

Prefix independence
"""""""""""""""""""

On Windows it is possible to obtain the pathname of the running program.
This means that we can construct an installable executable package that
is independent of its absolute install location. The executable can find
its auxiliary files by finding its own path and knowing the location of
the other files relative to ``$bindir``. Prefix independence is
particularly useful: it means the user can choose the install location
(i.e. the value of ``$prefix``) at install-time, rather than having to
bake the path into the binary when it is built.

In order to achieve this, we require that for an executable on Windows,
all of ``$bindir``, ``$libdir``, ``$dynlibdir``, ``$datadir`` and ``$libexecdir`` begin
with ``$prefix``. If this is not the case then the compiled executable
will have baked-in all absolute paths.

The application need do nothing special to achieve prefix independence.
If it finds any files using ``getDataFileName`` and the :ref:`other functions
provided for the purpose <accessing-data-files>`,
the files will be accessed relative to the location of the current
executable.

A library cannot (currently) be prefix independent, because it will be
linked into an executable whose file system location bears no relation
to the library package.

.. _controlling flag assignments:

Controlling Flag Assignments
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Flag assignments (see :ref:`resolution-of-conditions-and-flags`)
can be controlled with the following command line options.

.. option:: -f flagname or -f -flagname

    Force the specified flag to ``true`` or ``false`` (if preceded with
    a ``-``). Later specifications for the same flags will override
    earlier, i.e., specifying ``-fdebug -f-debug`` is equivalent to
    ``-f-debug``

.. option:: --flags=flagspecs

    Same as ``-f``, but allows specifying multiple flag assignments at
    once. The parameter is a space-separated list of flag names (to
    force a flag to ``true``), optionally preceded by a ``-`` (to force
    a flag to ``false``). For example,
    ``--flags="debug -feature1 feature2"`` is equivalent to
    ``-fdebug -f-feature1 -ffeature2``.

Building Test Suites
^^^^^^^^^^^^^^^^^^^^

.. option:: --enable-tests

    Build the test suites defined in the package description file during
    the ``build`` stage. Check for dependencies required by the test
    suites. If the package is configured with this option, it will be
    possible to run the test suites with the ``test`` command after the
    package is built.

.. option:: --disable-tests

    (default) Do not build any test suites during the ``build`` stage.
    Do not check for dependencies required only by the test suites. It
    will not be possible to invoke the ``test`` command without
    reconfiguring the package.

.. option:: --enable-coverage

    Build libraries and executables (including test suites) with Haskell
    Program Coverage enabled. Running the test suites will automatically
    generate coverage reports with HPC.

.. option:: --disable-coverage

    (default) Do not enable Haskell Program Coverage.

Miscellaneous options
^^^^^^^^^^^^^^^^^^^^^

.. option:: --user

    Does a per-user installation. This changes the `default installation
    prefix <#paths-in-the-simple-build-system>`__. It also allow
    dependencies to be satisfied by the user's package database, in
    addition to the global database. This also implies a default of
    ``--user`` for any subsequent ``install`` command, as packages
    registered in the global database should not depend on packages
    registered in a user's database.

.. option:: --global

    (default) Does a global installation. In this case package
    dependencies must be satisfied by the global package database. All
    packages in the user's package database will be ignored. Typically
    the final installation step will require administrative privileges.

.. option:: --package-db=DB

    Allows package dependencies to be satisfied from this additional
    package database *db* in addition to the global package database.
    All packages in the user's package database will be ignored. The
    interpretation of *db* is implementation-specific. Typically it will
    be a file or directory. Not all implementations support arbitrary
    package databases.

    This pushes an extra db onto the db stack. The :option:`--global` and
    :option:`--user` mode switches add the respective [Global] and [Global,
    User] dbs to the initial stack. There is a compiler-implementation
    constraint that the global db must appear first in the stack, and if
    the user one appears at all, it must appear immediately after the
    global db.

    To reset the stack, use ``--package-db=clear``.

.. option:: --ipid=IPID

    Specifies the *installed package identifier* of the package to be
    built; this identifier is passed on to GHC and serves as the basis
    for linker symbols and the ``id`` field in a ``ghc-pkg``
    registration. When a package has multiple components, the actual
    component identifiers are derived off of this identifier. E.g., a
    sublibrary ``foo`` from package ``p-0.1-abcd`` will get the
    identifier ``p-0.1-abcd-foo``.

.. option:: --cid=CID

    Specifies the *component identifier* of the component being built;
    this is only valid if you are configuring a single component.

.. option:: -O[n], --enable-optimization[=n]

    (default) Build with optimization flags (if available). This is
    appropriate for production use, taking more time to build faster
    libraries and programs.

    The optional *n* value is the optimisation level. Some compilers
    support multiple optimisation levels. The range is 0 to 2. Level 0
    is equivalent to :option:`--disable-optimization`, level 1 is the
    default if no *n* parameter is given. Level 2 is higher optimisation
    if the compiler supports it. Level 2 is likely to lead to longer
    compile times and bigger generated code.

    When optimizations are enabled, Cabal passes ``-O2`` to the C compiler.

.. option:: --disable-optimization

    Build without optimization. This is suited for development: building
    will be quicker, but the resulting library or programs will be
    slower.

.. option:: --enable-profiling

    Build libraries and executables with profiling enabled (for
    compilers that support profiling as a separate mode). For this to
    work, all libraries used by this package must also have been built
    with profiling support. For libraries this involves building an
    additional instance of the library in addition to the normal
    non-profiling instance. For executables it changes the single
    executable to be built in profiling mode.

    This flag covers both libraries and executables, but can be
    overridden by the :option:`--enable-library-profiling` flag.

    See also the :option:`--profiling-detail` flag below.

.. option:: --disable-profiling

    (default) Do not enable profiling in generated libraries and
    executables.

.. option:: -p, --enable-library-profiling

    As with :option:`--enable-profiling` above, but it applies only for
    libraries. So this generates an additional profiling instance of the
    library in addition to the normal non-profiling instance.

    The :option:`--enable-profiling` flag controls the profiling mode for both
    libraries and executables, but if different modes are desired for
    libraries versus executables then use :option:`--enable-library-profiling`
    as well.

.. option:: --disable-library-profiling

    (default) Do not generate an additional profiling version of the library.

.. option:: --profiling-detail=level

    Some compilers that support profiling, notably GHC, can allocate
    costs to different parts of the program and there are different
    levels of granularity or detail with which this can be done. In
    particular for GHC this concept is called "cost centers", and GHC
    can automatically add cost centers, and can do so in different ways.

    This flag covers both libraries and executables, but can be
    overridden by the :option:`--library-profiling-detail` flag.

    Currently this setting is ignored for compilers other than GHC. The
    levels that cabal currently supports are:

    default
        For GHC this uses ``exported-functions`` for libraries and
        ``toplevel-functions`` for executables.
    none
        No costs will be assigned to any code within this component.
    exported-functions
        Costs will be assigned at the granularity of all top level
        functions exported from each module. In GHC specifically, this
        is for non-inline functions.
    toplevel-functions
        Costs will be assigned at the granularity of all top level
        functions in each module, whether they are exported from the
        module or not. In GHC specifically, this is for non-inline
        functions.
    all-functions
        Costs will be assigned at the granularity of all functions in
        each module, whether top level or local. In GHC specifically,
        this is for non-inline toplevel or where-bound functions or
        values.
    late-toplevel
        Like top-level but costs will be assigned to top level definitions after
        optimization. This lowers profiling overhead massively while giving similar
        levels of detail as toplevle-functions. However it means functions introduced
        by GHC during optimization will show up in profiles as well.
        Corresponds to ``-fprof-late`` if supported and ``-fprof-auto-top`` otherwise.
    late
        Currently an alias for late-toplevel

    This flag is new in Cabal-1.24. Prior versions used the equivalent
    of ``none`` above.

.. option:: --library-profiling-detail=level

    As with :option:`--profiling-detail` above, but it applies only for
    libraries.

    The level for both libraries and executables is set by the
    :option:`--profiling-detail` flag, but if different levels are desired
    for libraries versus executables then use
    :option:`--library-profiling-detail` as well.

.. option:: --enable-library-vanilla

    (default) Build ordinary libraries (as opposed to profiling
    libraries). This is independent of the
    :option:`--enable-library-profiling` option. If you enable both, you get
    both.

.. option:: --disable-library-vanilla

    Do not build ordinary libraries. This is useful in conjunction with
    :option:`--enable-library-profiling` to build only profiling libraries,
    rather than profiling and ordinary libraries.

.. option:: --enable-library-for-ghci

    (default) Build libraries suitable for use with GHCi.

.. option:: --disable-library-for-ghci

    Not all platforms support GHCi and indeed on some platforms, trying
    to build GHCi libs fails. In such cases this flag can be used as a
    workaround.

.. option:: --enable-split-objs

    Use the GHC ``-split-objs`` feature when building the library. This
    reduces the final size of the executables that use the library by
    allowing them to link with only the bits that they use rather than
    the entire library. The downside is that building the library takes
    longer and uses considerably more memory.

.. option:: --disable-split-objs

    (default) Do not use the GHC ``-split-objs`` feature. This makes
    building the library quicker but the final executables that use the
    library will be larger.

.. option:: --enable-executable-stripping

    (default) When installing binary executable programs, run the
    ``strip`` program on the binary. This can considerably reduce the
    size of the executable binary file. It does this by removing
    debugging information and symbols. While such extra information is
    useful for debugging C programs with traditional debuggers it is
    rarely helpful for debugging binaries produced by Haskell compilers.

    Not all Haskell implementations generate native binaries. For such
    implementations this option has no effect.

.. option:: --disable-executable-stripping

    Do not strip binary executables during installation. You might want
    to use this option if you need to debug a program using gdb, for
    example if you want to debug the C parts of a program containing
    both Haskell and C code. Another reason is if your are building a
    package for a system which has a policy of managing the stripping
    itself (such as some Linux distributions).

.. option:: --enable-shared

    Build shared library. This implies a separate compiler run to
    generate position independent code as required on most platforms.

.. option:: --disable-shared

    (default) Do not build shared library.

.. option:: --enable-static

   Build a static library. This passes ``-staticlib`` to GHC (available
   for iOS, and with 8.4 more platforms).  The result is an archive ``.a``
   containing all dependent haskell libraries combined.

.. option:: --disable-static

    (default) Do not build a static library.

.. option:: --enable-executable-dynamic

    Link dependent Haskell libraries into executables dynamically.
    The executable's library dependencies must have been
    built as shared objects. This implies :option:`--enable-shared`
    unless :option:`--disable-shared` is explicitly specified.

.. option:: --disable-executable-dynamic

   (default) Link dependent Haskell libraries into executables statically.
   Non-Haskell (C) libraries are still linked dynamically, including libc,
   so the result is still not a fully static executable
   unless :option:`--enable-executable-static` is given.

.. option:: --enable-executable-static

    Build fully static executables.
    This links all dependent libraries into executables statically,
    including libc.

.. option:: --disable-executable-static

   (default) Do not build fully static executables.

.. option:: --configure-option=str

    An extra option to an external ``configure`` script, if one is used
    (see the section on :ref:`system-dependent parameters`).
    There can be several of these options.

.. option:: --extra-include-dirs=PATH

    An extra directory to search for C header files. You can use this
    flag multiple times to get a list of directories.

    You might need to use this flag if you have standard system header
    files in a non-standard location that is not mentioned in the
    package's ``.cabal`` file. Using this option has the same effect as
    appending the directory *dir* to the ``include-dirs`` field in each
    library and executable in the package's ``.cabal`` file. The
    advantage of course is that you do not have to modify the package at
    all. These extra directories will be used while building the package
    and for libraries it is also saved in the package registration
    information and used when compiling modules that use the library.

.. option:: --extra-lib-dirs=PATH

    An extra directory to search for system libraries files. You can use
    this flag multiple times to get a list of directories.

.. option:: --extra-framework-dirs=PATH

    An extra directory to search for frameworks (OS X only). You can use
    this flag multiple times to get a list of directories.

    You might need to use this flag if you have standard system
    libraries in a non-standard location that is not mentioned in the
    package's ``.cabal`` file. Using this option has the same affect as
    appending the directory *dir* to the ``extra-lib-dirs`` field in
    each library and executable in the package's ``.cabal`` file. The
    advantage of course is that you do not have to modify the package at
    all. These extra directories will be used while building the package
    and for libraries it is also saved in the package registration
    information and used when compiling modules that use the library.

.. option:: --dependency[=pkgname=IPID]

    Specify that a particular dependency should used for a particular
    package name. In particular, it declares that any reference to
    *pkgname* in a :pkg-field:`build-depends` should be resolved to
    *ipid*.

.. option:: --promised-dependency[=pkgname=IPID]

    Very much like ``--dependency`` but the package doesn't need to already
    be installed. This is useful when attempting to start multiple component
    sessions with cabal's multi-repl or projects such as Haskell Language Server.

    Several checks which are enabled for ``--dependency``s are disabled for promised
    dependencies, so prefer to use ``--dependency`` if you know that the dependency
    is already installed.

.. option:: --exact-configuration

    This changes Cabal to require every dependency be explicitly
    specified using :option:`--dependency`, rather than use Cabal's (very
    simple) dependency solver. This is useful for programmatic use of
    Cabal's API, where you want to error if you didn't specify enough
    :option:`--dependency` flags.


.. option:: -c CONSTRAINT or -cCONSTRAINT, --constraint=CONSTRAINT

    Restrict solutions involving a package to given version
    bounds, flag settings, and other properties.

    The following considers only install plans where ``bar``,
    if used, is restricted to version 2.1:

    ::

        $ cabal install --constraint="bar == 2.1"

    The following prevents ``bar`` from being used at all:

    ::

        $ cabal install --constraint="bar <0"

    Version bounds have the same syntax as :pkg-field:`build-depends`.
    Yet extra pseudo version bounds are available here in addition:

      - ``installed`` to fix a package to the already installed version.
        Often useful for GHC-supplied packages in combination with :cfg-field:`allow-newer`,
        e.g., ``--allow-newer='*:base' --constraint='base installed'``.

      - ``source`` to fix a package to the local source copy.

    ::

        # Require that a version of bar be used that is already installed in
        # the global package database.
        $ cabal install --constraint="bar installed"

        # Require the local source copy of bar to be used.
        # (Note: By default, if we have a local package we will
        # automatically use it, so it will generally not be necessary to
        # specify this.)
        $ cabal install --constraint="bar source"

    Further, we can specify flag assignments with ``+FLAG`` and ``-FLAG``
    or enable test (``test``) and benchmark (``bench``) suites:

    ::

        # Require bar to be installed with the foo flag turned on and
        # the baz flag turned off.
        $ cabal install --constraint="bar +foo -baz"

        # Require that bar have test suites and benchmarks enabled.
        $ cabal install --constraint="bar test" --constraint="bar bench"

    To specify multiple constraints, you may pass the
    ``constraint`` option multiple times.

    By default, constraints only apply to build dependencies
    (:pkg-field:`build-depends`), build dependencies of build
    dependencies, and so on. Constraints normally do not apply to
    dependencies of the ``Setup.hs`` script of any package
    (:pkg-field:`custom-setup:setup-depends`) nor do they apply to build tools
    (:pkg-field:`build-tool-depends`) or the dependencies of build
    tools. To explicitly apply a constraint to a setup or build
    tool dependency, you can add a qualifier ``setup`` or ``any``
    to the constraint as follows:

    ::

        # Example use of the 'any' qualifier. This constraint
        # applies to package bar anywhere in the dependency graph.
        $ cabal install --constraint="any.bar == 1.0"

    ::

        # Example uses of 'setup' qualifiers.

        # This constraint applies to package bar when it is a
        # dependency of any Setup.hs script.
        $ cabal install --constraint="setup.bar == 1.0"

        # This constraint applies to package bar when it is a
        # dependency of the Setup.hs script of package foo.
        $ cabal install --constraint="foo:setup.bar == 1.0"

    ..  TODO: Uncomment this example once we decide on a syntax for 'exe'.
    ..  # Example use of the 'exe' (executable build tool)
        # qualifier. This constraint applies to package baz when it
        # is a dependency of the build tool bar being used to
        # build package foo.
        $ cabal install --constraint="foo:bar:exe.baz == 1.0"

.. option:: --disable-response-files

    Enable workaround for older versions of programs such as ``ar`` or
    ``ld`` that do not support response file arguments (i.e. ``@file``
    arguments). You may want this flag only if you specify custom ar
    executable. For system ``ar`` or the one bundled with ``ghc`` on
    Windows the ``cabal`` should do the right thing and hence should
    normally not require this flag.

.. _setup-build:

runhaskell Setup.hs build
-------------------------

Perform any preprocessing or compilation needed to make this package
ready for installation.

This command takes the following options:

.. program:: runhaskell Setup.hs build

.. option:: --PROG-options=OPTS, --PROG-option=OPT

    These are mostly the same as the `options configure
    step <#setup-configure>`__. Unlike the options specified at the
    configure step, any program options specified at the build step are
    not persistent but are used for that invocation only. The options
    specified at the build step are in addition not in replacement of
    any options specified at the configure step.

.. _setup-haddock:

runhaskell Setup.hs haddock
---------------------------

.. program:: runhaskell Setup.hs haddock

Build the documentation for the package using Haddock_.
By default, only the documentation for the exposed modules is generated
(but see the :option:`--executables` and :option:`--internal` flags below).

This command takes the following options:

.. option:: --hoogle

    Generate a file ``dist/doc/html/``\ *pkgid*\ ``.txt``, which can be
    converted by Hoogle_ into a
    database for searching. This is equivalent to running Haddock_
    with the ``--hoogle`` flag.

.. option:: --html-location=url

    Specify a template for the location of HTML documentation for
    prerequisite packages. The substitutions (`see
    listing <#paths-in-the-simple-build-system>`__) are applied to the
    template to obtain a location for each package, which will be used
    by hyperlinks in the generated documentation. For example, the
    following command generates links pointing at Hackage_ pages:

    ::

        $ runhaskell Setup.hs haddock \
        --html-location='http://hackage.haskell.org/packages/archive/$pkg/latest/doc/html'

    Here the argument is quoted to prevent substitution by the shell. If
    this option is omitted, the location for each package is obtained
    using the package tool (e.g. ``ghc-pkg``).

.. option:: --executables

    Also run Haddock_ for the modules of all the executable programs. By default
    Haddock_ is run only on the exported modules.

.. option:: --internal

    Run Haddock_ for the all
    modules, including unexposed ones, and make
    Haddock_ generate documentation
    for unexported symbols as well.

.. option:: --css=path

    The argument *path* denotes a CSS file, which is passed to
    Haddock_ and used to set the
    style of the generated documentation. This is only needed to
    override the default style that
    Haddock_ uses.

.. option:: --hyperlink-source

    Generate Haddock_ documentation integrated with HsColour_ . First,
    HsColour_ is run to generate colourised code. Then Haddock_ is run to
    generate HTML documentation. Each entity shown in the documentation is
    linked to its definition in the colourised code.

.. option:: --hscolour-css=path

    The argument *path* denotes a CSS file, which is passed to HsColour_ as in

    ::

        $ runhaskell Setup.hs hscolour --css=*path*

.. _setup-hscolour:

runhaskell Setup.hs hscolour
----------------------------

Produce colourised code in HTML format using HsColour_. Colourised code for
exported modules is put in ``dist/doc/html/``\ *pkgid*\ ``/src``.

This command takes the following options:

.. program:: runhaskell Setup.hs hscolour

.. option:: --executables

    Also run HsColour_ on the sources of all executable programs. Colourised
    code is put in ``dist/doc/html/``\ *pkgid*/*executable*\ ``/src``.

.. option:: --css=path

    Use the given CSS file for the generated HTML files. The CSS file
    defines the colours used to colourise code. Note that this copies
    the given CSS file to the directory with the generated HTML files
    (renamed to ``hscolour.css``) rather than linking to it.

.. _setup-install:

runhaskell Setup.hs install
---------------------------

.. program:: runhaskell Setup.hs install

Copy the files into the install locations and (for library packages)
register the package with the compiler, i.e. make the modules it
contains available to programs.

Additionally for GHC the ``extra-compilation-artifacts`` directory is copied if present.
GHC plugins can store extra data in subfolders.
(e.g. *extra-compilation-artifacts/PLUGIN_NAME/HS_MODULE.txt*)

The `install locations <#installation-paths>`__ are determined by
options to `runhaskell Setup.hs configure`_.

This command takes the following options:

.. option:: --global

    Register this package in the system-wide database. (This is the
    default, unless the :option:`runhaskell Setup.hs configure --user` option was supplied
    to the ``configure`` command.)

.. option:: --user

    Register this package in the user's local package database. (This is
    the default if the :option:`runhaskell Setup.hs configure --user` option was supplied
    to the ``configure`` command.)

.. _setup-copy:

runhaskell Setup.hs copy
------------------------

Copy the files without registering them. This command is mainly of use
to those creating binary packages.

This command takes the following option:

.. program:: runhaskell Setup.hs copy

.. option:: --destdir=path

   Specify the directory under which to place installed files. If this is
   not given, then the root directory is assumed.

.. _setup-register:

runhaskell Setup.hs register
----------------------------

Register this package with the compiler, i.e. make the modules it
contains available to programs. This only makes sense for library
packages. Note that the ``install`` command incorporates this action.
The main use of this separate command is in the post-installation step
for a binary package.

This command takes the following options:

.. program:: runhaskell Setup.hs register

.. option:: --global

    Register this package in the system-wide database. (This is the
    default.)

.. option:: --user

    Register this package in the user's local package database.

.. option:: --gen-script

    Instead of registering the package, generate a script containing
    commands to perform the registration. On Unix, this file is called
    ``register.sh``, on Windows, ``register.bat``. This script might be
    included in a binary bundle, to be run after the bundle is unpacked
    on the target system.

.. option:: --gen-pkg-config[=path]

    Instead of registering the package, generate a package registration
    file (or directory, in some circumstances). This only applies to
    compilers that support package registration files which at the
    moment is only GHC. The file should be used with the compiler's
    mechanism for registering packages. This option is mainly intended
    for packaging systems. If possible use the :option:`--gen-script` option
    instead since it is more portable across Haskell implementations.
    The *path* is optional and can be used to specify a particular
    output file to generate. Otherwise, by default the file is the
    package name and version with a ``.conf`` extension.

    This option outputs a directory if the package requires multiple
    registrations: this can occur if internal/convenience libraries are
    used. These configuration file names are sorted so that they can be
    registered in order.

.. option:: --inplace

    Registers the package for use directly from the build tree, without
    needing to install it. This can be useful for testing: there's no
    need to install the package after modifying it, just recompile and
    test.

    This flag does not create a build-tree-local package database. It
    still registers the package in one of the user or global databases.

    However, there are some caveats. It only works with GHC (currently).
    It only works if your package doesn't depend on having any
    supplemental files installed --- plain Haskell libraries should be
    fine.

.. _setup-unregister:

runhaskell Setup.hs unregister
------------------------------

.. program:: runhaskell Setup.hs unregister

Deregister this package with the compiler.

This command takes the following options:

.. option:: --global

    Deregister this package in the system-wide database. (This is the
    default.)

.. option:: --user

    Deregister this package in the user's local package database.

.. option:: --gen-script

    Instead of deregistering the package, generate a script containing
    commands to perform the deregistration. On Unix, this file is called
    ``unregister.sh``, on Windows, ``unregister.bat``. This script might
    be included in a binary bundle, to be run on the target system.

.. _setup-clean:

runhaskell Setup.hs clean
-------------------------

Remove any local files created during the ``configure``, ``build``,
``haddock``, ``register`` or ``unregister`` steps, and also any files
and directories listed in the :pkg-field:`extra-tmp-files` field.

This command takes the following options:

.. program:: runhaskell Setup.hs clean

.. option:: --save-configure, -s

    Keeps the configuration information so it is not necessary to run
    the configure step again before building.

.. _setup-test:

runhaskell Setup.hs test
------------------------

Run the test suites specified in the package description file. Aside
from the following flags, Cabal accepts the name of one or more test
suites on the command line after ``test``. When supplied, Cabal will run
only the named test suites, otherwise, Cabal will run all test suites in
the package.

.. program:: runhaskell Setup.hs test

.. option:: --builddir=DIR

    The directory where Cabal puts generated build files (default:
    ``dist``). Test logs will be located in the ``test`` subdirectory.

.. option:: --test-log=TEMPLATE

    The template used to name human-readable test logs; the path is
    relative to ``dist/test``. By default, logs are named according to
    the template ``$pkgid-$test-suite.log``, so that each test suite
    will be logged to its own human-readable log file. Template
    variables allowed are: ``$pkgid``, ``$compiler``, ``$os``,
    ``$arch``, ``$abi``, ``$abitag``, ``$test-suite``, and ``$result``.

.. option:: --test-machine-log=TEMPLATE

    The path to the machine-readable log, relative to ``dist/test``. The
    default template is ``$pkgid.log``. Template variables allowed are:
    ``$pkgid``, ``$compiler``, ``$os``, ``$arch``, ``$abi``, ``$abitag``
    and ``$result``.

.. option:: --test-show-details=FILTER

    Determines if the results of individual test cases are shown on the
    terminal. May be ``always`` (always show), ``never`` (never show),
    ``failures`` (show only failed results), ``streaming`` (show all
    results in real time) and ``direct`` (same as ``streaming`` but no log
    file and possibly prettier).

    Default value is ``direct``: it leaves test output untouched and does not
    produce a log. This allows for colored output, which is popular with testing
    frameworks. (On the other hand, ``streaming`` creates a log but looses
    coloring.)

.. option:: --test-options=TEMPLATES

    Give extra options to the test executables.

.. option:: --test-option=TEMPLATE

    Give an extra option to the test executables. There is no need to
    quote options containing spaces because a single option is assumed,
    so options will not be split on spaces.

.. option:: --test-wrapper=FILE

   The wrapper script/application used to setup and tear down the test
   execution context. The text executable path and test arguments are
   passed as arguments to the wrapper and it is expected that the wrapper
   will return the test's return code, as well as a copy of stdout/stderr.

.. _setup-bench:

runhaskell Setup.hs bench
-------------------------

Run the benchmarks specified in the package description file. Aside
from the following flags, Cabal accepts the name of one or more benchmarks
on the command line after ``bench``. When supplied, Cabal will run
only the named benchmarks, otherwise, Cabal will run all benchmarks in
the package.

.. option:: --benchmark-options=TEMPLATES

    Give extra options to the benchmark executables.

.. option:: --benchmark-option=TEMPLATE

    Give an extra option to the benchmark executables. There is no need to
    quote options containing spaces because a single option is assumed,
    so options will not be split on spaces.

.. _setup-sdist:

runhaskell Setup.hs sdist
-------------------------

Create a system- and compiler-independent source distribution in a file
*package*-*version*\ ``.tar.gz`` in the ``dist`` subdirectory, for
distribution to package builders. When unpacked, the commands listed in
this section will be available.

The files placed in this distribution are the package description file,
the setup script, the sources of the modules named in the package
description file, and files named in the ``license-file``, ``main-is``,
``c-sources``, ``asm-sources``, ``cmm-sources``, ``js-sources``,
``data-files``, ``extra-source-files`` and ``extra-doc-files`` fields.

This command takes the following option:

.. program:: runhaskell Setup.hs sdist

.. option:: --snapshot

    Append today's date (in "YYYYMMDD" format) to the version number for
    the generated source package. The original package is unaffected.


.. include:: references.inc


===================================================
/. 🚀 ./file-format-changelog.rst
===================================================

.. _spec-history:

==================================================
 Package Description Format Specification History
==================================================

:ref:`pkg-desc` need to specify the version of the
specification they need to be interpreted in via the
:pkg-field:`cabal-version` declaration. The following list describes
changes that occurred in each version of the cabal specification
relative to the respective preceding *published* version.

.. note::

    The sequence of specification version numbers is *not*
    contiguous because it's synchronised with the version of the
    ``Cabal`` library. As a consequence, only *even* versions are
    considered proper published versions of the specification as *odd*
    versions of the ``Cabal`` library denote unreleased development
    branches which have no stability guarantee.

``cabal-version: 3.12``
-----------------------

* License fields use identifiers from SPDX License List version
  ``3.23 2024-02-08``.


``cabal-version: 3.8``
----------------------

* Added field ``code-generators`` to :pkg-section:`test-suite` stanzas. This
  enumerates executabes (possibly brought into scope by  :pkg-field:`build-tool-depends`) that are run after all other
  preprocessors. These executables are invoked with a target dir for
  output, a sequence of all source directories with source files of
  local lib components that the given test stanza depends on, and
  following a double dash, all options cabal would pass to ghc for a
  build. They are expected to output a newline-separated list of
  generated modules which have been written to the targetdir. This can
  be used for driving doctests and other discover-style tests generated
  from source code.

* Added fields :pkg-field:`extra-libraries-static` and
  :pkg-field:`extra-lib-dirs-static` to allow Haskell libraries to remember
  linker flags needed for fully static linking of system libraries into
  executables.
  The existing field :pkg-field:`pkgconfig-depends` can used to append
  the relevant output of ``pkg-config --libs --static`` to these new fields
  automatically.
  When :pkg-field:`extra-libraries-static` is not given, it defaults to
  :pkg-field:`extra-libraries`.
  When :pkg-field:`extra-lib-dirs-static` is not given, it defaults to
  :pkg-field:`extra-lib-dirs`.

* Wildcard matching has been slightly expanded. Matches are now
  allowed of the form ``foo/**/literalFile``. Prior, double-star
  wildcards required the trailing filename itself be a wildcard.

* Allow the omission of the `type` field in `test-suite` and `benchmark` stanzas
  when the type can be inferred by the presence of `main-is` or `test-module`.

* License fields use identifiers from SPDX License List version
  ``3.16 2022-02-06``

``cabal-version: 3.6``
----------------------

* License fields use identifiers from SPDX License List version
  ``3.10 2020-08-03``

* Add :pkg-field:`hsc2hs-options`

``cabal-version: 3.4``
----------------------


* License fields use identifiers from SPDX License List version
  ``3.9 2020-05-15``

* Dependencies to sublibraries must be specified explicitly,
  even for current package.
  For example: ``build-depends: mypackage:my-sublib``
  This way you can have a sublibrary with the same
  name as some external dependency.

* Remove ``-any`` and ``-none`` syntax for version ranges
  Use ``>=0`` and ``<0`` respectively.

* :pkg-field:`default-language` is optional.
  The Default value is to use the compiler's default language.

* :pkg-field:`mixins` field allow specifying a sublibrary.

``cabal-version: 3.0``
----------------------

* New :pkg-field:`library:visibility` for exposing sublibraries.

* New ``pkg:lib`` and ``pkg:{lib1,lib2}`` syntax in :pkg-field:`build-depends`
  for depending on public sublibraries from other packages.

* Added the :pkg-field:`extra-dynamic-library-flavours` field to specify non-trivial
  variants of dynamic flavours. It is :pkg-field:`extra-library-flavours` but for
  shared libraries. Mainly useful for GHC's RTS library.

* Free text fields (e.g. :pkg-field:`description`) preserve empty lines
  and indentation. In other words, you don't need to add dots for blank lines.

* License fields use identifiers from SPDX License List version
  ``3.6 2019-07-10``

* Remove deprecated ``hs-source-dir``, :pkg-field:`extensions` and
  :pkg-field:`build-tools` fields.

* Common stanzas are now allowed also in the beginning of conditional
  sections.  In other words, the following is valid

    ::

        library
            import deps

            if flag(foo)
                import foo-deps

* Allow redundant leading or trailing commas in package fields with
  optional commas, such as :pkg-field:`library:exposed-modules`

* Require fields with optional commas to consistently omit or place
  commas between elements.

* Changed the behavior of :pkg-field:`extra-bundled-libraries` field. The naming convention
  of dynamic library files (e.g. generated by a custom build script) has
  changed. For library names prefixed with "C", the dynamic library file
  name(s) must be of the form `lib<library-name>.<dyn-library-extension>*`
  instead of the old `libC<library-name>-ghc<ghc-flavour><ghc-version>.<dyn-library-extension>`

* New set-notation syntax for ``==`` and ``^>=`` operators, see
  :pkg-field:`build-depends` field documentation for examples.

* Allow more whitespace in :pkg-field:`mixins` field

* Wildcards are disallowed in :pkg-field:`pkgconfig-depends`,
  Yet the pkgconfig format is relaxed to accept e.g. versions like ``1.1.0h``.

* New :pkg-field:`autogen-includes` for specifying :pkg-field:`install-includes`
  which are autogenerated (e.g. by a ``configure`` script).

* New :pkg-field:`asm-sources` and :pkg-field:`asm-options` fields
  added for supporting bundled foreign routines implemented in
  assembler.

* New :pkg-field:`cmm-sources` and :pkg-field:`cmm-options` fields
  added for supporting bundled foreign primops implemented in
  C--.

``cabal-version: 2.4``
----------------------

* Wildcard matching has been expanded. All previous wildcard
  expressions are still valid; some will match strictly more files
  than before. Specifically:

  * Double-star (``**``) wildcards are now accepted for recursive
    matching immediately before the final slash; they must be followed
    by a filename wildcard (e.g., ``foo/**/*.html`` is valid;
    ``foo/**/bar/*.html`` and ``foo/**/**/*.html``,
    ``foo/**/bar.html`` are all invalid). As ``**`` was an error in
    globs before, this does not affect any existing ``.cabal`` files
    that previously worked.
    (Caveat: Double-star wildcards in :pkg-field:`data-files` directories,
    e.g. ``data-files: data/**/*.csv``,
    `are only supported correctly from Cabal 3.0 <https://github.com/haskell/cabal/issues/6125#issuecomment-1379878419>`_.)


  * Wildcards now match when the pattern's extensions form a suffix of
    the candidate file's extension, rather than requiring strict
    equality (e.g., previously ``*.html`` did not match
    ``foo.en.html``, but now it does).

* License fields use identifiers from SPDX License List version
  ``3.2 2018-07-10``


``cabal-version: 2.2``
----------------------

* New :pkg-section:`common` stanzas and :pkg-field:`import`
  pseudo-field added.

* New :pkg-field:`library:virtual-modules` field added.

* New :pkg-field:`cxx-sources` and :pkg-field:`cxx-options` fields
  added for supporting bundled foreign routines implemented in C++.

* New :pkg-field:`extra-bundled-libraries` field for specifying
  additional custom library objects to be installed.

* Extended ``if`` control structure with support for ``elif`` keyword.

* Changed default rules of :pkg-field:`build-type` field to infer
  "build-type:" for "Simple"/"Custom" automatically.

* :pkg-field:`license` field syntax changed to require SPDX
  expression syntax (using SPDX license list version ``3.0 2017-12-28``).

* Allow redundant leading or trailing commas in package fields (which
  require commas) such as :pkg-field:`build-depends`.


``cabal-version: 2.0``
----------------------

* New :pkg-field:`library:signatures` and :pkg-field:`mixins` fields
  added for supporting :ref:`Backpack`.

* New :pkg-field:`build-tool-depends` field added for adding
  build-time dependencies of executable components.

* New :pkg-field:`custom-setup:autogen-modules` field added for declaring modules
  which are generated at build time.

* Support for new PVP_ caret-style version operator (``^>=``) added to
  :pkg-field:`build-depends`.

* Add support for new :pkg-section:`foreign-library` stanza.

* Add support for :ref:`sublibrary stanzas <sublibs>`.

* New CPP Macro ``CURRENT_PACKAGE_VERSION``.

``cabal-version: 1.24``
-----------------------

* New :pkg-section:`custom-setup` stanza and
  :pkg-field:`custom-setup:setup-depends` field added for specifying dependencies
  of custom ``Setup.hs`` scripts.

* CPP Macros ``VERSION_$pkgname`` and ``MIN_VERSION_$pkgname`` are now
  also generated for the current package.

* New CPP Macros ``CURRENT_COMPONENT_ID`` and ``CURRENT_PACKAGE_KEY``.

* New :pkg-field:`extra-framework-dirs` field added for specifying
  extra locations to find OS X frameworks.

``cabal-version: 1.22``
-----------------------

* New :pkg-field:`library:reexported-modules` field.

* Support for ``-none`` version constraint added to
  :pkg-field:`build-depends`.

* New :pkg-field:`license` type ``ISC`` added.

``cabal-version: 1.20``
-----------------------

* Add support for new :pkg-field:`license-files` field for declaring
  multiple license documents.

* New CPP Macro ``MIN_TOOL_VERSION_$buildtool``.

* New :pkg-field:`license` types ``BSD2`` and ``MPL-2.0`` added.

``cabal-version: 1.18``
-----------------------

* Add support for new :pkg-field:`extra-doc-files` field for
  specifying extra file assets referenced by the Haddock
  documentation.

* New :pkg-field:`license` type ``AGPL`` and ``AGPL-3`` added.

* Add support for specifying a C/C++/obj-C source file in
  :pkg-field:`executable:main-is` field.

* Add ``getSysconfDir`` operation to ``Paths_`` API.

``cabal-version: 1.16``
-----------------------

.. todo::

   this needs to be researched; there were only few changes between
   1.12 and 1.18;

``cabal-version: 1.12``
-----------------------

* Change syntax of :pkg-field:`cabal-version` to support the new recommended
  ``cabal-version: x.y`` style



.. include:: references.inc


===================================================
/. 🚀 ./buildinfo-fields-reference.rst
===================================================

.. _buildinfo-field-reference:

Field Syntax Reference
======================

Notation
---------------

Field syntax is described as they are in the latest cabal file format version.

* terminals are enclosed in quotes and type set in typewriter script:

  .. math::

      \mathord{"}\mathtt{example}\mathord{"}

* non-terminals are type set in italic:

  .. math::

      \mathit{version\text-range}

* character sets are type set resembling regular expression notation:


  .. math::

      [ \mathord{"}\mathtt{1}\mathord{"} \cdots \mathord{"}\mathtt{9}\mathord{"} ]

  Character set complements have :math:`c` superscript:

  .. math::

      [ \mathord{"}\mathtt{1}\mathord{"} \cdots \mathord{"}\mathtt{9}\mathord{"} ]^c

* repetition is type set using regular expression inspired notation.
  Superscripts tell how many time to repeat:
  The generic notation is :math:`\in[n\ldots5]`, however there
  are common shorthands:
  :math:`\ast` for :math:`\in[0\ldots\infty]` (``many``),
  :math:`+` for :math:`\in[1\ldots\infty]` (``some``),
  :math:`?` for :math:`\in[0\ldots1]` (``optional``).

  Subscripts tell the used separator:

  .. math::

      \mathit{digit}^+_{\mathord{"}\mathtt{.}\mathord{"}}

  Would be ``digit(\.digit)*`` in common regex syntax.

* alternatives are listed in braces separated by vertical bar:

  .. math::

      \{ \mathit{foo} \mid \mathit{bar} \}

  In case of multiple alternatives, the stacked notation is used

  .. math::

      \left\{\begin{gathered}
      \mathit{one} \\
      \mathit{two} \\
      \mathit{three} \\
      \mathit{four} \\
      \mathit{five}
      \end{gathered}\right\}

* parenthesis are used only for grouping:

  .. math::

      \left(\mathit{foo} \mid \mathit{bar}\right)^+

* any amount of spaces, and at least single space are type set using
  :math:`\circ` and :math:`\bullet` respectively.
  They may appear standalone, not only as binary operators.

  .. math::

      \mathit{module} \bullet \mathord{``}\mathtt{as}\mathord{"} \bullet \mathit{module}

* While notation is heavily regular expression inspired, there
  are also fixed points, which allow represent recursive grammars


  .. math::

      \mathbf{fix}\; \mathit{expr}\; \mathbf{in}\; \mathit{digit}
      \mid \mathit{expr} \circ \mathord{``}\mathtt{+}\mathord{"} \circ \mathit{expr}
      \mid \mathord{``}\mathtt{(} \mathord{"} \circ \mathit{expr} \circ \mathord{``}\mathtt{)}\mathord{"}

Lists
-----

Many fields in cabal file format are lists. There are three variations:

Space separated 
    Are used for lists of things with simple grammars, for example :pkg-field:`ghc-options`

    .. math::
        {\mathop{\mathit{element}}}^\ast_{\bullet}

Comma separated 
    Are used for lists of things with complicated grammars, for example :pkg-field:`build-depends`
    There can be leading or trailing comma (but not both) since ``cabal-version: 2.2``.
    Note, the comma cannot exist alone.

    .. math::
        \mathrm{commalist}(\mathit{element}) =
        \left\{ {\mathop{\mathit{element}}}^\ast_{\left(\circ\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}\circ\right)}\mid\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}\circ{\mathop{\mathit{element}}}^+_{\left(\circ\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}\circ\right)}\mid{\mathop{\mathit{element}}}^+_{\left(\circ\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}\circ\right)}\circ\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}} \right\}

Optional comma separated 
    Surprisingly many fields can have optional comma separator.
    Since ``cabal-version: 3.0`` comma usage have to be consistent,
    in other words either used everywhere or nowhere.
    It's recommended to avoid using comma in these fields,
    an example field is :pkg-field:`default-extensions`.

    .. math::
        \mathrm{optcommalist}(\mathit{element}) =
        \left\{ \begin{gathered}{\mathop{\mathit{element}}}^\ast_{\bullet}\\{\mathop{\mathit{element}}}^\ast_{\left(\circ\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}\circ\right)}\\\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}\circ{\mathop{\mathit{element}}}^+_{\left(\circ\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}\circ\right)}\\{\mathop{\mathit{element}}}^+_{\left(\circ\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}\circ\right)}\circ\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}\end{gathered} \right\}

Non-terminals
-------------

In the syntax definitions below the following non-terminal symbols are used:

hs-string 
    String as in Haskell; it's recommended to avoid using Haskell-specific escapes.

    .. math::
        \mathop{\mathord{``}\mathtt{\text{"}}\mathord{"}}{\left\{ {[\mathop{\mathord{``}\mathtt{\text{"}}\mathord{"}}\mathop{\mathord{``}\mathtt{\text{\\}}\mathord{"}}]^c}\mid\left\{ \begin{gathered}\mathop{\mathord{``}\mathtt{\text{\\}\text{&}}\mathord{"}}\\\mathop{\mathord{``}\mathtt{\text{\\}\text{\\}}\mathord{"}}\\\left\{ \mathop{\mathord{``}\mathtt{\text{\\}n}\mathord{"}}\mid\mathop{\mathit{escapes}} \right\}\\\mathop{\mathord{``}\mathtt{\text{\\}}\mathord{"}}[\mathop{\mathord{``}\mathtt{0}\mathord{"}}\cdots\mathop{\mathord{``}\mathtt{9}\mathord{"}}]\\\mathop{\mathord{``}\mathtt{\text{\\}o}\mathord{"}}[\mathop{\mathord{``}\mathtt{0}\mathord{"}}\cdots\mathop{\mathord{``}\mathtt{7}\mathord{"}}]\\\mathop{\mathord{``}\mathtt{\text{\\}x}\mathord{"}}[\mathop{\mathord{``}\mathtt{0}\mathord{"}}\cdots\mathop{\mathord{``}\mathtt{9}\mathord{"}}\mathop{\mathord{``}\mathtt{A}\mathord{"}}\cdots\mathop{\mathord{``}\mathtt{F}\mathord{"}}\mathop{\mathord{``}\mathtt{a}\mathord{"}}\cdots\mathop{\mathord{``}\mathtt{f}\mathord{"}}]\\\left\{ \mathop{\mathord{``}\mathtt{\text{\\}\text{^}\text{@}}\mathord{"}}\mid\mathop{\mathit{control}} \right\}\\\left\{ \mathop{\mathord{``}\mathtt{\text{\\}NUL}\mathord{"}}\mid\mathop{\mathit{ascii}} \right\}\end{gathered} \right\} \right\}}^\ast_{}\mathop{\mathord{``}\mathtt{\text{"}}\mathord{"}}

unqual-name 
    Unqualified component names are used for package names, component names etc. but not flag names. Unqualified component name consist of components separated by dash, each component is non-empty alphanumeric string, with at least one alphabetic character. In other words, component may not look like a number.

    .. math::
        {\left({\mathop{\mathit{alpha\text{-}num}}}^\ast_{}\mathop{\mathit{alpha}}{\mathop{\mathit{alpha\text{-}num}}}^\ast_{}\right)}^+_{\mathop{\mathord{``}\mathtt{\text{-}}\mathord{"}}}

module-name 
    Haskell module name as recognized by Cabal parser.

    .. math::
        {\left(\mathop{\mathit{upper}}{\left\{ \mathop{\mathit{alpha\text{-}num}}\mid[\mathop{\mathord{``}\mathtt{\text{'}}\mathord{"}}\mathop{\mathord{``}\mathtt{\text{_}}\mathord{"}}] \right\}}^\ast_{}\right)}^+_{\mathop{\mathord{``}\mathtt{\text{.}}\mathord{"}}}

version 
    Version is to first approximation numbers separated by dots, where leading zero is not allowed and each version digit is consists at most of nine characters.

    .. math::
        {\left\{ \mathop{\mathord{``}\mathtt{0}\mathord{"}}\mid[\mathop{\mathord{``}\mathtt{1}\mathord{"}}\cdots\mathop{\mathord{``}\mathtt{9}\mathord{"}}]{[\mathop{\mathord{``}\mathtt{0}\mathord{"}}\cdots\mathop{\mathord{``}\mathtt{9}\mathord{"}}]}^{\in [0\ldots8]}_{} \right\}}^+_{\mathop{\mathord{``}\mathtt{\text{.}}\mathord{"}}}

version-range 
    Version range syntax is recursive. Also note the set syntax added in ``cabal-version: 3.0``, set cannot be empty.

    .. math::
        \mathbf{fix}\;\mathop{\mathit{version\text{-}range}}\;\mathbf{in}\;\left\{ \begin{gathered}\mathop{\mathord{``}\mathtt{\text{=}\text{=}}\mathord{"}}\circ\mathop{\mathit{version}}\\\mathop{\mathord{``}\mathtt{\text{>}}\mathord{"}}\circ\mathop{\mathit{version}}\\\mathop{\mathord{``}\mathtt{\text{<}}\mathord{"}}\circ\mathop{\mathit{version}}\\\mathop{\mathord{``}\mathtt{\text{<}\text{=}}\mathord{"}}\circ\mathop{\mathit{version}}\\\mathop{\mathord{``}\mathtt{\text{>}\text{=}}\mathord{"}}\circ\mathop{\mathit{version}}\\\mathop{\mathord{``}\mathtt{\text{^}\text{>}\text{=}}\mathord{"}}\circ\mathop{\mathit{version}}\\\mathop{\mathord{``}\mathtt{\text{=}\text{=}}\mathord{"}}\circ{\left\{ \mathop{\mathord{``}\mathtt{0}\mathord{"}}\mid[\mathop{\mathord{``}\mathtt{1}\mathord{"}}\cdots\mathop{\mathord{``}\mathtt{9}\mathord{"}}]{[\mathop{\mathord{``}\mathtt{0}\mathord{"}}\cdots\mathop{\mathord{``}\mathtt{9}\mathord{"}}]}^{\in [0\ldots8]}_{} \right\}}^+_{\mathop{\mathord{``}\mathtt{\text{.}}\mathord{"}}}\mathop{\mathord{``}\mathtt{\text{.}\text{*}}\mathord{"}}\\\mathop{\mathit{version\text{-}range}}\circ\mathop{\mathord{``}\mathtt{\text{|}\text{|}}\mathord{"}}\circ\mathop{\mathit{version\text{-}range}}\\\mathop{\mathit{version\text{-}range}}\circ\mathop{\mathord{``}\mathtt{\text{&}\text{&}}\mathord{"}}\circ\mathop{\mathit{version\text{-}range}}\\\mathop{\mathord{``}\mathtt{\text{(}}\mathord{"}}\circ\mathop{\mathit{version\text{-}range}}\circ\mathop{\mathord{``}\mathtt{\text{)}}\mathord{"}}\\\mathop{\mathord{``}\mathtt{\text{=}\text{=}}\mathord{"}}\circ\mathop{\mathord{``}\mathtt{\{}\mathord{"}}\circ{\mathop{\mathit{version}}}^+_{\left(\circ\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}\circ\right)}\circ\mathop{\mathord{``}\mathtt{\}}\mathord{"}}\\\mathop{\mathord{``}\mathtt{\text{^}\text{>}\text{=}}\mathord{"}}\circ\mathop{\mathord{``}\mathtt{\{}\mathord{"}}\circ{\mathop{\mathit{version}}}^+_{\left(\circ\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}\circ\right)}\circ\mathop{\mathord{``}\mathtt{\}}\mathord{"}}\end{gathered} \right\}


Build info fields
-----------------

asm-options 
    * Monoidal field
    * Available since ``cabal-version: 3.0``.
    * Documentation of :pkg-field:`library:asm-options`

    .. math::
        {\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}]^c}}^+_{} \right\}}^\ast_{\bullet}

asm-sources 
    * Monoidal field
    * Available since ``cabal-version: 3.0``.
    * Documentation of :pkg-field:`library:asm-sources`

    .. math::
        \mathrm{commalist}\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

autogen-includes 
    * Monoidal field
    * Available since ``cabal-version: 3.0``.
    * Documentation of :pkg-field:`library:autogen-includes`

    .. math::
        \mathrm{optcommalist}\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

autogen-modules 
    * Monoidal field
    * Available since ``cabal-version: 2.0``.
    * Documentation of :pkg-field:`library:autogen-modules`

    .. math::
        \mathrm{commalist}\left({\left(\mathop{\mathit{upper}}{\left\{ \mathop{\mathit{alpha\text{-}num}}\mid[\mathop{\mathord{``}\mathtt{\text{'}}\mathord{"}}\mathop{\mathord{``}\mathtt{\text{_}}\mathord{"}}] \right\}}^\ast_{}\right)}^+_{\mathop{\mathord{``}\mathtt{\text{.}}\mathord{"}}}\right)

build-depends 
    * Monoidal field
    * Documentation of :pkg-field:`library:build-depends`

    .. math::
        \mathrm{commalist}\left(\mathop{\mathit{pkg\text{-}name}}{\left(\mathop{\mathord{``}\mathtt{\text{:}}\mathord{"}}\left\{ \mathop{\mathit{unqual\text{-}name}}\mid\mathop{\mathord{``}\mathtt{\{}\mathord{"}}\circ{\mathop{\mathit{unqual\text{-}name}}}^+_{\left(\circ\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}\circ\right)}\circ\mathop{\mathord{``}\mathtt{\}}\mathord{"}} \right\}\right)}^?{\left(\circ\mathop{\mathit{version\text{-}range}}\right)}^?\right)

build-tool-depends 
    * Monoidal field
    * Documentation of :pkg-field:`library:build-tool-depends`

    .. math::
        \mathrm{commalist}\mathsf{\color{red}{TODO}}

build-tools 
    * Monoidal field
    * Deprecated since ``cabal-version: 2.0``: Please use 'build-tool-depends' field
    * Removed in ``cabal-version: 3.0``: Please use 'build-tool-depends' field.

    .. math::
        \mathrm{commalist}\mathsf{\color{red}{TODO}}

buildable 
    * Boolean field
    * Default: ``True``
    * Documentation of :pkg-field:`library:buildable`

    .. math::
        \left\{ \mathop{\mathord{``}\mathtt{True}\mathord{"}}\mid\mathop{\mathord{``}\mathtt{False}\mathord{"}} \right\}

c-sources 
    * Monoidal field
    * Documentation of :pkg-field:`library:c-sources`

    .. math::
        \mathrm{commalist}\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

cc-options 
    * Monoidal field
    * Documentation of :pkg-field:`library:cc-options`

    .. math::
        {\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}]^c}}^+_{} \right\}}^\ast_{\bullet}

cmm-options 
    * Monoidal field
    * Available since ``cabal-version: 3.0``.
    * Documentation of :pkg-field:`library:cmm-options`

    .. math::
        {\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}]^c}}^+_{} \right\}}^\ast_{\bullet}

cmm-sources 
    * Monoidal field
    * Available since ``cabal-version: 3.0``.
    * Documentation of :pkg-field:`library:cmm-sources`

    .. math::
        \mathrm{commalist}\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

cpp-options 
    * Monoidal field
    * Documentation of :pkg-field:`library:cpp-options`

    .. math::
        {\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}]^c}}^+_{} \right\}}^\ast_{\bullet}

cxx-options 
    * Monoidal field
    * Available since ``cabal-version: 2.2``.
    * Documentation of :pkg-field:`library:cxx-options`

    .. math::
        {\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}]^c}}^+_{} \right\}}^\ast_{\bullet}

cxx-sources 
    * Monoidal field
    * Available since ``cabal-version: 2.2``.
    * Documentation of :pkg-field:`library:cxx-sources`

    .. math::
        \mathrm{commalist}\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

default-extensions 
    * Monoidal field
    * Available since ``cabal-version: 1.10``.
    * Documentation of :pkg-field:`library:default-extensions`

    .. math::
        \mathrm{optcommalist}\mathsf{\color{red}{TODO}}

default-language 
    * Optional field
    * Available since ``cabal-version: 1.10``.
    * Documentation of :pkg-field:`library:default-language`

    .. math::
        \left\{ \begin{gathered}\mathop{\mathord{``}\mathtt{GHC2024}\mathord{"}}\\\mathop{\mathord{``}\mathtt{GHC2021}\mathord{"}}\\\mathop{\mathord{``}\mathtt{Haskell2010}\mathord{"}}\\\mathop{\mathord{``}\mathtt{Haskell98}\mathord{"}}\end{gathered} \right\}

extensions 
    * Monoidal field
    * Deprecated since ``cabal-version: 1.12``: Please use 'default-extensions' or 'other-extensions' fields.
    * Removed in ``cabal-version: 3.0``: Please use 'default-extensions' or 'other-extensions' fields.

    .. math::
        \mathrm{optcommalist}\mathsf{\color{red}{TODO}}

extra-bundled-libraries 
    * Monoidal field
    * Documentation of :pkg-field:`library:extra-bundled-libraries`

    .. math::
        \mathrm{commalist}\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

extra-dynamic-library-flavours 
    * Monoidal field
    * Available since ``cabal-version: 3.0``.
    * Documentation of :pkg-field:`library:extra-dynamic-library-flavours`

    .. math::
        \mathrm{commalist}\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

extra-framework-dirs 
    * Monoidal field
    * Documentation of :pkg-field:`library:extra-framework-dirs`

    .. math::
        \mathrm{optcommalist}\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

extra-ghci-libraries 
    * Monoidal field
    * Documentation of :pkg-field:`library:extra-ghci-libraries`

    .. math::
        \mathrm{commalist}\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

extra-lib-dirs 
    * Monoidal field
    * Documentation of :pkg-field:`library:extra-lib-dirs`

    .. math::
        \mathrm{optcommalist}\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

extra-lib-dirs-static 
    * Monoidal field
    * Available since ``cabal-version: 3.8``.
    * Documentation of :pkg-field:`library:extra-lib-dirs-static`

    .. math::
        \mathrm{optcommalist}\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

extra-libraries 
    * Monoidal field
    * Documentation of :pkg-field:`library:extra-libraries`

    .. math::
        \mathrm{commalist}\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

extra-libraries-static 
    * Monoidal field
    * Available since ``cabal-version: 3.8``.
    * Documentation of :pkg-field:`library:extra-libraries-static`

    .. math::
        \mathrm{commalist}\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

extra-library-flavours 
    * Monoidal field
    * Documentation of :pkg-field:`library:extra-library-flavours`

    .. math::
        \mathrm{commalist}\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

frameworks 
    * Monoidal field
    * Documentation of :pkg-field:`library:frameworks`

    .. math::
        \mathrm{optcommalist}\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

ghc-options 
    * Monoidal field
    * Documentation of :pkg-field:`library:ghc-options`

    .. math::
        {\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}]^c}}^+_{} \right\}}^\ast_{\bullet}

ghc-prof-options 
    * Monoidal field
    * Documentation of :pkg-field:`library:ghc-prof-options`

    .. math::
        {\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}]^c}}^+_{} \right\}}^\ast_{\bullet}

ghc-shared-options 
    * Monoidal field
    * Documentation of :pkg-field:`library:ghc-shared-options`

    .. math::
        {\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}]^c}}^+_{} \right\}}^\ast_{\bullet}

ghcjs-options 
    * Monoidal field
    * Documentation of :pkg-field:`library:ghcjs-options`

    .. math::
        {\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}]^c}}^+_{} \right\}}^\ast_{\bullet}

ghcjs-prof-options 
    * Monoidal field
    * Documentation of :pkg-field:`library:ghcjs-prof-options`

    .. math::
        {\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}]^c}}^+_{} \right\}}^\ast_{\bullet}

ghcjs-shared-options 
    * Monoidal field
    * Documentation of :pkg-field:`library:ghcjs-shared-options`

    .. math::
        {\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}]^c}}^+_{} \right\}}^\ast_{\bullet}

hs-source-dir 
    * Monoidal field
    * Deprecated since ``cabal-version: 1.2``: Please use 'hs-source-dirs'
    * Removed in ``cabal-version: 3.0``: Please use 'hs-source-dirs' field.

    .. math::
        \mathrm{optcommalist}\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

hs-source-dirs 
    * Monoidal field
    * Documentation of :pkg-field:`library:hs-source-dirs`

    .. math::
        \mathrm{optcommalist}\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

hsc2hs-options 
    * Monoidal field
    * Available since ``cabal-version: 3.6``.
    * Documentation of :pkg-field:`library:hsc2hs-options`

    .. math::
        {\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}]^c}}^+_{} \right\}}^\ast_{\bullet}

include-dirs 
    * Monoidal field
    * Documentation of :pkg-field:`library:include-dirs`

    .. math::
        \mathrm{optcommalist}\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

includes 
    * Monoidal field
    * Documentation of :pkg-field:`library:includes`

    .. math::
        \mathrm{optcommalist}\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

install-includes 
    * Monoidal field
    * Documentation of :pkg-field:`library:install-includes`

    .. math::
        \mathrm{optcommalist}\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

js-sources 
    * Monoidal field
    * Documentation of :pkg-field:`library:js-sources`

    .. math::
        \mathrm{commalist}\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

ld-options 
    * Monoidal field
    * Documentation of :pkg-field:`library:ld-options`

    .. math::
        {\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}]^c}}^+_{} \right\}}^\ast_{\bullet}

mixins 
    * Monoidal field
    * Available since ``cabal-version: 2.0``.
    * Documentation of :pkg-field:`library:mixins`

    .. math::
        \mathrm{commalist}\left(\mathop{\mathit{package\text{-}name}}{\left(\mathop{\mathord{``}\mathtt{\text{:}}\mathord{"}}\mathop{\mathit{library\text{-}name}}\right)}^?{\left(\bullet\left\{ \mid\mathop{\mathord{``}\mathtt{hiding}\mathord{"}}\circ\mathop{\mathord{``}\mathtt{\text{(}}\mathord{"}}\circ{\mathop{\mathit{module\text{-}name}}}^\ast_{\left(\circ\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}\circ\right)}\circ\mathop{\mathord{``}\mathtt{\text{)}}\mathord{"}}\mid\mathop{\mathord{``}\mathtt{\text{(}}\mathord{"}}\circ{\left(\mathop{\mathit{module\text{-}name}}{\left(\bullet\mathop{\mathord{``}\mathtt{as}\mathord{"}}\bullet\mathop{\mathit{module\text{-}name}}\right)}^?\right)}^\ast_{\left(\circ\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}\circ\right)}\circ\mathop{\mathord{``}\mathtt{\text{)}}\mathord{"}} \right\}{\left(\circ\mathop{\mathord{``}\mathtt{requires}\mathord{"}}\bullet\left\{ \mid\mathop{\mathord{``}\mathtt{hiding}\mathord{"}}\circ\mathop{\mathord{``}\mathtt{\text{(}}\mathord{"}}\circ{\mathop{\mathit{module\text{-}name}}}^\ast_{\left(\circ\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}\circ\right)}\circ\mathop{\mathord{``}\mathtt{\text{)}}\mathord{"}}\mid\mathop{\mathord{``}\mathtt{\text{(}}\mathord{"}}\circ{\left(\mathop{\mathit{module\text{-}name}}{\left(\bullet\mathop{\mathord{``}\mathtt{as}\mathord{"}}\bullet\mathop{\mathit{module\text{-}name}}\right)}^?\right)}^\ast_{\left(\circ\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}\circ\right)}\circ\mathop{\mathord{``}\mathtt{\text{)}}\mathord{"}} \right\}\right)}^?\right)}^?\right)

other-extensions 
    * Monoidal field
    * Documentation of :pkg-field:`library:other-extensions`

    .. math::
        \mathrm{optcommalist}\mathsf{\color{red}{TODO}}

other-languages 
    * Monoidal field
    * Available since ``cabal-version: 1.10``.
    * Documentation of :pkg-field:`library:other-languages`

    .. math::
        \mathrm{optcommalist}\left\{ \begin{gathered}\mathop{\mathord{``}\mathtt{GHC2024}\mathord{"}}\\\mathop{\mathord{``}\mathtt{GHC2021}\mathord{"}}\\\mathop{\mathord{``}\mathtt{Haskell2010}\mathord{"}}\\\mathop{\mathord{``}\mathtt{Haskell98}\mathord{"}}\end{gathered} \right\}

other-modules 
    * Monoidal field
    * Documentation of :pkg-field:`library:other-modules`

    .. math::
        \mathrm{commalist}\left({\left(\mathop{\mathit{upper}}{\left\{ \mathop{\mathit{alpha\text{-}num}}\mid[\mathop{\mathord{``}\mathtt{\text{'}}\mathord{"}}\mathop{\mathord{``}\mathtt{\text{_}}\mathord{"}}] \right\}}^\ast_{}\right)}^+_{\mathop{\mathord{``}\mathtt{\text{.}}\mathord{"}}}\right)

pkgconfig-depends 
    * Monoidal field
    * Documentation of :pkg-field:`library:pkgconfig-depends`

    .. math::
        \mathrm{commalist}\mathsf{\color{red}{TODO}}

virtual-modules 
    * Monoidal field
    * Available since ``cabal-version: 2.2``.
    * Documentation of :pkg-field:`library:virtual-modules`

    .. math::
        \mathrm{commalist}\left({\left(\mathop{\mathit{upper}}{\left\{ \mathop{\mathit{alpha\text{-}num}}\mid[\mathop{\mathord{``}\mathtt{\text{'}}\mathord{"}}\mathop{\mathord{``}\mathtt{\text{_}}\mathord{"}}] \right\}}^\ast_{}\right)}^+_{\mathop{\mathord{``}\mathtt{\text{.}}\mathord{"}}}\right)


Package description fields
--------------------------

author 
    * Free text field
    * Documentation of :pkg-field:`author`

bug-reports 
    * Free text field
    * Documentation of :pkg-field:`bug-reports`

build-type 
    * Optional field
    * Documentation of :pkg-field:`build-type`

    .. math::
        \left\{ \begin{gathered}\mathop{\mathord{``}\mathtt{Simple}\mathord{"}}\\\mathop{\mathord{``}\mathtt{Configure}\mathord{"}}\\\mathop{\mathord{``}\mathtt{Custom}\mathord{"}}\\\mathop{\mathord{``}\mathtt{Make}\mathord{"}}\\\mathop{\mathord{``}\mathtt{Default}\mathord{"}}\end{gathered} \right\}

cabal-version 
    * Optional field
    * Default: ``>=1.0``
    * Documentation of :pkg-field:`cabal-version`

    .. math::
        \mathop{\mathord{``}\mathtt{3\text{.}4}\mathord{"}}

category 
    * Free text field
    * Documentation of :pkg-field:`category`

copyright 
    * Free text field
    * Documentation of :pkg-field:`copyright`

data-dir 
    * Optional field
    * Default: ``.``
    * Documentation of :pkg-field:`data-dir`

    .. math::
        \left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

data-files 
    * Monoidal field
    * Documentation of :pkg-field:`data-files`

    .. math::
        \mathrm{commalist}\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

description 
    * Free text field
    * Documentation of :pkg-field:`description`

extra-doc-files 
    * Monoidal field
    * Documentation of :pkg-field:`extra-doc-files`

    .. math::
        \mathrm{commalist}\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

extra-source-files 
    * Monoidal field
    * Documentation of :pkg-field:`extra-source-files`

    .. math::
        \mathrm{commalist}\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

extra-tmp-files 
    * Monoidal field
    * Documentation of :pkg-field:`extra-tmp-files`

    .. math::
        \mathrm{commalist}\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

homepage 
    * Free text field
    * Documentation of :pkg-field:`homepage`

license 
    * Optional field
    * Default: ``NONE``
    * Documentation of :pkg-field:`license`

    .. math::
        \mathsf{\color{red}{TODO}}

license-file 
    * Monoidal field
    * Documentation of :pkg-field:`license-file`

    .. math::
        \left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

maintainer 
    * Free text field
    * Documentation of :pkg-field:`maintainer`

name 
    * Required field
    * Documentation of :pkg-field:`name`

    .. math::
        \mathop{\mathit{unqual\text{-}name}}

package-url 
    * Free text field
    * Documentation of :pkg-field:`package-url`

stability 
    * Free text field
    * Documentation of :pkg-field:`stability`

synopsis 
    * Free text field
    * Documentation of :pkg-field:`synopsis`

tested-with 
    * Monoidal field
    * Documentation of :pkg-field:`tested-with`

    .. math::
        \mathrm{optcommalist}\mathsf{\color{red}{TODO}}

version 
    * Required field
    * Documentation of :pkg-field:`version`

    .. math::
        {\left\{ \mathop{\mathord{``}\mathtt{0}\mathord{"}}\mid[\mathop{\mathord{``}\mathtt{1}\mathord{"}}\cdots\mathop{\mathord{``}\mathtt{9}\mathord{"}}]{[\mathop{\mathord{``}\mathtt{0}\mathord{"}}\cdots\mathop{\mathord{``}\mathtt{9}\mathord{"}}]}^{\in [0\ldots8]}_{} \right\}}^+_{\mathop{\mathord{``}\mathtt{\text{.}}\mathord{"}}}


Test-suite fields
-----------------

code-generators 
    * Monoidal field
    * Available since ``cabal-version: 3.8``.
    * Documentation of :pkg-field:`test-suite:code-generators`

    .. math::
        \mathrm{commalist}\left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

main-is 
    * Optional field
    * Documentation of :pkg-field:`test-suite:main-is`

    .. math::
        \left\{ \mathop{\mathit{hs\text{-}string}}\mid{{[\mathop{\mathord{``}\mathtt{\ }\mathord{"}}\mathop{\mathord{``}\mathtt{\text{,}}\mathord{"}}]^c}}^+_{} \right\}

test-module 
    * Optional field
    * Documentation of :pkg-field:`test-suite:test-module`

    .. math::
        {\left(\mathop{\mathit{upper}}{\left\{ \mathop{\mathit{alpha\text{-}num}}\mid[\mathop{\mathord{``}\mathtt{\text{'}}\mathord{"}}\mathop{\mathord{``}\mathtt{\text{_}}\mathord{"}}] \right\}}^\ast_{}\right)}^+_{\mathop{\mathord{``}\mathtt{\text{.}}\mathord{"}}}

type 
    * Optional field
    * Documentation of :pkg-field:`test-suite:type`

    .. math::
        \left\{ \mathop{\mathord{``}\mathtt{exitcode\text{-}stdio\text{-}1\text{.}0}\mathord{"}}\mid\mathop{\mathord{``}\mathtt{detailed\text{-}0\text{.}9}\mathord{"}} \right\}




===================================================
/. 🚀 ./cabal-context.rst
===================================================

.. highlight:: console

Cabal is the standard package system for 
Haskell_ software. It helps people to
configure, build and install Haskell software and to distribute it
easily to other users and developers.

There is a command line tool called ``cabal`` for working with Cabal
packages. It helps with installing existing packages and also helps
people developing their own packages. It can be used to work with local
packages or to install packages from online package archives, including
automatically installing dependencies. By default it is configured to
use Hackage_ which is Haskell's central
package archive that contains thousands of libraries and applications in
the Cabal package format.

What Cabal does
===============

Cabal is a package system for Haskell software. The point of a package
system is to enable software developers and users to easily distribute,
use and reuse software. A package system makes it easier for developers
to get their software into the hands of users. Equally importantly, it
makes it easier for software developers to be able to reuse software
components written by other developers.

Packaging systems deal with packages and with Cabal we call them *Cabal
packages*. The Cabal package is the unit of distribution. Every Cabal
package has a name and a version number which are used to identify the
package, e.g. ``filepath-1.0``.

Cabal packages can depend on other Cabal packages. There are tools to
enable automated package management. This means it is possible for
developers and users to install a package plus all of the other Cabal
packages that it depends on. It also means that it is practical to make
very modular systems using lots of packages that reuse code written by
many developers.

Cabal packages are source based and are typically (but not necessarily)
portable to many platforms and Haskell implementations. The Cabal
package format is designed to make it possible to translate into other
formats, including binary packages for various systems.

When distributed, Cabal packages use the standard compressed tarball
format, with the file extension ``.tar.gz``, e.g.
``filepath-1.0.tar.gz``.

Note that packages are not part of the Haskell language, rather they are
a feature provided by the combination of Cabal and GHC (and several
other Haskell implementations).

A tool for working with packages
--------------------------------

There is a command line tool, called "``cabal``", that users and
developers can use to build and install Cabal packages. It can be used
for both local packages and for packages available remotely over the
network. It can automatically install Cabal packages plus any other
Cabal packages they depend on.

Developers can use the tool with packages in local directories, e.g.

::

    $ cd foo/
    $ cabal install

While working on a package in a local directory, developers can run the
individual steps to configure and build, and also generate documentation
and run test suites and benchmarks.

It is also possible to install several local packages at once, e.g.

::

    $ cabal install foo/ bar/

Developers and users can use the tool to install packages from remote
Cabal package archives. By default, the ``cabal`` tool is configured to
use the central Haskell package archive called
Hackage_ but it is possible to use it
with any other suitable archive.

::

    $ cabal install xmonad

This will install the ``xmonad`` package plus all of its dependencies.

In addition to packages that have been published in an archive,
developers can install packages from local or remote tarball files, for
example

::

    $ cabal install foo-1.0.tar.gz
    $ cabal install http://example.com/foo-1.0.tar.gz

Cabal provides a number of ways for a user to customise how and where a
package is installed. They can decide where a package will be installed,
which Haskell implementation to use and whether to build optimised code
or build with the ability to profile code. It is not expected that users
will have to modify any of the information in the ``.cabal`` file.

Note that ``cabal`` is not the only tool for working with Cabal
packages. Due to the standardised format and a library for reading
``.cabal`` files, there are several other special-purpose tools.

What's in a package
-------------------

A Cabal package consists of: 

-  Haskell software, including libraries, executables and tests
-  metadata about the package in a standard human and machine readable
   format (the "``.cabal``" file)
-  a standard interface to build the package (the "``Setup.hs``" file)

The ``.cabal`` file contains information about the package, supplied by
the package author. In particular it lists the other Cabal packages that
the package depends on.

For full details on what goes in the ``.cabal`` and ``Setup.hs`` files,
and for all the other features provided by the build system, see the
section on :doc:`How to package Haskell code <how-to-package-haskell-code>`.

Cabal featureset
----------------

Cabal and its associated tools and websites covers: 

-  a software build system
-  software configuration
-  packaging for distribution
-  automated package management

   -  natively using the ``cabal`` command line tool; or
   -  by translation into native package formats such as RPM or deb

-  web and local Cabal package archives

   -  central Hackage website with 1000's of Cabal packages

Some parts of the system can be used without others. In particular the
built-in build system for simple packages is optional: it is possible to
use custom build systems.

Similar systems
---------------

The Cabal system is roughly comparable with the system of Python Eggs,
Ruby Gems or Perl distributions. Each system has a notion of
distributable packages, and has tools to manage the process of
distributing and installing packages.

Hackage is an online archive of Cabal packages, roughly comparable to
CPAN.

Cabal is often compared with autoconf and automake and there is some
overlap in functionality. The most obvious similarity is that the
command line interface for actually configuring and building packages
follows the same steps and has many of the same configuration
parameters.

::

    $ ./configure --prefix=...
    $ make
    $ make install

compared to 

::

    $ cabal configure --prefix=...
    $ cabal build
    $ cabal install

Cabal's build system for simple packages is considerably less flexible
than make/automake, but has builtin knowledge of how to build Haskell
code and requires very little manual configuration. Cabal's simple build
system is also portable to Windows, without needing a Unix-like
environment such as cygwin/mingwin.

Compared to autoconf, Cabal takes a somewhat different approach to
package configuration. Cabal's approach is designed for automated
package management. Instead of having a configure script that tests for
whether dependencies are available, Cabal packages specify their
dependencies. There is some scope for optional and conditional
dependencies. By having package authors specify dependencies it makes it
possible for tools to install a package and all of its dependencies
automatically. It also makes it possible to translate (in a
mostly-automatically way) into another package format like RPM or deb
which also have automatic dependency resolution.


.. include:: references.inc
 

===================================================
/. 🚀 ./package-concepts.rst
===================================================

Package concepts
================

Before diving into the details of writing packages it helps to
understand a bit about packages in the Haskell world and the particular
approach that Cabal takes.

The point of packages
---------------------

Packages are a mechanism for organising and distributing code. Packages
are particularly suited for "programming in the large", that is building
big systems by using and re-using code written by different people at
different times.

People organise code into packages based on functionality and
dependencies. Social factors are also important: most packages have a
single author, or a relatively small team of authors.

Packages are also used for distribution: the idea is that a package can
be created in one place and be moved to a different computer and be
usable in that different environment. There are a surprising number of
details that have to be got right for this to work, and a good package
system helps to simplify this process and make it reliable.

Packages come in two main flavours: libraries of reusable code, and
complete programs. Libraries present a code interface, an API, while
programs can be run directly. In the Haskell world, library packages
expose a set of Haskell modules as their public interface. Cabal
packages can contain a library or executables or both.

Some programming languages have packages as a builtin language concept.
For example in Java, a package provides a local namespace for types and
other definitions. In the Haskell world, packages are not a part of the
language itself. Haskell programs consist of a number of modules, and
packages just provide a way to partition the modules into sets of
related functionality. Thus the choice of module names in Haskell is
still important, even when using packages.

Package names and versions
--------------------------

All packages have a name, e.g. "HUnit". Package names are assumed to be
unique. Cabal package names may contain letters, numbers and hyphens,
but not spaces and may also not contain a hyphened section consisting of
only numbers. The namespace for Cabal packages is flat, not
hierarchical.

Packages also have a version, e.g "1.1". This matches the typical way in
which packages are developed. Strictly speaking, each version of a
package is independent, but usually they are very similar. Cabal package
versions follow the conventional numeric style, consisting of a sequence
of digits such as "1.0.1" or "2.0". There are a range of common
conventions for "versioning" packages, that is giving some meaning to
the version number in terms of changes in the package, such as
e.g. `SemVer <http://semver.org>`__; however, for packages intended to be
distributed via Hackage Haskell's `Package Versioning Policy <https://pvp.haskell.org/>`_ applies
(see also the `PVP/SemVer FAQ section <https://pvp.haskell.org/faq/#semver>`__).

The combination of package name and version is called the *package ID*
and is written with a hyphen to separate the name and version, e.g.
"HUnit-1.1".

For Cabal packages, the combination of the package name and version
*uniquely* identifies each package. Or to put it another way: two
packages with the same name and version are considered to *be* the same.

Strictly speaking, the package ID only identifies each Cabal *source*
package; the same Cabal source package can be configured and built in
different ways. There is a separate installed package ID that uniquely
identifies each installed package instance. Most of the time however,
users need not be aware of this detail.

Kinds of package: Cabal vs GHC vs system
----------------------------------------

It can be slightly confusing at first because there are various
different notions of package floating around. Fortunately the details
are not very complicated.

Cabal packages
    Cabal packages are really source packages. That is they contain
    Haskell (and sometimes C) source code.

    Cabal packages can be compiled to produce GHC packages. They can
    also be translated into operating system packages.

GHC packages
    This is GHC's view on packages. GHC only cares about library
    packages, not executables. Library packages have to be registered
    with GHC for them to be available in GHCi or to be used when
    compiling other programs or packages.

    The low-level tool ``ghc-pkg`` is used to register GHC packages and
    to get information on what packages are currently registered.

    You never need to make GHC packages manually. When you build and
    install a Cabal package containing a library then it gets registered
    with GHC automatically.

    Haskell implementations other than GHC have essentially the same
    concept of registered packages. For the most part, Cabal hides the
    slight differences.

Operating system packages
    On operating systems like Linux and Mac OS X, the system has a
    specific notion of a package and there are tools for installing and
    managing packages.

    The Cabal package format is designed to allow Cabal packages to be
    translated, mostly-automatically, into operating system packages.
    They are usually translated 1:1, that is a single Cabal package
    becomes a single system package.

    It is also possible to make Windows installers from Cabal packages,
    though this is typically done for a program together with all of its
    library dependencies, rather than packaging each library separately.

Unit of distribution
--------------------

The Cabal package is the unit of distribution. This means that
each Cabal package can be distributed on its own, in source or binary
form. There may be dependencies between packages, but there is
usually a degree of flexibility in which versions of packages can work
together so distributing them independently makes sense.

It is perhaps easiest to see what being "the unit of distribution"
means by contrast to an alternative approach. Many projects are made up
of several interdependent packages and during development these might
all be kept under one common directory tree and be built and tested
together. When it comes to distribution however, rather than
distributing them all together in a single tarball, it is required that
they each be distributed independently in their own tarballs.

Cabal's approach is to say that if you can specify a dependency on a
package then that package should be able to be distributed
independently. Or to put it the other way round, if you want to
distribute it as a single unit, then it should be a single package.

Explicit dependencies and automatic package management
------------------------------------------------------

Cabal takes the approach that all packages dependencies are specified
explicitly and specified in a declarative way. The point is to enable
automatic package management. This means tools like ``cabal`` can
resolve dependencies and install a package plus all of its dependencies
automatically. Alternatively, it is possible to mechanically (or mostly
mechanically) translate Cabal packages into system packages and let the
system package manager install dependencies automatically.

It is important to track dependencies accurately so that packages can
reliably be moved from one system to another system and still be able to
build it there. Cabal is therefore relatively strict about specifying
dependencies. For example Cabal's default build system will not even let
code build if it tries to import a module from a package that isn't
listed in the ``.cabal`` file, even if that package is actually
installed. This helps to ensure that there are no "untracked
dependencies" that could cause the code to fail to build on some other
system.

The explicit dependency approach is in contrast to the traditional
"./configure" approach where instead of specifying dependencies
declaratively, the ``./configure`` script checks if the dependencies are
present on the system. Some manual work is required to transform a
``./configure`` based package into a Linux distribution package (or
similar). This conversion work is usually done by people other than the
package author(s). The practical effect of this is that only the most
popular packages will benefit from automatic package management.
Instead, Cabal forces the original author to specify the dependencies
but the advantage is that every package can benefit from automatic
package management.

The "./configure" approach tends to encourage packages that adapt
themselves to the environment in which they are built, for example by
disabling optional features so that they can continue to work when a
particular dependency is not available. This approach makes sense in a
world where installing additional dependencies is a tiresome manual
process and so minimising dependencies is important. The automatic
package management view is that packages should just declare what they
need and the package manager will take responsibility for ensuring that
all the dependencies are installed.

Sometimes of course optional features and optional dependencies do make
sense. Cabal packages can have optional features and varying
dependencies. These conditional dependencies are still specified in a
declarative way however and remain compatible with automatic package
management. The need to remain compatible with automatic package
management means that Cabal's conditional dependencies system is a bit
less flexible than with the "./configure" approach.

.. note::
   `GNU autoconf places restrictions on paths, including the
   path that the user builds a package from.
   <https://www.gnu.org/software/autoconf/manual/autoconf.html#File-System-Conventions>`_
   Package authors using ``build-type: configure`` should be aware of
   these restrictions; because users may be unexpectedly constrained and
   face mysterious errors, it is recommended that ``build-type: configure``
   is only used where strictly necessary.

Portability
-----------

One of the purposes of Cabal is to make it easier to build packages on
different platforms (operating systems and CPU architectures), with
different compiler versions and indeed even with different Haskell
implementations. (Yes, there are Haskell implementations other than
GHC!)

Cabal provides abstractions of features present in different Haskell
implementations and wherever possible it is best to take advantage of
these to increase portability. Where necessary however it is possible to
use specific features of specific implementations.

For example a package author can list in the package's ``.cabal`` what
language extensions the code uses. This allows Cabal to figure out if
the language extension is supported by the Haskell implementation that
the user picks. Additionally, certain language extensions such as
Template Haskell require special handling from the build system and by
listing the extension it provides the build system with enough
information to do the right thing.

Another similar example is linking with foreign libraries. Rather than
specifying GHC flags directly, the package author can list the libraries
that are needed and the build system will take care of using the right
flags for the compiler. Additionally this makes it easier for tools to
discover what system C libraries a package needs, which is useful for
tracking dependencies on system libraries (e.g. when translating into
Linux distribution packages).

In fact both of these examples fall into the category of explicitly
specifying dependencies. Not all dependencies are other Cabal packages.
Foreign libraries are clearly another kind of dependency. It's also
possible to think of language extensions as dependencies: the package
depends on a Haskell implementation that supports all those extensions.

Where compiler-specific options are needed however, there is an "escape
hatch" available. The developer can specify implementation-specific
options and more generally there is a configuration mechanism to
customise many aspects of how a package is built depending on the
Haskell implementation, the operating system, computer architecture and
user-specified configuration flags.


===================================================
/. 🚀 ./cabal-interface-stability.rst
===================================================

Stability of Cabal interfaces
=============================

The Cabal library and related infrastructure is still under active
development. New features are being added and limitations and bugs are
being fixed. This requires internal changes and often user visible
changes as well. We therefore cannot promise complete future-proof
stability, at least not without halting all development work.

This section documents the aspects of the Cabal interface that we can
promise to keep stable and which bits are subject to change.

Cabal file format
-----------------

This is backwards compatible and mostly forwards compatible. New fields
can be added without breaking older versions of Cabal. Fields can be
deprecated without breaking older packages.

Command-line interface
----------------------

Very Stable Command-line interfaces
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  ``./setup configure``
-  ``--prefix``
-  ``--user``
-  ``--ghc``, ``--uhc``
-  ``--verbose``
-  ``--prefix``

-  ``./setup build``
-  ``./setup install``
-  ``./setup register``
-  ``./setup copy``

Stable Command-line interfaces
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Unstable command-line
~~~~~~~~~~~~~~~~~~~~~

Functions and Types
-------------------

The Cabal library follows the `Package Versioning Policy`_.
This means that within a stable major release, for example 1.2.x, there
will be no incompatible API changes. But minor versions increments, for
example 1.2.3, indicate compatible API additions.

The Package Versioning Policy does not require any API guarantees
between major releases, for example between 1.2.x and 1.4.x. In practice
of course not everything changes between major releases. Some parts of
the API are more prone to change than others. The rest of this section
gives some informal advice on what level of API stability you can expect
between major releases.

Very Stable API
~~~~~~~~~~~~~~~

-  ``defaultMain``

-  ``defaultMainWithHooks defaultUserHooks``

But regular ``defaultMainWithHooks`` isn't stable since ``UserHooks``
changes.

Semi-stable API
~~~~~~~~~~~~~~~

-  ``UserHooks`` The hooks API will change in the future

-  ``Distribution.*`` is mostly declarative information about packages
   and is somewhat stable.

Unstable API
~~~~~~~~~~~~

Everything under ``Distribution.Simple.*`` has no stability guarantee.

Hackage
-------

The index format is a partly stable interface. It consists of a tar.gz
file that contains directories with ``.cabal`` files in. In future it
may contain more kinds of files so do not assume every file is a
``.cabal`` file. Incompatible revisions to the format would involve
bumping the name of the index file, i.e., ``00-index.tar.gz``,
``01-index.tar.gz`` etc.


.. include:: references.inc

.. code-block:: 

    .. -*- rst -*-
       This file contains commonly used link-references
       See also "extlinks" in conf.py
    
    .. _`Package Versioning Policy`:
    .. _PVP: http://pvp.haskell.org/
    
    .. _Hackage: http://hackage.haskell.org/
    
    .. _Haskell: http://www.haskell.org/
    
    .. _Haddock: http://www.haskell.org/haddock/
    
    .. _Alex: http://www.haskell.org/alex/
    
    .. _Happy: http://www.haskell.org/happy/
    
    .. _Hoogle: http://www.haskell.org/hoogle/
    
    .. _HsColour: http://www.cs.york.ac.uk/fp/darcs/hscolour/
    
    .. _cpphs: http://projects.haskell.org/cpphs/
    
    .. _ABNF: https://tools.ietf.org/html/rfc5234
